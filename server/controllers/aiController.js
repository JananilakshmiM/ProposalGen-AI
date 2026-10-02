const axios = require("axios");


exports.chatAI = async (req, res) => {

    try {

        const { message } = req.body;


        const response = await axios.post(

            "https://openrouter.ai/api/v1/chat/completions",

            {
                model: "openai/gpt-4o-mini",

                messages: [
                    {
                        role: "system",
                        content:
                        "You are ProposalGen AI Assistant. Help students with project ideas, proposals, technology and viva preparation."
                    },
                    {
                        role: "user",
                        content: message
                    }
                ]
            },

            {
                headers: {

                    "Authorization":
                    `Bearer ${process.env.OPENROUTER_API_KEY}`,

                    "Content-Type":
                    "application/json",

                    "HTTP-Referer":
                    "http://localhost:5173",

                    "X-Title":
                    "ProposalGen AI"

                }
            }

        );


        res.json({

            reply:
            response.data.choices[0].message.content

        });


    }


    catch(error){

        console.log(
            "AI ERROR:",
            error.response?.data || error.message
        );


        res.status(500).json({

            message:"AI Error",

            error:
            error.response?.data || error.message

        });

    }

};