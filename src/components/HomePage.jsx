import Landing from "../components/Landing";
import WhyOurProducts from "../components/WhyOurProducts";
 import BestSellingSlider from "../components/BestSellingSlider";
import FeelBeautifulSection from "../components/FeelBeautifulSection";

import ProductFilterShowcase from "../components/ProductFilterShowcase"

import FaqProductSection from "../components/FaqProductSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Landing />
      <WhyOurProducts />
      <BestSellingSlider />
      <FeelBeautifulSection />

      <ProductFilterShowcase />


      <FaqProductSection />
      <Footer /> 
    </>
  );
}
