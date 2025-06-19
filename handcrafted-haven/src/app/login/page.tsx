import { signIn } from 'next-auth/react';

export default function LoginPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <p className="mb-4 text-gray-600">Sign in with your GitHub account to continue.</p>
      <button
        onClick={() => signIn('github', { callbackUrl: '/' })}
        className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
      >
        Sign in with GitHub
      </button>
    </section>
  );
}
