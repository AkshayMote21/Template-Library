import {model, Schema} from 'mongoose';
const templateSchema = new Schema({
    name : String,
    content : String,
    createdAt: { type: Date, default: Date.now }
});

const Template = new model("templates",templateSchema);

export default Template;