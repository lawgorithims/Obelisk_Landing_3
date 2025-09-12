import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Company() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lottieRef = useRef<HTMLDivElement | null>(null);
  const lottieInstance = useRef<any>(null);

  useEffect(() => {
    if ((window as any).lottie) {
      lottieInstance.current = (window as any).lottie.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "https://cdn.builder.io/o/assets%2Fa38e23338308499f98538cb586611bd1%2Fd715eb110faf4567a366dd9f6ab190b0?alt=media&token=73ac4903-b0fc-4f43-a087-ccd1cc7c3c69&apiKey=a38e23338308499f98538cb586611bd1",
      });
      return () => lottieInstance.current?.destroy?.();
    }

    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js";
    script.async = true;
    script.onload = () => {
      lottieInstance.current = (window as any).lottie.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "https://cdn.builder.io/o/assets%2Fa38e23338308499f98538cb586611bd1%2Fd715eb110faf4567a366dd9f6ab190b0?alt=media&token=73ac4903-b0fc-4f43-a087-ccd1cc7c3c69&apiKey=a38e23338308499f98538cb586611bd1",
      });
    };
    document.body.appendChild(script);
    return () => {
      lottieInstance.current?.destroy?.();
      document.body.removeChild(script);
    };
  }, []);

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
              <Link to="/company" className="text-gray-900 font-semibold text-base">Company</Link>
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
            <Link to="/dashboard" className="hidden md:flex">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-bold">
                Enter Dashboard
              </Button>
            </Link>
          </div>
        </div>

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
      </header>

      {/* Company Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-black mb-6">Company</h1>

            <div className="space-y-6 text-lg leading-relaxed text-gray-800">
              <p>
                Obelisk was founded by <span className="font-semibold">Benjamin Suslavich</span>, an attorney and engineer,
                and <span className="font-semibold">Schuyler Gleaves</span>, a former Microsoft software engineer.
              </p>
              <p>
                We created Obelisk with a clear mission: to eliminate the tedious, time-consuming tasks that slow attorneys down,
                so they can focus on what truly matters — strategy, advocacy, and serving their clients.
              </p>
              <p>
                Too often, legal technology adds complexity instead of solving real problems. By combining Benjamin’s legal
                experience with Schuyler’s engineering expertise, we built a platform that actually works for lawyers. Obelisk
                verifies work against authoritative sources, streamlines drafting, and reduces the risk of error.
              </p>
              <p>
                Our vision is simple: empower attorneys with tools that save time, ensure accuracy, and let them dedicate their
                energy to the practice of law.
              </p>
            </div>

            <div className="mt-10 flex gap-4">
              <Link to="/dashboard">
                <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-bold">
                  Enter Dashboard
                </Button>
              </Link>
              <a href="/#pricing">
                <Button variant="outline" className="border-black text-black hover:bg-gray-50 px-8 py-3 rounded-lg font-bold">
                  View Pricing
                </Button>
              </a>
            </div>
          </div>

          {/* Right-side Lottie animation */}
          <div className="w-full md:justify-self-end">
            <div className="bg-transparent border-0 rounded-none shadow-none p-0">
              <div ref={lottieRef} className="w-full h-[512px] sm:h-[640px] md:h-[840px]" aria-label="Obelisk loading animation" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-white text-2xl font-bold mb-4">Obelisk</h3>
              <p className="text-gray-400">© 2025 Obelisk</p>
            </div>

            {/* Features Column */}
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Features</h4>
              <ul className="space-y-2">
                <li><a href="/#features" className="text-gray-400 hover:text-white">Document Review & Analysis</a></li>
                <li><a href="/#features" className="text-gray-400 hover:text-white">Automated Legal Research</a></li>
                <li><a href="/#features" className="text-gray-400 hover:text-white">Intelligent Document Drafting</a></li>
              </ul>
            </div>

            {/* Pricing Column */}
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Pricing</h4>
              <ul className="space-y-2">
                <li><a href="/#pricing" className="text-gray-400 hover:text-white">Plans</a></li>
                <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2">
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
