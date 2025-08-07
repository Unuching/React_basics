import { useState, useEffect } from 'react';
import CoinCard from './components/coinCard';

const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${API_URL}&order=market_cap_desc&per_page=10&page=1&sparkline=false`
        );
        if (!res.ok) throw new Error('Failed to get Data');
        const data = await res.json();
        console.log(data);
        setCoins(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    // fetch(API_URL)
    //   .then((res) => {
    //     if (!res.ok) throw new Error('Failed to get data');
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     setCoins(data);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     setError(err.message);
    //     setLoading(false);
    //   });
  }, []);

  return (
    <div>
      <h1> 🚀 Hello Crypto</h1>
      {loading && <p>Loading....</p>}
      {error && <div className='error'> {error}</div>}

      {!loading && !error && (
        <main className='grid'>
          {coins.map((coin) => (
            <CoinCard key={coin.id} coin={coin} />
          ))}
        </main>
      )}
    </div>
  );
};

export default App;
