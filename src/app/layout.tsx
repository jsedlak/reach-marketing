import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reach - The modern headless content platform",
  description: "Content management for developers, by developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/yld6skk.css"
        ></link>
      </head>
      <body className="antialiased">
        <header className="py-5 px-10 bg-indigo-900 text-white">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-10">
                <Link href="/">
                  <Image
                    alt="Reach CMS"
                    width="64"
                    height="64"
                    src="/icon-white.svg"
                    className="size-10"
                  />
                </Link>
                <nav role="menu">
                  <ul className="flex items-center gap-10">
                    <li>
                      <Link href="/" className="text-lg">
                        Platform
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="text-lg">
                        Solutions
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="text-lg">
                        Resources
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="text-lg">
                        Developers
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="flex items-center gap-4">
                <a target="_blank" href="https://github.com/jsedlak/reach">
                  <FaGithub className="size-6" />
                </a>
                <Link
                  href="/"
                  className="py-3 px-6 text-lg rounded-lg border-white border hover:bg-white hover:text-indigo-900"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </header>
        <div>{children}</div>
      </body>
    </html>
  );
}
