import React from 'react';

const ProductCard = ({ image, title, price, link }) => {
  return (
    <div className="offerimg1 p-4">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className="w-full h-auto" />
        <div className="offerimg-subtxt1 text-lg font-bold mt-2">{title}</div>
        <div className="offerimg-subtxt2 text-xl font-bold mt-1">{price}</div>
        <button className="buy-now bg-orange-600 text-white px-4 py-2 mt-2 rounded">BUY NOW</button>
      </a>
    </div>
  );
};

export default ProductCard;