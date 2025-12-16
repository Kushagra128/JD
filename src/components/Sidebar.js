import React from 'react';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const sidebarItems = [
    { id: 'jdOverview', label: 'JD Overview', icon: '📊' },
    { id: 'jobRequirements', label: 'JD Requirements', icon: '📋' },
    { id: 'technicalSkills', label: 'Modules & Business Processes', icon: '⚙️' },
    { id: 'businessRequirements', label: 'Systems & Deployment', icon: '🏢' },
    { id: 'integrationRequirements', label: 'Integration Requirements', icon: '🔗' },
    { id: 'projectScope', label: 'Project Phases Coverage (SAP Activate)', icon: '📈' },
    { id: 'workExperience', label: 'WRICEF Expectations', icon: '💼' },
    { id: 'jobSkills', label: 'Soft Skills & Other', icon: '🎯' },
    { id: 'processingQuestions', label: 'Screening Questions', icon: '❓' },
    { id: 'keywords', label: 'Keywords & Boolean Strings', icon: '🏷️' }
  ];

  return (
    <div className="w-72 bg-white border-r border-gray-200 flex flex-col h-screen">
      <div className="px-4 py-6 border-b border-gray-200">
        <div className="flex items-center mb-2">
          <span className="text-2xl mr-2">📄</span>
          <h2 className="text-lg font-semibold text-gray-800">JD Report</h2>
        </div>
        <p className="text-sm text-gray-600 ml-8">Microsoft AI Engineer</p>
      </div>
      
      <nav className="flex-1 py-2 overflow-y-auto">
        {sidebarItems.map(item => (
          <button
            key={item.id}
            className={`w-full flex items-center px-4 py-2.5 text-left transition-all duration-200 border-l-3 ${
              activeSection === item.id
                ? 'bg-blue-50 text-blue-700 border-l-blue-500 border-l-4'
                : 'text-gray-700 hover:bg-gray-50 border-l-transparent'
            }`}
            onClick={() => setActiveSection(item.id)}
          >
            <span className="text-base mr-3 w-5">{item.icon}</span>
            <span className="text-sm font-medium leading-tight">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;