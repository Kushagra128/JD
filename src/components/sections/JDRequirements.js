import React from 'react';

const JDRequirements = ({ data }) => {
  const getCriticalityColor = (criticality) => {
    switch (criticality) {
      case 'Must-Have':
        return 'bg-blue-500 text-white';
      case 'Nice-to-Have':
        return 'bg-cyan-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
        <span className="mr-2">📋</span>
        JD Requirements
      </h2>
      
      <div className="overflow-hidden rounded border border-gray-300">
        <div className="bg-slate-700 text-white px-4 py-3">
          <div className="grid grid-cols-12 gap-4 text-sm font-medium">
            <div className="col-span-2">Area</div>
            <div className="col-span-4">Requirement</div>
            <div className="col-span-2">Criticality</div>
            <div className="col-span-4">Notes</div>
          </div>
        </div>
        
        <div className="divide-y divide-gray-200">
          {data.requirements.map((req, index) => (
            <div key={index} className="px-4 py-3 bg-white hover:bg-gray-50">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-2">
                  <span className="text-sm text-gray-800 font-medium">{req.area}</span>
                </div>
                
                <div className="col-span-4">
                  <span className="text-sm text-gray-700">{req.requirement}</span>
                </div>
                
                <div className="col-span-2">
                  <span className={`inline-flex px-2 py-1 rounded text-xs font-medium ${getCriticalityColor(req.criticality)}`}>
                    {req.criticality}
                  </span>
                </div>
                
                <div className="col-span-4">
                  <span className="text-xs text-gray-600">{req.notes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JDRequirements;