const mongoose = require('mongoose');

const threadSchema = new mongoose.Schema({
  title: { type: String, required: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
});

const Thread = mongoose.model('Thread', threadSchema);

module.exports = Thread;
