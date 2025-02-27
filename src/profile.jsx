import React from "react";
export default function ProfilePage() {
    return (
      <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center flex-col sm:flex-row gap-6">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-blue-100 shadow-lg"
              />
              <div className="text-center sm:text-left">
                <h1 className="text-3xl font-bold text-white">Michael Chen</h1>
                <p className="text-blue-200 mt-2">Lead Software Engineer @BlueTech</p>
                <p className="text-blue-300 mt-1">San Francisco, CA</p>
              </div>
            </div>
          </div>
  
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold text-blue-800 mb-4">Contact Details</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-blue-700">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span>michael.chen@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-blue-700">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span>+1 (415) 555-0198</span>
                </div>
                <div className="flex items-center gap-3 text-blue-700">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
  
            {/* Work Experience */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold text-blue-800 mb-4">Experience</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-medium text-blue-900">Lead Software Engineer</h3>
                  <p className="text-blue-600 text-sm">BlueTech • 2020 - Present</p>
                  <p className="text-blue-500 mt-2 text-sm">
                    Leading development of enterprise cloud solutions.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-medium text-blue-900">Senior Developer</h3>
                  <p className="text-blue-600 text-sm">Tech Innovators • 2016 - 2020</p>
                  <p className="text-blue-500 mt-2 text-sm">
                    Full-stack development for SaaS platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Skills Section */}
          <div className="mt-8 bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Technical Skills</h2>
            <div className="flex flex-wrap gap-3">
              {['JavaScript', 'React', 'Node.js', 'AWS', 'Python', 'Docker', 'Kubernetes', 'GraphQL'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
  
          {/* Social Links */}
          <div className="mt-8 bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Connect</h2>
            <div className="flex gap-6">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }