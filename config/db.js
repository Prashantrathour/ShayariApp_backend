const mongoose=require("mongoose")

require("dotenv").config()

const config=mongoose.connect(process.env.MONGODB_URI)

module.exports={config}