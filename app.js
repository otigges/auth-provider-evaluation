require('dotenv').config()
const Koa = require('koa');
const path = require('path')
const Pug = require('koa-pug')
const router = require('@koa/router')();
const app = module.exports = new Koa();
const port = process.env.PORT || 3000;

const pug = new Pug({
    viewPath: path.resolve(__dirname, './views'),
    app: app
})

router
    .get('/', async ctx => await ctx.render('dashboard'))
    .get('/signup', async ctx => await ctx.render('signup_with_firebase'))
    .get('/login', async ctx => await ctx.render('login_with_firebase'));

app.use(router.routes());

pug.locals.firebase_config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "auth-eval-e6c7a.firebaseapp.com",
    databaseURL: "https://auth-eval-e6c7a.firebaseio.com",
    projectId: "auth-eval-e6c7a",
    storageBucket: "auth-eval-e6c7a.appspot.com",
    messagingSenderId: process.env.FIREBASE_MSG_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
}

if (!module.parent) {
    app.listen(port)
        .on("listening", () => console.log(`Server started: http://localhost:${port}`))
}



