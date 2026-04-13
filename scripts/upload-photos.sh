#!/bin/bash
set -euo pipefail

# awscli, imagemagick

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
SOURCE="$ROOT/photos"
BUCKET="short.is"
REGION="eu-north-1"
FIND_PATTERN=(-type f \( -iname "*.jpg" -o -iname "*.png" \))

source "$SCRIPT_DIR/../.env"
export AWS_ACCESS_KEY_ID
export AWS_SECRET_ACCESS_KEY

FILE_COUNT=$(find "$SOURCE" "${FIND_PATTERN[@]}" | wc -l | tr -d ' ')

if [ "$FILE_COUNT" -eq 0 ]; then
  echo "😨 Nothing to convert"
  exit 0
fi

echo "ℹ️  Converting to avif..."
echo ""

CONVERTED=0
SKIPPED=0

VARIANTS=("700:" "1400:-2x" "2800:-4x")

while read -r file; do
  base="${file%.*}"
  skipped_this=true

  dims=$(magick identify -format "%wx%h" "$file")
  w="${dims%x*}"
  h="${dims#*x}"

  for variant in "${VARIANTS[@]}"; do
    size="${variant%%:*}"
    suffix="${variant#*:}"
    output="${base}${suffix}.avif"

    # Reduce near-square ratios to keep intrinsic area more consistent
    if [ "$w" -eq "$h" ]; then
      # 6x6 (1:1)
      size=$(( size * 80 / 100 ))
    elif [ $(( w * 6 )) -eq $(( h * 7 )) ] || [ $(( w * 7 )) -eq $(( h * 6 )) ]; then
      # 6x7 (7:6 / 6:7)
      size=$(( size * 85 / 100 ))
    elif [ $(( w * 3 )) -eq $(( h * 4 )) ] || [ $(( w * 4 )) -eq $(( h * 3 )) ]; then
      # 4:3 / 3:4
      size=$(( size * 90 / 100 ))
    fi

    if [ ! -f "$output" ] || [ "$file" -nt "$output" ]; then
      magick "$file" -auto-orient -resize "${size}x${size}>" -quality "75" -strip "$output"
      echo "  📷 $(basename "$output")"
      skipped_this=false
    fi
  done

  if [ "$skipped_this" = true ]; then
    SKIPPED=$((SKIPPED + 1))
  else
    CONVERTED=$((CONVERTED + 1))
  fi
done < <(find "$SOURCE" "${FIND_PATTERN[@]}")

echo ""
echo "🎉 Converted $CONVERTED, with $SKIPPED others already converted"
echo ""

AVIF_FILES=()
while read -r f; do
  AVIF_FILES+=("$f")
done < <(find "$SOURCE" -type f -iname "*.avif")

if [ ${#AVIF_FILES[@]} -eq 0 ]; then
  echo "😨 Nothing to upload"
  exit 0
fi

echo "📤 Uploading ${#AVIF_FILES[@]} AVIFs to S3..."
echo ""

UPLOADED=0

for file in "${AVIF_FILES[@]}"; do
  key="${file#$SOURCE/}"
  aws s3 cp "$file" "s3://$BUCKET/$key" --region "$REGION" > /dev/null
  echo "  ✅ Uploaded $key"
  UPLOADED=$((UPLOADED + 1))
done

echo ""
echo "🎉 $UPLOADED photo(s) synced"
