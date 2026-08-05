import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 px-4">
            <div className="max-w-xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <p className="text-sm font-semibold uppercase tracking-[0.4em] text-indigo-600">404</p>
                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                    Page not found
                </h1>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    The page you were looking for does not exist or has moved.
                </p>
                <Link
                    to="/"
                    className="mt-8 inline-flex rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                    Return to home
                </Link>
            </div>
        </div>
    );
}
