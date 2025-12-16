import React from 'react';

const WorkExperience = ({ data }) => {
  const getDepthColor = (depth) => {
    switch (depth) {
      case 'Advanced':
        return 'bg-cyan-500 text-white';
      case 'Intermediate':
        return 'bg-teal-500 text-white';
      case 'Basic':
        return 'bg-gray-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
        <span className="mr-2">💼</span>
        {data.title}
      </h2>
      
      <div className="overflow-hidden rounded border border-gray-300">
        <div className="bg-slate-700 text-white px-4 py-3">
          <div className="grid grid-cols-12 gap-4 text-sm font-medium">
            <div className="col-span-2">Type</div>
            <div className="col-span-7">Examples</div>
            <div className="col-span-3">Depth Expected</div>
          </div>
        </div>
        
        <div className="divide-y divide-gray-200">
          {data.wricefTypes.map((wricef, index) => (
            <div key={index} className="px-4 py-3 bg-white hover:bg-gray-50">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-2">
                  <span className="text-sm text-gray-800 font-medium">{wricef.type}</span>
                </div>
                
                <div className="col-span-7">
                  <span className="text-sm text-gray-700">{wricef.examples}</span>
                </div>
                
                <div className="col-span-3">
                  <span className={`inline-flex px-3 py-1 rounded text-xs font-medium ${getDepthColor(wricef.depthExpected)}`}>
                    {wricef.depthExpected}
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

export default WorkExperience;