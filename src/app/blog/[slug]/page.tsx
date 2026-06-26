import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { posts } from "@/lib/posts";
import { Clock, ArrowLeft, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (!line) {
      key++;
      continue;
    }
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-2xl font-bold text-slate-900 mt-10 mb-4">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("# ")) {
      elements.push(
        <h1 key={key++} className="text-3xl font-bold text-slate-900 mt-8 mb-4">
          {line.replace("# ", "")}
        </h1>
      );
    } else {
      // Inline bold: **text**
      const parts = line.split(/\*\*(.*?)\*\*/g);
      const rendered = parts.map((part, i) =>
        i % 2 === 1 ? <strong key={i} className="font-semibold text-slate-900">{part}</strong> : part
      );
      elements.push(
        <p key={key++} className="text-slate-600 leading-relaxed mb-4">
          {rendered}
        </p>
      );
    }
  }

  return elements;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main>
      <Navbar />

      {/* Article header */}
      <section className="bg-white py-14 md:py-20 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-blue-600 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </a>
          <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
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
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-slate-600">{post.description}</p>
        </div>
      </section>

      {/* Article content */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12">
            <div className="text-slate-700">{renderContent(post.content)}</div>
          </div>

          {/* CTA */}
          <div className="mt-10 bg-blue-600 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Ready to get the right coverage?
            </h2>
            <p className="text-blue-100 mb-6 text-sm">
              Contractors Choice Agency specializes in hooklift and roll-off truck insurance.
              Get a free quote from a specialist today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/quote"
                className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:844-967-5247"
                className="text-white font-semibold px-6 py-3 rounded-lg border border-blue-400 hover:bg-blue-700 transition-colors"
              >
                Call 844-967-5247
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
