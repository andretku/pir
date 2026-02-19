import { useEffect } from "react";
import { useLocation } from "react-router";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Welcome from "@/components/Welcome";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="page-layout">
      <div id="top" />
      <SEOHead />
      <div className="page-content">
        <Header />
        <TopBar />
        <Welcome />
        <Services />
        <Partners />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
