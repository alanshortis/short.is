#!/bin/bash
set -euo pipefail

# awscli, imagemagick

WIDTH=1600

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
  echo "No source images to convert."
  exit 0
fi

echo "🏗️  Converting $FILE_COUNT image(s) to avif..."
echo ""

CONVERTED=0
SKIPPED=0

while read -r file; do
  output="${file%.*}.avif"

  if [ -f "$output" ] && [ "$output" -nt "$file" ]; then
    SKIPPED=$((SKIPPED + 1))
    continue
  fi

  magick "$file" -resize "${WIDTH}x${WIDTH}>" -quality "75" -strip "$output"
  size=$(stat -f%z "$output")
  echo "  📷  $(basename "$output")"
  CONVERTED=$((CONVERTED + 1))
done < <(find "$SOURCE" "${FIND_PATTERN[@]}")

echo ""
echo "🎉 Converted $CONVERTED, with $SKIPPED others already converted"
echo ""

AVIF_FILES=()
while read -r f; do
  AVIF_FILES+=("$f")
done < <(find "$SOURCE" -type f -iname "*.avif")

if [ ${#AVIF_FILES[@]} -eq 0 ]; then
  echo "No AVIF files to upload."
  exit 0
fi

echo "🔍 Checking ${#AVIF_FILES[@]} AVIF file(s) against S3..."
echo ""

EXISTING_KEYS=$(aws s3api list-objects-v2 \
  --bucket "$BUCKET" \
  --region "$REGION" \
  --query "Contents[].Key" \
  --output text 2>/dev/null || true)

UPLOADED=0
EXISTED=0
EXISTED_NAMES=()

for file in "${AVIF_FILES[@]}"; do
  key="${file#$SOURCE/}"

  if echo "$EXISTING_KEYS" | tr '\t' '\n' | grep -qxF "$key"; then
    EXISTED=$((EXISTED + 1))
    EXISTED_NAMES+=("$key")
  else
    aws s3 cp "$file" "s3://$BUCKET/$key" --region "$REGION" > /dev/null
    echo "  ✅ Uploaded $key"
    UPLOADED=$((UPLOADED + 1))
  fi
done

if [ ${#EXISTED_NAMES[@]} -gt 0 ]; then
  echo "😨 ${#EXISTED_NAMES[@]} file(s) already exist in S3 (not overwritten):"
  for name in "${EXISTED_NAMES[@]}"; do
    echo "   📷 $name"
  done
  echo ""
fi

echo ""
echo "🎉 $UPLOADED new photo(s) synced"
echo "🤔 $EXISTED files already in S3"
