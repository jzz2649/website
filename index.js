const Koa = require('koa');
const serve = require('koa-static');
const process = require('process');
const path = require('path');
const chalk = require('chalk');

const app = new Koa();

const port = 8080;
const hostname = '127.0.0.1';
const staticPath = path.join(process.cwd(),'static');

app.use(serve(staticPath))

app.listen(port, hostname, () => {
    console.log('click run', chalk.red(`http://localhost:${port}`))
})