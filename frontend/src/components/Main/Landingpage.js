import React from 'react';

function Landingpage() {
  return (
    <div>
      <section className='bg-gray-dark h-50'>
        <div className='container mx-auto'>
          <img className='w-16 ml-5' src='../img/avatar.png'></img>
          <input
            className='focus:outline-none focus:shadow-outline w-full h-16 px-3 px-8 text-xl rounded shadow-lg'
            type='search'
            placeholder='Search for a cooking experience...'
          />
        </div>
      </section>
      <div className='leading-2 mb-5 ml-6 text-3xl italic text-center text-red-800'>
        <h2>What's on the Menu Today?</h2>
      </div>
      <div className='items-center justify-center ml-40'>
        <img src='../img/landingpagetransparent.png' width='70%'></img>
      </div>
    </div>
  );
}
export default Landingpage;
