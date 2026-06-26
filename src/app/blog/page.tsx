import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { posts } from "@/lib/posts";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Hooklift Insurance Blog — Trucking & Insurance Insights",
  description:
    "Guides and resources for hooklift truck operators on insurance, DOT compliance, coverage types, and protecting your specialty truck business.",
};

export default function BlogPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-white py-14 md:py-20 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            Blog
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5">
            Insurance Resources for Hooklift Operators
          </h1>
          <p className="text-lg text-slate-600">
            Guides, coverage breakdowns, and compliance tips for hooklift truck, roll-off,
            and crane truck operators.
          </p>
        </div>
      </section>

      {/* Post list */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-slate-200 p-7 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-2 leading-snug">
                  <a href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </a>
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{post.description}</p>
                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Read article <ArrowRight className="w-4 h-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
