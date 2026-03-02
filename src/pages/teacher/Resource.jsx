import React, { useState } from 'react';
import TeacherLayout from './TeacherLayout';
import SelectionStep from './Selection';
import UploadStep from './UploadContent';


const Resource = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    level: 'SS 2',
    subject: 'Mathematics',
    title: '',
    content: ''
  });

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const renderScreen = () => {
    switch (currentStep) {
      case 1:
        return (
          <SelectionStep 
            data={formData} 
            setFormData={setFormData} 
            onNext={nextStep} 
          />
        );
      case 2:
        return (
          <UploadStep 
            data={formData} 
            setFormData={setFormData} 
            onBack={prevStep} 
            onNext={nextStep} 
          />
        );
      case 3:
        return (
          <div className="p-10 text-center">
            <h2 className="text-h2 font-bold text-primary-800">Step 3: Review Screen</h2>
            <button onClick={prevStep} className="mt-4 text-neutral-1000 underline">Back</button>
          </div>
        );
      default:
        return <SelectionStep onNext={nextStep} />;
    }
  };

  return (
    <TeacherLayout activeTab="upload">
      {renderScreen()}
    </TeacherLayout>
  );
};

export default Resource;