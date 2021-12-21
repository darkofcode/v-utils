#!/usr/bin/env node
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
$(which node) /home/zmenka/kinodes/back/admin/set-cloudflare-ip.js
# echo 'hello' >> /home/zmenka/kinodes/back/admin/test.txt