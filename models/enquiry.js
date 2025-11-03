const mongoose = require('mongoose');


const enquirySchema = new mongoose.Schema({
name: { type: String, required: true },
email: { type: String, required: true },
courseInterest: { type: String },
claimed: { type: Boolean, default: false },
counselorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', default: null }
}, { timestamps: true });


module.exports = mongoose.model('Enquiry', enquirySchema);