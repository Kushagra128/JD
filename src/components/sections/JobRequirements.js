import React from 'react';

const JobRequirements = ({ data }) => {
  const ProgressBar = ({ value }) => (
    <div className="w-full bg-gray-200 rounded-sm h-2">
      <div 
        className="bg-blue-500 h-2 rounded-sm transition-all duration-500"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        {data.title}
      </h2>
      
      <div className="overflow-hidden rounded border border-gray-300">
        <div className="bg-slate-700 text-white px-4 py-3">
          <div className="grid grid-cols-12 gap-4 text-sm font-medium">
            <div className="col-span-6">Requirement</div>
            <div className="col-span-3">Score</div>
            <div className="col-span-3">Status</div>
          </div>
        </div>
        
        <div className="divide-y divide-gray-200">
          {data.items.map((item, index) => (
            <div key={index} className="px-4 py-3 bg-white hover:bg-gray-50">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-6">
                  <span className="text-sm text-gray-800">{item.requirement}</span>
                </div>
                
                <div className="col-span-3">
                  <div className="flex items-center space-x-2">
                    <div className="flex-1">
                      <ProgressBar value={item.score} />
                    </div>
                    <span className="text-xs text-gray-600 min-w-[35px]">
                      {item.score}%
                    </span>
                  </div>
                </div>
                
                <div className="col-span-3">
                  <span className="text-xs text-gray-600">
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobRequirements;