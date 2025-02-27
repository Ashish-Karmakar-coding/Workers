import React from 'react';
import { useState } from 'react';

function WorkGallery() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-100 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-600 hover:text-gray-900"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Profile Section */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="./assets/react.svg"
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">John Doe</h2>
              <p className="text-sm text-gray-500">Web Developer</p>
            </div>
          </div>
          <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            Visit Profile
          </button>
        </div>

        {/* Additional Content */}
        <div className="p-4">
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Statistics</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Posts</span>
                <span className="text-gray-600">142</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Followers</span>
                <span className="text-gray-600">2.8k</span>
              </div>
            </div>
          </div>

          <nav className="border-t border-gray-200 pt-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100">
                  <span>Settings</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100">
                  <span>Notifications</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
        />
      )}
    </>
  );
}

export default WorkGallery;