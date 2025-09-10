import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot, type Root } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Placeholder from "./pages/Placeholder";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Desktop from "./pages/Desktop";
import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route
            path="/how-it-works"
            element={<Placeholder pageName="How It Works" />}
          />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/desktop" element={<Desktop />} />
          <Route path="/company" element={<Placeholder pageName="Company" />} />
          <Route path="/about" element={<Placeholder pageName="About Us" />} />
          <Route
            path="/contact"
            element={<Placeholder pageName="Contact Us" />}
          />
          <Route path="/faq" element={<Placeholder pageName="FAQ" />} />
          <Route
            path="/privacy"
            element={<Placeholder pageName="Privacy Policy" />}
          />
          <Route
            path="/terms"
            element={<Placeholder pageName="Terms of Service" />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

declare global {
  interface Window {
    __OBELISK_APP_ROOT__?: Root;
  }
}

const container = document.getElementById("root")!;
const root = window.__OBELISK_APP_ROOT__ ?? createRoot(container);
window.__OBELISK_APP_ROOT__ = root;
root.render(<App />);

// Support Vite HMR - clean up on dispose to avoid stale roots
// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((import.meta as any).hot) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (import.meta as any).hot.dispose(() => {
    root.unmount();
    window.__OBELISK_APP_ROOT__ = undefined;
  });
}
