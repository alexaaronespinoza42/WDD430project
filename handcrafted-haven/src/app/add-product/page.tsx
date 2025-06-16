'use client';

export default function AddProductPage() {
  return (
    <section className="max-w-xl mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Add a New Product</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Product Name"
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Image URL"
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Price"
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Product Description"
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Publish
        </button>
      </form>
    </section>
  );
}
