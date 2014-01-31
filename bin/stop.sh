#!/bin/bash 

# stop server and grunt
# for i in `ps | grep 'python\|grunt' | tail -n 2 | awk '{print $1}'`
JOBPYTHON=`ps | grep "SimpleHTTPServer" | head -n 1 | awk '{print $1}'`
JOBGRUNT=`ps | grep "grunt" | head -n 1 | awk '{print $1}'`

echo "killing python: ${JOBPYTHON}"
kill ${JOBPYTHON}

echo "killing grunt: ${JOBGRUNT}"
kill ${JOBGRUNT}

# success
exit 0
