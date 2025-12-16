import React from 'react';

const BusinessDepartment = ({ data }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
        <span className="mr-2">🏢</span>
        {data.title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.categories.map((category, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">{category.title}</h4>
            
            <div className="space-y-2">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessDepartment;