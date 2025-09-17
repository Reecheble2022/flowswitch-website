import React from 'react';
import "./index.css";
import Header from './components/header';
import Footer from './components/footer';
import CompanyLogo from './images/flowswitch-icon.png';
import CompanyFullLogo from './images/flowswitch-logo.png';
import CompanyFullLogoBright from './images/flowswitch-logo-bright.png';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-lime-600 to-green-700 text-white py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto text-center">
            <img src={CompanyFullLogoBright} alt="FlowSwitch Logo" className="mx-auto h-20 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to FlowSwitch</h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              FlowSwitch is a powerful platform connecting merchants and agents for seamless business operations. Whether you're a company looking to manage your sales or an agent handling floats and verifications, FlowSwitch streamlines your workflow with secure, efficient tools.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="https://merchant.flowswitchapi.com" className="bg-white text-lime-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
                Login as Merchant Admin
              </a>
              <a href="https://agents.flowswitchapi.com" className="bg-white text-lime-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
                Login as Agent
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose FlowSwitch?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <img src={CompanyLogo} alt="Secure" className="mx-auto h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
                <p className="text-gray-600">Advanced security measures to protect your data and transactions.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <img src={CompanyLogo} alt="Efficient" className="mx-auto h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Efficient Workflows</h3>
                <p className="text-gray-600">Tools for merchant registration, agent management, and real-time verifications.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <img src={CompanyLogo} alt="Scalable" className="mx-auto h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
                <p className="text-gray-600">Grow your business with flexible features for companies and agents alike.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">About FlowSwitch</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              FlowSwitch is designed to bridge the gap between merchants and agents, providing a unified platform for registration, verification, and management. Our system ensures smooth operations, from sales agent assignments to float management, all in one place.
            </p>
            <img src={CompanyFullLogo} alt="About FlowSwitch" className="mx-auto h-24" />
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-lime-600 text-white py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8">Join FlowSwitch today and optimize your business processes.</p>
            <div className="flex justify-center space-x-4">
              <a href="https://merchant.flowswitchapi.com" className="bg-white text-lime-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
                Merchant Portal
              </a>
              <a href="https://agents.flowswitchapi.com" className="bg-white text-lime-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
                Agent Portal
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;