import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Init page",
  description: "Description init page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
