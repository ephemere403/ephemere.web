const User = require('../models/users')
const jwt = require('jsonwebtoken')

module.exports.login = async (req,res) =>{
	const candidate = await User.findOne({name: req.body.name})

	if(candidate){
		if(req.body.password == candidate.password){
			const token = jwt.sign({
				name: candidate.email
				email: candidate.email
			}, verySecretKey, {expiresIn: 60*60})
			res.status(200).json({token: token})
		}
		else{
			res.status(401).json({message: 'password incorrect'})
		}

	} else {
		res.status(404).json({message: 'username not found:('})

	}

}

module.exports.register = async (req, res) =>{

	const candidate = await User.findOne({email: req.body.email})

	if(candidate){
		res.status(409).json({message: 'email already used. try another'})
	} else {
		const reguser = new Register({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
			phone: req.body.phone,
			date: req.body.regdate
		})
		try{
			await reguser.save()
			res.status(201).json(reguser)
		}catch{
			res.status(400)
		}
	}
}

