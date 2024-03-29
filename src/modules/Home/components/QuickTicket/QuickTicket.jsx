import React from 'react'

export default function QuickTicket() {
  return (
    <div className='sm:flex hidden  justify-center relative h-[5rem]'>
      {/* <button
        id='states-button'
        data-dropdown-toggle='dropdown-states'
        className='shadow flex w-[20rem] px-2 py-6 flex-shrink-0 z-10 items-center  text-sm font-medium text-center text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600'
        type='button'
      >
        <div className='flex flex-end w-full items-center justify-between'>
          Phim
          <svg
            className='w-2.5 h-2.5 ml-2.5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 10 6'
          >
            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='m1 1 4 4 4-4' />
          </svg>
        </div>
      </button> */}
      <div className='flex absolute -top-[40px] z-50 '>
        <div>
          <label htmlFor='states' className='sr-only'>
            Choose a state
          </label>
          <select
            id='states'
            className='bg-white border shadow w-[20rem] px-2 py-6 flex-shrink-0  border-gray-300 text-gray-900 text-sm rounded-l-md border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option selected>Choose a state</option>
            <option value='CA'>California</option>
            <option value='TX'>Texas</option>
            <option value='WH'>Washinghton</option>
            <option value='FL'>Florida</option>
            <option value='VG'>Virginia</option>
            <option value='GE'>Georgia</option>
            <option value='MI'>Michigan</option>
          </select>
        </div>
        <div>
          <label htmlFor='states' className='sr-only'>
            Choose a state
          </label>
          <select
            id='states'
            className='bg-white border shadow w-[20rem] px-2 py-6 flex-shrink-0  border-gray-300 text-gray-900 text-sm  border-l-gray-100 '
          >
            <option selected>Choose a state</option>
            <option value='CA'>California</option>
            <option value='TX'>Texas</option>
            <option value='WH'>Washinghton</option>
            <option value='FL'>Florida</option>
            <option value='VG'>Virginia</option>
            <option value='GE'>Georgia</option>
            <option value='MI'>Michigan</option>
          </select>
        </div>
        <div>
          <label htmlFor='states' className='sr-only'>
            Choose a state
          </label>
          <select
            id='states'
            className='bg-white border shadow w-[20rem] px-2 py-6 flex-shrink-0  border-gray-300 text-gray-900 text-sm rounded-r-md border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option selected>Choose a state</option>
            <option value='CA'>California</option>
            <option value='TX'>Texas</option>
            <option value='WH'>Washinghton</option>
            <option value='FL'>Florida</option>
            <option value='VG'>Virginia</option>
            <option value='GE'>Georgia</option>
            <option value='MI'>Michigan</option>
          </select>
        </div>
      </div>
      {/* <div
        id='dropdown-states'
        className='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'
      >
        <ul className='py-2 text-sm text-gray-700 dark:text-gray-200' aria-labelledby='states-button'>
          <li>
            <button
              type='button'
              className='inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'
            >
              <div className='inline-flex items-center'>
                <svg
                  aria-hidden='true'
                  className='h-3.5 w-3.5 rounded-full mr-2'
                  xmlns='http://www.w3.org/2000/svg'
                  id='flag-icon-css-us'
                  viewBox='0 0 512 512'
                >
                  <g fillRule='evenodd'>
                    <g strokeWidth='1pt'>
                      <path
                        fill='#bd3d44'
                        d='M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z'
                        transform='scale(3.9385)'
                      />
                      <path
                        fill='#fff'
                        d='M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z'
                        transform='scale(3.9385)'
                      />
                    </g>
                    <path fill='#192f5d' d='M0 0h98.8v70H0z' transform='scale(3.9385)' />
                    <path
                      fill='#fff'
                      d='M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z'
                      transform='scale(3.9385)'
                    />
                  </g>
                </svg>
                United States
              </div>
            </button>
          </li>
          <li>
            <button
              type='button'
              className='inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'
            >
              <div className='inline-flex items-center'>
                <svg
                  aria-hidden='true'
                  className='h-3.5 w-3.5 rounded-full mr-2'
                  xmlns='http://www.w3.org/2000/svg'
                  id='flag-icon-css-de'
                  viewBox='0 0 512 512'
                >
                  <path fill='#ffce00' d='M0 341.3h512V512H0z' />
                  <path d='M0 0h512v170.7H0z' />
                  <path fill='#d00' d='M0 170.7h512v170.6H0z' />
                </svg>
                Germany
              </div>
            </button>
          </li>
          <li>
            <button
              type='button'
              className='inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'
            >
              <div className='inline-flex items-center'>
                <svg
                  aria-hidden='true'
                  className='h-3.5 w-3.5 rounded-full mr-2'
                  xmlns='http://www.w3.org/2000/svg'
                  id='flag-icon-css-it'
                  viewBox='0 0 512 512'
                >
                  <g fillRule='evenodd' strokeWidth='1pt'>
                    <path fill='#fff' d='M0 0h512v512H0z' />
                    <path fill='#009246' d='M0 0h170.7v512H0z' />
                    <path fill='#ce2b37' d='M341.3 0H512v512H341.3z' />
                  </g>
                </svg>
                Italy
              </div>
            </button>
          </li>
          <li>
            <button
              type='button'
              className='inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'
            >
              <div className='inline-flex items-center'>
                <svg
                  aria-hidden='true'
                  className='h-3.5 w-3.5 rounded-full mr-2'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  id='flag-icon-css-cn'
                  viewBox='0 0 512 512'
                >
                  <defs>
                    <path id='a' fill='#ffde00' d='M1-.3L-.7.8 0-1 .6.8-1-.3z' />
                  </defs>
                  <path fill='#de2910' d='M0 0h512v512H0z' />
                  <use width={30} height={20} transform='matrix(76.8 0 0 76.8 128 128)' xlinkHref='#a' />
                  <use width={30} height={20} transform='rotate(-121 142.6 -47) scale(25.5827)' xlinkHref='#a' />
                  <use width={30} height={20} transform='rotate(-98.1 198 -82) scale(25.6)' xlinkHref='#a' />
                  <use width={30} height={20} transform='rotate(-74 272.4 -114) scale(25.6137)' xlinkHref='#a' />
                  <use width={30} height={20} transform='matrix(16 -19.968 19.968 16 256 230.4)' xlinkHref='#a' />
                </svg>
                China
              </div>
            </button>
          </li>
        </ul>
      </div> */}
    </div>
  )
}
