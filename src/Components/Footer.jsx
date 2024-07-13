import React from 'react';
import { Link } from 'react-router-dom';

const Footer=()=> {
  return (
    <footer className='bg-gray-100 text-center text-gray-600'>
      <div className='flex justify-center lg:justify-between p-4 border-b border-gray-300'>
        <div className='hidden lg:block'>
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href='' className='mr-4 text-gray-600'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='' className='mr-4 text-gray-600'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='' className='mr-4 text-gray-600'>
            <i className='fab fa-google'></i>
          </a>
          <a href='' className='mr-4 text-gray-600'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='' className='mr-4 text-gray-600'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='' className='mr-4 text-gray-600'>
            <i className='fab fa-github'></i>
          </a>
        </div>
      </div>

      <div className='container mx-auto text-center md:text-left mt-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-3'>
          <div className='mb-4'>
            <h6 className='uppercase font-bold mb-4 flex items-center'>
            <i class="text-2xl fa-solid fa-truck-fast"></i>
              Urbanex
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
          </div>

          <div className='mb-4'>
            <h6 className='uppercase font-bold mb-4'>Products</h6>
            <p>
              <a href='#!' className='text-gray-600'>
                Men
              </a>
            </p>
            <p>
              <a href='#!' className='text-gray-600'>
                Women
              </a>
            </p>
            <p>
              <a href='#!' className='text-gray-600'>
                Kids
              </a>
            </p>
            <p>
              <a href='#!' className='text-gray-600'>
                Latest
              </a>
            </p>
          </div>

          <div className='mb-4'>
            <h6 className='uppercase font-bold mb-4'>Useful links</h6>
            <p>
              <a href='#!' className='text-gray-600'>
                Pricing
              </a>
            </p>
            <p>
              <a href='#!' className='text-gray-600'>
                Settings
              </a>
            </p>
            <p>
              <a href='#!' className='text-gray-600'>
                Orders
              </a>
            </p>
            <p>
              <a href='#!' className='text-gray-600'>
                Help
              </a>
            </p>
          </div>

          <div className='mb-0'>
            <h6 className='uppercase font-bold mb-4'>Contact</h6>
            <p className='flex items-center justify-center md:justify-start'>
              <i className='fas fa-home mr-2'></i>
              New York, NY 10012, US
            </p>
            <p className='flex items-center justify-center md:justify-start'>
              <i className='fas fa-envelope mr-3'></i>
              info@example.com
            </p>
            <p className='flex items-center justify-center md:justify-start'>
              <i className='fas fa-phone mr-3'></i> + 01 234 567 88
            </p>
            <p className='flex items-center justify-center md:justify-start'>
              <i className='fas fa-print mr-3'></i> + 01 234 567 89
            </p>
          </div>
        </div>
      </div>

      <div className='text-center p-4 bg-gray-200'>
        © 2024 Copyright:
        <a className='font-bold text-gray-600' href='#'>
          Urbanex.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;