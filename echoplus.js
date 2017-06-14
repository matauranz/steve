/*
Node.js echo server
Starts an http server on port 8000. The server responds with:
- request headers as json
- 3 newline characters  ('\n\n\n')
- request body (piped)



It does not attempt to "understand" the request in any way.

I use it for debugging clients, mostly POSTs.

Starting point: http://stackoverflow.com/questions/17190733/simplest-nodejs-echo-server

test curl -d 'some data......' http://{{your server url}}
*/

var http = require('http');
var server = http.createServer(function (req, res) {
    res.write(JSON.stringify(req.headers));
    res.write('\n\n\n');
    req.pipe(res);
});
server.listen(8000);

/* 
Can also work as a one-liner -- just copy-paste to your shell:
node -e "require('http').createServer(function (req, res) {res.write(JSON.stringify(req.headers)); res.write('\n\n\n'); req.pipe(res);}).listen(8000);"

*/
