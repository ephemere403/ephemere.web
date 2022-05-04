const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const Register = require('./models/users')

//Connect to MongoDB
mongoose.connect('mongodb://localhost/EphemereWeb', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.on('open', () => console.log('Connected MongoDB'))

//HTML
const static_path = path.join(__dirname, "../public")
console.log(path.join(__dirname, "../public"))

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(static_path))
app.set('view engine', 'hbs')

app.listen(27017, () => console.log('Ephemere Server Started+ at port: 27017'))

app.get('/', (req,res) => {
	res.render("index")
})

//signup

app.get('/sign-up', (req,res) => {
	res.render("sign-up")
})

app.post('/sign-up', async (req,res) =>{
	const reguser = new Register({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		phone: req.body.phone,
		date: req.body.regdate
	})

	try{
		const newUser = await reguser.save()
		res.status(201).redirect("index")

	}catch{
		res.status(400)

	}
})

//login

app.get('/log-in', (req,res) => {
	res.render('log-in')
})


