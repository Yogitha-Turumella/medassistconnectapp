import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Users, Calendar, Search, Shield, Clock } from 'lucide-react';

export const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Stethoscope className="h-8 w-8 text-sky-500" />,
      title: 'Expert Doctors',
      description: 'Connect with experienced young doctors and retired specialists',
    },
    {
      icon: <Search className="h-8 w-8 text-emerald-500" />,
      title: 'Symptom Checker',
      description: 'AI-powered symptom analysis to help identify potential conditions',
    },
    {
      icon: <Calendar className="h-8 w-8 text-purple-500" />,
      title: 'Easy Booking',
      description: 'Schedule appointments with your preferred doctors instantly',
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      title: 'Secure & Private',
      description: 'Your health data is protected with enterprise-grade security',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Health,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-emerald-500">
                Our Priority
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect with experienced doctors, check your symptoms with AI-powered analysis, 
              and book appointments seamlessly. MedAssist makes healthcare accessible and convenient.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/symptom-checker"
                className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Check Symptoms
              </Link>
              <Link
                to="/doctors"
                className="bg-white hover:bg-gray-50 text-sky-600 border-2 border-sky-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Find a Doctor
              </Link>
              <Link
                to="/appointments"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MedAssist?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine technology with healthcare expertise to provide you with the best medical assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-emerald-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="flex items-center justify-center mb-4">
                <Users className="h-12 w-12" />
              </div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sky-100">Expert Doctors</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Calendar className="h-12 w-12" />
              </div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-sky-100">Appointments Booked</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-12 w-12" />
              </div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-sky-100">Available Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of patients who trust MedAssist for their healthcare needs
          </p>
          <Link
            to="/doctors"
            className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};