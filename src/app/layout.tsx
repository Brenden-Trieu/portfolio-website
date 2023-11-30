export const metadata = {
  title: "Brenden Trieu",
  description: "The personal website of Brenden Trieu",
};

import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script src="/assets/bootstrap.min.js" />
    </html>
  );
}
