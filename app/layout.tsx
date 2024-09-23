import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Citizen Corrects",
  description: "India's first carbon credit marketplace",
  icons: {
    icon: "/logoOff.svg",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
      <head>
          <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
        </head>
        <body className={`${inter.className} universal-padding bg-primary`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
