var moment = require('moment');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
  {
    first_name: {type: String, required: true, max: 100},
    last_name: {type: String, required: true, max: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date}
  }
);

// Virtual for author's full last_name
AuthorSchema
.virtual('full_name')
.get(function () {
  return this.last_name + ', ' + this.first_name;
});

// Virtual for author's URL
AuthorSchema
.virtual('url')
.get(function () {
  return '/catalog/author/' + this._id;
});

AuthorSchema
.virtual('date_of_birth_formatted')
.get(function () {
  return this.date_of_birth ?
  moment(this.date_of_birth).format('YYYY-MM-DD') : '';
});

AuthorSchema
.virtual('date_of_death_formatted')
.get(function () {
  return this.date_of_death ?
  moment(this.date_of_death).format('YYYY-MM-DD') : '';
});

// Export model
module.exports = mongoose.model('Author', AuthorSchema);
