import React from 'react';

const SingleParawisata = ({ id, name, img, country, info, removeWisata }) => {
  return (
    <article className='wisata'>
      <img src={img} alt={name} />
      <footer>
        <div className='wisata-title'>
          <h4>{name}</h4>
          <h4>{country}</h4>
        </div>
        <p>{info}</p>
        <div className='center-btn'>
          <button onClick={() => removeWisata(id)}>hapus wisata</button>
        </div>
      </footer>
    </article>
  );
};

export default SingleParawisata;
