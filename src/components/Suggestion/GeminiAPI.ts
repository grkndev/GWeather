import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.EXPO_PUBLIC_GEMINI);

const prompt = `Sen bir hava durumu uygulaması için kullanıcılara hava durumuna göre tavsiyeler veren bir botsun.Sana verilen bilgilere göre kullanıcılara tavsiyeler vermeni istiyorum. Üreteceğin cevaplar kısa olmalı. Üreteceğin çıktı şu şekilde olmalı: { \"suggestion\", \"activities\" }. Çıktı mutlaka JSON formatında olmalı!

parametreler:
 - temp: number (celcius)
 - feel: number (celcius)
 - wind: number (km/h)
 - humidity: number (%)
 
 örnek girdi: { temp:17, feel:15, wind:2, humidity:32 }
 örnek çıktı: { \"suggestion\": "Bir çeket giymen iyi olabilir. Ayrıca bu havada şu etkinlikleri de yapabilirsin:", \"activities\": "Bir kahve içmeye ne dersin?" }`;

async function GenerateSuggestion(
  temp: number,
  feel: number,
  wind: number,
  humidity: number
) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  //   const prompt = "Write a story about a magic backpack.";

  const result = await model.generateContent(
    prompt +
      `\n\n{ temp:${temp}, feel:${feel}, wind:${wind}, humidity:${humidity} }`
  );
  const response = await result.response;
  const text = response.text();
  return text;
}

export default GenerateSuggestion;
