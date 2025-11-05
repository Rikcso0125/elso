export const metadata = {
  title: "AI Weboldalak",
  description: "AI-optimalizált, villámgyors weboldalak",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <body style={{ fontFamily: "Inter, system-ui, Arial" }}>{children}</body>
    </html>
  );
}
