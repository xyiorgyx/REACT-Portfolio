import React from 'react';
import github from './images/github.png'
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
export default function Footer() {
  return (
    <footer class="inset-x-0 bottom-0 w-full fixed bg-white rounded-lg shadow dark:bg-gray-900">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex flex justify-center">
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                <a href="https://github.com/xyiorgyx">
                    <img src={github} class="mr-4 hover:underline md:mr-6 max-h-10 hover:bg-gray-500"></img>
                </a>
                </li>
            </ul>
        </div>
        
        
    </div>
</footer>

    
  );
}

