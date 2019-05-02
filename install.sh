#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

(cd "$DIR/client/phone" && yarn)
(cd "$DIR/client/screen" && yarn)
(cd "$DIR/server" && yarn)
