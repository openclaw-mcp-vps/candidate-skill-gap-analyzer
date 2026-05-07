export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Hiring Tool
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Identify Skill Gaps<br />
          <span className="text-[#58a6ff]">Before You Hire</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Upload a job description and resume. Our AI instantly extracts and compares skills, showing you exactly what training or experience a candidate is missing.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-10 py-4 rounded-lg transition-colors duration-200"
        >
          Start Analyzing — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card required to try.</p>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">📄</div>
            <h3 className="text-white font-semibold mb-2">Upload Resumes & JDs</h3>
            <p className="text-[#8b949e] text-sm">Paste or upload job descriptions and candidate resumes in seconds.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">🤖</div>
            <h3 className="text-white font-semibold mb-2">AI Skill Extraction</h3>
            <p className="text-[#8b949e] text-sm">OpenAI parses both documents and maps every required and present skill.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">📊</div>
            <h3 className="text-white font-semibold mb-2">Gap Dashboard</h3>
            <p className="text-[#8b949e] text-sm">See matched skills, missing skills, and suggested training paths at a glance.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8">
            <li className="flex items-center gap-3 text-[#c9d1d9]"><span className="text-[#58a6ff] font-bold">✓</span> Unlimited analyses</li>
            <li className="flex items-center gap-3 text-[#c9d1d9]"><span className="text-[#58a6ff] font-bold">✓</span> AI skill extraction & matching</li>
            <li className="flex items-center gap-3 text-[#c9d1d9]"><span className="text-[#58a6ff] font-bold">✓</span> Gap & training recommendations</li>
            <li className="flex items-center gap-3 text-[#c9d1d9]"><span className="text-[#58a6ff] font-bold">✓</span> Export reports as PDF</li>
            <li className="flex items-center gap-3 text-[#c9d1d9]"><span className="text-[#58a6ff] font-bold">✓</span> Priority email support</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg py-4 rounded-lg transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How does the skill gap analysis work?</h3>
            <p className="text-[#8b949e] text-sm">You upload or paste a job description and a candidate resume. Our AI (powered by OpenAI) extracts all required skills from the JD and all present skills from the resume, then compares them to produce a clear gap report with training suggestions.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">What file formats are supported?</h3>
            <p className="text-[#8b949e] text-sm">You can paste plain text directly or upload PDF and DOCX files. The tool handles most standard resume and job description formats automatically.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. You can cancel at any time from your billing portal. You keep access until the end of your current billing period with no hidden fees.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Candidate Skill Gap Analyzer. All rights reserved.
      </footer>
    </main>
  );
}
