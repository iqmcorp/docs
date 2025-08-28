#!/usr/bin/env bash
set -euo pipefail

REPORT="${1:-link-report.json}"

if [ ! -f "$REPORT" ]; then
  echo "❌ Missing $REPORT (run linkinator with --json first)."
  exit 2
fi

# Collect help.iqm.com URLs that Linkinator saw (unique)
mapfile -t HELP_URLS < <(jq -r '
  .links[] 
  | select(.url | test("^https?://help\\.iqm\\.com/")) 
  | .url
' "$REPORT" | sort -u)

if [ ${#HELP_URLS[@]} -eq 0 ]; then
  echo "✅ No help.iqm.com links to check."
  exit 0
fi

echo "🔎 Checking ${#HELP_URLS[@]} help.iqm.com URLs for soft 404s..."

FAILS=()

for url in "${HELP_URLS[@]}"; do
  # Follow redirects, modest timeout, friendly UA
  BODY="$(curl -sL --max-time 25 -A 'IQM-Link-Check/1.0' "$url" || true)"

  # Heuristics: add/edit patterns as you learn the help center’s phrasing
  if echo "$BODY" | grep -Eiq \
    '(page not found|article not found|not[[:space:]-]*found|doesn.t exist|we couldn.t find|404[^0-9])'
  then
    echo "❌ Soft 404 detected: $url"
    FAILS+=("$url")
  else
    echo "✅ OK: $url"
  fi
done

if [ ${#FAILS[@]} -gt 0 ]; then
  echo ""
  echo "=== Soft 404s on help.iqm.com ==="
  printf '%s\n' "${FAILS[@]}"
  exit 1
fi

echo "✅ No soft 404s detected on help.iqm.com."
