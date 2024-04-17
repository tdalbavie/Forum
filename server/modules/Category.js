const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  threadPage: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Thread',
    required: false
  }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
