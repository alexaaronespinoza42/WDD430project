export default function LoginPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <p className="mb-4 text-gray-600">
        This is a demo login page. Authentication is not required in this version.
      </p>
      <button
        disabled
        className="bg-gray-400 text-white px-6 py-3 rounded cursor-not-allowed"
      >
        Login disabled (demo)
      </button>
    </section>
  );
}
