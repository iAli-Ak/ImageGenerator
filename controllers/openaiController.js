
const OpenAIApi = require("openai");

// Initialize OpenAI client directly with the API key
const openai = new OpenAIApi({
    apiKey: process.env.OPENAI_API_KEY,  // Ensure your API key is properly set in .env
});
const generateImage = async (req, res) => {
    const { prompt } = req.body;
    try {
        const respone = await openai.images.generate({
            prompt: prompt,
            n: 1,
            size: '512x512'
        });
        const imageUrl = respone.data[0].url;
        res.status(200).json({
            success: true,
            data: imageUrl
        });
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
        res.status(400).json({
            success: false,
            error: error.message,
            prompt: prompt
        });
    }
};

module.exports = { generateImage };