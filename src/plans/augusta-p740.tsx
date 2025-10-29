import { useEffect, } from "react";
import type { SVGProps } from "../types/floorplan";
import type { Plan } from "../types/floorplan";
import useFPState from "../store/useFPState";
import WaterSaverGame from "../components/games/WaterSaverGame";
import InsulationSavingsGame from "../components/games/InsulationSavingsGame";
import WindowIRGame from "../components/games/WindowIRGame";
import MudroomMiniGame from "../components/games/MudroomMiniGame";


// LIFESTYLE FEATURES
export function HostHotspot() {
  const { openGallery, openModal } = useFPState();

  const gallery = {
    title: "HOST WITHOUT THE HASSLE",
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
      <circle className="dot" cx={560} cy={380} r={20} fill="#af272f" opacity={1} />
      <circle className="pulse" cx={560} cy={380} r={20} stroke="#af272f" fill="transparent" opacity={0.25} />
      <text x={560} y={384} textAnchor="middle" fill="white" fontSize={12}>
        1
      </text>
    </g>
  );
}
export function BackyardHotspot() {
  const { openGallery, openModal } = useFPState();

  const gallery = {
    title: "TURN YOUR BACKYARD INTO A GETAWAY",
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
      <circle className="dot" cx={420} cy={150} r={20} fill="#af272f" opacity={1} />
      <circle className="pulse" cx={420} cy={150} r={20} stroke="#af272f" fill="transparent" opacity={0.25} />
      <text x={420} y={154} textAnchor="middle" fill="white" fontSize={12}>
        2
      </text>
    </g>
  );
}
export function CompanyHotspot() {
  const { openGallery, openModal } = useFPState();

  const gallery = {
    title: "ALWAYS BE READY FOR COMPANY",
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
      <circle className="dot" cx={420} cy={610} r={20} fill="#af272f" opacity={1} />
      <circle className="pulse" cx={420} cy={610} r={20} stroke="#af272f" fill="transparent" opacity={0.25} />
      <text x={420} y={614} textAnchor="middle" fill="white" fontSize={12}>
        3
      </text>
    </g>
  );
}
export function MudroomHotspot() {
  const { openGallery, openModal } = useFPState();

  const gallery = {
    title: "GIVE LIFE's STUFF A PLACE TO LAND",
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
      <circle className="dot" cx={670} cy={640} r={20} fill="#af272f" opacity={1} />
      <circle className="pulse" cx={670} cy={640} r={20} stroke="#af272f" fill="transparent" opacity={0.25} />
      <text x={670} y={644} textAnchor="middle" fill="white" fontSize={12}>
        4
      </text>
    </g>
  );
}
export function MorningHotspot() {
  const { openGallery, openModal } = useFPState();

  const gallery = {
    title: "START YOUR MORNINGS LESS MESSY",
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
      <circle className="dot" cx={670} cy={440} r={20} fill="#af272f" opacity={1} />
      <circle className="pulse" cx={670} cy={440} r={20} stroke="#af272f" fill="transparent" opacity={0.25} />
      <text x={670} y={444} textAnchor="middle" fill="white" fontSize={12}>
        5
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
export function AugustaP740mainSVG({
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
                <g>
                    <polygon fill="#FFFFFF" points="343.3,1172.3 343.3,995.1 341.4,995.1 341.4,109.1 667.4,109.1 667.4,44.6 871.2,44.6 
                    871.2,995.1 599.5,995.1 599.5,1172.3 		"/>
                    <path d="M870.7,45.1v949.5H600h-1v1v176.2H343.8V995.6v-1h-1h-0.9v-885h325h1v-1V45.1H870.7 M871.7,44.1H666.9v64.6h-326v887h1.9
                    v177.2H600V995.6h271.7V44.1L871.7,44.1z"/>
                </g>
            </g>
            <g id="main_floor">
                <g id="flooring">
                    <rect x="349.2" y="715.8" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="370.8" y="715.8" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="392" y="715.8" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="413.5" y="715.8" fill="#BCD3DD" width="7.3" height="21.5"/>
                    <rect x="349.2" y="737.7" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="370.8" y="737.7" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="392" y="737.7" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="413.5" y="737.7" fill="#BCD3DD" width="7.3" height="21.5"/>
                    <rect x="349.3" y="759.5" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="370.8" y="759.5" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="392.1" y="759.5" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="413.6" y="759.6" fill="#BCD3DD" width="7.3" height="21.5"/>
                    <rect x="349.3" y="781.7" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="370.8" y="781.7" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="392.1" y="781.7" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="413.6" y="781.7" fill="#BCD3DD" width="7.3" height="21.5"/>
                    <rect x="732.8" y="235.4" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="754.3" y="235.4" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="775.5" y="235.4" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="796.8" y="235.4" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="732.8" y="257.6" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="754.3" y="257.6" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="775.5" y="257.6" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="796.8" y="257.6" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="732.8" y="279.8" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="754.3" y="279.8" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="775.5" y="279.8" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="796.8" y="279.8" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="732.8" y="302" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="754.3" y="302" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="775.5" y="302" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="796.8" y="302" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="732.8" y="324.3" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="754.3" y="324.3" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="775.5" y="324.3" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="796.8" y="324.3" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="732.8" y="346.5" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="754.3" y="346.5" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="775.5" y="346.5" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="796.8" y="346.5" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="732.8" y="368.7" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="754.3" y="368.7" fill="#BCD3DD" width="17.5" height="21.5"/>
                    <rect x="775.5" y="368.7" fill="#BCD3DD" width="20.8" height="10.8"/>
                    <rect x="796.8" y="368.7" fill="#BCD3DD" width="20.8" height="10.8"/>
                    <rect x="732.8" y="390.9" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="754.3" y="390.9" fill="#BCD3DD" width="17.5" height="21.5"/>
                    <rect x="349.3" y="803.7" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="370.8" y="803.7" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="392.1" y="803.7" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="413.6" y="803.7" fill="#BCD3DD" width="7.3" height="21.5"/>
                    <rect x="349.3" y="825.8" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="370.8" y="825.8" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="392.1" y="825.8" fill="#BCD3DD" width="20.8" height="21.5"/>
                    <rect x="413.6" y="825.9" fill="#BCD3DD" width="7.3" height="21.5"/>
                </g>
                <g id="structural-lines">
                    <polygon fill="#425563" points="374.7,281.4 374.7,288.5 345.8,288.5 345.8,315.6 340.9,315.6 340.9,281.4 		"/>
                    <polygon fill="#425563" points="527.4,258.6 527.4,288.5 494,288.5 494,281.4 520.3,281.4 520.3,258.6 		"/>
                    <polygon fill="#425563" points="368.6,108.6 368.6,117.7 350,117.7 350,136.3 340.9,136.3 340.9,108.6 		"/>
                    <polygon fill="#425563" points="561.7,108.6 561.7,113.5 527.4,113.5 527.4,139.6 520.3,139.6 520.3,108.6 		"/>
                    <rect x="340.9" y="349.9" fill="#425563" width="4.9" height="125.7"/>
                    <polygon fill="#425563" points="873.4,690.7 873.4,742.8 865.7,742.8 865.7,691.6 868.5,691.6 868.5,692.7 868.6,692.7 
                        868.6,691.6 868.5,691.6 868.5,536 701.8,536 701.8,691.6 701.9,691.6 701.9,696.5 640.8,696.5 640.8,691.6 696.8,691.6 
                        696.8,609.5 690.5,609.5 690.5,604.6 696.8,604.6 696.8,538.2 588.9,538.2 588.9,604.6 656.3,604.6 656.3,609.5 644.3,609.5 
                        644.3,636.8 630.5,636.8 630.5,631.9 639.4,631.9 639.4,609.5 588.9,609.5 588.9,609.6 586.6,609.6 586.6,631.9 598.4,631.9 
                        598.4,636.8 588.9,636.8 588.9,641.2 581.7,641.2 581.7,538.2 579,538.2 579,531.1 664.7,531.1 664.7,501.4 664.8,501.3 
                        669.2,496.9 672.7,500.4 669.6,503.5 669.6,531.1 725,531.1 725,475.7 697.6,475.7 694.5,478.7 691,475.2 695.4,470.8 
                        695.5,470.7 725,470.7 725,286.3 666.4,286.3 666.4,278 673.5,278 673.5,281.2 725,281.2 725,232.5 715,232.5 715,227.5 
                        773.2,227.5 773.2,234.6 732.2,234.6 732.2,329.5 773.2,329.5 773.2,338.8 768.3,338.8 768.3,334.4 730,334.4 730,409.8 
                        768.2,409.8 768.2,366.7 773.2,366.7 773.2,379.2 777.5,379.2 777.5,384.2 773.2,384.2 773.2,414.7 730,414.7 730,531.1 
                        868.5,531.1 868.5,384.2 805.6,384.2 805.6,379.2 868.5,379.2 868.5,363.9 873.4,363.9 873.4,690.7 		"/>
                    <polygon fill="#425563" points="873.4,778.1 873.4,1013.2 837.5,1013.2 837.5,999.9 833.1,999.9 833.1,992.2 865.7,992.2 
                        865.7,778.1 		"/>
                    <polygon fill="#425563" points="464.1,877.6 464.1,882.6 450.9,882.6 450.9,914.2 433.3,914.2 433.3,909.3 446,909.3 446,882.6 
                        345.8,882.6 345.8,909.3 367.9,909.3 367.9,914.2 345.8,914.2 345.8,926.6 340.9,926.6 340.9,835.5 348,835.5 348,842.4 
                        356.8,842.4 356.8,877.6 422.2,877.6 422.2,752.9 427.2,752.9 427.2,827.1 454.8,827.1 454.8,838.8 449.9,838.8 449.9,832.1 
                        427.2,832.1 427.2,877.6 449.9,877.6 449.9,871.1 454.8,871.1 454.8,877.6 		"/>
                    <polygon fill="#425563" points="617.1,992.2 617.1,1013.2 581.7,1013.2 581.7,882.6 564,882.6 564,877.7 581.7,877.7 581.7,685 
                        588.8,685 588.8,691.6 606.5,691.6 606.5,696.5 586.7,696.5 586.7,874.8 589.4,874.8 589.4,992.2 		"/>
                    <rect x="868.5" y="320.5" fill="#425563" width="4.9" height="15.9"/>
                    <rect x="868.5" y="277.8" fill="#425563" width="4.9" height="15.5"/>
                    <rect x="868.5" y="87" fill="#425563" width="4.9" height="100.8"/>
                    <polygon fill="#425563" points="873.4,42.2 873.4,59.3 868.5,59.3 868.5,47.1 810.2,47.1 810.2,42.2 		"/>
                    <polygon fill="#425563" points="671.4,47.1 671.4,227.5 680.8,227.5 680.8,232.5 673.6,232.5 673.6,235.8 666.4,235.8 
                        666.4,113.5 629.2,113.5 629.2,108.6 666.4,108.6 666.4,42.2 729.5,42.2 729.5,47.1 		"/>
                    <polygon fill="#425563" points="873.4,215.3 873.4,250.3 868.5,250.3 868.5,234.6 812,234.6 812,227.5 868.5,227.5 868.5,215.3 		
                        "/>
                    <polygon fill="#425563" points="525,877.7 525,882.6 508,882.6 508,1066.5 340.9,1066.5 340.9,954 345.8,954 345.8,1059.3 
                        503.1,1059.3 503.1,882.6 496.4,882.6 496.4,877.7 500.8,877.7 500.8,827.3 508,827.3 508,877.7 		"/>
                    <polygon fill="#425563" points="368.4,1163.8 368.4,1172.8 340.9,1172.8 340.9,1145.1 349.9,1145.1 349.9,1163.8 		"/>
                    <polygon fill="#425563" points="600,1145.1 600,1172.8 573.1,1172.8 573.1,1163.8 591,1163.8 591,1145.1 		"/>
                    <rect x="344.3" y="679.8" fill="#425563" width="18.8" height="3.9"/>
                    <polygon fill="#425563" points="463.3,679.8 463.3,683.7 451.9,683.7 451.9,716.5 427.2,716.5 427.2,720.9 422.2,720.9 
                        422.2,716.5 348,716.5 348,807.8 340.9,807.8 340.9,650.9 345.8,650.9 345.8,711.5 447.6,711.5 447.6,683.7 429.3,683.7 
                        429.3,679.8 		"/>
                    <polygon fill="#425563" points="511.2,531.1 511.2,538.2 508,538.2 508,720.2 500.9,720.2 500.9,684.8 500.8,684.8 500.8,683.7 
                        496.1,683.7 496.1,679.8 500.8,679.8 500.8,536 345.8,536 345.8,596.8 340.9,596.8 340.9,509.9 345.8,509.9 345.8,531.1 		"/>
                </g>
                <g id="windows">
                    <g>
                        <g>
                            <path fill="#425563" d="M870.5,337.4v25.5h-1v-25.5H870.5 M871.5,336.4h-3v27.5h3V336.4L871.5,336.4z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M874,337.4v25.5h-4.6v-25.5H874 M875,336.4h-6.6v27.5h6.6V336.4L875,336.4z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#425563" d="M870.5,294.3v25.5h-1v-25.5H870.5 M871.5,293.3h-3v27.5h3V293.3L871.5,293.3z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M874,294.3v25.5h-4.6v-25.5H874 M875,293.3h-6.6v27.5h6.6V293.3L875,293.3z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#425563" d="M870.5,251.3v25.6h-1v-25.6H870.5 M871.5,250.3h-3v27.6h3V250.3L871.5,250.3z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M874,251.3v25.6h-4.6v-25.6H874 M875,250.3h-6.6v27.6h6.6V250.3L875,250.3z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#425563" d="M870.5,188.8v25.6h-1v-25.6H870.5 M871.5,187.8h-3v27.6h3V187.8L871.5,187.8z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M874,188.8v25.6h-4.6v-25.6H874 M875,187.8h-6.6v27.6h6.6V187.8L875,187.8z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#425563" d="M870.5,60.3v25.6h-1V60.3H870.5 M871.5,59.3h-3v27.6h3V59.3L871.5,59.3z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M874,60.3v25.6h-4.6V60.3H874 M875,59.3h-6.6v27.6h6.6V59.3L875,59.3z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#425563" d="M344.8,316.6v32.3h-1v-32.3H344.8 M345.8,315.6h-3v34.3h3V315.6L345.8,315.6z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M344.8,316.6v32.3h-4.6v-32.3H344.8 M345.8,315.6h-6.6v34.3h6.6V315.6L345.8,315.6z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#425563" d="M344.8,476.6v32.3h-1v-32.3H344.8 M345.8,475.6h-3v34.3h3V475.6L345.8,475.6z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M344.8,476.6v32.3h-4.6v-32.3H344.8 M345.8,475.6h-6.6v34.3h6.6V475.6L345.8,475.6z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#425563" d="M344.8,597.8v52.1h-1v-52.1H344.8 M345.8,596.8h-3v54.1h3V596.8L345.8,596.8z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M344.8,597.8v52.1h-4.6v-52.1H344.8 M345.8,596.8h-6.6v54.1h6.6V596.8L345.8,596.8z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#425563" d="M346.9,808.8v25.6h-2v-25.6H346.9 M347.9,807.8h-4v27.6h4V807.8L347.9,807.8z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M346.9,808.8v25.6h-6.8v-25.6H346.9 M347.9,807.8h-8.8v27.6h8.8V807.8L347.9,807.8z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#425563" d="M344.8,927.6v25.6h-1v-25.6H344.8 M345.8,926.6h-3v27.6h3V926.6L345.8,926.6z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M344.8,927.6v25.6h-4.7v-25.6H344.8 M345.8,926.6h-6.7v27.6h6.7V926.6L345.8,926.6z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#425563" d="M809.3,45.1v1h-78.7v-1H809.3 M810.3,44.1h-80.7v3h80.7V44.1L810.3,44.1z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M809.3,41.6v4.6h-78.7v-4.6H809.3 M810.3,40.6h-80.7v6.6h80.7V40.6L810.3,40.6z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#425563" d="M628.2,111.5v1h-65.5v-1H628.2 M629.2,110.5h-67.5v3h67.5V110.5L629.2,110.5z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M628.2,108v4.6h-65.5V108H628.2 M629.2,107h-67.5v6.6h67.5V107L629.2,107z"/>
                        </g>
                    </g>
                </g>
                <g id="others-hidden">
                    <line fill="none" stroke="#425563" stroke-miterlimit="10" x1="341.4" y1="282" x2="341.4" y2="136.3"/>
                    <line fill="none" stroke="#425563" stroke-miterlimit="10" x1="368.6" y1="109.1" x2="520.3" y2="109.1"/>
                    <g>
                        <g>
                            
                                <line fill="none" stroke="#425563" stroke-linecap="round" stroke-miterlimit="10" x1="368.6" y1="117.2" x2="372.1" y2="117.2"/>
                            
                                <line fill="none" stroke="#425563" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray="6.8002,4.8573" x1="376.9" y1="117.2" x2="514.4" y2="117.2"/>
                            
                                <line fill="none" stroke="#425563" stroke-linecap="round" stroke-miterlimit="10" x1="516.8" y1="117.2" x2="520.3" y2="117.2"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <line fill="none" stroke="#425563" stroke-linecap="round" stroke-miterlimit="10" x1="349.4" y1="128" x2="349.4" y2="131.5"/>
                            
                                <line fill="none" stroke="#425563" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray="6.8563,4.8973" x1="349.4" y1="136.4" x2="349.4" y2="275"/>
                            
                                <line fill="none" stroke="#425563" stroke-linecap="round" stroke-miterlimit="10" x1="349.4" y1="277.4" x2="349.4" y2="280.9"/>
                        </g>
                    </g>
                    <line fill="none" stroke="#425563" stroke-miterlimit="10" x1="368.4" y1="1172.3" x2="573.5" y2="1172.3"/>
                    <line fill="none" stroke="#425563" stroke-miterlimit="10" x1="341.4" y1="1065.6" x2="341.4" y2="1145.1"/>
                    <line fill="none" stroke="#425563" stroke-miterlimit="10" x1="600" y1="1012.8" x2="600" y2="1145.1"/>
                    <line fill="none" stroke="#425563" stroke-miterlimit="10" x1="834.5" y1="995.6" x2="613.5" y2="995.6"/>
                    <g>
                        <path fill="#425563" d="M673.5,235.8h-6v1h6V235.8L673.5,235.8z M667.4,238.7h-1v6h1V238.7L667.4,238.7z M667.4,248.7h-1v6h1
                            V248.7L667.4,248.7z M667.4,258.7h-1v6h1V258.7L667.4,258.7z M667.4,268.7h-1v6h1V268.7L667.4,268.7z M673.1,277h-6v1h6V277
                            L673.1,277z M673.5,268.4h-1v6h1V268.4L673.5,268.4z M673.5,258.4h-1v6h1V258.4L673.5,258.4z M673.5,248.4h-1v6h1V248.4
                            L673.5,248.4z M673.5,238.4h-1v6h1V238.4L673.5,238.4z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M802,227.5h-6v1h6V227.5L802,227.5z M792,227.5h-6v1h6V227.5L792,227.5z M782,227.5h-6v1h6V227.5
                            L782,227.5z M774.2,228.7h-1v5.8h1l0,0l0,0l0,0V228.7L774.2,228.7z M783.4,233.6h-6v1h6V233.6L783.4,233.6z M793.4,233.6h-6v1h6
                            V233.6L793.4,233.6z M803.4,233.6h-6v1h6V233.6L803.4,233.6z M812,233.2h-1v0.4h-3.6v1h4.6V233.2L812,233.2z M812,227.5h-6v1h5
                            v0.7h1V227.5L812,227.5z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M508,720.2h-6v1h6V720.2L508,720.2z M501.9,723.1h-1v6h1V723.1L501.9,723.1z M501.9,733.1h-1v6h1V733.1
                            L501.9,733.1z M501.9,743.1h-1v6h1V743.1L501.9,743.1z M501.9,753.1h-1v6h1V753.1L501.9,753.1z M501.9,763.1h-1v6h1V763.1
                            L501.9,763.1z M501.9,773.1h-1v6h1V773.1L501.9,773.1z M501.9,783.1h-1v6h1V783.1L501.9,783.1z M501.9,793.1h-1v6h1V793.1
                            L501.9,793.1z M501.9,803.1h-1v6h1V803.1L501.9,803.1z M501.9,813.1h-1v6h1V813.1L501.9,813.1z M501.9,823.1h-1v4.2h1l0,0l0,0
                            l0,0l0,0c0.4,0,0.8,0,0.8,0v-1h-0.8V823.1L501.9,823.1z M508,822.5h-1v3.7h-0.3v1h1.3V822.5L508,822.5z M508,812.5h-1v6h1V812.5
                            L508,812.5z M508,802.5h-1v6h1V802.5L508,802.5z M508,792.5h-1v6h1V792.5L508,792.5z M508,782.5h-1v6h1V782.5L508,782.5z
                            M508,772.5h-1v6h1V772.5L508,772.5z M508,762.5h-1v6h1V762.5L508,762.5z M508,752.5h-1v6h1V752.5L508,752.5z M508,742.5h-1v6h1
                            V742.5L508,742.5z M508,732.5h-1v6h1V732.5L508,732.5z M508,722.5h-1v6h1V722.5L508,722.5z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M582.8,644.1h-1v6h1V644.1L582.8,644.1z M582.8,654.1h-1v6h1V654.1L582.8,654.1z M582.8,664.1h-1v6h1
                            V664.1L582.8,664.1z M582.8,674.1h-1v6h1V674.1L582.8,674.1z M586.9,684h-5.1v0.1l0,0V684v0.1l0,0v0.9h1l0,0l0,0l0,0l0,0
                            c1.5,0,4.1,0,4.1,0V684L586.9,684z M588.8,676.9h-1v6h1V676.9L588.8,676.9z M588.8,666.9h-1v6h1V666.9L588.8,666.9z M588.8,656.9
                            h-1v6h1V656.9L588.8,656.9z M588.8,646.9h-1v6h1V646.9L588.8,646.9z M588.8,641.2h-6v1h5v0.7h1V641.2L588.8,641.2z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M579,531h-6v1h6V531L579,531z M569,531h-6v1h6V531L569,531z M559,531h-6v1h6V531L559,531z M549,531h-6v1
                            h6V531L549,531z M539,531h-6v1h6V531L539,531z M529,531h-6v1h6V531L529,531z M519,531h-6v1h6V531L519,531z M512.2,533.2h-1v5h1
                            l0,0l0,0l0,0l0,0c0,0,0,0,0,0v-1h0V533.2L512.2,533.2z M522.2,537.2h-6v1h6V537.2L522.2,537.2z M532.2,537.2h-6v1h6V537.2
                            L532.2,537.2z M542.2,537.2h-6v1h6V537.2L542.2,537.2z M552.2,537.2h-6v1h6V537.2L552.2,537.2z M562.2,537.2h-6v1h6V537.2
                            L562.2,537.2z M572.2,537.2h-6v1h6V537.2L572.2,537.2z M579,535h-1v2.1h-1.9v1h2.9V535L579,535z"/>
                    </g>
                </g>
                <g id="doors">
                    <g>
                        <path fill="#425563" d="M873.5,743.8v33.3h-6.8v-33.3H873.5 M874.5,742.8h-8.8v35.3h8.8V742.8L874.5,742.8z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M864.7,743v1.4h-30.5V743H864.7 M865.7,742h-32.5v3.4h32.5V742L865.7,742z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M421.4,722v1.4h-30.5V722H421.4 M422.4,721h-32.5v3.4h32.5V721L422.4,721z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M496.1,647.3v31.9h-1.4v-31.9H496.1 M497.1,646.3h-3.4v33.9h3.4V646.3L497.1,646.3z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M564.1,838.8v38.9h-1.4v-38.9H564.1 M565.1,837.8h-3.4v40.9h3.4V837.8L565.1,837.8z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M466,883.6v38.9h-1.4v-38.9H466 M467,882.6h-3.4v40.9h3.4V882.6L467,882.6z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M476.2,847.3l1,1L454.5,871l-1-1L476.2,847.3 M476.2,845.9L452.1,870l2.4,2.4l24.1-24.1L476.2,845.9
                            L476.2,845.9z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M400.4,912v1.2h-31.8V912H400.4 M401.1,911.3h-33.3v2.7h33.3V911.3L401.1,911.3z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M431.8,910.3v1.2h-32.4v-1.2H431.8 M432.5,909.5h-33.9v2.7h33.9V909.5L432.5,909.5z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M629.3,635.4l1,1l-22.7,22.7l-1-1L629.3,635.4 M629.3,634l-24.1,24.1l2.4,2.4l24.1-24.1L629.3,634
                            L629.3,634z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M616.4,667.6l24.4,24.4l-1,1l-24.4-24.4L616.4,667.6 M616.4,666.2l-2.4,2.4l25.8,25.8l2.4-2.4
                            L616.4,666.2L616.4,666.2z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M671.1,467.2v30h-1.4v-30H671.1 M672.1,466.2h-3.4v32h3.4V466.2L672.1,466.2z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M682.5,196.8v30h-1.4v-30H682.5 M683.5,195.8h-3.4v32h3.4V195.8L683.5,195.8z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M778.8,384.1v28h-1.4v-28H778.8 M779.8,383.1h-3.4v30h3.4V383.1L779.8,383.1z"/>
                    </g>
                    <g>
                        <line fill="none" stroke="#425563" stroke-miterlimit="10" x1="523.6" y1="883" x2="565.4" y2="883"/>
                    </g>
                    <g>
                        <g>
                            <path fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" d="M476.2,845.9c0,0-0.2-0.3-0.6-0.8"/>
                            <path fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="1.9821,1.9821" d="
                                M474.2,843.7c-2.9-2.7-8.9-6.8-17.4-5.3"/>
                            <path fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" d="M455.8,838.6c-0.3,0.1-0.6,0.2-1,0.2"/>
                        </g>
                    </g>
                    <path fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="2,2" d="M614,668.6
                        c0,0-7.5,4.9-7.5,23"/>
                    <path fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="2,2" d="M605.2,658.1
                        c0,0-9.7-7.8-6.8-21.3"/>
                    <path fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="2,2" d="M672.1,466.2
                        c0,0,13.3-2.2,18.9,9"/>
                    <path fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="2,2" d="M779.8,413.1
                        c0,0,25.8,0.4,25.8-29"/>
                    <path fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="2,2" d="M561.7,837.8
                        c0,0-36.7,1.6-36.7,39.8"/>
                    <g>
                        
                            <rect x="374.2" y="280.4" fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="119.8" height="9.3"/>
                        
                            <rect x="374.2" y="287.1" fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="119.8" height="2.6"/>
                    </g>
                    <g>
                        
                            <rect x="501.7" y="159" transform="matrix(1.644542e-05 1 -1 1.644542e-05 682.2689 -361.6796)" fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="40.6" height="2.6"/>
                        
                            <rect x="504.2" y="197.4" transform="matrix(1.644542e-05 1 -1 1.644542e-05 723.1946 -325.8857)" fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="40.6" height="2.6"/>
                        
                            <rect x="505.5" y="233.4" transform="matrix(1.644542e-05 1 -1 1.644542e-05 760.4849 -291.1616)" fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="40.6" height="2.6"/>
                    </g>
                    <path fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="2,2" d="M389.8,724.3
                        c0,0-1.9,28.5,32.4,28.5"/>
                    <g>
                        <path fill="#425563" d="M395.9,680.9v0.5h-32.4v-0.5H395.9 M396.4,680.4H363v1.5h33.4V680.4L396.4,680.4z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M427.5,682v1.4h-32.9V682H427.5 M428,681.5h-33.9v2.4H428V681.5L428,681.5z"/>
                    </g>
                    <path fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="2,2" d="M493.7,646.3
                        c0,0-30.4,5.2-30.4,33.5"/>
                    <path fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="2,2" d="M683.5,195.8
                        c0,0,31.5,1,31.5,31.7"/>
                    <path fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="2,2" d="M467,923.4
                        c0,0,29.4-4.9,29.4-40.8"/>
                    <path fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="2,2" d="M833.1,745.4
                        c0,0-0.6,32.7,32.5,32.7"/>
                </g>
                <g id="prim-van">
                    
                        <rect x="696.9" y="269.9" transform="matrix(6.123234e-17 -1 1 6.123234e-17 462.3128 1026.3661)" fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" width="94.9" height="24.2"/>
                    <g id="bath-sink">
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M743.8,264c-1.3-0.1-2.5-0.6-3.6-1.5l-0.5,3c1.3,0.5,2.6,0.8,4.1,0.8c2.7-0.1,5-1,6.8-2.9c1.9-1.8,2.9-4.1,2.9-6.8
                            c-0.1-2.8-1-5.1-2.9-6.9c-1.8-1.9-4.1-2.9-6.8-2.9c-2.8,0.1-5.1,1-6.9,2.9c-1.9,1.8-2.9,4.1-2.9,6.9c0.1,2.7,1,5,2.9,6.8
                            c0.8,0.8,1.8,1.5,2.8,2.1c-0.8-2.7-1.3-5.5-1.3-8.4l-1.9,0.3h-0.1h-0.1c-0.2,0-0.4-0.1-0.5-0.3c-0.2-0.2-0.3-0.4-0.2-0.6
                            c0-0.2,0.1-0.4,0.2-0.6c0.2-0.1,0.4-0.2,0.6-0.2c0.2,0,0.4,0.1,0.6,0.3h1.4c0-2.8,0.4-5.6,1.3-8.3l0.5,2.9c1.3-1,2.8-1.6,4.5-1.6
                            c1.7,0,3.2,0.5,4.6,1.6c1.1,0.9,1.9,2,2.4,3.1s0.6,2.4,0.4,3.8c-0.1,1.3-0.6,2.5-1.5,3.6c-0.9,1.1-2,1.9-3.1,2.4
                            C746.4,264.1,745.1,264.2,743.8,264z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M743.8,267.6c2-0.1,3.8-0.6,5.5-1.5c1.7-1,3-2.3,4-4c0.9-1.6,1.4-3.4,1.5-5.5c-0.1-2.1-0.6-4-1.5-5.6c-1-1.7-2.3-3-4-4
                            c-1.6-0.9-3.4-1.4-5.5-1.5c-2,0.1-3.9,0.6-5.6,1.5c-1.7,1-3,2.3-3.9,4c-1,1.6-1.5,3.5-1.6,5.6c0.1,2,0.6,3.8,1.6,5.5
                            c0.9,1.7,2.2,3,3.9,4C739.9,267,741.8,267.5,743.8,267.6z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M737.9,254.4v-1.5c-0.1-0.1-0.2-0.2-0.3-0.3c-0.2,0.1-0.3,0.2-0.3,0.3v1.4v0.6c0,0.2,0.1,0.3,0.3,0.3c0.1,0,0.2-0.1,0.3-0.3
                            V254.4c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.3,0,0.7-0.4,0.9c-0.4,0.1-0.7-0.1-0.9-0.4c-0.1-0.4,0-0.7,0.4-0.9"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M740.2,250.7v0.1c-0.3,1.7-0.6,3.5-0.6,5.2h2.9l0.2,0.3v0.5l-0.2,0.3h-2.9c0.1,1.8,0.3,3.6,0.6,5.4"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M743.8,257.5c0.5-0.1,0.8-0.3,0.8-0.8c-0.1-0.6-0.3-0.9-0.8-0.9c-0.6,0.1-0.9,0.4-0.9,0.9C742.9,257.2,743.2,257.5,743.8,257.5z"
                            />
                        
                            <line fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" x1="739.6" y1="257.2" x2="738.4" y2="257.2"/>
                        
                            <line fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" x1="738.4" y1="256.1" x2="739.6" y2="256.1"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M737.1,256.1l-0.8-0.2c-0.2,0.2-0.3,0.5-0.4,0.8c0.1,0.3,0.3,0.6,0.6,0.8"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M736.4,255.7c-0.1,0.1-0.1,0.1-0.2,0.1"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M737.9,259.1c0.3-0.3,0.5-0.6,0.3-0.9c-0.2-0.4-0.5-0.6-0.9-0.4c-0.4,0.2-0.6,0.5-0.4,0.9c0.1,0.1,0.2,0.3,0.4,0.4v-0.7
                            c0-0.1,0.1-0.2,0.3-0.3c0.1,0.1,0.2,0.2,0.3,0.3V259.1v1.3c-0.1,0.2-0.2,0.3-0.3,0.3c-0.2,0-0.3-0.1-0.3-0.3v-1.3"/>
                    </g>
                    <g id="bath-sink_00000080906105776537010720000000849630526703503772_">
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M743.8,316.9c-1.3-0.1-2.5-0.6-3.6-1.5l-0.5,3c1.3,0.5,2.6,0.8,4.1,0.8c2.7-0.1,5-1,6.8-2.9c1.9-1.8,2.9-4.1,2.9-6.8
                            c-0.1-2.8-1-5.1-2.9-6.9c-1.8-1.9-4.1-2.9-6.8-2.9c-2.8,0.1-5.1,1-6.9,2.9c-1.9,1.8-2.9,4.1-2.9,6.9c0.1,2.7,1,5,2.9,6.8
                            c0.8,0.8,1.8,1.5,2.8,2.1c-0.8-2.7-1.3-5.5-1.3-8.4l-1.9,0.3h-0.1h-0.1c-0.2,0-0.4-0.1-0.5-0.3c-0.2-0.2-0.3-0.4-0.2-0.6
                            c0-0.2,0.1-0.4,0.2-0.6c0.2-0.1,0.4-0.2,0.6-0.2c0.2,0,0.4,0.1,0.6,0.3h1.4c0-2.8,0.4-5.6,1.3-8.3l0.5,2.9c1.3-1,2.8-1.6,4.5-1.6
                            c1.7,0,3.2,0.5,4.6,1.6c1.1,0.9,1.9,2,2.4,3.1c0.5,1.2,0.6,2.4,0.4,3.8c-0.1,1.3-0.6,2.5-1.5,3.6c-0.9,1.1-2,1.9-3.1,2.4
                            C746.4,317,745.1,317.1,743.8,316.9z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M743.8,320.5c2-0.1,3.8-0.6,5.5-1.5c1.7-1,3-2.3,4-4c0.9-1.6,1.4-3.4,1.5-5.5c-0.1-2.1-0.6-4-1.5-5.6c-1-1.7-2.3-3-4-4
                            c-1.6-0.9-3.4-1.4-5.5-1.5c-2,0.1-3.9,0.6-5.6,1.5c-1.7,1-3,2.3-3.9,4c-1,1.6-1.5,3.5-1.6,5.6c0.1,2,0.6,3.8,1.6,5.5
                            c0.9,1.7,2.2,3,3.9,4C739.9,319.9,741.8,320.4,743.8,320.5z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M737.9,307.3v-1.5c-0.1-0.1-0.2-0.2-0.3-0.3c-0.2,0.1-0.3,0.2-0.3,0.3v1.4v0.6c0,0.2,0.1,0.3,0.3,0.3c0.1,0,0.2-0.1,0.3-0.3
                            V307.3c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.3,0,0.7-0.4,0.9c-0.4,0.1-0.7-0.1-0.9-0.4c-0.1-0.4,0-0.7,0.4-0.9"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M740.2,303.6v0.1c-0.3,1.7-0.6,3.5-0.6,5.2h2.9l0.2,0.3v0.5l-0.2,0.3h-2.9c0.1,1.8,0.3,3.6,0.6,5.4"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M743.8,310.4c0.5-0.1,0.8-0.3,0.8-0.8c-0.1-0.6-0.3-0.9-0.8-0.9c-0.6,0.1-0.9,0.4-0.9,0.9C742.9,310.1,743.2,310.4,743.8,310.4z"
                            />
                        
                            <line fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" x1="739.6" y1="310.1" x2="738.4" y2="310.1"/>
                        
                            <line fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" x1="738.4" y1="309" x2="739.6" y2="309"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M737.1,309l-0.8-0.2c-0.2,0.2-0.3,0.5-0.4,0.8c0.1,0.3,0.3,0.6,0.6,0.8"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M736.4,308.6c-0.1,0.1-0.1,0.1-0.2,0.1"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M737.9,312c0.3-0.3,0.5-0.6,0.3-0.9c-0.2-0.4-0.5-0.6-0.9-0.4c-0.4,0.2-0.6,0.5-0.4,0.9c0.1,0.1,0.2,0.3,0.4,0.4v-0.7
                            c0-0.1,0.1-0.2,0.3-0.3c0.1,0.1,0.2,0.2,0.3,0.3V312v1.3c-0.1,0.2-0.2,0.3-0.3,0.3c-0.2,0-0.3-0.1-0.3-0.3V312"/>
                    </g>
                </g>
                <g id="sec-van">
                    
                        <rect x="318" y="745.2" transform="matrix(6.123234e-17 -1 1 6.123234e-17 -397.9982 1116.5916)" fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" width="82.6" height="24.2"/>
                    <g id="bath-sink_00000016040034645607581070000017556500689656541087_">
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M359.4,739.9c-1.3-0.1-2.5-0.6-3.6-1.5l-0.5,3c1.3,0.5,2.6,0.8,4.1,0.8c2.7-0.1,5-1,6.8-2.9c1.9-1.8,2.9-4.1,2.9-6.8
                            c-0.1-2.8-1-5.1-2.9-6.9c-1.8-1.9-4.1-2.9-6.8-2.9c-2.8,0.1-5.1,1-6.9,2.9c-1.9,1.8-2.9,4.1-2.9,6.9c0.1,2.7,1,5,2.9,6.8
                            c0.8,0.8,1.8,1.5,2.8,2.1c-0.8-2.7-1.3-5.5-1.3-8.4l-1.9,0.3H352h-0.1c-0.2,0-0.4-0.1-0.5-0.3c-0.2-0.2-0.3-0.4-0.2-0.6
                            c0-0.2,0.1-0.4,0.2-0.6c0.2-0.1,0.4-0.2,0.6-0.2c0.2,0,0.4,0.1,0.6,0.3h1.4c0-2.8,0.4-5.6,1.3-8.3l0.5,2.9c1.3-1,2.8-1.6,4.5-1.6
                            c1.7,0,3.2,0.5,4.6,1.6c1.1,0.9,1.9,2,2.4,3.1c0.5,1.2,0.6,2.4,0.4,3.8c-0.1,1.3-0.6,2.5-1.5,3.6c-0.9,1.1-2,1.9-3.1,2.4
                            C361.9,739.9,360.7,740.1,359.4,739.9z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M359.4,743.4c2-0.1,3.8-0.6,5.5-1.5c1.7-1,3-2.3,4-4c0.9-1.6,1.4-3.4,1.5-5.5c-0.1-2.1-0.6-4-1.5-5.6c-1-1.7-2.3-3-4-4
                            c-1.6-0.9-3.4-1.4-5.5-1.5c-2,0.1-3.9,0.6-5.6,1.5c-1.7,1-3,2.3-3.9,4c-1,1.6-1.5,3.5-1.6,5.6c0.1,2,0.6,3.8,1.6,5.5
                            c0.9,1.7,2.2,3,3.9,4C355.5,742.9,357.3,743.4,359.4,743.4z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M353.5,730.2v-1.5c-0.1-0.1-0.2-0.2-0.3-0.3c-0.2,0.1-0.3,0.2-0.3,0.3v1.4v0.6c0,0.2,0.1,0.3,0.3,0.3c0.1,0,0.2-0.1,0.3-0.3
                            V730.2c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.3,0,0.7-0.4,0.9c-0.4,0.1-0.7-0.1-0.9-0.4c-0.1-0.4,0-0.7,0.4-0.9"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M355.8,726.5v0.1c-0.3,1.7-0.6,3.5-0.6,5.2h2.9l0.2,0.3v0.5l-0.2,0.3h-2.9c0.1,1.8,0.3,3.6,0.6,5.4"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M359.4,733.4c0.5-0.1,0.8-0.3,0.8-0.8c-0.1-0.6-0.3-0.9-0.8-0.9c-0.6,0.1-0.9,0.4-0.9,0.9C358.5,733,358.8,733.3,359.4,733.4z"/>
                        
                            <line fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" x1="355.2" y1="733" x2="354" y2="733"/>
                        
                            <line fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" x1="354" y1="731.9" x2="355.2" y2="731.9"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M352.6,731.9l-0.8-0.2c-0.2,0.2-0.3,0.5-0.4,0.8c0.1,0.3,0.3,0.6,0.6,0.8"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M352,731.6c-0.1,0.1-0.1,0.1-0.2,0.1"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M353.5,734.9c0.3-0.3,0.5-0.6,0.3-0.9c-0.2-0.4-0.5-0.6-0.9-0.4c-0.4,0.2-0.6,0.5-0.4,0.9c0.1,0.1,0.2,0.3,0.4,0.4v-0.7
                            c0-0.1,0.1-0.2,0.3-0.3c0.1,0.1,0.2,0.2,0.3,0.3V734.9v1.3c-0.1,0.2-0.2,0.3-0.3,0.3c-0.2,0-0.3-0.1-0.3-0.3v-1.3"/>
                    </g>
                    <g id="bath-sink_00000168829782558504285190000012995039995431884450_">
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M359.4,789.6c-1.3-0.1-2.5-0.6-3.6-1.5l-0.5,3c1.3,0.5,2.6,0.8,4.1,0.8c2.7-0.1,5-1,6.8-2.9c1.9-1.8,2.9-4.1,2.9-6.8
                            c-0.1-2.8-1-5.1-2.9-6.9c-1.8-1.9-4.1-2.9-6.8-2.9c-2.8,0.1-5.1,1-6.9,2.9c-1.9,1.8-2.9,4.1-2.9,6.9c0.1,2.7,1,5,2.9,6.8
                            c0.8,0.8,1.8,1.5,2.8,2.1c-0.8-2.7-1.3-5.5-1.3-8.4l-1.9,0.3H352h-0.1c-0.2,0-0.4-0.1-0.5-0.3c-0.2-0.2-0.3-0.4-0.2-0.6
                            c0-0.2,0.1-0.4,0.2-0.6c0.2-0.1,0.4-0.2,0.6-0.2c0.2,0,0.4,0.1,0.6,0.3h1.4c0-2.8,0.4-5.6,1.3-8.3l0.5,2.9c1.3-1,2.8-1.6,4.5-1.6
                            c1.7,0,3.2,0.5,4.6,1.6c1.1,0.9,1.9,2,2.4,3.1c0.5,1.2,0.6,2.4,0.4,3.8c-0.1,1.3-0.6,2.5-1.5,3.6c-0.9,1.1-2,1.9-3.1,2.4
                            C361.9,789.7,360.7,789.9,359.4,789.6z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M359.4,793.2c2-0.1,3.8-0.6,5.5-1.5c1.7-1,3-2.3,4-4c0.9-1.6,1.4-3.4,1.5-5.5c-0.1-2.1-0.6-4-1.5-5.6c-1-1.7-2.3-3-4-4
                            c-1.6-0.9-3.4-1.4-5.5-1.5c-2,0.1-3.9,0.6-5.6,1.5c-1.7,1-3,2.3-3.9,4c-1,1.6-1.5,3.5-1.6,5.6c0.1,2,0.6,3.8,1.6,5.5
                            c0.9,1.7,2.2,3,3.9,4C355.5,792.7,357.3,793.1,359.4,793.2z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M353.5,780v-1.5c-0.1-0.1-0.2-0.2-0.3-0.3c-0.2,0.1-0.3,0.2-0.3,0.3v1.4v0.6c0,0.2,0.1,0.3,0.3,0.3c0.1,0,0.2-0.1,0.3-0.3V780
                            c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.3,0,0.7-0.4,0.9c-0.4,0.1-0.7-0.1-0.9-0.4c-0.1-0.4,0-0.7,0.4-0.9"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M355.8,776.3v0.1c-0.3,1.7-0.6,3.5-0.6,5.2h2.9l0.2,0.3v0.5l-0.2,0.3h-2.9c0.1,1.8,0.3,3.6,0.6,5.4"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M359.4,783.1c0.5-0.1,0.8-0.3,0.8-0.8c-0.1-0.6-0.3-0.9-0.8-0.9c-0.6,0.1-0.9,0.4-0.9,0.9C358.5,782.8,358.8,783.1,359.4,783.1z"
                            />
                        
                            <line fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" x1="355.2" y1="782.8" x2="354" y2="782.8"/>
                        
                            <line fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" x1="354" y1="781.7" x2="355.2" y2="781.7"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M352.6,781.7l-0.8-0.2c-0.2,0.2-0.3,0.5-0.4,0.8c0.1,0.3,0.3,0.6,0.6,0.8"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M352,781.4c-0.1,0.1-0.1,0.1-0.2,0.1"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M353.5,784.7c0.3-0.3,0.5-0.6,0.3-0.9c-0.2-0.4-0.5-0.6-0.9-0.4c-0.4,0.2-0.6,0.5-0.4,0.9c0.1,0.1,0.2,0.3,0.4,0.4V784
                            c0-0.1,0.1-0.2,0.3-0.3c0.1,0.1,0.2,0.2,0.3,0.3V784.7v1.3c-0.1,0.2-0.2,0.3-0.3,0.3c-0.2,0-0.3-0.1-0.3-0.3v-1.3"/>
                    </g>
                </g>
                <g id="toilet">
                    <path fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" d="M753.6,399.6l0.6-1.8c0.3-1,0.7-2,1.3-2.7
                        c1.5-2,2.3-4.2,2.6-6.6c0.1-2.4-0.2-4.7-1.2-6.8c-1-2.2-2.5-4-4.5-5.5c-0.4-0.3-0.8-0.6-1.3-0.8c-1.3-0.5-2.6-0.5-3.9-0.1v0.1
                        c-2.2,1.3-3.8,2.9-5,4.9c-1.2,2-1.8,4.2-1.9,6.6c-0.1,2.4,0.5,4.7,1.7,6.9c0.3,0.4,0.6,0.8,0.8,1.3c0.6,0.8,1,1.7,1.3,2.7l0.7,1.8
                        H753.6h4.4c0.5,0,0.9,0.1,1.2,0.4c0.3,0.2,0.5,0.5,0.5,0.9v0.1l0.4,6.9c0,0.5-0.1,0.9-0.4,1.3c-0.3,0.3-0.6,0.6-1,0.7h-18.8
                        c-0.5-0.1-0.8-0.4-1-0.7c-0.3-0.3-0.4-0.8-0.4-1.3l0.4-6.9V401c0.1-0.4,0.2-0.7,0.5-0.9c0.3-0.3,0.7-0.4,1.2-0.4h4.4"/>
                    <path fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" d="M750.6,376.6c-0.8-0.3-1.7-0.3-2.7,0
                        c-2,1.1-3.4,2.6-4.4,4.4c-1.1,1.8-1.7,3.8-1.7,5.9c-0.1,2.2,0.4,4.2,1.5,6.2c0.7,1.2,1.6,2.2,2.6,3.1c0.1,0.1,0.3,0.2,0.5,0.2h5.7
                        c0.2,0,0.4-0.1,0.6-0.2c1.7-1.5,2.8-3.3,3.5-5.2c0.6-2,0.8-4.1,0.4-6.1c-0.4-2.1-1.4-4-2.8-5.8
                        C752.8,378.2,751.8,377.3,750.6,376.6z"/>
                    <line fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" x1="759.7" y1="401" x2="738.8" y2="401"/>
                </g>
                <g id="toilet_00000081642641334149809050000018026204561785595552_">
                    <path fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" d="M358.7,827.4l1.8,0.6c1,0.3,2,0.7,2.7,1.3
                        c2,1.5,4.2,2.3,6.6,2.6c2.4,0.1,4.7-0.2,6.8-1.2c2.2-1,4-2.5,5.5-4.5c0.3-0.4,0.6-0.8,0.8-1.3c0.5-1.3,0.5-2.6,0.1-3.9H383
                        c-1.3-2.2-2.9-3.8-4.9-5c-2-1.2-4.2-1.8-6.6-1.9c-2.4-0.1-4.7,0.5-6.9,1.7c-0.4,0.3-0.8,0.6-1.3,0.8c-0.8,0.6-1.7,1-2.7,1.3
                        l-1.8,0.7V827.4v4.4c0,0.5-0.1,0.9-0.4,1.2c-0.2,0.3-0.5,0.5-0.9,0.5h-0.1l-6.9,0.4c-0.5,0-0.9-0.1-1.3-0.4
                        c-0.3-0.3-0.6-0.6-0.7-1v-18.8c0.1-0.5,0.4-0.8,0.7-1c0.3-0.3,0.8-0.4,1.3-0.4l6.9,0.4h0.1c0.4,0.1,0.7,0.2,0.9,0.5
                        c0.3,0.3,0.4,0.7,0.4,1.2v4.4"/>
                    <path fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" d="M381.7,824.4c0.3-0.8,0.3-1.7,0-2.7
                        c-1.1-2-2.6-3.4-4.4-4.4c-1.8-1.1-3.8-1.7-5.9-1.7c-2.2-0.1-4.2,0.4-6.2,1.5c-1.2,0.7-2.2,1.6-3.1,2.6c-0.1,0.1-0.2,0.3-0.2,0.5
                        v5.7c0,0.2,0.1,0.4,0.2,0.6c1.5,1.7,3.3,2.8,5.2,3.5c2,0.6,4.1,0.8,6.1,0.4c2.1-0.4,4-1.4,5.8-2.8
                        C380.2,826.6,381,825.5,381.7,824.4z"/>
                    <line fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" x1="357.4" y1="833.5" x2="357.4" y2="812.6"/>
                </g>
                <g id="bathtub">
                    
                        <rect x="372.6" y="828" transform="matrix(8.221773e-14 -1 1 8.221773e-14 -471.7856 1250.2041)" fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" width="33.2" height="66"/>
                    
                        <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                        M359.7,863.2v7.8c0.1,1.3,0.6,2.3,1.5,3.1c0.8,0.9,1.9,1.4,3.1,1.5h46.1c2.5-0.5,4.7-1.5,6.6-3.1c1.8-1.6,3.1-3.6,4-5.9
                        c0.8-2.3,1-4.8,0.6-7.3c-0.6-2.9-1.9-5.4-3.9-7.3c-2-2-4.5-3.4-7.3-4h-46.1c-1.3,0.1-2.3,0.6-3.1,1.5c-0.9,0.8-1.4,1.9-1.5,3.1v8
                        l2.3-0.9v4.6L359.7,863.2l-3.5-1.4l3.5-1.4"/>
                    
                        <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                        M366.3,862.9c0.7-0.1,1.1-0.5,1.2-1.2c-0.1-0.7-0.5-1.1-1.2-1.2c-0.7,0.1-1.1,0.5-1.2,1.2C365.2,862.4,365.6,862.8,366.3,862.9z"
                        />
                </g>
                <g id="kit-island">
                    
                        <rect x="601.9" y="347.8" fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" width="46.6" height="100.3"/>
                    <g id="kitchen-sink">
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M629.4,397.2h16.2c0.7-0.1,1.1-0.5,1.1-1.1v-12.9c-0.1-0.7-0.4-1.1-1.1-1.1h-16.2c-0.7,0.1-1.1,0.4-1.1,1.1v12.9
                            C628.3,396.7,628.7,397.1,629.4,397.2z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M639.8,389.6c0-0.6-0.2-1.1-0.7-1.5c-0.4-0.4-0.9-0.6-1.5-0.7c-0.7,0-1.2,0.2-1.6,0.7c-0.4,0.4-0.6,0.9-0.6,1.5
                            c0,0.7,0.2,1.2,0.6,1.6s0.9,0.6,1.6,0.6c0.6,0,1.1-0.2,1.5-0.6C639.5,390.8,639.8,390.3,639.8,389.6z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M628.9,399c-0.3,0.2-0.5,0.5-0.6,1v12.8c0.1,0.7,0.4,1.1,1.1,1.1h16.2c0.7-0.1,1.1-0.4,1.1-1.1V400c-0.1-0.7-0.4-1.1-1.1-1.1h-13
                            l3,0.9c0.3,0.1,0.5,0.4,0.4,0.7c-0.1,0.3-0.4,0.5-0.7,0.4L628.9,399l-2.2-0.6v4.1l-2.2,0.1v-9h2.2v3.6l5.9,1.7"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M648.4,415.4v-34.6c-0.1-0.7-0.4-1.1-1.1-1.1h-22.4c-0.7,0.1-1.1,0.4-1.1,1.1v34.6c0.1,0.7,0.4,1.1,1.1,1.1h22.4
                            C648,416.4,648.4,416,648.4,415.4z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M639.8,406.4c0-0.6-0.2-1.1-0.7-1.5c-0.4-0.4-0.9-0.6-1.5-0.7c-0.7,0-1.2,0.2-1.6,0.7c-0.4,0.4-0.6,0.9-0.6,1.5
                            c0,0.6,0.2,1.2,0.6,1.6c0.4,0.4,0.9,0.6,1.6,0.6c0.6,0,1.1-0.2,1.5-0.6C639.5,407.6,639.8,407,639.8,406.4z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M626.4,395.2c-0.1-0.6-0.4-0.9-0.9-1c-0.6,0.1-0.9,0.5-0.9,1c0.1,0.5,0.4,0.8,0.9,0.9C626.1,396.1,626.4,395.7,626.4,395.2z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M626.7,397.1l-0.5-0.2c-0.3-0.1-0.5,0.1-0.6,0.4c-0.1,0.3,0,0.6,0.3,0.7l0.8,0.3"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M626.4,400.9c-0.1-0.6-0.4-0.9-0.9-1c-0.6,0.1-0.9,0.5-0.9,1c0.1,0.5,0.4,0.8,0.9,0.9C626.1,401.8,626.4,401.4,626.4,400.9z"/>
                    </g>
                    <g id="dishwasher">
                        <path opacity="0.4" fill="#425563" d="M623.8,444.1c-0.1,0-0.1,0.1-0.2,0.1c0,0.1-0.1,0.1-0.1,0.2c0,0.1,0.1,0.1,0.1,0.2
                            c0.1,0,0.1,0,0.2,0h8c0.1,0,0.1,0,0.2,0c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2c-0.1,0-0.1-0.1-0.2-0.1H623.8"/>
                        <path opacity="0.4" fill="#425563" d="M623.6,434.9c0,0.1-0.1,0.1-0.1,0.2v8c0,0.1,0.1,0.1,0.1,0.2c0.1,0,0.1,0,0.2,0
                            c0.1,0,0.1,0,0.2,0c0-0.1,0-0.1,0-0.2v-8c0-0.1,0-0.1,0-0.2c-0.1,0-0.1-0.1-0.2-0.1C623.7,434.9,623.6,434.9,623.6,434.9"/>
                        <path opacity="0.4" fill="#425563" d="M624,423.1c0-0.1,0-0.1,0-0.2c-0.1,0-0.1-0.1-0.2-0.1c-0.1,0-0.1,0.1-0.2,0.1
                            c0,0.1-0.1,0.1-0.1,0.2v8c0,0.1,0.1,0.1,0.1,0.2c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c0-0.1,0-0.1,0-0.2V423.1"/>
                        <path opacity="0.4" fill="#425563" d="M623.8,417.7c-0.1,0-0.1,0.1-0.2,0.1c0,0.1-0.1,0.1-0.1,0.2v1.1c0,0.1,0.1,0.1,0.1,0.2
                            c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c0-0.1,0-0.1,0-0.2v-0.9h6.7c0.1,0,0.1,0,0.2,0c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2
                            c-0.1,0-0.1-0.1-0.2-0.1H623.8"/>
                        <path opacity="0.4" fill="#425563" d="M649.9,438.4c0,0.1-0.1,0.1-0.1,0.2v5.4h-2c-0.1,0-0.1,0.1-0.2,0.1c0,0.1-0.1,0.1-0.1,0.2
                            c0,0.1,0.1,0.1,0.1,0.2c0.1,0,0.1,0,0.2,0h2.3c0.1,0,0.1,0,0.2,0c0-0.1,0-0.1,0-0.2v-5.7c0-0.1,0-0.1,0-0.2
                            c-0.1,0-0.1-0.1-0.2-0.1C650.1,438.4,650,438.4,649.9,438.4"/>
                        <path opacity="0.4" fill="#425563" d="M644,444.2c-0.1,0-0.1-0.1-0.2-0.1h-8c-0.1,0-0.1,0.1-0.2,0.1c0,0.1-0.1,0.1-0.1,0.2
                            c0,0.1,0.1,0.1,0.1,0.2c0.1,0,0.1,0,0.2,0h8c0.1,0,0.1,0,0.2,0c0-0.1,0-0.1,0-0.2C644.1,444.3,644.1,444.2,644,444.2"/>
                        <path opacity="0.4" fill="#425563" d="M650.1,426.3c-0.1,0-0.1,0.1-0.2,0.1c0,0.1-0.1,0.1-0.1,0.2v8c0,0.1,0.1,0.1,0.1,0.2
                            c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c0-0.1,0-0.1,0-0.2v-8c0-0.1,0-0.1,0-0.2C650.3,426.4,650.2,426.3,650.1,426.3"/>
                        <path opacity="0.4" fill="#425563" d="M646.5,417.8c0,0.1-0.1,0.1-0.1,0.2c0,0.1,0.1,0.1,0.1,0.2c0.1,0,0.1,0,0.2,0h3.1v4.4
                            c0,0.1,0.1,0.1,0.1,0.2c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c0-0.1,0-0.1,0-0.2V418c0-0.1,0-0.1,0-0.2c-0.1,0-0.1-0.1-0.2-0.1
                            h-3.4C646.6,417.7,646.6,417.7,646.5,417.8"/>
                        <path opacity="0.4" fill="#425563" d="M642.9,417.8c-0.1,0-0.1-0.1-0.2-0.1h-8c-0.1,0-0.1,0.1-0.2,0.1c0,0.1-0.1,0.1-0.1,0.2
                            c0,0.1,0.1,0.1,0.1,0.2c0.1,0,0.1,0,0.2,0h8c0.1,0,0.1,0,0.2,0c0-0.1,0-0.1,0-0.2C643,417.9,643,417.8,642.9,417.8"/>
                    </g>
                    
                        <line fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="6,2" x1="621.5" y1="348.2" x2="621.5" y2="447.5"/>
                </g>
                <g id="kit-ctr-1">
                    <polygon fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" points="725,286.3 725,470.6 698.8,470.6 
                        698.8,367.5 687.5,367.5 687.5,327.1 698.8,327.1 698.8,325.4 697.3,325.4 697.3,288.7 698.8,288.7 698.8,286.3 		"/>
                    
                        <rect x="692.7" y="288.7" fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" width="2.8" height="36.7"/>
                    <g id="stovetop">
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M723,408c-0.1-1-0.4-1.9-1.1-2.6s-1.5-1.1-2.6-1.1c-1,0.1-1.8,0.4-2.5,1.1c-0.7,0.7-1.1,1.5-1.1,2.6c0.1,1,0.4,1.8,1.1,2.5
                            c0.7,0.7,1.5,1.1,2.5,1.1c1-0.1,1.9-0.4,2.6-1.1C722.6,409.8,722.9,409,723,408z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M723,420.5c-0.1-1-0.4-1.9-1.1-2.6c-0.7-0.7-1.5-1-2.6-1c-1,0-1.8,0.3-2.5,1c-0.7,0.7-1.1,1.5-1.1,2.6c0.1,1,0.4,1.9,1.1,2.6
                            c0.7,0.7,1.5,1,2.5,1c1,0,1.9-0.3,2.6-1S722.9,421.5,723,420.5z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M723,433.1c-0.1-1-0.4-1.9-1.1-2.6s-1.5-1-2.6-1c-1,0-1.8,0.3-2.5,1c-0.7,0.7-1.1,1.5-1.1,2.6c0.1,1,0.4,1.9,1.1,2.6
                            c0.7,0.7,1.5,1,2.5,1c1,0,1.9-0.3,2.6-1C722.6,435,722.9,434.1,723,433.1z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M711.3,408c-0.1-1.3-0.5-2.4-1.3-3.2c-0.8-0.9-1.9-1.3-3.2-1.3s-2.4,0.4-3.2,1.3c-0.8,0.8-1.3,1.9-1.3,3.2
                            c0.1,1.2,0.5,2.3,1.3,3.2c0.8,0.8,1.9,1.2,3.2,1.2s2.4-0.4,3.2-1.2C710.8,410.3,711.3,409.3,711.3,408z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M703.6,415.8c-0.1-0.6-0.4-1-1.1-1.1c-0.7,0.1-1.1,0.5-1.1,1.1c0.1,0.7,0.4,1.1,1.1,1.1C703.1,416.9,703.5,416.5,703.6,415.8z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M703.6,420.5c-0.1-0.7-0.4-1.1-1.1-1.1c-0.7,0.1-1.1,0.4-1.1,1.1c0.1,0.7,0.4,1.1,1.1,1.1C703.1,421.6,703.5,421.2,703.6,420.5z"
                            />
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M706.9,418.2c-0.1-0.6-0.5-1-1.1-1.1c-0.7,0.1-1.1,0.5-1.1,1.1c0.1,0.7,0.4,1.1,1.1,1.1C706.4,419.2,706.8,418.8,706.9,418.2z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M711.3,433.1c-0.1-1.3-0.5-2.4-1.3-3.2c-0.8-0.8-1.9-1.3-3.2-1.3c-1.3,0.1-2.4,0.5-3.2,1.3c-0.8,0.8-1.3,1.9-1.3,3.2
                            c0.1,1.3,0.5,2.4,1.3,3.2s1.9,1.3,3.2,1.3c1.3-0.1,2.4-0.5,3.2-1.3S711.3,434.4,711.3,433.1z"/>
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M706.9,422.9c-0.1-0.7-0.5-1.1-1.1-1.1c-0.7,0.1-1.1,0.4-1.1,1.1c0.1,0.7,0.4,1.1,1.1,1.1C706.4,423.9,706.8,423.5,706.9,422.9z"
                            />
                        
                            <path fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" d="
                            M703.6,425.2c-0.1-0.7-0.4-1.1-1.1-1.1c-0.7,0.1-1.1,0.4-1.1,1.1c0.1,0.7,0.4,1.1,1.1,1.1C703.1,426.3,703.5,425.9,703.6,425.2z"
                            />
                    </g>
                    <line fill="none" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" x1="698.8" y1="440.4" x2="725" y2="440.4"/>
                    <line fill="none" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" x1="698.8" y1="400.9" x2="725" y2="400.9"/>
                    <g id="fridge">
                        <path opacity="0.4" fill="#425563" d="M714.8,327.5c0.1,0,0.1,0.1,0.2,0.1h8.1c0.1,0,0.1-0.1,0.2-0.1c0-0.1,0-0.1,0-0.2
                            c0-0.1,0-0.1,0-0.2c-0.1,0-0.1,0-0.2,0h-8.1c-0.1,0-0.1,0-0.2,0c0,0.1-0.1,0.1-0.1,0.2C714.8,327.3,714.8,327.4,714.8,327.5"/>
                        <path opacity="0.4" fill="#425563" d="M724.9,337.5c0,0.1,0.1,0.1,0.1,0.2c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.1-0.1,0.2-0.1
                            c0-0.1,0-0.1,0-0.2v-8.1c0-0.1,0-0.1,0-0.2c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0c0,0.1-0.1,0.1-0.1,0.2V337.5"/>
                        <path opacity="0.4" fill="#425563" d="M724.9,349.7c0,0.1,0.1,0.1,0.1,0.2c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.1-0.1,0.2-0.1
                            c0-0.1,0-0.1,0-0.2v-8.1c0-0.1,0-0.1,0-0.2c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0c0,0.1-0.1,0.1-0.1,0.2V349.7"/>
                        <path opacity="0.4" fill="#425563" d="M693,351.3c0,0,0-0.1,0-0.1v-4.3c0,0,0-0.1,0-0.1c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0
                            c0,0-0.1,0.1-0.1,0.1v4.3c0,0,0.1,0.1,0.1,0.1c0.1,0,0.1,0,0.2,0.1C692.8,351.4,692.9,351.4,693,351.3"/>
                        <path opacity="0.4" fill="#425563" d="M693.7,342.9c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.1-0.1,0.2-0.1c0-0.1,0-0.1,0-0.2v-8.1
                            c0-0.1,0-0.1,0-0.2c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0c0,0.1-0.1,0.1-0.1,0.2v8.1C693.6,342.8,693.6,342.9,693.7,342.9"/>
                        <path opacity="0.4" fill="#425563" d="M687.9,339.5c0-0.1,0-0.1,0-0.2c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0
                            c0,0.1-0.1,0.1-0.1,0.2v8.1c0,0.1,0.1,0.1,0.1,0.2c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.1-0.1,0.2-0.1c0-0.1,0-0.1,0-0.2V339.5"/>
                        <path opacity="0.4" fill="#425563" d="M702.6,327.5c0.1,0,0.1,0.1,0.2,0.1h8.1c0.1,0,0.1-0.1,0.2-0.1c0-0.1,0-0.1,0-0.2
                            c0-0.1,0-0.1,0-0.2c-0.1,0-0.1,0-0.2,0h-8.1c-0.1,0-0.1,0-0.2,0c0,0.1-0.1,0.1-0.1,0.2C702.6,327.3,702.6,327.4,702.6,327.5"/>
                        <path opacity="0.4" fill="#425563" d="M693,330.7c0-0.1,0-0.1,0-0.2c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0
                            c0,0.1-0.1,0.1-0.1,0.2v8.1c0,0.1,0.1,0.1,0.1,0.2c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.1-0.1,0.2-0.1c0-0.1,0-0.1,0-0.2V330.7"/>
                        <path opacity="0.4" fill="#425563" d="M693.9,327.1c-0.1,0-0.1,0-0.2,0c0,0.1-0.1,0.1-0.1,0.2v3.3c0,0.1,0.1,0.1,0.1,0.2
                            c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.1-0.1,0.2-0.1c0-0.1,0-0.1,0-0.2v-3h4.7c0.1,0,0.1-0.1,0.2-0.1c0-0.1,0-0.1,0-0.2
                            c0-0.1,0-0.1,0-0.2c-0.1,0-0.1,0-0.2,0H693.9"/>
                        <path opacity="0.4" fill="#425563" d="M687.5,327.1c0,0.1-0.1,0.1-0.1,0.2v8.1c0,0.1,0.1,0.1,0.1,0.2c0.1,0,0.1,0.1,0.2,0.1
                            c0.1,0,0.1-0.1,0.2-0.1c0-0.1,0-0.1,0-0.2v-7.8h4.3c0.1,0,0.1-0.1,0.2-0.1c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2
                            c-0.1,0-0.1,0-0.2,0h-4.5C687.6,327,687.5,327,687.5,327.1"/>
                        <path opacity="0.4" fill="#425563" d="M725.4,362.1c0-0.1,0-0.1,0-0.2v-8.1c0-0.1,0-0.1,0-0.2c-0.1,0-0.1,0-0.2,0
                            c-0.1,0-0.1,0-0.2,0c0,0.1-0.1,0.1-0.1,0.2v8.1c0,0.1,0.1,0.1,0.1,0.2c0.1,0,0.1,0.1,0.2,0.1
                            C725.3,362.2,725.4,362.1,725.4,362.1"/>
                        <path opacity="0.4" fill="#425563" d="M718.1,367.4c0.1,0,0.1,0.1,0.2,0.1h6.9c0.1,0,0.1-0.1,0.2-0.1c0-0.1,0-0.1,0-0.2V366
                            c0-0.1,0-0.1,0-0.2c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0c0,0.1-0.1,0.1-0.1,0.2v1h-6.6c-0.1,0-0.1,0-0.2,0
                            c0,0.1-0.1,0.1-0.1,0.2C718,367.3,718.1,367.3,718.1,367.4"/>
                        <path opacity="0.4" fill="#425563" d="M705.9,367.4c0.1,0,0.1,0.1,0.2,0.1h8.1c0.1,0,0.1-0.1,0.2-0.1c0-0.1,0-0.1,0-0.2
                            c0-0.1,0-0.1,0-0.2c-0.1,0-0.1,0-0.2,0h-8.1c-0.1,0-0.1,0-0.2,0c0,0.1-0.1,0.1-0.1,0.2C705.8,367.3,705.8,367.3,705.9,367.4"/>
                        <path opacity="0.4" fill="#425563" d="M693.9,355.3c0.1,0,0.1-0.1,0.2-0.1c0-0.1,0-0.1,0-0.2v-8.1c0-0.1,0-0.1,0-0.2
                            c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0c0,0.1-0.1,0.1-0.1,0.2v8.1c0,0.1,0.1,0.1,0.1,0.2C693.7,355.2,693.8,355.2,693.9,355.3"
                            />
                        <path opacity="0.4" fill="#425563" d="M693.7,367.4c0.1,0,0.1,0.1,0.2,0.1h8.1c0.1,0,0.1-0.1,0.2-0.1c0-0.1,0-0.1,0-0.2
                            c0-0.1,0-0.1,0-0.2c-0.1,0-0.1,0-0.2,0h-7.9V359c0-0.1,0-0.1,0-0.2c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0c0,0.1-0.1,0.1-0.1,0.2
                            v8.1C693.6,367.3,693.6,367.3,693.7,367.4"/>
                        <path opacity="0.4" fill="#425563" d="M692.8,363.6c0.1,0,0.1-0.1,0.2-0.1c0-0.1,0-0.1,0-0.2v-8.1c0-0.1,0-0.1,0-0.2
                            c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0c0,0.1-0.1,0.1-0.1,0.2v8.1c0,0.1,0.1,0.1,0.1,0.2C692.6,363.6,692.7,363.6,692.8,363.6"
                            />
                        <path opacity="0.4" fill="#425563" d="M687.5,363.7c0,0.1-0.1,0.1-0.1,0.2v3.3c0,0.1,0.1,0.1,0.1,0.2c0.1,0,0.1,0.1,0.2,0.1h4.9
                            c0.1,0,0.1-0.1,0.2-0.1c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2c-0.1,0-0.1,0-0.2,0h-4.7v-3.1c0-0.1,0-0.1,0-0.2c-0.1,0-0.1,0-0.2,0
                            C687.6,363.7,687.5,363.7,687.5,363.7"/>
                        <path opacity="0.4" fill="#425563" d="M687.9,360.1c0-0.1,0-0.1,0-0.2v-8.1c0-0.1,0-0.1,0-0.2c-0.1,0-0.1,0-0.2,0
                            c-0.1,0-0.1,0-0.2,0c0,0.1-0.1,0.1-0.1,0.2v8.1c0,0.1,0.1,0.1,0.1,0.2c0.1,0,0.1,0.1,0.2,0.1
                            C687.7,360.1,687.8,360.1,687.9,360.1"/>
                    </g>
                    <g id="double_oven">
                        
                            <rect x="693" y="288.7" fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" width="2.5" height="36.7"/>
                        
                            <polyline fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" points="
                            697.3,325.4 724.9,325.4 724.9,288.7 697.3,288.7 			"/>
                        
                            <line fill="none" stroke="#000000" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.6428" x1="697.3" y1="288.7" x2="697.3" y2="325.4"/>
                    </g>
                </g>
                <g id="shelving">
                    <polygon fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" points="868.5,384.2 868.5,531 729.7,531 
                        729.7,414.6 743.3,414.6 743.3,517.4 854.8,517.4 854.8,384.2 		"/>
                    
                        <rect x="606.3" y="589.6" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 1228.6782 3.162)" fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" width="12.9" height="52.6"/>
                    
                        <rect x="389.2" y="839.2" transform="matrix(6.800688e-14 -1 1 6.800688e-14 -493.3501 1285.156)" fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" width="13.4" height="100.2"/>
                    
                        <rect x="585.6" y="504.8" fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" width="79.1" height="26.3"/>
                    <polygon fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" points="725.1,475.6 725.1,515.5 
                        725.1,531.1 669.3,531.1 669.3,513.5 707.1,513.5 707.1,475.6 		"/>
                </g>
                <g id="furniture">
                    <g id="Primary_Bed" filter="url(#ds-soft)">
                        <g>
                            <g>
                                
                                    <line fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round" x1="798.6" y1="179.5" x2="798.6" y2="179.5"/>
                                
                                    <line fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round" x1="782.5" y1="179.5" x2="782.5" y2="179.5"/>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M858.4,188.7V83.9c0-2.2,1.8-4,4-4h1.4
                                        c2.2,0,4,1.8,4,4v104.8c0,2.2-1.8,4-4,4h-1.4C860.2,192.6,858.4,190.8,858.4,188.7z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M858.1,188.7V83.9
                                        c0-2.3,1.9-4.2,4.2-4.2h1.4c2.3,0,4.2,1.9,4.2,4.2v104.8c0,2.3-1.9,4.2-4.2,4.2h-1.4C860,192.9,858.1,191,858.1,188.7z
                                        M867.4,83.9c0-2-1.7-3.7-3.7-3.7h-1.4c-2,0-3.7,1.7-3.7,3.7v104.8c0,2,1.7,3.7,3.7,3.7h1.4c2,0,3.7-1.7,3.7-3.7V83.9z"/>
                                </g>
                                <g>
                                    
                                        <rect x="764.4" y="86.1" fill="#FFFFFF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="93.8" height="100.7"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M764.1,187.1V85.8h94.3v101.2H764.1z
                                        M764.6,86.3v100.2h93.3V86.3H764.6z"/>
                                </g>
                                <g>
                                    <path fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M833.8,130.3c-0.2-0.3-0.2-2.2-0.4-5.8
                                        c-0.2-3.3-0.7-8-0.6-12.3c0.1-6.1,0.6-10.8,0.9-14.5c0.1-2.2-0.2-4.7,0.2-5c0.3-0.2,2.4,0.1,4.6,0c5.5-0.3,14.2-0.8,15.3,0
                                        c0.5,0.4,0.2,2.9,0.4,5.3c0.3,4,0.7,9,0.8,12.5c0.1,3.4-0.5,9.5-0.8,14.2c-0.2,2.5,0,5.4-0.3,5.6c-0.2,0.2-2-0.1-4,0.1
                                        c-1.4,0.1-4.1,0.6-5.8,0.6C838.4,130.9,834.8,131.5,833.8,130.3z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M832.5,112.9c0-0.2,0-0.4,0-0.7
                                        c0.1-4.4,0.4-8.1,0.6-11.2c0.1-1.2,0.2-2.3,0.3-3.4c0.1-0.9,0-1.9,0-2.7c0-1.5,0-2.2,0.3-2.5c0.2-0.2,0.6-0.1,1.7-0.1
                                        c0.9,0,1.9,0.1,3.1,0l0.1,0c7.5-0.4,14.3-0.7,15.3,0c0.4,0.3,0.4,1.2,0.4,2.9c0,0.8,0,1.7,0.1,2.6c0.3,3.7,0.7,8.9,0.8,12.5
                                        c0.1,2.8-0.3,7.5-0.6,11.5c-0.1,0.9-0.2,1.8-0.2,2.7c-0.1,1-0.1,2.1-0.1,3.1c0,1.9,0,2.6-0.4,2.8c-0.2,0.1-0.5,0.1-1.3,0.1
                                        c-0.7,0-1.8-0.1-2.8,0c-0.5,0-1.1,0.1-1.8,0.2c-1.4,0.2-2.9,0.4-4.1,0.4c-1.6,0-3,0-4.2,0c-3.3,0.1-5.3,0.1-6.1-0.8l0,0
                                        c-0.2-0.2-0.2-0.9-0.3-2.8c0-0.8-0.1-1.9-0.2-3.1c-0.1-0.8-0.1-1.7-0.2-2.7C832.8,119.1,832.5,115.9,832.5,112.9z M833.9,96.4
                                        c0,0.4,0,0.9,0,1.4c-0.1,1-0.2,2.2-0.3,3.4c-0.2,3-0.6,6.8-0.6,11.1c0,3.2,0.2,6.6,0.4,9.6c0.1,1,0.1,1.9,0.2,2.7
                                        c0.1,1.2,0.1,2.3,0.2,3.1c0.1,1.2,0.1,2.3,0.2,2.5c0.6,0.7,2.7,0.7,5.7,0.6c1.2,0,2.7-0.1,4.2,0c1.1,0,2.7-0.2,4-0.4
                                        c0.7-0.1,1.3-0.2,1.8-0.2c1.1-0.1,2.1-0.1,2.9,0c0.4,0,0.9,0,1,0c0.1-0.2,0.1-1.3,0.1-2.3c0-1,0-2.1,0.1-3.1
                                        c0.1-0.9,0.1-1.7,0.2-2.7c0.3-4.1,0.7-8.7,0.6-11.5c-0.1-3.6-0.5-8.7-0.8-12.4c-0.1-0.9-0.1-1.8-0.1-2.7c0-1.1,0-2.3-0.2-2.5
                                        c-1-0.7-10.1-0.2-15,0.1l-0.1,0c-1.1,0.1-2.3,0-3.1,0c-0.6,0-1.3-0.1-1.4,0c-0.1,0.2-0.1,1.2-0.1,2.1
                                        C833.9,95.4,833.9,95.9,833.9,96.4z"/>
                                </g>
                                <g>
                                    <path fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M833.8,176.3c-0.2-0.3-0.2-2.2-0.4-5.8
                                        c-0.2-3.3-0.7-8-0.6-12.3c0.1-6.1,0.6-10.8,0.9-14.5c0.1-2.2-0.2-4.7,0.2-5c0.3-0.2,2.4,0.1,4.6,0c5.5-0.3,14.2-0.8,15.3,0
                                        c0.5,0.4,0.2,2.9,0.4,5.3c0.3,4,0.7,9,0.8,12.5c0.1,3.4-0.5,9.5-0.8,14.2c-0.2,2.5,0,5.4-0.3,5.6c-0.2,0.2-2-0.1-4,0.1
                                        c-1.4,0.1-4.1,0.6-5.8,0.6C838.4,176.9,834.8,177.5,833.8,176.3z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M832.5,158.9c0-0.2,0-0.4,0-0.7
                                        c0.1-4.4,0.4-8.1,0.6-11.2c0.1-1.2,0.2-2.3,0.3-3.4c0.1-0.9,0-1.9,0-2.7c0-1.5,0-2.2,0.3-2.5c0.2-0.2,0.6-0.1,1.7-0.1
                                        c0.9,0,1.9,0.1,3.1,0l0.1,0c7.5-0.4,14.3-0.7,15.3,0c0.4,0.3,0.4,1.2,0.4,2.9c0,0.8,0,1.7,0.1,2.6c0.3,3.7,0.7,8.9,0.8,12.5
                                        c0.1,2.8-0.3,7.5-0.6,11.5c-0.1,0.9-0.2,1.8-0.2,2.7c-0.1,1-0.1,2.1-0.1,3.1c0,1.9,0,2.6-0.4,2.8c-0.2,0.1-0.5,0.1-1.3,0.1
                                        c-0.7,0-1.8-0.1-2.8,0c-0.5,0-1.1,0.1-1.8,0.2c-1.4,0.2-2.9,0.4-4.1,0.4c-1.6,0-3,0-4.2,0c-3.3,0.1-5.3,0.1-6.1-0.8l0,0
                                        c-0.2-0.2-0.2-0.9-0.3-2.8c0-0.8-0.1-1.9-0.2-3.1c-0.1-0.8-0.1-1.7-0.2-2.7C832.8,165,832.5,161.9,832.5,158.9z M833.9,142.3
                                        c0,0.4,0,0.9,0,1.4c-0.1,1-0.2,2.2-0.3,3.4c-0.2,3-0.6,6.8-0.6,11.1c0,3.2,0.2,6.6,0.4,9.6c0.1,1,0.1,1.9,0.2,2.7
                                        c0.1,1.2,0.1,2.3,0.2,3.1c0.1,1.2,0.1,2.3,0.2,2.5c0.6,0.7,2.7,0.7,5.7,0.6c1.2,0,2.7-0.1,4.2,0c1.1,0,2.7-0.2,4-0.4
                                        c0.7-0.1,1.3-0.2,1.8-0.2c1.1-0.1,2.1-0.1,2.9,0c0.4,0,0.9,0,1,0c0.1-0.2,0.1-1.3,0.1-2.3c0-1,0-2.1,0.1-3.1
                                        c0.1-0.9,0.1-1.7,0.2-2.7c0.3-4.1,0.7-8.7,0.6-11.5c-0.1-3.6-0.5-8.7-0.8-12.4c-0.1-0.9-0.1-1.8-0.1-2.7c0-1.1,0-2.3-0.2-2.5
                                        c-1-0.7-10.1-0.2-15,0.1l-0.1,0c-1.1,0.1-2.3,0-3.1,0c-0.6,0-1.3-0.1-1.4,0c-0.1,0.2-0.1,1.2-0.1,2.1
                                        C833.9,141.4,833.9,141.9,833.9,142.3z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M804.6,84.7c-2.8,0.2-40.1-0.9-41.8,0.9
                                        c-1.7,1.9-2.1,101.8,0.5,102.3c2.6,0.5,47.2,0.9,48.7-0.7c0.8-0.9,3.4-31.4,1.2-58.8C811.3,105.4,804.6,84.7,804.6,84.7z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M761.2,137.1c0-0.8,0-1.6,0-2.4
                                        c0-19.2,0.4-48.2,1.4-49.3c1.2-1.3,16.4-1.3,33.4-1.1c4.4,0.1,7.9,0.1,8.6,0l0.2,0l0.1,0.2c0.1,0.2,6.7,21,8.5,43.7
                                        c2.2,27-0.3,57.9-1.2,59c-0.7,0.8-8.8,1.2-24.1,1.2c-11.1,0-23.4-0.2-24.8-0.4c-0.2,0-0.4-0.3-0.4-0.5
                                        C761.6,184.2,761.2,158.8,761.2,137.1z M804.4,84.9c-1.1,0-4.2,0-8.5,0c-10.3-0.1-31.8-0.4-33,0.9c-0.7,1.1-1.3,24-1.3,51
                                        c0,29.5,0.7,49.9,1.7,50.9c2.6,0.5,46.9,0.8,48.4-0.6c0.7-1.2,3.3-31.8,1.1-58.6C811.1,106.8,805.1,87,804.4,84.9z"/>
                                </g>
                                <g>
                                    <path fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M837.4,114.3c0.4-0.6,1.2-1,1.8-0.5
                                        c0.5,0.5,0.4,1.3,0.7,1.7c4.7,7.2,5.5,11.7,5.5,13.4c0,1.6,0.5,2.6,0.7,3.2c0.4,1-0.6,1.1-1.8,0.8c-1.2-0.2-2.9,1-4.8,2.4
                                        c-1.9,1.4-5.1,1.1-6.2,2.1c-1.2,1-1.5,1.4-2.1,1.2c-0.6-0.3-0.7-0.8-0.8-1.8c-0.1-1-4.5-7.7-4.5-10.6c0-3-0.5-4.7-1.3-5.7
                                        c-0.8-1-0.1-1.9,0.9-1.5c1,0.4,2.8-1.5,4.7-2.3C831.2,116.3,836.6,115.6,837.4,114.3z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M824,119.7c0-0.2,0.1-0.4,0.2-0.6
                                        c0.3-0.4,0.8-0.5,1.4-0.3c0.5,0.2,1.4-0.4,2.4-1.1c0.7-0.4,1.4-0.9,2.1-1.2c0.4-0.2,1.1-0.3,2.1-0.5c1.8-0.4,4.5-1,5-1.8l0,0
                                        c0.3-0.4,0.7-0.8,1.2-0.8c0.4-0.1,0.7,0,1,0.3c0.4,0.3,0.5,0.8,0.6,1.2c0.1,0.2,0.1,0.5,0.2,0.6c5.1,7.7,5.5,12.3,5.5,13.5
                                        c0,1.3,0.4,2.2,0.6,2.8c0.1,0.1,0.1,0.2,0.1,0.4c0.1,0.4,0.1,0.7-0.1,1c-0.3,0.4-1,0.4-2,0.2c-1-0.2-2.6,0.9-4.3,2.1l-0.3,0.2
                                        c-1.1,0.8-2.5,1-3.7,1.3c-1,0.2-2,0.4-2.5,0.8c-0.2,0.2-0.4,0.3-0.6,0.5c-0.7,0.7-1.1,1-1.8,0.7c-0.7-0.3-0.8-1-0.9-2
                                        c0-0.3-0.6-1.4-1.2-2.5c-1.4-2.6-3.3-6.2-3.3-8.2c0-2.6-0.4-4.5-1.2-5.5C824.1,120.3,824,120,824,119.7z M837.6,114.5
                                        c-0.6,1-3.2,1.6-5.3,2c-0.9,0.2-1.6,0.4-2,0.5c-0.7,0.3-1.4,0.7-2,1.2c-1.1,0.7-2.1,1.4-2.8,1.1c-0.4-0.1-0.7-0.1-0.8,0.1
                                        c-0.2,0.2-0.1,0.6,0.2,1c0.9,1.2,1.3,3.1,1.3,5.8c0,1.9,1.9,5.5,3.2,7.9c0.8,1.5,1.2,2.3,1.3,2.7c0.1,1,0.2,1.4,0.6,1.6
                                        c0.3,0.1,0.5,0,1.2-0.6c0.2-0.1,0.3-0.3,0.6-0.5c0.6-0.5,1.6-0.7,2.7-0.9c1.2-0.2,2.5-0.5,3.5-1.2l0.3-0.2
                                        c1.9-1.3,3.5-2.4,4.7-2.2c1.2,0.2,1.5,0,1.5,0c0.1-0.1,0.1-0.3,0-0.5c0-0.1-0.1-0.2-0.1-0.3c-0.3-0.6-0.6-1.6-0.6-3
                                        c0-1.2-0.4-5.6-5.4-13.2c-0.1-0.2-0.2-0.5-0.3-0.8c-0.1-0.3-0.2-0.7-0.4-0.9c-0.2-0.1-0.4-0.2-0.6-0.2
                                        C838.1,113.9,837.8,114.2,837.6,114.5L837.6,114.5z"/>
                                </g>
                                <g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M809.7,189.1c-0.1,0-0.3-0.1-0.4-0.1
                                        c-0.5-0.2-0.8-0.3-1-0.6c-0.5-0.7-0.2-4.4,0.5-10.1c0-0.1,0-0.3,0-0.4c0.3-2.9,0.7-6.3,1-10.1c0-0.1,0-0.3,0-0.4
                                        c0.3-2.8,0.5-5.9,0.7-9.1c0-0.1,0-0.3,0-0.4c0.2-2.9,0.3-6,0.4-9.1c0-0.1,0-0.3,0-0.4c0-2.8,0-5.7,0-8.6c0-0.1,0-0.3,0-0.4
                                        c-0.1-2.2-0.2-4.5-0.3-6.8c-0.1-0.9-0.1-1.8-0.2-2.7c0-0.1,0-0.3,0-0.4c-0.2-3-0.5-5.9-0.9-8.7c0-0.1,0-0.3,0-0.4
                                        c-0.4-3.3-0.8-6.4-1.3-9.4c0-0.1,0-0.3-0.1-0.4c-0.5-3.5-1.1-6.8-1.6-9.7c0-0.1,0-0.3-0.1-0.4c-0.6-3.3-1.1-6.2-1.4-8.6
                                        c0-0.1,0-0.3-0.1-0.4c-0.7-4.9-0.8-7.8,0.4-7.9c0.6-0.1,1.6-0.1,2.9-0.2c0.1,0,0.3,0,0.4,0c5.4-0.3,14.5-0.4,16-0.1
                                        c0.8,0.2,1.5,2.7,2.1,6.9c0,0.1,0,0.3,0.1,0.4c0.3,2.3,0.6,5.1,0.9,8.3c0,0.1,0,0.3,0,0.4c0.2,2.8,0.5,6,0.7,9.3
                                        c0,0.1,0,0.3,0,0.4c0.2,2.7,0.3,5.6,0.4,8.5c0,0.1,0,0.3,0,0.4c0.2,3.3,0.3,6.7,0.4,10.1c0,0.1,0,0.3,0,0.4
                                        c0.1,3.3,0.2,6.6,0.3,9.9c0,0.1,0,0.3,0,0.4c0.1,2.8,0.1,5.6,0.1,8.4v0.4c0,3.4,0.1,6.8,0,10v0.4c0,3.8,0,7.4-0.1,10.8
                                        c0,0.1,0,0.3,0,0.4c-0.1,3.6-0.2,6.9-0.4,9.7c0,0.1,0,0.3,0,0.4c-0.3,5.6-0.8,9.1-1.5,9.3c-1.9,0.6-6.2,1-10.3,1.1
                                        c-0.1,0-0.3,0-0.4,0C814.1,189.7,811.3,189.5,809.7,189.1z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M804.2,86.2c0-1.2,0.2-1.9,0.5-2.3
                                        c0.2-0.2,0.4-0.4,0.7-0.4c0.6-0.1,1.5-0.1,2.9-0.2c0.1,0,0.3,0,0.4,0c5.2-0.3,14.5-0.5,16.1-0.1c0.6,0.1,1.4,1,2.3,7.1l0,0.2
                                        c0,0.1,0,0.1,0,0.2c0.3,2.2,0.6,5,0.9,8.3c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2c0.2,2.7,0.5,5.7,0.7,9.3l0,0.4
                                        c0.2,2.7,0.3,5.5,0.4,8.5c0,0.1,0,0.3,0,0.4c0.2,3.2,0.3,6.6,0.4,10.1c0,0.1,0,0.1,0,0.2l0,0.2c0.1,3.9,0.2,7,0.3,9.9l0,0.2
                                        c0,0.1,0,0.1,0,0.2c0.1,2.8,0.1,5.6,0.1,8.4v0.4c0,3.4,0.1,6.8,0,10v0.4c0,3.8,0,7.5-0.1,10.8c0,0,0,0,0,0c0,0.1,0,0.1,0,0.2
                                        l0,0.2c-0.1,3.6-0.2,6.9-0.4,9.7l0,0.4c-0.6,9.1-1.4,9.4-1.7,9.5c-1.9,0.6-6.1,1-10.4,1.2l-0.2,0c-0.1,0-0.2,0-0.2,0
                                        c-3.3,0.1-5.9-0.1-7.4-0.5l-0.2,0c-0.1,0-0.2,0-0.3-0.1c-0.6-0.2-0.9-0.4-1.1-0.6c-0.6-0.7-0.3-3.7,0.4-10.2l0-0.1
                                        c0-0.1,0-0.2,0-0.3l0.1-0.6c0.3-2.8,0.6-6,1-9.6l0-0.4c0.3-3,0.5-6.1,0.7-9.1l0-0.4c0.2-3.2,0.3-6.2,0.4-9.1c0,0,0,0,0,0
                                        c0-0.1,0-0.1,0-0.2l0-0.2c0.1-3.1,0-5.9,0-8.6c0-0.1,0-0.3,0-0.4c-0.1-2.3-0.2-4.5-0.3-6.8c0-0.6-0.1-1.2-0.1-1.8l-0.1-1.2
                                        c-0.2-3-0.5-5.9-0.9-8.7c0-0.2,0-0.3,0-0.4c-0.3-2.9-0.7-5.9-1.3-9.4c0-0.1,0-0.1,0-0.2l0-0.2c-0.5-3.6-1.1-6.9-1.6-9.7
                                        l-0.5-2.7c-0.4-2.4-0.8-4.5-1-6.3c0-0.2-0.1-0.3-0.1-0.4C804.4,89.2,804.2,87.4,804.2,86.2z M829.6,155.9c0-2.8,0-5.6-0.1-8.4
                                        v-0.4c0-2.7-0.1-5.5-0.1-8.4c0-0.1,0-0.1,0-0.2l0-0.2c-0.1-2.9-0.1-6.1-0.3-9.9l0-0.4c-0.1-3.5-0.2-6.9-0.4-10.1
                                        c0-0.1,0-0.3,0-0.4c-0.1-3-0.3-5.8-0.4-8.5l0-0.4c-0.2-3.6-0.4-6.6-0.7-9.3c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2
                                        c-0.3-3.2-0.6-6-0.9-8.3c0-0.1,0-0.1,0-0.2l0-0.2c-0.9-5.8-1.6-6.6-1.9-6.6c-1.5-0.3-10.7-0.1-16,0.1c-0.1,0-0.3,0-0.4,0
                                        c-1.4,0.1-2.3,0.1-2.9,0.2c-0.2,0-0.3,0.1-0.4,0.2c-0.7,0.9-0.3,4.2,0.2,7.4c0,0.1,0,0.3,0.1,0.4c0.3,1.9,0.6,3.9,1,6.3
                                        l0.5,2.7c0.5,2.8,1,6.1,1.6,9.7c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2c0.5,3.5,0.9,6.5,1.3,9.4c0,0.1,0,0.3,0,0.4
                                        c0.3,2.8,0.6,5.7,0.9,8.7l0.1,1.2c0,0.6,0.1,1.2,0.1,1.8c0.2,2.3,0.3,4.5,0.3,6.8c0,0.1,0,0.3,0,0.4c0.1,2.7,0.1,5.5,0,8.6v0
                                        c0,0.1,0,0.1,0,0.2l0,0.2c-0.1,2.9-0.2,5.9-0.4,9.1l0,0.4c-0.2,3-0.4,6.1-0.7,9.1l0,0.4c-0.3,3.6-0.7,6.8-1,9.6l-0.1,0.6
                                        c0,0.1,0,0.2,0,0.3l0,0.1c-0.5,4.5-1,9.2-0.5,9.9c0.1,0.2,0.4,0.3,0.9,0.5c0.1,0,0.1,0,0.2,0.1l0.2,0c1.5,0.4,4.1,0.5,7.3,0.5
                                        l0.2,0c0.1,0,0.2,0,0.2,0c4.1-0.1,8.4-0.6,10.2-1.1c0.1,0,0.8-0.7,1.3-9l0-0.4c0.2-2.8,0.3-6.1,0.4-9.7l0-0.4
                                        c0.1-3.3,0.1-6.9,0.1-10.8v-0.4C829.6,157,829.6,156.5,829.6,155.9z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M805.1,92c0-0.1,0-0.3-0.1-0.4
                                        c0.9-0.2,1.9-0.4,2.8-0.6c0.1,0,0.3-0.1,0.4-0.1h0c3.2-0.6,6.4-1.1,9.6-1.3c0.1,0,0.3,0,0.4,0c2.9-0.1,5.7,0,8.5,0.5
                                        c0,0.1,0,0.3,0.1,0.4c-2.8-0.5-5.7-0.7-8.5-0.5c-0.1,0-0.3,0-0.4,0c-3.3,0.2-6.5,0.7-9.7,1.3c-0.1,0-0.3,0-0.4,0.1
                                        C806.9,91.6,806,91.8,805.1,92z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M806.6,101c0-0.1,0-0.3-0.1-0.4
                                        c0.9,0,1.7-0.1,2.6-0.2c0.1,0,0.3,0,0.4,0c3.3-0.2,6.7-0.5,10-0.7c0.1,0,0.3,0,0.4,0c2.6-0.2,5.2-0.5,7.9-0.7
                                        c0,0.1,0,0.3,0,0.4c-2.6,0.3-5.2,0.5-7.8,0.7c-0.1,0-0.3,0-0.4,0c-3.3,0.3-6.6,0.5-10,0.7c-0.1,0-0.3,0-0.4,0
                                        C808.3,100.9,807.5,100.9,806.6,101z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M808.2,111.1c0-0.1,0-0.3-0.1-0.4
                                        c1.1,0,2.3-0.1,3.4-0.2l0.4,0c2.8-0.2,5.6-0.4,8.5-0.8c0.1,0,0.3,0,0.4,0c2.6-0.3,5.1-0.7,7.7-1.1c0,0.1,0,0.3,0,0.4
                                        c-2.5,0.4-5.1,0.8-7.7,1.1c-0.1,0-0.3,0-0.4,0c-2.8,0.3-5.6,0.6-8.4,0.8c-0.1,0-0.3,0-0.4,0C810.5,111,809.4,111,808.2,111.1z
                                        "/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M809.5,120.9c0-0.1,0-0.3,0-0.4
                                        c1.3-0.1,2.6-0.2,3.9-0.3c0.1,0,0.2,0,0.4,0c2.4-0.2,4.7-0.5,7-0.9c0.1,0,0.3,0,0.4-0.1c2.6-0.4,5.2-1,7.8-1.6
                                        c0,0.1,0,0.3,0,0.4c-2.6,0.6-5.2,1.2-7.8,1.7c-0.1,0-0.3,0-0.4,0.1c-2.3,0.4-4.6,0.7-7,0.9c-0.1,0-0.2,0-0.4,0
                                        C812.1,120.7,810.8,120.8,809.5,120.9z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M812.7,130c-0.8,0-1.5,0-2.3,0
                                        c0-0.1,0-0.3,0-0.4c0.9,0,1.8,0,2.8,0c0.4,0,0.8,0,1.2,0c0.1,0,0.3,0,0.4,0c1.3,0,2.7-0.1,4-0.2c0.7,0,1.4-0.1,2.1-0.2
                                        c0.1,0,0.3,0,0.4,0c2.7-0.3,5.4-0.7,8.1-1.2c0,0.1,0,0.3,0,0.4c-2.7,0.5-5.4,0.9-8.1,1.2c-0.1,0-0.3,0-0.4,0
                                        c-0.7,0.1-1.5,0.1-2.2,0.2c-1.3,0.1-2.6,0.1-3.9,0.2c-0.1,0-0.3,0-0.4,0C813.8,130,813.3,130,812.7,130z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M810.9,139.9c0-0.1,0-0.3,0-0.4
                                        c1.2,0,2.4-0.1,3.6-0.1c0.1,0,0.3,0,0.4,0c1.9-0.1,3.9-0.2,5.8-0.3c0.1,0,0.3,0,0.4,0c2.8-0.2,5.7-0.4,8.5-0.6
                                        c0,0.1,0,0.3,0,0.4c-2.8,0.2-5.7,0.5-8.5,0.6c-0.1,0-0.3,0-0.4,0c-1.9,0.1-3.9,0.2-5.8,0.3c-0.1,0-0.3,0-0.4,0
                                        C813.3,139.8,812.1,139.8,810.9,139.9z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M811,148.8c0-0.1,0-0.3,0-0.4
                                        c0.3,0,0.7,0,1-0.1c0.8,0,1.5-0.1,2.3-0.2v0c0.1,0,0.3,0,0.4,0c1.2-0.1,2.5-0.2,3.7-0.3c0.8,0,1.5-0.1,2.3-0.2
                                        c0.1,0,0.3,0,0.4,0c2.9-0.2,5.8-0.4,8.8-0.6v0.4c-2.9,0.2-5.8,0.4-8.8,0.6c-0.1,0-0.3,0-0.4,0c-0.7,0.1-1.5,0.1-2.3,0.2
                                        c-1.3,0.1-2.5,0.2-3.8,0.3c-0.1,0-0.3,0-0.4,0c-0.8,0-1.5,0.1-2.3,0.2C811.6,148.8,811.3,148.8,811,148.8z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M821.1,158.6c-0.1,0-0.3,0-0.4,0
                                        c-0.5,0-1.1,0-1.6,0c-1.8,0-3.5-0.1-5.3-0.1c-0.1,0-0.3,0-0.4,0c-0.9,0-1.9-0.1-2.8-0.1c0-0.1,0-0.3,0-0.4
                                        c0.9,0,1.9,0.1,2.8,0.1c0.1,0,0.3,0,0.4,0c1.7,0,3.4,0.1,5,0.1c0.6,0,1.2,0,1.8,0h0.4c2.9,0.1,5.9,0,8.8-0.7v0.4
                                        C827,158.6,824,158.7,821.1,158.6z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M821.2,169.1c-0.1,0-0.3,0-0.4,0
                                        c-2.7-0.1-5.4-0.4-8.1-0.8c-0.1,0-0.3,0-0.4-0.1c-0.8-0.1-1.6-0.2-2.4-0.4c0-0.1,0-0.3,0-0.4c0.8,0.1,1.6,0.3,2.4,0.4
                                        c0.1,0,0.3,0,0.4,0.1c2.7,0.4,5.4,0.6,8.1,0.8c0.1,0,0.3,0,0.4,0c2.8,0.1,5.7,0.2,8.5,0.1c0,0.1,0,0.3,0,0.4
                                        C826.9,169.2,824,169.2,821.2,169.1z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M824.9,179.3c-1.5,0-2.9,0-4.4,0
                                        c-0.1,0-0.3,0-0.4,0c-1.9,0-3.7-0.1-5.6-0.2c-1.1-0.1-2.2-0.1-3.3-0.2c-0.1,0-0.3,0-0.4,0c-0.7-0.1-1.4-0.2-2-0.3
                                        c0-0.1,0-0.3,0-0.4c0.7,0.1,1.4,0.2,2,0.3c0.1,0,0.3,0,0.4,0c0.1,0,0.2,0,0.3,0c2.1,0.2,4.2,0.3,6.3,0.4
                                        c0.8,0,1.5,0.1,2.3,0.1c0.1,0,0.3,0,0.4,0c2.9,0.1,5.9,0.1,8.8,0c0,0.1,0,0.3,0,0.4C827.8,179.2,826.4,179.3,824.9,179.3z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M817.1,189.6c1.5-3.3,2.4-6.8,3-10.4
                                        c0-0.1,0-0.3,0.1-0.4c0.4-2.5,0.5-5,0.6-7.6c0-0.7,0-1.5,0-2.2c0-0.1,0-0.3,0-0.4c0-3.3,0-6.7-0.1-10c0-0.1,0-0.3,0-0.4
                                        c0-2.6-0.1-5.2-0.1-7.9c0-0.7,0-1.5,0-2.2c0-0.1,0-0.3,0-0.4c0-2.8,0.1-5.6,0.1-8.4c0-0.1,0-0.3,0-0.4c0-3.1,0.1-6.2,0.1-9.3
                                        c0-0.1,0-0.3,0-0.4c0-0.4,0-0.8,0-1.2c0-2.8,0-5.6-0.1-8.4c0-0.1,0-0.3,0-0.4c-0.1-3-0.2-6-0.3-9.1c0-0.1,0-0.3,0-0.4
                                        c-0.1-1.3-0.2-2.7-0.3-4c-0.2-1.9-0.3-3.8-0.6-5.7c0-0.1,0-0.3-0.1-0.4c-0.4-3.2-0.9-6.4-1.5-9.6c0-0.1,0-0.3-0.1-0.4
                                        c-0.4-2-0.9-4-1.4-6.1c-0.1-0.3,0.3-0.4,0.4-0.1c0.2,0.9,0.5,1.8,0.7,2.7c0.3,1.1,0.5,2.3,0.8,3.4c0,0.1,0.1,0.3,0.1,0.4
                                        c0.6,3.2,1.1,6.3,1.5,9.6c0,0.1,0,0.3,0,0.4c0.3,2.8,0.6,5.5,0.8,8.3c0,0.5,0.1,0.9,0.1,1.4c0,0.1,0,0.3,0,0.4
                                        c0.2,3,0.3,6,0.3,9c0,0.1,0,0.3,0,0.4c0.1,3.2,0.1,6.4,0,9.6c0,0.1,0,0.3,0,0.4c0,0.4,0,0.9,0,1.3c0,2.7-0.1,5.4-0.1,8.1
                                        c0,0.1,0,0.3,0,0.4c0,2.8-0.1,5.6-0.1,8.4c0,0.1,0,0.3,0,0.4c0,1.8,0,3.6,0,5.3c0,1.6,0,3.2,0.1,4.7c0,0.1,0,0.3,0,0.4
                                        c0.1,3.3,0.1,6.7,0.1,10c0,0.1,0,0.3,0,0.4c0,1.7-0.1,3.4-0.2,5.1c-0.1,1.5-0.3,3.1-0.5,4.6c0,0.1,0,0.3-0.1,0.4
                                        c-0.5,3.6-1.4,7.1-2.9,10.4C817.4,189.6,817.2,189.6,817.1,189.6z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M809.7,189.1c-0.1,0-0.3-0.1-0.4-0.1
                                        c0.3-1.9,0.5-3.7,0.8-5.6c0.2-1.6,0.5-3.2,0.7-4.8c0-0.1,0-0.3,0.1-0.4c0.3-2,0.6-4,0.8-6c0.2-1.4,0.4-2.7,0.5-4.1
                                        c0-0.1,0-0.3,0-0.4c0.4-3.1,0.8-6.2,1.1-9.4c0-0.1,0-0.3,0-0.4c0.3-2.8,0.5-5.7,0.7-8.5c0-0.3,0-0.6,0.1-0.9
                                        c0-0.1,0-0.3,0-0.4v0c0.2-2.8,0.3-5.7,0.3-8.5c0-0.1,0-0.3,0-0.4c0-3.1,0-6.2-0.2-9.3c0-0.1,0-0.3,0-0.4
                                        c0-0.8-0.1-1.6-0.2-2.4c-0.2-2.2-0.4-4.4-0.7-6.6c0-0.1,0-0.3-0.1-0.4c-0.2-1.4-0.4-2.8-0.7-4.2c-0.3-1.7-0.7-3.4-1.1-5.1
                                        c0-0.1-0.1-0.3-0.1-0.4c-0.4-1.8-0.9-3.6-1.3-5.5c-0.4-1.4-0.7-2.8-1-4.2c0-0.1-0.1-0.3-0.1-0.4c-0.4-2-0.8-4-1-6.1
                                        c-0.1-1-0.2-1.9-0.2-2.9c0-0.1,0-0.3,0-0.4c-0.1-2.5,0.1-5,0.5-7.5c0.1,0,0.3,0,0.4,0c-0.1,0.9-0.3,1.8-0.3,2.7
                                        c-0.1,1.6-0.2,3.2-0.1,4.8c0,0.1,0,0.3,0,0.4c0.1,2,0.3,3.9,0.6,5.8c0.2,1.1,0.4,2.1,0.6,3.2c0,0.1,0.1,0.3,0.1,0.4
                                        c0.5,2.3,1.1,4.7,1.7,7c0.2,0.9,0.4,1.8,0.6,2.7c0,0.1,0.1,0.3,0.1,0.4c0.7,3.1,1.3,6.1,1.7,9.2c0,0.1,0,0.3,0.1,0.4
                                        c0.4,2.9,0.7,5.7,0.9,8.6c0,0.1,0,0.3,0,0.4c0,0.1,0,0.3,0,0.4c0.2,3.1,0.2,6.2,0.2,9.3v0.4c0,2.8-0.1,5.7-0.3,8.5
                                        c0,0.1,0,0.3,0,0.4c0,0.8-0.1,1.6-0.2,2.5c-0.2,2.3-0.4,4.7-0.6,7c0,0.1,0,0.3,0,0.4c-0.3,3.1-0.7,6.3-1.1,9.4
                                        c0,0.1,0,0.3,0,0.4c-0.2,1.5-0.4,3-0.6,4.5c-0.3,1.9-0.5,3.7-0.8,5.6c0,0.1,0,0.3-0.1,0.4c-0.2,1.6-0.5,3.3-0.7,4.9
                                        C810.2,185.5,810,187.3,809.7,189.1z"/>
                                </g>
                            </g>
                        </g>
                    </g>
                    <g id="Bedroom_2_00000093892851192858059690000002059016954671391417_" filter="url(#ds-soft)">
                        
                            <image overflow="visible" opacity="0.4" width="110" height="75" href="data:image/png;base64,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" transform="matrix(1 0 0 1 343 952)">
                        </image>
                        <g>
                            <g>
                                <g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M442.9,960.3l0,53.5c0,0.6-0.5,1-1,1
                                        l-86.2,0c-2.3,0-4.2-1.9-4.2-4.2v-46.9c0-2.3,1.9-4.2,4.2-4.2h86.4C442.5,959.5,442.9,959.9,442.9,960.3z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M443.1,960.2v53.7
                                        c0,0.6-0.5,1.1-1.1,1.1h-86.9c-2.1,0-3.9-1.7-3.9-3.9l0-48.1c0-2.1,1.7-3.9,3.9-3.9l87.1,0
                                        C442.7,959.3,443.1,959.7,443.1,960.2z M351.7,1011.2c0,1.9,1.5,3.4,3.4,3.4l86.9,0c0.4,0,0.7-0.3,0.7-0.7l0-53.7
                                        c0-0.3-0.2-0.5-0.5-0.5l-87.1,0c-1.9,0-3.4,1.5-3.4,3.4L351.7,1011.2z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M355.7,960.6l0,53.4
                                        c0,1.5-1.2,2.6-2.6,2.6h-2.8c-1.5,0-2.6-1.2-2.6-2.6l0-53.4c0-1.5,1.2-2.6,2.6-2.6h2.8C354.5,958,355.7,959.1,355.7,960.6z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M355.9,960.2v54.1
                                        c0,1.4-1.1,2.5-2.5,2.5h-3.5c-1.4,0-2.5-1.1-2.5-2.5l0-54.1c0-1.4,1.1-2.5,2.5-2.5h3.5C354.8,957.7,355.9,958.8,355.9,960.2z
                                        M347.8,1014.3c0,1.1,0.9,2.1,2.1,2.1h3.5c1.1,0,2.1-0.9,2.1-2.1v-54.1c0-1.1-0.9-2.1-2.1-2.1h-3.5c-1.1,0-2.1,0.9-2.1,2.1
                                        V1014.3z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M393.4,1015.5
                                        c4.1,0.3,28.8,0.8,32.2,0.3c3.4-0.5,13.9,1.5,13.8-0.2c-0.1-1.7,1.3-23.5,1.8-28.6c0.6-5,1.8-15.9,2.6-19.3s0.4-9-0.7-9.3
                                        c-1.1-0.3-47.9-0.2-50.6,0.5C389.8,959.5,393.4,1015.5,393.4,1015.5z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M444.4,963.5c0,1.5-0.1,3.1-0.4,4.3
                                        c-0.8,3.7-2.3,16.7-2.6,19.2c-0.6,5-2,26.9-1.8,28.5c0,0.2,0,0.3-0.2,0.5c-0.7,0.7-3.3,0.5-7.5,0.2c-2.4-0.2-5-0.4-6.3-0.2
                                        c-3.4,0.5-28.1,0-32.3-0.3l-0.2,0l0-0.2c0-0.1-0.9-14.1-1.4-28.1c-1.1-28.3,0.2-28.6,0.8-28.7c2.1-0.5,49-0.9,50.7-0.5
                                        C444,958.5,444.4,960.9,444.4,963.5z M439.2,1015.3c0-3.4,1.3-23.2,1.9-28.2c0.3-2.6,1.8-15.5,2.6-19.3
                                        c0.8-3.6,0.3-8.8-0.6-9.1c-0.6-0.1-11.9-0.2-24.7-0.1c-11.6,0.1-24.4,0.3-25.8,0.6c-0.4,0.1-1.4,2.5-0.4,28.4
                                        c0.5,13,1.3,26.1,1.4,27.8c4.7,0.3,28.6,0.7,32,0.3c1.4-0.2,3.9,0,6.4,0.2c3.1,0.3,6.6,0.5,7.1,0c0,0,0-0.1,0-0.1
                                        C439.2,1015.6,439.2,1015.4,439.2,1015.3z"/>
                                </g>
                                <g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M394.3,957.9c0.5,0.5-1,11.5-1,20
                                        c0.1,17.7,0.8,37.2,0.5,38.6c-0.2,1.1-3.8,1.1-7.3,1.1c-3.2,0-6.2,0.3-7.1-0.7c-1.8-1.9-1.9-56.4,0.6-58.7
                                        c1.1-1,3.9-0.9,6.6-1C390,957.3,393.4,957.1,394.3,957.9z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M394.6,958.8c0,0.9-0.1,2.4-0.3,5.2
                                        c-0.3,3.9-0.8,9.3-0.7,14c0.1,8.2,0.2,16.9,0.4,23.8c0.2,8.2,0.3,14,0.1,14.8c-0.2,1.2-3.2,1.2-6.6,1.3l-0.9,0
                                        c-0.5,0-0.9,0-1.4,0c-2.8,0.1-5,0.1-5.8-0.7c-1.3-1.4-1.6-25.5-1.2-41.1c0.2-7.6,0.7-16.9,1.8-17.9c1-0.9,3.1-0.9,5.4-1
                                        c0.4,0,0.9,0,1.3,0c3.5-0.1,6.9-0.3,7.8,0.6l0,0C394.5,957.9,394.6,958.2,394.6,958.8z M393.1,977.5c0-4.5,0.4-9.7,0.7-13.6
                                        c0.2-2.8,0.5-5.5,0.3-5.9c-0.8-0.7-4.4-0.6-7.5-0.5c-0.4,0-0.9,0-1.3,0c-2.2,0.1-4.3,0.1-5.1,0.9c-0.3,0.3-1.2,2.3-1.7,17.6
                                        c-0.5,18,0,39.7,1.1,40.8c0.7,0.7,3,0.7,5.5,0.6c0.5,0,0.9,0,1.4,0l0.9,0c2.7,0,6-0.1,6.2-0.9c0.2-0.8,0-6.9-0.1-14.8
                                        c-0.1-7-0.3-15.6-0.4-23.8C393.1,977.8,393.1,977.7,393.1,977.5z"/>
                                </g>
                                <g>
                                    <path fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M359.2,1006.9c3.2,1.7,13.6,0.1,15.2,0
                                        c6.9-0.5,3.2-38.5,1.1-39.7c-1.8-1-17-1.2-17.8,1.1c-0.4,1.1-1.2,10.9-1.1,20C356.9,997.5,357.9,1006.2,359.2,1006.9z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M378.7,990.9c0,4.3-0.3,8.4-1,11.4
                                        c-0.7,3.1-1.8,4.7-3.3,4.8c-0.2,0-0.7,0.1-1.3,0.1c-3.4,0.4-11.2,1.3-14-0.2c-1.5-0.8-2.5-10.3-2.6-18.8
                                        c-0.1-9.1,0.7-18.9,1.1-20.1c0.1-0.4,0.5-0.7,1.2-1c3.6-1.4,15.3-1.2,16.9-0.2C377,967.7,378.7,980.1,378.7,990.9z M357,986.5
                                        c0,0.6,0,1.2,0,1.8c0.1,10.4,1.3,17.9,2.4,18.5l0,0c2.7,1.4,10.5,0.5,13.8,0.1c0.6-0.1,1-0.1,1.3-0.1c1.3-0.1,2.2-1.6,2.9-4.5
                                        c2.5-10.9-0.5-34-1.9-34.8c-1.5-0.9-13-1.1-16.5,0.3c-0.7,0.3-0.9,0.5-0.9,0.7C357.7,969.4,357,978,357,986.5z"/>
                                </g>
                            </g>
                        </g>
                    </g>
                    <g id="Bedroom_2_00000093164252773707182150000007803445191560003746_" filter="url(#ds-soft)">
                        
                            <image overflow="visible" opacity="0.4" width="74" height="110" href="data:image/png;base64,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" transform="matrix(1 0 0 1 387.2185 533.9083)">
                        </image>
                        <g>
                            <g>
                                <g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M449,633.9h-53.5c-0.6,0-1-0.5-1-1
                                        l0-86.2c0-2.3,1.9-4.2,4.2-4.2l46.9,0c2.3,0,4.2,1.9,4.2,4.2l0,86.4C449.8,633.5,449.5,633.9,449,633.9z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M449.2,634.1h-53.7
                                        c-0.6,0-1.1-0.5-1.1-1.1l0-86.9c0-2.1,1.7-3.9,3.9-3.9h48.1c2.1,0,3.9,1.7,3.9,3.9l0,87.1
                                        C450.1,633.7,449.7,634.1,449.2,634.1z M398.1,542.7c-1.9,0-3.4,1.5-3.4,3.4l0,86.9c0,0.4,0.3,0.7,0.7,0.7l53.7,0
                                        c0.3,0,0.5-0.2,0.5-0.5l0-87.1c0-1.9-1.5-3.4-3.4-3.4H398.1z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M448.8,546.7h-53.4
                                        c-1.5,0-2.6-1.2-2.6-2.6v-2.8c0-1.5,1.2-2.6,2.6-2.6h53.4c1.5,0,2.6,1.2,2.6,2.6v2.8C451.4,545.5,450.2,546.7,448.8,546.7z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M449.1,546.9H395
                                        c-1.4,0-2.5-1.1-2.5-2.5v-3.5c0-1.4,1.1-2.5,2.5-2.5l54.1,0c1.4,0,2.5,1.1,2.5,2.5l0,3.5C451.6,545.8,450.5,546.9,449.1,546.9
                                        z M395,538.8c-1.1,0-2.1,0.9-2.1,2.1v3.5c0,1.1,0.9,2.1,2.1,2.1l54.1,0c1.1,0,2.1-0.9,2.1-2.1v-3.5c0-1.1-0.9-2.1-2.1-2.1H395
                                        z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M393.9,584.4
                                        c-0.3,4.1-0.8,28.8-0.3,32.2c0.5,3.4-1.5,13.9,0.2,13.8c1.7-0.1,23.5,1.3,28.6,1.8c5,0.6,15.9,1.8,19.3,2.6
                                        c3.4,0.7,9,0.4,9.3-0.7c0.3-1.1,0.2-47.9-0.5-50.6C449.8,580.8,393.9,584.4,393.9,584.4z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M445.8,635.4c-1.5,0-3.1-0.1-4.3-0.4
                                        c-3.7-0.8-16.7-2.3-19.2-2.6c-5-0.6-26.9-2-28.5-1.8c-0.2,0-0.3,0-0.5-0.2c-0.7-0.7-0.5-3.3-0.2-7.5c0.2-2.4,0.4-5,0.2-6.3
                                        c-0.5-3.4,0-28.1,0.3-32.3l0-0.2l0.2,0c0.1,0,14.1-0.9,28.1-1.4c28.3-1.1,28.6,0.2,28.7,0.8c0.5,2.1,0.9,49,0.5,50.7
                                        C450.9,635,448.4,635.4,445.8,635.4z M394.1,630.2c3.4,0,23.2,1.3,28.2,1.9c2.6,0.3,15.5,1.8,19.3,2.6
                                        c3.6,0.8,8.8,0.3,9.1-0.6c0.1-0.6,0.2-11.9,0.1-24.7c-0.1-11.6-0.3-24.4-0.6-25.8c-0.1-0.4-2.5-1.4-28.4-0.4
                                        c-13,0.5-26.1,1.3-27.8,1.4c-0.3,4.7-0.7,28.6-0.3,32c0.2,1.4,0,3.9-0.2,6.4c-0.3,3.1-0.5,6.6,0,7.1c0,0,0.1,0,0.1,0
                                        C393.8,630.2,393.9,630.2,394.1,630.2z"/>
                                </g>
                                <g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M451.4,585.2c-0.5,0.5-11.5-1-20-1
                                        c-17.7,0.1-37.2,0.8-38.6,0.5c-1.1-0.2-1.1-3.8-1.1-7.3c0-3.2-0.3-6.2,0.7-7.1c1.9-1.8,56.4-1.9,58.7,0.6c1,1.1,0.9,3.9,1,6.6
                                        C452.1,581,452.2,584.4,451.4,585.2z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M450.6,585.6c-0.9,0-2.4-0.1-5.2-0.3
                                        c-3.9-0.3-9.3-0.8-14-0.7c-8.2,0.1-16.9,0.2-23.8,0.4c-8.2,0.2-14,0.3-14.8,0.1c-1.2-0.2-1.2-3.2-1.3-6.6l0-0.9
                                        c0-0.5,0-0.9,0-1.4c-0.1-2.8-0.1-5,0.7-5.8c1.4-1.3,25.5-1.6,41.1-1.2c7.6,0.2,16.9,0.7,17.9,1.8c0.9,1,0.9,3.1,1,5.4
                                        c0,0.4,0,0.9,0,1.3c0.1,3.5,0.3,6.9-0.6,7.8l0,0C451.4,585.5,451.2,585.6,450.6,585.6z M431.8,584c4.5,0,9.7,0.4,13.6,0.7
                                        c2.8,0.2,5.5,0.5,5.9,0.3c0.7-0.8,0.6-4.4,0.5-7.5c0-0.4,0-0.9,0-1.3c-0.1-2.2-0.1-4.3-0.9-5.1c-0.3-0.3-2.3-1.2-17.6-1.7
                                        c-18-0.5-39.7,0-40.8,1.1c-0.7,0.7-0.7,3-0.6,5.5c0,0.5,0,0.9,0,1.4l0,0.9c0,2.7,0.1,6,0.9,6.2c0.8,0.2,6.9,0,14.8-0.1
                                        c7-0.1,15.6-0.3,23.8-0.4C431.5,584,431.6,584,431.8,584z"/>
                                </g>
                                <g>
                                    <path fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M402.4,550.2c-1.7,3.2-0.1,13.6,0,15.2
                                        c0.5,6.9,38.5,3.2,39.7,1.1c1-1.8,1.2-17-1.1-17.8c-1.1-0.4-10.9-1.2-20-1.1C411.8,547.9,403.1,548.9,402.4,550.2z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M418.4,569.7c-4.3,0-8.4-0.3-11.4-1
                                        c-3.1-0.7-4.7-1.8-4.8-3.3c0-0.2-0.1-0.7-0.1-1.3c-0.4-3.4-1.3-11.2,0.2-14c0.8-1.5,10.3-2.5,18.8-2.6
                                        c9.1-0.1,18.9,0.7,20.1,1.1c0.4,0.1,0.7,0.5,1,1.2c1.4,3.6,1.2,15.3,0.2,16.9C441.6,568,429.2,569.7,418.4,569.7z
                                        M422.9,547.9c-0.6,0-1.2,0-1.8,0c-10.4,0.1-17.9,1.3-18.5,2.4l0,0c-1.4,2.7-0.5,10.5-0.1,13.8c0.1,0.6,0.1,1,0.1,1.3
                                        c0.1,1.3,1.6,2.2,4.5,2.9c10.9,2.5,34-0.5,34.8-1.9c0.9-1.5,1.1-13-0.3-16.5c-0.3-0.7-0.5-0.9-0.7-0.9
                                        C439.9,548.7,431.4,547.9,422.9,547.9z"/>
                                </g>
                            </g>
                        </g>
                    </g>
                    <g id="great-room-set">
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M415.4,480.1c-4.5,0-10.3-3.9-13.7-7.6c-7.9-8.3-12.8-24.7-7.3-37.9c0.4-1,0.8-1.9,1.3-2.8
                                    c1.5-3.2,3.1-6.5,2.1-10.5c-0.7-2.8-2.3-4.3-3.6-5.7c-1.3-1.2-2.4-2.3-2.6-4.3c-0.3-2.9,1.7-4.9,4-7.2c2.4-2.4,5.1-5.1,5.5-9.4
                                    c0.3-3.3-1-5.6-2.2-7.6c-1.2-2-2.1-3.6-1.5-6.1c1.2-4.7,7.6-8.9,13.7-8.9c0.6,0,1.1,0,1.7,0.1c4.1,0.6,6.8,3.2,9.3,5.5
                                    c1.9,1.8,3.6,3.4,5.5,3.4c0.3,0,0.7-0.1,1-0.2c2.1-0.7,2.7-2.8,3.3-4.9c0.6-2.1,1.2-4.2,3.2-5.1c0.5-0.2,1-0.3,1.5-0.3
                                    c1.6,0,3.2,1,5.1,2.2c2.6,1.6,5.5,3.4,9.3,3.4h0c0.3,0,0.7,0,1,0c2.6-0.2,4.3-1.5,6.1-2.7c0.8-0.6,1.7-1.2,2.6-1.7
                                    c2.6-1.4,5.7-2.1,8.9-2.1c3.7,0,7.4,1,10.3,2.7c0.7,0.4,1.3,0.8,1.8,1.3c5.9,4.8,3.3,11.4,0.9,17.7c-0.9,2.4-1.8,4.7-2.3,6.9
                                    c-1.3,6.6,2.2,11.6,5.6,16.4c3,4.3,5.9,8.5,4.6,13.1c-1,3.5-3.8,5.3-6.5,7c-3,1.9-6.1,3.9-6.7,8.1c-0.5,3.5,1,5.9,2.4,8.2
                                    c1.4,2.3,2.7,4.4,2,7.5c-1.3,5.5-8.1,9.7-13.1,9.7c-0.7,0-1.4-0.1-2-0.2c-1.4-0.4-2.1-1-2.8-1.7c-0.8-0.7-1.6-1.5-3.3-1.9
                                    c-0.5-0.1-0.9-0.1-1.4-0.1c-2.5,0-4.4,1.5-6.4,3.1c-1.9,1.5-4.1,3.2-7.2,3.9c-0.8,0.2-1.5,0.2-2.3,0.2c-3.3,0-6.1-1.5-8.5-2.8
                                    c-2.1-1.1-4.1-2.2-6.2-2.2c-0.9,0-1.7,0.2-2.6,0.6c-2.7,1.3-3.5,3.9-4.2,6.5c-0.7,2.4-1.4,4.7-3.6,5.7
                                    C417.3,480,416.4,480.1,415.4,480.1z"/>
                                <path fill="#EFE7DA" d="M469.5,369.4v1c3.7,0,7.2,0.9,10,2.6c0.6,0.4,1.2,0.8,1.8,1.3c5.6,4.6,3.2,10.7,0.7,17.2
                                    c-0.9,2.4-1.8,4.7-2.3,7c-1.4,6.8,2.4,12.1,5.7,16.8c3.1,4.4,5.8,8.3,4.5,12.7c-1,3.3-3.5,5-6.3,6.7c-3.1,2-6.3,4-6.9,8.5
                                    c-0.5,3.7,1.1,6.3,2.5,8.6c1.4,2.3,2.6,4.3,2,7.1c-1.2,5.2-7.8,9.3-12.6,9.3c-0.7,0-1.3-0.1-1.9-0.2c-1.3-0.3-1.9-0.9-2.6-1.6
                                    c-0.8-0.8-1.7-1.6-3.5-2c-0.5-0.1-1-0.2-1.5-0.2c-2.7,0-4.6,1.5-6.7,3.2c-2,1.6-4,3.2-7,3.8c-0.7,0.2-1.5,0.2-2.2,0.2
                                    c-3.2,0-5.8-1.4-8.3-2.7c-2.2-1.2-4.3-2.3-6.5-2.3c-1,0-1.9,0.2-2.8,0.7c-2.9,1.4-3.7,4.3-4.5,6.8c-0.7,2.4-1.3,4.4-3.3,5.4
                                    c-0.7,0.3-1.5,0.5-2.4,0.5c-4.4,0-10-3.8-13.4-7.4c-7.8-8.2-12.6-24.4-7.2-37.4c0.4-0.9,0.8-1.9,1.3-2.8
                                    c1.6-3.3,3.2-6.7,2.2-10.9c-0.7-3-2.4-4.5-3.8-5.9c-1.3-1.2-2.3-2.2-2.5-4c-0.3-2.7,1.6-4.6,3.8-6.8c2.5-2.5,5.3-5.2,5.6-9.7
                                    c0.3-3.5-1.1-5.8-2.3-7.9c-1.1-1.9-2-3.5-1.5-5.7c1.1-4.5,7.4-8.5,13.2-8.5c0.6,0,1.1,0,1.6,0.1c3.9,0.6,6.6,3.1,9,5.4
                                    c2,1.9,3.7,3.6,5.8,3.6c0.4,0,0.8-0.1,1.2-0.2c2.3-0.7,3-3,3.6-5.3c0.6-2.1,1.2-4,2.9-4.8c0.4-0.2,0.8-0.3,1.3-0.3
                                    c1.4,0,3,1,4.9,2.1c2.5,1.6,5.6,3.5,9.6,3.5c0.3,0,0.7,0,1,0c2.7-0.2,4.5-1.5,6.3-2.8c0.8-0.6,1.7-1.2,2.6-1.7
                                    c2.5-1.3,5.5-2,8.7-2L469.5,369.4 M469.5,369.4c-3.3,0-6.5,0.7-9.2,2.1c-3,1.6-4.9,4.1-8.5,4.4c-0.3,0-0.6,0-1,0
                                    c-6.6,0-10.5-5.6-14.5-5.6c-0.6,0-1.1,0.1-1.7,0.4c-4.2,1.9-2.8,8.8-6.4,10c-0.3,0.1-0.6,0.1-0.9,0.1c-3.9,0-7.1-7.9-14.7-8.9
                                    c-0.6-0.1-1.2-0.1-1.8-0.1c-6.2,0-12.9,4.3-14.2,9.3c-1.3,5.2,4.3,7.3,3.7,13.7c-0.7,8.1-10.2,10.3-9.5,16.8
                                    c0.5,4.3,4.9,4.7,6.3,10c1.2,5-1.6,8.7-3.4,13c-5.3,12.8-0.9,29.6,7.4,38.4c3.5,3.7,9.4,7.7,14.1,7.7c1,0,2-0.2,2.8-0.6
                                    c4.8-2.3,2.9-9.8,7.8-12.2c0.8-0.4,1.6-0.6,2.3-0.6c4.3,0,8.5,5,14.7,5c0.8,0,1.6-0.1,2.4-0.2c6.3-1.3,8.8-6.9,13.4-6.9
                                    c0.4,0,0.8,0,1.3,0.1c3,0.6,3,2.8,6.1,3.6c0.7,0.2,1.4,0.3,2.2,0.3c5.5,0,12.3-4.6,13.6-10.1c1.5-6.3-5.4-9.1-4.4-15.7
                                    c1.1-7.8,11-7.5,13.2-15.1c2.9-10.1-12.6-17.2-10.2-29.6c1.6-8,9.6-18.2,1.2-25.1c-0.6-0.5-1.2-0.9-1.9-1.3
                                    C477,370.3,473.2,369.4,469.5,369.4L469.5,369.4z"/>
                            </g>
                            <g>
                                <path fill="#FFFFFF" d="M491.2,428.3c-1.1,3.8-4,5.7-6.9,7.5c-3,1.9-5.8,3.7-6.3,7.6c-0.5,3.2,0.9,5.5,2.3,7.7
                                    c1.4,2.3,2.9,4.7,2.1,8.1c-0.7,3-3.1,6-6.5,8.1c-3.3,2-6.9,2.7-9.7,2c-1.6-0.4-2.4-1.2-3.2-1.9c-0.7-0.7-1.4-1.4-2.9-1.7
                                    c-2.8-0.6-4.8,1-7.1,2.8c-2,1.6-4.3,3.4-7.5,4c-4.6,1-8.2-1-11.4-2.7c-2.9-1.6-5.4-2.9-8-1.6c-2.3,1.2-3,3.5-3.8,6
                                    c-0.7,2.5-1.5,5-4,6.2c-5.3,2.5-13.2-2.9-17.3-7.2c-8.1-8.5-13.1-25.3-7.5-38.8c0.4-1,0.9-1.9,1.3-2.9c1.5-3.2,3-6.2,2.1-10
                                    c-0.7-2.6-2.1-4-3.4-5.3c-1.3-1.3-2.6-2.5-2.9-4.8c-0.4-3.3,1.9-5.6,4.2-7.9c2.4-2.4,4.9-4.9,5.3-8.9c0.3-3.1-0.9-5.1-2.1-7.1
                                    c-1.2-2-2.3-3.9-1.6-6.7c1.4-5.7,9.5-10.3,16.3-9.4c4.4,0.6,7.3,3.5,9.7,5.7c2.1,2,3.8,3.7,5.7,3.1c1.6-0.5,2.2-2.4,2.8-4.4
                                    c0.6-2.1,1.4-4.6,3.6-5.6c2.5-1.1,4.7,0.3,7.4,2c2.7,1.7,5.8,3.6,9.8,3.3c2.3-0.2,3.9-1.3,5.7-2.6c0.9-0.6,1.7-1.2,2.7-1.8
                                    c5.8-3.1,14.3-2.8,20.1,0.6l0,0c0.7,0.4,1.3,0.9,1.9,1.4c6.3,5.2,3.6,12.4,1.1,18.7c-0.9,2.4-1.8,4.6-2.2,6.7
                                    c-1.2,6.2,2.2,11.1,5.5,15.8c2.6,3.7,5.1,7.2,5.1,11.2C491.6,426.5,491.5,427.4,491.2,428.3z M480.4,398.5
                                    c0.4-2.2,1.3-4.4,2.2-6.9c2.5-6.4,5-13-0.9-17.9c-0.6-0.5-1.2-0.9-1.9-1.3l0,0c-5.6-3.4-13.8-3.6-19.4-0.6
                                    c-1,0.5-1.8,1.1-2.7,1.7c-1.8,1.3-3.5,2.5-6,2.7c-4.3,0.4-7.5-1.6-10.2-3.4c-2.6-1.6-4.6-2.9-6.7-1.9c-2,0.9-2.6,3.1-3.3,5.2
                                    c-0.6,2.2-1.2,4.2-3.2,4.8c-2.2,0.7-4.1-1.1-6.4-3.2c-2.4-2.3-5.2-5-9.4-5.6c-6.4-0.9-14.2,3.6-15.5,8.9
                                    c-0.6,2.5,0.4,4.2,1.6,6.2c1.2,2,2.5,4.2,2.2,7.5c-0.4,4.2-3.1,6.9-5.4,9.3c-2.3,2.3-4.4,4.4-4,7.4c0.2,2,1.4,3.1,2.7,4.4
                                    c1.4,1.3,2.9,2.8,3.6,5.6c1,4-0.5,7.1-2.1,10.4c-0.4,0.9-0.9,1.9-1.3,2.8c-5.5,13.3-0.5,29.8,7.4,38.1c3.8,4,11.6,9.4,16.5,7
                                    c2.2-1.1,2.9-3.4,3.7-5.8c0.7-2.5,1.5-5.1,4.1-6.4c2.9-1.4,5.7,0,8.6,1.6c3.1,1.6,6.5,3.5,10.9,2.6c3.1-0.6,5.3-2.4,7.2-3.9
                                    c2.3-1.8,4.5-3.5,7.6-2.9c1.6,0.3,2.4,1.1,3.2,1.8c0.8,0.7,1.5,1.4,2.9,1.7c2.6,0.7,6,0,9.1-1.9c3.2-1.9,5.5-4.8,6.2-7.7
                                    c0.7-3.1-0.6-5.3-2-7.6c-1.4-2.3-2.9-4.7-2.4-8.1c0.6-4.2,3.7-6.1,6.6-8c2.7-1.7,5.5-3.5,6.6-7.1c1.4-4.8-1.5-8.9-4.6-13.3
                                    c-2.9-4.1-5.8-8.3-5.8-13.5C480.1,400.4,480.2,399.5,480.4,398.5z"/>
                                <path fill="#EFE7DA" d="M469.5,369.1c-3.3,0-6.6,0.7-9.3,2.2c-1,0.5-1.9,1.2-2.7,1.8c-1.7,1.2-3.3,2.4-5.7,2.6
                                    c-0.3,0-0.6,0-0.9,0c-3.6,0-6.4-1.7-8.9-3.3c-2-1.2-3.7-2.3-5.6-2.3c-0.6,0-1.2,0.1-1.8,0.4c-2.3,1-3,3.4-3.6,5.6
                                    c-0.6,2-1.1,3.9-2.8,4.4c-0.3,0.1-0.5,0.1-0.8,0.1c-1.6,0-3.1-1.4-4.9-3.2c-2.4-2.3-5.4-5.1-9.7-5.7c-0.6-0.1-1.2-0.1-1.8-0.1
                                    c-6.3,0-13.1,4.3-14.5,9.5c-0.7,2.8,0.4,4.7,1.6,6.7c1.2,2,2.4,4,2.1,7.1c-0.3,4-2.8,6.5-5.3,8.9c-2.4,2.4-4.6,4.6-4.2,7.9
                                    c0.3,2.2,1.5,3.5,2.9,4.8c1.4,1.3,2.8,2.7,3.4,5.3c0.9,3.7-0.5,6.8-2.1,10c-0.4,0.9-0.9,1.9-1.3,2.9
                                    c-5.6,13.5-0.5,30.3,7.5,38.8c3.4,3.5,9.3,7.8,14.3,7.8c1.1,0,2.1-0.2,3-0.6c2.5-1.2,3.3-3.8,4-6.2c0.7-2.5,1.4-4.8,3.8-6
                                    c0.7-0.4,1.5-0.5,2.2-0.5c1.9,0,3.7,1,5.8,2.1c2.6,1.4,5.4,2.9,8.9,2.9c0.8,0,1.6-0.1,2.5-0.3c3.3-0.7,5.5-2.4,7.5-4
                                    c1.9-1.5,3.7-2.9,5.9-2.9c0.4,0,0.8,0,1.2,0.1c1.4,0.3,2.1,1,2.9,1.7c0.8,0.7,1.6,1.5,3.2,1.9c0.7,0.2,1.5,0.3,2.2,0.3
                                    c2.3,0,5-0.8,7.4-2.3c3.4-2,5.8-5,6.5-8.1c0.8-3.3-0.7-5.7-2.1-8.1c-1.4-2.2-2.8-4.5-2.3-7.7c0.6-3.9,3.4-5.7,6.3-7.6
                                    c2.8-1.8,5.8-3.7,6.9-7.5c0.3-0.9,0.4-1.8,0.4-2.7c0-3.9-2.5-7.5-5.1-11.2c-3.3-4.7-6.7-9.6-5.5-15.8c0.4-2.1,1.3-4.4,2.2-6.7
                                    c2.4-6.3,5.2-13.5-1.1-18.7c-0.6-0.5-1.3-1-1.9-1.4C477.1,370,473.3,369.1,469.5,369.1L469.5,369.1z M450.8,376.3
                                    c0.3,0,0.7,0,1,0c2.5-0.2,4.2-1.4,6-2.7c0.8-0.6,1.7-1.2,2.7-1.7c2.6-1.4,5.8-2.1,9-2.1c3.7,0,7.4,0.9,10.4,2.7
                                    c0.7,0.4,1.3,0.8,1.9,1.3c6,4.9,3.4,11.5,0.9,17.9c-0.9,2.4-1.8,4.7-2.2,6.9c-0.2,1-0.3,1.9-0.3,2.8c0,5.2,3,9.4,5.8,13.5
                                    c3.1,4.4,6,8.5,4.6,13.3c-1,3.6-3.8,5.4-6.6,7.1c-3,1.9-6,3.8-6.6,8c-0.5,3.4,1,5.8,2.4,8.1c1.4,2.3,2.7,4.5,2,7.6
                                    c-0.7,2.9-3,5.7-6.2,7.7c-2.3,1.4-4.9,2.2-7.1,2.2c-0.7,0-1.4-0.1-2.1-0.3c-1.5-0.4-2.2-1-2.9-1.7c-0.8-0.7-1.6-1.5-3.2-1.8
                                    c-0.5-0.1-0.9-0.1-1.3-0.1c-2.4,0-4.3,1.5-6.3,3c-1.9,1.5-4.1,3.3-7.2,3.9c-0.8,0.2-1.6,0.2-2.3,0.2c-3.3,0-6.1-1.5-8.6-2.8
                                    c-2.1-1.1-4.1-2.2-6.1-2.2c-0.8,0-1.6,0.2-2.5,0.6c-2.6,1.3-3.4,3.9-4.1,6.4c-0.7,2.4-1.4,4.7-3.7,5.8
                                    c-0.8,0.4-1.7,0.6-2.7,0.6c-4.7,0-10.7-4.3-13.8-7.6c-7.9-8.3-12.8-24.8-7.4-38.1c0.4-1,0.9-1.9,1.3-2.8
                                    c1.6-3.3,3.1-6.5,2.1-10.4c-0.7-2.8-2.2-4.3-3.6-5.6c-1.3-1.3-2.4-2.4-2.7-4.4c-0.3-3,1.7-5,4-7.4c2.4-2.4,5.1-5.1,5.4-9.3
                                    c0.3-3.3-1-5.5-2.2-7.5c-1.2-2-2.2-3.7-1.6-6.2c1.2-4.8,7.9-9,13.9-9c0.6,0,1.1,0,1.7,0.1c4.1,0.6,6.9,3.2,9.4,5.6
                                    c1.9,1.8,3.5,3.4,5.4,3.4c0.3,0,0.7,0,1-0.2c2-0.6,2.6-2.7,3.2-4.8c0.6-2.1,1.3-4.3,3.3-5.2c0.5-0.2,1-0.3,1.5-0.3
                                    c1.6,0,3.3,1,5.2,2.2C444.1,374.5,447,376.3,450.8,376.3L450.8,376.3z"/>
                            </g>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M486.7,426.2c-0.4,2.5-3.1,3.8-5.4,5c-1,0.5-1.8,0.9-2.5,1.4c-5.1,3.5-8.1,11.5-4.3,17.3
                                c0.4,0.6,0.8,1.2,1.3,1.9c1.5,2.1,3.1,4.2,3.1,6.7c0,0,0,0,0,0c0,3.8-3.5,6.3-7,7.1c-2.6,0.6-4.8-0.6-6.8-1.8
                                c-1.3-0.7-2.6-1.5-4-1.8c-2.9-0.6-5.1,0.8-7.5,2.2c-1,0.6-2,1.2-3.1,1.7c-3.5,1.5-7.7,1.9-11.6,1c-1.7-0.4-3.2-1.3-4.8-2.2
                                c-2.4-1.4-4.7-2.8-7.5-2.2c-2.8,0.6-4.7,2.9-5.9,4.6c-1,1.4-1.6,2.8-2.3,4.4c-0.2,0.5-0.4,1-0.7,1.5c-0.4,0.9-0.9,1.8-1.7,2.5
                                c-4.5,3.8-12.5-4.3-14.1-6c-6-6.3-7-14-7.2-16.2c-0.4-6,1.3-11,3.4-16.8c1.1-3.1,2.2-5.4,3-7.2c1.5-3.1,2.3-4.9,1.6-7.4
                                c-0.7-2.5-2.3-3.8-3.7-5c-1.4-1.2-2.8-2.3-2.9-4.3c-0.2-2.6,1.7-4.1,3.9-5.9c2.1-1.7,4.5-3.6,5.3-6.9c0.9-3.7-0.6-6.7-2.2-9.7
                                c-1.5-2.9-2.9-5.7-1.5-8.6c1.6-3.3,5.8-5.2,9.1-5.1c3.3,0.1,5.3,2.2,7.2,4.1c1.8,1.8,3.4,3.5,6,3.4c2.4-0.1,3.8-1.7,5.2-3.5
                                c1.5-1.9,3.1-3.8,6.1-4.3c3.2-0.5,5.3,1,7.5,2.6c2.1,1.5,4.3,3.1,7.7,2.9c2.8-0.2,4.3-1.5,6.1-3c1.9-1.7,4.1-3.6,8.6-4.7
                                c2.2-0.5,8.2-2,11.9,1.3c2,1.8,3.1,4.7,3,8.4c-0.1,2.8-1,4.5-2,6.4c-1,1.8-2.1,3.9-2.5,7.3c-0.4,2.9,0,5.2,0.1,6.4l0,0
                                c0.3,2.1,1,5.1,3.5,9.9c2.4,4.6,4.5,7,5.8,8.6c1.2,1.4,1.9,2.3,1.9,3.5C486.8,425.8,486.8,426,486.7,426.2z M475.2,403.8
                                c-0.2-1.1-0.5-3.5-0.1-6.4c0.4-3.5,1.6-5.6,2.6-7.4c1-1.9,1.9-3.5,2-6.2c0.1-3.5-1-6.4-2.9-8.1c-3.5-3.2-9.4-1.7-11.6-1.2
                                c-4.4,1.1-6.5,2.9-8.4,4.6c-1.8,1.6-3.4,2.9-6.3,3.1c-3.5,0.2-5.7-1.4-7.9-3c-2.2-1.6-4.2-3-7.2-2.5c-2.9,0.5-4.4,2.4-5.9,4.2
                                c-1.5,1.8-2.9,3.5-5.5,3.6c-2.7,0.1-4.4-1.7-6.2-3.5c-1.9-1.9-3.8-3.9-7-4c-3.1-0.1-7.3,1.7-8.8,4.9c-1.3,2.8,0.1,5.5,1.5,8.3
                                c1.5,2.9,3.2,6.1,2.2,9.9c-0.9,3.4-3.3,5.4-5.4,7.1c-2.1,1.7-4,3.2-3.8,5.6c0.1,1.9,1.4,2.9,2.8,4.1c1.5,1.2,3.1,2.5,3.8,5.1
                                c0.7,2.6-0.1,4.4-1.6,7.6c-0.8,1.8-1.9,4-3,7.2c-2,5.7-3.8,10.7-3.4,16.6c0.2,2.2,1.1,9.8,7.1,16c1.5,1.6,9.4,9.5,13.6,5.9
                                c0.7-0.6,1.2-1.5,1.6-2.4c0.2-0.5,0.5-1,0.7-1.5c0.7-1.5,1.4-3,2.4-4.4c1.2-1.7,3.2-4.1,6.1-4.7c2.9-0.6,5.4,0.8,7.7,2.2
                                c1.5,0.9,3,1.8,4.7,2.2c3.8,0.9,7.9,0.5,11.4-1c1-0.5,2.1-1.1,3-1.7c2.3-1.5,4.8-2.9,7.8-2.3c1.5,0.3,2.8,1.1,4.1,1.9
                                c2.1,1.2,4.1,2.4,6.6,1.8c3.4-0.8,6.7-3.2,6.7-6.7c0,0,0,0,0,0c0-2.4-1.6-4.5-3-6.5c-0.5-0.6-0.9-1.3-1.3-1.9
                                c-3.9-6-0.9-14.1,4.4-17.8c0.7-0.5,1.6-0.9,2.6-1.4c2.3-1.1,4.9-2.4,5.3-4.7c0.2-1.4-0.5-2.2-1.8-3.8c-1.4-1.6-3.5-4-5.9-8.6
                                C476.2,408.9,475.5,405.9,475.2,403.8L475.2,403.8z"/>
                            <path fill="#EFE7DA" d="M470.6,373.3c-2.3,0-4.4,0.5-5.6,0.8c-4.4,1.1-6.6,3-8.6,4.7c-1.8,1.5-3.3,2.8-6.1,3c-0.2,0-0.4,0-0.6,0
                                c-3,0-5.1-1.5-7.1-3c-1.9-1.4-3.7-2.7-6.2-2.7c-0.4,0-0.8,0-1.2,0.1c-3,0.5-4.6,2.4-6.1,4.3c-1.5,1.8-2.8,3.4-5.2,3.5
                                c0,0-0.1,0-0.1,0c-2.4,0-4.1-1.7-5.8-3.4c-1.9-2-3.9-4-7.2-4.1c-0.1,0-0.2,0-0.3,0c-3.2,0-7.3,1.8-8.8,5.1c-1.4,3,0,5.7,1.5,8.6
                                c1.5,2.9,3.1,6,2.2,9.7c-0.8,3.3-3.2,5.2-5.3,6.9c-2.2,1.8-4.1,3.3-3.9,5.9c0.1,2.1,1.5,3.2,2.9,4.3c1.4,1.2,3.1,2.5,3.7,5
                                c0.7,2.5-0.1,4.2-1.6,7.4c-0.8,1.8-1.9,4.1-3,7.2c-2.1,5.8-3.8,10.8-3.4,16.8c0.2,2.2,1.2,9.9,7.2,16.2c1.3,1.3,6.9,7,11.3,7
                                c1,0,2-0.3,2.8-1c0.8-0.6,1.3-1.6,1.7-2.5c0.2-0.5,0.5-1,0.7-1.5c0.7-1.5,1.4-3,2.3-4.4c1.2-1.7,3.1-4,5.9-4.6
                                c0.5-0.1,0.9-0.1,1.4-0.1c2.2,0,4.1,1.1,6.1,2.3c1.5,0.9,3.1,1.8,4.8,2.2c1.4,0.3,2.8,0.5,4.2,0.5c2.6,0,5.1-0.5,7.4-1.5
                                c1.1-0.5,2.1-1.1,3.1-1.7c2-1.2,3.9-2.4,6.1-2.4c0.5,0,0.9,0,1.4,0.2c1.4,0.3,2.8,1.1,4,1.8c1.7,1,3.4,2,5.4,2
                                c0.4,0,0.9,0,1.4-0.2c3.5-0.8,7-3.3,7-7.1c0,0,0,0,0,0c0-2.5-1.6-4.7-3.1-6.7c-0.5-0.6-0.9-1.3-1.3-1.9
                                c-3.7-5.8-0.7-13.8,4.3-17.3c0.7-0.5,1.6-0.9,2.5-1.4c2.4-1.1,5-2.4,5.4-5c0-0.2,0-0.4,0-0.6c0-1.2-0.7-2.1-1.9-3.5
                                c-1.4-1.6-3.4-4-5.8-8.6c-2.5-4.8-3.2-7.8-3.5-9.9c-0.2-1.1-0.5-3.4-0.1-6.4c0.4-3.4,1.5-5.5,2.5-7.3c1-1.8,1.9-3.6,2-6.4
                                c0.1-3.6-1-6.6-3-8.4C475.2,373.7,472.8,373.3,470.6,373.3L470.6,373.3z M449.8,382.1c0.2,0,0.4,0,0.6,0
                                c2.9-0.2,4.4-1.5,6.3-3.1c1.9-1.7,4.1-3.5,8.4-4.6c1.1-0.3,3.2-0.8,5.5-0.8c2.1,0,4.4,0.5,6.1,2c1.9,1.7,3,4.6,2.9,8.1
                                c-0.1,2.7-0.9,4.3-2,6.2c-1,1.8-2.1,3.9-2.6,7.4c-0.4,3,0,5.3,0.1,6.4c0.3,2.1,1,5.1,3.5,10c2.4,4.6,4.5,7,5.9,8.6
                                c1.4,1.6,2,2.4,1.8,3.8c-0.4,2.4-3,3.6-5.3,4.7c-1,0.5-1.9,0.9-2.6,1.4c-5.3,3.7-8.3,11.7-4.4,17.8c0.4,0.6,0.9,1.2,1.3,1.9
                                c1.5,2,3,4.1,3,6.5c0,0,0,0,0,0c0,3.6-3.4,6-6.7,6.7c-0.5,0.1-0.9,0.2-1.3,0.2c-1.9,0-3.5-0.9-5.2-1.9c-1.3-0.8-2.7-1.5-4.1-1.9
                                c-0.5-0.1-1-0.2-1.5-0.2c-2.4,0-4.4,1.2-6.3,2.4c-1,0.6-2,1.2-3,1.7c-2.2,1-4.7,1.5-7.3,1.5c-1.4,0-2.8-0.2-4.1-0.5
                                c-1.6-0.4-3.2-1.3-4.7-2.2c-2-1.2-4-2.4-6.3-2.4c-0.5,0-0.9,0-1.4,0.1c-2.9,0.6-4.9,3-6.1,4.7c-1,1.4-1.7,2.9-2.4,4.4
                                c-0.2,0.5-0.4,1-0.7,1.5c-0.4,0.9-0.9,1.8-1.6,2.4c-0.8,0.6-1.6,0.9-2.6,0.9c-4.3,0-9.8-5.5-11-6.9c-5.9-6.3-6.9-13.9-7.1-16
                                c-0.4-5.9,1.3-10.9,3.4-16.6c1.1-3.1,2.2-5.4,3-7.2c1.5-3.2,2.3-5,1.6-7.6c-0.7-2.6-2.4-3.9-3.8-5.1c-1.4-1.2-2.7-2.2-2.8-4.1
                                c-0.2-2.4,1.7-3.9,3.8-5.6c2.2-1.7,4.6-3.7,5.4-7.1c1-3.8-0.7-7-2.2-9.9c-1.5-2.8-2.9-5.5-1.5-8.3c1.5-3.1,5.4-4.9,8.5-4.9
                                c0.1,0,0.2,0,0.3,0c3.2,0.1,5.1,2.1,7,4c1.8,1.8,3.5,3.5,6,3.5c0.1,0,0.1,0,0.2,0c2.6-0.1,4-1.8,5.5-3.6
                                c1.5-1.8,3.1-3.7,5.9-4.2c0.4-0.1,0.8-0.1,1.2-0.1c2.4,0,4.2,1.3,6,2.6C444.6,380.6,446.7,382.1,449.8,382.1L449.8,382.1z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M479.9,426.1c-0.5,3-3.3,4.3-6.4,5.8c-3.1,1.5-6.7,3.2-8.1,7c-1.8,4.9,0.9,10.4,2.8,14.5
                                c1.4,3,2.5,5.1,1.4,6c-0.9,0.8-2.4-0.1-4.5-1.5c-2.8-1.8-6.7-4.2-11.5-3.8c-3.7,0.3-5.8,2.2-7.8,4.1c-2.1,1.9-4.1,3.7-7.6,3.8
                                c-4,0.2-6.9-2-9.4-3.8c-2.4-1.8-4.6-3.4-7.2-2.7c-3.1,0.8-4.5,4.2-5.8,7.1c-1.1,2.6-2.2,5.1-4.3,5.3c-1.1,0.1-2.4-0.4-3.7-1.5
                                c-2.8-2.4-6.1-7.8-6.6-14.1c-0.5-6.5,2.3-11.2,4.8-15.4c2.5-4.2,4.9-8.2,3.5-13.4c-0.7-2.7-2.2-4.6-3.5-6.3
                                c-1.5-2-2.9-3.8-2.2-6.1l0.2,0l-0.2,0c0.7-2.2,2.5-3.1,4.5-4.1c1.9-0.9,3.8-1.8,4.9-4.1c1.9-4-0.5-9.1-2.2-12.8
                                c-1.2-2.5-2-4.3-1.2-5c0.8-0.7,2.3,0.5,4.5,2.1c3,2.2,7.1,5.3,10.8,4.2c2.4-0.6,3.4-2.5,4.4-4.5c1.1-2,2.2-4.1,4.8-5.1
                                c3.1-1.2,5.7,0.3,8.7,2c2.7,1.6,5.9,3.4,10.3,3.7c6.4,0.6,11.5-2.2,15.2-4.2c2.7-1.4,4.6-2.5,5.7-1.4c1.3,1.2-0.1,3.7-2.1,7.2
                                c-2.7,4.8-6.4,11.5-4.8,18.4c1.2,5,4.6,8,7.7,10.7c2.6,2.3,4.9,4.3,4.9,7C480,425.5,480,425.8,479.9,426.1z M471.9,389.1
                                c1.8-3.2,3.2-5.7,2.1-6.8c-0.9-0.9-2.7,0.1-5.3,1.5c-3.7,2-8.8,4.8-15.4,4.2c-4.5-0.4-7.6-2.2-10.4-3.8c-3-1.7-5.4-3.1-8.4-2
                                c-2.5,0.9-3.6,3-4.6,4.9c-1.1,2-2.1,4-4.6,4.7c-3.9,1.1-8.1-2-11.1-4.3c-1.8-1.4-3.4-2.6-4-2.1c-0.6,0.5,0.3,2.4,1.3,4.6
                                c1.8,3.8,4.2,8.9,2.2,13.1c-1.1,2.3-3.1,3.3-5.1,4.2c-1.9,0.9-3.7,1.8-4.3,3.9c-0.6,2.2,0.6,3.8,2.1,5.8
                                c1.3,1.7,2.8,3.6,3.5,6.4c1.5,5.3-1,9.4-3.5,13.6c-2.6,4.3-5.2,8.8-4.7,15.2c0.5,6.2,3.7,11.5,6.5,13.9c1.2,1,2.4,1.5,3.4,1.5
                                c1.9-0.2,2.9-2.5,4-5.1c1.3-3,2.7-6.4,6-7.3c2.8-0.8,5.1,0.9,7.5,2.8c2.5,1.9,5.3,4,9.2,3.8c3.4-0.2,5.3-1.9,7.4-3.8
                                c2.1-1.9,4.2-3.8,8-4.1c4.9-0.4,8.8,2,11.7,3.9c2,1.2,3.4,2.1,4.1,1.5c0.9-0.8-0.2-2.9-1.5-5.6c-2-4.1-4.7-9.7-2.8-14.7
                                c1.5-3.9,5.1-5.7,8.3-7.2c3.1-1.5,5.7-2.7,6.2-5.5c0.5-2.9-1.9-5.1-4.7-7.5c-3.1-2.7-6.6-5.7-7.8-10.8c-0.3-1.2-0.4-2.4-0.4-3.6
                                C466.7,398.4,469.6,393.1,471.9,389.1z"/>
                            <path fill="#EFE7DA" d="M436.7,381.4c-0.7,0-1.5,0.1-2.3,0.4c-2.6,1-3.7,3.1-4.8,5.1c-1.1,2-2.1,3.9-4.4,4.5
                                c-0.5,0.1-1.1,0.2-1.6,0.2c-3.3,0-6.7-2.5-9.3-4.4c-1.7-1.3-3-2.2-3.9-2.2c-0.2,0-0.4,0.1-0.6,0.2c-0.8,0.7,0,2.5,1.2,5
                                c1.8,3.7,4.2,8.8,2.2,12.8c-1.1,2.2-3,3.2-4.9,4.1c-2,0.9-3.8,1.8-4.5,4.1l0.2,0l-0.2,0c-0.7,2.4,0.6,4.1,2.2,6.1
                                c1.3,1.7,2.7,3.6,3.5,6.3c1.4,5.2-1,9.2-3.5,13.4c-2.5,4.2-5.3,8.9-4.8,15.4c0.5,6.3,3.8,11.7,6.6,14.1c1.2,1,2.4,1.5,3.4,1.5
                                c0.1,0,0.2,0,0.3,0c2.1-0.2,3.2-2.7,4.3-5.3c1.3-2.9,2.7-6.3,5.8-7.1c0.5-0.1,0.9-0.2,1.3-0.2c2.1,0,3.9,1.4,5.9,2.9
                                c2.4,1.8,5.1,3.9,8.9,3.9c0.2,0,0.3,0,0.5,0c3.5-0.2,5.5-2,7.6-3.8c2-1.8,4.1-3.7,7.8-4.1c0.4,0,0.7-0.1,1.1-0.1
                                c4.2,0,7.7,2.2,10.4,3.9c1.6,1,2.8,1.8,3.7,1.8c0.3,0,0.6-0.1,0.8-0.3c1.1-0.9,0-3.1-1.4-6c-2-4-4.7-9.6-2.8-14.5
                                c1.4-3.8,5-5.5,8.1-7c3-1.4,5.8-2.8,6.4-5.8c0-0.3,0.1-0.6,0.1-0.8c0-2.7-2.3-4.7-4.9-7c-3-2.7-6.5-5.7-7.7-10.7
                                c-1.7-6.9,2.1-13.5,4.8-18.4c1.9-3.5,3.3-6,2.1-7.2c-0.3-0.3-0.7-0.4-1.1-0.4c-1.1,0-2.6,0.8-4.5,1.9c-3.4,1.8-7.8,4.3-13.5,4.3
                                c-0.6,0-1.2,0-1.7-0.1c-4.4-0.4-7.5-2.2-10.3-3.7C440.9,382.6,438.9,381.4,436.7,381.4L436.7,381.4z M423.6,392
                                c0.6,0,1.1-0.1,1.7-0.2c2.5-0.7,3.5-2.6,4.6-4.7c1.1-2,2.1-4,4.6-4.9c0.8-0.3,1.5-0.4,2.2-0.4c2.1,0,4,1.1,6.2,2.4
                                c2.8,1.6,5.9,3.4,10.4,3.8c0.6,0.1,1.2,0.1,1.8,0.1c5.7,0,10.2-2.5,13.6-4.3c1.9-1,3.3-1.8,4.4-1.8c0.4,0,0.7,0.1,0.9,0.3
                                c1.1,1.1-0.3,3.6-2.1,6.8c-2.3,4-5.2,9.3-5.2,15c0,1.2,0.1,2.4,0.4,3.6c1.2,5.1,4.7,8.1,7.8,10.8c2.8,2.4,5.2,4.6,4.7,7.5
                                c-0.5,2.8-3.1,4.1-6.2,5.5c-3.2,1.5-6.8,3.3-8.3,7.2c-1.9,5.1,0.8,10.6,2.8,14.7c1.3,2.7,2.4,4.9,1.5,5.6
                                c-0.2,0.1-0.4,0.2-0.6,0.2c-0.8,0-2-0.8-3.5-1.7c-2.7-1.7-6.2-3.9-10.5-3.9c-0.4,0-0.8,0-1.1,0.1c-3.8,0.3-5.9,2.3-8,4.1
                                c-2,1.8-4,3.6-7.4,3.8c-0.2,0-0.3,0-0.5,0c-3.7,0-6.3-2-8.7-3.8c-2-1.5-3.9-2.9-6.1-2.9c-0.5,0-0.9,0.1-1.4,0.2
                                c-3.3,0.9-4.7,4.3-6,7.3c-1.1,2.7-2.1,4.9-4,5.1c-0.1,0-0.1,0-0.2,0c-1,0-2-0.5-3.2-1.5c-2.8-2.3-6-7.7-6.5-13.9
                                c-0.5-6.4,2.1-10.9,4.7-15.2c2.6-4.3,5-8.3,3.5-13.6c-0.8-2.8-2.2-4.7-3.5-6.4c-1.5-2-2.8-3.6-2.1-5.8c0.6-2.1,2.4-3,4.3-3.9
                                c1.9-0.9,3.9-1.9,5.1-4.2c2-4.2-0.4-9.3-2.2-13.1c-1-2.2-1.9-4.1-1.3-4.6c0.1-0.1,0.2-0.1,0.4-0.1c0.8,0,2.1,1,3.7,2.2
                                C416.8,389.4,420.2,392,423.6,392L423.6,392z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M470.5,424c-0.4,2.2-2.4,3.1-4.6,4.2c-2.3,1.1-4.9,2.3-6.3,5.3c-1.9,4-0.3,8.7,0.8,12
                                c0.8,2.4,1.4,4.2,0.4,4.8c-0.9,0.6-2.1-0.4-3.6-1.7c-2-1.7-4.6-3.8-7.6-3.5c-2.7,0.3-4.2,2.4-5.7,4.7c-1.5,2.2-3.1,4.5-5.9,5
                                c-2.8,0.5-4.6-1.1-6.8-2.8c-2.1-1.8-4.6-3.8-8.4-4.1c-4.2-0.4-7.5,1.4-9.9,2.8c-1.7,0.9-3,1.6-3.7,0.9c-1-1,0.4-3.2,2.4-6.2
                                c3-4.7,7.6-11.7,5.9-18.7c-0.8-3.2-2.6-5.6-4.2-7.8c-1.8-2.4-3.3-4.3-2.3-6.3l0,0c0.7-1.4,2.1-1.8,3.6-2.3
                                c1.6-0.5,3.2-0.9,4.2-2.6c1.5-2.4,0.8-5.5,0.1-8c-0.5-2-0.9-3.5,0-4.2c1-0.7,2.6,0.4,4.4,1.6c2.2,1.5,4.6,3.1,6.6,2.3
                                c2-0.7,2.5-3.4,3-5.9c0.5-2.6,1-5,2.9-5.7c1.6-0.6,3,0.7,4.7,2.3c1.8,1.7,4.1,3.8,7.5,4.6c4.2,1,8-0.4,10.7-1.5
                                c2.3-0.9,4-1.5,5-0.5c1,1.1,0.2,2.8-0.9,5c-1.4,2.7-3,6.2-2.4,10.2c0.7,4.3,3.6,7,6.2,9.4c2.1,2,4,3.7,4,5.8
                                C470.6,423.5,470.5,423.8,470.5,424z M462.5,397.7c1.1-2.2,1.8-3.7,1-4.6c-0.8-0.9-2.4-0.3-4.7,0.6c-2.8,1.1-6.6,2.5-10.9,1.5
                                c-3.5-0.8-5.8-3-7.7-4.7c-1.7-1.6-2.9-2.7-4.3-2.2c-1.7,0.6-2.2,2.9-2.7,5.4c-0.5,2.6-1.1,5.4-3.2,6.2c-2.2,0.8-4.7-0.9-6.9-2.4
                                c-1.7-1.2-3.2-2.2-4-1.6c-0.7,0.5-0.3,2.1,0.1,3.8c0.7,2.5,1.5,5.7-0.2,8.2c-1.1,1.8-2.9,2.3-4.4,2.7c-1.5,0.4-2.7,0.8-3.3,2.1
                                l0,0c-0.9,1.8,0.5,3.6,2.3,6c1.6,2.2,3.5,4.6,4.3,7.9c0.2,1,0.4,2.1,0.4,3.1c0,6-3.7,11.8-6.3,15.8c-1.8,2.8-3.2,5-2.5,5.8
                                c0.5,0.5,1.7-0.1,3.3-1c2.5-1.3,5.8-3.2,10.1-2.8c4,0.3,6.4,2.4,8.6,4.2c2.1,1.7,3.9,3.2,6.5,2.8c2.7-0.5,4.3-2.7,5.7-4.9
                                c1.5-2.2,3.1-4.6,6-4.9c3.2-0.3,5.9,1.9,7.8,3.6c1.4,1.2,2.5,2.1,3.2,1.7c0.7-0.5,0.2-2.2-0.6-4.4c-1.1-3.4-2.7-8.2-0.8-12.3
                                c1.4-3.1,4.1-4.3,6.5-5.4c2.2-1,4-1.9,4.4-3.9c0.5-2.4-1.5-4.2-3.8-6.3c-2.6-2.4-5.6-5.1-6.3-9.6c-0.1-0.6-0.1-1.2-0.1-1.8
                                C460,402.9,461.4,399.9,462.5,397.7z"/>
                            <path fill="#EFE7DA" d="M436.6,387.8c-0.3,0-0.5,0-0.8,0.1c-1.9,0.6-2.4,3.1-2.9,5.7c-0.5,2.6-1.1,5.2-3,5.9
                                c-0.4,0.1-0.7,0.2-1.1,0.2c-1.8,0-3.7-1.3-5.5-2.5c-1.4-1-2.7-1.8-3.7-1.8c-0.3,0-0.5,0.1-0.7,0.2c-0.9,0.7-0.5,2.2,0,4.2
                                c0.6,2.5,1.4,5.6-0.1,8c-1.1,1.7-2.7,2.1-4.2,2.6c-1.5,0.4-2.9,0.8-3.6,2.3c-0.9,2,0.5,3.9,2.3,6.3c1.6,2.1,3.4,4.6,4.2,7.8
                                c1.6,7-2.9,14-5.9,18.7c-2,3-3.4,5.2-2.4,6.2c0.2,0.2,0.5,0.3,0.8,0.3c0.7,0,1.7-0.5,3-1.2c2.2-1.2,5.1-2.8,8.8-2.8
                                c0.4,0,0.7,0,1.1,0c3.9,0.3,6.3,2.3,8.4,4.1c1.9,1.6,3.6,2.9,5.8,2.9c0.3,0,0.6,0,1-0.1c2.9-0.5,4.4-2.8,5.9-5
                                c1.5-2.3,3-4.4,5.7-4.7c0.2,0,0.4,0,0.6,0c2.7,0,5.1,2,7,3.5c1.2,1,2.2,1.9,3,1.9c0.2,0,0.4,0,0.5-0.2c1-0.6,0.4-2.4-0.4-4.8
                                c-1.1-3.4-2.7-8-0.8-12c1.4-2.9,4-4.2,6.3-5.3c2.3-1.1,4.2-2,4.6-4.2c0.1-0.3,0.1-0.5,0.1-0.8c0-2.2-1.9-3.9-4-5.8
                                c-2.6-2.4-5.5-5.1-6.2-9.4c-0.6-4.1,1.1-7.5,2.4-10.2c1.1-2.2,1.9-3.9,0.9-5c-0.4-0.4-0.8-0.6-1.4-0.6c-0.9,0-2.2,0.5-3.6,1
                                c-2.1,0.8-4.8,1.8-7.8,1.8c-0.9,0-1.9-0.1-2.9-0.3c-3.5-0.8-5.7-2.9-7.5-4.6C439.1,388.9,437.9,387.8,436.6,387.8L436.6,387.8z
                                M428.8,400.1c0.4,0,0.8-0.1,1.2-0.2c2.1-0.8,2.7-3.5,3.2-6.2c0.5-2.5,1-4.8,2.7-5.4c0.2-0.1,0.5-0.1,0.7-0.1
                                c1.2,0,2.3,1,3.7,2.3c1.8,1.7,4.1,3.8,7.7,4.7c1,0.2,2,0.3,3,0.3c3.1,0,5.8-1,7.9-1.9c1.4-0.6,2.6-1,3.5-1
                                c0.5,0,0.9,0.1,1.2,0.4c0.9,0.9,0.1,2.5-1,4.6c-1.1,2.3-2.6,5.2-2.6,8.6c0,0.6,0,1.2,0.1,1.8c0.7,4.4,3.6,7.2,6.3,9.6
                                c2.3,2.1,4.3,3.9,3.8,6.3c-0.4,2-2.3,2.9-4.4,3.9c-2.4,1.1-5,2.4-6.5,5.4c-1.9,4.1-0.4,8.8,0.8,12.3c0.7,2.2,1.3,3.9,0.6,4.4
                                c-0.1,0.1-0.2,0.1-0.4,0.1c-0.7,0-1.6-0.8-2.8-1.8c-1.8-1.5-4.3-3.6-7.2-3.6c-0.2,0-0.4,0-0.6,0c-2.9,0.3-4.5,2.6-6,4.9
                                c-1.5,2.2-3,4.4-5.7,4.9c-0.3,0.1-0.6,0.1-0.9,0.1c-2.1,0-3.8-1.3-5.6-2.9c-2.2-1.8-4.7-3.8-8.6-4.2c-0.4,0-0.8,0-1.1,0
                                c-3.8,0-6.8,1.6-9,2.8c-1.2,0.7-2.2,1.2-2.8,1.2c-0.2,0-0.4-0.1-0.5-0.2c-0.8-0.8,0.6-3,2.5-5.8c2.6-4,6.3-9.8,6.3-15.8
                                c0-1-0.1-2.1-0.4-3.1c-0.8-3.3-2.6-5.7-4.3-7.9c-1.7-2.3-3.1-4.2-2.3-6c0.6-1.3,1.9-1.7,3.3-2.1c1.5-0.4,3.3-1,4.4-2.7
                                c1.6-2.5,0.8-5.7,0.2-8.2c-0.5-1.8-0.9-3.3-0.1-3.8c0.2-0.1,0.3-0.2,0.6-0.2c0.9,0,2.1,0.8,3.5,1.8
                                C424.9,398.7,426.9,400.1,428.8,400.1L428.8,400.1z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M463.5,423.3c-0.2,1.7-2.1,2.4-4.4,3.3c-2.5,1-5.3,2.1-6.2,4.7c-0.6,1.9,0.1,3.9,0.7,5.4
                                c0.6,1.4,1,2.7,0.3,3.4c-0.7,0.7-1.9,0.3-3.3-0.2c-1.5-0.5-3.3-1.2-5.3-0.6c-2.4,0.8-3.6,3.1-4.7,5.2c-1,1.9-1.9,3.8-3.7,3.9
                                c-1.3,0.1-2.1-0.7-3-1.8c-0.9-1-2.1-2.3-4.1-3.2c-3.1-1.3-6-0.6-8.2-0.1c-1.7,0.4-3.1,0.7-3.8-0.2c-0.8-1.1,0.3-2.7,1.7-4.8
                                c1.9-2.8,4.2-6.2,3.8-10.3c-0.4-3.4-2.6-6-4.3-8c-1.7-1.9-3-3.5-2.3-5c0.5-1.1,1.8-1.4,3.2-1.7c1.5-0.3,3.2-0.6,4.2-2.2
                                c1-1.5,0.8-3.1,0.6-4.6c-0.2-1.4-0.4-2.7,0.6-3.5c1-0.8,2.2-0.4,3.6,0.1c1.5,0.5,3,0.9,4.4,0.2c1.5-0.8,1.9-2.6,2.3-4.2
                                c0.3-1.4,0.6-2.7,1.7-2.9c1.1-0.3,1.9,0.8,2.9,2.1c1.1,1.4,2.5,3.2,4.7,3.9c2.9,0.9,5.8-0.5,8-1.6c1.8-0.9,3.1-1.6,4-0.8
                                c0.9,0.8,0.2,2.4-0.7,4.4c-1.2,2.6-2.6,5.9-1.5,9.3c0.9,3,3.5,4.7,5.6,6c1.7,1.1,3.3,2.1,3.3,3.6
                                C463.5,423.2,463.5,423.3,463.5,423.3z M455.9,404.1c0.8-1.9,1.5-3.3,0.8-4c-0.7-0.6-2,0-3.6,0.9c-2.3,1.2-5.2,2.6-8.3,1.6
                                c-2.3-0.7-3.7-2.6-4.9-4c-1-1.2-1.7-2.2-2.6-2c-0.8,0.2-1.1,1.4-1.4,2.7c-0.4,1.6-0.8,3.5-2.5,4.4l-0.1-0.1l0.1,0.1
                                c-1.5,0.8-3.2,0.3-4.6-0.2c-1.3-0.4-2.5-0.8-3.3-0.1c-0.8,0.7-0.6,1.8-0.5,3.2c0.2,1.5,0.4,3.3-0.6,4.8c-1.1,1.7-2.8,2-4.4,2.3
                                c-1.3,0.3-2.5,0.5-3,1.5c-0.6,1.3,0.6,2.8,2.2,4.7c1.8,2.1,4,4.7,4.4,8.2c0.5,4.2-2,7.9-3.8,10.6c-1.3,2-2.4,3.5-1.7,4.4
                                c0.6,0.7,1.8,0.4,3.5,0.1c2.2-0.5,5.2-1.2,8.4,0.1c2.1,0.9,3.2,2.2,4.2,3.3c0.9,1.1,1.6,1.8,2.8,1.7c1.6-0.1,2.4-1.8,3.4-3.8
                                c1.1-2.1,2.3-4.6,4.9-5.4c2-0.6,4,0.1,5.5,0.6c1.3,0.5,2.3,0.9,2.9,0.3c0.6-0.6,0.2-1.7-0.3-3.1c-0.6-1.6-1.4-3.6-0.7-5.7
                                c0.9-2.8,3.8-3.9,6.4-4.9c2.2-0.9,4-1.6,4.2-3.1c0.2-1.4-1.3-2.3-3.1-3.5c-2.1-1.4-4.7-3.1-5.7-6.2c-0.3-0.8-0.4-1.7-0.4-2.5
                                C454,408.5,455.1,406.1,455.9,404.1z"/>
                            <path fill="#EFE7DA" d="M437.6,396.3c-0.1,0-0.2,0-0.3,0c-1,0.3-1.3,1.5-1.7,2.9c-0.4,1.6-0.8,3.4-2.3,4.2
                                c-0.5,0.3-1.1,0.4-1.6,0.4c-0.9,0-1.8-0.3-2.7-0.6c-0.8-0.3-1.6-0.5-2.3-0.5c-0.5,0-0.9,0.1-1.3,0.5c-0.9,0.8-0.8,2-0.6,3.5
                                c0.2,1.5,0.4,3.1-0.6,4.6c-1,1.5-2.7,1.9-4.2,2.2c-1.4,0.3-2.7,0.5-3.2,1.7c-0.7,1.5,0.6,3.1,2.3,5c1.8,2.1,4,4.6,4.3,8
                                c0.4,4.1-1.9,7.6-3.8,10.3c-1.4,2.1-2.5,3.7-1.7,4.8c0.3,0.4,0.8,0.6,1.4,0.6c0.7,0,1.5-0.2,2.4-0.4c1.2-0.3,2.7-0.6,4.3-0.6
                                c1.2,0,2.5,0.2,3.9,0.8c2,0.8,3.2,2.1,4.1,3.2c0.9,1,1.6,1.8,2.8,1.8c0.1,0,0.2,0,0.2,0c1.8-0.2,2.7-2,3.7-3.9
                                c1-2.1,2.2-4.4,4.7-5.2c0.5-0.2,1.1-0.2,1.6-0.2c1.4,0,2.6,0.5,3.7,0.9c0.8,0.3,1.6,0.6,2.2,0.6c0.4,0,0.8-0.1,1-0.4
                                c0.8-0.8,0.3-2-0.3-3.4c-0.6-1.6-1.3-3.5-0.7-5.4c0.8-2.6,3.7-3.7,6.2-4.7c2.3-0.9,4.2-1.7,4.4-3.3c0-0.1,0-0.2,0-0.2
                                c0-1.4-1.5-2.4-3.3-3.6c-2.1-1.3-4.6-3-5.6-6c-1.1-3.3,0.4-6.6,1.5-9.3c0.9-2,1.6-3.6,0.7-4.4c-0.2-0.2-0.5-0.3-0.9-0.3
                                c-0.8,0-1.9,0.5-3.1,1.1c-1.7,0.9-3.8,1.9-6,1.9c-0.7,0-1.3-0.1-2-0.3c-2.2-0.7-3.6-2.5-4.7-3.9
                                C439.3,397.2,438.5,396.3,437.6,396.3L437.6,396.3z M433.4,403.7c1.6-0.9,2.1-2.8,2.5-4.4c0.3-1.3,0.6-2.5,1.4-2.7
                                c0.1,0,0.2,0,0.2,0c0.8,0,1.5,0.9,2.3,2c1.1,1.5,2.6,3.3,4.9,4c0.7,0.2,1.4,0.3,2.1,0.3c2.3,0,4.4-1.1,6.2-1.9
                                c1.2-0.6,2.2-1.1,2.9-1.1c0.3,0,0.5,0.1,0.7,0.2c0.7,0.6,0.1,2.1-0.8,4c-0.8,1.9-1.9,4.4-1.9,7c0,0.8,0.1,1.7,0.4,2.5
                                c1,3.1,3.6,4.8,5.7,6.2c1.8,1.2,3.3,2.1,3.1,3.5c-0.2,1.5-2,2.2-4.2,3.1c-2.6,1-5.5,2.2-6.4,4.9c-0.7,2,0.1,4,0.7,5.7
                                c0.5,1.4,0.9,2.5,0.3,3.1c-0.2,0.2-0.5,0.3-0.8,0.3c-0.6,0-1.3-0.3-2.1-0.6c-1.1-0.4-2.4-0.9-3.8-0.9c-0.5,0-1.1,0.1-1.7,0.3
                                c-2.6,0.8-3.8,3.2-4.9,5.4c-1,1.9-1.8,3.6-3.4,3.8c-0.1,0-0.1,0-0.2,0c-1,0-1.7-0.7-2.6-1.7c-0.9-1.1-2.1-2.4-4.2-3.3
                                c-1.4-0.6-2.7-0.8-4-0.8c-1.7,0-3.2,0.3-4.4,0.6c-0.9,0.2-1.7,0.4-2.3,0.4c-0.5,0-0.9-0.1-1.1-0.4c-0.7-0.9,0.4-2.5,1.7-4.4
                                c1.8-2.7,4.3-6.3,3.8-10.6c-0.4-3.5-2.6-6.1-4.4-8.2c-1.6-1.9-2.8-3.3-2.2-4.7c0.5-1,1.6-1.2,3-1.5c1.5-0.3,3.3-0.7,4.4-2.3
                                c1-1.6,0.8-3.3,0.6-4.8c-0.2-1.3-0.3-2.5,0.5-3.2c0.3-0.3,0.7-0.4,1.1-0.4c0.6,0,1.4,0.2,2.2,0.5c0.9,0.3,1.9,0.6,2.8,0.6
                                C432.2,404.2,432.8,404.1,433.4,403.7l-0.1-0.1L433.4,403.7L433.4,403.7z"/>
                        </g>
                        <g filter="url(#ds-soft)">
                            
                                <image overflow="visible" opacity="0.4" width="136" height="176" href="data:image/png;base64,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" transform="matrix(1 0 0 1 343 321)">
                            </image>
                            <g>
                                <g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M406.8,361.4c0-0.4-1-25.8-1-25.8
                                            l-41.1,4.4l-6.1,36.8l3,50.8l21.1-1c0,0,3.2-54.9,3.2-55.3S406.8,361.4,406.8,361.4z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M407,361.7c-7.8,3.5-19.5,8.9-20.7,9.7
                                            c-0.2,3.1-3.1,53-3.2,55.2l0,0.3l-21.7,1l-3-51.2l0,0l6.2-37l41.7-4.4l0,0.4c0,1,1,25.4,1,25.8v0.2L407,361.7z M365,340.3
                                            l-6.1,36.5l3,50.5l20.5-0.9c0.3-4.4,3.2-54.4,3.2-55c0-0.3,0-0.5,10.6-5.4c4.6-2.1,9.2-4.2,10.3-4.7
                                            c-0.1-2-0.6-16.9-0.9-25.2L365,340.3z M386.3,371.3C386.3,371.3,386.3,371.3,386.3,371.3
                                            C386.3,371.3,386.3,371.3,386.3,371.3z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M347.9,423.5v-60.3
                                            c0-20.5,16.6-37,37-37l14.2,0V345h-9.7c-12.5,0-22.6,10.1-22.6,22.6v55.8H347.9z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M389.4,345.4
                                            c-12.3,0-22.3,10-22.3,22.3v56.2h-19.5v-60.6c0-10,3.9-19.4,10.9-26.4c7.1-7.1,16.4-10.9,26.4-10.9l14.5,0v19.5H389.4z
                                            M385,326.5c-9.8,0-19,3.8-26,10.8c-6.9,6.9-10.8,16.2-10.8,26v59.9h18.2v-55.5c0-12.6,10.3-22.9,22.9-22.9h9.4v-18.2
                                            L385,326.5z"/>
                                    </g>
                                    <g>
                                        <polygon fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" points="461.9,355.1 469.2,344.5 
                                            399.1,345 399.1,355.1 							"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M462.1,355.5h-63.3l0-10.8l71-0.5
                                            L462.1,355.5z M399.4,354.8h62.3l6.8-9.9l-69.1,0.5L399.4,354.8z"/>
                                    </g>
                                    <g>
                                        <polygon fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" points="366.8,423.5 376.9,423.5 
                                            376.9,479.7 365.8,486.9 							"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M365.5,487.5l1-64.4l10.8,0v56.7
                                            L365.5,487.5z M367.1,423.8l-0.9,62.5l10.4-6.7v-55.7L367.1,423.8z"/>
                                    </g>
                                    <g>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M399.1,355.1v24.4c0,1.2,1,2.2,2.2,2.2
                                            h26.9c3.9,0,7.7,0.5,11.5,1.6h0c10.3,2.9,20.6-4.4,21.4-15.1l1-13.1H399.1z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M461.3,368.2c-0.4,5.2-3,9.9-7.3,12.8
                                            c-4.2,3-9.5,3.9-14.5,2.5c-3.7-1-7.5-1.5-11.4-1.5h-26.9c-1.4,0-2.5-1.1-2.5-2.5v-24.8h63.5L461.3,368.2z M399.4,379.6
                                            c0,1,0.8,1.8,1.8,1.8h26.9c3.9,0,7.8,0.5,11.6,1.6c4.8,1.3,9.9,0.4,14-2.4c4.1-2.9,6.6-7.4,7-12.4l0.9-12.7h-62.1V379.6z"/>
                                    </g>
                                    <g>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M399.1,355.1V421
                                            c0,1.4-1.1,2.5-2.5,2.5h-19.7v-51c0-9.6,7.7-17.3,17.3-17.3L399.1,355.1z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M396.6,423.8h-20.1v-51.4
                                            c0-9.7,7.9-17.6,17.6-17.6h5.3V421C399.4,422.5,398.2,423.8,396.6,423.8z M394.2,355.5c-9.4,0-17,7.6-17,17v50.7h19.4
                                            c1.2,0,2.1-1,2.1-2.1v-65.5H394.2z"/>
                                    </g>
                                    <g>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M376.9,423.5h19.6
                                            c1.5,0,2.6,1.2,2.6,2.6v15.6c0,4.1,0.5,8.1,1.5,12l2.7,10.4c2,7.9-3.9,15.6-12.1,15.6h-14.4V423.5z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M401.3,475.1c-2.4,3.1-6.1,5-10.1,5
                                            h-14.7v-56.9h19.9c1.6,0,3,1.3,3,3v15.6c0,4,0.5,8,1.5,11.9l2.7,10.4c0.3,1.1,0.4,2.1,0.4,3.2
                                            C404,470.1,403.1,472.8,401.3,475.1z M377.2,479.4h14c3.8,0,7.3-1.7,9.6-4.7c2.3-3,3.1-6.8,2.2-10.4l-2.7-10.4
                                            c-1-3.9-1.5-8-1.5-12.1v-15.6c0-1.3-1-2.3-2.3-2.3h-19.2V479.4z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M362.9,487.6h1.2
                                            c1.5,0,2.7-1.2,2.7-2.7v-61.4h-18.9v49.2C347.9,480.9,354.6,487.6,362.9,487.6z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M363.9,487.9c-9,0-16.3-7.3-16.3-16.3
                                            v-48.5h19.5v61.5C367.1,486.5,365.6,487.9,363.9,487.9z M348.2,423.8v47.8c0,8.6,7,15.6,15.6,15.6c1.4,0,2.6-1.2,2.6-2.6
                                            v-60.9H348.2z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M470.5,341.1v1.2
                                            c0,1.5-1.2,2.7-2.7,2.7h-68.6v-18.9h56.4C463.8,326.2,470.5,332.9,470.5,341.1z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M467.6,345.4h-68.8v-19.5h55.9
                                            c8.9,0,16.2,7.3,16.2,16.2v0.1C470.8,343.9,469.4,345.4,467.6,345.4z M399.4,344.7h68.1c1.4,0,2.6-1.1,2.6-2.6V342
                                            c0-8.6-7-15.5-15.5-15.5h-55.2V344.7z"/>
                                    </g>
                                    <g>
                                        <path fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M366,461.6c-0.2-0.7-0.4-1.4-0.6-2.1
                                            c-0.2-1.1-0.5-2.1-0.7-2.9c-0.4-1.4-0.6-1.8-0.9-2.2c-0.8-1-1.7-1.1-1.6-1.5c0.1-0.3,0.6-0.4,1.4-0.5
                                            c0.7-0.1,1.4-0.4,2.1-0.8c0.9-0.5,2.3-1.3,3.8-2c2.6-1.2,2.9-1.1,4.7-1.6c1.7-0.4,2.6-0.1,3.8-0.9c0.9-0.6,1.1-1.3,1.6-1.2
                                            c0.6,0,0.8,0.9,0.9,1.7c0.3,1.5,0.2,1.5,0.4,2.5c0.1,0.3,0.1,0.5,0.2,0.7c0.6,1.5,1.4,2.6,1.4,2.6c1.7,2.3,5.1,10.7,5.5,13.5
                                            c0,0,0.2,1.4,0.8,2.9c0.1,0.3,0.3,0.6,0.3,0.6c0,0.1,0.1,0.2,0.3,0.5c0.2,0.3,0.4,0.5,0.5,0.7c0,0,0.3,0.4,0.6,0.9
                                            c0.4,0.7,0.9,1.5,0.5,1.9c-0.3,0.4-0.9,0-2,0.3c-0.9,0.2-1.1,0.6-3.3,2.1c-0.8,0.5-1.2,0.8-1.9,1.1c-0.2,0.1-1.1,0.5-2.6,1.1
                                            c-2.3,0.8-2.5,0.6-4.1,1.3c-1.7,0.8-2,0.9-2,0.9c-0.9,0.4-1.2,0.7-1.4,0.6c-0.4-0.2,0.1-1,0.1-2.2c0-0.7-0.3-1.1-0.9-2.2
                                            c-1.1-1.8-1.6-2.8-2-3.3C370.2,472.6,368.7,469.4,366,461.6z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M391.6,474.6c-0.3,0.3-0.6,0.3-1,0.3
                                            c-0.3,0-0.7,0-1.2,0.1c-0.5,0.1-0.7,0.3-1.4,0.7c-0.4,0.3-1,0.7-1.9,1.3c-0.7,0.5-1.2,0.8-1.9,1.1c-0.7,0.3-1.6,0.7-2.6,1.1
                                            c-1.1,0.4-1.8,0.5-2.3,0.7c-0.6,0.1-1,0.2-1.8,0.6c-1.7,0.7-2,0.9-2,0.9c-0.2,0.1-0.4,0.2-0.5,0.3c-0.5,0.3-0.8,0.4-1.1,0.3
                                            c-0.5-0.2-0.4-0.7-0.3-1.2c0.1-0.4,0.1-0.8,0.1-1.3c0-0.6-0.2-1-0.8-2c-1.1-1.8-1.6-2.7-2-3.3c-1.3-1.6-3-5.7-5.2-12.4
                                            c-0.2-0.7-0.4-1.4-0.6-2.1c-0.2-1-0.4-1.9-0.7-2.8c-0.4-1.4-0.5-1.7-0.8-2.1c-0.4-0.4-0.7-0.7-1-0.9
                                            c-0.4-0.2-0.7-0.5-0.6-0.9c0.2-0.4,0.7-0.6,1.6-0.8c0.7-0.1,1.4-0.4,2-0.7c0.9-0.5,2.3-1.3,3.8-2c2.1-1,2.7-1.1,3.7-1.3
                                            c0.3-0.1,0.6-0.1,1-0.2c0.7-0.2,1.2-0.2,1.7-0.3c0.7-0.1,1.3-0.1,2-0.6c0.4-0.2,0.6-0.5,0.8-0.7c0.3-0.3,0.6-0.6,1-0.6
                                            c0.8,0,1.1,1.2,1.2,2c0.2,0.8,0.2,1.2,0.3,1.5c0,0.3,0.1,0.5,0.2,1c0.1,0.2,0.1,0.4,0.2,0.6c0.6,1.4,1.3,2.5,1.4,2.6
                                            c1.7,2.4,5.1,10.7,5.6,13.6c0,0,0.2,1.4,0.8,2.8c0.1,0.3,0.3,0.5,0.3,0.6l0,0c0.1,0.2,0.2,0.3,0.3,0.5
                                            c0.2,0.2,0.3,0.4,0.4,0.5c0.1,0.1,0.1,0.1,0.2,0.2c0,0,0.3,0.4,0.6,0.9c0.3,0.6,0.7,1.2,0.7,1.7
                                            C391.8,474.2,391.7,474.4,391.6,474.6z M387.9,467c-0.4-2.7-3.8-11.1-5.5-13.3c-0.1-0.1-0.2-0.4-0.5-0.8
                                            c-0.3-0.4-0.6-1.1-1-1.9c-0.1-0.2-0.2-0.4-0.2-0.7c-0.1-0.5-0.2-0.8-0.2-1.1c0-0.3-0.1-0.7-0.2-1.4c-0.1-0.5-0.3-1.4-0.6-1.5
                                            c-0.1,0-0.3,0.1-0.5,0.4c-0.2,0.2-0.5,0.5-0.9,0.8c-0.8,0.5-1.6,0.6-2.3,0.7c-0.5,0-1,0.1-1.6,0.2c-0.4,0.1-0.7,0.2-1,0.2
                                            c-1,0.2-1.6,0.4-3.6,1.3c-1.5,0.7-2.9,1.5-3.8,2c-0.7,0.4-1.4,0.7-2.2,0.8c-0.3,0.1-0.9,0.2-1.1,0.3c0.1,0.1,0.2,0.1,0.3,0.2
                                            c0.3,0.2,0.8,0.5,1.2,1c0.4,0.5,0.6,0.9,1,2.3c0.3,0.9,0.5,1.9,0.7,2.9c0.1,0.7,0.3,1.4,0.6,2l0,0c2.2,6.5,3.9,10.7,5.1,12.2
                                            c0.4,0.6,1,1.5,2.1,3.3c0.6,1,0.9,1.5,0.9,2.3c0,0.6-0.1,1-0.1,1.4c0,0.1-0.1,0.3-0.1,0.4c0.1,0,0.3-0.1,0.5-0.2
                                            c0.2-0.1,0.3-0.2,0.6-0.3c0,0,0.4-0.2,2-0.9c0.9-0.4,1.3-0.5,1.9-0.6c0.5-0.1,1.1-0.3,2.2-0.6c1-0.3,1.9-0.7,2.5-1
                                            c0.7-0.3,1.1-0.6,1.8-1.1c0.9-0.6,1.4-1,1.8-1.3c0.6-0.5,1-0.7,1.6-0.9c0.6-0.1,1-0.1,1.4-0.1c0.3,0,0.4,0,0.5,0
                                            c0.2-0.2-0.3-1.1-0.6-1.5c-0.3-0.5-0.6-0.8-0.6-0.8c-0.1-0.1-0.1-0.1-0.2-0.2c-0.1-0.1-0.2-0.3-0.4-0.5
                                            c-0.1-0.2-0.2-0.4-0.3-0.5c0-0.1-0.2-0.3-0.3-0.7C388.2,468.6,387.9,467.2,387.9,467L387.9,467z"/>
                                    </g>
                                    <g>
                                        <path fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M442.3,360.1c-0.6-0.3-1.3-0.7-1.9-1.1
                                            c-1-0.6-1.8-1.1-2.5-1.5c-1.3-0.7-1.6-0.9-2.2-0.9c-1.2-0.1-2,0.4-2.2,0c-0.1-0.3,0.1-0.7,0.6-1.4c0.4-0.6,0.7-1.3,0.9-2
                                            c0.3-1,0.7-2.5,1.3-4.1c1-2.7,1.2-2.8,2.2-4.4c0.9-1.5,1.8-1.9,2.1-3.3c0.2-1-0.1-1.7,0.3-2c0.4-0.4,1.2,0.1,1.9,0.5
                                            c1.3,0.8,1.2,0.9,2.1,1.5c0.2,0.1,0.4,0.2,0.6,0.3c1.5,0.6,2.9,0.9,2.9,0.9c2.8,0.4,11.2,3.9,13.4,5.6c0,0,1.2,0.8,2.6,1.4
                                            c0.3,0.1,0.7,0.2,0.7,0.2c0.1,0,0.3,0.1,0.6,0.1c0.4,0.1,0.6,0.1,0.9,0.1c0,0,0.5,0.1,1,0.2c0.8,0.2,1.7,0.4,1.7,1
                                            c0,0.5-0.6,0.6-1.2,1.6c-0.5,0.8-0.3,1.2-0.9,3.8c-0.2,0.9-0.3,1.4-0.5,2.1c-0.1,0.2-0.4,1.1-1.1,2.6c-1.1,2.2-1.4,2.2-2,3.8
                                            c-0.7,1.8-0.8,2-0.8,2c-0.3,0.9-0.3,1.3-0.6,1.4c-0.4,0.2-0.7-0.8-1.5-1.6c-0.5-0.5-1-0.6-2.2-0.9c-2.1-0.5-3.1-0.8-3.8-0.9
                                            C453.1,364.9,449.8,363.8,442.3,360.1z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M469.1,352.1c-0.2,0.2-0.5,0.5-0.8,0.9
                                            c-0.3,0.4-0.3,0.7-0.4,1.5c-0.1,0.5-0.2,1.2-0.4,2.2c-0.2,0.8-0.3,1.4-0.5,2.1c-0.2,0.7-0.6,1.6-1.1,2.6
                                            c-0.5,1.1-0.9,1.6-1.1,2.1c-0.3,0.5-0.5,0.9-0.9,1.7c-0.7,1.7-0.8,2-0.8,2c-0.1,0.2-0.1,0.4-0.2,0.6c-0.2,0.6-0.3,0.9-0.6,1
                                            c-0.5,0.2-0.8-0.2-1-0.7c-0.2-0.3-0.5-0.7-0.8-1c-0.5-0.4-0.9-0.5-2-0.8c-2-0.5-3.1-0.8-3.7-0.9c-2-0.3-6.1-1.9-12.5-5.1l0,0
                                            c-0.7-0.3-1.3-0.7-1.9-1.1c-0.8-0.5-1.7-1.1-2.5-1.5c-1.2-0.7-1.6-0.8-2-0.9c-0.6-0.1-1,0-1.4,0.1c-0.4,0.1-0.9,0.2-1.1-0.2
                                            c-0.2-0.4,0.1-0.9,0.6-1.7c0.4-0.6,0.7-1.2,0.9-1.9c0.3-1,0.7-2.5,1.3-4.1c0.8-2.2,1.1-2.7,1.7-3.6c0.2-0.2,0.3-0.5,0.5-0.9
                                            c0.4-0.6,0.7-1,1-1.4c0.5-0.6,0.9-1,1-1.8c0.1-0.4,0.1-0.8,0.1-1.1c0-0.4,0-0.8,0.3-1.1c0.6-0.5,1.6,0.1,2.3,0.5
                                            c0.7,0.4,1,0.7,1.2,0.9c0.2,0.2,0.4,0.3,0.8,0.6c0.2,0.1,0.4,0.2,0.6,0.3c1.4,0.6,2.8,0.8,2.8,0.8c2.9,0.5,11.2,4,13.6,5.7
                                            c0,0,1.1,0.8,2.5,1.4c0.3,0.1,0.6,0.2,0.6,0.2c0.1,0,0.3,0.1,0.5,0.1c0.3,0,0.4,0.1,0.6,0.1c0.1,0,0.2,0,0.3,0l0.1,0l0,0
                                            c0.2,0,0.6,0.1,1,0.2c0.9,0.2,1.9,0.5,2,1.2c0,0,0,0,0,0.1C469.6,351.6,469.3,351.8,469.1,352.1z M466.2,350.3
                                            c-0.2,0-0.4,0-0.7-0.1c-0.3-0.1-0.5-0.1-0.6-0.1l0,0c-0.2,0-0.6-0.2-0.7-0.2c-1.5-0.6-2.6-1.4-2.7-1.5
                                            c-2.2-1.6-10.6-5.1-13.3-5.5l0,0c-0.3,0-1.6-0.3-2.9-0.9c-0.2-0.1-0.4-0.2-0.7-0.3c-0.4-0.3-0.6-0.4-0.9-0.6
                                            c-0.3-0.2-0.5-0.4-1.2-0.8c-0.4-0.3-1.2-0.8-1.5-0.6c-0.1,0.1-0.1,0.3-0.1,0.6c0,0.3,0,0.7-0.1,1.2c-0.2,1-0.7,1.5-1.2,2.1
                                            c-0.3,0.4-0.6,0.8-1,1.3c-0.2,0.4-0.4,0.6-0.5,0.9c-0.6,0.9-0.9,1.4-1.6,3.4c-0.6,1.6-1,3.1-1.3,4.1c-0.2,0.7-0.5,1.5-1,2.1
                                            c-0.2,0.2-0.5,0.8-0.6,1c0.1,0,0.2,0,0.3-0.1c0.4-0.1,0.9-0.2,1.6-0.1c0.6,0.1,1,0.2,2.3,0.9c0.8,0.5,1.7,1,2.5,1.5
                                            c0.6,0.4,1.2,0.7,1.8,1.1c6.2,3.1,10.3,4.8,12.2,5c0.7,0.1,1.7,0.4,3.8,0.9c1.1,0.3,1.7,0.5,2.3,1c0.4,0.4,0.7,0.8,0.9,1.1
                                            c0.1,0.1,0.2,0.3,0.3,0.4c0-0.1,0.1-0.3,0.2-0.5c0.1-0.2,0.1-0.4,0.2-0.6c0,0,0.1-0.3,0.8-2.1c0.3-0.9,0.6-1.3,0.9-1.8
                                            c0.3-0.5,0.6-1,1.1-2c0.5-0.9,0.8-1.8,1-2.5c0.2-0.7,0.3-1.2,0.5-2.1c0.2-1,0.3-1.7,0.4-2.2c0.1-0.8,0.2-1.2,0.5-1.7
                                            c0.3-0.5,0.6-0.8,0.9-1c0.2-0.2,0.3-0.3,0.3-0.4c0-0.3-1-0.5-1.5-0.7c-0.5-0.1-0.9-0.2-1-0.2l0,0
                                            C466.4,350.3,466.3,350.3,466.2,350.3z"/>
                                    </g>
                                    <g>
                                        <g>
                                            <path fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M383.8,443.5c0,2.7-0.3,3.2-0.1,4.8
                                                c0.2,1.3,0.4,1.3,0.7,3.2c0.2,1,0.4,2.2-0.1,2.5c-0.4,0.3-1-0.4-2.1-0.6c-1.5-0.3-2.2,0.6-4,1c-1.9,0.4-2.1,0.7-5.1,0.6
                                                c-1.8,0-3.4-0.2-4.5-0.3c-0.8-0.1-1.5,0-2.3,0.2c-0.8,0.2-1.3,0.4-1.5,0.1c-0.3-0.4,0.5-1.1,0.8-2.6c0.2-1,0.1-1.7-0.1-3
                                                c-0.1-0.9-0.8-2.8-0.9-4.9c-0.1-2.1,0.4-4.1,0.4-5c0.1-1.4,0.1-2.1-0.1-3c-0.4-1.5-1.3-2.1-1-2.6c0.2-0.3,0.7-0.2,1.6-0.1
                                                c0.8,0.1,1.5,0.1,2.3,0c1-0.2,2.7-0.5,4.4-0.7c3-0.3,3.2-0.1,5.1,0.2c1.8,0.2,2.6,1.1,4.1,0.7c1.1-0.3,1.6-1,2-0.8
                                                c0.5,0.3,0.4,1.5,0.3,2.5c-0.2,1.9-0.3,1.9-0.4,3.2C383.2,440.4,383.5,440.8,383.8,443.5z"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M384.5,454.3
                                                c-0.4,0.3-0.8,0.1-1.2-0.1c-0.3-0.1-0.6-0.3-1.1-0.4c-0.8-0.2-1.4,0.1-2.1,0.4c-0.5,0.2-1,0.5-1.7,0.6
                                                c-0.4,0.1-0.8,0.2-1.1,0.3c-1.1,0.3-1.7,0.4-4.1,0.4c-1.8,0-3.4-0.2-4.5-0.3c-0.7-0.1-1.4,0-2.1,0.2c-0.8,0.2-1.5,0.4-1.9,0
                                                c-0.3-0.4-0.1-0.8,0.1-1.2c0.2-0.4,0.4-0.9,0.6-1.7c0.2-0.9,0.1-1.6-0.1-2.9c0-0.3-0.1-0.6-0.2-1c-0.3-1-0.6-2.4-0.7-3.9
                                                c-0.1-1.5,0.1-2.9,0.3-4c0.1-0.4,0.1-0.8,0.1-1.1c0.1-1.4,0.1-2-0.1-2.9c-0.2-0.7-0.5-1.2-0.7-1.6c-0.3-0.5-0.5-0.8-0.3-1.2
                                                c0.3-0.5,1.1-0.4,1.9-0.2c0.7,0.1,1.4,0.1,2.2,0c1.1-0.2,2.7-0.5,4.5-0.7c2.4-0.2,3-0.1,4.1,0c0.3,0,0.6,0.1,1.1,0.2
                                                c0.7,0.1,1.3,0.3,1.8,0.5c0.7,0.3,1.3,0.5,2.2,0.2c0.4-0.1,0.8-0.3,1.1-0.5c0.4-0.2,0.8-0.5,1.2-0.3
                                                c0.7,0.4,0.6,1.7,0.5,2.8c-0.1,1-0.2,1.5-0.3,1.9c-0.1,0.4-0.1,0.7-0.2,1.3c-0.1,0.9,0,1.4,0.2,2.1c0.1,0.6,0.2,1.3,0.3,2.5
                                                l0,0c0,1.2-0.1,1.9-0.1,2.6c-0.1,0.8-0.1,1.3,0,2.1c0.1,0.6,0.2,0.9,0.3,1.3c0.1,0.4,0.2,0.9,0.4,1.9
                                                c0.1,0.6,0.2,1.1,0.2,1.7C385,453.6,384.9,454,384.5,454.3z M383.4,446c0-0.6,0.1-1.3,0.1-2.5c-0.1-1.2-0.2-1.9-0.3-2.5
                                                c-0.1-0.8-0.2-1.3-0.2-2.3c0-0.6,0.1-1,0.2-1.4c0.1-0.4,0.2-0.9,0.3-1.9c0.1-0.6,0.2-2-0.2-2.2c-0.1,0-0.3,0.1-0.6,0.2
                                                c-0.3,0.2-0.7,0.4-1.2,0.6c-1,0.3-1.8,0-2.6-0.2c-0.5-0.2-1-0.3-1.7-0.4c-0.4-0.1-0.8-0.1-1.1-0.2c-1.1-0.2-1.7-0.3-4,0
                                                c-1.7,0.2-3.4,0.5-4.4,0.7c-0.8,0.2-1.6,0.2-2.4,0c-0.3-0.1-1.1-0.2-1.2-0.1c0,0.1,0.1,0.3,0.3,0.5c0.2,0.4,0.6,1,0.8,1.8
                                                c0.3,1,0.2,1.8,0.1,3.2c0,0.3-0.1,0.7-0.1,1.1c-0.2,1-0.4,2.4-0.3,3.8c0.1,1.4,0.4,2.8,0.6,3.8c0.1,0.4,0.2,0.8,0.2,1.1
                                                c0.2,1.4,0.3,2.1,0.1,3.2c-0.2,0.8-0.4,1.4-0.6,1.8c-0.1,0.2-0.2,0.5-0.2,0.5c0.1,0.1,0.9-0.1,1.2-0.2
                                                c0.8-0.2,1.6-0.3,2.4-0.2c1.1,0.1,2.7,0.3,4.5,0.3c2.3,0,2.9-0.1,3.9-0.4c0.3-0.1,0.6-0.2,1.1-0.3c0.6-0.1,1.1-0.4,1.6-0.6
                                                c0.8-0.3,1.5-0.7,2.5-0.4c0.5,0.1,0.9,0.3,1.3,0.5c0.3,0.1,0.5,0.2,0.6,0.2c0.3-0.2,0.1-1.5,0-2.2c-0.2-1-0.3-1.4-0.4-1.8
                                                c-0.1-0.4-0.2-0.7-0.3-1.3c-0.1-0.5-0.1-0.9-0.1-1.2C383.3,446.8,383.3,446.4,383.4,446z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M443.3,347c2.2,1.6,2.4,2.1,3.9,2.8
                                                c1.2,0.6,1.2,0.4,3,1.2c0.9,0.4,2,0.9,2,1.5c0,0.5-0.9,0.6-1.7,1.4c-1.1,1.1-0.8,2.2-1.5,3.9c-0.8,1.8-0.6,2.1-2.4,4.5
                                                c-1,1.4-2.1,2.7-2.9,3.5c-0.5,0.6-0.9,1.2-1.2,2c-0.3,0.8-0.5,1.3-0.8,1.3c-0.5,0-0.6-1-1.7-2.2c-0.7-0.7-1.3-1-2.6-1.6
                                                c-0.8-0.4-2.8-1-4.5-2.1c-1.8-1.1-3.1-2.7-3.8-3.2c-1.1-0.9-1.6-1.3-2.6-1.6c-1.5-0.5-2.5-0.2-2.7-0.6
                                                c-0.1-0.3,0.3-0.7,0.9-1.3c0.6-0.5,1-1.2,1.3-1.9c0.4-1,1.1-2.5,2-4.1c1.5-2.6,1.8-2.6,3.1-4.1c1.2-1.3,2.4-1.5,2.9-3
                                                c0.4-1.1,0.1-1.9,0.5-2.1c0.5-0.3,1.5,0.5,2.2,1.2c1.5,1.2,1.4,1.4,2.4,2.2C440.4,345.7,441,345.7,443.3,347z"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M452.5,352.6c0,0.5-0.4,0.7-0.8,0.9
                                                c-0.3,0.2-0.6,0.3-1,0.7c-0.6,0.6-0.7,1.2-0.9,2c-0.1,0.5-0.2,1.1-0.5,1.8c-0.2,0.4-0.3,0.7-0.4,1c-0.4,1-0.6,1.7-2,3.6
                                                c-1,1.4-2.1,2.7-2.9,3.5c-0.5,0.5-0.9,1.2-1.1,1.9c-0.3,0.8-0.5,1.5-1.1,1.5c-0.5,0-0.7-0.4-0.9-0.8c-0.2-0.4-0.5-0.9-1-1.4
                                                c-0.6-0.7-1.3-1-2.5-1.6c-0.2-0.1-0.6-0.2-1-0.4c-1-0.4-2.3-0.9-3.6-1.7c-1.3-0.8-2.3-1.8-3.1-2.5c-0.3-0.3-0.6-0.6-0.8-0.7
                                                c-1.1-0.9-1.6-1.3-2.5-1.6c-0.7-0.2-1.3-0.3-1.7-0.3c-0.5,0-1-0.1-1.1-0.5c-0.2-0.6,0.3-1.1,0.9-1.7
                                                c0.5-0.5,0.9-1.1,1.2-1.8c0.4-1,1.1-2.5,2-4.1c1.2-2.1,1.6-2.6,2.4-3.4c0.2-0.2,0.5-0.5,0.7-0.8c0.5-0.5,1-0.9,1.4-1.2
                                                c0.6-0.5,1.1-0.8,1.4-1.6c0.1-0.4,0.2-0.8,0.2-1.1c0-0.5,0.1-0.9,0.5-1.1c0.7-0.4,1.7,0.5,2.6,1.2c0.8,0.7,1.1,1,1.4,1.3
                                                c0.3,0.3,0.5,0.5,1,0.9c0.7,0.6,1.1,0.8,1.8,1.1c0.5,0.3,1.2,0.6,2.3,1.2l0,0c1,0.7,1.6,1.2,2,1.6c0.6,0.5,1,0.8,1.8,1.2
                                                c0.5,0.3,0.8,0.4,1.2,0.5c0.4,0.1,0.9,0.3,1.8,0.7C451.4,351.2,452.5,351.8,452.5,352.6
                                                C452.5,352.6,452.5,352.6,452.5,352.6z M441,346.2c-0.7-0.3-1.2-0.6-2-1.2c-0.5-0.4-0.7-0.7-1-0.9c-0.3-0.3-0.6-0.6-1.4-1.3
                                                c-0.5-0.4-1.5-1.3-1.9-1.1c-0.1,0-0.1,0.3-0.1,0.6c0,0.4-0.1,0.8-0.2,1.3c-0.3,1-1,1.5-1.6,2c-0.4,0.3-0.9,0.6-1.3,1.1
                                                c-0.3,0.3-0.5,0.6-0.8,0.8c-0.8,0.8-1.2,1.2-2.3,3.2c-0.8,1.5-1.5,3-2,4c-0.3,0.8-0.8,1.4-1.4,2c-0.2,0.2-0.8,0.8-0.8,0.9
                                                c0.1,0.1,0.4,0.1,0.6,0.1c0.5,0,1.1,0.1,1.9,0.4c1,0.3,1.6,0.8,2.7,1.7c0.2,0.2,0.5,0.4,0.8,0.8c0.7,0.7,1.8,1.7,3,2.4
                                                c1.2,0.8,2.5,1.3,3.5,1.7c0.4,0.2,0.8,0.3,1,0.4c1.3,0.6,1.9,1,2.7,1.7c0.6,0.6,0.9,1.2,1.1,1.6c0.1,0.2,0.3,0.5,0.3,0.5
                                                c0.2,0,0.4-0.8,0.5-1.1c0.3-0.8,0.7-1.5,1.2-2.1c0.7-0.8,1.8-2.1,2.8-3.5c1.4-1.9,1.6-2.4,2-3.4c0.1-0.3,0.2-0.6,0.4-1
                                                c0.3-0.6,0.4-1.1,0.5-1.7c0.2-0.8,0.3-1.6,1.1-2.3c0.4-0.4,0.8-0.6,1.1-0.8c0.3-0.2,0.5-0.3,0.5-0.4c0,0,0,0,0,0
                                                c0-0.4-1.2-1-1.8-1.2c-0.9-0.4-1.3-0.6-1.7-0.7c-0.4-0.1-0.7-0.2-1.3-0.5c-0.9-0.4-1.3-0.8-1.9-1.3c-0.5-0.4-1-0.8-2-1.5
                                                C442.2,346.7,441.5,346.4,441,346.2z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M383,381.7c-0.4,2.7-0.8,3.1-0.8,4.7
                                                c0,1.3,0.2,1.3,0.2,3.2c0,1,0,2.2-0.5,2.5c-0.5,0.2-0.9-0.5-2-0.9c-1.5-0.5-2.3,0.3-4.1,0.4c-1.9,0.1-2.1,0.4-5.1-0.1
                                                c-1.7-0.3-3.4-0.7-4.4-1c-0.7-0.2-1.5-0.3-2.3-0.2c-0.8,0.1-1.4,0.1-1.5-0.2c-0.2-0.4,0.7-1,1.2-2.5c0.3-0.9,0.3-1.7,0.3-3
                                                c0-0.9-0.4-2.9-0.1-5c0.2-2.1,1-4,1.2-4.9c0.3-1.3,0.5-2.1,0.3-3c-0.2-1.6-0.9-2.3-0.6-2.7c0.2-0.3,0.8-0.1,1.5,0.2
                                                c0.7,0.3,1.5,0.4,2.3,0.3c1.1-0.1,2.7-0.1,4.5,0c3,0.2,3.2,0.4,5,1c1.7,0.5,2.4,1.5,3.9,1.3c1.1-0.1,1.7-0.8,2.1-0.5
                                                c0.5,0.4,0.2,1.5,0,2.5c-0.5,1.9-0.6,1.8-0.9,3.1C382.9,378.5,383.2,379,383,381.7z"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M384.5,373.9c-0.2,1-0.4,1.4-0.6,1.8
                                                c-0.1,0.4-0.2,0.7-0.4,1.2c-0.2,0.9-0.2,1.4-0.2,2.1c0,0.6,0,1.4-0.1,2.6l0,0c-0.2,1.2-0.4,1.9-0.5,2.5
                                                c-0.2,0.8-0.3,1.3-0.3,2.1c0,0.6,0,0.9,0.1,1.3c0.1,0.4,0.1,0.9,0.1,1.9c0,1.1,0.1,2.4-0.7,2.8c-0.4,0.2-0.8-0.1-1.2-0.3
                                                c-0.3-0.2-0.6-0.4-1-0.6c-0.8-0.3-1.4-0.1-2.2,0.1c-0.5,0.1-1.1,0.3-1.8,0.3c-0.4,0-0.8,0.1-1.1,0.1
                                                c-1.1,0.1-1.8,0.2-4.1-0.2c-1.7-0.3-3.4-0.7-4.4-1c-0.7-0.2-1.4-0.3-2.2-0.2c-0.8,0.1-1.6,0.2-1.9-0.3
                                                c-0.2-0.4,0-0.8,0.3-1.2c0.3-0.4,0.6-0.8,0.8-1.5c0.3-0.9,0.3-1.6,0.3-2.9c0-0.3,0-0.6-0.1-1.1c-0.1-1.1-0.2-2.5,0-4
                                                c0.2-1.5,0.6-2.9,0.9-3.9c0.1-0.4,0.2-0.8,0.3-1c0.3-1.3,0.4-2,0.3-2.9c-0.1-0.7-0.3-1.3-0.5-1.7c-0.2-0.5-0.4-0.9-0.1-1.2
                                                c0.4-0.5,1.1-0.2,1.9,0.1c0.7,0.3,1.4,0.4,2.1,0.3c1.1-0.1,2.8-0.1,4.5,0c2.4,0.1,3,0.3,4.1,0.7c0.3,0.1,0.6,0.2,1,0.3
                                                c0.7,0.2,1.2,0.5,1.7,0.7c0.7,0.4,1.2,0.7,2.1,0.5c0.5-0.1,0.8-0.2,1.1-0.3c0.4-0.2,0.9-0.4,1.2-0.1c0.3,0.2,0.4,0.6,0.4,1
                                                C384.9,372.6,384.7,373.3,384.5,373.9z M365.3,369.8c0.2,0.4,0.4,1,0.5,1.9c0.1,1,0,1.8-0.3,3.1c-0.1,0.3-0.2,0.7-0.3,1.1
                                                c-0.3,1-0.7,2.3-0.9,3.7c-0.2,1.4,0,2.8,0,3.8c0,0.4,0.1,0.8,0.1,1.1c0,0,0,0,0,0c0,1.4,0,2.2-0.4,3.1
                                                c-0.3,0.8-0.6,1.3-0.9,1.7c-0.1,0.2-0.3,0.4-0.3,0.5c0.1,0.1,0.9,0,1.2,0c0.8-0.1,1.6,0,2.4,0.2c1,0.3,2.6,0.7,4.4,1
                                                c2.3,0.4,2.9,0.3,4,0.2c0.3,0,0.7-0.1,1.1-0.1c0.7,0,1.2-0.2,1.7-0.3c0.8-0.2,1.6-0.4,2.6-0.1c0.5,0.2,0.9,0.4,1.2,0.6
                                                c0.3,0.2,0.5,0.3,0.6,0.3c0.4-0.2,0.3-1.5,0.3-2.2c0-1-0.1-1.5-0.1-1.9c0-0.4-0.1-0.7-0.1-1.4c0-1,0.1-1.5,0.3-2.3
                                                c0.1-0.6,0.3-1.3,0.5-2.4c0.1-1.2,0.1-1.9,0.1-2.5c0-0.8,0-1.4,0.2-2.3c0.1-0.6,0.3-1,0.4-1.3c0.1-0.4,0.3-0.8,0.5-1.8
                                                c0.2-0.6,0.5-1.9,0.2-2.2c-0.1-0.1-0.3,0-0.6,0.1c-0.3,0.1-0.7,0.3-1.3,0.4c-1.1,0.1-1.7-0.2-2.5-0.6
                                                c-0.5-0.2-0.9-0.5-1.6-0.7c-0.4-0.1-0.8-0.2-1.1-0.3c-1-0.3-1.6-0.5-3.9-0.6c-1.7-0.1-3.4,0-4.5,0c-0.8,0-1.6-0.1-2.4-0.4
                                                c-0.3-0.1-1.1-0.4-1.2-0.3c0,0,0,0,0,0C365.1,369.3,365.2,369.6,365.3,369.8z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M394.3,366.5
                                                c-2.7,0.2-3.2-0.1-4.8,0.3c-1.3,0.3-1.2,0.4-3.1,0.9c-1,0.2-2.2,0.5-2.5,0c-0.3-0.4,0.3-1,0.5-2.1c0.2-1.5-0.8-2.2-1.3-3.9
                                                c-0.5-1.9-0.8-2-1-5c-0.1-1.8,0-3.5,0-4.5c0-0.8-0.1-1.5-0.3-2.3c-0.3-0.8-0.4-1.3-0.2-1.5c0.4-0.3,1.1,0.4,2.7,0.6
                                                c1,0.1,1.7,0,3-0.3c0.9-0.2,2.8-1,4.9-1.2c2.1-0.2,4.1,0.1,5,0.1c1.4,0,2.1,0,3-0.3c1.5-0.5,2.1-1.4,2.5-1.2
                                                c0.3,0.2,0.3,0.7,0.1,1.5c-0.1,0.8,0,1.5,0.2,2.3c0.3,1,0.7,2.6,1,4.4c0.5,3,0.3,3.2,0.1,5.1c-0.1,1.8-0.9,2.6-0.4,4.1
                                                c0.4,1.1,1.1,1.5,0.9,2c-0.2,0.6-1.5,0.5-2.5,0.5c-1.9-0.1-1.9-0.2-3.2-0.2C397.3,365.7,397,366.1,394.3,366.5z"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M405,365.6c-0.3,0.8-1.6,0.7-2.8,0.7
                                                c-1,0-1.5-0.1-1.9-0.1c-0.4,0-0.7-0.1-1.3-0.1c-0.9,0-1.4,0.1-2.1,0.3c-0.6,0.1-1.3,0.3-2.5,0.5l0,0
                                                c-1.2,0.1-1.9,0.1-2.6,0.1c-0.8,0-1.3,0-2.1,0.2c-0.6,0.1-0.9,0.2-1.3,0.4c-0.4,0.1-0.9,0.3-1.8,0.5
                                                c-1.1,0.3-2.4,0.6-2.9-0.1c-0.3-0.4-0.1-0.8,0.1-1.2c0.1-0.3,0.3-0.7,0.3-1.1c0.1-0.8-0.2-1.4-0.5-2.1
                                                c-0.2-0.5-0.5-1-0.7-1.7c-0.1-0.4-0.2-0.7-0.3-1c-0.3-1.1-0.5-1.7-0.7-4.1c-0.1-1.8,0-3.4,0-4.5c0-0.7-0.1-1.4-0.3-2.1
                                                c-0.3-0.8-0.5-1.5-0.1-1.9c0.3-0.3,0.8-0.1,1.2,0.1c0.4,0.2,1,0.4,1.7,0.5c0.9,0.1,1.6,0,2.9-0.3c0.2-0.1,0.6-0.2,1-0.3
                                                c1-0.3,2.4-0.8,3.9-0.9c1.5-0.2,2.9,0,4,0.1c0.4,0,0.8,0.1,1.1,0.1c1.4,0,2.1,0,2.9-0.3c0.7-0.2,1.2-0.6,1.5-0.8
                                                c0.4-0.3,0.8-0.6,1.2-0.3c0.5,0.3,0.4,1.1,0.3,1.9c-0.1,0.7,0,1.5,0.2,2.2c0.3,1.1,0.7,2.7,1,4.4c0.4,2.4,0.3,3,0.2,4.1
                                                c0,0.3-0.1,0.7-0.1,1.1c0,0.7-0.2,1.3-0.3,1.8c-0.2,0.8-0.4,1.4-0.1,2.2c0.2,0.4,0.4,0.7,0.6,1c0.2,0.3,0.4,0.6,0.4,0.9
                                                C405,365.3,405,365.4,405,365.6z M403.5,361c0.1-0.5,0.3-1,0.3-1.7c0-0.4,0.1-0.8,0.1-1.1c0.1-1.1,0.2-1.7-0.2-4
                                                c-0.3-1.7-0.7-3.3-1-4.4c-0.2-0.8-0.3-1.6-0.2-2.4c0-0.3,0.1-1.1,0-1.2c-0.1,0-0.3,0.2-0.5,0.3c-0.4,0.3-0.9,0.6-1.7,0.9
                                                c-1,0.4-1.7,0.4-3.1,0.4c-0.3,0-0.7,0-1.1-0.1c-1-0.1-2.4-0.2-3.8-0.1c-1.4,0.1-2.8,0.6-3.7,0.9c-0.4,0.1-0.8,0.3-1.1,0.3
                                                c-1.4,0.3-2.1,0.5-3.1,0.3c-0.8-0.1-1.4-0.3-1.9-0.5c-0.2-0.1-0.5-0.2-0.6-0.2c-0.1,0.1,0.2,0.9,0.3,1.2
                                                c0.3,0.8,0.4,1.6,0.4,2.4c-0.1,1.1-0.1,2.7,0,4.5c0.1,2.3,0.3,2.9,0.6,3.9c0.1,0.3,0.2,0.6,0.3,1.1c0.2,0.6,0.4,1.1,0.7,1.6
                                                c0.4,0.7,0.7,1.4,0.6,2.5c-0.1,0.5-0.2,1-0.4,1.3c-0.1,0.3-0.2,0.5-0.1,0.6c0.2,0.3,1.5,0,2.2-0.2c1-0.2,1.4-0.4,1.8-0.5
                                                c0.4-0.1,0.7-0.2,1.3-0.4c0.9-0.2,1.5-0.2,2.3-0.2c0.6,0,1.3,0,2.5-0.1c1.1-0.2,1.9-0.3,2.4-0.5c0.8-0.2,1.3-0.3,2.3-0.3
                                                c0.6,0,1,0,1.4,0.1c0.4,0,0.9,0.1,1.9,0.1c0.7,0,2,0.1,2.2-0.3c0-0.1-0.1-0.3-0.3-0.6c-0.2-0.3-0.5-0.7-0.6-1.2
                                                c-0.1-0.4-0.2-0.8-0.2-1.1C403.3,362,403.4,361.5,403.5,361z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M387.6,374.9
                                                c-1.5,1.7-1.9,1.8-2.6,2.9c-0.6,0.9-0.5,1-1.3,2.3c-0.4,0.7-1,1.6-1.5,1.5c-0.4-0.1-0.4-0.8-0.9-1.5c-0.8-1-1.7-0.8-3-1.6
                                                c-1.4-0.8-1.6-0.7-3.5-2.4c-1.1-1-2-2-2.6-2.7c-0.4-0.5-0.9-0.9-1.5-1.1c-0.6-0.3-1-0.5-1-0.8c0-0.4,0.9-0.4,1.9-1.2
                                                c0.6-0.5,1-1,1.6-1.9c0.4-0.6,1.1-2.2,2.2-3.5c1.1-1.3,2.5-2.3,3-2.8c0.8-0.8,1.2-1.2,1.6-1.9c0.6-1.2,0.4-2,0.8-2.1
                                                c0.3-0.1,0.6,0.3,1,0.8c0.4,0.5,0.9,0.9,1.4,1.2c0.7,0.4,1.9,1.1,3.1,2c2,1.5,2,1.7,3,2.9c1,1.1,1,2.1,2.1,2.6
                                                c0.8,0.4,1.5,0.2,1.7,0.6c0.2,0.5-0.5,1.1-1.2,1.7c-1.2,1.1-1.2,1-2,1.7C389,372.7,389,373.1,387.6,374.9z"/>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M392.2,370.3c-0.6,0.6-0.9,0.8-1.2,1
                                                c-0.3,0.2-0.4,0.3-0.8,0.7c-0.5,0.5-0.7,0.8-1.1,1.4c-0.3,0.4-0.6,0.9-1.2,1.7l0,0c-0.7,0.7-1.1,1.2-1.5,1.5
                                                c-0.5,0.4-0.8,0.7-1.1,1.3c-0.3,0.4-0.4,0.6-0.5,0.9c-0.2,0.3-0.3,0.7-0.8,1.4c-0.5,0.8-1.1,1.7-1.8,1.6
                                                c-0.4-0.1-0.6-0.4-0.7-0.8c-0.1-0.3-0.2-0.5-0.4-0.8c-0.4-0.5-0.9-0.7-1.5-0.9c-0.4-0.1-0.9-0.3-1.4-0.6
                                                c-0.3-0.2-0.6-0.3-0.8-0.4c-0.8-0.4-1.3-0.7-2.7-2c-1.1-1-2-2-2.6-2.7c-0.4-0.4-0.8-0.8-1.4-1.1c-0.6-0.3-1.2-0.6-1.2-1.1
                                                c0-0.4,0.4-0.6,0.8-0.7c0.3-0.1,0.8-0.3,1.3-0.7c0.6-0.5,0.9-0.9,1.5-1.8c0.1-0.2,0.3-0.4,0.4-0.8c0.4-0.8,1-1.8,1.8-2.8
                                                c0.8-1,1.7-1.7,2.4-2.3c0.3-0.2,0.5-0.4,0.7-0.6c0.8-0.8,1.2-1.2,1.5-1.8c0.3-0.5,0.4-1,0.4-1.4c0.1-0.4,0.2-0.8,0.6-0.9
                                                c0.5-0.1,0.9,0.4,1.3,0.9c0.4,0.5,0.8,0.9,1.3,1.2c0.8,0.4,2,1.2,3.1,2c1.6,1.2,1.9,1.6,2.5,2.3c0.2,0.2,0.3,0.4,0.6,0.7
                                                c0.4,0.5,0.6,0.9,0.8,1.3c0.3,0.6,0.6,1,1.2,1.3c0.3,0.2,0.6,0.2,0.9,0.3c0.4,0.1,0.8,0.2,0.9,0.6c0,0.1,0,0.2,0,0.3
                                                C393.5,369.1,392.8,369.7,392.2,370.3z M380.9,358.8c-0.1,0.4-0.2,0.9-0.5,1.5c-0.4,0.8-0.8,1.2-1.7,2
                                                c-0.2,0.2-0.4,0.4-0.7,0.6c-0.7,0.5-1.5,1.3-2.3,2.2c-0.7,0.9-1.3,1.9-1.7,2.6c-0.2,0.3-0.3,0.6-0.5,0.8c-0.6,1-1,1.5-1.7,2
                                                c-0.5,0.4-1,0.6-1.4,0.8c-0.1,0.1-0.3,0.1-0.4,0.2c0.1,0.1,0.6,0.4,0.8,0.5c0.6,0.3,1.2,0.7,1.6,1.2
                                                c0.6,0.7,1.5,1.7,2.5,2.6c1.4,1.3,1.8,1.5,2.6,1.9c0.2,0.1,0.5,0.3,0.8,0.4c0.5,0.3,0.9,0.4,1.3,0.5
                                                c0.7,0.2,1.3,0.4,1.8,1.1c0.3,0.4,0.4,0.7,0.5,1c0.1,0.2,0.2,0.4,0.2,0.4c0.3,0,0.9-0.9,1.1-1.3c0.4-0.7,0.6-1,0.7-1.3
                                                c0.1-0.3,0.3-0.5,0.6-1c0.4-0.7,0.8-1,1.2-1.4c0.4-0.3,0.8-0.8,1.4-1.5c0.6-0.8,0.9-1.3,1.2-1.7c0.4-0.6,0.6-0.9,1.2-1.5
                                                c0.4-0.4,0.6-0.5,0.9-0.7c0.3-0.2,0.6-0.4,1.2-1c0.3-0.3,1.2-1.1,1.1-1.4c0-0.1-0.3-0.1-0.4-0.1c-0.3-0.1-0.7-0.1-1.1-0.3
                                                c-0.8-0.4-1.1-1-1.5-1.6c-0.2-0.4-0.4-0.8-0.8-1.2c-0.2-0.3-0.4-0.5-0.6-0.7c-0.6-0.7-0.9-1.1-2.4-2.2
                                                c-1.1-0.8-2.3-1.5-3.1-2c-0.6-0.3-1.1-0.8-1.5-1.3c-0.1-0.2-0.5-0.6-0.6-0.7C380.9,358.5,380.9,358.7,380.9,358.8z"/>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M456.1,423c-0.2,1.1-1.5,1.6-3,2.1c-1.8,0.6-3.8,1.4-4.5,3.2c-0.7,1.9,0.4,4.1,1.2,5.7
                                c0.6,1.3,1.1,2.2,0.6,2.7c-0.5,0.5-1.5-0.1-2.8-0.9c-1.7-1.1-3.8-2.4-5.6-1.7c-1.7,0.6-2.4,2.7-3.1,4.6
                                c-0.6,1.8-1.2,3.3-2.4,3.4c-0.9,0.1-1.4-0.6-2-1.4c-0.6-0.8-1.4-1.9-2.9-2.4c-2-0.7-3.9-0.1-5.3,0.4c-1.1,0.4-2,0.7-2.5,0.1
                                c-0.6-0.7,0.2-1.9,1.3-3.6c1.5-2.3,3.6-5.4,3.1-8.8c-0.4-2.4-1.9-4.1-3.1-5.5c-1.2-1.4-2.2-2.5-1.7-3.6c0.4-0.9,1.4-1.1,2.4-1.3
                                c1.2-0.3,2.3-0.5,3-1.7c0.6-1,0.4-2,0.3-3c-0.1-0.9-0.3-1.8,0.4-2.5l0,0c0.7-0.6,1.5-0.5,2.4-0.3c0.9,0.2,1.9,0.4,3-0.1
                                c1.7-0.7,2.5-2.5,3.1-3.8c0.5-1,0.8-1.8,1.4-1.7c0.6,0.1,0.8,1,1,2.2c0.2,1.4,0.5,3.2,1.7,3.9c1.6,1,4.1-0.4,6.2-1.4
                                c1.6-0.8,2.8-1.5,3.3-0.9c0.5,0.6-0.2,1.7-1.2,3.3c-1.3,2.1-3.2,5-2.3,7.4c0.7,2,3.1,2.9,5,3.7c1.6,0.6,2.9,1.1,2.9,2
                                C456.1,422.9,456.1,423,456.1,423z M450.3,409.6c0.8-1.3,1.6-2.5,1.2-2.9c-0.4-0.4-1.6,0.3-2.9,1c-2.1,1.1-4.7,2.5-6.5,1.4
                                c-1.3-0.8-1.6-2.6-1.9-4.1c-0.2-0.9-0.3-1.8-0.7-1.9c-0.3,0-0.7,0.7-1,1.5c-0.6,1.4-1.5,3.2-3.3,4c-1.2,0.5-2.3,0.3-3.2,0.1
                                c-0.9-0.2-1.6-0.3-2.1,0.2l-0.1-0.1l0.1,0.1c-0.5,0.5-0.4,1.3-0.3,2.2c0.1,1,0.3,2.1-0.3,3.2c-0.8,1.3-2.1,1.6-3.2,1.8
                                c-1,0.2-1.8,0.4-2.2,1.1c-0.4,1,0.5,2,1.6,3.3c1.3,1.4,2.8,3.2,3.2,5.7c0.5,3.5-1.6,6.7-3.2,9c-1,1.5-1.8,2.7-1.4,3.2
                                c0.3,0.4,1.1,0.1,2.1-0.2c1.5-0.5,3.4-1.2,5.5-0.4c1.5,0.6,2.4,1.7,3.1,2.5c0.6,0.8,1,1.3,1.7,1.3c1-0.1,1.5-1.5,2.1-3.2
                                c0.7-1.9,1.4-4.1,3.3-4.8c2-0.7,4.2,0.7,5.9,1.8c1.1,0.7,2.1,1.3,2.4,1c0.3-0.3-0.1-1.2-0.7-2.3c-0.8-1.7-2-3.9-1.2-6
                                c0.7-1.9,2.8-2.7,4.7-3.4c1.4-0.5,2.7-1,2.8-1.8c0.1-0.7-1.2-1.2-2.7-1.8c-2-0.8-4.4-1.7-5.2-3.8c-0.2-0.5-0.2-0.9-0.2-1.4
                                C447.7,413.7,449.1,411.4,450.3,409.6z"/>
                            <path fill="#EFE7DA" d="M439.5,402.8c-0.5,0-0.9,0.7-1.3,1.7c-0.6,1.3-1.4,3.1-3.1,3.8c-0.5,0.2-1,0.3-1.5,0.3
                                c-0.6,0-1.1-0.1-1.6-0.2c-0.4-0.1-0.8-0.2-1.2-0.2c-0.4,0-0.8,0.1-1.2,0.5c-0.7,0.6-0.5,1.5-0.4,2.5c0.1,1,0.3,2-0.3,3
                                c-0.7,1.1-1.9,1.4-3,1.7c-1,0.2-2,0.4-2.4,1.3c-0.5,1.1,0.4,2.2,1.7,3.6c1.2,1.4,2.8,3.2,3.1,5.5c0.5,3.4-1.6,6.5-3.1,8.8
                                c-1.1,1.7-1.9,2.9-1.3,3.6c0.2,0.2,0.4,0.3,0.7,0.3c0.5,0,1.1-0.2,1.7-0.4c0.9-0.3,2.1-0.7,3.4-0.7c0.6,0,1.2,0.1,1.9,0.3
                                c1.5,0.5,2.3,1.6,2.9,2.4c0.6,0.8,1.1,1.4,1.9,1.4c0,0,0.1,0,0.1,0c1.2-0.1,1.8-1.6,2.4-3.4c0.6-1.9,1.4-4,3.1-4.6
                                c0.3-0.1,0.7-0.2,1-0.2c1.6,0,3.2,1,4.6,1.9c1,0.6,1.8,1.1,2.3,1.1c0.2,0,0.3-0.1,0.5-0.2c0.5-0.5,0-1.4-0.6-2.7
                                c-0.8-1.6-1.9-3.8-1.2-5.7c0.7-1.8,2.7-2.5,4.5-3.2c1.5-0.6,2.9-1,3-2.1c0-0.1,0-0.1,0-0.1c0-0.9-1.3-1.4-2.9-2
                                c-1.9-0.8-4.3-1.7-5-3.7c-0.9-2.4,1-5.3,2.3-7.4c1-1.6,1.7-2.7,1.2-3.3c-0.1-0.1-0.3-0.2-0.5-0.2c-0.6,0-1.6,0.5-2.8,1.1
                                c-1.5,0.8-3.4,1.8-4.9,1.8c-0.5,0-0.9-0.1-1.3-0.3c-1.2-0.7-1.5-2.5-1.7-3.9C440.3,403.8,440.2,402.9,439.5,402.8
                                C439.5,402.8,439.5,402.8,439.5,402.8L439.5,402.8z M433.6,409c0.5,0,1-0.1,1.6-0.3c1.8-0.8,2.7-2.6,3.3-4
                                c0.4-0.8,0.7-1.5,1-1.5c0,0,0,0,0,0c0.4,0,0.5,0.9,0.7,1.9c0.2,1.5,0.5,3.3,1.9,4.1c0.4,0.3,1,0.4,1.5,0.4c1.6,0,3.4-1,5-1.8
                                c1.1-0.6,2.1-1.1,2.6-1.1c0.1,0,0.2,0,0.3,0.1c0.4,0.4-0.4,1.6-1.2,2.9c-1.1,1.8-2.6,4.1-2.6,6.3c0,0.5,0.1,1,0.2,1.4
                                c0.8,2.1,3.2,3.1,5.2,3.8c1.5,0.6,2.8,1.1,2.7,1.8c-0.1,0.9-1.4,1.3-2.8,1.8c-1.9,0.7-4,1.4-4.7,3.4c-0.8,2,0.4,4.3,1.2,6
                                c0.5,1.1,1,2,0.7,2.3c-0.1,0.1-0.1,0.1-0.3,0.1c-0.5,0-1.3-0.5-2.1-1.1c-1.4-0.9-3.1-2-4.8-2c-0.4,0-0.8,0.1-1.1,0.2
                                c-1.8,0.7-2.6,2.8-3.3,4.8c-0.6,1.7-1.1,3.1-2.1,3.2c0,0-0.1,0-0.1,0c-0.6,0-1-0.5-1.6-1.3c-0.7-0.9-1.5-2-3.1-2.5
                                c-0.7-0.3-1.4-0.4-2-0.4c-1.3,0-2.5,0.4-3.5,0.8c-0.7,0.2-1.2,0.4-1.6,0.4c-0.2,0-0.4-0.1-0.5-0.2c-0.4-0.5,0.3-1.7,1.4-3.2
                                c1.6-2.3,3.7-5.5,3.2-9c-0.4-2.4-2-4.2-3.2-5.7c-1.1-1.3-2-2.3-1.6-3.3c0.3-0.7,1.2-0.9,2.2-1.1c1.2-0.3,2.5-0.6,3.2-1.8
                                c0.7-1.1,0.5-2.2,0.3-3.2c-0.1-0.9-0.2-1.7,0.3-2.2l-0.1-0.1l0.1,0.1c0.3-0.3,0.6-0.4,1-0.4c0.3,0,0.7,0.1,1.2,0.2
                                C432.5,408.9,433,409,433.6,409L433.6,409z"/>
                        </g>
                        <path d="M447.9,423.1c0,0.6-0.8,0.9-1.7,1.3c-1,0.4-2.2,0.8-2.6,1.8c-0.3,0.9,0.3,1.9,0.7,2.8c0.4,0.7,0.7,1.2,0.4,1.5
                            c-0.3,0.4-1,0-1.9-0.4c-1.1-0.5-2.4-1.2-3.4-0.7c-1.1,0.5-1.4,2.2-1.7,3.5c-0.2,1-0.4,1.7-0.8,1.8c-0.4,0-0.6-0.5-0.8-1.1
                            c-0.3-0.8-0.6-1.7-1.5-2.1c-0.7-0.3-1.4,0-2.1,0.2c-0.5,0.2-1,0.4-1.4,0.1c-0.5-0.4,0-1.2,0.5-2.3c0.7-1.4,1.7-3.3,1.2-5.1
                            c-0.3-1.2-1.2-2.1-2-2.8c-0.7-0.7-1.3-1.2-1.1-1.9l0,0c0.2-0.6,0.8-0.7,1.4-0.9c0.7-0.2,1.4-0.4,1.8-1c0.4-0.8,0.2-1.7,0-2.4
                            c-0.2-0.7-0.3-1.3,0.1-1.6c0.4-0.3,0.9,0,1.5,0.3c0.6,0.4,1.3,0.7,2,0.5c0.8-0.3,1.1-1.2,1.4-1.9c0.2-0.6,0.4-0.9,0.7-0.9
                            c0.4,0,0.4,0.7,0.5,1.7c0.1,1.2,0.2,2.7,0.9,3.1c0.9,0.4,2.5-1.1,3.5-2.1c0.8-0.8,1.2-1.1,1.4-0.9c0.2,0.2,0,0.5-0.5,1.2
                            c-0.8,1.1-2.2,3-1.7,4.5c0.4,1.3,1.9,1.9,3.1,2.5C447,422,447.9,422.4,447.9,423.1C447.9,423,447.9,423.1,447.9,423.1z
                            M444.3,414.4c0.1-0.2,0.3-0.4,0.4-0.5c-0.2,0.2-0.5,0.4-0.8,0.7c-1.2,1.1-2.8,2.6-3.9,2.1c-0.9-0.4-1-2-1.1-3.3
                            c0-0.6-0.1-1.3-0.2-1.4c-0.1,0-0.2,0.4-0.3,0.7c-0.3,0.8-0.7,1.8-1.6,2.1c-0.8,0.3-1.6-0.2-2.3-0.5c-0.5-0.3-0.9-0.5-1.1-0.3
                            c-0.2,0.2-0.1,0.7,0,1.2c0.2,0.8,0.4,1.8-0.1,2.7c-0.5,0.8-1.3,1-2,1.2c-0.6,0.2-1.1,0.3-1.2,0.7l0,0c-0.2,0.5,0.3,1,1,1.6
                            c0.8,0.7,1.7,1.6,2,2.9c0.5,2-0.5,3.9-1.2,5.4c-0.5,0.9-0.9,1.7-0.6,1.9c0.2,0.2,0.6,0,1-0.2c0.7-0.2,1.5-0.6,2.3-0.2
                            c1,0.4,1.4,1.5,1.6,2.3c0.1,0.4,0.3,0.8,0.5,0.8c0.2,0,0.4-0.8,0.5-1.5c0.3-1.3,0.7-3.1,1.9-3.7c1.1-0.5,2.5,0.2,3.7,0.7
                            c0.6,0.3,1.3,0.7,1.5,0.5c0.1-0.2-0.1-0.7-0.4-1.2c-0.5-0.9-1.1-2-0.8-3c0.4-1.2,1.7-1.6,2.8-2c0.8-0.3,1.5-0.6,1.5-1
                            c0-0.5-0.8-0.8-1.7-1.2c-1.3-0.6-2.9-1.3-3.3-2.7c-0.1-0.2-0.1-0.5-0.1-0.7C442.4,416.9,443.6,415.3,444.3,414.4z"/>
                        <path d="M442.6,423.3c0,0.3-0.4,0.3-0.9,0.4c-0.6,0.1-1.5,0.2-1.6,0.6c-0.1,0.4,0.5,1.1,1,1.6c0.4,0.4,0.6,0.7,0.5,0.9
                            c-0.1,0.2-0.4,0.1-0.8-0.2c-0.5-0.3-1.4-0.7-2-0.5c-0.5,0.2-0.8,0.9-1,1.4c-0.2,0.4-0.3,0.7-0.6,0.7c-0.2,0-0.3-0.3-0.3-0.6
                            c-0.1-0.3-0.1-0.6-0.3-0.7c-0.3-0.1-0.7,0.1-1.1,0.3c-0.3,0.2-0.5,0.3-0.7,0.2c-0.2-0.2,0-0.4,0.4-1c0.6-0.7,1.4-1.8,1.2-2.8
                            c-0.1-0.6-0.6-0.9-1-1.3c-0.4-0.4-0.9-0.7-0.8-1.2c0.1-0.3,0.3-0.5,0.5-0.6c0.2-0.1,0.5-0.3,0.7-0.6c0.4-0.6,0.2-1.4,0.1-1.9
                            c-0.1-0.3-0.1-0.5,0.1-0.6c0.2-0.1,0.3,0.2,0.5,0.6c0.1,0.3,0.5,1,0.7,1c0.2,0,0.3-0.6,0.4-0.8c0.1-0.4,0.2-0.7,0.5-0.7
                            c0.2,0,0.3,0.3,0.3,0.8c0.1,0.5,0.1,1.2,0.4,1.3c0.3,0.1,0.8-0.3,1.2-0.6c0.3-0.3,0.5-0.4,0.7-0.3c0.2,0.2,0,0.4-0.3,0.9
                            c-0.4,0.6-1,1.5-0.8,2.1c0.2,0.6,1.3,0.8,2,1C442.3,422.9,442.6,423,442.6,423.3C442.6,423.3,442.6,423.3,442.6,423.3z
                            M440.3,419.6c0-0.1,0.1-0.1,0.1-0.2c0,0,0,0-0.1,0c-0.4,0.4-1,0.8-1.5,0.6c-0.5-0.2-0.6-1-0.6-1.6c0-0.1,0-0.3,0-0.4
                            c0,0.1-0.1,0.2-0.1,0.3c-0.2,0.5-0.3,1-0.7,1.1c-0.4,0-0.7-0.5-1-1.1c0.1,0.5,0.1,1.2-0.2,1.8c-0.2,0.4-0.5,0.6-0.8,0.7
                            c-0.2,0.1-0.3,0.2-0.4,0.4l0,0c-0.1,0.3,0.2,0.5,0.6,0.9c0.4,0.3,1,0.8,1.1,1.4c0.3,1.1-0.6,2.3-1.2,3.1
                            c-0.1,0.1-0.2,0.3-0.3,0.4c0.1,0,0.1-0.1,0.2-0.1c0.4-0.2,1-0.6,1.4-0.4c0.4,0.2,0.4,0.6,0.5,1c0,0.1,0,0.2,0.1,0.3
                            c0.1-0.1,0.1-0.3,0.2-0.5c0.2-0.6,0.5-1.3,1.1-1.6c0.8-0.3,1.7,0.2,2.3,0.5c0.1,0,0.1,0.1,0.2,0.1c-0.1-0.1-0.2-0.2-0.3-0.3
                            c-0.5-0.6-1.3-1.3-1.1-1.9c0.2-0.6,1.1-0.7,1.9-0.8c0.2,0,0.4-0.1,0.5-0.1c-0.1,0-0.3-0.1-0.5-0.1c-0.8-0.2-1.9-0.4-2.2-1.2
                            c-0.1-0.1-0.1-0.3-0.1-0.4C439.4,420.9,439.9,420.1,440.3,419.6z"/>
                        <g filter="url(#ds-soft)">
                            
                                <image overflow="visible" opacity="0.4" width="36" height="37" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAlCAYAAAAqXEs9AAAACXBIWXMAAAsSAAALEgHS3X78AAAD
            4ElEQVRYhc2Y61IbRxBGj1YGCQIBYsWx43KSSt7/mRK7nJtxEEZIIKFLfsz3aZvelUA4rspUdc1I
            2pk507fpVYentc4jn1t9qYXjs5003gaySuMH27MdQCqNqyARLsKsgGWSDPskIG9Y6dlnwJ76riRC
            GWYBzIE7yTyBbYTaBmSQriB6wEGQnuZbU95oIYgpcANM1M8EttgGtckHolZ6wCFwDJwApxp/BewL
            uNK8pTa9BcbAJ+BS/bW+nwlq2QbVBmQYa+UYOAMGwAvgW30+ptaS1zHQjSD+AT4A5xp/Eqi11YDK
            Jsua+Rp4DrwCXkteAt88AugS+Bjg+zpkBYzYEIERyM7ZDZp5LoifgB+BN9LSKbXJHHHeYE7xn5Hm
            n+jZntbOEWifatWQTXWok70SzC8C+l6bHIUN2px6rgMdaS1r0sAzal8y4CoCZVMdU3zltUCsnQHF
            jH2aEWYgb7Av2QuamVGi7po68uzgDQ119PmAYpIXAnojzQwo6j+gzkOeF5uhnDJszplAhsAFcCW4
            u6hhL+rJfW36HfAD8LP6l4I8DCe2VjsbJGfzJcW3xhT/GgUtrU1W0czGfYpZzijRdErxhWimbKrc
            YoDsaa7TR1wzR+k6oXkcE+ERdQL0xC7bQTZB7QeoEx04Aq0PWKXJhvICPZrZeJcKwc8b6kAHjNEX
            78NOlSbmizSb6CkwlnhQH9b+uOaotiyQ5XNaPGw3SMMXM9CXajE/LYI07rIMtNoinwMSM/StZErJ
            QfcSY9Uy2RekxXfOU8F8ncwoeWdMSZATQfn6WAGrKkyKMD7JlGZ6fyxUrB7vtN6IUoJcCWpKKkOi
            hgwzpb5vRjrRLbV6H6OpXMreaK1LyrVxmYDulR9ZO7c6wTBMPqIuNaC+x6B5ubq3Zm6o77BzSo00
            1EFtsrUP5YUdlvuUPJFzhnPSJo3EgxnmSiDvgbeSP3TYMclk8cbOF2OX9gSZ37liwRUL/HGA+V0g
            vwnsXL9Fp25oKLe2siLnkXnoHQgTbXZBqaetmV+Bd8BfFJO59LiXi3LFuNRDEy1o80THHFC/eRxQ
            +9aSOrTtwB+BPwX1XuOLBHOvRSBTLiiq7KTP11psQCkhXCv3KZpecP/150JAH4C/KWYaUkdXa8Rm
            DeVoc7REoDNpyCVEBrqmmOxSAEONR9TJsPUVCDZfmm1vrYfUdZLFJYRNFnOYZRJA4lWx05urf8vl
            iAt3p4KYDux/U4nfUv1SGLWyMbE+VFbEfz4sMR3EPxxsXkedIzD/A7I1y+9SjrqvWno3ayD3D4Ls
            CtT2/KbCLZtkpwrhv6gEc3tq7fT/bP8CRtef/hA0578AAAAASUVORK5CYII=" transform="matrix(1 0 0 1 408 389)">
                            </image>
                            <g>
                                <g>
                                    
                                        <ellipse transform="matrix(0.9782 -0.2075 0.2075 0.9782 -74.9085 96.7859)" fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" cx="423.8" cy="405.4" rx="11.2" ry="11.2"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M434.1,410.6c-1.4,2.8-3.8,4.8-6.7,5.8
                                        c-6.1,2-12.6-1.3-14.6-7.4c-1-2.9-0.7-6.1,0.7-8.8c1.4-2.8,3.8-4.8,6.7-5.8c2.9-1,6.1-0.7,8.8,0.7c2.8,1.4,4.8,3.8,5.8,6.7
                                        c0.4,1.2,0.6,2.4,0.6,3.6C435.4,407.2,435,409,434.1,410.6z M413.5,408.8c1.9,5.7,8,8.8,13.7,7c5.7-1.9,8.8-8,7-13.7l0,0
                                        c-0.9-2.8-2.8-5-5.4-6.3c-2.6-1.3-5.5-1.5-8.3-0.6c-2.8,0.9-5,2.8-6.3,5.4c-0.8,1.5-1.2,3.2-1.2,4.9
                                        C413,406.5,413.1,407.7,413.5,408.8z"/>
                                </g>
                            </g>
                        </g>
                        <g filter="url(#ds-soft)">
                            
                                <image overflow="visible" opacity="0.4" width="45" height="45" href="data:image/png;base64,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
            TkSuQmCC" transform="matrix(1 0 0 1 420 400)">
                            </image>
                            <g>
                                <g>
                                    
                                        <ellipse transform="matrix(0.9963 -8.612671e-02 8.612671e-02 0.9963 -34.5736 39.5061)" fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" cx="440.6" cy="420.4" rx="15.3" ry="15.3"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M454.5,427.5c-1.9,3.7-5.1,6.5-9.1,7.8
                                        c-4,1.3-8.2,1-12-0.9c-3.7-1.9-6.5-5.1-7.8-9.1c-1.3-4-1-8.2,0.9-12c1.9-3.7,5.1-6.5,9.1-7.8c8.2-2.7,17.1,1.8,19.8,10
                                        c0.5,1.6,0.8,3.2,0.8,4.9C456.2,422.9,455.7,425.3,454.5,427.5z M426.3,425.1c2.6,7.9,11.1,12.2,18.9,9.6
                                        c3.8-1.2,6.9-3.9,8.7-7.5c1.8-3.6,2.1-7.6,0.9-11.5c-2.6-7.9-11.1-12.2-18.9-9.6c-3.8,1.2-6.9,3.9-8.7,7.5
                                        c-1.1,2.1-1.6,4.4-1.6,6.8C425.5,422,425.8,423.6,426.3,425.1z"/>
                                </g>
                            </g>
                        </g>
                        <g>
                            <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M445.8,420.1c0.5,1.6-0.3,3.3-1.9,3.8
                                c-1.6,0.5-3.3-0.3-3.8-1.9c-0.5-1.6,0.3-3.3,1.9-3.8C443.6,417.7,445.3,418.5,445.8,420.1z"/>
                            <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M445.8,422.5c-0.4,0.8-1,1.3-1.9,1.6
                                c-1.7,0.5-3.5-0.4-4-2c-0.3-0.8-0.2-1.7,0.2-2.4c0.4-0.8,1-1.3,1.9-1.6c0.8-0.3,1.7-0.2,2.4,0.2c0.8,0.4,1.3,1,1.6,1.9l0,0
                                c0.1,0.3,0.2,0.7,0.2,1C446.1,421.6,446,422.1,445.8,422.5z M440.2,422c0.5,1.5,2.1,2.3,3.6,1.8c0.7-0.2,1.3-0.7,1.7-1.4
                                c0.3-0.7,0.4-1.5,0.2-2.2l0,0c-0.2-0.7-0.7-1.3-1.4-1.7c-0.7-0.3-1.5-0.4-2.2-0.2c-0.7,0.2-1.3,0.7-1.7,1.4
                                c-0.2,0.4-0.3,0.8-0.3,1.3C440.1,421.4,440.1,421.7,440.2,422z"/>
                        </g>
                        <g>
                            <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M443.4,424.3v-1.8h-0.8v1.8
                                c0,0.2,0.2,0.4,0.4,0.4h0.1C443.2,424.7,443.4,424.5,443.4,424.3z"/>
                            <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M442.9,424.9c-0.3,0-0.6-0.3-0.6-0.6v-1.9
                                h1.2v1.9C443.5,424.6,443.3,424.9,442.9,424.9z M442.7,422.7v1.6c0,0.1,0.1,0.3,0.3,0.3c0.1,0,0.3-0.1,0.3-0.3v-1.6H442.7z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M445,420.4c0.4,1.1-0.2,2.3-1.4,2.7
                                c-1.1,0.4-2.3-0.2-2.7-1.4c-0.4-1.1,0.2-2.3,1.4-2.7C443.4,418.7,444.6,419.3,445,420.4z"/>
                            <path fill="#FFFFFF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M445,422.1c-0.3,0.5-0.7,1-1.3,1.1
                                c-0.6,0.2-1.2,0.1-1.7-0.1c-0.5-0.3-1-0.7-1.1-1.3c-0.2-0.6-0.1-1.2,0.1-1.7c0.3-0.5,0.8-1,1.3-1.1c0.6-0.2,1.2-0.1,1.7,0.1
                                c0.5,0.3,1,0.7,1.1,1.3c0.1,0.2,0.1,0.5,0.1,0.7C445.2,421.4,445.1,421.8,445,422.1z M441.1,421.7c0.3,1,1.4,1.6,2.5,1.3
                                c1-0.3,1.6-1.4,1.3-2.5c-0.3-1-1.4-1.6-2.5-1.3c-0.5,0.2-0.9,0.5-1.1,1c-0.1,0.3-0.2,0.6-0.2,0.9
                                C441,421.3,441,421.5,441.1,421.7z"/>
                        </g>
                        <g>
                            <g>
                                <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M423.1,401.9l-0.3,0.1
                                    c-1.4,0.5-2.2,2-1.8,3.5l0.1,0.3c0.5,1.4,2,2.2,3.5,1.8l0.3-0.1c1.4-0.5,2.2-2,1.8-3.5l-0.1-0.3
                                    C426.1,402.2,424.5,401.4,423.1,401.9z"/>
                                <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M427,406.4c-0.2,0.5-0.6,0.8-1.1,0.9
                                    l-2.3,0.7c-1,0.3-2.1-0.2-2.4-1.2l-0.7-2.3c-0.2-0.5-0.1-1,0.1-1.4c0.2-0.5,0.6-0.8,1.1-0.9l2.3-0.7c1-0.3,2.1,0.2,2.4,1.2
                                    l0.7,2.3c0.1,0.2,0.1,0.4,0.1,0.6C427.2,405.8,427.2,406.1,427,406.4z M421.8,402.5c-0.4,0.1-0.7,0.4-0.9,0.8
                                    c-0.2,0.4-0.2,0.8-0.1,1.2l0.7,2.3c0.3,0.8,1.2,1.3,2,1l2.3-0.7c0.4-0.1,0.7-0.4,0.9-0.8c0.2-0.4,0.2-0.8,0.1-1.2l-0.7-2.3
                                    c-0.3-0.8-1.2-1.3-2-1L421.8,402.5z"/>
                            </g>
                            <g>
                                <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M423.4,405.5c-0.3,0.4-1.6-0.9-3.6-0.6
                                    c-0.8,0.1-0.9,0.3-1.4,0.2c-1-0.2-1-1.4-2.1-2.8c-1.2-1.6-2.5-1.9-2.3-2.2c0.2-0.4,2.7-0.5,4,0.9c0.5,0.5,0.8,1.2,1.6,1.4
                                    c0.4,0.1,0.6,0,1,0C422.2,402.5,423.8,405,423.4,405.5z"/>
                                <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M423.6,405.6L423.6,405.6
                                    c-0.2,0.2-0.5,0.1-1-0.1c-0.6-0.2-1.6-0.6-2.8-0.4c-0.3,0-0.5,0.1-0.7,0.2c-0.3,0.1-0.5,0.1-0.8,0.1c-0.7-0.2-1-0.7-1.3-1.4
                                    c-0.2-0.4-0.5-0.9-0.9-1.5c-0.7-0.9-1.4-1.4-1.8-1.7c-0.4-0.3-0.6-0.4-0.5-0.7c0.1-0.2,0.3-0.3,0.6-0.3
                                    c0.9-0.2,2.7,0.1,3.7,1.2c0.1,0.1,0.3,0.3,0.4,0.5c0.3,0.4,0.6,0.8,1.2,0.9c0.2,0.1,0.4,0,0.6,0c0.1,0,0.2,0,0.3,0
                                    c1.3,0,2.5,1.3,2.9,2.3c0.1,0.2,0.2,0.5,0.2,0.7C423.7,405.4,423.6,405.5,423.6,405.6z M414.5,400.5c0.5,0.3,1.2,0.8,1.9,1.7
                                    c0.4,0.6,0.7,1.1,0.9,1.5c0.3,0.7,0.6,1.1,1.1,1.2c0.2,0.1,0.4,0,0.6-0.1c0.2-0.1,0.4-0.1,0.7-0.2c1.3-0.2,2.3,0.2,2.9,0.5
                                    c0.2,0.1,0.6,0.2,0.6,0.2l0,0c0,0,0.1-0.2-0.1-0.7c-0.4-0.9-1.5-2.1-2.6-2.1c-0.1,0-0.2,0-0.3,0c-0.2,0-0.4,0.1-0.7,0
                                    c-0.7-0.2-1-0.6-1.4-1.1c-0.1-0.2-0.2-0.3-0.3-0.4c-0.9-1-2.4-1.2-3.2-1.1c-0.4,0-0.5,0.1-0.5,0.1
                                    C414.1,400.3,414.3,400.4,414.5,400.5z"/>
                            </g>
                            <g>
                                <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M423.9,405.8c-0.1,0.2-0.2,0.5-0.2,1
                                    c0,0.6,0.2,0.9,0.3,1.3c0.4,1.3-1,2.6-0.9,2.7c0.1,0.1,1.4-1,2-2.6c0.1-0.2,0.3-1,0.2-2.1c0-0.4-0.1-1.2-0.5-1.3
                                    C424.5,404.7,424,405.5,423.9,405.8z"/>
                                <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M425.3,408.2c-0.5,1.5-1.7,2.6-2.1,2.7
                                    c-0.1,0-0.2,0-0.2,0c-0.2-0.1,0-0.3,0.1-0.6c0.3-0.5,0.9-1.3,0.6-2.2c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.3-0.2-0.5-0.2-1
                                    c0-0.5,0.2-0.9,0.3-1.1c0.1-0.2,0.6-1.2,1.2-1.1c0.4,0.1,0.6,0.7,0.6,1.4c0,0.2,0,0.4,0,0.6
                                    C425.6,407.3,425.4,407.9,425.3,408.2z M424,407.6c0,0.1,0.1,0.2,0.1,0.4c0.3,0.9-0.2,1.7-0.6,2.3c0.4-0.4,1.1-1.2,1.4-2.2
                                    c0.1-0.4,0.3-1.1,0.2-2c-0.1-0.9-0.3-1.1-0.4-1.1c-0.2,0-0.6,0.4-0.8,0.9l0,0c-0.1,0.1-0.2,0.5-0.2,0.9c0,0,0,0,0,0
                                    C423.8,407.2,423.9,407.4,424,407.6z"/>
                            </g>
                            <g>
                                <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M423.9,406.1c-0.4,0.7-1,1.1-1.3,1.3
                                    c-1,0.7-1.5,1-2.6,1.4c-0.9,0.4-2.5,1.1-2.7,0.8c-0.1-0.1,0.9-0.9,2.8-2.5c0.5-0.4,1.3-1.1,2.5-1.6c0.4-0.2,1.3-0.5,1.5-0.3
                                    C424.3,405.5,424,405.9,423.9,406.1z"/>
                                <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M424.1,406.2L424.1,406.2
                                    c-0.4,0.8-1.1,1.2-1.4,1.4c-1,0.7-1.5,1-2.6,1.5c-2,0.9-2.7,1-2.9,0.7c-0.1-0.2,0.1-0.5,2.8-2.7c0.5-0.4,1.3-1.1,2.5-1.6
                                    c0.8-0.4,1.4-0.5,1.7-0.2c0.1,0.1,0.1,0.2,0.1,0.3C424.4,405.7,424.2,406,424.1,406.2z M420,408.7c1.1-0.4,1.5-0.8,2.5-1.4
                                    c0.3-0.2,0.9-0.6,1.2-1.3l0.1,0.1l-0.1-0.1c0.3-0.5,0.3-0.6,0.2-0.7c0,0-0.2-0.1-1.3,0.3c-1.2,0.5-2,1.2-2.5,1.6
                                    c-1.3,1.1-2.3,2-2.6,2.3C418.1,409.5,419.5,408.9,420,408.7z"/>
                            </g>
                            <g>
                                <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M430.1,401.7c1-0.5,1.3-0.7,2.2-1
                                    c1-0.3,2.2-0.5,2.2-0.3c0.1,0.2-0.8,0.6-2.1,1.4c-2.2,1.4-2.2,1.7-3.5,2.5c-1.7,1-4.1,1.6-4.4,1.1c-0.2-0.4,0.9-1.7,2.2-2.5
                                    C428,402.2,428.3,402.5,430.1,401.7z"/>
                                <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M433.7,401.2c-0.3,0.2-0.7,0.4-1.1,0.7
                                    c-1.1,0.7-1.7,1.2-2.1,1.5c-0.4,0.3-0.8,0.6-1.4,1c-1.6,0.9-4.2,1.7-4.6,1.1c-0.1-0.1-0.1-0.2,0-0.4c0.2-0.6,1.2-1.7,2.3-2.3
                                    c0.6-0.3,1-0.4,1.4-0.5c0.5-0.1,1-0.2,1.9-0.7c0.4-0.2,0.6-0.3,0.9-0.4c0.4-0.2,0.8-0.4,1.4-0.6c0.1,0,2.3-0.7,2.4-0.2
                                    c0,0,0,0.1,0,0.1C434.8,400.6,434.5,400.7,433.7,401.2z M424.8,405.3c0.2,0.3,2.3-0.2,4.1-1.2c0.6-0.4,1-0.6,1.4-1
                                    c0.4-0.4,1-0.8,2.1-1.5c0.4-0.3,0.8-0.5,1.1-0.7c0.3-0.2,0.6-0.4,0.8-0.5c-0.3,0-1.1,0.1-1.9,0.4c-0.6,0.2-0.9,0.4-1.3,0.6
                                    c-0.2,0.1-0.5,0.3-0.9,0.4l0,0c-1,0.4-1.5,0.6-2,0.7c-0.4,0.1-0.8,0.2-1.3,0.5c-1.1,0.6-2,1.6-2.1,2.1
                                    C424.8,405.1,424.8,405.2,424.8,405.3C424.8,405.2,424.8,405.2,424.8,405.3z"/>
                            </g>
                            <g>
                                <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M424.1,405.3c-0.1,0.3,0.1,0.7,0.4,0.9
                                    c0.3,0.2,0.6,0.1,0.9,0.2c0.9,0.1,1.1,1.1,2.4,2.1c0.2,0.2,0.9,0.7,1.8,1c0.9,0.3,1.2,0.2,2.3,0.4c1.7,0.3,2.5,1,2.7,0.8
                                    c0.2-0.3-1.1-1.7-2.5-2.8c-1.2-0.9-1.1-0.6-4.7-2.4c-0.2-0.1-1-0.5-2.1-0.5C424.9,405,424.3,405,424.1,405.3z"/>
                                <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M434.7,410.8c-0.1,0.2-0.4,0.1-0.8-0.1
                                    c-0.4-0.2-1.1-0.5-2-0.7c-0.5-0.1-0.8-0.1-1-0.1c-0.4,0-0.7-0.1-1.3-0.2c-0.9-0.3-1.5-0.8-1.9-1c-0.6-0.5-0.9-0.9-1.2-1.3
                                    c-0.4-0.5-0.6-0.8-1.1-0.8c-0.1,0-0.2,0-0.2,0c-0.2,0-0.5,0-0.7-0.2c-0.4-0.2-0.6-0.8-0.5-1.1l0,0c0.2-0.5,0.9-0.5,1.3-0.5
                                    c0.5,0,1.3,0.1,2.2,0.5c1.6,0.9,2.5,1.3,3.1,1.5c0.7,0.3,1,0.4,1.6,0.9c0.8,0.6,2.6,2.2,2.6,2.9
                                    C434.8,410.8,434.8,410.8,434.7,410.8z M424.3,405.4c-0.1,0.2,0.1,0.5,0.4,0.7c0.2,0.1,0.3,0.1,0.5,0.1c0.1,0,0.2,0,0.3,0
                                    c0.6,0.1,0.9,0.4,1.3,0.9c0.3,0.4,0.6,0.8,1.2,1.2c0.3,0.2,0.9,0.7,1.8,1c0.5,0.2,0.8,0.2,1.2,0.2c0.3,0,0.6,0.1,1.1,0.1
                                    c1,0.2,1.7,0.5,2.1,0.7c0.1,0.1,0.3,0.1,0.4,0.1c-0.1-0.4-1.1-1.5-2.5-2.6c-0.6-0.5-0.9-0.6-1.6-0.9c-0.6-0.3-1.5-0.7-3.1-1.5
                                    c-0.8-0.4-1.5-0.5-2-0.5C425,405.1,424.4,405.1,424.3,405.4L424.3,405.4z"/>
                            </g>
                            <g>
                                <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M422.2,403.8c-0.1-0.3-0.3-0.7-0.2-1.6
                                    c0.1-1.4,0.5-1.9,1-3.5c0.5-1.7,0.4-2.7,0.6-2.7c0.2,0,0,1.6,0.7,3.9c0.5,1.5,0.9,2,0.8,3.1c-0.1,0.7-0.4,2-1.2,2.1
                                    C423.3,405.3,422.5,404.5,422.2,403.8z"/>
                                <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M425.2,403.1c-0.1,0.8-0.4,2.1-1.3,2.3
                                    c-0.8,0.1-1.6-0.8-1.9-1.5l0,0c-0.1-0.3-0.3-0.8-0.2-1.7c0.1-0.9,0.3-1.5,0.5-2.2c0.1-0.4,0.3-0.8,0.4-1.3
                                    c0.3-0.9,0.4-1.6,0.4-2c0.1-0.5,0.1-0.8,0.3-0.8c0.2,0,0.3,0.3,0.3,0.9c0.1,0.7,0.1,1.8,0.6,3.2c0.1,0.5,0.3,0.9,0.4,1.2
                                    c0.2,0.6,0.4,1,0.4,1.6C425.3,402.9,425.3,403,425.2,403.1z M423.1,398.8c-0.2,0.5-0.3,1-0.5,1.3c-0.2,0.7-0.4,1.2-0.5,2.1
                                    c0,0.9,0.1,1.3,0.2,1.5c0.3,0.6,0.9,1.4,1.5,1.3c0.6-0.1,0.9-1.2,1-2c0.1-0.7-0.1-1.1-0.4-1.8c-0.1-0.3-0.3-0.7-0.4-1.2
                                    c-0.4-1.4-0.5-2.6-0.6-3.3c0,0,0,0,0,0C423.5,397.2,423.4,397.9,423.1,398.8z"/>
                            </g>
                            <g>
                                <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M424,405.1c-0.3-0.4,0.1-1.3,0.4-1.7
                                    c0.5-0.9,1.1-1.5,1.2-1.6c1.1-1.1,2-1.6,3.2-2.4c2.2-1.5,3.1-2.7,3.3-2.5c0.2,0.1-0.2,0.8-0.5,1.5c-0.4,0.7-0.8,1.6-1.8,2.6
                                    c-1.5,1.7-2,1.2-2.9,2.5c-0.2,0.3-0.6,1-1.4,1.5c-0.3,0.2-0.7,0.4-1.1,0.3C424.2,405.3,424.1,405.3,424,405.1z"/>
                                <path fill="#DBEDDA" stroke="#B0C1AE" stroke-width="0.25" stroke-miterlimit="10" d="M431.6,398.5c-0.3,0.7-0.8,1.6-1.8,2.7
                                    c-0.8,0.8-1.3,1.2-1.7,1.4c-0.4,0.3-0.7,0.5-1.1,1.1l0,0.1c-0.2,0.3-0.7,1-1.4,1.5c-0.5,0.3-0.8,0.4-1.2,0.3
                                    c-0.1,0-0.3-0.1-0.4-0.2l0,0c-0.4-0.5,0.1-1.4,0.3-1.9c0.5-0.9,1.1-1.5,1.2-1.6c0.9-0.9,1.6-1.3,2.4-1.9
                                    c0.2-0.2,0.5-0.3,0.8-0.5c1-0.7,1.7-1.3,2.3-1.8c0.8-0.6,1.1-0.9,1.3-0.7c0.1,0.1,0.1,0.1,0.1,0.2
                                    C432.2,397.3,432,397.8,431.6,398.5z M424.1,405c0.1,0.1,0.2,0.1,0.3,0.1c0.3,0.1,0.6,0,1-0.2c0.7-0.4,1.1-1.1,1.3-1.4l0-0.1
                                    c0.5-0.7,0.8-0.9,1.2-1.2c0.4-0.3,0.9-0.6,1.6-1.4c1-1.1,1.4-1.9,1.8-2.6c0.2-0.4,0.6-1.1,0.6-1.2c-0.1,0.1-0.5,0.4-0.9,0.7
                                    c-0.5,0.5-1.3,1.1-2.3,1.8c-0.3,0.2-0.5,0.4-0.8,0.5c-0.8,0.5-1.5,1-2.4,1.8c-0.1,0.1-0.7,0.7-1.1,1.6
                                    c-0.1,0.2-0.5,0.9-0.5,1.3C424,404.9,424,405,424.1,405z"/>
                            </g>
                        </g>
                    </g>
                    <g filter="url(#ds-soft)">
                        
                            <image overflow="visible" opacity="0.4" width="98" height="89" href="data:image/png;base64,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" transform="matrix(1 0 0 1 399 170)">
                        </image>
                        <g>
                            <g>
                                <g>
                                    <g>
                                        
                                            <rect x="468.7" y="175.5" transform="matrix(0.8266 -0.5628 0.5628 0.8266 -19.4274 295.4287)" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="2.1" height="7.5"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M473.1,181.8l-2.2,1.5l-4.6-6.7
                                            l2.2-1.5L473.1,181.8z M471.1,182.5l1.2-0.8l-3.9-5.7l-1.2,0.8L471.1,182.5z"/>
                                    </g>
                                    <g>
                                        
                                            <rect x="467.2" y="174.9" transform="matrix(0.8266 -0.5628 0.5628 0.8266 -19.6146 294.5917)" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="2.1" height="8.5"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M472,182.1l-2.2,1.5l-5.1-7.5l2.2-1.5
                                            L472,182.1z M469.9,182.8l1.2-0.8l-4.4-6.5l-1.2,0.8L469.9,182.8z"/>
                                    </g>
                                    <g>
                                        
                                            <rect x="464.8" y="206.8" transform="matrix(0.6255 -0.7802 0.7802 0.6255 13.327 443.4196)" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="7.6" height="2.1"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M467.1,211.9l-2.1-1.7l5.1-6.4l2.1,1.7
                                            L467.1,211.9z M465.9,210.1l1.1,0.9l4.3-5.4l-1.1-0.9L465.9,210.1z"/>
                                    </g>
                                    <g>
                                        
                                            <rect x="462.9" y="206.8" transform="matrix(0.6255 -0.7802 0.7802 0.6255 12.8042 442.2925)" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="8.5" height="2.1"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M465.4,212.2l-2.1-1.7l5.7-7.1l2.1,1.7
                                            L465.4,212.2z M464.1,210.4l1.1,0.9l4.9-6.1l-1.1-0.9L464.1,210.4z"/>
                                    </g>
                                    <g>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M478,196.2c-0.2,5.9-5,10.6-10.9,10.7
                                            l-11.5,0.2c-2.2,0-3.6-1.4-3.5-3.6l0.8-21.4c0.1-2.2,1.6-3.5,3.8-3.3l11.5,1.1c5.9,0.6,10.3,5.6,10.1,11.5L478,196.2z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M473.7,204.9c-1.9,1.4-4.2,2.2-6.7,2.3
                                            l-11.5,0.2c-1.2,0-2.2-0.3-2.9-1.1c-0.7-0.7-1-1.7-1-2.9l0.8-21.4c0-1.2,0.5-2.1,1.2-2.8c0.7-0.7,1.8-0.9,2.9-0.8l11.5,1.1
                                            c6,0.6,10.6,5.8,10.3,11.8l-0.2,4.9C478.2,199.7,476.4,202.9,473.7,204.9z M454.3,179.5c-0.1,0-0.1,0.1-0.2,0.1
                                            c-0.6,0.5-1,1.3-1,2.3l-0.8,21.4c0,1,0.2,1.8,0.8,2.4c0.6,0.6,1.4,0.9,2.4,0.9l11.5-0.2c5.7-0.1,10.4-4.7,10.6-10.4l0.2-4.9
                                            c0.2-5.7-4.1-10.6-9.8-11.2l-11.5-1.1C455.7,178.9,454.9,179.1,454.3,179.5z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M473.1,203.6c-1.7,1.2-3.7,2-5.9,2
                                            l-10.3,0.2c-1.1,0-1.9-0.3-2.6-0.9c-0.6-0.6-0.9-1.5-0.9-2.6l0.7-19.1c0-1.1,0.4-1.9,1.1-2.5c0.7-0.6,1.6-0.8,2.6-0.7l10.2,1
                                            c5.4,0.5,9.4,5.2,9.2,10.6l-0.2,4.3C477,199,475.5,201.8,473.1,203.6z M455.8,181.1c0,0-0.1,0.1-0.1,0.1
                                            c-0.5,0.5-0.8,1.2-0.9,2.1l-0.7,19.1c0,0.9,0.2,1.6,0.7,2.1c0.5,0.5,1.2,0.8,2.1,0.8l10.3-0.2c5.1-0.1,9.2-4.1,9.4-9.2
                                            l0.2-4.3c0.2-5.1-3.6-9.4-8.7-9.9l-10.2-1C457,180.5,456.3,180.7,455.8,181.1z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M467.4,208.9l1.5,0
                                            c7.6,0,13.9-6,14.2-13.6l0.1-2.5c0.3-7.6-5.5-14.1-13.1-14.7l-1.5-0.1l2.4-1.7l9.8,3.8l4.3,6l0.9,7.9l-1.7,7.5
                                            c0,0-3.3,4.7-3.4,4.9c-0.1,0.2-4.7,3.7-5.3,3.9c-0.6,0.2-6,0.6-6.1,0.5C469.4,210.9,467.4,208.9,467.4,208.9z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M478.1,209.1c-1.1,0.8-2.1,1.5-2.4,1.6
                                            c-0.4,0.1-2.7,0.3-3.3,0.4c-2.9,0.2-3,0.2-3.1,0.1c-0.1-0.1-1.5-1.5-2.1-2l-0.6-0.5l2.3,0c7.5,0,13.6-5.8,13.9-13.3l0.1-2.5
                                            c0.3-7.5-5.3-13.8-12.8-14.4l-2.4-0.2l3.2-2.3l10.1,3.9l4.4,6.1l0,0.1l0.9,8l-1.7,7.6l0,0c-0.3,0.5-3.3,4.8-3.4,4.9
                                            C481.1,206.8,479.6,208,478.1,209.1z M469.6,210.7c0.7,0,5.4-0.4,5.9-0.5c0.5-0.2,4.8-3.5,5.2-3.9c0.1-0.1,2.1-3,3.4-4.9
                                            l1.7-7.4l-0.9-7.8l-4.2-5.8l-9.6-3.7l-1.5,1.1l0.6,0c7.8,0.6,13.7,7.2,13.4,15l-0.1,2.5c-0.3,7.8-6.7,14-14.6,13.9l-0.7,0
                                            C468.8,209.8,469.4,210.5,469.6,210.7z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M484.9,195.8
                                            c-0.5,7.4-6.7,13.2-14.1,13.1l-10.4-0.1l0,2.9l10.4,0.1c9,0.1,16.4-6.9,17-15.8l0.1-3.5c0.1-9-6.8-16.5-15.7-17.1l-10.4-0.7
                                            l-0.2,2.9l10.4,0.7c7.4,0.5,13.2,6.8,13.1,14.2L484.9,195.8z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M481.2,208.7
                                            c-2.9,2.2-6.6,3.5-10.5,3.4l-10.7-0.1l0-3.5l10.7,0.1c7.3,0.1,13.3-5.6,13.8-12.8l0.1-3.4c0.1-7.3-5.5-13.4-12.8-13.9
                                            l-10.7-0.8l0.2-3.5l10.7,0.8c9.1,0.6,16.1,8.3,16,17.4L488,196C487.7,201.3,485.1,205.8,481.2,208.7z M460.6,211.5l10.1,0.1
                                            c8.8,0.1,16.1-6.8,16.7-15.5l0.1-3.5c0.1-8.8-6.7-16.2-15.4-16.8L462,175l-0.2,2.3l10.1,0.7c7.6,0.5,13.4,6.9,13.4,14.5
                                            l-0.1,3.4c-0.5,7.6-6.8,13.5-14.4,13.4l-10.1-0.1L460.6,211.5z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        
                                            <rect x="432.9" y="230.7" transform="matrix(0.8002 -0.5997 0.5997 0.8002 -51.7053 308.1872)" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="7.5" height="2.1"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M440.8,230.3l-6.5,4.9l-1.6-2.2
                                            l6.5-4.9L440.8,230.3z M434.4,234.3l5.5-4.1L439,229l-5.5,4.1L434.4,234.3z"/>
                                    </g>
                                    <g>
                                        
                                            <rect x="432.5" y="229.2" transform="matrix(0.8002 -0.5997 0.5997 0.8002 -50.8227 307.9259)" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="8.5" height="2.1"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M441.2,228.6l-7.3,5.5l-1.6-2.2
                                            l7.3-5.5L441.2,228.6z M434,233.2l6.3-4.7l-0.9-1.2l-6.3,4.7L434,233.2z"/>
                                    </g>
                                    <g>
                                        
                                            <rect x="407" y="228.1" transform="matrix(0.5894 -0.8078 0.8078 0.5894 -19.7638 424.8359)" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="2.1" height="7.6"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M412.2,233.2l-1.6,2.2l-6.6-4.8
                                            l1.6-2.2L412.2,233.2z M410.4,234.5l0.9-1.2l-5.6-4.1l-0.9,1.2L410.4,234.5z"/>
                                    </g>
                                    <g>
                                        
                                            <rect x="407" y="226.2" transform="matrix(0.5894 -0.8078 0.8078 0.5894 -18.6201 424.2072)" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="2.1" height="8.5"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M412.5,232l-1.6,2.2l-7.4-5.4l1.6-2.2
                                            L412.5,232z M410.8,233.3l0.9-1.2l-6.3-4.6l-0.9,1.2L410.8,233.3z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M420.2,240.7
                                            c-5.9,0-10.8-4.5-11.2-10.4l-0.7-11.5c-0.1-2.2,1.2-3.7,3.4-3.7l21.5-0.1c2.2,0,3.6,1.4,3.5,3.6l-0.6,11.5
                                            c-0.3,5.9-5.1,10.5-11,10.6L420.2,240.7z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M436.9,217.7c0,0.3,0,0.6,0,0.9
                                            l-0.6,11.5c-0.3,6.1-5.3,10.8-11.3,10.9l-4.9,0c-6.1,0-11.1-4.7-11.5-10.7l-0.7-11.5c-0.1-1.2,0.2-2.2,0.9-2.9
                                            c0.7-0.7,1.7-1.1,2.8-1.1l21.5-0.1c1.2,0,2.2,0.4,2.8,1.1C436.5,216.2,436.8,216.9,436.9,217.7z M409.4,231
                                            c0.7,5.3,5.3,9.4,10.8,9.4l4.9,0c5.7,0,10.4-4.5,10.7-10.3l0.6-11.5c0.1-1-0.2-1.8-0.8-2.4c-0.6-0.6-1.4-0.9-2.4-0.9
                                            l-21.5,0.1c-1,0-1.8,0.3-2.4,0.9c-0.6,0.6-0.8,1.4-0.8,2.4l0.7,11.5C409.3,230.5,409.3,230.8,409.4,231z"/>
                                    </g>
                                    <g>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M420.4,239.6c-5.2,0-9.6-4-9.9-9.3
                                            l-0.6-10.2c-0.1-2,1.1-3.3,3.1-3.3l19.1-0.1c2,0,3.2,1.3,3.1,3.2l-0.5,10.2c-0.3,5.2-4.6,9.4-9.8,9.4L420.4,239.6z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M435.4,219.1c0,0.3,0,0.5,0,0.8
                                            l-0.5,10.2c-0.3,5.4-4.7,9.7-10.1,9.7l-4.3,0c-5.4,0-9.9-4.2-10.2-9.6l-0.6-10.2c-0.1-1.1,0.2-2,0.8-2.6c0.6-0.7,1.5-1,2.5-1
                                            l19.1-0.1c1.1,0,1.9,0.3,2.6,1C435,217.8,435.3,218.4,435.4,219.1z M410.9,231c0.6,4.7,4.7,8.3,9.5,8.3l4.3,0
                                            c5.1,0,9.2-4,9.5-9.1l0.5-10.2c0-0.9-0.2-1.6-0.7-2.1c-0.5-0.5-1.2-0.8-2.1-0.8l-19.1,0.1c-0.9,0-1.6,0.3-2.1,0.8
                                            c-0.5,0.5-0.7,1.3-0.7,2.1l0.6,10.2C410.8,230.5,410.8,230.7,410.9,231z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M406.9,230.7l0.1,1.5
                                            c0.3,7.6,6.6,13.7,14.3,13.6l2.5,0c7.6,0,13.9-6.1,14.1-13.8l0-1.5l1.8,2.3l-3.4,10l-5.8,4.6l-7.8,1.3l-7.6-1.4
                                            c0,0-4.9-3.1-5.1-3.2c-0.2-0.1-3.9-4.5-4.2-5.1c-0.2-0.6-0.9-6-0.8-6.1C405.1,232.8,406.9,230.7,406.9,230.7z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M440,232.8l-3.5,10.3l-5.9,4.7l-8,1.3
                                            l-7.7-1.4l-0.1,0c-0.5-0.3-4.9-3.1-5.1-3.2c-0.2-0.1-4-4.6-4.3-5.3c-0.2-0.4-0.5-2.6-0.6-3.3c-0.4-2.9-0.3-3-0.2-3.1
                                            c0.1-0.1,1.4-1.6,1.9-2.2l0.5-0.6l0.1,2.3c0.3,7.5,6.4,13.3,13.9,13.3l2.5,0c7.5,0,13.6-6,13.8-13.5l0.1-2.4L440,232.8z
                                            M436,242.6l3.3-9.8l-1.1-1.5l0,0.6c-0.2,7.8-6.5,14-14.4,14.1l-2.5,0c-7.9,0-14.3-6.1-14.6-13.9l0-0.7
                                            c-0.6,0.6-1.2,1.3-1.3,1.5c0,0.7,0.6,5.4,0.8,5.9c0.2,0.5,3.7,4.7,4.1,5c0.1,0.1,3,1.9,5,3.1l7.5,1.4l7.7-1.3L436,242.6z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M420.8,247.6
                                            c-7.4-0.1-13.5-6.1-13.8-13.5l-0.4-10.4l-2.9,0.1l0.4,10.4c0.3,9,7.6,16.1,16.6,16.3l3.5,0c9-0.3,16.2-7.5,16.4-16.5
                                            l0.3-10.4l-2.9-0.1l-0.3,10.4c-0.2,7.4-6.2,13.4-13.6,13.7L420.8,247.6z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M441.2,223.2l-0.3,10.7
                                            c-0.2,9.1-7.6,16.5-16.7,16.8l-3.6,0c-9.1-0.2-16.6-7.5-16.9-16.6l-0.4-10.7l3.5-0.1l0.4,10.7c0.3,7.3,6.2,13.1,13.5,13.2
                                            l3.4,0c7.3-0.2,13.1-6.1,13.3-13.4l0.3-10.7L441.2,223.2z M404.6,235.7c1.1,8,7.9,14.2,16.1,14.4l3.5,0
                                            c8.8-0.3,15.8-7.4,16.1-16.2l0.3-10.1l-2.3-0.1l-0.3,10.1c-0.2,7.6-6.3,13.7-13.9,14l-3.4,0c-7.6-0.2-13.8-6.2-14.1-13.8
                                            l-0.4-10.1l-2.3,0.1l0.4,10.1C404.5,234.7,404.5,235.2,404.6,235.7z"/>
                                    </g>
                                </g>
                                <g>
                                    
                                        <ellipse transform="matrix(0.2753 -0.9614 0.9614 0.2753 125.4604 550.0765)" fill="#FFFFFF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" cx="427.6" cy="191.8" rx="14.3" ry="14.3"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M437.8,202c-1.9,1.9-4.3,3.2-6.9,3.8
                                        c-7.7,1.8-15.5-3.1-17.3-10.8c-0.9-3.8-0.2-7.6,1.8-10.9c2-3.3,5.2-5.5,9-6.4c3.8-0.9,7.6-0.2,10.9,1.8c3.3,2,5.5,5.2,6.4,9
                                        l0,0c0.9,3.8,0.2,7.6-1.8,10.9C439.2,200.4,438.5,201.3,437.8,202z M417.6,181.8c-0.8,0.8-1.4,1.6-2,2.5
                                        c-2,3.2-2.6,7-1.8,10.7c1.8,7.6,9.3,12.3,16.9,10.6c3.7-0.8,6.8-3.1,8.8-6.3c2-3.2,2.6-7,1.8-10.7l0,0
                                        c-0.8-3.7-3.1-6.8-6.3-8.8c-3.2-2-7-2.6-10.7-1.8C421.8,178.7,419.5,180,417.6,181.8z"/>
                                </g>
                            </g>
                        </g>
                    </g>
                    <g filter="url(#ds-soft)">
                        
                            <image overflow="visible" opacity="0.4" width="113" height="75" href="data:image/png;base64,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
            wYL2f/oH0v8Ao/E3Vg399D8AAAAASUVORK5CYII=" transform="matrix(1 0 0 1 370 1066)">
                        </image>
                        <g>
                            <g>
                                <g>
                                    <g>
                                        
                                            <rect x="381.1" y="1100.7" transform="matrix(7.798295e-02 -0.997 0.997 7.798295e-02 -743.5498 1399.4921)" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="7.5" height="2.1"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M383.8,1097.6l2.7,0.2l-0.6,8.1
                                            l-2.7-0.2L383.8,1097.6z M385.8,1098.4l-1.5-0.1l-0.5,6.9l1.5,0.1L385.8,1098.4z"/>
                                    </g>
                                    <g>
                                        
                                            <rect x="381.7" y="1101.7" transform="matrix(7.798326e-02 -0.997 0.997 7.798326e-02 -743.5665 1401.4691)" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="8.5" height="2.1"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M384.9,1098.1l2.7,0.2l-0.7,9.1
                                            l-2.7-0.2L384.9,1098.1z M386.9,1098.9l-1.5-0.1l-0.6,7.8l1.5,0.1L386.9,1098.9z"/>
                                    </g>
                                    <g>
                                        
                                            <rect x="399.8" y="1079.1" transform="matrix(0.9761 -0.2174 0.2174 0.9761 -225.2002 113.598)" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="7.6" height="2.1"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M407.3,1077.9l0.6,2.7l-8,1.8l-0.6-2.7
                                            L407.3,1077.9z M407.1,1080.1l-0.3-1.4l-6.8,1.5l0.3,1.4L407.1,1080.1z"/>
                                    </g>
                                    <g>
                                        
                                            <rect x="400.5" y="1080" transform="matrix(0.9761 -0.2174 0.2174 0.9761 -225.3802 113.8666)" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="8.5" height="2.1"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M408.9,1078.7l0.6,2.7l-8.9,2l-0.6-2.7
                                            L408.9,1078.7z M408.7,1080.9l-0.3-1.4l-7.7,1.7l0.3,1.4L408.7,1080.9z"/>
                                    </g>
                                    <g>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M389,1083.4c3.9-4.5,10.5-5.1,15.2-1.5
                                            l9.1,7.1c1.8,1.4,1.9,3.3,0.5,5l-14.1,16.2c-1.5,1.7-3.5,1.8-5,0.2l-8.3-8c-4.2-4.1-4.5-10.8-0.6-15.3L389,1083.4z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M397.8,1079.2c2.3,0.1,4.6,0.9,6.6,2.4
                                            l9.1,7.1c0.9,0.7,1.5,1.6,1.6,2.6c0.1,1-0.3,2-1,2.9l-14.1,16.2c-0.8,0.9-1.7,1.4-2.7,1.4c-1,0-2-0.4-2.8-1.2l-8.3-8
                                            c-4.3-4.2-4.6-11.1-0.7-15.7l3.2-3.7C391.1,1080.5,394.4,1079.1,397.8,1079.2z M397.1,1111.2c0.1,0,0.1,0,0.2,0
                                            c0.8,0,1.6-0.5,2.2-1.2l14.1-16.2c0.7-0.8,1-1.6,0.9-2.4c-0.1-0.8-0.5-1.6-1.3-2.2l-9.1-7.1c-4.5-3.5-11-2.9-14.8,1.5
                                            l-3.2,3.7c-3.8,4.3-3.5,10.8,0.6,14.8l8.3,8C395.6,1110.8,396.3,1111.1,397.1,1111.2z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M397.5,1080.6c2.1,0.1,4.1,0.8,5.9,2.1
                                            l8.1,6.3c0.8,0.6,1.3,1.5,1.4,2.3c0.1,0.9-0.2,1.8-0.9,2.6l-12.5,14.4c-0.7,0.8-1.5,1.2-2.4,1.3c-0.9,0-1.8-0.3-2.5-1.1
                                            l-7.4-7.2c-3.9-3.8-4.1-9.9-0.6-14l2.8-3.3C391.5,1081.7,394.5,1080.5,397.5,1080.6z M396.9,1109c0.1,0,0.1,0,0.2,0
                                            c0.7,0,1.4-0.4,2-1.1l12.5-14.4c0.6-0.7,0.8-1.4,0.8-2.1c-0.1-0.7-0.5-1.4-1.2-1.9l-8.1-6.3c-4-3.1-9.8-2.5-13.1,1.3
                                            l-2.8,3.3c-3.3,3.8-3.1,9.6,0.6,13.1l7.4,7.2C395.6,1108.7,396.2,1109,396.9,1109z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M405.2,1080l-1.2-1
                                            c-5.9-4.8-14.6-4-19.6,1.7l-1.6,1.9c-5,5.8-4.5,14.5,1,19.7l1.1,1l-2.9-0.2l-5.3-9.2l0.4-7.4l4.2-6.7l6-4.8
                                            c0,0,5.5-1.7,5.8-1.7c0.2-0.1,6,0,6.6,0.2c0.6,0.2,5.1,3.3,5.1,3.4C404.9,1077.3,405.2,1080,405.2,1080z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M397,1073.2c1.3,0,2.6,0.1,2.9,0.2
                                            c0.4,0.2,2.3,1.4,2.8,1.8c2.4,1.6,2.5,1.7,2.5,1.9c0,0.2,0.3,2.1,0.4,2.9l0.1,0.8l-1.8-1.4c-5.8-4.7-14.3-4-19.2,1.7
                                            l-1.6,1.9c-4.9,5.7-4.5,14.1,1,19.2l1.8,1.6l-4-0.2l-5.4-9.4l0.4-7.5l0-0.1l4.2-6.8l6.1-4.8l0.1,0c0.6-0.2,5.5-1.7,5.8-1.7
                                            C393.2,1073.1,395.2,1073.1,397,1073.2z M404.6,1077.3c-0.5-0.5-4.4-3.1-5-3.3c-0.5-0.2-6-0.3-6.5-0.2c-0.2,0-3.5,1-5.7,1.7
                                            l-5.9,4.7l-4.1,6.6l-0.4,7.2l5.2,8.9l1.9,0.1l-0.5-0.4c-5.7-5.3-6.2-14.2-1.1-20.1l1.6-1.9c5.1-5.9,14-6.7,20.1-1.8l0.6,0.5
                                            C404.7,1078.5,404.6,1077.6,404.6,1077.3z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M383.4,1079.3c5-5.5,13.5-6.1,19.2-1.4
                                            l8.1,6.6l1.8-2.2l-8.1-6.6c-7-5.7-17.1-4.9-23.2,1.7l-2.3,2.7c-5.7,6.9-5,17.1,1.6,23.2l7.7,7.1l2-2.1l-7.7-7.1
                                            c-5.5-5.1-6-13.5-1.3-19.2L383.4,1079.3z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M394.4,1071.6
                                            c3.6,0.1,7.3,1.4,10.3,3.9l8.3,6.8l-2.2,2.7l-8.3-6.8c-5.6-4.6-13.9-4-18.8,1.4l-2.2,2.6c-4.6,5.6-4.1,13.9,1.3,18.8l7.9,7.3
                                            l-2.4,2.6l-7.9-7.3c-6.7-6.2-7.4-16.6-1.6-23.6l2.3-2.7C384.6,1073.3,389.5,1071.4,394.4,1071.6z M412.1,1082.3l-7.9-6.4
                                            c-6.8-5.6-16.8-4.8-22.8,1.7l-2.3,2.7c-5.6,6.8-4.9,16.8,1.6,22.8l7.4,6.9l1.5-1.7l-7.4-6.9c-5.6-5.2-6.2-13.8-1.3-19.7
                                            l2.2-2.6c5.1-5.6,13.8-6.2,19.7-1.4l7.9,6.4L412.1,1082.3z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        
                                            <rect x="442.4" y="1077.7" transform="matrix(3.262829e-02 -0.9995 0.9995 3.262829e-02 -651.9426 1489.3896)" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="2.1" height="7.5"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M439.4,1080l8.1,0.3l-0.1,2.7l-8.1-0.3
                                            L439.4,1080z M446.9,1080.9l-6.9-0.2l0,1.5l6.9,0.2L446.9,1080.9z"/>
                                    </g>
                                    <g>
                                        
                                            <rect x="441.4" y="1078.4" transform="matrix(3.262771e-02 -0.9995 0.9995 3.262771e-02 -653.9642 1489.5114)" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="2.1" height="8.5"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M438,1081.1l9.1,0.3l-0.1,2.7l-9.1-0.3
                                            L438,1081.1z M446.4,1082l-7.8-0.3l0,1.5l7.8,0.3L446.4,1082z"/>
                                    </g>
                                    <g>
                                        
                                            <rect x="464.8" y="1095.5" transform="matrix(0.9652 -0.2615 0.2615 0.9652 -271.2763 160.0977)" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="2.1" height="7.6"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M463.5,1095.6l2.6-0.7l2.1,7.9
                                            l-2.6,0.7L463.5,1095.6z M465.7,1095.7l-1.4,0.4l1.8,6.7l1.4-0.4L465.7,1095.7z"/>
                                    </g>
                                    <g>
                                        
                                            <rect x="463.9" y="1096.2" transform="matrix(0.9652 -0.2615 0.2615 0.9652 -271.6076 159.9117)" fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="2.1" height="8.5"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M462.5,1096.4l2.6-0.7l2.4,8.8
                                            l-2.6,0.7L462.5,1096.4z M464.7,1096.4l-1.4,0.4l2.1,7.6l1.4-0.4L464.7,1096.4z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M462,1084.8c4.6,3.7,5.6,10.3,2.2,15.1
                                            l-6.6,9.4c-1.3,1.8-3.3,2.1-5,0.7l-16.8-13.3c-1.7-1.4-1.9-3.4-0.4-5l7.7-8.6c3.9-4.4,10.6-5,15.2-1.3L462,1084.8z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M434.5,1092.2c0.1-0.2,0.3-0.5,0.5-0.7
                                            l7.7-8.6c4-4.5,10.9-5.1,15.6-1.4l3.8,3c4.8,3.8,5.7,10.6,2.3,15.5l-6.6,9.4c-0.7,1-1.6,1.5-2.5,1.7c-1,0.1-2-0.2-2.9-0.9
                                            l-16.8-13.3c-0.9-0.7-1.5-1.6-1.5-2.6C433.9,1093.6,434.1,1092.9,434.5,1092.2z M464.3,1099.1c2.8-4.6,1.7-10.7-2.6-14
                                            l-3.8-3c-4.5-3.6-11-3-14.8,1.3l-7.7,8.6c-0.7,0.7-1,1.6-0.9,2.4c0.1,0.8,0.5,1.6,1.3,2.2l16.8,13.3c0.8,0.6,1.6,0.9,2.4,0.8
                                            c0.8-0.1,1.5-0.6,2.1-1.4l6.6-9.4C464.1,1099.5,464.2,1099.3,464.3,1099.1z"/>
                                    </g>
                                    <g>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M461.1,1085.5c4.1,3.3,5,9.2,2,13.4
                                            l-5.9,8.4c-1.1,1.6-2.9,1.9-4.4,0.6l-15-11.8c-1.5-1.2-1.7-3-0.4-4.5l6.8-7.7c3.5-3.9,9.4-4.4,13.5-1.2L461.1,1085.5z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M436.6,1092.1c0.1-0.2,0.3-0.4,0.5-0.6
                                            l6.8-7.7c3.6-4,9.7-4.6,14-1.2l3.4,2.7c4.2,3.4,5.1,9.5,2,13.9l-5.9,8.4c-0.6,0.9-1.4,1.4-2.3,1.5c-0.9,0.1-1.8-0.1-2.6-0.8
                                            l-15-11.8c-0.8-0.7-1.3-1.5-1.4-2.4C436.1,1093.4,436.2,1092.7,436.6,1092.1z M463.1,1098.2c2.5-4.1,1.5-9.4-2.3-12.4
                                            l-3.4-2.7c-4-3.1-9.7-2.6-13.1,1.2l-6.8,7.7c-0.6,0.7-0.9,1.4-0.8,2.1c0.1,0.7,0.5,1.4,1.1,1.9l15,11.8
                                            c0.7,0.5,1.4,0.8,2.1,0.7c0.7-0.1,1.3-0.5,1.9-1.3l5.9-8.4C462.9,1098.6,463,1098.4,463.1,1098.2z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M466.1,1100.9l0.9-1.2
                                            c4.5-6.2,3.4-14.8-2.6-19.5l-2-1.6c-6-4.7-14.7-3.9-19.6,1.9l-1,1.2l0-2.9l8.9-5.7l7.4,0l6.9,3.9l5,5.8c0,0,1.9,5.4,2,5.7
                                            c0.1,0.2,0.2,6,0.1,6.6c-0.2,0.6-3,5.2-3.2,5.3C468.8,1100.4,466.1,1100.9,466.1,1100.9z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M441.5,1078.6l9.1-5.8l7.6,0l7.1,4
                                            l5.1,5.9l0,0.1c0.2,0.6,1.9,5.5,2,5.7c0.1,0.2,0.3,6.1,0,6.8c-0.1,0.4-1.3,2.3-1.6,2.9c-1.5,2.5-1.6,2.5-1.8,2.6
                                            c-0.2,0.1-2.1,0.4-2.9,0.5l-0.8,0.1l1.4-1.8c4.5-6,3.3-14.4-2.6-19.1l-2-1.6c-5.9-4.7-14.3-3.8-19.2,1.9l-1.5,1.8
                                            L441.5,1078.6z M450.8,1073.4l-8.7,5.6l0,1.9l0.4-0.5c5.1-6,13.9-6.9,20-2l2,1.6c6.2,4.9,7.3,13.6,2.7,20l-0.4,0.6
                                            c0.8-0.1,1.7-0.3,2-0.4c0.4-0.6,2.9-4.6,3-5.1c0.2-0.5,0-6-0.1-6.5c0-0.2-1.2-3.4-1.9-5.6l-5-5.7l-6.8-3.8L450.8,1073.4z"/>
                                    </g>
                                    <g>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M465.8,1079c5.7,4.8,6.7,13.2,2.3,19.2
                                            l-6.2,8.4l2.3,1.7l6.2-8.4c5.3-7.2,4.1-17.3-2.8-23.1l-2.8-2.2c-7.2-5.4-17.3-4.2-23.1,2.6l-6.7,8l2.2,1.9l6.7-8
                                            c4.8-5.7,13.2-6.6,19.2-2.2L465.8,1079z"/>
                                        <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M434.5,1085.3l6.9-8.2
                                            c5.9-7,16.2-8.1,23.5-2.7l2.8,2.2c7,5.9,8.2,16.2,2.8,23.5l-6.4,8.6l-2.8-2.1l6.4-8.6c4.3-5.8,3.3-14.1-2.2-18.7l-2.7-2.1
                                            c-5.8-4.4-14-3.4-18.7,2.1l-6.9,8.2L434.5,1085.3z M471,1098.4c4.2-6.9,2.8-16-3.6-21.3l-2.8-2.2c-7-5.3-17-4.1-22.7,2.6
                                            l-6.5,7.7l1.7,1.5l6.5-7.7c4.9-5.8,13.5-6.8,19.6-2.2l2.7,2.1c5.8,4.9,6.9,13.5,2.3,19.6l-6,8.1l1.8,1.3l6-8.1
                                            C470.4,1099.3,470.7,1098.8,471,1098.4z"/>
                                    </g>
                                </g>
                                <g>
                                    
                                        <ellipse transform="matrix(0.8162 -0.5778 0.5778 0.8162 -567.9376 451.508)" fill="#FFFFFF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" cx="425.6" cy="1118.3" rx="14.3" ry="14.3"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M424,1103.9c2.7-0.3,5.3,0.2,7.8,1.3
                                        c7.2,3.4,10.2,12.1,6.7,19.2c-1.7,3.5-4.6,6.1-8.2,7.4c-3.6,1.3-7.5,1.1-11-0.6c-3.5-1.7-6.1-4.6-7.4-8.2
                                        c-1.3-3.6-1.1-7.5,0.6-11l0,0c1.7-3.5,4.6-6.1,8.2-7.4C421.9,1104.3,422.9,1104.1,424,1103.9z M427.1,1132.3
                                        c1.1-0.1,2.1-0.4,3.1-0.7c3.6-1.2,6.4-3.8,8.1-7.2c3.4-7,0.4-15.5-6.6-18.8c-3.4-1.6-7.2-1.8-10.8-0.6
                                        c-3.6,1.2-6.4,3.8-8.1,7.2l0,0c-1.6,3.4-1.8,7.2-0.6,10.8c1.2,3.6,3.8,6.4,7.2,8.1C421.9,1132.1,424.5,1132.6,427.1,1132.3z"
                                        />
                                </g>
                            </g>
                        </g>
                    </g>
                    <g id="Dining_Room_table" filter="url(#ds-soft)">
                        
                            <image overflow="visible" opacity="0.4" width="98" height="141" href="data:image/png;base64,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" transform="matrix(1 0 0 1 548 131)">
                        </image>
                        <g>
                            <g>
                                <g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M569.3,159.9v-5.1
                                        c0-2.3-1.9-4.3-4.3-4.3h-3.6c-2.3,0-4.3,1.9-4.3,4.3v5.1c0,2.3,1.9,4.3,4.3,4.3h3.6C567.4,164.2,569.3,162.3,569.3,159.9z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M557,161.7v-8.7c0-1.4,1.2-2.6,2.6-2.6
                                        h7.2c1.4,0,2.6,1.2,2.6,2.6v8.7c0,1.4-1.2,2.6-2.6,2.6h-7.2C558.2,164.3,557,163.2,557,161.7z M569.1,153.1
                                        c0-1.3-1-2.3-2.3-2.3h-7.2c-1.3,0-2.3,1-2.3,2.3v8.7c0,1.3,1,2.3,2.3,2.3h7.2c1.3,0,2.3-1,2.3-2.3V153.1z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M558.2,162.8c-0.6-3.7-0.6-7.4,0-11
                                        c0.2-1.1-0.9-2-2.3-2l0,0c-1.1,0-2.1,0.6-2.3,1.5c-0.9,3.9-0.9,7.9,0,12.1c0.2,0.9,1.1,1.5,2.3,1.5h0
                                        C557.3,164.8,558.4,163.8,558.2,162.8z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M552.8,157.1c0-2,0.2-4,0.7-5.9
                                        c0.2-0.9,1.2-1.6,2.4-1.6c0.8,0,1.6,0.3,2,0.8c0.3,0.4,0.5,0.9,0.4,1.4c-0.6,3.5-0.6,7.2,0,11l0,0c0.1,0.5-0.1,1-0.4,1.3
                                        c-0.5,0.5-1.2,0.8-2,0.8c-1.2,0-2.2-0.7-2.4-1.6C553.1,161.2,552.8,159.2,552.8,157.1z M558.1,151.5c0-0.3-0.1-0.6-0.4-0.9
                                        c-0.4-0.5-1.1-0.7-1.8-0.7c-1,0-1.9,0.6-2.1,1.4c-0.9,3.9-0.9,7.9,0,12c0.2,0.8,1.1,1.4,2.1,1.4c0.7,0,1.4-0.3,1.8-0.7
                                        c0.3-0.3,0.4-0.7,0.3-1.1l0,0c-0.6-3.8-0.6-7.5,0-11.1C558,151.6,558.1,151.6,558.1,151.5z"/>
                                </g>
                                <g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M569.3,186.3v-5.1
                                        c0-2.3-1.9-4.3-4.3-4.3h-3.6c-2.3,0-4.3,1.9-4.3,4.3v5.1c0,2.3,1.9,4.3,4.3,4.3h3.6C567.4,190.6,569.3,188.7,569.3,186.3z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M557,188.1v-8.7c0-1.4,1.2-2.6,2.6-2.6
                                        h7.2c1.4,0,2.6,1.2,2.6,2.6v8.7c0,1.4-1.2,2.6-2.6,2.6h-7.2C558.2,190.7,557,189.6,557,188.1z M569.1,179.5
                                        c0-1.3-1-2.3-2.3-2.3h-7.2c-1.3,0-2.3,1-2.3,2.3v8.7c0,1.3,1,2.3,2.3,2.3h7.2c1.3,0,2.3-1,2.3-2.3V179.5z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M558.2,189.2c-0.6-3.7-0.6-7.4,0-11
                                        c0.2-1.1-0.9-2-2.3-2l0,0c-1.1,0-2.1,0.6-2.3,1.5c-0.9,3.9-0.9,7.9,0,12.1c0.2,0.9,1.1,1.5,2.3,1.5h0
                                        C557.3,191.2,558.4,190.3,558.2,189.2z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M552.8,183.5c0-2,0.2-4,0.7-5.9
                                        c0.2-0.9,1.2-1.6,2.4-1.6c0.8,0,1.6,0.3,2,0.8c0.3,0.4,0.5,0.9,0.4,1.4c-0.6,3.5-0.6,7.2,0,11c0.1,0.5-0.1,1-0.4,1.3
                                        c-0.5,0.5-1.2,0.8-2,0.8c-1.2,0-2.2-0.7-2.4-1.6C553.1,187.6,552.8,185.6,552.8,183.5z M558.1,177.9c0-0.3-0.1-0.6-0.4-0.9
                                        c-0.4-0.5-1.1-0.7-1.8-0.7c-1,0-1.9,0.6-2.1,1.4c-0.9,3.9-0.9,7.9,0,12c0.2,0.8,1.1,1.4,2.1,1.4c0.7,0,1.4-0.3,1.8-0.7
                                        c0.3-0.3,0.4-0.7,0.3-1.1l0,0c-0.6-3.8-0.6-7.5,0-11.1C558,178,558.1,178,558.1,177.9z"/>
                                </g>
                                <g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M569.3,214.9v-5.1
                                        c0-2.3-1.9-4.3-4.3-4.3h-3.6c-2.3,0-4.3,1.9-4.3,4.3v5.1c0,2.3,1.9,4.3,4.3,4.3h3.6C567.4,219.1,569.3,217.2,569.3,214.9z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M557,216.7V208c0-1.4,1.2-2.6,2.6-2.6
                                        h7.2c1.4,0,2.6,1.2,2.6,2.6v8.7c0,1.4-1.2,2.6-2.6,2.6h-7.2C558.2,219.3,557,218.1,557,216.7z M569.1,208c0-1.3-1-2.3-2.3-2.3
                                        h-7.2c-1.3,0-2.3,1-2.3,2.3v8.7c0,1.3,1,2.3,2.3,2.3h7.2c1.3,0,2.3-1,2.3-2.3V208z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M558.2,217.7c-0.6-3.7-0.6-7.4,0-11
                                        c0.2-1.1-0.9-2-2.3-2l0,0c-1.1,0-2.1,0.6-2.3,1.5c-0.9,3.9-0.9,7.9,0,12.1c0.2,0.9,1.1,1.5,2.3,1.5h0
                                        C557.3,219.7,558.4,218.8,558.2,217.7z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M552.8,212c0-2,0.2-4,0.7-5.9
                                        c0.2-0.9,1.2-1.6,2.4-1.6c0.8,0,1.6,0.3,2,0.8c0.3,0.4,0.5,0.9,0.4,1.4c-0.6,3.5-0.6,7.2,0,11l0,0c0.1,0.5-0.1,1-0.4,1.3
                                        c-0.5,0.5-1.2,0.8-2,0.8c-1.2,0-2.2-0.7-2.4-1.6C553.1,216.2,552.8,214.1,552.8,212z M558.1,206.4c0-0.3-0.1-0.6-0.4-0.9
                                        c-0.4-0.5-1.1-0.7-1.8-0.7c-1,0-1.9,0.6-2.1,1.4c-0.9,3.9-0.9,7.9,0,12c0.2,0.8,1.1,1.4,2.1,1.4c0.7,0,1.4-0.3,1.8-0.7
                                        c0.3-0.3,0.4-0.7,0.3-1.1l0,0c-0.6-3.8-0.6-7.5,0-11.1C558,206.6,558.1,206.5,558.1,206.4z"/>
                                </g>
                                <g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M569.3,246.5v-5.1
                                        c0-2.3-1.9-4.3-4.3-4.3h-3.6c-2.3,0-4.3,1.9-4.3,4.3v5.1c0,2.3,1.9,4.3,4.3,4.3h3.6C567.4,250.7,569.3,248.8,569.3,246.5z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M557,248.2v-8.7c0-1.4,1.2-2.6,2.6-2.6
                                        h7.2c1.4,0,2.6,1.2,2.6,2.6v8.7c0,1.4-1.2,2.6-2.6,2.6h-7.2C558.2,250.9,557,249.7,557,248.2z M569.1,239.6
                                        c0-1.3-1-2.3-2.3-2.3h-7.2c-1.3,0-2.3,1-2.3,2.3v8.7c0,1.3,1,2.3,2.3,2.3h7.2c1.3,0,2.3-1,2.3-2.3V239.6z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M558.2,249.3c-0.6-3.7-0.6-7.4,0-11
                                        c0.2-1.1-0.9-2-2.3-2l0,0c-1.1,0-2.1,0.6-2.3,1.5c-0.9,3.9-0.9,7.9,0,12.1c0.2,0.9,1.1,1.5,2.3,1.5h0
                                        C557.3,251.3,558.4,250.4,558.2,249.3z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M552.8,243.6c0-2,0.2-4,0.7-5.9
                                        c0.2-0.9,1.2-1.6,2.4-1.6c0.8,0,1.6,0.3,2,0.8c0.3,0.4,0.5,0.9,0.4,1.4c-0.6,3.5-0.6,7.2,0,11l0,0c0.1,0.5-0.1,1-0.4,1.3
                                        c-0.5,0.5-1.2,0.8-2,0.8c-1.2,0-2.2-0.7-2.4-1.6C553.1,247.8,552.8,245.7,552.8,243.6z M558.1,238c0-0.3-0.1-0.6-0.4-0.9
                                        c-0.4-0.5-1.1-0.7-1.8-0.7c-1,0-1.9,0.6-2.1,1.4c-0.9,3.9-0.9,7.9,0,12c0.2,0.8,1.1,1.4,2.1,1.4c0.7,0,1.4-0.3,1.8-0.7
                                        c0.3-0.3,0.4-0.7,0.3-1.1l0,0c-0.6-3.8-0.6-7.5,0-11.1C558,238.2,558.1,238.1,558.1,238z"/>
                                </g>
                                <g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M619.7,158.2v-5.1
                                        c0-2.3,1.9-4.3,4.3-4.3h4.3c2.3,0,4.3,1.9,4.3,4.3v5.1c0,2.3-1.9,4.3-4.3,4.3h-4.3C621.6,162.5,619.7,160.6,619.7,158.2z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M619.5,160v-8.7c0-1.4,1.2-2.6,2.6-2.6
                                        h7.9c1.4,0,2.6,1.2,2.6,2.6v8.7c0,1.4-1.2,2.6-2.6,2.6h-7.9C620.7,162.6,619.5,161.5,619.5,160z M632.3,151.4
                                        c0-1.3-1-2.3-2.3-2.3h-7.9c-1.3,0-2.3,1-2.3,2.3v8.7c0,1.3,1,2.3,2.3,2.3h7.9c1.3,0,2.3-1,2.3-2.3V151.4z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M631.4,161.1c0.6-3.7,0.6-7.4,0-11
                                        c-0.2-1.1,0.9-2,2.4-2l0,0c1.2,0,2.2,0.6,2.4,1.5c1,3.9,1,7.9,0,12.1c-0.2,0.9-1.2,1.5-2.4,1.5h0
                                        C632.3,163.1,631.2,162.1,631.4,161.1z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M631.2,161.3c0-0.1,0-0.2,0-0.2
                                        c0.6-3.8,0.6-7.5,0-11c-0.1-0.5,0.1-0.9,0.4-1.3c0.5-0.6,1.3-0.9,2.2-0.9c1.2,0,2.3,0.7,2.5,1.6c1,3.9,1,8,0,12.2
                                        c-0.2,0.9-1.3,1.6-2.5,1.6c-0.9,0-1.7-0.3-2.2-0.9C631.4,162,631.2,161.7,631.2,161.3z M632,155.4c0,1.9-0.2,3.8-0.5,5.7l0,0
                                        c-0.1,0.4,0.1,0.7,0.3,1.1c0.4,0.5,1.1,0.8,1.9,0.8c1.1,0,2.1-0.6,2.3-1.4c1-4.1,1-8.1,0-12c-0.2-0.8-1.1-1.4-2.3-1.4
                                        c-0.8,0-1.5,0.3-1.9,0.8c-0.3,0.3-0.4,0.7-0.3,1.1C631.8,151.8,632,153.6,632,155.4z"/>
                                </g>
                                <g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M619.7,184.6v-5.1
                                        c0-2.3,1.9-4.3,4.3-4.3h4.3c2.3,0,4.3,1.9,4.3,4.3v5.1c0,2.3-1.9,4.3-4.3,4.3h-4.3C621.6,188.9,619.7,187,619.7,184.6z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M619.5,186.4v-8.7
                                        c0-1.4,1.2-2.6,2.6-2.6h7.9c1.4,0,2.6,1.2,2.6,2.6v8.7c0,1.4-1.2,2.6-2.6,2.6h-7.9C620.7,189,619.5,187.9,619.5,186.4z
                                        M632.3,177.8c0-1.3-1-2.3-2.3-2.3h-7.9c-1.3,0-2.3,1-2.3,2.3v8.7c0,1.3,1,2.3,2.3,2.3h7.9c1.3,0,2.3-1,2.3-2.3V177.8z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M631.4,187.5c0.6-3.7,0.6-7.4,0-11
                                        c-0.2-1.1,0.9-2,2.4-2l0,0c1.2,0,2.2,0.6,2.4,1.5c1,3.9,1,7.9,0,12.1c-0.2,0.9-1.2,1.5-2.4,1.5h0
                                        C632.3,189.5,631.2,188.6,631.4,187.5z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M631.2,187.7c0-0.1,0-0.2,0-0.2
                                        c0.6-3.8,0.6-7.5,0-11c-0.1-0.5,0.1-0.9,0.4-1.3c0.5-0.6,1.3-0.9,2.2-0.9c1.2,0,2.3,0.7,2.5,1.6c1,3.9,1,8,0,12.2
                                        c-0.2,0.9-1.3,1.6-2.5,1.6c-0.9,0-1.7-0.3-2.2-0.9C631.4,188.4,631.2,188.1,631.2,187.7z M632,181.8c0,1.9-0.2,3.8-0.5,5.7
                                        l0,0c-0.1,0.4,0.1,0.7,0.3,1.1c0.4,0.5,1.1,0.8,1.9,0.8c1.1,0,2.1-0.6,2.3-1.4c1-4.1,1-8.1,0-12c-0.2-0.8-1.1-1.4-2.3-1.4
                                        c-0.8,0-1.5,0.3-1.9,0.8c-0.3,0.3-0.4,0.7-0.3,1.1C631.8,178.2,632,180,632,181.8z"/>
                                </g>
                                <g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M619.7,213.2v-5.1
                                        c0-2.3,1.9-4.3,4.3-4.3h4.3c2.3,0,4.3,1.9,4.3,4.3v5.1c0,2.3-1.9,4.3-4.3,4.3h-4.3C621.6,217.4,619.7,215.5,619.7,213.2z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M619.5,215v-8.7c0-1.4,1.2-2.6,2.6-2.6
                                        h7.9c1.4,0,2.6,1.2,2.6,2.6v8.7c0,1.4-1.2,2.6-2.6,2.6h-7.9C620.7,217.6,619.5,216.4,619.5,215z M632.3,206.3
                                        c0-1.3-1-2.3-2.3-2.3h-7.9c-1.3,0-2.3,1-2.3,2.3v8.7c0,1.3,1,2.3,2.3,2.3h7.9c1.3,0,2.3-1,2.3-2.3V206.3z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M631.4,216c0.6-3.7,0.6-7.4,0-11
                                        c-0.2-1.1,0.9-2,2.4-2l0,0c1.2,0,2.2,0.6,2.4,1.5c1,3.9,1,7.9,0,12.1c-0.2,0.9-1.2,1.5-2.4,1.5h0
                                        C632.3,218,631.2,217.1,631.4,216z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M631.2,216.2c0-0.1,0-0.2,0-0.2
                                        c0.6-3.8,0.6-7.5,0-11c-0.1-0.5,0.1-0.9,0.4-1.3c0.5-0.6,1.3-0.9,2.2-0.9c1.2,0,2.3,0.7,2.5,1.6c1,3.9,1,8,0,12.2
                                        c-0.2,0.9-1.3,1.6-2.5,1.6c-0.9,0-1.7-0.3-2.2-0.9C631.4,217,631.2,216.6,631.2,216.2z M632,210.3c0,1.9-0.2,3.8-0.5,5.7l0,0
                                        c-0.1,0.4,0.1,0.7,0.3,1.1c0.4,0.5,1.1,0.8,1.9,0.8c1.1,0,2.1-0.6,2.3-1.4c1-4.1,1-8.1,0-12c-0.2-0.8-1.1-1.4-2.3-1.4
                                        c-0.8,0-1.5,0.3-1.9,0.8c-0.3,0.3-0.4,0.7-0.3,1.1C631.8,206.7,632,208.5,632,210.3z"/>
                                </g>
                                <g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M619.7,244.8v-5.1
                                        c0-2.3,1.9-4.3,4.3-4.3h4.3c2.3,0,4.3,1.9,4.3,4.3v5.1c0,2.3-1.9,4.3-4.3,4.3h-4.3C621.6,249,619.7,247.1,619.7,244.8z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M619.5,246.6v-8.7
                                        c0-1.4,1.2-2.6,2.6-2.6h7.9c1.4,0,2.6,1.2,2.6,2.6v8.7c0,1.4-1.2,2.6-2.6,2.6h-7.9C620.7,249.2,619.5,248,619.5,246.6z
                                        M632.3,237.9c0-1.3-1-2.3-2.3-2.3h-7.9c-1.3,0-2.3,1-2.3,2.3v8.7c0,1.3,1,2.3,2.3,2.3h7.9c1.3,0,2.3-1,2.3-2.3V237.9z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M631.4,247.6c0.6-3.7,0.6-7.4,0-11
                                        c-0.2-1.1,0.9-2,2.4-2l0,0c1.2,0,2.2,0.6,2.4,1.5c1,3.9,1,7.9,0,12.1c-0.2,0.9-1.2,1.5-2.4,1.5h0
                                        C632.3,249.6,631.2,248.7,631.4,247.6z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M631.2,247.8c0-0.1,0-0.2,0-0.2
                                        c0.6-3.8,0.6-7.5,0-11c-0.1-0.5,0.1-0.9,0.4-1.3c0.5-0.6,1.3-0.9,2.2-0.9c1.2,0,2.3,0.7,2.5,1.6c1,3.9,1,8,0,12.2
                                        c-0.2,0.9-1.3,1.6-2.5,1.6c-0.9,0-1.7-0.3-2.2-0.9C631.4,248.6,631.2,248.2,631.2,247.8z M632,241.9c0,1.9-0.2,3.8-0.5,5.7
                                        l0,0c-0.1,0.4,0.1,0.7,0.3,1.1c0.4,0.5,1.1,0.8,1.9,0.8c1.1,0,2.1-0.6,2.3-1.4c1-4.1,1-8.1,0-12c-0.2-0.8-1.1-1.4-2.3-1.4
                                        c-0.8,0-1.5,0.3-1.9,0.8c-0.3,0.3-0.4,0.7-0.3,1.1C631.8,238.3,632,240.1,632,241.9z"/>
                                </g>
                                <g>
                                    <path fill="#FFFFFF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M616.2,263.6h-42.3
                                        c-4.3,0-7.7-3.7-7.7-8.2V143.7c0-4.5,3.5-8.2,7.7-8.2h42.3c4.3,0,7.7,3.7,7.7,8.2v111.7C623.9,259.9,620.5,263.6,616.2,263.6z
                                        "/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M566,255.4V143.7c0-4.6,3.5-8.3,7.9-8.3
                                        h42.3c4.3,0,7.9,3.7,7.9,8.3v111.7c0,4.6-3.5,8.3-7.9,8.3h-42.3C569.6,263.7,566,260,566,255.4z M623.8,143.7
                                        c0-4.4-3.4-8-7.6-8h-42.3c-4.2,0-7.6,3.6-7.6,8v111.7c0,4.4,3.4,8,7.6,8h42.3c4.2,0,7.6-3.6,7.6-8V143.7z"/>
                                </g>
                                <g>
                                    
                                        <rect x="585.9" y="135.5" fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="17.2" height="128"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M585.8,263.7V135.4h17.5v128.3H585.8z
                                        M586.1,135.7v127.8H603V135.7H586.1z"/>
                                </g>
                                <g>
                                    <polygon fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" points="576.2,163.9 568.8,156.1 
                                        576.1,148.4 583.5,156.2 						"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M568.6,156.1l7.5-7.9l7.6,8l-7.5,7.9
                                        L568.6,156.1z M576.1,148.7l-7.1,7.5l7.2,7.6l7.1-7.5L576.1,148.7z"/>
                                </g>
                                <g>
                                    
                                        <ellipse fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" cx="576.2" cy="156.2" rx="4.5" ry="4.7"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M571.5,156.2c0-2.7,2.1-4.9,4.6-4.9
                                        s4.6,2.2,4.6,4.9c0,2.7-2.1,4.9-4.6,4.9S571.5,158.9,571.5,156.2z M580.5,156.2c0-2.5-1.9-4.6-4.3-4.6c-2.4,0-4.3,2.1-4.3,4.6
                                        s1.9,4.6,4.3,4.6C578.6,160.8,580.5,158.7,580.5,156.2z"/>
                                </g>
                                <g>
                                    <path fill="#FFFFFF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M576.2,159.2c-1.6,0-2.9-1.4-2.9-3
                                        c0-1.7,1.3-3,2.9-3c1.6,0,2.9,1.4,2.9,3C579,157.8,577.8,159.2,576.2,159.2z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M573.2,156.2c0-1.8,1.4-3.2,3-3.2
                                        c1.7,0,3,1.4,3,3.2c0,1.8-1.4,3.2-3,3.2C574.5,159.3,573.2,157.9,573.2,156.2z M578.9,156.2c0-1.6-1.2-2.9-2.7-2.9
                                        c-1.5,0-2.7,1.3-2.7,2.9c0,1.6,1.2,2.9,2.7,2.9C577.7,159.1,578.9,157.8,578.9,156.2z"/>
                                </g>
                                <g>
                                    <polygon fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" points="576.2,190.9 568.8,183.2 
                                        576.1,175.5 583.5,183.2 						"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M568.6,183.2l7.5-7.9l7.6,8l-7.5,7.9
                                        L568.6,183.2z M576.1,175.7l-7.1,7.5l7.2,7.6l7.1-7.5L576.1,175.7z"/>
                                </g>
                                <g>
                                    
                                        <ellipse fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" cx="576.2" cy="183.2" rx="4.5" ry="4.7"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M571.5,183.2c0-2.7,2.1-4.9,4.6-4.9
                                        s4.6,2.2,4.6,4.9c0,2.7-2.1,4.9-4.6,4.9S571.5,185.9,571.5,183.2z M580.5,183.2c0-2.5-1.9-4.6-4.3-4.6c-2.4,0-4.3,2.1-4.3,4.6
                                        s1.9,4.6,4.3,4.6C578.6,187.8,580.5,185.7,580.5,183.2z"/>
                                </g>
                                <g>
                                    <path fill="#FFFFFF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M576.2,186.2c-1.6,0-2.9-1.4-2.9-3
                                        c0-1.7,1.3-3,2.9-3c1.6,0,2.9,1.4,2.9,3C579,184.9,577.8,186.2,576.2,186.2z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M573.2,183.2c0-1.8,1.4-3.2,3-3.2
                                        c1.7,0,3,1.4,3,3.2c0,1.8-1.4,3.2-3,3.2C574.5,186.4,573.2,184.9,573.2,183.2z M578.9,183.2c0-1.6-1.2-2.9-2.7-2.9
                                        c-1.5,0-2.7,1.3-2.7,2.9c0,1.6,1.2,2.9,2.7,2.9C577.7,186.1,578.9,184.8,578.9,183.2z"/>
                                </g>
                                <g>
                                    <polygon fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" points="576.2,220.1 568.8,212.3 
                                        576.1,204.6 583.5,212.4 						"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M568.6,212.3l7.5-7.9l7.6,8l-7.5,7.9
                                        L568.6,212.3z M576.1,204.8l-7.1,7.5l7.2,7.6l7.1-7.5L576.1,204.8z"/>
                                </g>
                                <g>
                                    
                                        <ellipse fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" cx="576.2" cy="212.4" rx="4.5" ry="4.7"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M571.5,212.4c0-2.7,2.1-4.9,4.6-4.9
                                        s4.6,2.2,4.6,4.9c0,2.7-2.1,4.9-4.6,4.9S571.5,215,571.5,212.4z M580.5,212.4c0-2.5-1.9-4.6-4.3-4.6c-2.4,0-4.3,2.1-4.3,4.6
                                        s1.9,4.6,4.3,4.6C578.6,216.9,580.5,214.9,580.5,212.4z"/>
                                </g>
                                <g>
                                    <path fill="#FFFFFF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M576.2,215.4c-1.6,0-2.9-1.4-2.9-3
                                        c0-1.7,1.3-3,2.9-3c1.6,0,2.9,1.4,2.9,3C579,214,577.8,215.4,576.2,215.4z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M573.2,212.4c0-1.8,1.4-3.2,3-3.2
                                        c1.7,0,3,1.4,3,3.2s-1.4,3.2-3,3.2C574.5,215.5,573.2,214.1,573.2,212.4z M578.9,212.4c0-1.6-1.2-2.9-2.7-2.9
                                        c-1.5,0-2.7,1.3-2.7,2.9c0,1.6,1.2,2.9,2.7,2.9C577.7,215.2,578.9,213.9,578.9,212.4z"/>
                                </g>
                                <g>
                                    <polygon fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" points="576.2,251.6 568.8,243.8 
                                        576.1,236.1 583.5,243.9 						"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M568.6,243.8l7.5-7.9l7.6,8l-7.5,7.9
                                        L568.6,243.8z M576.1,236.3l-7.1,7.5l7.2,7.6l7.1-7.5L576.1,236.3z"/>
                                </g>
                                <g>
                                    
                                        <ellipse fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" cx="576.2" cy="243.8" rx="4.5" ry="4.7"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M571.5,243.8c0-2.7,2.1-4.9,4.6-4.9
                                        s4.6,2.2,4.6,4.9c0,2.7-2.1,4.9-4.6,4.9S571.5,246.5,571.5,243.8z M580.5,243.8c0-2.5-1.9-4.6-4.3-4.6c-2.4,0-4.3,2.1-4.3,4.6
                                        c0,2.5,1.9,4.6,4.3,4.6C578.6,248.4,580.5,246.4,580.5,243.8z"/>
                                </g>
                                <g>
                                    <path fill="#FFFFFF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M576.2,246.9c-1.6,0-2.9-1.4-2.9-3
                                        c0-1.7,1.3-3,2.9-3c1.6,0,2.9,1.4,2.9,3C579,245.5,577.8,246.9,576.2,246.9z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M573.2,243.8c0-1.8,1.4-3.2,3-3.2
                                        c1.7,0,3,1.4,3,3.2c0,1.8-1.4,3.2-3,3.2C574.5,247,573.2,245.6,573.2,243.8z M578.9,243.8c0-1.6-1.2-2.9-2.7-2.9
                                        c-1.5,0-2.7,1.3-2.7,2.9c0,1.6,1.2,2.9,2.7,2.9C577.7,246.7,578.9,245.4,578.9,243.8z"/>
                                </g>
                                <g>
                                    <polygon fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" points="613.2,163.9 605.8,156.1 
                                        613.1,148.4 620.5,156.2 						"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M605.6,156.1l7.5-7.9l7.6,8l-7.5,7.9
                                        L605.6,156.1z M613.1,148.7l-7.1,7.5l7.2,7.6l7.1-7.5L613.1,148.7z"/>
                                </g>
                                <g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M613.2,160.9c-2.5,0-4.5-2.1-4.5-4.7
                                        c0-2.6,2-4.7,4.5-4.7c2.5,0,4.5,2.1,4.5,4.7C617.6,158.8,615.6,160.9,613.2,160.9z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M608.5,156.2c0-2.7,2.1-4.9,4.6-4.9
                                        s4.6,2.2,4.6,4.9c0,2.7-2.1,4.9-4.6,4.9S608.5,158.9,608.5,156.2z M617.5,156.2c0-2.5-1.9-4.6-4.3-4.6c-2.4,0-4.3,2.1-4.3,4.6
                                        s1.9,4.6,4.3,4.6C615.6,160.8,617.5,158.7,617.5,156.2z"/>
                                </g>
                                <g>
                                    <path fill="#FFFFFF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M613.2,159.2c-1.6,0-2.9-1.4-2.9-3
                                        c0-1.7,1.3-3,2.9-3c1.6,0,2.9,1.4,2.9,3C616,157.8,614.8,159.2,613.2,159.2z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M610.1,156.2c0-1.8,1.4-3.2,3-3.2
                                        c1.7,0,3,1.4,3,3.2c0,1.8-1.4,3.2-3,3.2C611.5,159.3,610.1,157.9,610.1,156.2z M615.9,156.2c0-1.6-1.2-2.9-2.7-2.9
                                        c-1.5,0-2.7,1.3-2.7,2.9c0,1.6,1.2,2.9,2.7,2.9C614.7,159.1,615.9,157.8,615.9,156.2z"/>
                                </g>
                                <g>
                                    <polygon fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" points="613.2,190.9 605.8,183.2 
                                        613.1,175.5 620.5,183.2 						"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M605.6,183.2l7.5-7.9l7.6,8l-7.5,7.9
                                        L605.6,183.2z M613.1,175.7l-7.1,7.5l7.2,7.6l7.1-7.5L613.1,175.7z"/>
                                </g>
                                <g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M613.2,187.9c-2.5,0-4.5-2.1-4.5-4.7
                                        c0-2.6,2-4.7,4.5-4.7c2.5,0,4.5,2.1,4.5,4.7C617.6,185.8,615.6,187.9,613.2,187.9z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M608.5,183.2c0-2.7,2.1-4.9,4.6-4.9
                                        s4.6,2.2,4.6,4.9c0,2.7-2.1,4.9-4.6,4.9S608.5,185.9,608.5,183.2z M617.5,183.2c0-2.5-1.9-4.6-4.3-4.6c-2.4,0-4.3,2.1-4.3,4.6
                                        s1.9,4.6,4.3,4.6C615.6,187.8,617.5,185.7,617.5,183.2z"/>
                                </g>
                                <g>
                                    <path fill="#FFFFFF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M613.2,186.2c-1.6,0-2.9-1.4-2.9-3
                                        c0-1.7,1.3-3,2.9-3c1.6,0,2.9,1.4,2.9,3C616,184.9,614.8,186.2,613.2,186.2z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M610.1,183.2c0-1.8,1.4-3.2,3-3.2
                                        c1.7,0,3,1.4,3,3.2c0,1.8-1.4,3.2-3,3.2C611.5,186.4,610.1,184.9,610.1,183.2z M615.9,183.2c0-1.6-1.2-2.9-2.7-2.9
                                        c-1.5,0-2.7,1.3-2.7,2.9c0,1.6,1.2,2.9,2.7,2.9C614.7,186.1,615.9,184.8,615.9,183.2z"/>
                                </g>
                                <g>
                                    <polygon fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" points="613.2,220.1 605.8,212.3 
                                        613.1,204.6 620.5,212.4 						"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M605.6,212.3l7.5-7.9l7.6,8l-7.5,7.9
                                        L605.6,212.3z M613.1,204.8l-7.1,7.5l7.2,7.6l7.1-7.5L613.1,204.8z"/>
                                </g>
                                <g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M613.2,217.1c-2.5,0-4.5-2.1-4.5-4.7
                                        s2-4.7,4.5-4.7c2.5,0,4.5,2.1,4.5,4.7S615.6,217.1,613.2,217.1z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M608.5,212.4c0-2.7,2.1-4.9,4.6-4.9
                                        s4.6,2.2,4.6,4.9c0,2.7-2.1,4.9-4.6,4.9S608.5,215,608.5,212.4z M617.5,212.4c0-2.5-1.9-4.6-4.3-4.6c-2.4,0-4.3,2.1-4.3,4.6
                                        s1.9,4.6,4.3,4.6C615.6,216.9,617.5,214.9,617.5,212.4z"/>
                                </g>
                                <g>
                                    <path fill="#FFFFFF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M613.2,215.4c-1.6,0-2.9-1.4-2.9-3
                                        c0-1.7,1.3-3,2.9-3c1.6,0,2.9,1.4,2.9,3C616,214,614.8,215.4,613.2,215.4z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M610.1,212.4c0-1.8,1.4-3.2,3-3.2
                                        c1.7,0,3,1.4,3,3.2s-1.4,3.2-3,3.2C611.5,215.5,610.1,214.1,610.1,212.4z M615.9,212.4c0-1.6-1.2-2.9-2.7-2.9
                                        c-1.5,0-2.7,1.3-2.7,2.9c0,1.6,1.2,2.9,2.7,2.9C614.7,215.2,615.9,213.9,615.9,212.4z"/>
                                </g>
                                <g>
                                    <polygon fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" points="613.2,251.6 605.8,243.8 
                                        613.1,236.1 620.5,243.9 						"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M605.6,243.8l7.5-7.9l7.6,8l-7.5,7.9
                                        L605.6,243.8z M613.1,236.3l-7.1,7.5l7.2,7.6l7.1-7.5L613.1,236.3z"/>
                                </g>
                                <g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M613.2,248.6c-2.5,0-4.5-2.1-4.5-4.7
                                        c0-2.6,2-4.7,4.5-4.7c2.5,0,4.5,2.1,4.5,4.7C617.6,246.5,615.6,248.6,613.2,248.6z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M608.5,243.8c0-2.7,2.1-4.9,4.6-4.9
                                        s4.6,2.2,4.6,4.9c0,2.7-2.1,4.9-4.6,4.9S608.5,246.5,608.5,243.8z M617.5,243.8c0-2.5-1.9-4.6-4.3-4.6c-2.4,0-4.3,2.1-4.3,4.6
                                        c0,2.5,1.9,4.6,4.3,4.6C615.6,248.4,617.5,246.4,617.5,243.8z"/>
                                </g>
                                <g>
                                    <path fill="#FFFFFF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M613.2,246.9c-1.6,0-2.9-1.4-2.9-3
                                        c0-1.7,1.3-3,2.9-3c1.6,0,2.9,1.4,2.9,3C616,245.5,614.8,246.9,613.2,246.9z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M610.1,243.8c0-1.8,1.4-3.2,3-3.2
                                        c1.7,0,3,1.4,3,3.2c0,1.8-1.4,3.2-3,3.2C611.5,247,610.1,245.6,610.1,243.8z M615.9,243.8c0-1.6-1.2-2.9-2.7-2.9
                                        c-1.5,0-2.7,1.3-2.7,2.9c0,1.6,1.2,2.9,2.7,2.9C614.7,246.7,615.9,245.4,615.9,243.8z"/>
                                </g>
                                <g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M597.4,197.9c3.4-2.2,2.5-4.5,1.7-6.1
                                        c-1.2-2.6-3.1-3.1-3.1-3.1s-0.1,2.6-1.4,3.3c-1.2,0.7-2.4,4.4-0.6,5.2C596,198,596.2,198.7,597.4,197.9z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M593,195.3c0-1.4,0.8-3,1.6-3.5
                                        c1.2-0.6,1.3-3.1,1.3-3.2l0-0.2l0.2,0c0.1,0,2,0.5,3.2,3.1c0.7,1.4,1.9,4-1.8,6.3l0,0c-1,0.6-1.4,0.4-2.2-0.1
                                        c-0.3-0.2-0.7-0.4-1.3-0.6c-0.7-0.3-1-0.9-1.1-1.8C593,195.4,593,195.4,593,195.3z M596.2,188.9c-0.1,0.6-0.3,2.6-1.4,3.2
                                        c-0.8,0.4-1.5,2.1-1.4,3.4c0,0.5,0.2,1.3,0.9,1.6c0.5,0.2,1,0.5,1.3,0.6c0.8,0.4,1.1,0.6,1.9,0.1l0,0c3.2-2,2.5-4.1,1.7-5.9
                                        C598,189.8,596.6,189.1,596.2,188.9z"/>
                                </g>
                                <g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M594.7,201.2c-1.2,1.2-1.1,3.6,0.2,4.8
                                        c1.3,1.2,3.1,1.3,3.2,2.3c0,0,1.4-1.5,1.2-3.7c-0.1-2.2-0.6-3.1-1.5-4C596.9,199.8,595.8,200.1,594.7,201.2z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M593.7,203.5c0-0.9,0.3-1.8,0.9-2.3
                                        c1.3-1.2,2.5-1.5,3.4-0.6c0.9,0.9,1.4,1.8,1.6,4.1c0.1,2.2-1.2,3.8-1.3,3.8l-0.2,0.2l0-0.3c-0.1-0.5-0.6-0.7-1.3-1.1
                                        c-0.6-0.3-1.3-0.6-1.9-1.2C594.1,205.5,593.7,204.5,593.7,203.5C593.7,203.5,593.7,203.5,593.7,203.5z M599.2,205
                                        c0-0.1,0-0.2,0-0.3c-0.1-2.2-0.6-3.1-1.5-3.9c-1-1-2.3-0.1-3,0.6l0,0c-0.5,0.5-0.8,1.3-0.8,2.2c0,0.9,0.4,1.9,1,2.4
                                        c0.6,0.5,1.2,0.8,1.8,1.1c0.6,0.3,1.2,0.6,1.4,1C598.5,207.6,599.2,206.5,599.2,205z"/>
                                </g>
                                <g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M595.9,199.3c-0.2-2.8,2.6-5,4.4-1.8
                                        c1,1.7,3.8,2.7,3.8,2.7s-2.5,2.5-3.6,2.8c-3.1,0.8-4.4-0.8-4.7-1.8c-0.3-1,0.9-1.2,0.9-1.2S595.9,200,595.9,199.3z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M595.6,201c0-0.2,0.1-0.4,0.2-0.5
                                        c0.1-0.2,0.3-0.3,0.4-0.4c-0.2-0.1-0.5-0.3-0.5-0.7l0,0c-0.1-1.6,0.7-3.1,1.9-3.5c1-0.3,2,0.3,2.8,1.6c1,1.7,3.7,2.6,3.7,2.7
                                        l0.2,0.1l-0.2,0.2c-0.1,0.1-2.5,2.6-3.6,2.9c-3.3,0.8-4.6-0.9-4.9-1.9C595.6,201.2,595.6,201.1,595.6,201z M596.7,200.2
                                        c0,0-0.5,0.1-0.7,0.4c-0.1,0.2-0.1,0.4-0.1,0.6c0.3,1,1.5,2.4,4.5,1.7c0.9-0.2,2.8-2.1,3.3-2.6c-0.7-0.3-2.8-1.2-3.7-2.7
                                        c-0.7-1.2-1.5-1.7-2.4-1.4c-1.1,0.3-1.8,1.7-1.7,3.2l0,0c0,0.6,0.7,0.6,0.7,0.6L596.7,200.2z"/>
                                </g>
                                <g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M594.7,200.4c0.1-2-1-2.9-2.3-2.9
                                        s-3.2,1.9-3.7,4.7c-0.2,1.4-0.3,2.5-0.3,2.5s1.5,0,3.1,0.4c2.1,0.5,3.6-0.8,4-2.3C595.9,201.2,594.7,200.4,594.7,200.4z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M588.2,204.8l0-0.2c0,0,0.1-1,0.3-2.5
                                        c0.4-2.9,2.3-4.9,3.8-4.9c0.7,0,1.3,0.2,1.8,0.7c0.5,0.5,0.7,1.3,0.7,2.3c0.3,0.2,1.1,1,0.8,2.4c-0.4,1.6-2,3-4.2,2.4
                                        c-1.6-0.4-3.1-0.4-3.1-0.4L588.2,204.8z M594.6,200.2c0-0.9-0.2-1.5-0.6-2c-0.4-0.4-0.9-0.6-1.6-0.6c-1.3,0-3.1,1.9-3.5,4.6
                                        c-0.2,1.1-0.3,2-0.3,2.3c0.4,0,1.7,0,3,0.4c2,0.5,3.4-0.8,3.8-2.2c0.4-1.4-0.7-2.1-0.7-2.2l-0.1,0l0-0.1
                                        C594.6,200.3,594.6,200.3,594.6,200.2z"/>
                                </g>
                                <g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M595.3,194.5c1.3,1.9,1.4,2.5,0.7,4
                                        c-0.2,0.5-2.2,0.2-2.2,0.2s-1.4,2.5-3,1.1c-1.6-1.4,0.9-9.7,1.2-8.6C592.2,192.3,594.7,193.6,595.3,194.5z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M590.1,197.7c0-2.1,0.8-5.1,1.3-6.3
                                        c0.2-0.5,0.4-0.6,0.5-0.6c0.1,0,0.2,0.1,0.2,0.2c0.1,0.6,1.1,1.4,1.9,2.1c0.6,0.4,1.1,0.9,1.4,1.2l0,0
                                        c1.4,1.9,1.5,2.6,0.7,4.2c-0.2,0.5-1.7,0.3-2.2,0.3c-0.2,0.3-0.9,1.3-1.8,1.5c-0.5,0.1-0.9-0.1-1.4-0.4
                                        C590.3,199.5,590.1,198.7,590.1,197.7z M591.8,191.3c-0.4,0.6-1.3,3.7-1.4,6.1c-0.1,1.2,0.1,1.9,0.5,2.3
                                        c0.4,0.3,0.8,0.4,1.1,0.4c0.9-0.2,1.6-1.4,1.7-1.4l0-0.1l0.1,0c0.9,0.1,1.9,0.2,2-0.1c0.7-1.5,0.6-2-0.7-3.9l0,0
                                        c-0.2-0.3-0.7-0.7-1.3-1.2C593,192.7,592.1,192,591.8,191.3z"/>
                                </g>
                                <g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M596.5,200.1l0.1-0.3
                                        c1.4,0.7,3,0.9,4.6,0.8l0,0.3C599.6,201.1,598,200.9,596.5,200.1z"/>
                                </g>
                                <g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M592.3,194l0.2-0.2
                                        c0.9,1.5,1.4,3.1,1.5,4.8l-0.3,0C593.6,197,593.2,195.4,592.3,194z"/>
                                </g>
                                <g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M590.8,203.3c1.5-0.6,2.7-1.5,3.8-2.9
                                        l0.2,0.2c-1.1,1.4-2.4,2.4-3.9,3L590.8,203.3z"/>
                                </g>
                            </g>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M701.9,796.5v141.9c0,5.5-2.9,10.7-7.6,13.5
                                c-5.8,3.5-15.8,6.8-32.8,6.8c-16.9,0-26.9-3.4-32.8-6.9c-4.8-2.8-7.7-8-7.7-13.6V796.6c0-2.5,0.5-5,1.4-7.3
                                c0.7-0.1,3.9-0.6,8-4.9c4.6-4.9,10.2-4.4,10.2-4.4l-1.7-5.1c0,0-0.1,0-0.3,0c1.3-0.6,2.6-1.2,4.1-1.7l0.9,3.9
                                c0,0,8.7-2.1,18.1-2.2c9.4,0.1,18.1,2.2,18.1,2.2l1-4.1c1.7,0.7,3.3,1.4,4.8,2.1c-1.1-0.2-1.8-0.2-1.8-0.2L682,780
                                c0,0,5.6-0.5,10.2,4.4c4.6,4.9,8.1,4.9,8.4,5.1C701.7,792,701.9,793.8,701.9,796.5z"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M661.4,959c-14.1,0-25.2-2.3-32.9-6.9
                                c-4.8-2.9-7.8-8.2-7.8-13.9V796.6c0-2.5,0.5-5,1.4-7.4c0-0.1,0.1-0.2,0.3-0.2c0.6,0,3.7-0.5,7.8-4.8c4-4.2,8.6-4.6,10-4.6
                                l-1.5-4.5l-0.1,0c-0.1,0-0.3-0.1-0.3-0.2c0-0.1,0-0.3,0.2-0.4c1.3-0.6,2.7-1.2,4.1-1.7c0.1,0,0.2,0,0.2,0c0.1,0,0.1,0.1,0.2,0.2
                                l0.9,3.6c1.6-0.4,9.5-2,17.9-2.2c8.3,0.1,16.3,1.8,17.9,2.2l0.9-3.8c0-0.1,0.1-0.2,0.2-0.2c0.1,0,0.2,0,0.3,0
                                c1.6,0.6,3.3,1.3,4.8,2.2c0.1,0.1,0.2,0.2,0.2,0.4c0,0.1-0.2,0.2-0.3,0.2c-0.7-0.1-1.2-0.1-1.5-0.2l-1.5,4.5
                                c1.5,0,6.1,0.3,10,4.6c3.9,4.2,7,4.8,8,4.9c0.2,0,0.3,0.1,0.4,0.1c0.1,0,0.1,0.1,0.1,0.1c1.1,2.5,1.3,4.3,1.3,7v141.9
                                c0,5.7-3,11-7.8,13.8C686.8,956.7,675.6,959,661.4,959z M622.5,789.6c-0.8,2.2-1.3,4.6-1.3,7v141.6c0,5.5,2.9,10.6,7.5,13.3
                                c7.6,4.5,18.6,6.9,32.6,6.9c14.1,0,25.1-2.3,32.7-6.8c4.6-2.7,7.5-7.8,7.5-13.3V796.5c0-2.6-0.2-4.3-1.2-6.7c0,0-0.1,0-0.1,0
                                c-1.1-0.2-4.3-0.8-8.3-5.1c-4.5-4.8-9.9-4.3-10-4.3c-0.1,0-0.2,0-0.3-0.1c-0.1-0.1-0.1-0.2-0.1-0.3l1.7-5.1
                                c0-0.1,0.2-0.2,0.3-0.2c0,0,0,0,0.1,0c-1-0.5-1.9-0.9-2.9-1.3l-0.9,3.8c0,0.2-0.2,0.3-0.4,0.2c-0.1,0-8.8-2.1-18-2.2
                                c-9.2,0.1-17.9,2.2-18,2.2c-0.1,0-0.2,0-0.2,0c-0.1,0-0.1-0.1-0.1-0.2l-0.9-3.6c-1.1,0.4-2.1,0.8-3.2,1.3l1.7,5
                                c0,0.1,0,0.2-0.1,0.3c-0.1,0.1-0.2,0.1-0.3,0.1c-0.1,0-5.5-0.4-10,4.3C626.6,788.8,623.5,789.5,622.5,789.6z"/>
                        </g>
                        <g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M681.4,927.7L681.4,927.7
                                    c-0.9,0-1.7-0.8-1.7-1.7v-71.5c0-0.9,0.8-1.7,1.7-1.7l0,0c0.9,0,1.7,0.8,1.7,1.7V926C683.2,927,682.4,927.7,681.4,927.7z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M682.6,928.1h-2.2c-0.5,0-0.9-0.4-0.9-0.9
                                    v-73.7c0-0.5,0.4-0.9,0.9-0.9h2.2c0.5,0,0.9,0.4,0.9,0.9v73.7C683.5,927.7,683.1,928.1,682.6,928.1z M680.3,853.1
                                    c-0.2,0-0.3,0.1-0.3,0.3v73.7c0,0.2,0.1,0.3,0.3,0.3h2.2c0.2,0,0.3-0.1,0.3-0.3v-73.7c0-0.2-0.1-0.3-0.3-0.3H680.3z"/>
                            </g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M673.4,927.7L673.4,927.7
                                    c-0.9,0-1.7-0.8-1.7-1.7v-71.5c0-0.9,0.8-1.7,1.7-1.7l0,0c0.9,0,1.7,0.8,1.7,1.7V926C675.1,927,674.4,927.7,673.4,927.7z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M674.5,928.1h-2.2c-0.5,0-0.9-0.4-0.9-0.9
                                    v-73.7c0-0.5,0.4-0.9,0.9-0.9h2.2c0.5,0,0.9,0.4,0.9,0.9v73.7C675.4,927.7,675,928.1,674.5,928.1z M672.3,853.1
                                    c-0.2,0-0.3,0.1-0.3,0.3v73.7c0,0.2,0.1,0.3,0.3,0.3h2.2c0.2,0,0.3-0.1,0.3-0.3v-73.7c0-0.2-0.1-0.3-0.3-0.3H672.3z"/>
                            </g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M665.5,927.7L665.5,927.7
                                    c-0.9,0-1.7-0.8-1.7-1.7v-71.5c0-0.9,0.8-1.7,1.7-1.7l0,0c0.9,0,1.7,0.8,1.7,1.7V926C667.2,927,666.4,927.7,665.5,927.7z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M666.6,928.1h-2.2c-0.5,0-0.9-0.4-0.9-0.9
                                    v-73.7c0-0.5,0.4-0.9,0.9-0.9h2.2c0.5,0,0.9,0.4,0.9,0.9v73.7C667.5,927.7,667.1,928.1,666.6,928.1z M664.4,853.1
                                    c-0.2,0-0.3,0.1-0.3,0.3v73.7c0,0.2,0.1,0.3,0.3,0.3h2.2c0.2,0,0.3-0.1,0.3-0.3v-73.7c0-0.2-0.1-0.3-0.3-0.3H664.4z"/>
                            </g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M657.4,927.7L657.4,927.7
                                    c-0.9,0-1.7-0.8-1.7-1.7v-71.5c0-0.9,0.8-1.7,1.7-1.7l0,0c0.9,0,1.7,0.8,1.7,1.7V926C659.2,927,658.4,927.7,657.4,927.7z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M658.6,928.1h-2.2c-0.5,0-0.9-0.4-0.9-0.9
                                    v-73.7c0-0.5,0.4-0.9,0.9-0.9h2.2c0.5,0,0.9,0.4,0.9,0.9v73.7C659.5,927.7,659.1,928.1,658.6,928.1z M656.3,853.1
                                    c-0.2,0-0.3,0.1-0.3,0.3v73.7c0,0.2,0.1,0.3,0.3,0.3h2.2c0.2,0,0.3-0.1,0.3-0.3v-73.7c0-0.2-0.1-0.3-0.3-0.3H656.3z"/>
                            </g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M649.7,927.7L649.7,927.7
                                    c-0.9,0-1.7-0.8-1.7-1.7v-71.5c0-0.9,0.8-1.7,1.7-1.7l0,0c0.9,0,1.7,0.8,1.7,1.7V926C651.4,927,650.6,927.7,649.7,927.7z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M650.8,928.1h-2.2c-0.5,0-0.9-0.4-0.9-0.9
                                    v-73.7c0-0.5,0.4-0.9,0.9-0.9h2.2c0.5,0,0.9,0.4,0.9,0.9v73.7C651.7,927.7,651.3,928.1,650.8,928.1z M648.6,853.1
                                    c-0.2,0-0.3,0.1-0.3,0.3v73.7c0,0.2,0.1,0.3,0.3,0.3h2.2c0.2,0,0.3-0.1,0.3-0.3v-73.7c0-0.2-0.1-0.3-0.3-0.3H648.6z"/>
                            </g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M641.7,927.7L641.7,927.7
                                    c-0.9,0-1.7-0.8-1.7-1.7v-71.5c0-0.9,0.8-1.7,1.7-1.7l0,0c0.9,0,1.7,0.8,1.7,1.7V926C643.4,927,642.6,927.7,641.7,927.7z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M642.8,928.1h-2.2c-0.5,0-0.9-0.4-0.9-0.9
                                    v-73.7c0-0.5,0.4-0.9,0.9-0.9h2.2c0.5,0,0.9,0.4,0.9,0.9v73.7C643.7,927.7,643.3,928.1,642.8,928.1z M640.5,853.1
                                    c-0.2,0-0.3,0.1-0.3,0.3v73.7c0,0.2,0.1,0.3,0.3,0.3h2.2c0.2,0,0.3-0.1,0.3-0.3v-73.7c0-0.2-0.1-0.3-0.3-0.3H640.5z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M684.1,845.8c-14.9-4.7-30.8-4.7-45.7,0
                                    c-1.2,0.4-2.4-0.3-2.8-1.5c-2.1-6.1-4.1-12.1-6.2-18.2c-0.4-1.2,0.3-2.6,1.5-2.9c19.8-6.3,41-6.3,60.8,0
                                    c1.2,0.4,1.9,1.7,1.5,2.9c-2.1,6.1-4.1,12.1-6.2,18.2C686.5,845.6,685.3,846.2,684.1,845.8z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M637.7,846.3c-1.1,0-2.1-0.7-2.4-1.8
                                    l-6.2-18.2c-0.2-0.7-0.2-1.4,0.1-2c0.3-0.6,0.9-1.1,1.5-1.3c20-6.4,41.1-6.4,61,0c0.7,0.2,1.2,0.7,1.5,1.3
                                    c0.3,0.6,0.4,1.4,0.1,2l-6.2,18.2c-0.5,1.3-1.9,2.1-3.2,1.6c-14.9-4.7-30.7-4.7-45.6,0C638.2,846.2,637.9,846.3,637.7,846.3z
                                    M661.2,818.8c-10.2,0-20.4,1.6-30.3,4.7c-0.5,0.2-0.9,0.5-1.2,1c-0.2,0.5-0.3,1-0.1,1.6l6.2,18.2c0.4,1,1.4,1.6,2.5,1.3
                                    c15-4.7,30.9-4.7,45.9,0l0,0c1,0.3,2.1-0.2,2.5-1.3l6.2-18.2c0.2-0.5,0.1-1.1-0.1-1.6c-0.2-0.5-0.7-0.8-1.2-1
                                    C681.6,820.4,671.4,818.8,661.2,818.8z"/>
                            </g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M684.1,845.8c-14.9-4.7-30.8-4.7-45.7,0
                                    c-1.2,0.4-2.4-0.3-2.8-1.5c-2.1-6.1-4.1-12.1-6.2-18.2c-0.4-1.2,0.3-2.6,1.5-2.9c19.8-6.3,41-6.3,60.8,0
                                    c1.2,0.4,1.9,1.7,1.5,2.9c-2.1,6.1-4.1,12.1-6.2,18.2C686.5,845.6,685.3,846.2,684.1,845.8z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M637.7,846.3c-1.1,0-2.1-0.7-2.4-1.8
                                    l-6.2-18.2c-0.2-0.7-0.2-1.4,0.1-2c0.3-0.6,0.9-1.1,1.5-1.3c20-6.4,41.1-6.4,61,0c0.7,0.2,1.2,0.7,1.5,1.3
                                    c0.3,0.6,0.4,1.4,0.1,2l-6.2,18.2c-0.5,1.3-1.9,2.1-3.2,1.6c-14.9-4.7-30.7-4.7-45.6,0C638.2,846.2,637.9,846.3,637.7,846.3z
                                    M661.2,818.8c-10.2,0-20.4,1.6-30.3,4.7c-0.5,0.2-0.9,0.5-1.2,1c-0.2,0.5-0.3,1-0.1,1.6l6.2,18.2c0.4,1,1.4,1.6,2.5,1.3
                                    c15-4.7,30.9-4.7,45.9,0l0,0c1,0.3,2.1-0.2,2.5-1.3l6.2-18.2c0.2-0.5,0.1-1.1-0.1-1.6c-0.2-0.5-0.7-0.8-1.2-1
                                    C681.6,820.4,671.4,818.8,661.2,818.8z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M689,848.8l4.1-9.2c0.1-0.2,0.3-0.3,0.5-0.3
                                    h1.2c0.3,0,0.6,0.3,0.6,0.6v23.6c0,0.3-0.3,0.6-0.6,0.6h-5.2c-0.3,0-0.6-0.3-0.6-0.6v-14.3C688.9,849,688.9,848.9,689,848.8z"
                                    />
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M694.8,864.3h-5.2c-0.5,0-0.9-0.4-0.9-0.9
                                    v-14.3c0-0.1,0-0.2,0.1-0.4l4.1-9.2c0.1-0.3,0.4-0.5,0.8-0.5h1.2c0.5,0,0.9,0.4,0.9,0.9v23.6
                                    C695.6,863.9,695.2,864.3,694.8,864.3z M689.3,849L689.3,849c0,0,0,0.1,0,0.1v14.3c0,0.2,0.1,0.3,0.3,0.3h5.2
                                    c0.2,0,0.3-0.1,0.3-0.3v-23.6c0-0.1-0.1-0.3-0.3-0.3h-1.2c-0.1,0-0.2,0.1-0.2,0.2L689.3,849z"/>
                            </g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M689,892.4l5.1,9.2c0.1,0.2,0.3,0.3,0.5,0.3
                                    h0.2c0.3,0,0.6-0.3,0.6-0.6v-33.2c0-0.3-0.3-0.6-0.6-0.6h-5.2c-0.3,0-0.6,0.3-0.6,0.6v24C688.9,892.3,688.9,892.3,689,892.4z"
                                    />
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M694.8,902.3h-0.2c-0.3,0-0.7-0.2-0.8-0.5
                                    l-5.1-9.2c-0.1-0.1-0.1-0.2-0.1-0.4v-24c0-0.5,0.4-0.9,0.9-0.9h5.2c0.5,0,0.9,0.4,0.9,0.9v33.2
                                    C695.6,901.9,695.3,902.3,694.8,902.3z M689.2,892.3l5.1,9.2c0.1,0.1,0.1,0.2,0.2,0.2h0.2c0.1,0,0.3-0.1,0.3-0.3v-33.2
                                    c0-0.2-0.1-0.3-0.3-0.3h-5.2c-0.2,0-0.3,0.1-0.3,0.3v24C689.2,892.2,689.2,892.3,689.2,892.3z"/>
                            </g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M688.9,901.4c0-0.2,0.2-0.2,0.3-0.1
                                    c1.3,2.3,6.1,10.3,6.1,10.5v22.2c0,0.4-0.5,0.5-0.7,0.2c-1.7-2.3-5.7-7.9-5.7-8.1C688.9,926.2,688.9,905.4,688.9,901.4z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M694.9,934.8c-0.2,0-0.4-0.1-0.6-0.3
                                    c-0.1-0.1-5.8-7.8-5.8-8.3c0-0.2,0-20.9,0-24.8c0-0.2,0.1-0.4,0.4-0.5c0.2-0.1,0.4,0,0.5,0.2c0.6,1.2,2.2,3.8,3.6,6.2
                                    c2.5,4.3,2.5,4.3,2.5,4.5v22.2c0,0.3-0.2,0.6-0.5,0.7C695.1,934.8,695,934.8,694.9,934.8z M689.2,926.2c0.3,0.6,3.7,5.4,5.7,8
                                    c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1-0.1v-22.2c-0.2-0.3-1.3-2.3-2.5-4.2c-1.2-2.1-2.6-4.4-3.4-5.7
                                    C689.2,906.8,689.2,925,689.2,926.2z M689.2,901.4L689.2,901.4C689.2,901.4,689.2,901.4,689.2,901.4
                                    C689.2,901.4,689.2,901.4,689.2,901.4z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M633.5,848.8l-4.1-9.2
                                    c-0.1-0.2-0.3-0.3-0.5-0.3h-1.2c-0.3,0-0.6,0.3-0.6,0.6v23.6c0,0.3,0.3,0.6,0.6,0.6h5.2c0.3,0,0.6-0.3,0.6-0.6v-14.3
                                    C633.6,849,633.6,848.9,633.5,848.8z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M633,864.3h-5.2c-0.5,0-0.9-0.4-0.9-0.9
                                    v-23.6c0-0.5,0.4-0.9,0.9-0.9h1.2c0.3,0,0.7,0.2,0.8,0.5l4.1,9.2c0.1,0.1,0.1,0.2,0.1,0.4v14.3
                                    C633.9,863.9,633.5,864.3,633,864.3z M627.7,839.6c-0.1,0-0.3,0.1-0.3,0.3v23.6c0,0.2,0.1,0.3,0.3,0.3h5.2
                                    c0.2,0,0.3-0.1,0.3-0.3v-14.3c0,0,0-0.1,0-0.1l-4.1-9.2c0-0.1-0.1-0.2-0.2-0.2H627.7z"/>
                            </g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M633.5,892.4l-5.1,9.2
                                    c-0.1,0.2-0.3,0.3-0.5,0.3h-0.2c-0.3,0-0.6-0.3-0.6-0.6v-33.2c0-0.3,0.3-0.6,0.6-0.6h5.2c0.3,0,0.6,0.3,0.6,0.6v24
                                    C633.6,892.3,633.6,892.3,633.5,892.4z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M627.9,902.3h-0.2c-0.5,0-0.9-0.4-0.9-0.9
                                    v-33.2c0-0.5,0.4-0.9,0.9-0.9h5.2c0.5,0,0.9,0.4,0.9,0.9v24c0,0.1,0,0.2-0.1,0.4l0,0l-5.1,9.2
                                    C628.5,902.1,628.2,902.3,627.9,902.3z M627.7,867.9c-0.2,0-0.3,0.1-0.3,0.3v33.2c0,0.1,0.1,0.3,0.3,0.3h0.2
                                    c0.1,0,0.2-0.1,0.2-0.2l5.2-9.2c0,0,0-0.1,0-0.1v-24c0-0.2-0.1-0.3-0.3-0.3H627.7z"/>
                            </g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M633.6,901.4c0-0.2-0.2-0.2-0.3-0.1
                                    c-1.3,2.3-6.1,10.3-6.1,10.5v22.2c0,0.4,0.5,0.5,0.7,0.2c1.7-2.3,5.7-7.9,5.7-8.1C633.6,926.2,633.6,905.4,633.6,901.4z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M627.6,934.8c-0.1,0-0.1,0-0.2,0
                                    c-0.3-0.1-0.5-0.4-0.5-0.7v-22.2c0-0.2,0-0.2,2.5-4.4c1.4-2.3,3-5,3.6-6.2c0.1-0.2,0.3-0.3,0.5-0.2c0.2,0.1,0.4,0.2,0.4,0.5v0
                                    c0,3.9,0,24.6,0,24.8c0,0.4-5.7,8.2-5.8,8.3C628,934.7,627.8,934.8,627.6,934.8z M627.5,911.9v22.2c0,0.1,0,0.1,0.1,0.1
                                    c0,0,0.1,0,0.1,0c1.9-2.6,5.3-7.4,5.7-8c0-1.2,0-19.4,0-24.2c-0.8,1.3-2.1,3.7-3.4,5.7C628.8,909.6,627.6,911.6,627.5,911.9z"
                                    />
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M689.1,946.8c-18.3,4.7-37.4,4.7-55.7,0
                                    c1.3-5,2.6-10,3.8-15c15.8,4.1,32.3,4.1,48.1,0C686.6,936.8,687.8,941.8,689.1,946.8z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M661.2,950.6c-9.4,0-18.8-1.2-27.9-3.5
                                    L633,947l4-15.6l0.3,0.1c15.7,4,32.2,4,47.9,0l0.3-0.1l4,15.6l-0.3,0.1C680,949.5,670.6,950.6,661.2,950.6z M633.8,946.6
                                    c18,4.6,37,4.6,55,0l-3.7-14.4c-15.6,4-32,4-47.6,0L633.8,946.6z"/>
                            </g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M689.1,946.8c-18.3,4.7-37.4,4.7-55.7,0
                                    c1.3-5,2.6-10,3.8-15c15.8,4.1,32.3,4.1,48.1,0C686.6,936.8,687.8,941.8,689.1,946.8z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M661.2,950.6c-9.4,0-18.8-1.2-27.9-3.5
                                    L633,947l4-15.6l0.3,0.1c15.7,4,32.2,4,47.9,0l0.3-0.1l4,15.6l-0.3,0.1C680,949.5,670.6,950.6,661.2,950.6z M633.8,946.6
                                    c18,4.6,37,4.6,55,0l-3.7-14.4c-15.6,4-32,4-47.6,0L633.8,946.6z"/>
                            </g>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M697.6,838.7h9.5c0,0,0.5-6-9.5-5.4V838.7z"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M707.5,839h-10.1v-6l0.3,0
                                c4-0.2,6.8,0.6,8.4,2.3c1.6,1.6,1.4,3.4,1.4,3.5L707.5,839z M698,838.4h8.9c0-0.5-0.2-1.7-1.2-2.8c-1.5-1.5-4.1-2.2-7.7-2.1
                                V838.4z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M625.1,838.7h-9.5c0,0-0.5-6,9.5-5.4V838.7z"
                                />
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M625.5,839h-10.1l0-0.3c0-0.1-0.1-1.9,1.4-3.5
                                c1.6-1.7,4.5-2.5,8.4-2.3l0.3,0V839z M615.9,838.4h8.9v-4.8c-3.6-0.1-6.2,0.6-7.7,2.1C616.1,836.7,616,837.9,615.9,838.4z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M681.7,781.9c0,0-2.5,25.8,10,37.9"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M691.7,820.1c-0.1,0-0.2,0-0.2-0.1
                                c-12.5-12.1-10.2-37.9-10.1-38.2c0-0.2,0.2-0.3,0.3-0.3c0.2,0,0.3,0.2,0.3,0.3c0,0.3-2.3,25.8,9.9,37.7c0.1,0.1,0.1,0.3,0,0.4
                                C691.9,820.1,691.8,820.1,691.7,820.1z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M690.6,786c0,0-1,21.5,6.3,37.1"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M696.8,823.4c-0.1,0-0.2-0.1-0.3-0.2
                                c-7.3-15.5-6.3-37.1-6.3-37.3c0-0.2,0.1-0.3,0.3-0.3c0.2,0,0.3,0.2,0.3,0.3c0,0.2-0.9,21.6,6.3,37c0.1,0.2,0,0.3-0.1,0.4
                                C696.9,823.4,696.9,823.4,696.8,823.4z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M681.7,781.9c0,0-2.5,25.8,10,37.9"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M691.7,820.1c-0.1,0-0.2,0-0.2-0.1
                                c-12.5-12.1-10.2-37.9-10.1-38.2c0-0.2,0.2-0.3,0.3-0.3c0.2,0,0.3,0.2,0.3,0.3c0,0.3-2.3,25.8,9.9,37.7c0.1,0.1,0.1,0.3,0,0.4
                                C691.9,820.1,691.8,820.1,691.7,820.1z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M690.6,786c0,0-1,21.5,6.3,37.1"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M696.8,823.4c-0.1,0-0.2-0.1-0.3-0.2
                                c-7.3-15.5-6.3-37.1-6.3-37.3c0-0.2,0.1-0.3,0.3-0.3c0.2,0,0.3,0.2,0.3,0.3c0,0.2-0.9,21.6,6.3,37c0.1,0.2,0,0.3-0.1,0.4
                                C696.9,823.4,696.9,823.4,696.8,823.4z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M700.6,789.6c0,0-3.8-0.2-8.4-5.1
                                c-4.6-4.9-10.2-4.4-10.2-4.4l1.9-5.6c0,0,1.6,0.7,1.6,0.7c4,1.9,6.8,4.1,9.2,6.1c2.5,2,4.2,4.4,5.5,7.2
                                C700.3,788.8,700.5,789.2,700.6,789.6z"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M700.6,789.9
                                C700.6,789.9,700.6,789.9,700.6,789.9c-0.2,0-4-0.2-8.7-5.2c-4.5-4.8-9.9-4.3-10-4.3c-0.1,0-0.2,0-0.3-0.1
                                c-0.1-0.1-0.1-0.2-0.1-0.3l1.9-5.6c0-0.1,0.1-0.1,0.2-0.2c0.1,0,0.2,0,0.2,0c0,0,1.5,0.6,1.6,0.7c0,0,0,0,0,0
                                c4.1,1.9,6.9,4.2,9.3,6.1c2.5,2.1,4.3,4.5,5.5,7.3c0.1,0.2,0.1,0.3,0.2,0.4c0.1,0.3,0.2,0.6,0.3,0.8c0,0.1,0,0.2-0.1,0.3
                                C700.8,789.8,700.7,789.9,700.6,789.9z M682.5,779.7c1.5,0,6.1,0.4,10,4.5c3.5,3.8,6.6,4.7,7.8,4.9c0-0.1-0.1-0.2-0.1-0.3
                                c-0.1-0.1-0.1-0.3-0.2-0.4c-1.2-2.8-2.9-5.1-5.4-7.1c-2.3-1.9-5.2-4.2-9.2-6.1l0,0c-0.1-0.1-0.5-0.2-1.3-0.5L682.5,779.7
                                C682.4,779.7,682.4,779.7,682.5,779.7z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M680.6,772.9l-1,4.1c0,0-8.7-2.1-18.1-2.2
                                c-9.4,0.1-18.1,2.2-18.1,2.2l-0.9-3.9c5.6-2,12.3-3.4,20.3-3.4C669.7,769.7,675.6,771,680.6,772.9z"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M679.6,777.4
                                C679.6,777.4,679.6,777.3,679.6,777.4c-0.2,0-8.9-2.1-18.1-2.2c-9.2,0.1-17.9,2.2-18,2.2c-0.1,0-0.2,0-0.2,0
                                c-0.1,0-0.1-0.1-0.1-0.2l-0.9-3.9c0-0.2,0-0.3,0.2-0.4c6.3-2.3,13.1-3.5,20.4-3.5c6.3,0,12.3,1.1,17.9,3.2
                                c0.1,0.1,0.2,0.2,0.2,0.4l-1,4.1C679.9,777.3,679.8,777.4,679.6,777.4z M661.5,774.5c8.3,0.1,16.3,1.8,17.9,2.2l0.9-3.6
                                c-5.5-2.1-11.4-3.1-17.4-3.1c-7.1,0-13.8,1.1-19.9,3.3l0.8,3.3C645.3,776.3,653.2,774.6,661.5,774.5z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M640.3,781.9c0,0,2.5,25.8-10,37.9"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M630.3,820.1c-0.1,0-0.2,0-0.2-0.1
                                c-0.1-0.1-0.1-0.3,0-0.4c12.3-11.9,10-37.4,9.9-37.7c0-0.2,0.1-0.3,0.3-0.3c0.2,0,0.3,0.1,0.3,0.3c0,0.3,2.4,26.1-10.1,38.2
                                C630.4,820.1,630.3,820.1,630.3,820.1z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M631.4,786c0,0,1,21.5-6.3,37.1"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M625.1,823.4c0,0-0.1,0-0.1,0
                                c-0.2-0.1-0.2-0.3-0.1-0.4c7.2-15.4,6.3-36.8,6.3-37c0-0.2,0.1-0.3,0.3-0.3c0.2,0,0.3,0.1,0.3,0.3c0,0.2,0.9,21.7-6.3,37.3
                                C625.4,823.4,625.3,823.4,625.1,823.4z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M640.5,780c0,0-5.6-0.5-10.2,4.4
                                c-4.1,4.4-7.3,4.9-8,4.9c1.2-3.2,3.3-6.1,6.1-8.3c2.6-2.1,6-4.3,10.1-6.2c0.2,0,0.3,0,0.3,0L640.5,780z"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M622.3,789.6c-0.1,0-0.2,0-0.2-0.1
                                c-0.1-0.1-0.1-0.2,0-0.3c1.3-3.3,3.4-6.2,6.2-8.4c3.1-2.4,6.5-4.5,10.1-6.2c0,0,0.1,0,0.1,0l0.3,0c0.1,0,0.3,0.1,0.3,0.2
                                l1.7,5.1c0,0.1,0,0.2-0.1,0.3c-0.1,0.1-0.2,0.1-0.3,0.1c-0.1,0-5.5-0.4-10,4.3C626.3,789.1,622.9,789.6,622.3,789.6
                                C622.3,789.6,622.3,789.6,622.3,789.6z M638.5,775.1c-3.6,1.7-6.9,3.7-10,6.1c-2.5,2-4.5,4.7-5.8,7.7c1.2-0.2,3.9-1.2,7.3-4.8
                                c4-4.2,8.6-4.6,10-4.6L638.5,775.1L638.5,775.1z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M700.7,943.8c0,0-10.4-1-9.2,9.3
                                C691.4,953.1,698.9,950.2,700.7,943.8z"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M691.2,953.5l0-0.4c-0.3-3.1,0.3-5.5,1.9-7.2
                                c2.8-2.9,7.4-2.5,7.6-2.4l0.4,0l-0.1,0.4c-1.7,6.4-9.1,9.4-9.4,9.5L691.2,953.5z M700,944.1c-1.3,0-4.5,0.2-6.5,2.3
                                c-1.4,1.5-2,3.6-1.8,6.3c1.5-0.7,6.9-3.5,8.5-8.5C700.2,944.1,700.1,944.1,700,944.1z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M632,953.1c0,0,0.5-10.5-9.6-8.8
                                C622.4,944.3,625.6,951.7,632,953.1z"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M632.3,953.5l-0.4-0.1c-6.5-1.5-9.7-8.7-9.9-9
                                l-0.2-0.4l0.4-0.1c3-0.5,5.5,0,7.2,1.6c3,2.7,2.8,7.4,2.8,7.6L632.3,953.5z M622.8,944.6c0.7,1.5,3.8,6.8,8.9,8.2
                                c0-1.1-0.3-4.6-2.6-6.7C627.6,944.7,625.5,944.2,622.8,944.6z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M828.9,869.2l-5.1-0.5l0.7-71.8
                                c0-7.3-4.9-16.7-10.9-20.8c-6.2-4.2-14.6-7.6-27.3-7.6c-13.8,0-21.3,3-29.4,8c-4.9,3-8.9,10.2-8.9,16l0.7,76.2l-5.5,0.5
                                c-2.9,0.3-5.1,3-4.7,5.9h0.6l9.6-1l0.6,62.9c0,9.9,4.9,18.7,14.2,21.9l3.1,1.1c12.8,4.5,26.8,4.5,39.6,0h0
                                c11.1-3.9,17.2-14.4,17.2-26.3l0.6-59.6l9.3,1h0.6C833.9,872.2,831.8,869.6,828.9,869.2z"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M786.1,963.7c-6.7,0-13.5-1.1-19.9-3.4
                                l-3.1-1.1c-8.9-3.1-14.4-11.6-14.4-22.2l-0.5-62.6l-9.3,1l-0.7,0c-0.2,0-0.3-0.1-0.3-0.3c-0.3-3.1,1.9-5.9,5-6.2l5.2-0.5
                                l-0.7-75.9c0-5.9,4-13.1,9-16.2c8.2-5.1,15.7-8.1,29.6-8.1c10.9,0,19.9,2.5,27.5,7.7c6.1,4.1,11.1,13.6,11.1,21l-0.7,71.5
                                l4.9,0.5c0,0,0,0,0,0c3.1,0.3,5.3,3.1,5,6.2c0,0.2-0.1,0.3-0.3,0.3H833l-9-1l-0.5,59.3c0,12.6-6.7,22.8-17.4,26.6
                                C799.6,962.6,792.8,963.7,786.1,963.7z M748.5,873.8c0.1,0,0.1,0,0.2,0.1c0.1,0.1,0.1,0.1,0.1,0.2l0.6,62.9
                                c0,10.4,5.4,18.7,14,21.7l3.1,1.1c12.7,4.4,26.7,4.4,39.4,0c10.5-3.7,17-13.6,17-26l0.6-59.6c0-0.1,0-0.2,0.1-0.2
                                c0.1-0.1,0.2-0.1,0.2-0.1l9.3,1l0.3,0c0.1-2.7-1.8-5-4.5-5.3l-5.1-0.5c-0.2,0-0.3-0.1-0.3-0.3l0.7-71.8
                                c0-7.3-4.8-16.5-10.8-20.5c-7.5-5.1-16.4-7.6-27.2-7.6c-13.7,0-21.1,2.9-29.3,8c-4.8,3-8.7,10-8.7,15.7l0.7,76.2
                                c0,0.2-0.1,0.3-0.3,0.3l-5.5,0.5c-1.3,0.1-2.5,0.8-3.4,1.9c-0.8,1-1.2,2.2-1.1,3.4h0.4L748.5,873.8
                                C748.5,873.8,748.5,873.8,748.5,873.8z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M806.9,864.1c-14.3-4.7-27.3-4.7-41.6,0
                                c-1.2-3-2.9-6.5-4.8-9c16.6-5.4,34.7-5.4,51.2,0C809.8,858.1,808.5,860.6,806.9,864.1z"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M765.3,864.4c-0.1,0-0.2-0.1-0.3-0.2
                                c-1.4-3.6-3.2-6.8-4.8-8.9c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.1,0.1-0.2,0.2-0.2c16.6-5.4,34.9-5.4,51.4,0c0.1,0,0.2,0.1,0.2,0.2
                                c0,0.1,0,0.2,0,0.3c-2,3.1-3.3,5.6-4.8,9c-0.1,0.1-0.2,0.2-0.4,0.2C792.7,859.8,779.5,859.8,765.3,864.4
                                C765.4,864.4,765.3,864.4,765.3,864.4z M786.1,860.3c6.8,0,13.6,1.1,20.6,3.4c1.4-3.1,2.7-5.6,4.5-8.5c-16.2-5.2-34-5.2-50.3,0
                                c2.1,2.8,3.7,6.4,4.5,8.5C772.5,861.5,779.3,860.3,786.1,860.3z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M765.3,915.9c16.7,4.6,26.6,3.5,41.6,0
                                c1.2,5.3,2.9,9.7,4.8,14.1c-16.6,9.6-34.7,9.6-51.2,0C762.4,924.7,763.7,922.1,765.3,915.9z"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M786.1,937.5c-8.7,0-17.5-2.4-25.8-7.2
                                c-0.1-0.1-0.2-0.2-0.1-0.4c0.5-1.4,1-2.7,1.5-3.8c1.2-3.2,2.2-5.7,3.4-10.2c0-0.1,0.1-0.1,0.1-0.2c0.1,0,0.2-0.1,0.2,0
                                c16.4,4.5,26,3.6,41.4,0c0.1,0,0.2,0,0.2,0c0.1,0,0.1,0.1,0.1,0.2c1.1,5.1,2.8,9.3,4.8,14c0.1,0.1,0,0.3-0.1,0.4
                                C803.6,935.1,794.8,937.5,786.1,937.5z M760.8,929.9c16.3,9.3,34.2,9.3,50.5,0c-2-4.6-3.6-8.7-4.7-13.6c-14.9,3.5-25,4.4-41.1,0
                                c-1.1,4.4-2.1,6.9-3.3,10C761.8,927.4,761.3,928.6,760.8,929.9z"/>
                        </g>
                        <g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M815.3,870v-13.8l-5.4,10.4
                                    c0,0-0.1,1.3-0.1,3.4H815.3z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M815.3,870.3h-5.5c-0.1,0-0.2,0-0.2-0.1
                                    c-0.1-0.1-0.1-0.1-0.1-0.2c0-2.1,0.1-3.4,0.1-3.4c0,0,0-0.1,0-0.1l5.4-10.4c0.1-0.1,0.2-0.2,0.3-0.2c0.1,0,0.2,0.2,0.2,0.3V870
                                    C815.6,870.2,815.5,870.3,815.3,870.3z M810.1,869.7h4.9v-12.3l-4.8,9.2C810.2,867,810.1,868,810.1,869.7z"/>
                            </g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M815.3,872.5h-5.5c-0.1,6.9,0,20.6,1.9,32.7
                                    h3.7V872.5z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M815.3,905.5h-3.7c-0.2,0-0.3-0.1-0.3-0.3
                                    c-1.8-12.2-2-25.8-1.9-32.8c0-0.2,0.1-0.3,0.3-0.3h5.5c0.2,0,0.3,0.1,0.3,0.3v32.7C815.6,905.4,815.5,905.5,815.3,905.5z
                                    M811.9,904.9h3.1v-32.1h-4.9C810,879.8,810.1,893,811.9,904.9z"/>
                            </g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M811.8,907.7c0.8,5,1.9,9.8,3.5,13.7v-13.7
                                    H811.8z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M815.3,921.6c-0.1,0-0.2-0.1-0.3-0.2
                                    c-1.4-3.6-2.6-8.2-3.5-13.7c0-0.1,0-0.2,0.1-0.2c0.1-0.1,0.1-0.1,0.2-0.1h3.5c0.2,0,0.3,0.1,0.3,0.3v13.7
                                    C815.6,921.5,815.5,921.6,815.3,921.6C815.3,921.6,815.3,921.6,815.3,921.6z M812.2,908c0.8,4.6,1.7,8.5,2.8,11.7V908H812.2z"
                                    />
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M757.3,870v-13.8l5.4,10.4
                                    c0,0,0.1,1.3,0.1,3.4H757.3z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M762.8,870.3h-5.5c-0.2,0-0.3-0.1-0.3-0.3
                                    v-13.8c0-0.1,0.1-0.3,0.2-0.3c0.1,0,0.3,0,0.3,0.2l5.4,10.4c0,0,0,0.1,0,0.1c0,0,0.1,1.3,0.1,3.4c0,0.1,0,0.2-0.1,0.2
                                    C763,870.3,762.9,870.3,762.8,870.3z M757.6,869.7h4.9c0-1.7-0.1-2.8-0.1-3l-4.8-9.2V869.7z"/>
                            </g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M757.3,872.5h5.5c0.1,6.9,0,20.6-1.9,32.7
                                    h-3.7V872.5z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M761,905.5h-3.7c-0.2,0-0.3-0.1-0.3-0.3
                                    v-32.7c0-0.2,0.1-0.3,0.3-0.3h5.5c0.2,0,0.3,0.1,0.3,0.3c0.1,7,0,20.6-1.9,32.8C761.2,905.4,761.1,905.5,761,905.5z
                                    M757.6,904.9h3.1c1.8-11.9,1.9-25.1,1.8-32.1h-4.9V904.9z"/>
                            </g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M760.8,907.7c-0.8,5-1.9,9.8-3.5,13.7v-13.7
                                    H760.8z"/>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M757.3,921.6
                                    C757.3,921.6,757.3,921.6,757.3,921.6c-0.2,0-0.3-0.2-0.3-0.3v-13.7c0-0.2,0.1-0.3,0.3-0.3h3.5c0.1,0,0.2,0,0.2,0.1
                                    c0.1,0.1,0.1,0.2,0.1,0.2c-0.9,5.5-2.1,10.1-3.5,13.7C757.5,921.5,757.4,921.6,757.3,921.6z M757.6,908v11.7
                                    c1.1-3.2,2.1-7.1,2.8-11.7H757.6z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M802.3,781.6c-10.7-3.9-22.4-3.9-33.1,0
                                    c-0.7-2-1.4-4-2.2-6c12.1-4.4,25.4-4.4,37.5,0C803.7,777.6,803,779.6,802.3,781.6z"/>
                            </g>
                            <g>
                                <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M769.2,781.9c-0.1,0-0.2-0.1-0.3-0.2l-2.2-6
                                    c0-0.1,0-0.2,0-0.2c0-0.1,0.1-0.1,0.2-0.2c12.2-4.4,25.5-4.4,37.7,0c0.2,0.1,0.2,0.2,0.2,0.4l-2.2,6c0,0.1-0.1,0.1-0.2,0.2
                                    c-0.1,0-0.2,0-0.2,0c-10.6-3.8-22.3-3.8-32.9,0C769.2,781.9,769.2,781.9,769.2,781.9z M767.4,775.7l2,5.5
                                    c10.6-3.7,22.2-3.7,32.8,0l2-5.5C792.2,771.6,779.2,771.6,767.4,775.7z"/>
                            </g>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M815.4,791.7c-1.9-3.4-5.3-6.5-9.8-8.3
                                c-0.5-0.2-0.8-0.6-0.6-1.1c0.3-1,0.8-2,1.2-3c0.5-1.2,3.3-1.8,4.5-1c4.5,2.7,7.7,6.5,9.4,10.5c0.2,0.5,0.1,0.9-0.3,1.3
                                c-0.7,0.6-1.4,1.3-2,2C817.2,792.8,816,792.7,815.4,791.7z"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M816.8,792.8c-0.1,0-0.1,0-0.2,0
                                c-0.6-0.1-1.1-0.4-1.4-0.9c0,0,0,0,0,0c-2-3.6-5.4-6.5-9.6-8.2c-0.7-0.3-1-0.9-0.8-1.5c0.4-1,0.8-2,1.3-3c0.3-0.6,1-1.1,1.9-1.4
                                c1.1-0.3,2.3-0.3,3,0.2c4.3,2.6,7.7,6.4,9.5,10.6c0.2,0.6,0.1,1.2-0.4,1.6c-0.7,0.6-1.3,1.3-1.9,2
                                C817.8,792.6,817.3,792.8,816.8,792.8z M815.7,791.6c0.2,0.4,0.5,0.6,0.9,0.6c0.4,0,0.8-0.1,1.1-0.4c0.6-0.7,1.3-1.4,2-2
                                c0.3-0.2,0.3-0.6,0.2-0.9c-1.7-4.1-5-7.8-9.3-10.3c-0.6-0.4-1.6-0.4-2.5-0.1c-0.8,0.2-1.3,0.6-1.5,1c-0.5,1-0.9,2-1.2,3
                                c-0.1,0.4,0.2,0.6,0.4,0.8C810.1,784.9,813.7,787.9,815.7,791.6z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M756.1,791.7c1.9-3.4,5.3-6.5,9.8-8.3
                                c0.5-0.2,0.8-0.6,0.6-1.1c-0.3-1-0.8-2-1.2-3c-0.5-1.2-3.3-1.8-4.5-1c-4.5,2.7-7.7,6.5-9.4,10.5c-0.2,0.5-0.1,0.9,0.3,1.3
                                c0.7,0.6,1.4,1.3,2,2C754.3,792.8,755.6,792.7,756.1,791.7z"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M754.7,792.8c-0.5,0-1-0.2-1.4-0.6
                                c-0.6-0.7-1.2-1.4-1.9-2c-0.5-0.4-0.6-1-0.4-1.6c1.8-4.2,5.2-8,9.5-10.6c0.7-0.4,1.9-0.5,3-0.2c0.9,0.3,1.6,0.8,1.9,1.4
                                c0.5,1,0.9,2,1.3,3c0.2,0.6-0.1,1.2-0.8,1.5c-4.2,1.7-7.6,4.6-9.6,8.2c0,0,0,0,0,0c-0.3,0.5-0.8,0.9-1.4,0.9
                                C754.9,792.8,754.8,792.8,754.7,792.8z M762.2,778.2c-0.5,0-1,0.1-1.3,0.3c-4.2,2.6-7.5,6.2-9.3,10.3c-0.1,0.3-0.1,0.7,0.2,0.9
                                c0.7,0.6,1.4,1.3,2,2c0.3,0.3,0.6,0.5,1,0.4c0.4,0,0.7-0.3,0.9-0.6c2.1-3.7,5.6-6.7,9.9-8.4c0.3-0.1,0.6-0.3,0.4-0.8
                                c-0.3-1-0.8-2-1.2-3c-0.2-0.4-0.8-0.8-1.5-1C763,778.3,762.6,778.2,762.2,778.2z M756.1,791.7L756.1,791.7L756.1,791.7z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M797.1,958.1c-7.1,2.6-14.9,2.6-22,0
                                c0.4-1.2,0.9-2.4,1.3-3.5c6.3,2.3,13.2,2.3,19.5,0C796.2,955.8,796.6,956.9,797.1,958.1z"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M786.1,960.3c-3.8,0-7.5-0.6-11.1-1.9
                                c-0.2-0.1-0.2-0.2-0.2-0.4l1.3-3.5c0-0.1,0.1-0.1,0.2-0.2c0.1,0,0.2,0,0.2,0c6.2,2.2,13,2.2,19.2,0c0.2-0.1,0.3,0,0.4,0.2
                                l1.3,3.5c0,0.1,0,0.2,0,0.2c0,0.1-0.1,0.1-0.2,0.2C793.6,959.7,789.8,960.3,786.1,960.3z M775.4,957.9c6.9,2.4,14.4,2.4,21.2,0
                                l-1.1-3c-6.2,2.1-12.9,2.1-19.1,0L775.4,957.9z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M761.6,944.5c1.7,3,4.6,5.7,8.6,7.3
                                c0.5,0.2,0.7,0.6,0.5,1c-0.3,0.9-0.7,1.8-1.1,2.7c-0.5,1.1-2.9,1.6-4,0.9c-4-2.4-6.8-5.8-8.3-9.3c-0.2-0.4-0.1-0.8,0.2-1.1
                                c0.6-0.6,1.2-1.2,1.7-1.8C760,943.6,761.1,943.7,761.6,944.5z"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M767,957.1c-0.5,0-1-0.1-1.4-0.4
                                c-3.8-2.3-6.8-5.7-8.4-9.4c-0.2-0.5-0.1-1.1,0.3-1.5c0.6-0.5,1.2-1.1,1.7-1.7c0.4-0.4,0.9-0.6,1.4-0.6s1,0.4,1.3,0.8
                                c0,0,0,0,0,0c1.8,3.1,4.8,5.7,8.5,7.2c0.6,0.3,0.9,0.8,0.7,1.4c-0.3,0.9-0.7,1.8-1.1,2.7c-0.2,0.5-0.9,1-1.7,1.2
                                C767.9,957,767.4,957.1,767,957.1z M760.4,944.1c-0.3,0-0.6,0.1-0.8,0.4c-0.5,0.6-1.1,1.2-1.8,1.8c-0.2,0.2-0.3,0.5-0.2,0.8
                                c1.5,3.6,4.4,6.9,8.2,9.1c0.5,0.3,1.4,0.4,2.2,0.1c0.7-0.2,1.2-0.5,1.3-0.9c0.4-0.9,0.8-1.7,1.1-2.6c0.1-0.3,0-0.5-0.4-0.6
                                c-3.9-1.6-7-4.2-8.8-7.5c-0.2-0.3-0.5-0.5-0.8-0.5C760.5,944.1,760.5,944.1,760.4,944.1z"/>
                        </g>
                        <g>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M810.5,944.5c-1.7,3-4.6,5.7-8.6,7.3
                                c-0.5,0.2-0.7,0.6-0.5,1c0.3,0.9,0.7,1.8,1.1,2.7c0.5,1.1,2.9,1.6,4,0.9c4-2.4,6.8-5.8,8.3-9.3c0.2-0.4,0.1-0.8-0.2-1.1
                                c-0.6-0.6-1.2-1.2-1.7-1.8C812.1,943.6,811,943.7,810.5,944.5z"/>
                            <path fill="none" stroke="#CCB596" stroke-width="0.5" stroke-miterlimit="10" d="M805.1,957.1c-0.5,0-0.9-0.1-1.3-0.2
                                c-0.8-0.3-1.5-0.7-1.7-1.2c-0.4-0.9-0.8-1.8-1.1-2.7c-0.2-0.6,0.1-1.1,0.7-1.4c3.7-1.5,6.7-4.1,8.5-7.2c0,0,0,0,0,0
                                c0.3-0.5,0.7-0.8,1.3-0.8c0.5-0.1,1.1,0.1,1.4,0.6c0.5,0.6,1.1,1.2,1.7,1.7c0.4,0.4,0.5,0.9,0.3,1.5c-1.6,3.7-4.6,7.1-8.4,9.4
                                C806.1,957,805.6,957.1,805.1,957.1z M810.8,944.7c-1.8,3.3-4.9,5.9-8.8,7.5c-0.3,0.1-0.5,0.3-0.4,0.6c0.3,0.9,0.7,1.8,1.1,2.6
                                c0.2,0.4,0.7,0.7,1.3,0.9c0.8,0.3,1.7,0.2,2.2-0.1c3.7-2.3,6.6-5.5,8.2-9.1c0.1-0.3,0.1-0.6-0.2-0.8c-0.6-0.6-1.2-1.2-1.8-1.8
                                c-0.2-0.3-0.6-0.4-0.9-0.4C811.2,944.2,810.9,944.4,810.8,944.7z"/>
                        </g>
                    </g>
                    <g>
                        <path fill="#425563" d="M618.1,539.5h-6v1h6V539.5L618.1,539.5z M608.1,539.5h-6v1h6V539.5L608.1,539.5z M598.1,539.5h-5.1v1h5.1
                            V539.5L598.1,539.5z M594.1,544.4h-1v6h1V544.4L594.1,544.4z M594.1,554.4h-1v6h1V554.4L594.1,554.4z M594.1,564.4h-1v6h1V564.4
                            L594.1,564.4z M602.9,569.5h-6v1h6V569.5L602.9,569.5z M612.9,569.5h-6v1h6V569.5L612.9,569.5z M622.9,569.5h-6v1h6V569.5
                            L622.9,569.5z M628.1,565.7h-1v3.8h-0.2v1h1.2V565.7L628.1,565.7z M628.1,555.7h-1v6h1V555.7L628.1,555.7z M628.1,545.7h-1v6h1
                            V545.7L628.1,545.7z M628.1,539.5h-6v1h5v1.3h1V539.5L628.1,539.5z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M618.1,572.6h-6v1h6V572.6L618.1,572.6z M608.1,572.6h-6v1h6V572.6L608.1,572.6z M598.1,572.6h-5.1v1h5.1
                            V572.6L598.1,572.6z M594.1,577.6h-1v6h1V577.6L594.1,577.6z M594.1,587.6h-1v6h1V587.6L594.1,587.6z M594.1,597.6h-1v6h1V597.6
                            L594.1,597.6z M602.9,602.7h-6v1h6V602.7L602.9,602.7z M612.9,602.7h-6v1h6V602.7L612.9,602.7z M622.9,602.7h-6v1h6V602.7
                            L622.9,602.7z M628.1,598.9h-1v3.8h-0.2v1h1.2V598.9L628.1,598.9z M628.1,588.9h-1v6h1V588.9L628.1,588.9z M628.1,578.9h-1v6h1
                            V578.9L628.1,578.9z M628.1,572.6h-6v1h5v1.3h1V572.6L628.1,572.6z"/>
                    </g>
                </g>
                <g id="people">
                    <g>
                        <g>
                            <circle fill="#FFFFFF" cx="612.5" cy="363.4" r="5.5"/>
                            <path fill="#9B978F" d="M612.5,358.1c2.9,0,5.3,2.4,5.3,5.3c0,2.9-2.4,5.3-5.3,5.3s-5.3-2.4-5.3-5.3
                                C607.2,360.5,609.6,358.1,612.5,358.1 M612.5,357.6c-3.2,0-5.8,2.6-5.8,5.8c0,3.2,2.6,5.8,5.8,5.8s5.8-2.6,5.8-5.8
                                C618.2,360.2,615.7,357.6,612.5,357.6L612.5,357.6z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M612.5,369.3c-3.3,0-5.9-2.7-5.9-5.9c0-3.3,2.7-5.9,5.9-5.9s5.9,2.7,5.9,5.9
                                C618.4,366.7,615.7,369.3,612.5,369.3z M612.5,357.8c-3.1,0-5.6,2.5-5.6,5.6c0,3.1,2.5,5.6,5.6,5.6s5.6-2.5,5.6-5.6
                                C618.1,360.3,615.6,357.8,612.5,357.8z"/>
                            <path fill="#9B978F" d="M612.5,357.5c-3.3,0-5.9,2.7-5.9,5.9c0,3.3,2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9
                                C618.4,360.1,615.7,357.5,612.5,357.5L612.5,357.5z M612.5,369c-3.1,0-5.6-2.5-5.6-5.6c0-3.1,2.5-5.6,5.6-5.6s5.6,2.5,5.6,5.6
                                C618.1,366.5,615.6,369,612.5,369L612.5,369z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#FFFFFF" d="M612.5,367.2c-2.1,0-3.8-1.7-3.8-3.8c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8
                                C616.3,365.5,614.6,367.2,612.5,367.2z"/>
                            <path fill="#9B978F" d="M612.5,359.8c2,0,3.6,1.6,3.6,3.6s-1.6,3.6-3.6,3.6s-3.6-1.6-3.6-3.6S610.5,359.8,612.5,359.8
                                M612.5,359.3c-2.3,0-4.1,1.8-4.1,4.1c0,2.3,1.8,4.1,4.1,4.1c2.3,0,4.1-1.8,4.1-4.1C616.6,361.2,614.7,359.3,612.5,359.3
                                L612.5,359.3z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M612.5,367.6c-2.3,0-4.2-1.9-4.2-4.2c0-2.3,1.9-4.2,4.2-4.2s4.2,1.9,4.2,4.2
                                C616.7,365.7,614.8,367.6,612.5,367.6z M612.5,359.5c-2.2,0-3.9,1.8-3.9,3.9c0,2.2,1.8,3.9,3.9,3.9s3.9-1.8,3.9-3.9
                                C616.4,361.2,614.6,359.5,612.5,359.5z"/>
                            <path fill="#9B978F" d="M612.5,359.2c-2.3,0-4.2,1.9-4.2,4.2c0,2.3,1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2
                                C616.7,361.1,614.8,359.2,612.5,359.2L612.5,359.2z M612.5,367.3c-2.2,0-3.9-1.8-3.9-3.9c0-2.2,1.8-3.9,3.9-3.9s3.9,1.8,3.9,3.9
                                C616.4,365.6,614.6,367.3,612.5,367.3L612.5,367.3z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#FFFFFF" d="M610.8,405c-3,0-5.5-2.5-5.5-5.5s2.5-5.5,5.5-5.5s5.5,2.5,5.5,5.5S613.8,405,610.8,405z"/>
                            <path fill="#9B978F" d="M610.8,394.2c2.9,0,5.3,2.4,5.3,5.3c0,2.9-2.4,5.3-5.3,5.3s-5.3-2.4-5.3-5.3
                                C605.5,396.5,607.8,394.2,610.8,394.2 M610.8,393.7c-3.2,0-5.8,2.6-5.8,5.8c0,3.2,2.6,5.8,5.8,5.8s5.8-2.6,5.8-5.8
                                C616.5,396.3,613.9,393.7,610.8,393.7L610.8,393.7z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M610.8,405.4c-3.3,0-5.9-2.7-5.9-5.9s2.7-5.9,5.9-5.9s5.9,2.7,5.9,5.9S614,405.4,610.8,405.4z
                                M610.8,393.8c-3.1,0-5.6,2.5-5.6,5.6s2.5,5.6,5.6,5.6s5.6-2.5,5.6-5.6S613.9,393.8,610.8,393.8z"/>
                            <path fill="#9B978F" d="M610.8,393.5c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9S614,393.5,610.8,393.5
                                L610.8,393.5z M610.8,405.1c-3.1,0-5.6-2.5-5.6-5.6s2.5-5.6,5.6-5.6s5.6,2.5,5.6,5.6S613.9,405.1,610.8,405.1L610.8,405.1z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#FFFFFF" d="M610.8,403.3c-2.1,0-3.8-1.7-3.8-3.8c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8
                                C614.6,401.5,612.9,403.3,610.8,403.3z"/>
                            <path fill="#9B978F" d="M610.8,395.9c2,0,3.6,1.6,3.6,3.6s-1.6,3.6-3.6,3.6s-3.6-1.6-3.6-3.6S608.8,395.9,610.8,395.9
                                M610.8,395.4c-2.3,0-4.1,1.8-4.1,4.1c0,2.3,1.8,4.1,4.1,4.1s4.1-1.8,4.1-4.1C614.8,397.2,613,395.4,610.8,395.4L610.8,395.4z"
                                />
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M610.8,403.7c-2.3,0-4.2-1.9-4.2-4.2c0-2.3,1.9-4.2,4.2-4.2s4.2,1.9,4.2,4.2
                                C615,401.8,613.1,403.7,610.8,403.7z M610.8,395.5c-2.2,0-3.9,1.8-3.9,3.9c0,2.2,1.8,3.9,3.9,3.9s3.9-1.8,3.9-3.9
                                C614.7,397.3,612.9,395.5,610.8,395.5z"/>
                            <path fill="#9B978F" d="M610.8,395.2c-2.3,0-4.2,1.9-4.2,4.2c0,2.3,1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2
                                C615,397.1,613.1,395.2,610.8,395.2L610.8,395.2z M610.8,403.4c-2.2,0-3.9-1.8-3.9-3.9c0-2.2,1.8-3.9,3.9-3.9s3.9,1.8,3.9,3.9
                                C614.7,401.6,612.9,403.4,610.8,403.4L610.8,403.4z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#FFFFFF" d="M610.8,405c-3,0-5.5-2.5-5.5-5.5s2.5-5.5,5.5-5.5s5.5,2.5,5.5,5.5S613.8,405,610.8,405z"/>
                            <path fill="#9B978F" d="M610.8,394.2c2.9,0,5.3,2.4,5.3,5.3c0,2.9-2.4,5.3-5.3,5.3s-5.3-2.4-5.3-5.3
                                C605.5,396.5,607.8,394.2,610.8,394.2 M610.8,393.7c-3.2,0-5.8,2.6-5.8,5.8c0,3.2,2.6,5.8,5.8,5.8s5.8-2.6,5.8-5.8
                                C616.5,396.3,613.9,393.7,610.8,393.7L610.8,393.7z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M610.8,405.4c-3.3,0-5.9-2.7-5.9-5.9s2.7-5.9,5.9-5.9s5.9,2.7,5.9,5.9S614,405.4,610.8,405.4z
                                M610.8,393.8c-3.1,0-5.6,2.5-5.6,5.6s2.5,5.6,5.6,5.6s5.6-2.5,5.6-5.6S613.9,393.8,610.8,393.8z"/>
                            <path fill="#9B978F" d="M610.8,393.5c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9S614,393.5,610.8,393.5
                                L610.8,393.5z M610.8,405.1c-3.1,0-5.6-2.5-5.6-5.6s2.5-5.6,5.6-5.6s5.6,2.5,5.6,5.6S613.9,405.1,610.8,405.1L610.8,405.1z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#FFFFFF" d="M610.8,403.3c-2.1,0-3.8-1.7-3.8-3.8c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8
                                C614.6,401.5,612.9,403.3,610.8,403.3z"/>
                            <path fill="#9B978F" d="M610.8,395.9c2,0,3.6,1.6,3.6,3.6s-1.6,3.6-3.6,3.6s-3.6-1.6-3.6-3.6S608.8,395.9,610.8,395.9
                                M610.8,395.4c-2.3,0-4.1,1.8-4.1,4.1c0,2.3,1.8,4.1,4.1,4.1s4.1-1.8,4.1-4.1C614.8,397.2,613,395.4,610.8,395.4L610.8,395.4z"
                                />
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M610.8,403.7c-2.3,0-4.2-1.9-4.2-4.2c0-2.3,1.9-4.2,4.2-4.2s4.2,1.9,4.2,4.2
                                C615,401.8,613.1,403.7,610.8,403.7z M610.8,395.5c-2.2,0-3.9,1.8-3.9,3.9c0,2.2,1.8,3.9,3.9,3.9s3.9-1.8,3.9-3.9
                                C614.7,397.3,612.9,395.5,610.8,395.5z"/>
                            <path fill="#9B978F" d="M610.8,395.2c-2.3,0-4.2,1.9-4.2,4.2c0,2.3,1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2
                                C615,397.1,613.1,395.2,610.8,395.2L610.8,395.2z M610.8,403.4c-2.2,0-3.9-1.8-3.9-3.9c0-2.2,1.8-3.9,3.9-3.9s3.9,1.8,3.9,3.9
                                C614.7,401.6,612.9,403.4,610.8,403.4L610.8,403.4z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#FFFFFF" d="M617.7,406.1c-0.9,0-1.6-0.7-1.6-1.6s0.7-1.6,1.6-1.6s1.6,0.7,1.6,1.6S618.5,406.1,617.7,406.1z"/>
                            <path fill="#9B978F" d="M617.7,403.2c0.7,0,1.3,0.6,1.3,1.3s-0.6,1.3-1.3,1.3s-1.3-0.6-1.3-1.3S617,403.2,617.7,403.2
                                M617.7,402.7c-1,0-1.8,0.8-1.8,1.8c0,1,0.8,1.8,1.8,1.8c1,0,1.8-0.8,1.8-1.8C619.5,403.5,618.7,402.7,617.7,402.7L617.7,402.7z
                                "/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M617.7,406.5c-1.1,0-1.9-0.9-1.9-1.9c0-1.1,0.9-1.9,1.9-1.9c1.1,0,1.9,0.9,1.9,1.9
                                C619.6,405.6,618.8,406.5,617.7,406.5z M617.7,402.9c-0.9,0-1.7,0.7-1.7,1.7c0,0.9,0.7,1.7,1.7,1.7c0.9,0,1.7-0.7,1.7-1.7
                                C619.3,403.6,618.6,402.9,617.7,402.9z"/>
                            <path fill="#9B978F" d="M617.7,402.6c-1.1,0-1.9,0.9-1.9,1.9c0,1.1,0.9,1.9,1.9,1.9c1.1,0,1.9-0.9,1.9-1.9
                                C619.6,403.5,618.8,402.6,617.7,402.6L617.7,402.6z M617.7,406.2c-0.9,0-1.7-0.7-1.7-1.7c0-0.9,0.7-1.7,1.7-1.7
                                c0.9,0,1.7,0.7,1.7,1.7C619.3,405.5,618.6,406.2,617.7,406.2L617.7,406.2z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#FFFFFF" d="M617.7,405.6c-0.6,0-1-0.5-1-1s0.5-1,1-1s1,0.5,1,1S618.3,405.6,617.7,405.6z"/>
                            <path fill="#9B978F" d="M617.7,403.8c0.4,0,0.8,0.3,0.8,0.8c0,0.4-0.3,0.8-0.8,0.8c-0.4,0-0.8-0.3-0.8-0.8
                                C616.9,404.1,617.3,403.8,617.7,403.8 M617.7,403.3c-0.7,0-1.3,0.6-1.3,1.3c0,0.7,0.6,1.3,1.3,1.3s1.3-0.6,1.3-1.3
                                C619,403.8,618.4,403.3,617.7,403.3L617.7,403.3z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M617.7,406c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4s1.4,0.6,1.4,1.4
                                C619.1,405.3,618.5,406,617.7,406z M617.7,403.4c-0.6,0-1.1,0.5-1.1,1.1c0,0.6,0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1
                                C618.8,403.9,618.3,403.4,617.7,403.4z"/>
                            <path fill="#9B978F" d="M617.7,403.1c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4s1.4-0.6,1.4-1.4
                                C619.1,403.8,618.5,403.1,617.7,403.1L617.7,403.1z M617.7,405.7c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1
                                C618.8,405.2,618.3,405.7,617.7,405.7L617.7,405.7z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#FFFFFF" d="M617.7,406.1c-0.9,0-1.6-0.7-1.6-1.6s0.7-1.6,1.6-1.6s1.6,0.7,1.6,1.6S618.5,406.1,617.7,406.1z"/>
                            <path fill="#9B978F" d="M617.7,403.2c0.7,0,1.3,0.6,1.3,1.3s-0.6,1.3-1.3,1.3s-1.3-0.6-1.3-1.3S617,403.2,617.7,403.2
                                M617.7,402.7c-1,0-1.8,0.8-1.8,1.8c0,1,0.8,1.8,1.8,1.8c1,0,1.8-0.8,1.8-1.8C619.5,403.5,618.7,402.7,617.7,402.7L617.7,402.7z
                                "/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M617.7,406.5c-1.1,0-1.9-0.9-1.9-1.9c0-1.1,0.9-1.9,1.9-1.9c1.1,0,1.9,0.9,1.9,1.9
                                C619.6,405.6,618.8,406.5,617.7,406.5z M617.7,402.9c-0.9,0-1.7,0.7-1.7,1.7c0,0.9,0.7,1.7,1.7,1.7c0.9,0,1.7-0.7,1.7-1.7
                                C619.3,403.6,618.6,402.9,617.7,402.9z"/>
                            <path fill="#9B978F" d="M617.7,402.6c-1.1,0-1.9,0.9-1.9,1.9c0,1.1,0.9,1.9,1.9,1.9c1.1,0,1.9-0.9,1.9-1.9
                                C619.6,403.5,618.8,402.6,617.7,402.6L617.7,402.6z M617.7,406.2c-0.9,0-1.7-0.7-1.7-1.7c0-0.9,0.7-1.7,1.7-1.7
                                c0.9,0,1.7,0.7,1.7,1.7C619.3,405.5,618.6,406.2,617.7,406.2L617.7,406.2z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#FFFFFF" d="M617.7,405.6c-0.6,0-1-0.5-1-1s0.5-1,1-1s1,0.5,1,1S618.3,405.6,617.7,405.6z"/>
                            <path fill="#9B978F" d="M617.7,403.8c0.4,0,0.8,0.3,0.8,0.8c0,0.4-0.3,0.8-0.8,0.8c-0.4,0-0.8-0.3-0.8-0.8
                                C616.9,404.1,617.3,403.8,617.7,403.8 M617.7,403.3c-0.7,0-1.3,0.6-1.3,1.3c0,0.7,0.6,1.3,1.3,1.3s1.3-0.6,1.3-1.3
                                C619,403.8,618.4,403.3,617.7,403.3L617.7,403.3z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M617.7,406c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4s1.4,0.6,1.4,1.4
                                C619.1,405.3,618.5,406,617.7,406z M617.7,403.4c-0.6,0-1.1,0.5-1.1,1.1c0,0.6,0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1
                                C618.8,403.9,618.3,403.4,617.7,403.4z"/>
                            <path fill="#9B978F" d="M617.7,403.1c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4s1.4-0.6,1.4-1.4
                                C619.1,403.8,618.5,403.1,617.7,403.1L617.7,403.1z M617.7,405.7c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1
                                C618.8,405.2,618.3,405.7,617.7,405.7L617.7,405.7z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#FFFFFF" d="M612.6,375.3c-0.9,0-1.6-0.7-1.6-1.6s0.7-1.6,1.6-1.6s1.6,0.7,1.6,1.6S613.5,375.3,612.6,375.3z"/>
                            <path fill="#9B978F" d="M612.6,372.4c0.7,0,1.3,0.6,1.3,1.3s-0.6,1.3-1.3,1.3s-1.3-0.6-1.3-1.3S611.9,372.4,612.6,372.4
                                M612.6,371.9c-1,0-1.8,0.8-1.8,1.8c0,1,0.8,1.8,1.8,1.8c1,0,1.8-0.8,1.8-1.8C614.4,372.7,613.6,371.9,612.6,371.9L612.6,371.9z
                                "/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M612.6,375.7c-1.1,0-1.9-0.9-1.9-1.9c0-1.1,0.9-1.9,1.9-1.9s1.9,0.9,1.9,1.9
                                C614.6,374.8,613.7,375.7,612.6,375.7z M612.6,372.1c-0.9,0-1.7,0.7-1.7,1.7c0,0.9,0.7,1.7,1.7,1.7s1.7-0.7,1.7-1.7
                                C614.3,372.8,613.6,372.1,612.6,372.1z"/>
                            <path fill="#9B978F" d="M612.6,371.8c-1.1,0-1.9,0.9-1.9,1.9c0,1.1,0.9,1.9,1.9,1.9s1.9-0.9,1.9-1.9
                                C614.6,372.6,613.7,371.8,612.6,371.8L612.6,371.8z M612.6,375.4c-0.9,0-1.7-0.7-1.7-1.7c0-0.9,0.7-1.7,1.7-1.7s1.7,0.7,1.7,1.7
                                C614.3,374.6,613.6,375.4,612.6,375.4L612.6,375.4z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#FFFFFF" d="M612.6,374.7c-0.6,0-1-0.5-1-1s0.5-1,1-1s1,0.5,1,1S613.2,374.7,612.6,374.7z"/>
                            <path fill="#9B978F" d="M612.6,372.9c0.4,0,0.8,0.3,0.8,0.8s-0.3,0.8-0.8,0.8c-0.4,0-0.8-0.3-0.8-0.8S612.2,372.9,612.6,372.9
                                M612.6,372.4c-0.7,0-1.3,0.6-1.3,1.3c0,0.7,0.6,1.3,1.3,1.3s1.3-0.6,1.3-1.3C613.9,373,613.3,372.4,612.6,372.4L612.6,372.4z"
                                />
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M612.6,375.1c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4S613.4,375.1,612.6,375.1z
                                M612.6,372.6c-0.6,0-1.1,0.5-1.1,1.1s0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1S613.3,372.6,612.6,372.6z"/>
                            <path fill="#9B978F" d="M612.6,372.3c-0.8,0-1.4,0.6-1.4,1.4s0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4S613.4,372.3,612.6,372.3
                                L612.6,372.3z M612.6,374.8c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S613.3,374.8,612.6,374.8L612.6,374.8z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#FFFFFF" d="M612.6,375.3c-0.9,0-1.6-0.7-1.6-1.6s0.7-1.6,1.6-1.6s1.6,0.7,1.6,1.6S613.5,375.3,612.6,375.3z"/>
                            <path fill="#9B978F" d="M612.6,372.4c0.7,0,1.3,0.6,1.3,1.3s-0.6,1.3-1.3,1.3s-1.3-0.6-1.3-1.3S611.9,372.4,612.6,372.4
                                M612.6,371.9c-1,0-1.8,0.8-1.8,1.8c0,1,0.8,1.8,1.8,1.8c1,0,1.8-0.8,1.8-1.8C614.4,372.7,613.6,371.9,612.6,371.9L612.6,371.9z
                                "/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M612.6,375.7c-1.1,0-1.9-0.9-1.9-1.9c0-1.1,0.9-1.9,1.9-1.9s1.9,0.9,1.9,1.9
                                C614.6,374.8,613.7,375.7,612.6,375.7z M612.6,372.1c-0.9,0-1.7,0.7-1.7,1.7c0,0.9,0.7,1.7,1.7,1.7s1.7-0.7,1.7-1.7
                                C614.3,372.8,613.6,372.1,612.6,372.1z"/>
                            <path fill="#9B978F" d="M612.6,371.8c-1.1,0-1.9,0.9-1.9,1.9c0,1.1,0.9,1.9,1.9,1.9s1.9-0.9,1.9-1.9
                                C614.6,372.6,613.7,371.8,612.6,371.8L612.6,371.8z M612.6,375.4c-0.9,0-1.7-0.7-1.7-1.7c0-0.9,0.7-1.7,1.7-1.7s1.7,0.7,1.7,1.7
                                C614.3,374.6,613.6,375.4,612.6,375.4L612.6,375.4z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#FFFFFF" d="M612.6,374.7c-0.6,0-1-0.5-1-1s0.5-1,1-1s1,0.5,1,1S613.2,374.7,612.6,374.7z"/>
                            <path fill="#9B978F" d="M612.6,372.9c0.4,0,0.8,0.3,0.8,0.8s-0.3,0.8-0.8,0.8c-0.4,0-0.8-0.3-0.8-0.8S612.2,372.9,612.6,372.9
                                M612.6,372.4c-0.7,0-1.3,0.6-1.3,1.3c0,0.7,0.6,1.3,1.3,1.3s1.3-0.6,1.3-1.3C613.9,373,613.3,372.4,612.6,372.4L612.6,372.4z"
                                />
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M612.6,375.1c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4S613.4,375.1,612.6,375.1z
                                M612.6,372.6c-0.6,0-1.1,0.5-1.1,1.1s0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1S613.3,372.6,612.6,372.6z"/>
                            <path fill="#9B978F" d="M612.6,372.3c-0.8,0-1.4,0.6-1.4,1.4s0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4S613.4,372.3,612.6,372.3
                                L612.6,372.3z M612.6,374.8c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S613.3,374.8,612.6,374.8L612.6,374.8z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M615,356.3c-0.4,0-0.8-0.1-1.3-0.3c-0.6-0.2-1-0.3-1.3-0.5c0.4,0,0.8,0.1,1.3,0.3
                                    C614.3,356,614.7,356.1,615,356.3z"/>
                                <path fill="#9B978F" d="M612.1,355.3c-0.2,0-0.3,0-0.3,0.1c-0.1,0.2,0.8,0.6,1.8,0.9c0.7,0.2,1.3,0.3,1.7,0.3
                                    c0.2,0,0.3,0,0.3-0.1c0.1-0.2-0.8-0.6-1.8-0.9C613.1,355.4,612.4,355.3,612.1,355.3L612.1,355.3z"/>
                            </g>
                            <g>
                                <path fill="#FFFFFF" d="M615.2,356.7c-0.1,0-0.2,0-0.3,0c-0.4,0-0.9-0.1-1.4-0.3c-0.5-0.1-1-0.3-1.4-0.5
                                    c-0.5-0.2-0.6-0.4-0.6-0.6c0-0.2,0.4-0.4,2.2,0.1c0.5,0.1,1,0.3,1.4,0.5c0.5,0.2,0.6,0.4,0.6,0.6
                                    C615.7,356.6,615.5,356.7,615.2,356.7z M611.9,355.4c0.2,0.1,0.7,0.4,1.7,0.7c0.9,0.3,1.6,0.3,1.8,0.3
                                    c-0.2-0.1-0.7-0.4-1.7-0.7C612.8,355.5,612.2,355.4,611.9,355.4z"/>
                                <path fill="#9B978F" d="M612.1,355.1c-0.4,0-0.5,0.1-0.5,0.2c0,0.2,0.1,0.3,0.6,0.6c0.4,0.2,0.8,0.3,1.4,0.5
                                    c0.5,0.1,1,0.2,1.4,0.3c0.1,0,0.2,0,0.3,0c0.3,0,0.4-0.1,0.5-0.2c0-0.2-0.1-0.3-0.6-0.6c-0.4-0.2-0.8-0.3-1.4-0.5
                                    C613,355.2,612.4,355.1,612.1,355.1L612.1,355.1z M615.2,356.4c-0.3,0-0.9-0.1-1.6-0.3c-0.9-0.3-1.5-0.5-1.7-0.7
                                    c0,0,0.1,0,0.1,0c0.3,0,0.9,0.1,1.6,0.3c0.9,0.3,1.5,0.5,1.7,0.7C615.3,356.4,615.3,356.4,615.2,356.4L615.2,356.4z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M617,357.3c-0.1,0-0.3,0-0.5-0.1c-0.4-0.1-0.7-0.3-0.8-0.5c0-0.1-0.1-0.2,0-0.2c0-0.2,0.3-0.3,0.7-0.3
                                    c0.1,0,0.3,0,0.5,0.1c0.6,0.2,0.9,0.5,0.8,0.8C617.6,357.2,617.4,357.3,617,357.3z"/>
                                <path fill="#9B978F" d="M616.4,356.4L616.4,356.4c0.1,0,0.3,0,0.4,0.1c0.4,0.1,0.7,0.4,0.7,0.4c0,0-0.2,0.1-0.4,0.1
                                    c-0.1,0-0.3,0-0.4-0.1c-0.4-0.1-0.7-0.4-0.7-0.4C616,356.5,616.1,356.4,616.4,356.4 M616.4,355.9c-0.5,0-0.8,0.2-0.9,0.5
                                    c-0.1,0.4,0.3,0.9,1,1.1c0.2,0,0.4,0.1,0.5,0.1c0.5,0,0.8-0.2,0.9-0.5c0.1-0.4-0.3-0.9-1-1.1
                                    C616.7,356,616.5,355.9,616.4,355.9L616.4,355.9z"/>
                            </g>
                            <g>
                                <path fill="#FFFFFF" d="M617,357.7c-0.2,0-0.4,0-0.6-0.1c-0.3-0.1-0.7-0.3-0.9-0.5c-0.2-0.2-0.3-0.5-0.2-0.8
                                    c0.1-0.2,0.3-0.4,0.6-0.5c0.3-0.1,0.6-0.1,1,0c0.3,0.1,0.7,0.3,0.9,0.5c0.2,0.2,0.3,0.5,0.2,0.8c-0.1,0.2-0.3,0.4-0.6,0.5
                                    C617.3,357.7,617.2,357.7,617,357.7z M616.4,356.1c-0.1,0-0.2,0-0.4,0c-0.2,0.1-0.4,0.2-0.4,0.3c0,0.1,0,0.3,0.2,0.5
                                    c0.2,0.2,0.4,0.3,0.7,0.4c0.3,0.1,0.6,0.1,0.8,0c0.2-0.1,0.4-0.2,0.4-0.3c0-0.1,0-0.3-0.2-0.5c-0.2-0.2-0.4-0.3-0.7-0.4
                                    C616.7,356.1,616.5,356.1,616.4,356.1z"/>
                                <path fill="#9B978F" d="M616.4,355.8c-0.2,0-0.3,0-0.4,0.1c-0.3,0.1-0.5,0.3-0.6,0.5c-0.1,0.2,0,0.5,0.2,0.8
                                    c0.2,0.2,0.5,0.4,0.9,0.5c0.2,0.1,0.4,0.1,0.6,0.1c0.2,0,0.3,0,0.4-0.1c0.3-0.1,0.5-0.3,0.6-0.5c0.1-0.2,0-0.5-0.2-0.8
                                    c-0.2-0.2-0.5-0.4-0.9-0.5C616.8,355.8,616.6,355.8,616.4,355.8L616.4,355.8z M617,357.4c-0.2,0-0.3,0-0.5-0.1
                                    c-0.3-0.1-0.6-0.2-0.7-0.4c-0.2-0.2-0.2-0.3-0.2-0.5c0-0.1,0.2-0.3,0.4-0.3c0.1,0,0.2,0,0.4,0c0.2,0,0.3,0,0.5,0.1
                                    c0.3,0.1,0.6,0.2,0.7,0.4c0.2,0.2,0.2,0.3,0.2,0.5c0,0.1-0.2,0.3-0.4,0.3C617.3,357.4,617.2,357.4,617,357.4L617,357.4z"/>
                            </g>
                        </g>
                    </g>
                    <g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M607.8,406c0.2-0.2,0.6-0.6,1.1-1c0.5-0.4,0.9-0.7,1.2-0.9c-0.2,0.2-0.6,0.6-1.1,1
                                    C608.5,405.5,608.1,405.8,607.8,406z"/>
                                <path fill="#9B978F" d="M610.4,403.6c-0.3,0-1,0.4-1.7,1.1c-0.9,0.7-1.5,1.5-1.4,1.6c0,0,0,0,0.1,0c0.3,0,1-0.4,1.7-1.1
                                    C610,404.5,610.6,403.8,610.4,403.6C610.5,403.7,610.5,403.6,610.4,403.6L610.4,403.6z"/>
                            </g>
                            <g>
                                <path fill="#FFFFFF" d="M607.4,406.5c-0.1,0-0.1,0-0.2-0.1c-0.3-0.4,1-1.5,1.4-1.8c0.4-0.3,1.7-1.4,2-1c0.3,0.4-1,1.5-1.4,1.8
                                    C608.9,405.7,607.9,406.5,607.4,406.5z M610.4,403.8c-0.2,0.1-0.8,0.4-1.6,1c-0.8,0.7-1.2,1.2-1.3,1.4c0.2-0.1,0.8-0.4,1.6-1
                                    C609.8,404.5,610.3,404,610.4,403.8z"/>
                                <path fill="#9B978F" d="M610.4,403.5c-0.5,0-1.5,0.8-1.8,1.1c-0.4,0.3-1.7,1.5-1.4,1.8c0,0.1,0.1,0.1,0.2,0.1
                                    c0.5,0,1.5-0.8,1.8-1.1c0.4-0.3,1.7-1.5,1.4-1.8C610.6,403.5,610.5,403.5,610.4,403.5L610.4,403.5z M610.4,403.8
                                    c-0.1,0.2-0.5,0.7-1.3,1.4c-0.8,0.7-1.4,1-1.6,1c0.1-0.2,0.5-0.7,1.3-1.4C609.6,404.2,610.1,403.9,610.4,403.8L610.4,403.8z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M610.9,403.7c-0.1,0-0.2,0-0.3-0.1c-0.1-0.1-0.1-0.2,0-0.4c0.1-0.2,0.3-0.5,0.5-0.7
                                    c0.3-0.2,0.6-0.4,0.9-0.4c0.1,0,0.2,0,0.3,0.1c0.2,0.2,0,0.7-0.5,1.1C611.5,403.5,611.2,403.7,610.9,403.7z"/>
                                <path fill="#9B978F" d="M612,402.4C612,402.4,612.1,402.4,612,402.4C612.1,402.4,612.1,402.4,612,402.4
                                    c0.1,0.1,0.1,0.4-0.3,0.8c-0.3,0.2-0.5,0.3-0.7,0.3c-0.1,0-0.1,0-0.1,0c0,0,0,0,0,0c0-0.1,0-0.4,0.4-0.7
                                    C611.5,402.4,611.8,402.4,612,402.4 M612,401.9c-0.3,0-0.7,0.2-1,0.4c-0.6,0.5-0.8,1.1-0.5,1.4c0.1,0.1,0.3,0.2,0.5,0.2
                                    c0.3,0,0.7-0.2,1-0.4c0.6-0.5,0.8-1.1,0.5-1.4C612.3,401.9,612.2,401.9,612,401.9L612,401.9z"/>
                            </g>
                            <g>
                                <path fill="#FFFFFF" d="M610.9,404.1c-0.2,0-0.5-0.1-0.6-0.2c-0.3-0.4-0.1-1.1,0.5-1.7c0.6-0.5,1.4-0.6,1.7-0.2
                                    c0.3,0.4,0.1,1.1-0.5,1.7C611.7,403.9,611.3,404.1,610.9,404.1z M612,402c-0.3,0-0.6,0.1-0.9,0.4c-0.5,0.4-0.7,1-0.5,1.2
                                    c0.2,0.3,0.8,0.1,1.3-0.3c0.5-0.4,0.7-1,0.5-1.2l0,0C612.3,402,612.1,402,612,402z"/>
                                <path fill="#9B978F" d="M612,401.7c-0.3,0-0.8,0.2-1.1,0.5c-0.6,0.5-0.8,1.3-0.5,1.7c0.1,0.2,0.3,0.2,0.6,0.2c0,0,0,0,0,0
                                    c0.3,0,0.8-0.2,1.1-0.5c0.6-0.5,0.8-1.3,0.5-1.7C612.4,401.8,612.2,401.7,612,401.7L612,401.7z M610.9,403.8
                                    c-0.2,0-0.3,0-0.4-0.1c-0.2-0.3,0-0.8,0.5-1.2c0.3-0.3,0.7-0.4,0.9-0.4c0.2,0,0.3,0,0.4,0.1c0.2,0.3,0,0.8-0.5,1.2
                                    C611.5,403.6,611.2,403.8,610.9,403.8L610.9,403.8z"/>
                            </g>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#FFFFFF" d="M614,402.3c-0.2-0.2-0.4-0.6-0.4-1.4c0-0.8,0.2-1.1,0.3-1.5c0.1-0.2,0.2-0.4,0.2-0.7L614,402.3z
                                M614.1,397.5c-0.1-1.4,0-2.8,0-3.1c0,0,0.1-0.1,0.1-0.1L614.1,397.5z"/>
                            <path fill="#9B978F" d="M614.3,394c-0.2,0-0.4,0.2-0.4,0.2s-0.1,1.7,0,3.4c0.1,1.8-0.6,1.5-0.6,3.2c0,1.8,0.9,1.8,0.9,1.8
                                l0.3-8.5C614.4,394.1,614.4,394,614.3,394L614.3,394z"/>
                        </g>
                        <g>
                            <path fill="#FFFFFF" d="M614.3,402.9l-0.2,0c0,0-1.1-0.1-1-2c0-0.9,0.2-1.3,0.3-1.6c0.2-0.4,0.3-0.7,0.3-1.6
                                c-0.1-1.8,0-3.4,0-3.4l0,0l0,0c0-0.1,0.3-0.3,0.5-0.3c0.1,0,0.3,0.1,0.3,0.3l0,0L614.3,402.9z M614,394.3c0,0.3-0.1,1.8,0,3.4
                                c0.1,1-0.1,1.3-0.3,1.7c-0.1,0.3-0.3,0.7-0.3,1.5c0,1.2,0.4,1.5,0.6,1.6l0.3-8.3c0-0.1-0.1-0.1-0.1-0.1
                                C614.2,394.1,614.1,394.2,614,394.3z"/>
                            <path fill="#9B978F" d="M614.3,393.9c-0.2,0-0.4,0.2-0.5,0.3l0,0l0,0c0,0-0.1,1.7,0,3.4c0,0.9-0.1,1.2-0.3,1.6
                                c-0.2,0.4-0.3,0.7-0.3,1.6c0,1.9,1,2,1,2l0.2,0l0.3-8.7l0,0C614.6,394,614.5,393.9,614.3,393.9
                                C614.3,393.9,614.3,393.9,614.3,393.9L614.3,393.9z M614.1,402.5c-0.2-0.1-0.6-0.5-0.6-1.6c0-0.8,0.2-1.2,0.3-1.5
                                c0.2-0.4,0.3-0.8,0.3-1.7c-0.1-1.6,0-3.1,0-3.4c0.1-0.1,0.2-0.1,0.2-0.1c0,0,0,0,0,0c0,0,0.1,0,0.1,0.1L614.1,402.5L614.1,402.5
                                z"/>
                        </g>
                    </g>
                    <g>
                        <path fill="#FFFFFF" stroke="#9B978F" stroke-width="0.5" stroke-miterlimit="10" d="M615.5,362.1c0-0.3-0.1-0.6-0.4-0.7
                            c-0.3-0.1-0.6-0.1-0.8,0.1c-0.1,0.1-0.1,0.1-0.2,0.2c-0.1,0-0.3-0.1-0.4-0.1c-0.1,0-0.2,0-0.3,0.1c-0.3,0.1-0.6,0.4-0.6,0.7
                            c0.1,0.3,0.6,0.4,0.8,0.7c0,0,0.1,0.1,0,0.1c0,0.1-0.2,0.1-0.3,0.2c-0.1,0.1,0,0.4,0.1,0.5c0.1,0.3-0.3,0.5-0.6,0.4
                            c-0.1,0-0.1,0.1,0,0.2c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0,0.2-0.1,0.3c-0.1,0.1-0.2,0.1-0.3,0.1c-0.3,0.2-0.5,0.6-0.6,0.9
                            c0,0.1,0.3,0,0.4,0c0.1,0,0.1,0.2,0.2,0.3c0.1,0.6,0.9,0.8,1.3,0.5c0.1,0.1,0.2,0.2,0.3,0.2c0.1-0.2,0.1-0.5,0-0.7
                            c-0.1-0.2-0.2-0.5-0.1-0.7c0.1-0.2,0.4-0.2,0.6-0.1c0.2,0.1,0.5,0.1,0.6,0c0.2-0.2,0.2-0.5,0.1-0.8c-0.1-0.3-0.3-0.5-0.3-0.8
                            c0.3,0.2,0.8,0,0.9-0.4c0-0.1,0-0.2,0.1-0.2c0-0.1,0.1-0.1,0.2-0.2c0.2-0.2,0.2-0.5,0.1-0.7c-0.1-0.2-0.4-0.3-0.6-0.2"/>
                        <g>
                            <path fill="#FFFFFF" d="M614.3,367.2l-0.1-0.1c-0.1,0-0.2-0.1-0.3-0.2c-0.2,0.1-0.5,0.1-0.8,0c-0.3-0.1-0.6-0.4-0.6-0.7l0,0
                                c0,0,0-0.1-0.1-0.2c0,0-0.1,0-0.1,0c-0.1,0-0.3,0.1-0.4-0.1l0,0l0,0c0.1-0.4,0.3-0.8,0.7-1c0,0,0.1,0,0.1-0.1
                                c0.1,0,0.1,0,0.2-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0,0-0.1-0.1c0,0,0,0-0.1-0.1c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.1,0.1-0.1,0.1-0.2
                                l0.1,0l0.1,0c0.1,0,0.2,0,0.2,0c0.1,0,0.1-0.1,0.1-0.2c0,0,0-0.1,0-0.2c-0.1-0.1-0.1-0.4,0-0.5c0.1,0,0.1-0.1,0.2-0.1
                                c0,0,0,0,0,0c0,0,0,0,0,0c-0.1-0.1-0.2-0.2-0.3-0.2c-0.2-0.1-0.4-0.2-0.5-0.5c-0.1-0.2,0-0.6,0.6-0.9c0.1,0,0.2-0.1,0.4-0.1
                                c0.1,0,0.2,0,0.2,0.1c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.1-0.1c0,0,0,0,0,0c0.2-0.3,0.6-0.3,1-0.2c0.3,0.1,0.5,0.5,0.5,0.9l-0.3,0
                                c0-0.2-0.1-0.5-0.3-0.6c-0.2-0.1-0.5,0-0.6,0.1c0,0,0,0,0,0c0,0.1-0.1,0.1-0.2,0.2c-0.1,0-0.3,0-0.4,0c0,0-0.1,0-0.1,0
                                c-0.1,0-0.1,0-0.2,0.1c-0.2,0.1-0.5,0.3-0.5,0.5c0,0.1,0.2,0.2,0.3,0.3c0.1,0.1,0.3,0.2,0.4,0.3c0.1,0.1,0.1,0.2,0.1,0.3
                                c0,0.1-0.2,0.2-0.2,0.2c0,0-0.1,0-0.1,0c0,0,0,0.1,0,0.2c0,0.1,0,0.1,0.1,0.2c0,0.2-0.1,0.4-0.2,0.5c-0.1,0.1-0.2,0.1-0.3,0.1
                                c0,0,0.1,0.1,0.1,0.1c0.1,0.2,0,0.4-0.2,0.5c-0.1,0-0.1,0.1-0.2,0.1c0,0-0.1,0-0.1,0c-0.2,0.1-0.4,0.4-0.5,0.7
                                c0.1,0,0.2,0,0.2,0c0.2,0,0.2,0.2,0.3,0.4l0,0c0,0.2,0.2,0.4,0.5,0.5c0.2,0.1,0.5,0.1,0.7,0l0.1-0.1l0.1,0.1
                                c0,0,0.1,0.1,0.1,0.1c0-0.1,0-0.3,0-0.4c0,0,0-0.1-0.1-0.1c-0.1-0.2-0.2-0.5,0-0.7c0.1-0.2,0.4-0.3,0.8-0.2l0,0
                                c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.1-0.4,0-0.6c0-0.1-0.1-0.1-0.1-0.2c-0.1-0.2-0.2-0.4-0.2-0.7l0-0.2l0.2,0.1
                                c0.1,0.1,0.3,0.1,0.4,0c0.1-0.1,0.2-0.2,0.3-0.3c0,0,0,0,0-0.1c0-0.1,0-0.1,0.1-0.2c0-0.1,0.1-0.1,0.2-0.2c0,0,0,0,0.1,0
                                c0.1-0.1,0.2-0.3,0.1-0.5c-0.1-0.1-0.3-0.2-0.5-0.2l-0.1-0.3c0.3-0.1,0.6,0,0.8,0.3c0.2,0.3,0.1,0.6-0.1,0.8c0,0,0,0-0.1,0.1
                                c0,0-0.1,0.1-0.1,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c-0.1,0.2-0.2,0.4-0.5,0.5c-0.1,0.1-0.3,0.1-0.4,0c0,0.1,0.1,0.2,0.2,0.3
                                c0,0.1,0.1,0.1,0.1,0.2c0.2,0.3,0.2,0.8-0.1,1c-0.2,0.1-0.5,0.1-0.7,0l0,0c-0.1,0-0.4-0.1-0.5,0c-0.1,0.1,0,0.2,0.1,0.4
                                c0,0.1,0,0.1,0.1,0.2c0.1,0.3,0.1,0.6,0,0.8L614.3,367.2z"/>
                            <path fill="#9B978F" d="M614.8,361.1c-0.2,0-0.4,0.1-0.6,0.3c0,0,0,0,0,0c0,0-0.1,0.1-0.1,0.1c0,0,0,0,0,0c0,0-0.1,0-0.1,0
                                c-0.1,0-0.1-0.1-0.2-0.1c0,0,0,0,0,0c-0.1,0-0.3,0.1-0.3,0.1c-0.6,0.3-0.7,0.6-0.6,0.9c0.1,0.3,0.3,0.4,0.5,0.5
                                c0.1,0.1,0.2,0.1,0.3,0.2c0,0,0,0,0,0c0,0,0,0,0,0c0,0-0.1,0-0.2,0.1c-0.2,0.2-0.1,0.4,0,0.5c0,0.1,0,0.1,0,0.2
                                c0,0.1-0.1,0.2-0.1,0.2c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0l-0.1,0l-0.1,0c-0.1,0-0.1,0.1-0.1,0.2c0,0.1,0,0.2,0.1,0.3
                                c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0.1,0.1c0,0,0,0.1-0.1,0.1c0,0-0.1,0-0.2,0.1c0,0-0.1,0-0.1,0.1c-0.4,0.2-0.6,0.6-0.7,1l0,0l0,0
                                c0,0.1,0.1,0.2,0.2,0.2c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.1,0c0,0,0,0,0,0c0,0,0,0.1,0.1,0.2l0,0c0.1,0.3,0.3,0.6,0.6,0.7
                                c0.1,0.1,0.3,0.1,0.4,0.1c0.1,0,0.3,0,0.4-0.1c0.1,0.1,0.2,0.1,0.3,0.2l0.1,0.1l0.1-0.1c0.1-0.3,0.1-0.5,0-0.8
                                c0-0.1,0-0.1-0.1-0.2c-0.1-0.2-0.1-0.3-0.1-0.4c0-0.1,0.1-0.1,0.2-0.1c0.1,0,0.2,0,0.2,0l0,0c0.1,0,0.3,0.1,0.4,0.1
                                c0.1,0,0.2,0,0.3-0.1c0.3-0.2,0.3-0.6,0.1-1c0-0.1-0.1-0.1-0.1-0.2c-0.1-0.1-0.1-0.2-0.2-0.3c0,0,0.1,0,0.1,0
                                c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.4-0.3,0.5-0.5c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0.1-0.1
                                c0.2-0.2,0.3-0.6,0.1-0.8c-0.1-0.2-0.4-0.3-0.6-0.3c-0.1,0-0.1,0-0.2,0l0.1,0.3c0,0,0.1,0,0.1,0c0.1,0,0.3,0.1,0.3,0.2
                                c0.1,0.1,0.1,0.4-0.1,0.5c0,0,0,0-0.1,0c-0.1,0-0.1,0.1-0.2,0.2c0,0.1-0.1,0.2-0.1,0.2c0,0,0,0,0,0.1c0,0.1-0.1,0.2-0.3,0.3
                                c-0.1,0-0.1,0-0.2,0c-0.1,0-0.2,0-0.2-0.1l-0.2-0.1l0,0.2c0,0.3,0.1,0.5,0.2,0.7c0,0.1,0.1,0.1,0.1,0.2c0.1,0.2,0.1,0.5,0,0.6
                                c0,0-0.1,0-0.2,0c-0.1,0-0.2,0-0.3-0.1l0,0c-0.1,0-0.2-0.1-0.3-0.1c-0.2,0-0.4,0.1-0.5,0.2c-0.2,0.2-0.1,0.5,0,0.7
                                c0,0,0,0.1,0.1,0.1c0,0.1,0.1,0.3,0,0.4c0,0-0.1-0.1-0.1-0.1l-0.1-0.1l-0.1,0.1c-0.1,0.1-0.2,0.1-0.4,0.1c-0.1,0-0.2,0-0.3-0.1
                                c-0.2-0.1-0.4-0.3-0.5-0.5l0,0c0-0.1-0.1-0.3-0.3-0.4c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.2,0c0.1-0.3,0.2-0.6,0.5-0.7
                                c0,0,0.1,0,0.1,0c0.1,0,0.1-0.1,0.2-0.1c0.1-0.1,0.2-0.3,0.2-0.5c0,0,0-0.1-0.1-0.1c0.1,0,0.2,0,0.3-0.1
                                c0.2-0.1,0.3-0.3,0.2-0.5c0-0.1,0-0.1-0.1-0.2c0-0.1-0.1-0.2,0-0.2c0,0,0,0,0.1,0c0.1,0,0.2-0.1,0.2-0.2c0-0.1,0-0.1-0.1-0.3
                                c-0.1-0.1-0.3-0.2-0.4-0.3c-0.2-0.1-0.3-0.2-0.3-0.3c-0.1-0.2,0.3-0.4,0.5-0.5c0.1,0,0.2-0.1,0.2-0.1c0,0,0,0,0,0
                                c0,0,0.1,0,0.1,0c0.1,0,0.2,0.1,0.2,0.1c0,0,0.1,0,0.1,0c0.1,0,0.2-0.1,0.2-0.2c0,0,0,0,0,0c0.1-0.1,0.2-0.2,0.4-0.2
                                c0.1,0,0.2,0,0.2,0c0.2,0.1,0.3,0.3,0.3,0.6l0.3,0c0-0.3-0.1-0.7-0.5-0.9C615,361.2,614.9,361.1,614.8,361.1L614.8,361.1z"/>
                        </g>
                    </g>
                    <g>
                        <path fill="#FFFFFF" stroke="#9B978F" stroke-width="0.5" stroke-miterlimit="10" d="M609.5,396.7c0.2,0.2,0.3,0.5,0.4,0.8
                            c0.1,0.3,0.1,0.7,0.4,0.9c0,0,0.1,0.1,0.1,0.1c0,0.1,0,0.1,0.1,0.2c0,0,0.1,0,0.1,0c0.2,0,0.4,0,0.5,0c0.1,0,0.3,0,0.3-0.1
                            c0-0.1,0-0.1,0-0.2c-0.1-0.4-0.2-0.8-0.4-1.2c-0.1-0.2-0.3-0.4-0.3-0.7c0-0.1,0-0.1-0.1-0.1c0,0,0,0-0.1,0
                            c-0.3-0.1-0.6,0-0.8,0.2"/>
                        <g>
                            <path fill="#FFFFFF" d="M610.6,398.9c-0.1,0-0.2,0-0.2-0.1c-0.1-0.1-0.1-0.1-0.1-0.2c0,0,0,0,0,0c0,0,0,0-0.1,0l0,0
                                c-0.3-0.2-0.4-0.5-0.4-0.8c0-0.1,0-0.1,0-0.2c-0.1-0.3-0.2-0.5-0.3-0.7l0.2-0.2c0.2,0.2,0.3,0.5,0.4,0.8c0,0.1,0,0.1,0,0.2
                                c0.1,0.3,0.1,0.5,0.3,0.7l0,0c0,0,0.1,0.1,0.2,0.2c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0l0.5,0c0.2,0,0.2,0,0.2,0
                                c0,0,0-0.1,0-0.1c-0.1-0.4-0.2-0.8-0.4-1.1c0-0.1-0.1-0.1-0.1-0.2c-0.1-0.2-0.2-0.4-0.2-0.6l0,0c0,0,0,0,0-0.1c0,0,0,0,0,0
                                c-0.2-0.1-0.5,0-0.6,0.2l-0.2-0.2c0.2-0.3,0.6-0.4,1-0.3c0,0,0.1,0,0.1,0.1c0.1,0.1,0.1,0.1,0.1,0.2l0,0c0,0.2,0.1,0.3,0.2,0.5
                                c0,0.1,0.1,0.1,0.1,0.2c0.2,0.4,0.3,0.8,0.4,1.2c0,0.1,0,0.2,0,0.3c-0.1,0.1-0.2,0.2-0.4,0.2L610.6,398.9
                                C610.6,398.9,610.6,398.9,610.6,398.9z M610.5,398.6L610.5,398.6L610.5,398.6z"/>
                            <path fill="#9B978F" d="M610.3,396.2c-0.3,0-0.5,0.1-0.7,0.3l0.2,0.2c0.1-0.1,0.3-0.2,0.4-0.2c0.1,0,0.1,0,0.2,0c0,0,0,0,0,0
                                l0,0c0,0,0,0,0,0.1l0,0c0,0.2,0.1,0.4,0.2,0.6c0,0.1,0.1,0.1,0.1,0.2c0.2,0.4,0.3,0.8,0.4,1.1c0,0,0,0.1,0,0.1c0,0,0,0-0.2,0
                                l-0.5,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0-0.1-0.1-0.1-0.2-0.2l0,0c-0.2-0.1-0.3-0.4-0.3-0.7
                                c0-0.1,0-0.1,0-0.2c-0.1-0.3-0.2-0.6-0.4-0.8l-0.2,0.2c0.2,0.2,0.3,0.5,0.3,0.7c0,0.1,0,0.1,0,0.2c0.1,0.3,0.2,0.6,0.4,0.8l0,0
                                c0,0,0.1,0,0.1,0c0,0,0,0,0,0c0,0,0,0.1,0.1,0.2c0.1,0.1,0.2,0.1,0.2,0.1c0,0,0,0,0,0l0.5,0c0.2,0,0.4-0.1,0.4-0.2
                                c0-0.1,0-0.2,0-0.3c-0.1-0.4-0.2-0.8-0.4-1.2c0-0.1-0.1-0.1-0.1-0.2c-0.1-0.2-0.2-0.3-0.2-0.5l0,0c0-0.1,0-0.1-0.1-0.2
                                c0,0-0.1-0.1-0.1-0.1C610.5,396.2,610.4,396.2,610.3,396.2L610.3,396.2z"/>
                        </g>
                    </g>
                    <g>
                        <path fill="#FFFFFF" stroke="#9B978F" stroke-width="0.5" stroke-miterlimit="10" d="M609.1,398.5c-0.2,0-0.4,0.2-0.6,0.2
                            c0,0-0.1,0-0.1,0c-0.1,0-0.2,0.1-0.2,0.2c0,0.1,0,0.2,0.1,0.3c0.1,0.1,0.2,0.2,0.2,0.3c0,0,0,0.1,0,0.1c0,0,0,0.1-0.1,0.1
                            c-0.1,0.1-0.3,0.1-0.4,0.2c0,0-0.1,0.1-0.1,0.1c0,0.1,0,0.2,0.1,0.2c0.1,0.1,0.2,0.2,0.3,0.3c0.2,0.2,0.5,0.4,0.7,0.6
                            c0.3,0.2,0.6,0.3,0.9,0.2c0-0.1-0.1-0.1-0.1-0.2c0.2,0,0.3,0,0.5,0c0-0.2,0-0.3-0.1-0.5c0-0.1-0.1-0.2-0.1-0.2
                            c0-0.1,0.1-0.2,0.2-0.1c-0.1-0.7-0.5-1.3-0.9-1.8c-0.1-0.1-0.2-0.2-0.3-0.2"/>
                        <g>
                            <path fill="#FFFFFF" d="M609.7,401.5c-0.3,0-0.6-0.1-0.8-0.3c-0.3-0.2-0.5-0.4-0.7-0.6l-0.3-0.3c-0.1-0.1-0.2-0.3-0.1-0.4
                                c0-0.1,0.1-0.2,0.2-0.2l0.4-0.2c0-0.1-0.1-0.1-0.1-0.2c0,0,0-0.1-0.1-0.1c-0.1-0.1-0.2-0.3-0.1-0.4c0-0.1,0.1-0.2,0.2-0.3
                                c0.1-0.1,0.2-0.1,0.3-0.1c0,0,0.1,0,0.1,0c0,0,0,0,0,0c0.1,0,0.1,0,0.2-0.1c0.1-0.1,0.2-0.1,0.3-0.1l-0.1-0.2
                                c0.1,0,0.3,0,0.5,0.2c0.5,0.5,0.8,1.2,0.9,1.9l0.1,0.3l-0.2-0.1c0,0,0,0.1,0,0.1l0,0c0.1,0.2,0.1,0.4,0.1,0.6l0,0.1l-0.4,0
                                l0.1,0.2l-0.2,0C609.8,401.5,609.8,401.5,609.7,401.5z M608,400C608,400.1,608,400.1,608,400l0.4,0.4c0.2,0.2,0.4,0.4,0.7,0.6
                                c0.1,0.1,0.3,0.2,0.5,0.2l-0.1-0.2l0.6,0c0-0.1,0-0.2-0.1-0.3l0,0c0-0.1-0.1-0.2-0.1-0.3c0-0.1,0.1-0.2,0.1-0.2
                                c-0.1-0.6-0.4-1.1-0.8-1.6c-0.1-0.1-0.1-0.1-0.2-0.1l0,0l0,0.2c-0.1,0-0.1,0-0.2,0.1c-0.1,0.1-0.3,0.1-0.4,0.1c0,0,0,0-0.1,0
                                c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0.1,0.2c0,0,0,0,0.1,0.1c0.1,0.1,0.1,0.2,0.2,0.3c0,0,0,0.1,0,0.2
                                c0,0.1-0.1,0.1-0.1,0.1L608,400C608,400,608,400,608,400z"/>
                            <path fill="#9B978F" d="M609.1,398.2c0,0-0.1,0-0.1,0l0.1,0.2c0,0,0,0,0,0c-0.1,0-0.2,0.1-0.3,0.1c-0.1,0-0.1,0.1-0.2,0.1
                                c0,0,0,0,0,0c0,0,0,0,0,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0c-0.1,0-0.1,0-0.2,0.1c-0.1,0.1-0.1,0.2-0.2,0.3c0,0.2,0.1,0.3,0.1,0.4
                                c0,0,0,0.1,0.1,0.1c0,0.1,0.1,0.1,0.1,0.2l-0.4,0.2c-0.1,0-0.2,0.1-0.2,0.2c0,0.1,0,0.2,0.1,0.4l0.3,0.3
                                c0.2,0.2,0.5,0.4,0.7,0.6c0.2,0.1,0.5,0.3,0.8,0.3c0,0,0.1,0,0.1,0l0.2,0l-0.1-0.2l0.4,0l0-0.1c0-0.2,0-0.4-0.1-0.6l0,0
                                c0,0,0-0.1,0-0.1l0.2,0.1l-0.1-0.3c-0.1-0.7-0.5-1.3-0.9-1.9C609.3,398.2,609.2,398.2,609.1,398.2L609.1,398.2z M609.1,398.7
                                l0-0.2l0,0c0,0,0,0,0,0c0,0,0.1,0,0.2,0.1c0.4,0.5,0.7,1,0.8,1.6c-0.1,0-0.1,0.1-0.1,0.2c0,0.1,0,0.2,0.1,0.3l0,0
                                c0,0.1,0.1,0.2,0.1,0.3l-0.6,0l0.1,0.2c-0.2,0-0.4-0.1-0.5-0.2c-0.3-0.2-0.5-0.4-0.7-0.6l-0.3-0.3c0,0-0.1-0.1-0.1-0.1
                                c0,0,0,0,0,0l0.4-0.2c0,0,0.1-0.1,0.1-0.1c0-0.1,0-0.2,0-0.2c0-0.1-0.1-0.2-0.2-0.3c0,0,0,0-0.1-0.1c-0.1-0.1-0.1-0.2-0.1-0.2
                                c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0.1,0,0.1,0c0.1,0,0.2-0.1,0.3-0.1
                                C608.9,398.7,609,398.7,609.1,398.7C609.1,398.7,609.1,398.7,609.1,398.7L609.1,398.7z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <g>
                                
                                    <line fill="#FFFFFF" stroke="#9B978F" stroke-width="0.5" stroke-miterlimit="10" x1="586.2" y1="394.9" x2="584.9" y2="389.9"/>
                            </g>
                            <g>
                                <path fill="#FFFFFF" stroke="#9B978F" stroke-width="0.5" stroke-miterlimit="10" d="M584.8,389.8c0,0,0.1,0,0.1,0
                                    c0,0,0.1,0.1,0.1,0.1l1.3,5c0,0.1,0,0.1-0.1,0.2 M586.1,394.8l-1.2-4.7"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M596.3,396l8.8-2.6c0.2,0.3,0.7,1.1,0.8,2.1c-0.8,0.5-5.2,3.7-9.6,5.5L596.3,396z"/>
                                    <path fill="#9B978F" d="M605.1,393.7c0.2,0.3,0.5,1,0.6,1.7c-1,0.7-5,3.5-9.1,5.3l0-4.5L605.1,393.7 M605.3,393.2l-9.2,2.7
                                        l0,5.6c5-2,10.1-5.8,10.1-5.8C606.1,394.3,605.3,393.2,605.3,393.2L605.3,393.2z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M600,399.3c2-1.5,3.6-3.2,4.6-4.2c0.1-0.1,0.1-0.1,0.2-0.2c0,0.3,0,0.6,0,0.8
                                        C604,396.4,602.3,397.9,600,399.3z"/>
                                    <path fill="#9B978F" d="M604.5,395.5C604.5,395.6,604.5,395.6,604.5,395.5c-0.1,0.2-0.3,0.3-0.5,0.5
                                        C604.2,395.9,604.4,395.7,604.5,395.5 M605.3,393C605.2,393,605.2,393,605.3,393l-9.2,2.7c-0.1,0-0.1,0.1-0.1,0.1l0,5.6
                                        c0,0,0,0,0,0c0,0,0,0.1,0.1,0.1c0,0,0.1,0,0.1,0c0,0,0,0,0.1,0c5-2,8.8-5.7,8.9-5.7c0-0.6,0-1.2,0.1-1.6
                                        c-0.8,0.7-4.5,5.2-8.9,7l0-5.3l9-2.6c0.1,0.1,0.1,0.1,0.1,0.1c0,0,0,0,0,0c0,0-0.1,0-0.1,0.5c0.1-0.5,0.2-0.8,0.2-0.8
                                        C605.3,393,605.3,393,605.3,393L605.3,393z M605.2,393.9c0,0.1,0,0.2-0.1,0.3c0,0,0.1,0,0.1-0.1
                                        C605.2,394,605.2,394,605.2,393.9L605.2,393.9z M605.1,395.8C605,395.8,605,395.8,605.1,395.8
                                        C605,395.8,605,395.8,605.1,395.8C605.1,395.8,605.1,395.8,605.1,395.8L605.1,395.8z"/>
                                </g>
                            </g>
                        </g>
                        <g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M594.3,404.8c-0.7,0-1.2,0-1.5-0.1l4.2-5l2.2-1l4-5.7c0.9,0.8,1.6,1.1,2,1.2c-0.1,0.7-0.7,3-2.9,6.7
                                        C600.2,404.3,596.4,404.8,594.3,404.8L594.3,404.8z"/>
                                    <path fill="#9B978F" d="M603.1,393.4c0.7,0.6,1.3,0.9,1.7,1c-0.2,0.9-0.9,3-2.8,6.4c-1.8,3.1-5.2,3.8-7.7,3.8
                                        c-0.4,0-0.8,0-1,0l3.9-4.5l2-0.9l0.1-0.1l0.1-0.1L603.1,393.4 M603,392.6l-4.1,5.9l-2.1,1l-4.5,5.3c0,0,0.8,0.2,2,0.2
                                        c2.3,0,6.1-0.6,8.1-4c2.7-4.6,2.9-7,2.9-7S604.4,393.9,603,392.6L603,392.6z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M592.1,404.9c0,0,0-0.1,0-0.1l4.5-5.3c0,0,0,0,0,0l2.1-1l4.1-5.9c0,0,0.1-0.1,0.1-0.1s0.1,0,0.1,0
                                        c1.3,1.3,2.2,1.3,2.3,1.3c0,0,0.1,0,0.1,0.1c0,0,0,0.1,0,0.1c0,0-0.1,0.6-0.5,1.8c-0.4,1.1-1.1,2.9-2.5,5.2
                                        c-0.7,1.2-1.7,2.2-2.9,2.9c-1,0.5-2.1,0.9-3.4,1.1c-2.2,0.3-4,0-4,0C592.2,405,592.1,405,592.1,404.9
                                        C592.1,404.9,592.1,404.9,592.1,404.9z M596.9,399.6l-4.4,5.1c0.6,0.1,2,0.2,3.7,0c1.2-0.2,2.4-0.5,3.3-1.1
                                        c1.2-0.7,2.1-1.6,2.8-2.7c2.3-3.9,2.8-6.2,2.9-6.8c-0.3-0.1-1.1-0.3-2.2-1.3l-4,5.8c0,0,0,0-0.1,0L596.9,399.6z"/>
                                    <path fill="#9B978F" d="M603,392.5C603,392.5,603,392.5,603,392.5c-0.1,0-0.1,0-0.1,0.1l-4.1,5.9l-2.1,1c0,0,0,0,0,0l-4.5,5.3
                                        c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.1c0,0,0.9,0.2,2.1,0.2c0.6,0,1.2,0,1.9-0.1c1.3-0.2,2.4-0.6,3.4-1.1
                                        c1.2-0.7,2.2-1.6,2.9-2.9c1.4-2.4,2.1-4.2,2.5-5.2c0.4-1.2,0.5-1.8,0.5-1.8c0,0,0-0.1,0-0.1c0,0-0.1,0-0.1-0.1
                                        c0,0-0.9-0.1-2.3-1.3C603.1,392.5,603.1,392.5,603,392.5L603,392.5z M594.3,404.9c-0.8,0-1.4-0.1-1.8-0.1l4.4-5.1l2.1-1
                                        c0,0,0,0,0.1,0l4-5.8c1,1,1.8,1.2,2.2,1.3c-0.1,0.6-0.6,2.9-2.9,6.8c-0.7,1.2-1.6,2.1-2.8,2.7c-1,0.5-2.1,0.9-3.3,1.1
                                        C595.5,404.8,594.9,404.9,594.3,404.9L594.3,404.9z"/>
                                </g>
                            </g>
                        </g>
                        <g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M585.3,385.6c1.9-1.8,7.5-3.3,10-3.5c0.1,0,0.1,0,0.2,0c2.3,0,8,2.8,8.8,3.2c0.2,0.9-0.4,1.7-0.6,2
                                        l-7.1-0.8l-4,1.9L585.3,385.6z"/>
                                    <path fill="#9B978F" d="M595.4,382.3c2.2,0,7.5,2.6,8.6,3.1c0.1,0.7-0.3,1.3-0.5,1.6l-6.8-0.7l-0.1,0l-0.1,0.1l-3.8,1.9
                                        l-6.8-2.7c2.1-1.7,7.2-3,9.5-3.2C595.3,382.3,595.4,382.3,595.4,382.3 M595.4,381.8c-0.1,0-0.1,0-0.2,0
                                        c-2.4,0.2-8.6,1.8-10.4,3.9l7.7,3l4-2l7.1,0.8c0,0,1.1-1.2,0.7-2.4C604.5,385.1,598,381.8,595.4,381.8L595.4,381.8z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M584.7,385.7c0,0,0-0.1,0-0.1c1.9-2.2,8.2-3.7,10.5-3.9c2.5-0.2,9,3.1,9.3,3.3c0,0,0.1,0.1,0.1,0.1
                                        c0.4,1.3-0.7,2.5-0.8,2.6c0,0-0.1,0-0.1,0l-7.1-0.8l-4,1.9c0,0-0.1,0-0.1,0l-7.7-3C584.8,385.8,584.7,385.8,584.7,385.7
                                        C584.7,385.7,584.7,385.7,584.7,385.7z M604.3,385.2c-0.7-0.3-6.8-3.4-9.1-3.2c-1.1,0.1-3.2,0.5-5.4,1.2
                                        c-2.3,0.7-3.9,1.6-4.7,2.4l7.5,2.9l4-1.9c0,0,0.1,0,0.1,0l7,0.8c0.1-0.1,0.3-0.3,0.4-0.7C604.4,386.2,604.5,385.7,604.3,385.2
                                        z"/>
                                    <path fill="#9B978F" d="M595.4,381.7c-0.1,0-0.1,0-0.2,0c-2.3,0.2-8.6,1.7-10.5,3.9c0,0,0,0.1,0,0.1c0,0,0,0,0,0
                                        c0,0,0,0.1,0.1,0.1l7.7,3c0,0,0,0,0.1,0c0,0,0,0,0.1,0l4-1.9l7.1,0.8c0,0,0,0,0,0c0,0,0.1,0,0.1,0c0-0.1,1.2-1.3,0.8-2.6
                                        c0,0,0-0.1-0.1-0.1C604.3,384.8,598.1,381.7,595.4,381.7L595.4,381.7z M592.6,388.6l-7.5-2.9c0.8-0.8,2.5-1.7,4.7-2.4
                                        c2.2-0.7,4.3-1.1,5.4-1.2c0.1,0,0.1,0,0.2,0c2.4,0,8.2,2.9,8.9,3.2c0.1,0.5,0,1-0.2,1.5c-0.2,0.3-0.4,0.6-0.4,0.7l-7-0.8
                                        c0,0,0,0,0,0c0,0,0,0-0.1,0L592.6,388.6L592.6,388.6z"/>
                                </g>
                            </g>
                        </g>
                        <g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M592.3,404.5c-1.1-1.3-8.1-9.8-7.2-18.6c0.1,0,0.2,0,0.3,0c1.3,0,4.4,0.1,5.9,1.4
                                        c1,0.8,5.1,5.6,5,12.3c0,0,0,0,0,0C596.4,399.6,595.6,402.2,592.3,404.5z"/>
                                    <path fill="#9B978F" d="M585.4,386.2c1,0,4.2,0.1,5.8,1.3c1,0.8,5,5.4,4.9,12c-0.1,0.4-1,2.6-3.8,4.7
                                        C590.9,402.5,584.6,394.4,585.4,386.2C585.3,386.2,585.4,386.2,585.4,386.2 M585.4,385.7c-0.3,0-0.5,0-0.5,0
                                        c-1.2,9.8,7.4,19.2,7.4,19.2c3.6-2.5,4.4-5.3,4.4-5.3c0.1-6.7-3.8-11.5-5.1-12.5C589.9,385.8,586.7,385.7,585.4,385.7
                                        L585.4,385.7z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M584.8,390.2c-0.2-1.6-0.3-3.1-0.1-4.5c0-0.1,0.1-0.1,0.1-0.1c0,0,1.2-0.1,2.6,0.1
                                        c1.9,0.2,3.3,0.7,4.2,1.4c0.6,0.5,1.9,1.9,3.1,4.2c1,1.8,2.1,4.8,2.1,8.4c0,0,0,0,0,0c0,0-0.2,0.7-0.9,1.7
                                        c-0.6,0.9-1.7,2.3-3.6,3.6c-0.1,0-0.1,0-0.2,0c0,0-2.2-2.4-4.2-6c-1.2-2.1-2-4.2-2.6-6.2C585.1,391.9,584.9,391.1,584.8,390.2
                                        z M585,385.8c-0.2,2.2,0,4.5,0.7,6.9c0.6,2,1.4,4,2.6,6.1c1.7,3.1,3.6,5.3,4,5.8c1.8-1.2,2.8-2.6,3.4-3.4
                                        c0.6-0.9,0.8-1.5,0.8-1.6c0.1-3.5-1.1-6.4-2-8.3c-0.5-1-1.8-3.1-3.1-4.1C589.6,385.8,585.7,385.8,585,385.8z"/>
                                    <path fill="#9B978F" d="M585.4,385.5c-0.3,0-0.5,0-0.5,0c-0.1,0-0.1,0.1-0.1,0.1c-0.2,1.4-0.1,3,0.1,4.5
                                        c0.1,0.9,0.3,1.7,0.6,2.6c0.6,2,1.4,4.1,2.6,6.2c2,3.5,4.1,5.9,4.2,6c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c1.9-1.3,3-2.7,3.6-3.6
                                        c0.7-1,0.8-1.7,0.9-1.7c0,0,0,0,0,0c0.1-3.6-1.1-6.6-2.1-8.4c-1.2-2.3-2.5-3.7-3.1-4.2c-0.9-0.7-2.3-1.2-4.2-1.4
                                        C586.6,385.5,585.9,385.5,585.4,385.5L585.4,385.5z M592.3,404.7c-0.4-0.5-2.3-2.7-4-5.8c-1.2-2.1-2-4.1-2.6-6.1
                                        c-0.7-2.4-0.9-4.8-0.7-6.9c0.1,0,0.2,0,0.4,0c1.2,0,4.4,0.1,6,1.4c1.2,1,2.5,3.1,3.1,4.1c0.9,1.8,2.1,4.7,2,8.3
                                        c0,0.1-0.2,0.8-0.8,1.6C595.1,402.1,594.1,403.4,592.3,404.7L592.3,404.7z"/>
                                </g>
                            </g>
                        </g>
                        <g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M598.9,393.3c-0.6-0.5-2.1-2-0.9-4.7c0.4,0.3,1.4,1.1,1.6,2.2C599.8,391.9,599.2,392.9,598.9,393.3z"
                                        />
                                    <path fill="#9B978F" d="M598.1,389c0.4,0.4,1.1,1,1.2,1.8c0.2,0.8-0.2,1.6-0.5,2.1C598.3,392.4,597.3,391.1,598.1,389
                                        M597.9,388.3c-1.8,3.5,1,5.4,1,5.4s1.2-1.4,0.9-2.9S597.9,388.3,597.9,388.3L597.9,388.3z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M597.2,391.1c-0.1-0.8,0-1.8,0.6-2.9c0,0,0.1-0.1,0.1-0.1c0,0,0.1,0,0.1,0c0.1,0,1.7,1,2,2.6
                                        c0.3,1.6-0.9,3-0.9,3c0,0.1-0.1,0.1-0.2,0c0,0-0.7-0.5-1.2-1.4C597.5,392,597.3,391.6,597.2,391.1z M598,388.5
                                        c-0.6,1.4-0.7,2.6-0.1,3.7c0.3,0.7,0.8,1.1,1,1.3c0.3-0.3,1-1.5,0.8-2.7C599.5,389.6,598.4,388.7,598,388.5z"/>
                                    <path fill="#9B978F" d="M597.9,388.1C597.9,388.1,597.9,388.1,597.9,388.1c-0.1,0-0.1,0-0.1,0.1c-0.6,1.1-0.7,2.1-0.6,2.9
                                        c0.1,0.5,0.2,0.9,0.4,1.2c0.5,0.9,1.2,1.4,1.2,1.4c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0.1-0.1,1.3-1.4,0.9-3
                                        C599.7,389.2,598.1,388.2,597.9,388.1C598,388.1,597.9,388.1,597.9,388.1L597.9,388.1z M598.9,393.5c-0.2-0.2-0.7-0.6-1-1.3
                                        c-0.6-1.1-0.6-2.4,0.1-3.7c0.4,0.3,1.5,1.1,1.7,2.3C599.9,392,599.2,393.1,598.9,393.5L598.9,393.5z"/>
                                </g>
                            </g>
                        </g>
                        <g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M593.8,396.9c-0.2,0-0.5,0-0.7-0.3c-0.3-0.5-0.7-0.5-1.2-0.5c-0.3,0-0.7,0-1-0.2
                                        c-0.5-0.3-0.5-0.8-0.6-1.3c0-0.2,0-0.4-0.1-0.7c-0.1-0.3-0.3-0.6-0.5-0.9c-0.4-0.6-0.8-1.1-0.5-1.8c0.3-0.5,0.5-0.6,0.7-0.7
                                        c0.3-0.1,0.6-0.3,0.6-0.9c0-0.9,0.5-1,0.9-1c0.1,0,0.3,0,0.5,0.1c0.1,0,0.2,0,0.3,0c0,0,0,0,0,0c0.5,0,0.7-0.3,0.9-0.6
                                        c0.2-0.3,0.5-0.6,1.1-0.7c0.4-0.1,0.7-0.1,0.9-0.1c0.4,0,0.5,0.1,0.5,0.1c0.6,0.1,2,0.6,2,1.3c0.1,0.9-0.2,1.2-0.2,1.2
                                        l-0.1,0.2l0.1,0.2c0.2,0.2,0.7,0.9,0.6,1.2c0,0.1-0.1,0.2-0.1,0.3c-0.2,0.5-0.4,1,0.2,1.6c0.3,0.3,0.7,0.8,0.5,1
                                        c-0.1,0.2-0.3,0.2-0.4,0.2l-0.3,0l0,0.3c0,0,0.1,0.9-1.2,1.4c-0.4,0.1-0.7,0.2-0.9,0.2c-0.2,0-0.3,0-0.4,0c-0.1,0-0.2,0-0.3,0
                                        c-0.2,0-0.4,0.1-0.6,0.3C594.5,396.7,594.1,396.9,593.8,396.9z"/>
                                    <path fill="#9B978F" d="M595.2,387.5c0.2,0,0.4,0,0.4,0l0,0l0.1,0c0.7,0.2,1.7,0.6,1.8,1c0.1,0.7-0.1,1-0.1,1c0,0,0,0,0,0
                                        l-0.3,0.3l0.3,0.3c0.3,0.3,0.6,0.8,0.5,0.9c0,0.1-0.1,0.2-0.1,0.3c-0.2,0.5-0.4,1.2,0.2,1.9c0.5,0.5,0.5,0.7,0.5,0.7
                                        c-0.1,0.1-0.2,0.1-0.2,0.1l-0.6-0.1l0,0.6c0,0.1,0,0.8-1,1.2c-0.3,0.1-0.6,0.2-0.8,0.2c-0.1,0-0.2,0-0.4,0c-0.1,0-0.2,0-0.3,0
                                        c-0.3,0-0.5,0.1-0.8,0.3c-0.2,0.2-0.5,0.3-0.7,0.3c-0.1,0-0.3,0-0.5-0.2c-0.3-0.6-0.9-0.6-1.4-0.6c-0.3,0-0.6,0-0.9-0.2
                                        c-0.4-0.3-0.4-0.6-0.5-1.1c0-0.2,0-0.5-0.1-0.7c-0.1-0.3-0.3-0.6-0.5-0.9c-0.5-0.6-0.7-1.1-0.5-1.6c0.2-0.4,0.4-0.5,0.6-0.5
                                        c0.4-0.1,0.7-0.3,0.8-1.2c0-0.8,0.4-0.8,0.6-0.8c0.1,0,0.3,0,0.4,0.1c0.1,0,0.2,0,0.4,0c0.6,0,0.9-0.4,1.1-0.7
                                        c0.2-0.3,0.4-0.5,0.9-0.6C594.7,387.5,595,387.5,595.2,387.5 M595.2,387c-0.2,0-0.5,0-1,0.1c-1.2,0.2-1.2,1.3-1.9,1.3
                                        c-0.1,0-0.1,0-0.2,0c-0.2-0.1-0.4-0.1-0.6-0.1c-0.7,0-1.1,0.4-1.1,1.3c-0.1,1.1-0.7,0.3-1.3,1.5c-0.6,1.2,0.8,2.1,0.9,2.9
                                        c0.2,0.7,0,1.5,0.8,2.1c0.8,0.6,1.7,0,2.1,0.6c0.2,0.3,0.5,0.5,0.9,0.5c0.4,0,0.8-0.2,1.1-0.4c0.2-0.2,0.3-0.2,0.5-0.2
                                        c0.2,0,0.4,0.1,0.7,0.1c0.3,0,0.6,0,1-0.2c1.4-0.6,1.3-1.7,1.3-1.7s0,0,0,0c0.1,0,0.3,0,0.6-0.3c0.3-0.3,0-0.8-0.5-1.3
                                        c-0.6-0.6-0.2-1.1,0-1.7c0.2-0.6-0.6-1.4-0.6-1.4s0.3-0.4,0.2-1.4c-0.1-1-2.1-1.5-2.1-1.5S595.7,387,595.2,387L595.2,387z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M588.8,391.9c0-0.3,0-0.6,0.2-0.9c0.3-0.6,0.7-0.8,0.9-0.9c0.2-0.1,0.3-0.1,0.4-0.6
                                        c0-0.6,0.2-1,0.5-1.2c0.3-0.2,0.8-0.3,1.3-0.1c0.4,0.1,0.5-0.1,0.8-0.4c0.3-0.3,0.6-0.8,1.3-0.9c1.2-0.2,1.6,0,1.7,0
                                        c0.1,0,0.6,0.1,1,0.4c0.7,0.3,1.1,0.8,1.2,1.2c0.1,0.8-0.1,1.2-0.2,1.4c0.2,0.2,0.7,0.9,0.6,1.5c0,0.1-0.1,0.2-0.1,0.3
                                        c-0.2,0.5-0.3,0.8,0.1,1.2c0.4,0.4,0.9,1.1,0.5,1.5c-0.2,0.2-0.4,0.3-0.6,0.3c0,0.3-0.2,1.2-1.4,1.7c-0.8,0.3-1.2,0.2-1.5,0.2
                                        c-0.3,0-0.4-0.1-0.6,0.1c-0.4,0.3-0.9,0.5-1.4,0.5c-0.4,0-0.6-0.2-0.8-0.5c-0.2-0.3-0.4-0.3-0.8-0.3c-0.4,0-0.8,0-1.2-0.3
                                        c-0.6-0.4-0.7-1-0.7-1.6c0-0.2,0-0.4-0.1-0.6c-0.1-0.2-0.2-0.5-0.4-0.7C589.2,392.8,588.9,392.4,588.8,391.9z M595.8,387.2
                                        c0,0-0.4-0.2-1.5,0c-0.6,0.1-0.9,0.4-1.1,0.8c-0.2,0.3-0.5,0.7-1.1,0.5c-0.5-0.1-0.8-0.1-1.1,0.1c-0.2,0.2-0.4,0.5-0.4,1
                                        c0,0.6-0.2,0.7-0.6,0.8c-0.2,0.1-0.5,0.2-0.8,0.7c-0.4,0.7,0.1,1.4,0.5,1.9c0.2,0.3,0.4,0.6,0.5,0.8c0.1,0.2,0.1,0.4,0.1,0.6
                                        c0,0.5,0.1,1,0.6,1.4c0.3,0.2,0.7,0.3,1.1,0.3c0.4,0,0.8,0,1.1,0.4c0.2,0.3,0.4,0.4,0.6,0.4c0.4,0.1,0.8-0.1,1.1-0.4
                                        c0.3-0.3,0.6-0.3,0.8-0.2c0.3,0,0.7,0.1,1.4-0.2c1.3-0.5,1.2-1.5,1.2-1.5c0,0,0-0.1,0-0.1c0,0,0.1,0,0.1,0c0,0,0.3,0,0.5-0.2
                                        c0.3-0.3-0.3-0.9-0.5-1.1c-0.5-0.5-0.3-1-0.2-1.5c0-0.1,0.1-0.2,0.1-0.3c0.1-0.4-0.4-1.1-0.6-1.3c-0.1-0.1-0.1-0.1,0-0.2
                                        c0,0,0.3-0.4,0.2-1.3C597.8,387.9,596.4,387.4,595.8,387.2C595.8,387.3,595.8,387.3,595.8,387.2z M595.8,387.2L595.8,387.2
                                        L595.8,387.2z M595.9,387.1L595.9,387.1L595.9,387.1z"/>
                                    <path fill="#9B978F" d="M595.2,386.9c-0.2,0-0.6,0-1,0.1c-0.7,0.1-1.1,0.5-1.3,0.9c-0.2,0.3-0.3,0.4-0.6,0.4
                                        c-0.1,0-0.1,0-0.2,0c-0.2-0.1-0.4-0.1-0.6-0.1c-0.3,0-0.5,0.1-0.7,0.2c-0.3,0.2-0.5,0.6-0.5,1.2c0,0.5-0.1,0.5-0.4,0.6
                                        c-0.3,0.1-0.6,0.2-0.9,0.9c-0.2,0.3-0.2,0.6-0.2,0.9c0.1,0.5,0.4,0.9,0.7,1.3c0.2,0.3,0.4,0.5,0.4,0.7c0,0.2,0.1,0.4,0.1,0.6
                                        c0,0.6,0.1,1.1,0.7,1.6c0.4,0.3,0.9,0.3,1.2,0.3c0.4,0,0.7,0,0.8,0.3c0.2,0.3,0.5,0.5,0.8,0.5c0.1,0,0.1,0,0.2,0
                                        c0.4,0,0.9-0.2,1.2-0.5c0.1-0.1,0.2-0.2,0.4-0.2c0.1,0,0.1,0,0.2,0c0.1,0,0.3,0,0.5,0c0.3,0,0.6-0.1,1.1-0.2
                                        c1.2-0.5,1.4-1.3,1.4-1.7c0.1,0,0.4-0.1,0.6-0.3c0.4-0.5-0.1-1.1-0.5-1.5c-0.4-0.4-0.3-0.8-0.1-1.2c0-0.1,0.1-0.2,0.1-0.3
                                        c0.2-0.5-0.4-1.2-0.6-1.5c0.1-0.2,0.3-0.6,0.2-1.4c-0.1-0.5-0.5-0.9-1.2-1.2c-0.5-0.2-0.9-0.3-1-0.4
                                        C595.8,386.9,595.6,386.9,595.2,386.9L595.2,386.9z M595.9,387.1L595.9,387.1L595.9,387.1L595.9,387.1z M592.3,388.5
                                        c0.4,0,0.6-0.3,0.8-0.6c0.2-0.3,0.5-0.7,1.1-0.8c0.4-0.1,0.7-0.1,0.9-0.1c0.4,0,0.6,0.1,0.6,0.1c0,0,0,0,0.1,0
                                        c0.5,0.1,2,0.6,2,1.3c0.1,0.9-0.2,1.3-0.2,1.3c0,0.1,0,0.1,0,0.2c0.2,0.2,0.7,0.9,0.6,1.3c0,0.1-0.1,0.2-0.1,0.3
                                        c-0.2,0.5-0.4,1,0.2,1.5c0.2,0.2,0.8,0.8,0.5,1.1c-0.2,0.2-0.4,0.2-0.4,0.2c0,0,0,0,0,0c0,0,0,0,0,0c0,0-0.1,0-0.1,0
                                        c0,0,0,0.1,0,0.1c0,0,0.1,1-1.2,1.5c-0.4,0.2-0.7,0.2-1,0.2c-0.2,0-0.3,0-0.4,0c-0.1,0-0.2,0-0.3,0c-0.2,0-0.3,0.1-0.6,0.2
                                        c-0.3,0.3-0.6,0.4-1,0.4c-0.1,0-0.1,0-0.2,0c-0.2,0-0.4-0.1-0.6-0.4c-0.2-0.4-0.7-0.4-1.1-0.4c-0.4,0-0.7,0-1.1-0.3
                                        c-0.5-0.4-0.6-0.9-0.6-1.4c0-0.2,0-0.4-0.1-0.6c-0.1-0.3-0.3-0.5-0.5-0.8c-0.4-0.6-0.9-1.2-0.5-1.9c0.3-0.5,0.5-0.6,0.8-0.7
                                        c0.3-0.1,0.5-0.2,0.6-0.8c0-0.5,0.2-0.8,0.4-1c0.1-0.1,0.3-0.2,0.6-0.2c0.2,0,0.3,0,0.5,0.1
                                        C592.1,388.5,592.2,388.5,592.3,388.5L592.3,388.5z"/>
                                </g>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M592.7,389.1C592.7,389.1,592.7,389.1,592.7,389.1c0-0.1,0.1-0.2,0.2-0.2c0.3,0.1,0.5,0.1,0.6,0
                                    c0.2-0.1,0.2-0.3,0.2-0.7c0.1-0.6,0.7-0.7,1-0.7c0.1,0,0.1,0.1,0.1,0.2c0,0.1-0.1,0.1-0.2,0.1c0,0-0.7-0.1-0.7,0.4
                                    c0,0.4-0.1,0.7-0.4,0.9c-0.2,0.1-0.5,0.2-0.9,0C592.7,389.2,592.7,389.2,592.7,389.1z"/>
                                <path fill="#9B978F" d="M594.7,387.6c-0.4,0-0.9,0.1-0.9,0.7c0,0.4-0.1,0.6-0.2,0.7c-0.1,0-0.1,0.1-0.3,0.1
                                    c-0.1,0-0.2,0-0.4-0.1c0,0,0,0,0,0c-0.1,0-0.1,0-0.1,0.1c0,0,0,0,0,0.1c0,0.1,0,0.1,0.1,0.1c0.2,0,0.3,0.1,0.5,0.1
                                    c0.2,0,0.3,0,0.4-0.1c0.3-0.2,0.3-0.5,0.4-0.9c0-0.4,0.5-0.4,0.7-0.4c0,0,0.1,0,0.1,0c0,0,0,0,0,0c0.1,0,0.1-0.1,0.1-0.1
                                    c0-0.1-0.1-0.2-0.1-0.2C594.8,387.6,594.7,387.6,594.7,387.6L594.7,387.6z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M593.3,389.7C593.3,389.7,593.3,389.7,593.3,389.7c0-0.1,0.1-0.2,0.2-0.2c0.2,0.1,0.4,0,0.5,0
                                    c0.3-0.2,0.4-0.6,0.4-0.6c0-0.1,0.1-0.1,0.2-0.1s0.1,0.1,0.1,0.2c0,0-0.1,0.6-0.5,0.8c-0.2,0.1-0.5,0.2-0.7,0.1
                                    C593.3,389.8,593.3,389.8,593.3,389.7z"/>
                                <path fill="#9B978F" d="M594.5,388.8c-0.1,0-0.1,0-0.1,0.1c0,0-0.1,0.5-0.4,0.6c-0.1,0-0.2,0.1-0.3,0.1c-0.1,0-0.1,0-0.2,0
                                    c0,0,0,0,0,0c-0.1,0-0.1,0-0.1,0.1c0,0,0,0,0,0.1c0,0.1,0,0.1,0.1,0.1c0.1,0,0.2,0,0.3,0c0.2,0,0.3,0,0.4-0.1
                                    c0.4-0.2,0.5-0.8,0.5-0.8C594.6,388.9,594.6,388.8,594.5,388.8C594.5,388.8,594.5,388.8,594.5,388.8L594.5,388.8z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M597.3,391.2c-0.1-0.7,0.4-1.3,0.4-1.3c0.1-0.1,0.1-0.1,0.2,0c0.1,0.1,0.1,0.1,0,0.2
                                    c0,0-0.5,0.6-0.3,1.3c0,0.1,0,0.2-0.1,0.2s-0.2,0-0.2-0.1C597.3,391.3,597.3,391.3,597.3,391.2z"/>
                                <path fill="#9B978F" d="M597.8,389.8c0,0-0.1,0-0.1,0.1c0,0-0.5,0.6-0.4,1.3c0,0.1,0,0.1,0,0.2c0,0.1,0.1,0.1,0.1,0.1
                                    c0,0,0,0,0,0c0.1,0,0.1-0.1,0.1-0.2c-0.2-0.6,0.3-1.3,0.3-1.3C598,390,598,389.9,597.8,389.8
                                    C597.9,389.8,597.8,389.8,597.8,389.8L597.8,389.8z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M596.2,391.4c0-0.1,0-0.3,0-0.4c0.2-0.5,0.2-1.1,0.2-1.1c0-0.1,0.1-0.1,0.2-0.1c0.1,0,0.1,0.1,0.1,0.2
                                    c0,0,0,0.6-0.3,1.2c-0.2,0.4,0.3,1,0.5,1.2c0.1,0.1,0.1,0.2,0,0.2c-0.1,0.1-0.2,0.1-0.2,0C596.7,392.5,596.2,391.9,596.2,391.4
                                    z"/>
                                <path fill="#9B978F" d="M596.6,389.8c-0.1,0-0.1,0.1-0.1,0.1c0,0,0,0.6-0.2,1.1c-0.1,0.1-0.1,0.3,0,0.4c0.1,0.5,0.6,1,0.6,1.1
                                    c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0.1-0.1,0.1-0.1,0-0.2c-0.2-0.2-0.7-0.8-0.5-1.2c0.2-0.6,0.3-1.2,0.3-1.2
                                    C596.7,389.8,596.7,389.8,596.6,389.8C596.6,389.8,596.6,389.8,596.6,389.8L596.6,389.8z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M595.3,391.9c0-0.1,0-0.1,0.1-0.2c0.1,0,0.2,0,0.2,0.1c0,0,0.3,0.8,0.9,0.9c0.1,0,0.1,0.1,0.1,0.2
                                    c0,0.1-0.1,0.1-0.2,0.1C595.7,392.9,595.3,391.9,595.3,391.9C595.3,391.9,595.3,391.9,595.3,391.9z"/>
                                <path fill="#9B978F" d="M595.5,391.7C595.4,391.7,595.4,391.7,595.5,391.7c-0.1,0-0.2,0.1-0.1,0.2c0,0,0,0,0,0
                                    c0,0,0.4,1,1.1,1.1c0,0,0,0,0,0c0.1,0,0.1,0,0.1-0.1c0-0.1,0-0.2-0.1-0.2c-0.5-0.1-0.9-0.9-0.9-0.9
                                    C595.6,391.7,595.5,391.7,595.5,391.7L595.5,391.7z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M594.5,395.6c0,0,0-0.1,0-0.1c0.6-0.8,1.1-0.6,1.5-0.5c0.2,0.1,0.4,0.1,0.5,0.1c0.2,0,0.4-0.1,0.4-0.3
                                    c0.1-0.1,0-0.2,0-0.3c0-0.1,0-0.2,0.1-0.2c0.1,0,0.2,0,0.2,0.1c0,0,0,0.3-0.2,0.6c-0.1,0.2-0.3,0.3-0.6,0.3
                                    c-0.3,0-0.5,0-0.7-0.1c-0.4-0.1-0.7-0.2-1.1,0.4C594.7,395.8,594.6,395.8,594.5,395.6C594.5,395.7,594.5,395.7,594.5,395.6z"/>
                                <path fill="#9B978F" d="M597.1,394.5C597.1,394.5,597.1,394.5,597.1,394.5c-0.1,0-0.2,0.1-0.1,0.2c0,0,0,0.1,0,0.3
                                    c-0.1,0.2-0.2,0.2-0.4,0.3c0,0-0.1,0-0.1,0c-0.2,0-0.3-0.1-0.5-0.1c-0.2-0.1-0.3-0.1-0.5-0.1c-0.3,0-0.6,0.1-0.9,0.6
                                    c0,0,0,0.1,0,0.1c0,0,0,0.1,0.1,0.1c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1-0.1c0.3-0.4,0.5-0.5,0.7-0.5c0.1,0,0.3,0,0.4,0.1
                                    c0.2,0.1,0.4,0.1,0.6,0.1c0,0,0.1,0,0.1,0c0.2,0,0.4-0.1,0.6-0.3c0.2-0.2,0.2-0.5,0.2-0.6C597.2,394.5,597.2,394.5,597.1,394.5
                                    L597.1,394.5z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M594.1,395.3C594.1,395.3,594.1,395.3,594.1,395.3c0.4-0.9,1.4-1,1.5-1c0.1,0,0.1,0.1,0.2,0.1
                                    c0,0.1-0.1,0.1-0.1,0.2c0,0-0.9,0.1-1.2,0.7c0,0.1-0.1,0.1-0.2,0.1C594.2,395.4,594.1,395.4,594.1,395.3z"/>
                                <path fill="#9B978F" d="M595.6,394.3C595.6,394.3,595.6,394.3,595.6,394.3c-0.1,0-1.1,0.1-1.4,0.9c0,0,0,0.1,0,0.1
                                    c0,0,0,0.1,0.1,0.1c0,0,0,0,0.1,0c0.1,0,0.1,0,0.1-0.1c0.3-0.7,1.2-0.7,1.2-0.7c0.1,0,0.1-0.1,0.1-0.2
                                    C595.7,394.4,595.7,394.3,595.6,394.3L595.6,394.3z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M590.5,392.6C590.5,392.6,590.5,392.6,590.5,392.6L590.5,392.6z"/>
                                <path fill="#9B978F" d="M590.4,390.9c0,0-0.1,0-0.1,0.1c0,0-0.4,0.4-0.3,0.9c0,0,0,0,0,0.1c0,0.3,0.2,0.5,0.5,0.7
                                    c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1-0.1c0-0.1,0-0.2,0-0.2c-0.2-0.2-0.3-0.4-0.4-0.6c0-0.4,0.2-0.7,0.2-0.7
                                    C590.6,391.1,590.6,391,590.4,390.9C590.5,390.9,590.5,390.9,590.4,390.9L590.4,390.9z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M590.9,394.3c0-0.2,0-0.4,0-0.4c0-0.1,0.1-0.1,0.2-0.1c0.1,0,0.1,0.1,0.1,0.2c0,0-0.1,0.8,0.4,1
                                    c0.1,0,0.1,0.1,0.1,0.2c0,0.1-0.1,0.1-0.2,0.1C591.1,395,590.9,394.6,590.9,394.3z"/>
                                <path fill="#9B978F" d="M591,393.8c-0.1,0-0.1,0.1-0.1,0.1c0,0,0,0.2,0,0.4c0,0.3,0.2,0.7,0.6,0.9c0,0,0,0,0.1,0
                                    c0.1,0,0.1,0,0.1-0.1c0-0.1,0-0.2-0.1-0.2c-0.5-0.2-0.4-1-0.4-1C591.2,393.8,591.1,393.8,591,393.8
                                    C591,393.8,591,393.8,591,393.8L591,393.8z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M598.8,398.6c0-0.1,0-0.1,0.1-0.1c0.1,0,0.2,0,0.2,0c0,0,0.4,0.6,1.2,0.9c0.1,0,0.1,0.1,0.1,0.2
                                    c0,0.1-0.1,0.1-0.2,0.1C599.3,399.3,598.8,398.7,598.8,398.6C598.8,398.6,598.8,398.6,598.8,398.6z"/>
                                <path fill="#9B978F" d="M598.9,398.4C598.9,398.4,598.9,398.4,598.9,398.4c-0.1,0.1-0.2,0.1-0.1,0.2c0,0,0,0,0,0.1
                                    c0,0,0.5,0.7,1.4,1c0,0,0,0,0.1,0c0.1,0,0.1,0,0.1-0.1c0-0.1,0-0.2-0.1-0.2c-0.8-0.3-1.2-0.9-1.2-0.9
                                    C599,398.4,599,398.4,598.9,398.4L598.9,398.4z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M596.2,385.2c0-0.1,0-0.1,0.1-0.2c0.1,0,0.2,0,0.2,0.1c0,0,0.5,0.9,0.3,1.6c0,0.1-0.1,0.1-0.2,0.1
                                    c-0.1,0-0.1-0.1-0.1-0.2C596.6,386.1,596.2,385.2,596.2,385.2C596.2,385.2,596.2,385.2,596.2,385.2z"/>
                                <path fill="#9B978F" d="M596.4,385C596.3,385,596.3,385,596.4,385c-0.1,0-0.2,0.1-0.1,0.2c0,0,0,0,0,0c0,0,0.4,0.8,0.3,1.4
                                    c0,0.1,0,0.2,0.1,0.2c0,0,0,0,0,0c0.1,0,0.1,0,0.1-0.1c0.2-0.7-0.3-1.6-0.3-1.6C596.5,385.1,596.4,385,596.4,385L596.4,385z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M588.8,384.6c0-0.1,0-0.1,0.1-0.1c0.7-0.5,2.3-1.1,2.4-1.1c0.1,0,0.2,0,0.2,0.1c0,0.1,0,0.2-0.1,0.2
                                    c0,0-1.6,0.5-2.3,1.1C589,384.7,588.9,384.7,588.8,384.6C588.8,384.6,588.8,384.6,588.8,384.6z"/>
                                <path fill="#9B978F" d="M591.3,383.3C591.3,383.3,591.3,383.3,591.3,383.3c-0.1,0-1.7,0.6-2.4,1.1c0,0-0.1,0.1-0.1,0.1
                                    c0,0,0,0,0,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0c0.7-0.5,2.3-1.1,2.3-1.1c0.1,0,0.1-0.1,0.1-0.2
                                    C591.4,383.3,591.4,383.3,591.3,383.3L591.3,383.3z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M589.3,385.3c0,0,0-0.1,0-0.1c0.6-0.5,1.3-0.7,1.3-0.7c0.1,0,0.2,0,0.2,0.1c0,0.1,0,0.2-0.1,0.2
                                    c0,0-0.7,0.2-1.2,0.7C589.5,385.4,589.4,385.4,589.3,385.3C589.3,385.3,589.3,385.3,589.3,385.3z"/>
                                <path fill="#9B978F" d="M590.7,384.4C590.7,384.4,590.7,384.4,590.7,384.4c-0.1,0-0.8,0.2-1.4,0.7c0,0-0.1,0.1,0,0.1
                                    c0,0,0,0.1,0,0.1c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0.5-0.5,1.2-0.7,1.2-0.7c0.1,0,0.1-0.1,0.1-0.2
                                    C590.8,384.4,590.8,384.4,590.7,384.4L590.7,384.4z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M594.6,404.3C594.6,404.3,594.6,404.3,594.6,404.3c0-0.1,0.1-0.2,0.2-0.2c1,0.1,1.7-0.2,1.7-0.2
                                    c0.1,0,0.2,0,0.2,0.1c0,0.1,0,0.2-0.1,0.2c0,0-0.8,0.3-1.9,0.2C594.7,404.4,594.7,404.4,594.6,404.3z"/>
                                <path fill="#9B978F" d="M596.6,404C596.6,404,596.6,404,596.6,404c-0.1,0-0.6,0.2-1.4,0.2c-0.1,0-0.3,0-0.4,0c0,0,0,0,0,0
                                    c-0.1,0-0.1,0.1-0.1,0.1c0,0,0,0,0,0c0,0.1,0.1,0.1,0.1,0.1c0.1,0,0.3,0,0.4,0c0.8,0,1.4-0.2,1.4-0.2c0.1,0,0.1-0.1,0.1-0.2
                                    C596.7,404,596.6,404,596.6,404L596.6,404z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M596.2,403.5C596.2,403.5,596.2,403.5,596.2,403.5c0-0.1,0-0.2,0.1-0.2c0.9-0.1,2-0.6,2-0.6
                                    c0.1,0,0.2,0,0.2,0.1c0,0.1,0,0.2-0.1,0.2c0,0-1.2,0.5-2.1,0.6C596.3,403.6,596.2,403.6,596.2,403.5z"/>
                                <path fill="#9B978F" d="M598.5,402.8C598.4,402.8,598.4,402.8,598.5,402.8c-0.1,0-1.2,0.5-2.1,0.6c-0.1,0-0.1,0.1-0.1,0.2
                                    c0,0,0,0,0,0c0,0.1,0.1,0.1,0.1,0.1c0,0,0,0,0,0c1-0.1,2.1-0.6,2.1-0.6c0.1,0,0.1-0.1,0.1-0.2
                                    C598.6,402.8,598.5,402.8,598.5,402.8L598.5,402.8z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M604.4,387.7c-0.1-0.1-0.2-0.2-0.3-0.4l0.5-1.8c0.2,0.1,0.5,0.1,1,0.1c0.4,0,0.9-0.1,1.4-0.2
                                        c0.4-0.1,0.7-0.1,1-0.1c0.6,0,0.9,0.2,0.9,0.2C608.5,386,605.7,387.2,604.4,387.7z"/>
                                    <path fill="#9B978F" d="M608,385.6c0.1,0,0.3,0,0.4,0c-0.8,0.4-2.6,1.2-3.8,1.7c0,0-0.1-0.1-0.1-0.1l0.4-1.4
                                        c0.2,0,0.5,0.1,0.8,0.1c0.4,0,0.9-0.1,1.4-0.2C607.4,385.7,607.7,385.6,608,385.6 M608,385.1c-0.3,0-0.7,0-1.1,0.1
                                        c-0.5,0.1-1,0.2-1.3,0.2c-0.8,0-1.1-0.2-1.1-0.2l-0.6,2.1c0.2,0.4,0.5,0.6,0.5,0.6s4.1-1.7,4.6-2.1
                                        C609.4,385.6,609,385.1,608,385.1L608,385.1z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M603.7,387.4C603.7,387.4,603.7,387.3,603.7,387.4l0.6-2.2c0,0,0-0.1,0.1-0.1c0,0,0.1,0,0.1,0
                                        c0,0,0.7,0.4,2.3,0c1.3-0.3,2.2-0.1,2.4,0.3c0.1,0.2,0,0.4-0.2,0.5c-0.5,0.4-4.5,2.1-4.6,2.1c0,0-0.1,0-0.1,0
                                        C604.3,388.1,604,387.9,603.7,387.4C603.7,387.4,603.7,387.4,603.7,387.4z M604.6,385.4l-0.6,1.9c0.1,0.3,0.3,0.4,0.4,0.5
                                        c1.4-0.6,4.1-1.8,4.5-2.1c0.1-0.1,0.1-0.1,0.1-0.2c-0.1-0.2-0.8-0.5-2-0.2C605.7,385.7,604.9,385.6,604.6,385.4z"/>
                                    <path fill="#9B978F" d="M608,385c-0.3,0-0.7,0-1.1,0.1c-0.5,0.1-0.9,0.2-1.3,0.2c-0.7,0-1.1-0.2-1.1-0.2c0,0-0.1,0-0.1,0
                                        c0,0,0,0-0.1,0c0,0-0.1,0.1-0.1,0.1l-0.6,2.1c0,0,0,0,0,0.1c0,0,0,0,0,0c0.2,0.5,0.6,0.7,0.6,0.7c0,0,0,0,0.1,0c0,0,0,0,0.1,0
                                        c0.2-0.1,4.1-1.7,4.6-2.1c0.2-0.1,0.3-0.3,0.2-0.5C609.1,385.2,608.7,385,608,385L608,385z M605.6,385.6c0.4,0,0.8,0,1.3-0.2
                                        c0.4-0.1,0.7-0.1,1-0.1c0.6,0,1,0.2,1,0.3c0,0,0,0.1-0.1,0.2c-0.4,0.3-3.1,1.5-4.5,2.1c-0.1-0.1-0.3-0.2-0.4-0.5l0.6-1.9
                                        C604.8,385.5,605.1,385.6,605.6,385.6L605.6,385.6z"/>
                                </g>
                            </g>
                        </g>
                        <g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M606.9,390.8c-0.6,0-1.2-0.4-1.4-0.9l-0.1-0.3c-0.2-0.4-0.2-0.8,0-1.2c0.1-0.4,0.4-0.7,0.8-0.9
                                        l3.2-1.5c0.2-0.1,0.4-0.1,0.7-0.1c0.6,0,1.2,0.4,1.4,0.9l0.1,0.3c0.4,0.8,0,1.7-0.8,2.1l-3.2,1.5
                                        C607.3,390.7,607.1,390.8,606.9,390.8z"/>
                                    <path fill="#9B978F" d="M610,386.2c0.5,0,1,0.3,1.2,0.8l0.1,0.3c0.3,0.7,0,1.4-0.6,1.7l-3.2,1.5c-0.2,0.1-0.4,0.1-0.5,0.1
                                        c-0.5,0-1-0.3-1.2-0.8l-0.1-0.3c-0.3-0.7,0-1.4,0.6-1.7l3.2-1.5C609.6,386.2,609.8,386.2,610,386.2 M610,385.7
                                        c-0.3,0-0.5,0.1-0.8,0.2l-3.2,1.5c-0.9,0.4-1.3,1.5-0.9,2.4l0.1,0.3c0.3,0.7,1,1.1,1.6,1.1c0.3,0,0.5-0.1,0.8-0.2l3.2-1.5
                                        c0.9-0.4,1.3-1.5,0.9-2.4l-0.1-0.3C611.3,386,610.7,385.7,610,385.7L610,385.7z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M604.4,388.5c0-0.1,0-0.3,0-0.4c0.1-0.2,0.2-0.4,0.4-0.5l5.3-2.4c0.2-0.1,0.4-0.1,0.6,0
                                        c0.2,0.1,0.4,0.2,0.5,0.4l1.1,2.3c0.2,0.4,0,0.9-0.4,1.1l-5.3,2.4c-0.4,0.2-0.9,0-1.1-0.4l-1.1-2.3
                                        C604.5,388.6,604.5,388.6,604.4,388.5z M612.1,388.2c0,0,0-0.1,0-0.1l-1.1-2.3c-0.1-0.1-0.2-0.2-0.3-0.3c-0.1,0-0.3,0-0.4,0
                                        l-5.3,2.4c-0.1,0.1-0.2,0.2-0.3,0.3c0,0.1,0,0.3,0,0.4l1.1,2.3l-0.1,0.1l0.1-0.1c0.1,0.3,0.4,0.4,0.7,0.3l5.3-2.4
                                        C612,388.7,612.2,388.4,612.1,388.2z"/>
                                    <path fill="#9B978F" d="M610.5,385.1c-0.1,0-0.2,0-0.3,0.1l-5.3,2.4c-0.2,0.1-0.3,0.3-0.4,0.5c0,0.1-0.1,0.3,0,0.4
                                        c0,0.1,0,0.1,0.1,0.2l1.1,2.3c0.1,0.3,0.4,0.5,0.7,0.5c0.1,0,0.2,0,0.3-0.1l5.3-2.4c0.4-0.2,0.6-0.7,0.4-1.1l-1.1-2.3
                                        c-0.1-0.2-0.3-0.3-0.5-0.4C610.7,385.2,610.6,385.1,610.5,385.1L610.5,385.1z M605.9,390.9l-1.1-2.3c-0.1-0.1-0.1-0.3,0-0.4
                                        c0-0.1,0.1-0.2,0.3-0.3l5.3-2.4c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0.1,0.3,0.3l1.1,2.3c0,0,0,0.1,0,0.1
                                        c0,0.2-0.1,0.4-0.3,0.5l-5.3,2.4c-0.1,0-0.1,0-0.2,0C606.1,391.2,605.9,391.1,605.9,390.9l-0.1,0.1L605.9,390.9L605.9,390.9z"
                                        />
                                </g>
                            </g>
                        </g>
                        <g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M605.3,393.8c-0.9,0-1.6-0.8-1.8-1c0-0.9,0.2-2.2,0.5-2.4c0.4-0.2,0.6-0.5,0.7-0.6
                                        c0.1-0.1,0.2-0.2,0.2-0.2c0,0,0,0.2,0,0.4c0,0.1-0.1,0.2-0.2,0.3c-0.1,0.3-0.3,0.5-0.1,0.7c0,0.1,0.1,0.2,0.3,0.2
                                        c0.1,0,0.2,0,0.3-0.1c0.7-0.2,1.1-0.7,1.5-1.3c0.1-0.2,0.2-0.4,0.4-0.5c0.2-0.3,0.4-0.3,0.4-0.3c0.1,0.2-0.5,1.2-1.4,2.1
                                        l-0.4,0.5l0.6,0c1.7-0.1,2.3-0.8,2.6-1.2c0.1-0.1,0.2-0.2,0.2-0.2c0.1,0,0.1,0,0.1,0.1c0,0.1-0.1,0.4-0.3,0.6l-0.1,0.1l0,0.1
                                        c0.2,0.6-0.4,1-0.5,1l-0.1,0.1l0,0.1C608.5,392.8,606.4,393.5,605.3,393.8z"/>
                                    <path fill="#9B978F" d="M604.4,390.4c-0.1,0.2-0.1,0.4,0,0.7c0.1,0.1,0.2,0.3,0.6,0.3c0.1,0,0.3,0,0.4-0.1
                                        c0.1,0,0.3-0.1,0.4-0.2l-0.6,0.7l1.3-0.1c1.2-0.1,1.9-0.5,2.3-0.8l0,0.1c0.1,0.4-0.3,0.7-0.3,0.7l-0.3,0.1l0,0.3
                                        c0,0.5-1.5,1.1-2.9,1.4c-0.7,0-1.3-0.6-1.5-0.8c0-1,0.2-2,0.4-2.1C604.3,390.5,604.4,390.4,604.4,390.4 M607.6,388.6
                                        c-0.1,0-0.3,0.1-0.6,0.4c-0.6,0.7-0.9,1.5-1.7,1.7c-0.1,0-0.2,0.1-0.3,0.1c-0.4,0,0.1-0.6,0.2-0.9c0.1-0.4,0-0.7-0.2-0.7
                                        c0,0-0.1,0-0.1,0c-0.3,0.1-0.4,0.5-1,0.9c-0.6,0.4-0.6,2.7-0.6,2.7s0.9,1.1,2.1,1.1c0,0,3.4-0.7,3.3-1.9c0,0,0.8-0.5,0.6-1.3
                                        c0,0,0.8-0.8,0.1-1.1c0,0-0.1,0-0.1,0c-0.5,0-0.6,1.3-2.9,1.5c0,0,1.7-1.8,1.5-2.4C607.9,388.8,607.8,388.6,607.6,388.6
                                        L607.6,388.6z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M603.1,392.9C603.1,392.9,603.1,392.9,603.1,392.9c0-0.3,0-2.4,0.7-2.9c0.3-0.2,0.5-0.4,0.6-0.6
                                        c0.1-0.1,0.2-0.3,0.4-0.3c0.2-0.1,0.3,0,0.4,0c0.2,0.2,0.1,0.6,0.1,0.8c0,0.1-0.1,0.3-0.2,0.4c0,0.1-0.1,0.2-0.1,0.3
                                        c0,0,0.1,0,0.2,0c0.6-0.2,0.9-0.6,1.3-1.2c0.1-0.2,0.3-0.4,0.4-0.6c0.3-0.3,0.5-0.5,0.7-0.4c0.2,0,0.3,0.2,0.4,0.2
                                        c0,0,0,0,0,0c0.2,0.5-0.7,1.7-1.2,2.2c1.2-0.2,1.7-0.7,2-1c0.2-0.2,0.4-0.4,0.7-0.3c0.3,0.1,0.3,0.2,0.4,0.4
                                        c0.1,0.3-0.2,0.7-0.4,0.9c0.1,0.6-0.3,1.1-0.6,1.3c0,0.5-0.6,1-1.8,1.5c-0.8,0.3-1.7,0.5-1.7,0.5c0,0,0,0,0,0
                                        C604.1,394.1,603.2,393,603.1,392.9C603.1,392.9,603.1,392.9,603.1,392.9z M605.1,389.5c0-0.1,0-0.1,0-0.1c0,0-0.1,0-0.1,0
                                        c-0.1,0-0.2,0.1-0.3,0.3c-0.1,0.2-0.3,0.4-0.7,0.6c-0.4,0.3-0.6,1.7-0.6,2.5c0.2,0.2,0.9,1,1.9,1.1c0.9-0.2,3.2-0.9,3.2-1.8
                                        c0-0.1,0-0.1,0.1-0.1c0,0,0.2-0.1,0.3-0.3c0.2-0.2,0.2-0.5,0.2-0.8c0,0,0-0.1,0-0.1c0.2-0.2,0.4-0.5,0.3-0.7
                                        c0,0,0-0.1-0.2-0.2c-0.1,0-0.2,0-0.4,0.3c-0.3,0.4-0.9,1.1-2.5,1.2c-0.1,0-0.1,0-0.1-0.1c0-0.1,0-0.1,0-0.2
                                        c0.7-0.7,1.5-1.8,1.4-2.2c0,0-0.1-0.1-0.1-0.1c-0.1,0-0.2,0-0.5,0.3c-0.1,0.2-0.3,0.4-0.4,0.5c-0.4,0.5-0.7,1.1-1.4,1.3
                                        c-0.2,0.1-0.4,0.1-0.5,0c-0.1-0.2,0-0.4,0.1-0.6c0.1-0.1,0.1-0.3,0.2-0.4C605.1,389.7,605.1,389.6,605.1,389.5z"/>
                                    <path fill="#9B978F" d="M607.6,388.5c-0.2,0-0.4,0.2-0.7,0.4c-0.1,0.2-0.3,0.4-0.4,0.6c-0.4,0.5-0.7,1-1.3,1.2
                                        c-0.1,0-0.2,0-0.2,0c0-0.1,0.1-0.2,0.1-0.3c0.1-0.2,0.2-0.3,0.2-0.4c0-0.2,0.1-0.6-0.1-0.8c0,0-0.1-0.1-0.2-0.1
                                        c0,0-0.1,0-0.2,0c-0.2,0.1-0.3,0.2-0.4,0.3c-0.1,0.2-0.3,0.4-0.6,0.6c-0.7,0.4-0.7,2.6-0.7,2.8c0,0,0,0,0,0c0,0,0,0,0,0.1
                                        c0,0,0.9,1.2,2.2,1.2c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0.9-0.2,1.7-0.5c1.1-0.4,1.7-0.9,1.8-1.5c0.3-0.2,0.7-0.7,0.6-1.3
                                        c0.1-0.2,0.4-0.5,0.4-0.9c0-0.1-0.1-0.3-0.4-0.4c-0.1,0-0.1,0-0.2,0c-0.2,0-0.4,0.2-0.5,0.4c-0.3,0.4-0.7,0.9-2,1
                                        c0.5-0.6,1.4-1.7,1.2-2.2c0,0,0,0,0,0C608,388.7,607.8,388.5,607.6,388.5C607.6,388.5,607.6,388.5,607.6,388.5L607.6,388.5z
                                        M605,391c0.1,0,0.2,0,0.3-0.1c0.7-0.2,1-0.7,1.4-1.3c0.1-0.2,0.3-0.4,0.4-0.5c0.2-0.3,0.4-0.3,0.5-0.3c0,0,0,0,0,0
                                        c0.1,0,0.1,0.1,0.1,0.1c0.1,0.4-0.8,1.5-1.4,2.2c0,0-0.1,0.1,0,0.2c0,0.1,0.1,0.1,0.1,0.1c0,0,0,0,0,0
                                        c1.6-0.1,2.2-0.8,2.5-1.2c0.2-0.2,0.2-0.3,0.3-0.3c0,0,0,0,0.1,0c0.2,0.1,0.2,0.1,0.2,0.2c0,0.2-0.2,0.5-0.3,0.7
                                        c0,0,0,0.1,0,0.1c0.1,0.3,0,0.6-0.2,0.8c-0.2,0.2-0.3,0.3-0.3,0.3c0,0-0.1,0.1-0.1,0.1c0,0.9-2.3,1.6-3.2,1.8
                                        c-1,0-1.8-0.9-1.9-1.1c0-0.9,0.2-2.3,0.6-2.5c0.4-0.2,0.5-0.5,0.7-0.6c0.1-0.1,0.2-0.2,0.3-0.3c0,0,0,0,0.1,0c0,0,0,0,0,0
                                        c0,0,0,0.1,0,0.1c0,0.1,0,0.2,0,0.4c0,0.1-0.1,0.2-0.2,0.4c-0.1,0.3-0.3,0.5-0.1,0.6C604.8,391,604.9,391,605,391L605,391z"/>
                                </g>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M609.3,390.9C609.3,390.9,609.3,390.9,609.3,390.9L609.3,390.9z"/>
                                <path fill="#9B978F" d="M609.3,390.7C609.2,390.7,609.2,390.7,609.3,390.7c-1.3,1.1-2.5,1.2-2.5,1.2c-0.1,0-0.1,0.1-0.1,0.2
                                    c0,0,0,0,0,0c0,0.1,0.1,0.1,0.1,0.1c0,0,0,0,0,0c0.1,0,1.3-0.1,2.6-1.2c0.1-0.1,0.1-0.1,0-0.2
                                    C609.4,390.7,609.3,390.7,609.3,390.7L609.3,390.7z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M606.9,392.8c0-0.1,0-0.1,0.1-0.2c1-0.2,1.6-0.7,1.6-0.7c0.1,0,0.2,0,0.2,0c0,0.1,0,0.2,0,0.2
                                    c0,0-0.7,0.5-1.7,0.7C607,392.9,606.9,392.9,606.9,392.8C606.9,392.8,606.9,392.8,606.9,392.8z"/>
                                <path fill="#9B978F" d="M608.7,391.9C608.7,391.9,608.7,391.9,608.7,391.9c-0.1,0-0.7,0.5-1.7,0.7c-0.1,0-0.1,0.1-0.1,0.2
                                    c0,0,0,0,0,0c0,0.1,0.1,0.1,0.1,0.1c0,0,0,0,0,0c1.1-0.2,1.7-0.7,1.7-0.7c0.1,0,0.1-0.1,0-0.2
                                    C608.8,392,608.8,391.9,608.7,391.9L608.7,391.9z"/>
                            </g>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#FFFFFF" d="M593.9,373.5c1.7-4.1,4.1-9.9,4.5-10.7c0.4-0.1,1.2-0.7,2.7-1.7l4,7.2l-2,2.4L593.9,373.5z"/>
                            <path fill="#9B978F" d="M601,361.4l3.8,6.9l-1.8,2.2l-8.7,2.6c1.6-3.8,3.8-9.1,4.3-10.1C598.9,362.9,599.5,362.5,601,361.4
                                M601.1,360.7c0,0-2.5,1.9-2.8,1.9c0,0,0,0,0,0c0,0,0,0,0,0c-0.2,0-4.8,11.3-4.8,11.3l9.8-2.9l2.1-2.5L601.1,360.7L601.1,360.7z
                                "/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M605.8,368.4c-0.3,0-0.3-0.1-0.3-0.1l0-0.2l-0.2,0c0,0-0.3,0-0.4-0.3c-0.1-0.5-0.1-1-0.1-1l0-0.1
                                        l0-0.1c-0.1-0.1-1.4-2.3-2.4-3.2c-0.8-0.7-1.4-1.5-1.6-1.8l0-0.5c0.2-0.2,0.8-0.9,1.2-1.8c0.5,0.5,1.5,1.8,2.2,3.3
                                        c1,2.1,1.5,3,2,3.3c0.4,0.3,0.8,0.7,0.7,0.9l0,0.1l0,0.1c0,0,0.1,0.3-0.2,0.5l-0.1,0.1l0,0.1c0,0.1-0.1,0.3-0.2,0.3l-0.1,0
                                        l0,0.1C606.2,368.1,606,368.4,605.8,368.4L605.8,368.4z"/>
                                    <path fill="#9B978F" d="M601.9,359.7c0.5,0.6,1.3,1.7,1.9,3c1,2.1,1.5,3,2.1,3.4c0.5,0.3,0.6,0.6,0.6,0.7l0,0.1l0,0.1
                                        c0,0,0,0.1-0.1,0.2l-0.1,0.1l0,0.2c0,0,0,0.1,0,0.1l-0.2,0.1l-0.1,0.2c0,0-0.1,0.2-0.2,0.2c0,0-0.1,0-0.1,0l-0.1-0.3l-0.4,0
                                        c-0.1,0-0.2,0-0.2-0.2c-0.1-0.3-0.1-0.8-0.1-0.9l0-0.2l-0.1-0.1c-0.1-0.1-1.5-2.4-2.5-3.3c-0.7-0.6-1.3-1.4-1.5-1.7l0-0.3
                                        C601.1,360.9,601.6,360.4,601.9,359.7 M601.8,358.8c-0.4,1.1-1.3,2.1-1.3,2.1l0,0.7c0,0,0.7,1,1.6,1.9s2.4,3.2,2.4,3.2
                                        s-0.1,0.6,0.1,1.1c0.2,0.5,0.6,0.5,0.7,0.5c0,0,0,0,0,0s0.1,0.3,0.5,0.3c0,0,0,0,0,0c0.5,0,0.6-0.5,0.6-0.5
                                        c0.3-0.1,0.3-0.5,0.3-0.5c0.4-0.3,0.2-0.7,0.2-0.7c0.2-0.5-0.3-0.9-0.8-1.2s-0.9-1.1-1.9-3.2
                                        C603.3,360.4,601.8,358.8,601.8,358.8L601.8,358.8z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M600.3,361.7C600.3,361.7,600.3,361.7,600.3,361.7l0-0.7c0,0,0-0.1,0-0.1c0,0,0.9-1,1.3-2.1
                                        c0,0,0.1-0.1,0.1-0.1c0,0,0.1,0,0.1,0c0,0,1.6,1.6,2.6,3.7c0.9,2,1.4,2.9,1.9,3.2c0.3,0.2,1,0.8,0.8,1.4c0,0.1,0,0.5-0.3,0.8
                                        c0,0.1-0.1,0.4-0.4,0.6c-0.1,0.2-0.3,0.5-0.8,0.5c-0.4,0-0.6-0.2-0.6-0.3c-0.2,0-0.6-0.2-0.7-0.6c-0.1-0.5-0.1-1-0.1-1.2
                                        c-0.2-0.3-1.5-2.3-2.3-3.1C601,362.8,600.3,361.8,600.3,361.7C600.3,361.7,600.3,361.7,600.3,361.7z M600.6,361l0,0.6
                                        c0.1,0.2,0.8,1.1,1.6,1.8c1,0.9,2.4,3.1,2.4,3.2c0,0,0,0.1,0,0.1c0,0-0.1,0.6,0.1,1.1c0.1,0.4,0.5,0.4,0.5,0.4
                                        c0.1,0,0.1,0,0.1,0.1l0,0c0,0,0.1,0.2,0.4,0.2c0.4,0,0.5-0.4,0.5-0.4c0,0,0.1-0.1,0.1-0.1c0.2-0.1,0.2-0.4,0.2-0.4
                                        c0,0,0-0.1,0-0.1c0.3-0.3,0.2-0.6,0.2-0.6c0,0,0-0.1,0-0.1c0.1-0.4-0.5-0.9-0.7-1.1c-0.5-0.3-1-1.2-2-3.3
                                        c-0.8-1.7-1.9-3-2.4-3.4C601.4,360,600.7,360.8,600.6,361z"/>
                                    <path fill="#9B978F" d="M601.8,358.7C601.8,358.7,601.7,358.7,601.8,358.7c-0.1,0-0.1,0-0.1,0.1c-0.4,1.1-1.3,2.1-1.3,2.1
                                        c0,0,0,0.1,0,0.1l0,0.7c0,0,0,0,0,0c0,0,0,0,0,0.1c0,0,0.7,1,1.7,1.9c0.9,0.8,2.1,2.8,2.3,3.1c0,0.2,0,0.7,0.1,1.2
                                        c0.1,0.4,0.5,0.6,0.7,0.6c0.1,0.1,0.2,0.3,0.6,0.3c0,0,0,0,0,0c0.4,0,0.7-0.4,0.7-0.5c0.3-0.1,0.3-0.4,0.4-0.6
                                        c0.3-0.3,0.3-0.7,0.3-0.8c0.2-0.6-0.5-1.1-0.8-1.4c-0.4-0.3-1-1.2-1.9-3.2c-1-2.1-2.5-3.7-2.6-3.7
                                        C601.8,358.7,601.8,358.7,601.8,358.7L601.8,358.7z M605.2,368.2c0,0-0.4,0-0.5-0.4c-0.2-0.5-0.1-1.1-0.1-1.1c0,0,0-0.1,0-0.1
                                        c-0.1-0.1-1.4-2.3-2.4-3.2c-0.8-0.8-1.5-1.6-1.6-1.8l0-0.6c0.2-0.2,0.9-1,1.3-1.9c0.4,0.4,1.6,1.8,2.4,3.4c0.9,2,1.5,3,2,3.3
                                        c0.2,0.1,0.9,0.6,0.7,1.1c0,0,0,0.1,0,0.1c0,0,0.1,0.3-0.2,0.6c0,0,0,0.1,0,0.1c0,0,0,0.3-0.2,0.4c0,0-0.1,0-0.1,0.1
                                        c0,0-0.1,0.4-0.5,0.4c0,0,0,0,0,0c-0.3,0-0.4-0.2-0.4-0.2l0,0C605.3,368.3,605.3,368.2,605.2,368.2
                                        C605.2,368.2,605.2,368.2,605.2,368.2C605.2,368.2,605.2,368.2,605.2,368.2L605.2,368.2z"/>
                                </g>
                            </g>
                        </g>
                        <g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M597.1,372.4c0.8-0.4,3-0.9,3.9-1.2l0.2-0.1c0.9-0.2,2.2-1,2.3-1.1l0.1-0.1l0-0.1
                                        c0.1-0.5,0.8-0.8,1.2-0.9l0.1,0l0,0.2l0.2,0.1c0.2,0,0.3,0.1,0.3,0.2l0,0.1l0,0.1c0.2,0.3,0,0.7,0,0.7l0,0.1l0,0.1
                                        c0,0.1-0.1,0.4-0.1,0.5c-0.1,0.4-0.6,0.5-0.9,0.5c-0.2,0-0.3,0-0.3,0c0,0,0,0,0,0c-0.4,0-1.5,0.1-3.2,1.4
                                        c-1.5,1.1-3.4,1.7-4.2,1.9L597.1,372.4z"/>
                                    <path fill="#9B978F" d="M604.7,369.3l0,0.2l0.4,0.1c0,0,0,0,0.1,0l0,0l0.1,0.2c0.1,0.1,0,0.4,0,0.5l-0.1,0.2l0,0.2
                                        c0,0.1,0,0.2-0.1,0.3l0,0.1l0,0.1c-0.1,0.2-0.4,0.3-0.7,0.3c-0.1,0-0.2,0-0.3,0c0,0,0,0-0.1,0c-0.4,0-1.5,0.1-3.2,1.4
                                        c-1.3,0.9-2.9,1.5-3.8,1.8l0.3-1.9c0.8-0.4,2.9-0.9,3.8-1.1l0.2-0.1c1-0.3,2.3-1.1,2.3-1.1l0.2-0.1l0-0.2
                                        C604,369.6,604.4,369.4,604.7,369.3 M604.9,368.8C604.9,368.8,604.9,368.8,604.9,368.8c-0.5,0.1-1.4,0.4-1.5,1.1
                                        c0,0-1.3,0.8-2.2,1.1c-0.9,0.2-3.6,0.9-4.3,1.3l-0.5,2.9c0,0,2.7-0.6,4.7-2.1c1.7-1.2,2.7-1.3,3-1.3c0,0,0.1,0,0.1,0
                                        s0.1,0,0.3,0c0.4,0,1-0.1,1.1-0.6c0,0,0.2-0.4,0.2-0.7c0,0,0.2-0.5,0-0.9c0,0,0.1-0.4-0.5-0.5
                                        C605.3,369.1,605.3,368.8,604.9,368.8L604.9,368.8z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M596.3,375.2C596.3,375.1,596.3,375.1,596.3,375.2l0.5-3c0,0,0-0.1,0.1-0.1c0.2-0.1,0.6-0.3,1.1-0.4
                                        c1-0.3,2.3-0.6,3-0.8l0.2-0.1c0.8-0.2,1.9-0.9,2.1-1c0.2-0.7,1.1-1.1,1.6-1.1c0.2,0,0.4,0,0.5,0.1c0.1,0.1,0.1,0.1,0.1,0.2
                                        c0.2,0.1,0.3,0.2,0.4,0.3c0.1,0.1,0.1,0.2,0.1,0.3c0.2,0.4,0.1,0.8,0,0.9c0.1,0.3-0.1,0.7-0.2,0.8c-0.3,0.9-1.5,0.7-1.6,0.7
                                        c-0.1,0-1.1,0-2.9,1.3c-2,1.4-4.7,2.1-4.8,2.1C596.4,375.3,596.4,375.3,596.3,375.2C596.3,375.2,596.3,375.2,596.3,375.2z
                                        M597,372.3l-0.4,2.6c0.7-0.2,2.8-0.8,4.4-2c2-1.4,3.1-1.3,3.1-1.3c0,0,0,0,0,0c0,0,1.1,0.2,1.3-0.5c0,0,0,0,0,0
                                        c0.1-0.1,0.2-0.4,0.1-0.6c0,0,0-0.1,0-0.1c0,0,0.2-0.4,0-0.8c0,0,0-0.1,0-0.1c0,0,0-0.2-0.4-0.3c-0.1,0-0.1-0.1-0.1-0.2
                                        c0,0,0-0.1,0-0.1c0,0-0.1,0-0.2,0c-0.4,0-1.2,0.3-1.3,1c0,0,0,0.1-0.1,0.1c-0.1,0-1.3,0.8-2.2,1.1l-0.2,0.1
                                        C600,371.3,597.7,371.9,597,372.3z"/>
                                    <path fill="#9B978F" d="M604.9,368.6c0,0-0.1,0-0.1,0c-0.5,0.1-1.3,0.4-1.6,1.1c-0.2,0.1-1.3,0.8-2.1,1l-0.2,0.1
                                        c-0.7,0.2-2,0.5-3,0.8c-0.5,0.2-0.9,0.3-1.1,0.4c0,0-0.1,0.1-0.1,0.1l-0.5,2.9c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1c0,0,0.1,0,0.1,0
                                        c0,0,0,0,0,0c0,0,2.8-0.7,4.8-2.1c1.7-1.2,2.7-1.3,2.9-1.3c0,0,0,0,0,0c0,0,0.2,0,0.3,0c0.4,0,1-0.1,1.3-0.7
                                        c0.1-0.1,0.2-0.4,0.2-0.8c0.1-0.1,0.2-0.6,0-0.9c0-0.1,0-0.2-0.1-0.3c-0.1-0.1-0.2-0.2-0.4-0.3c0-0.1,0-0.1-0.1-0.2
                                        C605.2,368.7,605.1,368.6,604.9,368.6L604.9,368.6z M596.6,374.9l0.4-2.6c0.7-0.4,3-1,4-1.2l0.2-0.1c0.9-0.2,2.2-1,2.2-1.1
                                        c0,0,0.1-0.1,0.1-0.1c0.2-0.6,1-0.9,1.3-1c0,0,0,0,0.1,0c0.1,0,0.1,0,0.1,0c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0.1,0.2
                                        c0.4,0.1,0.4,0.3,0.4,0.3c0,0,0,0.1,0,0.1c0.2,0.3,0,0.8,0,0.8c0,0,0,0.1,0,0.1c0.1,0.2-0.1,0.5-0.1,0.6c0,0,0,0,0,0
                                        c-0.1,0.4-0.7,0.5-1,0.5c-0.2,0-0.3,0-0.3,0c0,0,0,0,0,0c0,0,0,0-0.1,0c-0.3,0-1.3,0.1-3,1.3
                                        C599.4,374.1,597.3,374.7,596.6,374.9L596.6,374.9z"/>
                                </g>
                            </g>
                        </g>
                        <g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M592.9,376.3c-1.1,0-2.3-0.8-2.4-0.8c-0.8-0.3-0.9-0.7-1-1.1c-0.1-0.3-0.1-0.6-0.4-0.7
                                        c-0.2-0.1-0.4-0.5-0.6-0.9c-0.3-0.5-0.5-1-0.9-1.4c-0.7-0.7-0.9-1.4-0.9-1.4c-1.5-4.6,0.3-7.9,0.3-8c3.4-6.3,7-7.2,8.8-7.2
                                        c0.5,0,0.9,0.1,0.9,0.1l0.1,0l0.1,0c0.1,0,0.2,0,0.3,0c0.5,0,0.9,0.2,1.4,0.4c0.2,0.1,0.4,0.2,0.5,0.2
                                        c0.5,0.2,1.9,2.2,2.7,3.4c0,1.4-0.3,2.1-0.8,2.1l0,0c-0.2,0-0.5-0.2-0.5-0.2l-0.5-0.4l0.1,0.6c0.3,3.8-0.2,7.3-1.2,8
                                        c-1.2,0.8-2.5,2.6-2.6,2.7l-0.1,0.2l0.2,0.1c0.8,0.6,0.8,1.2,0.7,1.6c-0.1,0.6-0.7,1.2-1.3,1.4c-0.7,0.1-1,0.4-1.3,0.7
                                        c-0.3,0.3-0.6,0.5-1.2,0.6C593.2,376.3,593,376.3,592.9,376.3z"/>
                                    <path fill="#9B978F" d="M595.9,355L595.9,355c0.5,0,0.8,0.1,0.8,0.1l0.1,0l0.1,0c0.1,0,0.2,0,0.3,0c0.4,0,0.8,0.2,1.2,0.4
                                        c0.2,0.1,0.4,0.2,0.5,0.3c0.4,0.2,1.6,1.8,2.5,3.2c-0.1,1.4-0.4,1.8-0.5,1.8c-0.1,0-0.3-0.1-0.3-0.1l-0.9-0.8l0.1,1.2
                                        c0.4,4.1-0.3,7.2-1.1,7.7c-1.3,0.9-2.6,2.7-2.7,2.7l-0.3,0.4l0.4,0.3c0.5,0.4,0.7,0.9,0.6,1.4c-0.1,0.5-0.6,1.1-1.1,1.2
                                        c-0.7,0.2-1.1,0.5-1.4,0.7c-0.3,0.2-0.6,0.4-1,0.5c-0.1,0-0.2,0-0.3,0c-1,0-2.2-0.8-2.2-0.8l0,0l-0.1,0
                                        c-0.6-0.2-0.6-0.5-0.7-0.9c-0.1-0.3-0.2-0.6-0.5-0.9c-0.2-0.1-0.4-0.5-0.5-0.8c-0.3-0.5-0.6-1-1-1.4c-0.6-0.6-0.8-1.3-0.8-1.3
                                        c-1.4-4.4,0.3-7.7,0.3-7.8C590.7,355.7,594.5,355,595.9,355 M595.9,354.5c-1.7,0-5.6,0.8-9,7.4c0,0-1.8,3.5-0.3,8.2
                                        c0,0,0.2,0.8,0.9,1.5s1.1,2,1.6,2.3c0.5,0.4,0,1.4,1.4,1.8c0,0,1.3,0.9,2.5,0.9c0.1,0,0.2,0,0.4,0c1.2-0.2,1.3-1,2.5-1.3
                                        s2.4-2.2,0.7-3.4c0,0,1.3-1.8,2.5-2.6c1.2-0.8,1.7-4.5,1.3-8.2c0,0,0.3,0.2,0.6,0.2c0.5,0,1-0.4,1-2.4c0,0-2.1-3.2-2.8-3.6
                                        c-0.6-0.3-1.3-0.7-2-0.7c-0.1,0-0.3,0-0.4,0C596.8,354.6,596.5,354.5,595.9,354.5L595.9,354.5z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M586,368.7c-0.4-1.9-0.3-3.4-0.1-4.5c0.3-1.5,0.7-2.3,0.7-2.4c1.1-2,2.3-3.7,3.6-4.9
                                        c1-1,2.1-1.7,3.3-2.1c1.8-0.7,3.1-0.4,3.3-0.4c0.7-0.2,1.3,0.1,1.9,0.4c0.2,0.1,0.3,0.2,0.5,0.2c0.7,0.3,2.8,3.6,2.8,3.6
                                        c0,0,0,0.1,0,0.1c0,0,0.1,0.1,0.1,0.1c0.3,0.9-0.1,0.1-0.7,0.7c-0.6,0.7-0.9,1.3-1,1.4c0.2,1.8,0.1,3.7-0.1,5.1
                                        c-0.2,1.1-0.5,2.6-1.3,3.1c-1,0.7-2.1,2.1-2.4,2.5c0.6,0.5,0.9,1.2,0.8,1.9c-0.2,0.8-0.9,1.5-1.6,1.7
                                        c-0.6,0.1-0.9,0.4-1.2,0.6c-0.3,0.3-0.7,0.5-1.3,0.7c-1.2,0.2-2.8-0.7-2.9-0.8c-0.9-0.3-1-0.9-1.1-1.3
                                        c-0.1-0.2-0.1-0.4-0.2-0.5c-0.3-0.2-0.5-0.6-0.7-1c-0.2-0.4-0.5-0.9-0.9-1.3c-0.7-0.7-1-1.5-1-1.6
                                        C586.3,369.6,586.1,369.1,586,368.7z M601.9,359c-0.7-1.2-2-3.3-2.7-3.6c-0.2-0.1-0.4-0.2-0.5-0.2c-0.6-0.3-1.1-0.6-1.8-0.4
                                        c0,0,0,0-0.1,0c0,0-1.3-0.4-3.2,0.3c-1.1,0.4-2.2,1.1-3.2,2.1c-1.3,1.2-2.4,2.8-3.5,4.8c0,0-0.5,0.9-0.7,2.3
                                        c-0.2,1.3-0.4,3.4,0.4,5.8c0,0,0,0,0,0c0,0,0.2,0.8,0.9,1.5c0.4,0.4,0.7,0.9,0.9,1.4c0.2,0.4,0.4,0.8,0.6,0.9
                                        c0.2,0.2,0.3,0.4,0.3,0.7c0.1,0.4,0.2,0.9,1,1.1c0,0,0,0,0,0c0,0,1.6,1,2.7,0.8c0.6-0.1,0.9-0.3,1.2-0.6
                                        c0.3-0.3,0.7-0.5,1.3-0.7c0.6-0.1,1.2-0.8,1.4-1.4c0.1-0.6-0.1-1.3-0.8-1.7c0,0-0.1-0.1-0.1-0.1c0,0,0-0.1,0-0.1
                                        c0,0,0.3-0.5,0.8-1c0.5-0.6,1.2-1.2,1.8-1.7c0.5-0.4,1-1.4,1.2-2.9c0.2-1.5,0.2-3.3,0.1-5.1c0,0,0-0.1,0-0.1
                                        C600.3,360.9,601.6,359.1,601.9,359z"/>
                                    <path fill="#9B978F" d="M595.9,354.4c-0.6,0-1.4,0.1-2.3,0.5c-1.1,0.4-2.2,1.1-3.3,2.1c-1.3,1.2-2.5,2.9-3.6,4.9
                                        c0,0-0.5,0.9-0.7,2.4c-0.2,1.1-0.3,2.6,0.1,4.5c0.1,0.5,0.2,0.9,0.4,1.4c0,0.1,0.3,0.9,1,1.6c0.4,0.4,0.6,0.9,0.9,1.3
                                        c0.2,0.5,0.5,0.8,0.7,1c0.1,0.1,0.2,0.3,0.2,0.5c0.1,0.4,0.2,1,1.1,1.3c0.2,0.1,1.4,0.9,2.6,0.9c0.1,0,0.3,0,0.4,0
                                        c0.7-0.1,1-0.4,1.3-0.7c0.3-0.3,0.6-0.5,1.2-0.6c0.7-0.2,1.4-0.9,1.6-1.7c0.2-0.7-0.1-1.4-0.8-1.9c0.3-0.4,1.4-1.8,2.4-2.5
                                        c0.8-0.5,1.1-2,1.3-3.1c0.2-1.5,0.3-3.3,0.1-5.1c0.1-0.2,0.4-0.8,1-1.4c0.2-0.2,0.4-0.3,0.6-0.3c0.1,0,0.1,0,0.1,0
                                        c0.1,0,0.1-0.1,0-0.4c0,0-0.1-0.1-0.1-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0,0l0,0c0,0-2.1-3.3-2.8-3.6c-0.2-0.1-0.3-0.2-0.5-0.2
                                        c-0.5-0.2-1-0.5-1.5-0.5c-0.1,0-0.3,0-0.4,0C596.7,354.4,596.4,354.4,595.9,354.4L595.9,354.4z M592.9,376.4
                                        c-1.1,0-2.4-0.8-2.4-0.8c0,0,0,0,0,0c-0.8-0.3-0.9-0.7-1-1.1c-0.1-0.3-0.1-0.5-0.3-0.7c-0.2-0.2-0.4-0.5-0.6-0.9
                                        c-0.2-0.5-0.5-1-0.9-1.4c-0.7-0.7-0.9-1.5-0.9-1.5c0,0,0,0,0,0c-0.8-2.4-0.7-4.5-0.4-5.8c0.3-1.4,0.7-2.3,0.7-2.3
                                        c1.1-2,2.2-3.6,3.5-4.8c1-1,2.1-1.6,3.2-2.1c0.9-0.3,1.7-0.4,2.3-0.4c0.6,0,0.9,0.1,0.9,0.1c0,0,0,0,0,0c0,0,0,0,0,0
                                        c0.1,0,0.3,0,0.4,0c0.5,0,0.9,0.2,1.4,0.4c0.2,0.1,0.3,0.2,0.5,0.2c0.7,0.3,2,2.3,2.7,3.6c-0.3,0.1-1.6,1.9-1.6,1.9
                                        c0,0,0,0.1,0,0.1c0.2,1.8,0.1,3.7-0.1,5.1c-0.2,1.5-0.6,2.6-1.2,2.9c-0.6,0.4-1.3,1.1-1.8,1.7c-0.5,0.5-0.8,0.9-0.8,1
                                        c0,0,0,0.1,0,0.1c0,0,0,0.1,0.1,0.1c0.6,0.5,0.9,1.1,0.8,1.7c-0.1,0.7-0.7,1.3-1.4,1.4c-0.6,0.1-1,0.4-1.3,0.7
                                        c-0.3,0.3-0.6,0.5-1.2,0.6C593.2,376.4,593.1,376.4,592.9,376.4L592.9,376.4z"/>
                                </g>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M592.3,356.5C592.3,356.5,592.3,356.4,592.3,356.5c0-0.1,0.1-0.2,0.2-0.2c0,0,1,0.2,2.3,0.7
                                    c1.2,0.4,2.9,1.1,4.1,2.1c0.2,0.2,0.6,0.7,0.3,1.3c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0.3,0,0.8-0.1,1.4,0.4c0.1,0.1,0.1,0.1,0,0.2
                                    c-0.1,0.1-0.1,0.1-0.2,0c-0.4-0.4-0.9-0.4-1.1-0.4c-0.1,0-0.3,0-0.3-0.1c-0.1-0.1,0-0.3,0.1-0.4c0.3-0.6-0.1-0.9-0.2-1
                                    c0,0,0,0,0,0c-2.2-1.8-6.3-2.7-6.3-2.7C592.3,356.6,592.3,356.5,592.3,356.5z"/>
                                <path fill="#9B978F" d="M592.4,356.3c-0.1,0-0.1,0-0.1,0.1c0,0,0,0,0,0.1c0,0.1,0.1,0.1,0.1,0.1c0,0,4.1,0.9,6.3,2.7
                                    c0,0,0,0,0,0c0.1,0,0.5,0.4,0.2,1c-0.1,0.2-0.2,0.3-0.1,0.4c0,0.1,0.1,0.1,0.2,0.1c0,0,0.1,0,0.2,0c0.1,0,0.2,0,0.3,0
                                    c0.2,0,0.5,0.1,0.8,0.4c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0.1-0.1,0.1-0.1,0-0.2c-0.4-0.4-0.8-0.5-1-0.5c-0.1,0-0.2,0-0.3,0
                                    c0,0,0,0,0,0c0,0,0,0,0-0.1c0.3-0.7,0-1.2-0.3-1.3c-1.2-1-2.9-1.7-4.1-2.1C593.5,356.5,592.4,356.3,592.4,356.3
                                    C592.4,356.3,592.4,356.3,592.4,356.3L592.4,356.3z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M591.7,371.2C591.7,371.2,591.7,371.2,591.7,371.2c0-0.1,0.1-0.2,0.1-0.2c2.6-0.2,4.6,0.6,4.7,0.7
                                    c0.1,0,0.1,0.1,0.1,0.2c0,0.1-0.1,0.1-0.2,0.1c0,0-2.1-0.8-4.6-0.6C591.8,371.4,591.7,371.3,591.7,371.2z"/>
                                <path fill="#9B978F" d="M592.6,371c-0.3,0-0.5,0-0.8,0c-0.1,0-0.1,0.1-0.1,0.2c0,0,0,0,0,0c0,0.1,0.1,0.1,0.1,0.1c0,0,0,0,0,0
                                    c0.3,0,0.5,0,0.7,0c2.2,0,3.8,0.7,3.8,0.7c0,0,0,0,0.1,0c0.1,0,0.1,0,0.1-0.1c0-0.1,0-0.2-0.1-0.2
                                    C596.5,371.7,594.8,371,592.6,371L592.6,371z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M592,373.7c0,0,0-0.1,0-0.1c0.9-0.9,2.6-1.5,2.7-1.5c0.1,0,0.2,0,0.2,0.1c0,0.1,0,0.2-0.1,0.2
                                    c0,0-1.7,0.6-2.6,1.5C592.2,373.9,592.1,373.9,592,373.7C592,373.8,592,373.8,592,373.7z"/>
                                <path fill="#9B978F" d="M594.8,372C594.8,372,594.7,372,594.8,372c-0.1,0-1.8,0.6-2.8,1.6c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1
                                    c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0.9-0.9,2.6-1.5,2.6-1.5c0.1,0,0.1-0.1,0.1-0.2C594.9,372.1,594.8,372,594.8,372L594.8,372z"
                                    />
                            </g>
                        </g>
                        <g>
                            <g>
                                <g>
                                    <g>
                                        <path fill="#FFFFFF" d="M593.1,368.1c-0.3,0-0.8-0.6-1-1.7c-0.3-1.6,0.1-3.7,2.2-4.6c0.4,0.2,1.6,1.2,1.2,3.3l0,0.1l0.1,0.1
                                            c0,0,0.4,0.4,0.2,0.7c-0.1,0.3-0.5,0.3-0.6,0.3H595l-0.1,0.2C594.9,366.4,594.4,367.8,593.1,368.1L593.1,368.1z"/>
                                        <path fill="#9B978F" d="M594.2,362.1c0.4,0.3,1.4,1.2,1,2.9l0,0.3l0.2,0.2c0.1,0.1,0.2,0.3,0.2,0.4c0,0.1-0.3,0.1-0.3,0.1
                                            l-0.3,0l-0.1,0.3c0,0-0.5,1.2-1.7,1.5c-0.1,0-0.6-0.5-0.7-1.5C592,364.9,592.4,362.9,594.2,362.1 M594.2,361.5
                                            c-3.7,1.4-2.5,6.8-1.2,6.8c0,0,0.1,0,0.1,0c1.4-0.3,2-1.8,2-1.8s0,0,0,0c0.1,0,0.6,0,0.8-0.5c0.2-0.5-0.3-1-0.3-1
                                            C596.2,362.5,594.2,361.5,594.2,361.5L594.2,361.5z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path fill="#FFFFFF" d="M591.7,366.5c-0.2-0.9-0.1-1.8,0.1-2.6c0.3-0.8,0.9-2,2.4-2.5c0,0,0.1,0,0.1,0c0,0,0.5,0.3,1,0.9
                                            c0.4,0.5,0.8,1.5,0.6,2.8c0.1,0.2,0.5,0.6,0.3,1.1c-0.2,0.4-0.7,0.5-0.9,0.5c-0.2,0.3-0.8,1.5-2.1,1.8
                                            c-0.5,0.1-1.1-0.4-1.4-1.4C591.8,366.9,591.7,366.7,591.7,366.5z M594.2,361.7c-1.3,0.5-1.9,1.6-2.1,2.3
                                            c-0.3,0.9-0.3,2,0,2.9c0.3,0.8,0.7,1.3,1.1,1.2c1.3-0.3,1.9-1.7,1.9-1.7c0-0.1,0.1-0.1,0.1-0.1c0,0,0.5,0,0.7-0.4
                                            c0.2-0.4-0.3-0.8-0.3-0.8c0,0,0-0.1,0-0.1c0.2-1,0-1.9-0.5-2.7C594.7,362,594.4,361.8,594.2,361.7z"/>
                                        <path fill="#9B978F" d="M594.2,361.4C594.2,361.4,594.2,361.4,594.2,361.4c-1.5,0.6-2.2,1.7-2.4,2.6
                                            c-0.2,0.8-0.3,1.7-0.1,2.6c0,0.2,0.1,0.3,0.1,0.5c0.3,0.9,0.8,1.5,1.2,1.5c0.1,0,0.1,0,0.2,0c1.3-0.3,1.9-1.5,2.1-1.8
                                            c0.2,0,0.7-0.1,0.9-0.5c0.2-0.5-0.1-0.9-0.3-1.1c0.2-1.4-0.2-2.3-0.6-2.8C594.8,361.7,594.3,361.4,594.2,361.4
                                            C594.3,361.4,594.3,361.4,594.2,361.4L594.2,361.4z M593.1,368.2c-0.4,0-0.7-0.5-1-1.2c-0.3-0.9-0.3-2,0-2.9
                                            c0.2-0.8,0.8-1.8,2.1-2.3c0.1,0.1,0.5,0.3,0.8,0.7c0.5,0.7,0.7,1.6,0.5,2.7c0,0,0,0.1,0,0.1c0,0,0.4,0.4,0.3,0.8
                                            c-0.1,0.4-0.6,0.4-0.7,0.4c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0-0.1,0-0.1,0.1C595,366.5,594.5,367.8,593.1,368.2
                                            C593.1,368.2,593.1,368.2,593.1,368.2L593.1,368.2z"/>
                                    </g>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <g>
                                        <path fill="#FFFFFF" d="M591,368.8c-0.1,0-0.2,0-0.3-0.1c-0.3-0.1-0.6-0.2-0.9-0.2l-0.3,0c-0.5,0-0.9-0.1-1.5-0.7
                                            c-0.2-0.2-0.4-0.4-0.6-0.7c-1.2-1.2-2.8-2.9-1.3-5.5c0-0.1,0.6-1.9,2.8-2.1c0.3,0,0.6,0,0.9,0c2.1,0,3.7,0.6,4.6,1.8
                                            c0,0.4-0.1,2-1.5,2.7l-0.2,0.1l0.1,0.2c0,0,0.7,1.5,0.1,2.7c-0.2,0.5-0.3,1-0.1,1.3c0.1,0.2,0.2,0.3,0.3,0.4
                                            c-0.1,0-0.2,0.1-0.2,0.1c-0.1,0-0.2,0-0.3-0.1c-0.2-0.1-0.3-0.2-0.5-0.2c-0.2,0-0.4,0.1-0.6,0.2
                                            C591.3,368.7,591.2,368.8,591,368.8z"/>
                                        <path fill="#9B978F" d="M589.6,359.7L589.6,359.7c1.9,0,3.5,0.6,4.4,1.7c0,0.5-0.2,1.8-1.3,2.3l-0.4,0.2l0.2,0.4
                                            c0,0,0.6,1.4,0.1,2.5c-0.2,0.5-0.3,1-0.1,1.4c-0.1-0.1-0.3-0.1-0.4-0.1c-0.3,0-0.5,0.1-0.7,0.2c-0.2,0.1-0.3,0.1-0.4,0.1
                                            c-0.1,0-0.1,0-0.2-0.1c-0.4-0.2-0.7-0.2-1-0.2l-0.2,0l-0.1,0c-0.5,0-0.8,0-1.3-0.6c-0.2-0.2-0.4-0.5-0.6-0.7
                                            c-1.2-1.2-2.7-2.8-1.3-5.2l0-0.1l0-0.1c0-0.1,0.5-1.7,2.6-1.9C589.1,359.7,589.4,359.7,589.6,359.7 M589.6,359.2
                                            c-0.3,0-0.6,0-0.9,0c-2.4,0.2-3,2.2-3,2.2c-1.9,3.3,0.9,5.2,2,6.5c0.6,0.7,1.1,0.8,1.7,0.8c0.1,0,0.2,0,0.3,0
                                            c0.3,0,0.5,0,0.8,0.1c0.2,0.1,0.3,0.1,0.4,0.1c0.5,0,0.7-0.4,1.1-0.4c0.1,0,0.2,0,0.4,0.1c0.2,0.1,0.3,0.2,0.4,0.2
                                            c0.4,0,0.7-0.4,0.7-0.4s-1.1-0.2-0.5-1.5c0.6-1.3-0.1-2.9-0.1-2.9c1.7-0.8,1.6-3,1.6-3C593.5,359.8,591.7,359.2,589.6,359.2
                                            L589.6,359.2z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path fill="#FFFFFF" d="M585,364.3c-0.2-0.8-0.1-1.8,0.6-2.9c0-0.1,0.2-0.6,0.6-1.1c0.4-0.5,1.2-1.1,2.5-1.3
                                            c2.6-0.2,4.8,0.5,5.9,2c0,0,0,0.1,0,0.1c0,0.1,0.1,2.2-1.6,3c0.2,0.4,0.6,1.7,0.1,2.9c-0.2,0.4-0.2,0.7-0.1,1
                                            c0.1,0.3,0.5,0.3,0.5,0.3c0,0,0.1,0,0.1,0.1c0,0,0,0.1,0,0.1c0,0-0.3,0.4-0.7,0.5c-0.2,0-0.4,0-0.6-0.2
                                            c-0.2-0.2-0.4-0.1-0.6,0c-0.3,0.2-0.6,0.3-1.2,0.1c-0.3-0.1-0.6-0.1-0.9-0.1c-0.6,0-1.2,0-1.9-0.9c-0.2-0.2-0.4-0.4-0.6-0.7
                                            C586.3,366.6,585.3,365.6,585,364.3z M594.4,361.2c-1.1-1.4-3.1-2.1-5.6-1.8c-2.3,0.2-2.9,2.1-2.9,2.1c0,0,0,0,0,0
                                            c-1.5,2.7,0.1,4.4,1.4,5.7c0.2,0.2,0.5,0.5,0.6,0.7c0.6,0.8,1.2,0.8,1.7,0.8c0.3,0,0.7,0,1,0.2c0.4,0.2,0.7,0,0.9-0.1
                                            c0.3-0.1,0.6-0.3,1,0c0.1,0.1,0.3,0.2,0.4,0.1c0.1,0,0.3-0.1,0.4-0.2c-0.1-0.1-0.3-0.2-0.4-0.4c-0.2-0.3-0.1-0.7,0.1-1.2
                                            c0.5-1.3-0.1-2.8-0.1-2.8c0-0.1,0-0.2,0.1-0.2C594.3,363.3,594.4,361.5,594.4,361.2z"/>
                                        <path fill="#9B978F" d="M589.6,359c-0.3,0-0.6,0-0.9,0c-1.3,0.1-2.1,0.7-2.5,1.3c-0.4,0.5-0.6,1-0.6,1.1
                                            c-0.6,1.1-0.7,2.1-0.6,2.9c0.3,1.3,1.2,2.3,2,3.1c0.2,0.2,0.4,0.5,0.6,0.7c0.7,0.8,1.3,0.9,1.8,0.9c0.1,0,0.1,0,0.2,0
                                            c0.1,0,0.1,0,0.2,0c0.3,0,0.5,0,0.8,0.1c0.2,0.1,0.3,0.1,0.5,0.1c0.3,0,0.5-0.1,0.7-0.2c0.2-0.1,0.3-0.1,0.4-0.1
                                            c0.1,0,0.2,0,0.3,0.1c0.2,0.1,0.4,0.2,0.5,0.2c0,0,0.1,0,0.1,0c0.4-0.1,0.7-0.5,0.7-0.5c0,0,0-0.1,0-0.1c0,0-0.1-0.1-0.1-0.1
                                            c0,0-0.3-0.1-0.5-0.3c-0.1-0.2-0.1-0.6,0.1-1c0.5-1.2,0.1-2.5-0.1-2.9c1.7-0.9,1.6-3,1.6-3c0,0,0-0.1,0-0.1
                                            C593.6,359.8,591.8,359,589.6,359L589.6,359z M589.4,368.6c-0.5,0-1-0.1-1.6-0.8c-0.2-0.2-0.4-0.4-0.6-0.7
                                            c-1.2-1.3-2.9-3-1.4-5.7c0,0,0,0,0,0c0,0,0.5-1.9,2.9-2.1c0.3,0,0.6,0,0.9,0c2.1,0,3.8,0.7,4.7,1.9c0,0.3,0,2.1-1.5,2.8
                                            c-0.1,0-0.1,0.1-0.1,0.2c0,0,0.7,1.5,0.1,2.8c-0.2,0.5-0.2,0.9-0.1,1.2c0.1,0.2,0.3,0.3,0.4,0.4c-0.1,0.1-0.2,0.2-0.4,0.2
                                            c0,0,0,0-0.1,0c-0.1,0-0.2,0-0.4-0.1c-0.2-0.1-0.3-0.2-0.4-0.2c-0.2,0-0.4,0.1-0.5,0.2c-0.2,0.1-0.3,0.2-0.6,0.2
                                            c-0.1,0-0.2,0-0.4-0.1c-0.3-0.1-0.6-0.2-0.9-0.2c-0.1,0-0.1,0-0.2,0C589.5,368.6,589.5,368.6,589.4,368.6L589.4,368.6z"/>
                                    </g>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M589.8,363.7C589.8,363.7,589.8,363.7,589.8,363.7c0-0.1,0-0.2,0.1-0.2c0.1,0,2.4-0.4,3.1,0.5
                                        c0.1,0.1,0,0.2,0,0.2c-0.1,0.1-0.2,0-0.2,0c-0.5-0.6-2.3-0.5-2.9-0.4C589.9,363.8,589.8,363.8,589.8,363.7z"/>
                                    <path fill="#9B978F" d="M591,363.4c-0.6,0-1.1,0.1-1.1,0.1c-0.1,0-0.1,0.1-0.1,0.2c0,0,0,0,0,0c0,0.1,0.1,0.1,0.1,0.1
                                        c0,0,0,0,0,0c0.2,0,0.6-0.1,1-0.1c0.7,0,1.5,0.1,1.8,0.5c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0c0.1-0.1,0.1-0.1,0-0.2
                                        C592.6,363.6,591.7,363.4,591,363.4L591,363.4z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <g>
                                        <path fill="#FFFFFF" d="M585.8,365c-0.1,0-0.2,0-0.3-0.1l-0.1,0c0,0-0.1,0-0.1,0c-0.4,0-0.9-0.1-1.1-0.3
                                            c-0.1-0.1-0.1-0.2-0.1-0.3l0-0.1l-0.1-0.1c0,0-0.7-0.7-0.4-1.8c0.1-0.3,0.2-0.7,0.6-0.7c0.1,0,0.2,0,0.2,0l0.6,0.3l-0.2-0.6
                                            c0,0-0.3-0.9,0.5-1.5c0.2-0.2,0.5-0.3,0.6-0.3c0.3,0,0.5,0.2,0.5,0.2l0.2,0.2l0.2-0.2c0,0,0.3-0.2,0.7-0.2
                                            c0.1,0,0.3,0,0.4,0.1c0.1,0.1,0.1,0.1,0.2,0.2c0.1,0.3-0.1,0.7-0.2,0.8l-0.1,0.1l0,0.1c0,0.1,0.6,2-1.2,3.5l0,0l0,0
                                            C586.5,364.5,586.2,365,585.8,365z"/>
                                        <path fill="#9B978F" d="M585.9,359.7c0.2,0,0.3,0.1,0.3,0.1l0.3,0.4l0.4-0.3c0.1-0.1,0.3-0.2,0.5-0.2c0.1,0,0.2,0,0.3,0.1
                                            c0.2,0.1-0.1,0.6-0.1,0.7l-0.1,0.2l0.1,0.2c0,0.1,0.6,1.8-1.1,3.2l-0.1,0.1l0,0.1c0,0.1-0.2,0.4-0.5,0.4
                                            c-0.1,0-0.1,0-0.2-0.1l-0.1-0.1l-0.1,0l-0.1,0c-0.4,0-0.7-0.1-0.8-0.2c0,0,0,0,0-0.1l0-0.3l-0.2-0.2c0,0-0.6-0.6-0.4-1.5
                                            c0-0.1,0.1-0.5,0.3-0.5c0,0,0.1,0,0.1,0c0,0,0,0,0,0l1.2,0.6l-0.5-1.2c0-0.1-0.3-0.7,0.4-1.2
                                            C585.6,359.8,585.8,359.7,585.9,359.7 M585.9,359.2c-0.2,0-0.5,0.1-0.8,0.3c-1,0.8-0.5,1.8-0.5,1.8s-0.1-0.1-0.3-0.1
                                            c-0.3,0-0.6,0.1-0.8,0.9c-0.3,1.3,0.5,2,0.5,2c-0.1,0.9,1,0.9,1.4,0.9c0,0,0.1,0,0.1,0c0.2,0.1,0.3,0.1,0.5,0.1
                                            c0.6,0,0.9-0.7,0.9-0.7c2-1.6,1.3-3.7,1.3-3.7s0.6-1,0-1.4c-0.2-0.1-0.4-0.2-0.5-0.2c-0.5,0-0.8,0.3-0.8,0.3
                                            S586.4,359.2,585.9,359.2L585.9,359.2z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path fill="#FFFFFF" d="M583.3,363.2c-0.1-0.3-0.1-0.6,0-1c0.1-0.5,0.3-0.8,0.6-0.9c0.2-0.1,0.3-0.1,0.4-0.1
                                            c-0.1-0.4-0.1-1.1,0.7-1.7c0.4-0.3,0.7-0.4,1.1-0.3c0.3,0,0.5,0.2,0.6,0.3c0.2-0.2,0.8-0.4,1.4-0.1c0.2,0.1,0.3,0.3,0.4,0.5
                                            c0.1,0.4-0.1,0.9-0.2,1.1c0,0.2,0.2,0.6,0.1,1.3c-0.1,0.7-0.4,1.7-1.4,2.5c-0.1,0.1-0.3,0.5-0.8,0.7c-0.2,0.1-0.5,0-0.8-0.1
                                            c-0.2,0-1,0-1.3-0.4c-0.1-0.2-0.2-0.4-0.2-0.6C583.7,364.1,583.4,363.7,583.3,363.2z M584.7,361.3c0,0,0,0.1,0,0.1
                                            c0,0-0.1,0.1-0.2,0c0,0-0.2-0.1-0.4,0c-0.2,0.1-0.4,0.4-0.5,0.8c-0.3,1.1,0.4,1.8,0.5,1.9c0,0,0.1,0.1,0,0.1
                                            c0,0.2,0,0.3,0.1,0.4c0.3,0.3,0.9,0.3,1.2,0.3c0,0,0.1,0,0.1,0c0.2,0.1,0.4,0.1,0.6,0.1c0.4-0.1,0.6-0.6,0.6-0.6c0,0,0,0,0,0
                                            c0.8-0.6,1.2-1.4,1.3-2.3c0.1-0.7-0.1-1.2-0.1-1.2c0,0,0-0.1,0-0.1c0,0,0.3-0.5,0.2-0.9c0,0,0,0,0,0c0-0.1-0.1-0.2-0.2-0.3
                                            c-0.2-0.1-0.5-0.2-0.8-0.1c-0.2,0.1-0.4,0.2-0.4,0.2c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1-0.1c0,0-0.2-0.2-0.5-0.3
                                            c-0.2,0-0.5,0.1-0.8,0.3C584.3,360.3,584.7,361.2,584.7,361.3C584.7,361.3,584.7,361.3,584.7,361.3z"/>
                                        <path fill="#9B978F" d="M585.9,359.1c-0.3,0-0.6,0.1-0.9,0.4c-0.7,0.6-0.7,1.3-0.7,1.7c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.3,0.1
                                            c-0.3,0.1-0.5,0.5-0.6,0.9c-0.1,0.4-0.1,0.7,0,1c0.1,0.6,0.4,0.9,0.5,1.1c0,0.2,0.1,0.4,0.2,0.6c0.3,0.4,1.1,0.4,1.3,0.4
                                            c0,0,0,0,0,0c0.2,0.1,0.3,0.1,0.5,0.1c0.1,0,0.2,0,0.3,0c0.4-0.1,0.7-0.6,0.8-0.7c1-0.8,1.3-1.8,1.4-2.5
                                            c0.1-0.6-0.1-1.1-0.1-1.3c0.1-0.2,0.3-0.6,0.2-1.1c0-0.2-0.2-0.4-0.4-0.5c-0.2-0.1-0.4-0.2-0.6-0.2c-0.3,0-0.6,0.1-0.8,0.2
                                            c-0.1-0.1-0.3-0.3-0.6-0.3C586,359.1,586,359.1,585.9,359.1L585.9,359.1z M584.6,361.5C584.6,361.5,584.6,361.5,584.6,361.5
                                            c0.1-0.1,0.2-0.1,0.1-0.2c0,0,0,0,0,0c0,0-0.4-0.9,0.5-1.6c0.3-0.2,0.5-0.3,0.7-0.3c0,0,0.1,0,0.1,0c0.3,0,0.5,0.3,0.5,0.3
                                            c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0c0,0,0.1,0,0.1,0c0,0,0.2-0.1,0.4-0.2c0.1,0,0.2-0.1,0.3-0.1c0.2,0,0.3,0,0.5,0.1
                                            c0.1,0.1,0.2,0.2,0.2,0.3c0,0,0,0,0,0c0.1,0.4-0.2,0.9-0.2,0.9c0,0,0,0.1,0,0.1c0,0,0.2,0.5,0.1,1.2
                                            c-0.1,0.9-0.5,1.7-1.3,2.3c0,0,0,0,0,0c0,0-0.2,0.4-0.6,0.6c-0.1,0-0.1,0-0.2,0c-0.1,0-0.3,0-0.4-0.1c0,0,0,0-0.1,0
                                            c0,0,0,0,0,0c0,0,0,0-0.1,0c-0.3,0-0.8-0.1-1.1-0.3c-0.1-0.1-0.1-0.3-0.1-0.4c0,0,0-0.1,0-0.1c0,0-0.8-0.7-0.5-1.9
                                            c0.1-0.4,0.3-0.7,0.5-0.8c0.1,0,0.2,0,0.2,0C584.4,361.4,584.5,361.5,584.6,361.5C584.5,361.5,584.5,361.5,584.6,361.5
                                            L584.6,361.5z"/>
                                    </g>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M592,367.5c0-0.2-0.1-0.7,0.1-1.2c0.3-0.7-0.1-1.7-0.1-1.7c0-0.1,0-0.2,0.1-0.2c0.1,0,0.2,0,0.2,0.1
                                        c0,0,0.4,1,0.1,1.9c-0.3,0.7-0.1,1.2-0.1,1.2c0,0.1,0,0.2-0.1,0.2c-0.1,0-0.2,0-0.2-0.1C592.1,367.7,592,367.7,592,367.5z"/>
                                    <path fill="#9B978F" d="M592.2,364.5C592.2,364.5,592.2,364.5,592.2,364.5c-0.1,0-0.2,0.1-0.1,0.2c0,0,0.3,0.9,0.1,1.7
                                        c-0.2,0.5-0.2,1-0.1,1.2c0,0.1,0,0.2,0.1,0.2c0,0.1,0.1,0.1,0.1,0.1c0,0,0,0,0.1,0c0.1,0,0.1-0.1,0.1-0.2c0,0-0.2-0.5,0.1-1.2
                                        c0.3-0.8-0.1-1.8-0.1-1.9C592.3,364.5,592.3,364.5,592.2,364.5L592.2,364.5z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M591.3,366.3C591.3,366.2,591.3,366.2,591.3,366.3c0.5-0.9-0.1-1.9-0.1-1.9c0-0.1,0-0.2,0.1-0.2
                                        c0.1,0,0.2,0,0.2,0.1c0,0,0.2,0.3,0.2,0.7c0.1,0.5,0.1,1-0.1,1.4C591.5,366.4,591.4,366.4,591.3,366.3
                                        C591.3,366.4,591.3,366.3,591.3,366.3z"/>
                                    <path fill="#9B978F" d="M591.3,364.2C591.3,364.2,591.3,364.2,591.3,364.2c-0.1,0.1-0.2,0.1-0.1,0.2c0,0,0.5,1,0.1,1.8
                                        c0,0,0,0.1,0,0.1c0,0,0,0.1,0.1,0.1c0,0,0,0,0.1,0c0.1,0,0.1,0,0.1-0.1c0.2-0.4,0.3-0.9,0.1-1.4c-0.1-0.4-0.2-0.7-0.2-0.7
                                        C591.4,364.2,591.4,364.2,591.3,364.2L591.3,364.2z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M592.9,363.2c0-0.1,0-0.1,0.1-0.1c0.7-0.6,0.8-1.7,0.8-1.7c0-0.1,0.1-0.1,0.2-0.1
                                        c0.1,0,0.1,0.1,0.1,0.2c0,0.1-0.1,1.2-0.9,1.9C593,363.3,592.9,363.3,592.9,363.2C592.9,363.2,592.9,363.2,592.9,363.2z"/>
                                    <path fill="#9B978F" d="M593.9,361.2c-0.1,0-0.1,0.1-0.1,0.1c0,0-0.1,1.1-0.8,1.7c0,0-0.1,0.1-0.1,0.1c0,0,0,0,0,0.1
                                        c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0c0.8-0.6,0.9-1.8,0.9-1.9C594,361.3,593.9,361.2,593.9,361.2
                                        C593.9,361.2,593.9,361.2,593.9,361.2L593.9,361.2z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M585.2,361.2C585.2,361.2,585.2,361.2,585.2,361.2c0-0.3,0-0.8,0.6-1c0.4-0.1,0.7,0,0.9,0.2
                                        c0.1-0.1,0.2-0.2,0.4-0.2c0.3-0.1,0.5,0.1,0.5,0.1c0.1,0,0.1,0.1,0,0.2c0,0.1-0.1,0.1-0.2,0c0,0-0.1-0.1-0.3-0.1
                                        c-0.1,0-0.2,0.1-0.3,0.2c0,0-0.1,0.1-0.1,0.1c-0.1,0-0.1,0-0.1-0.1c0,0-0.2-0.3-0.6-0.2c-0.5,0.1-0.4,0.7-0.4,0.7
                                        c0,0.1,0,0.2-0.1,0.2C585.3,361.3,585.3,361.3,585.2,361.2z"/>
                                    <path fill="#9B978F" d="M586.2,360.1c-0.1,0-0.2,0-0.3,0.1c-0.6,0.2-0.6,0.7-0.6,1c0,0,0,0,0,0c0,0.1,0.1,0.1,0.1,0.1
                                        c0,0,0,0,0,0c0.1,0,0.1-0.1,0.1-0.2c0,0-0.1-0.5,0.4-0.7c0.1,0,0.2,0,0.2,0c0.3,0,0.4,0.2,0.4,0.2c0,0,0.1,0.1,0.1,0.1
                                        c0,0,0,0,0,0c0,0,0.1,0,0.1-0.1c0.1-0.1,0.2-0.2,0.3-0.2c0,0,0,0,0.1,0c0.1,0,0.2,0.1,0.2,0.1c0,0,0.1,0,0.1,0
                                        c0,0,0.1,0,0.1-0.1c0-0.1,0-0.2,0-0.2c0,0-0.2-0.1-0.4-0.1c0,0-0.1,0-0.1,0c-0.1,0-0.3,0.1-0.4,0.2
                                        C586.6,360.2,586.4,360.1,586.2,360.1L586.2,360.1z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M584.5,363.9c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.1,0.2-0.1c0.1,0,0.1,0.1,0.1,0.2c0,0.1,0,0.3,0.1,0.3
                                        c0.2,0.2,0.6,0.1,0.7,0.1c0.1,0,0.2,0,0.2,0.1l0,0c0,0.1,0,0.2-0.1,0.2c0,0-0.6,0.1-1-0.2C584.6,364.2,584.6,364,584.5,363.9z
                                        "/>
                                    <path fill="#9B978F" d="M584.7,363.5c-0.1,0-0.1,0.1-0.1,0.1c0,0.1,0,0.1,0,0.2c0,0.1,0.1,0.3,0.2,0.4
                                        c0.2,0.2,0.4,0.2,0.6,0.2c0.2,0,0.3,0,0.3,0c0.1,0,0.1-0.1,0.1-0.2l0,0c0-0.1-0.1-0.1-0.1-0.1c0,0,0,0,0,0c-0.1,0-0.2,0-0.3,0
                                        c-0.2,0-0.3,0-0.4-0.1c-0.1-0.1-0.1-0.2-0.1-0.3C584.8,363.6,584.8,363.5,584.7,363.5C584.7,363.5,584.7,363.5,584.7,363.5
                                        L584.7,363.5z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path fill="#FFFFFF" d="M583.9,362.5C583.9,362.4,583.9,362.4,583.9,362.5c0.1-0.3,0.2-0.5,0.4-0.6c0.4-0.2,0.9,0.1,0.9,0.1
                                        c0.1,0,0.1,0.1,0,0.2c0,0.1-0.1,0.1-0.2,0c-0.1-0.1-0.4-0.2-0.6-0.1c-0.1,0-0.2,0.2-0.2,0.3c0,0.1-0.1,0.1-0.2,0.1
                                        C584,362.6,583.9,362.5,583.9,362.5z"/>
                                    <path fill="#9B978F" d="M584.6,361.8c-0.1,0-0.2,0-0.3,0.1c-0.2,0.1-0.3,0.3-0.4,0.5c0,0,0,0,0,0.1c0,0.1,0.1,0.1,0.1,0.1
                                        c0,0,0,0,0,0c0.1,0,0.1,0,0.1-0.1c0-0.2,0.1-0.3,0.2-0.3c0,0,0.1,0,0.2,0c0.2,0,0.4,0.1,0.5,0.1c0,0,0,0,0.1,0
                                        c0,0,0.1,0,0.1-0.1c0-0.1,0-0.2,0-0.2C585.2,362,584.9,361.8,584.6,361.8L584.6,361.8z"/>
                                </g>
                            </g>
                        </g>
                    </g>
                    <g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M605.7,371.5c-0.4,0-0.6,0-0.7,0c-0.8-0.2-1.3-1.2-1.5-1.4c0.3-0.9,0.8-2.1,1.2-2.2
                                    c0.4-0.1,0.7-0.3,0.8-0.4c0.1-0.1,0.2-0.1,0.3-0.2c0,0,0,0.1-0.1,0.3c0,0.1-0.1,0.2-0.2,0.3c-0.2,0.2-0.4,0.4-0.3,0.7
                                    c0.1,0.2,0.4,0.2,0.6,0.2c0,0,0,0,0,0c0.8,0,1.3-0.4,1.8-0.9c0.2-0.1,0.3-0.3,0.5-0.4c0.2-0.2,0.4-0.2,0.4-0.2
                                    c0,0,0.1,0,0.1,0.1c0,0.2-0.9,1-1.9,1.6l-0.6,0.3l0.6,0.1c0.4,0.1,0.7,0.1,1,0.1c1,0,1.5-0.4,1.8-0.6c0.1-0.1,0.2-0.2,0.3-0.2
                                    c0.1,0,0.1,0.1,0.1,0.1c0,0.1-0.2,0.3-0.5,0.5l-0.1,0.1v0.1c0,0.6-0.7,0.8-0.7,0.8l-0.1,0l0,0.1
                                    C608.4,371.2,607.3,371.5,605.7,371.5C605.7,371.5,605.7,371.5,605.7,371.5z"/>
                                <path fill="#9B978F" d="M605.1,368c-0.2,0.2-0.3,0.4-0.1,0.7c0.2,0.4,0.6,0.4,0.8,0.4l0.1,0l0,0c0.1,0,0.3,0,0.4,0l-0.8,0.5
                                    l1.3,0.3c0.4,0.1,0.7,0.1,1,0.1c0.6,0,1.1-0.1,1.4-0.3v0.1c0,0.4-0.5,0.6-0.5,0.6l-0.3,0.1l-0.1,0.3c-0.1,0.2-0.8,0.6-2.6,0.6
                                    c-0.3,0-0.5,0-0.6,0c-0.7-0.2-1.1-0.9-1.3-1.2c0.3-0.9,0.7-1.8,1-1.9C605,368.1,605.1,368,605.1,368 M605.9,367
                                    C605.9,367,605.9,367,605.9,367c-0.4,0-0.5,0.4-1.2,0.6s-1.4,2.4-1.4,2.4s0.5,1.3,1.7,1.7c0,0,0.3,0,0.7,0c1,0,2.8-0.1,3.1-1
                                    c0,0,0.9-0.2,0.9-1.1c0,0,1-0.6,0.4-1c-0.1,0-0.1-0.1-0.2-0.1c-0.4,0-0.8,0.7-2.1,0.7c-0.3,0-0.6,0-1-0.1c0,0,2.1-1.3,2-1.9
                                    c0,0-0.1-0.2-0.3-0.2c-0.1,0-0.3,0.1-0.6,0.2c-0.8,0.5-1.3,1.2-2.1,1.2c0,0,0,0,0,0c-0.8,0,0-0.5,0.2-0.9
                                    C606.2,367.4,606.2,367,605.9,367L605.9,367z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M603.2,370.1C603.2,370.1,603.2,370,603.2,370.1c0.1-0.3,0.7-2.3,1.5-2.6c0.4-0.1,0.6-0.3,0.8-0.4
                                    c0.2-0.1,0.3-0.2,0.5-0.2c0.2,0,0.3,0.1,0.3,0.1c0.2,0.2,0,0.6-0.1,0.8c-0.1,0.1-0.2,0.3-0.3,0.4c-0.1,0.1-0.2,0.2-0.2,0.3
                                    c0,0,0.1,0,0.2,0c0.6,0,1-0.4,1.5-0.8c0.2-0.1,0.3-0.3,0.5-0.4c0.3-0.2,0.6-0.3,0.8-0.2c0.2,0.1,0.3,0.2,0.3,0.3c0,0,0,0,0,0
                                    c0.1,0.6-1.1,1.4-1.8,1.8c1.2,0.2,1.8-0.2,2.2-0.5c0.2-0.2,0.5-0.3,0.7-0.1c0.2,0.2,0.3,0.3,0.3,0.4c0,0.3-0.4,0.6-0.6,0.7
                                    c0,0.7-0.6,1-0.9,1.1c-0.2,0.5-0.9,0.8-2.1,1c-0.9,0.1-1.7,0-1.8,0c0,0,0,0,0,0C603.8,371.5,603.2,370.2,603.2,370.1
                                    C603.2,370.1,603.2,370.1,603.2,370.1z M606,367.3c0-0.1,0-0.1,0-0.1c0,0-0.1,0-0.1,0c-0.1,0-0.2,0.1-0.4,0.2
                                    c-0.2,0.1-0.4,0.3-0.8,0.4c-0.5,0.2-1,1.5-1.2,2.3c0.1,0.2,0.6,1.2,1.6,1.5c0.9,0.1,3.3,0,3.6-0.9c0-0.1,0.1-0.1,0.1-0.1
                                    c0,0,0.2-0.1,0.4-0.2c0.3-0.2,0.4-0.4,0.4-0.7c0-0.1,0-0.1,0.1-0.1c0.2-0.1,0.5-0.4,0.5-0.5c0,0,0-0.1-0.1-0.2
                                    c-0.1-0.1-0.2,0-0.4,0.1c-0.4,0.3-1.2,0.8-2.8,0.5c-0.1,0-0.1-0.1-0.1-0.1c0-0.1,0-0.1,0.1-0.1c0.8-0.5,2-1.4,2-1.7
                                    c0,0,0-0.1-0.1-0.1c-0.1,0-0.2,0-0.5,0.2c-0.2,0.1-0.4,0.3-0.5,0.4c-0.5,0.4-1,0.8-1.7,0.8c-0.2,0-0.4,0-0.5-0.2
                                    c-0.1-0.2,0.1-0.4,0.3-0.6c0.1-0.1,0.2-0.2,0.3-0.3C606,367.5,606,367.4,606,367.3z"/>
                                <path fill="#9B978F" d="M605.9,366.9C605.9,366.9,605.9,366.9,605.9,366.9c-0.2,0-0.4,0.1-0.5,0.2c-0.2,0.1-0.4,0.3-0.8,0.4
                                    c-0.8,0.3-1.4,2.3-1.4,2.5c0,0,0,0,0,0c0,0,0,0,0,0.1c0,0.1,0.6,1.4,1.8,1.8c0,0,0,0,0,0c0,0,0.3,0,0.7,0c0.3,0,0.7,0,1.1-0.1
                                    c1.2-0.1,1.9-0.4,2.1-1c0.3-0.1,0.9-0.5,0.9-1.1c0.2-0.1,0.6-0.4,0.6-0.7c0-0.1,0-0.3-0.3-0.4c-0.1-0.1-0.2-0.1-0.2-0.1
                                    c-0.2,0-0.3,0.1-0.5,0.2c-0.3,0.2-0.8,0.5-1.6,0.5c-0.2,0-0.4,0-0.6,0c0.6-0.4,1.8-1.3,1.8-1.8c0,0,0,0,0,0
                                    c0-0.1-0.1-0.3-0.3-0.3c-0.1,0-0.1,0-0.2,0c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.1-0.4,0.3-0.5,0.4c-0.5,0.4-0.9,0.8-1.5,0.8
                                    c0,0,0,0,0,0c-0.1,0-0.2,0-0.2,0c0-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.2,0.3-0.5,0.1-0.8
                                    C606.2,367,606.1,366.9,605.9,366.9L605.9,366.9z M605.7,371.6c-0.3,0-0.5,0-0.6,0c-1-0.3-1.5-1.3-1.6-1.5
                                    c0.2-0.8,0.8-2.1,1.2-2.3c0.4-0.1,0.6-0.3,0.8-0.4c0.1-0.1,0.2-0.2,0.4-0.2c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0.1,0,0.1
                                    c0,0.1,0,0.2-0.1,0.4c0,0.1-0.2,0.2-0.3,0.3c-0.2,0.2-0.4,0.4-0.3,0.6c0.1,0.2,0.3,0.2,0.5,0.2c0,0,0,0,0.1,0
                                    c0.7,0,1.2-0.4,1.7-0.8c0.2-0.1,0.3-0.3,0.5-0.4c0.2-0.2,0.4-0.2,0.5-0.2c0,0,0.1,0,0.1,0c0.1,0,0.1,0.1,0.1,0.1
                                    c0,0.4-1.1,1.2-2,1.7c-0.1,0-0.1,0.1-0.1,0.1c0,0.1,0.1,0.1,0.1,0.1c0.4,0.1,0.7,0.1,1,0.1c0.9,0,1.5-0.3,1.8-0.6
                                    c0.2-0.1,0.3-0.2,0.3-0.2c0,0,0.1,0,0.1,0c0.1,0.1,0.1,0.2,0.1,0.2c0,0.2-0.3,0.4-0.5,0.5c0,0-0.1,0.1-0.1,0.1
                                    c0,0.3-0.1,0.5-0.4,0.7c-0.2,0.1-0.4,0.2-0.4,0.2c-0.1,0-0.1,0.1-0.1,0.1C608.5,371.5,606.8,371.6,605.7,371.6L605.7,371.6z"/>
                            </g>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#FFFFFF" d="M606.8,370.2C606.8,370.2,606.8,370.2,606.8,370.2c0-0.1,0.1-0.1,0.2-0.1c0,0,1.2,0.2,2.6-0.5
                                c0.1,0,0.2,0,0.2,0.1c0,0.1,0,0.2-0.1,0.2c-1.5,0.7-2.7,0.5-2.8,0.5C606.9,370.3,606.8,370.3,606.8,370.2z"/>
                            <path fill="#9B978F" d="M609.7,369.6C609.7,369.6,609.6,369.6,609.7,369.6c-1,0.4-1.7,0.5-2.2,0.5c-0.3,0-0.5,0-0.5,0
                                c0,0,0,0,0,0c-0.1,0-0.1,0-0.1,0.1c0,0,0,0,0,0c0,0.1,0,0.1,0.1,0.2c0,0,0.2,0,0.5,0c0.5,0,1.3-0.1,2.3-0.5
                                c0.1,0,0.1-0.1,0.1-0.2C609.8,369.6,609.7,369.6,609.7,369.6L609.7,369.6z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#FFFFFF" d="M606.8,371c0-0.1,0.1-0.1,0.2-0.1c1,0.1,1.8-0.2,1.8-0.2c0.1,0,0.2,0,0.2,0.1c0,0.1,0,0.2-0.1,0.2
                                c0,0-0.8,0.3-1.9,0.2C606.9,371.1,606.8,371.1,606.8,371C606.8,371,606.8,371,606.8,371z"/>
                            <path fill="#9B978F" d="M608.8,370.6C608.8,370.6,608.8,370.6,608.8,370.6c-0.1,0-0.6,0.2-1.5,0.2c-0.1,0-0.2,0-0.3,0
                                c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.1,0.1c0,0,0,0,0,0c0,0.1,0.1,0.1,0.1,0.2c0.1,0,0.2,0,0.4,0c0.9,0,1.5-0.2,1.5-0.2
                                c0.1,0,0.1-0.1,0.1-0.2C608.9,370.7,608.9,370.6,608.8,370.6L608.8,370.6z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            
                                <rect x="601.7" y="366.5" transform="matrix(0.2826 -0.9592 0.9592 0.2826 78.4467 841.6175)" fill="#FFFFFF" width="0.3" height="3.8"/>
                            <polygon fill="#9B978F" points="600.1,367.7 600,368 603.7,369 603.8,368.8 600.1,367.7 				"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            
                                <rect x="604.1" y="365.7" transform="matrix(0.8355 -0.5496 0.5496 0.8355 -101.516 392.7193)" fill="#FFFFFF" width="1.9" height="0.4"/>
                            <polygon fill="#9B978F" points="605.7,365.2 604.2,366.2 604.4,366.6 605.9,365.5 605.7,365.2 				"/>
                        </g>
                    </g>
                </g>
                <g id="shr-1">
                    <rect x="817.6" y="234.6" fill="#425563" width="5.1" height="70.9"/>
                    <g>
                        <path fill="#425563" d="M821.7,306.5v20.6h-3.1v-20.6H821.7 M822.7,305.5h-5.1v22.6h5.1V305.5L822.7,305.5z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M821.7,367.1v11.2h-3.1v-11.2H821.7 M822.7,366.1h-5.1v13.2h5.1V366.1L822.7,366.1z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M821.7,329.1v36h-3.1v-36H821.7 M822.7,328.1h-5.1v38h5.1V328.1L822.7,328.1z"/>
                    </g>
                    <g>
                        <rect x="822.7" y="322.4" fill="#425563" width="46.2" height="2.3"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M867.3,324.7l0.9,0.9L847,346.7l-0.9-0.9L867.3,324.7 M867.3,323.9l-21.9,21.9l1.6,1.6l21.9-21.9
                            L867.3,323.9L867.3,323.9z"/>
                    </g>
                    <path fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="2,2" d="M845.4,345.9
                        c0,0-7.3-10.8-7.3-21.2"/>
                    <polyline fill="#425563" points="842.4,239.7 844.5,234.6 846.5,239.7 		"/>
                    <rect x="840.9" y="257.6" fill="#425563" width="6.9" height="6.5"/>
                    <path fill="#425563" d="M841.4,275.3v6.5h6.4v-6.5H841.4z M844.7,281c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5
                        c1.4,0,2.5,1.1,2.5,2.5C847.2,279.9,846.1,281,844.7,281z"/>
                    <path fill="#425563" d="M844.7,275.7c-1.6,0-2.9,1.3-2.9,2.9c0,1.6,1.3,2.9,2.9,2.9c1.6,0,2.9-1.3,2.9-2.9
                        C847.5,277,846.3,275.7,844.7,275.7z M844.7,281c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5
                        C847.2,279.9,846.1,281,844.7,281z"/>
                    <path fill="#425563" d="M844.7,276.6c-1.1,0-1.9,0.9-1.9,1.9s0.9,1.9,1.9,1.9s1.9-0.9,1.9-1.9S845.7,276.6,844.7,276.6z
                        M844.7,279.8c-0.7,0-1.3-0.6-1.3-1.3c0-0.7,0.6-1.3,1.3-1.3c0.7,0,1.3,0.6,1.3,1.3C846,279.2,845.4,279.8,844.7,279.8z"/>
                </g>
                <g id="room_names">
                    <text transform="matrix(1 0 0 1 768.356 729.3799)" fill="#425563" font-family="Fredoka, sans-serif" font-size="12px">2-Car Garage</text>
                    <text transform="matrix(1 0 0 1 778.2872 617.8649)" fill="#425563" font-family="Fredoka, sans-serif" font-size="12px">Storage</text>
                    <text transform="matrix(1 0 0 1 529.3463 807.8323)" fill="#425563" font-family="Fredoka, sans-serif" font-size="12px">Entry</text>
                    <text transform="matrix(1 0 0 1 525.3068 940.3925)"><tspan x="0" y="0" fill="#425563" font-family="Fredoka, sans-serif" font-size="12px">Covered </tspan><tspan x="8.7" y="14.4" fill="#425563" font-family="Fredoka, sans-serif" font-size="12px">Entry</tspan></text>
                    <text transform="matrix(1 0 0 1 681.5472 73.0855)" fill="#425563" font-family="Fredoka, sans-serif" font-size="12px">Primary Bedroom</text>
                    <text transform="matrix(1 0 0 1 431.8741 135.3737)" fill="#425563" font-family="Fredoka, sans-serif" font-size="12px">Covered Patio</text>
                    <text transform="matrix(1 0 0 1 561.7397 129.494)" fill="#425563" font-family="Fredoka, sans-serif" font-size="12px">Dining Room</text>
                    <text transform="matrix(1 0 0 1 607.8215 322.3731)" fill="#425563" font-family="Fredoka, sans-serif" font-size="12px">Kitchen</text>
                    <text transform="matrix(1 0 0 1 374.2365 315.4638)" fill="#425563" font-family="Fredoka, sans-serif" font-size="12px">Great Room</text>
                    <text transform="matrix(1 0 0 1 384.1976 655.1199)" fill="#425563" font-family="Fredoka, sans-serif" font-size="12px">Bedroom 3</text>
                    <text transform="matrix(1 0 0 1 420.8662 1043.7272)" fill="#425563" font-family="Fredoka, sans-serif" font-size="12px">Bedroom 2</text>
                    <text transform="matrix(1 0 0 1 375.1048 764.3398)" fill="#425563" font-family="Fredoka, sans-serif" font-size="8.4626px">Bathroom 2</text>
                    <text transform="matrix(1 0 0 1 675.7146 498.1937)"><tspan x="0" y="0" fill="#425563" font-family="Fredoka, sans-serif" font-size="8.4626px">Walk-in </tspan><tspan x="1.9" y="10.2" fill="#425563" font-family="Fredoka, sans-serif" font-size="8.4626px">Pantry</tspan></text>
                    <text transform="matrix(1 0 0 1 793.0922 462.8177)"><tspan x="0" y="0" fill="#425563" font-family="Fredoka, sans-serif" font-size="8.4626px">Walk-in </tspan><tspan x="2.1" y="10.2" fill="#425563" font-family="Fredoka, sans-serif" font-size="8.4626px">Closet</tspan></text>
                    <text transform="matrix(1 0 0 1 642.1506 565.7747)" fill="#425563" font-family="Fredoka, sans-serif" font-size="8.4626px">Laundry</text>
                    <text transform="matrix(1 0 0 1 605.6979 558.5812)" fill="#425563" font-family="Fredoka, sans-serif" font-size="8.4626px">W</text>
                    <text transform="matrix(1 0 0 1 628.2551 435.4434)" fill="#425563" font-family="Fredoka, sans-serif" font-size="8.4626px">DW</text>
                    <text transform="matrix(1 0 0 1 700.3632 351.4685)" fill="#425563" font-family="Fredoka, sans-serif" font-size="8.4626px">Ref</text>
                    <text transform="matrix(1 0 0 1 705.5871 309.5333)" fill="#425563" font-family="Fredoka, sans-serif" font-size="8.4626px">DO</text>
                    <text transform="matrix(1 0 0 1 606.6359 593.489)" fill="#425563" font-family="Fredoka, sans-serif" font-size="8.4626px">D</text>
                </g>

            </g>
            <HostHotspot/>
            <BackyardHotspot/>
            <CompanyHotspot/>
            <MudroomHotspot/>
            <MorningHotspot/>
            <StorageHotSpot/>
            {/* OPTION: Optional Study*/}
            <g id="optionalStudy" data-option="optionalStudy" style={{ display: active.optionalStudy ? "block" : "none" }} fill="#CC0001">
                <g id="optional-study">
                    <rect x="345.8" y="536" fill="#EAEAEA" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" width="162.2" height="175.5"/>
                    <g id="Desk" filter="url(#ds-soft)">
                        
                        <g>
                            <g>
                                <g>
                                    <g>
                                        
                                            <rect x="389.5" y="634" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -333.5517 464.177)" fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="8.1" height="1.5"/>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M397.4,632.4l-6.2,6.2l-1.5-1.5
                                            l6.2-6.2L397.4,632.4z M391.2,637.7l5.3-5.3l-0.6-0.6l-5.3,5.3L391.2,637.7z"/>
                                    </g>
                                    <g>
                                        
                                            <rect x="392.8" y="651.8" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -348.4795 470.3662)" fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="1.5" height="8.1"/>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M397.4,658.2l-1.5,1.5l-6.2-6.2
                                            l1.5-1.5L397.4,658.2z M395.9,658.8l0.6-0.6l-5.3-5.3l-0.6,0.6L395.9,658.8z"/>
                                    </g>
                                    <g>
                                        <g>
                                            <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M403,640v10.5c0,3.5-2.8,6.3-6.3,6.3
                                                h-7.3c-3.5,0-6.3-2.8-6.3-6.3V640c0-3.5,2.8-6.3,6.3-6.3h7.3C400.2,633.7,403,636.5,403,640z"/>
                                            <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M403.3,635.6v19.3
                                                c0,1.2-1,2.2-2.2,2.2H385c-1.2,0-2.2-1-2.2-2.2v-19.3c0-1.2,1-2.2,2.2-2.2h16.1C402.3,633.4,403.3,634.4,403.3,635.6z
                                                M383.4,654.9c0,0.9,0.7,1.6,1.6,1.6h16.1c0.9,0,1.6-0.7,1.6-1.6v-19.3c0-0.9-0.7-1.6-1.6-1.6H385c-0.9,0-1.6,0.7-1.6,1.6
                                                V654.9z"/>
                                        </g>
                                        <g>
                                            <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M370.8,634.2v11.1v11.1
                                                c0,2.7,2.6,4.5,5.1,3.6l6.2-2.1c1.3-0.4,2.1-1.6,2.1-2.9v-9.6v-9.6c0-1.3-0.8-2.5-2.1-2.9l-6.2-2.1
                                                C373.4,629.7,370.8,631.5,370.8,634.2z"/>
                                            <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M384.5,635.6v19.3
                                                c0,1.5-0.9,2.8-2.3,3.2l-6.2,2.1c-1.3,0.4-2.7,0.3-3.8-0.5c-1.1-0.8-1.7-2-1.7-3.4v-22.2c0-1.4,0.6-2.6,1.7-3.4
                                                c1.1-0.8,2.5-1,3.8-0.5l6.2,2.1C383.5,632.9,384.5,634.2,384.5,635.6z M371.1,656.4c0,1.2,0.5,2.2,1.5,2.9
                                                c1,0.7,2.1,0.8,3.2,0.5l6.2-2.1c1.1-0.4,1.9-1.5,1.9-2.7v-19.3c0-1.2-0.8-2.3-1.9-2.7l-6.2-2.1c-1.1-0.4-2.3-0.2-3.2,0.5
                                                c-1,0.7-1.5,1.7-1.5,2.9V656.4z"/>
                                        </g>
                                        <g>
                                            <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M397.6,659.5L397.6,659.5
                                                c0,0.9-0.7,1.5-1.5,1.5h-13.5c-0.9,0-1.5-0.7-1.5-1.5l0,0c0-0.9,0.7-1.5,1.5-1.5H396C396.9,658,397.6,658.7,397.6,659.5z"/>
                                            <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M397.9,658.8v1.4
                                                c0,0.6-0.5,1.1-1.1,1.1h-15c-0.6,0-1.1-0.5-1.1-1.1v-1.4c0-0.6,0.5-1.1,1.1-1.1h15C397.4,657.7,397.9,658.2,397.9,658.8z
                                                M381.3,660.2c0,0.3,0.2,0.5,0.5,0.5h15c0.3,0,0.5-0.2,0.5-0.5v-1.4c0-0.3-0.2-0.5-0.5-0.5h-15c-0.3,0-0.5,0.2-0.5,0.5
                                                V660.2z"/>
                                        </g>
                                        <g>
                                            <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M397.6,631L397.6,631
                                                c0-0.9-0.7-1.5-1.5-1.5h-13.5c-0.9,0-1.5,0.7-1.5,1.5l0,0c0,0.9,0.7,1.5,1.5,1.5H396C396.9,632.6,397.6,631.9,397.6,631z"/>
                                            <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M397.9,630.3v1.4
                                                c0,0.6-0.5,1.1-1.1,1.1h-15c-0.6,0-1.1-0.5-1.1-1.1v-1.4c0-0.6,0.5-1.1,1.1-1.1h15C397.4,629.2,397.9,629.7,397.9,630.3z
                                                M381.3,631.8c0,0.3,0.2,0.5,0.5,0.5h15c0.3,0,0.5-0.2,0.5-0.5v-1.4c0-0.3-0.2-0.5-0.5-0.5h-15c-0.3,0-0.5,0.2-0.5,0.5
                                                V631.8z"/>
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M369.8,608.6H385
                                        c8,0,14.4,6.5,14.4,14.4v54.3c0,1.5,1.2,2.7,2.7,2.7h30.8c1.5,0,2.7-1.2,2.7-2.7v-90c0-1.5-1.2-2.7-2.7-2.7h-28.7h-4.8h-29.6
                                        c-1.5,0-2.7,1.2-2.7,2.7v18.6C367.1,607.4,368.3,608.6,369.8,608.6z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M435.9,587.4v90c0,1.6-1.3,3-3,3h-30.8
                                        c-1.6,0-3-1.3-3-3v-54.3c0-7.8-6.3-14.1-14.1-14.1h-15.2c-1.6,0-3-1.3-3-3v-18.6c0-1.6,1.3-3,3-3h63.1
                                        C434.5,584.4,435.9,585.7,435.9,587.4z M399.7,677.3c0,1.3,1.1,2.4,2.4,2.4h30.8c1.3,0,2.4-1.1,2.4-2.4v-90
                                        c0-1.3-1.1-2.4-2.4-2.4h-63.1c-1.3,0-2.4,1.1-2.4,2.4v18.6c0,1.3,1.1,2.4,2.4,2.4H385c8.1,0,14.7,6.6,14.7,14.7V677.3z"/>
                                </g>
                                <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M432.1,584.7V680c0,0.2-0.1,0.3-0.3,0.3
                                    c-0.2,0-0.3-0.1-0.3-0.3v-95.3c0-0.2,0.1-0.3,0.3-0.3C432,584.4,432.1,584.5,432.1,584.7z"/>
                                <g>
                                    <g>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M421.4,630.9c-1.5,0-2.6,1.9-2.6,4.2
                                            c0,2.3,1.2,4.2,2.6,4.2c1.5,0,2.6-1.9,2.6-4.2C424.1,632.8,422.9,630.9,421.4,630.9z"/>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M424.2,635.1c0,2.4-1.2,4.3-2.8,4.3
                                            s-2.8-1.9-2.8-4.3s1.3-4.3,2.8-4.3S424.2,632.7,424.2,635.1z M418.9,635.1c0,2.2,1.1,4,2.5,4c1.4,0,2.5-1.8,2.5-4
                                            c0-2.2-1.1-4-2.5-4C420.1,631.1,418.9,632.8,418.9,635.1z"/>
                                    </g>
                                    <g>
                                        <path fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M426,613.3l-4.8,2.9
                                            c-0.3,0.2-0.5,0.5-0.5,0.9v18v18c0,0.3,0.2,0.7,0.5,0.9l4.8,2.9c0.4,0.2,0.9,0,0.9-0.5v-21.2v-21.2
                                            C426.9,613.4,426.4,613.1,426,613.3z"/>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M427,613.8v42.4c0,0.3-0.1,0.5-0.4,0.7
                                            c-0.2,0.1-0.5,0.1-0.8,0l-4.8-2.9c-0.3-0.2-0.6-0.6-0.6-1V617c0-0.4,0.2-0.8,0.6-1l4.8-2.9c0.2-0.1,0.5-0.1,0.8,0
                                            C426.9,613.3,427,613.6,427,613.8z M420.9,653.1c0,0.3,0.2,0.6,0.4,0.7l4.8,2.9c0.1,0.1,0.3,0.1,0.5,0
                                            c0.1-0.1,0.2-0.2,0.2-0.4v-42.4c0-0.2-0.1-0.3-0.2-0.4c-0.1-0.1-0.3-0.1-0.5,0l0,0l-4.8,2.9c-0.3,0.2-0.4,0.4-0.4,0.7V653.1z
                                            "/>
                                    </g>
                                </g>
                                <g>
                                    <path fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M416.6,627.1V643c0,2.9-2.4,5.2-5.2,5.2
                                        h-1.3c-2.9,0-5.2-2.4-5.2-5.2v-15.9c0-2.9,2.4-5.2,5.2-5.2h1.3C414.3,621.8,416.6,624.2,416.6,627.1z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M416.8,623.4v23.3c0,1-0.8,1.7-1.7,1.7
                                        h-8.7c-1,0-1.7-0.8-1.7-1.7v-23.3c0-1,0.8-1.7,1.7-1.7h8.7C416,621.7,416.8,622.5,416.8,623.4z M405,646.7
                                        c0,0.8,0.6,1.4,1.4,1.4h8.7c0.8,0,1.4-0.6,1.4-1.4v-23.3c0-0.8-0.6-1.4-1.4-1.4h-8.7c-0.8,0-1.4,0.6-1.4,1.4V646.7z"/>
                                </g>
                                <g>
                                    <path fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M415.2,653.4v1.6c0,1.4-1.1,2.5-2.5,2.5
                                        h-2.2c-1.8,0-3.3-1.5-3.3-3.3v0c0-1.8,1.5-3.3,3.3-3.3h2.2C414.1,650.9,415.2,652,415.2,653.4z"/>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M415.4,653.4v1.6c0,1.5-1.2,2.7-2.7,2.7
                                        h-2.2c-1.9,0-3.5-1.6-3.5-3.5c0-1.9,1.6-3.5,3.5-3.5h2.2C414.2,650.7,415.4,651.9,415.4,653.4z M407.3,654.2
                                        c0,1.7,1.4,3.2,3.2,3.2h2.2c1.3,0,2.4-1.1,2.4-2.4v-1.6c0-1.3-1.1-2.4-2.4-2.4h-2.2C408.8,651,407.3,652.4,407.3,654.2z"/>
                                </g>
                                <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M415.4,654.2c0,0.1-0.1,0.2-0.2,0.2h-8
                                    c-0.1,0-0.2-0.1-0.2-0.2s0.1-0.2,0.2-0.2h8C415.3,654,415.4,654.1,415.4,654.2z"/>
                                <g>
                                    <g>
                                        
                                            <rect x="404" y="599.4" fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="17.5" height="12.5"/>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M421.6,599.2V612h-17.8v-12.8H421.6z
                                            M421.3,611.7v-12.2h-17.2v12.2H421.3z"/>
                                    </g>
                                    <g>
                                        
                                            <rect x="403.2" y="595.1" transform="matrix(0.9406 -0.3395 0.3395 0.9406 -179.7005 175.5798)" fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" width="17.5" height="12.5"/>
                                        <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M422.5,604.4l-16.7,6l-4.3-12l16.7-6
                                            L422.5,604.4z M406,610l16.2-5.8l-4.1-11.5l-16.2,5.8L406,610z"/>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                    <g>
                        <path fill="#425563" d="M501.9,574.2h-1v6h1V574.2L501.9,574.2z M501.9,584.2h-1v6h1V584.2L501.9,584.2z M501.9,594.2h-1v6h1
                            V594.2L501.9,594.2z M501.9,604.2h-1v6h1V604.2L501.9,604.2z M501.9,614.2h-1v6h1V614.2L501.9,614.2z M501.9,624.2h-1v6h1V624.2
                            L501.9,624.2z M501.9,634.2h-1v6h1V634.2L501.9,634.2z M501.9,644.2h-1v6h1V644.2L501.9,644.2z M501.9,654.2h-1v6h1V654.2
                            L501.9,654.2z M501.9,664.2h-1v6h1V664.2L501.9,664.2z M501.9,674.2h-1v2.6h1l0,0l0,0l0,0l0,0c1,0,2.4,0,2.4,0v-1h-2.4V674.2
                            L501.9,674.2z M508,670.4h-1v6h1V670.4L508,670.4z M508,660.4h-1v6h1V660.4L508,660.4z M508,650.4h-1v6h1V650.4L508,650.4z
                            M508,640.4h-1v6h1V640.4L508,640.4z M508,630.4h-1v6h1V630.4L508,630.4z M508,620.4h-1v6h1V620.4L508,620.4z M508,610.4h-1v6h1
                            V610.4L508,610.4z M508,600.4h-1v6h1V600.4L508,600.4z M508,590.4h-1v6h1V590.4L508,590.4z M508,580.4h-1v6h1V580.4L508,580.4z
                            M508,571.2h-6v1h5v4.2h1V571.2L508,571.2z"/>
                    </g>
                    <rect x="500.9" y="536" fill="#425563" width="7.1" height="35.2"/>
                    <polygon fill="#425563" points="508,676.8 508,716.5 451.9,716.5 451.9,711.5 500.9,711.5 500.9,676.8 		"/>
                    <g>
                        <text transform="matrix(1 0 0 1 440.9771 571.23)" fill="#425563" font-family="Fredoka, sans-serif" font-size="12px">Study</text>
                    </g>
                </g>
            </g>
            {/* OPTION: Deluxe Master Bath 2*/}
            <g id="DMBA2" data-option="DMBA2" style={{ display: active.DMBA2 ? "block" : "none" }} fill="#CC0001">
                <g id="shr-config-2">
                        <rect x="817.6" y="234.6" fill="#EAEAEA" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" width="50.9" height="144.7"/>
                    <path fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" d="M848.2,245.3c-0.6-0.2-1.1-0.3-1.5-0.4
                        c-0.5-0.1-0.9-0.2-1.3-0.3c-0.5-0.1-0.9-0.1-1.3-0.1c-0.3,0-0.5,0-0.7,0c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3,0
                        c-0.5,0-0.9,0-1.3,0.1c-0.5,0.1-1,0.2-1.4,0.3c-0.4,0.1-0.8,0.2-1.2,0.3c-0.2,0.1-0.4,0.1-0.6,0.2c-0.1,0.1-0.2,0.1-0.3,0.1
                        c-0.1,0.1-0.2,0.1-0.3,0.2c-0.4,0.1-0.8,0.3-1.2,0.5s-0.8,0.4-1.1,0.6c-0.8,0.5-1.6,1-2.3,1.5c-0.1,0.1-0.2,0.1-0.3,0.2
                        c-0.1,0.1-0.1,0.2-0.2,0.3c-0.1,0.1-0.3,0.3-0.5,0.4c-0.3,0.3-0.7,0.6-1,0.9c-0.3,0.3-0.6,0.7-0.8,1c-0.3,0.3-0.7,0.7-0.9,0.9
                        c-0.6,0.8-1.1,1.5-1.5,2.3c-0.1,0.1-0.1,0.2-0.2,0.3c-0.1,0.1-0.1,0.1-0.2,0.2c-0.1,0.2-0.2,0.4-0.3,0.6c-0.2,0.3-0.4,0.7-0.7,1.1
                        c-0.4,0.8-0.8,1.5-1.1,2.4c-0.3,0.8-0.7,1.7-1,2.5c-0.3,0.8-0.6,1.7-0.8,2.6c-0.2,0.8-0.4,1.7-0.6,2.6c-0.1,0.2-0.1,0.4-0.1,0.7
                        c-0.1,0.1-0.1,0.3-0.2,0.6c-0.1,0.4-0.1,0.9-0.2,1.3c-0.1,0.8-0.3,1.7-0.4,2.7c0,0.4,0,0.9-0.1,1.3c0,0.2,0,0.4,0,0.6
                        c0,0.2,0,0.4,0,0.6c-0.1,1-0.1,1.9-0.1,2.8c0.1,0.9,0.1,1.8,0.1,2.7c0.1,0.4,0.1,0.9,0.2,1.3c0,0.2,0,0.4,0.1,0.6
                        c0,0.3,0,0.5,0,0.7c0.1,0.9,0.3,1.8,0.4,2.7c0.2,0.8,0.4,1.7,0.6,2.6c0.1,0.2,0.1,0.4,0.2,0.7c0.1,0.1,0.1,0.3,0.2,0.6
                        c0.1,0.4,0.2,0.8,0.4,1.2c0.2,0.8,0.5,1.7,0.8,2.5c0.3,0.8,0.7,1.7,1.1,2.5c0.4,0.8,0.8,1.6,1.2,2.4c0.3,0.4,0.6,0.8,0.8,1.1
                        c0.1,0.2,0.2,0.4,0.3,0.6c0.1,0.1,0.3,0.3,0.4,0.4c0.6,0.8,1.1,1.5,1.8,2.2c0.6,0.7,1.2,1.3,1.9,1.9c0.3,0.3,0.7,0.7,1,0.9
                        c0.2,0.1,0.4,0.3,0.5,0.4c0.1,0.1,0.3,0.2,0.5,0.3c0.4,0.3,0.8,0.6,1.1,0.8c0.4,0.2,0.8,0.4,1.2,0.6c0.4,0.2,0.8,0.4,1.2,0.5
                        c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0,0.2,0,0.3,0.1c0.2,0.1,0.4,0.1,0.6,0.2c0.4,0.1,0.9,0.2,1.3,0.3c0.4,0.1,0.9,0.1,1.3,0.2
                        c0.2,0,0.4,0,0.6,0.1c0.3,0,0.5,0,0.7,0.1c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.3,0c0.3,0,0.5,0,0.7,0c0.5-0.1,0.9-0.1,1.3-0.2
                        s0.8-0.1,1.2-0.2c0.5-0.1,0.9-0.3,1.3-0.4c0.2-0.1,0.4-0.1,0.6-0.2c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.3-0.1,0.4-0.1
                        c0.4-0.2,0.8-0.4,1.1-0.6c0.4-0.2,0.8-0.4,1.2-0.6c0.8-0.5,1.5-1,2.2-1.5c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.1-0.1,0.2-0.2
                        c0.2-0.1,0.4-0.3,0.5-0.5c0.3-0.3,0.7-0.6,0.9-0.8c0.3-0.3,0.7-0.7,0.9-1c0.3-0.3,0.6-0.7,0.8-1c0.6-0.7,1.1-1.4,1.7-2.2
                        c0.2-0.3,0.4-0.7,0.7-1.1c0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.1,0.2-0.3,0.3-0.5c0.4-0.8,0.8-1.7,1.1-2.5c0.2-0.4,0.4-0.8,0.6-1.2
                        c0.1-0.2,0.1-0.4,0.2-0.6s0.1-0.4,0.2-0.6c0.3-0.8,0.6-1.7,0.8-2.5c0.3-0.9,0.5-1.8,0.7-2.7c0.2-0.8,0.4-1.7,0.5-2.6
                        c0.1-0.9,0.2-1.8,0.3-2.7c0-0.2,0-0.4,0.1-0.6c0-0.3,0-0.5,0-0.7c0.1-0.5,0.1-0.9,0.1-1.3c0-0.9,0-1.8,0-2.7c0-0.5,0-0.9,0-1.3
                        c0-0.5,0-0.9-0.1-1.3c-0.1-0.9-0.1-1.8-0.2-2.7c-0.1-0.9-0.3-1.8-0.5-2.7c0-0.2,0-0.4-0.1-0.6c0-0.2-0.1-0.4-0.2-0.7
                        c-0.1-0.4-0.1-0.8-0.2-1.2c-0.3-0.9-0.5-1.8-0.7-2.6c-0.3-0.8-0.7-1.7-1-2.6c-0.3-0.8-0.6-1.5-1-2.4c-0.2-0.4-0.4-0.8-0.6-1.2
                        c-0.1-0.1-0.3-0.3-0.4-0.5c-0.1-0.2-0.2-0.4-0.3-0.6c-0.4-0.8-0.9-1.5-1.4-2.3c-0.3-0.3-0.6-0.7-0.8-1c-0.1-0.2-0.3-0.4-0.4-0.5
                        c-0.1-0.2-0.3-0.4-0.5-0.5c-0.6-0.7-1.2-1.3-1.9-2c-0.3-0.3-0.7-0.6-1-0.8c-0.3-0.3-0.7-0.6-1-0.8c-0.2-0.1-0.4-0.2-0.5-0.3
                        c-0.1-0.1-0.2-0.1-0.3-0.2c-0.1-0.1-0.2-0.1-0.3-0.2c-0.3-0.3-0.8-0.5-1.2-0.6c-0.4-0.2-0.8-0.4-1.2-0.6c-0.1-0.1-0.3-0.1-0.6-0.2
                        C848.4,245.4,848.3,245.4,848.2,245.3z"/>
                    <path fill="#EAEAEA" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" d="M843.3,310.2c3.2,0,6.3-0.9,9.1-2.6
                        c2.8-1.7,5.2-4.1,7.3-7.2c2.1-3,3.8-6.6,5-10.6c1.2-4,1.8-8.3,1.9-13c-0.1-4.6-0.7-8.9-1.9-13c-1.2-4-2.8-7.5-5-10.6
                        c-2.1-3-4.6-5.4-7.4-7.1c-2.8-1.7-5.7-2.6-9-2.7c-3.2,0.1-6.3,1-9.1,2.7c-2.8,1.7-5.3,4.1-7.3,7.1c-2.1,3.1-3.8,6.6-5.1,10.6
                        c-1.2,4.1-1.8,8.4-1.8,13c0,4.7,0.6,9,1.8,13c1.2,4.1,2.9,7.6,5.1,10.6c2.1,3.1,4.5,5.5,7.3,7.2
                        C837.1,309.3,840.1,310.2,843.3,310.2z"/>
                    <path fill="#EAEAEA" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" d="M820.1,326c-0.6,0.3-0.9,0.7-0.9,1.2V374
                        c0,0.5,0.3,0.9,0.9,1.2V326h0.1c0.6-0.4,1.3-0.6,2.2-0.6h42c0.9,0,1.6,0.2,2.2,0.5v0.1c0.7,0.3,1,0.7,1,1.2V374
                        c0,0.5-0.3,0.9-1,1.2c-0.6,0.4-1.3,0.6-2.2,0.6h-20.3l-0.7,1.1l-0.9-1.1h-20.1c-0.9-0.1-2.3-0.6-2.3-0.6"/>
                    <polyline fill="#EAEAEA" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" points="844.2,375.8 846.6,369.6 
                        840.2,369.6 842.6,375.8 		"/>
                    <line fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" x1="844.9" y1="349" x2="866.6" y2="325.9"/>
                    <line fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" x1="844.5" y1="351.7" x2="866.6" y2="375.2"/>
                    <path fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" d="M855.3,295.7c0.1-0.1,0.3-0.3,0.5-0.5
                        c0.1-0.2,0.3-0.4,0.5-0.6c0.1-0.3,0.2-0.5,0.3-0.7c0.1-0.1,0.2-0.2,0.3-0.3c0-0.1,0-0.3,0.1-0.4c0.3-0.6,0.7-1.3,0.9-2
                        c0.2-0.7,0.4-1.4,0.7-2.1c0.1-0.6,0.3-1.3,0.5-2.1c0.2-0.7,0.4-1.4,0.5-2.1c0.1-0.7,0.2-1.4,0.3-2.2c0.1-0.1,0.1-0.3,0.1-0.5
                        s0-0.4,0.1-0.5c0.1-0.3,0.1-0.7,0.1-1.1c0.1-0.7,0.1-1.4,0.1-2.2c0.1-0.7,0.1-1.4,0.1-2.2c0-0.7,0-1.4-0.1-2.2
                        c-0.1-0.7-0.1-1.4-0.2-2.1c-0.1-0.3-0.1-0.7-0.2-1.1c0-0.2,0-0.4,0-0.5c-0.1-0.1-0.1-0.3-0.1-0.5c-0.1-0.8-0.3-1.5-0.5-2.2
                        c-0.3-1.4-0.7-2.8-1.2-4.1c-0.2-0.6-0.4-1.3-0.7-2c-0.2-0.3-0.4-0.7-0.5-1c-0.1-0.3-0.3-0.7-0.5-0.9c1.2,5.2,1.9,10.4,2,15.6
                        c0.2,5.2-0.2,10.5-1.1,15.7c0,0.2,0,0.4-0.1,0.6c0,0.1,0,0.2-0.1,0.3c0,0.1,0,0.3,0,0.4c-0.1,0.4-0.3,0.8-0.5,1.2
                        c-0.1,0.3-0.3,0.7-0.6,1.1c0,0.1,0,0.1-0.1,0.2c-0.1,0.1-0.1,0.2-0.2,0.3C855.5,295.4,855.4,295.6,855.3,295.7z"/>
                    <path fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" d="M852.2,259.6c-0.1-0.3-0.2-0.5-0.3-0.7
                        c-0.1-0.3-0.3-0.5-0.5-0.7c-0.1-0.2-0.2-0.4-0.4-0.6c-0.1-0.1-0.1-0.2-0.2-0.3l-0.3-0.3h-0.1v-0.1c-0.1-0.1-0.1-0.1-0.2-0.2
                        c-0.1-0.1-0.1-0.1-0.2-0.2c-0.2-0.2-0.4-0.4-0.6-0.6c-0.1-0.2-0.3-0.4-0.5-0.5c-0.2-0.2-0.4-0.4-0.6-0.5c-0.2-0.2-0.4-0.4-0.7-0.5
                        c-0.3-0.2-0.6-0.3-0.9-0.2c-0.3,0.1-0.6,0.2-0.8,0.5c-0.1,0.1-0.1,0.3-0.2,0.4c-0.3,1-0.9,1.5-1.8,1.8c-0.6,0.1-1.2,0-1.8-0.3
                        c-0.5-0.3-0.8-0.8-0.9-1.4c-0.1-0.3-0.3-0.6-0.6-0.7c-0.2-0.2-0.5-0.3-0.9-0.2c-0.1,0.1-0.3,0.1-0.4,0.2c-0.3,0.1-0.5,0.3-0.7,0.5
                        c-0.2,0.1-0.4,0.3-0.5,0.5c-0.3,0.1-0.5,0.3-0.6,0.5c-0.2,0.2-0.4,0.4-0.5,0.6c-0.3,0.1-0.5,0.3-0.6,0.5v0.1H836
                        c-0.1,0.1-0.1,0.1-0.2,0.2c-0.1,0.1-0.1,0.2-0.2,0.3l-0.1,0.1c-0.1,0.1-0.1,0.1-0.2,0.2c0,0.1-0.1,0.2-0.2,0.3
                        c-0.1,0.2-0.2,0.4-0.4,0.7c-0.2,0.4-0.4,0.9-0.6,1.4c-0.1,0.2-0.1,0.4-0.1,0.7c-0.1,0.1-0.1,0.1-0.1,0.2s0,0.1,0,0.2
                        c-0.1,0.1-0.1,0.3-0.1,0.4c-0.2,1-0.4,2.1-0.6,3.1c-0.3,2.1-0.6,4.1-0.8,6.2c0,0.3,0,0.6,0,0.8c-0.1,0.3-0.1,0.6-0.1,0.8
                        c0,0.5,0,1-0.1,1.5c0,1.1,0,2.2,0,3.2c-0.1,2.1,0,4.2,0.2,6.3c0,0.6,0,1.1,0.1,1.7c0.1,0.5,0.1,1,0.2,1.5c0.1,0.5,0.1,1,0.2,1.5
                        c0,0.1,0,0.3,0,0.4c0.1,0.1,0.1,0.3,0.1,0.4c0,0.1,0,0.2,0.1,0.3c0.1,0.1,0.1,0.3,0.1,0.4c0.1,0.3,0.1,0.5,0.2,0.7
                        c0.1,0.1,0.1,0.3,0.2,0.4c0,0.1,0,0.1,0.1,0.1c0,0.1,0,0.2,0.1,0.3c0.1,0.2,0.2,0.4,0.3,0.6c0.2,0.2,0.4,0.4,0.5,0.6
                        c0.2,0.2,0.4,0.4,0.5,0.6c0.1,0,0.1,0,0.2,0.1l0.2,0.1c0.1,0.1,0.1,0.2,0.2,0.3c0.3,0.1,0.5,0.3,0.7,0.4c0.2,0.1,0.4,0.2,0.6,0.3
                        c0.1,0.1,0.3,0.1,0.4,0.2c0.1,0.1,0.1,0.1,0.2,0.1c0.1,0,0.1,0,0.2,0.1c0.2,0.1,0.4,0.1,0.7,0.2l0.7,0.1c0.3,0,0.6,0,0.8,0.1
                        c0.3,0.1,0.6,0.1,0.8,0.1c0.2,0,0.4,0,0.7,0.1c0.6,0,1.1,0,1.5,0c1.1,0,2.2-0.1,3.2-0.2c0.1,0,0.3,0,0.4-0.1c0.1,0,0.3,0,0.4,0
                        c0.1,0,0.2,0,0.3-0.1h0.2c0.1,0,0.1,0,0.2,0c0.3-0.1,0.6-0.1,0.8-0.2c0.1-0.1,0.2-0.1,0.3-0.1c0.1-0.1,0.1-0.1,0.2-0.2
                        c0.1,0,0.1,0,0.2,0c0.2-0.1,0.4-0.3,0.6-0.4c0.3-0.1,0.5-0.3,0.6-0.4c0.3-0.2,0.5-0.4,0.6-0.5c0.1-0.1,0.2-0.2,0.3-0.3
                        c0.1-0.1,0.1-0.2,0.2-0.3c0.2-0.2,0.4-0.4,0.5-0.6c0.1-0.2,0.3-0.4,0.4-0.6c0.1-0.1,0.1-0.3,0.2-0.4c0-0.1,0-0.1,0.1-0.1
                        c0-0.1,0-0.2,0-0.3c0.1-0.2,0.2-0.4,0.3-0.7c0.1-0.2,0.1-0.4,0.2-0.7c0-0.1,0-0.3,0-0.4c0.1-0.1,0.1-0.3,0.1-0.4
                        c0.1-0.5,0.1-1,0.2-1.5c0.1-1,0.2-2.1,0.3-3.1c0.2-2.1,0.3-4.3,0.3-6.4c0-0.5,0-1,0-1.5c-0.1-0.6-0.1-1.1-0.1-1.5
                        c-0.1-1.1-0.1-2.2-0.2-3.2c-0.1-1-0.2-2.1-0.3-3.1c-0.1-0.3-0.1-0.6-0.2-0.8c0-0.3,0-0.6-0.1-0.8c-0.1-0.5-0.1-1-0.2-1.5
                        c-0.1-0.5-0.2-1-0.3-1.5c-0.1-0.3-0.1-0.5-0.1-0.7c-0.1-0.3-0.1-0.6-0.2-0.8L852.2,259.6z"/>
                    <path fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" d="M839.4,248.6c-2,0.7-3.8,1.8-5.5,3.4
                        c-2.8,2.5-5.1,6-6.7,10.3c-1.7,4.3-2.5,9.1-2.6,14.4c0.1,5.4,0.9,10.2,2.6,14.5c1.7,4.3,3.9,7.7,6.7,10.3c2.8,2.5,5.8,3.8,9.3,3.9
                        c3.5-0.1,6.6-1.4,9.4-3.9c2.8-2.6,5.1-6.1,6.7-10.3c1.7-4.3,2.5-9.2,2.5-14.5c0-5.4-0.8-10.2-2.5-14.4c-1.7-4.3-3.9-7.8-6.7-10.3
                        c-1.7-1.6-3.5-2.7-5.5-3.3L839.4,248.6c1.2-0.3,2.5-0.5,3.8-0.5c1.4,0,2.7,0.2,3.9,0.6"/>
                    <path fill="#EAEAEA" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" d="M843.3,246.2c-3.9,0.1-7.3,1.4-10.3,4.1
                        c-3.1,2.8-5.5,6.4-7.3,10.9c-1.8,4.6-2.7,9.8-2.8,15.5c0.1,5.7,1,10.8,2.8,15.4c1.8,4.5,4.2,8.2,7.3,10.9c3,2.7,6.5,4.1,10.3,4.2
                        c3.8-0.1,7.2-1.5,10.2-4.2c3.1-2.8,5.5-6.4,7.3-10.9c1.8-4.5,2.7-9.7,2.8-15.4c-0.1-5.7-1-10.9-2.8-15.5
                        c-1.8-4.5-4.2-8.2-7.3-10.9C850.5,247.7,847.1,246.3,843.3,246.2z"/>
                    <path fill="#EAEAEA" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" d="M829.5,293.2c-0.3-0.6-0.6-1.3-0.8-2
                        c-0.3-0.7-0.5-1.4-0.7-2.1c-0.3-0.6-0.5-1.3-0.6-2.1c-0.2-0.7-0.4-1.4-0.5-2.1c-0.1-0.7-0.3-1.4-0.4-2.2c0-0.1,0-0.3,0-0.5
                        s0-0.4-0.1-0.5c0-0.3,0-0.7-0.1-1.1c-0.1-0.7-0.1-1.4-0.2-2.2c0-0.7,0-1.4,0-2.2c0-0.7,0.1-1.4,0.2-2.2c0-0.7,0-1.4,0.1-2.1
                        c0.1-0.3,0.1-0.7,0.2-1.1c0-0.2,0-0.4,0-0.5c0.1-0.1,0.1-0.3,0.1-0.5c0.1-0.8,0.3-1.5,0.5-2.2c0.3-1.4,0.7-2.8,1.2-4.1
                        c0.2-0.6,0.5-1.3,0.8-2c0.3-0.7,0.6-1.3,0.8-2c-1.1,5.2-1.7,10.3-1.9,15.5c-0.1,5.3,0.2,10.6,1.1,15.8c0.1,0.4,0.1,0.9,0.2,1.3
                        c0.1,0.4,0.3,0.8,0.5,1.1c0.1,0.2,0.2,0.4,0.3,0.6c0,0.1,0,0.2,0.1,0.3c0.1,0.1,0.1,0.2,0.1,0.3c0.3,0.4,0.5,0.8,0.7,1.1
                        c-0.1-0.2-0.3-0.4-0.4-0.6c-0.2-0.2-0.4-0.4-0.5-0.6c-0.2-0.3-0.3-0.5-0.4-0.7C829.8,293.7,829.7,293.4,829.5,293.2z"/>
                    <path fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" d="M841.8,254.6c0,0.4,0.1,0.8,0.4,1
                        c0.3,0.3,0.6,0.5,1,0.5c0.4,0,0.8-0.2,1.1-0.5c0.3-0.2,0.4-0.6,0.4-1c0-0.4-0.1-0.8-0.4-1c-0.3-0.3-0.7-0.4-1.1-0.4
                        c-0.4,0-0.8,0.1-1,0.4C841.9,253.8,841.8,254.2,841.8,254.6z"/>
                    <circle fill="#EAEAEA" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" cx="842.6" cy="350.2" r="2.3"/>
                    <line fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" x1="819.6" y1="326.3" x2="840.6" y2="349"/>
                    <line fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" x1="819.9" y1="375.1" x2="841" y2="351.7"/>
                </g>

            </g>
            {/* OPTION: Center Meet Doors*/}
            <g id="centerMeetSlider" data-option="centerMeetSlider" style={{ display: active.centerMeetSlider ? "block" : "none" }} fill="#CC0001">
                <g id="center-meet-door">
                    <rect x="372.9" y="278.5" fill="#EAEAEA" width="121.1" height="14"/>
                    <rect x="372.9" y="278.5" fill="none" stroke="#425563" stroke-miterlimit="10" width="21.8" height="14"/>
                    <rect x="372.9" y="278.5" fill="none" stroke="#425563" stroke-miterlimit="10" width="21.8" height="3.5"/>
                    <rect x="372.9" y="282" fill="none" stroke="#425563" stroke-miterlimit="10" width="21.8" height="3.5"/>
                    <rect x="372.9" y="285.3" fill="none" stroke="#425563" stroke-miterlimit="10" width="21.8" height="3.5"/>
                    <rect x="472.2" y="278.5" fill="none" stroke="#425563" stroke-miterlimit="10" width="21.8" height="14"/>
                    <rect x="472.2" y="278.5" fill="none" stroke="#425563" stroke-miterlimit="10" width="21.8" height="3.5"/>
                    <rect x="472.2" y="282" fill="none" stroke="#425563" stroke-miterlimit="10" width="21.8" height="3.5"/>
                    <rect x="472.2" y="285.3" fill="none" stroke="#425563" stroke-miterlimit="10" width="21.8" height="3.5"/>
                    <rect x="395.3" y="287.1" fill="none" stroke="#425563" stroke-miterlimit="10" width="32.6" height="1.8"/>
                    <rect x="439.1" y="287.1" fill="none" stroke="#425563" stroke-miterlimit="10" width="32.6" height="1.8"/>
                </g>
            </g>
            {/* OPTION: Multi Slide Doors*/}
            <g id="multiSlide" data-option="multiSlide" style={{ display: active.multiSlide ? "block" : "none" }} fill="#CC0001">
                <g id="multi-slide">
                    <rect x="372.9" y="278.5" fill="#EAEAEA" width="121.7" height="14"/>
                    <g>
                        <rect x="373" y="280.9" fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="40.6" height="2.6"/>
                        <rect x="411.4" y="283.5" fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="40.6" height="2.6"/>
                        <rect x="447.4" y="284.8" fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="40.6" height="2.6"/>
                    </g>
                </g>
            </g>
            {/* OPTION: Multi Slide Doors*/}
            <g id="cornerJoin" data-option="cornerJoin" style={{ display: active.cornerJoin ? "block" : "none" }} fill="#CC0001">
                <g id="corner-join">
                    <rect x="372.9" y="278.5" fill="#EAEAEA" width="154.8" height="14"/>
                    
                        <rect x="443.4" y="200.6" transform="matrix(6.123234e-17 -1 1 6.123234e-17 313.0789 728.3099)" fill="#EAEAEA" width="154.5" height="14"/>
                    <g>
                        <rect x="405.1" y="280.9" fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="40.6" height="2.6"/>
                        <rect x="443.5" y="283.5" fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="40.6" height="2.6"/>
                        <rect x="479.5" y="284.8" fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="40.6" height="2.6"/>
                    </g>
                    <g>
                        
                            <rect x="496.5" y="185.3" transform="matrix(1.681145e-05 1 -1 1.681145e-05 703.3971 -330.2892)" fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="40.6" height="2.6"/>
                        
                            <rect x="499.1" y="223.6" transform="matrix(1.681145e-05 1 -1 1.681145e-05 744.3228 -294.4954)" fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="40.6" height="2.6"/>
                        
                            <rect x="500.4" y="259.6" transform="matrix(1.681145e-05 1 -1 1.681145e-05 781.6131 -259.7713)" fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" width="40.6" height="2.6"/>
                    </g>
                    <rect x="372.9" y="281.4" fill="#425563" width="30.7" height="7.1"/>
                    
                        <rect x="508.5" y="141.6" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 669.0356 -378.6475)" fill="#425563" width="30.7" height="7.1"/>
                </g>
            </g>
            {/* OPTION: Multi Slide Doors*/}
            <g id="bedFour" data-option="bedFour" style={{ display: active.bedFour ? "block" : "none" }} fill="#CC0001">
                
                <g id="opt-br-4">
                    <polygon fill="#EAEAEA" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" points="873,691.6 701.8,691.6 701.8,683 
                        695.6,683 695.6,656.8 701.8,656.8 701.8,536 873.4,536 873.4,586.9 875,586.9 875,641.1 873.3,641.1 		"/>
                    <g id="Bedroom_2_00000083062411334664809800000007186531874813324174_">
                        
                            <image overflow="visible" opacity="0.4" width="74" height="110" href="data:image/png;base64,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" transform="matrix(1 0 0 1 764 535)">
                        </image>
                        <g>
                            <g>
                                <g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M825.8,635h-53.5c-0.6,0-1-0.5-1-1
                                        v-86.2c0-2.3,1.9-4.2,4.2-4.2h46.9c2.3,0,4.2,1.9,4.2,4.2l0,86.4C826.6,634.6,826.3,635,825.8,635z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M825.9,635.2l-53.7,0
                                        c-0.6,0-1.1-0.5-1.1-1.1l0-86.9c0-2.1,1.7-3.9,3.9-3.9H823c2.1,0,3.9,1.7,3.9,3.9v87.1C826.8,634.8,826.4,635.2,825.9,635.2z
                                        M774.9,543.8c-1.9,0-3.4,1.5-3.4,3.4v86.9c0,0.4,0.3,0.7,0.7,0.7h53.7c0.3,0,0.5-0.2,0.5-0.5v-87.1c0-1.9-1.5-3.4-3.4-3.4
                                        L774.9,543.8z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M825.5,547.8l-53.4,0
                                        c-1.5,0-2.6-1.2-2.6-2.6v-2.8c0-1.5,1.2-2.6,2.6-2.6l53.4,0c1.5,0,2.6,1.2,2.6,2.6v2.8C828.2,546.6,827,547.8,825.5,547.8z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M825.9,548h-54.1
                                        c-1.4,0-2.5-1.1-2.5-2.5v-3.5c0-1.4,1.1-2.5,2.5-2.5h54.1c1.4,0,2.5,1.1,2.5,2.5v3.5C828.4,546.9,827.3,548,825.9,548z
                                        M771.8,539.9c-1.1,0-2.1,0.9-2.1,2.1v3.5c0,1.1,0.9,2.1,2.1,2.1h54.1c1.1,0,2.1-0.9,2.1-2.1v-3.5c0-1.1-0.9-2.1-2.1-2.1
                                        L771.8,539.9z"/>
                                </g>
                                <g>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M770.6,585.5
                                        c-0.3,4.1-0.8,28.8-0.3,32.2c0.5,3.4-1.5,13.9,0.2,13.8c1.7-0.1,23.5,1.3,28.6,1.8c5,0.6,15.9,1.8,19.3,2.6
                                        c3.4,0.7,9,0.4,9.3-0.7c0.3-1.1,0.2-47.9-0.5-50.6C826.6,581.9,770.6,585.5,770.6,585.5z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M822.6,636.5c-1.5,0-3.1-0.1-4.3-0.4
                                        c-3.7-0.8-16.7-2.3-19.2-2.6c-5-0.6-26.9-2-28.5-1.8c-0.2,0-0.3,0-0.5-0.2c-0.7-0.7-0.5-3.3-0.2-7.5c0.2-2.4,0.4-5,0.2-6.3
                                        c-0.5-3.4,0-28.1,0.3-32.3l0-0.2l0.2,0c0.1,0,14.1-0.9,28.1-1.4c28.3-1.1,28.6,0.2,28.7,0.8c0.5,2.1,0.9,49,0.5,50.7
                                        C827.6,636.1,825.2,636.5,822.6,636.5z M770.9,631.3c3.4,0,23.2,1.3,28.2,1.9c2.6,0.3,15.5,1.8,19.3,2.6
                                        c3.6,0.8,8.8,0.3,9.1-0.6c0.1-0.6,0.2-11.9,0.1-24.7c-0.1-11.6-0.3-24.4-0.6-25.8c-0.1-0.4-2.5-1.4-28.4-0.4
                                        c-13,0.5-26.1,1.3-27.8,1.4c-0.3,4.7-0.7,28.6-0.3,32c0.2,1.4,0,3.9-0.2,6.4c-0.3,3.1-0.5,6.6,0,7.1c0,0,0.1,0,0.1,0
                                        C770.6,631.3,770.7,631.3,770.9,631.3z"/>
                                </g>
                                <g>
                                    <path fill="#EFE5D8" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M828.2,586.3c-0.5,0.5-11.5-1-20-1
                                        c-17.7,0.1-37.2,0.8-38.6,0.5c-1.1-0.2-1.1-3.8-1.1-7.3c0-3.2-0.3-6.2,0.7-7.1c1.9-1.8,56.4-1.9,58.7,0.6c1,1.1,0.9,3.9,1,6.6
                                        C828.9,582.1,829,585.5,828.2,586.3z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M827.4,586.7c-0.9,0-2.4-0.1-5.2-0.3
                                        c-3.9-0.3-9.3-0.8-14-0.7c-8.2,0.1-16.9,0.2-23.8,0.4c-8.2,0.2-14,0.3-14.8,0.1c-1.2-0.2-1.2-3.2-1.3-6.6l0-0.9
                                        c0-0.5,0-0.9,0-1.4c-0.1-2.8-0.1-5,0.7-5.8c1.4-1.3,25.5-1.6,41.1-1.2c7.6,0.2,16.9,0.7,17.9,1.8c0.9,1,0.9,3.1,1,5.4
                                        c0,0.4,0,0.9,0,1.3c0.1,3.5,0.3,6.9-0.6,7.8l0,0C828.2,586.6,828,586.7,827.4,586.7z M808.6,585.1c4.5,0,9.7,0.4,13.6,0.7
                                        c2.8,0.2,5.5,0.5,5.9,0.3c0.7-0.8,0.6-4.4,0.5-7.5c0-0.4,0-0.9,0-1.3c-0.1-2.2-0.1-4.3-0.9-5.1c-0.3-0.3-2.3-1.2-17.6-1.7
                                        c-18-0.5-39.7,0-40.8,1.1c-0.7,0.7-0.7,3-0.6,5.5c0,0.5,0,0.9,0,1.4l0,0.9c0,2.7,0.1,6,0.9,6.2c0.8,0.2,6.9,0,14.8-0.1
                                        c7-0.1,15.6-0.3,23.8-0.4C808.3,585.1,808.4,585.1,808.6,585.1z"/>
                                </g>
                                <g>
                                    <path fill="#F4F2EF" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M779.2,551.3c-1.7,3.2-0.1,13.6,0,15.2
                                        c0.5,6.9,38.5,3.2,39.7,1.1c1-1.8,1.2-17-1.1-17.8c-1.1-0.4-10.9-1.2-20-1.1C788.6,548.9,779.9,550,779.2,551.3z"/>
                                    <path fill="#E2D0B5" stroke="#CCB596" stroke-width="0.25" stroke-miterlimit="10" d="M795.2,570.8c-4.3,0-8.4-0.3-11.4-1
                                        c-3.1-0.7-4.7-1.8-4.8-3.3c0-0.2-0.1-0.7-0.1-1.3c-0.4-3.4-1.3-11.2,0.2-14c0.8-1.5,10.3-2.5,18.8-2.6
                                        c9.1-0.1,18.9,0.7,20.1,1.1c0.4,0.1,0.7,0.5,1,1.2c1.4,3.6,1.2,15.3,0.2,16.9C818.4,569,806,570.8,795.2,570.8z M799.7,549
                                        c-0.6,0-1.2,0-1.8,0c-10.4,0.1-17.9,1.3-18.5,2.4l0,0c-1.4,2.7-0.5,10.5-0.1,13.8c0.1,0.6,0.1,1,0.1,1.3
                                        c0.1,1.3,1.6,2.2,4.5,2.9c10.9,2.5,34-0.5,34.8-1.9c0.9-1.5,1.1-13-0.3-16.5c-0.3-0.7-0.5-0.9-0.7-0.9
                                        C816.7,549.8,808.2,549,799.7,549z"/>
                                </g>
                            </g>
                        </g>
                    </g>
                    <rect x="701.8" y="632.3" fill="#425563" width="31.3" height="5.4"/>
                    <rect x="701.8" y="691.6" fill="#425563" width="171.6" height="4.9"/>
                    
                        <rect x="844.2" y="665.3" transform="matrix(-3.393448e-14 1 -1 -3.393448e-14 1538.6603 -203.1196)" fill="#425563" width="53.3" height="4.9"/>
                    
                        <rect x="844.2" y="557.2" transform="matrix(-3.393448e-14 1 -1 -3.393448e-14 1430.5631 -311.2167)" fill="#425563" width="53.3" height="4.9"/>
                    
                        <rect x="724.3" y="628.4" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 1362.017 -99.7783)" fill="#425563" width="13.3" height="5.4"/>
                    
                        <rect x="719.1" y="545.1" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 1278.7393 -183.0561)" fill="#425563" width="23.7" height="5.4"/>
                    <g>
                        <path fill="#425563" d="M732.3,561.3V593h-1.2v-31.8H732.3 M733.1,560.5h-2.7v33.3h2.7V560.5L733.1,560.5z"/>
                    </g>
                    <g>
                        <path fill="#425563" d="M730.6,592l0,32.4h-1.2V592H730.6 M731.3,591.2h-2.7v33.9h2.7L731.3,591.2L731.3,591.2z"/>
                    </g>
                    <rect x="701.8" y="536" fill="#DDE7ED" stroke="#425563" stroke-width="0.5" stroke-miterlimit="10" width="12.9" height="96.3"/>
                    <g>
                        <g>
                            <path fill="#425563" d="M870.5,587.9v52.2h-1v-52.2H870.5 M871.5,586.9h-3v54.2h3V586.9L871.5,586.9z"/>
                        </g>
                        <g>
                            <path fill="#425563" d="M874,587.9v52.2h-4.6v-52.2H874 M875,586.9h-6.6v54.2h6.6V586.9L875,586.9z"/>
                        </g>
                    </g>
                    <text transform="matrix(1 0 0 1 789.998 668.6295)" fill="#425563" font-family="Fredoka, sans-serif" font-size="12px">Bedroom 4</text>
                    <g>
                        <path fill="#425563" d="M725.7,660.1l1,1l-22.5,22.5l-1-1L725.7,660.1 M725.7,658.7l-23.9,23.9l2.4,2.4l23.9-23.9L725.7,658.7
                            L725.7,658.7z"/>
                    </g>
                    <path fill="none" stroke="#425563" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="2,2" d="M725.7,658.7
                        c0,0-11.6-6.8-23.9-1.9"/>
                </g>
            </g>
      </g>
    </g>
  </svg>

  );
}


// ❗ if you have a placeholder, TYPE IT so it matches Floor['SVG']
export const EmptySVG: React.FC<SVGProps> = () => null;

export const AugustaP740: Plan = {
  code: "AugustaP740",
  title: "Meet the Augusta",
  description:
    "As life changes, so do the ways in which we use our home. This plan was designed to grow and shift with you, whether you’re raising kids, hosting guests, or simply enjoying a quieter season. Designed for balance, this home offers privacy for peaceful moments and open spaces that bring people together. Your next chapter starts here.",
  floors: [
    {
      id: "main",
      name: "Main Level",
      SVG: AugustaP740mainSVG,
      options: [
        { key: "optionalStudy", label: "Optional Study" },
        { key: "DMBA2", label: "Deluxe Master Bath 2" },
        { key: "centerMeetSlider", label: "Opt. Center Meet Sliding Doors" },
        { key: "multiSlide", label: "Opt. Multi-Slide Doors" },
        { key: "cornerJoin", label: "Opt. Corner Join Doors" },
        { key: "bedFour", label: "Opt. Fourth Bedroom" },
      ],
    },
  ],
};
