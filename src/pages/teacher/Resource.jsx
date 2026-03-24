import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import TeacherLayout from './TeacherLayout';
import SelectionStep from './Selection';
import UploadStep from './UploadContent';

const Resource = () => {
  const location = useLocation();
  const { levelId, levelName, subject: preSubject } = location.state || {};

  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    level: levelId || '',
    levelName: levelName || '',
    subject: preSubject || '',
    title: '',
    content: '',
  });

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const renderScreen = () => {
    switch (currentStep) {
      case 1:
        return (
          <SelectionStep
            selectedLevel={formData.level}
            setSelectedLevel={(val) =>
              setFormData((p) => ({ ...p, level: val }))
            }
            selectedSubject={formData.subject}
            setSelectedSubject={(val) =>
              setFormData((p) => ({ ...p, subject: val }))
            }
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
          <div className='p-10 text-center'>
            <h2 className='text-h2 font-bold text-primary-800'>
              Step 3: Review Screen
            </h2>
            <button
              onClick={prevStep}
              className='mt-4 text-neutral-1000 underline'
            >
              Back
            </button>
          </div>
        );
      default:
        return (
          <SelectionStep
            selectedLevel={formData.level}
            setSelectedLevel={(val) =>
              setFormData((p) => ({ ...p, level: val }))
            }
            selectedSubject={formData.subject}
            setSelectedSubject={(val) =>
              setFormData((p) => ({ ...p, subject: val }))
            }
            onNext={nextStep}
          />
        );
    }
  };

  return <TeacherLayout activeTab='upload'>{renderScreen()}</TeacherLayout>;
};

export default Resource;
