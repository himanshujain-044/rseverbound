import ImgSlider from "../../shared-comps/img-slider";
import { offersCard, images } from "../../../utilities/utilsItem";

const Home = () => {
  return (
    <div className="w-full h-full">
      <div className="relative">
        <div className="z-[1] absolute text-[#172554] w-[90%] m-auto h-max md:w-[32rem] rounded-[4px] p-[1rem] bottom-2 md:bottom-[2rem] left-2 md:left-[1rem] bg-slate-100 opacity-[0.75] ml-1 md:ml-4">
          <h1 className="text-[24px] md:text-[40px] font-bold">Welcome</h1>
          <div className="tracking-normal md:tracking-[1px] text-sm md:text-base">
            Welcome to the RS Ever Bound, offering a wide range of high-quality
            electrical cables to meet diverse needs. As a leading trader, we
            specialize in multiple categories including PVC wires, aluminium
            wires in various specifications, electrical house wires, and
            multistrand wires.
          </div>
        </div>
        <ImgSlider speed={0.5}>
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index}`}
              // Ensure min-width is set so images don't shrink
              className="w-full min-w-full h-[24rem] md:h-[34rem] object-cover"
            />
          ))}
        </ImgSlider>
      </div>
      <div className="px-3 md:px-8 py-8 flex flex-col gap-6">
        <div className="flex flex-col md:tracking-[1px] gap-y-2">
          <strong className="text-xl md:text-2xl">
            Why Choose Our Premium Cables?
          </strong>
          <span className="text-sm md:text-base">
            When it comes to powering your infrastructure, compromise isn't an
            option. Our cables are engineered using cutting-edge technology to
            provide a seamless blend of safety, efficiency, and longevity. We
            understand that reliability is measured in decades, not days, which
            is why every meter of our product is crafted to exceed industry
            standards.
          </span>
        </div>
        <div className="flex flex-col md:tracking-[1px] gap-y-2">
          <strong className="text-xl md:text-2xl">
            The Advantage of Precision Engineering
          </strong>
          <span className="text-sm md:text-base">
            Our commitment to quality is built into the very core of our
            products. We offer a Guaranteed Length on every coil, ensuring you
            get exactly what you pay for without the worry of short-rolls. By
            utilizing High-Purity Electrolytic Copper, we minimize resistance
            and heat buildup, significantly reducing your energy costs and
            enhancing electrical conductivity.
          </span>
        </div>
        <div className="flex flex-col items-center my-4">
          <strong className="tracking-[2px] text-4xl md:text-[2.5rem]">
            What We Offer
          </strong>

          <ImgSlider classes="gap-4 py-6" speed={1}>
            {[...offersCard, ...offersCard].map((card, i) => (
              <div
                key={i}
                className="min-w-[350px] min-h-[40px] flex-wrap p-3 rounded-md flex flex-col bg-white gap-y-1 shadow-md shadow-[#17255433] text-justify whitespace-break-spaces"
              >
                <strong className="text-base">{card.title}</strong>
                <span className="text-sm py-2">{card.description}</span>
              </div>
            ))}
          </ImgSlider>
        </div>
      </div>
    </div>
  );
};
export default Home;
