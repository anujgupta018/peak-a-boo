import Image from "next/image";
import PyramidImage from "../app/assets/pyramid.png";
import ProductImage from "../app/assets/product-image.png";
import tubeImage from "../app/assets/tube.png";
function ProductShowcase() {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track your progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional,responsive,
            SaaS website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <Image src={ProductImage} alt="Product" className="mt-10" />
          <Image
            src={PyramidImage}
            alt="Pyramid"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
          />
          <Image
            src={tubeImage}
            alt="tube"
            height={248}
            className="hidden md:block absolute bottom-24 -left-36"
          />
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;
