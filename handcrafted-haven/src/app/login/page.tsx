export default function LoginPage() {
  return (
    <section className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="flex flex-col gap-4">
        <input type="email" placeholder="Email" className="border p-2 rounded" />
        <input type="password" placeholder="Password" className="border p-2 rounded" />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Log In
        </button>
      </form>
    </section>
  );
}
