var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookInstanceSchema = new Schema({
  book: { type: Schema.ObjectId, ref: 'Book', required: true },
  imprint: { type: String, required: true},
  status: {type: String, required: true, enum: ['Available', 'Damaged', 'Borrowed', 'Reserved'], default: 'Damaged'},
  due_back: {type: Date, default: Date.now}
});

// Virtual for bookinstance's URL
BookInstanceSchema
.virtual('url')
.get(function() {
  return '/catalog/bookinstance/' + this._id;
});

// Export the module
module.exports = mongoose.model('BookInstanceSchema', BookInstanceSchema);
