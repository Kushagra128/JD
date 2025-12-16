import React from 'react';

const ProcessingQuestions = ({ data }) => {
  const handleDownloadPDF = () => {
    // Create a simple PDF content
    const pdfContent = `
SCREENING QUESTIONS - SAP TM FUNCTIONAL CONSULTANT

1. Walk us through an end-to-end TM implementation you led on S/4HANA. What were the toughest fit-gaps?

2. How did you design tendering & carrier selection (BRF+, strategies)?

3. Show a WRICEF you owned that impacted FO execution or settlement.

---
Generated from Structured JD Report
    `;

    // Create a blob and download
    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'screening-questions-sap-tm.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
        <span className="mr-2">❓</span>
        {data.title}
      </h2>
      
      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <div className="space-y-4">
          {data.questions.map((question, index) => (
            <div key={index} className="flex space-x-3">
              <span className="flex-shrink-0 font-semibold text-gray-700 min-w-[20px]">
                {index + 1}.
              </span>
              <p className="text-sm text-gray-700 leading-relaxed">{question}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleDownloadPDF}
        className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm font-medium transition-colors duration-200 border-2 border-blue-500 hover:border-blue-600"
      >
        <span>Full Screening Questions Pack — Download PDF</span>
        <svg 
          className="ml-2 w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
          />
        </svg>
      </button>
    </div>
  );
};

export default ProcessingQuestions;