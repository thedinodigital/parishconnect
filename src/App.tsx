import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ChurchPage from "./pages/ChurchPage";
import ChurchesIndex from "./pages/ChurchesIndex";
import MassTimesPage from "./pages/MassTimesPage";
import NoticesPage from "./pages/NoticesPage";
import ContactPage from "./pages/ContactPage";
import FuneralsPage from "./pages/FuneralsPage";
import OurPriestPage from "./pages/OurPriestPage";
import SacramentsPage from "./pages/SacramentsPage";
import HeritagePage from "./pages/HeritagePage";
import ComingSoon from "./pages/ComingSoon";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/churches" element={<ChurchesIndex />} />
            <Route path="/churches/:slug" element={<ChurchPage />} />
            <Route path="/mass-times" element={<MassTimesPage />} />
            <Route path="/notices" element={<NoticesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/funerals" element={<FuneralsPage />} />
            <Route path="/our-priest" element={<OurPriestPage />} />
            <Route path="/sacraments" element={<SacramentsPage />} />
            <Route path="/sacraments/:type" element={<ComingSoon title="Sacraments" description="Sacrament information for Abbeyleix Parish." path="/sacraments" />} />
            <Route path="/webcam" element={<ComingSoon title="Webcam" description="Watch Mass live from Abbeyleix Parish." path="/webcam" />} />
            <Route path="/donate" element={<ComingSoon title="Support the Parish" description="Your generosity sustains the life of our parish. Every gift, large or small, helps us care for our six churches and the communities they serve." path="/donate" />} />
            <Route path="/newsletter" element={<ComingSoon title="Newsletter" description="Read the Abbeyleix Parish newsletter." path="/newsletter" />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/heritage" element={<HeritagePage />} />
            <Route path="/safeguarding" element={<ComingSoon title="Safeguarding" description="Child safeguarding policy for Abbeyleix Parish." path="/safeguarding" />} />
            <Route path="/privacy" element={<ComingSoon title="Privacy & Data Protection" description="Privacy policy and data protection information." path="/privacy" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
