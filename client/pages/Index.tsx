import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Header */}
      <header className="bg-neutral-100 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/2513b0f84015ed4eac75e289f31145a33eba31d8?width=74"
                alt="Obelisk logo"
                className="w-9 h-9 mr-3"
              />
              <div className="text-black text-xl font-bold tracking-tight">
                OBELISK
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/how-it-works"
                className="text-gray-700 hover:text-gray-900 text-base"
              >
                How It Works
              </Link>
              <a
                href="#pricing"
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

            {/* CTA Button */}
            <Button className="bg-slate-900 hover:bg-slate-800 text-white px-4 sm:px-6 py-3 rounded-lg font-bold text-sm sm:text-base">
              <span className="hidden sm:inline">
                Start your 7-day free trial
              </span>
              <span className="sm:hidden">Free Trial</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-neutral-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Hero Badge */}
          <div className="inline-flex items-center justify-center px-4 py-1 bg-teal-400 text-black text-xs font-bold rounded-full mb-8">
            ONLINE
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6 leading-tight tracking-tight">
            Build Stronger Cases, Faster
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed font-garamond">
            Obelisk is a legal drafting tool that verifies your work against
            authoritative sources. Whether reviewing case law, preparing briefs,
            or analyzing contracts, Obelisk ensures accuracy by fact-checking
            documents against the record.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-bold">
              Try For Free
            </Button>
            <Button
              variant="outline"
              className="border-black text-black hover:bg-gray-50 px-8 py-3 rounded-lg font-bold"
            >
              Membership
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-5xl mx-auto">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/0c5125fa7b77fcf0d1725c187e228eb3b610412d?width=1868"
              alt="Obelisk Dashboard Screenshot"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* What Does Obelisk Provide Section */}
      <section id="features" className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Does <span className="text-teal-400">Obelisk</span> Provide?
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              We offer a streamlined solution for automating legal workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Document Review & Analysis */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/391a973641e0fcde8416c1bc000f65b00b5415c1?width=160"
                  alt="Document Review Icon"
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Document Review & Analysis
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Upload case files, contracts, and depositions. Automatically
                extracts key information, identifies relevant facts, and builds
                context for your case with intelligent document scanning.
              </p>
            </div>

            {/* Automated Legal Research */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/9ecb52ffffd95800bd0c02824ed7fc7fbd659d8f?width=160"
                  alt="Legal Research Icon"
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Automated Legal Research
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Searches across legal databases, case law, and precedents.
                Identifies relevant cases, statutes, and judicial trends to
                strengthen your legal strategy with comprehensive research.
              </p>
            </div>

            {/* Intelligent Document Drafting */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a389f5c6d4335f3ed58ce1befbbf08dd22cc9fde?width=160"
                  alt="Document Drafting Icon"
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Intelligent Document Drafting
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Generate legal documents with proper citations, formatting, and
                reasoning. Writes in your style while ensuring accuracy and
                legal compliance with automated formatting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Firms Choose Obelisk Section */}
      <section className="bg-neutral-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
              Why Firms Choose Obelisk
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Save Time */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-black mb-4">Save Time</h3>
              <p className="text-gray-700">
                Instant research, automated review, and drafting speed up
                routine legal workflow, allowing attorneys to focus on
                higher-value strategic tasks.
              </p>
            </div>

            {/* Automation */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-black mb-4">Automation</h3>
              <p className="text-gray-700">
                Leverage AI to do tedious and repetitive work for you. Focus on
                the big picture, and do mountains of work in seconds.
              </p>
            </div>

            {/* Precision */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-black mb-4">Precision</h3>
              <p className="text-gray-700">
                Fact-checking every claim and extracting key information ensures
                work is thorough and reliable, reducing risk of errors or missed
                details.
              </p>
            </div>

            {/* Deep Research */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-black mb-4">
                Deep Research
              </h3>
              <p className="text-gray-700">
                Access to comprehensive legal databases and intelligent
                identification of relevant cases and statutes strengthens case
                arguments and overall strategy.
              </p>
            </div>

            {/* Drafting Speed */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-black mb-4">
                Drafting Speed
              </h3>
              <p className="text-gray-700">
                Meet deadlines effortlessly and manage higher caseloads, all
                while keeping pace with today's demanding legal environment.
              </p>
            </div>

            {/* Quality Assurance */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-black mb-4">
                Quality Assurance
              </h3>
              <p className="text-gray-700">
                Tools identify mistakes and help maintain consistent logic and
                formatting, reducing editorial and compliance risk across
                documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits at a Glance Section */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Key Benefits at a Glance
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-8 border border-gray-700">
              <div className="w-8 h-8 mb-6">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/42d7df9d7ba13899e3b812ca7cfd6f9482472696?width=60"
                  alt="Quote Icon"
                  className="w-8 h-8"
                />
              </div>
              <p className="text-white mb-6 leading-relaxed">
                "Obelisk transformed our firm's workflow—I'm amazed by the speed
                and accuracy. Our attorneys now focus on strategy, and our
                clients are seeing faster, more reliable results every day."
              </p>
              <div className="flex items-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/34b9d661568fe19bd7510caa804268748620f69d?width=80"
                  alt="Profile"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="text-white font-bold">Jhon Ibanez</div>
                  <div className="text-gray-400 text-sm">Marvin Legal</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-8 border border-gray-700">
              <div className="w-8 h-8 mb-6">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/42d7df9d7ba13899e3b812ca7cfd6f9482472696?width=60"
                  alt="Quote Icon"
                  className="w-8 h-8"
                />
              </div>
              <p className="text-white mb-6 leading-relaxed">
                "Thanks to Obelisk, our research and drafting process is
                seamless. The automation tools catch every detail, and
                turnaround times have never been better. We highly recommend
                their service!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/34b9d661568fe19bd7510caa804268748620f69d?width=80"
                  alt="Profile"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="text-white font-bold">Czar Parreno</div>
                  <div className="text-gray-400 text-sm">
                    Ultimate Kronos Group
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-8 border border-gray-700">
              <div className="w-8 h-8 mb-6">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/42d7df9d7ba13899e3b812ca7cfd6f9482472696?width=60"
                  alt="Quote Icon"
                  className="w-8 h-8"
                />
              </div>
              <p className="text-white mb-6 leading-relaxed">
                "With Obelisk, we deliver polished, compliant documents faster
                than ever. The platform's precision and quality assurance give
                us peace of mind and have won praise from our clients."
              </p>
              <div className="flex items-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/34b9d661568fe19bd7510caa804268748620f69d?width=80"
                  alt="Profile"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="text-white font-bold">Priva Singh</div>
                  <div className="text-gray-400 text-sm">Brightside Equity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-neutral-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Select Your Plan
            </h2>
            <p className="text-lg text-gray-700">
              Elevate your legal workflows
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Standard Plan */}
            <div className="bg-white rounded-lg border-2 border-gray-200 p-8 shadow-lg">
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
                  <div>
                    <strong>150</strong> AI requests per month
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    Up to <strong>2</strong> active workspaces
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>30 GB</strong> of secure storage per workspace
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Document review & analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Automated legal research</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Citation validation</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Intelligent document drafting</span>
                </li>
                <li className="flex items-start">
                  <X className="w-4 h-4 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-500">Analytics</span>
                </li>
                <li className="flex items-start">
                  <X className="w-4 h-4 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-500">API access</span>
                </li>
                <li className="flex items-start">
                  <X className="w-4 h-4 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-500">
                    Enterprise level support
                  </span>
                </li>
              </ul>

              <hr className="border-gray-200 mb-6" />

              <div className="space-y-3">
                <Button className="w-full bg-black hover:bg-gray-800 text-white">
                  Try for free
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-black text-black hover:bg-gray-50"
                >
                  See More Details
                </Button>
              </div>
            </div>

            {/* Premium Plan - Featured */}
            <div className="bg-slate-900 rounded-lg border-2 border-teal-400 p-8 shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-teal-400 text-black px-4 py-1 rounded-full text-sm font-bold">
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
                  <div className="text-white">
                    <strong>500</strong> AI requests per month
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-teal-400 mr-3 mt-1 flex-shrink-0" />
                  <div className="text-white">
                    Up to <strong>5</strong> active workspaces
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-teal-400 mr-3 mt-1 flex-shrink-0" />
                  <div className="text-white">
                    <strong>60 GB</strong> of secure storage per workspace
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-teal-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-white">Document review & analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-teal-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-white">Automated legal research</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-teal-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-white">Citation validation</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-teal-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-white">
                    Intelligent document drafting
                  </span>
                </li>
                <li className="flex items-start">
                  <X className="w-4 h-4 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-500">Analytics</span>
                </li>
                <li className="flex items-start">
                  <X className="w-4 h-4 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-500">API Access</span>
                </li>
                <li className="flex items-start">
                  <X className="w-4 h-4 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-500">
                    Enterprise level support
                  </span>
                </li>
              </ul>

              <hr className="border-gray-600 mb-6" />

              <div className="space-y-3">
                <Button className="w-full bg-teal-400 hover:bg-teal-500 text-black">
                  Try for free
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-white text-white hover:bg-gray-800"
                >
                  See More Details
                </Button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-lg border-2 border-gray-200 p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-4">Enterprise</h3>
              <p className="text-gray-600 mb-6">
                For large teams providing legal services at scale.
              </p>
              <div className="mb-8">
                <span className="text-lg font-bold text-black">
                  Contact Sales for Pricing
                </span>
              </div>

              <hr className="border-gray-200 mb-6" />

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Unlimited</strong> AI requests
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    Up to <strong>10</strong> active workspaces
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>30 GB</strong> of secure storage per workspace
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Document review & analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Automated legal research</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Citation validation</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Intelligent document drafting</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Analytics</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>API access</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Enterprise level support</span>
                </li>
              </ul>

              <hr className="border-gray-200 mb-6" />

              <div className="space-y-3">
                <Button className="w-full bg-black hover:bg-gray-800 text-white">
                  Contact Sales
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-black text-black hover:bg-gray-50"
                >
                  See More Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-white text-2xl font-bold mb-4">Obelisk</h3>
              <p className="text-gray-400">© 2025 Obelisk LLC</p>
            </div>

            {/* Features Column */}
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Features</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white"
                  >
                    Document Review & Analysis
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white"
                  >
                    Automated Legal Research
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white"
                  >
                    Intelligent Document Drafting
                  </a>
                </li>
              </ul>
            </div>

            {/* Pricing Column */}
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Pricing</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#pricing" className="text-gray-400 hover:text-white">
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

            {/* Legal Column */}
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-400 hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2">
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
