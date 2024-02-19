import type { Metadata } from "next";
import { Inter,Quicksand } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Twitter Clone",
  description: "Twitter Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleOAuthProvider clientId="589733042580-psiiedlm77n41ushq9hmunvoh262ovci.apps.googleusercontent.com">
      <body className={inter.className}>{children}</body>
      </GoogleOAuthProvider>
    </html>
  );
}
