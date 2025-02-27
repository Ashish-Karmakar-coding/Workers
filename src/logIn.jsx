import { useState } from 'react';

export default function Login() {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState('');
  const [dark, setDark] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    payment: '',
    location: '',
    skill: '',
    experience: '',
    certs: null,
    password: ''
  });

  const next = () => setStep(s => s < 3 ? s + 1 : s);
  const prev = () => setStep(s => s > 1 ? s - 1 : s);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setForm({ ...form, certs: e.target.files[0] });
  };

  return (
    <div className={`min-h-screen ${dark ? 'bg-gray-900 text-white' : 'bg-white'}`}>
      <nav className="p-4 border-b flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">LabourConnect</h1>
        <button 
          onClick={() => setDark(!dark)} 
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
        >
          {dark ? '☀️' : '🌙'}
        </button>
      </nav>

      <div className="max-w-md mx-auto p-4">
        {/* Progress Bar */}
        <div className="flex justify-between mb-8 relative">
          <div className="absolute w-full h-1 bg-gray-200 top-1/2 -translate-y-1/2 -z-10 dark:bg-gray-700"></div>
          {[1, 2, 3].map(s => (
            <div key={s} className={`w-8 h-8 rounded-full flex items-center justify-center 
              ${step >= s ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>
              {s}
            </div>
          ))}
        </div>

        {/* Step 1 - Account Type */}
        {step === 1 && (
          <div>
            <h1 className="text-2xl font-bold mb-6">Log in Account</h1>
            <div className="grid gap-4 mb-6">
              <div 
                onClick={() => setUserType('customer')}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-colors
                  ${userType === 'customer' ? 'border-blue-600 bg-blue-50 dark:bg-gray-800' : ''}
                  ${dark ? 'border-gray-700' : 'border-gray-200'}`}
              >
                <svg className="w-8 h-8 mb-2 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                <h3 className="font-bold text-center">Customer</h3>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400">Hire skilled workers</p>
              </div>

              <div 
                onClick={() => setUserType('labour')}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-colors
                  ${userType === 'labour' ? 'border-blue-600 bg-blue-50 dark:bg-gray-800' : ''}
                  ${dark ? 'border-gray-700' : 'border-gray-200'}`}
              >
                <svg className="w-8 h-8 mb-2 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <h3 className="font-bold text-center">Labour</h3>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400">Offer services</p>
              </div>
            </div>
            <button
              onClick={next}
              disabled={!userType}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              Continue
            </button>
          </div>
        )}

        {/* Step 2 - Personal Details */}
        {step === 2 && (
          <div>
            <h1 className="text-2xl font-bold mb-6">Personal Details</h1>
            <div className="space-y-4">
              <input
                name="name"
                placeholder="Full Name"
                className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                onChange={handleChange}
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  min="18"
                  className="p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                  onChange={handleChange}
                />
                <select
                  name="gender"
                  className="p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={prev}
                className="px-4 py-2 border rounded-lg hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                Back
              </button>
              <button
                onClick={next}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3 - Role-specific Details */}
        {step === 3 && (
          <div>
            <h1 className="text-2xl font-bold mb-6">Complete Profile</h1>
            <div className="space-y-4">
              {userType === 'customer' ? (
                <>
                  <select
                    name="payment"
                    className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                    onChange={handleChange}
                  >
                    <option value="">Select Payment Method</option>
                    <option>Credit Card</option>
                    <option>UPI</option>
                    <option>Cash</option>
                  </select>
                  <input
                    name="location"
                    placeholder="Location"
                    className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                    onChange={handleChange}
                  />
                </>
              ) : (
                <>
                  <input
                    name="skill"
                    placeholder="Primary Skill"
                    className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                    onChange={handleChange}
                  />
                  <input
                    type="number"
                    name="experience"
                    placeholder="Experience (years)"
                    className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                    onChange={handleChange}
                  />
                  <label className="block p-4 border-2 border-dashed rounded-lg cursor-pointer hover:border-blue-400 dark:border-gray-700">
                    <div className="flex flex-col items-center">
                      <svg className="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                      </svg>
                      <span className="text-sm">
                        {form.certs ? form.certs.name : 'Upload Certificates (PDF)'}
                      </span>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf"
                      onChange={handleFile}
                    />
                  </label>
                </>
              )}
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={prev}
                className="px-4 py-2 border rounded-lg hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                Back
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}