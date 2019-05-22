const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/V8DGCO',{ useNewUrlParser: true });

module.exports = mongoose;