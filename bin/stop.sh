#!/bin/bash 

# gets start script parent process id
JOBLINE=`ps -ef | grep "[s]tart.sh" | awk '{print $3}'`

echo "killing script: ${JOBLINE}"

# kills parent and all child processes
kill -TERM -${JOBLINE}

# success
exit 0
