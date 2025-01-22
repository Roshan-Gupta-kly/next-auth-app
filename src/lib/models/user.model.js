import mongoose from "mongoose";

const useSchema = new mongoose.Schema(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    avater: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // this will create the extra two data that is createdAt and UpdatedAt
);

export const User = mongoose.models.User || mongoose.model('User', useSchema); 

export default User;
