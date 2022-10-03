const express = require('express')
passport = require('passport');
path = require('path')



// start x-session
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
})


const homeRoute = require("./routes/homeRoute");


const app = express()

const PORT = process.env.PORT || 5800


// views settings or configurations
app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.urlencoded({ extended: true }))

// to access static files the server checks the public folder
app.use(express.static(path.join(__dirname, 'src')))
// setting the sessions
app.use(expressSession)
// initiazing passport and they shd be like this
// constantly they  are methods(line 43-44)
app.use(passport.initialize())
app.use(passport.session())

// serve routes

app.use = ('/', homeRoute);



// handling non existing routes
app.get('*', (req, res) => {
  // res.status(404).send('Sorry, we have hit a dead end here. GO BACK');
  res.status(404).send('pageNotFound')
})

app.listen(4000,()=>{
  
console.log(`Listening to server at port ${4000}`)
})



