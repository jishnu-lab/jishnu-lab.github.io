// /pages/api/perplexity.js
export default async function handler(req, res) {
  const { q } = req.query;
  const apiKey = process.env.PERPLEXITY_API_KEY;
  if (!q) return res.status(400).json({ error: "Missing query" });

  // Build site-restricted query
  const perpQuery = `site:jishnu-lab.com ${q}`;

  // Call Perplexity Search API (replace with the most up-to-date endpoint!)
  const response = await fetch("https://api.perplexity.ai/v1/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ query: perpQuery, num_results: 6 })
  });
  const data = await response.json();

  // Format results for the frontend
  res.status(200).json({
    results: data.results || [], // Adapt this to Perplexity’s response shape
  });
}
