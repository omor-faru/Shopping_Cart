import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 ">
          🛒 Shopping Cart
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Product List */}
          <div className="md:col-span-2">
            <ProductList />
          </div>

          {/* Cart */}
          <div>
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;


