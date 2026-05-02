#!/usr/bin/env bash
# Build tokyo.pmtiles from per-ward GeoJSON.
# Usage: ./build-tiles.sh
# Pipeline: merge → tippecanoe → pmtiles convert

set -euo pipefail
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PROJECT_DIR"

NDJSON=data/all-buildings.ndjson
MBTILES=data/tokyo.mbtiles
PMTILES=data/tokyo.pmtiles

echo ">> 1/3 merge per-ward GeoJSON → NDJSON"
python3 scripts/merge_to_ndjson.py "$NDJSON"

echo ""
echo ">> 2/3 tippecanoe → mbtiles"
rm -f "$MBTILES"
tippecanoe \
  -o "$MBTILES" \
  -l buildings \
  -Z9 -z14 \
  --drop-densest-as-needed \
  --extend-zooms-if-still-dropping \
  --no-tile-stats \
  --simplification=8 \
  --maximum-tile-bytes=500000 \
  --read-parallel \
  "$NDJSON"

echo ""
echo ">> 3/3 mbtiles → pmtiles"
rm -f "$PMTILES"
pmtiles convert "$MBTILES" "$PMTILES"

ls -lh "$MBTILES" "$PMTILES"
echo ""
echo ">> done. tokyo.pmtiles ready at: $PMTILES"
