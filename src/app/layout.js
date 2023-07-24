import "./globals.scss";

export const metadata = {
  title: "Rachit Patel",
  description: "My personal website",
  keywords: "Rachit Patel, Rachit, rachit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
