"use client";
import Link from "next/link";
import Head from "next/head";
import Layout from "@/components/common/layout";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchPage() {
  const params = useSearchParams();
  const query = params.get("q") || "";
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    // Replace with your Vercel project
    fetch(`https://jishnu-lab-github-io.vercel.app//api/perplexity?q=${encodeURIComponent(query)}`)
      .then(res => res.json())
      .then(data => setResults(data.results || []))
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <>
      <Head>
        <title>Search Results</title>
        <meta name="description" content="Systems Immunology Lab" />
        <link rel="icon" type="image/png" href="/favicon-512x512.png"/>
      </Head>
      <Layout>
        <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-neutral-950 dark:to-neutral-900 flex flex-col items-center">
          <div className="px-4 py-10 max-w-2xl mx-auto min-h-screen">
            <h1 className="font-bold text-3xl text-center mb-6">Search Results</h1>
            {query && (
              <div className="mb-8 text-center text-neutral-500">
                Powered by <span className="font-mono text-indigo-700 font-bold">Perplexity Pro</span><br/>
          Searching for: <span className="font-mono text-indigo-600">{query}</span>
        </div>
      )}
      {loading && <div className="text-center text-neutral-400 mt-8">Loading...</div>}
      {(!loading && results.length === 0) &&
        <div className="text-center text-neutral-400 mt-8">No results found.</div>
      }
      <ul className="space-y-6">
        {results.map((item, idx) => (
          <li key={idx} className="border rounded-xl p-5 bg-white/80 dark:bg-neutral-900/80 shadow">
            <Link href={item.url}>
              <span className="text-lg font-bold text-indigo-700 hover:underline">{item.title}</span>
            </Link>
            <p className="text-neutral-600 dark:text-neutral-300">{item.snippet}</p>
            <span className="text-xs text-neutral-500">{item.url}</span>
          </li>
        ))}
      </ul>
    </div>
    </main>
    </Layout>
    </>
  );
}
