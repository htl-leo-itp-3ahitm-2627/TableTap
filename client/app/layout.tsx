import type { Metadata } from "next";
import "./index.css";

export const metadata: Metadata = {
  title: "TableTap",
  description: "Orders, tables and kitchen in one place.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
