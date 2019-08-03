import express from 'express';
import { Mongoose } from 'mongoose';


module.exports = function() {
    const db = config.get("db");
    Mongoose.connect(db).then(() => TextDecoderStream.info('Connected to ${db}...'));
db: 'mongodb://localhost:27017/foodiesAll'
}; 