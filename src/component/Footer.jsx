import { Twitter, Linkedin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      id='contact'
      className='pt-16 pb-8 px-6 border-t border-neutral-600 font-secondary'
    >
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-16'>
          <div className='col-span-1'>
            <div className='flex items-center gap-2 mb-6'>
              <div className='w-9 h-9 bg-secondary-700 rounded-full flex items-center justify-center text-white font-bold'>
                EB
              </div>
              <span className='font-bold text-h3 text-primary-3000'>
                Education Bridge
              </span>
            </div>
            <p className='text-p3 text-neutral-3000 leading-relaxed max-w-[220px]'>
              Lagos, Nigeria.
              <br />
              Building the future of African education, one offline tablet at a
              time.
            </p>
          </div>

          <div>
            <h4 className='font-bold text-p2 text-primary-3000 mb-6'>
              Platform
            </h4>
            <ul className='space-y-4 text-p3 text-neutral-3000'>
              <li>
                <a href='#' className='hover:text-primary-800'>
                  How it Works
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-primary-800'>
                  Curriculum
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-primary-800'>
                  For Schools
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-bold text-p2 text-primary-3000 mb-6'>
              Company
            </h4>
            <ul className='space-y-4 text-p3 text-neutral-3000'>
              <li>
                <a href='#' className='hover:text-primary-800'>
                  About Us
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-primary-800'>
                  Careers
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-primary-800'>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-bold text-p2 text-primary-3000 mb-6'>
              Connect
            </h4>
            <div className='flex gap-4 mb-8'>
              <Twitter
                className='p-1.5 bg-neutral-400 rounded-md text-primary-800 cursor-pointer'
                size={28}
              />
              <Linkedin
                className='p-1.5 bg-primary-800 rounded-md text-white cursor-pointer'
                size={28}
              />
              <Linkedin
                className='p-1.5 bg-primary-800 rounded-md text-white cursor-pointer'
                size={28}
              />
            </div>

            <div className='relative max-w-[280px]'>
              <input
                type='email'
                placeholder='Email address'
                className='w-full px-4 py-3 border border-neutral-700 rounded-lg text-p3 focus:outline-none'
              />
              <button className='absolute right-2 top-1.5 bottom-1.5 px-3 bg-primary-900 text-white rounded-md hover:bg-primary-1000 transition-colors'>
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-between pt-8 border-t border-neutral-500 text-footer1 text-neutral-2000'>
          <p>© 2026 Education Bridge. All rights reserved.</p>
          <div className='flex gap-6 mt-4 md:mt-0'>
            <a href='#' className='hover:underline'>
              Privacy Policy
            </a>
            <a href='#' className='hover:underline'>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
