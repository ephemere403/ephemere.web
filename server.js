const express = require('express')
const mongoose = require('mongoose')
const app = express()

const users = []

//Connect to MongoDB
mongoose.connect('mongodb://localhost/EphemereWeb', { useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.on('open', () => console.log('Connected MongoDB'))

app.listen(27017, () => console.log('Ephemere Server Started+'))

app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.json())

const UsersRouter = require('.\\routes\\users')
app.use('\\users', UsersRouter)

app.get('/', (req,res) => {
	res.render('index.ejs', {name : 'David'})
})

app.get('/login', (req,res) => {
	res.render('login.ejs')
})

//
app.post('/login', (req,res) =>{

})

app.get('/register', (req,res) => {
	res.render('register.ejs')
})

app.post('/register', (req,res)=>{
	try{
		users.push({
			'name': req.body.name,
			'email' : req.body.email,
			'password': req.body.password

		})
		res.redirect('/')
	}
	catch {
		console.log('registration error has occured')
	}
	console.log(users)

})

