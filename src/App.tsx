import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Award,
  Users,
  Heart,
  Shield,
  Clock,
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <Heart className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Dr. Luis Diaz</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group">
                Testimonials
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>
            
            <div className="hidden md:flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Book Appointment
              </button>
            </div>
            
            <button 
              className="md:hidden hover:bg-gray-100 p-2 rounded-lg transition-colors duration-300"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-4 pt-4">
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2">Home</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2">About</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2">Services</a>
                <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2">Testimonials</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2">Contact</a>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 w-full hover:shadow-lg transform hover:scale-105">
                  Book Appointment
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Exceptional Healthcare,
                  <span className="text-blue-600"> Personalized Care</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Board-certified physician dedicated to providing comprehensive medical care with a focus on preventive medicine and patient wellness.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 group">
                  <Calendar className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Schedule Consultation</span>
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 group hover:shadow-xl transform hover:scale-105">
                  <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Call Now</span>
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-in">
                <div className="text-center group cursor-pointer">
                  <div className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">15+</div>
                  <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Years Experience</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">5000+</div>
                  <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Patients Served</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">98%</div>
                  <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Satisfaction Rate</div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="bg-white p-8 rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:-translate-y-2">
                <img 
                  src="/LuisDiazprofile.png" 
                  alt="Dr. Luis Diaz" 
                  className="w-full h-160 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-2xl group-hover:rotate-12 transition-transform duration-300">
                  <Award className="h-8 w-8" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-4 rounded-2xl group-hover:-rotate-12 transition-transform duration-300">
                  <Shield className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
                <iframe
              className="w-full h-96 object-cover rounded-3xl shadow-xl"
              src="https://www.youtube.com/embed/9VJ02qgwWLQ"
              title="Alex Adabashi"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  About Dr. Luis Diaz
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  With over 15 years of experience in Board-Certified in Neurology and Psychiatry, Dr. Luis Diaz is committed to providing exceptional healthcare that puts patients first. His approach combines cutting-edge medical knowledge with compassionate care.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Dr. Diaz believes in building lasting relationships with his patients, taking the time to understand their unique health needs and concerns.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">Education</h3>
                  <p className="text-gray-600">Harvard Medical School</p>
                  <p className="text-gray-600">Johns Hopkins Residency</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">Specializations</h3>
                  <p className="text-gray-600">Internal Medicine</p>
                  <p className="text-gray-600">Preventive Care</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2 group hover:shadow-xl transform hover:scale-105">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
    
      {/* Doctor Background Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Dr. Luis L. Diaz - Neurology
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-xl font-semibold text-blue-600">
                Board-Certified in Neurology and Psychiatry
              </p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                <div className="lg:col-span-2 space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      Dr. Diaz graduated from Medical school at the age of 22. He completed his Internal Medicine internship and Neurology residency at the State University of New York. There, he also received training on MRI of the brain and spinal cord interpretation which qualified him to be a member of the American Society of Neuroimaging.
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed">
                      During his residency, he earned the position as the youngest Chief Resident of Neurology at the State University of New York hospital consortium.
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed">
                      Dr. Diaz completed a fellowship in the treatment of brain tumors at the University of California in San Francisco and has been practicing medicine since 1990 in Las Vegas. He continues to actively participate in medical conferences to continue keeping abreast of the latest research in neurological disorders and treatments.
                    </p>
                  </div>
                </div>
                
                <div className="lg:col-span-1">
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 rounded-2xl">
                    <h3 className="text-xl font-bold mb-6">Key Achievements</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-blue-200 mt-1 flex-shrink-0" />
                        <span className="text-sm">Graduated medical school at age 22</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-blue-200 mt-1 flex-shrink-0" />
                        <span className="text-sm">Youngest Chief Resident of Neurology at SUNY</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-blue-200 mt-1 flex-shrink-0" />
                        <span className="text-sm">Fellowship in brain tumor treatment at UCSF</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-blue-200 mt-1 flex-shrink-0" />
                        <span className="text-sm">Member of American Society of Neuroimaging</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-blue-200 mt-1 flex-shrink-0" />
                        <span className="text-sm">35+ years of practice since 1990</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Education</h4>
                  <p className="text-gray-600 text-sm">Medical Degree & Neurology Residency at SUNY</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Specialization</h4>
                  <p className="text-gray-600 text-sm">Brain Tumor Treatment Fellowship at UCSF</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Experience</h4>
                  <p className="text-gray-600 text-sm">35+ Years of Medical Practice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Medical Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From routine checkups to specialized treatments, we offer a full range of medical services tailored to your health needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="h-12 w-12" />,
                title: "Preventive Care",
                description: "Comprehensive health screenings and preventive measures to keep you healthy."
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: "Primary Care",
                description: "Your trusted partner for ongoing health management and medical needs."
              },
              {
                icon: <Shield className="h-12 w-12" />,
                title: "Chronic Disease Management",
                description: "Expert care for diabetes, hypertension, and other chronic conditions."
              },
              {
                icon: <Clock className="h-12 w-12" />,
                title: "Executive Physicals",
                description: "Comprehensive health assessments for busy professionals."
              },
              {
                icon: <Award className="h-12 w-12" />,
                title: "Wellness Coaching",
                description: "Personalized guidance for lifestyle changes and health optimization."
              },
              {
                icon: <CheckCircle className="h-12 w-12" />,
                title: "Annual Checkups",
                description: "Thorough annual examinations to monitor your overall health."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Therapies & Treatments Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Therapies & Treatments
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive neurological care with advanced treatments and personalized solutions
            </p>
          </div>
          
          {/* Symptoms Section */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-12 mb-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                If you suffer from:
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {[
                  "Headaches and Tremors",
                  "Numbness & Tingling",
                  "Poor Balance",
                  "Memory Loss",
                  "Weakness, Fatigue and Dizziness",
                  "Unsteady Gait"
                ].map((symptom, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
                    <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">{symptom}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  These symptoms can frighten you and decrease your quality of life; fortunately, you do not have to live with this poor quality of life in fear any longer. Dr. Diaz is here to assist in providing you with solutions.
                </p>
              </div>
            </div>
          </div>
          
          {/* Practice Overview */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 mb-16 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Comprehensive Neurological Health Care
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                The practice of Dr. Luis Diaz offers Comprehensive Neurological Health Care. Consistently voted Las Vegas top doctor since 2006, Dr. Diaz and his caring and experienced staff are dedicated to your health and wellbeing.
              </p>
              <div className="bg-blue-600 text-white p-6 rounded-2xl inline-block">
                <p className="text-xl font-semibold">
                  Since 1990, Dr. Diaz has treated neurological disorders
                </p>
              </div>
            </div>
          </div>
          
          {/* Neurological Disorders */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Neurological Disorders We Treat
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Multiple Sclerosis",
                "Movement disorders",
                "Chronic inflammatory demyelinating polyneuropathy",
                "Neuropathy",
                "Sleep Disorders",
                "Spasmodic Torticollis",
                "Alzheimer's Disease",
                "Parkinson's",
                "Dystonia",
                "Stiff Person Syndrome",
                "Myasthenia Gravis",
                "Strokes",
                "Myopathy",
                "Frontal Temporal Degeneration",
                "Visual disturbances",
                "Fatigue"
              ].map((disorder, index) => (
                <div key={index} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{disorder}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Other Autoimmune Disorders:</h4>
              <div className="grid md:grid-cols-3 gap-4">
                {["NMO", "Lou Gehrig's disease", "Amyloidosis"].map((disorder, index) => (
                  <div key={index} className="flex items-center space-x-2 group cursor-pointer">
                    <div className="w-2 h-2 bg-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{disorder}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Post-Covid Section */}
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-3xl p-8 md:p-12 mb-16 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Post-Covid Neurological Complications
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
                Over the past 18 months, post-Covid Neurological complications have impacted lives and decreased the quality of life.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Headaches",
                  "Brain fog & Dizziness",
                  "Strokes",
                  "Neuropathy",
                  "Weakness",
                  "Carpal tunnel & Tremors",
                  "Memory loss",
                  "Hearing loss",
                  "Seizures",
                  "Inflammation of the spinal cord or muscles",
                  "Numbness"
                ].map((complication, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-700 text-sm group-hover:text-gray-900 transition-colors duration-300">{complication}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Treatment Options */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Therapies & Treatments */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="h-8 w-8 text-green-600 mr-3 hover:rotate-12 transition-transform duration-300" />
                Advanced Therapies
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <h4 className="font-bold text-gray-900 mb-3">Seizure Control</h4>
                  <p className="text-gray-700 mb-3">
                    Control seizures with medication and/or VNS (Vagus Nerve Stimulator) and DBS (Deep brain stimulator).
                  </p>
                  <p className="text-sm text-blue-600 font-medium">
                    Dr. Diaz personally programs the DBS and VNS.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <h4 className="font-bold text-gray-900 mb-3">Onsite Infusion Suite</h4>
                  <p className="text-gray-700 mb-3">IV therapy including:</p>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <div>• IVIG (Gammuglobulin)</div>
                    <div>• Ocrevus</div>
                    <div>• Monoclonal antibodies</div>
                    <div>• Tysabri</div>
                    <div>• Uplizna</div>
                    <div>• Soliris</div>
                    <div>• Rituxan treatments</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testing & Treatments */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="h-8 w-8 text-blue-600 mr-3 hover:rotate-12 transition-transform duration-300" />
                Testing & Treatments
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <h4 className="font-bold text-gray-900 mb-3">Diagnostic Testing</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                    <div>• EMG</div>
                    <div>• NCV</div>
                    <div>• EEG</div>
                    <div>• VER</div>
                    <div>• BAER</div>
                    <div>• SSEP</div>
                    <div>• Ambulatory video EEG</div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <h4 className="font-bold text-gray-900 mb-3">Botulinum Toxin Treatments</h4>
                  <p className="text-gray-700 mb-3 text-sm">
                    Effective treatment for Blepharospasm, dystonia, migraines, spasticity, and spasmodic torticollis.
                  </p>
                  <div className="text-sm text-gray-600 mb-3">
                    Available: Botox, Xeomin, Myobloc
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-purple-800 mb-1">Cosmetic Treatment</h5>
                    <p className="text-sm text-purple-700">
                      Fine lines treatment with Botulinum Toxins "Botox & Xeomin"
                    </p>
                    <p className="text-xs text-purple-600 mt-1">
                      (Not covered by Insurance)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Improve Your Quality of Life?
              </h3>
              <p className="text-blue-100 mb-6 text-lg">
                Don't let neurological symptoms control your life. Schedule a consultation today.
              </p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold hover:shadow-lg group">
                <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">Schedule Your Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Patients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from patients who trust Dr. Diaz with their health
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Patient since 2019",
                content: "Dr. Diaz is thorough, compassionate, and always takes time to explain everything. I feel confident in his care.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Patient since 2020",
                content: "The best physician I've ever worked with. His preventive approach has significantly improved my health.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "Patient since 2018",
                content: "Professional, caring, and knowledgeable. Dr. Diaz helped me manage my chronic condition effectively.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
                <div className="flex mb-4 group-hover:scale-105 transition-transform duration-300">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current hover:scale-125 transition-transform duration-300" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic group-hover:text-gray-900 transition-colors duration-300">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Information Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Contact Our Office
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                If you think you are experiencing either pain or symptoms of a Neurological Disorder, please contact our office today.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Phone className="h-8 w-8 text-blue-600 mr-3 hover:rotate-12 transition-transform duration-300" />
                  Get in Touch
                </h3>
                
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Our office is available by phone to answer questions you may have about our services and to schedule appointments.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors duration-300">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Office Address</h4>
                      <p className="text-gray-700">
                        2880 N Tenaya Way<br />
                        Suite 405<br />
                        Las Vegas, NV 89128
                      </p>
                      <p className="text-sm text-blue-600 mt-2 italic">
                        Located in the medical office building South of Mountain View Hospital ER
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors duration-300">
                    <Phone className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Phone & Fax</h4>
                      <p className="text-gray-700">
                        Phone: <a href="tel:702-233-0755" className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-all duration-300">702-233-0755</a><br />
                        Fax: 702-233-8814
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors duration-300">
                    <Mail className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Email</h4>
                      <p className="text-gray-700">
                        <a href="mailto:info@luisldiazmd.com" className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-all duration-300">
                          info@luisldiazmd.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Hours & Quick Actions */}
              <div className="space-y-8">
                {/* Hours of Operation */}
                <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Clock className="h-8 w-8 text-blue-600 mr-3 hover:rotate-12 transition-transform duration-300" />
                    Hours of Operation
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100 hover:bg-gray-50 px-3 rounded-lg transition-colors duration-300">
                      <span className="font-medium text-gray-900">Tuesday - Friday</span>
                      <span className="text-blue-600 font-semibold">08:30 AM - 05:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100 hover:bg-gray-50 px-3 rounded-lg transition-colors duration-300">
                      <span className="font-medium text-gray-900">Monday</span>
                      <span className="text-red-500 font-semibold">Closed</span>
                    </div>
                    <div className="flex justify-between items-center py-3 hover:bg-gray-50 px-3 rounded-lg transition-colors duration-300">
                      <span className="font-medium text-gray-900">Weekends</span>
                      <span className="text-red-500 font-semibold">Closed</span>
                    </div>
                  </div>
                </div>
                
                {/* Quick Actions */}
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <h3 className="text-2xl font-bold mb-6">Need Immediate Assistance?</h3>
                  <p className="text-blue-100 mb-6">
                    Don't wait - early intervention can make a significant difference in neurological conditions.
                  </p>
                  
                  <div className="space-y-4">
                    <button className="w-full bg-white text-blue-600 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold flex items-center justify-center space-x-2 group hover:shadow-lg">
                      <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                      <span>Call 702-233-0755</span>
                    </button>
                    <button className="w-full border-2 border-white text-white py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 group hover:shadow-lg transform hover:scale-105">
                      <Calendar className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                      <span>Schedule Appointment</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Ready to Take Control of Your Health?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Schedule your consultation today and begin your journey to better health with personalized, compassionate care.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-200" />
                  <span className="text-lg">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-200" />
                  <span className="text-lg">info@drluisdiazmd.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-blue-200" />
                  <span className="text-lg">123 Medical Plaza, Suite 100<br />New York, NY 10001</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Schedule Appointment</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent hover:border-blue-400 transition-all duration-300 transform hover:scale-105"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent hover:border-blue-400 transition-all duration-300 transform hover:scale-105"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent hover:border-blue-400 transition-all duration-300 transform hover:scale-105"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent hover:border-blue-400 transition-all duration-300 transform hover:scale-105"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent hover:border-blue-400 transition-all duration-300 transform hover:scale-105">
                  <option>Preferred Appointment Type</option>
                  <option>Consultation</option>
                  <option>Annual Checkup</option>
                  <option>Follow-up</option>
                </select>
                <textarea 
                  placeholder="Message (Optional)" 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent hover:border-blue-400 transition-all duration-300 transform hover:scale-105"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold transform hover:scale-105 hover:shadow-lg"
                >
                  Schedule Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">Dr. Luis Diaz</span>
              </div>
              <p className="text-gray-400">
                Providing exceptional healthcare with compassion and expertise.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="text-gray-400 hover:text-white transition-all duration-300 block hover:translate-x-2">Home</a>
                <a href="#about" className="text-gray-400 hover:text-white transition-all duration-300 block hover:translate-x-2">About</a>
                <a href="#services" className="text-gray-400 hover:text-white transition-all duration-300 block hover:translate-x-2">Services</a>
                <a href="#contact" className="text-gray-400 hover:text-white transition-all duration-300 block hover:translate-x-2">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
              <div className="space-y-2 text-gray-400">
                <div>Monday - Friday: 8:00 AM - 6:00 PM</div>
                <div>Saturday: 9:00 AM - 2:00 PM</div>
                <div>Sunday: Closed</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Dr. Luis Diaz. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;