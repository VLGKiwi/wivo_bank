import localFont from 'next/font/local'

import "@styles/normalize.scss";
import "@styles/global.scss";

const inter = localFont({
  src: [
    {
      path: "./fonts/Inter_Medium.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "./fonts/Inter_Regular.woff2",
      weight: "400",
      style: "normal"
    }
  ]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
