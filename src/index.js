import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Loading from './Components/Loading';
import Parawisata from './Components/Parawisata';
const url = 'https://dhan-api.netlify.app/api/2-tour-api';

const App = () => {
  const [wisata, setWisata] = useState([]);
  const [loading, setLoading] = useState(true);

  // remove item parawisata
  const removeWisata = (id) => {
    const removeItems = wisata.filter((wisata_id) => wisata_id.id !== id);
    // update
    setWisata(removeItems);
  };

  const fetchWisata = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      // update
      setWisata(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchWisata();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  // if wisata empty field again with fetch
  if (wisata.length === 0) {
    return (
      <main>
        <div className='title2'>
          <div>
            <h3>kembali ke awal?</h3>
            <button className='back-btn' onClick={fetchWisata}>
              klik disini
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Parawisata wisata={wisata} removeWisata={removeWisata} />
    </main>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
