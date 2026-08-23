import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 font-sans text-white bg-black z-0">
      {/* Background Image - Absolute positioned to scroll with the page, covers full width */}
      <div className="absolute top-0 left-0 w-full z-[-1]">
        <img
          src="/background.png"
          alt="Background"
          className="w-full h-auto" 
        />
      </div>

      <main className="flex flex-col gap-8 items-center sm:items-start max-w-xl w-full bg-black/60 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-mono">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-white/10 font-semibold px-1 py-0.5 rounded">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row w-full sm:w-auto">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-white text-black gap-2 hover:bg-gray-200 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-white/20 transition-colors flex items-center justify-center hover:bg-white/10 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
    </div>
  );
}
