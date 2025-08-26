"use client";
import Link from 'next/link';
import NavBar from '../components/NavBar';
import { Sparkles, Wand2, Terminal, Rocket, Download, MessageSquare, Edit3 } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <NavBar />

      {/* Announcement Bar */}
      <div className="w-full border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-blue-50 via-indigo-50 to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-2 text-center text-sm text-blue-700 dark:text-blue-300">
          Introducing MYYENI — an AI-first code experience. <a className="underline underline-offset-4 hover:text-blue-800 dark:hover:text-blue-200" href="#features">Explore what’s new</a>
        </div>
      </div>

      <main className="relative isolate overflow-hidden min-h-[80vh] bg-white dark:bg-gray-950">
        {/* Background Accents */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-blue-200 via-purple-200 to-transparent blur-3xl dark:from-blue-900/40 dark:via-purple-900/30" />
          <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-emerald-200 via-cyan-200 to-transparent blur-3xl dark:from-emerald-900/30 dark:via-cyan-900/20" />
        </div>

        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-900/40 bg-blue-50/60 dark:bg-blue-900/20 px-3 py-1 text-xs text-blue-700 dark:text-blue-300 mb-4">
              <Sparkles className="h-4 w-4" />
              Built for speed, designed for flow
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Code faster with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 dark:from-blue-400 dark:via-indigo-400 dark:to-emerald-300">
                MYYENI
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
              A modern, AI-first experience for building software. Autocomplete, inline edits, and chat—directly in your flow.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/apps"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <Download className="h-4 w-4" /> Download for Windows
              </Link>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-5 py-3 text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <Rocket className="h-4 w-4" /> Explore features
              </a>
            </div>

            {/* Pills */}
            <div className="mt-8 flex flex-wrap gap-2 text-xs text-gray-600 dark:text-gray-400">
              <span className="px-3 py-1 rounded-full border border-gray-200 dark:border-gray-800">Autocomplete</span>
              <span className="px-3 py-1 rounded-full border border-gray-200 dark:border-gray-800">Chat</span>
              <span className="px-3 py-1 rounded-full border border-gray-200 dark:border-gray-800">Inline Edit</span>
              <span className="px-3 py-1 rounded-full border border-gray-200 dark:border-gray-800">Fast & Lightweight</span>
            </div>
          </div>

          {/* Code Mock */}
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-blue-500/30 via-indigo-500/30 to-emerald-500/30 blur-2xl" />
            <div className="relative rounded-3xl bg-gray-900 ring-1 ring-white/10 shadow-2xl overflow-hidden">
              {/* Window header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-auto text-xs text-gray-400">myyeni.tsx</span>
              </div>
              {/* Code area */}
              <div className="p-5 font-mono text-sm">
                <div className="text-gray-500">1 <span className="text-blue-300">function</span> <span className="text-emerald-300">build</span>() {'{'}</div>
                <div className="text-gray-500">2 &nbsp;&nbsp;<span className="text-purple-300">const</span> app = <span className="text-blue-300">new</span> <span className="text-pink-300">MYYENI</span>()</div>
                <div className="text-gray-500">3 &nbsp;&nbsp;app.<span className="text-emerald-300">chat</span>(<span className="text-amber-300">"Generate a REST API"</span>)</div>
                <div className="text-gray-500">4 &nbsp;&nbsp;app.<span className="text-indigo-300">edit</span>(<span className="text-amber-300">"Add auth & tests"</span>)</div>
                <div className="text-gray-500">5 &nbsp;&nbsp;<span className="text-blue-300">return</span> app.<span className="text-pink-300">ship</span>()</div>
                <div className="text-gray-500">6 {'}'}</div>

                <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-gray-300">
                  <Wand2 className="h-4 w-4 text-emerald-300" />
                  AI suggestion • <span className="text-emerald-300">Accept</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="mx-auto max-w-7xl px-4 sm:px-6 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-900/60 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Terminal className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h3 className="text-lg font-semibold">Fast performance</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">Optimized rendering and minimal overhead so you can focus on shipping.</p>
            </div>
            <div className="bg-white dark:bg-gray-900/60 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <MessageSquare className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-lg font-semibold">In-editor chat</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">Discuss code inline. Get answers, generate snippets, and iterate instantly.</p>
            </div>
            <div className="bg-white dark:bg-gray-900/60 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Edit3 className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-lg font-semibold">Inline edits</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">Apply AI-powered edits safely with clear previews and diffs.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-24">
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-blue-600 via-indigo-600 to-emerald-600 p-1">
            <div className="rounded-[1.3rem] bg-white/90 dark:bg-gray-950/90 p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Ready to try MYYENI?</h2>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">Download the latest build and start coding with an AI-first workflow.</p>
                </div>
                <div className="flex gap-3">
                  <Link href="/apps" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-blue-700">
                    <Download className="h-4 w-4" /> Download
                  </Link>
                  <Link href="/about" className="inline-flex items-center gap-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-5 py-3 text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-700">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6">
        <p className="text-sm">© {new Date().getFullYear()} MYYENI. All rights reserved.</p>
      </footer>
    </>
  );
}
