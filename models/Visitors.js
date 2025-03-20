import mongoose from "mongoose"

const VisitorSchema = new mongoose.Schema({
  hostelId: { type: mongoose.Schema.Types.ObjectId, ref: "Hostel", required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  room: { type: String, required: true },
  DateTime: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["Checked In", "Checked Out"],
    default: "Checked In",
  },
})

const Visitor = mongoose.model("Visitor", VisitorSchema)
export default Visitor
