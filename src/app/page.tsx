import Chatbox from "@/app/components/Chatbox";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Hi, I'm Céleste!</h1>
        <p className="text-lg">I specialize in sleek, AI-powered applications.</p>
        <p>    Ask celesteGPT for more information on my portfolio.</p>
      </header>

      <section className="w-full max-w-2xl">
        <Chatbox />
      </section>

      <footer className="mt-8 text-sm text-center">
  <p>CelesteGPT can make little to no mistakes. Check important info.</p>
  <div className="flex justify-center space-x-4 mt-2">
    <a href="https://github.com/yourgithub" target="_blank" className="underline">
      GitHub
    </a>
    <a href="https://linkedin.com/in/yourlinkedin" target="_blank" className="underline">
      LinkedIn
    </a>
    <a href="https://linkedin.com/in/yourlinkedin" target="_blank" className="underline">
      Info
    </a>
  </div>
</footer>

    </div>
  );
}
