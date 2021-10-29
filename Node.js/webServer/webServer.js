const http = require('http');
const fs = require('fs');
const indexPage = fs.readFileSync('website/index.html');
const aboutPage = fs.readFileSync('website/Hakkimizda.html');
const productsPage = fs.readFileSync('website/urunlerimiz.html');

const server = http.createServer((request, response) => {
    if (request.url === "/" || request.url === "/index" || request.url === "/index.html") {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end(indexPage);
    } else if (request.url === "/Hakkimizda" || request.url === "/Hakkimizda.html") {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end(aboutPage);
    } else if (request.url === "/urunlerimiz" || request.url === "/urunlerimiz.html") {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end(productsPage);
    } else {
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write('<h2>404 Page not found.</h2>');
        // response.end();
    }

});

const port = 5000;

server.listen(port, () => {
    console.log(`Sunucu port ${port} de başlatıldı.`);
});