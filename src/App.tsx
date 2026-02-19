import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { BrowserRouter, Routes, Route } from "react-router";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import About from "./pages/About";
import SecuritySystems from "./pages/SecuritySystems";
import FireSystems from "./pages/FireSystems";
import BMS from "./pages/BMS";
import TelecomSystems from "./pages/TelecomSystems";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/o-nas" element={<About />} />
            <Route path="/zakres-uslug" element={<ServicesPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="/systemy-bezpieczenstwa" element={<SecuritySystems />} />
            <Route path="/systemy-pozarowe" element={<FireSystems />} />
            <Route path="/bms" element={<BMS />} />
            <Route path="/systemy-teletechniczne" element={<TelecomSystems />} />
            <Route path="/policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
