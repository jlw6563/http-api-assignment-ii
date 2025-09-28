const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const css = fs.readFileSync(`${__dirname}/../client/style.css`);

const getIndex = (request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(index);
    response.end();
};

const getCSS = (request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/css' });
    response.write(css);
    response.end();
};

const notFound = (request, response) => {
    const content = JSON.stringify({
        message: 'The page you are looking for was not found',
        id: 'notFound',
    });

    response.writeHead(404, { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(content, 'utf8') });
    response.write(content);
    response.end();
};


module.exports = {
    getIndex,
    getCSS,
    notFound,
};
