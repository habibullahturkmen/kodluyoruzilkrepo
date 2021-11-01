const koa = require('koa');
const koaRouter = require('koa-router');
const fs = require('fs');

const app = new koa();
const router = new koaRouter();

router.get('/', (ctx) => {
    ctx.type = 'html';
    ctx.body = fs.createReadStream('index.ejs');
});

router.get('/index.ejs', (ctx) => {
    ctx.type = 'html';
    ctx.body = fs.createReadStream('index.ejs');
});

router.get('/urunlerimiz.html', (ctx) => {
    ctx.type = 'html';
    ctx.body = fs.createReadStream('urunlerimiz.html');
});

router.get('/Hakkimizda.html', (ctx) => {
    ctx.type = 'html';
    ctx.body = fs.createReadStream('Hakkimizda.html');
});

// Router middleware !important
app.use(router.routes()).use(router.allowedMethods());

const port = 3000;
app.listen(port, () => {
    console.log("koa server started on port " + port);
});