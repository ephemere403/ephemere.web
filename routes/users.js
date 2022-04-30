const express = require('express')
const router = express.Router()
const User = require('..\\models\\user')

module.exports = router

//getting all users
router.get('/', async (req,res) => {
	try {
		const users = await User.find()
		res.json(users)
		console.log('salam')
	} catch(err) {
		res.status(500).json({message: err.message})
	}
})

//getting exact user
router.get('/:id', (req,res) => {

})

//create user
router.post('/', async (req,res) => {
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		date: req.body.regdate
	})

	try{
		const newUser = await user.save()
		res.status(201).json(newUser)

	}catch{
		res.status(400).json({message: err.message})

	}

})

//updating user
router.patch('/:id', (req,res) => {

})

//delete user
router.delete('/', (req,res) => {

})

async function getUser(req, res, next) {
	let user
	try{
		user = await User.findById(req.params.id)
		if(user == null){
			return res.status(404).json(message: 'Cannot find User')
		}
	}catch(err){
		return res.status(500).json({message: err.message})

	}

	res.user = user
	next()
}