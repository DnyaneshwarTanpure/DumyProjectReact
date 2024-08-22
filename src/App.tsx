import React from "react"; // Import React
import "./App.css";
import "./index.css";
import HomeScreen from "./views/pages/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WalletConnect from "./views/pages/WalletConnect";
import OrderPage from "./views/pages/OrderPage";
import Desktop1 from "./views/pages/Desktop1";
import AssetsPage from "./views/pages/AssetsPage";
import Desktop3 from "./views/pages/Desktop3";
import { WagmiProvider } from "wagmi";
import { config } from "./components/Config/WalletConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainHomeScreen from "./views/pages/MainHomeScreen";
import BLCStaking from "./views/pages/BLCStaking";
import Desktop7 from "./views/pages/Desktop7";
// For dropdown functionality
export default function App() {
  const queryClient = new QueryClient();
  return (
    <div className="app">
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainHomeScreen />} />
              <Route path="/HomeScreen" element={<HomeScreen />} />
              <Route path="/WalletConnect" element={<WalletConnect />} />
              <Route path="/OrderPage" element={<OrderPage />} />
              <Route path="/Desktop1" element={<Desktop1 />} />
              <Route path="/AssetsPage" element={<AssetsPage />} />
              <Route path="/Desktop3" element={<Desktop3 />} />
              <Route path="/BLCStaking" element={<BLCStaking />} />
              <Route path="/Desktop7" element={<Desktop7 />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
}
//Users/alien/Desktop/DumyProjectReact/src/assets/Logo.png
