#!/usr/bin/env bash
# Download + unzip + parse a single PLATEAU ward.
# Usage: ./add-ward.sh <ward-id> <citygml-zip-url>

set -euo pipefail

WARD="${1:?ward id required (e.g. chuo)}"
URL="${2:?citygml zip url required}"

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
WARD_DIR="$PROJECT_DIR/data/$WARD"
ZIP="$WARD_DIR/$WARD-citygml.zip"

mkdir -p "$WARD_DIR"

if [[ ! -f "$ZIP" ]]; then
  echo ">> [$WARD] download"
  curl -fsSL -o "$ZIP" "$URL"
fi

echo ">> [$WARD] unzip bldg + codelists"
( cd "$WARD_DIR" && unzip -oq "$WARD-citygml.zip" "udx/bldg/*" "codelists/*" )

if [[ ! -f "$WARD_DIR/buildings.geojson" ]]; then
  echo ">> [$WARD] parse"
  python3 "$PROJECT_DIR/scripts/parse_to_geojson.py" "$WARD_DIR" "$WARD_DIR/buildings.geojson"
else
  echo ">> [$WARD] geojson exists, skip parse"
fi

echo ">> [$WARD] done"
