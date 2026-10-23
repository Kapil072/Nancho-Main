import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

// Demorule Pages
import Rationale from "./pages/demorule/Rationale.tsx";
import FirstPrinciples from "./pages/demorule/FirstPrinciples.tsx";
import Partnership from "./pages/demorule/Partnership.tsx";
import Initiative from "./pages/demorule/Initiative.tsx";
import Amendment from "./pages/demorule/Amendment.tsx";
import Act from "./pages/demorule/Act.tsx";
import Constitutionality from "./pages/demorule/Constitutionality.tsx";
import ActionPlan from "./pages/demorule/ActionPlan.tsx";
import WarPeace from "./pages/demorule/WarPeace.tsx";
import SwitzerlandDemocracy from "./pages/demorule/SwitzerlandDemocracy.tsx";
import ConsensualDemocracy from "./pages/demorule/ConsensualDemocracy.tsx";
import LaborLaw from "./pages/demorule/LaborLaw.tsx";
import OwnershipCorporation from "./pages/demorule/OwnershipCorporation.tsx";
import Innovations from "./pages/demorule/Innovations.tsx";
import Chaordic from "./pages/demorule/Chaordic.tsx";
import MaineRegions from "./pages/demorule/MaineRegions.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Demorule Routes */}
          <Route path="/demorule/rationale" element={<Rationale />} />
          <Route path="/demorule/firstprinciples" element={<FirstPrinciples />} />
          <Route path="/demorule/partnership" element={<Partnership />} />
          <Route path="/demorule/initiative" element={<Initiative />} />
          <Route path="/demorule/amendment" element={<Amendment />} />
          <Route path="/demorule/act" element={<Act />} />
          <Route path="/demorule/constitutionality" element={<Constitutionality />} />
          <Route path="/demorule/actionplan" element={<ActionPlan />} />
          <Route path="/demorule/warpeace" element={<WarPeace />} />
          <Route path="/demorule/switzerland" element={<SwitzerlandDemocracy />} />
          <Route path="/demorule/consensualdemo" element={<ConsensualDemocracy />} />
          <Route path="/demorule/laborlaw" element={<LaborLaw />} />
          <Route path="/demorule/ownership" element={<OwnershipCorporation />} />
          <Route path="/demorule/innovations" element={<Innovations />} />
          <Route path="/demorule/chaordic" element={<Chaordic />} />
          <Route path="/demorule/maine/:region" element={<MaineRegions />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
