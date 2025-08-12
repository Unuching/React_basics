import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale,
} from 'chart.js';

import 'chartjs-adapter-date-fns';

Chartjs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale
);

const API_URL = import.meta.env.VITE_COIN_API_URL;

const CoinChart = ({ coinID }) => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      const res = await fetch(
        `${API_URL}/${coinID}/market_chart?vs_currency=usd&days=7`
      );
    };
    fetchPrices();
  }, [coinID]);

  return <>Chart</>;
};

export default CoinChart;
