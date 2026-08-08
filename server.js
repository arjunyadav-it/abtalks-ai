import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.get("/", (req, res) => {
  res.json({
    message: "ABTalks AI server is running",
  });
});

app.post("/api/ai", async (req, res) => {
  try {
    const { question, history = [] } = req.body;

    if (!question || !question.trim()) {
      return res.status(400).json({
        error: "Question is required",
      });
    }

    console.log("User question:", question);
    console.log("History length:", history.length);

    // Convert frontend history to Gemini chat history
    const geminiHistory = [];

    for (const item of history) {
      if (item.question && item.answer) {
        geminiHistory.push({
          role: "user",
          parts: [
            {
              text: item.question,
            },
          ],
        });

        geminiHistory.push({
          role: "model",
          parts: [
            {
              text: item.answer,
            },
          ],
        });
      }
    }

    // Create a Gemini conversation with previous history
    const chat = ai.chats.create({
      model: "gemini-3.6-flash",

      history: geminiHistory,

      config: {
        systemInstruction:
          "You are ABTalks AI, a thoughtful and conversational AI assistant. " +
          "Remember the conversation history and use it to understand follow-up questions. " +
          "Give natural, helpful and engaging answers. " +
          "If the user says 'he', 'she', 'it', 'they', 'that', etc., " +
          "use the previous conversation to understand what they are referring to.",
      },
    });

    // Send current question
    const response = await chat.sendMessage({
      message: question.trim(),
    });

    console.log("AI response received");

    res.json({
      answer: response.text || "No response received.",
    });
  } catch (error) {
    console.error("Gemini Error:", error);

    res.status(500).json({
      error: error.message || "AI request failed",
    });
  }
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`AI server running on http://localhost:${PORT}`);
});