import HeroSection from '../../components/sections/HeroSection/HeroSection';
import FeaturedCategories from '../../components/sections/FeaturedCategories/FeaturedCategories';
import PromoRow from '../../components/sections/PromoRow/PromoRow';
import ProductsSection from '../../components/sections/ProductsSection/ProductsSection';
import DiscountSection from '../../components/sections/DiscountSection/DiscountSection';
import WeeklyDeals from '../../components/sections/WeeklyDeals/WeeklyDeals';
import Testimonials from '../../components/sections/Testimonials/Testimonials';
import NewsBlog from '../../components/sections/NewsBlog/NewsBlog';
import FAQ from '../../components/sections/FAQ/FAQ';
import HappyCustomers from '../../components/sections/HappyCustomers/HappyCustomers';
import { featuredProducts, bestSellerProducts } from '../../data/products';

function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedCategories />
      <PromoRow />
      <ProductsSection
        eyebrow="Products"
        title="Featured Products"
        highlight="Products"
        products={featuredProducts}
      />
      <DiscountSection />
      <WeeklyDeals />
      <ProductsSection
        eyebrow="Best Seller"
        title="Best Seller Products"
        highlight="Products"
        products={bestSellerProducts}
      />
      <Testimonials />
      <NewsBlog />
      <FAQ />
      <HappyCustomers />
    </main>
  );
}

export default Home;
