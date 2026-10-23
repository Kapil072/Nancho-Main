import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Pages
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const OnlineResources = lazy(() => import("./pages/OnlineResources.tsx"));
const CoupNews = lazy(() => import("./pages/CoupNews.tsx"));
const CorporatismWire = lazy(() => import("./pages/CorporatismWire.tsx"));
const VideoInspirations = lazy(() => import("./pages/VideoInspirations.tsx"));
const PlotToSeizeWhiteHouse = lazy(() => import("./pages/PlotToSeizeWhiteHouse.tsx"));
const VitalBackground = lazy(() => import("./pages/VitalBackground.tsx"));
const IsThisGatheringForYou = lazy(() => import("./pages/IsThisGatheringForYou.tsx"));
const WhyNow = lazy(() => import("./pages/WhyNow.tsx"));
const Participants = lazy(() => import("./pages/Participants.tsx"));
const Resources = lazy(() => import("./pages/Resources.tsx"));
const RecommendedBooks = lazy(() => import("./pages/RecommendedBooks.tsx"));
const RecommendedFilms = lazy(() => import("./pages/RecommendedFilms.tsx"));
const TreacheryWithoutConsequence = lazy(() => import("./pages/TreacheryWithoutConsequence.tsx"));
const MediaPolicy = lazy(() => import("./pages/MediaPolicy.tsx"));
const SatyaSam = lazy(() => import("./pages/SatyaSam.tsx"));
const MapsAndLogistics = lazy(() => import("./pages/MapsAndLogistics.tsx"));
const ProgramComponents = lazy(() => import("./pages/ProgramComponents.tsx"));
const LinkBanners = lazy(() => import("./pages/LinkBanners.tsx"));
const Links = lazy(() => import("./pages/Links.tsx"));

const queryClient = new QueryClient();

const Spinner = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Suspense fallback={<Spinner />}>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Index />} />

            {/* Main nav pages */}
            <Route path="/coup-news/" element={<CoupNews />} />
            <Route path="/coup-news" element={<CoupNews />} />
            <Route path="/resources/" element={<Resources />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/video-inspirations/" element={<VideoInspirations />} />
            <Route path="/video-inspirations" element={<VideoInspirations />} />
            <Route path="/corporatism-wire/" element={<CorporatismWire />} />
            <Route path="/corporatism-wire" element={<CorporatismWire />} />
            <Route path="/the-plot-to-seize-the-white-house/" element={<PlotToSeizeWhiteHouse />} />
            <Route path="/the-plot-to-seize-the-white-house" element={<PlotToSeizeWhiteHouse />} />
            <Route path="/online-resources/" element={<OnlineResources />} />
            <Route path="/online-resources" element={<OnlineResources />} />
            <Route path="/links/" element={<Links />} />
            <Route path="/links" element={<Links />} />

            {/* Resources sub-pages */}
            <Route path="/recommended-books/" element={<RecommendedBooks />} />
            <Route path="/recommended-books" element={<RecommendedBooks />} />
            <Route path="/recommended-films/" element={<RecommendedFilms />} />
            <Route path="/recommended-films" element={<RecommendedFilms />} />

            {/* Summit detail pages (right sidebar) */}
            <Route path="/vital-background/" element={<VitalBackground />} />
            <Route path="/vital-background" element={<VitalBackground />} />
            <Route path="/is-this-gathering-for-you/" element={<IsThisGatheringForYou />} />
            <Route path="/is-this-gathering-for-you" element={<IsThisGatheringForYou />} />
            <Route path="/participants/" element={<Participants />} />
            <Route path="/participants" element={<Participants />} />
            <Route path="/why-now/" element={<WhyNow />} />
            <Route path="/why-now" element={<WhyNow />} />
            <Route path="/program-components/" element={<ProgramComponents />} />
            <Route path="/program-components" element={<ProgramComponents />} />
            <Route path="/maps-and-logistics/" element={<MapsAndLogistics />} />
            <Route path="/maps-and-logistics" element={<MapsAndLogistics />} />
            <Route path="/link-banners/" element={<LinkBanners />} />
            <Route path="/link-banners" element={<LinkBanners />} />
            <Route path="/media-policy/" element={<MediaPolicy />} />
            <Route path="/media-policy" element={<MediaPolicy />} />
            <Route path="/satya-sam/" element={<SatyaSam />} />
            <Route path="/satya-sam" element={<SatyaSam />} />
            <Route path="/treachery-without-consequence/" element={<TreacheryWithoutConsequence />} />
            <Route path="/treachery-without-consequence" element={<TreacheryWithoutConsequence />} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
