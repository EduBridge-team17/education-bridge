import React from 'react';
import {
  ArrowRight,
  BookOpen,
  WifiOff,
  Smartphone,
  TrendingUp,
} from 'lucide-react';

import Button from './Button';
import student from '../assets/images/student.jpg';
import { Link, NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='bg-neutral-100 px-4 md:px-10 py-16'>
      <div className='max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12'>
        <div className='flex-1 text-center md:text-left'>
          <div className='inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-1 rounded-full text-xs font-medium mb-6'>
            <span className='w-2 h-2 bg-primary-600 rounded-full'></span>
            Optimized for Offline Learning
          </div>

          <h1 className='text-2xl md:text-4xl font-bold leading-tight text-neutral-4000'>
            Bridging Rural <br />
            <span className='text-primary-700'>Education Gaps</span>
          </h1>

          <p className='mt-6 text-p4 text-neutral-2000 max-w-md mx-auto md:mx-0'>
            Access world-class notes and quizzes for SS1-SS3. No internet? No
            problem. Learn via SMS and offline-first technology designed for
            Nigerian students.
          </p>

          <div className='mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
            <Button
              variant='primary'
              size='lg'
              className='flex items-center justify-center gap-2 rounded-lg text-p3'
            >
              <NavLink to='/signup'>Get Started</NavLink>
              <ArrowRight size={18} />
            </Button>
          </div>

          <div className='mt-8 flex flex-col sm:flex-row gap-6 text-sm md:text-sm text-neutral-3000 justify-center md:justify-start'>
            <div className='flex items-center gap-2'>
              <BookOpen size={15} className='text-primary-700' />
              SS1-SS3 Syllabus
            </div>

            <div className='flex items-center gap-2'>
              <WifiOff size={15} className='text-primary-700' />
              Works Offline
            </div>

            <div className='flex items-center gap-2'>
              <Smartphone size={15} className='text-primary-700' />
              Mobile Friendly
            </div>
          </div>
        </div>

        <div className='flex-1 relative'>
          <img
            src={student}
            alt='Student studying'
            className='w-full rounded-3xl shadow-xl'
          />

          <div className='absolute bottom-6 right-6 bg-white rounded-xl shadow-md px-4 py-3 flex items-center gap-3'>
            <div className='bg-primary-50 p-2 rounded-full'>
              <TrendingUp size={18} className='text-primary-700' />
            </div>

            <div>
              <p className='text-xs text-neutral-2000'>STUDENT GROWTH</p>
              <p className='font-bold text-sm text-black'>+45% Grades</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
