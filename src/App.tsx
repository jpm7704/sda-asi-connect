
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Database from "./pages/Database";
import Profiles from "./pages/Profiles";
import Companies from "./pages/Companies";
import Events from "./pages/Events";
import Chapters from "./pages/Chapters";
import DigitalCards from "./pages/DigitalCards";
import Network from "./pages/Network";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/database" element={<Database />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/events" element={<Events />} />
          <Route path="/chapters" element={<Chapters />} />
          <Route path="/digital-cards" element={<DigitalCards />} />
          <Route path="/network" element={<Network />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
