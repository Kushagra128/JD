import React from 'react';

const JobSkills = ({ data }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
        <span className="mr-2">🎯</span>
        {data.title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.categories.map((category, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h4>
            
            <div className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-gray-700 leading-relaxed">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobSkills;