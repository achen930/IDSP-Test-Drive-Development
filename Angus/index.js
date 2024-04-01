const express = require('express')
const cookieSession = require('cookie-session');
const app = express()
const port = 3000
const { db } = require('./mockdb')
const getAlbums = require('./getAlbums')

app.use(express.urlencoded({extended: false}))
app.use(cookieSession({
    name: 'session',
    keys: ['userId'],
}));

app.use(function(req, res, next) {
    const { userId } = req.session;
    console.log(userId)
    if (userId) {
        const user = db.users.filter((user) => user.id === userId).pop()
        console.log(user.username)
        res.locals.user = user
    }
    next();
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('login');
})
app.post('/', (req, res) => {
    const { username } = req.body // Annabelle: In actual application, would have to check users password as well
    const user = (db.users.filter((user) => user.username === username)).pop()
    console.log(user)
    if (user) {
        req.session.userId = user.id;
    }
    res.redirect('/');
})

app.get('/logout', (req, res) => {
    req.session = null;
    res.redirect("/")
})

app.get('/albums', (req, res) => {
    const albums = getAlbums(req.session.userId)
    res.json(albums)

    // Annabelle: returns user albums as expected when user is logged in
})

app.get('/posts', (req, res) => {
    
})

app.get('/albumsAndPosts', (req, res) => {

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})