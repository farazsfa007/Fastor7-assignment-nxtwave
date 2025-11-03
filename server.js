const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');


dotenv.config();


const app = express();
app.use(express.json());
app.use(cors());


// Routes
const employeeRoutes = require('./routes/employeeRoutes');
const enquiryRoutes = require('./routes/enquiryRoutes');


app.use('/api/employees', employeeRoutes);
app.use('/api/enquiries', enquiryRoutes);


app.get('/', (req, res) => res.send('CRM API running'));


const PORT = process.env.PORT || 3000;


async function start() {
try {
await mongoose.connect(process.env.MONGO_URI, {
useNewUrlParser: true,
useUnifiedTopology: true
});
console.log('Connected to MongoDB');


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
} catch (err) {
console.error('Failed to start server:', err.message);
process.exit(1);
}
}


start();