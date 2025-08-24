
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import HeroNavigation from "./components/HeroNavigation";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import Index from "./pages/Index";
import OurStory from "./pages/OurStory";
import OurBusinesses from "./pages/OurBusinesses";
import OurImpact from "./pages/OurImpact";
import Careers from "./pages/Careers";
import BuildingMaterial from "./pages/BuildingMaterial";
import IndustrialChemicals from "./pages/IndustrialChemicals";
import Machineries from "./pages/Machineries";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <HeroNavigation />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/our-story" element={<OurStory />} />
                <Route path="/our-businesses" element={<OurBusinesses />} />
                <Route path="/our-impact" element={<OurImpact />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/building-material" element={<BuildingMaterial />} />
                <Route path="/industrial-chemicals" element={<IndustrialChemicals />} />
                <Route path="/machineries" element={<Machineries />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <Chatbot />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
