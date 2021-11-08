import React, { useState } from 'react';

const SingleParawisata = ({ id, name, img, country, info, removeWisata }) => {
  const [readMore, setreadMore] = useState(false);
  return (
    <article className='wisata'>
      <img src={img} alt={name} />
      <footer>
        <div className='wisata-title'>
          <h4>{name}</h4>
          <h4>{country}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 89)}. . . `}
          <button
            onClick={() => setreadMore(!readMore)}
            style={{
              border: 'none',
              background: 'none',
              color: '#ddd',
              fontWeight: 'bold',
              fontSize: '1rem',
              cursor: 'pointer',
              letterSpacing: '1px',
            }}
          >
            {readMore ? '[ Lebih Sedikit ]' : '[ Selangkapnya ]'}
          </button>
        </p>
        <div className='center-btn'>
          <button onClick={() => removeWisata(id)}>hapus wisata</button>
        </div>
      </footer>
    </article>
  );
};

export default SingleParawisata;
