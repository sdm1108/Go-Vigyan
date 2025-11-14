import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import IndianCow from "./pages/IndianCow";
import TrainingSchedule from "./pages/TrainingSchedule";
import Donate from "./pages/Donate";
import Shop from "./pages/Shop";
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
          <Route path="/about" element={<About />} />
          <Route path="/indian-cow" element={<IndianCow />} />
          <Route path="/importance" element={<IndianCow />} />
          <Route path="/breeds" element={<IndianCow />} />
          <Route path="/training-schedule" element={<TrainingSchedule />} />
          <Route path="/cow-economy" element={<TrainingSchedule />} />
          <Route path="/organic-farming" element={<TrainingSchedule />} />
          <Route path="/ayurved" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/donate" element={<Donate />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
