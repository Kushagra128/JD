import React from 'react';

const ProjectScope = ({ data }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
        <span className="mr-2">📈</span>
        {data.title}
      </h2>
      
      <div className="overflow-hidden rounded border border-gray-300">
        <div className="bg-slate-700 text-white px-4 py-3">
          <div className="grid grid-cols-12 gap-4 text-sm font-medium">
            <div className="col-span-2">Phase</div>
            <div className="col-span-5">Focus</div>
            <div className="col-span-5">Expected Outputs</div>
          </div>
        </div>
        
        <div className="divide-y divide-gray-200">
          {data.phases.map((phase, index) => (
            <div key={index} className="px-4 py-3 bg-white hover:bg-gray-50">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-2">
                  <span className="text-sm text-gray-800 font-medium">{phase.phase}</span>
                </div>
                
                <div className="col-span-5">
                  <span className="text-sm text-gray-700">{phase.focus}</span>
                </div>
                
                <div className="col-span-5">
                  <span className="text-sm text-gray-600">{phase.expectedOutputs}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectScope;