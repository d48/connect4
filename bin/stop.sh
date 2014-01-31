#!/bin/bash 

# stop server and grunt
# for i in `ps | grep 'python\|grunt' | tail -n 2 | awk '{print $1}'`
JOBLINE=`ps | grep "[m]ake start" | awk '{print $1}'`

echo "killing script: ${JOBLINE}"
kill -TERM -${JOBLINE}

# success
exit 0
