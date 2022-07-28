const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const ClaimSchema = new Schema({
    name: {
        type:string
    },
    doj: {
        type: Date
    },
    dod: {
        type: Date
    },
})
var Claim = mongoose.model('Claim', ClaimSchema);
module.exports = Claim