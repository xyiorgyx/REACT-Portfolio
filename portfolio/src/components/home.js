import React from 'react';
import me from './images/me.png'
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
export default function Home() {
  return (
    <div class="h-screen w-full bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
        
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class="w-64 min-h-64 mb-3 rounded-full shadow-lg" src={me}alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Yiorgos Bosnakis</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Web Developer</span>
        <p className = 'text-white'>Born and raised in Long Island, New York.</p>
        <p className = 'text-white'></p>
    </div>
</div>
    
  );
}