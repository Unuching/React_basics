import { useState, useEffect } from 'react';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:8000/products');
        if (!res.ok) throw new Error('Failed to get products');
        const data = await res.json();
        console.log(data);
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className='min-h-screen bg-gray-100'>
      <h1 className='text-3xl font-bold mb-6'>Products Catalog</h1>
    </div>
  );
};

export default App;
