import React from 'react';

const TechnicalSkills = ({ data }) => {
  const getDepthColor = (depth) => {
    switch (depth) {
      case 'Expert':
        return 'bg-blue-500 text-white';
      case 'Advanced':
        return 'bg-cyan-500 text-white';
      case 'Intermediate':
        return 'bg-yellow-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
        <span className="mr-2">⚙️</span>
        {data.title}
      </h2>
      
      <div className="overflow-hidden rounded border border-gray-300">
        <div className="bg-slate-700 text-white px-4 py-3">
          <div className="grid grid-cols-12 gap-4 text-sm font-medium">
            <div className="col-span-3">Module</div>
            <div className="col-span-2">Depth Expected</div>
            <div className="col-span-4">Deliverables</div>
            <div className="col-span-3">Area</div>
          </div>
        </div>
        
        <div className="divide-y divide-gray-200">
          {data.modules.map((module, index) => (
            <div key={index} className="px-4 py-3 bg-white hover:bg-gray-50">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-3">
                  <span className="text-sm text-gray-800 font-medium">{module.module}</span>
                </div>
                
                <div className="col-span-2">
                  <span className={`inline-flex px-2 py-1 rounded text-xs font-medium ${getDepthColor(module.depthExpected)}`}>
                    {module.depthExpected}
                  </span>
                </div>
                
                <div className="col-span-4">
                  <span className="text-sm text-gray-700">{module.deliverables}</span>
                </div>
                
                <div className="col-span-3">
                  <span className="text-sm text-gray-600">{module.area}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;