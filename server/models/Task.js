const mongoose = require('mongoose');

const Task = mongoose.Schema({
    id: {type: 'number'},
    title: {type : 'string'},
    description:{type: 'string'},
});

const model = mongoose.model('Task', Task);
module.exports = model;
