const env = require("dotenv");
const { Configuration, OpenAIApi } = require("openai");
env.config();
const Shayari = require("../models/shayari"); // Import the Shayari model

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateShayari = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || text.split(" ").length > 1) {
      return res.status(400).json({ error: "Please provide a single word as input" });
    }

    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Write a shayari about ${text}.`,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

      const newShayariText = response.data.choices[0].text;

      // Save the generated shayari in the database
      const generatedShayari = await Shayari.create({ text: newShayariText });

      res.status(200).json({
        bot: newShayariText,
        shayariId: generatedShayari._id, // Optionally return the shayari ID for future reference
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(error || "Something went wrong");
    }
  } catch (err) {
    console.error("Error generating shayari:", err);
    res.status(500).json({ error: "Error generating shayari" });
  }
};
const shayarihistory=async(req,res)=>{
   try {
    const shayari=await Shayari.find({})
    res.json({shayari})
   } catch (error) {
    res.status(500).json({ error: "Error geting shayari" });
   }
}
module.exports = { generateShayari,shayarihistory };
