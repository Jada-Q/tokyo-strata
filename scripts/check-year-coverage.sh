#!/usr/bin/env bash
# Check yearOfConstruction coverage in a PLATEAU CityGML zip.
# Usage: ./check-year-coverage.sh <citygml.zip>
# Threshold: GO if >= 40%, else NO-GO.

set -euo pipefail

ZIP="${1:-}"
if [[ -z "$ZIP" || ! -f "$ZIP" ]]; then
  echo "usage: $0 <citygml.zip>" >&2
  exit 1
fi

total=$(unzip -p "$ZIP" "udx/bldg/*.gml" 2>/dev/null | grep -c '<bldg:Building ' || true)
withYear=$(unzip -p "$ZIP" "udx/bldg/*.gml" 2>/dev/null | grep -c 'yearOfConstruction' || true)

if [[ "$total" -eq 0 ]]; then
  echo "No buildings found in $ZIP" >&2
  exit 1
fi

pct=$(awk "BEGIN { printf \"%.2f\", $withYear * 100 / $total }")

echo "Zip:                       $(basename "$ZIP")"
echo "Total buildings:           $total"
echo "With yearOfConstruction:   $withYear"
echo "Coverage:                  ${pct}%"

threshold=40
go=$(awk "BEGIN { print ($pct >= $threshold) ? 1 : 0 }")
if [[ "$go" -eq 1 ]]; then
  echo "Decision:                  GO (>= ${threshold}%)"
  exit 0
else
  echo "Decision:                  NO-GO (< ${threshold}%)"
  exit 2
fi
