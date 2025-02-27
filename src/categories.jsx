export default function ImageGrid() {
    // Sample image URLs - replace with your actual image paths
    const items = [
      { id: 1, image: 'url(https://uk.linkedin.com/company/img)' },
      { id: 2, image: 'url(https://uk.linkedin.com/company/img)' },
      { id: 3, image: 'url(https://uk.linkedin.com/company/img)' },
      { id: 4, image: 'url(https://uk.linkedin.com/company/img)' },
      { id: 5, image: 'url(https://uk.linkedin.com/company/img)' },
      { id: 6, image: 'url(https://uk.linkedin.com/company/img)' },
      { id: 7, image: 'url(https://uk.linkedin.com/company/img)' },
      { id: 8, image: 'url(https://uk.linkedin.com/company/img)' },
      { id: 9, image: 'url(https://uk.linkedin.com/company/img)' },
      { id: 10, image: 'url(https://uk.linkedin.com/company/img)' },
    ];
  
    return (
      <div className="w-full min-h-screen p-4 md:p-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 w-full">
          {items.map((item) => (
            <div 
              key={item.id}
              className="relative h-48 md:h-64 rounded-xl overflow-hidden
                       shadow-lg hover:shadow-xl hover:scale-107 transition-all duration-300
                       group cursor-pointer"
              style={{ 
                backgroundImage: item.image,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors">
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-bold">Item {item.id}</h3>
                  <p className="text-sm opacity-80">Description</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }