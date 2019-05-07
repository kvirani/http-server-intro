console.log('TOP OF FILE');

var http = require('http');
var fs   = require('fs');

var indexContent = fs.readFileSync('./index.html', 'utf8');
var faqContent   = fs.readFileSync('./faq.html', 'utf8');

console.log(indexContent);
// console.log(http)\\;


// HTTP ROUTING TABLE
var routes = {
  'GET /':    function(request, response) {
    response.end(indexContent);
  },
  'GET /faq': function(request, response) {
    response.end(faqContent);
  },
  'GET /other': function(request, response) {
    response.end("Hello. It's currently " + new Date());
  }
}

var server = http.createServer(function handler(request, response) {
  console.log('request', request.method, request.url);
  // console.log('request', request);
  // console.log('response', response);
  // console.log('hello, theres a request!');
  response.setHeader('Content-Type', 'text/html');

  var routeHandlerFn = routes[request.method + ' ' + request.url];
  if (routeHandlerFn) {
    routeHandlerFn(request, response);
  } else {
    response.statusCode = 404;
    response.end('<h1>NOT FOUND</h1>');
  }
  // commented out our first implementation
  // if (request.method === 'GET' && request.url === '/') {
  //   // home page
  //   response.end(indexContent);
  // } else if (request.method === 'GET' && request.url === '/faq') {
  //   response.end(faqContent);
  // } else if (request.method === 'GET' && request.url === '/other') {
  //   response.end("Hello. It's currently " + new Date());
  // } else {
  //   response.statusCode = 404;
  //   response.end('<h1>NOT FOUND!</h1>')
  // }
});

// console.log(server);

server.listen(9000, function() {
  console.log('listening on port 9000');
});

console.log('BOTTOM OF FILE');