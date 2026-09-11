#!/usr/bin/env bash
set -euo pipefail

# assumes you’ve already built to ./build
# if not, run: npm run build

npx linkinator ./build \
  --recurse \
  --skip '^(mailto:|tel:|#|javascript:|about:blank)|localhost|127\.0\.0\.1|support\.google\.com/displayvideo/topic/6071843|support\.google\.com/looker-studio/topic/7059081|support\.google\.com/displayvideo/answer/7243138|support\.google\.com/displayvideo/topic/9060429|support\.google\.com/displayvideo/answer/11967043' \
  --timeout 30000 \
  --concurrency 20
