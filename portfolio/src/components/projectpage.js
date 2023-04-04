import React from 'react';
import reciplease from './images/Reciplease.png'
import noteTaker from './images/noteTaker.png'
import employeeTracker from './images/employee-tracker.png'
import dailyPlanner from './images/daily-planner.png'

export default function Projectcards() {

    return (
        <>
            <div className=" flex flex-wrap w-full bg-transparent  mt-10">
                <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-20 my-5">
                    <a>
                        <img className="rounded-t-lg" src={reciplease} alt="" />
                    </a>
                    <div className="p-5">
                        <a>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Reciplease</h5>
                        </a>
                        <p className="max-h-40 mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-auto">Don't know what to make for dinner? Reciplease is here to help people around the world find recipes to all their favorite dishes. These recipes include Main dishes, appetizers, drinks, and even delicious desserts.</p>
                        <a href="https://github.com/xyiorgyx/Reciplease" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Git Hub Link
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>

                </div>
                <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-18 my-5">
                    <a>
                        <img className="rounded-t-lg" src={noteTaker} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Note Taker</h5>
                        </a>
                        <p className="max-h-40 mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-auto">The note Taker is a simple application that allows you to create, edit, and delete your personal notes. The data is then stored into a JSON data base file which can be easily retrieved once the appplication is opened.</p>
                        <a href="https://github.com/xyiorgyx/Note-Taker" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Git Hub Link
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>

                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-20 my-5">
                    <a>
                        <img className="rounded-t-lg" src={employeeTracker} alt="" />
                    </a>
                    <div className="p-5">
                        <a>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Employee Tracker</h5>
                        </a>
                        <p className="max-h-40 mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-auto">Employee tracker allows a user to add data about their employees, including: Salary, the deparment they belong too, their manager and more. With this, employers can easily save, delete, add, and change this information for their company.</p>
                        <a href="https://github.com/xyiorgyx/Employee-Tracker" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Git Hub Link
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>

                </div>

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-18 my-5">
                    <a>
                        <img className="rounded-t-lg" src={dailyPlanner} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Daily Planner</h5>
                        </a>
                        <p className="max-h-40 mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-auto">The work day scheduler is a simple daily planner. The date is updated everytime the page is opened, showing the current date ontop of the page. The planner runs from 9am - 8pm. </p>
                        <a href="https://github.com/xyiorgyx/Daily-Planner" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Git Hub Link
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                    
                </div>
            </div>
        </>
    )
}



