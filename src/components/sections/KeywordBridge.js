import React from 'react';

const KeywordBridge = ({ data }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
        <span className="mr-2">🏷️</span>
        {data.title}
      </h2>
      
      {/* Keywords Tags */}
      <div className="flex flex-wrap gap-3 mb-8">
        {data.tags.map((tag, index) => (
          <span 
            key={index} 
            className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Boolean Sample */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <div className="flex items-start space-x-3">
          <span className="font-semibold text-gray-700 min-w-[120px] mt-1">
            Boolean sample:
          </span>
          <p className="text-sm text-gray-700 leading-relaxed font-mono bg-white p-3 rounded border">
            {data.booleanSample}
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeywordBridge;