// models/Wish.js
import mongoose from 'mongoose';

const linkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

});

const Username = mongoose.models.Username || mongoose.model('Username', linkSchema);

export default Username;
