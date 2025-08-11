import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

const CoinDetailsPage = () => {
  const { id } = useParams();

  return <div>Coin Details {id}</div>;
};

export default CoinDetailsPage;
