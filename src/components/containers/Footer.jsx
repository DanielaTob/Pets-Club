import React from 'react'
import Logo from '../../assets/images/logo.png'
import { MdOutlineFacebook } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";


export default function Footer() {
  return (
    <footer className='p-4 bg-blue shadow md:px-6 md:py-8 dark:bg-sky-200'>
      <div className='sm:flex sm:items-center sm:justify-between'>
        <a className='flex items-center mb-4 sm:mb-0'>
          <img  
          className="h-20 w-20"
          src={Logo}
          alt="Logo"
          />
          <span className='self-center text-2xl font-semibold whitespace-nowrap'>Pets <span className='text-sky-400'>Club</span></span>
        </a>

        <ul className='flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400'>
          <li>
            <a>
              <RiWhatsappFill className='h-9 w-9 mr-4 md:mr-6 text-sky-500'/>
            </a>
          </li>

          <li>
            <a>
              <MdOutlineFacebook className='h-9 w-9 mr-4 md:mr-6 text-sky-500'/>
            </a>
          </li>

          <li>
            <a>
              <AiFillInstagram className='h-9 w-9 mr-4 md:mr-6 text-sky-500'/>
            </a>
          </li>
          
        </ul>
      </div>

      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-sky-500 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-600">© 2022 <a href="https://github.com/DanielaTob" class="hover:underline">Daniela Tobar</a>. All Rights Reserved.
    </span>
    </footer>
  )
}
