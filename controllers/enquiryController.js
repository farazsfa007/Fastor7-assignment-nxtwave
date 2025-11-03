const Enquiry = require('../models/enquiry');
exports.createPublic = async (req, res) => {
try {
const { name, email, courseInterest } = req.body;
if (!name || !email) return res.status(400).json({ message: 'Name and email required' });


const enquiry = await Enquiry.create({ name, email, courseInterest });
return res.status(201).json({ message: 'Enquiry submitted', enquiry });
} catch (err) {
console.error(err);
return res.status(500).json({ message: 'Server error', error: err.message });
}
};


// Get unclaimed public leads (protected)
exports.getPublic = async (req, res) => {
try {
const leads = await Enquiry.find({ claimed: false }).sort({ createdAt: -1 });
res.json({ leads });
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Server error', error: err.message });
}
};


// Get private leads claimed by logged in counselor
exports.getPrivate = async (req, res) => {
try {
const counselorId = req.user;
const leads = await Enquiry.find({ counselorId }).sort({ updatedAt: -1 });
res.json({ leads });
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Server error', error: err.message });
}
};


// Claim lead
exports.claimLead = async (req, res) => {
try {
const id = req.params.id;
const counselorId = req.user;


const enquiry = await Enquiry.findById(id);
if (!enquiry) return res.status(404).json({ message: 'Enquiry not found' });


if (enquiry.claimed) return res.status(409).json({ message: 'This lead has already been claimed.' });


enquiry.claimed = true;
enquiry.counselorId = counselorId;
await enquiry.save();


res.json({ message: 'Lead claimed successfully', enquiry });
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Server error', error: err.message });
}
};