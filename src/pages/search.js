"use client";
import Link from "next/link";
import Head from "next/head";
import Layout from "@/components/common/layout";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function SearchPage() {
  const params = useSearchParams();
  const query = params.get("q") || "";
  // Store summary at top-level for comet-style
  const [summary, setSummary] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    fetch(`https://jishnu-lab-github-io.vercel.app/api/perplexity?q=${encodeURIComponent(query)}`)
      .then(res => res.json())
      .then(data => {
        setResults(data.results || []);
        setSummary(data.summary || data.answer || ""); // get summary field, if present
      })
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
            {!loading && summary && (
              <div className="mb-8 p-4 bg-indigo-50 dark:bg-indigo-900/70 rounded-xl shadow prose prose-lg dark:prose-invert max-w-full">
                <ReactMarkdown>{summary}</ReactMarkdown>
              </div>
            )}
            {(!loading && results.length === 0) &&
              <div className="text-center text-neutral-400 mt-8">No results found.</div>
            }

            <ul className="space-y-6">
              {results.map((item, idx) => (
                <li
                  key={idx}
                  className="border rounded-2xl px-6 py-5 bg-gradient-to-tr from-white/95 to-blue-50 dark:from-neutral-900/90 dark:to-indigo-950/70 shadow-lg ring-1 ring-indigo-100 dark:ring-neutral-800 flex flex-col relative group"
                >
                  {/* Source domain badge - Comet-style */}
                  <span className="absolute right-4 top-4 bg-indigo-100 dark:bg-indigo-700 text-[10px] uppercase text-indigo-700 dark:text-white px-2 py-1 rounded font-bold tracking-wider select-none group-hover:scale-105 transition">
                    {item.url
                      ? new URL(item.url).hostname.replace("www.","").split(".").slice(0,2).join('.')
                      : "source"
                    }
                  </span>

                  {/* Title as primary link */}
                  <Link href={item.url} target="_blank" rel="noopener noreferrer"
                    className="text-xl font-bold text-indigo-800 dark:text-indigo-300 hover:underline flex items-center gap-2 mb-1">
                    {item.title || "Untitled"}
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="inline-block">
                      <path d="M14 3h7v7m0-7L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>

                  {/* Answer/content as markdown if present */}
                  {item.answer ? (
                    <div className="prose prose-indigo dark:prose-invert max-w-full mt-2 text-base">
                      <ReactMarkdown>{item.answer}</ReactMarkdown>
                    </div>
                  ) : item.snippet ? (
                    <p className="text-neutral-700 dark:text-neutral-300 text-base mt-2">{item.snippet}</p>
                  ) : null}

                  {/* Raw URL shown dimly below */}
                  <div className="mt-3 text-xs text-neutral-400 dark:text-neutral-500 break-all select-all">
                    {item.url}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </Layout>
    </>
  );
}
