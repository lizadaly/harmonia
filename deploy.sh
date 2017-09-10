NODE_ENV=production webpack
scp -r dist/* django@162.243.253.184:apps/games/harmonia
