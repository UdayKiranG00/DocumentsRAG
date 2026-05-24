import { GoogleGenAI } from '@google/genai';

// Initialize the client. It automatically picks up the GEMINI_API_KEY environment variable.
const ai = new GoogleGenAI({});

async function generateText(context,query) {
const prompt = `Follow below steps or instructions carefully, before that understand user intent carefully.
      1. You should use the context from 6th step and your knowledge while answering the user query in 5th step.
      2. Answer the result in 2-3 sentences, do not share details about your analysis or context.
      3. It is important if the context is not available atleast 20% to answer the user query then do not forget to ask user
       to provide more details and suggestions on what to ask? in this case do not answer from context.
      4. Context provided below in 6th step is pulled from a document, analyze the context to understand type of data in document.
      5. UserQuery: ${query}.
      6. Context: ${context}.`;
  try {
    // Call the generateContent method using the recommended general-purpose model
    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',//'gemma-4-31b-it',//'gemini-2.5-flash',//
      contents: prompt,
    });

    // Log the generated response text
    console.log("LLM Response:\n", response.text);
  } catch (error) {
    console.error("Error communicating with Gemini API:", error);
  }
}

export {generateText};