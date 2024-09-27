
export default function Home() {
  return (
    <>

    {/* <!-- Image Slider --> */}
    <div className="relative max-w-6xl mx-auto mt-4">
        <div className="overflow-hidden rounded-lg">
            <img src="https://via.placeholder.com/800x400" alt="Slide 1" className="w-full transition-opacity duration-500 ease-in-out" />
            <img src="https://via.placeholder.com/800x400/ff7f7f" alt="Slide 2" className="w-full transition-opacity duration-500 ease-in-out hidden" />
            <img src="https://via.placeholder.com/800x400/7f7fff" alt="Slide 3" className="w-full transition-opacity duration-500 ease-in-out hidden" />
        </div>
    </div>

    {/* <!-- About Us Section --> */}
    <section className="max-w-6xl mx-auto my-10 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-700">
            We are a company dedicated to providing the best services to our clients. Our team is passionate and committed to excellence.
        </p>
    </section>

  {/* <!-- Column Section --> */}
  <section className="max-w-6xl mx-auto my-10 p-4 bg-white rounded-lg shadow-md">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-blue-500 p-4">Column 1</div>
        <div className="bg-blue-500 p-4">Column 2</div>
        <div className="bg-blue-500 p-4">Column 3</div>
        <div className="bg-blue-500 p-4">Column 4</div>
        <div className="bg-blue-500 p-4">Column 5</div>
        <div className="bg-blue-500 p-4">Column 6</div>
        <div className="bg-blue-500 p-4">Column 7</div>
        <div className="bg-blue-500 p-4">Column 8</div>
        <div className="bg-blue-500 p-4">Column 9</div>
        <div className="bg-blue-500 p-4">Column 10</div>
        <div className="bg-blue-500 p-4">Column 11</div>
        <div className="bg-blue-500 p-4">Column 12</div>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4">
        <div className="bg-blue-500 p-4">Column 1</div>
      </div>
  </section>

  <section className="max-w-6xl mx-auto my-10 p-4 bg-white rounded-lg shadow-md">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-12 gap-2">
        <div className="col-span-1 bg-blue-500 p-4 text-center hover:bg-blue-600 transition">1</div>
        <div className="col-span-1 bg-blue-500 p-4 text-center hover:bg-blue-600 transition">2</div>
        <div className="col-span-1 bg-blue-500 p-4 text-center hover:bg-blue-600 transition">3</div>
        <div className="col-span-1 bg-blue-500 p-4 text-center hover:bg-blue-600 transition">4</div>
        <div className="col-span-1 bg-blue-500 p-4 text-center hover:bg-blue-600 transition">5</div>
        <div className="col-span-1 bg-blue-500 p-4 text-center hover:bg-blue-600 transition">6</div>
        <div className="col-span-1 bg-blue-500 p-4 text-center hover:bg-blue-600 transition">7</div>
        <div className="col-span-1 bg-blue-500 p-4 text-center hover:bg-blue-600 transition">8</div>
        <div className="col-span-1 bg-blue-500 p-4 text-center hover:bg-blue-600 transition">9</div>
        <div className="col-span-1 bg-blue-500 p-4 text-center hover:bg-blue-600 transition">10</div>
        <div className="col-span-1 bg-blue-500 p-4 text-center hover:bg-blue-600 transition">11</div>
        <div className="col-span-1 bg-blue-500 p-4 text-center hover:bg-blue-600 transition">12</div>
    </div>
</section>


    {/* <!-- Services Section --> */}
    <section className="max-w-6xl mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-4">
        <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Service 1</h3>
            <p className="text-gray-600">Description of service 1.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Service 2</h3>
            <p className="text-gray-600">Description of service 2.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Service 3</h3>
            <p className="text-gray-600">Description of service 3.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Service 4</h3>
            <p className="text-gray-600">Description of service 4.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Service 5</h3>
            <p className="text-gray-600">Description of service 5.</p>
        </div>
    </section>

    {/* <!-- Footer Section --> */}
<footer className="bg-gray-800 text-white py-8">
    <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* <!-- Important Links --> */}
            <div>
                <h3 className="font-semibold text-lg mb-2">Important Links</h3>
                <ul className="space-y-1">
                    <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
                </ul>
            </div>

            {/* <!-- Contact Us --> */}
            <div>
                <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
                <p className="text-gray-400 mb-2">Email: <a href="mailto:info@example.com" className="hover:text-white">info@example.com</a></p>
                <p className="text-gray-400 mb-2">Phone: <a href="tel:+123456789" className="hover:text-white">+123 456 789</a></p>
                <p className="text-gray-400">Address: 123 Example St, City, Country</p>
            </div>

            {/* <!-- Additional Links --> */}
            <div>
                <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
                <ul className="space-y-1">
                    <li><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">LinkedIn</a></li>
                </ul>
            </div>

            {/* <!-- Newsletter Signup --> */}
            <div>
                <h3 className="font-semibold text-lg mb-2">Newsletter Signup</h3>
                <input type="email" placeholder="Your email" className="p-2 rounded bg-gray-700 text-gray-200 border border-gray-600 mb-2 w-full" />
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded">Subscribe</button>
            </div>
        </div>
        
        <div className="text-center mt-6">
            <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
    </div>
</footer>
    
    </>
  )
}
