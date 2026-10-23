import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import CorpRule from "./pages/CorpRule.tsx";
import FMission from "./pages/FMission.tsx";
import FdlOrg from "./pages/FdlOrg.tsx";
import FdlInits from "./pages/FdlInits.tsx";
import FdlPaper from "./pages/FdlPaper.tsx";
import FdlLinks from "./pages/FdlLinks.tsx";
import FdlAlert from "./pages/FdlAlert.tsx";

// Generated Subpage Component Imports
import KashmirOutlookf from "./pages/KashmirOutlookf.tsx";
import KashmirJknyt1 from "./pages/KashmirJknyt1.tsx";
import KashmirJkstates from "./pages/KashmirJkstates.tsx";
import KashmirJkplea from "./pages/KashmirJkplea.tsx";
import KashmirKashplus from "./pages/KashmirKashplus.tsx";
import KashmirPledges from "./pages/KashmirPledges.tsx";
import KashmirHapkash from "./pages/KashmirHapkash.tsx";
import Swissdd1 from "./pages/Swissdd1.tsx";
import KashmirNahmad from "./pages/KashmirNahmad.tsx";
import Jehangir from "./pages/Jehangir.tsx";
import Imran from "./pages/Imran.tsx";
import Khosla from "./pages/Khosla.tsx";
import Timornet from "./pages/Timornet.tsx";
import Fdljrnl from "./pages/Fdljrnl.tsx";
import Fdljrnl2 from "./pages/Fdljrnl2.tsx";
import Fdljrnl4 from "./pages/Fdljrnl4.tsx";
import Fdljrnl6 from "./pages/Fdljrnl6.tsx";
import Fdlburm2 from "./pages/Fdlburm2.tsx";
import Fdessay1 from "./pages/Fdessay1.tsx";
import Fdessay2 from "./pages/Fdessay2.tsx";
import Fdessay3 from "./pages/Fdessay3.tsx";
import Fdessay4 from "./pages/Fdessay4.tsx";
import Newmedia from "./pages/Newmedia.tsx";
import Jrhorta from "./pages/Jrhorta.tsx";
import Maxstahl from "./pages/Maxstahl.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/index.html" element={<Index />} />
          <Route path="/fmission.html" element={<FMission />} />
          <Route path="/fdlorg.html" element={<FdlOrg />} />
          <Route path="/fdlinits.html" element={<FdlInits />} />
          <Route path="/fdlpaper.html" element={<FdlPaper />} />
          <Route path="/fdllinks.html" element={<FdlLinks />} />
          <Route path="/fdlalert.html" element={<FdlAlert />} />
          <Route path="/fmission" element={<FMission />} />
          <Route path="/fdlorg" element={<FdlOrg />} />
          <Route path="/fdlinits" element={<FdlInits />} />
          <Route path="/fdlpaper" element={<FdlPaper />} />
          <Route path="/fdllinks" element={<FdlLinks />} />
          <Route path="/fdlalert" element={<FdlAlert />} />
          <Route path="/bigbody/corprule" element={<CorpRule />} />
          
          {/* Generated Routes */}
          <Route path="/kashmir/outlookf.html" element={<KashmirOutlookf />} />
          <Route path="/kashmir/outlookf" element={<KashmirOutlookf />} />
          <Route path="/kashmir/jknyt1.html" element={<KashmirJknyt1 />} />
          <Route path="/kashmir/jknyt1" element={<KashmirJknyt1 />} />
          <Route path="/kashmir/jkstates.html" element={<KashmirJkstates />} />
          <Route path="/kashmir/jkstates" element={<KashmirJkstates />} />
          <Route path="/kashmir/jkplea.html" element={<KashmirJkplea />} />
          <Route path="/kashmir/jkplea" element={<KashmirJkplea />} />
          <Route path="/kashmir/kashplus.html" element={<KashmirKashplus />} />
          <Route path="/kashmir/kashplus" element={<KashmirKashplus />} />
          <Route path="/kashmir/pledges.html" element={<KashmirPledges />} />
          <Route path="/kashmir/pledges" element={<KashmirPledges />} />
          <Route path="/kashmir/hapkash.html" element={<KashmirHapkash />} />
          <Route path="/kashmir/hapkash" element={<KashmirHapkash />} />
          <Route path="/swissdd1.html" element={<Swissdd1 />} />
          <Route path="/swissdd1" element={<Swissdd1 />} />
          <Route path="/kashmir/nahmad.html" element={<KashmirNahmad />} />
          <Route path="/kashmir/nahmad" element={<KashmirNahmad />} />
          <Route path="/kashmir/nahmad.htm" element={<KashmirNahmad />} />
          <Route path="/jehangir.html" element={<Jehangir />} />
          <Route path="/jehangir" element={<Jehangir />} />
          <Route path="/imran.html" element={<Imran />} />
          <Route path="/imran" element={<Imran />} />
          <Route path="/khosla.html" element={<Khosla />} />
          <Route path="/khosla" element={<Khosla />} />
          <Route path="/timornet.html" element={<Timornet />} />
          <Route path="/timornet" element={<Timornet />} />
          <Route path="/fdljrnl.html" element={<Fdljrnl />} />
          <Route path="/fdljrnl" element={<Fdljrnl />} />
          <Route path="/fdljrnl2.html" element={<Fdljrnl2 />} />
          <Route path="/fdljrnl2" element={<Fdljrnl2 />} />
          <Route path="/fdljrnl4.html" element={<Fdljrnl4 />} />
          <Route path="/fdljrnl4" element={<Fdljrnl4 />} />
          <Route path="/fdljrnl6.html" element={<Fdljrnl6 />} />
          <Route path="/fdljrnl6" element={<Fdljrnl6 />} />
          <Route path="/fdlburm2.html" element={<Fdlburm2 />} />
          <Route path="/fdlburm2" element={<Fdlburm2 />} />
          <Route path="/fdessay1.html" element={<Fdessay1 />} />
          <Route path="/fdessay1" element={<Fdessay1 />} />
          <Route path="/fdessay2.html" element={<Fdessay2 />} />
          <Route path="/fdessay2" element={<Fdessay2 />} />
          <Route path="/fdessay3.html" element={<Fdessay3 />} />
          <Route path="/fdessay3" element={<Fdessay3 />} />
          <Route path="/fdessay4.html" element={<Fdessay4 />} />
          <Route path="/fdessay4" element={<Fdessay4 />} />
          <Route path="/newmedia.html" element={<Newmedia />} />
          <Route path="/newmedia" element={<Newmedia />} />
          <Route path="/jrhorta.html" element={<Jrhorta />} />
          <Route path="/jrhorta" element={<Jrhorta />} />
          <Route path="/maxstahl.html" element={<Maxstahl />} />
          <Route path="/maxstahl" element={<Maxstahl />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
