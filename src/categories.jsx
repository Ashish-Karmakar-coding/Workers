import React from 'react';
import Plumberimg from './assets/plumber.jpg';
import EmployeeList from './List'


export default function ImageGrid() {
  // Sample image URLs - replace with your actual image paths
  const items = [
    { id: 1, image: Plumberimg, category: "Plumber" },
    { id: 2, image: Plumberimg, category: "Electrition" },
    { id: 3, image: Plumberimg, category: "Painter" },
    { id: 4, image: Plumberimg, category: "Carpenter" },
    { id: 5, image: Plumberimg, category: "Barber" },
    { id: 6, image: Plumberimg, category: "House-Keeper" },
    { id: 7, image: Plumberimg, category: "Baby-sitter" },
    { id: 8, image: Plumberimg, category: "Builder" },
    { id: 9, image: Plumberimg, category: "Teacher" },
    { id: 10, image: Plumberimg, category: "House-Cleaner" },
  ];

  return (
    <>
    <div className="w-full min-h-screen p-4 md:p-8">
      <h1 className='flex text-3xl mb-3'>Category</h1>
      <hr className='mb-4'/>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-2 w-full">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative h-28 md:h-18 rounded-xl overflow-hidden
                     shadow-2xl hover:shadow-3xl transition-all duration-300
                     group cursor-pointer"
            style={{
              backgroundColor: 'blue',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 flex items-center  group-hover:bg-black/50 transition-colors">
              {/* Content */}
              <h3 className="text-lg font-bold text-white">{item.category}</h3>
            </div>
            {/* Hover Effect */}
            <div className="absolute inset-0 group-hover:scale-y-110 transition-transform duration-300"></div>
          </div>
        ))}
      </div>
    <EmployeeList/>

    </div>
    </>
  );
}