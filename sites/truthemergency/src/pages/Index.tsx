import { Suspense, lazy } from "react";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";

// Lazy load the heavy MainContent component
const MainContent = lazy(() => import("@/components/MainContent"));

const Index = () => {
  return (
    <div className="min-h-screen bg-white px-0 sm:px-4 py-4">
      <div className="mx-auto max-w-[1150px] w-full bg-white shadow-lg min-h-screen">
        <Header />
        <NavBar />

        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_220px] border-t border-gray-300">
          <aside className="p-4 border-r border-gray-300 bg-white">
            <LeftSidebar />
          </aside>

          <main className="p-6 md:p-10 border-r border-gray-300 min-w-0 bg-white">
            <Suspense fallback={
              <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-lg text-gray-600">Loading content...</p>
                </div>
              </div>
            }>
              <MainContent />
            </Suspense>
          </main>

          <aside className="p-4 bg-white">
            <RightSidebar />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Index;