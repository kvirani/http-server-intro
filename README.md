## W2D2 with KV

### Agenda

1. HTTP Review
2. HTTP Servers
3. Routing
4. Express
5. EJS
6. ~~Middleware (stretch)~~

### Code

In case you want to jump straight to the code, here it is

<https://github.com/kvirani/http-server-intro>

### HTTP Review

- Requests
    - Methods (GET, POST..)
    - Path / URL
  - Response
    - Status code (200)
    - Body
  - Statelessness in HTTP:
    - "The server has amnesia"... It doesn't know who the client is or previous context about them. More context is provided using other mechansisms (more on this later when we talk about cookies).

### HTTP Servers

We used Node's built-in `http` module and it's `createServer` function to start up an http (web) server.

We built a web app fairly easily using this, but still there was a bit of management we had to do ourselves. (See `0_httpserver.js`)

- For example: We had to do our own routing
  - First we just used if/else if/.../else in our giant handler function
  - Then switched to cleaner code via object lookup.  We called this object "routes". It served as our "routing table" where we could look up another callback function based on the method (eg: 'GET') and url (eg: '/').
- We used `fs` module in Node to load html files from disk so that the html code wasn't in our js file (which would have been inconvenient)
  - However, we weren't able to take it farther by allowing the html files to be "dynamic" (in the way that EJS does)
  - BTW We could have used EJS right there without Express, but we skipped that demo.

### Express

Express was our next demo (see `1_express.js`)

- How it's really just a convenience library on top of http
- Gives us routing built in, 404 page build in,
- Leverages other packages like statuses, etc which we could have used directly to build our own web framework
- Used A LOT in the wild (by many large companies)
- We looked at [express code](https://github.com/expressjs/express/blob/master/lib/application.js#L23) to find that it actually uses the `http` module to create the http server and handle the http side of things, just like we did ourselves earlier!

### EJS

Allows us to have "dynamic" html templates. Instead of _just_ HTML, we can also add JS logic (like loops, etc) to our EJS files. In the end EJS helps us produce a final HTML string so send down to the client.

#### Middleware (maybe / stretch)

Didn't talk about this. Non-critical to today. Homework ;)

