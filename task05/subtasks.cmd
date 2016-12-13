@echo off

REM Mongodb binaries should be in your PATH environment variable

set /p TASKN=Enter task number to run (1-5):

IF "%TASKN%"=="1" GOTO task1
IF "%TASKN%"=="2" GOTO task2
IF "%TASKN%"=="3" GOTO task3
IF "%TASKN%"=="4" GOTO task4
IF "%TASKN%"=="5" GOTO task5

echo No task was selected. Exit

EXIT /B %ERRORLEVEL%

:task1
REM #1 Dump creation
mongoexport -h ds119368.mlab.com:19368 -d heroku_bknz76p0 -c posts -u heroku_bknz76p0 -p fehobrubla0lks29slb10mmoiq -o posts.json
EXIT /B 0

:task2
REM #2 posts collection
REM collection drop
mongo test --eval "db.posts.drop()"
REM import collection
mongoimport -d test -c posts --file posts.json
REM CRUD operations
REM update
mongo test --eval "db.posts.update({'source.id': 'bbc-news'}, {$set: {name: 'BBC-News edited'}})"
REM insert
REM delete
EXIT /B 0

:task3
REM #3 Indexes

REM posts indexes
mongo test --eval "db.posts.createIndex({'source.id': 1})"
mongo test --eval "db.posts.createIndex({'source.category': 1, 'source.language': 1, 'source.country': 1})"

REM grades indexes (grades collection already exists)
mongo test --eval "db.grades.createIndex({'scores.type': 1})"
mongo test --eval "db.grades.createIndex({'scores.score': 1})"
mongo test --eval "db.grades.createIndex({'class_id': 1})"
EXIT /B 0

:task4
REM #4 Class with highest avg score
node ./classFind.js
EXIT /B 0

:task5
REM #5 Replication
REM run 2 mongod processes: master and slave
start mongod --dbpath d:\mongodata\ --port 30000 --master
start mongod --dbpath d:\mongodata2\ --port 30001 --slave --source localhost:30000
REM pause to wait both server are ready
pause 0
REM insert document on primary -> connect to slave and check if document exists
mongo test --port 30000 --eval "db.createCollection('repl_test_collection')"
mongo test --port 30001 --eval "db.repl_test_collection"

EXIT /B 0

