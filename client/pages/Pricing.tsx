import { Button } from "@/components/ui/button";
import { Check, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Pricing() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Header */}
      <header className="bg-neutral-100 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/2513b0f84015ed4eac75e289f31145a33eba31d8?width=74"
                alt="Obelisk logo"
                className="w-7 h-7 md:w-9 md:h-9 mr-2 md:mr-3"
              />
              <div className="text-black text-lg md:text-xl font-bold tracking-tight">OBELISK</div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/how-it-works" className="text-gray-700 hover:text-gray-900 text-base">
                How It Works
              </Link>
              <Link to="/pricing" className="text-gray-700 hover:text-gray-900 text-base">
                Pricing
              </Link>
              <Link to="/company" className="text-gray-700 hover:text-gray-900 text-base">
                Company
              </Link>
              <Link to="/faq" className="text-gray-700 hover:text-gray-900 text-base">
                FAQ
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-black" />
              ) : (
                <Menu className="w-6 h-6 text-black" />
              )}
            </button>

            {/* CTA Button */}
            <Button className="hidden md:flex bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-bold">
              Start your 7-day free trial
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 absolute top-16 left-0 right-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex flex-col space-y-4">
                <Link
                  to="/how-it-works"
                  className="text-gray-700 hover:text-gray-900 text-base py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link
                  to="/pricing"
                  className="text-gray-700 hover:text-gray-900 text-base py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  to="/company"
                  className="text-gray-700 hover:text-gray-900 text-base py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Company
                </Link>
                <Link
                  to="/faq"
                  className="text-gray-700 hover:text-gray-900 text-base py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
                <div className="pt-4 border-t border-gray-200">
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-lg font-bold">
                    Start your 7-day free trial
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Main Pricing Section */}
      <section className="bg-neutral-100 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 md:mb-4">
              Select Your Plan
            </h1>
            <p className="text-base md:text-lg text-gray-700">
              Elevate your legal workflows
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Standard Plan */}
            <div className="bg-white rounded-lg border border-gray-300 p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-4">Standard</h3>
              <p className="text-gray-600 mb-6">
                For solo practitioners or teams with lighter workloads.
              </p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-black">$24</span>
                <span className="text-lg text-gray-600">/mo</span>
              </div>

              <hr className="border-gray-200 mb-6" />

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div className="text-sm">
                    <strong>150</strong> AI requests per month
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div className="text-sm">
                    Up to <strong>2</strong> active workspaces
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div className="text-sm">
                    <strong>30 GB</strong> of secure storage per workspace
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-sm">Document review & analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-sm">Automated legal research</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-sm">Citation validation</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-sm">Intelligent document drafting</span>
                </li>
                <li className="flex items-start">
                  <X className="w-4 h-4 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-500">Analytics</span>
                </li>
                <li className="flex items-start">
                  <X className="w-4 h-4 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-500">API access</span>
                </li>
                <li className="flex items-start">
                  <X className="w-4 h-4 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-500">Enterprise level support</span>
                </li>
              </ul>

              <hr className="border-gray-200 mb-6" />

              <div className="space-y-3">
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold">
                  Try for free
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-black text-black hover:bg-gray-50 font-bold"
                >
                  See More Details
                </Button>
              </div>
            </div>

            {/* Premium Plan - Featured */}
            <div className="bg-slate-900 rounded-lg border border-slate-900 p-8 shadow-lg relative">
              {/* Most Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-teal-400 text-black px-4 py-1 rounded-full text-xs font-bold tracking-wide">
                  MOST POPULAR
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Premium</h3>
              <p className="text-gray-300 mb-6">
                For growing teams looking to uplevel their legal workflows.
              </p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">$49</span>
                <span className="text-lg text-gray-300">/mo</span>
              </div>

              <hr className="border-gray-600 mb-6" />

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-teal-400 mr-3 mt-1 flex-shrink-0" />
                  <div className="text-sm text-white">
                    <strong>500</strong> AI requests per month
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-teal-400 mr-3 mt-1 flex-shrink-0" />
                  <div className="text-sm text-white">
                    Up to <strong>5</strong> active workspaces
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-teal-400 mr-3 mt-1 flex-shrink-0" />
                  <div className="text-sm text-white">
                    <strong>60 GB</strong> of secure storage per workspace
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-teal-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-sm text-white">Document review & analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-teal-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-sm text-white">Automated legal research</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-teal-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-sm text-white">Citation validation</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-teal-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-sm text-white">Intelligent document drafting</span>
                </li>
                <li className="flex items-start">
                  <X className="w-4 h-4 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-500">Analytics</span>
                </li>
                <li className="flex items-start">
                  <X className="w-4 h-4 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-500">API Access</span>
                </li>
                <li className="flex items-start">
                  <X className="w-4 h-4 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-500">Enterprise level support</span>
                </li>
              </ul>

              <hr className="border-gray-600 mb-6" />

              <div className="space-y-3">
                <Button className="w-full bg-teal-400 hover:bg-teal-500 text-black font-bold">
                  Try for free
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-white border-white text-black hover:bg-gray-100 font-bold"
                >
                  See More Details
                </Button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-lg border border-gray-300 p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-4">Enterprise</h3>
              <p className="text-gray-600 mb-6">
                For large teams providing legal services at scale.
              </p>
              <div className="mb-8">
                <span className="text-base font-bold text-black">Contact Sales for Pricing</span>
              </div>

              <hr className="border-gray-200 mb-6" />

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div className="text-sm">
                    <strong>Unlimited</strong> AI requests
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div className="text-sm">
                    Up to <strong>10</strong> active workspaces
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div className="text-sm">
                    <strong>30 GB</strong> of secure storage per workspace
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-sm">Document review & analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-sm">Automated legal research</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-sm">Citation validation</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-sm">Intelligent document drafting</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-sm">Analytics</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-sm">API access</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-sm">Enterprise level support</span>
                </li>
              </ul>

              <hr className="border-gray-200 mb-6" />

              <div className="space-y-3">
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold">
                  Contact Sales
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-black text-black hover:bg-gray-50 font-bold"
                >
                  See More Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 text-center md:text-left">
            {/* Company Info */}
            <div className="md:col-span-4 lg:col-span-1 mb-6 md:mb-0">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2 md:mb-4">Obelisk</h3>
              <p className="text-gray-400 text-sm md:text-base">© 2025 Obelisk LLC</p>
            </div>

            {/* Features Column */}
            <div className="mb-6 md:mb-0">
              <h4 className="text-white text-base md:text-lg font-bold mb-3 md:mb-4">Features</h4>
              <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                <li><a href="#" className="text-gray-400 hover:text-white">Document Review & Analysis</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Automated Legal Research</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Intelligent Document Drafting</a></li>
              </ul>
            </div>

            {/* Pricing Column */}
            <div className="mb-6 md:mb-0">
              <h4 className="text-white text-base md:text-lg font-bold mb-3 md:mb-4">Pricing</h4>
              <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                <li><Link to="/pricing" className="text-gray-400 hover:text-white">Plans</Link></li>
                <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="mb-6 md:mb-0">
              <h4 className="text-white text-base md:text-lg font-bold mb-3 md:mb-4">Legal</h4>
              <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-white text-base md:text-lg font-bold mb-3 md:mb-4">Company</h4>
              <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
