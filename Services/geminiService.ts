
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getHealthAssistantResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: `Eres un asistente virtual amable y profesional para el consultorio del Dr. Carlos Emiliano Contreras Chong, Médico Internista especializado en sobrepeso y salud metabólica en Chihuahua. 
        Tu objetivo es:
        1. Responder dudas generales sobre medicina interna y control de peso (diabetes, metabolismo, nutrición médica).
        2. Proporcionar información sobre el Dr. Contreras (especialista en Hospital Angeles Chihuahua, Consultorio 405).
        3. No dar diagnósticos médicos definitivos, siempre sugerir una valoración presencial.
        4. Mantener un tono servicial, empático y motivador hacia la salud.
        5. Si preguntan por citas, menciona que pueden agendar por WhatsApp al link de la página o llamar al 614 439 8604.`,
        temperature: 0.7,
      },
    });

    return response.text || "Lo siento, no pude procesar tu solicitud en este momento.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Tuvimos un problema conectando con el asistente médico. Por favor contacta al consultorio directamente.";
  }
};
