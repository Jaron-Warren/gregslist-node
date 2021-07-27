import Mongoose from 'mongoose'
const Schema = Mongoose.Schema

const Job = new Schema(
  {
    Title: { type: String, required: true },
    Company: { type: String, required: true },
    Remote: { type: Boolean },
    Salary: { type: Number },
    Jobtype: { type: String },
    Location: { type: String, required: true }
  }
)
export default Job
