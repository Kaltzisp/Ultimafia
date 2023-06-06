bash ./update_prep.sh

git restore react_main/build
git pull;

pm2 scale games +1 --no-autorestart;

while read port; do
  redis-cli publish deprecate $port;
  echo $port
done < to_delete_port

pm2 restart www;
