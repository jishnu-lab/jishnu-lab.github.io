// export default async function handler(req, res) {
//   const { q } = req.query;
//   const apiKey = process.env.PERPLEXITY_API_KEY;
//   if (!q) return res.status(400).json({ error: "Missing query" });

//   // Restrict search to your lab domain
//   const perpQuery = `site:jishnulab.org ${q}`;

//   const response = await fetch("https://api.perplexity.ai/v1/search", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${apiKey}`,
//     },
//     body: JSON.stringify({ query: perpQuery, num_results: 6 }),
//   });
//   const data = await response.json();

//   res.status(200).json({
//     results: data.results || [],
//   });
// }
import Perplexity from '@perplexity-ai/perplexity_ai';

export default async function handler(req, res) {
  // --- CORS headers ---
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { q } = req.query;
  const apiKey = process.env.PERPLEXITY_API_KEY;
  if (!q || !apiKey) {
    return res.status(400).json({ error: "Missing query or API key" });
  }

  const client = new Perplexity({ apiKey });
  try {
    const search = await client.search.create({
      query: q,
      max_results: 10,
      max_tokens: 25000,
      max_tokens_per_page: 2048,
      search_domain_filter: ["jishnulab.org"],
    });
    res.status(200).json({ results: search?.results || [] });
  } catch (error) {
    console.error("Perplexity API error:", error);
    res.status(500).json({ error: error.message || "Unexpected API error" });
  }
}
