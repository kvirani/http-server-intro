console.log('TOP OF FILE');
var express = require('express');
var app = express();

const PORT = 9001;

app.set('view engine', 'ejs');

// Express manages the "routing" table for us. We don't need this like we did before.
// const routes = {

// }

// This code was added to demonstrate that EJS is really just a function that takes in data, and returns an HTML string. Instead of creating HTML in a JS file (as shown here), it's better to flip it and put JS into our HTML. That's what EJS does for us. But ultimately we care about the HTML returned from the EJS template.
function indexEJS(firstName, lastName) {
  return `<h1>HOME PAGE!!!!</h1>

<p>Today is ${new Date()}</p>

<p>Your name is: ${firstName + ' ' + lastName} %> </p>`

}

// GET /
app.get('/', function(request, response) {
  console.log('request!', request, response);
  // response.send('HTML ...');
  response.render('index', { firstName: 'K', lastName: 'V' });
}); // => routes['GET /'] = fn

// GET /faq
app.get('/faq', function(request, response) {
  console.log('request!', request, response);
  // response.send('Hello from Faq page!');
  response.render('faq');
}); // => routes['GET /faq'] = fn

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`);
})

console.log('BOTTOM OF FILE');