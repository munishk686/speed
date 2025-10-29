// Speed.js
import mongoose from "mongoose";
const { Schema } = mongoose;

const SpeedSchema = new Schema({
  title: { type: String, required: false },
  authors: { type: String, required: false },
  journal: { type: String, required: false },
  year: { type: String, required: false },
  volume: { type: String, required: false },
  pages: { type: String, required: false },
  doi: { type: String, required: false },
  claim: { type: String, required: true },
  method: { type: String, required: false },
  agreeDisagree: { type: String, required: false },
  createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true }
}, { timestamps: true });

export default mongoose.model("Speed", SpeedSchema);