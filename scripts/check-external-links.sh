#!/usr/bin/env bash
set -euo pipefail

# assumes you’ve already built to ./build
# if not, run: npm run build

npx linkinator ./build \
  --recurse \
  --skip '^(mailto:|tel:|#|javascript:|about:blank)|localhost|127\.0\.0\.1' \
  --timeout 30000 \
  --concurrency 20
