"use client";
import Link from "next/link";

export default function NotFound() {
  return (
      <main className="px-8 sm:px-4 md:px-6 slate w-full sm:w-[80%] mx-auto">
        <main className="mx-auto py-1 px-4 min-h-screen flex justify-center flex-col items-center">
          <h2 className="my-4 text-2xl font-bold">
            Sorry, the requested page does not exist!
          </h2>
          <p className="text-xl">
            Go back to{" "}
            <Link href="/home" className="underline">
              Home 🏠
            </Link>
          </p>
        </main>
        </main>
  );
}
