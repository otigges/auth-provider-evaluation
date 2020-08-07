const Koa = require('koa');
const path = require('path')
const Pug = require('koa-pug')
const app = module.exports = new Koa();
const port = process.env.PORT || 3000;

const pug = new Pug({
    viewPath: path.resolve(__dirname, './views'),
    app: app
})

app.use(async function(ctx) {
    await ctx.render('dashboard')
});

if (!module.parent) {
    app.listen(port)
        .on("listening", () => console.log(`Server started: http://localhost:${port}`))
}



