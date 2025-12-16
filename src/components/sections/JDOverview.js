import React from 'react';

const JDOverview = ({ data }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        {data.title}
      </h2>
      
      {/* Job Title and Tags */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Job Title: {data.jobTitle}
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            Location: {data.location}
          </span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            Work Model: {data.workModel}
          </span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            Seniority: {data.seniority}
          </span>
        </div>
      </div>

      {/* Focus Areas and Experience */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Primary Focus</h4>
          <ul className="space-y-2">
            {data.primaryFocus.map((item, index) => (
              <li key={index} className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Secondary Focus</h4>
          <ul className="space-y-2">
            {data.secondaryFocus.map((item, index) => (
              <li key={index} className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Experience</h4>
          <ul className="space-y-2">
            {data.experience.map((item, index) => (
              <li key={index} className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JDOverview;