import moongose from "mongoose";

const { Schema } = moongose;

const loginSchema = new Schema({
  user: String,
  password: String,
});

export const loginModel = moongose.model("cities_timer", loginSchema);
