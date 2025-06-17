
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Header } from "@/components/layout/Header";
import Index from "./pages/Index";
import About from "./pages/About";
import ProjectListing from "./pages/ProjectListing";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import JKBCare from "./pages/JKBCare";
import JointVenture from "./pages/JointVenture";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProjects from "./pages/AdminProjects";
import AdminEnquiries from "./pages/AdminEnquiries";
import { AdminLogin } from "./components/admin/AdminLogin";
import NotFound from "./pages/NotFound";

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
            <Route path="/about" element={<><Header /><About /></>} />
            <Route path="/projects" element={<ProjectListing />} />
            <Route path="/project/:id" element={<><Header /><ProjectDetail /></>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/jkb-care" element={<><Header /><JKBCare /></>} />
            <Route path="/joint-venture" element={<><Header /><JointVenture /></>} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/add-project" element={<AdminDashboard />} />
            <Route path="/admin/projects" element={<AdminProjects />} />
            <Route path="/admin/enquiries" element={<AdminEnquiries />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<><Header /><NotFound /></>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
