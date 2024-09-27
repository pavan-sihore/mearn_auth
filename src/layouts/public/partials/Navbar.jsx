// Navbar.js
import { forwardRef } from 'react';

const Navbar = forwardRef((props, ref) => {

  return (
    <>
        {/* <!-- Main Header for Logo and Menu --> */}
        <nav ref={ref} className="bg-white shadow-md" >
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
                <div className="text-2xl font-bold">Logo</div>
                
                <ul className="flex space-x-6">
                    <li><a href="#" className="text-gray-700 hover:text-blue-500">Home</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-blue-500">About</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-blue-500">Services</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-blue-500">Contact</a></li>
                </ul>
            </div>
        </nav>
    </>
  )
});

Navbar.displayName = 'Navbar';

export default Navbar;