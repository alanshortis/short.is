#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
source "$SCRIPT_DIR/../.env"

export AWS_ACCESS_KEY_ID
export AWS_SECRET_ACCESS_KEY

if ! command -v aws &> /dev/null; then
  echo "❌ AWS CLI is not installed. Install it with: brew install awscli"
  exit 1
fi

BUCKET="short.is"
REGION="eu-north-1"

ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
SOURCE="$ROOT/photos"

if [ ! -d "$SOURCE" ]; then
  echo "❌ $SOURCE does not exist. Create a 'photos' folder in the project root."
  exit 1
fi

FILE_COUNT=$(find "$SOURCE" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.avif" \) | wc -l | tr -d ' ')

if [ "$FILE_COUNT" -eq 0 ]; then
  echo "🤷‍♂️ Nothing to upload"
  exit 0
fi

echo "🚀 Uploading $FILE_COUNT images to S3..."
echo ""

aws s3 sync "$SOURCE" "s3://$BUCKET/" \
  --exclude "*" \
  --include "*.jpg" \
  --include "*.jpeg" \
  --include "*.png" \
  --include "*.avif" \
  --region "$REGION"
  # --cache-control "public, max-age=31536000, immutable" \

echo ""
echo "🎉 Done"
