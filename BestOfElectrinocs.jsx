import React from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

const BestOfElectronics = () => {
  const products = [
    {
      image: 'images/electronics1.jpg',
      title: 'Apple iPhone 14 Pro Max',
      price: '₹1,20,999',
      link: 'https://shorturl.at/botR0',
    },
    {
      image: 'images/electronics2.jpg',
      title: 'HP Victus Ryzen 7',
      price: '₹77,990',
      link: 'https://shorturl.at/jnVZ0',
    },
    {
      image: 'images/electronics3.jpg',
      title: 'Canon EOS M50',
      price: '₹58,999',
      link: 'https://shorturl.at/opBDQ',
    },
    {
      image: 'images/electronics4.jpg',
      title: 'REDMI 20000 mAh',
      price: '₹2,049',
      link: 'https://shorturl.at/rNQUW',
    },
    {
      image: 'images/electronics5.jpg',
      title: 'VEGA SmartOne',
      price: '₹1,099',
      link: 'https://shorturl.at/biHR1',
    },
    {
      image: 'images/electronics6.jpg',
      title: 'Egate i9 Pro HD 720p',
      price: '₹7,990',
      link: 'https://shorturl.at/rzBZ8',
    },
    {
      image: 'images/electronics7.jpg',
      title: 'DELL S Series',
      price: '₹14,278',
      link: 'https://shorturl.at/ciHIP',
    },
    {
      image: 'images/electronics8.jpg',
      title: 'JBL Go Essential',
      price: '₹1899',
      link: 'https://shorturl.at/fiW01',
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="content p-4">
        <div className="contenthead text-2xl font-bold mb-4">Best of Electronics</div>
        <hr />
        <div className="offerrow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BestOfElectronics;