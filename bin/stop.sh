#!/bin/bash 

# stop server and grunt
# for i in `ps | grep 'python\|grunt' | tail -n 2 | awk '{print $1}'`
JOBLINE=`ps -ef | grep "[s]tart.sh" | awk '{print $3}'`

echo "killing script: ${JOBLINE}"
kill -TERM -${JOBLINE}

# success
exit 0
