const mongoose = require("mongoose");

const proposalSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    projectTitle: {
      type: String,
      required: true,
    },

    domain: {
      type: String,
      required: true,
    },

    technology: {
      type: String,
      required: true,
    },

    teamSize: {
      type: Number,
      required: true,
    },

    duration: {
      type: String,
      required: true,
    },

    difficulty: {
      type: String,
      required: true,
    },

    favorite: {
    type: Boolean,
    default: false
},

    proposal: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Proposal", proposalSchema);