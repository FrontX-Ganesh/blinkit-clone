import { products } from "../data/product_data";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-12">
      <div className="max-w-[1450px] mx-auto px-4 mb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Premium Products
          </h1>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
            Discover amazing deals and premium brands all in one place
          </p>
        </div>
      </div>

      <section className="max-w-[1450px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border border-white/20"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name || "Product image"}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  ₹{product.price}
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                  {product.name}
                </h2>

                <p className="text-purple-200 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-purple-500/20 text-purple-200 px-2 py-1 rounded-full border border-purple-400/30">
                    {product.manufacturer}
                  </span>
                  <span className="text-xs bg-indigo-500/20 text-indigo-200 px-2 py-1 rounded-full border border-indigo-400/30">
                    {product.category}
                  </span>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Load More Products
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
