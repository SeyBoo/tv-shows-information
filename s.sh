#!/bin/sh
rm -f .env.local
file=".env.local"
next="NEXT_PUBLIC_"
echo $next'BACKEND_TYPE=dummy' >> $file
cat $file
npm install
echo Successfully setup