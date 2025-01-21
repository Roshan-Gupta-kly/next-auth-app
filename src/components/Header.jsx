import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="bg-gradient-to-br from-slate-800 to to-slate-300 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-3">
        {/* logo */}
        <Link href="/" className="text-2xl font-extrabold group cursor-pointer">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 drop-shadow-lg group-hover:from-blue-400 group-hover:to-blue-600">
            Auth
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700 group-hover:from-purple-400 group-hover:to-purple-600">
            App
          </span>
        </Link>
        {/* add a navigation menu */}
        <nav>
          <ul className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <div className="underline text-red-800 font-semibold text-base">
                <SignInButton />
              </div>
            </SignedOut>
          </ul>
        </nav>
      </div>
    </header>
  );
}
