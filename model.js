const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    payerPhoneNumber: String,
    referalCode: String,
    payerName: String,
    rail: String,
    amount: Number,
    paymentChannel: String,
    serviceCode: String
});

const DataModel = mongoose.model('Data', DataSchema);

module.exports = DataModel;
