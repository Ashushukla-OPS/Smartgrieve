const { GoogleGenAI } = require("@google/genai");

if (!process.env.GEMINI_API_KEY) {
  console.log("GEMINI_API_KEY missing in .env");
}

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const analyzeComplaint = async (description) => {
  const prompt = `
You are an AI assistant for a civic grievance app called SmartGrieve.

Analyze this citizen complaint and return only valid JSON.
Do not add markdown. Do not add explanation.

Complaint:
"${description}"

Allowed departments:
- Road Department
- Sanitation Department
- Water Department
- Electricity Department
- Drainage Department
- Animal Control Department

Allowed priority:
- Low
- Medium
- High

Allowed sentiment:
- Neutral
- Frustrated
- Angry

Return only this JSON:
{
  "department": "",
  "category": "",
  "priority": "",
  "sentiment": "",
  "summary": ""
}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  let text = response.text;

  text = text.replace(/```json/g, "").replace(/```/g, "").trim();

  return JSON.parse(text);
};

module.exports = { analyzeComplaint };