import Hero78 from "@/components/heroSection";
import { Cta34 } from "@/components/cta";
import { Download2 } from "@/components/download";
import { Projects5 } from "@/components/projects";
import { BookADemo2 } from "@/components/bookAdemo";
import { ProductList1 } from "@/components/productsList";
import { Pricing11 } from "@/components/pricingTable";
import { Stats8 } from "@/components/stats";
import { ProductCategories1 } from "@/components/productCategories";

export default function Home() {
  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black">
        <main className="flex flex-1 max-w-8xl flex-col justify-between py-4 bg-white dark:bg-black sm:items-start">
            <Hero78 />
        </main>
        <Stats8 />
        <ProductCategories1 />
        <Projects5 />
        <Cta34 />
        <ProductList1 />
        <Pricing11 />
        <BookADemo2 />
      </div>
      <Download2 />
    </>
  );
}
