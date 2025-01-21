import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";
import Loader from "@/components/Loader";
import { dark, neobrutalism } from "@clerk/themes"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next Auth app",
  description: "Next Authentication App with clerk apllication",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme: [neobrutalism],
    }}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ClerkLoading>
            {/* <div className="h-screen w-screen bg-white flex justify-center items-center">
              <p className="text-2xl font-bold to-gray-800">Loading...</p>
            </div> */}
            <Loader />
          </ClerkLoading>
          <ClerkLoaded>
            <Header />
            {children}
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
