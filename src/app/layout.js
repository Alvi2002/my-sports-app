import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-md mx-auto min-h-screen bg-[#0a0a0a] relative border-x border-white/5 shadow-2xl">
        {children}
      </body>
    </html>
  );
}
