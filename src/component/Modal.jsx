import React from 'react';
import { Check, X, AlertCircle } from 'lucide-react';
import Button from './Button';

const SuccessModal = ({
  isOpen,
  onClose,
  title,
  message,
  buttonText,
  onConfirm,
  type = 'success', // "success" | "error"
}) => {
  if (!isOpen) return null;

  const isError = type === 'error';

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm'>
      <div className='bg-neutral-50 rounded-xl p-8 max-w-[400px] w-full text-center shadow-2xl relative font-secondary'>
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-neutral-900 hover:opacity-70'
        >
          <X size={18} />
        </button>

        <div className='mb-6 flex justify-center'>
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center ${
              isError ? 'bg-red-100' : 'bg-success-50'
            }`}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
                isError ? 'bg-red-500' : 'bg-success-400'
              }`}
            >
              {isError ? (
                <AlertCircle size={22} strokeWidth={3} />
              ) : (
                <Check size={22} strokeWidth={3} />
              )}
            </div>
          </div>
        </div>

        <h2 className='text-h3 font-bold text-neutral-3000 mb-2'>{title}</h2>

        <p className='text-p3 text-neutral-1000 mb-6'>{message}</p>

        <Button
          label={buttonText}
          onClick={onConfirm}
          className={`w-full py-3 text-white rounded-lg font-bold ${
            isError ? 'bg-red-500' : 'bg-primary-800'
          }`}
        />
      </div>
    </div>
  );
};

export default SuccessModal;
