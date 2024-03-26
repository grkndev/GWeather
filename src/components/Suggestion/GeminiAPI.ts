import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.EXPO_PUBLIC_GEMINI);

const prompt = `You are a bot for a weather application that gives recommendations to users based on the weather. I want you to give recommendations to users based on the information given to you. The answers you produce should be short. The output you will produce should be like this: { \"suggestion\", \"activities\" }. The output must be in JSON format!

parameters:
 - temp: number (celcius)
 - feel: number (celcius)
 - wind: number (km/h)
 - humidity: number (%)
  - weather: string (description of the weather)
 
 example input: { temp:17, feel:15, wind:2, humidity:32, weather:"clear sky"}
 sample output: { \"suggestion\": "It might be a good idea to wear a jacket. You can also do the following activities in this weather:", \"activities\": "How about having a coffee?" }`;

async function GenerateSuggestion(
  temp: number,
  feel: number,
  wind: number,
  humidity: number,
  weather: string
) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  //   const prompt = "Write a story about a magic backpack.";

  const result = await model.generateContent(
    prompt +
      `\n\n{ temp:${temp}, feel:${feel}, wind:${wind}, humidity:${humidity}, weather:"${weather}" }`
  );
  const response = await result.response;
  const text = response.text();
  return text;
}

export default GenerateSuggestion;
