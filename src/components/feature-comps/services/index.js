import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { headerMenu } from "../../../constants/header-menu";

const Services = () => {
  const navigate = useNavigate();
  return (
    <div className="px-3 py-6 md:px-8 md:py-6">
      <div className="flex flex-col items-start">
        <h1 className="text-[1.8rem] md:text-[2.5rem] md:tracking-[4px]">
          FRLSH Home Guard (Building Wires)
        </h1>
        <div className="mt-2 mb-4 flex flex-col gap-2 tracking-normal text-sm md:text-lg font-light text-wrap">
          <span>
            Our FRLSH (Flame Retardant Low Smoke Low Halogen) category is
            specifically designed for internal wiring in homes, apartments, and
            high-rise buildings. These wires are the first line of defense
            against electrical fires. In the event of a short circuit, the
            specialized insulation ensures that the fire does not spread, and
            the "Low Smoke" property maintains visibility for safe evacuation.
          </span>
          <span>
            Key Features: Lead-free insulation, high-purity electrolytic copper,
            and anti-rodent protection.
          </span>
          <span>
            Best For: Internal house wiring, lighting circuits, and general
            power outlets.
          </span>
        </div>
        <img
          src="https://media.istockphoto.com/id/1409755712/photo/i-need-to-cut-this-cable-here.jpg?s=612x612&w=0&k=20&c=d5ItjKo_0e-ZPoCXDqbX_omyNSeNpLghhuqrduegOOU="
          className="w-full md:w-[45%] h-[22rem] object-cover"
          alt="Services at Transglobaltl"
        />
        <Button
          variant="contained"
          sx={{ marginTop: "1rem", backgroundColor: "#172554" }}
          onClick={() => {
            navigate(headerMenu[headerMenu.length - 1].route);
          }}
          aria-label="Contactus"
        >
          Contact us
        </Button>
      </div>
      <div className="flex flex-col items-end my-8 md:my-0">
        <h1 className="text-[1.8rem] md:text-[2.5rem] md:tracking-[4px]">
          Industrial Heavy-Duty (Power Cables)
        </h1>
        <div className="mt-2 mb-4 flex flex-col gap-2 tracking-normal text-sm md:text-lg font-light text-wrap">
          <span>
            Designed for the rigors of industrial and commercial use, this
            category focuses on high-capacity energy transmission. These wires
            are engineered to handle continuous high-voltage loads without
            overheating, making them ideal for factories, warehouses, and
            commercial complexes. With a thicker insulation profile and superior
            heat dissipation, our heavy-duty range ensures that your machinery
            and main power lines remain operational 24/7.
          </span>
          <span>
            Key Features: High thermal stability, ISO 9001 certified quality,
            and enhanced mechanical strength.
          </span>
          <span>
            Best For: Main supply lines, heavy machinery, industrial motors, and
            centralized AC plants.
          </span>
        </div>
        <img
          src="https://media.istockphoto.com/id/2202100777/photo/high-voltage-power-lines-at-sunset-with-digital-energy-flow.jpg?s=612x612&w=0&k=20&c=el0Odua3pwYjRuTBh-nE_b07I17klW9Fv8_MhGKJIEQ="
          className="w-full md:w-[45%] h-[22rem] object-cover"
          alt="Services at Transglobaltl"
        />
        <Button
          variant="contained"
          sx={{ marginTop: "1rem", backgroundColor: "#172554" }}
          onClick={() => {
            navigate(headerMenu[headerMenu.length - 1].route);
          }}
          aria-label="Contactus"
        >
          Contact us
        </Button>
      </div>
      <div className="flex flex-col items-start">
        <h1 className="text-[1.8rem] md:text-[2.5rem] md:tracking-[4px]">
          Eco-Shield Submersible & Specialty Wires
        </h1>
        <div className="mt-2 mb-4 flex flex-col gap-2 tracking-normal text-sm md:text-lg font-light text-wrap">
          <span>
            Our Specialty category includes wires designed for specific
            environmental challenges, such as underground water pumps or outdoor
            installations. These wires feature a unique moisture-resistant
            jacket and reinforced insulation to prevent leakage even when
            submerged or exposed to damp conditions. Built with high-grade PVC
            and pure copper, they offer the perfect balance of flexibility and
            ruggedness.
          </span>
          <span>
            Key Features: Water-resistant coating, 20-year warranty, and ISO
            14001 environmental compliance.
          </span>
          <span>
            Best For: Submersible pumps, garden lighting, agricultural motors,
            and outdoor security systems.
          </span>
        </div>
        <img
          src="https://media.istockphoto.com/id/177306443/photo/cable.jpg?s=612x612&w=0&k=20&c=9Riy3XID5pG8-ffdWOMC5CxC8yPkApnMorOAK0G_4OQ="
          className="w-full md:w-[45%] h-[22rem] object-cover"
          alt="Serivces at Transglobaltl"
        />
        <Button
          variant="contained"
          sx={{ marginTop: "1rem", backgroundColor: "#172554" }}
          onClick={() => {
            navigate(headerMenu[headerMenu.length - 1].route);
          }}
          aria-label="Contactus"
        >
          Contact us
        </Button>
      </div>
    </div>
  );
};
export default Services;
