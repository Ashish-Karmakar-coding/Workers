// src/List.jsx
import React, { useState } from 'react';

const employees = [
  { id: 1, name: 'John Doe', location: 'New York' },
  { id: 2, name: 'Jane Smith', location: 'Los Angeles' },
  { id: 3, name: 'Alice Johnson', location: 'Chicago' },
  { id: 4, name: 'Bob Brown', location: 'New York' },
  { id: 5, name: 'Charlie Davis', location: 'Los Angeles' },
  { id: 6, name: 'David Wilson', location: 'Miami' },
  { id: 7, name: 'Eva Green', location: 'Seattle' },
  { id: 8, name: 'Frank White', location: 'Boston' },
  { id: 9, name: 'Grace Lee', location: 'San Francisco' },
  { id: 10, name: 'Henry Black', location: 'Dallas' },
  { id: 11, name: 'Ivy Adams', location: 'New York' },
  { id: 12, name: 'Jack Brown', location: 'Los Angeles' },
];

const EmployeeList = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  const handleSearch = () => {
    const filtered = employees.filter(employee =>
      employee.location.toLowerCase().includes(searchLocation.toLowerCase())
    );
    setFilteredEmployees(filtered);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-start p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Employee list</h1>
      <hr className='mb-4 mt-4' />
      <div className="mb-4 w-full max-w-md flex">
        <input
          type="text"
          placeholder="Search by location"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
          className="border border-blue-300 rounded-l p-2 w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white rounded-r p-2 hover:bg-blue-700"
        >
          Search
        </button>
      </div>
      <div className="w-full max-w-2xl overflow-y-auto h-full">
        <ul className="space-y-4">
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map(employee => (
              <li key={employee.id} className="border border-blue-200 rounded-lg p-4 flex flex-col md:flex-row justify-between items-center shadow-lg">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="text-lg font-semibold">{employee.name}</div>
                  <div className="text-gray-500 ml-2">{employee.location}</div>
                </div>
                <button className="mt-2 md:mt-0 bg-green-500 text-white rounded p-2 hover:bg-green-600">
                  Hire me
                </button>
              </li>
            ))
          ) : (
            <li className="border border-blue-200 rounded-lg p-4 text-center shadow-lg">
              No employees found.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default EmployeeList;