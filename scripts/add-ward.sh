#!/usr/bin/env bash
# Download + unzip + parse a single PLATEAU ward.
# Usage: ./add-ward.sh <ward-id> <citygml-zip-url> [cleanup]
# Pass "cleanup" as 3rd arg to remove udx/ + codelists/ after parse (saves ~5GB/ward).

set -euo pipefail

WARD="${1:?ward id required (e.g. chuo)}"
URL="${2:?citygml zip url required}"
CLEANUP="${3:-keep}"

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

if [[ "$CLEANUP" == "cleanup" ]]; then
  echo ">> [$WARD] cleanup udx + codelists + zip"
  rm -rf "$WARD_DIR/udx" "$WARD_DIR/codelists"
  rm -f "$ZIP"
fi

echo ">> [$WARD] done"
