import "./globals.css";

export const metadata = {
  title: "All My Stuff — Tony DeRuvo",
  description: "A simple index of everything I'm building.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
