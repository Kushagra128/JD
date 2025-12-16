import React from 'react';

const Header = ({ jobData }) => {
  const CircularProgress = ({ value }) => (
    <div className="relative w-24 h-24">
      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="6"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#10b981"
          strokeWidth="6"
          strokeDasharray={`${2 * Math.PI * 40}`}
          strokeDashoffset={`${2 * Math.PI * 40 * (1 - value / 100)}`}
          className="transition-all duration-500"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-bold text-green-600">{value}%</span>
      </div>
    </div>
  );

  return (
    <div className="bg-white border-b border-gray-200 px-8 py-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">{jobData.jobTitle}</h1>
          <p className="text-gray-600">{jobData.company} • {jobData.location}</p>
        </div>
        
        <div className="text-center">
          <CircularProgress value={jobData.overallScore} />
          <p className="text-sm text-gray-600 mt-2">Overall JD Score</p>
        </div>
      </div>
    </div>
  );
};

export default Header;