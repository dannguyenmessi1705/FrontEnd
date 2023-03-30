const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const db1 = mongoose.createConnection(process.env.MONGODB_URL1);
const Schema = mongoose.Schema;
const manageplayerSchema = new Schema({
  long_name: {
    type: String,
    required: true,
  },
  player_positions: {
    type: [String],
    required: false,
  },
  value_eur: {
    type: Number,
    required: false,
  },
  age: {
    type: Number,
    required: false,
  },
  dob: {
    type: String,
    required: false,
  },
  club_name: {
    type: String,
    required: false,
  },
  nationality_name: {
    type: String,
    required: false,
  },
  player_face_url: {
    type: String,
    validate: {
      validator: function (v) {
        return /^https?:\/\//i.test(v);
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
    required: false,
  },

  // Creat param user to manage private Player by Author
  user: {
    type: Schema.Types.ObjectId, // Get type is ID of User
    ref: "User", // reference to User in user.js
  },
});

let UserPlayer = db1.model("Player", manageplayerSchema);
module.exports = { UserPlayer };
