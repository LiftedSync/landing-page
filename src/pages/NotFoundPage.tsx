import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
      <h1 className="text-8xl font-bold tracking-tight text-foreground">404</h1>
      <p className="mt-3 text-lg text-muted-foreground">Page not found</p>
      <Link
        to="/"
        className="mt-8 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground no-underline transition-opacity hover:opacity-90"
      >
        Back to Home
      </Link>
    </div>
  );
}
