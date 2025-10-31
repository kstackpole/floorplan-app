import { useEffect, } from "react";
import type { SVGProps } from "../types/floorplan";
import useFPState from "../store/useFPState";
import WaterSaverGame from "../components/games/WaterSaverGame";
import InsulationSavingsGame from "../components/games/InsulationSavingsGame";
import WindowIRGame from "../components/games/WindowIRGame";
import MudroomMiniGame from "../components/games/MudroomMiniGame";




// LIFESTYLE FEATURES
export function DropZoneHotspot() {
  const { openGallery, openModal } = useFPState();

  const gallery = {
    title: "DROP ZONE",
    text: "Key zone off the garage offers storage for shoes for coats, shoes and backpacks coming in from the garage. Contain the clutter before entering the larger home.",
    index: 0,
    items: [
      {
        src: "https://www.richmondamerican.com//Content/Plans/Media-41332.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-41332.webp",
        alt: "Great room — view 1",
        meta: "View toward TV",
      },
      {
        src: "https://www.richmondamerican.com//Content/Plans/Media-41333.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-41333.webp",
        alt: "Great room — view 2",
        meta: "View toward kitchen",
      },
      {
        src: "https://www.richmondamerican.com//Content/Plans/Media-45980.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-45980.webp",
        alt: "Great room — view 3",
        meta: "Seating layout",
      },
    ],
  } as const;

  const open = () => {
    openGallery({ ...gallery, items: [...gallery.items] });
    openModal(); 
  };

  return (
    <g
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => e.key === "Enter" && open()}
      className="hotspot cursor-pointer"
      // make sure SVG transforms scale from the element center
      style={{ transformOrigin: "center", transformBox: "fill-box" }}
    >
      <circle className="dot" cx={600} cy={750} r={20} fill="#af272f" opacity={1} />
      <circle className="pulse" cx={600} cy={750} r={20} stroke="#af272f" fill="transparent" opacity={0.25} />
      <text x={600} y={754} textAnchor="middle" fill="white" fontSize={12}>
        1
      </text>
    </g>
  );
}
export function PantryHotspot() {
  const { openGallery, openModal } = useFPState();

  const gallery = {
    title: "OVERSIZED WALK-IN-PANTRY",
    text: "Tuck away appliances, baking supplies, dog food, and keep cabinets organized with this additional storage space.",
    index: 0,
    items: [
      {
        src: "https://www.richmondamerican.com//Content/Plans/Media-41332.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-41332.webp",
        alt: "Great room — view 1",
        meta: "View toward TV",
      },
      {
        src: "https://www.richmondamerican.com//Content/Plans/Media-41333.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-41333.webp",
        alt: "Great room — view 2",
        meta: "View toward kitchen",
      },
      {
        src: "https://www.richmondamerican.com//Content/Plans/Media-45980.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-45980.webp",
        alt: "Great room — view 3",
        meta: "Seating layout",
      },
    ],
  } as const;

  const open = () => {
    openGallery({ ...gallery, items: [...gallery.items] });
    openModal(); 
  };

  return (
    <g
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => e.key === "Enter" && open()}
      className="hotspot cursor-pointer"
      // make sure SVG transforms scale from the element center
      style={{ transformOrigin: "center", transformBox: "fill-box" }}
    >
      <circle className="dot" cx={450} cy={860} r={20} fill="#af272f" opacity={1} />
      <circle className="pulse" cx={450} cy={860} r={20} stroke="#af272f" fill="transparent" opacity={0.25} />
      <text x={450} y={864} textAnchor="middle" fill="white" fontSize={12}>
        2
      </text>
    </g>
  );
}
export function TechStationHotspot() {
  const { openGallery, openModal } = useFPState();

  const gallery = {
    title: "TECH STATION",
    text: "A built-in desk off the kitchen near the pantry provides a convenient spot to do homework, pay bills and charge electronics. ",
    index: 0,
    items: [
      {
        src: "https://www.richmondamerican.com//Content/Plans/Media-41332.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-41332.webp",
        alt: "Great room — view 1",
        meta: "View toward TV",
      },
      {
        src: "https://www.richmondamerican.com//Content/Plans/Media-41333.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-41333.webp",
        alt: "Great room — view 2",
        meta: "View toward kitchen",
      },
      {
        src: "https://www.richmondamerican.com//Content/Plans/Media-45980.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-45980.webp",
        alt: "Great room — view 3",
        meta: "Seating layout",
      },
    ],
  } as const;

  const open = () => {
    openGallery({ ...gallery, items: [...gallery.items] });
    openModal(); 
  };

  return (
    <g
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => e.key === "Enter" && open()}
      className="hotspot cursor-pointer"
      // make sure SVG transforms scale from the element center
      style={{ transformOrigin: "center", transformBox: "fill-box" }}
    >
      <circle className="dot" cx={330} cy={880} r={20} fill="#af272f" opacity={1} />
      <circle className="pulse" cx={330} cy={880} r={20} stroke="#af272f" fill="transparent" opacity={0.25} />
      <text x={330} y={884} textAnchor="middle" fill="white" fontSize={12}>
        3
      </text>
    </g>
  );
}
export function SmallPantryHotspot() {
  const { openGallery, openModal } = useFPState();

  const gallery = {
    title: "WALK-IN-PANTRY",
    text: "Tuck away appliances, baking supplies, dog food, and keep cabinets organized with this additional storage space.",
    index: 0,
    items: [
      {
        src: "https://www.richmondamerican.com//Content/Plans/Media-41332.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-41332.webp",
        alt: "Great room — view 1",
        meta: "View toward TV",
      },
      {
        src: "https://www.richmondamerican.com//Content/Plans/Media-41333.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-41333.webp",
        alt: "Great room — view 2",
        meta: "View toward kitchen",
      },
      {
        src: "https://www.richmondamerican.com//Content/Plans/Media-45980.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-45980.webp",
        alt: "Great room — view 3",
        meta: "Seating layout",
      },
    ],
  } as const;

  const open = () => {
    openGallery({ ...gallery, items: [...gallery.items] });
    openModal(); 
  };


  return (
    <g
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => e.key === "Enter" && open()}
      className="hotspot cursor-pointer"
      // make sure SVG transforms scale from the element center
      style={{ transformOrigin: "center", transformBox: "fill-box" }}
    >
      <circle className="dot" cx={370} cy={850} r={20} fill="#af272f" opacity={1} />
      <circle className="pulse" cx={370} cy={850} r={20} stroke="#af272f" fill="transparent" opacity={0.25} />
      <text x={370} y={854} textAnchor="middle" fill="white" fontSize={12}>
        2
      </text>
    </g>
  );
}
export function CabenitryHotspot() {
  const { openGallery, openModal, active } = useFPState(); // ← add active

  const gallery = {
    title: "EXTRA CABINETRY IN THE DINING AREA",
    text: "An extended wall of cabinetry in the dining area provides smart storage for appliances, dishware and seasonal entertaining items.",
    index: 0,
    items: [
      { src: "https://www.richmondamerican.com//Content/Plans/Media-41332.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-41332.webp",
        alt: "Great room — view 1", meta: "View toward TV" },
      { src: "https://www.richmondamerican.com//Content/Plans/Media-41333.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-41333.webp",
        alt: "Great room — view 2", meta: "View toward kitchen" },
      { src: "https://www.richmondamerican.com//Content/Plans/Media-45980.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-45980.webp",
        alt: "Great room — view 3", meta: "Seating layout" },
    ],
  } as const;

  const open = () => {
    openGallery({ ...gallery, items: [...gallery.items] });
    openModal();
  };

  // If the <g id="fifthBed"> group is active (i.e., active.fifthBed === true), decrement the label
  const label = 4 - (active?.fifthBed ? 1 : 0);

  return (
    <g
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => e.key === "Enter" && open()}
      className="hotspot cursor-pointer"
      style={{ transformOrigin: "center", transformBox: "fill-box" }}
    >
      <circle className="dot" cx={330} cy={640} r={20} fill="#af272f" opacity={1} />
      <circle className="pulse" cx={330} cy={640} r={20} stroke="#af272f" fill="transparent" opacity={0.25} />
      <text x={330} y={644} textAnchor="middle" fill="white" fontSize={12}>
        {label}
      </text>
    </g>
  );
}
export function LaundryHotspot() {
  const { openGallery, openModal, active } = useFPState(); // ← add active

  const gallery = {
    title: "LARGE CENTRALIZED LAUNDRY ROOM",
    text: "This centralized laundry room is convenient to all the bedrooms, plus offers cabinetry for cleaning supplies.",
    index: 0,
    items: [
      { src: "https://www.richmondamerican.com//Content/Plans/Media-41332.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-41332.webp",
        alt: "Great room — view 1", meta: "View toward TV" },
      { src: "https://www.richmondamerican.com//Content/Plans/Media-41333.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-41333.webp",
        alt: "Great room — view 2", meta: "View toward kitchen" },
      { src: "https://www.richmondamerican.com//Content/Plans/Media-45980.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-45980.webp",
        alt: "Great room — view 3", meta: "Seating layout" },
    ],
  } as const;

  const open = () => {
    openGallery({ ...gallery, items: [...gallery.items] });
    openModal();
  };

  // If the <g id="fifthBed"> group is active (i.e., active.fifthBed === true), decrement the label
  const label = 5 - (active?.fifthBed ? 1 : 0);

  return (
    <g
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => e.key === "Enter" && open()}
      className="hotspot cursor-pointer"
      style={{ transformOrigin: "center", transformBox: "fill-box" }}
    >
      <circle className="dot" cx={640} cy={370} r={20} fill="#af272f" opacity={1} />
      <circle className="pulse" cx={640} cy={370} r={20} stroke="#af272f" fill="transparent" opacity={0.25} />
      <text x={640} y={374} textAnchor="middle" fill="white" fontSize={12}>
        {label}
      </text>
    </g>
  );
}
export function PatioHotspot() {
  const { openGallery, openModal, active } = useFPState(); // ← add active

  const gallery = {
    title: "COVERED PATIO",
    text: "Maintain connection with the outdoors and gather with family in this generous outdoor space.",
    index: 0,
    items: [
      { src: "https://www.richmondamerican.com//Content/Plans/Media-41332.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-41332.webp",
        alt: "Great room — view 1", meta: "View toward TV" },
      { src: "https://www.richmondamerican.com//Content/Plans/Media-41333.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-41333.webp",
        alt: "Great room — view 2", meta: "View toward kitchen" },
      { src: "https://www.richmondamerican.com//Content/Plans/Media-45980.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-45980.webp",
        alt: "Great room — view 3", meta: "Seating layout" },
    ],
  } as const;

  const open = () => {
    openGallery({ ...gallery, items: [...gallery.items] });
    openModal();
  };

  // If the <g id="fifthBed"> group is active (i.e., active.fifthBed === true), decrement the label
  const label = 6 - (active?.fifthBed ? 1 : 0);

  return (
    <g
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => e.key === "Enter" && open()}
      className="hotspot cursor-pointer"
      style={{ transformOrigin: "center", transformBox: "fill-box" }}
    >
      <circle className="dot" cx={400} cy={220} r={20} fill="#af272f" opacity={1} />
      <circle className="pulse" cx={400} cy={220} r={20} stroke="#af272f" fill="transparent" opacity={0.25} />
      <text x={400} y={224} textAnchor="middle" fill="white" fontSize={12}>
        {label}
      </text>
    </g>
  );
}
export function TVHotspot() {
  const { openGallery, openModal, active } = useFPState(); // ← add active

  const gallery = {
    title: "TV WALL FACES OUTDOORS",
    text: "The TV doesn't share a wall with any bedroom so residents can get good rest.",
    index: 0,
    items: [
      { src: "https://www.richmondamerican.com//Content/Plans/Media-41332.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-41332.webp",
        alt: "Great room — view 1", meta: "View toward TV" },
      { src: "https://www.richmondamerican.com//Content/Plans/Media-41333.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-41333.webp",
        alt: "Great room — view 2", meta: "View toward kitchen" },
      { src: "https://www.richmondamerican.com//Content/Plans/Media-45980.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-45980.webp",
        alt: "Great room — view 3", meta: "Seating layout" },
    ],
  } as const;

  const open = () => {
    openGallery({ ...gallery, items: [...gallery.items] });
    openModal();
  };

  // If the <g id="fifthBed"> group is active (i.e., active.fifthBed === true), decrement the label
  const label = 7 - (active?.fifthBed ? 1 : 0);

  return (
    <g
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => e.key === "Enter" && open()}
      className="hotspot cursor-pointer"
      style={{ transformOrigin: "center", transformBox: "fill-box" }}
    >
      <circle className="dot" cx={560} cy={450} r={20} fill="#af272f" opacity={1} />
      <circle className="pulse" cx={560} cy={450} r={20} stroke="#af272f" fill="transparent" opacity={0.25} />
      <text x={560} y={454} textAnchor="middle" fill="white" fontSize={12}>
        {label}
      </text>
    </g>
  );
}
export function PrimaryBRspot() {
  const { openGallery, openModal, active } = useFPState(); // ← add active

  const gallery = {
    title: "PRIMARY BEDROOM LOCATION",
    text: "Primary bedroom is separated from the other bedrooms in the house for privacy.",
    index: 0,
    items: [
      { src: "https://www.richmondamerican.com//Content/Plans/Media-41332.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-41332.webp",
        alt: "Great room — view 1", meta: "View toward TV" },
      { src: "https://www.richmondamerican.com//Content/Plans/Media-41333.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-41333.webp",
        alt: "Great room — view 2", meta: "View toward kitchen" },
      { src: "https://www.richmondamerican.com//Content/Plans/Media-45980.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-45980.webp",
        alt: "Great room — view 3", meta: "Seating layout" },
    ],
  } as const;

  const open = () => {
    openGallery({ ...gallery, items: [...gallery.items] });
    openModal();
  };

  // If the <g id="fifthBed"> group is active (i.e., active.fifthBed === true), decrement the label
  const label = 8 - (active?.fifthBed ? 1 : 0);

  return (
    <g
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => e.key === "Enter" && open()}
      className="hotspot cursor-pointer"
      style={{ transformOrigin: "center", transformBox: "fill-box" }}
    >
      <circle className="dot" cx={650} cy={150} r={20} fill="#af272f" opacity={1} />
      <circle className="pulse" cx={650} cy={150} r={20} stroke="#af272f" fill="transparent" opacity={0.25} />
      <text x={650} y={154} textAnchor="middle" fill="white" fontSize={12}>
        {label}
      </text>
    </g>
  );
}
export function WICBRspot() {
  const { openGallery, openModal, active } = useFPState(); // ← add active

  const gallery = {
    title: "LARGE PRIMARY WALK-IN CLOSET",
    text: "A vast primary closet provides ample storage for clothes, shoes and bags. Located off the bathroom so one partner can get dressed while the other sleeps.",
    index: 0,
    items: [
      { src: "https://www.richmondamerican.com//Content/Plans/Media-41332.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-41332.webp",
        alt: "Great room — view 1", meta: "View toward TV" },
      { src: "https://www.richmondamerican.com//Content/Plans/Media-41333.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-41333.webp",
        alt: "Great room — view 2", meta: "View toward kitchen" },
      { src: "https://www.richmondamerican.com//Content/Plans/Media-45980.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-45980.webp",
        alt: "Great room — view 3", meta: "Seating layout" },
    ],
  } as const;

  const open = () => {
    openGallery({ ...gallery, items: [...gallery.items] });
    openModal();
  };

  // If the <g id="fifthBed"> group is active (i.e., active.fifthBed === true), decrement the label
  const label = 9 - (active?.fifthBed ? 1 : 0);

  return (
    <g
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => e.key === "Enter" && open()}
      className="hotspot cursor-pointer"
      style={{ transformOrigin: "center", transformBox: "fill-box" }}
    >
      <circle className="dot" cx={820} cy={270} r={20} fill="#af272f" opacity={1} />
      <circle className="pulse" cx={820} cy={270} r={20} stroke="#af272f" fill="transparent" opacity={0.25} />
      <text x={820} y={274} textAnchor="middle" fill="white" fontSize={12}>
        {label}
      </text>
    </g>
  );
}
export function LinenClosetspot() {
  const { openGallery, openModal, active } = useFPState(); // ← add active

  const gallery = {
    title: "LINEN CLOSET",
    text: "A linen closet near  the laundry room provides quick access to towels and sheets.",
    index: 0,
    items: [
      { src: "https://www.richmondamerican.com//Content/Plans/Media-41332.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-41332.webp",
        alt: "Great room — view 1", meta: "View toward TV" },
      { src: "https://www.richmondamerican.com//Content/Plans/Media-41333.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-41333.webp",
        alt: "Great room — view 2", meta: "View toward kitchen" },
      { src: "https://www.richmondamerican.com//Content/Plans/Media-45980.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-45980.webp",
        alt: "Great room — view 3", meta: "Seating layout" },
    ],
  } as const;

  const open = () => {
    openGallery({ ...gallery, items: [...gallery.items] });
    openModal();
  };

  // If the <g id="fifthBed"> group is active (i.e., active.fifthBed === true), decrement the label
  const label = 10 - (active?.fifthBed ? 1 : 0);

  return (
    <g
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => e.key === "Enter" && open()}
      className="hotspot cursor-pointer"
      style={{ transformOrigin: "center", transformBox: "fill-box" }}
    >
      <circle className="dot" cx={700} cy={550} r={20} fill="#af272f" opacity={1} />
      <circle className="pulse" cx={700} cy={550} r={20} stroke="#af272f" fill="transparent" opacity={0.25} />
      <text x={700} y={554} textAnchor="middle" fill="white" fontSize={12}>
        {label}
      </text>
    </g>
  );
}


export function StorageHotSpot() {
  const { openGallery, openModal } = useFPState();

  const gallery = {
    title: "MAKE ROOM FOR BIKES,TOOLS, AND WEEKEND PLANS",
    text: "",
    index: 0,
    items: [
      {
        src: "https://www.richmondamerican.com//Content/Plans/Media-41332.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-41332.webp",
        alt: "Great room — view 1",
        meta: "View toward TV",
      },
      {
        src: "https://www.richmondamerican.com//Content/Plans/Media-41333.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-41333.webp",
        alt: "Great room — view 2",
        meta: "View toward kitchen",
      },
      {
        src: "https://www.richmondamerican.com//Content/Plans/Media-45980.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-45980.webp",
        alt: "Great room — view 3",
        meta: "Seating layout",
      },
    ],
  } as const;

  const open = () => {
    openGallery({ ...gallery, items: [...gallery.items] });
    openModal(); 
  };

  return (
    <g
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => e.key === "Enter" && open()}
      className="hotspot cursor-pointer"
      // make sure SVG transforms scale from the element center
      style={{ transformOrigin: "center", transformBox: "fill-box" }}
    >
      <circle className="dot" cx={770} cy={640} r={20} fill="#af272f" opacity={1} />
      <circle className="pulse" cx={770} cy={640} r={20} stroke="#af272f" fill="transparent" opacity={0.25} />
      <text x={770} y={644} textAnchor="middle" fill="white" fontSize={12}>
        6
      </text>
    </g>
  );
}
// GAMES
export function WindowIRHotspot() {
  const { openApp, openModal } = useFPState();

  const open = () => {
    openApp({
      title: "IR Window Efficiency",
      text: "Point the virtual IR laser at a standard window vs our high-efficiency window and see interior surface temperature, heat flow, and $/hr impact under today’s weather.",
      render: () => <WindowIRGame />,
    });
    openModal();
  };

  return (
    <g
      role="button"
      aria-label="Open IR window efficiency game"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => e.key === "Enter" && open()}
      className="hotspot cursor-pointer"
    >
      {/* Set these to the window location you want */}
      <circle className="dot" cx={800} cy={60} r={20} fill="#ebde34" opacity={1} />
      <circle className="pulse" cx={800} cy={60} r={20} stroke="#ebde34" fill="transparent" opacity={1} />
      <text x={800} y={64} textAnchor="middle" fill="white" fontSize={12}>IR</text>
    </g>
  );
}
export function ShowerWaterSaverHotspot() {
  const { openApp, openModal } = useFPState();

  const open = () => {
    openApp({
      title: "Save Water in the Shower",
      text:
        "Adjust your shower length, press Play, and see how our efficient fixtures compare to standard ones.",
      render: () => (
        <WaterSaverGame
          gpmStandard={2.5}   // standard shower head
          gpmEfficient={1.8}  // your fixture
          costPerGallon={0.015}
        />
      ),
    });
    openModal(); // bring the app front-and-center by default
  };

  return (
    <g
      role="button"
      aria-label="Open water saver game"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => e.key === "Enter" && open()}
      className="hotspot cursor-pointer"
    >
      <circle className="dot" cx={890} cy={320} r={20} fill="#049dcc" opacity={1} />
      <circle className="pulse" cx={890} cy={320} r={20} stroke="#049dcc" fill="transparent" opacity={1} />
      <text x={890} y={324} textAnchor="middle" fill="white" fontSize={12}>
        W
      </text>
    </g>
  );
}
export function InsulationHotspot() {
  const { openApp, openModal } = useFPState();

  const open = () => {
    openApp({
      title: "Insulation Savings",
      text:
        "Compare seasonal heating & cooling costs between standard insulation and our specialized system. Adjust R-value, climate, and rates—then press Play.",
      render: () => <InsulationSavingsGame />,
    });
    openModal(); // front and center by default
  };

  return (
    <g
      role="button"
      aria-label="Open insulation savings mini-game"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => e.key === "Enter" && open()}
      className="hotspot cursor-pointer"
    >
      {/* set these to the wall/attic you want */}
      <circle className="dot" cx={220} cy={820} r={20} fill="#cca104" opacity={1} />
      <circle className="pulse" cx={220} cy={820} r={20} stroke="#cca104" fill="transparent" opacity={1} />
      <text x={220} y={824} textAnchor="middle" fill="white" fontSize={12}>
        I
      </text>
    </g>
  );
}
export function MudroomOrganizerHotspot() {
  const { openApp, openModal } = useFPState();

  const open = () => {
    openApp({
      title: "Mudroom Organizer",
      text:
        "Drag coats, backpacks, shoes and more into hooks and cubbies to see how much this mudroom can hold.",
      render: () => <MudroomMiniGame width={960} height={560} />,
    });
    openModal(); // bring the game front-and-center
  };

  return (
    <g
      role="button"
      aria-label="Open Mudroom Organizer game"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => e.key === "Enter" && open()}
      className="hotspot cursor-pointer"
    >
      <circle className="dot" cx={560} cy={690} r={20} fill="#f59e0b" opacity={1} />
      <circle className="pulse" cx={560} cy={690} r={20} stroke="#f59e0b" fill="transparent" opacity={0.9} />
      <text x={560} y={694} textAnchor="middle" fill="white" fontSize={12} fontWeight={700}>
        O
      </text>
    </g>
  );
}



// PLAN SVG
export function RaleighP741mainSVG({
  active,
  mirror = false,
  svgRef,
  panRef,
  contentRef,
  panZoom,
}: SVGProps) {
  const VBW = 1200;
  const VBH = 1200;

  // Re-flip text so it reads L→R when the world is mirrored
  useEffect(() => {
    const g = contentRef?.current;
    if (!g) return;

    const texts = g.querySelectorAll<SVGGraphicsElement>("text");
    texts.forEach((t) => {
      if (!t.hasAttribute("data-orig-transform")) {
        t.setAttribute("data-orig-transform", t.getAttribute("transform") ?? "");
      }
      const orig = t.getAttribute("data-orig-transform") ?? "";

      if (!mirror) {
        t.setAttribute("transform", orig);
        return;
      }

      const b = t.getBBox();
      const cx = b.x + b.width / 2;
      t.setAttribute(
        "transform",
        `${orig} translate(${cx},0) scale(-1,1) translate(${-cx},0)`
      );
    });
  }, [mirror, contentRef]);

  return (
    <svg
      ref={svgRef}
      className="h-full w-full select-none touch-none"
      viewBox={`0 0 ${VBW} ${VBH}`}
      onPointerDown={panZoom.onPointerDown}
      onPointerMove={panZoom.onPointerMove}
      onPointerUp={panZoom.onPointerUp}
      style={{ touchAction: "none" }}
    >
      <defs>
        <pattern id="diag" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
          <rect width="8" height="8" fill="white" />
          <path d="M 0 0 L 0 8" stroke="#e5e7eb" strokeWidth="2" />
        </pattern>
      </defs>

        <defs>
            <filter id="ds-soft" x="-20%" y="-20%" width="140%" height="140%">
            
            <feOffset dx="0" dy="3" />
            <feGaussianBlur stdDeviation="6" result="blur"/>
            <feColorMatrix
                in="blur"
                type="matrix"
                values="
                0 0 0 0 0 
                0 0 0 0 0 
                0 0 0 0 0 
                0 0 0 0.4 0" />
            <feMerge>
                <feMergeNode />       {/* shadow */}
                <feMergeNode in="SourceGraphic" />
            </feMerge>
            </filter>
        </defs>

      {/* Background stays outside world transform */}
      <rect x={0} y={0} width={VBW} height={VBH} fill="url(#diag)" />

      {/* OUTER: pan/zoom layer — transform applied by the hook imperatively */}
      <g ref={panRef}>
        {/* INNER: mirrored content */}
        <g
          ref={contentRef}
          transform={mirror ? `translate(${VBW} 0) scale(-1 1)` : undefined}
        >
            
            <g id="background">
            <polygon fill="#FFFFFF" points="864.3,63.3 864.3,1116.3 595.3,1116.3 595.3,1174.5 310.1,1174.5 310.1,9.1 528.5,9.1 528.5,63.3"/>
            </g>
            <g id="main_floor">
                <g id="flooring">
                    <rect x="601" y="544.2" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="579.7" y="544.2" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="622.5" y="544.2" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="644" y="544.2" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="601" y="566.1" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="579.7" y="566.1" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="622.5" y="566.1" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="644" y="566.1" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="601" y="588.1" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="579.7" y="588.1" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="622.5" y="588.1" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="644" y="588.1" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="601" y="610" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="579.7" y="610" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="622.5" y="610" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="644" y="610" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="601" y="632" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="579.7" y="632" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="622.5" y="632" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="644" y="632" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="601" y="653.9" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="579.7" y="653.9" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="622.5" y="653.9" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="644" y="653.9" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="601" y="675.9" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="579.7" y="675.9" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="622.5" y="675.9" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="644" y="675.9" fill="#BCD3DD" width="20.8" height="21.5"/>
                </g>
                <g id="flooring_00000144311514145658646020000006621633812005871750_">
                    <rect x="737.5" y="99.1" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="716.1" y="99.1" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="759" y="99.1" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="780.5" y="99.1" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="737.5" y="121" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="716.1" y="121" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="759" y="121" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="780.5" y="121" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="737.5" y="143" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="716.1" y="143" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="759" y="143" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="780.5" y="143" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="737.5" y="164.9" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="716.1" y="164.9" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="759" y="164.9" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="780.5" y="164.9" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="737.5" y="186.9" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="716.1" y="186.9" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="759" y="186.9" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="780.5" y="186.9" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="737.5" y="208.8" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="716.1" y="208.8" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="759" y="208.8" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="780.5" y="208.8" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="737.5" y="230.8" fill="#BCD3DD" width="20.8" height="13.1"/>
                    <rect x="716.1" y="230.8" fill="#BCD3DD" width="20.8" height="13.1"/>
                </g>
                <g id="structural-lines">
                    <polygon fill="#425563" points="340.7,10 340.7,20.2 322.1,20.2 322.1,38.5 311.9,38.5 311.9,10 		"/>
                    <polygon fill="#425563" points="334.6,277.9 334.6,285.4 317,285.4 317,312.3 311.9,312.3 311.9,277.9 		"/>
                    <rect x="311.9" y="354.7" fill="#425563" width="5.1" height="104.3"/>
                    <rect x="311.9" y="501.2" fill="#425563" width="5.1" height="81.4"/>
                    <rect x="311.9" y="987.4" fill="#425563" width="5.1" height="114.6"/>
                    <polygon fill="#425563" points="515.7,1041.3 515.7,1046.4 498.4,1046.4 498.4,1172.4 453.9,1172.4 453.9,1158.6 450.2,1158.6 
                        450.2,1153.5 491.1,1153.5 491.1,1029.7 498.4,1029.7 498.4,1041.3 		"/>
                    <polygon fill="#425563" points="348.3,832.8 348.3,840.3 317,840.3 317,871.3 311.9,871.3 311.9,638.6 317,638.6 317,832.8 		"/>
                    <polygon fill="#425563" points="360,1153.5 360,1158.6 356.3,1158.6 356.3,1172.4 311.9,1172.4 311.9,1137.5 317,1137.5 
                        317,1153.5 		"/>
                    <polygon fill="#425563" points="525.9,10 525.9,38.5 515.7,38.5 515.7,20.2 497.1,20.2 497.1,10 		"/>
                    <rect x="854.6" y="659.8" fill="#425563" width="8" height="184.6"/>
                    <polygon fill="#425563" points="854.6,881.1 862.6,881.1 862.6,1117.4 835.2,1117.4 835.2,1103.7 830.5,1103.7 830.5,1095.6 
                        854.6,1095.6 		"/>
                    <polygon fill="#425563" points="576.9,804.2 576.9,1038.4 579.8,1038.4 579.8,1095.7 611.8,1095.7 611.8,1103.7 607.2,1103.7 
                        607.2,1117.4 571.8,1117.4 571.8,1046.4 555.7,1046.4 555.7,1041.3 571.8,1041.3 571.8,795.6 579.2,795.6 579.2,799.1 
                        623.2,799.1 623.2,804.1 579.2,804.2 579.2,804.2 		"/>
                    <polygon fill="#425563" points="862.6,65 862.6,85 857.4,85 857.4,72.4 714.8,72.4 714.8,111.2 707.5,111.2 707.5,70.2 
                        707.5,70.2 707.5,69.8 707.5,69.8 707.5,70.2 653.5,70.2 653.5,65 		"/>
                    <polygon fill="#425563" points="630.2,277.9 630.2,283.1 579.2,283.1 579.2,288.3 571.8,288.3 571.8,285.4 498.3,285.4 
                        498.3,277.9 511.1,277.9 511.1,65 570.2,65 570.2,70.2 516.3,70.2 516.3,277.9 		"/>
                    <rect x="402.3" y="1153.5" fill="#425563" width="5.8" height="5.1"/>
                    <polygon fill="#425563" points="493.3,930.8 493.3,838 398.8,838 398.8,840.3 398.8,840.3 398.8,842.9 393.7,842.9 393.7,840.3 
                        390.4,840.3 390.4,832.8 498.5,832.8 498.5,933.3 498.4,956.5 491.1,956.5 491.1,935.9 317,935.9 317,952 311.9,952 311.9,899.8 
                        317,899.8 317,930.8 393.5,930.8 393.5,873.8 398.7,873.8 398.7,930.8 493.3,930.8 		"/>
                    <polygon fill="#425563" points="862.6,141 862.6,378.8 857.4,378.8 857.4,336.9 704,336.9 704,344.5 698.9,344.5 698.9,336.9 
                        671.4,336.9 671.4,424.6 698.9,424.6 698.9,412 704,412 704,429.7 671.4,429.7 671.4,476.7 676,476.7 676,481.9 661.7,481.9 
                        661.7,476.7 666.2,476.7 666.2,336.9 579.2,336.9 579.2,476.7 626,476.7 626,481.9 579.2,481.9 579.2,485.2 571.8,485.2 
                        571.8,328.9 579.2,328.9 579.2,331.8 680,331.8 680,324.3 685.2,324.3 685.2,331.8 707.5,331.8 707.5,283.1 685.2,283.1 
                        685.2,293.1 680,293.1 680,283.1 665.7,283.1 665.7,277.9 707.5,277.9 707.5,151.5 714.8,151.5 714.8,156 758.5,156 758.5,165.9 
                        753.3,165.9 753.3,161.2 712.6,161.2 712.6,242.5 753.3,242.5 753.3,196.6 758.5,196.6 758.5,227.5 763,227.5 763,232.7 
                        758.5,232.7 758.5,247.6 712.6,247.6 712.6,331.8 857.4,331.8 857.4,232.7 794,232.7 794,227.5 857.4,227.5 857.4,141 		"/>
                    <g>
                        <line fill="none" stroke="#425563" stroke-miterlimit="10" x1="312.4" y1="38.5" x2="312.4" y2="277.9"/>
                        <g>
                            <g>
                                <line fill="none" stroke="#425563" stroke-linecap="round" stroke-miterlimit="10" x1="321.6" y1="38.5" x2="321.6" y2="46"/>
                                
                                    <line fill="none" stroke="#425563" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray="14.3228,9.5485" x1="321.6" y1="55.6" x2="321.6" y2="265.7"/>
                                
                                    <line fill="none" stroke="#425563" stroke-linecap="round" stroke-miterlimit="10" x1="321.6" y1="270.4" x2="321.6" y2="277.9"/>
                            </g>
                        </g>
                    </g>
                    <g>
                        <line fill="none" stroke="#425563" stroke-miterlimit="10" x1="498.3" y1="10.5" x2="340.7" y2="10.5"/>
                        <g>
                            <g>
                                
                                    <line fill="none" stroke="#425563" stroke-linecap="round" stroke-miterlimit="10" x1="498.3" y1="19.7" x2="490.8" y2="19.7"/>
                                
                                    <line fill="none" stroke="#425563" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray="15.8467,10.5644" x1="480.2" y1="19.7" x2="353.5" y2="19.7"/>
                                
                                    <line fill="none" stroke="#425563" stroke-linecap="round" stroke-miterlimit="10" x1="348.2" y1="19.7" x2="340.7" y2="19.7"/>
                            </g>
                        </g>
                    </g>
                    <g>
                        <line fill="none" stroke="#425563" stroke-miterlimit="10" x1="525.4" y1="65" x2="525.4" y2="38.5"/>
                        <g>
                            <g>
                                <line fill="none" stroke="#425563" stroke-linecap="round" stroke-miterlimit="10" x1="516.2" y1="65" x2="516.2" y2="57.5"/>
                                <line fill="none" stroke="#425563" stroke-linecap="round" stroke-miterlimit="10" x1="516.2" y1="46" x2="516.2" y2="38.5"/>
                            </g>
                        </g>
                    </g>
                    <g>
                        
                            <rect x="569.5" y="1155.2" fill="none" stroke="#425563" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray="15,10" width="25.8" height="19.3"/>
                        <rect x="571.6" y="1157.7" fill="#425563" width="21.7" height="14.8"/>
                    </g>
                    <g>
                        <line fill="none" stroke="#425563" stroke-miterlimit="10" x1="593" y1="1112.4" x2="593" y2="1157.7"/>
                        
                            <line fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="10,6" x1="572.3" y1="1112.4" x2="572.3" y2="1157.7"/>
                    </g>
                    <g>
                        <line fill="none" stroke="#425563" stroke-miterlimit="10" x1="498.4" y1="1172" x2="569.5" y2="1172"/>
                        
                            <line fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="10,6" x1="571.6" y1="1158.1" x2="495.4" y2="1158.1"/>
                    </g>
                    
                        <rect x="709" y="535.5" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 1252.7969 -170.4312)" fill="#425563" width="5.1" height="11.3"/>
                    <rect x="662.1" y="655" fill="#425563" width="195.3" height="4.9"/>
                    
                        <rect x="665.2" y="534.5" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 1208.9154 -126.5497)" fill="#425563" width="5.1" height="13.3"/>
                    
                        <rect x="686.5" y="545.3" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 1262.3896 -115.8084)" fill="#425563" width="5.1" height="56"/>
                    <rect x="713.7" y="480.9" fill="#425563" width="5.1" height="5.8"/>
                    <rect x="713.7" y="520.1" fill="#425563" width="5.1" height="67.1"/>
                    <rect x="713.7" y="642.1" fill="#425563" width="5.1" height="17.7"/>
                    <rect x="857.4" y="596.4" fill="#425563" width="5.1" height="63.5"/>
                    <rect x="857.4" y="482.1" fill="#425563" width="5.1" height="58.7"/>
                    <polygon fill="#425563" points="664.5,538.6 664.5,804.1 659.5,804.1 659.5,752.2 654.8,752.2 654.8,747 659.5,747 659.5,543.8 
                        652.9,543.8 652.9,538.6 		"/>
                    <polygon fill="#425563" points="862.6,434.8 862.6,482.1 857.4,482.1 857.4,481.9 719,481.9 719,482.1 713.9,482.1 713.9,481.9 
                        709.3,481.9 709.3,476.7 857.4,476.7 857.4,434.8 		"/>
                    <polygon fill="#425563" points="619.2,719.4 619.2,747 623.8,747 623.8,752.1 614.1,752.1 614.1,719.4 579.2,719.4 579.2,752.8 
                        571.8,752.8 571.8,535.1 579.2,535.1 579.2,538.6 621.6,538.6 621.6,543.8 579.2,543.8 579.2,677.7 591.8,677.7 591.8,714.4 
                        659.5,714.4 659.5,719.4 		"/>
                    <rect x="862.6" y="842.2" fill="none" stroke="#425563" stroke-miterlimit="10" width="40.5" height="41.8"/>
                </g>
                <g id="windows">
                    <g id="window">
                        <g>
                            <path fill="#425563" d="M316,313.3v40.3h-4.9v-40.3H316 M317,312.3h-6.9v42.3h6.9V312.3L317,312.3z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M316,313.3v40.3h-1.1v-40.3H316 M317,312.3h-3.1v42.3h3.1V312.3L317,312.3z"/>
                        </g>
                    </g>
                    <g id="window_00000067221793419654613090000010297943681875892372_">
                        <g>
                            <path fill="#425563" d="M316,459.9v40.3h-4.9v-40.3H316 M317,458.9h-6.9v42.3h6.9V458.9L317,458.9z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M316,459.9v40.3h-1.1v-40.3H316 M317,458.9h-3.1v42.3h3.1V458.9L317,458.9z"/>
                        </g>
                    </g>
                    <g id="window_00000160889572889091628340000017390358014576304538_">
                        <g>
                            <path fill="#425563" d="M316,583.6v54h-4.9v-54H316 M317,582.6h-6.9v56h6.9V582.6L317,582.6z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M316,583.6v54h-1.1v-54H316 M317,582.6h-3.1v56h3.1V582.6L317,582.6z"/>
                        </g>
                    </g>
                    <g id="window_00000108278170135036784480000008597517400003358124_">
                        <g>
                            <path fill="#425563" d="M316,872.3v27.3h-4.9v-27.3H316 M317,871.3h-6.9v29.3h6.9V871.3L317,871.3z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M316,872.3v27.3h-1.1v-27.3H316 M317,871.3h-3.1v29.3h3.1V871.3L317,871.3z"/>
                        </g>
                    </g>
                    <g id="window_00000106110647845791339580000008347926535029421732_">
                        <g>
                            <path fill="#425563" d="M316,953v33.4h-4.9V953H316 M317,952h-6.9v35.4h6.9V952L317,952z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M316,953v33.4h-1.1V953H316 M317,952h-3.1v35.4h3.1V952L317,952z"/>
                        </g>
                    </g>
                    <g id="window_00000099655816351267509240000016672332268528526211_">
                        <g>
                            <path fill="#425563" d="M316,1103v33.4h-4.9V1103H316 M317,1102h-6.9v35.4h6.9V1102L317,1102z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M316,1103v33.4h-1.1V1103H316 M317,1102h-3.1v35.4h3.1V1102L317,1102z"/>
                        </g>
                    </g>
                    <g id="window_00000019669207942509756050000000648297519395420288_">
                        <g>
                            <path fill="#425563" d="M401.3,1154.5v4.9H361v-4.9H401.3 M402.3,1153.5H360v6.9h42.3V1153.5L402.3,1153.5z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M401.3,1154.5v1.1H361v-1.1H401.3 M402.3,1153.5H360v3.1h42.3V1153.5L402.3,1153.5z"/>
                        </g>
                    </g>
                    <g id="window_00000012471381315596103450000008184525183180231844_">
                        <g>
                            <path fill="#425563" d="M449.4,1154.5v4.9H409v-4.9H449.4 M450.4,1153.5H408v6.9h42.3V1153.5L450.4,1153.5z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M449.4,1154.5v1.1H409v-1.1H449.4 M450.4,1153.5H408v3.1h42.3V1153.5L450.4,1153.5z"/>
                        </g>
                    </g>
                    <g id="window_00000044873736067703720330000006761342463438546846_">
                        <g>
                            <path fill="#425563" d="M863.3,379.6v54.2h-4.9v-54.2H863.3 M864.3,378.6h-6.9v56.2h6.9V378.6L864.3,378.6z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M859.5,379.6l0,54.2h-1.1v-54.2H859.5 M860.5,378.6h-3.1v56.2h3.1L860.5,378.6L860.5,378.6z"/>
                        </g>
                    </g>
                    <g id="window_00000142887066682835889290000004977793127688343696_">
                        <g>
                            <path fill="#425563" d="M863.3,541.5v54.2h-4.9v-54.2H863.3 M864.3,540.5h-6.9v56.2h6.9V540.5L864.3,540.5z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M859.5,541.5l0,54.2h-1.1v-54.2H859.5 M860.5,540.5h-3.1v56.2h3.1L860.5,540.5L860.5,540.5z"/>
                        </g>
                    </g>
                    <g id="window_00000130638349793707573720000006274246298997050263_">
                        <g>
                            <path fill="#425563" d="M863.3,85.8V140h-4.9V85.8H863.3 M864.3,84.8h-6.9V141h6.9V84.8L864.3,84.8z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M859.5,85.8l0,54.2h-1.1V85.8H859.5 M860.5,84.8h-3.1V141h3.1L860.5,84.8L860.5,84.8z"/>
                        </g>
                    </g>
                    <g id="window_00000043431139317926796310000016789905908638132140_">
                        <g>
                            <path fill="#425563" d="M652.5,64.3v4.9l-81.5,0v-4.9L652.5,64.3 M653.5,63.3l-83.5,0v6.9l83.5,0V63.3L653.5,63.3z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M652.5,68.1v1.1l-81.5,0v-1.1L652.5,68.1 M653.5,67.1l-83.5,0v3.1l83.5,0V67.1L653.5,67.1z"/>
                        </g>
                    </g>
                </g>
                <g id="overheads">
                    
                        <rect x="491.6" y="956.5" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="10,4" width="6.4" height="73.2"/>
                    
                        <rect x="572.3" y="752.5" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="10,4" width="6.4" height="43.1"/>
                    
                        <rect x="366.2" y="815.4" transform="matrix(1.383721e-13 1 -1 1.383721e-13 1206.0144 467.0724)" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="10,4" width="6.6" height="42.3"/>
                    
                        <rect x="572.3" y="485.2" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="10,4" width="6.4" height="49.8"/>
                    
                        <rect x="708" y="111.2" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="10,4" width="6.4" height="40.2"/>
                    
                        <rect x="572.3" y="287.6" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="10,4" width="6.4" height="41.5"/>
                </g>
                <g id="doors">
                    <g>
                        <path fill="#425563" d="M429.9,842.7v1.4h-31.2v-1.4H429.9 M430.9,841.7h-33.2v3.4h33.2V841.7L430.9,841.7z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M555.9,1001v40.2h-1.4V1001H555.9 M556.9,1000h-3.4v42.2h3.4V1000L556.9,1000z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M660.9,442.6v34.5h-1.4v-34.5H660.9 M661.9,441.6h-3.4v36.5h3.4V441.6L661.9,441.6z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M677.6,442.6v34.5h-1.4v-34.5H677.6 M678.6,441.6h-3.4v36.5h3.4V441.6L678.6,441.6z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M665.2,243v34.5h-1.4V243H665.2 M666.2,242h-3.4v36.5h3.4V242L666.2,242z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M754,487.8v1.4h-34.5v-1.4H754 M755,486.8h-36.5v3.4H755V486.8L755,486.8z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M652.2,543.8v34.5h-1.4v-34.5H652.2 M653.2,542.8h-3.4v36.5h3.4V542.8L653.2,542.8z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M683.2,516.6l22.2,22.2l-1,1l-22.2-22.2L683.2,516.6 M683.2,515.2l-2.4,2.4l23.6,23.6l2.4-2.4
                            L683.2,515.2L683.2,515.2z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M764.2,232.7v31.2h-1.4v-31.2H764.2 M765.2,231.7h-3.4v33.2h3.4V231.7L765.2,231.7z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M752.9,166.3v1.4h-31.2v-1.4H752.9 M753.9,165.3h-33.2v3.4h33.2V165.3L753.9,165.3z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M633.6,774.3l25.2,25.2l-1,1l-25.2-25.2L633.6,774.3 M633.6,772.9l-2.4,2.4l26.6,26.6l2.4-2.4
                            L633.6,772.9L633.6,772.9z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M659.4,301.4l21.9,21.9l-1,1l-21.9-21.9L659.4,301.4 M659.4,300l-2.4,2.4l23.3,23.3l2.4-2.4L659.4,300
                            L659.4,300z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M653.5,750.9l1,1l-21.9,21.9l-1-1L653.5,750.9 M653.5,749.5l-23.3,23.3l2.4,2.4l23.3-23.3L653.5,749.5
                            L653.5,749.5z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M702.9,377v33.4h-0.7l0-33.4H702.9 M703.9,376h-2.7l0,35.4h2.7V376L703.9,376z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M701,344.3v33.4h-0.7v-33.4H701 M702,343.3h-2.7v35.4h2.7V343.3L702,343.3z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M715.2,614.1L715.2,614.1L715.2,614.1 M715.7,615.1v27.1h-0.4l0-27.1H715.7 M716.7,614.1h-2.4l0,29.1h2.4
                            V614.1L716.7,614.1z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M717.2,588.5L717.2,588.5L717.2,588.5 M717.5,589.5v26.4h-0.3l0-26.4H717.5 M718.5,588.5h-2.3l0,28.4h2.3
                            V588.5L718.5,588.5z"/>
                    </g>
                    <path fill="#FFFFFF" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="5,3" d="M754.7,490.1
                        c0,0,1.7,30-35.9,30"/>
                    <path fill="#FFFFFF" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="5,3" d="M681.1,517.8
                        c0,0-9.1,7.6-6.7,20.8"/>
                    <path fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="5,3" d="M678.6,442.1
                        c0,0,31.1,0.2,31.1,34.6"/>
                    <path fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="5,3" d="M658.5,442.1
                        c0,0-33,4.3-33,34.6"/>
                    <path fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="5,3" d="M649.8,578.9
                        c0,0-28.6-1.6-28.6-35.1"/>
                    <path fill="#FFFFFF" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="5,3" d="M631.6,775.5
                        c0,0-11.8,9.6-8.7,24"/>
                    <path fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="5,3" d="M623.4,751.9
                        c0,0-3,14.1,7,20.9"/>
                    <path fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="5,3" d="M430.5,845.1
                        c0,0,0.3,29.1-31.8,29.1"/>
                    <path fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="5,3" d="M659.6,300.4
                        c0,0,9.1-11.9,20.4-7.2"/>
                    <path fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="5,3" d="M721.1,168.7
                        c0,0,1.4,28.3,32.2,28.3"/>
                    <path fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="5,3" d="M765.2,264.4
                        c0,0,29.3-5.5,29.3-31.6"/>
                    <path fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="5,3" d="M662.8,242.4
                        c0,0-33.1,1.1-33.1,35.5"/>
                    <path fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="5,3" d="M553.6,1000.7
                        c0,0-38.6,3.7-38.6,40.5"/>
                    <g id="garage_door">
                        <g>
                            <path fill="#425563" d="M830.8,1095.9v1.9H611.5v-1.9H830.8 M831.5,1095.1H610.8v3.4h220.8V1095.1L831.5,1095.1z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M823.5,998.3h-5v0.8h5V998.3L823.5,998.3z M815.5,998.3h-5v0.8h5V998.3L815.5,998.3z M807.5,998.3h-5
                                v0.8h5V998.3L807.5,998.3z M799.5,998.3h-5v0.8h5V998.3L799.5,998.3z M791.5,998.3h-5v0.8h5V998.3L791.5,998.3z M783.5,998.3h-5
                                v0.8h5V998.3L783.5,998.3z M775.5,998.3h-5v0.8h5V998.3L775.5,998.3z M767.5,998.3h-5v0.8h5V998.3L767.5,998.3z M759.5,998.3h-5
                                v0.8h5V998.3L759.5,998.3z M751.5,998.3h-5v0.8h5V998.3L751.5,998.3z M743.5,998.3h-5v0.8h5V998.3L743.5,998.3z M735.5,998.3h-5
                                v0.8h5V998.3L735.5,998.3z M727.5,998.3h-5v0.8h5V998.3L727.5,998.3z M719.5,998.3h-5v0.8h5V998.3L719.5,998.3z M711.5,998.3h-5
                                v0.8h5V998.3L711.5,998.3z M703.5,998.3h-5v0.8h5V998.3L703.5,998.3z M695.5,998.3h-5v0.8h5V998.3L695.5,998.3z M687.5,998.3h-5
                                v0.8h5V998.3L687.5,998.3z M679.5,998.3h-5v0.8h5V998.3L679.5,998.3z M671.5,998.3h-5v0.8h5V998.3L671.5,998.3z M663.5,998.3h-5
                                v0.8h5V998.3L663.5,998.3z M655.5,998.3h-5v0.8h5V998.3L655.5,998.3z M647.5,998.3h-5v0.8h5V998.3L647.5,998.3z M639.5,998.3h-5
                                v0.8h5V998.3L639.5,998.3z M631.5,998.3h-5v0.8h5V998.3L631.5,998.3z M623.5,998.3h-5v0.8h5V998.3L623.5,998.3z M615.5,998.3
                                h-4.8v0.8h4.8V998.3L615.5,998.3z M611.5,1001.6h-0.8v5h0.8V1001.6L611.5,1001.6z M611.5,1009.6h-0.8v5h0.8V1009.6L611.5,1009.6
                                z M611.5,1017.6h-0.8v5h0.8V1017.6L611.5,1017.6z M611.5,1025.6h-0.8v5h0.8V1025.6L611.5,1025.6z M611.5,1033.6h-0.8v5h0.8
                                V1033.6L611.5,1033.6z M611.5,1041.6h-0.8v5h0.8V1041.6L611.5,1041.6z M611.5,1049.6h-0.8v5h0.8V1049.6L611.5,1049.6z
                                M611.5,1057.6h-0.8v5h0.8V1057.6L611.5,1057.6z M611.5,1065.6h-0.8v5h0.8V1065.6L611.5,1065.6z M611.5,1073.6h-0.8v5h0.8
                                V1073.6L611.5,1073.6z M611.5,1081.6h-0.8v5h0.8V1081.6L611.5,1081.6z M611.5,1089.6h-0.8v5h0.8V1089.6L611.5,1089.6z
                                M618.2,1094.4h-5v0.8h5V1094.4L618.2,1094.4z M626.2,1094.4h-5v0.8h5V1094.4L626.2,1094.4z M634.2,1094.4h-5v0.8h5V1094.4
                                L634.2,1094.4z M642.2,1094.4h-5v0.8h5V1094.4L642.2,1094.4z M650.2,1094.4h-5v0.8h5V1094.4L650.2,1094.4z M658.2,1094.4h-5v0.8
                                h5V1094.4L658.2,1094.4z M666.2,1094.4h-5v0.8h5V1094.4L666.2,1094.4z M674.2,1094.4h-5v0.8h5V1094.4L674.2,1094.4z
                                M682.2,1094.4h-5v0.8h5V1094.4L682.2,1094.4z M690.2,1094.4h-5v0.8h5V1094.4L690.2,1094.4z M698.2,1094.4h-5v0.8h5V1094.4
                                L698.2,1094.4z M706.2,1094.4h-5v0.8h5V1094.4L706.2,1094.4z M714.2,1094.4h-5v0.8h5V1094.4L714.2,1094.4z M722.2,1094.4h-5v0.8
                                h5V1094.4L722.2,1094.4z M730.2,1094.4h-5v0.8h5V1094.4L730.2,1094.4z M738.2,1094.4h-5v0.8h5V1094.4L738.2,1094.4z
                                M746.2,1094.4h-5v0.8h5V1094.4L746.2,1094.4z M754.2,1094.4h-5v0.8h5V1094.4L754.2,1094.4z M762.2,1094.4h-5v0.8h5V1094.4
                                L762.2,1094.4z M770.2,1094.4h-5v0.8h5V1094.4L770.2,1094.4z M778.2,1094.4h-5v0.8h5V1094.4L778.2,1094.4z M786.2,1094.4h-5v0.8
                                h5V1094.4L786.2,1094.4z M794.2,1094.4h-5v0.8h5V1094.4L794.2,1094.4z M802.2,1094.4h-5v0.8h5V1094.4L802.2,1094.4z
                                M810.2,1094.4h-5v0.8h5V1094.4L810.2,1094.4z M818.2,1094.4h-5v0.8h5V1094.4L818.2,1094.4z M826.2,1094.4h-5v0.8h5V1094.4
                                L826.2,1094.4z M831.5,1092.5h-0.8v1.9h-1.6v0.8h2.3V1092.5L831.5,1092.5z M831.5,1084.5h-0.8v5h0.8V1084.5L831.5,1084.5z
                                M831.5,1076.5h-0.8v5h0.8V1076.5L831.5,1076.5z M831.5,1068.5h-0.8v5h0.8V1068.5L831.5,1068.5z M831.5,1060.5h-0.8v5h0.8
                                V1060.5L831.5,1060.5z M831.5,1052.5h-0.8v5h0.8V1052.5L831.5,1052.5z M831.5,1044.5h-0.8v5h0.8V1044.5L831.5,1044.5z
                                M831.5,1036.5h-0.8v5h0.8V1036.5L831.5,1036.5z M831.5,1028.5h-0.8v5h0.8V1028.5L831.5,1028.5z M831.5,1020.5h-0.8v5h0.8
                                V1020.5L831.5,1020.5z M831.5,1012.5h-0.8v5h0.8V1012.5L831.5,1012.5z M831.5,1004.5h-0.8v5h0.8V1004.5L831.5,1004.5z
                                M831.5,998.3h-5v0.8h4.2v2.4h0.8V998.3L831.5,998.3z"/>
                        </g>
                        <g>
                            
                                <line fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="5,3" x1="607.2" y1="1116.9" x2="835.2" y2="1116.9"/>
                        </g>
                        
                            <line fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="5,3" x1="610.8" y1="998.3" x2="830.5" y2="1094.4"/>
                        
                            <line fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="5,3" x1="831.5" y1="998.3" x2="610.8" y2="1095.1"/>
                    </g>
                    <rect x="821.4" y="844.4" fill="none" stroke="#425563" stroke-miterlimit="10" width="36.8" height="2.6"/>
                    <path fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="5,3" d="M821.3,847
                        c0,0,5.3,34.1,33.3,34.1"/>
                    <g id="sliding_door">
                        <path fill="#425563" d="M333,277v8.6h57.9V277H333z M337.4,284.1h-2.8v-0.7h2.8V284.1z M337.4,282.1h-3.1v-0.8h3.1V282.1z
                            M337.4,280h-2.8v-0.9h2.8V280z M343.3,285.4h-3.1v-0.8h3.1V285.4z M344.8,281.1h3.1v1.1h-3.1V281.1z M349,284.1h-3.6v-1h3.6
                            V284.1z M354.8,281.2h3.2v1.1h-3.2V281.2z M359.2,284.3h-3.1v-1.1h3.1V284.3z M365.3,281.1h3.2v1.1h-3.2V281.1z M369.3,284.3
                            h-3.2v-1.1h3.2V284.3z M375.4,281.2h3.2v1.1h-3.2V281.2z M380.1,284.7h-3.2v-1.1h3.2V284.7z M385.2,281.1h3.2v1.1h-3.2V281.1z
                            M390.5,284.3h-3.1v-1.1h3.1V284.3z M390.5,280.1h-3.1V279h3.1V280.1z"/>
                        <rect x="390.8" y="280.1" fill="#425563" width="53" height="3.1"/>
                        <rect x="390.8" y="277" fill="#425563" width="109.3" height="1"/>
                        <rect x="437.6" y="282.3" fill="#425563" width="57.4" height="3.1"/>
                    </g>
                </g>
                <g id="finished">
                    <polygon fill="#DDE7ED" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" points="493.3,838 493.3,930.8 398.7,930.8 
                        398.7,912.9 475.4,912.9 475.4,838 		"/>
                    
                        <rect x="317" y="840.3" fill="#DDE7ED" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="27.2" height="90.5"/>
                    
                        <rect x="317" y="539.8" fill="#DDE7ED" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="27.2" height="176.4"/>
                    
                        <rect x="317" y="716.2" fill="#DDE7ED" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="27.2" height="41.9"/>
                    
                        <rect x="578.8" y="543.8" fill="#DDE7ED" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="27.5" height="85.5"/>
                    
                        <rect x="664.5" y="576.1" fill="#DDE7ED" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="24.3" height="78.7"/>
                    
                        <rect x="632.4" y="705.7" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 1365.2095 86.4758)" fill="#DDE7ED" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="14" height="40.3"/>
                    
                        <rect x="679.3" y="536.4" transform="matrix(6.123234e-17 -1 1 6.123234e-17 128.1793 1250.0093)" fill="#DDE7ED" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="19.6" height="49.1"/>
                    
                        <rect x="578.8" y="409.7" fill="#DDE7ED" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="27.3" height="67.1"/>
                    
                        <rect x="578.8" y="336.9" fill="#DDE7ED" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="13.7" height="72.7"/>
                    
                        <rect x="671.7" y="336.9" fill="#DDE7ED" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="13.7" height="87.6"/>
                    
                        <rect x="689.6" y="283.2" fill="#DDE7ED" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="17.9" height="48.2"/>
                    <polygon fill="#DDE7ED" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" points="857.6,233.2 857.6,331.4 
                        712.4,331.4 712.4,247.9 726,247.9 726,317.7 843.9,317.7 843.9,233.2 		"/>
                    
                        <rect x="592.4" y="340.9" fill="#DDE7ED" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="5,3" width="27.9" height="32.4"/>
                    
                        <rect x="592.4" y="374.5" fill="#DDE7ED" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="5,3" width="27.9" height="32.4"/>
                    
                        <rect x="580.8" y="437.8" fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="5,3" width="24.1" height="24.1"/>
                    
                        <rect x="317" y="757.9" fill="#DDE7ED" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="27.2" height="34.4"/>
                    
                        <rect x="317" y="792.3" fill="#DDE7ED" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="27.2" height="40.4"/>
                    
                        <rect x="396.2" y="792.3" fill="#DDE7ED" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="44.8" height="40.4"/>
                    
                        <rect x="441" y="805.8" fill="#DDE7ED" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="54.9" height="26.9"/>
                    <g id="island-chairs">
                        <g>
                            
                                <image overflow="visible" opacity="0.5" width="278" height="290" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARYAAAEiCAYAAAA8pv30AAAACXBIWXMAAAsSAAALEgHS3X78AAAg
            AElEQVR4nO2d6XbjyK6sUbZr6D2c+/6Pefbu7pqr7g8bR6FQAIkkU7YGxFpcpCZOYn4MIAeatVqt
            VqvVal263r31DrRaZ9Lqa/v34vXdtBosrXPqUq+v6n5lMGnQJLrUP761Xpf2X7/G/lS2wd9RwOD3
            fieftezyLrbWdm39L899DWwp3Ofe9qxjGc15+e7VYLk+7Smoo9+e43pQ63yN/eB1vEs+U0J44MTv
            8Xdb1mC5dGX/T6XAzr6e2X5FM4V75bWotsPzaJsRUHz6lXyGv79rPb31DrSOVHEaUYGMvpMVsmx9
            e7WncO/Zh2i7o33gsAZB8ouWcTL6Ha/rLtVgeXtV7+pRwdgyP3cBny3c59g2bzd6zVJQ+QlzXH5n
            p4BpuFiD5S00KkSjgpgVkuh15bPKvlW1Zb/3bC9ax7vBpMTOxGHyA+Y/Xn7/E37HcLlrNVheRxVX
            EhUG9d47M3sI3q8Upuz9aJ8r2lq4M7BVt6fWMzpnvA7MoSBQfpjZ95fp8WU932nbnGO5a9fSYDmf
            RjDJXAUXgAexPHovA5B6z8R8z3FWC/e5tl2FMQrdijuU72b27WX+9WVZ/c5/+w7eu1s1WNYruuuP
            HIMCxANM/Dp6P1pPBqk9BXxF4Y4cxOz2s21H8EVh+IMu5evL9PgyscvBCZ3K3bqWBss6RRe4z7MC
            poCB02OwrF5vBc6eAr63cKuCvhUwVWjj5IUfcyruVL6a2Rcze2+Hc212muB9sINjuXvX0mDZp613
            6xFAcM4Tvz8CT7TNcxTwLY5sBLS9269s0+wACXcrCJUP9lxW/PsIIKwpcrjcvRos21R1JxWQMCye
            Csv8mteVOZnMwfAxRMdcOTfVwv0gfjOjiluKtu/fRffhIdA3e4bKZ3t2K+hUOLH7aIfqZ3ZBd6kG
            y5yqll/BJHIhT2IeTY9iOXIvI7AgYPYW8D2F+xyhEG8/26YLXYi7FYYKg+e9HfIwap2+H3cHmQZL
            TVWgjGAygsd7mvNyBJooXKpAZWUBnyncUSFfFQrh9hVAOQxyJ4K5Fc+rmD1DxT/zzzGhm+Vu7k4N
            llyzd+LMlUTweB9M/BlDRrmdUUjE8FOFbW8Bny3co+3O7sPISSp4Yn4FwyB3Kv4+5lz8v+DzO+u0
            blINFq0qUFS+hGESAeSDWP4gvheBpRIOzeRWVhbwmcK9GizV7aM4v+JOxOzgVL6a2UerQQXnd+la
            GizH2gMUFdYwSD7QMk8VuDBYqlCpAOUtnIOZLuxb7/yRY1LLZjpx621V3Kl8MQ2VKAS6ezVYDoou
            yAwo6BrQVSiAfAyW8TX/FgE1C5V3YjkLRczWFfBK4Y62uadgRvueHZ/ZcWtb5VQQKAwVFUb6tu7S
            rZg1WMxOL4YZoHCYo2DxkaYPtOyv2dVEQKmEPhWQnKuAzxRu5Y723vFH2+dlbuRmdoCM+g/apRR0
            z2CJwh4umFh4FVAUTD7ZMUz49UfTzmUm9InCngpMTCxH52SLKnBR311ZQDPnhW4Ca4TMDklcdb6j
            c10NIe9G9wqW6C7KIUSUjEWgMDA+wfyTeK8Clb0OZQSUbM7Le5Stc0XINbN99RrzK/660oq53cpA
            9waWLOyJQp4KUD4NJnYtKmkb1fpkd0y+0N3KV2HCy+r1Vqn1ZOs+dwFVUGHnMgLzFkjfpe4JLOrP
            rzoUL/zKnfj0B80ZLBwGcYJWVSFvdSfqeLNldZ5WarTOvdscJUkr26+EjNk67x4mqHsAS8WleOFl
            h8L5kwwmEVgYKFHYw0Dx/cL93AsT9Xp0zlZry7r3giNaHw6CzduZHRz7bmuAlG4dLCOXgkDxpCyG
            PMqdMExwws/9N1ydHNU0VNqfRHfSkROZLXiXdvfFkCXSTMFmsKgBs0cj8WeP/7h7yNwyWLgAKpcS
            JWUZKAiNf5iGCjqVyKVg2KPaoWQN2Uws87FWzsdenRs62VMHK69Hn6nR+NXo+zypx3+Mtn+3ukWw
            RKFPlJhVSVl0Jzj9wzRcVOgThT0VoIzi/FmoKEUF4i0TrBE0ooIcLY/Wh+vkcVh4UuOusGNpkW4N
            LFHok7mUEVD+AVMFKpiXUYnZmSrMVbUN1bs6hxxRTco5pAo9Lqv3TMyj9fGyesQHDkf53TRg8HEg
            CjLqXFdCuZvSLYElC324tmcWKAwXFfpgC1qVmK0AxSx3JzOqFjT1nXfwmqF2DrgoSLCjiHIeIzcz
            AhaDxYdEwDmDhnMyfD6jPFcG7RW6GHjdClgUVEYuhWt40JH80w4g+aeduhWVS8Hq46wdyih3YhZf
            mK4RGHA5u7NHBSJzSF5AVhWMCCZYaFW+Q8GG1xet3+x0/QyWz/bc+fCLHQMGHcwoLEIY4+uRqt+r
            AO1NYHPtYFH5FG6Kz7kUTsqyO/knzEdQUWGPqjauNAGvVAtXkpE+z5azi21Unf3b1sElcyjZUwhV
            UjUDDH/GyVgOhXzclc92AAzDhXMurpmwdet3FKiia6NyQ1quawYL/4GqsZtDBRu4YdiDMMGJXQuH
            PirsiRq2IfDMNFT4mFijsCa761dDBwWTUXX3HrhkUOGE6Q+xnAHGgmUVWimw4Hi3f5uGi4KKnxfs
            zJjlV6JzN3NOR+EffvZqkLlWsFTyKZFL8bBHAYXhwlBRLoV7vSJQVMiDc15mRUCpwIRDhih0wP1g
            mPixmB2D0be7Gi7oTjBx+p3m7BhGORgT3+EwCx/74WOwfDGzv+wAFwcL5lrQPfhNDd+rQmVLXi1y
            Z2r5nXiNv12qawRLNZ+CCVp2KQiQf9GcoaJCHw57MqDMuhOz/C5UAUmUk+BCiPvC5/Hh5bt+Ts1O
            C81WKceFY6IgUL6JOX5nFBZV3MooHPrbDo7lu+VQ4XOlCq6CyMxNR52/qkPl354FMNcGlhFUogSt
            uw6Hxr/sGCgjqHCbFJWYrQBlVBgjoOCyKhh851X5iRFYVO1ZdLE9wPKsa1GAZNfgSVQctDqqpfHf
            RK5sBi7sWhAuX+w4DGKoPMJ5QAArZ8jLmavl85rdaDKXmjnW5YC5JrBkUOEm+ZygRZfyLzExVLC2
            iFvORj2OzwWUiivhNhbRhL/BfcPz6JNKSvo0A5JMeEwIFX4KIU7VGpoZsDDccB8836Kggjc0f12t
            KVLXs3pttDwCyqj1cJST8nVm4VtZ1wKWCCpZPgVdCkPl3zaGCoc+PkVhD+4f73ekClDURaMg8kPM
            +T0Gi++vSnT/pu9w/mALXLJjzBKon+3UOWBBR9eShQIZfCLAoTvC84auzqHM+8DKoKIm/G50DhVA
            1I1GOdco6b0bLtcAFv4TVNP8LPSJgIJg4SRtFPpUWsuarQNKdMEogHCiM2qa7hcTnk88h/4ds9Nz
            /csOcMGLb4t7wePO3IK7lqh2hqGpCkrmAvF9hgueZwxzMEx8NA02FF8bEViiJgn+3Wx/lVvlGwvf
            ZPB6QBe7OzS6dLBkUMnyKR76IED+badw8e9F+RQOffbmUbYAJbpQsKaEl1WzdCx8vp8KKliA/Lgz
            +7xFqoDwY0sxHMKQCGtnGCwRNCx5z+hz/g/Mjs/Hezs4lvdi27jeLJ+iptENK9vP6GbznZYf4XsP
            djjvBuvEbW1yL5cMllmoYGM3dyL/hmkEFWxBGz3iIao+5mXWHqAoR4KTqjXJwIJuBc/hD/jMnaBy
            Angce50Kh3oKLtExYu1QVrh5m6P9Mjv8177MYKkkw3l5BJZRR1TczyiEVCEcn0O+Nnwb6FR93ZhP
            m4LLpYKlChVM0nKC9t9i4pyKgorq37Mi7KkAxf/cyJlwwcom1b8F76ReSNypGJzfKLzA45iV+p06
            JyqPpOYIpdE+RfmK6D1fn6plGW07Aola5gaU6j3eR3WeorwQhpM4/2bP///3l204YPw68JAX4TKl
            SwTLLFSwBS2GPf9jp1DhnAoPFeltU6LQh/cvU2SzM4ei3AnDBC8SvmC+0vfxju7bRUfy0Q4Xk4OG
            HcC5pc5NFM6YneZ9zJ6P6Zf4bqSooM/sX7TeClAyp5LdyBTwKlDxUBLnTy9zzhkabMPh4vtdvh4u
            DSxboYL5FAcKgqUCFdUL+RwuJcufuMNQMKlM6FiiEMjP5Qd4z4FScQCzgFWqugwMQfz/5+RytSaG
            14vL/B+zQ8B5tP4oxKlscwQXVORY/P/2awevC8xPRRUS6n/8Be9PhUSXBBZ14meg4hD5H5gUVLA6
            OcqnnNOlZM3WM5jgHYfvPgwVldREqLx/2cdHO07aYv4FzwNffHugEom3y00JHHx4HNgwbrRunquC
            PXN8I1jMwCUDC+/HLFiwyj579nQmdIMluFwKWDKo4MWloILhDkPFwYKtadGpVPIpvI+RIpeiqgSj
            cEfBJJuUW8mg4iAxO24Ex+5QDegd3UG3Kitk+J/jcTyI91XIpv63ClQy58LL1ckKyyrXUnUsfE2p
            2jTvlqDAEv2neENksA11KWAx0xcXtqbF2p8RVNCteM0Pt1HhzoPRH1opSFli1qGSxcIZTLhxmAJL
            1MzdhQXSq4/92NgdZB0rI4s+Cxu/63EBY5fCrVzf23GjuL1QGRXmbL4HLFvW4cpqhdC1eAPDL3Y6
            ZCreTEfb4LyO73sKmEsAi/qTVeM3bqPCUPl/dpqwHUEF78hbrH4W+qiwJwJKBBLV6pSbtmc5FbMD
            VMyOW4pyi2X1VEYGzBboRvLfcgM87k7gwImggv9B5jQqBZirmNU6I2io8GUPoHgdLr7OlBPmLhHY
            khwrKDgEYifEruUdfC/VW4OFL4BRi9oop+JQYafC4Q/X/Oy5C2ehT5SYRRAoZ+LT36bBgnkVrlbG
            AudyqGCBUec2e/aRanFcOT8sdikqn8OdH/0zdDARVHCfIsBwoa2EQREMeJ0jKMyuT303qwxQuZZv
            pp8UgTcKg3VydToDBp1K6lreEizqZHINAEPFq5QrUPmnnbamRacSQaVSYLLQJ6oCRKD40IcKJjyP
            Qp+oSbsfA144eF7VsJxqeIjIsfAFudW1qP/9N33GjdIyqOC+jAp0BoLoWpgFQnSOZtbJ3zcb5/Ac
            LB/s+foYQYUdNk4Ilwc7vTGEeiuwKBuJdy3lVFQ7lagGSDmVzNavggr+KRj2qGo/h4ea2K1wkpZb
            1GJBy84nDxrOg4SrxoIVd7dVDJcnO/4vHIZ+brEgRevDuVre4hSi5arDUfsY7XMF2pFLVje1qIKC
            fx/1Lcr6YYWu5a0di3IqnKx1sERQ4bYqWEhUw7etUInyKSMr6kBwSDBE/hLvRfkUTtCyTfXCiFX0
            qiaNJzX0ZqWtwyxc/ELE36mqTj8OvqizRnBbHYLPs+/NrCtbruxv9pqvQZ9HydzoxoC/49yM6siK
            gHlnen+O9BZg4RNaTdYyVLARHOdUOPxRfX5wX1ZAhdujqOo+hslfdgoWdyr+Ww57fthxYTM6LnYo
            o/Fo2LFEvboVjPfK18NJU2/x6fZb1VJE6+Ll7PUWKGzZTraO0XfxMz72CC7ZmEFmx9cuJ3w5d+fX
            HXZGRaciXctrg0VZT9UYCnsq87AHmF9RLWozqKyq+VHVyFzb426DgaIm5VRGLoXPowohcegI1XeK
            +01lDaiyRlszQteC7uWB3ldQMdNg2VKgt0BhKxAyzX5nBBeEsvrf/Lt+Q8z6FXmexuHj6xvmWl4T
            LAwVbmGZFQrVqTBqpj9K1PK+ZIqgwk5l5FIcIH/SPIJK5FKwgPnxYFKWe3pXzh/nVyKXV7H3VUVw
            8ddcWMyCCzhYd/X9PVDY+/nW33CB5tAGw2L+z1T4w+Pe+PTRDn2K/Fr4Seu+mFBo5FSiECgqGKqX
            cna3NTGPNIIKN0jCXMpnO3Ulf8JUgUrULgWhzCPn8VMIcPgIPocYBjFUotzKqhDI18X5FnzfxLy6
            3r3fmT3OledlzzYRHspdIljcrfxhB6j8Yc/X4qeX15F75S4UJ5B5LbBU8ypVt5JZ+KyditofpSpU
            OPRhqPwZTAoqHPr4n88XCuZRotqeKJ+SDR0RVUny3e8ccInWm9rt5Puz+/AaOud2GNDKTfg1jOPv
            fLLn6+4TTVyesmvizUKhSl6lAhU1Rq3q+/PaUMEqZA97ECL/Ne1WRk/ZU7mUqHEbVh8zVBgw6kkE
            UbuVVXmVTAoe1ZzJa+mttz8SnkPc1wd4n6vuf9hpeybVULLSQffNkrecV+HaC+4HhNXL0Ri12QBN
            W6tHZ6DCoc/fdgoUnzKnogaGRqvJUMmelYThD4NYuRQeinMPkPeK1z8T/lTXeetSgPFy53DJunLw
            A/nUwGdDqJidHyyZW+HWtZxXqVSNRg251F32XFBxUCigIFiUU+F8CrdLGSW31RMdR0DhRG3Wzqdy
            3s6le4PCSnGI6WBReU2GS9ZXLLrpnOicYFEFO4OKsvKcpI1yKqrZudqHSFWocD8fDn3+YweY/McO
            oGGoOJiyJvkc+vAwnJyg5dDnn/Q9bllbHeCqcv5al6kst4nl8L2YuJe7Gj4jzOu8hmOJDghzBPw8
            5aiQqJHf9joVVBUqKp/iUEG4IFT8MZ348KtokGtsOZs91kS5uujZ0xg/o0tZ0XeqdXnCWje+thRc
            EDAKKqqGFbdzpHOBhTfMboWrSBVUosZvEVRWdSgcJWoZKuhQfFJ5FQUVbEHr+4rVyKq/1Cj/pJrp
            M1B4bN/XqAFqvZ04FcG5Ti+XDJsIKm8SCo1qgUbPAVIPaB814Do3VLjRG0LlP3YKFQcLJmpVzQ9X
            JUdteqIq5JknOlaG4Wyo3JY418JlUwEGr43NQ4uc07FEtovbXnACUkFlVC26AioIF5Wo5ZyKggq6
            FYbKVztu9MbVq+hUsudOc2O36HxVXcqWxoOt61TkXBAkCiqqoWQaDq0GSxQCRfZeFRxl59UYISud
            Cvad4IGZsPYngsr/2mkNUAUqKkSM2vNkrY8VVNRzpxVQyneh1tVKOReeGCLKyZbCILPzhUIqr5Ll
            DbKq0axjHNYA+barYqhwL+UspxJBxZO1o5wKnqfIqYw6X6oWyNHD7LNcSkPl/qTSFVxuETYZTM6e
            vOULNGu2H7XByApKNj7ILFBwmd2KaqbP7VQYKl61rJzKqHk+VycjVBgoqld3pW3Kox1fMB363J+U
            s8+gEuXdStfKKrBESaFoOAQVBo0acWV3XtyHTFkIxL2UFVSyRG0EFXYqvq8qPMRnT48GtVLPSTrH
            w9datyeVsoigo36jXh9ptWNhG5V1MkSoYJP0rGOcaqRjth8qCBZuVavaqTBYECqqnYpqTTuCCg+9
            mQ1qdY6Hr7VuW8p9RNfJ9DWzAixZwrbScpShMhrQWTXQqSrLq3Cy1nspq7YqkVOJGr/hvqrzUnmq
            o4dAmNg+18PXWrcjmQMR35m5PoagWRkKZVBRrUfZsWQh0MjOjzTKq6j2KtiqNuv/M4KKGvJAtagd
            DRY+Gpgp6pW86Y7TuhtlIY66Xl4lxxLFalwTpLr38/QWeZUoWYvjqaBbGUHFOxSyUzHT1e7RuL7Z
            aHlR+OPQwnDUxLzVOrtWhUIzboXDnz8sr1reAxVXtb2K6liIMIk6FI7GUkGoROPPzI6UV3EqroZK
            q6Jl18wesGRuReVW2K0gULL2F+X+CUIcAuFjJHAgYYSK6gfEHQoVVLxaOYLKzKBWFais6ivVai3X
            ilCI8wc8LEL2oKxK1fLKWiAc7zOqBYqGlcReyjzyWzb0gZ8XHPciC4FmO2DuOUet1ln0MP7KUAou
            o6Rt5Fa4yT7nC8zmCswIKtxkXw0tyVBRLWqztiocAmEfqWjoA0zSZoNaNVRaK7QlGki1FSxcx81Q
            ydxKFgJFDyFfVQuEIdBo0CY1Rm02nooaTpKhkj2FYORUVDuVhkrrIrXHseCFzN2uebBnBRduMTpq
            h4HbrKiSsOWHinEYpMKf0aNO+ZxEPbpHY88oqPT4Ka2r0BawjBrEqWcvK8dSrVpW282UuRVstq96
            LvPDxNipYLIWB77mnqPZ+DPROLVRPyk1/GYnalsXrT2hUJa4xVG/lVPhRwysfk5wpYUtPgdIPQIV
            n6PsUOFn/iBUXAqy0dCS0SNNztGep9V6Nc2CZeRW1LCT0VRpi6G2mylrYZuNCKegwrU/EVSyECir
            Xq4MFZFVuzdUWherraGQgooKgxRceDBslTsYjQGRqdofiMdayaASJWtVCMRtVipDRahR9CtPdWyo
            tC5Se5O32R0ak5VVqPjk68f5SKOaIHzGMj+9kKesBqgSAqmey/xgscrwm13707pKzYAlq2LmMMih
            olxL1nN5T17FbOxWojCIoRI9UExBJapy5+p27s0dDRMxejC7WUOldeHammNB2x/dpSOgRA8a29Nx
            bpRbQajwA9yVU/Hwh59SqPIqFpwHNSi2cirqUacrE9mt1qurChaVtFVtNfhZzF6w+GHTlerTWSm3
            wg8cG0FFNdXHEEhBxfdZ9ejmqvbs6YTReem8SuvqtMWxqKQtty6tQiULgVa1W8GnGGJ+BWHCjz7l
            joWVhK3qE8RJW+7SwG6lq5VbN6E9ORbuB8NhEE/qYdN7m+67otyK6mzIjgWdyqgRHCdsRwlsbsMT
            QSXLN7VaV6cKWEZtVzi/goWKG8K9VruVrIoZwaLCH+xYuBUqqtVx1Ju7Q6DWzWkmxxK1tkWo4Pgr
            PGXj1567la3Kr6BLidqrcAiEYZDPVTueUVeGymNNGiqtq9WeHIuqZvbCokKgUSHCbVSk3ErW0hYd
            CzqXL3aaW1EN4aJ2KxXHErU6roRADZXW1Wk2x8LJyifTBeqDmLLey2bbCxAO6DQbBm0JgdS5UC1t
            2bVE1e6ra8darTfXCCyqUdyoYVzkWCp5hFllUOHaIOVYqrVAowZxWa/uqC3PylxTq3VRmkneRlDh
            xK2aKg/SMtseBvFYtjyerYKKAkvWwZDPhQqDogaCFdB2Q7jWzWi2gZyqEXpvp3frqHp5ZWc6HnYy
            GsyJQyGGCg7aFHUy5HMRuTbVhicaJmIVZFuti1MGFr6wo2b8yrFwsraSW1lVI6QGc2LXgk4l6gs0
            qmL2uToHqoEgn48VD2JrtS5SlRxLVs2M+RV2Lvh6ZW7lt5irRnEqt4KQiaDCbkVVMXsT/si1qYaC
            2TAR7VZaN6WZUIjdyijHUnlI+Qq4RGHQyLFUxq5V56GaX+HasQpkGyitm1A1ecuORXU+VFMlYWvi
            daSspS32DeL8ikMFnYqCCodBUW1Q5Ny4yj1K1nZupXXTisCSVTNzgVJweaJpdTuNzLFEbiUKgyr9
            gXBZOTcOg7g9z2hAbN5Oq3XVqiZvFVhGjiVK2j7QemeloKJa27Jr+WbHbiXLrVTdiurSkIWEalQ4
            E/NW66o1EwoxVLIEroLKyn4wKgxS1czsWjAEqjSGy87FKM8UnQ8EbOdVWjep2VqhKBRCuEQhkBck
            s31OBV/7hIlbBReevsP3Z5K2HApVa8bwXHSDuNbNa0utEDsWBkqlJshse2FSDeOiHIsCyg+Yourl
            av8g5dqqIdDWBHardfFSYIkSt1FtSORYEECr7s6qKT/nV1SOhUOgKGkbNYgb5Vgy1zYKCVutm9Oo
            VsiXI8eiAIOfqTAI178nvzIajX8Elah6udKGBcMaDoUYMCOoNFxaN6eVOZYneD9qWbq3QRy+5mpm
            VSvE0w/6/kzS1kx3aVCuJXIrUTjYcGndlEbVzVHSMnIrkWNZlaQcuZURVEZ9gqLcis8roVCWZ9qb
            wG61rkIzyVsVBmDhUm6Fq1ZxfbOqDJWg8iwRVLJ2K6wRYBkwHC6OHEurdVNisKjcChcmdbdmqGRt
            V/Ymb0cj8jtUfogpgkpFkWPh81ANBxsqrZvViuRtBpWsAFULVtZ+RTWQY8fCYFFhELshPvYKZBVg
            +LsNk9ZdKKtu9uUoeRtNqjCtvkNHboXhMuNWKs6lei6yc9DtV1o3r63J26xAncv+q2rhLMeinMoo
            v1JpeavOBR43L3cVc+vuNBMKVe7So35BvO6q1HAJyrUouFSAkknVCmWAyYBi1lBp3YGqjiUrOFnC
            dnVeIcqvYI4F57w8EwIpGFTBgsfOv1Xrb7VuSlsbyGVAUQVrVSiEy6qBXASXPY7FlTkXPD/Rsbda
            dyMEiwp/+LWCS5RXWFGYqjVCKhxSQMG2L7OuBV9X4JK5lVbrpjVTK5QBJWple46akCx5m00IFV6P
            Wd29VOASJWrbwbTuQpWWt7PJypVJW1dWIxS5lsyxzIRAat8jWIy+12rdhWaqm1UeIYLJudqvuCKo
            ZPOZnsyZVHijljsMat2tZlveVpzL6tAHNXItM1CpSoU0q9TAad2kGCxRAjcDykyNyJaCpHIgFbiM
            gDKbWzHT+58dX4OjdZeq5lh8HoVGr9UQjJOtKiSKaoD2hkCtVquoSjsWnkd5lFGNyB5l1c6j8Og1
            gNJJ2lYLNKpu9tdRcrICl9UahUQZcNTvW63WYo1qhdR7KuQZVbmuAg2HQZFbqcClodJqnUmVHIur
            2nYj+s1eKRAo0PDrSt+g1ZDpKubWXasKlktqu8EhjZpH8GiX0mq9gkbtWC617YZK5vo8cjGtVuuV
            NFPdHL13KW03snCn4dJqvaJmciytVqtV0h6wXGLbja5KbrUuQLfuWDrH0mq9gW4dLK1W6w20Eizd
            dqPVaplZO5ZWq3UGNVhardZyNVhardZyNVhardZyNVhardZyNVhardZyNVhardZyNVhardZyNVha
            rdZyNVhardZyNVhardZyrQRL9yRutVpmdvuOpTtGtlpvoFsDyyUOPtVq3Z32gKVHa2u1WlK35Fgu
            cYDvVusuVQHL6AFfbzEifgSO7FlHrVbrlRSBRT3neJX2rlM9qB7nvIzvNWRarVdQNRTKHgiGy+d8
            NnL2fCPlUqLHwI6ek9RqtXZqJsfC4U/lSYPngksGkCpcGiat1pmUgSV7/nH28HWVczln4zmHxAPN
            o+dJv0aVdDcWbN21FFhGYIhgMgLMHim3oSaECwOG19Nqtc6kUSiUweRX8D5DaNV8dQYAAB4qSURB
            VKUiwDzQFLkY/F2r1TqTZqubI8AwZPh3K6RCGgQJw0WB5lyJ224s2GqBGCxZLc+vwjQKibYUOtVm
            JXMrD2b2+DJlgGnX0mqdSVXHErmUX+I9X+Z1rFBUK8RQqQJlFi6X2Fiw1bo4jWqFMqD49PNlypzL
            SkVO5TGYZsIipUtuLNhqXaS2OBaGSgQUf43r2aqsFghdymqoKF1CY8FW66IVVTdX3MpPO4ULLo/a
            tuxRBJdsisKiSlV0tv/V42y4tO5GCJYof1CBCodDq0KhLHGbAeXJas4l2k6mmfY8+H3+Tat1s6q0
            vM3CIJxma4hmlVU3I2CeYB4BphoSRQ4kg0lU9d4wad2NKr2bGSoMlAww0V17q7Ici4IKTtzmZU8S
            dwSVcyewW62LVqXlbdWxZIlcs/1A4ddRjRADReVaKnkWBcNKLZmCi9kpYBo2rZtV1lcI51mOpQoY
            XOcWRTVDGVQYMFiDVM2zZE5lptEgr6/VulnN9hVSMPkh3svu3LzukSoJ3Ac7hsj7l+kJ5giXLNei
            AFMBSlQ7thqwrdbFq9KkPypMCBRcjqqdeRtbhCFLlLiNoKLgMtumpZpzGiWyeZ2t1k1ppoGcyq/8
            sANUGC5ZodpSmKJaoSgMem/HkFE1RKO+QxXAsnuLzgM3GGy1blbVJv0Y1qg79A+asnYte1SpFXKY
            fLAYLlGbllEjuSgk5OPmcxDVIrVaN6mZWqHMsVRdi9k+t4KvseqYHQvCBQGThUMzUMnciso5KcCY
            NVxaN6pROxZfVndqdimRY1mRwEWpPItyLDjNwIUBo/JO0Xn4Ls5DFA41VFo3q0oo5MujO7UqVD6t
            CgOy1rcqFGLH4mCJWuJG8v3lc4BODc9DBJjIsTRkWjel2TFvM/sfOZcoebkHLlmOJYKLA4YTubPh
            ELfjQZgwUDLX0lBp3az21ArxHTpyLJUq14qi9izcjkUBReVaRr2e+firoVB2Prqpf+suNNuk/7fl
            YVAVLibmM8p6OGeOhZ3LKBxSuaYogc1QwXOR9aNS22q1rlqV3s2+zIWKLf+sc+FtVMV5FtX6FqHy
            8WVS+ZYtroUbCfKxf3uZMrh01XPrprWldzPDhQuUFypO4K4MAxRcHBLKrSi4ZLkW3o4rC4XwPDBg
            Mri0WjenSo7FrFagommUxDXxOhIXegYLt2VxqGTOBYdUyEIiBVk/FxlURudhRUK71boobR3zluGC
            BQrn5woDRn2G2LV8pMnfV+O1ZNXPlRzLNzP7atrBMVw6HGrdpKq9m305qxViqPCdOuuYuEVROOSg
            iKCi4FKpeo4Ai+fhWzCpfEu7ltbNanZoygwuowI1gsuecIhdS9WxcPXzqJl/JRT6CnN0Lv6dc+Sc
            Wq2L0pYcC1Y5RzUiGVzOEQ4px+LQQKB8gkklcyutcRkuUSiE0wi03ViudVOqgsWs7liwMFWrXGfF
            vZGjVrjoWBAoOEV9iLJqZ5VnUeeA4VLJtZg1YFpXrq3JWxUGVBzLD/i9ulPvaSzHrXAxHFKOBSGz
            JSRS1e4jsKiq+JXnotW6CM0kb/11FAYgTLICpUIita2K1Pgs3AIXHctHM/vDYrhErkWdgyiBi8f+
            BSbl5M6R1G613lx7QyHVSO6rmL9GEleNz8IJXIcJwmVLrqWSwP0iJodLFBL9onPQkGldpWaTt1me
            peJYRg3FVrVpyVyLg0U5lwpcsNBnzk3Bhc/LzNg1rdbV6LH4vWhIyGxYyGw8lNFASzMDXLvY9UQO
            KxvuYaZf08zwDWqq9LCuDJnZalWlQnh22Z/N7G+a+02Rc4ThTXAWLLjMcFFjoah5VKgeYP04H+0X
            i9vfqPFTsjmDhbsgRO1ooq4Fo8eRjJ4t3XBprdJFggWXs4Qp5zbUwNbRaPkPtI2qRu1NFGAiqET9
            mpRjwX1FyGJPawZL9KRGhMqD6XPeau3RxYHFbOxaokdvVMMhVb27x7WMqsl/BMvZAFXRORmFiHhe
            Kq5Fnevq+Wi1Il00WLLCpHoXK8DMFqjq/rEUWDLn8pM+Y9djpp2LcnB+PiK44EPsM8B2SNRapYsF
            Cy9HycssackhwegBYqtyLVkyVwGGx58Z1dQo0GLOpfrAeg6HOiRqrdJFgsWsnsR1uKiwSCVwH00X
            ptm7dDWZy+6FnUoGFnUiqyERwwXfR6cTubd2La09umiw4PIoBIjcisqzqNaue12LK3ItKixSuRaV
            s1Hbj8CCgOHxeSPXEjmXhktrqy4WLGZj16Kqn6NHn/Id+1yuxaVqiti5sFPZEg6N3FwUClVyLXiM
            DZfWjC4eLD7HZXWHVrVEWa1INvbsFteCr5VridwLg4Z/o9wLA4DbtijnUnEsDZfWKl00WMx07M8h
            kaoNiZK4q1ugjr4XhUUMFzXx73Gdysmp86JCJH4PYR2dg4ZLa0ZXAZYILpy0VM6FXcvK6uessHGV
            8SjvokKhStsWXOZ8CZ8bhos6/qyNT8OlVdVVgIWXs7xC1kBMhUOqMK1K5KKypO5WsPj2Z8CrXldC
            ooZLa0YXDxazvPCg9ceGc1hTpHItOFp+pSBV9jF7jc6F4ZGBZVRThGGRb1c5F5X0VrmmCC57zk3r
            /nQ1YOHlSkiUQSUqWOdI5PJy1t6Fk70Mk2qrXAZFBBjlWHyO61XL6thbLbMrAYtZzfJncMlaouI6
            eP1m9cKTfY9PiHIhGVS4qT+uL4JhBhf1fiUsbLi0KroqsPByFA6pJu2qZqjSvL1aeKLv8fvsPlTe
            JYJN5F54OyPnEkFFhUPRsTVcWpkisOCgZEvA8rRgR7lwYs2Kjyz3/mXHPtvp4ziy5/xwIhfbjFTF
            v3MH9Pjy/tPLtrM+RJWez3hy/Tt+Xn69nIsoRJxtIKf08LIdhArnelqtV9FesLg4CfrTni90tlrv
            7RQulUdx8N3aC8xMwVHJVIdLlLCNgKLAEp0XX/c7O4yNmyVusxqhaBuuB/qs4dJ6E60Ai3Itv+3g
            WB7tGSwe+nw2/YRCNWaLAsuDHTuQSsHh73kB/G0HuGQtcaMBoCLH4voJy74elbStQEUdIyehcT18
            7L7cakVSlRqbtMqxmJ26Fr9DK9eSPfY0GtAarX6UJM3EcMGw6PfLNhkwP2me9R9Sf4SfAzw3fk44
            yR0laSvJZ7X9di+tN9PKUGiUa/Ek0Xt7Tgb9baeDbiNUOKHL4RBWv1YLzCjfgnAZtWupJGy/vywz
            gBgsUXI3cinR5J/78aiEb7uXFkrVjEafRe+daKVjwY26s2CwPNozXHhcXJXARcCo8AAL0558i4dW
            XkOmaoRG4c+oJuiH+L3D5ZutAwvC0Y8HAYr72O7lPlQBgbqeM6io6/5Iq0MhvCNiOISJXAfLZ4tH
            9Fd5Fq8h4gKH7Vy25FtwHX4cGBJFr/mkZnAYwUX9XkmBRDXie4LPETDtXlpmefjOjiX6XqpzOBYM
            TzjXwu1ZqmDJej+zW9gCF5XMrUxqvTNwwWror7AOVgSTaPpA3+fxbrJz0bovVUJrnFvw+kirwcIb
            9UKAtSHoWtSg2yOwqDu7qgWpwsWXudApa5idTAUSFcJ5DRM6ux+0DrPj/R9BhceRwc+eXuZ+Dnlf
            1blo3Z6icCdywZFLL7mXc4CFXQsWBnQtX+3QKTEasyVyLJyUNHhv9u6Lv2Gw4DFEJzSDiWqu/90O
            +SdvROdA+G7HUneNSnsbnPxc+jFgWNnu5T6k3EbmgkdQ4XDpRHub9EeKLky+S6r+Mo+0HEGlUptS
            cS38PbXM69wzZdtDrbizbImPK/vWuk6pmlpvBvLZDs34/3qZ+/TZjpv0c+vzE50LLGZ5Ya3e5RVw
            GEhRod0Ll2ifo2NQx5S9Vtt0KacyggpXjWe2l7eXvW64XK/YWWBqwrvbfLPjPkJ/wfwvOwDnVTsh
            jjQq8FXIRI5l1DFvD1zUZ5HjypYzEI72L4uLVVW4qhqf6SyJx8nH3rpeYT7PUxIOFuzV/JeY/jbd
            CVHdwP5PrwGW6P3RnV6FSdHrKOTAfZiFS7SOCITRctZEfwQYBgoDozptDYv42FvXJ1WRosIgdCkI
            FQ6FHErpdXVusJiNY/aRa1GQUYVahSq83ZVwyVzJ7JQBZuRWKpCZyb3wuYvOR+uypcIgT+h/t0Pt
            rEPFwfLny4ShkA+p4GDhJ1ic6DXAYjbOK4zCoswNVEOM2cIRrSNzWKMQrgqXCmAYKlzNnA0IzheD
            Amr2XuuyFd2MRm4FoeJzz7F4PsYdSxZavypYovcit6EKryrACiy8frXNyr5G65qBCsNlVMsVQQaV
            uRTVEzsaQyY77mq4dm5tCd9mdUvAzBwu51bYrfzXYsfy1U4Tt95c4kSvBRazegEfgUaFIFkNzMy2
            R/uauaqsNit7llAEoZF7YefCPbGjntlZGwR13vkc8L6sVgaSPTmi19BbAkqFPuxoecQ4T9j+KSbP
            sThYsKo5DYPMXhcsZjU7nV3cWXgUgWclXPi3FdBkI8VlDQBHgFGh0ci5VBzLinO3Rbw/ldeV3NHe
            dj2u14JGtp3Rvqtrwq8DhEoUAv3Xjl0LVzVj4jasETJ7fbCwshDJl7PCG4GkYuOrcBn9ditYcHDx
            DD7RKHrv7DTjX6kx4rhYHUulpm1lQVMuKmqDE1WhRwDZ8tm5AHUOOM04FRUCRVDxz6MwKMyvmJ2v
            r9BIviMYo2XwwIu9WnXL2/NjfaBt/oblSP49/E60DxFUeBBxHjICB73yO8UHyxsm+bHhSHV8UeEd
            KwuLZuHM52OrIpDgcvRZpshxqtdb3x99xp+rfd56DiMYj6ASDZrty+5QuKWtepZ5qLcAi1+QfLf1
            wlFxKCpUGG3TLB6jRIGDxd/BY+DvKcCoHt04qTGA/SLAP1k1UPJj/AnLeGdXfUBwXyO3xe7lgX67
            Fy4jd1LpqpCFdJX3WBmE9gBqD5yUKk6Fq5YRKNxuBeESNYgru7a3dCx+Yf6y5wvW3UtkzUfVswyY
            7AQ8wBwLyAxcfD5yLhzyOGBwqAgGyqeXCdsQ+F0E4YKAweNWHRr5OHhfo/CLj+/cTiVqRZy1yeFj
            m5nzcrSe6L3R7yvf3wMWBRWsAVLJWqxOxhogD30wWavarSi3dKS3AovZ8QXqJ8Usdy5Vi45z3J5P
            mFvCO/EW5+LKksgMGOVcECp/2wEufkEgXNC9oE1lN4F9QqphWjQsKB7PStdipgtGVrOl3JqLb0y4
            PIJKBpEZMFXWM1pHpJFTUSGQwwJzKp5XiWqBouplL6cXFwqxcAeznEsFLMoij2ybuyVeT8W6RoDx
            uXJbEVyUW/HpDzvEvmhT8a7C4REC0y82v9D4UbfRWDhPdjzUha9vZQgUFQyVH4qelsBSQIngMguT
            vXCadU6sLGx0p4L/NYdADpT/2HHCdqbD4TDP9dZg4XyLv+cXVxUq+FtcHsXp/j0v9C6+K0diCOFr
            DO2UU1CJXAeMw8WBgq4FnYvKvXBy1wHnx6oSeh9hfTj28Hc7uBcfYhThos7BFnEB8X1EO+/LUSKR
            /6/IPZpYHs23gKXqnPaCBdsxcV6F3QpWLf/HDnBBx8L5FYY57kOotwaL2SlcwtZ8L1JAwXVVgIIX
            IoZFCBff1qrQyC9wrlJGl8DO5QvM/7BjsLBzUe7Fj5PzJVyAv4uJY2ucVodADBXeL4ZnFvePwDJy
            LlWwWGG56rT5PKrzOgqB+LxFQyJgCMRQ4cZwHAaV3IrZZYDFLIfLyKX479VFiic+gg2Oau+FkP/4
            LaER/g4v7igs8oSuw8WdhIMFqwoRLA4XTOzinQYLHCaRcZ/VxZkVYLy4ZuGiLsxRjoBDv+iid6lr
            ZtRwcgQUnFvwWv2+OkXrQ2UhJIZA0QBOnGPh/ArerEb/fapLAYvZKVzwDlb5rQJKBBY+UaNHZuB+
            bXUvGCIp9/JkzxfEe3v+YxEwn+w4/InAkuVdzI5h5nkUdDHqvCkYmx3/X3uci/q/1d0XjzVqXo7/
            UcWxjODCy1Xhuistw7eChWuBMLcSgSUacyVzKwyUqwiFUHiRcjV09psZxxJVYUaPzNjS3oWPBQuu
            X0h+fJx3wbDouz3DBS8ULGQZWFRY5PvyCNt4D9v3fVN3xpENXuFeOCTicIjhgndVvvijwow5p6xQ
            8+toX/E9/m207Uq3E6UILFEYxIlbHiUOKwiUW1E3l5IuDSwuvBtmYMmgoqao169yMV4LYqZDI7P8
            QsggpO5iniBFwHy3A2C+2bNzwZzKV7GschIqocuJ4+hZ2Wan53elMnuvwjMsONHxmZ0W3Eo3heq+
            qWX8PoOLgbJyX6K8FN54sAKAYcJtpDAEnqoJQl0iWDgkMovhwvYsAgsnIVX7CFx294J5lyix68tK
            FffirswdjAMGq3vRwXBC85udAiVyLVwVjXDxrgUImOzi5+NarVEBQtBUwqEsFMq2z+62Os5NBLaK
            e8r2ifctS3hz6IyTqllkqDCsb8qxuBRcIsvOdxUFGYRN1D7ilx3CBAeMurtUAMOFsAIYdy9+0Xyw
            4+pXVZvzjT7nJCyHRI922kiPn0IZ2fUVUInWVylk0X+O65iFSgY0hJpqVxNtvxIOVY8Z91HtH18L
            DJhRMlwdz7RLvVSwmNXgMgJLZKlHDbD85OLzeBRc+ILI7uDRdyqAcRfl+/beji9yBgkCRdXu4LYx
            9ELnws91qtxRZ8VQVoUv6vGNoaMKh9kJVB1B5pBUlXw2VKNvT4FlTyhkdnqN43WsbjbKzUYuZXMI
            5LpksJjFcFEHnbkVhgbb6QgsXoixmbtf2H6R4H5uDY/8fQUYdE64TwxFPpbo2Pji52pvbCCHNUcz
            nT4z8f/p72HBi7oc+HFzvughODZfN26Dl114zfhrs8M556pvVb2vwgcFzAgqlfOqbqIRXJS7zW44
            XLY2QcXs8sFidgoXdw2/6DujE55BRU0/7bmA+dxdAzoXdDColYDB43XnhMeFkKm4MM61YGFWT6RU
            rkUVzFnYYHjIhQ8bD+L+48Xu38uqnXG/ornZ6XXzE/bPmzv8stNOfaqGajbXE+1TpCgcipy5uuHw
            zZMrMHg707oGsJgdF7J3dggTsqRuBhiGSNTy9BP8xiHz3g4Ogt2LsrQrAGNwvNj/ByGjEtN88fy0
            0wvI141w4bYuqrez7+Ne94Lr4YaDv+zwgHv8Hrb7GfW+xe3wsouvFe8fZS/rxbY+6F7U8AIYbo7g
            wuegquqNNMspRmHPb9rOJl0LWMw0XKK7jjrhkWNRUGH7+MkOyVOHC1787mIqgDHTF9EIMBhqoWNS
            +aRsUmAZhSHZWLwr5Nt2R/bbDjVz/B2EXlSLERWIaJ/5OvluhxuGgwZbK6N7ccCodjVq21n4Mzqn
            XOgxXFPXAgMkg8mu0Id1TWAxOw2LzPTFNONYIrBwDctHO4bLE8wx0aoAg2Dw/TOrAwbXwRcAdgpU
            +SW+4NSF5NvhpOmDWF4BFjwefI/h4u+PoLIHLBwC+TXxZMdg+WanXSEwURo9JZC3XXEq0X6q19HN
            NLoGMqCo7WzStYHF7PiCY8D45yPXgvGmyp5zxz53Ld4S1tuW+ITuJQKMwXtq/6OchYIQg8a/h5BR
            F1p0MeF6cZ+5f5NyYmrfZ4XbVe8rsKjcUeX4UHjHR7D40BL+2Q97DnmiLhB4LUUN9tQ+VKHC+8uv
            +WZT+d+VO1kCFbPrBIsrci/4ub+XJXEzt6ImBwwOdeAXewYYFV+bnQLEBp9HLoYhE93R1Oe83urE
            +zojtf9mp10oGCpRQnoEFSW+RtwFOUDQlajGgwgWvmll7im6iVQ1Cxj+Dq9jGVBc1wwWsxgu6gSr
            JKcKibJ+OX/A5ziUpLcBiQCjqms5TDI7hYjB+5xPwu/zerKLSV1YvC3e5iqYqG3hfru4KwW2SK7k
            jWbA4pODAUMedCtc/c6hrUqgcxLXbHzuZhyL+mwGIMuB4rp2sJjpuzUXQpV7iFzLqMOfA+aTHYY1
            8IZlCJhoiEfOv0SQMYtBozTK1/B6snUqgGTv7VF23H6u/D/DWrDI6pttB4snad2teFjEDQa5dgzX
            x/mN0f7sOYdqvSN4nA0mqFsAi5k+WeqiqyZyuaMf9rf4hx0GXvLhDLxzIAJGtQPJqqijUMk1cwEy
            WJUjqqwvgsgqx4Lr433CfNE7es3/rYl5JuVwf9oxVLyJgfofucrd1xlNvE3lPvdotI5XgQnqcfyV
            q5O66KN8QxQiRYneaP5D/A7XFd1do5hYOQsVHlUU5UVmcih7cwLV/eTt4b5ws3isreKm/qorgJpU
            jZfZsYPhDn3RKH7cUE/l+15Lrw4S1i2CxSy+I3BBVm1A/MJQLRcr71UaJLGdj+7AGWBGOZJIM8nZ
            aF3nAEu0DQUaVVullqsTHw/XEPHDvnAaDTw1G57dhG4lFGJFoRHbVgWTLJnrF9MfweQDYHvuxTv0
            Yf+bKP+iWrfO9C2ZDXNYM7+pFpK9AFLHFCV8Zwuuysm5U4ngw7CtJrPvCipmtwsWFyd2zQ6A+W2n
            cTvnXSpjW/jjOXz6bIdR9hEuqvaoApgRZMziC56XI/E5qqiy3lUFipPQUQ5qZnv4fT6nFaC/Rnh4
            tbp1sJgdw8WX8cKIkrocY6s420fRR7h8grmDxSd2L8rBcC/qGRfDd9ARYLjAjjRKOr514Zp1XVHO
            ycS8NaF7AIvZ8Z0JC4Tb3qjWiEOjD3Zow+KQ8bDH4YLPBMJnBKFzwcerKsBENUnKmo+cjJpb8Fop
            A1L1+3t1rsKd1eREuS78bfb6rnUvYHEp9/KL3osAw21dECzoXD6JiZ/NzICJnkKIDqbqYlTv41kn
            w8q+vyIkmPnN6LvVdWU1hZWJ16Hmd6t7A4uZdi8MHISKt/hEB+Nd9vFJgl/sOGmLyyokwtCI3cvI
            wURVpVm4ZGLZxLIl71cBtcdhzLihWTfFUvk1rMFTtXkRZFqgewSLSyV2zWIHg5DxQa6f7JB/+WCH
            /AsDJHMsnHfh8GjWwWQuppLsteB9BZW9TqjyvQwme0I8s9P/NxtVMGoucNfVypHuGSxmp+6Fk7t+
            0XmBxQvQCziGRw6GL3Y8QDUvK6hU4bIXMGbHx2jwHmsEky2wUuuvvF/JG81uX4ElGxdWdTBs1yJ0
            72BxZeFRBphHO07uuoPh5zHzg9/5dQaWKDRS4ZGCS7W6GhW5gmwyO4WLWjdrFM5k+6KWq9s1Ow19
            vUEcj2qvHo8R9azGdd+tGizHUuFRBTDoYhww6DQYEgwQBRSVc4ka2KkqapV/yXIvliyPoFKBlVp/
            9N5MCLYVbHgDQbD4mLbqgV48BGW7l0ANllNFVdNVwODYIT5gkAINAieqHeLvRa5FVU9X28GY6YJs
            4jsqtJoByxZ3Eu3HaLszjsVb3PrYK54r4+caR+PbqqE6cH53arDEmgXMOzsGi3fBV4+x4CkCjvps
            BJWZqukRXFRhnqmBQm0NeaL92OqYWFwLiOPY8nOOZ+By12qwjFUFzDs7QAb7m6ietwyFCDijKXIr
            o3yLA8HsuDCajQtzBSwRMNR72bZ5/9R+VMGCr/l/5DZLnmfxh6j/aRouHRIFarDUVQEMvlaQiWDD
            gIjAoz6rOJXItfjxrHAr2Tp53ZXlKuAyuPC6WapRJD87iOHiYMEaoyiBa+L1XajBMq8RYH7a4eL+
            ZbpQVkAzM0Uu5VFst3KHH4UeI9fC6xu9ruyDL/O2qqFYJAUWdC0Il7/s2LWMhkq4WzVYtmvUgpcv
            8gwyuKySr9mARiOHsjK/EoHlXKFQFXAVsOBrviFk7Vmw0+nnlwlDIc6ztKzBskJ4kSoX4++PIDNy
            NbOTcim4bMmc35sp1FXHUtkuvlfdj2h9SnhDULkWNXqcz6PnCLVrsQbLakVhEn8WQSYqMMp1RACJ
            QDKCSrQcAWbkfmbAMtqfinvCz6PtKXF7Fqx65pa42GAuGzWO1313arCcR5mLwc+jAjHjEio5B1X4
            s7v6jHPZCpVoO9n2q/uRbVOJnUY26Bcvj1rg3qUaLOfXCDL+nagA4XIVQKPf4dyC1+q72fp5HVnB
            Hm07g0xl+zNQcakaomhQddVBsd0KaMsf0Fqj2dCgAh61nM2zfcn2Z+96s89n3FO0P5VtozjXonIu
            0RMYssHQ71YNlstRFTS4XAFR9F60zco+VAvy7Pqz92egO7MPymUouLCT6aETEjVYLlfVQlLJU0S/
            rX5eDVUq25nZ9p7jndkXlQOLpsrzoe5eDZbr0YqwYmZ9e9e/ZRtb1rkCbK6Re1Hv8Xdb1mC5dq2A
            w8rfrrqequtZBbYICBE4FEgaKqAGy+3qtf7bc23nHG6nqlF/nwbKQA2WVkWXfJ2cc98yaDRQEl3y
            BdO6H13DddggabVarVar1Wq1Wq1Wpv8Pl1gam2CAk+MAAAAASUVORK5CYII=" transform="matrix(3.719318e-15 0.1149 -0.1149 3.719318e-15 427.9654 675.2621)">
                            </image>
                            <g>
                                <g>
                                    
                                        <rect x="397.4" y="690.9" transform="matrix(0.804 -0.5946 0.5946 0.804 -332.8439 373.5848)" fill="#DFD1B8" stroke="#AA9D87" stroke-miterlimit="10" width="5.9" height="1.6"/>
                                    <path fill="#DFD1B8" stroke="#AA9D87" stroke-miterlimit="10" d="M398.4,694.5l-1.3-1.7l5.1-3.8l1.3,1.7L398.4,694.5z
                                        M397.8,692.9l0.7,0.9l4.3-3.2l-0.7-0.9L397.8,692.9z"/>
                                </g>
                                <g>
                                    
                                        <rect x="396.9" y="692" transform="matrix(0.804 -0.5946 0.5946 0.804 -333.5322 373.7818)" fill="#DFD1B8" stroke="#AA9D87" stroke-miterlimit="10" width="6.7" height="1.6"/>
                                    <path fill="#DFD1B8" stroke="#AA9D87" stroke-miterlimit="10" d="M398,695.8l-1.3-1.7l5.7-4.2l1.3,1.7L398,695.8z
                                        M397.4,694.2l0.7,0.9l5-3.7l-0.7-0.9L397.4,694.2z"/>
                                </g>
                                <g>
                                    
                                        <rect x="421.9" y="688.8" transform="matrix(0.5946 -0.804 0.804 0.5946 -384.7724 620.325)" fill="#DFD1B8" stroke="#AA9D87" stroke-miterlimit="10" width="1.6" height="5.9"/>
                                    <path fill="#DFD1B8" stroke="#AA9D87" stroke-miterlimit="10" d="M424.7,694.5l-5.2-3.8l1.3-1.7l5.2,3.8L424.7,694.5z
                                        M420.2,690.6l4.4,3.2l0.7-0.9l-4.4-3.2L420.2,690.6z"/>
                                </g>
                                <g>
                                    
                                        <rect x="422" y="689.5" transform="matrix(0.5946 -0.804 0.804 0.5946 -385.67 620.8135)" fill="#DFD1B8" stroke="#AA9D87" stroke-miterlimit="10" width="1.6" height="6.7"/>
                                    <path fill="#DFD1B8" stroke="#AA9D87" stroke-miterlimit="10" d="M425,695.8l-5.7-4.2l1.3-1.7l5.7,4.2L425,695.8z M420,691.5
                                        l5,3.7l0.7-0.9l-5-3.7L420,691.5z"/>
                                </g>
                                <g>
                                    <path fill="#DFD1B8" stroke="#AA9D87" stroke-miterlimit="10" d="M413.3,684.7c4.6,0,8.5,3.6,8.7,8.2l0.5,9
                                        c0.1,1.7-1,2.9-2.7,2.9H403c-1.7,0-2.8-1.1-2.7-2.9l0.5-9c0.3-4.6,4.1-8.2,8.7-8.2H413.3z"/>
                                    <path fill="#DFD1B8" stroke="#AA9D87" stroke-miterlimit="10" d="M419.8,705.1H403c-0.9,0-1.7-0.3-2.2-0.9
                                        c-0.5-0.6-0.8-1.4-0.7-2.3l0.5-9c0.3-4.8,4.2-8.5,9-8.5h3.8c4.8,0,8.7,3.7,9,8.5l0.5,9c0.1,0.9-0.2,1.7-0.7,2.3
                                        C421.5,704.8,420.8,705.1,419.8,705.1z M409.5,685c-4.5,0-8.2,3.5-8.5,8l-0.5,9c0,0.8,0.2,1.4,0.6,1.9
                                        c0.4,0.5,1.1,0.7,1.9,0.7h16.8c0.8,0,1.4-0.2,1.9-0.7c0.4-0.5,0.6-1.1,0.6-1.9l-0.5-9c-0.3-4.5-4-8-8.5-8H409.5z"/>
                                </g>
                                <g>
                                    <path fill="#DFD1B8" stroke="#AA9D87" stroke-miterlimit="10" d="M413.1,685.6c4.1,0,7.5,3.2,7.8,7.3l0.5,8
                                        c0.1,1.5-0.9,2.6-2.4,2.6h-15c-1.5,0-2.5-1-2.4-2.6l0.5-8c0.2-4.1,3.6-7.3,7.8-7.3H413.1z"/>
                                    <path fill="#DFD1B8" stroke="#AA9D87" stroke-miterlimit="10" d="M418.9,703.7h-15c-0.8,0-1.5-0.3-1.9-0.7
                                        c-0.5-0.5-0.7-1.2-0.6-2l0.5-8c0.2-4.2,3.7-7.4,7.9-7.4h3.4c4.2,0,7.6,3.3,7.9,7.4l0.5,8c0,0.8-0.2,1.5-0.6,1.9
                                        C420.4,703.4,419.7,703.7,418.9,703.7z M409.7,685.7c-4,0-7.4,3.2-7.6,7.2l-0.5,8c0,0.7,0.2,1.3,0.6,1.8
                                        c0.4,0.4,1,0.7,1.7,0.7h15c0.7,0,1.3-0.2,1.7-0.7c0.4-0.4,0.6-1,0.6-1.8l-0.5-8c-0.2-4-3.6-7.2-7.6-7.2H409.7z"/>
                                </g>
                                <g>
                                    <path fill="#DFD1B8" stroke="#AA9D87" stroke-miterlimit="10" d="M423.7,692.6l0-1.2c-0.2-6-5.1-10.8-11.1-10.8h-2
                                        c-6,0-10.9,4.8-11.1,10.8l0,1.2l-1.4-1.8l2.7-7.8l4.6-3.6l6.2-1l5.9,1.1c0,0,3.8,2.4,4,2.5c0.1,0.1,3.1,3.6,3.3,4
                                        s0.7,4.7,0.6,4.8C425.1,691,423.7,692.6,423.7,692.6z"/>
                                    <path fill="#DFD1B8" stroke="#AA9D87" stroke-miterlimit="10" d="M399.6,693.3l-1.9-2.5l2.8-8l4.7-3.7l6.3-1l0,0l6,1.1l0,0
                                        c0.4,0.2,3.8,2.4,4,2.5c0.2,0.1,3.1,3.6,3.3,4.2c0.1,0.3,0.4,2.1,0.4,2.6c0.3,2.3,0.2,2.4,0.2,2.4c-0.1,0.1-1.1,1.3-1.5,1.7
                                        l-0.4,0.5l-0.1-1.8c-0.2-5.9-5-10.5-10.9-10.5h-2c-5.9,0-10.7,4.6-10.9,10.5L399.6,693.3z M410.5,680.4h2
                                        c6.2,0,11.2,4.8,11.4,11l0,0.6c0.4-0.5,0.9-1,1.1-1.2c0-0.6-0.4-4.2-0.6-4.6c-0.1-0.4-2.9-3.7-3.2-3.9
                                        c-0.1-0.1-2.4-1.5-3.9-2.5l-5.9-1.1l-6.1,1l-4.4,3.5l-2.6,7.6l0.9,1.2l0-0.5C399.4,685.3,404.4,680.4,410.5,680.4z"/>
                                </g>
                                <g>
                                    <path fill="#DFD1B8" stroke="#AA9D87" stroke-miterlimit="10" d="M412.9,679.3c5.8,0.2,10.6,4.8,10.7,10.7l0.3,8.2l2.3-0.1
                                        l-0.3-8.2c-0.2-7-5.9-12.7-12.9-12.9h-2.8c-7,0.2-12.7,5.8-12.9,12.9l-0.3,8.2l2.3,0.1l0.3-8.2c0.2-5.8,4.9-10.5,10.7-10.7
                                        H412.9z"/>
                                    <path fill="#DFD1B8" stroke="#AA9D87" stroke-miterlimit="10" d="M423.6,698.5l-0.3-8.4c-0.2-5.7-4.8-10.3-10.5-10.4h-2.7
                                        c-5.7,0.2-10.3,4.7-10.5,10.4l-0.3,8.4l-2.8-0.1l0.3-8.4c0.2-7.2,6-12.9,13.2-13.1l2.8,0c7.2,0.2,13,5.9,13.2,13.1l0.3,8.4
                                        L423.6,698.5z M397.2,697.9l1.8,0.1l0.3-7.9c0.2-6,5-10.8,11-10.9l2.7,0l0,0c6,0.2,10.8,5,11,10.9l0.3,7.9l1.8-0.1l-0.3-7.9
                                        c-0.2-6.9-5.8-12.5-12.7-12.6l-2.8,0c-6.9,0.2-12.5,5.7-12.7,12.6L397.2,697.9z"/>
                                </g>
                            </g>
                        </g>
                        <g>
                            
                                <image overflow="visible" opacity="0.5" width="308" height="307" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATQAAAEzCAYAAAC/hP8nAAAACXBIWXMAAAsSAAALEgHS3X78AAAg
            AElEQVR4nO2d6ZbbSK6tYTvTrqruc+77P+apLpddttO+PzLR2traQCA4aMRei4vUTErkJ0yBMGu1
            Wq1Wq9VqXZfeXXoHWg+l2fPt1y570bpbNdBae2mvc6sh1wrVQGttKXU+8X3Vc47BpUDWcGsdqYHW
            2kLvBtvR45l+iW11H2+3HlgNtNYaRfCKttWaxfDCdbTNr209qBporSXKQFZZ+HVmMcAqC76Ot1sP
            pAZaa1YKSLi8H6wjsEUg+xmsebvB1rKnS+9A62aUgQyhVVkYai4G2Wh5Z6dgw/d6Zw21h1IDrVVR
            5lYiqD7AGhd8LIJaBLMXWL+I2w62yFprqD2QGmitkUYWGcPrCdZPdF8ENbMYZi9m9gPWP+g+BBsu
            Bu/Lbm3rTtVAa0VSLmYEsidYnoP1E73G3wflVhaC6gcs32H9nR7z5zskI7A11O5YDbTLSiVlruGC
            ywL+CDOE2LOZfYQ1biPY0FKLLDSGmQPsG6y/wf0MN/xe2wV9IDXQzqtKVlkFys+pDGYZyD7B+hPd
            9wyLv34ENAQZQuwfWPv2h7fn+Hu+wLottQdSA+08WjP8h62NPRXFyxhmDLJPZvYbrHH7ox1bbG6l
            YRzN7Dh+xkBDgP1jZl/flo9v66e3+/09v9vpd9xQewA10PZVNgwog1o0jnHPi3AEM7TKGGS/mdnv
            sPjtT3ZssUVup9kx0NDVRMvsKyxf3pbMlfXl5e0zGmp3rgbaforqttS2Kxvu47f3yNhVYMZWGYLr
            D1gYbG6tRUBDcfwMgYYw+xve02N0yvJTljG6oA21O1MDbR8pcCnLIUsKcF3VXkWjUTaTYebwcEgh
            xP5FawdbBrSqy8lA+2La6ouAFn3PDbU7VANte40yhFj+kFXL41CfvYtGGboKZu5euvX1r7fl37Rm
            S83h4xYegwfFQPthxy7nF9OQ9GRDBDQ8zh/0eWYNtbtRA21bZa4bV9MjPFxRcamqq/Lnr7kQ8WL3
            /eHgP8MMQcaLP4YWWgaeStkGJgUYZpEbm/1hmDXU7lYNtO3EMENAqIp6ZaX4RY2Fpe/tuGh0qzKE
            atzM3UyHmcPrf2Dt2w40ts4cPKPC2izT+Q+9H7ubaPkpd5PB1lC7QzXQtpGCGcOBK+rxAnRxHRYu
            7+24aNSf69szyYJof0eWGcLsf2GNFlpknfkx89AnFLrabKVx+cezxfGzLDGAaqjdmRpo65XBzC+0
            Z7HgBY4wUhXyvmAM6Cet/fWjizGDWWSZecD/3/YKMF/+BxZlnVViXCjlcv9IvrvKGNGRGmp3pAba
            Oo1gFlXT84Xu7+PWGVfHq7gQX4h4EUYXY5awQPBifZnDDOGFUHOLTbmaMwF7M91x4+ntWJV1m8Fs
            lOVENdTuRA205arCDF03XGNcyd1Ot0gcZl4F/+Ftmy/OF9h2CERQi2JmXDSLBbNombF1hhYau5qV
            +jCObXHtHUItij2OWhLNqKF2B2qgLVMFZn5Rc7kDVtG7+8RAc5ihhTOqr/r59jiXdfB+M8xU3Izd
            TI6ZobX2b9NxsxmYuRhqfjwvdvwdM8Qyy0x9B5EaajeuBtq8ZmCGbhtW1OPFz0DDjB5bcaMLVWVA
            8fFKEgDrzDCLya4mwuwP05YnZzQjkBndz2DzY2N4ZUBbqobaDauBNqdZmHERKtZpOQCeTQPti50C
            TQW9fY3uJ9erqX3mIU0ZzBTIsIjWwR0Vz44sM7WvDJHMAhsBclYNtRtVA62umZgZZwe5ENUD6Apo
            XkSKrlsFDlmA3R9nmDmA0S1mV5PdSy6gjdxMVTyL+xjB5pd4HF1pPuYo0WHi+TNqqN2gGmg1VWGW
            gQHXDgMH2oe39/cM51c7jrFlMTQFNuwDhvcrN9MB7NZW5Gaq8gwFM6w1U4CpWGcujgMuAeQaNdRu
            TA20sZQFkMGMs4McSK8ADd3RrDWO2k++zy885WpGAI6sswhmqnB21s1UQtfTb3vyg5+XvccaNdRu
            SA20XDMwczigi5nFn9DlRKD9sEPzQoTZTPzI7/f6NLNjmGE/syijyfuM+30OmOGxIEDY/TyHGmo3
            ogZarAhmXOpQBQMDLUsKcKYwyua5uLWQ7/eLHS48h7CK80VWGVtnEczWJAAqYqj58eDje6uhdgNq
            oGlVYTaq21JAw2C6Q0HVofFgax77yL3SVBIAn4/WGbvGWRIAi2YRaBV3eEvQjKB2jnO5oXblaqCd
            KnMzo8HbVZixu+luJQLtxfRg6whmOO5RZTV924c2Vd1MBbRRK+29YObimJpZQ60FaqAdS2UMR0Wo
            KjuYDRFSVo5/nlfFq5IHf5xb7PBs4jiu02vT3tmxdZaVZnA2M4NZVNC6pwuI4PDPaai1zKyBpoQX
            CZc6qLot1VYnG+/IRag4OB2H+TAkVK8wnoD3hx2A9t4OMbT3dmydRa2ARpYZJyqyQt891VBrSTXQ
            DlL1TlndFo4AUC6bqqpXlo5DwewAH3Yxs177POkuJgK8KaS7m26dKZDx/qJrXBmfyd/h3mqotU7U
            QHvVTEZTtaKO2uqopoeR22Z2uBj8guAOtti91VtSexGuW45upb2DtVuW2bCmCL6jAt9LqqHWOlID
            7RRmWcwsCqirinpVVc9uG1pnZqflF94PjBscfqQF7/tux/VaXq6heptxAiAbbK6yrvz9XUINtdZ/
            9ehAG8GsUrc1yg5m81Jy6QF2mfD9wH36QK/n/fR9/fX2mK99/7nrbAazUcyMv79LqqHWMrPHBloG
            M66oj4Y0ZUWo3CaoMuuR2akrp2JUuM8eI0OL0uwQP3uyg2WZDWvKLLO9RgFsqYZa62GBNoKZmiVc
            jXWMhgdhNrMyhZvvS1Ys6y4o38cxv2d4r/dwDFnxbMXNvGaYuRpqD65HBFoVZjxwOytzUG5m5rap
            gLqCF5do8DY2dMRspn8GJwMymEVJi3MWzm6hhtoD69GAthRmWffWDGZqmrURzNREuzxpiqo7c6D9
            soOLyKUaeAw8y3nkZp67cHYLNdQeVI8EtK0ssygBUBm8ncEsmjHcGz7i4ve7pYZA82PD2BnWnqkZ
            ztWUczzs6lZg5mqoPaAeBWhbWWY8CiAqQq3WbVVh9tVeW3J/edv++nY/F9JiFhSHOf2blur4zFuF
            mauh9mB6BKBFRbOj8ZlcrxUNNN/CMsNYWQQyXL7awfVEoPlnuqvJw5w4ZoajAK61eHatGmoPpHsH
            WgazaFKTCsyyHmFZ3ZaLYYZjMhlmf9PiQHMLzS8Q/zyEGbYHYjdTtQHKQHbLYGuoPYjuGWgRzFRP
            s8jNzAaaVzpRzMLMY2RuiSHIPtspzJS7GZWZRJMBZ9bkrbqaSg21B9C9Am3WzWT3TGUzVU+z0SiA
            tZbZZ1gcbO5ueobT7OBmeokGW2ZqPtBR54x7gpmroXbnukegKetCwQyTAFHR7P+zfPB2Nti8GjNz
            mHmwHy0yBhpbZ2YH95ktTT+mCGa3NApgSzXU7lj3CDSz4xMVXU3V0wwbNOI4RzXWccbNHGU0q5ZZ
            BjMsnuWGkwpmWOh7a6MAtlRD7U51b0B7R9ucBFCtsxlmUb1Z1lYnsnJwsHkGM46ZMcy+WGyZcVtt
            Xkau8aPBzNVQu0PdE9CyWjPsSDHbBmjUIwxhxi11zHTLbCzPQFdTWWYMM+zEgTBT1tnIzbzFUQBb
            qqF2Z7oXoC2BGXabzawyTgBkMFMwyKyzLG6GMPtmMcw4bqZmaIpc41svnN1CDbU70j0AbTQKAGNM
            WeeM0SQhanxmBjM1PnMmo+klGj5u00/wLAlQSQDcyyiALdVQuxPdOtAimKEVM6o1iwaaZ50zllhm
            CDSvN0PrTBXPenkG1ppFlhnPn3nvIwC2VkPtDnTLQMtgxm6matBYnfGoapn52kFmdjxnZmSdYTLA
            b7ubifMDYK0Zw5ldzWhIE3fJbevsWA21G9etAq0CM7eosgQAgywrzYi6UOD+oDJ30+NnapxmBLOK
            mxklLe59FMCWaqjdsG4RaDMwq3bOqEw3l3WhcEUNGqP4mUPNt7HXmZ/I2AoossxG5RmPWGu2Rg21
            G9WtAa3qZlZgNrLM1sSgoiFOXq7B/c3cKlMJgGimdlWe0YWz26mhdoO6JaAxzLholmNmI5hVi2Zn
            g+mqlTbPq8kTBTvIcLB5lM3k7GsXzu6nhtqN6VaANgMzNT5z1DljNEnIKJiuTiy00NhK+05rnx/A
            4DN4tvPZUQBdOLuNGmo3pFsAWgQzNat5ZQRA1AYoc9lmg+kqloaWmsfU/H60ysyO42bKMhuVZ3St
            2bZqqN2Irh1oVZhl2czZBo1rgunsbiqoIcT8hPRMpgtbaHMSwPc5mtikYbaPGmo3oGsGWuZmRj3N
            RjCbyWhuEUyPAIfH6NaYwediVpN7m3Xh7OXUULtyXSvQlHuXwQyzfyM3czTYfM9gOr4fjjP9ZYcp
            6HjQeRfOXpcaalesawWa2fHJgq6m6mnGk4GMJjbBBIAabL51MD2zMH++3edFtH5/NOi8C2cvr4ba
            leoagfaOthkEbplhjAk7ZzDEsm6zo84Za6EQZWX9GBBiv+BxtDwdal04e11qqF2hrg1oHDdTFg0X
            zjrMIleTp3Crjs9cA4VK3A/nA8CmjWquAx+LinMBNMwur4balemagDaC2UzhLA84H1XURzBbcgzq
            OBBmWEDrAEO4cbsjdI15XGkXzl5eDbUr0rUALYNZpadZBDIVM5uB2VqwKSh/fHuOu5fR6AA/3o+w
            dOHsdaqhdiW6BqCp8gxl2US1ZmraubUxM7M5MPAJHQHtIzzH4YWFtcq1foZlr1hfa70aalegawCa
            mQbZksJZNdgc409ZG6AtLDN1PB/suJDW4P4Xuk/FC33b72+YXa8aahfWpYEWWWU8pMljZtW+Zqrb
            bLUN0NryDLNDfMwh9kTPYesM78fjf4LtEYRb16GG2gV1SaAxREajAKKZzaM2QApmKjMY7dMWx+ZQ
            48fQOmNX9YNY3tspzPbY79Y2aqhdSJcCmoqboXVSgdlo7sxKFwrel7XH5CcM3veenudFtD4ygB/D
            heGLMGtX87rVULuALgG0KKOJhbPsaqpas8jN/MPGPc3OMTQIjw9vu5uJJxg/H78XvG/rWF9rXzXU
            zqxLWmhRNjNKAnAmk5MAo55m5xgahFYaWmvv4XZmoTHU1ILPbV2/Gmpn1LmBVo2bYRJgNH8mwwzr
            zKIEAO4Hu4lbHCO+p9/GBZMH+DpfK4g1zG5XDbUz6ZxAG8XNVFYzGnCu3MzZcY6o6g9aBUlkqeHJ
            oz4zsh47Xnb7aqidQecCWhQ3GyUBZsozKj31I2U/JltzfF/2usz6q9zfVtl9qaG2s85toWWWWTRT
            EwNNzWxehZly9dTt7Bj8+TNQw9eOThz1vg2z+1FDbUed48urxs0q1hnWmnEXiqynmeuX2Fb34X4r
            eI2sL35u9N7V17buSw21nbT3F1eJm1VgxkWzqg1QNrM5CkH2y8YxrSgONgM1f53aj+w5rftVQ20H
            nctCQ8sM682wqwS30VZL1c3MYJYtvN++5uLYpVBT7996XDXUNtaeXxi7mmidcRttjpth/IzrzLhz
            RlZrhkJw/QzWvP9ooUVFua3WGjXUNtReX1bmaiLMolnBlVWmZmhiN3MEMwSYT+7Llft4DP6+/no/
            0d7T87auZWs9lhpqG2lvC02VaEQFtJzZZKCp2Y6yrq0uhJma8BfvR/F+R0WwrdYWaqhtoD2+pMjV
            9JY5WVaTgZa5maM2QGanbqbD7IcdWmEj2PxHw3ift/nx7+qdHWZqwhOwrbTWWjXUVmpPlzNyNdW8
            ABw/U9nMyDJT1hmXYjjMftDy3Q5gU0BzmD3Dcb3Y4cdtiLW2VkNthbb+cqKaM85sqolOeMmGNFWT
            AOxiOsi+2SvMvtmxtYYDyH1/0RX1z/Lp5/xz+NhbrTVqqC3Ull8MJwJUAS130lDZTYZZNhcAwgwB
            o1xNhNk3M/sHthlovs9Ri2x0ORtkrT3UUFugPSw0v/DZ3RxZZ3+YhtlosLnZqbXk2wyz7/YKsn/M
            7KsdoPbdjoHm++s/okPOO81i5pO7ZzTgWlupoTaprb6QLBGQzQ+AAItgNts9I0oCMMy+2AFqCDSP
            neFkwJjt9ONxK63V2lMNtQlt7XJmMFPWGVtoo/bZWYkGDmFSGU13Lx1mf7+t3UpzoHnsDGczf4L7
            sHaNRxm0ddbaQw21orb4IpR1hnEoNUkwA41hFs3U9M5iy8zsNHaG1pnHzb7aK8w+28FKc6CZHScD
            3sFtXzAjejU/ZOvu1VAraEuXk8s0qtZZBLOsRIPFA845s6msM4caAs0B9unt/dD9xPIOZaW1ddba
            Ww21gdZ+AZXYGQ9AR6D9Afdh9wxvoa3KMyrDmxBmbp05zBxon+1gpX2zg0X2RNsf7bReTY39xP1o
            uLX2UkMt0VYu56hUw60zttB+t1rcbAQzszgZgGUa6G7+ZccWmkPsox1iaQgzHFmQdelotfZWQy3Q
            mgOfyWyyu8lQi4pneRo3pWx4k4qd4YJA8wynu56+79/tkAWN3M12O1vnVkNNaAuXc5TZ5EHoCLUs
            bsaNGmessyizye6mZzq/28Eq8ynm2NXkMZ9tnbUurYYaaekBZ9YZjwr4DRYVM4viZqMuGmaxdfZi
            p9YZAg2Xr2/Pxe/jyQ7WGbqbWf+0VusSaqiB1rqcyjrj1tpcTMvWWaUlEH8ujwhQZRoKaAwzB5qX
            bDzbIY6Gg9h/Wu5u4r6029k6txpqb9ra5YxKNdjlnC2exSFOXKKB1hm7mw6zyELzwloczvTBTpMA
            I1ezrbXWpdVQs2UHiXCJYKZqz9jNZMuMyzSyRICrMgCdYfYFFsxw+o//bMcw4662DNRW61r08FBb
            G0NThbTK3cQlSgRgFw0VOxtZZ1x7xuM2eXHLDRMC7+0UZiqbyW5mq3UtemiozR5ctVQDs5tsoaFl
            5okAHPjNEOPPdVVLNRTQuNOGv5930xjFyiy43fGz1jXoYaG21OXMhjohzJSFltWcjSY7MavVnbG7
            iVBzyDnQfsBnPdsxvNqtbN2qHhJqMwdVtc64mJZBxrM2jUYE+FplNjm7qdzNDGZeMOvHwZbZjNo6
            a12bHg5qS1zOrFSDJw+uWGfZbOeRq+nrGXeTYeZAc3ipmZ2iJdq3Vuva9FBQW5MUYKhxdpOtNIyb
            ZRMEj9xNX6N1xuM2GWq4oKv5Q7x3BjK1fw221rXrYaBWPZCKuxnVn32iZVR3pj4zKqQdFdPygpaZ
            u5t+LHx8eIwKuG2ttW5JDwG12RhalgxQ1pmDLYudITT8cyKpQlruSvuPncbQ8D6cFAVnb8Jj9GN7
            L5bMkmywta5Zdw+1pTE0vMDZOuMatJkC2lGZhq+Vu4kWGoOMrTOc5ekDfCbDi5tLZhO0tFq3oLuG
            WmXnlRXCFhq2qGaoKeusOvjcbJzdVAkBttAYZj4+E99fJTp44XZGDbPWLepuoTYTQ4synCp+xsWz
            I1dzBDWzfOwm1p8x1HAOTu48i1ZWBWaVeFqrdQu6S6gtiaGxS8bupkMN16rmLCqirbqbqv4M4YVr
            d0e5jTbG7UZAi6bQ6zha61Z1LqhlcPohnrMYamtiaDx+M4KamltTZTYzkOF2VEzLowTQQlPWGZdp
            VK2z6sD5VusWdGlLja9rvH8aaqOdRdioDCfCjIGGy5MtTwaYxe6mGvLEC1tnDjQ8RpUM4DGmUb1c
            u5utW9cloBaBiqE2pZmkQNXl5PhZ5G5WYYAHhW18ogwnW2YqGYADySsW2ijTadZQa922toaaglEE
            qF+0Zg+qDLbZwtosIYBQezZdppFZOZmyAenKQvtupyCLpqBTkJ6FWat1D9oCahnIOBbOnWxw/Y62
            S1DLdlAFu9VFjzBT21lHjezzVHueaIQAWmkIM3Q3EWr+eSprq2DWLmfrUbSlpaZA5etowedNZz4r
            MbSoZAPjYiqGVnE1KyDgA0Z3U7mcytXMrLPIlVYg6wxn6xG0l/uJ13AGNQYbb4eacTmVW4YwUwtC
            rzp8CBV9EVGWk5dogmCOfUUwy4Y9tVr3rLVQy6wxvI558iFu4TUVT6smBSL3LLLSGGhZ3ZmJ26jR
            kKfI3UR3VFlo0XFFMItA3HBr3avWQC0CGkNMLfyad/SeoaIdyso1Mpgp60xZPFXLDG8jzKIYGsfO
            olmbssxttCjrrGHWuncthZoCGpdcqUVZbLwPIdiqSYEoeM4w45qzqBut+gyliO4OM46h/RALf0nq
            ODOwRUmABlvrUTQLNY6DRfWj7GkpuL23CSttxuVUmUC20Hh7NA7SLIYBBwSjGrQojhbNq6mOLUt+
            LElktFr3phHUvGuNum6jdl/oYbEREk1WxPtypNksZ+RyMshU7EyNDKgoM1lHXwrOeh5lT9Qxjqyy
            hlrrETWCGiqrTshi3yqZ527n0EpbkuVkC41B9kzPmbXMUAwh5X8r2uMXwaRXrmIGsIZZq3VQBWpR
            mGhUZqWGK36wCStNAW10kVctNITajMum6DsiPVtl2WTB6jjxeEfbRvc34FqPJoaJc4EVxb6jRhJR
            M4mylTbKcvp2ZKEpsGU9xPj9R5nOLOXLAUQVWOSMSUUZwFqt1qscarh2TvyywygivG5Vq68/7NCM
            9be39Uc7gE15eItdzpkY2hPcv2bcppIqxmOYMciUdTaqPG6AtVp1MdTe23GfwV/2ygO2zn4zs9/t
            eKpJbNf/1XQcnqsUTuA2KtuIsn6RdRZZaLMwY/Ao07UCNZUlSQnfarWmpCw1B9oHO1y32NH6mx2g
            5jBTU10i0JhHi7KcuNMYP1PJAWWd8RhIfL+KMrdTQS2DWfXz1Har1YqFMMP7cNz3i43n7c2mueSC
            /FJSIAp6c7EpW2iqIeLaOi5lpamaliijmQ2A5fc1WqvyjgZcqxWLoYZW2k+rN4ONOvQMYYYfqnYO
            t7OkQAazDGDqft7JamJAWWoYd8tAhp+rwJcBbsb6a7XuXVGFBFpqGdSiSonqkEkJtMhKG0Ft1Axx
            bZCdEwNojUVjwDI4mWlgZotZA6zVypQZQzPjwKswO7ovstBwZ0Zup2qGmFXbVxVBRbmdI3fTTIMs
            +xwFxYZaq1UTW2trkorlaokZl3NkoXFHjTUdKkZWVAQ1Lu0YuY/Ze0aWXsfXWq2aKpUSFW+vbAxV
            LbSsrU5GVM5uLpWymhSAZpIB/L4VuHXcrNUai695ZkkEN/bwputYM6DxjmSEVXGzLYpqIxdQWWIz
            Wc1RomEGlK1WK1aUKECeMOwUP0pCoCk3k28rqKntNZZZBImRFVV1NfH9+LWcaFBwi6y9VqulFVls
            fDsD2GKXcwnIolEB0Q7OxNEq2cfMLVQgG1loGcgyC63h1mpdUCOX06weS9siGcAaxb1GoFHupnqP
            UU2bSjw0vFqtmmaMk1XGwkzZRhbUY4htWX9mFn8h6r6Ru8n3R6MPqmNDG26tViw2LkYe0qrra3ak
            QMVSW+piokYHkAX9s/dRMPtlpxOvYG811ca7Y2mtVqwozMPx6sgLitpvD+HGQIsSAxnIlOUWxc/W
            WGtRTCy6L3ufzOVkCw0nWolaEjXMWq1jjeLdfM1lHpFfc0NVY2i+rqRe+XVb6R2t1WOZVDyNv1zu
            eluFWvQ5rdajSV1nynBQM7RlkxuVjIhKHRqvoziZssqWQm30uqoFyLdVbK3yRTPUuti21Yo18oK4
            c62aSyCa/Ul91n81Ktvw28r9rEJtC0VWorqvAtXM3VRT40XmcFtnrdZBmRekQIZAi6ahnDIeRllO
            dd9sUdwawCnrqwrUSNm/RzRfYPav0WUcrZbOYmYw8zkF1DZfb+XrrBJDc2UQq7xmVhULLIrjjfaN
            v3S20L7bqYU2+tfg92+1HkVLYeaTo3y141mf/LpTcTT+zCNVgcZwibbVY7OKXhdBjMePVsEWJQWy
            mdizf42OpbUeUbMwQ4h9gW2HmgNvNIs6fvZ/NapD2zpTOfueCmK8rg6G920FIGWhRUs272er9UiK
            YMbxaAaZwwwXtNLwWuN49WqXM4qlZY9vrQhqleLekduJVhpbZ2pGZ2WldaFt69FUtczQxXSQ/U0L
            Qg0ttCgJtygpcEmNkg6qJ9vIWmONUsrR9PQKau12th5JGcwiF9Oh5RD7bMdAQ7eTM53q2loVQ7uE
            RgkAhpmCWjSm1L8MHoqh3M1qnUzDrHXvUnWcCmbsZjrIPr8tf8E2Qg2TAtMZTrMa0EbFbOe6gNnd
            zHqxRWNKUZmFptzNKK2shmeU/P1W64akaszYGPBrBzOYCma4ONQwKTBTUXCkCGh7XpDZe2Y1bMpC
            49a9MzO2j8xlNJn/gW0sCoxcz9Fxtlq3pFG8jA0Bhxm6l3+Z2X/eFoYZJgX82sqss9UxND6gaFs9
            tlRRHE0lAZSFlvVn4y9H/TCqZgahxiMIOjnQukcpr2MGZggyXNDtRKCp66oczuGZ0ysH5tuVD9ni
            Yh7Fz2am0uN9y2rRlMvJbid/+T5L9Ds49nNkgVutPcQwU+1/ogSAwwoh9qedAg0tNOVuThkIGdCi
            2Jn6gAxweP/sxZ0lBqqTHWclHFH9jHI5eUGo+eSoDsb3dLxLjr3VuqSU9xXBjGNmGC9ziP0Ji7LO
            GGZRdjOVAloGJL6dtfZYY52hheO30UKbmdNvlCBgK23JMA38Ed5bW2mt21YWM1PXCBbLIswYZOxy
            qtiZSgbwfoUauZzKf56B2VqoIYii2NkTrH07czsRNL/gdmZGRzDj5IB/vrJK20pr3YKqCQD8s/ca
            M3Qz3TpDC22Jq7naQqscoDrYPYPhKo6G1hjCzLerZRzqR4synTx84zc7/LDPb69jkLaV1roFRWGk
            UfU/wsyzlxwz+xPuV64mZjana89QDDS2KBhmP8XCFlvWu6hipUTu5ghmCDV2Pf21+H7R8al/oa/B
            4pD7+LbgPnQsrXUrGsHMLSf/k/fzHiv/EWZslUWWmXs6o6xmGWqRhaYOkOEVLRLOsjUAACAASURB
            VFFiYImyOjTlbkZwq9SkjeJoPKD2dztYaZ9MW2kqltZQa12Tsms9GmSOMBtlMzM3M3I1fwb7N9Qo
            yxm5mApqWXxtiRgEVQvNM44qOfDeXr84jqP5WrmdKo7GUPtkrxYafva55lpotZYquway6wBhpiyz
            CGbZeE012maaHdUYWsUyi+CG77NF2QZbaApmyv3MLDQ8Tq8ni1qffLFXq8yh9smOgfZspy6vu5/t
            erauRSOYZV7KZ6vVmSmYqX5nU8ObMo3KNiKYvdD2qOGhckGXwC2y0J5pYahFjR/xx8S4WlSPxkD7
            23KgcXKgXc/WNShK9C0dyoRAU8F/H3iOllnGDdzHKSHQooQAH3gGNjVQe4mqiQG2zp4tt9T8tT/h
            faPEB0JNAe3vt7XH0NjtVDDlY2q1zq0KzNQfeQQzFS/7y477nCHMsKnDVGugiip1aBnM1IQhWbZz
            rdupLDS2ztBSUjBTFhofa1a+4VD7ZMcwU1Yal42YtevZupwimPk1HBXMqkxmZTgTtwRS8wS4cbEa
            Zmb1pEAWL4vAhlBbqlFigK2zWdczOmYOin6Dz/loB6Cxy8mJgXY9W9ciBbNKwWxWloFuJsIsawe0
            G8zM5so21BfAMIvaUq9JDmTjONnl/GjHYImC9DNWGo9Z+0qfwwu7nPyZZsfH31Br7anKtax6mc3U
            mGGSgDtnnLV34EzZRmaZKahFyYHqhVsdz8kWmgKMKqf4aTHU/DH/sdEi/Eqfg9ZZBWh4HHysDbXW
            lpqBmaq3xLIMBTLlZmbjnDkUpfZzlaIsJycHKhZaFk/jA5gVQgCttMg6UzDLLCY+frNjqCnXk2N2
            2WdGQ7Aaaq29pCwgLpjFpBfHzFSN2QzMKm3qNwOZa3akQASzH6ahloGsevHiha4stMw6yyw0tNLw
            OPm2B0v9M/2Hzz6vOloB17+sodbaRhHMIssscjM5+K/cTB7KlBXM7gozs9pYzszdRApHUFPu55JM
            ZwQ1ZaGpzCMD5gXeLzJ/HXh+zN/tGKQqKZGVi2CG048LC28baq21YmBgAF5l77FovDKUya0yLM2I
            LLOzwsys3rGWA+VsqSmoZdnOWevMtzkxoJICnyyObTlwvtuplfaLPo+P2T/XofbVjmGm6uFGhb3o
            ejLMGmqtWalMpkpwZTEznsiEq/5V8P8qYGa2PCnAXw4umeu59GDwAlctuJWFhpYad8N4soMbyTAx
            uo3Hjq9Rg+MrVlo2BIstuIZaq6oqzFTHDJ4vk2dlitxLDv5fFGZmywtrM5hlgcClLqeZdjtVYsAh
            popeP9rrj6DcTnY9/fi9Vsafi/G0SgujUV82/i7e0/0NtdZICmZogPB8mdxlFl1NrCXjWc2xtiwK
            /F8MZmZ5UkAFx1VSoGKhRS5n5WLNimsdLJwU+GQaZlkJh78/HjPeZtfzm52Cja22KMOZWWlmDbVW
            TSp5p65V1VLeIfV3sCDEsomBojj52WFmlpdtRDsYWWjRrOJqvNZeFpqy0nC8JUINfxiHmrLQcBuP
            HfdBgS2zzvj4VcFtQ62VqQIzvjZ5MhN0NdESy1zJiAtrQkqbaSYpoCw0BbIKwf09Z4tsVSwNLSMF
            M2WteT0Zup4eS8NjxjVacQg03A/cH4ZZZKHxd4C/SUOtpcTnJibe1PWZ9fRT7qRquhidu+pcVuGb
            s+hDcD/vXDR+0gGC4EBrSI1tVBf2EuE/Uhb85CUq+Mvq5lTdGD/O31mUzYyeF71/dl/r8RTBLLLM
            ojbyCmZquNKoaL6S9Dvb+ToCGrp37+x0uJGKV2WDtSPXa8ZSc6kfVMX1FMwiCxLfN/vsUWBfPZ7B
            rqHWqkh5DcrNxA4xDjOMm2VW2Yx7yUYF7yfqLOdrBjRfcyCex0+OoMYWGgISP2Mk9ZwsEKosNXSJ
            1Q83Gt0w2rcMdBWgNdRakVQmU3kmmMnkbKaa5Afb+qg4cmR0RAaAuj1ruCxWBDT8cAU0VaGPIOMg
            fKXItCr2z0fZHbbWlBmtEhfVfVHKfkQFrYZaK1MVZqp3XzRbGU4d59eN2fG1jrFhVXI0Sgpw3Ht3
            jYBWiaNFVhoWuo6KTM3mD1hBLQJalrSIXE/+DNcIVNF9I+utodZSUjAb1ZhFMONi2Bd4f7/G+fpm
            Y2RkgFw0nlYBGrudXEwajaGsxtHMxl8S7hNL/WtVRjOoyuaqy7nVjzJyQ/k56nVb71PrOjTjhXCN
            WQYzdDGxYkCFkj7CfZzUM1iP4s+s3c7Visvp28oUjZIDOPyIhwNlZQxVZf58Fk+LioBVAfDsj8Sq
            vE5BvaHWqsBMZTIZZhz8d+/Ez3O/DqPwUeRhRa4n72+mXc7VDGj+oSMrLXI71cBwVXTqn4Pr0T4p
            VRIE0UD6aDD9EphFQdLMBG+otVwZzPw8RReTC2ZVSQbHyxxmqn6Ty7CUh6UMCnWen939rALN7LS5
            4qjBYnUmpFm3E/cNFVlpbJ6ztVax0lhRkDPbp+z9Gmotszgu/MuO/3yj4H9WKOvnuNnr+YFNHfxa
            /d2OR9cog0S1wWJwqUTBUgNhShWg+bpqpSmYVWdhws+s7BdrFE9jsPk2/vup+hsz/WNk+8HbFRO8
            odYyi2GWBf+58j+CGY5//mgHeDHM+BqOuj1HEBtdP5iM2EwjoOEHqjgadpjIJg6JMp3ZBVtRZhFx
            0WHkgkblG1kFdAUcEdQysDXUHlcRGLLWP1GxLMbMMJPJ8TKEmS8MtCj+Xdn3CGrZ9bRKVaApqDmU
            ML3rNFdZToYaWmjv6f0rGllpuB1BjcGmhnaYaQhVANxQa1WkgDDqY4YQU5aZn9f+3m5I4HDF3y2G
            mTJEVNw7g1g02mA3zQCt4nZmltpM08M1VprZHNB+Wg40BaXss6N9UfsVqaH2OIpgpoYzqW4ZKm6G
            2Uyz4+C/W2YZzBxoKruZxc9436NROMpq2+QcnXE5fZvdTu52EU0lt0dyYGQdRV8yg0yBLftnUfGA
            ttRaa8XWWTTIPIIZW2Ye/MdMJruZf9hpIiDqG8jXpjIc1PWWxaY3VQVoZrHbGSUH1CxMz/CcaPKQ
            La00l39xWUyNkwLRj+DvF31eQ601o5F1NnI1cfEEAIZKOJNZiZkpywytM3UMymBQJVEvdgy+LKSz
            SDNA8zW7ndUyjmj2pQhmS620kTk8stgYZj/hvXAdfWZDrbVEKhEwipuxi5lZZg6vyNVURfB4fUau
            Jl9LalghjshR1QT+fqvPzVmg4TbH0vwLGE3AOzNYfSsrzazmgiqYVc3khlprRso6i9xND/SrAebo
            ZprFbuYoATByM/mc4WtJ1Xmqll27up9VoJmdXjhI7mzQOq6zmcy36JOmns+W1SiIWYFa9CM01FpL
            peDANWe4IMz8HJ2FWTTXBg5viq4phK9qBoHFv9msUOgir9Ys0Hg9cjujWJoaBoXvpz6vun8jVdzQ
            X2IbX1vdj2uEWvR463JSgFDtgLBY9psdJ7AcZlhjxiCLLLPqdIvKEFCJC4RwBWpmG0GtOqeAf+A7
            2oHsB8AR/mgq//b2+Ec7HCB+kf7+Sy82vuA/vL3nk53+o0SD1qMuHPwDYMLB4P538Pg7uJ+f+2Ph
            Mc6I5yjwfcN16zLiGNLIe8BzUBkAaJ1xAoBHAUSjdxBieC1Gi5o7YzSPRiZkzLRmgMaKfH4ns+pj
            zv8y3+31S32x1y/0px1DaPaiwy8Df2x/b/+xGcRRS6FonKdyO/FEuzaooSXeULs+sbWehTc4du2/
            od/GWjMc0vS7HVf/qxEADBw8h5cs2XHuoiVAYwsNL3xlIkdQc5P3+9t+vNjhi/1pp67njPhH8R/b
            9/mjnVpqajhUVmzLP5qfVA7la4Mayr+Thtp1KbrgGWJPduoxYekUT+HIQ5kqMPP9iaxG5eGoa2o2
            EbAKerNA4wtTBTIx1Ry1AP5qx8Mr3O1EK40/a9ZK4wSGA+2Z9pvdUFXGEf0o+L34e7LJfC6oZScC
            P4bgxX1sqF1WDJWo/6D/eSLYVPcMNQsbjtiJ4mUKYirozzEznpDYx5Jm3WwyuE1rJingYuuH/Wkc
            44kLF91Gmc49WguNVDH5s1jHzP7smSjA2ypJwI+rfWyonV8MD/7D5XMN42U4dlp1zlCdb6owU5YY
            d/nwiYo/vy1/vS2f7XgSY+7+wSNyNtESoJlp2OAXhBlMHOfJMMsqkkcXZnU/1baSAkgGt5nM58y+
            LIFa9J78vWXPybZb59HozxSNhswiW1pjlsGM+699sQPEPpvZf94WBpoaNM9JN//s1VoDNF+za5eV
            caj1EzyvUmQ743qq548u6gxmqjbN6PmVfYr2g/dB7c9I6nvLLDW1L22tnUcMEoPbuPbnKfeTexBm
            VtlSmPGUeGyRIcx8nQEtGy2wSkuBZnZ6wbDrqaDGIGMrDV1W5RotdT0VSEYXbcVKy6y60T5ln42f
            r/ZliWb/GNpau4zU78vX1KipKteYqW6za2GGIPuPmf1px2BzoPFYU0webOpumq0HWgQ1BTRlrY3c
            Tu6TtsRyyJ47AuQM1MxOwVbZp6VQU++P9826oG2tXY/4d8FROehuqiGGUSMIVWfmqsDsi2mY/Wka
            Zp/t0A2E3c0swbZKW1hoantkpUUWmvry1yYIsn1UjymNkgMmtnFd2Z/ss3m78v6/xPsuicPx/Q22
            bZT9qeDtisfDybao+p8HmJttAzOEmgNNtQKPRgmYbQS1NUAzi0HDGUvMfHKiQLmdlUrjta6nelw9
            J7OEMoidE2qRZZjdN9o3tU8Ntv2k/nDZ6+Fk28g44BAOS8GMR/somDHEGGYzsbOrcTnNYpdF/RCZ
            C/pE96s4moLZGqhl7xH9+Op2BI0qOLaAGj+vajVmsH4XPM772WBbrpHrz+6mqktjzybqM8ifwzDj
            7h4+X0EGsyhuplobIdCyP+FVWgs0s9hK4x9BQS2CWWSpWbKu7mv1PTLrpAqH6LnR/kT7oj5jZJGN
            3OTRfRU12NZLnYvRwq4n3+ZQDRsF+PtinRvDDBMAXoZRcTOx5gxnaWeY8djnzbQV0Hg7+iGif5Yn
            2mYIRj8wf/6a/eX9NtqufNbIisv2ZynUMlcXF1VyEg1HmQVcBv/WWNkfLVtpylrLIObvpWC21M0c
            WWbY2iiC2aYgc20BNLPYHeQfhH37kZVWLbRdcgFFVlkFcvz6kQuotv09MHi/BGp+O7O6OG4R9XtT
            r+XPHB3jrcFtzYW15bFFXs7IcnsfbKvzE39z1XONSzMcWAyzimVWgdnmUNsSaHw7M5nZTK7EA/AH
            s2Q9s78ja009JwIhgml00at9UbdHUIs+J7LCsp5v6na2VI4v+q4upV2sAtDaY1PnWsUVzbwKhhmO
            W1bjrpVlphIBkWWmxnCeBWZm2wHNLL4wFdQUuLJFlXBUQFPZ3wggFUuNn1/5kTJrJtuP7P2ihTuF
            8ED7yqJcUxPbI2XHsQfksn2KgFxdWJXfsars/K5CjcW/fzYuMyvNqLqZqsuGifXm2hJoZrUfQmVr
            MistKuHg9zebP4EqVljFBeD3yz6r8ly1H6yZixL/nUcdRiKoRXG4LPZmFp/E57LUlHuO20sWE9uo
            2d86UgVWSrhfCmbc4qtSZzYaBaAKZ88KM7N9gKa2/TZaWZytydxNBbYoJb0F1NRjI1BHr63ev0YK
            IgpCylpjqKl2L+w6ZGBTF7zZ3Im95DsaucER5NV6BPbo2LLj2OJ3r1hlEcyiOT4rIPvT9KBzFTNT
            3xfv227aGmhmOWQiS20ENk4OjGC2FmqR6zlr+i9xKdee+JnrmfV7Gy0/TcNuBLcK4JQVFbl30XGO
            jl/BWH0vkaU6AjjvG2rpeblUI5i5m4mtf1TMDMdq/mWn7YCqMNsdZK69gBbdz0BDsI1iaJXRA/j5
            e0FNHcsMXKvW3NLjiGDGGa4MZD/EdtaRNOvsW0kyGK0zVzZbogRHZpmq9ut8rJFLzp+Jx7HVn+1I
            CuYRzLCLtIJZVJ7hYzPdzbxKmJntAzSz3MIxO0018zANNXSjEktTn7lm/ytQy+rkFACX7EdVFUuF
            L2rcVvMrcItlBbuRq5rBJXIBZ+CVuYwZvL7TGruxqmOPuq9WLEqz7aG2BGY+YBz7mI3KMtRA86uD
            mdl+QDOLrZaKpRbFzqJiwgqAqvucvb7iflYKgUf7tOSEz1yfCswYajOLAmLmro4SEJV4VuZGq+NB
            ePG8kd9om9tIc8W7yuJFF/FelpqybCsww15m3P4ng5kaaH5VMDNbN+tTRX5QP+31B3yxU8tsNNA2
            Grw+cjd/0boqfw2+33t4PPvORrDmfa9ann7CuFTMyfdbWQ2R1cL94dU8EF/stKUzdkP1iTe4maDq
            osKjP9Y2IBi5pJnVlrmReGHyb6UaLfDxst7b/HmYqQqzSi8zFTPz56hB5qprxlXAzGxfoDFQ/IL0
            E+m7HU6Qr5aDLbogIgvppx2fROeCWuSOZlZmBDn/A3iB989OGjxWsxxsynrhGbodZtijHls8Rw0F
            1bwR0W8YZa0rUKvALIJYluhQQOM4b9S+56ednhvv6P3wvjWWuIIZ/q7V9j9Zc0auMWMrVX1fF4OZ
            2XksNLzIftmplRbVo416peHFwFIw2xtqGWDVEiU88ML+Dtuq6trs+ARSJ5OKNUVQ48Cxg+uLnVpn
            uDDUuMkgD23jeGlmrZmd/m4ZzEZuaZbg4O8q8ia4Wyy+lvfX32MLC42hgefDEpiNCmZxHl0OJ1wd
            zMz2B5qL/00caj9MJwGiYVCRyxnFpRh457DUFMhGVloWK1RQ82OJYIbfN15Qv+wAe38vP0n935ct
            NQaaAhlOk4ZdUzOoVYCexRuXWGWc2FAxMf5eFcyw7fUPO4VZ5C0o4FUVQRyPb8tB5lnHjKuEmdl5
            gIYWEv6zVCy1KtBQfPs93b8H1CLrrHJ8bK1EgPthB6i5C88nldkpzPAxfI1fbB/sOO7ybKcu6Ed7
            vUDQEkOIZUDbAmpKo1gZQkolLhhq+FqX/3boXiLEX+z43ODfGfdrzR/rCGZLe5mpcZk4IXg0t+ZV
            wszsvBYau57+Y7gVUgFaNe7C2hNqCqhVt7MC8H/sFGxsUeBF6FKgY2sNL+IPdvxP/2yvQMt61yuI
            jYAWNfPkPyu0rkcuZ+RmZiUbUTaWAcWWGVpl/Dx/rgqU428Q3VZSMKsmAFQvs/+z+fY/WdLkamBm
            dj6gudBCMzu4ndFFr+rSon9ylLoQ9oKacjX4Nl+oClx8oSu3+5sdoPbeDhchWmx8bBgP4m2Gm1/Y
            H94+48le4fZkr2DloP9HsT2CmYKaskqjONroAldAi1zNyI0y+p0QZm6V4W/px5pZMksu/OxY17iZ
            S9v/XDXMzM4LtMhKQ6hVLJrIHYmsNDzGPaCG78vPzVxOvM0XeZbp/fa2dqvWT2zlhkbHF10o7oYi
            1Biy6H5lk3RUYRb9WWWW9yh+FrmbUdxs5Gp64N+/T4dYJUi+BmR8rHh8o9KM2V5mV9H+Z60uYaEh
            TPgkQgBEwXV+jtkYSltDTb2OoVaJqUVlAGr7yV5Puic7hhpba1XrgGNrDmsEm7+vg01Zk9G+j8A8
            yniOgOZrFT+LyjS4XIO/K/x90PIyOwBOWWGZZs4tPDbfZphhEmfrXmYXb/+zVucGmtnpl4HuTnTh
            R7BzVcC2JdT8tQpqFZApoGX1TWjx/GPHUFMxITwR2ZVS3z9+Bwg23GePdzpIK+6yssai2JmvFdDM
            jr/nyEJTlhrDK7I68Dfy38Ds+M+Cwwsq5hfte+X8UjDzz+WkxtpeZp/htVfT/metLgE0F8fTzMYw
            UCd4dNIrnQNq+N74PD4WBkLmxuHy9W3tYBsNzUFAKbff6H68uM1O4eZgi+KcDKsswRO5mllYQe07
            QpthzhenCtYjnJ7gNj6mfq9KggPPhez8imDGbubWvcyuqv3PWl0KaFE87QWeo6DG95vNQ2hvqOFx
            +W18LMt0snU2yiZ6JpIrudlacwipOI8Sgg0tZwRbdCx8QauLfAQyDieo30TFAdmqUQsK/2CM1tHv
            Maq5Q1e6ejwjmKkRHapjhsfM2N1c28vs6kHmurSFpuI29nb/d9g22N4CbHtCzdf8vpHVGcXRGGhc
            1PrFDvVh/o/tJ7yf/Bj/yrJvI3cUvxc8xp92fCwKchn42G0bWeLZvjHg1PH4+/D3j9tca+ZDv/54
            W36HBYeB+e/E1lpkbWbHkcFs1P7nZnuZbaFLAs3sGB4Y0/gBz4n+2TLoVIB0rpgaxl18rS5yvxC4
            LCICmkPtkx2KXhFs7Ib6ScsxpBHY1AWnIP3TTmGhYJfdl1nla8Sf+QHW+CfiYHJQIcj+MLN/wYKA
            c6ihpYYxwQhmqBHMqr3M1EzmN9HLbAtdGmgu/OIcau5+Rie1OkGuwf1Ur1UXLV7QUTwtA5pfdJ6l
            8sXBxi1wRj29orIDdqHNTiE3Alz0HYwgNrLS1B+c+uPA91bWMH7HCDME2r9ozUBD91O5nSMLrQIz
            1cssssxurpfZFroGoKmLhhMFe2prqPnrs2QBgw1jSyrLyS7Qb/b6jxtBDQcVI9gqzQozl9RMn+gq
            qYDHaXYKuAxiEZyy+6I/i8yt5z8LBTO20pTbGbmcbKXh/vv35usKzLJeZipedlO9zLbQNQDNLIba
            Ozt2P1lbwe4cUMPb6gLkLCBmPPmi8/UXsURQ45M5A9tSl9SPM3qMvw9fVyDF9/HnqT+HEcjYKkOY
            MdCi2Bm3TsrcTf5uOJGBMHu4XmZb6FqAZpZbahnUttK5LbXISlOWmnI9/eJTQHP3gsEWdWDFk7xq
            tRltV78Pta6+Vllg+IeQue8qU8k93n5PFoQedxjxz8DPZncXpWCGdWYP2ctsC10T0MxOoYau5y1D
            LXo9lglE1poqG0ALDS9GBBpbasoFHVlsWZFudDFkF4WyrHw7sswYDFnZywhkHIt0OCGwEGDKGkOQ
            calGFjfD8yCCWWVc5t32MttC1wY0s+uEmllsbVWVuaBc/qAstSju84+9XnBf7fUCVEBDtwPLOxTY
            RhbbjDs6+j5wO1qi0g+2yLDItZop/s1O3U1liSnXEt1LFS9jmLFVizBb2v7nrnqZbaFrBJrZ9UEN
            4bMl1PAzGG6RpcYX6D+wdoj9YTpJEMXVqjMdzVhsZvpC4WMfwWwWZPg9sYvJMUhuKV6ZM4FHCXAt
            m4rxMcxUAqDa/udue5ltoWsFmtnlofYBtreGmtF7+Hti0sCLjbMs3Tc7BttvdlyvpLa/2an7yZlQ
            FV/jC8O7T8xCLQrorwGZKkhWMFPuplqyUQBqUH1mlUUwYzdzC8vspnuZbaFrBprZ5aGG8gttC6j5
            +0XvoZIGXu2v4mrf7fVCRFixRRYBbQS1zA3NoGaWXzAZzN7Z6VCpKE6Wxcu4o24ErwhiUZddNawp
            ig/698AwU5YZ1pnNtv+5+V5mW+jagWa2L9SyH5Uf86FZKga2VBVrzT+XLTa8kH/YKdjUwiCLgDaC
            GoNNQc1sHmijrKWyzNSA/mgMbNQ2nF1KBTI1bCsK/OOx43eDlu4e7X9uupfZFroFoJmd31KLXKb3
            9LwtoBa9TwQ2Za292OtF+N0OYMOMWTShLoMss9KqJR5rgTbKXio3UwGNwfYsttkSY7dyCcj8uDn4
            j5ZZBWbVbObd9DLbQrcCNLPtocY/rLoQGWx4grtwn7a21vD9M7D9tMOFiBcNr3nJZghXSQKOp1Wa
            SmaJgSx2VomZZVBTgFOddZVLWQWZ0XaWyYxgFo0AqLb/uZteZlvoloBmto+lpn5kdSIoFxS1pbXm
            n1kF2087XIgvduyKYrwmA516TMFMWQGc+fT9H1lofnyqDq9qoUVgy9ZViFVB5seLx43fi7uY3JiR
            EwB7tf8xewCYmd0e0Mz2cz9Vpi6yOD68rTHms1WywDULNt8vDtrjwmCqLirbuaQ7rjo+FT+rQi2D
            m3pcBfcZZBzoz1xLVwQztsw8hunBf4aZav3zUO1/1uoWgWa2HGqRNcYnQLY82wEeZnGywOy8YHPA
            stWGFxdD7ofYjtYKZEt6rOExMTRGbmcEN3WbH1sCsRHI/PiieBkPZULL7LPlA80fsv3PWt0q0My2
            s9TYLFcLWyDPdnzScFzNYN+2gJq/n39eBDa02ni/2QXKLDmGVgay2fgZH08GNAU2BpwCnnpN5k76
            Nu4P7mMkdZ6oTKbDDC2zv+y0cJatsodr/7NWtww0s3VQy6wwBQJ2qZ5ojS7oXtYavk8ENjw2BpuC
            2wh22baC/cwFNSrdiMAW3c6srxlLrAIyXyurLCqYRcssg1mlY0bDTOjWgWa2jaWmXIbR8hFe45aB
            2eGiQW1trfl7+r7z+6LVZnYAW2RxRpacAnoEeGWhVY8jWhSUovsycGUxsSrEXBUXswKz/9gp0FTw
            /6Ha/6zVPQDNbFtLLbNYouweWmkItr2tNXyvDGxsvTHglBU3gp8Cmol1Zd8z91NZbtnj2RJ9pton
            3v/IKlMwU1PMZW4m3o8uJo/LfIiOGWt0L0Azm4Man5wjoGUxJhVDUvVqrr3BZnYMN4aack1xe+SG
            R9aYuqiyC4zdZV6vXaL35c9WtxXMonOEu2WosgxVNIvb6GKqGjOs/m+YJbonoJnNW2qjE1WVPURB
            c7TWflrcUsZgvbUb6mIrQ8ENHx8BLrut3oe3R/vJ+8hr5SZmbqMC1whiap/xGNnt5lIYlcmMLDNc
            KxdTFcxGGWW13w+rewOa2Rhq0Y+fwSyrlFcxDU4UYHsZ3Me9rDUXW218XwVwM2veXrKfVesqew1v
            R5+FUsdQtcrUrExRAgDXWJKh4mUP1/5nre4RaGY51PA5yqWKYiNZQSpD7tkOYMMiXF9HsS4Tj22l
            yK2qAK66nd1X3S+1T6Pt6H2y+10jkEVWGZZkYB8zHsqkrDOsQeM+ZpVMZsMs0L0CzUxDDU8GfJ4C
            WmSlqSFDvHyyA9iWNgPcC2z4WagMcHz/WohV92nmvspjqBmQsVWmXEwMwAdoogAAB09JREFU/vMI
            AA76f7Y8XpYF/xtmie4ZaGanUDM7WGtRTCiz0KJFgQ2h5jE1jK/5vl0abPiZqOzzR67s1vuy1XPN
            aiDz8wDjpDzAH11MHsrkMEOosVWGLmbWLtuBxvvbEvowfspdqOp2oKXGcFOlHKO6Lbb+VEDdLD5B
            q27VHooyh5XnbZGhrH5ORcoq93UEMv7DQouMs5ecwcRuGdmYzKhd9ovp80YdSwv0KEAzy0/+URA4
            gpnajmDH742fx/uhblcC3ntrD3itgdxIS0CWlWFkpRhRm2zVwywaxtTB/5V6JKCZ6QuDgRKd7Bng
            1NjICG4cr8PP5f1gd1kdw6Xgdq3KIObrLNjPIIvcStWIUY3HjCr/KwPMG2aTejSgmeXB7VFw+Jed
            WmWjJXJTM7BlJ3Bktanbj6IsScFgyJI+7FqqzGU0ExNvq04Z0TCmDv5vpEcEWqTon1zF1BSsqgvD
            jYGpTubMFXXNZgNvXSOI+ToL8mcgi3qWVWcvx04Zagb7aLSJOo5WUY8OtMgFzdwTdXFES9RTTEFR
            /UNX/rHV/Utrsq5ZGcBwOwoTRCU4GcgymKlmjOheVq2ydjE31KMDzWzOBWW3E09MVXyroMYB4Mw1
            HYGtAjc+xuz4r0Gji3kGYll8rBrwz9r8RI0YcXB515edUQ20V2XJAhVPy+BWGV3Aj2cuaRZ3iy6E
            iuuyZ61XpNmLtRLjrEKMK/vRIsNZlxTIVIys0iUjy2K2i7mDGmjHmgWbKtkYDZNSYJtxS6MykMiS
            42Pg+yrfwd6quJPqDyX7/hXIVNaS22FHvcr+pPuxeBbfi2elr2Qxo++gNal7Hykwq192XCrht31b
            AS2KyfAFhG7N77D8ButPb2ucCDeaOzJrMT2q5+I1bv8SjylVwJddpLMxMdwewU1Zymr8ZfQbMfBw
            8cf8NQywkUXWLuaOaqCdiqFm9noy+n3ZBZQNj/HlNzsGGwLNl0+w4OS4DDbVS3928o+oYLc65Kmi
            EbzwdgSvzEJeAzIFM3RFec0ZS2zz8x0+O7Ko1bG2NlIDTQutlGoQWl1EH+31ZP9kh4vgkx1g9sU0
            0BhqylqbmSR3ST/9DG5rhxxF27MQy0CGTQS+2RzMooVBpiwyX6JQQPTdtDbQtWW4rlF8YePCk3Pg
            FGo+se1HWCOgGGAKaAi2jxZba892CjY189E7sc6sNgW1EdwqEIusMTMdH4zKZTy7nFlknAhgmCmo
            4WO4VEA2Sto0yHZUA60uZcEwIBBsDheHTgQ2BJeCma8xrobvxTOCK3d0NBelmq2qYr1F508lFob3
            VWJjqkxmlATAZICyzNSaAcYNFzOQMcyi76K1kxpoc8qsNbbYHCIMGoQRQordzMjtVFBDS212pvCZ
            2ZFmgVYJ7C9xK1UGmeNkOFO5ss6ihd1TBhlmpLPMc4PsAmqgLdNSsKHF5i4jupIILQUydj0Zagps
            0SziuG+4z6OuFxnYolILvh1ZY+xWjoL9bJVF8TIEmtoeQSyqF2z38srUQFunyA2tgA3Bw7E2Bhxv
            K6iphIGKr41KPtZMDZdZZFGtXBYjG2Uus3gZAy26zQBTzTqzMbhRCUbD7AJqoK1XFDgfgU25owwl
            tsIiyyzKgI5ia9WsaAQ5Pn4zbZFFhcAcK8tGXWBZzAzQ1P0MMHwvLnLG/crAzMffuoAaaNtpDdhU
            dlQBTsErg5kCWuR+RkmDUXYUj3cEswhkEdDUaAo1pwMCjeHGjzEQ2RKLRmdEEGv38orUQNteVbD5
            GoGi4MaWVgYuZZ2NEgUV93NUy4aKYmTKvcyAhoBRw8YYTtGirLrRcLOKNdZW2RWqgbafKmCLrDZV
            /sFAUtYX31eBWeZ2VotzUZWg/2g8ZuRuKqiNtjMrrNIEILPEGmRXpgba/qqCrQI3tuAU8BheMzDL
            3E5lrY1czghiFQuNgVYZ+K+eg0ORGGJY0T8aa9kguwE10M6nCGy+Vu6obyvoKDAx7DKIjVzNGbcT
            NcpiVqA2stYi2KnMKGcnIyts5Faq260rUwPt/OLvvGK1KdAxjBhSEfjU60bwqiQGXBWXcwQ1Za0x
            4KLbEcBm4mJtjd2oGmiXVdVqqwIug130nMitzNYzMbQo0zkTV4vuG4Erg5iJbT6O1o2pgXYdUmDz
            7RHgRpBT0KtYXgyvDGZZ2UYGt9nEgbovs/5GELNku3WDaqBdlyJ3FLcrkIvAVAFX5T15P1gKIJWl
            YsllYFwCMXW7daNqoF2vqnDzdcWSqy7R+/D9aj8jdy6CTAV+I5ex4kY2xB5ADbTbkPqdRoDzdQai
            yOJSwIruU4qC7FEAfgTB6Ha25m11u3VnaqDdpqqAw+2t19F+mGmoVMAzu862s/tad6oG2n1oBDi+
            vdV2RVX4ZICrvCa7r/UgaqDdp6LftQK+tfeZxVBZCqQMUg2w1n/VQHsMVX/n7HlbnCtV0M2+vtUy
            swbao+taf/8GV2uRrvWEbl2XtjxPGlatVqvVarVarVar1Wq1bk3/H+D6Gqo7PGQYAAAAAElFTkSu
            QmCC" transform="matrix(3.719318e-15 0.1149 -0.1149 3.719318e-15 466.55 672.6184)">
                            </image>
                            <g>
                                <g>
                                    <g>
                                        
                                            <rect x="437.7" y="696.6" transform="matrix(0.1481 -0.989 0.989 0.1481 -314.3149 1029.9082)" fill="#DFD1B8" width="5.9" height="1.6"/>
                                        <path fill="#AA9D87" d="M439.3,700.2l0.9-5.9l1.7,0.3l-0.9,5.9L439.3,700.2z M440.3,694.4l-0.9,5.7l1.5,0.2l0.9-5.7
                                            L440.3,694.4z"/>
                                    </g>
                                    <g>
                                        <path fill="#DFD1B8" d="M441.2,700.7l-2.1-0.3l0.9-6.3l2.1,0.3L441.2,700.7z M439.7,700l1.1,0.2l0.8-5.3l-1.1-0.2L439.7,700z
                                            "/>
                                        <path fill="#AA9D87" d="M439,700.4l1-6.4l2.2,0.3l-1,6.4L439,700.4z M440.1,694.1l-0.9,6.2l2,0.3l0.9-6.2L440.1,694.1z
                                            M439.6,700l0.8-5.5l1.2,0.2l-0.8,5.5L439.6,700z M440.5,694.7l-0.8,5.2l1,0.2l0.8-5.2L440.5,694.7z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        
                                            <rect x="438.1" y="697.4" transform="matrix(0.1481 -0.989 0.989 0.1481 -314.4849 1031.3911)" fill="#DFD1B8" width="6.7" height="1.6"/>
                                        <path fill="#AA9D87" d="M440,701.4l1-6.7l1.7,0.3l-1,6.7L440,701.4z M441.1,694.9l-1,6.5l1.5,0.2l1-6.5L441.1,694.9z"/>
                                    </g>
                                    <g>
                                        <path fill="#DFD1B8" d="M441.9,701.9l-2.1-0.3l1.1-7.1l2.1,0.3L441.9,701.9z M440.4,701.2l1.1,0.2l0.9-6.1l-1.1-0.2
                                            L440.4,701.2z"/>
                                        <path fill="#AA9D87" d="M439.8,701.7l1.1-7.2l2.2,0.3L442,702L439.8,701.7z M440.9,694.6l-1,7l2,0.3l1-7L440.9,694.6z
                                            M440.3,701.2l0.9-6.2l1.2,0.2l-0.9,6.2L440.3,701.2z M441.4,695.2l-0.9,6l1,0.2l0.9-6L441.4,695.2z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        
                                            <rect x="453.6" y="680.7" transform="matrix(0.989 -0.1481 0.1481 0.989 -95.8814 75.1118)" fill="#DFD1B8" width="5.9" height="1.6"/>
                                        <path fill="#AA9D87" d="M453.4,681.1l6-0.9l0.3,1.7l-6,0.9L453.4,681.1z M459.3,680.3l-5.8,0.9l0.2,1.5l5.8-0.9L459.3,680.3z
                                            "/>
                                    </g>
                                    <g>
                                        <path fill="#DFD1B8" d="M459.9,682.1l-6.4,1l-0.3-2.1l6.4-1L459.9,682.1z M453.9,682.5l5.4-0.8l-0.2-1.1l-5.4,0.8
                                            L453.9,682.5z"/>
                                        <path fill="#AA9D87" d="M453.1,680.9l6.5-1l0.3,2.2l-6.5,1L453.1,680.9z M459.5,680.1l-6.2,0.9l0.3,2l6.2-0.9L459.5,680.1z
                                            M453.7,681.3l5.5-0.8l0.2,1.2l-5.5,0.8L453.7,681.3z M459.1,680.6l-5.3,0.8l0.2,1l5.3-0.8L459.1,680.6z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        
                                            <rect x="454" y="681.5" transform="matrix(0.989 -0.1481 0.1481 0.989 -95.9925 75.2464)" fill="#DFD1B8" width="6.7" height="1.6"/>
                                        <path fill="#AA9D87" d="M453.9,681.9l6.7-1l0.3,1.7l-6.7,1L453.9,681.9z M460.5,681.1l-6.5,1l0.2,1.5l6.5-1L460.5,681.1z"/>
                                    </g>
                                    <g>
                                        <path fill="#DFD1B8" d="M461,682.8l-7.1,1.1l-0.3-2.1l7.1-1.1L461,682.8z M454.4,683.3l6.1-0.9l-0.2-1.1l-6.1,0.9
                                            L454.4,683.3z"/>
                                        <path fill="#AA9D87" d="M453.6,681.7l7.2-1.1l0.3,2.2l-7.2,1.1L453.6,681.7z M460.7,680.8l-7,1l0.3,2l7-1L460.7,680.8z
                                            M454.2,682.1l6.2-0.9l0.2,1.2l-6.2,0.9L454.2,682.1z M460.3,681.3l-6,0.9l0.2,1l6-0.9L460.3,681.3z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path fill="#DFD1B8" d="M444.9,683.2c3.3-3.3,8.5-3.4,12-0.3l6.8,6c1.3,1.2,1.3,2.7,0.1,4l-11.9,11.9c-1.2,1.2-2.8,1.2-4-0.1
                                            l-6-6.8c-3.1-3.5-2.9-8.7,0.3-12L444.9,683.2z"/>
                                        <path fill="#AA9D87" d="M439.6,692.1c0-2.3,0.9-4.5,2.6-6.2l2.7-2.7c3.3-3.3,8.6-3.4,12.1-0.3l6.8,6c0.6,0.6,1,1.3,1,2
                                            c0,0.7-0.3,1.4-0.9,2l-11.9,11.9c-0.6,0.6-1.3,0.9-2,0.9c-0.7,0-1.4-0.4-2-1l-6-6.8C440.3,696.3,439.6,694.2,439.6,692.1z
                                            M464.6,691C464.6,690.9,464.6,690.9,464.6,691c0-0.8-0.4-1.4-1-2l-6.8-6c-3.4-3.1-8.7-2.9-11.9,0.3l-2.7,2.7
                                            c-1.7,1.7-2.5,3.9-2.5,6.1c0,2.1,0.7,4.1,2.2,5.8l6,6.8c0.6,0.6,1.2,1,1.9,1c0.7,0,1.4-0.3,2-0.9l11.9-11.9
                                            C464.3,692.3,464.6,691.6,464.6,691z"/>
                                    </g>
                                    <g>
                                        <path fill="#DFD1B8" d="M463.9,693.1L452,705c-0.7,0.7-1.4,1-2.2,1c-0.8,0-1.5-0.4-2.1-1.1l-6-6.8c-3.2-3.5-3-9,0.3-12.3
                                            l2.7-2.7c3.4-3.4,8.8-3.5,12.3-0.3l6.8,6c0.7,0.6,1.1,1.4,1.1,2.1C464.9,691.7,464.6,692.4,463.9,693.1z M442.4,686.1
                                            c-3.2,3.2-3.3,8.3-0.3,11.7l6,6.8c0.5,0.6,1.1,0.9,1.8,0.9c0.6,0,1.3-0.3,1.8-0.8l11.9-11.9c0.6-0.6,0.8-1.2,0.8-1.8
                                            c0-0.6-0.3-1.3-0.9-1.8l-6.8-6c-3.4-3-8.5-2.9-11.7,0.3L442.4,686.1z"/>
                                        <path fill="#AA9D87" d="M439.3,692.1c0-2.3,0.9-4.6,2.6-6.4l2.7-2.7c3.4-3.4,8.8-3.5,12.4-0.3l6.8,6c0.7,0.6,1.1,1.4,1.1,2.2
                                            c0,0.8-0.3,1.6-1,2.2L452.1,705c-0.7,0.7-1.4,1-2.2,1c-0.8,0-1.5-0.4-2.2-1.1l-6-6.8C440.1,696.4,439.3,694.3,439.3,692.1z
                                            M464.8,691C464.8,690.9,464.8,690.9,464.8,691c0-0.8-0.4-1.6-1.1-2.2l-6.8-6c-3.5-3.1-8.9-3-12.3,0.3l-2.7,2.7
                                            c-1.7,1.7-2.6,4-2.6,6.3c0,2.1,0.8,4.2,2.3,5.9l6,6.8c0.6,0.7,1.3,1,2.1,1.1c0.8,0,1.5-0.3,2.1-0.9l11.9-11.9
                                            C464.5,692.4,464.8,691.7,464.8,691z M439.8,692.1c0-2.2,0.8-4.4,2.5-6l2.7-2.7c3.2-3.2,8.4-3.3,11.7-0.3l6.8,6
                                            c0.6,0.5,0.9,1.2,0.9,1.8c0,0.7-0.3,1.3-0.8,1.9l-11.9,11.9c-0.6,0.6-1.2,0.9-1.9,0.8c-0.7,0-1.3-0.3-1.8-0.9l-6-6.8
                                            C440.5,696.2,439.8,694.2,439.8,692.1z M442.4,686.2c-3.2,3.2-3.3,8.2-0.3,11.6l6,6.8c0.5,0.6,1.1,0.9,1.7,0.9
                                            c0.6,0,1.2-0.3,1.8-0.8l11.9-11.9c0.5-0.5,0.8-1.2,0.8-1.8c0-0.6-0.3-1.2-0.9-1.7l-6.8-6c-3.3-3-8.4-2.8-11.6,0.3
                                            L442.4,686.2z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path fill="#DFD1B8" d="M445.4,684c2.9-2.9,7.6-3,10.7-0.3l6,5.4c1.2,1,1.2,2.4,0.1,3.5l-10.6,10.6c-1.1,1.1-2.5,1.1-3.5-0.1
                                            l-5.4-6c-2.7-3.1-2.6-7.7,0.3-10.7L445.4,684z"/>
                                        <path fill="#AA9D87" d="M440.6,691.9c0-2,0.8-4,2.3-5.5l2.4-2.4c2.9-2.9,7.6-3.1,10.7-0.3l6,5.4c0.6,0.5,0.9,1.1,0.9,1.8
                                            c0,0.6-0.3,1.3-0.8,1.8l-10.6,10.6c-0.5,0.5-1.2,0.8-1.8,0.8c-0.6,0-1.3-0.3-1.8-0.9l-5.4-6
                                            C441.3,695.6,440.6,693.8,440.6,691.9z M462.9,690.9C462.9,690.9,462.9,690.8,462.9,690.9c0-0.7-0.3-1.3-0.9-1.8l-6-5.4
                                            c-3-2.7-7.7-2.6-10.6,0.3l-2.4,2.4c-1.5,1.5-2.3,3.5-2.3,5.5c0,1.8,0.6,3.7,2,5.1l5.4,6c0.5,0.6,1.1,0.9,1.7,0.9
                                            c0.6,0,1.2-0.3,1.7-0.8l10.6-10.6C462.6,692.1,462.9,691.5,462.9,690.9z"/>
                                    </g>
                                    <g>
                                        <path fill="#DFD1B8" d="M462.2,692.7l-10.6,10.6c-0.6,0.6-1.2,0.8-1.9,0.8c-0.7,0-1.3-0.3-1.8-0.9l-5.4-6
                                            c-2.8-3.1-2.6-7.9,0.3-10.8l2.4-2.4c3-3,7.7-3.1,10.8-0.3l6,5.4c0.6,0.5,0.9,1.2,0.9,1.8
                                            C463.1,691.5,462.8,692.1,462.2,692.7z M443.1,686.5c-2.9,2.9-3,7.5-0.3,10.5l5.4,6c0.5,0.5,1.1,0.8,1.6,0.8
                                            c0.6,0,1.2-0.2,1.7-0.8l10.6-10.6c0.5-0.5,0.8-1.1,0.8-1.7c0-0.6-0.3-1.2-0.9-1.6l-6-5.4c-3-2.7-7.6-2.6-10.5,0.3
                                            L443.1,686.5z"/>
                                        <path fill="#AA9D87" d="M440.5,691.9c0-2,0.8-4.1,2.3-5.6l2.4-2.4c3-3,7.8-3.1,10.9-0.3l6,5.4c0.6,0.5,0.9,1.2,1,1.9
                                            c0,0.7-0.3,1.3-0.8,1.9l-10.6,10.6c-0.6,0.6-1.2,0.9-1.9,0.8c-0.7,0-1.3-0.3-1.9-1l-5.4-6
                                            C441.2,695.7,440.5,693.8,440.5,691.9z M463,690.9C463,690.9,463,690.8,463,690.9c0-0.7-0.3-1.3-0.9-1.8l-6-5.4
                                            c-3.1-2.8-7.8-2.6-10.8,0.3l-2.4,2.4c-1.5,1.5-2.3,3.5-2.3,5.5c0,1.9,0.7,3.7,2,5.2l5.4,6c0.5,0.6,1.1,0.9,1.8,0.9
                                            c0.6,0,1.3-0.3,1.8-0.8l10.6-10.6C462.7,692.1,463,691.5,463,690.9z M440.8,691.9c0-2,0.8-3.9,2.3-5.4l2.4-2.4
                                            c2.9-2.9,7.5-3,10.6-0.3l6,5.4c0.6,0.5,0.9,1.1,0.9,1.7c0,0.6-0.2,1.2-0.8,1.7l-10.6,10.6c-0.5,0.5-1.1,0.8-1.7,0.8
                                            c-0.6,0-1.2-0.3-1.7-0.9l-5.4-6C441.4,695.6,440.8,693.7,440.8,691.9z M462.8,690.9C462.8,690.9,462.8,690.8,462.8,690.9
                                            c0-0.6-0.3-1.2-0.8-1.7l-6-5.4c-3-2.7-7.6-2.5-10.4,0.3l-2.4,2.4c-2.8,2.8-3,7.4-0.3,10.4l5.4,6c0.5,0.5,1,0.8,1.6,0.8
                                            c0.6,0,1.2-0.2,1.7-0.7l10.6-10.6C462.5,692,462.8,691.4,462.8,690.9z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path fill="#DFD1B8" d="M457.8,681.5l-0.9-0.8c-4.4-4.1-11.2-4-15.5,0.3l-1.4,1.4c-4.2,4.2-4.4,11.1-0.3,15.5l0.8,0.9
                                            l-2.3-0.3l-3.6-7.5l0.7-5.8l3.7-5.1l5-3.4c0,0,4.4-1,4.6-1c0.2,0,4.7,0.4,5.2,0.6c0.5,0.2,3.8,2.8,3.8,3
                                            C457.7,679.4,457.8,681.5,457.8,681.5z"/>
                                        <path fill="#AA9D87" d="M434.7,691l0.7-5.8l0,0l3.7-5.1l0,0l5-3.4l0,0c0.2,0,4.4-1,4.6-1c0.2,0,4.7,0.4,5.2,0.6
                                            c0.4,0.2,3.8,2.8,3.9,3c0,0.1,0.1,2.1,0.1,2.3l0,0.1l-1-0.9c-2.1-2-4.9-3-7.7-3c-2.9,0.1-5.6,1.2-7.6,3.2l-1.4,1.4
                                            c-2,2-3.2,4.8-3.2,7.6c0,2.9,1,5.6,3,7.7l0.9,1l-2.5-0.3L434.7,691z M435.5,685.2l-0.7,5.7l3.6,7.4l2.1,0.3l-0.7-0.8
                                            c-2-2.1-3.1-4.9-3-7.8c0.1-2.9,1.2-5.7,3.3-7.7l1.4-1.4c2.1-2.1,4.8-3.2,7.7-3.3s5.7,1,7.8,3l0.8,0.7c0-0.8-0.1-2-0.1-2.1
                                            c-0.2-0.2-3.3-2.7-3.8-2.9c-0.4-0.2-4.9-0.6-5.1-0.6c-0.2,0-4.3,1-4.6,1l-5,3.4L435.5,685.2z"/>
                                    </g>
                                    <g>
                                        <path fill="#DFD1B8" d="M441.3,699l-3.1-0.4l-3.7-7.6l0.7-5.9l3.7-5.1l0,0l5-3.4l0,0c0.5-0.1,4.4-1,4.6-1
                                            c0.2,0,4.8,0.3,5.3,0.6c0.3,0.1,1.7,1.2,2.1,1.5c1.8,1.4,1.8,1.5,1.8,1.6c0,0.1,0.1,1.7,0.1,2.3l0,0.6l-1.3-1.2
                                            c-4.3-4-11-3.9-15.1,0.3l-1.4,1.4c-4.2,4.2-4.3,10.8-0.3,15.1L441.3,699z M439.9,682.2l1.4-1.4c4.4-4.4,11.3-4.5,15.8-0.3
                                            l0.4,0.4c0-0.7-0.1-1.4-0.1-1.6c-0.4-0.4-3.3-2.7-3.7-2.8c-0.4-0.2-4.7-0.6-5-0.5c-0.1,0-2.8,0.6-4.5,1l-4.9,3.4l-3.6,5
                                            l-0.7,5.6l3.5,7.3l1.5,0.2l-0.3-0.4C435.4,693.5,435.6,686.5,439.9,682.2z"/>
                                        <path fill="#AA9D87" d="M434.4,691l0.7-5.9l0,0l3.7-5.1l0,0l5-3.4l0.1,0c1.6-0.4,4.4-1,4.6-1c0.2,0,4.8,0.3,5.3,0.6
                                            c0.3,0.2,1.7,1.2,2.1,1.5c1.8,1.4,1.8,1.5,1.9,1.6c0,0.1,0.1,1.7,0.1,2.3l0,0.8l-1.4-1.3c-4.3-4-10.9-3.9-15,0.3l-1.4,1.4
                                            c-4.1,4.1-4.3,10.8-0.3,15l1.4,1.5l-3.3-0.4L434.4,691z M435.2,685.1l-0.7,5.9l3.7,7.6l2.9,0.4l-1.2-1.3
                                            c-4-4.3-3.9-11,0.3-15.2l1.4-1.4c4.2-4.2,10.9-4.3,15.2-0.3l1.2,1.1l0-0.5c-0.1-1.4-0.1-2.2-0.1-2.3c0-0.1,0-0.2-1.8-1.6
                                            c-0.9-0.7-1.9-1.4-2.1-1.5c-0.5-0.2-5.1-0.6-5.3-0.6c-0.1,0-1.8,0.4-4.5,1l-0.1,0l-5,3.4L435.2,685.1z M434.9,690.9l0.7-5.6
                                            l0,0l3.6-5l0,0l4.9-3.4l0,0c1.7-0.4,4.4-1,4.5-1c0.4,0,4.7,0.4,5.1,0.5c0.4,0.2,3.3,2.5,3.7,2.9l0,0l0,0
                                            c0,0.3,0.1,1.2,0.1,1.6l0,0.1l-0.5-0.5c-4.5-4.2-11.4-4.1-15.7,0.3l-1.4,1.4c-4.3,4.3-4.5,11.2-0.3,15.7l0.5,0.5l-1.6-0.2
                                            L434.9,690.9z M435.7,685.3l-0.7,5.6l3.5,7.2l1.3,0.2l-0.2-0.2c-2.1-2.2-3.1-5-3.1-7.8c0-2.9,1.1-5.8,3.4-8.1l1.4-1.4
                                            c4.4-4.4,11.4-4.5,15.9-0.3l0.3,0.3c0-0.4-0.1-1.2-0.1-1.4c-0.5-0.5-3.3-2.7-3.7-2.8c-0.4-0.2-4.6-0.6-5-0.5
                                            c-0.1,0-2.8,0.6-4.5,1l-4.9,3.3L435.7,685.3z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path fill="#DFD1B8" d="M440.8,679.8c4.2-4,10.9-4,15.1,0l6,5.6l1.5-1.7l-6-5.6c-5.1-4.8-13.1-4.8-18.3,0.1l-2,2
                                            c-4.8,5.1-4.9,13.1-0.1,18.3l5.6,6l1.7-1.5l-5.6-6c-4-4.3-4-10.9,0-15.1L440.8,679.8z"/>
                                        <path fill="#AA9D87" d="M433.5,689.2c0-3.3,1.2-6.6,3.7-9.2l2-2c5.1-4.9,13.2-4.9,18.3-0.1l6,5.6l-1.6,1.7l-6-5.6
                                            c-4.2-4-10.9-4-15.1,0l-1.9,1.9c-4,4.2-4,10.8,0,15.1l5.6,6l-1.7,1.6l0,0l-5.6-6C434.7,695.8,433.5,692.5,433.5,689.2z
                                            M463.4,683.7l-5.9-5.6c-5.1-4.8-13.1-4.8-18.2,0.1l-2,2c-4.8,5.1-4.8,13.1,0,18.2l5.6,5.9l1.6-1.5l-5.6-5.9
                                            c-4-4.3-4-11,0-15.2l1.9-1.9c4.3-4,10.9-4.1,15.2,0l5.9,5.6L463.4,683.7z"/>
                                    </g>
                                    <g>
                                        <path fill="#DFD1B8" d="M461.9,685.7l-6.2-5.8c-4.2-3.9-10.7-3.9-14.8,0l-1.9,1.9c-3.9,4.1-3.9,10.6,0,14.8l5.8,6.2l-2,1.9
                                            l-5.8-6.2c-4.9-5.2-4.9-13.4,0.1-18.6l2-2c5.2-4.9,13.4-5,18.6-0.1l6.2,5.8L461.9,685.7z M442.8,704l1.3-1.2l-5.4-5.8
                                            c-4.1-4.4-4.1-11.2,0-15.5l1.9-1.9l0,0c4.3-4.1,11.1-4.1,15.5,0l5.8,5.4l1.2-1.3l-5.8-5.4c-5-4.7-12.9-4.7-17.9,0l-2,2
                                            c-4.7,5-4.8,12.9,0,17.9L442.8,704z"/>
                                        <path fill="#AA9D87" d="M433.3,689.2c0-3.4,1.2-6.7,3.7-9.4l2-2c5.2-5,13.4-5,18.7-0.1l6.2,5.8l-2,2.1l-6.2-5.8
                                            c-4.1-3.9-10.6-3.9-14.7,0l-1.9,1.9c-2,2.1-2.9,4.7-2.9,7.4c0,2.6,1,5.3,2.9,7.3l5.8,6.2l-2.1,2l0,0l-5.8-6.2
                                            C434.5,695.9,433.3,692.6,433.3,689.2z M463.7,683.7l-6.1-5.7c-5.2-4.9-13.3-4.9-18.5,0.1l-2,2c-4.9,5.2-4.9,13.3-0.1,18.5
                                            l5.7,6.1l1.9-1.8l-5.7-6.1c-3.9-4.2-3.9-10.7,0-14.9l1.9-1.9c4.2-3.9,10.7-4,14.9,0l6.1,5.7L463.7,683.7z M433.8,689.2
                                            c0-3.2,1.2-6.5,3.6-9l2-2c5-4.8,12.9-4.8,18-0.1l5.8,5.5l-1.3,1.4l-5.8-5.5c-4.3-4.1-11.1-4-15.4,0l-1.9,1.9
                                            c-4.1,4.3-4.1,11.1,0,15.4l5.5,5.8l-1.4,1.3l0,0l-5.4-5.8C435,695.7,433.8,692.5,433.8,689.2z M463,683.7l-5.8-5.4
                                            c-5-4.7-12.8-4.7-17.8,0l-2,2c-4.7,5-4.7,12.8,0,17.8l5.4,5.8l1.2-1.1l-5.4-5.8c-4.1-4.4-4.1-11.2,0-15.6l1.9-1.9
                                            c4.4-4.1,11.2-4.2,15.6,0l5.8,5.4L463,683.7z"/>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g>
                            
                                <image overflow="visible" opacity="0.5" width="278" height="291" href="data:image/png;base64,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" transform="matrix(3.719318e-15 0.1149 -0.1149 3.719318e-15 499.9886 675.2621)">
                            </image>
                            <g>
                                <g>
                                    <g>
                                        
                                            <rect x="469.3" y="690.9" transform="matrix(0.804 -0.5946 0.5946 0.804 -318.7348 416.3914)" fill="#DFD1B8" width="5.9" height="1.6"/>
                                        <path fill="#AA9D87" d="M469.4,692.8l4.8-3.6l1,1.4l-4.8,3.6L469.4,692.8z M474.2,689.4l-4.6,3.4l0.9,1.2l4.6-3.4
                                            L474.2,689.4z"/>
                                    </g>
                                    <g>
                                        <path fill="#DFD1B8" d="M470.4,694.5l-1.3-1.7l5.1-3.8l1.3,1.7L470.4,694.5z M469.8,692.9l0.7,0.9l4.3-3.2l-0.7-0.9
                                            L469.8,692.9z"/>
                                        <path fill="#AA9D87" d="M469,692.7l5.2-3.9l1.3,1.8l-5.2,3.9L469,692.7z M474.2,689l-5,3.7l1.2,1.6l5-3.7L474.2,689z
                                            M469.7,692.8l4.4-3.3l0.7,1l-4.4,3.3L469.7,692.8z M474.1,689.7l-4.2,3.1l0.6,0.8l4.2-3.1L474.1,689.7z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        
                                            <rect x="468.9" y="692" transform="matrix(0.804 -0.5946 0.5946 0.804 -319.4231 416.5883)" fill="#DFD1B8" width="6.7" height="1.6"/>
                                        <path fill="#AA9D87" d="M469,694.2l5.4-4l1,1.4l-5.4,4L469,694.2z M474.4,690.3l-5.3,3.9l0.9,1.2l5.3-3.9L474.4,690.3z"/>
                                    </g>
                                    <g>
                                        <path fill="#DFD1B8" d="M470,695.8l-1.3-1.7l5.7-4.2l1.3,1.7L470,695.8z M469.4,694.2l0.7,0.9l5-3.7l-0.7-0.9L469.4,694.2z"
                                            />
                                        <path fill="#AA9D87" d="M468.7,694.1l5.8-4.3l1.3,1.8l-5.8,4.3L468.7,694.1z M474.5,690l-5.7,4.2l1.2,1.6l5.7-4.2L474.5,690z
                                            M469.4,694.2l5-3.7l0.7,1l-5,3.7L469.4,694.2z M474.4,690.6l-4.9,3.6l0.6,0.8l4.9-3.6L474.4,690.6z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        
                                            <rect x="493.9" y="688.8" transform="matrix(0.5946 -0.804 0.804 0.5946 -355.5877 678.2072)" fill="#DFD1B8" width="1.6" height="5.9"/>
                                        <path fill="#AA9D87" d="M491.8,690.6l1-1.4l4.9,3.6l-1,1.4L491.8,690.6z M492.9,689.4l-0.9,1.2l4.7,3.5l0.9-1.2L492.9,689.4z
                                            "/>
                                    </g>
                                    <g>
                                        <path fill="#DFD1B8" d="M496.7,694.5l-5.2-3.8l1.3-1.7l5.2,3.8L496.7,694.5z M492.2,690.6l4.4,3.2l0.7-0.9l-4.4-3.2
                                            L492.2,690.6z"/>
                                        <path fill="#AA9D87" d="M491.5,690.7l1.3-1.8l5.3,3.9l-1.3,1.8L491.5,690.7z M492.8,689l-1.2,1.6l5.1,3.8l1.2-1.6L492.8,689z
                                            M492.1,690.6l0.7-1l4.5,3.3l-0.7,1L492.1,690.6z M492.9,689.7l-0.6,0.8l4.3,3.2l0.6-0.8L492.9,689.7z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        
                                            <rect x="494" y="689.5" transform="matrix(0.5946 -0.804 0.804 0.5946 -356.4848 678.696)" fill="#DFD1B8" width="1.6" height="6.7"/>
                                        <path fill="#AA9D87" d="M491.5,691.5l1-1.4l5.4,4l-1,1.4L491.5,691.5z M492.6,690.3l-0.9,1.2l5.3,3.9l0.9-1.2L492.6,690.3z"
                                            />
                                    </g>
                                    <g>
                                        <path fill="#DFD1B8" d="M497,695.8l-5.7-4.2l1.3-1.7l5.7,4.2L497,695.8z M492,691.5l5,3.7l0.7-0.9l-5-3.7L492,691.5z"/>
                                        <path fill="#AA9D87" d="M491.2,691.6l1.3-1.8l5.8,4.3l-1.3,1.8L491.2,691.6z M492.6,690l-1.2,1.6l5.7,4.2l1.2-1.6L492.6,690z
                                            M491.9,691.5l0.7-1l5,3.7l-0.7,1L491.9,691.5z M492.7,690.6l-0.6,0.8l4.9,3.6l0.6-0.8L492.7,690.6z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path fill="#DFD1B8" d="M485.3,684.7c4.6,0,8.5,3.6,8.7,8.2l0.5,9c0.1,1.7-1,2.9-2.7,2.9H475c-1.7,0-2.8-1.1-2.7-2.9l0.5-9
                                            c0.3-4.6,4.1-8.2,8.7-8.2H485.3z"/>
                                        <path fill="#AA9D87" d="M472.2,702.2c0-0.1,0-0.1,0-0.2l0.5-9c0.3-4.7,4.1-8.3,8.8-8.3h3.8c4.7,0,8.5,3.6,8.8,8.3l0.5,9
                                            c0,0.9-0.2,1.6-0.7,2.1c-0.5,0.5-1.2,0.8-2.1,0.8H475c-0.9,0-1.6-0.3-2.1-0.8C472.4,703.7,472.2,703,472.2,702.2z
                                            M494.5,702.2c0-0.1,0-0.1,0-0.2l-0.5-9c-0.3-4.6-4.1-8.2-8.7-8.2h-3.8c-4.6,0-8.4,3.6-8.7,8.2l-0.5,9c0,0.8,0.2,1.5,0.7,2
                                            c0.5,0.5,1.2,0.8,2,0.8h16.8c0.8,0,1.5-0.3,2-0.8C494.3,703.6,494.5,703,494.5,702.2z"/>
                                    </g>
                                    <g>
                                        <path fill="#DFD1B8" d="M491.8,705.1H475c-0.9,0-1.7-0.3-2.2-0.9c-0.5-0.6-0.8-1.4-0.7-2.3l0.5-9c0.3-4.8,4.2-8.5,9-8.5h3.8
                                            c4.8,0,8.7,3.7,9,8.5l0.5,9c0.1,0.9-0.2,1.7-0.7,2.3C493.5,704.8,492.7,705.1,491.8,705.1z M481.5,685c-4.5,0-8.2,3.5-8.5,8
                                            l-0.5,9c0,0.8,0.2,1.4,0.6,1.9c0.4,0.5,1.1,0.7,1.9,0.7h16.8c0.8,0,1.4-0.2,1.9-0.7c0.4-0.5,0.6-1.1,0.6-1.9l-0.5-9
                                            c-0.3-4.5-4-8-8.5-8H481.5z"/>
                                        <path fill="#AA9D87" d="M471.9,702.2c0-0.1,0-0.2,0-0.2l0.5-9c0.3-4.8,4.2-8.5,9-8.5h3.8c4.8,0,8.8,3.7,9,8.5l0.5,9
                                            c0.1,0.9-0.2,1.7-0.8,2.3c-0.5,0.6-1.3,0.9-2.3,0.9H475c-0.9,0-1.7-0.3-2.3-0.9C472.2,703.8,471.9,703.1,471.9,702.2z
                                            M494.7,702.2c0-0.1,0-0.2,0-0.2l-0.5-9c-0.3-4.7-4.2-8.4-8.9-8.4h-3.8c-4.7,0-8.6,3.7-8.9,8.4l-0.5,9
                                            c-0.1,0.9,0.2,1.7,0.7,2.2c0.5,0.6,1.3,0.8,2.2,0.8h16.8c0.9,0,1.7-0.3,2.2-0.8C494.5,703.7,494.7,703,494.7,702.2z
                                            M472.4,702.2c0-0.1,0-0.1,0-0.2l0.5-9c0.3-4.5,4-8.1,8.5-8.1h3.8c4.5,0,8.3,3.5,8.5,8.1l0.5,9c0,0.8-0.2,1.5-0.6,1.9
                                            c-0.5,0.5-1.1,0.7-1.9,0.7H475c-0.8,0-1.5-0.3-1.9-0.7C472.7,703.5,472.4,702.9,472.4,702.2z M494.2,702.2c0-0.1,0-0.1,0-0.2
                                            l-0.5-9c-0.3-4.5-3.9-8-8.4-8h-3.8c-4.5,0-8.2,3.5-8.4,8l-0.5,9c0,0.8,0.2,1.4,0.6,1.9c0.4,0.5,1.1,0.7,1.8,0.7h16.8
                                            c0.8,0,1.4-0.2,1.8-0.7C494,703.5,494.2,702.9,494.2,702.2z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path fill="#DFD1B8" d="M485.1,685.6c4.1,0,7.5,3.2,7.8,7.3l0.5,8c0.1,1.5-0.9,2.6-2.4,2.6h-15c-1.5,0-2.5-1-2.4-2.6l0.5-8
                                            c0.2-4.1,3.6-7.3,7.8-7.3H485.1z"/>
                                        <path fill="#AA9D87" d="M473.4,701.2c0-0.1,0-0.1,0-0.2l0.5-8c0.2-4.1,3.7-7.4,7.8-7.4h3.4c4.1,0,7.6,3.2,7.8,7.4l0.5,8
                                            c0,0.8-0.2,1.4-0.6,1.9c-0.4,0.5-1.1,0.7-1.9,0.7h-15c-0.8,0-1.4-0.2-1.9-0.7C473.6,702.4,473.4,701.9,473.4,701.2z
                                            M493.3,701.2c0-0.1,0-0.1,0-0.2l-0.5-8c-0.2-4.1-3.6-7.3-7.7-7.3h-3.4c-4.1,0-7.5,3.2-7.7,7.3l-0.5,8c0,0.7,0.2,1.4,0.6,1.8
                                            c0.4,0.4,1,0.7,1.8,0.7h15c0.7,0,1.4-0.2,1.8-0.7C493.1,702.4,493.3,701.8,493.3,701.2z"/>
                                    </g>
                                    <g>
                                        <path fill="#DFD1B8" d="M490.9,703.7h-15c-0.8,0-1.5-0.3-1.9-0.7c-0.5-0.5-0.7-1.2-0.6-2l0.5-8c0.2-4.2,3.7-7.4,7.9-7.4h3.4
                                            c4.2,0,7.6,3.3,7.9,7.4l0.5,8c0,0.8-0.2,1.5-0.6,1.9C492.3,703.4,491.7,703.7,490.9,703.7z M481.7,685.7
                                            c-4,0-7.4,3.2-7.6,7.2l-0.5,8c0,0.7,0.2,1.3,0.6,1.8c0.4,0.4,1,0.7,1.7,0.7h15c0.7,0,1.3-0.2,1.7-0.7c0.4-0.4,0.6-1,0.6-1.8
                                            l-0.5-8c-0.2-4-3.6-7.2-7.6-7.2H481.7z"/>
                                        <path fill="#AA9D87" d="M473.3,701.2c0-0.1,0-0.1,0-0.2l0.5-8c0.2-4.2,3.7-7.5,7.9-7.5h3.4c4.2,0,7.7,3.3,7.9,7.5l0.5,8
                                            c0,0.8-0.2,1.5-0.6,2c-0.5,0.5-1.1,0.8-2,0.8h-15c-0.8,0-1.5-0.3-2-0.8C473.5,702.5,473.3,701.9,473.3,701.2z M493.4,701.2
                                            c0-0.1,0-0.1,0-0.2l-0.5-8c-0.2-4.1-3.7-7.4-7.8-7.4h-3.4c-4.1,0-7.6,3.2-7.8,7.4l-0.5,8c0,0.8,0.2,1.4,0.6,1.9
                                            c0.4,0.5,1.1,0.7,1.9,0.7h15c0.8,0,1.4-0.2,1.9-0.7C493.2,702.4,493.4,701.9,493.4,701.2z M473.6,701.2c0-0.1,0-0.1,0-0.2
                                            l0.5-8c0.2-4.1,3.6-7.3,7.7-7.3h3.4c4.1,0,7.5,3.2,7.7,7.3l0.5,8c0,0.7-0.2,1.4-0.6,1.8c-0.4,0.4-1,0.7-1.8,0.7h-15
                                            c-0.7,0-1.4-0.2-1.8-0.7C473.8,702.4,473.6,701.8,473.6,701.2z M493.1,701.2c0-0.1,0-0.1,0-0.2l-0.5-8
                                            c-0.2-4-3.6-7.2-7.6-7.2h-3.4c-4,0-7.3,3.1-7.6,7.2l-0.5,8c0,0.7,0.1,1.3,0.5,1.7c0.4,0.4,1,0.6,1.7,0.6h15
                                            c0.7,0,1.3-0.2,1.7-0.6C492.9,702.3,493.1,701.8,493.1,701.2z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path fill="#DFD1B8" d="M495.7,692.6l0-1.2c-0.2-6-5.1-10.8-11.1-10.8h-2c-6,0-10.9,4.8-11.1,10.8l0,1.2l-1.4-1.8l2.7-7.8
                                            l4.6-3.6l6.2-1l5.9,1.1c0,0,3.8,2.4,4,2.5c0.1,0.1,3.1,3.6,3.3,4s0.7,4.7,0.6,4.8C497.1,691,495.7,692.6,495.7,692.6z"/>
                                        <path fill="#AA9D87" d="M469.9,690.8l2.7-7.9l0,0l4.6-3.6l0,0l6.2-1l6,1.1c0.2,0.1,3.8,2.4,4,2.5c0.2,0.1,3.1,3.6,3.3,4.1
                                            c0.2,0.4,0.7,4.7,0.6,4.9c-0.1,0.1-1.4,1.6-1.5,1.7l-0.1,0.1l0-1.3c-0.1-2.9-1.3-5.6-3.4-7.6s-4.8-3.1-7.7-3.1h-2
                                            c-2.9,0-5.6,1.1-7.7,3.1s-3.3,4.7-3.4,7.6l0,1.3L469.9,690.8z M472.7,683l-2.7,7.8l1.3,1.7l0-1c0.1-2.9,1.3-5.6,3.4-7.7
                                            c2.1-2,4.9-3.1,7.8-3.1h2c2.9,0,5.7,1.1,7.8,3.1c2.1,2,3.3,4.7,3.4,7.7l0,1c0.6-0.6,1.3-1.5,1.4-1.6c0-0.3-0.4-4.3-0.6-4.8
                                            c-0.2-0.4-3.1-3.9-3.2-4c-0.1-0.1-3.8-2.4-4-2.5l-5.9-1.1l-6.1,1L472.7,683z"/>
                                    </g>
                                    <g>
                                        <path fill="#DFD1B8" d="M471.6,693.3l-1.9-2.5l2.8-8l4.7-3.7l6.3-1l0,0l6,1.1l0,0c0.4,0.2,3.8,2.4,4,2.5
                                            c0.2,0.1,3.1,3.6,3.3,4.2c0.1,0.3,0.4,2.1,0.4,2.6c0.3,2.3,0.2,2.4,0.2,2.4c-0.1,0.1-1.1,1.3-1.5,1.7l-0.4,0.5l-0.1-1.8
                                            c-0.2-5.9-5-10.5-10.9-10.5h-2c-5.9,0-10.7,4.6-10.9,10.5L471.6,693.3z M482.5,680.4h2c6.2,0,11.2,4.8,11.4,11l0,0.6
                                            c0.4-0.5,0.9-1,1.1-1.2c0-0.6-0.4-4.2-0.6-4.6c-0.1-0.4-2.9-3.7-3.2-3.9c-0.1-0.1-2.4-1.5-3.9-2.5l-5.9-1.1l-6.1,1l-4.4,3.5
                                            l-2.6,7.6l0.9,1.2l0-0.5C471.4,685.3,476.4,680.4,482.5,680.4z"/>
                                        <path fill="#AA9D87" d="M469.6,690.9l2.8-8.1l0,0l4.7-3.7l0,0l6.3-1l0.1,0l6,1.1l0.1,0.1c1.4,0.9,3.8,2.4,3.9,2.5
                                            c0.2,0.1,3.1,3.6,3.4,4.2c0.1,0.3,0.4,2.1,0.4,2.6c0.3,2.3,0.2,2.4,0.2,2.5c-0.1,0.1-1,1.1-1.5,1.7l-0.5,0.6l-0.1-1.9
                                            c-0.2-5.9-5-10.5-10.8-10.5h-2c-5.9,0-10.6,4.6-10.8,10.5l-0.1,2L469.6,690.9z M472.5,682.9l-2.8,8l1.8,2.3l0.1-1.7
                                            c0.2-5.9,5-10.6,10.9-10.6h2c5.9,0,10.7,4.6,10.9,10.6l0.1,1.7l0.3-0.3c0.9-1,1.5-1.7,1.5-1.7c0-0.1,0.1-0.1-0.2-2.4
                                            c-0.1-1.1-0.3-2.3-0.4-2.6c-0.2-0.5-3.2-4-3.3-4.1c-0.1-0.1-1.5-1-3.9-2.5l-0.1-0.1l-6-1.1l-6.2,1L472.5,682.9z M470.2,690.8
                                            l2.7-7.7l0,0l4.5-3.5l0,0l6.1-1l5.9,1.1c1.5,0.9,3.8,2.4,3.9,2.5c0.3,0.3,3.1,3.6,3.2,4c0.2,0.4,0.6,4.1,0.6,4.6l0,0l0,0
                                            c-0.2,0.2-0.8,0.9-1.1,1.2l-0.1,0.1l0-0.7c-0.2-6.1-5.2-10.9-11.3-10.9h-2c-6.1,0-11.1,4.8-11.3,10.9l0,0.7L470.2,690.8z
                                            M472.9,683.2l-2.6,7.6l0.8,1l0-0.3c0.2-6.2,5.2-11,11.4-11h2c6.2,0,11.2,4.9,11.4,11l0,0.4c0.3-0.3,0.8-0.9,0.9-1.1
                                            c0-0.7-0.5-4.2-0.6-4.6c-0.1-0.4-2.9-3.7-3.2-3.9c-0.1-0.1-2.3-1.5-3.9-2.5l-5.8-1.1l-6,1L472.9,683.2z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path fill="#DFD1B8" d="M484.8,679.3c5.8,0.2,10.6,4.8,10.7,10.7l0.3,8.2l2.3-0.1l-0.3-8.2c-0.2-7-5.9-12.7-12.9-12.9h-2.8
                                            c-7,0.2-12.7,5.8-12.9,12.9l-0.3,8.2l2.3,0.1l0.3-8.2c0.2-5.8,4.9-10.5,10.7-10.7H484.8z"/>
                                        <path fill="#AA9D87" d="M468.9,698.2l0.3-8.2c0.2-7.1,5.9-12.7,13-12.9h2.8c7.1,0.2,12.8,5.9,13,12.9l0.3,8.2l-2.4,0.1
                                            l-0.3-8.2c-0.2-5.8-4.9-10.5-10.7-10.6h-2.7c-5.8,0.2-10.5,4.8-10.7,10.6l-0.3,8.2L468.9,698.2z M498.1,698.1l-0.3-8.1
                                            c-0.2-7-5.9-12.6-12.9-12.8h-2.8c-7,0.2-12.7,5.8-12.9,12.8l-0.3,8.1l2.1,0.1l0.3-8.1c0.2-5.9,4.9-10.6,10.8-10.7h2.7
                                            c5.9,0.2,10.6,4.9,10.8,10.7l0.3,8.1L498.1,698.1z"/>
                                    </g>
                                    <g>
                                        <path fill="#DFD1B8" d="M495.6,698.5l-0.3-8.4c-0.2-5.7-4.8-10.3-10.5-10.4h-2.7c-5.7,0.2-10.3,4.7-10.5,10.4l-0.3,8.4
                                            l-2.8-0.1l0.3-8.4c0.2-7.2,6-12.9,13.2-13.1l2.8,0c7.2,0.2,13,5.9,13.2,13.1l0.3,8.4L495.6,698.5z M469.2,697.9l1.8,0.1
                                            l0.3-7.9c0.2-6,5-10.8,11-10.9l2.7,0l0,0c6,0.2,10.8,5,11,10.9l0.3,7.9l1.8-0.1l-0.3-7.9c-0.2-6.9-5.8-12.5-12.7-12.6l-2.8,0
                                            c-6.9,0.2-12.5,5.7-12.7,12.6L469.2,697.9z"/>
                                        <path fill="#AA9D87" d="M468.6,698.4l0.3-8.5c0.2-7.2,6-13,13.2-13.2l2.8,0c7.2,0.2,13,6,13.2,13.2l0.3,8.5l-2.9,0.1
                                            l-0.3-8.5c-0.2-5.7-4.8-10.2-10.4-10.4h-2.7c-5.7,0.1-10.3,4.7-10.4,10.4l-0.3,8.5L468.6,698.4z M498.3,698.3l-0.3-8.4
                                            c-0.2-7.1-6-12.9-13.1-13.1l-2.8,0c-7.1,0.2-12.9,5.9-13.1,13.1l-0.3,8.4l2.6,0.1l0.3-8.4c0.2-5.7,4.8-10.3,10.5-10.5h2.7
                                            c5.7,0.2,10.4,4.8,10.6,10.5l0.3,8.4L498.3,698.3z M469.1,697.9l0.3-8c0.2-6.9,5.8-12.5,12.8-12.7l2.8,0
                                            c6.9,0.2,12.5,5.8,12.8,12.7l0.3,8L496,698l-0.3-8c-0.2-5.9-5-10.7-10.9-10.9h-2.7c-5.9,0.2-10.7,4.9-10.9,10.9l-0.3,8
                                            L469.1,697.9z M497.8,697.8l-0.3-7.9c-0.2-6.9-5.8-12.4-12.6-12.6l-2.8,0c-6.9,0.2-12.4,5.7-12.6,12.6l-0.3,7.9l1.7,0.1
                                            l0.3-7.9c0.2-6,5-10.8,11-11l2.7,0c6,0.2,10.8,5,11,11l0.3,7.9L497.8,697.8z"/>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g>
                            
                                <image overflow="visible" opacity="0.4" width="43" height="42" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAqCAYAAAAqAaJlAAAACXBIWXMAAAsSAAALEgHS3X78AAAE
            tUlEQVRYhcWZfXPaRhCHHwEGjCFOkzZN7baT7/+p+jqN6+DYOBgbDPSP+y23Ok5Cwml7MzcSetl9
            bm93b08UHN+KI9/b/lcKC3cskmuH2tYdt8m1VsqbPtfRecd1D17VDHDjuv22+wdbryGoAfbUT3Ts
            qtcBG+ha/RlY6fjcBviQRQyyK8ABcOr6QNBVFvYWfQaegIXrTwJfE619FKy35gAYARPgHHit8xHQ
            1zM5H/ZWfQIegHvgFrjT+YPumZUrgatgDfQEGAJj4BvgW+Ad8J2AxxqIucIh2C8CvQb+Bj4BnwVt
            Vq4EzvlsCjoR5HvgErgAvhfsGcGynQMG2AhkLrgryR26gc4EWWnhFDad+gnBihfAz+qXwFvd86Cp
            cJ81CgE8Am+AV0QX8u/7vifTw1qAdCVkLKgL4IP6T4IfEywPMcItJXnQrht8l2BJC8y+rqH3TM6a
            6DqVsDjBI8I0vxfgB4JV3wm0S4xu8zU/fTZoyyBDdXMtM4xN+zKRZdnBninBplY9k1V/EOyPAp3o
            uSUhih8IU+sVwD7sUlBDYvaY6PklIY3N1Re6ZpbdwXadcAuqkUAvidN/QUhZPSk10AXlCC6S7gMv
            dZMuMeWtNWiT6VPZrnk3MBewDPCGkAUsmAZE31q7902hBZLB+GvWzXUKyRvICJYSPwE3hMzwSHm2
            Sm6Qwr4m5NZXhKDoyYrmKpZyDNiCKU1dfoDr5L6Pj7cy0LmA59K381uzSpqyzgQ8FqiPXAjuYs+f
            qOdgLapXBD80X/Tvdogr47l0DhO2AtimqcusZinG0ozB2GB8AJllc/WBL2AMdqV7Jm8jPWP1EeWa
            Y9fSbGAj7hNzYd9B+fxpyrxFqwqZteT4FGfPr4n+azqzg88tCimMTVefcqK346Gaduue71EOmq0G
            0Et6VmZuufXLpIf2fplCHio17b2Nzn3puHV6fHG/J7OqkEmtnIv4JpAmz0P7dd+CLc3P2Va3U/A5
            s5P0FKJJyz3fZtC1sLkqqrHgmlZkzkvLalXrZK6lpVojQUe2VMeGGn0e1r9g5Zrf1LXaiTaEzOny
            +7GSrtSy9vKSsDYvdLSVZ8PXa611mc+mO9AvhA3dZ0J9cEpcGitTS8NWp+tOv7MbyBzsg166JhQW
            E/aX3ZcEmulaSZdtIK90vNP1PVhfz/oC3PJrXZ1g77UFtd3Bo0A/Ar8BvwC/C/rWAe98t5sI88qt
            GE+LDG/dts1bdU6oX/8AfhXsn8CUuDUv7cOqfHZOmI4boi/NZQ3bPh8DnNMxJUz/tfR50KzP5oTZ
            15OZ+r0U9InreS5PVzWbzqXkzAiGmKrf6rr/2FFqHtZGkAKbhacEN9jouFdvNoC1DeI94YuMBZVZ
            NN3T1W7FTaj/3HNDCIKRrs+IvnsM7JPArggB9ZG4jcnuaqtgfbFsQTAlTv2MsPXwebct7JJghCnw
            l2BvCVat/ThXZVkTOifWoQtC9J4Rg6xpBeZdbCVZM4JF/W62FrbuK6Lfc50K0ufapl+9PbDNmi2x
            c+K3gloXOASbFt9+F3vsKuY/1a9c99+4Wn+f9feO/R+hDjj9f6G2NGwCmz5TJOcvaUf9c/M1tiYv
            af9WUf//t38AxCboWDiBD/IAAAAASUVORK5CYII=" transform="matrix(1 0 0 1 392 672)">
                            </image>
                            <g>
                                <g>
                                    <g>
                                        <g>
                                            
                                                <rect x="397.4" y="690.9" transform="matrix(0.804 -0.5946 0.5946 0.804 -332.8439 373.5848)" fill="#DFD1B8" width="5.9" height="1.6"/>
                                            <path fill="#AA9D87" d="M397.4,692.8l4.8-3.6l1,1.4l-4.8,3.6L397.4,692.8z M402.2,689.4l-4.6,3.4l0.9,1.2l4.6-3.4
                                                L402.2,689.4z"/>
                                        </g>
                                        <g>
                                            <path fill="#DFD1B8" d="M398.4,694.5l-1.3-1.7l5.1-3.8l1.3,1.7L398.4,694.5z M397.8,692.9l0.7,0.9l4.3-3.2l-0.7-0.9
                                                L397.8,692.9z"/>
                                            <path fill="#AA9D87" d="M397,692.7l5.2-3.9l1.3,1.8l-5.2,3.9L397,692.7z M402.2,689l-5,3.7l1.2,1.6l5-3.7L402.2,689z
                                                M397.7,692.8l4.4-3.3l0.7,1l0,0l-4.4,3.2L397.7,692.8z M402.1,689.7l-4.2,3.1l0.6,0.8l4.2-3.1L402.1,689.7z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            
                                                <rect x="396.9" y="692" transform="matrix(0.804 -0.5946 0.5946 0.804 -333.5322 373.7818)" fill="#DFD1B8" width="6.7" height="1.6"/>
                                            <path fill="#AA9D87" d="M397,694.2l5.4-4l1,1.4l-5.4,4L397,694.2z M402.4,690.3l-5.3,3.9l0.9,1.2l5.3-3.9L402.4,690.3z"/>
                                        </g>
                                        <g>
                                            <path fill="#DFD1B8" d="M398,695.8l-1.3-1.7l5.7-4.2l1.3,1.7L398,695.8z M397.4,694.2l0.7,0.9l5-3.7l-0.7-0.9L397.4,694.2z"
                                                />
                                            <path fill="#AA9D87" d="M396.7,694.1l5.8-4.3l1.3,1.8l-5.8,4.3L396.7,694.1z M402.5,690l-5.7,4.2l1.2,1.6l5.7-4.2L402.5,690
                                                z M397.4,694.2l5-3.7l0.7,1l-5,3.7L397.4,694.2z M402.4,690.6l-4.9,3.6l0.6,0.8l4.9-3.6L402.4,690.6z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            
                                                <rect x="421.9" y="688.8" transform="matrix(0.5946 -0.804 0.804 0.5946 -384.7724 620.325)" fill="#DFD1B8" width="1.6" height="5.9"/>
                                            <path fill="#AA9D87" d="M419.8,690.6l1-1.4l4.9,3.6l-1,1.4L419.8,690.6z M420.9,689.4l-0.9,1.2l4.7,3.5l0.9-1.2L420.9,689.4
                                                z"/>
                                        </g>
                                        <g>
                                            <path fill="#DFD1B8" d="M424.7,694.5l-5.2-3.8l1.3-1.7l5.2,3.8L424.7,694.5z M420.2,690.6l4.4,3.2l0.7-0.9l-4.4-3.2
                                                L420.2,690.6z"/>
                                            <path fill="#AA9D87" d="M419.5,690.7l1.3-1.8l5.3,3.9l-1.3,1.8L419.5,690.7z M420.8,689l-1.2,1.6l5.1,3.8l1.2-1.6L420.8,689
                                                z M420.2,690.6l0.7-1l4.5,3.3l-0.7,1L420.2,690.6z M420.9,689.7l-0.6,0.8l4.3,3.2l0.6-0.8L420.9,689.7z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            
                                                <rect x="422" y="689.5" transform="matrix(0.5946 -0.804 0.804 0.5946 -385.67 620.8135)" fill="#DFD1B8" width="1.6" height="6.7"/>
                                            <path fill="#AA9D87" d="M419.5,691.5l1-1.4l5.4,4l-1,1.4L419.5,691.5z M420.6,690.3l-0.9,1.2l5.3,3.9l0.9-1.2L420.6,690.3z"
                                                />
                                        </g>
                                        <g>
                                            <path fill="#DFD1B8" d="M425,695.8l-5.7-4.2l1.3-1.7l5.7,4.2L425,695.8z M420,691.5l5,3.7l0.7-0.9l-5-3.7L420,691.5z"/>
                                            <path fill="#AA9D87" d="M419.2,691.6l1.3-1.8l5.8,4.3l-1.3,1.8L419.2,691.6z M420.6,690l-1.2,1.6l5.7,4.2l1.2-1.6L420.6,690
                                                z M419.9,691.5l0.7-1l5,3.7l-0.7,1L419.9,691.5z M420.7,690.6l-0.6,0.8l4.9,3.6l0.6-0.8L420.7,690.6z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path fill="#DFD1B8" d="M413.3,684.7c4.6,0,8.5,3.6,8.7,8.2l0.5,9c0.1,1.7-1,2.9-2.7,2.9H403c-1.7,0-2.8-1.1-2.7-2.9l0.5-9
                                                c0.3-4.6,4.1-8.2,8.7-8.2H413.3z"/>
                                            <path fill="#AA9D87" d="M400.2,702.2c0-0.1,0-0.1,0-0.2l0.5-9c0.3-4.7,4.1-8.3,8.8-8.3h3.8c4.7,0,8.5,3.6,8.8,8.3l0.5,9
                                                c0,0.9-0.2,1.6-0.7,2.1c-0.5,0.5-1.2,0.8-2.1,0.8H403c-0.9,0-1.6-0.3-2.1-0.8C400.4,703.7,400.2,703,400.2,702.2z
                                                M422.5,702.2c0-0.1,0-0.1,0-0.2l-0.5-9c-0.3-4.6-4.1-8.2-8.7-8.2h-3.8c-4.6,0-8.4,3.6-8.7,8.2l-0.5,9c0,0.8,0.2,1.5,0.7,2
                                                c0.5,0.5,1.2,0.8,2,0.8h16.8c0.8,0,1.5-0.3,2-0.8C422.3,703.6,422.5,703,422.5,702.2z"/>
                                        </g>
                                        <g>
                                            <path fill="#DFD1B8" d="M419.8,705.1H403c-0.9,0-1.7-0.3-2.2-0.9c-0.5-0.6-0.8-1.4-0.7-2.3l0.5-9c0.3-4.8,4.2-8.5,9-8.5h3.8
                                                c4.8,0,8.7,3.7,9,8.5l0.5,9c0.1,0.9-0.2,1.7-0.7,2.3C421.5,704.8,420.8,705.1,419.8,705.1z M409.5,685c-4.5,0-8.2,3.5-8.5,8
                                                l-0.5,9c0,0.8,0.2,1.4,0.6,1.9c0.4,0.5,1.1,0.7,1.9,0.7h16.8c0.8,0,1.4-0.2,1.9-0.7c0.4-0.5,0.6-1.1,0.6-1.9l-0.5-9
                                                c-0.3-4.5-4-8-8.5-8H409.5z"/>
                                            <path fill="#AA9D87" d="M400,702.2c0-0.1,0-0.2,0-0.2l0.5-9c0.3-4.8,4.2-8.5,9-8.5h3.8c4.8,0,8.8,3.7,9,8.5l0.5,9
                                                c0.1,0.9-0.2,1.7-0.8,2.3c-0.5,0.6-1.3,0.9-2.3,0.9H403c-0.9,0-1.7-0.3-2.3-0.9C400.2,703.8,400,703.1,400,702.2z
                                                M422.7,702.2c0-0.1,0-0.2,0-0.2l-0.5-9c-0.3-4.7-4.2-8.4-8.9-8.4h-3.8c-4.7,0-8.6,3.7-8.9,8.4l-0.5,9
                                                c-0.1,0.9,0.2,1.7,0.7,2.2c0.5,0.6,1.3,0.8,2.2,0.8h16.8c0.9,0,1.7-0.3,2.2-0.8C422.5,703.7,422.7,703,422.7,702.2z
                                                M400.4,702.2c0-0.1,0-0.1,0-0.2l0.5-9c0.3-4.5,4-8.1,8.5-8.1h3.8c4.5,0,8.3,3.5,8.5,8.1l0.5,9c0,0.8-0.2,1.5-0.6,1.9
                                                c-0.5,0.5-1.1,0.7-1.9,0.7H403c-0.8,0-1.5-0.3-1.9-0.7C400.7,703.5,400.4,702.9,400.4,702.2z M422.3,702.2
                                                c0-0.1,0-0.1,0-0.2l-0.5-9c-0.3-4.5-3.9-8-8.4-8h-3.8c-4.5,0-8.2,3.5-8.4,8l-0.5,9c0,0.8,0.2,1.4,0.6,1.9
                                                c0.4,0.5,1.1,0.7,1.8,0.7h16.8c0.8,0,1.4-0.2,1.8-0.7C422.1,703.5,422.3,702.9,422.3,702.2z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path fill="#DFD1B8" d="M413.1,685.6c4.1,0,7.5,3.2,7.8,7.3l0.5,8c0.1,1.5-0.9,2.6-2.4,2.6h-15c-1.5,0-2.5-1-2.4-2.6l0.5-8
                                                c0.2-4.1,3.6-7.3,7.8-7.3H413.1z"/>
                                            <path fill="#AA9D87" d="M401.4,701.2c0-0.1,0-0.1,0-0.2l0.5-8c0.2-4.1,3.7-7.4,7.8-7.4h3.4c4.1,0,7.6,3.2,7.8,7.4l0.5,8
                                                c0,0.8-0.2,1.4-0.6,1.9c-0.4,0.5-1.1,0.7-1.9,0.7h-15c-0.8,0-1.4-0.2-1.9-0.7C401.6,702.4,401.4,701.9,401.4,701.2z
                                                M421.3,701.2c0-0.1,0-0.1,0-0.2l-0.5-8c-0.2-4.1-3.6-7.3-7.7-7.3h-3.4c-4.1,0-7.5,3.2-7.7,7.3l-0.5,8
                                                c0,0.7,0.2,1.4,0.6,1.8c0.4,0.4,1,0.7,1.8,0.7h15c0.7,0,1.4-0.2,1.8-0.7C421.1,702.4,421.3,701.8,421.3,701.2z"/>
                                        </g>
                                        <g>
                                            <path fill="#DFD1B8" d="M418.9,703.7h-15c-0.8,0-1.5-0.3-1.9-0.7c-0.5-0.5-0.7-1.2-0.6-2l0.5-8c0.2-4.2,3.7-7.4,7.9-7.4h3.4
                                                c4.2,0,7.6,3.3,7.9,7.4l0.5,8c0,0.8-0.2,1.5-0.6,1.9C420.4,703.4,419.7,703.7,418.9,703.7z M409.7,685.7
                                                c-4,0-7.4,3.2-7.6,7.2l-0.5,8c0,0.7,0.2,1.3,0.6,1.8c0.4,0.4,1,0.7,1.7,0.7h15c0.7,0,1.3-0.2,1.7-0.7c0.4-0.4,0.6-1,0.6-1.8
                                                l-0.5-8c-0.2-4-3.6-7.2-7.6-7.2H409.7z"/>
                                            <path fill="#AA9D87" d="M401.3,701.2c0-0.1,0-0.1,0-0.2l0.5-8c0.2-4.2,3.7-7.5,7.9-7.5h3.4c4.2,0,7.7,3.3,7.9,7.5l0.5,8
                                                c0,0.8-0.2,1.5-0.6,2c-0.5,0.5-1.1,0.8-2,0.8h-15c-0.8,0-1.5-0.3-2-0.8C401.5,702.5,401.3,701.9,401.3,701.2z M421.4,701.2
                                                c0-0.1,0-0.1,0-0.2l-0.5-8c-0.2-4.1-3.7-7.4-7.8-7.4h-3.4c-4.1,0-7.6,3.2-7.8,7.4l-0.5,8c0,0.8,0.2,1.4,0.6,1.9
                                                c0.4,0.5,1.1,0.7,1.9,0.7h15c0.8,0,1.4-0.2,1.9-0.7C421.2,702.4,421.4,701.9,421.4,701.2z M401.6,701.2c0-0.1,0-0.1,0-0.2
                                                l0.5-8c0.2-4.1,3.6-7.3,7.7-7.3h3.4c4.1,0,7.5,3.2,7.7,7.3l0.5,8c0,0.7-0.2,1.4-0.6,1.8c-0.4,0.4-1,0.7-1.8,0.7h-15
                                                c-0.7,0-1.4-0.2-1.8-0.7C401.8,702.4,401.6,701.8,401.6,701.2z M421.1,701.2c0-0.1,0-0.1,0-0.2l-0.5-8
                                                c-0.2-4-3.6-7.2-7.6-7.2h-3.4c-4,0-7.3,3.1-7.6,7.2l-0.5,8c0,0.7,0.2,1.3,0.5,1.7c0.4,0.4,1,0.6,1.7,0.6h15
                                                c0.7,0,1.3-0.2,1.7-0.6C421,702.3,421.1,701.8,421.1,701.2z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path fill="#DFD1B8" d="M423.7,692.6l0-1.2c-0.2-6-5.1-10.8-11.1-10.8h-2c-6,0-10.9,4.8-11.1,10.8l0,1.2l-1.4-1.8l2.7-7.8
                                                l4.6-3.6l6.2-1l5.9,1.1c0,0,3.8,2.4,4,2.5c0.1,0.1,3.1,3.6,3.3,4s0.7,4.7,0.6,4.8C425.1,691,423.7,692.6,423.7,692.6z"/>
                                            <path fill="#AA9D87" d="M397.9,690.8l2.7-7.9l0,0l4.6-3.6l0,0l6.2-1l0,0l6,1.1l0,0c0.2,0.1,3.8,2.4,4,2.5
                                                c0.2,0.1,3.1,3.6,3.3,4.1c0.2,0.4,0.7,4.7,0.6,4.9c-0.1,0.1-1.4,1.6-1.5,1.7l-0.1,0.1l0-1.3c-0.1-2.9-1.3-5.6-3.4-7.6
                                                s-4.8-3.1-7.7-3.1h-2c-2.9,0-5.6,1.1-7.7,3.1s-3.3,4.7-3.4,7.6l0,1.3L397.9,690.8z M400.7,683l-2.7,7.8l1.3,1.7l0-1
                                                c0.1-2.9,1.3-5.6,3.4-7.7s4.9-3.1,7.8-3.1h2c2.9,0,5.7,1.1,7.8,3.1c2.1,2,3.3,4.7,3.4,7.7l0,1c0.6-0.6,1.3-1.5,1.4-1.6
                                                c0-0.3-0.4-4.3-0.6-4.8c-0.2-0.4-3.1-3.9-3.2-4c-0.1-0.1-3.8-2.4-4-2.5l-5.9-1.1l-6.1,1L400.7,683z"/>
                                        </g>
                                        <g>
                                            <path fill="#DFD1B8" d="M399.6,693.3l-1.9-2.5l2.8-8l4.7-3.7l6.3-1l0,0l6,1.1l0,0c0.4,0.2,3.8,2.4,4,2.5
                                                c0.2,0.1,3.1,3.6,3.3,4.2c0.1,0.3,0.4,2.1,0.4,2.6c0.3,2.3,0.2,2.4,0.2,2.4c-0.1,0.1-1.1,1.3-1.5,1.7l-0.4,0.5l-0.1-1.8
                                                c-0.2-5.9-5-10.5-10.9-10.5h-2c-5.9,0-10.7,4.6-10.9,10.5L399.6,693.3z M410.5,680.4h2c6.2,0,11.2,4.8,11.4,11l0,0.6
                                                c0.4-0.5,0.9-1,1.1-1.2c0-0.6-0.4-4.2-0.6-4.6c-0.1-0.4-2.9-3.7-3.2-3.9c-0.1-0.1-2.4-1.5-3.9-2.5l-5.9-1.1l-6.1,1l-4.4,3.5
                                                l-2.6,7.6l0.9,1.2l0-0.5C399.4,685.3,404.4,680.4,410.5,680.4z"/>
                                            <path fill="#AA9D87" d="M397.6,690.9l2.8-8.1l0,0l4.7-3.7l0,0l6.3-1l0.1,0l6,1.1l0.1,0.1c1.4,0.9,3.8,2.4,3.9,2.5
                                                c0.2,0.1,3.1,3.6,3.4,4.2c0.1,0.3,0.4,2.1,0.4,2.6c0.3,2.3,0.2,2.4,0.2,2.5c-0.1,0.1-1,1.1-1.5,1.7l-0.5,0.6l-0.1-1.9
                                                c-0.2-5.9-5-10.5-10.8-10.5h-2c-5.9,0-10.6,4.6-10.8,10.5l-0.1,2L397.6,690.9z M400.5,682.9l-2.8,8l1.8,2.3l0.1-1.7
                                                c0.2-5.9,5-10.6,10.9-10.6h2c5.9,0,10.7,4.6,10.9,10.6l0.1,1.7l0.3-0.3c0.9-1,1.5-1.7,1.5-1.7c0-0.1,0.1-0.1-0.2-2.4
                                                c-0.1-1.1-0.3-2.3-0.4-2.6c-0.2-0.5-3.2-4-3.3-4.1c-0.1-0.1-1.5-1-3.9-2.5l-0.1-0.1l-6-1.1l-6.2,1L400.5,682.9z
                                                M398.2,690.8l2.7-7.7l0,0l4.5-3.5l0,0l6.1-1l0,0l5.9,1.1l0,0c1.5,0.9,3.8,2.4,3.9,2.5c0.3,0.3,3.1,3.6,3.2,4
                                                c0.2,0.4,0.6,4.1,0.6,4.6l0,0l0,0c-0.2,0.2-0.8,0.9-1.1,1.2l-0.1,0.1l0-0.7c-0.2-6.1-5.2-10.9-11.3-10.9h-2
                                                c-6.1,0-11.1,4.8-11.3,10.9l0,0.7L398.2,690.8z M400.9,683.2l-2.6,7.6l0.8,1l0-0.3c0.2-6.2,5.2-11,11.4-11h2
                                                c6.2,0,11.2,4.9,11.4,11l0,0.4c0.3-0.3,0.8-0.9,0.9-1.1c0-0.7-0.5-4.2-0.6-4.6c-0.1-0.4-2.9-3.7-3.2-3.9
                                                c-0.1-0.1-2.3-1.5-3.9-2.5l-5.8-1.1l-6,1L400.9,683.2z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path fill="#DFD1B8" d="M412.9,679.3c5.8,0.2,10.6,4.8,10.7,10.7l0.3,8.2l2.3-0.1l-0.3-8.2c-0.2-7-5.9-12.7-12.9-12.9h-2.8
                                                c-7,0.2-12.7,5.8-12.9,12.9l-0.3,8.2l2.3,0.1l0.3-8.2c0.2-5.8,4.9-10.5,10.7-10.7H412.9z"/>
                                            <path fill="#AA9D87" d="M396.9,698.2l0.3-8.2c0.2-7.1,5.9-12.7,13-12.9h2.8c7.1,0.2,12.8,5.9,13,12.9l0.3,8.2l-2.4,0.1
                                                l-0.3-8.2c-0.2-5.8-4.9-10.5-10.7-10.6h-2.7c-5.8,0.2-10.5,4.8-10.7,10.6l-0.3,8.2L396.9,698.2z M426.1,698.1l-0.3-8.1
                                                c-0.2-7-5.9-12.6-12.9-12.8h-2.8c-7,0.2-12.7,5.8-12.9,12.8l-0.3,8.1l2.1,0.1l0.3-8.1c0.2-5.9,4.9-10.6,10.8-10.7h2.7
                                                c5.9,0.2,10.6,4.9,10.8,10.7l0.3,8.1L426.1,698.1z"/>
                                        </g>
                                        <g>
                                            <path fill="#DFD1B8" d="M423.6,698.5l-0.3-8.4c-0.2-5.7-4.8-10.3-10.5-10.4h-2.7c-5.7,0.2-10.3,4.7-10.5,10.4l-0.3,8.4
                                                l-2.8-0.1l0.3-8.4c0.2-7.2,6-12.9,13.2-13.1l2.8,0c7.2,0.2,13,5.9,13.2,13.1l0.3,8.4L423.6,698.5z M397.2,697.9l1.8,0.1
                                                l0.3-7.9c0.2-6,5-10.8,11-10.9l2.7,0l0,0c6,0.2,10.8,5,11,10.9l0.3,7.9l1.8-0.1l-0.3-7.9c-0.2-6.9-5.8-12.5-12.7-12.6
                                                l-2.8,0c-6.9,0.2-12.5,5.7-12.7,12.6L397.2,697.9z"/>
                                            <path fill="#AA9D87" d="M396.6,698.4l0.3-8.5c0.2-7.2,6-13,13.2-13.2l2.8,0c7.2,0.2,13,6,13.2,13.2l0.3,8.5l-2.9,0.1
                                                l-0.3-8.5c-0.2-5.7-4.8-10.2-10.4-10.4h-2.7c-5.7,0.1-10.3,4.7-10.4,10.4l-0.3,8.5L396.6,698.4z M426.3,698.3l-0.3-8.4
                                                c-0.2-7.1-6-12.9-13.1-13.1l-2.8,0c-7.1,0.2-12.9,5.9-13.1,13.1l-0.3,8.4l2.6,0.1l0.3-8.4c0.2-5.7,4.8-10.3,10.5-10.5h2.7
                                                c5.7,0.2,10.4,4.8,10.6,10.5l0.3,8.4L426.3,698.3z M397.1,697.9l0.3-8c0.2-6.9,5.8-12.5,12.8-12.7l2.8,0
                                                c6.9,0.2,12.5,5.8,12.8,12.7l0.3,8L424,698l-0.3-8c-0.2-5.9-5-10.7-10.9-10.9h-2.7c-5.9,0.2-10.7,4.9-10.9,10.9l-0.3,8
                                                L397.1,697.9z M425.8,697.8l-0.3-7.9c-0.2-6.9-5.8-12.4-12.6-12.6l-2.8,0c-6.9,0.2-12.4,5.7-12.6,12.6l-0.3,7.9l1.7,0.1
                                                l0.3-7.9c0.2-6,5-10.8,11-11l2.7,0c6,0.2,10.8,5,11,11l0.3,7.9L425.8,697.8z"/>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g>
                            
                                <image overflow="visible" opacity="0.4" width="44" height="45" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAtCAYAAADV2ImkAAAACXBIWXMAAAsSAAALEgHS3X78AAAF
            N0lEQVRYhdWZa3MaNxSGH8BgjPElbtN4kmnS9P//paaJexnXccaur9gYth90XuvsQRiWbT9UMxqW
            ZSU9OnuuokO71nnhXlX4rXSv9YLrjumE62XzVWTQeL3x4k2e7dp1N/QO9U0Iam69Ambuer4J+FYD
            WEFuWe+7614BXlAz4Mn1qbtuDL2OhAXaM8htYMf1bQffs94JsI/AxPodcA88GLyXemtgL9VtYATs
            AQfAoV3vOmgBYwCS6AS4Ba6BS+Bvu74zcEl7JfRLwILtA0NgDLwCvgd+AF7b93EAlvpIwgK+Mdiv
            wBlwDlzY/Yk9txJ6mQ5H2D0DPQbeWX9jwLvAgKy7avIIM5JK3Bngkc03tPX9mJXQJeAIu2+w74D3
            wAfgLUnCeyTpdqkbWUXdUCuD/o6kSnorWyx6Fq8eC+C98N3r7I4BvTbYn4CfHfARSbp9GzsjG5mg
            eyTpD0n6P7LrgRPW3I31LrDYvIS1057tfkyWrGDfk1Rh30BnJKOZkCQoq++4uftuzgjsJev9+D1Z
            PfAbiCohVRiR9PPYID/a5zFJ6lsGek92U5Kq3pDenoTQJ7vFLRaDjf+uJgE8NwFH9+VV4QPwI0my
            e7a4rP7KYJ/Ir19zDK3Lgwi2Y9fLgNW8ejyrSVQJ6e6hA35LcmP79vvEQC9JvvXJ7g9JOr1LDijb
            ZB0eOFBvbBFSvvuRbIBSjQUJSx0ODPiNfR7Yb48mWTn+qRtzaM+Nqeup7wrd8iKQXd+U9LauTSBX
            JHV7JIf62k61c7myQ5Ie79vic5vwxkm2T1KTV+7ZkYNdliBVbq25Qd0W5lAgklArrxIxBI/JQaFj
            k96TVGJu93dJ7u3IpKsw7Y1Ki8UUNOYn6vIq3fA8krCfUNADN7hLdl9Tk46M6jDAKnpFA4oLe/jS
            Gyg9VzQ6n5lpl0piZACyeKmC9FaS9e5sVYvgvdAXNh79cLRcGYSMArIqeCPzb6NpFeNVQxHRp61e
            j5fmEmoKm/qUDx2R3Zc3sKaw3jvtkDZ/QF0QkvQcqLrleYCcfHgHrsm9gbSB9VFQucsByVN4NXs2
            wJKES1mSJoasw9LXaChtoIcsVjJ+jSoCV6FDtmAtoIhVNIoGLa4V1y02D+xVQIamFFFS7ZDDbc0Y
            NmwKxUrwb0iR7oacsYmj5tY8rCZQuogD9I5+U93VelprYpAXpNLpDPhGCv9KrJ7TTG90muDBdntL
            PZb7ajl6hibQglWtd02q7/4EfgN+B05JydUdoWxSYCjt+NL6jQ2SS2vjcyPsFako/QP4DPwKnAB/
            2dpRwrUSyUcbhWY5cuW2A7J0mxrdKthPwBf7fk4S2gNBh30Yjcm09HUQesn3roJeBfuLfUbYhfOK
            WIT6Vjqe8kdT0Qcvg24C+9V+X3pOEVXCLxL9oiqSeJ4W4WL712AjcFzYJz4+NHtgn5DHCtcbsiqJ
            VrDrAMczA6ingZ3wTDxOja6rFexLwB46gkBWHx1DTcgJvg5SVKNdBdhPm8LC8rM1LyEB+l4Z4CU5
            q1JgUZnUtfFXJL96QvKzcl2NYV8C9tAKJt4jPJECyhnJTwt2bH1EenuPpBB7SopiJ6SIdr4J7Cpg
            Dz0N96ckvVRJ7xPwvQAsz3BKkvQ3G9sYdh3gErROIq+pJ/GqtlWJ9GzMLUnKF+RQL31vBAvrh9VS
            BPSHIz4qKv1Uta3UUWdw/kSn8T9JTZIXf55Q+udIrs77aF9xew+yEWxT4DgmhuXSKWSsC5ceVP+X
            wC+NLeXG8Y/EVv+Gti1x1p2z9V+2/9v2D0BUIGxdpVGtAAAAAElFTkSuQmCC" transform="matrix(1 0 0 1 429 670)">
                            </image>
                            <g>
                                <g>
                                    <g>
                                        <g>
                                            
                                                <rect x="437.7" y="696.6" transform="matrix(0.1481 -0.989 0.989 0.1481 -314.3149 1029.9082)" fill="#DFD1B8" width="5.9" height="1.6"/>
                                            <path fill="#AA9D87" d="M439.3,700.2l0.9-5.9l1.7,0.3l-0.9,5.9L439.3,700.2z M440.3,694.4l-0.9,5.7l1.5,0.2l0.9-5.7
                                                L440.3,694.4z"/>
                                        </g>
                                        <g>
                                            <path fill="#DFD1B8" d="M441.2,700.7l-2.1-0.3l0.9-6.3l2.1,0.3L441.2,700.7z M439.7,700l1.1,0.2l0.8-5.3l-1.1-0.2L439.7,700
                                                z"/>
                                            <path fill="#AA9D87" d="M439,700.4l1-6.4l2.2,0.3l-1,6.4L439,700.4z M440.1,694.1l-0.9,6.2l2,0.3l0.9-6.2L440.1,694.1z
                                                M439.6,700l0.8-5.5l1.2,0.2l-0.8,5.5L439.6,700z M440.5,694.7l-0.8,5.2l1,0.2l0.8-5.2L440.5,694.7z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            
                                                <rect x="438.1" y="697.4" transform="matrix(0.1481 -0.989 0.989 0.1481 -314.4849 1031.3911)" fill="#DFD1B8" width="6.7" height="1.6"/>
                                            <path fill="#AA9D87" d="M440,701.4l1-6.7l1.7,0.3l-1,6.7L440,701.4z M441.1,694.9l-1,6.5l1.5,0.2l1-6.5L441.1,694.9z"/>
                                        </g>
                                        <g>
                                            <path fill="#DFD1B8" d="M441.9,701.9l-2.1-0.3l1.1-7.1l2.1,0.3L441.9,701.9z M440.4,701.2l1.1,0.2l0.9-6.1l-1.1-0.2
                                                L440.4,701.2z"/>
                                            <path fill="#AA9D87" d="M439.8,701.7l1.1-7.2l2.2,0.3L442,702L439.8,701.7z M440.9,694.6l-1,7l2,0.3l1-7L440.9,694.6z
                                                M440.3,701.2l0.9-6.2l1.2,0.2l-0.9,6.2L440.3,701.2z M441.4,695.2l-0.9,6l1,0.2l0.9-6L441.4,695.2z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            
                                                <rect x="453.6" y="680.7" transform="matrix(0.989 -0.1481 0.1481 0.989 -95.8814 75.1118)" fill="#DFD1B8" width="5.9" height="1.6"/>
                                            <path fill="#AA9D87" d="M453.4,681.1l6-0.9l0.3,1.7l-6,0.9L453.4,681.1z M459.3,680.3l-5.8,0.9l0.2,1.5l5.8-0.9L459.3,680.3
                                                z"/>
                                        </g>
                                        <g>
                                            <path fill="#DFD1B8" d="M459.9,682.1l-6.4,1l-0.3-2.1l6.4-1L459.9,682.1z M453.9,682.5l5.4-0.8l-0.2-1.1l-5.4,0.8
                                                L453.9,682.5z"/>
                                            <path fill="#AA9D87" d="M453.1,680.9l6.5-1l0.3,2.2l-6.5,1L453.1,680.9z M459.5,680.1l-6.2,0.9l0.3,2l6.2-0.9L459.5,680.1z
                                                M453.7,681.3l5.5-0.8l0.2,1.2l-5.5,0.8L453.7,681.3z M459.1,680.6l-5.3,0.8l0.2,1l5.3-0.8L459.1,680.6z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            
                                                <rect x="454" y="681.5" transform="matrix(0.989 -0.1481 0.1481 0.989 -95.9925 75.2464)" fill="#DFD1B8" width="6.7" height="1.6"/>
                                            <path fill="#AA9D87" d="M453.9,681.9l6.7-1l0.3,1.7l-6.7,1L453.9,681.9z M460.5,681.1l-6.5,1l0.2,1.5l6.5-1L460.5,681.1z"/>
                                        </g>
                                        <g>
                                            <path fill="#DFD1B8" d="M461,682.8l-7.1,1.1l-0.3-2.1l7.1-1.1L461,682.8z M454.4,683.3l6.1-0.9l-0.2-1.1l-6.1,0.9
                                                L454.4,683.3z"/>
                                            <path fill="#AA9D87" d="M453.6,681.7l7.2-1.1l0.3,2.2l-7.2,1.1L453.6,681.7z M460.7,680.8l-7,1l0.3,2l7-1L460.7,680.8z
                                                M454.2,682.1l6.2-0.9l0.2,1.2l-6.2,0.9L454.2,682.1z M460.3,681.3l-6,0.9l0.2,1l6-0.9L460.3,681.3z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path fill="#DFD1B8" d="M444.9,683.2c3.3-3.3,8.5-3.4,12-0.3l6.8,6c1.3,1.2,1.3,2.7,0.1,4l-11.9,11.9
                                                c-1.2,1.2-2.8,1.2-4-0.1l-6-6.8c-3.1-3.5-2.9-8.7,0.3-12L444.9,683.2z"/>
                                            <path fill="#AA9D87" d="M439.6,692.1c0-2.3,0.9-4.5,2.6-6.2l2.7-2.7c3.3-3.3,8.6-3.4,12.1-0.3l6.8,6c0.6,0.6,1,1.3,1,2
                                                c0,0.7-0.3,1.4-0.9,2l-11.9,11.9c-0.6,0.6-1.3,0.9-2,0.9c-0.7,0-1.4-0.4-2-1l-6-6.8C440.3,696.3,439.6,694.2,439.6,692.1z
                                                M464.6,691C464.6,690.9,464.6,690.9,464.6,691c0-0.8-0.4-1.4-1-2l-6.8-6c-3.4-3.1-8.7-2.9-11.9,0.3l-2.7,2.7
                                                c-1.7,1.7-2.5,3.9-2.5,6.1c0,2.1,0.7,4.1,2.2,5.8l6,6.8c0.6,0.6,1.2,1,1.9,1c0.7,0,1.4-0.3,2-0.9l11.9-11.9
                                                C464.3,692.3,464.6,691.6,464.6,691z"/>
                                        </g>
                                        <g>
                                            <path fill="#DFD1B8" d="M463.9,693.1L452,705c-0.7,0.7-1.4,1-2.2,1c-0.8,0-1.5-0.4-2.1-1.1l-6-6.8c-3.2-3.5-3-9,0.3-12.3
                                                l2.7-2.7c3.4-3.4,8.8-3.5,12.3-0.3l6.8,6c0.7,0.6,1.1,1.4,1.1,2.1C464.9,691.7,464.6,692.4,463.9,693.1z M442.4,686.1
                                                c-3.2,3.2-3.3,8.3-0.3,11.7l6,6.8c0.5,0.6,1.1,0.9,1.8,0.9c0.6,0,1.3-0.3,1.8-0.8l11.9-11.9c0.6-0.6,0.8-1.2,0.8-1.8
                                                c0-0.6-0.3-1.3-0.9-1.8l-6.8-6c-3.4-3-8.5-2.9-11.7,0.3L442.4,686.1z"/>
                                            <path fill="#AA9D87" d="M439.3,692.1c0-2.3,0.9-4.6,2.6-6.4l2.7-2.7c3.4-3.4,8.8-3.5,12.4-0.3l6.8,6
                                                c0.7,0.6,1.1,1.4,1.1,2.2c0,0.8-0.3,1.6-1,2.2L452.1,705c-0.7,0.7-1.4,1-2.2,1c-0.8,0-1.5-0.4-2.2-1.1l-6-6.8
                                                C440.1,696.4,439.3,694.3,439.3,692.1z M464.8,691C464.8,690.9,464.8,690.9,464.8,691c0-0.8-0.4-1.6-1.1-2.2l-6.8-6
                                                c-3.5-3.1-8.9-3-12.3,0.3l-2.7,2.7c-1.7,1.7-2.6,4-2.6,6.3c0,2.1,0.8,4.2,2.3,5.9l6,6.8c0.6,0.7,1.3,1,2.1,1.1
                                                c0.8,0,1.5-0.3,2.1-0.9l11.9-11.9C464.5,692.4,464.8,691.7,464.8,691z M439.8,692.1c0-2.2,0.8-4.4,2.5-6l2.7-2.7
                                                c3.2-3.2,8.4-3.3,11.7-0.3l6.8,6c0.6,0.5,0.9,1.2,0.9,1.8c0,0.7-0.3,1.3-0.8,1.9l-11.9,11.9c-0.6,0.6-1.2,0.9-1.9,0.8
                                                c-0.7,0-1.3-0.3-1.8-0.9l-6-6.8C440.5,696.2,439.8,694.2,439.8,692.1z M442.4,686.2c-3.2,3.2-3.3,8.2-0.3,11.6l6,6.8
                                                c0.5,0.6,1.1,0.9,1.7,0.9c0.6,0,1.2-0.3,1.8-0.8l11.9-11.9c0.5-0.5,0.8-1.2,0.8-1.8c0-0.6-0.3-1.2-0.9-1.7l-6.8-6
                                                c-3.3-3-8.4-2.8-11.6,0.3L442.4,686.2z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path fill="#DFD1B8" d="M445.4,684c2.9-2.9,7.6-3,10.7-0.3l6,5.4c1.2,1,1.2,2.4,0.1,3.5l-10.6,10.6
                                                c-1.1,1.1-2.5,1.1-3.5-0.1l-5.4-6c-2.7-3.1-2.6-7.7,0.3-10.7L445.4,684z"/>
                                            <path fill="#AA9D87" d="M440.6,691.9c0-2,0.8-4,2.3-5.5l2.4-2.4c2.9-2.9,7.6-3.1,10.7-0.3l6,5.4c0.6,0.5,0.9,1.1,0.9,1.8
                                                c0,0.6-0.3,1.3-0.8,1.8l-10.6,10.6c-0.5,0.5-1.2,0.8-1.8,0.8c-0.6,0-1.3-0.3-1.8-0.9l-5.4-6
                                                C441.3,695.6,440.6,693.8,440.6,691.9z M462.9,690.9C462.9,690.9,462.9,690.8,462.9,690.9c0-0.7-0.3-1.3-0.9-1.8l-6-5.4
                                                c-3-2.7-7.7-2.6-10.6,0.3l-2.4,2.4c-1.5,1.5-2.3,3.5-2.3,5.5c0,1.8,0.6,3.7,2,5.1l5.4,6c0.5,0.6,1.1,0.9,1.7,0.9
                                                c0.6,0,1.2-0.3,1.7-0.8l10.6-10.6C462.6,692.1,462.9,691.5,462.9,690.9z"/>
                                        </g>
                                        <g>
                                            <path fill="#DFD1B8" d="M462.2,692.7l-10.6,10.6c-0.6,0.6-1.2,0.8-1.9,0.8c-0.7,0-1.3-0.3-1.8-0.9l-5.4-6
                                                c-2.8-3.1-2.6-7.9,0.3-10.8l2.4-2.4c3-3,7.7-3.1,10.8-0.3l6,5.4c0.6,0.5,0.9,1.2,0.9,1.8
                                                C463.1,691.5,462.8,692.1,462.2,692.7z M443.1,686.5c-2.9,2.9-3,7.5-0.3,10.5l5.4,6c0.5,0.5,1.1,0.8,1.6,0.8
                                                c0.6,0,1.2-0.2,1.7-0.8l10.6-10.6c0.5-0.5,0.8-1.1,0.8-1.7c0-0.6-0.3-1.2-0.9-1.6l-6-5.4c-3-2.7-7.6-2.6-10.5,0.3
                                                L443.1,686.5z"/>
                                            <path fill="#AA9D87" d="M440.5,691.9c0-2,0.8-4.1,2.3-5.6l2.4-2.4c3-3,7.8-3.1,10.9-0.3l6,5.4c0.6,0.5,0.9,1.2,1,1.9
                                                c0,0.7-0.3,1.3-0.8,1.9l-10.6,10.6c-0.6,0.6-1.2,0.9-1.9,0.8c-0.7,0-1.3-0.3-1.9-1l-5.4-6
                                                C441.2,695.7,440.5,693.8,440.5,691.9z M463,690.9C463,690.9,463,690.8,463,690.9c0-0.7-0.3-1.3-0.9-1.8l-6-5.4
                                                c-3.1-2.8-7.8-2.6-10.8,0.3l-2.4,2.4c-1.5,1.5-2.3,3.5-2.3,5.5c0,1.9,0.7,3.7,2,5.2l5.4,6c0.5,0.6,1.1,0.9,1.8,0.9
                                                c0.6,0,1.3-0.3,1.8-0.8l10.6-10.6C462.7,692.1,463,691.5,463,690.9z M440.8,691.9c0-2,0.8-3.9,2.3-5.4l2.4-2.4
                                                c2.9-2.9,7.5-3,10.6-0.3l6,5.4c0.6,0.5,0.9,1.1,0.9,1.7c0,0.6-0.2,1.2-0.8,1.7l-10.6,10.6c-0.5,0.5-1.1,0.8-1.7,0.8
                                                c-0.6,0-1.2-0.3-1.7-0.9l-5.4-6C441.4,695.6,440.8,693.7,440.8,691.9z M462.8,690.9C462.8,690.9,462.8,690.8,462.8,690.9
                                                c0-0.6-0.3-1.2-0.8-1.7l-6-5.4c-3-2.7-7.6-2.5-10.4,0.3l-2.4,2.4c-2.8,2.8-3,7.4-0.3,10.4l5.4,6c0.5,0.5,1,0.8,1.6,0.8
                                                c0.6,0,1.2-0.2,1.7-0.7l10.6-10.6C462.5,692,462.8,691.4,462.8,690.9z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path fill="#DFD1B8" d="M457.8,681.5l-0.9-0.8c-4.4-4.1-11.2-4-15.5,0.3l-1.4,1.4c-4.2,4.2-4.4,11.1-0.3,15.5l0.8,0.9
                                                l-2.3-0.3l-3.6-7.5l0.7-5.8l3.7-5.1l5-3.4c0,0,4.4-1,4.6-1c0.2,0,4.7,0.4,5.2,0.6c0.5,0.2,3.8,2.8,3.8,3
                                                C457.7,679.4,457.8,681.5,457.8,681.5z"/>
                                            <path fill="#AA9D87" d="M434.7,691l0.7-5.8l0,0l3.7-5.1l0,0l5-3.4l0,0c0.2,0,4.4-1,4.6-1c0.2,0,4.7,0.4,5.2,0.6
                                                c0.4,0.2,3.8,2.8,3.9,3c0,0.1,0.1,2.1,0.1,2.3l0,0.1l-1-0.9c-2.1-2-4.9-3-7.7-3c-2.9,0.1-5.6,1.2-7.6,3.2l-1.4,1.4
                                                c-2,2-3.2,4.8-3.2,7.6c0,2.9,1,5.6,3,7.7l0.9,1l-2.5-0.3L434.7,691z M435.5,685.2l-0.7,5.7l3.6,7.4l2.1,0.3l-0.7-0.8
                                                c-2-2.1-3.1-4.9-3-7.8c0.1-2.9,1.2-5.7,3.3-7.7l1.4-1.4c2.1-2.1,4.8-3.2,7.7-3.3s5.7,1,7.8,3l0.8,0.7c0-0.8-0.1-2-0.1-2.1
                                                c-0.2-0.2-3.3-2.7-3.8-2.9c-0.4-0.2-4.9-0.6-5.1-0.6c-0.2,0-4.3,1-4.6,1l-5,3.4L435.5,685.2z"/>
                                        </g>
                                        <g>
                                            <path fill="#DFD1B8" d="M441.3,699l-3.1-0.4l-3.7-7.6l0.7-5.9l3.7-5.1l0,0l5-3.4l0,0c0.5-0.1,4.4-1,4.6-1
                                                c0.2,0,4.8,0.3,5.3,0.6c0.3,0.1,1.7,1.2,2.1,1.5c1.8,1.4,1.8,1.5,1.8,1.6c0,0.1,0.1,1.7,0.1,2.3l0,0.6l-1.3-1.2
                                                c-4.3-4-11-3.9-15.1,0.3l-1.4,1.4c-4.2,4.2-4.3,10.8-0.3,15.1L441.3,699z M439.9,682.2l1.4-1.4c4.4-4.4,11.3-4.5,15.8-0.3
                                                l0.4,0.4c0-0.7-0.1-1.4-0.1-1.6c-0.4-0.4-3.3-2.7-3.7-2.8c-0.4-0.2-4.7-0.6-5-0.5c-0.1,0-2.8,0.6-4.5,1l-4.9,3.4l-3.6,5
                                                l-0.7,5.6l3.5,7.3l1.5,0.2l-0.3-0.4C435.4,693.5,435.6,686.5,439.9,682.2z"/>
                                            <path fill="#AA9D87" d="M434.4,691l0.7-5.9l0,0l3.7-5.1l0,0l5-3.4l0.1,0c1.6-0.4,4.4-1,4.6-1c0.2,0,4.8,0.3,5.3,0.6
                                                c0.3,0.2,1.7,1.2,2.1,1.5c1.8,1.4,1.8,1.5,1.9,1.6c0,0.1,0.1,1.7,0.1,2.3l0,0.8l-1.4-1.3c-4.3-4-10.9-3.9-15,0.3l-1.4,1.4
                                                c-4.1,4.1-4.3,10.8-0.3,15l1.4,1.5l-3.3-0.4L434.4,691z M435.2,685.1l-0.7,5.9l3.7,7.6l2.9,0.4l-1.2-1.3
                                                c-4-4.3-3.9-11,0.3-15.2l1.4-1.4c4.2-4.2,10.9-4.3,15.2-0.3l1.2,1.1l0-0.5c-0.1-1.4-0.1-2.2-0.1-2.3c0-0.1,0-0.2-1.8-1.6
                                                c-0.9-0.7-1.9-1.4-2.1-1.5c-0.5-0.2-5.1-0.6-5.3-0.6c-0.1,0-1.8,0.4-4.5,1l-0.1,0l-5,3.4L435.2,685.1z M434.9,690.9l0.7-5.6
                                                l0,0l3.6-5l0,0l4.9-3.4l0,0c1.7-0.4,4.4-1,4.5-1c0.4,0,4.7,0.4,5.1,0.5c0.4,0.2,3.3,2.5,3.7,2.9l0,0l0,0
                                                c0,0.3,0.1,1.2,0.1,1.6l0,0.1l-0.5-0.5c-4.5-4.2-11.4-4.1-15.7,0.3l-1.4,1.4c-4.3,4.3-4.5,11.2-0.3,15.7l0.5,0.5l-1.6-0.2
                                                L434.9,690.9z M435.7,685.3l-0.7,5.6l3.5,7.2l1.3,0.2l-0.2-0.2c-2.1-2.2-3.1-5-3.1-7.8c0-2.9,1.1-5.8,3.4-8.1l1.4-1.4
                                                c4.4-4.4,11.4-4.5,15.9-0.3l0.3,0.3c0-0.4-0.1-1.2-0.1-1.4c-0.5-0.5-3.3-2.7-3.7-2.8c-0.4-0.2-4.6-0.6-5-0.5
                                                c-0.1,0-2.8,0.6-4.5,1l-4.9,3.3L435.7,685.3z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path fill="#DFD1B8" d="M440.8,679.8c4.2-4,10.9-4,15.1,0l6,5.6l1.5-1.7l-6-5.6c-5.1-4.8-13.1-4.8-18.3,0.1l-2,2
                                                c-4.8,5.1-4.9,13.1-0.1,18.3l5.6,6l1.7-1.5l-5.6-6c-4-4.3-4-10.9,0-15.1L440.8,679.8z"/>
                                            <path fill="#AA9D87" d="M433.5,689.2c0-3.3,1.2-6.6,3.7-9.2l2-2c5.1-4.9,13.2-4.9,18.3-0.1l6,5.6l-1.6,1.7l-6-5.6
                                                c-4.2-4-10.9-4-15.1,0l-1.9,1.9c-4,4.2-4,10.8,0,15.1l5.6,6l-1.7,1.6l0,0l-5.6-6C434.7,695.8,433.5,692.5,433.5,689.2z
                                                M463.4,683.7l-5.9-5.6c-5.1-4.8-13.1-4.8-18.2,0.1l-2,2c-4.8,5.1-4.8,13.1,0,18.2l5.6,5.9l1.6-1.5l-5.6-5.9
                                                c-4-4.3-4-11,0-15.2l1.9-1.9c4.3-4,10.9-4.1,15.2,0l5.9,5.6L463.4,683.7z"/>
                                        </g>
                                        <g>
                                            <path fill="#DFD1B8" d="M461.9,685.7l-6.2-5.8c-4.2-3.9-10.7-3.9-14.8,0l-1.9,1.9c-3.9,4.1-3.9,10.6,0,14.8l5.8,6.2l-2,1.9
                                                l-5.8-6.2c-4.9-5.2-4.9-13.4,0.1-18.6l2-2c5.2-4.9,13.4-5,18.6-0.1l6.2,5.8L461.9,685.7z M442.8,704l1.3-1.2l-5.4-5.8
                                                c-4.1-4.4-4.1-11.2,0-15.5l1.9-1.9l0,0c4.3-4.1,11.1-4.1,15.5,0l5.8,5.4l1.2-1.3l-5.8-5.4c-5-4.7-12.9-4.7-17.9,0l-2,2
                                                c-4.7,5-4.8,12.9,0,17.9L442.8,704z"/>
                                            <path fill="#AA9D87" d="M433.3,689.2c0-3.4,1.2-6.7,3.7-9.4l2-2c5.2-5,13.4-5,18.7-0.1l6.2,5.8l-2,2.1l-6.2-5.8
                                                c-4.1-3.9-10.6-3.9-14.7,0l-1.9,1.9c-2,2.1-2.9,4.7-2.9,7.4c0,2.6,1,5.3,2.9,7.3l5.8,6.2l-2.1,2l0,0l-5.8-6.2
                                                C434.5,695.9,433.3,692.6,433.3,689.2z M463.7,683.7l-6.1-5.7c-5.2-4.9-13.3-4.9-18.5,0.1l-2,2c-4.9,5.2-4.9,13.3-0.1,18.5
                                                l5.7,6.1l1.9-1.8l-5.7-6.1c-3.9-4.2-3.9-10.7,0-14.9l1.9-1.9c4.2-3.9,10.7-4,14.9,0l6.1,5.7L463.7,683.7z M433.8,689.2
                                                c0-3.2,1.2-6.5,3.6-9l2-2c5-4.8,12.9-4.8,18-0.1l5.8,5.5l-1.3,1.4l-5.8-5.5c-4.3-4.1-11.1-4-15.4,0l-1.9,1.9
                                                c-4.1,4.3-4.1,11.1,0,15.4l5.5,5.8l-1.4,1.3l0,0l-5.4-5.8C435,695.7,433.8,692.5,433.8,689.2z M463,683.7l-5.8-5.4
                                                c-5-4.7-12.8-4.7-17.8,0l-2,2c-4.7,5-4.7,12.8,0,17.8l5.4,5.8l1.2-1.1l-5.4-5.8c-4.1-4.4-4.1-11.2,0-15.6l1.9-1.9
                                                c4.4-4.1,11.2-4.2,15.6,0l5.8,5.4L463,683.7z"/>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g>
                            
                                <image overflow="visible" opacity="0.4" width="43" height="42" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAqCAYAAAAqAaJlAAAACXBIWXMAAAsSAAALEgHS3X78AAAE
            tUlEQVRYhcWZfXPaRhCHHwEGjCFOkzZN7baT7/+p+jqN6+DYOBgbDPSP+y23Ok5Cwml7MzcSetl9
            bm93b08UHN+KI9/b/lcKC3cskmuH2tYdt8m1VsqbPtfRecd1D17VDHDjuv22+wdbryGoAfbUT3Ts
            qtcBG+ha/RlY6fjcBviQRQyyK8ABcOr6QNBVFvYWfQaegIXrTwJfE619FKy35gAYARPgHHit8xHQ
            1zM5H/ZWfQIegHvgFrjT+YPumZUrgatgDfQEGAJj4BvgW+Ad8J2AxxqIucIh2C8CvQb+Bj4BnwVt
            Vq4EzvlsCjoR5HvgErgAvhfsGcGynQMG2AhkLrgryR26gc4EWWnhFDad+gnBihfAz+qXwFvd86Cp
            cJ81CgE8Am+AV0QX8u/7vifTw1qAdCVkLKgL4IP6T4IfEywPMcItJXnQrht8l2BJC8y+rqH3TM6a
            6DqVsDjBI8I0vxfgB4JV3wm0S4xu8zU/fTZoyyBDdXMtM4xN+zKRZdnBninBplY9k1V/EOyPAp3o
            uSUhih8IU+sVwD7sUlBDYvaY6PklIY3N1Re6ZpbdwXadcAuqkUAvidN/QUhZPSk10AXlCC6S7gMv
            dZMuMeWtNWiT6VPZrnk3MBewDPCGkAUsmAZE31q7902hBZLB+GvWzXUKyRvICJYSPwE3hMzwSHm2
            Sm6Qwr4m5NZXhKDoyYrmKpZyDNiCKU1dfoDr5L6Pj7cy0LmA59K381uzSpqyzgQ8FqiPXAjuYs+f
            qOdgLapXBD80X/Tvdogr47l0DhO2AtimqcusZinG0ozB2GB8AJllc/WBL2AMdqV7Jm8jPWP1EeWa
            Y9fSbGAj7hNzYd9B+fxpyrxFqwqZteT4FGfPr4n+azqzg88tCimMTVefcqK346Gaduue71EOmq0G
            0Et6VmZuufXLpIf2fplCHio17b2Nzn3puHV6fHG/J7OqkEmtnIv4JpAmz0P7dd+CLc3P2Va3U/A5
            s5P0FKJJyz3fZtC1sLkqqrHgmlZkzkvLalXrZK6lpVojQUe2VMeGGn0e1r9g5Zrf1LXaiTaEzOny
            +7GSrtSy9vKSsDYvdLSVZ8PXa611mc+mO9AvhA3dZ0J9cEpcGitTS8NWp+tOv7MbyBzsg166JhQW
            E/aX3ZcEmulaSZdtIK90vNP1PVhfz/oC3PJrXZ1g77UFtd3Bo0A/Ar8BvwC/C/rWAe98t5sI88qt
            GE+LDG/dts1bdU6oX/8AfhXsn8CUuDUv7cOqfHZOmI4boi/NZQ3bPh8DnNMxJUz/tfR50KzP5oTZ
            15OZ+r0U9InreS5PVzWbzqXkzAiGmKrf6rr/2FFqHtZGkAKbhacEN9jouFdvNoC1DeI94YuMBZVZ
            NN3T1W7FTaj/3HNDCIKRrs+IvnsM7JPArggB9ZG4jcnuaqtgfbFsQTAlTv2MsPXwebct7JJghCnw
            l2BvCVat/ThXZVkTOifWoQtC9J4Rg6xpBeZdbCVZM4JF/W62FrbuK6Lfc50K0ufapl+9PbDNmi2x
            c+K3gloXOASbFt9+F3vsKuY/1a9c99+4Wn+f9feO/R+hDjj9f6G2NGwCmz5TJOcvaUf9c/M1tiYv
            af9WUf//t38AxCboWDiBD/IAAAAASUVORK5CYII=" transform="matrix(1 0 0 1 464 672)">
                            </image>
                            <g>
                                <g>
                                    <g>
                                        <g>
                                            
                                                <rect x="469.3" y="690.9" transform="matrix(0.804 -0.5946 0.5946 0.804 -318.7348 416.3914)" fill="#DFD1B8" width="5.9" height="1.6"/>
                                            <path fill="#AA9D87" d="M469.4,692.8l4.8-3.6l1,1.4l-4.8,3.6L469.4,692.8z M474.2,689.4l-4.6,3.4l0.9,1.2l4.6-3.4
                                                L474.2,689.4z"/>
                                        </g>
                                        <g>
                                            <path fill="#DFD1B8" d="M470.4,694.5l-1.3-1.7l5.1-3.8l1.3,1.7L470.4,694.5z M469.8,692.9l0.7,0.9l4.3-3.2l-0.7-0.9
                                                L469.8,692.9z"/>
                                            <path fill="#AA9D87" d="M469,692.7l5.2-3.9l1.3,1.8l-5.2,3.9L469,692.7z M474.2,689l-5,3.7l1.2,1.6l5-3.7L474.2,689z
                                                M469.7,692.8l4.4-3.3l0.7,1l-4.4,3.3L469.7,692.8z M474.1,689.7l-4.2,3.1l0.6,0.8l4.2-3.1L474.1,689.7z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            
                                                <rect x="468.9" y="692" transform="matrix(0.804 -0.5946 0.5946 0.804 -319.4231 416.5883)" fill="#DFD1B8" width="6.7" height="1.6"/>
                                            <path fill="#AA9D87" d="M469,694.2l5.4-4l1,1.4l-5.4,4L469,694.2z M474.4,690.3l-5.3,3.9l0.9,1.2l5.3-3.9L474.4,690.3z"/>
                                        </g>
                                        <g>
                                            <path fill="#DFD1B8" d="M470,695.8l-1.3-1.7l5.7-4.2l1.3,1.7L470,695.8z M469.4,694.2l0.7,0.9l5-3.7l-0.7-0.9L469.4,694.2z"
                                                />
                                            <path fill="#AA9D87" d="M468.7,694.1l5.8-4.3l1.3,1.8l-5.8,4.3L468.7,694.1z M474.5,690l-5.7,4.2l1.2,1.6l5.7-4.2L474.5,690
                                                z M469.4,694.2l5-3.7l0.7,1l-5,3.7L469.4,694.2z M474.4,690.6l-4.9,3.6l0.6,0.8l4.9-3.6L474.4,690.6z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            
                                                <rect x="493.9" y="688.8" transform="matrix(0.5946 -0.804 0.804 0.5946 -355.5877 678.2072)" fill="#DFD1B8" width="1.6" height="5.9"/>
                                            <path fill="#AA9D87" d="M491.8,690.6l1-1.4l4.9,3.6l-1,1.4L491.8,690.6z M492.9,689.4l-0.9,1.2l4.7,3.5l0.9-1.2L492.9,689.4
                                                z"/>
                                        </g>
                                        <g>
                                            <path fill="#DFD1B8" d="M496.7,694.5l-5.2-3.8l1.3-1.7l5.2,3.8L496.7,694.5z M492.2,690.6l4.4,3.2l0.7-0.9l-4.4-3.2
                                                L492.2,690.6z"/>
                                            <path fill="#AA9D87" d="M491.5,690.7l1.3-1.8l5.3,3.9l-1.3,1.8L491.5,690.7z M492.8,689l-1.2,1.6l5.1,3.8l1.2-1.6L492.8,689
                                                z M492.1,690.6l0.7-1l4.5,3.3l-0.7,1L492.1,690.6z M492.9,689.7l-0.6,0.8l4.3,3.2l0.6-0.8L492.9,689.7z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            
                                                <rect x="494" y="689.5" transform="matrix(0.5946 -0.804 0.804 0.5946 -356.4848 678.696)" fill="#DFD1B8" width="1.6" height="6.7"/>
                                            <path fill="#AA9D87" d="M491.5,691.5l1-1.4l5.4,4l-1,1.4L491.5,691.5z M492.6,690.3l-0.9,1.2l5.3,3.9l0.9-1.2L492.6,690.3z"
                                                />
                                        </g>
                                        <g>
                                            <path fill="#DFD1B8" d="M497,695.8l-5.7-4.2l1.3-1.7l5.7,4.2L497,695.8z M492,691.5l5,3.7l0.7-0.9l-5-3.7L492,691.5z"/>
                                            <path fill="#AA9D87" d="M491.2,691.6l1.3-1.8l5.8,4.3l-1.3,1.8L491.2,691.6z M492.6,690l-1.2,1.6l5.7,4.2l1.2-1.6L492.6,690
                                                z M491.9,691.5l0.7-1l5,3.7l-0.7,1L491.9,691.5z M492.7,690.6l-0.6,0.8l4.9,3.6l0.6-0.8L492.7,690.6z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path fill="#DFD1B8" d="M485.3,684.7c4.6,0,8.5,3.6,8.7,8.2l0.5,9c0.1,1.7-1,2.9-2.7,2.9H475c-1.7,0-2.8-1.1-2.7-2.9l0.5-9
                                                c0.3-4.6,4.1-8.2,8.7-8.2H485.3z"/>
                                            <path fill="#AA9D87" d="M472.2,702.2c0-0.1,0-0.1,0-0.2l0.5-9c0.3-4.7,4.1-8.3,8.8-8.3h3.8c4.7,0,8.5,3.6,8.8,8.3l0.5,9
                                                c0,0.9-0.2,1.6-0.7,2.1c-0.5,0.5-1.2,0.8-2.1,0.8H475c-0.9,0-1.6-0.3-2.1-0.8C472.4,703.7,472.2,703,472.2,702.2z
                                                M494.5,702.2c0-0.1,0-0.1,0-0.2l-0.5-9c-0.3-4.6-4.1-8.2-8.7-8.2h-3.8c-4.6,0-8.4,3.6-8.7,8.2l-0.5,9c0,0.8,0.2,1.5,0.7,2
                                                c0.5,0.5,1.2,0.8,2,0.8h16.8c0.8,0,1.5-0.3,2-0.8C494.3,703.6,494.5,703,494.5,702.2z"/>
                                        </g>
                                        <g>
                                            <path fill="#DFD1B8" d="M491.8,705.1H475c-0.9,0-1.7-0.3-2.2-0.9c-0.5-0.6-0.8-1.4-0.7-2.3l0.5-9c0.3-4.8,4.2-8.5,9-8.5h3.8
                                                c4.8,0,8.7,3.7,9,8.5l0.5,9c0.1,0.9-0.2,1.7-0.7,2.3C493.5,704.8,492.7,705.1,491.8,705.1z M481.5,685c-4.5,0-8.2,3.5-8.5,8
                                                l-0.5,9c0,0.8,0.2,1.4,0.6,1.9c0.4,0.5,1.1,0.7,1.9,0.7h16.8c0.8,0,1.4-0.2,1.9-0.7c0.4-0.5,0.6-1.1,0.6-1.9l-0.5-9
                                                c-0.3-4.5-4-8-8.5-8H481.5z"/>
                                            <path fill="#AA9D87" d="M471.9,702.2c0-0.1,0-0.2,0-0.2l0.5-9c0.3-4.8,4.2-8.5,9-8.5h3.8c4.8,0,8.8,3.7,9,8.5l0.5,9
                                                c0.1,0.9-0.2,1.7-0.8,2.3c-0.5,0.6-1.3,0.9-2.3,0.9H475c-0.9,0-1.7-0.3-2.3-0.9C472.2,703.8,471.9,703.1,471.9,702.2z
                                                M494.7,702.2c0-0.1,0-0.2,0-0.2l-0.5-9c-0.3-4.7-4.2-8.4-8.9-8.4h-3.8c-4.7,0-8.6,3.7-8.9,8.4l-0.5,9
                                                c-0.1,0.9,0.2,1.7,0.7,2.2c0.5,0.6,1.3,0.8,2.2,0.8h16.8c0.9,0,1.7-0.3,2.2-0.8C494.5,703.7,494.7,703,494.7,702.2z
                                                M472.4,702.2c0-0.1,0-0.1,0-0.2l0.5-9c0.3-4.5,4-8.1,8.5-8.1h3.8c4.5,0,8.3,3.5,8.5,8.1l0.5,9c0,0.8-0.2,1.5-0.6,1.9
                                                c-0.5,0.5-1.1,0.7-1.9,0.7H475c-0.8,0-1.5-0.3-1.9-0.7C472.7,703.5,472.4,702.9,472.4,702.2z M494.2,702.2
                                                c0-0.1,0-0.1,0-0.2l-0.5-9c-0.3-4.5-3.9-8-8.4-8h-3.8c-4.5,0-8.2,3.5-8.4,8l-0.5,9c0,0.8,0.2,1.4,0.6,1.9
                                                c0.4,0.5,1.1,0.7,1.8,0.7h16.8c0.8,0,1.4-0.2,1.8-0.7C494,703.5,494.2,702.9,494.2,702.2z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path fill="#DFD1B8" d="M485.1,685.6c4.1,0,7.5,3.2,7.8,7.3l0.5,8c0.1,1.5-0.9,2.6-2.4,2.6h-15c-1.5,0-2.5-1-2.4-2.6l0.5-8
                                                c0.2-4.1,3.6-7.3,7.8-7.3H485.1z"/>
                                            <path fill="#AA9D87" d="M473.4,701.2c0-0.1,0-0.1,0-0.2l0.5-8c0.2-4.1,3.7-7.4,7.8-7.4h3.4c4.1,0,7.6,3.2,7.8,7.4l0.5,8
                                                c0,0.8-0.2,1.4-0.6,1.9c-0.4,0.5-1.1,0.7-1.9,0.7h-15c-0.8,0-1.4-0.2-1.9-0.7C473.6,702.4,473.4,701.9,473.4,701.2z
                                                M493.3,701.2c0-0.1,0-0.1,0-0.2l-0.5-8c-0.2-4.1-3.6-7.3-7.7-7.3h-3.4c-4.1,0-7.5,3.2-7.7,7.3l-0.5,8
                                                c0,0.7,0.2,1.4,0.6,1.8c0.4,0.4,1,0.7,1.8,0.7h15c0.7,0,1.4-0.2,1.8-0.7C493.1,702.4,493.3,701.8,493.3,701.2z"/>
                                        </g>
                                        <g>
                                            <path fill="#DFD1B8" d="M490.9,703.7h-15c-0.8,0-1.5-0.3-1.9-0.7c-0.5-0.5-0.7-1.2-0.6-2l0.5-8c0.2-4.2,3.7-7.4,7.9-7.4h3.4
                                                c4.2,0,7.6,3.3,7.9,7.4l0.5,8c0,0.8-0.2,1.5-0.6,1.9C492.3,703.4,491.7,703.7,490.9,703.7z M481.7,685.7
                                                c-4,0-7.4,3.2-7.6,7.2l-0.5,8c0,0.7,0.2,1.3,0.6,1.8c0.4,0.4,1,0.7,1.7,0.7h15c0.7,0,1.3-0.2,1.7-0.7c0.4-0.4,0.6-1,0.6-1.8
                                                l-0.5-8c-0.2-4-3.6-7.2-7.6-7.2H481.7z"/>
                                            <path fill="#AA9D87" d="M473.3,701.2c0-0.1,0-0.1,0-0.2l0.5-8c0.2-4.2,3.7-7.5,7.9-7.5h3.4c4.2,0,7.7,3.3,7.9,7.5l0.5,8
                                                c0,0.8-0.2,1.5-0.6,2c-0.5,0.5-1.1,0.8-2,0.8h-15c-0.8,0-1.5-0.3-2-0.8C473.5,702.5,473.3,701.9,473.3,701.2z M493.4,701.2
                                                c0-0.1,0-0.1,0-0.2l-0.5-8c-0.2-4.1-3.7-7.4-7.8-7.4h-3.4c-4.1,0-7.6,3.2-7.8,7.4l-0.5,8c0,0.8,0.2,1.4,0.6,1.9
                                                c0.4,0.5,1.1,0.7,1.9,0.7h15c0.8,0,1.4-0.2,1.9-0.7C493.2,702.4,493.4,701.9,493.4,701.2z M473.6,701.2c0-0.1,0-0.1,0-0.2
                                                l0.5-8c0.2-4.1,3.6-7.3,7.7-7.3h3.4c4.1,0,7.5,3.2,7.7,7.3l0.5,8c0,0.7-0.2,1.4-0.6,1.8c-0.4,0.4-1,0.7-1.8,0.7h-15
                                                c-0.7,0-1.4-0.2-1.8-0.7C473.8,702.4,473.6,701.8,473.6,701.2z M493.1,701.2c0-0.1,0-0.1,0-0.2l-0.5-8
                                                c-0.2-4-3.6-7.2-7.6-7.2h-3.4c-4,0-7.3,3.1-7.6,7.2l-0.5,8c0,0.7,0.1,1.3,0.5,1.7c0.4,0.4,1,0.6,1.7,0.6h15
                                                c0.7,0,1.3-0.2,1.7-0.6C492.9,702.3,493.1,701.8,493.1,701.2z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path fill="#DFD1B8" d="M495.7,692.6l0-1.2c-0.2-6-5.1-10.8-11.1-10.8h-2c-6,0-10.9,4.8-11.1,10.8l0,1.2l-1.4-1.8l2.7-7.8
                                                l4.6-3.6l6.2-1l5.9,1.1c0,0,3.8,2.4,4,2.5c0.1,0.1,3.1,3.6,3.3,4s0.7,4.7,0.6,4.8C497.1,691,495.7,692.6,495.7,692.6z"/>
                                            <path fill="#AA9D87" d="M469.9,690.8l2.7-7.9l0,0l4.6-3.6l0,0l6.2-1l6,1.1c0.2,0.1,3.8,2.4,4,2.5c0.2,0.1,3.1,3.6,3.3,4.1
                                                c0.2,0.4,0.7,4.7,0.6,4.9c-0.1,0.1-1.4,1.6-1.5,1.7l-0.1,0.1l0-1.3c-0.1-2.9-1.3-5.6-3.4-7.6s-4.8-3.1-7.7-3.1h-2
                                                c-2.9,0-5.6,1.1-7.7,3.1s-3.3,4.7-3.4,7.6l0,1.3L469.9,690.8z M472.7,683l-2.7,7.8l1.3,1.7l0-1c0.1-2.9,1.3-5.6,3.4-7.7
                                                c2.1-2,4.9-3.1,7.8-3.1h2c2.9,0,5.7,1.1,7.8,3.1c2.1,2,3.3,4.7,3.4,7.7l0,1c0.6-0.6,1.3-1.5,1.4-1.6c0-0.3-0.4-4.3-0.6-4.8
                                                c-0.2-0.4-3.1-3.9-3.2-4c-0.1-0.1-3.8-2.4-4-2.5l-5.9-1.1l-6.1,1L472.7,683z"/>
                                        </g>
                                        <g>
                                            <path fill="#DFD1B8" d="M471.6,693.3l-1.9-2.5l2.8-8l4.7-3.7l6.3-1l0,0l6,1.1l0,0c0.4,0.2,3.8,2.4,4,2.5
                                                c0.2,0.1,3.1,3.6,3.3,4.2c0.1,0.3,0.4,2.1,0.4,2.6c0.3,2.3,0.2,2.4,0.2,2.4c-0.1,0.1-1.1,1.3-1.5,1.7l-0.4,0.5l-0.1-1.8
                                                c-0.2-5.9-5-10.5-10.9-10.5h-2c-5.9,0-10.7,4.6-10.9,10.5L471.6,693.3z M482.5,680.4h2c6.2,0,11.2,4.8,11.4,11l0,0.6
                                                c0.4-0.5,0.9-1,1.1-1.2c0-0.6-0.4-4.2-0.6-4.6c-0.1-0.4-2.9-3.7-3.2-3.9c-0.1-0.1-2.4-1.5-3.9-2.5l-5.9-1.1l-6.1,1l-4.4,3.5
                                                l-2.6,7.6l0.9,1.2l0-0.5C471.4,685.3,476.4,680.4,482.5,680.4z"/>
                                            <path fill="#AA9D87" d="M469.6,690.9l2.8-8.1l0,0l4.7-3.7l0,0l6.3-1l0.1,0l6,1.1l0.1,0.1c1.4,0.9,3.8,2.4,3.9,2.5
                                                c0.2,0.1,3.1,3.6,3.4,4.2c0.1,0.3,0.4,2.1,0.4,2.6c0.3,2.3,0.2,2.4,0.2,2.5c-0.1,0.1-1,1.1-1.5,1.7l-0.5,0.6l-0.1-1.9
                                                c-0.2-5.9-5-10.5-10.8-10.5h-2c-5.9,0-10.6,4.6-10.8,10.5l-0.1,2L469.6,690.9z M472.5,682.9l-2.8,8l1.8,2.3l0.1-1.7
                                                c0.2-5.9,5-10.6,10.9-10.6h2c5.9,0,10.7,4.6,10.9,10.6l0.1,1.7l0.3-0.3c0.9-1,1.5-1.7,1.5-1.7c0-0.1,0.1-0.1-0.2-2.4
                                                c-0.1-1.1-0.3-2.3-0.4-2.6c-0.2-0.5-3.2-4-3.3-4.1c-0.1-0.1-1.5-1-3.9-2.5l-0.1-0.1l-6-1.1l-6.2,1L472.5,682.9z
                                                M470.2,690.8l2.7-7.7l0,0l4.5-3.5l0,0l6.1-1l5.9,1.1c1.5,0.9,3.8,2.4,3.9,2.5c0.3,0.3,3.1,3.6,3.2,4
                                                c0.2,0.4,0.6,4.1,0.6,4.6l0,0l0,0c-0.2,0.2-0.8,0.9-1.1,1.2l-0.1,0.1l0-0.7c-0.2-6.1-5.2-10.9-11.3-10.9h-2
                                                c-6.1,0-11.1,4.8-11.3,10.9l0,0.7L470.2,690.8z M472.9,683.2l-2.6,7.6l0.8,1l0-0.3c0.2-6.2,5.2-11,11.4-11h2
                                                c6.2,0,11.2,4.9,11.4,11l0,0.4c0.3-0.3,0.8-0.9,0.9-1.1c0-0.7-0.5-4.2-0.6-4.6c-0.1-0.4-2.9-3.7-3.2-3.9
                                                c-0.1-0.1-2.3-1.5-3.9-2.5l-5.8-1.1l-6,1L472.9,683.2z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path fill="#DFD1B8" d="M484.8,679.3c5.8,0.2,10.6,4.8,10.7,10.7l0.3,8.2l2.3-0.1l-0.3-8.2c-0.2-7-5.9-12.7-12.9-12.9h-2.8
                                                c-7,0.2-12.7,5.8-12.9,12.9l-0.3,8.2l2.3,0.1l0.3-8.2c0.2-5.8,4.9-10.5,10.7-10.7H484.8z"/>
                                            <path fill="#AA9D87" d="M468.9,698.2l0.3-8.2c0.2-7.1,5.9-12.7,13-12.9h2.8c7.1,0.2,12.8,5.9,13,12.9l0.3,8.2l-2.4,0.1
                                                l-0.3-8.2c-0.2-5.8-4.9-10.5-10.7-10.6h-2.7c-5.8,0.2-10.5,4.8-10.7,10.6l-0.3,8.2L468.9,698.2z M498.1,698.1l-0.3-8.1
                                                c-0.2-7-5.9-12.6-12.9-12.8h-2.8c-7,0.2-12.7,5.8-12.9,12.8l-0.3,8.1l2.1,0.1l0.3-8.1c0.2-5.9,4.9-10.6,10.8-10.7h2.7
                                                c5.9,0.2,10.6,4.9,10.8,10.7l0.3,8.1L498.1,698.1z"/>
                                        </g>
                                        <g>
                                            <path fill="#DFD1B8" d="M495.6,698.5l-0.3-8.4c-0.2-5.7-4.8-10.3-10.5-10.4h-2.7c-5.7,0.2-10.3,4.7-10.5,10.4l-0.3,8.4
                                                l-2.8-0.1l0.3-8.4c0.2-7.2,6-12.9,13.2-13.1l2.8,0c7.2,0.2,13,5.9,13.2,13.1l0.3,8.4L495.6,698.5z M469.2,697.9l1.8,0.1
                                                l0.3-7.9c0.2-6,5-10.8,11-10.9l2.7,0l0,0c6,0.2,10.8,5,11,10.9l0.3,7.9l1.8-0.1l-0.3-7.9c-0.2-6.9-5.8-12.5-12.7-12.6
                                                l-2.8,0c-6.9,0.2-12.5,5.7-12.7,12.6L469.2,697.9z"/>
                                            <path fill="#AA9D87" d="M468.6,698.4l0.3-8.5c0.2-7.2,6-13,13.2-13.2l2.8,0c7.2,0.2,13,6,13.2,13.2l0.3,8.5l-2.9,0.1
                                                l-0.3-8.5c-0.2-5.7-4.8-10.2-10.4-10.4h-2.7c-5.7,0.1-10.3,4.7-10.4,10.4l-0.3,8.5L468.6,698.4z M498.3,698.3l-0.3-8.4
                                                c-0.2-7.1-6-12.9-13.1-13.1l-2.8,0c-7.1,0.2-12.9,5.9-13.1,13.1l-0.3,8.4l2.6,0.1l0.3-8.4c0.2-5.7,4.8-10.3,10.5-10.5h2.7
                                                c5.7,0.2,10.4,4.8,10.6,10.5l0.3,8.4L498.3,698.3z M469.1,697.9l0.3-8c0.2-6.9,5.8-12.5,12.8-12.7l2.8,0
                                                c6.9,0.2,12.5,5.8,12.8,12.7l0.3,8L496,698l-0.3-8c-0.2-5.9-5-10.7-10.9-10.9h-2.7c-5.9,0.2-10.7,4.9-10.9,10.9l-0.3,8
                                                L469.1,697.9z M497.8,697.8l-0.3-7.9c-0.2-6.9-5.8-12.4-12.6-12.6l-2.8,0c-6.9,0.2-12.4,5.7-12.6,12.6l-0.3,7.9l1.7,0.1
                                                l0.3-7.9c0.2-6,5-10.8,11-11l2.7,0c6,0.2,10.8,5,11,11l0.3,7.9L497.8,697.8z"/>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                    
                        <rect id="kitchen-counter" x="396.2" y="700.1" fill="#DDE7ED" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="102.3" height="51.1"/>
                    
                        <rect x="466.7" y="751.2" fill="#DDE7ED" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="28.4" height="1.5"/>
                    
                        <rect x="345.2" y="793.7" fill="#DDE7ED" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="2.8" height="34.8"/>
                    
                        <rect x="318.1" y="794.1" fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="5,3" width="24.5" height="34.4"/>
                    
                        <rect x="398.7" y="800.4" fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="5,3" width="40.8" height="31.8"/>
                    
                        <rect x="398.7" y="793.7" fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="5,3" width="40.8" height="5.4"/>
                    
                        <rect x="396.2" y="717.8" fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="5,3" width="102.3" height="5.4"/>
                    
                        <rect x="466.7" y="724.7" fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="5,3" width="28" height="26.4"/>
                    <g id="kitchen-sink">
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M447.2,731.4V748c0.1,0.7,0.5,1.1,1.1,1.1h13.2c0.7-0.1,1.1-0.5,1.1-1.1v-16.6c-0.1-0.7-0.5-1.1-1.1-1.1h-13.2
                            C447.7,730.4,447.3,730.7,447.2,731.4z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M455,742.1c0.6,0,1.1-0.2,1.6-0.7c0.4-0.4,0.7-0.9,0.7-1.6c0-0.7-0.2-1.3-0.7-1.7c-0.4-0.4-0.9-0.6-1.6-0.6
                            c-0.7,0-1.3,0.2-1.7,0.6c-0.4,0.4-0.6,1-0.6,1.7c0,0.6,0.2,1.1,0.6,1.6C453.8,741.8,454.3,742.1,455,742.1z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M445.4,730.9c-0.2-0.3-0.6-0.6-1-0.6h-13.1c-0.7,0.1-1.1,0.5-1.1,1.1V748c0.1,0.7,0.5,1.1,1.1,1.1h13.1c0.7-0.1,1.1-0.5,1.1-1.1
                            v-13.3l-0.9,3c-0.1,0.3-0.4,0.5-0.7,0.4c-0.3-0.1-0.5-0.4-0.4-0.7L445.4,730.9l0.6-2.3h-4.2l-0.1-2.3h9.2v2.3h-3.6l-1.8,6"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M428.6,750.9h35.4c0.7-0.1,1.1-0.5,1.1-1.1v-22.9c-0.1-0.7-0.5-1.1-1.1-1.1h-35.4c-0.7,0.1-1.1,0.5-1.1,1.1v22.9
                            C427.6,750.5,427.9,750.9,428.6,750.9z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M437.8,742.1c0.6,0,1.1-0.2,1.6-0.7c0.4-0.4,0.7-0.9,0.7-1.6c0-0.7-0.2-1.3-0.7-1.7c-0.4-0.4-0.9-0.6-1.6-0.6
                            c-0.6,0-1.2,0.2-1.7,0.6c-0.4,0.4-0.6,1-0.6,1.7c0,0.6,0.2,1.1,0.6,1.6C436.6,741.8,437.2,742.1,437.8,742.1z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M449.3,728.4c0.6-0.1,1-0.4,1-0.9c-0.1-0.6-0.5-0.9-1-0.9c-0.6,0.1-0.9,0.4-0.9,0.9C448.4,728,448.7,728.3,449.3,728.4z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M447.3,728.6l0.2-0.5c0.1-0.3-0.1-0.6-0.4-0.6c-0.3-0.1-0.6,0-0.7,0.3l-0.3,0.8"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M443.4,728.4c0.6-0.1,1-0.4,1-0.9c-0.1-0.6-0.5-0.9-1-0.9c-0.6,0.1-0.9,0.4-0.9,0.9C442.6,728,442.9,728.3,443.4,728.4z"/>
                    </g>
                    <g id="laundry-sink">
                        
                            <path fill="none" stroke="#425563" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M590.8,450.2l-6.5-1.9v-3.9h-2.4v9.8l2.4-0.1v-4.5l9.3,2.8c0.4,0.1,0.6-0.1,0.8-0.4c0.1-0.4-0.1-0.6-0.4-0.8L590.8,450.2"/>
                        
                            <path fill="none" stroke="#425563" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M584.1,446.2c-0.1-0.7-0.4-1-1-1.1c-0.7,0.1-1,0.5-1,1.1c0.1,0.6,0.4,0.9,1,1C583.7,447.1,584,446.8,584.1,446.2z"/>
                        
                            <path fill="none" stroke="#425563" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M584.3,448.3l-0.6-0.2c-0.4-0.1-0.6,0.1-0.7,0.4c-0.1,0.4,0,0.6,0.3,0.8l0.9,0.3"/>
                        
                            <path fill="none" stroke="#425563" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M584.1,452.4c-0.1-0.7-0.4-1-1-1.1c-0.7,0.1-1,0.5-1,1.1c0.1,0.6,0.4,0.9,1,1C583.7,453.4,584,453,584.1,452.4z"/>
                    </g>
                    <g id="furniture">
                        <g id="Rug_00000060030875067944530920000003091206697922137512_">
                            <g opacity="0.6">
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M355.4,352.8c0.1,0.1,0.1,0.2,0.1,0.3l0.6,5.7c0.3,3.3-0.4,6.1-2.2,8.2c-1.7,1.9-4.1,3-7,3.2
                                                        l-8.3,0.4c-0.1,0-0.3,0-0.4-0.1c0,0,0,0,0,0c-0.1-0.1-0.1-0.2-0.1-0.3l0.4-8.5c0.1-2.9,1.2-5.3,3.1-6.9
                                                        c2-1.8,4.6-2.6,7.8-2.4l5.7,0.4C355.2,352.7,355.3,352.8,355.4,352.8z M339.1,369.7l7.8-0.4c2.7-0.1,4.8-1.1,6.3-2.9
                                                        c1.6-1.9,2.3-4.5,2-7.5l-0.5-5.3l-5.3-0.3c-2.9-0.2-5.3,0.6-7.1,2.1c-1.7,1.5-2.6,3.7-2.7,6.3L339.1,369.7z"/>
                                                    <path fill="#EFE7DA" d="M348.5,352.3c-2.7,0-5.1,0.8-6.9,2.4c-1.9,1.7-2.9,4.1-3.1,6.9l-0.4,8.5c0,0.1,0,0.3,0.1,0.3
                                                        c0,0,0,0,0,0c0.1,0.1,0.2,0.1,0.3,0.1c0,0,0,0,0,0l8.3-0.4c2.9-0.2,5.3-1.3,7-3.2c1.8-2.1,2.5-4.9,2.2-8.2l-0.6-5.7
                                                        c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.1l-5.7-0.4C349.1,352.3,348.8,352.3,348.5,352.3L348.5,352.3z
                                                        M339.1,369.7l0.4-8c0.1-2.6,1.1-4.8,2.7-6.3c1.6-1.4,3.7-2.2,6.2-2.2c0.3,0,0.6,0,0.9,0l5.3,0.3l0.5,5.3
                                                        c0.3,3-0.4,5.6-2,7.5c-1.5,1.7-3.7,2.7-6.3,2.9L339.1,369.7L339.1,369.7z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M338.8,369.7c0.1,0.1,0.1,0.2,0.1,0.3l-0.4,8.5c-0.1,2.9-1.2,5.3-3.1,6.9c-2,1.8-4.6,2.6-7.8,2.4
                                                        l-5.7-0.4c-0.2,0-0.4-0.2-0.4-0.4l-0.6-5.7c-0.3-3.3,0.4-6.1,2.2-8.2c1.7-1.9,4.1-3,7-3.2l8.3-0.4
                                                        C338.5,369.5,338.7,369.6,338.8,369.7z M322.4,386.6l5.3,0.3c2.9,0.2,5.3-0.6,7.1-2.1c1.7-1.5,2.6-3.7,2.7-6.3l0.4-8
                                                        l-7.8,0.4c-2.7,0.1-4.8,1.1-6.3,2.9c-1.6,1.9-2.3,4.5-2,7.5L322.4,386.6z"/>
                                                    <path fill="#EFE7DA" d="M338.4,369.5C338.4,369.5,338.4,369.5,338.4,369.5l-8.3,0.4c-2.9,0.2-5.3,1.3-7,3.2
                                                        c-1.8,2.1-2.5,4.9-2.2,8.2l0.6,5.7c0,0.2,0.2,0.4,0.4,0.4l5.7,0.4c0.3,0,0.6,0,0.9,0c2.7,0,5.1-0.8,6.9-2.4
                                                        c1.9-1.7,2.9-4.1,3.1-6.9l0.4-8.5c0-0.1,0-0.3-0.1-0.3C338.7,369.6,338.6,369.5,338.4,369.5L338.4,369.5z M338,370.5
                                                        l-0.4,8c-0.1,2.6-1.1,4.8-2.7,6.3c-1.6,1.4-3.7,2.2-6.2,2.2c-0.3,0-0.6,0-0.9,0l-5.3-0.3l-0.5-5.3c-0.3-3,0.4-5.6,2-7.5
                                                        c1.5-1.7,3.7-2.7,6.3-2.9L338,370.5L338,370.5z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M353.6,372.8c0.1,0.1,0.2,0.2,0.3,0.3c1.8,2,2.6,4.6,2.4,7.8l-0.4,5.7c0,0.2-0.2,0.4-0.4,0.4
                                                        l-5.7,0.6c-3.3,0.3-6.1-0.4-8.2-2.2c-1.9-1.7-3-4.1-3.2-7l-0.4-8.3c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.2-0.1,0.4-0.1l8.5,0.4
                                                        C349.7,370.2,351.9,371.1,353.6,372.8z M355,386.2l0.3-5.3c0.2-2.9-0.6-5.3-2.1-7.1c-1.5-1.7-3.7-2.6-6.3-2.7l-8-0.4
                                                        l0.4,7.8c0.1,2.7,1.1,4.8,2.9,6.3c1.9,1.6,4.5,2.3,7.5,2L355,386.2z"/>
                                                    <path fill="#EFE7DA" d="M338.4,369.7c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.4l0.4,8.3c0.2,2.9,1.3,5.3,3.2,7
                                                        c1.8,1.5,4.1,2.3,6.7,2.3c0.5,0,1,0,1.5-0.1l5.7-0.6c0.2,0,0.4-0.2,0.4-0.4l0.4-5.7c0.2-3.1-0.6-5.8-2.4-7.8
                                                        c-0.1-0.1-0.2-0.2-0.3-0.3c-1.6-1.6-3.9-2.6-6.6-2.7L338.4,369.7C338.5,369.7,338.4,369.7,338.4,369.7L338.4,369.7z
                                                        M348.3,386.8c-2.4,0-4.5-0.7-6.1-2.1c-1.7-1.5-2.7-3.7-2.9-6.3l-0.4-7.8l8,0.4c2.6,0.1,4.8,1.1,6.3,2.7
                                                        c1.6,1.8,2.3,4.2,2.1,7.1l-0.3,5.3l-5.3,0.5C349.2,386.8,348.8,386.8,348.3,386.8L348.3,386.8z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M335.9,355.2c1.6,1.6,2.6,3.9,2.7,6.5l0.4,8.3c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.1-0.4,0.1
                                                        l-8.5-0.4c-2.9-0.1-5.3-1.2-6.9-3.1c-1.8-2-2.6-4.6-2.4-7.8l0.4-5.7c0-0.2,0.2-0.4,0.4-0.4l5.7-0.6
                                                        c3.3-0.3,6.1,0.4,8.2,2.2C335.6,354.9,335.8,355,335.9,355.2z M338.1,369.5l-0.4-7.8c-0.1-2.7-1.1-4.8-2.9-6.3
                                                        c-1.9-1.6-4.5-2.3-7.5-2L322,354l-0.3,5.3c-0.2,2.9,0.6,5.3,2.1,7.1c1.5,1.7,3.7,2.6,6.3,2.7L338.1,369.5z"/>
                                                    <path fill="#EFE7DA" d="M328.7,352.4c-0.5,0-1,0-1.5,0.1l-5.7,0.6c-0.2,0-0.4,0.2-0.4,0.4l-0.4,5.7
                                                        c-0.2,3.1,0.6,5.8,2.4,7.8c1.7,1.9,4.1,2.9,6.9,3.1l8.5,0.4c0,0,0,0,0,0c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.4
                                                        l-0.4-8.3c-0.1-2.7-1.1-4.9-2.7-6.5c-0.2-0.2-0.3-0.3-0.5-0.5C333.7,353.2,331.4,352.4,328.7,352.4L328.7,352.4z
                                                        M338.1,369.5l-8-0.4c-2.6-0.1-4.8-1.1-6.3-2.7c-1.6-1.8-2.3-4.2-2.1-7.1l0.3-5.3l5.3-0.5c0.5,0,1-0.1,1.4-0.1
                                                        c2.4,0,4.5,0.7,6.1,2.1c1.7,1.5,2.7,3.7,2.9,6.3L338.1,369.5L338.1,369.5z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M322.6,353.5l32.3,32.3c0.2,0.2,0.2,0.5,0,0.7c-0.2,0.2-0.5,0.2-0.7,0L322,354.2
                                                    c-0.2-0.2-0.2-0.5,0-0.7C322.2,353.4,322.5,353.4,322.6,353.5z"/>
                                                <path fill="#EFE7DA" d="M322.3,353.4c-0.1,0-0.2,0-0.3,0.1c-0.2,0.2-0.2,0.5,0,0.7l32.3,32.3c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1c0.2-0.2,0.2-0.5,0-0.7l-32.3-32.3C322.6,353.4,322.4,353.4,322.3,353.4L322.3,353.4z"/>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M354.6,353.9c0.2,0.2,0.2,0.5,0,0.7l-31.9,31.9c-0.2,0.2-0.5,0.2-0.7,0c-0.2-0.2-0.2-0.5,0-0.7
                                                    l31.9-31.9C354.1,353.7,354.4,353.7,354.6,353.9z"/>
                                                <path fill="#EFE7DA" d="M354.3,353.8c-0.1,0-0.2,0-0.3,0.1l-31.9,31.9c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1l31.9-31.9c0.2-0.2,0.2-0.5,0-0.7C354.5,353.8,354.4,353.8,354.3,353.8L354.3,353.8z"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M355.7,387.3c0.1,0.1,0.1,0.2,0.1,0.3l0.6,5.7c0.3,3.3-0.4,6.1-2.2,8.2c-1.7,1.9-4.1,3-7,3.2
                                                        l-8.3,0.4c-0.1,0-0.3,0-0.4-0.1c0,0,0,0,0,0c-0.1-0.1-0.1-0.2-0.1-0.3l0.4-8.5c0.1-2.9,1.2-5.3,3.1-6.9
                                                        c2-1.8,4.6-2.6,7.8-2.4l5.7,0.4C355.5,387.2,355.6,387.2,355.7,387.3z M339.4,404.2l7.8-0.4c2.7-0.1,4.8-1.1,6.3-2.9
                                                        c1.6-1.9,2.3-4.5,2-7.5l-0.5-5.3l-5.3-0.3c-2.9-0.2-5.3,0.6-7.1,2.1c-1.7,1.5-2.6,3.7-2.7,6.3L339.4,404.2z"/>
                                                    <path fill="#EFE7DA" d="M348.8,386.8c-2.7,0-5.1,0.8-6.9,2.4c-1.9,1.7-2.9,4.1-3.1,6.9l-0.4,8.5c0,0.1,0,0.3,0.1,0.3
                                                        c0,0,0,0,0,0c0.1,0.1,0.2,0.1,0.3,0.1c0,0,0,0,0,0l8.3-0.4c2.9-0.1,5.3-1.3,7-3.2c1.8-2.1,2.5-4.9,2.2-8.2l-0.6-5.7
                                                        c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.1l-5.7-0.4C349.4,386.8,349.1,386.8,348.8,386.8L348.8,386.8z
                                                        M339.4,404.2l0.4-8c0.1-2.6,1.1-4.8,2.7-6.3c1.6-1.4,3.7-2.2,6.2-2.2c0.3,0,0.6,0,0.9,0l5.3,0.3l0.5,5.3
                                                        c0.3,3-0.4,5.6-2,7.5c-1.5,1.7-3.7,2.7-6.3,2.9L339.4,404.2L339.4,404.2z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M339.1,404.2c0.1,0.1,0.1,0.2,0.1,0.3l-0.4,8.5c-0.1,2.9-1.2,5.3-3.1,6.9c-2,1.8-4.6,2.6-7.8,2.4
                                                        l-5.7-0.4c-0.2,0-0.4-0.2-0.4-0.4l-0.6-5.7c-0.3-3.3,0.4-6.1,2.2-8.2c1.7-1.9,4.1-3,7-3.2l8.3-0.4
                                                        C338.9,404,339,404.1,339.1,404.2z M322.7,421l5.3,0.3c2.9,0.2,5.3-0.6,7.1-2.1c1.7-1.5,2.6-3.7,2.7-6.3l0.4-8l-7.8,0.4
                                                        c-2.7,0.1-4.8,1.1-6.3,2.9c-1.6,1.9-2.3,4.5-2,7.5L322.7,421z"/>
                                                    <path fill="#EFE7DA" d="M338.7,404C338.7,404,338.7,404,338.7,404l-8.3,0.4c-2.9,0.2-5.3,1.3-7,3.2
                                                        c-1.8,2.1-2.5,4.9-2.2,8.2l0.6,5.7c0,0.2,0.2,0.4,0.4,0.4l5.7,0.4c0.3,0,0.6,0,0.9,0c2.7,0,5.1-0.8,6.9-2.4
                                                        c1.9-1.7,2.9-4.1,3.1-6.9l0.4-8.5c0-0.1,0-0.3-0.1-0.3C339,404.1,338.9,404,338.7,404L338.7,404z M338.3,405l-0.4,8
                                                        c-0.1,2.6-1.1,4.8-2.7,6.3c-1.6,1.4-3.7,2.2-6.2,2.2c-0.3,0-0.6,0-0.9,0l-5.3-0.3l-0.5-5.3c-0.3-3,0.4-5.6,2-7.5
                                                        c1.5-1.7,3.7-2.7,6.3-2.9L338.3,405L338.3,405z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M353.9,407.3c0.1,0.1,0.2,0.2,0.3,0.3c1.8,2,2.6,4.6,2.4,7.8l-0.4,5.7c0,0.2-0.2,0.4-0.4,0.4
                                                        l-5.7,0.6c-3.3,0.3-6.1-0.4-8.2-2.2c-1.9-1.7-3-4.1-3.2-7l-0.4-8.3c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.2-0.1,0.4-0.1l8.5,0.4
                                                        C350,404.7,352.2,405.6,353.9,407.3z M355.3,420.7l0.3-5.3c0.2-2.9-0.6-5.3-2.1-7.1c-1.5-1.7-3.7-2.6-6.3-2.7l-8-0.4
                                                        l0.4,7.8c0.1,2.7,1.1,4.8,2.9,6.3c1.9,1.6,4.5,2.3,7.5,2L355.3,420.7z"/>
                                                    <path fill="#EFE7DA" d="M338.8,404.2c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.4l0.4,8.3c0.2,2.9,1.3,5.3,3.2,7
                                                        c1.8,1.5,4.1,2.3,6.7,2.3c0.5,0,1,0,1.5-0.1l5.7-0.6c0.2,0,0.4-0.2,0.4-0.4l0.4-5.7c0.2-3.1-0.6-5.8-2.4-7.8
                                                        c-0.1-0.1-0.2-0.2-0.3-0.3c-1.6-1.6-3.9-2.6-6.6-2.7L338.8,404.2C338.8,404.2,338.8,404.2,338.8,404.2L338.8,404.2z
                                                        M348.6,421.3c-2.4,0-4.5-0.7-6.1-2.1c-1.7-1.5-2.7-3.7-2.9-6.3l-0.4-7.8l8,0.4c2.6,0.1,4.8,1.1,6.3,2.7
                                                        c1.6,1.8,2.3,4.2,2.1,7.1l-0.3,5.3l-5.3,0.5C349.5,421.2,349.1,421.3,348.6,421.3L348.6,421.3z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M336.3,389.7c1.6,1.6,2.6,3.9,2.7,6.5l0.4,8.3c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.1-0.4,0.1
                                                        l-8.5-0.4c-2.9-0.1-5.3-1.2-6.9-3.1c-1.8-2-2.6-4.6-2.4-7.8l0.4-5.7c0-0.2,0.2-0.4,0.4-0.4l5.7-0.6
                                                        c3.3-0.3,6.1,0.4,8.2,2.2C335.9,389.3,336.1,389.5,336.3,389.7z M338.4,404l-0.4-7.8c-0.1-2.7-1.1-4.8-2.9-6.3
                                                        c-1.9-1.6-4.5-2.3-7.5-2l-5.3,0.5l-0.3,5.3c-0.2,2.9,0.6,5.3,2.1,7.1c1.5,1.7,3.7,2.6,6.3,2.7L338.4,404z"/>
                                                    <path fill="#EFE7DA" d="M329.1,386.9c-0.5,0-1,0-1.5,0.1l-5.7,0.6c-0.2,0-0.4,0.2-0.4,0.4l-0.4,5.7
                                                        c-0.2,3.1,0.6,5.8,2.4,7.8c1.7,1.9,4.1,2.9,6.9,3.1l8.5,0.4c0,0,0,0,0,0c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.4
                                                        l-0.4-8.3c-0.1-2.7-1.1-4.9-2.7-6.5c-0.2-0.2-0.3-0.3-0.5-0.5C334,387.7,331.7,386.9,329.1,386.9L329.1,386.9z M338.4,404
                                                        l-8-0.4c-2.6-0.1-4.8-1.1-6.3-2.7c-1.6-1.8-2.3-4.2-2.1-7.1l0.3-5.3l5.3-0.5c0.5,0,1-0.1,1.4-0.1c2.4,0,4.5,0.7,6.1,2.1
                                                        c1.7,1.5,2.7,3.7,2.9,6.3L338.4,404L338.4,404z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M323,388l32.3,32.3c0.2,0.2,0.2,0.5,0,0.7c-0.2,0.2-0.5,0.2-0.7,0l-32.3-32.3
                                                    c-0.2-0.2-0.2-0.5,0-0.7C322.5,387.8,322.8,387.8,323,388z"/>
                                                <path fill="#EFE7DA" d="M322.6,387.9c-0.1,0-0.2,0-0.3,0.1c-0.2,0.2-0.2,0.5,0,0.7l32.3,32.3c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1c0.2-0.2,0.2-0.5,0-0.7L323,388C322.9,387.9,322.7,387.9,322.6,387.9L322.6,387.9z"/>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M354.9,388.4c0.2,0.2,0.2,0.5,0,0.7l-31.9,31.9c-0.2,0.2-0.5,0.2-0.7,0c-0.2-0.2-0.2-0.5,0-0.7
                                                    l31.9-31.9C354.5,388.2,354.8,388.2,354.9,388.4z"/>
                                                <path fill="#EFE7DA" d="M354.6,388.3c-0.1,0-0.2,0-0.3,0.1l-31.9,31.9c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1l31.9-31.9c0.2-0.2,0.2-0.5,0-0.7C354.8,388.3,354.7,388.3,354.6,388.3L354.6,388.3z"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M355.9,421.6c0.1,0.1,0.1,0.2,0.1,0.3l0.6,5.7c0.3,3.3-0.4,6.1-2.2,8.2c-1.7,1.9-4.1,3-7,3.2
                                                        l-8.3,0.4c-0.1,0-0.3,0-0.4-0.1c0,0,0,0,0,0c-0.1-0.1-0.1-0.2-0.1-0.3l0.4-8.5c0.1-2.9,1.2-5.3,3.1-6.9
                                                        c2-1.8,4.6-2.6,7.8-2.4l5.7,0.4C355.7,421.5,355.8,421.6,355.9,421.6z M339.6,438.5l7.8-0.4c2.7-0.1,4.8-1.1,6.3-2.9
                                                        c1.6-1.9,2.3-4.5,2-7.5l-0.5-5.3l-5.3-0.3c-2.9-0.2-5.3,0.6-7.1,2.1c-1.7,1.5-2.6,3.7-2.7,6.3L339.6,438.5z"/>
                                                    <path fill="#EFE7DA" d="M349,421.1c-2.7,0-5.1,0.8-6.9,2.4c-1.9,1.7-2.9,4.1-3.1,6.9l-0.4,8.5c0,0.1,0,0.3,0.1,0.3
                                                        c0,0,0,0,0,0c0.1,0.1,0.2,0.1,0.3,0.1c0,0,0,0,0,0l8.3-0.4c2.9-0.1,5.3-1.3,7-3.2c1.8-2.1,2.5-4.9,2.2-8.2l-0.6-5.7
                                                        c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.1l-5.7-0.4C349.6,421.1,349.3,421.1,349,421.1L349,421.1z M339.6,438.5
                                                        l0.4-8c0.1-2.6,1.1-4.8,2.7-6.3c1.6-1.4,3.7-2.2,6.2-2.2c0.3,0,0.6,0,0.9,0l5.3,0.3l0.5,5.3c0.3,3-0.4,5.6-2,7.5
                                                        c-1.5,1.7-3.7,2.7-6.3,2.9L339.6,438.5L339.6,438.5z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M339.3,438.5c0.1,0.1,0.1,0.2,0.1,0.3l-0.4,8.5c-0.1,2.9-1.2,5.3-3.1,6.9c-2,1.8-4.6,2.6-7.8,2.4
                                                        l-5.7-0.4c-0.2,0-0.4-0.2-0.4-0.4l-0.6-5.7c-0.3-3.3,0.4-6.1,2.2-8.2c1.7-1.9,4.1-3,7-3.2l8.3-0.4
                                                        C339.1,438.3,339.2,438.4,339.3,438.5z M323,455.4l5.3,0.3c2.9,0.2,5.3-0.6,7.1-2.1c1.7-1.5,2.6-3.7,2.7-6.3l0.4-8
                                                        l-7.8,0.4c-2.7,0.1-4.8,1.1-6.3,2.9c-1.6,1.9-2.3,4.5-2,7.5L323,455.4z"/>
                                                    <path fill="#EFE7DA" d="M339,438.3C339,438.3,339,438.3,339,438.3l-8.3,0.4c-2.9,0.2-5.3,1.3-7,3.2
                                                        c-1.8,2.1-2.5,4.9-2.2,8.2l0.6,5.7c0,0.2,0.2,0.4,0.4,0.4l5.7,0.4c0.3,0,0.6,0,0.9,0c2.7,0,5.1-0.8,6.9-2.4
                                                        c1.9-1.7,2.9-4.1,3.1-6.9l0.4-8.5c0-0.1,0-0.3-0.1-0.3C339.2,438.4,339.1,438.3,339,438.3L339,438.3z M338.5,439.3l-0.4,8
                                                        c-0.1,2.6-1.1,4.8-2.7,6.3c-1.6,1.4-3.7,2.2-6.2,2.2c-0.3,0-0.6,0-0.9,0l-5.3-0.3l-0.5-5.3c-0.3-3,0.4-5.6,2-7.5
                                                        c1.5-1.7,3.7-2.7,6.3-2.9L338.5,439.3L338.5,439.3z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M354.1,441.6c0.1,0.1,0.2,0.2,0.3,0.3c1.8,2,2.6,4.6,2.4,7.8l-0.4,5.7c0,0.2-0.2,0.4-0.4,0.4
                                                        l-5.7,0.6c-3.3,0.3-6.1-0.4-8.2-2.2c-1.9-1.7-3-4.1-3.2-7l-0.4-8.3c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.2-0.1,0.4-0.1l8.5,0.4
                                                        C350.2,439,352.5,440,354.1,441.6z M355.5,455l0.3-5.3c0.2-2.9-0.6-5.3-2.1-7.1c-1.5-1.7-3.7-2.6-6.3-2.7l-8-0.4l0.4,7.8
                                                        c0.1,2.7,1.1,4.8,2.9,6.3c1.9,1.6,4.5,2.3,7.5,2L355.5,455z"/>
                                                    <path fill="#EFE7DA" d="M339,438.5c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.4l0.4,8.3c0.2,2.9,1.3,5.3,3.2,7
                                                        c1.8,1.5,4.1,2.3,6.7,2.3c0.5,0,1,0,1.5-0.1l5.7-0.6c0.2,0,0.4-0.2,0.4-0.4l0.4-5.7c0.2-3.1-0.6-5.8-2.4-7.8
                                                        c-0.1-0.1-0.2-0.2-0.3-0.3c-1.6-1.6-3.9-2.6-6.6-2.7L339,438.5C339,438.5,339,438.5,339,438.5L339,438.5z M348.8,455.6
                                                        c-2.4,0-4.5-0.7-6.1-2.1c-1.7-1.5-2.7-3.7-2.9-6.3l-0.4-7.8l8,0.4c2.6,0.1,4.8,1.1,6.3,2.7c1.6,1.8,2.3,4.2,2.1,7.1
                                                        l-0.3,5.3l-5.3,0.5C349.8,455.6,349.3,455.6,348.8,455.6L348.8,455.6z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M336.5,424c1.6,1.6,2.6,3.9,2.7,6.5l0.4,8.3c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.1-0.4,0.1
                                                        l-8.5-0.4c-2.9-0.1-5.3-1.2-6.9-3.1c-1.8-2-2.6-4.6-2.4-7.8l0.4-5.7c0-0.2,0.2-0.4,0.4-0.4l5.7-0.6
                                                        c3.3-0.3,6.1,0.4,8.2,2.2C336.2,423.7,336.3,423.8,336.5,424z M338.7,438.3l-0.4-7.8c-0.1-2.7-1.1-4.8-2.9-6.3
                                                        c-1.9-1.6-4.5-2.3-7.5-2l-5.3,0.5l-0.3,5.3c-0.2,2.9,0.6,5.3,2.1,7.1c1.5,1.7,3.7,2.6,6.3,2.7L338.7,438.3z"/>
                                                    <path fill="#EFE7DA" d="M329.3,421.2c-0.5,0-1,0-1.5,0.1l-5.7,0.6c-0.2,0-0.4,0.2-0.4,0.4l-0.4,5.7
                                                        c-0.2,3.1,0.6,5.8,2.4,7.8c1.7,1.9,4.1,2.9,6.9,3.1l8.5,0.4c0,0,0,0,0,0c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.4
                                                        l-0.4-8.3c-0.1-2.7-1.1-4.9-2.7-6.5c-0.2-0.2-0.3-0.3-0.5-0.5C334.2,422,331.9,421.2,329.3,421.2L329.3,421.2z
                                                        M338.7,438.3l-8-0.4c-2.6-0.1-4.8-1.1-6.3-2.7c-1.6-1.8-2.3-4.2-2.1-7.1l0.3-5.3l5.3-0.5c0.5,0,1-0.1,1.4-0.1
                                                        c2.4,0,4.5,0.7,6.1,2.1c1.7,1.5,2.7,3.7,2.9,6.3L338.7,438.3L338.7,438.3z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M323.2,422.3l32.3,32.3c0.2,0.2,0.2,0.5,0,0.7c-0.2,0.2-0.5,0.2-0.7,0L322.5,423
                                                    c-0.2-0.2-0.2-0.5,0-0.7C322.7,422.2,323,422.2,323.2,422.3z"/>
                                                <path fill="#EFE7DA" d="M322.9,422.2c-0.1,0-0.2,0-0.3,0.1c-0.2,0.2-0.2,0.5,0,0.7l32.3,32.3c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1c0.2-0.2,0.2-0.5,0-0.7l-32.3-32.3C323.1,422.3,323,422.2,322.9,422.2L322.9,422.2z"/>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M355.2,422.7c0.2,0.2,0.2,0.5,0,0.7l-31.9,31.9c-0.2,0.2-0.5,0.2-0.7,0c-0.2-0.2-0.2-0.5,0-0.7
                                                    l31.9-31.9C354.7,422.5,355,422.5,355.2,422.7z"/>
                                                <path fill="#EFE7DA" d="M354.8,422.6c-0.1,0-0.2,0-0.3,0.1l-31.9,31.9c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1l31.9-31.9c0.2-0.2,0.2-0.5,0-0.7C355.1,422.6,355,422.6,354.8,422.6L354.8,422.6z"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M356.2,456.1c0.1,0.1,0.1,0.2,0.1,0.3l0.6,5.7c0.3,3.3-0.4,6.1-2.2,8.2c-1.7,1.9-4.1,3-7,3.2
                                                        l-8.3,0.4c-0.1,0-0.3,0-0.4-0.1c0,0,0,0,0,0c-0.1-0.1-0.1-0.2-0.1-0.3l0.4-8.5c0.1-2.9,1.2-5.3,3.1-6.9
                                                        c2-1.8,4.6-2.6,7.8-2.4l5.7,0.4C356,456,356.1,456,356.2,456.1z M339.9,473l7.8-0.4c2.7-0.1,4.8-1.1,6.3-2.9
                                                        c1.6-1.9,2.3-4.5,2-7.5l-0.5-5.3l-5.3-0.3c-2.9-0.2-5.3,0.6-7.1,2.1c-1.7,1.5-2.6,3.7-2.7,6.3L339.9,473z"/>
                                                    <path fill="#EFE7DA" d="M349.3,455.6c-2.7,0-5.1,0.8-6.9,2.4c-1.9,1.7-2.9,4.1-3.1,6.9l-0.4,8.5c0,0.1,0,0.3,0.1,0.3
                                                        c0,0,0,0,0,0c0.1,0.1,0.2,0.1,0.3,0.1c0,0,0,0,0,0l8.3-0.4c2.9-0.2,5.3-1.3,7-3.2c1.8-2.1,2.5-4.9,2.2-8.2l-0.6-5.7
                                                        c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.1l-5.7-0.4C349.9,455.6,349.6,455.6,349.3,455.6L349.3,455.6z M339.9,473
                                                        l0.4-8c0.1-2.6,1.1-4.8,2.7-6.3c1.6-1.4,3.7-2.2,6.2-2.2c0.3,0,0.6,0,0.9,0l5.3,0.3l0.5,5.3c0.3,3-0.4,5.6-2,7.5
                                                        c-1.5,1.7-3.7,2.7-6.3,2.9L339.9,473L339.9,473z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M339.6,473c0.1,0.1,0.1,0.2,0.1,0.3l-0.4,8.5c-0.1,2.9-1.2,5.3-3.1,6.9c-2,1.8-4.6,2.6-7.8,2.4
                                                        l-5.7-0.4c-0.2,0-0.4-0.2-0.4-0.4l-0.6-5.7c-0.3-3.3,0.4-6.1,2.2-8.2c1.7-1.9,4.1-3,7-3.2l8.3-0.4
                                                        C339.4,472.8,339.5,472.9,339.6,473z M323.3,489.8l5.3,0.3c2.9,0.2,5.3-0.6,7.1-2.1c1.7-1.5,2.6-3.7,2.7-6.3l0.4-8
                                                        l-7.8,0.4c-2.7,0.1-4.8,1.1-6.3,2.9c-1.6,1.9-2.3,4.5-2,7.5L323.3,489.8z"/>
                                                    <path fill="#EFE7DA" d="M339.3,472.8C339.3,472.8,339.3,472.8,339.3,472.8l-8.3,0.4c-2.9,0.1-5.3,1.3-7,3.2
                                                        c-1.8,2.1-2.5,4.9-2.2,8.2l0.6,5.7c0,0.2,0.2,0.4,0.4,0.4l5.7,0.4c0.3,0,0.6,0,0.9,0c2.7,0,5.1-0.8,6.9-2.4
                                                        c1.9-1.7,2.9-4.1,3.1-6.9l0.4-8.5c0-0.1,0-0.3-0.1-0.3C339.5,472.9,339.4,472.8,339.3,472.8L339.3,472.8z M338.8,473.8
                                                        l-0.4,8c-0.1,2.6-1.1,4.8-2.7,6.3c-1.6,1.4-3.7,2.2-6.2,2.2c-0.3,0-0.6,0-0.9,0l-5.3-0.3l-0.5-5.3c-0.3-3,0.4-5.6,2-7.5
                                                        c1.5-1.7,3.7-2.7,6.3-2.9L338.8,473.8L338.8,473.8z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M354.4,476.1c0.1,0.1,0.2,0.2,0.3,0.3c1.8,2,2.6,4.6,2.4,7.8l-0.4,5.7c0,0.2-0.2,0.4-0.4,0.4
                                                        l-5.7,0.6c-3.3,0.3-6.1-0.4-8.2-2.2c-1.9-1.7-3-4.1-3.2-7l-0.4-8.3c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.2-0.1,0.4-0.1l8.5,0.4
                                                        C350.5,473.5,352.8,474.4,354.4,476.1z M355.8,489.5l0.3-5.3c0.2-2.9-0.6-5.3-2.1-7.1c-1.5-1.7-3.7-2.6-6.3-2.7l-8-0.4
                                                        l0.4,7.8c0.1,2.7,1.1,4.8,2.9,6.3c1.9,1.6,4.5,2.3,7.5,2L355.8,489.5z"/>
                                                    <path fill="#EFE7DA" d="M339.3,473c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.4l0.4,8.3c0.2,2.9,1.3,5.3,3.2,7
                                                        c1.8,1.5,4.1,2.3,6.7,2.3c0.5,0,1,0,1.5-0.1l5.7-0.6c0.2,0,0.4-0.2,0.4-0.4l0.4-5.7c0.2-3.1-0.6-5.8-2.4-7.8
                                                        c-0.1-0.1-0.2-0.2-0.3-0.3c-1.6-1.6-3.9-2.6-6.6-2.7L339.3,473C339.3,473,339.3,473,339.3,473L339.3,473z M349.2,490.1
                                                        c-2.4,0-4.5-0.7-6.1-2.1c-1.7-1.5-2.7-3.7-2.9-6.3l-0.4-7.8l8,0.4c2.6,0.1,4.8,1.1,6.3,2.7c1.6,1.8,2.3,4.2,2.1,7.1
                                                        l-0.3,5.3l-5.3,0.5C350.1,490.1,349.6,490.1,349.2,490.1L349.2,490.1z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M336.8,458.5c1.6,1.6,2.6,3.9,2.7,6.5l0.4,8.3c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.1-0.4,0.1
                                                        l-8.5-0.4c-2.9-0.1-5.3-1.2-6.9-3.1c-1.8-2-2.6-4.6-2.4-7.8l0.4-5.7c0-0.2,0.2-0.4,0.4-0.4l5.7-0.6
                                                        c3.3-0.3,6.1,0.4,8.2,2.2C336.5,458.1,336.6,458.3,336.8,458.5z M339,472.8l-0.4-7.8c-0.1-2.7-1.1-4.8-2.9-6.3
                                                        c-1.9-1.6-4.5-2.3-7.5-2l-5.3,0.5l-0.3,5.3c-0.2,2.9,0.6,5.3,2.1,7.1c1.5,1.7,3.7,2.6,6.3,2.7L339,472.8z"/>
                                                    <path fill="#EFE7DA" d="M329.6,455.7c-0.5,0-1,0-1.5,0.1l-5.7,0.6c-0.2,0-0.4,0.2-0.4,0.4l-0.4,5.7
                                                        c-0.2,3.1,0.6,5.8,2.4,7.8c1.7,1.9,4.1,2.9,6.9,3.1l8.5,0.4c0,0,0,0,0,0c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.4
                                                        l-0.4-8.3c-0.1-2.7-1.1-4.9-2.7-6.5c-0.2-0.2-0.3-0.3-0.5-0.5C334.5,456.5,332.2,455.7,329.6,455.7L329.6,455.7z
                                                        M339,472.8l-8-0.4c-2.6-0.1-4.8-1.1-6.3-2.7c-1.6-1.8-2.3-4.2-2.1-7.1l0.3-5.3l5.3-0.5c0.5,0,1-0.1,1.4-0.1
                                                        c2.4,0,4.5,0.7,6.1,2.1c1.7,1.5,2.7,3.7,2.9,6.3L339,472.8L339,472.8z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M323.5,456.8l32.3,32.3c0.2,0.2,0.2,0.5,0,0.7c-0.2,0.2-0.5,0.2-0.7,0l-32.3-32.3
                                                    c-0.2-0.2-0.2-0.5,0-0.7C323,456.7,323.3,456.7,323.5,456.8z"/>
                                                <path fill="#EFE7DA" d="M323.2,456.7c-0.1,0-0.2,0-0.3,0.1c-0.2,0.2-0.2,0.5,0,0.7l32.3,32.3c0.1,0.1,0.2,0.1,0.3,0.1
                                                    s0.2,0,0.3-0.1c0.2-0.2,0.2-0.5,0-0.7l-32.3-32.3C323.4,456.7,323.3,456.7,323.2,456.7L323.2,456.7z"/>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M355.5,457.2c0.2,0.2,0.2,0.5,0,0.7l-31.9,31.9c-0.2,0.2-0.5,0.2-0.7,0c-0.2-0.2-0.2-0.5,0-0.7
                                                    l31.9-31.9C355,457,355.3,457,355.5,457.2z"/>
                                                <path fill="#EFE7DA" d="M355.1,457.1c-0.1,0-0.2,0-0.3,0.1l-31.9,31.9c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1l31.9-31.9c0.2-0.2,0.2-0.5,0-0.7C355.4,457.1,355.3,457.1,355.1,457.1L355.1,457.1z"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g opacity="0.6">
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M390.3,352.8c0.1,0.1,0.1,0.2,0.1,0.3l0.6,5.7c0.3,3.3-0.4,6.1-2.2,8.2c-1.7,1.9-4.1,3-7,3.2
                                                        l-8.3,0.4c-0.1,0-0.3,0-0.4-0.1c0,0,0,0,0,0c-0.1-0.1-0.1-0.2-0.1-0.3l0.4-8.5c0.1-2.9,1.2-5.3,3.1-6.9
                                                        c2-1.8,4.6-2.6,7.8-2.4l5.7,0.4C390.2,352.7,390.3,352.8,390.3,352.8z M374.1,369.7l7.8-0.4c2.7-0.1,4.8-1.1,6.3-2.9
                                                        c1.6-1.9,2.3-4.5,2-7.5l-0.5-5.3l-5.3-0.3c-2.9-0.2-5.3,0.6-7.1,2.1c-1.7,1.5-2.6,3.7-2.7,6.3L374.1,369.7z"/>
                                                    <path fill="#EFE7DA" d="M383.4,352.3c-2.7,0-5.1,0.8-6.9,2.4c-1.9,1.7-2.9,4.1-3.1,6.9l-0.4,8.5c0,0.1,0,0.3,0.1,0.3
                                                        c0,0,0,0,0,0c0.1,0.1,0.2,0.1,0.3,0.1c0,0,0,0,0,0l8.3-0.4c2.9-0.2,5.3-1.3,7-3.2c1.8-2.1,2.5-4.9,2.2-8.2l-0.6-5.7
                                                        c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.1l-5.7-0.4C384,352.3,383.7,352.3,383.4,352.3L383.4,352.3z M374.1,369.7
                                                        l0.4-8c0.1-2.6,1.1-4.8,2.7-6.3c1.6-1.4,3.7-2.2,6.2-2.2c0.3,0,0.6,0,0.9,0l5.3,0.3l0.5,5.3c0.3,3-0.4,5.6-2,7.5
                                                        c-1.5,1.7-3.7,2.7-6.3,2.9L374.1,369.7L374.1,369.7z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M373.8,369.7c0.1,0.1,0.1,0.2,0.1,0.3l-0.4,8.5c-0.1,2.9-1.2,5.3-3.1,6.9c-2,1.8-4.6,2.6-7.8,2.4
                                                        l-5.7-0.4c-0.2,0-0.4-0.2-0.4-0.4l-0.6-5.7c-0.3-3.3,0.4-6.1,2.2-8.2c1.7-1.9,4.1-3,7-3.2l8.3-0.4
                                                        C373.5,369.5,373.7,369.6,373.8,369.7z M357.4,386.6l5.3,0.3c2.9,0.2,5.3-0.6,7.1-2.1c1.7-1.5,2.6-3.7,2.7-6.3l0.4-8
                                                        l-7.8,0.4c-2.7,0.1-4.8,1.1-6.3,2.9c-1.6,1.9-2.3,4.5-2,7.5L357.4,386.6z"/>
                                                    <path fill="#EFE7DA" d="M373.4,369.5C373.4,369.5,373.4,369.5,373.4,369.5l-8.3,0.4c-2.9,0.2-5.3,1.3-7,3.2
                                                        c-1.8,2.1-2.5,4.9-2.2,8.2l0.6,5.7c0,0.2,0.2,0.4,0.4,0.4l5.7,0.4c0.3,0,0.6,0,0.9,0c2.7,0,5.1-0.8,6.9-2.4
                                                        c1.9-1.7,2.9-4.1,3.1-6.9l0.4-8.5c0-0.1,0-0.3-0.1-0.3C373.7,369.6,373.5,369.5,373.4,369.5L373.4,369.5z M372.9,370.5
                                                        l-0.4,8c-0.1,2.6-1.1,4.8-2.7,6.3c-1.6,1.4-3.7,2.2-6.2,2.2c-0.3,0-0.6,0-0.9,0l-5.3-0.3l-0.5-5.3c-0.3-3,0.4-5.6,2-7.5
                                                        c1.5-1.7,3.7-2.7,6.3-2.9L372.9,370.5L372.9,370.5z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M388.6,372.8c0.1,0.1,0.2,0.2,0.3,0.3c1.8,2,2.6,4.6,2.4,7.8l-0.4,5.7c0,0.2-0.2,0.4-0.4,0.4
                                                        l-5.7,0.6c-3.3,0.3-6.1-0.4-8.2-2.2c-1.9-1.7-3-4.1-3.2-7l-0.4-8.3c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.2-0.1,0.4-0.1l8.5,0.4
                                                        C384.6,370.2,386.9,371.1,388.6,372.8z M390,386.2l0.3-5.3c0.2-2.9-0.6-5.3-2.1-7.1c-1.5-1.7-3.7-2.6-6.3-2.7l-8-0.4
                                                        l0.4,7.8c0.1,2.7,1.1,4.8,2.9,6.3c1.9,1.6,4.5,2.3,7.5,2L390,386.2z"/>
                                                    <path fill="#EFE7DA" d="M373.4,369.7c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.4l0.4,8.3c0.2,2.9,1.3,5.3,3.2,7
                                                        c1.8,1.5,4.1,2.3,6.7,2.3c0.5,0,1,0,1.5-0.1l5.7-0.6c0.2,0,0.4-0.2,0.4-0.4l0.4-5.7c0.2-3.1-0.6-5.8-2.4-7.8
                                                        c-0.1-0.1-0.2-0.2-0.3-0.3c-1.6-1.6-3.9-2.6-6.6-2.7L373.4,369.7C373.4,369.7,373.4,369.7,373.4,369.7L373.4,369.7z
                                                        M383.3,386.8c-2.4,0-4.5-0.7-6.1-2.1c-1.7-1.5-2.7-3.7-2.9-6.3l-0.4-7.8l8,0.4c2.6,0.1,4.8,1.1,6.3,2.7
                                                        c1.6,1.8,2.3,4.2,2.1,7.1l-0.3,5.3l-5.3,0.5C384.2,386.8,383.7,386.8,383.3,386.8L383.3,386.8z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M370.9,355.2c1.6,1.6,2.6,3.9,2.7,6.5l0.4,8.3c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.1-0.4,0.1
                                                        l-8.5-0.4c-2.9-0.1-5.3-1.2-6.9-3.1c-1.8-2-2.6-4.6-2.4-7.8l0.4-5.7c0-0.2,0.2-0.4,0.4-0.4l5.7-0.6
                                                        c3.3-0.3,6.1,0.4,8.2,2.2C370.6,354.9,370.8,355,370.9,355.2z M373.1,369.5l-0.4-7.8c-0.1-2.7-1.1-4.8-2.9-6.3
                                                        c-1.9-1.6-4.5-2.3-7.5-2L357,354l-0.3,5.3c-0.2,2.9,0.6,5.3,2.1,7.1c1.5,1.7,3.7,2.6,6.3,2.7L373.1,369.5z"/>
                                                    <path fill="#EFE7DA" d="M363.7,352.4c-0.5,0-1,0-1.5,0.1l-5.7,0.6c-0.2,0-0.4,0.2-0.4,0.4l-0.4,5.7
                                                        c-0.2,3.1,0.6,5.8,2.4,7.8c1.7,1.9,4.1,2.9,6.9,3.1l8.5,0.4c0,0,0,0,0,0c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.4
                                                        l-0.4-8.3c-0.1-2.7-1.1-4.9-2.7-6.5c-0.2-0.2-0.3-0.3-0.5-0.5C368.7,353.2,366.4,352.4,363.7,352.4L363.7,352.4z
                                                        M373.1,369.5l-8-0.4c-2.6-0.1-4.8-1.1-6.3-2.7c-1.6-1.8-2.3-4.2-2.1-7.1l0.3-5.3l5.3-0.5c0.5,0,1-0.1,1.4-0.1
                                                        c2.4,0,4.5,0.7,6.1,2.1c1.7,1.5,2.7,3.7,2.9,6.3L373.1,369.5L373.1,369.5z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M357.6,353.5l32.3,32.3c0.2,0.2,0.2,0.5,0,0.7c-0.2,0.2-0.5,0.2-0.7,0L357,354.2
                                                    c-0.2-0.2-0.2-0.5,0-0.7C357.2,353.4,357.4,353.4,357.6,353.5z"/>
                                                <path fill="#EFE7DA" d="M357.3,353.4c-0.1,0-0.2,0-0.3,0.1c-0.2,0.2-0.2,0.5,0,0.7l32.3,32.3c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1c0.2-0.2,0.2-0.5,0-0.7l-32.3-32.3C357.5,353.4,357.4,353.4,357.3,353.4L357.3,353.4z"/>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M389.6,353.9c0.2,0.2,0.2,0.5,0,0.7l-31.9,31.9c-0.2,0.2-0.5,0.2-0.7,0c-0.2-0.2-0.2-0.5,0-0.7
                                                    l31.9-31.9C389.1,353.7,389.4,353.7,389.6,353.9z"/>
                                                <path fill="#EFE7DA" d="M389.3,353.8c-0.1,0-0.2,0-0.3,0.1l-31.9,31.9c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1l31.9-31.9c0.2-0.2,0.2-0.5,0-0.7C389.5,353.8,389.4,353.8,389.3,353.8L389.3,353.8z"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M390.7,387.3c0.1,0.1,0.1,0.2,0.1,0.3l0.6,5.7c0.3,3.3-0.4,6.1-2.2,8.2c-1.7,1.9-4.1,3-7,3.2
                                                        l-8.3,0.4c-0.1,0-0.3,0-0.4-0.1c0,0,0,0,0,0c-0.1-0.1-0.1-0.2-0.1-0.3l0.4-8.5c0.1-2.9,1.2-5.3,3.1-6.9
                                                        c2-1.8,4.6-2.6,7.8-2.4l5.7,0.4C390.5,387.2,390.6,387.2,390.7,387.3z M374.4,404.2l7.8-0.4c2.7-0.1,4.8-1.1,6.3-2.9
                                                        c1.6-1.9,2.3-4.5,2-7.5l-0.5-5.3l-5.3-0.3c-2.9-0.2-5.3,0.6-7.1,2.1c-1.7,1.5-2.6,3.7-2.7,6.3L374.4,404.2z"/>
                                                    <path fill="#EFE7DA" d="M383.7,386.8c-2.7,0-5.1,0.8-6.9,2.4c-1.9,1.7-2.9,4.1-3.1,6.9l-0.4,8.5c0,0.1,0,0.3,0.1,0.3
                                                        c0,0,0,0,0,0c0.1,0.1,0.2,0.1,0.3,0.1c0,0,0,0,0,0l8.3-0.4c2.9-0.1,5.3-1.3,7-3.2c1.8-2.1,2.5-4.9,2.2-8.2l-0.6-5.7
                                                        c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.1l-5.7-0.4C384.4,386.8,384,386.8,383.7,386.8L383.7,386.8z M374.4,404.2
                                                        l0.4-8c0.1-2.6,1.1-4.8,2.7-6.3c1.6-1.4,3.7-2.2,6.2-2.2c0.3,0,0.6,0,0.9,0l5.3,0.3l0.5,5.3c0.3,3-0.4,5.6-2,7.5
                                                        c-1.5,1.7-3.7,2.7-6.3,2.9L374.4,404.2L374.4,404.2z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M374.1,404.2c0.1,0.1,0.1,0.2,0.1,0.3l-0.4,8.5c-0.1,2.9-1.2,5.3-3.1,6.9c-2,1.8-4.6,2.6-7.8,2.4
                                                        l-5.7-0.4c-0.2,0-0.4-0.2-0.4-0.4l-0.6-5.7c-0.3-3.3,0.4-6.1,2.2-8.2c1.7-1.9,4.1-3,7-3.2l8.3-0.4
                                                        C373.8,404,374,404.1,374.1,404.2z M357.7,421l5.3,0.3c2.9,0.2,5.3-0.6,7.1-2.1c1.7-1.5,2.6-3.7,2.7-6.3l0.4-8l-7.8,0.4
                                                        c-2.7,0.1-4.8,1.1-6.3,2.9c-1.6,1.9-2.3,4.5-2,7.5L357.7,421z"/>
                                                    <path fill="#EFE7DA" d="M373.7,404C373.7,404,373.7,404,373.7,404l-8.3,0.4c-2.9,0.2-5.3,1.3-7,3.2
                                                        c-1.8,2.1-2.5,4.9-2.2,8.2l0.6,5.7c0,0.2,0.2,0.4,0.4,0.4l5.7,0.4c0.3,0,0.6,0,0.9,0c2.7,0,5.1-0.8,6.9-2.4
                                                        c1.9-1.7,2.9-4.1,3.1-6.9l0.4-8.5c0-0.1,0-0.3-0.1-0.3C374,404.1,373.9,404,373.7,404L373.7,404z M373.2,405l-0.4,8
                                                        c-0.1,2.6-1.1,4.8-2.7,6.3c-1.6,1.4-3.7,2.2-6.2,2.2c-0.3,0-0.6,0-0.9,0l-5.3-0.3l-0.5-5.3c-0.3-3,0.4-5.6,2-7.5
                                                        c1.5-1.7,3.7-2.7,6.3-2.9L373.2,405L373.2,405z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M388.9,407.3c0.1,0.1,0.2,0.2,0.3,0.3c1.8,2,2.6,4.6,2.4,7.8l-0.4,5.7c0,0.2-0.2,0.4-0.4,0.4
                                                        l-5.7,0.6c-3.3,0.3-6.1-0.4-8.2-2.2c-1.9-1.7-3-4.1-3.2-7l-0.4-8.3c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.2-0.1,0.4-0.1l8.5,0.4
                                                        C385,404.7,387.2,405.6,388.9,407.3z M390.3,420.7l0.3-5.3c0.2-2.9-0.6-5.3-2.1-7.1c-1.5-1.7-3.7-2.6-6.3-2.7l-8-0.4
                                                        l0.4,7.8c0.1,2.7,1.1,4.8,2.9,6.3c1.9,1.6,4.5,2.3,7.5,2L390.3,420.7z"/>
                                                    <path fill="#EFE7DA" d="M373.7,404.2c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.4l0.4,8.3c0.2,2.9,1.3,5.3,3.2,7
                                                        c1.8,1.5,4.1,2.3,6.7,2.3c0.5,0,1,0,1.5-0.1l5.7-0.6c0.2,0,0.4-0.2,0.4-0.4l0.4-5.7c0.2-3.1-0.6-5.8-2.4-7.8
                                                        c-0.1-0.1-0.2-0.2-0.3-0.3c-1.6-1.6-3.9-2.6-6.6-2.7L373.7,404.2C373.7,404.2,373.7,404.2,373.7,404.2L373.7,404.2z
                                                        M383.6,421.3c-2.4,0-4.5-0.7-6.1-2.1c-1.7-1.5-2.7-3.7-2.9-6.3l-0.4-7.8l8,0.4c2.6,0.1,4.8,1.1,6.3,2.7
                                                        c1.6,1.8,2.3,4.2,2.1,7.1l-0.3,5.3l-5.3,0.5C384.5,421.2,384.1,421.3,383.6,421.3L383.6,421.3z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M371.2,389.7c1.6,1.6,2.6,3.9,2.7,6.5l0.4,8.3c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.1-0.4,0.1
                                                        l-8.5-0.4c-2.9-0.1-5.3-1.2-6.9-3.1c-1.8-2-2.6-4.6-2.4-7.8l0.4-5.7c0-0.2,0.2-0.4,0.4-0.4l5.7-0.6
                                                        c3.3-0.3,6.1,0.4,8.2,2.2C370.9,389.3,371.1,389.5,371.2,389.7z M373.4,404l-0.4-7.8c-0.1-2.7-1.1-4.8-2.9-6.3
                                                        c-1.9-1.6-4.5-2.3-7.5-2l-5.3,0.5l-0.3,5.3c-0.2,2.9,0.6,5.3,2.1,7.1c1.5,1.7,3.7,2.6,6.3,2.7L373.4,404z"/>
                                                    <path fill="#EFE7DA" d="M364,386.9c-0.5,0-1,0-1.5,0.1l-5.7,0.6c-0.2,0-0.4,0.2-0.4,0.4l-0.4,5.7
                                                        c-0.2,3.1,0.6,5.8,2.4,7.8c1.7,1.9,4.1,2.9,6.9,3.1l8.5,0.4c0,0,0,0,0,0c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.4
                                                        l-0.4-8.3c-0.1-2.7-1.1-4.9-2.7-6.5c-0.2-0.2-0.3-0.3-0.5-0.5C369,387.7,366.7,386.9,364,386.9L364,386.9z M373.4,404
                                                        l-8-0.4c-2.6-0.1-4.8-1.1-6.3-2.7c-1.6-1.8-2.3-4.2-2.1-7.1l0.3-5.3l5.3-0.5c0.5,0,1-0.1,1.4-0.1c2.4,0,4.5,0.7,6.1,2.1
                                                        c1.7,1.5,2.7,3.7,2.9,6.3L373.4,404L373.4,404z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M357.9,388l32.3,32.3c0.2,0.2,0.2,0.5,0,0.7c-0.2,0.2-0.5,0.2-0.7,0l-32.3-32.3
                                                    c-0.2-0.2-0.2-0.5,0-0.7C357.5,387.8,357.8,387.8,357.9,388z"/>
                                                <path fill="#EFE7DA" d="M357.6,387.9c-0.1,0-0.2,0-0.3,0.1c-0.2,0.2-0.2,0.5,0,0.7l32.3,32.3c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1c0.2-0.2,0.2-0.5,0-0.7L357.9,388C357.8,387.9,357.7,387.9,357.6,387.9L357.6,387.9z"/>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M389.9,388.4c0.2,0.2,0.2,0.5,0,0.7L358,420.9c-0.2,0.2-0.5,0.2-0.7,0c-0.2-0.2-0.2-0.5,0-0.7
                                                    l31.9-31.9C389.4,388.2,389.7,388.2,389.9,388.4z"/>
                                                <path fill="#EFE7DA" d="M389.6,388.3c-0.1,0-0.2,0-0.3,0.1l-31.9,31.9c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1
                                                    s0.2,0,0.3-0.1l31.9-31.9c0.2-0.2,0.2-0.5,0-0.7C389.8,388.3,389.7,388.3,389.6,388.3L389.6,388.3z"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M390.9,421.6c0.1,0.1,0.1,0.2,0.1,0.3l0.6,5.7c0.3,3.3-0.4,6.1-2.2,8.2c-1.7,1.9-4.1,3-7,3.2
                                                        l-8.3,0.4c-0.1,0-0.3,0-0.4-0.1c0,0,0,0,0,0c-0.1-0.1-0.1-0.2-0.1-0.3l0.4-8.5c0.1-2.9,1.2-5.3,3.1-6.9
                                                        c2-1.8,4.6-2.6,7.8-2.4l5.7,0.4C390.7,421.5,390.8,421.6,390.9,421.6z M374.6,438.5l7.8-0.4c2.7-0.1,4.8-1.1,6.3-2.9
                                                        c1.6-1.9,2.3-4.5,2-7.5l-0.5-5.3l-5.3-0.3c-2.9-0.2-5.3,0.6-7.1,2.1c-1.7,1.5-2.6,3.7-2.7,6.3L374.6,438.5z"/>
                                                    <path fill="#EFE7DA" d="M384,421.1c-2.7,0-5.1,0.8-6.9,2.4c-1.9,1.7-2.9,4.1-3.1,6.9l-0.4,8.5c0,0.1,0,0.3,0.1,0.3
                                                        c0,0,0,0,0,0c0.1,0.1,0.2,0.1,0.3,0.1c0,0,0,0,0,0l8.3-0.4c2.9-0.1,5.3-1.3,7-3.2c1.8-2.1,2.5-4.9,2.2-8.2l-0.6-5.7
                                                        c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.1l-5.7-0.4C384.6,421.1,384.3,421.1,384,421.1L384,421.1z M374.6,438.5
                                                        l0.4-8c0.1-2.6,1.1-4.8,2.7-6.3c1.6-1.4,3.7-2.2,6.2-2.2c0.3,0,0.6,0,0.9,0l5.3,0.3l0.5,5.3c0.3,3-0.4,5.6-2,7.5
                                                        c-1.5,1.7-3.7,2.7-6.3,2.9L374.6,438.5L374.6,438.5z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M374.3,438.5c0.1,0.1,0.1,0.2,0.1,0.3l-0.4,8.5c-0.1,2.9-1.2,5.3-3.1,6.9c-2,1.8-4.6,2.6-7.8,2.4
                                                        l-5.7-0.4c-0.2,0-0.4-0.2-0.4-0.4l-0.6-5.7c-0.3-3.3,0.4-6.1,2.2-8.2c1.7-1.9,4.1-3,7-3.2l8.3-0.4
                                                        C374.1,438.3,374.2,438.4,374.3,438.5z M358,455.4l5.3,0.3c2.9,0.2,5.3-0.6,7.1-2.1c1.7-1.5,2.6-3.7,2.7-6.3l0.4-8
                                                        l-7.8,0.4c-2.7,0.1-4.8,1.1-6.3,2.9c-1.6,1.9-2.3,4.5-2,7.5L358,455.4z"/>
                                                    <path fill="#EFE7DA" d="M374,438.3C374,438.3,373.9,438.3,374,438.3l-8.3,0.4c-2.9,0.2-5.3,1.3-7,3.2
                                                        c-1.8,2.1-2.5,4.9-2.2,8.2l0.6,5.7c0,0.2,0.2,0.4,0.4,0.4l5.7,0.4c0.3,0,0.6,0,0.9,0c2.7,0,5.1-0.8,6.9-2.4
                                                        c1.9-1.7,2.9-4.1,3.1-6.9l0.4-8.5c0-0.1,0-0.3-0.1-0.3C374.2,438.4,374.1,438.3,374,438.3L374,438.3z M373.5,439.3l-0.4,8
                                                        c-0.1,2.6-1.1,4.8-2.7,6.3c-1.6,1.4-3.7,2.2-6.2,2.2c-0.3,0-0.6,0-0.9,0l-5.3-0.3l-0.5-5.3c-0.3-3,0.4-5.6,2-7.5
                                                        c1.5-1.7,3.7-2.7,6.3-2.9L373.5,439.3L373.5,439.3z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M389.1,441.6c0.1,0.1,0.2,0.2,0.3,0.3c1.8,2,2.6,4.6,2.4,7.8l-0.4,5.7c0,0.2-0.2,0.4-0.4,0.4
                                                        l-5.7,0.6c-3.3,0.3-6.1-0.4-8.2-2.2c-1.9-1.7-3-4.1-3.2-7l-0.4-8.3c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.2-0.1,0.4-0.1l8.5,0.4
                                                        C385.2,439,387.4,440,389.1,441.6z M390.5,455l0.3-5.3c0.2-2.9-0.6-5.3-2.1-7.1c-1.5-1.7-3.7-2.6-6.3-2.7l-8-0.4l0.4,7.8
                                                        c0.1,2.7,1.1,4.8,2.9,6.3c1.9,1.6,4.5,2.3,7.5,2L390.5,455z"/>
                                                    <path fill="#EFE7DA" d="M374,438.5c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.4l0.4,8.3c0.2,2.9,1.3,5.3,3.2,7
                                                        c1.8,1.5,4.1,2.3,6.7,2.3c0.5,0,1,0,1.5-0.1l5.7-0.6c0.2,0,0.4-0.2,0.4-0.4l0.4-5.7c0.2-3.1-0.6-5.8-2.4-7.8
                                                        c-0.1-0.1-0.2-0.2-0.3-0.3c-1.6-1.6-3.9-2.6-6.6-2.7L374,438.5C374,438.5,374,438.5,374,438.5L374,438.5z M383.8,455.6
                                                        c-2.4,0-4.5-0.7-6.1-2.1c-1.7-1.5-2.7-3.7-2.9-6.3l-0.4-7.8l8,0.4c2.6,0.1,4.8,1.1,6.3,2.7c1.6,1.8,2.3,4.2,2.1,7.1
                                                        l-0.3,5.3l-5.3,0.5C384.8,455.6,384.3,455.6,383.8,455.6L383.8,455.6z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M371.5,424c1.6,1.6,2.6,3.9,2.7,6.5l0.4,8.3c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.1-0.4,0.1
                                                        l-8.5-0.4c-2.9-0.1-5.3-1.2-6.9-3.1c-1.8-2-2.6-4.6-2.4-7.8l0.4-5.7c0-0.2,0.2-0.4,0.4-0.4l5.7-0.6
                                                        c3.3-0.3,6.1,0.4,8.2,2.2C371.1,423.7,371.3,423.8,371.5,424z M373.6,438.3l-0.4-7.8c-0.1-2.7-1.1-4.8-2.9-6.3
                                                        c-1.9-1.6-4.5-2.3-7.5-2l-5.3,0.5l-0.3,5.3c-0.2,2.9,0.6,5.3,2.1,7.1c1.5,1.7,3.7,2.6,6.3,2.7L373.6,438.3z"/>
                                                    <path fill="#EFE7DA" d="M364.3,421.2c-0.5,0-1,0-1.5,0.1l-5.7,0.6c-0.2,0-0.4,0.2-0.4,0.4l-0.4,5.7
                                                        c-0.2,3.1,0.6,5.8,2.4,7.8c1.7,1.9,4.1,2.9,6.9,3.1l8.5,0.4c0,0,0,0,0,0c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.4
                                                        l-0.4-8.3c-0.1-2.7-1.1-4.9-2.7-6.5c-0.2-0.2-0.3-0.3-0.5-0.5C369.2,422,366.9,421.2,364.3,421.2L364.3,421.2z
                                                        M373.6,438.3l-8-0.4c-2.6-0.1-4.8-1.1-6.3-2.7c-1.6-1.8-2.3-4.2-2.1-7.1l0.3-5.3l5.3-0.5c0.5,0,1-0.1,1.4-0.1
                                                        c2.4,0,4.5,0.7,6.1,2.1c1.7,1.5,2.7,3.7,2.9,6.3L373.6,438.3L373.6,438.3z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M358.2,422.3l32.3,32.3c0.2,0.2,0.2,0.5,0,0.7c-0.2,0.2-0.5,0.2-0.7,0L357.5,423
                                                    c-0.2-0.2-0.2-0.5,0-0.7C357.7,422.2,358,422.2,358.2,422.3z"/>
                                                <path fill="#EFE7DA" d="M357.8,422.2c-0.1,0-0.2,0-0.3,0.1c-0.2,0.2-0.2,0.5,0,0.7l32.3,32.3c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1c0.2-0.2,0.2-0.5,0-0.7l-32.3-32.3C358.1,422.3,358,422.2,357.8,422.2L357.8,422.2z"/>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M390.1,422.7c0.2,0.2,0.2,0.5,0,0.7l-31.9,31.9c-0.2,0.2-0.5,0.2-0.7,0c-0.2-0.2-0.2-0.5,0-0.7
                                                    l31.9-31.9C389.7,422.5,390,422.5,390.1,422.7z"/>
                                                <path fill="#EFE7DA" d="M389.8,422.6c-0.1,0-0.2,0-0.3,0.1l-31.9,31.9c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1l31.9-31.9c0.2-0.2,0.2-0.5,0-0.7C390.1,422.6,389.9,422.6,389.8,422.6L389.8,422.6z"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M391.2,456.1c0.1,0.1,0.1,0.2,0.1,0.3l0.6,5.7c0.3,3.3-0.4,6.1-2.2,8.2c-1.7,1.9-4.1,3-7,3.2
                                                        l-8.3,0.4c-0.1,0-0.3,0-0.4-0.1c0,0,0,0,0,0c-0.1-0.1-0.1-0.2-0.1-0.3l0.4-8.5c0.1-2.9,1.2-5.3,3.1-6.9
                                                        c2-1.8,4.6-2.6,7.8-2.4l5.7,0.4C391,456,391.1,456,391.2,456.1z M374.9,473l7.8-0.4c2.7-0.1,4.8-1.1,6.3-2.9
                                                        c1.6-1.9,2.3-4.5,2-7.5l-0.5-5.3l-5.3-0.3c-2.9-0.2-5.3,0.6-7.1,2.1c-1.7,1.5-2.6,3.7-2.7,6.3L374.9,473z"/>
                                                    <path fill="#EFE7DA" d="M384.3,455.6c-2.7,0-5.1,0.8-6.9,2.4c-1.9,1.7-2.9,4.1-3.1,6.9l-0.4,8.5c0,0.1,0,0.3,0.1,0.3
                                                        c0,0,0,0,0,0c0.1,0.1,0.2,0.1,0.3,0.1c0,0,0,0,0,0l8.3-0.4c2.9-0.2,5.3-1.3,7-3.2c1.8-2.1,2.5-4.9,2.2-8.2l-0.6-5.7
                                                        c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.1l-5.7-0.4C384.9,455.6,384.6,455.6,384.3,455.6L384.3,455.6z M374.9,473
                                                        l0.4-8c0.1-2.6,1.1-4.8,2.7-6.3c1.6-1.4,3.7-2.2,6.2-2.2c0.3,0,0.6,0,0.9,0l5.3,0.3l0.5,5.3c0.3,3-0.4,5.6-2,7.5
                                                        c-1.5,1.7-3.7,2.7-6.3,2.9L374.9,473L374.9,473z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M374.6,473c0.1,0.1,0.1,0.2,0.1,0.3l-0.4,8.5c-0.1,2.9-1.2,5.3-3.1,6.9c-2,1.8-4.6,2.6-7.8,2.4
                                                        l-5.7-0.4c-0.2,0-0.4-0.2-0.4-0.4l-0.6-5.7c-0.3-3.3,0.4-6.1,2.2-8.2c1.7-1.9,4.1-3,7-3.2l8.3-0.4
                                                        C374.4,472.8,374.5,472.9,374.6,473z M358.3,489.8l5.3,0.3c2.9,0.2,5.3-0.6,7.1-2.1c1.7-1.5,2.6-3.7,2.7-6.3l0.4-8
                                                        l-7.8,0.4c-2.7,0.1-4.8,1.1-6.3,2.9c-1.6,1.9-2.3,4.5-2,7.5L358.3,489.8z"/>
                                                    <path fill="#EFE7DA" d="M374.3,472.8C374.3,472.8,374.3,472.8,374.3,472.8l-8.3,0.4c-2.9,0.1-5.3,1.3-7,3.2
                                                        c-1.8,2.1-2.5,4.9-2.2,8.2l0.6,5.7c0,0.2,0.2,0.4,0.4,0.4l5.7,0.4c0.3,0,0.6,0,0.9,0c2.7,0,5.1-0.8,6.9-2.4
                                                        c1.9-1.7,2.9-4.1,3.1-6.9l0.4-8.5c0-0.1,0-0.3-0.1-0.3C374.5,472.9,374.4,472.8,374.3,472.8L374.3,472.8z M373.8,473.8
                                                        l-0.4,8c-0.1,2.6-1.1,4.8-2.7,6.3c-1.6,1.4-3.7,2.2-6.2,2.2c-0.3,0-0.6,0-0.9,0l-5.3-0.3l-0.5-5.3c-0.3-3,0.4-5.6,2-7.5
                                                        c1.5-1.7,3.7-2.7,6.3-2.9L373.8,473.8L373.8,473.8z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M389.4,476.1c0.1,0.1,0.2,0.2,0.3,0.3c1.8,2,2.6,4.6,2.4,7.8l-0.4,5.7c0,0.2-0.2,0.4-0.4,0.4
                                                        l-5.7,0.6c-3.3,0.3-6.1-0.4-8.2-2.2c-1.9-1.7-3-4.1-3.2-7l-0.4-8.3c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.2-0.1,0.4-0.1l8.5,0.4
                                                        C385.5,473.5,387.8,474.4,389.4,476.1z M390.8,489.5l0.3-5.3c0.2-2.9-0.6-5.3-2.1-7.1c-1.5-1.7-3.7-2.6-6.3-2.7l-8-0.4
                                                        l0.4,7.8c0.1,2.7,1.1,4.8,2.9,6.3c1.9,1.6,4.5,2.3,7.5,2L390.8,489.5z"/>
                                                    <path fill="#EFE7DA" d="M374.3,473c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.4l0.4,8.3c0.2,2.9,1.3,5.3,3.2,7
                                                        c1.8,1.5,4.1,2.3,6.7,2.3c0.5,0,1,0,1.5-0.1l5.7-0.6c0.2,0,0.4-0.2,0.4-0.4l0.4-5.7c0.2-3.1-0.6-5.8-2.4-7.8
                                                        c-0.1-0.1-0.2-0.2-0.3-0.3c-1.6-1.6-3.9-2.6-6.6-2.7L374.3,473C374.3,473,374.3,473,374.3,473L374.3,473z M384.1,490.1
                                                        c-2.4,0-4.5-0.7-6.1-2.1c-1.7-1.5-2.7-3.7-2.9-6.3l-0.4-7.8l8,0.4c2.6,0.1,4.8,1.1,6.3,2.7c1.6,1.8,2.3,4.2,2.1,7.1
                                                        l-0.3,5.3l-5.3,0.5C385.1,490.1,384.6,490.1,384.1,490.1L384.1,490.1z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M371.8,458.5c1.6,1.6,2.6,3.9,2.7,6.5l0.4,8.3c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.1-0.4,0.1
                                                        l-8.5-0.4c-2.9-0.1-5.3-1.2-6.9-3.1c-1.8-2-2.6-4.6-2.4-7.8l0.4-5.7c0-0.2,0.2-0.4,0.4-0.4l5.7-0.6
                                                        c3.3-0.3,6.1,0.4,8.2,2.2C371.5,458.1,371.6,458.3,371.8,458.5z M373.9,472.8l-0.4-7.8c-0.1-2.7-1.1-4.8-2.9-6.3
                                                        c-1.9-1.6-4.5-2.3-7.5-2l-5.3,0.5l-0.3,5.3c-0.2,2.9,0.6,5.3,2.1,7.1c1.5,1.7,3.7,2.6,6.3,2.7L373.9,472.8z"/>
                                                    <path fill="#EFE7DA" d="M364.6,455.7c-0.5,0-1,0-1.5,0.1l-5.7,0.6c-0.2,0-0.4,0.2-0.4,0.4l-0.4,5.7
                                                        c-0.2,3.1,0.6,5.8,2.4,7.8c1.7,1.9,4.1,2.9,6.9,3.1l8.5,0.4c0,0,0,0,0,0c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.4
                                                        l-0.4-8.3c-0.1-2.7-1.1-4.9-2.7-6.5c-0.2-0.2-0.3-0.3-0.5-0.5C369.5,456.5,367.2,455.7,364.6,455.7L364.6,455.7z
                                                        M373.9,472.8l-8-0.4c-2.6-0.1-4.8-1.1-6.3-2.7c-1.6-1.8-2.3-4.2-2.1-7.1l0.3-5.3l5.3-0.5c0.5,0,1-0.1,1.4-0.1
                                                        c2.4,0,4.5,0.7,6.1,2.1c1.7,1.5,2.7,3.7,2.9,6.3L373.9,472.8L373.9,472.8z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M358.5,456.8l32.3,32.3c0.2,0.2,0.2,0.5,0,0.7c-0.2,0.2-0.5,0.2-0.7,0l-32.3-32.3
                                                    c-0.2-0.2-0.2-0.5,0-0.7C358,456.7,358.3,456.7,358.5,456.8z"/>
                                                <path fill="#EFE7DA" d="M358.1,456.7c-0.1,0-0.2,0-0.3,0.1c-0.2,0.2-0.2,0.5,0,0.7l32.3,32.3c0.1,0.1,0.2,0.1,0.3,0.1
                                                    s0.2,0,0.3-0.1c0.2-0.2,0.2-0.5,0-0.7l-32.3-32.3C358.4,456.7,358.3,456.7,358.1,456.7L358.1,456.7z"/>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M390.5,457.2c0.2,0.2,0.2,0.5,0,0.7l-31.9,31.9c-0.2,0.2-0.5,0.2-0.7,0c-0.2-0.2-0.2-0.5,0-0.7
                                                    l31.9-31.9C390,457,390.3,457,390.5,457.2z"/>
                                                <path fill="#EFE7DA" d="M390.1,457.1c-0.1,0-0.2,0-0.3,0.1l-31.9,31.9c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1l31.9-31.9c0.2-0.2,0.2-0.5,0-0.7C390.4,457.1,390.2,457.1,390.1,457.1L390.1,457.1z"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g opacity="0.6">
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M425.2,352.8c0.1,0.1,0.1,0.2,0.1,0.3l0.6,5.7c0.3,3.3-0.4,6.1-2.2,8.2c-1.7,1.9-4.1,3-7,3.2
                                                        l-8.3,0.4c-0.1,0-0.3,0-0.4-0.1c0,0,0,0,0,0c-0.1-0.1-0.1-0.2-0.1-0.3l0.4-8.5c0.1-2.9,1.2-5.3,3.1-6.9
                                                        c2-1.8,4.6-2.6,7.8-2.4l5.7,0.4C425,352.7,425.1,352.8,425.2,352.8z M408.9,369.7l7.8-0.4c2.7-0.1,4.8-1.1,6.3-2.9
                                                        c1.6-1.9,2.3-4.5,2-7.5l-0.5-5.3l-5.3-0.3c-2.9-0.2-5.3,0.6-7.1,2.1c-1.7,1.5-2.6,3.7-2.7,6.3L408.9,369.7z"/>
                                                    <path fill="#EFE7DA" d="M418.3,352.3c-2.7,0-5.1,0.8-6.9,2.4c-1.9,1.7-2.9,4.1-3.1,6.9l-0.4,8.5c0,0.1,0,0.3,0.1,0.3
                                                        c0,0,0,0,0,0c0.1,0.1,0.2,0.1,0.3,0.1c0,0,0,0,0,0l8.3-0.4c2.9-0.2,5.3-1.3,7-3.2c1.8-2.1,2.5-4.9,2.2-8.2l-0.6-5.7
                                                        c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.1l-5.7-0.4C418.9,352.3,418.6,352.3,418.3,352.3L418.3,352.3z
                                                        M408.9,369.7l0.4-8c0.1-2.6,1.1-4.8,2.7-6.3c1.6-1.4,3.7-2.2,6.2-2.2c0.3,0,0.6,0,0.9,0l5.3,0.3l0.5,5.3
                                                        c0.3,3-0.4,5.6-2,7.5c-1.5,1.7-3.7,2.7-6.3,2.9L408.9,369.7L408.9,369.7z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M408.6,369.7c0.1,0.1,0.1,0.2,0.1,0.3l-0.4,8.5c-0.1,2.9-1.2,5.3-3.1,6.9c-2,1.8-4.6,2.6-7.8,2.4
                                                        l-5.7-0.4c-0.2,0-0.4-0.2-0.4-0.4l-0.6-5.7c-0.3-3.3,0.4-6.1,2.2-8.2c1.7-1.9,4.1-3,7-3.2l8.3-0.4
                                                        C408.4,369.5,408.5,369.6,408.6,369.7z M392.3,386.6l5.3,0.3c2.9,0.2,5.3-0.6,7.1-2.1c1.7-1.5,2.6-3.7,2.7-6.3l0.4-8
                                                        l-7.8,0.4c-2.7,0.1-4.8,1.1-6.3,2.9c-1.6,1.9-2.3,4.5-2,7.5L392.3,386.6z"/>
                                                    <path fill="#EFE7DA" d="M408.3,369.5C408.3,369.5,408.3,369.5,408.3,369.5L400,370c-2.9,0.2-5.3,1.3-7,3.2
                                                        c-1.8,2.1-2.5,4.9-2.2,8.2l0.6,5.7c0,0.2,0.2,0.4,0.4,0.4l5.7,0.4c0.3,0,0.6,0,0.9,0c2.7,0,5.1-0.8,6.9-2.4
                                                        c1.9-1.7,2.9-4.1,3.1-6.9l0.4-8.5c0-0.1,0-0.3-0.1-0.3C408.5,369.6,408.4,369.5,408.3,369.5L408.3,369.5z M407.8,370.5
                                                        l-0.4,8c-0.1,2.6-1.1,4.8-2.7,6.3c-1.6,1.4-3.7,2.2-6.2,2.2c-0.3,0-0.6,0-0.9,0l-5.3-0.3l-0.5-5.3c-0.3-3,0.4-5.6,2-7.5
                                                        c1.5-1.7,3.7-2.7,6.3-2.9L407.8,370.5L407.8,370.5z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M423.4,372.8c0.1,0.1,0.2,0.2,0.3,0.3c1.8,2,2.6,4.6,2.4,7.8l-0.4,5.7c0,0.2-0.2,0.4-0.4,0.4
                                                        l-5.7,0.6c-3.3,0.3-6.1-0.4-8.2-2.2c-1.9-1.7-3-4.1-3.2-7l-0.4-8.3c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.2-0.1,0.4-0.1l8.5,0.4
                                                        C419.5,370.2,421.8,371.1,423.4,372.8z M424.8,386.2l0.3-5.3c0.2-2.9-0.6-5.3-2.1-7.1c-1.5-1.7-3.7-2.6-6.3-2.7l-8-0.4
                                                        l0.4,7.8c0.1,2.7,1.1,4.8,2.9,6.3c1.9,1.6,4.5,2.3,7.5,2L424.8,386.2z"/>
                                                    <path fill="#EFE7DA" d="M408.3,369.7c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.4l0.4,8.3c0.2,2.9,1.3,5.3,3.2,7
                                                        c1.8,1.5,4.1,2.3,6.7,2.3c0.5,0,1,0,1.5-0.1l5.7-0.6c0.2,0,0.4-0.2,0.4-0.4l0.4-5.7c0.2-3.1-0.6-5.8-2.4-7.8
                                                        c-0.1-0.1-0.2-0.2-0.3-0.3c-1.6-1.6-3.9-2.6-6.6-2.7L408.3,369.7C408.3,369.7,408.3,369.7,408.3,369.7L408.3,369.7z
                                                        M418.2,386.8c-2.4,0-4.5-0.7-6.1-2.1c-1.7-1.5-2.7-3.7-2.9-6.3l-0.4-7.8l8,0.4c2.6,0.1,4.8,1.1,6.3,2.7
                                                        c1.6,1.8,2.3,4.2,2.1,7.1l-0.3,5.3l-5.3,0.5C419.1,386.8,418.6,386.8,418.2,386.8L418.2,386.8z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M405.8,355.2c1.6,1.6,2.6,3.9,2.7,6.5l0.4,8.3c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.1-0.4,0.1
                                                        l-8.5-0.4c-2.9-0.1-5.3-1.2-6.9-3.1c-1.8-2-2.6-4.6-2.4-7.8l0.4-5.7c0-0.2,0.2-0.4,0.4-0.4l5.7-0.6
                                                        c3.3-0.3,6.1,0.4,8.2,2.2C405.5,354.9,405.6,355,405.8,355.2z M408,369.5l-0.4-7.8c-0.1-2.7-1.1-4.8-2.9-6.3
                                                        c-1.9-1.6-4.5-2.3-7.5-2l-5.3,0.5l-0.3,5.3c-0.2,2.9,0.6,5.3,2.1,7.1c1.5,1.7,3.7,2.6,6.3,2.7L408,369.5z"/>
                                                    <path fill="#EFE7DA" d="M398.6,352.4c-0.5,0-1,0-1.5,0.1l-5.7,0.6c-0.2,0-0.4,0.2-0.4,0.4l-0.4,5.7
                                                        c-0.2,3.1,0.6,5.8,2.4,7.8c1.7,1.9,4.1,2.9,6.9,3.1l8.5,0.4c0,0,0,0,0,0c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.4
                                                        l-0.4-8.3c-0.1-2.7-1.1-4.9-2.7-6.5c-0.2-0.2-0.3-0.3-0.5-0.5C403.5,353.2,401.2,352.4,398.6,352.4L398.6,352.4z
                                                        M408,369.5l-8-0.4c-2.6-0.1-4.8-1.1-6.3-2.7c-1.6-1.8-2.3-4.2-2.1-7.1l0.3-5.3l5.3-0.5c0.5,0,1-0.1,1.4-0.1
                                                        c2.4,0,4.5,0.7,6.1,2.1c1.7,1.5,2.7,3.7,2.9,6.3L408,369.5L408,369.5z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M392.5,353.5l32.3,32.3c0.2,0.2,0.2,0.5,0,0.7c-0.2,0.2-0.5,0.2-0.7,0l-32.3-32.3
                                                    c-0.2-0.2-0.2-0.5,0-0.7C392,353.4,392.3,353.4,392.5,353.5z"/>
                                                <path fill="#EFE7DA" d="M392.2,353.4c-0.1,0-0.2,0-0.3,0.1c-0.2,0.2-0.2,0.5,0,0.7l32.3,32.3c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1c0.2-0.2,0.2-0.5,0-0.7l-32.3-32.3C392.4,353.4,392.3,353.4,392.2,353.4L392.2,353.4z"/>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M424.5,353.9c0.2,0.2,0.2,0.5,0,0.7l-31.9,31.9c-0.2,0.2-0.5,0.2-0.7,0c-0.2-0.2-0.2-0.5,0-0.7
                                                    l31.9-31.9C424,353.7,424.3,353.7,424.5,353.9z"/>
                                                <path fill="#EFE7DA" d="M424.1,353.8c-0.1,0-0.2,0-0.3,0.1l-31.9,31.9c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1l31.9-31.9c0.2-0.2,0.2-0.5,0-0.7C424.4,353.8,424.3,353.8,424.1,353.8L424.1,353.8z"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M425.5,387.3c0.1,0.1,0.1,0.2,0.1,0.3l0.6,5.7c0.3,3.3-0.4,6.1-2.2,8.2c-1.7,1.9-4.1,3-7,3.2
                                                        l-8.3,0.4c-0.1,0-0.3,0-0.4-0.1c0,0,0,0,0,0c-0.1-0.1-0.1-0.2-0.1-0.3l0.4-8.5c0.1-2.9,1.2-5.3,3.1-6.9
                                                        c2-1.8,4.6-2.6,7.8-2.4l5.7,0.4C425.3,387.2,425.4,387.2,425.5,387.3z M409.2,404.2l7.8-0.4c2.7-0.1,4.8-1.1,6.3-2.9
                                                        c1.6-1.9,2.3-4.5,2-7.5l-0.5-5.3l-5.3-0.3c-2.9-0.2-5.3,0.6-7.1,2.1c-1.7,1.5-2.6,3.7-2.7,6.3L409.2,404.2z"/>
                                                    <path fill="#EFE7DA" d="M418.6,386.8c-2.7,0-5.1,0.8-6.9,2.4c-1.9,1.7-2.9,4.1-3.1,6.9l-0.4,8.5c0,0.1,0,0.3,0.1,0.3
                                                        c0,0,0,0,0,0c0.1,0.1,0.2,0.1,0.3,0.1c0,0,0,0,0,0l8.3-0.4c2.9-0.1,5.3-1.3,7-3.2c1.8-2.1,2.5-4.9,2.2-8.2l-0.6-5.7
                                                        c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.1l-5.7-0.4C419.2,386.8,418.9,386.8,418.6,386.8L418.6,386.8z
                                                        M409.2,404.2l0.4-8c0.1-2.6,1.1-4.8,2.7-6.3c1.6-1.4,3.7-2.2,6.2-2.2c0.3,0,0.6,0,0.9,0l5.3,0.3l0.5,5.3
                                                        c0.3,3-0.4,5.6-2,7.5c-1.5,1.7-3.7,2.7-6.3,2.9L409.2,404.2L409.2,404.2z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M408.9,404.2c0.1,0.1,0.1,0.2,0.1,0.3l-0.4,8.5c-0.1,2.9-1.2,5.3-3.1,6.9c-2,1.8-4.6,2.6-7.8,2.4
                                                        l-5.7-0.4c-0.2,0-0.4-0.2-0.4-0.4l-0.6-5.7c-0.3-3.3,0.4-6.1,2.2-8.2c1.7-1.9,4.1-3,7-3.2l8.3-0.4
                                                        C408.7,404,408.8,404.1,408.9,404.2z M392.6,421l5.3,0.3c2.9,0.2,5.3-0.6,7.1-2.1c1.7-1.5,2.6-3.7,2.7-6.3l0.4-8l-7.8,0.4
                                                        c-2.7,0.1-4.8,1.1-6.3,2.9c-1.6,1.9-2.3,4.5-2,7.5L392.6,421z"/>
                                                    <path fill="#EFE7DA" d="M408.6,404C408.6,404,408.6,404,408.6,404l-8.3,0.4c-2.9,0.2-5.3,1.3-7,3.2
                                                        c-1.8,2.1-2.5,4.9-2.2,8.2l0.6,5.7c0,0.2,0.2,0.4,0.4,0.4l5.7,0.4c0.3,0,0.6,0,0.9,0c2.7,0,5.1-0.8,6.9-2.4
                                                        c1.9-1.7,2.9-4.1,3.1-6.9l0.4-8.5c0-0.1,0-0.3-0.1-0.3C408.8,404.1,408.7,404,408.6,404L408.6,404z M408.1,405l-0.4,8
                                                        c-0.1,2.6-1.1,4.8-2.7,6.3c-1.6,1.4-3.7,2.2-6.2,2.2c-0.3,0-0.6,0-0.9,0l-5.3-0.3l-0.5-5.3c-0.3-3,0.4-5.6,2-7.5
                                                        c1.5-1.7,3.7-2.7,6.3-2.9L408.1,405L408.1,405z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M423.7,407.3c0.1,0.1,0.2,0.2,0.3,0.3c1.8,2,2.6,4.6,2.4,7.8l-0.4,5.7c0,0.2-0.2,0.4-0.4,0.4
                                                        l-5.7,0.6c-3.3,0.3-6.1-0.4-8.2-2.2c-1.9-1.7-3-4.1-3.2-7l-0.4-8.3c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.2-0.1,0.4-0.1l8.5,0.4
                                                        C419.8,404.7,422.1,405.6,423.7,407.3z M425.2,420.7l0.3-5.3c0.2-2.9-0.6-5.3-2.1-7.1c-1.5-1.7-3.7-2.6-6.3-2.7l-8-0.4
                                                        l0.4,7.8c0.1,2.7,1.1,4.8,2.9,6.3c1.9,1.6,4.5,2.3,7.5,2L425.2,420.7z"/>
                                                    <path fill="#EFE7DA" d="M408.6,404.2c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.4l0.4,8.3c0.2,2.9,1.3,5.3,3.2,7
                                                        c1.8,1.5,4.1,2.3,6.7,2.3c0.5,0,1,0,1.5-0.1l5.7-0.6c0.2,0,0.4-0.2,0.4-0.4l0.4-5.7c0.2-3.1-0.6-5.8-2.4-7.8
                                                        c-0.1-0.1-0.2-0.2-0.3-0.3c-1.6-1.6-3.9-2.6-6.6-2.7L408.6,404.2C408.6,404.2,408.6,404.2,408.6,404.2L408.6,404.2z
                                                        M418.5,421.3c-2.4,0-4.5-0.7-6.1-2.1c-1.7-1.5-2.7-3.7-2.9-6.3l-0.4-7.8l8,0.4c2.6,0.1,4.8,1.1,6.3,2.7
                                                        c1.6,1.8,2.3,4.2,2.1,7.1l-0.3,5.3l-5.3,0.5C419.4,421.2,418.9,421.3,418.5,421.3L418.5,421.3z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M406.1,389.7c1.6,1.6,2.6,3.9,2.7,6.5l0.4,8.3c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.1-0.4,0.1
                                                        l-8.5-0.4c-2.9-0.1-5.3-1.2-6.9-3.1c-1.8-2-2.6-4.6-2.4-7.8l0.4-5.7c0-0.2,0.2-0.4,0.4-0.4l5.7-0.6
                                                        c3.3-0.3,6.1,0.4,8.2,2.2C405.8,389.3,405.9,389.5,406.1,389.7z M408.3,404l-0.4-7.8c-0.1-2.7-1.1-4.8-2.9-6.3
                                                        c-1.9-1.6-4.5-2.3-7.5-2l-5.3,0.5l-0.3,5.3c-0.2,2.9,0.6,5.3,2.1,7.1c1.5,1.7,3.7,2.6,6.3,2.7L408.3,404z"/>
                                                    <path fill="#EFE7DA" d="M398.9,386.9c-0.5,0-1,0-1.5,0.1l-5.7,0.6c-0.2,0-0.4,0.2-0.4,0.4l-0.4,5.7
                                                        c-0.2,3.1,0.6,5.8,2.4,7.8c1.7,1.9,4.1,2.9,6.9,3.1l8.5,0.4c0,0,0,0,0,0c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.4
                                                        l-0.4-8.3c-0.1-2.7-1.1-4.9-2.7-6.5c-0.2-0.2-0.3-0.3-0.5-0.5C403.9,387.7,401.6,386.9,398.9,386.9L398.9,386.9z
                                                        M408.3,404l-8-0.4c-2.6-0.1-4.8-1.1-6.3-2.7c-1.6-1.8-2.3-4.2-2.1-7.1l0.3-5.3l5.3-0.5c0.5,0,1-0.1,1.4-0.1
                                                        c2.4,0,4.5,0.7,6.1,2.1c1.7,1.5,2.7,3.7,2.9,6.3L408.3,404L408.3,404z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M392.8,388l32.3,32.3c0.2,0.2,0.2,0.5,0,0.7c-0.2,0.2-0.5,0.2-0.7,0l-32.3-32.3
                                                    c-0.2-0.2-0.2-0.5,0-0.7C392.3,387.8,392.6,387.8,392.8,388z"/>
                                                <path fill="#EFE7DA" d="M392.5,387.9c-0.1,0-0.2,0-0.3,0.1c-0.2,0.2-0.2,0.5,0,0.7l32.3,32.3c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1c0.2-0.2,0.2-0.5,0-0.7L392.8,388C392.7,387.9,392.6,387.9,392.5,387.9L392.5,387.9z"/>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M424.8,388.4c0.2,0.2,0.2,0.5,0,0.7l-31.9,31.9c-0.2,0.2-0.5,0.2-0.7,0c-0.2-0.2-0.2-0.5,0-0.7
                                                    l31.9-31.9C424.3,388.2,424.6,388.2,424.8,388.4z"/>
                                                <path fill="#EFE7DA" d="M424.5,388.3c-0.1,0-0.2,0-0.3,0.1l-31.9,31.9c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1l31.9-31.9c0.2-0.2,0.2-0.5,0-0.7C424.7,388.3,424.6,388.3,424.5,388.3L424.5,388.3z"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M425.7,421.6c0.1,0.1,0.1,0.2,0.1,0.3l0.6,5.7c0.3,3.3-0.4,6.1-2.2,8.2c-1.7,1.9-4.1,3-7,3.2
                                                        l-8.3,0.4c-0.1,0-0.3,0-0.4-0.1c0,0,0,0,0,0c-0.1-0.1-0.1-0.2-0.1-0.3l0.4-8.5c0.1-2.9,1.2-5.3,3.1-6.9
                                                        c2-1.8,4.6-2.6,7.8-2.4l5.7,0.4C425.6,421.5,425.7,421.6,425.7,421.6z M409.5,438.5l7.8-0.4c2.7-0.1,4.8-1.1,6.3-2.9
                                                        c1.6-1.9,2.3-4.5,2-7.5l-0.5-5.3l-5.3-0.3c-2.9-0.2-5.3,0.6-7.1,2.1c-1.7,1.5-2.6,3.7-2.7,6.3L409.5,438.5z"/>
                                                    <path fill="#EFE7DA" d="M418.8,421.1c-2.7,0-5.1,0.8-6.9,2.4c-1.9,1.7-2.9,4.1-3.1,6.9l-0.4,8.5c0,0.1,0,0.3,0.1,0.3
                                                        c0,0,0,0,0,0c0.1,0.1,0.2,0.1,0.3,0.1c0,0,0,0,0,0l8.3-0.4c2.9-0.1,5.3-1.3,7-3.2c1.8-2.1,2.5-4.9,2.2-8.2l-0.6-5.7
                                                        c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.1l-5.7-0.4C419.4,421.1,419.1,421.1,418.8,421.1L418.8,421.1z
                                                        M409.5,438.5l0.4-8c0.1-2.6,1.1-4.8,2.7-6.3c1.6-1.4,3.7-2.2,6.2-2.2c0.3,0,0.6,0,0.9,0l5.3,0.3l0.5,5.3
                                                        c0.3,3-0.4,5.6-2,7.5c-1.5,1.7-3.7,2.7-6.3,2.9L409.5,438.5L409.5,438.5z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M409.2,438.5c0.1,0.1,0.1,0.2,0.1,0.3l-0.4,8.5c-0.1,2.9-1.2,5.3-3.1,6.9c-2,1.8-4.6,2.6-7.8,2.4
                                                        l-5.7-0.4c-0.2,0-0.4-0.2-0.4-0.4l-0.6-5.7c-0.3-3.3,0.4-6.1,2.2-8.2c1.7-1.9,4.1-3,7-3.2l8.3-0.4
                                                        C408.9,438.3,409.1,438.4,409.2,438.5z M392.8,455.4l5.3,0.3c2.9,0.2,5.3-0.6,7.1-2.1c1.7-1.5,2.6-3.7,2.7-6.3l0.4-8
                                                        l-7.8,0.4c-2.7,0.1-4.8,1.1-6.3,2.9c-1.6,1.9-2.3,4.5-2,7.5L392.8,455.4z"/>
                                                    <path fill="#EFE7DA" d="M408.8,438.3C408.8,438.3,408.8,438.3,408.8,438.3l-8.3,0.4c-2.9,0.2-5.3,1.3-7,3.2
                                                        c-1.8,2.1-2.5,4.9-2.2,8.2l0.6,5.7c0,0.2,0.2,0.4,0.4,0.4l5.7,0.4c0.3,0,0.6,0,0.9,0c2.7,0,5.1-0.8,6.9-2.4
                                                        c1.9-1.7,2.9-4.1,3.1-6.9l0.4-8.5c0-0.1,0-0.3-0.1-0.3C409.1,438.4,408.9,438.3,408.8,438.3L408.8,438.3z M408.3,439.3
                                                        l-0.4,8c-0.1,2.6-1.1,4.8-2.7,6.3c-1.6,1.4-3.7,2.2-6.2,2.2c-0.3,0-0.6,0-0.9,0l-5.3-0.3l-0.5-5.3c-0.3-3,0.4-5.6,2-7.5
                                                        c1.5-1.7,3.7-2.7,6.3-2.9L408.3,439.3L408.3,439.3z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M424,441.6c0.1,0.1,0.2,0.2,0.3,0.3c1.8,2,2.6,4.6,2.4,7.8l-0.4,5.7c0,0.2-0.2,0.4-0.4,0.4
                                                        l-5.7,0.6c-3.3,0.3-6.1-0.4-8.2-2.2c-1.9-1.7-3-4.1-3.2-7l-0.4-8.3c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.2-0.1,0.4-0.1l8.5,0.4
                                                        C420,439,422.3,440,424,441.6z M425.4,455l0.3-5.3c0.2-2.9-0.6-5.3-2.1-7.1c-1.5-1.7-3.7-2.6-6.3-2.7l-8-0.4l0.4,7.8
                                                        c0.1,2.7,1.1,4.8,2.9,6.3c1.9,1.6,4.5,2.3,7.5,2L425.4,455z"/>
                                                    <path fill="#EFE7DA" d="M408.8,438.5c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.4l0.4,8.3c0.2,2.9,1.3,5.3,3.2,7
                                                        c1.8,1.5,4.1,2.3,6.7,2.3c0.5,0,1,0,1.5-0.1l5.7-0.6c0.2,0,0.4-0.2,0.4-0.4l0.4-5.7c0.2-3.1-0.6-5.8-2.4-7.8
                                                        c-0.1-0.1-0.2-0.2-0.3-0.3c-1.6-1.6-3.9-2.6-6.6-2.7L408.8,438.5C408.8,438.5,408.8,438.5,408.8,438.5L408.8,438.5z
                                                        M418.7,455.6c-2.4,0-4.5-0.7-6.1-2.1c-1.7-1.5-2.7-3.7-2.9-6.3l-0.4-7.8l8,0.4c2.6,0.1,4.8,1.1,6.3,2.7
                                                        c1.6,1.8,2.3,4.2,2.1,7.1l-0.3,5.3l-5.3,0.5C419.6,455.6,419.1,455.6,418.7,455.6L418.7,455.6z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M406.3,424c1.6,1.6,2.6,3.9,2.7,6.5l0.4,8.3c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.1-0.4,0.1
                                                        l-8.5-0.4c-2.9-0.1-5.3-1.2-6.9-3.1c-1.8-2-2.6-4.6-2.4-7.8l0.4-5.7c0-0.2,0.2-0.4,0.4-0.4l5.7-0.6
                                                        c3.3-0.3,6.1,0.4,8.2,2.2C406,423.7,406.2,423.8,406.3,424z M408.5,438.3l-0.4-7.8c-0.1-2.7-1.1-4.8-2.9-6.3
                                                        c-1.9-1.6-4.5-2.3-7.5-2l-5.3,0.5l-0.3,5.3c-0.2,2.9,0.6,5.3,2.1,7.1c1.5,1.7,3.7,2.6,6.3,2.7L408.5,438.3z"/>
                                                    <path fill="#EFE7DA" d="M399.1,421.2c-0.5,0-1,0-1.5,0.1l-5.7,0.6c-0.2,0-0.4,0.2-0.4,0.4l-0.4,5.7
                                                        c-0.2,3.1,0.6,5.8,2.4,7.8c1.7,1.9,4.1,2.9,6.9,3.1l8.5,0.4c0,0,0,0,0,0c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.4
                                                        l-0.4-8.3c-0.1-2.7-1.1-4.9-2.7-6.5c-0.2-0.2-0.3-0.3-0.5-0.5C404.1,422,401.8,421.2,399.1,421.2L399.1,421.2z
                                                        M408.5,438.3l-8-0.4c-2.6-0.1-4.8-1.1-6.3-2.7c-1.6-1.8-2.3-4.2-2.1-7.1l0.3-5.3l5.3-0.5c0.5,0,1-0.1,1.4-0.1
                                                        c2.4,0,4.5,0.7,6.1,2.1c1.7,1.5,2.7,3.7,2.9,6.3L408.5,438.3L408.5,438.3z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M393,422.3l32.3,32.3c0.2,0.2,0.2,0.5,0,0.7c-0.2,0.2-0.5,0.2-0.7,0L392.4,423
                                                    c-0.2-0.2-0.2-0.5,0-0.7C392.6,422.2,392.8,422.2,393,422.3z"/>
                                                <path fill="#EFE7DA" d="M392.7,422.2c-0.1,0-0.2,0-0.3,0.1c-0.2,0.2-0.2,0.5,0,0.7l32.3,32.3c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1c0.2-0.2,0.2-0.5,0-0.7L393,422.3C392.9,422.3,392.8,422.2,392.7,422.2L392.7,422.2z"/>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M425,422.7c0.2,0.2,0.2,0.5,0,0.7l-31.9,31.9c-0.2,0.2-0.5,0.2-0.7,0c-0.2-0.2-0.2-0.5,0-0.7
                                                    l31.9-31.9C424.5,422.5,424.8,422.5,425,422.7z"/>
                                                <path fill="#EFE7DA" d="M424.7,422.6c-0.1,0-0.2,0-0.3,0.1l-31.9,31.9c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1l31.9-31.9c0.2-0.2,0.2-0.5,0-0.7C424.9,422.6,424.8,422.6,424.7,422.6L424.7,422.6z"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M426.1,456.1c0.1,0.1,0.1,0.2,0.1,0.3l0.6,5.7c0.3,3.3-0.4,6.1-2.2,8.2c-1.7,1.9-4.1,3-7,3.2
                                                        l-8.3,0.4c-0.1,0-0.3,0-0.4-0.1c0,0,0,0,0,0c-0.1-0.1-0.1-0.2-0.1-0.3l0.4-8.5c0.1-2.9,1.2-5.3,3.1-6.9
                                                        c2-1.8,4.6-2.6,7.8-2.4l5.7,0.4C425.9,456,426,456,426.1,456.1z M409.8,473l7.8-0.4c2.7-0.1,4.8-1.1,6.3-2.9
                                                        c1.6-1.9,2.3-4.5,2-7.5l-0.5-5.3l-5.3-0.3c-2.9-0.2-5.3,0.6-7.1,2.1c-1.7,1.5-2.6,3.7-2.7,6.3L409.8,473z"/>
                                                    <path fill="#EFE7DA" d="M419.1,455.6c-2.7,0-5.1,0.8-6.9,2.4c-1.9,1.7-2.9,4.1-3.1,6.9l-0.4,8.5c0,0.1,0,0.3,0.1,0.3
                                                        c0,0,0,0,0,0c0.1,0.1,0.2,0.1,0.3,0.1c0,0,0,0,0,0l8.3-0.4c2.9-0.2,5.3-1.3,7-3.2c1.8-2.1,2.5-4.9,2.2-8.2l-0.6-5.7
                                                        c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.1l-5.7-0.4C419.8,455.6,419.4,455.6,419.1,455.6L419.1,455.6z M409.8,473
                                                        l0.4-8c0.1-2.6,1.1-4.8,2.7-6.3c1.6-1.4,3.7-2.2,6.2-2.2c0.3,0,0.6,0,0.9,0l5.3,0.3l0.5,5.3c0.3,3-0.4,5.6-2,7.5
                                                        c-1.5,1.7-3.7,2.7-6.3,2.9L409.8,473L409.8,473z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M409.5,473c0.1,0.1,0.1,0.2,0.1,0.3l-0.4,8.5c-0.1,2.9-1.2,5.3-3.1,6.9c-2,1.8-4.6,2.6-7.8,2.4
                                                        l-5.7-0.4c-0.2,0-0.4-0.2-0.4-0.4l-0.6-5.7c-0.3-3.3,0.4-6.1,2.2-8.2c1.7-1.9,4.1-3,7-3.2l8.3-0.4
                                                        C409.2,472.8,409.4,472.9,409.5,473z M393.1,489.8l5.3,0.3c2.9,0.2,5.3-0.6,7.1-2.1c1.7-1.5,2.6-3.7,2.7-6.3l0.4-8
                                                        l-7.8,0.4c-2.7,0.1-4.8,1.1-6.3,2.9c-1.6,1.9-2.3,4.5-2,7.5L393.1,489.8z"/>
                                                    <path fill="#EFE7DA" d="M409.1,472.8C409.1,472.8,409.1,472.8,409.1,472.8l-8.3,0.4c-2.9,0.1-5.3,1.3-7,3.2
                                                        c-1.8,2.1-2.5,4.9-2.2,8.2l0.6,5.7c0,0.2,0.2,0.4,0.4,0.4l5.7,0.4c0.3,0,0.6,0,0.9,0c2.7,0,5.1-0.8,6.9-2.4
                                                        c1.9-1.7,2.9-4.1,3.1-6.9l0.4-8.5c0-0.1,0-0.3-0.1-0.3C409.4,472.9,409.3,472.8,409.1,472.8L409.1,472.8z M408.6,473.8
                                                        l-0.4,8c-0.1,2.6-1.1,4.8-2.7,6.3c-1.6,1.4-3.7,2.2-6.2,2.2c-0.3,0-0.6,0-0.9,0l-5.3-0.3l-0.5-5.3c-0.3-3,0.4-5.6,2-7.5
                                                        c1.5-1.7,3.7-2.7,6.3-2.9L408.6,473.8L408.6,473.8z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M424.3,476.1c0.1,0.1,0.2,0.2,0.3,0.3c1.8,2,2.6,4.6,2.4,7.8l-0.4,5.7c0,0.2-0.2,0.4-0.4,0.4
                                                        l-5.7,0.6c-3.3,0.3-6.1-0.4-8.2-2.2c-1.9-1.7-3-4.1-3.2-7l-0.4-8.3c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.2-0.1,0.4-0.1l8.5,0.4
                                                        C420.4,473.5,422.6,474.4,424.3,476.1z M425.7,489.5l0.3-5.3c0.2-2.9-0.6-5.3-2.1-7.1c-1.5-1.7-3.7-2.6-6.3-2.7l-8-0.4
                                                        l0.4,7.8c0.1,2.7,1.1,4.8,2.9,6.3c1.9,1.6,4.5,2.3,7.5,2L425.7,489.5z"/>
                                                    <path fill="#EFE7DA" d="M409.1,473c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.4l0.4,8.3c0.2,2.9,1.3,5.3,3.2,7
                                                        c1.8,1.5,4.1,2.3,6.7,2.3c0.5,0,1,0,1.5-0.1l5.7-0.6c0.2,0,0.4-0.2,0.4-0.4l0.4-5.7c0.2-3.1-0.6-5.8-2.4-7.8
                                                        c-0.1-0.1-0.2-0.2-0.3-0.3c-1.6-1.6-3.9-2.6-6.6-2.7L409.1,473C409.1,473,409.1,473,409.1,473L409.1,473z M419,490.1
                                                        c-2.4,0-4.5-0.7-6.1-2.1c-1.7-1.5-2.7-3.7-2.9-6.3l-0.4-7.8l8,0.4c2.6,0.1,4.8,1.1,6.3,2.7c1.6,1.8,2.3,4.2,2.1,7.1
                                                        l-0.3,5.3l-5.3,0.5C419.9,490.1,419.5,490.1,419,490.1L419,490.1z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M406.6,458.5c1.6,1.6,2.6,3.9,2.7,6.5l0.4,8.3c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.1-0.4,0.1
                                                        l-8.5-0.4c-2.9-0.1-5.3-1.2-6.9-3.1c-1.8-2-2.6-4.6-2.4-7.8l0.4-5.7c0-0.2,0.2-0.4,0.4-0.4l5.7-0.6
                                                        c3.3-0.3,6.1,0.4,8.2,2.2C406.3,458.1,406.5,458.3,406.6,458.5z M408.8,472.8l-0.4-7.8c-0.1-2.7-1.1-4.8-2.9-6.3
                                                        c-1.9-1.6-4.5-2.3-7.5-2l-5.3,0.5l-0.3,5.3c-0.2,2.9,0.6,5.3,2.1,7.1c1.5,1.7,3.7,2.6,6.3,2.7L408.8,472.8z"/>
                                                    <path fill="#EFE7DA" d="M399.4,455.7c-0.5,0-1,0-1.5,0.1l-5.7,0.6c-0.2,0-0.4,0.2-0.4,0.4l-0.4,5.7
                                                        c-0.2,3.1,0.6,5.8,2.4,7.8c1.7,1.9,4.1,2.9,6.9,3.1l8.5,0.4c0,0,0,0,0,0c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.4
                                                        l-0.4-8.3c-0.1-2.7-1.1-4.9-2.7-6.5c-0.2-0.2-0.3-0.3-0.5-0.5C404.4,456.5,402.1,455.7,399.4,455.7L399.4,455.7z
                                                        M408.8,472.8l-8-0.4c-2.6-0.1-4.8-1.1-6.3-2.7c-1.6-1.8-2.3-4.2-2.1-7.1l0.3-5.3l5.3-0.5c0.5,0,1-0.1,1.4-0.1
                                                        c2.4,0,4.5,0.7,6.1,2.1c1.7,1.5,2.7,3.7,2.9,6.3L408.8,472.8L408.8,472.8z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M393.3,456.8l32.3,32.3c0.2,0.2,0.2,0.5,0,0.7c-0.2,0.2-0.5,0.2-0.7,0l-32.3-32.3
                                                    c-0.2-0.2-0.2-0.5,0-0.7C392.9,456.7,393.2,456.7,393.3,456.8z"/>
                                                <path fill="#EFE7DA" d="M393,456.7c-0.1,0-0.2,0-0.3,0.1c-0.2,0.2-0.2,0.5,0,0.7l32.3,32.3c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1c0.2-0.2,0.2-0.5,0-0.7l-32.3-32.3C393.2,456.7,393.1,456.7,393,456.7L393,456.7z"/>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M425.3,457.2c0.2,0.2,0.2,0.5,0,0.7l-31.9,31.9c-0.2,0.2-0.5,0.2-0.7,0c-0.2-0.2-0.2-0.5,0-0.7
                                                    l31.9-31.9C424.8,457,425.1,457,425.3,457.2z"/>
                                                <path fill="#EFE7DA" d="M425,457.1c-0.1,0-0.2,0-0.3,0.1l-31.9,31.9c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1l31.9-31.9c0.2-0.2,0.2-0.5,0-0.7C425.2,457.1,425.1,457.1,425,457.1L425,457.1z"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g opacity="0.6">
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M494.9,352.8c0.1,0.1,0.1,0.2,0.1,0.3l0.6,5.7c0.3,3.3-0.4,6.1-2.2,8.2c-1.7,1.9-4.1,3-7,3.2
                                                        l-8.3,0.4c-0.1,0-0.3,0-0.4-0.1c0,0,0,0,0,0c-0.1-0.1-0.1-0.2-0.1-0.3l0.4-8.5c0.1-2.9,1.2-5.3,3.1-6.9
                                                        c2-1.8,4.6-2.6,7.8-2.4l5.7,0.4C494.7,352.7,494.8,352.8,494.9,352.8z M478.6,369.7l7.8-0.4c2.7-0.1,4.8-1.1,6.3-2.9
                                                        c1.6-1.9,2.3-4.5,2-7.5l-0.5-5.3l-5.3-0.3c-2.9-0.2-5.3,0.6-7.1,2.1c-1.7,1.5-2.6,3.7-2.7,6.3L478.6,369.7z"/>
                                                    <path fill="#EFE7DA" d="M488,352.3c-2.7,0-5.1,0.8-6.9,2.4c-1.9,1.7-2.9,4.1-3.1,6.9l-0.4,8.5c0,0.1,0,0.3,0.1,0.3
                                                        c0,0,0,0,0,0c0.1,0.1,0.2,0.1,0.3,0.1c0,0,0,0,0,0l8.3-0.4c2.9-0.2,5.3-1.3,7-3.2c1.8-2.1,2.5-4.9,2.2-8.2l-0.6-5.7
                                                        c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.1l-5.7-0.4C488.6,352.3,488.3,352.3,488,352.3L488,352.3z M478.6,369.7
                                                        l0.4-8c0.1-2.6,1.1-4.8,2.7-6.3c1.6-1.4,3.7-2.2,6.2-2.2c0.3,0,0.6,0,0.9,0l5.3,0.3l0.5,5.3c0.3,3-0.4,5.6-2,7.5
                                                        c-1.5,1.7-3.7,2.7-6.3,2.9L478.6,369.7L478.6,369.7z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M478.3,369.7c0.1,0.1,0.1,0.2,0.1,0.3l-0.4,8.5c-0.1,2.9-1.2,5.3-3.1,6.9c-2,1.8-4.6,2.6-7.8,2.4
                                                        l-5.7-0.4c-0.2,0-0.4-0.2-0.4-0.4l-0.6-5.7c-0.3-3.3,0.4-6.1,2.2-8.2c1.7-1.9,4.1-3,7-3.2l8.3-0.4
                                                        C478.1,369.5,478.2,369.6,478.3,369.7z M462,386.6l5.3,0.3c2.9,0.2,5.3-0.6,7.1-2.1c1.7-1.5,2.6-3.7,2.7-6.3l0.4-8
                                                        l-7.8,0.4c-2.7,0.1-4.8,1.1-6.3,2.9c-1.6,1.9-2.3,4.5-2,7.5L462,386.6z"/>
                                                    <path fill="#EFE7DA" d="M478,369.5C478,369.5,478,369.5,478,369.5l-8.3,0.4c-2.9,0.2-5.3,1.3-7,3.2
                                                        c-1.8,2.1-2.5,4.9-2.2,8.2l0.6,5.7c0,0.2,0.2,0.4,0.4,0.4l5.7,0.4c0.3,0,0.6,0,0.9,0c2.7,0,5.1-0.8,6.9-2.4
                                                        c1.9-1.7,2.9-4.1,3.1-6.9l0.4-8.5c0-0.1,0-0.3-0.1-0.3C478.2,369.6,478.1,369.5,478,369.5L478,369.5z M477.5,370.5l-0.4,8
                                                        c-0.1,2.6-1.1,4.8-2.7,6.3c-1.6,1.4-3.7,2.2-6.2,2.2c-0.3,0-0.6,0-0.9,0l-5.3-0.3l-0.5-5.3c-0.3-3,0.4-5.6,2-7.5
                                                        c1.5-1.7,3.7-2.7,6.3-2.9L477.5,370.5L477.5,370.5z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M493.1,372.8c0.1,0.1,0.2,0.2,0.3,0.3c1.8,2,2.6,4.6,2.4,7.8l-0.4,5.7c0,0.2-0.2,0.4-0.4,0.4
                                                        l-5.7,0.6c-3.3,0.3-6.1-0.4-8.2-2.2c-1.9-1.7-3-4.1-3.2-7l-0.4-8.3c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.2-0.1,0.4-0.1l8.5,0.4
                                                        C489.2,370.2,491.5,371.1,493.1,372.8z M494.5,386.2l0.3-5.3c0.2-2.9-0.6-5.3-2.1-7.1c-1.5-1.7-3.7-2.6-6.3-2.7l-8-0.4
                                                        l0.4,7.8c0.1,2.7,1.1,4.8,2.9,6.3c1.9,1.6,4.5,2.3,7.5,2L494.5,386.2z"/>
                                                    <path fill="#EFE7DA" d="M478,369.7c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.4l0.4,8.3c0.2,2.9,1.3,5.3,3.2,7
                                                        c1.8,1.5,4.1,2.3,6.7,2.3c0.5,0,1,0,1.5-0.1l5.7-0.6c0.2,0,0.4-0.2,0.4-0.4l0.4-5.7c0.2-3.1-0.6-5.8-2.4-7.8
                                                        c-0.1-0.1-0.2-0.2-0.3-0.3c-1.6-1.6-3.9-2.6-6.6-2.7L478,369.7C478,369.7,478,369.7,478,369.7L478,369.7z M487.8,386.8
                                                        c-2.4,0-4.5-0.7-6.1-2.1c-1.7-1.5-2.7-3.7-2.9-6.3l-0.4-7.8l8,0.4c2.6,0.1,4.8,1.1,6.3,2.7c1.6,1.8,2.3,4.2,2.1,7.1
                                                        l-0.3,5.3l-5.3,0.5C488.8,386.8,488.3,386.8,487.8,386.8L487.8,386.8z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M475.5,355.2c1.6,1.6,2.6,3.9,2.7,6.5l0.4,8.3c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.1-0.4,0.1
                                                        l-8.5-0.4c-2.9-0.1-5.3-1.2-6.9-3.1c-1.8-2-2.6-4.6-2.4-7.8l0.4-5.7c0-0.2,0.2-0.4,0.4-0.4l5.7-0.6
                                                        c3.3-0.3,6.1,0.4,8.2,2.2C475.2,354.9,475.3,355,475.5,355.2z M477.7,369.5l-0.4-7.8c-0.1-2.7-1.1-4.8-2.9-6.3
                                                        c-1.9-1.6-4.5-2.3-7.5-2l-5.3,0.5l-0.3,5.3c-0.2,2.9,0.6,5.3,2.1,7.1c1.5,1.7,3.7,2.6,6.3,2.7L477.7,369.5z"/>
                                                    <path fill="#EFE7DA" d="M468.3,352.4c-0.5,0-1,0-1.5,0.1l-5.7,0.6c-0.2,0-0.4,0.2-0.4,0.4l-0.4,5.7
                                                        c-0.2,3.1,0.6,5.8,2.4,7.8c1.7,1.9,4.1,2.9,6.9,3.1l8.5,0.4c0,0,0,0,0,0c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.4
                                                        l-0.4-8.3c-0.1-2.7-1.1-4.9-2.7-6.5c-0.2-0.2-0.3-0.3-0.5-0.5C473.2,353.2,470.9,352.4,468.3,352.4L468.3,352.4z
                                                        M477.7,369.5l-8-0.4c-2.6-0.1-4.8-1.1-6.3-2.7c-1.6-1.8-2.3-4.2-2.1-7.1l0.3-5.3l5.3-0.5c0.5,0,1-0.1,1.4-0.1
                                                        c2.4,0,4.5,0.7,6.1,2.1c1.7,1.5,2.7,3.7,2.9,6.3L477.7,369.5L477.7,369.5z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M462.2,353.5l32.3,32.3c0.2,0.2,0.2,0.5,0,0.7c-0.2,0.2-0.5,0.2-0.7,0l-32.3-32.3
                                                    c-0.2-0.2-0.2-0.5,0-0.7C461.7,353.4,462,353.4,462.2,353.5z"/>
                                                <path fill="#EFE7DA" d="M461.9,353.4c-0.1,0-0.2,0-0.3,0.1c-0.2,0.2-0.2,0.5,0,0.7l32.3,32.3c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1c0.2-0.2,0.2-0.5,0-0.7l-32.3-32.3C462.1,353.4,462,353.4,461.9,353.4L461.9,353.4z"/>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M494.2,353.9c0.2,0.2,0.2,0.5,0,0.7l-31.9,31.9c-0.2,0.2-0.5,0.2-0.7,0c-0.2-0.2-0.2-0.5,0-0.7
                                                    l31.9-31.9C493.7,353.7,494,353.7,494.2,353.9z"/>
                                                <path fill="#EFE7DA" d="M493.8,353.8c-0.1,0-0.2,0-0.3,0.1l-31.9,31.9c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1l31.9-31.9c0.2-0.2,0.2-0.5,0-0.7C494.1,353.8,494,353.8,493.8,353.8L493.8,353.8z"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M495.2,387.3c0.1,0.1,0.1,0.2,0.1,0.3l0.6,5.7c0.3,3.3-0.4,6.1-2.2,8.2c-1.7,1.9-4.1,3-7,3.2
                                                        l-8.3,0.4c-0.1,0-0.3,0-0.4-0.1c0,0,0,0,0,0c-0.1-0.1-0.1-0.2-0.1-0.3l0.4-8.5c0.1-2.9,1.2-5.3,3.1-6.9
                                                        c2-1.8,4.6-2.6,7.8-2.4l5.7,0.4C495,387.2,495.1,387.2,495.2,387.3z M478.9,404.2l7.8-0.4c2.7-0.1,4.8-1.1,6.3-2.9
                                                        c1.6-1.9,2.3-4.5,2-7.5l-0.5-5.3l-5.3-0.3c-2.9-0.2-5.3,0.6-7.1,2.1c-1.7,1.5-2.6,3.7-2.7,6.3L478.9,404.2z"/>
                                                    <path fill="#EFE7DA" d="M488.3,386.8c-2.7,0-5.1,0.8-6.9,2.4c-1.9,1.7-2.9,4.1-3.1,6.9l-0.4,8.5c0,0.1,0,0.3,0.1,0.3
                                                        c0,0,0,0,0,0c0.1,0.1,0.2,0.1,0.3,0.1c0,0,0,0,0,0l8.3-0.4c2.9-0.1,5.3-1.3,7-3.2c1.8-2.1,2.5-4.9,2.2-8.2l-0.6-5.7
                                                        c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.1l-5.7-0.4C488.9,386.8,488.6,386.8,488.3,386.8L488.3,386.8z
                                                        M478.9,404.2l0.4-8c0.1-2.6,1.1-4.8,2.7-6.3c1.6-1.4,3.7-2.2,6.2-2.2c0.3,0,0.6,0,0.9,0l5.3,0.3l0.5,5.3
                                                        c0.3,3-0.4,5.6-2,7.5c-1.5,1.7-3.7,2.7-6.3,2.9L478.9,404.2L478.9,404.2z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M478.6,404.2c0.1,0.1,0.1,0.2,0.1,0.3l-0.4,8.5c-0.1,2.9-1.2,5.3-3.1,6.9c-2,1.8-4.6,2.6-7.8,2.4
                                                        l-5.7-0.4c-0.2,0-0.4-0.2-0.4-0.4l-0.6-5.7c-0.3-3.3,0.4-6.1,2.2-8.2c1.7-1.9,4.1-3,7-3.2l8.3-0.4
                                                        C478.4,404,478.5,404.1,478.6,404.2z M462.3,421l5.3,0.3c2.9,0.2,5.3-0.6,7.1-2.1c1.7-1.5,2.6-3.7,2.7-6.3l0.4-8l-7.8,0.4
                                                        c-2.7,0.1-4.8,1.1-6.3,2.9c-1.6,1.9-2.3,4.5-2,7.5L462.3,421z"/>
                                                    <path fill="#EFE7DA" d="M478.3,404C478.3,404,478.3,404,478.3,404l-8.3,0.4c-2.9,0.2-5.3,1.3-7,3.2
                                                        c-1.8,2.1-2.5,4.9-2.2,8.2l0.6,5.7c0,0.2,0.2,0.4,0.4,0.4l5.7,0.4c0.3,0,0.6,0,0.9,0c2.7,0,5.1-0.8,6.9-2.4
                                                        c1.9-1.7,2.9-4.1,3.1-6.9l0.4-8.5c0-0.1,0-0.3-0.1-0.3C478.5,404.1,478.4,404,478.3,404L478.3,404z M477.8,405l-0.4,8
                                                        c-0.1,2.6-1.1,4.8-2.7,6.3c-1.6,1.4-3.7,2.2-6.2,2.2c-0.3,0-0.6,0-0.9,0l-5.3-0.3l-0.5-5.3c-0.3-3,0.4-5.6,2-7.5
                                                        c1.5-1.7,3.7-2.7,6.3-2.9L477.8,405L477.8,405z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M493.4,407.3c0.1,0.1,0.2,0.2,0.3,0.3c1.8,2,2.6,4.6,2.4,7.8l-0.4,5.7c0,0.2-0.2,0.4-0.4,0.4
                                                        l-5.7,0.6c-3.3,0.3-6.1-0.4-8.2-2.2c-1.9-1.7-3-4.1-3.2-7l-0.4-8.3c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.2-0.1,0.4-0.1l8.5,0.4
                                                        C489.5,404.7,491.8,405.6,493.4,407.3z M494.8,420.7l0.3-5.3c0.2-2.9-0.6-5.3-2.1-7.1c-1.5-1.7-3.7-2.6-6.3-2.7l-8-0.4
                                                        l0.4,7.8c0.1,2.7,1.1,4.8,2.9,6.3c1.9,1.6,4.5,2.3,7.5,2L494.8,420.7z"/>
                                                    <path fill="#EFE7DA" d="M478.3,404.2c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.4l0.4,8.3c0.2,2.9,1.3,5.3,3.2,7
                                                        c1.8,1.5,4.1,2.3,6.7,2.3c0.5,0,1,0,1.5-0.1l5.7-0.6c0.2,0,0.4-0.2,0.4-0.4l0.4-5.7c0.2-3.1-0.6-5.8-2.4-7.8
                                                        c-0.1-0.1-0.2-0.2-0.3-0.3c-1.6-1.6-3.9-2.6-6.6-2.7L478.3,404.2C478.3,404.2,478.3,404.2,478.3,404.2L478.3,404.2z
                                                        M488.2,421.3c-2.4,0-4.5-0.7-6.1-2.1c-1.7-1.5-2.7-3.7-2.9-6.3l-0.4-7.8l8,0.4c2.6,0.1,4.8,1.1,6.3,2.7
                                                        c1.6,1.8,2.3,4.2,2.1,7.1l-0.3,5.3l-5.3,0.5C489.1,421.2,488.6,421.3,488.2,421.3L488.2,421.3z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M475.8,389.7c1.6,1.6,2.6,3.9,2.7,6.5l0.4,8.3c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.1-0.4,0.1
                                                        l-8.5-0.4c-2.9-0.1-5.3-1.2-6.9-3.1c-1.8-2-2.6-4.6-2.4-7.8l0.4-5.7c0-0.2,0.2-0.4,0.4-0.4l5.7-0.6
                                                        c3.3-0.3,6.1,0.4,8.2,2.2C475.5,389.3,475.6,389.5,475.8,389.7z M478,404l-0.4-7.8c-0.1-2.7-1.1-4.8-2.9-6.3
                                                        c-1.9-1.6-4.5-2.3-7.5-2l-5.3,0.5l-0.3,5.3c-0.2,2.9,0.6,5.3,2.1,7.1c1.5,1.7,3.7,2.6,6.3,2.7L478,404z"/>
                                                    <path fill="#EFE7DA" d="M468.6,386.9c-0.5,0-1,0-1.5,0.1l-5.7,0.6c-0.2,0-0.4,0.2-0.4,0.4l-0.4,5.7
                                                        c-0.2,3.1,0.6,5.8,2.4,7.8c1.7,1.9,4.1,2.9,6.9,3.1l8.5,0.4c0,0,0,0,0,0c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.4
                                                        l-0.4-8.3c-0.1-2.7-1.1-4.9-2.7-6.5c-0.2-0.2-0.3-0.3-0.5-0.5C473.5,387.7,471.2,386.9,468.6,386.9L468.6,386.9z M478,404
                                                        l-8-0.4c-2.6-0.1-4.8-1.1-6.3-2.7c-1.6-1.8-2.3-4.2-2.1-7.1l0.3-5.3l5.3-0.5c0.5,0,1-0.1,1.4-0.1c2.4,0,4.5,0.7,6.1,2.1
                                                        c1.7,1.5,2.7,3.7,2.9,6.3L478,404L478,404z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M462.5,388l32.3,32.3c0.2,0.2,0.2,0.5,0,0.7c-0.2,0.2-0.5,0.2-0.7,0l-32.3-32.3
                                                    c-0.2-0.2-0.2-0.5,0-0.7C462,387.8,462.3,387.8,462.5,388z"/>
                                                <path fill="#EFE7DA" d="M462.2,387.9c-0.1,0-0.2,0-0.3,0.1c-0.2,0.2-0.2,0.5,0,0.7l32.3,32.3c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1c0.2-0.2,0.2-0.5,0-0.7L462.5,388C462.4,387.9,462.3,387.9,462.2,387.9L462.2,387.9z"/>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M494.5,388.4c0.2,0.2,0.2,0.5,0,0.7l-31.9,31.9c-0.2,0.2-0.5,0.2-0.7,0c-0.2-0.2-0.2-0.5,0-0.7
                                                    l31.9-31.9C494,388.2,494.3,388.2,494.5,388.4z"/>
                                                <path fill="#EFE7DA" d="M494.1,388.3c-0.1,0-0.2,0-0.3,0.1l-31.9,31.9c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1l31.9-31.9c0.2-0.2,0.2-0.5,0-0.7C494.4,388.3,494.3,388.3,494.1,388.3L494.1,388.3z"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M495.4,421.6c0.1,0.1,0.1,0.2,0.1,0.3l0.6,5.7c0.3,3.3-0.4,6.1-2.2,8.2c-1.7,1.9-4.1,3-7,3.2
                                                        l-8.3,0.4c-0.1,0-0.3,0-0.4-0.1c0,0,0,0,0,0c-0.1-0.1-0.1-0.2-0.1-0.3l0.4-8.5c0.1-2.9,1.2-5.3,3.1-6.9
                                                        c2-1.8,4.6-2.6,7.8-2.4l5.7,0.4C495.3,421.5,495.4,421.6,495.4,421.6z M479.2,438.5l7.8-0.4c2.7-0.1,4.8-1.1,6.3-2.9
                                                        c1.6-1.9,2.3-4.5,2-7.5l-0.5-5.3l-5.3-0.3c-2.9-0.2-5.3,0.6-7.1,2.1c-1.7,1.5-2.6,3.7-2.7,6.3L479.2,438.5z"/>
                                                    <path fill="#EFE7DA" d="M488.5,421.1c-2.7,0-5.1,0.8-6.9,2.4c-1.9,1.7-2.9,4.1-3.1,6.9l-0.4,8.5c0,0.1,0,0.3,0.1,0.3
                                                        c0,0,0,0,0,0c0.1,0.1,0.2,0.1,0.3,0.1c0,0,0,0,0,0l8.3-0.4c2.9-0.1,5.3-1.3,7-3.2c1.8-2.1,2.5-4.9,2.2-8.2l-0.6-5.7
                                                        c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.1l-5.7-0.4C489.1,421.1,488.8,421.1,488.5,421.1L488.5,421.1z
                                                        M479.2,438.5l0.4-8c0.1-2.6,1.1-4.8,2.7-6.3c1.6-1.4,3.7-2.2,6.2-2.2c0.3,0,0.6,0,0.9,0l5.3,0.3l0.5,5.3
                                                        c0.3,3-0.4,5.6-2,7.5c-1.5,1.7-3.7,2.7-6.3,2.9L479.2,438.5L479.2,438.5z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M478.8,438.5c0.1,0.1,0.1,0.2,0.1,0.3l-0.4,8.5c-0.1,2.9-1.2,5.3-3.1,6.9c-2,1.8-4.6,2.6-7.8,2.4
                                                        l-5.7-0.4c-0.2,0-0.4-0.2-0.4-0.4l-0.6-5.7c-0.3-3.3,0.4-6.1,2.2-8.2c1.7-1.9,4.1-3,7-3.2l8.3-0.4
                                                        C478.6,438.3,478.8,438.4,478.8,438.5z M462.5,455.4l5.3,0.3c2.9,0.2,5.3-0.6,7.1-2.1c1.7-1.5,2.6-3.7,2.7-6.3l0.4-8
                                                        l-7.8,0.4c-2.7,0.1-4.8,1.1-6.3,2.9c-1.6,1.9-2.3,4.5-2,7.5L462.5,455.4z"/>
                                                    <path fill="#EFE7DA" d="M478.5,438.3C478.5,438.3,478.5,438.3,478.5,438.3l-8.3,0.4c-2.9,0.2-5.3,1.3-7,3.2
                                                        c-1.8,2.1-2.5,4.9-2.2,8.2l0.6,5.7c0,0.2,0.2,0.4,0.4,0.4l5.7,0.4c0.3,0,0.6,0,0.9,0c2.7,0,5.1-0.8,6.9-2.4
                                                        c1.9-1.7,2.9-4.1,3.1-6.9l0.4-8.5c0-0.1,0-0.3-0.1-0.3C478.8,438.4,478.6,438.3,478.5,438.3L478.5,438.3z M478,439.3
                                                        l-0.4,8c-0.1,2.6-1.1,4.8-2.7,6.3c-1.6,1.4-3.7,2.2-6.2,2.2c-0.3,0-0.6,0-0.9,0l-5.3-0.3l-0.5-5.3c-0.3-3,0.4-5.6,2-7.5
                                                        c1.5-1.7,3.7-2.7,6.3-2.9L478,439.3L478,439.3z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M493.6,441.6c0.1,0.1,0.2,0.2,0.3,0.3c1.8,2,2.6,4.6,2.4,7.8l-0.4,5.7c0,0.2-0.2,0.4-0.4,0.4
                                                        l-5.7,0.6c-3.3,0.3-6.1-0.4-8.2-2.2c-1.9-1.7-3-4.1-3.2-7l-0.4-8.3c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.2-0.1,0.4-0.1l8.5,0.4
                                                        C489.7,439,492,440,493.6,441.6z M495.1,455l0.3-5.3c0.2-2.9-0.6-5.3-2.1-7.1c-1.5-1.7-3.7-2.6-6.3-2.7l-8-0.4l0.4,7.8
                                                        c0.1,2.7,1.1,4.8,2.9,6.3c1.9,1.6,4.5,2.3,7.5,2L495.1,455z"/>
                                                    <path fill="#EFE7DA" d="M478.5,438.5c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.4l0.4,8.3c0.2,2.9,1.3,5.3,3.2,7
                                                        c1.8,1.5,4.1,2.3,6.7,2.3c0.5,0,1,0,1.5-0.1l5.7-0.6c0.2,0,0.4-0.2,0.4-0.4l0.4-5.7c0.2-3.1-0.6-5.8-2.4-7.8
                                                        c-0.1-0.1-0.2-0.2-0.3-0.3c-1.6-1.6-3.9-2.6-6.6-2.7L478.5,438.5C478.5,438.5,478.5,438.5,478.5,438.5L478.5,438.5z
                                                        M488.4,455.6c-2.4,0-4.5-0.7-6.1-2.1c-1.7-1.5-2.7-3.7-2.9-6.3l-0.4-7.8l8,0.4c2.6,0.1,4.8,1.1,6.3,2.7
                                                        c1.6,1.8,2.3,4.2,2.1,7.1l-0.3,5.3l-5.3,0.5C489.3,455.6,488.8,455.6,488.4,455.6L488.4,455.6z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M476,424c1.6,1.6,2.6,3.9,2.7,6.5l0.4,8.3c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.1-0.4,0.1l-8.5-0.4
                                                        c-2.9-0.1-5.3-1.2-6.9-3.1c-1.8-2-2.6-4.6-2.4-7.8l0.4-5.7c0-0.2,0.2-0.4,0.4-0.4l5.7-0.6c3.3-0.3,6.1,0.4,8.2,2.2
                                                        C475.7,423.7,475.9,423.8,476,424z M478.2,438.3l-0.4-7.8c-0.1-2.7-1.1-4.8-2.9-6.3c-1.9-1.6-4.5-2.3-7.5-2l-5.3,0.5
                                                        l-0.3,5.3c-0.2,2.9,0.6,5.3,2.1,7.1c1.5,1.7,3.7,2.6,6.3,2.7L478.2,438.3z"/>
                                                    <path fill="#EFE7DA" d="M468.8,421.2c-0.5,0-1,0-1.5,0.1l-5.7,0.6c-0.2,0-0.4,0.2-0.4,0.4l-0.4,5.7
                                                        c-0.2,3.1,0.6,5.8,2.4,7.8c1.7,1.9,4.1,2.9,6.9,3.1l8.5,0.4c0,0,0,0,0,0c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.4
                                                        l-0.4-8.3c-0.1-2.7-1.1-4.9-2.7-6.5c-0.2-0.2-0.3-0.3-0.5-0.5C473.8,422,471.5,421.2,468.8,421.2L468.8,421.2z
                                                        M478.2,438.3l-8-0.4c-2.6-0.1-4.8-1.1-6.3-2.7c-1.6-1.8-2.3-4.2-2.1-7.1l0.3-5.3l5.3-0.5c0.5,0,1-0.1,1.4-0.1
                                                        c2.4,0,4.5,0.7,6.1,2.1c1.7,1.5,2.7,3.7,2.9,6.3L478.2,438.3L478.2,438.3z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M462.7,422.3l32.3,32.3c0.2,0.2,0.2,0.5,0,0.7c-0.2,0.2-0.5,0.2-0.7,0L462.1,423
                                                    c-0.2-0.2-0.2-0.5,0-0.7C462.2,422.2,462.5,422.2,462.7,422.3z"/>
                                                <path fill="#EFE7DA" d="M462.4,422.2c-0.1,0-0.2,0-0.3,0.1c-0.2,0.2-0.2,0.5,0,0.7l32.3,32.3c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1c0.2-0.2,0.2-0.5,0-0.7l-32.3-32.3C462.6,422.3,462.5,422.2,462.4,422.2L462.4,422.2z"/>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M494.7,422.7c0.2,0.2,0.2,0.5,0,0.7l-31.9,31.9c-0.2,0.2-0.5,0.2-0.7,0c-0.2-0.2-0.2-0.5,0-0.7
                                                    l31.9-31.9C494.2,422.5,494.5,422.5,494.7,422.7z"/>
                                                <path fill="#EFE7DA" d="M494.4,422.6c-0.1,0-0.2,0-0.3,0.1l-31.9,31.9c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1l31.9-31.9c0.2-0.2,0.2-0.5,0-0.7C494.6,422.6,494.5,422.6,494.4,422.6L494.4,422.6z"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M495.7,456.1c0.1,0.1,0.1,0.2,0.1,0.3l0.6,5.7c0.3,3.3-0.4,6.1-2.2,8.2c-1.7,1.9-4.1,3-7,3.2
                                                        l-8.3,0.4c-0.1,0-0.3,0-0.4-0.1c0,0,0,0,0,0c-0.1-0.1-0.1-0.2-0.1-0.3l0.4-8.5c0.1-2.9,1.2-5.3,3.1-6.9
                                                        c2-1.8,4.6-2.6,7.8-2.4l5.7,0.4C495.6,456,495.7,456,495.7,456.1z M479.5,473l7.8-0.4c2.7-0.1,4.8-1.1,6.3-2.9
                                                        c1.6-1.9,2.3-4.5,2-7.5l-0.5-5.3l-5.3-0.3c-2.9-0.2-5.3,0.6-7.1,2.1c-1.7,1.5-2.6,3.7-2.7,6.3L479.5,473z"/>
                                                    <path fill="#EFE7DA" d="M488.8,455.6c-2.7,0-5.1,0.8-6.9,2.4c-1.9,1.7-2.9,4.1-3.1,6.9l-0.4,8.5c0,0.1,0,0.3,0.1,0.3
                                                        c0,0,0,0,0,0c0.1,0.1,0.2,0.1,0.3,0.1c0,0,0,0,0,0l8.3-0.4c2.9-0.2,5.3-1.3,7-3.2c1.8-2.1,2.5-4.9,2.2-8.2l-0.6-5.7
                                                        c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.1l-5.7-0.4C489.4,455.6,489.1,455.6,488.8,455.6L488.8,455.6z M479.5,473
                                                        l0.4-8c0.1-2.6,1.1-4.8,2.7-6.3c1.6-1.4,3.7-2.2,6.2-2.2c0.3,0,0.6,0,0.9,0l5.3,0.3l0.5,5.3c0.3,3-0.4,5.6-2,7.5
                                                        c-1.5,1.7-3.7,2.7-6.3,2.9L479.5,473L479.5,473z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M479.2,473c0.1,0.1,0.1,0.2,0.1,0.3l-0.4,8.5c-0.1,2.9-1.2,5.3-3.1,6.9c-2,1.8-4.6,2.6-7.8,2.4
                                                        l-5.7-0.4c-0.2,0-0.4-0.2-0.4-0.4l-0.6-5.7c-0.3-3.3,0.4-6.1,2.2-8.2c1.7-1.9,4.1-3,7-3.2l8.3-0.4
                                                        C478.9,472.8,479.1,472.9,479.2,473z M462.8,489.8l5.3,0.3c2.9,0.2,5.3-0.6,7.1-2.1c1.7-1.5,2.6-3.7,2.7-6.3l0.4-8
                                                        l-7.8,0.4c-2.7,0.1-4.8,1.1-6.3,2.9c-1.6,1.9-2.3,4.5-2,7.5L462.8,489.8z"/>
                                                    <path fill="#EFE7DA" d="M478.8,472.8C478.8,472.8,478.8,472.8,478.8,472.8l-8.3,0.4c-2.9,0.1-5.3,1.3-7,3.2
                                                        c-1.8,2.1-2.5,4.9-2.2,8.2l0.6,5.7c0,0.2,0.2,0.4,0.4,0.4l5.7,0.4c0.3,0,0.6,0,0.9,0c2.7,0,5.1-0.8,6.9-2.4
                                                        c1.9-1.7,2.9-4.1,3.1-6.9l0.4-8.5c0-0.1,0-0.3-0.1-0.3C479.1,472.9,478.9,472.8,478.8,472.8L478.8,472.8z M478.3,473.8
                                                        l-0.4,8c-0.1,2.6-1.1,4.8-2.7,6.3c-1.6,1.4-3.7,2.2-6.2,2.2c-0.3,0-0.6,0-0.9,0l-5.3-0.3l-0.5-5.3c-0.3-3,0.4-5.6,2-7.5
                                                        c1.5-1.7,3.7-2.7,6.3-2.9L478.3,473.8L478.3,473.8z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M494,476.1c0.1,0.1,0.2,0.2,0.3,0.3c1.8,2,2.6,4.6,2.4,7.8l-0.4,5.7c0,0.2-0.2,0.4-0.4,0.4
                                                        l-5.7,0.6c-3.3,0.3-6.1-0.4-8.2-2.2c-1.9-1.7-3-4.1-3.2-7l-0.4-8.3c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.2-0.1,0.4-0.1l8.5,0.4
                                                        C490,473.5,492.3,474.4,494,476.1z M495.4,489.5l0.3-5.3c0.2-2.9-0.6-5.3-2.1-7.1c-1.5-1.7-3.7-2.6-6.3-2.7l-8-0.4
                                                        l0.4,7.8c0.1,2.7,1.1,4.8,2.9,6.3c1.9,1.6,4.5,2.3,7.5,2L495.4,489.5z"/>
                                                    <path fill="#EFE7DA" d="M478.8,473c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.4l0.4,8.3c0.2,2.9,1.3,5.3,3.2,7
                                                        c1.8,1.5,4.1,2.3,6.7,2.3c0.5,0,1,0,1.5-0.1l5.7-0.6c0.2,0,0.4-0.2,0.4-0.4l0.4-5.7c0.2-3.1-0.6-5.8-2.4-7.8
                                                        c-0.1-0.1-0.2-0.2-0.3-0.3c-1.6-1.6-3.9-2.6-6.6-2.7L478.8,473C478.8,473,478.8,473,478.8,473L478.8,473z M488.7,490.1
                                                        c-2.4,0-4.5-0.7-6.1-2.1c-1.7-1.5-2.7-3.7-2.9-6.3l-0.4-7.8l8,0.4c2.6,0.1,4.8,1.1,6.3,2.7c1.6,1.8,2.3,4.2,2.1,7.1
                                                        l-0.3,5.3l-5.3,0.5C489.6,490.1,489.1,490.1,488.7,490.1L488.7,490.1z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M476.3,458.5c1.6,1.6,2.6,3.9,2.7,6.5l0.4,8.3c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.1-0.4,0.1
                                                        l-8.5-0.4c-2.9-0.1-5.3-1.2-6.9-3.1c-1.8-2-2.6-4.6-2.4-7.8l0.4-5.7c0-0.2,0.2-0.4,0.4-0.4l5.7-0.6
                                                        c3.3-0.3,6.1,0.4,8.2,2.2C476,458.1,476.2,458.3,476.3,458.5z M478.5,472.8l-0.4-7.8c-0.1-2.7-1.1-4.8-2.9-6.3
                                                        c-1.9-1.6-4.5-2.3-7.5-2l-5.3,0.5l-0.3,5.3c-0.2,2.9,0.6,5.3,2.1,7.1c1.5,1.7,3.7,2.6,6.3,2.7L478.5,472.8z"/>
                                                    <path fill="#EFE7DA" d="M469.1,455.7c-0.5,0-1,0-1.5,0.1l-5.7,0.6c-0.2,0-0.4,0.2-0.4,0.4l-0.4,5.7
                                                        c-0.2,3.1,0.6,5.8,2.4,7.8c1.7,1.9,4.1,2.9,6.9,3.1l8.5,0.4c0,0,0,0,0,0c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.4
                                                        L479,465c-0.1-2.7-1.1-4.9-2.7-6.5c-0.2-0.2-0.3-0.3-0.5-0.5C474.1,456.5,471.8,455.7,469.1,455.7L469.1,455.7z
                                                        M478.5,472.8l-8-0.4c-2.6-0.1-4.8-1.1-6.3-2.7c-1.6-1.8-2.3-4.2-2.1-7.1l0.3-5.3l5.3-0.5c0.5,0,1-0.1,1.4-0.1
                                                        c2.4,0,4.5,0.7,6.1,2.1c1.7,1.5,2.7,3.7,2.9,6.3L478.5,472.8L478.5,472.8z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M463,456.8l32.3,32.3c0.2,0.2,0.2,0.5,0,0.7c-0.2,0.2-0.5,0.2-0.7,0l-32.3-32.3
                                                    c-0.2-0.2-0.2-0.5,0-0.7C462.6,456.7,462.8,456.7,463,456.8z"/>
                                                <path fill="#EFE7DA" d="M462.7,456.7c-0.1,0-0.2,0-0.3,0.1c-0.2,0.2-0.2,0.5,0,0.7l32.3,32.3c0.1,0.1,0.2,0.1,0.3,0.1
                                                    s0.2,0,0.3-0.1c0.2-0.2,0.2-0.5,0-0.7L463,456.8C462.9,456.7,462.8,456.7,462.7,456.7L462.7,456.7z"/>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M495,457.2c0.2,0.2,0.2,0.5,0,0.7l-31.9,31.9c-0.2,0.2-0.5,0.2-0.7,0c-0.2-0.2-0.2-0.5,0-0.7
                                                    l31.9-31.9C494.5,457,494.8,457,495,457.2z"/>
                                                <path fill="#EFE7DA" d="M494.7,457.1c-0.1,0-0.2,0-0.3,0.1l-31.9,31.9c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1l31.9-31.9c0.2-0.2,0.2-0.5,0-0.7C494.9,457.1,494.8,457.1,494.7,457.1L494.7,457.1z"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g opacity="0.6">
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M459.9,352.8c0.1,0.1,0.1,0.2,0.1,0.3l0.6,5.7c0.3,3.3-0.4,6.1-2.2,8.2c-1.7,1.9-4.1,3-7,3.2
                                                        l-8.3,0.4c-0.1,0-0.3,0-0.4-0.1c0,0,0,0,0,0c-0.1-0.1-0.1-0.2-0.1-0.3l0.4-8.5c0.1-2.9,1.2-5.3,3.1-6.9
                                                        c2-1.8,4.6-2.6,7.8-2.4l5.7,0.4C459.7,352.7,459.8,352.8,459.9,352.8z M443.6,369.7l7.8-0.4c2.7-0.1,4.8-1.1,6.3-2.9
                                                        c1.6-1.9,2.3-4.5,2-7.5l-0.5-5.3l-5.3-0.3c-2.9-0.2-5.3,0.6-7.1,2.1c-1.7,1.5-2.6,3.7-2.7,6.3L443.6,369.7z"/>
                                                    <path fill="#EFE7DA" d="M453,352.3c-2.7,0-5.1,0.8-6.9,2.4c-1.9,1.7-2.9,4.1-3.1,6.9l-0.4,8.5c0,0.1,0,0.3,0.1,0.3
                                                        c0,0,0,0,0,0c0.1,0.1,0.2,0.1,0.3,0.1c0,0,0,0,0,0l8.3-0.4c2.9-0.2,5.3-1.3,7-3.2c1.8-2.1,2.5-4.9,2.2-8.2l-0.6-5.7
                                                        c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.1l-5.7-0.4C453.6,352.3,453.3,352.3,453,352.3L453,352.3z M443.6,369.7
                                                        l0.4-8c0.1-2.6,1.1-4.8,2.7-6.3c1.6-1.4,3.7-2.2,6.2-2.2c0.3,0,0.6,0,0.9,0l5.3,0.3l0.5,5.3c0.3,3-0.4,5.6-2,7.5
                                                        c-1.5,1.7-3.7,2.7-6.3,2.9L443.6,369.7L443.6,369.7z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M443.3,369.7c0.1,0.1,0.1,0.2,0.1,0.3l-0.4,8.5c-0.1,2.9-1.2,5.3-3.1,6.9c-2,1.8-4.6,2.6-7.8,2.4
                                                        l-5.7-0.4c-0.2,0-0.4-0.2-0.4-0.4l-0.6-5.7c-0.3-3.3,0.4-6.1,2.2-8.2c1.7-1.9,4.1-3,7-3.2l8.3-0.4
                                                        C443.1,369.5,443.2,369.6,443.3,369.7z M427,386.6l5.3,0.3c2.9,0.2,5.3-0.6,7.1-2.1c1.7-1.5,2.6-3.7,2.7-6.3l0.4-8
                                                        l-7.8,0.4c-2.7,0.1-4.8,1.1-6.3,2.9c-1.6,1.9-2.3,4.5-2,7.5L427,386.6z"/>
                                                    <path fill="#EFE7DA" d="M443,369.5C443,369.5,443,369.5,443,369.5l-8.3,0.4c-2.9,0.2-5.3,1.3-7,3.2
                                                        c-1.8,2.1-2.5,4.9-2.2,8.2l0.6,5.7c0,0.2,0.2,0.4,0.4,0.4l5.7,0.4c0.3,0,0.6,0,0.9,0c2.7,0,5.1-0.8,6.9-2.4
                                                        c1.9-1.7,2.9-4.1,3.1-6.9l0.4-8.5c0-0.1,0-0.3-0.1-0.3C443.2,369.6,443.1,369.5,443,369.5L443,369.5z M442.5,370.5l-0.4,8
                                                        c-0.1,2.6-1.1,4.8-2.7,6.3c-1.6,1.4-3.7,2.2-6.2,2.2c-0.3,0-0.6,0-0.9,0l-5.3-0.3l-0.5-5.3c-0.3-3,0.4-5.6,2-7.5
                                                        c1.5-1.7,3.7-2.7,6.3-2.9L442.5,370.5L442.5,370.5z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M458.1,372.8c0.1,0.1,0.2,0.2,0.3,0.3c1.8,2,2.6,4.6,2.4,7.8l-0.4,5.7c0,0.2-0.2,0.4-0.4,0.4
                                                        l-5.7,0.6c-3.3,0.3-6.1-0.4-8.2-2.2c-1.9-1.7-3-4.1-3.2-7l-0.4-8.3c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.2-0.1,0.4-0.1l8.5,0.4
                                                        C454.2,370.2,456.5,371.1,458.1,372.8z M459.6,386.2l0.3-5.3c0.2-2.9-0.6-5.3-2.1-7.1c-1.5-1.7-3.7-2.6-6.3-2.7l-8-0.4
                                                        l0.4,7.8c0.1,2.7,1.1,4.8,2.9,6.3c1.9,1.6,4.5,2.3,7.5,2L459.6,386.2z"/>
                                                    <path fill="#EFE7DA" d="M443,369.7c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.4l0.4,8.3c0.2,2.9,1.3,5.3,3.2,7
                                                        c1.8,1.5,4.1,2.3,6.7,2.3c0.5,0,1,0,1.5-0.1l5.7-0.6c0.2,0,0.4-0.2,0.4-0.4l0.4-5.7c0.2-3.1-0.6-5.8-2.4-7.8
                                                        c-0.1-0.1-0.2-0.2-0.3-0.3c-1.6-1.6-3.9-2.6-6.6-2.7L443,369.7C443,369.7,443,369.7,443,369.7L443,369.7z M452.9,386.8
                                                        c-2.4,0-4.5-0.7-6.1-2.1c-1.7-1.5-2.7-3.7-2.9-6.3l-0.4-7.8l8,0.4c2.6,0.1,4.8,1.1,6.3,2.7c1.6,1.8,2.3,4.2,2.1,7.1
                                                        l-0.3,5.3l-5.3,0.5C453.8,386.8,453.3,386.8,452.9,386.8L452.9,386.8z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M440.5,355.2c1.6,1.6,2.6,3.9,2.7,6.5l0.4,8.3c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.1-0.4,0.1
                                                        l-8.5-0.4c-2.9-0.1-5.3-1.2-6.9-3.1c-1.8-2-2.6-4.6-2.4-7.8l0.4-5.7c0-0.2,0.2-0.4,0.4-0.4l5.7-0.6
                                                        c3.3-0.3,6.1,0.4,8.2,2.2C440.2,354.9,440.3,355,440.5,355.2z M442.7,369.5l-0.4-7.8c-0.1-2.7-1.1-4.8-2.9-6.3
                                                        c-1.9-1.6-4.5-2.3-7.5-2l-5.3,0.5l-0.3,5.3c-0.2,2.9,0.6,5.3,2.1,7.1c1.5,1.7,3.7,2.6,6.3,2.7L442.7,369.5z"/>
                                                    <path fill="#EFE7DA" d="M433.3,352.4c-0.5,0-1,0-1.5,0.1l-5.7,0.6c-0.2,0-0.4,0.2-0.4,0.4l-0.4,5.7
                                                        c-0.2,3.1,0.6,5.8,2.4,7.8c1.7,1.9,4.1,2.9,6.9,3.1l8.5,0.4c0,0,0,0,0,0c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.4
                                                        l-0.4-8.3c-0.1-2.7-1.1-4.9-2.7-6.5c-0.2-0.2-0.3-0.3-0.5-0.5C438.3,353.2,436,352.4,433.3,352.4L433.3,352.4z
                                                        M442.7,369.5l-8-0.4c-2.6-0.1-4.8-1.1-6.3-2.7c-1.6-1.8-2.3-4.2-2.1-7.1l0.3-5.3l5.3-0.5c0.5,0,1-0.1,1.4-0.1
                                                        c2.4,0,4.5,0.7,6.1,2.1c1.7,1.5,2.7,3.7,2.9,6.3L442.7,369.5L442.7,369.5z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M427.2,353.5l32.3,32.3c0.2,0.2,0.2,0.5,0,0.7c-0.2,0.2-0.5,0.2-0.7,0l-32.3-32.3
                                                    c-0.2-0.2-0.2-0.5,0-0.7C426.7,353.4,427,353.4,427.2,353.5z"/>
                                                <path fill="#EFE7DA" d="M426.9,353.4c-0.1,0-0.2,0-0.3,0.1c-0.2,0.2-0.2,0.5,0,0.7l32.3,32.3c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1c0.2-0.2,0.2-0.5,0-0.7l-32.3-32.3C427.1,353.4,427,353.4,426.9,353.4L426.9,353.4z"/>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M459.2,353.9c0.2,0.2,0.2,0.5,0,0.7l-31.9,31.9c-0.2,0.2-0.5,0.2-0.7,0c-0.2-0.2-0.2-0.5,0-0.7
                                                    l31.9-31.9C458.7,353.7,459,353.7,459.2,353.9z"/>
                                                <path fill="#EFE7DA" d="M458.8,353.8c-0.1,0-0.2,0-0.3,0.1l-31.9,31.9c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1
                                                    s0.2,0,0.3-0.1l31.9-31.9c0.2-0.2,0.2-0.5,0-0.7C459.1,353.8,459,353.8,458.8,353.8L458.8,353.8z"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M460.2,387.3c0.1,0.1,0.1,0.2,0.1,0.3l0.6,5.7c0.3,3.3-0.4,6.1-2.2,8.2c-1.7,1.9-4.1,3-7,3.2
                                                        l-8.3,0.4c-0.1,0-0.3,0-0.4-0.1c0,0,0,0,0,0c-0.1-0.1-0.1-0.2-0.1-0.3l0.4-8.5c0.1-2.9,1.2-5.3,3.1-6.9
                                                        c2-1.8,4.6-2.6,7.8-2.4l5.7,0.4C460,387.2,460.1,387.2,460.2,387.3z M444,404.2l7.8-0.4c2.7-0.1,4.8-1.1,6.3-2.9
                                                        c1.6-1.9,2.3-4.5,2-7.5l-0.5-5.3l-5.3-0.3c-2.9-0.2-5.3,0.6-7.1,2.1c-1.7,1.5-2.6,3.7-2.7,6.3L444,404.2z"/>
                                                    <path fill="#EFE7DA" d="M453.3,386.8c-2.7,0-5.1,0.8-6.9,2.4c-1.9,1.7-2.9,4.1-3.1,6.9l-0.4,8.5c0,0.1,0,0.3,0.1,0.3
                                                        c0,0,0,0,0,0c0.1,0.1,0.2,0.1,0.3,0.1c0,0,0,0,0,0l8.3-0.4c2.9-0.1,5.3-1.3,7-3.2c1.8-2.1,2.5-4.9,2.2-8.2l-0.6-5.7
                                                        c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.1l-5.7-0.4C453.9,386.8,453.6,386.8,453.3,386.8L453.3,386.8z M444,404.2
                                                        l0.4-8c0.1-2.6,1.1-4.8,2.7-6.3c1.6-1.4,3.7-2.2,6.2-2.2c0.3,0,0.6,0,0.9,0l5.3,0.3l0.5,5.3c0.3,3-0.4,5.6-2,7.5
                                                        c-1.5,1.7-3.7,2.7-6.3,2.9L444,404.2L444,404.2z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M443.6,404.2c0.1,0.1,0.1,0.2,0.1,0.3l-0.4,8.5c-0.1,2.9-1.2,5.3-3.1,6.9c-2,1.8-4.6,2.6-7.8,2.4
                                                        l-5.7-0.4c-0.2,0-0.4-0.2-0.4-0.4l-0.6-5.7c-0.3-3.3,0.4-6.1,2.2-8.2c1.7-1.9,4.1-3,7-3.2l8.3-0.4
                                                        C443.4,404,443.5,404.1,443.6,404.2z M427.3,421l5.3,0.3c2.9,0.2,5.3-0.6,7.1-2.1c1.7-1.5,2.6-3.7,2.7-6.3l0.4-8l-7.8,0.4
                                                        c-2.7,0.1-4.8,1.1-6.3,2.9c-1.6,1.9-2.3,4.5-2,7.5L427.3,421z"/>
                                                    <path fill="#EFE7DA" d="M443.3,404C443.3,404,443.3,404,443.3,404l-8.3,0.4c-2.9,0.2-5.3,1.3-7,3.2
                                                        c-1.8,2.1-2.5,4.9-2.2,8.2l0.6,5.7c0,0.2,0.2,0.4,0.4,0.4l5.7,0.4c0.3,0,0.6,0,0.9,0c2.7,0,5.1-0.8,6.9-2.4
                                                        c1.9-1.7,2.9-4.1,3.1-6.9l0.4-8.5c0-0.1,0-0.3-0.1-0.3C443.5,404.1,443.4,404,443.3,404L443.3,404z M442.8,405l-0.4,8
                                                        c-0.1,2.6-1.1,4.8-2.7,6.3c-1.6,1.4-3.7,2.2-6.2,2.2c-0.3,0-0.6,0-0.9,0l-5.3-0.3l-0.5-5.3c-0.3-3,0.4-5.6,2-7.5
                                                        c1.5-1.7,3.7-2.7,6.3-2.9L442.8,405L442.8,405z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M458.4,407.3c0.1,0.1,0.2,0.2,0.3,0.3c1.8,2,2.6,4.6,2.4,7.8l-0.4,5.7c0,0.2-0.2,0.4-0.4,0.4
                                                        l-5.7,0.6c-3.3,0.3-6.1-0.4-8.2-2.2c-1.9-1.7-3-4.1-3.2-7l-0.4-8.3c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.2-0.1,0.4-0.1l8.5,0.4
                                                        C454.5,404.7,456.8,405.6,458.4,407.3z M459.9,420.7l0.3-5.3c0.2-2.9-0.6-5.3-2.1-7.1c-1.5-1.7-3.7-2.6-6.3-2.7l-8-0.4
                                                        l0.4,7.8c0.1,2.7,1.1,4.8,2.9,6.3c1.9,1.6,4.5,2.3,7.5,2L459.9,420.7z"/>
                                                    <path fill="#EFE7DA" d="M443.3,404.2c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.4l0.4,8.3c0.2,2.9,1.3,5.3,3.2,7
                                                        c1.8,1.5,4.1,2.3,6.7,2.3c0.5,0,1,0,1.5-0.1l5.7-0.6c0.2,0,0.4-0.2,0.4-0.4l0.4-5.7c0.2-3.1-0.6-5.8-2.4-7.8
                                                        c-0.1-0.1-0.2-0.2-0.3-0.3c-1.6-1.6-3.9-2.6-6.6-2.7L443.3,404.2C443.3,404.2,443.3,404.2,443.3,404.2L443.3,404.2z
                                                        M453.2,421.3c-2.4,0-4.5-0.7-6.1-2.1c-1.7-1.5-2.7-3.7-2.9-6.3l-0.4-7.8l8,0.4c2.6,0.1,4.8,1.1,6.3,2.7
                                                        c1.6,1.8,2.3,4.2,2.1,7.1l-0.3,5.3l-5.3,0.5C454.1,421.2,453.6,421.3,453.2,421.3L453.2,421.3z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M440.8,389.7c1.6,1.6,2.6,3.9,2.7,6.5l0.4,8.3c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.1-0.4,0.1
                                                        l-8.5-0.4c-2.9-0.1-5.3-1.2-6.9-3.1c-1.8-2-2.6-4.6-2.4-7.8l0.4-5.7c0-0.2,0.2-0.4,0.4-0.4l5.7-0.6
                                                        c3.3-0.3,6.1,0.4,8.2,2.2C440.5,389.3,440.6,389.5,440.8,389.7z M443,404l-0.4-7.8c-0.1-2.7-1.1-4.8-2.9-6.3
                                                        c-1.9-1.6-4.5-2.3-7.5-2l-5.3,0.5l-0.3,5.3c-0.2,2.9,0.6,5.3,2.1,7.1c1.5,1.7,3.7,2.6,6.3,2.7L443,404z"/>
                                                    <path fill="#EFE7DA" d="M433.6,386.9c-0.5,0-1,0-1.5,0.1l-5.7,0.6c-0.2,0-0.4,0.2-0.4,0.4l-0.4,5.7
                                                        c-0.2,3.1,0.6,5.8,2.4,7.8c1.7,1.9,4.1,2.9,6.9,3.1l8.5,0.4c0,0,0,0,0,0c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.4
                                                        l-0.4-8.3c-0.1-2.7-1.1-4.9-2.7-6.5c-0.2-0.2-0.3-0.3-0.5-0.5C438.6,387.7,436.3,386.9,433.6,386.9L433.6,386.9z M443,404
                                                        l-8-0.4c-2.6-0.1-4.8-1.1-6.3-2.7c-1.6-1.8-2.3-4.2-2.1-7.1l0.3-5.3l5.3-0.5c0.5,0,1-0.1,1.4-0.1c2.4,0,4.5,0.7,6.1,2.1
                                                        c1.7,1.5,2.7,3.7,2.9,6.3L443,404L443,404z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M427.5,388l32.3,32.3c0.2,0.2,0.2,0.5,0,0.7c-0.2,0.2-0.5,0.2-0.7,0l-32.3-32.3
                                                    c-0.2-0.2-0.2-0.5,0-0.7C427,387.8,427.3,387.8,427.5,388z"/>
                                                <path fill="#EFE7DA" d="M427.2,387.9c-0.1,0-0.2,0-0.3,0.1c-0.2,0.2-0.2,0.5,0,0.7l32.3,32.3c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1c0.2-0.2,0.2-0.5,0-0.7L427.5,388C427.4,387.9,427.3,387.9,427.2,387.9L427.2,387.9z"/>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M459.5,388.4c0.2,0.2,0.2,0.5,0,0.7l-31.9,31.9c-0.2,0.2-0.5,0.2-0.7,0c-0.2-0.2-0.2-0.5,0-0.7
                                                    l31.9-31.9C459,388.2,459.3,388.2,459.5,388.4z"/>
                                                <path fill="#EFE7DA" d="M459.2,388.3c-0.1,0-0.2,0-0.3,0.1l-31.9,31.9c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1l31.9-31.9c0.2-0.2,0.2-0.5,0-0.7C459.4,388.3,459.3,388.3,459.2,388.3L459.2,388.3z"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M460.5,421.6c0.1,0.1,0.1,0.2,0.1,0.3l0.6,5.7c0.3,3.3-0.4,6.1-2.2,8.2c-1.7,1.9-4.1,3-7,3.2
                                                        l-8.3,0.4c-0.1,0-0.3,0-0.4-0.1c0,0,0,0,0,0c-0.1-0.1-0.1-0.2-0.1-0.3l0.4-8.5c0.1-2.9,1.2-5.3,3.1-6.9
                                                        c2-1.8,4.6-2.6,7.8-2.4l5.7,0.4C460.3,421.5,460.4,421.6,460.5,421.6z M444.2,438.5l7.8-0.4c2.7-0.1,4.8-1.1,6.3-2.9
                                                        c1.6-1.9,2.3-4.5,2-7.5l-0.5-5.3l-5.3-0.3c-2.9-0.2-5.3,0.6-7.1,2.1c-1.7,1.5-2.6,3.7-2.7,6.3L444.2,438.5z"/>
                                                    <path fill="#EFE7DA" d="M453.5,421.1c-2.7,0-5.1,0.8-6.9,2.4c-1.9,1.7-2.9,4.1-3.1,6.9l-0.4,8.5c0,0.1,0,0.3,0.1,0.3
                                                        c0,0,0,0,0,0c0.1,0.1,0.2,0.1,0.3,0.1c0,0,0,0,0,0l8.3-0.4c2.9-0.1,5.3-1.3,7-3.2c1.8-2.1,2.5-4.9,2.2-8.2l-0.6-5.7
                                                        c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.1l-5.7-0.4C454.2,421.1,453.8,421.1,453.5,421.1L453.5,421.1z
                                                        M444.2,438.5l0.4-8c0.1-2.6,1.1-4.8,2.7-6.3c1.6-1.4,3.7-2.2,6.2-2.2c0.3,0,0.6,0,0.9,0l5.3,0.3l0.5,5.3
                                                        c0.3,3-0.4,5.6-2,7.5c-1.5,1.7-3.7,2.7-6.3,2.9L444.2,438.5L444.2,438.5z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M443.9,438.5c0.1,0.1,0.1,0.2,0.1,0.3l-0.4,8.5c-0.1,2.9-1.2,5.3-3.1,6.9c-2,1.8-4.6,2.6-7.8,2.4
                                                        l-5.7-0.4c-0.2,0-0.4-0.2-0.4-0.4l-0.6-5.7c-0.3-3.3,0.4-6.1,2.2-8.2c1.7-1.9,4.1-3,7-3.2l8.3-0.4
                                                        C443.6,438.3,443.8,438.4,443.9,438.5z M427.5,455.4l5.3,0.3c2.9,0.2,5.3-0.6,7.1-2.1c1.7-1.5,2.6-3.7,2.7-6.3l0.4-8
                                                        l-7.8,0.4c-2.7,0.1-4.8,1.1-6.3,2.9c-1.6,1.9-2.3,4.5-2,7.5L427.5,455.4z"/>
                                                    <path fill="#EFE7DA" d="M443.5,438.3C443.5,438.3,443.5,438.3,443.5,438.3l-8.3,0.4c-2.9,0.2-5.3,1.3-7,3.2
                                                        c-1.8,2.1-2.5,4.9-2.2,8.2l0.6,5.7c0,0.2,0.2,0.4,0.4,0.4l5.7,0.4c0.3,0,0.6,0,0.9,0c2.7,0,5.1-0.8,6.9-2.4
                                                        c1.9-1.7,2.9-4.1,3.1-6.9l0.4-8.5c0-0.1,0-0.3-0.1-0.3C443.8,438.4,443.7,438.3,443.5,438.3L443.5,438.3z M443,439.3
                                                        l-0.4,8c-0.1,2.6-1.1,4.8-2.7,6.3c-1.6,1.4-3.7,2.2-6.2,2.2c-0.3,0-0.6,0-0.9,0l-5.3-0.3l-0.5-5.3c-0.3-3,0.4-5.6,2-7.5
                                                        c1.5-1.7,3.7-2.7,6.3-2.9L443,439.3L443,439.3z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M458.7,441.6c0.1,0.1,0.2,0.2,0.3,0.3c1.8,2,2.6,4.6,2.4,7.8l-0.4,5.7c0,0.2-0.2,0.4-0.4,0.4
                                                        l-5.7,0.6c-3.3,0.3-6.1-0.4-8.2-2.2c-1.9-1.7-3-4.1-3.2-7l-0.4-8.3c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.2-0.1,0.4-0.1l8.5,0.4
                                                        C454.7,439,457,440,458.7,441.6z M460.1,455l0.3-5.3c0.2-2.9-0.6-5.3-2.1-7.1c-1.5-1.7-3.7-2.6-6.3-2.7l-8-0.4l0.4,7.8
                                                        c0.1,2.7,1.1,4.8,2.9,6.3c1.9,1.6,4.5,2.3,7.5,2L460.1,455z"/>
                                                    <path fill="#EFE7DA" d="M443.5,438.5c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.4l0.4,8.3c0.2,2.9,1.3,5.3,3.2,7
                                                        c1.8,1.5,4.1,2.3,6.7,2.3c0.5,0,1,0,1.5-0.1l5.7-0.6c0.2,0,0.4-0.2,0.4-0.4l0.4-5.7c0.2-3.1-0.6-5.8-2.4-7.8
                                                        c-0.1-0.1-0.2-0.2-0.3-0.3c-1.6-1.6-3.9-2.6-6.6-2.7L443.5,438.5C443.5,438.5,443.5,438.5,443.5,438.5L443.5,438.5z
                                                        M453.4,455.6c-2.4,0-4.5-0.7-6.1-2.1c-1.7-1.5-2.7-3.7-2.9-6.3l-0.4-7.8l8,0.4c2.6,0.1,4.8,1.1,6.3,2.7
                                                        c1.6,1.8,2.3,4.2,2.1,7.1l-0.3,5.3l-5.3,0.5C454.3,455.6,453.9,455.6,453.4,455.6L453.4,455.6z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M441,424c1.6,1.6,2.6,3.9,2.7,6.5l0.4,8.3c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.1-0.4,0.1l-8.5-0.4
                                                        c-2.9-0.1-5.3-1.2-6.9-3.1c-1.8-2-2.6-4.6-2.4-7.8l0.4-5.7c0-0.2,0.2-0.4,0.4-0.4l5.7-0.6c3.3-0.3,6.1,0.4,8.2,2.2
                                                        C440.7,423.7,440.9,423.8,441,424z M443.2,438.3l-0.4-7.8c-0.1-2.7-1.1-4.8-2.9-6.3c-1.9-1.6-4.5-2.3-7.5-2l-5.3,0.5
                                                        l-0.3,5.3c-0.2,2.9,0.6,5.3,2.1,7.1c1.5,1.7,3.7,2.6,6.3,2.7L443.2,438.3z"/>
                                                    <path fill="#EFE7DA" d="M433.8,421.2c-0.5,0-1,0-1.5,0.1l-5.7,0.6c-0.2,0-0.4,0.2-0.4,0.4l-0.4,5.7
                                                        c-0.2,3.1,0.6,5.8,2.4,7.8c1.7,1.9,4.1,2.9,6.9,3.1l8.5,0.4c0,0,0,0,0,0c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.4
                                                        l-0.4-8.3c-0.1-2.7-1.1-4.9-2.7-6.5c-0.2-0.2-0.3-0.3-0.5-0.5C438.8,422,436.5,421.2,433.8,421.2L433.8,421.2z
                                                        M443.2,438.3l-8-0.4c-2.6-0.1-4.8-1.1-6.3-2.7c-1.6-1.8-2.3-4.2-2.1-7.1l0.3-5.3l5.3-0.5c0.5,0,1-0.1,1.4-0.1
                                                        c2.4,0,4.5,0.7,6.1,2.1c1.7,1.5,2.7,3.7,2.9,6.3L443.2,438.3L443.2,438.3z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M427.7,422.3l32.3,32.3c0.2,0.2,0.2,0.5,0,0.7c-0.2,0.2-0.5,0.2-0.7,0L427.1,423
                                                    c-0.2-0.2-0.2-0.5,0-0.7C427.3,422.2,427.6,422.2,427.7,422.3z"/>
                                                <path fill="#EFE7DA" d="M427.4,422.2c-0.1,0-0.2,0-0.3,0.1c-0.2,0.2-0.2,0.5,0,0.7l32.3,32.3c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1c0.2-0.2,0.2-0.5,0-0.7l-32.3-32.3C427.6,422.3,427.5,422.2,427.4,422.2L427.4,422.2z"/>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M459.7,422.7c0.2,0.2,0.2,0.5,0,0.7l-31.9,31.9c-0.2,0.2-0.5,0.2-0.7,0c-0.2-0.2-0.2-0.5,0-0.7
                                                    l31.9-31.9C459.2,422.5,459.5,422.5,459.7,422.7z"/>
                                                <path fill="#EFE7DA" d="M459.4,422.6c-0.1,0-0.2,0-0.3,0.1l-31.9,31.9c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1l31.9-31.9c0.2-0.2,0.2-0.5,0-0.7C459.6,422.6,459.5,422.6,459.4,422.6L459.4,422.6z"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M460.8,456.1c0.1,0.1,0.1,0.2,0.1,0.3l0.6,5.7c0.3,3.3-0.4,6.1-2.2,8.2c-1.7,1.9-4.1,3-7,3.2
                                                        l-8.3,0.4c-0.1,0-0.3,0-0.4-0.1c0,0,0,0,0,0c-0.1-0.1-0.1-0.2-0.1-0.3l0.4-8.5c0.1-2.9,1.2-5.3,3.1-6.9
                                                        c2-1.8,4.6-2.6,7.8-2.4l5.7,0.4C460.6,456,460.7,456,460.8,456.1z M444.5,473l7.8-0.4c2.7-0.1,4.8-1.1,6.3-2.9
                                                        c1.6-1.9,2.3-4.5,2-7.5l-0.5-5.3l-5.3-0.3c-2.9-0.2-5.3,0.6-7.1,2.1c-1.7,1.5-2.6,3.7-2.7,6.3L444.5,473z"/>
                                                    <path fill="#EFE7DA" d="M453.9,455.6c-2.7,0-5.1,0.8-6.9,2.4c-1.9,1.7-2.9,4.1-3.1,6.9l-0.4,8.5c0,0.1,0,0.3,0.1,0.3
                                                        c0,0,0,0,0,0c0.1,0.1,0.2,0.1,0.3,0.1c0,0,0,0,0,0l8.3-0.4c2.9-0.2,5.3-1.3,7-3.2c1.8-2.1,2.5-4.9,2.2-8.2l-0.6-5.7
                                                        c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.1l-5.7-0.4C454.5,455.6,454.2,455.6,453.9,455.6L453.9,455.6z M444.5,473
                                                        l0.4-8c0.1-2.6,1.1-4.8,2.7-6.3c1.6-1.4,3.7-2.2,6.2-2.2c0.3,0,0.6,0,0.9,0l5.3,0.3l0.5,5.3c0.3,3-0.4,5.6-2,7.5
                                                        c-1.5,1.7-3.7,2.7-6.3,2.9L444.5,473L444.5,473z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M444.2,473c0.1,0.1,0.1,0.2,0.1,0.3l-0.4,8.5c-0.1,2.9-1.2,5.3-3.1,6.9c-2,1.8-4.6,2.6-7.8,2.4
                                                        l-5.7-0.4c-0.2,0-0.4-0.2-0.4-0.4l-0.6-5.7c-0.3-3.3,0.4-6.1,2.2-8.2c1.7-1.9,4.1-3,7-3.2l8.3-0.4
                                                        C443.9,472.8,444.1,472.9,444.2,473z M427.8,489.8l5.3,0.3c2.9,0.2,5.3-0.6,7.1-2.1c1.7-1.5,2.6-3.7,2.7-6.3l0.4-8
                                                        l-7.8,0.4c-2.7,0.1-4.8,1.1-6.3,2.9c-1.6,1.9-2.3,4.5-2,7.5L427.8,489.8z"/>
                                                    <path fill="#EFE7DA" d="M443.8,472.8C443.8,472.8,443.8,472.8,443.8,472.8l-8.3,0.4c-2.9,0.1-5.3,1.3-7,3.2
                                                        c-1.8,2.1-2.5,4.9-2.2,8.2l0.6,5.7c0,0.2,0.2,0.4,0.4,0.4l5.7,0.4c0.3,0,0.6,0,0.9,0c2.7,0,5.1-0.8,6.9-2.4
                                                        c1.9-1.7,2.9-4.1,3.1-6.9l0.4-8.5c0-0.1,0-0.3-0.1-0.3C444.1,472.9,444,472.8,443.8,472.8L443.8,472.8z M443.4,473.8
                                                        l-0.4,8c-0.1,2.6-1.1,4.8-2.7,6.3c-1.6,1.4-3.7,2.2-6.2,2.2c-0.3,0-0.6,0-0.9,0l-5.3-0.3l-0.5-5.3c-0.3-3,0.4-5.6,2-7.5
                                                        c1.5-1.7,3.7-2.7,6.3-2.9L443.4,473.8L443.4,473.8z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M459,476.1c0.1,0.1,0.2,0.2,0.3,0.3c1.8,2,2.6,4.6,2.4,7.8l-0.4,5.7c0,0.2-0.2,0.4-0.4,0.4
                                                        l-5.7,0.6c-3.3,0.3-6.1-0.4-8.2-2.2c-1.9-1.7-3-4.1-3.2-7l-0.4-8.3c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.2-0.1,0.4-0.1l8.5,0.4
                                                        C455.1,473.5,457.3,474.4,459,476.1z M460.4,489.5l0.3-5.3c0.2-2.9-0.6-5.3-2.1-7.1c-1.5-1.7-3.7-2.6-6.3-2.7l-8-0.4
                                                        l0.4,7.8c0.1,2.7,1.1,4.8,2.9,6.3c1.9,1.6,4.5,2.3,7.5,2L460.4,489.5z"/>
                                                    <path fill="#EFE7DA" d="M443.8,473c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.4l0.4,8.3c0.2,2.9,1.3,5.3,3.2,7
                                                        c1.8,1.5,4.1,2.3,6.7,2.3c0.5,0,1,0,1.5-0.1l5.7-0.6c0.2,0,0.4-0.2,0.4-0.4l0.4-5.7c0.2-3.1-0.6-5.8-2.4-7.8
                                                        c-0.1-0.1-0.2-0.2-0.3-0.3c-1.6-1.6-3.9-2.6-6.6-2.7L443.8,473C443.9,473,443.8,473,443.8,473L443.8,473z M453.7,490.1
                                                        c-2.4,0-4.5-0.7-6.1-2.1c-1.7-1.5-2.7-3.7-2.9-6.3l-0.4-7.8l8,0.4c2.6,0.1,4.8,1.1,6.3,2.7c1.6,1.8,2.3,4.2,2.1,7.1
                                                        l-0.3,5.3l-5.3,0.5C454.6,490.1,454.2,490.1,453.7,490.1L453.7,490.1z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M441.3,458.5c1.6,1.6,2.6,3.9,2.7,6.5l0.4,8.3c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.1-0.4,0.1
                                                        l-8.5-0.4c-2.9-0.1-5.3-1.2-6.9-3.1c-1.8-2-2.6-4.6-2.4-7.8l0.4-5.7c0-0.2,0.2-0.4,0.4-0.4l5.7-0.6
                                                        c3.3-0.3,6.1,0.4,8.2,2.2C441,458.1,441.2,458.3,441.3,458.5z M443.5,472.8l-0.4-7.8c-0.1-2.7-1.1-4.8-2.9-6.3
                                                        c-1.9-1.6-4.5-2.3-7.5-2l-5.3,0.5l-0.3,5.3c-0.2,2.9,0.6,5.3,2.1,7.1c1.5,1.7,3.7,2.6,6.3,2.7L443.5,472.8z"/>
                                                    <path fill="#EFE7DA" d="M434.1,455.7c-0.5,0-1,0-1.5,0.1l-5.7,0.6c-0.2,0-0.4,0.2-0.4,0.4l-0.4,5.7
                                                        c-0.2,3.1,0.6,5.8,2.4,7.8c1.7,1.9,4.1,2.9,6.9,3.1l8.5,0.4c0,0,0,0,0,0c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.4
                                                        L444,465c-0.1-2.7-1.1-4.9-2.7-6.5c-0.2-0.2-0.3-0.3-0.5-0.5C439.1,456.5,436.8,455.7,434.1,455.7L434.1,455.7z
                                                        M443.5,472.8l-8-0.4c-2.6-0.1-4.8-1.1-6.3-2.7c-1.6-1.8-2.3-4.2-2.1-7.1l0.3-5.3l5.3-0.5c0.5,0,1-0.1,1.4-0.1
                                                        c2.4,0,4.5,0.7,6.1,2.1c1.7,1.5,2.7,3.7,2.9,6.3L443.5,472.8L443.5,472.8z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M428,456.8l32.3,32.3c0.2,0.2,0.2,0.5,0,0.7c-0.2,0.2-0.5,0.2-0.7,0l-32.3-32.3
                                                    c-0.2-0.2-0.2-0.5,0-0.7C427.6,456.7,427.9,456.7,428,456.8z"/>
                                                <path fill="#EFE7DA" d="M427.7,456.7c-0.1,0-0.2,0-0.3,0.1c-0.2,0.2-0.2,0.5,0,0.7l32.3,32.3c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1c0.2-0.2,0.2-0.5,0-0.7L428,456.8C428,456.7,427.8,456.7,427.7,456.7L427.7,456.7z"/>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M460,457.2c0.2,0.2,0.2,0.5,0,0.7l-31.9,31.9c-0.2,0.2-0.5,0.2-0.7,0c-0.2-0.2-0.2-0.5,0-0.7
                                                    l31.9-31.9C459.5,457,459.8,457,460,457.2z"/>
                                                <path fill="#EFE7DA" d="M459.7,457.1c-0.1,0-0.2,0-0.3,0.1l-31.9,31.9c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1l31.9-31.9c0.2-0.2,0.2-0.5,0-0.7C459.9,457.1,459.8,457.1,459.7,457.1L459.7,457.1z"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g opacity="0.6">
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M529.4,352.8c0.1,0.1,0.1,0.2,0.1,0.3l0.6,5.7c0.3,3.3-0.4,6.1-2.2,8.2c-1.7,1.9-4.1,3-7,3.2
                                                        l-8.3,0.4c-0.1,0-0.3,0-0.4-0.1c0,0,0,0,0,0c-0.1-0.1-0.1-0.2-0.1-0.3l0.4-8.5c0.1-2.9,1.2-5.3,3.1-6.9
                                                        c2-1.8,4.6-2.6,7.8-2.4l5.7,0.4C529.2,352.6,529.3,352.7,529.4,352.8z M513.1,369.6l7.8-0.4c2.7-0.1,4.8-1.1,6.3-2.9
                                                        c1.6-1.9,2.3-4.5,2-7.5l-0.5-5.3l-5.3-0.3c-2.9-0.2-5.3,0.6-7.1,2.1c-1.7,1.5-2.6,3.7-2.7,6.3L513.1,369.6z"/>
                                                    <path fill="#EFE7DA" d="M522.5,352.2c-2.7,0-5.1,0.8-6.9,2.4c-1.9,1.7-2.9,4.1-3.1,6.9l-0.4,8.5c0,0.1,0,0.3,0.1,0.3
                                                        c0,0,0,0,0,0c0.1,0.1,0.2,0.1,0.3,0.1c0,0,0,0,0,0l8.3-0.4c2.9-0.1,5.3-1.3,7-3.2c1.8-2.1,2.5-4.9,2.2-8.2l-0.6-5.7
                                                        c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.1l-5.7-0.4C523.1,352.2,522.8,352.2,522.5,352.2L522.5,352.2z
                                                        M513.1,369.6l0.4-8c0.1-2.6,1.1-4.8,2.7-6.3c1.6-1.4,3.7-2.2,6.2-2.2c0.3,0,0.6,0,0.9,0l5.3,0.3l0.5,5.3
                                                        c0.3,3-0.4,5.6-2,7.5c-1.5,1.7-3.7,2.7-6.3,2.9L513.1,369.6L513.1,369.6z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M512.8,369.6c0.1,0.1,0.1,0.2,0.1,0.3l-0.4,8.5c-0.1,2.9-1.2,5.3-3.1,6.9c-2,1.8-4.6,2.6-7.8,2.4
                                                        l-5.7-0.4c-0.2,0-0.4-0.2-0.4-0.4l-0.6-5.7c-0.3-3.3,0.4-6.1,2.2-8.2c1.7-1.9,4.1-3,7-3.2l8.3-0.4
                                                        C512.6,369.5,512.7,369.5,512.8,369.6z M496.5,386.5l5.3,0.3c2.9,0.2,5.3-0.6,7.1-2.1c1.7-1.5,2.6-3.7,2.7-6.3l0.4-8
                                                        l-7.8,0.4c-2.7,0.1-4.8,1.1-6.3,2.9c-1.6,1.9-2.3,4.5-2,7.5L496.5,386.5z"/>
                                                    <path fill="#EFE7DA" d="M512.5,369.5C512.5,369.5,512.5,369.5,512.5,369.5l-8.3,0.4c-2.9,0.2-5.3,1.3-7,3.2
                                                        c-1.8,2.1-2.5,4.9-2.2,8.2l0.6,5.7c0,0.2,0.2,0.4,0.4,0.4l5.7,0.4c0.3,0,0.6,0,0.9,0c2.7,0,5.1-0.8,6.9-2.4
                                                        c1.9-1.7,2.9-4.1,3.1-6.9l0.4-8.5c0-0.1,0-0.3-0.1-0.3C512.7,369.5,512.6,369.5,512.5,369.5L512.5,369.5z M512,370.4
                                                        l-0.4,8c-0.1,2.6-1.1,4.8-2.7,6.3c-1.6,1.4-3.7,2.2-6.2,2.2c-0.3,0-0.6,0-0.9,0l-5.3-0.3l-0.5-5.3c-0.3-3,0.4-5.6,2-7.5
                                                        c1.5-1.7,3.7-2.7,6.3-2.9L512,370.4L512,370.4z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M527.6,372.7c0.1,0.1,0.2,0.2,0.3,0.3c1.8,2,2.6,4.6,2.4,7.8l-0.4,5.7c0,0.2-0.2,0.4-0.4,0.4
                                                        l-5.7,0.6c-3.3,0.3-6.1-0.4-8.2-2.2c-1.9-1.7-3-4.1-3.2-7l-0.4-8.3c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.2-0.1,0.4-0.1l8.5,0.4
                                                        C523.7,370.1,526,371.1,527.6,372.7z M529.1,386.1l0.3-5.3c0.2-2.9-0.6-5.3-2.1-7.1c-1.5-1.7-3.7-2.6-6.3-2.7l-8-0.4
                                                        l0.4,7.8c0.1,2.7,1.1,4.8,2.9,6.3c1.9,1.6,4.5,2.3,7.5,2L529.1,386.1z"/>
                                                    <path fill="#EFE7DA" d="M512.5,369.6c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.4l0.4,8.3c0.2,2.9,1.3,5.3,3.2,7
                                                        c1.8,1.5,4.1,2.3,6.7,2.3c0.5,0,1,0,1.5-0.1l5.7-0.6c0.2,0,0.4-0.2,0.4-0.4l0.4-5.7c0.2-3.1-0.6-5.8-2.4-7.8
                                                        c-0.1-0.1-0.2-0.2-0.3-0.3c-1.6-1.6-3.9-2.6-6.6-2.7L512.5,369.6C512.5,369.6,512.5,369.6,512.5,369.6L512.5,369.6z
                                                        M522.4,386.7c-2.4,0-4.5-0.7-6.1-2.1c-1.7-1.5-2.7-3.7-2.9-6.3l-0.4-7.8l8,0.4c2.6,0.1,4.8,1.1,6.3,2.7
                                                        c1.6,1.8,2.3,4.2,2.1,7.1l-0.3,5.3l-5.3,0.5C523.3,386.7,522.8,386.7,522.4,386.7L522.4,386.7z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M510,355.1c1.6,1.6,2.6,3.9,2.7,6.5l0.4,8.3c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.1-0.4,0.1
                                                        l-8.5-0.4c-2.9-0.1-5.3-1.2-6.9-3.1c-1.8-2-2.6-4.6-2.4-7.8l0.4-5.7c0-0.2,0.2-0.4,0.4-0.4l5.7-0.6
                                                        c3.3-0.3,6.1,0.4,8.2,2.2C509.7,354.8,509.8,354.9,510,355.1z M512.2,369.4l-0.4-7.8c-0.1-2.7-1.1-4.8-2.9-6.3
                                                        c-1.9-1.6-4.5-2.3-7.5-2l-5.3,0.5l-0.3,5.3c-0.2,2.9,0.6,5.3,2.1,7.1c1.5,1.7,3.7,2.6,6.3,2.7L512.2,369.4z"/>
                                                    <path fill="#EFE7DA" d="M502.8,352.4c-0.5,0-1,0-1.5,0.1l-5.7,0.6c-0.2,0-0.4,0.2-0.4,0.4l-0.4,5.7
                                                        c-0.2,3.1,0.6,5.8,2.4,7.8c1.7,1.9,4.1,2.9,6.9,3.1l8.5,0.4c0,0,0,0,0,0c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.4
                                                        l-0.4-8.3c-0.1-2.7-1.1-4.9-2.7-6.5c-0.2-0.2-0.3-0.3-0.5-0.5C507.7,353.1,505.5,352.4,502.8,352.4L502.8,352.4z
                                                        M512.2,369.4l-8-0.4c-2.6-0.1-4.8-1.1-6.3-2.7c-1.6-1.8-2.3-4.2-2.1-7.1l0.3-5.3l5.3-0.5c0.5,0,1-0.1,1.4-0.1
                                                        c2.4,0,4.5,0.7,6.1,2.1c1.7,1.5,2.7,3.7,2.9,6.3L512.2,369.4L512.2,369.4z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M496.7,353.5l32.3,32.3c0.2,0.2,0.2,0.5,0,0.7s-0.5,0.2-0.7,0L496,354.1c-0.2-0.2-0.2-0.5,0-0.7
                                                    C496.2,353.3,496.5,353.3,496.7,353.5z"/>
                                                <path fill="#EFE7DA" d="M496.4,353.3c-0.1,0-0.2,0-0.3,0.1c-0.2,0.2-0.2,0.5,0,0.7l32.3,32.3c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1c0.2-0.2,0.2-0.5,0-0.7l-32.3-32.3C496.6,353.4,496.5,353.3,496.4,353.3L496.4,353.3z"/>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M528.7,353.8c0.2,0.2,0.2,0.5,0,0.7l-31.9,31.9c-0.2,0.2-0.5,0.2-0.7,0c-0.2-0.2-0.2-0.5,0-0.7
                                                    l31.9-31.9C528.2,353.7,528.5,353.7,528.7,353.8z"/>
                                                <path fill="#EFE7DA" d="M528.3,353.7c-0.1,0-0.2,0-0.3,0.1l-31.9,31.9c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1l31.9-31.9c0.2-0.2,0.2-0.5,0-0.7C528.6,353.8,528.5,353.7,528.3,353.7L528.3,353.7z"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M529.7,387.3c0.1,0.1,0.1,0.2,0.1,0.3l0.6,5.7c0.3,3.3-0.4,6.1-2.2,8.2c-1.7,1.9-4.1,3-7,3.2
                                                        L513,405c-0.1,0-0.3,0-0.4-0.1c0,0,0,0,0,0c-0.1-0.1-0.1-0.2-0.1-0.3l0.4-8.5c0.1-2.9,1.2-5.3,3.1-6.9
                                                        c2-1.8,4.6-2.6,7.8-2.4l5.7,0.4C529.5,387.1,529.6,387.2,529.7,387.3z M513.5,404.1l7.8-0.4c2.7-0.1,4.8-1.1,6.3-2.9
                                                        c1.6-1.9,2.3-4.5,2-7.5L529,388l-5.3-0.3c-2.9-0.2-5.3,0.6-7.1,2.1c-1.7,1.5-2.6,3.7-2.7,6.3L513.5,404.1z"/>
                                                    <path fill="#EFE7DA" d="M522.8,386.7c-2.7,0-5.1,0.8-6.9,2.4c-1.9,1.7-2.9,4.1-3.1,6.9l-0.4,8.5c0,0.1,0,0.3,0.1,0.3
                                                        c0,0,0,0,0,0c0.1,0.1,0.2,0.1,0.3,0.1c0,0,0,0,0,0l8.3-0.4c2.9-0.2,5.3-1.3,7-3.2c1.8-2.1,2.5-4.9,2.2-8.2l-0.6-5.7
                                                        c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.1l-5.7-0.4C523.4,386.7,523.1,386.7,522.8,386.7L522.8,386.7z
                                                        M513.5,404.1l0.4-8c0.1-2.6,1.1-4.8,2.7-6.3c1.6-1.4,3.7-2.2,6.2-2.2c0.3,0,0.6,0,0.9,0l5.3,0.3l0.5,5.3
                                                        c0.3,3-0.4,5.6-2,7.5c-1.5,1.7-3.7,2.7-6.3,2.9L513.5,404.1L513.5,404.1z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M513.1,404.1c0.1,0.1,0.1,0.2,0.1,0.3l-0.4,8.5c-0.1,2.9-1.2,5.3-3.1,6.9c-2,1.8-4.6,2.6-7.8,2.4
                                                        l-5.7-0.4c-0.2,0-0.4-0.2-0.4-0.4l-0.6-5.7c-0.3-3.3,0.4-6.1,2.2-8.2c1.7-1.9,4.1-3,7-3.2l8.3-0.4
                                                        C512.9,403.9,513,404,513.1,404.1z M496.8,421l5.3,0.3c2.9,0.2,5.3-0.6,7.1-2.1c1.7-1.5,2.6-3.7,2.7-6.3l0.4-8l-7.8,0.4
                                                        c-2.7,0.1-4.8,1.1-6.3,2.9c-1.6,1.9-2.3,4.5-2,7.5L496.8,421z"/>
                                                    <path fill="#EFE7DA" d="M512.8,404C512.8,404,512.8,404,512.8,404l-8.3,0.4c-2.9,0.1-5.3,1.3-7,3.2
                                                        c-1.8,2.1-2.5,4.9-2.2,8.2l0.6,5.7c0,0.2,0.2,0.4,0.4,0.4l5.7,0.4c0.3,0,0.6,0,0.9,0c2.7,0,5.1-0.8,6.9-2.4
                                                        c1.9-1.7,2.9-4.1,3.1-6.9l0.4-8.5c0-0.1,0-0.3-0.1-0.3C513,404,512.9,404,512.8,404L512.8,404z M512.3,404.9l-0.4,8
                                                        c-0.1,2.6-1.1,4.8-2.7,6.3c-1.6,1.4-3.7,2.2-6.2,2.2c-0.3,0-0.6,0-0.9,0l-5.3-0.3l-0.5-5.3c-0.3-3,0.4-5.6,2-7.5
                                                        c1.5-1.7,3.7-2.7,6.3-2.9L512.3,404.9L512.3,404.9z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M527.9,407.2c0.1,0.1,0.2,0.2,0.3,0.3c1.8,2,2.6,4.6,2.4,7.8l-0.4,5.7c0,0.2-0.2,0.4-0.4,0.4
                                                        l-5.7,0.6c-3.3,0.3-6.1-0.4-8.2-2.2c-1.9-1.7-3-4.1-3.2-7l-0.4-8.3c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.2-0.1,0.4-0.1l8.5,0.4
                                                        C524,404.6,526.3,405.6,527.9,407.2z M529.4,420.6l0.3-5.3c0.2-2.9-0.6-5.3-2.1-7.1c-1.5-1.7-3.7-2.6-6.3-2.7l-8-0.4
                                                        l0.4,7.8c0.1,2.7,1.1,4.8,2.9,6.3c1.9,1.6,4.5,2.3,7.5,2L529.4,420.6z"/>
                                                    <path fill="#EFE7DA" d="M512.8,404.1c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.4l0.4,8.3c0.2,2.9,1.3,5.3,3.2,7
                                                        c1.8,1.5,4.1,2.3,6.7,2.3c0.5,0,1,0,1.5-0.1l5.7-0.6c0.2,0,0.4-0.2,0.4-0.4l0.4-5.7c0.2-3.1-0.6-5.8-2.4-7.8
                                                        c-0.1-0.1-0.2-0.2-0.3-0.3c-1.6-1.6-3.9-2.6-6.6-2.7L512.8,404.1C512.8,404.1,512.8,404.1,512.8,404.1L512.8,404.1z
                                                        M522.7,421.2c-2.4,0-4.5-0.7-6.1-2.1c-1.7-1.5-2.7-3.7-2.9-6.3l-0.4-7.8l8,0.4c2.6,0.1,4.8,1.1,6.3,2.7
                                                        c1.6,1.8,2.3,4.2,2.1,7.1l-0.3,5.3l-5.3,0.5C523.6,421.2,523.1,421.2,522.7,421.2L522.7,421.2z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M510.3,389.6c1.6,1.6,2.6,3.9,2.7,6.5l0.4,8.3c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.1-0.4,0.1
                                                        l-8.5-0.4c-2.9-0.1-5.3-1.2-6.9-3.1c-1.8-2-2.6-4.6-2.4-7.8l0.4-5.7c0-0.2,0.2-0.4,0.4-0.4l5.7-0.6
                                                        c3.3-0.3,6.1,0.4,8.2,2.2C510,389.3,510.1,389.4,510.3,389.6z M512.5,403.9l-0.4-7.8c-0.1-2.7-1.1-4.8-2.9-6.3
                                                        c-1.9-1.6-4.5-2.3-7.5-2l-5.3,0.5l-0.3,5.3c-0.2,2.9,0.6,5.3,2.1,7.1c1.5,1.7,3.7,2.6,6.3,2.7L512.5,403.9z"/>
                                                    <path fill="#EFE7DA" d="M503.1,386.9c-0.5,0-1,0-1.5,0.1l-5.7,0.6c-0.2,0-0.4,0.2-0.4,0.4l-0.4,5.7
                                                        c-0.2,3.1,0.6,5.8,2.4,7.8c1.7,1.9,4.1,2.9,6.9,3.1l8.5,0.4c0,0,0,0,0,0c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.4
                                                        l-0.4-8.3c-0.1-2.7-1.1-4.9-2.7-6.5c-0.2-0.2-0.3-0.3-0.5-0.5C508.1,387.6,505.8,386.9,503.1,386.9L503.1,386.9z
                                                        M512.5,403.9l-8-0.4c-2.6-0.1-4.8-1.1-6.3-2.7c-1.6-1.8-2.3-4.2-2.1-7.1l0.3-5.3l5.3-0.5c0.5,0,1-0.1,1.4-0.1
                                                        c2.4,0,4.5,0.7,6.1,2.1c1.7,1.5,2.7,3.7,2.9,6.3L512.5,403.9L512.5,403.9z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M497,388l32.3,32.3c0.2,0.2,0.2,0.5,0,0.7c-0.2,0.2-0.5,0.2-0.7,0l-32.3-32.3
                                                    c-0.2-0.2-0.2-0.5,0-0.7C496.5,387.8,496.8,387.8,497,388z"/>
                                                <path fill="#EFE7DA" d="M496.7,387.8c-0.1,0-0.2,0-0.3,0.1c-0.2,0.2-0.2,0.5,0,0.7l32.3,32.3c0.1,0.1,0.2,0.1,0.3,0.1
                                                    s0.2,0,0.3-0.1c0.2-0.2,0.2-0.5,0-0.7L497,388C496.9,387.9,496.8,387.8,496.7,387.8L496.7,387.8z"/>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M529,388.3c0.2,0.2,0.2,0.5,0,0.7l-31.9,31.9c-0.2,0.2-0.5,0.2-0.7,0c-0.2-0.2-0.2-0.5,0-0.7
                                                    l31.9-31.9C528.5,388.2,528.8,388.2,529,388.3z"/>
                                                <path fill="#EFE7DA" d="M528.7,388.2c-0.1,0-0.2,0-0.3,0.1l-31.9,31.9c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1L529,389c0.2-0.2,0.2-0.5,0-0.7C528.9,388.2,528.8,388.2,528.7,388.2L528.7,388.2z"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M530,421.6c0.1,0.1,0.1,0.2,0.1,0.3l0.6,5.7c0.3,3.3-0.4,6.1-2.2,8.2c-1.7,1.9-4.1,3-7,3.2
                                                        l-8.3,0.4c-0.1,0-0.3,0-0.4-0.1c0,0,0,0,0,0c-0.1-0.1-0.1-0.2-0.1-0.3l0.4-8.5c0.1-2.9,1.2-5.3,3.1-6.9
                                                        c2-1.8,4.6-2.6,7.8-2.4l5.7,0.4C529.8,421.4,529.9,421.5,530,421.6z M513.7,438.4l7.8-0.4c2.7-0.1,4.8-1.1,6.3-2.9
                                                        c1.6-1.9,2.3-4.5,2-7.5l-0.5-5.3l-5.3-0.3c-2.9-0.2-5.3,0.6-7.1,2.1c-1.7,1.5-2.6,3.7-2.7,6.3L513.7,438.4z"/>
                                                    <path fill="#EFE7DA" d="M523,421c-2.7,0-5.1,0.8-6.9,2.4c-1.9,1.7-2.9,4.1-3.1,6.9l-0.4,8.5c0,0.1,0,0.3,0.1,0.3
                                                        c0,0,0,0,0,0c0.1,0.1,0.2,0.1,0.3,0.1c0,0,0,0,0,0l8.3-0.4c2.9-0.2,5.3-1.3,7-3.2c1.8-2.1,2.5-4.9,2.2-8.2l-0.6-5.7
                                                        c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.1l-5.7-0.4C523.7,421,523.3,421,523,421L523,421z M513.7,438.4l0.4-8
                                                        c0.1-2.6,1.1-4.8,2.7-6.3c1.6-1.4,3.7-2.2,6.2-2.2c0.3,0,0.6,0,0.9,0l5.3,0.3l0.5,5.3c0.3,3-0.4,5.6-2,7.5
                                                        c-1.5,1.7-3.7,2.7-6.3,2.9L513.7,438.4L513.7,438.4z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M513.4,438.4c0.1,0.1,0.1,0.2,0.1,0.3l-0.4,8.5c-0.1,2.9-1.2,5.3-3.1,6.9c-2,1.8-4.6,2.6-7.8,2.4
                                                        l-5.7-0.4c-0.2,0-0.4-0.2-0.4-0.4l-0.6-5.7c-0.3-3.3,0.4-6.1,2.2-8.2c1.7-1.9,4.1-3,7-3.2l8.3-0.4
                                                        C513.1,438.3,513.3,438.3,513.4,438.4z M497,455.3l5.3,0.3c2.9,0.2,5.3-0.6,7.1-2.1c1.7-1.5,2.6-3.7,2.7-6.3l0.4-8
                                                        l-7.8,0.4c-2.7,0.1-4.8,1.1-6.3,2.9c-1.6,1.9-2.3,4.5-2,7.5L497,455.3z"/>
                                                    <path fill="#EFE7DA" d="M513,438.3C513,438.3,513,438.3,513,438.3l-8.3,0.4c-2.9,0.2-5.3,1.3-7,3.2
                                                        c-1.8,2.1-2.5,4.9-2.2,8.2l0.6,5.7c0,0.2,0.2,0.4,0.4,0.4l5.7,0.4c0.3,0,0.6,0,0.9,0c2.7,0,5.1-0.8,6.9-2.4
                                                        c1.9-1.7,2.9-4.1,3.1-6.9l0.4-8.5c0-0.1,0-0.3-0.1-0.3C513.3,438.3,513.2,438.3,513,438.3L513,438.3z M512.5,439.2l-0.4,8
                                                        c-0.1,2.6-1.1,4.8-2.7,6.3c-1.6,1.4-3.7,2.2-6.2,2.2c-0.3,0-0.6,0-0.9,0l-5.3-0.3l-0.5-5.3c-0.3-3,0.4-5.6,2-7.5
                                                        c1.5-1.7,3.7-2.7,6.3-2.9L512.5,439.2L512.5,439.2z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M528.2,441.5c0.1,0.1,0.2,0.2,0.3,0.3c1.8,2,2.6,4.6,2.4,7.8l-0.4,5.7c0,0.2-0.2,0.4-0.4,0.4
                                                        l-5.7,0.6c-3.3,0.3-6.1-0.4-8.2-2.2c-1.9-1.7-3-4.1-3.2-7l-0.4-8.3c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.2-0.1,0.4-0.1l8.5,0.4
                                                        C524.2,439,526.5,439.9,528.2,441.5z M529.6,454.9l0.3-5.3c0.2-2.9-0.6-5.3-2.1-7.1c-1.5-1.7-3.7-2.6-6.3-2.7l-8-0.4
                                                        l0.4,7.8c0.1,2.7,1.1,4.8,2.9,6.3c1.9,1.6,4.5,2.3,7.5,2L529.6,454.9z"/>
                                                    <path fill="#EFE7DA" d="M513,438.4c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.4l0.4,8.3c0.2,2.9,1.3,5.3,3.2,7
                                                        c1.8,1.5,4.1,2.3,6.7,2.3c0.5,0,1,0,1.5-0.1l5.7-0.6c0.2,0,0.4-0.2,0.4-0.4l0.4-5.7c0.2-3.1-0.6-5.8-2.4-7.8
                                                        c-0.1-0.1-0.2-0.2-0.3-0.3c-1.6-1.6-3.9-2.6-6.6-2.7L513,438.4C513,438.4,513,438.4,513,438.4L513,438.4z M522.9,455.5
                                                        c-2.4,0-4.5-0.7-6.1-2.1c-1.7-1.5-2.7-3.7-2.9-6.3l-0.4-7.8l8,0.4c2.6,0.1,4.8,1.1,6.3,2.7c1.6,1.8,2.3,4.2,2.1,7.1
                                                        l-0.3,5.3l-5.3,0.5C523.8,455.5,523.4,455.5,522.9,455.5L522.9,455.5z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M510.5,423.9c1.6,1.6,2.6,3.9,2.7,6.5l0.4,8.3c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.1-0.4,0.1
                                                        l-8.5-0.4c-2.9-0.1-5.3-1.2-6.9-3.1c-1.8-2-2.6-4.6-2.4-7.8l0.4-5.7c0-0.2,0.2-0.4,0.4-0.4l5.7-0.6
                                                        c3.3-0.3,6.1,0.4,8.2,2.2C510.2,423.6,510.4,423.7,510.5,423.9z M512.7,438.2l-0.4-7.8c-0.1-2.7-1.1-4.8-2.9-6.3
                                                        c-1.9-1.6-4.5-2.3-7.5-2l-5.3,0.5l-0.3,5.3c-0.2,2.9,0.6,5.3,2.1,7.1c1.5,1.7,3.7,2.6,6.3,2.7L512.7,438.2z"/>
                                                    <path fill="#EFE7DA" d="M503.3,421.2c-0.5,0-1,0-1.5,0.1l-5.7,0.6c-0.2,0-0.4,0.2-0.4,0.4l-0.4,5.7
                                                        c-0.2,3.1,0.6,5.8,2.4,7.8c1.7,1.9,4.1,2.9,6.9,3.1l8.5,0.4c0,0,0,0,0,0c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.4
                                                        l-0.4-8.3c-0.1-2.7-1.1-4.9-2.7-6.5c-0.2-0.2-0.3-0.3-0.5-0.5C508.3,421.9,506,421.2,503.3,421.2L503.3,421.2z
                                                        M512.7,438.2l-8-0.4c-2.6-0.1-4.8-1.1-6.3-2.7c-1.6-1.8-2.3-4.2-2.1-7.1l0.3-5.3l5.3-0.5c0.5,0,1-0.1,1.4-0.1
                                                        c2.4,0,4.5,0.7,6.1,2.1c1.7,1.5,2.7,3.7,2.9,6.3L512.7,438.2L512.7,438.2z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M497.2,422.3l32.3,32.3c0.2,0.2,0.2,0.5,0,0.7c-0.2,0.2-0.5,0.2-0.7,0l-32.3-32.3
                                                    c-0.2-0.2-0.2-0.5,0-0.7C496.8,422.1,497.1,422.1,497.2,422.3z"/>
                                                <path fill="#EFE7DA" d="M496.9,422.1c-0.1,0-0.2,0-0.3,0.1c-0.2,0.2-0.2,0.5,0,0.7l32.3,32.3c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1c0.2-0.2,0.2-0.5,0-0.7l-32.3-32.3C497.1,422.2,497,422.1,496.9,422.1L496.9,422.1z"/>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M529.2,422.7c0.2,0.2,0.2,0.5,0,0.7l-31.9,31.9c-0.2,0.2-0.5,0.2-0.7,0c-0.2-0.2-0.2-0.5,0-0.7
                                                    l31.9-31.9C528.7,422.5,529,422.5,529.2,422.7z"/>
                                                <path fill="#EFE7DA" d="M528.9,422.5c-0.1,0-0.2,0-0.3,0.1l-31.9,31.9c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1l31.9-31.9c0.2-0.2,0.2-0.5,0-0.7C529.1,422.6,529,422.5,528.9,422.5L528.9,422.5z"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M530.3,456.1c0.1,0.1,0.1,0.2,0.1,0.3l0.6,5.7c0.3,3.3-0.4,6.1-2.2,8.2c-1.7,1.9-4.1,3-7,3.2
                                                        l-8.3,0.4c-0.1,0-0.3,0-0.4-0.1c0,0,0,0,0,0c-0.1-0.1-0.1-0.2-0.1-0.3l0.4-8.5c0.1-2.9,1.2-5.3,3.1-6.9
                                                        c2-1.8,4.6-2.6,7.8-2.4l5.7,0.4C530.1,455.9,530.2,456,530.3,456.1z M514,472.9l7.8-0.4c2.7-0.1,4.8-1.1,6.3-2.9
                                                        c1.6-1.9,2.3-4.5,2-7.5l-0.5-5.3l-5.3-0.3c-2.9-0.2-5.3,0.6-7.1,2.1c-1.7,1.5-2.6,3.7-2.7,6.3L514,472.9z"/>
                                                    <path fill="#EFE7DA" d="M523.3,455.5c-2.7,0-5.1,0.8-6.9,2.4c-1.9,1.7-2.9,4.1-3.1,6.9l-0.4,8.5c0,0.1,0,0.3,0.1,0.3
                                                        c0,0,0,0,0,0c0.1,0.1,0.2,0.1,0.3,0.1c0,0,0,0,0,0l8.3-0.4c2.9-0.2,5.3-1.3,7-3.2c1.8-2.1,2.5-4.9,2.2-8.2l-0.6-5.7
                                                        c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.1l-5.7-0.4C524,455.5,523.7,455.5,523.3,455.5L523.3,455.5z M514,472.9
                                                        l0.4-8c0.1-2.6,1.1-4.8,2.7-6.3c1.6-1.4,3.7-2.2,6.2-2.2c0.3,0,0.6,0,0.9,0l5.3,0.3l0.5,5.3c0.3,3-0.4,5.6-2,7.5
                                                        c-1.5,1.7-3.7,2.7-6.3,2.9L514,472.9L514,472.9z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M513.7,472.9c0.1,0.1,0.1,0.2,0.1,0.3l-0.4,8.5c-0.1,2.9-1.2,5.3-3.1,6.9c-2,1.8-4.6,2.6-7.8,2.4
                                                        l-5.7-0.4c-0.2,0-0.4-0.2-0.4-0.4l-0.6-5.7c-0.3-3.3,0.4-6.1,2.2-8.2c1.7-1.9,4.1-3,7-3.2l8.3-0.4
                                                        C513.4,472.7,513.6,472.8,513.7,472.9z M497.3,489.8l5.3,0.3c2.9,0.2,5.3-0.6,7.1-2.1c1.7-1.5,2.6-3.7,2.7-6.3l0.4-8
                                                        l-7.8,0.4c-2.7,0.1-4.8,1.1-6.3,2.9c-1.6,1.9-2.3,4.5-2,7.5L497.3,489.8z"/>
                                                    <path fill="#EFE7DA" d="M513.3,472.8C513.3,472.8,513.3,472.8,513.3,472.8l-8.3,0.4c-2.9,0.2-5.3,1.3-7,3.2
                                                        c-1.8,2.1-2.5,4.9-2.2,8.2l0.6,5.7c0,0.2,0.2,0.4,0.4,0.4l5.7,0.4c0.3,0,0.6,0,0.9,0c2.7,0,5.1-0.8,6.9-2.4
                                                        c1.9-1.7,2.9-4.1,3.1-6.9l0.4-8.5c0-0.1,0-0.3-0.1-0.3C513.6,472.8,513.5,472.8,513.3,472.8L513.3,472.8z M512.9,473.7
                                                        l-0.4,8c-0.1,2.6-1.1,4.8-2.7,6.3c-1.6,1.4-3.7,2.2-6.2,2.2c-0.3,0-0.6,0-0.9,0l-5.3-0.3l-0.5-5.3c-0.3-3,0.4-5.6,2-7.5
                                                        c1.5-1.7,3.7-2.7,6.3-2.9L512.9,473.7L512.9,473.7z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M528.5,476c0.1,0.1,0.2,0.2,0.3,0.3c1.8,2,2.6,4.6,2.4,7.8l-0.4,5.7c0,0.2-0.2,0.4-0.4,0.4
                                                        l-5.7,0.6c-3.3,0.3-6.1-0.4-8.2-2.2c-1.9-1.7-3-4.1-3.2-7l-0.4-8.3c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.2-0.1,0.4-0.1l8.5,0.4
                                                        C524.6,473.4,526.8,474.4,528.5,476z M529.9,489.4l0.3-5.3c0.2-2.9-0.6-5.3-2.1-7.1c-1.5-1.7-3.7-2.6-6.3-2.7l-8-0.4
                                                        l0.4,7.8c0.1,2.7,1.1,4.8,2.9,6.3c1.9,1.6,4.5,2.3,7.5,2L529.9,489.4z"/>
                                                    <path fill="#EFE7DA" d="M513.3,472.9c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.4l0.4,8.3c0.2,2.9,1.3,5.3,3.2,7
                                                        c1.8,1.5,4.1,2.3,6.7,2.3c0.5,0,1,0,1.5-0.1l5.7-0.6c0.2,0,0.4-0.2,0.4-0.4l0.4-5.7c0.2-3.1-0.6-5.8-2.4-7.8
                                                        c-0.1-0.1-0.2-0.2-0.3-0.3c-1.6-1.6-3.9-2.6-6.6-2.7L513.3,472.9C513.4,472.9,513.3,472.9,513.3,472.9L513.3,472.9z
                                                        M523.2,490c-2.4,0-4.5-0.7-6.1-2.1c-1.7-1.5-2.7-3.7-2.9-6.3l-0.4-7.8l8,0.4c2.6,0.1,4.8,1.1,6.3,2.7
                                                        c1.6,1.8,2.3,4.2,2.1,7.1l-0.3,5.3l-5.3,0.5C524.1,490,523.7,490,523.2,490L523.2,490z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M510.8,458.4c1.6,1.6,2.6,3.9,2.7,6.5l0.4,8.3c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.1-0.4,0.1
                                                        l-8.5-0.4c-2.9-0.1-5.3-1.2-6.9-3.1c-1.8-2-2.6-4.6-2.4-7.8l0.4-5.7c0-0.2,0.2-0.4,0.4-0.4l5.7-0.6
                                                        c3.3-0.3,6.1,0.4,8.2,2.2C510.5,458.1,510.7,458.2,510.8,458.4z M513,472.7l-0.4-7.8c-0.1-2.7-1.1-4.8-2.9-6.3
                                                        c-1.9-1.6-4.5-2.3-7.5-2l-5.3,0.5l-0.3,5.3c-0.2,2.9,0.6,5.3,2.1,7.1c1.5,1.7,3.7,2.6,6.3,2.7L513,472.7z"/>
                                                    <path fill="#EFE7DA" d="M503.6,455.7c-0.5,0-1,0-1.5,0.1l-5.7,0.6c-0.2,0-0.4,0.2-0.4,0.4l-0.4,5.7
                                                        c-0.2,3.1,0.6,5.8,2.4,7.8c1.7,1.9,4.1,2.9,6.9,3.1l8.5,0.4c0,0,0,0,0,0c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.4
                                                        l-0.4-8.3c-0.1-2.7-1.1-4.9-2.7-6.5c-0.2-0.2-0.3-0.3-0.5-0.5C508.6,456.4,506.3,455.7,503.6,455.7L503.6,455.7z
                                                        M513,472.7l-8-0.4c-2.6-0.1-4.8-1.1-6.3-2.7c-1.6-1.8-2.3-4.2-2.1-7.1l0.3-5.3l5.3-0.5c0.5,0,1-0.1,1.4-0.1
                                                        c2.4,0,4.5,0.7,6.1,2.1c1.7,1.5,2.7,3.7,2.9,6.3L513,472.7L513,472.7z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M497.5,456.8l32.3,32.3c0.2,0.2,0.2,0.5,0,0.7c-0.2,0.2-0.5,0.2-0.7,0l-32.3-32.3
                                                    c-0.2-0.2-0.2-0.5,0-0.7C497.1,456.6,497.4,456.6,497.5,456.8z"/>
                                                <path fill="#EFE7DA" d="M497.2,456.6c-0.1,0-0.2,0-0.3,0.1c-0.2,0.2-0.2,0.5,0,0.7l32.3,32.3c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1c0.2-0.2,0.2-0.5,0-0.7l-32.3-32.3C497.5,456.7,497.3,456.6,497.2,456.6L497.2,456.6z"/>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#FFFFFF" d="M529.5,457.1c0.2,0.2,0.2,0.5,0,0.7l-31.9,31.9c-0.2,0.2-0.5,0.2-0.7,0c-0.2-0.2-0.2-0.5,0-0.7
                                                    l31.9-31.9C529,457,529.3,457,529.5,457.1z"/>
                                                <path fill="#EFE7DA" d="M529.2,457c-0.1,0-0.2,0-0.3,0.1L497,489c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1
                                                    c0.1,0,0.2,0,0.3-0.1l31.9-31.9c0.2-0.2,0.2-0.5,0-0.7C529.4,457,529.3,457,529.2,457L529.2,457z"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g id="Nook_table_00000060025400642354345220000003380954035821790606_">
                            <g>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M444.9,553.3l-1.6-0.1
                                    c-0.6-0.1-1.1-0.6-1-1.2l0,0c0.1-0.6,0.6-1.1,1.2-1l1.6,0.1c0.6,0.1,1.1,0.6,1,1.2l0,0C446,552.9,445.5,553.3,444.9,553.3z"/>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M445,553.5c0,0-0.1,0-0.1,0l-1.6-0.1
                                    c-0.7-0.1-1.3-0.7-1.2-1.4c0-0.3,0.2-0.7,0.5-0.9c0.3-0.2,0.6-0.3,1-0.3l1.6,0.1c0.3,0,0.7,0.2,0.9,0.5c0.2,0.3,0.3,0.6,0.3,1
                                    C446.2,552.9,445.6,553.5,445,553.5z M444.9,553.1c0.5,0,0.9-0.3,1-0.8c0-0.2-0.1-0.5-0.2-0.7c-0.2-0.2-0.4-0.3-0.6-0.3
                                    l-1.6-0.1c-0.2,0-0.5,0.1-0.7,0.2c-0.2,0.2-0.3,0.4-0.3,0.6c0,0.5,0.3,0.9,0.8,1L444.9,553.1z"/>
                            </g>
                            <g>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M455,554.1l-1.6-0.1
                                    c-0.6-0.1-1.1-0.6-1-1.2l0,0c0.1-0.6,0.6-1.1,1.2-1l1.6,0.1c0.6,0.1,1.1,0.6,1,1.2l0,0C456.1,553.7,455.6,554.2,455,554.1z"/>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M455.1,554.3c0,0-0.1,0-0.1,0l-1.6-0.1
                                    c-0.7-0.1-1.3-0.7-1.2-1.4c0.1-0.7,0.7-1.2,1.4-1.2l1.6,0.1c0.3,0,0.7,0.2,0.9,0.5c0.2,0.3,0.3,0.6,0.3,1
                                    c0,0.3-0.2,0.7-0.5,0.9C455.7,554.2,455.4,554.3,455.1,554.3z M453.4,552c-0.5,0-0.9,0.4-0.9,0.8c0,0.5,0.3,0.9,0.8,1l1.6,0.1
                                    c0.2,0,0.5-0.1,0.7-0.2s0.3-0.4,0.3-0.6c0-0.2-0.1-0.5-0.2-0.7c-0.2-0.2-0.4-0.3-0.6-0.3L453.4,552
                                    C453.5,552,453.5,552,453.4,552z"/>
                            </g>
                            <g>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M449.4,571.3l-3.6-0.3
                                    c-4.1-0.4-7.2-4-6.9-8.1l0.3-3.1c0.4-4.1,4-7.2,8.1-6.9l3.6,0.3c4.1,0.3,7.2,4,6.9,8.1l-0.3,3.1
                                    C457.2,568.5,453.5,571.6,449.4,571.3z"/>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M450.6,571.6c-0.2,0-0.4,0-0.6,0
                                    l-4.8-0.4c-3.9-0.3-6.8-3.8-6.5-7.7l0.4-4.3c0.2-1.9,1.1-3.6,2.5-4.8c1.5-1.2,3.3-1.8,5.2-1.7l4.8,0.4c3.9,0.3,6.8,3.8,6.5,7.7
                                    l-0.4,4.3c-0.2,1.9-1.1,3.6-2.5,4.8C453.9,571,452.3,571.6,450.6,571.6z M450,571.1c1.8,0.2,3.5-0.4,4.9-1.6
                                    c1.4-1.2,2.2-2.8,2.4-4.6l0.4-4.3c0.3-3.7-2.4-7-6.1-7.3l-4.8-0.4c-1.8-0.2-3.5,0.4-4.9,1.6c-1.4,1.2-2.2,2.8-2.4,4.6l-0.4,4.3
                                    c-0.3,3.7,2.4,7,6.1,7.3L450,571.1z"/>
                            </g>
                            <g>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M456.1,552.6l-14-1.2c-2-0.2-3.6-2-3.4-4
                                    l0,0c0.2-2,2-3.6,4-3.4l14,1.2c2,0.2,3.6,2,3.4,4l0,0C460,551.2,458.1,552.8,456.1,552.6z"/>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M456.4,552.8c-0.1,0-0.2,0-0.3,0l-14-1.2
                                    c-2.2-0.2-3.8-2.1-3.6-4.2c0.1-1,0.6-2,1.4-2.7c0.8-0.7,1.8-1,2.9-0.9l14,1.2c1,0.1,2,0.6,2.7,1.4c0.7,0.8,1,1.8,0.9,2.9
                                    c-0.1,1-0.6,2-1.4,2.7C458.2,552.5,457.3,552.8,456.4,552.8z M442.5,544.2c-0.8,0-1.6,0.3-2.3,0.8c-0.7,0.6-1.2,1.5-1.2,2.4
                                    c-0.2,1.9,1.3,3.6,3.2,3.8l14,1.2c0.9,0.1,1.8-0.2,2.6-0.8c0.7-0.6,1.2-1.5,1.2-2.4c0.1-0.9-0.2-1.8-0.8-2.6
                                    c-0.6-0.7-1.5-1.2-2.4-1.2l-14-1.2C442.7,544.2,442.6,544.2,442.5,544.2z"/>
                            </g>
                            <g>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M436.1,568.9L436.1,568.9
                                    c-1.2-0.1-2.1-1.2-2-2.4l1-12.1c0.1-1.2,1.2-2.1,2.3-2l0,0c1.2,0.1,2.1,1.2,2,2.3l-1,12.1C438.3,568.1,437.3,569,436.1,568.9z"
                                    />
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M436.3,569.1c-0.1,0-0.1,0-0.2,0l0,0
                                    c-1.3-0.1-2.3-1.3-2.2-2.6l1-12.1c0.1-0.6,0.4-1.2,0.8-1.6c0.5-0.4,1.1-0.6,1.7-0.6c0.6,0.1,1.2,0.4,1.6,0.8
                                    c0.4,0.5,0.6,1.1,0.6,1.7l-1,12.1C438.5,568.2,437.5,569.1,436.3,569.1z M436.1,568.7c1.1,0.1,2-0.7,2.1-1.8l1-12.1
                                    c0-0.5-0.1-1-0.5-1.4c-0.3-0.4-0.8-0.7-1.3-0.7c-0.5,0-1,0.1-1.4,0.5c-0.4,0.3-0.7,0.8-0.7,1.3l-1,12.1
                                    C434.2,567.7,435,568.6,436.1,568.7L436.1,568.7z"/>
                            </g>
                            <g>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M459.5,571L459.5,571
                                    c-1.2-0.1-2.1-1.2-2-2.3l1-12.1c0.1-1.2,1.2-2.1,2.3-2l0,0c1.2,0.1,2.1,1.2,2,2.4l-1,12.1C461.7,570.2,460.7,571.1,459.5,571z"
                                    />
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M459.7,571.2c-0.1,0-0.1,0-0.2,0
                                    c-0.6-0.1-1.2-0.4-1.6-0.8c-0.4-0.5-0.6-1.1-0.6-1.7l1-12.1c0.1-1.3,1.3-2.3,2.6-2.2c1.3,0.1,2.3,1.3,2.2,2.6l-1,12.1
                                    c-0.1,0.6-0.4,1.2-0.8,1.6C460.8,571,460.2,571.2,459.7,571.2z M460.7,554.8c-1,0-1.9,0.8-2,1.8l-1,12.1c0,0.5,0.1,1,0.5,1.4
                                    c0.3,0.4,0.8,0.7,1.3,0.7l0,0c0.5,0,1-0.1,1.4-0.5c0.4-0.3,0.7-0.8,0.7-1.3l1-12.1c0.1-1.1-0.7-2-1.8-2.1
                                    C460.8,554.8,460.7,554.8,460.7,554.8z"/>
                            </g>
                            <g>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M405.4,580.6l-0.8,1.4
                                    c-0.3,0.5-1,0.7-1.5,0.4l0,0c-0.5-0.3-0.7-1-0.4-1.5l0.8-1.4c0.3-0.5,1-0.7,1.5-0.4l0,0C405.5,579.4,405.7,580,405.4,580.6z"/>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M403.6,582.7c-0.2,0-0.5-0.1-0.7-0.2
                                    c-0.3-0.2-0.5-0.5-0.6-0.8c-0.1-0.3,0-0.7,0.1-1l0.8-1.4c0.2-0.3,0.5-0.5,0.8-0.6c0.3-0.1,0.7,0,1,0.1c0.6,0.4,0.8,1.2,0.5,1.8
                                    l-0.8,1.4c-0.2,0.3-0.5,0.5-0.8,0.6C403.8,582.7,403.7,582.7,403.6,582.7z M404.4,579.1c-0.3,0-0.6,0.2-0.8,0.4l-0.8,1.4
                                    c-0.1,0.2-0.2,0.5-0.1,0.7c0.1,0.2,0.2,0.4,0.4,0.6c0.2,0.1,0.5,0.2,0.7,0.1c0.2-0.1,0.4-0.2,0.6-0.4l0.8-1.4
                                    c0.3-0.4,0.1-1-0.3-1.2C404.8,579.1,404.6,579.1,404.4,579.1z"/>
                            </g>
                            <g>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M410.5,571.8l-0.8,1.4
                                    c-0.3,0.5-1,0.7-1.5,0.4l0,0c-0.5-0.3-0.7-1-0.4-1.5l0.8-1.4c0.3-0.5,1-0.7,1.5-0.4l0,0C410.7,570.6,410.8,571.3,410.5,571.8z"
                                    />
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M408.7,574c-0.2,0-0.5-0.1-0.7-0.2
                                    c-0.3-0.2-0.5-0.5-0.6-0.8c-0.1-0.3,0-0.7,0.1-1l0.8-1.4c0.2-0.3,0.5-0.5,0.8-0.6c0.3-0.1,0.7,0,1,0.1c0.6,0.4,0.8,1.2,0.5,1.8
                                    l-0.8,1.4C409.6,573.8,409.2,574,408.7,574z M409.6,570.4c-0.1,0-0.2,0-0.2,0c-0.2,0.1-0.4,0.2-0.6,0.4l-0.8,1.4
                                    c-0.1,0.2-0.2,0.5-0.1,0.7c0.1,0.2,0.2,0.4,0.4,0.6c0.4,0.3,1,0.1,1.2-0.3l0.8-1.4c0.3-0.4,0.1-1-0.3-1.2
                                    C409.9,570.4,409.7,570.4,409.6,570.4z"/>
                            </g>
                            <g>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M423.6,584.2l-1.8,3.1
                                    c-2.1,3.6-6.7,4.8-10.3,2.7l-2.7-1.6c-3.6-2.1-4.8-6.7-2.7-10.3l1.8-3.1c2.1-3.6,6.7-4.8,10.3-2.7l2.7,1.6
                                    C424.5,576,425.7,580.7,423.6,584.2z"/>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M415.5,591.5c-1.2,0-2.5-0.3-3.6-1
                                    l-3.7-2.2c-1.6-1-2.8-2.5-3.3-4.3c-0.5-1.8-0.2-3.8,0.7-5.4l2.4-4.1c2-3.4,6.4-4.5,9.7-2.5l3.7,2.2c3.4,2,4.5,6.4,2.5,9.7
                                    l-2.4,4.1c-1,1.6-2.5,2.8-4.3,3.3C416.7,591.4,416.1,591.5,415.5,591.5z M414.2,571.3c-2.3,0-4.6,1.2-5.8,3.3l-2.4,4.1
                                    c-0.9,1.5-1.2,3.4-0.7,5.1c0.5,1.7,1.6,3.2,3.1,4.1l3.7,2.2c1.5,0.9,3.4,1.2,5.1,0.7c1.7-0.5,3.2-1.6,4.1-3.1l2.4-4.1
                                    c1.9-3.2,0.8-7.3-2.4-9.2l-3.7-2.2C416.6,571.6,415.4,571.3,414.2,571.3z"/>
                            </g>
                            <g>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M409.6,570.1l-7.1,12.1
                                    c-1,1.8-3.3,2.4-5.1,1.3l0,0c-1.8-1-2.4-3.3-1.3-5.1l7.1-12.1c1-1.8,3.3-2.4,5.1-1.3l0,0C410.1,566.1,410.7,568.4,409.6,570.1z
                                    "/>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M399.3,584.3c-0.7,0-1.4-0.2-2-0.5
                                    c-0.9-0.5-1.5-1.4-1.8-2.4c-0.3-1-0.1-2.1,0.4-3l7.1-12.1c1.1-1.9,3.5-2.5,5.4-1.4c1.9,1.1,2.5,3.5,1.4,5.4l-7.1,12.1
                                    c-0.5,0.9-1.4,1.5-2.4,1.8C400,584.2,399.7,584.3,399.3,584.3z M406.4,564.7c-1.2,0-2.4,0.6-3,1.7l-7.1,12.1
                                    c-0.5,0.8-0.6,1.8-0.4,2.7c0.2,0.9,0.8,1.7,1.6,2.1c0.8,0.5,1.8,0.6,2.7,0.4c0.9-0.2,1.7-0.8,2.1-1.6l7.1-12.1
                                    c1-1.7,0.4-3.8-1.3-4.8C407.7,564.9,407,564.7,406.4,564.7z"/>
                            </g>
                            <g>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M415.8,595.3L415.8,595.3
                                    c-0.6,1-1.9,1.4-3,0.8l-10.5-6.1c-1-0.6-1.4-1.9-0.8-3l0,0c0.6-1,1.9-1.4,3-0.8l10.5,6.1C416,592.9,416.4,594.2,415.8,595.3z"
                                    />
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M413.9,596.5c-0.4,0-0.8-0.1-1.2-0.3
                                    l-10.5-6.1c-0.5-0.3-0.9-0.8-1.1-1.4c-0.2-0.6-0.1-1.3,0.2-1.8c0.3-0.5,0.8-0.9,1.4-1.1c0.6-0.2,1.3-0.1,1.8,0.2l10.5,6.1
                                    c1.1,0.7,1.5,2.1,0.8,3.2l0,0C415.5,596.1,414.7,596.5,413.9,596.5z M403.4,586.1c-0.2,0-0.3,0-0.5,0.1
                                    c-0.5,0.1-0.9,0.5-1.2,0.9c-0.3,0.5-0.3,1-0.2,1.5c0.1,0.5,0.5,0.9,0.9,1.2l10.5,6.1c0.9,0.5,2.1,0.2,2.7-0.7l0,0
                                    c0.5-0.9,0.2-2.1-0.7-2.7l-10.5-6.1C404.1,586.1,403.8,586.1,403.4,586.1z"/>
                            </g>
                            <g>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M427.7,575L427.7,575
                                    c-0.6,1-1.9,1.4-3,0.8l-10.5-6.1c-1-0.6-1.4-1.9-0.8-3l0,0c0.6-1,1.9-1.4,3-0.8l10.5,6.1C428,572.7,428.3,574,427.7,575z"/>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M425.8,576.3c-0.4,0-0.8-0.1-1.2-0.3
                                    l-10.5-6.1c-1.1-0.7-1.5-2.1-0.8-3.2c0.3-0.5,0.8-0.9,1.4-1.1c0.6-0.2,1.3-0.1,1.8,0.2l10.5,6.1c0.5,0.3,0.9,0.8,1.1,1.4
                                    c0.2,0.6,0.1,1.3-0.2,1.8c-0.3,0.5-0.8,0.9-1.4,1.1C426.2,576.3,426,576.3,425.8,576.3z M415.4,565.8c-0.2,0-0.3,0-0.5,0.1
                                    c-0.5,0.1-0.9,0.5-1.2,0.9c-0.5,0.9-0.2,2.1,0.7,2.7l10.5,6.1c0.5,0.3,1,0.3,1.5,0.2c0.5-0.1,0.9-0.5,1.2-0.9l0,0
                                    c0.3-0.5,0.3-1,0.2-1.5c-0.1-0.5-0.5-0.9-0.9-1.2l-10.5-6.1C416.1,565.9,415.7,565.8,415.4,565.8z"/>
                            </g>
                            <g>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M415,629.5l1.1,1.2
                                    c0.4,0.5,0.4,1.2-0.1,1.6l0,0c-0.5,0.4-1.2,0.4-1.6-0.1l-1.1-1.2c-0.4-0.5-0.4-1.2,0.1-1.6l0,0
                                    C413.9,629,414.6,629.1,415,629.5z"/>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M415.2,632.8
                                    C415.2,632.8,415.2,632.8,415.2,632.8c-0.4,0-0.8-0.2-1-0.4l-1.1-1.2c-0.2-0.3-0.3-0.6-0.3-0.9c0-0.3,0.2-0.7,0.4-0.9
                                    c0.3-0.2,0.6-0.3,0.9-0.3c0.3,0,0.7,0.2,0.9,0.4l1.1,1.2c0.2,0.3,0.3,0.6,0.3,0.9c0,0.3-0.2,0.7-0.4,0.9
                                    C415.9,632.7,415.5,632.8,415.2,632.8z M414.1,629.3c-0.2,0-0.4,0.1-0.6,0.2c-0.2,0.2-0.3,0.4-0.3,0.6c0,0.2,0.1,0.5,0.2,0.7
                                    l1.1,1.2c0.2,0.2,0.4,0.3,0.6,0.3c0.2,0,0.5-0.1,0.7-0.2c0.2-0.2,0.3-0.4,0.3-0.6c0-0.2-0.1-0.5-0.2-0.7l-1.1-1.2
                                    C414.7,629.5,414.4,629.4,414.1,629.3C414.2,629.3,414.2,629.3,414.1,629.3z"/>
                            </g>
                            <g>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M408.2,621.9l1.1,1.2
                                    c0.4,0.5,0.4,1.2-0.1,1.6l0,0c-0.5,0.4-1.2,0.4-1.6-0.1l-1.1-1.2c-0.4-0.5-0.4-1.2,0.1-1.6l0,0
                                    C407.1,621.4,407.8,621.5,408.2,621.9z"/>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M408.5,625.2
                                    C408.5,625.2,408.4,625.2,408.5,625.2c-0.4,0-0.7-0.2-1-0.4l-1.1-1.2c-0.5-0.5-0.4-1.4,0.1-1.8c0.3-0.2,0.6-0.3,0.9-0.3
                                    c0.3,0,0.7,0.2,0.9,0.4l1.1,1.2c0.2,0.3,0.3,0.6,0.3,0.9c0,0.3-0.2,0.7-0.4,0.9C409.1,625.1,408.8,625.2,408.5,625.2z
                                    M407.4,621.7c-0.2,0-0.4,0.1-0.6,0.2c-0.4,0.3-0.4,0.9-0.1,1.3l1.1,1.2c0.2,0.2,0.4,0.3,0.6,0.3c0.2,0,0.5-0.1,0.7-0.2
                                    c0.2-0.2,0.3-0.4,0.3-0.6c0-0.2-0.1-0.5-0.2-0.7l-1.1-1.2C407.9,621.9,407.7,621.8,407.4,621.7
                                    C407.4,621.7,407.4,621.7,407.4,621.7z"/>
                            </g>
                            <g>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M424.1,613.3l2.4,2.7
                                    c2.8,3.1,2.5,7.9-0.6,10.6l-2.3,2.1c-3.1,2.7-7.9,2.5-10.6-0.6l-2.4-2.7c-2.8-3.1-2.5-7.9,0.6-10.6l2.3-2.1
                                    C416.6,609.9,421.4,610.2,424.1,613.3z"/>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M418.5,631c-0.1,0-0.3,0-0.4,0
                                    c-1.9-0.1-3.6-1-4.9-2.4l-3.2-3.6c-2.6-2.9-2.3-7.5,0.6-10.1l3.2-2.9c1.4-1.3,3.2-1.9,5.2-1.8c1.9,0.1,3.6,1,4.9,2.4l3.2,3.6
                                    c2.6,2.9,2.3,7.5-0.6,10.1l-3.2,2.9C421.9,630.4,420.2,631,418.5,631z M418.5,610.7c-1.6,0-3.2,0.6-4.4,1.7l-3.2,2.9
                                    c-2.8,2.5-3,6.7-0.6,9.5l3.2,3.6c1.2,1.3,2.8,2.1,4.6,2.2c1.8,0.1,3.5-0.5,4.9-1.7l3.2-2.9c2.8-2.5,3-6.7,0.6-9.5l-3.2-3.6
                                    c-1.2-1.3-2.8-2.1-4.6-2.2C418.8,610.8,418.6,610.7,418.5,610.7z"/>
                            </g>
                            <g>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M406.4,622.2l9.3,10.5
                                    c1.4,1.5,1.2,3.9-0.3,5.2l0,0c-1.5,1.4-3.9,1.2-5.2-0.3l-9.3-10.5c-1.4-1.5-1.2-3.9,0.3-5.2l0,0
                                    C402.6,620.6,405,620.7,406.4,622.2z"/>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M412.9,639.1c-0.1,0-0.2,0-0.2,0
                                    c-1-0.1-2-0.5-2.7-1.3l-9.3-10.5c-1.4-1.6-1.3-4.1,0.3-5.5c1.6-1.4,4.1-1.3,5.5,0.3l9.3,10.5c0.7,0.8,1,1.8,1,2.8
                                    c-0.1,1-0.5,2-1.3,2.7C414.8,638.8,413.9,639.1,412.9,639.1z M403.6,621.2c-0.8,0-1.7,0.3-2.3,0.9c-1.5,1.3-1.6,3.5-0.3,5
                                    l9.3,10.5c0.6,0.7,1.5,1.1,2.4,1.2c0.9,0.1,1.8-0.3,2.5-0.9c0.7-0.6,1.1-1.5,1.2-2.4c0.1-0.9-0.3-1.8-0.9-2.5l-9.3-10.5
                                    C405.5,621.6,404.6,621.2,403.6,621.2z"/>
                            </g>
                            <g>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M432.1,624.2L432.1,624.2
                                    c0.8,0.9,0.7,2.3-0.2,3.1l-9.1,8.1c-0.9,0.8-2.3,0.7-3.1-0.2l0,0c-0.8-0.9-0.7-2.3,0.2-3.1l9.1-8.1
                                    C430,623.2,431.3,623.3,432.1,624.2z"/>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M421.4,636.1c-0.7,0-1.3-0.3-1.8-0.8
                                    c-0.9-1-0.8-2.5,0.2-3.4l9.1-8.1c1-0.9,2.5-0.8,3.4,0.2c0.4,0.5,0.6,1.1,0.6,1.7c0,0.6-0.3,1.2-0.8,1.6l-9.1,8.1
                                    C422.6,635.9,422,636.1,421.4,636.1z M430.5,623.7c-0.5,0-0.9,0.2-1.3,0.5l-9.1,8.1c-0.4,0.3-0.6,0.8-0.7,1.4
                                    c0,0.5,0.1,1,0.5,1.4c0.7,0.8,2,0.9,2.8,0.2l9.1-8.1c0.8-0.7,0.9-2,0.2-2.8h0C431.6,623.9,431.1,623.7,430.5,623.7z"/>
                            </g>
                            <g>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M416.6,606.6L416.6,606.6
                                    c0.8,0.9,0.7,2.3-0.2,3.1l-9.1,8.1c-0.9,0.8-2.3,0.7-3.1-0.2l0,0c-0.8-0.9-0.7-2.3,0.2-3.1l9.1-8.1
                                    C414.5,605.6,415.8,605.7,416.6,606.6z"/>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M405.9,618.4c-0.7,0-1.3-0.3-1.8-0.8
                                    c-0.4-0.5-0.6-1.1-0.6-1.7c0-0.6,0.3-1.2,0.8-1.6l9.1-8.1c1-0.9,2.5-0.8,3.4,0.2l0,0c0.9,1,0.8,2.5-0.2,3.4l-9.1,8.1
                                    C407,618.3,406.5,618.4,405.9,618.4z M415,606c-0.5,0-0.9,0.2-1.3,0.5l-9.1,8.1c-0.4,0.3-0.6,0.8-0.7,1.4c0,0.5,0.1,1,0.5,1.4
                                    c0.3,0.4,0.8,0.6,1.4,0.7c0.5,0,1-0.1,1.4-0.5l9.1-8.1c0.8-0.7,0.9-2,0.2-2.8l0,0c-0.3-0.4-0.8-0.6-1.4-0.7
                                    C415.1,606,415,606,415,606z"/>
                            </g>
                            <g>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M465.2,636l1.5-0.7
                                    c0.6-0.3,1.2,0,1.5,0.5l0,0c0.3,0.6,0,1.2-0.5,1.5l-1.5,0.7c-0.6,0.3-1.2,0-1.5-0.5l0,0C464.4,636.9,464.7,636.2,465.2,636z"/>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M465.7,638.3c-0.2,0-0.3,0-0.4-0.1
                                    c-0.3-0.1-0.6-0.4-0.7-0.7c-0.3-0.7,0-1.4,0.6-1.7l1.5-0.7c0.3-0.1,0.7-0.2,1,0c0.3,0.1,0.6,0.4,0.7,0.7c0.3,0.7,0,1.4-0.6,1.7
                                    l-1.5,0.7C466.1,638.2,465.9,638.3,465.7,638.3z M465.3,636.1L465.3,636.1c-0.5,0.2-0.6,0.8-0.4,1.2c0.1,0.2,0.3,0.4,0.5,0.5
                                    c0.2,0.1,0.5,0.1,0.7,0l1.5-0.7c0.5-0.2,0.6-0.8,0.4-1.2c-0.1-0.2-0.3-0.4-0.5-0.5c-0.2-0.1-0.5-0.1-0.7,0L465.3,636.1z"/>
                            </g>
                            <g>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M456.1,640.3l1.5-0.7
                                    c0.6-0.3,1.2,0,1.5,0.5l0,0c0.3,0.6,0,1.2-0.5,1.5l-1.5,0.7c-0.6,0.3-1.2,0-1.5-0.5l0,0C455.3,641.2,455.5,640.5,456.1,640.3z"
                                    />
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M456.5,642.6c-0.5,0-1-0.3-1.2-0.8
                                    c-0.3-0.7,0-1.4,0.6-1.7l1.5-0.7c0.3-0.1,0.7-0.2,1,0c0.3,0.1,0.6,0.4,0.7,0.7c0.1,0.3,0.2,0.7,0,1c-0.1,0.3-0.4,0.6-0.7,0.7
                                    l-1.5,0.7C456.9,642.5,456.7,642.6,456.5,642.6z M456.1,640.5L456.1,640.5c-0.5,0.2-0.6,0.8-0.4,1.2c0.2,0.5,0.8,0.6,1.2,0.4
                                    l1.5-0.7c0.2-0.1,0.4-0.3,0.5-0.5c0.1-0.2,0.1-0.5,0-0.7c-0.1-0.2-0.3-0.4-0.5-0.5c-0.2-0.1-0.5-0.1-0.7,0L456.1,640.5z"/>
                            </g>
                            <g>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M452.3,622.6l3.2-1.5
                                    c3.8-1.8,8.3-0.1,10,3.6l1.3,2.8c1.8,3.8,0.1,8.3-3.6,10l-3.2,1.5c-3.8,1.8-8.3,0.1-10-3.6l-1.3-2.8
                                    C446.9,628.9,448.5,624.4,452.3,622.6z"/>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M456.6,640.2c-0.8,0-1.6-0.1-2.4-0.4
                                    c-1.8-0.6-3.2-1.9-4-3.7l-1.8-3.9c-0.8-1.7-0.9-3.6-0.2-5.4c0.6-1.8,1.9-3.2,3.7-4l4.3-2c1.7-0.8,3.6-0.9,5.4-0.2
                                    c1.8,0.6,3.2,1.9,4,3.7l1.8,3.9c1.7,3.6,0.1,7.8-3.4,9.5l-4.3,2C458.6,640,457.6,640.2,456.6,640.2z M459,620.4
                                    c-1,0-1.9,0.2-2.8,0.6l-4.3,2c-1.6,0.8-2.8,2.1-3.5,3.8c-0.6,1.7-0.5,3.5,0.2,5.1l1.8,3.9c0.8,1.6,2.1,2.8,3.8,3.5
                                    c1.7,0.6,3.5,0.5,5.1-0.2l4.3-2c3.4-1.6,4.8-5.6,3.2-8.9l-1.8-3.9c-0.8-1.6-2.1-2.8-3.8-3.5C460.6,620.5,459.8,620.4,459,620.4
                                    z"/>
                            </g>
                            <g>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M455.8,642.2l12.7-6
                                    c1.9-0.9,4.1-0.1,4.9,1.8l0,0c0.9,1.9,0.1,4.1-1.8,4.9l-12.7,6c-1.9,0.9-4.1,0.1-4.9-1.8l0,0C453.2,645.3,454,643,455.8,642.2z
                                    "/>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M457.4,649.4c-1.5,0-2.9-0.8-3.6-2.3
                                    c-0.4-0.9-0.5-2-0.1-3c0.4-1,1.1-1.8,2-2.2l12.7-6c2-0.9,4.3-0.1,5.2,1.9c0.9,2,0.1,4.3-1.9,5.2l-12.7,6
                                    C458.6,649.3,458,649.4,457.4,649.4z M470.1,636c-0.5,0-1,0.1-1.5,0.3l-12.7,6c-0.8,0.4-1.5,1.1-1.8,2
                                    c-0.3,0.9-0.3,1.8,0.1,2.7c0.8,1.8,2.9,2.5,4.7,1.7l12.7-6c1.8-0.8,2.5-2.9,1.7-4.7C472.7,636.8,471.4,636,470.1,636z"/>
                            </g>
                            <g>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M465,618L465,618c1.1-0.5,2.4,0,2.9,1
                                    l5.2,11c0.5,1.1,0,2.4-1,2.9l0,0c-1.1,0.5-2.4,0-2.9-1l-5.2-11C463.5,619.8,463.9,618.5,465,618z"/>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M471.1,633.3c-0.9,0-1.7-0.5-2.2-1.4
                                    l-5.2-11c-0.3-0.6-0.3-1.2-0.1-1.8c0.2-0.6,0.6-1.1,1.2-1.3l0,0c0.6-0.3,1.2-0.3,1.8-0.1c0.6,0.2,1.1,0.6,1.3,1.2l5.2,11
                                    c0.6,1.2,0,2.6-1.1,3.2C471.8,633.3,471.4,633.3,471.1,633.3z M465.9,618c-0.3,0-0.6,0.1-0.8,0.2l0,0c-0.5,0.2-0.8,0.6-1,1.1
                                    c-0.2,0.5-0.2,1,0.1,1.5l5.2,11c0.5,1,1.6,1.4,2.6,0.9c1-0.5,1.4-1.6,0.9-2.6l-5.2-11c-0.2-0.5-0.6-0.8-1.1-1
                                    C466.4,618,466.2,618,465.9,618z"/>
                            </g>
                            <g>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M443.7,627.9L443.7,627.9
                                    c1.1-0.5,2.4,0,2.9,1l5.2,11c0.5,1.1,0,2.4-1,2.9l0,0c-1.1,0.5-2.4,0-2.9-1l-5.2-11C442.2,629.7,442.6,628.4,443.7,627.9z"/>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M449.8,643.2c-0.9,0-1.7-0.5-2.2-1.4
                                    l-5.2-11c-0.6-1.2,0-2.6,1.1-3.2l0,0c1.2-0.6,2.6,0,3.2,1.1l5.2,11c0.3,0.6,0.3,1.2,0.1,1.8c-0.2,0.6-0.6,1.1-1.2,1.3
                                    C450.5,643.1,450.1,643.2,449.8,643.2z M443.8,628.1L443.8,628.1c-1,0.5-1.4,1.6-0.9,2.6l5.2,11c0.5,1,1.6,1.4,2.6,0.9
                                    c0.5-0.2,0.8-0.6,1-1.1c0.2-0.5,0.2-1-0.1-1.5l-5.2-11C446,628,444.8,627.6,443.8,628.1z"/>
                            </g>
                            <g>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M488,590.4l-0.1-1.6c0-0.6,0.4-1.1,1-1.2
                                    l0,0c0.6,0,1.1,0.4,1.2,1l0.1,1.6c0,0.6-0.4,1.1-1,1.2l0,0C488.6,591.5,488,591,488,590.4z"/>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M489.1,591.6c-0.3,0-0.6-0.1-0.8-0.3
                                    c-0.3-0.2-0.4-0.5-0.5-0.9l-0.1-1.6c0-0.3,0.1-0.7,0.3-1c0.2-0.3,0.5-0.4,0.9-0.5c0.3,0,0.7,0.1,1,0.3c0.3,0.2,0.4,0.5,0.5,0.9
                                    l0.1,1.6c0,0.3-0.1,0.7-0.3,1c-0.2,0.3-0.5,0.4-0.9,0.5C489.2,591.6,489.1,591.6,489.1,591.6z M489,587.8
                                    C488.9,587.8,488.9,587.8,489,587.8c-0.3,0-0.5,0.1-0.7,0.3c-0.2,0.2-0.2,0.4-0.2,0.7l0.1,1.6c0,0.2,0.1,0.5,0.3,0.6
                                    c0.2,0.2,0.4,0.2,0.7,0.2c0.2,0,0.5-0.1,0.6-0.3c0.2-0.2,0.2-0.4,0.2-0.7l-0.1-1.6c0-0.2-0.1-0.5-0.3-0.6
                                    C489.4,587.9,489.2,587.8,489,587.8z"/>
                            </g>
                            <g>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M488.8,600.5l-0.1-1.6
                                    c0-0.6,0.4-1.1,1-1.2l0,0c0.6,0,1.1,0.4,1.2,1l0.1,1.6c0,0.6-0.4,1.1-1,1.2l0,0C489.4,601.6,488.9,601.1,488.8,600.5z"/>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M489.9,601.8c-0.3,0-0.6-0.1-0.8-0.3
                                    c-0.3-0.2-0.4-0.5-0.5-0.9l-0.1-1.6c0-0.3,0.1-0.7,0.3-1c0.2-0.3,0.5-0.4,0.9-0.5c0.3,0,0.7,0.1,1,0.3c0.3,0.2,0.4,0.5,0.5,0.9
                                    l0.1,1.6c0.1,0.7-0.5,1.4-1.2,1.4C490,601.8,489.9,601.8,489.9,601.8z M489,600.5c0,0.2,0.1,0.5,0.3,0.6
                                    c0.2,0.2,0.4,0.2,0.7,0.2c0.5,0,0.9-0.5,0.8-1l-0.1-1.6c0-0.2-0.1-0.5-0.3-0.6c-0.2-0.2-0.4-0.2-0.7-0.2
                                    c-0.2,0-0.5,0.1-0.6,0.3c-0.2,0.2-0.2,0.4-0.2,0.7L489,600.5z"/>
                            </g>
                            <g>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M471,597.8l-0.3-3.6
                                    c-0.3-4.1,2.8-7.8,6.9-8.1l3.1-0.2c4.1-0.3,7.8,2.8,8.1,6.9l0.3,3.6c0.3,4.1-2.8,7.8-6.9,8.1l-3.1,0.2
                                    C474.9,605.1,471.3,602,471,597.8z"/>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M477.9,605c-1.7,0-3.3-0.6-4.6-1.7
                                    c-1.5-1.2-2.3-3-2.5-4.8l-0.4-4.8c-0.3-3.9,2.6-7.4,6.5-7.7l4.3-0.3c1.9-0.2,3.7,0.4,5.2,1.7c1.5,1.2,2.3,3,2.5,4.8l0.4,4.8
                                    c0.2,1.9-0.4,3.7-1.7,5.2c-1.2,1.5-3,2.3-4.8,2.5l-4.3,0.3C478.3,605,478.1,605,477.9,605z M481.8,586.1c-0.2,0-0.4,0-0.5,0
                                    l-4.3,0.3c-3.7,0.3-6.5,3.5-6.2,7.2l0.4,4.8c0.3,3.7,3.5,6.5,7.2,6.2l4.3-0.3c1.8-0.1,3.4-1,4.6-2.3c1.2-1.4,1.7-3.1,1.6-4.9
                                    l-0.4-4.8C488.3,588.7,485.3,586.1,481.8,586.1z"/>
                            </g>
                            <g>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M490.5,601.4l-1.1-14
                                    c-0.2-2,1.4-3.8,3.4-4l0,0c2-0.2,3.8,1.4,4,3.4l1.1,14c0.2,2-1.4,3.8-3.4,4l0,0C492.5,605,490.7,603.4,490.5,601.4z"/>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M494.2,605c-2,0-3.7-1.6-3.9-3.6l-1.1-14
                                    c-0.2-2.2,1.4-4,3.6-4.2c2.2-0.2,4,1.4,4.2,3.6l1.1,14c0.1,1-0.2,2.1-0.9,2.9c-0.7,0.8-1.6,1.3-2.7,1.4
                                    C494.4,605,494.3,605,494.2,605z M490.7,601.4c0.2,1.9,1.9,3.4,3.8,3.2c0.9-0.1,1.8-0.5,2.4-1.2c0.6-0.7,0.9-1.6,0.8-2.6
                                    l-1.1-14c-0.2-1.9-1.9-3.4-3.8-3.2c-1.9,0.2-3.4,1.9-3.2,3.8L490.7,601.4z"/>
                            </g>
                            <g>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M471.1,584.3L471.1,584.3
                                    c-0.1-1.2,0.8-2.2,2-2.3l12.1-1c1.2-0.1,2.2,0.8,2.3,2l0,0c0.1,1.2-0.8,2.2-2,2.3l-12.1,1C472.2,586.4,471.2,585.5,471.1,584.3
                                    z"/>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M473.3,586.5c-1.2,0-2.3-0.9-2.4-2.2
                                    c-0.1-0.6,0.1-1.2,0.6-1.7c0.4-0.5,1-0.8,1.6-0.8l12.1-1c0.6-0.1,1.2,0.1,1.7,0.6c0.5,0.4,0.8,1,0.8,1.6
                                    c0.1,1.3-0.9,2.5-2.2,2.6l-12.1,1C473.4,586.5,473.3,586.5,473.3,586.5z M485.4,581.2c-0.1,0-0.1,0-0.2,0l-12.1,1
                                    c-0.5,0-1,0.3-1.3,0.7c-0.3,0.4-0.5,0.9-0.5,1.4c0.1,1.1,1.1,1.9,2.1,1.8l12.1-1c1.1-0.1,1.9-1,1.8-2.1c0-0.5-0.3-1-0.7-1.3
                                    C486.3,581.4,485.8,581.2,485.4,581.2z"/>
                            </g>
                            <g>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M472.9,607.7L472.9,607.7
                                    c-0.1-1.2,0.8-2.2,2-2.3l12.1-1c1.2-0.1,2.2,0.8,2.3,2l0,0c0.1,1.2-0.8,2.2-2,2.3l-12.1,1C474,609.8,473,608.9,472.9,607.7z"/>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M475,609.9c-1.2,0-2.3-0.9-2.4-2.2
                                    c-0.1-0.6,0.1-1.2,0.6-1.7c0.4-0.5,1-0.8,1.6-0.8l12.1-1c1.3-0.1,2.5,0.9,2.6,2.2c0.1,1.3-0.9,2.5-2.2,2.6l-12.1,1
                                    C475.2,609.9,475.1,609.9,475,609.9z M487.1,604.6c-0.1,0-0.1,0-0.2,0l-12.1,1c-0.5,0-1,0.3-1.3,0.7c-0.3,0.4-0.5,0.9-0.5,1.4
                                    v0c0.1,1.1,1,1.9,2.1,1.8l12.1-1c1.1-0.1,1.9-1,1.8-2.1C489,605.4,488.2,604.6,487.1,604.6z"/>
                            </g>
                            <g>
                                
                                    <image overflow="visible" opacity="0.5" width="82" height="82" href="data:image/png;base64,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
            rkJggg==" transform="matrix(1 0 0 1 404 557)">
                                </image>
                                <g>
                                    <g>
                                        <path fill="#FFFFFF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M475.9,600.7
                                            c-1.5,17.2-16.5,29.9-33.7,28.4s-29.9-16.5-28.4-33.7c1.5-17.2,16.5-29.9,33.7-28.4C464.6,568.4,477.4,583.5,475.9,600.7z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M444.9,629.4c-0.9,0-1.8,0-2.7-0.1
                                            c-17.2-1.5-30.1-16.7-28.6-33.9c0.7-8.4,4.6-15.9,11-21.3c6.4-5.4,14.5-8,22.9-7.3c17.2,1.5,30.1,16.7,28.6,33.9
                                            C474.7,617,461,629.4,444.9,629.4z M444.8,567.1c-7.3,0-14.3,2.5-19.9,7.3c-6.3,5.3-10.2,12.8-10.9,21.1
                                            c-1.4,17,11.2,32,28.3,33.5c17,1.4,32-11.2,33.5-28.3l0.2,0l-0.2,0c1.4-17-11.2-32-28.3-33.5
                                            C446.6,567.1,445.7,567.1,444.8,567.1z"/>
                                    </g>
                                </g>
                            </g>
                            <g>
                                <path fill="#FFFFFF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M475.9,600.7
                                    c-1.5,17.2-16.5,29.9-33.7,28.4s-29.9-16.5-28.4-33.7c1.5-17.2,16.5-29.9,33.7-28.4C464.6,568.4,477.4,583.5,475.9,600.7z"/>
                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M444.9,629.4c-0.9,0-1.8,0-2.7-0.1
                                    c-17.2-1.5-30.1-16.7-28.6-33.9c0.7-8.4,4.6-15.9,11-21.3c6.4-5.4,14.5-8,22.9-7.3c17.2,1.5,30.1,16.7,28.6,33.9
                                    C474.7,617,461,629.4,444.9,629.4z M444.8,567.1c-7.3,0-14.3,2.5-19.9,7.3c-6.3,5.3-10.2,12.8-10.9,21.1
                                    c-1.4,17,11.2,32,28.3,33.5c17,1.4,32-11.2,33.5-28.3l0.2,0l-0.2,0c1.4-17-11.2-32-28.3-33.5
                                    C446.6,567.1,445.7,567.1,444.8,567.1z"/>
                            </g>
                            <g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M445.1,598.7c0.2-1.7,1.1-4,2.5-5.5
                                        c1.7-1.8,4.1-2.6,4.3-2.5c0.4,0.2-2.4,2.7-2.9,5C448.6,598.1,445.1,598.7,445.1,598.7z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M444.9,598.9l0-0.3c0.2-1.6,1-4,2.5-5.6
                                        c1.7-1.8,4.1-2.7,4.5-2.5c0.1,0,0.1,0.1,0.1,0.2c0,0.2-0.2,0.5-0.8,1.3c-0.8,1-1.9,2.4-2.2,3.8c-0.5,2.4-3.9,3.1-4,3.1
                                        L444.9,598.9z M451.7,590.9c-0.5,0.1-2.4,0.9-3.9,2.4c-1.3,1.4-2.1,3.5-2.4,5.1c0.8-0.2,3.1-0.9,3.4-2.7c0.3-1.5,1.5-3,2.2-4
                                        C451.3,591.4,451.5,591.1,451.7,590.9z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M445.6,597.8c0.3-3.3-3.5-6.1-3.9-6.2
                                        c-0.5-0.1,0.6,1.7,0.8,3c0.2,1.2,0.7,3.9,1.8,4.1C445.4,599,445.5,598.5,445.6,597.8z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M444.8,599c-0.2,0-0.4,0-0.6-0.1
                                        c-1.2-0.3-1.7-2.9-2-4.3c-0.1-0.5-0.4-1.2-0.6-1.7c-0.3-0.8-0.5-1.2-0.3-1.4c0.1-0.1,0.2-0.1,0.3-0.1c0.6,0.1,4.4,3,4.1,6.4
                                        l0,0c0,0.4-0.1,0.8-0.4,1.1C445.2,599,445.1,599,444.8,599z M441.8,591.9c0.1,0.2,0.2,0.6,0.3,0.9c0.2,0.6,0.5,1.2,0.6,1.8
                                        c0.2,1.1,0.7,3.7,1.7,4c0.4,0.1,0.6,0.1,0.8,0c0.2-0.1,0.2-0.4,0.2-0.8l0,0C445.7,594.9,442.6,592.4,441.8,591.9z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M446,597.8c2.5-0.9,5.1,5.6,5.6,6.1
                                        c0.5,0.5-0.7,0.1-1.2-0.6c-0.5-0.7-1.8-1.4-2.3-1.9C447.7,600.9,444,598.5,446,597.8z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M451.7,604.2c-0.3,0-1.1-0.4-1.5-0.9
                                        c-0.3-0.4-0.9-0.8-1.4-1.1c-0.4-0.3-0.7-0.5-0.9-0.7c-0.1-0.1-0.3-0.2-0.5-0.4c-1.2-1-2.4-2-2.3-2.8c0.1-0.3,0.3-0.6,0.7-0.7
                                        l0,0c2.1-0.7,4.1,3,5.2,5c0.3,0.5,0.5,1,0.6,1c0.1,0.1,0.2,0.2,0.2,0.4l0,0.1L451.7,604.2
                                        C451.8,604.2,451.7,604.2,451.7,604.2z M446.1,598c-0.3,0.1-0.4,0.2-0.5,0.4c-0.1,0.7,1.4,1.8,2.1,2.4
                                        c0.2,0.2,0.4,0.3,0.5,0.4c0.2,0.2,0.5,0.4,0.8,0.7c0.5,0.4,1.1,0.8,1.4,1.2c0.2,0.2,0.5,0.4,0.7,0.6c-0.1-0.2-0.3-0.5-0.5-0.8
                                        C449.9,601,447.8,597.3,446.1,598L446.1,598z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M444.9,598.6c0.4-2.3-4.2-0.7-5.8,0.3
                                        c-1.6,1-3.6,3-2.8,2.7c0.9-0.3,3.4-1.5,4.9-1.7C442.9,599.6,444.8,599.1,444.9,598.6z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M436.3,601.8c-0.2,0-0.2-0.1-0.2-0.1
                                        c-0.2-0.5,2.2-2.4,3.1-3c1.2-0.7,4.5-2,5.7-1.2c0.2,0.2,0.5,0.5,0.4,1.1l0,0c-0.2,0.9-3.4,1.4-3.8,1.5
                                        c-1.1,0.1-2.6,0.8-3.7,1.3c-0.5,0.2-0.9,0.4-1.1,0.5C436.4,601.8,436.3,601.8,436.3,601.8z M443.7,597.6
                                        c-1.3,0-3.4,0.8-4.5,1.4c-1.1,0.7-2.3,1.8-2.7,2.3c0.2-0.1,0.5-0.2,0.9-0.4c1.1-0.5,2.7-1.1,3.8-1.3c2-0.3,3.4-0.8,3.5-1.1
                                        l0,0c0.1-0.4,0-0.6-0.2-0.7C444.4,597.7,444.1,597.6,443.7,597.6z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M445.3,598.3c-3-0.1-2,4.6-2.3,5.6
                                        c-0.3,1-0.5,1.7-0.2,1.3c0.3-0.4,0.9-1.1,1.8-2.9C445.6,600.4,446.2,598.3,445.3,598.3z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M442.7,605.5c0,0-0.1,0-0.1,0
                                        c-0.2-0.1-0.1-0.3,0.1-1.1c0.1-0.2,0.1-0.4,0.2-0.6c0.1-0.2,0.1-0.7,0-1.2c0-1.3,0-3.2,0.9-4.1c0.4-0.4,0.9-0.6,1.5-0.5
                                        c0.2,0,0.4,0.1,0.5,0.3c0.4,0.7-0.3,2.6-1,4c-0.7,1.4-1.3,2.4-1.9,3C442.9,605.4,442.8,605.5,442.7,605.5z M442.6,605.1
                                        L442.6,605.1L442.6,605.1z M445.2,598.5c-0.5,0-0.9,0.1-1.2,0.4c-0.8,0.8-0.8,2.5-0.8,3.8c0,0.6,0,1-0.1,1.3
                                        c-0.1,0.2-0.1,0.4-0.2,0.6c0,0,0,0.1,0,0.1c0.4-0.6,0.9-1.4,1.4-2.4c0.8-1.6,1.3-3.2,1-3.6
                                        C445.4,598.5,445.4,598.5,445.2,598.5L445.2,598.5C445.3,598.5,445.2,598.5,445.2,598.5z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M445.9,597.8c2-1.1,3.2-0.2,4.2,0.3
                                        c1,0.5,2.8,0.9,2.4,1c-0.4,0.1-1.6-0.2-2.8-0.2C448.6,598.8,444.6,598.5,445.9,597.8z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M452.3,599.3c-0.3,0-0.6,0-1.1-0.1
                                        c-0.5-0.1-1-0.1-1.5-0.1c-1,0-4.1-0.2-4.2-1c0-0.2,0.1-0.4,0.4-0.5l0,0c1.8-1,3-0.4,4,0.1c0.1,0.1,0.2,0.1,0.3,0.2
                                        c0.5,0.2,1.1,0.4,1.6,0.6c0.8,0.3,1,0.3,1,0.6c0,0,0,0.2-0.2,0.2C452.5,599.3,452.4,599.3,452.3,599.3z M447.7,597.5
                                        c-0.5,0-1,0.1-1.7,0.5h0c-0.1,0.1-0.2,0.1-0.2,0.1c0.2,0.2,2.2,0.5,3.9,0.6c0.5,0,1.1,0.1,1.5,0.2c0.1,0,0.2,0,0.3,0
                                        c-0.5-0.2-1.1-0.4-1.5-0.6c-0.1-0.1-0.2-0.1-0.4-0.2C449.1,597.8,448.5,597.5,447.7,597.5z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M446.3,593.1c0.3,1.3,0.3,2.8-0.1,3.7
                                        c-0.5,0.9-0.6,1.6-0.8,1.3c-0.3-0.2-1-1-0.7-2.3c0.2-1.2,1.2-3.8,0.9-4.2C445.3,591.2,446.2,592.5,446.3,593.1z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M445.4,598.4c-0.1,0-0.2,0-0.2-0.1
                                        c-0.3-0.3-1-1.2-0.8-2.4c0.1-0.4,0.3-1.1,0.4-1.7c0.2-0.9,0.6-2.2,0.5-2.4c0-0.1-0.1-0.2,0-0.3l0.1-0.1l0.1,0
                                        c0.2,0.1,0.9,1.5,0.9,1.7l0,0c0.4,1.5,0.3,3-0.2,3.8c-0.2,0.3-0.3,0.6-0.4,0.8C445.8,598.1,445.7,598.3,445.4,598.4
                                        C445.5,598.4,445.4,598.4,445.4,598.4z M445.7,592.3c-0.1,0.4-0.2,1.1-0.5,1.9c-0.2,0.6-0.4,1.2-0.4,1.7c-0.2,1,0.3,1.7,0.6,2
                                        c0.1-0.1,0.1-0.3,0.2-0.4c0.1-0.2,0.2-0.5,0.4-0.8c0.4-0.8,0.5-2.1,0.1-3.5l0,0C446,592.9,445.9,592.6,445.7,592.3z"/>
                                </g>
                            </g>
                        </g>
                        <g id="Couch_00000057123432189481140470000008126168419744227735_">
                            
                                <image overflow="visible" opacity="0.4" width="114" height="216" href="data:image/png;base64,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" transform="matrix(1 0 0 1 312 307)">
                            </image>
                            <g>
                                <g>
                                    <g>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M417.2,464.7l0,32.7
                                            c0,4.7-3.8,8.6-8.6,8.6H376c-4.7,0-8.6-3.8-8.6-8.6l0-32.7c0-4.7,3.8-8.6,8.6-8.6l32.7,0
                                            C413.4,456.1,417.2,459.9,417.2,464.7z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M417.6,459l0,44c0,1.8-1.5,3.3-3.3,3.3
                                            l-44,0c-1.8,0-3.3-1.5-3.3-3.3l0-44c0-1.8,1.5-3.3,3.3-3.3l44,0C416.1,455.7,417.6,457.2,417.6,459z M367.7,503
                                            c0,1.4,1.1,2.6,2.6,2.6h44c1.4,0,2.6-1.1,2.6-2.6v-44c0-1.4-1.1-2.6-2.6-2.6l-44,0c-1.4,0-2.6,1.1-2.6,2.6V503z"/>
                                    </g>
                                    <g>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M417.1,323.5l0,32.7
                                            c0,4.7-3.8,8.6-8.6,8.6l-32.7,0c-4.7,0-8.6-3.8-8.6-8.6v-41.2h41.2C413.2,314.9,417.1,318.7,417.1,323.5z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M417.5,317.8v44c0,1.8-1.5,3.3-3.3,3.3
                                            h-44c-1.8,0-3.3-1.5-3.3-3.3l0-47.3l47.3,0C416,314.5,417.5,316,417.5,317.8z M367.6,361.8c0,1.4,1.1,2.6,2.6,2.6l44,0
                                            c1.4,0,2.6-1.1,2.6-2.6l0-44c0-1.4-1.1-2.6-2.6-2.6l-46.6,0L367.6,361.8z"/>
                                    </g>
                                    <g>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M367.2,314.9v41.2
                                            c0,4.7-3.8,8.6-8.6,8.6h-41.2l0-45.7c0-2.3,1.9-4.2,4.2-4.2L367.2,314.9z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M367.6,314.5l0,47.3
                                            c0,1.8-1.5,3.3-3.3,3.3H317v-48.8c0-1,0.8-1.8,1.8-1.8H367.6z M317.8,364.4l46.6,0c1.4,0,2.6-1.1,2.6-2.6l0-46.6l-48.1,0
                                            c-0.6,0-1.1,0.5-1.1,1.1L317.8,364.4z"/>
                                    </g>
                                    <g>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M317.4,364.7h41.2
                                            c4.7,0,8.6,3.8,8.6,8.6l0,41.2l-49.8,0L317.4,364.7z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M367.6,367.6l0,47.3l-50.6,0l0-50.6
                                            l47.3,0C366.1,364.4,367.6,365.8,367.6,367.6z M366.9,414.2v-46.6c0-1.4-1.1-2.6-2.6-2.6h-46.6v49.1L366.9,414.2z"/>
                                    </g>
                                    <g>
                                        
                                            <rect x="317.4" y="414.6" fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="49.8" height="49.8"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M367.6,414.2l0,50.6l-50.6,0l0-50.6
                                            L367.6,414.2z M366.9,464l0-49.1l-49.1,0l0,49.1H366.9z"/>
                                    </g>
                                    <g>
                                        
                                            <rect x="317.4" y="464.4" fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="49.8" height="48.8"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M367.6,464v49.5l-50.6,0V464H367.6z
                                            M366.9,512.8l0-48.1l-49.1,0l0,48.1L366.9,512.8z"/>
                                    </g>
                                    <g>
                                        <g>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M417.1,319.6v4.3
                                                c0,2.6-2.1,4.7-4.7,4.7l-40.4,0c-2.6,0-4.7-2.1-4.7-4.7v-9h45.1C415,314.9,417.1,317,417.1,319.6z"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M417.5,317.8v7.8
                                                c0,1.8-1.5,3.3-3.3,3.3l-44,0c-1.8,0-3.3-1.5-3.3-3.3v-11.1l47.3,0C416,314.5,417.5,316,417.5,317.8z M367.6,325.6
                                                c0,1.4,1.1,2.6,2.6,2.6h44c1.4,0,2.6-1.1,2.6-2.6v-7.8c0-1.4-1.1-2.6-2.6-2.6l-46.6,0L367.6,325.6z"/>
                                        </g>
                                        <g>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M367.2,316.2v-1.3
                                                c0-0.8,0.6-1.4,1.4-1.4h47c0.8,0,1.4,0.6,1.4,1.4v1.3c0,0.8-0.6,1.4-1.4,1.4h-47C367.9,317.6,367.2,317,367.2,316.2z"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M417.5,314.8v1.5
                                                c0,0.9-0.8,1.7-1.7,1.7h-47.2c-0.9,0-1.7-0.8-1.7-1.7v-1.5c0-0.9,0.8-1.7,1.7-1.7l47.2,0
                                                C416.7,313.1,417.5,313.8,417.5,314.8z M367.6,316.3c0,0.5,0.4,1,1,1l47.2,0c0.5,0,1-0.4,1-1v-1.5c0-0.5-0.4-1-1-1l-47.2,0
                                                c-0.5,0-1,0.4-1,1V316.3z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M367.2,319.6v4.3
                                            c0,2.6-2.1,4.7-4.7,4.7l-40.4,0c-2.6,0-4.7-2.1-4.7-4.7v-7.4c0-0.9,0.7-1.6,1.6-1.6l43.6,0
                                            C365.1,314.9,367.2,317,367.2,319.6z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M367.6,317.8l0,7.8
                                            c0,1.8-1.5,3.3-3.3,3.3l-44,0c-1.8,0-3.3-1.5-3.3-3.3v-9.8c0-0.7,0.6-1.4,1.4-1.4h45.9C366.1,314.5,367.6,316,367.6,317.8z
                                            M317.8,325.6c0,1.4,1.1,2.6,2.6,2.6l44,0c1.4,0,2.6-1.1,2.6-2.6v-7.8c0-1.4-1.1-2.6-2.6-2.6l-45.9,0c-0.3,0-0.6,0.3-0.6,0.6
                                            V325.6z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M321.1,317l11.1,11.6l0,31.9
                                            c0,2.4-1.9,4.3-4.3,4.3h-9.4l0-45.5C318.5,316.8,318.7,317,321.1,317z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M332.5,328.4l0,32
                                            c0,2.6-2.1,4.7-4.7,4.7h-9.7v-45.9c0-1.2,0.1-1.8,0.4-2.2c0.4-0.4,1-0.4,2.1-0.4l0.6,0L332.5,328.4z M318.9,364.4h9
                                            c2.2,0,3.9-1.8,3.9-3.9v-31.7l-10.9-11.4l-0.3,0c-0.8,0-1.4,0-1.6,0.2c-0.2,0.2-0.2,0.8-0.2,1.7L318.9,364.4z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M317.4,315.5c0,0.3,0,1.2,0,1.4l0,45.7
                                            c0,1.2,0.9,2.1,2.1,2.1c1.2,0,2.1-0.9,2.1-2.1l0-45h43.6c1.2,0,2.1-0.9,2.1-2.1c0-1.2-0.9-2.1-2.1-2.1l-45.7,0
                                            C318.3,313.4,317.4,314.4,317.4,315.5z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M367.6,315.5c0,1.4-1.1,2.5-2.5,2.5
                                            l-43.2,0l0,44.6c0,1.4-1.1,2.5-2.5,2.5c-1.4,0-2.5-1.1-2.5-2.5v-47.1c0-1.4,1.1-2.5,2.5-2.5h45.7
                                            C366.5,313.1,367.6,314.2,367.6,315.5z M317.8,362.6c0,1,0.8,1.7,1.7,1.7c1,0,1.7-0.8,1.7-1.7v-45.4h43.9
                                            c1,0,1.7-0.8,1.7-1.7c0-1-0.8-1.7-1.7-1.7l-45.7,0c-1,0-1.7,0.8-1.7,1.7L317.8,362.6z"/>
                                    </g>
                                    <g>
                                        <g>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M323.5,364.7h4.3
                                                c2.6,0,4.7,2.1,4.7,4.7v40.4c0,2.6-2.1,4.7-4.7,4.7h-9l0-45.1C318.8,366.8,320.9,364.7,323.5,364.7z"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M332.9,367.6l0,44
                                                c0,1.8-1.5,3.3-3.3,3.3l-11.1,0l0-47.3c0-1.8,1.5-3.3,3.3-3.3h7.8C331.4,364.4,332.9,365.8,332.9,367.6z M319.2,414.2h10.4
                                                c1.4,0,2.6-1.1,2.6-2.6l0-44c0-1.4-1.1-2.6-2.6-2.6h-7.8c-1.4,0-2.6,1.1-2.6,2.6V414.2z"/>
                                        </g>
                                        <g>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M320.2,414.6h-1.3
                                                c-0.8,0-1.4-0.6-1.4-1.4l0-47c0-0.8,0.6-1.4,1.4-1.4h1.3c0.8,0,1.4,0.6,1.4,1.4l0,47C321.6,413.9,320.9,414.6,320.2,414.6z"
                                                />
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M322,366l0,47.2
                                                c0,0.9-0.8,1.7-1.7,1.7l-1.5,0c-0.9,0-1.7-0.8-1.7-1.7l0-47.2c0-0.9,0.8-1.7,1.7-1.7h1.5C321.2,364.4,322,365.1,322,366z
                                                M317.8,413.2c0,0.5,0.4,1,1,1h1.5c0.5,0,1-0.4,1-1l0-47.2c0-0.5-0.4-1-1-1h-1.5c-0.5,0-1,0.4-1,1V413.2z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M323.6,414.6h4.3
                                                c2.6,0,4.7,2.1,4.7,4.7v40.4c0,2.6-2.1,4.7-4.7,4.7h-9l0-45.1C318.9,416.7,321,414.6,323.6,414.6z"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M332.9,417.5v44
                                                c0,1.8-1.5,3.3-3.3,3.3h-11.1l0-47.3c0-1.8,1.5-3.3,3.3-3.3h7.8C331.4,414.2,332.9,415.7,332.9,417.5z M319.2,464h10.4
                                                c1.4,0,2.6-1.1,2.6-2.6l0-44c0-1.4-1.1-2.6-2.6-2.6h-7.8c-1.4,0-2.6,1.1-2.6,2.6V464z"/>
                                        </g>
                                        <g>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M320.2,464.4h-1.3
                                                c-0.8,0-1.4-0.6-1.4-1.4l0-47c0-0.8,0.6-1.4,1.4-1.4h1.3c0.8,0,1.4,0.6,1.4,1.4l0,47C321.6,463.8,321,464.4,320.2,464.4z"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M322,415.9l0,47.2
                                                c0,0.9-0.8,1.7-1.7,1.7h-1.5c-0.9,0-1.7-0.8-1.7-1.7l0-47.2c0-0.9,0.8-1.7,1.7-1.7h1.5C321.2,414.2,322,415,322,415.9z
                                                M317.8,463.1c0,0.5,0.4,1,1,1h1.5c0.5,0,1-0.4,1-1l0-47.2c0-0.5-0.4-1-1-1l-1.5,0c-0.5,0-1,0.4-1,1L317.8,463.1z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M367.2,509.5v-4.3
                                            c0-2.6-2.1-4.7-4.7-4.7h-40.4c-2.6,0-4.7,2.1-4.7,4.7v7.4c0,0.9,0.7,1.6,1.6,1.6l43.6,0C365.1,514.2,367.2,512.1,367.2,509.5
                                            z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M367.6,503.5v7.8
                                            c0,1.8-1.5,3.3-3.3,3.3h-45.9c-0.7,0-1.4-0.6-1.4-1.4v-9.8c0-1.8,1.5-3.3,3.3-3.3l44,0C366.1,500.2,367.6,501.7,367.6,503.5z
                                            M317.8,513.2c0,0.3,0.3,0.6,0.6,0.6h45.9c1.4,0,2.6-1.1,2.6-2.6v-7.8c0-1.4-1.1-2.6-2.6-2.6l-44,0c-1.4,0-2.6,1.1-2.6,2.6
                                            V513.2z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M321.1,512.1l11.1-11.6l0-31.9
                                            c0-2.4-1.9-4.3-4.3-4.3h-9.4v45.5C318.5,512.3,318.7,512.1,321.1,512.1z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M332.5,468.7l0,32l-11.3,11.8l-0.6,0
                                            c-1.1,0-1.7,0-2.1-0.4c-0.4-0.4-0.4-1-0.4-2.2V464h9.7C330.4,464,332.5,466.1,332.5,468.7z M331.8,500.4v-31.7
                                            c0-2.2-1.8-3.9-3.9-3.9h-9l0,45.2c0,0.9,0,1.5,0.2,1.7c0.2,0.2,0.7,0.2,1.6,0.2l0.3,0L331.8,500.4z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M417.2,314.1c0,0.3,0,1.2,0,1.4l0,45.7
                                            c0,1.2-0.9,2.1-2.1,2.1c-1.2,0-2.1-0.9-2.1-2.1l0-45l-43.6,0c-1.2,0-2.1-0.9-2.1-2.1c0-1.2,0.9-2.1,2.1-2.1h45.7
                                            C416.3,312,417.2,312.9,417.2,314.1z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M367,314.1c0-1.4,1.1-2.5,2.5-2.5
                                            l45.7,0c1.4,0,2.5,1.1,2.5,2.5l0,47.1c0,1.4-1.1,2.5-2.5,2.5c-1.4,0-2.5-1.1-2.5-2.5l0-44.6h-43.2
                                            C368.1,316.6,367,315.5,367,314.1z M416.9,314.1c0-1-0.8-1.7-1.7-1.7h-45.7c-1,0-1.7,0.8-1.7,1.7c0,1,0.8,1.7,1.7,1.7l43.9,0
                                            l0,45.4c0,1,0.8,1.7,1.7,1.7c1,0,1.7-0.8,1.7-1.7V314.1z"/>
                                    </g>
                                    <g>
                                        <g>
                                            <path fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M329.5,498.5
                                                c-0.2-0.1-0.2-0.3-0.1-0.5c1.1-1.1,5-4.9,6.3-6.5c1.3-1.5,4.4-6.1,5.2-7.3c0.1-0.2,0.3-0.2,0.5,0c1,1.3,5.2,5.6,6.8,6.9
                                                c1.5,1.3,5.6,4,7,4.6c0.2,0.1,0.2,0.3,0.1,0.5c-1.1,1.1-5.1,4.8-6.4,6.4c-1.3,1.5-4.3,6.2-5.1,7.4c-0.1,0.2-0.3,0.2-0.5,0
                                                c-1-1.2-2.3-3.4-6.3-6.5C335.4,502.2,330.8,499.2,329.5,498.5z"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M355.7,496c0,0.2-0.1,0.3-0.2,0.5
                                                c-1.2,1.1-5.1,4.8-6.3,6.3c-1.3,1.5-4.2,6-5.1,7.4c-0.1,0.2-0.3,0.3-0.5,0.3c-0.2,0-0.4-0.1-0.5-0.2
                                                c-0.2-0.2-0.3-0.4-0.5-0.6c-1-1.3-2.4-3.2-5.7-5.8c-1.5-1.2-6.1-4.2-7.5-5c-0.2-0.1-0.3-0.3-0.3-0.5c0-0.2,0-0.4,0.2-0.6
                                                c1.1-1.1,5-4.9,6.3-6.4c1.3-1.5,4.3-6,5.2-7.3c0.1-0.2,0.3-0.3,0.5-0.3c0.2,0,0.4,0.1,0.5,0.3c1,1.3,5.2,5.6,6.8,6.9
                                                c1.5,1.3,5.6,3.9,6.9,4.6c0.2,0.1,0.3,0.3,0.4,0.5C355.7,495.9,355.7,496,355.7,496z M343.5,509.7c0.9-1.5,3.8-5.9,5.1-7.4
                                                c1.3-1.5,5.1-5.1,6.3-6.3c-1.5-0.7-5.4-3.3-7-4.6c-1.5-1.3-5.7-5.5-6.8-6.9c-1,1.4-3.9,5.8-5.2,7.3c-1.3,1.5-5,5.2-6.2,6.4
                                                c1.5,0.8,6,3.8,7.5,5c3.3,2.7,4.8,4.7,5.8,6C343.2,509.4,343.4,509.6,343.5,509.7z"/>
                                        </g>
                                        <g>
                                            <path fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M323.2,474.8c-0.1-0.2,0-0.4,0.1-0.4
                                                c1.4-0.5,6.6-2.3,8.5-3.1c1.8-0.8,6.6-3.6,7.9-4.4c0.2-0.1,0.4,0,0.4,0.2c0.3,1.6,2.3,7.3,3.2,9.2c0.8,1.8,3.4,6,4.3,7.2
                                                c0.1,0.2,0.1,0.4-0.1,0.5c-1.5,0.5-6.7,2.2-8.5,3c-1.8,0.8-6.5,3.7-7.8,4.5c-0.2,0.1-0.4,0-0.4-0.2c-0.4-1.5-0.7-4-2.9-8.6
                                                C327,480.7,324.1,476,323.2,474.8z"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M348,483.5c0,0.1,0,0.1,0,0.2
                                                c-0.1,0.2-0.2,0.4-0.4,0.4c-1.5,0.5-6.6,2.2-8.4,3c-1.8,0.8-6.4,3.6-7.8,4.5c-0.2,0.1-0.4,0.1-0.6,0
                                                c-0.2-0.1-0.3-0.2-0.4-0.4c-0.1-0.2-0.1-0.5-0.2-0.8c-0.3-1.6-0.8-3.9-2.7-7.7c-0.8-1.7-3.7-6.4-4.7-7.7l0,0
                                                c-0.1-0.2-0.2-0.4-0.1-0.6c0.1-0.2,0.2-0.3,0.4-0.4c1.5-0.5,6.6-2.3,8.4-3.1c1.8-0.8,6.5-3.6,7.9-4.4c0.2-0.1,0.4-0.1,0.6,0
                                                c0.2,0.1,0.3,0.3,0.4,0.5c0.3,1.6,2.3,7.3,3.1,9.1c0.8,1.8,3.3,6,4.3,7.1C348,483.2,348,483.4,348,483.5z M331.1,491
                                                c1.5-0.9,6-3.6,7.8-4.5c1.8-0.8,6.8-2.5,8.4-3c-1-1.3-3.5-5.3-4.3-7.2c-0.8-1.8-2.8-7.4-3.2-9.2c-1.5,0.9-6,3.5-7.8,4.3
                                                c-1.8,0.8-6.8,2.6-8.4,3.1c1,1.4,3.8,6,4.7,7.7c1.9,3.9,2.4,6.3,2.7,7.9C331,490.5,331,490.8,331.1,491z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M328.3,335.2c0-0.2,0.2-0.3,0.4-0.2
                                                c1.4,0.6,6.5,2.7,8.4,3.3c1.9,0.6,7.3,1.7,8.8,2c0.2,0,0.3,0.3,0.2,0.4c-0.8,1.4-3.2,7-3.7,9c-0.6,1.9-1.5,6.7-1.5,8.2
                                                c0,0.2-0.2,0.3-0.4,0.3c-1.4-0.6-6.4-2.8-8.3-3.4c-1.9-0.6-7.3-1.6-8.8-1.8c-0.2,0-0.3-0.2-0.2-0.4c0.7-1.4,2.2-3.5,3.6-8.3
                                                C327.2,342.1,328.2,336.7,328.3,335.2z"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M346.5,340.5c0,0.1,0,0.2-0.1,0.3
                                                c-0.8,1.4-3.1,7-3.7,8.9c-0.6,1.9-1.5,6.7-1.5,8.1c0,0.2-0.1,0.4-0.3,0.5c-0.2,0.1-0.4,0.1-0.6,0c-1.5-0.6-6.4-2.8-8.3-3.4
                                                c-1.9-0.6-7.2-1.6-8.8-1.8c-0.2,0-0.4-0.2-0.5-0.4c-0.1-0.2-0.1-0.4,0-0.6c0.1-0.2,0.3-0.4,0.4-0.7c0.8-1.4,2-3.5,3.2-7.5
                                                c0.5-1.9,1.5-7.3,1.7-8.8v0c0-0.2,0.1-0.4,0.3-0.5c0.2-0.1,0.4-0.1,0.6,0c1.5,0.6,6.5,2.7,8.4,3.3c1.9,0.6,7.2,1.7,8.8,2
                                                c0.2,0,0.4,0.2,0.5,0.4C346.5,340.3,346.5,340.4,346.5,340.5z M340.5,357.7c0.1-1.6,1-6.3,1.5-8.2c0.6-1.9,2.9-7.4,3.7-8.9
                                                c-1.7-0.3-6.9-1.4-8.7-2c-1.9-0.6-6.8-2.6-8.3-3.3c-0.2,1.7-1.1,7-1.7,8.9c-1.2,4.1-2.4,6.3-3.2,7.7
                                                c-0.1,0.2-0.2,0.4-0.3,0.6c1.7,0.3,6.9,1.3,8.8,1.8C334.1,354.9,338.9,357,340.5,357.7z M328.7,335.2
                                                C328.7,335.2,328.7,335.2,328.7,335.2C328.7,335.2,328.7,335.2,328.7,335.2z"/>
                                        </g>
                                        <g>
                                            <path fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M347.7,320.2c0.1-0.2,0.3-0.2,0.5,0
                                                c1,1.1,4.7,5.2,6.2,6.6c1.5,1.4,5.9,4.7,7.1,5.6c0.2,0.1,0.2,0.4,0,0.5c-1.3,0.9-5.9,5-7.2,6.5c-1.3,1.5-4.2,5.4-4.9,6.8
                                                c-0.1,0.2-0.3,0.2-0.5,0.1c-1-1.2-4.6-5.3-6.1-6.6c-1.5-1.4-6-4.6-7.2-5.5c-0.2-0.1-0.2-0.3,0-0.5c1.2-0.9,3.5-2.2,6.8-6
                                                C343.8,326,347,321.5,347.7,320.2z"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M362,332.5
                                                C362,332.5,362,332.5,362,332.5c0,0.2-0.1,0.4-0.3,0.5c-1.3,0.9-5.8,5-7.2,6.4c-1.3,1.5-4.2,5.4-4.9,6.7
                                                c-0.1,0.2-0.3,0.3-0.5,0.3c-0.2,0-0.4-0.1-0.6-0.2c-1-1.2-4.6-5.3-6-6.6c-1.5-1.3-5.9-4.5-7.2-5.4c-0.2-0.1-0.3-0.3-0.3-0.5
                                                c0-0.2,0.1-0.4,0.3-0.5c0.2-0.1,0.4-0.3,0.7-0.5c1.3-0.9,3.3-2.3,6.1-5.4c1.3-1.4,4.5-5.9,5.3-7.3v0
                                                c0.1-0.2,0.3-0.3,0.5-0.3c0.2,0,0.4,0.1,0.5,0.2c1.1,1.2,4.7,5.2,6.2,6.6c1.5,1.3,5.8,4.6,7.1,5.5
                                                C361.9,332.1,362,332.3,362,332.5z M349.1,345.8c0.8-1.4,3.6-5.3,4.9-6.7c1.3-1.5,5.8-5.4,7.2-6.5c-1.4-1-5.6-4.2-7-5.5
                                                c-1.5-1.3-5-5.2-6.1-6.5c-0.9,1.5-4,5.8-5.3,7.3c-2.8,3.2-4.9,4.6-6.2,5.6c-0.2,0.1-0.4,0.3-0.6,0.4c1.4,1,5.7,4.1,7.1,5.4
                                                C344.5,340.5,347.9,344.4,349.1,345.8z"/>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g id="TV_stand_00000107558736403350307200000009705889630508508337_">
                            
                                <image overflow="visible" opacity="0.4" width="42" height="138" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAACKCAYAAADc39i1AAAACXBIWXMAAAsSAAALEgHS3X78AAAC
            iElEQVR4nO2cTW/aQBRFjwmEiCaq+rGI0m76//9X1UWLSkJQCUnchd+Y8WCjVrpOgnSP9ASMGb/D
            zJjlrRimOnJtTOq+wT6ZKhuvBr4zBjV7yfx9K1K+n/RU+V21IMBzT7XXp8WkSYzNspqOKJtLPgK7
            rB4z2Va0yiTnwAJ4FzXPZMcQTZJb4D5qE9eTbF2KzkLyI/ApXq9C9gztmU3n8Ckk74Al8Cuup+2v
            k2h+NmfAJfAZ+ArchOwirqUjoOKZZps3Ifk9fB5Cfhc/pDq2ojfAN+CaZlXP0W5/2vYHmtX8EeMb
            4Ddwm/U72Pp0Ri9D9hr4ArwHLkYS/QOsYmwVvQ+ei6GnPj1QVyH5ge45VYmm8wnNCi4KyZZcND0o
            kxCa0Wz3POpiJFHi/ufR84z9Sra9yhVNwhO60nkpRcnum/c86NEnmgsPlYp/vrf672Y0LKrGomos
            qsaiaiyqxqJqLKrGomosqsaiaiyqxqJqLKrGomosqsaiaiyqxqJqLKrGomosqsaiaiyqxqJqLKrG
            omosqsaiaiyqxqJqLKrGomosqsaiaiyqxqJqLKrGomosqsaiaiyqxqJqLKrGomosqsaiaiyqxqJq
            LKrGomosqsaiaiyqxqJqLKrmZESPBVPVA6Xiv+7fJ5rS19LrU1agzyRLlfc8EJ4WE3O5HfugvZTE
            NlbK2zZ6pUC/NoGwTxS6OYsbmuC9lGk3dm7eXfTcUgRQ5qJlGOSaJsIwpQPe8jJJhMvonct2Yj3T
            pDJnEZpf+5LZjsv4vCtFa5pVSpPWwM8Yv+d10jLXmShk2Y7lihKTV7xe/mhnRcvo2ZTt+JYSXXtF
            CamyxpDskx3MyD3J1OGSN5XjfDL8BQY93hUDms59AAAAAElFTkSuQmCC" transform="matrix(1 0 0 1 538 330)">
                            </image>
                            <g>
                                <g>
                                    <g>
                                        
                                            <rect x="542.9" y="422.1" fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="28.6" height="37.1"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M571.8,421.8v37.6h-29.1v-37.6H571.8z
                                            M571.2,458.9v-36.5h-28.1v36.5H571.2z"/>
                                    </g>
                                    <g>
                                        
                                            <rect x="542.9" y="335" fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="28.6" height="37.1"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M571.8,334.7v37.6h-29.1v-37.6H571.8z
                                            M571.2,371.8v-36.5h-28.1v36.5H571.2z"/>
                                    </g>
                                    <g>
                                        
                                            <rect x="542.9" y="372.1" fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="28.6" height="49.9"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M571.8,371.8v50.4h-29.1v-50.4H571.8z
                                            M571.2,421.7v-49.3h-28.1v49.3H571.2z"/>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M556.9,408.1v-22.1h0.2
                                                    c0.7,0,1.2,0.5,1.2,1.2v19.7c0,0.7-0.5,1.2-1.2,1.2H556.9z"/>
                                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M558.6,387.2v19.7
                                                    c0,0.8-0.7,1.5-1.5,1.5h-0.5v-22.7h0.5C557.9,385.7,558.6,386.3,558.6,387.2z M557.2,407.8c0.5,0,0.9-0.4,0.9-1v-19.7
                                                    c0-0.5-0.4-0.9-0.9-1V407.8z"/>
                                            </g>
                                            <g>
                                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M554.9,411.9h0.3
                                                    c0.9,0,1.6-0.7,1.6-1.6v-26.5c0-0.9-0.7-1.6-1.6-1.6h-0.3V411.9z"/>
                                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M557.1,383.8v26.5
                                                    c0,1.1-0.9,1.9-1.9,1.9h-0.5v-30.3h0.5C556.3,381.9,557.1,382.7,557.1,383.8z M555.2,411.6c0.8,0,1.4-0.6,1.4-1.4v-26.5
                                                    c0-0.8-0.6-1.4-1.4-1.4V411.6z"/>
                                            </g>
                                            <g>
                                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M554.9,411.9h0.3
                                                    c0.9,0,1.6-0.7,1.6-1.6v-26.5c0-0.9-0.7-1.6-1.6-1.6h-0.3V411.9z"/>
                                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M557.1,383.8v26.5
                                                    c0,1.1-0.9,1.9-1.9,1.9h-0.5v-30.3h0.5C556.3,381.9,557.1,382.7,557.1,383.8z M555.2,411.6c0.8,0,1.4-0.6,1.4-1.4v-26.5
                                                    c0-0.8-0.6-1.4-1.4-1.4V411.6z"/>
                                            </g>
                                            <g>
                                                
                                                    <line fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" x1="554.9" y1="411.9" x2="554.9" y2="382.1"/>
                                                
                                                    <rect x="554.6" y="382.1" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="0.5" height="29.7"/>
                                            </g>
                                        </g>
                                        <g>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M558.3,401.8V393c1.8,0.7,3,2.4,3,4.4
                                                C561.4,399.4,560.1,401.2,558.3,401.8z"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M561.6,397.4c0,2.1-1.3,3.9-3.2,4.7
                                                l-0.4,0.1v-9.6l0.4,0.1C560.4,393.5,561.6,395.4,561.6,397.4z M558.6,401.4c1.5-0.7,2.5-2.3,2.5-4c0-1.7-1-3.3-2.5-4V401.4z
                                                "/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <polygon fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" points="544.5,335 544.5,372.1 
                                                542.9,372.1 542.9,353.7 542.9,335 								"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M544.8,334.7v37.6h-2.1v-37.6H544.8z
                                                M544.2,371.8v-36.5h-1v36.5H544.2z"/>
                                        </g>
                                        <g>
                                            
                                                <line fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" x1="544.3" y1="353.7" x2="542.9" y2="353.7"/>
                                            
                                                <rect x="542.9" y="353.4" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="1.4" height="0.5"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <polygon fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" points="544.5,422.1 544.5,459.1 
                                                542.9,459.1 542.9,440.7 542.9,422.1 								"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M544.8,421.8v37.6h-2.1v-37.6H544.8z
                                                M544.2,458.9v-36.5h-1v36.5H544.2z"/>
                                        </g>
                                        <g>
                                            
                                                <line fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" x1="544.3" y1="440.7" x2="542.9" y2="440.7"/>
                                            
                                                <rect x="542.9" y="440.4" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="1.4" height="0.5"/>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g id="Desk">
                            
                                <image overflow="visible" opacity="0.4" width="83" height="109" href="data:image/png;base64,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
            gg==" transform="matrix(1 0 0 1 353 990)">
                            </image>
                            <g>
                                <g>
                                    <g>
                                        <g>
                                            
                                                <rect x="380.5" y="1043.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -626.0293 577.8926)" fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="8.1" height="1.5"/>
                                            <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M388.4,1042.3l-6.2,6.2l-1.5-1.5
                                                l6.2-6.2L388.4,1042.3z M382.2,1047.6l5.3-5.3l-0.6-0.6l-5.3,5.3L382.2,1047.6z"/>
                                        </g>
                                        <g>
                                            
                                                <rect x="383.8" y="1061.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -640.9597 584.0843)" fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="1.5" height="8.1"/>
                                            <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M388.4,1068.1l-1.5,1.5l-6.2-6.2
                                                l1.5-1.5L388.4,1068.1z M386.9,1068.7l0.6-0.6l-5.3-5.3l-0.6,0.6L386.9,1068.7z"/>
                                        </g>
                                        <g>
                                            <g>
                                                <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M394,1049.9v10.5
                                                    c0,3.5-2.8,6.3-6.3,6.3h-7.3c-3.5,0-6.3-2.8-6.3-6.3v-10.5c0-3.5,2.8-6.3,6.3-6.3h7.3C391.2,1043.6,394,1046.5,394,1049.9z
                                                    "/>
                                                <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M394.3,1045.5v19.3
                                                    c0,1.2-1,2.2-2.2,2.2H376c-1.2,0-2.2-1-2.2-2.2v-19.3c0-1.2,1-2.2,2.2-2.2h16.1C393.4,1043.3,394.3,1044.3,394.3,1045.5z
                                                    M374.4,1064.8c0,0.9,0.7,1.6,1.6,1.6h16.1c0.9,0,1.6-0.7,1.6-1.6v-19.3c0-0.9-0.7-1.6-1.6-1.6H376c-0.9,0-1.6,0.7-1.6,1.6
                                                    V1064.8z"/>
                                            </g>
                                            <g>
                                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M361.8,1044.1v11.1v11.1
                                                    c0,2.7,2.6,4.5,5.1,3.6l6.2-2.1c1.3-0.4,2.1-1.6,2.1-2.9v-9.6v-9.6c0-1.3-0.8-2.5-2.1-2.9l-6.2-2.1
                                                    C364.4,1039.6,361.8,1041.5,361.8,1044.1z"/>
                                                <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M375.5,1045.5v19.3
                                                    c0,1.5-0.9,2.8-2.3,3.2l-6.2,2.1c-1.3,0.4-2.7,0.3-3.8-0.5c-1.1-0.8-1.7-2-1.7-3.4v-22.2c0-1.4,0.6-2.6,1.7-3.4
                                                    c1.1-0.8,2.5-1,3.8-0.5l6.2,2.1C374.6,1042.8,375.5,1044.1,375.5,1045.5z M362.1,1066.3c0,1.2,0.5,2.2,1.5,2.9
                                                    c1,0.7,2.1,0.8,3.2,0.5l6.2-2.1c1.1-0.4,1.9-1.5,1.9-2.7v-19.3c0-1.2-0.8-2.3-1.9-2.7l-6.2-2.1c-1.1-0.4-2.3-0.2-3.2,0.5
                                                    c-1,0.7-1.5,1.7-1.5,2.9V1066.3z"/>
                                            </g>
                                            <g>
                                                <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M388.6,1069.4L388.6,1069.4
                                                    c0,0.9-0.7,1.5-1.5,1.5h-13.5c-0.9,0-1.5-0.7-1.5-1.5l0,0c0-0.9,0.7-1.5,1.5-1.5h13.5
                                                    C387.9,1067.9,388.6,1068.6,388.6,1069.4z"/>
                                                <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M388.9,1068.7v1.4
                                                    c0,0.6-0.5,1.1-1.1,1.1h-15c-0.6,0-1.1-0.5-1.1-1.1v-1.4c0-0.6,0.5-1.1,1.1-1.1h15C388.4,1067.6,388.9,1068.1,388.9,1068.7
                                                    z M372.3,1070.1c0,0.3,0.2,0.5,0.5,0.5h15c0.3,0,0.5-0.2,0.5-0.5v-1.4c0-0.3-0.2-0.5-0.5-0.5h-15c-0.3,0-0.5,0.2-0.5,0.5
                                                    V1070.1z"/>
                                            </g>
                                            <g>
                                                <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M388.6,1041L388.6,1041
                                                    c0-0.9-0.7-1.5-1.5-1.5h-13.5c-0.9,0-1.5,0.7-1.5,1.5l0,0c0,0.9,0.7,1.5,1.5,1.5h13.5
                                                    C387.9,1042.5,388.6,1041.8,388.6,1041z"/>
                                                <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M388.9,1040.2v1.4
                                                    c0,0.6-0.5,1.1-1.1,1.1h-15c-0.6,0-1.1-0.5-1.1-1.1v-1.4c0-0.6,0.5-1.1,1.1-1.1h15C388.4,1039.1,388.9,1039.6,388.9,1040.2
                                                    z M372.3,1041.7c0,0.3,0.2,0.5,0.5,0.5h15c0.3,0,0.5-0.2,0.5-0.5v-1.4c0-0.3-0.2-0.5-0.5-0.5h-15c-0.3,0-0.5,0.2-0.5,0.5
                                                    V1041.7z"/>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M360.8,1018.5H376
                                            c8,0,14.4,6.5,14.4,14.4v54.3c0,1.5,1.2,2.7,2.7,2.7h30.8c1.5,0,2.7-1.2,2.7-2.7v-90c0-1.5-1.2-2.7-2.7-2.7h-28.7h-4.8h-29.6
                                            c-1.5,0-2.7,1.2-2.7,2.7v18.6C358.1,1017.3,359.4,1018.5,360.8,1018.5z"/>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M426.9,997.3v90c0,1.6-1.3,3-3,3h-30.8
                                            c-1.6,0-3-1.3-3-3V1033c0-7.8-6.3-14.1-14.1-14.1h-15.2c-1.6,0-3-1.3-3-3v-18.6c0-1.6,1.3-3,3-3h63.1
                                            C425.5,994.3,426.9,995.6,426.9,997.3z M390.7,1087.2c0,1.3,1.1,2.4,2.4,2.4h30.8c1.3,0,2.4-1.1,2.4-2.4v-90
                                            c0-1.3-1.1-2.4-2.4-2.4h-63.1c-1.3,0-2.4,1.1-2.4,2.4v18.6c0,1.3,1.1,2.4,2.4,2.4H376c8.1,0,14.7,6.6,14.7,14.7V1087.2z"/>
                                    </g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M423.1,994.6v95.3
                                        c0,0.2-0.1,0.3-0.3,0.3c-0.2,0-0.3-0.1-0.3-0.3v-95.3c0-0.2,0.1-0.3,0.3-0.3C423,994.3,423.1,994.4,423.1,994.6z"/>
                                    <g>
                                        <g>
                                            <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M412.5,1040.8c-1.5,0-2.6,1.9-2.6,4.2
                                                c0,2.3,1.2,4.2,2.6,4.2c1.5,0,2.6-1.9,2.6-4.2C415.1,1042.7,413.9,1040.8,412.5,1040.8z"/>
                                            <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M415.2,1045c0,2.4-1.2,4.3-2.8,4.3
                                                s-2.8-1.9-2.8-4.3s1.3-4.3,2.8-4.3S415.2,1042.6,415.2,1045z M410,1045c0,2.2,1.1,4,2.5,4c1.4,0,2.5-1.8,2.5-4
                                                c0-2.2-1.1-4-2.5-4C411.1,1041,410,1042.8,410,1045z"/>
                                        </g>
                                        <g>
                                            <path fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M417,1023.2l-4.8,2.9
                                                c-0.3,0.2-0.5,0.5-0.5,0.9v18v18c0,0.3,0.2,0.7,0.5,0.9l4.8,2.9c0.4,0.2,0.9,0,0.9-0.5V1045v-21.2
                                                C417.9,1023.3,417.4,1023,417,1023.2z"/>
                                            <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M418.1,1023.7v42.4
                                                c0,0.3-0.1,0.5-0.4,0.7c-0.2,0.1-0.5,0.1-0.8,0l-4.8-2.9c-0.3-0.2-0.6-0.6-0.6-1v-36.1c0-0.4,0.2-0.8,0.6-1l4.8-2.9
                                                c0.2-0.1,0.5-0.1,0.8,0C417.9,1023.2,418.1,1023.5,418.1,1023.7z M411.9,1063c0,0.3,0.2,0.6,0.4,0.7l4.8,2.9
                                                c0.1,0.1,0.3,0.1,0.5,0c0.1-0.1,0.2-0.2,0.2-0.4v-42.4c0-0.2-0.1-0.3-0.2-0.4c-0.1-0.1-0.3-0.1-0.5,0l0,0l-4.8,2.9
                                                c-0.3,0.2-0.4,0.4-0.4,0.7V1063z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <path fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M407.7,1037v15.9
                                            c0,2.9-2.4,5.2-5.2,5.2h-1.3c-2.9,0-5.2-2.3-5.2-5.2V1037c0-2.9,2.4-5.2,5.2-5.2h1.3C405.3,1031.8,407.7,1034.1,407.7,1037z"
                                            />
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M407.8,1033.3v23.3
                                            c0,1-0.8,1.7-1.7,1.7h-8.7c-1,0-1.7-0.8-1.7-1.7v-23.3c0-1,0.8-1.7,1.7-1.7h8.7C407.1,1031.6,407.8,1032.4,407.8,1033.3z
                                            M396,1056.6c0,0.8,0.6,1.4,1.4,1.4h8.7c0.8,0,1.4-0.6,1.4-1.4v-23.3c0-0.8-0.6-1.4-1.4-1.4h-8.7c-0.8,0-1.4,0.6-1.4,1.4
                                            V1056.6z"/>
                                    </g>
                                    <g>
                                        <path fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M406.2,1063.3v1.6
                                            c0,1.4-1.1,2.5-2.5,2.5h-2.2c-1.8,0-3.3-1.5-3.3-3.3l0,0c0-1.8,1.5-3.3,3.3-3.3h2.2C405.1,1060.8,406.2,1061.9,406.2,1063.3z
                                            "/>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M406.4,1063.3v1.6
                                            c0,1.5-1.2,2.7-2.7,2.7h-2.2c-1.9,0-3.5-1.6-3.5-3.5c0-1.9,1.6-3.5,3.5-3.5h2.2C405.2,1060.6,406.4,1061.8,406.4,1063.3z
                                            M398.4,1064.1c0,1.7,1.4,3.2,3.2,3.2h2.2c1.3,0,2.4-1.1,2.4-2.4v-1.6c0-1.3-1.1-2.4-2.4-2.4h-2.2
                                            C399.8,1060.9,398.4,1062.3,398.4,1064.1z"/>
                                    </g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M406.4,1064.1c0,0.1-0.1,0.2-0.2,0.2h-8
                                        c-0.1,0-0.2-0.1-0.2-0.2s0.1-0.2,0.2-0.2h8C406.3,1063.9,406.4,1064,406.4,1064.1z"/>
                                    <g>
                                        <g>
                                            
                                                <rect x="395" y="1009.3" fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="17.5" height="12.5"/>
                                            <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M412.6,1009.1v12.8h-17.8v-12.8H412.6
                                                z M412.3,1021.6v-12.2h-17.2v12.2H412.3z"/>
                                        </g>
                                        <g>
                                            
                                                <rect x="394.3" y="1005.1" transform="matrix(0.9406 -0.3395 0.3395 0.9406 -319.394 196.879)" fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="17.5" height="12.5"/>
                                            <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M413.5,1014.3l-16.7,6l-4.3-12l16.7-6
                                                L413.5,1014.3z M397,1020l16.2-5.8l-4.1-11.5l-16.2,5.8L397,1020z"/>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g id="Plant_00000063631330251573028370000005013201763353003182_">
                            
                                <image overflow="visible" opacity="0.4" width="69" height="63" href="data:image/png;base64,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" transform="matrix(1 0 0 1 425 1090)">
                            </image>
                            <g>
                                <g>
                                    <g>
                                        <circle fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" cx="457.7" cy="1119.6" r="9.6"/>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M457.7,1129.4c-1.6,0-3.3-0.4-4.8-1.2
                                            c-2.3-1.3-3.9-3.4-4.6-5.9c-0.7-2.5-0.4-5.1,0.9-7.4c1.3-2.3,3.4-3.9,5.9-4.6c2.5-0.7,5.1-0.4,7.4,0.9
                                            c2.3,1.3,3.9,3.4,4.6,5.9c0.7,2.5,0.4,5.1-0.9,7.4c-1.3,2.3-3.4,3.9-5.9,4.6l0,0C459.5,1129.2,458.6,1129.4,457.7,1129.4z
                                            M457.7,1110.1c-0.9,0-1.7,0.1-2.6,0.4c-2.4,0.7-4.5,2.3-5.7,4.5c-1.2,2.2-1.5,4.8-0.9,7.2c0.7,2.4,2.3,4.5,4.5,5.7
                                            c2.2,1.2,4.8,1.5,7.2,0.9l0,0.1l0-0.1c2.4-0.7,4.5-2.3,5.7-4.5c1.2-2.2,1.5-4.8,0.9-7.2c-0.7-2.4-2.3-4.5-4.5-5.7
                                            C460.9,1110.5,459.3,1110.1,457.7,1110.1z"/>
                                    </g>
                                    <g>
                                        
                                            <ellipse transform="matrix(0.4891 -0.8722 0.8722 0.4891 -742.7282 971.2304)" fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" cx="457.7" cy="1119.6" rx="8.9" ry="8.9"/>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M457.7,1128.6c-1.5,0-3-0.4-4.4-1.2
                                            c-2.1-1.2-3.6-3.1-4.3-5.4c-0.7-2.3-0.4-4.7,0.8-6.8c1.2-2.1,3.1-3.6,5.4-4.3c2.3-0.7,4.7-0.4,6.8,0.8
                                            c2.1,1.2,3.6,3.1,4.3,5.4c0.7,2.3,0.4,4.7-0.8,6.8c-1.2,2.1-3.1,3.6-5.4,4.3l0,0C459.3,1128.5,458.5,1128.6,457.7,1128.6z
                                            M457.7,1110.9c-0.8,0-1.6,0.1-2.4,0.3c-2.3,0.6-4.1,2.1-5.3,4.1c-1.1,2-1.4,4.4-0.8,6.7c0.6,2.3,2.1,4.1,4.1,5.3
                                            c2,1.1,4.4,1.4,6.7,0.8l0,0c2.3-0.6,4.1-2.1,5.3-4.1c1.1-2,1.4-4.4,0.8-6.7s-2.1-4.1-4.1-5.3
                                            C460.7,1111.2,459.2,1110.9,457.7,1110.9z"/>
                                    </g>
                                    <g>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M465.4,1117.3c-0.6-1.8-0.3-3.3-0.2-4
                                            c0.1-0.5,0.6-2.3,2.1-3.8c1.4-1.4,2.1-1,8.8-2.8c2.4-0.6,3.6-1,4.6-0.4c1,0.6,1,1.7,2.3,2.2c1,0.4,1.9,0.2,2,0.5
                                            c0.1,0.3-0.8,0.4-1.3,1.1c-0.8,0.9-0.5,2-0.7,3c-0.3,1.6-1.8,2.6-5,4.6c-2.7,1.7-4.1,2.6-5.9,2.9c-1,0.1-3.6,0.5-5.4-1.2
                                            C465.9,1118.7,465.6,1117.7,465.4,1117.3z"/>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M470.6,1120.9c-1.2,0-2.7-0.2-3.9-1.3
                                            c-0.8-0.8-1.2-1.7-1.3-2.2l0,0c-0.7-1.8-0.3-3.4-0.2-4c0.2-0.7,0.7-2.4,2.1-3.9c0.9-0.9,1.6-1.1,3.7-1.6
                                            c1.2-0.3,2.8-0.6,5.1-1.3l0.5-0.1c2-0.6,3.2-0.9,4.1-0.2c0.4,0.3,0.7,0.6,0.9,1c0.3,0.5,0.7,0.9,1.4,1.2
                                            c0.5,0.2,1,0.2,1.4,0.3c0.4,0,0.7,0,0.7,0.3c0,0.2-0.2,0.3-0.5,0.5c-0.3,0.2-0.6,0.4-0.9,0.7c-0.5,0.6-0.5,1.3-0.6,2
                                            c0,0.3,0,0.6-0.1,0.9c-0.3,1.6-1.9,2.7-5,4.7c-2.7,1.7-4.1,2.6-6,2.9C471.8,1120.8,471.2,1120.9,470.6,1120.9z M465.5,1117.2
                                            L465.5,1117.2c0.2,0.5,0.5,1.4,1.3,2.1c1.7,1.6,4.3,1.3,5.3,1.2c1.9-0.2,3.2-1.1,5.9-2.8c3.1-2,4.7-3,4.9-4.5
                                            c0-0.3,0.1-0.6,0.1-0.9c0-0.7,0-1.5,0.6-2.1c0.3-0.4,0.7-0.6,0.9-0.7c0.1-0.1,0.4-0.2,0.4-0.3c0-0.1-0.3-0.1-0.5-0.1
                                            c-0.4,0-0.9-0.1-1.4-0.3c-0.8-0.3-1.1-0.8-1.5-1.3c-0.2-0.4-0.5-0.7-0.9-0.9c-0.9-0.6-1.9-0.3-4,0.3l-0.5,0.1
                                            c-2.4,0.6-4,1-5.1,1.3c-2.1,0.5-2.7,0.6-3.6,1.5c-1.4,1.4-1.9,3.1-2,3.7C465.2,1113.9,464.9,1115.5,465.5,1117.2
                                            L465.5,1117.2z"/>
                                    </g>
                                    <g>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M450.9,1120.8
                                            c-0.1-0.6-0.5-2.5-1.8-3.6c-1.3-1.1-2.8-1-4.9-1c-3.1,0.1-3.4,1-7,1.1c-1.7,0.1-2.1,0.5-2.7,0.8c-1.7,1.1-0.8,3.4-2.6,4.4
                                            c-1,0.6-2.2,0.2-2.2,0.5c0,0.3,1.3,0.4,2.3,1.3c1,1,0.6,1.9,1.3,3c1.2,2.1,4.5,2.3,6.4,2.4c1.2,0.1,3.9,0.2,6.7-1.4
                                            c1.2-0.7,3.9-2.1,4.5-4.9C451.2,1122.3,451,1121.3,450.9,1120.8z"/>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M440.7,1129.9c-0.4,0-0.8,0-1,0
                                            c-2-0.1-5.3-0.3-6.5-2.4c-0.3-0.5-0.4-0.9-0.4-1.3c-0.1-0.6-0.2-1.1-0.8-1.7c-0.6-0.6-1.3-0.8-1.8-1
                                            c-0.4-0.1-0.6-0.2-0.6-0.4c0-0.2,0.3-0.2,0.6-0.2c0.4,0,1.1,0,1.6-0.3c0.9-0.5,1.1-1.3,1.3-2.1c0.2-0.8,0.4-1.7,1.3-2.3
                                            c0.1,0,0.1-0.1,0.2-0.1c0.5-0.3,1-0.7,2.6-0.7c1.8-0.1,2.8-0.3,3.7-0.6c0.9-0.3,1.8-0.5,3.3-0.5c2-0.1,3.6-0.1,4.9,1
                                            c1.4,1.2,1.8,3.1,1.9,3.7l0,0c0.1,0.4,0.3,1.5,0,2.7c-0.6,2.8-3.4,4.3-4.6,5C444.3,1129.7,442.1,1129.9,440.7,1129.9z
                                            M429.8,1123.1c0.1,0.1,0.3,0.1,0.4,0.2c0.5,0.2,1.2,0.5,1.8,1.1c0.6,0.6,0.7,1.2,0.9,1.8c0.1,0.4,0.2,0.8,0.4,1.2
                                            c1.1,2,4.4,2.2,6.3,2.3c1,0.1,3.8,0.2,6.7-1.4c1.2-0.6,3.9-2.1,4.4-4.8c0.2-1.1,0-2.2,0-2.6l0,0c-0.1-0.6-0.5-2.4-1.8-3.5
                                            c-1.2-1.1-2.8-1-4.8-1c-1.5,0-2.3,0.3-3.2,0.5c-0.9,0.3-1.9,0.5-3.8,0.6c-1.5,0.1-2,0.4-2.5,0.7c-0.1,0-0.1,0.1-0.2,0.1
                                            c-0.8,0.5-1,1.3-1.2,2.1c-0.2,0.8-0.4,1.7-1.4,2.2c-0.6,0.3-1.3,0.3-1.7,0.4C430.1,1123,429.9,1123,429.8,1123.1z"/>
                                    </g>
                                    <g>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M454.8,1112.3c1.6-1.7,1.2-4.1,1.1-5.2
                                            c-0.2-1.1-0.8-3.7-3.1-5.5c-0.7-0.5-2.2-1.6-4-1.5c-0.9,0.1-1.7,0.5-2.8,0.2c-0.7-0.2-1.2-0.6-1.5-0.4
                                            c-0.3,0.2,0.2,0.8,0.2,1.5c0,1.5-1.9,2-2.5,3.4c-0.8,2,1.5,4.6,2.2,5.4c1.7,1.9,5,4.3,8.1,3.4
                                            C452.8,1113.6,453.9,1113.3,454.8,1112.3z"/>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M451,1114c-2.7,0-5.3-1.8-6.8-3.6
                                            c-2-2.3-2.7-4.2-2.2-5.5c0.3-0.7,0.8-1.1,1.3-1.5c0.6-0.5,1.2-1,1.2-1.8c0-0.3-0.1-0.6-0.2-0.8c-0.1-0.3-0.2-0.6,0-0.8
                                            c0.2-0.2,0.5-0.1,0.9,0.1c0.2,0.1,0.4,0.2,0.7,0.2c0.8,0.2,1.4,0.1,2,0c0.3-0.1,0.5-0.1,0.9-0.1c1.8-0.1,3.3,1,4.1,1.5
                                            c2.4,1.8,3,4.5,3.2,5.5c0.2,1.1,0.5,3.5-1.1,5.3l0,0c-0.9,1-2.1,1.3-2.4,1.4C452,1113.9,451.5,1114,451,1114z M444.6,1100
                                            c0,0-0.1,0-0.1,0c-0.1,0.1,0,0.3,0.1,0.5c0.1,0.2,0.2,0.5,0.2,0.9c0,0.9-0.6,1.4-1.3,2c-0.5,0.4-1,0.9-1.2,1.5
                                            c-0.5,1.3,0.2,3,2.1,5.3c1.4,1.7,4.8,4.2,8,3.4c0.4-0.1,1.4-0.4,2.3-1.3l0,0c1.5-1.7,1.2-4.1,1-5.1c-0.2-1.1-0.8-3.7-3.1-5.4
                                            c-0.7-0.5-2.2-1.6-3.9-1.4c-0.3,0-0.6,0.1-0.8,0.1c-0.6,0.1-1.2,0.2-2.1,0c-0.3-0.1-0.5-0.2-0.7-0.2
                                            C444.9,1100.1,444.8,1100,444.6,1100z"/>
                                    </g>
                                    <g>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M464.6,1112.9c-1.6-0.4-2.6-1.5-3-2
                                            c-1.3-1.6-1.5-3.4-1.6-4.3c-0.3-3.4,1.4-6,2.3-7.4c1.2-1.8,2.7-4.1,4.7-4c1.2,0,1.9,0.9,3.4,0.5c1.2-0.3,1.8-1,2.1-0.8
                                            c0.3,0.3-0.6,1.3-0.3,2.4c0.2,0.9,1,0.9,1.5,1.7c0.8,1.1,0.4,2.7-0.5,5.7c-0.7,2.3-1,3.5-2,4.9c-0.7,0.9-1.6,2.3-3.3,2.9
                                            C467.6,1112.8,466.3,1113.3,464.6,1112.9z"/>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M465.9,1113.2c-0.4,0-0.9,0-1.3-0.2
                                            c-1.7-0.4-2.6-1.6-3-2.1c-1.4-1.7-1.6-3.5-1.6-4.3c-0.3-3.5,1.4-6,2.4-7.4c1.2-1.8,2.8-4.1,4.8-4.1c0,0,0,0,0,0
                                            c0.5,0,0.9,0.2,1.4,0.3c0.6,0.2,1.2,0.4,2,0.2c0.6-0.1,1-0.4,1.3-0.6c0.4-0.2,0.7-0.4,0.9-0.2c0.2,0.2,0.1,0.5,0,0.9
                                            c-0.2,0.5-0.4,1-0.2,1.6c0.1,0.5,0.4,0.7,0.8,0.9c0.2,0.2,0.5,0.4,0.8,0.7c0.9,1.2,0.4,2.8-0.4,5.8c-0.7,2.3-1,3.5-2,4.9
                                            c-0.7,1-1.6,2.3-3.4,3C467.8,1112.9,467,1113.2,465.9,1113.2z M467.1,1095.3c-1.9,0-3.4,2.2-4.6,4c-0.9,1.4-2.6,3.9-2.3,7.3
                                            c0.1,0.8,0.2,2.6,1.6,4.2c0.4,0.5,1.3,1.6,2.9,2l0,0c1.6,0.4,3-0.1,3.4-0.3c1.7-0.7,2.6-2,3.3-2.9c1-1.4,1.3-2.6,2-4.9
                                            c0.9-3.1,1.2-4.6,0.5-5.6c-0.2-0.3-0.5-0.5-0.7-0.7c-0.4-0.3-0.7-0.5-0.8-1.1c-0.2-0.7,0-1.3,0.2-1.8
                                            c0.1-0.3,0.2-0.5,0.1-0.6c-0.1-0.1-0.3,0.1-0.6,0.2c-0.3,0.2-0.8,0.4-1.4,0.6c-0.9,0.2-1.5,0-2.1-0.2
                                            C468,1095.5,467.6,1095.3,467.1,1095.3C467.1,1095.3,467.1,1095.3,467.1,1095.3z"/>
                                    </g>
                                    <g>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M484.4,1130.6c0-0.3-0.7-0.3-1.2-0.8
                                            c-0.7-0.8-0.3-1.8-0.4-2.8c-0.1-1.5-1.6-2.7-4.5-4.9c-2.5-1.9-3.7-2.8-5-3.2c-0.7-0.2-4.6-1.3-7,1c-1.6,1.6-1.7,3.8-1.8,4.6
                                            c-0.1,2,0.6,3.5,0.8,3.8c1,2,2.6,2.9,4.5,3.8c2.8,1.5,5.3,1.8,6.4,1.9c2,0.1,3.1,0.2,4.1-0.5c1.1-0.8,1.3-1.9,2.8-2.4
                                            C483.7,1130.9,484.4,1130.9,484.4,1130.6z"/>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M477.9,1134.2c-0.5,0-1.1,0-1.8-0.1
                                            c-1.5-0.1-3.9-0.5-6.4-1.9c-1.8-1-3.5-1.9-4.5-3.9c-0.3-0.5-0.9-2-0.8-3.9c0-0.8,0.1-3.1,1.8-4.7c2.1-2,5.4-1.5,7.1-1.1
                                            c1.3,0.4,2.5,1.3,5,3.2c2.9,2.2,4.4,3.4,4.6,5c0,0.3,0,0.6,0,0.9c-0.1,0.7-0.1,1.3,0.4,1.8c0.2,0.2,0.5,0.4,0.7,0.5
                                            c0.3,0.1,0.5,0.2,0.5,0.4l0,0c0,0.2-0.3,0.3-0.8,0.4c-0.2,0-0.4,0.1-0.6,0.2c-0.9,0.3-1.3,0.8-1.7,1.4c-0.3,0.3-0.6,0.7-1,1
                                            C479.7,1134.1,479,1134.2,477.9,1134.2z M470.4,1118.6c-1.4,0-2.9,0.3-4,1.4c-1.6,1.5-1.7,3.7-1.7,4.5
                                            c-0.1,1.9,0.5,3.2,0.8,3.8c1,1.9,2.6,2.8,4.4,3.8c2.5,1.4,4.8,1.8,6.3,1.8c2,0.1,3.1,0.2,4-0.5c0.4-0.3,0.7-0.6,1-1
                                            c0.4-0.5,0.9-1.1,1.8-1.4c0.2-0.1,0.4-0.1,0.6-0.2c0.3-0.1,0.6-0.2,0.6-0.2l0,0c0-0.1-0.2-0.1-0.3-0.2
                                            c-0.2-0.1-0.6-0.3-0.8-0.5c-0.5-0.6-0.5-1.3-0.4-2c0-0.3,0-0.6,0-0.9c-0.1-1.4-1.4-2.5-4.5-4.8c-2.4-1.9-3.7-2.8-4.9-3.1
                                            C472.7,1118.8,471.6,1118.6,470.4,1118.6z"/>
                                    </g>
                                    <g>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M471.3,1137.1c-0.1-0.5-0.5-2-1.8-3.6
                                            c-0.6-0.8-2.3-2.9-5.1-3.7c-1-0.3-2.5-0.7-4,0c-1.3,0.6-1.9,1.6-2.2,2c-1,1.7-0.8,3.5-0.3,6.5c0.5,3,0.7,4.5,2,5.5
                                            c1.2,0.8,2.5,0.8,3.2,0.8c1.2,0,1.3-0.3,4.8-1.5c1.7-0.6,2-0.6,2.4-1c1.2-1.2,1.1-3.1,1.1-3.5
                                            C471.5,1138,471.4,1137.5,471.3,1137.1z"/>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M463,1144.7c-0.8,0-2-0.1-3-0.8
                                            c-1.4-1-1.6-2.6-2.1-5.5c-0.5-3-0.8-4.8,0.3-6.6c0.6-1,1.3-1.7,2.2-2.1c1.6-0.7,3.1-0.3,4.1,0c2.9,0.8,4.6,3,5.2,3.8
                                            c1.2,1.5,1.6,2.9,1.8,3.7c0.1,0.3,0.2,0.8,0.2,1.5c0,1.6-0.4,2.8-1.2,3.6c-0.4,0.4-0.6,0.4-1.6,0.7c-0.2,0.1-0.5,0.2-0.9,0.3
                                            c-1.3,0.4-2.2,0.7-2.8,1c-0.9,0.4-1.3,0.5-2,0.5C463.1,1144.7,463.1,1144.7,463,1144.7z M462.2,1129.5
                                            c-0.6,0-1.2,0.1-1.8,0.4c-0.9,0.4-1.6,1.1-2.1,2c-1,1.6-0.8,3.3-0.3,6.4c0.5,3.1,0.8,4.5,2,5.4c1.1,0.8,2.5,0.8,3.2,0.8
                                            c0.7,0,1-0.1,2-0.5c0.6-0.2,1.4-0.5,2.8-1c0.3-0.1,0.6-0.2,0.9-0.3c1-0.3,1.2-0.4,1.5-0.7c0.7-0.7,1.1-2,1.1-3.5
                                            c0-0.6-0.1-1.1-0.2-1.4l0,0c-0.2-0.7-0.6-2.1-1.8-3.6c-0.6-0.8-2.2-2.9-5.1-3.7C463.8,1129.7,463,1129.5,462.2,1129.5z"/>
                                    </g>
                                    <g>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M457.4,1125.5c-0.2-0.1-0.9-0.4-2.5,0
                                            c-3.4,1-5.2,4-5.3,4.2c-0.2,0.3-2.4,4.1-1,6c0.6,0.8,1.7,1,2.1,2.2c0.2,0.7,0.1,1.3,0.4,1.4c0.3,0.1,0.5-0.3,1.1-0.6
                                            c1-0.5,1.7,0.1,2.7-0.2c0.3-0.1,0.7-0.3,2-2.1c1.1-1.7,1.7-2.5,2-3.6c0.2-0.6,0.8-2.6,0.1-4.8
                                            C458.7,1127.1,458.4,1126,457.4,1125.5z"/>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M451.1,1139.4c0,0-0.1,0-0.1,0
                                            c-0.3-0.1-0.3-0.4-0.3-0.8c0-0.2-0.1-0.5-0.1-0.7c-0.2-0.7-0.7-1-1.2-1.4c-0.3-0.2-0.6-0.4-0.9-0.7c-1.4-1.8,0.6-5.4,1-6.1
                                            c0.2-0.3,2-3.3,5.4-4.2c1.1-0.3,2-0.3,2.6,0l0,0c1,0.5,1.3,1.6,1.6,2.5c0.5,1.5,0.4,3.2-0.1,4.8c-0.3,1.1-0.9,1.9-2,3.6
                                            c-1.2,1.7-1.7,2.1-2.1,2.2c-0.5,0.1-0.8,0.1-1.2,0c-0.5-0.1-0.9-0.1-1.4,0.2c-0.2,0.1-0.4,0.3-0.6,0.4
                                            C451.5,1139.2,451.3,1139.4,451.1,1139.4z M456.3,1125.4c-0.4,0-0.9,0.1-1.4,0.2c-3.4,1-5.2,4-5.2,4.1
                                            c-0.4,0.7-2.3,4.2-1,5.8c0.2,0.3,0.5,0.5,0.8,0.7c0.5,0.4,1,0.7,1.3,1.5c0.1,0.3,0.1,0.5,0.1,0.7c0,0.3,0.1,0.5,0.2,0.6
                                            c0.1,0,0.2,0,0.4-0.2c0.2-0.1,0.4-0.3,0.6-0.4c0.6-0.3,1.1-0.2,1.6-0.2c0.4,0,0.7,0.1,1.1,0c0.2-0.1,0.6-0.2,1.9-2.1
                                            c1.1-1.7,1.7-2.5,2-3.5c0.5-1.6,0.6-3.2,0.1-4.7c-0.3-0.8-0.6-1.9-1.5-2.4l0,0C457.1,1125.5,456.7,1125.4,456.3,1125.4z"/>
                                    </g>
                                    <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M458,1119.5
                                        C458,1119.5,457.9,1119.5,458,1119.5c-0.1-0.1-0.1-0.1-0.1-0.2c0.8-0.9,1.6-1.9,2.3-2.8c2-2.6,3.3-4.9,3.8-5.7
                                        c1-1.7,1.4-2.6,2-4.1c0.4-1,0.9-2.2,1.8-4c0.7-1.6,2.2-3.8,3.3-5.6c0.6-0.9,1.1-1.8,1.4-2.2c0-0.1,0.1-0.1,0.2,0
                                        c0.1,0,0.1,0.1,0,0.2c-0.2,0.4-0.8,1.3-1.4,2.2c-1.1,1.7-2.6,4-3.3,5.6c-0.8,1.8-1.4,3-1.8,4c-0.6,1.5-1,2.4-2,4.1
                                        c-0.5,0.9-1.8,3.1-3.8,5.8C459.6,1117.6,458.9,1118.5,458,1119.5C458,1119.5,458,1119.5,458,1119.5z"/>
                                    <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M458,1119.5c0,0-0.1,0-0.1-0.1
                                        c0-0.1,0-0.1,0.1-0.1c0.2-0.1,0.5-0.1,0.9-0.2c0.6-0.1,1.3-0.3,1.9-0.4c2.5-0.7,5.6-1.6,8.7-2.9c1.8-0.8,2.7-1.3,3.7-1.9
                                        c1-0.6,2-1.2,4-2.1c2.2-0.9,6.7-2.4,7.9-2.8c0.1,0,0.1,0,0.1,0.1s0,0.1-0.1,0.1c-1.3,0.4-5.8,1.8-7.9,2.8c-2,0.9-3,1.5-4,2.1
                                        c-1,0.6-1.9,1.2-3.7,2c-3.1,1.3-6.2,2.2-8.7,2.9c-0.6,0.2-1.3,0.3-1.9,0.4C458.5,1119.4,458.2,1119.4,458,1119.5
                                        C458,1119.5,458,1119.5,458,1119.5z"/>
                                    <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M484.4,1130.7
                                        C484.4,1130.7,484.4,1130.7,484.4,1130.7c-1.2-0.1-5.5-1-7.7-1.8c-1.9-0.6-2.7-1.1-4.1-1.9c-1.1-0.7-2.7-1.6-5.5-2.9
                                        c-0.3-0.1-0.5-0.2-0.8-0.4c-1.4-0.7-3.2-1.5-5.7-2.9c-0.4-0.2-1-0.5-1.6-0.8c-0.5-0.2-0.9-0.5-1.1-0.6c-0.1,0-0.1-0.1,0-0.2
                                        c0-0.1,0.1-0.1,0.2,0c0.2,0.1,0.6,0.3,1.1,0.6c0.6,0.3,1.2,0.6,1.6,0.8c2.4,1.3,4.2,2.2,5.6,2.9c0.3,0.1,0.5,0.3,0.8,0.4
                                        c2.8,1.4,4.4,2.3,5.5,3c1.3,0.8,2.2,1.3,4,1.9c2.2,0.7,6.4,1.6,7.6,1.8c0.1,0,0.1,0.1,0.1,0.1
                                        C484.5,1130.7,484.4,1130.7,484.4,1130.7z"/>
                                    <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M458.1,1119.5
                                        C458.1,1119.5,458,1119.4,458.1,1119.5c-0.7-0.8-1.4-2-1.9-3c-0.7-1.4-1.5-2.9-2.4-4.3c-0.9-1.4-1.5-2.2-4-5.3l-0.8-1
                                        c-0.3-0.3-0.8-1-1.4-1.7c-1.1-1.3-2.4-2.9-3.4-4.2c0,0,0-0.1,0-0.2s0.1,0,0.2,0c1,1.2,2.3,2.8,3.3,4.2
                                        c0.6,0.8,1.1,1.4,1.4,1.7l0.8,1c2.4,3,3.1,3.8,4,5.3c0.9,1.4,1.7,2.9,2.4,4.3c0.5,1,1.2,2.1,1.8,2.9
                                        C458.2,1119.3,458.2,1119.4,458.1,1119.5C458.1,1119.5,458.1,1119.5,458.1,1119.5z"/>
                                    <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M466.5,1143.7c-0.1,0-0.1,0-0.1-0.1
                                        c-0.1-0.5-0.5-1.8-0.8-3c-0.2-0.7-0.4-1.4-0.6-2c-0.4-1.5-0.7-2.4-1.3-3.6c-0.3-0.7-0.6-1.5-1-2.6c-0.6-1.7-0.9-2.7-1.2-3.6
                                        c-0.3-0.9-0.6-1.8-1.2-3.4l-0.1-0.2c-0.8-2.1-1.9-4.9-2.4-5.9c0-0.1,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0.1c0.5,1,1.6,3.8,2.4,5.9
                                        l0.1,0.2c0.6,1.6,0.9,2.5,1.2,3.4c0.3,0.9,0.6,1.9,1.2,3.6c0.4,1.1,0.7,1.9,1,2.6c0.5,1.2,0.8,2.1,1.3,3.6
                                        c0.2,0.6,0.4,1.3,0.6,2c0.4,1.2,0.7,2.4,0.8,3C466.6,1143.7,466.6,1143.7,466.5,1143.7
                                        C466.5,1143.7,466.5,1143.7,466.5,1143.7z"/>
                                    <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M451.1,1139.3
                                        C451,1139.3,451,1139.3,451.1,1139.3c-0.1,0-0.1-0.1-0.1-0.1c0.1-0.9,1-3.3,1.8-5.2c0.6-1.6,1.2-2.5,1.7-3.3
                                        c0.5-0.8,1.1-1.6,1.5-3.2c0.2-0.5,0.2-0.9,0.4-1.5c0.1-0.7,0.4-1.7,0.9-3.7c0.1-0.5,0.3-1.2,0.4-1.8c0.1-0.5,0.2-1,0.3-1.2
                                        c0-0.1,0.1-0.1,0.1-0.1c0.1,0,0.1,0.1,0.1,0.1c-0.1,0.2-0.2,0.7-0.3,1.2c-0.1,0.6-0.3,1.3-0.4,1.8c-0.5,2-0.7,3-0.9,3.7
                                        c-0.1,0.6-0.2,0.9-0.4,1.5c-0.5,1.6-1,2.4-1.6,3.2c-0.5,0.8-1.1,1.6-1.7,3.3c-0.7,1.9-1.6,4.3-1.7,5.2
                                        C451.2,1139.3,451.1,1139.3,451.1,1139.3z"/>
                                    <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M436.6,1124c-2.3,0-4.8-0.2-6.9-0.8
                                        c-0.1,0-0.1-0.1-0.1-0.1c0-0.1,0.1-0.1,0.1-0.1c5.4,1.5,12.8,0.7,15.1-0.3c0.2-0.1,0.5-0.2,0.8-0.3c1.8-0.8,4.2-1.9,6.5-1.3
                                        l0.1,0c0.4,0.1,1.1,0.3,2.1,0.2c1.2-0.2,3.1-1.4,3.7-1.9c0,0,0.1,0,0.2,0c0,0,0,0.1,0,0.2c-0.6,0.5-2.5,1.7-3.8,1.9
                                        c-1,0.1-1.8-0.1-2.2-0.2l-0.1,0c-2.2-0.6-4.6,0.5-6.3,1.3c-0.3,0.1-0.6,0.2-0.8,0.4C443.5,1123.4,440.2,1124,436.6,1124z"/>
                                </g>
                            </g>
                        </g>
                        <g>
                            
                                <image overflow="visible" opacity="0.4" width="124" height="84" href="data:image/png;base64,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
            eY3/B9+CIBBVbDAcAAAAAElFTkSuQmCC" transform="matrix(1 0 0 1 357 118)">
                            </image>
                            <g>
                                <g>
                                    <g>
                                        <g>
                                            
                                                <rect x="456.4" y="154.2" transform="matrix(3.262727e-02 -0.9995 0.9995 3.262727e-02 290.2932 610.5952)" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="8.4" height="2.3"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M461.9,159.9l-3-0.1l0.3-9l3,0.1
                                                L461.9,159.9z M459.6,159.1l1.6,0.1l0.2-7.6l-1.6-0.1L459.6,159.1z"/>
                                        </g>
                                        <g>
                                            
                                                <rect x="454.6" y="153.1" transform="matrix(3.262758e-02 -0.9995 0.9995 3.262758e-02 290.1584 608.3452)" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="9.4" height="2.3"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M460.7,159.4l-3-0.1l0.3-10.1l3,0.1
                                                L460.7,159.4z M458.4,158.6l1.6,0.1l0.3-8.7l-1.6-0.1L458.4,158.6z"/>
                                        </g>
                                        <g>
                                            
                                                <rect x="436.6" y="179.1" transform="matrix(0.9652 -0.2615 0.2615 0.9652 -31.809 121.5606)" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="8.4" height="2.3"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M436.8,182.9L436,180l8.8-2.4l0.8,2.9
                                                L436.8,182.9z M436.9,180.5l0.4,1.6l7.4-2l-0.4-1.6L436.9,180.5z"/>
                                        </g>
                                        <g>
                                            
                                                <rect x="434.8" y="178.2" transform="matrix(0.9652 -0.2615 0.2615 0.9652 -31.6026 121.1954)" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="9.4" height="2.3"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M435,182.1l-0.8-2.9l9.8-2.6l0.8,2.9
                                                L435,182.1z M435.1,179.7l0.4,1.6l8.4-2.3l-0.4-1.6L435.1,179.7z"/>
                                        </g>
                                        <g>
                                            <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M456.9,176
                                                c-4.1,5.1-11.5,6.2-16.8,2.4l-10.5-7.4c-2-1.4-2.3-3.6-0.8-5.6l14.8-18.7c1.5-1.9,3.8-2.1,5.6-0.5l9.6,8.5
                                                c4.9,4.4,5.6,11.8,1.5,16.9L456.9,176z"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M447.3,181c-2.6,0-5.2-0.7-7.5-2.3
                                                l-10.5-7.4c-1.1-0.8-1.7-1.7-1.9-2.8c-0.2-1.1,0.2-2.2,1-3.2l14.8-18.7c0.8-1,1.8-1.6,2.9-1.7c1.1-0.1,2.2,0.3,3.2,1.2
                                                l9.6,8.5c5,4.5,5.7,12.1,1.5,17.4l-3.4,4.3C454.7,179.3,451.1,181,447.3,181z M446.5,145.5c-0.1,0-0.1,0-0.2,0
                                                c-0.9,0.1-1.7,0.6-2.4,1.5L429,165.7c-0.7,0.9-1,1.8-0.9,2.7c0.1,0.9,0.7,1.7,1.6,2.3l10.5,7.4c5.2,3.7,12.4,2.6,16.3-2.4
                                                l3.4-4.3c4-5,3.3-12.2-1.4-16.5l-9.6-8.5C448.2,145.8,447.3,145.5,446.5,145.5z"/>
                                        </g>
                                        <g>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M447.6,179.5c-2.3,0-4.6-0.6-6.7-2.1
                                                l-9.3-6.6c-1-0.7-1.5-1.6-1.7-2.5c-0.1-1,0.2-2,0.9-2.9l13.2-16.6c0.7-0.9,1.6-1.5,2.6-1.5c1-0.1,2,0.3,2.9,1.1l8.5,7.6
                                                c4.5,4,5.1,10.8,1.4,15.5l-3,3.8C454.2,177.9,450.9,179.4,447.6,179.5z M446.8,147.9c-0.1,0-0.1,0-0.2,0
                                                c-0.8,0.1-1.5,0.5-2.1,1.3l-13.2,16.6c-0.6,0.8-0.9,1.6-0.8,2.4c0.1,0.8,0.6,1.5,1.4,2.1l9.3,6.6c4.6,3.2,11,2.3,14.5-2.1
                                                l3-3.8c3.5-4.4,2.9-10.8-1.3-14.6l-8.5-7.6C448.3,148.2,447.6,147.9,446.8,147.9z"/>
                                        </g>
                                        <g>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M439,180.5l1.4,1
                                                c6.8,5,16.5,3.8,21.7-2.9l1.7-2.2c5.3-6.7,4.3-16.3-2.2-21.8l-1.3-1.1l3.2,0.1l6.3,9.9l0,8.2l-4.3,7.7l-6.5,5.6
                                                c0,0-6.1,2.1-6.3,2.2c-0.2,0.1-6.7,0.3-7.4,0.1c-0.7-0.2-5.8-3.4-5.9-3.5C439.5,183.5,439,180.5,439,180.5z"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M448.6,187.7c-1.5,0-2.9,0-3.2-0.1
                                                c-0.5-0.2-2.6-1.4-3.3-1.8c-2.8-1.7-2.8-1.8-2.9-2c-0.1-0.2-0.4-2.3-0.6-3.2l-0.1-0.9l2.1,1.5c6.7,5,16.1,3.7,21.3-2.9
                                                l1.7-2.2c5.2-6.6,4.3-15.9-2.1-21.3l-2-1.7l4.4,0.1l6.5,10.2l0,8.4l0,0.1l-4.4,7.8l-6.6,5.7l-0.1,0
                                                c-0.6,0.2-6.1,2.1-6.3,2.2C452.7,187.6,450.6,187.7,448.6,187.7z M439.9,183.5c0.6,0.5,5.1,3.2,5.7,3.4
                                                c0.5,0.2,6.6,0,7.2-0.1c0.2-0.1,3.8-1.3,6.2-2.2l6.4-5.5l4.3-7.6l0-8l-6.2-9.7l-2.1,0l0.5,0.5c6.7,5.7,7.6,15.5,2.2,22.3
                                                l-1.7,2.2c-5.4,6.9-15.2,8.2-22.2,3l-0.7-0.5C439.6,182.2,439.8,183.2,439.9,183.5z"/>
                                        </g>
                                        <g>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M463.3,180.2
                                                c-5.3,6.4-14.7,7.5-21.3,2.5l-9.3-6.9l-1.9,2.6l9.3,6.9c8,5.9,19.3,4.6,25.7-3.1l2.4-3.1c6-8,4.7-19.3-2.9-25.7l-8.9-7.5
                                                l-2.1,2.5l8.9,7.5c6.3,5.3,7.4,14.7,2.4,21.3L463.3,180.2z"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M451.5,189.3
                                                c-4.1,0.1-8.2-1.2-11.7-3.8l-9.6-7.1l2.3-3.1l9.6,7.1c6.5,4.8,15.6,3.7,20.8-2.5l2.3-3c4.8-6.5,3.8-15.6-2.4-20.8l-9.1-7.7
                                                l2.5-3l9.1,7.7c7.8,6.6,9.1,18.1,3,26.2l-2.5,3.1C462.3,186.9,456.9,189.3,451.5,189.3z M431.2,178.3l9.1,6.7
                                                c7.9,5.8,18.9,4.5,25.2-3l2.4-3.1c5.9-7.8,4.6-18.9-2.9-25.2l-8.6-7.3l-1.6,1.9l8.6,7.3c6.5,5.5,7.6,15,2.5,21.8l-2.4,3
                                                c-5.4,6.5-15,7.6-21.8,2.6l-9.1-6.7L431.2,178.3z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            
                                                <rect x="392.3" y="179.7" transform="matrix(0.9999 -1.279472e-02 1.279472e-02 0.9999 -2.281 5.0875)" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="8.4" height="2.3"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M401,182.3l-9.1,0.1l0-3l9.1-0.1
                                                L401,182.3z M392.7,181.7l7.7-0.1l0-1.6l-7.7,0.1L392.7,181.7z"/>
                                        </g>
                                        <g>
                                            
                                                <rect x="392.8" y="178.4" transform="matrix(0.9999 -1.279530e-02 1.279530e-02 0.9999 -2.2647 5.1004)" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="9.4" height="2.3"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M402.5,181l-10.1,0.1l0-3l10.1-0.1
                                                L402.5,181z M393.1,180.4l8.7-0.1l0-1.6l-8.7,0.1L393.1,180.4z"/>
                                        </g>
                                        <g>
                                            
                                                <rect x="369.5" y="158" transform="matrix(0.9523 -0.3051 0.3051 0.9523 -31.8152 120.8157)" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="2.3" height="8.4"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M373.5,166.1l-2.9,0.9l-2.8-8.7
                                                l2.9-0.9L373.5,166.1z M371,166.1l1.5-0.5l-2.4-7.3l-1.5,0.5L371,166.1z"/>
                                        </g>
                                        <g>
                                            
                                                <rect x="370.4" y="156.2" transform="matrix(0.9523 -0.3051 0.3051 0.9523 -31.368 121.0277)" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="2.3" height="9.4"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M374.5,165.2l-2.9,0.9l-3.1-9.6
                                                l2.9-0.9L374.5,165.2z M372.1,165.3l1.5-0.5l-2.7-8.3l-1.5,0.5L372.1,165.3z"/>
                                        </g>
                                        <g>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M375.7,178.1
                                                c-5.3-3.8-6.7-11.2-3.2-16.7l6.9-10.8c1.3-2.1,3.5-2.5,5.5-1.1l19.4,14c2,1.4,2.3,3.7,0.7,5.6l-8.1,10
                                                c-4.1,5.1-11.5,6.1-16.9,2.3L375.7,178.1z"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M405.9,168.4
                                                c-0.2,0.3-0.3,0.6-0.6,0.8l-8.1,10c-4.2,5.2-11.9,6.3-17.3,2.3l-4.4-3.2c-5.5-3.9-6.9-11.5-3.3-17.2l6.9-10.8
                                                c0.7-1.1,1.6-1.8,2.7-2c1.1-0.2,2.2,0.1,3.3,0.8l19.4,14c1.1,0.8,1.7,1.7,1.8,2.8C406.4,166.8,406.3,167.6,405.9,168.4z
                                                M372.3,162.3c-2.9,5.3-1.4,11.9,3.5,15.5l4.4,3.2c5.2,3.7,12.4,2.8,16.4-2.2l8.1-10c0.7-0.9,1-1.8,0.9-2.7
                                                c-0.1-0.9-0.7-1.7-1.6-2.4l-19.4-14c-0.9-0.6-1.8-0.9-2.7-0.7c-0.9,0.2-1.7,0.8-2.3,1.7l-6.9,10.8
                                                C372.6,161.8,372.5,162.1,372.3,162.3z"/>
                                        </g>
                                        <g>
                                            <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M376.7,177.2c-4.7-3.4-6-9.9-2.8-14.8
                                                l6.1-9.6c1.2-1.8,3.1-2.2,4.9-0.9l17.2,12.4c1.8,1.3,2,3.2,0.7,4.9l-7.2,8.9c-3.7,4.5-10.2,5.4-15,2L376.7,177.2z"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M403.5,168.6
                                                c-0.1,0.2-0.3,0.5-0.5,0.7l-7.2,8.9c-3.8,4.7-10.6,5.6-15.5,2.1l-3.9-2.8c-4.9-3.5-6.2-10.3-2.9-15.3l6.1-9.6
                                                c0.6-1,1.5-1.6,2.5-1.8c1-0.2,2,0.1,2.9,0.8l17.2,12.4c1,0.7,1.5,1.6,1.7,2.6C404.1,167.2,403.9,167.9,403.5,168.6z
                                                M373.7,163.2c-2.5,4.7-1.2,10.6,3.1,13.7l3.9,2.8c4.6,3.3,11,2.4,14.5-1.9l7.2-8.9c0.6-0.8,0.9-1.6,0.8-2.4
                                                c-0.1-0.8-0.6-1.5-1.4-2.1l-17.2-12.4c-0.8-0.6-1.6-0.8-2.4-0.6c-0.8,0.1-1.5,0.7-2,1.5l-6.1,9.6
                                                C374,162.8,373.9,163,373.7,163.2z"/>
                                        </g>
                                        <g>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M370.3,160.4l-0.9,1.4
                                                c-4.7,7.1-3,16.6,3.9,21.6l2.3,1.6c6.9,5,16.5,3.6,21.7-3.1l1-1.3l0.1,3.2l-9.6,6.8l-8.2,0.3l-7.9-4l-5.9-6.2
                                                c0,0-2.4-6-2.5-6.2c-0.1-0.2-0.6-6.7-0.4-7.4c0.2-0.7,3.1-6,3.3-6C367.4,161,370.3,160.4,370.3,160.4z"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M398.8,184l-9.9,6.9l-8.4,0.4l-8-4.1
                                                l-6-6.3l0-0.1c-0.2-0.6-2.4-6-2.5-6.2c-0.1-0.3-0.6-6.7-0.4-7.5c0.1-0.5,1.3-2.7,1.7-3.3c1.6-2.8,1.7-2.9,1.8-2.9
                                                c0.2-0.1,2.3-0.5,3.2-0.7l0.8-0.2l-1.4,2.1c-4.6,6.9-3,16.2,3.8,21.1l2.3,1.6c6.8,4.9,16.1,3.5,21.2-3.1l1.6-2.1L398.8,184z
                                                M388.7,190.2l9.4-6.6l-0.1-2.1l-0.4,0.6c-5.3,6.9-15.1,8.3-22.2,3.2l-2.3-1.6c-7.1-5.1-8.8-14.8-4-22.1l0.5-0.7
                                                c-0.9,0.2-1.9,0.4-2.2,0.5c-0.5,0.7-3,5.2-3.1,5.8c-0.1,0.6,0.3,6.6,0.4,7.2c0.1,0.2,1.5,3.7,2.4,6.1l5.8,6.1l7.8,3.9
                                                L388.7,190.2z"/>
                                        </g>
                                        <g>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M371.8,184.7
                                                c-6.6-5-8.1-14.3-3.5-21.2l6.5-9.6l-2.7-1.8l-6.5,9.6c-5.6,8.3-3.7,19.5,4.2,25.5l3.2,2.3c8.2,5.6,19.5,3.8,25.5-4.1
                                                l7.1-9.2l-2.5-2l-7.1,9.2c-5,6.6-14.4,8-21.2,3.4L371.8,184.7z"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M406.2,176.2l-7.3,9.5
                                                c-6.2,8.1-17.6,9.9-26,4.2l-3.2-2.3c-8.1-6.2-10-17.6-4.3-26l6.7-9.9l3.2,2.2l-6.7,9.9c-4.5,6.7-3,15.8,3.4,20.7l3.1,2.2
                                                c6.7,4.5,15.8,3.1,20.7-3.3l7.3-9.5L406.2,176.2z M365,163.4c-4.3,7.9-2.2,18,5.1,23.5l3.2,2.3c8.1,5.5,19.1,3.7,25.1-4
                                                l6.9-8.9l-2-1.5l-6.9,8.9c-5.2,6.7-14.7,8.2-21.7,3.5l-3.1-2.2c-6.7-5.1-8.3-14.6-3.6-21.7l6.3-9.3l-2.1-1.4l-6.3,9.3
                                                C365.6,162.4,365.3,162.9,365,163.4z"/>
                                        </g>
                                    </g>
                                    <g>
                                        
                                            <ellipse transform="matrix(0.7891 -0.6143 0.6143 0.7891 2.0266 283.9185)" fill="#FFFFFF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" cx="414.4" cy="139" rx="15.9" ry="15.9"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M416.9,154.9c-2.9,0.5-5.9,0.1-8.7-1.1
                                            c-8.1-3.5-11.9-12.9-8.5-21.1c1.7-3.9,4.8-7,8.8-8.6c4-1.6,8.3-1.6,12.3,0.1c3.9,1.7,7,4.8,8.6,8.8c1.6,4,1.6,8.3-0.1,12.3
                                            l0,0c-1.7,3.9-4.8,7-8.8,8.6C419.3,154.4,418.1,154.7,416.9,154.9z M412.1,123.5c-1.2,0.2-2.3,0.5-3.5,1
                                            c-3.9,1.6-6.9,4.5-8.6,8.4c-3.4,8,0.3,17.2,8.3,20.6c3.9,1.6,8.1,1.7,12,0.1c3.9-1.6,6.9-4.5,8.6-8.4l0,0
                                            c1.6-3.9,1.7-8.1,0.1-12c-1.6-3.9-4.5-6.9-8.4-8.6C417.9,123.4,414.9,123,412.1,123.5z"/>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g id="Living_Room_00000183952490339063736200000000207219323014127035_">
                            
                                <image overflow="visible" opacity="0.4" width="113" height="52" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAA0CAYAAAC969cPAAAACXBIWXMAAAsSAAALEgHS3X78AAAE
            RElEQVR4nO2c23LTMBBAT5q0SQglvUAHynD9/8/iMvQGpaRJaFPzsFq8VuS0aeUOY/bMaJJxbD/4
            zK4sRasOd6ezxrlOHoq7nHSbmI757ETHnOYozGcRHVuit+JGKm4jalaokx8VdxM1/W2JOokqqhvO
            2TTNynTyYuVdmXYNLMw5FVISrcBNYAiMgCfh+1b4zSMyLxqBC+A3MAUugUn4DjUi6yJxI/w2BHaA
            PWAfeIbI1IgEF5kDlaIReAn8BE6BM3OOSq5QF4kbiKgRIu91aM+BbaCPp9TcaCqdAxfACRJEHcq0
            ugjnrIxE+zKjEvcQgR+BQ2AMDChTqpMHjbIZcA58CceniNQJkmbV0V+Rq9Kp9odjJAIPgTdIeh3i
            EnOjEqfAj3DsJ3CMPG/bhVVYlU57SNocIX3hDrAbmkdiflSiptAL5LmPEA89arqwVDrdoBxabCHC
            hqYNcIlNYF9a4ue9hfjoIn4q/aKVaPtDjUJ7oz4S0nozl5gXlaLj8j7VAIqj8W+/qBJTY8NtJJzj
            kO7iMzdNYbOg7cqeIT705cZGYtFL3GAQLtoDXiBDjDHVztXlNYMdGehL5T7i4QcyfpwjMzg3hPTb
            DRerwD4i8AB5E30PvANeIlLtQD/5puTcGzts0DHjdWhzZOgxDZ+/EYEFUGi/ZmdodoFXwFvgAyLz
            AJE7YMVbktMIOg2nU3ATROQVYWLcRpOKHCD5dxeJvh3gKRKltj908mNHB33kueu05y7ixQYSUJ3/
            TE16P0VSaD++0GkUO0J4gngYUb6XVP6AsFLiv5+2QtOL/I30cbBDPQ0qdaGjg4qHOLJu+yPYBT4O
            9nnf+qd8Kj12aprz+NzJhfdxLcAltgCX2AJcYgtwiS3AJbYAl9gCXGILcIktwCW2AJfYAlxiC3CJ
            LcAltgCX2AJc4r9PkWgVUhJTFyUvdhqjruT7hoSLWKK9eBG12ps42bABs0DWnF4hSxa17HvJQS9x
            g4W5cEa5WFXPtQt1fNlGPqzAa8rnH683rSwchlJMql78F1Ifdx7OW1BW6Pjqt7zYDKgCL5FnfxLa
            d6TcbUYZkUA1ErVeXCtVj5FV311kGfmY9DpUl/hwVOAV8qwnlDX7X4FPwDdE5CXl6u+CUFBTRDeZ
            IMX+XxBJs3Cxrga3VVK+i8bDsVlwjmTAc0TgESLxc2iniB8rsZJOrcTTcHyOVOPsUe6gocvJh3g0
            5sCm0SkSgWdICj0y7QRxMcXUYcByOtUbEb6r0DFlTYBGo0vMQ51E3f7kezh2EX639YkFVB9+3TL+
            AWU9gBY7aoGNrc9wketj96/REjb7Qqm7Zswo6xKXtkGJH3y8dNxuC6a1+lr+nawLcNYmHhdqHaKt
            RYzlVcbpqYcf76yoQlVmDxeYm9QAXwtM48hbmmhZZ6tM322xWeqm2m7dKvOuEnzf08dhrX1OlfuI
            cHnN43PT/xt/AJvnWD/75lYvAAAAAElFTkSuQmCC" transform="matrix(1 0 0 1 725 340)">
                            </image>
                            <g>
                                <g>
                                    <g>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M762,382.6h-23.9c-1.6,0-3-1.3-3-3
                                            v-30.7c0-1.6,1.3-3,3-3H762c1.6,0,3,1.3,3,3v30.7C765,381.2,763.6,382.6,762,382.6z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M762.9,382.7h-25.7
                                            c-1.3,0-2.3-1-2.3-2.3v-32.5c0-1.3,1-2.3,2.3-2.3h25.7c1.3,0,2.3,1,2.3,2.3v32.5C765.1,381.7,764.1,382.7,762.9,382.7z
                                            M737.2,346c-1.1,0-1.9,0.9-1.9,1.9v32.5c0,1.1,0.9,1.9,1.9,1.9h25.7c1.1,0,1.9-0.9,1.9-1.9v-32.5c0-1.1-0.9-1.9-1.9-1.9
                                            H737.2z"/>
                                    </g>
                                    <g>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M791.8,382.6h-23.9c-1.6,0-3-1.3-3-3
                                            v-30.7c0-1.6,1.3-3,3-3h23.9c1.6,0,3,1.3,3,3v30.7C794.8,381.3,793.5,382.6,791.8,382.6z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M792.7,382.8H767c-1.3,0-2.3-1-2.3-2.3
                                            V348c0-1.3,1-2.3,2.3-2.3h25.7c1.3,0,2.3,1,2.3,2.3v32.5C795,381.8,794,382.8,792.7,382.8z M767,346.1
                                            c-1.1,0-1.9,0.9-1.9,1.9v32.5c0,1.1,0.9,1.9,1.9,1.9h25.7c1.1,0,1.9-0.9,1.9-1.9V348c0-1.1-0.9-1.9-1.9-1.9H767z"/>
                                    </g>
                                    <g>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M821.7,382.8h-23.9c-1.6,0-3-1.3-3-3
                                            v-30.7c0-1.6,1.3-3,3-3h23.9c1.6,0,3,1.3,3,3v30.7C824.7,381.4,823.4,382.8,821.7,382.8z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M822.6,383h-25.7c-1.3,0-2.3-1-2.3-2.3
                                            v-32.5c0-1.3,1-2.3,2.3-2.3h25.7c1.3,0,2.3,1,2.3,2.3v32.5C824.9,381.9,823.9,383,822.6,383z M796.9,346.3
                                            c-1.1,0-1.9,0.9-1.9,1.9v32.5c0,1.1,0.9,1.9,1.9,1.9h25.7c1.1,0,1.9-0.9,1.9-1.9v-32.5c0-1.1-0.9-1.9-1.9-1.9H796.9z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M737.7,380.6h-5.4
                                            c-1.2,0-2.2-1-2.2-2.2v-23.6c0-1.2,1-2.2,2.2-2.2h5.4c1.2,0,2.2,1,2.2,2.2v23.6C739.9,379.6,738.9,380.6,737.7,380.6z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M738.4,380.8h-6.7
                                            c-1,0-1.7-0.8-1.7-1.7v-24.9c0-1,0.8-1.7,1.7-1.7l6.7,0c1,0,1.7,0.8,1.7,1.7V379C740.1,380,739.3,380.8,738.4,380.8z
                                            M731.6,352.7c-0.8,0-1.4,0.6-1.4,1.4V379c0,0.8,0.6,1.4,1.4,1.4h6.7c0.8,0,1.4-0.6,1.4-1.4v-24.9c0-0.8-0.6-1.4-1.4-1.4
                                            H731.6z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M827.5,380.6H822c-1.2,0-2.2-1-2.2-2.2
                                            v-23.6c0-1.2,1-2.2,2.2-2.2h5.4c1.2,0,2.2,1,2.2,2.2v23.6C829.7,379.6,828.7,380.6,827.5,380.6z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M828.1,380.8h-6.7
                                            c-1,0-1.7-0.8-1.7-1.7v-24.9c0-1,0.8-1.7,1.7-1.7h6.7c1,0,1.7,0.8,1.7,1.7V379C829.9,380,829.1,380.8,828.1,380.8z
                                            M821.4,352.7c-0.8,0-1.4,0.6-1.4,1.4V379c0,0.8,0.6,1.4,1.4,1.4h6.7c0.8,0,1.4-0.6,1.4-1.4v-24.9c0-0.8-0.6-1.4-1.4-1.4
                                            H821.4z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M824.5,355.1h-88.6
                                            c-1.3,0-2.3-1-2.3-2.3v-6c0-1.3,1-2.3,2.3-2.3h88.6c1.3,0,2.3,1,2.3,2.3v6C826.8,354.1,825.8,355.1,824.5,355.1z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M825.2,355.3h-90c-1,0-1.8-0.8-1.8-1.8
                                            v-7.4c0-1,0.8-1.8,1.8-1.8h90c1,0,1.8,0.8,1.8,1.8v7.4C827,354.5,826.2,355.3,825.2,355.3z M735.2,344.6
                                            c-0.8,0-1.4,0.6-1.4,1.4v7.4c0,0.8,0.6,1.4,1.4,1.4l90,0c0.8,0,1.4-0.6,1.4-1.4v-7.4c0-0.8-0.6-1.4-1.4-1.4H735.2z"/>
                                    </g>
                                    <g>
                                        <circle fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" cx="772.6" cy="360.5" r="0.8"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M772.6,361.5c-0.5,0-1-0.4-1-1
                                            s0.4-1,1-1c0.5,0,1,0.4,1,1S773.1,361.5,772.6,361.5z M772.6,359.9c-0.3,0-0.6,0.3-0.6,0.6c0,0.3,0.3,0.6,0.6,0.6
                                            c0.3,0,0.6-0.3,0.6-0.6C773.2,360.2,772.9,359.9,772.6,359.9z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M787.7,360.5c0,0.4-0.4,0.8-0.8,0.8
                                            c-0.4,0-0.8-0.4-0.8-0.8c0-0.4,0.4-0.8,0.8-0.8C787.3,359.8,787.7,360.1,787.7,360.5z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M786.9,361.5c-0.5,0-1-0.4-1-1
                                            s0.4-1,1-1c0.5,0,1,0.4,1,1S787.4,361.5,786.9,361.5z M786.9,359.9c-0.3,0-0.6,0.3-0.6,0.6c0,0.3,0.3,0.6,0.6,0.6
                                            c0.3,0,0.6-0.3,0.6-0.6C787.5,360.2,787.2,359.9,786.9,359.9z"/>
                                    </g>
                                    <g>
                                        <circle fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" cx="772.6" cy="374.5" r="0.8"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M772.6,375.5c-0.5,0-1-0.4-1-1
                                            c0-0.5,0.4-1,1-1c0.5,0,1,0.4,1,1C773.5,375.1,773.1,375.5,772.6,375.5z M772.6,373.9c-0.3,0-0.6,0.3-0.6,0.6
                                            c0,0.3,0.3,0.6,0.6,0.6c0.3,0,0.6-0.3,0.6-0.6C773.2,374.2,772.9,373.9,772.6,373.9z"/>
                                    </g>
                                    <g>
                                        <circle fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" cx="787.1" cy="374.5" r="0.8"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M787.1,375.5c-0.5,0-1-0.4-1-1
                                            c0-0.5,0.4-1,1-1c0.5,0,1,0.4,1,1C788.1,375.1,787.6,375.5,787.1,375.5z M787.1,373.9c-0.3,0-0.6,0.3-0.6,0.6
                                            c0,0.3,0.3,0.6,0.6,0.6c0.3,0,0.6-0.3,0.6-0.6C787.7,374.2,787.4,373.9,787.1,373.9z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M781.2,368.5c0,0.4-0.4,0.8-0.8,0.8
                                            c-0.4,0-0.8-0.4-0.8-0.8c0-0.4,0.4-0.8,0.8-0.8C780.9,367.7,781.2,368,781.2,368.5z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M780.4,369.4c-0.5,0-1-0.4-1-1
                                            s0.4-1,1-1c0.5,0,1,0.4,1,1S781,369.4,780.4,369.4z M780.4,367.8c-0.3,0-0.6,0.3-0.6,0.6c0,0.3,0.3,0.6,0.6,0.6
                                            c0.3,0,0.6-0.3,0.6-0.6C781,368.1,780.8,367.8,780.4,367.8z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M801.9,360.5c0,0.4-0.4,0.8-0.8,0.8
                                            c-0.4,0-0.8-0.4-0.8-0.8c0-0.4,0.4-0.8,0.8-0.8C801.6,359.8,801.9,360.1,801.9,360.5z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M801.1,361.5c-0.5,0-1-0.4-1-1
                                            s0.4-1,1-1s1,0.4,1,1S801.7,361.5,801.1,361.5z M801.1,359.9c-0.3,0-0.6,0.3-0.6,0.6c0,0.3,0.3,0.6,0.6,0.6
                                            c0.3,0,0.6-0.3,0.6-0.6C801.8,360.2,801.5,359.9,801.1,359.9z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M816.3,360.5c0,0.4-0.4,0.8-0.8,0.8
                                            c-0.4,0-0.8-0.4-0.8-0.8c0-0.4,0.4-0.8,0.8-0.8C815.9,359.8,816.3,360.1,816.3,360.5z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M815.5,361.5c-0.5,0-1-0.4-1-1
                                            s0.4-1,1-1c0.5,0,1,0.4,1,1S816,361.5,815.5,361.5z M815.5,359.9c-0.3,0-0.6,0.3-0.6,0.6c0,0.3,0.3,0.6,0.6,0.6
                                            c0.3,0,0.6-0.3,0.6-0.6C816.1,360.2,815.8,359.9,815.5,359.9z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M801.9,374.5c0,0.4-0.4,0.8-0.8,0.8
                                            c-0.4,0-0.8-0.4-0.8-0.8c0-0.4,0.4-0.8,0.8-0.8C801.6,373.8,801.9,374.1,801.9,374.5z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M801.1,375.5c-0.5,0-1-0.4-1-1
                                            c0-0.5,0.4-1,1-1s1,0.4,1,1C802.1,375.1,801.7,375.5,801.1,375.5z M801.1,373.9c-0.3,0-0.6,0.3-0.6,0.6
                                            c0,0.3,0.3,0.6,0.6,0.6c0.3,0,0.6-0.3,0.6-0.6C801.8,374.2,801.5,373.9,801.1,373.9z"/>
                                    </g>
                                    <g>
                                        <circle fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" cx="815.7" cy="374.5" r="0.8"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M815.7,375.5c-0.5,0-1-0.4-1-1
                                            c0-0.5,0.4-1,1-1c0.5,0,1,0.4,1,1C816.7,375.1,816.2,375.5,815.7,375.5z M815.7,373.9c-0.3,0-0.6,0.3-0.6,0.6
                                            c0,0.3,0.3,0.6,0.6,0.6c0.3,0,0.6-0.3,0.6-0.6C816.3,374.2,816,373.9,815.7,373.9z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M809.8,368.5c0,0.4-0.4,0.8-0.8,0.8
                                            c-0.4,0-0.8-0.4-0.8-0.8c0-0.4,0.4-0.8,0.8-0.8C809.4,367.7,809.8,368,809.8,368.5z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M809,369.4c-0.5,0-1-0.4-1-1s0.4-1,1-1
                                            c0.5,0,1,0.4,1,1S809.5,369.4,809,369.4z M809,367.8c-0.3,0-0.6,0.3-0.6,0.6c0,0.3,0.3,0.6,0.6,0.6c0.3,0,0.6-0.3,0.6-0.6
                                            C809.6,368.1,809.3,367.8,809,367.8z"/>
                                    </g>
                                    <g>
                                        <circle fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" cx="744.8" cy="360.5" r="0.8"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M744.8,361.5c-0.5,0-1-0.4-1-1
                                            s0.4-1,1-1c0.5,0,1,0.4,1,1S745.3,361.5,744.8,361.5z M744.8,359.9c-0.3,0-0.6,0.3-0.6,0.6c0,0.3,0.3,0.6,0.6,0.6
                                            c0.3,0,0.6-0.3,0.6-0.6C745.4,360.2,745.1,359.9,744.8,359.9z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M759.9,360.5c0,0.4-0.4,0.8-0.8,0.8
                                            c-0.4,0-0.8-0.4-0.8-0.8c0-0.4,0.4-0.8,0.8-0.8C759.5,359.8,759.9,360.1,759.9,360.5z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M759.1,361.5c-0.5,0-1-0.4-1-1
                                            s0.4-1,1-1c0.5,0,1,0.4,1,1S759.6,361.5,759.1,361.5z M759.1,359.9c-0.3,0-0.6,0.3-0.6,0.6c0,0.3,0.3,0.6,0.6,0.6
                                            c0.3,0,0.6-0.3,0.6-0.6C759.7,360.2,759.4,359.9,759.1,359.9z"/>
                                    </g>
                                    <g>
                                        <circle fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" cx="744.8" cy="374.5" r="0.8"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M744.8,375.5c-0.5,0-1-0.4-1-1
                                            c0-0.5,0.4-1,1-1c0.5,0,1,0.4,1,1C745.8,375.1,745.3,375.5,744.8,375.5z M744.8,373.9c-0.3,0-0.6,0.3-0.6,0.6
                                            c0,0.3,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6C745.4,374.2,745.1,373.9,744.8,373.9z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M760.1,374.5c0,0.4-0.4,0.8-0.8,0.8
                                            c-0.4,0-0.8-0.4-0.8-0.8c0-0.4,0.4-0.8,0.8-0.8C759.8,373.8,760.1,374.1,760.1,374.5z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M759.3,375.5c-0.5,0-1-0.4-1-1
                                            c0-0.5,0.4-1,1-1c0.5,0,1,0.4,1,1C760.3,375.1,759.9,375.5,759.3,375.5z M759.3,373.9c-0.3,0-0.6,0.3-0.6,0.6
                                            c0,0.3,0.3,0.6,0.6,0.6c0.3,0,0.6-0.3,0.6-0.6C759.9,374.2,759.7,373.9,759.3,373.9z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M753.4,368.5c0,0.4-0.4,0.8-0.8,0.8
                                            c-0.4,0-0.8-0.4-0.8-0.8c0-0.4,0.4-0.8,0.8-0.8C753.1,367.7,753.4,368,753.4,368.5z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M752.6,369.4c-0.5,0-1-0.4-1-1
                                            s0.4-1,1-1c0.5,0,1,0.4,1,1S753.2,369.4,752.6,369.4z M752.6,367.8c-0.3,0-0.6,0.3-0.6,0.6c0,0.3,0.3,0.6,0.6,0.6
                                            c0.3,0,0.6-0.3,0.6-0.6C753.3,368.1,753,367.8,752.6,367.8z"/>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g id="TV_stand_00000061440004526323923300000014028825527915530388_">
                            
                                <image overflow="visible" opacity="0.4" width="138" height="42" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAAAqCAYAAABsm8OKAAAACXBIWXMAAAsSAAALEgHS3X78AAAC
            eklEQVR4nO2cT0/jMBBHX0pLUQGt9s8BsVz4/t8L7WG32kKpthTIHsaDndSJ3GPM70mjtnHSyzzZ
            buWZhmGakTFRJ+3QQE6GJrneDNwj6qIlSpK+/6DJvJ9lon+vqAMX4j0T6Tjz3oOzcG2RxBzJUiOp
            JK/AIYlXoixAFKUhSrIEVsBliCVRFolSDy1Rkj3wHGIXxl2WFo5FWWCSfAO+h9drTJYztGepBd+H
            vGGSPAFr4E8Y9+XnY78yp7s3WQBXwA/gDrjFZFmFMV+CxPR5x5aZHSbJA+bCCybPAROpAdqxGeUW
            uAdusFnlHC0/teDLzgs2m/wK13fAX+CRmOvs0uN7lCtMlhvgJ/AFuECi1IKL8g/YhGsbLO/ZPenQ
            rx7f0F5jknylu08R0ybdn4DNICu6knRIRfGN6gwTYoEtN8sQF0iUWnBRwHJ7juX7jDiTdPLcn1Eg
            ypJKk4ZEmT7+H4rnNM13Nr85UZxmJMT0OSmv+rkripAoogiJIoqQKKIIiSKKkCiiCIkiipAoogiJ
            IoqQKKIIiSKKkCiiCIkiipAoogiJIoqQKKIIiSKKGDvh1g6EmD4n5zYnih/l99e3JEBHIWvAD1d7
            pPnOCpOK0tKV40CsGvNj/TpcXQdpucYey7NXBnZKSZ3+jJIWLe+wKjIvEFIBWD30C8CesHzvyXQy
            gChKv7J9i9WjeqnhIyoprYlcSekay3sqy1F/FH+wX7QMZpyK1Osjl+91+HwgI0qLzRL+4Bb4Ha4/
            o7YXNTLW9mJLFMXvHZxRCF+wQY10amWskc7RjNLv4abWXJ+HktZcg6KAmv19Joqb/al9qIAT24ee
            MibqZPBv/P/rpt5WtLMAJQAAAABJRU5ErkJggg==" transform="matrix(1 0 0 1 720 441)">
                            </image>
                            <g>
                                <g>
                                    <g>
                                        
                                            <rect x="725.1" y="445.7" fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="37.1" height="28.6"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M762.4,474.5h-37.6v-29.1h37.6
                                            L762.4,474.5z M725.4,474h36.5v-28.1h-36.5V474z"/>
                                    </g>
                                    <g>
                                        
                                            <rect x="812.2" y="445.7" fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="37.1" height="28.6"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M849.5,474.5h-37.6v-29.1h37.6V474.5z
                                            M812.4,474l36.5,0v-28.1h-36.5V474z"/>
                                    </g>
                                    <g>
                                        
                                            <rect x="762.3" y="445.7" fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="49.9" height="28.6"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M812.4,474.5l-50.4,0v-29.1l50.4,0
                                            V474.5z M762.5,474h49.3v-28.1l-49.3,0V474z"/>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M776.1,459.7h22.1v0.2
                                                    c0,0.7-0.5,1.2-1.2,1.2h-19.7c-0.7,0-1.2-0.5-1.2-1.2V459.7z"/>
                                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M797.1,461.4h-19.7
                                                    c-0.8,0-1.5-0.7-1.5-1.5v-0.5l22.7,0v0.5C798.5,460.7,797.9,461.4,797.1,461.4z M776.4,459.9c0,0.5,0.4,0.9,1,0.9l19.7,0
                                                    c0.5,0,0.9-0.4,1-0.9L776.4,459.9z"/>
                                            </g>
                                            <g>
                                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M772.3,457.7v0.3
                                                    c0,0.9,0.7,1.6,1.6,1.6h26.5c0.9,0,1.6-0.7,1.6-1.6v-0.3H772.3z"/>
                                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M800.4,459.9H774
                                                    c-1.1,0-1.9-0.9-1.9-1.9v-0.5h30.3v0.5C802.3,459,801.5,459.9,800.4,459.9z M772.6,458c0,0.8,0.6,1.4,1.4,1.4h26.5
                                                    c0.8,0,1.4-0.6,1.4-1.4H772.6z"/>
                                            </g>
                                            <g>
                                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M772.3,457.7v0.3
                                                    c0,0.9,0.7,1.6,1.6,1.6h26.5c0.9,0,1.6-0.7,1.6-1.6v-0.3H772.3z"/>
                                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M800.4,459.9H774
                                                    c-1.1,0-1.9-0.9-1.9-1.9v-0.5h30.3v0.5C802.3,459,801.5,459.9,800.4,459.9z M772.6,458c0,0.8,0.6,1.4,1.4,1.4h26.5
                                                    c0.8,0,1.4-0.6,1.4-1.4H772.6z"/>
                                            </g>
                                            <g>
                                                
                                                    <line fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" x1="772.3" y1="457.6" x2="802.1" y2="457.6"/>
                                                
                                                    <rect x="772.3" y="457.3" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="29.7" height="0.5"/>
                                            </g>
                                        </g>
                                        <g>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M782.4,461.1h8.8
                                                c-0.7,1.8-2.4,3-4.4,3C784.8,464.1,783.1,462.9,782.4,461.1z"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M786.8,464.4c-2.1,0-3.9-1.3-4.7-3.2
                                                l-0.1-0.4h9.6l-0.1,0.4C790.7,463.1,788.9,464.4,786.8,464.4z M782.8,461.4c0.7,1.5,2.3,2.5,4,2.5c1.7,0,3.3-1,4-2.5H782.8z
                                                "/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <polygon fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" points="849.2,447.2 812.2,447.2 
                                                812.2,445.7 830.6,445.7 849.2,445.7 								"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M849.5,447.5l-37.6,0v-2.1h37.6V447.5
                                                z M812.4,447l36.5,0v-1h-36.5V447z"/>
                                        </g>
                                        <g>
                                            
                                                <line fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" x1="830.6" y1="447.1" x2="830.6" y2="445.7"/>
                                            
                                                <rect x="830.3" y="445.7" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="0.5" height="1.4"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <polygon fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" points="762.2,447.2 725.1,447.2 
                                                725.1,445.7 743.5,445.7 762.2,445.7 								"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M762.4,447.5h-37.6v-2.1h37.6V447.5z
                                                M725.4,447h36.5v-1h-36.5V447z"/>
                                        </g>
                                        <g>
                                            
                                                <line fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" x1="743.5" y1="447.1" x2="743.5" y2="445.7"/>
                                            
                                                <rect x="743.2" y="445.7" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="0.5" height="1.4"/>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g id="TV_stand_00000078029409811357693160000014172281727049775549_">
                            
                                <image overflow="visible" opacity="0.4" width="38" height="117" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAB1CAYAAAAiJ5P3AAAACXBIWXMAAAsSAAALEgHS3X78AAAC
            YElEQVR4nO2cwU7bQBRFj0NCUAqq2rJA0E3//7+qLtqogRA1BHAXflPGZhzpOk5LpXukpwSP/XyY
            GSur64p+qj1jY1ErN6+y41XPOWMI1YXvRbH0fVKo7rmHCAE8FyofZ9q5cBLHZllNR5LLpR6BXVaP
            mVxLrMqk5sACeBc1z+QOFUtSW+A+ahPjSa4uic1C6iPwKT4vQu6E4Xsu7aOnkLoDlsCPGE/L+We/
            TWnvrRlwDlwCn4HrkFvEWFrSITzTLNsmpL7GvR9CdhfiFVDvm7Fr4AtwRTNrpwxfzrSMDzSz9S2O
            b4CfwG3Wu7iUaY+dh9wVcAO8B85GEPsFrOLYKu5T3MN9T2V6AC5C6gPtfTZELO0vaGZo0ZFqkYul
            jT0JgRnN8s2jzkYQI3qdRv8TXmaq1bc7Y0lwQlsyr6FiZD3y/sV+JbFcsK+GIPU55PE/KhZTsZiK
            xVQspmIxFYupWEzFYioWU7GYisVULKZiMRWLqVhMxWIqFlOxmIrFVCymYjEVi6lYTMViKhZTsZiK
            xVQspmIxFYupWEzFYioWU7GYisVULKZiMRWLqVhMxWIqFlOxmIrFVCymYjGVNyu2L5RX99QQ5F4l
            sZQeTZ9PWcFh+cpUef+iYC5W05bZ8RL8TUnSMRKp2+ibwsSttHNJDNo57g1NEDhlbsfM8N5F/y2F
            8Hou1g2Xr2ki0ymdfMv4qedl3CeXexX5Txd2c9zEf3isnPgy/t6VxGqaWUgXroHvcfye4yfr15lY
            Ord3xogGK/7OuwhezVj3tRL/+u0NvWLwRt538V+8IUQZG4ven6XfBMbe7BHttCIAAAAASUVORK5C
            YII=" transform="matrix(1 0 0 1 677 147)">
                            </image>
                            <g>
                                <g>
                                    <g>
                                        
                                            <rect x="682.2" y="224.6" fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="23.8" height="30.9"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M706.3,224.4l0,31.4l-24.3,0v-31.4
                                            H706.3z M705.8,255.3l0-30.5h-23.4l0,30.5H705.8z"/>
                                    </g>
                                    <g>
                                        
                                            <rect x="682.2" y="152" fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="23.8" height="30.9"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M706.3,151.8v31.4H682v-31.4H706.3z
                                            M705.8,182.7v-30.5h-23.4v30.5H705.8z"/>
                                    </g>
                                    <g>
                                        
                                            <rect x="682.2" y="182.9" fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="23.8" height="41.6"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M706.3,182.7v42H682v-42H706.3z
                                            M705.8,224.3v-41.1h-23.4v41.1L705.8,224.3z"/>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M693.9,212.9v-18.5h0.2
                                                    c0.6,0,1,0.5,1,1v16.4c0,0.6-0.5,1-1,1H693.9z"/>
                                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M695.3,195.5v16.4
                                                    c0,0.7-0.6,1.2-1.2,1.2h-0.4v-18.9h0.4C694.7,194.3,695.3,194.8,695.3,195.5z M694.1,212.7c0.4,0,0.7-0.4,0.7-0.8l0-16.4
                                                    c0-0.4-0.3-0.8-0.7-0.8V212.7z"/>
                                            </g>
                                            <g>
                                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M692.2,216.1h0.2
                                                    c0.8,0,1.4-0.6,1.4-1.4l0-22.1c0-0.8-0.6-1.4-1.4-1.4h-0.2V216.1z"/>
                                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M694,192.7v22.1
                                                    c0,0.9-0.7,1.6-1.6,1.6H692v-25.2h0.4C693.3,191.1,694,191.8,694,192.7z M692.4,215.9c0.6,0,1.1-0.5,1.1-1.1v-22.1
                                                    c0-0.6-0.5-1.1-1.1-1.1V215.9z"/>
                                            </g>
                                            <g>
                                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M692.2,216.1h0.2
                                                    c0.8,0,1.4-0.6,1.4-1.4l0-22.1c0-0.8-0.6-1.4-1.4-1.4h-0.2V216.1z"/>
                                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M694,192.7v22.1
                                                    c0,0.9-0.7,1.6-1.6,1.6H692v-25.2h0.4C693.3,191.1,694,191.8,694,192.7z M692.4,215.9c0.6,0,1.1-0.5,1.1-1.1v-22.1
                                                    c0-0.6-0.5-1.1-1.1-1.1V215.9z"/>
                                            </g>
                                            <g>
                                                
                                                    <line fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" x1="692.2" y1="216.1" x2="692.2" y2="191.3"/>
                                                
                                                    <rect x="691.9" y="191.3" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="0.4" height="24.8"/>
                                            </g>
                                        </g>
                                        <g>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M695.1,207.7v-7.3
                                                c1.5,0.6,2.5,2,2.5,3.7C697.6,205.7,696.5,207.2,695.1,207.7z"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M697.8,204.1c0,1.7-1,3.3-2.7,3.9
                                                l-0.3,0.1v-8l0.3,0.1C696.8,200.8,697.8,202.3,697.8,204.1z M695.3,207.4c1.3-0.6,2.1-1.9,2.1-3.3c0-1.4-0.8-2.7-2.1-3.3
                                                V207.4z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <polygon fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" points="683.5,152 683.5,182.9 
                                                682.2,182.9 682.2,167.6 682.2,152 								"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M683.7,151.8v31.4H682v-31.4H683.7z
                                                M683.3,182.7v-30.5h-0.9v30.5H683.3z"/>
                                        </g>
                                        <g>
                                            
                                                <line fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" x1="683.4" y1="167.6" x2="682.2" y2="167.6"/>
                                            
                                                <rect x="682.2" y="167.3" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="1.2" height="0.4"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <polygon fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" points="683.5,224.6 683.5,255.5 
                                                682.2,255.5 682.2,240.1 682.2,224.6 								"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M683.7,224.4v31.4H682v-31.4H683.7z
                                                M683.3,255.3v-30.5h-0.9l0,30.5H683.3z"/>
                                        </g>
                                        <g>
                                            
                                                <line fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" x1="683.4" y1="240.1" x2="682.2" y2="240.1"/>
                                            
                                                <rect x="682.2" y="239.9" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="1.2" height="0.4"/>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g id="Primary_Bed">
                            
                                <image overflow="visible" opacity="0.4" width="120" height="126" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB+CAYAAADvPdXPAAAACXBIWXMAAAsSAAALEgHS3X78AAAH
            TklEQVR4nO2Z23IaRxBAz0oCJMuSJTvJg1N5yf9/VCqpuHyR5YsMAiFEHrpbNMMCiwwCOn2qpkDL
            sjvM2e7pGVUsplry+XjJ58mWqRNYuddqznlj9zoujiU7xFHxt0k9KFqd4Iei2fFkh/CCTe6hHm+5
            ZqJhInTo2j0w0s+fU/KyKWQVQj6cJtjLbQEnwCnwQt+3mRZ8B9wCPaCr7+F5JDeZQlahnGL2SfTS
            vvoIPtC/T4AL4DXwBjhHRNu594jQb8A18BkZ4B6T1L0pyimkcq9PkTx27aH4e5dpXAP5CD5AovcU
            Efu7tl+AM/0MJCX/AD4B7/R7lrbHSBRvQrIXe1S0p0j2YkeuedG7iO/30hroiOmoMMGvEbl/Am+B
            V0BHv3OHRO+Ffn+kx0Z6nSHrH6ByCukAx9o6rC65lHunzeoJk7xreLGNaqAyRbeQQXuFRO5b4A9E
            ZgcZPBPc0ov3gYFeuKPH1j1AFrnWv1Mkq7xEpo82It/qhEWSfUozuQP9HX3t/6ay0M9gD6X1uVEN
            VFdktZF5+AwRfQFcIgMLMgAtvdgtMigjRG5Xb77uwbG03Ebknmu/zvVvH8VN8dHbZ/JbLBvtkmAT
            ZpHbA74j9c+1O8cegEfmLZNayGAeI7JPmERwW8+36B3p+W/0xpbi1okJ7jBfsI/gJphg+x2WiUzw
            rlXVlp4HwA1whXixadFnnpkINvx8fFjTLFWeIIM70mucIYXXgMngrGNgLNVaf9pISn6p9zxFHsJy
            rd4EG7B7ZHDq5uBdkQuT6OwjU+Q7PX6LCLfsaQ7HMCsYd0LZ/NKkjQxyhUTPBSJ3EwWKv79FsS+w
            Woj86FW0F/xFj1kkf2TykE9RJ3gRNoj2vQNkoM+ZTs3rHpxScrlEqttObcI+rYO9YBC5tkdRriQe
            WVWwYQNtle1z7Ed7yWVG+T/sZJngCpFsu4zHSEb1S95HniLYz4tWlD3XU7/ubUr//V0Va4yRvo4Q
            oXV7AX6qmjsHN8VfaJ2b/k3vvQ/XXDd+mrLlrI9iE/zIzwj2N002T7nC8ctYW0nYSucx+FZZViS7
            gd+QOnatNoJT8H5RRrFtSNVFL5CC9xG/41i2mSo6Be8n8zajZuqhFLzfzBVrpODgpODgpODgpODg
            pODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODg
            pODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODg
            pODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODg
            pODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODg
            pODgpODgpOD9ZuxaLSl4PxkvaFOk4P3DRI5q2ozkozXdcJtUW77/c2ICHxChQ+BOX0d6fEryzwj2
            F1o4D2yIStvYvV8n235w6zC598AAuNXWR0RbFD/yFMF2gYea5j/fFCbyoGgVzUQv6994zuu2MblD
            JnK72nqI4HuKKH5qBNtTNHTNLm6d2QRe7iHQ0nakzYsuaSLOFysPxd/bxubdASL1Bviur109bmn6
            kVUF24+1FOGfoAHTT9AmqJjIbQMn2l4AHUR2neQm4sr5zdrMvLYlTHAf+AZ8Bq71vRe8dA6eV3r7
            ARjqRa/djX7Mu8maMGkHiMgXwDlwAbwCzoBjpiO57PcicX5+88XLTNrbEj6CvwHvgA/I2HdpOAf7
            wSibH4A+kh4+Av/qzb4gkexT9bqpkOjtAC+BS+BXbZd6rK3n2BKwqThfmfa1DZgduG1Jtj4OkGD6
            hIz7lf7t+1kbwf6HloMxRAat0mM94CvyBP0N/KU3tBs9l+A3wG/Iw/UGiWiLYh/By8R5wXd6Tlmd
            buo3NcEXtkOkbz5N+3GvjWC/eLYf2NUvdpFBsy/6OeADEsH/INF8ox3Y1DxsglvAqf44a5csFrxI
            XPn7B0weBr/G3CZlH2+RQOvq+9rM6SPYp98bJCqukEgZI8VMpRe7At5r+4BE75XebMjm5iubh4+0
            j1ZJXiNyT5HoLlP0MnF1UVyXyreNnz7LFczcnayyeOohA/YeKWRAIvlE398i0fsPEr0fkXT9Axm4
            Tc7BMCm0Btp6SEY5ZraShubidr2KNubVSbV99Cm6rI47+lkPiVIv+CvyANgkf8N0VGxyMComEmy5
            1kPEHjKpFVatov25u7gO9tTtINb2sUzRNoF/1WMDfX+GVKcgEWAp/Fo/7zEtd5MDYluT9t4KqHJH
            q/xOU3G7upNVx9K+VcX7chPhlOlNBJhslfkJvixYnovKvVbFsZJVxe2y2MaUg2GSbTPBbwVa0VK3
            TenngW3R9J8NIcQ1pW5Q/I6Rb55GE3yyfeY99XWpr2TpBJ9snyZpbdmcluww/wFEWB+6dv8yQAAA
            AABJRU5ErkJggg==" transform="matrix(1 0 0 1 514 103)">
                            </image>
                            <g>
                                <g>
                                    
                                        <line fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round" x1="588.3" y1="120.7" x2="588.3" y2="120.7"/>
                                    
                                        <line fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round" x1="604.4" y1="120.7" x2="604.4" y2="120.7"/>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M528.5,111.5v104.8c0,2.2-1.8,4-4,4
                                            h-1.4c-2.2,0-4-1.8-4-4V111.5c0-2.2,1.8-4,4-4h1.4C526.7,107.5,528.5,109.3,528.5,111.5z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M528.7,111.5v104.8
                                            c0,2.3-1.9,4.2-4.2,4.2h-1.4c-2.3,0-4.2-1.9-4.2-4.2V111.5c0-2.3,1.9-4.2,4.2-4.2h1.4C526.8,107.3,528.7,109.2,528.7,111.5z
                                            M519.4,216.3c0,2,1.7,3.7,3.7,3.7h1.4c2,0,3.7-1.7,3.7-3.7V111.5c0-2-1.7-3.7-3.7-3.7h-1.4c-2,0-3.7,1.7-3.7,3.7V216.3z"/>
                                    </g>
                                    <g>
                                        
                                            <rect x="528.7" y="113.3" fill="#FFFFFF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="93.8" height="100.7"/>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M622.7,113.1v101.2h-94.3V113.1H622.7z
                                            M622.2,213.8V113.6h-93.3v100.2H622.2z"/>
                                    </g>
                                    <g>
                                        <path fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M553,169.8c0.2,0.3,0.2,2.2,0.4,5.8
                                            c0.2,3.3,0.7,8,0.6,12.3c-0.1,6.1-0.6,10.8-0.9,14.5c-0.1,2.2,0.2,4.7-0.2,5c-0.3,0.2-2.4-0.1-4.6,0
                                            c-5.5,0.3-14.2,0.8-15.3,0c-0.5-0.4-0.2-2.9-0.4-5.3c-0.3-4-0.7-9-0.8-12.5c-0.1-3.4,0.5-9.5,0.8-14.2c0.2-2.5,0-5.4,0.3-5.6
                                            c0.2-0.2,2,0.1,4-0.1c1.4-0.1,4.1-0.6,5.8-0.6C548.4,169.2,552,168.7,553,169.8z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M554.3,187.3c0,0.2,0,0.4,0,0.7
                                            c-0.1,4.4-0.4,8.1-0.6,11.2c-0.1,1.2-0.2,2.3-0.3,3.4c-0.1,0.9,0,1.9,0,2.7c0,1.5,0,2.2-0.3,2.5c-0.2,0.2-0.6,0.1-1.7,0.1
                                            c-0.9,0-1.9-0.1-3.1,0l-0.1,0c-7.5,0.4-14.3,0.7-15.3,0c-0.4-0.3-0.4-1.2-0.4-2.9c0-0.8,0-1.7-0.1-2.6
                                            c-0.3-3.7-0.7-8.9-0.8-12.5c-0.1-2.8,0.3-7.5,0.6-11.5c0.1-0.9,0.2-1.8,0.2-2.7c0.1-1,0.1-2.1,0.1-3.1c0-1.9,0-2.6,0.4-2.8
                                            c0.2-0.1,0.5-0.1,1.3-0.1c0.7,0,1.8,0.1,2.8,0c0.5,0,1.1-0.1,1.8-0.2c1.4-0.2,2.9-0.4,4.1-0.4c1.6,0,3,0,4.2,0
                                            c3.3-0.1,5.3-0.1,6.1,0.8l0,0c0.2,0.2,0.2,0.9,0.3,2.8c0,0.8,0.1,1.9,0.2,3.1c0.1,0.8,0.1,1.7,0.2,2.7
                                            C554.1,181.1,554.3,184.2,554.3,187.3z M552.9,203.8c0-0.4,0-0.9,0-1.4c0.1-1,0.2-2.2,0.3-3.4c0.2-3,0.6-6.8,0.6-11.1
                                            c0-3.2-0.2-6.6-0.4-9.6c-0.1-1-0.1-1.9-0.2-2.7c-0.1-1.2-0.1-2.3-0.2-3.1c-0.1-1.2-0.1-2.3-0.2-2.5c-0.6-0.7-2.7-0.7-5.7-0.6
                                            c-1.2,0-2.7,0.1-4.2,0c-1.1,0-2.7,0.2-4,0.4c-0.7,0.1-1.3,0.2-1.8,0.2c-1.1,0.1-2.1,0.1-2.9,0c-0.4,0-0.9,0-1,0
                                            c-0.1,0.2-0.1,1.3-0.1,2.3c0,1,0,2.1-0.1,3.1c-0.1,0.9-0.1,1.7-0.2,2.7c-0.3,4.1-0.7,8.7-0.6,11.5c0.1,3.6,0.5,8.7,0.8,12.4
                                            c0.1,0.9,0.1,1.8,0.1,2.7c0,1.1,0,2.3,0.2,2.5c1,0.7,10.1,0.2,15-0.1l0.1,0c1.1-0.1,2.3,0,3.1,0c0.6,0,1.3,0.1,1.4,0
                                            c0.1-0.2,0.1-1.2,0.1-2.1C552.9,204.7,552.9,204.3,552.9,203.8z"/>
                                    </g>
                                    <g>
                                        <path fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M553,123.9c0.2,0.3,0.2,2.2,0.4,5.8
                                            c0.2,3.3,0.7,8,0.6,12.3c-0.1,6.1-0.6,10.8-0.9,14.5c-0.1,2.2,0.2,4.7-0.2,5c-0.3,0.2-2.4-0.1-4.6,0
                                            c-5.5,0.3-14.2,0.8-15.3,0c-0.5-0.4-0.2-2.9-0.4-5.3c-0.3-4-0.7-9-0.8-12.5c-0.1-3.4,0.5-9.5,0.8-14.2c0.2-2.5,0-5.4,0.3-5.6
                                            c0.2-0.2,2,0.1,4-0.1c1.4-0.1,4.1-0.6,5.8-0.6C548.4,123.2,552,122.7,553,123.9z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M554.3,141.3c0,0.2,0,0.4,0,0.7
                                            c-0.1,4.4-0.4,8.1-0.6,11.2c-0.1,1.2-0.2,2.3-0.3,3.4c-0.1,0.9,0,1.9,0,2.7c0,1.5,0,2.2-0.3,2.5c-0.2,0.2-0.6,0.1-1.7,0.1
                                            c-0.9,0-1.9-0.1-3.1,0l-0.1,0c-7.5,0.4-14.3,0.7-15.3,0c-0.4-0.3-0.4-1.2-0.4-2.9c0-0.8,0-1.7-0.1-2.6
                                            c-0.3-3.7-0.7-8.9-0.8-12.5c-0.1-2.8,0.3-7.5,0.6-11.5c0.1-0.9,0.2-1.8,0.2-2.7c0.1-1,0.1-2.1,0.1-3.1c0-1.9,0-2.6,0.4-2.8
                                            c0.2-0.1,0.5-0.1,1.3-0.1c0.7,0,1.8,0.1,2.8,0c0.5,0,1.1-0.1,1.8-0.2c1.4-0.2,2.9-0.4,4.1-0.4c1.6,0,3,0,4.2,0
                                            c3.3-0.1,5.3-0.1,6.1,0.8l0,0c0.2,0.2,0.2,0.9,0.3,2.8c0,0.8,0.1,1.9,0.2,3.1c0.1,0.8,0.1,1.7,0.2,2.7
                                            C554.1,135.1,554.3,138.3,554.3,141.3z M552.9,157.8c0-0.4,0-0.9,0-1.4c0.1-1,0.2-2.2,0.3-3.4c0.2-3,0.6-6.8,0.6-11.1
                                            c0-3.2-0.2-6.6-0.4-9.6c-0.1-1-0.1-1.9-0.2-2.7c-0.1-1.2-0.1-2.3-0.2-3.1c-0.1-1.2-0.1-2.3-0.2-2.5c-0.6-0.7-2.7-0.7-5.7-0.6
                                            c-1.2,0-2.7,0.1-4.2,0c-1.1,0-2.7,0.2-4,0.4c-0.7,0.1-1.3,0.2-1.8,0.2c-1.1,0.1-2.1,0.1-2.9,0c-0.4,0-0.9,0-1,0
                                            c-0.1,0.2-0.1,1.3-0.1,2.3c0,1,0,2.1-0.1,3.1c-0.1,0.9-0.1,1.7-0.2,2.7c-0.3,4.1-0.7,8.7-0.6,11.5c0.1,3.6,0.5,8.7,0.8,12.4
                                            c0.1,0.9,0.1,1.8,0.1,2.7c0,1.1,0,2.3,0.2,2.5c1,0.7,10.1,0.2,15-0.1l0.1,0c1.1-0.1,2.3,0,3.1,0c0.6,0,1.3,0.1,1.4,0
                                            c0.1-0.2,0.1-1.2,0.1-2.1C552.9,158.8,552.9,158.3,552.9,157.8z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M582.3,215.5
                                            c2.8-0.2,40.1,0.9,41.8-0.9c1.7-1.9,2.1-101.8-0.5-102.3c-2.6-0.5-47.2-0.9-48.7,0.7c-0.8,0.9-3.4,31.4-1.2,58.8
                                            C575.6,194.8,582.3,215.5,582.3,215.5z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M625.7,163c0,0.8,0,1.6,0,2.4
                                            c0,19.2-0.4,48.2-1.4,49.3c-1.2,1.3-16.4,1.3-33.4,1.1c-4.4-0.1-7.9-0.1-8.6,0l-0.2,0l-0.1-0.2c-0.1-0.2-6.7-21-8.5-43.7
                                            c-2.2-27,0.3-57.9,1.2-59c0.7-0.8,8.8-1.2,24.1-1.2c11.1,0,23.4,0.2,24.8,0.4c0.2,0,0.4,0.3,0.4,0.5
                                            C625.3,116,625.7,141.3,625.7,163z M582.4,215.2c1.1,0,4.2,0,8.5,0c10.3,0.1,31.8,0.4,33-0.9c0.7-1.1,1.3-24,1.3-51
                                            c0-29.5-0.7-49.9-1.7-50.9c-2.6-0.5-46.9-0.8-48.4,0.6c-0.7,1.2-3.3,31.8-1.1,58.6C575.7,193.3,581.8,213.1,582.4,215.2z"/>
                                    </g>
                                    <g>
                                        <path fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M549.5,185.8c-0.4,0.6-1.2,1-1.8,0.5
                                            c-0.5-0.5-0.4-1.3-0.7-1.7c-4.7-7.2-5.5-11.7-5.5-13.4c0-1.6-0.5-2.6-0.7-3.2c-0.4-1,0.6-1.1,1.8-0.8c1.2,0.2,2.9-1,4.8-2.4
                                            c1.9-1.4,5.1-1.1,6.2-2.1c1.2-1,1.5-1.4,2.1-1.2c0.6,0.3,0.7,0.8,0.8,1.8c0.1,1,4.5,7.7,4.5,10.6c0,3,0.5,4.7,1.3,5.7
                                            c0.8,1,0.1,1.9-0.9,1.5c-1-0.4-2.8,1.5-4.7,2.3C555.6,183.9,550.3,184.5,549.5,185.8z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M562.8,180.5c0,0.2-0.1,0.4-0.2,0.6
                                            c-0.3,0.4-0.8,0.5-1.4,0.3c-0.5-0.2-1.4,0.4-2.4,1.1c-0.7,0.4-1.4,0.9-2.1,1.2c-0.4,0.2-1.1,0.3-2.1,0.5
                                            c-1.8,0.4-4.5,1-5,1.8l0,0c-0.3,0.4-0.7,0.8-1.2,0.8c-0.4,0.1-0.7,0-1-0.3c-0.4-0.3-0.5-0.8-0.6-1.2
                                            c-0.1-0.2-0.1-0.5-0.2-0.6c-5.1-7.7-5.5-12.3-5.5-13.5c0-1.3-0.4-2.2-0.6-2.8c-0.1-0.1-0.1-0.2-0.1-0.4
                                            c-0.1-0.4-0.1-0.7,0.1-1c0.3-0.4,1-0.4,2-0.2c1,0.2,2.6-0.9,4.3-2.1l0.3-0.2c1.1-0.8,2.5-1,3.7-1.3c1-0.2,2-0.4,2.5-0.8
                                            c0.2-0.2,0.4-0.3,0.6-0.5c0.7-0.7,1.1-1,1.8-0.7c0.7,0.3,0.8,1,0.9,2c0,0.3,0.6,1.4,1.2,2.5c1.4,2.6,3.3,6.2,3.3,8.2
                                            c0,2.6,0.4,4.5,1.2,5.5C562.7,179.8,562.8,180.2,562.8,180.5z M549.3,185.7c0.6-1,3.2-1.6,5.3-2c0.9-0.2,1.6-0.4,2-0.5
                                            c0.7-0.3,1.4-0.7,2-1.2c1.1-0.7,2.1-1.4,2.8-1.1c0.4,0.1,0.7,0.1,0.8-0.1c0.2-0.2,0.1-0.6-0.2-1c-0.9-1.2-1.3-3.1-1.3-5.8
                                            c0-1.9-1.9-5.5-3.2-7.9c-0.8-1.5-1.2-2.3-1.3-2.7c-0.1-1-0.2-1.4-0.6-1.6c-0.3-0.1-0.5,0-1.2,0.6c-0.2,0.1-0.3,0.3-0.6,0.5
                                            c-0.6,0.5-1.6,0.7-2.7,0.9c-1.2,0.2-2.5,0.5-3.5,1.2l-0.3,0.2c-1.9,1.3-3.5,2.4-4.7,2.2c-1.2-0.2-1.5,0-1.5,0
                                            c-0.1,0.1-0.1,0.3,0,0.5c0,0.1,0.1,0.2,0.1,0.3c0.3,0.6,0.6,1.6,0.6,3c0,1.2,0.4,5.6,5.4,13.2c0.1,0.2,0.2,0.5,0.3,0.8
                                            c0.1,0.3,0.2,0.7,0.4,0.9c0.2,0.1,0.4,0.2,0.6,0.2C548.8,186.2,549.1,186,549.3,185.7L549.3,185.7z"/>
                                    </g>
                                    <g>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M577.2,111c0.1,0,0.3,0.1,0.4,0.1
                                            c0.5,0.2,0.8,0.3,1,0.6c0.5,0.7,0.2,4.4-0.5,10.1c0,0.1,0,0.3,0,0.4c-0.3,2.9-0.7,6.3-1,10.1c0,0.1,0,0.3,0,0.4
                                            c-0.3,2.8-0.5,5.9-0.7,9.1c0,0.1,0,0.3,0,0.4c-0.2,2.9-0.3,6-0.4,9.1c0,0.1,0,0.3,0,0.4c0,2.8,0,5.7,0,8.6c0,0.1,0,0.3,0,0.4
                                            c0.1,2.2,0.2,4.5,0.3,6.8c0.1,0.9,0.1,1.8,0.2,2.7c0,0.1,0,0.3,0,0.4c0.2,3,0.5,5.9,0.9,8.7c0,0.1,0,0.3,0,0.4
                                            c0.4,3.3,0.8,6.4,1.3,9.4c0,0.1,0,0.3,0.1,0.4c0.5,3.5,1.1,6.8,1.6,9.7c0,0.1,0,0.3,0.1,0.4c0.6,3.3,1.1,6.2,1.4,8.6
                                            c0,0.1,0,0.3,0.1,0.4c0.7,4.9,0.8,7.8-0.4,7.9c-0.6,0.1-1.6,0.1-2.9,0.2c-0.1,0-0.3,0-0.4,0c-5.4,0.3-14.5,0.4-16,0.1
                                            c-0.8-0.2-1.5-2.7-2.1-6.9c0-0.1,0-0.3-0.1-0.4c-0.3-2.3-0.6-5.1-0.9-8.3c0-0.1,0-0.3,0-0.4c-0.2-2.8-0.5-6-0.7-9.3
                                            c0-0.1,0-0.3,0-0.4c-0.2-2.7-0.3-5.6-0.4-8.5c0-0.1,0-0.3,0-0.4c-0.2-3.3-0.3-6.7-0.4-10.1c0-0.1,0-0.3,0-0.4
                                            c-0.1-3.3-0.2-6.6-0.3-9.9c0-0.1,0-0.3,0-0.4c-0.1-2.8-0.1-5.6-0.1-8.4v-0.4c0-3.4-0.1-6.8,0-10v-0.4c0-3.8,0-7.4,0.1-10.8
                                            c0-0.1,0-0.3,0-0.4c0.1-3.6,0.2-6.9,0.4-9.7c0-0.1,0-0.3,0-0.4c0.3-5.6,0.8-9.1,1.5-9.3c1.9-0.6,6.2-1,10.3-1.1
                                            c0.1,0,0.3,0,0.4,0C572.7,110.5,575.5,110.6,577.2,111z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M582.6,214c0,1.2-0.2,1.9-0.5,2.3
                                            c-0.2,0.2-0.4,0.4-0.7,0.4c-0.6,0.1-1.5,0.1-2.9,0.2c-0.1,0-0.3,0-0.4,0c-5.2,0.3-14.5,0.5-16.1,0.1c-0.6-0.1-1.4-1-2.3-7.1
                                            l0-0.2c0-0.1,0-0.1,0-0.2c-0.3-2.2-0.6-5-0.9-8.3c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2c-0.2-2.7-0.5-5.7-0.7-9.3l0-0.4
                                            c-0.2-2.7-0.3-5.5-0.4-8.5c0-0.1,0-0.3,0-0.4c-0.2-3.2-0.3-6.6-0.4-10.1c0-0.1,0-0.1,0-0.2l0-0.2c-0.1-3.9-0.2-7-0.3-9.9
                                            l0-0.2c0-0.1,0-0.1,0-0.2c-0.1-2.8-0.1-5.6-0.1-8.4v-0.4c0-3.4-0.1-6.8,0-10v-0.4c0-3.8,0-7.5,0.1-10.8c0,0,0,0,0,0
                                            c0-0.1,0-0.1,0-0.2l0-0.2c0.1-3.6,0.2-6.9,0.4-9.7l0-0.4c0.6-9.1,1.4-9.4,1.7-9.5c1.9-0.6,6.1-1,10.4-1.2l0.2,0
                                            c0.1,0,0.2,0,0.2,0c3.3-0.1,5.9,0.1,7.4,0.5l0.2,0c0.1,0,0.2,0,0.3,0.1c0.6,0.2,0.9,0.4,1.1,0.6c0.6,0.7,0.3,3.7-0.4,10.2
                                            l0,0.1c0,0.1,0,0.2,0,0.3l-0.1,0.6c-0.3,2.8-0.6,6-1,9.6l0,0.4c-0.3,3-0.5,6.1-0.7,9.1l0,0.4c-0.2,3.2-0.3,6.2-0.4,9.1
                                            c0,0,0,0,0,0c0,0.1,0,0.1,0,0.2l0,0.2c-0.1,3.1,0,5.9,0,8.6c0,0.1,0,0.3,0,0.4c0.1,2.3,0.2,4.5,0.3,6.8
                                            c0,0.6,0.1,1.2,0.1,1.8l0.1,1.2c0.2,3,0.5,5.9,0.9,8.7c0,0.2,0,0.3,0,0.4c0.3,2.9,0.7,5.9,1.3,9.4c0,0.1,0,0.1,0,0.2l0,0.2
                                            c0.5,3.6,1.1,6.9,1.6,9.7l0.5,2.7c0.4,2.4,0.8,4.5,1,6.3c0,0.2,0.1,0.3,0.1,0.4C582.5,211,582.6,212.7,582.6,214z
                                            M557.2,144.2c0,2.8,0,5.6,0.1,8.4v0.4c0,2.7,0.1,5.5,0.1,8.4c0,0.1,0,0.1,0,0.2l0,0.2c0.1,2.9,0.1,6.1,0.3,9.9l0,0.4
                                            c0.1,3.5,0.2,6.9,0.4,10.1c0,0.1,0,0.3,0,0.4c0.1,3,0.3,5.8,0.4,8.5l0,0.4c0.2,3.6,0.4,6.6,0.7,9.3c0,0.1,0,0.1,0,0.2
                                            c0,0.1,0,0.1,0,0.2c0.3,3.2,0.6,6,0.9,8.3c0,0.1,0,0.1,0,0.2l0,0.2c0.9,5.8,1.6,6.6,1.9,6.6c1.5,0.3,10.7,0.1,16-0.1
                                            c0.1,0,0.3,0,0.4,0c1.4-0.1,2.3-0.1,2.9-0.2c0.2,0,0.3-0.1,0.4-0.2c0.7-0.9,0.3-4.2-0.2-7.4c0-0.1,0-0.3-0.1-0.4
                                            c-0.3-1.9-0.6-3.9-1-6.3l-0.5-2.7c-0.5-2.8-1-6.1-1.6-9.7c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2c-0.5-3.5-0.9-6.5-1.3-9.4
                                            c0-0.1,0-0.3,0-0.4c-0.3-2.8-0.6-5.7-0.9-8.7l-0.1-1.2c0-0.6-0.1-1.2-0.1-1.8c-0.2-2.3-0.3-4.5-0.3-6.8c0-0.1,0-0.3,0-0.4
                                            c-0.1-2.7-0.1-5.5,0-8.6v0c0-0.1,0-0.1,0-0.2l0-0.2c0.1-2.9,0.2-5.9,0.4-9.1l0-0.4c0.2-3,0.4-6.1,0.7-9.1l0-0.4
                                            c0.3-3.6,0.7-6.8,1-9.6l0.1-0.6c0-0.1,0-0.2,0-0.3l0-0.1c0.5-4.5,1-9.2,0.5-9.9c-0.1-0.2-0.4-0.3-0.9-0.5
                                            c-0.1,0-0.1,0-0.2-0.1l-0.2,0c-1.5-0.4-4.1-0.5-7.3-0.5l-0.2,0c-0.1,0-0.2,0-0.2,0c-4.1,0.1-8.4,0.6-10.2,1.1
                                            c-0.1,0-0.8,0.7-1.3,9l0,0.4c-0.2,2.8-0.3,6.1-0.4,9.7l0,0.4c-0.1,3.3-0.1,6.9-0.1,10.8v0.4
                                            C557.2,143.1,557.2,143.7,557.2,144.2z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M581.8,208.1c0,0.1,0,0.3,0.1,0.4
                                            c-0.9,0.2-1.9,0.4-2.8,0.6c-0.1,0-0.3,0.1-0.4,0.1h0c-3.2,0.6-6.4,1.1-9.6,1.3c-0.1,0-0.3,0-0.4,0c-2.9,0.1-5.7,0-8.5-0.5
                                            c0-0.1,0-0.3-0.1-0.4c2.8,0.5,5.7,0.7,8.5,0.5c0.1,0,0.3,0,0.4,0c3.3-0.2,6.5-0.7,9.7-1.3c0.1,0,0.3,0,0.4-0.1
                                            C579.9,208.5,580.9,208.3,581.8,208.1z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M580.3,199.2c0,0.1,0,0.3,0.1,0.4
                                            c-0.9,0-1.7,0.1-2.6,0.2c-0.1,0-0.3,0-0.4,0c-3.3,0.2-6.7,0.5-10,0.7c-0.1,0-0.3,0-0.4,0c-2.6,0.2-5.2,0.5-7.9,0.7
                                            c0-0.1,0-0.3,0-0.4c2.6-0.3,5.2-0.5,7.8-0.7c0.1,0,0.3,0,0.4,0c3.3-0.3,6.6-0.5,10-0.7c0.1,0,0.3,0,0.4,0
                                            C578.5,199.3,579.4,199.2,580.3,199.2z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M578.6,189.1c0,0.1,0,0.3,0.1,0.4
                                            c-1.1,0-2.3,0.1-3.4,0.2l-0.4,0c-2.8,0.2-5.6,0.4-8.5,0.8c-0.1,0-0.3,0-0.4,0c-2.6,0.3-5.1,0.7-7.7,1.1c0-0.1,0-0.3,0-0.4
                                            c2.5-0.4,5.1-0.8,7.7-1.1c0.1,0,0.3,0,0.4,0c2.8-0.3,5.6-0.6,8.4-0.8c0.1,0,0.3,0,0.4,0C576.3,189.2,577.5,189.1,578.6,189.1
                                            z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M577.3,179.3c0,0.1,0,0.3,0,0.4
                                            c-1.3,0.1-2.6,0.2-3.9,0.3c-0.1,0-0.2,0-0.4,0c-2.4,0.2-4.7,0.5-7,0.9c-0.1,0-0.3,0-0.4,0.1c-2.6,0.4-5.2,1-7.8,1.6
                                            c0-0.1,0-0.3,0-0.4c2.6-0.6,5.2-1.2,7.8-1.7c0.1,0,0.3,0,0.4-0.1c2.3-0.4,4.6-0.7,7-0.9c0.1,0,0.2,0,0.4,0
                                            C574.7,179.5,576,179.4,577.3,179.3z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M574.1,170.1c0.8,0,1.5,0,2.3,0
                                            c0,0.1,0,0.3,0,0.4c-0.9,0-1.8,0-2.8,0c-0.4,0-0.8,0-1.2,0c-0.1,0-0.3,0-0.4,0c-1.3,0-2.7,0.1-4,0.2c-0.7,0-1.4,0.1-2.1,0.2
                                            c-0.1,0-0.3,0-0.4,0c-2.7,0.3-5.4,0.7-8.1,1.2c0-0.1,0-0.3,0-0.4c2.7-0.5,5.4-0.9,8.1-1.2c0.1,0,0.3,0,0.4,0
                                            c0.7-0.1,1.5-0.1,2.2-0.2c1.3-0.1,2.6-0.1,3.9-0.2c0.1,0,0.3,0,0.4,0C573,170.2,573.6,170.1,574.1,170.1z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M575.9,160.3c0,0.1,0,0.3,0,0.4
                                            c-1.2,0-2.4,0.1-3.6,0.1c-0.1,0-0.3,0-0.4,0c-1.9,0.1-3.9,0.2-5.8,0.3c-0.1,0-0.3,0-0.4,0c-2.8,0.2-5.7,0.4-8.5,0.6
                                            c0-0.1,0-0.3,0-0.4c2.8-0.2,5.7-0.5,8.5-0.6c0.1,0,0.3,0,0.4,0c1.9-0.1,3.9-0.2,5.8-0.3c0.1,0,0.3,0,0.4,0
                                            C573.5,160.4,574.7,160.3,575.9,160.3z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M575.9,151.3c0,0.1,0,0.3,0,0.4
                                            c-0.3,0-0.7,0-1,0.1c-0.8,0-1.5,0.1-2.3,0.2v0c-0.1,0-0.3,0-0.4,0c-1.2,0.1-2.5,0.2-3.7,0.3c-0.8,0-1.5,0.1-2.3,0.2
                                            c-0.1,0-0.3,0-0.4,0c-2.9,0.2-5.8,0.4-8.8,0.6v-0.4c2.9-0.2,5.8-0.4,8.8-0.6c0.1,0,0.3,0,0.4,0c0.7-0.1,1.5-0.1,2.3-0.2
                                            c1.3-0.1,2.5-0.2,3.8-0.3c0.1,0,0.3,0,0.4,0c0.8,0,1.5-0.1,2.3-0.2C575.2,151.4,575.6,151.3,575.9,151.3z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M565.8,141.5c0.1,0,0.3,0,0.4,0
                                            c0.5,0,1.1,0,1.6,0c1.8,0,3.5,0.1,5.3,0.1c0.1,0,0.3,0,0.4,0c0.9,0,1.9,0.1,2.8,0.1c0,0.1,0,0.3,0,0.4
                                            c-0.9,0-1.9-0.1-2.8-0.1c-0.1,0-0.3,0-0.4,0c-1.7,0-3.4-0.1-5-0.1c-0.6,0-1.2,0-1.8,0h-0.4c-2.9-0.1-5.9,0-8.8,0.7v-0.4
                                            C559.9,141.5,562.8,141.5,565.8,141.5z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M565.7,131.1c0.1,0,0.3,0,0.4,0
                                            c2.7,0.1,5.4,0.4,8.1,0.8c0.1,0,0.3,0,0.4,0.1c0.8,0.1,1.6,0.2,2.4,0.4c0,0.1,0,0.3,0,0.4c-0.8-0.1-1.6-0.3-2.4-0.4
                                            c-0.1,0-0.3,0-0.4-0.1c-2.7-0.4-5.4-0.6-8.1-0.8c-0.1,0-0.3,0-0.4,0c-2.8-0.1-5.7-0.2-8.5-0.1c0-0.1,0-0.3,0-0.4
                                            C560,130.9,562.8,131,565.7,131.1z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M562,120.9c1.5,0,2.9,0,4.4,0
                                            c0.1,0,0.3,0,0.4,0c1.9,0,3.7,0.1,5.6,0.2c1.1,0.1,2.2,0.1,3.3,0.2c0.1,0,0.3,0,0.4,0c0.7,0.1,1.4,0.2,2,0.3
                                            c0,0.1,0,0.3,0,0.4c-0.7-0.1-1.4-0.2-2-0.3c-0.1,0-0.3,0-0.4,0c-0.1,0-0.2,0-0.3,0c-2.1-0.2-4.2-0.3-6.3-0.4
                                            c-0.8,0-1.5-0.1-2.3-0.1c-0.1,0-0.3,0-0.4,0c-2.9-0.1-5.9-0.1-8.8,0c0-0.1,0-0.3,0-0.4C559,120.9,560.5,120.9,562,120.9z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M569.8,110.5c-1.5,3.3-2.4,6.8-3,10.4
                                            c0,0.1,0,0.3-0.1,0.4c-0.4,2.5-0.5,5-0.6,7.6c0,0.7,0,1.5,0,2.2c0,0.1,0,0.3,0,0.4c0,3.3,0,6.7,0.1,10c0,0.1,0,0.3,0,0.4
                                            c0,2.6,0.1,5.2,0.1,7.9c0,0.7,0,1.5,0,2.2c0,0.1,0,0.3,0,0.4c0,2.8-0.1,5.6-0.1,8.4c0,0.1,0,0.3,0,0.4c0,3.1-0.1,6.2-0.1,9.3
                                            c0,0.1,0,0.3,0,0.4c0,0.4,0,0.8,0,1.2c0,2.8,0,5.6,0.1,8.4c0,0.1,0,0.3,0,0.4c0.1,3,0.2,6,0.3,9.1c0,0.1,0,0.3,0,0.4
                                            c0.1,1.3,0.2,2.7,0.3,4c0.2,1.9,0.3,3.8,0.6,5.7c0,0.1,0,0.3,0.1,0.4c0.4,3.2,0.9,6.4,1.5,9.6c0,0.1,0,0.3,0.1,0.4
                                            c0.4,2,0.9,4,1.4,6.1c0.1,0.3-0.3,0.4-0.4,0.1c-0.2-0.9-0.5-1.8-0.7-2.7c-0.3-1.1-0.5-2.3-0.8-3.4c0-0.1-0.1-0.3-0.1-0.4
                                            c-0.6-3.2-1.1-6.3-1.5-9.6c0-0.1,0-0.3,0-0.4c-0.3-2.8-0.6-5.5-0.8-8.3c0-0.5-0.1-0.9-0.1-1.4c0-0.1,0-0.3,0-0.4
                                            c-0.2-3-0.3-6-0.3-9c0-0.1,0-0.3,0-0.4c-0.1-3.2-0.1-6.4,0-9.6c0-0.1,0-0.3,0-0.4c0-0.4,0-0.9,0-1.3c0-2.7,0.1-5.4,0.1-8.1
                                            c0-0.1,0-0.3,0-0.4c0-2.8,0.1-5.6,0.1-8.4c0-0.1,0-0.3,0-0.4c0-1.8,0-3.6,0-5.3c0-1.6,0-3.2-0.1-4.7c0-0.1,0-0.3,0-0.4
                                            c-0.1-3.3-0.1-6.7-0.1-10c0-0.1,0-0.3,0-0.4c0-1.7,0.1-3.4,0.2-5.1c0.1-1.5,0.3-3.1,0.5-4.6c0-0.1,0-0.3,0.1-0.4
                                            c0.5-3.6,1.4-7.1,2.9-10.4C569.5,110.5,569.6,110.5,569.8,110.5z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M577.2,111c0.1,0,0.3,0.1,0.4,0.1
                                            c-0.3,1.9-0.5,3.7-0.8,5.6c-0.2,1.6-0.5,3.2-0.7,4.8c0,0.1,0,0.3-0.1,0.4c-0.3,2-0.6,4-0.8,6c-0.2,1.4-0.4,2.7-0.5,4.1
                                            c0,0.1,0,0.3,0,0.4c-0.4,3.1-0.8,6.2-1.1,9.4c0,0.1,0,0.3,0,0.4c-0.3,2.8-0.5,5.7-0.7,8.5c0,0.3,0,0.6-0.1,0.9
                                            c0,0.1,0,0.3,0,0.4v0c-0.2,2.8-0.3,5.7-0.3,8.5c0,0.1,0,0.3,0,0.4c0,3.1,0,6.2,0.2,9.3c0,0.1,0,0.3,0,0.4
                                            c0,0.8,0.1,1.6,0.2,2.4c0.2,2.2,0.4,4.4,0.7,6.6c0,0.1,0,0.3,0.1,0.4c0.2,1.4,0.4,2.8,0.7,4.2c0.3,1.7,0.7,3.4,1.1,5.1
                                            c0,0.1,0.1,0.3,0.1,0.4c0.4,1.8,0.9,3.6,1.3,5.5c0.4,1.4,0.7,2.8,1,4.2c0,0.1,0.1,0.3,0.1,0.4c0.4,2,0.8,4,1,6.1
                                            c0.1,1,0.2,1.9,0.2,2.9c0,0.1,0,0.3,0,0.4c0.1,2.5-0.1,5-0.5,7.5c-0.1,0-0.3,0-0.4,0c0.1-0.9,0.3-1.8,0.3-2.7
                                            c0.1-1.6,0.2-3.2,0.1-4.8c0-0.1,0-0.3,0-0.4c-0.1-2-0.3-3.9-0.6-5.8c-0.2-1.1-0.4-2.1-0.6-3.2c0-0.1-0.1-0.3-0.1-0.4
                                            c-0.5-2.3-1.1-4.7-1.7-7c-0.2-0.9-0.4-1.8-0.6-2.7c0-0.1-0.1-0.3-0.1-0.4c-0.7-3.1-1.3-6.1-1.7-9.2c0-0.1,0-0.3-0.1-0.4
                                            c-0.4-2.9-0.7-5.7-0.9-8.6c0-0.1,0-0.3,0-0.4c0-0.1,0-0.3,0-0.4c-0.2-3.1-0.2-6.2-0.2-9.3v-0.4c0-2.8,0.1-5.7,0.3-8.5
                                            c0-0.1,0-0.3,0-0.4c0-0.8,0.1-1.6,0.2-2.5c0.2-2.3,0.4-4.7,0.6-7c0-0.1,0-0.3,0-0.4c0.3-3.1,0.7-6.3,1.1-9.4
                                            c0-0.1,0-0.3,0-0.4c0.2-1.5,0.4-3,0.6-4.5c0.3-1.9,0.5-3.7,0.8-5.6c0-0.1,0-0.3,0.1-0.4c0.2-1.6,0.5-3.3,0.7-4.9
                                            C576.6,114.7,576.9,112.8,577.2,111z"/>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g id="Plant_00000104666741410489789410000007642101284458011298_">
                            
                                <image overflow="visible" opacity="0.4" width="76" height="78" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABOCAYAAACKX/AgAAAACXBIWXMAAAsSAAALEgHS3X78AAAE
            fklEQVR4nO2c627bRhBGjyTLli+J7QS5tEiLou//VEHaXNpYju3akiWF/TE74nC5UjRAgJDKfMCC
            FrkrYE5mZ0cB+A3waeCc3xdVu07cBcDAXAfZvb6rMtcqu1fUtsD12TD9PTTDwuurFNJXM/SzPm/p
            YMOXKZBhmnMAjNN1lEafoSmsVRpLYJGuS7ZAKwWsoEYIpCPg2IwjBFxfM81m1hKYAw9mzBF4K+qs
            WysP1mbVIXACPAXOgQvgCXCano3S3NL3dFUa/FcEyCPwH3ALXANfgBvgPj3TbFtDs1tSs2WEAHkC
            XAIvgFfpepnu2yzro2x23QJT4B/gIxL7NN1vHQZ5DRsi2/AUgfMr8BvwBvgFeMZ+ArsC3iNxj80c
            HStdqMDsVjxCoLxAYP0J/AG8RiDqltQTs49SELolp0jMh+n5Ij17RGBpzavyLXmAFPZzZBu+QWD9
            DrxMXzqhrl99qV25FMCKZl2GGuIdzVoGtDNsjBT6CyTDXqeh9eskzekzLJVCO0Q4VAicG2SLfkYO
            AYW2zrC855ogJ+Ml8DxdnyKw9HTsYzuRq6L5D79E4NiYJ2QtlN2StoadAGfU6aoL+74VrQbUJ6Am
            yikS8xnCoHW42T4q78EmaYFm1b5klpVtpbSdOkJi163aaNCHhcX255Au6GtXv4ts3KXYG3HnbcEg
            m2Q/77t2in1TH2UX/WzaGntfG88fpgDmVABzKoA5FcCcCmBOBTCnAphTAcypAOZUAHMqgDkVwJwK
            YE4FMKcCmFMBzKkA5lQAcyqAORXAnApgTgUwpwKYUwHMqQDmVABzKoA5FcCcCmBOBTCnAphTAcyp
            AOZUAHMqgDkVwJwKYE4FMKcCmFMBzKkA5lQAcyqAtVXRdBNoqASsKoyfQesX4WmagTTiz4Ft8qPZ
            Z3B5zEualjKN2IcbFqoXjfrRrPKFe6KSU8ocmNF2RmkYfVjznse04D4N9aMZU7bD6ts7lVX29wpJ
            jBm1rYxaMMxpmhc1nFE0s2bUXjRXiBvKcZqrL5bbN1X74imW+4PpblogSXFHHfMUsWOYkWWZ+jXY
            xfdp4ScE1hm1vcqStrtT/tpvF1Uq5LmdzL+I984HxIdHPSsWZk1jS1pg07RQjT1Izy6QbFOnAesn
            1tUX6S0o6xem5ecBifc98Bb4C0mW6/RsyQZ3JyX+kCaPERAgsO6oM07tGXSoGVsXX6jPD7JHM+ZI
            XFfA3wiwd0iG3dKsYa0Mg5r6HXXgKyTrrqjNiiaFoYC71gxrZmlhz4eaFX1CsuxD+my341o2w/J9
            rfcW6Us/I/Yq6lI3oXatU2OMLgPT01+d6GbU7nQ31AX/Gol3TqGd2mbppw4px0gtO6GuX9ZBJHdQ
            6cqpaU/DvMdSWLo1H2i2UUV3OtgclPVBVMNIrVNa6PWeAuxi4c8LvgLSplwPgFKj3oIF37Ylze1I
            ra3MKBtdg6UqnZI68p+B+c/Blr4V3CbT25LdShdhqUp9WP4beSfzW0+AJUfO0rWrKnX6pedb9T2C
            7DqoXPv2Hwjd1v/c448zQAOD3QAAAABJRU5ErkJggg==" transform="matrix(1 0 0 1 387 373)">
                            </image>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M391.6,434.2l0-48.2
                                        c0-4.2,3.4-7.7,7.7-7.7h47.4c4.2,0,7.7,3.4,7.7,7.7l0,48.2c0,4.2-3.4,7.7-7.7,7.7h-47.4C395,441.9,391.6,438.4,391.6,434.2z"
                                        />
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M391.2,434.1l0-48c0-4.4,5.6-8,12.6-8
                                        h38.4c6.9,0,12.6,3.6,12.6,8l0,48c0,4.4-5.6,8-12.6,8l-38.4,0C396.8,442.1,391.2,438.5,391.2,434.1z M453.9,386.1
                                        c0-4.2-5.3-7.5-11.8-7.5h-38.4c-6.5,0-11.8,3.4-11.8,7.5l0,48c0,4.2,5.3,7.5,11.8,7.5h38.4c6.5,0,11.8-3.4,11.8-7.5
                                        L453.9,386.1z"/>
                                </g>
                            </g>
                        </g>
                        <g id="Plant">
                            
                                <image overflow="visible" opacity="0.4" width="40" height="44" href="data:image/png;base64,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" transform="matrix(1 0 0 1 396 390)">
                            </image>
                            <g>
                                <g>
                                    <g>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M411.8,415.6c-3.3,0-5.9-2.6-5.9-5.9
                                            s2.7-5.9,5.9-5.9c3.3,0,5.9,2.6,5.9,5.9S415.1,415.6,411.8,415.6z"/>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M405.6,409.7c0-3.4,2.8-6.2,6.2-6.2
                                            c3.4,0,6.2,2.8,6.2,6.2c0,3.4-2.8,6.2-6.2,6.2C408.4,415.9,405.6,413.1,405.6,409.7z M417.5,409.7c0-3.1-2.6-5.6-5.7-5.6
                                            c-3.1,0-5.7,2.5-5.7,5.6c0,3.1,2.6,5.6,5.7,5.6C414.9,415.4,417.5,412.8,417.5,409.7z"/>
                                    </g>
                                    <g>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M413.8,409.6c5.9-0.3,5.3-3.8,5.2-6.9
                                            c-0.1-3.1,1-8.1,0.4-7.2c-0.6,0.9-3.6,2-6.4,4.8C410.3,403,408,409.8,413.8,409.6z"/>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M409.9,406.5c0-2.2,1.3-4.9,3-6.5
                                            c1.7-1.7,3.4-2.7,4.6-3.5c0.8-0.5,1.5-0.9,1.7-1.2c0.2-0.2,0.3-0.2,0.4-0.2c0.3,0.1,0.3,0.5,0,2.4c-0.2,1.5-0.4,3.5-0.4,5.1
                                            l0,0.6c0.1,1.8,0.2,3.7-1,5.1c-0.9,1-2.3,1.5-4.4,1.6l0,0c-2.3,0.1-3.2-0.9-3.6-1.8C410,407.6,409.9,407.1,409.9,406.5z
                                            M419.3,395.9c-0.4,0.3-0.9,0.7-1.5,1.1c-1.2,0.8-2.9,1.8-4.6,3.4c-1.9,1.9-3.4,5.5-2.6,7.4c0.5,1,1.5,1.5,3.1,1.4l0,0
                                            c2-0.1,3.3-0.5,4.1-1.4c1.1-1.2,1-3,0.9-4.7l0-0.6c-0.1-1.6,0.2-3.6,0.4-5.1C419.2,396.9,419.3,396.3,419.3,395.9z"/>
                                    </g>
                                    <g>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M412,409.7c1-2.9,5.9-4,10.3-1.5
                                            c4.4,2.5,5.6,5.7,4.2,4.8c-1.5-1-4.3,1.6-7.3,2.2C416.3,415.7,411.1,412.4,412,409.7z"/>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M411.7,410.4c0-0.3,0-0.5,0.1-0.8l0,0
                                            c0.4-1.2,1.4-2.1,2.8-2.6c2.3-0.9,5.3-0.5,7.9,1c3.2,1.8,4.9,4.1,4.9,5c0,0,0,0,0,0c0,0.2-0.1,0.4-0.2,0.4
                                            c-0.2,0.1-0.4,0-0.8-0.2c-0.7-0.5-2,0.1-3.5,0.9c-1.1,0.5-2.3,1.1-3.5,1.4c-2,0.4-5-0.8-6.7-2.7
                                            C412,411.9,411.7,411.1,411.7,410.4z M412.3,409.8c-0.3,1,0.2,1.9,0.8,2.6c1.5,1.7,4.4,2.9,6.2,2.5c1.2-0.3,2.4-0.8,3.4-1.3
                                            c1.6-0.8,3.1-1.5,4-0.8c0.1,0.1,0.1,0.1,0.2,0.1c-0.1-0.6-1.4-2.6-4.6-4.4c-2.5-1.4-5.3-1.8-7.5-1
                                            C413.5,407.9,412.6,408.7,412.3,409.8L412.3,409.8z"/>
                                    </g>
                                    <g>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M409.9,410.5c1.9,1.7,2.4,0.6,2.7,2.6
                                            c0.3,1.9-0.5,5.1-2.3,6.2s-6.9,4.2-6.5,3.6c0.5-0.6,1.4-4.6,1.1-6.1C404.7,415.3,407.6,408.5,409.9,410.5z"/>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M403.5,422.9c0-0.1,0-0.1,0.1-0.2
                                            c0.4-0.6,1.3-4.4,1.1-5.9c-0.2-1.3,1.6-5.7,3.4-6.7c0.7-0.4,1.3-0.3,1.9,0.2c0.8,0.7,1.3,0.9,1.7,1.1c0.6,0.3,1,0.4,1.2,1.7
                                            c0.3,1.9-0.5,5.3-2.5,6.5l-0.7,0.4c-5.9,3.5-5.9,3.5-6.1,3.2C403.6,423.1,403.5,423,403.5,422.9z M405.2,417.4
                                            c0,1.5-0.5,3.9-1,5.1c1.2-0.6,3.9-2.3,5.2-3l0.7-0.4c1.8-1.1,2.5-4.2,2.2-6c-0.2-1-0.3-1.1-0.8-1.3c-0.4-0.2-1-0.4-1.8-1.1
                                            l0,0c-0.4-0.4-0.8-0.4-1.3-0.1c-1.7,0.9-3.4,5.1-3.2,6.2C405.2,416.9,405.2,417.2,405.2,417.4z"/>
                                    </g>
                                    <g>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M411.6,410.2c3.9-1.9,6.3,0.9,6.5,4.9
                                            c0.1,2.6-0.2,4.5-0.3,6.3c-0.1,1.9,0.5,3,0.4,3.5c-0.4,1-2.2-1.2-3.3-2.2c-1.1-1-2.5-1.7-3.9-4.4
                                            C409.6,415.5,408.7,411.6,411.6,410.2z"/>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M409.4,413.6c0-0.6,0.1-1.1,0.2-1.5
                                            c0.3-0.9,0.9-1.6,1.8-2.1l0,0c1.6-0.8,3.1-0.8,4.3-0.1c1.5,0.9,2.4,2.8,2.5,5.3c0.1,1.8,0,3.3-0.1,4.6c0,0.6-0.1,1.1-0.1,1.7
                                            c0,1.1,0.1,1.9,0.3,2.5c0.1,0.5,0.2,0.8,0.1,1.1c-0.1,0.3-0.3,0.4-0.4,0.4c-0.6,0.1-1.4-0.6-2.6-1.8
                                            c-0.2-0.2-0.5-0.5-0.7-0.7c-0.2-0.2-0.5-0.4-0.8-0.7c-0.9-0.7-2.1-1.6-3.2-3.8C409.9,416.7,409.4,415,409.4,413.6z
                                            M411.7,410.4c-0.8,0.4-1.3,1-1.6,1.8c-0.5,1.5-0.1,3.7,1.1,6c1.1,2.1,2.1,2.9,3,3.6c0.3,0.2,0.6,0.5,0.8,0.7
                                            c0.2,0.2,0.4,0.4,0.7,0.7c0.7,0.7,1.7,1.8,2.1,1.7c0,0,0,0,0.1-0.1c0-0.1,0-0.4-0.1-0.8c-0.1-0.6-0.3-1.5-0.3-2.6
                                            c0-0.6,0.1-1.1,0.1-1.7c0.1-1.4,0.2-2.8,0.1-4.6c-0.1-2.3-1-4.1-2.3-4.9C414.5,409.6,413.2,409.7,411.7,410.4L411.7,410.4z"
                                            />
                                    </g>
                                    <g>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M412,408.3c-1.4-3.7-0.9-6.6-3.5-7.2
                                            c-2.5-0.6-7.4-1.4-7.6-2.3c-0.1-0.9-1.2,2.2,0.6,3.9c1.8,1.6,3.3,7.7,6.1,7.5C410.4,410,412.8,410.4,412,408.3z"/>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M400.2,400.1c0-0.6,0.1-1.1,0.2-1.4
                                            c0.1-0.3,0.3-0.3,0.4-0.3c0.1,0,0.2,0.1,0.3,0.4c0.1,0.6,4.3,1.4,6.1,1.8c0.5,0.1,0.9,0.2,1.3,0.3c1.9,0.4,2.2,2,2.7,4
                                            c0.2,1,0.5,2.1,0.9,3.3l0,0c0.2,0.6,0.2,1.1,0,1.4c-0.4,0.6-1.5,0.7-3,0.7c-0.5,0-1,0-1.6,0.1c-2,0.2-3.3-2.4-4.5-4.6
                                            c-0.6-1.2-1.3-2.4-1.9-2.9C400.5,402.1,400.2,401,400.2,400.1z M400.8,399.2c-0.2,0.7-0.2,2.3,0.9,3.3c0.7,0.6,1.3,1.8,2,3.1
                                            c1.1,2.1,2.4,4.5,4,4.3c0.6,0,1.1-0.1,1.6-0.1c1.2-0.1,2.3-0.1,2.6-0.5c0.1-0.2,0.1-0.5-0.1-0.9c-0.5-1.2-0.7-2.3-1-3.3
                                            c-0.5-2-0.8-3.3-2.3-3.7c-0.4-0.1-0.8-0.2-1.3-0.3C403.4,400.3,401.4,399.8,400.8,399.2z"/>
                                    </g>
                                    <g>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M412,409.9c0.3,0.1,1.6,1.2,2.5,4.3
                                            c0.8,3.1,0.8,4.8,0.8,4.8L412,409.9z"/>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M412,410.2l0.1-0.5
                                            c0.4,0.1,1.8,1.4,2.6,4.4c0.8,3.1,0.8,4.7,0.8,4.8h-0.5c0,0,0-1.7-0.8-4.7C413.5,411.3,412.2,410.2,412,410.2z"/>
                                    </g>
                                    <g>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M411.7,409.5c-0.4-1.4-2.6-2.5-3.7-3.4
                                            c-1.1-0.9-2-2-2.8-2.9c-0.7-0.9-1.6-1.1-1.6-1.1L411.7,409.5z"/>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M403.6,402.3l0.1-0.5
                                            c0,0,1,0.2,1.8,1.2l0.3,0.4c0.7,0.8,1.5,1.8,2.4,2.5c0.3,0.2,0.6,0.4,1,0.7c1.1,0.8,2.5,1.7,2.8,2.9l-0.5,0.1
                                            c-0.3-1-1.6-1.9-2.6-2.6c-0.4-0.2-0.7-0.5-1-0.7c-1-0.8-1.8-1.8-2.5-2.6l-0.3-0.4C404.4,402.5,403.6,402.3,403.6,402.3z"/>
                                    </g>
                                    <g>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M417.1,399.7c-1.6,2.7-2.7,3.8-3.4,5.5
                                            c-0.7,1.7-1.6,4.2-1.6,4.2L417.1,399.7z"/>
                                        <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M411.9,409.4c0,0,0.9-2.6,1.6-4.3
                                            c0.4-0.9,0.9-1.7,1.5-2.6c0.5-0.8,1.2-1.7,1.9-2.9l0.4,0.3c-0.7,1.3-1.3,2.2-1.9,3c-0.6,0.9-1.1,1.6-1.5,2.5
                                            c-0.7,1.6-1.5,4.2-1.5,4.2L411.9,409.4z"/>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g id="Bedroom_2_00000145051684594889908760000013641583540575714735_">
                            
                                <image overflow="visible" opacity="0.4" width="110" height="74" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABKCAYAAABaZmHbAAAACXBIWXMAAAsSAAALEgHS3X78AAAG
            4klEQVR4nO1d/U8bORB9+SCEAqVAT3e6D510//9/dVLVXhFcm0AIIcn94Hl4drB3vbuBxpyfZCUN
            WY89b8ZjO+rMAG8fg57Pb3cyih2j7aRSvx+abF8FxvqNYaBk6vdtZG0D73eJpjFFZaZMJjT52HNb
            8xrrpy1sv3VKZP9DeT9ULUU++94EWpPsFKTos9FoxokChqaFLHir2sYIG5jn2pAX6rfOAyhrBDe/
            A3kdoZk8TdqjtAf1fhN5LhV6/lafGo1GEyNOd04FWCVoArRi19KoZN0PlZdKXqhf3bclj/2OAEwA
            TAEcSePY62RTFgm7U21pZLeF1SnHM4YnkHNaA1hJe1ByOcZnxOllhoQdoqqAKark6QmvRdAK3kKH
            8KRPkE6eJe0h0HeIuKHIOgJwCuC9vJK8phWDsm4B/AvgBsA3AHN4JXYljro4hNcl9cnVYA1nJDSY
            WwD3Muc1Owt5nO38GMCZtPcATuRvWpie8FIEPcATR+s/hCevLubp9d32ew9HnrZCrRx62zGADwDO
            5fU4INuCRrIA8B3AP9K+wpFHBbZdMvVKcChjOZVGfY5kvis4sm4AXKPqiU/hYmw6J2lT6fADgAsA
            PwH4COASjrwjxImjcrm0cLC0Lu11TdDedg+nUBrFSxH3KHJu5Fl67I183pU46pYrAcfG1WAk/S7h
            jOQLnN428KtM0OP0MvMOjrBfAPwK4DcAP8MRd4Y4cStUPY7EaY87QHviVqgahF2yGEvbLJUxeY8i
            51w9fw7ngQuEDaYJIeJoUJq4tci+huNgKzK5XK5gPE7HtgM467yEI+wvAH/AkXgB54lTVDcoOqgz
            oNoYN4EPyHXK0wj1a2Oc3b0O4GOqjsva2+o2J/RwPnsqurhF1WBS45zWLUPQCfxSyZVgKHO6k882
            AGYArqRV4nOdx53DkfU7gD/hlkt6m7XcfdpVUkmx40DThmgDb2RU8iWqxth2c6JjHEMRN3yMbwOZ
            21SemcHpW8fAp1UqJcYxtl3geZzQStincxzw/JzU5gBOJdFrz1CNbX2OA/Z4pQlZy3cWcM5DYvm9
            J93FdpXcUBxJB7qTuqVuH25OtLyuV15UEs9bu7o5iR2+9TjtGW8c+F7wHBe6eSDjtI7YxkIvnbG/
            dUFdv6nPtv0+lcVt+q7uKmNXXjqshFaLyjxSbk50Z6mW24ekH9FvTJZW6Ev0nyI/+L26u8pUAW8d
            ezn/lLNUwR6iEJcpCnGZohCXKQpxmaIQlykKcZmiEJcpCnGZohCXKQpxmaIQlykKcZmiEJcpCnGZ
            ohCXKQpxmaIQlykKcZmiEJcpCnGZohCXKQpxmaIQlykKcZmiEJcpCnGZohCXKQpxmaIQlykKcZmi
            EJcp6v5LcNv/N13wirDEDWpawR5BE6fTOdhWyNsz6NwfNiUfk7S0TSpT8AqwHqfzbtmkaYW0PYL2
            JO1tTFc0RfG6vUTxuExRYlymKLvKTFHOcZmi3JxkipRcXv93vFSJll5OUUfcNtB2ideqWdM3P2ab
            HJkpiKU9tPJrdR8iTmdiDVWc6LuEdkka2gVdk4zajLRsuzDepkSjIX0HZWvibP5jJq9eSmP++z5H
            g7ZpertCx+imXJtb897qgOVZ2ibRjo2pKbVvUuJw63HMOM5KE3O4tO0j+XyCSKrZBLRNjN0VoSy3
            oWTaoaVIZ11fwtc50JU2uozVkqaTaVOnA5HB6h5z+LT1z7Kvkzg74Dlc7vsvImwBn7bekpeKtqno
            u0CTxpT5vAnS444tgzSqJZzSZtLm8lmXhNo6VXBd+vqByL6FqyxyBVekYoZAhRFL3AqO8WsAn0TY
            HC4b+glcUm17f5mKNsUfukDHNF134B2ccnSq+C2qS6AmcQVnqDP42jozVKt8dPG4uoIRU/n7Gk7f
            VwD+BvAZjos7qGIRkIIRzDnMQfNByGC/wlvGMdqXWSHallvpCpvFndbNFWMMP1d6vSZPE3cDR95L
            EKdLtGji7kTuZzjnuYbzQk1c1OMGMqnv8Knr6W2hi+e6JbNrgaOuIHET+KJOJE7XsGE5GS2fmwOG
            Cy6Vt/C1gvrGuFBRJF3p4x7eaK7hDGcBT9xTh/o9rYKXzBPznq1vxY6UkmJdoTcBLMbE2gm2ahTj
            lvY4kkfDWqAa3/os5TrO8WczFoRgxnWGEm5SFqiuSlt2pjsGqmcMXWtgbP6dw66SRsjyZywto2Oc
            3RxxZeDftEfu4jigf4GxBSHsBo5Nb6KeOosJsML0ay7nOG18+peOusN13eF7V7ve0CGcCF18PJNd
            p/yQN6bEtCa85s2JVZRVUIyQH3nllSS7LQG7/LXgNe4qY8Znb0tieOkxpmzqCgRv4qeq/wCuZNq0
            AudOmgAAAABJRU5ErkJggg==" transform="matrix(1 0 0 1 755 534)">
                            </image>
                            <g>
                                <g>
                                    <g>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M761.2,596.2v-53.5c0-0.6,0.5-1,1-1
                                            h86.2c2.3,0,4.2,1.9,4.2,4.2v46.9c0,2.3-1.9,4.2-4.2,4.2l-86.4,0C761.6,597,761.2,596.7,761.2,596.2z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M761,596.4l0-53.7
                                            c0-0.6,0.5-1.1,1.1-1.1H849c2.1,0,3.9,1.7,3.9,3.9v48.1c0,2.1-1.7,3.9-3.9,3.9h-87.1C761.4,597.3,761,596.9,761,596.4z
                                            M852.4,545.3c0-1.9-1.5-3.4-3.4-3.4l-86.9,0c-0.4,0-0.7,0.3-0.7,0.7v53.7c0,0.3,0.2,0.5,0.5,0.5l87.1,0
                                            c1.9,0,3.4-1.5,3.4-3.4V545.3z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M848.4,596v-53.4
                                            c0-1.5,1.2-2.6,2.6-2.6h2.8c1.5,0,2.6,1.2,2.6,2.6V596c0,1.5-1.2,2.6-2.6,2.6H851C849.6,598.6,848.4,597.4,848.4,596z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M848.2,596.3l0-54.1
                                            c0-1.4,1.1-2.5,2.5-2.5h3.5c1.4,0,2.5,1.1,2.5,2.5v54.1c0,1.4-1.1,2.5-2.5,2.5h-3.5C849.3,598.8,848.2,597.7,848.2,596.3z
                                            M856.3,542.2c0-1.1-0.9-2.1-2.1-2.1h-3.5c-1.1,0-2.1,0.9-2.1,2.1v54.1c0,1.1,0.9,2.1,2.1,2.1h3.5c1.1,0,2.1-0.9,2.1-2.1
                                            L856.3,542.2z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M810.7,541.1
                                            c-4.1-0.3-28.8-0.8-32.2-0.3c-3.4,0.5-13.9-1.5-13.8,0.2c0.1,1.7-1.3,23.5-1.8,28.6s-1.8,15.9-2.6,19.3
                                            c-0.7,3.4-0.4,9,0.7,9.3c1.1,0.3,47.9,0.2,50.6-0.5C814.3,597,810.7,541.1,810.7,541.1z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M759.7,593c0-1.5,0.1-3.1,0.4-4.3
                                            c0.8-3.7,2.3-16.7,2.6-19.2c0.6-5,2-26.9,1.8-28.5c0-0.2,0-0.3,0.2-0.5c0.7-0.7,3.3-0.5,7.5-0.2c2.4,0.2,5,0.4,6.3,0.2
                                            c3.4-0.5,28.1,0,32.3,0.3l0.2,0l0,0.2c0,0.1,0.9,14.1,1.4,28.1c1.1,28.3-0.2,28.6-0.8,28.7c-2.1,0.5-49,0.9-50.7,0.5
                                            C760.1,598.1,759.7,595.6,759.7,593z M764.9,541.3c0,3.4-1.3,23.2-1.9,28.2c-0.3,2.6-1.8,15.5-2.6,19.3
                                            c-0.8,3.6-0.3,8.8,0.6,9.1c0.6,0.1,11.9,0.2,24.7,0.1c11.6-0.1,24.4-0.3,25.8-0.6c0.4-0.1,1.4-2.5,0.4-28.4
                                            c-0.5-13-1.3-26.1-1.4-27.8c-4.7-0.3-28.6-0.7-32-0.3c-1.4,0.2-3.9,0-6.4-0.2c-3.1-0.3-6.6-0.5-7.1,0c0,0,0,0.1,0,0.1
                                            C764.9,541,764.9,541.1,764.9,541.3z"/>
                                    </g>
                                    <g>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M809.8,598.6c-0.5-0.5,1-11.5,1-20
                                            c-0.1-17.7-0.8-37.2-0.5-38.6c0.2-1.1,3.8-1.1,7.3-1.1c3.2,0,6.2-0.3,7.1,0.7c1.8,1.9,1.9,56.4-0.6,58.7
                                            c-1.1,1-3.9,0.9-6.6,1C814.1,599.3,810.7,599.4,809.8,598.6z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M809.5,597.8c0-0.9,0.1-2.4,0.3-5.2
                                            c0.3-3.9,0.8-9.3,0.7-14c-0.1-8.2-0.2-16.9-0.4-23.8c-0.2-8.2-0.3-14-0.1-14.8c0.2-1.2,3.2-1.2,6.6-1.3l0.9,0
                                            c0.5,0,0.9,0,1.4,0c2.8-0.1,5-0.1,5.8,0.7c1.3,1.4,1.6,25.5,1.2,41.1c-0.2,7.6-0.7,16.9-1.8,17.9c-1,0.9-3.1,0.9-5.4,1
                                            c-0.4,0-0.9,0-1.3,0c-3.5,0.1-6.9,0.3-7.8-0.6l0,0C809.6,598.7,809.5,598.4,809.5,597.8z M811,579c0,4.5-0.4,9.7-0.7,13.6
                                            c-0.2,2.8-0.5,5.5-0.3,5.9c0.8,0.7,4.4,0.6,7.5,0.5c0.4,0,0.9,0,1.3,0c2.2-0.1,4.3-0.1,5.1-0.9c0.3-0.3,1.2-2.3,1.7-17.6
                                            c0.5-18,0-39.7-1.1-40.8c-0.7-0.7-3-0.7-5.5-0.6c-0.5,0-0.9,0-1.4,0l-0.9,0c-2.7,0-6,0.1-6.2,0.9c-0.2,0.8,0,6.9,0.1,14.8
                                            c0.1,7,0.3,15.6,0.4,23.8C811,578.7,811,578.9,811,579z"/>
                                    </g>
                                    <g>
                                        <path fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M844.9,549.6c-3.2-1.7-13.6-0.1-15.2,0
                                            c-6.9,0.5-3.2,38.5-1.1,39.7c1.8,1,17,1.2,17.8-1.1c0.4-1.1,1.2-10.9,1.1-20C847.2,559,846.2,550.3,844.9,549.6z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M825.4,565.6c0-4.3,0.3-8.4,1-11.4
                                            c0.7-3.1,1.8-4.7,3.3-4.8c0.2,0,0.7-0.1,1.3-0.1c3.4-0.4,11.2-1.3,14,0.2c1.5,0.8,2.5,10.3,2.6,18.8
                                            c0.1,9.1-0.7,18.9-1.1,20.1c-0.1,0.4-0.5,0.7-1.2,1c-3.6,1.4-15.3,1.2-16.9,0.2C827.1,588.8,825.4,576.5,825.4,565.6z
                                            M847.1,570.1c0-0.6,0-1.2,0-1.8c-0.1-10.4-1.3-17.9-2.4-18.5l0,0c-2.7-1.4-10.5-0.5-13.8-0.1c-0.6,0.1-1,0.1-1.3,0.1
                                            c-1.3,0.1-2.2,1.6-2.9,4.5c-2.5,10.9,0.5,34,1.9,34.8c1.5,0.9,13,1.1,16.5-0.3c0.7-0.3,0.9-0.5,0.9-0.7
                                            C846.4,587.1,847.1,578.6,847.1,570.1z"/>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                    
                        <rect x="752.5" y="122.6" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 980.0153 -680.4002)" fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" width="155.4" height="54.4"/>
                    <g id="shr-config-2">
                        <path fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" d="M835.7,80.8c-0.7-0.2-1.2-0.4-1.7-0.4
                            c-0.5-0.1-1-0.3-1.5-0.3c-0.5-0.1-1-0.1-1.5-0.1c-0.3,0-0.6,0-0.8,0c-0.2,0-0.3,0-0.3,0c-0.2,0-0.3,0-0.3,0c-0.5,0-1,0-1.5,0.1
                            c-0.5,0.1-1.1,0.2-1.6,0.3c-0.5,0.1-0.9,0.2-1.4,0.3c-0.2,0.1-0.5,0.1-0.7,0.2c-0.2,0.1-0.3,0.1-0.3,0.1
                            c-0.2,0.1-0.3,0.1-0.3,0.2c-0.5,0.1-0.9,0.3-1.4,0.6c-0.5,0.2-0.9,0.4-1.2,0.7c-0.9,0.5-1.7,1.1-2.5,1.7
                            c-0.1,0.1-0.2,0.1-0.3,0.2c-0.1,0.1-0.2,0.2-0.2,0.3c-0.2,0.1-0.3,0.3-0.6,0.4c-0.4,0.3-0.8,0.6-1.1,1c-0.3,0.4-0.6,0.7-0.9,1.1
                            c-0.4,0.4-0.7,0.7-1,1c-0.6,0.8-1.2,1.6-1.7,2.4c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.1-0.2,0.1-0.2,0.2c-0.1,0.2-0.2,0.4-0.3,0.7
                            c-0.2,0.4-0.5,0.8-0.8,1.2c-0.5,0.8-0.9,1.7-1.2,2.6c-0.4,0.9-0.8,1.8-1.1,2.7c-0.3,0.9-0.6,1.8-0.9,2.8
                            c-0.2,0.9-0.5,1.8-0.7,2.8c-0.1,0.2-0.1,0.5-0.1,0.8c-0.1,0.1-0.2,0.4-0.2,0.7c-0.1,0.4-0.2,0.9-0.2,1.4
                            c-0.2,0.9-0.3,1.8-0.5,2.9c0,0.4,0,0.9-0.1,1.4c0,0.2,0,0.4,0,0.7c0,0.2,0,0.4,0,0.7c-0.1,1-0.1,2-0.1,3c0.1,1,0.1,1.9,0.1,2.9
                            c0.1,0.4,0.2,0.9,0.2,1.4c0,0.2,0,0.4,0.1,0.7c0,0.3,0,0.6,0,0.8c0.2,1,0.3,1.9,0.5,2.9c0.2,0.9,0.5,1.8,0.7,2.8
                            c0.1,0.2,0.2,0.5,0.2,0.8c0.1,0.1,0.2,0.4,0.2,0.7c0.1,0.4,0.2,0.9,0.5,1.3c0.2,0.9,0.5,1.8,0.9,2.7c0.4,0.9,0.8,1.8,1.2,2.7
                            c0.5,0.9,0.9,1.7,1.4,2.6c0.3,0.4,0.6,0.9,0.9,1.2c0.1,0.2,0.2,0.4,0.3,0.7c0.2,0.1,0.3,0.3,0.5,0.4c0.6,0.8,1.2,1.6,1.9,2.3
                            c0.6,0.7,1.3,1.4,2,2c0.4,0.4,0.8,0.7,1.1,1c0.2,0.1,0.4,0.3,0.6,0.4c0.2,0.1,0.3,0.3,0.6,0.3c0.5,0.3,0.9,0.6,1.2,0.9
                            c0.5,0.2,0.9,0.4,1.4,0.7c0.5,0.2,0.9,0.4,1.4,0.6c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0,0.2,0,0.3,0.1c0.2,0.1,0.5,0.1,0.7,0.2
                            c0.5,0.1,0.9,0.3,1.5,0.3c0.5,0.1,0.9,0.1,1.5,0.2c0.2,0,0.5,0,0.7,0.1c0.3,0,0.6,0,0.8,0.1c0.1,0,0.2,0,0.3,0s0.3,0,0.3,0
                            c0.3,0,0.6,0,0.8,0c0.5-0.1,1-0.1,1.5-0.2c0.5-0.1,0.9-0.1,1.4-0.2c0.5-0.1,1-0.3,1.5-0.4c0.2-0.1,0.5-0.1,0.7-0.2
                            c0.2,0,0.3,0,0.3-0.1c0.2-0.1,0.3-0.1,0.5-0.1c0.5-0.2,0.9-0.4,1.2-0.7c0.5-0.2,0.9-0.4,1.4-0.7c0.8-0.5,1.6-1.1,2.4-1.7
                            c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.1,0.2-0.2c0.2-0.1,0.4-0.3,0.6-0.6c0.4-0.3,0.7-0.6,1-0.9c0.4-0.4,0.7-0.7,1-1.1
                            c0.3-0.4,0.6-0.7,0.9-1.1c0.6-0.7,1.2-1.5,1.8-2.3c0.2-0.4,0.5-0.8,0.8-1.2c0.1-0.2,0.2-0.4,0.3-0.7c0.1-0.1,0.2-0.3,0.3-0.6
                            c0.5-0.9,0.9-1.8,1.2-2.7c0.2-0.4,0.5-0.9,0.7-1.3c0.1-0.2,0.2-0.4,0.2-0.7c0.1-0.2,0.2-0.4,0.2-0.7c0.4-0.9,0.7-1.8,0.9-2.7
                            c0.3-1,0.6-1.9,0.8-2.9c0.2-0.9,0.4-1.8,0.6-2.8c0.2-1,0.3-1.9,0.3-2.9c0-0.2,0-0.4,0.1-0.7c0-0.3,0-0.6,0-0.8
                            c0.1-0.5,0.1-1,0.1-1.4c0-1,0-1.9,0-2.9c0-0.5,0-1,0-1.4c0-0.5,0-1-0.1-1.4c-0.1-1-0.2-1.9-0.2-2.9c-0.2-1-0.3-1.9-0.6-2.9
                            c0-0.2,0-0.4-0.1-0.7c0-0.2-0.1-0.5-0.2-0.8c-0.1-0.4-0.2-0.9-0.2-1.3c-0.3-1-0.6-1.9-0.8-2.8c-0.4-0.9-0.8-1.8-1.1-2.8
                            c-0.3-0.8-0.7-1.7-1.1-2.6c-0.2-0.4-0.5-0.9-0.7-1.3c-0.2-0.1-0.3-0.3-0.5-0.6c-0.1-0.2-0.2-0.4-0.3-0.7c-0.5-0.8-1-1.6-1.6-2.4
                            c-0.3-0.4-0.6-0.7-0.9-1.1c-0.2-0.2-0.3-0.4-0.5-0.6c-0.2-0.2-0.3-0.4-0.6-0.6c-0.6-0.7-1.3-1.4-2-2.1c-0.4-0.3-0.8-0.6-1.1-0.9
                            c-0.4-0.3-0.8-0.6-1.1-0.9c-0.2-0.1-0.4-0.3-0.6-0.3c-0.2-0.1-0.3-0.1-0.3-0.2c-0.2-0.1-0.3-0.1-0.3-0.2
                            c-0.4-0.3-0.8-0.5-1.4-0.7c-0.5-0.2-0.9-0.4-1.4-0.7c-0.2-0.1-0.4-0.1-0.7-0.2C835.9,80.9,835.8,80.9,835.7,80.8z"/>
                        <path fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" d="M830.4,150.6c3.5,0,6.8-0.9,9.9-2.8
                            c3-1.8,5.7-4.4,8-7.8c2.3-3.3,4.1-7.1,5.4-11.4c1.3-4.3,2-9,2-14c-0.1-5-0.8-9.6-2-14c-1.3-4.3-3.1-8.1-5.4-11.4
                            c-2.3-3.3-5-5.8-8.1-7.7c-3-1.8-6.3-2.8-9.8-2.9c-3.5,0.1-6.8,1-9.9,2.9c-3.1,1.8-5.8,4.4-8,7.7c-2.3,3.3-4.2,7.1-5.5,11.4
                            c-1.3,4.4-1.9,9-1.9,14c0,5,0.6,9.7,1.9,14c1.4,4.4,3.2,8.2,5.5,11.4c2.3,3.3,4.9,5.9,8,7.8C823.5,149.7,826.8,150.6,830.4,150.6
                            z"/>
                        <path fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" d="M804,168.4c-0.7,0.4-1,0.9-1,1.4v55.3
                            c0,0.6,0.3,1,1,1.4V168.4h0.2c0.7-0.4,1.5-0.7,2.5-0.7h47.6c1,0,1.8,0.2,2.5,0.6v0.1c0.8,0.4,1.2,0.9,1.2,1.4v55.3
                            c0,0.6-0.4,1-1.2,1.4c-0.7,0.4-1.5,0.7-2.5,0.7h-23l-0.8,1.3l-1-1.3h-22.8c-1-0.1-2.6-0.7-2.6-0.7"/>
                        <polyline stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" points="831.3,227.2 834.1,219.9 826.8,219.9 829.5,227.2 
                                        "/>
                        <line fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" x1="832.1" y1="195.6" x2="856.7" y2="168.3"/>
                        <line fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" x1="831.6" y1="198.8" x2="856.7" y2="226.5"/>
                        <path fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" d="M843.5,135.1c0.2-0.1,0.3-0.3,0.6-0.6
                            c0.2-0.2,0.3-0.4,0.6-0.7c0.2-0.3,0.3-0.6,0.3-0.8c0.2-0.1,0.3-0.3,0.3-0.3c0-0.1,0-0.3,0.1-0.4c0.4-0.7,0.7-1.4,1-2.1
                            c0.2-0.7,0.5-1.5,0.8-2.2c0.2-0.7,0.3-1.4,0.6-2.2c0.2-0.7,0.4-1.5,0.6-2.2c0.2-0.7,0.3-1.5,0.3-2.3c0.1-0.1,0.1-0.3,0.1-0.6
                            c0-0.2,0-0.4,0.1-0.6c0.1-0.4,0.1-0.8,0.1-1.2c0.1-0.7,0.1-1.5,0.1-2.3c0.1-0.7,0.1-1.5,0.1-2.3c0-0.7,0-1.5-0.1-2.3
                            c-0.1-0.7-0.2-1.5-0.2-2.2c-0.1-0.4-0.2-0.8-0.2-1.2c0-0.2,0-0.4,0-0.6c-0.1-0.1-0.1-0.3-0.1-0.6c-0.2-0.8-0.3-1.6-0.6-2.3
                            c-0.3-1.5-0.8-3-1.4-4.4c-0.2-0.7-0.5-1.4-0.8-2.1c-0.2-0.4-0.4-0.7-0.6-1.1c-0.2-0.4-0.3-0.7-0.6-1c1.4,5.5,2.1,11.1,2.1,16.8
                            c0.2,5.6-0.2,11.2-1.2,16.9c0,0.2,0,0.4-0.1,0.7c0,0.1,0,0.3-0.1,0.3c0,0.1,0,0.3,0,0.4c-0.2,0.4-0.3,0.9-0.6,1.3
                            c-0.2,0.4-0.4,0.8-0.7,1.2c0,0.1,0,0.1-0.1,0.2c-0.1,0.1-0.2,0.3-0.2,0.3C843.7,134.7,843.5,134.9,843.5,135.1z"/>
                        <path fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" d="M840.1,96.2c-0.2-0.3-0.3-0.6-0.3-0.8
                            c-0.2-0.3-0.3-0.6-0.6-0.8c-0.1-0.2-0.2-0.4-0.5-0.7c-0.1-0.1-0.2-0.3-0.2-0.3l-0.3-0.3H838v-0.1c-0.1-0.1-0.2-0.1-0.2-0.2
                            c-0.1-0.1-0.2-0.1-0.2-0.2c-0.2-0.2-0.5-0.4-0.7-0.7c-0.2-0.2-0.3-0.4-0.6-0.6c-0.2-0.2-0.5-0.4-0.7-0.6
                            c-0.2-0.2-0.5-0.4-0.8-0.6c-0.3-0.2-0.6-0.3-1-0.2c-0.4,0.1-0.7,0.3-0.9,0.6c-0.1,0.1-0.2,0.3-0.2,0.4c-0.3,1-0.9,1.7-1.9,1.9
                            c-0.7,0.1-1.3,0-1.9-0.3c-0.5-0.3-0.9-0.8-1-1.6c-0.1-0.4-0.3-0.6-0.7-0.8c-0.2-0.2-0.6-0.3-1-0.2c-0.2,0.1-0.3,0.1-0.5,0.2
                            c-0.3,0.1-0.6,0.3-0.8,0.6c-0.2,0.1-0.4,0.3-0.6,0.6c-0.3,0.1-0.5,0.3-0.7,0.6c-0.2,0.2-0.4,0.4-0.6,0.7
                            c-0.3,0.1-0.5,0.3-0.7,0.6v0.1h-0.1c-0.1,0.1-0.2,0.1-0.2,0.2c-0.1,0.1-0.2,0.2-0.2,0.3l-0.1,0.1c-0.1,0.1-0.2,0.1-0.2,0.2
                            c0,0.1-0.1,0.2-0.2,0.3c-0.1,0.2-0.2,0.5-0.5,0.8c-0.2,0.4-0.5,1-0.7,1.6c-0.1,0.2-0.1,0.5-0.1,0.8c-0.1,0.1-0.1,0.1-0.1,0.2
                            c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,1.1-0.5,2.2-0.7,3.3c-0.4,2.2-0.7,4.4-0.9,6.7c0,0.4,0,0.7,0,0.9
                            c-0.1,0.3-0.1,0.6-0.1,0.9c0,0.5,0,1.1-0.1,1.7c0,1.2,0,2.3,0,3.4c-0.1,2.3,0,4.6,0.2,6.8c0,0.6,0,1.2,0.1,1.8
                            c0.1,0.5,0.2,1.1,0.2,1.7c0.1,0.5,0.2,1.1,0.2,1.7c0,0.1,0,0.3,0,0.4c0.1,0.1,0.1,0.3,0.1,0.4s0,0.3,0.1,0.3
                            c0.1,0.1,0.1,0.3,0.1,0.4c0.1,0.3,0.2,0.6,0.2,0.8c0.1,0.1,0.2,0.3,0.2,0.4c0,0.1,0,0.1,0.1,0.1c0,0.1,0,0.2,0.1,0.3
                            c0.2,0.2,0.3,0.4,0.3,0.7c0.2,0.2,0.4,0.4,0.6,0.7c0.2,0.2,0.4,0.4,0.6,0.7c0.1,0,0.2,0,0.2,0.1l0.2,0.1c0.1,0.1,0.2,0.3,0.2,0.3
                            c0.3,0.1,0.6,0.3,0.8,0.4c0.2,0.1,0.5,0.3,0.7,0.3c0.2,0.1,0.3,0.1,0.5,0.2c0.1,0.1,0.2,0.1,0.2,0.1s0.2,0,0.2,0.1
                            c0.2,0.1,0.5,0.1,0.8,0.2l0.8,0.1c0.3,0,0.6,0,0.9,0.1c0.3,0.1,0.6,0.1,0.9,0.1c0.2,0,0.5,0,0.8,0.1c0.6,0,1.2,0,1.7,0
                            c1.2,0,2.4-0.1,3.5-0.2c0.2,0,0.3,0,0.5-0.1c0.2,0,0.3,0,0.5,0c0.1,0,0.2,0,0.3-0.1h0.2c0.1,0,0.2,0,0.2,0
                            c0.3-0.1,0.6-0.1,0.9-0.2c0.1-0.1,0.2-0.1,0.3-0.1c0.1-0.1,0.2-0.1,0.2-0.2c0.1,0,0.2,0,0.2,0c0.2-0.1,0.5-0.3,0.7-0.4
                            c0.3-0.1,0.5-0.3,0.7-0.4c0.3-0.2,0.5-0.4,0.7-0.6c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.2-0.2,0.2-0.3c0.2-0.2,0.4-0.4,0.6-0.7
                            c0.2-0.2,0.3-0.4,0.5-0.7c0.1-0.1,0.2-0.3,0.2-0.4c0-0.1,0-0.1,0.1-0.1c0-0.1,0-0.2,0-0.3c0.2-0.2,0.3-0.5,0.3-0.8
                            c0.1-0.2,0.2-0.5,0.2-0.8c0-0.1,0-0.3,0-0.4c0.1-0.1,0.1-0.3,0.1-0.4c0.1-0.5,0.2-1.1,0.2-1.7c0.2-1.1,0.3-2.2,0.3-3.3
                            c0.2-2.3,0.3-4.6,0.3-6.9c0-0.5,0-1.1,0-1.7c-0.1-0.6-0.1-1.1-0.1-1.7c-0.1-1.2-0.2-2.3-0.2-3.4c-0.1-1.1-0.2-2.2-0.3-3.3
                            c-0.1-0.3-0.2-0.6-0.2-0.9c0-0.3,0-0.6-0.1-0.9c-0.1-0.5-0.2-1.1-0.2-1.7c-0.2-0.5-0.3-1.1-0.3-1.7c-0.1-0.3-0.1-0.6-0.1-0.8
                            c-0.1-0.3-0.2-0.6-0.2-0.9L840.1,96.2z"/>
                        <path fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" d="M826.1,84.4c-2.2,0.7-4.2,2-6,3.7
                            c-3.1,2.7-5.5,6.4-7.3,11.1c-1.8,4.6-2.7,9.8-2.8,15.5c0.1,5.8,1,11,2.8,15.6c1.8,4.6,4.2,8.3,7.3,11.1c3,2.7,6.4,4.1,10.2,4.2
                            c3.8-0.1,7.3-1.6,10.3-4.2c3.1-2.8,5.5-6.5,7.3-11.1c1.8-4.7,2.7-9.9,2.7-15.6c0-5.8-0.9-11-2.7-15.5c-1.8-4.7-4.2-8.4-7.3-11.1
                            c-1.8-1.7-3.8-2.9-6-3.6L826.1,84.4c1.4-0.4,2.7-0.6,4.2-0.6c1.5,0,2.9,0.2,4.3,0.7"/>
                        <path fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" d="M830.4,81.8c-4.2,0.1-8,1.6-11.3,4.4
                            c-3.4,3-6.1,6.9-8,11.8c-2,5-3,10.5-3,16.6c0.1,6.1,1.1,11.7,3,16.5c2,4.9,4.6,8.8,8,11.8c3.3,2.9,7.1,4.4,11.3,4.6
                            c4.1-0.1,7.9-1.7,11.2-4.6c3.4-3,6.1-6.9,8-11.8c2-4.9,3-10.4,3-16.5c-0.1-6.1-1.1-11.7-3-16.6c-2-4.9-4.6-8.8-8-11.8
                            C838.2,83.4,834.5,81.9,830.4,81.8z"/>
                        <path fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" d="M815.3,132.3c-0.3-0.7-0.6-1.4-0.9-2.1
                            c-0.3-0.7-0.6-1.5-0.8-2.2c-0.3-0.7-0.5-1.4-0.7-2.2c-0.2-0.7-0.4-1.5-0.6-2.2c-0.2-0.7-0.3-1.5-0.5-2.3c0-0.1,0-0.3,0-0.6
                            c0-0.2,0-0.4-0.1-0.6c0-0.4,0-0.8-0.1-1.2c-0.1-0.7-0.2-1.5-0.2-2.3c0-0.7,0-1.5,0-2.3c0-0.7,0.1-1.5,0.2-2.3
                            c0-0.7,0-1.5,0.1-2.2c0.1-0.4,0.2-0.8,0.2-1.2c0-0.2,0-0.4,0-0.6c0.1-0.1,0.1-0.3,0.1-0.6c0.2-0.8,0.3-1.6,0.6-2.3
                            c0.3-1.5,0.8-3,1.4-4.4c0.2-0.7,0.5-1.4,0.9-2.1c0.3-0.7,0.6-1.4,0.9-2.1c-1.2,5.5-1.9,11.1-2,16.6c-0.2,5.7,0.3,11.4,1.2,17
                            c0.1,0.4,0.2,0.9,0.2,1.4c0.2,0.4,0.3,0.9,0.6,1.2c0.1,0.2,0.2,0.4,0.3,0.7c0,0.1,0,0.3,0.1,0.3c0.1,0.1,0.1,0.3,0.1,0.3
                            c0.3,0.4,0.6,0.9,0.8,1.2c-0.2-0.2-0.3-0.4-0.5-0.7c-0.2-0.2-0.4-0.4-0.6-0.7c-0.2-0.3-0.4-0.6-0.5-0.8
                            C815.6,132.9,815.4,132.6,815.3,132.3z"/>
                        <path fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" d="M828.7,90.8c0,0.4,0.2,0.8,0.5,1.1
                            c0.3,0.4,0.7,0.6,1.1,0.6c0.5,0,0.9-0.2,1.2-0.6c0.3-0.2,0.5-0.6,0.5-1.1c0-0.4-0.2-0.8-0.5-1.1c-0.3-0.3-0.7-0.4-1.2-0.4
                            c-0.5,0-0.8,0.1-1.1,0.4C828.8,90,828.7,90.3,828.7,90.8z"/>
                        <ellipse fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" cx="829.6" cy="197" rx="2.6" ry="2.7"/>
                        <line fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" x1="803.5" y1="168.8" x2="827.2" y2="195.6"/>
                        <line fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" x1="803.8" y1="226.4" x2="827.7" y2="198.8"/>
                        
                            <rect x="805" y="152.1" fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" width="52.4" height="15.6"/>
                    </g>
                    
                        <rect x="714.8" y="72.4" fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" width="88.2" height="25.8"/>
                    <g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M700.9,914.7v141.9c0,5.5-2.9,10.7-7.6,13.5
                                c-5.8,3.5-15.8,6.8-32.8,6.8c-16.9,0-26.9-3.4-32.8-6.9c-4.8-2.8-7.7-8-7.7-13.6V914.8c0-2.5,0.5-5,1.4-7.3
                                c0.7-0.1,3.9-0.6,8-4.9c4.6-4.9,10.2-4.4,10.2-4.4l-1.7-5.1c0,0-0.1,0-0.3,0c1.3-0.6,2.6-1.2,4.1-1.7l0.9,3.9
                                c0,0,8.7-2.1,18.1-2.2c9.4,0.1,18.1,2.2,18.1,2.2l1-4.1c1.7,0.7,3.3,1.4,4.8,2.1c-1.1-0.2-1.8-0.2-1.8-0.2l-1.7,5.1
                                c0,0,5.6-0.5,10.2,4.4c4.6,4.9,8.1,4.9,8.4,5.1C700.7,910.2,700.9,911.9,700.9,914.7z"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M660.4,1077.2c-14.1,0-25.2-2.3-32.9-6.9
                                c-4.8-2.9-7.8-8.2-7.8-13.9V914.8c0-2.5,0.5-5,1.4-7.4c0-0.1,0.1-0.2,0.3-0.2c0.6,0,3.7-0.5,7.8-4.8c4-4.2,8.6-4.6,10-4.6
                                l-1.5-4.5l-0.1,0c-0.1,0-0.3-0.1-0.3-0.2c0-0.1,0-0.3,0.2-0.4c1.3-0.6,2.7-1.2,4.1-1.7c0.1,0,0.2,0,0.2,0c0.1,0,0.1,0.1,0.2,0.2
                                l0.9,3.6c1.6-0.4,9.5-2,17.9-2.2c8.3,0.1,16.3,1.8,17.9,2.2l0.9-3.8c0-0.1,0.1-0.2,0.2-0.2c0.1,0,0.2,0,0.3,0
                                c1.6,0.6,3.3,1.3,4.8,2.2c0.1,0.1,0.2,0.2,0.2,0.4c0,0.1-0.2,0.2-0.3,0.2c-0.7-0.1-1.2-0.1-1.5-0.2l-1.5,4.5
                                c1.5,0,6.1,0.3,10,4.6c3.9,4.2,7,4.8,8,4.9c0.2,0,0.3,0.1,0.4,0.1c0.1,0,0.1,0.1,0.1,0.1c1.1,2.5,1.3,4.3,1.3,7v141.9
                                c0,5.7-3,11-7.8,13.8C685.8,1074.9,674.7,1077.2,660.4,1077.2z M621.5,907.8c-0.8,2.2-1.3,4.6-1.3,7v141.6
                                c0,5.5,2.9,10.6,7.5,13.3c7.6,4.5,18.6,6.9,32.6,6.9c14.1,0,25.1-2.3,32.7-6.8c4.6-2.7,7.5-7.8,7.5-13.3V914.7
                                c0-2.6-0.2-4.3-1.2-6.7c0,0-0.1,0-0.1,0c-1.1-0.2-4.3-0.8-8.3-5.1c-4.5-4.8-9.9-4.3-10-4.3c-0.1,0-0.2,0-0.3-0.1
                                c-0.1-0.1-0.1-0.2-0.1-0.3l1.7-5.1c0-0.1,0.2-0.2,0.3-0.2c0,0,0,0,0.1,0c-1-0.5-1.9-0.9-2.9-1.3l-0.9,3.8c0,0.2-0.2,0.3-0.4,0.2
                                c-0.1,0-8.8-2.1-18-2.2c-9.2,0.1-17.9,2.2-18,2.2c-0.1,0-0.2,0-0.2,0c-0.1,0-0.1-0.1-0.1-0.2l-0.9-3.6c-1.1,0.4-2.1,0.8-3.2,1.3
                                l1.7,5c0,0.1,0,0.2,0,0.3c-0.1,0.1-0.2,0.1-0.3,0.1c-0.1,0-5.5-0.4-10,4.3C625.6,906.9,622.5,907.7,621.5,907.8z"/>
                        </g>
                        <g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M680.5,1045.9L680.5,1045.9
                                    c-0.9,0-1.7-0.8-1.7-1.7v-71.5c0-0.9,0.8-1.7,1.7-1.7l0,0c0.9,0,1.7,0.8,1.7,1.7v71.5C682.2,1045.2,681.4,1045.9,680.5,1045.9z
                                    "/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M681.6,1046.2h-2.2c-0.5,0-0.9-0.4-0.9-0.9
                                    v-73.7c0-0.5,0.4-0.9,0.9-0.9h2.2c0.5,0,0.9,0.4,0.9,0.9v73.7C682.5,1045.8,682.1,1046.2,681.6,1046.2z M679.3,971.3
                                    c-0.2,0-0.3,0.1-0.3,0.3v73.7c0,0.2,0.1,0.3,0.3,0.3h2.2c0.2,0,0.3-0.1,0.3-0.3v-73.7c0-0.2-0.1-0.3-0.3-0.3H679.3z"/>
                            </g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M672.4,1045.9L672.4,1045.9
                                    c-0.9,0-1.7-0.8-1.7-1.7v-71.5c0-0.9,0.8-1.7,1.7-1.7l0,0c0.9,0,1.7,0.8,1.7,1.7v71.5C674.1,1045.2,673.4,1045.9,672.4,1045.9z
                                    "/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M673.5,1046.2h-2.2c-0.5,0-0.9-0.4-0.9-0.9
                                    v-73.7c0-0.5,0.4-0.9,0.9-0.9h2.2c0.5,0,0.9,0.4,0.9,0.9v73.7C674.4,1045.8,674,1046.2,673.5,1046.2z M671.3,971.3
                                    c-0.2,0-0.3,0.1-0.3,0.3v73.7c0,0.2,0.1,0.3,0.3,0.3h2.2c0.2,0,0.3-0.1,0.3-0.3v-73.7c0-0.2-0.1-0.3-0.3-0.3H671.3z"/>
                            </g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M664.5,1045.9L664.5,1045.9
                                    c-0.9,0-1.7-0.8-1.7-1.7v-71.5c0-0.9,0.8-1.7,1.7-1.7l0,0c0.9,0,1.7,0.8,1.7,1.7v71.5C666.2,1045.2,665.4,1045.9,664.5,1045.9z
                                    "/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M665.6,1046.2h-2.2c-0.5,0-0.9-0.4-0.9-0.9
                                    v-73.7c0-0.5,0.4-0.9,0.9-0.9h2.2c0.5,0,0.9,0.4,0.9,0.9v73.7C666.5,1045.8,666.1,1046.2,665.6,1046.2z M663.4,971.3
                                    c-0.2,0-0.3,0.1-0.3,0.3v73.7c0,0.2,0.1,0.3,0.3,0.3h2.2c0.2,0,0.3-0.1,0.3-0.3v-73.7c0-0.2-0.1-0.3-0.3-0.3H663.4z"/>
                            </g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M656.5,1045.9L656.5,1045.9
                                    c-0.9,0-1.7-0.8-1.7-1.7v-71.5c0-0.9,0.8-1.7,1.7-1.7l0,0c0.9,0,1.7,0.8,1.7,1.7v71.5C658.2,1045.2,657.4,1045.9,656.5,1045.9z
                                    "/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M657.6,1046.2h-2.2c-0.5,0-0.9-0.4-0.9-0.9
                                    v-73.7c0-0.5,0.4-0.9,0.9-0.9h2.2c0.5,0,0.9,0.4,0.9,0.9v73.7C658.5,1045.8,658.1,1046.2,657.6,1046.2z M655.3,971.3
                                    c-0.2,0-0.3,0.1-0.3,0.3v73.7c0,0.2,0.1,0.3,0.3,0.3h2.2c0.2,0,0.3-0.1,0.3-0.3v-73.7c0-0.2-0.1-0.3-0.3-0.3H655.3z"/>
                            </g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M648.7,1045.9L648.7,1045.9
                                    c-0.9,0-1.7-0.8-1.7-1.7v-71.5c0-0.9,0.8-1.7,1.7-1.7l0,0c0.9,0,1.7,0.8,1.7,1.7v71.5C650.4,1045.2,649.7,1045.9,648.7,1045.9z
                                    "/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M649.8,1046.2h-2.2c-0.5,0-0.9-0.4-0.9-0.9
                                    v-73.7c0-0.5,0.4-0.9,0.9-0.9h2.2c0.5,0,0.9,0.4,0.9,0.9v73.7C650.7,1045.8,650.3,1046.2,649.8,1046.2z M647.6,971.3
                                    c-0.2,0-0.3,0.1-0.3,0.3v73.7c0,0.2,0.1,0.3,0.3,0.3h2.2c0.2,0,0.3-0.1,0.3-0.3v-73.7c0-0.2-0.1-0.3-0.3-0.3H647.6z"/>
                            </g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M640.7,1045.9L640.7,1045.9
                                    c-0.9,0-1.7-0.8-1.7-1.7v-71.5c0-0.9,0.8-1.7,1.7-1.7l0,0c0.9,0,1.7,0.8,1.7,1.7v71.5C642.4,1045.2,641.6,1045.9,640.7,1045.9z
                                    "/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M641.8,1046.2h-2.2c-0.5,0-0.9-0.4-0.9-0.9
                                    v-73.7c0-0.5,0.4-0.9,0.9-0.9h2.2c0.5,0,0.9,0.4,0.9,0.9v73.7C642.7,1045.8,642.3,1046.2,641.8,1046.2z M639.6,971.3
                                    c-0.2,0-0.3,0.1-0.3,0.3v73.7c0,0.2,0.1,0.3,0.3,0.3h2.2c0.2,0,0.3-0.1,0.3-0.3v-73.7c0-0.2-0.1-0.3-0.3-0.3H639.6z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M683.1,964c-14.9-4.7-30.8-4.7-45.7,0
                                    c-1.2,0.4-2.4-0.3-2.8-1.5c-2.1-6.1-4.1-12.1-6.2-18.2c-0.4-1.2,0.3-2.6,1.5-2.9c19.8-6.3,41-6.3,60.8,0
                                    c1.2,0.4,1.9,1.7,1.5,2.9c-2.1,6.1-4.1,12.1-6.2,18.2C685.6,963.7,684.3,964.4,683.1,964z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M636.7,964.4c-1.1,0-2.1-0.7-2.4-1.8
                                    l-6.2-18.2c-0.2-0.7-0.2-1.4,0.1-2c0.3-0.6,0.9-1.1,1.5-1.3c20-6.4,41.1-6.4,61,0c0.7,0.2,1.2,0.7,1.5,1.3
                                    c0.3,0.6,0.4,1.4,0.1,2l-6.2,18.2c-0.5,1.3-1.9,2.1-3.2,1.6c-14.9-4.7-30.7-4.7-45.6,0C637.2,964.4,636.9,964.4,636.7,964.4z
                                    M660.2,937c-10.2,0-20.4,1.6-30.3,4.7c-0.5,0.2-0.9,0.5-1.2,1c-0.2,0.5-0.3,1-0.1,1.6l6.2,18.2c0.4,1,1.4,1.6,2.5,1.3
                                    c15-4.7,30.9-4.7,45.9,0l0,0c1,0.3,2.1-0.2,2.5-1.3l6.2-18.2c0.2-0.5,0.1-1.1-0.1-1.6c-0.2-0.5-0.7-0.8-1.2-1
                                    C680.6,938.6,670.4,937,660.2,937z"/>
                            </g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M683.1,964c-14.9-4.7-30.8-4.7-45.7,0
                                    c-1.2,0.4-2.4-0.3-2.8-1.5c-2.1-6.1-4.1-12.1-6.2-18.2c-0.4-1.2,0.3-2.6,1.5-2.9c19.8-6.3,41-6.3,60.8,0
                                    c1.2,0.4,1.9,1.7,1.5,2.9c-2.1,6.1-4.1,12.1-6.2,18.2C685.6,963.7,684.3,964.4,683.1,964z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M636.7,964.4c-1.1,0-2.1-0.7-2.4-1.8
                                    l-6.2-18.2c-0.2-0.7-0.2-1.4,0.1-2c0.3-0.6,0.9-1.1,1.5-1.3c20-6.4,41.1-6.4,61,0c0.7,0.2,1.2,0.7,1.5,1.3
                                    c0.3,0.6,0.4,1.4,0.1,2l-6.2,18.2c-0.5,1.3-1.9,2.1-3.2,1.6c-14.9-4.7-30.7-4.7-45.6,0C637.2,964.4,636.9,964.4,636.7,964.4z
                                    M660.2,937c-10.2,0-20.4,1.6-30.3,4.7c-0.5,0.2-0.9,0.5-1.2,1c-0.2,0.5-0.3,1-0.1,1.6l6.2,18.2c0.4,1,1.4,1.6,2.5,1.3
                                    c15-4.7,30.9-4.7,45.9,0l0,0c1,0.3,2.1-0.2,2.5-1.3l6.2-18.2c0.2-0.5,0.1-1.1-0.1-1.6c-0.2-0.5-0.7-0.8-1.2-1
                                    C680.6,938.6,670.4,937,660.2,937z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M688,967l4.1-9.2c0.1-0.2,0.3-0.3,0.5-0.3
                                    h1.2c0.3,0,0.6,0.3,0.6,0.6v23.6c0,0.3-0.3,0.6-0.6,0.6h-5.2c-0.3,0-0.6-0.3-0.6-0.6v-14.3C687.9,967.2,688,967.1,688,967z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M693.8,982.5h-5.2c-0.5,0-0.9-0.4-0.9-0.9
                                    v-14.3c0-0.1,0-0.2,0.1-0.4l4.1-9.2c0.1-0.3,0.4-0.5,0.8-0.5h1.2c0.5,0,0.9,0.4,0.9,0.9v23.6
                                    C694.7,982.1,694.3,982.5,693.8,982.5z M688.3,967.1L688.3,967.1c0,0,0,0.1,0,0.1v14.3c0,0.2,0.1,0.3,0.3,0.3h5.2
                                    c0.2,0,0.3-0.1,0.3-0.3V958c0-0.1-0.1-0.3-0.3-0.3h-1.2c-0.1,0-0.2,0.1-0.2,0.2L688.3,967.1z"/>
                            </g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M688,1010.6l5.1,9.2c0.1,0.2,0.3,0.3,0.5,0.3
                                    h0.2c0.3,0,0.6-0.3,0.6-0.6v-33.2c0-0.3-0.3-0.6-0.6-0.6h-5.2c-0.3,0-0.6,0.3-0.6,0.6v24C687.9,1010.4,688,1010.5,688,1010.6z"
                                    />
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M693.8,1020.5h-0.2c-0.3,0-0.7-0.2-0.8-0.5
                                    l-5.1-9.2c-0.1-0.1-0.1-0.2-0.1-0.4v-24c0-0.5,0.4-0.9,0.9-0.9h5.2c0.5,0,0.9,0.4,0.9,0.9v33.2
                                    C694.7,1020.1,694.3,1020.5,693.8,1020.5z M688.3,1010.5l5.1,9.2c0.1,0.1,0.1,0.2,0.2,0.2h0.2c0.1,0,0.3-0.1,0.3-0.3v-33.2
                                    c0-0.2-0.1-0.3-0.3-0.3h-5.2c-0.2,0-0.3,0.1-0.3,0.3v24C688.2,1010.4,688.2,1010.4,688.3,1010.5z"/>
                            </g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M687.9,1019.6c0-0.2,0.2-0.2,0.3-0.1
                                    c1.3,2.3,6.1,10.3,6.1,10.5v22.2c0,0.4-0.5,0.5-0.7,0.2c-1.7-2.3-5.7-7.9-5.7-8.1C687.9,1044.4,687.9,1023.5,687.9,1019.6z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M694,1053c-0.2,0-0.4-0.1-0.6-0.3
                                    c-0.1-0.1-5.8-7.8-5.8-8.3c0-0.2,0-20.9,0-24.8c0-0.2,0.1-0.4,0.4-0.5c0.2-0.1,0.4,0,0.5,0.2c0.6,1.2,2.2,3.8,3.6,6.2
                                    c2.5,4.3,2.5,4.3,2.5,4.5v22.2c0,0.3-0.2,0.6-0.5,0.7C694.1,1052.9,694,1053,694,1053z M688.2,1044.3c0.3,0.6,3.7,5.4,5.7,8
                                    c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1-0.1v-22.2c-0.2-0.3-1.3-2.3-2.5-4.2c-1.2-2.1-2.6-4.4-3.4-5.7
                                    C688.2,1025,688.2,1043.1,688.2,1044.3z M688.2,1019.6L688.2,1019.6C688.2,1019.6,688.2,1019.6,688.2,1019.6
                                    C688.2,1019.6,688.2,1019.6,688.2,1019.6z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M632.5,967l-4.1-9.2
                                    c-0.1-0.2-0.3-0.3-0.5-0.3h-1.2c-0.3,0-0.6,0.3-0.6,0.6v23.6c0,0.3,0.3,0.6,0.6,0.6h5.2c0.3,0,0.6-0.3,0.6-0.6v-14.3
                                    C632.6,967.2,632.6,967.1,632.5,967z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M632,982.5h-5.2c-0.5,0-0.9-0.4-0.9-0.9V958
                                    c0-0.5,0.4-0.9,0.9-0.9h1.2c0.3,0,0.7,0.2,0.8,0.5l4.1,9.2c0.1,0.1,0.1,0.2,0.1,0.4v14.3C632.9,982.1,632.5,982.5,632,982.5z
                                    M626.7,957.7c-0.1,0-0.3,0.1-0.3,0.3v23.6c0,0.2,0.1,0.3,0.3,0.3h5.2c0.2,0,0.3-0.1,0.3-0.3v-14.3c0,0,0-0.1,0-0.1l-4.1-9.2
                                    c0-0.1-0.1-0.2-0.2-0.2H626.7z"/>
                            </g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M632.5,1010.6l-5.1,9.2
                                    c-0.1,0.2-0.3,0.3-0.5,0.3h-0.2c-0.3,0-0.6-0.3-0.6-0.6v-33.2c0-0.3,0.3-0.6,0.6-0.6h5.2c0.3,0,0.6,0.3,0.6,0.6v24
                                    C632.6,1010.4,632.6,1010.5,632.5,1010.6z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M626.9,1020.5h-0.2c-0.5,0-0.9-0.4-0.9-0.9
                                    v-33.2c0-0.5,0.4-0.9,0.9-0.9h5.2c0.5,0,0.9,0.4,0.9,0.9v24c0,0.1,0,0.2-0.1,0.4l0,0l-5.1,9.2
                                    C627.5,1020.3,627.2,1020.5,626.9,1020.5z M626.8,986.1c-0.2,0-0.3,0.1-0.3,0.3v33.2c0,0.1,0.1,0.3,0.3,0.3h0.2
                                    c0.1,0,0.2-0.1,0.2-0.2l5.2-9.2c0,0,0-0.1,0-0.1v-24c0-0.2-0.1-0.3-0.3-0.3H626.8z"/>
                            </g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M632.6,1019.6c0-0.2-0.2-0.2-0.3-0.1
                                    c-1.3,2.3-6.1,10.3-6.1,10.5v22.2c0,0.4,0.5,0.5,0.7,0.2c1.7-2.3,5.7-7.9,5.7-8.1C632.6,1044.4,632.6,1023.5,632.6,1019.6z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M626.6,1053c-0.1,0-0.1,0-0.2,0
                                    c-0.3-0.1-0.5-0.4-0.5-0.7V1030c0-0.2,0-0.2,2.5-4.4c1.4-2.3,3-5,3.6-6.2c0.1-0.2,0.3-0.3,0.5-0.2c0.2,0.1,0.4,0.2,0.4,0.5v0
                                    c0,3.9,0,24.6,0,24.8c0,0.4-5.7,8.2-5.8,8.3C627,1052.9,626.8,1053,626.6,1053z M626.5,1030.1v22.2c0,0.1,0,0.1,0.1,0.1
                                    c0,0,0.1,0,0.1,0c1.9-2.6,5.3-7.4,5.7-8c0-1.2,0-19.4,0-24.2c-0.8,1.3-2.1,3.7-3.4,5.7C627.8,1027.8,626.6,1029.7,626.5,1030.1
                                    z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M688.1,1065c-18.3,4.7-37.4,4.7-55.7,0
                                    c1.3-5,2.6-10,3.8-15c15.8,4.1,32.3,4.1,48.1,0C685.6,1055,686.8,1060,688.1,1065z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M660.3,1068.8c-9.4,0-18.8-1.2-27.9-3.5
                                    l-0.3-0.1l4-15.6l0.3,0.1c15.7,4,32.2,4,47.9,0l0.3-0.1l4,15.6l-0.3,0.1C679.1,1067.6,669.7,1068.8,660.3,1068.8z
                                    M632.8,1064.8c18,4.6,37,4.6,55,0l-3.7-14.4c-15.6,4-32,4-47.6,0L632.8,1064.8z"/>
                            </g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M688.1,1065c-18.3,4.7-37.4,4.7-55.7,0
                                    c1.3-5,2.6-10,3.8-15c15.8,4.1,32.3,4.1,48.1,0C685.6,1055,686.8,1060,688.1,1065z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M660.3,1068.8c-9.4,0-18.8-1.2-27.9-3.5
                                    l-0.3-0.1l4-15.6l0.3,0.1c15.7,4,32.2,4,47.9,0l0.3-0.1l4,15.6l-0.3,0.1C679.1,1067.6,669.7,1068.8,660.3,1068.8z
                                    M632.8,1064.8c18,4.6,37,4.6,55,0l-3.7-14.4c-15.6,4-32,4-47.6,0L632.8,1064.8z"/>
                            </g>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M696.7,956.9h9.5c0,0,0.5-6-9.5-5.4V956.9z"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M706.5,957.2h-10.1v-6l0.3,0
                                c4-0.2,6.8,0.6,8.4,2.3c1.6,1.6,1.4,3.4,1.4,3.5L706.5,957.2z M697,956.6h8.9c0-0.5-0.2-1.7-1.2-2.8c-1.5-1.5-4.1-2.2-7.7-2.1
                                V956.6z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M624.2,956.9h-9.5c0,0-0.5-6,9.5-5.4V956.9z"
                                />
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M624.5,957.2h-10.1l0-0.3
                                c0-0.1-0.1-1.9,1.4-3.5c1.6-1.7,4.5-2.5,8.4-2.3l0.3,0V957.2z M614.9,956.6h8.9v-4.8c-3.6-0.1-6.2,0.6-7.7,2.1
                                C615.2,954.9,615,956.1,614.9,956.6z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M680.7,900c0,0-2.5,25.8,10,37.9"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M690.7,938.3c-0.1,0-0.2,0-0.2-0.1
                                c-12.5-12.1-10.2-37.9-10.1-38.2c0-0.2,0.2-0.3,0.3-0.3c0.2,0,0.3,0.2,0.3,0.3c0,0.3-2.3,25.8,9.9,37.7c0.1,0.1,0.1,0.3,0,0.4
                                C690.9,938.2,690.8,938.3,690.7,938.3z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M689.6,904.2c0,0-1,21.5,6.3,37.1"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M695.9,941.6c-0.1,0-0.2-0.1-0.3-0.2
                                c-7.3-15.5-6.3-37.1-6.3-37.3c0-0.2,0.1-0.3,0.3-0.3c0.2,0,0.3,0.2,0.3,0.3c0,0.2-0.9,21.6,6.3,37c0.1,0.2,0,0.3-0.1,0.4
                                C696,941.6,695.9,941.6,695.9,941.6z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M680.7,900c0,0-2.5,25.8,10,37.9"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M690.7,938.3c-0.1,0-0.2,0-0.2-0.1
                                c-12.5-12.1-10.2-37.9-10.1-38.2c0-0.2,0.2-0.3,0.3-0.3c0.2,0,0.3,0.2,0.3,0.3c0,0.3-2.3,25.8,9.9,37.7c0.1,0.1,0.1,0.3,0,0.4
                                C690.9,938.2,690.8,938.3,690.7,938.3z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M689.6,904.2c0,0-1,21.5,6.3,37.1"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M695.9,941.6c-0.1,0-0.2-0.1-0.3-0.2
                                c-7.3-15.5-6.3-37.1-6.3-37.3c0-0.2,0.1-0.3,0.3-0.3c0.2,0,0.3,0.2,0.3,0.3c0,0.2-0.9,21.6,6.3,37c0.1,0.2,0,0.3-0.1,0.4
                                C696,941.6,695.9,941.6,695.9,941.6z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M699.7,907.7c0,0-3.8-0.2-8.4-5.1
                                c-4.6-4.9-10.2-4.4-10.2-4.4l1.9-5.6c0,0,1.6,0.7,1.6,0.7c4,1.9,6.8,4.1,9.2,6.1c2.5,2,4.2,4.4,5.5,7.2
                                C699.4,907,699.6,907.4,699.7,907.7z"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M699.7,908.1
                                C699.6,908.1,699.6,908.1,699.7,908.1c-0.2,0-4-0.2-8.7-5.2c-4.5-4.8-9.9-4.3-10-4.3c-0.1,0-0.2,0-0.3-0.1
                                c-0.1-0.1-0.1-0.2-0.1-0.3l1.9-5.6c0-0.1,0.1-0.1,0.2-0.2c0.1,0,0.2,0,0.2,0c0,0,1.5,0.6,1.6,0.7c0,0,0,0,0,0
                                c4.1,1.9,6.9,4.2,9.3,6.1c2.5,2.1,4.3,4.5,5.5,7.3c0.1,0.2,0.1,0.3,0.2,0.4c0.1,0.3,0.2,0.6,0.3,0.8c0,0.1,0,0.2-0.1,0.3
                                C699.8,908,699.7,908.1,699.7,908.1z M681.5,897.9c1.5,0,6.1,0.4,10,4.5c3.5,3.8,6.6,4.7,7.8,4.9c0-0.1-0.1-0.2-0.1-0.3
                                c-0.1-0.1-0.1-0.3-0.2-0.4c-1.2-2.8-2.9-5.1-5.4-7.1c-2.3-1.9-5.2-4.2-9.2-6.1l0,0c-0.1-0.1-0.5-0.2-1.3-0.5L681.5,897.9
                                C681.4,897.9,681.4,897.9,681.5,897.9z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M679.6,891.1l-1,4.1c0,0-8.7-2.1-18.1-2.2
                                c-9.4,0.1-18.1,2.2-18.1,2.2l-0.9-3.9c5.6-2,12.3-3.4,20.3-3.4C668.7,887.9,674.6,889.2,679.6,891.1z"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M678.7,895.5
                                C678.6,895.5,678.6,895.5,678.7,895.5c-0.2,0-8.9-2.1-18.1-2.2c-9.2,0.1-17.9,2.2-18,2.2c-0.1,0-0.2,0-0.2,0
                                c-0.1,0-0.1-0.1-0.1-0.2l-0.9-3.9c0-0.2,0-0.3,0.2-0.4c6.3-2.3,13.1-3.5,20.4-3.5c6.3,0,12.3,1.1,17.9,3.2
                                c0.1,0.1,0.2,0.2,0.2,0.4l-1,4.1C678.9,895.4,678.8,895.5,678.7,895.5z M660.6,892.7c8.3,0.1,16.3,1.8,17.9,2.2l0.9-3.6
                                c-5.5-2.1-11.4-3.1-17.4-3.1c-7.1,0-13.8,1.1-19.9,3.3l0.8,3.3C644.3,894.5,652.2,892.8,660.6,892.7z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M639.3,900c0,0,2.5,25.8-10,37.9"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M629.3,938.3c-0.1,0-0.2,0-0.2-0.1
                                c-0.1-0.1-0.1-0.3,0-0.4c12.3-11.9,10-37.4,9.9-37.7c0-0.2,0.1-0.3,0.3-0.3c0.2,0,0.3,0.1,0.3,0.3c0,0.3,2.4,26.1-10.1,38.2
                                C629.4,938.2,629.4,938.3,629.3,938.3z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M630.5,904.2c0,0,1,21.5-6.3,37.1"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M624.2,941.6c0,0-0.1,0-0.1,0
                                c-0.2-0.1-0.2-0.3-0.1-0.4c7.2-15.4,6.3-36.8,6.3-37c0-0.2,0.1-0.3,0.3-0.3c0.2,0,0.3,0.1,0.3,0.3c0,0.2,0.9,21.7-6.3,37.3
                                C624.4,941.5,624.3,941.6,624.2,941.6z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M639.5,898.1c0,0-5.6-0.5-10.2,4.4
                                c-4.1,4.4-7.3,4.9-8,4.9c1.2-3.2,3.3-6.1,6.1-8.3c2.6-2.1,6-4.3,10.1-6.2c0.2,0,0.3,0,0.3,0L639.5,898.1z"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M621.3,907.8c-0.1,0-0.2,0-0.2-0.1
                                c-0.1-0.1-0.1-0.2,0-0.3c1.3-3.3,3.4-6.2,6.2-8.4c3.1-2.4,6.5-4.5,10.1-6.2c0,0,0.1,0,0.1,0l0.3,0c0.1,0,0.3,0.1,0.3,0.2
                                l1.7,5.1c0,0.1,0,0.2-0.1,0.3c-0.1,0.1-0.2,0.1-0.3,0.1c-0.1,0-5.5-0.4-10,4.3C625.3,907.3,621.9,907.7,621.3,907.8
                                C621.3,907.8,621.3,907.8,621.3,907.8z M637.5,893.3c-3.6,1.7-6.9,3.7-10,6.1c-2.5,2-4.5,4.7-5.8,7.7c1.2-0.2,3.9-1.2,7.3-4.8
                                c4-4.2,8.6-4.6,10-4.6L637.5,893.3L637.5,893.3z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M699.7,1062c0,0-10.4-1-9.2,9.3
                                C690.5,1071.3,697.9,1068.4,699.7,1062z"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M690.2,1071.7l0-0.4c-0.3-3.1,0.3-5.5,1.9-7.2
                                c2.8-2.9,7.4-2.5,7.6-2.4l0.4,0l-0.1,0.4c-1.7,6.4-9.1,9.4-9.4,9.5L690.2,1071.7z M699,1062.3c-1.3,0-4.5,0.2-6.5,2.3
                                c-1.4,1.5-2,3.6-1.8,6.3c1.5-0.7,6.9-3.5,8.5-8.5C699.2,1062.3,699.1,1062.3,699,1062.3z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M631,1071.3c0,0,0.5-10.5-9.6-8.8
                                C621.4,1062.5,624.6,1069.9,631,1071.3z"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M631.3,1071.7l-0.4-0.1
                                c-6.5-1.5-9.7-8.7-9.9-9l-0.2-0.4l0.4-0.1c3-0.5,5.5,0,7.2,1.6c3,2.7,2.8,7.4,2.8,7.6L631.3,1071.7z M621.8,1062.7
                                c0.7,1.5,3.8,6.8,8.9,8.2c0-1.1-0.3-4.6-2.6-6.7C626.6,1062.9,624.5,1062.4,621.8,1062.7z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M827.3,989.4l-5.1-0.5l0.7-71.8
                                c0-7.3-4.9-16.7-10.9-20.8c-6.2-4.2-14.6-7.6-27.3-7.6c-13.8,0-21.3,3-29.4,8c-4.9,3-8.9,10.2-8.9,16l0.7,76.2l-5.5,0.5
                                c-2.9,0.3-5.1,3-4.7,5.9h0.6l9.6-1l0.5,62.9c0,9.9,4.9,18.7,14.2,21.9l3.1,1.1c12.8,4.5,26.8,4.5,39.6,0h0
                                c11.1-3.9,17.2-14.4,17.2-26.3l0.6-59.6l9.3,1h0.6C832.3,992.3,830.2,989.7,827.3,989.4z"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M784.5,1083.8c-6.7,0-13.5-1.1-19.9-3.4
                                l-3.1-1.1c-8.9-3.1-14.4-11.6-14.4-22.2l-0.5-62.6l-9.3,1l-0.7,0c-0.2,0-0.3-0.1-0.3-0.3c-0.3-3.1,1.9-5.9,5-6.2l5.2-0.5
                                l-0.7-75.9c0-5.9,4-13.1,9-16.2c8.2-5.1,15.7-8.1,29.6-8.1c10.9,0,19.9,2.5,27.5,7.7c6.1,4.1,11.1,13.6,11.1,21l-0.7,71.5
                                l4.9,0.5c0,0,0,0,0,0c3.1,0.3,5.3,3.1,5,6.2c0,0.2-0.1,0.3-0.3,0.3h-0.6l-9-1l-0.5,59.3c0,12.6-6.7,22.8-17.4,26.6
                                C798,1082.7,791.3,1083.8,784.5,1083.8z M747,993.9c0.1,0,0.1,0,0.2,0.1c0.1,0.1,0.1,0.1,0.1,0.2l0.6,62.9
                                c0,10.4,5.4,18.7,14,21.7l3.1,1.1c12.7,4.4,26.7,4.4,39.4,0c10.5-3.7,17-13.6,17-26l0.6-59.6c0-0.1,0-0.2,0.1-0.2
                                c0.1-0.1,0.2-0.1,0.2-0.1l9.3,1l0.3,0c0.1-2.7-1.8-5-4.5-5.3l-5.1-0.5c-0.2,0-0.3-0.1-0.3-0.3l0.7-71.8
                                c0-7.3-4.8-16.5-10.8-20.5c-7.5-5.1-16.4-7.6-27.2-7.6c-13.7,0-21.1,2.9-29.3,8c-4.8,3-8.7,10-8.7,15.7l0.7,76.2
                                c0,0.2-0.1,0.3-0.3,0.3l-5.5,0.5c-1.3,0.1-2.5,0.8-3.4,1.9c-0.8,1-1.2,2.2-1.1,3.4h0.4L747,993.9
                                C746.9,993.9,746.9,993.9,747,993.9z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M805.3,984.3c-14.3-4.7-27.3-4.7-41.6,0
                                c-1.2-3-2.9-6.5-4.8-9c16.6-5.4,34.7-5.4,51.2,0C808.2,978.3,806.9,980.8,805.3,984.3z"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M763.7,984.6c-0.1,0-0.2-0.1-0.3-0.2
                                c-1.4-3.6-3.2-6.8-4.8-8.9c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.1,0.1-0.2,0.2-0.2c16.6-5.4,34.9-5.4,51.4,0c0.1,0,0.2,0.1,0.2,0.2
                                c0,0.1,0,0.2,0,0.3c-2,3.1-3.3,5.6-4.8,9c-0.1,0.1-0.2,0.2-0.4,0.2C791.1,979.9,777.9,979.9,763.7,984.6
                                C763.8,984.6,763.8,984.6,763.7,984.6z M784.5,980.5c6.8,0,13.6,1.1,20.6,3.4c1.4-3.1,2.7-5.6,4.5-8.5c-16.2-5.2-34-5.2-50.3,0
                                c2.1,2.8,3.7,6.4,4.5,8.5C770.9,981.6,777.7,980.5,784.5,980.5z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M763.7,1036.1c16.7,4.6,26.6,3.5,41.6,0
                                c1.2,5.3,2.9,9.7,4.8,14.1c-16.6,9.6-34.7,9.6-51.2,0C760.9,1044.8,762.1,1042.3,763.7,1036.1z"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M784.5,1057.6c-8.7,0-17.5-2.4-25.8-7.2
                                c-0.1-0.1-0.2-0.2-0.1-0.4c0.5-1.4,1-2.7,1.5-3.8c1.2-3.2,2.2-5.7,3.4-10.2c0-0.1,0.1-0.1,0.1-0.2c0.1,0,0.2-0.1,0.2,0
                                c16.4,4.5,26,3.6,41.4,0c0.1,0,0.2,0,0.2,0c0.1,0,0.1,0.1,0.1,0.2c1.1,5.1,2.8,9.3,4.8,14c0.1,0.1,0,0.3-0.1,0.4
                                C802,1055.2,793.3,1057.6,784.5,1057.6z M759.3,1050c16.3,9.3,34.2,9.3,50.5,0c-2-4.6-3.6-8.7-4.7-13.6c-14.9,3.5-25,4.4-41.1,0
                                c-1.1,4.4-2.1,6.9-3.3,10C760.2,1047.6,759.8,1048.7,759.3,1050z"/>
                        </g>
                        <g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M813.7,990.2v-13.8l-5.4,10.4
                                    c0,0-0.1,1.3-0.1,3.4H813.7z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M813.7,990.5h-5.5c-0.1,0-0.2,0-0.2-0.1
                                    c-0.1-0.1-0.1-0.1-0.1-0.2c0-2.1,0.1-3.4,0.1-3.4c0,0,0-0.1,0-0.1l5.4-10.4c0.1-0.1,0.2-0.2,0.3-0.2c0.1,0,0.2,0.2,0.2,0.3
                                    v13.8C814,990.3,813.9,990.5,813.7,990.5z M808.5,989.9h4.9v-12.3l-4.8,9.2C808.6,987.1,808.6,988.2,808.5,989.9z"/>
                            </g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M813.7,992.6h-5.5c-0.1,6.9,0,20.6,1.9,32.7
                                    h3.7V992.6z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M813.7,1025.6h-3.7c-0.2,0-0.3-0.1-0.3-0.3
                                    c-1.8-12.2-2-25.8-1.9-32.8c0-0.2,0.1-0.3,0.3-0.3h5.5c0.2,0,0.3,0.1,0.3,0.3v32.7C814,1025.5,813.9,1025.6,813.7,1025.6z
                                    M810.3,1025h3.1v-32.1h-4.9C808.4,999.9,808.6,1013.1,810.3,1025z"/>
                            </g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M810.3,1027.8c0.8,5,1.9,9.8,3.5,13.7v-13.7
                                    H810.3z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M813.7,1041.8c-0.1,0-0.2-0.1-0.3-0.2
                                    c-1.4-3.6-2.6-8.2-3.5-13.7c0-0.1,0-0.2,0.1-0.2c0.1-0.1,0.1-0.1,0.2-0.1h3.5c0.2,0,0.3,0.1,0.3,0.3v13.7
                                    C814,1041.6,813.9,1041.7,813.7,1041.8C813.8,1041.8,813.8,1041.8,813.7,1041.8z M810.6,1028.1c0.8,4.6,1.7,8.5,2.8,11.7v-11.7
                                    H810.6z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M755.7,990.2v-13.8l5.4,10.4
                                    c0,0,0.1,1.3,0.1,3.4H755.7z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M761.2,990.5h-5.5c-0.2,0-0.3-0.1-0.3-0.3
                                    v-13.8c0-0.1,0.1-0.3,0.2-0.3c0.1,0,0.3,0,0.3,0.2l5.4,10.4c0,0,0,0.1,0,0.1c0,0,0.1,1.3,0.1,3.4c0,0.1,0,0.2-0.1,0.2
                                    C761.4,990.4,761.3,990.5,761.2,990.5z M756,989.9h4.9c0-1.7-0.1-2.8-0.1-3l-4.8-9.2V989.9z"/>
                            </g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M755.7,992.6h5.5c0.1,6.9,0,20.6-1.9,32.7
                                    h-3.7V992.6z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M759.4,1025.6h-3.7c-0.2,0-0.3-0.1-0.3-0.3
                                    v-32.7c0-0.2,0.1-0.3,0.3-0.3h5.5c0.2,0,0.3,0.1,0.3,0.3c0.1,7,0,20.6-1.9,32.8C759.7,1025.5,759.6,1025.6,759.4,1025.6z
                                    M756,1025h3.1c1.8-11.9,1.9-25.1,1.8-32.1H756V1025z"/>
                            </g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M759.2,1027.8c-0.8,5-1.9,9.8-3.5,13.7v-13.7
                                    H759.2z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M755.7,1041.8
                                    C755.7,1041.8,755.7,1041.8,755.7,1041.8c-0.2,0-0.3-0.2-0.3-0.3v-13.7c0-0.2,0.1-0.3,0.3-0.3h3.5c0.1,0,0.2,0,0.2,0.1
                                    c0.1,0.1,0.1,0.2,0.1,0.2c-0.9,5.5-2.1,10.1-3.5,13.7C756,1041.7,755.9,1041.8,755.7,1041.8z M756,1028.1v11.7
                                    c1.1-3.2,2.1-7.1,2.8-11.7H756z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M800.7,901.7c-10.7-3.9-22.4-3.9-33.1,0
                                    c-0.7-2-1.4-4-2.2-6c12.1-4.4,25.4-4.4,37.5,0C802.2,897.7,801.4,899.7,800.7,901.7z"/>
                            </g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M767.6,902c-0.1,0-0.2-0.1-0.3-0.2l-2.2-6
                                    c0-0.1,0-0.2,0-0.2c0-0.1,0.1-0.1,0.2-0.2c12.2-4.4,25.5-4.4,37.7,0c0.2,0.1,0.2,0.2,0.2,0.4l-2.2,6c0,0.1-0.1,0.1-0.2,0.2
                                    c-0.1,0-0.2,0-0.2,0c-10.6-3.8-22.3-3.8-32.9,0C767.7,902,767.6,902,767.6,902z M765.8,895.9l2,5.5c10.6-3.7,22.2-3.7,32.8,0
                                    l2-5.5C790.7,891.7,777.7,891.7,765.8,895.9z"/>
                            </g>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M813.9,911.9c-1.9-3.4-5.3-6.5-9.8-8.3
                                c-0.5-0.2-0.8-0.6-0.6-1.1c0.3-1,0.8-2,1.2-3c0.5-1.2,3.3-1.8,4.5-1c4.5,2.7,7.7,6.5,9.4,10.5c0.2,0.5,0.1,0.9-0.3,1.3
                                c-0.7,0.6-1.4,1.3-2,2C815.7,912.9,814.4,912.8,813.9,911.9z"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M815.2,913c-0.1,0-0.1,0-0.2,0
                                c-0.6-0.1-1.1-0.4-1.4-0.9c0,0,0,0,0,0c-2-3.6-5.4-6.5-9.6-8.2c-0.7-0.3-1-0.9-0.8-1.5c0.4-1,0.8-2,1.3-3c0.3-0.6,1-1.1,1.9-1.4
                                c1.1-0.3,2.3-0.3,3,0.2c4.3,2.6,7.7,6.4,9.5,10.6c0.2,0.6,0.1,1.2-0.4,1.6c-0.7,0.6-1.3,1.3-1.9,2
                                C816.2,912.7,815.7,913,815.2,913z M814.1,911.7c0.2,0.4,0.5,0.6,0.9,0.6c0.4,0,0.8-0.1,1.1-0.4c0.6-0.7,1.3-1.4,2-2
                                c0.3-0.2,0.3-0.6,0.2-0.9c-1.7-4.1-5-7.8-9.3-10.3c-0.6-0.4-1.6-0.4-2.5-0.1c-0.8,0.2-1.3,0.6-1.5,1c-0.5,1-0.9,2-1.2,3
                                c-0.1,0.4,0.2,0.6,0.4,0.8C808.6,905.1,812.1,908,814.1,911.7z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M754.5,911.9c1.9-3.4,5.3-6.5,9.8-8.3
                                c0.5-0.2,0.8-0.6,0.6-1.1c-0.3-1-0.8-2-1.2-3c-0.5-1.2-3.3-1.8-4.5-1c-4.5,2.7-7.7,6.5-9.4,10.5c-0.2,0.5-0.1,0.9,0.3,1.3
                                c0.7,0.6,1.4,1.3,2,2C752.7,912.9,754,912.8,754.5,911.9z"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M753.2,913c-0.5,0-1-0.2-1.4-0.6
                                c-0.6-0.7-1.2-1.4-1.9-2c-0.5-0.4-0.6-1-0.4-1.6c1.8-4.2,5.2-8,9.5-10.6c0.7-0.4,1.9-0.5,3-0.2c0.9,0.3,1.6,0.8,1.9,1.4
                                c0.5,1,0.9,2,1.3,3c0.2,0.6-0.1,1.2-0.8,1.5c-4.2,1.7-7.6,4.6-9.6,8.2c0,0,0,0,0,0c-0.3,0.5-0.8,0.9-1.4,0.9
                                C753.3,913,753.2,913,753.2,913z M760.6,898.3c-0.5,0-1,0.1-1.3,0.3c-4.2,2.6-7.5,6.2-9.3,10.3c-0.1,0.3-0.1,0.7,0.2,0.9
                                c0.7,0.6,1.4,1.3,2,2c0.3,0.3,0.6,0.5,1,0.4c0.4,0,0.7-0.3,0.9-0.6c2.1-3.7,5.6-6.7,9.9-8.4c0.3-0.1,0.6-0.3,0.4-0.8
                                c-0.3-1-0.8-2-1.2-3c-0.2-0.4-0.8-0.8-1.5-1C761.4,898.4,761,898.3,760.6,898.3z M754.5,911.9L754.5,911.9L754.5,911.9z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M795.5,1078.3c-7.1,2.6-14.9,2.6-22,0
                                c0.4-1.2,0.9-2.4,1.3-3.5c6.3,2.3,13.2,2.3,19.5,0C794.6,1075.9,795.1,1077.1,795.5,1078.3z"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M784.5,1080.5c-3.8,0-7.5-0.6-11.1-1.9
                                c-0.2-0.1-0.2-0.2-0.2-0.4l1.3-3.5c0-0.1,0.1-0.1,0.2-0.2c0.1,0,0.2,0,0.2,0c6.2,2.2,13,2.2,19.2,0c0.2-0.1,0.3,0,0.4,0.2
                                l1.3,3.5c0,0.1,0,0.2,0,0.2c0,0.1-0.1,0.1-0.2,0.2C792,1079.8,788.2,1080.5,784.5,1080.5z M773.9,1078.1
                                c6.9,2.4,14.4,2.4,21.2,0l-1.1-3c-6.2,2.1-12.9,2.1-19.1,0L773.9,1078.1z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M760,1064.7c1.7,3,4.6,5.7,8.6,7.3
                                c0.5,0.2,0.7,0.6,0.5,1c-0.3,0.9-0.7,1.8-1.1,2.7c-0.5,1.1-2.9,1.6-4,0.9c-4-2.4-6.8-5.8-8.3-9.3c-0.2-0.4-0.1-0.8,0.2-1.1
                                c0.6-0.6,1.2-1.2,1.7-1.8C758.5,1063.7,759.6,1063.8,760,1064.7z"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M765.4,1077.2c-0.5,0-1-0.1-1.4-0.4
                                c-3.8-2.3-6.8-5.7-8.4-9.4c-0.2-0.5-0.1-1.1,0.3-1.5c0.6-0.5,1.2-1.1,1.7-1.7c0.4-0.4,0.9-0.6,1.4-0.6c0.5,0.1,1,0.4,1.3,0.8
                                c0,0,0,0,0,0c1.8,3.1,4.8,5.7,8.5,7.2c0.6,0.3,0.9,0.8,0.7,1.4c-0.3,0.9-0.7,1.8-1.1,2.7c-0.2,0.5-0.9,1-1.7,1.2
                                C766.3,1077.1,765.9,1077.2,765.4,1077.2z M758.9,1064.3c-0.3,0-0.6,0.1-0.8,0.4c-0.5,0.6-1.1,1.2-1.8,1.8
                                c-0.2,0.2-0.3,0.5-0.2,0.8c1.5,3.6,4.4,6.9,8.2,9.1c0.5,0.3,1.4,0.4,2.2,0.1c0.7-0.2,1.2-0.5,1.3-0.9c0.4-0.9,0.8-1.7,1.1-2.6
                                c0.1-0.3,0-0.5-0.4-0.6c-3.9-1.6-7-4.2-8.8-7.5c-0.2-0.3-0.5-0.5-0.8-0.5C758.9,1064.3,758.9,1064.3,758.9,1064.3z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M808.9,1064.7c-1.7,3-4.6,5.7-8.6,7.3
                                c-0.5,0.2-0.7,0.6-0.5,1c0.3,0.9,0.7,1.8,1.1,2.7c0.5,1.1,2.9,1.6,4,0.9c4-2.4,6.8-5.8,8.3-9.3c0.2-0.4,0.1-0.8-0.2-1.1
                                c-0.6-0.6-1.2-1.2-1.7-1.8C810.5,1063.7,809.4,1063.8,808.9,1064.7z"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M803.6,1077.2c-0.5,0-0.9-0.1-1.3-0.2
                                c-0.8-0.3-1.5-0.7-1.7-1.2c-0.4-0.9-0.8-1.8-1.1-2.7c-0.2-0.6,0.1-1.1,0.7-1.4c3.7-1.5,6.7-4.1,8.5-7.2c0,0,0,0,0,0
                                c0.3-0.5,0.7-0.8,1.3-0.8c0.5-0.1,1.1,0.1,1.4,0.6c0.5,0.6,1.1,1.2,1.7,1.7c0.4,0.4,0.5,0.9,0.3,1.5c-1.6,3.7-4.6,7.1-8.4,9.4
                                C804.6,1077.1,804.1,1077.2,803.6,1077.2z M809.2,1064.8c-1.8,3.3-4.9,5.9-8.8,7.5c-0.3,0.1-0.5,0.3-0.4,0.6
                                c0.3,0.9,0.7,1.8,1.1,2.6c0.2,0.4,0.7,0.7,1.3,0.9c0.8,0.3,1.7,0.2,2.2-0.1c3.7-2.3,6.6-5.5,8.2-9.1c0.1-0.3,0.1-0.6-0.2-0.8
                                c-0.6-0.6-1.2-1.2-1.8-1.8c-0.2-0.3-0.6-0.4-0.9-0.4C809.7,1064.3,809.4,1064.5,809.2,1064.8z"/>
                        </g>
                    </g>
                    <g id="bath-sink_00000176721729780707761170000012096100811580577200_">
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M726,85.3c0.1-1.3,0.6-2.5,1.5-3.6l-3-0.5c-0.5,1.3-0.8,2.6-0.8,4.1c0.1,2.7,1,5,2.9,6.8c1.8,1.9,4.1,2.9,6.8,2.9
                            c2.8-0.1,5.1-1,6.9-2.9c1.9-1.8,2.9-4.1,2.9-6.8c-0.1-2.8-1-5.1-2.9-6.9c-1.8-1.9-4.1-2.9-6.9-2.9c-2.7,0.1-5,1-6.8,2.9
                            c-0.8,0.8-1.5,1.8-2.1,2.8c2.7-0.8,5.5-1.3,8.4-1.3l-0.3-1.9V78v-0.1c0-0.2,0.1-0.4,0.3-0.5c0.2-0.2,0.4-0.3,0.6-0.2
                            c0.2,0,0.4,0.1,0.6,0.2c0.1,0.2,0.2,0.4,0.2,0.6c0,0.2-0.1,0.4-0.3,0.6V80c2.8,0,5.6,0.4,8.3,1.3l-2.9,0.5c1,1.3,1.6,2.8,1.6,4.5
                            c0,1.7-0.5,3.2-1.6,4.6c-0.9,1.1-2,1.9-3.1,2.4c-1.2,0.5-2.4,0.6-3.8,0.4c-1.3-0.1-2.5-0.6-3.6-1.5c-1.1-0.9-1.9-2-2.4-3.1
                            C725.9,87.9,725.7,86.7,726,85.3z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M722.4,85.3c0.1,2,0.6,3.8,1.5,5.5c1,1.7,2.3,3,4,4c1.6,0.9,3.4,1.4,5.5,1.5c2.1-0.1,4-0.6,5.6-1.5c1.7-1,3-2.3,4-4
                            c0.9-1.6,1.4-3.4,1.5-5.5c-0.1-2-0.6-3.9-1.5-5.6c-1-1.7-2.3-3-4-3.9c-1.6-1-3.5-1.5-5.6-1.6c-2,0.1-3.8,0.6-5.5,1.6
                            c-1.7,0.9-3,2.2-4,3.9C722.9,81.5,722.5,83.3,722.4,85.3z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M735.6,79.5h1.5c0.1-0.1,0.2-0.2,0.3-0.3c-0.1-0.2-0.2-0.3-0.3-0.3h-1.4h-0.6c-0.2,0-0.3,0.1-0.3,0.3c0,0.1,0.1,0.2,0.3,0.3
                            H735.6c-0.1,0.1-0.2,0.2-0.3,0.3c-0.3,0.1-0.7,0-0.9-0.4c-0.1-0.4,0.1-0.7,0.4-0.9c0.4-0.1,0.7,0,0.9,0.4"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M739.3,81.8h-0.1c-1.7-0.3-3.5-0.6-5.2-0.6v2.9l-0.3,0.2h-0.5l-0.3-0.2v-2.9c-1.8,0.1-3.6,0.3-5.4,0.6"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M732.5,85.3c0.1,0.5,0.3,0.8,0.8,0.8c0.6-0.1,0.9-0.3,0.9-0.8c-0.1-0.6-0.4-0.9-0.9-0.9C732.8,84.5,732.5,84.8,732.5,85.3z"/>
                        
                            <line fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" x1="732.8" y1="81.1" x2="732.8" y2="80"/>
                        
                            <line fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" x1="733.9" y1="80" x2="733.9" y2="81.1"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M733.9,78.6l0.2-0.8c-0.2-0.2-0.5-0.3-0.8-0.4c-0.3,0.1-0.6,0.3-0.8,0.6"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M734.2,78c-0.1-0.1-0.1-0.1-0.1-0.2"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M730.9,79.5c0.3,0.3,0.6,0.5,0.9,0.3c0.4-0.2,0.6-0.5,0.4-0.9c-0.2-0.4-0.5-0.6-0.9-0.4c-0.1,0.1-0.3,0.2-0.4,0.4h0.7
                            c0.1,0,0.2,0.1,0.3,0.3c-0.1,0.1-0.2,0.2-0.3,0.3H730.9h-1.3c-0.2-0.1-0.3-0.2-0.3-0.3c0-0.2,0.1-0.3,0.3-0.3h1.3"/>
                    </g>
                    <g id="bath-sink_00000003105971468464311980000013812798624460338618_">
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M592.7,574.1c-1.3-0.1-2.5-0.6-3.6-1.5l-0.5,3c1.3,0.5,2.6,0.8,4.1,0.8c2.7-0.1,5-1,6.8-2.9c1.9-1.8,2.9-4.1,2.9-6.8
                            c-0.1-2.8-1-5.1-2.9-6.9c-1.8-1.9-4.1-2.9-6.8-2.9c-2.8,0.1-5.1,1-6.9,2.9c-1.9,1.8-2.9,4.1-2.9,6.9c0.1,2.7,1,5,2.9,6.8
                            c0.8,0.8,1.8,1.5,2.8,2.1c-0.8-2.7-1.3-5.5-1.3-8.4l-1.9,0.3h-0.1h-0.1c-0.2,0-0.4-0.1-0.5-0.3c-0.2-0.2-0.3-0.4-0.2-0.6
                            c0-0.2,0.1-0.4,0.2-0.6c0.2-0.1,0.4-0.2,0.6-0.2c0.2,0,0.4,0.1,0.6,0.3h1.4c0-2.8,0.4-5.6,1.3-8.3l0.5,2.9c1.3-1,2.8-1.6,4.5-1.6
                            s3.2,0.5,4.6,1.6c1.1,0.9,1.9,2,2.4,3.1c0.5,1.2,0.6,2.4,0.4,3.8c-0.1,1.3-0.6,2.5-1.5,3.6c-0.9,1.1-2,1.9-3.1,2.4
                            C595.3,574.1,594,574.3,592.7,574.1z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M592.7,577.6c2-0.1,3.8-0.6,5.5-1.5c1.7-1,3-2.3,4-4c0.9-1.6,1.4-3.4,1.5-5.5c-0.1-2.1-0.6-4-1.5-5.6c-1-1.7-2.3-3-4-4
                            c-1.6-0.9-3.4-1.4-5.5-1.5c-2,0.1-3.9,0.6-5.6,1.5c-1.7,1-3,2.3-3.9,4c-1,1.6-1.5,3.5-1.6,5.6c0.1,2,0.6,3.8,1.6,5.5
                            c0.9,1.7,2.2,3,3.9,4C588.8,577.1,590.7,577.6,592.7,577.6z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M586.8,564.4V563c-0.1-0.1-0.2-0.2-0.3-0.3c-0.2,0.1-0.3,0.2-0.3,0.3v1.4v0.6c0,0.2,0.1,0.3,0.3,0.3c0.1,0,0.2-0.1,0.3-0.3V564.4
                            c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.3,0,0.7-0.4,0.9c-0.4,0.1-0.7-0.1-0.9-0.4c-0.1-0.4,0-0.7,0.4-0.9"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M589.1,560.7v0.1c-0.3,1.7-0.6,3.5-0.6,5.2h2.9l0.2,0.3v0.5l-0.2,0.3h-2.9c0.1,1.8,0.3,3.6,0.6,5.4"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M592.7,567.6c0.5-0.1,0.8-0.3,0.8-0.8c-0.1-0.6-0.3-0.9-0.8-0.9c-0.6,0.1-0.9,0.4-0.9,0.9C591.8,567.2,592.1,567.5,592.7,567.6z"
                            />
                        
                            <line fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" x1="588.5" y1="567.3" x2="587.4" y2="567.3"/>
                        
                            <line fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" x1="587.4" y1="566.1" x2="588.5" y2="566.1"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M586,566.1l-0.8-0.2c-0.2,0.2-0.3,0.5-0.4,0.8c0.1,0.3,0.3,0.6,0.6,0.8"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M585.4,565.8c-0.1,0.1-0.1,0.1-0.2,0.1"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M586.8,569.1c0.3-0.3,0.5-0.6,0.3-0.9c-0.2-0.4-0.5-0.6-0.9-0.4c-0.4,0.2-0.6,0.5-0.4,0.9c0.1,0.1,0.2,0.3,0.4,0.4v-0.7
                            c0-0.1,0.1-0.2,0.3-0.3c0.1,0.1,0.2,0.2,0.3,0.3V569.1v1.3c-0.1,0.2-0.2,0.3-0.3,0.3c-0.2,0-0.3-0.1-0.3-0.3v-1.3"/>
                    </g>
                    <g id="bath-sink_00000133496733139575109190000004840029074944892813_">
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M592.7,615.4c-1.3-0.1-2.5-0.6-3.6-1.5l-0.5,3c1.3,0.5,2.6,0.8,4.1,0.8c2.7-0.1,5-1,6.8-2.9c1.9-1.8,2.9-4.1,2.9-6.8
                            c-0.1-2.8-1-5.1-2.9-6.9c-1.8-1.9-4.1-2.9-6.8-2.9c-2.8,0.1-5.1,1-6.9,2.9c-1.9,1.8-2.9,4.1-2.9,6.9c0.1,2.7,1,5,2.9,6.8
                            c0.8,0.8,1.8,1.5,2.8,2.1c-0.8-2.7-1.3-5.5-1.3-8.4l-1.9,0.3h-0.1h-0.1c-0.2,0-0.4-0.1-0.5-0.3c-0.2-0.2-0.3-0.4-0.2-0.6
                            c0-0.2,0.1-0.4,0.2-0.6c0.2-0.1,0.4-0.2,0.6-0.2c0.2,0,0.4,0.1,0.6,0.3h1.4c0-2.8,0.4-5.6,1.3-8.3l0.5,2.9c1.3-1,2.8-1.6,4.5-1.6
                            s3.2,0.5,4.6,1.6c1.1,0.9,1.9,2,2.4,3.1c0.5,1.2,0.6,2.4,0.4,3.8c-0.1,1.3-0.6,2.5-1.5,3.6c-0.9,1.1-2,1.9-3.1,2.4
                            C595.3,615.5,594,615.6,592.7,615.4z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M592.7,619c2-0.1,3.8-0.6,5.5-1.5c1.7-1,3-2.3,4-4c0.9-1.6,1.4-3.4,1.5-5.5c-0.1-2.1-0.6-4-1.5-5.6c-1-1.7-2.3-3-4-4
                            c-1.6-0.9-3.4-1.4-5.5-1.5c-2,0.1-3.9,0.6-5.6,1.5c-1.7,1-3,2.3-3.9,4c-1,1.6-1.5,3.5-1.6,5.6c0.1,2,0.6,3.8,1.6,5.5
                            c0.9,1.7,2.2,3,3.9,4C588.8,618.4,590.7,618.9,592.7,619z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M586.8,605.8v-1.5c-0.1-0.1-0.2-0.2-0.3-0.3c-0.2,0.1-0.3,0.2-0.3,0.3v1.4v0.6c0,0.2,0.1,0.3,0.3,0.3c0.1,0,0.2-0.1,0.3-0.3
                            V605.8c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.3,0,0.7-0.4,0.9c-0.4,0.1-0.7-0.1-0.9-0.4c-0.1-0.4,0-0.7,0.4-0.9"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M589.1,602.1v0.1c-0.3,1.7-0.6,3.5-0.6,5.2h2.9l0.2,0.3v0.5l-0.2,0.3h-2.9c0.1,1.8,0.3,3.6,0.6,5.4"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M592.7,608.9c0.5-0.1,0.8-0.3,0.8-0.8c-0.1-0.6-0.3-0.9-0.8-0.9c-0.6,0.1-0.9,0.4-0.9,0.9C591.8,608.6,592.1,608.8,592.7,608.9z"
                            />
                        
                            <line fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" x1="588.5" y1="608.6" x2="587.4" y2="608.6"/>
                        
                            <line fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" x1="587.4" y1="607.4" x2="588.5" y2="607.4"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M586,607.4l-0.8-0.2c-0.2,0.2-0.3,0.5-0.4,0.8c0.1,0.3,0.3,0.6,0.6,0.8"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M585.4,607.1c-0.1,0.1-0.1,0.1-0.2,0.1"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M586.8,610.5c0.3-0.3,0.5-0.6,0.3-0.9c-0.2-0.4-0.5-0.6-0.9-0.4c-0.4,0.2-0.6,0.5-0.4,0.9c0.1,0.1,0.2,0.3,0.4,0.4v-0.7
                            c0-0.1,0.1-0.2,0.3-0.3c0.1,0.1,0.2,0.2,0.3,0.3V610.5v1.3c-0.1,0.2-0.2,0.3-0.3,0.3c-0.2,0-0.3-0.1-0.3-0.3v-1.3"/>
                    </g>
                    <g id="bath-sink_00000129186757317008896290000015614415823630250423_">
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M773.1,85.3c0.1-1.3,0.6-2.5,1.5-3.6l-3-0.5c-0.5,1.3-0.8,2.6-0.8,4.1c0.1,2.7,1,5,2.9,6.8c1.8,1.9,4.1,2.9,6.8,2.9
                            c2.8-0.1,5.1-1,6.9-2.9c1.9-1.8,2.9-4.1,2.9-6.8c-0.1-2.8-1-5.1-2.9-6.9c-1.8-1.9-4.1-2.9-6.9-2.9c-2.7,0.1-5,1-6.8,2.9
                            c-0.8,0.8-1.5,1.8-2.1,2.8c2.7-0.8,5.5-1.3,8.4-1.3l-0.3-1.9V78v-0.1c0-0.2,0.1-0.4,0.3-0.5c0.2-0.2,0.4-0.3,0.6-0.2
                            c0.2,0,0.4,0.1,0.6,0.2c0.1,0.2,0.2,0.4,0.2,0.6c0,0.2-0.1,0.4-0.3,0.6V80c2.8,0,5.6,0.4,8.3,1.3l-2.9,0.5c1,1.3,1.6,2.8,1.6,4.5
                            c0,1.7-0.5,3.2-1.6,4.6c-0.9,1.1-2,1.9-3.1,2.4c-1.2,0.5-2.4,0.6-3.8,0.4c-1.3-0.1-2.5-0.6-3.6-1.5c-1.1-0.9-1.9-2-2.4-3.1
                            S772.9,86.7,773.1,85.3z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M769.5,85.3c0.1,2,0.6,3.8,1.5,5.5c1,1.7,2.3,3,4,4c1.6,0.9,3.4,1.4,5.5,1.5c2.1-0.1,4-0.6,5.6-1.5c1.7-1,3-2.3,4-4
                            c0.9-1.6,1.4-3.4,1.5-5.5c-0.1-2-0.6-3.9-1.5-5.6c-1-1.7-2.3-3-4-3.9c-1.6-1-3.5-1.5-5.6-1.6c-2,0.1-3.8,0.6-5.5,1.6
                            c-1.7,0.9-3,2.2-4,3.9C770.1,81.5,769.6,83.3,769.5,85.3z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M782.8,79.5h1.5c0.1-0.1,0.2-0.2,0.3-0.3c-0.1-0.2-0.2-0.3-0.3-0.3h-1.4h-0.6c-0.2,0-0.3,0.1-0.3,0.3c0,0.1,0.1,0.2,0.3,0.3
                            H782.8c-0.1,0.1-0.2,0.2-0.3,0.3c-0.3,0.1-0.7,0-0.9-0.4c-0.1-0.4,0.1-0.7,0.4-0.9c0.4-0.1,0.7,0,0.9,0.4"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M786.4,81.8h-0.1c-1.7-0.3-3.5-0.6-5.2-0.6v2.9l-0.3,0.2h-0.5l-0.3-0.2v-2.9c-1.8,0.1-3.6,0.3-5.4,0.6"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M779.6,85.3c0.1,0.5,0.3,0.8,0.8,0.8c0.6-0.1,0.9-0.3,0.9-0.8c-0.1-0.6-0.4-0.9-0.9-0.9C780,84.5,779.7,84.8,779.6,85.3z"/>
                        
                            <line fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" x1="779.9" y1="81.1" x2="779.9" y2="80"/>
                        
                            <line fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" x1="781.1" y1="80" x2="781.1" y2="81.1"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M781.1,78.6l0.2-0.8c-0.2-0.2-0.5-0.3-0.8-0.4c-0.3,0.1-0.6,0.3-0.8,0.6"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M781.4,78c-0.1-0.1-0.1-0.1-0.1-0.2"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M778,79.5c0.3,0.3,0.6,0.5,0.9,0.3c0.4-0.2,0.6-0.5,0.4-0.9c-0.2-0.4-0.5-0.6-0.9-0.4c-0.1,0.1-0.3,0.2-0.4,0.4h0.7
                            c0.1,0,0.2,0.1,0.3,0.3c-0.1,0.1-0.2,0.2-0.3,0.3H778h-1.3c-0.2-0.1-0.3-0.2-0.3-0.3c0-0.2,0.1-0.3,0.3-0.3h1.3"/>
                    </g>
                    <g id="toilet_00000084506241133475524920000001398221601171274627_">
                        <path fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" d="M736.4,231.9l0.6-1.8c0.3-1,0.7-2,1.3-2.7
                            c1.5-2,2.3-4.2,2.6-6.6c0.1-2.4-0.2-4.7-1.2-6.8c-1-2.2-2.5-4-4.5-5.5c-0.4-0.3-0.8-0.6-1.3-0.8c-1.3-0.5-2.6-0.5-3.9-0.1v0.1
                            c-2.2,1.3-3.8,2.9-5,4.9c-1.2,2-1.8,4.2-1.9,6.6c-0.1,2.4,0.5,4.7,1.7,6.9c0.3,0.4,0.6,0.8,0.8,1.3c0.6,0.8,1,1.7,1.3,2.7
                            l0.7,1.8L736.4,231.9h4.4c0.5,0,0.9,0.1,1.2,0.4c0.3,0.2,0.5,0.5,0.5,0.9v0.1l0.4,6.9c0,0.5-0.1,0.9-0.4,1.3
                            c-0.3,0.3-0.6,0.6-1,0.7l-18.8,0c-0.5-0.1-0.8-0.4-1-0.7c-0.3-0.3-0.4-0.8-0.4-1.3l0.4-6.9v-0.1c0.1-0.4,0.2-0.7,0.5-0.9
                            c0.3-0.3,0.7-0.4,1.2-0.4h4.4"/>
                        <path fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" d="M733.3,208.9c-0.8-0.3-1.7-0.3-2.7,0
                            c-2,1.1-3.4,2.6-4.4,4.4c-1.1,1.8-1.7,3.8-1.7,5.9c-0.1,2.2,0.4,4.2,1.5,6.2c0.7,1.2,1.6,2.2,2.6,3.1c0.1,0.1,0.3,0.2,0.5,0.2
                            l5.7,0c0.2,0,0.4-0.1,0.6-0.2c1.7-1.5,2.8-3.3,3.5-5.2c0.6-2,0.8-4.1,0.4-6.1c-0.4-2.1-1.4-4-2.8-5.8
                            C735.6,210.5,734.5,209.6,733.3,208.9z"/>
                        <line fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" x1="742.4" y1="233.3" x2="721.6" y2="233.3"/>
                    </g>
                    <g id="toilet_00000074438035009021473360000001258515266734653853_">
                        <path fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" d="M589.2,658.5l1.8,0.6c1,0.3,2,0.7,2.7,1.3
                            c2,1.5,4.2,2.3,6.6,2.6c2.4,0.1,4.7-0.2,6.8-1.2c2.2-1,4-2.5,5.5-4.5c0.3-0.4,0.6-0.8,0.8-1.3c0.5-1.3,0.5-2.6,0.1-3.9h-0.1
                            c-1.3-2.2-2.9-3.8-4.9-5c-2-1.2-4.2-1.8-6.6-1.9c-2.4-0.1-4.7,0.5-6.9,1.7c-0.4,0.3-0.8,0.6-1.3,0.8c-0.8,0.6-1.7,1-2.7,1.3
                            l-1.8,0.7V658.5v4.4c0,0.5-0.1,0.9-0.4,1.2c-0.2,0.3-0.5,0.5-0.9,0.5h-0.1l-6.9,0.4c-0.5,0-0.9-0.1-1.3-0.4
                            c-0.3-0.3-0.6-0.6-0.7-1l0-18.8c0.1-0.5,0.4-0.8,0.7-1c0.3-0.3,0.8-0.4,1.3-0.4l6.9,0.4h0.1c0.4,0.1,0.7,0.2,0.9,0.5
                            c0.3,0.3,0.4,0.7,0.4,1.2v4.4"/>
                        <path fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" d="M612.1,655.4c0.3-0.8,0.3-1.7,0-2.7
                            c-1.1-2-2.6-3.4-4.4-4.4c-1.8-1.1-3.8-1.7-5.9-1.7c-2.2-0.1-4.2,0.4-6.2,1.5c-1.2,0.7-2.2,1.6-3.1,2.6c-0.1,0.1-0.2,0.3-0.2,0.5
                            v5.7c0,0.2,0.1,0.4,0.2,0.6c1.5,1.7,3.3,2.8,5.2,3.5c2,0.6,4.1,0.8,6.1,0.4c2.1-0.4,4-1.4,5.8-2.8
                            C610.6,657.7,611.4,656.6,612.1,655.4z"/>
                        <line fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" x1="587.8" y1="664.6" x2="587.8" y2="643.7"/>
                    </g>
                    <g id="bathtub_00000072974810446719860610000011401397150143251120_">
                        
                            <rect x="607.6" y="662.2" transform="matrix(1.008695e-13 -1 1 1.008695e-13 -70.4459 1321.7659)" fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" width="36.1" height="67.7"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M595.4,698.5v8.4c0.1,1.4,0.6,2.5,1.5,3.4c0.9,1,1.9,1.5,3.2,1.6h47.3c2.6-0.5,4.8-1.7,6.8-3.4c1.9-1.7,3.2-3.9,4.1-6.4
                            c0.9-2.5,1.1-5.2,0.6-8c-0.6-3.2-1.9-5.8-4-8c-2.1-2.2-4.6-3.6-7.5-4.3h-47.3c-1.3,0.2-2.4,0.7-3.2,1.6c-0.9,0.9-1.4,2.1-1.5,3.4
                            v8.7l2.4-1v5L595.4,698.5l-3.6-1.5l3.6-1.5"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M602.1,698.1c0.7-0.1,1.1-0.5,1.2-1.3c-0.1-0.8-0.5-1.2-1.2-1.3c-0.7,0.1-1.1,0.5-1.2,1.3C601,697.6,601.4,698,602.1,698.1z"/>
                    </g>
                    <g id="stovetop">
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M319.7,749.2c0.1,1,0.4,1.9,1.1,2.6c0.7,0.7,1.5,1.1,2.6,1.1c1-0.1,1.8-0.4,2.5-1.1c0.7-0.7,1.1-1.5,1.1-2.6
                            c-0.1-1-0.4-1.8-1.1-2.5c-0.7-0.7-1.5-1.1-2.5-1.1c-1,0.1-1.9,0.4-2.6,1.1C320.2,747.4,319.8,748.2,319.7,749.2z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M319.7,736.7c0.1,1,0.4,1.9,1.1,2.6c0.7,0.7,1.5,1,2.6,1c1,0,1.8-0.3,2.5-1c0.7-0.7,1.1-1.5,1.1-2.6c-0.1-1-0.4-1.9-1.1-2.6
                            c-0.7-0.7-1.5-1-2.5-1c-1,0-1.9,0.3-2.6,1C320.2,734.9,319.8,735.7,319.7,736.7z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M319.7,724.2c0.1,1,0.4,1.9,1.1,2.6c0.7,0.7,1.5,1,2.6,1c1,0,1.8-0.3,2.5-1c0.7-0.7,1.1-1.5,1.1-2.6c-0.1-1-0.4-1.9-1.1-2.6
                            c-0.7-0.7-1.5-1-2.5-1c-1,0-1.9,0.3-2.6,1C320.2,722.3,319.8,723.1,319.7,724.2z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M331.4,749.2c0.1,1.3,0.5,2.4,1.3,3.2c0.8,0.9,1.9,1.3,3.2,1.3s2.4-0.4,3.2-1.3c0.8-0.8,1.3-1.9,1.3-3.2
                            c-0.1-1.2-0.5-2.3-1.3-3.2c-0.8-0.8-1.9-1.2-3.2-1.2s-2.4,0.4-3.2,1.2C331.9,746.9,331.5,748,331.4,749.2z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M339.2,741.4c0.1,0.6,0.4,1,1.1,1.1c0.7-0.1,1.1-0.5,1.1-1.1c-0.1-0.7-0.4-1.1-1.1-1.1C339.6,740.4,339.2,740.7,339.2,741.4z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M339.2,736.7c0.1,0.7,0.4,1.1,1.1,1.1c0.7-0.1,1.1-0.4,1.1-1.1c-0.1-0.7-0.4-1.1-1.1-1.1C339.6,735.7,339.2,736,339.2,736.7z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M335.8,739.1c0.1,0.6,0.5,1,1.1,1.1c0.7-0.1,1.1-0.5,1.1-1.1c-0.1-0.7-0.4-1.1-1.1-1.1C336.3,738,335.9,738.4,335.8,739.1z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M331.4,724.2c0.1,1.3,0.5,2.4,1.3,3.2s1.9,1.3,3.2,1.3c1.3-0.1,2.4-0.5,3.2-1.3c0.8-0.8,1.3-1.9,1.3-3.2
                            c-0.1-1.3-0.5-2.4-1.3-3.2c-0.8-0.8-1.9-1.3-3.2-1.3c-1.3,0.1-2.4,0.5-3.2,1.3C331.9,721.8,331.5,722.9,331.4,724.2z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M335.8,734.4c0.1,0.7,0.5,1.1,1.1,1.1c0.7-0.1,1.1-0.4,1.1-1.1c-0.1-0.7-0.4-1.1-1.1-1.1C336.3,733.3,335.9,733.7,335.8,734.4z"
                            />
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M339.2,732c0.1,0.7,0.4,1.1,1.1,1.1c0.7-0.1,1.1-0.4,1.1-1.1c-0.1-0.7-0.4-1.1-1.1-1.1C339.6,731,339.2,731.3,339.2,732z"/>
                    </g>
                </g>
                <g id="room_names">
                    <text transform="matrix(1 0 0 1 739.3711 736.8779)" fill="#425563" font-family="fredoka, sans-serif" font-size="12px">Storage</text>
                    <text transform="matrix(1 0 0 1 758.1262 412.1523)" fill="#425563" font-family="fredoka, sans-serif" font-size="12px">Bedroom 2</text>
                    <text transform="matrix(1 0 0 1 790.7811 501.2591)" fill="#425563" font-family="fredoka, sans-serif" font-size="12px">Bedroom 3</text>
                    <text transform="matrix(1 0 0 1 613.8032 425.3835)" fill="#425563" font-family="fredoka, sans-serif" font-size="12px">Laundry</text>
                    <text transform="matrix(1 0 0 1 732.3066 308.4126)" fill="#425563" font-family="fredoka, sans-serif" font-size="12px">Walk-In Closet</text>
                    <text transform="matrix(1 0 0 1 717.1801 109.8796)" fill="#425563" font-family="fredoka, sans-serif" font-size="12px">Primary Bath</text>
                    <text transform="matrix(1 0 0 1 601.7535 86.5754)" fill="#425563" font-family="fredoka, sans-serif" font-size="12px">Primary Bedroom</text>
                    <text transform="matrix(1 0 0 1 329.7184 38.5395)" fill="#425563" font-family="fredoka, sans-serif" font-size="12px">Covered Patio</text>
                    <text transform="matrix(1 0 0 1 431.2248 339.075)" fill="#425563" font-family="fredoka, sans-serif" font-size="12px">Great Room</text>
                    <text transform="matrix(1 0 0 1 471.6173 567.2539)" fill="#425563" font-family="fredoka, sans-serif" font-size="12px">Nook</text>
                    <text transform="matrix(1 0 0 1 396.2029 778.4225)" fill="#425563" font-family="fredoka, sans-serif" font-size="12px">Kitchen</text>
                    <text transform="matrix(1 0 0 1 521.7308 963.8117)" fill="#425563" font-family="fredoka, sans-serif" font-size="12px">Entry</text>
                    <text transform="matrix(1 0 0 1 511.58 1101.0596)"><tspan x="0" y="0" fill="#425563" font-family="fredoka, sans-serif" font-size="12px">Covered</tspan><tspan x="8.7" y="14.4" fill="#425563" font-family="fredoka, sans-serif" font-size="12px">Entry</tspan></text>
                    <text transform="matrix(1 0 0 1 320.7619 810.2891)"><tspan x="0" y="0" fill="#425563" font-family="fredoka, sans-serif" font-size="7px">Oven/</tspan><tspan x="3.9" y="8.4" fill="#425563" font-family="fredoka, sans-serif" font-size="7px">Mic</tspan></text>
                    <text transform="matrix(1 0 0 1 413.1423 818.6899)" fill="#425563" font-family="fredoka, sans-serif" font-size="7px">Ref</text>
                    <text transform="matrix(1 0 0 1 474.8911 740.204)" fill="#425563" font-family="fredoka, sans-serif" font-size="7px">DW</text>
                    <text transform="matrix(1 0 0 1 602.7976 393.4362)" fill="#425563" font-family="fredoka, sans-serif" font-size="7px">W</text>
                    <text transform="matrix(1 0 0 1 603.574 358.0742)" fill="#425563" font-family="fredoka, sans-serif" font-size="7px">D</text>
                    <text transform="matrix(1 0 0 1 682.4719 862.1841)" fill="#425563" font-family="fredoka, sans-serif" font-size="12px">2-Car Garage</text>
                    <text transform="matrix(1 0 0 1 600 640.5244)" fill="#425563" font-family="fredoka, sans-serif" font-size="10.7596px">Bathroom 2</text>
                    <text transform="matrix(1 0 0 1 401.0357 895.5206)"><tspan x="0" y="0" fill="#425563" font-family="fredoka, sans-serif" font-size="12px">Walk-In </tspan><tspan x="0" y="14.4" fill="#425563" font-family="fredoka, sans-serif" font-size="12px">Pantry</tspan></text>
                    <text transform="matrix(1 0 0 1 419.0916 977.7372)" fill="#425563" font-family="fredoka, sans-serif" font-size="12px">Study</text>
                    <text transform="matrix(1 0 0 1 585.6733 793.6849)" fill="#425563" font-family="fredoka, sans-serif" font-size="12px">Mud</text>
                </g>
                <g id="People">
                    <g id="Boy">
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M365,357.7c-2.4,0-11.1-4-12.5-4.7l3.1-7.5l0.7-5.1c0.8,0.2,3,0.9,5.7,1.9c1.2,0.4,2.5,0.9,3.7,1.4
                                    l0.5,0.2l-0.2-0.5c-0.3-0.7-0.3-1.3-0.1-1.6c0.1-0.2,0.3-0.3,0.7-0.4c1.4-0.2,3.1-0.7,3.8-1.6c0.3-0.4,1.2-0.7,1.9-0.7
                                    c0.3,0,0.7,0,0.9,0.3c0.1,0.1,0.1,0.3,0.1,0.4c-0.1,0.4-0.8,0.8-1.3,0.9c-0.7,0.2-2.3,1.3-3,2.9c-0.1,0.3-0.2,0.6-0.3,0.9
                                    l-0.1,0.2l0.2,0.1c1.1,0.4,2,0.7,2.7,0.9c1.7,0.5,5.2,2.3,7.8,3.6c1,0.5,1.9,1,2.4,1.2c0.5,0.2,1.1,0.3,1.8,0.3
                                    c0.4,0,0.8,0,1.2-0.1c0.4,0,0.7-0.1,1.1-0.1c0.4,0,0.8,0,1.1,0.1c0.6,0.2,1,0.6,1,1.2c0,0.5-0.2,1.1-0.6,1.3
                                    c-0.2,0.1-0.4,0.1-0.7,0.1c-1,0-2.3-0.4-3-0.6l-0.2-0.1c-0.2-0.1-0.5-0.1-0.8-0.1c-0.6-0.1-1.2-0.1-1.8-0.4l-0.2-0.1
                                    c-0.9-0.5-1.4-0.8-4.4-1.4c-1-0.2-1.9-0.3-2.7-0.4c-1.5-0.2-2.7-0.4-4.4-1c-0.3-0.1-0.7-0.2-1.1-0.3l-0.3-0.1l0,0.5
                                    c-0.6,6.5-1.7,8.1-2.4,8.4C365.2,357.7,365.1,357.7,365,357.7L365,357.7z M358.9,347.9c0.7,1.7,3.6,3.6,3.7,3.7l0.6,0.4
                                    l-0.2-0.7c-0.3-0.8,0.3-2,0.8-2.8l0.2-0.3l-0.4,0c-2.3-0.3-4.3-0.5-4.4-0.5l-0.4,0L358.9,347.9z"/>
                                <path fill="#9B978F" d="M372.2,339.2c0.4,0,0.6,0.1,0.7,0.2c0.1,0.1,0.1,0.2,0,0.2c-0.1,0.3-0.7,0.6-1.1,0.8
                                    c-0.7,0.2-2.4,1.4-3.2,3.1c-0.1,0.3-0.2,0.6-0.3,0.9l-0.1,0.5l0.5,0.2c1.2,0.4,2,0.7,2.7,0.9c1.7,0.5,5.3,2.3,7.7,3.6
                                    c1.1,0.6,1.9,1,2.4,1.2c0.5,0.2,1.2,0.4,1.9,0.4c0.4,0,0.8,0,1.2-0.1c0.4,0,0.7-0.1,1.1-0.1c0.4,0,0.7,0,1,0.1
                                    c0.7,0.2,0.8,0.7,0.8,1c0,0.4-0.2,0.9-0.5,1c-0.1,0-0.3,0.1-0.6,0.1c-1,0-2.3-0.4-2.9-0.6l-0.2-0.1c-0.3-0.1-0.6-0.1-0.9-0.1
                                    c-0.5,0-1.1-0.1-1.7-0.4l-0.2-0.1c-0.9-0.5-1.5-0.9-4.4-1.4c-1.1-0.2-1.9-0.3-2.7-0.5c-1.5-0.2-2.6-0.4-4.3-1
                                    c-0.3-0.1-0.7-0.2-1.2-0.3l-0.6-0.1l-0.1,0.6l0,0.2c-0.7,7-1.8,8-2.3,8.1c0,0-0.1,0-0.2,0c-2,0-9.1-3.1-12.2-4.6l3-7.3l0-0.1
                                    l0-0.1l0.7-4.8c1,0.3,3,0.9,5.4,1.8c1.2,0.4,2.5,0.9,3.7,1.4l1,0.4l-0.4-1c-0.2-0.6-0.3-1.1-0.1-1.4c0.1-0.1,0.2-0.2,0.5-0.3
                                    c1.1-0.1,3.1-0.6,3.9-1.7C370.8,339.5,371.5,339.2,372.2,339.2 M363.7,352.6l-0.5-1.4c-0.2-0.5,0.1-1.4,0.7-2.6l0.3-0.6
                                    l-0.7-0.1c-2.3-0.3-4.4-0.5-4.4-0.5l-0.8-0.1l0.3,0.8c0.7,1.8,3.7,3.7,3.8,3.8L363.7,352.6 M372.2,338.7
                                    c-0.8,0-1.7,0.3-2.1,0.8c-0.6,0.8-2.4,1.3-3.6,1.5c-1.1,0.1-1.2,1.2-0.8,2.3c-1.2-0.5-2.5-1-3.7-1.4c-3.3-1.1-6-1.9-6-1.9
                                    l-0.7,5.3l-3.2,7.7c0,0,10.2,4.9,12.9,4.9c0.1,0,0.2,0,0.3,0c1.9-0.5,2.5-7.2,2.6-8.8c0.4,0.1,0.8,0.2,1.1,0.3
                                    c2.6,0.9,4,0.8,7.1,1.4c3.1,0.6,3.5,0.9,4.5,1.5c1,0.6,2,0.4,2.7,0.6c0.5,0.2,2.1,0.7,3.2,0.7c0.3,0,0.6,0,0.8-0.1
                                    c1-0.5,1.2-2.4-0.4-2.9c-0.4-0.1-0.8-0.2-1.2-0.2c-0.7,0-1.5,0.1-2.2,0.1c-0.6,0-1.1-0.1-1.7-0.3c-1.7-0.8-7.8-4.2-10.3-4.8
                                    c-0.8-0.2-1.7-0.5-2.7-0.9c0.1-0.3,0.2-0.6,0.3-0.9c0.7-1.5,2.3-2.6,2.9-2.8c0.6-0.2,1.9-0.9,1.3-1.7
                                    C373.1,338.8,372.7,338.7,372.2,338.7L372.2,338.7z M362.7,351.4c0,0-3-1.9-3.6-3.5c0,0,2,0.2,4.4,0.5
                                    C362.9,349.5,362.4,350.6,362.7,351.4L362.7,351.4z"/>
                            </g>
                            <g>
                                <path fill="#FFFFFF" d="M355.9,339.9C355.9,339.9,355.9,339.9,355.9,339.9c0.1-0.1,0.1-0.1,0.2-0.1c0,0,2.7,0.8,6,1.9
                                    c1.1,0.4,2.3,0.8,3.4,1.2c-0.2-0.7-0.2-1.3,0.1-1.7c0.2-0.3,0.5-0.5,1-0.6c1.3-0.2,2.9-0.7,3.5-1.4c0.4-0.5,1.5-0.9,2.4-0.9
                                    c0.5,0,0.9,0.2,1.2,0.5c0.2,0.3,0.2,0.5,0.1,0.8c-0.2,0.6-1,1-1.5,1.2c-0.5,0.2-2.1,1.2-2.8,2.7c-0.1,0.2-0.2,0.4-0.3,0.7
                                    c1.1,0.4,1.9,0.7,2.5,0.8c1.7,0.5,5.3,2.3,7.9,3.6c1,0.5,1.9,1,2.4,1.2c0.9,0.4,1.8,0.3,2.8,0.2c0.8-0.1,1.6-0.1,2.4,0.1
                                    c0.8,0.2,1.2,0.8,1.3,1.5c0.1,0.7-0.3,1.4-0.9,1.7c-1,0.5-3.1-0.2-4-0.5c-0.1,0-0.1,0-0.2-0.1c-0.2-0.1-0.5-0.1-0.8-0.1
                                    c-0.6-0.1-1.3-0.1-1.9-0.5c-0.1,0-0.1-0.1-0.2-0.1c-0.8-0.5-1.4-0.8-4.2-1.4c-1-0.2-1.9-0.3-2.6-0.4c-1.5-0.2-2.7-0.4-4.4-1
                                    c-0.2-0.1-0.6-0.2-0.9-0.3l0,0c-0.1,1-0.3,2.9-0.7,4.8c-0.5,2.4-1.2,3.7-2.1,3.9c-0.8,0.2-3.3-0.5-7.4-2.2
                                    c-3-1.3-5.9-2.6-5.9-2.6c-0.1,0-0.1-0.1-0.1-0.2l3.2-7.7L355.9,339.9C355.9,340,355.9,339.9,355.9,339.9z M365.8,343.4
                                    C365.8,343.4,365.8,343.4,365.8,343.4c-0.1,0.1-0.1,0.1-0.2,0.1c-1.1-0.4-2.4-0.9-3.7-1.4c-2.8-1-5.1-1.7-5.8-1.9l-0.7,5.2
                                    c0,0,0,0,0,0l-3.1,7.6c0.6,0.3,3.1,1.4,5.7,2.5c5,2.1,6.7,2.3,7.2,2.2c0.5-0.1,1.2-0.9,1.8-3.7c0.4-1.8,0.6-3.8,0.7-4.8l0-0.2
                                    c0,0,0-0.1,0.1-0.1c0,0,0.1,0,0.1,0c0.4,0.1,0.8,0.2,1.1,0.3c1.7,0.6,2.9,0.8,4.4,1c0.8,0.1,1.6,0.2,2.7,0.4
                                    c2.9,0.6,3.5,0.9,4.3,1.4c0.1,0,0.1,0.1,0.2,0.1c0.6,0.4,1.2,0.4,1.8,0.5c0.3,0,0.6,0.1,0.8,0.1c0.1,0,0.1,0,0.2,0.1
                                    c0.8,0.2,2.9,0.9,3.8,0.5c0.5-0.2,0.7-0.8,0.7-1.3c0-0.6-0.4-1.1-1.1-1.3c-0.7-0.2-1.4-0.2-2.2-0.1c-1,0.1-2,0.2-2.9-0.3
                                    c-0.5-0.2-1.4-0.7-2.4-1.2c-2.6-1.3-6.1-3.1-7.8-3.6c-0.7-0.2-1.6-0.5-2.7-0.9c-0.1,0-0.1-0.1-0.1-0.2
                                    c0.1-0.3,0.2-0.6,0.3-0.9c0.7-1.6,2.4-2.7,3-2.9c0.5-0.1,1.2-0.5,1.3-1c0.1-0.2,0-0.3-0.1-0.5c-0.2-0.2-0.5-0.4-0.9-0.4
                                    c-0.8,0-1.7,0.3-2.1,0.8c-0.6,0.8-2.4,1.4-3.7,1.5c-0.3,0-0.6,0.2-0.7,0.4c-0.2,0.4-0.2,1,0.1,1.7
                                    C365.8,343.3,365.8,343.4,365.8,343.4z M359,347.7C359,347.7,359,347.7,359,347.7c0,0,0.1-0.1,0.1-0.1c0,0,2.1,0.2,4.4,0.5
                                    c0.1,0,0.1,0,0.1,0.1c0,0,0,0.1,0,0.1c-0.7,1.3-1,2.3-0.8,2.9c0,0.1,0,0.1-0.1,0.2c-0.1,0-0.1,0-0.2,0c-0.1-0.1-3-1.9-3.6-3.6
                                    C358.9,347.8,359,347.8,359,347.7z M363.2,348.5c-1.7-0.2-3.2-0.4-3.9-0.5c0.6,1.2,2.4,2.5,3.1,3
                                    C362.4,350.4,362.6,349.6,363.2,348.5z"/>
                                <path fill="#9B978F" d="M372.2,338.5c-0.9,0-1.8,0.4-2.2,0.9c-0.6,0.7-2.2,1.2-3.5,1.4c-0.4,0.1-0.8,0.2-1,0.6
                                    c-0.2,0.4-0.3,1-0.1,1.7c-1.1-0.4-2.3-0.9-3.4-1.2c-3.3-1.1-5.9-1.9-6-1.9c0,0,0,0,0,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0
                                    c0,0,0,0,0,0.1l-0.7,5.3L352,353c0,0.1,0,0.2,0.1,0.2c0,0,2.9,1.4,5.9,2.6c3.6,1.5,6,2.3,7.1,2.3c0.1,0,0.3,0,0.4,0
                                    c0.9-0.2,1.5-1.5,2.1-3.9c0.4-1.9,0.6-3.8,0.7-4.8l0,0c0.4,0.1,0.7,0.2,0.9,0.3c1.7,0.6,2.9,0.8,4.4,1
                                    c0.8,0.1,1.6,0.2,2.6,0.4c2.9,0.6,3.4,0.9,4.2,1.4c0.1,0,0.1,0.1,0.2,0.1c0.7,0.4,1.4,0.5,1.9,0.5c0.3,0,0.6,0.1,0.8,0.1
                                    c0.1,0,0.1,0,0.2,0.1c0.7,0.2,2,0.6,3.1,0.6c0.4,0,0.7,0,0.9-0.2c0.6-0.3,0.9-1,0.9-1.7c-0.1-0.7-0.5-1.3-1.3-1.5
                                    c-0.4-0.1-0.8-0.2-1.2-0.2c-0.4,0-0.7,0-1.1,0.1c-0.4,0-0.7,0.1-1.1,0.1c-0.6,0-1.1-0.1-1.6-0.3c-0.5-0.2-1.4-0.7-2.4-1.2
                                    c-2.6-1.3-6.1-3.2-7.9-3.6c-0.7-0.2-1.5-0.4-2.5-0.8c0.1-0.3,0.2-0.5,0.3-0.7c0.7-1.5,2.2-2.5,2.8-2.7
                                    c0.5-0.2,1.3-0.6,1.5-1.2c0.1-0.3,0.1-0.5-0.1-0.8c-0.2-0.3-0.6-0.5-1.2-0.5C372.3,338.5,372.2,338.5,372.2,338.5L372.2,338.5
                                    z M365.7,343.5c0,0,0.1,0,0.1,0c0,0,0,0,0,0c0,0,0-0.1,0-0.1c-0.3-0.7-0.3-1.3-0.1-1.7c0.1-0.2,0.4-0.4,0.7-0.4
                                    c1.3-0.2,3.1-0.7,3.7-1.5c0.4-0.4,1.2-0.8,2-0.8c0,0,0.1,0,0.1,0c0.4,0,0.8,0.2,0.9,0.4c0.1,0.2,0.1,0.3,0.1,0.5
                                    c-0.2,0.4-0.9,0.8-1.3,1c-0.6,0.2-2.3,1.3-3,2.9c-0.1,0.3-0.2,0.6-0.3,0.9c0,0.1,0,0.2,0.1,0.2c1.1,0.4,2,0.7,2.7,0.9
                                    c1.7,0.5,5.2,2.3,7.8,3.6c1,0.5,1.9,1,2.4,1.2c0.6,0.3,1.2,0.3,1.8,0.3c0.4,0,0.8,0,1.2-0.1c0.4,0,0.7-0.1,1.1-0.1
                                    c0.4,0,0.8,0,1.1,0.2c0.6,0.2,1,0.7,1.1,1.3c0,0.6-0.2,1.1-0.7,1.3c-0.2,0.1-0.5,0.1-0.8,0.1c-1,0-2.4-0.4-3-0.6
                                    c-0.1,0-0.1,0-0.2-0.1c-0.2-0.1-0.5-0.1-0.8-0.1c-0.6-0.1-1.2-0.1-1.8-0.5c-0.1,0-0.1-0.1-0.2-0.1c-0.9-0.5-1.4-0.8-4.3-1.4
                                    c-1-0.2-1.9-0.3-2.7-0.4c-1.5-0.2-2.7-0.4-4.4-1c-0.3-0.1-0.7-0.2-1.1-0.3c0,0,0,0,0,0c0,0-0.1,0-0.1,0c0,0-0.1,0.1-0.1,0.1
                                    l0,0.2c-0.1,0.9-0.3,2.9-0.7,4.8c-0.6,2.8-1.3,3.5-1.8,3.7c-0.1,0-0.2,0-0.3,0c-0.8,0-2.6-0.4-6.9-2.2
                                    c-2.6-1.1-5.1-2.3-5.7-2.5l3.1-7.6c0,0,0,0,0,0l0.7-5.2c0.7,0.2,3,0.9,5.8,1.9C363.2,342.5,364.5,343,365.7,343.5
                                    C365.6,343.5,365.7,343.5,365.7,343.5L365.7,343.5z M359.1,347.7c0,0-0.1,0-0.1,0.1c0,0,0,0,0,0c0,0,0,0.1,0,0.2
                                    c0.6,1.7,3.5,3.5,3.6,3.6c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0.1,0,0.1-0.1,0.1-0.2c-0.2-0.6,0-1.5,0.8-2.9c0,0,0-0.1,0-0.1
                                    c0,0-0.1-0.1-0.1-0.1C361.2,347.9,359.2,347.7,359.1,347.7C359.1,347.7,359.1,347.7,359.1,347.7L359.1,347.7z M362.5,351
                                    c-0.7-0.5-2.5-1.8-3.1-3c0.6,0.1,2.1,0.2,3.9,0.5C362.6,349.6,362.4,350.4,362.5,351L362.5,351z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M350.9,358.8c-0.3-0.1-0.6-0.3-1-0.6c-0.3-0.2-0.6-0.5-1-0.7c-0.2-0.1-0.4-0.2-0.6-0.3
                                    c-0.6-0.3-1-0.5-1.2-1.2c-0.4-1.1-1.1-1.5-1.2-1.5c-0.2-0.1-5.2-3.5-3-10.8c2.2-7.3,9.1-8.1,9.2-8.1l0.2,0l0-0.1c0,0,0,0,0,0
                                    c0.1,0,0.2,0,0.7,0c0,0,0.3,0,0.3,0c0.6,0,1-0.2,1.4-0.4c0.4-0.2,0.8-0.5,1.5-0.5c0.1,0,0.1,0,0.2,0c0.2,0,0.3,0,0.3,0.1
                                    c0,0,0,0.3-0.1,0.4c-0.1,0.3-0.2,0.7,0,1c0.2,0.3,0.5,0.3,0.8,0.4c0.5,0.1,1.2,0.3,1.5,1.5c0.5,1.8-1.4,3.2-1.5,3.2l-0.5,0.3
                                    l1.4,0.3c0.7,1.8,0.3,4.9-0.9,7.1c-1.3,2.4-3.9,4.1-3.9,4.1l-0.4,0.3l1,0.4c0.8,1.6-0.1,2.2-1.1,2.9c-0.6,0.4-1.1,0.7-1.2,1.3
                                    C351.5,358.7,350.9,358.8,350.9,358.8z"/>
                                <path fill="#9B978F" d="M356.3,334.7C356.4,334.7,356.4,334.7,356.3,334.7c0.1,0.1,0,0.1,0,0.2c-0.1,0.3-0.3,0.8,0,1.2
                                    c0.2,0.3,0.6,0.4,1,0.5c0.5,0.1,1,0.2,1.3,1.3c0.5,1.6-1.3,2.9-1.4,2.9l-0.9,0.7l1.1,0.2l0.7,0.1c0.5,1.6,0.4,4.4-0.9,6.8
                                    c-1.2,2.4-3.8,4-3.8,4l-0.8,0.5l0.9,0.3l0.4,0.2c0.6,1.3,0,1.8-1.1,2.5c-0.6,0.4-1.2,0.8-1.3,1.4c-0.2,0.8-0.6,0.9-0.7,0.9
                                    c-0.3-0.1-0.5-0.3-0.9-0.5c-0.3-0.2-0.6-0.5-1-0.7c-0.2-0.1-0.4-0.2-0.6-0.3c-0.6-0.3-0.9-0.4-1.1-1c-0.4-1.2-1.2-1.7-1.2-1.7
                                    c-0.2-0.1-5.1-3.4-2.9-10.5c2.1-7.2,8.7-7.9,9-7.9l0.3,0l0-0.1c0.1,0,0.2,0,0.5,0c0.1,0,0.2,0,0.2,0l0.1,0
                                    c0.6,0,1-0.2,1.4-0.4c0.4-0.2,0.8-0.4,1.4-0.5C356.3,334.7,356.3,334.7,356.3,334.7 M356.3,334.2c-0.1,0-0.1,0-0.2,0
                                    c-1.5,0.1-1.8,0.9-2.8,0.9c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.3,0c-0.9,0-0.9,0.2-0.9,0.2s-7.2,0.7-9.4,8.3
                                    c-2.3,7.6,3.1,11.1,3.1,11.1s0.7,0.4,1.1,1.4c0.4,1,1,1.1,1.9,1.6c0.9,0.5,1.3,1.2,2.1,1.3c0,0,0,0,0,0c0.1,0,0.9,0,1.2-1.3
                                    c0.4-1.3,3.7-1.5,2.3-4.4l-0.6-0.2c0,0,2.6-1.7,4-4.2c1.3-2.5,1.6-5.7,0.8-7.5l-0.9-0.2c0,0,2.2-1.5,1.5-3.5
                                    c-0.6-2-2-1.4-2.4-2C356.4,335.2,357.6,334.2,356.3,334.2L356.3,334.2z"/>
                            </g>
                            <g>
                                <path fill="#FFFFFF" d="M344.4,339.7c0.2-0.2,0.4-0.5,0.6-0.7c0.9-1,2-1.9,3.2-2.5c1.9-1,3.5-1.3,3.9-1.3
                                    c0.1-0.1,0.5-0.2,1.3-0.2c0.5,0,0.8-0.1,1.2-0.4c0.4-0.2,0.9-0.5,1.7-0.6c0.4,0,0.7,0,0.8,0.2c0.2,0.2,0.1,0.5,0,0.8
                                    c-0.1,0.3-0.2,0.5,0,0.7c0.1,0.1,0.3,0.2,0.6,0.3c0.6,0.1,1.4,0.3,1.8,1.7c0.3,0.9,0.1,1.8-0.6,2.6l0,0
                                    c-0.3,0.4-0.6,0.6-0.8,0.8l0.6,0.1c0.1,0,0.1,0,0.1,0.1c0.4,0.9,0.5,2.2,0.3,3.5c-0.1,1.4-0.6,2.9-1.2,4.1
                                    c-1.1,2.1-3.1,3.6-3.8,4.1l0.3,0.1c0,0,0.1,0,0.1,0.1c1,2-0.2,2.8-1.2,3.5c-0.5,0.3-1,0.6-1.1,1c-0.4,1.4-1.4,1.4-1.4,1.4
                                    c0,0,0,0,0,0c-0.5-0.1-0.8-0.4-1.2-0.7c-0.3-0.2-0.5-0.5-0.9-0.7c-0.2-0.1-0.4-0.2-0.5-0.3c-0.6-0.3-1.1-0.6-1.4-1.4
                                    c-0.3-1-1-1.3-1-1.3c0,0,0,0,0,0c-0.1,0-1.4-0.9-2.5-2.8c-0.6-1.1-1-2.3-1.2-3.5c-0.2-1.6-0.1-3.3,0.5-5
                                    C343,342.1,343.6,340.8,344.4,339.7z M352.2,335.4c0,0-0.1,0.1-0.1,0.1c0,0-1.8,0.2-3.8,1.3c-1.2,0.6-2.2,1.5-3.1,2.4
                                    c-1.1,1.2-1.9,2.7-2.4,4.4c-0.5,1.7-0.7,3.3-0.5,4.9c0.2,1.2,0.6,2.4,1.2,3.4c1,1.7,2.3,2.6,2.4,2.7c0.1,0,0.8,0.5,1.1,1.5
                                    c0.3,0.7,0.7,0.9,1.3,1.2c0.2,0.1,0.4,0.2,0.6,0.3c0.4,0.2,0.7,0.5,1,0.7c0.4,0.3,0.7,0.5,1.1,0.6c0.1,0,0.8-0.1,1.1-1.2
                                    c0.1-0.5,0.7-0.8,1.2-1.2c1-0.6,2-1.3,1.1-3l-0.6-0.2c-0.1,0-0.1-0.1-0.1-0.1c0-0.1,0-0.1,0.1-0.2c0,0,2.6-1.7,3.9-4.1
                                    c1.2-2.3,1.6-5.4,0.9-7.2l-0.8-0.2c-0.1,0-0.1-0.1-0.1-0.1c0-0.1,0-0.1,0.1-0.2c0,0,2.1-1.5,1.5-3.3c-0.4-1.2-1-1.4-1.6-1.5
                                    c-0.3-0.1-0.6-0.1-0.8-0.4c-0.2-0.3-0.1-0.6,0-0.9c0.1-0.2,0.1-0.4,0.1-0.5c0,0-0.2-0.1-0.6-0.1c-0.8,0-1.2,0.3-1.6,0.5
                                    c-0.4,0.2-0.7,0.4-1.3,0.4C352.5,335.2,352.3,335.3,352.2,335.4C352.2,335.4,352.2,335.4,352.2,335.4z M352.3,335.3
                                    L352.3,335.3L352.3,335.3z M352.3,335.3L352.3,335.3L352.3,335.3z"/>
                                <path fill="#9B978F" d="M356.3,334c-0.1,0-0.1,0-0.2,0c-0.8,0.1-1.3,0.3-1.7,0.6c-0.4,0.2-0.6,0.4-1.1,0.4c0,0,0,0-0.1,0
                                    c-0.1,0-0.2,0-0.3,0c-0.6,0-0.9,0.1-1,0.2c-0.3,0-2,0.3-3.9,1.3c-1.2,0.7-2.3,1.5-3.2,2.5c-0.2,0.2-0.4,0.5-0.6,0.7
                                    c-0.8,1.1-1.5,2.4-1.9,3.8c-0.5,1.8-0.7,3.4-0.5,5c0.2,1.3,0.6,2.4,1.2,3.5c1.1,1.8,2.4,2.7,2.5,2.8c0,0,0,0,0,0
                                    c0,0,0.6,0.4,1,1.3c0.3,0.9,0.8,1.1,1.4,1.4c0.2,0.1,0.4,0.2,0.5,0.3c0.4,0.2,0.6,0.4,0.9,0.7c0.4,0.3,0.7,0.6,1.2,0.7
                                    c0,0,0,0,0,0c0,0,0,0,0,0c0.1,0,1,0,1.4-1.4c0.1-0.4,0.6-0.7,1.1-1c1-0.7,2.2-1.5,1.2-3.5c0,0,0-0.1-0.1-0.1l-0.3-0.1
                                    c0.7-0.5,2.7-2,3.8-4.1c0.6-1.2,1.1-2.6,1.2-4.1c0.1-1.4,0-2.6-0.3-3.5c0,0-0.1-0.1-0.1-0.1l-0.6-0.1c0.2-0.2,0.5-0.5,0.8-0.8
                                    l0,0c0.6-0.9,0.8-1.8,0.6-2.6c-0.4-1.4-1.2-1.6-1.8-1.7c-0.3-0.1-0.5-0.1-0.6-0.3c-0.1-0.2,0-0.4,0-0.7c0.1-0.3,0.2-0.6,0-0.8
                                    C356.9,334.1,356.7,334,356.3,334L356.3,334z M353.4,335.2c0.5,0,0.9-0.2,1.2-0.4c0.4-0.2,0.8-0.5,1.6-0.5c0.1,0,0.1,0,0.2,0
                                    c0.3,0,0.4,0.1,0.4,0.1c0.1,0.1,0,0.3-0.1,0.5c-0.1,0.3-0.2,0.7,0,0.9c0.2,0.2,0.5,0.3,0.8,0.4c0.6,0.1,1.2,0.3,1.6,1.5
                                    c0.6,1.9-1.5,3.3-1.5,3.3c-0.1,0-0.1,0.1-0.1,0.2c0,0.1,0.1,0.1,0.1,0.1l0.8,0.2c0.7,1.9,0.3,4.9-0.9,7.2
                                    c-1.3,2.4-3.9,4.1-3.9,4.1c-0.1,0-0.1,0.1-0.1,0.2c0,0.1,0,0.1,0.1,0.1l0.6,0.2c0.8,1.7-0.2,2.4-1.1,3c-0.5,0.4-1,0.7-1.2,1.2
                                    c-0.3,1.1-1,1.2-1.1,1.2c-0.4-0.1-0.7-0.3-1.1-0.6c-0.3-0.2-0.6-0.5-1-0.7c-0.2-0.1-0.4-0.2-0.6-0.3c-0.6-0.3-1-0.5-1.3-1.2
                                    c-0.4-1-1-1.4-1.1-1.5c-0.1,0-1.4-0.9-2.4-2.7c-0.6-1-1-2.2-1.2-3.4c-0.2-1.5,0-3.2,0.5-4.9c0.5-1.7,1.3-3.2,2.4-4.4
                                    c0.9-1,1.9-1.8,3.1-2.4c2-1.1,3.8-1.3,3.8-1.3c0,0,0.1,0,0.1-0.1c0,0,0,0,0,0c0,0,0.2-0.1,0.8-0.1
                                    C353.1,335.2,353.2,335.2,353.4,335.2C353.3,335.2,353.3,335.2,353.4,335.2L353.4,335.2z M352.3,335.3L352.3,335.3
                                    L352.3,335.3L352.3,335.3z M352.3,335.3L352.3,335.3L352.3,335.3L352.3,335.3z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M353.7,349.8c-0.3-0.8-1.3-3.6,1.7-6c0.2,0.4,0.7,1.4,0.6,2.4l0,0.2l0.1,0.1c0,0,0.5,0.3,0.4,0.8
                                    c-0.1,0.4-0.6,0.5-0.6,0.5l-0.2,0l-0.1,0.2C355.5,348,354.9,349.3,353.7,349.8z"/>
                                <path fill="#9B978F" d="M355.3,344.2c0.2,0.5,0.5,1.2,0.4,2l0,0.3l0.3,0.2c0,0,0.3,0.2,0.3,0.6c0,0.2-0.3,0.3-0.4,0.3l-0.3,0
                                    l-0.1,0.3c0,0-0.5,1.2-1.6,1.7C353.5,348.6,352.9,346.2,355.3,344.2 M355.4,343.4c-4,2.9-1.9,6.7-1.9,6.7
                                    c1.5-0.5,2.3-2.1,2.3-2.1s0,0,0,0c0,0,0.7,0,0.9-0.7c0.1-0.7-0.5-1.1-0.5-1.1C356.4,344.8,355.4,343.4,355.4,343.4
                                    L355.4,343.4z"/>
                            </g>
                            <g>
                                <path fill="#FFFFFF" d="M353.9,344.8c0.4-0.5,0.8-1,1.5-1.5c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0.1c0,0.1,1,1.4,0.8,2.8
                                    c0.2,0.1,0.6,0.5,0.5,1.2c-0.1,0.6-0.6,0.8-0.9,0.8c-0.2,0.4-0.9,1.7-2.3,2.1c-0.1,0-0.1,0-0.2-0.1c0,0-0.5-1-0.6-2.3
                                    C352.8,347,353,345.9,353.9,344.8z M355.4,343.7c-1.5,1.2-2.3,2.6-2.2,4.2c0,1,0.3,1.8,0.5,2.1c1.4-0.5,2-2,2-2
                                    c0-0.1,0.1-0.1,0.1-0.1c0,0,0.6,0,0.7-0.5c0.1-0.6-0.4-0.9-0.4-0.9c-0.1,0-0.1-0.1-0.1-0.2C356.2,345.1,355.6,344,355.4,343.7
                                    z"/>
                                <path fill="#9B978F" d="M355.4,343.3C355.4,343.3,355.4,343.3,355.4,343.3c-0.7,0.5-1.2,1-1.6,1.5c-0.8,1.1-1,2.3-1,3.1
                                    c0,1.3,0.5,2.3,0.6,2.3c0,0.1,0.1,0.1,0.1,0.1c0,0,0,0,0,0c1.4-0.4,2.2-1.8,2.3-2.1c0.3,0,0.8-0.2,0.9-0.8
                                    c0.1-0.6-0.3-1-0.5-1.2c0.2-1.5-0.7-2.8-0.8-2.8C355.6,343.3,355.5,343.3,355.4,343.3C355.5,343.3,355.5,343.3,355.4,343.3
                                    L355.4,343.3z M353.6,349.9c-0.1-0.3-0.4-1.1-0.5-2.1c0-1.6,0.7-3,2.2-4.2c0.2,0.4,0.8,1.4,0.6,2.6c0,0.1,0,0.1,0.1,0.2
                                    c0,0,0.5,0.3,0.4,0.9c-0.1,0.5-0.7,0.5-0.7,0.5c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0-0.1,0-0.1,0.1
                                    C355.7,347.9,355,349.4,353.6,349.9L353.6,349.9z"/>
                            </g>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M349.2,354.9C349.2,354.9,349.2,354.9,349.2,354.9c0,0,0.8-0.9,2-1.2c0.2,0,0.4-0.1,0.5-0.1
                                c0.8-0.2,1.2-0.2,2-0.7c0.1,0,0.2,0,0.2,0.1c0,0.1,0,0.2-0.1,0.2c-0.8,0.4-1.3,0.5-2.1,0.7c-0.2,0-0.3,0.1-0.5,0.1
                                c-1.1,0.2-1.8,1-1.8,1.1c-0.1,0.1-0.2,0.1-0.2,0C349.2,355,349.2,354.9,349.2,354.9z"/>
                            <path fill="#9B978F" d="M353.8,352.9C353.7,352.9,353.7,352.9,353.8,352.9c-0.8,0.4-1.2,0.5-2,0.7c-0.2,0-0.3,0.1-0.5,0.1
                                c-1.2,0.3-1.9,1.1-2,1.2c0,0,0,0,0,0c0,0.1,0,0.2,0,0.2c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1-0.1c0,0,0.7-0.8,1.8-1.1
                                c0.2,0,0.3-0.1,0.5-0.1c0.8-0.2,1.3-0.3,2.1-0.7c0.1,0,0.1-0.1,0.1-0.2C353.9,352.9,353.8,352.9,353.8,352.9L353.8,352.9z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M350.9,338.7C350.9,338.7,350.9,338.7,350.9,338.7l2.8-2.2c0.1-0.1,0.2,0,0.2,0c0.1,0.1,0,0.2,0,0.2
                                l-2.7,2.1c-0.1,0.1-0.2,0-0.2,0C350.9,338.8,350.9,338.8,350.9,338.7z"/>
                            <path fill="#9B978F" d="M353.8,336.5C353.8,336.5,353.7,336.5,353.8,336.5l-2.8,2.2c0,0,0,0,0,0c0,0.1,0,0.1,0,0.2
                                c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0l2.7-2.1c0.1-0.1,0.1-0.2,0-0.2C353.9,336.5,353.8,336.5,353.8,336.5L353.8,336.5z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M355.7,340.7C355.7,340.7,355.7,340.7,355.7,340.7c0.1-0.1,0.2-0.1,0.2,0c1,0.8,1.6,0.4,1.6,0.4
                                c0.1,0,0.2,0,0.2,0.1c0,0.1,0,0.2-0.1,0.2c0,0-0.8,0.5-2-0.4C355.7,340.9,355.7,340.8,355.7,340.7z"/>
                            <path fill="#9B978F" d="M355.9,340.6c0,0-0.1,0-0.1,0.1c0,0,0,0,0,0c-0.1,0.1,0,0.2,0,0.2c0.6,0.5,1.1,0.6,1.4,0.6
                                c0.3,0,0.5-0.1,0.6-0.1c0.1,0,0.1-0.1,0.1-0.2c0-0.1-0.1-0.1-0.1-0.1c0,0-0.1,0-0.1,0c0,0-0.2,0.1-0.4,0.1
                                C356.9,341.2,356.5,341.1,355.9,340.6C355.9,340.6,355.9,340.6,355.9,340.6L355.9,340.6z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M352,335.2c0-0.1,0.1-0.1,0.2-0.1c0.1,0,2,0.6,2.5,2.8c0,0.1,0,0.2-0.1,0.2c-0.1,0-0.2,0-0.2-0.1
                                c-0.5-2-2.2-2.5-2.2-2.5C352,335.4,351.9,335.3,352,335.2C352,335.2,352,335.2,352,335.2z"/>
                            <path fill="#9B978F" d="M352.1,335.1c-0.1,0-0.1,0-0.1,0.1c0,0,0,0,0,0.1c0,0.1,0,0.2,0.1,0.2c0.1,0,1.8,0.5,2.2,2.5
                                c0,0.1,0.1,0.1,0.2,0.1c0,0,0,0,0,0c0.1,0,0.1-0.1,0.1-0.2C354.1,335.7,352.2,335.1,352.1,335.1
                                C352.1,335.1,352.1,335.1,352.1,335.1L352.1,335.1z"/>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M365.5,358.8c-0.2,0-0.4-0.1-0.7-0.2c-0.4-0.2-0.9-0.3-1.4-0.4c-0.4,0-0.6-0.1-1-0.2
                                    c-0.6-0.2-1.5-0.5-3.2-0.6c-2.3-0.2-4.7-0.8-5.4-1l0.9-2.7c1.3,0.2,2.8,0.9,4.5,1.6c0.9,0.4,2.7,1.1,3.9,1.1
                                    c0.4,0,0.8-0.1,1-0.3c0.5-0.5,1.4-0.7,2.1-0.7c0.1,0,0.3,0,0.4,0c0.1,0,0.2,0,0.3,0c0.3,0,0.5,0,0.8-0.1c0.1,0,0.3,0,0.4,0
                                    c0.1,0.1-0.1,0.3-0.3,0.4l-0.1,0.1l0.2,1c0,0.4-0.1,0.4-0.2,0.4c-0.1,0-0.4,0.1-0.5,0.4c0,0.2-0.1,0.3-0.2,0.4
                                    c-0.1,0.1-0.2,0.2-0.3,0.4c-0.2,0.3-0.3,0.4-0.6,0.5L365.5,358.8L365.5,358.8z"/>
                                <path fill="#9B978F" d="M354.7,353.9c1.2,0.3,2.6,0.8,4.2,1.5c1,0.4,2.8,1.1,4,1.1c0.5,0,0.9-0.1,1.2-0.4
                                    c0.4-0.4,1.1-0.6,1.9-0.6c0.1,0,0.3,0,0.4,0c0.1,0,0.2,0,0.3,0c0.2,0,0.3,0,0.5,0l0.1,0.3l0.1,0.7c0,0.1,0,0.1,0,0.2
                                    c0,0,0,0,0,0c-0.1,0-0.5,0.1-0.7,0.6c0,0.1-0.1,0.2-0.2,0.3c-0.1,0.1-0.2,0.2-0.4,0.5c-0.1,0.2-0.2,0.3-0.5,0.4l-0.1,0.1
                                    c-0.1,0-0.4-0.1-0.6-0.2c-0.4-0.2-0.9-0.4-1.5-0.4c-0.3,0-0.6-0.1-0.9-0.2c-0.6-0.2-1.5-0.5-3.3-0.6c-2-0.2-4.2-0.7-5.1-0.9
                                    L354.7,353.9 M354.4,353.3l-1,3.2c0,0,3,0.9,5.7,1.1s3.2,0.7,4.2,0.9c0.9,0.1,1.7,0.6,2.2,0.6c0.1,0,0.1,0,0.2,0
                                    c0.4-0.2,0.6-0.2,0.9-0.7c0.2-0.4,0.5-0.5,0.6-0.9c0.1-0.4,0.7,0.1,0.7-0.9l-0.1-0.8c0,0,0.5-0.3,0.4-0.7
                                    c0-0.1-0.1-0.2-0.3-0.2c-0.3,0-0.7,0.1-1.1,0.1c-0.1,0-0.2,0-0.3,0c-0.1,0-0.3,0-0.4,0c-0.8,0-1.7,0.2-2.2,0.7
                                    c-0.2,0.2-0.5,0.2-0.8,0.2c-1,0-2.5-0.5-3.8-1.1C357.4,354.2,355.8,353.5,354.4,353.3L354.4,353.3z"/>
                            </g>
                            <g>
                                <path fill="#FFFFFF" d="M354.3,353.2c0,0,0.1-0.1,0.2-0.1c1.4,0.2,3,0.9,4.8,1.6c2.3,1,4,1.3,4.4,0.9c0.7-0.7,1.9-0.8,2.8-0.7
                                    c0.3,0,0.7,0,0.9-0.1c0.4-0.1,0.8-0.1,0.9,0.2c0.1,0.3-0.2,0.6-0.4,0.8l0.1,0.7c0,0,0,0,0,0c0,0.7-0.3,0.8-0.6,0.9
                                    c-0.1,0-0.1,0-0.2,0.1c-0.1,0.3-0.2,0.4-0.3,0.6c-0.1,0.1-0.2,0.2-0.3,0.4c-0.2,0.4-0.5,0.5-0.8,0.7c0,0-0.1,0-0.1,0.1
                                    c-0.3,0.1-0.6,0-1.1-0.2c-0.4-0.2-0.9-0.3-1.3-0.4c-0.4,0-0.7-0.1-1.1-0.3c-0.6-0.2-1.4-0.5-3.2-0.6c-2.7-0.2-5.7-1.1-5.8-1.1
                                    c0,0-0.1,0-0.1-0.1c0,0,0-0.1,0-0.1L354.3,353.2C354.2,353.2,354.2,353.2,354.3,353.2z M367.9,355.4c0.1-0.1,0.1-0.2,0.1-0.3
                                    c0-0.1-0.2-0.1-0.5,0c-0.3,0.1-0.6,0.1-1,0.1c-0.8-0.1-1.9,0.1-2.6,0.7c-0.8,0.7-3.3-0.2-4.8-0.8c-1.7-0.7-3.3-1.4-4.6-1.6
                                    l-0.9,2.9c0.6,0.2,3.2,0.8,5.5,1.1c1.8,0.2,2.6,0.4,3.2,0.6c0.4,0.1,0.6,0.2,1,0.2c0.5,0.1,1,0.2,1.4,0.4
                                    c0.4,0.1,0.7,0.3,0.9,0.2c0.1,0,0.1,0,0.2-0.1c0.3-0.1,0.5-0.2,0.7-0.5c0.1-0.2,0.2-0.3,0.3-0.4c0.1-0.1,0.2-0.2,0.3-0.4
                                    c0.1-0.3,0.3-0.3,0.4-0.3c0.2,0,0.3-0.1,0.3-0.5l-0.1-0.8c0-0.1,0-0.1,0.1-0.2C367.6,355.7,367.8,355.6,367.9,355.4z"/>
                                <path fill="#9B978F" d="M354.4,353.1c-0.1,0-0.1,0-0.1,0.1c0,0,0,0,0,0l-1,3.2c0,0,0,0.1,0,0.1c0,0,0.1,0.1,0.1,0.1
                                    c0,0,3,0.9,5.8,1.1c1.7,0.2,2.5,0.4,3.2,0.6c0.4,0.1,0.7,0.2,1.1,0.3c0.5,0.1,0.9,0.2,1.3,0.4c0.4,0.1,0.6,0.2,0.9,0.2
                                    c0.1,0,0.2,0,0.2,0c0.1,0,0.1,0,0.1-0.1c0.3-0.1,0.6-0.2,0.8-0.7c0.1-0.2,0.2-0.3,0.3-0.4c0.1-0.1,0.3-0.3,0.3-0.6
                                    c0-0.1,0-0.1,0.2-0.1c0.3-0.1,0.5-0.2,0.6-0.9c0,0,0,0,0,0l-0.1-0.7c0.2-0.2,0.5-0.5,0.4-0.8c-0.1-0.2-0.2-0.3-0.4-0.3
                                    c-0.1,0-0.3,0-0.4,0.1c-0.2,0-0.4,0.1-0.7,0.1c-0.1,0-0.2,0-0.2,0c-0.1,0-0.3,0-0.5,0c-0.8,0-1.8,0.2-2.4,0.8
                                    c-0.1,0.1-0.4,0.2-0.7,0.2c-0.8,0-2.1-0.4-3.7-1.1C357.4,354,355.8,353.4,354.4,353.1C354.4,353.1,354.4,353.1,354.4,353.1
                                    L354.4,353.1z M365.5,358.9c-0.2,0-0.5-0.1-0.8-0.2c-0.4-0.2-0.9-0.3-1.4-0.4c-0.4,0-0.6-0.1-1-0.2c-0.6-0.2-1.5-0.5-3.2-0.6
                                    c-2.4-0.2-4.9-0.9-5.5-1.1l0.9-2.9c1.3,0.2,2.9,0.9,4.6,1.6c1.1,0.5,2.7,1.1,3.8,1.1c0.4,0,0.7-0.1,0.9-0.3
                                    c0.5-0.5,1.4-0.7,2.1-0.7c0.1,0,0.3,0,0.4,0c0.1,0,0.2,0,0.3,0c0.3,0,0.5,0,0.8-0.1c0.2,0,0.3,0,0.4,0c0.1,0,0.1,0,0.1,0
                                    c0,0.1,0,0.2-0.1,0.3c-0.1,0.1-0.3,0.2-0.3,0.2c-0.1,0-0.1,0.1-0.1,0.2l0.1,0.8c0,0.5-0.1,0.5-0.3,0.5c-0.1,0-0.3,0.1-0.4,0.3
                                    c-0.1,0.2-0.1,0.3-0.3,0.4c-0.1,0.1-0.2,0.2-0.3,0.4c-0.2,0.3-0.4,0.4-0.7,0.5C365.7,358.9,365.6,358.9,365.5,358.9
                                    C365.6,358.9,365.5,358.9,365.5,358.9L365.5,358.9z"/>
                            </g>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M366.2,356c0,0,0.1-0.1,0.1-0.1c0.4,0,1,0,1.3-0.2c0.1-0.1,0.2-0.1,0.2,0s0.1,0.2,0,0.2
                                c-0.4,0.3-1.4,0.3-1.5,0.3C366.2,356.2,366.2,356.2,366.2,356C366.2,356,366.2,356,366.2,356z"/>
                            <path fill="#9B978F" d="M367.7,355.6c0,0-0.1,0-0.1,0c-0.2,0.2-0.8,0.2-1.2,0.2c0,0-0.1,0-0.1,0c0,0,0,0,0,0
                                c-0.1,0-0.1,0-0.1,0.1c0,0,0,0.1,0,0.1c0,0.1,0.1,0.2,0.2,0.2c0,0,0.1,0,0.1,0c0.3,0,1.1,0,1.4-0.3c0.1-0.1,0.1-0.2,0-0.2
                                C367.8,355.7,367.7,355.6,367.7,355.6L367.7,355.6z"/>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M369.6,344.7c-0.5,0-1.6-1.1-2-1.7c-0.3-0.5-1.6-0.7-3-0.9c-0.6-0.1-1.1-0.1-1.6-0.2
                                    c-1.2-0.2-3.7-0.6-4.8-0.8c0.5-0.5,1.4-1.5,1.3-2.7c0.7,0.2,2.3,0.6,3.8,1.3c2.3,1,3.8,1.6,5,1.8c0.4,0.1,0.8,0.1,1.1,0.1
                                    c0.4,0,0.9,0.1,1,0.2c0.1,0.1-0.1,0.3-0.1,0.3l-0.1,0.1l0.1,0.2c0,0,0.1,0.3-0.1,0.6l-0.1,0.1l0.1,0.2c0,0.1,0.2,0.4-0.2,0.7
                                    l-0.1,0.1l0,0.1c0,0.1,0,0.4-0.1,0.5C369.7,344.6,369.7,344.7,369.6,344.7L369.6,344.7z"/>
                                <path fill="#9B978F" d="M359.8,338.7c0.8,0.2,2.1,0.6,3.4,1.2c2.3,1,3.8,1.7,5.1,1.9c0.4,0.1,0.8,0.1,1.1,0.1
                                    c0.3,0,0.6,0.1,0.7,0.1l-0.2,0.2l0.1,0.3c0,0,0,0.2-0.1,0.3l-0.2,0.3l0.1,0.3c0,0.1,0.1,0.2-0.2,0.4l-0.2,0.2l0,0.3
                                    c0,0.1,0,0.2,0,0.3c-0.4,0-1.4-0.9-1.8-1.6c-0.4-0.6-1.5-0.8-3.2-1c-0.5-0.1-1.1-0.1-1.6-0.2c-1.1-0.2-3.1-0.5-4.3-0.7
                                    C359.2,340.4,359.7,339.6,359.8,338.7 M359.2,338c0.4,1.7-1.6,3.2-1.6,3.2s3.7,0.6,5.3,0.9c1.6,0.3,4.1,0.4,4.5,1
                                    s1.6,1.8,2.2,1.8c0,0,0,0,0,0c0.6,0,0.5-0.8,0.5-0.8c0.6-0.5,0.3-1,0.3-1c0.3-0.4,0.2-0.8,0.2-0.8s0.3-0.3,0.1-0.6
                                    c-0.2-0.3-1.1-0.3-2.3-0.5s-2.9-0.9-5-1.8S359.2,338,359.2,338L359.2,338z"/>
                            </g>
                            <g>
                                <path fill="#FFFFFF" d="M359.1,337.9C359.1,337.9,359.1,337.9,359.1,337.9c0.1-0.1,0.1-0.1,0.2-0.1c0,0,2.2,0.4,4.2,1.4
                                    c2.3,1,3.7,1.6,4.9,1.8c0.4,0.1,0.8,0.1,1.1,0.1c0.7,0.1,1.2,0.1,1.3,0.4c0.1,0.3,0,0.6-0.1,0.7c0,0.2,0.1,0.5-0.2,0.8l0,0
                                    c0.1,0.3,0.1,0.7-0.3,1.1c0,0.2,0,0.5-0.2,0.7c-0.1,0.1-0.2,0.2-0.5,0.2c-0.7,0-1.9-1.3-2.3-1.9c-0.2-0.4-1.6-0.5-2.7-0.7
                                    c-0.6-0.1-1.1-0.1-1.6-0.2c-1.6-0.3-5.2-0.9-5.3-0.9c-0.1,0-0.1-0.1-0.1-0.1c0-0.1,0-0.1,0.1-0.2c0,0,1.9-1.4,1.6-3
                                    C359.1,338,359.1,338,359.1,337.9z M370.6,342.1c0.1-0.1,0.1-0.2,0-0.3c-0.1-0.1-0.6-0.2-1.1-0.2c-0.3,0-0.7-0.1-1.1-0.1
                                    c-1.2-0.2-2.7-0.8-5-1.8c-1.7-0.7-3.3-1.2-3.9-1.3c0.1,0.7-0.2,1.4-0.7,2.1c-0.2,0.3-0.5,0.6-0.7,0.7c1,0.2,3.7,0.6,4.9,0.8
                                    c0.5,0.1,1,0.2,1.6,0.2c1.4,0.2,2.6,0.3,3,0.8c0.4,0.6,1.5,1.7,2.1,1.7c0.1,0,0.2,0,0.2-0.1c0.1-0.1,0.1-0.5,0.1-0.6
                                    c0-0.1,0-0.1,0.1-0.1c0.5-0.4,0.3-0.8,0.3-0.8c0-0.1,0-0.1,0-0.2c0.3-0.3,0.2-0.6,0.2-0.7
                                    C370.4,342.3,370.4,342.2,370.6,342.1C370.5,342.1,370.5,342.1,370.6,342.1z"/>
                                <path fill="#9B978F" d="M359.2,337.9c0,0-0.1,0-0.1,0c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0.4,1.6-1.5,3-1.6,3
                                    c-0.1,0-0.1,0.1-0.1,0.2c0,0.1,0.1,0.1,0.1,0.1c0,0,3.7,0.6,5.3,0.9c0.5,0.1,1.1,0.2,1.6,0.2c1.2,0.1,2.5,0.3,2.7,0.7
                                    c0.4,0.6,1.6,1.8,2.3,1.9c0,0,0,0,0.1,0c0.2,0,0.4-0.1,0.4-0.2c0.2-0.2,0.2-0.6,0.2-0.7c0.4-0.4,0.4-0.8,0.3-1.1l0,0
                                    c0.2-0.3,0.2-0.6,0.2-0.8c0.1-0.1,0.2-0.4,0.1-0.7c-0.1-0.3-0.6-0.3-1.3-0.4c-0.3,0-0.7-0.1-1.1-0.1c-1.2-0.2-2.7-0.8-4.9-1.8
                                    C361.4,338.3,359.3,337.9,359.2,337.9C359.3,337.9,359.3,337.9,359.2,337.9L359.2,337.9z M369.6,344.8
                                    C369.6,344.8,369.6,344.8,369.6,344.8c-0.6,0-1.7-1.1-2.1-1.7c-0.3-0.5-1.5-0.7-3-0.8c-0.6-0.1-1.1-0.1-1.6-0.2
                                    c-1.3-0.3-4-0.7-4.9-0.8c0.2-0.2,0.5-0.4,0.7-0.7c0.6-0.7,0.8-1.4,0.7-2.1c0.6,0.1,2.3,0.6,3.9,1.3c2.3,1,3.8,1.6,5,1.8
                                    c0.4,0.1,0.8,0.1,1.1,0.1c0.5,0,1,0.1,1.1,0.2c0.1,0.1,0,0.3,0,0.3c0,0-0.1,0.1-0.1,0.1c-0.1,0-0.1,0.1,0,0.2
                                    c0,0,0.1,0.3-0.2,0.7c0,0-0.1,0.1,0,0.2c0,0,0.2,0.5-0.3,0.8c0,0-0.1,0.1-0.1,0.1c0,0.1,0,0.4-0.1,0.6
                                    C369.8,344.7,369.7,344.8,369.6,344.8L369.6,344.8z"/>
                            </g>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M360.5,339.6c0,0,0.1-0.1,0.1-0.1c0.1,0,0.2,0.1,0.2,0.2c0,0,0,1.1-0.8,2c-0.1,0.1-0.2,0.1-0.2,0
                                c-0.1-0.1-0.1-0.2,0-0.2C360.4,340.6,360.4,339.7,360.5,339.6C360.4,339.6,360.4,339.6,360.5,339.6z"/>
                            <path fill="#9B978F" d="M360.6,339.5c-0.1,0-0.1,0-0.1,0.1c0,0,0,0.1,0,0.1c0,0,0,1-0.7,1.8c-0.1,0.1,0,0.2,0,0.2
                                c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1-0.1c0.8-0.9,0.8-1.9,0.8-2C360.7,339.6,360.7,339.5,360.6,339.5
                                C360.6,339.5,360.6,339.5,360.6,339.5L360.6,339.5z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M369.3,344.2C369.3,344.2,369.3,344.1,369.3,344.2c0.1,0,0.4-0.3,0.9-0.2c0.1,0,0.1,0.1,0.1,0.2
                                c0,0.1-0.1,0.1-0.2,0.1c-0.3-0.1-0.6,0.1-0.6,0.1c-0.1,0-0.2,0-0.2,0C369.2,344.3,369.2,344.2,369.3,344.2z"/>
                            <path fill="#9B978F" d="M369.9,343.9c-0.3,0-0.6,0.2-0.6,0.2c0,0,0,0,0,0c0,0.1,0,0.1,0,0.2c0,0,0.1,0.1,0.1,0.1
                                c0,0,0.1,0,0.1,0c0,0,0.2-0.1,0.5-0.1c0,0,0.1,0,0.1,0c0,0,0,0,0,0c0.1,0,0.1,0,0.2-0.1c0-0.1,0-0.2-0.1-0.2
                                C370.1,343.9,370,343.9,369.9,343.9L369.9,343.9z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M368.7,344.4c0,0,0.1-0.1,0.2-0.1c0.1,0,0.1,0.1,0.1,0.2c0,0-0.7,3.2-0.9,4.6c0,0.1-0.1,0.2-0.2,0.1
                                c-0.1,0-0.2-0.1-0.1-0.2C367.9,347.7,368.6,344.6,368.7,344.4C368.7,344.5,368.7,344.4,368.7,344.4z"/>
                            <path fill="#9B978F" d="M368.8,344.4c-0.1,0-0.1,0-0.1,0.1c0,0,0,0,0,0.1c0,0.1-0.7,3.2-0.9,4.6c0,0.1,0.1,0.2,0.1,0.2
                                c0,0,0,0,0,0c0.1,0,0.1-0.1,0.2-0.1c0.1-1.4,0.9-4.5,0.9-4.6C369,344.5,368.9,344.4,368.8,344.4
                                C368.8,344.4,368.8,344.4,368.8,344.4L368.8,344.4z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M365.6,343.2C365.6,343.2,365.6,343.2,365.6,343.2c0.2-0.1,0.3,0,0.3,0c0,0,0.2,0.6-0.2,1.8
                                c-0.4,1.2-1.9,3.2-2,3.3c-0.1,0.1-0.2,0.1-0.2,0c-0.1-0.1-0.1-0.2,0-0.2c0,0,1.6-2,2-3.2c0.4-1.2,0.2-1.6,0.2-1.7
                                C365.5,343.3,365.5,343.3,365.6,343.2z"/>
                            <path fill="#9B978F" d="M365.7,343.2C365.7,343.2,365.7,343.2,365.7,343.2c-0.1,0-0.1,0-0.1,0.1c0,0,0,0.1,0,0.1
                                c0,0,0.1,0.5-0.2,1.7c-0.4,1.2-1.9,3.2-2,3.2c-0.1,0.1,0,0.2,0,0.2c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1-0.1c0.1-0.1,1.6-2.1,2-3.3
                                c0.4-1.3,0.2-1.8,0.2-1.8C365.8,343.2,365.7,343.2,365.7,343.2L365.7,343.2z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M362.6,351.3c0-0.1,0.1-0.1,0.2,0c0,0,0.9,0.6,1.4,1.3c0,0.1,0,0.2-0.1,0.2c-0.1,0-0.2,0-0.2-0.1
                                c-0.4-0.7-1.2-1.2-1.2-1.2C362.5,351.4,362.5,351.3,362.6,351.3C362.6,351.3,362.6,351.3,362.6,351.3z"/>
                            <path fill="#9B978F" d="M362.7,351.2c0,0-0.1,0-0.1,0.1c0,0,0,0,0,0c0,0.1,0,0.2,0,0.2c0,0,0.9,0.6,1.2,1.2
                                c0,0.1,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0c0.1,0,0.1-0.1,0.1-0.2C363.7,351.8,362.8,351.2,362.7,351.2
                                C362.8,351.2,362.7,351.2,362.7,351.2L362.7,351.2z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M369.8,346.2C369.8,346.2,369.8,346.2,369.8,346.2c0.2-0.1,0.2,0,0.3,0c0,0,0.3,0.9-0.4,1.9l0,0
                                c-0.1,0.1-0.2,0.1-0.2,0c-0.1-0.1-0.1-0.2,0-0.2c0,0,0,0,0,0c0.6-0.8,0.4-1.6,0.4-1.6C369.7,346.3,369.8,346.2,369.8,346.2z"/>
                            <path fill="#9B978F" d="M369.9,346.1C369.9,346.1,369.9,346.1,369.9,346.1c-0.1,0-0.1,0-0.1,0.1c0,0,0,0.1,0,0.1
                                c0,0,0.2,0.7-0.4,1.6c0,0,0,0,0,0c-0.1,0.1,0,0.2,0,0.2c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1-0.1l0,0c0.7-1,0.5-1.8,0.4-1.9
                                C370,346.2,370,346.1,369.9,346.1L369.9,346.1z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M364.2,342.8c0,0,0.1-0.1,0.1-0.1c0.1,0,0.2,0.1,0.2,0.2c0,0.1,0,2.4-2.1,5.2c0,0-0.1,0.1-0.1,0.1
                                c-0.1,0.1-0.2,0.1-0.2,0c-0.1-0.1-0.1-0.2,0-0.2c0,0,0,0,0,0c1.1-1.5,1.6-2.8,1.8-3.6C364.2,343.4,364.2,342.9,364.2,342.8
                                C364.2,342.8,364.2,342.8,364.2,342.8z"/>
                            <path fill="#9B978F" d="M364.4,342.7C364.4,342.7,364.4,342.7,364.4,342.7c-0.1,0-0.1,0-0.1,0.1c0,0,0,0.1,0,0.1
                                c0,0,0,0.6-0.2,1.5c-0.2,0.8-0.7,2.1-1.8,3.6c0,0,0,0,0,0c-0.1,0.1,0,0.2,0,0.2c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1-0.1
                                c0,0,0.1-0.1,0.1-0.1c2.1-2.8,2.1-5.1,2.1-5.2C364.5,342.8,364.4,342.7,364.4,342.7L364.4,342.7z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M358.9,351.4c0.2-0.3,0.5-0.6,0.8-0.8c0.7-0.6,1.3-0.6,1.3-0.6c0.1,0,0.2,0.1,0.2,0.2
                                c0,0.1-0.1,0.2-0.2,0.2c0,0-0.5,0-1.2,0.5c-0.6,0.5-1.4,1.5-1.9,3.6c0,0.1-0.1,0.1-0.2,0.1c-0.1,0-0.1-0.1-0.1-0.2
                                C358,353.1,358.4,352.1,358.9,351.4z"/>
                            <path fill="#9B978F" d="M361.1,350c0,0-0.6,0-1.3,0.6c-0.3,0.2-0.6,0.5-0.8,0.8c-0.5,0.7-1,1.7-1.3,3c0,0.1,0,0.2,0.1,0.2
                                c0,0,0,0,0,0c0.1,0,0.1,0,0.2-0.1c0.5-2.1,1.3-3.1,1.9-3.6c0.6-0.5,1.1-0.5,1.2-0.5c0,0,0,0,0,0c0.1,0,0.2-0.1,0.2-0.2
                                C361.2,350,361.1,350,361.1,350C361.1,350,361.1,350,361.1,350L361.1,350z"/>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M351.7,350.8c-0.4,0-0.7-0.1-0.9-0.1l-0.1,0l-0.1,0c0,0-0.5,0.1-1.1,0.1c-0.7,0-1.7-0.2-2.4-1l0,0
                                    l-0.1,0c-0.2-0.1-4.1-1.7-2.2-6.8c0-0.1,0.9-2.3,4.5-2.4l0.3,0c3.7,0,4.7,1.1,5.5,2.4c0,0,0.5,1.1-0.6,2.2l-0.2,0.2l0.1,0.2
                                    c0.1,0.1,1.3,1.6,0.4,3.5C354.1,350.7,352.3,350.8,351.7,350.8z"/>
                                <path fill="#9B978F" d="M349.6,340.9c3.5,0,4.5,1.1,5.3,2.3c0.1,0.1,0.4,1-0.5,1.9l-0.3,0.3l0.3,0.3c0,0.1,1.2,1.5,0.3,3.3
                                    c-0.7,1.5-2.4,1.6-2.9,1.6c-0.4,0-0.7-0.1-0.8-0.1l-0.2-0.1l-0.2,0c0,0-0.4,0.1-1,0.1c-0.7,0-1.6-0.2-2.2-0.9l-0.1-0.1l-0.1,0
                                    c-0.2-0.1-3.9-1.6-2.1-6.5c0-0.1,0.9-2.2,4.2-2.2L349.6,340.9 M349.6,340.4c-0.1,0-0.2,0-0.3,0c-3.8,0.1-4.7,2.5-4.7,2.5
                                    c-2,5.4,2.4,7.1,2.4,7.1c0.8,0.8,1.8,1,2.6,1c0.7,0,1.2-0.1,1.2-0.1c0.2,0.1,0.5,0.1,1,0.1c1.1,0,2.7-0.4,3.4-1.9
                                    c1-2.1-0.4-3.8-0.4-3.8c1.2-1.3,0.6-2.5,0.6-2.5C354.4,341.4,353.1,340.4,349.6,340.4L349.6,340.4z"/>
                            </g>
                            <g>
                                <path fill="#FFFFFF" d="M344.9,342.2c0.1-0.2,0.3-0.4,0.6-0.6c0.7-0.6,1.9-1.3,3.9-1.3c1.8,0,3.1,0.2,4.1,0.7
                                    c1,0.5,1.6,1.3,2,1.9c0,0,0,0,0,0c0,0,0.2,0.3,0.2,0.8c0,0.4-0.1,1.1-0.7,1.7c0.1,0.2,0.3,0.5,0.5,1.1
                                    c0.2,0.7,0.4,1.7-0.2,2.8c-1,2.1-3.7,2.1-4.5,1.9c-0.2,0-0.7,0.2-1.4,0.1c-1,0-1.9-0.4-2.5-1.1c-0.2-0.1-1.2-0.5-2-1.6
                                    c-1.4-1.9-1-4.2-0.5-5.7C344.5,342.8,344.6,342.5,344.9,342.2z M355.2,343c-1-1.6-2.3-2.5-5.8-2.5c-1,0-2.5,0.2-3.6,1.2
                                    c-0.7,0.6-0.9,1.2-0.9,1.2c-0.8,2.2-0.7,4,0.4,5.4c0.8,1.1,1.9,1.5,1.9,1.5c0,0,0,0,0.1,0c1.3,1.5,3.6,0.9,3.6,0.9
                                    c0,0,0.1,0,0.1,0c0.5,0.2,3.1,0.4,4.1-1.7c0.9-2-0.3-3.6-0.4-3.6c0-0.1,0-0.2,0-0.2C355.7,344.1,355.2,343.1,355.2,343z"/>
                                <path fill="#9B978F" d="M349.6,340.2c-0.1,0-0.2,0-0.3,0c-2,0-3.2,0.7-3.9,1.3c-0.2,0.2-0.4,0.4-0.6,0.6
                                    c-0.3,0.4-0.4,0.7-0.4,0.7c-0.6,1.6-1,3.8,0.5,5.7c0.8,1,1.8,1.5,2,1.6c0.6,0.7,1.5,1,2.5,1.1c0.1,0,0.1,0,0.2,0
                                    c0.6,0,1-0.1,1.1-0.1c0.2,0.1,0.5,0.1,1,0.1c1.1,0,2.8-0.4,3.5-2c0.5-1.1,0.4-2.1,0.2-2.8c-0.2-0.5-0.4-0.9-0.5-1.1
                                    c0.6-0.7,0.7-1.3,0.7-1.7c0-0.5-0.2-0.8-0.2-0.8c0,0,0,0,0,0c-0.4-0.7-1-1.4-2-1.9C352.5,340.4,351.3,340.2,349.6,340.2
                                    L349.6,340.2z M349.6,350.9c-0.8,0-1.8-0.2-2.5-1c0,0,0,0-0.1,0c0,0-1.1-0.4-1.9-1.5c-1.1-1.4-1.2-3.2-0.4-5.4
                                    c0,0,0.2-0.6,0.9-1.2c1.1-1,2.6-1.2,3.6-1.2c0.1,0,0.2,0,0.3,0c3.3,0,4.6,0.9,5.6,2.5c0,0.1,0.5,1.2-0.6,2.3
                                    c-0.1,0.1-0.1,0.1,0,0.2c0.1,0.1,1.3,1.7,0.4,3.6c-0.7,1.5-2.2,1.8-3.2,1.8c-0.4,0-0.8-0.1-0.9-0.1c0,0,0,0-0.1,0c0,0,0,0,0,0
                                    C350.7,350.8,350.3,350.9,349.6,350.9L349.6,350.9z"/>
                            </g>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M346,342.9c0,0,0.1-0.1,0.2-0.1c0.1,0,1.6,0.4,3.1,1.6c1.7,1.4,3.4,0.8,3.6,0.7
                                c1.2-0.5,1.8-0.1,1.9,0.1c0.1,0.1,0.1,0.2,0,0.2c-0.1,0.1-0.2,0.1-0.2,0c-0.3-0.3-0.9-0.3-1.6,0c-0.2,0.1-2.1,0.7-3.9-0.8
                                c-1.4-1.2-3-1.6-3-1.6C346.1,343.1,346,343,346,342.9C346,342.9,346,342.9,346,342.9z"/>
                            <path fill="#9B978F" d="M346.2,342.8c-0.1,0-0.1,0-0.1,0.1c0,0,0,0,0,0.1c0,0.1,0,0.2,0.1,0.2c0,0,1.5,0.3,3,1.6
                                c0.9,0.8,1.9,1,2.6,1c0.7,0,1.2-0.2,1.3-0.2c0.3-0.1,0.7-0.2,1-0.2c0.3,0,0.5,0.1,0.6,0.2c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0
                                c0.1-0.1,0.1-0.2,0-0.2c-0.1-0.1-0.3-0.3-0.9-0.3c-0.3,0-0.6,0.1-1.1,0.2c-0.1,0-0.5,0.2-1.1,0.2c-0.7,0-1.6-0.2-2.4-0.9
                                C347.8,343.2,346.3,342.8,346.2,342.8C346.2,342.8,346.2,342.8,346.2,342.8L346.2,342.8z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M354.2,346.7C354.3,346.6,354.3,346.6,354.2,346.7c0.2-0.1,0.2,0,0.3,0c0,0.1,0.5,1.3-0.1,2.4
                                c-0.3,0.7-1,1.1-1.9,1.4c-0.1,0-0.2,0-0.2-0.1c0-0.1,0-0.2,0.1-0.2c0.8-0.2,1.4-0.6,1.7-1.2c0.5-1,0.1-2.1,0.1-2.1
                                C354.2,346.8,354.2,346.7,354.2,346.7z"/>
                            <path fill="#9B978F" d="M354.4,346.6C354.3,346.6,354.3,346.6,354.4,346.6c-0.1,0-0.1,0-0.1,0.1c0,0,0,0.1,0,0.2
                                c0,0,0.4,1.1-0.1,2.1c-0.3,0.6-0.9,1-1.7,1.2c-0.1,0-0.1,0.1-0.1,0.2c0,0.1,0.1,0.1,0.2,0.1c0,0,0,0,0,0
                                c0.9-0.2,1.6-0.7,1.9-1.4c0.6-1.1,0.1-2.3,0.1-2.4C354.5,346.6,354.4,346.6,354.4,346.6L354.4,346.6z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M350.6,349.8c0,0,0.1-0.1,0.1-0.1c1.9,0.1,2.2-0.8,2.2-0.9c0-0.1,0.1-0.1,0.2-0.1
                                c0.1,0,0.1,0.1,0.1,0.2c0,0-0.4,1.1-2.5,1.1C350.7,350,350.6,349.9,350.6,349.8C350.6,349.8,350.6,349.8,350.6,349.8z"/>
                            <path fill="#9B978F" d="M353.1,348.7c-0.1,0-0.1,0-0.1,0.1c0,0-0.3,0.9-2,0.9c-0.1,0-0.1,0-0.2,0c0,0,0,0,0,0
                                c-0.1,0-0.1,0-0.1,0.1c0,0,0,0.1,0,0.1c0,0.1,0.1,0.2,0.2,0.2c0.1,0,0.1,0,0.2,0c1.9,0,2.3-1,2.3-1.1
                                C353.3,348.9,353.3,348.8,353.1,348.7C353.2,348.7,353.1,348.7,353.1,348.7L353.1,348.7z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M347.7,341.3C347.8,341.3,347.8,341.2,347.7,341.3c2.8-0.7,4.7,0.1,4.8,0.2c0.1,0,0.1,0.1,0.1,0.2
                                c0,0.1-0.1,0.1-0.2,0.1c0,0-1.9-0.9-4.5-0.2c-0.1,0-0.2,0-0.2-0.1C347.7,341.4,347.7,341.3,347.7,341.3z"/>
                            <path fill="#9B978F" d="M349.9,341c-0.6,0-1.3,0.1-2.1,0.3c0,0-0.1,0-0.1,0.1c0,0,0,0.1,0,0.1c0,0.1,0.1,0.1,0.2,0.1
                                c0,0,0,0,0,0c0.7-0.2,1.4-0.2,2-0.2c1.5,0,2.5,0.4,2.5,0.4c0,0,0,0,0.1,0c0.1,0,0.1,0,0.1-0.1c0-0.1,0-0.2-0.1-0.2
                                C352.4,341.4,351.4,341,349.9,341L349.9,341z"/>
                        </g>
                    </g>
                    <g id="boy">
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M330.4,395.4c-1.3-1-2.6-2.1-2.7-2.4c0-0.1,0-0.1,0-0.1l1,0.4l-0.7-0.8c-0.2-0.2-0.5-0.6-0.4-0.7
                                    c0,0,0,0,0,0c0.1,0,0.1,0,0.2,0.1l0.3-0.4c-0.3-0.4-0.5-0.8-0.5-0.9c0,0,0.1,0,0.1,0c0.1,0,0.2,0.1,0.3,0.1l0.5,0.6l0-0.7
                                    c0,0,0-0.2,0.1-0.2c0,0,0,0,0.1,0c0.5,0.1,1.7,1.3,2.2,2c0.2,0.3,0.3,0.4,0.6,0.4c0.3,0,0.4-0.3,0.5-0.7
                                    c0-0.1,0.1-0.2,0.1-0.4c0.1-0.3,0.3-0.5,0.4-0.5c0.1,0.1,0.1,0.2,0.1,0.5c0,0.8,0,2,0,2.4L330.4,395.4z"/>
                                <path fill="#9B978F" d="M328.7,390.4c0.4,0.1,1.4,1.1,1.9,1.9c0.2,0.3,0.4,0.5,0.8,0.5c0.5,0,0.6-0.4,0.8-0.8
                                    c0-0.1,0.1-0.2,0.1-0.4c0-0.1,0.1-0.1,0.1-0.2c0,0,0,0,0,0c0,0.7,0,1.8,0,2.3l-2,1.3c-0.8-0.6-1.7-1.3-2.2-1.8l1.5,0.5
                                    l-1.5-1.6c-0.2-0.2-0.3-0.4-0.3-0.5l0.5-0.5l0.4,0.5L328.7,390.4 M328.6,389.9c-0.5,0-0.4,0.5-0.4,0.5
                                    c-0.1-0.1-0.3-0.2-0.5-0.2c-0.1,0-0.2,0-0.3,0.2c-0.2,0.4,0.5,1.2,0.5,1.2s-0.2-0.2-0.4-0.2c-0.1,0-0.2,0-0.2,0.2
                                    c-0.2,0.4,0.4,1,0.4,1s0,0-0.1,0c-0.1,0-0.3,0.1-0.3,0.4c0,0.5,3,2.7,3,2.7l2.6-1.7c0,0,0-1.5,0-2.5c0-0.5-0.2-0.7-0.4-0.7
                                    c-0.2,0-0.5,0.2-0.7,0.7c-0.2,0.5-0.3,0.9-0.5,0.9c-0.1,0-0.2-0.1-0.3-0.3c-0.5-0.7-1.7-2-2.3-2.1
                                    C328.7,389.9,328.7,389.9,328.6,389.9L328.6,389.9z"/>
                            </g>
                            <g>
                                <path fill="#FFFFFF" d="M333,391.4C333,391.4,333,391.4,333,391.4c0,1.1,0,2.6,0,2.6c0,0.1,0,0.1-0.1,0.1l-2.6,1.7
                                    c-0.1,0-0.1,0-0.2,0c0,0-0.7-0.6-1.5-1.2c-1.5-1.3-1.5-1.6-1.5-1.7c0-0.2,0.1-0.4,0.2-0.5c0,0,0,0,0,0c-0.2-0.2-0.4-0.6-0.3-1
                                    c0.1-0.2,0.2-0.3,0.3-0.3c0,0,0,0,0,0c-0.2-0.3-0.4-0.7-0.2-0.9c0.1-0.2,0.2-0.3,0.4-0.3c0.1,0,0.3,0,0.4,0.1
                                    c0-0.1,0.1-0.2,0.2-0.2c0.1-0.1,0.3-0.2,0.5-0.1c0.7,0.1,2,1.6,2.4,2.2c0.1,0.1,0.2,0.2,0.2,0.2c0-0.1,0.1-0.2,0.2-0.4
                                    c0-0.1,0.1-0.2,0.2-0.4c0.2-0.5,0.6-0.8,0.9-0.8C332.7,390.6,333,390.8,333,391.4z M332.7,393.9c0-0.3,0-1.6,0-2.4
                                    c0-0.4-0.1-0.5-0.2-0.5c-0.1,0-0.4,0.1-0.5,0.6c-0.1,0.1-0.1,0.3-0.1,0.4c-0.1,0.4-0.2,0.6-0.4,0.6c-0.2,0-0.3-0.1-0.5-0.4
                                    c-0.5-0.7-1.7-1.9-2.2-2c-0.1,0-0.2,0-0.3,0c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0,0.1-0.1,0.2c-0.1,0-0.1,0-0.2,0
                                    c0-0.1-0.2-0.2-0.4-0.2c0,0-0.1,0-0.1,0.1c-0.1,0.2,0.2,0.7,0.5,1c0.1,0.1,0.1,0.2,0,0.2c-0.1,0.1-0.2,0.1-0.2,0
                                    c-0.1-0.1-0.2-0.1-0.3-0.1c0,0,0,0-0.1,0.1c-0.1,0.2,0.2,0.7,0.4,0.8c0.1,0.1,0.1,0.1,0,0.2c0,0.1-0.1,0.1-0.2,0.1
                                    c0,0-0.1,0-0.1,0c0,0-0.1,0.1-0.1,0.2c0,0,0.1,0.3,1.4,1.4c0.6,0.5,1.1,0.9,1.4,1.1L332.7,393.9z"/>
                                <path fill="#9B978F" d="M328.6,389.7c-0.2,0-0.3,0.1-0.4,0.1c-0.1,0.1-0.1,0.2-0.2,0.2c-0.1-0.1-0.2-0.1-0.4-0.1
                                    c0,0,0,0-0.1,0c-0.2,0-0.3,0.1-0.4,0.3c-0.1,0.3,0,0.6,0.2,0.9c0,0,0,0,0,0c-0.1,0-0.2,0.1-0.3,0.3c-0.1,0.3,0.1,0.7,0.3,1
                                    c0,0,0,0,0,0c-0.1,0.1-0.2,0.3-0.2,0.5c0,0.1,0,0.4,1.5,1.7c0.7,0.6,1.5,1.2,1.5,1.2c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0l2.6-1.7
                                    c0,0,0.1-0.1,0.1-0.1c0,0,0-1.5,0-2.5c0,0,0-0.1,0-0.1c0-0.6-0.3-0.8-0.5-0.8c0,0-0.1,0-0.1,0c-0.3,0-0.6,0.3-0.8,0.8
                                    c-0.1,0.1-0.1,0.3-0.2,0.4c-0.1,0.1-0.1,0.3-0.2,0.4c0,0-0.1-0.1-0.2-0.2c-0.4-0.6-1.7-2-2.4-2.2
                                    C328.7,389.7,328.7,389.7,328.6,389.7L328.6,389.7z M328.2,390.6C328.2,390.6,328.2,390.6,328.2,390.6c0.1,0,0.2-0.1,0.2-0.2
                                    c0-0.1,0-0.2,0.1-0.3c0,0,0.1-0.1,0.2-0.1c0,0,0.1,0,0.1,0c0.5,0.1,1.6,1.3,2.2,2c0.2,0.3,0.3,0.4,0.5,0.4c0,0,0,0,0,0
                                    c0.2,0,0.3-0.2,0.4-0.6c0-0.1,0.1-0.2,0.1-0.4c0.2-0.4,0.4-0.6,0.5-0.6c0,0,0,0,0,0c0.1,0,0.2,0.2,0.2,0.5c0,0.9,0,2.1,0,2.4
                                    l-2.4,1.6c-0.2-0.2-0.8-0.6-1.4-1.1c-1.4-1.1-1.4-1.4-1.4-1.4c0-0.2,0-0.2,0.1-0.2c0,0,0,0,0.1,0c0,0,0,0,0.1,0c0,0,0,0,0.1,0
                                    c0.1,0,0.1,0,0.1-0.1c0-0.1,0-0.2,0-0.2c-0.2-0.2-0.5-0.6-0.4-0.8c0-0.1,0.1-0.1,0.1-0.1c0,0,0,0,0,0c0.1,0,0.2,0.1,0.3,0.1
                                    c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1-0.1c0.1-0.1,0.1-0.2,0-0.2c-0.3-0.4-0.6-0.8-0.5-1c0-0.1,0.1-0.1,0.1-0.1c0,0,0,0,0,0
                                    c0.1,0,0.3,0.1,0.3,0.2C328.1,390.5,328.1,390.6,328.2,390.6L328.2,390.6z"/>
                            </g>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M329.2,393.7c0,0,0,0.1,0,0.1c-0.1,0.1-0.2,0.1-0.2,0l-1.2-1.1c-0.1-0.1-0.1-0.2,0-0.2
                                c0.1-0.1,0.2-0.1,0.2,0l1.2,1.1C329.2,393.6,329.2,393.6,329.2,393.7z"/>
                            <path fill="#9B978F" d="M327.8,392.4c0,0-0.1,0-0.1,0.1c-0.1,0.1-0.1,0.2,0,0.2l1.2,1.1c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1-0.1
                                c0,0,0-0.1,0-0.1c0,0,0-0.1-0.1-0.1l-1.2-1.1C327.9,392.4,327.8,392.4,327.8,392.4L327.8,392.4z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M329.7,393c0,0,0,0.1,0,0.1c-0.1,0.1-0.2,0.1-0.2,0l-1.5-1.5c-0.1-0.1-0.1-0.2,0-0.2
                                c0.1-0.1,0.2-0.1,0.2,0l1.5,1.5C329.6,393,329.7,393,329.7,393z"/>
                            <path fill="#9B978F" d="M327.9,391.4c0,0-0.1,0-0.1,0.1c-0.1,0.1-0.1,0.2,0,0.2l1.5,1.5c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1-0.1
                                c0,0,0.1-0.1,0-0.1c0,0,0-0.1-0.1-0.1l-1.5-1.5C328,391.4,328,391.4,327.9,391.4L327.9,391.4z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M330.1,392.4c0,0,0,0.1,0,0.1c-0.1,0.1-0.2,0.1-0.2,0c0,0-0.5-0.4-0.9-0.9c-0.9-0.9-0.9-1.2-0.9-1.3
                                c0-0.1,0.1-0.1,0.2-0.1c0.1,0,0.1,0.1,0.1,0.2c0,0.2,0.9,1.2,1.7,1.9C330.1,392.4,330.1,392.4,330.1,392.4z"/>
                            <path fill="#9B978F" d="M328.2,390.2c-0.1,0-0.1,0.1-0.2,0.1c0,0.1,0,0.4,0.9,1.3c0.4,0.5,0.9,0.9,0.9,0.9c0,0,0.1,0,0.1,0
                                c0,0,0.1,0,0.1-0.1c0,0,0-0.1,0-0.1c0,0,0-0.1-0.1-0.1c-0.8-0.8-1.7-1.7-1.7-1.9C328.4,390.3,328.3,390.2,328.2,390.2
                                C328.2,390.2,328.2,390.2,328.2,390.2L328.2,390.2z"/>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M362.5,409.5c-0.3-0.2-1.3-0.7-1.5-1.3c-0.1-0.2-0.1-0.5,0.1-0.7c0.7-1.3,3.3-3.7,4.5-3.7
                                    c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.2,0.2c0.4,0.8-0.4,3.3-0.8,4.4L362.5,409.5z"/>
                                <path fill="#9B978F" d="M365.5,404L365.5,404C365.5,404,365.6,404,365.5,404c0.4,0.3,0,2.2-0.6,4.1l-2.4,1.1
                                    c-0.4-0.2-1.1-0.7-1.3-1.1c-0.1-0.2,0-0.3,0.1-0.5C362,406.2,364.5,404,365.5,404 M365.5,403.5c-1.3,0-4,2.5-4.7,3.8
                                    c-0.8,1.4,1.7,2.5,1.7,2.5l2.8-1.3c0,0,1.7-4.5,0.5-4.9C365.7,403.5,365.6,403.5,365.5,403.5L365.5,403.5z"/>
                            </g>
                            <g>
                                <path fill="#FFFFFF" d="M366.3,404.4c0.1,1.5-0.9,4-0.9,4.1c0,0,0,0.1-0.1,0.1l-2.8,1.3c0,0-0.1,0-0.1,0
                                    c-0.1,0-1.5-0.6-1.9-1.6c-0.1-0.4-0.1-0.7,0.1-1.1c0.4-0.7,1.3-1.8,2.3-2.6c0.7-0.6,2-1.5,2.8-1.3c0.2,0.1,0.3,0.2,0.4,0.4
                                    C366.3,403.9,366.3,404.1,366.3,404.4z M365.1,408.3c0.4-1,1.2-3.6,0.8-4.4c-0.1-0.1-0.1-0.2-0.2-0.2
                                    c-0.5-0.1-1.4,0.3-2.5,1.2c-1,0.8-1.9,1.8-2.3,2.5c-0.1,0.3-0.2,0.5-0.1,0.8c0.3,0.7,1.3,1.3,1.6,1.4L365.1,408.3z"/>
                                <path fill="#9B978F" d="M365.5,403.3c-0.8,0-1.9,0.8-2.5,1.3c-1,0.8-2,1.9-2.3,2.6c-0.2,0.3-0.2,0.7-0.1,1.1
                                    c0.3,1,1.8,1.6,1.9,1.6c0,0,0,0,0.1,0c0,0,0.1,0,0.1,0l2.8-1.3c0,0,0.1-0.1,0.1-0.1c0-0.1,1-2.7,0.9-4.1
                                    c0-0.3-0.1-0.5-0.1-0.7c-0.1-0.2-0.2-0.3-0.4-0.4C365.7,403.3,365.6,403.3,365.5,403.3L365.5,403.3z M362.5,409.6
                                    c-0.3-0.1-1.4-0.7-1.6-1.4c-0.1-0.3-0.1-0.5,0.1-0.8c0.4-0.7,1.3-1.7,2.3-2.5c0.9-0.8,1.8-1.2,2.3-1.2c0.1,0,0.1,0,0.2,0
                                    c0.1,0,0.2,0.1,0.2,0.2c0.4,0.8-0.4,3.4-0.8,4.4L362.5,409.6L362.5,409.6z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M371.9,418.6c-1.7,0-4.5-1.3-4.5-1.9c0-0.8,0.2-2.2,0.3-2.7c0.4-0.2,1.6-0.6,2.2-1.1
                                    c0.2,0.5,0.6,1.5,1.3,2.3c0.7,0.8,1.7,2.4,1.5,3.1c0,0.2-0.1,0.2-0.3,0.3C372.2,418.6,372.1,418.6,371.9,418.6z"/>
                                <path fill="#9B978F" d="M369.7,413.3c0.2,0.6,0.6,1.4,1.2,2.1c0.7,0.8,1.6,2.3,1.4,2.8c0,0.1,0,0.1-0.1,0.1
                                    c-0.1,0-0.2,0-0.3,0c-1.6,0-4.2-1.2-4.3-1.7c0-0.7,0.2-1.9,0.2-2.5C368.3,414,369.1,413.6,369.7,413.3 M370,412.5
                                    c-0.5,0.5-2.6,1.3-2.6,1.3s-0.3,1.8-0.3,2.8c0,0.9,3.2,2.2,4.8,2.2c0.2,0,0.3,0,0.5-0.1c1.3-0.4-0.1-2.8-1-3.8
                                    C370.4,414,370,412.5,370,412.5L370,412.5z"/>
                            </g>
                            <g>
                                <path fill="#FFFFFF" d="M373.1,418c0,0.1,0,0.3,0,0.4c-0.1,0.3-0.3,0.5-0.6,0.6c-1.1,0.3-3.7-0.5-4.8-1.4
                                    c-0.4-0.3-0.7-0.6-0.7-0.9c0-1,0.3-2.8,0.3-2.9c0-0.1,0.1-0.1,0.1-0.1c0,0,2-0.8,2.5-1.3c0,0,0.1-0.1,0.2,0
                                    c0.1,0,0.1,0.1,0.1,0.1c0,0,0.4,1.5,1.3,2.4C372,415.5,373,417,373.1,418z M367.3,416.6c0,0.2,0.2,0.4,0.5,0.6
                                    c1.2,0.9,3.6,1.6,4.5,1.3c0.2-0.1,0.3-0.2,0.4-0.3c0.2-0.7-0.7-2.4-1.5-3.1c-0.7-0.8-1.2-1.9-1.3-2.3c-0.6,0.5-2,1-2.3,1.1
                                    C367.5,414.3,367.2,415.8,367.3,416.6z"/>
                                <path fill="#9B978F" d="M370,412.3c0,0-0.1,0-0.1,0c-0.5,0.5-2.5,1.3-2.5,1.3c-0.1,0-0.1,0.1-0.1,0.1c0,0.1-0.3,1.9-0.3,2.9
                                    c0,0.3,0.2,0.6,0.7,0.9c1,0.7,3.1,1.5,4.3,1.5c0.2,0,0.4,0,0.5-0.1c0.3-0.1,0.5-0.3,0.6-0.6c0-0.1,0-0.2,0-0.4
                                    c0-1-1-2.5-1.6-3.1c-0.9-0.9-1.3-2.4-1.3-2.4C370.1,412.4,370.1,412.3,370,412.3C370,412.3,370,412.3,370,412.3L370,412.3z
                                    M371.9,418.7c-1.1,0-3.1-0.6-4.1-1.4c-0.3-0.2-0.5-0.5-0.5-0.6c0-0.8,0.2-2.3,0.3-2.7c0.4-0.1,1.7-0.7,2.3-1.1
                                    c0.2,0.5,0.6,1.6,1.3,2.3c0.7,0.8,1.7,2.4,1.5,3.1c-0.1,0.2-0.2,0.3-0.4,0.3C372.2,418.7,372.1,418.7,371.9,418.7L371.9,418.7
                                    z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M365.5,423.1c-4.6,0-13.1-4-14.3-4.5l-0.4-11.9c0.7-0.8,7.2-8.8,12.7-8.8c0.5,0,0.9,0.1,1.3,0.2
                                    c5.5,1.5,5.2,12.8,5.2,14c-0.7,0.6-2.3,1.3-2.3,1.3l-0.2,0.1l0.1,0.2c0,0.1,3.2,6.2,0.1,8.7
                                    C367.3,422.9,366.5,423.1,365.5,423.1C365.5,423.1,365.5,423.1,365.5,423.1z M364,404.7c-6.3,4-6.9,6-7,7.6
                                    c-0.1,1.6,5.3,3.6,6.4,4l0.6,0.2l-0.3-0.5c-1.1-2.3-1.3-5.2-1.4-5.7c1-1.3,2.9-1.6,2.9-1.6l0.3,0l-1.3-4.1L364,404.7z"/>
                                <path fill="#9B978F" d="M363.5,398.2c0.4,0,0.9,0.1,1.3,0.2c5.2,1.4,5.1,12,5,13.7c-0.6,0.5-1.8,1-2.2,1.2l-0.5,0.2l0.2,0.5
                                    c0,0.1,3.1,6,0.2,8.4c-0.4,0.4-1.1,0.5-2.1,0.5c-4.4,0-12.4-3.7-14-4.4l-0.3-11.7C352.1,405.7,358.4,398.2,363.5,398.2
                                    M364.5,417l-0.5-1.1c-1-2.1-1.3-4.8-1.3-5.6c0.9-1.1,2.6-1.4,2.7-1.4l0.6-0.1l-0.2-0.6l-1.1-3.5l-0.2-0.6l-0.6,0.4
                                    c-6.4,4.1-7,6.1-7.1,7.8c-0.1,1.7,4.6,3.5,6.6,4.2L364.5,417 M363.5,397.7c-5.9,0-12.9,8.9-12.9,8.9l0.4,12.2
                                    c0,0,9.5,4.6,14.5,4.6c1,0,1.9-0.2,2.4-0.6c3.2-2.7-0.1-9-0.1-9s1.7-0.8,2.5-1.4c0,0,0.7-12.7-5.4-14.4
                                    C364.5,397.7,364,397.7,363.5,397.7L363.5,397.7z M363.6,416.1c0,0-6.3-2.2-6.2-3.8c0.1-1.5,0.6-3.4,6.9-7.4l1.1,3.5
                                    c0,0-2.1,0.3-3.1,1.7C362.2,410.2,362.3,413.5,363.6,416.1L363.6,416.1z"/>
                            </g>
                            <g>
                                <path fill="#FFFFFF" d="M370.5,409.5c0.1,1.6,0,2.7,0,2.7c0,0,0,0.1-0.1,0.1c-0.6,0.5-1.9,1.2-2.4,1.4
                                    c0.2,0.5,0.8,1.8,1.2,3.4c0.1,0.6,0.2,1.2,0.2,1.7c0.1,1.7-0.4,3.1-1.5,4c-1.4,1.2-4.7,0.9-9.8-0.9c-3.8-1.3-7.2-3-7.3-3
                                    c-0.1,0-0.1-0.1-0.1-0.1l-0.4-12.2c0,0,0-0.1,0-0.1c0,0,2.1-2.7,4.9-5c1.6-1.4,3.2-2.5,4.7-3.1c1.8-0.8,3.5-1.1,4.9-0.7
                                    c1.4,0.4,2.6,1.4,3.5,3c0.7,1.3,1.2,2.9,1.6,4.9C370.3,407,370.4,408.4,370.5,409.5z M370.1,412.1c0-0.5,0.1-3.4-0.4-6.5
                                    c-0.3-1.9-0.9-3.6-1.5-4.8c-0.8-1.5-2-2.5-3.3-2.9c-1.4-0.4-2.9-0.2-4.7,0.6c-1.4,0.6-3,1.7-4.6,3.1c-2.6,2.2-4.5,4.6-4.8,4.9
                                    l0.4,12c0.6,0.3,3.7,1.8,7.1,2.9c4.9,1.7,8.2,2.1,9.5,1c3.1-2.6-0.1-8.8-0.1-8.8c0,0,0-0.1,0-0.1c0,0,0-0.1,0.1-0.1
                                    C367.8,413.5,369.4,412.8,370.1,412.1z M365.4,408.4C365.4,408.5,365.4,408.5,365.4,408.4c-0.1,0.1-0.1,0.2-0.1,0.2
                                    c0,0-2,0.3-3,1.6c0,0.5,0.3,3.5,1.4,5.8c0,0.1,0,0.1,0,0.2s-0.1,0.1-0.2,0c0,0-1.6-0.6-3.2-1.3c-2.2-1-3.2-1.9-3.2-2.6
                                    c0-0.8,0.2-1.7,1.2-2.9c1.1-1.3,3-2.9,5.8-4.7c0,0,0.1,0,0.2,0c0.1,0,0.1,0.1,0.1,0.1L365.4,408.4
                                    C365.4,408.4,365.4,408.4,365.4,408.4z M362,410.2c0,0,0-0.1,0-0.1c0.9-1.2,2.5-1.6,3-1.8l-1-3.1c-2.7,1.7-4.5,3.2-5.5,4.5
                                    c-0.9,1.1-1.1,2-1.1,2.7c0,0.3,0.4,1,3,2.3c1.1,0.5,2.2,0.9,2.8,1.2C362.2,413.2,362,410.2,362,410.2L362,410.2z"/>
                                <path fill="#9B978F" d="M363.5,397.5c-1.1,0-2.2,0.3-3.5,0.9c-1.5,0.7-3,1.7-4.7,3.1c-2.8,2.4-4.9,5-4.9,5c0,0,0,0.1,0,0.1
                                    l0.4,12.2c0,0.1,0,0.1,0.1,0.1c0,0,3.5,1.7,7.3,3c3.1,1.1,5.6,1.6,7.3,1.6c1.1,0,2-0.2,2.5-0.7c1-0.9,1.5-2.2,1.5-4
                                    c0-0.5-0.1-1.1-0.2-1.7c-0.3-1.6-1-2.9-1.2-3.4c0.5-0.2,1.7-0.9,2.4-1.4c0,0,0.1-0.1,0.1-0.1c0,0,0.1-1.1,0-2.7
                                    c0-1.1-0.2-2.5-0.4-3.9c-0.3-2-0.9-3.6-1.6-4.9c-0.9-1.6-2.1-2.6-3.5-3C364.5,397.6,364,397.5,363.5,397.5L363.5,397.5z
                                    M365.5,423.2c-1.7,0-4.1-0.5-7.2-1.6c-3.4-1.2-6.6-2.7-7.1-2.9l-0.4-12c0.3-0.4,2.2-2.8,4.8-4.9c1.6-1.4,3.2-2.4,4.6-3.1
                                    c1.2-0.5,2.3-0.8,3.3-0.8c0.5,0,0.9,0.1,1.4,0.2c1.3,0.4,2.5,1.3,3.3,2.9c0.7,1.2,1.2,2.9,1.5,4.8c0.5,3,0.4,6,0.4,6.5
                                    c-0.7,0.6-2.4,1.4-2.4,1.4c0,0-0.1,0.1-0.1,0.1c0,0,0,0.1,0,0.1c0,0.1,3.2,6.2,0.1,8.8C367.3,423,366.6,423.2,365.5,423.2
                                    L365.5,423.2z M364.2,404.8C364.2,404.8,364.1,404.8,364.2,404.8c-2.9,1.8-4.8,3.4-5.9,4.7c-1,1.2-1.1,2.1-1.2,2.9
                                    c0,0.7,1,1.6,3.2,2.6c1.6,0.7,3.1,1.3,3.2,1.3c0,0,0,0,0.1,0c0,0,0.1,0,0.1-0.1c0-0.1,0.1-0.1,0-0.2c-1.1-2.3-1.4-5.3-1.4-5.8
                                    c1-1.3,2.9-1.6,3-1.6c0,0,0.1,0,0.1-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0,0l-1.1-3.5C364.3,404.8,364.3,404.8,364.2,404.8
                                    C364.2,404.8,364.2,404.8,364.2,404.8L364.2,404.8z M363.2,415.8c-0.6-0.2-1.7-0.6-2.8-1.2c-2.6-1.3-3-2-3-2.3
                                    c0-0.7,0.2-1.6,1.1-2.7c1-1.3,2.8-2.7,5.5-4.5l1,3.1c-0.6,0.1-2.1,0.5-3,1.8c0,0,0,0.1,0,0.1l0,0
                                    C362,410.2,362.2,413.2,363.2,415.8L363.2,415.8z"/>
                            </g>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M358.4,415c0,0.1,0,0.1-0.1,0.1c-0.1,0.1-0.2,0-0.2,0c0-0.1-0.9-1.4-0.9-2.7c0-0.1,0.1-0.2,0.2-0.2
                                s0.2,0.1,0.2,0.2C357.5,413.6,358.3,414.9,358.4,415C358.3,414.9,358.4,415,358.4,415z"/>
                            <path fill="#9B978F" d="M357.3,412.2c-0.1,0-0.2,0.1-0.2,0.2c0,1.3,0.9,2.6,0.9,2.7c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0
                                c0.1,0,0.1-0.1,0.1-0.1c0,0,0-0.1,0-0.1c0,0-0.9-1.3-0.8-2.5C357.5,412.3,357.4,412.2,357.3,412.2
                                C357.3,412.2,357.3,412.2,357.3,412.2L357.3,412.2z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M365.6,416.7C365.6,416.7,365.6,416.7,365.6,416.7c0,0.1-0.1,0.2-0.2,0.2c-1.1-0.2-1.9-0.6-1.9-0.6
                                c-0.1,0-0.1-0.1-0.1-0.2c0-0.1,0.1-0.1,0.2-0.1c0,0,0.8,0.4,1.8,0.6C365.6,416.6,365.6,416.6,365.6,416.7z"/>
                            <path fill="#9B978F" d="M363.6,415.9c-0.1,0-0.1,0-0.2,0.1c0,0.1,0,0.2,0.1,0.2c0,0,0.9,0.4,1.9,0.6c0,0,0,0,0,0
                                c0.1,0,0.2-0.1,0.2-0.1c0,0,0,0,0,0c0-0.1-0.1-0.1-0.1-0.2C364.5,416.3,363.7,415.9,363.6,415.9
                                C363.6,415.9,363.6,415.9,363.6,415.9L363.6,415.9z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M365.4,404c0,0.1,0,0.1-0.1,0.2c-0.8,0.3-0.9,0.7-0.9,0.8c0,0.1-0.1,0.2-0.2,0.1
                                c-0.1,0-0.2-0.1-0.1-0.2c0,0,0.1-0.6,1.2-1C365.3,403.8,365.4,403.9,365.4,404C365.4,404,365.4,404,365.4,404z"/>
                            <path fill="#9B978F" d="M365.2,403.9C365.2,403.9,365.2,403.9,365.2,403.9c-1.1,0.4-1.2,1-1.2,1c0,0.1,0,0.2,0.1,0.2
                                c0,0,0,0,0,0c0.1,0,0.2-0.1,0.2-0.1c0,0,0.1-0.5,0.9-0.8c0.1,0,0.1-0.1,0.1-0.2c0,0,0,0,0-0.1
                                C365.4,403.9,365.3,403.9,365.2,403.9L365.2,403.9z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M368,413.7c0,0.1,0,0.1-0.1,0.2c-0.1,0-0.2,0-0.2-0.1l-2.6-5.2c0-0.1,0-0.2,0.1-0.2
                                c0.1,0,0.2,0,0.2,0.1L368,413.7C368,413.6,368,413.6,368,413.7z"/>
                            <path fill="#9B978F" d="M365.3,408.3C365.2,408.3,365.2,408.3,365.3,408.3c-0.2,0.1-0.2,0.2-0.2,0.2l2.6,5.2
                                c0,0.1,0.1,0.1,0.2,0.1c0,0,0.1,0,0.1,0c0.1,0,0.1-0.1,0.1-0.2c0,0,0,0,0-0.1l-2.6-5.2C365.4,408.3,365.3,408.3,365.3,408.3
                                L365.3,408.3z"/>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M355.3,421.7c-0.3,0-0.7-0.1-1.3-0.3l-0.4-0.1c-1.2-0.3-3.1-0.6-4.5-0.8c-4.9-0.4-11.9-2.6-13.1-3
                                    l0.1-4.2l-0.4-4.2c0.9-0.4,4.9-2,8.7-2.8c2.9-0.8,4.7-1.6,5.9-2.1c0.8-0.3,1.3-0.6,1.6-0.6c0.4,0,0.5,0.3,1,1.6
                                    c0.6,1.6,0.6,2.8,0.6,4c0,1.3,0,2.4,0.7,3.8c1.4,2.7,2.1,4.7,1.9,7C355.9,421.5,355.7,421.7,355.3,421.7L355.3,421.7z"/>
                                <path fill="#9B978F" d="M351.8,403.8c0.2,0,0.4,0.4,0.8,1.4c0.6,1.5,0.6,2.7,0.6,3.9c0,1.3,0,2.5,0.7,3.9
                                    c1.4,2.6,2.1,4.6,1.9,6.9c-0.1,1.6-0.3,1.6-0.5,1.6c-0.3,0-0.7-0.1-1.3-0.3l-0.4-0.1c-0.9-0.2-2.5-0.5-4.6-0.8
                                    c-4.7-0.4-11.3-2.4-12.9-2.9l0.1-4l0,0l0,0l-0.4-4c1.1-0.5,5-2,8.5-2.8c2.9-0.8,4.7-1.6,5.9-2.1
                                    C351,404,351.5,403.8,351.8,403.8 M351.8,403.3c-0.9,0-2.6,1.3-7.6,2.7c-4.3,0.9-8.9,2.9-8.9,2.9l0.5,4.4l-0.1,4.4
                                    c0,0,7.9,2.6,13.3,3.1c1.5,0.2,3.4,0.5,4.5,0.8c0.8,0.2,1.4,0.4,1.8,0.4c0.7,0,0.9-0.5,1-2c0.2-2.5-0.6-4.6-2-7.2
                                    c-1.3-2.5-0.1-4.5-1.3-7.8C352.5,403.7,352.3,403.3,351.8,403.3L351.8,403.3z"/>
                            </g>
                            <g>
                                <path fill="#FFFFFF" d="M356.5,418.7c0,0.4,0,0.8,0,1.2c-0.1,1.1-0.2,1.8-0.6,2c-0.4,0.3-1,0.1-2-0.1c-0.1,0-0.3-0.1-0.4-0.1
                                    c-0.9-0.2-2.4-0.5-4.4-0.8c-2.8-0.2-6.3-1.1-8.7-1.7c-2.6-0.7-4.6-1.4-4.6-1.4c-0.1,0-0.1-0.1-0.1-0.2l0.1-4.4l-0.5-4.4
                                    c0-0.1,0-0.1,0.1-0.2c0,0,4.7-2,8.9-2.9c2.9-0.8,4.7-1.6,5.8-2.1c1.1-0.5,1.7-0.7,2.1-0.5c0.4,0.2,0.7,0.7,1.1,1.8
                                    c0.6,1.6,0.7,3,0.7,4.2c0,1.2,0,2.3,0.7,3.6C355.7,414.9,356.4,416.8,356.5,418.7z M335.8,417.5c1,0.3,8.2,2.6,13.2,3
                                    c0,0,0,0,0,0c2.1,0.3,3.6,0.6,4.5,0.8c0.1,0,0.3,0.1,0.4,0.1c0.9,0.2,1.4,0.4,1.7,0.2c0.3-0.2,0.4-0.7,0.5-1.8
                                    c0.2-2.4-0.5-4.4-1.9-7.1c-0.7-1.3-0.7-2.5-0.7-3.7c0-1.2,0-2.5-0.6-4c-0.4-0.9-0.6-1.5-0.9-1.6c-0.3-0.1-0.9,0.1-1.8,0.5
                                    c-1.2,0.5-3,1.3-5.9,2.1c0,0,0,0,0,0c-3.8,0.8-8,2.5-8.7,2.9l0.4,4.3c0,0,0,0,0,0L335.8,417.5z"/>
                                <path fill="#9B978F" d="M351.8,403.1c-0.4,0-0.9,0.2-1.8,0.6c-1.2,0.5-2.9,1.3-5.8,2.1c-4.2,0.9-8.9,2.9-8.9,2.9
                                    c-0.1,0-0.1,0.1-0.1,0.2l0.5,4.4l-0.1,4.4c0,0.1,0,0.1,0.1,0.2c0,0,2,0.7,4.6,1.4c2.4,0.7,5.9,1.5,8.7,1.7
                                    c2,0.3,3.5,0.6,4.4,0.8c0.1,0,0.3,0.1,0.4,0.1c0.6,0.2,1.1,0.3,1.4,0.3c0.2,0,0.4,0,0.5-0.1c0.4-0.3,0.5-0.9,0.6-2
                                    c0-0.4,0-0.8,0-1.2c-0.1-2-0.8-3.8-2-6.1c-0.6-1.2-0.6-2.4-0.7-3.6c0-1.2,0-2.5-0.7-4.2c-0.4-1-0.6-1.6-1.1-1.8
                                    C352,403.1,351.9,403.1,351.8,403.1L351.8,403.1z M355.3,421.8c-0.3,0-0.7-0.1-1.4-0.3c-0.1,0-0.3-0.1-0.4-0.1
                                    c-0.9-0.2-2.4-0.5-4.5-0.8c0,0,0,0,0,0c-5-0.4-12.2-2.7-13.2-3l0.1-4.3c0,0,0,0,0,0l-0.4-4.3c0.7-0.3,4.9-2,8.7-2.9
                                    c0,0,0,0,0,0c2.9-0.8,4.7-1.6,5.9-2.1c0.8-0.3,1.3-0.6,1.6-0.6c0.1,0,0.1,0,0.2,0c0.3,0.1,0.5,0.7,0.9,1.6
                                    c0.6,1.6,0.6,2.8,0.6,4c0,1.2,0,2.4,0.7,3.7c1.4,2.7,2.2,4.7,1.9,7.1c-0.1,1.1-0.2,1.6-0.5,1.8
                                    C355.5,421.7,355.4,421.8,355.3,421.8L355.3,421.8z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M331,436.9c-0.2,0-0.2-0.2-0.2-0.2l0-0.7l-0.4,0.6c0,0-0.2,0.2-0.3,0.2c-0.1-0.2,0.1-0.6,0.3-1
                                        l-0.4-0.3c-0.1,0.1-0.2,0.1-0.2,0.1c-0.1-0.2,0.1-0.5,0.3-0.8l0.7-0.9c0,0-1,0.5-1,0.5c0,0,0,0-0.1-0.1
                                        c0-0.3,1.3-1.6,2.5-2.6l2.4,1.3c0,0.4,0.1,1.6,0.2,2.4c0,0.3-0.1,0.4-0.1,0.5c0,0,0,0,0,0c-0.1,0-0.3-0.1-0.5-0.5
                                        c-0.1-0.1-0.1-0.3-0.2-0.4c-0.2-0.4-0.3-0.6-0.6-0.6c-0.2,0-0.4,0.2-0.5,0.5c-0.4,0.8-1.5,2-1.9,2.2
                                        C331.1,436.9,331,436.9,331,436.9z"/>
                                    <path fill="#9B978F" d="M332.3,431.8l0.8,0.4l-2.4,2.2l1.1-1.3l-1.4,0.7C330.8,433.3,331.6,432.5,332.3,431.8 M333.2,432.3
                                        l1.3,0.7c0,0.5,0.1,1.5,0.2,2.3c0,0,0,0,0,0c0,0-0.1-0.1-0.1-0.2c-0.1-0.1-0.1-0.3-0.2-0.4c-0.2-0.4-0.4-0.8-0.8-0.8
                                        c-0.4,0-0.6,0.4-0.8,0.6c-0.5,0.8-1.3,1.8-1.7,2l0-1.3L333.2,432.3 M332.3,431.2c0,0-2.8,2.4-2.7,3c0,0.3,0.2,0.4,0.3,0.4
                                        c0.1,0,0.1,0,0.1,0s-0.6,0.7-0.4,1.1c0.1,0.1,0.1,0.2,0.2,0.2c0.2,0,0.4-0.2,0.4-0.2s-0.6,0.9-0.4,1.2
                                        c0.1,0.1,0.2,0.2,0.3,0.2c0.2,0,0.4-0.2,0.5-0.3c0,0,0,0.5,0.4,0.5c0,0,0.1,0,0.2,0c0.6-0.1,1.7-1.6,2.1-2.3
                                        c0.1-0.2,0.2-0.4,0.3-0.4c0.1,0,0.3,0.3,0.5,0.8c0.2,0.4,0.5,0.6,0.7,0.6c0.2,0,0.4-0.2,0.3-0.7c-0.1-1-0.2-2.5-0.2-2.5
                                        L332.3,431.2L332.3,431.2z"/>
                                </g>
                                <g>
                                    <path fill="#FFFFFF" d="M335.3,435.3c0,0.6-0.3,0.8-0.4,0.8c-0.3,0.1-0.7-0.2-1-0.7c-0.1-0.1-0.1-0.3-0.2-0.4
                                        c-0.1-0.1-0.1-0.3-0.2-0.4c0,0-0.1,0.1-0.2,0.3c-0.4,0.6-1.5,2.2-2.2,2.3c-0.3,0.1-0.4,0-0.5-0.1c-0.1-0.1-0.1-0.1-0.2-0.2
                                        c-0.1,0.1-0.3,0.1-0.4,0.1c-0.2,0-0.3-0.1-0.4-0.3c-0.1-0.3,0-0.6,0.1-1c0,0,0,0,0,0c-0.1,0-0.2-0.1-0.3-0.3
                                        c-0.2-0.3,0-0.7,0.2-1c0,0,0,0,0,0c-0.1-0.1-0.2-0.2-0.2-0.5c0-0.1,0-0.4,1.4-1.8c0.7-0.7,1.4-1.3,1.4-1.3
                                        c0.1,0,0.1-0.1,0.2,0l2.7,1.5c0.1,0,0.1,0.1,0.1,0.1C335.1,432.7,335.2,434.2,335.3,435.3
                                        C335.3,435.2,335.3,435.3,335.3,435.3z M329.9,436.6C329.9,436.7,330,436.7,329.9,436.6c0.1,0.2,0.1,0.2,0.1,0.2
                                        c0.1,0,0.3-0.1,0.4-0.2c0-0.1,0.1-0.1,0.2-0.1c0.1,0,0.1,0.1,0.1,0.2c0,0.1,0,0.2,0.1,0.3c0.1,0,0.1,0.1,0.3,0
                                        c0.5-0.1,1.5-1.4,2-2.2c0.2-0.3,0.3-0.5,0.5-0.4c0.2,0,0.3,0.2,0.5,0.6c0.1,0.1,0.1,0.2,0.2,0.4c0.2,0.4,0.5,0.5,0.6,0.5
                                        c0.1,0,0.2-0.2,0.1-0.6c-0.1-0.8-0.2-2.1-0.2-2.4l-2.5-1.4c-0.2,0.2-0.7,0.7-1.3,1.2c-1.3,1.2-1.3,1.5-1.3,1.6
                                        c0,0.2,0.1,0.2,0.1,0.2c0,0,0.1,0,0.1,0c0.1,0,0.2,0,0.2,0.1c0,0.1,0,0.1,0,0.2c-0.2,0.2-0.4,0.7-0.3,0.9
                                        c0,0.1,0.1,0.1,0.1,0.1c0.1,0,0.2-0.1,0.3-0.1c0.1-0.1,0.2-0.1,0.2,0c0.1,0.1,0.1,0.2,0,0.2
                                        C330.2,436,329.9,436.4,329.9,436.6z"/>
                                    <path fill="#9B978F" d="M332.3,431.1c0,0-0.1,0-0.1,0c0,0-0.7,0.6-1.4,1.3c-1.4,1.4-1.4,1.7-1.4,1.8c0,0.2,0.1,0.4,0.2,0.5
                                        c0,0,0,0,0,0c-0.2,0.3-0.3,0.7-0.2,1c0.1,0.2,0.2,0.2,0.3,0.3c0,0,0,0,0,0c-0.2,0.3-0.3,0.7-0.1,1c0.1,0.2,0.2,0.2,0.4,0.3
                                        c0,0,0,0,0,0c0.1,0,0.3-0.1,0.4-0.1c0,0.1,0.1,0.2,0.2,0.2c0.1,0.1,0.2,0.1,0.3,0.1c0.1,0,0.1,0,0.2,0
                                        c0.7-0.2,1.8-1.7,2.2-2.3c0.1-0.2,0.1-0.2,0.2-0.3c0,0.1,0.1,0.2,0.2,0.4c0.1,0.1,0.1,0.2,0.2,0.4c0.2,0.4,0.5,0.7,0.8,0.7
                                        c0,0,0.1,0,0.1,0c0.1,0,0.4-0.2,0.4-0.8c0,0,0-0.1,0-0.1c-0.1-1-0.2-2.5-0.2-2.5c0-0.1,0-0.1-0.1-0.1L332.3,431.1
                                        C332.3,431.1,332.3,431.1,332.3,431.1L332.3,431.1z M329.8,434.4C329.8,434.4,329.8,434.4,329.8,434.4
                                        c-0.1,0-0.1-0.1-0.1-0.2c0,0,0-0.3,1.3-1.6c0.5-0.5,1.1-1,1.3-1.2l2.5,1.4c0,0.3,0.1,1.6,0.2,2.4c0,0.4-0.1,0.5-0.1,0.6
                                        c0,0,0,0,0,0c-0.1,0-0.4-0.1-0.5-0.5c-0.1-0.1-0.1-0.3-0.2-0.4c-0.2-0.3-0.3-0.6-0.5-0.6c0,0,0,0,0,0c-0.2,0-0.3,0.2-0.5,0.4
                                        c-0.5,0.8-1.5,2.1-2,2.2c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.1,0c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.1-0.1-0.1-0.1-0.2c0,0,0,0,0,0
                                        c-0.1,0-0.1,0-0.1,0.1c0,0.1-0.2,0.2-0.3,0.2c0,0,0,0,0,0c0,0-0.1,0-0.1-0.1c0,0,0-0.1,0-0.1c0-0.2,0.2-0.7,0.4-1
                                        c0.1-0.1,0-0.2,0-0.2c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c-0.1,0.1-0.2,0.1-0.3,0.1c0,0,0,0,0,0c0,0,0,0-0.1-0.1
                                        c-0.1-0.2,0.2-0.7,0.3-0.9c0.1-0.1,0.1-0.1,0-0.2c0,0-0.1-0.1-0.1-0.1C330,434.4,329.9,434.4,329.8,434.4
                                        C329.9,434.4,329.9,434.4,329.8,434.4L329.8,434.4z"/>
                                </g>
                            </g>
                            <g>
                                <path fill="#FFFFFF" d="M331.3,433.3c0,0,0,0.1,0,0.1l-1.1,1.2c-0.1,0.1-0.2,0.1-0.2,0c-0.1-0.1-0.1-0.2,0-0.2l1.1-1.2
                                    c0.1-0.1,0.2-0.1,0.2,0C331.3,433.3,331.3,433.3,331.3,433.3z"/>
                                <path fill="#9B978F" d="M331.1,433.2c0,0-0.1,0-0.1,0.1l-1.1,1.2c-0.1,0.1-0.1,0.2,0,0.2c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1-0.1
                                    l1.1-1.2c0,0,0-0.1,0-0.1c0,0,0-0.1-0.1-0.1C331.2,433.2,331.2,433.2,331.1,433.2L331.1,433.2z"/>
                            </g>
                            <g>
                                <path fill="#FFFFFF" d="M331.8,433.9c0,0,0,0.1,0,0.1l-1.4,1.6c-0.1,0.1-0.2,0.1-0.2,0c-0.1-0.1-0.1-0.2,0-0.2l1.4-1.6
                                    c0.1-0.1,0.2-0.1,0.2,0C331.8,433.8,331.8,433.9,331.8,433.9z"/>
                                <path fill="#9B978F" d="M331.6,433.8c0,0-0.1,0-0.1,0.1l-1.4,1.6c-0.1,0.1-0.1,0.2,0,0.2c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1-0.1
                                    l1.4-1.6c0,0,0-0.1,0-0.1c0,0,0-0.1-0.1-0.1C331.7,433.8,331.7,433.8,331.6,433.8L331.6,433.8z"/>
                            </g>
                            <g>
                                <path fill="#FFFFFF" d="M332.3,434.5c0,0,0,0.1,0,0.1c-0.7,0.8-1.5,1.8-1.6,2.1c0,0.1,0,0.2-0.1,0.2c-0.1,0-0.2,0-0.2-0.1
                                    c0-0.1,0-0.4,0.8-1.4c0.4-0.5,0.8-1,0.8-1c0.1-0.1,0.2-0.1,0.2,0C332.3,434.4,332.3,434.4,332.3,434.5z"/>
                                <path fill="#9B978F" d="M332.2,434.3c0,0-0.1,0-0.1,0.1c0,0-0.4,0.5-0.8,1c-0.8,1-0.8,1.2-0.8,1.4c0,0.1,0.1,0.1,0.2,0.1
                                    c0,0,0,0,0.1,0c0.1,0,0.1-0.1,0.1-0.2c0-0.2,0.8-1.2,1.6-2.1c0,0,0-0.1,0-0.1c0,0,0-0.1-0.1-0.1
                                    C332.3,434.3,332.2,434.3,332.2,434.3L332.2,434.3z"/>
                            </g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M335,432.4c-0.8-0.1-2-0.7-2.4-1.1c-0.1-0.1-0.1-0.2-0.1-0.2c0.1-0.5,2.6-7.1,3.6-9.6l0-0.1l0-0.1
                                        c-0.6-1.9-0.6-3.7-0.6-3.8c0-0.1,0.1-2,2.7-2c0.8,0,1.7,0.2,2.8,0.5c4.9,1.5,10.6,1.6,12.2,1.6c0.1,0,0.1,0,0.2,0
                                        c-0.8,2.1-3,3-3,3c-0.1,0-0.6,0.4-1.3,2.1c-0.3,0.7-0.7,1.1-1.2,1.1c-0.1,0-0.2,0-0.2,0c-1.3-0.6-3.3-0.8-4.7-0.8
                                        c-0.8,0-1.4,0-1.4,0l-0.1,0l-0.1,0.1C338.6,428.2,335.5,431.8,335,432.4z"/>
                                    <path fill="#9B978F" d="M338.2,415.9c0.8,0,1.7,0.2,2.7,0.5c4.7,1.5,10.2,1.6,12.1,1.6c-0.9,1.7-2.7,2.6-2.8,2.6
                                        c-0.2,0.1-0.7,0.5-1.4,2.2c-0.3,0.6-0.6,1-0.9,1c0,0-0.1,0-0.1,0c0,0,0,0,0,0c-1.4-0.7-3.4-0.8-4.8-0.8c-0.8,0-1.4,0-1.4,0
                                        l-0.3,0l-0.1,0.2c-2.7,4.6-5.6,8.1-6.3,8.9c-0.9-0.1-2-0.8-2.1-1.1c0.2-0.7,2.2-6,3.5-9.5l0.1-0.2l-0.1-0.2
                                        c-0.6-1.8-0.6-3.6-0.6-3.7C335.8,417.4,335.9,415.9,338.2,415.9 M338.2,415.4c-2.9,0-2.9,2.2-2.9,2.2s-0.1,1.9,0.6,3.8
                                        c0,0-3.4,9-3.6,9.6c-0.1,0.6,1.7,1.6,2.8,1.6c0,0,3.4-3.8,6.6-9.2c0,0,0.6,0,1.4,0c1.3,0,3.2,0.1,4.6,0.8c0,0,0.1,0,0.3,0
                                        c0.3,0,0.9-0.2,1.4-1.3c0.7-1.7,1.2-2,1.2-2s2.5-1.1,3.2-3.5c0,0-0.2,0-0.5,0c-1.7,0-7.4-0.1-12.2-1.6
                                        C339.9,415.5,338.9,415.4,338.2,415.4L338.2,415.4z"/>
                                </g>
                                <g>
                                    <path fill="#FFFFFF" d="M353.9,417.5C353.9,417.5,353.9,417.5,353.9,417.5c-0.7,2.5-3.1,3.6-3.3,3.7c0,0-0.5,0.4-1.1,1.9
                                        c-0.3,0.7-0.7,1.1-1.1,1.3c-0.4,0.2-0.8,0-0.8,0c0,0,0,0,0,0c-0.9-0.4-2.1-0.7-3.7-0.7c-1,0-1.8,0-2,0
                                        c-3.1,5.3-6.5,9.1-6.5,9.1c0,0-0.1,0.1-0.1,0.1c-0.9,0-2.4-0.7-2.8-1.3c-0.2-0.2-0.2-0.4-0.2-0.5c0.1-0.6,3.2-8.7,3.6-9.6
                                        c-0.6-1.9-0.6-3.7-0.6-3.9c0-0.1,0-1.1,1-1.8c1-0.8,2.7-0.8,5-0.1c5.7,1.8,12.6,1.6,12.6,1.6
                                        C353.8,417.3,353.8,417.3,353.9,417.5C353.9,417.4,353.9,417.4,353.9,417.5z M347.7,424c0,0,0.8,0.3,1.5-1.2
                                        c0.7-1.7,1.2-2,1.3-2c0,0,0,0,0,0c0,0,2.3-1,3.1-3.2c-1.3,0-7.4,0-12.5-1.6c-2.1-0.7-3.8-0.7-4.7,0c-0.8,0.6-0.8,1.5-0.8,1.5
                                        c0,0,0,0,0,0c0,0-0.1,1.9,0.6,3.8c0,0,0,0.1,0,0.1c-1.2,3.1-3.5,9.1-3.6,9.6c0,0.1,0,0.2,0.1,0.3c0.4,0.5,1.6,1.1,2.5,1.2
                                        c0.4-0.5,3.6-4.2,6.5-9.1c0,0,0.1-0.1,0.1-0.1C341.8,423.3,345.5,423,347.7,424z"/>
                                    <path fill="#9B978F" d="M338.2,415.2c-0.9,0-1.6,0.2-2.1,0.6c-0.9,0.7-1,1.7-1,1.8c0,0.1-0.1,1.9,0.6,3.9
                                        c-0.3,0.8-3.4,9-3.6,9.6c0,0.2,0,0.3,0.2,0.5c0.5,0.6,1.9,1.3,2.8,1.3c0,0,0,0,0,0c0,0,0.1,0,0.1-0.1c0,0,3.4-3.8,6.5-9.1
                                        c0.2,0,0.6,0,1.3,0c0.2,0,0.5,0,0.8,0c1.6,0.1,2.8,0.3,3.7,0.7c0,0,0,0,0,0c0,0,0.1,0.1,0.4,0.1c0.1,0,0.3,0,0.4-0.1
                                        c0.5-0.2,0.8-0.6,1.1-1.3c0.6-1.5,1.1-1.8,1.1-1.9c0.2-0.1,2.6-1.2,3.3-3.6c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1
                                        c0,0-0.1-0.1-0.1-0.1c0,0,0,0,0,0c0,0-0.2,0-0.5,0c-1.7,0-7.4-0.1-12.2-1.6C340,415.4,339,415.2,338.2,415.2L338.2,415.2z
                                        M335,432.5c-0.9,0-2.1-0.7-2.5-1.2c-0.1-0.1-0.1-0.2-0.1-0.3c0.1-0.5,2.4-6.5,3.6-9.6c0,0,0-0.1,0-0.1
                                        c-0.6-1.9-0.6-3.8-0.6-3.8c0,0,0,0,0,0c0,0,0-0.9,0.8-1.5c0.5-0.3,1.1-0.5,1.9-0.5c0.8,0,1.7,0.2,2.8,0.5
                                        c4.8,1.5,10.6,1.6,12.3,1.6c0.1,0,0.2,0,0.2,0c-0.8,2.2-3.1,3.2-3.1,3.2c0,0,0,0,0,0c-0.1,0-0.6,0.4-1.3,2
                                        c-0.4,1-1,1.2-1.2,1.2c-0.1,0-0.2,0-0.2,0c-1.4-0.6-3.3-0.8-4.6-0.8c-0.8,0-1.3,0-1.4,0c-0.1,0-0.1,0-0.1,0.1
                                        C338.6,428.4,335.5,432,335,432.5L335,432.5z"/>
                                </g>
                            </g>
                            <g>
                                <path fill="#FFFFFF" d="M337.7,422.2C337.7,422.3,337.7,422.3,337.7,422.2c0,0.1-0.1,0.2-0.2,0.2c-0.2,0-1.5-0.4-1.8-0.9
                                    c0-0.1,0-0.2,0.1-0.2c0.1,0,0.2,0,0.2,0.1c0.2,0.3,1,0.6,1.5,0.7C337.6,422.1,337.7,422.2,337.7,422.2z"/>
                                <path fill="#9B978F" d="M335.8,421.3C335.8,421.3,335.8,421.3,335.8,421.3c-0.2,0.1-0.2,0.2-0.2,0.2c0.3,0.5,1.6,0.9,1.8,0.9
                                    c0,0,0,0,0,0c0.1,0,0.1-0.1,0.2-0.1c0,0,0,0,0,0c0-0.1-0.1-0.1-0.1-0.2c-0.5-0.1-1.4-0.4-1.5-0.7
                                    C336,421.3,335.9,421.3,335.8,421.3L335.8,421.3z"/>
                            </g>
                            <g>
                                <path fill="#FFFFFF" d="M351,420.8c0,0.1,0,0.1-0.1,0.2c-0.8,0.5-1.8,0.2-2.8-0.2c-0.9-0.4-2.3-0.5-2.3-0.5
                                    c-0.1,0-0.2-0.1-0.2-0.2c0-0.1,0.1-0.2,0.2-0.2c0.1,0,1.4,0.1,2.4,0.5c1,0.4,1.8,0.6,2.4,0.2
                                    C350.8,420.6,350.9,420.7,351,420.8C351,420.8,351,420.8,351,420.8z"/>
                                <path fill="#9B978F" d="M345.9,420c-0.1,0-0.2,0.1-0.2,0.2c0,0.1,0.1,0.2,0.2,0.2c0,0,1.3,0.1,2.3,0.5
                                    c0.6,0.2,1.2,0.5,1.8,0.5c0.3,0,0.7-0.1,0.9-0.3c0.1,0,0.1-0.1,0.1-0.2c0,0,0-0.1,0-0.1c0-0.1-0.1-0.1-0.1-0.1
                                    c0,0-0.1,0-0.1,0c-0.2,0.1-0.5,0.2-0.8,0.2c-0.5,0-1-0.2-1.7-0.4C347.3,420.1,346,420,345.9,420
                                    C345.9,420,345.9,420,345.9,420L345.9,420z"/>
                            </g>
                            <g>
                                <path fill="#FFFFFF" d="M342.9,422.7C342.9,422.7,342.9,422.7,342.9,422.7L342.9,422.7z"/>
                                <path fill="#9B978F" d="M342.9,422.4C342.9,422.4,342.9,422.4,342.9,422.4c-0.8,0.2-1.4,0.9-1.4,0.9c-0.1,0.1,0,0.2,0,0.2
                                    c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1-0.1c0,0,0.5-0.6,1.2-0.8c0.1,0,0.1-0.1,0.1-0.2c0,0,0,0,0,0
                                    C343.1,422.5,343,422.4,342.9,422.4L342.9,422.4z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M337.1,410.8c-2.2,0-2.4-1.7-2.4-1.8c0,0-0.2-1.9,0.3-3.8l0-0.1l0-0.1c-1.2-2.4-4.2-8.8-4.4-9.3
                                    c0,0,0-0.1,0.1-0.2c0.3-0.5,1.5-1.2,2.3-1.3c0.6,0.6,4,3.9,7.2,8.5l0.1,0.1h0.1c0.2,0,3.9,0,6-1.2l0,0c0,0,0.1,0,0.2,0
                                    c0.3,0,0.8,0.2,1.2,1c0.9,1.6,1.4,1.9,1.5,2c0,0,2.3,0.8,3.3,2.8c-1.5,0.1-7.4,0.7-12.2,2.7
                                    C339.1,410.5,338,410.8,337.1,410.8z"/>
                                <path fill="#9B978F" d="M332.9,394.5c0.8,0.8,4,4,7.1,8.4l0.1,0.2h0.3c0.2,0,3.9,0,6.1-1.3c0,0,0.1,0,0.1,0
                                    c0.3,0,0.7,0.3,1,0.9c0.9,1.6,1.5,2,1.7,2.1c0,0,1.9,0.7,2.9,2.3c-2,0.2-7.3,0.8-11.9,2.7c-1.2,0.5-2.2,0.7-3,0.7
                                    c-2,0-2.2-1.4-2.2-1.6c0,0-0.2-1.8,0.2-3.7l0-0.2l-0.1-0.2c-1.6-3.4-4-8.5-4.3-9.2C331,395.5,332,394.7,332.9,394.5
                                    M333.1,394c-1.1,0.1-2.9,1.3-2.7,1.9c0.2,0.6,4.4,9.3,4.4,9.3c-0.5,2-0.3,3.9-0.3,3.9s0.2,2,2.7,2c0.8,0,1.9-0.2,3.2-0.8
                                    c5.6-2.3,12.5-2.7,12.5-2.7c-0.9-2.4-3.5-3.2-3.5-3.2s-0.5-0.2-1.4-1.8c-0.5-1-1.1-1.2-1.4-1.2c-0.2,0-0.4,0.1-0.4,0.1
                                    c-2.1,1.2-5.8,1.2-5.8,1.2c0,0,0,0,0,0C336.8,397.5,333.1,394,333.1,394L333.1,394z"/>
                            </g>
                            <g>
                                <path fill="#FFFFFF" d="M353.1,407.6C353.1,407.6,353,407.7,353.1,407.6c-0.1,0.1-0.1,0.2-0.2,0.2c-0.1,0-7,0.4-12.5,2.7
                                    c-2.2,0.9-3.9,1-5,0.4c-1-0.6-1.1-1.6-1.1-1.7c0-0.1-0.2-1.9,0.2-3.9c-0.4-0.8-4.2-8.7-4.4-9.2c-0.1-0.2,0-0.3,0.1-0.6
                                    c0.4-0.7,1.8-1.4,2.7-1.5c0,0,0.1,0,0.1,0c0,0,3.7,3.5,7.3,8.6c0.6,0,3.8-0.1,5.7-1.2c0,0,0,0,0,0c0,0,0.3-0.2,0.8,0
                                    c0.5,0.1,0.9,0.5,1.2,1.2c0.7,1.4,1.2,1.7,1.3,1.8C349.7,404.3,352.1,405.2,353.1,407.6C353.1,407.6,353.1,407.6,353.1,407.6z
                                    M334.6,409c0,0,0.1,0.9,1,1.5c1,0.6,2.6,0.5,4.7-0.4c5-2,11.1-2.6,12.3-2.7c-1-2.1-3.3-2.9-3.3-2.9c0,0,0,0,0,0
                                    c-0.1,0-0.6-0.3-1.5-1.9c-0.7-1.4-1.5-1.1-1.6-1c-2.1,1.2-5.8,1.2-5.9,1.2c-0.1,0-0.1,0-0.1-0.1c-3.3-4.7-6.7-8.1-7.2-8.5
                                    c-0.9,0.1-2.1,0.9-2.4,1.4c-0.1,0.1-0.1,0.2-0.1,0.3c0.1,0.4,2.9,6.3,4.4,9.3c0,0,0,0.1,0,0.1
                                    C334.4,407.1,334.6,409,334.6,409C334.6,409,334.6,409,334.6,409z M334.5,409L334.5,409L334.5,409z"/>
                                <path fill="#9B978F" d="M333.1,393.8C333,393.8,333,393.8,333.1,393.8c-0.9,0.1-2.3,0.9-2.7,1.5c-0.1,0.2-0.2,0.4-0.1,0.6
                                    c0.2,0.6,4,8.4,4.4,9.2c-0.5,2-0.3,3.8-0.2,3.9c0,0.1,0.1,1.1,1.1,1.7c0.5,0.3,1,0.4,1.7,0.4c0.9,0,2-0.3,3.3-0.8
                                    c5.5-2.2,12.4-2.7,12.5-2.7c0.1,0,0.1,0,0.1-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c-0.9-2.4-3.4-3.3-3.6-3.3
                                    c-0.1,0-0.5-0.3-1.3-1.8c-0.3-0.7-0.8-1.1-1.2-1.2c-0.1,0-0.2-0.1-0.3-0.1c-0.3,0-0.4,0.1-0.4,0.1c0,0,0,0,0,0
                                    c-1.8,1.1-5.1,1.2-5.7,1.2c-3.5-5-7.2-8.5-7.3-8.6C333.1,393.9,333.1,393.8,333.1,393.8L333.1,393.8z M337.1,410.9
                                    c-0.6,0-1.1-0.1-1.5-0.4c-0.9-0.5-1-1.5-1-1.5c0,0,0,0,0,0c0,0-0.2-1.9,0.3-3.8c0,0,0-0.1,0-0.1c-1.4-3-4.2-8.8-4.4-9.3
                                    c0-0.1,0-0.2,0.1-0.3c0.3-0.5,1.5-1.2,2.4-1.4c0.5,0.5,3.9,3.8,7.2,8.5c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0c0.2,0,3.8,0,5.9-1.2
                                    c0,0,0.1-0.1,0.3-0.1c0.3,0,0.8,0.2,1.3,1.1c0.8,1.6,1.4,1.9,1.5,1.9c0,0,0,0,0,0c0,0,2.4,0.8,3.3,2.9
                                    c-1.3,0.1-7.4,0.7-12.3,2.7C339.1,410.6,338,410.9,337.1,410.9L337.1,410.9z M334.5,409L334.5,409L334.5,409L334.5,409z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M337.8,418.2c-0.4,0-0.8-0.1-1.1-0.4c-0.4-0.3-0.7-0.4-1.1-0.4c-0.3,0-0.6,0.1-0.9,0.2
                                    c-0.3,0.1-0.6,0.2-0.9,0.2c-0.3,0-0.6-0.1-0.9-0.2c-1.4-0.6-1.4-1.9-1.4-2.5c0-0.2,0-0.4-0.2-0.6c-0.3-0.5-0.9-1.6-0.4-2.8
                                    c0.3-0.8,0.8-1,1.4-1.2c0.6-0.2,1.2-0.5,1.9-1.3c0.4-0.5,1.3-0.9,2.3-0.9c1.4,0,3.2,0.7,3.5,2.8c0,0,0.4,1.5-0.2,2.5
                                    c-0.5,0.8-0.4,1.5-0.3,2.3c0,0.4,0.1,0.7,0,1.1C339.5,417.5,338.8,418.2,337.8,418.2z"/>
                                <path fill="#9B978F" d="M336.5,407.9v0.5c1.3,0,3,0.7,3.3,2.6c0,0,0.4,1.4-0.2,2.3c-0.5,0.9-0.4,1.7-0.3,2.4
                                    c0,0.4,0.1,0.7,0,1c0,0.5-0.7,1.1-1.5,1.1c-0.3,0-0.7-0.1-0.9-0.3c-0.4-0.3-0.8-0.5-1.3-0.5c-0.3,0-0.6,0.1-0.9,0.2
                                    c-0.3,0.1-0.5,0.2-0.8,0.2c-0.3,0-0.5-0.1-0.8-0.2c-1.2-0.5-1.3-1.6-1.3-2.3c0-0.3-0.1-0.5-0.2-0.7c-0.3-0.4-0.9-1.5-0.4-2.6
                                    c0.3-0.7,0.7-0.8,1.3-1.1c0.6-0.2,1.3-0.6,2-1.4c0.4-0.5,1.2-0.8,2.1-0.8V407.9 M336.5,407.9c-1,0-2,0.3-2.5,1
                                    c-1.3,1.6-2.6,1-3.3,2.6c-0.6,1.3,0.1,2.5,0.4,3c0.1,0.1,0.1,0.3,0.1,0.4c0,0.6,0.1,2.1,1.6,2.7c0.4,0.2,0.7,0.2,1,0.2
                                    c0.7,0,1.2-0.3,1.8-0.3c0.3,0,0.6,0.1,1,0.4c0.4,0.3,0.8,0.4,1.3,0.4c1,0,1.9-0.8,2-1.5c0.1-1.1-0.4-2.2,0.2-3.3
                                    c0.6-1.1,0.2-2.7,0.2-2.7C339.9,408.8,338.1,407.9,336.5,407.9L336.5,407.9z"/>
                            </g>
                            <g>
                                <path fill="#FFFFFF" d="M340.6,411.9c0,0.6,0,1.2-0.4,1.8c-0.4,0.7-0.3,1.3-0.2,2c0,0.4,0.1,0.8,0,1.2
                                    c-0.1,0.6-0.5,1.2-1.2,1.5c-0.8,0.3-1.6,0.2-2.3-0.3c-0.6-0.5-1.1-0.4-1.6-0.2c-0.6,0.2-1.2,0.3-2.1-0.1
                                    c-1.6-0.7-1.7-2.3-1.7-2.9c0-0.1,0-0.2-0.1-0.3c-0.3-0.5-1-1.9-0.4-3.2c0.4-0.9,1-1.2,1.6-1.4c0.5-0.2,1.1-0.5,1.7-1.2
                                    c0.8-0.9,2.4-1.3,3.8-0.9c1.5,0.4,2.5,1.5,2.7,3C340.5,411,340.6,411.4,340.6,411.9z M339.6,415.1c0-0.5,0-1,0.3-1.6
                                    c0.6-1,0.2-2.6,0.2-2.6c0,0,0,0,0,0c-0.2-1.4-1.1-2.3-2.5-2.7c-1.3-0.4-2.8,0-3.5,0.7c-0.7,0.8-1.3,1.1-1.8,1.3
                                    c-0.6,0.3-1.1,0.5-1.4,1.3c-0.5,1.2,0.1,2.4,0.4,2.9c0.1,0.2,0.2,0.3,0.1,0.5c0,0.6,0.1,1.9,1.5,2.6c0.8,0.4,1.4,0.2,1.9,0.1
                                    c0.6-0.2,1.2-0.3,1.9,0.3c0.6,0.4,1.3,0.5,1.9,0.2c0.6-0.2,1-0.7,1-1.2c0-0.4,0-0.7,0-1.1
                                    C339.6,415.6,339.6,415.3,339.6,415.1z"/>
                                <path fill="#9B978F" d="M336.5,407.8c-1.1,0-2.1,0.4-2.6,1c-0.6,0.7-1.2,1-1.7,1.2c-0.6,0.3-1.2,0.5-1.6,1.4
                                    c-0.6,1.3,0.1,2.7,0.4,3.2c0.1,0.1,0.1,0.2,0.1,0.3c0,0.6,0.1,2.2,1.7,2.9c0.4,0.2,0.8,0.2,1.1,0.2c0.4,0,0.7-0.1,1-0.2
                                    c0.3-0.1,0.5-0.1,0.7-0.1c0.3,0,0.6,0.1,0.9,0.3c0.4,0.3,0.9,0.5,1.4,0.5c0.3,0,0.6-0.1,0.9-0.2c0.7-0.3,1.2-0.9,1.2-1.5
                                    c0-0.4,0-0.8,0-1.2c-0.1-0.7-0.1-1.4,0.2-2c0.3-0.6,0.4-1.3,0.4-1.8c0-0.5-0.1-0.9-0.1-1c-0.2-1.5-1.2-2.6-2.7-3
                                    C337.3,407.8,336.9,407.8,336.5,407.8L336.5,407.8z M333.8,417.8c-0.3,0-0.6-0.1-1-0.2c-1.4-0.6-1.5-2-1.5-2.6
                                    c0-0.2,0-0.4-0.1-0.5c-0.3-0.5-0.9-1.7-0.4-2.9c0.4-0.8,0.8-1,1.4-1.3c0.6-0.2,1.2-0.5,1.8-1.3c0.5-0.6,1.4-0.9,2.4-0.9
                                    c0.4,0,0.8,0,1.1,0.2c1.4,0.4,2.3,1.4,2.5,2.7c0,0,0,0,0,0c0,0,0.4,1.5-0.2,2.6c-0.3,0.5-0.4,1.1-0.3,1.6c0,0.2,0,0.4,0.1,0.7
                                    c0,0.4,0.1,0.7,0,1.1c0,0.5-0.5,1-1,1.2c-0.3,0.1-0.5,0.2-0.8,0.2c-0.4,0-0.8-0.1-1.2-0.4c-0.4-0.3-0.8-0.4-1.1-0.4
                                    c-0.3,0-0.6,0.1-0.8,0.2C334.5,417.7,334.2,417.8,333.8,417.8L333.8,417.8z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M339.9,416c-1.3-1.6-0.1-4.7,0.2-5.5c0.4,0.3,1.3,1,1.5,2.6C341.9,414.7,340.4,415.7,339.9,416z"/>
                                <path fill="#9B978F" d="M340.3,410.8c0.4,0.3,1,1,1.2,2.2c0.2,1.3-0.9,2.2-1.4,2.6C339.1,414.2,339.9,411.9,340.3,410.8
                                    M340,410.1c0,0-2,4.2-0.2,6.2c0,0,2.3-1.1,2-3.3C341.7,410.8,340,410.1,340,410.1L340,410.1z"/>
                            </g>
                            <g>
                                <path fill="#FFFFFF" d="M342.1,413.2c0,0.9-0.3,1.7-1,2.4c-0.6,0.6-1.1,0.9-1.2,0.9c-0.1,0-0.1,0-0.2,0c-0.8-0.9-1-2.3-0.6-4
                                    c0.3-1.3,0.8-2.3,0.8-2.4c0-0.1,0.1-0.1,0.2-0.1c0.1,0,1.7,0.8,2,3C342.1,413,342.1,413.1,342.1,413.2z M339.9,416.1
                                    c0.4-0.3,2-1.3,1.8-3.1c-0.1-0.9-0.4-1.6-1-2.2c-0.3-0.3-0.5-0.4-0.7-0.5C339.8,411.1,338.5,414.4,339.9,416.1z M339.9,416.3
                                    L339.9,416.3L339.9,416.3z"/>
                                <path fill="#9B978F" d="M340,409.9c-0.1,0-0.1,0-0.2,0.1c0,0-0.5,1.1-0.8,2.4c-0.4,1.8-0.1,3.1,0.6,4c0,0,0.1,0.1,0.1,0.1
                                    c0,0,0.1,0,0.1,0c0,0,0.6-0.3,1.2-0.9c0.7-0.7,1-1.5,1-2.4c0-0.1,0-0.1,0-0.2C341.8,410.7,340.2,409.9,340,409.9
                                    C340.1,409.9,340,409.9,340,409.9L340,409.9z M339.9,416.1c-1.4-1.7-0.1-5,0.2-5.8c0.2,0.1,0.4,0.3,0.7,0.5
                                    c0.6,0.6,0.9,1.3,1,2.2C341.9,414.8,340.3,415.8,339.9,416.1L339.9,416.1z M339.9,416.3L339.9,416.3L339.9,416.3L339.9,416.3z
                                    "/>
                            </g>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M334.8,417C334.8,417,334.8,417,334.8,417c0,0.1-0.1,0.2-0.2,0.2c-1-0.1-1.5-1-1.5-1
                                c0-0.1,0-0.2,0.1-0.2c0.1,0,0.2,0,0.2,0.1c0,0,0.4,0.7,1.2,0.8C334.8,416.9,334.8,416.9,334.8,417z"/>
                            <path fill="#9B978F" d="M333.3,416C333.3,416,333.3,416,333.3,416c-0.2,0.1-0.2,0.2-0.1,0.3c0,0,0.5,0.9,1.5,1c0,0,0,0,0,0
                                c0.1,0,0.2-0.1,0.2-0.1c0,0,0,0,0,0c0-0.1-0.1-0.2-0.1-0.2c-0.8-0.1-1.2-0.8-1.2-0.8C333.4,416,333.4,416,333.3,416L333.3,416z
                                "/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M337.4,416.9C337.4,416.9,337.4,416.9,337.4,416.9c0,0.1-0.1,0.2-0.2,0.2c-2.2-0.3-3.1-1.4-3.1-1.5
                                c-0.1-0.1,0-0.2,0-0.2c0.1-0.1,0.2,0,0.2,0c0,0,0.9,1.1,2.9,1.3C337.3,416.8,337.3,416.8,337.4,416.9z"/>
                            <path fill="#9B978F" d="M334.2,415.4c0,0-0.1,0-0.1,0c-0.1,0.1-0.1,0.2,0,0.2c0,0,0.9,1.2,3.1,1.5c0,0,0,0,0,0
                                c0.1,0,0.2-0.1,0.2-0.1c0,0,0,0,0,0c0-0.1-0.1-0.2-0.1-0.2c-2-0.3-2.9-1.3-2.9-1.3C334.3,415.4,334.2,415.4,334.2,415.4
                                L334.2,415.4z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M338.6,416.4C338.6,416.4,338.6,416.4,338.6,416.4c0,0.1-0.1,0.2-0.2,0.2c-1.8-0.2-2.9-0.8-2.9-0.8
                                c-0.1,0-0.1-0.2-0.1-0.2c0-0.1,0.2-0.1,0.2-0.1c0,0,1.1,0.6,2.8,0.8C338.5,416.2,338.6,416.3,338.6,416.4z"/>
                            <path fill="#9B978F" d="M335.6,415.4c-0.1,0-0.1,0-0.1,0.1c0,0.1,0,0.2,0.1,0.2c0,0,1.1,0.6,2.9,0.8c0,0,0,0,0,0
                                c0.1,0,0.2-0.1,0.2-0.2c0,0,0,0,0,0c0-0.1-0.1-0.2-0.2-0.2C336.7,416,335.7,415.4,335.6,415.4
                                C335.6,415.4,335.6,415.4,335.6,415.4L335.6,415.4z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M338.4,410.1c0,0,0,0.1,0,0.1c-0.1,0.1-0.2,0.1-0.2,0c-1.5-1.1-2.8-0.9-2.8-0.9c-0.1,0-0.2,0-0.2-0.1
                                c0-0.1,0-0.2,0.1-0.2c0.1,0,1.4-0.3,3.1,0.9C338.4,410,338.4,410,338.4,410.1z"/>
                            <path fill="#9B978F" d="M335.6,409c-0.2,0-0.4,0-0.4,0c-0.1,0-0.2,0.1-0.1,0.2c0,0.1,0.1,0.1,0.2,0.1c0,0,0,0,0,0
                                c0,0,0.1,0,0.3,0c0.5,0,1.4,0.1,2.5,0.9c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.1-0.1c0,0,0-0.1,0-0.1c0-0.1,0-0.1-0.1-0.1
                                C337.2,409.1,336.2,409,335.6,409L335.6,409z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M339.8,411c0,0.1,0,0.1-0.1,0.2c-0.1,0-0.2,0-0.2-0.1c-0.8-1.8-2.1-2-2.2-2c-0.1,0-0.2-0.1-0.1-0.2
                                c0-0.1,0.1-0.2,0.2-0.1C337.4,408.8,339,409,339.8,411C339.8,411,339.8,411,339.8,411z"/>
                            <path fill="#9B978F" d="M337.3,408.7c-0.1,0-0.2,0.1-0.2,0.2c0,0.1,0.1,0.2,0.1,0.2c0.1,0,1.4,0.2,2.2,2c0,0.1,0.1,0.1,0.2,0.1
                                c0,0,0,0,0.1,0c0.1,0,0.1-0.1,0.1-0.2c0,0,0,0,0-0.1C339,409,337.4,408.8,337.3,408.7C337.4,408.7,337.4,408.7,337.3,408.7
                                L337.3,408.7z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M336.5,404.2c0,0.1,0,0.1-0.1,0.2c-0.5,0.2-1.3,0.5-1.5,0.8c0,0.1-0.1,0.1-0.2,0.1
                                c-0.1,0-0.1-0.1-0.1-0.2c0.2-0.6,1.5-1,1.7-1C336.3,404,336.4,404.1,336.5,404.2C336.5,404.2,336.5,404.2,336.5,404.2z"/>
                            <path fill="#9B978F" d="M336.3,404C336.3,404,336.3,404,336.3,404c-0.2,0.1-1.5,0.5-1.7,1c0,0.1,0,0.2,0.1,0.2c0,0,0,0,0.1,0
                                c0.1,0,0.1,0,0.2-0.1c0.1-0.3,1-0.7,1.5-0.8c0.1,0,0.1-0.1,0.1-0.2c0,0,0,0,0,0C336.4,404.1,336.4,404,336.3,404L336.3,404z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M349.9,404.5C349.9,404.5,349.9,404.6,349.9,404.5c-0.1,0.2-0.2,0.2-0.2,0.2c-0.6-0.3-1.4-0.1-2.4,0.4
                                c-1,0.5-2.3,0.7-2.3,0.7c-0.1,0-0.2-0.1-0.2-0.1c0-0.1,0.1-0.2,0.1-0.2c0,0,1.3-0.2,2.2-0.6c0.9-0.4,1.9-0.9,2.7-0.4
                                C349.9,404.4,349.9,404.4,349.9,404.5z"/>
                            <path fill="#9B978F" d="M349,404.2c-0.6,0-1.3,0.3-1.9,0.6c-0.9,0.5-2.2,0.6-2.2,0.6c-0.1,0-0.2,0.1-0.1,0.2
                                c0,0.1,0.1,0.1,0.2,0.1c0,0,0,0,0,0c0.1,0,1.4-0.2,2.3-0.7c0.7-0.3,1.3-0.6,1.8-0.6c0.2,0,0.4,0,0.6,0.1c0,0,0.1,0,0.1,0
                                c0.1,0,0.1,0,0.2-0.1c0,0,0-0.1,0-0.1c0-0.1,0-0.1-0.1-0.1C349.5,404.2,349.3,404.2,349,404.2L349,404.2z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M341.9,403.4C341.9,403.4,341.9,403.4,341.9,403.4c0,0.1-0.1,0.2-0.2,0.2c-0.8-0.1-1.4-0.8-1.4-0.8
                                c-0.1-0.1-0.1-0.2,0-0.2c0.1-0.1,0.2-0.1,0.2,0c0,0,0.6,0.6,1.2,0.7C341.8,403.2,341.8,403.3,341.9,403.4z"/>
                            <path fill="#9B978F" d="M340.4,402.4c0,0-0.1,0-0.1,0c-0.1,0.1-0.1,0.2,0,0.2c0,0,0.7,0.7,1.4,0.8c0,0,0,0,0,0
                                c0.1,0,0.2-0.1,0.2-0.1c0,0,0,0,0,0c0-0.1-0.1-0.1-0.1-0.2c-0.6-0.1-1.2-0.7-1.2-0.7C340.4,402.5,340.4,402.4,340.4,402.4
                                L340.4,402.4z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M348.5,414.1C348.5,414.1,348.5,414.1,348.5,414.1c0,0.1-0.1,0.2-0.2,0.2c-0.1,0-2-0.2-2.6-1.4
                                c-0.5-1-1.1-1.5-1.1-1.5c-0.1-0.1-0.1-0.2,0-0.2c0.1-0.1,0.2-0.1,0.2,0c0,0,0.7,0.5,1.2,1.6c0.5,1,2.3,1.2,2.3,1.2
                                C348.4,414,348.5,414,348.5,414.1z"/>
                            <path fill="#9B978F" d="M344.8,411.1c-0.1,0-0.1,0-0.1,0.1c-0.1,0.1,0,0.2,0,0.2c0,0,0.6,0.4,1.1,1.5c0.5,1.2,2.5,1.4,2.6,1.4
                                c0,0,0,0,0,0c0.1,0,0.2-0.1,0.2-0.2c0,0,0,0,0,0c0-0.1-0.1-0.2-0.2-0.2c0,0-1.8-0.2-2.3-1.2
                                C345.6,411.6,344.9,411.2,344.8,411.1C344.9,411.1,344.8,411.1,344.8,411.1L344.8,411.1z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M349.2,413.1C349.2,413.1,349.2,413.1,349.2,413.1c0,0.1-0.1,0.2-0.2,0.2c-1.8-0.1-2.6-1.3-2.6-1.4
                                c-0.1-0.1,0-0.2,0.1-0.2c0.1-0.1,0.2,0,0.2,0.1c0,0,0.8,1.2,2.3,1.2C349.1,413,349.2,413,349.2,413.1z"/>
                            <path fill="#9B978F" d="M346.5,411.7C346.5,411.7,346.5,411.7,346.5,411.7c-0.2,0.1-0.2,0.2-0.1,0.3c0,0.1,0.9,1.3,2.6,1.4
                                c0,0,0,0,0,0c0.1,0,0.2-0.1,0.2-0.2c0,0,0,0,0,0c0-0.1-0.1-0.2-0.2-0.2c-1.6-0.1-2.3-1.2-2.3-1.2
                                C346.7,411.7,346.6,411.7,346.5,411.7L346.5,411.7z"/>
                        </g>
                    </g>
                </g>
            </g>
            <DropZoneHotspot/>
            <PantryHotspot/>
            <TechStationHotspot/>
            <CabenitryHotspot/>
            <LaundryHotspot />
            <PatioHotspot />
            <TVHotspot />
            <PrimaryBRspot />
            <WICBRspot />
            <LinenClosetspot />
            <g id="options">
                {/* Fourth Bedroom; reduced storage */}
                <g id="fourthBed" data-option="fourthBed" style={{ display: active.fourthBed ? "block" : "none" }} fill="#CC0001">
                    <g id="_x34_th_bed">
                    <rect x="664.5" y="482.1" fill="#EFEFEF" width="202.2" height="322"/>
                    <g id="window_00000081615791977737529160000009939844696118042013_">
                        <g>
                            <path fill="#425563" d="M863.3,702.9l0,53.8h-4.9v-53.8H863.3 M864.3,701.9h-6.9v55.8h6.9L864.3,701.9L864.3,701.9z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M859.5,702.9l0,53.8h-1.1v-53.8H859.5 M860.5,701.9h-3.1v55.8h3.1L860.5,701.9L860.5,701.9z"/>
                        </g>
                    </g>
                    <g id="window_00000003099903037794413810000009980483728436109963_">
                        <g>
                            <path fill="#425563" d="M863.3,541l0,53.8h-4.9V541H863.3 M864.3,540h-6.9v55.8h6.9L864.3,540L864.3,540z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M859.5,541l0,53.8h-1.1V541H859.5 M860.5,540h-3.1v55.8h3.1L860.5,540L860.5,540z"/>
                        </g>
                    </g>
                    <polygon fill="#425563" points="862.6,595.8 862.6,701.9 857.4,701.9 857.4,659.3 702.5,659.3 702.5,654.1 713.9,654.1 713.9,649 
                        719,649 719,654.1 769.3,654.1 769.3,621.5 783.6,621.5 783.6,626.7 774.4,626.7 774.4,654.1 857.4,654.1 857.4,626.7 
                        851.3,626.7 851.3,621.6 857.4,621.6 857.4,595.8 		"/>
                    <g>
                        <path fill="#425563" d="M785.1,622.9l33.4,0v0.7h-33.4V622.9 M784.1,621.9v2.7h35.4v-2.7L784.1,621.9L784.1,621.9z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M851.3,624.7v0.7h-33.4v-0.7H851.3 M852.3,623.7h-35.4v2.7h35.4V623.7L852.3,623.7z"/>
                    </g>
                    <rect x="664.5" y="654.1" fill="#425563" width="4.5" height="5.2"/>
                    <polygon fill="#425563" points="692,717.1 664.5,717.1 664.5,712.1 697,712.1 697,723.9 692,723.9 		"/>
                    <polygon fill="#425563" points="862.6,757.7 862.6,844.4 854.6,844.4 854.6,804.1 664.5,804.1 664.5,799.1 692,799.1 692,791.6 
                        697,791.6 697,799.1 857.5,799.1 857.5,757.7 		"/>
                    <g>
                        <path fill="#425563" d="M695.8,725.7v33.4h-0.7v-33.4H695.8 M696.8,724.7h-2.7v35.4h2.7V724.7L696.8,724.7z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M694,758.5v33.4h-0.7v-33.4H694 M695,757.5h-2.7v35.4h2.7V757.5L695,757.5z"/>
                    </g>
                    <rect x="713.9" y="482.1" fill="#425563" width="5.2" height="134.4"/>
                    <rect x="857.4" y="482.1" fill="#425563" width="5.2" height="57.9"/>
                    <g>
                        <path fill="#425563" d="M671.5,660.3v34.5h-1.4v-34.5H671.5 M672.5,659.3h-3.4v36.5h3.4V659.3L672.5,659.3z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M754,617.5v1.4h-34.5v-1.4H754 M755,616.5h-36.5v3.4H755V616.5L755,616.5z"/>
                    </g>
                    
                        <rect x="664.5" y="716.8" fill="#DDE7ED" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="13.4" height="82.6"/>
                    
                        <rect x="774.1" y="640.9" fill="#DDE7ED" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="83.3" height="14.1"/>
                    <path fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="5,3" d="M672.5,695.4
                        c0,0,30.4-0.5,30.4-36.1"/>
                    <path fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="5,3" d="M754.7,619.9
                        c0,0,1.2,29.6-35.7,29.6"/>
                    <g id="Bedroom_2_00000062887810827286849750000008334029870725205908_">
                        
                            <image overflow="visible" opacity="0.4" width="74" height="110" href="data:image/png;base64,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" transform="matrix(1 0 0 1 751.0137 477.895)">
                        </image>
                        <g>
                            <g>
                                <g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M813.4,577.9h-53.5c-0.6,0-1-0.5-1-1
                                        l0-86.2c0-2.3,1.9-4.2,4.2-4.2l46.9,0c2.3,0,4.2,1.9,4.2,4.2v86.4C814.2,577.6,813.8,577.9,813.4,577.9z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M813.5,578.1h-53.7
                                        c-0.6,0-1.1-0.5-1.1-1.1v-86.9c0-2.1,1.7-3.9,3.9-3.9h48.1c2.1,0,3.9,1.7,3.9,3.9l0,87.1C814.4,577.7,814,578.1,813.5,578.1z
                                        M762.5,486.7c-1.9,0-3.4,1.5-3.4,3.4l0,86.9c0,0.4,0.3,0.7,0.7,0.7l53.7,0c0.3,0,0.5-0.2,0.5-0.5l0-87.1
                                        c0-1.9-1.5-3.4-3.4-3.4L762.5,486.7z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M813.1,490.7l-53.4,0
                                        c-1.5,0-2.6-1.2-2.6-2.6v-2.8c0-1.5,1.2-2.6,2.6-2.6l53.4,0c1.5,0,2.6,1.2,2.6,2.6v2.8C815.7,489.6,814.5,490.7,813.1,490.7z"
                                        />
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M813.4,490.9l-54.1,0
                                        c-1.4,0-2.5-1.1-2.5-2.5v-3.5c0-1.4,1.1-2.5,2.5-2.5l54.1,0c1.4,0,2.5,1.1,2.5,2.5v3.5C815.9,489.8,814.8,490.9,813.4,490.9z
                                        M759.3,482.9c-1.1,0-2.1,0.9-2.1,2.1v3.5c0,1.1,0.9,2.1,2.1,2.1l54.1,0c1.1,0,2.1-0.9,2.1-2.1v-3.5c0-1.1-0.9-2.1-2.1-2.1
                                        L759.3,482.9z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M758.2,528.4
                                        c-0.3,4.1-0.8,28.8-0.3,32.2c0.5,3.4-1.5,13.9,0.2,13.8c1.7-0.1,23.5,1.3,28.6,1.8c5,0.6,15.9,1.8,19.3,2.6s9,0.4,9.3-0.7
                                        c0.3-1.1,0.2-47.9-0.5-50.6C814.1,524.9,758.2,528.4,758.2,528.4z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M810.2,579.5c-1.5,0-3.1-0.1-4.3-0.4
                                        c-3.7-0.8-16.7-2.3-19.2-2.6c-5-0.6-26.9-2-28.5-1.8c-0.2,0-0.3,0-0.5-0.2c-0.7-0.7-0.5-3.3-0.2-7.5c0.2-2.4,0.4-5,0.2-6.3
                                        c-0.5-3.4,0-28.1,0.3-32.3l0-0.2l0.2,0c0.1,0,14.1-0.9,28.1-1.4c28.3-1.1,28.6,0.2,28.7,0.8c0.5,2.1,0.9,49,0.5,50.7
                                        C815.2,579.1,812.7,579.5,810.2,579.5z M758.4,574.2c3.4,0,23.2,1.3,28.2,1.9c2.6,0.3,15.5,1.8,19.3,2.6
                                        c3.6,0.8,8.8,0.3,9.1-0.6c0.1-0.6,0.2-11.9,0.1-24.7c-0.1-11.6-0.3-24.4-0.6-25.8c-0.1-0.4-2.5-1.4-28.4-0.4
                                        c-13,0.5-26.1,1.3-27.8,1.4c-0.3,4.7-0.7,28.6-0.3,32c0.2,1.4,0,3.9-0.2,6.4c-0.3,3.1-0.5,6.6,0,7.1c0,0,0.1,0,0.1,0
                                        C758.1,574.2,758.2,574.2,758.4,574.2z"/>
                                </g>
                                <g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M815.7,529.3c-0.5,0.5-11.5-1-20-1
                                        c-17.7,0.1-37.2,0.8-38.6,0.5c-1.1-0.2-1.1-3.8-1.1-7.3c0-3.2-0.3-6.2,0.7-7.1c1.9-1.8,56.4-1.9,58.7,0.6c1,1.1,0.9,3.9,1,6.6
                                        C816.4,525.1,816.5,528.4,815.7,529.3z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M814.9,529.6c-0.9,0-2.4-0.1-5.2-0.3
                                        c-3.9-0.3-9.3-0.8-14-0.7c-8.2,0.1-16.9,0.2-23.8,0.4c-8.2,0.2-14,0.3-14.8,0.1c-1.2-0.2-1.2-3.2-1.3-6.6l0-0.9
                                        c0-0.5,0-0.9,0-1.4c-0.1-2.8-0.1-5,0.7-5.8c1.4-1.3,25.5-1.6,41.1-1.2c7.6,0.2,16.9,0.7,17.9,1.8c0.9,1,0.9,3.1,1,5.4
                                        c0,0.4,0,0.9,0,1.3c0.1,3.5,0.3,6.9-0.6,7.8l0,0C815.8,529.6,815.5,529.6,814.9,529.6z M796.1,528.1c4.5,0,9.7,0.4,13.6,0.7
                                        c2.8,0.2,5.5,0.5,5.9,0.3c0.7-0.8,0.6-4.4,0.5-7.5c0-0.4,0-0.9,0-1.3c-0.1-2.2-0.1-4.3-0.9-5.1c-0.3-0.3-2.3-1.2-17.6-1.7
                                        c-18-0.5-39.7,0-40.8,1.1c-0.7,0.7-0.7,3-0.6,5.5c0,0.5,0,0.9,0,1.4l0,0.9c0,2.7,0.1,6,0.9,6.2c0.8,0.2,6.9,0,14.8-0.1
                                        c7-0.1,15.6-0.3,23.8-0.4C795.8,528.1,796,528.1,796.1,528.1z"/>
                                </g>
                                <g>
                                    <path fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M766.8,494.3c-1.7,3.2-0.1,13.6,0,15.2
                                        c0.5,6.9,38.5,3.2,39.7,1.1c1-1.8,1.2-17-1.1-17.8c-1.1-0.4-10.9-1.2-20-1.1C776.1,491.9,767.5,493,766.8,494.3z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M782.8,513.7c-4.3,0-8.4-0.3-11.4-1
                                        c-3.1-0.7-4.7-1.8-4.8-3.3c0-0.2-0.1-0.7-0.1-1.3c-0.4-3.4-1.3-11.2,0.2-14c0.8-1.5,10.3-2.5,18.8-2.6
                                        c9.1-0.1,18.9,0.7,20.1,1.1c0.4,0.1,0.7,0.5,1,1.2c1.4,3.6,1.2,15.3,0.2,16.9C805.9,512,793.6,513.7,782.8,513.7z M787.2,492
                                        c-0.6,0-1.2,0-1.8,0c-10.4,0.1-17.9,1.3-18.5,2.4l0,0c-1.4,2.7-0.5,10.5-0.1,13.8c0.1,0.6,0.1,1,0.1,1.3
                                        c0.1,1.3,1.6,2.2,4.5,2.9c10.9,2.5,34-0.5,34.8-1.9c0.9-1.5,1.1-13-0.3-16.5c-0.3-0.7-0.5-0.9-0.7-0.9
                                        C804.3,492.7,795.7,492,787.2,492z"/>
                                </g>
                            </g>
                        </g>
                    </g>
                    <g id="Desk_00000159442755603189373700000001749381599268387207_">
                        
                            <image overflow="visible" opacity="0.4" width="109" height="82" href="data:image/png;base64,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" transform="matrix(1 0 0 1 753.5523 724.3594)">
                        </image>
                        <g>
                            <g>
                                <g>
                                    <g>
                                        
                                            <rect x="803.2" y="751.4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -298.7188 789.7502)" fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="1.5" height="8.1"/>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M806.3,759.3l-6.2-6.2l1.5-1.5l6.2,6.2
                                            L806.3,759.3z M801,753.1l5.3,5.3l0.6-0.6l-5.3-5.3L801,753.1z"/>
                                    </g>
                                    <g>
                                        
                                            <rect x="778.8" y="754.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -304.9011 774.8337)" fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="8.1" height="1.5"/>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M780.5,759.3l-1.5-1.5l6.2-6.2l1.5,1.5
                                            L780.5,759.3z M779.9,757.8l0.6,0.6l5.3-5.3l-0.6-0.6L779.9,757.8z"/>
                                    </g>
                                    <g>
                                        <g>
                                            <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M798.7,764.9h-10.5
                                                c-3.5,0-6.3-2.8-6.3-6.3v-7.3c0-3.5,2.8-6.3,6.3-6.3h10.5c3.5,0,6.3,2.8,6.3,6.3v7.3C805,762.1,802.1,764.9,798.7,764.9z"/>
                                            <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M803.1,765.2h-19.3
                                                c-1.2,0-2.2-1-2.2-2.2v-16.1c0-1.2,1-2.2,2.2-2.2h19.3c1.2,0,2.2,1,2.2,2.2V763C805.3,764.2,804.3,765.2,803.1,765.2z
                                                M783.8,745.3c-0.9,0-1.6,0.7-1.6,1.6V763c0,0.9,0.7,1.6,1.6,1.6h19.3c0.9,0,1.6-0.7,1.6-1.6v-16.1c0-0.9-0.7-1.6-1.6-1.6
                                                H783.8z"/>
                                        </g>
                                        <g>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M804.5,732.7h-11.1h-11.1
                                                c-2.7,0-4.5,2.6-3.6,5.1l2.1,6.2c0.4,1.3,1.6,2.1,2.9,2.1h9.6h9.6c1.3,0,2.5-0.8,2.9-2.1l2.1-6.2
                                                C809,735.3,807.1,732.7,804.5,732.7z"/>
                                            <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M803.1,746.4h-19.3
                                                c-1.5,0-2.8-0.9-3.2-2.3l-2.1-6.2c-0.4-1.3-0.3-2.7,0.5-3.8c0.8-1.1,2-1.7,3.4-1.7h22.2c1.4,0,2.6,0.6,3.4,1.7
                                                c0.8,1.1,1,2.5,0.5,3.8l-2.1,6.2C805.8,745.5,804.5,746.4,803.1,746.4z M782.3,733c-1.2,0-2.2,0.5-2.9,1.5
                                                c-0.7,1-0.8,2.1-0.5,3.2l2.1,6.2c0.4,1.1,1.5,1.9,2.7,1.9h19.3c1.2,0,2.3-0.8,2.7-1.9l2.1-6.2c0.4-1.1,0.2-2.3-0.5-3.2
                                                c-0.7-1-1.7-1.5-2.9-1.5H782.3z"/>
                                        </g>
                                        <g>
                                            <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M779.2,759.5L779.2,759.5
                                                c-0.9,0-1.5-0.7-1.5-1.5v-13.5c0-0.9,0.7-1.5,1.5-1.5l0,0c0.9,0,1.5,0.7,1.5,1.5V758C780.7,758.8,780,759.5,779.2,759.5z"/>
                                            <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M779.9,759.8h-1.4
                                                c-0.6,0-1.1-0.5-1.1-1.1v-15c0-0.6,0.5-1.1,1.1-1.1h1.4c0.6,0,1.1,0.5,1.1,1.1v15C781,759.3,780.5,759.8,779.9,759.8z
                                                M778.5,743.2c-0.3,0-0.5,0.2-0.5,0.5v15c0,0.3,0.2,0.5,0.5,0.5h1.4c0.3,0,0.5-0.2,0.5-0.5v-15c0-0.3-0.2-0.5-0.5-0.5H778.5
                                                z"/>
                                        </g>
                                        <g>
                                            <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M807.6,759.5L807.6,759.5
                                                c0.9,0,1.5-0.7,1.5-1.5v-13.5c0-0.9-0.7-1.5-1.5-1.5l0,0c-0.9,0-1.5,0.7-1.5,1.5V758C806.1,758.8,806.8,759.5,807.6,759.5z"
                                                />
                                            <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M808.4,759.8h-1.4
                                                c-0.6,0-1.1-0.5-1.1-1.1v-15c0-0.6,0.5-1.1,1.1-1.1h1.4c0.6,0,1.1,0.5,1.1,1.1v15C809.5,759.3,809,759.8,808.4,759.8z
                                                M806.9,743.2c-0.3,0-0.5,0.2-0.5,0.5v15c0,0.3,0.2,0.5,0.5,0.5h1.4c0.3,0,0.5-0.2,0.5-0.5v-15c0-0.3-0.2-0.5-0.5-0.5H806.9
                                                z"/>
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M830.1,731.7v15.2
                                        c0,8-6.5,14.4-14.4,14.4h-54.3c-1.5,0-2.7,1.2-2.7,2.7v30.8c0,1.5,1.2,2.7,2.7,2.7h90c1.5,0,2.7-1.2,2.7-2.7v-28.7v-4.8v-29.6
                                        c0-1.5-1.2-2.7-2.7-2.7h-18.6C831.3,729,830.1,730.2,830.1,731.7z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M851.3,797.8h-90c-1.6,0-3-1.3-3-3V764
                                        c0-1.6,1.3-3,3-3h54.3c7.8,0,14.1-6.3,14.1-14.1v-15.2c0-1.6,1.3-3,3-3h18.6c1.6,0,3,1.3,3,3v63.1
                                        C854.3,796.4,853,797.8,851.3,797.8z M761.3,761.6c-1.3,0-2.4,1.1-2.4,2.4v30.8c0,1.3,1.1,2.4,2.4,2.4h90
                                        c1.3,0,2.4-1.1,2.4-2.4v-63.1c0-1.3-1.1-2.4-2.4-2.4h-18.6c-1.3,0-2.4,1.1-2.4,2.4v15.2c0,8.1-6.6,14.7-14.7,14.7H761.3z"/>
                                </g>
                                <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M854,794h-95.3c-0.2,0-0.3-0.1-0.3-0.3
                                    s0.1-0.3,0.3-0.3H854c0.2,0,0.3,0.1,0.3,0.3S854.2,794,854,794z"/>
                                <g>
                                    <g>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M807.8,783.4c0-1.5-1.9-2.6-4.2-2.6
                                            c-2.3,0-4.2,1.2-4.2,2.6s1.9,2.6,4.2,2.6C805.9,786,807.8,784.8,807.8,783.4z"/>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M803.6,786.1c-2.4,0-4.3-1.2-4.3-2.8
                                            s1.9-2.8,4.3-2.8c2.4,0,4.3,1.3,4.3,2.8S806,786.1,803.6,786.1z M803.6,780.9c-2.2,0-4,1.1-4,2.5c0,1.4,1.8,2.5,4,2.5
                                            c2.2,0,4-1.1,4-2.5C807.6,782,805.8,780.9,803.6,780.9z"/>
                                    </g>
                                    <g>
                                        <path fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M825.4,787.9l-2.9-4.8
                                            c-0.2-0.3-0.5-0.5-0.9-0.5h-18h-18c-0.3,0-0.7,0.2-0.9,0.5l-2.9,4.8c-0.2,0.4,0,0.9,0.5,0.9h21.2h21.2
                                            C825.3,788.8,825.6,788.3,825.4,787.9z"/>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M824.8,789h-42.4
                                            c-0.3,0-0.5-0.1-0.7-0.4c-0.1-0.2-0.1-0.5,0-0.8l2.9-4.8c0.2-0.3,0.6-0.6,1-0.6h36.1c0.4,0,0.8,0.2,1,0.6l2.9,4.8
                                            c0.1,0.2,0.1,0.5,0,0.8C825.4,788.8,825.1,789,824.8,789z M785.6,782.8c-0.3,0-0.6,0.2-0.7,0.4L782,788
                                            c-0.1,0.1-0.1,0.3,0,0.5c0.1,0.1,0.2,0.2,0.4,0.2h42.4c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.1-0.3,0-0.5l0,0l-2.9-4.8
                                            c-0.2-0.3-0.4-0.4-0.7-0.4H785.6z"/>
                                    </g>
                                </g>
                                <g>
                                    <path fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M811.6,778.6h-15.9
                                        c-2.9,0-5.2-2.4-5.2-5.2V772c0-2.9,2.4-5.2,5.2-5.2h15.9c2.9,0,5.2,2.4,5.2,5.2v1.3C816.8,776.2,814.5,778.6,811.6,778.6z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M815.3,778.7H792c-1,0-1.7-0.8-1.7-1.7
                                        v-8.7c0-1,0.8-1.7,1.7-1.7h23.3c1,0,1.7,0.8,1.7,1.7v8.7C817,777.9,816.2,778.7,815.3,778.7z M792,766.9
                                        c-0.8,0-1.4,0.6-1.4,1.4v8.7c0,0.8,0.6,1.4,1.4,1.4h23.3c0.8,0,1.4-0.6,1.4-1.4v-8.7c0-0.8-0.6-1.4-1.4-1.4H792z"/>
                                </g>
                                <g>
                                    <path fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M785.3,777.1h-1.6
                                        c-1.4,0-2.5-1.1-2.5-2.5v-2.2c0-1.8,1.5-3.3,3.3-3.3l0,0c1.8,0,3.3,1.5,3.3,3.3v2.2C787.8,776,786.7,777.1,785.3,777.1z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M785.3,777.3h-1.6
                                        c-1.5,0-2.7-1.2-2.7-2.7v-2.2c0-1.9,1.6-3.5,3.5-3.5c1.9,0,3.5,1.6,3.5,3.5v2.2C788,776.1,786.8,777.3,785.3,777.3z
                                        M784.5,769.3c-1.7,0-3.2,1.4-3.2,3.2v2.2c0,1.3,1.1,2.4,2.4,2.4h1.6c1.3,0,2.4-1.1,2.4-2.4v-2.2
                                        C787.7,770.7,786.3,769.3,784.5,769.3z"/>
                                </g>
                                <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M784.5,777.3c-0.1,0-0.2-0.1-0.2-0.2v-8
                                    c0-0.1,0.1-0.2,0.2-0.2c0.1,0,0.2,0.1,0.2,0.2v8C784.7,777.2,784.6,777.3,784.5,777.3z"/>
                                <g>
                                    <g>
                                        
                                            <rect x="826.8" y="765.9" fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="12.5" height="17.5"/>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M839.5,783.5h-12.8v-17.8h12.8V783.5z
                                            M827,783.2h12.2V766H827V783.2z"/>
                                    </g>
                                    <g>
                                        
                                            <rect x="831" y="765.2" transform="matrix(0.9406 -0.3395 0.3395 0.9406 -213.0056 330.2119)" fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="12.5" height="17.5"/>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M834.3,784.4l-6-16.7l12-4.3l6,16.7
                                            L834.3,784.4z M828.6,767.9l5.8,16.2l11.5-4.1l-5.8-16.2L828.6,767.9z"/>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                    <text transform="matrix(1 0 0 1 784.1544 607.0308)" fill="#425563" font-family="fredoka, sans-serif" font-size="12px">Bedroom 3</text>
                    <text transform="matrix(1 0 0 1 724.8187 678.4154)" fill="#425563" font-family="fredoka, sans-serif" font-size="12px">Bedroom 4</text>
                    </g>
                </g>

                <g id="multiSlide" data-option="multiSlide" style={{ display: active.multiSlide ? "block" : "none" }} fill="#CC0001">
                    <g id="_x33__panel_slide">
                        <rect x="332.9" y="276.4" fill="#E3E4E5" width="165.4" height="10.5"/>
                        <g>
                            <path fill="#425563" d="M399.2,276.9v2.2h-65.8v-2.2H399.2 M399.7,276.4h-66.8v3.2h66.8V276.4L399.7,276.4z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M451.2,279.4v2.2h-65.8v-2.2H451.2 M451.7,278.9h-66.8v3.2h66.8V278.9L451.7,278.9z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M495.4,282.3v2.2h-65.8v-2.2H495.4 M495.9,281.8h-66.8v3.2h66.8V281.8L495.9,281.8z"/>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 339.3761 270.9191)" fill="#425563" font-family="fredoka, sans-serif" font-size="12px">Optional 3 Panel Sliding Door</text>
                        </g>
                    </g>
                </g>

                <g id="fifthBed" data-option="fifthBed" style={{ display: active.fifthBed ? "block" : "none" }} fill="#CC0001">
                    <g id="_x35_th_bed_3rd_bath">
                        <rect x="310.1" y="832.2" fill="#E3E4E5" width="188.4" height="340.3"/>
                        <g>
                            <rect x="402.5" y="927.4" fill="#BCD3DD" width="20.8" height="21.5"/>
                            <rect x="409.4" y="949.6" fill="#BCD3DD" width="13.8" height="6"/>
                            <rect x="424" y="949.6" fill="#BCD3DD" width="15.7" height="6"/>
                            <rect x="423.7" y="927.4" fill="#BCD3DD" width="20.8" height="21.5"/>
                            <rect x="444.9" y="927.4" fill="#BCD3DD" width="20.8" height="21.5"/>
                            <rect x="466.1" y="927.4" fill="#BCD3DD" width="20.8" height="21.5"/>
                            <rect x="487.4" y="927.4" fill="#BCD3DD" width="6.2" height="21.5"/>
                            <rect x="402.5" y="905.5" fill="#BCD3DD" width="20.8" height="21.5"/>
                            <rect x="423.7" y="905.5" fill="#BCD3DD" width="20.8" height="21.5"/>
                            <rect x="444.9" y="905.5" fill="#BCD3DD" width="20.8" height="21.5"/>
                            <rect x="466.1" y="905.5" fill="#BCD3DD" width="20.8" height="21.5"/>
                            <rect x="487.4" y="905.5" fill="#BCD3DD" width="6.2" height="21.5"/>
                            <rect x="402.5" y="883.6" fill="#BCD3DD" width="20.8" height="21.5"/>
                            <rect x="423.7" y="883.6" fill="#BCD3DD" width="20.8" height="21.5"/>
                            <rect x="444.9" y="883.6" fill="#BCD3DD" width="20.8" height="21.5"/>
                            <rect x="466.1" y="883.6" fill="#BCD3DD" width="20.8" height="21.5"/>
                            <rect x="487.4" y="883.6" fill="#BCD3DD" width="6.2" height="21.5"/>
                            <rect x="402.5" y="861.7" fill="#BCD3DD" width="20.8" height="21.5"/>
                            <rect x="423.7" y="861.7" fill="#BCD3DD" width="20.8" height="21.5"/>
                            <rect x="444.9" y="861.7" fill="#BCD3DD" width="20.8" height="21.5"/>
                            <rect x="466.1" y="861.7" fill="#BCD3DD" width="20.8" height="21.5"/>
                            <rect x="487.4" y="861.7" fill="#BCD3DD" width="6.2" height="21.5"/>
                        </g>
                        <polygon fill="#425563" points="498,832.1 498,957.7 491,957.7 491,955.1 440.2,955.1 440.2,949.6 493.3,949.6 493.3,874.2 
                            469.4,874.2 469.4,838 402,838 402,949.6 409,949.6 409,955.1 402,955.1 402,1004.8 452.6,1004.8 452.6,1010.3 392.9,1010.3 
                            392.9,1004.8 396.5,1004.8 396.5,936.6 317.7,936.6 317.7,1004.8 361.5,1004.8 361.5,1010.3 317.7,1010.3 317.7,1153.5 
                            370.5,1153.5 370.5,1159.7 366,1159.7 366,1171.9 317.7,1171.9 317.7,1172.5 310.1,1172.5 310.1,832.1 351.5,832.1 351.5,838 
                            317.7,838 317.7,930.8 396.5,930.8 396.5,838 382,838 382,832.1 		"/>
                        <polygon fill="#425563" points="498,1002.1 498,1171.9 442.7,1171.9 442.7,1159.7 439.1,1159.7 439.1,1153.5 491,1153.5 
                            491,1010.8 486.2,1010.8 486.2,1005.3 491,1005.3 491,1002.1 		"/>
                        <g>
                            <g>
                                <path fill="#425563" d="M438.4,1154.2v6h-67.1v-6H438.4 M439.1,1153.5h-68.6v7.5h68.6V1153.5L439.1,1153.5z"/>
                            </g>
                            <g>
                                <path fill="#425563" d="M438.4,1154.2v2.2h-67.1v-2.2H438.4 M439.1,1153.5h-68.6v3.7h68.6V1153.5L439.1,1153.5z"/>
                            </g>
                        </g>
                        <g>
                            <path fill="#425563" d="M486.1,1010.4v33.6h-1.6v-33.6H486.1 M486.9,1009.6h-3.1v35.1h3.1V1009.6L486.9,1009.6z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M393.2,974.5v30.8H391v-30.8H393.2 M393.9,973.7h-3.7v32.3h3.7V973.7L393.9,973.7z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M411.1,919.3v30.8h-2.2v-30.8H411.1 M411.8,918.6h-3.7v32.3h3.7V918.6L411.8,918.6z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M383.1,838.8v30.8h-2.2v-30.8H383.1 M383.8,838h-3.7v32.3h3.7V838L383.8,838z"/>
                        </g>
                        <path fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="5,3" d="M411.8,918.6
                            c0,0,28.3,5.3,28.3,31.1"/>
                        <path fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="5,3" d="M483.8,1044.3
                            c0,0-31.4-3.6-31.4-34"/>
                        <path fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="5,3" d="M390.2,974.1
                            c0,0-28.7,4.1-28.7,30.7"/>
                        <path fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="5,3" d="M380.1,869.8
                            c0,0-28.6-4.8-28.6-31.8"/>
                        <polygon fill="#DDE7ED" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" points="396.6,912.6 396.6,930.8 
                            317.7,930.8 317.7,838 335.9,838 335.9,912.6 		"/>
                        <polygon fill="#DDE7ED" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" points="396.6,936.1 396.6,954.3 
                            335.9,954.3 335.9,1005.1 317.7,1005.1 317.7,936.1 		"/>
                        
                            <rect x="491.3" y="956.9" fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="5,3" width="6.6" height="45.7"/>
                        
                            <rect x="466.5" y="907.1" fill="#DDE7ED" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="26.9" height="42.5"/>
                        <g id="Bedroom_2_00000035527724373069037080000017705026307251636641_">
                            
                                <image overflow="visible" opacity="0.4" width="110" height="74" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABKCAYAAABaZmHbAAAACXBIWXMAAAsSAAALEgHS3X78AAAG
                4klEQVR4nO1d/U8bORB9+SCEAqVAT3e6D510//9/dVLVXhFcm0AIIcn94Hl4drB3vbuBxpyfZCUN
                WY89b8ZjO+rMAG8fg57Pb3cyih2j7aRSvx+abF8FxvqNYaBk6vdtZG0D73eJpjFFZaZMJjT52HNb
                8xrrpy1sv3VKZP9DeT9ULUU++94EWpPsFKTos9FoxokChqaFLHir2sYIG5jn2pAX6rfOAyhrBDe/
                A3kdoZk8TdqjtAf1fhN5LhV6/lafGo1GEyNOd04FWCVoArRi19KoZN0PlZdKXqhf3bclj/2OAEwA
                TAEcSePY62RTFgm7U21pZLeF1SnHM4YnkHNaA1hJe1ByOcZnxOllhoQdoqqAKark6QmvRdAK3kKH
                8KRPkE6eJe0h0HeIuKHIOgJwCuC9vJK8phWDsm4B/AvgBsA3AHN4JXYljro4hNcl9cnVYA1nJDSY
                WwD3Muc1Owt5nO38GMCZtPcATuRvWpie8FIEPcATR+s/hCevLubp9d32ew9HnrZCrRx62zGADwDO
                5fU4INuCRrIA8B3AP9K+wpFHBbZdMvVKcChjOZVGfY5kvis4sm4AXKPqiU/hYmw6J2lT6fADgAsA
                PwH4COASjrwjxImjcrm0cLC0Lu11TdDedg+nUBrFSxH3KHJu5Fl67I183pU46pYrAcfG1WAk/S7h
                jOQLnN428KtM0OP0MvMOjrBfAPwK4DcAP8MRd4Y4cStUPY7EaY87QHviVqgahF2yGEvbLJUxeY8i
                51w9fw7ngQuEDaYJIeJoUJq4tci+huNgKzK5XK5gPE7HtgM467yEI+wvAH/AkXgB54lTVDcoOqgz
                oNoYN4EPyHXK0wj1a2Oc3b0O4GOqjsva2+o2J/RwPnsqurhF1WBS45zWLUPQCfxSyZVgKHO6k882
                AGYArqRV4nOdx53DkfU7gD/hlkt6m7XcfdpVUkmx40DThmgDb2RU8iWqxth2c6JjHEMRN3yMbwOZ
                21SemcHpW8fAp1UqJcYxtl3geZzQStincxzw/JzU5gBOJdFrz1CNbX2OA/Z4pQlZy3cWcM5DYvm9
                J93FdpXcUBxJB7qTuqVuH25OtLyuV15UEs9bu7o5iR2+9TjtGW8c+F7wHBe6eSDjtI7YxkIvnbG/
                dUFdv6nPtv0+lcVt+q7uKmNXXjqshFaLyjxSbk50Z6mW24ekH9FvTJZW6Ev0nyI/+L26u8pUAW8d
                ezn/lLNUwR6iEJcpCnGZohCXKQpxmaIQlykKcZmiEJcpCnGZohCXKQpxmaIQlykKcZmiEJcpCnGZ
                ohCXKQpxmaIQlykKcZmiEJcpCnGZohCXKQpxmaIQlykKcZmiEJcpCnGZohCXKQpxmaIQlykKcZmi
                EJcp6v5LcNv/N13wirDEDWpawR5BE6fTOdhWyNsz6NwfNiUfk7S0TSpT8AqwHqfzbtmkaYW0PYL2
                JO1tTFc0RfG6vUTxuExRYlymKLvKTFHOcZmi3JxkipRcXv93vFSJll5OUUfcNtB2ideqWdM3P2ab
                HJkpiKU9tPJrdR8iTmdiDVWc6LuEdkka2gVdk4zajLRsuzDepkSjIX0HZWvibP5jJq9eSmP++z5H
                g7ZpertCx+imXJtb897qgOVZ2ibRjo2pKbVvUuJw63HMOM5KE3O4tO0j+XyCSKrZBLRNjN0VoSy3
                oWTaoaVIZ11fwtc50JU2uozVkqaTaVOnA5HB6h5z+LT1z7Kvkzg74Dlc7vsvImwBn7bekpeKtqno
                u0CTxpT5vAnS444tgzSqJZzSZtLm8lmXhNo6VXBd+vqByL6FqyxyBVekYoZAhRFL3AqO8WsAn0TY
                HC4b+glcUm17f5mKNsUfukDHNF134B2ccnSq+C2qS6AmcQVnqDP42jozVKt8dPG4uoIRU/n7Gk7f
                VwD+BvAZjos7qGIRkIIRzDnMQfNByGC/wlvGMdqXWSHallvpCpvFndbNFWMMP1d6vSZPE3cDR95L
                EKdLtGji7kTuZzjnuYbzQk1c1OMGMqnv8Knr6W2hi+e6JbNrgaOuIHET+KJOJE7XsGE5GS2fmwOG
                Cy6Vt/C1gvrGuFBRJF3p4x7eaK7hDGcBT9xTh/o9rYKXzBPznq1vxY6UkmJdoTcBLMbE2gm2ahTj
                lvY4kkfDWqAa3/os5TrO8WczFoRgxnWGEm5SFqiuSlt2pjsGqmcMXWtgbP6dw66SRsjyZywto2Oc
                3RxxZeDftEfu4jigf4GxBSHsBo5Nb6KeOosJsML0ay7nOG18+peOusN13eF7V7ve0CGcCF18PJNd
                p/yQN6bEtCa85s2JVZRVUIyQH3nllSS7LQG7/LXgNe4qY8Znb0tieOkxpmzqCgRv4qeq/wCuZNq0
                AudOmgAAAABJRU5ErkJggg==" transform="matrix(1 0 0 1 389 1055)">
                            </image>
                            <g>
                                <g>
                                    <g>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M394.9,1116.9l0-53.5c0-0.6,0.5-1,1-1
                                            l86.2,0c2.3,0,4.2,1.9,4.2,4.2l0,46.9c0,2.3-1.9,4.2-4.2,4.2l-86.4,0C395.2,1117.7,394.9,1117.3,394.9,1116.9z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M394.6,1117l0-53.7
                                            c0-0.6,0.5-1.1,1.1-1.1l86.9,0c2.1,0,3.9,1.7,3.9,3.9l0,48.1c0,2.1-1.7,3.9-3.9,3.9l-87.1,0
                                            C395,1117.9,394.6,1117.5,394.6,1117z M486.1,1066c0-1.9-1.5-3.4-3.4-3.4l-86.9,0c-0.4,0-0.7,0.3-0.7,0.7l0,53.7
                                            c0,0.3,0.2,0.5,0.5,0.5l87.1,0c1.9,0,3.4-1.5,3.4-3.4L486.1,1066z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M482.1,1116.6l0-53.4
                                            c0-1.5,1.2-2.6,2.6-2.6h2.8c1.5,0,2.6,1.2,2.6,2.6l0,53.4c0,1.5-1.2,2.6-2.6,2.6h-2.8C483.2,1119.2,482.1,1118,482.1,1116.6z"
                                            />
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M481.8,1116.9l0-54.1
                                            c0-1.4,1.1-2.5,2.5-2.5h3.5c1.4,0,2.5,1.1,2.5,2.5l0,54.1c0,1.4-1.1,2.5-2.5,2.5h-3.5C483,1119.4,481.8,1118.3,481.8,1116.9z
                                            M489.9,1062.8c0-1.1-0.9-2.1-2.1-2.1h-3.5c-1.1,0-2.1,0.9-2.1,2.1l0,54.1c0,1.1,0.9,2.1,2.1,2.1h3.5c1.1,0,2.1-0.9,2.1-2.1
                                            L489.9,1062.8z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M444.4,1061.7
                                            c-4.1-0.3-28.8-0.8-32.2-0.3c-3.4,0.5-13.9-1.5-13.8,0.2c0.1,1.7-1.3,23.5-1.8,28.6c-0.6,5-1.8,15.9-2.6,19.3
                                            c-0.7,3.4-0.4,9,0.7,9.3c1.1,0.3,47.9,0.2,50.6-0.5C447.9,1117.6,444.4,1061.7,444.4,1061.7z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M393.3,1113.7c0-1.5,0.1-3.1,0.4-4.3
                                            c0.8-3.7,2.3-16.7,2.6-19.2c0.6-5,2-26.9,1.8-28.5c0-0.2,0-0.3,0.2-0.5c0.7-0.7,3.3-0.5,7.5-0.2c2.4,0.2,5,0.4,6.3,0.2
                                            c3.4-0.5,28.1,0,32.3,0.3l0.2,0l0,0.2c0,0.1,0.9,14.1,1.4,28.1c1.1,28.3-0.2,28.6-0.8,28.7c-2.1,0.5-49,0.9-50.7,0.5
                                            C393.7,1118.7,393.3,1116.2,393.3,1113.7z M398.6,1061.9c0,3.4-1.3,23.2-1.9,28.2c-0.3,2.6-1.8,15.5-2.6,19.3
                                            c-0.8,3.6-0.3,8.8,0.6,9.1c0.6,0.1,11.9,0.2,24.7,0.1c11.6-0.1,24.4-0.3,25.8-0.6c0.4-0.1,1.4-2.5,0.4-28.4
                                            c-0.5-13-1.3-26.1-1.4-27.8c-4.7-0.3-28.6-0.7-32-0.3c-1.4,0.2-3.9,0-6.4-0.2c-3.1-0.3-6.6-0.5-7.1,0c0,0,0,0.1,0,0.1
                                            C398.5,1061.6,398.6,1061.7,398.6,1061.9z"/>
                                    </g>
                                    <g>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M443.5,1119.2c-0.5-0.5,1-11.5,1-20
                                            c-0.1-17.7-0.8-37.2-0.5-38.6c0.2-1.1,3.8-1.1,7.3-1.1c3.2,0,6.2-0.3,7.1,0.7c1.8,1.9,1.9,56.4-0.6,58.7c-1.1,1-3.9,0.9-6.6,1
                                            C447.7,1119.9,444.3,1120,443.5,1119.2z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M443.2,1118.4c0-0.9,0.1-2.4,0.3-5.2
                                            c0.3-3.9,0.8-9.3,0.7-14c-0.1-8.2-0.2-16.9-0.4-23.8c-0.2-8.2-0.3-14-0.1-14.8c0.2-1.2,3.2-1.2,6.6-1.3l0.9,0
                                            c0.5,0,0.9,0,1.4,0c2.8-0.1,5-0.1,5.8,0.7c1.3,1.4,1.6,25.5,1.2,41.1c-0.2,7.6-0.7,16.9-1.8,17.9c-1,0.9-3.1,0.9-5.4,1
                                            c-0.4,0-0.9,0-1.3,0c-3.5,0.1-6.9,0.3-7.8-0.6l0,0C443.2,1119.3,443.2,1119,443.2,1118.4z M444.7,1099.6
                                            c0,4.5-0.4,9.7-0.7,13.6c-0.2,2.8-0.5,5.5-0.3,5.9c0.8,0.7,4.4,0.6,7.5,0.5c0.4,0,0.9,0,1.3,0c2.2-0.1,4.3-0.1,5.1-0.9
                                            c0.3-0.3,1.2-2.3,1.7-17.6c0.5-18,0-39.7-1.1-40.8c-0.7-0.7-3-0.7-5.5-0.6c-0.5,0-0.9,0-1.4,0l-0.9,0c-2.7,0-6,0.1-6.2,0.9
                                            c-0.2,0.8,0,6.9,0.1,14.8c0.1,7,0.3,15.6,0.4,23.8C444.7,1099.3,444.7,1099.5,444.7,1099.6z"/>
                                    </g>
                                    <g>
                                        <path fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M478.5,1070.3c-3.2-1.7-13.6-0.1-15.2,0
                                            c-6.9,0.5-3.2,38.5-1.1,39.7c1.8,1,17,1.2,17.8-1.1c0.4-1.1,1.2-10.9,1.1-20C480.9,1079.6,479.8,1070.9,478.5,1070.3z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M459,1086.3c0-4.3,0.3-8.4,1-11.4
                                            c0.7-3.1,1.8-4.7,3.3-4.8c0.2,0,0.7-0.1,1.3-0.1c3.4-0.4,11.2-1.3,14,0.2c1.5,0.8,2.5,10.3,2.6,18.8
                                            c0.1,9.1-0.7,18.9-1.1,20.1c-0.1,0.4-0.5,0.7-1.2,1c-3.6,1.4-15.3,1.2-16.9,0.2C460.8,1109.4,459,1097.1,459,1086.3z
                                            M480.8,1090.7c0-0.6,0-1.2,0-1.8c-0.1-10.4-1.3-17.9-2.4-18.5l0,0c-2.7-1.4-10.5-0.5-13.8-0.1c-0.6,0.1-1,0.1-1.3,0.1
                                            c-1.3,0.1-2.2,1.6-2.9,4.5c-2.5,10.9,0.5,34,1.9,34.8c1.5,0.9,13,1.1,16.5-0.3c0.7-0.3,0.9-0.5,0.9-0.7
                                            C480.1,1107.8,480.8,1099.2,480.8,1090.7z"/>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g id="TV_stand_00000099624375891975300010000002588786736644821946_">
                            
                                <image overflow="visible" opacity="0.4" width="35" height="106" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAABqCAYAAAA2juj9AAAACXBIWXMAAAsSAAALEgHS3X78AAAC
                SElEQVRoge2bTW/aQBCGHxMIEU1U9eMQpb30//+vqocWlYSgEpK4B8+Q8eIXxRiUHOaRRhCbHT/s
                Lspl3wpNtefeUOrXPrAK1yvxmSESdcf7HRl/P+qo8rOHSAA8d9T2/rgYNLJrk1DjgUJR5BHYhHoM
                QluZKohMgRnwwWoahA6VcZE1cG+1svsuVJcyExP5DHyx1ysTOqP/HvJ98WQid8Ac+GP3falql4l7
                ZQJcAl+B78CNCc3sni9XH55plmRlIj/tmQ8muDHZat/M3AA/gGua2Tmn/1L5Ej3QzMovu74C/gK3
                oefOMvmeuTSha+Ab8BG4GCDzD1jYtYX139mL6tfkm/jKRD7R3jd9ZHy/QDMTs0JkS5TxzTmyh05o
                lmZqdTFAButxbn3PeJmRbb9yZlxqRFssVl8ZwtjYd6dPl0yUUtWHV48/5Kd6MlJGkTKKlFGkjCJl
                FCmjSBlFyihSRpEyipRRpIwiZRQpo0gZRcooUkaRMoqUUaSMImUUKaNIGUXKKFJGkTKKlFGkjCJl
                FCmjSBlFyihSRpEyipRRpIwiZRQpo0gZRcoo9p2UrkX1oVePLhk/nu+vT6HgsAPtXrHvjtS4GBgF
                NrykJvyo/pCj/mvr5wmMbSykSwbaAZcVTYrCwwvHCEHcWd81RYInypRJmyVNrsTjHLccLx4yt/5R
                qJVv8kFlwAX7RscOzszt700pU9N8Wx+0BH7b9XtOFylaBhkIwZlyZrDBC04btmrNTJmJe6sYWqcM
                vGFA791GF7ukTkXnv4T/b9Td1z1CJWEAAAAASUVORK5CYII=" transform="matrix(1 0 0 1 315 1036)">
                            </image>
                            <g>
                                <g>
                                    <g>
                                        
                                            <rect x="319.4" y="1040.4" fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="21.5" height="27.8"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M319.2,1068.4l0-28.2H341l0,28.2H319.2z
                                            M319.6,1040.6v27.4h21.1v-27.4H319.6z"/>
                                    </g>
                                    <g>
                                        
                                            <rect x="319.4" y="1105.8" fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="21.5" height="27.8"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M319.2,1133.8l0-28.2H341l0,28.2H319.2z
                                            M319.6,1106v27.4h21.1V1106H319.6z"/>
                                    </g>
                                    <g>
                                        
                                            <rect x="319.4" y="1068.3" fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="21.5" height="37.5"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M319.2,1106v-37.9H341v37.9L319.2,1106z
                                            M319.6,1068.5l0,37.1h21.1l0-37.1H319.6z"/>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M330.3,1078.7l0,16.6h-0.1
                                                    c-0.5,0-0.9-0.4-0.9-0.9l0-14.8c0-0.5,0.4-0.9,0.9-0.9H330.3z"/>
                                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M329.1,1094.4v-14.8
                                                    c0-0.6,0.5-1.1,1.1-1.1h0.3v17h-0.3C329.6,1095.6,329.1,1095.1,329.1,1094.4z M330.1,1078.9c-0.4,0-0.7,0.3-0.7,0.7v14.8
                                                    c0,0.4,0.3,0.7,0.7,0.7V1078.9z"/>
                                            </g>
                                            <g>
                                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M331.8,1075.9h-0.2
                                                    c-0.7,0-1.2,0.6-1.2,1.2l0,19.9c0,0.7,0.6,1.2,1.2,1.2h0.2L331.8,1075.9z"/>
                                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M330.2,1097v-19.9
                                                    c0-0.8,0.6-1.4,1.4-1.4h0.4l0,22.7h-0.4C330.8,1098.4,330.2,1097.8,330.2,1097z M331.6,1076.1c-0.6,0-1,0.5-1,1v19.9
                                                    c0,0.6,0.5,1,1,1V1076.1z"/>
                                            </g>
                                            <g>
                                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M331.8,1075.9h-0.2
                                                    c-0.7,0-1.2,0.6-1.2,1.2l0,19.9c0,0.7,0.6,1.2,1.2,1.2h0.2L331.8,1075.9z"/>
                                                <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M330.2,1097v-19.9
                                                    c0-0.8,0.6-1.4,1.4-1.4h0.4l0,22.7h-0.4C330.8,1098.4,330.2,1097.8,330.2,1097z M331.6,1076.1c-0.6,0-1,0.5-1,1v19.9
                                                    c0,0.6,0.5,1,1,1V1076.1z"/>
                                            </g>
                                            <g>
                                                
                                                    <line fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" x1="331.9" y1="1075.9" x2="331.9" y2="1098.2"/>
                                                
                                                    <rect x="331.7" y="1075.9" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="0.4" height="22.3"/>
                                            </g>
                                        </g>
                                        <g>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M329.3,1083.4v6.6
                                                c-1.3-0.5-2.3-1.8-2.3-3.3C327,1085.2,327.9,1083.9,329.3,1083.4z"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M326.8,1086.7c0-1.6,0.9-2.9,2.4-3.5
                                                l0.3-0.1v7.2l-0.3-0.1C327.7,1089.7,326.8,1088.3,326.8,1086.7z M329.1,1083.7c-1.1,0.6-1.9,1.7-1.9,3c0,1.3,0.7,2.4,1.9,3
                                                V1083.7z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <polygon fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" points="339.7,1133.6 339.7,1105.8 
                                                340.8,1105.8 340.8,1119.6 340.8,1133.6 							"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M339.5,1133.8v-28.2h1.6l0,28.2H339.5z
                                                M339.9,1106l0,27.4h0.8V1106H339.9z"/>
                                        </g>
                                        <g>
                                            
                                                <line fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" x1="339.8" y1="1119.6" x2="340.8" y2="1119.6"/>
                                            
                                                <rect x="339.8" y="1119.4" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="1.1" height="0.4"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <polygon fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" points="339.7,1068.2 339.7,1040.4 
                                                340.8,1040.4 340.8,1054.2 340.8,1068.2 							"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M339.5,1068.4v-28.2h1.6l0,28.2H339.5z
                                                M339.9,1040.6l0,27.4h0.8v-27.4H339.9z"/>
                                        </g>
                                        <g>
                                            
                                                <line fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" x1="339.8" y1="1054.2" x2="340.8" y2="1054.2"/>
                                            
                                                <rect x="339.8" y="1054" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="1.1" height="0.4"/>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g id="bathtub">
                            
                                <rect x="417.9" y="822.3" transform="matrix(-5.080987e-14 1 -1 -5.080987e-14 1291.6837 420.123)" fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" width="35.8" height="67.2"/>
                            
                                <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                                M465.9,853.6v-8.4c-0.1-1.4-0.6-2.5-1.5-3.4c-0.9-1-1.9-1.5-3.2-1.6h-46.9c-2.6,0.5-4.8,1.7-6.7,3.4c-1.9,1.7-3.2,3.8-4.1,6.3
                                c-0.9,2.5-1.1,5.1-0.6,7.9c0.6,3.2,1.9,5.8,4,7.9c2.1,2.2,4.6,3.6,7.5,4.3h46.9c1.3-0.2,2.4-0.7,3.2-1.6c0.9-0.9,1.4-2,1.5-3.4
                                v-8.6l-2.4,1v-5L465.9,853.6l3.5,1.5l-3.5,1.5"/>
                            
                                <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                                M459.1,853.9c-0.7,0.1-1.1,0.5-1.2,1.2c0.1,0.8,0.5,1.2,1.2,1.2c0.7-0.1,1.1-0.5,1.2-1.2C460.2,854.4,459.8,854,459.1,853.9z"/>
                        </g>
                        <g id="toilet_00000081642641334149809050000018026204561785595552_">
                            <path fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" d="M483.1,886.1l-1.8-0.6c-1-0.3-2-0.7-2.7-1.3
                                c-2-1.5-4.2-2.3-6.6-2.6c-2.4-0.1-4.7,0.2-6.8,1.2c-2.2,1-4,2.5-5.5,4.5c-0.3,0.4-0.6,0.8-0.8,1.3c-0.5,1.3-0.5,2.6-0.1,3.9h0.1
                                c1.3,2.2,2.9,3.8,4.9,5c2,1.2,4.2,1.8,6.6,1.9s4.7-0.5,6.9-1.7c0.4-0.3,0.8-0.6,1.3-0.8c0.8-0.6,1.7-1,2.7-1.3l1.8-0.7V886.1
                                v-4.4c0-0.5,0.1-0.9,0.4-1.2c0.2-0.3,0.5-0.5,0.9-0.5h0.1l6.9-0.4c0.5,0,0.9,0.1,1.3,0.4c0.3,0.3,0.6,0.6,0.7,1v18.8
                                c-0.1,0.5-0.4,0.8-0.7,1c-0.3,0.3-0.8,0.4-1.3,0.4l-6.9-0.4h-0.1c-0.4-0.1-0.7-0.2-0.9-0.5c-0.3-0.3-0.4-0.7-0.4-1.2v-4.4"/>
                            <path fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" d="M460.1,889.2c-0.3,0.8-0.3,1.7,0,2.7
                                c1.1,2,2.6,3.4,4.4,4.4c1.8,1.1,3.8,1.7,5.9,1.7c2.2,0.1,4.2-0.4,6.2-1.5c1.2-0.7,2.2-1.6,3.1-2.6c0.1-0.1,0.2-0.3,0.2-0.5v-5.7
                                c0-0.2-0.1-0.4-0.2-0.6c-1.5-1.7-3.3-2.8-5.2-3.5c-2-0.6-4.1-0.8-6.1-0.4c-2.1,0.4-4,1.4-5.8,2.8
                                C461.7,886.9,460.8,888,460.1,889.2z"/>
                            <line fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" x1="484.5" y1="880" x2="484.5" y2="900.9"/>
                        </g>
                        <g id="bath-sink_00000168829782558504285190000012995039995431884450_">
                            
                                <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                                M481.5,921c1.3,0.1,2.5,0.6,3.6,1.5l0.5-3c-1.3-0.5-2.6-0.8-4.1-0.8c-2.7,0.1-5,1-6.8,2.9c-1.9,1.8-2.9,4.1-2.9,6.8
                                c0.1,2.8,1,5.1,2.9,6.9c1.8,1.9,4.1,2.9,6.8,2.9c2.8-0.1,5.1-1,6.9-2.9c1.9-1.8,2.9-4.1,2.9-6.9c-0.1-2.7-1-5-2.9-6.8
                                c-0.8-0.8-1.8-1.5-2.8-2.1c0.8,2.7,1.3,5.5,1.3,8.4l1.9-0.3h0.1h0.1c0.2,0,0.4,0.1,0.5,0.3c0.2,0.2,0.3,0.4,0.2,0.6
                                c0,0.2-0.1,0.4-0.2,0.6c-0.2,0.1-0.4,0.2-0.6,0.2c-0.2,0-0.4-0.1-0.6-0.3h-1.4c0,2.8-0.4,5.6-1.3,8.3l-0.5-2.9
                                c-1.3,1-2.8,1.6-4.5,1.6c-1.7,0-3.2-0.5-4.6-1.6c-1.1-0.9-1.9-2-2.4-3.1c-0.5-1.2-0.6-2.4-0.4-3.8c0.1-1.3,0.6-2.5,1.5-3.6
                                c0.9-1.1,2-1.9,3.1-2.4C478.9,920.9,480.1,920.8,481.5,921z"/>
                            
                                <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                                M481.5,917.4c-2,0.1-3.8,0.6-5.5,1.5c-1.7,1-3,2.3-4,4c-0.9,1.6-1.4,3.4-1.5,5.5c0.1,2.1,0.6,4,1.5,5.6c1,1.7,2.3,3,4,4
                                c1.6,0.9,3.4,1.4,5.5,1.5c2-0.1,3.9-0.6,5.6-1.5c1.7-1,3-2.3,3.9-4c1-1.6,1.5-3.5,1.6-5.6c-0.1-2-0.6-3.8-1.6-5.5
                                c-0.9-1.7-2.2-3-3.9-4C485.4,918,483.5,917.5,481.5,917.4z"/>
                            
                                <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                                M487.3,930.6v1.5c0.1,0.1,0.2,0.2,0.3,0.3c0.2-0.1,0.3-0.2,0.3-0.3v-1.4v-0.6c0-0.2-0.1-0.3-0.3-0.3c-0.1,0-0.2,0.1-0.3,0.3
                                V930.6c-0.1-0.1-0.2-0.2-0.3-0.3c-0.1-0.3,0-0.7,0.4-0.9c0.4-0.1,0.7,0.1,0.9,0.4c0.1,0.4,0,0.7-0.4,0.9"/>
                            
                                <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                                M485,934.3v-0.1c0.3-1.7,0.6-3.5,0.6-5.2h-2.9l-0.2-0.3v-0.5l0.2-0.3h2.9c-0.1-1.8-0.3-3.6-0.6-5.4"/>
                            
                                <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                                M481.5,927.5c-0.5,0.1-0.8,0.3-0.8,0.8c0.1,0.6,0.3,0.9,0.8,0.9c0.6-0.1,0.9-0.4,0.9-0.9C482.3,927.8,482,927.6,481.5,927.5z"/>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" x1="485.7" y1="927.8" x2="486.8" y2="927.8"/>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" x1="486.8" y1="929" x2="485.7" y2="929"/>
                            
                                <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                                M488.2,929l0.8,0.2c0.2-0.2,0.3-0.5,0.4-0.8c-0.1-0.3-0.3-0.6-0.6-0.8"/>
                            
                                <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                                M488.8,929.3c0.1-0.1,0.1-0.1,0.2-0.1"/>
                            
                                <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                                M487.3,925.9c-0.3,0.3-0.5,0.6-0.3,0.9c0.2,0.4,0.5,0.6,0.9,0.4c0.4-0.2,0.6-0.5,0.4-0.9c-0.1-0.1-0.2-0.3-0.4-0.4v0.7
                                c0,0.1-0.1,0.2-0.3,0.3c-0.1-0.1-0.2-0.2-0.3-0.3V925.9v-1.3c0.1-0.2,0.2-0.3,0.3-0.3c0.2,0,0.3,0.1,0.3,0.3v1.3"/>
                        </g>

                        <g>
                            <text transform="matrix(1 0 0 1 361.8101 1141.5986)" fill="#425563" font-family="fredoka, sans-serif" font-size="12px">Bedroom 4/5</text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 336.9926 964.4379)"><tspan x="0" y="0" fill="#425563" font-family="fredoka, sans-serif" font-size="12px">Walk-In</tspan><tspan x="0" y="14.4" fill="#425563" font-family="fredoka, sans-serif" font-size="12px">Closet</tspan></text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 404.3112 908.0512)" fill="#425563" font-family="fredoka, sans-serif" font-size="10.9173px">Bathroom 3</text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 339.8564 892.2513)"><tspan x="0" y="0" fill="#425563" font-family="fredoka, sans-serif" font-size="12px">Walk-In </tspan><tspan x="0" y="14.4" fill="#425563" font-family="fredoka, sans-serif" font-size="12px">Pantry</tspan></text>
                        </g>
                    </g>
                    <SmallPantryHotspot/>
                </g>
            </g>
      </g>
    </g>
  </svg>

  );
}


// ❗ if you have a placeholder, TYPE IT so it matches Floor['SVG']
export const EmptySVG: React.FC<SVGProps> = () => null;

export const RaleighP741AMainOptions = [
    { key: "fourthBed", label: "Optional Fourth Bedroom" },
    { key: "fifthBed", label: "Extra Bed & Bath" },
    { key: "multiSlide", label: "Multi-slide Patio Door" },
];
export const AugustaP740BasementOptions = [
];
export const RaleighP741 = {
    code: "RaleighP741",
    floors: [
        { id: "main", name: "Main Level", SVG:RaleighP741mainSVG, options: RaleighP741AMainOptions },
    ],
};
