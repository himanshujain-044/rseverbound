import React from "react";

const AboutUs = () => {
  return (
    <div className="px-6 md:px-12 py-8">
      <div className="flex flex-col gap-[1rem] [&_p]:tracking-[1px]">
        <img
          src="https://media.istockphoto.com/id/174914807/photo/overview-of-worker-testing-copper-coils.jpg?s=612x612&w=0&k=20&c=XCxu6oipJyausW2DqDfRyQUDCl6HLWAizB6hu7PoK4g="
          className="w-full md:w-[70%] m-auto object-contain md:h-[400px] mb-6"
          alt="about-transglobaltl"
        />

        <p className="text-sm md:text-base py-1 tracking-wide">
          At the heart of every home and commercial space lies a network of
          energy that deserves the highest level of protection. We are a premier
          manufacturer and supplier of specialized electrical solutions,
          dedicated to providing high-performance FRLSH (Flame Retardant Low
          Smoke Low Halogen) wires.
        </p>
        <p className="text-sm md:text-base py-1 tracking-wide">
          Our mission is simple: to eliminate electrical hazards through
          superior engineering. While many in the industry focus solely on
          price, we focus on integrity. By ensuring every meter of our cable
          meets strict Copper Purity standards and Guaranteed Length promises,
          we provide the literal foundation for a safer, more efficient future.
        </p>
        <p className="text-sm md:text-base py-1 tracking-wide">
          With certifications including ISI 694, ISO 9001, and ISO 14001, we
          don’t just claim quality—we prove it. From our specialized anti-rodent
          insulation to our industry-leading 20-Year Warranty, our products are
          built to outlast and outperform, giving homeowners and contractors
          total peace of mind.
        </p>
        <p className="text-sm md:text-base py-1 tracking-wide">
          Beyond the technical specs, our company is defined by a relentless
          pursuit of electrical perfection. We believe that a wire is more than
          just a copper conductor; it is the lifeline of your modern lifestyle.
          This is why every single batch of our FRLSH range undergoes rigorous
          stress-testing—from high-voltage endurance to smoke density
          analysis—ensuring that what reaches your site is nothing short of
          flawless.
        </p>
      </div>
      <div className="flex md:flex-row flex-col items-start gap-6 my-8 md:my-12">
        {/* <img
          src="https://media.gettyimages.com/id/530281675/photo/happy-businessman-sitting-in-office-lobby.jpg?s=2048x2048&w=gi&k=20&c=wSQeW8DksjuTTcZoSwo6MfLkCzKUM9ApkeYkpjNSnqk="
          alt="About Us"
          loading="lazy"
          className="bg-cover bg-no-repeat bg-fixed bg-center md:h-[20%] md:w-[40%] w-full"
        /> */}
        <div className="flex flex-col items-center justify-center gap-[1.25rem] mb-4">
          <h1 className="text-black text-2xl md:text-[1.875rem] font-medium">
            SHUBHANSHU JAIN – CEO
          </h1>
          <hr className="border-none w-full h-[0.0625rem] bg-[#172554] mb-[0.5rem]" />
          <p className="text-gray-600 text-justify leading-[1.25rem] tracking-[2px] h-min">
            Shubhanshu Jain is a visionary leader in the electrical
            manufacturing sector, driven by a commitment to safety and
            innovation. Under his leadership, the company has transitioned from
            a traditional wire supplier to a safety-first brand that prioritizes
            the lives of the people behind the walls. With a deep understanding
            of the technical nuances of the Indian electrical market—from the
            volatility of copper pricing to the critical need for
            flame-retardant materials—Shubhanshu has championed a transparent
            business model. He pioneered the practice of providing detailed
            technical specifications, such as exact coil weights and purity
            metrics, ensuring that every customer knows exactly what they are
            installing.
          </p>
        </div>
      </div>
      {/* <div className="flex flex-col items-center gap-6 mt-2">
        <strong className="text-3xl md:text-5xl py-4">LEADERSHIP</strong>
        <div className="flex md:flex-row flex-col gap-6 px-0">
          <img
            src="https://www.matrixservice.com/wp-content/uploads/2022/03/Shawn-Payne-200x200-1.jpg"
            className="object-cover md:w-[200px] w-full"
          />
          <div className="flex flex-col gap-y-1">
            <strong className="tracking-[3px]">Frank Capristo</strong>
            <span className="tracking-[3px] text-[0.65rem] md:text-sm font-medium">
              Vice President, Operations - Turnaround & Plant Services
            </span>
            <span className="tracking-[1px] md:text-base text-sm font-light">
              Frank Capristo serves as Vice President of Turnaround & Plant
              Services for Matrix Service. He joined Matrix in 2013, most
              recently holding the position of General Manager, Maintenance &
              Plant Services and before that, as Project Sponsor for the BP
              Cherry Point Refinery where he established a strong reputation for
              safety and client relationship leadership. Before joining Matrix
              Service, he held several leadership positions at Brinderon, Jacobs
              Engineering and Fluor Corporation.
            </span>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-4 px-0">
          <img
            src="https://www.matrixservice.com/wp-content/uploads/2021/07/ExecutiveHeadshots-MarkFillman-web_200x200.jpg"
            className="object-cover md:w-[200px] w-full"
          />
          <div className="flex flex-col gap-y-1">
            <strong className="tracking-[3px]">Mark Fillman</strong>
            <span className="tracking-[3px] text-[0.65rem] md:text-sm font-medium">
              Vice President, Operations - AST & Specialty Vessels
            </span>
            <span className="tracking-[1px] md:text-base text-sm font-light">
              Mark Fillman is Vice President of Operations, AST & Specialty
              Vessels, for Matrix Service. He joined Matrix in 1998 and has
              served in several roles within the storage products area
              throughout his career including Project Manager, Commercial
              Contracts Manager, Divisional Manager, and General Manager. Mr.
              Fillman has advanced the historical core AST business at Matrix
              and lead the development of the Company’s cryogenic and specialty
              vessel storage product and service lines.
            </span>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-4 px-0">
          <img
            src="https://www.matrixservice.com/wp-content/uploads/2024/08/Longer-headshot.jpg"
            className="object-cover md:w-[200px] w-full"
          />
          <div className="flex flex-col gap-y-1">
            <strong className="tracking-[3px]">Terry Longer</strong>
            <span className="tracking-[3px] text-[0.65rem] md:text-sm font-medium">
              Vice President, Operations - National Construction Group
            </span>
            <span className="tracking-[1px] md:text-base text-sm font-light">
              Terry Longer is the Vice President of Operations, National
              Construction Group, at Matrix Service. Mr. Longer drives the
              development and implementation of strategic business initiatives
              while overseeing the overall operations and performance, ensuring
              the safe and successful execution of quality projects. Before
              joining Matrix, Mr. Longer served as Vice President of
              Construction for The Americas at Technip Energies.
            </span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AboutUs;
