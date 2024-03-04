import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-d-h1">Not Found</h1>
      <p className="mb-4">
        Could not find the page that you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="rounded-full border-[1px] border-primary-950 px-6 py-[2px] font-haskoy text-primary-950 transition-all duration-300 ease-in-out hover:bg-primary-950 hover:text-primary-50 active:border-primary-800 active:bg-primary-800"
      >
        Return to Home
      </Link>
    </div>
  );
}
