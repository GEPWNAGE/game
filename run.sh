#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

(cd "$DIR/client/phone" && yarn start) & (cd "$DIR/client/screen" && yarn start) & (cd "$DIR/server" && yarn start)
