import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ weight: "600", subsets: ["latin"] });

import { ChakraProviders } from "./ChakraProviders";
import StoreProvider from "./StoreProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Learnopia</title>
      </head>
      <body className={inter.className}>
        <ChakraProviders>
          <StoreProvider>{children}</StoreProvider>
        </ChakraProviders>
      </body>
    </html>
  );
}
