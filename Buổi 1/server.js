const student = {
  name: "Sơn",
  age: 20
}
const http = require('node:http');
// Create a local server to receive data from
const server = http.createServer((req, res) => {
  // res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    /*html*/`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
      <h2>Long time no see!!!</h2>
      </body>
      </html>
    `
  );
});

server.listen(8000);