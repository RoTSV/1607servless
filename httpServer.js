const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
    let filePath = path.join(
        __dirname,
        'public',
        req.url === '/' ? 'index.html':req.url
    )
    let extname = path.extname(filePath);
    let contentType = 'text/html';
    if(req.url === '/'){
        fs.readFile(__dirname + '/public/index.html', 'utf-8', (err, data)=>{
            res.writeHead(200, {'Contant-Type': 'text/html'});
            res.end(data);
        })
    } else{
        fs.readFile(__dirname + '/public/' + req.url, 'utf-8', (err, data)=>{

            res.writeHead(200, {'Contant-Type': 'text/html'});
            res.end(data);
        })
    }
/*  if(req.url === '/'){
fs.readFile(__dirname + '/public/index.html', 'utf-8', (err, data)=>{
    res.writeHead(200, {'Contant-Type': 'text/html'});
    res.end(data);
})

}
else if(req.url ==='/about'){
    res.writeHead(400, {'Contant-Type': 'text/plain'} );
    res.end('Here is text about us')
}
else{
    res.writeHead(400, {'Contant-Type': 'text/plain'} );
    res.end('<h2> try going to/</h2><h1>404/</h1>')
}  */

})
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log('port 3000')
})