import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "./pages/NotFound.tsx";

import Index from "./pages/Index";
import Cptalk from "./pages/Cptalk";
import Cpnader from "./pages/Cpnader";
import Cpmonbio from "./pages/Cpmonbio";
import Predator from "./pages/Predator";
import AdbcorpI from "./pages/AdbcorpI";
import Econom3 from "./pages/Econom3";
import Corptime from "./pages/Corptime";
import Cpbother from "./pages/Cpbother";
import Cpchange from "./pages/Cpchange";
import Laborcp from "./pages/Laborcp";
import Page15bigngo from "./pages/Page15bigngo";
import CPattack from "./pages/CPattack";
import Cpepope from "./pages/Cpepope";
import Paulccp1 from "./pages/Paulccp1";
import Cpnadrsa from "./pages/Cpnadrsa";
import Wilpfint from "./pages/Wilpfint";
import Wilpf1 from "./pages/Wilpf1";
import Wilguide from "./pages/Wilguide";
import Page14amend from "./pages/Page14amend";
import Corpwant from "./pages/Corpwant";
import Cpmillon from "./pages/Cpmillon";

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
          <Route path="/cptalk.html" element={<Cptalk />} />
          <Route path="/cptalk" element={<Cptalk />} />
          <Route path="/cpnader.html" element={<Cpnader />} />
          <Route path="/cpnader" element={<Cpnader />} />
          <Route path="/cpmonbio.html" element={<Cpmonbio />} />
          <Route path="/cpmonbio" element={<Cpmonbio />} />
          <Route path="/predator.html" element={<Predator />} />
          <Route path="/predator" element={<Predator />} />
          <Route path="/adbcorpI.html" element={<AdbcorpI />} />
          <Route path="/adbcorpI" element={<AdbcorpI />} />
          <Route path="/econom3.html" element={<Econom3 />} />
          <Route path="/econom3" element={<Econom3 />} />
          <Route path="/corptime.html" element={<Corptime />} />
          <Route path="/corptime" element={<Corptime />} />
          <Route path="/cpbother.html" element={<Cpbother />} />
          <Route path="/cpbother" element={<Cpbother />} />
          <Route path="/cpchange.html" element={<Cpchange />} />
          <Route path="/cpchange" element={<Cpchange />} />
          <Route path="/labor&cp.html" element={<Laborcp />} />
          <Route path="/labor&cp" element={<Laborcp />} />
          <Route path="/15bigngo.html" element={<Page15bigngo />} />
          <Route path="/15bigngo" element={<Page15bigngo />} />
          <Route path="/CPattack.html" element={<CPattack />} />
          <Route path="/CPattack" element={<CPattack />} />
          <Route path="/cpepope.html" element={<Cpepope />} />
          <Route path="/cpepope" element={<Cpepope />} />
          <Route path="/paulccp1.html" element={<Paulccp1 />} />
          <Route path="/paulccp1" element={<Paulccp1 />} />
          <Route path="/cpnadrsa.html" element={<Cpnadrsa />} />
          <Route path="/cpnadrsa" element={<Cpnadrsa />} />
          <Route path="/wilpfint.html" element={<Wilpfint />} />
          <Route path="/wilpfint" element={<Wilpfint />} />
          <Route path="/wilpf1.html" element={<Wilpf1 />} />
          <Route path="/wilpf1" element={<Wilpf1 />} />
          <Route path="/wilguide.html" element={<Wilguide />} />
          <Route path="/wilguide" element={<Wilguide />} />
          <Route path="/14amend.html" element={<Page14amend />} />
          <Route path="/14amend" element={<Page14amend />} />
          <Route path="/corpwant.html" element={<Corpwant />} />
          <Route path="/corpwant" element={<Corpwant />} />
          <Route path="/cpmillon.html" element={<Cpmillon />} />
          <Route path="/cpmillon" element={<Cpmillon />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
