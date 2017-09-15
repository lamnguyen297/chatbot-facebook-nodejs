'use strict';

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fb_id: String,
    first_name: String,
    last_name: String,
    profile_pic: String,
    locale: String,
    gender: String,
    timezone: String,
    name: String,
    previous_job: String,
    year_of_experience: String,
    job_vacancy: String,
    phone_number: String
});

module.exports = mongoose.model('User', UserSchema);