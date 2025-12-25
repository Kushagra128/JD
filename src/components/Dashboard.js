import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import JDOverview from './sections/JDOverview';
import JDRequirements from './sections/JDRequirements';
import JobRequirements from './sections/JobRequirements';
import TechnicalSkills from './sections/TechnicalSkills';
import BusinessDepartment from './sections/BusinessDepartment';
import IntegrationRequirements from './sections/IntegrationRequirements';
import ProjectScope from './sections/ProjectScope';
import WorkExperience from './sections/WorkExperience';
import JobSkills from './sections/JobSkills';
import ProcessingQuestions from './sections/ProcessingQuestions';
import KeywordBridge from './sections/KeywordBridge';
import jobDataJson from '../data/jobData.json';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('jdOverview');
  const [jobData, setJobData] = useState(null);

  useEffect(() => {
    setJobData(jobDataJson);
  }, []);

  if (!jobData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'jdOverview':
        return <JDOverview data={jobData.sections.jdOverview} />;
      case 'jobRequirements':
        return <JDRequirements data={jobData.sections.jdOverview} />;
      case 'technicalSkills':
        return <TechnicalSkills data={jobData.sections.technicalSkills} />;
      case 'businessRequirements':
        return <BusinessDepartment data={jobData.sections.businessRequirements} />;
      case 'integrationRequirements':
        return <IntegrationRequirements data={jobData.sections.integrationRequirements} />;
      case 'projectScope':
        return <ProjectScope data={jobData.sections.projectScope} />;
      case 'workExperience':
        return <WorkExperience data={jobData.sections.workExperience} />;
      case 'jobSkills':
        return <JobSkills data={jobData.sections.jobSkills} />;
      case 'processingQuestions':
        return <ProcessingQuestions data={jobData.sections.processingQuestions} />;
      case 'keywords':
        return <KeywordBridge data={jobData.sections.keywords} />;
      default:
        return <JDOverview data={jobData.sections.jdOverview} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      
      <div className="flex-1 flex flex-col">
        {activeSection === 'jdOverview' && <Header jobData={jobData} />}
        
        <main className="flex-1 p-6">
          <div className="bg-white rounded shadow-sm p-6">
            {renderActiveSection()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;