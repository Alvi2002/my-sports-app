import './globals.css';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <main className="max-w-md mx-auto min-h-screen bg-[#0a0a0a] border-x border-white/5 relative">
          {children}
        </main>
      </body>
    </html>
  );
}
