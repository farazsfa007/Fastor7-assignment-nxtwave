const Employee = require('../models/employee');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.register = async (req, res) => {
try {
const { name, email, password } = req.body;
if (!name || !email || !password) return res.status(400).json({ message: 'Name, email and password required' });


const existing = await Employee.findOne({ email });
if (existing) return res.status(409).json({ message: 'Email already registered' });


const salt = await bcrypt.genSalt(10);
const hash = await bcrypt.hash(password, salt);


const employee = await Employee.create({ name, email, password: hash });
return res.status(201).json({ message: 'Employee registered', employee: { id: employee._id, email: employee.email, name: employee.name } });
} catch (err) {
console.error(err);
return res.status(500).json({ message: 'Server error', error: err.message });
}
};


exports.login = async (req, res) => {
try {
const { email, password } = req.body;
if (!email || !password) return res.status(400).json({ message: 'Email and password required' });


const employee = await Employee.findOne({ email });
if (!employee) return res.status(401).json({ message: 'Invalid credentials' });


const isMatch = await bcrypt.compare(password, employee.password);
if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });


const token = jwt.sign({ id: employee._id }, process.env.JWT_SECRET, { expiresIn: process.env.TOKEN_EXPIRES_IN || '1h' });


res.json({ message: 'Login successful', token });
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Server error', error: err.message });
}
};