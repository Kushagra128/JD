import React from 'react';

const IntegrationRequirements = ({ data }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
        <span className="mr-2">🔗</span>
        {data.title}
      </h2>
      
      <div className="overflow-hidden rounded border border-gray-300">
        <div className="bg-slate-700 text-white px-4 py-3">
          <div className="grid grid-cols-12 gap-4 text-sm font-medium">
            <div className="col-span-3">With Module</div>
            <div className="col-span-3">Interface Type</div>
            <div className="col-span-3">Technology</div>
            <div className="col-span-3">Notes</div>
          </div>
        </div>
        
        <div className="divide-y divide-gray-200">
          {data.integrations.map((integration, index) => (
            <div key={index} className="px-4 py-3 bg-white hover:bg-gray-50">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-3">
                  <span className="text-sm text-gray-800 font-medium">{integration.withModule}</span>
                </div>
                
                <div className="col-span-3">
                  <span className="text-sm text-gray-700">{integration.interfaceType}</span>
                </div>
                
                <div className="col-span-3">
                  <span className="text-sm text-gray-700">{integration.technology}</span>
                </div>
                
                <div className="col-span-3">
                  <span className="text-sm text-gray-600">{integration.notes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegrationRequirements;