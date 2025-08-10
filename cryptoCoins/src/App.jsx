import { useState, useEffect } from 'react';
import CoinCard from './components/coinCard';
import LimitSelector from './components/limitSelector';
import FilterInput from './components/filterInput';

const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`
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
  }, [limit]);

  const filteredCoins = coins.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(filter.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <div>
      <h1> 🚀 Hello Crypto</h1>
      {loading && <p>Loading....</p>}
      {error && <div className='error'> {error}</div>}
      <div className='top-controls'>
        <FilterInput filter={filter} onFilterChange={setFilter} />
        <LimitSelector limit={limit} onLimitChange={setLimit} />
      </div>

      {!loading && !error && (
        <main className='grid'>
          {filteredCoins.length > 0 ? (
            filteredCoins.map((coin) => <CoinCard key={coin.id} coin={coin} />)
          ) : (
            <p>No Matching Coins</p>
          )}
        </main>
      )}
    </div>
  );
};

export default App;
