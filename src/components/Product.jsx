const products = [
  { name: "Notebook", price: "₹299", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba" },
  { name: "Gift Box", price: "₹499", img: "https://images.unsplash.com/photo-1607082349566-187342175e2f" },
]

export default function Products() {
  return (
    <div className="px-6 mt-16">
      <h2 className="text-2xl font-bold mb-6">Trending Products</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <img src={p.img} className="h-32 w-full object-cover rounded-lg" />
            <h3 className="mt-3 font-semibold">{p.name}</h3>
            <p className="text-teal-600 font-bold">{p.price}</p>

            <button className="mt-3 w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}