#!/bin/sh

user=root
hostname=134.122.21.116
destination=/var/www/chat.todofull.club
filename=dist.tar.gz

# compress dist folder
tar -zvcf $filename ./dist

# upload file to server
scp $filename $user@$hostname:$destination

# extract files and move to production
ssh $user@$hostname <<EOF
  cd $destination
  mkdir .tmp
  tar -xzvf $filename -C ./.tmp &&
  mv dist old_dist_$(date +%s)
  mv .tmp/dist ./
  rm -d $filename .tmp
EOF

rm $filename