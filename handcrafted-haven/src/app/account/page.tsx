export default function AccountPage() {
  return (
    <section className="max-w-xl mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-3xl font-bold mb-4">My Account</h1>
      <div className="text-gray-700 space-y-4">
        <p><strong>Name:</strong> Alexandre Espinoza</p>
        <p><strong>Email:</strong> alexandre@example.com</p>
        <p><strong>Role:</strong> Seller</p>
        <p><strong>Status:</strong> Logged in (mock)</p>
      </div>
    </section>
  );
}
