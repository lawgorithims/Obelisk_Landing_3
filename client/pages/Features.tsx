import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Features() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Header */}
      <header className="bg-neutral-100 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/2513b0f84015ed4eac75e289f31145a33eba31d8?width=74"
                alt="Obelisk logo"
                className="w-9 h-9 mr-3"
              />
              <div className="text-black text-xl font-bold tracking-tight">
                OBELISK
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/features"
                className="text-gray-700 hover:text-gray-900 text-base"
              >
                Features
              </Link>
              <Link
                to="/how-it-works"
                className="text-gray-700 hover:text-gray-900 text-base"
              >
                How It Works
              </Link>
              <a
                href="/#pricing"
                className="text-gray-700 hover:text-gray-900 text-base"
              >
                Pricing
              </a>
              <Link
                to="/company"
                className="text-gray-700 hover:text-gray-900 text-base"
              >
                Company
              </Link>
              <Link
                to="/faq"
                className="text-gray-700 hover:text-gray-900 text-base"
              >
                FAQ
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6 h-6 text-black" />
            </button>

            {/* CTA Button */}
            <Button className="hidden md:flex bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-bold">
              Start your 7-day free trial
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex flex-col space-y-4">
                <Link
                  to="/features"
                  className="text-gray-700 hover:text-gray-900 text-base"
                >
                  Features
                </Link>
                <Link
                  to="/how-it-works"
                  className="text-gray-700 hover:text-gray-900 text-base"
                >
                  How It Works
                </Link>
                <a
                  href="/#pricing"
                  className="text-gray-700 hover:text-gray-900 text-base"
                >
                  Pricing
                </a>
                <Link
                  to="/company"
                  className="text-gray-700 hover:text-gray-900 text-base"
                >
                  Company
                </Link>
                <Link
                  to="/faq"
                  className="text-gray-700 hover:text-gray-900 text-base"
                >
                  FAQ
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* How It Works Section */}
      <section className="bg-neutral-100 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-16">
              How It Works
            </h1>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="w-16 h-16 md:w-20 lg:w-24 xl:w-28 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl md:text-2xl lg:text-3xl font-bold">
                  1
                </span>
              </div>

              {/* Arrow - Hidden on mobile */}
              <div className="hidden md:block absolute top-8 left-full w-12 lg:w-20 xl:w-28">
                <svg
                  className="w-full h-2"
                  viewBox="0 0 176 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M175.354 4.35355C175.549 4.15829 175.549 3.84171 175.354 3.64645L172.172 0.464466C171.976 0.269204 171.66 0.269204 171.464 0.464466C171.269 0.659728 171.269 0.976311 171.464 1.17157L174.293 4L171.464 6.82843C171.269 7.02369 171.269 7.34027 171.464 7.53553C171.66 7.7308 171.976 7.7308 172.172 7.53553L175.354 4.35355ZM0 4L0 4.5H175V4V3.5H0L0 4Z"
                    fill="#ACACAC"
                  />
                </svg>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-black mb-4">
                Upload Documents
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Securely upload your primary working document and supporting
                documents into the workspace.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative">
              <div className="w-16 h-16 md:w-20 lg:w-24 xl:w-28 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl md:text-2xl lg:text-3xl font-bold">
                  2
                </span>
              </div>

              {/* Arrow - Hidden on mobile */}
              <div className="hidden md:block absolute top-8 left-full w-12 lg:w-20 xl:w-28">
                <svg
                  className="w-full h-2"
                  viewBox="0 0 176 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M175.354 4.35355C175.549 4.15829 175.549 3.84171 175.354 3.64645L172.172 0.464466C171.976 0.269204 171.66 0.269204 171.464 0.464466C171.269 0.659728 171.269 0.976311 171.464 1.17157L174.293 4L171.464 6.82843C171.269 7.02369 171.269 7.34027 171.464 7.53553C171.66 7.7308 171.976 7.7308 172.172 7.53553L175.354 4.35355ZM0 4L0 4.5H175V4V3.5H0L0 4Z"
                    fill="#ACACAC"
                  />
                </svg>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-black mb-4">
                Run AI Assisted Workflows
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Interact with the Obelisk agent to run AI-powered workflows and
                automate your tasks. Obelisk will draft, research, and validate
                for you.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 lg:w-24 xl:w-28 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl md:text-2xl lg:text-3xl font-bold">
                  3
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-black mb-4">
                Reap The Benefits
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Iterate faster and increase billables. Don't let tedious and
                repetitive work hold you back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section Title */}
      <section className="bg-neutral-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            Features
          </h2>
        </div>
      </section>

      {/* Feature 1 - Document Review & Analysis */}
      <section className="bg-neutral-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-r-3xl md:rounded-r-[100px] py-12 md:py-16 px-6 md:px-12 lg:px-16 xl:px-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Icon */}
            <div className="flex justify-center md:justify-end">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/23851bfa3feec8ba5a84e136b4e2d11d0bfd8452?width=254"
                alt="Document Review Icon"
                className="w-24 md:w-32 lg:w-40 h-auto max-w-full"
              />
            </div>

            {/* Content */}
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
                Document Review & Analysis
              </h3>
              <p className="text-white text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                Upload case files, contracts, and depositions. Automatically
                extracts key information, identifies relevant facts, and builds
                context for your case with intelligent document scanning.
              </p>
              <Button className="bg-white text-black hover:bg-gray-100 px-6 py-2 rounded-lg font-bold">
                Try Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2 - Automated Legal Research */}
      <section className="bg-neutral-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-l-3xl md:rounded-l-[100px] py-12 md:py-16 px-6 md:px-12 lg:px-16 xl:px-20 mr-0 md:-mr-24 lg:-mr-32 xl:-mr-40 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content - Left on desktop */}
            <div className="text-center md:text-left order-2 md:order-1">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
                Automated Legal Research
              </h3>
              <p className="text-white text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                Searches across legal databases, case law, and precedents.
                Identifies relevant cases, statutes, and judicial trends to
                strengthen your legal strategy with comprehensive research.
              </p>
              <Button className="bg-white text-black hover:bg-gray-100 px-6 py-2 rounded-lg font-bold">
                Try Now
              </Button>
            </div>

            {/* Icon - Right on desktop */}
            <div className="flex justify-center md:justify-start order-1 md:order-2">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/7d196d3c4e9709c2dc710f459d3f804a486f262a?width=254"
                alt="Legal Research Icon"
                className="w-24 md:w-32 lg:w-40 h-auto max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3 - Intelligent Document Drafting */}
      <section className="bg-neutral-100 py-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-r-3xl md:rounded-r-[100px] py-12 md:py-16 px-6 md:px-12 lg:px-16 xl:px-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Icon */}
            <div className="flex justify-center md:justify-end">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/9b95828bb398afa404845ef97fae011fbe447b0b?width=254"
                alt="Document Drafting Icon"
                className="w-24 md:w-32 lg:w-40 h-auto max-w-full"
              />
            </div>

            {/* Content */}
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
                Intelligent Document Drafting
              </h3>
              <p className="text-white text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                Generate legal documents with proper citations, formatting, and
                reasoning. Writes in your style while ensuring accuracy and
                legal compliance with automated formatting.
              </p>
              <Button className="bg-white text-black hover:bg-gray-100 px-6 py-2 rounded-lg font-bold">
                Try Now
              </Button>
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
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2 md:mb-4">
                Obelisk
              </h3>
              <p className="text-gray-400 text-sm md:text-base">
                © 2025 Obelisk LLC
              </p>
            </div>

            {/* Features Column */}
            <div className="mb-6 md:mb-0">
              <h4 className="text-white text-base md:text-lg font-bold mb-3 md:mb-4">
                Features
              </h4>
              <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Document Review & Analysis
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Automated Legal Research
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Intelligent Document Drafting
                  </a>
                </li>
              </ul>
            </div>

            {/* Pricing Column */}
            <div className="mb-6 md:mb-0">
              <h4 className="text-white text-base md:text-lg font-bold mb-3 md:mb-4">
                Pricing
              </h4>
              <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                <li>
                  <a
                    href="/#pricing"
                    className="text-gray-400 hover:text-white"
                  >
                    Plans
                  </a>
                </li>
                <li>
                  <Link to="/faq" className="text-gray-400 hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-white text-base md:text-lg font-bold mb-3 md:mb-4">
                Company
              </h4>
              <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-white"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
