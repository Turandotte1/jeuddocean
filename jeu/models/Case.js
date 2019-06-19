const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema({
    id: Number,
    peche: Boolean,
    eolien: Boolean,
    loisir: Boolean,
    transport: Boolean
}, {
    collection: 'pions'
});

mongoose.model('cases', caseSchema);
