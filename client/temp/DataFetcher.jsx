import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://api.acleddata.com/acled/read?limit=10&event_date=1980-01-01&event_date_to=2024-12-31') // Zmień URL na właściwy adres API
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Data from Server</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
