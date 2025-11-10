export default async function handler(req, res) {
  const { q } = req.query;
  const apiKey = process.env.PERPLEXITY_API_KEY;
  if (!q) return res.status(400).json({ error: "Missing query" });

  // Restrict search to your lab domain
  const perpQuery = `site:jishnulab.org ${q}`;

  const response = await fetch("https://api.perplexity.ai/v1/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ query: perpQuery, num_results: 6 }),
  });
  const data = await response.json();

  res.status(200).json({
    results: data.results || [],
  });
}
