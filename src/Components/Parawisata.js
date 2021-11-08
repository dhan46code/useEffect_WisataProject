import React from 'react';
import SingleParawisata from './SingleParawisata';

const Parawisata = ({ wisata, removeWisata }) => {
  return (
    <>
      <div className='title'>
        <h2>parawisata indonesia</h2>
        <hr />
      </div>
      <section className='wisata_grid'>
        {wisata.map((wisata_) => {
          return (
            <SingleParawisata
              key={wisata_.id}
              {...wisata_}
              removeWisata={removeWisata}
            />
          );
        })}
      </section>
    </>
  );
};

export default Parawisata;
