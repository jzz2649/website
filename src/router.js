const Router = require('koa-router');

const router = new Router();

router.get('/ajax', (ctx, next) => {
    ctx.body = 'hello world';
    next();
})

module.exports = router;