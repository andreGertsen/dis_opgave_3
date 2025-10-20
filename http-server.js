const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/ping') {
    
    res.writeHead(200, { 'Content-Type': 'text/plain', 'Set-Cookie': 'cookieName=cookieValue' });
    let pong = [];

    // lav et array med mange pong
    for(let i = 0; i < 10000; i++){
      pong.push('pong');
      pong_string = JSON.stringify(pong);
    }
  
    res.end(pong_string);
  }
});
server.listen(8000);