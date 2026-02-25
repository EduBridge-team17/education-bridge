import {
  MapPin,
  WifiOff,
  Smartphone,
} from 'lucide-react';

import grad from '../assets/images/grad.svg';
import offline from '../assets/images/offline.svg';
import Vector from '../assets/images/Vector.svg';
import partnership from '../assets/images/partnership.png';
import QualityEducation from '../assets/images/QualityEducation.png';
import map from '../assets/images/map.png';
const HowItWorks = () => {
  return (
    <>
        <section id='about' className='py-16 px-4 md:px-10 font-secondary'>
            <div className='max-w-6xl mx-auto text-center'>
                <h2 className='text-display3 font-bold font-primary text-primary-2000'>
                    How Education Bridge Works
                </h2>

                <p className='mt-3 text-p4 text-neutral-2000 max-w-xl mx-auto'>
                    We've simplified the learning curve so you can focus on what
                    matters: your education.
                </p>

                <div className='mt-12 grid gap-6 md:grid-cols-3 text-left'>
                    <div className='bg-neutral-300 rounded-xl p-6'>
                        <div className='w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center mb-4'>
                            <img src= {grad} alt='graduation cap icon' className='w-5 h-5 text-secondary-700' />
                        </div>

                        <h3 className='text-h4 font-bold font-primary text-primary-2000 mb-2'>
                            1. Select Class
                        </h3>

                        <p className='text-p3 text-neutral-2000 leading-relaxed'>
                            Choose your specific level from SS1 to SS3. Our content is
                            tailored to the Nigerian curriculum standards.
                        </p>
                    </div>

                    <div className='bg-neutral-300 rounded-xl p-6'>
                        <div className='w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center mb-4'>
                            <img src= {offline} alt='offline icon' className='w-5 h-5 text-secondary-700' />
                        </div>

                        <h3 className='text-h4 font-bold font-primary text-primary-2000 mb-2'>
                            2. Learn Offline
                        </h3>

                        <p className='text-p3 text-neutral-2000 leading-relaxed'>
                            Download lessons once and access them anytime. Our lightweight
                            text-based format saves your data.
                        </p>
                    </div>

                    <div className='bg-neutral-300 rounded-xl p-6'>
                        <div className='w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center mb-4'>
                            <img src= {Vector} alt='vector icon' className='w-5 h-5 text-secondary-700' />
                        </div>

                        <h3 className='text-h4 font-bold font-primary text-primary-2000 mb-2'>
                            3. Practice & Improve
                        </h3>

                        <p className='text-p3 text-neutral-2000 leading-relaxed'>
                            Take instant quizzes after each module to test your knowledge
                            and track your academic progress.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        
        <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center font-secondary">
            <div className="relative rounded-xl overflow-hidden shadow-lg h-[382px]">
                <img 
                    src={map}
                    alt="Map of Africa" 
                    className="w-full h-full object-cover"
                />
                <MapPin className="text-secondary-700 fill-secondary-700" size={20} />
                <div className="absolute bottom-8 left-8 text-white">
                    <div className="flex items-center gap-2 mb-2">
                        <MapPin className="text-secondary-700 fill-secondary-700" size={20} />
                        {/* <span className="font-bold text-h4 tracking-wider uppercase">Serving Nigeria</span> */}
                    </div>
                    {/* <p className="text-p3 max-w-[280px] opacity-90">
                        From Lagos to Maiduguri, we are connecting students to knowledge.
                    </p> */}
                </div>
            </div>

            <div className="space-y-10">
                <h2 className="text-h1 font-bold text-primary-3000 leading-tight">
                    Designed For Nigeria Realities
                </h2>

                <div className="space-y-8">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center">
                            <WifiOff className="text-secondary-700" size={24} />
                        </div>
                        <div>
                            <h3 className="text-h3 font-bold text-primary-3000 mb-1">Low Bandwidth Optimization</h3>
                            <p className="text-p3 text-neutral-3000 leading-relaxed">
                                Our platform works seamlessly on 2G and 3G networks, ensuring no student is left behind due to poor connectivity.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center">
                            <Smartphone className="text-secondary-700" size={24} />
                        </div>
                        <div>
                            <h3 className="text-h3 font-bold text-primary-3000 mb-1">Device Agnostic</h3>
                            <p className="text-p3 text-neutral-3000 leading-relaxed">
                                Whether on a desktop, a smartphone, or a basic feature phone, Education Bridge adapts to the device at hand.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    </>
  );
};

export default HowItWorks;
