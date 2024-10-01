const mongoose = require('mongoose');
const AnnouncementSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    level: { type: String, required: true },
    department: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Announcement', AnnouncementSchema);
