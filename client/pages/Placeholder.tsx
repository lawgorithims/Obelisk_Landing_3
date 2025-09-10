import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

interface PlaceholderProps {
  pageName: string;
}

export default function Placeholder({ pageName }: PlaceholderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Header */}
      <header className="bg-neutral-100 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/2513b0f84015ed4eac75e289f31145a33eba31d8?width=74"
                alt="Obelisk Logo"
                className="w-9 h-9 flex-shrink-0 mr-3"
              />
              <span className="text-black text-xl font-bold tracking-tight group-hover:opacity-90">
                OBELISK
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/features" className="text-gray-700 hover:text-gray-900 text-base">Features</Link>
              <Link to="/how-it-works" className="text-gray-700 hover:text-gray-900 text-base">How It Works</Link>
              <a href="/#pricing" className="text-gray-700 hover:text-gray-900 text-base">Pricing</a>
              <Link to="/company" className="text-gray-700 hover:text-gray-900 text-base">Company</Link>
              <Link to="/faq" className="text-gray-700 hover:text-gray-900 text-base">FAQ</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6 text-black" />
            </button>

            {/* CTA Button */}
            <Button className="hidden md:flex bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-bold">
              Start your 7-day free trial
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex flex-col space-y-4">
              <Link to="/features" className="text-gray-700 hover:text-gray-900 text-base">Features</Link>
              <Link to="/how-it-works" className="text-gray-700 hover:text-gray-900 text-base">How It Works</Link>
              <a href="/#pricing" className="text-gray-700 hover:text-gray-900 text-base">Pricing</a>
              <Link to="/company" className="text-gray-700 hover:text-gray-900 text-base">Company</Link>
              <Link to="/faq" className="text-gray-700 hover:text-gray-900 text-base">FAQ</Link>
            </nav>
          </div>
        </div>
      )}

      {/* Placeholder Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            {pageName} Page
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            This page is coming soon. We're working hard to bring you more
            features and content.
          </p>
          <p className="text-lg text-gray-600 mb-12">
            In the meantime, feel free to explore our main features or contact
            us if you have any questions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-bold"
              onClick={() => (window.location.href = "/")}
            >
              Back to Home
            </Button>
            <Button
              variant="outline"
              className="border-black text-black hover:bg-gray-50 px-8 py-3 rounded-lg font-bold"
              onClick={() => (window.location.href = "/#pricing")}
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-16 mt-20">
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
                    href="/#features"
                    className="text-gray-400 hover:text-white"
                  >
                    Document Review & Analysis
                  </a>
                </li>
                <li>
                  <a
                    href="/#features"
                    className="text-gray-400 hover:text-white"
                  >
                    Automated Legal Research
                  </a>
                </li>
                <li>
                  <a
                    href="/#features"
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
                  <a
                    href="/#pricing"
                    className="text-gray-400 hover:text-white"
                  >
                    Plans
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-gray-400 hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
