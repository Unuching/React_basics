import { useParams, Link } from 'react-router';
import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_COIN_API_URL;

const CoinDetailsPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const res = await fetch(`${API_URL}/${id}`);

        if (!res.ok) throw new Error('Failed To get Data');

        const Data = await res.json();

        setCoin(Data);
      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCoin();
  }, [id]);

  return (
    <div className='coin-details-container'>
      <Link to='/'>Back To Home</Link>
      <h1 className='coin-details-title'>
        {coin ? `${coin.name} (${coin.symbol})` : 'Coin details'}
      </h1>
      {loading && <p>Loading....</p>}
      {error && <div className='error'>{error} </div>}
      {!loading && !error && (
        <>
          <img
            src={coin.image.large}
            alt={coin.name}
            className='coin-details-image'
          />
          <p>{coin.description.en.split('.')[0] + '.'}</p>
          <div className='.coin-details-info'>

            
          </div>
        </>
      )}
    </div>
  );
};

export default CoinDetailsPage;
