import { useEffect, useRef } from "react";
import type { SVGProps } from "../types/floorplan";
import useFPState from "../store/useFPState";
import WaterSaverGame from "../components/games/WaterSaverGame";
import InsulationSavingsGame from "../components/games/InsulationSavingsGame";
import WindowIRGame from "../components/games/WindowIRGame";
import MudroomMiniGame from "../components/games/MudroomMiniGame";
import usePanZoomPreview from "../hooks/usePanZoomPreview";


// LIFESTYLE FEATURES
export function GreatRoomHotspot() {
  const { openGallery, openModal } = useFPState();

  const gallery = {
    id: "greatroom",
    title: "TRULY UNPLUG AT THE END OF DAY",
    text: `Research shows that TV is a sleep disruptor, delaying deep sleep. Thoughtful placement of the great room TV, away from bedroom walls, means you can stop the disruptions and start counting sheep.`,
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
      <circle className="dot" cx={260} cy={280} r={20} fill="#af272f" opacity={1} />
      <circle className="pulse" cx={260} cy={280} r={20} stroke="#af272f" fill="transparent" opacity={0.25} />
      <text x={260} y={284} textAnchor="middle" fill="white" fontSize={12}>
        1
      </text>
    </g>
  );
}
export function MudroomHotspot() {
  const { openGallery, openModal } = useFPState();

  const gallery = {
    id: "mudroom",
    title: `FIND YOUR LOST-AND-FOUND AT-HOME ZONE`,
    text: `You know the feeling… everyone walks in, drops their bags, 
    coats and paperwork, and suddenly the entryway turns into chaos. This thoughtful drop zone, complete with organized closets and built-in cabinetry, keeps everything in its place so your home stays calm and clutter-free.`,
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
      aria-label="Open mudroom gallary"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && open()}
      className="hotspot cursor-pointer"
    >
      <circle className="dot" cx={530} cy={720} r={20} fill="#af272f" opacity={1} />
      <circle className="pulse" cx={530} cy={720} r={20} fill="transparent" stroke="#af272f" opacity={1} />
      <text x={530} y={724} textAnchor="middle" fill="white" fontSize={12}>
        2
      </text>
    </g>
  );
}

export function GuestHotspot() {
  const { openGallery, openModal } = useFPState();

  const gallery = {
    title: "MAKE ROOM FOR GUESTS",
    text: "This guest suite has an attached living area and bath, perfect for a mother-in-law, live-in nanny or frequent out of town visitors.",
    index: 0,
    items: [
      {
        src: "https://www.richmondamerican.com//Content/Plans/Media-41334.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-41334.webp",
        alt: "Guest suite — view 1",
        meta: "View toward bed",
      },
      {
        src: "https://www.richmondamerican.com//Content/Plans/Media-41335.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-41335.webp",
        alt: "Guest suite — view 2",
        meta: "View toward sitting area",
      },
      {
        src: "https://www.richmondamerican.com//Content/Plans/Media-45982.jpg",
        thumb: "https://www.richmondamerican.com//Content/Plans/Media-45982.webp",
        alt: "Guest suite — view 3",
        meta: "View toward bath",
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
      aria-label="Open guest suite gallery"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => e.key === "Enter" && open()}
      className="hotspot cursor-pointer"
    >
      <circle className="dot" cx={900} cy={601} r={20} fill="#af272f" opacity={1} />
      <circle className="pulse" cx={900} cy={601} r={20} stroke="#af272f" fill="transparent" opacity={0.95} />
      <text x={900} y={605} textAnchor="middle" fill="white" fontSize={12}>
        3
      </text>
    </g>
  );
}

export function TowelHotspot() {
  const { setVideo, openModal } = useFPState();

  const media = {
    id: "towels",
    title: "TUCK AWAY TOWELS",
    text: "A linen closet in the laundry makes putting away sheets and towels a breeze.",
    src: "https://www.youtube.com/shorts/UG5inwV76dg", // or MP4/Vimeo
    thumb: "/assets/thumbs/mudroom.png",
  };

  const open = () => {
    setVideo(media);
    openModal(); 
  };

  return (
    <g
      role="button"
      aria-label="Open towel storage video"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => e.key === "Enter" && open()}
      className="hotspot cursor-pointer"
    >
      <circle className="dot" cx={640} cy={501} r={20} fill="#af272f" opacity={1} />
      <circle className="pulse" cx={640} cy={501} r={20} stroke="#af272f" fill="transparent" opacity={1} />
      <text x={640} y={505} textAnchor="middle" fill="white" fontSize={12}>
        4
      </text>
    </g>
  );
}

export function StorageHotspot() {
  const { setVideo, openModal } = useFPState();

  const media = {
    id: "storage",
    title: "UNLOCK EXTRA STORAGE",
    text: "With a 3-car garage, you have extra space to accomodate your lifestyle. Use the bonus bay for storage, a hobby zone or guest parking.",
    src: "https://www.youtube.com/shorts/UG5inwV76dg", // or MP4/Vimeo
    thumb: "/assets/thumbs/mudroom.png",
  };

  const open = () => {
    setVideo(media);
    openModal();
  };
  return (
    <g
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => e.key === "Enter" && open()}
      className="hotspot cursor-pointer"
    >
      <circle className="dot" cx={740} cy={911} r={20} fill="#af272f" opacity={1} />
      <circle className="pulse" cx={740} cy={911} r={20} stroke="#af272f" fill="transparent" opacity={1} />
      <text x={740} y={915} textAnchor="middle" fill="white" fontSize={12}>5</text>
    </g>
  );
}
export function QualityTimeHotspot() {
  const { setVideo, openModal } = useFPState();

  const media = {
    id: "qualitytime",
    title: "MAXIMIZE QUALITY TIME",
    text: "The basement recreation room is the perfect place to gather with family, play games, watch movies and connect.",
    src: "https://www.youtube.com/shorts/UG5inwV76dg", // or MP4/Vimeo
    thumb: "/assets/thumbs/mudroom.png",
  };

  const open = () => {
    setVideo(media);
    openModal();
  };

  return (
    <g
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => e.key === "Enter" && open()}
      className="hotspot cursor-pointer"
    >
      <circle className="dot" cx={500} cy={301} r={20} fill="#af272f" opacity={1} />
      <circle className="pulse" cx={500} cy={301} r={20} stroke="#af272f" fill="transparent" opacity={1} />
      <text x={500} y={305} textAnchor="middle" fill="white" fontSize={12}>1</text>
    </g>
  );
}
export function FlexHotspot() {
  const { setVideo, openModal } = useFPState();

  const media = {
    id: "flex",
    title: "FLEX IT YOUR WAY",
    text: "Need an extra bedroom? A second office? More storage? Flex space puts you in control.",
    src: "https://www.youtube.com/shorts/UG5inwV76dg", // or MP4/Vimeo
    thumb: "/assets/thumbs/mudroom.png",
  };

  const open = () => {
    setVideo(media);
    openModal();
  };

  return (
    <g
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => e.key === "Enter" && open()}
      className="hotspot cursor-pointer"
    >
      <circle className="dot" cx={710} cy={601} r={20} fill="#af272f" opacity={1} />
      <circle className="pulse" cx={710} cy={601} r={20} stroke="#af272f" fill="transparent" opacity={1} />
      <text x={710} y={605} textAnchor="middle" fill="white" fontSize={12}>2</text>
    </g>
  );
}
export function StoreTwoHotspot() {
  const { setVideo, openModal } = useFPState();

  const media = {
    id: "storetwo",
    title: "STORE IT OUT OF THE WAY",
    text: "Perfect for stashing your Christmas tree, ski equipment, and luggage—this 2 space helps keep your garage clutter-free and ready for everyday needs.",
    src: "https://www.youtube.com/shorts/UG5inwV76dg", // or MP4/Vimeo
    thumb: "/assets/thumbs/mudroom.png",
  };

  const open = () => {
    setVideo(media);
    openModal();
  };

  return (
    <g
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => e.key === "Enter" && open()}
      className="hotspot cursor-pointer"
    >
      <circle className="dot" cx={310} cy={1001} r={20} fill="#af272f" opacity={1} />
      <circle className="pulse" cx={310} cy={1001} r={20} stroke="#af272f" fill="transparent" opacity={1} />
      <text x={310} y={1005} textAnchor="middle" fill="white" fontSize={12}>3</text>
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

// Example: Opens the Compare (before/after) modal
export function BeforeAfterHotspot() {
  const { openCompare, openModal } = useFPState();

  const open = () => {
    openCompare({
      title: "Before vs After",
      text: "Slide to reveal the impressive storage space.",
      before: {
        src: "https://onlinedesign.richmondamerican.com/2025_Specials/Images/03_Touchscreen_IFP/after.jpg",
        alt: "Closet full of clothes",
        label: "Before",
      },
      after: {
        src: "https://onlinedesign.richmondamerican.com/2025_Specials/Images/03_Touchscreen_IFP/before.jpg",
        alt: "Empty Closet",
        label: "After",
      },
      start: 50, // initial split position
    });
    openModal();
  };

  return (
    <g
      role="button"
      aria-label="Open before and after comparison"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => e.key === "Enter" && open()}
      className="hotspot cursor-pointer"
    >
      {/* Adjust cx / cy to place this hotspot where you want on the floor plan */}
      <circle className="dot" cx={700} cy={350} r={20} fill="#34cceb" opacity={1} />
      <circle
        className="pulse"
        cx={700}
        cy={350}
        r={20}
        stroke="#34cceb"
        fill="transparent"
        opacity={1}
      />
      <text x={700} y={354} textAnchor="middle" fill="white" fontSize={12}>
        BA
      </text>
    </g>
  );
}

// PLAN SVG
export function DillonD399mainSVG({
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
          
            <g id="main_floor">
                <g id="struct">
                <polygon id="BG" points="719.6 292.82 719.6 260.32 648.91 260.32 648.91 259.72 463.55 259.72 463.55 260.04 125.69 260.04 125.69 1179.43 465.53 1179.43 465.53 1147.14 643.63 1147.14 643.63 1180.08 1016.45 1180.08 1016.45 292.82 719.6 292.82" fill="#fff"/>
                <g id="Flooring">
                    <rect x="912.19" y="570.15" width="21.1" height="23.04" transform="translate(341.07 1504.4) rotate(-90)" fill="#bcd3dd"/>
                    <rect x="912.19" y="548.54" width="21.1" height="23.04" transform="translate(362.68 1482.79) rotate(-90)" fill="#bcd3dd"/>
                    <rect x="959.24" y="570.15" width="21.1" height="23.04" transform="translate(388.12 1551.45) rotate(-90)" fill="#bcd3dd"/>
                    <rect x="959.24" y="548.54" width="21.1" height="23.04" transform="translate(409.73 1529.84) rotate(-90)" fill="#bcd3dd"/>
                    <rect x="982.87" y="570.15" width="21.1" height="23.04" transform="translate(411.76 1575.09) rotate(-90)" fill="#bcd3dd"/>
                    <rect x="982.87" y="548.54" width="21.1" height="23.04" transform="translate(433.37 1553.48) rotate(-90)" fill="#bcd3dd"/>
                    <rect x="935.71" y="570.15" width="21.1" height="23.04" transform="translate(364.59 1527.93) rotate(-90)" fill="#bcd3dd"/>
                    <rect x="912.19" y="526.92" width="21.1" height="23.04" transform="translate(384.29 1461.18) rotate(-90)" fill="#bcd3dd"/>
                    <rect x="959.24" y="526.92" width="21.1" height="23.04" transform="translate(431.34 1508.23) rotate(-90)" fill="#bcd3dd"/>
                    <rect x="982.87" y="526.92" width="21.1" height="23.04" transform="translate(454.98 1531.86) rotate(-90)" fill="#bcd3dd"/>
                    <rect x="935.71" y="526.92" width="21.1" height="23.04" transform="translate(407.82 1484.7) rotate(-90)" fill="#bcd3dd"/>
                    <rect x="935.71" y="548.54" width="21.1" height="23.04" transform="translate(386.2 1506.32) rotate(-90)" fill="#bcd3dd"/>
                    <rect x="916.74" y="608.88" width="11.99" height="23.04" transform="translate(302.34 1543.14) rotate(-90)" fill="#bcd3dd"/>
                    <rect x="912.19" y="591.83" width="21.1" height="23.04" transform="translate(319.39 1526.09) rotate(-90)" fill="#bcd3dd"/>
                    <rect x="894.76" y="576.25" width="21.1" height="10.83" transform="translate(323.65 1486.98) rotate(-90)" fill="#bcd3dd"/>
                    <rect x="894.76" y="554.64" width="21.1" height="10.83" transform="translate(345.26 1465.37) rotate(-90)" fill="#bcd3dd"/>
                    <rect x="894.76" y="533.03" width="21.1" height="10.83" transform="translate(366.87 1443.76) rotate(-90)" fill="#bcd3dd"/>
                    <rect x="899.32" y="614.99" width="11.99" height="10.83" transform="translate(284.91 1525.72) rotate(-90)" fill="#bcd3dd"/>
                    <rect x="894.76" y="597.94" width="21.1" height="10.83" transform="translate(301.96 1508.66) rotate(-90)" fill="#bcd3dd"/>
                    <rect x="963.79" y="608.88" width="11.99" height="23.04" transform="translate(349.39 1590.19) rotate(-90)" fill="#bcd3dd"/>
                    <rect x="959.24" y="591.83" width="21.1" height="23.04" transform="translate(366.44 1573.14) rotate(-90)" fill="#bcd3dd"/>
                    <rect x="987.43" y="608.88" width="11.99" height="23.04" transform="translate(373.02 1613.82) rotate(-90)" fill="#bcd3dd"/>
                    <rect x="982.87" y="591.83" width="21.1" height="23.04" transform="translate(390.07 1596.77) rotate(-90)" fill="#bcd3dd"/>
                    <rect x="940.27" y="608.88" width="11.99" height="23.04" transform="translate(325.86 1566.66) rotate(-90)" fill="#bcd3dd"/>
                    <rect x="935.71" y="591.83" width="21.1" height="23.04" transform="translate(342.91 1549.61) rotate(-90)" fill="#bcd3dd"/>
                </g>
                <rect x="900.8" y="526.21" width="53.31" height="28.71" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                <path d="M914.17,540.56c0-3.76,1.96-10.26,4.92-12.57,2.49-1.95,5.66,0,9.25,0,3.2,0,6.71-1.41,9.09.18,3.42,2.29,5.08,8.28,5.08,12.38,0,6.94-6.34,12.57-14.16,12.57s-14.16-5.63-14.16-12.57Z" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="244.95" y="439.52" width="64.65" height="120.8" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="137" y="271.86" width="36.86" height="337.44" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="137" y="609.3" width="36.86" height="46.7" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="137" y="672.42" width="36.86" height="96.67" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="174.59" y="611.3" width="4.38" height="44.71" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="137" y="656" width="36.86" height="5.99" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                <polygon points="584.39 694.55 584.39 702.49 573.26 702.49 573.26 708.35 456.99 708.35 456.99 689.44 573.26 689.44 573.26 694.55 584.39 694.55" fill="#425563"/>
                <polygon points="202.46 259.56 202.46 271.86 139.05 271.86 139.05 315.67 126.75 315.67 126.75 259.56 202.46 259.56" fill="#425563"/>
                <rect x="471.5" y="251.71" width="12.3" height="28" transform="translate(743.36 -211.94) rotate(90)" fill="#425563"/>
                <rect x="603.03" y="252.82" width="12.3" height="25.78" transform="translate(874.89 -343.47) rotate(90)" fill="#425563"/>
                <polygon points="1017.04 609.3 1017.04 714.29 1004.74 714.29 1004.74 632.62 843.19 632.62 843.19 714.29 837.58 714.29 837.58 632.62 830.62 632.62 830.62 622.81 837.58 622.81 837.58 617.64 843.19 617.64 843.19 622.81 893.45 622.81 893.45 616.18 900.8 616.18 900.8 622.81 1004.74 622.81 1004.74 609.3 1017.04 609.3" fill="#425563"/>
                <polygon points="386.32 1029.79 386.32 1041.93 352.49 1041.93 352.49 1078.83 296.1 1078.83 296.1 1064.98 338.65 1064.98 338.65 1016.33 352.49 1016.33 352.49 1029.79 386.32 1029.79" fill="#425563"/>
                <polygon points="186.32 1064.98 186.32 1078.83 127.11 1078.83 127.11 1040.95 138.7 1040.95 138.7 1064.98 186.32 1064.98" fill="#425563"/>
                <rect x="127.11" y="857.9" width="11.59" height="129.26" fill="#425563"/>
                <rect x="470.98" y="624.92" width="98.88" height="7.7" fill="#fff" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="462.83" y="700.17" width="109.63" height="5.87" transform="translate(1035.29 1406.21) rotate(180)" fill="#fff" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="462.83" y="689.95" width="109.63" height="5.87" transform="translate(1035.29 1385.78) rotate(180)" fill="#fff" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="709.93" y="543.13" width="7.9" height="10.12" fill="#425563"/>
                <polygon points="411.23 259.56 411.23 271.86 378.31 271.86 378.31 306.64 368.19 306.64 368.19 271.86 307.4 271.86 307.4 259.56 411.23 259.56" fill="#425563"/>
                <rect x="338.77" y="1168.53" width="13.6" height="13.6" transform="translate(691.14 2350.67) rotate(180)" fill="#425563"/>
                <rect x="127.11" y="1168.53" width="13.6" height="13.6" transform="translate(267.82 2350.67) rotate(180)" fill="#425563"/>
                <polygon points="687.88 1170.21 687.88 1182.14 653.48 1182.14 653.48 1189.4 641.55 1189.4 641.55 1147.96 628.92 1147.96 628.92 1136.02 653.48 1136.02 653.48 1170.21 687.88 1170.21" fill="#425563"/>
                <path d="M970.46,1169.62v14.86h-281.58v-14.86h281.58M971.46,1168.62h-283.58v16.86h283.58v-16.86h0Z" fill="#425563"/>
                <path d="M627.92,1134.56v14.86h-140.71v-14.86h140.71M628.92,1133.56h-142.71v16.86h142.71v-16.86h0Z" fill="#425563"/>
                <polygon points="756.75 307.2 756.75 543.13 780.43 543.13 780.43 553.25 717.83 553.25 717.83 555.7 707.7 555.7 707.7 478.04 699.8 478.04 699.8 448.2 707.7 445.09 709.93 444.21 712.18 443.33 713.78 443.33 713.78 442.7 727.76 437.2 727.76 388.76 713.78 382.76 713.78 382.18 712.43 382.18 709.93 381.11 707.13 379.91 699.8 376.76 699.8 347.47 707.13 347.47 707.13 271.86 676.12 271.86 676.12 259.56 723.76 259.56 723.76 293.21 815.83 293.21 815.83 307.2 756.75 307.2" fill="#425563"/>
                <polygon points="1017.04 293.21 1017.04 573.37 1004.74 573.37 1004.74 527.7 900.8 527.7 900.8 575.14 893.45 575.14 893.45 553.25 871.2 553.25 871.2 543.13 893.45 543.13 893.45 517.58 1004.74 517.58 1004.74 307.2 904.98 307.2 904.98 293.21 1017.04 293.21" fill="#425563"/>
                <polygon points="1017.04 860.82 1017.04 1185.48 1006.92 1185.48 1006.92 1182.14 971.46 1182.14 971.46 1170.21 1006.92 1170.21 1006.92 860.82 1017.04 860.82" fill="#425563"/>
                <polygon points="727.76 388.76 727.76 437.2 713.78 442.7 712.18 443.33 709.93 444.21 707.7 445.09 699.8 448.2 699.8 376.76 707.13 379.91 709.93 381.11 712.43 382.18 713.78 382.76 727.76 388.76" fill="#425563" stroke="#fff" stroke-miterlimit="10"/>
                <g>
                    <rect x="815.83" y="293.21" width="89.15" height="13.99" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="815.83" y="293.21" width="89.15" height="8.96" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <g>
                    <rect x="622.07" y="259.56" width="54.05" height="12.3" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="622.07" y="259.56" width="54.05" height="6.89" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <g>
                    <rect x="491.65" y="259.56" width="104.64" height="12.3" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="491.65" y="259.56" width="104.64" height="6.89" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <g>
                    <rect x="411.33" y="259.56" width="51.21" height="12.3" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="411.33" y="259.56" width="51.21" height="6.89" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <g>
                    <rect x="97.22" y="345.2" width="71.36" height="12.3" transform="translate(484.25 218.45) rotate(90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="100.92" y="348.89" width="71.36" height="4.91" transform="translate(487.95 214.75) rotate(90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <g>
                    <rect x="105.47" y="824.31" width="54.87" height="12.3" transform="translate(963.37 697.56) rotate(90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="109.16" y="828.01" width="54.87" height="4.91" transform="translate(967.06 693.87) rotate(90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <g>
                    <rect x="992.92" y="726.1" width="35.93" height="12.3" transform="translate(278.63 1743.14) rotate(-90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="989.23" y="729.8" width="35.93" height="4.91" transform="translate(274.94 1739.45) rotate(-90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <g>
                    <rect x="1004.74" y="573.37" width="12.3" height="35.93" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="1004.74" y="573.37" width="4.91" height="35.93" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <g>
                    <rect x="105.47" y="1008.44" width="54.87" height="12.3" transform="translate(1147.49 881.69) rotate(90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="109.16" y="1012.14" width="54.87" height="4.91" transform="translate(1151.19 878) rotate(90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <g>
                    <rect x="186.32" y="1066.53" width="50.29" height="12.3" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="186.32" y="1066.53" width="50.29" height="4.91" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <g>
                    <rect x="244.85" y="1066.53" width="51.25" height="12.3" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="244.85" y="1066.53" width="51.25" height="4.91" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <line x1="352.37" y1="1180.39" x2="456.59" y2="1180.39" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="134.55" y1="1180.39" x2="338.77" y2="1180.39" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="134.55" y1="1174.26" x2="338.77" y2="1174.26" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="130.83" y1="1075.56" x2="130.83" y2="1174.78" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width="4"/>
                <line x1="462.83" y1="764.41" x2="462.83" y2="705.82" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="477.13" y1="764.41" x2="477.13" y2="705.82" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="491.43" y1="764.41" x2="491.43" y2="705.82" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="507.6" y1="764.41" x2="507.6" y2="705.82" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="521.1" y1="764.41" x2="521.1" y2="705.82" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="535.06" y1="764.41" x2="535.06" y2="705.82" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="551.48" y1="764.41" x2="551.48" y2="705.82" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="565.26" y1="764.41" x2="565.26" y2="705.82" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="477.13" y1="689.95" x2="477.13" y2="632.71" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="491.43" y1="689.95" x2="491.43" y2="632.71" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="507.6" y1="689.95" x2="507.6" y2="632.71" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="521.1" y1="689.95" x2="521.1" y2="632.71" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="535.06" y1="689.95" x2="535.06" y2="632.71" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="551.48" y1="689.95" x2="551.48" y2="632.71" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="565.26" y1="689.95" x2="565.26" y2="632.71" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="695.47" y="747.99" width="47.85" height="3.81" transform="translate(-319.55 728.33) rotate(-45)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="413.34" y="1002.45" width="52.8" height="5.16" transform="translate(-565.28 1444.77) rotate(-90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="410.48" y="751.05" width="47.21" height="6.58" transform="translate(868.16 1508.69) rotate(180)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="370.74" y="732.22" width="40.59" height="3.41" transform="translate(148.57 1529.4) rotate(-135)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="234.85" y="692.38" width="43.95" height="3.41" transform="translate(-52.35 1366.47) rotate(-135)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="202.46" y="263.66" width="43.95" height="3.41" transform="translate(448.87 530.73) rotate(180)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="237.26" y="267.07" width="54.99" height="3.41" transform="translate(529.5 537.54) rotate(180)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="842.5" y="756.81" width="47.85" height="3.81" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="899.9" y="614.27" width="40.39" height="3.81" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="760.11" y="521.74" width="44.7" height="3.81" transform="translate(258.81 1306.11) rotate(-90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="846.94" y="521.74" width="44.7" height="3.81" transform="translate(345.64 1392.94) rotate(-90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="955.34" y="807.01" width="52.62" height="3.81" transform="translate(1963.31 1617.84) rotate(180)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="688.81" y="739.03" width="41.07" height="3.81" transform="translate(-316.16 718.6) rotate(-45)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="688.81" y="687.25" width="41.07" height="3.81" transform="translate(695.07 -299.74) rotate(45)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <path d="M737.66,734.33s11.97,14.88,11.97,30.08" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <polygon points="689.82 672.98 689.82 656.58 655.24 656.58 655.24 756.25 697.52 756.25 697.52 764.41 702.91 764.41 702.91 777.73 466.71 777.73 466.71 1136.02 486.21 1136.02 486.21 1147.96 470.19 1147.96 470.19 1182.14 456.59 1182.14 456.59 1041.93 442.32 1041.93 442.32 1029.79 456.59 1029.79 456.59 764.41 456.99 764.41 456.99 757.03 644.18 757.03 644.18 632.62 569.86 632.62 569.86 624.92 707.7 624.92 707.7 616.18 717.83 616.18 717.83 622.81 772.74 622.81 772.74 632.62 697.52 632.62 697.52 672.98 689.82 672.98" fill="#425563"/>
                <path d="M722.52,705.02s-11.36,10.3-28.14,10.3c0,0,28.14,3.31,28.14,9.74" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <polygon points="1017.04 750.22 1017.04 806.52 1006.92 806.52 1006.92 777.73 749.63 777.73 749.63 764.41 837.21 764.41 837.21 756.81 843.12 756.81 843.12 764.41 1004.74 764.41 1004.74 750.22 1017.04 750.22" fill="#425563"/>
                <path d="M890.35,756.81s-3.48-42.52-47.16-42.52" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="236.61" y="1065.69" width="8.24" height="13.14" fill="#425563"/>
                <g>
                    <line x1="140.71" y1="1170.46" x2="144.21" y2="1170.46" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <line x1="150.29" y1="1170.46" x2="450.05" y2="1170.46" fill="none" stroke="#425563" stroke-dasharray="7.09 6.08" stroke-miterlimit="10"/>
                    <line x1="453.09" y1="1170.46" x2="456.59" y2="1170.46" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <g>
                    <line x1="138.6" y1="1073.41" x2="138.6" y2="1076.91" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <line x1="138.6" y1="1082.65" x2="138.6" y2="1166.91" fill="none" stroke="#425563" stroke-dasharray="6.7 5.74" stroke-miterlimit="10"/>
                    <line x1="138.6" y1="1169.78" x2="138.6" y2="1173.28" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <path d="M437.16,978.62s-50.84,7.23-50.84,51.17" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="338.65" y="791.58" width="13.84" height="224.75" fill="none" stroke="#425563" stroke-dasharray="7 6" stroke-miterlimit="10"/>
                <rect x="201" y="747.06" width="8.33" height="52.39" transform="translate(978.42 568.09) rotate(90)" fill="none" stroke="#425563" stroke-dasharray="7 6" stroke-miterlimit="10"/>
                <rect x="201" y="641.53" width="8.33" height="52.39" transform="translate(872.89 462.56) rotate(90)" fill="none" stroke="#425563" stroke-dasharray="7 6" stroke-miterlimit="10"/>
                <rect x="708.45" y="555.7" width="8.33" height="60.48" transform="translate(1425.23 1171.88) rotate(180)" fill="none" stroke="#425563" stroke-dasharray="7 6" stroke-miterlimit="10"/>
                <rect x="798.18" y="597.62" width="8.33" height="60.48" transform="translate(174.49 1430.2) rotate(-90)" fill="none" stroke="#425563" stroke-dasharray="7 6" stroke-miterlimit="10"/>
                <rect x="368.46" y="306.64" width="10.07" height="318.23" fill="none" stroke="#425563" stroke-dasharray="7 6" stroke-miterlimit="10"/>
                <path d="M410.48,751.05s4.2-43.87,46.51-43.87" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <path d="M404.18,749.48s-6.48,10.77-25.65,10.77" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="173.86" y1="671.1" x2="173.86" y2="771.82" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <polygon points="138.7 672.46 138.7 768.32 178.66 768.32 178.66 778.22 138.7 778.22 138.7 803.03 127.11 803.03 127.11 387.03 138.7 387.03 138.7 661.85 178.97 661.85 178.97 672.46 138.7 672.46" fill="#425563"/>
                <polygon points="378.53 758.74 378.53 778.22 352.49 778.22 352.49 791.58 338.65 791.58 338.65 778.22 231.36 778.22 231.36 768.32 234.78 768.32 234.78 720.59 242.65 720.59 242.65 770.36 334.35 770.36 334.35 672.42 242.65 672.42 242.65 677.6 234.78 677.6 234.78 672.46 231.36 672.46 231.36 661.85 234.78 661.85 234.78 624.87 245.49 624.87 245.49 664.56 368.19 664.56 368.19 624.92 378.31 624.92 378.31 703.68 378.32 703.68 378.32 720.5 369.9 720.5 369.9 708.41 337.26 708.41 337.26 770.36 370.11 770.36 370.11 758.74 378.53 758.74" fill="#425563"/>
                <path d="M271.16,710.82s-12.59,11.13-28.51,11.13" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <path d="M757.01,802.22v13.4h-63.77v-13.4h63.77M758.01,801.22h-65.77v15.4h65.77v-15.4h0Z" fill="#425563"/>
                <path d="M757.01,787.82v13.4h-63.77v-13.4h63.77M758.01,786.82h-65.77v15.4h65.77v-15.4h0Z" fill="#425563"/>
                <path d="M757.01,773.31v13.4h-63.77v-13.4h63.77M758.01,772.31h-65.77v15.4h65.77v-15.4h0Z" fill="#425563"/>
                <g id="stove">
                    <circle cx="163.39" cy="498.54" r="6.13" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <circle cx="146.02" cy="498.54" r="5.21" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <circle cx="146.02" cy="515.95" r="5.21" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <circle cx="146.02" cy="533.01" r="5.21" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <circle cx="163.39" cy="533.01" r="6.49" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <circle cx="164.48" cy="512.47" r="2.19" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <circle cx="164.48" cy="519.16" r="2.19" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <circle cx="169.33" cy="509.44" r="2.19" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <circle cx="169.33" cy="516.36" r="2.19" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <circle cx="169.33" cy="522.53" r="2.19" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <line x1="138.12" y1="541.78" x2="173.86" y2="541.78" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <line x1="138.12" y1="490.12" x2="173.86" y2="490.12" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g id="sink1" data-name="sink">
                    <path d="M270.74,507.6h-21.94c-.92.18-1.43.69-1.52,1.52v17.52c.09.92.6,1.43,1.52,1.52h21.94c.92-.09,1.43-.6,1.52-1.52v-17.52c-.09-.83-.6-1.33-1.52-1.52Z" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M256.67,517.95c0,.83.32,1.52.97,2.07.55.55,1.24.87,2.07.97.92,0,1.66-.32,2.21-.97.55-.55.83-1.24.83-2.07,0-.92-.28-1.66-.83-2.21s-1.29-.83-2.21-.83c-.83,0-1.52.28-2.07.83-.64.55-.97,1.29-.97,2.21Z" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M271.43,505.25c.46-.28.74-.74.83-1.38v-17.38c-.09-.92-.6-1.43-1.52-1.52h-21.94c-.92.09-1.43.6-1.52,1.52v17.38c.09.92.6,1.43,1.52,1.52h17.66l-4-1.24c-.46-.18-.64-.51-.55-.97.18-.46.51-.64.97-.55l8.55,2.62,3.04.83v-5.52l3.04-.14v12.14h-3.04v-4.83l-8-2.35" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M244.95,483.04v46.9c.09.92.6,1.43,1.52,1.52h30.35c.92-.09,1.43-.6,1.52-1.52v-46.9c-.09-.92-.6-1.43-1.52-1.52h-30.35c-.92.09-1.43.6-1.52,1.52Z" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M256.67,495.18c0,.83.32,1.52.97,2.07.55.55,1.24.87,2.07.97.92,0,1.66-.32,2.21-.97.55-.55.83-1.24.83-2.07s-.28-1.56-.83-2.21c-.55-.55-1.29-.83-2.21-.83-.83,0-1.52.28-2.07.83-.64.64-.97,1.38-.97,2.21Z" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M274.75,510.36c.09.83.51,1.29,1.24,1.38.83-.18,1.24-.64,1.24-1.38-.09-.74-.51-1.15-1.24-1.24-.74.09-1.15.51-1.24,1.24Z" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M274.47,507.74l.69.28c.46.09.74-.09.83-.55.18-.46.05-.78-.41-.97l-1.1-.41" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M274.75,502.63c.09.83.51,1.29,1.24,1.38.83-.18,1.24-.64,1.24-1.38-.09-.74-.51-1.15-1.24-1.24-.74.09-1.15.51-1.24,1.24Z" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g>
                    <polyline points="279.84 479.89 279.84 481.39 278.34 481.39" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <line x1="275.29" y1="481.39" x2="246.32" y2="481.39" fill="none" stroke="#425563" stroke-dasharray="3.05 3.05" stroke-miterlimit="10" stroke-width=".5"/>
                    <polyline points="244.8 481.39 243.3 481.39 243.3 479.89" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <line x1="243.3" y1="476.84" x2="243.3" y2="447.87" fill="none" stroke="#425563" stroke-dasharray="3.05 3.05" stroke-miterlimit="10" stroke-width=".5"/>
                    <polyline points="243.3 446.34 243.3 444.84 244.8 444.84" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <line x1="247.85" y1="444.84" x2="276.82" y2="444.84" fill="none" stroke="#425563" stroke-dasharray="3.05 3.05" stroke-miterlimit="10" stroke-width=".5"/>
                    <polyline points="278.34 444.84 279.84 444.84 279.84 446.34" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <line x1="279.84" y1="449.39" x2="279.84" y2="478.36" fill="none" stroke="#425563" stroke-dasharray="3.05 3.05" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g id="dryer">
                    <g>
                    <polyline points="959.88 643.59 959.88 640.59 962.88 640.59" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <line x1="968.16" y1="640.59" x2="997.21" y2="640.59" fill="none" stroke="#425563" stroke-dasharray="5.28 5.28" stroke-miterlimit="10" stroke-width=".5"/>
                    <polyline points="999.85 640.59 1002.85 640.59 1002.85 643.59" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M1002.85,649.79v34.88c0,2.44-1.98,4.41-4.41,4.41h-34.14c-2.44,0-4.41-1.98-4.41-4.41v-37.98" fill="none" stroke="#425563" stroke-dasharray="6.2 6.2" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                </g>
                <g id="washer">
                    <g>
                    <polyline points="916.12 643.66 916.12 640.66 919.12 640.66" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <line x1="924.4" y1="640.66" x2="953.45" y2="640.66" fill="none" stroke="#425563" stroke-dasharray="5.28 5.28" stroke-miterlimit="10" stroke-width=".5"/>
                    <polyline points="956.09 640.66 959.09 640.66 959.09 643.66" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M959.09,649.86v34.88c0,2.44-1.98,4.41-4.41,4.41h-34.14c-2.44,0-4.41-1.98-4.41-4.41v-37.98" fill="none" stroke="#425563" stroke-dasharray="6.2 6.2" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                </g>
                <rect x="843.19" y="632.62" width="161.55" height="28.71" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="314.51" y="730.97" width="62.14" height="16.64" transform="translate(-393.71 1084.87) rotate(-90)" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                <polygon points="334.35 672.42 334.35 770.36 242.65 770.36 242.65 749.48 308.97 749.48 308.97 672.42 334.35 672.42" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="193.87" y1="259.56" x2="193.87" y2="142.57" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="193.38" y1="142.57" x2="314.68" y2="142.57" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="193.38" y1="150.97" x2="314.68" y2="150.97" fill="none" stroke="#425563" stroke-dasharray="3" stroke-miterlimit="10" stroke-width=".5"/>
                <line x1="202.46" y1="151.43" x2="202.46" y2="259.72" fill="none" stroke="#425563" stroke-dasharray="3" stroke-miterlimit="10" stroke-width=".5"/>
                <line x1="303.34" y1="151.43" x2="303.34" y2="259.72" fill="none" stroke="#425563" stroke-dasharray="3" stroke-miterlimit="10" stroke-width=".5"/>
                <line x1="314.18" y1="259.56" x2="314.18" y2="142.57" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="193.87" y="142.57" width="9.73" height="8.86" fill="#425563"/>
                <rect x="302.44" y="142.57" width="11.74" height="8.86" fill="#425563"/>
                <rect x="314.68" y="155.14" width="185.68" height="6.46" fill="#fff" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="314.68" y="205.57" width="185.68" height="6.46" fill="#fff" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="297.89" y="178.38" width="43.98" height="10.4" transform="translate(503.46 -136.3) rotate(90)" fill="#fff" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="308.79" y="178.38" width="43.98" height="10.4" transform="translate(514.37 -147.2) rotate(90)" fill="#fff" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="319.69" y="178.38" width="43.98" height="10.4" transform="translate(525.27 -158.1) rotate(90)" fill="#fff" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="330.59" y="178.38" width="43.98" height="10.4" transform="translate(536.17 -169) rotate(90)" fill="#fff" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="341.49" y="178.38" width="43.98" height="10.4" transform="translate(547.07 -179.9) rotate(90)" fill="#fff" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="352.39" y="178.38" width="43.98" height="10.4" transform="translate(557.97 -190.8) rotate(90)" fill="#fff" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="363.29" y="178.38" width="43.98" height="10.4" transform="translate(568.87 -201.7) rotate(90)" fill="#fff" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="374.19" y="178.38" width="43.98" height="10.4" transform="translate(579.77 -212.6) rotate(90)" fill="#fff" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="385.09" y="178.38" width="43.98" height="10.4" transform="translate(590.67 -223.5) rotate(90)" fill="#fff" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="396" y="178.38" width="43.98" height="10.4" transform="translate(601.57 -234.4) rotate(90)" fill="#fff" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="406.9" y="178.38" width="43.98" height="10.4" transform="translate(612.47 -245.3) rotate(90)" fill="#fff" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="417.8" y="178.38" width="43.98" height="10.4" transform="translate(623.37 -256.2) rotate(90)" fill="#fff" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="428.7" y="178.38" width="43.98" height="10.4" transform="translate(634.27 -267.1) rotate(90)" fill="#fff" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="439.6" y="178.38" width="43.98" height="10.4" transform="translate(645.17 -278) rotate(90)" fill="#fff" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="450.5" y="178.38" width="43.98" height="10.4" transform="translate(656.07 -288.91) rotate(90)" fill="#fff" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="461.4" y="178.38" width="43.98" height="10.4" transform="translate(666.97 -299.81) rotate(90)" fill="#fff" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="472.3" y="178.38" width="43.98" height="10.4" transform="translate(677.87 -310.71) rotate(90)" fill="#fff" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="498.17" y="160.19" width="50.44" height="46.79" transform="translate(706.97 -339.8) rotate(90)" fill="#fff" stroke="#425563" stroke-miterlimit="10"/>
                <path d="M955.34,810.83s4.9,49.99,51.58,49.99" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="1013.57" y="806.52" width="52.68" height="54.3" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <ellipse cx="928.34" cy="540.56" rx="11.29" ry="10.02" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                <g id="toilet1" data-name="toilet">
                    <path d="M984.49,539.38l.71,2c.24,1.18.71,2.2,1.41,3.06.39.47.75.94,1.06,1.41,1.33,2.43,1.96,4.98,1.88,7.65-.08,2.75-.78,5.26-2.12,7.53-1.33,2.28-3.22,4.12-5.65,5.53-1.49.55-2.94.55-4.36,0-.55-.24-1.02-.51-1.41-.82-2.28-1.73-3.96-3.81-5.06-6.24-1.1-2.43-1.53-4.98-1.3-7.65.24-2.67,1.14-5.14,2.71-7.42h.12c.71-.86,1.18-1.84,1.41-2.94l.82-2.12h-5.06c-.47,0-.9-.16-1.3-.47-.24-.24-.43-.59-.59-1.06l-.47-7.89c0-.55.2-1.06.59-1.53.24-.31.59-.55,1.06-.71h21.07c.55.16.98.39,1.3.71.31.47.47.98.47,1.53l-.47,7.89c-.08.47-.27.82-.59,1.06-.39.31-.82.47-1.3.47h-4.94s-9.77,0-9.77,0" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                    <path d="M978.02,565.17c1.02.31,2.04.31,3.06,0,2.2-1.26,3.89-2.94,5.06-5.06,1.18-1.96,1.81-4.16,1.88-6.59,0-2.35-.59-4.63-1.77-6.83-.78-1.33-1.73-2.51-2.83-3.53-.16-.16-.39-.24-.71-.24h-6.36c-.24,0-.47.08-.71.24-1.81,1.65-3.06,3.61-3.77,5.89-.78,2.28-.94,4.55-.47,6.83.39,2.35,1.41,4.47,3.06,6.36,1.02,1.18,2.2,2.16,3.53,2.94Z" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                    <line x1="991.32" y1="537.85" x2="967.77" y2="537.85" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <path d="M940.29,614.27s-3.9-39.13-39.49-39.13" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <path d="M784.37,501.3s41.06,6.49,41.06,43.7c0,0,5.1-43.7,41.96-43.7" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <g id="Names1" data-name="Names">
                <text transform="translate(213.81 816.71)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">Dining</tspan></text>
                <text transform="translate(195.39 718.1)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="8.5"><tspan x="0" y="0">Pantry</tspan></text>
                <text transform="translate(240.87 1129.83)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">Covered Porch</tspan></text>
                <text transform="translate(655.02 885.41)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">3-Car Garage</tspan></text>
                <text transform="translate(914.77 721.05)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">Laundry</tspan></text>
                <text transform="translate(504.49 551.16)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">Great Room</tspan></text>
                <text transform="translate(739.81 719.92)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">Mud Room</tspan></text>
                <text transform="translate(213.28 596.82)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">Gourmet Kitchen</tspan></text>
                <text transform="translate(388.2 966.78)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="8.5"><tspan x="0" y="0">Entry</tspan></text>
                <text transform="translate(186.22 317.85)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">Nook</tspan></text>
                <text transform="translate(863.52 349.93)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">Study</tspan></text>
                <text transform="translate(930.05 586.65)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">Bathroom</tspan></text>
                </g>
                <g id="Furniture">
                <g id="Dining_Room_table" filter="url(#drop-shadow-7)">
                    <g>
                    <path d="M277.61,971.15h8.71c2.35,0,4.26,1.91,4.26,4.26v6.84c0,2.35-1.91,4.26-4.26,4.26h-8.7c-2.35,0-4.26-1.91-4.26-4.26v-6.84c0-2.35,1.91-4.26,4.26-4.26Z" transform="translate(-696.86 1260.79) rotate(-90)" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M289.82,973.34v10.97c0,1.82-1.48,3.31-3.31,3.31h-9.1c-1.82,0-3.31-1.48-3.31-3.31v-10.97c0-1.82,1.48-3.31,3.31-3.31h9.1c1.82,0,3.31,1.48,3.31,3.31ZM274.47,984.31c0,1.62,1.32,2.94,2.94,2.94h9.1c1.62,0,2.94-1.32,2.94-2.94v-10.97c0-1.62-1.32-2.94-2.94-2.94h-9.1c-1.62,0-2.94,1.32-2.94,2.94v10.97Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M288.33,972.01c.73,4.74.77,9.41.03,14-.22,1.37,1.13,2.58,2.87,2.58h0c1.41,0,2.61-.8,2.87-1.9,1.17-4.95,1.17-10.06-.02-15.33-.25-1.11-1.45-1.92-2.87-1.92h0c-1.74,0-3.09,1.2-2.88,2.57Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M295.16,979.19c0,2.56-.29,5.08-.87,7.54-.28,1.18-1.56,2.04-3.05,2.04-1.02,0-1.97-.4-2.54-1.08-.43-.5-.61-1.11-.51-1.72.72-4.48.71-9.17-.03-13.95h0c-.09-.6.09-1.21.52-1.71.58-.67,1.52-1.07,2.54-1.07,1.5,0,2.78.87,3.05,2.07.6,2.65.9,5.28.9,7.87ZM288.52,986.3c0,.41.16.82.45,1.16.51.59,1.35.95,2.26.95,1.32,0,2.45-.74,2.69-1.76,1.16-4.91,1.15-10.04-.02-15.25-.23-1.03-1.36-1.78-2.69-1.78-.91,0-1.76.35-2.26.94-.36.42-.51.92-.43,1.41h0c.74,4.81.76,9.54.03,14.06-.01.09-.02.17-.02.26Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <rect x="273.36" y="937.66" width="17.22" height="15.35" rx="4.26" ry="4.26" transform="translate(-663.37 1227.29) rotate(-90)" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M289.82,939.84v10.97c0,1.82-1.48,3.31-3.31,3.31h-9.1c-1.82,0-3.31-1.48-3.31-3.31v-10.97c0-1.82,1.48-3.31,3.31-3.31h9.1c1.82,0,3.31,1.48,3.31,3.31ZM274.47,950.82c0,1.62,1.32,2.94,2.94,2.94h9.1c1.62,0,2.94-1.32,2.94-2.94v-10.97c0-1.62-1.32-2.94-2.94-2.94h-9.1c-1.62,0-2.94,1.32-2.94,2.94v10.97Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M288.33,938.52c.73,4.74.77,9.41.03,14-.22,1.37,1.13,2.58,2.87,2.58h0c1.41,0,2.61-.8,2.87-1.9,1.17-4.95,1.17-10.06-.02-15.33-.25-1.11-1.45-1.92-2.87-1.92h0c-1.74,0-3.09,1.2-2.88,2.57Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M295.16,945.7c0,2.56-.29,5.08-.87,7.54-.28,1.18-1.56,2.04-3.05,2.04-1.02,0-1.97-.4-2.54-1.08-.43-.5-.61-1.11-.51-1.72.72-4.48.71-9.17-.03-13.95-.09-.6.09-1.21.52-1.71.58-.67,1.52-1.07,2.54-1.07,1.5,0,2.78.87,3.05,2.07.6,2.65.9,5.28.9,7.87ZM288.52,952.81c0,.41.16.82.45,1.16.51.59,1.35.95,2.26.95,1.32,0,2.45-.74,2.69-1.76,1.16-4.91,1.15-10.04-.02-15.25-.23-1.03-1.36-1.78-2.69-1.78-.91,0-1.76.35-2.26.94-.36.42-.51.92-.43,1.41h0c.74,4.81.76,9.54.03,14.06-.01.09-.02.17-.02.26Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M277.61,901.49h8.71c2.35,0,4.26,1.91,4.26,4.26v6.84c0,2.35-1.91,4.26-4.26,4.26h-8.7c-2.35,0-4.26-1.91-4.26-4.26v-6.84c0-2.35,1.91-4.26,4.26-4.26Z" transform="translate(-627.2 1191.13) rotate(-90)" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M289.82,903.68v10.97c0,1.82-1.48,3.31-3.31,3.31h-9.1c-1.82,0-3.31-1.48-3.31-3.31v-10.97c0-1.82,1.48-3.31,3.31-3.31h9.1c1.82,0,3.31,1.48,3.31,3.31ZM274.47,914.65c0,1.62,1.32,2.94,2.94,2.94h9.1c1.62,0,2.94-1.32,2.94-2.94v-10.97c0-1.62-1.32-2.94-2.94-2.94h-9.1c-1.62,0-2.94,1.32-2.94,2.94v10.97Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M288.33,902.35c.73,4.74.77,9.41.03,14-.22,1.37,1.13,2.58,2.87,2.58h0c1.41,0,2.61-.8,2.87-1.9,1.17-4.95,1.17-10.06-.02-15.33-.25-1.11-1.45-1.92-2.87-1.92h0c-1.74,0-3.09,1.2-2.88,2.57Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M295.16,909.53c0,2.56-.29,5.08-.87,7.54-.28,1.18-1.56,2.04-3.05,2.04-1.02,0-1.97-.4-2.54-1.08-.43-.5-.61-1.11-.51-1.72.72-4.48.71-9.17-.03-13.95h0c-.09-.6.09-1.21.52-1.71.58-.67,1.52-1.07,2.54-1.07,1.5,0,2.78.87,3.05,2.07.6,2.65.9,5.28.9,7.87ZM288.52,916.64c0,.41.16.82.45,1.16.51.59,1.35.95,2.26.95,1.32,0,2.45-.74,2.69-1.76,1.16-4.91,1.15-10.04-.02-15.25-.23-1.03-1.36-1.78-2.69-1.78-.91,0-1.76.35-2.26.94-.36.42-.51.92-.43,1.41h0c.74,4.81.76,9.54.03,14.06-.01.09-.02.17-.02.26Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <rect x="273.36" y="861.42" width="17.22" height="15.35" rx="4.26" ry="4.26" transform="translate(-587.13 1151.06) rotate(-90)" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M289.82,863.61v10.97c0,1.82-1.48,3.31-3.31,3.31h-9.1c-1.82,0-3.31-1.48-3.31-3.31v-10.97c0-1.82,1.48-3.31,3.31-3.31h9.1c1.82,0,3.31,1.48,3.31,3.31ZM274.47,874.58c0,1.62,1.32,2.94,2.94,2.94h9.1c1.62,0,2.94-1.32,2.94-2.94v-10.97c0-1.62-1.32-2.94-2.94-2.94h-9.1c-1.62,0-2.94,1.32-2.94,2.94v10.97Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M288.33,862.28c.73,4.74.77,9.41.03,14-.22,1.37,1.13,2.58,2.87,2.58h0c1.41,0,2.61-.8,2.87-1.9,1.17-4.95,1.17-10.06-.02-15.33-.25-1.11-1.45-1.92-2.87-1.92h0c-1.74,0-3.09,1.2-2.88,2.57Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M295.16,869.46c0,2.56-.29,5.08-.87,7.54-.28,1.18-1.56,2.04-3.05,2.04-1.02,0-1.97-.4-2.54-1.08-.43-.5-.61-1.11-.51-1.72.72-4.48.71-9.17-.03-13.95h0c-.09-.6.09-1.21.52-1.71.58-.67,1.52-1.07,2.54-1.07,1.5,0,2.78.87,3.05,2.07.6,2.65.9,5.28.9,7.87ZM288.52,876.57c0,.41.16.82.45,1.16.51.59,1.35.95,2.26.95,1.32,0,2.45-.74,2.69-1.76,1.16-4.91,1.15-10.04-.02-15.25-.23-1.03-1.36-1.78-2.69-1.78-.91,0-1.76.35-2.26.94-.36.42-.51.92-.43,1.41h0c.74,4.81.75,9.55.03,14.06-.01.09-.02.17-.02.26Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M197.92,972.85h8.7c2.35,0,4.26,1.91,4.26,4.26v7.74c0,2.35-1.91,4.26-4.26,4.26h-8.71c-2.35,0-4.26-1.91-4.26-4.26v-7.74c0-2.35,1.91-4.26,4.26-4.26Z" transform="translate(-778.7 1183.25) rotate(-90)" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M210.58,975.49v10.97c0,1.82-1.48,3.31-3.31,3.31h-10c-1.82,0-3.31-1.48-3.31-3.31v-10.97c0-1.82,1.48-3.31,3.31-3.31h10c1.82,0,3.31,1.48,3.31,3.31ZM194.33,986.46c0,1.62,1.32,2.94,2.94,2.94h10c1.62,0,2.94-1.32,2.94-2.94v-10.97c0-1.62-1.32-2.94-2.94-2.94h-10c-1.62,0-2.94,1.32-2.94,2.94v10.97Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M195.53,974.16c-.78,4.74-.81,9.41-.03,14,.23,1.37-1.2,2.58-3.04,2.58h0c-1.49,0-2.76-.8-3.04-1.9-1.24-4.95-1.24-10.06.03-15.33.26-1.11,1.54-1.92,3.04-1.92h0c1.84,0,3.27,1.2,3.05,2.57Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M195.74,973.89c0,.1,0,.21-.03.31-.78,4.77-.79,9.47-.03,13.94.1.58-.07,1.17-.49,1.66-.6.71-1.62,1.13-2.73,1.13-1.57,0-2.92-.86-3.21-2.04-1.24-4.97-1.24-10.15.02-15.42.29-1.2,1.64-2.06,3.22-2.06,1.11,0,2.13.42,2.74,1.13.34.4.52.87.52,1.34ZM194.75,981.38c0-2.38.2-4.8.6-7.25h0c.08-.48-.06-.95-.41-1.36-.53-.63-1.45-1-2.45-1-1.41,0-2.62.75-2.86,1.78-1.25,5.2-1.25,10.33-.03,15.24.26,1.02,1.46,1.76,2.86,1.76,1.01,0,1.92-.38,2.45-1,.35-.41.49-.88.41-1.36-.38-2.22-.57-4.5-.57-6.82Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M197.92,939.36h8.7c2.35,0,4.26,1.91,4.26,4.26v7.74c0,2.35-1.91,4.26-4.26,4.26h-8.71c-2.35,0-4.26-1.91-4.26-4.26v-7.74c0-2.35,1.91-4.26,4.26-4.26Z" transform="translate(-745.21 1149.76) rotate(-90)" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M210.58,942v10.97c0,1.82-1.48,3.31-3.31,3.31h-10c-1.82,0-3.31-1.48-3.31-3.31v-10.97c0-1.82,1.48-3.31,3.31-3.31h10c1.82,0,3.31,1.48,3.31,3.31ZM194.33,952.97c0,1.62,1.32,2.94,2.94,2.94h10c1.62,0,2.94-1.32,2.94-2.94v-10.97c0-1.62-1.32-2.94-2.94-2.94h-10c-1.62,0-2.94,1.32-2.94,2.94v10.97Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M195.53,940.67c-.78,4.74-.81,9.41-.03,14,.23,1.37-1.2,2.58-3.04,2.58h0c-1.49,0-2.76-.8-3.04-1.9-1.24-4.95-1.24-10.06.03-15.33.26-1.11,1.54-1.92,3.04-1.92h0c1.84,0,3.27,1.2,3.05,2.57Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M195.74,940.39c0,.1,0,.21-.03.31-.78,4.77-.79,9.47-.03,13.94.1.58-.07,1.17-.49,1.66-.6.71-1.62,1.14-2.73,1.14-1.57,0-2.92-.86-3.21-2.04-1.24-4.97-1.24-10.15.02-15.42.29-1.2,1.64-2.06,3.22-2.06,1.11,0,2.13.42,2.74,1.13.34.4.52.87.52,1.34ZM194.75,947.89c0-2.38.2-4.8.6-7.25h0c.08-.48-.06-.95-.41-1.36-.53-.63-1.45-1-2.45-1-1.41,0-2.62.75-2.86,1.78-1.25,5.2-1.25,10.33-.03,15.24.26,1.02,1.46,1.76,2.86,1.76,1.01,0,1.92-.38,2.45-1,.35-.41.49-.88.41-1.36-.38-2.22-.57-4.5-.57-6.82Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M197.92,903.19h8.7c2.35,0,4.26,1.91,4.26,4.26v7.74c0,2.35-1.91,4.26-4.26,4.26h-8.71c-2.35,0-4.26-1.91-4.26-4.26v-7.74c0-2.35,1.91-4.26,4.26-4.26Z" transform="translate(-709.04 1113.59) rotate(-90)" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M210.58,905.83v10.97c0,1.82-1.48,3.31-3.31,3.31h-10c-1.82,0-3.31-1.48-3.31-3.31v-10.97c0-1.82,1.48-3.31,3.31-3.31h10c1.82,0,3.31,1.48,3.31,3.31ZM194.33,916.8c0,1.62,1.32,2.94,2.94,2.94h10c1.62,0,2.94-1.32,2.94-2.94v-10.97c0-1.62-1.32-2.94-2.94-2.94h-10c-1.62,0-2.94,1.32-2.94,2.94v10.97Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M195.53,904.5c-.78,4.74-.81,9.41-.03,14,.23,1.37-1.2,2.58-3.04,2.58h0c-1.49,0-2.76-.8-3.04-1.9-1.24-4.95-1.24-10.06.03-15.33.26-1.11,1.54-1.92,3.04-1.92h0c1.84,0,3.27,1.2,3.05,2.57Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M195.74,904.22c0,.1,0,.21-.03.31-.78,4.77-.79,9.47-.03,13.94.1.58-.07,1.17-.49,1.66-.6.71-1.62,1.14-2.73,1.14-1.57,0-2.92-.86-3.21-2.04-1.24-4.97-1.24-10.15.02-15.42.29-1.2,1.64-2.06,3.22-2.06,1.11,0,2.13.42,2.74,1.13.34.4.52.87.52,1.34ZM194.75,911.72c0-2.38.2-4.8.6-7.25h0c.08-.48-.06-.95-.41-1.36-.53-.63-1.45-1-2.45-1-1.41,0-2.62.75-2.86,1.78-1.25,5.2-1.25,10.33-.03,15.24.26,1.02,1.46,1.76,2.86,1.76,1.01,0,1.92-.38,2.45-1,.35-.41.49-.88.41-1.36-.38-2.22-.57-4.5-.57-6.82Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M197.92,863.12h8.71c2.35,0,4.26,1.91,4.26,4.26v7.74c0,2.35-1.91,4.26-4.26,4.26h-8.71c-2.35,0-4.26-1.91-4.26-4.26v-7.74c0-2.35,1.91-4.26,4.26-4.26Z" transform="translate(-668.97 1073.52) rotate(-90)" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M210.58,865.76v10.97c0,1.82-1.48,3.31-3.31,3.31h-10c-1.82,0-3.31-1.48-3.31-3.31v-10.97c0-1.82,1.48-3.31,3.31-3.31h10c1.82,0,3.31,1.48,3.31,3.31ZM194.33,876.73c0,1.62,1.32,2.94,2.94,2.94h10c1.62,0,2.94-1.32,2.94-2.94v-10.97c0-1.62-1.32-2.94-2.94-2.94h-10c-1.62,0-2.94,1.32-2.94,2.94v10.97Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M195.53,864.43c-.78,4.74-.81,9.41-.03,14,.23,1.37-1.2,2.58-3.04,2.58h0c-1.49,0-2.76-.8-3.04-1.9-1.24-4.95-1.24-10.06.03-15.33.26-1.11,1.54-1.92,3.04-1.92h0c1.84,0,3.27,1.2,3.05,2.57Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M195.74,864.15c0,.1,0,.21-.03.31-.78,4.77-.79,9.47-.03,13.94.1.58-.07,1.17-.49,1.66-.6.71-1.62,1.13-2.73,1.13-1.57,0-2.92-.86-3.21-2.04-1.24-4.97-1.24-10.15.02-15.42.29-1.2,1.64-2.06,3.22-2.06,1.11,0,2.13.42,2.74,1.13.34.4.52.87.52,1.34ZM194.75,871.65c0-2.38.2-4.8.6-7.25h0c.08-.48-.06-.95-.41-1.35-.53-.63-1.45-1-2.45-1-1.41,0-2.62.75-2.86,1.78-1.25,5.2-1.25,10.33-.03,15.24.26,1.02,1.46,1.76,2.86,1.76,1.01,0,1.92-.38,2.45-1,.35-.41.49-.88.41-1.36-.38-2.22-.57-4.5-.57-6.82Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M214.79,844.18h53.64c5.4,0,9.79,4.63,9.79,10.34v141.71c0,5.71-4.38,10.34-9.79,10.34h-53.64c-5.4,0-9.79-4.63-9.79-10.34v-141.71c0-5.71,4.38-10.34,9.79-10.34Z" fill="#fff" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M278.4,854.52v141.71c0,5.8-4.47,10.53-9.97,10.53h-53.64c-5.5,0-9.97-4.72-9.97-10.53v-141.71c0-5.8,4.47-10.53,9.97-10.53h53.64c5.5,0,9.97,4.72,9.97,10.53ZM205.19,996.23c0,5.6,4.31,10.16,9.6,10.16h53.64c5.3,0,9.6-4.56,9.6-10.16v-141.71c0-5.6-4.31-10.16-9.6-10.16h-53.64c-5.3,0-9.6,4.56-9.6,10.16v141.71Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <rect x="231.37" y="844.18" width="21.81" height="162.39" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M253.37,843.99v162.76h-22.18v-162.76h22.18ZM253,1006.39v-162.03h-21.45v162.03h21.45Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <polygon points="265.5 970.56 274.83 980.42 265.59 990.18 256.26 980.32 265.5 970.56" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M275.09,980.42l-9.5,10.03-9.59-10.13,9.49-10.03,9.59,10.13ZM265.59,989.92l8.99-9.5-9.08-9.6-8.99,9.5,9.08,9.59Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <ellipse cx="265.54" cy="980.38" rx="5.68" ry="6" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M271.41,980.38c0,3.41-2.63,6.19-5.87,6.19s-5.87-2.78-5.87-6.19,2.63-6.19,5.87-6.19,5.87,2.78,5.87,6.19ZM260.05,980.38c0,3.21,2.47,5.82,5.5,5.82s5.5-2.61,5.5-5.82-2.47-5.82-5.5-5.82-5.5,2.61-5.5,5.82Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M265.54,976.53c2.01,0,3.64,1.72,3.64,3.85s-1.63,3.85-3.64,3.85-3.65-1.72-3.65-3.85,1.63-3.85,3.65-3.85Z" fill="#fff" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M269.37,980.38c0,2.23-1.72,4.04-3.83,4.04s-3.83-1.81-3.83-4.04,1.72-4.03,3.83-4.03,3.83,1.81,3.83,4.03ZM262.08,980.38c0,2.02,1.55,3.67,3.46,3.67s3.46-1.65,3.46-3.67-1.55-3.67-3.46-3.67-3.46,1.65-3.46,3.67Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <polygon points="265.5 936.3 274.83 946.16 265.59 955.93 256.26 946.07 265.5 936.3" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M275.09,946.16l-9.5,10.03-9.59-10.13,9.49-10.03,9.59,10.13ZM265.59,955.66l8.99-9.5-9.08-9.59-8.99,9.5,9.08,9.6Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <ellipse cx="265.54" cy="946.13" rx="5.68" ry="6" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M271.41,946.13c0,3.41-2.63,6.19-5.87,6.19s-5.87-2.78-5.87-6.19,2.63-6.19,5.87-6.19,5.87,2.78,5.87,6.19ZM260.05,946.13c0,3.21,2.47,5.82,5.5,5.82s5.5-2.61,5.5-5.82-2.47-5.82-5.5-5.82-5.5,2.61-5.5,5.82Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M265.54,942.28c2.01,0,3.64,1.72,3.64,3.85s-1.63,3.85-3.64,3.85-3.65-1.72-3.65-3.85,1.63-3.85,3.65-3.85Z" fill="#fff" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M269.37,946.13c0,2.22-1.72,4.03-3.83,4.03s-3.83-1.81-3.83-4.03,1.72-4.04,3.83-4.04,3.83,1.81,3.83,4.04ZM262.08,946.13c0,2.02,1.55,3.67,3.46,3.67s3.46-1.65,3.46-3.67-1.55-3.67-3.46-3.67-3.46,1.65-3.46,3.67Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <polygon points="265.5 899.3 274.83 909.17 265.59 918.93 256.26 909.07 265.5 899.3" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M275.09,909.17l-9.5,10.03-9.59-10.13,9.49-10.03,9.59,10.13ZM265.59,918.67l8.99-9.5-9.08-9.6-8.99,9.5,9.08,9.6Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <ellipse cx="265.54" cy="909.13" rx="5.68" ry="6" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M271.41,909.13c0,3.41-2.63,6.19-5.87,6.19s-5.87-2.78-5.87-6.19,2.63-6.19,5.87-6.19,5.87,2.78,5.87,6.19ZM260.05,909.13c0,3.21,2.47,5.82,5.5,5.82s5.5-2.61,5.5-5.82-2.47-5.82-5.5-5.82-5.5,2.61-5.5,5.82Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M265.54,905.28c2.01,0,3.64,1.72,3.64,3.85s-1.63,3.85-3.64,3.85-3.65-1.72-3.65-3.85,1.63-3.85,3.65-3.85Z" fill="#fff" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M269.37,909.13c0,2.22-1.72,4.03-3.83,4.03s-3.83-1.81-3.83-4.03,1.72-4.03,3.83-4.03,3.83,1.81,3.83,4.03ZM262.08,909.13c0,2.02,1.55,3.67,3.46,3.67s3.46-1.65,3.46-3.67-1.55-3.67-3.46-3.67-3.46,1.65-3.46,3.67Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <polygon points="265.5 859.37 274.83 869.24 265.59 879 256.26 869.14 265.5 859.37" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M275.09,869.24l-9.5,10.03-9.59-10.13,9.49-10.03,9.59,10.13ZM265.59,878.74l8.99-9.5-9.08-9.59-8.99,9.5,9.08,9.6Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <ellipse cx="265.54" cy="869.2" rx="5.68" ry="6" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M271.41,869.2c0,3.41-2.63,6.19-5.87,6.19s-5.87-2.78-5.87-6.19,2.63-6.19,5.87-6.19,5.87,2.78,5.87,6.19ZM260.05,869.2c0,3.21,2.47,5.82,5.5,5.82s5.5-2.61,5.5-5.82-2.47-5.82-5.5-5.82-5.5,2.61-5.5,5.82Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M265.54,865.35c2.01,0,3.64,1.72,3.64,3.85s-1.63,3.85-3.64,3.85-3.65-1.72-3.65-3.85,1.63-3.85,3.65-3.85Z" fill="#fff" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M269.37,869.2c0,2.23-1.72,4.03-3.83,4.03s-3.83-1.81-3.83-4.03,1.72-4.03,3.83-4.03,3.83,1.81,3.83,4.03ZM262.08,869.2c0,2.02,1.55,3.67,3.46,3.67s3.46-1.65,3.46-3.67-1.55-3.67-3.46-3.67-3.46,1.65-3.46,3.67Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <polygon points="218.58 970.56 227.91 980.42 218.67 990.18 209.34 980.32 218.58 970.56" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M228.16,980.42l-9.49,10.03-9.59-10.13,9.49-10.03,9.59,10.13ZM218.67,989.92l8.99-9.5-9.08-9.6-8.99,9.5,9.08,9.59Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M218.62,974.38c3.14,0,5.68,2.69,5.68,6s-2.54,6-5.68,6-5.68-2.69-5.68-6,2.54-6,5.68-6Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M224.49,980.38c0,3.41-2.63,6.19-5.87,6.19s-5.87-2.78-5.87-6.19,2.63-6.19,5.87-6.19,5.87,2.78,5.87,6.19ZM213.12,980.38c0,3.21,2.47,5.82,5.5,5.82s5.5-2.61,5.5-5.82-2.47-5.82-5.5-5.82-5.5,2.61-5.5,5.82Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M218.62,976.53c2.01,0,3.65,1.72,3.65,3.85s-1.63,3.85-3.65,3.85-3.64-1.72-3.64-3.85,1.63-3.85,3.64-3.85Z" fill="#fff" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M222.45,980.38c0,2.23-1.72,4.04-3.83,4.04s-3.83-1.81-3.83-4.04,1.72-4.03,3.83-4.03,3.83,1.81,3.83,4.03ZM215.16,980.38c0,2.02,1.55,3.67,3.46,3.67s3.46-1.65,3.46-3.67-1.55-3.67-3.46-3.67-3.46,1.65-3.46,3.67Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <polygon points="218.58 936.3 227.91 946.16 218.67 955.93 209.34 946.07 218.58 936.3" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M228.16,946.16l-9.49,10.03-9.59-10.13,9.49-10.03,9.59,10.13ZM218.67,955.66l8.99-9.5-9.08-9.59-8.99,9.5,9.08,9.6Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M218.62,940.12c3.14,0,5.68,2.69,5.68,6s-2.54,6-5.68,6-5.68-2.69-5.68-6,2.54-6,5.68-6Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M224.49,946.13c0,3.41-2.63,6.19-5.87,6.19s-5.87-2.78-5.87-6.19,2.63-6.19,5.87-6.19,5.87,2.78,5.87,6.19ZM213.12,946.13c0,3.21,2.47,5.82,5.5,5.82s5.5-2.61,5.5-5.82-2.47-5.82-5.5-5.82-5.5,2.61-5.5,5.82Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M218.62,942.28c2.01,0,3.65,1.72,3.65,3.85s-1.63,3.85-3.65,3.85-3.64-1.72-3.64-3.85,1.63-3.85,3.64-3.85Z" fill="#fff" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M222.45,946.13c0,2.22-1.72,4.03-3.83,4.03s-3.83-1.81-3.83-4.03,1.72-4.04,3.83-4.04,3.83,1.81,3.83,4.04ZM215.16,946.13c0,2.02,1.55,3.67,3.46,3.67s3.46-1.65,3.46-3.67-1.55-3.67-3.46-3.67-3.46,1.65-3.46,3.67Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <polygon points="218.58 899.3 227.91 909.17 218.67 918.93 209.34 909.07 218.58 899.3" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M228.16,909.17l-9.49,10.03-9.59-10.13,9.49-10.03,9.59,10.13ZM218.67,918.67l8.99-9.5-9.08-9.6-8.99,9.5,9.08,9.6Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M218.62,903.13c3.14,0,5.68,2.69,5.68,6s-2.54,6-5.68,6-5.68-2.69-5.68-6,2.54-6,5.68-6Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M224.49,909.13c0,3.41-2.63,6.19-5.87,6.19s-5.87-2.78-5.87-6.19,2.63-6.19,5.87-6.19,5.87,2.78,5.87,6.19ZM213.12,909.13c0,3.21,2.47,5.82,5.5,5.82s5.5-2.61,5.5-5.82-2.47-5.82-5.5-5.82-5.5,2.61-5.5,5.82Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M218.62,905.28c2.01,0,3.65,1.72,3.65,3.85s-1.63,3.85-3.65,3.85-3.64-1.72-3.64-3.85,1.63-3.85,3.64-3.85Z" fill="#fff" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M222.45,909.13c0,2.22-1.72,4.03-3.83,4.03s-3.83-1.81-3.83-4.03,1.72-4.03,3.83-4.03,3.83,1.81,3.83,4.03ZM215.16,909.13c0,2.02,1.55,3.67,3.46,3.67s3.46-1.65,3.46-3.67-1.55-3.67-3.46-3.67-3.46,1.65-3.46,3.67Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <polygon points="218.58 859.37 227.91 869.24 218.67 879 209.34 869.14 218.58 859.37" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M228.16,869.24l-9.49,10.03-9.59-10.13,9.49-10.03,9.59,10.13ZM218.67,878.74l8.99-9.5-9.08-9.59-8.99,9.5,9.08,9.6Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M218.62,863.2c3.14,0,5.68,2.69,5.68,6s-2.54,6-5.68,6-5.68-2.69-5.68-6,2.54-6,5.68-6Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M224.49,869.2c0,3.41-2.63,6.19-5.87,6.19s-5.87-2.78-5.87-6.19,2.63-6.19,5.87-6.19,5.87,2.78,5.87,6.19ZM213.12,869.2c0,3.21,2.47,5.82,5.5,5.82s5.5-2.61,5.5-5.82-2.47-5.82-5.5-5.82-5.5,2.61-5.5,5.82Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M218.62,865.35c2.01,0,3.65,1.72,3.65,3.85s-1.63,3.85-3.65,3.85-3.64-1.72-3.64-3.85,1.63-3.85,3.64-3.85Z" fill="#fff" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M222.45,869.2c0,2.23-1.72,4.03-3.83,4.03s-3.83-1.81-3.83-4.03,1.72-4.03,3.83-4.03,3.83,1.81,3.83,4.03ZM215.16,869.2c0,2.02,1.55,3.67,3.46,3.67s3.46-1.65,3.46-3.67-1.55-3.67-3.46-3.67-3.46,1.65-3.46,3.67Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M238.59,927.48c-4.33,2.8-3.15,5.73-2.19,7.77,1.55,3.28,3.94,3.88,3.94,3.88,0,0,.18-3.33,1.75-4.16,1.58-.83,3.06-5.55.7-6.57-2.36-1.02-2.63-1.94-4.2-.92Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M244.21,930.71c0,1.74-.96,3.85-2.03,4.42-1.47.77-1.65,3.98-1.65,4.01v.22s-.23-.06-.23-.06c-.1-.03-2.49-.67-4.06-3.98-.83-1.75-2.37-5.01,2.25-8h0c1.21-.78,1.77-.47,2.78.1.41.23.91.52,1.59.81.83.36,1.29,1.15,1.34,2.3,0,.06,0,.12,0,.18ZM240.18,938.88c.07-.8.42-3.33,1.83-4.07.99-.52,1.9-2.64,1.83-4.26-.03-.69-.24-1.6-1.12-1.98-.69-.3-1.21-.59-1.62-.82-1-.57-1.38-.78-2.4-.11h0c-4.02,2.6-3.2,5.25-2.12,7.54,1.23,2.59,3,3.48,3.61,3.71Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M242.09,923.22c1.54-1.52,1.4-4.53-.26-6.1-1.66-1.57-3.94-1.66-4.11-2.96,0,0-1.75,1.94-1.58,4.72.18,2.77.79,3.98,1.93,5.09,1.14,1.11,2.63.65,4.03-.74Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M243.35,920.4c0,1.17-.41,2.24-1.13,2.95-1.59,1.58-3.15,1.85-4.28.74-1.11-1.09-1.8-2.29-1.98-5.21-.17-2.82,1.55-4.77,1.62-4.85l.27-.29.05.39c.08.62.78.94,1.66,1.36.77.36,1.64.77,2.4,1.49.87.82,1.38,2.05,1.39,3.36,0,.02,0,.04,0,.06ZM236.31,918.49c0,.12,0,.25.01.37.18,2.8.82,3.94,1.87,4.97,1.33,1.29,2.93.09,3.77-.74h0c.66-.65,1.04-1.64,1.02-2.74-.01-1.2-.49-2.35-1.28-3.1-.72-.68-1.56-1.08-2.3-1.43-.79-.37-1.49-.7-1.76-1.27-.42.58-1.33,2.04-1.33,3.94Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M240.56,925.66c.25,3.6-3.29,6.31-5.57,2.31-1.26-2.2-4.85-3.45-4.85-3.45,0,0,3.13-3.23,4.51-3.57,3.96-.99,5.64.95,5.97,2.26.34,1.31-1.13,1.55-1.13,1.55,0,0,1,.03,1.06.91Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M240.86,923.58c0,.25-.06.47-.19.67-.15.22-.35.38-.55.48.31.15.59.44.63.92h0c.15,2.04-.9,3.92-2.42,4.39-1.28.39-2.55-.33-3.49-1.98-1.21-2.12-4.71-3.36-4.75-3.37l-.27-.09.2-.21c.13-.13,3.19-3.27,4.6-3.62,4.14-1.04,5.87,1.11,6.2,2.4.04.15.06.29.06.42ZM239.47,924.57s.62-.11.89-.53c.14-.21.17-.48.09-.79-.32-1.25-1.89-3.1-5.75-2.13-1.12.28-3.52,2.62-4.22,3.32.87.34,3.59,1.53,4.68,3.44.85,1.48,1.96,2.14,3.07,1.81,1.34-.41,2.3-2.18,2.16-4.01h0c-.05-.7-.85-.74-.89-.74l-.02-.36Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M242.04,924.31c-.09,2.59,1.23,3.7,2.98,3.7s4.11-2.4,4.64-6.01c.27-1.84.44-3.14.44-3.14,0,0-1.89.04-3.94-.46-2.63-.65-4.55,1.02-5.08,2.96-.53,1.94.96,2.96.96,2.96Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M250.3,918.66l-.03.21s-.17,1.31-.44,3.15c-.53,3.64-2.97,6.17-4.82,6.17-.92,0-1.7-.3-2.24-.86-.64-.66-.95-1.65-.92-2.93-.32-.26-1.43-1.33-.95-3.1.55-2.05,2.55-3.77,5.3-3.09,2,.49,3.87.46,3.89.46h.21ZM242.22,924.55c0,1.11.28,1.96.82,2.52.47.49,1.16.75,1.98.75,1.71,0,3.96-2.4,4.46-5.85.2-1.4.35-2.5.41-2.93-.56,0-2.12-.06-3.77-.47-2.52-.62-4.35.95-4.86,2.83-.48,1.79.83,2.72.89,2.76l.08.06v.1c0,.08,0,.16,0,.24Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M241.31,931.78c-1.67-2.39-1.82-3.11-.88-5.08.29-.62,2.75-.21,2.75-.21,0,0,1.77-3.11,3.83-1.35,2.06,1.76-1.18,12.34-1.47,10.89-.29-1.45-3.44-3.14-4.22-4.25Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M247.86,927.66c0,2.68-1.02,6.45-1.65,7.93-.28.66-.45.78-.62.76-.09,0-.2-.07-.25-.28-.17-.82-1.39-1.78-2.47-2.62-.72-.57-1.4-1.1-1.72-1.56h0c-1.72-2.46-1.85-3.24-.9-5.26.31-.65,2.1-.44,2.82-.33.24-.39,1.11-1.64,2.29-1.84.61-.11,1.2.08,1.75.56.54.46.75,1.45.75,2.65ZM245.67,935.87c.5-.81,1.68-4.74,1.81-7.71.07-1.48-.14-2.47-.61-2.87-.47-.4-.96-.56-1.45-.47-1.2.21-2.09,1.76-2.1,1.77l-.06.11-.13-.02c-1.11-.19-2.41-.2-2.55.1-.9,1.9-.78,2.54.87,4.9h0c.29.41.95.93,1.65,1.48,1.13.89,2.3,1.8,2.57,2.71Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <path d="M239.71,924.63l-.16.33c-1.84-.89-3.75-1.2-5.85-.97l-.04-.36c2.17-.25,4.15.08,6.05,1Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M245.15,932.45l-.31.19c-1.19-1.93-1.82-3.93-1.91-6.13l.37-.02c.09,2.14.69,4.08,1.85,5.96Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M246.96,920.66c-1.89.74-3.46,1.95-4.79,3.68l-.29-.22c1.37-1.79,2.99-3.04,4.95-3.8l.13.34Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="Car_alt">
                    <g>
                    <path d="M824.42,942.3v141.87c0,5.54-2.86,10.72-7.62,13.55-5.82,3.46-15.85,6.8-32.85,6.8s-26.92-3.41-32.78-6.9c-4.78-2.84-7.69-8.02-7.69-13.59v-141.65c0-2.51.47-4.97,1.35-7.26.7-.06,3.91-.57,7.98-4.93,4.62-4.94,10.24-4.44,10.24-4.44l-1.71-5.14s-.12,0-.34.02c1.28-.59,2.64-1.16,4.07-1.68l.93,3.9s8.72-2.09,18.09-2.22c9.37.12,18.09,2.22,18.09,2.22l.99-4.13c1.71.65,3.31,1.37,4.81,2.14-1.09-.15-1.77-.17-1.77-.17l-1.71,5.15s5.62-.51,10.24,4.44c4.61,4.94,8.13,4.94,8.44,5.11,1.05,2.46,1.23,4.18,1.23,6.92Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M783.95,1104.83c-14.12,0-25.2-2.34-32.94-6.94-4.83-2.87-7.84-8.18-7.84-13.85v-141.65c0-2.53.46-5.01,1.38-7.37.04-.11.14-.18.26-.19.59-.05,3.74-.5,7.78-4.84,3.95-4.24,8.58-4.56,10.03-4.55l-1.5-4.5h-.1c-.14.01-.28-.08-.31-.23s.03-.29.17-.35c1.35-.63,2.73-1.2,4.1-1.69.08-.03.17-.02.25.02.08.04.13.11.15.2l.86,3.61c1.61-.36,9.53-2.05,17.86-2.16,8.34.11,16.26,1.79,17.87,2.16l.92-3.84c.02-.09.08-.16.15-.2.08-.04.17-.05.25-.02,1.64.63,3.27,1.35,4.84,2.15.13.07.2.22.15.36-.04.14-.19.23-.33.21-.7-.1-1.23-.14-1.51-.16l-1.5,4.51c1.46-.02,6.08.32,10.03,4.55,3.9,4.18,6.95,4.75,7.96,4.94.21.04.32.06.4.11.06.03.11.09.14.15,1.07,2.5,1.26,4.26,1.26,7.04v141.87c0,5.67-2.98,10.96-7.77,13.81-7.65,4.54-18.75,6.85-33.01,6.85ZM745.05,935.41c-.84,2.24-1.27,4.58-1.27,6.97v141.65c0,5.46,2.89,10.56,7.54,13.33,7.65,4.55,18.62,6.86,32.63,6.86s25.14-2.27,32.69-6.76c4.61-2.74,7.47-7.83,7.47-13.29v-141.87c0-2.64-.17-4.33-1.15-6.66-.04,0-.1-.02-.15-.03-1.05-.2-4.26-.81-8.29-5.13-4.45-4.77-9.93-4.35-9.99-4.34-.1,0-.2-.03-.27-.11-.06-.08-.08-.19-.05-.29l1.71-5.15c.04-.13.17-.2.3-.21,0,0,.04,0,.1,0-.96-.45-1.95-.87-2.93-1.26l-.91,3.79c-.04.16-.21.26-.37.23-.09-.02-8.8-2.08-18.03-2.21-9.21.12-17.93,2.19-18.02,2.21-.08.02-.16,0-.23-.04-.07-.04-.12-.11-.14-.19l-.85-3.57c-1.06.39-2.13.83-3.18,1.31l1.67,5c.03.1.01.21-.05.29-.06.08-.17.12-.27.11-.05,0-5.54-.42-9.99,4.34-3.87,4.15-7.03,4.88-7.99,5.01Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <g>
                        <rect x="802.29" y="998.65" width="3.41" height="74.91" rx="1.71" ry="1.71" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M805.12,1073.86h-2.25c-.49,0-.89-.4-.89-.89v-73.74c0-.49.4-.89.89-.89h2.25c.49,0,.89.4.89.89v73.74c0,.49-.4.89-.89.89ZM802.87,998.95c-.15,0-.28.12-.28.28v73.74c0,.15.12.28.28.28h2.25c.15,0,.28-.12.28-.28v-73.74c0-.15-.12-.28-.28-.28h-2.25Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                        <rect x="794.25" y="998.65" width="3.41" height="74.91" rx="1.71" ry="1.71" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M797.08,1073.86h-2.25c-.49,0-.89-.4-.89-.89v-73.74c0-.49.4-.89.89-.89h2.25c.49,0,.89.4.89.89v73.74c0,.49-.4.89-.89.89ZM794.84,998.95c-.15,0-.28.12-.28.28v73.74c0,.15.12.28.28.28h2.25c.15,0,.28-.12.28-.28v-73.74c0-.15-.12-.28-.28-.28h-2.25Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                        <path d="M788.03,998.65h0c.94,0,1.71.76,1.71,1.71v71.49c0,.94-.76,1.71-1.71,1.71h0c-.94,0-1.71-.76-1.71-1.71v-71.49c0-.94.76-1.71,1.71-1.71Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M789.16,1073.86h-2.25c-.49,0-.89-.4-.89-.89v-73.74c0-.49.4-.89.89-.89h2.25c.49,0,.89.4.89.89v73.74c0,.49-.4.89-.89.89ZM786.91,998.95c-.15,0-.28.12-.28.28v73.74c0,.15.12.28.28.28h2.25c.15,0,.28-.12.28-.28v-73.74c0-.15-.12-.28-.28-.28h-2.25Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                        <path d="M780,998.65h0c.94,0,1.71.76,1.71,1.71v71.49c0,.94-.76,1.71-1.71,1.71h0c-.94,0-1.71-.76-1.71-1.71v-71.49c0-.94.76-1.71,1.71-1.71Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M781.12,1073.86h-2.25c-.49,0-.89-.4-.89-.89v-73.74c0-.49.4-.89.89-.89h2.25c.49,0,.89.4.89.89v73.74c0,.49-.4.89-.89.89ZM778.87,998.95c-.15,0-.28.12-.28.28v73.74c0,.15.12.28.28.28h2.25c.15,0,.28-.12.28-.28v-73.74c0-.15-.12-.28-.28-.28h-2.25Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                        <path d="M772.25,998.65h0c.94,0,1.71.76,1.71,1.71v71.49c0,.94-.76,1.71-1.71,1.71h0c-.94,0-1.71-.76-1.71-1.71v-71.49c0-.94.76-1.71,1.71-1.71Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M773.37,1073.86h-2.25c-.49,0-.89-.4-.89-.89v-73.74c0-.49.4-.89.89-.89h2.25c.49,0,.89.4.89.89v73.74c0,.49-.4.89-.89.89ZM771.12,998.95c-.15,0-.28.12-.28.28v73.74c0,.15.12.28.28.28h2.25c.15,0,.28-.12.28-.28v-73.74c0-.15-.12-.28-.28-.28h-2.25Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                        <rect x="762.51" y="998.65" width="3.41" height="74.91" rx="1.71" ry="1.71" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M765.34,1073.86h-2.25c-.49,0-.89-.4-.89-.89v-73.74c0-.49.4-.89.89-.89h2.25c.49,0,.89.4.89.89v73.74c0,.49-.4.89-.89.89ZM763.09,998.95c-.15,0-.28.12-.28.28v73.74c0,.15.12.28.28.28h2.25c.15,0,.28-.12.28-.28v-73.74c0-.15-.12-.28-.28-.28h-2.25Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    </g>
                    <g>
                    <g>
                        <path d="M806.65,991.65c-14.9-4.65-30.85-4.65-45.75,0-1.18.37-2.44-.27-2.84-1.45-2.06-6.06-4.13-12.11-6.19-18.17-.42-1.23.26-2.56,1.49-2.95,19.79-6.3,41.04-6.3,60.83,0,1.23.39,1.9,1.72,1.49,2.95-2.06,6.06-4.13,12.11-6.19,18.17-.4,1.18-1.66,1.82-2.84,1.45Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M760.22,992.06c-1.08,0-2.07-.68-2.44-1.76l-6.19-18.17c-.23-.67-.18-1.39.14-2.02.32-.63.87-1.1,1.54-1.31,19.96-6.35,41.06-6.35,61.02,0,.67.21,1.22.68,1.54,1.31.32.63.37,1.35.14,2.02l-6.19,18.17c-.46,1.34-1.87,2.07-3.22,1.64-14.9-4.65-30.66-4.65-45.56,0-.26.08-.52.12-.78.12ZM783.78,964.63c-10.2,0-20.41,1.58-30.32,4.73-.52.16-.94.52-1.18,1.01-.25.49-.28,1.04-.11,1.55l6.19,18.17c.35,1.03,1.43,1.58,2.46,1.26,15.02-4.69,30.9-4.69,45.93,0h0c1.03.32,2.11-.23,2.46-1.26l6.19-18.17c.18-.52.14-1.07-.11-1.55-.24-.49-.66-.84-1.18-1.01-9.92-3.16-20.12-4.73-30.32-4.73Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                        <path d="M806.65,991.65c-14.9-4.65-30.85-4.65-45.75,0-1.18.37-2.44-.27-2.84-1.45-2.06-6.06-4.13-12.11-6.19-18.17-.42-1.23.26-2.56,1.49-2.95,19.79-6.3,41.04-6.3,60.83,0,1.23.39,1.9,1.72,1.49,2.95-2.06,6.06-4.13,12.11-6.19,18.17-.4,1.18-1.66,1.82-2.84,1.45Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M760.22,992.06c-1.08,0-2.07-.68-2.44-1.76l-6.19-18.17c-.23-.67-.18-1.39.14-2.02.32-.63.87-1.1,1.54-1.31,19.96-6.35,41.06-6.35,61.02,0,.67.21,1.22.68,1.54,1.31.32.63.37,1.35.14,2.02l-6.19,18.17c-.46,1.34-1.87,2.07-3.22,1.64-14.9-4.65-30.66-4.65-45.56,0-.26.08-.52.12-.78.12ZM783.78,964.63c-10.2,0-20.41,1.58-30.32,4.73-.52.16-.94.52-1.18,1.01-.25.49-.28,1.04-.11,1.55l6.19,18.17c.35,1.03,1.43,1.58,2.46,1.26,15.02-4.69,30.9-4.69,45.93,0h0c1.03.32,2.11-.23,2.46-1.26l6.19-18.17c.18-.52.14-1.07-.11-1.55-.24-.49-.66-.84-1.18-1.01-9.92-3.16-20.12-4.73-30.32-4.73Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    </g>
                    <g>
                    <g>
                        <path d="M811.52,994.65l4.08-9.23c.09-.2.29-.34.51-.34h1.22c.31,0,.56.25.56.56v23.56c0,.33-.26.59-.59.59h-5.24c-.33,0-.59-.27-.59-.59v-14.31c0-.08.02-.17.05-.24Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M817.3,1010.1h-5.24c-.49,0-.9-.4-.9-.9v-14.31c0-.13.03-.25.08-.36l4.08-9.23c.14-.31.45-.52.79-.52h1.22c.48,0,.87.39.87.87v23.56c0,.5-.4.9-.9.9ZM811.8,994.77h0s-.03.08-.03.12v14.31c0,.16.13.29.29.29h5.24c.16,0,.29-.13.29-.29v-23.56c0-.14-.11-.26-.26-.26h-1.22c-.1,0-.19.06-.23.15l-4.08,9.23Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                        <path d="M811.52,1038.23l5.15,9.23c.09.2.29.34.51.34h.15c.31,0,.56-.25.56-.56v-33.21c0-.33-.26-.59-.59-.59h-5.24c-.33,0-.59.27-.59.59v23.97c0,.08.02.17.05.24Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M817.33,1048.1h-.15c-.34,0-.65-.2-.79-.52l-5.15-9.23c-.05-.12-.08-.24-.08-.36v-23.97c0-.5.4-.9.9-.9h5.24c.49,0,.9.4.9.9v33.21c0,.48-.39.87-.87.87ZM811.8,1038.09l5.14,9.22c.05.12.15.18.25.18h.15c.14,0,.26-.12.26-.26v-33.21c0-.16-.13-.29-.29-.29h-5.24c-.16,0-.29.13-.29.29v23.97s0,.07.02.11Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                        <path d="M811.46,1047.25c0-.17.23-.23.31-.08,1.26,2.34,6.12,10.28,6.12,10.48v22.24c0,.38-.48.54-.71.24-1.7-2.3-5.72-7.89-5.72-8.09,0,0-.03-20.87,0-24.79Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M817.49,1080.59c-.21,0-.42-.1-.55-.28-.06-.08-5.78-7.84-5.78-8.27,0-.21-.03-20.91,0-24.79,0-.22.14-.4.36-.45.21-.05.42.04.52.23.64,1.19,2.22,3.84,3.61,6.17,2.55,4.27,2.55,4.3,2.55,4.45v22.24c0,.31-.19.57-.48.67-.07.02-.15.04-.22.04ZM811.78,1071.97c.32.59,3.75,5.38,5.66,7.97.02.03.06.04.09.03.03,0,.06-.03.06-.09v-22.18c-.16-.34-1.33-2.3-2.46-4.2-1.23-2.07-2.61-4.37-3.36-5.71-.02,4.82,0,22.98,0,24.18ZM811.77,1047.25h0s0,0,0,0Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    </g>
                    <g>
                    <g>
                        <path d="M756.08,994.65l-4.08-9.23c-.09-.2-.29-.34-.51-.34h-1.22c-.31,0-.56.25-.56.56v23.56c0,.33.26.59.59.59h5.24c.33,0,.59-.27.59-.59v-14.31c0-.08-.02-.17-.05-.24Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M755.54,1010.1h-5.24c-.49,0-.9-.4-.9-.9v-23.56c0-.48.39-.87.87-.87h1.22c.34,0,.65.2.79.52l4.08,9.23c.05.12.08.24.08.36v14.31c0,.5-.4.9-.9.9ZM750.27,985.38c-.14,0-.26.12-.26.26v23.56c0,.16.13.29.29.29h5.24c.16,0,.29-.13.29-.29v-14.31s0-.08-.02-.12l-4.08-9.23c-.04-.09-.13-.15-.23-.15h-1.22Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                        <path d="M756.08,1038.23l-5.15,9.23c-.09.2-.29.34-.51.34h-.15c-.31,0-.56-.25-.56-.56v-33.21c0-.33.26-.59.59-.59h5.24c.33,0,.59.27.59.59v23.97c0,.08-.02.17-.05.24Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M750.42,1048.1h-.15c-.48,0-.87-.39-.87-.87v-33.21c0-.5.4-.9.9-.9h5.24c.49,0,.9.4.9.9v23.97c0,.13-.03.25-.08.36v.03s-5.16,9.23-5.16,9.23c-.13.29-.44.49-.78.49ZM750.3,1013.73c-.16,0-.29.13-.29.29v33.21c0,.14.11.26.26.26h.15c.1,0,.19-.06.23-.15l5.15-9.25s.02-.07.02-.11v-23.97c0-.16-.13-.29-.29-.29h-5.24Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                        <path d="M756.14,1047.25c0-.17-.23-.23-.31-.08-1.26,2.34-6.12,10.28-6.12,10.48v22.24c0,.38.48.54.71.24,1.7-2.3,5.72-7.89,5.72-8.09,0,0,.03-20.87,0-24.79Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M750.1,1080.59c-.07,0-.15-.01-.22-.04-.29-.1-.48-.36-.48-.67v-22.24c0-.15,0-.18,2.54-4.45,1.39-2.34,2.97-4.99,3.62-6.18.1-.19.31-.28.52-.23.21.05.35.24.36.45h0c.02,3.88,0,24.58,0,24.79,0,.43-5.72,8.19-5.78,8.27-.14.18-.34.28-.55.28ZM750.01,1057.7v22.18c0,.05.03.08.06.09.04.01.07,0,.09-.03,1.91-2.59,5.34-7.38,5.66-7.97,0-1.2.02-19.36,0-24.18-.75,1.34-2.13,3.65-3.36,5.72-1.13,1.89-2.29,3.85-2.46,4.19Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    </g>
                    <g>
                    <g>
                        <path d="M811.66,1092.62c-18.28,4.72-37.45,4.72-55.73,0,1.28-5,2.55-10,3.83-14.99,15.77,4.07,32.3,4.07,48.07,0,1.28,5,2.55,10,3.83,14.99Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M783.79,1096.45c-9.4,0-18.8-1.18-27.94-3.54l-.3-.08,3.98-15.59.3.08c15.67,4.05,32.24,4.05,47.91,0l.3-.08,3.98,15.59-.3.08c-9.14,2.36-18.54,3.54-27.94,3.54ZM756.3,1092.4c17.99,4.59,36.99,4.59,54.98,0l-3.68-14.4c-15.59,3.97-32.04,3.97-47.63,0l-3.68,14.4Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                        <path d="M811.66,1092.62c-18.28,4.72-37.45,4.72-55.73,0,1.28-5,2.55-10,3.83-14.99,15.77,4.07,32.3,4.07,48.07,0,1.28,5,2.55,10,3.83,14.99Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M783.79,1096.45c-9.4,0-18.8-1.18-27.94-3.54l-.3-.08,3.98-15.59.3.08c15.67,4.05,32.24,4.05,47.91,0l.3-.08,3.98,15.59-.3.08c-9.14,2.36-18.54,3.54-27.94,3.54ZM756.3,1092.4c17.99,4.59,36.99,4.59,54.98,0l-3.68-14.4c-15.59,3.97-32.04,3.97-47.63,0l-3.68,14.4Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    </g>
                    <g>
                    <path d="M820.2,984.54h9.53s.5-5.95-9.53-5.45v5.45Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M830.01,984.85h-10.12v-6.04h.29c3.96-.21,6.8.55,8.44,2.25,1.55,1.6,1.42,3.44,1.41,3.52l-.02.28ZM820.51,984.24h8.92c-.03-.53-.22-1.72-1.25-2.77-1.48-1.52-4.06-2.22-7.67-2.08v4.85Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <path d="M747.69,984.54h-9.53s-.5-5.95,9.53-5.45v5.45Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M748,984.85h-10.12l-.02-.28c0-.08-.14-1.91,1.41-3.52,1.64-1.7,4.48-2.46,8.44-2.26h.29v6.06ZM738.47,984.24h8.92v-4.85c-3.61-.14-6.19.56-7.67,2.08-1.03,1.05-1.22,2.24-1.25,2.77Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <path d="M804.25,927.68s-2.51,25.83,10.03,37.93" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M814.28,965.91c-.08,0-.15-.03-.21-.09-12.5-12.07-10.15-37.92-10.13-38.18.02-.17.16-.29.33-.27.17.02.29.17.27.33-.02.26-2.35,25.82,9.94,37.68.12.12.12.31,0,.43-.06.06-.14.09-.22.09Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <path d="M813.1,931.81s-1.02,21.48,6.29,37.13" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M819.4,969.24c-.12,0-.23-.07-.28-.18-7.26-15.54-6.33-37.06-6.32-37.27,0-.17.15-.3.32-.29.17,0,.3.15.29.32-.01.21-.93,21.58,6.27,36.99.07.15,0,.33-.15.41-.04.02-.09.03-.13.03Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <path d="M804.25,927.68s-2.51,25.83,10.03,37.93" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M814.28,965.91c-.08,0-.15-.03-.21-.09-12.5-12.07-10.15-37.92-10.13-38.18.02-.17.16-.29.33-.27.17.02.29.17.27.33-.02.26-2.35,25.82,9.94,37.68.12.12.12.31,0,.43-.06.06-.14.09-.22.09Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <path d="M813.1,931.81s-1.02,21.48,6.29,37.13" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M819.4,969.24c-.12,0-.23-.07-.28-.18-7.26-15.54-6.33-37.06-6.32-37.27,0-.17.15-.3.32-.29.17,0,.3.15.29.32-.01.21-.93,21.58,6.27,36.99.07.15,0,.33-.15.41-.04.02-.09.03-.13.03Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <path d="M823.19,935.38s-3.83-.17-8.44-5.11c-4.62-4.94-10.24-4.44-10.24-4.44l1.88-5.64s1.61.66,1.61.66c3.96,1.85,6.79,4.06,9.24,6.1,2.45,2.03,4.24,4.36,5.46,7.22.19.46.39.85.49,1.21Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M823.19,935.69s0,0-.01,0c-.16,0-4-.23-8.65-5.21-4.45-4.77-9.94-4.34-9.99-4.34-.11,0-.2-.03-.27-.11-.06-.08-.08-.19-.05-.29l1.88-5.64c.03-.08.09-.15.16-.18.08-.04.16-.04.24,0,0,0,1.5.62,1.6.66,0,0,.02,0,.03.01,4.06,1.9,6.93,4.17,9.31,6.14,2.51,2.08,4.32,4.48,5.54,7.33.06.15.13.3.19.43.12.28.24.55.32.81.03.09,0,.2-.05.27-.06.07-.15.12-.24.12ZM805.01,925.51c1.53,0,6.07.38,9.96,4.55,3.53,3.78,6.61,4.72,7.75,4.94-.04-.09-.08-.18-.12-.27-.06-.14-.13-.29-.19-.44-1.18-2.76-2.94-5.08-5.37-7.1-2.35-1.95-5.18-4.19-9.18-6.06h0c-.14-.06-.46-.19-1.3-.53l-1.63,4.91s.05,0,.07,0Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <path d="M803.18,918.72l-.99,4.13s-8.72-2.09-18.09-2.22c-9.37.12-18.09,2.22-18.09,2.22l-.93-3.9c5.59-2.05,12.33-3.45,20.31-3.45,6.84,0,12.77,1.3,17.8,3.22Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M802.19,923.16s-.05,0-.07,0c-.09-.02-8.8-2.08-18.03-2.21-9.21.12-17.93,2.19-18.02,2.21-.08.02-.16,0-.23-.04-.07-.04-.12-.11-.14-.19l-.93-3.9c-.04-.15.05-.3.19-.36,6.28-2.3,13.15-3.47,20.41-3.47,6.25,0,12.28,1.09,17.91,3.24.14.05.22.21.19.36l-.99,4.13c-.03.14-.16.23-.3.23ZM784.09,920.33c8.34.11,16.26,1.79,17.87,2.16l.86-3.58c-5.49-2.06-11.36-3.1-17.44-3.1-7.09,0-13.8,1.12-19.95,3.34l.8,3.34c1.61-.36,9.53-2.05,17.86-2.16Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <path d="M762.85,927.68s2.51,25.83-10.03,37.93" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M752.81,965.91c-.08,0-.16-.03-.22-.09-.12-.12-.11-.31,0-.43,12.29-11.86,9.97-37.43,9.94-37.68-.02-.17.11-.32.27-.33.17-.02.32.11.33.27.03.26,2.38,26.11-10.13,38.18-.06.06-.14.09-.21.09Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <path d="M753.99,931.81s1.02,21.48-6.29,37.13" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M747.69,969.24s-.09,0-.13-.03c-.15-.07-.22-.25-.15-.41,7.19-15.4,6.28-36.77,6.27-36.99,0-.17.12-.31.29-.32.17-.01.31.12.32.29.01.22.94,21.73-6.32,37.27-.05.11-.16.18-.28.18Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <path d="M763.05,925.76s-5.62-.5-10.24,4.44c-4.07,4.36-7.28,4.88-7.98,4.93,1.25-3.23,3.33-6.11,6.1-8.31,2.62-2.08,5.97-4.29,10.08-6.19.22-.01.34-.02.34-.02l1.71,5.14Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M744.83,935.44c-.1,0-.19-.05-.25-.12-.06-.08-.08-.19-.04-.29,1.29-3.33,3.43-6.25,6.19-8.44,3.08-2.44,6.49-4.54,10.14-6.23.04-.02.07-.03.11-.03l.34-.02c.13,0,.26.08.3.21l1.71,5.14c.03.1.01.21-.05.29-.06.08-.17.12-.27.11-.05,0-5.54-.42-9.99,4.35-4.2,4.5-7.55,4.98-8.18,5.03,0,0-.02,0-.02,0ZM761.08,920.93c-3.59,1.67-6.94,3.73-9.96,6.13-2.54,2.02-4.54,4.67-5.81,7.69,1.17-.23,3.91-1.15,7.28-4.76,3.96-4.24,8.57-4.57,10.03-4.55l-1.5-4.5h-.05Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <path d="M823.2,1089.65s-10.37-.96-9.21,9.27c0,0,7.49-2.93,9.21-9.27Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M813.73,1099.35l-.04-.39c-.35-3.09.3-5.5,1.93-7.17,2.79-2.85,7.42-2.46,7.61-2.44l.36.03-.1.35c-1.74,6.42-9.08,9.35-9.39,9.48l-.37.14ZM822.54,1089.94c-1.33,0-4.49.23-6.5,2.29-1.42,1.45-2.02,3.55-1.79,6.25,1.48-.67,6.95-3.46,8.55-8.54-.08,0-.16,0-.26,0Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <path d="M754.54,1098.94s.46-10.46-9.64-8.82c0,0,3.26,7.38,9.64,8.82Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M754.83,1099.32l-.36-.08c-6.46-1.46-9.72-8.69-9.86-8.99l-.16-.36.39-.06c3.04-.49,5.45.04,7.18,1.58,3,2.67,2.82,7.36,2.82,7.56l-.02.36ZM745.36,1090.36c.74,1.45,3.76,6.82,8.88,8.19-.03-1.15-.3-4.65-2.61-6.7-1.51-1.34-3.61-1.84-6.27-1.49Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                </g>
                <g id="Car_alt1" data-name="Car_alt">
                    <g>
                    <path d="M604.29,942.3v141.87c0,5.54-2.86,10.72-7.62,13.55-5.82,3.46-15.85,6.8-32.85,6.8s-26.92-3.41-32.78-6.9c-4.78-2.84-7.69-8.02-7.69-13.59v-141.65c0-2.51.47-4.97,1.35-7.26.7-.06,3.91-.57,7.98-4.93,4.62-4.94,10.24-4.44,10.24-4.44l-1.71-5.14s-.12,0-.34.02c1.28-.59,2.64-1.16,4.07-1.68l.93,3.9s8.72-2.09,18.09-2.22c9.37.12,18.09,2.22,18.09,2.22l.99-4.13c1.71.65,3.31,1.37,4.81,2.14-1.09-.15-1.77-.17-1.77-.17l-1.71,5.15s5.62-.51,10.24,4.44c4.61,4.94,8.13,4.94,8.44,5.11,1.05,2.46,1.23,4.18,1.23,6.92Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M563.81,1104.83c-14.12,0-25.2-2.34-32.94-6.94-4.83-2.87-7.84-8.18-7.84-13.85v-141.65c0-2.53.46-5.01,1.38-7.37.04-.11.14-.18.26-.19.59-.05,3.74-.5,7.78-4.84,3.95-4.24,8.58-4.56,10.03-4.55l-1.5-4.5h-.1c-.14.01-.28-.08-.31-.23s.03-.29.17-.35c1.35-.63,2.73-1.2,4.1-1.69.08-.03.17-.02.25.02.08.04.13.11.15.2l.86,3.61c1.61-.36,9.53-2.05,17.86-2.16,8.34.11,16.26,1.79,17.87,2.16l.92-3.84c.02-.09.08-.16.15-.2.08-.04.17-.05.25-.02,1.64.63,3.27,1.35,4.84,2.15.13.07.2.22.15.36-.04.14-.19.23-.33.21-.7-.1-1.23-.14-1.51-.16l-1.5,4.51c1.46-.02,6.08.32,10.03,4.55,3.9,4.18,6.95,4.75,7.96,4.94.21.04.32.06.4.11.06.03.11.09.14.15,1.07,2.5,1.26,4.26,1.26,7.04v141.87c0,5.67-2.98,10.96-7.77,13.81-7.65,4.54-18.75,6.85-33.01,6.85ZM524.92,935.41c-.84,2.24-1.27,4.58-1.27,6.97v141.65c0,5.46,2.89,10.56,7.54,13.33,7.65,4.55,18.62,6.86,32.63,6.86s25.14-2.27,32.69-6.76c4.61-2.74,7.47-7.83,7.47-13.29v-141.87c0-2.64-.17-4.33-1.15-6.66-.04,0-.1-.02-.15-.03-1.05-.2-4.26-.81-8.29-5.13-4.45-4.77-9.93-4.35-9.99-4.34-.1,0-.2-.03-.27-.11-.06-.08-.08-.19-.05-.29l1.71-5.15c.04-.13.17-.2.3-.21,0,0,.04,0,.1,0-.96-.45-1.95-.87-2.93-1.26l-.91,3.79c-.04.16-.21.26-.37.23-.09-.02-8.8-2.08-18.03-2.21-9.21.12-17.93,2.19-18.02,2.21-.08.02-.16,0-.23-.04-.07-.04-.12-.11-.14-.19l-.85-3.57c-1.06.39-2.13.83-3.18,1.31l1.67,5c.03.1.01.21-.05.29-.06.08-.17.12-.27.11-.05,0-5.54-.42-9.99,4.34-3.87,4.15-7.03,4.88-7.99,5.01Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <g>
                        <rect x="582.16" y="998.65" width="3.41" height="74.91" rx="1.71" ry="1.71" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M584.99,1073.86h-2.25c-.49,0-.89-.4-.89-.89v-73.74c0-.49.4-.89.89-.89h2.25c.49,0,.89.4.89.89v73.74c0,.49-.4.89-.89.89ZM582.74,998.95c-.15,0-.28.12-.28.28v73.74c0,.15.12.28.28.28h2.25c.15,0,.28-.12.28-.28v-73.74c0-.15-.12-.28-.28-.28h-2.25Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                        <rect x="574.12" y="998.65" width="3.41" height="74.91" rx="1.71" ry="1.71" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M576.95,1073.86h-2.25c-.49,0-.89-.4-.89-.89v-73.74c0-.49.4-.89.89-.89h2.25c.49,0,.89.4.89.89v73.74c0,.49-.4.89-.89.89ZM574.71,998.95c-.15,0-.28.12-.28.28v73.74c0,.15.12.28.28.28h2.25c.15,0,.28-.12.28-.28v-73.74c0-.15-.12-.28-.28-.28h-2.25Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                        <path d="M567.9,998.65h0c.94,0,1.71.76,1.71,1.71v71.49c0,.94-.76,1.71-1.71,1.71h0c-.94,0-1.71-.76-1.71-1.71v-71.49c0-.94.76-1.71,1.71-1.71Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M569.02,1073.86h-2.25c-.49,0-.89-.4-.89-.89v-73.74c0-.49.4-.89.89-.89h2.25c.49,0,.89.4.89.89v73.74c0,.49-.4.89-.89.89ZM566.78,998.95c-.15,0-.28.12-.28.28v73.74c0,.15.12.28.28.28h2.25c.15,0,.28-.12.28-.28v-73.74c0-.15-.12-.28-.28-.28h-2.25Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                        <path d="M559.87,998.65h0c.94,0,1.71.76,1.71,1.71v71.49c0,.94-.76,1.71-1.71,1.71h0c-.94,0-1.71-.76-1.71-1.71v-71.49c0-.94.76-1.71,1.71-1.71Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M560.99,1073.86h-2.25c-.49,0-.89-.4-.89-.89v-73.74c0-.49.4-.89.89-.89h2.25c.49,0,.89.4.89.89v73.74c0,.49-.4.89-.89.89ZM558.74,998.95c-.15,0-.28.12-.28.28v73.74c0,.15.12.28.28.28h2.25c.15,0,.28-.12.28-.28v-73.74c0-.15-.12-.28-.28-.28h-2.25Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                        <path d="M552.12,998.65h0c.94,0,1.71.76,1.71,1.71v71.49c0,.94-.76,1.71-1.71,1.71h0c-.94,0-1.71-.76-1.71-1.71v-71.49c0-.94.76-1.71,1.71-1.71Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M553.24,1073.86h-2.25c-.49,0-.89-.4-.89-.89v-73.74c0-.49.4-.89.89-.89h2.25c.49,0,.89.4.89.89v73.74c0,.49-.4.89-.89.89ZM550.99,998.95c-.15,0-.28.12-.28.28v73.74c0,.15.12.28.28.28h2.25c.15,0,.28-.12.28-.28v-73.74c0-.15-.12-.28-.28-.28h-2.25Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                        <rect x="542.37" y="998.65" width="3.41" height="74.91" rx="1.71" ry="1.71" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M545.2,1073.86h-2.25c-.49,0-.89-.4-.89-.89v-73.74c0-.49.4-.89.89-.89h2.25c.49,0,.89.4.89.89v73.74c0,.49-.4.89-.89.89ZM542.96,998.95c-.15,0-.28.12-.28.28v73.74c0,.15.12.28.28.28h2.25c.15,0,.28-.12.28-.28v-73.74c0-.15-.12-.28-.28-.28h-2.25Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    </g>
                    <g>
                    <g>
                        <path d="M586.52,991.65c-14.9-4.65-30.85-4.65-45.75,0-1.18.37-2.44-.27-2.84-1.45-2.06-6.06-4.13-12.11-6.19-18.17-.42-1.23.26-2.56,1.49-2.95,19.79-6.3,41.04-6.3,60.83,0,1.23.39,1.9,1.72,1.49,2.95-2.06,6.06-4.13,12.11-6.19,18.17-.4,1.18-1.66,1.82-2.84,1.45Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M540.08,992.06c-1.08,0-2.07-.68-2.44-1.76l-6.19-18.17c-.23-.67-.18-1.39.14-2.02.32-.63.87-1.1,1.54-1.31,19.96-6.35,41.06-6.35,61.02,0,.67.21,1.22.68,1.54,1.31.32.63.37,1.35.14,2.02l-6.19,18.17c-.46,1.34-1.87,2.07-3.22,1.64-14.9-4.65-30.66-4.65-45.56,0-.26.08-.52.12-.78.12ZM563.65,964.63c-10.2,0-20.41,1.58-30.32,4.73-.52.16-.94.52-1.18,1.01-.25.49-.28,1.04-.11,1.55l6.19,18.17c.35,1.03,1.43,1.58,2.46,1.26,15.02-4.69,30.9-4.69,45.93,0h0c1.03.32,2.11-.23,2.46-1.26l6.19-18.17c.18-.52.14-1.07-.11-1.55-.24-.49-.66-.84-1.18-1.01-9.92-3.16-20.12-4.73-30.32-4.73Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                        <path d="M586.52,991.65c-14.9-4.65-30.85-4.65-45.75,0-1.18.37-2.44-.27-2.84-1.45-2.06-6.06-4.13-12.11-6.19-18.17-.42-1.23.26-2.56,1.49-2.95,19.79-6.3,41.04-6.3,60.83,0,1.23.39,1.9,1.72,1.49,2.95-2.06,6.06-4.13,12.11-6.19,18.17-.4,1.18-1.66,1.82-2.84,1.45Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M540.08,992.06c-1.08,0-2.07-.68-2.44-1.76l-6.19-18.17c-.23-.67-.18-1.39.14-2.02.32-.63.87-1.1,1.54-1.31,19.96-6.35,41.06-6.35,61.02,0,.67.21,1.22.68,1.54,1.31.32.63.37,1.35.14,2.02l-6.19,18.17c-.46,1.34-1.87,2.07-3.22,1.64-14.9-4.65-30.66-4.65-45.56,0-.26.08-.52.12-.78.12ZM563.65,964.63c-10.2,0-20.41,1.58-30.32,4.73-.52.16-.94.52-1.18,1.01-.25.49-.28,1.04-.11,1.55l6.19,18.17c.35,1.03,1.43,1.58,2.46,1.26,15.02-4.69,30.9-4.69,45.93,0h0c1.03.32,2.11-.23,2.46-1.26l6.19-18.17c.18-.52.14-1.07-.11-1.55-.24-.49-.66-.84-1.18-1.01-9.92-3.16-20.12-4.73-30.32-4.73Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    </g>
                    <g>
                    <g>
                        <path d="M591.39,994.65l4.08-9.23c.09-.2.29-.34.51-.34h1.22c.31,0,.56.25.56.56v23.56c0,.33-.26.59-.59.59h-5.24c-.33,0-.59-.27-.59-.59v-14.31c0-.08.02-.17.05-.24Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M597.17,1010.1h-5.24c-.49,0-.9-.4-.9-.9v-14.31c0-.13.03-.25.08-.36l4.08-9.23c.14-.31.45-.52.79-.52h1.22c.48,0,.87.39.87.87v23.56c0,.5-.4.9-.9.9ZM591.67,994.77h0s-.03.08-.03.12v14.31c0,.16.13.29.29.29h5.24c.16,0,.29-.13.29-.29v-23.56c0-.14-.11-.26-.26-.26h-1.22c-.1,0-.19.06-.23.15l-4.08,9.23Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                        <path d="M591.39,1038.23l5.15,9.23c.09.2.29.34.51.34h.15c.31,0,.56-.25.56-.56v-33.21c0-.33-.26-.59-.59-.59h-5.24c-.33,0-.59.27-.59.59v23.97c0,.08.02.17.05.24Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M597.2,1048.1h-.15c-.34,0-.65-.2-.79-.52l-5.15-9.23c-.05-.12-.08-.24-.08-.36v-23.97c0-.5.4-.9.9-.9h5.24c.49,0,.9.4.9.9v33.21c0,.48-.39.87-.87.87ZM591.67,1038.09l5.14,9.22c.05.12.15.18.25.18h.15c.14,0,.26-.12.26-.26v-33.21c0-.16-.13-.29-.29-.29h-5.24c-.16,0-.29.13-.29.29v23.97s0,.07.02.11Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                        <path d="M591.33,1047.25c0-.17.23-.23.31-.08,1.26,2.34,6.12,10.28,6.12,10.48v22.24c0,.38-.48.54-.71.24-1.7-2.3-5.72-7.89-5.72-8.09,0,0-.03-20.87,0-24.79Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M597.36,1080.59c-.21,0-.42-.1-.55-.28-.06-.08-5.78-7.84-5.78-8.27,0-.21-.03-20.91,0-24.79,0-.22.14-.4.36-.45.21-.05.42.04.52.23.64,1.19,2.22,3.84,3.61,6.17,2.55,4.27,2.55,4.3,2.55,4.45v22.24c0,.31-.19.57-.48.67-.07.02-.15.04-.22.04ZM591.64,1071.97c.32.59,3.75,5.38,5.66,7.97.02.03.06.04.09.03.03,0,.06-.03.06-.09v-22.18c-.16-.34-1.33-2.3-2.46-4.2-1.23-2.07-2.61-4.37-3.36-5.71-.02,4.82,0,22.98,0,24.18ZM591.64,1047.25h0s0,0,0,0Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    </g>
                    <g>
                    <g>
                        <path d="M535.95,994.65l-4.08-9.23c-.09-.2-.29-.34-.51-.34h-1.22c-.31,0-.56.25-.56.56v23.56c0,.33.26.59.59.59h5.24c.33,0,.59-.27.59-.59v-14.31c0-.08-.02-.17-.05-.24Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M535.41,1010.1h-5.24c-.49,0-.9-.4-.9-.9v-23.56c0-.48.39-.87.87-.87h1.22c.34,0,.65.2.79.52l4.08,9.23c.05.12.08.24.08.36v14.31c0,.5-.4.9-.9.9ZM530.14,985.38c-.14,0-.26.12-.26.26v23.56c0,.16.13.29.29.29h5.24c.16,0,.29-.13.29-.29v-14.31s0-.08-.02-.12l-4.08-9.23c-.04-.09-.13-.15-.23-.15h-1.22Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                        <path d="M535.95,1038.23l-5.15,9.23c-.09.2-.29.34-.51.34h-.15c-.31,0-.56-.25-.56-.56v-33.21c0-.33.26-.59.59-.59h5.24c.33,0,.59.27.59.59v23.97c0,.08-.02.17-.05.24Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M530.29,1048.1h-.15c-.48,0-.87-.39-.87-.87v-33.21c0-.5.4-.9.9-.9h5.24c.49,0,.9.4.9.9v23.97c0,.13-.03.25-.08.36v.03s-5.16,9.23-5.16,9.23c-.13.29-.44.49-.78.49ZM530.17,1013.73c-.16,0-.29.13-.29.29v33.21c0,.14.11.26.26.26h.15c.1,0,.19-.06.23-.15l5.15-9.25s.02-.07.02-.11v-23.97c0-.16-.13-.29-.29-.29h-5.24Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                        <path d="M536,1047.25c0-.17-.23-.23-.31-.08-1.26,2.34-6.12,10.28-6.12,10.48v22.24c0,.38.48.54.71.24,1.7-2.3,5.72-7.89,5.72-8.09,0,0,.03-20.87,0-24.79Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M529.97,1080.59c-.07,0-.15-.01-.22-.04-.29-.1-.48-.36-.48-.67v-22.24c0-.15,0-.18,2.54-4.45,1.39-2.34,2.97-4.99,3.62-6.18.1-.19.31-.28.52-.23.21.05.35.24.36.45h0c.02,3.88,0,24.58,0,24.79,0,.43-5.72,8.19-5.78,8.27-.14.18-.34.28-.55.28ZM529.88,1057.7v22.18c0,.05.03.08.06.09.04.01.07,0,.09-.03,1.91-2.59,5.34-7.38,5.66-7.97,0-1.2.02-19.36,0-24.18-.75,1.34-2.13,3.65-3.36,5.72-1.13,1.89-2.29,3.85-2.46,4.19Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    </g>
                    <g>
                    <g>
                        <path d="M591.53,1092.62c-18.28,4.72-37.45,4.72-55.73,0,1.28-5,2.55-10,3.83-14.99,15.77,4.07,32.3,4.07,48.07,0,1.28,5,2.55,10,3.83,14.99Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M563.66,1096.45c-9.4,0-18.8-1.18-27.94-3.54l-.3-.08,3.98-15.59.3.08c15.67,4.05,32.24,4.05,47.91,0l.3-.08,3.98,15.59-.3.08c-9.14,2.36-18.54,3.54-27.94,3.54ZM536.17,1092.4c17.99,4.59,36.99,4.59,54.98,0l-3.68-14.4c-15.59,3.97-32.04,3.97-47.63,0l-3.68,14.4Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                        <path d="M591.53,1092.62c-18.28,4.72-37.45,4.72-55.73,0,1.28-5,2.55-10,3.83-14.99,15.77,4.07,32.3,4.07,48.07,0,1.28,5,2.55,10,3.83,14.99Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M563.66,1096.45c-9.4,0-18.8-1.18-27.94-3.54l-.3-.08,3.98-15.59.3.08c15.67,4.05,32.24,4.05,47.91,0l.3-.08,3.98,15.59-.3.08c-9.14,2.36-18.54,3.54-27.94,3.54ZM536.17,1092.4c17.99,4.59,36.99,4.59,54.98,0l-3.68-14.4c-15.59,3.97-32.04,3.97-47.63,0l-3.68,14.4Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    </g>
                    <g>
                    <path d="M600.07,984.54h9.53s.5-5.95-9.53-5.45v5.45Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M609.88,984.85h-10.12v-6.04h.29c3.96-.21,6.8.55,8.44,2.25,1.55,1.6,1.42,3.44,1.41,3.52l-.02.28ZM600.37,984.24h8.92c-.03-.53-.22-1.72-1.25-2.77-1.48-1.52-4.06-2.22-7.67-2.08v4.85Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <path d="M527.56,984.54h-9.53s-.5-5.95,9.53-5.45v5.45Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M527.87,984.85h-10.12l-.02-.28c0-.08-.14-1.91,1.41-3.52,1.64-1.7,4.48-2.46,8.44-2.26h.29v6.06ZM518.34,984.24h8.92v-4.85c-3.61-.14-6.19.56-7.67,2.08-1.03,1.05-1.22,2.24-1.25,2.77Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <path d="M584.11,927.68s-2.51,25.83,10.03,37.93" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M594.15,965.91c-.08,0-.15-.03-.21-.09-12.5-12.07-10.15-37.92-10.13-38.18.02-.17.16-.29.33-.27.17.02.29.17.27.33-.02.26-2.35,25.82,9.94,37.68.12.12.12.31,0,.43-.06.06-.14.09-.22.09Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <path d="M592.97,931.81s-1.02,21.48,6.29,37.13" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M599.27,969.24c-.12,0-.23-.07-.28-.18-7.26-15.54-6.33-37.06-6.32-37.27,0-.17.15-.3.32-.29.17,0,.3.15.29.32-.01.21-.93,21.58,6.27,36.99.07.15,0,.33-.15.41-.04.02-.09.03-.13.03Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <path d="M584.11,927.68s-2.51,25.83,10.03,37.93" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M594.15,965.91c-.08,0-.15-.03-.21-.09-12.5-12.07-10.15-37.92-10.13-38.18.02-.17.16-.29.33-.27.17.02.29.17.27.33-.02.26-2.35,25.82,9.94,37.68.12.12.12.31,0,.43-.06.06-.14.09-.22.09Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <path d="M592.97,931.81s-1.02,21.48,6.29,37.13" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M599.27,969.24c-.12,0-.23-.07-.28-.18-7.26-15.54-6.33-37.06-6.32-37.27,0-.17.15-.3.32-.29.17,0,.3.15.29.32-.01.21-.93,21.58,6.27,36.99.07.15,0,.33-.15.41-.04.02-.09.03-.13.03Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <path d="M603.06,935.38s-3.83-.17-8.44-5.11c-4.62-4.94-10.24-4.44-10.24-4.44l1.88-5.64s1.61.66,1.61.66c3.96,1.85,6.79,4.06,9.24,6.1,2.45,2.03,4.24,4.36,5.46,7.22.19.46.39.85.49,1.21Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M603.06,935.69s0,0-.01,0c-.16,0-4-.23-8.65-5.21-4.45-4.77-9.94-4.34-9.99-4.34-.11,0-.2-.03-.27-.11-.06-.08-.08-.19-.05-.29l1.88-5.64c.03-.08.09-.15.16-.18.08-.04.16-.04.24,0,0,0,1.5.62,1.6.66,0,0,.02,0,.03.01,4.06,1.9,6.93,4.17,9.31,6.14,2.51,2.08,4.32,4.48,5.54,7.33.06.15.13.3.19.43.12.28.24.55.32.81.03.09,0,.2-.05.27-.06.07-.15.12-.24.12ZM584.88,925.51c1.53,0,6.07.38,9.96,4.55,3.53,3.78,6.61,4.72,7.75,4.94-.04-.09-.08-.18-.12-.27-.06-.14-.13-.29-.19-.44-1.18-2.76-2.94-5.08-5.37-7.1-2.35-1.95-5.18-4.19-9.18-6.06h0c-.14-.06-.46-.19-1.3-.53l-1.63,4.91s.05,0,.07,0Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <path d="M583.05,918.72l-.99,4.13s-8.72-2.09-18.09-2.22c-9.37.12-18.09,2.22-18.09,2.22l-.93-3.9c5.59-2.05,12.33-3.45,20.31-3.45,6.84,0,12.77,1.3,17.8,3.22Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M582.06,923.16s-.05,0-.07,0c-.09-.02-8.8-2.08-18.03-2.21-9.21.12-17.93,2.19-18.02,2.21-.08.02-.16,0-.23-.04-.07-.04-.12-.11-.14-.19l-.93-3.9c-.04-.15.05-.3.19-.36,6.28-2.3,13.15-3.47,20.41-3.47,6.25,0,12.28,1.09,17.91,3.24.14.05.22.21.19.36l-.99,4.13c-.03.14-.16.23-.3.23ZM563.96,920.33c8.34.11,16.26,1.79,17.87,2.16l.86-3.58c-5.49-2.06-11.36-3.1-17.44-3.1-7.09,0-13.8,1.12-19.95,3.34l.8,3.34c1.61-.36,9.53-2.05,17.86-2.16Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <path d="M542.71,927.68s2.51,25.83-10.03,37.93" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M532.68,965.91c-.08,0-.16-.03-.22-.09-.12-.12-.11-.31,0-.43,12.29-11.86,9.97-37.43,9.94-37.68-.02-.17.11-.32.27-.33.17-.02.32.11.33.27.03.26,2.38,26.11-10.13,38.18-.06.06-.14.09-.21.09Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <path d="M533.86,931.81s1.02,21.48-6.29,37.13" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M527.56,969.24s-.09,0-.13-.03c-.15-.07-.22-.25-.15-.41,7.19-15.4,6.28-36.77,6.27-36.99,0-.17.12-.31.29-.32.17-.01.31.12.32.29.01.22.94,21.73-6.32,37.27-.05.11-.16.18-.28.18Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <path d="M542.92,925.76s-5.62-.5-10.24,4.44c-4.07,4.36-7.28,4.88-7.98,4.93,1.25-3.23,3.33-6.11,6.1-8.31,2.62-2.08,5.97-4.29,10.08-6.19.22-.01.34-.02.34-.02l1.71,5.14Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M524.7,935.44c-.1,0-.19-.05-.25-.12-.06-.08-.08-.19-.04-.29,1.29-3.33,3.43-6.25,6.19-8.44,3.08-2.44,6.49-4.54,10.14-6.23.04-.02.07-.03.11-.03l.34-.02c.13,0,.26.08.3.21l1.71,5.14c.03.1.01.21-.05.29-.06.08-.17.12-.27.11-.05,0-5.54-.42-9.99,4.35-4.2,4.5-7.55,4.98-8.18,5.03,0,0-.02,0-.02,0ZM540.95,920.93c-3.59,1.67-6.94,3.73-9.96,6.13-2.54,2.02-4.54,4.67-5.81,7.69,1.17-.23,3.91-1.15,7.28-4.76,3.96-4.24,8.57-4.57,10.03-4.55l-1.5-4.5h-.05Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <path d="M603.07,1089.65s-10.37-.96-9.21,9.27c0,0,7.49-2.93,9.21-9.27Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M593.6,1099.35l-.04-.39c-.35-3.09.3-5.5,1.93-7.17,2.79-2.85,7.42-2.46,7.61-2.44l.36.03-.1.35c-1.74,6.42-9.08,9.35-9.39,9.48l-.37.14ZM602.41,1089.94c-1.33,0-4.49.23-6.5,2.29-1.42,1.45-2.02,3.55-1.79,6.25,1.48-.67,6.95-3.46,8.55-8.54-.08,0-.16,0-.26,0Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <path d="M534.41,1098.94s.46-10.46-9.64-8.82c0,0,3.26,7.38,9.64,8.82Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M534.7,1099.32l-.36-.08c-6.46-1.46-9.72-8.69-9.86-8.99l-.16-.36.39-.06c3.04-.49,5.45.04,7.18,1.58,3,2.67,2.82,7.36,2.82,7.56l-.02.36ZM525.23,1090.36c.74,1.45,3.76,6.82,8.88,8.19-.03-1.15-.3-4.65-2.61-6.7-1.51-1.34-3.61-1.84-6.27-1.49Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                </g>
                <g id="Car">
                    <g>
                    <path d="M939.93,1016.2l-5.14-.5.66-71.79c0-7.35-4.92-16.71-10.94-20.79-6.19-4.2-14.57-7.62-27.34-7.62-13.84,0-21.32,2.99-29.41,8.01-4.87,3.02-8.87,10.18-8.87,15.97l.67,76.19-5.46.53c-2.93.32-5.05,2.96-4.73,5.89h.63l9.61-1.05.55,62.94c0,9.91,4.94,18.72,14.17,21.95l3.06,1.07c12.82,4.48,26.75,4.48,39.58,0h0c11.07-3.87,17.23-14.43,17.23-26.31l.55-59.62,9.29,1.01h.63c.32-2.93-1.8-5.57-4.73-5.89Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M897.16,1110.65c-6.74,0-13.48-1.12-19.89-3.36l-3.06-1.07c-8.87-3.1-14.38-11.62-14.38-22.24l-.55-62.6-9.27,1.01h-.66c-.16,0-.29-.12-.3-.27-.34-3.1,1.91-5.89,5-6.23l5.19-.5-.66-75.91c0-5.87,4.05-13.15,9.02-16.23,8.22-5.1,15.7-8.06,29.57-8.06,10.9,0,19.9,2.51,27.52,7.67,6.11,4.14,11.07,13.58,11.07,21.04l-.66,71.52,4.87.47s0,0,0,0c3.1.34,5.34,3.13,5,6.23-.02.16-.15.27-.3.27h-.63l-8.99-.98-.55,59.28c0,12.64-6.68,22.84-17.44,26.59-6.41,2.24-13.15,3.36-19.89,3.36ZM859.59,1020.74c.07,0,.15.03.2.08.06.06.1.14.1.23l.55,62.94c0,10.35,5.35,18.66,13.97,21.66l3.06,1.07c12.7,4.43,26.68,4.43,39.37,0,10.5-3.67,17.03-13.64,17.03-26.02l.55-59.62c0-.09.04-.17.1-.23.06-.06.15-.08.24-.08l9.29,1.01h.32c.15-2.65-1.81-4.99-4.48-5.28l-5.14-.5c-.16-.02-.28-.15-.28-.31l.66-71.79c0-7.28-4.85-16.49-10.81-20.53-7.51-5.09-16.4-7.57-27.17-7.57-13.73,0-21.12,2.92-29.25,7.96-4.81,2.99-8.73,10.03-8.73,15.71l.67,76.19c0,.16-.12.29-.28.31l-5.46.53c-1.33.15-2.54.8-3.38,1.85-.79.98-1.17,2.19-1.1,3.43h.35l9.58-1.05s.02,0,.03,0Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <path d="M917.95,1011.09c-14.25-4.65-27.32-4.65-41.57,0-1.19-3-2.92-6.53-4.84-9.01,16.56-5.41,34.69-5.41,51.25,0-1.96,3.01-3.24,5.52-4.84,9.01Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M876.38,1011.4c-.12,0-.24-.07-.28-.19-1.42-3.58-3.17-6.84-4.8-8.93-.06-.08-.08-.18-.05-.28.03-.1.1-.17.2-.2,16.59-5.41,34.85-5.41,51.44,0,.09.03.16.1.19.19.03.09.02.19-.03.27-2.01,3.09-3.29,5.63-4.82,8.97-.06.14-.23.21-.37.16-14.12-4.61-27.27-4.61-41.38,0-.03.01-.06.02-.09.02ZM897.16,1007.31c6.8,0,13.59,1.13,20.62,3.4,1.44-3.13,2.67-5.57,4.53-8.46-16.23-5.21-34.04-5.21-50.27,0,2.06,2.77,3.67,6.37,4.51,8.47,7.03-2.27,13.82-3.4,20.61-3.4Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <path d="M876.38,1062.9c16.67,4.58,26.65,3.53,41.57,0,1.19,5.33,2.92,9.7,4.84,14.09-16.56,9.59-34.69,9.59-51.25,0,1.96-5.34,3.24-7.9,4.84-14.09Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M897.16,1084.47c-8.73,0-17.47-2.41-25.78-7.22-.13-.07-.18-.23-.13-.37.53-1.44,1-2.65,1.45-3.83,1.24-3.2,2.22-5.72,3.38-10.23.02-.08.07-.15.14-.19.07-.04.16-.05.23-.03,16.39,4.51,26.02,3.64,41.42,0,.08-.02.16,0,.23.04.07.04.12.11.14.19,1.14,5.11,2.75,9.31,4.82,14.03.06.14,0,.31-.13.39-8.31,4.81-17.04,7.22-25.78,7.22ZM871.92,1076.85c16.29,9.34,34.19,9.34,50.48,0-1.99-4.57-3.55-8.66-4.68-13.59-14.93,3.51-24.99,4.4-41.12,0-1.14,4.36-2.1,6.86-3.32,10-.43,1.11-.87,2.25-1.36,3.58Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <g>
                        <path d="M926.38,1016.98v-13.81l-5.42,10.39s-.05,1.26-.09,3.42h5.51Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M926.38,1017.29h-5.51c-.08,0-.16-.03-.22-.09-.06-.06-.09-.14-.09-.22.04-2.14.09-3.42.09-3.43,0-.04.01-.09.03-.13l5.42-10.39c.06-.12.21-.19.34-.16.14.03.23.16.23.3v13.81c0,.17-.14.31-.31.31ZM921.18,1016.68h4.89v-12.26l-4.81,9.22c-.01.27-.05,1.36-.08,3.04Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                        <path d="M926.38,1019.43h-5.53c-.09,6.94.03,20.56,1.86,32.74h3.67v-32.74Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M926.38,1052.48h-3.67c-.15,0-.28-.11-.3-.26-1.83-12.17-1.96-25.77-1.87-32.79,0-.17.14-.3.31-.3h5.53c.17,0,.31.14.31.31v32.74c0,.17-.14.31-.31.31ZM922.98,1051.86h3.1v-32.13h-4.92c-.08,7.03.06,20.23,1.82,32.13Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                        <path d="M922.9,1054.62c.81,5.05,1.94,9.8,3.48,13.66v-13.66h-3.48Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M926.38,1068.58c-.12,0-.24-.07-.28-.19-1.43-3.57-2.61-8.19-3.5-13.72-.01-.09.01-.18.07-.25.06-.07.14-.11.23-.11h3.48c.17,0,.31.14.31.31v13.66c0,.15-.1.27-.25.3-.02,0-.04,0-.06,0ZM923.26,1054.93c.75,4.55,1.7,8.47,2.82,11.66v-11.66h-2.82Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    </g>
                    <g>
                    <g>
                        <path d="M868.37,1016.98v-13.81l5.42,10.39s.05,1.26.09,3.42h-5.51Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M873.88,1017.29h-5.51c-.17,0-.31-.14-.31-.31v-13.81c0-.14.1-.26.23-.3.14-.03.28.03.34.16l5.42,10.39s.03.08.03.13c0,.01.05,1.29.09,3.43,0,.08-.03.16-.09.22-.06.06-.14.09-.22.09ZM868.68,1016.68h4.89c-.03-1.68-.07-2.76-.08-3.04l-4.81-9.22v12.26Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                        <path d="M868.37,1019.43h5.53c.09,6.94-.03,20.56-1.86,32.74h-3.67v-32.74Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M872.04,1052.48h-3.67c-.17,0-.31-.14-.31-.31v-32.74c0-.17.14-.31.31-.31h5.53c.17,0,.3.13.31.3.09,7.02-.03,20.61-1.87,32.79-.02.15-.15.26-.3.26ZM868.68,1051.86h3.1c1.77-11.9,1.91-25.1,1.82-32.13h-4.92v32.13Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                        <path d="M871.85,1054.62c-.81,5.05-1.94,9.8-3.48,13.66v-13.66h3.48Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                        <path d="M868.37,1068.58s-.04,0-.06,0c-.14-.03-.25-.15-.25-.3v-13.66c0-.17.14-.31.31-.31h3.48c.09,0,.17.04.23.11.06.07.08.16.07.25-.89,5.53-2.07,10.15-3.5,13.72-.05.12-.16.19-.28.19ZM868.68,1054.93v11.66c1.12-3.2,2.07-7.11,2.82-11.66h-2.82Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    </g>
                    <g>
                    <path d="M913.36,928.56c-10.71-3.85-22.42-3.85-33.13,0-.72-2.01-1.45-4.02-2.17-6.03,12.11-4.36,25.36-4.36,37.47,0-.72,2.01-1.45,4.02-2.17,6.03Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M880.23,928.87c-.13,0-.24-.08-.29-.2l-2.17-6.03c-.03-.08-.02-.16.01-.23.03-.07.1-.13.17-.16,12.15-4.37,25.53-4.37,37.68,0,.16.06.24.23.18.39l-2.17,6.03c-.03.08-.08.14-.16.17-.07.03-.16.04-.23.01-10.62-3.82-22.31-3.82-32.92,0-.03.01-.07.02-.1.02ZM878.45,922.71l1.97,5.46c10.58-3.73,22.19-3.73,32.76,0l1.97-5.46c-11.84-4.19-24.85-4.19-36.69,0Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <path d="M926.51,938.71c-1.9-3.41-5.26-6.47-9.78-8.3-.54-.22-.78-.64-.61-1.15.35-1.01.76-2.01,1.24-3,.54-1.19,3.25-1.84,4.5-1.04,4.53,2.74,7.71,6.52,9.38,10.47.2.47.07.94-.28,1.26-.71.63-1.36,1.31-1.96,2.01-.71.8-1.96.67-2.49-.25Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M927.85,939.79c-.06,0-.13,0-.19,0-.59-.06-1.11-.4-1.41-.92,0,0,0,0,0,0-1.99-3.56-5.41-6.46-9.63-8.16-.7-.28-1.01-.88-.78-1.53.35-1.02.78-2.04,1.26-3.03.26-.58.95-1.07,1.89-1.35,1.14-.34,2.34-.27,3.04.18,4.34,2.62,7.72,6.39,9.5,10.61.24.58.11,1.19-.36,1.61-.69.62-1.34,1.28-1.93,1.98-.36.41-.86.63-1.39.63ZM926.78,938.55c.2.35.55.58.94.62.4.04.78-.11,1.05-.42.61-.71,1.27-1.4,1.98-2.03.27-.24.35-.58.2-.91-1.73-4.1-5.02-7.77-9.26-10.33-.56-.36-1.58-.41-2.55-.12-.76.23-1.33.61-1.52,1.03-.47.98-.89,1.98-1.23,2.97-.15.43.16.65.43.76,4.35,1.76,7.88,4.75,9.93,8.43Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <path d="M867.15,938.71c1.9-3.41,5.26-6.47,9.78-8.3.54-.22.78-.64.61-1.15-.35-1.01-.76-2.01-1.24-3-.54-1.19-3.25-1.84-4.5-1.04-4.53,2.74-7.71,6.52-9.38,10.47-.2.47-.07.94.28,1.26.71.63,1.36,1.31,1.96,2.01.71.8,1.96.67,2.49-.25Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M865.82,939.79c-.53,0-1.02-.22-1.38-.63-.59-.7-1.24-1.37-1.93-1.98-.47-.41-.6-1.03-.36-1.61,1.78-4.22,5.16-7.99,9.51-10.61.7-.45,1.9-.52,3.04-.18.94.28,1.64.78,1.9,1.36.48.99.9,2.01,1.25,3.02.22.65-.09,1.25-.78,1.53-4.22,1.7-7.64,4.6-9.63,8.16,0,0,0,0,0,0-.3.53-.82.86-1.41.92-.06,0-.13,0-.19,0ZM873.25,925.18c-.51,0-.97.1-1.29.3-4.24,2.56-7.53,6.23-9.26,10.33-.14.34-.07.67.2.91.71.64,1.38,1.32,1.99,2.04.27.3.65.45,1.05.41.4-.04.74-.27.94-.62,2.06-3.68,5.58-6.67,9.93-8.43.28-.11.58-.34.44-.76-.34-.99-.76-1.99-1.23-2.97-.19-.42-.76-.81-1.52-1.03-.42-.13-.85-.19-1.25-.19ZM867.15,938.71h0,0Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <path d="M908.13,1105.08c-7.11,2.56-14.89,2.56-22,0,.43-1.18.85-2.36,1.28-3.54,6.29,2.26,13.17,2.26,19.45,0,.43,1.18.85,2.36,1.28,3.54Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M897.13,1107.3c-3.76,0-7.52-.64-11.11-1.93-.16-.06-.24-.23-.18-.39l1.28-3.54c.03-.08.08-.14.16-.17.07-.03.16-.04.23-.01,6.2,2.23,13.04,2.23,19.24,0,.16-.06.33.03.39.18l1.28,3.54c.03.08.02.16-.01.23-.03.07-.1.13-.17.16-3.58,1.29-7.34,1.93-11.1,1.93ZM886.52,1104.9c6.86,2.39,14.37,2.39,21.22,0l-1.07-2.97c-6.17,2.15-12.92,2.15-19.08,0l-1.07,2.97Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <path d="M872.69,1091.49c1.68,3.01,4.65,5.72,8.65,7.33.47.19.69.56.54,1.01-.31.89-.67,1.77-1.1,2.65-.47,1.05-2.87,1.63-3.98.92-4-2.42-6.82-5.77-8.29-9.26-.18-.42-.07-.83.25-1.11.63-.56,1.2-1.15,1.73-1.77.63-.7,1.73-.59,2.2.22Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M878.06,1104.03c-.51,0-1.02-.1-1.43-.36-3.84-2.32-6.83-5.66-8.41-9.4-.22-.52-.1-1.08.33-1.46.61-.54,1.18-1.13,1.7-1.74.37-.42.89-.62,1.42-.56.54.05,1,.36,1.28.83,0,0,0,0,0,0,1.75,3.14,4.77,5.7,8.5,7.2.64.26.92.8.71,1.4-.31.9-.69,1.81-1.11,2.68-.23.52-.85.96-1.7,1.22-.38.11-.84.19-1.29.19ZM871.51,1091.11c-.3,0-.58.13-.79.36-.53.63-1.13,1.24-1.76,1.8-.23.2-.29.48-.17.77,1.53,3.62,4.43,6.86,8.17,9.11.49.31,1.38.35,2.22.1.65-.2,1.16-.54,1.32-.89.42-.86.78-1.74,1.09-2.63.1-.28-.03-.49-.36-.63-3.85-1.55-6.98-4.21-8.8-7.47-.17-.3-.47-.49-.81-.53-.04,0-.07,0-.11,0Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g>
                    <path d="M921.57,1091.49c-1.68,3.01-4.65,5.72-8.65,7.33-.47.19-.69.56-.54,1.01.31.89.67,1.77,1.1,2.65.47,1.05,2.87,1.63,3.98.92,4-2.42,6.82-5.77,8.29-9.26.18-.42.07-.83-.25-1.11-.63-.56-1.2-1.15-1.73-1.77-.63-.7-1.73-.59-2.2.22Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M916.19,1104.03c-.45,0-.91-.08-1.29-.19-.84-.25-1.46-.7-1.7-1.22-.42-.87-.79-1.77-1.11-2.68-.2-.59.08-1.14.71-1.4,3.72-1.5,6.74-4.06,8.5-7.2,0,0,0,0,0,0,.27-.47.74-.78,1.28-.83.54-.05,1.06.15,1.42.56.53.62,1.1,1.21,1.71,1.75.42.38.55.94.33,1.46-1.58,3.74-4.57,7.07-8.42,9.4-.4.26-.91.36-1.42.36ZM921.83,1091.64c-1.82,3.26-4.95,5.91-8.8,7.47-.34.14-.46.35-.36.63.31.88.67,1.76,1.08,2.62.16.36.67.7,1.32.9.84.25,1.73.21,2.22-.1,3.75-2.26,6.65-5.5,8.18-9.12.12-.28.06-.56-.17-.77-.63-.56-1.22-1.17-1.76-1.8-.23-.26-.56-.39-.9-.35-.34.03-.63.23-.81.53Z" fill="none" stroke="#cab394" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                </g>
                <g id="Round_table_alt" filter="url(#drop-shadow-8)">
                    <g>
                    <g>
                        <path d="M256.52,305.85c-.26-.37-.76-.48-1.15-.26l-7.17,4.01-7.17,4.01c-.39.22-.56.7-.38,1.12l6.75,15.66c.21.48.78.68,1.24.42l8.7-4.87,8.7-4.87c.46-.26.59-.85.29-1.28l-9.81-13.95Z" fill="#f2f0ed" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M248.19,331.15c-.12,0-.24-.02-.36-.06-.3-.1-.54-.33-.67-.61l-6.75-15.66c-.23-.53-.02-1.13.48-1.41l14.35-8.02c.5-.28,1.13-.14,1.46.33l9.81,13.95c.18.26.24.58.17.89-.07.31-.27.57-.54.73l-17.41,9.73c-.17.09-.36.14-.54.14ZM255.79,305.7c-.11,0-.22.03-.32.08l-14.35,8.02c-.29.16-.41.52-.28.82l6.75,15.66c.07.17.21.3.39.36.18.06.36.04.53-.05l17.41-9.73c.16-.09.28-.24.32-.42.04-.18,0-.37-.1-.52l-9.81-13.95c-.13-.18-.33-.28-.53-.28Z" fill="#f2f0ed" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M267.14,321.57c-.18.1-.38.14-.6.11-.56-.07-.97-.6-.92-1.17.22-2.6-.35-5.21-1.65-7.53-3.43-6.14-10.97-8.48-16.8-5.22-5.83,3.26-7.78,10.91-4.35,17.04,1.3,2.33,3.22,4.18,5.55,5.35.51.26.74.88.51,1.4-.23.51-.83.72-1.34.46-2.72-1.37-4.96-3.53-6.47-6.24-4-7.15-1.72-16.06,5.07-19.86,6.79-3.8,15.57-1.07,19.57,6.08,1.52,2.71,2.18,5.74,1.92,8.78-.03.35-.22.63-.5.79Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M248,332.37c-.19,0-.38-.05-.56-.14-2.76-1.39-5.03-3.58-6.57-6.33-1.96-3.51-2.51-7.54-1.53-11.36.97-3.82,3.35-6.95,6.69-8.82,3.34-1.87,7.25-2.25,11.02-1.09,3.76,1.17,6.91,3.74,8.87,7.25,1.54,2.75,2.21,5.83,1.95,8.91-.03.41-.26.77-.61.97-.23.13-.48.17-.74.14-.68-.09-1.18-.73-1.12-1.42.22-2.56-.34-5.11-1.62-7.4-1.63-2.92-4.25-5.05-7.36-6.02-3.11-.97-6.35-.65-9.12.9-5.72,3.2-7.63,10.7-4.26,16.72,1.28,2.28,3.16,4.1,5.45,5.26.62.31.9,1.07.62,1.7-.14.3-.38.53-.69.64-.13.05-.27.07-.4.07ZM252.74,304.44c-2.26,0-4.48.57-6.49,1.69-3.23,1.81-5.53,4.83-6.47,8.53-.94,3.7-.42,7.61,1.49,11.01,1.49,2.67,3.7,4.79,6.37,6.14.19.1.41.11.6.04.19-.07.34-.21.42-.39.18-.4,0-.89-.4-1.09-2.37-1.2-4.33-3.08-5.65-5.44-3.49-6.25-1.5-14.04,4.44-17.36,2.88-1.61,6.24-1.94,9.48-.93,3.23,1,5.94,3.22,7.63,6.24,1.32,2.37,1.9,5.02,1.68,7.66-.04.45.29.86.72.92.16.02.32,0,.46-.09h0c.21-.12.36-.35.38-.6.25-2.99-.4-5.98-1.9-8.64-1.9-3.41-4.96-5.9-8.6-7.04-1.38-.43-2.78-.64-4.17-.64Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    </g>
                    <g>
                    <g>
                        <path d="M304.21,391.15c.18.42.01.9-.38,1.12l-7.17,4.01-7.17,4.01c-.39.22-.89.11-1.15-.26l-9.81-13.95c-.3-.43-.17-1.02.29-1.28l8.7-4.87,8.7-4.87c.46-.26,1.03-.06,1.24.42l6.75,15.66Z" fill="#f2f0ed" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M289.05,400.64c-.35,0-.7-.17-.91-.47l-9.81-13.95c-.18-.26-.25-.58-.17-.89.07-.31.27-.57.54-.73l17.41-9.73c.28-.15.6-.18.9-.08.3.1.54.33.67.61l6.75,15.66c.23.53.02,1.13-.48,1.41l-14.35,8.02c-.17.1-.36.14-.55.14ZM296.65,375.19c-.11,0-.22.03-.32.08l-17.41,9.73c-.16.09-.28.24-.32.42-.04.18,0,.37.1.52l9.81,13.95c.19.27.56.36.85.19l14.35-8.02c.29-.16.41-.52.28-.82l-6.75-15.66c-.07-.17-.21-.3-.39-.36-.07-.02-.14-.03-.21-.03Z" fill="#f2f0ed" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M296.38,373.86c-.18.1-.32.25-.41.45-.23.51,0,1.14.51,1.4,2.33,1.17,4.25,3.03,5.55,5.35,3.43,6.14,1.48,13.78-4.35,17.04-5.83,3.26-13.37.92-16.8-5.22-1.3-2.33-1.87-4.93-1.65-7.53.05-.57-.36-1.09-.92-1.17-.56-.07-1.05.33-1.1.9-.26,3.03.41,6.07,1.92,8.78,4,7.15,12.78,9.88,19.57,6.08s9.07-12.71,5.07-19.86c-1.52-2.71-3.75-4.87-6.47-6.24-.31-.16-.66-.14-.93.01Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M292.1,401.89c-5.2,0-10.35-2.87-13.17-7.91-1.54-2.75-2.21-5.83-1.95-8.91.03-.34.19-.65.45-.86.26-.21.58-.29.91-.25.68.09,1.18.73,1.12,1.42-.22,2.56.35,5.11,1.62,7.4,1.63,2.92,4.25,5.05,7.36,6.02,3.11.97,6.35.65,9.12-.9,5.72-3.2,7.63-10.7,4.26-16.72-1.28-2.28-3.16-4.1-5.45-5.26-.62-.31-.9-1.07-.62-1.7.11-.24.28-.43.51-.56.35-.2.78-.2,1.15-.02,2.76,1.39,5.03,3.58,6.57,6.33,4.06,7.26,1.75,16.31-5.16,20.17-2.12,1.18-4.42,1.74-6.72,1.74ZM278.17,384.41c-.17,0-.33.06-.45.16-.16.13-.26.32-.28.53-.25,2.99.4,5.98,1.89,8.64,3.93,7.04,12.57,9.72,19.26,5.99,6.68-3.74,8.92-12.5,4.98-19.54-1.49-2.67-3.7-4.79-6.37-6.14-.23-.12-.5-.11-.71,0h0c-.14.08-.25.2-.31.34-.18.4,0,.89.4,1.09,2.37,1.2,4.33,3.08,5.65,5.44,3.49,6.25,1.5,14.04-4.44,17.36-2.88,1.61-6.24,1.94-9.48.93-3.23-1-5.94-3.22-7.63-6.24-1.32-2.37-1.9-5.02-1.68-7.66.04-.45-.29-.86-.72-.92-.03,0-.07,0-.1,0Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    </g>
                    <g>
                    <g>
                        <path d="M319.51,337.03c.37-.26.48-.76.26-1.15l-4.01-7.17-4.01-7.17c-.22-.39-.7-.56-1.12-.38l-15.66,6.75c-.48.21-.68.78-.42,1.24l4.87,8.7,4.87,8.7c.26.46.85.59,1.28.29l13.95-9.81Z" fill="#f2f0ed" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M305.06,347.23c-.08,0-.17,0-.25-.03-.31-.07-.57-.27-.73-.54l-9.73-17.41c-.15-.28-.18-.6-.08-.9.1-.3.33-.54.61-.67l15.66-6.75c.53-.23,1.13-.02,1.41.48l8.02,14.35c.28.5.14,1.13-.33,1.46l-13.95,9.81c-.19.13-.41.2-.64.2ZM310.98,321.31c-.09,0-.17.02-.26.05l-15.66,6.75c-.17.07-.3.21-.36.39-.06.18-.04.36.05.53l9.73,17.41c.09.16.24.28.42.32.18.04.37,0,.52-.1l13.95-9.81c.27-.19.36-.56.19-.85l-8.02-14.35c-.12-.21-.34-.33-.57-.33Z" fill="#f2f0ed" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M303.79,347.65c-.1-.18-.14-.38-.11-.6.07-.56.6-.97,1.17-.92,2.6.22,5.21-.35,7.53-1.65,6.14-3.43,8.48-10.97,5.22-16.8-3.26-5.83-10.91-7.78-17.04-4.35-2.33,1.3-4.18,3.22-5.35,5.55-.26.51-.88.74-1.4.51-.51-.23-.72-.83-.46-1.34,1.37-2.72,3.53-4.96,6.24-6.47,7.15-4,16.06-1.72,19.86,5.07,3.8,6.79,1.07,15.57-6.08,19.57-2.71,1.52-5.74,2.18-8.78,1.92-.35-.03-.63-.22-.79-.5Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M305.85,348.44c-.43,0-.86-.02-1.29-.05-.41-.03-.77-.26-.97-.61h0c-.13-.23-.17-.48-.14-.74.09-.68.72-1.18,1.42-1.12,2.56.22,5.11-.35,7.4-1.62,2.92-1.63,5.05-4.25,6.02-7.36.97-3.11.65-6.35-.9-9.12-1.55-2.76-4.14-4.73-7.3-5.54-3.16-.81-6.51-.36-9.43,1.27-2.28,1.28-4.1,3.16-5.26,5.45-.31.62-1.07.9-1.7.62-.3-.14-.53-.38-.64-.69-.11-.32-.09-.66.07-.97,1.39-2.76,3.58-5.03,6.33-6.57,3.51-1.96,7.54-2.51,11.36-1.53,3.82.97,6.95,3.35,8.82,6.69,1.87,3.34,2.25,7.25,1.09,11.02-1.17,3.76-3.74,6.91-7.25,8.87-2.37,1.32-4.98,2.01-7.62,2.01ZM303.99,347.54c.12.22.35.36.6.38,2.99.25,5.98-.4,8.64-1.9,3.41-1.9,5.9-4.96,7.04-8.6,1.13-3.64.76-7.42-1.05-10.65-1.81-3.23-4.83-5.53-8.53-6.47-3.7-.94-7.61-.42-11.01,1.49-2.67,1.49-4.79,3.7-6.14,6.37-.1.19-.11.41-.04.6.07.19.21.34.39.42.4.18.89,0,1.09-.4,1.2-2.37,3.08-4.33,5.44-5.65,3.02-1.69,6.49-2.16,9.77-1.32,3.28.84,5.98,2.89,7.59,5.76s1.94,6.24.93,9.48c-1,3.23-3.22,5.94-6.24,7.63-2.37,1.32-5.02,1.9-7.66,1.68-.45-.04-.86.29-.92.72-.02.16,0,.32.08.46h0Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    </g>
                    <g>
                    <g>
                        <path d="M234.21,384.73c-.42.18-.9.01-1.12-.38l-4.01-7.17-4.01-7.17c-.22-.39-.11-.89.26-1.15l13.95-9.81c.43-.3,1.02-.17,1.28.29l4.87,8.7,4.87,8.7c.26.46.06,1.03-.42,1.24l-15.66,6.75Z" fill="#f2f0ed" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M233.86,385.03c-.39,0-.77-.21-.97-.57l-8.02-14.35c-.28-.5-.14-1.13.33-1.46l13.95-9.81c.26-.18.58-.25.89-.18.31.07.57.27.73.54l9.73,17.41c.15.28.18.6.08.9-.1.3-.33.54-.61.67l-15.66,6.75h0c-.14.06-.3.09-.44.09ZM239.78,359.11c-.13,0-.26.04-.37.12l-13.95,9.81c-.27.19-.36.56-.19.85l8.02,14.35c.16.29.52.41.82.28h0l15.66-6.75c.17-.07.3-.21.36-.39.06-.18.04-.36-.05-.53l-9.73-17.41c-.09-.16-.24-.28-.42-.32-.05-.01-.1-.02-.15-.02Z" fill="#f2f0ed" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M251.5,376.89c-.1-.18-.25-.32-.45-.41-.51-.23-1.14,0-1.4.51-1.17,2.33-3.03,4.25-5.35,5.55-6.14,3.43-13.78,1.48-17.04-4.35-3.26-5.83-.92-13.37,5.22-16.8,2.33-1.3,4.93-1.87,7.53-1.65.57.05,1.09-.36,1.17-.92.07-.56-.33-1.05-.9-1.1-3.03-.26-6.07.41-8.78,1.92-7.15,4-9.88,12.78-6.08,19.57,3.8,6.79,12.71,9.07,19.86,5.07,2.71-1.52,4.87-3.75,6.24-6.47.16-.31.14-.66-.01-.93Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M237.77,386.5c-5.11,0-9.99-2.56-12.56-7.16-1.87-3.34-2.25-7.25-1.09-11.02,1.17-3.76,3.74-6.91,7.25-8.87,2.75-1.54,5.83-2.21,8.91-1.95.34.03.65.19.86.45.21.26.3.58.25.91-.09.68-.72,1.18-1.42,1.12-2.56-.22-5.11.35-7.4,1.62-6.02,3.37-8.32,10.76-5.13,16.48,3.2,5.72,10.7,7.63,16.72,4.26,2.28-1.28,4.1-3.16,5.26-5.45.31-.62,1.07-.9,1.7-.62.24.11.43.28.56.51.2.35.2.78.02,1.15-1.39,2.76-3.58,5.03-6.33,6.57-2.43,1.36-5.05,2-7.62,2ZM239,357.9c-2.56,0-5.1.66-7.39,1.95-3.41,1.9-5.9,4.96-7.04,8.6-1.13,3.64-.76,7.42,1.05,10.65,3.74,6.68,12.5,8.92,19.54,4.98,2.67-1.49,4.79-3.7,6.14-6.37.12-.23.11-.5,0-.71h0c-.08-.14-.2-.25-.34-.31-.4-.18-.89,0-1.09.4-1.2,2.37-3.08,4.33-5.44,5.65-6.25,3.49-14.04,1.5-17.36-4.44-3.32-5.94-.94-13.62,5.31-17.11,2.37-1.32,5.02-1.9,7.66-1.68.45.03.86-.29.92-.72.03-.2-.03-.4-.15-.56-.13-.16-.32-.26-.53-.28-.42-.04-.84-.05-1.25-.05Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    </g>
                    <g>
                    <path d="M288.96,382.51c-7.15,4-15.14,5.13-22.61,3.76-3.56-.65-7.01-1.87-10.21-3.62-5.4-2.95-10.07-7.41-13.29-13.18-9.13-16.34-3.3-36.98,13.04-46.11,5.79-3.24,12.12-4.6,18.29-4.27,5.13.27,10.15,1.7,14.65,4.19,5.35,2.95,9.97,7.39,13.17,13.12,9.13,16.33,3.3,36.98-13.04,46.11Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M272.4,387.06c-2.04,0-4.08-.18-6.1-.55-3.61-.66-7.07-1.89-10.28-3.64-5.61-3.07-10.24-7.66-13.38-13.28-4.45-7.95-5.53-17.17-3.05-25.93,2.48-8.77,8.23-16.05,16.18-20.49,5.64-3.15,12.01-4.64,18.42-4.3,5.14.27,10.24,1.73,14.75,4.22,5.56,3.07,10.15,7.64,13.26,13.21,4.45,7.95,5.53,17.16,3.05,25.93-2.48,8.77-8.23,16.05-16.18,20.5h0c-5.11,2.86-10.87,4.34-16.67,4.34ZM272.39,319.28c-5.72,0-11.35,1.47-16.39,4.29-7.85,4.39-13.51,11.57-15.96,20.21-2.45,8.65-1.38,17.73,3.01,25.58,3.1,5.54,7.66,10.07,13.2,13.09,3.16,1.73,6.57,2.94,10.14,3.59,7.67,1.4,15.64.08,22.46-3.74,7.85-4.39,13.51-11.57,15.96-20.22,2.45-8.65,1.38-17.73-3.01-25.58-3.07-5.5-7.6-10-13.08-13.03-4.44-2.45-9.47-3.89-14.55-4.16-.59-.03-1.18-.05-1.78-.05Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M269.53,380.05c-1.36,2.25-2.38,4.33-3.18,6.23-3.56-.65-7.01-1.87-10.21-3.62.05-2.33.43-4.71,1.29-6.96,2.45-6.42,6.59-6.1,8.24-12.11,2.25-8.21-4.69-11.74-2.6-19.62,1.87-7.06,7.93-6.11,10.51-14.24,1.41-4.46.58-7.88.6-10.63,5.13.27,10.15,1.7,14.65,4.19-.13,3.27-.89,6.69-1.81,9.32-2.86,8.21-7.23,8.4-8.38,15.22-1.22,7.24,3.38,8.87,2.2,15.8-1.12,6.56-5.53,6.85-11.31,16.43Z" fill="#f2f0ed" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M266.42,386.41l-.09-.02c-3.6-.66-7.04-1.88-10.24-3.63l-.06-.03v-.07c.05-2.52.49-4.87,1.3-7,1.21-3.17,2.81-4.69,4.35-6.16,1.57-1.49,3.05-2.9,3.88-5.94,1.13-4.12-.1-7.1-1.28-9.98-1.16-2.81-2.36-5.72-1.32-9.64.92-3.49,2.85-5.03,4.89-6.67,2.12-1.7,4.31-3.46,5.62-7.58,1.04-3.29.86-5.97.7-8.33-.06-.8-.11-1.56-.1-2.27v-.12s.12,0,.12,0c5.12.27,10.21,1.72,14.7,4.2l.06.03v.07c-.12,3-.78,6.4-1.82,9.35-1.39,3.99-3.14,6.1-4.69,7.97-1.66,2-3.09,3.73-3.68,7.23-.61,3.62.26,5.86,1.1,8.02.83,2.12,1.68,4.32,1.09,7.79-.63,3.66-2.29,5.41-4.59,7.82-1.86,1.95-4.17,4.37-6.74,8.64h0c-1.23,2.03-2.26,4.06-3.18,6.21l-.04.09ZM256.26,382.59c3.13,1.7,6.5,2.9,10.02,3.55.91-2.13,1.94-4.14,3.16-6.16h0c2.59-4.29,4.91-6.73,6.77-8.68,2.27-2.38,3.91-4.11,4.53-7.7.58-3.4-.23-5.47-1.08-7.66-.85-2.19-1.74-4.45-1.12-8.14.6-3.56,2.05-5.31,3.73-7.34,1.53-1.85,3.27-3.95,4.65-7.9,1.02-2.91,1.67-6.26,1.8-9.22-4.41-2.42-9.39-3.85-14.41-4.13,0,.67.05,1.38.1,2.13.16,2.38.35,5.08-.71,8.42-1.33,4.19-3.55,5.97-5.69,7.69-2.01,1.61-3.91,3.13-4.81,6.55-1.02,3.85.11,6.59,1.31,9.49,1.2,2.91,2.44,5.93,1.29,10.13-.85,3.1-2.35,4.53-3.95,6.05-1.53,1.45-3.11,2.96-4.3,6.08-.79,2.08-1.22,4.38-1.28,6.85Z" fill="#f2f0ed" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                </g>
                <g id="Lshaped_Couch">
                    <g>
                    <g>
                        <path d="M529.39,476.07c-.22,0-.45-.01-.68-.04-2.09-.24-3.24-1.43-4.57-2.8-1.41-1.46-3.01-3.12-6.03-3.87-.91-.23-1.8-.34-2.72-.34-3.08,0-5.71,1.26-8.5,2.6-.98.47-1.99.96-3.01,1.38-3.91,1.61-8.27,2.42-12.96,2.42-10.18,0-20.99-4.03-27.54-10.28-5.29-5.03-9.71-12.88-7.49-17.5,1.12-2.34,3.54-3.06,6.11-3.83,2.71-.81,5.52-1.64,6.91-4.49,1.56-3.19-.04-6.18-1.73-9.34-1.74-3.24-3.71-6.92-2.75-11.57.67-3.27,2.51-5.61,4.13-7.67,1.97-2.5,3.82-4.87,3.1-8.26-.37-1.76-1.19-2.64-1.98-3.48-.74-.79-1.43-1.53-1.82-3.05-.71-2.76.05-6.37,2.03-9.65,2.05-3.4,5.07-5.84,8.08-6.55.61-.14,1.19-.21,1.77-.21,2.34,0,4.23,1.15,6.22,2.36,2.15,1.31,4.37,2.67,7.33,2.67.48,0,.97-.04,1.46-.11,4.53-.67,6.64-3.97,8.67-7.16,1.84-2.89,3.74-5.87,7.49-6.96.86-.25,1.73-.37,2.6-.37,3.96,0,7.61,2.56,11.46,5.26,4.39,3.08,8.93,6.27,14.57,6.26.98,0,1.98-.1,2.97-.3,2.33-.47,4.76-1.41,7.34-2.41,3.69-1.43,7.5-2.91,11.03-2.91,3.22,0,5.82,1.26,7.96,3.86.5.61.97,1.27,1.39,1.97,3.57,5.94,3.85,14.59.66,20.57-.55,1.02-1.21,1.94-1.84,2.83-1.32,1.83-2.68,3.73-2.91,6.46-.38,4.63,1.74,8.03,3.62,11.03,1.69,2.7,3.02,4.83,2.03,7.07-.92,2.07-3.22,2.75-5.44,3.4-2.24.66-4.55,1.34-5.25,3.52-.79,2.46,1.19,4.53,3.47,6.93,2.48,2.6,5.29,5.55,5.91,9.93.95,6.73-3.79,15.02-9.39,16.44-.54.14-1.04.2-1.55.2h0c-1.83,0-3.35-.9-4.95-1.84-1.9-1.12-4.05-2.39-7.09-2.39-.31,0-.64.01-.97.04-4.58.39-7.47,3.29-10.03,5.85-2.31,2.31-4.3,4.31-7.09,4.31Z" fill="#fff"/>
                        <path d="M513.49,370.47h0c3.8,0,7.39,2.51,11.18,5.17,4.45,3.12,9.06,6.36,14.86,6.36,1.01,0,2.05-.1,3.07-.31,2.37-.47,4.83-1.42,7.42-2.43,3.65-1.41,7.42-2.87,10.85-2.87,3.1,0,5.51,1.17,7.57,3.67.49.59.94,1.23,1.35,1.91,3.49,5.8,3.76,14.24.64,20.08-.53.99-1.18,1.9-1.81,2.77-1.36,1.89-2.76,3.84-3,6.71-.4,4.8,1.87,8.42,3.69,11.33,1.79,2.86,2.84,4.71,2,6.6-.83,1.86-2.91,2.48-5.12,3.13-2.36.7-4.81,1.42-5.58,3.84-.88,2.75,1.19,4.91,3.59,7.42,2.43,2.55,5.18,5.43,5.78,9.65.92,6.51-3.63,14.52-9.02,15.88-.5.13-.96.19-1.43.19-1.69,0-3.08-.82-4.7-1.77-1.96-1.15-4.17-2.46-7.34-2.46-.33,0-.67.01-1.01.04-4.76.4-7.73,3.38-10.34,6-2.23,2.23-4.15,4.16-6.73,4.16-.2,0-.41-.01-.62-.04-1.92-.22-2.95-1.29-4.27-2.65-1.46-1.51-3.11-3.22-6.27-4.01-.94-.24-1.9-.36-2.84-.36-3.2,0-6,1.35-8.71,2.65-.97.47-1.97.95-2.99,1.37-3.84,1.58-8.14,2.39-12.77,2.39-10.06,0-20.73-3.98-27.2-10.14-4.42-4.21-9.63-12.24-7.38-16.92,1.03-2.14,3.35-2.83,5.8-3.56,2.68-.8,5.72-1.71,7.21-4.74,1.68-3.42.02-6.52-1.74-9.79-1.78-3.32-3.62-6.76-2.7-11.24.65-3.16,2.37-5.35,4.03-7.46,2.04-2.6,3.97-5.05,3.2-8.67-.4-1.9-1.31-2.87-2.1-3.72-.72-.77-1.34-1.44-1.7-2.83-.68-2.63.06-6.1,1.98-9.27,1.99-3.28,4.89-5.64,7.77-6.32.57-.13,1.11-.2,1.66-.2,2.2,0,4.03,1.11,5.96,2.29,2.21,1.35,4.49,2.74,7.59,2.74.5,0,1.02-.04,1.53-.11,4.76-.7,6.93-4.1,9.02-7.39,1.87-2.94,3.64-5.71,7.2-6.74.81-.23,1.64-.35,2.46-.35M513.49,369.47c-.89,0-1.8.12-2.74.39-8.13,2.35-7.75,12.88-16.09,14.1-.48.07-.94.1-1.39.1-5.52,0-8.47-5.03-13.54-5.03-.6,0-1.22.07-1.88.22-6.7,1.57-12.07,10.69-10.49,16.81.86,3.31,3.11,3.28,3.8,6.51,1.25,5.87-5.72,8.37-7.23,15.73-1.94,9.41,7.5,14.7,4.52,20.79-2.58,5.26-10.56,3.2-13.02,8.32-2.49,5.19,2.76,13.48,7.59,18.08,6.57,6.26,17.33,10.42,27.89,10.42,4.53,0,9.03-.77,13.15-2.46,3.86-1.59,7.26-3.94,11.32-3.94.84,0,1.7.1,2.6.33,5.68,1.42,6.06,6.17,10.67,6.69.25.03.5.04.74.04,6.3,0,8.79-9.45,17.16-10.17.32-.03.63-.04.93-.04,5.44,0,7.84,4.23,12.04,4.23.53,0,1.08-.07,1.68-.22,5.87-1.48,10.76-9.93,9.76-16.99-1.22-8.67-10.87-12.06-9.4-16.63,1.26-3.93,8.68-2.4,10.67-6.87,2.27-5.11-6.32-9.58-5.6-18.26.32-3.86,2.99-5.9,4.69-9.1,3.27-6.13,3.03-14.91-.67-21.07-.43-.72-.91-1.4-1.43-2.03-2.47-2.99-5.32-4.04-8.35-4.04-6.05,0-12.79,4.19-18.47,5.32-.99.2-1.94.29-2.87.29-10.47,0-17.38-11.53-26.03-11.53h0Z" fill="#ede5d8"/>
                    </g>
                    <g>
                        <path d="M513.5,369.11c4.22,0,7.99,2.65,11.94,5.42,5.02,3.52,10.21,7.16,16.88,5.83,2.26-.45,4.66-1.38,7.2-2.37,6.74-2.61,14.37-5.57,19.95,1.2.53.64,1.02,1.34,1.47,2.08h0c3.72,6.18,4,15.18.68,21.42-.57,1.07-1.25,2.02-1.9,2.93-1.31,1.82-2.54,3.54-2.75,6.03-.36,4.35,1.68,7.62,3.49,10.5,1.75,2.8,3.26,5.22,2.09,7.87-1.08,2.43-3.68,3.2-5.98,3.88-2.12.62-4.12,1.21-4.68,2.96-.63,1.98,1.09,3.79,3.28,6.08,2.44,2.56,5.48,5.75,6.14,10.4,1.02,7.24-3.95,15.85-10.03,17.39-2.95.75-4.99-.46-7.15-1.73-2.1-1.24-4.26-2.51-7.55-2.23-4.26.36-6.93,3.03-9.5,5.61-2.52,2.53-4.91,4.92-8.47,4.52-2.4-.27-3.71-1.62-5.09-3.06-1.4-1.45-2.84-2.94-5.62-3.64-3.98-1-7.22.56-10.64,2.2-.99.47-2.01.97-3.06,1.4-14.42,5.94-32.38.58-41.42-8.03-4.56-4.35-10.37-12.86-7.67-18.49,1.29-2.68,4-3.49,6.63-4.28,2.65-.79,5.16-1.54,6.39-4.04,1.37-2.8-.06-5.47-1.72-8.56-1.81-3.37-3.85-7.19-2.83-12.15.71-3.47,2.62-5.89,4.29-8.03,1.92-2.44,3.58-4.55,2.94-7.56-.33-1.53-1.03-2.28-1.77-3.08-.78-.83-1.58-1.69-2.02-3.42-.77-2.98.03-6.83,2.13-10.31,2.17-3.59,5.39-6.18,8.62-6.94,3.57-.83,6.14.74,8.63,2.25,2.37,1.45,4.82,2.94,8.22,2.44,4.15-.61,6.05-3.6,8.07-6.77,1.92-3.02,3.91-6.14,7.97-7.32.97-.28,1.92-.41,2.85-.41ZM539.49,381.35c-5.56,0-10.07-3.17-14.45-6.24-4.68-3.28-9.1-6.38-14.19-4.91-3.8,1.1-5.72,4.11-7.57,7.02-2.01,3.16-4.1,6.44-8.57,7.09-3.65.54-6.21-1.03-8.69-2.54-2.48-1.51-4.81-2.94-8.1-2.17-3.04.71-6.1,3.18-8.17,6.61-2.01,3.32-2.77,6.97-2.05,9.77.4,1.55,1.11,2.31,1.86,3.11.78.83,1.58,1.69,1.94,3.41.71,3.33-1.13,5.67-3.07,8.14-1.63,2.07-3.48,4.42-4.16,7.73-.97,4.71,1.01,8.41,2.76,11.67,1.68,3.13,3.26,6.08,1.73,9.2-1.37,2.78-4.14,3.61-6.82,4.41-2.59.77-5.04,1.5-6.2,3.9-2.52,5.25,3.27,13.63,7.52,17.67,8.87,8.45,26.51,13.71,40.66,7.88,1.03-.42,2.04-.91,3.02-1.38,3.54-1.7,6.89-3.31,11.12-2.25,2.97.75,4.56,2.39,5.96,3.83,1.35,1.4,2.52,2.6,4.66,2.85,3.22.36,5.38-1.8,7.89-4.31,2.54-2.54,5.42-5.43,9.94-5.81,3.51-.3,5.88,1.1,7.97,2.33,2.12,1.25,3.95,2.33,6.62,1.66,5.66-1.43,10.46-9.81,9.5-16.6-.62-4.43-3.45-7.39-5.95-10.01-2.25-2.36-4.2-4.4-3.44-6.78.67-2.1,2.85-2.74,5.15-3.42,2.25-.66,4.58-1.35,5.53-3.48,1.02-2.31-.33-4.47-2.04-7.21-1.86-2.98-3.97-6.35-3.59-10.94.22-2.69,1.51-4.49,2.88-6.39.64-.89,1.3-1.81,1.85-2.85,3.21-6.03,2.94-14.74-.66-20.72h0c-.43-.71-.9-1.38-1.4-1.99-5.26-6.37-12.32-3.64-19.15-.99-2.57,1-5,1.94-7.32,2.4-1.02.2-2.01.3-2.97.3Z" fill="#fff"/>
                        <path d="M513.5,369.11c-.93,0-1.87.13-2.85.41-4.06,1.17-6.05,4.3-7.97,7.32-2.02,3.17-3.92,6.16-8.07,6.77-.46.07-.9.1-1.32.1-2.73,0-4.85-1.29-6.9-2.54-2.01-1.23-4.07-2.49-6.67-2.49-.62,0-1.27.07-1.95.23-3.23.75-6.45,3.35-8.62,6.94-2.1,3.48-2.9,7.33-2.13,10.31.45,1.73,1.25,2.59,2.02,3.42.74.79,1.44,1.55,1.77,3.08.64,3-1.02,5.11-2.94,7.56-1.68,2.14-3.58,4.56-4.29,8.03-1.02,4.96,1.03,8.78,2.83,12.15,1.66,3.09,3.09,5.76,1.72,8.56-1.23,2.51-3.73,3.25-6.39,4.04-2.63.78-5.34,1.59-6.63,4.28-2.7,5.63,3.1,14.14,7.67,18.49,6.38,6.08,17.22,10.54,28.12,10.54,4.53,0,9.06-.77,13.3-2.51,1.05-.43,2.07-.92,3.06-1.4,2.68-1.29,5.24-2.52,8.13-2.52.81,0,1.64.1,2.51.31,2.78.7,4.22,2.19,5.62,3.64,1.39,1.43,2.69,2.79,5.09,3.06.27.03.52.04.78.04,3.14,0,5.35-2.22,7.69-4.56,2.57-2.58,5.24-5.25,9.5-5.61.31-.03.61-.04.9-.04,2.8,0,4.75,1.15,6.65,2.27,1.7,1,3.33,1.96,5.38,1.96.56,0,1.14-.07,1.77-.23,6.08-1.54,11.05-10.15,10.03-17.39-.66-4.65-3.7-7.84-6.14-10.4-2.18-2.29-3.91-4.1-3.28-6.08.56-1.74,2.56-2.33,4.68-2.96,2.29-.68,4.9-1.44,5.98-3.88,1.18-2.65-.34-5.07-2.09-7.87-1.8-2.88-3.85-6.15-3.49-10.5.21-2.49,1.44-4.21,2.75-6.03.65-.91,1.33-1.85,1.9-2.93,3.32-6.23,3.04-15.24-.68-21.42-.44-.74-.94-1.44-1.47-2.08-2.54-3.08-5.51-4.15-8.62-4.15-3.72,0-7.66,1.52-11.33,2.94-2.54.98-4.94,1.91-7.2,2.37-.97.19-1.9.28-2.81.28-5.36,0-9.78-3.1-14.07-6.11-3.95-2.77-7.73-5.42-11.94-5.42h0ZM493.27,384.42c.46,0,.95-.03,1.45-.11,4.47-.66,6.55-3.93,8.57-7.09,1.85-2.91,3.77-5.92,7.57-7.02.89-.26,1.77-.38,2.63-.38,4.02,0,7.7,2.58,11.56,5.29,4.39,3.08,8.9,6.24,14.45,6.24.96,0,1.95-.09,2.97-.3,2.32-.46,4.75-1.4,7.32-2.4,3.73-1.44,7.53-2.92,11.07-2.92,2.94,0,5.7,1.02,8.08,3.91.51.61.98,1.29,1.4,1.99,3.6,5.98,3.88,14.69.66,20.72-.55,1.03-1.21,1.95-1.85,2.85-1.37,1.9-2.66,3.7-2.88,6.39-.38,4.59,1.73,7.96,3.59,10.94,1.71,2.74,3.06,4.9,2.04,7.21-.95,2.13-3.28,2.82-5.53,3.48-2.3.68-4.48,1.32-5.15,3.42-.76,2.38,1.18,4.42,3.44,6.78,2.5,2.62,5.33,5.58,5.95,10.01.96,6.79-3.84,15.17-9.5,16.6-.57.14-1.09.21-1.6.21-1.86,0-3.35-.88-5.02-1.86-1.89-1.12-4.02-2.37-7.02-2.37-.31,0-.62.01-.95.04-4.52.38-7.4,3.27-9.94,5.81-2.32,2.32-4.35,4.35-7.19,4.35-.23,0-.46-.01-.7-.04-2.15-.24-3.31-1.45-4.66-2.85-1.4-1.45-2.98-3.09-5.96-3.83-.94-.24-1.84-.34-2.7-.34-3.02,0-5.66,1.27-8.42,2.59-.98.47-1.99.96-3.02,1.38-4.15,1.71-8.6,2.46-13.05,2.46-10.7,0-21.34-4.38-27.61-10.35-4.25-4.04-10.04-12.41-7.52-17.67,1.15-2.4,3.6-3.13,6.2-3.9,2.68-.8,5.45-1.63,6.82-4.41,1.53-3.12-.05-6.08-1.73-9.2-1.75-3.26-3.73-6.96-2.76-11.67.68-3.31,2.53-5.66,4.16-7.73,1.94-2.48,3.78-4.81,3.07-8.14-.37-1.72-1.17-2.58-1.94-3.41-.75-.8-1.45-1.56-1.86-3.11-.72-2.8.04-6.45,2.05-9.77,2.07-3.43,5.13-5.9,8.17-6.61.63-.15,1.23-.21,1.8-.21,2.39,0,4.3,1.16,6.29,2.38,2.14,1.3,4.33,2.64,7.24,2.64h0Z" fill="#ede5d8"/>
                    </g>
                    </g>
                    <g>
                    <path d="M513.5,374.24c1.32,0,2.23.78,3.72,2.07,1.69,1.46,4.25,3.66,9.16,6.22,5.09,2.66,8.3,3.37,10.52,3.69h0c1.19.17,3.67.53,6.79.15,3.68-.44,5.88-1.64,7.82-2.69,1.96-1.07,3.81-2.07,6.78-2.13,3.87-.08,7.04,1.06,8.93,3.19,3.49,3.93,1.95,10.3,1.37,12.69-1.15,4.75-3.18,7.1-4.98,9.17-1.62,1.88-3.03,3.5-3.21,6.47-.23,3.57,1.48,5.92,3.13,8.2,1.71,2.36,3.33,4.59,2.77,7.97-.53,3.2-2.59,4.9-4.59,6.55-1.88,1.55-3.65,3.01-3.73,5.6-.07,2.7,1.75,4.48,3.67,6.36,2.1,2.06,4.28,4.18,4.4,7.73.12,3.45-1.86,8.02-5.4,9.69-3.16,1.49-6.11-.03-9.23-1.65-3.14-1.63-6.39-3.31-10.33-2.32-3.52.88-5.56,3.44-7.36,5.69-1.88,2.35-3.51,4.39-6.31,4.19-2.2-.15-3.37-1.6-4.61-3.14-1.23-1.53-2.63-3.26-5.3-3.97-2.69-.72-4.54.15-7.89,1.72-1.93.9-4.34,2.03-7.67,3.22-6.17,2.2-11.5,4.09-17.91,3.63-2.36-.17-10.57-1.23-17.34-7.64-1.77-1.67-10.39-10.27-6.38-15.02.69-.82,1.7-1.35,2.67-1.81.53-.25,1.05-.49,1.57-.73,1.63-.75,3.18-1.45,4.67-2.51,1.81-1.28,4.29-3.33,4.91-6.29.63-2.99-.81-5.43-2.33-8.01-.95-1.61-1.94-3.28-2.35-5.08-.94-4.12-.54-8.63,1.1-12.38.5-1.13,1.17-2.23,1.83-3.28,1.58-2.55,3.07-4.96,2.4-8.03-.34-1.54-1.16-2.95-1.96-4.32-1.28-2.19-2.6-4.45-1.95-7.26.86-3.72,3.53-7.47,7.55-7.47h.02c2.69,0,4.97,1.69,7.17,3.32.69.51,1.34.99,1.99,1.41,6.19,4,14.71.78,18.49-4.61.52-.74.99-1.7,1.48-2.72,1.22-2.52,2.61-5.37,5.32-5.8.21-.03.41-.05.61-.05ZM536.85,386.58c-2.25-.32-5.49-1.04-10.63-3.72-4.94-2.58-7.52-4.8-9.23-6.27-1.69-1.45-2.53-2.18-4.04-1.94-2.52.41-3.87,3.17-5.06,5.61-.5,1.03-.97,2-1.51,2.76-3.95,5.64-12.51,8.88-18.97,4.71-.66-.43-1.31-.91-2-1.42-2.16-1.6-4.38-3.25-6.96-3.25h-.02c-3.83,0-6.37,3.61-7.2,7.19-.62,2.68.61,4.78,1.91,7.01.81,1.39,1.65,2.83,2,4.42.71,3.21-.89,5.8-2.44,8.29-.65,1.05-1.32,2.13-1.81,3.24-1.61,3.68-2.01,8.11-1.08,12.16.4,1.75,1.37,3.39,2.31,4.98,1.49,2.53,3.04,5.14,2.38,8.26-.65,3.09-3.2,5.19-5.06,6.51-1.52,1.07-3.08,1.79-4.73,2.54-.52.24-1.04.48-1.57.73-.93.45-1.9.95-2.55,1.72-3.81,4.51,4.62,12.9,6.35,14.54,6.69,6.33,14.8,7.37,17.13,7.55,6.33.46,11.63-1.42,17.76-3.61,3.32-1.18,5.71-2.3,7.64-3.21,3.43-1.61,5.32-2.49,8.13-1.74,2.78.74,4.22,2.52,5.49,4.09,1.24,1.54,2.32,2.87,4.36,3.01,2.61.18,4.19-1.79,6.01-4.06,1.84-2.3,3.92-4.9,7.55-5.82,4.07-1.02,7.53.77,10.58,2.35,3.04,1.57,5.91,3.06,8.91,1.64,3.41-1.61,5.32-6.02,5.2-9.35-.12-3.4-2.24-5.48-4.3-7.49-1.98-1.94-3.86-3.77-3.78-6.62.08-2.75,1.91-4.26,3.85-5.87,1.94-1.6,3.95-3.26,4.46-6.33.54-3.23-1.04-5.4-2.71-7.7-1.69-2.33-3.43-4.73-3.2-8.43.19-3.09,1.63-4.75,3.3-6.68,1.77-2.04,3.77-4.36,4.9-9.02.57-2.35,2.08-8.59-1.29-12.38-1.83-2.05-4.91-3.15-8.66-3.07-2.88.05-4.62,1-6.62,2.08-1.97,1.07-4.2,2.28-7.95,2.74-3.17.38-5.68.02-6.89-.15h0Z" fill="#fff"/>
                    <path d="M513.5,374.24c-.19,0-.39.02-.61.05-2.7.44-4.09,3.29-5.32,5.8-.49,1.02-.96,1.97-1.48,2.72-2.6,3.72-7.46,6.4-12.25,6.4-2.16,0-4.31-.55-6.24-1.79-.65-.42-1.3-.9-1.99-1.41-2.2-1.63-4.48-3.32-7.17-3.32h-.02c-4.02,0-6.69,3.75-7.55,7.47-.65,2.81.67,5.08,1.95,7.26.8,1.37,1.62,2.78,1.96,4.32.68,3.07-.82,5.48-2.4,8.03-.66,1.06-1.33,2.15-1.83,3.28-1.64,3.75-2.05,8.26-1.1,12.38.41,1.8,1.4,3.47,2.35,5.08,1.53,2.58,2.97,5.02,2.33,8.01-.63,2.97-3.11,5.01-4.91,6.29-1.49,1.06-3.04,1.76-4.67,2.51-.52.24-1.04.48-1.57.73-.97.47-1.97.99-2.67,1.81-4.02,4.76,4.61,13.35,6.38,15.02,6.77,6.41,14.99,7.47,17.34,7.64.67.05,1.32.07,1.96.07,5.56,0,10.42-1.73,15.95-3.7,3.33-1.19,5.74-2.31,7.67-3.22,2.54-1.19,4.22-1.97,6.05-1.97.59,0,1.19.08,1.85.26,2.67.71,4.07,2.45,5.3,3.97,1.24,1.54,2.42,2.99,4.61,3.14.12,0,.24.01.36.01,2.58,0,4.15-1.96,5.95-4.21,1.8-2.25,3.85-4.81,7.36-5.69.81-.2,1.6-.3,2.36-.3,2.92,0,5.48,1.32,7.97,2.62,2.22,1.15,4.36,2.25,6.54,2.25.88,0,1.77-.18,2.68-.61,3.54-1.67,5.53-6.24,5.4-9.69-.13-3.55-2.3-5.67-4.4-7.73-1.93-1.88-3.75-3.66-3.67-6.36.07-2.59,1.85-4.05,3.73-5.6,1.99-1.65,4.06-3.35,4.59-6.55.56-3.38-1.06-5.61-2.77-7.97-1.65-2.28-3.36-4.63-3.13-8.2.19-2.97,1.59-4.59,3.21-6.47,1.79-2.07,3.83-4.43,4.98-9.17.58-2.4,2.12-8.77-1.37-12.69-1.84-2.06-4.86-3.2-8.57-3.2-.12,0-.24,0-.37,0-2.97.06-4.82,1.06-6.78,2.13-1.94,1.05-4.14,2.25-7.82,2.69-1.01.12-1.95.17-2.8.17-1.79,0-3.19-.2-3.99-.32-2.22-.32-5.43-1.03-10.52-3.69-4.91-2.56-7.47-4.77-9.16-6.22-1.49-1.29-2.4-2.07-3.72-2.07h0ZM493.94,389.62c4.87,0,9.74-2.74,12.45-6.6.53-.76,1.01-1.73,1.51-2.76,1.19-2.44,2.53-5.2,5.06-5.61.19-.03.37-.05.55-.05,1.19,0,2.02.72,3.49,1.98,1.7,1.47,4.28,3.69,9.23,6.27,5.14,2.69,8.38,3.4,10.63,3.72.82.12,2.23.32,4.05.32.86,0,1.82-.05,2.84-.17,3.74-.45,5.98-1.67,7.95-2.74,2-1.09,3.74-2.03,6.62-2.08.12,0,.25,0,.37,0,3.59,0,6.53,1.09,8.29,3.08,3.37,3.79,1.86,10.03,1.29,12.38-1.13,4.66-3.13,6.98-4.9,9.02-1.67,1.93-3.1,3.59-3.3,6.68-.23,3.7,1.51,6.1,3.2,8.43,1.67,2.3,3.24,4.47,2.71,7.7-.51,3.07-2.52,4.73-4.46,6.33-1.94,1.6-3.78,3.12-3.85,5.87-.08,2.85,1.8,4.68,3.78,6.62,2.05,2.01,4.18,4.08,4.3,7.49.12,3.34-1.79,7.75-5.2,9.35-.85.4-1.69.57-2.53.57-2.12,0-4.21-1.08-6.39-2.21-2.43-1.26-5.12-2.65-8.16-2.65-.78,0-1.59.09-2.41.3-3.63.91-5.72,3.52-7.55,5.82-1.74,2.18-3.26,4.07-5.68,4.07-.11,0-.22,0-.33-.01-2.05-.14-3.12-1.47-4.36-3.01-1.27-1.57-2.71-3.35-5.49-4.09-.69-.19-1.33-.27-1.95-.27-1.89,0-3.6.8-6.18,2.01-1.93.9-4.32,2.02-7.64,3.21-5.5,1.96-10.32,3.68-15.83,3.68-.64,0-1.28-.02-1.94-.07-2.33-.17-10.44-1.22-17.13-7.55-1.73-1.64-10.16-10.02-6.35-14.54.65-.77,1.62-1.27,2.55-1.72.53-.25,1.05-.49,1.57-.73,1.65-.75,3.21-1.47,4.73-2.54,1.86-1.31,4.4-3.42,5.06-6.51.66-3.13-.88-5.74-2.38-8.26-.94-1.59-1.91-3.23-2.31-4.98-.92-4.05-.53-8.48,1.08-12.16.49-1.11,1.16-2.19,1.81-3.24,1.55-2.5,3.15-5.08,2.44-8.29-.35-1.59-1.19-3.03-2-4.42-1.3-2.23-2.52-4.33-1.91-7.01.83-3.58,3.38-7.19,7.2-7.19h.02c2.58,0,4.81,1.66,6.96,3.25.69.51,1.35,1,2,1.42,2.03,1.32,4.28,1.9,6.52,1.9h0Z" fill="#ede5d8"/>
                    </g>
                    <g>
                    <path d="M513.96,381.48c2.87,0,5.01,2.45,7.45,5.24,2.84,3.25,6.06,6.94,11.38,8.21,7.37,1.77,14.46-2.2,19.63-5.09,3.7-2.07,6.37-3.56,7.7-2.21,1.14,1.17.03,3.22-1.51,6.06-2.14,3.95-5.08,9.36-4.46,16.23.42,4.7,2.32,8.02,4,10.95,1.82,3.18,3.39,5.92,2.13,9.26-1.05,2.79-3.28,3.98-5.43,5.14-2.12,1.14-4.12,2.21-4.81,4.73-1.11,4.05,2.15,8.4,4.53,11.58,1.68,2.25,2.9,3.88,2.19,4.75-.72.89-2.65-.02-5.32-1.29-3.96-1.88-9.38-4.46-13.66-2.39-2.38,1.15-3.38,3.23-4.35,5.25-1.01,2.1-1.96,4.07-4.35,4.77l-.05-.17.05.17c-2.53.74-4.4-.68-6.55-2.33-1.78-1.36-3.8-2.9-6.68-3.7-5.52-1.52-9.78,1.02-14.29,3.72-4.44,2.65-9.47,5.65-16.41,5.09-6.71-.54-12.5-4.02-15.03-7.02-1.17-1.39-1.74-2.74-1.64-3.9.19-2.25,2.85-3.38,5.66-4.58,3.14-1.34,6.7-2.86,7.6-6.17.78-2.87-.92-5.13-2.89-7.74-2.03-2.69-4.33-5.74-4.11-10.06.19-3.76,2.09-5.87,4.11-8.1,1.95-2.16,3.97-4.39,4.33-8.3.47-5.06-2.15-9.22-4.06-12.26-1.4-2.23-2.42-3.85-1.56-4.84,1-1.16,3.28-.04,6.43,1.5,4.31,2.11,10.2,4.99,15.45,3.03,4.08-1.53,5.89-5.31,7.49-8.66,1.54-3.21,2.99-6.24,6.16-6.78.3-.05.6-.08.89-.08ZM536.56,395.73c-1.27,0-2.55-.14-3.85-.45-5.43-1.3-8.69-5.03-11.56-8.32-2.62-2.99-4.87-5.58-8.01-5.05-3,.51-4.34,3.32-5.9,6.58-1.63,3.4-3.47,7.26-7.68,8.83-5.39,2.02-11.37-.9-15.73-3.04-2.9-1.42-5.19-2.54-6.01-1.59-.68.79.27,2.31,1.6,4.42,1.94,3.08,4.59,7.3,4.11,12.48-.37,4.03-2.43,6.3-4.42,8.5-1.97,2.18-3.84,4.24-4.02,7.88-.21,4.2,2.05,7.19,4.04,9.83,1.94,2.57,3.77,5,2.94,8.04-.94,3.48-4.59,5.03-7.8,6.41-2.83,1.21-5.27,2.25-5.45,4.29-.09,1.07.45,2.33,1.56,3.64,2.49,2.95,8.18,6.36,14.79,6.89,6.83.55,11.59-2.29,16.2-5.04,4.58-2.73,8.9-5.31,14.57-3.75,2.94.81,4.99,2.37,6.8,3.76,2.16,1.65,3.87,2.96,6.24,2.27,2.24-.65,3.16-2.56,4.13-4.58,1-2.07,2.03-4.21,4.52-5.41,4.44-2.14,9.95.48,13.97,2.39,2.33,1.11,4.34,2.07,4.89,1.39.54-.66-.73-2.35-2.2-4.32-2.42-3.24-5.74-7.67-4.58-11.89.73-2.66,2.8-3.77,4.98-4.95,2.09-1.12,4.26-2.29,5.27-4.95,1.2-3.18-.26-5.73-2.11-8.96-1.7-2.96-3.62-6.32-4.05-11.09-.63-6.98,2.34-12.44,4.5-16.43,1.47-2.71,2.53-4.66,1.57-5.64-1.14-1.16-3.84.35-7.27,2.27-4.32,2.42-9.96,5.58-16.03,5.58Z" fill="#fff"/>
                    <path d="M513.96,381.48c-.29,0-.58.02-.89.08-3.18.54-4.63,3.57-6.16,6.78-1.6,3.34-3.41,7.13-7.49,8.66-1.23.46-2.5.66-3.78.66-4.16,0-8.38-2.07-11.68-3.68-2.25-1.1-4.05-1.98-5.26-1.98-.49,0-.88.14-1.17.48-.86.99.16,2.6,1.56,4.84,1.91,3.04,4.53,7.19,4.06,12.26-.36,3.91-2.38,6.14-4.33,8.3-2.02,2.23-3.92,4.34-4.11,8.1-.21,4.32,2.08,7.37,4.11,10.06,1.97,2.61,3.67,4.86,2.89,7.74-.9,3.31-4.46,4.83-7.6,6.17-2.81,1.2-5.47,2.34-5.66,4.58-.1,1.16.47,2.51,1.64,3.9,2.54,3,8.33,6.48,15.03,7.02.57.05,1.13.07,1.68.07,6.09,0,10.66-2.73,14.73-5.16,3.57-2.13,6.99-4.17,11-4.17,1.05,0,2.14.14,3.29.45,2.88.79,4.9,2.33,6.68,3.7,1.75,1.34,3.31,2.53,5.2,2.53.43,0,.88-.06,1.35-.2l-.05-.17.05.17c2.39-.69,3.34-2.67,4.35-4.77.97-2.01,1.97-4.1,4.35-5.25,1.12-.54,2.32-.77,3.55-.77,3.47,0,7.19,1.77,10.11,3.16,1.93.92,3.47,1.65,4.45,1.65.38,0,.67-.11.87-.36.71-.87-.51-2.5-2.19-4.75-2.38-3.18-5.63-7.53-4.53-11.58.69-2.52,2.69-3.59,4.81-4.73,2.15-1.15,4.38-2.35,5.43-5.14,1.26-3.34-.31-6.08-2.13-9.26-1.68-2.93-3.58-6.25-4-10.95-.62-6.87,2.32-12.28,4.46-16.23,1.54-2.84,2.66-4.89,1.51-6.06-.35-.36-.8-.52-1.34-.52-1.48,0-3.64,1.21-6.36,2.73-4.28,2.4-9.88,5.53-15.87,5.53-1.24,0-2.5-.13-3.76-.44-5.32-1.28-8.54-4.96-11.38-8.21-2.44-2.79-4.58-5.24-7.45-5.24h0ZM495.65,398c1.31,0,2.62-.2,3.9-.68,4.21-1.58,6.06-5.43,7.68-8.83,1.56-3.26,2.91-6.08,5.9-6.58.28-.05.55-.07.81-.07,2.73,0,4.81,2.39,7.2,5.12,2.87,3.29,6.13,7.02,11.56,8.32,1.3.31,2.58.45,3.85.45,6.07,0,11.71-3.16,16.03-5.58,2.6-1.45,4.78-2.68,6.18-2.68.45,0,.81.12,1.09.4.96.98-.1,2.93-1.57,5.64-2.17,3.99-5.13,9.45-4.5,16.43.43,4.78,2.35,8.13,4.05,11.09,1.85,3.23,3.31,5.77,2.11,8.96-1.01,2.66-3.17,3.83-5.27,4.95-2.19,1.17-4.25,2.28-4.98,4.95-1.15,4.22,2.16,8.65,4.58,11.89,1.47,1.96,2.73,3.66,2.2,4.32-.13.16-.33.23-.6.23-.9,0-2.5-.76-4.29-1.62-2.96-1.41-6.71-3.2-10.26-3.2-1.28,0-2.53.23-3.71.8-2.49,1.2-3.52,3.34-4.52,5.41-.97,2.02-1.9,3.93-4.13,4.58-.44.13-.86.19-1.26.19-1.75,0-3.21-1.11-4.98-2.46-1.81-1.38-3.86-2.95-6.8-3.76-1.19-.33-2.31-.47-3.4-.47-4.09,0-7.55,2.06-11.17,4.22-4.22,2.51-8.56,5.11-14.5,5.11-.55,0-1.12-.02-1.7-.07-6.61-.53-12.3-3.95-14.79-6.89-1.11-1.31-1.65-2.57-1.56-3.64.18-2.04,2.62-3.08,5.45-4.29,3.21-1.37,6.86-2.93,7.8-6.41.83-3.04-1.01-5.47-2.94-8.04-1.99-2.64-4.25-5.64-4.04-9.83.18-3.64,2.04-5.7,4.02-7.88,1.99-2.2,4.05-4.47,4.42-8.5.48-5.18-2.18-9.4-4.11-12.48-1.32-2.1-2.28-3.62-1.6-4.42.21-.24.52-.35.91-.35,1.13,0,2.95.89,5.1,1.94,3.33,1.63,7.6,3.72,11.83,3.72h0Z" fill="#ede5d8"/>
                    </g>
                    <g>
                    <path d="M516.05,391.57c2.33,0,4.16,1.99,6.24,4.26,2.53,2.75,5.4,5.87,10,6.58,4.34.67,7.98-1.13,10.91-2.58,2.35-1.16,4.21-2.08,5.36-.99,1.14,1.06.44,2.87-.52,5.36-1.13,2.93-2.68,6.94-1.6,11.45.88,3.69,3.1,6.09,4.89,8.03,1.69,1.83,3.02,3.27,2.43,5-.69,2-3.29,2.54-6.04,3.1-2.73.56-5.54,1.14-6.34,3.23-.83,2.17.94,4.78,2.5,7.08,1.33,1.96,2.48,3.65,1.72,4.71-.7.98-2.37.55-4.48,0-2.64-.68-5.93-1.52-8.49.13-1.78,1.14-2.28,2.87-2.76,4.54-.46,1.58-.89,3.08-2.41,3.79h0c-2.13,1.01-4.16-.53-6.74-2.47-2.29-1.72-4.88-3.68-8.29-4.48-7.44-1.76-14.97,3.11-19.95,6.33-3.25,2.1-5.59,3.62-6.62,2.57-.76-.77-.03-2.12.98-3.98,1.4-2.58,3.33-6.11,2.94-10.59-.35-4.12-2.49-6.71-4.37-9-1.89-2.3-3.53-4.29-3.04-7.22.51-3.07,2.97-4.73,5.35-6.34,2.43-1.65,4.73-3.2,5.04-6.12.35-3.22-1.92-5.93-3.75-8.11-1.35-1.61-2.42-2.88-1.82-3.8.66-1.02,2.52-.4,5.11.46,3.62,1.2,8.58,2.85,12.86.83,3.15-1.48,4.46-4.27,5.61-6.73,1.13-2.41,2.1-4.49,4.47-4.94.28-.05.55-.08.81-.08ZM534.14,402.9c-.62,0-1.25-.04-1.9-.14-4.73-.73-7.64-3.89-10.21-6.69-2.25-2.45-4.19-4.56-6.72-4.07-2.19.42-3.13,2.43-4.21,4.74-1.18,2.51-2.51,5.36-5.78,6.9-4.41,2.08-9.45.4-13.12-.82-2.34-.78-4.19-1.39-4.7-.6-.45.7.54,1.89,1.8,3.38,1.77,2.12,4.2,5.01,3.83,8.38-.34,3.08-2.81,4.76-5.2,6.37-2.32,1.57-4.72,3.19-5.2,6.11-.46,2.78,1.13,4.71,2.96,6.94,1.92,2.33,4.09,4.97,4.45,9.19.39,4.59-1.56,8.18-2.99,10.79-.94,1.73-1.62,2.97-1.04,3.56.83.84,3.19-.68,6.18-2.62,4.29-2.77,10.45-6.76,16.88-6.76,1.11,0,2.22.12,3.34.38,3.48.82,6.11,2.8,8.42,4.54,2.48,1.87,4.44,3.34,6.38,2.43h0c1.37-.65,1.76-2,2.22-3.57.48-1.65,1.02-3.52,2.91-4.74,2.69-1.73,6.06-.87,8.77-.17,1.9.49,3.54.91,4.1.13.62-.86-.47-2.46-1.73-4.3-1.61-2.37-3.44-5.06-2.54-7.41.87-2.27,3.78-2.87,6.6-3.45,2.65-.55,5.16-1.06,5.78-2.87.52-1.53-.68-2.83-2.36-4.64-1.81-1.96-4.07-4.41-4.97-8.18-1.1-4.61.47-8.69,1.61-11.66.91-2.36,1.57-4.07.61-4.97-.98-.92-2.65-.09-4.96,1.05-2.41,1.19-5.57,2.75-9.23,2.75Z" fill="#fff"/>
                    <path d="M516.05,391.57c-.26,0-.53.03-.81.08-2.36.46-3.34,2.53-4.47,4.94-1.15,2.46-2.46,5.25-5.61,6.73-1.46.69-2.99.95-4.52.95-2.98,0-5.95-.99-8.34-1.78-1.63-.54-2.98-.99-3.91-.99-.55,0-.95.15-1.2.53-.59.92.47,2.19,1.82,3.8,1.83,2.18,4.1,4.9,3.75,8.11-.32,2.92-2.61,4.47-5.04,6.12-2.38,1.61-4.84,3.28-5.35,6.34-.49,2.94,1.15,4.92,3.04,7.22,1.88,2.29,4.02,4.88,4.37,9,.38,4.48-1.54,8.02-2.94,10.59-1.01,1.86-1.75,3.21-.98,3.98.23.23.53.34.89.34,1.24,0,3.22-1.28,5.74-2.91,4.25-2.75,10.36-6.7,16.69-6.7,1.08,0,2.17.12,3.25.37,3.41.8,6,2.76,8.29,4.48,2.02,1.52,3.7,2.79,5.36,2.79.46,0,.92-.1,1.39-.32,1.51-.71,1.95-2.21,2.41-3.79.49-1.67.99-3.39,2.76-4.54,1.1-.71,2.33-.96,3.59-.96,1.68,0,3.4.44,4.9.83,1.19.31,2.25.58,3.06.58.63,0,1.12-.16,1.42-.59.76-1.06-.39-2.75-1.72-4.71-1.56-2.3-3.34-4.91-2.5-7.08.8-2.08,3.62-2.67,6.34-3.23,2.75-.57,5.36-1.11,6.04-3.1.59-1.73-.74-3.17-2.43-5-1.79-1.93-4.01-4.34-4.89-8.03-1.07-4.51.47-8.52,1.6-11.45.96-2.49,1.65-4.3.52-5.36-.36-.34-.8-.48-1.29-.48-1.08,0-2.46.68-4.07,1.48-2.49,1.23-5.51,2.72-9.03,2.72-.61,0-1.24-.04-1.88-.14-4.61-.71-7.47-3.83-10-6.58-2.08-2.27-3.91-4.26-6.24-4.26h0ZM500.64,404.63c1.58,0,3.16-.27,4.67-.98,3.26-1.54,4.6-4.39,5.78-6.9,1.09-2.32,2.03-4.32,4.21-4.74.25-.05.49-.07.73-.07,2.19,0,3.97,1.93,5.99,4.14,2.57,2.79,5.48,5.96,10.21,6.69.64.1,1.28.14,1.9.14,3.65,0,6.82-1.56,9.23-2.75,1.62-.8,2.93-1.45,3.9-1.45.42,0,.77.12,1.07.39.96.9.31,2.61-.61,4.97-1.15,2.97-2.71,7.05-1.61,11.66.9,3.78,3.16,6.22,4.97,8.18,1.67,1.81,2.88,3.12,2.36,4.64-.62,1.81-3.13,2.33-5.78,2.87-2.82.58-5.73,1.18-6.6,3.45-.9,2.35.93,5.04,2.54,7.41,1.26,1.85,2.34,3.44,1.73,4.3-.22.31-.62.43-1.14.43-.78,0-1.82-.27-2.96-.56-1.53-.39-3.28-.84-5-.84-1.31,0-2.61.26-3.78,1.02-1.89,1.22-2.43,3.09-2.91,4.74-.46,1.57-.85,2.92-2.22,3.57-.41.19-.81.28-1.22.28-1.56,0-3.19-1.23-5.15-2.71-2.32-1.74-4.94-3.72-8.42-4.54-1.12-.26-2.23-.38-3.34-.38-6.43,0-12.59,3.99-16.88,6.76-2.41,1.56-4.41,2.85-5.53,2.85-.27,0-.49-.07-.65-.24-.58-.59.1-1.83,1.04-3.56,1.43-2.62,3.38-6.2,2.99-10.79-.36-4.23-2.53-6.87-4.45-9.19-1.84-2.23-3.42-4.16-2.96-6.94.48-2.92,2.88-4.54,5.2-6.11,2.39-1.62,4.86-3.29,5.2-6.37.37-3.37-2.06-6.26-3.83-8.38-1.26-1.5-2.25-2.68-1.8-3.38.17-.26.48-.37.9-.37.87,0,2.22.45,3.8.97,2.42.8,5.42,1.8,8.45,1.8h0Z" fill="#ede5d8"/>
                    </g>
                    <g>
                    <path d="M516.24,399.14c1.53,0,2.58,1.62,3.79,3.47,1.44,2.2,3.22,4.95,6.41,5.95,3.57,1.12,7.08-.42,9.89-1.65,2.12-.93,3.8-1.67,4.65-.74.81.89.07,2.37-.87,4.24-1.21,2.42-2.71,5.44-1.71,8.57.76,2.37,2.66,3.85,4.19,5.03,1.41,1.1,2.52,1.96,2.23,3.11-.28,1.11-1.6,1.43-3.14,1.8-1.68.41-3.59.87-4.47,2.49-.81,1.5-.3,3.11.2,4.67.46,1.46.9,2.84.05,3.86-.83.99-2.16.82-3.69.62-1.57-.21-3.36-.44-4.93.59-1.64,1.08-2,2.88-2.31,4.47-.29,1.46-.56,2.83-1.77,3.41-1.64.78-3.28-.63-5.36-2.41-2.2-1.88-4.93-4.23-8.57-4.63-4.4-.48-8.08,2.02-11.03,4.03-2.23,1.51-3.99,2.71-5.15,1.81-.95-.74-.61-2.2-.19-4.06.53-2.3,1.26-5.45-.14-8.76-.91-2.15-2.28-3.37-3.39-4.34-1.17-1.03-2.09-1.84-1.96-3.25.17-1.9,2.13-2.88,4.21-3.92,2.23-1.11,4.75-2.37,5.56-4.98.64-2.07-.08-4.05-.67-5.64-.53-1.44-.99-2.68-.19-3.48.82-.82,2.14-.31,3.67.28,1.66.64,3.73,1.44,5.8.77,2.79-.9,3.99-3.93,5.06-6.61.96-2.41,1.79-4.49,3.56-4.7.09-.01.18-.02.26-.02ZM529.01,409.3c-.88,0-1.78-.12-2.67-.4-3.31-1.04-5.14-3.84-6.61-6.1-1.26-1.94-2.26-3.47-3.72-3.3-1.56.18-2.36,2.18-3.28,4.48-1.09,2.75-2.33,5.86-5.28,6.81-2.19.71-4.32-.11-6.03-.77-1.47-.57-2.63-1.01-3.3-.35-.63.63-.23,1.72.28,3.1.6,1.64,1.35,3.68.67,5.86-.86,2.75-3.45,4.04-5.74,5.19-2.07,1.04-3.86,1.93-4.02,3.63-.11,1.23.71,1.95,1.84,2.95,1.13,1,2.54,2.24,3.48,4.47,1.44,3.41.7,6.63.16,8.97-.41,1.8-.71,3.1.06,3.7.96.74,2.62-.39,4.73-1.82,2.85-1.93,6.74-4.58,11.27-4.09,3.75.41,6.53,2.79,8.76,4.71,1.98,1.7,3.54,3.04,4.97,2.36,1.05-.5,1.3-1.73,1.58-3.16.33-1.65.7-3.53,2.47-4.69,1.68-1.11,3.54-.87,5.17-.65,1.43.19,2.67.35,3.38-.49.72-.87.33-2.1-.12-3.52-.49-1.55-1.05-3.32-.17-4.94l.16.08-.16-.08c.95-1.76,2.94-2.24,4.7-2.66,1.42-.34,2.65-.64,2.88-1.54.23-.92-.8-1.73-2.11-2.74-1.57-1.22-3.52-2.73-4.31-5.21-1.04-3.27.5-6.35,1.74-8.83.88-1.75,1.57-3.14.92-3.85-.68-.75-2.25-.05-4.25.82-2.06.91-4.7,2.07-7.47,2.07Z" fill="#fff"/>
                    <path d="M516.24,399.14c-.09,0-.17,0-.26.02-1.77.21-2.6,2.29-3.56,4.7-1.06,2.67-2.27,5.7-5.06,6.61-.55.18-1.11.25-1.66.25-1.49,0-2.93-.55-4.14-1.02-.96-.37-1.83-.7-2.55-.7-.43,0-.81.12-1.12.43-.79.79-.34,2.03.19,3.48.58,1.59,1.31,3.57.67,5.64-.81,2.6-3.33,3.86-5.56,4.98-2.08,1.04-4.04,2.02-4.21,3.92-.13,1.4.79,2.22,1.96,3.25,1.1.98,2.48,2.19,3.39,4.34,1.4,3.31.67,6.46.14,8.76-.43,1.86-.77,3.32.19,4.06.28.22.59.31.93.31,1.09,0,2.52-.97,4.21-2.12,2.71-1.84,6.02-4.09,9.94-4.09.36,0,.73.02,1.1.06,3.64.4,6.37,2.74,8.57,4.63,1.68,1.44,3.07,2.63,4.4,2.63.32,0,.64-.07.95-.22,1.21-.58,1.49-1.95,1.77-3.41.31-1.59.67-3.38,2.31-4.47.91-.6,1.89-.77,2.86-.77.71,0,1.41.09,2.07.18.61.08,1.19.16,1.72.16.8,0,1.48-.17,1.97-.77.85-1.02.41-2.4-.05-3.86-.5-1.56-1.01-3.17-.2-4.67.88-1.62,2.79-2.08,4.47-2.49,1.53-.37,2.86-.69,3.14-1.8.29-1.15-.82-2.01-2.23-3.11-1.53-1.19-3.43-2.67-4.19-5.03-1-3.13.51-6.14,1.71-8.57.94-1.88,1.68-3.36.87-4.24-.28-.31-.64-.43-1.08-.43-.91,0-2.14.54-3.57,1.17-2.13.94-4.65,2.04-7.29,2.04-.85,0-1.72-.12-2.6-.39-3.19-1-4.98-3.75-6.41-5.95-1.21-1.86-2.26-3.47-3.79-3.47h0ZM505.7,411.07c.58,0,1.17-.08,1.77-.27,2.94-.95,4.18-4.07,5.28-6.81.92-2.3,1.71-4.3,3.28-4.48.08,0,.15-.01.22-.01,1.34,0,2.3,1.47,3.49,3.31,1.47,2.25,3.29,5.05,6.61,6.1.89.28,1.79.4,2.67.4,2.77,0,5.41-1.16,7.47-2.07,1.4-.62,2.59-1.14,3.41-1.14.35,0,.63.09.83.32.64.71-.05,2.09-.92,3.85-1.24,2.48-2.78,5.57-1.74,8.83.79,2.47,2.74,3.99,4.31,5.21,1.31,1.02,2.34,1.82,2.11,2.74-.23.9-1.46,1.2-2.88,1.54-1.76.43-3.75.91-4.7,2.66l.16.08-.16-.08c-.88,1.63-.32,3.39.17,4.94.45,1.43.84,2.66.12,3.52-.41.5-1.01.64-1.72.64-.5,0-1.06-.07-1.66-.15-.68-.09-1.4-.19-2.13-.19-1.02,0-2.06.19-3.04.83-1.77,1.17-2.14,3.04-2.47,4.69-.28,1.43-.53,2.66-1.58,3.16-.26.12-.52.18-.79.18-1.22,0-2.56-1.15-4.18-2.54-2.24-1.92-5.02-4.3-8.76-4.71-.37-.04-.74-.06-1.11-.06-4.05,0-7.55,2.38-10.16,4.15-1.65,1.12-3.03,2.06-4.01,2.06-.27,0-.52-.07-.72-.23-.77-.6-.47-1.9-.06-3.7.54-2.35,1.28-5.56-.16-8.97-.94-2.23-2.35-3.47-3.48-4.47-1.13-1-1.95-1.72-1.84-2.95.15-1.7,1.94-2.6,4.02-3.63,2.29-1.14,4.88-2.44,5.74-5.19.68-2.18-.07-4.22-.67-5.86-.51-1.38-.91-2.47-.28-3.1.23-.23.53-.33.88-.33.64,0,1.46.32,2.41.68,1.25.48,2.72,1.05,4.27,1.05h0Z" fill="#ede5d8"/>
                    </g>
                    <g>
                    <path d="M516.49,407.01c.97,0,1.5,1.36,2.17,3.06.81,2.05,1.81,4.6,3.9,5.36,2.53.92,5.62-1.05,7.88-2.49,1.68-1.07,2.89-1.84,3.48-1.27.59.57-.11,1.89-.98,3.56-1.14,2.18-2.56,4.88-1.52,6.6.77,1.27,2.64,1.57,4.14,1.82,1.24.2,2.22.36,2.3,1.03.07.63-.72.98-1.81,1.48-1.4.64-3.33,1.51-4.08,3.33-.49,1.19-.28,2.29-.09,3.25.2,1.01.37,1.89-.31,2.59h0c-.69.72-1.65.58-2.66.43-1.04-.15-2.12-.31-3.16.32-1.22.73-1.5,2-1.78,3.23-.25,1.1-.48,2.14-1.4,2.56-1.22.56-2.4-.47-3.88-1.78-1.51-1.32-3.38-2.97-5.89-3.36-3.6-.56-6.94,1.69-9.38,3.33-1.79,1.21-3.08,2.08-3.82,1.42-.57-.51-.25-1.44.16-2.63.51-1.5,1.22-3.55.43-5.67-.58-1.56-1.69-2.41-2.59-3.1-.85-.65-1.58-1.22-1.49-2.13.13-1.31,1.75-1.88,3.64-2.54,1.98-.69,4.22-1.48,4.87-3.28.7-1.95-.72-4.21-1.85-6.02-.88-1.41-1.52-2.43-1-2.99.5-.54,1.48-.04,2.85.65,1.72.87,4.06,2.06,6.08,1.29,1.92-.74,2.7-2.9,3.39-4.81.59-1.65,1.11-3.07,2.25-3.24.05,0,.11-.01.16-.01ZM523.96,416.02c-.52,0-1.02-.08-1.51-.26-2.24-.81-3.28-3.45-4.11-5.57-.62-1.58-1.16-2.95-1.95-2.83-.93.14-1.41,1.47-1.97,3.01-.71,1.98-1.52,4.23-3.6,5.02-2.16.83-4.59-.41-6.36-1.31-1.13-.58-2.11-1.07-2.43-.73-.34.37.33,1.43,1.04,2.56,1.18,1.88,2.64,4.22,1.89,6.33-.7,1.97-3.03,2.78-5.08,3.5-1.77.62-3.3,1.15-3.41,2.24-.07.72.53,1.18,1.36,1.82.93.72,2.08,1.61,2.7,3.26.84,2.24.11,4.36-.42,5.91-.36,1.06-.65,1.9-.26,2.25.53.48,1.79-.37,3.39-1.45,2.49-1.67,5.89-3.97,9.63-3.39,2.61.41,4.53,2.09,6.07,3.45,1.39,1.22,2.48,2.19,3.5,1.72.77-.35.97-1.26,1.21-2.32.28-1.24.59-2.65,1.94-3.46,1.15-.7,2.34-.52,3.4-.37.96.14,1.79.26,2.35-.32l.13.12-.13-.12c.55-.57.4-1.32.21-2.27-.2-1.02-.42-2.17.11-3.45.8-1.95,2.8-2.86,4.26-3.52.89-.4,1.65-.75,1.61-1.12-.05-.4-1-.55-2.01-.72-1.57-.26-3.53-.58-4.39-1.99-1.15-1.88.33-4.69,1.51-6.94.74-1.42,1.45-2.76,1.05-3.14-.39-.37-1.68.45-3.05,1.31-1.9,1.21-4.37,2.78-6.68,2.78Z" fill="#fff"/>
                    <path d="M516.49,407.01c-.05,0-.1,0-.16.01-1.14.17-1.66,1.59-2.25,3.24-.69,1.91-1.47,4.08-3.39,4.81-.45.17-.93.25-1.4.25-1.64,0-3.34-.87-4.67-1.54-.96-.49-1.74-.88-2.28-.88-.23,0-.42.07-.57.23-.52.56.12,1.58,1,2.99,1.14,1.81,2.55,4.07,1.85,6.02-.65,1.81-2.89,2.59-4.87,3.28-1.89.66-3.51,1.23-3.64,2.54-.09.91.64,1.48,1.49,2.13.89.69,2,1.55,2.59,3.1.79,2.12.09,4.17-.43,5.67-.41,1.18-.73,2.12-.16,2.63.18.16.38.23.62.23.76,0,1.84-.72,3.2-1.64,2.18-1.47,5.08-3.42,8.23-3.42.38,0,.76.03,1.14.09,2.51.39,4.39,2.04,5.89,3.36,1.2,1.06,2.2,1.93,3.18,1.93.23,0,.46-.05.7-.16.93-.43,1.16-1.46,1.4-2.56.27-1.23.56-2.5,1.78-3.23.58-.35,1.17-.46,1.76-.46.47,0,.94.07,1.4.14.41.06.82.12,1.2.12.55,0,1.05-.12,1.46-.55.67-.7.5-1.57.31-2.59-.19-.97-.4-2.06.09-3.25.75-1.82,2.67-2.69,4.08-3.33,1.1-.5,1.89-.86,1.81-1.48-.08-.66-1.06-.82-2.3-1.03-1.5-.25-3.37-.55-4.14-1.82-1.04-1.71.38-4.42,1.52-6.6.88-1.67,1.57-3,.98-3.56-.14-.13-.31-.19-.51-.19-.67,0-1.68.64-2.97,1.46-1.86,1.18-4.28,2.72-6.49,2.72-.48,0-.94-.07-1.39-.24-2.09-.76-3.1-3.31-3.9-5.36-.67-1.7-1.2-3.06-2.17-3.06h0ZM509.28,415.68c.52,0,1.03-.08,1.53-.27,2.07-.79,2.88-3.04,3.6-5.02.56-1.54,1.04-2.87,1.97-3.01.03,0,.06,0,.1,0,.74,0,1.26,1.32,1.85,2.84.83,2.12,1.87,4.75,4.11,5.57.49.18,1,.26,1.51.26,2.31,0,4.78-1.57,6.68-2.78,1.13-.72,2.21-1.41,2.77-1.41.11,0,.21.03.27.09.4.38-.31,1.72-1.05,3.14-1.18,2.26-2.65,5.06-1.51,6.94.86,1.41,2.81,1.73,4.39,1.99,1.01.17,1.96.32,2.01.72.04.37-.72.72-1.61,1.12-1.46.66-3.45,1.57-4.26,3.52-.53,1.29-.31,2.44-.11,3.45.18.95.33,1.71-.21,2.27l.13.12-.13-.12c-.32.34-.74.44-1.21.44-.35,0-.73-.06-1.14-.11-.46-.07-.95-.14-1.45-.14-.64,0-1.3.12-1.95.51-1.35.81-1.66,2.22-1.94,3.46-.24,1.05-.44,1.96-1.21,2.32-.18.08-.36.12-.54.12-.87,0-1.81-.83-2.96-1.84-1.54-1.35-3.46-3.04-6.07-3.45-.4-.06-.8-.09-1.2-.09-3.26,0-6.21,1.99-8.43,3.48-1.28.86-2.35,1.58-2.99,1.58-.16,0-.29-.04-.4-.14-.39-.35-.11-1.19.26-2.25.53-1.55,1.26-3.67.42-5.91-.62-1.65-1.77-2.54-2.7-3.26-.83-.64-1.43-1.1-1.36-1.82.1-1.09,1.63-1.62,3.41-2.24,2.05-.72,4.38-1.53,5.08-3.5.76-2.11-.71-4.45-1.89-6.33-.71-1.13-1.38-2.2-1.04-2.56.07-.08.18-.11.31-.11.46,0,1.24.4,2.12.84,1.36.69,3.11,1.58,4.83,1.58h0Z" fill="#ede5d8"/>
                    </g>
                    <path d="M516.32,415.8c.7,0,1.1.91,1.61,2.06.57,1.31,1.29,2.93,2.64,3.33,1.65.48,3.62-.98,4.8-1.86.74-.55,1.05-.78,1.25-.55.21.24-.12.61-.93,1.49-1.04,1.14-2.62,2.86-2.21,3.78.34.76,2.03.87,3.27.96,1.11.08,1.78.12,1.83.53.04.33-.36.48-.97.71-.75.28-1.78.66-2.06,1.47-.25.71.17,1.47.55,2.14.35.63.65,1.17.35,1.59-.31.43-.94.27-1.67.09-.81-.2-1.81-.44-2.61.03-.71.42-.91,1.16-1.1,1.88-.18.67-.35,1.31-.96,1.52h0c-.74.26-1.35-.4-2.07-1.15-.73-.77-1.64-1.74-2.97-2.09-1.96-.52-4,.53-5.48,1.3-1.18.61-2.03,1.05-2.48.56-.32-.35-.13-.86.09-1.44.26-.68.55-1.45.21-2.21-.39-.9-1.41-1.27-2.23-1.57-.64-.23-1.14-.42-1.13-.82.01-.5.79-.67,1.87-.89,1.33-.28,3.16-.66,3.7-1.83.5-1.07-.21-2.48-.78-3.61-.46-.92-.83-1.64-.43-2.01.36-.33.93,0,1.65.4.87.49,1.95,1.1,2.95.78,1.07-.35,1.53-1.61,1.95-2.72.36-.97.67-1.81,1.34-1.85.02,0,.04,0,.05,0ZM521.24,421.64c-.27,0-.53-.03-.79-.11-1.51-.44-2.26-2.15-2.86-3.52-.44-1.01-.83-1.87-1.31-1.84-.44.03-.71.77-1.03,1.62-.42,1.13-.94,2.53-2.17,2.94-1.14.38-2.3-.28-3.23-.8-.52-.3-1.07-.6-1.23-.45-.2.18.16.9.51,1.59.6,1.2,1.35,2.69.78,3.92-.62,1.32-2.54,1.73-3.95,2.02-.71.15-1.59.33-1.59.56,0,.15.48.33.9.48.84.3,1.98.72,2.43,1.76.39.9.06,1.78-.2,2.48-.18.48-.34.89-.16,1.08.27.29,1.1-.14,2.06-.64,1.53-.79,3.64-1.88,5.73-1.33,1.43.37,2.38,1.38,3.14,2.19.65.69,1.17,1.24,1.69,1.06h0c.43-.15.57-.67.73-1.28.2-.75.43-1.6,1.26-2.09.93-.55,2.01-.28,2.88-.07.61.15,1.13.28,1.3.04.17-.23-.09-.7-.37-1.2-.39-.7-.88-1.57-.57-2.43.34-.96,1.45-1.38,2.27-1.69.29-.11.7-.26.74-.35-.09-.1-.91-.16-1.5-.2-1.4-.09-3.14-.21-3.57-1.17-.5-1.14,1.1-2.89,2.27-4.17.26-.29.55-.6.73-.83-.17.11-.38.27-.57.41-1.06.79-2.73,2.03-4.33,2.03Z"/>
                    <path d="M516.06,421.41c.27,0,.35.36.48.96.15.73.39,1.83,1.02,2.09.65.27,1.62-.38,2.26-.81.49-.33.74-.5.91-.3.16.18-.02.4-.32.77-.3.37-.76.94-.63,1.26.14.33.92.42,1.44.48.53.06.85.09.87.35.02.25-.29.35-.76.5-.29.09-.89.28-.91.44-.02.19.71.55,1.02.71.48.24.73.36.66.58-.06.21-.29.17-.63.1-.5-.1-1.34-.26-2,.13-.34.2-.49.46-.63.7-.14.25-.29.51-.64.58-.52.1-.88-.34-1.26-.81-.35-.44-.75-.94-1.35-1.08-1.04-.25-2.22.65-3.01,1.25-.55.42-.83.63-1.02.43-.16-.17-.02-.41.19-.75.22-.36.53-.86.37-1.16-.12-.23-.49-.3-.79-.36-.3-.06-.59-.11-.62-.36-.04-.29.29-.42.76-.59.54-.2,1.27-.48,1.51-1.03.28-.65-.2-1.52-.52-2.1-.24-.43-.38-.69-.18-.85.21-.16.45.07.93.52.5.48,1.26,1.2,1.72,1.05.42-.15.57-1.08.66-1.7.1-.62.15-.99.44-1,0,0,0,0,.01,0ZM517.89,424.87c-.16,0-.32-.03-.47-.09-.81-.33-1.05-1.49-1.23-2.34-.04-.18-.08-.4-.13-.54-.04.15-.07.38-.1.57-.12.79-.28,1.76-.9,1.98-.66.23-1.48-.55-2.08-1.13-.09-.09-.2-.19-.29-.27.03.06.06.11.09.17.35.64.88,1.6.53,2.41-.3.69-1.11,1-1.71,1.22-.16.06-.38.14-.48.2.08.02.2.05.29.07.35.07.84.16,1.03.54.24.48-.12,1.07-.39,1.51-.03.05-.07.11-.1.17.12-.09.28-.21.42-.31.84-.64,2.1-1.61,3.3-1.32.71.17,1.17.75,1.54,1.21.37.46.61.74.91.68h0c.18-.03.26-.16.4-.41.15-.26.33-.58.75-.83.64-.38,1.37-.33,1.92-.24-.57-.28-1.17-.6-1.14-1.02.04-.39.6-.57,1.15-.75.11-.03.24-.08.34-.11-.12-.02-.27-.03-.39-.05-.67-.07-1.51-.16-1.73-.69-.21-.52.31-1.15.69-1.62.02-.02.03-.04.05-.06-.06.04-.11.08-.17.11-.57.39-1.39.93-2.12.93Z"/>
                    <g filter="url(#drop-shadow-9)">
                    <circle cx="535.11" cy="441.46" r="11.97" transform="translate(-7.79 873.31) rotate(-78.02)" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M535.1,429.13c1.29,0,2.58.2,3.85.62,3.13,1.02,5.67,3.21,7.16,6.14,1.49,2.94,1.75,6.28.72,9.41-1.02,3.13-3.21,5.67-6.14,7.16-2.94,1.49-6.28,1.75-9.41.72-6.46-2.11-10-9.09-7.88-15.55,1.02-3.13,3.21-5.67,6.14-7.16,1.75-.89,3.65-1.34,5.56-1.34ZM535.12,453.09c1.8,0,3.59-.42,5.24-1.26,2.77-1.4,4.82-3.8,5.79-6.75.97-2.95.72-6.1-.68-8.87-1.4-2.77-3.8-4.82-6.75-5.79h0c-6.09-1.99-12.67,1.34-14.66,7.43-1.99,6.09,1.34,12.67,7.43,14.66,1.19.39,2.41.58,3.63.58Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g filter="url(#drop-shadow-10)">
                    <circle cx="519.08" cy="423.62" r="16.38" transform="translate(52.33 904.29) rotate(-85.06)" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M519.07,406.88c1.75,0,3.51.28,5.22.84,8.77,2.87,13.57,12.34,10.7,21.11-1.39,4.25-4.35,7.7-8.34,9.72-3.99,2.02-8.52,2.37-12.77.98-4.25-1.39-7.7-4.35-9.72-8.34-2.02-3.99-2.37-8.52-.98-12.77,1.39-4.25,4.35-7.7,8.34-9.72,2.38-1.21,4.96-1.82,7.55-1.82ZM519.1,439.65c2.48,0,4.95-.58,7.23-1.74,3.82-1.94,6.65-5.24,7.98-9.31,2.75-8.4-1.85-17.47-10.25-20.21-4.07-1.33-8.41-1-12.23.94-3.82,1.94-6.65,5.24-7.98,9.31-2.75,8.4,1.85,17.47,10.25,20.21,1.64.54,3.32.8,5,.8Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M519.4,418c-1.7-.56-3.52.37-4.08,2.07-.56,1.7.37,3.52,2.07,4.08,1.7.56,3.52-.37,4.08-2.07.56-1.7-.37-3.52-2.07-4.08Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M518.39,417.66c.36,0,.72.06,1.06.17h0c.87.28,1.57.89,1.98,1.7.41.81.48,1.74.2,2.6-.28.87-.89,1.57-1.7,1.98-.81.41-1.74.48-2.6.2-1.79-.59-2.77-2.52-2.18-4.3.28-.87.89-1.57,1.7-1.98.49-.25,1.01-.37,1.54-.37ZM518.4,424.13c.47,0,.94-.11,1.38-.33.73-.37,1.27-1,1.52-1.78.25-.78.19-1.6-.18-2.33-.37-.73-1-1.27-1.78-1.52h0c-.78-.25-1.6-.19-2.33.18-.73.37-1.27,1-1.52,1.78-.52,1.6.35,3.33,1.96,3.86.31.1.63.15.95.15Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M514.52,420.63h1.9c.22,0,.39.18.39.39v.11c0,.22-.18.39-.39.39h-1.9v-.89h0Z" transform="translate(1031.34 842.15) rotate(180)" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M514.97,420.45h2.02v1.25h-2.02c-.34,0-.62-.28-.62-.62s.28-.62.62-.62ZM516.64,420.81h-1.67c-.15,0-.27.12-.27.27s.12.27.27.27h1.67v-.54Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M519.1,418.92c-1.19-.39-2.47.26-2.86,1.45-.39,1.19.26,2.47,1.45,2.86s2.47-.26,2.86-1.45c.39-1.19-.26-2.47-1.45-2.86Z" fill="#fff" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M518.39,418.63c.26,0,.51.04.76.12.62.2,1.13.64,1.42,1.22.3.58.35,1.25.14,1.87-.2.62-.64,1.13-1.22,1.42-.58.3-1.25.35-1.87.14-.62-.2-1.13-.64-1.42-1.22-.3-.58-.35-1.25-.14-1.87.2-.62.64-1.13,1.22-1.42.35-.18.73-.27,1.1-.27ZM518.4,423.17c.32,0,.65-.08.94-.23.5-.25.87-.68,1.04-1.22.36-1.1-.24-2.28-1.34-2.64-1.1-.36-2.28.24-2.64,1.34-.36,1.1.24,2.28,1.34,2.64.21.07.43.1.65.1Z" fill="#fff" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <g>
                        <rect x="532.73" y="438.36" width="6.25" height="6.25" rx="2.74" ry="2.74" transform="translate(-50.36 813.5) rotate(-71.88)" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M535.03,437.84c.21,0,.42.03.63.1l2.43.79c1.06.35,1.64,1.49,1.29,2.55l-.79,2.43c-.17.51-.53.93-1.01,1.17-.48.24-1.03.29-1.54.12l-2.43-.79c-1.06-.35-1.64-1.49-1.29-2.55l.79-2.43c.17-.51.53-.93,1.01-1.17.29-.15.6-.22.91-.22ZM539.05,441.18c.29-.87-.19-1.82-1.07-2.1l-2.43-.79c-.42-.14-.88-.1-1.27.1-.4.2-.69.55-.83.97l-.79,2.43c-.29.87.19,1.82,1.07,2.1l2.43.79c.42.14.88.1,1.27-.1.4-.2.69-.55.83-.97l.79-2.43Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M535.02,441.91c-.4.32.95,1.68.61,3.89-.13.83-.37.98-.25,1.48.26,1.04,1.47,1.11,2.98,2.28,1.69,1.31,2.01,2.63,2.35,2.49.47-.19.52-2.92-.93-4.29-.55-.51-1.32-.85-1.53-1.73-.11-.44.01-.66.01-1.03,0-1.76-2.74-3.49-3.24-3.09Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M535.23,441.67c.24,0,.52.1.75.21,1.02.49,2.46,1.78,2.46,3.11,0,.14-.02.26-.03.37-.03.19-.05.36.01.61.14.59.56.91,1,1.25.16.12.33.25.48.4,1.15,1.08,1.41,2.96,1.23,3.95-.06.35-.18.56-.35.63-.28.11-.47-.16-.75-.57-.33-.48-.83-1.21-1.78-1.94-.58-.45-1.1-.73-1.57-.97-.73-.39-1.3-.69-1.48-1.4-.08-.34-.02-.56.07-.83.06-.18.13-.39.18-.72.2-1.29-.2-2.29-.46-2.94-.2-.49-.34-.85-.08-1.06h0c.09-.07.2-.1.32-.1ZM540.67,451.88s.09-.15.14-.53c.1-.86-.12-2.5-1.15-3.46-.14-.13-.29-.25-.45-.37-.45-.35-.96-.74-1.13-1.45-.08-.32-.05-.53-.02-.74.01-.1.03-.2.03-.33,0-1.17-1.35-2.36-2.26-2.79-.46-.22-.66-.19-.69-.16h0c-.05.04.1.42.19.65.28.7.7,1.75.48,3.13-.05.35-.13.58-.19.77-.08.25-.12.39-.06.63.14.56.6.8,1.3,1.18.45.24,1.02.54,1.62,1.01.99.76,1.51,1.52,1.85,2.02.13.2.29.42.35.44Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M534.7,441.45c-.17.08-.54.26-1.05.27-.63,0-.94-.25-1.34-.37-1.36-.4-2.75,1.06-2.86.91-.11-.14,1.02-1.55,2.79-2.17.22-.08,1.1-.37,2.19-.23.38.05,1.26.16,1.34.55.08.4-.72.88-1.06,1.05Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M533.83,439.64c.19,0,.4.01.61.04.72.09,1.4.24,1.49.69.12.59-.94,1.14-1.16,1.25-.16.08-.57.28-1.13.29-.47,0-.78-.13-1.06-.25-.11-.05-.22-.1-.34-.13-.88-.26-1.81.36-2.31.69-.32.21-.51.34-.64.16-.03-.04-.06-.11-.03-.22.12-.4,1.25-1.64,2.9-2.22.33-.11.92-.28,1.66-.28ZM533.61,441.54s.02,0,.03,0c.48,0,.84-.18.98-.25h0c.5-.25,1.01-.65.97-.86-.03-.12-.25-.29-1.19-.41-.95-.12-1.73.09-2.11.22-1.09.38-1.91,1.06-2.34,1.52.58-.37,1.49-.87,2.41-.6.14.04.26.09.38.15.26.11.5.22.88.22Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M534.39,441.37c-.75.42-1.17,1.02-1.4,1.39-.69,1.06-1.05,1.61-1.54,2.74-.39.93-1.14,2.68-.85,2.84.15.09,1.01-.92,2.7-2.94.46-.55,1.16-1.39,1.7-2.66.19-.44.57-1.36.29-1.59-.2-.16-.67.09-.9.22Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M535.11,440.92c.11,0,.2.03.29.09.33.26.14.91-.24,1.8-.56,1.32-1.29,2.19-1.73,2.71-2.44,2.92-2.66,3.14-2.93,2.98-.33-.19-.15-.88.78-3.06.49-1.15.84-1.69,1.55-2.77.21-.32.65-.99,1.47-1.44h0c.22-.12.54-.3.81-.3ZM530.71,448.1c.36-.31,1.3-1.43,2.46-2.81.42-.5,1.13-1.35,1.67-2.62.49-1.14.38-1.35.34-1.38-.04-.03-.19-.05-.7.24l-.09-.15.09.16c-.74.41-1.13,1.01-1.34,1.33-.7,1.06-1.04,1.59-1.52,2.72-.23.53-.86,2.03-.9,2.53Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M539.13,434.75c.5-1.07.78-1.35,1.1-2.38.32-1.02.55-2.31.32-2.39-.2-.07-.6.81-1.48,2.2-1.47,2.34-1.87,2.32-2.67,3.77-1.03,1.87-1.73,4.35-1.21,4.66.44.26,1.86-.94,2.67-2.31.72-1.22.35-1.56,1.27-3.55Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M540.53,429.79s.06,0,.09.02c.55.2-.18,2.51-.21,2.61-.21.67-.4,1.02-.64,1.47-.14.25-.29.54-.47.93-.46.99-.59,1.56-.7,2.05-.11.48-.2.89-.57,1.51-.66,1.13-1.8,2.23-2.48,2.41-.17.04-.31.03-.43-.04-.72-.43.2-3.19,1.14-4.9.4-.72.69-1.08,1.06-1.53.38-.47.86-1.05,1.61-2.25.28-.45.52-.84.71-1.17.47-.79.66-1.12.89-1.12ZM535.35,440.46s.06,0,.1-.01c.53-.13,1.59-1.09,2.27-2.25.34-.58.43-.95.53-1.41.11-.49.25-1.09.73-2.12h0c.19-.4.34-.69.48-.95.23-.43.42-.78.62-1.41.28-.89.42-1.74.41-2.07-.13.17-.33.5-.53.85-.19.33-.43.73-.71,1.18-.77,1.22-1.25,1.81-1.64,2.28-.36.44-.65.79-1.03,1.48-1.11,2.01-1.6,4.22-1.27,4.42.01,0,.03.01.06.01Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M535.23,441.17c-.31.13-.77-.12-.99-.45-.22-.32-.13-.62-.16-.94-.09-1-1.18-1.16-2.29-2.58-.18-.23-.7-.93-1.05-1.94-.34-.98-.18-1.29-.41-2.45-.37-1.85-1.1-2.69-.9-2.85.28-.21,1.83,1.16,3.03,2.69.98,1.26.6,1.19,2.61,5.03.11.2.57,1.08.56,2.23,0,.4,0,1.08-.39,1.25Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M529.48,429.77c.72,0,2.48,1.97,3.11,2.78.55.7.68,1.01,1.01,1.75.28.62.69,1.56,1.61,3.31.49.93.58,1.77.58,2.31,0,.45-.01,1.2-.5,1.41h0c-.4.17-.95-.13-1.21-.52-.19-.28-.19-.55-.19-.78,0-.08,0-.16,0-.24-.05-.5-.38-.76-.88-1.16-.39-.31-.88-.7-1.37-1.33-.26-.33-.75-1.04-1.08-1.99-.2-.59-.23-.94-.27-1.36-.02-.3-.05-.63-.15-1.11-.21-1.02-.52-1.72-.73-2.19-.2-.44-.31-.68-.1-.84.05-.04.1-.05.17-.05ZM535.16,441.01c.28-.12.28-.77.28-1.09,0-.5-.09-1.28-.54-2.14-.92-1.77-1.34-2.71-1.62-3.33-.33-.73-.45-1.01-.97-1.68-1.13-1.45-2.34-2.47-2.73-2.63.03.1.1.24.16.38.21.48.54,1.2.75,2.26.1.5.13.85.16,1.15.03.41.06.73.25,1.28.31.9.77,1.57,1.02,1.88.46.59.94.97,1.31,1.27.53.42.95.76,1.01,1.4,0,.09,0,.19,0,.28,0,.22,0,.39.13.58.19.28.57.47.78.39h0Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M536.81,443.18c.3.14.77.29,1.72.24,1.47-.08,2.04-.54,3.7-1.02,1.81-.52,2.86-.47,2.86-.66,0-.24-1.75-.02-4.2-.76-1.6-.48-2.1-.95-3.27-.84-.77.08-2.12.43-2.27,1.23-.13.72.78,1.48,1.47,1.8Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M537.95,439.95c.64,0,1.1.18,1.71.42.35.14.75.29,1.27.44,1.46.44,2.67.54,3.4.6.66.05.93.08.93.33,0,.24-.23.28-.81.37-.49.08-1.23.19-2.18.47-.57.17-1.02.33-1.42.47-.75.28-1.34.49-2.32.55-.99.06-1.48-.11-1.8-.25h0c-.69-.32-1.73-1.14-1.57-2,.16-.91,1.6-1.3,2.42-1.38.13-.01.25-.02.36-.02ZM544.34,441.77s-.02,0-.04,0c-.74-.06-1.98-.16-3.47-.61-.53-.16-.93-.32-1.29-.45-.7-.27-1.17-.45-1.92-.38-.78.08-1.99.43-2.11,1.09-.11.62.75,1.33,1.37,1.61.28.13.72.27,1.63.22.93-.05,1.5-.26,2.22-.53.4-.15.85-.31,1.44-.48.93-.27,1.66-.39,2.16-.46Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M535.41,441.32c.41.36,1.39-.15,1.83-.38,1.01-.52,1.64-1.16,1.71-1.23,1.19-1.22,1.7-2.15,2.57-3.37,1.63-2.31,2.84-3.32,2.63-3.56-.15-.17-.83.19-1.57.57-.74.39-1.67.88-2.8,1.91-1.8,1.65-1.3,2.11-2.71,3.05-.31.21-1.07.68-1.57,1.49-.22.36-.37.76-.27,1.16.03.12.07.26.18.36Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M544.03,432.55c.11,0,.19.03.26.11.21.25-.05.55-.74,1.37-.48.57-1.13,1.35-1.88,2.41-.21.29-.39.56-.57.83-.59.87-1.1,1.62-2.01,2.56-.12.12-.75.75-1.75,1.27-.5.26-1.53.79-2.03.35h0c-.16-.14-.2-.32-.24-.45-.1-.39,0-.82.29-1.3.49-.79,1.21-1.27,1.56-1.51l.06-.04c.68-.46.89-.78,1.17-1.23.27-.44.61-.98,1.52-1.81,1.16-1.06,2.13-1.57,2.83-1.94.76-.4,1.24-.64,1.53-.64ZM535.8,441.27c.43,0,1.1-.35,1.36-.48.95-.49,1.55-1.09,1.66-1.2.89-.92,1.39-1.66,1.97-2.51.18-.27.37-.54.58-.84.76-1.07,1.42-1.86,1.9-2.43.33-.39.64-.76.71-.92-.19.02-.87.38-1.32.61-.69.36-1.63.85-2.76,1.88-.87.8-1.18,1.29-1.46,1.73-.28.45-.52.83-1.27,1.33l-.07.04c-.33.22-1.01.67-1.46,1.4-.25.4-.33.73-.25,1.02.03.11.05.2.13.27.07.06.16.08.27.08Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    </g>
                    <g filter="url(#drop-shadow-11)">
                    <g>
                        <path d="M581.69,452.07c.44,0,27.58,1.02,27.58,1.02l-4.67,43.92-39.25,6.57-54.28-3.21,1.02-22.54s58.66-3.43,59.1-3.43,10.51-22.32,10.51-22.32Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M581.46,451.72h.23c.44,0,26.48.98,27.59,1.02h.38s-4.74,44.58-4.74,44.58l-39.56,6.62h-.04s-54.63-3.23-54.63-3.23l1.05-23.21.32-.02c2.33-.14,55.59-3.25,58.95-3.42.85-1.28,6.59-13.8,10.35-22.12l.09-.21ZM608.88,453.43c-8.92-.34-24.86-.93-26.96-1-.49,1.08-2.73,6.04-4.99,10.95-5.24,11.37-5.41,11.37-5.74,11.37-.66.01-54.1,3.14-58.76,3.41l-.99,21.88,53.89,3.19,38.95-6.52,4.6-43.28ZM571.17,474.04s.02,0,.02,0c0,0-.01,0-.02,0Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M515.45,514.98h64.34c21.84,0,39.55-17.71,39.55-39.55v-15.11h-20.14v10.41c0,13.32-10.8,24.12-24.12,24.12h-59.63v20.14Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M598.85,459.96h20.84v15.46c0,10.66-4.15,20.68-11.69,28.22-7.54,7.54-17.56,11.69-28.22,11.69h-64.69v-20.84h59.99c13.11,0,23.77-10.66,23.77-23.77v-10.76ZM618.99,460.67h-19.43v10.05c0,13.5-10.98,24.48-24.48,24.48h-59.28v19.43h63.99c10.47,0,20.31-4.08,27.72-11.48,7.4-7.4,11.48-17.25,11.48-27.72v-14.76Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <polygon points="588.41 393.23 599.74 385.48 599.2 460.31 588.41 460.32 588.41 393.23" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M600.1,384.81l-.54,75.86h-11.5s0-67.63,0-67.63l12.05-8.24ZM598.85,459.96l.53-73.81-10.62,7.26v66.54h10.09Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <polygon points="515.45 494.84 515.45 484.04 455.4 484.04 447.75 495.87 515.45 494.84" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M455.21,483.69h60.59v11.5s-68.72,1.04-68.72,1.04l8.12-12.54ZM515.1,484.4h-59.5l-7.19,11.1,66.69-1.01v-10.09Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M588.41,460.32h-26.08c-1.27,0-2.3-1.03-2.3-2.3v-28.68c0-4.14-.56-8.26-1.66-12.24h0c-3.05-10.99,4.72-22.02,16.1-22.85l13.95-1.02v67.08Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M588.76,392.85v67.82h-26.44c-1.46,0-2.65-1.19-2.65-2.65v-28.68c0-4.11-.56-8.19-1.65-12.15-1.48-5.34-.5-11,2.69-15.53,3.19-4.53,8.19-7.36,13.72-7.76l14.33-1.05ZM588.05,459.96v-66.35l-13.57.99c-5.31.39-10.12,3.11-13.19,7.47-3.07,4.36-4.01,9.8-2.59,14.94,1.11,4.02,1.68,8.17,1.68,12.34v28.68c0,1.07.87,1.94,1.94,1.94h25.73Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M588.41,460.32h-70.31c-1.46,0-2.64,1.18-2.64,2.64v21.09h54.49c10.2,0,18.47-8.27,18.47-18.47v-5.26Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M518.09,459.96h70.67v5.62c0,10.38-8.44,18.82-18.82,18.82h-54.84v-21.44c0-1.65,1.35-3,3-3ZM588.05,460.67h-69.96c-1.26,0-2.29,1.03-2.29,2.29v20.73h54.14c9.99,0,18.11-8.13,18.11-18.11v-4.91Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M515.45,484.05v-20.9c0-1.56-1.27-2.83-2.83-2.83h-16.67c-4.33,0-8.64-.55-12.82-1.62l-11.11-2.86c-8.42-2.17-16.61,4.19-16.61,12.88v15.33h60.04Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M468.67,455.05c1.14,0,2.29.14,3.43.44l11.11,2.86c4.16,1.07,8.44,1.61,12.74,1.61h16.67c1.75,0,3.18,1.43,3.18,3.18v21.26h-60.75v-15.68c0-4.25,1.93-8.19,5.29-10.79,2.43-1.88,5.35-2.87,8.33-2.87ZM515.09,483.69v-20.55c0-1.36-1.11-2.47-2.47-2.47h-16.67c-4.35,0-8.7-.55-12.91-1.63l-11.11-2.86c-3.9-1-7.97-.16-11.16,2.31-3.19,2.47-5.01,6.2-5.01,10.23v14.98h59.34Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M471.14,470.67h20.14v53.5c0,8.26-6.71,14.97-14.97,14.97h-2.44c-1.51,0-2.73-1.22-2.73-2.73v-65.74h0Z" transform="translate(986.12 23.7) rotate(90)" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M450.09,494.49h65.71v20.84h-51.8c-9.58,0-17.38-7.8-17.38-17.38,0-1.91,1.55-3.46,3.46-3.46ZM515.09,495.2h-65.01c-1.52,0-2.76,1.24-2.76,2.76,0,9.19,7.48,16.67,16.67,16.67h51.09v-19.43Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M601.94,384.12h2.44c8.26,0,14.97,6.71,14.97,14.97v61.23h-20.14v-73.46c0-1.51,1.22-2.73,2.73-2.73Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M602.29,383.76h.13c9.52,0,17.27,7.75,17.27,17.27v59.64h-20.84v-73.46c0-1.9,1.54-3.44,3.44-3.44ZM618.99,459.96v-58.93c0-9.13-7.43-16.56-16.56-16.56h-.13c-1.51,0-2.74,1.23-2.74,2.74v72.75h19.43Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M474.75,495.63c.72.24,1.47.45,2.22.6,1.21.25,2.23.5,3.05.72,1.5.4,1.89.6,2.33.95,1.04.84,1.21,1.82,1.62,1.68.29-.1.42-.65.59-1.47.15-.77.43-1.52.82-2.2.54-.93,1.37-2.43,2.14-4.07,1.31-2.8,1.17-3.05,1.66-4.97.45-1.78.06-2.77.93-4.09.63-.95,1.35-1.22,1.32-1.74-.03-.59-1-.82-1.83-1-1.55-.35-1.6-.19-2.65-.45-.28-.07-.5-.15-.71-.23-1.56-.65-2.81-1.51-2.81-1.51-2.44-1.76-11.41-5.44-14.39-5.9,0,0-1.51-.23-3.06-.9-.35-.15-.67-.33-.67-.33-.06-.03-.25-.14-.52-.33-.35-.24-.51-.39-.76-.58,0,0-.42-.33-.93-.63-.73-.43-1.58-.93-2.01-.57-.38.33,0,.98-.28,2.17-.24,1.01-.66,1.15-2.21,3.57-.52.81-.82,1.28-1.18,1.98-.12.24-.57,1.13-1.12,2.73-.86,2.48-.6,2.7-1.34,4.4-.81,1.86-.95,2.14-.95,2.14-.47.91-.71,1.23-.62,1.46.17.41,1.12-.13,2.33-.06.74.04,1.21.3,2.33.95,1.96,1.16,2.94,1.74,3.52,2.18,1.35,1.03,4.76,2.69,13.15,5.49Z" fill="#f2f0ed" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M461.48,468.13c.55,0,1.21.39,1.82.75.52.31.95.64.97.65.08.06.15.11.21.17.15.12.29.24.53.4.12.08.31.21.49.32h0c.05.03.33.19.63.32,1.49.64,2.96.87,2.97.87,3.06.47,12.02,4.14,14.54,5.96.06.04,1.25.85,2.74,1.47.2.08.41.15.66.21.48.12.73.15,1.05.18.36.04.77.08,1.59.27.87.19,2.06.46,2.11,1.33.02.45-.27.74-.61,1.07-.24.23-.51.49-.77.88-.48.73-.54,1.36-.6,2.15-.04.52-.09,1.12-.28,1.83-.11.42-.19.77-.26,1.07-.25,1.09-.4,1.75-1.43,3.96-.76,1.64-1.59,3.14-2.15,4.1-.37.65-.64,1.35-.78,2.09-.19.97-.34,1.58-.82,1.74-.47.16-.74-.24-1-.63-.22-.33-.49-.73-.96-1.11-.38-.3-.72-.49-2.2-.89-.98-.26-2-.5-3.03-.72-.74-.15-1.5-.36-2.26-.61-7.17-2.39-11.5-4.21-13.26-5.54-.57-.43-1.54-1.01-3.49-2.16-1.1-.65-1.51-.87-2.17-.9-.51-.03-.97.06-1.35.13-.53.1-1.09.2-1.29-.29-.14-.33.03-.63.32-1.18.09-.16.19-.35.3-.58,0-.01.17-.34.94-2.12.38-.86.48-1.31.62-1.93.13-.55.29-1.24.7-2.44.37-1.08.78-2.06,1.14-2.77.37-.73.7-1.24,1.2-2.01.61-.95,1.05-1.56,1.37-2,.48-.67.67-.92.79-1.46.12-.52.1-.93.09-1.26-.02-.42-.03-.81.3-1.1.18-.15.38-.21.6-.21ZM468.99,472.3c-.3-.04-1.73-.31-3.14-.92-.33-.14-.64-.32-.7-.35-.17-.1-.36-.22-.55-.35-.26-.18-.41-.3-.57-.43-.07-.05-.13-.1-.2-.16,0,0-.41-.32-.89-.6-.48-.28-1.36-.81-1.6-.61-.07.06-.06.23-.05.53.01.35.03.84-.11,1.45-.16.68-.41,1.03-.91,1.72-.31.43-.75,1.03-1.35,1.96-.5.78-.8,1.25-1.16,1.95-.35.68-.74,1.64-1.1,2.68-.4,1.16-.55,1.81-.68,2.37-.15.63-.26,1.13-.66,2.06-.77,1.77-.94,2.12-.96,2.16-.12.24-.23.43-.31.59-.1.19-.21.39-.26.51.12,0,.32-.04.47-.07.41-.08.93-.17,1.52-.14.84.05,1.4.36,2.49,1,1.97,1.16,2.95,1.75,3.56,2.21,1.67,1.27,6.06,3.1,13.05,5.43h0c.74.25,1.47.44,2.18.59,1.04.21,2.07.46,3.07.73,1.52.41,1.96.62,2.46,1.02.55.44.87.92,1.11,1.27.07.11.16.23.22.31.12-.2.26-.86.31-1.16.16-.82.45-1.59.87-2.31.55-.95,1.37-2.43,2.12-4.05,1-2.15,1.14-2.74,1.38-3.82.07-.31.15-.66.26-1.09.17-.66.21-1.2.26-1.72.07-.82.13-1.6.72-2.48.3-.45.61-.76.87-1,.26-.25.41-.4.4-.52-.02-.33-1.06-.57-1.55-.68-.79-.18-1.18-.22-1.52-.26-.33-.04-.62-.07-1.14-.2-.28-.07-.53-.15-.76-.25-.82-.34-1.56-.74-2.03-1.02-.47-.28-.72-.43-.85-.53-2.4-1.73-11.31-5.38-14.23-5.83h0Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M583.14,414.15c.34.68.72,1.36,1.14,2,.68,1.03,1.22,1.93,1.64,2.67.77,1.34.91,1.76.97,2.32.14,1.32-.43,2.14-.04,2.33.27.13.76-.16,1.46-.62.65-.44,1.38-.77,2.14-.97,1.04-.28,2.69-.75,4.39-1.37,2.91-1.05,2.99-1.33,4.7-2.33,1.58-.93,2-1.92,3.55-2.23,1.12-.23,1.82.09,2.16-.29.4-.44-.13-1.29-.58-2-.85-1.34-1-1.27-1.55-2.2-.15-.25-.25-.46-.34-.67-.64-1.56-.92-3.05-.92-3.05-.48-2.97-4.21-11.92-5.99-14.35,0,0-.9-1.23-1.52-2.8-.14-.35-.24-.71-.24-.71-.02-.07-.07-.28-.13-.6-.08-.42-.09-.63-.13-.94,0,0-.07-.53-.21-1.1-.21-.82-.45-1.78-1.02-1.82-.5-.04-.69.69-1.73,1.33-.88.55-1.28.35-4.09.96-.94.2-1.49.32-2.24.57-.26.08-1.2.39-2.72,1.13-2.37,1.15-2.33,1.48-4.06,2.16-1.89.74-2.19.84-2.19.84-.98.31-1.37.36-1.47.6-.17.41.88.7,1.69,1.61.49.55.65,1.07.97,2.32.56,2.2.84,3.31.94,4.03.22,1.69,1.46,5.27,5.41,13.19Z" fill="#f2f0ed" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M592.6,385.06s.05,0,.07,0c.81.06,1.09,1.14,1.33,2.09.11.42.17.82.2,1.02h0s.02.12.02.12c.01.1.02.18.03.27.02.19.04.38.09.66.05.29.1.48.13.57,0,0,.09.34.22.67.6,1.5,1.47,2.71,1.48,2.72,1.83,2.5,5.56,11.44,6.05,14.5,0,0,.27,1.46.9,2.97.08.2.18.4.31.62.25.42.41.62.61.87.23.28.48.6.94,1.32.48.75,1.13,1.78.55,2.43-.3.33-.71.33-1.19.32-.33,0-.71-.01-1.17.08-.86.18-1.34.58-1.95,1.09-.4.34-.86.72-1.49,1.1-.38.22-.67.41-.94.58-.95.59-1.52.95-3.81,1.79-1.7.62-3.34,1.09-4.42,1.38-.72.19-1.4.5-2.03.92-.83.55-1.36.87-1.81.65-.44-.22-.35-.69-.26-1.15.08-.39.17-.87.11-1.46-.05-.48-.16-.85-.92-2.18-.51-.88-1.06-1.78-1.63-2.65-.41-.63-.81-1.31-1.16-2.04h0c-3.37-6.76-5.15-11.11-5.44-13.3-.09-.71-.37-1.8-.93-3.99-.32-1.24-.46-1.68-.89-2.18-.34-.38-.73-.65-1.04-.87-.45-.31-.91-.63-.71-1.12.14-.33.47-.43,1.07-.61.17-.05.38-.11.62-.19.01,0,.34-.11,2.17-.83.88-.34,1.27-.59,1.81-.92.48-.3,1.09-.68,2.23-1.23,1.03-.5,2.01-.9,2.77-1.15.78-.25,1.37-.38,2.27-.58,1.11-.24,1.84-.36,2.38-.44.81-.13,1.12-.18,1.59-.47.45-.28.73-.58.96-.82.27-.29.52-.57.92-.57ZM593.51,388.38h0c-.01-.09-.08-.56-.2-1.06-.14-.54-.39-1.53-.7-1.56-.08,0-.21.12-.41.34-.24.26-.57.61-1.1.94-.6.37-1.02.44-1.86.57-.53.08-1.25.2-2.34.43-.91.2-1.45.32-2.2.56-.73.23-1.68.63-2.68,1.11-1.11.54-1.67.88-2.16,1.19-.55.34-.99.61-1.93.98-1.88.74-2.2.84-2.21.85-.25.08-.46.14-.64.2-.21.06-.43.13-.55.18.09.08.26.19.39.28.35.24.78.54,1.17.98.56.63.73,1.25,1.05,2.47.57,2.22.85,3.33.95,4.07.28,2.08,2.09,6.48,5.37,13.08.35.7.72,1.36,1.12,1.96.58.89,1.14,1.79,1.65,2.69.78,1.36.95,1.83,1.01,2.46.08.7-.03,1.27-.11,1.68-.02.13-.05.28-.06.37.23-.05.79-.43,1.04-.6.69-.46,1.45-.81,2.24-1.02,1.07-.28,2.69-.75,4.36-1.36,2.22-.81,2.74-1.13,3.68-1.72.27-.17.57-.36.96-.59.59-.35,1-.69,1.4-1.03.63-.53,1.22-1.03,2.26-1.24.53-.11.97-.1,1.32-.1.36,0,.57,0,.65-.09.22-.25-.35-1.15-.62-1.58-.43-.68-.68-.99-.89-1.25-.21-.26-.39-.48-.67-.95-.15-.25-.27-.48-.36-.71-.59-1.44-.89-2.83-.94-3.13h0c-.47-2.92-4.18-11.81-5.93-14.19-.04-.05-.93-1.28-1.57-2.88-.04-.11-.2-.54-.25-.75h0c-.03-.1-.08-.32-.14-.63-.06-.31-.08-.51-.1-.71,0-.08-.02-.16-.03-.25Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M494,476.68c-2.92,0-3.38.33-5.08.06-1.38-.22-1.35-.39-3.37-.76-1.08-.2-2.34-.42-2.7.12-.31.48.4,1.05.63,2.23.32,1.64-.68,2.4-1.09,4.27-.45,2.03-.74,2.2-.69,5.43.03,1.89.21,3.68.35,4.8.1.82.03,1.65-.2,2.44-.25.85-.38,1.43-.09,1.65.41.32,1.14-.53,2.81-.85,1.03-.2,1.8-.08,3.26.15.94.15,3.04.87,5.26.95,2.22.12,4.37-.42,5.32-.48,1.47-.09,2.25-.14,3.26.15,1.64.47,2.28,1.38,2.72,1.1.31-.2.22-.79.05-1.66-.16-.81-.16-1.64.02-2.45.24-1.1.58-2.87.77-4.75.33-3.21.06-3.41-.2-5.47-.24-1.91-1.17-2.75-.7-4.35.34-1.15,1.1-1.66.83-2.16-.3-.57-1.59-.47-2.67-.36-2.04.19-2.03.36-3.43.46-1.72.12-2.14-.26-5.05-.51Z" fill="#f2f0ed" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M483.84,475.4c.55,0,1.18.12,1.77.23,1.06.2,1.56.34,2.01.46.4.11.71.2,1.36.3.93.15,1.47.11,2.3.04.65-.05,1.45-.11,2.73-.11h.03c1.27.11,2.07.24,2.71.35.81.14,1.35.23,2.29.16.65-.05.97-.11,1.38-.18.45-.08.96-.18,2.04-.28,1.22-.11,2.6-.24,3.02.55.24.46,0,.87-.27,1.3-.19.31-.4.66-.53,1.13-.26.87-.04,1.5.23,2.3.18.53.39,1.14.49,1.91.06.45.12.82.17,1.14.19,1.16.3,1.87.04,4.41-.2,1.88-.53,3.64-.78,4.79-.16.76-.17,1.53-.02,2.3.17.86.33,1.68-.21,2.02-.41.26-.82.01-1.31-.28-.42-.25-.95-.56-1.71-.78-.95-.27-1.68-.23-3.13-.13-.27.02-.67.08-1.13.15-1.12.17-2.65.41-4.23.33-1.58-.06-3.08-.43-4.18-.7-.45-.11-.84-.21-1.11-.25-1.44-.22-2.17-.33-3.13-.15-.78.15-1.33.41-1.77.63-.51.24-.94.45-1.33.16-.51-.39-.28-1.19-.03-2.03.22-.76.28-1.53.19-2.3-.14-1.16-.32-2.95-.35-4.84-.04-2.56.14-3.25.43-4.39.08-.32.17-.68.27-1.12.17-.76.43-1.35.65-1.86.34-.77.61-1.37.43-2.27-.09-.48-.27-.84-.43-1.17-.22-.46-.43-.89-.15-1.32.25-.38.72-.51,1.28-.51ZM490.17,477.2c-.39,0-.8-.03-1.31-.11-.68-.11-1.03-.21-1.43-.32-.43-.12-.91-.25-1.94-.44-.68-.13-2.11-.39-2.34-.03-.06.09.04.3.2.63.17.35.38.77.49,1.34.22,1.11-.12,1.88-.48,2.69-.23.51-.46,1.03-.61,1.73-.1.46-.19.82-.28,1.15-.29,1.12-.44,1.74-.41,4.21.03,1.86.2,3.62.34,4.76.11.86.04,1.73-.21,2.58-.08.28-.33,1.15-.22,1.27.07.01.36-.13.59-.24.45-.22,1.07-.52,1.94-.68,1.09-.21,1.9-.08,3.38.14.3.05.71.15,1.18.26,1.07.26,2.53.63,4.04.68,1.51.08,3.01-.15,4.09-.32.48-.07.89-.14,1.19-.16,1.49-.1,2.31-.15,3.38.16.85.24,1.44.6,1.87.85.22.13.49.29.57.28.12-.11-.06-1-.11-1.29-.17-.87-.16-1.74.02-2.59.24-1.13.57-2.87.77-4.71.26-2.45.15-3.08-.03-4.23-.05-.33-.11-.7-.17-1.17-.09-.7-.27-1.25-.45-1.77-.29-.84-.56-1.63-.24-2.72.16-.56.41-.96.61-1.29.19-.31.3-.51.25-.61-.2-.38-1.64-.24-2.33-.18-1.05.1-1.54.19-1.98.27-.41.08-.77.14-1.46.19-1.02.07-1.62-.03-2.46-.17-.63-.1-1.41-.23-2.64-.34-1.24,0-2.02.06-2.66.11-.42.03-.78.06-1.16.06Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M597.04,413.08c-1.67-2.39-2.21-2.57-2.97-4.12-.61-1.26-.46-1.33-1.32-3.2-.46-.99-1.01-2.16-1.65-2.13-.57.02-.63.93-1.46,1.8-1.15,1.21-2.35.83-4.12,1.57-1.92.8-2.23.66-4.84,2.56-1.53,1.11-2.89,2.29-3.73,3.04-.61.55-1.33.97-2.11,1.24-.84.29-1.39.51-1.41.87-.02.52,1.09.63,2.31,1.81.75.73,1.1,1.43,1.75,2.75.42.85,1.04,2.99,2.25,4.85,1.18,1.88,2.85,3.33,3.45,4.08.92,1.14,1.41,1.76,1.75,2.75.56,1.61.19,2.66.67,2.86.34.14.77-.27,1.39-.91.57-.6,1.25-1.07,2.01-1.39,1.04-.44,2.68-1.18,4.33-2.1,2.82-1.57,2.82-1.91,4.36-3.32,1.42-1.3,1.58-2.54,3.16-3.08,1.14-.39,1.99-.06,2.25-.57.29-.58-.53-1.57-1.24-2.4-1.33-1.56-1.46-1.45-2.35-2.54-1.09-1.34-1.02-1.9-2.49-4.43Z" fill="#f2f0ed" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M591.13,403.28c.88,0,1.45,1.24,1.95,2.34.45.98.63,1.47.78,1.9.14.39.25.7.53,1.28.41.84.76,1.27,1.28,1.9.41.5.93,1.13,1.66,2.17l.02.02c.64,1.1.99,1.83,1.27,2.42.36.74.59,1.24,1.19,1.97.41.5.64.73.94,1.02.33.32.7.68,1.4,1.51.79.93,1.7,1.99,1.29,2.79-.23.46-.71.49-1.22.53-.36.03-.77.05-1.23.21-.86.29-1.25.83-1.75,1.51-.33.46-.71.97-1.29,1.5-.34.31-.6.57-.84.8-.84.82-1.35,1.32-3.59,2.57-1.65.92-3.28,1.66-4.36,2.12-.71.3-1.35.74-1.89,1.31-.61.64-1.18,1.24-1.78.99-.45-.18-.48-.67-.53-1.23-.04-.49-.08-1.1-.34-1.84-.32-.93-.78-1.5-1.7-2.64-.17-.21-.45-.5-.77-.84-.79-.81-1.86-1.93-2.7-3.27-.86-1.32-1.42-2.77-1.83-3.83-.17-.43-.31-.81-.43-1.05-.65-1.31-.97-1.96-1.68-2.65-.57-.55-1.1-.85-1.53-1.09-.49-.27-.91-.51-.89-.99.03-.64.81-.91,1.65-1.19.74-.25,1.41-.65,1.99-1.17.87-.79,2.23-1.96,3.76-3.07,2.07-1.5,2.74-1.75,3.84-2.17.31-.12.65-.25,1.07-.43.72-.3,1.35-.43,1.9-.54.82-.16,1.47-.29,2.1-.95.34-.35.53-.71.71-1.03.25-.45.48-.87.99-.89.01,0,.02,0,.04,0ZM596.74,413.27c-.71-1.01-1.21-1.62-1.62-2.11-.54-.65-.93-1.12-1.37-2.04-.3-.62-.42-.96-.56-1.36-.15-.42-.32-.89-.75-1.85-.29-.63-.89-1.93-1.31-1.93,0,0,0,0,0,0-.11,0-.22.2-.4.52-.19.34-.42.75-.82,1.17-.78.82-1.61.98-2.48,1.16-.55.11-1.11.22-1.76.49-.43.18-.78.31-1.1.43-1.08.41-1.68.64-3.67,2.09-1.51,1.09-2.84,2.24-3.7,3.02-.65.58-1.4,1.03-2.23,1.31-.28.1-1.13.39-1.17.55.03.07.31.22.53.34.44.25,1.04.58,1.68,1.19.8.77,1.16,1.51,1.82,2.84.14.27.29.66.46,1.11.4,1.03.94,2.43,1.77,3.7.81,1.29,1.85,2.37,2.62,3.16.34.35.62.65.82.89.93,1.16,1.45,1.8,1.81,2.85.29.83.34,1.52.38,2.02.02.25.04.57.1.63.17.04.78-.62.99-.83.61-.64,1.33-1.13,2.13-1.47,1.06-.45,2.67-1.18,4.3-2.08,2.15-1.2,2.61-1.65,3.44-2.46.24-.23.51-.5.85-.81.52-.48.86-.94,1.19-1.39.52-.72,1.02-1.39,2.09-1.76.55-.19,1.02-.22,1.41-.25.36-.03.59-.05.64-.14.19-.38-.74-1.48-1.2-2.01-.68-.8-1.04-1.15-1.36-1.46-.3-.29-.56-.55-.99-1.08-.65-.79-.91-1.34-1.28-2.11-.27-.57-.62-1.28-1.24-2.35Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M560.05,477.47c-2.89.44-3.28.85-5.01.84-1.4,0-1.4-.18-3.45-.23-1.09-.03-2.38-.05-2.65.54-.23.52.56.98.97,2.11.57,1.57-.3,2.47-.42,4.39-.13,2.08-.39,2.29.15,5.47.32,1.87.77,3.61,1.08,4.69.23.79.28,1.62.18,2.44-.11.88-.16,1.47.16,1.65.46.25,1.04-.7,2.65-1.28.99-.35,1.77-.36,3.24-.36.95,0,3.14.39,5.34.13,2.21-.23,4.25-1.09,5.19-1.29,1.43-.32,2.2-.49,3.24-.36,1.69.21,2.47,1.01,2.86.67.27-.24.1-.81-.2-1.64-.28-.78-.41-1.6-.36-2.42.06-1.12.13-2.92.03-4.81-.16-3.22-.47-3.38-1.05-5.38-.53-1.85-1.58-2.54-1.37-4.19.16-1.19.83-1.81.49-2.27-.39-.52-1.64-.22-2.7.05-1.99.5-1.95.67-3.31.98-1.68.38-2.16.07-5.07.27Z" fill="#f2f0ed" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M570.33,475.53c.47,0,.86.11,1.1.43.31.41.13.86-.07,1.33-.14.33-.29.71-.35,1.19-.12.9.19,1.49.58,2.23.26.5.56,1.07.77,1.82.13.44.24.79.34,1.1.36,1.12.59,1.8.72,4.35.1,1.89.04,3.68-.03,4.85-.04.77.07,1.54.34,2.28.3.83.58,1.61.1,2.03-.36.32-.81.14-1.33-.07-.45-.18-1.02-.41-1.81-.51-.98-.12-1.69.04-3.12.35-.27.06-.65.18-1.09.32-1.08.34-2.55.81-4.13.98-1.57.19-3.11.05-4.24-.05-.46-.04-.85-.08-1.14-.08-1.46,0-2.19,0-3.12.34-.74.27-1.25.61-1.65.89-.46.32-.86.59-1.29.36-.56-.31-.46-1.13-.34-2,.1-.78.04-1.55-.17-2.3-.32-1.13-.77-2.86-1.09-4.73-.43-2.52-.36-3.23-.25-4.4.03-.33.07-.69.09-1.15.05-.78.21-1.4.36-1.94.22-.81.39-1.45.08-2.31-.17-.46-.4-.79-.61-1.09-.29-.42-.57-.81-.36-1.28.37-.82,1.75-.78,2.98-.75,1.08.03,1.6.09,2.05.14.41.05.74.09,1.39.09.93,0,1.47-.12,2.27-.31.63-.15,1.42-.33,2.68-.53h.03c1.27-.09,2.08-.08,2.73-.07.83,0,1.37.01,2.29-.19.63-.15.94-.25,1.33-.39.43-.15.92-.32,1.97-.59.67-.17,1.38-.35,1.97-.35ZM573.34,496.61s.02,0,.02,0c.1-.13-.21-.97-.31-1.25-.3-.83-.43-1.69-.38-2.56.07-1.15.13-2.92.03-4.77-.13-2.46-.32-3.07-.68-4.17-.1-.32-.22-.68-.35-1.13-.2-.68-.46-1.19-.72-1.68-.41-.79-.8-1.53-.65-2.65.07-.57.26-1.02.4-1.37.14-.34.22-.55.15-.64-.25-.34-1.66.01-2.33.18-1.02.26-1.49.42-1.91.57-.4.14-.74.26-1.41.41-1,.23-1.61.22-2.45.21-.63,0-1.42-.02-2.66.07-1.22.19-1.99.37-2.61.51-.82.19-1.42.34-2.44.33-.69,0-1.05-.05-1.47-.09-.44-.05-.94-.11-1.99-.14-.69-.02-2.14-.06-2.31.33-.05.1.08.29.29.59.22.31.49.71.69,1.25.39,1.07.17,1.88-.06,2.73-.14.54-.29,1.09-.34,1.8-.03.47-.06.84-.1,1.17-.11,1.15-.17,1.79.25,4.22.31,1.83.76,3.54,1.07,4.65.24.84.3,1.71.19,2.58-.04.29-.15,1.18-.02,1.29.07,0,.33-.18.54-.32.41-.29.98-.68,1.81-.98,1.04-.38,1.87-.38,3.36-.38h0c.3,0,.72.04,1.2.08,1.1.1,2.6.23,4.1.05,1.51-.15,2.95-.61,3.99-.95.46-.15.86-.27,1.16-.34,1.46-.32,2.26-.5,3.36-.36.88.11,1.52.37,1.98.56.22.09.48.19.59.19Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M576.29,465.48c-.2,2.91.11,3.39-.27,5.07-.31,1.36-.48,1.32-.98,3.31-.27,1.06-.57,2.31-.05,2.7.46.34,1.07-.33,2.27-.49,1.66-.22,2.35.83,4.2,1.36,2,.58,2.15.88,5.38,1.04,1.89.09,3.69.03,4.81-.04.82-.05,1.64.08,2.42.36.83.3,1.4.47,1.64.2.34-.39-.46-1.17-.67-2.86-.13-1.04.04-1.81.35-3.24.21-.93,1.06-2.98,1.29-5.19.26-2.2-.14-4.39-.14-5.34,0-1.47,0-2.25.35-3.24.57-1.6,1.52-2.19,1.27-2.65-.18-.32-.77-.27-1.65-.16-.82.11-1.65.05-2.44-.18-1.08-.31-2.82-.76-4.69-1.07-3.18-.54-3.4-.28-5.47-.15-1.92.12-2.82.99-4.39.42-1.13-.41-1.59-1.2-2.11-.97-.59.27-.57,1.55-.53,2.65.06,2.05.23,2.05.24,3.45,0,1.72-.4,2.12-.83,5.01Z" fill="#f2f0ed" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M577.61,453.98c.33,0,.63.21.95.43.3.21.63.44,1.09.6.86.31,1.5.14,2.31-.08.54-.15,1.16-.31,1.94-.36.46-.03.82-.06,1.15-.1,1.17-.11,1.88-.18,4.4.25,1.86.32,3.6.76,4.73,1.08.74.21,1.52.27,2.3.16.87-.11,1.7-.22,2,.34.23.42-.04.82-.36,1.29-.28.4-.62.91-.89,1.65-.33.93-.33,1.66-.33,3.12,0,.27.04.68.08,1.14.1,1.13.24,2.67.05,4.25-.16,1.57-.63,3.05-.97,4.13-.14.44-.26.83-.32,1.09-.31,1.42-.47,2.14-.35,3.12.1.78.33,1.35.51,1.8.21.52.39.97.07,1.33-.42.48-1.2.2-2.03-.1-.74-.27-1.51-.38-2.28-.34-1.17.07-2.96.13-4.85.04-2.55-.13-3.23-.35-4.35-.71-.31-.1-.66-.22-1.1-.34-.75-.22-1.32-.51-1.82-.77-.74-.39-1.33-.7-2.23-.58-.48.06-.86.22-1.19.36-.47.19-.92.37-1.33.07-.72-.54-.38-1.88-.08-3.07.26-1.05.44-1.54.59-1.97.14-.39.24-.7.39-1.34.21-.92.2-1.46.19-2.29,0-.65-.02-1.46.07-2.73v-.03c.19-1.26.38-2.05.53-2.68.19-.8.31-1.34.31-2.28,0-.65-.04-.98-.09-1.39-.05-.45-.12-.97-.15-2.05-.04-1.22-.08-2.61.74-2.98.12-.05.23-.07.34-.07ZM580.58,455.89c-.36,0-.74-.06-1.17-.21-.54-.2-.94-.47-1.25-.69-.3-.21-.49-.34-.59-.29-.39.17-.35,1.62-.33,2.31.03,1.05.09,1.55.14,1.99.05.42.09.78.1,1.47,0,1.02-.13,1.62-.33,2.44-.14.62-.32,1.39-.51,2.61-.08,1.23-.07,2.02-.07,2.66.01.85.02,1.46-.21,2.45-.15.67-.27,1.02-.41,1.41-.15.42-.31.89-.57,1.91-.17.67-.52,2.08-.18,2.33.09.07.3-.02.64-.15.35-.15.8-.33,1.37-.4,1.13-.15,1.87.24,2.65.65.49.26,1,.52,1.68.72.45.13.81.24,1.13.35,1.1.36,1.71.55,4.17.68,1.86.09,3.62.03,4.77-.04.87-.05,1.73.08,2.56.38.28.1,1.12.41,1.26.3.02-.07-.1-.37-.2-.6-.19-.47-.45-1.11-.56-1.98-.14-1.1.04-1.9.36-3.36.07-.3.19-.7.34-1.16.33-1.05.79-2.49.94-3.99.18-1.51.04-3.01-.06-4.1-.04-.48-.08-.9-.08-1.2,0-1.49,0-2.31.37-3.36.3-.83.69-1.4.97-1.81.14-.21.32-.47.32-.55-.11-.12-1,0-1.29.03-.88.11-1.74.05-2.58-.19-1.11-.32-2.82-.76-4.65-1.07-2.43-.41-3.06-.35-4.22-.24-.33.03-.71.07-1.18.1-.71.04-1.26.19-1.8.34-.52.14-1.02.27-1.57.27Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M567.28,472.55c-1.78,1.6-1.87,2.05-3.06,2.82-.96.62-1.04.5-2.47,1.38-.76.47-1.66,1.03-1.57,1.55.07.46.82.42,1.61,1.01,1.1.82.9,1.83,1.68,3.2.84,1.48.76,1.75,2.56,3.69,1.05,1.14,2.15,2.13,2.84,2.73.51.44.92.98,1.22,1.59.32.65.55,1.08.85,1.06.43-.03.4-.95,1.24-2.06.52-.69,1.06-1.04,2.06-1.7.65-.43,2.33-1.14,3.72-2.31,1.41-1.14,2.43-2.65,2.98-3.21.84-.86,1.29-1.32,2.06-1.7,1.25-.61,2.15-.41,2.26-.82.08-.29-.3-.6-.88-1.04-.54-.41-.99-.91-1.33-1.5-.46-.8-1.22-2.06-2.14-3.32-1.56-2.14-1.83-2.11-3.13-3.22-1.19-1.03-2.22-1.03-2.82-2.27-.43-.89-.25-1.61-.68-1.77-.5-.18-1.22.59-1.83,1.25-1.14,1.24-1.04,1.33-1.83,2.16-.98,1.02-1.45,1.02-3.36,2.46Z" fill="#f2f0ed" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M574.14,466.31c.1,0,.19.02.28.05.43.16.51.58.59.99.06.29.12.61.29.96.32.65.76.9,1.37,1.24.41.23.87.48,1.36.91.28.24.52.43.73.6.76.61,1.21.98,2.45,2.68.91,1.25,1.68,2.51,2.16,3.35.31.54.73,1.01,1.24,1.39.57.43,1.16.87,1,1.41-.12.42-.52.5-1,.59-.39.08-.88.17-1.45.45-.72.35-1.13.78-1.96,1.63-.15.16-.36.41-.6.71-.59.72-1.39,1.71-2.41,2.53-1,.83-2.12,1.43-2.94,1.87-.34.18-.63.33-.81.45-.99.65-1.49.98-1.97,1.61-.39.51-.57.97-.72,1.34-.18.45-.34.83-.77.86-.57.04-.89-.62-1.2-1.26-.28-.57-.66-1.07-1.13-1.48-.73-.63-1.82-1.62-2.87-2.76-1.43-1.54-1.7-2.06-2.16-2.92-.13-.24-.27-.5-.45-.83-.32-.56-.48-1.06-.63-1.5-.22-.67-.38-1.15-.96-1.59-.31-.23-.62-.36-.89-.47-.39-.16-.79-.32-.86-.77-.12-.77.87-1.38,1.74-1.91.76-.47,1.14-.66,1.48-.82.3-.15.54-.27.99-.56.64-.41.93-.72,1.41-1.22.37-.39.83-.87,1.61-1.57l.02-.02c.83-.63,1.39-.99,1.84-1.27.59-.37.94-.6,1.47-1.15.37-.38.53-.59.74-.86.23-.3.49-.64,1.09-1.29.6-.66,1.28-1.39,1.93-1.39ZM584.91,479.69c-.07-.14-.55-.5-.74-.64-.59-.44-1.07-.98-1.42-1.61-.47-.82-1.22-2.06-2.11-3.28-1.18-1.62-1.59-1.95-2.32-2.54-.21-.17-.45-.37-.75-.62-.44-.37-.84-.6-1.24-.82-.64-.36-1.25-.7-1.66-1.56-.21-.43-.28-.82-.34-1.14-.04-.19-.08-.44-.14-.46-.28-.11-1.13.81-1.45,1.15-.58.63-.83.96-1.05,1.24-.21.27-.39.51-.79.92-.59.61-1.01.88-1.6,1.25-.44.28-.98.63-1.79,1.23-.75.67-1.2,1.14-1.55,1.52-.48.5-.83.87-1.54,1.33-.48.31-.75.44-1.05.6-.32.16-.69.34-1.42.79-.4.24-1.46.9-1.41,1.2,0,.06.25.15.42.23.29.12.66.27,1.05.56.76.57.98,1.23,1.21,1.93.14.43.29.88.57,1.37.19.33.33.61.46.85.44.84.68,1.3,2.05,2.77,1.03,1.11,2.1,2.09,2.81,2.71.54.47.98,1.05,1.3,1.71.1.2.34.71.49.84.05-.08.13-.26.19-.41.16-.38.37-.91.81-1.5.55-.73,1.12-1.11,2.15-1.78.21-.14.51-.3.86-.49.79-.42,1.88-1,2.82-1.79.96-.78,1.74-1.73,2.31-2.43.25-.31.47-.57.64-.76.86-.88,1.33-1.36,2.16-1.77.66-.32,1.22-.43,1.62-.51.16-.03.36-.07.44-.11Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    </g>
                </g>
                <g id="TV_stand1" data-name="TV_stand" filter="url(#drop-shadow-12)">
                    <g>
                    <rect x="565.64" y="285.48" width="37.08" height="28.59" transform="translate(1168.36 599.54) rotate(180)" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M565.37,285.21h37.62v29.13h-37.62v-29.13ZM602.45,285.74h-36.54v28.05h36.54v-28.05Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <rect x="478.58" y="285.48" width="37.08" height="28.59" transform="translate(994.23 599.54) rotate(180)" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M478.31,285.21h37.62v29.13h-37.62v-29.13ZM515.39,285.74h-36.54v28.05h36.54v-28.05Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <rect x="515.67" y="285.48" width="49.88" height="28.59" transform="translate(1081.21 599.54) rotate(180)" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M515.4,285.21h50.42v29.13h-50.42v-29.13ZM565.28,285.74h-49.34v28.05h49.34v-28.05Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <g>
                        <g>
                        <path d="M551.68,300.07h-22.15v-.19c0-.68.55-1.22,1.22-1.22h19.7c.67,0,1.22.55,1.22,1.22v.19Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M530.75,298.38h19.7c.82,0,1.49.67,1.49,1.49v.46h-22.69v-.46c0-.82.67-1.49,1.49-1.49ZM551.41,299.8c-.04-.49-.45-.88-.95-.88h-19.7c-.5,0-.91.39-.95.88h21.6Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M555.47,302.05v-.26c0-.91-.73-1.64-1.64-1.64h-26.46c-.91,0-1.64.73-1.64,1.64v.26h29.74Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M527.38,299.88h26.46c1.05,0,1.91.86,1.91,1.91v.53h-30.27v-.53c0-1.05.86-1.91,1.91-1.91ZM555.2,301.78c0-.75-.62-1.36-1.37-1.36h-26.46c-.75,0-1.37.61-1.37,1.36h29.2Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M555.47,302.05v-.26c0-.91-.73-1.64-1.64-1.64h-26.46c-.91,0-1.64.73-1.64,1.64v.26h29.74Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M527.38,299.88h26.46c1.05,0,1.91.86,1.91,1.91v.53h-30.27v-.53c0-1.05.86-1.91,1.91-1.91ZM555.2,301.78c0-.75-.62-1.36-1.37-1.36h-26.46c-.75,0-1.37.61-1.37,1.36h29.2Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <line x1="555.47" y1="302.12" x2="525.74" y2="302.12" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <rect x="525.74" y="301.85" width="29.74" height=".54" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                    </g>
                    <g>
                        <path d="M545.43,298.65h-8.81c.68-1.77,2.4-3.02,4.41-3.02s3.73,1.25,4.41,3.02Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M541.02,295.36c2.08,0,3.91,1.25,4.66,3.2l.14.37h-9.6l.14-.37c.75-1.94,2.58-3.2,4.66-3.2ZM545.02,298.38c-.74-1.52-2.27-2.49-4-2.49s-3.25.96-4,2.49h7.99Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    </g>
                    <g>
                    <g>
                        <polygon points="478.58 312.49 515.66 312.49 515.66 314.07 497.24 314.07 478.58 314.07 478.58 312.49" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M478.31,312.23h37.62v2.11h-37.62v-2.11ZM515.39,312.76h-36.54v1.04h36.54v-1.04Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <line x1="497.24" y1="312.64" x2="497.24" y2="314.07" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <rect x="496.98" y="312.64" width=".54" height="1.43" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    </g>
                    <g>
                    <g>
                        <polygon points="565.64 312.49 602.72 312.49 602.72 314.07 584.31 314.07 565.64 314.07 565.64 312.49" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M565.37,312.23h37.62v2.11h-37.62v-2.11ZM602.45,312.76h-36.54v1.04h36.54v-1.04Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <line x1="584.31" y1="312.64" x2="584.31" y2="314.07" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <rect x="584.04" y="312.64" width=".54" height="1.43" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    </g>
                </g>
                <g id="Desk" filter="url(#drop-shadow-13)">
                    <g>
                    <g>
                        <polygon points="868.1 393.01 874.35 398.47 875.48 397.49 869.22 392.03 868.1 393.01" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M874.35,398.87l-6.72-5.86,1.59-1.39,6.72,5.86-1.59,1.39ZM868.56,393.01l5.79,5.05.66-.58-5.79-5.05-.66.58Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <polygon points="852.5 393.01 846.25 398.47 845.12 397.49 851.38 392.03 852.5 393.01" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M846.25,398.87l-1.59-1.39,6.72-5.86,1.59,1.39-6.72,5.86ZM845.59,397.49l.66.58,5.79-5.05-.66-.58-5.79,5.05Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <g>
                        <path d="M854.02,385.33h12.56c3.47,0,6.29,2.82,6.29,6.29v6.34c0,3.47-2.82,6.29-6.29,6.29h-12.56c-3.47,0-6.29-2.82-6.29-6.29v-6.34c0-3.47,2.82-6.29,6.29-6.29Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M870.8,404.53h-21.01c-1.32,0-2.39-.94-2.39-2.08v-15.31c0-1.15,1.07-2.08,2.39-2.08h21.01c1.32,0,2.39.94,2.39,2.08v15.31c0,1.15-1.07,2.08-2.39,2.08ZM849.79,385.62c-.96,0-1.73.68-1.73,1.51v15.31c0,.83.78,1.51,1.73,1.51h21.01c.96,0,1.73-.68,1.73-1.51v-15.31c0-.83-.78-1.51-1.73-1.51h-21.01Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M872.36,373.64h-12.06s-12.06,0-12.06,0c-2.89,0-4.91,2.49-3.97,4.87l2.33,5.85c.47,1.19,1.76,1.99,3.2,1.99h10.5s10.5,0,10.5,0c1.44,0,2.73-.8,3.2-1.99l2.33-5.85c.95-2.38-1.08-4.87-3.97-4.87Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M870.8,386.63h-21c-1.58,0-2.99-.88-3.51-2.18l-2.33-5.85c-.49-1.22-.27-2.53.59-3.59.86-1.06,2.21-1.66,3.69-1.66h24.13c1.48,0,2.83.61,3.69,1.66s1.07,2.36.59,3.59l-2.33,5.85c-.52,1.3-1.93,2.18-3.51,2.18ZM848.24,373.93c-1.27,0-2.42.52-3.15,1.42-.74.9-.92,2.02-.5,3.07l2.33,5.85c.43,1.07,1.59,1.8,2.89,1.8h21c1.3,0,2.47-.72,2.89-1.8l2.33-5.85c.42-1.05.23-2.16-.5-3.07-.74-.9-1.89-1.42-3.15-1.42h-24.13Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <rect x="843.13" y="383.31" width="3.37" height="15.78" rx="1.55" ry="1.55" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M845.6,399.38h-1.57c-.68,0-1.23-.48-1.23-1.07v-14.22c0-.59.55-1.07,1.23-1.07h1.57c.68,0,1.23.48,1.23,1.07v14.22c0,.59-.55,1.07-1.23,1.07ZM844.03,383.6c-.31,0-.57.22-.57.5v14.22c0,.27.26.5.57.5h1.57c.31,0,.57-.22.57-.5v-14.22c0-.27-.26-.5-.57-.5h-1.57Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <rect x="874.1" y="383.31" width="3.37" height="15.78" rx="1.55" ry="1.55" transform="translate(1751.57 782.41) rotate(-180)" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M876.57,399.38h-1.57c-.68,0-1.23-.48-1.23-1.07v-14.22c0-.59.55-1.07,1.23-1.07h1.57c.68,0,1.23.48,1.23,1.07v14.22c0,.59-.55,1.07-1.23,1.07ZM875,383.6c-.31,0-.57.22-.57.5v14.22c0,.27.26.5.57.5h1.57c.31,0,.57-.22.57-.5v-14.22c0-.27-.26-.5-.57-.5h-1.57Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                    </g>
                    </g>
                    <g>
                    <path d="M900.19,372.71v14.4c0,7.57-7.03,13.71-15.71,13.71h-59.07c-1.61,0-2.92,1.14-2.92,2.55v29.22c0,1.41,1.31,2.55,2.92,2.55h97.92c1.61,0,2.92-1.14,2.92-2.55v-27.24s0-4.53,0-4.53v-28.1c0-1.41-1.31-2.55-2.92-2.55h-20.22c-1.61,0-2.92,1.14-2.92,2.55Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M923.33,435.43h-97.92c-1.79,0-3.25-1.27-3.25-2.84v-29.22c0-1.56,1.46-2.84,3.25-2.84h59.07c8.48,0,15.38-6.02,15.38-13.42v-14.4c0-1.56,1.46-2.84,3.25-2.84h20.22c1.79,0,3.25,1.27,3.25,2.84v59.88c0,1.56-1.46,2.84-3.25,2.84ZM825.41,401.1c-1.43,0-2.6,1.02-2.6,2.26v29.22c0,1.25,1.16,2.26,2.6,2.26h97.92c1.43,0,2.6-1.02,2.6-2.26v-59.88c0-1.25-1.16-2.26-2.6-2.26h-20.22c-1.43,0-2.6,1.02-2.6,2.26v14.4c0,7.72-7.19,13.99-16.04,13.99h-59.07Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <path d="M926.25,431.85h-103.76c-.18,0-.33-.13-.33-.29s.15-.29.33-.29h103.76c.18,0,.33.13.33.29s-.15.29-.33.29Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <g>
                    <g>
                        <path d="M875.95,421.73c0-1.38-2.03-2.5-4.53-2.5s-4.53,1.12-4.53,2.5,2.03,2.5,4.53,2.5,4.53-1.12,4.53-2.5Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M871.42,424.38c-2.59,0-4.69-1.19-4.69-2.65s2.1-2.65,4.69-2.65,4.69,1.19,4.69,2.65-2.11,2.65-4.69,2.65ZM871.42,419.37c-2.41,0-4.36,1.06-4.36,2.36s1.96,2.36,4.36,2.36c2.41,0,4.36-1.06,4.36-2.36s-1.96-2.36-4.36-2.36Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M895.08,426.05l-3.11-4.53c-.19-.28-.55-.46-.93-.46h-19.63s-19.63,0-19.63,0c-.38,0-.73.17-.93.46l-3.11,4.53c-.26.38.05.87.57.87h23.1s23.1,0,23.1,0c.51,0,.83-.49.57-.87Z" fill="#f2f0ed" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M894.52,427.06h-46.2c-.3,0-.57-.14-.72-.36-.15-.23-.14-.5,0-.72l3.11-4.53c.22-.33.63-.53,1.07-.53h39.27c.43,0,.84.2,1.07.53l3.11,4.53c.15.22.16.5,0,.72-.15.23-.42.36-.72.36ZM851.79,421.2c-.32,0-.62.15-.79.39l-3.11,4.53c-.09.14-.09.3,0,.44.09.14.25.22.43.22h46.2c.18,0,.34-.08.43-.22.09-.14.09-.3,0-.44h0s-3.11-4.53-3.11-4.53c-.16-.24-.46-.39-.78-.39h-39.27Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    </g>
                    <g>
                    <path d="M862.27,405.96h18.29c2.89,0,5.24,2.35,5.24,5.24v.75c0,2.89-2.35,5.24-5.24,5.24h-18.29c-2.89,0-5.24-2.35-5.24-5.24v-.75c0-2.89,2.35-5.24,5.24-5.24Z" fill="#f2f0ed" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M884.08,417.33h-25.33c-1.04,0-1.89-.74-1.89-1.64v-8.22c0-.91.85-1.64,1.89-1.64h25.33c1.04,0,1.89.74,1.89,1.64v8.22c0,.91-.85,1.64-1.89,1.64ZM858.76,406.11c-.86,0-1.56.61-1.56,1.36v8.22c0,.75.7,1.36,1.56,1.36h25.33c.86,0,1.56-.61,1.56-1.36v-8.22c0-.75-.7-1.36-1.56-1.36h-25.33Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M850.33,408.21h.59c1.83,0,3.31,1.48,3.31,3.31v1.78c0,1.4-1.14,2.54-2.54,2.54h-2.14c-1.4,0-2.54-1.14-2.54-2.54v-1.78c0-1.83,1.48-3.31,3.31-3.31Z" fill="#f2f0ed" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M851.47,415.98h-1.69c-1.61,0-2.92-1.14-2.92-2.55v-2.07c0-1.81,1.69-3.29,3.77-3.29s3.77,1.48,3.77,3.29v2.07c0,1.41-1.31,2.55-2.92,2.55ZM850.63,408.35c-1.9,0-3.44,1.35-3.44,3v2.07c0,1.25,1.16,2.26,2.6,2.26h1.69c1.43,0,2.6-1.02,2.6-2.26v-2.07c0-1.66-1.54-3-3.44-3Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <path d="M850.63,415.98c-.09,0-.16-.06-.16-.14v-7.63c0-.08.07-.14.16-.14s.16.06.16.14v7.63c0,.08-.07.14-.16.14Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <g>
                    <g>
                        <rect x="896.66" y="405.14" width="13.61" height="16.59" fill="#f2f0ed" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M910.43,421.88h-13.93s0-16.88,0-16.88h13.93s0,16.88,0,16.88ZM896.83,421.59h13.28s0-16.3,0-16.3h-13.28s0,16.3,0,16.3Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <polygon points="917.68 418.55 904.88 422.58 898.43 406.97 911.23 402.94 917.68 418.55" fill="#f2f0ed" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M904.79,422.76l-6.57-15.87,13.11-4.13,6.57,15.87-13.11,4.13ZM898.64,407.06l6.34,15.34,12.49-3.93-6.34-15.34-12.49,3.93Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    </g>
                </g>
                </g>
            </g>
            {/* OPTION: Sunroom */}
            <g id="sunroom" data-option="sunroom" style={{ display: active.sunroom ? "block" : "none" }} fill="#CC0001">
                <g id="sunroom">
                    <polygon points="548.75 62.83 548.75 215.23 380.08 215.23 380.08 270.98 126.75 270.98 126.75 10.33 380.08 10.33 380.08 62.83 548.75 62.83" fill="#efefef"/>
                    <polygon points="202.46 259.32 202.46 271.25 126.75 271.25 126.75 244.05 140.1 244.05 140.1 259.32 202.46 259.32" fill="#425563"/>
                    <rect x="361.36" y="259.32" width="16.75" height="10.93" fill="#425563"/>
                    <rect x="126.75" y="85.18" width="13.35" height="113.22" fill="#425563"/>
                    <polygon points="184.37 10.33 184.37 24.34 140.1 24.34 140.1 40.49 126.75 40.49 126.75 10.33 184.37 10.33" fill="#425563"/>
                    <polygon points="380.08 10.33 380.08 66.3 366.06 66.3 366.06 24.34 325.58 24.34 325.58 10.33 380.08 10.33" fill="#425563"/>
                    <polygon points="380.08 171.15 380.08 271.25 308.31 271.25 308.31 259.32 366.06 259.32 366.06 171.15 380.08 171.15" fill="#425563"/>
                    <rect x="347.32" y="91.11" width="53.59" height="3.98" transform="translate(467.22 -281.02) rotate(90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="343.34" y="129.82" width="53.59" height="3.98" transform="translate(501.95 -238.33) rotate(90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="332.54" y="112.77" width="108.26" height="13.18" transform="translate(506.03 -267.31) rotate(90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="365.62" y="92.86" width="108.26" height="53" transform="translate(539.11 -300.4) rotate(90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <g>
                    <rect x="110.6" y="215.07" width="45.65" height="12.3" transform="translate(354.65 87.8) rotate(90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="114.3" y="218.77" width="45.65" height="4.91" transform="translate(358.35 84.1) rotate(90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    </g>
                    <g>
                    <rect x="111.08" y="56.68" width="44.69" height="12.3" transform="translate(196.26 -70.59) rotate(90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="114.78" y="60.38" width="44.69" height="4.91" transform="translate(199.96 -74.29) rotate(90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    </g>
                    <g>
                    <rect x="184.37" y="11.18" width="41.02" height="12.3" transform="translate(409.76 34.67) rotate(-180)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="184.37" y="18.58" width="41.02" height="4.91" transform="translate(409.76 42.06) rotate(-180)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    </g>
                    <g>
                    <rect x="234.46" y="11.18" width="41.02" height="12.3" transform="translate(509.95 34.67) rotate(-180)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="234.46" y="18.58" width="41.02" height="4.91" transform="translate(509.95 42.06) rotate(-180)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    </g>
                    <g>
                    <rect x="284.56" y="11.18" width="41.02" height="12.3" transform="translate(610.14 34.67) rotate(-180)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="284.56" y="18.58" width="41.02" height="4.91" transform="translate(610.14 42.06) rotate(-180)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    </g>
                    <rect x="225.39" y="10.33" width="9.07" height="13.16" fill="#425563"/>
                    <rect x="275.49" y="10.33" width="9.07" height="13.16" fill="#425563"/>
                    <rect x="202.46" y="259.32" width="104.94" height="12.54" fill="none" stroke="#425563" stroke-dasharray="7 6" stroke-miterlimit="10"/>
                    <text transform="translate(225.8 201.87)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">Sunroom</tspan></text>
                    <g id="Study_furniture_set">
                    <g id="Living_Room" filter="url(#drop-shadow-21)">
                        <g>
                        <rect x="288.91" y="78.57" width="26.06" height="32.02" rx="2.98" ry="2.98" transform="translate(396.52 -207.36) rotate(90)" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M285.78,105.78v-22.41c0-1.09.89-1.98,1.98-1.98h28.36c1.09,0,1.98.89,1.98,1.98v22.41c0,1.09-.89,1.98-1.98,1.98h-28.36c-1.09,0-1.98-.89-1.98-1.98ZM317.8,83.38c0-.92-.75-1.68-1.68-1.68h-28.36c-.92,0-1.68.75-1.68,1.68v22.41c0,.92.75,1.68,1.68,1.68h28.36c.92,0,1.68-.75,1.68-1.68v-22.41Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <rect x="288.85" y="104.6" width="26.06" height="32.02" rx="2.98" ry="2.98" transform="translate(422.49 -181.27) rotate(90)" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M285.71,131.81v-22.41c0-1.09.89-1.98,1.98-1.98h28.36c1.09,0,1.98.89,1.98,1.98v22.41c0,1.09-.89,1.98-1.98,1.98h-28.36c-1.09,0-1.98-.89-1.98-1.98ZM317.74,109.4c0-.92-.75-1.68-1.68-1.68h-28.36c-.92,0-1.68.75-1.68,1.68v22.41c0,.92.75,1.68,1.68,1.68h28.36c.92,0,1.68-.75,1.68-1.68v-22.41Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <rect x="288.71" y="130.7" width="26.06" height="32.02" rx="2.98" ry="2.98" transform="translate(448.45 -155.03) rotate(90)" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M285.58,157.91v-22.41c0-1.09.89-1.98,1.98-1.98h28.36c1.09,0,1.98.89,1.98,1.98v22.41c0,1.09-.89,1.98-1.98,1.98h-28.36c-1.09,0-1.98-.89-1.98-1.98ZM317.6,135.51c0-.92-.75-1.68-1.68-1.68h-28.36c-.92,0-1.68.75-1.68,1.68v22.41c0,.92.75,1.68,1.68,1.68h28.36c.92,0,1.68-.75,1.68-1.68v-22.41Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M297.81,69.24h4.15c1.23,0,2.24,1,2.24,2.24v19.98c0,1.23-1,2.24-2.24,2.24h-4.15c-1.23,0-2.24-1-2.24-2.24v-19.98c0-1.23,1-2.24,2.24-2.24Z" transform="translate(381.36 -218.41) rotate(90)" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M287.5,84.41v-5.88c0-.84.68-1.52,1.52-1.52h21.71c.84,0,1.52.68,1.52,1.52v5.88c0,.84-.68,1.52-1.52,1.52h-21.71c-.84,0-1.52-.68-1.52-1.52ZM311.96,78.53c0-.67-.55-1.22-1.22-1.22h-21.71c-.67,0-1.22.55-1.22,1.22v5.88c0,.67.55,1.22,1.22,1.22h21.71c.67,0,1.22-.55,1.22-1.22v-5.88Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M297.81,147.54h4.15c1.23,0,2.24,1,2.24,2.24v19.98c0,1.23-1,2.24-2.24,2.24h-4.15c-1.23,0-2.24-1-2.24-2.24v-19.98c0-1.23,1-2.24,2.24-2.24Z" transform="translate(459.65 -140.11) rotate(90)" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M287.5,162.71v-5.88c0-.84.68-1.52,1.52-1.52h21.71c.84,0,1.52.68,1.52,1.52v5.88c0,.84-.68,1.52-1.52,1.52h-21.71c-.84,0-1.52-.68-1.52-1.52ZM311.96,156.83c0-.67-.55-1.22-1.22-1.22h-21.71c-.67,0-1.22.55-1.22,1.22v5.88c0,.67.55,1.22,1.22,1.22h21.71c.67,0,1.22-.55,1.22-1.22v-5.88Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <rect x="273.87" y="116.26" width="81.3" height="9.26" rx="2.28" ry="2.28" transform="translate(435.42 -193.63) rotate(90)" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M309.74,160.14v-78.5c0-.86.7-1.55,1.55-1.55h6.46c.86,0,1.55.7,1.55,1.55v78.5c0,.86-.7,1.55-1.55,1.55h-6.46c-.86,0-1.55-.7-1.55-1.55ZM319,81.65c0-.69-.56-1.25-1.25-1.25h-6.46c-.69,0-1.25.56-1.25,1.25v78.5c0,.69.56,1.25,1.25,1.25h6.46c.69,0,1.25-.56,1.25-1.25v-78.5Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <circle cx="305.13" cy="114.25" r=".69" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M304.28,114.25c0-.47.38-.85.85-.85s.85.38.85.85-.38.85-.85.85-.85-.38-.85-.85ZM305.67,114.25c0-.3-.24-.54-.54-.54s-.54.24-.54.54.24.54.54.54.54-.24.54-.54Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M305.13,127.43c-.38,0-.69-.31-.69-.69s.31-.69.69-.69.69.31.69.69-.31.69-.69.69Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M304.28,126.73c0-.47.38-.85.85-.85s.85.38.85.85-.38.85-.85.85-.85-.38-.85-.85ZM305.67,126.73c0-.3-.24-.54-.54-.54s-.54.24-.54.54.24.54.54.54.54-.24.54-.54Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <circle cx="292.91" cy="114.25" r=".69" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M292.07,114.25c0-.47.38-.85.85-.85s.85.38.85.85-.38.85-.85.85-.85-.38-.85-.85ZM293.46,114.25c0-.3-.24-.54-.54-.54s-.54.24-.54.54.24.54.54.54.54-.24.54-.54Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <circle cx="292.91" cy="126.93" r=".69" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M292.07,126.93c0-.47.38-.85.85-.85s.85.38.85.85-.38.85-.85.85-.85-.38-.85-.85ZM293.46,126.93c0-.3-.24-.54-.54-.54s-.54.24-.54.54.24.54.54.54.54-.24.54-.54Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M298.23,121.78c-.38,0-.69-.31-.69-.69s.31-.69.69-.69.69.31.69.69-.31.69-.69.69Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M297.38,121.09c0-.47.38-.85.85-.85s.85.38.85.85-.38.85-.85.85-.85-.38-.85-.85ZM298.77,121.09c0-.3-.24-.54-.54-.54s-.54.24-.54.54.24.54.54.54.54-.24.54-.54Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M305.13,139.87c-.38,0-.69-.31-.69-.69s.31-.69.69-.69.69.31.69.69-.31.69-.69.69Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M304.28,139.18c0-.47.38-.85.85-.85s.85.38.85.85-.38.85-.85.85-.85-.38-.85-.85ZM305.67,139.18c0-.3-.24-.54-.54-.54s-.54.24-.54.54.24.54.54.54.54-.24.54-.54Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M305.13,152.35c-.38,0-.69-.31-.69-.69s.31-.69.69-.69.69.31.69.69-.31.69-.69.69Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M304.28,151.66c0-.47.38-.85.85-.85s.85.38.85.85-.38.85-.85.85-.85-.38-.85-.85ZM305.67,151.66c0-.3-.24-.54-.54-.54s-.54.24-.54.54.24.54.54.54.54-.24.54-.54Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M292.91,139.87c-.38,0-.69-.31-.69-.69s.31-.69.69-.69.69.31.69.69-.31.69-.69.69Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M292.07,139.18c0-.47.38-.85.85-.85s.85.38.85.85-.38.85-.85.85-.85-.38-.85-.85ZM293.46,139.18c0-.3-.24-.54-.54-.54s-.54.24-.54.54.24.54.54.54.54-.24.54-.54Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <circle cx="292.91" cy="151.85" r=".69" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M292.07,151.85c0-.47.38-.85.85-.85s.85.38.85.85-.38.85-.85.85-.85-.38-.85-.85ZM293.46,151.85c0-.3-.24-.54-.54-.54s-.54.24-.54.54.24.54.54.54.54-.24.54-.54Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M298.23,146.71c-.38,0-.69-.31-.69-.69s.31-.69.69-.69.69.31.69.69-.31.69-.69.69Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M297.38,146.02c0-.47.38-.85.85-.85s.85.38.85.85-.38.85-.85.85-.85-.38-.85-.85ZM298.77,146.02c0-.3-.24-.54-.54-.54s-.54.24-.54.54.24.54.54.54.54-.24.54-.54Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <circle cx="305.13" cy="90.01" r=".69" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M304.28,90.01c0-.47.38-.85.85-.85s.85.38.85.85-.38.85-.85.85-.85-.38-.85-.85ZM305.67,90.01c0-.3-.24-.54-.54-.54s-.54.24-.54.54.24.54.54.54.54-.24.54-.54Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M305.13,103.19c-.38,0-.69-.31-.69-.69s.31-.69.69-.69.69.31.69.69-.31.69-.69.69Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M304.28,102.49c0-.47.38-.85.85-.85s.85.38.85.85-.38.85-.85.85-.85-.38-.85-.85ZM305.67,102.49c0-.3-.24-.54-.54-.54s-.54.24-.54.54.24.54.54.54.54-.24.54-.54Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <circle cx="292.91" cy="90.01" r=".69" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M292.07,90.01c0-.47.38-.85.85-.85s.85.38.85.85-.38.85-.85.85-.85-.38-.85-.85ZM293.46,90.01c0-.3-.24-.54-.54-.54s-.54.24-.54.54.24.54.54.54.54-.24.54-.54Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M292.91,103.39c-.38,0-.69-.31-.69-.69s.31-.69.69-.69.69.31.69.69-.31.69-.69.69Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M292.07,102.69c0-.47.38-.85.85-.85s.85.38.85.85-.38.85-.85.85-.85-.38-.85-.85ZM293.46,102.69c0-.3-.24-.54-.54-.54s-.54.24-.54.54.24.54.54.54.54-.24.54-.54Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M298.23,97.55c-.38,0-.69-.31-.69-.69s.31-.69.69-.69.69.31.69.69-.31.69-.69.69Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M297.38,96.85c0-.47.38-.85.85-.85s.85.38.85.85-.38.85-.85.85-.85-.38-.85-.85ZM298.77,96.85c0-.3-.24-.54-.54-.54s-.54.24-.54.54.24.54.54.54.54-.24.54-.54Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                    </g>
                    <g id="Living_Room1" data-name="Living_Room" filter="url(#drop-shadow-22)">
                        <g>
                        <rect x="192.27" y="130.65" width="26.06" height="32.02" rx="2.98" ry="2.98" transform="translate(58.65 351.97) rotate(-90)" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M221.47,135.46v22.41c0,1.09-.89,1.98-1.98,1.98h-28.36c-1.09,0-1.98-.89-1.98-1.98v-22.41c0-1.09.89-1.98,1.98-1.98h28.36c1.09,0,1.98.89,1.98,1.98ZM189.45,157.86c0,.92.75,1.68,1.68,1.68h28.36c.92,0,1.68-.75,1.68-1.68v-22.41c0-.92-.75-1.68-1.68-1.68h-28.36c-.92,0-1.68.75-1.68,1.68v22.41Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <rect x="192.34" y="104.62" width="26.06" height="32.02" rx="2.98" ry="2.98" transform="translate(84.74 326) rotate(-90)" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M221.53,109.43v22.41c0,1.09-.89,1.98-1.98,1.98h-28.36c-1.09,0-1.98-.89-1.98-1.98v-22.41c0-1.09.89-1.98,1.98-1.98h28.36c1.09,0,1.98.89,1.98,1.98ZM189.51,131.84c0,.92.75,1.68,1.68,1.68h28.36c.92,0,1.68-.75,1.68-1.68v-22.41c0-.92-.75-1.68-1.68-1.68h-28.36c-.92,0-1.68.75-1.68,1.68v22.41Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <rect x="192.47" y="78.52" width="26.06" height="32.02" rx="2.98" ry="2.98" transform="translate(110.97 300.03) rotate(-90)" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M221.67,83.33v22.41c0,1.09-.89,1.98-1.98,1.98h-28.36c-1.09,0-1.98-.89-1.98-1.98v-22.41c0-1.09.89-1.98,1.98-1.98h28.36c1.09,0,1.98.89,1.98,1.98ZM189.65,105.73c0,.92.75,1.68,1.68,1.68h28.36c.92,0,1.68-.75,1.68-1.68v-22.41c0-.92-.75-1.68-1.68-1.68h-28.36c-.92,0-1.68.75-1.68,1.68v22.41Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M205.29,147.54h4.15c1.23,0,2.24,1,2.24,2.24v19.98c0,1.23-1,2.24-2.24,2.24h-4.15c-1.23,0-2.24-1-2.24-2.24v-19.98c0-1.23,1-2.24,2.24-2.24Z" transform="translate(47.59 367.13) rotate(-90)" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M219.74,156.83v5.88c0,.84-.68,1.52-1.52,1.52h-21.71c-.84,0-1.52-.68-1.52-1.52v-5.88c0-.84.68-1.52,1.52-1.52h21.71c.84,0,1.52.68,1.52,1.52ZM195.29,162.71c0,.67.55,1.22,1.22,1.22h21.71c.67,0,1.22-.55,1.22-1.22v-5.88c0-.67-.55-1.22-1.22-1.22h-21.71c-.67,0-1.22.55-1.22,1.22v5.88Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M205.29,69.24h4.15c1.23,0,2.24,1,2.24,2.24v19.98c0,1.23-1,2.24-2.24,2.24h-4.15c-1.23,0-2.24-1-2.24-2.24v-19.98c0-1.23,1-2.24,2.24-2.24Z" transform="translate(125.89 288.83) rotate(-90)" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M219.74,78.53v5.88c0,.84-.68,1.52-1.52,1.52h-21.71c-.84,0-1.52-.68-1.52-1.52v-5.88c0-.84.68-1.52,1.52-1.52h21.71c.84,0,1.52.68,1.52,1.52ZM195.29,84.41c0,.67.55,1.22,1.22,1.22h21.71c.67,0,1.22-.55,1.22-1.22v-5.88c0-.67-.55-1.22-1.22-1.22h-21.71c-.67,0-1.22.55-1.22,1.22v5.88Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <rect x="152.08" y="115.71" width="81.3" height="9.26" rx="2.28" ry="2.28" transform="translate(72.38 313.07) rotate(-90)" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M197.51,81.1v78.5c0,.86-.7,1.55-1.55,1.55h-6.46c-.86,0-1.55-.7-1.55-1.55v-78.5c0-.86.7-1.55,1.55-1.55h6.46c.86,0,1.55.7,1.55,1.55ZM188.25,159.59c0,.69.56,1.25,1.25,1.25h6.46c.69,0,1.25-.56,1.25-1.25v-78.5c0-.69-.56-1.25-1.25-1.25h-6.46c-.69,0-1.25.56-1.25,1.25v78.5Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <circle cx="202.12" cy="126.99" r=".69" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M202.97,126.99c0,.47-.38.85-.85.85s-.85-.38-.85-.85.38-.85.85-.85.85.38.85.85ZM201.58,126.99c0,.3.24.54.54.54s.54-.24.54-.54-.24-.54-.54-.54-.54.24-.54.54Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M202.12,113.81c.38,0,.69.31.69.69s-.31.69-.69.69-.69-.31-.69-.69.31-.69.69-.69Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M202.97,114.51c0,.47-.38.85-.85.85s-.85-.38-.85-.85.38-.85.85-.85.85.38.85.85ZM201.58,114.51c0,.3.24.54.54.54s.54-.24.54-.54-.24-.54-.54-.54-.54.24-.54.54Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <circle cx="214.33" cy="126.99" r=".69" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M215.18,126.99c0,.47-.38.85-.85.85s-.85-.38-.85-.85.38-.85.85-.85.85.38.85.85ZM213.79,126.99c0,.3.24.54.54.54s.54-.24.54-.54-.24-.54-.54-.54-.54.24-.54.54Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <circle cx="214.33" cy="114.31" r=".69" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M215.18,114.31c0,.47-.38.85-.85.85s-.85-.38-.85-.85.38-.85.85-.85.85.38.85.85ZM213.79,114.31c0,.3.24.54.54.54s.54-.24.54-.54-.24-.54-.54-.54-.54.24-.54.54Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M209.01,119.46c.38,0,.69.31.69.69s-.31.69-.69.69-.69-.31-.69-.69.31-.69.69-.69Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M209.86,120.15c0,.47-.38.85-.85.85s-.85-.38-.85-.85.38-.85.85-.85.85.38.85.85ZM208.47,120.15c0,.3.24.54.54.54s.54-.24.54-.54-.24-.54-.54-.54-.54.24-.54.54Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M202.12,101.37c.38,0,.69.31.69.69s-.31.69-.69.69-.69-.31-.69-.69.31-.69.69-.69Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M202.97,102.06c0,.47-.38.85-.85.85s-.85-.38-.85-.85.38-.85.85-.85.85.38.85.85ZM201.58,102.06c0,.3.24.54.54.54s.54-.24.54-.54-.24-.54-.54-.54-.54.24-.54.54Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M202.12,88.89c.38,0,.69.31.69.69s-.31.69-.69.69-.69-.31-.69-.69.31-.69.69-.69Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M202.97,89.58c0,.47-.38.85-.85.85s-.85-.38-.85-.85.38-.85.85-.85.85.38.85.85ZM201.58,89.58c0,.3.24.54.54.54s.54-.24.54-.54-.24-.54-.54-.54-.54.24-.54.54Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M214.33,101.37c.38,0,.69.31.69.69s-.31.69-.69.69-.69-.31-.69-.69.31-.69.69-.69Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M215.18,102.06c0,.47-.38.85-.85.85s-.85-.38-.85-.85.38-.85.85-.85.85.38.85.85ZM213.79,102.06c0,.3.24.54.54.54s.54-.24.54-.54-.24-.54-.54-.54-.54.24-.54.54Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <circle cx="214.33" cy="89.39" r=".69" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M215.18,89.39c0,.47-.38.85-.85.85s-.85-.38-.85-.85.38-.85.85-.85.85.38.85.85ZM213.79,89.39c0,.3.24.54.54.54s.54-.24.54-.54-.24-.54-.54-.54-.54.24-.54.54Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M209.01,94.53c.38,0,.69.31.69.69s-.31.69-.69.69-.69-.31-.69-.69.31-.69.69-.69Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M209.86,95.22c0,.47-.38.85-.85.85s-.85-.38-.85-.85.38-.85.85-.85.85.38.85.85ZM208.47,95.22c0,.3.24.54.54.54s.54-.24.54-.54-.24-.54-.54-.54-.54.24-.54.54Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <circle cx="202.12" cy="151.23" r=".69" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M202.97,151.23c0,.47-.38.85-.85.85s-.85-.38-.85-.85.38-.85.85-.85.85.38.85.85ZM201.58,151.23c0,.3.24.54.54.54s.54-.24.54-.54-.24-.54-.54-.54-.54.24-.54.54Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M202.12,138.05c.38,0,.69.31.69.69s-.31.69-.69.69-.69-.31-.69-.69.31-.69.69-.69Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M202.97,138.75c0,.47-.38.85-.85.85s-.85-.38-.85-.85.38-.85.85-.85.85.38.85.85ZM201.58,138.75c0,.3.24.54.54.54s.54-.24.54-.54-.24-.54-.54-.54-.54.24-.54.54Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <circle cx="214.33" cy="151.23" r=".69" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M215.18,151.23c0,.47-.38.85-.85.85s-.85-.38-.85-.85.38-.85.85-.85.85.38.85.85ZM213.79,151.23c0,.3.24.54.54.54s.54-.24.54-.54-.24-.54-.54-.54-.54.24-.54.54Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M214.33,137.85c.38,0,.69.31.69.69s-.31.69-.69.69-.69-.31-.69-.69.31-.69.69-.69Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M215.18,138.55c0,.47-.38.85-.85.85s-.85-.38-.85-.85.38-.85.85-.85.85.38.85.85ZM213.79,138.55c0,.3.24.54.54.54s.54-.24.54-.54-.24-.54-.54-.54-.54.24-.54.54Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M209.01,143.69c.38,0,.69.31.69.69s-.31.69-.69.69-.69-.31-.69-.69.31-.69.69-.69Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M209.86,144.39c0,.47-.38.85-.85.85s-.85-.38-.85-.85.38-.85.85-.85.85.38.85.85ZM208.47,144.39c0,.3.24.54.54.54s.54-.24.54-.54-.24-.54-.54-.54-.54.24-.54.54Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                    </g>
                    <g id="Plant4" data-name="Plant" filter="url(#drop-shadow-23)">
                        <path d="M234.7,104.91h37.85c4.24,0,7.68,3.44,7.68,7.68v18.25c0,4.24-3.44,7.68-7.68,7.68h-37.85c-4.24,0-7.68-3.44-7.68-7.68v-18.25c0-4.24,3.44-7.68,7.68-7.68Z" transform="translate(375.34 -131.9) rotate(90)" fill="#fff" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M236.61,141.8v-40.16c0-3.71,3.02-6.73,6.73-6.73h20.57c3.71,0,6.73,3.02,6.73,6.73v40.16c0,3.71-3.02,6.73-6.73,6.73h-20.57c-3.71,0-6.73-3.02-6.73-6.73ZM270.22,101.64c0-3.48-2.83-6.31-6.31-6.31h-20.57c-3.48,0-6.31,2.83-6.31,6.31v40.16c0,3.48,2.83,6.31,6.31,6.31h20.57c3.48,0,6.31-2.83,6.31-6.31v-40.16Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g id="Plant5" data-name="Plant" filter="url(#drop-shadow-24)">
                        <g>
                        <path d="M253.85,126.34c-2.75,0-4.98-2.21-4.98-4.94s2.23-4.94,4.98-4.94,4.98,2.21,4.98,4.94-2.23,4.94-4.98,4.94Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M248.65,121.4c0-2.84,2.33-5.15,5.19-5.15s5.19,2.31,5.19,5.15-2.33,5.15-5.19,5.15-5.19-2.31-5.19-5.15ZM258.62,121.4c0-2.61-2.14-4.73-4.77-4.73s-4.77,2.12-4.77,4.73,2.14,4.73,4.77,4.73,4.77-2.12,4.77-4.73Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M255.56,121.27c4.91-.21,4.47-3.16,4.36-5.8-.11-2.64.85-6.75.32-6.01-.53.74-2.98,1.68-5.33,4-2.34,2.32-4.25,8.02.64,7.81Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M252.29,118.73c0-1.81,1.12-4.08,2.47-5.42,1.4-1.39,2.84-2.29,3.89-2.95.68-.42,1.22-.76,1.41-1.03.14-.19.27-.19.36-.16.26.1.23.41.02,2.05-.16,1.24-.37,2.93-.32,4.24l.02.46c.07,1.54.15,3.14-.86,4.24-.74.81-1.96,1.24-3.73,1.31h0c-1.94.08-2.72-.75-3.03-1.47-.17-.38-.24-.82-.24-1.29ZM260.18,109.83c-.3.27-.74.54-1.3.89-1.03.65-2.45,1.53-3.82,2.89-1.6,1.59-2.86,4.6-2.14,6.24.38.86,1.26,1.27,2.63,1.21h0c1.65-.07,2.77-.46,3.43-1.17.89-.98.82-2.48.75-3.94l-.02-.47c-.05-1.34.16-3.05.32-4.31.06-.5.13-1.01.15-1.34Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M254.07,121.38c.88-2.47,4.94-3.39,8.66-1.27,3.73,2.12,4.7,4.81,3.49,3.98-1.22-.82-3.61,1.31-6.08,1.83-2.47.53-6.9-2.24-6.08-4.54Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M253.76,121.96c0-.22.04-.44.11-.65h0c.35-.99,1.19-1.77,2.37-2.21,1.95-.72,4.41-.41,6.6.83,2.64,1.5,4.09,3.4,4.09,4.15h0c0,.22-.12.31-.18.34-.16.08-.37.03-.64-.15-.62-.42-1.7.11-2.96.71-.9.44-1.92.93-2.95,1.15-1.65.35-4.21-.68-5.58-2.25-.56-.64-.85-1.3-.85-1.93ZM254.27,121.45c-.29.82.2,1.62.66,2.15,1.26,1.44,3.68,2.43,5.17,2.11.98-.21,1.98-.69,2.86-1.12,1.37-.67,2.56-1.24,3.38-.68.07.05.12.08.16.09-.09-.47-1.18-2.18-3.87-3.71-2.08-1.18-4.41-1.48-6.24-.8-1.06.39-1.81,1.09-2.12,1.96h0Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M252.24,122.04c1.6,1.42,2.03.54,2.3,2.14.27,1.61-.41,4.29-1.96,5.22s-5.81,3.55-5.41,3.01c.41-.54,1.15-3.82.95-5.09-.2-1.27,2.23-6.97,4.12-5.29Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M246.93,132.47c0-.05.02-.11.07-.18.35-.47,1.11-3.66.91-4.93-.16-1.06,1.3-4.77,2.88-5.64.57-.31,1.12-.26,1.59.16.64.56,1.08.75,1.4.88.53.22.8.37.97,1.39.27,1.59-.39,4.43-2.06,5.44l-.55.33c-4.91,2.97-4.97,2.9-5.15,2.71-.02-.02-.06-.07-.06-.15ZM248.37,127.85c0,1.27-.43,3.3-.8,4.25.96-.49,3.27-1.89,4.35-2.55l.55-.33c1.52-.92,2.11-3.53,1.86-5.01-.14-.82-.27-.88-.71-1.06-.35-.15-.83-.34-1.52-.96h0c-.33-.3-.7-.33-1.1-.11-1.43.78-2.83,4.26-2.67,5.2.03.16.04.35.04.56Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M253.71,121.78c3.24-1.59,5.24.75,5.42,4.13.12,2.18-.14,3.73-.21,5.27-.07,1.59.46,2.54.32,2.9-.32.85-1.85-.97-2.75-1.82-.9-.85-2.08-1.39-3.27-3.69-1.19-2.3-1.94-5.6.49-6.8Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M251.89,124.64c0-.47.06-.91.19-1.29.26-.79.78-1.38,1.53-1.75h0c1.35-.67,2.6-.71,3.6-.12,1.24.72,2.01,2.34,2.13,4.43.08,1.53-.02,2.78-.11,3.88-.04.48-.08.95-.1,1.41-.04.9.12,1.58.23,2.08.09.41.15.67.07.88-.09.24-.25.32-.37.35-.5.11-1.18-.54-2.16-1.53-.2-.2-.39-.39-.56-.55-.21-.19-.43-.37-.66-.56-.77-.62-1.72-1.38-2.65-3.18-.74-1.43-1.13-2.86-1.13-4.05ZM253.8,121.98c-.65.32-1.1.83-1.32,1.5-.41,1.24-.06,3.11.92,5.01.89,1.72,1.77,2.42,2.54,3.05.24.19.47.38.69.58.17.16.36.36.57.56.55.55,1.46,1.48,1.77,1.42,0,0,.04,0,.06-.08.03-.09-.03-.36-.09-.64-.11-.49-.28-1.23-.24-2.2.02-.47.06-.94.1-1.43.1-1.14.19-2.31.11-3.82-.11-1.95-.81-3.44-1.92-4.09-.88-.51-1.98-.47-3.2.13h0Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M254,120.21c-1.19-3.07-.79-5.53-2.91-5.99-2.12-.46-6.24-1.19-6.35-1.93-.11-.74-.99,1.85.51,3.23,1.51,1.38,2.81,6.48,5.14,6.28,2.34-.2,4.28.15,3.6-1.59Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M244.18,113.33c0-.49.09-.91.2-1.14.11-.22.24-.26.33-.24.09.01.21.08.24.31.08.48,3.61,1.21,5.11,1.53.39.08.75.16,1.07.22,1.56.34,1.88,1.69,2.27,3.39.19.82.41,1.74.79,2.73h0c.2.51.2.89.01,1.18-.35.54-1.29.58-2.49.63-.41.02-.85.03-1.31.07-1.63.14-2.75-1.99-3.74-3.86-.54-1.03-1.05-1.99-1.57-2.47-.72-.66-.94-1.59-.94-2.34ZM244.68,112.6c-.14.59-.19,1.93.72,2.76.57.52,1.1,1.52,1.65,2.58.93,1.76,1.97,3.75,3.33,3.64.46-.04.91-.06,1.33-.08,1.03-.04,1.91-.08,2.15-.43.11-.16.09-.43-.05-.79-.39-1.01-.61-1.96-.81-2.79-.39-1.68-.65-2.79-1.95-3.07-.32-.07-.68-.14-1.07-.22-3.14-.65-4.81-1.08-5.3-1.6Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M254.07,121.58c.21.05,1.37,1,2.06,3.56.69,2.57.69,3.98.69,3.98l-2.75-7.54Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M254.01,121.78l.11-.41c.34.08,1.53,1.16,2.21,3.71.69,2.56.69,3.98.69,4.04h-.42s0-1.42-.68-3.93c-.65-2.44-1.74-3.35-1.91-3.41Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M253.83,121.19c-.35-1.19-2.18-2.13-3.1-2.87-.93-.73-1.69-1.7-2.32-2.43-.63-.73-1.37-.92-1.37-.92l6.78,6.22Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M246.99,115.17l.1-.41s.82.21,1.48.99l.26.31c.58.69,1.24,1.47,2.02,2.09.22.18.5.37.8.57.93.64,2.09,1.43,2.38,2.41l-.41.12c-.24-.83-1.33-1.57-2.21-2.18-.3-.21-.59-.4-.82-.59-.82-.65-1.52-1.48-2.09-2.15l-.26-.31c-.57-.67-1.25-.85-1.26-.85Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M258.29,113.04c-1.3,2.29-2.28,3.21-2.85,4.6-.56,1.39-1.3,3.55-1.3,3.55l4.15-8.16Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M253.94,121.13s.75-2.19,1.31-3.57c.31-.77.74-1.39,1.29-2.18.46-.66.98-1.41,1.57-2.45l.37.21c-.6,1.06-1.13,1.82-1.59,2.48-.53.76-.95,1.36-1.24,2.09-.56,1.37-1.29,3.52-1.3,3.54l-.4-.14Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                    </g>
                    </g>
                </g>
            </g>
            <g id="optBed4" data-option="optBed4" style={{display: active.optBed4 ? 'block' : 'none'}} fill="#CC0001">
                <g id="opt-bed-4">
                    <polygon points="1004.74 622.81 850.97 622.81 839.51 622.81 840.01 551.77 756.75 551.77 756.75 537.82 756.75 307.2 1004.74 307.2 1004.74 622.81" fill="#efefef"/>
                    <rect x="756.84" y="544.88" width="6.4" height="7.73" fill="#425563"/>
                    <polygon points="799.96 432.1 799.96 458.56 756.84 458.56 756.84 450.83 791.44 450.83 791.44 432.1 799.96 432.1" fill="#425563"/>
                    <rect x="791.44" y="305.82" width="8.52" height="21.05" fill="#425563"/>
                    <rect x="794.46" y="375.17" width="3.02" height="56.93" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="795.98" y="326.87" width="3.02" height="48.3" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="805.75" y="544.88" width="36.53" height="7.73" fill="#425563"/>
                    <rect x="837.76" y="517.07" width="4.52" height="58.87" fill="#425563"/>
                    <rect x="837.76" y="617.13" width="4.52" height="5.68" fill="#425563"/>
                    <rect x="841.35" y="612.89" width="43.72" height="5.68" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="743.32" y="520.18" width="43.72" height="5.68" transform="translate(242.16 1288.2) rotate(-90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="837.76" y="517.07" width="166.98" height="7.73" fill="#425563"/>
                    <path d="M885.07,612.89s-7.53-37.6-42.79-37.6" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="841.35" y="524.79" width="68.38" height="30.45" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                    <g id="sec-tub1" data-name="sec-tub">
                    <rect x="931.53" y="549.49" width="97.52" height="48.14" transform="translate(1553.86 -406.73) rotate(90)" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <rect x="931.53" y="549.49" width="97.52" height="48.14" transform="translate(1553.86 -406.73) rotate(90)" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M950.92,553.29h70.92c2.76,0,5,2.24,5,5v29.29c0,2.76-2.24,5-5,5h-72.96c-6.79,0-12.3-5.51-12.3-12.3v-12.66c0-7.91,6.42-14.34,14.34-14.34Z" transform="translate(1554.64 -408.78) rotate(90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <line x1="956.23" y1="524.79" x2="956.23" y2="622.32" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    </g>
                    <circle cx="980.56" cy="608.31" r="1.55" fill="#425563"/>
                    <polyline points="981.19 622.32 984.13 614.58 976.39 614.58 979.51 622.81" fill="#425563"/>
                    <g id="toilet5" data-name="toilet">
                    <path d="M936.57,537.89l.79,2.25c.26,1.32.79,2.47,1.59,3.44.44.53.84,1.06,1.19,1.59,1.5,2.73,2.2,5.6,2.12,8.6-.09,3.09-.88,5.91-2.38,8.46-1.5,2.56-3.61,4.63-6.35,6.21-1.67.62-3.31.62-4.89,0-.62-.26-1.15-.57-1.59-.93-2.56-1.94-4.45-4.28-5.69-7.01-1.23-2.73-1.72-5.6-1.45-8.6.26-3,1.28-5.77,3.04-8.33h.13c.79-.97,1.32-2.07,1.59-3.31l.93-2.38h-5.69c-.53,0-1.01-.18-1.45-.53-.26-.26-.48-.66-.66-1.19l-.53-8.86c0-.62.22-1.19.66-1.72.26-.35.66-.62,1.19-.79h23.67c.62.18,1.1.44,1.45.79.35.53.53,1.1.53,1.72l-.53,8.86c-.09.53-.31.93-.66,1.19-.44.35-.93.53-1.45.53h-5.55s-10.98,0-10.98,0" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M929.3,566.85c1.15.35,2.29.35,3.44,0,2.47-1.41,4.36-3.31,5.69-5.69,1.32-2.2,2.03-4.67,2.12-7.41,0-2.64-.66-5.2-1.98-7.67-.88-1.5-1.94-2.82-3.17-3.97-.18-.18-.44-.26-.79-.26h-7.14c-.26,0-.53.09-.79.26-2.03,1.85-3.44,4.06-4.23,6.61-.88,2.56-1.06,5.11-.53,7.67.44,2.64,1.59,5.02,3.44,7.14,1.15,1.32,2.47,2.42,3.97,3.31Z" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <line x1="944.24" y1="536.17" x2="917.79" y2="536.17" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    </g>
                    <g id="sink6" data-name="sink">
                    <path d="M868,538.85c.15-1.41.67-2.67,1.56-3.79l-3.23-.56c-.52,1.34-.82,2.78-.89,4.34.07,2.89,1.11,5.31,3.12,7.24,1.93,2,4.34,3.04,7.24,3.12,2.97-.07,5.42-1.11,7.35-3.12,2-1.93,3.04-4.34,3.12-7.24-.07-2.97-1.11-5.42-3.12-7.35-1.93-2-4.38-3.04-7.35-3.12-2.89.07-5.31,1.11-7.24,3.12-.89.89-1.63,1.89-2.23,3.01,2.89-.89,5.86-1.34,8.91-1.34l-.33-2v-.11s0-.11,0-.11c0-.22.11-.41.33-.56.22-.22.45-.3.67-.22.22,0,.45.07.67.22.15.22.22.45.22.67s-.11.45-.33.67v1.45c2.97,0,5.9.45,8.8,1.34l-3.12.56c1.11,1.41,1.67,3.01,1.67,4.79s-.56,3.41-1.67,4.9c-.96,1.19-2.08,2.04-3.34,2.56-1.26.52-2.6.67-4.01.45-1.41-.15-2.67-.67-3.79-1.56-1.19-.96-2.04-2.08-2.56-3.34s-.67-2.6-.45-4.01Z" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M864.21,538.85c.07,2.15.59,4.08,1.56,5.79,1.04,1.78,2.45,3.19,4.23,4.23,1.71.96,3.64,1.48,5.79,1.56,2.23-.07,4.19-.59,5.9-1.56,1.78-1.04,3.19-2.45,4.23-4.23.96-1.71,1.48-3.64,1.56-5.79-.07-2.15-.59-4.12-1.56-5.9-1.04-1.78-2.45-3.15-4.23-4.12-1.71-1.04-3.67-1.6-5.9-1.67-2.15.07-4.08.63-5.79,1.67-1.78.96-3.19,2.34-4.23,4.12-.96,1.78-1.48,3.75-1.56,5.9Z" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M878.24,532.62h1.56c.15-.07.26-.19.33-.33-.07-.22-.19-.33-.33-.33h-1.45s-.67,0-.67,0c-.22,0-.33.11-.33.33,0,.15.11.26.33.33h.56c-.07.15-.19.26-.33.33-.37.15-.71,0-1-.45-.07-.45.07-.78.45-1,.45-.15.78,0,1,.45" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M882.14,535.06h-.11c-1.86-.37-3.71-.59-5.57-.67v3.12s-.33.22-.33.22h-.56s-.33-.22-.33-.22v-3.12c-1.93.07-3.82.3-5.68.67" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M874.9,538.85c.07.52.37.82.89.89.59-.07.93-.37,1-.89-.07-.59-.41-.93-1-1-.52.07-.82.41-.89,1Z" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <line x1="875.23" y1="534.4" x2="875.23" y2="533.17" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <line x1="876.46" y1="533.17" x2="876.46" y2="534.4" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M876.46,531.72l.22-.89c-.22-.22-.52-.37-.89-.45-.3.07-.59.3-.89.67" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M876.79,531.06c-.07-.07-.11-.15-.11-.22" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M873.23,532.62c.3.37.63.48,1,.33.45-.22.59-.56.45-1-.22-.45-.56-.59-1-.45-.15.07-.3.22-.45.45h.78c.15,0,.26.11.33.33-.07.15-.19.26-.33.33h-.78s-1.34,0-1.34,0c-.22-.07-.33-.19-.33-.33,0-.22.11-.33.33-.33h1.34" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    </g>
                    <path d="M768.02,501.16s38.53,9.15,38.53,43.72" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <g id="Names3" data-name="Names">
                    <text transform="translate(872.52 488.84)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">Bedroom 4</tspan></text>
                    <text transform="translate(877.3 586.71)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">Bathroom 4</tspan></text>
                    </g>
                    <g id="Full_bed3" data-name="Full_bed" filter="url(#drop-shadow-25)">
                    <g>
                        <path d="M909.95,353.01h69.72c2.32,0,4.2,1.88,4.2,4.2v96.06c0,.44-.35.79-.79.79h-76.29c-.57,0-1.04-.47-1.04-1.04v-95.81c0-2.32,1.88-4.2,4.2-4.2Z" transform="translate(1348.34 -541.27) rotate(90)" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M894.04,441.63v-75.89c0-.87.55-1.57,1.23-1.57h96.04c2.35,0,4.26,2.44,4.26,5.44v67.86c0,3-1.91,5.44-4.26,5.44h-96.28c-.55,0-1-.57-1-1.27ZM995.09,369.6c0-2.66-1.7-4.83-3.78-4.83h-96.04c-.42,0-.75.43-.75.96v75.89c0,.37.23.66.52.66h96.28c2.08,0,3.78-2.17,3.78-4.83v-67.86Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="953.72" y="398.91" width="82.83" height="8.93" rx="2.63" ry="2.63" transform="translate(1398.51 -591.76) rotate(90)" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M990.43,441.58v-76.41c0-1.94,1.23-3.51,2.75-3.51h3.9c1.52,0,2.75,1.58,2.75,3.51v76.41c0,1.94-1.23,3.51-2.75,3.51h-3.9c-1.52,0-2.75-1.58-2.75-3.51ZM999.36,365.17c0-1.6-1.02-2.9-2.27-2.9h-3.9c-1.25,0-2.27,1.3-2.27,2.9v76.41c0,1.6,1.02,2.9,2.27,2.9h3.9c1.25,0,2.27-1.3,2.27-2.9v-76.41Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M948.99,363.57c-4.55-.43-31.88-1.08-35.64-.43-3.77.65-15.39-2.16-15.23.22.16,2.37-1.41,33.24-2.04,40.36-.63,7.12-2.04,22.44-2.83,27.19-.79,4.75-.47,12.73.79,13.16,1.26.43,52.92.22,55.9-.65,2.98-.86-.94-79.85-.94-79.85Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M892.58,436.94c0-2.16.15-4.4.43-6.11.87-5.25,2.5-23.55,2.82-27.16.63-7.13,2.18-37.99,2.04-40.3-.02-.25.05-.47.19-.65.74-.95,3.62-.71,8.26-.22,2.7.29,5.5.58,6.98.33,3.81-.65,31.08,0,35.69.43l.21.02v.27c.02.2,1,19.98,1.6,39.61,1.23,39.96-.27,40.4-.83,40.56-2.35.68-54.18,1.28-56.02.64-.96-.33-1.39-3.77-1.39-7.42ZM898.36,363.87c0,4.76-1.43,32.81-2.05,39.88-.32,3.62-1.96,21.94-2.83,27.22-.85,5.15-.34,12.48.61,12.81.62.2,13.12.26,27.28.15,12.8-.1,27-.37,28.5-.8.39-.16,1.58-3.51.46-40.06-.56-18.34-1.45-36.78-1.57-39.21-5.15-.44-31.65-1.06-35.39-.41-1.53.26-4.36-.04-7.09-.33-3.4-.36-7.25-.77-7.88.04-.05.07-.06.12-.05.17,0,.12.01.3.01.54Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M948.02,444.79c-.56-.66,1.14-16.19,1.08-28.3-.12-24.97-.87-52.48-.54-54.54.25-1.58,4.25-1.48,8.02-1.55,3.53-.06,6.82-.38,7.8.93,2.04,2.7,2.08,79.63-.65,82.84-1.21,1.42-4.29,1.25-7.26,1.39-3.77.18-7.49.36-8.45-.77Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M947.67,443.63c0-1.23.13-3.46.38-7.41.36-5.57.84-13.2.81-19.73-.06-11.6-.25-23.82-.4-33.64-.18-11.51-.31-19.82-.13-20.96.27-1.69,3.51-1.73,7.27-1.78h.99c.51-.02,1.02-.04,1.52-.05,3.1-.09,5.55-.15,6.46,1.06,1.49,1.96,1.82,36.01,1.32,58-.24,10.76-.79,23.87-1.98,25.28-1.08,1.26-3.45,1.34-5.97,1.42-.48.01-.96.03-1.44.05-3.9.19-7.59.37-8.63-.85h0c-.13-.15-.19-.53-.19-1.38ZM949.34,417.12c0,6.42-.47,13.75-.82,19.15-.26,4.01-.5,7.79-.33,8.31.92,1.03,4.82.84,8.26.67.48-.02.97-.04,1.45-.05,2.42-.08,4.72-.15,5.66-1.26.3-.36,1.33-3.21,1.83-24.84.58-25.4-.05-56.06-1.19-57.56-.77-1.02-3.36-.95-6.11-.87-.5.01-1.01.03-1.52.04h-.99c-2.95.05-6.61.1-6.8,1.3-.17,1.07-.03,9.79.14,20.83.16,9.82.35,22.04.4,33.65,0,.21,0,.42,0,.64Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M986.74,375.65c-3.58-2.46-15.02-.18-16.8,0-7.67.76-3.58,54.39-1.26,56.11,1.99,1.48,18.84,1.73,19.63-1.51.39-1.6,1.29-15.37,1.16-28.25-.13-13.12-1.31-25.37-2.73-26.35Z" fill="#f2f0ed" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M965.23,398.24c0-6.09.3-11.83,1.06-16.05.78-4.38,2-6.68,3.64-6.84.27-.03.76-.1,1.41-.2,3.72-.57,12.42-1.9,15.53.24,1.7,1.17,2.74,14.58,2.86,26.61.13,12.8-.77,26.67-1.17,28.35-.13.53-.56.97-1.31,1.34-4.01,2-16.91,1.64-18.67.34-1.43-1.06-3.33-18.51-3.33-33.79ZM989.25,404.54c0-.85,0-1.69-.01-2.54-.15-14.63-1.47-25.3-2.61-26.08h0c-2.97-2.04-11.57-.73-15.24-.17-.66.1-1.15.18-1.43.2-1.4.14-2.48,2.28-3.21,6.37-2.75,15.4.55,48.06,2.05,49.17,1.71,1.27,14.33,1.58,18.26-.38.75-.37.97-.73,1.03-.96.37-1.54,1.17-13.64,1.17-25.62Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    </g>
                </g>
            </g>
        </g>
            {/* Hotspots: Mudroom Hotspot */}
      </g>
  </svg>

  );
}
// PLAN SVG
export function DillonD399SecondSVG({
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
            <g id="second_floor">
                <polygon id="BG" points="719.6 292.82 719.6 260.32 648.91 260.32 648.91 259.72 463.55 259.72 463.55 260.04 125.69 260.04 125.69 1179.43 465.53 1179.43 465.53 1147.14 643.63 1147.14 643.63 1180.08 1016.45 1180.08 1016.45 292.82 719.6 292.82" fill="#fff"/>
                <g id="flooring1" data-name="flooring">
                <g id="Flooring1" data-name="Flooring">
                    <rect x="195.39" y="567.6" width="20.78" height="21.53" fill="#bcd3dd"/>
                    <rect x="195.39" y="589.69" width="20.78" height="21.53" fill="#bcd3dd"/>
                    <rect x="216.92" y="567.84" width="20.78" height="21.53" fill="#bcd3dd"/>
                    <rect x="216.92" y="589.93" width="20.78" height="21.53" fill="#bcd3dd"/>
                    <rect x="195.39" y="611.9" width="20.78" height="21.53" fill="#bcd3dd"/>
                    <rect x="216.92" y="612.14" width="20.78" height="21.53" fill="#bcd3dd"/>
                    <rect x="152.33" y="567.74" width="20.78" height="21.53" fill="#bcd3dd"/>
                    <rect x="152.33" y="589.82" width="20.78" height="21.53" fill="#bcd3dd"/>
                    <rect x="173.86" y="567.66" width="20.78" height="21.53" fill="#bcd3dd"/>
                    <rect x="195.39" y="545.62" width="20.78" height="21.53" fill="#bcd3dd"/>
                    <rect x="216.92" y="545.86" width="20.78" height="21.53" fill="#bcd3dd"/>
                    <rect x="152.33" y="545.75" width="20.78" height="21.53" fill="#bcd3dd"/>
                    <rect x="173.86" y="545.67" width="20.78" height="21.53" fill="#bcd3dd"/>
                    <rect x="173.86" y="589.74" width="20.78" height="21.53" fill="#bcd3dd"/>
                    <rect x="152.33" y="612.04" width="20.78" height="21.53" fill="#bcd3dd"/>
                    <rect x="173.86" y="611.96" width="20.78" height="21.53" fill="#bcd3dd"/>
                </g>
                <rect x="219.6" y="760.47" width="20.78" height="22.68" transform="translate(-541.82 1001.8) rotate(-90)" fill="#bcd3dd"/>
                <rect x="242.87" y="760.47" width="20.78" height="22.68" transform="translate(-518.55 1025.07) rotate(-90)" fill="#bcd3dd"/>
                <rect x="196.43" y="760.47" width="20.78" height="22.68" transform="translate(-564.99 978.63) rotate(-90)" fill="#bcd3dd"/>
                <rect x="266.28" y="760.73" width="20.78" height="22.68" transform="translate(-495.4 1048.74) rotate(-90)" fill="#bcd3dd"/>
                <rect x="219.6" y="739" width="20.78" height="22.68" transform="translate(-520.35 980.33) rotate(-90)" fill="#bcd3dd"/>
                <rect x="219.6" y="717.47" width="20.78" height="22.68" transform="translate(-498.82 958.8) rotate(-90)" fill="#bcd3dd"/>
                <rect x="242.87" y="739" width="20.78" height="22.68" transform="translate(-497.08 1003.6) rotate(-90)" fill="#bcd3dd"/>
                <rect x="242.87" y="717.47" width="20.78" height="22.68" transform="translate(-475.55 982.07) rotate(-90)" fill="#bcd3dd"/>
                <rect x="266.28" y="739" width="20.78" height="22.68" transform="translate(-473.67 1027.01) rotate(-90)" fill="#bcd3dd"/>
                <rect x="196.43" y="739" width="20.78" height="22.68" transform="translate(-543.52 957.16) rotate(-90)" fill="#bcd3dd"/>
                <rect x="196.43" y="717.47" width="20.78" height="22.68" transform="translate(-521.99 935.63) rotate(-90)" fill="#bcd3dd"/>
                <rect x="266.28" y="717.73" width="20.78" height="22.68" transform="translate(-452.4 1005.74) rotate(-90)" fill="#bcd3dd"/>
                <rect x="312.33" y="760.47" width="20.78" height="22.68" transform="translate(-449.09 1094.54) rotate(-90)" fill="#bcd3dd"/>
                <rect x="335.61" y="760.47" width="20.78" height="22.68" transform="translate(-425.82 1117.81) rotate(-90)" fill="#bcd3dd"/>
                <rect x="289.17" y="760.47" width="20.78" height="22.68" transform="translate(-472.26 1071.37) rotate(-90)" fill="#bcd3dd"/>
                <rect x="359.02" y="760.73" width="20.78" height="22.68" transform="translate(-402.67 1141.48) rotate(-90)" fill="#bcd3dd"/>
                <rect x="312.33" y="739" width="20.78" height="22.68" transform="translate(-427.62 1073.06) rotate(-90)" fill="#bcd3dd"/>
                <rect x="312.33" y="717.47" width="20.78" height="22.68" transform="translate(-406.09 1051.54) rotate(-90)" fill="#bcd3dd"/>
                <rect x="335.61" y="739" width="20.78" height="22.68" transform="translate(-404.35 1096.34) rotate(-90)" fill="#bcd3dd"/>
                <rect x="335.61" y="717.47" width="20.78" height="22.68" transform="translate(-382.82 1074.81) rotate(-90)" fill="#bcd3dd"/>
                <rect x="359.02" y="739" width="20.78" height="22.68" transform="translate(-380.93 1119.75) rotate(-90)" fill="#bcd3dd"/>
                <rect x="289.17" y="739" width="20.78" height="22.68" transform="translate(-450.78 1049.9) rotate(-90)" fill="#bcd3dd"/>
                <rect x="219.6" y="696.19" width="20.78" height="22.68" transform="translate(-477.54 937.52) rotate(-90)" fill="#bcd3dd"/>
                <rect x="242.87" y="696.19" width="20.78" height="22.68" transform="translate(-454.27 960.79) rotate(-90)" fill="#bcd3dd"/>
                <rect x="196.43" y="696.19" width="20.78" height="22.68" transform="translate(-500.71 914.35) rotate(-90)" fill="#bcd3dd"/>
                <rect x="266.28" y="696.45" width="20.78" height="22.68" transform="translate(-431.12 984.46) rotate(-90)" fill="#bcd3dd"/>
                <rect x="224.84" y="679.96" width="10.29" height="22.68" transform="translate(-461.32 921.29) rotate(-90)" fill="#bcd3dd"/>
                <rect x="248.12" y="679.96" width="10.29" height="22.68" transform="translate(-438.04 944.56) rotate(-90)" fill="#bcd3dd"/>
                <rect x="271.53" y="679.96" width="10.29" height="22.68" transform="translate(-414.63 967.98) rotate(-90)" fill="#bcd3dd"/>
                <rect x="201.68" y="679.96" width="10.29" height="22.68" transform="translate(-484.48 898.13) rotate(-90)" fill="#bcd3dd"/>
                <rect x="312.33" y="696.19" width="20.78" height="22.68" transform="translate(-384.81 1030.25) rotate(-90)" fill="#bcd3dd"/>
                <rect x="335.61" y="696.19" width="20.78" height="22.68" transform="translate(-361.53 1053.53) rotate(-90)" fill="#bcd3dd"/>
                <rect x="289.17" y="696.19" width="20.78" height="22.68" transform="translate(-407.97 1007.09) rotate(-90)" fill="#bcd3dd"/>
                <rect x="359.02" y="696.45" width="20.78" height="22.68" transform="translate(-338.38 1077.2) rotate(-90)" fill="#bcd3dd"/>
                <rect x="317.58" y="679.96" width="10.29" height="22.68" transform="translate(-368.58 1014.03) rotate(-90)" fill="#bcd3dd"/>
                <rect x="340.85" y="679.96" width="10.29" height="22.68" transform="translate(-345.31 1037.3) rotate(-90)" fill="#bcd3dd"/>
                <rect x="364.26" y="679.96" width="10.29" height="22.68" transform="translate(-321.9 1060.71) rotate(-90)" fill="#bcd3dd"/>
                <rect x="294.41" y="679.96" width="10.29" height="22.68" transform="translate(-391.75 990.86) rotate(-90)" fill="#bcd3dd"/>
                <rect x="289.17" y="717.47" width="20.78" height="22.68" transform="translate(-429.26 1028.37) rotate(-90)" fill="#bcd3dd"/>
                <rect x="359.02" y="717.73" width="20.78" height="22.68" transform="translate(-359.67 1098.48) rotate(-90)" fill="#bcd3dd"/>
                <rect x="807.68" y="617.07" width="15.2" height="19.8" transform="translate(188.31 1442.26) rotate(-90)" fill="#bcd3dd"/>
                <rect x="827.24" y="619.67" width="21.1" height="23.04" transform="translate(206.6 1468.99) rotate(-90)" fill="#bcd3dd"/>
                <rect x="803.47" y="597.6" width="21.1" height="23.04" transform="translate(204.89 1423.14) rotate(-90)" fill="#bcd3dd"/>
                <rect x="803.47" y="575.74" width="21.1" height="23.04" transform="translate(226.76 1401.28) rotate(-90)" fill="#bcd3dd"/>
                <rect x="827.24" y="597.6" width="21.1" height="23.04" transform="translate(228.67 1446.92) rotate(-90)" fill="#bcd3dd"/>
                <rect x="827.24" y="576" width="21.1" height="23.04" transform="translate(250.27 1425.31) rotate(-90)" fill="#bcd3dd"/>
                <rect x="874.01" y="619.41" width="21.1" height="23.04" transform="translate(253.63 1515.49) rotate(-90)" fill="#bcd3dd"/>
                <rect x="897.65" y="619.41" width="21.1" height="23.04" transform="translate(277.27 1539.13) rotate(-90)" fill="#bcd3dd"/>
                <rect x="850.48" y="619.41" width="21.1" height="23.04" transform="translate(230.11 1491.96) rotate(-90)" fill="#bcd3dd"/>
                <rect x="921.42" y="619.67" width="21.1" height="23.04" transform="translate(300.78 1563.17) rotate(-90)" fill="#bcd3dd"/>
                <rect x="874.01" y="597.6" width="21.1" height="23.04" transform="translate(275.44 1493.69) rotate(-90)" fill="#bcd3dd"/>
                <rect x="874.01" y="575.74" width="21.1" height="23.04" transform="translate(297.3 1471.82) rotate(-90)" fill="#bcd3dd"/>
                <rect x="897.65" y="597.6" width="21.1" height="23.04" transform="translate(299.08 1517.32) rotate(-90)" fill="#bcd3dd"/>
                <rect x="897.65" y="575.74" width="21.1" height="23.04" transform="translate(320.94 1495.46) rotate(-90)" fill="#bcd3dd"/>
                <rect x="921.42" y="597.6" width="21.1" height="23.04" transform="translate(322.85 1541.1) rotate(-90)" fill="#bcd3dd"/>
                <rect x="850.48" y="597.6" width="21.1" height="23.04" transform="translate(251.91 1470.16) rotate(-90)" fill="#bcd3dd"/>
                <rect x="803.47" y="554.12" width="21.1" height="23.04" transform="translate(248.37 1379.66) rotate(-90)" fill="#bcd3dd"/>
                <rect x="827.24" y="554.39" width="21.1" height="23.04" transform="translate(271.89 1403.7) rotate(-90)" fill="#bcd3dd"/>
                <rect x="874.01" y="554.12" width="21.1" height="23.04" transform="translate(318.92 1450.21) rotate(-90)" fill="#bcd3dd"/>
                <rect x="897.65" y="554.12" width="21.1" height="23.04" transform="translate(342.55 1473.84) rotate(-90)" fill="#bcd3dd"/>
                <rect x="850.48" y="554.12" width="21.1" height="23.04" transform="translate(295.39 1426.68) rotate(-90)" fill="#bcd3dd"/>
                <rect x="921.42" y="554.39" width="21.1" height="23.04" transform="translate(366.07 1497.88) rotate(-90)" fill="#bcd3dd"/>
                <rect x="850.48" y="575.74" width="21.1" height="23.04" transform="translate(273.78 1448.29) rotate(-90)" fill="#bcd3dd"/>
                <rect x="921.42" y="576" width="21.1" height="23.04" transform="translate(344.45 1519.5) rotate(-90)" fill="#bcd3dd"/>
                <rect x="945.16" y="619.67" width="21.1" height="23.04" transform="translate(324.52 1586.9) rotate(-90)" fill="#bcd3dd"/>
                <rect x="968.94" y="619.94" width="21.1" height="23.04" transform="translate(348.03 1610.94) rotate(-90)" fill="#bcd3dd"/>
                <rect x="945.16" y="597.87" width="21.1" height="23.04" transform="translate(346.32 1565.1) rotate(-90)" fill="#bcd3dd"/>
                <rect x="945.16" y="576" width="21.1" height="23.04" transform="translate(368.19 1543.23) rotate(-90)" fill="#bcd3dd"/>
                <rect x="968.94" y="597.87" width="21.1" height="23.04" transform="translate(370.1 1588.88) rotate(-90)" fill="#bcd3dd"/>
                <rect x="827.14" y="662.95" width="21.1" height="23.04" transform="translate(163.23 1512.16) rotate(-90)" fill="#bcd3dd"/>
                <rect x="827.24" y="641.27" width="21.1" height="23.04" transform="translate(185 1490.59) rotate(-90)" fill="#bcd3dd"/>
                <rect x="874.01" y="662.95" width="21.1" height="23.04" transform="translate(210.09 1559.03) rotate(-90)" fill="#bcd3dd"/>
                <rect x="897.44" y="663.15" width="21.51" height="23.04" transform="translate(233.52 1582.87) rotate(-90)" fill="#bcd3dd"/>
                <rect x="850.48" y="662.95" width="21.1" height="23.04" transform="translate(186.57 1535.5) rotate(-90)" fill="#bcd3dd"/>
                <rect x="833.13" y="678.5" width="9.12" height="23.04" transform="translate(147.68 1527.71) rotate(-90)" fill="#bcd3dd"/>
                <rect x="877.09" y="681.4" width="9" height="17.1" transform="translate(191.64 1571.55) rotate(-90)" fill="#bcd3dd"/>
                <rect x="890.54" y="685.69" width="5.96" height="5.5" transform="translate(205.09 1581.96) rotate(-90)" fill="#bcd3dd"/>
                <rect x="895.1" y="687.28" width="5.6" height="2.44" transform="translate(209.4 1586.39) rotate(-90)" fill="#bcd3dd"/>
                <rect x="856.47" y="678.5" width="9.12" height="23.04" transform="translate(171.02 1551.05) rotate(-90)" fill="#bcd3dd"/>
                <rect x="921.42" y="663.34" width="21.1" height="23.04" transform="translate(257.11 1606.84) rotate(-90)" fill="#bcd3dd"/>
                <rect x="874.01" y="641.27" width="21.1" height="23.04" transform="translate(231.77 1537.36) rotate(-90)" fill="#bcd3dd"/>
                <rect x="897.65" y="641.27" width="21.1" height="23.04" transform="translate(255.4 1560.99) rotate(-90)" fill="#bcd3dd"/>
                <rect x="921.42" y="641.27" width="21.1" height="23.04" transform="translate(279.18 1584.77) rotate(-90)" fill="#bcd3dd"/>
                <rect x="850.48" y="641.27" width="21.1" height="23.04" transform="translate(208.24 1513.83) rotate(-90)" fill="#bcd3dd"/>
                <rect x="945.16" y="663.35" width="21.1" height="23.04" transform="translate(280.85 1630.58) rotate(-90)" fill="#bcd3dd"/>
                <rect x="968.94" y="663.61" width="21.1" height="23.04" transform="translate(304.36 1654.62) rotate(-90)" fill="#bcd3dd"/>
                <rect x="945.16" y="641.54" width="21.1" height="23.04" transform="translate(302.65 1608.77) rotate(-90)" fill="#bcd3dd"/>
                <rect x="968.94" y="641.54" width="21.1" height="23.04" transform="translate(326.43 1632.55) rotate(-90)" fill="#bcd3dd"/>
                <rect x="945.16" y="554.39" width="21.1" height="23.04" transform="translate(389.8 1521.62) rotate(-90)" fill="#bcd3dd"/>
                <rect x="968.94" y="554.65" width="21.1" height="23.04" transform="translate(413.32 1545.66) rotate(-90)" fill="#bcd3dd"/>
                <rect x="968.94" y="576.27" width="21.1" height="23.04" transform="translate(391.7 1567.27) rotate(-90)" fill="#bcd3dd"/>
                </g>
                <g id="Highlights1" data-name="Highlights">
                <rect x="917.57" y="667.67" width="71.22" height="107.84" transform="translate(1674.76 -231.59) rotate(90)" fill="#dde7ed"/>
                <rect x="833.49" y="686.24" width="63.96" height="80" transform="translate(1591.71 -139.23) rotate(90)" fill="#dde7ed"/>
                <rect x="889.4" y="691.96" width="14.65" height="5.72" fill="#dde7ed"/>
                </g>
                <g id="struct1" data-name="struct">
                <polygon points="584.39 694.55 584.39 702.49 573.26 702.49 573.26 708.35 456.99 708.35 456.99 689.44 573.26 689.44 573.26 694.55 584.39 694.55" fill="#425563"/>
                <rect x="470.98" y="624.92" width="98.88" height="7.7" fill="#fff" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="470.98" y="617.13" width="179.77" height="7.7" fill="#425563"/>
                <rect x="237.44" y="537.54" width="7.81" height="7.92" fill="#425563"/>
                <rect x="389.07" y="540.44" width="84.65" height="4.07" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="473.72" y="540.44" width="6.89" height="4.07" fill="#425563"/>
                <rect x="561.16" y="540.44" width="6.89" height="4.07" fill="#425563"/>
                <rect x="480.61" y="540.44" width="80.56" height="4.07" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <polyline points="650.75 540.44 568.05 540.44 567.71 540.44 567.71 544.51 568.05 544.51 650.75 544.51" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="233.21" y="537.54" width="17.69" height="7.92" fill="#425563"/>
                <rect x="146.26" y="537.54" width="47.78" height="7.92" fill="#425563"/>
                <polygon points="222.39 1053.2 222.39 1063.72 142.73 1063.72 142.73 1026.87 152.22 1026.87 152.22 1053.2 222.39 1053.2" fill="#425563"/>
                <polygon points="480.96 860.48 480.96 868.22 475.17 868.22 475.17 1068.78 465.88 1068.78 465.88 1027.98 435.65 1027.98 435.65 1017.45 465.88 1017.45 465.88 868.22 363.3 868.22 363.3 1017.45 391.65 1017.45 391.65 1027.98 363.3 1027.98 363.3 1063.72 284.39 1063.72 284.39 1053.2 351.73 1053.2 351.73 837.04 363.3 837.04 363.3 860.48 465.88 860.48 465.88 837.04 475.17 837.04 475.17 860.48 480.96 860.48" fill="#425563"/>
                <polygon points="534.34 1122.26 534.34 1133 465.88 1133 465.88 1106.18 475.17 1106.18 475.17 1122.26 534.34 1122.26" fill="#425563"/>
                <rect x="142.75" y="523.66" width="9.74" height="71.11" fill="#425563"/>
                <polygon points="222.37 292.03 222.37 303.19 152.55 303.19 152.55 469.07 142.81 469.07 142.81 292.01 152.55 292.01 152.55 292.03 222.37 292.03" fill="#425563"/>
                <polygon points="811.09 293.33 811.09 303.6 721.8 303.6 721.8 535.56 726.01 535.56 726.01 545.23 721.8 545.23 721.8 556.89 714.21 556.89 714.21 545.23 662.3 545.23 662.3 550.21 650.75 550.21 650.75 537.45 714.21 537.45 714.21 270.02 682.06 270.02 682.06 255.8 727 255.8 727 293.33 811.09 293.33" fill="#425563"/>
                <polygon points="1016.67 293.33 1016.67 318.77 1006.41 318.77 1006.41 303.6 916.65 303.6 916.65 293.33 1016.67 293.33" fill="#425563"/>
                <rect x="1006.41" y="355.17" width="10.27" height="139.02" fill="#425563"/>
                <rect x="472.33" y="255.8" width="28.08" height="14.22" fill="#425563"/>
                <rect x="602.6" y="255.8" width="28.08" height="14.22" fill="#425563"/>
                <polygon points="1006.41 694.66 1006.41 555.19 958.67 555.19 958.67 549.27 1006.41 549.27 1006.41 530.49 1016.67 530.49 1016.68 694.66 1006.41 694.66" fill="#425563"/>
                <rect x="462.83" y="700.17" width="109.63" height="5.87" transform="translate(1035.29 1406.21) rotate(180)" fill="#fff" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="462.83" y="689.95" width="109.63" height="5.87" transform="translate(1035.29 1385.78) rotate(180)" fill="#fff" stroke="#425563" stroke-miterlimit="10"/>
                <polyline points="462.83 705.82 462.83 706.04 462.83 708.35 462.83 757.64" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <polyline points="477.13 705.82 477.13 706.04 477.13 708.35 477.13 757.64" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <polyline points="491.43 705.82 491.43 706.04 491.43 708.35 491.43 757.64" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <polyline points="507.6 705.82 507.6 706.04 507.6 708.35 507.6 757.64" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <polyline points="521.1 705.82 521.1 706.04 521.1 708.35 521.1 757.64" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <polyline points="535.06 705.82 535.06 706.04 535.06 708.35 535.06 757.64" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <polyline points="551.48 705.82 551.48 706.04 551.48 708.35 551.48 757.64" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <polyline points="565.26 705.82 565.26 706.04 565.26 708.35 565.26 757.64" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="477.13" y1="689.95" x2="477.13" y2="632.71" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="491.43" y1="689.95" x2="491.43" y2="632.71" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="507.6" y1="689.95" x2="507.6" y2="632.71" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="521.1" y1="689.95" x2="521.1" y2="632.71" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="535.06" y1="689.95" x2="535.06" y2="632.71" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="551.48" y1="689.95" x2="551.48" y2="632.71" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="565.26" y1="689.95" x2="565.26" y2="632.71" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <g>
                    <rect x="420.96" y="255.8" width="51.37" height="14.22" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="420.96" y="264.59" width="51.37" height="5.43" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <g>
                    <rect x="500.42" y="255.8" width="102.19" height="14.22" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="500.42" y="264.59" width="102.19" height="5.43" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <g>
                    <rect x="630.68" y="255.8" width="51.09" height="14.22" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="630.68" y="264.59" width="51.09" height="5.43" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <g>
                    <rect x="811.09" y="293.75" width="105.56" height="9.35" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="811.09" y="298.43" width="105.56" height="4.68" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <g>
                    <rect x="993.44" y="331.95" width="36.65" height="9.8" transform="translate(1348.62 -674.92) rotate(90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="990.99" y="334.4" width="36.65" height="4.9" transform="translate(1346.17 -672.47) rotate(90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <g>
                    <rect x="993.44" y="507.62" width="36.65" height="9.8" transform="translate(1524.29 -499.25) rotate(90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="990.99" y="510.07" width="36.65" height="4.9" transform="translate(1521.84 -496.8) rotate(90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <g>
                    <rect x="1006.87" y="694.66" width="9.8" height="52.84" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="1006.87" y="694.66" width="4.9" height="52.84" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <g>
                    <rect x="534.44" y="1122.38" width="61.04" height="10.62" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="534.44" y="1127.69" width="61.04" height="5.31" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <g>
                    <rect x="452.29" y="1082.1" width="37.26" height="10.62" transform="translate(1558.33 616.49) rotate(90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="449.63" y="1084.76" width="37.26" height="5.31" transform="translate(1555.68 619.15) rotate(90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <g>
                    <rect x="391.85" y="1017.93" width="43.8" height="10.62" transform="translate(827.5 2046.47) rotate(-180)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="391.85" y="1017.93" width="43.8" height="5.31" transform="translate(827.5 2041.16) rotate(-180)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <g>
                    <rect x="222.39" y="1053.1" width="62" height="10.62" transform="translate(506.78 2116.82) rotate(-180)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="222.39" y="1053.1" width="62" height="5.31" transform="translate(506.78 2111.52) rotate(-180)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <g>
                    <rect x="120.51" y="996.71" width="54.17" height="10.62" transform="translate(1149.61 854.42) rotate(90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="117.86" y="999.36" width="54.17" height="5.31" transform="translate(1146.96 857.08) rotate(90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <g>
                    <rect x="129.92" y="607.13" width="35.36" height="10.62" transform="translate(760.04 464.85) rotate(90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="127.27" y="609.79" width="35.36" height="5.31" transform="translate(757.39 467.5) rotate(90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <g>
                    <rect x="120.3" y="491.06" width="54.59" height="10.62" transform="translate(643.96 348.77) rotate(90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="117.65" y="493.71" width="54.59" height="5.31" transform="translate(641.31 351.42) rotate(90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <g>
                    <rect x="222.06" y="292.01" width="88.04" height="10.62" transform="translate(532.16 594.64) rotate(-180)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="222.06" y="292.01" width="88.04" height="5.31" transform="translate(532.16 589.33) rotate(-180)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <rect x="766.79" y="622.25" width="51.5" height="15.47" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="681.84" y="622.25" width="79.17" height="15.47" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="924.04" y="603.82" width="131.42" height="33.31" transform="translate(1610.23 -369.27) rotate(90)" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="257.03" y="748.43" width="124.26" height="32.87" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="244.91" y="657.37" width="57.85" height="23.66" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="244.91" y="632.31" width="57.85" height="17.35" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="171.73" y="632.71" width="65.71" height="52.32" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="277.74" y="572.62" width="71.67" height="17.35" transform="translate(894.87 267.72) rotate(90)" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="146.48" y="551.88" width="42.53" height="29.69" transform="translate(734.47 398.98) rotate(90)" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="152.22" y="789.52" width="128.61" height="17.35" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="542.29" y="868.83" width="108.9" height="17.35" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                <polygon points="819.42 738.88 819.42 755.96 658.56 755.96 658.56 642.26 676.06 642.26 676.06 738.88 819.42 738.88" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="210.69" y="696.71" width="39.49" height="3.37" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="342.69" y="695.85" width="39.49" height="4.24" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="310.62" y="795.05" width="41.91" height="4.24" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="533.48" y="773.24" width="41.91" height="4.24" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="173.54" y="823.95" width="50.04" height="2.12" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="204.36" y="826.95" width="50.04" height="2.12" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="553.95" y="903.64" width="50.04" height="2.12" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="584.78" y="906.64" width="50.04" height="2.12" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="461.15" y="886.85" width="43.86" height="4.24" transform="translate(-405.89 1372.05) rotate(-90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="257.64" y="699.4" width="34.78" height="4.24" transform="translate(576.61 10.99) rotate(45)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="243.32" y="524.49" width="42.32" height="4.24" transform="translate(-294.9 341.25) rotate(-45)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="354.99" y="517.16" width="42.32" height="4.24" transform="translate(-143.13 895.44) rotate(-90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="379.16" y="647.41" width="48.92" height="4.24" transform="translate(229.73 1394.22) rotate(-135)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="720.37" y="599.24" width="46.42" height="4.24" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="725.31" y="536.04" width="67.28" height="8.52" fill="none" stroke="#425563" stroke-dasharray="7 6" stroke-miterlimit="10"/>
                <rect x="650.75" y="549.34" width="11.28" height="58.89" fill="none" stroke="#425563" stroke-dasharray="7 6" stroke-miterlimit="10"/>
                <rect x="779.89" y="645.83" width="39.88" height="4.23" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="872.11" y="611.18" width="39.88" height="4.23" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="915.4" y="554.77" width="4.23" height="43.4" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="542.29" y="868.83" width=".36" height="17.35" fill="#425563"/>
                <rect x="553.95" y="903.64" width=".48" height="2.12" fill="#425563"/>
                <rect x="650.75" y="868.83" width=".44" height="17.35" fill="#425563"/>
                <rect x="658.56" y="642.26" width="17.5" height=".39" fill="#425563"/>
                <rect x="681.84" y="622.25" width=".54" height="15.47" fill="#425563"/>
                <rect x="720.37" y="603.18" width="1.43" height=".3" fill="#425563"/>
                <rect x="818.29" y="738.88" width="1.13" height="17.08" fill="#425563"/>
                <rect x="818.29" y="645.83" width="1.48" height="1.88" fill="#425563"/>
                <polygon points="873.26 613.91 872.11 615.06 872.11 612.76 873.26 613.91" fill="#425563"/>
                <rect x="915.4" y="554.77" width=".75" height=".42" fill="#425563"/>
                <rect x="211.34" y="562.62" width="42.01" height="4.66" transform="translate(797.29 332.61) rotate(90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="209.42" y="619.69" width="30.23" height="2.71" transform="translate(504.91 23.13) rotate(45)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <polygon points="388.98 736.92 388.98 789.28 363.3 789.28 363.3 795.37 351.73 795.37 351.73 789.28 288.57 789.28 288.57 830.7 259.52 830.7 259.52 822.95 280.83 822.95 280.83 789.28 152.22 789.28 152.22 822.95 173.92 822.95 173.92 830.7 152.22 830.7 152.22 974.93 142.73 974.93 142.73 630.12 152.22 630.12 152.22 632.31 171.74 632.31 171.74 685.16 237.44 685.16 237.44 545.46 245.25 545.46 245.25 649.66 302.9 649.66 302.9 624.83 302.12 624.83 302.12 617.13 322.3 617.13 322.3 545.46 290.64 545.46 290.64 537.54 335.83 537.54 335.83 545.46 330.11 545.46 330.11 617.13 388.76 617.13 388.76 633.74 380.95 633.74 380.95 624.83 308.77 624.83 308.77 685.16 380.86 685.16 380.86 679.29 388.97 679.29 388.97 696.99 380.86 696.99 380.86 691.03 296.59 691.03 296.59 685.16 302.9 685.16 302.9 657.4 245.25 657.4 245.25 685.16 262.97 685.16 262.97 689.44 256.78 689.44 256.78 696.85 245.25 696.85 245.25 689.44 152.22 689.44 152.22 781.54 249.03 781.54 249.03 736.41 256.78 736.41 256.78 781.54 381.29 781.54 381.29 736.92 388.98 736.92" fill="#425563"/>
                <polygon points="420.96 255.8 420.96 270.02 389.07 270.02 389.07 545.09 373.28 545.09 373.28 537.54 381.47 537.54 381.47 303.19 310.1 303.19 310.1 292.03 372.68 292.03 372.68 255.8 420.96 255.8" fill="#425563"/>
                <path d="M911.99,611.18s3.24-9.38-12.15-24.78" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <path d="M919.63,598.17s39.04-4.2,39.04-42.98" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <path d="M485.2,910.9s39.14-8.55,39.14-42.68" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <path d="M310.62,799.29s7.26,38.84,41.11,38.84" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <path d="M288.83,712.32s9.26-7.7,9.26-21.29" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <path d="M342.69,700.09s5.88,36.83,38.6,36.83" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <path d="M419.42,668.32s-15.84,12.71-30.44,12.71" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <path d="M374.04,498.12s-39.69,2.32-39.69,39.42" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <path d="M230.01,585.95s-37.31-8-37.31-40.49" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <path d="M779.89,650.06s.66,35.44,38.4,35.44" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <path d="M766.79,599.24s-1.5-42.35-44.99-42.35" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <path d="M210.69,700.09s-2.73,36.32,38.34,36.32" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <path d="M280.94,513.14s11.48,10.25,10.5,24.6" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <polygon points="1016.68 747.5 1016.68 761.81 1016.04 761.81 1016.04 767.65 662.47 767.65 662.47 1133 595.48 1133 595.48 1122.26 650.75 1122.26 650.75 909.45 639.01 909.45 639.01 901.71 650.75 901.71 650.75 886.18 651.19 886.18 651.19 868.83 650.75 868.83 650.75 868.22 542.65 868.22 542.65 868.83 542.29 868.83 542.29 886.18 542.65 886.18 542.65 901.71 554.43 901.71 554.43 903.64 553.95 903.64 553.95 905.76 554.43 905.76 554.43 909.45 534.64 909.45 534.64 868.22 523.14 868.22 523.14 860.48 527.61 860.48 527.61 808.6 534.29 808.6 534.29 860.48 650.75 860.48 650.75 765.72 534.29 765.72 534.29 773.83 527.61 773.83 527.61 765.72 456.99 765.72 456.99 757.64 650.75 757.64 650.75 608.23 662.3 608.23 662.3 614.06 714.21 614.06 714.21 603.18 720.37 603.18 720.37 603.48 721.8 603.48 721.8 614.06 794.53 614.06 794.53 545.23 792.59 545.23 792.59 535.56 802.45 535.56 802.45 549.27 916.15 549.27 916.15 554.77 915.4 554.77 915.4 555.19 906.84 555.19 906.84 579.42 906.83 579.42 899.84 586.4 894.69 581.25 898.96 576.98 898.96 555.19 802.45 555.19 802.45 614.06 861.54 614.06 867.47 608.12 872.11 612.76 872.11 615.06 864.93 622.25 826.21 622.25 826.21 647.71 819.77 647.71 819.77 645.83 818.29 645.83 818.29 622.25 766.79 622.25 766.79 639.86 761.16 639.86 761.16 622.25 681.84 622.25 681.84 637.72 682.38 637.72 682.38 642.65 676.06 642.65 676.06 642.26 658.56 642.26 658.56 755.96 819.42 755.96 819.42 738.88 818.29 738.88 818.29 685.5 826.21 685.5 826.21 755.96 1006.41 755.96 1006.41 747.5 1016.68 747.5" fill="#425563"/>
                <path d="M575.38,777.47s1.07,32.13-41.09,32.13" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <path d="M212.89,611.31s-5.44,9.38-1.53,21.39" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <g id="sec-tub">
                    <rect x="128.29" y="713.04" width="91.4" height="45.12" transform="translate(-561.61 909.59) rotate(-90)" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <rect x="128.29" y="713.04" width="91.4" height="45.12" transform="translate(-561.61 909.59) rotate(-90)" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M144.71,717.78h65.25c2.76,0,5,2.24,5,5v26.82c0,2.76-2.24,5-5,5h-67.29c-6.79,0-12.3-5.51-12.3-12.3v-10.19c0-7.91,6.42-14.34,14.34-14.34Z" transform="translate(-563.52 908.85) rotate(-90)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <line x1="196.55" y1="781.3" x2="196.55" y2="689.9" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <circle cx="173.74" cy="703.03" r="1.46" fill="#425563"/>
                <polyline points="173.15 689.9 170.4 697.16 177.65 697.16 174.72 689.44" fill="#425563"/>
                <g id="toilet2" data-name="toilet">
                    <path d="M216.52,767.73l-.82-2.33c-.27-1.37-.82-2.56-1.64-3.56-.46-.55-.87-1.1-1.23-1.64-1.55-2.83-2.28-5.8-2.19-8.91.09-3.2.91-6.12,2.47-8.77,1.55-2.65,3.75-4.8,6.58-6.44,1.74-.64,3.43-.64,5.07,0,.64.27,1.19.59,1.64.96,2.65,2.01,4.61,4.43,5.89,7.26,1.28,2.83,1.78,5.8,1.51,8.91-.27,3.11-1.32,5.98-3.15,8.63h-.14c-.82,1-1.37,2.15-1.64,3.43l-.96,2.47h5.89c.55,0,1.05.18,1.51.55.27.27.5.69.69,1.23l.55,9.18c0,.64-.23,1.23-.69,1.78-.27.37-.69.64-1.23.82h-24.53c-.64-.18-1.14-.46-1.51-.82-.37-.55-.55-1.14-.55-1.78l.55-9.18c.09-.55.32-.96.69-1.23.46-.37.96-.55,1.51-.55h5.76s11.37,0,11.37,0" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M224.06,737.72c-1.19-.37-2.38-.37-3.56,0-2.56,1.46-4.52,3.43-5.89,5.89-1.37,2.28-2.1,4.84-2.19,7.67,0,2.74.69,5.39,2.06,7.95.91,1.55,2.01,2.92,3.29,4.11.18.18.46.27.82.27h7.4c.27,0,.55-.09.82-.27,2.1-1.92,3.56-4.2,4.38-6.85.91-2.65,1.1-5.3.55-7.95-.46-2.74-1.64-5.21-3.56-7.4-1.19-1.37-2.56-2.51-4.11-3.43Z" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <line x1="208.57" y1="769.51" x2="235.98" y2="769.51" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g id="toilet3" data-name="toilet">
                    <path d="M815.57,575.54l2.33-.82c1.37-.27,2.56-.82,3.56-1.64.55-.46,1.1-.87,1.64-1.23,2.83-1.55,5.8-2.28,8.91-2.19,3.2.09,6.12.91,8.77,2.47,2.65,1.55,4.8,3.75,6.44,6.58.64,1.74.64,3.43,0,5.07-.27.64-.59,1.19-.96,1.64-2.01,2.65-4.43,4.61-7.26,5.89-2.83,1.28-5.8,1.78-8.91,1.51-3.11-.27-5.98-1.32-8.63-3.15v-.14c-1-.82-2.15-1.37-3.43-1.64l-2.47-.96v5.89c0,.55-.18,1.05-.55,1.51-.27.27-.69.5-1.23.69l-9.18.55c-.64,0-1.23-.23-1.78-.69-.37-.27-.64-.69-.82-1.23v-24.53c.18-.64.46-1.14.82-1.51.55-.37,1.14-.55,1.78-.55l9.18.55c.55.09.96.32,1.23.69.37.46.55.96.55,1.51v5.76s0,11.37,0,11.37" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M845.58,583.08c.37-1.19.37-2.38,0-3.56-1.46-2.56-3.43-4.52-5.89-5.89-2.28-1.37-4.84-2.1-7.67-2.19-2.74,0-5.39.69-7.95,2.06-1.55.91-2.92,2.01-4.11,3.29-.18.18-.27.46-.27.82v7.4c0,.27.09.55.27.82,1.92,2.1,4.2,3.56,6.85,4.38,2.65.91,5.3,1.1,7.95.55,2.74-.46,5.21-1.64,7.4-3.56,1.37-1.19,2.51-2.56,3.43-4.11Z" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <line x1="813.79" y1="567.59" x2="813.79" y2="595" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g id="toilet4" data-name="toilet">
                    <path d="M165.92,605.36l2.33-.82c1.37-.27,2.56-.82,3.56-1.64.55-.46,1.1-.87,1.64-1.23,2.83-1.55,5.8-2.28,8.91-2.19,3.2.09,6.12.91,8.77,2.47,2.65,1.55,4.8,3.75,6.44,6.58.64,1.74.64,3.43,0,5.07-.27.64-.59,1.19-.96,1.64-2.01,2.65-4.43,4.61-7.26,5.89-2.83,1.28-5.8,1.78-8.91,1.51-3.11-.27-5.98-1.32-8.63-3.15v-.14c-1-.82-2.15-1.37-3.43-1.64l-2.47-.96v5.89c0,.55-.18,1.05-.55,1.51-.27.27-.69.5-1.23.69l-9.18.55c-.64,0-1.23-.23-1.78-.69-.37-.27-.64-.69-.82-1.23v-24.53c.18-.64.46-1.14.82-1.51.55-.37,1.14-.55,1.78-.55l9.18.55c.55.09.96.32,1.23.69.37.46.55.96.55,1.51v5.76s0,11.37,0,11.37" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M195.92,612.9c.37-1.19.37-2.38,0-3.56-1.46-2.56-3.43-4.52-5.89-5.89-2.28-1.37-4.84-2.1-7.67-2.19-2.74,0-5.39.69-7.95,2.06-1.55.91-2.92,2.01-4.11,3.29-.18.18-.27.46-.27.82v7.4c0,.27.09.55.27.82,1.92,2.1,4.2,3.56,6.85,4.38,2.65.91,5.3,1.1,7.95.55,2.74-.46,5.21-1.64,7.4-3.56,1.37-1.19,2.51-2.56,3.43-4.11Z" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <line x1="164.14" y1="597.41" x2="164.14" y2="624.82" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g id="sink2" data-name="sink">
                    <path d="M293.43,764.8c-.18,1.74-.82,3.29-1.92,4.66l3.98.69c.64-1.65,1.01-3.43,1.1-5.35-.09-3.57-1.37-6.54-3.84-8.91-2.38-2.47-5.35-3.75-8.91-3.84-3.66.09-6.67,1.37-9.05,3.84-2.47,2.38-3.75,5.35-3.84,8.91.09,3.66,1.37,6.67,3.84,9.05,2.38,2.47,5.39,3.75,9.05,3.84,3.57-.09,6.54-1.37,8.91-3.84,1.1-1.1,2.01-2.33,2.74-3.7-3.57,1.1-7.22,1.65-10.97,1.65l.41,2.47v.14s0,.14,0,.14c0,.27-.14.5-.41.69-.27.27-.55.37-.82.27-.27,0-.55-.09-.82-.27-.18-.27-.27-.55-.27-.82s.14-.55.41-.82v-1.78c-3.66,0-7.27-.55-10.84-1.65l3.84-.69c-1.37-1.74-2.06-3.7-2.06-5.9s.69-4.21,2.06-6.03c1.19-1.46,2.56-2.51,4.11-3.15,1.55-.64,3.2-.82,4.94-.55,1.74.18,3.29.82,4.66,1.92,1.46,1.19,2.51,2.56,3.15,4.11s.82,3.2.55,4.94Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M298.09,764.8c-.09-2.65-.73-5.03-1.92-7.13-1.28-2.19-3.02-3.93-5.21-5.21-2.1-1.19-4.48-1.83-7.13-1.92-2.74.09-5.17.73-7.27,1.92-2.19,1.28-3.93,3.02-5.21,5.21-1.19,2.1-1.83,4.48-1.92,7.13.09,2.65.73,5.07,1.92,7.27,1.28,2.19,3.02,3.89,5.21,5.07,2.1,1.28,4.53,1.97,7.27,2.06,2.65-.09,5.03-.78,7.13-2.06,2.19-1.19,3.93-2.88,5.21-5.07,1.19-2.19,1.83-4.62,1.92-7.27Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M280.81,772.48h-1.92c-.18.09-.32.23-.41.41.09.27.23.41.41.41h1.78s.82,0,.82,0c.27,0,.41-.14.41-.41,0-.18-.14-.32-.41-.41h-.69c.09-.18.23-.32.41-.41.46-.18.87,0,1.23.55.09.55-.09.96-.55,1.23-.55.18-.96,0-1.23-.55" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M276.01,769.46h.14c2.29.46,4.57.73,6.86.82v-3.84s.41-.27.41-.27h.69s.41.27.41.27v3.84c2.38-.09,4.71-.37,6.99-.82" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M284.92,764.8c-.09-.64-.46-1.01-1.1-1.1-.73.09-1.14.46-1.23,1.1.09.73.5,1.14,1.23,1.23.64-.09,1.01-.5,1.1-1.23Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <line x1="284.51" y1="770.28" x2="284.51" y2="771.79" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <line x1="283" y1="771.79" x2="283" y2="770.28" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M283,773.58l-.27,1.1c.27.27.64.46,1.1.55.37-.09.73-.37,1.1-.82" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M282.59,774.4c.09.09.14.18.14.27" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M286.98,772.48c-.37-.46-.78-.59-1.23-.41-.55.27-.73.69-.55,1.23.27.55.69.73,1.23.55.18-.09.37-.27.55-.55h-.96c-.18,0-.32-.14-.41-.41.09-.18.23-.32.41-.41h.96s1.65,0,1.65,0c.27.09.41.23.41.41,0,.27-.14.41-.41.41h-1.65" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                </g>
                <g id="sink3" data-name="sink">
                    <path d="M361.4,764.8c-.18,1.74-.82,3.29-1.92,4.66l3.98.69c.64-1.65,1.01-3.43,1.1-5.35-.09-3.57-1.37-6.54-3.84-8.91-2.38-2.47-5.35-3.75-8.91-3.84-3.66.09-6.67,1.37-9.05,3.84-2.47,2.38-3.75,5.35-3.84,8.91.09,3.66,1.37,6.67,3.84,9.05,2.38,2.47,5.39,3.75,9.05,3.84,3.57-.09,6.54-1.37,8.91-3.84,1.1-1.1,2.01-2.33,2.74-3.7-3.57,1.1-7.22,1.65-10.97,1.65l.41,2.47v.14s0,.14,0,.14c0,.27-.14.5-.41.69-.27.27-.55.37-.82.27-.27,0-.55-.09-.82-.27-.18-.27-.27-.55-.27-.82s.14-.55.41-.82v-1.78c-3.66,0-7.27-.55-10.84-1.65l3.84-.69c-1.37-1.74-2.06-3.7-2.06-5.9s.69-4.21,2.06-6.03c1.19-1.46,2.56-2.51,4.11-3.15,1.55-.64,3.2-.82,4.94-.55,1.74.18,3.29.82,4.66,1.92,1.46,1.19,2.51,2.56,3.15,4.11s.82,3.2.55,4.94Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M366.06,764.8c-.09-2.65-.73-5.03-1.92-7.13-1.28-2.19-3.02-3.93-5.21-5.21-2.1-1.19-4.48-1.83-7.13-1.92-2.74.09-5.17.73-7.27,1.92-2.19,1.28-3.93,3.02-5.21,5.21-1.19,2.1-1.83,4.48-1.92,7.13.09,2.65.73,5.07,1.92,7.27,1.28,2.19,3.02,3.89,5.21,5.07,2.1,1.28,4.53,1.97,7.27,2.06,2.65-.09,5.03-.78,7.13-2.06,2.19-1.19,3.93-2.88,5.21-5.07,1.19-2.19,1.83-4.62,1.92-7.27Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M348.78,772.48h-1.92c-.18.09-.32.23-.41.41.09.27.23.41.41.41h1.78s.82,0,.82,0c.27,0,.41-.14.41-.41,0-.18-.14-.32-.41-.41h-.69c.09-.18.23-.32.41-.41.46-.18.87,0,1.23.55.09.55-.09.96-.55,1.23-.55.18-.96,0-1.23-.55" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M343.98,769.46h.14c2.29.46,4.57.73,6.86.82v-3.84s.41-.27.41-.27h.69s.41.27.41.27v3.84c2.38-.09,4.71-.37,6.99-.82" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M352.9,764.8c-.09-.64-.46-1.01-1.1-1.1-.73.09-1.14.46-1.23,1.1.09.73.5,1.14,1.23,1.23.64-.09,1.01-.5,1.1-1.23Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <line x1="352.48" y1="770.28" x2="352.48" y2="771.79" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <line x1="350.98" y1="771.79" x2="350.98" y2="770.28" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M350.98,773.58l-.27,1.1c.27.27.64.46,1.1.55.37-.09.73-.37,1.1-.82" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M350.56,774.4c.09.09.14.18.14.27" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M354.95,772.48c-.37-.46-.78-.59-1.23-.41-.55.27-.73.69-.55,1.23.27.55.69.73,1.23.55.18-.09.37-.27.55-.55h-.96c-.18,0-.32-.14-.41-.41.09-.18.23-.32.41-.41h.96s1.65,0,1.65,0c.27.09.41.23.41.41,0,.27-.14.41-.41.41h-1.65" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                </g>
                <g id="sink4" data-name="sink">
                    <path d="M990.13,645.44c1.74.18,3.29.82,4.66,1.92l.69-3.98c-1.65-.64-3.43-1.01-5.35-1.1-3.57.09-6.54,1.37-8.91,3.84-2.47,2.38-3.75,5.35-3.84,8.91.09,3.66,1.37,6.67,3.84,9.05,2.38,2.47,5.35,3.75,8.91,3.84,3.66-.09,6.67-1.37,9.05-3.84,2.47-2.38,3.75-5.39,3.84-9.05-.09-3.57-1.37-6.54-3.84-8.91-1.1-1.1-2.33-2.01-3.7-2.74,1.1,3.57,1.65,7.22,1.65,10.97l2.47-.41h.14s.14,0,.14,0c.27,0,.5.14.69.41.27.27.37.55.27.82,0,.27-.09.55-.27.82-.27.18-.55.27-.82.27s-.55-.14-.82-.41h-1.78c0,3.66-.55,7.27-1.65,10.84l-.69-3.84c-1.74,1.37-3.7,2.06-5.9,2.06s-4.21-.69-6.03-2.06c-1.46-1.19-2.51-2.56-3.15-4.11-.64-1.55-.82-3.2-.55-4.94.18-1.74.82-3.29,1.92-4.66,1.19-1.46,2.56-2.51,4.11-3.15s3.2-.82,4.94-.55Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M990.13,640.78c-2.65.09-5.03.73-7.13,1.92-2.19,1.28-3.93,3.02-5.21,5.21-1.19,2.1-1.83,4.48-1.92,7.13.09,2.74.73,5.17,1.92,7.27,1.28,2.19,3.02,3.93,5.21,5.21,2.1,1.19,4.48,1.83,7.13,1.92,2.65-.09,5.07-.73,7.27-1.92,2.19-1.28,3.89-3.02,5.07-5.21,1.28-2.1,1.97-4.53,2.06-7.27-.09-2.65-.78-5.03-2.06-7.13-1.19-2.19-2.88-3.93-5.07-5.21-2.19-1.19-4.62-1.83-7.27-1.92Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M997.81,658.06v1.92c.09.18.23.32.41.41.27-.09.41-.23.41-.41v-1.78s0-.82,0-.82c0-.27-.14-.41-.41-.41-.18,0-.32.14-.41.41v.69c-.18-.09-.32-.23-.41-.41-.18-.46,0-.87.55-1.23.55-.09.96.09,1.23.55.18.55,0,.96-.55,1.23" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M994.79,662.86v-.14c.46-2.29.73-4.57.82-6.86h-3.84s-.27-.41-.27-.41v-.69s.27-.41.27-.41h3.84c-.09-2.38-.37-4.71-.82-6.99" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M990.13,653.94c-.64.09-1.01.46-1.1,1.1.09.73.46,1.14,1.1,1.23.73-.09,1.14-.5,1.23-1.23-.09-.64-.5-1.01-1.23-1.1Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <line x1="995.62" y1="654.36" x2="997.12" y2="654.36" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <line x1="997.12" y1="655.86" x2="995.62" y2="655.86" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M998.91,655.86l1.1.27c.27-.27.46-.64.55-1.1-.09-.37-.37-.73-.82-1.1" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M999.73,656.28c.09-.09.18-.14.27-.14" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M997.81,651.89c-.46.37-.59.78-.41,1.23.27.55.69.73,1.23.55.55-.27.73-.69.55-1.23-.09-.18-.27-.37-.55-.55v.96c0,.18-.14.32-.41.41-.18-.09-.32-.23-.41-.41v-.96s0-1.65,0-1.65c.09-.27.23-.41.41-.41.27,0,.41.14.41.41v1.65" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                </g>
                <g id="sink5" data-name="sink">
                    <path d="M990.13,577.47c1.74.18,3.29.82,4.66,1.92l.69-3.98c-1.65-.64-3.43-1.01-5.35-1.1-3.57.09-6.54,1.37-8.91,3.84-2.47,2.38-3.75,5.35-3.84,8.91.09,3.66,1.37,6.67,3.84,9.05,2.38,2.47,5.35,3.75,8.91,3.84,3.66-.09,6.67-1.37,9.05-3.84,2.47-2.38,3.75-5.39,3.84-9.05-.09-3.57-1.37-6.54-3.84-8.91-1.1-1.1-2.33-2.01-3.7-2.74,1.1,3.57,1.65,7.22,1.65,10.97l2.47-.41h.14s.14,0,.14,0c.27,0,.5.14.69.41.27.27.37.55.27.82,0,.27-.09.55-.27.82-.27.18-.55.27-.82.27s-.55-.14-.82-.41h-1.78c0,3.66-.55,7.27-1.65,10.84l-.69-3.84c-1.74,1.37-3.7,2.06-5.9,2.06s-4.21-.69-6.03-2.06c-1.46-1.19-2.51-2.56-3.15-4.11-.64-1.55-.82-3.2-.55-4.94.18-1.74.82-3.29,1.92-4.66,1.19-1.46,2.56-2.51,4.11-3.15s3.2-.82,4.94-.55Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M990.13,572.81c-2.65.09-5.03.73-7.13,1.92-2.19,1.28-3.93,3.02-5.21,5.21-1.19,2.1-1.83,4.48-1.92,7.13.09,2.74.73,5.17,1.92,7.27,1.28,2.19,3.02,3.93,5.21,5.21,2.1,1.19,4.48,1.83,7.13,1.92,2.65-.09,5.07-.73,7.27-1.92,2.19-1.28,3.89-3.02,5.07-5.21,1.28-2.1,1.97-4.53,2.06-7.27-.09-2.65-.78-5.03-2.06-7.13-1.19-2.19-2.88-3.93-5.07-5.21-2.19-1.19-4.62-1.83-7.27-1.92Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M997.81,590.09v1.92c.09.18.23.32.41.41.27-.09.41-.23.41-.41v-1.78s0-.82,0-.82c0-.27-.14-.41-.41-.41-.18,0-.32.14-.41.41v.69c-.18-.09-.32-.23-.41-.41-.18-.46,0-.87.55-1.23.55-.09.96.09,1.23.55.18.55,0,.96-.55,1.23" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M994.79,594.89v-.14c.46-2.29.73-4.57.82-6.86h-3.84s-.27-.41-.27-.41v-.69s.27-.41.27-.41h3.84c-.09-2.38-.37-4.71-.82-6.99" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M990.13,585.97c-.64.09-1.01.46-1.1,1.1.09.73.46,1.14,1.1,1.23.73-.09,1.14-.5,1.23-1.23-.09-.64-.5-1.01-1.23-1.1Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <line x1="995.62" y1="586.38" x2="997.12" y2="586.38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <line x1="997.12" y1="587.89" x2="995.62" y2="587.89" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M998.91,587.89l1.1.27c.27-.27.46-.64.55-1.1-.09-.37-.37-.73-.82-1.1" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M999.73,588.3c.09-.09.18-.14.27-.14" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M997.81,583.91c-.46.37-.59.78-.41,1.23.27.55.69.73,1.23.55.55-.27.73-.69.55-1.23-.09-.18-.27-.37-.55-.55v.96c0,.18-.14.32-.41.41-.18-.09-.32-.23-.41-.41v-.96s0-1.65,0-1.65c.09-.27.23-.41.41-.41.27,0,.41.14.41.41v1.65" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                </g>
                <g id="tub1" data-name="tub">
                    <path d="M174.56,674.44c.4.51.89.76,1.48.76h57.84c.59,0,1.09-.25,1.48-.76l-28.97-16.44c-.07.07-.13.18-.2.33-.33.36-.73.54-1.19.54s-.86-.18-1.19-.54c-.13-.15-.23-.29-.3-.44l-28.97,16.55c-.46-.44-.69-.98-.69-1.63v-31.36c0-.73.23-1.31.69-1.74.4-.44.89-.65,1.48-.65h57.84c.59,0,1.09.22,1.48.65.46.44.69,1.02.69,1.74v15.03s1.38.65,1.38.65l-1.38.54v15.14c-.07.65-.3,1.2-.69,1.63" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <polyline points="236.06 656.47 232 654.72 232 659.52 236.06 657.67" fill="#425563"/>
                    <path d="M206.4,657.99c.13-.29.2-.58.2-.87,0-.36-.07-.65-.2-.87l-.2-.44c-.33-.36-.73-.54-1.19-.54-.46,0-.86.18-1.19.54-.13.15-.23.29-.3.44-.07.22-.1.51-.1.87,0,.29.03.54.1.76" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <line x1="203.53" y1="656.25" x2="174.56" y2="639.7" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <line x1="206.4" y1="656.25" x2="235.36" y2="639.7" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <line x1="237.44" y1="632.71" x2="172.29" y2="632.71" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <polygon points="983.17 719.54 982.34 719.65 981.62 720.13 981.03 720.84 980.79 721.68 980.91 722.51 981.27 723.34 981.86 723.93 982.69 724.29 983.64 724.29 984.48 723.93 985.07 723.34 985.43 722.51 985.55 721.68 985.31 720.84 984.71 720.13 984 719.65 983.17 719.54" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <path d="M994.22,721.91l-.12-2.14-.36-2.02c-8.79-30.93-73.96-29.76-79.53,2.02l-.12,2.14.12,2.02c5.84,32.1,70.92,32.73,79.53,2.02l.36-2.02.12-2.02Z" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <path d="M916.48,721.91l.12,1.9.36,1.9c7.91,27.83,69.24,27.33,74.77-1.9l.12-1.9-.12-1.9c-5.41-29.29-66.88-29.92-74.77-1.9l-.36,1.9-.12,1.9Z" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="991.01" y1="727.02" x2="991.01" y2="716.8" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <path d="M983.17,720.01l-.71.12-.59.48c-1.09.97-.65,2.38.59,3.09l.71.12.71-.12c1.24-.71,1.68-2.12.59-3.09l-.59-.48-.71-.12Z" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="997.91" y1="686.25" x2="997.91" y2="757.57" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="988.99" y1="686.25" x2="988.99" y2="703.49" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="988.99" y1="740.34" x2="988.99" y2="757.57" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="980.08" y1="686.25" x2="980.08" y2="697.31" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="980.08" y1="746.4" x2="980.08" y2="757.57" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="971.16" y1="686.25" x2="971.16" y2="693.86" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="971.16" y1="749.97" x2="971.16" y2="757.57" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="962.25" y1="686.25" x2="962.25" y2="691.96" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="962.25" y1="751.75" x2="962.25" y2="757.57" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="953.33" y1="686.25" x2="953.33" y2="691.36" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="953.33" y1="752.34" x2="953.33" y2="757.57" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="944.42" y1="686.25" x2="944.42" y2="692.2" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="944.42" y1="751.63" x2="944.42" y2="757.57" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="935.5" y1="686.25" x2="935.5" y2="694.22" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="935.5" y1="749.49" x2="935.5" y2="757.57" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="926.59" y1="686.25" x2="926.59" y2="698.14" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="926.59" y1="745.57" x2="926.59" y2="757.57" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="917.67" y1="686.25" x2="917.67" y2="704.91" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="917.67" y1="738.79" x2="917.67" y2="757.57" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="908.76" y1="686.25" x2="908.76" y2="757.57" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="899.84" y1="695.17" x2="933.12" y2="695.17" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="975.09" y1="695.17" x2="1006.82" y2="695.17" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="899.84" y1="704.08" x2="918.62" y2="704.08" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="989.71" y1="704.08" x2="1006.82" y2="704.08" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="899.84" y1="713" x2="912.2" y2="713" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="996.01" y1="713" x2="1006.82" y2="713" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="899.84" y1="721.91" x2="910.3" y2="721.91" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="997.91" y1="721.91" x2="1006.82" y2="721.91" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="899.84" y1="730.83" x2="912.2" y2="730.83" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="996.01" y1="730.83" x2="1006.82" y2="730.83" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="899.84" y1="739.74" x2="918.62" y2="739.74" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="989.71" y1="739.74" x2="1006.82" y2="739.74" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="899.84" y1="748.66" x2="933.12" y2="748.66" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="975.09" y1="748.66" x2="1006.82" y2="748.66" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <path d="M910.3,721.91l.12,2.14.36,2.26.59,2.14c5.48,16.29,25.34,23.56,41.13,23.89h3.21s3.21-.24,3.21-.24c15.08-.68,35.11-9.53,38.51-25.8l.36-2.26.12-2.14-.12-2.26-.36-2.26c-3.51-16.42-23.31-24.83-38.51-25.8l-3.21-.24h-3.21c-15.7.49-35.74,7.64-41.13,23.89l-.59,2.14-.36,2.26-.12,2.26Z" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <polyline points="1006.82 757.57 1006.82 686.25 899.84 686.25 899.84 757.57" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <path d="M996.48,721.91l-.12-2.26-.36-2.14-.59-2.14c-5.35-14.87-23.56-21.79-38.16-22.35l-3.09-.12-3.21.12c-14.83.46-35.08,8.42-38.63,24.49l-.36,2.14-.12,2.26.12,2.14.36,2.14c3.38,15.27,21.43,22.88,35.54,24.37l3.09.24h3.21c15.43.19,35.55-6.62,41.25-22.47l.59-2.14.36-2.14.12-2.14Z" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <polyline points="983.41 716.33 981.27 713.83 978.65 711.57" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <path d="M978.77,711.57l-2.5-1.43-2.73-.83-4.04-.71c-8.73-1.69-18.03-1.78-26.87-.95l-5.23.71" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <polyline points="937.52 708.36 935.86 708.84 934.19 709.55 932.89 710.62 931.58 711.93 930.63 713.35 930.03 715.02" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <polyline points="929.91 715.02 929.32 718.47 929.08 721.91 929.32 725.36 929.91 728.81" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <polyline points="930.03 728.69 930.63 730.35 931.58 731.78 932.89 733.09 934.19 734.16 935.86 734.87 937.52 735.35" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <polyline points="937.4 735.35 942.63 736.06 947.98 736.42 953.45 736.53 958.8 736.3 964.15 735.82 969.5 735.11" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <line x1="969.5" y1="735.23" x2="973.54" y2="734.51" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <polyline points="973.54 734.39 976.27 733.56 978.77 732.14" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <polyline points="978.65 732.14 981.27 729.88 983.41 727.38" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <polyline points="983.53 727.38 983.76 726.67 983.64 725.84 983.17 725.24 982.57 724.88" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <polyline points="982.69 719.18 981.74 719.54 981.03 720.13 980.55 720.96 980.43 721.91 980.55 722.86 981.03 723.7 981.74 724.29 982.69 724.65" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <polyline points="982.57 718.82 983.17 718.47 983.64 717.87 983.76 717.04 983.53 716.33" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <path d="M934.31,740.93l-.12-.12h-.24s-.12-.12-.12-.12l-.12-.12h-.24s-.24-.24-.24-.24h-.24s-.24-.24-.24-.24l-.24-.12h-.12s-.24-.24-.24-.24l-.24-.12-.12-.12h-.12s-.24-.12-.24-.12l-.36-.36-.24-.12h-.12s-.36-.36-.36-.36l-.24-.12-.59-.59-.24-.12-.12-.12.12.12.12.12.48.24.12.12.71.36.12.12.71.36.12.12.24.12h.24s.71.36.71.36h.12s.48.24.48.24h.24s.24.12.24.12h.24s.24.12.24.12h.24s.24.12.24.12h.48s.12.12.12.12h.59s.36.12.36.12h.36s.48.12.48.12c1.36.22,3.52.54,4.87.59l.36.12h.48c1.71.16,3.62.39,5.35.36l.36.12h1.66c3.98.02,7.97.05,11.89-.36h.48s.36-.12.36-.12c3.8-.28,8.55-1.01,12.24-1.9h.36s.36-.12.36-.12l.48-.12h-.12s-.12.12-.12.12c-6.39,3.17-13.37,5.04-20.45,5.47h-1.19c-3.25.26-6.55-.15-9.75-.59l-.36-.12h-.36c-3.41-.71-5.63-1.44-8.92-2.62l-.24-.24-.71-.24Z" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <path d="M929.2,706.1l.12-.12.48-.24.12-.12c.91-.47,1.48-.96,2.5-1.31l.48-.24h.24s.24-.12.24-.12h.24s.24-.12.24-.12l.12-.12h.24s.24-.12.24-.12c.98.05.25-.16,1.07-.12l.12-.12h.36s.48-.12.48-.12h.36c3.71-.63,8.1-1.09,11.89-1.19h.36s.48-.12.48-.12h.36c8.62-.16,17.52.5,25.8,2.5h.36s.48.12.48.12h-.12s-.12-.12-.12-.12h-.12c-3.72-1.95-8.6-3.58-12.72-4.4l-.36-.12h-.36c-4.23-.96-9.07-1.15-13.43-.83h-.71s-.36.12-.36.12h-.48c-4.59.51-7.88,1.47-12.24,3.09l-.71.24-.24.24h-.24s-.12.12-.12.12h-.12s-.12.12-.12.12l-.24.12h-.12s-.12.12-.12.12l-.24.12h-.12s-.12.12-.12.12l-.24.12-.12.12h-.12s-.12.12-.12.12l-.24.12-.12.12h-.12s-.24.12-.24.12c-.21.18-.41.53-.71.48l-.24.24-.24.12-.12.12-.12.12-.24.24-.24.12h-.12s-.48.48-.48.48Z" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                <rect x="821.21" y="698.95" width="66.74" height="56.01" rx="3.82" ry="3.82" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <circle cx="854.78" cy="726.95" r="1.92" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="886.45" y1="700.1" x2="856.2" y2="725.67" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="822.83" y1="700.1" x2="853.37" y2="725.67" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="886.45" y1="753.73" x2="856.2" y2="728.24" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="852.87" y1="728.24" x2="822.65" y2="753.73" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="889.98" y="692.2" width="9.86" height="64.63" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="819.77" y1="694.87" x2="889.98" y2="694.87" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="815.36" y="682.02" width="34.83" height="2.07" transform="translate(-239.08 788.93) rotate(-45)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <path d="M845.83,671.47s9.05,7.14,9.05,23.4" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <polygon points="824.85 726.71 833.27 729.81 833.27 723.61 824.85 726.71" fill="#425563"/>
                <g>
                    <rect x="319.7" y="639.93" width="33.4" height="24.42" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <polyline points="331.96 652.19 343.38 640.88 320.54 640.88 331.96 652.19 343.38 663.5 343.38 640.88" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M348.98,661.38c.07.7.46,1.09,1.16,1.16.7-.07,1.09-.46,1.16-1.16-.07-.63-.46-1.02-1.16-1.16-.7.14-1.09.53-1.16,1.16Z" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M348.98,642.89c.07.7.46,1.09,1.16,1.16.7-.07,1.09-.46,1.16-1.16-.07-.7-.46-1.09-1.16-1.16-.7.07-1.09.46-1.16,1.16Z" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <polyline points="320.54 641.11 320.54 663.5 331.85 652.43" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <polyline points="331.47 639.77 343.38 627.88 320.54 627.88 331.28 639.9 343.35 639.94 343.38 627.88" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <line x1="320.54" y1="627.88" x2="320.54" y2="639.65" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <line x1="343.38" y1="663.5" x2="320.54" y2="663.5" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                </g>
                <g id="Names2" data-name="Names">
                <rect x="320.81" y="628.27" width="13.42" height="11.66" fill="#dde7ed"/>
                <text transform="translate(508.77 401.5)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">Open to Below</tspan></text>
                <text transform="translate(369.26 940.86)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">Open to Below</tspan></text>
                <text transform="translate(525.53 939.76)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">Bedroom 4</tspan></text>
                <text transform="translate(213.96 865.07)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">Bedroom 3</tspan></text>
                <text transform="translate(259.25 733.25)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">Bathroom 2</tspan></text>
                <text transform="translate(806.37 487.17)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">Primary Bedroom</tspan></text>
                <text transform="translate(844.43 653.06)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">Deluxe Bathroom</tspan></text>
                <text transform="translate(710.23 694.8)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="9"><tspan x="0" y="0">Walk-in Closet</tspan></text>
                <text transform="translate(259.42 580.56)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="9"><tspan x="0" y="0">Walk-in </tspan><tspan x="3.5" y="9">Closet</tspan></text>
                <text transform="translate(321.29 678.48)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="9"><tspan x="0" y="0">Unfinished</tspan></text>
                <text transform="translate(223.85 331.2)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">Bedroom 2</tspan></text>
                <text transform="translate(188.11 596.84)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">Bath 3</tspan></text>
                <text transform="translate(544.32 827.78)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">Laundry</tspan></text>
                <g>
                    <polyline points="610.4 817.92 610.4 819.92 612.4 819.92" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <line x1="616.14" y1="819.92" x2="636.75" y2="819.92" fill="none" stroke="#425563" stroke-dasharray="3.75 3.75" stroke-miterlimit="10" stroke-width=".5"/>
                    <polyline points="638.62 819.92 640.62 819.92 640.62 817.92" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <line x1="640.62" y1="814.13" x2="640.62" y2="793.25" fill="none" stroke="#425563" stroke-dasharray="3.8 3.8" stroke-miterlimit="10" stroke-width=".5"/>
                    <polyline points="640.62 791.35 640.62 789.35 638.62 789.35" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <line x1="634.87" y1="789.35" x2="614.27" y2="789.35" fill="none" stroke="#425563" stroke-dasharray="3.75 3.75" stroke-miterlimit="10" stroke-width=".5"/>
                    <polyline points="612.4 789.35 610.4 789.35 610.4 791.35" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <line x1="610.4" y1="795.14" x2="610.4" y2="816.02" fill="none" stroke="#425563" stroke-dasharray="3.8 3.8" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g>
                    <polyline points="610.4 849.97 610.4 851.97 612.4 851.97" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <line x1="616.14" y1="851.97" x2="636.75" y2="851.97" fill="none" stroke="#425563" stroke-dasharray="3.75 3.75" stroke-miterlimit="10" stroke-width=".5"/>
                    <polyline points="638.62 851.97 640.62 851.97 640.62 849.97" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <line x1="640.62" y1="846.17" x2="640.62" y2="825.29" fill="none" stroke="#425563" stroke-dasharray="3.8 3.8" stroke-miterlimit="10" stroke-width=".5"/>
                    <polyline points="640.62 823.4 640.62 821.4 638.62 821.4" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <line x1="634.87" y1="821.4" x2="614.27" y2="821.4" fill="none" stroke="#425563" stroke-dasharray="3.75 3.75" stroke-miterlimit="10" stroke-width=".5"/>
                    <polyline points="612.4 821.4 610.4 821.4 610.4 823.4" fill="none" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <line x1="610.4" y1="827.19" x2="610.4" y2="848.07" fill="none" stroke="#425563" stroke-dasharray="3.8 3.8" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <path d="M640.7,790.93h0c1.53,0,2.78,1.25,2.78,2.78v22.55c0,1.24-1.01,2.25-2.25,2.25h-.49s-.04-.02-.04-.04v-27.55h0Z" fill="none" stroke="#425563" stroke-dasharray="4" stroke-miterlimit="7" stroke-width=".5"/>
                <path d="M640.7,822.51h0c1.53,0,2.78,1.25,2.78,2.78v22.55c0,1.24-1.01,2.25-2.25,2.25h-.49s-.04-.02-.04-.04v-27.55h0Z" fill="none" stroke="#425563" stroke-dasharray="4" stroke-miterlimit="7" stroke-width=".5"/>
                <path d="M608.69,819.85h1.63s.02,0,.02-.02v-30.61s-1.38,0-1.38,0c-.79,0-1.43.64-1.43,1.43,0,0-1.7,6.08-1.7,14.07,0,6.85,1.7,13.97,1.7,13.97,0,.64.52,1.16,1.16,1.16Z" fill="none" stroke="#425563" stroke-dasharray="4" stroke-miterlimit="7" stroke-width=".5"/>
                <path d="M608.69,852.05h1.63s.02,0,.02-.02v-30.61s-1.38,0-1.38,0c-.79,0-1.43.64-1.43,1.43,0,0-1.7,6.08-1.7,14.07,0,6.85,1.7,13.97,1.7,13.97,0,.64.52,1.16,1.16,1.16Z" fill="none" stroke="#425563" stroke-dasharray="4" stroke-miterlimit="7" stroke-width=".5"/>
                </g>
                <g id="Furniture1" data-name="Furniture">
                <g id="Primary_Bed">
                    <g id="TV_stand2" data-name="TV_stand" filter="url(#drop-shadow-14)">
                    <g>
                        <rect x="821.97" y="512.06" width="73.28" height="28.59" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M895.64,540.92h-74.07v-29.13s74.07,0,74.07,0v29.13ZM822.36,540.38h72.49s0-28.05,0-28.05h-72.49s0,28.05,0,28.05Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="921.23" y="312.85" width="38.9" height="28.59" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M960.34,341.71h-39.32s0-29.13,0-29.13h39.32s0,29.13,0,29.13ZM921.44,341.17h38.48v-28.05s-38.48,0-38.48,0v28.05Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="767.4" y="312.85" width="38.9" height="28.59" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M806.52,341.71h-39.32s0-29.13,0-29.13h39.32s0,29.13,0,29.13ZM767.61,341.17h38.48v-28.05s-38.48,0-38.48,0v28.05Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <g>
                        <g>
                            <path d="M847.87,526.06h22.15v.19c0,.68-.55,1.22-1.22,1.22h-19.7c-.67,0-1.22-.55-1.22-1.22v-.19Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                            <path d="M868.8,527.74h-19.7c-.82,0-1.49-.67-1.49-1.49v-.46h22.69v.46c0,.82-.67,1.49-1.49,1.49ZM848.14,526.32c.04.49.45.88.95.88h19.7c.5,0,.91-.39.95-.88h-21.6Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                            <path d="M844.08,524.07v.26c0,.91.73,1.64,1.64,1.64h26.46c.91,0,1.64-.73,1.64-1.64v-.26h-29.74Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                            <path d="M872.17,526.25h-26.46c-1.05,0-1.91-.86-1.91-1.91v-.53h30.27v.53c0,1.05-.86,1.91-1.91,1.91ZM844.35,524.34c0,.75.62,1.36,1.37,1.36h26.46c.75,0,1.37-.61,1.37-1.36h-29.2Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                            <path d="M844.08,524.07v.26c0,.91.73,1.64,1.64,1.64h26.46c.91,0,1.64-.73,1.64-1.64v-.26h-29.74Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                            <path d="M872.17,526.25h-26.46c-1.05,0-1.91-.86-1.91-1.91v-.53h30.27v.53c0,1.05-.86,1.91-1.91,1.91ZM844.35,524.34c0,.75.62,1.36,1.37,1.36h26.46c.75,0,1.37-.61,1.37-1.36h-29.2Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                            <line x1="844.08" y1="524.01" x2="873.81" y2="524.01" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                            <rect x="844.08" y="523.74" width="29.74" height=".54" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        </g>
                        <g>
                        <path d="M854.12,527.47h8.81c-.68,1.77-2.4,3.02-4.41,3.02s-3.73-1.25-4.41-3.02Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M858.53,530.77c-2.08,0-3.91-1.25-4.66-3.2l-.14-.37h9.6l-.14.37c-.75,1.94-2.58,3.2-4.66,3.2ZM854.53,527.74c.74,1.52,2.27,2.49,4,2.49s3.25-.96,4-2.49h-7.99Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                    </g>
                    </g>
                    <g filter="url(#drop-shadow-15)">
                    <line x1="904.42" y1="378.49" x2="904.42" y2="378.49" fill="#e0ceb3" stroke="#cab394" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                    <line x1="904.42" y1="393.7" x2="904.42" y2="393.7" fill="#e0ceb3" stroke="#cab394" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25"/>
                    <g>
                        <rect x="810.37" y="313.21" width="106.48" height="8.79" rx="3.96" ry="3.96" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M913.11,322.24h-98.99c-2.19,0-3.98-1.78-3.98-3.98v-1.31c0-2.19,1.78-3.98,3.98-3.98h98.99c2.19,0,3.98,1.78,3.98,3.98v1.31c0,2.19-1.78,3.98-3.98,3.98ZM814.11,313.45c-1.93,0-3.5,1.57-3.5,3.5v1.31c0,1.93,1.57,3.51,3.5,3.51h98.99c1.93,0,3.5-1.57,3.5-3.51v-1.31c0-1.93-1.57-3.5-3.5-3.5h-98.99Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="816.21" y="322.18" width="95.15" height="88.63" fill="#fff" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M911.6,411.04h-95.62v-89.1h95.62v89.1ZM816.45,410.57h94.68v-88.16h-94.68v88.16Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M857.98,345.18c-.28.23-2.12.19-5.45.4-3.12.19-7.59.64-11.62.6-5.73-.07-10.24-.59-13.74-.82-2.08-.13-4.45.18-4.72-.17-.21-.27.14-2.27.02-4.37-.3-5.23-.77-13.43-.02-14.41.4-.52,2.75-.2,5.05-.38,3.8-.29,8.51-.63,11.76-.74,3.24-.12,8.94.44,13.38.8,2.39.19,5.12,0,5.33.33.15.24-.1,1.9.07,3.78.12,1.34.58,3.87.57,5.49-.06,5.16.48,8.59-.63,9.51Z" fill="#f2f0ed" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M841.53,346.42c-.21,0-.41,0-.62,0-4.13-.05-7.69-.34-10.56-.58-1.15-.09-2.21-.18-3.19-.24-.86-.05-1.76-.03-2.56-.02-1.46.04-2.11.04-2.33-.25-.15-.19-.13-.61-.07-1.61.05-.82.1-1.83.04-2.89v-.09c-.41-7.08-.71-13.51.03-14.47.31-.4,1.15-.42,2.75-.41.76,0,1.62,0,2.47-.06,3.51-.27,8.4-.62,11.77-.75,2.67-.1,7.04.27,10.9.59.86.07,1.71.14,2.51.21.97.08,1.99.09,2.9.1,1.8.02,2.43.05,2.61.34.1.16.1.43.07,1.21-.02.7-.06,1.66.03,2.68.04.45.12,1.03.2,1.66.18,1.29.37,2.76.36,3.85-.02,1.47.02,2.8.05,3.97.08,3.11.12,4.99-.77,5.72h0c-.23.19-.81.22-2.63.3-.8.03-1.79.08-2.96.15-.77.05-1.63.11-2.54.18-2.65.2-5.62.42-8.48.42ZM825.91,345.09c.42,0,.86,0,1.28.04.98.06,2.05.15,3.2.24,2.86.23,6.42.53,10.53.57,3.01.03,6.23-.2,9.05-.42.91-.07,1.77-.13,2.54-.18,1.17-.07,2.16-.12,2.97-.15,1.17-.05,2.18-.1,2.35-.2.71-.59.66-2.58.59-5.34-.03-1.18-.06-2.51-.05-3.99.01-1.06-.18-2.51-.36-3.78-.09-.64-.17-1.23-.21-1.68-.09-1.05-.06-2.02-.04-2.74.01-.42.03-.86,0-.96-.14-.07-1.24-.09-2.21-.1-.91-.01-1.94-.03-2.93-.1-.8-.06-1.65-.13-2.51-.21-3.84-.32-8.2-.69-10.84-.59-3.37.12-8.25.47-11.76.74-.86.07-1.74.07-2.51.06-1.02,0-2.19,0-2.37.23-.7.9-.2,9.53.06,14.16v.09c.07,1.08,0,2.16-.04,2.94-.03.56-.07,1.19-.01,1.31.14.09,1.14.07,1.94.05.42,0,.86-.02,1.32-.02Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M901.42,345.18c-.28.23-2.12.19-5.45.4-3.12.19-7.59.64-11.62.6-5.73-.07-10.24-.59-13.74-.82-2.08-.13-4.45.18-4.72-.17-.21-.27.14-2.27.02-4.37-.3-5.23-.77-13.43-.02-14.41.4-.52,2.76-.2,5.05-.38,3.8-.29,8.51-.63,11.76-.74,3.24-.12,8.94.44,13.38.8,2.39.19,5.12,0,5.33.33.15.24-.1,1.9.07,3.78.12,1.34.58,3.87.57,5.49-.06,5.16.48,8.59-.63,9.51Z" fill="#f2f0ed" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M884.97,346.42c-.21,0-.41,0-.62,0-4.13-.05-7.69-.34-10.56-.58-1.15-.09-2.21-.18-3.19-.24-.86-.05-1.76-.03-2.56-.02-1.46.04-2.11.04-2.33-.25-.15-.19-.13-.61-.07-1.61.05-.82.1-1.83.04-2.89v-.09c-.41-7.08-.71-13.52.03-14.48.31-.4,1.15-.42,2.75-.41.76,0,1.62,0,2.47-.06,3.51-.27,8.4-.62,11.77-.75,2.67-.1,7.04.27,10.9.59.86.07,1.71.14,2.51.21.97.08,1.99.09,2.9.1,1.8.02,2.43.05,2.61.33.1.16.1.43.07,1.21-.02.7-.06,1.66.03,2.68.04.45.12,1.03.21,1.66.17,1.29.37,2.76.36,3.85-.02,1.47.02,2.8.05,3.97.08,3.11.12,4.99-.77,5.72h0c-.23.19-.81.22-2.63.3-.8.03-1.79.08-2.96.15-.77.05-1.63.11-2.54.18-2.65.2-5.62.42-8.48.42ZM869.35,345.09c.42,0,.86,0,1.28.04.98.06,2.05.15,3.2.24,2.86.23,6.42.53,10.53.57,3.01.03,6.23-.2,9.05-.42.91-.07,1.77-.13,2.54-.18,1.17-.07,2.16-.12,2.97-.15,1.17-.05,2.18-.1,2.35-.2.71-.59.66-2.58.59-5.34-.03-1.18-.06-2.51-.05-3.99.01-1.06-.18-2.51-.36-3.78-.09-.64-.17-1.23-.21-1.68-.09-1.05-.06-2.02-.04-2.74.01-.42.03-.86,0-.95-.14-.07-1.24-.09-2.21-.1-.91-.01-1.94-.03-2.93-.1-.8-.06-1.65-.13-2.51-.21-3.84-.32-8.2-.69-10.84-.59-3.37.12-8.25.47-11.76.74-.86.07-1.74.07-2.51.06-1.03,0-2.19,0-2.37.23-.7.9-.2,9.53.06,14.17v.09c.07,1.08,0,2.16-.04,2.94-.03.56-.07,1.19-.01,1.31.14.09,1.14.07,1.94.05.42,0,.86-.02,1.32-.02Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M814.85,372.81c.22,2.68-.89,37.93.89,39.49,1.79,1.56,96.16,2.01,96.61-.45.45-2.45.89-44.62-.67-45.96-.85-.73-29.66-3.19-55.56-1.12-21.69,1.74-41.28,8.03-41.28,8.03Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M864.4,413.82c-.75,0-1.49,0-2.23,0-18.14-.03-45.51-.4-46.58-1.34-1.27-1.11-1.2-15.54-1-31.51.05-4.15.09-7.42.03-8.14l-.02-.19.18-.06c.2-.06,19.86-6.32,41.33-8.04,25.53-2.05,54.65.25,55.73,1.17.74.63,1.13,8.29,1.17,22.74.03,10.51-.18,22.12-.42,23.44-.04.23-.29.34-.5.42-3.2,1.12-27.18,1.51-47.68,1.51ZM815.1,372.98c.05,1,0,3.98-.04,8-.12,9.77-.37,30.09.84,31.15,1.02.67,22.64,1.22,48.18,1.22,27.82.01,47.16-.63,48.06-1.58.43-2.43.78-44.32-.61-45.69-1.14-.7-30.01-3.09-55.38-1.06-20.34,1.63-39.05,7.34-41.05,7.97Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M842.9,341.87c-.56-.35-.95-1.09-.45-1.66.43-.49,1.22-.39,1.64-.67,6.81-4.48,11.09-5.15,12.61-5.15s2.47-.51,3.03-.7c.95-.34,1.02.61.78,1.7-.23,1.1.96,2.7,2.24,4.52,1.29,1.82,1.08,4.78,2.01,5.88.94,1.1,1.36,1.38,1.1,1.96-.26.56-.76.63-1.69.74-.94.11-7.25,4.21-10.06,4.21s-4.44.49-5.38,1.22c-.94.73-1.75.12-1.4-.85.35-.97-1.39-2.68-2.15-4.4-.45-1.02-1.07-6.04-2.29-6.79Z" fill="#f2f0ed" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M847.95,354.47c-.22,0-.41-.07-.55-.17-.37-.27-.48-.77-.28-1.32.18-.49-.39-1.35-.99-2.26-.42-.63-.85-1.29-1.15-1.96-.15-.34-.31-1.05-.5-1.94-.38-1.71-.94-4.28-1.7-4.74h0c-.42-.26-.71-.68-.78-1.1-.05-.34.04-.66.28-.92.3-.35.74-.44,1.12-.53.22-.05.43-.1.57-.18,7.31-4.82,11.6-5.19,12.74-5.19,1.21,0,2.06-.34,2.62-.56.12-.05.23-.09.33-.13.38-.13.69-.1.9.09.33.29.39.93.19,1.89-.2.93.86,2.44,1.99,4.03l.22.31c.71,1.01.98,2.34,1.22,3.51.2.97.38,1.88.78,2.35.17.2.32.37.46.52.62.7.96,1.08.68,1.69-.31.69-.93.77-1.87.88-.27.03-1.29.57-2.36,1.14-2.45,1.3-5.81,3.07-7.73,3.07-2.48,0-4.24.39-5.24,1.17-.35.27-.67.37-.94.37ZM843.02,341.67c.93.57,1.47,3.05,1.91,5.05.18.83.34,1.55.47,1.85.28.64.7,1.28,1.11,1.89.7,1.06,1.3,1.97,1.05,2.68-.12.34-.08.64.11.78.22.16.57.08.92-.19,1.09-.85,2.9-1.27,5.53-1.27,1.8,0,5.24-1.82,7.51-3.02,1.42-.75,2.18-1.15,2.52-1.19.92-.11,1.3-.17,1.5-.61.14-.31.04-.46-.61-1.18-.14-.15-.29-.33-.46-.53-.48-.56-.67-1.49-.89-2.57-.23-1.12-.49-2.4-1.14-3.33l-.22-.31c-1.24-1.75-2.31-3.27-2.07-4.4.23-1.09.03-1.38-.04-1.44-.1-.09-.29-.05-.44,0-.09.03-.2.07-.31.12-.59.24-1.49.6-2.79.6-1.11,0-5.28.37-12.48,5.11-.21.14-.47.19-.73.25-.33.07-.66.14-.86.37-.14.16-.19.34-.16.54.04.28.26.58.56.76h0Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M913.56,368c-.04.13-.07.26-.11.37-.15.44-.32.77-.53.93-.64.51-4.11.16-9.51-.43-.13-.02-.26-.02-.39-.05-2.75-.29-5.98-.64-9.58-.98-.13,0-.26-.02-.4-.03-2.68-.25-5.56-.47-8.58-.65-.12,0-.26-.02-.39-.02-2.75-.16-5.63-.29-8.6-.34-.13,0-.26,0-.39,0-2.64-.05-5.35-.05-8.1.03-.12,0-.26,0-.39,0-2.11.05-4.26.16-6.42.3-.85.05-1.7.12-2.54.19-.12,0-.26.02-.38.03-2.84.23-5.59.5-8.22.81-.13.02-.26.03-.39.04-3.11.37-6.08.78-8.86,1.19-.12.02-.26.04-.38.06-3.32.5-6.39,1.01-9.16,1.48-.13.02-.26.05-.38.07-3.1.53-5.82,1.01-8.09,1.35-.13.02-.26.05-.4.06-4.66.69-7.33.79-7.46-.4-.07-.61-.13-1.55-.19-2.71,0-.13-.02-.26-.02-.4-.26-5.12-.42-13.72-.13-15.15.15-.73,2.53-1.38,6.48-1.96.13-.02.26-.04.4-.05,2.19-.31,4.83-.6,7.81-.86.13,0,.26-.02.39-.03,2.68-.23,5.63-.44,8.76-.64.12,0,.26-.02.39-.02,2.56-.16,5.25-.3,8.03-.42.13,0,.26-.02.4-.02,3.1-.15,6.29-.27,9.53-.37.13,0,.26,0,.39-.02,3.1-.09,6.25-.18,9.37-.24.13,0,.26,0,.39-.02,2.66-.05,5.31-.09,7.91-.12h.39c3.24-.04,6.42-.05,9.47-.05h.4c3.6,0,7.01.05,10.16.12.13,0,.26,0,.39,0,3.43.08,6.52.19,9.14.34.13,0,.26.02.4.02,5.27.32,8.56.79,8.75,1.44.53,1.76.97,5.84,1.08,9.72,0,.14,0,.28,0,.42.06,2.79-.06,5.42-.45,6.98Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M816.28,373.17c-1.12,0-1.81-.15-2.2-.45-.23-.17-.35-.4-.38-.67-.06-.55-.12-1.41-.19-2.72,0-.13-.02-.27-.02-.41-.26-4.95-.43-13.71-.13-15.19.11-.56.97-1.31,6.68-2.15l.19-.03c.07-.01.14-.02.21-.03,2.1-.3,4.74-.59,7.82-.86.07,0,.13-.01.19-.02.07,0,.13-.01.2-.02,2.52-.22,5.39-.43,8.76-.64l.39-.02c2.51-.15,5.21-.29,8.03-.42.13,0,.27-.02.41-.02,3.02-.14,6.23-.27,9.52-.37.06,0,.13,0,.2,0h.18c3.66-.12,6.64-.19,9.38-.25h.19c.06,0,.13-.01.19-.02,2.67-.05,5.32-.09,7.92-.12h.39c3.21-.04,6.4-.05,9.47-.05h.4c3.62,0,7.04.05,10.16.12h0c.06,0,.13,0,.2,0h.18c3.42.08,6.5.2,9.15.35l.4.02c8.64.52,8.87,1.28,8.96,1.6.53,1.77.98,5.79,1.09,9.78v.21c0,.07,0,.14,0,.22.07,3.08-.09,5.58-.46,7.03l-.04.15c-.02.08-.05.16-.07.24-.17.53-.37.86-.61,1.04-.68.54-3.47.3-9.68-.38h-.13c-.09-.02-.18-.03-.28-.05l-.53-.06c-2.66-.28-5.67-.61-9.03-.92l-.39-.03c-2.87-.27-5.75-.48-8.58-.65l-.39-.02c-3.03-.18-5.84-.29-8.59-.34h0c-.06,0-.13,0-.2,0h-.19c-2.9-.05-5.54-.05-8.09.03-.13,0-.25,0-.38,0-2.13.05-4.28.16-6.41.3-.59.04-1.17.08-1.74.13l-1.18.09c-2.84.23-5.6.51-8.2.81-.15.02-.27.03-.4.04-2.74.33-5.55.71-8.84,1.19-.06.01-.13.02-.19.03l-.18.03c-3.41.51-6.55,1.04-9.16,1.48l-2.53.44c-2.26.39-4.22.72-5.95.98-.15.03-.27.05-.4.06-2.3.34-3.96.51-5.14.51ZM882.2,349.19c-2.61,0-5.28.02-7.97.05h-.39c-2.6.03-5.24.07-7.9.12-.06,0-.12,0-.19,0h-.19c-2.75.06-5.73.14-9.38.25h-.38c-3.29.12-6.5.24-9.53.39-.14,0-.27,0-.39.02-2.83.13-5.53.27-8.03.42l-.39.02c-3.37.21-6.23.42-8.75.64-.07,0-.13.01-.19.02-.07,0-.13.01-.2.02-3.07.27-5.69.56-7.79.86-.07,0-.14.02-.2.03l-.2.03c-5.5.81-6.22,1.51-6.27,1.78-.28,1.4-.12,10.13.14,15.09,0,.14,0,.27.02.39.07,1.3.13,2.16.19,2.69.02.14.08.25.2.35.85.65,4.01.29,6.99-.15.13-.02.25-.04.37-.06,1.76-.26,3.71-.6,5.97-.99l2.53-.44c2.62-.45,5.75-.97,9.16-1.48.05-.01.12-.02.18-.03.06,0,.13-.02.19-.03,3.3-.49,6.12-.87,8.88-1.2.13,0,.25-.02.37-.04,2.63-.31,5.39-.58,8.24-.82l1.17-.09c.58-.04,1.16-.09,1.75-.13,2.14-.15,4.3-.25,6.43-.3.13,0,.27,0,.39,0,2.55-.07,5.21-.08,8.1-.03h0c.06,0,.13,0,.2,0h.19c2.76.05,5.58.17,8.61.35l.39.02c2.83.17,5.72.39,8.59.65l.39.03c3.37.31,6.38.64,9.04.92l.55.06c.1.02.18.02.26.03h.13c4.29.48,8.74.97,9.34.49.16-.12.31-.4.45-.82.02-.07.04-.14.06-.22l.04-.14c.35-1.41.51-3.87.44-6.91v-.21c0-.07,0-.14,0-.22-.11-3.89-.56-7.95-1.07-9.65-.05-.13-.68-.79-8.54-1.27l-.4-.02c-2.65-.15-5.72-.26-9.13-.34h-.38c-3.12-.08-6.54-.12-10.16-.12h-.4c-.5,0-1,0-1.5,0Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <path d="M821.8,372.36c-.13.02-.26.05-.4.06-.19-.89-.36-1.78-.54-2.68-.02-.13-.05-.26-.08-.4h0c-.57-3.01-1.04-6.07-1.19-9.12,0-.13-.02-.26-.02-.4-.12-2.69,0-5.38.5-8.03.13-.02.26-.04.4-.05-.5,2.66-.64,5.34-.51,8.01,0,.13,0,.26.02.4.16,3.08.62,6.15,1.21,9.19.02.13.05.26.07.39.17.88.35,1.75.54,2.63Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M830.27,370.94c-.13.02-.26.05-.38.07-.05-.82-.1-1.65-.15-2.48,0-.13-.02-.26-.03-.39-.19-3.15-.43-6.3-.7-9.44,0-.13-.02-.26-.03-.39-.21-2.48-.44-4.95-.7-7.43.13,0,.26-.02.39-.03.26,2.47.49,4.94.7,7.41,0,.12.02.26.03.38.26,3.13.5,6.27.7,9.41,0,.13.02.26.02.39.05.83.1,1.66.15,2.49Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M839.81,369.4c-.12.02-.26.04-.38.06-.05-1.08-.09-2.15-.16-3.23l-.02-.4c-.17-2.67-.41-5.33-.71-7.99-.02-.12-.03-.26-.05-.39-.29-2.41-.64-4.83-1.05-7.23.12,0,.26-.02.39-.02.41,2.4.75,4.81,1.05,7.23,0,.13.02.26.04.39.31,2.64.55,5.28.71,7.93,0,.13.02.26.02.39.07,1.09.12,2.17.16,3.26Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M849.06,368.17c-.13.02-.26.03-.39.04-.07-1.23-.16-2.48-.28-3.71,0-.12-.02-.23-.03-.35-.22-2.23-.51-4.44-.88-6.64-.02-.13-.04-.26-.07-.4-.42-2.46-.94-4.9-1.55-7.32.13,0,.26-.02.4-.02.61,2.43,1.13,4.87,1.56,7.33.02.13.04.26.06.4.36,2.19.66,4.39.88,6.6,0,.12.02.23.03.35.12,1.24.21,2.48.28,3.72Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M857.69,365.12c0,.73,0,1.46-.04,2.2-.12,0-.26.02-.38.03.02-.87.03-1.74.03-2.61,0-.37,0-.74-.02-1.12,0-.13,0-.26,0-.4-.03-1.26-.09-2.51-.17-3.76-.05-.68-.1-1.34-.17-2.02,0-.13-.02-.26-.04-.39-.25-2.57-.63-5.13-1.13-7.67.13,0,.26,0,.39-.02.5,2.54.88,5.11,1.13,7.68.02.13.02.26.04.4.06.7.12,1.4.17,2.1.09,1.22.14,2.44.16,3.65,0,.13,0,.26,0,.39,0,.5.02,1.02.02,1.52Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M866.99,366.82c-.12,0-.26,0-.39,0-.03-1.14-.08-2.28-.13-3.42,0-.13,0-.26-.02-.4-.09-1.82-.18-3.64-.29-5.45,0-.13-.02-.26-.02-.39-.17-2.68-.37-5.35-.61-8.03.13,0,.26,0,.39-.02.23,2.68.43,5.37.61,8.05,0,.12.02.26.02.38.12,1.82.21,3.64.29,5.45,0,.13.02.27.02.4.05,1.13.1,2.27.13,3.41Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M875.48,366.8c-.13,0-.26,0-.39,0-.02-.32-.05-.63-.07-.94-.05-.71-.1-1.43-.15-2.15h0c0-.12-.02-.26-.02-.39-.09-1.17-.17-2.34-.25-3.52-.05-.71-.1-1.42-.16-2.13,0-.12-.02-.25-.02-.38-.19-2.75-.39-5.52-.59-8.28h.39c.2,2.76.4,5.52.59,8.29,0,.13.02.26.02.38.05.71.11,1.42.16,2.13.09,1.19.16,2.37.25,3.55,0,.13.02.26.03.39.05.71.1,1.42.15,2.13.02.32.05.63.07.95Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M884.74,357.24c0,.12,0,.24,0,.36,0,.51-.02,1.02-.04,1.53-.05,1.66-.09,3.33-.14,4.99,0,.12,0,.26,0,.38-.02.89-.05,1.78-.08,2.67-.12,0-.26-.02-.39-.02.02-.89.05-1.79.08-2.68,0-.12,0-.26,0-.38.05-1.58.09-3.17.13-4.76.02-.57.03-1.14.05-1.71v-.36c.06-2.79.02-5.59-.65-8.29h.4c.65,2.71.71,5.51.65,8.29Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M894.59,357.14c0,.13,0,.26-.02.4-.13,2.56-.37,5.12-.72,7.67-.02.13-.03.26-.05.38-.1.76-.21,1.51-.34,2.27-.13,0-.26-.02-.4-.03.13-.76.25-1.52.34-2.28.03-.12.05-.26.05-.38.35-2.53.59-5.07.72-7.63,0-.13.02-.26.02-.4.13-2.68.15-5.38.05-8.06.13,0,.26,0,.39,0,.1,2.68.08,5.38-.05,8.06Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M904.22,353.65c0,1.39,0,2.79-.05,4.18,0,.12,0,.25,0,.38-.05,1.76-.12,3.53-.22,5.29-.05,1.02-.11,2.06-.22,3.07,0,.13-.02.26-.04.38-.07.64-.16,1.28-.29,1.92-.13-.02-.26-.02-.39-.05.13-.64.23-1.28.29-1.93.02-.12.03-.26.04-.38.02-.1.02-.19.03-.29.17-1.96.26-3.93.33-5.9.03-.72.05-1.44.07-2.16,0-.13,0-.26,0-.39.06-2.79.06-5.57-.02-8.35.13,0,.26.02.4.02.04,1.4.05,2.8.05,4.21Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M914.01,361.02c-3.12-1.44-6.45-2.3-9.84-2.81-.13-.02-.26-.04-.39-.05-2.37-.33-4.76-.5-7.14-.57-.69-.02-1.38-.04-2.08-.05-.13,0-.26,0-.4,0-3.14-.04-6.29.02-9.44.07-.13,0-.26,0-.39,0-2.48.05-4.95.09-7.43.08-.7,0-1.39,0-2.09-.02-.13,0-.26,0-.39,0-2.63-.02-5.26-.05-7.89-.1-.13,0-.26,0-.39,0-2.94-.04-5.89-.09-8.83-.1-.13,0-.26,0-.4,0-.39,0-.78,0-1.17,0-2.63,0-5.27,0-7.9.05-.13,0-.26,0-.4,0-2.86.05-5.71.16-8.57.32-.13,0-.26.02-.38.02-1.26.08-2.53.17-3.79.27-1.78.15-3.56.33-5.34.54-.13.02-.26.04-.39.05-3.03.37-6.04.85-9.04,1.45-.12.02-.26.05-.38.08-1.92.39-3.83.83-5.72,1.33-.24.07-.34-.31-.1-.37.85-.23,1.7-.44,2.56-.64,1.08-.26,2.16-.49,3.24-.71.13-.02.26-.05.38-.08,2.99-.6,6-1.07,9.02-1.44.13-.02.26-.03.39-.05,2.6-.31,5.2-.55,7.81-.73.43-.03.87-.05,1.3-.09.12,0,.26-.02.39-.02,2.84-.16,5.69-.26,8.54-.33.13,0,.27,0,.4,0,3.03-.05,6.06-.06,9.09-.04.13,0,.26,0,.4,0,.41,0,.82,0,1.23,0,2.54.02,5.08.06,7.62.1.13,0,.26,0,.39,0,2.63.04,5.26.08,7.89.1.13,0,.26,0,.39,0,1.68.02,3.37.02,5.05.02,1.5,0,2.99-.02,4.49-.05.13,0,.26,0,.4,0,3.15-.06,6.3-.14,9.45-.11.13,0,.26,0,.4,0,1.61.02,3.23.09,4.84.19,1.45.09,2.91.24,4.36.44.13.02.26.04.39.06,3.39.5,6.71,1.37,9.82,2.77,0,.14,0,.28,0,.42Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M913.56,368c-.04.13-.07.26-.11.37-1.75-.26-3.51-.5-5.26-.76-1.5-.22-2.99-.43-4.49-.65-.12-.02-.26-.04-.39-.06-1.89-.26-3.78-.54-5.66-.8-1.29-.18-2.57-.35-3.86-.51-.13-.02-.26-.04-.4-.05-2.94-.39-5.9-.74-8.85-1.04-.13-.02-.26-.02-.39-.04-2.67-.27-5.34-.5-8.02-.68-.29-.02-.58-.04-.88-.05-.13,0-.26-.02-.39-.02h0c-2.67-.16-5.34-.26-8.01-.29-.13,0-.26,0-.39,0-2.93-.03-5.87.03-8.8.19-.12,0-.26.02-.39.02-.76.05-1.53.09-2.29.16-2.08.16-4.15.38-6.22.66-.13.02-.26.04-.39.05-1.33.19-2.65.4-3.96.64-1.61.29-3.2.64-4.79,1.01-.12.03-.26.06-.38.09-1.72.4-3.45.84-5.17,1.27-1.32.33-2.65.66-3.97.95-.12.03-.26.06-.38.09-1.9.41-3.81.76-5.74.99-.92.1-1.83.18-2.75.21-.13,0-.26.02-.39.02-2.38.08-4.76-.07-7.12-.43,0-.13-.02-.26-.02-.4.85.13,1.71.25,2.57.32,1.5.13,3,.17,4.49.12.13,0,.26,0,.4,0,1.85-.09,3.69-.29,5.52-.61,1.01-.17,2.01-.37,3.01-.59.13-.02.26-.05.39-.09,2.21-.49,4.41-1.06,6.6-1.62.85-.21,1.69-.41,2.54-.61.13-.03.26-.06.38-.09,2.89-.65,5.8-1.2,8.74-1.61.13-.02.26-.05.39-.05,2.7-.39,5.41-.67,8.15-.84.13,0,.26-.02.39-.02.13,0,.26-.02.39-.02,2.93-.17,5.86-.23,8.79-.2h.39c2.67.04,5.34.14,8,.3.12,0,.26.02.39.02.78.05,1.54.1,2.32.16,2.2.16,4.41.36,6.61.58.13,0,.26.02.39.04,2.97.3,5.93.65,8.89,1.04.13.02.26.03.4.05,1.4.19,2.8.37,4.21.57,1.77.24,3.53.5,5.3.75.13.02.26.04.39.06,1.55.22,3.11.45,4.66.67,1.71.25,3.44.5,5.16.74Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                </g>
                <g id="Full_bed" filter="url(#drop-shadow-16)">
                    <g>
                    <path d="M186.38,357.49h69.72c2.32,0,4.2,1.88,4.2,4.2v96.06c0,.44-.35.79-.79.79h-76.29c-.57,0-1.04-.47-1.04-1.04v-95.81c0-2.32,1.88-4.2,4.2-4.2Z" transform="translate(-186.78 629.26) rotate(-90)" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M272.01,369.92v75.89c0,.87-.55,1.57-1.23,1.57h-96.04c-2.35,0-4.26-2.44-4.26-5.44v-67.86c0-3,1.91-5.44,4.26-5.44h96.28c.55,0,1,.57,1,1.27ZM170.95,441.95c0,2.66,1.7,4.83,3.78,4.83h96.04c.42,0,.75-.43.75-.96v-75.89c0-.37-.23-.66-.52-.66h-96.28c-2.08,0-3.78,2.17-3.78,4.83v67.86Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <rect x="129.5" y="403.72" width="82.83" height="8.93" rx="2.63" ry="2.63" transform="translate(-237.27 579.09) rotate(-90)" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M175.61,369.97v76.41c0,1.94-1.23,3.51-2.75,3.51h-3.9c-1.52,0-2.75-1.58-2.75-3.51v-76.41c0-1.94,1.23-3.51,2.75-3.51h3.9c1.52,0,2.75,1.58,2.75,3.51ZM166.69,446.38c0,1.6,1.02,2.9,2.27,2.9h3.9c1.25,0,2.27-1.3,2.27-2.9v-76.41c0-1.6-1.02-2.9-2.27-2.9h-3.9c-1.25,0-2.27,1.3-2.27,2.9v76.41Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M217.06,447.98c4.55.43,31.88,1.08,35.64.43,3.77-.65,15.39,2.16,15.23-.22-.16-2.37,1.41-33.24,2.04-40.36.63-7.12,2.04-22.44,2.83-27.19.79-4.75.47-12.73-.79-13.16-1.26-.43-52.92-.22-55.9.65-2.98.86.94,79.85.94,79.85Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M273.47,374.61c0,2.16-.15,4.4-.43,6.11-.87,5.25-2.5,23.55-2.82,27.16-.63,7.13-2.18,37.99-2.04,40.3.02.25-.05.47-.19.65-.74.95-3.62.71-8.26.22-2.7-.29-5.5-.58-6.98-.33-3.81.65-31.08,0-35.69-.43l-.21-.02v-.27c-.02-.2-1-19.98-1.6-39.61-1.23-39.96.27-40.4.83-40.56,2.35-.68,54.18-1.28,56.02-.64.96.33,1.39,3.77,1.39,7.42ZM267.69,447.68c0-4.76,1.43-32.81,2.05-39.88.32-3.62,1.96-21.94,2.83-27.22.85-5.15.34-12.48-.61-12.81-.62-.2-13.12-.26-27.28-.15-12.8.1-27,.37-28.5.8-.39.16-1.58,3.51-.46,40.06.56,18.34,1.45,36.78,1.57,39.21,5.15.44,31.65,1.06,35.39.41,1.53-.26,4.36.04,7.09.33,3.4.36,7.25.77,7.88-.04.05-.07.06-.12.05-.17,0-.12-.01-.3-.01-.54Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M218.03,366.76c.56.66-1.14,16.19-1.08,28.3.12,24.97.87,52.48.54,54.54-.25,1.58-4.25,1.48-8.02,1.55-3.53.06-6.82.38-7.8-.93-2.04-2.7-2.08-79.63.65-82.84,1.21-1.42,4.29-1.25,7.26-1.39,3.77-.18,7.49-.36,8.45.77Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M218.38,367.92c0,1.23-.13,3.46-.38,7.41-.36,5.57-.84,13.2-.81,19.73.06,11.6.25,23.82.4,33.64.18,11.51.31,19.82.13,20.96-.27,1.69-3.51,1.73-7.27,1.78h-.99c-.51.02-1.02.04-1.52.05-3.1.09-5.55.15-6.46-1.06-1.49-1.96-1.82-36.01-1.32-58,.24-10.76.79-23.87,1.98-25.28,1.08-1.26,3.45-1.34,5.97-1.42.48-.01.96-.03,1.44-.05,3.9-.19,7.59-.37,8.63.85h0c.13.15.19.53.19,1.38ZM216.7,394.43c0-6.42.47-13.75.82-19.15.26-4.01.5-7.79.33-8.31-.92-1.03-4.82-.84-8.26-.67-.48.02-.97.04-1.45.05-2.42.08-4.72.15-5.66,1.26-.3.36-1.33,3.21-1.83,24.84-.58,25.4.05,56.06,1.19,57.56.77,1.02,3.36.95,6.11.87.5-.01,1.01-.03,1.52-.04h.99c2.95-.05,6.61-.1,6.8-1.3.17-1.07.03-9.79-.14-20.83-.16-9.82-.35-22.04-.4-33.65,0-.21,0-.42,0-.64Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M179.3,435.9c3.58,2.46,15.02.18,16.8,0,7.67-.76,3.58-54.39,1.26-56.11-1.99-1.48-18.84-1.73-19.63,1.51-.39,1.6-1.29,15.37-1.16,28.25.13,13.12,1.31,25.37,2.73,26.35Z" fill="#f2f0ed" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M200.81,413.31c0,6.09-.3,11.83-1.06,16.05-.78,4.38-2,6.68-3.64,6.84-.27.03-.76.1-1.41.2-3.72.57-12.42,1.9-15.53-.24-1.7-1.17-2.74-14.58-2.86-26.61-.13-12.8.77-26.67,1.17-28.35.13-.53.56-.97,1.31-1.34,4.01-2,16.91-1.64,18.67-.34,1.43,1.06,3.33,18.51,3.33,33.79ZM176.79,407.01c0,.85,0,1.69.01,2.54.15,14.63,1.47,25.3,2.61,26.08h0c2.97,2.04,11.57.73,15.24.17.66-.1,1.15-.18,1.43-.2,1.4-.14,2.48-2.28,3.21-6.37,2.75-15.4-.55-48.06-2.05-49.17-1.71-1.27-14.33-1.58-18.26.38-.75.37-.97.73-1.03.96-.37,1.54-1.17,13.64-1.17,25.62Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                </g>
                <g id="Full_bed1" data-name="Full_bed" filter="url(#drop-shadow-17)">
                    <g>
                    <path d="M208.02,930.87h69.72c2.32,0,4.2,1.88,4.2,4.2v96.06c0,.44-.35.79-.79.79h-76.29c-.57,0-1.04-.47-1.04-1.04v-95.81c0-2.32,1.88-4.2,4.2-4.2Z" transform="translate(485.75 1962.79) rotate(-180)" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M204.78,930.63h75.89c.87,0,1.57.55,1.57,1.23v96.04c0,2.35-2.44,4.26-5.44,4.26h-67.86c-3,0-5.44-1.91-5.44-4.26v-96.28c0-.55.57-1,1.27-1ZM276.8,1031.69c2.66,0,4.83-1.7,4.83-3.78v-96.04c0-.42-.43-.75-.96-.75h-75.89c-.37,0-.66.23-.66.52v96.28c0,2.08,2.17,3.78,4.83,3.78h67.86Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <rect x="201.62" y="1027.27" width="82.83" height="8.93" rx="2.63" ry="2.63" transform="translate(486.07 2063.46) rotate(-180)" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M204.83,1027.03h76.41c1.94,0,3.51,1.23,3.51,2.75v3.9c0,1.52-1.58,2.75-3.51,2.75h-76.41c-1.94,0-3.51-1.23-3.51-2.75v-3.9c0-1.52,1.58-2.75,3.51-2.75ZM281.24,1035.95c1.6,0,2.9-1.02,2.9-2.27v-3.9c0-1.25-1.3-2.27-2.9-2.27h-76.41c-1.6,0-2.9,1.02-2.9,2.27v3.9c0,1.25,1.3,2.27,2.9,2.27h76.41Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M282.84,985.58c.43-4.55,1.08-31.88.43-35.64-.65-3.77,2.16-15.39-.22-15.23-2.37.16-33.24-1.41-40.36-2.04-7.12-.63-22.44-2.04-27.19-2.83-4.75-.79-12.73-.47-13.16.79-.43,1.26-.22,52.92.65,55.9.86,2.98,79.85-.94,79.85-.94Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M209.46,929.17c2.16,0,4.4.15,6.11.43,5.25.87,23.55,2.5,27.16,2.82,7.13.63,37.99,2.18,40.3,2.04.25-.02.47.05.65.19.95.74.71,3.62.22,8.26-.29,2.7-.58,5.5-.33,6.98.65,3.81,0,31.08-.43,35.69l-.02.21h-.27c-.2.02-19.98,1-39.61,1.6-39.96,1.23-40.4-.27-40.56-.83-.68-2.35-1.28-54.18-.64-56.02.33-.96,3.77-1.39,7.42-1.39ZM282.54,934.95c-4.76,0-32.81-1.43-39.88-2.05-3.62-.32-21.94-1.96-27.22-2.83-5.15-.85-12.48-.34-12.81.61-.2.62-.26,13.12-.15,27.28.1,12.8.37,27,.8,28.5.16.39,3.51,1.58,40.06.46,18.34-.56,36.78-1.45,39.21-1.57.44-5.15,1.06-31.65.41-35.39-.26-1.53.04-4.36.33-7.09.36-3.4.77-7.25-.04-7.88-.07-.05-.12-.06-.17-.05-.12,0-.3.01-.54.01Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M201.62,984.61c.66-.56,16.19,1.14,28.3,1.08,24.97-.12,52.48-.87,54.54-.54,1.58.25,1.48,4.25,1.55,8.02.06,3.53.38,6.82-.93,7.8-2.7,2.04-79.63,2.08-82.84-.65-1.42-1.21-1.25-4.29-1.39-7.26-.18-3.77-.36-7.49.77-8.45Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M202.77,984.26c1.23,0,3.46.13,7.41.38,5.57.36,13.2.84,19.73.81,11.6-.06,23.82-.25,33.64-.4,11.51-.18,19.82-.31,20.96-.13,1.69.27,1.73,3.51,1.78,7.27v.99c.02.51.04,1.02.05,1.52.09,3.1.15,5.55-1.06,6.46-1.96,1.49-36.01,1.82-58,1.32-10.76-.24-23.87-.79-25.28-1.98-1.26-1.08-1.34-3.45-1.42-5.97-.01-.48-.03-.96-.05-1.44-.19-3.9-.37-7.59.85-8.63h0c.15-.13.53-.19,1.38-.19ZM229.28,985.94c-6.42,0-13.75-.47-19.15-.82-4.01-.26-7.79-.5-8.31-.33-1.03.92-.84,4.82-.67,8.26.02.48.04.97.05,1.45.08,2.42.15,4.72,1.26,5.66.36.3,3.21,1.33,24.84,1.83,25.4.58,56.06-.05,57.56-1.19,1.02-.77.95-3.36.87-6.11-.01-.5-.03-1.01-.04-1.52v-.99c-.05-2.95-.1-6.61-1.3-6.8-1.07-.17-9.79-.03-20.83.14-9.82.16-22.04.35-33.65.4-.21,0-.42,0-.64,0Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M270.75,1023.34c2.46-3.58.18-15.02,0-16.8-.76-7.67-54.39-3.58-56.11-1.26-1.48,1.99-1.73,18.84,1.51,19.63,1.6.39,15.37,1.29,28.25,1.16,13.12-.13,25.37-1.31,26.35-2.73Z" fill="#f2f0ed" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M248.17,1001.83c6.09,0,11.83.3,16.05,1.06,4.38.78,6.68,2,6.84,3.64.03.27.1.76.2,1.41.57,3.72,1.9,12.42-.24,15.53-1.17,1.7-14.58,2.74-26.61,2.86-12.8.13-26.67-.77-28.35-1.17-.53-.13-.97-.56-1.34-1.31-2-4.01-1.64-16.91-.34-18.67,1.06-1.43,18.51-3.33,33.79-3.33ZM241.87,1025.84c.85,0,1.69,0,2.54-.01,14.63-.15,25.3-1.47,26.08-2.61h0c2.04-2.97.73-11.57.17-15.24-.1-.66-.18-1.15-.2-1.43-.14-1.4-2.28-2.48-6.37-3.21-15.4-2.75-48.06.55-49.17,2.05-1.27,1.71-1.58,14.33.38,18.26.37.75.73.97.96,1.03,1.54.37,13.64,1.17,25.62,1.17Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                </g>
                <g id="Full_bed2" data-name="Full_bed" filter="url(#drop-shadow-18)">
                    <g>
                    <path d="M527.67,1001.53h69.72c2.32,0,4.2,1.88,4.2,4.2v96.06c0,.44-.35.79-.79.79h-76.29c-.57,0-1.04-.47-1.04-1.04v-95.81c0-2.32,1.88-4.2,4.2-4.2Z" transform="translate(1125.06 2104.12) rotate(-180)" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M524.44,1001.29h75.89c.87,0,1.57.55,1.57,1.23v96.04c0,2.35-2.44,4.26-5.44,4.26h-67.86c-3,0-5.44-1.91-5.44-4.26v-96.28c0-.55.57-1,1.27-1ZM596.46,1102.35c2.66,0,4.83-1.7,4.83-3.78v-96.04c0-.42-.43-.75-.96-.75h-75.89c-.37,0-.66.23-.66.52v96.28c0,2.08,2.17,3.78,4.83,3.78h67.86Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <rect x="521.28" y="1097.93" width="82.83" height="8.93" rx="2.63" ry="2.63" transform="translate(1125.39 2204.78) rotate(-180)" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M524.49,1097.69h76.41c1.94,0,3.51,1.23,3.51,2.75v3.9c0,1.52-1.58,2.75-3.51,2.75h-76.41c-1.94,0-3.51-1.23-3.51-2.75v-3.9c0-1.52,1.58-2.75,3.51-2.75ZM600.9,1106.61c1.6,0,2.9-1.02,2.9-2.27v-3.9c0-1.25-1.3-2.27-2.9-2.27h-76.41c-1.6,0-2.9,1.02-2.9,2.27v3.9c0,1.25,1.3,2.27,2.9,2.27h76.41Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M602.5,1056.24c.43-4.55,1.08-31.88.43-35.64-.65-3.77,2.16-15.39-.22-15.23-2.37.16-33.24-1.41-40.36-2.04-7.12-.63-22.44-2.04-27.19-2.83-4.75-.79-12.73-.47-13.16.79-.43,1.26-.22,52.92.65,55.9.86,2.98,79.85-.94,79.85-.94Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M529.12,999.83c2.16,0,4.4.15,6.11.43,5.25.87,23.55,2.5,27.16,2.82,7.13.63,37.99,2.18,40.3,2.04.25-.02.47.05.65.19.95.74.71,3.62.22,8.26-.29,2.7-.58,5.5-.33,6.98.65,3.81,0,31.08-.43,35.69l-.02.21h-.27c-.2.02-19.98,1-39.61,1.6-39.96,1.23-40.4-.27-40.56-.83-.68-2.35-1.28-54.18-.64-56.02.33-.96,3.77-1.39,7.42-1.39ZM602.2,1005.61c-4.76,0-32.81-1.43-39.88-2.05-3.62-.32-21.94-1.96-27.22-2.83-5.15-.85-12.48-.34-12.81.61-.2.62-.26,13.12-.15,27.28.1,12.8.37,27,.8,28.5.16.39,3.51,1.58,40.06.46,18.34-.56,36.78-1.45,39.21-1.57.44-5.15,1.06-31.65.41-35.39-.26-1.53.04-4.36.33-7.09.36-3.4.77-7.25-.04-7.88-.07-.05-.12-.06-.17-.05-.12,0-.3.01-.54.01Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M521.27,1055.27c.66-.56,16.19,1.14,28.3,1.08,24.97-.12,52.48-.87,54.54-.54,1.58.25,1.48,4.25,1.55,8.02.06,3.53.38,6.82-.93,7.8-2.7,2.04-79.63,2.08-82.84-.65-1.42-1.21-1.25-4.29-1.39-7.26-.18-3.77-.36-7.49.77-8.45Z" fill="#ede3d6" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M522.43,1054.92c1.23,0,3.46.13,7.41.38,5.57.36,13.2.84,19.73.81,11.6-.06,23.82-.25,33.64-.4,11.51-.18,19.82-.31,20.96-.13,1.69.27,1.73,3.51,1.78,7.27v.99c.02.51.04,1.02.05,1.52.09,3.1.15,5.55-1.06,6.46-1.96,1.49-36.01,1.82-58,1.32-10.76-.24-23.87-.79-25.28-1.98-1.26-1.08-1.34-3.45-1.42-5.97-.01-.48-.03-.96-.05-1.44-.19-3.9-.37-7.59.85-8.63h0c.15-.13.53-.19,1.38-.19ZM548.94,1056.6c-6.42,0-13.75-.47-19.15-.82-4.01-.26-7.79-.5-8.31-.33-1.03.92-.84,4.82-.67,8.26.02.48.04.97.05,1.45.08,2.42.15,4.72,1.26,5.66.36.3,3.21,1.33,24.84,1.83,25.4.58,56.06-.05,57.56-1.19,1.02-.77.95-3.36.87-6.11-.01-.5-.03-1.01-.04-1.52v-.99c-.05-2.95-.1-6.61-1.3-6.8-1.07-.17-9.79-.03-20.83.14-9.82.16-22.04.35-33.65.4-.21,0-.42,0-.64,0Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M590.41,1094c2.46-3.58.18-15.02,0-16.8-.76-7.67-54.39-3.58-56.11-1.26-1.48,1.99-1.73,18.84,1.51,19.63,1.6.39,15.37,1.29,28.25,1.16,13.12-.13,25.37-1.31,26.35-2.73Z" fill="#f2f0ed" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M567.82,1072.49c6.09,0,11.83.3,16.05,1.06,4.38.78,6.68,2,6.84,3.64.03.27.1.76.2,1.41.57,3.72,1.9,12.42-.24,15.53-1.17,1.7-14.58,2.74-26.61,2.86-12.8.13-26.67-.77-28.35-1.17-.53-.13-.97-.56-1.34-1.31-2-4.01-1.64-16.91-.34-18.67,1.06-1.43,18.51-3.33,33.79-3.33ZM561.53,1096.51c.85,0,1.69,0,2.54-.01,14.63-.15,25.3-1.47,26.08-2.61h0c2.04-2.97.73-11.57.17-15.24-.1-.66-.18-1.15-.2-1.43-.14-1.4-2.28-2.48-6.37-3.21-15.4-2.75-48.06.55-49.17,2.05-1.27,1.71-1.58,14.33.38,18.26.37.75.73.97.96,1.03,1.54.37,13.64,1.17,25.62,1.17Z" fill="#e0ceb3" stroke="#cab394" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                </g>
                <g id="Plant2" data-name="Plant" filter="url(#drop-shadow-19)">
                    <g>
                    <path d="M973.43,505.21c2.43.39,4.68,1.27,5.57,3.15-.66-.09-1.72.16-2.46.39-1.02.32-2.72.93-3.24,2.9-.51,1.97.36.48,1.96-.97,1.12-1.02,2.75-1.3,4.15-.75.01.1.02.19.02.29.03,1.42-.34,2.66-.88,3.62-.87,1.56-2.19,2.37-2.96,2-2.79-1.35-.8,5.08-3.17,5.78-.85.25-1.85.09-2.83-.37-.45-1.44-.77-2.65-.24-3.99.41-1.03.84-2.28.61-2.58-.19-.24-.97.31-1.26.68-1.17,1.52-1.03,3.59-.44,5.08-1.24-.95-2.31-2.33-2.87-3.94-.24-.68-.54-1.46-.85-2.28,1.26-1.07,3.2-2.09,2.97-2.31-.34-.32-2.27.3-3.41,1.2-1.16-2.99-2.36-6.14-1.87-6.82.4-.55,2.32-.99,4.59-1.21-.28,1.89.28,3.93.74,4.1.45.16-.1-2.49-.08-4.15,1.48-.1,3.04-.12,4.4,0h.05c-1.28,2.03-1.27,5.71-.78,5.79.49.08.2-3.31,2.29-5.6Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M971.56,521.91c-.64,0-1.34-.17-2.05-.51l-.07-.03-.02-.08c-.47-1.49-.78-2.74-.23-4.11.83-2.06.66-2.38.63-2.4-.1-.03-.69.32-.97.68-1.14,1.49-.97,3.51-.42,4.9l.24.61-.52-.4c-1.34-1.03-2.38-2.45-2.93-4.02-.24-.69-.55-1.49-.85-2.27l-.05-.12.1-.08c.56-.47,1.26-.94,1.82-1.32.39-.26.87-.58,1.05-.76-.44-.07-1.97.38-3.07,1.24l-.19.15-.09-.23c-1.41-3.64-2.37-6.27-1.85-6.99.6-.84,3.76-1.19,4.72-1.28l.23-.02-.03.23c-.26,1.76.23,3.5.55,3.84.04-.28-.03-1.06-.1-1.7-.07-.73-.16-1.56-.15-2.23v-.17s.17-.01.17-.01c1.12-.08,2.8-.14,4.42,0l.33.05-.15.23c-1.18,1.87-1.17,4.9-.92,5.45.06-.16.13-.51.18-.82.22-1.18.58-3.15,1.96-4.66l.07-.07.1.02c2.99.49,4.91,1.58,5.71,3.25l.14.3-.33-.05c-.75-.11-2.01.27-2.38.39-.85.27-2.61.82-3.12,2.78-.09.33-.12.53-.13.64.15-.13.38-.37.6-.6.33-.34.73-.77,1.2-1.19,1.16-1.05,2.87-1.36,4.34-.79l.1.04v.1c.03.11.04.21.04.32.03,1.68-.47,2.94-.9,3.71-.89,1.59-2.3,2.51-3.19,2.07-.38-.18-.65-.22-.85-.1-.46.26-.56,1.32-.65,2.35-.14,1.49-.3,3.18-1.53,3.54-.29.08-.6.12-.91.12ZM969.74,521.11c.95.44,1.86.55,2.63.33,1-.29,1.14-1.85,1.27-3.23.12-1.22.21-2.28.84-2.63.31-.18.7-.15,1.19.09.63.3,1.87-.4,2.72-1.92.41-.73.88-1.93.85-3.53,0-.05,0-.11,0-.16-1.32-.47-2.82-.18-3.86.76-.46.41-.86.84-1.18,1.17-.6.63-.85.89-1.09.76-.19-.11-.19-.37,0-1.14.57-2.15,2.46-2.74,3.37-3.03.43-.14,1.42-.42,2.21-.42h0c-.81-1.38-2.56-2.31-5.19-2.75-1.26,1.43-1.6,3.29-1.81,4.41-.15.79-.23,1.23-.58,1.17-.12-.02-.21-.11-.28-.26-.37-.81-.21-3.72.79-5.55-1.15-.09-2.55-.09-3.96,0,0,.62.08,1.36.15,2.03.14,1.41.17,1.92-.05,2.09-.07.06-.17.07-.26.04-.57-.2-1.09-2.24-.89-4.06-2.23.23-3.91.67-4.23,1.11-.44.6.88,4.03,1.81,6.43,1.14-.81,3.02-1.46,3.45-1.04.05.05.08.12.07.2-.02.23-.33.45-1.27,1.08-.55.37-1.17.78-1.69,1.21.29.74.58,1.5.81,2.16.46,1.31,1.28,2.51,2.33,3.45-.4-1.43-.4-3.25.67-4.65.25-.32.88-.81,1.26-.81h0c.15,0,.24.07.28.13.16.21.24.71-.58,2.76-.5,1.24-.23,2.36.22,3.8Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M982.14,519.42c1.7.56,3.22,2.47,3.44,3.83.14.86-.2,1.98-.98,3.09-1.21-1.46-4.01-3.29-5.07-3.38-.95-.09,1.05.53,2.84,2.17.58.53,1.1,1.32,1.53,2.09-.96,1.07-2.32,2.06-4.04,2.75-.48-1.65-1.99-4.27-2.96-4.48-.7-.15.75,1.31,1.68,2.79.41.67.65,1.34.74,1.89-.9.31-1.9.54-2.97.65-.42.04-.81.11-1.18.2-.38-1.15-1.3-2.78-1.95-2.89-.76-.13.76,1.58.94,3.21-1.93.74-2.78,1.86-3.44,1.26-.41-.39-1.07-1.88-1.56-3.73,1.35-1.08,2.88-.59,2.53-1.06-.29-.4-1.71-.31-2.75.16-.38-1.76-.57-3.71-.26-5.29,2.28-.52,4.42.52,4.91.84.54.36.62-.67-1.5-1.54-1.14-.47-2.29-.56-3.12-.52.38-1.42.93-2.86,1.71-4.03.93.17,1.78.38,2.46.89,1.53,1.12,2.39,2.81,2.53,2.38.21-.57-2.65-3.38-4.34-4.14.98-1.1,2.22-1.77,3.77-1.61,3.72.37,3.97,2.5,4.03,3.63.06,1.36,1.68.39,3.02.84Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M971.13,532.95c-.19,0-.37-.07-.54-.22-.47-.44-1.15-2.05-1.61-3.82l-.03-.11.09-.07c.81-.65,1.67-.75,2.19-.82.08,0,.17-.02.24-.03-.35-.22-1.48-.18-2.46.26l-.2.09-.05-.22c-.31-1.46-.61-3.58-.26-5.36l.02-.12.11-.03c2.27-.52,4.46.48,5.05.87,0,0,.02.01.03.02-.07-.2-.43-.72-1.7-1.24-1.23-.51-2.44-.53-3.04-.5h-.25s.06-.23.06-.23c.43-1.6,1.02-3.01,1.73-4.09l.07-.1.12.02c.88.16,1.79.37,2.54.92.81.6,1.45,1.36,1.87,1.86.1.12.21.25.3.36-.44-.8-2.62-2.97-4.16-3.67l-.23-.1.16-.18c1.12-1.26,2.44-1.82,3.92-1.67,4.02.4,4.14,2.87,4.19,3.8,0,.22.06.37.16.45.2.18.61.15,1.1.12.51-.03,1.09-.07,1.64.11h0c1.81.6,3.33,2.57,3.56,3.97.15.92-.22,2.09-1.01,3.22l-.14.19-.15-.18c-1.01-1.21-3.04-2.61-4.27-3.12.62.36,1.48.9,2.3,1.66.51.47,1.04,1.19,1.56,2.13l.06.11-.09.1c-1.06,1.17-2.47,2.14-4.1,2.79l-.19.08-.06-.19c-.48-1.65-1.88-4-2.73-4.33.12.21.4.58.66.92.36.47.77,1.01,1.12,1.57.5.82.7,1.52.77,1.96l.02.15-.14.05c-.95.33-1.96.55-3.01.66-.39.04-.78.11-1.15.2l-.16.04-.05-.16c-.39-1.17-1.27-2.66-1.8-2.76.04.15.19.46.32.72.31.62.73,1.46.82,2.3v.14s-.12.05-.12.05c-.73.28-1.31.62-1.77.89-.52.3-.94.55-1.31.55ZM969.36,528.93c.5,1.86,1.13,3.2,1.48,3.53.29.27.65.08,1.42-.38.45-.26,1-.59,1.69-.87-.11-.73-.49-1.48-.76-2.04-.3-.59-.46-.92-.31-1.13.07-.1.2-.14.36-.11.78.14,1.68,1.84,2.04,2.85.34-.08.69-.13,1.04-.17.97-.1,1.91-.3,2.78-.59-.11-.54-.35-1.13-.69-1.68-.34-.54-.74-1.07-1.1-1.54-.68-.9-.89-1.2-.75-1.42.05-.07.15-.15.36-.1,1.03.22,2.5,2.75,3.04,4.42,1.46-.62,2.73-1.49,3.7-2.53-.49-.85-.97-1.5-1.43-1.93-.95-.87-1.95-1.45-2.55-1.79-.5-.29-.64-.37-.58-.55.06-.18.27-.16.43-.14,1.07.09,3.75,1.85,5.03,3.27.65-.99.95-1.99.82-2.76-.22-1.29-1.68-3.14-3.32-3.68h0c-.49-.16-1.03-.13-1.51-.09-.56.04-1.05.07-1.36-.21-.17-.16-.27-.39-.28-.71-.05-.92-.15-3.09-3.86-3.46-1.3-.13-2.45.33-3.45,1.38,1.69.88,4.48,3.53,4.21,4.26-.05.14-.14.17-.2.18-.21.04-.4-.18-.81-.67-.43-.52-1.03-1.23-1.81-1.8-.59-.44-1.31-.65-2.27-.83-.62.98-1.16,2.23-1.55,3.64.68-.02,1.8.06,2.95.54,1.39.57,1.91,1.22,1.93,1.6,0,.14-.04.25-.15.31-.07.04-.23.09-.45-.06-.54-.36-2.54-1.28-4.65-.84-.29,1.61-.04,3.5.24,4.89,1.04-.41,2.41-.5,2.76-.01.08.11.11.22.06.32-.07.17-.28.2-.62.24-.46.06-1.21.15-1.92.67ZM973.13,528.3h0Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M982.91,518.08c-3.9,3.05.1,5.46,2.43,5.98,1.9.42,3.25.02,5.4-.73,2.02-.71,5.37-4.33,5.17-4.31-.2.03-1.72-1.41-2.29-1.93-1.13-1.06-3.83-3.15-6.37-3.56-2.69-.43-3.33,2.84-3.36,3.37-.03.53-.71.97-.98,1.18Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M986.83,524.41c-.48,0-.98-.05-1.53-.17-1.4-.31-3.76-1.43-4.15-3.12-.24-1.06.31-2.13,1.65-3.17l.12-.09c.29-.21.77-.57.79-.96.02-.38.34-2.12,1.46-3.02.59-.47,1.3-.65,2.1-.52,3.06.49,6.13,3.29,6.47,3.61l.09.09c1.22,1.14,1.92,1.75,2.09,1.8l.16-.02v.16c.1.39-3.45,3.87-5.3,4.52-1.54.54-2.69.91-3.97.91ZM986.78,513.67c-.52,0-.98.16-1.38.48-1.02.82-1.31,2.41-1.33,2.76-.03.55-.6.98-.94,1.23l-.11.09c-1.22.95-1.73,1.9-1.52,2.81.35,1.53,2.56,2.56,3.87,2.85,1.88.42,3.24,0,5.3-.73,1.72-.6,4.42-3.36,4.98-4.05-.28-.18-.82-.64-2.06-1.79l-.09-.09c-.33-.31-3.32-3.04-6.28-3.51-.15-.02-.3-.04-.44-.04Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M980.95,508.85c2.52,2.87,4.23-.19,4.53-1.96.25-1.44-.12-2.45-.79-4.05-.63-1.51-3.57-3.95-3.54-3.8.03.15-1.02,1.33-1.4,1.77-.77.88-2.28,2.96-2.5,4.88-.23,2.03,2.33,2.45,2.75,2.46.41,0,.78.51.95.71Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M982.94,510.21c-.69,0-1.41-.42-2.13-1.24h0l-.08-.09c-.17-.21-.46-.55-.75-.56-.31,0-1.7-.22-2.45-1.07-.38-.44-.54-.97-.47-1.58.26-2.33,2.31-4.72,2.54-4.98l.06-.06c.79-.89,1.22-1.42,1.3-1.59l-.02-.12.16-.05c.37-.11,3.22,2.61,3.76,3.91.66,1.59,1.05,2.64.8,4.15-.19,1.09-.94,2.85-2.24,3.22-.16.04-.32.07-.48.07ZM981.23,499.28c-.15.23-.5.67-1.3,1.57l-.05.06c-.23.26-2.21,2.56-2.45,4.78-.06.51.07.95.39,1.3.67.76,1.96.95,2.18.95.45.01.8.44,1.02.69l.07.08c.79.9,1.54,1.26,2.24,1.06,1.13-.32,1.81-1.97,1.98-2.93.24-1.42-.14-2.42-.77-3.95-.52-1.25-2.69-3.17-3.29-3.62Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <path d="M975.97,523.71c.48-.3.82-.74,1.16-1.18.4-.52.78-1.05,1.14-1.59.72-1.09,1.37-2.22,1.94-3.39.06-.13-.04-.32-.2-.27-.32.11-.63.1-.93-.06-.21-.11-.39.21-.18.31.39.2.79.23,1.2.09-.07-.09-.14-.18-.2-.27-.54,1.1-1.15,2.18-1.82,3.2-.33.5-.67.99-1.02,1.46-.37.49-.73,1.04-1.27,1.37-.2.12-.02.44.18.31h0Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M980.22,517.44c1.71.27,3.46-.04,5.18.13,1.96.2,3.78,1.19,5.7,1.59.23.05.32-.3.1-.35-1.9-.4-3.7-1.34-5.63-1.58-1.74-.22-3.51.13-5.25-.14-.23-.04-.33.31-.1.35h0Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M970.87,512.97c.93.94,2.06,1.66,3.3,2.12.22.08.31-.27.1-.35-1.18-.44-2.25-1.13-3.14-2.03-.16-.17-.42.09-.26.26h0Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    <g>
                    <path d="M995.95,506.78c.11.54-.21,1.62-.78,2.87-.83-.57-2.1-1.08-2.79-1.22-.91-.18.59,1.39,2.11,2.53-.62,1.09-1.39,2.21-2.23,3.15-.68-1.24-1.98-3.2-2.56-3.67-.84-.68-1.94-.72-1,.01.87.67,2.01,2.42,2.63,4.59-.26.23-.53.44-.8.63-.95.66-2.24,1.17-3.57,1.49-.36-1.93-1.81-5.4-2.41-5.04-.66.39,1.33,2.63,1.21,5.25-2.42.33-4.74-.06-5.33-1.58-1.03-2.6,0-3.15-.54-3.7-.55-.56-.67.39-1.01-.69-.56-1.77-.24-3.34.52-4.6.16.03.34.07.53.12,1.29.35,3.05,1.29,3.23,1.74.35.86,1.65.17.73-.94-.71-.87-2.83-1.4-4.13-1.43.99-1.32,2.46-2.23,3.77-2.57.63-.16,1.64-.16,2.83-.03.99,2.61-.18,3.92.38,4.06.55.13,2.05-2.34,1.59-3.78,1.1.2,2.24.45,3.3.74-.28,1.72-.83,2.24-.17,2.05.61-.17,1.27-1,1.47-1.66,1.69.55,2.93,1.17,3.03,1.69Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M984.26,517.66c-1.78,0-3.48-.47-4-1.8-.64-1.61-.51-2.49-.43-3.01.05-.36.07-.49-.08-.63-.17-.17-.24-.15-.35-.12-.35.1-.52-.06-.7-.64-.52-1.65-.33-3.29.54-4.75l.07-.11.12.02c.19.04.36.07.54.12,1.28.35,3.13,1.3,3.35,1.85.07.17.19.27.33.27.13,0,.26-.07.33-.2.11-.22.02-.52-.24-.83-.69-.84-2.8-1.34-3.99-1.37h-.35s.21-.29.21-.29c.94-1.25,2.42-2.26,3.87-2.63.78-.2,2-.13,2.89-.04h.11s.04.12.04.12c.62,1.65.42,2.78.29,3.46-.03.19-.08.43-.05.48.04.01.17-.03.4-.29.62-.71,1.3-2.29.99-3.26l-.09-.29.3.05c1.09.19,2.23.45,3.32.75l.16.04-.03.16c-.11.69-.27,1.2-.37,1.53-.04.12-.08.25-.1.33.02,0,.04,0,.07-.02.55-.15,1.16-.94,1.34-1.54l.05-.18.18.06c1.98.65,3.04,1.27,3.15,1.83.11.56-.18,1.65-.8,2.98l-.09.19-.18-.12c-.8-.55-2.05-1.06-2.72-1.19-.02,0-.03,0-.04,0,.14.32,1.02,1.27,2.29,2.21l.13.1-.08.14c-.68,1.19-1.46,2.29-2.25,3.18l-.17.19-.12-.22c-.71-1.29-1.99-3.19-2.51-3.62-.4-.32-.81-.46-1.01-.48.04.05.11.12.23.21.84.65,2.04,2.39,2.7,4.69l.03.11-.08.08c-.24.22-.5.43-.81.64-.93.64-2.22,1.18-3.64,1.51l-.19.04-.03-.19c-.4-2.14-1.74-4.92-2.13-4.92h0c-.16.09.12.73.36,1.28.43.99,1.01,2.33.95,3.82v.15s-.16.02-.16.02c-.5.07-1.02.11-1.53.11ZM979.52,511.72c.13,0,.3.05.49.25.28.28.24.57.18.94-.08.52-.2,1.3.4,2.82.58,1.48,2.93,1.74,4.99,1.48.02-1.35-.52-2.59-.92-3.51-.37-.86-.64-1.48-.21-1.74.11-.06.24-.07.36-.01.76.34,1.91,3.26,2.28,4.99,1.3-.33,2.48-.83,3.33-1.41.26-.18.49-.36.69-.54-.64-2.16-1.76-3.79-2.54-4.39-.32-.25-.45-.44-.43-.61.01-.1.08-.18.18-.22.3-.12.97.13,1.47.53.59.47,1.78,2.28,2.48,3.5.69-.8,1.37-1.76,1.96-2.79-.53-.42-2.55-2.04-2.31-2.6.05-.1.17-.22.47-.16.66.13,1.83.59,2.68,1.13.52-1.16.77-2.11.68-2.57h0c-.06-.3-.81-.85-2.74-1.5-.27.67-.9,1.43-1.53,1.61-.12.03-.33.09-.46-.04-.14-.14-.08-.34.05-.73.09-.3.23-.73.33-1.32-.94-.25-1.92-.47-2.86-.65.18,1.13-.53,2.68-1.18,3.38-.26.28-.49.4-.69.35-.38-.09-.32-.47-.24-.9.11-.63.3-1.66-.24-3.16-1.18-.12-2.09-.1-2.65.04-1.26.32-2.56,1.17-3.45,2.23,1.31.11,3.21.63,3.91,1.48.5.61.37,1.06.29,1.22-.13.26-.38.41-.66.4-.29-.01-.53-.2-.66-.5-.13-.33-1.72-1.26-3.11-1.63-.13-.04-.27-.06-.39-.09-.76,1.34-.91,2.84-.44,4.35.12.37.19.42.19.42,0,0,.04-.01.07-.02.06-.02.13-.04.21-.04ZM988.51,510.01h0Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <path d="M980.44,517.18c-.48-1.08-.78-2.23-.88-3.4-.05-.65-.01-1.16.56-1.56.46-.33.99-.57,1.51-.78,1.03-.41,2.1-.7,3.16-1.03,1.14-.36,2.27-.71,3.41-1.07.22-.07.13-.42-.1-.35-1.3.41-2.6.81-3.9,1.22-1.2.37-2.44.7-3.56,1.28-.44.23-.94.49-1.23.91-.3.43-.25.96-.21,1.47.11,1.22.43,2.39.92,3.51.09.21.41.03.31-.18h0Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="Plant3" data-name="Plant" filter="url(#drop-shadow-20)">
                    <g>
                    <circle cx="347.09" cy="340.09" r="4.73" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M347.09,344.93c-2.67,0-4.84-2.17-4.84-4.84s2.17-4.84,4.84-4.84,4.84,2.17,4.84,4.84-2.17,4.84-4.84,4.84ZM347.09,335.47c-2.55,0-4.62,2.07-4.62,4.62s2.07,4.62,4.62,4.62,4.62-2.07,4.62-4.62-2.07-4.62-4.62-4.62Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <circle cx="347.09" cy="340.18" r="3.78" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M347.09,344.07c-2.14,0-3.89-1.74-3.89-3.89s1.74-3.89,3.89-3.89,3.89,1.74,3.89,3.89-1.74,3.89-3.89,3.89ZM347.09,336.51c-2.03,0-3.67,1.65-3.67,3.67s1.65,3.67,3.67,3.67,3.67-1.65,3.67-3.67-1.65-3.67-3.67-3.67Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M363.35,316.37c-.24-.14-.64-.24-1.67-.29-.14,0-.44-.07-.53.05,0,0,.07.81.01.84-.06.03-.26-.61-.69-.77l-1.99,1.43c.03.31.3.61.22.87-.12.35-.64.26-.86.6,0,0,.38,1.61.35,1.63-.04.02-1.39-1.83-1.39-1.83,0,0-2.39,1.55-2.25,2.99.07.72.53,1.35.44,1.41-.09.06-.39-.68-.91-.82l-3.4,4.16c-.15,1.58.59,3.06.22,3.23-.26.12-1.31-1.52-1.31-1.52-.39.14-.56,2.01-.37,2.71.39,1.4,2.55,2.04,2.76,2.1,2.83.74,5.58-1.47,5.88-2.57,0,0-2.13-.86-2.1-.99.02-.11,3.32.21,3.4.22.25.04,2.56-3.83,2.61-4,0,0-2.34-.96-2.34-.99,0-.03,3.05.16,3.05.16.71-1.15,1.49-2.13,1.86-3.96.37-1.79.13-2.82-.11-3.45-.34-.88-.75-1.15-.88-1.22Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M353.12,333.42c-.39,0-.78-.05-1.18-.15-.02,0-2.41-.64-2.84-2.17-.19-.67-.06-2.66.44-2.84l.08-.03.05.07c.45.7,1.04,1.46,1.2,1.47.09-.05,0-.5-.09-.91-.12-.59-.29-1.4-.21-2.24v-.03s3.46-4.24,3.46-4.24l.07.02c.24.06.44.24.58.41-.1-.25-.21-.55-.24-.88-.15-1.49,2.19-3.03,2.29-3.1l.08-.06.06.08c.34.46.83,1.13,1.13,1.51-.07-.35-.19-.86-.28-1.22v-.04s.01-.04.01-.04c.13-.19.32-.26.5-.33.19-.07.31-.12.35-.25.04-.11-.03-.25-.09-.4-.06-.13-.12-.27-.13-.42v-.06s2.08-1.5,2.08-1.5l.05.02c.27.1.45.35.57.55,0-.15-.02-.35-.03-.52v-.04s.02-.03.02-.03c.12-.14.35-.12.53-.1.04,0,.07,0,.09,0,1.09.05,1.48.16,1.72.31h0c.37.22.68.66.92,1.28.23.61.5,1.63.11,3.51-.32,1.56-.93,2.52-1.53,3.45-.12.18-.23.36-.35.55l-.03.06h-.06c-.79-.05-1.87-.12-2.5-.15.49.21,1.26.53,1.84.76l.09.04-.03.09s-2.31,4.08-2.72,4.08c0,0,0,0,0,0-.14-.02-2.29-.22-3.07-.24.37.19,1.12.52,1.83.8l.09.04-.02.09c-.27,1.01-2.42,2.8-4.83,2.8ZM349.55,328.52c-.25.31-.42,1.88-.24,2.53.4,1.41,2.66,2.01,2.69,2.02,2.66.69,5.3-1.28,5.72-2.41-2.12-.86-2.09-.97-2.07-1.07.03-.12.04-.16,1.79-.02.78.06,1.55.14,1.7.15.32-.21,2.15-3.25,2.47-3.83q-2.32-.95-2.3-1.07t3.1.08c.1-.17.21-.33.31-.5.61-.95,1.19-1.86,1.5-3.38.37-1.83.12-2.81-.1-3.39-.22-.56-.51-.98-.83-1.17h0c-.19-.11-.51-.22-1.62-.28-.03,0-.07,0-.11,0-.08,0-.24-.03-.31,0,.07.83.02.86-.05.89-.11.06-.18-.05-.25-.19-.1-.17-.25-.44-.48-.55l-1.89,1.36c.02.1.06.2.11.3.08.18.16.37.1.55-.08.23-.29.31-.48.38-.14.05-.28.1-.37.21.39,1.64.38,1.65.28,1.7-.11.05-.12.06-1.46-1.77-.42.29-2.23,1.63-2.11,2.84.04.41.22.8.33,1.05.11.25.17.38.06.46-.12.07-.2-.05-.32-.21-.14-.19-.34-.48-.61-.58l-3.33,4.08c-.07.79.09,1.57.21,2.14.13.62.21,1.03-.05,1.15-.22.11-.69-.39-1.39-1.46ZM359.17,329.72s0,0,0,0c0,0,0,0,0,0Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M339.03,313.9c-.32.1-.54.42-.84,1.28-.82,2.38-.69,4.51-.62,5.33.07.82.24,2.68.99,4.89.56,1.67.95,2.06,1.1,3.43.12,1.13-.06,1.66.37,2.41.6,1.05,1.76,1.4,2.08,1.5.44.13,1.98.6,3.14-.37.98-.82.99-2.07.99-2.19,0-.85-.43-1.44-.66-1.83-1.15-1.95-.04-3.25-.55-6.21-.42-2.44-1.62-4.08-2.67-5.52-.69-.94-2.26-3.09-3.32-2.74Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M343.49,333.08c-.44,0-.91-.08-1.43-.23-1.01-.31-1.73-.83-2.14-1.55-.3-.53-.31-.95-.33-1.53,0-.26-.01-.56-.05-.92-.09-.88-.28-1.33-.56-2.01-.15-.38-.33-.8-.53-1.4-.77-2.27-.93-4.2-.99-4.92-.16-1.9.05-3.71.63-5.38.3-.87.54-1.22.91-1.35l.03.1-.03-.1c1.14-.37,2.7,1.75,3.44,2.78,1.06,1.45,2.26,3.09,2.69,5.56.22,1.29.14,2.26.07,3.12-.09,1.1-.17,1.98.47,3.06.02.04.05.08.08.13.23.38.59.96.59,1.75,0,.14-.02,1.44-1.02,2.27-.5.41-1.1.62-1.81.62ZM339.28,313.97c-.07,0-.15.01-.22.03-.25.08-.46.31-.77,1.21-.57,1.64-.77,3.42-.62,5.29.06.72.22,2.62.98,4.87.2.59.37,1.01.53,1.38.28.68.48,1.17.58,2.07.04.37.05.67.05.94.01.55.02.94.3,1.43.38.67,1.06,1.16,2.02,1.45,1.28.39,2.3.27,3.04-.35.93-.78.95-1.97.95-2.11,0-.73-.33-1.26-.56-1.64-.03-.05-.06-.09-.08-.13-.67-1.14-.59-2.09-.5-3.18.07-.84.15-1.8-.06-3.06-.42-2.42-1.6-4.04-2.65-5.47-.62-.84-2-2.73-2.99-2.73Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M346.46,345.74c-.92-.22-1.07-.42-1.4-.36-.45.09-.79.93-.79.93,0,0,1.38.56,1.37.66-.01.1-.83.22-1.97.27l-.59,1.58s.58.16.62.2c.22.24-1.01,1.7-1.01,1.7,0,0,2.56.8,2.55.9,0,.09-2.02.23-3.68.49l-.61,4.71,1.96.28c.08.01.09.12.02.15-.52.23-1.83.75-2.13.94l1.64,3.83c.16.37.64.48.94.22,1.31-1.15,3.69-4.76,3.69-4.76-.31-.67-1.56-.87-1.51-1.04.05-.16,1.54-.04,1.54-.04,0,0,.2-.88.29-1.61,0,0,.59.38.93.32,0,0,.79-3.03.93-4.46,0,0-2.17-.51-2.16-.63,0-.11,2.03-.31,2.03-.31.45-.94.83-2.5.16-3.17-.3-.3-.97-.44-2.3-.71-.22-.04-.31-.06-.52-.11Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M342.98,362.51c-.05,0-.11,0-.16-.02-.22-.05-.4-.2-.49-.41l-1.67-3.91.08-.05c.22-.14.89-.42,1.49-.67.21-.09.41-.17.56-.24l-1.96-.28.63-4.9h.08c.81-.14,1.69-.24,2.4-.32.37-.04.75-.08.99-.12-.43-.17-1.39-.49-2.27-.77l-.15-.05.1-.12c.58-.69,1.04-1.39,1.02-1.55-.08-.03-.34-.11-.57-.18l-.11-.03.66-1.76h.07c.92-.05,1.52-.13,1.77-.19-.23-.12-.74-.35-1.21-.54l-.1-.04.04-.1c.04-.09.38-.9.87-1,.21-.04.36.01.61.1.18.07.44.16.83.25.15.04.23.05.34.07l.18.04c1.35.28,2.03.42,2.36.74.76.76.24,2.49-.14,3.29l-.03.05h-.06c-.67.07-1.39.16-1.75.23.37.12,1.17.33,1.9.51l.09.02v.09c-.15,1.42-.94,4.44-.94,4.47l-.02.07h-.07c-.28.06-.66-.12-.87-.24-.1.69-.27,1.45-.27,1.45l-.02.09h-.09c-.5-.05-1.07-.06-1.33-.04.06.03.14.06.21.09.39.16.98.41,1.19.86l.03.05-.03.05c-.1.15-2.4,3.63-3.71,4.78-.13.11-.29.18-.46.18ZM340.93,358.25l1.6,3.74c.06.15.19.25.34.29.15.03.31,0,.43-.11,1.2-1.05,3.34-4.23,3.64-4.68-.2-.35-.71-.56-1.05-.71-.3-.13-.48-.2-.43-.36.02-.08.07-.23,1.56-.12.05-.24.2-.92.27-1.51l.02-.17.14.09c.14.09.53.31.79.31.12-.46.76-2.97.9-4.27-2.16-.51-2.16-.62-2.15-.72,0-.1,0-.2,2.06-.41.41-.89.78-2.38.16-2.99-.28-.28-.94-.41-2.25-.68l-.17-.03c-.11-.02-.2-.04-.35-.08h0c-.41-.1-.67-.19-.85-.26-.24-.09-.34-.12-.5-.09-.28.05-.55.51-.67.77,1.36.55,1.35.64,1.33.73,0,.07-.04.26-2,.36l-.53,1.4c.51.14.54.18.56.2.22.24-.35,1.04-.91,1.72,2.48.79,2.48.87,2.47.97-.01.13-.06.14-1.38.29-.68.08-1.53.17-2.31.29l-.58,4.53,1.86.27c.08.01.15.08.16.16.01.08-.03.16-.11.19-.16.07-.4.17-.66.28-.5.21-1.11.46-1.38.61Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M341.06,346.67c-.4-.07-1.1-.18-1.81,0-1.48.38-1.62,1.73-3.31,3.1-1.12.9-1.28.49-2.44,1.31-2.16,1.54-2.95,3.94-3.64,6.05-.24.74-1.19,3.62-.58,3.94.36.19,1.03-.58,2.55-2.14,2.59-2.65,3.88-3.98,5.15-5.01,2.03-1.65,3.13-1.99,4.71-3.94,1.23-1.52,1.31-2.22,1.1-2.6-.26-.47-1-.59-1.73-.71Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M329.4,361.22c-.06,0-.11-.01-.17-.04-.3-.16-.57-.75.52-4.07.7-2.13,1.49-4.55,3.68-6.11.56-.4.9-.52,1.22-.63.33-.12.65-.22,1.22-.68.71-.57,1.15-1.14,1.53-1.65.53-.69.94-1.24,1.83-1.47.73-.19,1.46-.07,1.85,0h0c.75.12,1.52.25,1.8.77.3.55-.05,1.42-1.11,2.72-1.06,1.3-1.89,1.89-2.94,2.63-.52.37-1.11.78-1.79,1.34-1.27,1.03-2.56,2.36-5.14,5l-.48.49c-1.11,1.15-1.66,1.71-2.04,1.71ZM340.08,346.68c-.25,0-.52.02-.8.1-.81.21-1.21.73-1.71,1.39-.39.51-.83,1.09-1.57,1.68-.6.48-.93.6-1.28.72-.31.11-.62.22-1.16.6-2.13,1.52-2.91,3.9-3.6,6-1.05,3.19-.79,3.73-.63,3.82.25.13.89-.53,1.95-1.63l.47-.49c2.59-2.65,3.88-3.99,5.16-5.02.69-.56,1.28-.98,1.8-1.34,1.04-.73,1.85-1.31,2.89-2.58.97-1.19,1.33-2.03,1.08-2.48-.23-.42-.95-.54-1.65-.66l.02-.11-.02.11c-.24-.04-.58-.1-.97-.1Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M338.84,338.78c.06-1.28.09-1.93-.27-2.36-.73-.86-2.07-.17-3.45-1.15-.12-.09-.58-.32-.74-.27,0,0,0,2.75-.14,2.77-.14.01-1.21-3.64-1.21-3.64-.69-.4-.88-.5-4.25-1.04-2.84-.45-3.67-.19-3.67-.19l.62,3.51s-.05.06-.06.02l-1.65-3.1s-3.16.37-4.08,1.81c-.06.1-1.1,1.78-.36,3.64.64,1.6,3.75,2.51,3.75,2.51.1-.26,1.42-1.71,1.56-1.63.15.08-.67,2.12-.67,2.12.27.39.85,1.13,6.34,1.38,3.03.14,4.18.05,5.48-.47,1.79-.71,2.29-1.62,2.41-1.86.32-.63.35-1.26.38-2.05Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M332.68,343.33c-.59,0-1.28-.02-2.11-.06-5.59-.26-6.13-1.02-6.42-1.43l-.03-.05.02-.05c.3-.76.61-1.6.67-1.92-.34.26-1.28,1.28-1.36,1.5l-.03.09-.1-.03c-.13-.04-3.17-.94-3.82-2.57-.77-1.93.32-3.67.37-3.74.94-1.47,4.03-1.84,4.16-1.86h.07s1.47,2.75,1.47,2.75l-.56-3.15.09-.03s.89-.26,3.72.19c3.4.54,3.59.65,4.28,1.05l.04.02v.04c.33,1.09.84,2.77,1.08,3.37.05-.46.07-1.5.07-2.47v-.08s.08-.02.08-.02c.24-.07.77.24.83.29.68.48,1.36.55,1.95.61.58.06,1.13.11,1.52.56.39.46.36,1.12.3,2.43h0c-.04.81-.07,1.45-.39,2.1-.22.44-.83,1.26-2.47,1.91-.95.38-1.81.53-3.41.53ZM324.35,341.77c.27.37.97,1.05,6.22,1.29,3.05.14,4.17.05,5.43-.46,1.57-.63,2.15-1.4,2.35-1.81.31-.61.34-1.23.37-2.01h0c.06-1.26.09-1.88-.25-2.28-.33-.39-.79-.43-1.37-.49-.62-.06-1.33-.13-2.06-.64-.13-.09-.42-.22-.57-.26,0,2.74-.12,2.76-.23,2.77-.11.01-.23.02-1.31-3.68-.64-.37-.87-.48-4.17-1.01-2.27-.36-3.25-.26-3.53-.21l.6,3.41c.01.07-.03.14-.09.16-.07.02-.14,0-.17-.07l-1.62-3.03c-.47.07-3.12.49-3.93,1.75-.04.07-1.08,1.72-.35,3.55.55,1.39,3.11,2.26,3.6,2.42.25-.4,1.26-1.5,1.54-1.6.05-.02.09-.02.13,0,.09.05.23.13-.6,2.2Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M338.66,328.11c-1.18-.89-2.29-1.43-4.49-2.52-2.61-1.28-3.04-1.29-3.4-1.1-1.01.55-.55,3.14-.55,3.14.44.33,1.23-.06,1.31.15.1.23-.32.5-.99,1,0,0,.75,2.22,1.69,2.83,0,0,1.66-.79,1.74-.69.09.1-.47.82-1.24,1.56,0,0,1.98,3.08,3.36,4.03,1.53,1.05,4.43,2.65,5.33,1.79.38-.36.15-.9.73-1.5.6-.61,1.16-.36,1.5-.77.76-.91-.82-3.62-2.19-5.3-1.07-1.3-2.11-2.1-2.81-2.63Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M340.69,338.65c-1.59,0-4.28-1.81-4.64-2.05-1.38-.95-3.31-3.93-3.39-4.06l-.05-.07.06-.06c.67-.63,1.06-1.14,1.18-1.36-.27.08-.95.38-1.56.67l-.05.03-.05-.03c-.96-.62-1.7-2.79-1.73-2.89l-.02-.07.26-.19c.43-.32.81-.6.76-.73-.03-.01-.19,0-.3.02-.29.04-.69.09-.98-.13l-.03-.03v-.04c-.03-.11-.47-2.67.59-3.25.41-.22.89-.19,3.5,1.09,2.21,1.09,3.32,1.63,4.51,2.53.65.49,1.73,1.31,2.83,2.65,1.34,1.64,3.03,4.43,2.19,5.43-.18.21-.4.27-.64.32-.26.06-.56.14-.86.45-.3.31-.37.59-.43.86-.06.23-.11.45-.3.64-.2.19-.49.27-.82.27ZM332.88,332.5c.31.47,2.05,3.08,3.28,3.92,1.99,1.36,4.46,2.5,5.2,1.8.15-.14.19-.31.24-.53.07-.27.15-.62.49-.96.35-.35.69-.44.97-.51.22-.05.39-.1.53-.25.71-.85-.85-3.53-2.19-5.16-1.08-1.32-2.15-2.13-2.79-2.61h0c-1.17-.89-2.28-1.43-4.48-2.51-2.6-1.28-2.99-1.26-3.3-1.1-.86.47-.55,2.65-.5,2.98.22.13.53.09.79.06.25-.03.46-.06.53.11.12.28-.22.53-.82.99l-.13.1c.14.38.79,2.11,1.57,2.67,1.68-.79,1.76-.71,1.81-.64.22.25-.88,1.35-1.18,1.65Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M355.94,339.98c-.58.66-.38,1.23-.99,2.08-.6.85-1.12.73-1.35,1.21-.67,1.37,2.54,4.4,5.19,6.28,1.52,1.08,6.21,2.41,6.21,2.41.24-1.04.71-2.42.88-2.41.17.01.41,1.23.55,2.52,0,0,3.68.75,5-.77.62-.71.77-1.5.84-1.9.49-2.75-3.3-6.41-3.3-6.41-1.24,1.02-2.66,2.42-2.73,2.36-.07-.07.3-1.79,1.49-3.31,0,0-1.4-1.2-4.23-2.13-3.05-1-4.6-1.12-5.95-.77-.52.14-1.14.3-1.61.84Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M368.41,352.37c-1.05,0-1.94-.18-2.02-.19l-.08-.02v-.08c-.15-1.31-.35-2.17-.46-2.39-.16.24-.53,1.29-.76,2.29l-.03.11-.11-.03c-.19-.05-4.73-1.35-6.24-2.43-2.15-1.52-6-4.83-5.22-6.42.12-.25.3-.35.52-.47.24-.14.53-.3.84-.75.28-.4.38-.74.48-1.06.1-.35.2-.68.51-1.03h0c.5-.57,1.17-.75,1.66-.87,1.48-.38,3.16-.17,6.01.77,2.82.93,4.26,2.14,4.27,2.15l.08.07-.06.08c-.97,1.24-1.38,2.58-1.46,3.05.18-.15.52-.45.84-.74.5-.45,1.12-1.02,1.71-1.5l.07-.06.07.07c.16.15,3.82,3.73,3.33,6.51-.06.36-.22,1.2-.86,1.95-.69.8-1.98.99-3.09.99ZM366.52,351.98c.53.09,3.66.59,4.82-.75.61-.7.75-1.48.82-1.85.44-2.46-2.69-5.74-3.2-6.25-.56.46-1.15,1-1.62,1.43-1.01.92-1.07.96-1.17.86-.19-.17.35-1.97,1.42-3.38-.33-.26-1.71-1.25-4.12-2.04-3.24-1.06-4.7-1.08-5.89-.77-.49.13-1.09.28-1.55.81l-.08-.07.08.07c-.28.32-.37.61-.47.95-.1.33-.21.69-.51,1.12-.34.48-.66.66-.91.81-.2.11-.34.19-.43.38-.59,1.2,2.21,4.06,5.15,6.15,1.36.96,5.36,2.16,6.07,2.36.12-.49.63-2.42.96-2.38.31.02.53,1.56.64,2.54Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M356.41,334.1c-1.53.39-3.1.8-3.29,1.72-.13.64.55.98.55,2.19,0,.76-.26.95-.18,1.35.24,1.21,3.1,1.62,3.87,1.72,5.47.68,9.74-1.63,11.87-2.81,2.69-1.5,2.78-2.19,2.74-2.48-.12-.87-1.77-1.29-3.43-1.72-3.1-.8-5.65-.68-8.22-.55-.61.03-2.08.12-3.91.58Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M359.32,341.3c-.64,0-1.3-.04-1.98-.12-1.11-.14-3.72-.59-3.96-1.8-.04-.22,0-.38.06-.57.06-.2.12-.42.12-.8,0-.62-.18-1-.34-1.33-.14-.3-.27-.55-.2-.89.2-1,1.88-1.42,3.37-1.8,1.9-.48,3.43-.56,3.93-.59,2.37-.12,5.07-.26,8.25.55,1.74.45,3.39.87,3.51,1.81.03.24.13.96-2.79,2.59-1.66.93-5.29,2.95-9.96,2.95ZM356.41,334.1l.03.1c-1.42.36-3.03.77-3.21,1.63-.05.26.05.47.18.75.16.33.37.75.37,1.42,0,.41-.07.66-.13.86-.05.18-.09.31-.05.47.22,1.11,2.95,1.53,3.78,1.63,5.54.69,9.93-1.76,11.8-2.8,1.28-.71,2.78-1.7,2.69-2.38-.11-.8-1.76-1.22-3.35-1.63-3.15-.81-5.71-.67-8.19-.54-.5.03-2,.1-3.89.58l-.03-.1Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M352.1,347.39c-1.16.25-1.53-.02-1.86.22-.9.64.27,3.74.9,5.4.65,1.7,1.91,3.79,4.38,7.92.79,1.32,1.39,2.29,1.97,2.19.77-.13,1.03-2.05,1.1-2.52.3-2.2-.3-3.56-1.84-8-1.23-3.55-1.91-5.73-2.99-5.75-.42,0-.6.32-1.67.55Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M357.42,363.22c-.63,0-1.23-1-1.98-2.25-2.4-3.99-3.72-6.19-4.39-7.93-.96-2.5-1.74-4.9-.87-5.52.19-.14.39-.13.67-.13.28,0,.66.01,1.24-.11.56-.12.87-.27,1.1-.38.21-.1.37-.18.59-.17,1.08.02,1.75,1.95,2.85,5.14l.24.69c.16.45.3.86.44,1.25,1.22,3.49,1.68,4.79,1.4,6.8-.22,1.64-.62,2.52-1.18,2.61-.03,0-.07,0-.1,0ZM350.69,347.6c-.17,0-.28.01-.39.09-.85.61.4,3.88.94,5.27.66,1.72,1.98,3.92,4.37,7.9.72,1.2,1.34,2.23,1.86,2.14.26-.04.73-.42,1.01-2.43.27-1.95-.19-3.24-1.39-6.7-.14-.39-.28-.8-.44-1.25l-.24-.69c-1.03-2.99-1.72-4.97-2.65-4.99-.17,0-.3.06-.5.15-.24.11-.56.27-1.15.39-.6.13-1,.12-1.29.11-.05,0-.1,0-.15,0Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <path d="M347.28,340.29s-.08-.03-.1-.07c-.1-.26-.32-.67-.58-1.15-.37-.68-.79-1.45-1.03-2.12-1.15-3.25-2.58-7.29-3.84-11.84l-.1-.37c-.7-2.53-1.88-6.76-2.61-10.8-.01-.06.03-.11.09-.12.06-.01.11.03.12.09.73,4.02,1.91,8.25,2.61,10.78l.1.37c1.26,4.54,2.69,8.58,3.83,11.83.23.66.65,1.42,1.01,2.09.26.48.49.9.59,1.18.02.06,0,.12-.06.14-.01,0-.02,0-.04,0Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M347.28,340.27s-.02,0-.04,0c-.06-.02-.08-.08-.06-.14.99-2.77,2.41-5.53,4.32-8.46,1.13-1.73,2.08-2.87,3.38-4.43.73-.88,1.57-1.88,2.61-3.21,2.11-2.66,4.44-5.66,5.83-7.68.03-.05.1-.06.15-.03s.06.1.03.15c-1.39,2.03-3.73,5.03-5.84,7.69-1.05,1.33-1.88,2.33-2.62,3.21-1.3,1.56-2.24,2.69-3.37,4.41-1.9,2.91-3.31,5.66-4.3,8.41-.02.04-.06.07-.1.07Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M347.28,340.27s-.04,0-.06-.02c-3.37-2.12-7.7-5.07-11.34-9.04-1.75-1.91-3.64-4.33-5.2-6.66-.03-.05-.02-.12.03-.15.05-.03.12-.02.15.03,1.55,2.32,3.44,4.74,5.18,6.63,3.62,3.95,7.94,6.89,11.3,9,.05.03.07.1.03.15-.02.03-.06.05-.09.05Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M347.28,340.27s0,0-.01,0c-1.64-.17-3.45-.34-5.37-.52-4-.38-8.13-.77-11.61-1.21-2.93-.37-6.07-.83-9.11-1.27l-1.84-.27c-.06,0-.1-.06-.09-.12,0-.06.06-.1.12-.09l1.84.27c3.04.44,6.18.9,9.11,1.27,3.48.44,7.61.83,11.61,1.21,1.92.18,3.74.35,5.37.52.06,0,.1.06.1.12,0,.06-.05.1-.11.1Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M329.28,361.19s-.03,0-.05-.01c-.05-.03-.08-.09-.05-.14,1.4-2.9,3.66-6.36,5.03-7.73.82-.81,1.28-1.14,2.11-1.73.83-.59,2.1-1.49,4.53-3.48,1.9-1.56,3.6-3.04,5.13-5.45.29-.46.66-1.29.92-1.9.12-.27.21-.49.28-.61.03-.05.09-.07.14-.05.05.03.07.09.05.14-.06.12-.16.34-.27.6-.27.61-.64,1.46-.94,1.93-1.55,2.44-3.26,3.94-5.17,5.5-2.44,2-3.7,2.9-4.54,3.49-.82.58-1.27.91-2.08,1.71-1.36,1.35-3.6,4.79-4.99,7.67-.02.04-.06.06-.1.06Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M342.88,362.5s-.02,0-.03,0c-.06-.01-.09-.07-.08-.13.1-.43.22-1.03.35-1.72.26-1.35.58-3.03,1.02-4.55.49-1.67.85-2.78,1.17-3.76.21-.65.4-1.22.58-1.83.53-1.79.96-5.26,1.27-10.33,0-.06.06-.1.11-.1.06,0,.1.05.1.11-.31,5.08-.75,8.57-1.28,10.38-.18.61-.37,1.18-.58,1.83-.32.98-.68,2.08-1.17,3.76-.44,1.51-.76,3.18-1.02,4.53-.13.7-.25,1.3-.35,1.73-.01.05-.06.08-.1.08Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M347.28,340.29s-.08-.02-.09-.06c-.03-.05,0-.12.04-.15.74-.4,3.07-1.45,4.67-1.98,2.87-.94,5.1-1.01,7.69-1.09,1.62-.05,3.46-.11,5.7-.39.41-.05.94-.09,1.55-.13,1.5-.1,3.37-.23,5.1-.68.06-.02.12.02.13.08.02.06-.02.12-.08.13-1.76.46-3.71.59-5.14.69-.61.04-1.13.08-1.54.13-2.25.28-4.1.34-5.72.39-2.57.08-4.79.15-7.63,1.08-1.59.52-3.91,1.57-4.64,1.96-.02,0-.03.01-.05.01Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M371.88,350.74s-.03,0-.05-.01c-4.95-2.69-7.76-4.17-10.01-5.36-1.23-.65-2.3-1.21-3.4-1.81-.16-.09-.39-.23-.68-.41-.92-.58-2.47-1.54-4.21-2.21-2.14-.82-5.04-.92-6.33-.73-.06,0-.11-.03-.12-.09,0-.06.03-.11.09-.12,1.31-.19,4.26-.09,6.44.75,1.76.68,3.32,1.65,4.25,2.23.29.18.52.32.67.41,1.1.6,2.17,1.16,3.4,1.81,2.26,1.19,5.07,2.67,10.02,5.36.05.03.07.09.04.15-.02.04-.06.06-.09.06Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M357.5,363.22c-.06,0-.11-.05-.11-.1,0-.06,0-.16,0-.28,0-.42,0-1.11-.08-1.57-.33-1.9-1.18-3.25-1.46-3.69l-.03-.05c-.91-1.45-1.3-2.78-1.74-4.32-.4-1.39-.86-2.96-1.8-4.95-.52-1.11-2.43-4.97-5.08-8.02-.04-.04-.03-.11.01-.15.04-.04.11-.03.15.01,2.67,3.07,4.59,6.95,5.11,8.07.94,2,1.4,3.58,1.81,4.98.44,1.53.83,2.85,1.72,4.27l.03.05c.29.45,1.15,1.83,1.49,3.77.08.47.08,1.18.08,1.6,0,.12,0,.21,0,.28,0,.06-.05.11-.1.11h0Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    <g>
                    <path d="M343.89,341.19c-.55-.89-.99-1.61-1.72-2.01-1.23-.67-2.27.12-5.44.99-3.58.97-4.03.44-5.7,1.42-1.3.76-3.45,2.52-3.1,3.91.44,1.78,4.8,2.14,6.98,2.05.96-.04,2.99-.72,7.05-2.08,1.47-.49,2.58-.9,2.81-1.79.19-.74-.29-1.53-.88-2.48Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M334.29,347.66c-2.09,0-6.03-.37-6.47-2.14-.37-1.49,1.9-3.29,3.15-4.03.95-.56,1.51-.64,2.45-.77.72-.1,1.7-.24,3.28-.67.93-.25,1.69-.5,2.3-.71,1.49-.49,2.31-.77,3.22-.27.75.41,1.19,1.13,1.76,2.05h0s-.09.06-.09.06l.09-.06c.59.95,1.09,1.78.89,2.57-.26.98-1.53,1.41-2.88,1.86-4.06,1.36-6.1,2.05-7.08,2.09-.18,0-.38.01-.61.01ZM341.2,339.03c-.55,0-1.2.21-2.13.52-.61.2-1.38.46-2.31.71-1.59.43-2.58.57-3.3.67-.91.13-1.46.2-2.37.74-1.4.83-3.37,2.52-3.05,3.79.4,1.62,4.43,2.07,6.87,1.96.95-.04,2.98-.72,7.02-2.08,1.57-.53,2.53-.9,2.74-1.72.18-.7-.28-1.45-.86-2.4l.09-.06-.09.06c-.55-.89-.98-1.59-1.68-1.97-.3-.17-.59-.24-.92-.24Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <path d="M327.92,345.6c-.06,0-.11-.05-.11-.11,0-.06.05-.11.11-.11,1.78-.02,4.06-.59,6.47-1.19.71-.17,1.44-.36,2.16-.53,4.65-1.09,8.54-2.37,10.67-3.53.05-.03.12,0,.15.04.03.05,0,.12-.04.15-2.15,1.17-6.06,2.46-10.73,3.55-.73.17-1.46.35-2.16.53-2.43.6-4.72,1.17-6.52,1.19h0Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    <g>
                    <path d="M351.17,342.87c-.55.8-1.49.52-1.86.99-1,1.25,3.48,6.37,4.05,7.01,3.1,3.5,6.32,7.13,7.78,6.35,1.04-.55.69-3.07.6-3.73-.3-2.17-1.21-2.61-3.94-6.85-1.07-1.65-2.89-4.63-4.71-5.26-.23-.08-.84-.29-1.26,0-.45.31-.25.89-.66,1.48Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M360.71,357.43c-1.67,0-4.59-3.3-7.42-6.49-1.21-1.36-5.06-5.9-4.06-7.15.18-.23.47-.29.77-.37.39-.09.79-.19,1.09-.61l.09.06-.09-.06c.17-.25.23-.5.28-.74.06-.3.13-.58.41-.77.47-.32,1.11-.1,1.36-.01,1.75.6,3.45,3.25,4.58,5.01l.19.3c.89,1.38,1.58,2.34,2.13,3.12,1.12,1.57,1.63,2.28,1.83,3.77.3,2.16.08,3.45-.66,3.83-.15.08-.31.11-.49.11ZM352.36,341.35c-.17,0-.33.03-.47.13-.21.14-.26.36-.32.64-.05.25-.12.53-.31.81-.34.5-.83.61-1.22.7-.28.07-.52.12-.65.29-.71.89,1.74,4.26,4.05,6.87,2.93,3.31,6.26,7.07,7.65,6.33.44-.24.9-1.05.55-3.62-.2-1.44-.67-2.09-1.8-3.68-.55-.78-1.24-1.74-2.13-3.13l-.19-.3c-1.04-1.62-2.78-4.34-4.47-4.92-.14-.05-.41-.14-.69-.14Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <path d="M361.05,357.3s-.08-.02-.1-.06c-2.04-4.13-4.67-8.88-8.71-12.84-1.52-1.49-3.6-3.07-5.03-4.14-.05-.04-.06-.1-.02-.15.04-.05.1-.06.15-.02,1.44,1.07,3.52,2.66,5.05,4.15,4.06,3.98,6.7,8.75,8.75,12.89.03.05,0,.12-.05.14-.02,0-.03.01-.05.01Z" fill="#d9ebd8" stroke="#aebfac" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                </g>
            </g>
            {/* OPTION: Sunroom */}
            <g id="loft" data-option="loft" style={{ display: active.loft ? "block" : "none" }} fill="#CC0001">
                <g id="optional_loft">
                    <polyline points="389.07 546.51 389.07 537.45 389.07 270.02 714.21 270.02 714.21 537.45 650.65 537.45 650.73 547.09" fill="#efefef"/>
                    <line x1="453.89" y1="270.02" x2="453.89" y2="489.71" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <line x1="716.08" y1="489.71" x2="453.39" y2="489.71" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <line x1="716.08" y1="516.1" x2="651.39" y2="516.1" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="650.75" y="515.5" width="9.7" height="21.95" fill="#425563"/>
                    <text transform="translate(534.63 389.74)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">Open to Below</tspan></text>
                    <text transform="translate(414.85 495.56)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">Loft</tspan></text>
                </g>
            </g>
            <g id="masterBathTwo" data-option="masterBathTwo" style={{ display: active.masterBathTwo ? "block" : "none" }} fill="#CC0001">
                <g id="master_bath_2">
                    <polygon points="826.21 687.5 826.21 669.2 847.7 669.2 868.71 669.2 868.71 686.5 894.91 686.34 894.91 665.31 931.29 665.05 931.29 686.02 1003.56 685.5 1006.41 769.96 826.21 769.96 826.21 687.5" fill="#efefef"/>
                    <rect x="800.98" y="754.96" width="91.07" height="13" fill="#425563"/>
                    <rect x="917.67" y="754.96" width="32.94" height="13" fill="#425563"/>
                    <rect x="976.23" y="754.96" width="40.45" height="13" fill="#425563"/>
                    <rect x="818.29" y="688.67" width="7.92" height="69.6" fill="#425563"/>
                    <rect x="877.01" y="694.87" width="5.56" height="63.41" fill="#425563"/>
                    <rect x="870.5" y="694.87" width="17.99" height="5.56" fill="#425563"/>
                    <rect x="822.25" y="694.87" width="8.22" height="5.56" fill="#425563"/>
                    <rect x="824.75" y="680.54" width="40.99" height="2.96" transform="translate(-234.7 797.44) rotate(-45)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="883.35" y="681.4" width="40.99" height="1.96" transform="translate(-217.78 838.97) rotate(-45)" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="929.5" y="695.69" width="43.59" height="1.96" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="892.31" y="759.5" width="25.36" height="8.46" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="972.45" y="685.6" width="39.32" height="9.57" fill="#425563"/>
                    <path d="M919.02,668.58s10.48,16.71,10.48,27.12" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <path d="M860.78,668.58s9.72,9.99,9.72,26.29" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="826.36" y="735.82" width="50.66" height="19.14" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="892.31" y="759.5" width="25.36" height="3.46" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="950.73" y="759.5" width="25.36" height="3.46" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="950.73" y="759.5" width="25.36" height="8.46" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <line x1="985.1" y1="695.17" x2="985.1" y2="754.66" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <circle cx="932.4" cy="728.81" r="2.71" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <line x1="985.1" y1="695.17" x2="935.1" y2="727.02" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <line x1="985.1" y1="754.66" x2="934.14" y2="731.51" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <line x1="882.57" y1="700.43" x2="930.7" y2="726.71" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <line x1="882.57" y1="754.66" x2="930.63" y2="730.35" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
            </g>
        </g>
            {/* Hotspots: Mudroom Hotspot */}
      </g>
  </svg>

  );
}

export function DillonD399basementSVG({
  active,
  mirror = false,
  svgRef,
}: SVGProps) {
  const VBW = 1200;
  const VBH = 1200;

  // OUTER pan/zoom group (never mirrored)
  const panRef = useRef<SVGGElement | null>(null);

  // INNER content group (this one can be mirrored)
  const worldRef = useRef<SVGGElement | null>(null);

  // Pan/zoom handlers with bitmap preview while dragging
  const { onWheel, onPointerDown, onPointerMove, onPointerUp } =
    usePanZoomPreview({
      panRef,
      contentRef: worldRef,
      viewBox: { w: VBW, h: VBH },
    });

  // Re-flip text glyphs so they read normally when mirrored
  useEffect(() => {
    const g = worldRef.current;
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
      t.setAttribute("transform", `${orig} translate(${cx},0) scale(-1,1) translate(${-cx},0)`);
    });
  }, [mirror]);

  return (
    <svg
      ref={svgRef}
      className="h-full w-full select-none touch-none"
      viewBox={`0 0 ${VBW} ${VBH}`}
      onWheel={onWheel}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      style={{ touchAction: "none" }}
    >
      <defs>
        <pattern id="diag" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
          <rect width="8" height="8" fill="white" />
          <path d="M 0 0 L 0 8" stroke="#e5e7eb" strokeWidth="2" />
        </pattern>
      </defs>

      <defs>
        <filter id="drop-shadow-1" x="530" y="71" width="147" height="151" filterUnits="userSpaceOnUse">
          <feOffset dx="0" dy="0"/>
          <feGaussianBlur result="blur" stdDeviation="3"/>
          <feFlood flood-color="#000" flood-opacity=".5"/>
          <feComposite in2="blur" operator="in"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="drop-shadow-2" x="553" y="100" width="97" height="97" filterUnits="userSpaceOnUse">
          <feOffset dx="0" dy="0"/>
          <feGaussianBlur result="blur1" stdDeviation="3"/>
          <feFlood flood-color="#000" flood-opacity=".5"/>
          <feComposite in2="blur1" operator="in"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="drop-shadow-3" x="801" y="92" width="120" height="127" filterUnits="userSpaceOnUse">
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur result="blur2" stdDeviation="2"/>
          <feFlood flood-color="#000" flood-opacity=".4"/>
          <feComposite in2="blur2" operator="in"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="drop-shadow-4" x="270" y="647" width="141" height="97" filterUnits="userSpaceOnUse">
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur result="blur3" stdDeviation="2"/>
          <feFlood flood-color="#000" flood-opacity=".4"/>
          <feComposite in2="blur3" operator="in"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="drop-shadow-5" x="827" y="630" width="47" height="100" filterUnits="userSpaceOnUse">
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur result="blur4" stdDeviation="2"/>
          <feFlood flood-color="#000" flood-opacity=".4"/>
          <feComposite in2="blur4" operator="in"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="drop-shadow-6" x="290" y="1022" width="84" height="126" filterUnits="userSpaceOnUse">
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur result="blur5" stdDeviation="2"/>
          <feFlood flood-color="#000" flood-opacity=".4"/>
          <feComposite in2="blur5" operator="in"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="drop-shadow-7" x="730" y="630" width="47" height="100" filterUnits="userSpaceOnUse">
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur result="blur6" stdDeviation="2"/>
          <feFlood flood-color="#000" flood-opacity=".4"/>
          <feComposite in2="blur6" operator="in"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="drop-shadow-8" x="237" y="202" width="61" height="60" filterUnits="userSpaceOnUse">
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur result="blur7" stdDeviation="2"/>
          <feFlood flood-color="#000" flood-opacity=".4"/>
          <feComposite in2="blur7" operator="in"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="drop-shadow-9" x="778" y="648" width="48" height="67" filterUnits="userSpaceOnUse">
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur result="blur8" stdDeviation="2"/>
          <feFlood flood-color="#000" flood-opacity=".4"/>
          <feComposite in2="blur8" operator="in"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="drop-shadow-10" x="786" y="662" width="36" height="39" filterUnits="userSpaceOnUse">
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur result="blur9" stdDeviation="2"/>
          <feFlood flood-color="#000" flood-opacity=".4"/>
          <feComposite in2="blur9" operator="in"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <clipPath id="clippath">
          <rect x="488.8" y="265.7" width="42.2" height="110" fill="none"/>
        </clipPath>
        <filter id="drop-shadow-11" x="501" y="339" width="42" height="42" filterUnits="userSpaceOnUse">
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur result="blur10" stdDeviation="2"/>
          <feFlood flood-color="#000" flood-opacity=".4"/>
          <feComposite in2="blur10" operator="in"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="drop-shadow-12" x="499" y="303" width="44" height="44" filterUnits="userSpaceOnUse">
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur result="blur11" stdDeviation="2"/>
          <feFlood flood-color="#000" flood-opacity=".4"/>
          <feComposite in2="blur11" operator="in"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="drop-shadow-13" x="501" y="266" width="42" height="42" filterUnits="userSpaceOnUse">
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur result="blur12" stdDeviation="2"/>
          <feFlood flood-color="#000" flood-opacity=".4"/>
          <feComposite in2="blur12" operator="in"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="drop-shadow-14" x="647" y="62" width="60" height="60" filterUnits="userSpaceOnUse">
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur result="blur13" stdDeviation="2"/>
          <feFlood flood-color="#000" flood-opacity=".4"/>
          <feComposite in2="blur13" operator="in"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="drop-shadow-15" x="276" y="303" width="196" height="152" filterUnits="userSpaceOnUse">
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur result="blur14" stdDeviation="2"/>
          <feFlood flood-color="#000" flood-opacity=".4"/>
          <feComposite in2="blur14" operator="in"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="drop-shadow-16" x="356" y="343" width="39" height="39" filterUnits="userSpaceOnUse">
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur result="blur15" stdDeviation="2"/>
          <feFlood flood-color="#000" flood-opacity=".4"/>
          <feComposite in2="blur15" operator="in"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="drop-shadow-17" x="334" y="319" width="49" height="49" filterUnits="userSpaceOnUse">
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur result="blur16" stdDeviation="2"/>
          <feFlood flood-color="#000" flood-opacity=".4"/>
          <feComposite in2="blur16" operator="in"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="drop-shadow-18" x="854" y="717" width="66" height="63" filterUnits="userSpaceOnUse">
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur result="blur17" stdDeviation="2"/>
          <feFlood flood-color="#000" flood-opacity=".4"/>
          <feComposite in2="blur17" operator="in"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="drop-shadow-19" x="785" y="436" width="125" height="84" filterUnits="userSpaceOnUse">
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur result="blur18" stdDeviation="2"/>
          <feFlood flood-color="#000" flood-opacity=".4"/>
          <feComposite in2="blur18" operator="in"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="drop-shadow-20" x="241.8" y="76.9" width="78" height="112" filterUnits="userSpaceOnUse">
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur result="blur19" stdDeviation="2"/>
          <feFlood flood-color="#000" flood-opacity=".4"/>
          <feComposite in2="blur19" operator="in"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="drop-shadow-21" x="289" y="235" width="106" height="200" filterUnits="userSpaceOnUse">
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur result="blur20" stdDeviation="2"/>
          <feFlood flood-color="#000" flood-opacity=".4"/>
          <feComposite in2="blur20" operator="in"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="drop-shadow-22" x="844" y="483" width="69" height="63" filterUnits="userSpaceOnUse">
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur result="blur21" stdDeviation="2"/>
          <feFlood flood-color="#000" flood-opacity=".4"/>
          <feComposite in2="blur21" operator="in"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="drop-shadow-23" x="696" y="571" width="82" height="109" filterUnits="userSpaceOnUse">
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur result="blur22" stdDeviation="2"/>
          <feFlood flood-color="#000" flood-opacity=".4"/>
          <feComposite in2="blur22" operator="in"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="drop-shadow-24" x="586" y="228" width="119" height="226" filterUnits="userSpaceOnUse">
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur result="blur23" stdDeviation="2"/>
          <feFlood flood-color="#000" flood-opacity=".4"/>
          <feComposite in2="blur23" operator="in"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="drop-shadow-25" x="836" y="242" width="55" height="189" filterUnits="userSpaceOnUse">
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur result="blur24" stdDeviation="2"/>
          <feFlood flood-color="#000" flood-opacity=".4"/>
          <feComposite in2="blur24" operator="in"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="drop-shadow-26" x="249" y="818" width="91" height="110" filterUnits="userSpaceOnUse">
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur result="blur25" stdDeviation="2"/>
          <feFlood flood-color="#000" flood-opacity=".4"/>
          <feComposite in2="blur25" operator="in"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="drop-shadow-27" x="248" y="872" width="53" height="59" filterUnits="userSpaceOnUse">
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur result="blur26" stdDeviation="2"/>
          <feFlood flood-color="#000" flood-opacity=".4"/>
          <feComposite in2="blur26" operator="in"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="drop-shadow-28" x="236.6" y="419" width="57" height="49" filterUnits="userSpaceOnUse">
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur result="blur27" stdDeviation="2"/>
          <feFlood flood-color="#000" flood-opacity=".4"/>
          <feComposite in2="blur27" operator="in"/>
          <feComposite in="SourceGraphic"/>
        </filter>
      </defs>

      {/* keep background outside world transform */}
      <rect x={0} y={0} width={VBW} height={VBH} fill="url(#diag)" />

      {/* OUTER: pan/zoom layer — transform is applied imperatively in the hook */}
      <g ref={panRef}>
        {/* INNER: mirror only the content */}
        <g
          ref={worldRef}
          transform={mirror ? `translate(${VBW} 0) scale(-1 1)` : undefined}
        >
            <g id="basement">
                <polygon id="BG" points="719.6 292.82 719.6 260.32 648.91 260.32 648.91 259.72 463.55 259.72 463.55 260.04 125.69 260.04 125.69 1179.43 465.53 1179.43 465.53 1147.14 643.63 1147.14 643.63 1180.08 1016.45 1180.08 1016.45 292.82 719.6 292.82" fill="#fff"/>
                <g id="flooring">
                <rect x="721.91" y="366.98" width="21.14" height="21.9" fill="#bcd3dd"/>
                <rect x="700.38" y="366.98" width="21.14" height="21.9" fill="#bcd3dd"/>
                <rect x="678.85" y="366.98" width="21.14" height="21.9" fill="#bcd3dd"/>
                <rect x="657.32" y="366.98" width="21.14" height="21.9" fill="#bcd3dd"/>
                <rect x="635.79" y="366.98" width="21.14" height="21.9" fill="#bcd3dd"/>
                <rect x="721.91" y="389.33" width="21.14" height="21.9" fill="#bcd3dd"/>
                <rect x="700.38" y="389.33" width="21.14" height="21.9" fill="#bcd3dd"/>
                <rect x="678.85" y="389.33" width="21.14" height="21.9" fill="#bcd3dd"/>
                <rect x="657.32" y="389.33" width="21.14" height="21.9" fill="#bcd3dd"/>
                <rect x="641.07" y="389.33" width="15.86" height="21.9" fill="#bcd3dd"/>
                <rect x="721.91" y="411.68" width="21.14" height="21.9" fill="#bcd3dd"/>
                <rect x="700.38" y="411.68" width="21.14" height="21.9" fill="#bcd3dd"/>
                <rect x="678.85" y="411.68" width="21.14" height="21.9" fill="#bcd3dd"/>
                <rect x="657.32" y="411.68" width="21.14" height="21.9" fill="#bcd3dd"/>
                <rect x="640.98" y="411.68" width="15.95" height="21.9" fill="#bcd3dd"/>
                <rect x="721.91" y="433.86" width="21.14" height="21.9" fill="#bcd3dd"/>
                <rect x="700.38" y="433.86" width="21.14" height="21.9" fill="#bcd3dd"/>
                <rect x="678.85" y="433.86" width="21.14" height="21.9" fill="#bcd3dd"/>
                <rect x="657.32" y="433.86" width="21.14" height="21.9" fill="#bcd3dd"/>
                <rect x="635.79" y="433.86" width="21.14" height="21.9" fill="#bcd3dd"/>
                <rect x="721.91" y="456.12" width="21.14" height="21.9" fill="#bcd3dd"/>
                <rect x="700.38" y="456.12" width="21.14" height="21.9" fill="#bcd3dd"/>
                <rect x="678.85" y="456.12" width="21.14" height="21.9" fill="#bcd3dd"/>
                <rect x="657.32" y="456.12" width="21.14" height="21.9" fill="#bcd3dd"/>
                <rect x="635.79" y="456.12" width="21.14" height="21.9" fill="#bcd3dd"/>
                </g>
                <g id="Highlights">
                <rect x="641.07" y="483.29" width="23.87" height="58.71" transform="translate(1306.01 1025.29) rotate(180)" fill="#dde7ed"/>
                <polygon points="998.91 548.61 998.91 654.72 909.24 654.72 909.24 636.3 981.75 636.3 981.75 548.61 998.91 548.61" fill="#dde7ed"/>
                <rect x="654.71" y="312.69" width="86.53" height="53.59" transform="translate(1395.95 678.97) rotate(180)" fill="#dde7ed"/>
                <g id="Mechanical">
                    <circle cx="880.75" cy="568.98" r="16.46" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <circle cx="880.75" cy="568.98" r="16.46" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="756.81" y="559.51" width="29.72" height="90.28" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="756.81" y="559.51" width="29.72" height="23.56" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="756.81" y="583.08" width="29.72" height="29.72" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="756.81" y="628.77" width="29.72" height="21.02" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                    <rect x="786.53" y="583.63" width="14.86" height="29.72" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                </g>
                <g id="Structural">
                <polygon points="572.46 689.95 572.46 695.82 462.83 695.82 462.83 689.95 477.13 689.95 477.13 689.44 565.26 689.44 565.26 689.95 572.46 689.95" fill="#425563"/>
                <rect x="462.83" y="700.17" width="109.63" height="5.87" fill="#425563"/>
                <rect x="470.98" y="624.92" width="98.88" height="7.7" fill="#fff" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="462.83" y="700.17" width="109.63" height="5.87" fill="#fff" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="462.83" y="689.95" width="109.63" height="5.87" fill="#fff" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="462.83" y1="757.01" x2="462.83" y2="708.35" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="477.13" y1="757.01" x2="477.13" y2="708.35" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="477.13" y1="706.04" x2="477.13" y2="705.82" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="491.43" y1="757.01" x2="491.43" y2="708.35" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="491.43" y1="706.04" x2="491.43" y2="705.82" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="507.6" y1="757.01" x2="507.6" y2="708.35" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="507.6" y1="706.04" x2="507.6" y2="705.82" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="521.1" y1="757.01" x2="521.1" y2="708.35" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="521.1" y1="706.04" x2="521.1" y2="705.82" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="535.06" y1="757.01" x2="535.06" y2="708.35" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="535.06" y1="706.04" x2="535.06" y2="705.82" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="551.48" y1="757.01" x2="551.48" y2="708.35" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="551.48" y1="706.04" x2="551.48" y2="705.82" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="565.26" y1="757.01" x2="565.26" y2="708.35" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="565.26" y1="706.04" x2="565.26" y2="705.82" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="477.13" y1="689.44" x2="477.13" y2="632.71" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="491.43" y1="689.95" x2="491.43" y2="632.71" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="507.6" y1="689.95" x2="507.6" y2="632.71" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="521.1" y1="689.95" x2="521.1" y2="632.71" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="535.06" y1="689.95" x2="535.06" y2="632.71" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="551.48" y1="689.95" x2="551.48" y2="632.71" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <line x1="565.26" y1="689.44" x2="565.26" y2="632.71" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                <rect x="111.78" y="387.55" width="24.2" height="108.53" fill="#425563"/>
                <rect x="909.19" y="288.63" width="113.66" height="24.06" fill="#425563"/>
                <rect x="998.8" y="304.62" width="24.05" height="8.07" fill="#425563"/>
                <polygon points="817.66 288.63 817.66 312.69 747.84 312.69 747.84 492.72 741.24 492.72 741.24 483.29 734.63 483.29 734.63 476.68 741.24 476.68 741.24 312.69 655.1 312.69 655.1 366.82 641.07 366.82 641.07 476.68 692.96 476.68 692.96 483.29 676.91 483.29 676.91 492.72 670.3 492.72 670.3 483.29 641.07 483.29 641.07 542 670.3 542 670.3 532.74 676.91 532.74 676.91 548.61 634.47 548.61 634.47 276.91 135.98 276.91 135.98 299.99 111.78 299.99 111.78 253.82 719.55 253.82 719.55 288.63 817.66 288.63" fill="#425563"/>
                <path d="M573.26,694.55v-5.11h-8v.51h7.2v5.87h-109.63v-5.87h14.3v-.51h-20.14v2.3h-17.91v11.92h9.54v-4.34h8.37v9.03h116.27v-5.86h11.13v-7.94h-11.13ZM572.46,706.04h-109.63v-5.87h109.63v5.87Z" fill="#425563"/>
                <rect x="452.63" y="618.12" width="216.32" height="10.65" transform="translate(1121.57 1246.89) rotate(180)" fill="#425563"/>
                <rect x="581.95" y="687.58" width="133.35" height="6.64" transform="translate(-42.28 1339.53) rotate(-90)" fill="#425563"/>
                <path d="M998.8,312.69v229.31h-42.46v6.61h42.46v106.11h-89.56v-106.11h6.1v-6.61h-167.5v-7.28h-6.6v83.4h-23.5v10.65h30.1v-80.16h154.79v112.72h96.17v95.68H448.62v-6.93h-9.54v21.05h-4.77v6.6h4.77v226.46h-253.51v6.6h253.51v10.58h-117.28v36.45h-191.74v-47.03h11.55v-6.6h-5.63v-226.46h207.77v-6.6h-5.06v-7.86h-6.48v7.86h-202.15v-142.36h201.43v89.47h6.61v-100.12h-202.12v-33.42h-24.2v491.76h228.3v-36.45h107.55v107.99h193.02v36.21h381.28v-418.1h.92v-453.42h-24.05ZM1008.35,1169.01h-352.5v-36.21h-193.02v-357.6h545.52v393.81Z" fill="#425563"/>
                <rect x="113.81" y="496.24" width="22.53" height="87.08" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <rect x="113.81" y="496.24" width="5.85" height="87.08" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <line x1="113.63" y1="583.32" x2="76.29" y2="583.32" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <path d="M59.24,563.29l.12,2.76c1.26,9.03,6.82,15.51,14.56,16.98l2.37.15" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <line x1="59.24" y1="563.29" x2="59.24" y2="516.13" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <path d="M76.29,496.24l-2.37.15c-7.74,1.47-13.31,7.95-14.56,16.98l-.12,2.76" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <polyline points="76.29 496.24 113.63 496.24 113.63 488.55 112.01 488.55 112.01 494.36 76.29 494.36" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <path d="M76.29,494.5l-2.37.15c-8.15,1.08-15.13,9.22-16.06,18.72l-.12,2.76" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <line x1="57.62" y1="516.13" x2="57.62" y2="563.29" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <path d="M57.74,563.29l.12,2.76c.92,9.5,7.91,17.64,16.06,18.72l2.37.15" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <polyline points="76.29 585.06 112.01 585.06 112.01 591.01 113.63 591.01 113.63 583.32" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <rect x="113.81" y="300.05" width="22.53" height="87.08" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <rect x="113.81" y="300.05" width="5.85" height="87.08" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <line x1="113.63" y1="387.12" x2="76.29" y2="387.12" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <path d="M59.24,367.09l.12,2.76c1.26,9.03,6.82,15.51,14.56,16.98l2.37.15" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <line x1="59.24" y1="367.09" x2="59.24" y2="319.93" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <path d="M76.29,300.05l-2.37.15c-7.74,1.47-13.31,7.95-14.56,16.98l-.12,2.76" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <polyline points="76.29 300.05 113.63 300.05 113.63 292.35 112.01 292.35 112.01 298.16 76.29 298.16" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <path d="M76.29,298.3l-2.37.15c-8.15,1.08-15.13,9.22-16.06,18.72l-.12,2.76" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <line x1="57.62" y1="319.93" x2="57.62" y2="367.09" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <path d="M57.74,367.09l.12,2.76c.92,9.5,7.91,17.64,16.06,18.72l2.37.15" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <polyline points="76.29 388.86 112.01 388.86 112.01 394.81 113.63 394.81 113.63 387.12" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <rect x="852.03" y="256.28" width="22.53" height="90.3" transform="translate(1164.72 -561.87) rotate(90)" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <rect x="860.37" y="247.94" width="5.85" height="90.3" transform="translate(1156.39 -570.21) rotate(90)" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <line x1="818.15" y1="289.98" x2="818.15" y2="252.64" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <path d="M838.92,235.59l-2.86.12c-9.37,1.26-16.09,6.82-17.61,14.56l-.15,2.37" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <line x1="838.92" y1="235.59" x2="887.83" y2="235.59" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <path d="M908.45,252.64l-.15-2.37c-1.52-7.74-8.24-13.31-17.61-14.56l-2.86-.12" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <polyline points="908.45 252.64 908.45 289.98 916.42 289.98 916.42 288.36 910.4 288.36 910.4 252.64" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <path d="M910.25,252.64l-.15-2.37c-1.12-8.15-9.56-15.13-19.41-16.06l-2.86-.12" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <line x1="887.83" y1="233.97" x2="838.91" y2="233.97" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <path d="M838.91,234.09l-2.86.12c-9.85.92-18.3,7.91-19.41,16.06l-.15,2.37" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <polyline points="816.34 252.64 816.34 288.36 810.17 288.36 810.17 289.98 818.15 289.98" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <rect x="140.92" y="960.57" width="3.79" height="45.43" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <rect x="343.45" y="777.85" width="3.79" height="45.43" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <rect x="306.28" y="741.13" width="3.79" height="48.07" transform="translate(1073.33 456.99) rotate(90)" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <rect x="430.44" y="777.85" width="3.79" height="45.43" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <rect x="668.95" y="627.31" width="3.29" height="48.47" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <rect x="688.31" y="497.39" width="3.29" height="42.18" transform="translate(811.2 1372.97) rotate(-135)" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <rect x="732.48" y="434.91" width="3.29" height="42.18" transform="translate(1468.25 912) rotate(180)" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <rect x="914.21" y="548.61" width="3.29" height="40.73" transform="translate(1831.7 1137.95) rotate(180)" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <rect x="768.36" y="512.7" width="3.29" height="45.25" transform="translate(234.68 1305.32) rotate(-90)" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <rect x="422.28" y="710.73" width="3.79" height="45.43" transform="translate(1242.73 952.12) rotate(135)" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <path d="M144.71,960.57s40.86,10.06,40.86,43.62" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <path d="M347.24,823.28s41.62-6.31,41.62-43.76c0,0,6.04,43.76,41.59,43.76" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <path d="M284.14,763.27s8.17-45.03,47.35-45.03" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <path d="M409.45,716.04s5.88-12.38,29.63-12.38" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <path d="M703.7,502.4s-4.61-9.68-26.79-9.68" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <path d="M732.48,434.91s-39.52,7.65-39.52,41.77" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <path d="M917.5,589.34s38.84,1.22,38.84-40.73" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <path d="M672.23,675.77s45.51-7.11,45.51-47" fill="none" stroke="#425563" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                <rect x="641.07" y="423.12" width="32.8" height="53.56" transform="translate(1314.94 899.8) rotate(180)" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10"/>
                <path d="M792.63,533.67s-1.72-40.95-44.79-40.95" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <g id="Components">
                <g id="tub">
                    <path d="M737.51,316.05c-.52-.67-1.17-1-1.95-1h-76.16c-.78,0-1.43.33-1.95,1l38.14,21.65c.09-.1.17-.24.26-.43.43-.48.95-.72,1.56-.72s1.13.24,1.56.72c.17.19.3.38.39.57l38.14-21.8c.61.57.91,1.29.91,2.15v41.3c0,.96-.3,1.72-.91,2.29-.52.57-1.17.86-1.95.86h-76.16c-.78,0-1.43-.29-1.95-.86-.61-.57-.91-1.34-.91-2.29v-19.79s-1.82-.86-1.82-.86l1.82-.72v-19.93c.09-.86.39-1.58.91-2.15" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <polyline points="656.53 339.71 661.87 342 661.87 335.7 656.53 338.13" fill="#425563"/>
                    <path d="M695.59,337.7c-.17.38-.26.76-.26,1.15,0,.48.09.86.26,1.15l.26.57c.43.48.95.72,1.56.72.61,0,1.13-.24,1.56-.72.17-.19.3-.38.39-.57.09-.29.13-.67.13-1.15,0-.38-.04-.72-.13-1" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <line x1="699.36" y1="340" x2="737.51" y2="361.79" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                    <line x1="695.59" y1="340" x2="657.44" y2="361.79" fill="none" stroke="#425563" stroke-miterlimit="10"/>
                </g>
                <g id="toilet">
                    <path d="M655.66,388.99l2.33-.82c1.37-.27,2.56-.82,3.56-1.64.55-.46,1.1-.87,1.64-1.23,2.83-1.55,5.8-2.28,8.91-2.19,3.2.09,6.12.91,8.77,2.47,2.65,1.55,4.8,3.75,6.44,6.58.64,1.74.64,3.43,0,5.07-.27.64-.59,1.19-.96,1.64-2.01,2.65-4.43,4.61-7.26,5.89-2.83,1.28-5.8,1.78-8.91,1.51-3.11-.27-5.98-1.32-8.63-3.15v-.14c-1-.82-2.15-1.37-3.43-1.64l-2.47-.96v5.89c0,.55-.18,1.05-.55,1.51-.27.27-.69.5-1.23.69l-9.18.55c-.64,0-1.23-.23-1.78-.69-.37-.27-.64-.69-.82-1.23v-24.53c.18-.64.46-1.14.82-1.51.55-.37,1.14-.55,1.78-.55l9.18.55c.55.09.96.32,1.23.69.37.46.55.96.55,1.51v5.76s0,11.37,0,11.37" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M685.66,396.52c.37-1.19.37-2.38,0-3.56-1.46-2.56-3.43-4.52-5.89-5.89-2.28-1.37-4.84-2.1-7.67-2.19-2.74,0-5.39.69-7.95,2.06-1.55.91-2.92,2.01-4.11,3.29-.18.18-.27.46-.27.82v7.4c0,.27.09.55.27.82,1.92,2.1,4.2,3.56,6.85,4.38,2.65.91,5.3,1.1,7.95.55,2.74-.46,5.21-1.64,7.4-3.56,1.37-1.19,2.51-2.56,3.43-4.11Z" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                    <line x1="653.87" y1="381.04" x2="653.87" y2="408.44" fill="#dde7ed" stroke="#425563" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g id="sink">
                    <path d="M657.51,459.57c-1.74-.18-3.29-.82-4.66-1.92l-.69,3.98c1.65.64,3.43,1.01,5.35,1.1,3.57-.09,6.54-1.37,8.91-3.84,2.47-2.38,3.75-5.35,3.84-8.91-.09-3.66-1.37-6.67-3.84-9.05-2.38-2.47-5.35-3.75-8.91-3.84-3.66.09-6.67,1.37-9.05,3.84-2.47,2.38-3.75,5.39-3.84,9.05.09,3.57,1.37,6.54,3.84,8.91,1.1,1.1,2.33,2.01,3.7,2.74-1.1-3.57-1.65-7.22-1.65-10.97l-2.47.41h-.14s-.14,0-.14,0c-.27,0-.5-.14-.69-.41-.27-.27-.37-.55-.27-.82,0-.27.09-.55.27-.82.27-.18.55-.27.82-.27s.55.14.82.41h1.78c0-3.66.55-7.27,1.65-10.84l.69,3.84c1.74-1.37,3.7-2.06,5.9-2.06s4.21.69,6.03,2.06c1.46,1.19,2.51,2.56,3.15,4.11.64,1.55.82,3.2.55,4.94-.18,1.74-.82,3.29-1.92,4.66-1.19,1.46-2.56,2.51-4.11,3.15s-3.2.82-4.94.55Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M657.51,464.23c2.65-.09,5.03-.73,7.13-1.92,2.19-1.28,3.93-3.02,5.21-5.21,1.19-2.1,1.83-4.48,1.92-7.13-.09-2.74-.73-5.17-1.92-7.27-1.28-2.19-3.02-3.93-5.21-5.21-2.1-1.19-4.48-1.83-7.13-1.92-2.65.09-5.07.73-7.27,1.92-2.19,1.28-3.89,3.02-5.07,5.21-1.28,2.1-1.97,4.53-2.06,7.27.09,2.65.78,5.03,2.06,7.13,1.19,2.19,2.88,3.93,5.07,5.21,2.19,1.19,4.62,1.83,7.27,1.92Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M649.83,446.95v-1.92c-.09-.18-.23-.32-.41-.41-.27.09-.41.23-.41.41v1.78s0,.82,0,.82c0,.27.14.41.41.41.18,0,.32-.14.41-.41v-.69c.18.09.32.23.41.41.18.46,0,.87-.55,1.23-.55.09-.96-.09-1.23-.55-.18-.55,0-.96.55-1.23" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M652.85,442.15v.14c-.46,2.29-.73,4.57-.82,6.86h3.84s.27.41.27.41v.69s-.27.41-.27.41h-3.84c.09,2.38.37,4.71.82,6.99" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M657.51,451.06c.64-.09,1.01-.46,1.1-1.1-.09-.73-.46-1.14-1.1-1.23-.73.09-1.14.5-1.23,1.23.09.64.5,1.01,1.23,1.1Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <line x1="652.03" y1="450.65" x2="650.52" y2="450.65" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <line x1="650.52" y1="449.14" x2="652.03" y2="449.14" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M648.73,449.14l-1.1-.27c-.27.27-.46.64-.55,1.1.09.37.37.73.82,1.1" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M647.91,448.73c-.09.09-.18.14-.27.14" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                    <path d="M649.83,453.12c.46-.37.59-.78.41-1.23-.27-.55-.69-.73-1.23-.55-.55.27-.73.69-.55,1.23.09.18.27.37.55.55v-.96c0-.18.14-.32.41-.41.18.09.32.23.41.41v.96s0,1.65,0,1.65c-.09.27-.23.41-.41.41-.27,0-.41-.14-.41-.41v-1.65" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                </g>
                </g>
                <g id="Names">
                <text id="Unfinished_Storage" transform="translate(167.23 705.64)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">Unfinished Storage</tspan></text>
                <text id="Recreational_Room" transform="translate(232.16 453.78)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">Recreation Room</tspan></text>
                <text id="Bedroom_4" transform="translate(787.17 427.81)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">Bedroom 6</tspan></text>
                <text id="Mechanical1" data-name="Mechanical" transform="translate(804.63 711.29)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">Mechanical</tspan></text>
                <text id="Bath_4" transform="translate(667.42 419.16)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">Bathroom</tspan></text>
                <text id="Walk-in_Closet" transform="translate(916.42 614.32)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="9"><tspan x="0" y="0">Walk-in Closet</tspan></text>
                <text transform="translate(705.16 991.95)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">Unexcavated</tspan></text>
                <text transform="translate(191.27 1039.21)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">Unfinished</tspan></text>
                <text transform="translate(270.02 904.42)" fill="#425563" font-family="Fredoka, arial, sans-serif" font-size="14"><tspan x="0" y="0">Flex</tspan></text>
                </g>
                <g id="furniture">
                <g id="Rug">
                    <g opacity=".6">
                    <g>
                        <g>
                        <g>
                            <path d="M436,348.7c.07.07.12.17.13.28l.59,5.68c.34,3.3-.42,6.14-2.2,8.22-1.66,1.94-4.07,3.04-6.99,3.19l-8.27.43c-.13,0-.26-.04-.35-.13,0,0,0,0,0,0-.09-.09-.14-.22-.14-.35l.4-8.52c.13-2.86,1.19-5.26,3.05-6.92,1.96-1.75,4.65-2.57,7.78-2.37l5.69.37c.12,0,.22.06.3.13ZM419.73,365.53l7.76-.4c2.65-.14,4.84-1.13,6.33-2.86,1.61-1.88,2.29-4.48,1.98-7.52l-.55-5.29-5.3-.34c-2.88-.19-5.34.55-7.11,2.13-1.67,1.5-2.62,3.67-2.74,6.28l-.38,8.01Z" fill="#fff"/>
                            <path d="M429.09,348.16c-2.74,0-5.1.82-6.86,2.4-1.86,1.67-2.92,4.06-3.05,6.92l-.4,8.52c0,.13.04.26.14.35,0,0,0,0,0,0,.09.09.2.14.33.14,0,0,.02,0,.02,0l8.27-.43c2.91-.15,5.33-1.25,6.99-3.19,1.78-2.08,2.54-4.92,2.2-8.22l-.59-5.68c-.01-.11-.06-.21-.13-.28-.08-.08-.18-.13-.3-.13l-5.69-.37c-.31-.02-.62-.03-.92-.03h0ZM419.73,365.53l.38-8.01c.12-2.61,1.07-4.78,2.74-6.28,1.59-1.42,3.73-2.16,6.24-2.16.28,0,.57,0,.86.03l5.3.34.55,5.29c.31,3.04-.37,5.64-1.98,7.52-1.49,1.74-3.68,2.73-6.33,2.86l-7.76.4h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M419.41,365.53c.09.09.14.22.14.35l-.4,8.52c-.13,2.86-1.19,5.26-3.05,6.92-1.96,1.75-4.65,2.57-7.78,2.37l-5.69-.37c-.23-.01-.41-.19-.43-.41l-.59-5.68c-.34-3.3.42-6.14,2.2-8.22,1.66-1.94,4.07-3.04,6.99-3.19l8.27-.43c.13,0,.26.05.35.14ZM403.07,382.42l5.3.34c2.88.19,5.34-.55,7.11-2.13,1.67-1.5,2.62-3.67,2.74-6.28l.38-8.01-7.76.4c-2.65.14-4.84,1.13-6.33,2.86-1.61,1.88-2.29,4.48-1.98,7.52l.55,5.29Z" fill="#fff"/>
                            <path d="M419.08,365.4s-.01,0-.02,0l-8.27.43c-2.91.15-5.33,1.25-6.99,3.19-1.78,2.08-2.54,4.92-2.2,8.22l.59,5.68c.02.23.21.4.43.41l5.69.37c.31.02.62.03.92.03,2.74,0,5.1-.82,6.86-2.4,1.86-1.67,2.92-4.06,3.05-6.92l.4-8.52c0-.13-.04-.26-.14-.35-.08-.08-.21-.14-.33-.14h0ZM418.59,366.35l-.38,8.01c-.12,2.61-1.07,4.78-2.74,6.28-1.59,1.42-3.73,2.16-6.24,2.16-.28,0-.57,0-.86-.03l-5.3-.34-.55-5.29c-.31-3.04.37-5.64,1.98-7.52,1.49-1.74,3.68-2.73,6.33-2.86l7.76-.4h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <g>
                            <path d="M434.21,368.66c.11.11.22.23.33.35,1.75,1.96,2.57,4.65,2.37,7.78l-.37,5.69c-.01.23-.19.41-.41.43l-5.68.59c-3.3.34-6.14-.42-8.22-2.2-1.93-1.66-3.04-4.07-3.19-6.99l-.43-8.27c0-.13.04-.26.13-.35.09-.09.22-.14.35-.14l8.52.4c2.68.13,4.95,1.06,6.59,2.7ZM435.64,382.03l.34-5.3c.19-2.88-.55-5.34-2.13-7.11-1.5-1.67-3.67-2.62-6.28-2.74l-8.01-.38.4,7.76c.14,2.65,1.13,4.84,2.86,6.33,1.88,1.61,4.48,2.29,7.52,1.98l5.29-.55Z" fill="#fff"/>
                            <path d="M419.08,365.56c-.12,0-.24.05-.33.14-.09.09-.14.22-.13.35l.43,8.27c.15,2.91,1.25,5.33,3.19,6.99,1.75,1.5,4.05,2.28,6.71,2.28.49,0,.99-.03,1.51-.08l5.68-.59c.22-.02.4-.21.41-.43l.37-5.69c.2-3.13-.62-5.83-2.37-7.78-.11-.12-.22-.24-.33-.35-1.64-1.64-3.91-2.58-6.59-2.7l-8.52-.4s-.01,0-.02,0h0ZM428.95,382.65c-2.44,0-4.53-.7-6.11-2.05-1.74-1.49-2.73-3.68-2.86-6.33l-.4-7.76,8.01.38c2.61.12,4.78,1.07,6.28,2.74,1.58,1.77,2.32,4.23,2.13,7.11l-.34,5.3-5.29.55c-.48.05-.95.07-1.41.07h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M416.58,351.03c1.63,1.63,2.56,3.88,2.7,6.53l.43,8.27c0,.13-.04.26-.13.35-.09.09-.22.14-.35.14l-8.52-.4c-2.86-.13-5.26-1.19-6.92-3.05-1.75-1.96-2.57-4.65-2.37-7.78l.37-5.69c.01-.23.19-.41.41-.43l5.68-.59c3.3-.34,6.14.42,8.22,2.2.17.15.33.3.49.45ZM418.75,365.37l-.4-7.76c-.14-2.65-1.13-4.84-2.86-6.33-1.88-1.61-4.48-2.29-7.52-1.98l-5.29.55-.34,5.3c-.19,2.88.55,5.34,2.13,7.11,1.5,1.67,3.67,2.62,6.28,2.74l8.01.38Z" fill="#fff"/>
                            <path d="M409.38,348.3c-.49,0-.99.03-1.51.08l-5.68.59c-.23.02-.4.21-.41.43l-.37,5.69c-.2,3.13.62,5.83,2.37,7.78,1.67,1.86,4.06,2.92,6.92,3.05l8.52.4s.01,0,.02,0c.12,0,.24-.05.33-.14.09-.09.14-.22.13-.35l-.43-8.27c-.14-2.66-1.07-4.9-2.7-6.53-.16-.16-.32-.31-.49-.45-1.75-1.5-4.05-2.28-6.71-2.28h0ZM418.75,365.37l-8.01-.38c-2.61-.12-4.78-1.07-6.28-2.74-1.58-1.77-2.32-4.23-2.13-7.11l.34-5.3,5.29-.55c.48-.05.95-.07,1.41-.07,2.44,0,4.53.7,6.11,2.05,1.74,1.49,2.73,3.68,2.86,6.33l.4,7.76h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <path d="M403.28,349.4l32.26,32.26c.18.18.18.47,0,.66-.18.18-.47.18-.66,0l-32.26-32.26c-.18-.18-.18-.47,0-.66s.47-.18.66,0Z" fill="#fff"/>
                        <path d="M402.96,349.27c-.12,0-.24.05-.33.14-.18.18-.18.47,0,.66l32.26,32.26c.09.09.21.14.33.14s.24-.05.33-.14c.18-.18.18-.47,0-.66l-32.26-32.26c-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                        <path d="M435.26,349.78c.18.18.18.47,0,.66l-31.88,31.88c-.18.18-.47.18-.66,0s-.18-.47,0-.66l31.88-31.88c.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M434.94,349.64c-.12,0-.24.05-.33.14l-31.88,31.88c-.18.18-.18.47,0,.66.09.09.21.14.33.14s.24-.05.33-.14l31.88-31.88c.18-.18.18-.47,0-.66-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                    </g>
                    <g>
                        <g>
                        <g>
                            <path d="M436.31,383.18c.07.07.12.17.13.28l.59,5.68c.34,3.3-.42,6.14-2.2,8.22-1.66,1.94-4.07,3.04-6.99,3.19l-8.27.43c-.13,0-.26-.04-.35-.13,0,0,0,0,0,0-.09-.09-.14-.22-.14-.35l.4-8.52c.13-2.86,1.19-5.26,3.05-6.92,1.96-1.75,4.65-2.57,7.78-2.37l5.69.37c.12,0,.22.06.3.13ZM420.04,400.02l7.76-.4c2.65-.14,4.84-1.13,6.33-2.86,1.61-1.88,2.29-4.48,1.98-7.52l-.55-5.29-5.3-.34c-2.88-.19-5.34.55-7.11,2.13-1.67,1.5-2.62,3.67-2.74,6.28l-.38,8.01Z" fill="#fff"/>
                            <path d="M429.4,382.65c-2.74,0-5.1.82-6.86,2.4-1.86,1.67-2.92,4.06-3.05,6.92l-.4,8.52c0,.13.04.26.14.35,0,0,0,0,0,0,.09.09.2.14.33.14,0,0,.02,0,.02,0l8.27-.43c2.91-.15,5.33-1.25,6.99-3.19,1.78-2.08,2.54-4.92,2.2-8.22l-.59-5.68c-.01-.11-.06-.21-.13-.28-.08-.08-.18-.13-.3-.13l-5.69-.37c-.31-.02-.62-.03-.92-.03h0ZM420.04,400.02l.38-8.01c.12-2.61,1.07-4.78,2.74-6.28,1.59-1.42,3.73-2.16,6.24-2.16.28,0,.57,0,.86.03l5.3.34.55,5.29c.31,3.04-.37,5.64-1.98,7.52-1.49,1.74-3.68,2.73-6.33,2.86l-7.76.4h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M419.72,400.02c.09.09.14.22.14.35l-.4,8.52c-.13,2.86-1.19,5.26-3.05,6.92-1.96,1.75-4.65,2.57-7.78,2.37l-5.69-.37c-.23-.01-.41-.19-.43-.41l-.59-5.68c-.34-3.3.42-6.14,2.2-8.22,1.66-1.94,4.07-3.04,6.99-3.19l8.27-.43c.13,0,.26.05.35.14ZM403.38,416.91l5.3.34c2.88.19,5.34-.55,7.11-2.13,1.67-1.5,2.62-3.67,2.74-6.28l.38-8.01-7.76.4c-2.65.14-4.84,1.13-6.33,2.86-1.61,1.88-2.29,4.48-1.98,7.52l.55,5.29Z" fill="#fff"/>
                            <path d="M419.39,399.88s-.01,0-.02,0l-8.27.43c-2.91.15-5.33,1.25-6.99,3.19-1.78,2.08-2.54,4.92-2.2,8.22l.59,5.68c.02.23.21.4.43.41l5.69.37c.31.02.62.03.92.03,2.74,0,5.1-.82,6.86-2.4,1.86-1.67,2.92-4.06,3.05-6.92l.4-8.52c0-.13-.04-.26-.14-.35-.08-.08-.21-.14-.33-.14h0ZM418.9,400.84l-.38,8.01c-.12,2.61-1.07,4.78-2.74,6.28-1.59,1.42-3.73,2.16-6.24,2.16-.28,0-.57,0-.86-.03l-5.3-.34-.55-5.29c-.31-3.04.37-5.64,1.98-7.52,1.49-1.74,3.68-2.73,6.33-2.86l7.76-.4h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <g>
                            <path d="M434.52,403.15c.11.11.22.23.33.35,1.75,1.96,2.57,4.65,2.37,7.78l-.37,5.69c-.01.23-.19.41-.41.43l-5.68.59c-3.3.34-6.14-.42-8.22-2.2-1.93-1.66-3.04-4.07-3.19-6.99l-.43-8.27c0-.13.04-.26.13-.35.09-.09.22-.14.35-.14l8.52.4c2.68.13,4.95,1.06,6.59,2.7ZM435.95,416.52l.34-5.3c.19-2.88-.55-5.34-2.13-7.11-1.5-1.67-3.67-2.62-6.28-2.74l-8.01-.38.4,7.76c.14,2.65,1.13,4.84,2.86,6.33,1.88,1.61,4.48,2.29,7.52,1.98l5.29-.55Z" fill="#fff"/>
                            <path d="M419.39,400.05c-.12,0-.24.05-.33.14-.09.09-.14.22-.13.35l.43,8.27c.15,2.91,1.25,5.33,3.19,6.99,1.75,1.5,4.05,2.28,6.71,2.28.49,0,.99-.03,1.51-.08l5.68-.59c.22-.02.4-.21.41-.43l.37-5.69c.2-3.13-.62-5.83-2.37-7.78-.11-.12-.22-.24-.33-.35-1.64-1.65-3.91-2.58-6.59-2.7l-8.52-.4s-.01,0-.02,0h0ZM429.26,417.14c-2.44,0-4.53-.7-6.11-2.05-1.74-1.49-2.73-3.68-2.86-6.33l-.4-7.76,8.01.38c2.61.12,4.78,1.07,6.28,2.74,1.58,1.77,2.32,4.23,2.13,7.11l-.34,5.3-5.29.55c-.48.05-.95.07-1.41.07h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M416.89,385.52c1.63,1.63,2.56,3.88,2.7,6.53l.43,8.27c0,.13-.04.26-.13.35-.09.09-.22.14-.35.14l-8.52-.4c-2.86-.13-5.26-1.19-6.92-3.05-1.75-1.96-2.57-4.65-2.37-7.78l.37-5.69c.01-.23.19-.41.41-.43l5.68-.59c3.3-.34,6.14.42,8.22,2.2.17.15.33.3.49.45ZM419.06,399.86l-.4-7.76c-.14-2.65-1.13-4.84-2.86-6.33-1.88-1.61-4.48-2.29-7.52-1.98l-5.29.55-.34,5.3c-.19,2.88.55,5.34,2.13,7.11,1.5,1.67,3.67,2.62,6.28,2.74l8.01.38Z" fill="#fff"/>
                            <path d="M409.69,382.79c-.49,0-.99.03-1.51.08l-5.68.59c-.22.02-.4.21-.41.43l-.37,5.69c-.2,3.13.62,5.83,2.37,7.78,1.67,1.86,4.06,2.92,6.92,3.05l8.52.4s.01,0,.02,0c.12,0,.24-.05.33-.14.09-.09.14-.22.13-.35l-.43-8.27c-.14-2.66-1.07-4.9-2.7-6.53-.16-.16-.32-.31-.49-.45-1.75-1.5-4.05-2.28-6.71-2.28h0ZM419.06,399.86l-8.01-.38c-2.61-.12-4.78-1.07-6.28-2.74-1.58-1.77-2.32-4.23-2.13-7.11l.34-5.3,5.29-.55c.48-.05.95-.07,1.41-.07,2.44,0,4.53.7,6.11,2.05,1.74,1.49,2.73,3.68,2.86,6.33l.4,7.76h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <path d="M403.59,383.89l32.26,32.26c.18.18.18.47,0,.66-.18.18-.47.18-.66,0l-32.26-32.26c-.18-.18-.18-.47,0-.66.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M403.27,383.76c-.12,0-.24.05-.33.14-.18.18-.18.47,0,.66l32.26,32.26c.09.09.21.14.33.14s.24-.05.33-.14c.18-.18.18-.47,0-.66l-32.26-32.26c-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                        <path d="M435.57,384.27c.18.18.18.47,0,.66l-31.88,31.88c-.18.18-.47.18-.66,0-.18-.18-.18-.47,0-.66l31.88-31.88c.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M435.25,384.13c-.12,0-.24.05-.33.14l-31.88,31.88c-.18.18-.18.47,0,.66.09.09.21.14.33.14s.24-.05.33-.14l31.88-31.88c.18-.18.18-.47,0-.66-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                    </g>
                    <g>
                        <g>
                        <g>
                            <path d="M436.54,417.5c.07.07.12.17.13.28l.59,5.68c.34,3.3-.42,6.14-2.2,8.22-1.66,1.94-4.07,3.04-6.99,3.19l-8.27.43c-.13,0-.26-.04-.35-.13,0,0,0,0,0,0-.09-.09-.14-.22-.14-.35l.4-8.52c.13-2.86,1.19-5.26,3.05-6.92,1.96-1.75,4.65-2.57,7.78-2.37l5.69.37c.12,0,.22.06.3.13ZM420.27,434.34l7.76-.4c2.65-.14,4.84-1.13,6.33-2.86,1.61-1.88,2.29-4.48,1.98-7.52l-.55-5.29-5.3-.34c-2.88-.19-5.34.55-7.11,2.13-1.67,1.5-2.62,3.67-2.74,6.28l-.38,8.01Z" fill="#fff"/>
                            <path d="M429.63,416.97c-2.74,0-5.1.82-6.86,2.4-1.86,1.67-2.92,4.06-3.05,6.92l-.4,8.52c0,.13.04.26.14.35,0,0,0,0,0,0,.09.09.2.13.33.13,0,0,.02,0,.02,0l8.27-.43c2.91-.15,5.33-1.25,6.99-3.19,1.78-2.08,2.54-4.92,2.2-8.22l-.59-5.68c-.01-.11-.06-.21-.13-.28-.08-.08-.18-.13-.3-.13l-5.69-.37c-.31-.02-.62-.03-.92-.03h0ZM420.27,434.34l.38-8.01c.12-2.61,1.07-4.78,2.74-6.28,1.59-1.42,3.73-2.16,6.24-2.16.28,0,.57,0,.86.03l5.3.34.55,5.29c.31,3.04-.37,5.64-1.98,7.52-1.49,1.74-3.68,2.73-6.33,2.86l-7.76.4h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M419.95,434.34c.09.09.14.22.14.35l-.4,8.52c-.13,2.86-1.19,5.26-3.05,6.92-1.96,1.75-4.65,2.57-7.78,2.37l-5.69-.37c-.23-.01-.41-.19-.43-.41l-.59-5.68c-.34-3.3.42-6.14,2.2-8.22,1.66-1.94,4.07-3.04,6.99-3.19l8.27-.43c.13,0,.26.05.35.14ZM403.61,451.22l5.3.34c2.88.19,5.34-.55,7.11-2.13,1.67-1.5,2.62-3.67,2.74-6.28l.38-8.01-7.76.4c-2.65.14-4.84,1.13-6.33,2.86-1.61,1.88-2.29,4.48-1.98,7.52l.55,5.29Z" fill="#fff"/>
                            <path d="M419.62,434.2s-.01,0-.02,0l-8.27.43c-2.91.15-5.33,1.25-6.99,3.19-1.78,2.08-2.54,4.92-2.2,8.22l.59,5.68c.02.23.21.4.43.41l5.69.37c.31.02.62.03.92.03,2.74,0,5.1-.82,6.86-2.4,1.86-1.67,2.92-4.06,3.05-6.92l.4-8.52c0-.13-.04-.26-.14-.35-.08-.08-.21-.14-.33-.14h0ZM419.13,435.15l-.38,8.01c-.12,2.61-1.07,4.78-2.74,6.28-1.59,1.42-3.73,2.16-6.24,2.16-.28,0-.57,0-.86-.03l-5.3-.34-.55-5.29c-.31-3.04.37-5.64,1.98-7.52,1.49-1.74,3.68-2.73,6.33-2.86l7.76-.4h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <g>
                            <path d="M434.75,437.47c.11.11.22.23.33.35,1.75,1.96,2.57,4.65,2.37,7.78l-.37,5.69c-.01.23-.19.41-.41.43l-5.68.59c-3.3.34-6.14-.42-8.22-2.2-1.93-1.66-3.04-4.07-3.19-6.99l-.43-8.27c0-.13.04-.26.13-.35.09-.09.22-.14.35-.14l8.52.4c2.68.13,4.95,1.06,6.59,2.7ZM436.18,450.84l.34-5.3c.19-2.88-.55-5.34-2.13-7.11-1.5-1.67-3.67-2.62-6.28-2.74l-8.01-.38.4,7.76c.14,2.65,1.13,4.84,2.86,6.33,1.88,1.61,4.48,2.29,7.52,1.98l5.29-.55Z" fill="#fff"/>
                            <path d="M419.62,434.36c-.12,0-.24.05-.33.14-.09.09-.14.22-.13.35l.43,8.27c.15,2.91,1.25,5.33,3.19,6.99,1.75,1.5,4.05,2.28,6.71,2.28.49,0,.99-.03,1.51-.08l5.68-.59c.22-.02.4-.21.41-.43l.37-5.69c.2-3.13-.62-5.83-2.37-7.78-.11-.12-.22-.24-.33-.35-1.64-1.64-3.91-2.58-6.59-2.7l-8.52-.4s-.01,0-.02,0h0ZM429.48,451.46c-2.44,0-4.53-.7-6.11-2.05-1.74-1.49-2.73-3.68-2.86-6.33l-.4-7.76,8.01.38c2.61.12,4.78,1.07,6.28,2.74,1.58,1.77,2.32,4.23,2.13,7.11l-.34,5.3-5.29.55c-.48.05-.95.07-1.41.07h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M417.12,419.84c1.63,1.63,2.56,3.88,2.7,6.53l.43,8.27c0,.13-.04.26-.13.35-.09.09-.22.14-.35.14l-8.52-.4c-2.86-.13-5.26-1.19-6.92-3.05-1.75-1.96-2.57-4.65-2.37-7.78l.37-5.69c.01-.23.19-.41.41-.43l5.68-.59c3.3-.34,6.14.42,8.22,2.2.17.15.33.3.49.45ZM419.29,434.18l-.4-7.76c-.14-2.65-1.13-4.84-2.86-6.33-1.88-1.61-4.48-2.29-7.52-1.98l-5.29.55-.34,5.3c-.19,2.88.55,5.34,2.13,7.11,1.5,1.67,3.67,2.62,6.28,2.74l8.01.38Z" fill="#fff"/>
                            <path d="M409.92,417.11c-.49,0-.99.03-1.51.08l-5.68.59c-.22.02-.4.21-.41.43l-.37,5.69c-.2,3.13.62,5.83,2.37,7.78,1.67,1.86,4.06,2.92,6.92,3.05l8.52.4s.01,0,.02,0c.12,0,.24-.05.33-.14.09-.09.14-.22.13-.35l-.43-8.27c-.14-2.66-1.07-4.9-2.7-6.53-.16-.16-.32-.31-.49-.45-1.75-1.5-4.05-2.28-6.71-2.28h0ZM419.29,434.18l-8.01-.38c-2.61-.12-4.78-1.07-6.28-2.74-1.58-1.77-2.32-4.23-2.13-7.11l.34-5.3,5.29-.55c.48-.05.95-.07,1.41-.07,2.44,0,4.53.7,6.11,2.05,1.74,1.49,2.73,3.68,2.86,6.33l.4,7.76h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <path d="M403.82,418.21l32.26,32.26c.18.18.18.47,0,.66-.18.18-.47.18-.66,0l-32.26-32.26c-.18-.18-.18-.47,0-.66.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M403.49,418.07c-.12,0-.24.05-.33.14-.18.18-.18.47,0,.66l32.26,32.26c.09.09.21.14.33.14s.24-.05.33-.14c.18-.18.18-.47,0-.66l-32.26-32.26c-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                        <path d="M435.8,418.59c.18.18.18.47,0,.66l-31.88,31.88c-.18.18-.47.18-.66,0-.18-.18-.18-.47,0-.66l31.88-31.88c.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M435.47,418.45c-.12,0-.24.05-.33.14l-31.88,31.88c-.18.18-.18.47,0,.66.09.09.21.14.33.14s.24-.05.33-.14l31.88-31.88c.18-.18.18-.47,0-.66-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                    </g>
                    <g>
                        <g>
                        <g>
                            <path d="M436.85,451.99c.07.07.12.17.13.28l.59,5.68c.34,3.3-.42,6.14-2.2,8.22-1.66,1.94-4.07,3.04-6.99,3.19l-8.27.43c-.13,0-.26-.04-.35-.13,0,0,0,0,0,0-.09-.09-.14-.22-.14-.35l.4-8.52c.13-2.86,1.19-5.26,3.05-6.92,1.96-1.75,4.65-2.57,7.78-2.37l5.69.37c.12,0,.22.06.3.13ZM420.58,468.83l7.76-.4c2.65-.14,4.84-1.13,6.33-2.86,1.61-1.88,2.29-4.48,1.98-7.52l-.55-5.29-5.3-.34c-2.88-.19-5.34.55-7.11,2.13-1.67,1.5-2.62,3.67-2.74,6.28l-.38,8.01Z" fill="#fff"/>
                            <path d="M429.94,451.46c-2.74,0-5.1.82-6.86,2.4-1.86,1.67-2.92,4.06-3.05,6.92l-.4,8.52c0,.13.04.26.14.35,0,0,0,0,0,0,.09.09.2.14.33.14,0,0,.02,0,.02,0l8.27-.43c2.91-.15,5.33-1.25,6.99-3.19,1.78-2.08,2.54-4.92,2.2-8.22l-.59-5.68c-.01-.11-.06-.21-.13-.28-.08-.08-.18-.13-.3-.13l-5.69-.37c-.31-.02-.62-.03-.92-.03h0ZM420.58,468.83l.38-8.01c.12-2.61,1.07-4.78,2.74-6.28,1.59-1.42,3.73-2.16,6.24-2.16.28,0,.57,0,.86.03l5.3.34.55,5.29c.31,3.04-.37,5.64-1.98,7.52-1.49,1.74-3.68,2.73-6.33,2.86l-7.76.4h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M420.26,468.82c.09.09.14.22.14.35l-.4,8.52c-.13,2.86-1.19,5.26-3.05,6.92-1.96,1.75-4.65,2.57-7.78,2.37l-5.69-.37c-.23-.01-.41-.19-.43-.41l-.59-5.68c-.34-3.3.42-6.14,2.2-8.22,1.66-1.94,4.07-3.04,6.99-3.19l8.27-.43c.13,0,.27.05.35.14ZM403.92,485.71l5.3.34c2.88.19,5.34-.55,7.11-2.13,1.67-1.5,2.62-3.67,2.74-6.28l.38-8.01-7.76.4c-2.65.14-4.84,1.13-6.33,2.86-1.61,1.88-2.29,4.48-1.98,7.52l.55,5.29Z" fill="#fff"/>
                            <path d="M419.93,468.69s-.01,0-.02,0l-8.27.43c-2.91.15-5.33,1.25-6.99,3.19-1.78,2.08-2.54,4.92-2.2,8.22l.59,5.68c.02.23.21.4.43.41l5.69.37c.31.02.62.03.92.03,2.74,0,5.1-.82,6.86-2.4,1.86-1.67,2.92-4.06,3.05-6.92l.4-8.52c0-.13-.04-.26-.14-.35-.08-.08-.21-.14-.33-.14h0ZM419.44,469.64l-.38,8.01c-.12,2.61-1.07,4.78-2.74,6.28-1.59,1.42-3.73,2.16-6.24,2.16-.28,0-.57,0-.86-.03l-5.3-.34-.55-5.29c-.31-3.04.37-5.64,1.98-7.52,1.49-1.74,3.68-2.73,6.33-2.86l7.76-.4h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <g>
                            <path d="M435.06,471.95c.11.11.22.23.33.35,1.75,1.96,2.57,4.65,2.37,7.78l-.37,5.69c-.01.23-.19.41-.41.43l-5.68.59c-3.3.34-6.14-.42-8.22-2.2-1.93-1.66-3.04-4.07-3.19-6.99l-.43-8.27c0-.13.04-.26.13-.35.09-.09.22-.14.35-.14l8.52.4c2.68.13,4.95,1.06,6.59,2.7ZM436.49,485.33l.34-5.3c.19-2.88-.55-5.34-2.13-7.11-1.5-1.67-3.67-2.62-6.28-2.74l-8.01-.38.4,7.76c.14,2.65,1.13,4.84,2.86,6.33,1.88,1.61,4.48,2.29,7.52,1.98l5.29-.55Z" fill="#fff"/>
                            <path d="M419.93,468.85c-.12,0-.24.05-.33.14-.09.09-.14.22-.13.35l.43,8.27c.15,2.91,1.25,5.33,3.19,6.99,1.75,1.5,4.05,2.28,6.71,2.28.49,0,.99-.03,1.51-.08l5.68-.59c.22-.02.4-.21.41-.43l.37-5.69c.2-3.13-.62-5.83-2.37-7.78-.11-.12-.22-.24-.33-.35-1.64-1.65-3.91-2.58-6.59-2.7l-8.52-.4s-.01,0-.02,0h0ZM429.79,485.95c-2.44,0-4.53-.7-6.11-2.05-1.74-1.49-2.73-3.68-2.86-6.33l-.4-7.76,8.01.38c2.61.12,4.78,1.07,6.28,2.74,1.58,1.77,2.32,4.23,2.13,7.11l-.34,5.3-5.29.55c-.48.05-.95.07-1.41.07h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M417.43,454.32c1.63,1.63,2.56,3.88,2.7,6.53l.43,8.27c0,.13-.04.26-.13.35-.09.09-.22.14-.35.14l-8.52-.4c-2.86-.13-5.26-1.19-6.92-3.05-1.75-1.96-2.57-4.65-2.37-7.78l.37-5.69c.01-.23.19-.41.41-.43l5.68-.59c3.3-.34,6.14.42,8.22,2.2.17.15.33.3.49.45ZM419.6,468.67l-.4-7.76c-.14-2.65-1.13-4.84-2.86-6.33-1.88-1.61-4.48-2.29-7.52-1.98l-5.29.55-.34,5.3c-.19,2.88.55,5.34,2.13,7.11,1.5,1.67,3.67,2.62,6.28,2.74l8.01.38Z" fill="#fff"/>
                            <path d="M410.23,451.59c-.49,0-.99.03-1.51.08l-5.68.59c-.22.02-.4.21-.41.43l-.37,5.69c-.2,3.13.62,5.83,2.37,7.78,1.67,1.86,4.06,2.92,6.92,3.05l8.52.4s.01,0,.02,0c.12,0,.24-.05.33-.14.09-.09.14-.22.13-.35l-.43-8.27c-.14-2.66-1.07-4.9-2.7-6.53-.16-.16-.32-.31-.49-.45-1.75-1.5-4.05-2.28-6.71-2.28h0ZM419.6,468.67l-8.01-.38c-2.61-.12-4.78-1.07-6.28-2.74-1.58-1.77-2.32-4.23-2.13-7.11l.34-5.3,5.29-.55c.48-.05.95-.07,1.41-.07,2.44,0,4.53.7,6.11,2.05,1.74,1.49,2.73,3.68,2.86,6.33l.4,7.76h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <path d="M404.13,452.7l32.26,32.26c.18.18.18.47,0,.66-.18.18-.47.18-.66,0l-32.26-32.26c-.18-.18-.18-.47,0-.66.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M403.8,452.56c-.12,0-.24.05-.33.14-.18.18-.18.47,0,.66l32.26,32.26c.09.09.21.14.33.14s.24-.05.33-.14c.18-.18.18-.47,0-.66l-32.26-32.26c-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                        <path d="M436.11,453.07c.18.18.18.47,0,.66l-31.88,31.88c-.18.18-.47.18-.66,0-.18-.18-.18-.47,0-.66l31.88-31.88c.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M435.78,452.94c-.12,0-.24.05-.33.14l-31.88,31.88c-.18.18-.18.47,0,.66.09.09.21.14.33.14s.24-.05.33-.14l31.88-31.88c.18-.18.18-.47,0-.66-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                    </g>
                    </g>
                    <g opacity=".6">
                    <g>
                        <g>
                        <g>
                            <path d="M470.99,348.7c.07.07.12.17.13.28l.59,5.68c.34,3.3-.42,6.14-2.2,8.22-1.66,1.94-4.07,3.04-6.99,3.19l-8.27.43c-.13,0-.26-.04-.35-.13,0,0,0,0,0,0-.09-.09-.14-.22-.14-.35l.4-8.52c.13-2.86,1.19-5.26,3.05-6.92,1.96-1.75,4.65-2.57,7.78-2.37l5.69.37c.12,0,.22.06.3.13ZM454.71,365.53l7.76-.4c2.65-.14,4.84-1.13,6.33-2.86,1.61-1.88,2.29-4.48,1.98-7.52l-.55-5.29-5.3-.34c-2.88-.19-5.34.55-7.11,2.13-1.67,1.5-2.62,3.67-2.74,6.28l-.38,8.01Z" fill="#fff"/>
                            <path d="M464.08,348.16c-2.74,0-5.1.82-6.86,2.4-1.86,1.67-2.92,4.06-3.05,6.92l-.4,8.52c0,.13.04.26.14.35,0,0,0,0,0,0,.09.09.2.14.33.14,0,0,.02,0,.02,0l8.27-.43c2.91-.15,5.33-1.25,6.99-3.19,1.78-2.08,2.54-4.92,2.2-8.22l-.59-5.68c-.01-.11-.06-.21-.13-.28-.08-.08-.18-.13-.3-.13l-5.69-.37c-.31-.02-.62-.03-.92-.03h0ZM454.71,365.53l.38-8.01c.12-2.61,1.07-4.78,2.74-6.28,1.59-1.42,3.73-2.16,6.24-2.16.28,0,.57,0,.86.03l5.3.34.55,5.29c.31,3.04-.37,5.64-1.98,7.52-1.49,1.74-3.68,2.73-6.33,2.86l-7.76.4h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M454.39,365.53c.09.09.14.22.14.35l-.4,8.52c-.13,2.86-1.19,5.26-3.05,6.92-1.96,1.75-4.65,2.57-7.78,2.37l-5.69-.37c-.23-.01-.41-.19-.43-.41l-.59-5.68c-.34-3.3.42-6.14,2.2-8.22,1.66-1.94,4.07-3.04,6.99-3.19l8.27-.43c.13,0,.26.05.35.14ZM438.05,382.42l5.3.34c2.88.19,5.34-.55,7.11-2.13,1.67-1.5,2.62-3.67,2.74-6.28l.38-8.01-7.76.4c-2.65.14-4.84,1.13-6.33,2.86-1.61,1.88-2.29,4.48-1.98,7.52l.55,5.29Z" fill="#fff"/>
                            <path d="M454.06,365.4s-.01,0-.02,0l-8.27.43c-2.91.15-5.33,1.25-6.99,3.19-1.78,2.08-2.54,4.92-2.2,8.22l.59,5.68c.02.23.21.4.43.41l5.69.37c.31.02.62.03.92.03,2.74,0,5.1-.82,6.86-2.4,1.86-1.67,2.92-4.06,3.05-6.92l.4-8.52c0-.13-.04-.26-.14-.35-.08-.08-.21-.14-.33-.14h0ZM453.58,366.35l-.38,8.01c-.12,2.61-1.07,4.78-2.74,6.28-1.59,1.42-3.73,2.16-6.24,2.16-.28,0-.57,0-.86-.03l-5.3-.34-.55-5.29c-.31-3.04.37-5.64,1.98-7.52,1.49-1.74,3.68-2.73,6.33-2.86l7.76-.4h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <g>
                            <path d="M469.2,368.66c.11.11.22.23.33.35,1.75,1.96,2.57,4.65,2.37,7.78l-.37,5.69c-.01.23-.19.41-.41.43l-5.68.59c-3.3.34-6.14-.42-8.22-2.2-1.93-1.66-3.04-4.07-3.19-6.99l-.43-8.27c0-.13.04-.26.13-.35.09-.09.22-.14.35-.14l8.52.4c2.68.13,4.95,1.06,6.59,2.7ZM470.63,382.03l.34-5.3c.19-2.88-.55-5.34-2.13-7.11-1.5-1.67-3.67-2.62-6.28-2.74l-8.01-.38.4,7.76c.14,2.65,1.13,4.84,2.86,6.33,1.88,1.61,4.48,2.29,7.52,1.98l5.29-.55Z" fill="#fff"/>
                            <path d="M454.07,365.56c-.12,0-.24.05-.33.14-.09.09-.14.22-.13.35l.43,8.27c.15,2.91,1.25,5.33,3.19,6.99,1.75,1.5,4.05,2.28,6.71,2.28.49,0,.99-.03,1.51-.08l5.68-.59c.22-.02.4-.21.41-.43l.37-5.69c.2-3.13-.62-5.83-2.37-7.78-.11-.12-.22-.24-.33-.35-1.64-1.64-3.91-2.58-6.59-2.7l-8.52-.4s-.01,0-.02,0h0ZM463.93,382.65c-2.44,0-4.53-.7-6.11-2.05-1.74-1.49-2.73-3.68-2.86-6.33l-.4-7.76,8.01.38c2.61.12,4.78,1.07,6.28,2.74,1.58,1.77,2.32,4.23,2.13,7.11l-.34,5.3-5.29.55c-.48.05-.95.07-1.41.07h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M451.57,351.03c1.63,1.63,2.56,3.88,2.7,6.53l.43,8.27c0,.13-.04.26-.13.35-.09.09-.22.14-.35.14l-8.52-.4c-2.86-.13-5.26-1.19-6.92-3.05-1.75-1.96-2.57-4.65-2.37-7.78l.37-5.69c.01-.23.19-.41.41-.43l5.68-.59c3.3-.34,6.14.42,8.22,2.2.17.15.33.3.49.45ZM453.74,365.37l-.4-7.76c-.14-2.65-1.13-4.84-2.86-6.33-1.88-1.61-4.48-2.29-7.52-1.98l-5.29.55-.34,5.3c-.19,2.88.55,5.34,2.13,7.11,1.5,1.67,3.67,2.62,6.28,2.74l8.01.38Z" fill="#fff"/>
                            <path d="M444.37,348.3c-.49,0-.99.03-1.51.08l-5.68.59c-.22.02-.4.21-.41.43l-.37,5.69c-.2,3.13.62,5.83,2.37,7.78,1.67,1.86,4.06,2.92,6.92,3.05l8.52.4s.01,0,.02,0c.12,0,.24-.05.33-.14.09-.09.14-.22.13-.35l-.43-8.27c-.14-2.66-1.07-4.9-2.7-6.53-.16-.16-.32-.31-.49-.45-1.75-1.5-4.05-2.28-6.71-2.28h0ZM453.74,365.37l-8.01-.38c-2.61-.12-4.78-1.07-6.28-2.74-1.58-1.77-2.32-4.23-2.13-7.11l.34-5.3,5.29-.55c.48-.05.95-.07,1.41-.07,2.44,0,4.53.7,6.11,2.05,1.74,1.49,2.73,3.68,2.86,6.33l.4,7.76h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <path d="M438.27,349.4l32.26,32.26c.18.18.18.47,0,.66-.18.18-.47.18-.66,0l-32.26-32.26c-.18-.18-.18-.47,0-.66.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M437.94,349.27c-.12,0-.24.05-.33.14-.18.18-.18.47,0,.66l32.26,32.26c.09.09.21.14.33.14s.24-.05.33-.14c.18-.18.18-.47,0-.66l-32.26-32.26c-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                        <path d="M470.25,349.78c.18.18.18.47,0,.66l-31.88,31.88c-.18.18-.47.18-.66,0-.18-.18-.18-.47,0-.66l31.88-31.88c.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M469.92,349.64c-.12,0-.24.05-.33.14l-31.88,31.88c-.18.18-.18.47,0,.66.09.09.21.14.33.14s.24-.05.33-.14l31.88-31.88c.18-.18.18-.47,0-.66-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                    </g>
                    <g>
                        <g>
                        <g>
                            <path d="M471.3,383.18c.07.07.12.17.13.28l.59,5.68c.34,3.3-.42,6.14-2.2,8.22-1.66,1.94-4.07,3.04-6.99,3.19l-8.27.43c-.13,0-.26-.04-.35-.13,0,0,0,0,0,0-.09-.09-.14-.22-.14-.35l.4-8.52c.13-2.86,1.19-5.26,3.05-6.92,1.96-1.75,4.65-2.57,7.78-2.37l5.69.37c.12,0,.22.06.3.13ZM455.02,400.02l7.76-.4c2.65-.14,4.84-1.13,6.33-2.86,1.61-1.88,2.29-4.48,1.98-7.52l-.55-5.29-5.3-.34c-2.88-.19-5.34.55-7.11,2.13-1.67,1.5-2.62,3.67-2.74,6.28l-.38,8.01Z" fill="#fff"/>
                            <path d="M464.39,382.65c-2.74,0-5.1.82-6.86,2.4-1.86,1.67-2.92,4.06-3.05,6.92l-.4,8.52c0,.13.04.26.14.35,0,0,0,0,0,0,.09.09.2.14.33.14,0,0,.02,0,.02,0l8.27-.43c2.91-.15,5.33-1.25,6.99-3.19,1.78-2.08,2.54-4.92,2.2-8.22l-.59-5.68c-.01-.11-.06-.21-.13-.28-.08-.08-.18-.13-.3-.13l-5.69-.37c-.31-.02-.62-.03-.92-.03h0ZM455.02,400.02l.38-8.01c.12-2.61,1.07-4.78,2.74-6.28,1.59-1.42,3.73-2.16,6.24-2.16.28,0,.57,0,.86.03l5.3.34.55,5.29c.31,3.04-.37,5.64-1.98,7.52-1.49,1.74-3.68,2.73-6.33,2.86l-7.76.4h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M454.7,400.02c.09.09.14.22.14.35l-.4,8.52c-.13,2.86-1.19,5.26-3.05,6.92-1.96,1.75-4.65,2.57-7.78,2.37l-5.69-.37c-.23-.01-.41-.19-.43-.41l-.59-5.68c-.34-3.3.42-6.14,2.2-8.22,1.66-1.94,4.07-3.04,6.99-3.19l8.27-.43c.13,0,.27.05.35.14ZM438.36,416.91l5.3.34c2.88.19,5.34-.55,7.11-2.13,1.67-1.5,2.62-3.67,2.74-6.28l.38-8.01-7.76.4c-2.65.14-4.84,1.13-6.33,2.86-1.61,1.88-2.29,4.48-1.98,7.52l.55,5.29Z" fill="#fff"/>
                            <path d="M454.37,399.88s-.01,0-.02,0l-8.27.43c-2.91.15-5.33,1.25-6.99,3.19-1.78,2.08-2.54,4.92-2.2,8.22l.59,5.68c.02.23.21.4.43.41l5.69.37c.31.02.62.03.92.03,2.74,0,5.1-.82,6.86-2.4,1.86-1.67,2.92-4.06,3.05-6.92l.4-8.52c0-.13-.04-.26-.14-.35-.08-.08-.21-.14-.33-.14h0ZM453.89,400.84l-.38,8.01c-.12,2.61-1.07,4.78-2.74,6.28-1.59,1.42-3.73,2.16-6.24,2.16-.28,0-.57,0-.86-.03l-5.3-.34-.55-5.29c-.31-3.04.37-5.64,1.98-7.52,1.49-1.74,3.68-2.73,6.33-2.86l7.76-.4h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <g>
                            <path d="M469.51,403.15c.11.11.22.23.33.35,1.75,1.96,2.57,4.65,2.37,7.78l-.37,5.69c-.01.23-.19.41-.41.43l-5.68.59c-3.3.34-6.14-.42-8.22-2.2-1.93-1.66-3.04-4.07-3.19-6.99l-.43-8.27c0-.13.04-.26.13-.35.09-.09.22-.14.35-.14l8.52.4c2.68.13,4.95,1.06,6.59,2.7ZM470.93,416.52l.34-5.3c.19-2.88-.55-5.34-2.13-7.11-1.5-1.67-3.67-2.62-6.28-2.74l-8.01-.38.4,7.76c.14,2.65,1.13,4.84,2.86,6.33,1.88,1.61,4.48,2.29,7.52,1.98l5.29-.55Z" fill="#fff"/>
                            <path d="M454.38,400.05c-.12,0-.24.05-.33.14-.09.09-.14.22-.13.35l.43,8.27c.15,2.91,1.25,5.33,3.19,6.99,1.75,1.5,4.05,2.28,6.71,2.28.49,0,.99-.03,1.51-.08l5.68-.59c.22-.02.4-.21.41-.43l.37-5.69c.2-3.13-.62-5.83-2.37-7.78-.11-.12-.22-.24-.33-.35-1.64-1.65-3.91-2.58-6.59-2.7l-8.52-.4s-.01,0-.02,0h0ZM464.24,417.14c-2.44,0-4.53-.7-6.11-2.05-1.74-1.49-2.73-3.68-2.86-6.33l-.4-7.76,8.01.38c2.61.12,4.78,1.07,6.28,2.74,1.58,1.77,2.32,4.23,2.13,7.11l-.34,5.3-5.29.55c-.48.05-.95.07-1.41.07h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M451.88,385.52c1.63,1.63,2.56,3.88,2.7,6.53l.43,8.27c0,.13-.04.26-.13.35-.09.09-.22.14-.35.14l-8.52-.4c-2.86-.13-5.26-1.19-6.92-3.05-1.75-1.96-2.57-4.65-2.37-7.78l.37-5.69c.01-.23.19-.41.41-.43l5.68-.59c3.3-.34,6.14.42,8.22,2.2.17.15.33.3.49.45ZM454.05,399.86l-.4-7.76c-.14-2.65-1.13-4.84-2.86-6.33-1.88-1.61-4.48-2.29-7.52-1.98l-5.29.55-.34,5.3c-.19,2.88.55,5.34,2.13,7.11,1.5,1.67,3.67,2.62,6.28,2.74l8.01.38Z" fill="#fff"/>
                            <path d="M444.67,382.79c-.49,0-.99.03-1.51.08l-5.68.59c-.22.02-.4.21-.41.43l-.37,5.69c-.2,3.13.62,5.83,2.37,7.78,1.67,1.86,4.06,2.92,6.92,3.05l8.52.4s.01,0,.02,0c.12,0,.24-.05.33-.14.09-.09.14-.22.13-.35l-.43-8.27c-.14-2.66-1.07-4.9-2.7-6.53-.16-.16-.32-.31-.49-.45-1.75-1.5-4.05-2.28-6.71-2.28h0ZM454.05,399.86l-8.01-.38c-2.61-.12-4.78-1.07-6.28-2.74-1.58-1.77-2.32-4.23-2.13-7.11l.34-5.3,5.29-.55c.48-.05.95-.07,1.41-.07,2.44,0,4.53.7,6.11,2.05,1.74,1.49,2.73,3.68,2.86,6.33l.4,7.76h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <path d="M438.58,383.89l32.26,32.26c.18.18.18.47,0,.66-.18.18-.47.18-.66,0l-32.26-32.26c-.18-.18-.18-.47,0-.66s.47-.18.66,0Z" fill="#fff"/>
                        <path d="M438.25,383.76c-.12,0-.24.05-.33.14-.18.18-.18.47,0,.66l32.26,32.26c.09.09.21.14.33.14s.24-.05.33-.14c.18-.18.18-.47,0-.66l-32.26-32.26c-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                        <path d="M470.56,384.27c.18.18.18.47,0,.66l-31.88,31.88c-.18.18-.47.18-.66,0-.18-.18-.18-.47,0-.66l31.88-31.88c.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M470.23,384.13c-.12,0-.24.05-.33.14l-31.88,31.88c-.18.18-.18.47,0,.66.09.09.21.14.33.14s.24-.05.33-.14l31.88-31.88c.18-.18.18-.47,0-.66-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                    </g>
                    <g>
                        <g>
                        <g>
                            <path d="M471.52,417.5c.07.07.12.17.13.28l.59,5.68c.34,3.3-.42,6.14-2.2,8.22-1.66,1.94-4.07,3.04-6.99,3.19l-8.27.43c-.13,0-.26-.04-.35-.13h0c-.09-.09-.14-.22-.14-.35l.4-8.52c.13-2.86,1.19-5.26,3.05-6.92,1.96-1.75,4.65-2.57,7.78-2.37l5.69.37c.12,0,.22.06.3.13ZM455.25,434.34l7.76-.4c2.65-.14,4.84-1.13,6.33-2.86,1.61-1.88,2.29-4.48,1.98-7.52l-.55-5.29-5.3-.34c-2.88-.19-5.34.55-7.11,2.13-1.67,1.5-2.62,3.67-2.74,6.28l-.38,8.01Z" fill="#fff"/>
                            <path d="M464.61,416.97c-2.74,0-5.1.82-6.86,2.4-1.86,1.67-2.92,4.06-3.05,6.92l-.4,8.52c0,.13.04.26.14.35h0c.09.09.2.14.33.14,0,0,.02,0,.02,0l8.27-.43c2.91-.15,5.33-1.25,6.99-3.19,1.78-2.08,2.54-4.92,2.2-8.22l-.59-5.68c-.01-.11-.06-.21-.13-.28-.08-.08-.18-.13-.3-.13l-5.69-.37c-.31-.02-.62-.03-.92-.03h0ZM455.25,434.34l.38-8.01c.12-2.61,1.07-4.78,2.74-6.28,1.59-1.42,3.73-2.16,6.24-2.16.28,0,.57,0,.86.03l5.3.34.55,5.29c.31,3.04-.37,5.64-1.98,7.52-1.49,1.74-3.68,2.73-6.33,2.86l-7.76.4h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M454.93,434.34c.09.09.14.22.14.35l-.4,8.52c-.13,2.86-1.19,5.26-3.05,6.92-1.96,1.75-4.65,2.57-7.78,2.37l-5.69-.37c-.23-.01-.41-.19-.43-.41l-.59-5.68c-.34-3.3.42-6.14,2.2-8.22,1.66-1.94,4.07-3.04,6.99-3.19l8.27-.43c.13,0,.27.05.35.14ZM438.59,451.22l5.3.34c2.88.19,5.34-.55,7.11-2.13,1.67-1.5,2.62-3.67,2.74-6.28l.38-8.01-7.76.4c-2.65.14-4.84,1.13-6.33,2.86-1.61,1.88-2.29,4.48-1.98,7.52l.55,5.29Z" fill="#fff"/>
                            <path d="M454.6,434.2s-.01,0-.02,0l-8.27.43c-2.91.15-5.33,1.25-6.99,3.19-1.78,2.08-2.54,4.92-2.2,8.22l.59,5.68c.02.23.21.4.43.41l5.69.37c.31.02.62.03.92.03,2.74,0,5.1-.82,6.86-2.4,1.86-1.67,2.92-4.06,3.05-6.92l.4-8.52c0-.13-.04-.26-.14-.35-.08-.08-.21-.14-.33-.14h0ZM454.12,435.15l-.38,8.01c-.12,2.61-1.07,4.78-2.74,6.28-1.59,1.42-3.73,2.16-6.24,2.16-.28,0-.57,0-.86-.03l-5.3-.34-.55-5.29c-.31-3.04.37-5.64,1.98-7.52,1.49-1.74,3.68-2.73,6.33-2.86l7.76-.4h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <g>
                            <path d="M469.73,437.47c.11.11.22.23.33.35,1.75,1.96,2.57,4.65,2.37,7.78l-.37,5.69c-.01.23-.19.41-.41.43l-5.68.59c-3.3.34-6.14-.42-8.22-2.2-1.93-1.66-3.04-4.07-3.19-6.99l-.43-8.27c0-.13.04-.26.13-.35.09-.09.22-.14.35-.14l8.52.4c2.68.13,4.95,1.06,6.59,2.7ZM471.16,450.84l.34-5.3c.19-2.88-.55-5.34-2.13-7.11-1.5-1.67-3.67-2.62-6.28-2.74l-8.01-.38.4,7.76c.14,2.65,1.13,4.84,2.86,6.33,1.88,1.61,4.48,2.29,7.52,1.98l5.29-.55Z" fill="#fff"/>
                            <path d="M454.6,434.36c-.12,0-.24.05-.33.14-.09.09-.14.22-.13.35l.43,8.27c.15,2.91,1.25,5.33,3.19,6.99,1.75,1.5,4.05,2.28,6.71,2.28.49,0,.99-.03,1.51-.08l5.68-.59c.23-.02.4-.21.41-.43l.37-5.69c.2-3.13-.62-5.83-2.37-7.78-.11-.12-.22-.24-.33-.35-1.65-1.64-3.91-2.58-6.59-2.7l-8.52-.4s-.01,0-.02,0h0ZM464.47,451.46c-2.44,0-4.53-.7-6.11-2.05-1.74-1.49-2.73-3.68-2.86-6.33l-.4-7.76,8.01.38c2.61.12,4.78,1.07,6.28,2.74,1.58,1.77,2.32,4.23,2.13,7.11l-.34,5.3-5.29.55c-.48.05-.95.07-1.41.07h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M452.1,419.84c1.63,1.63,2.56,3.88,2.7,6.53l.43,8.27c0,.13-.04.26-.13.35-.09.09-.22.14-.35.14l-8.52-.4c-2.86-.13-5.26-1.19-6.92-3.05-1.75-1.96-2.57-4.65-2.37-7.78l.37-5.69c.01-.23.19-.41.41-.43l5.68-.59c3.3-.34,6.14.42,8.22,2.2.17.15.33.3.49.45ZM454.28,434.18l-.4-7.76c-.14-2.65-1.13-4.84-2.86-6.33-1.88-1.61-4.48-2.29-7.52-1.98l-5.29.55-.34,5.3c-.19,2.88.55,5.34,2.13,7.11,1.5,1.67,3.67,2.62,6.28,2.74l8.01.38Z" fill="#fff"/>
                            <path d="M444.9,417.11c-.49,0-.99.03-1.51.08l-5.68.59c-.22.02-.4.21-.41.43l-.37,5.69c-.2,3.13.62,5.83,2.37,7.78,1.67,1.86,4.06,2.92,6.92,3.05l8.52.4s.01,0,.02,0c.12,0,.24-.05.33-.14.09-.09.14-.22.13-.35l-.43-8.27c-.14-2.66-1.07-4.9-2.7-6.53-.16-.16-.32-.31-.49-.45-1.75-1.5-4.05-2.28-6.71-2.28h0ZM454.28,434.18l-8.01-.38c-2.61-.12-4.78-1.07-6.28-2.74-1.58-1.77-2.32-4.23-2.13-7.11l.34-5.3,5.29-.55c.48-.05.95-.07,1.41-.07,2.44,0,4.53.7,6.11,2.05,1.74,1.49,2.73,3.68,2.86,6.33l.4,7.76h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <path d="M438.8,418.21l32.26,32.26c.18.18.18.47,0,.66-.18.18-.47.18-.66,0l-32.26-32.26c-.18-.18-.18-.47,0-.66.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M438.48,418.07c-.12,0-.24.05-.33.14-.18.18-.18.47,0,.66l32.26,32.26c.09.09.21.14.33.14s.24-.05.33-.14c.18-.18.18-.47,0-.66l-32.26-32.26c-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                        <path d="M470.79,418.59c.18.18.18.47,0,.66l-31.88,31.88c-.18.18-.47.18-.66,0-.18-.18-.18-.47,0-.66l31.88-31.88c.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M470.46,418.45c-.12,0-.24.05-.33.14l-31.88,31.88c-.18.18-.18.47,0,.66.09.09.21.14.33.14s.24-.05.33-.14l31.88-31.88c.18-.18.18-.47,0-.66-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                    </g>
                    <g>
                        <g>
                        <g>
                            <path d="M471.83,451.99c.07.07.12.17.13.28l.59,5.68c.34,3.3-.42,6.14-2.2,8.22-1.66,1.94-4.07,3.04-6.99,3.19l-8.27.43c-.13,0-.26-.04-.35-.13,0,0,0,0,0,0-.09-.09-.14-.22-.14-.35l.4-8.52c.13-2.86,1.19-5.26,3.05-6.92,1.96-1.75,4.65-2.57,7.78-2.37l5.69.37c.12,0,.22.06.3.13ZM455.56,468.83l7.76-.4c2.65-.14,4.84-1.13,6.33-2.86,1.61-1.88,2.29-4.48,1.98-7.52l-.55-5.29-5.3-.34c-2.88-.19-5.34.55-7.11,2.13-1.67,1.5-2.62,3.67-2.74,6.28l-.38,8.01Z" fill="#fff"/>
                            <path d="M464.92,451.46c-2.74,0-5.1.82-6.86,2.4-1.86,1.67-2.92,4.06-3.05,6.92l-.4,8.52c0,.13.04.26.14.35,0,0,0,0,0,0,.09.09.2.14.33.14,0,0,.02,0,.02,0l8.27-.43c2.91-.15,5.33-1.25,6.99-3.19,1.78-2.08,2.54-4.92,2.2-8.22l-.59-5.68c-.01-.11-.06-.21-.13-.28-.08-.08-.18-.13-.3-.13l-5.69-.37c-.31-.02-.62-.03-.92-.03h0ZM455.56,468.83l.38-8.01c.12-2.61,1.07-4.78,2.74-6.28,1.59-1.42,3.73-2.16,6.24-2.16.28,0,.57,0,.86.03l5.3.34.55,5.29c.31,3.04-.37,5.64-1.98,7.52-1.49,1.74-3.68,2.73-6.33,2.86l-7.76.4h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M455.24,468.82c.09.09.14.22.14.35l-.4,8.52c-.13,2.86-1.19,5.26-3.05,6.92-1.96,1.75-4.65,2.57-7.78,2.37l-5.69-.37c-.23-.01-.41-.19-.43-.41l-.59-5.68c-.34-3.3.42-6.14,2.2-8.22,1.66-1.94,4.07-3.04,6.99-3.19l8.27-.43c.13,0,.26.05.35.14ZM438.9,485.71l5.3.34c2.88.19,5.34-.55,7.11-2.13,1.67-1.5,2.62-3.67,2.74-6.28l.38-8.01-7.76.4c-2.65.14-4.84,1.13-6.33,2.86-1.61,1.88-2.29,4.48-1.98,7.52l.55,5.29Z" fill="#fff"/>
                            <path d="M454.91,468.69s-.01,0-.02,0l-8.27.43c-2.91.15-5.33,1.25-6.99,3.19-1.78,2.08-2.54,4.92-2.2,8.22l.59,5.68c.02.23.21.4.43.41l5.69.37c.31.02.62.03.92.03,2.74,0,5.1-.82,6.86-2.4,1.86-1.67,2.92-4.06,3.05-6.92l.4-8.52c0-.13-.04-.26-.14-.35-.08-.08-.21-.14-.33-.14h0ZM454.43,469.64l-.38,8.01c-.12,2.61-1.07,4.78-2.74,6.28-1.59,1.42-3.73,2.16-6.24,2.16-.28,0-.57,0-.86-.03l-5.3-.34-.55-5.29c-.31-3.04.37-5.64,1.98-7.52,1.49-1.74,3.68-2.73,6.33-2.86l7.76-.4h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <g>
                            <path d="M470.04,471.95c.11.11.22.23.33.35,1.75,1.96,2.57,4.65,2.37,7.78l-.37,5.69c-.01.23-.19.41-.41.43l-5.68.59c-3.3.34-6.14-.42-8.22-2.2-1.93-1.66-3.04-4.07-3.19-6.99l-.43-8.27c0-.13.04-.26.13-.35.09-.09.22-.14.35-.14l8.52.4c2.68.13,4.95,1.06,6.59,2.7ZM471.47,485.33l.34-5.3c.19-2.88-.55-5.34-2.13-7.11-1.5-1.67-3.67-2.62-6.28-2.74l-8.01-.38.4,7.76c.14,2.65,1.13,4.84,2.86,6.33,1.88,1.61,4.48,2.29,7.52,1.98l5.29-.55Z" fill="#fff"/>
                            <path d="M454.91,468.85c-.12,0-.24.05-.33.14-.09.09-.14.22-.13.35l.43,8.27c.15,2.91,1.25,5.33,3.19,6.99,1.75,1.5,4.05,2.28,6.71,2.28.49,0,.99-.03,1.51-.08l5.68-.59c.22-.02.4-.21.41-.43l.37-5.69c.2-3.13-.62-5.83-2.37-7.78-.11-.12-.22-.24-.33-.35-1.65-1.65-3.91-2.58-6.59-2.7l-8.52-.4s-.01,0-.02,0h0ZM464.78,485.95c-2.44,0-4.53-.7-6.11-2.05-1.74-1.49-2.73-3.68-2.86-6.33l-.4-7.76,8.01.38c2.61.12,4.78,1.07,6.28,2.74,1.58,1.77,2.32,4.23,2.13,7.11l-.34,5.3-5.29.55c-.48.05-.95.07-1.41.07h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M452.41,454.32c1.63,1.63,2.56,3.88,2.7,6.53l.43,8.27c0,.13-.04.26-.13.35-.09.09-.22.14-.35.14l-8.52-.4c-2.86-.13-5.26-1.19-6.92-3.05-1.75-1.96-2.57-4.65-2.37-7.78l.37-5.69c.01-.23.19-.41.41-.43l5.68-.59c3.3-.34,6.14.42,8.22,2.2.17.15.33.3.49.45ZM454.59,468.67l-.4-7.76c-.14-2.65-1.13-4.84-2.86-6.33-1.88-1.61-4.48-2.29-7.52-1.98l-5.29.55-.34,5.3c-.19,2.88.55,5.34,2.13,7.11,1.5,1.67,3.67,2.62,6.28,2.74l8.01.38Z" fill="#fff"/>
                            <path d="M445.21,451.59c-.49,0-.99.03-1.51.08l-5.68.59c-.22.02-.4.21-.41.43l-.37,5.69c-.2,3.13.62,5.83,2.37,7.78,1.67,1.86,4.06,2.92,6.92,3.05l8.52.4s.01,0,.02,0c.12,0,.24-.05.33-.14.09-.09.14-.22.13-.35l-.43-8.27c-.14-2.66-1.07-4.9-2.7-6.53-.16-.16-.32-.31-.49-.45-1.75-1.5-4.05-2.28-6.71-2.28h0ZM454.59,468.67l-8.01-.38c-2.61-.12-4.78-1.07-6.28-2.74-1.58-1.77-2.32-4.23-2.13-7.11l.34-5.3,5.29-.55c.48-.05.95-.07,1.41-.07,2.44,0,4.53.7,6.11,2.05,1.74,1.49,2.73,3.68,2.86,6.33l.4,7.76h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <path d="M439.11,452.7l32.26,32.26c.18.18.18.47,0,.66-.18.18-.47.18-.66,0l-32.26-32.26c-.18-.18-.18-.47,0-.66.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M438.79,452.56c-.12,0-.24.05-.33.14-.18.18-.18.47,0,.66l32.26,32.26c.09.09.21.14.33.14s.24-.05.33-.14c.18-.18.18-.47,0-.66l-32.26-32.26c-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                        <path d="M471.1,453.07c.18.18.18.47,0,.66l-31.88,31.88c-.18.18-.47.18-.66,0-.18-.18-.18-.47,0-.66l31.88-31.88c.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M470.77,452.94c-.12,0-.24.05-.33.14l-31.88,31.88c-.18.18-.18.47,0,.66.09.09.21.14.33.14s.24-.05.33-.14l31.88-31.88c.18-.18.18-.47,0-.66-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                    </g>
                    </g>
                    <g opacity=".6">
                    <g>
                        <g>
                        <g>
                            <path d="M505.85,348.7c.07.07.12.17.13.28l.59,5.68c.34,3.3-.42,6.14-2.2,8.22-1.66,1.94-4.07,3.04-6.99,3.19l-8.27.43c-.13,0-.26-.04-.35-.13,0,0,0,0,0,0-.09-.09-.14-.22-.14-.35l.4-8.52c.13-2.86,1.19-5.26,3.05-6.92,1.96-1.75,4.65-2.57,7.78-2.37l5.69.37c.12,0,.22.06.3.13ZM489.58,365.53l7.76-.4c2.65-.14,4.84-1.13,6.33-2.86,1.61-1.88,2.29-4.48,1.98-7.52l-.55-5.29-5.3-.34c-2.88-.19-5.34.55-7.11,2.13-1.67,1.5-2.62,3.67-2.74,6.28l-.38,8.01Z" fill="#fff"/>
                            <path d="M498.94,348.16c-2.74,0-5.1.82-6.86,2.4-1.86,1.67-2.92,4.06-3.05,6.92l-.4,8.52c0,.13.04.26.14.35,0,0,0,0,0,0,.09.09.2.14.33.14,0,0,.02,0,.02,0l8.27-.43c2.91-.15,5.33-1.25,6.99-3.19,1.78-2.08,2.54-4.92,2.2-8.22l-.59-5.68c-.01-.11-.06-.21-.13-.28-.08-.08-.18-.13-.3-.13l-5.69-.37c-.31-.02-.62-.03-.92-.03h0ZM489.58,365.53l.38-8.01c.12-2.61,1.07-4.78,2.74-6.28,1.59-1.42,3.73-2.16,6.24-2.16.28,0,.57,0,.86.03l5.3.34.55,5.29c.31,3.04-.37,5.64-1.98,7.52-1.49,1.74-3.68,2.73-6.33,2.86l-7.76.4h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M489.25,365.53c.09.09.14.22.14.35l-.4,8.52c-.13,2.86-1.19,5.26-3.05,6.92-1.96,1.75-4.65,2.57-7.78,2.37l-5.69-.37c-.23-.01-.41-.19-.43-.41l-.59-5.68c-.34-3.3.42-6.14,2.2-8.22,1.66-1.94,4.07-3.04,6.99-3.19l8.27-.43c.13,0,.26.05.35.14ZM472.92,382.42l5.3.34c2.88.19,5.34-.55,7.11-2.13,1.67-1.5,2.62-3.67,2.74-6.28l.38-8.01-7.76.4c-2.65.14-4.84,1.13-6.33,2.86-1.61,1.88-2.29,4.48-1.98,7.52l.55,5.29Z" fill="#fff"/>
                            <path d="M488.92,365.4s-.01,0-.02,0l-8.27.43c-2.91.15-5.33,1.25-6.99,3.19-1.78,2.08-2.54,4.92-2.2,8.22l.59,5.68c.02.23.21.4.43.41l5.69.37c.31.02.62.03.92.03,2.74,0,5.1-.82,6.86-2.4,1.86-1.67,2.92-4.06,3.05-6.92l.4-8.52c0-.13-.04-.26-.14-.35-.08-.08-.21-.14-.33-.14h0ZM488.44,366.35l-.38,8.01c-.12,2.61-1.07,4.78-2.74,6.28-1.59,1.42-3.73,2.16-6.24,2.16-.28,0-.57,0-.86-.03l-5.3-.34-.55-5.29c-.31-3.04.37-5.64,1.98-7.52,1.49-1.74,3.68-2.73,6.33-2.86l7.76-.4h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <g>
                            <path d="M504.06,368.66c.11.11.22.23.33.35,1.75,1.96,2.57,4.65,2.37,7.78l-.37,5.69c-.01.23-.19.41-.41.43l-5.68.59c-3.3.34-6.14-.42-8.22-2.2-1.93-1.66-3.04-4.07-3.19-6.99l-.43-8.27c0-.13.04-.26.13-.35.09-.09.22-.14.35-.14l8.52.4c2.68.13,4.95,1.06,6.59,2.7ZM505.49,382.03l.34-5.3c.19-2.88-.55-5.34-2.13-7.11-1.5-1.67-3.67-2.62-6.28-2.74l-8.01-.38.4,7.76c.14,2.65,1.13,4.84,2.86,6.33,1.88,1.61,4.48,2.29,7.52,1.98l5.29-.55Z" fill="#fff"/>
                            <path d="M488.93,365.56c-.12,0-.24.05-.33.14-.09.09-.14.22-.13.35l.43,8.27c.15,2.91,1.25,5.33,3.19,6.99,1.75,1.5,4.05,2.28,6.71,2.28.49,0,.99-.03,1.51-.08l5.68-.59c.22-.02.4-.21.41-.43l.37-5.69c.2-3.13-.62-5.83-2.37-7.78-.11-.12-.22-.24-.33-.35-1.64-1.64-3.91-2.58-6.59-2.7l-8.52-.4s-.01,0-.02,0h0ZM498.79,382.65c-2.44,0-4.53-.7-6.11-2.05-1.74-1.49-2.73-3.68-2.86-6.33l-.4-7.76,8.01.38c2.61.12,4.78,1.07,6.28,2.74,1.58,1.77,2.32,4.23,2.13,7.11l-.34,5.3-5.29.55c-.48.05-.95.07-1.41.07h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M486.43,351.03c1.63,1.63,2.56,3.88,2.7,6.53l.43,8.27c0,.13-.04.26-.13.35-.09.09-.22.14-.35.14l-8.52-.4c-2.86-.13-5.26-1.19-6.92-3.05-1.75-1.96-2.57-4.65-2.37-7.78l.37-5.69c.01-.23.19-.41.41-.43l5.68-.59c3.3-.34,6.14.42,8.22,2.2.17.15.33.3.49.45ZM488.6,365.37l-.4-7.76c-.14-2.65-1.13-4.84-2.86-6.33-1.88-1.61-4.48-2.29-7.52-1.98l-5.29.55-.34,5.3c-.19,2.88.55,5.34,2.13,7.11,1.5,1.67,3.67,2.62,6.28,2.74l8.01.38Z" fill="#fff"/>
                            <path d="M479.23,348.3c-.49,0-.99.03-1.51.08l-5.68.59c-.22.02-.4.21-.41.43l-.37,5.69c-.2,3.13.62,5.83,2.37,7.78,1.67,1.86,4.06,2.92,6.92,3.05l8.52.4s.01,0,.02,0c.12,0,.24-.05.33-.14.09-.09.14-.22.13-.35l-.43-8.27c-.14-2.66-1.07-4.9-2.7-6.53-.16-.16-.32-.31-.49-.45-1.75-1.5-4.05-2.28-6.71-2.28h0ZM488.6,365.37l-8.01-.38c-2.61-.12-4.78-1.07-6.28-2.74-1.58-1.77-2.32-4.23-2.13-7.11l.34-5.3,5.29-.55c.48-.05.95-.07,1.41-.07,2.44,0,4.53.7,6.11,2.05,1.74,1.49,2.73,3.68,2.86,6.33l.4,7.76h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <path d="M473.13,349.4l32.26,32.26c.18.18.18.47,0,.66s-.47.18-.66,0l-32.26-32.26c-.18-.18-.18-.47,0-.66.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M472.8,349.27c-.12,0-.24.05-.33.14-.18.18-.18.47,0,.66l32.26,32.26c.09.09.21.14.33.14s.24-.05.33-.14c.18-.18.18-.47,0-.66l-32.26-32.26c-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                        <path d="M505.11,349.78c.18.18.18.47,0,.66l-31.88,31.88c-.18.18-.47.18-.66,0-.18-.18-.18-.47,0-.66l31.88-31.88c.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M504.78,349.64c-.12,0-.24.05-.33.14l-31.88,31.88c-.18.18-.18.47,0,.66.09.09.21.14.33.14s.24-.05.33-.14l31.88-31.88c.18-.18.18-.47,0-.66-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                    </g>
                    <g>
                        <g>
                        <g>
                            <path d="M506.16,383.18c.07.07.12.17.13.28l.59,5.68c.34,3.3-.42,6.14-2.2,8.22-1.66,1.94-4.07,3.04-6.99,3.19l-8.27.43c-.13,0-.26-.04-.35-.13,0,0,0,0,0,0-.09-.09-.14-.22-.14-.35l.4-8.52c.13-2.86,1.19-5.26,3.05-6.92,1.96-1.75,4.65-2.57,7.78-2.37l5.69.37c.12,0,.22.06.3.13ZM489.89,400.02l7.76-.4c2.65-.14,4.84-1.13,6.33-2.86,1.61-1.88,2.29-4.48,1.98-7.52l-.55-5.29-5.3-.34c-2.88-.19-5.34.55-7.11,2.13-1.67,1.5-2.62,3.67-2.74,6.28l-.38,8.01Z" fill="#fff"/>
                            <path d="M499.25,382.65c-2.74,0-5.1.82-6.86,2.4-1.86,1.67-2.92,4.06-3.05,6.92l-.4,8.52c0,.13.04.26.14.35,0,0,0,0,0,0,.09.09.2.14.33.14,0,0,.02,0,.02,0l8.27-.43c2.91-.15,5.33-1.25,6.99-3.19,1.78-2.08,2.54-4.92,2.2-8.22l-.59-5.68c-.01-.11-.06-.21-.13-.28-.08-.08-.18-.13-.3-.13l-5.69-.37c-.31-.02-.62-.03-.92-.03h0ZM489.88,400.02l.38-8.01c.12-2.61,1.07-4.78,2.74-6.28,1.59-1.42,3.73-2.16,6.24-2.16.28,0,.57,0,.86.03l5.3.34.55,5.29c.31,3.04-.37,5.64-1.98,7.52-1.49,1.74-3.68,2.73-6.33,2.86l-7.76.4h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M489.56,400.02c.09.09.14.22.14.35l-.4,8.52c-.13,2.86-1.19,5.26-3.05,6.92-1.96,1.75-4.65,2.57-7.78,2.37l-5.69-.37c-.23-.01-.41-.19-.43-.41l-.59-5.68c-.34-3.3.42-6.14,2.2-8.22,1.66-1.94,4.07-3.04,6.99-3.19l8.27-.43c.13,0,.27.05.35.14ZM473.23,416.91l5.3.34c2.88.19,5.34-.55,7.11-2.13,1.67-1.5,2.62-3.67,2.74-6.28l.38-8.01-7.76.4c-2.65.14-4.84,1.13-6.33,2.86-1.61,1.88-2.29,4.48-1.98,7.52l.55,5.29Z" fill="#fff"/>
                            <path d="M489.23,399.88s-.01,0-.02,0l-8.27.43c-2.91.15-5.33,1.25-6.99,3.19-1.78,2.08-2.54,4.92-2.2,8.22l.59,5.68c.02.23.21.4.43.41l5.69.37c.31.02.62.03.92.03,2.74,0,5.1-.82,6.86-2.4,1.86-1.67,2.92-4.06,3.05-6.92l.4-8.52c0-.13-.04-.26-.14-.35-.08-.08-.21-.14-.33-.14h0ZM488.75,400.84l-.38,8.01c-.12,2.61-1.07,4.78-2.74,6.28-1.59,1.42-3.73,2.16-6.24,2.16-.28,0-.57,0-.86-.03l-5.3-.34-.55-5.29c-.31-3.04.37-5.64,1.98-7.52,1.49-1.74,3.68-2.73,6.33-2.86l7.76-.4h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <g>
                            <path d="M504.37,403.15c.11.11.22.23.33.35,1.75,1.96,2.57,4.65,2.37,7.78l-.37,5.69c-.01.23-.19.41-.41.43l-5.68.59c-3.3.34-6.14-.42-8.22-2.2-1.93-1.66-3.04-4.07-3.19-6.99l-.43-8.27c0-.13.04-.26.13-.35.09-.09.22-.14.35-.14l8.52.4c2.68.13,4.95,1.06,6.59,2.7ZM505.8,416.52l.34-5.3c.19-2.88-.55-5.34-2.13-7.11-1.5-1.67-3.67-2.62-6.28-2.74l-8.01-.38.4,7.76c.14,2.65,1.13,4.84,2.86,6.33,1.88,1.61,4.48,2.29,7.52,1.98l5.29-.55Z" fill="#fff"/>
                            <path d="M489.24,400.05c-.12,0-.24.05-.33.14-.09.09-.14.22-.13.35l.43,8.27c.15,2.91,1.25,5.33,3.19,6.99,1.75,1.5,4.05,2.28,6.71,2.28.49,0,.99-.03,1.51-.08l5.68-.59c.23-.02.4-.21.41-.43l.37-5.69c.2-3.13-.62-5.83-2.37-7.78-.11-.12-.22-.24-.33-.35-1.65-1.65-3.91-2.58-6.59-2.7l-8.52-.4s-.01,0-.02,0h0ZM499.1,417.14c-2.44,0-4.53-.7-6.11-2.05-1.74-1.49-2.73-3.68-2.86-6.33l-.4-7.76,8.01.38c2.61.12,4.78,1.07,6.28,2.74,1.58,1.77,2.32,4.23,2.13,7.11l-.34,5.3-5.29.55c-.48.05-.95.07-1.41.07h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M486.74,385.52c1.63,1.63,2.56,3.88,2.7,6.53l.43,8.27c0,.13-.04.26-.13.35-.09.09-.22.14-.35.14l-8.52-.4c-2.86-.13-5.26-1.19-6.92-3.05-1.75-1.96-2.57-4.65-2.37-7.78l.37-5.69c.01-.23.19-.41.41-.43l5.68-.59c3.3-.34,6.14.42,8.22,2.2.17.15.33.3.49.45ZM488.91,399.86l-.4-7.76c-.14-2.65-1.13-4.84-2.86-6.33-1.88-1.61-4.48-2.29-7.52-1.98l-5.29.55-.34,5.3c-.19,2.88.55,5.34,2.13,7.11,1.5,1.67,3.67,2.62,6.28,2.74l8.01.38Z" fill="#fff"/>
                            <path d="M479.54,382.79c-.49,0-.99.03-1.51.08l-5.68.59c-.22.02-.4.21-.41.43l-.37,5.69c-.2,3.13.62,5.83,2.37,7.78,1.67,1.86,4.06,2.92,6.92,3.05l8.52.4s.01,0,.02,0c.12,0,.24-.05.33-.14.09-.09.14-.22.13-.35l-.43-8.27c-.14-2.66-1.07-4.9-2.7-6.53-.16-.16-.32-.31-.49-.45-1.75-1.5-4.05-2.28-6.71-2.28h0ZM488.91,399.86l-8.01-.38c-2.61-.12-4.78-1.07-6.28-2.74-1.58-1.77-2.32-4.23-2.13-7.11l.34-5.3,5.29-.55c.48-.05.95-.07,1.41-.07,2.44,0,4.53.7,6.11,2.05,1.74,1.49,2.73,3.68,2.86,6.33l.4,7.76h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <path d="M473.44,383.89l32.26,32.26c.18.18.18.47,0,.66-.18.18-.47.18-.66,0l-32.26-32.26c-.18-.18-.18-.47,0-.66s.47-.18.66,0Z" fill="#fff"/>
                        <path d="M473.11,383.76c-.12,0-.24.05-.33.14-.18.18-.18.47,0,.66l32.26,32.26c.09.09.21.14.33.14s.24-.05.33-.14c.18-.18.18-.47,0-.66l-32.26-32.26c-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                        <path d="M505.42,384.27c.18.18.18.47,0,.66l-31.88,31.88c-.18.18-.47.18-.66,0-.18-.18-.18-.47,0-.66l31.88-31.88c.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M505.09,384.13c-.12,0-.24.05-.33.14l-31.88,31.88c-.18.18-.18.47,0,.66.09.09.21.14.33.14s.24-.05.33-.14l31.88-31.88c.18-.18.18-.47,0-.66-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                    </g>
                    <g>
                        <g>
                        <g>
                            <path d="M506.39,417.5c.07.07.12.17.13.28l.59,5.68c.34,3.3-.42,6.14-2.2,8.22-1.66,1.94-4.07,3.04-6.99,3.19l-8.27.43c-.13,0-.26-.04-.35-.13h0c-.09-.09-.14-.22-.14-.35l.4-8.52c.13-2.86,1.19-5.26,3.05-6.92,1.96-1.75,4.65-2.57,7.78-2.37l5.69.37c.12,0,.22.06.3.13ZM490.11,434.34l7.76-.4c2.65-.14,4.84-1.13,6.33-2.86,1.61-1.88,2.29-4.48,1.98-7.52l-.55-5.29-5.3-.34c-2.88-.19-5.34.55-7.11,2.13-1.67,1.5-2.62,3.67-2.74,6.28l-.38,8.01Z" fill="#fff"/>
                            <path d="M499.48,416.97c-2.74,0-5.1.82-6.86,2.4-1.86,1.67-2.92,4.06-3.05,6.92l-.4,8.52c0,.13.04.26.14.35,0,0,0,0,0,0,.09.09.2.13.33.13,0,0,.02,0,.02,0l8.27-.43c2.91-.15,5.33-1.25,6.99-3.19,1.78-2.08,2.54-4.92,2.2-8.22l-.59-5.68c-.01-.11-.06-.21-.13-.28-.08-.08-.18-.13-.3-.13l-5.69-.37c-.31-.02-.62-.03-.92-.03h0ZM490.11,434.34l.38-8.01c.12-2.61,1.07-4.78,2.74-6.28,1.59-1.42,3.73-2.16,6.24-2.16.28,0,.57,0,.86.03l5.3.34.55,5.29c.31,3.04-.37,5.64-1.98,7.52-1.49,1.74-3.68,2.73-6.33,2.86l-7.76.4h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M489.79,434.34c.09.09.14.22.14.35l-.4,8.52c-.13,2.86-1.19,5.26-3.05,6.92-1.96,1.75-4.65,2.57-7.78,2.37l-5.69-.37c-.23-.01-.41-.19-.43-.41l-.59-5.68c-.34-3.3.42-6.14,2.2-8.22,1.66-1.94,4.07-3.04,6.99-3.19l8.27-.43c.13,0,.26.05.35.14ZM473.45,451.22l5.3.34c2.88.19,5.34-.55,7.11-2.13,1.67-1.5,2.62-3.67,2.74-6.28l.38-8.01-7.76.4c-2.65.14-4.84,1.13-6.33,2.86-1.61,1.88-2.29,4.48-1.98,7.52l.55,5.29Z" fill="#fff"/>
                            <path d="M489.46,434.2s-.01,0-.02,0l-8.27.43c-2.91.15-5.33,1.25-6.99,3.19-1.78,2.08-2.54,4.92-2.2,8.22l.59,5.68c.02.23.21.4.43.41l5.69.37c.31.02.62.03.92.03,2.74,0,5.1-.82,6.86-2.4,1.86-1.67,2.92-4.06,3.05-6.92l.4-8.52c0-.13-.04-.26-.14-.35-.08-.08-.21-.14-.33-.14h0ZM488.98,435.15l-.38,8.01c-.12,2.61-1.07,4.78-2.74,6.28-1.59,1.42-3.73,2.16-6.24,2.16-.28,0-.57,0-.86-.03l-5.3-.34-.55-5.29c-.31-3.04.37-5.64,1.98-7.52,1.49-1.74,3.68-2.73,6.33-2.86l7.76-.4h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <g>
                            <path d="M504.6,437.47c.11.11.22.23.33.35,1.75,1.96,2.57,4.65,2.37,7.78l-.37,5.69c-.01.23-.19.41-.41.43l-5.68.59c-3.3.34-6.14-.42-8.22-2.2-1.93-1.66-3.04-4.07-3.19-6.99l-.43-8.27c0-.13.04-.26.13-.35.09-.09.22-.14.35-.14l8.52.4c2.68.13,4.95,1.06,6.59,2.7ZM506.02,450.84l.34-5.3c.19-2.88-.55-5.34-2.13-7.11-1.5-1.67-3.67-2.62-6.28-2.74l-8.01-.38.4,7.76c.14,2.65,1.13,4.84,2.86,6.33,1.88,1.61,4.48,2.29,7.52,1.98l5.29-.55Z" fill="#fff"/>
                            <path d="M489.46,434.36c-.12,0-.24.05-.33.14-.09.09-.14.22-.13.35l.43,8.27c.15,2.91,1.25,5.33,3.19,6.99,1.75,1.5,4.05,2.28,6.71,2.28.49,0,.99-.03,1.51-.08l5.68-.59c.22-.02.4-.21.41-.43l.37-5.69c.2-3.13-.62-5.83-2.37-7.78-.11-.12-.22-.24-.33-.35-1.65-1.64-3.91-2.58-6.59-2.7l-8.52-.4s-.01,0-.02,0h0ZM499.33,451.46c-2.44,0-4.53-.7-6.11-2.05-1.74-1.49-2.73-3.68-2.86-6.33l-.4-7.76,8.01.38c2.61.12,4.78,1.07,6.28,2.74,1.58,1.77,2.32,4.23,2.13,7.11l-.34,5.3-5.29.55c-.48.05-.95.07-1.41.07h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M486.97,419.84c1.63,1.63,2.56,3.88,2.7,6.53l.43,8.27c0,.13-.04.26-.13.35-.09.09-.22.14-.35.14l-8.52-.4c-2.86-.13-5.26-1.19-6.92-3.05-1.75-1.96-2.57-4.65-2.37-7.78l.37-5.69c.01-.23.19-.41.41-.43l5.68-.59c3.3-.34,6.14.42,8.22,2.2.17.15.33.3.49.45ZM489.14,434.18l-.4-7.76c-.14-2.65-1.13-4.84-2.86-6.33-1.88-1.61-4.48-2.29-7.52-1.98l-5.29.55-.34,5.3c-.19,2.88.55,5.34,2.13,7.11,1.5,1.67,3.67,2.62,6.28,2.74l8.01.38Z" fill="#fff"/>
                            <path d="M479.76,417.11c-.49,0-.99.03-1.51.08l-5.68.59c-.22.02-.4.21-.41.43l-.37,5.69c-.2,3.13.62,5.83,2.37,7.78,1.67,1.86,4.06,2.92,6.92,3.05l8.52.4s.01,0,.02,0c.12,0,.24-.05.33-.14.09-.09.14-.22.13-.35l-.43-8.27c-.14-2.66-1.07-4.9-2.7-6.53-.16-.16-.32-.31-.49-.45-1.75-1.5-4.05-2.28-6.71-2.28h0ZM489.14,434.18l-8.01-.38c-2.61-.12-4.78-1.07-6.28-2.74-1.58-1.77-2.32-4.23-2.13-7.11l.34-5.3,5.29-.55c.48-.05.95-.07,1.41-.07,2.44,0,4.53.7,6.11,2.05,1.74,1.49,2.73,3.68,2.86,6.33l.4,7.76h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <path d="M473.67,418.21l32.26,32.26c.18.18.18.47,0,.66-.18.18-.47.18-.66,0l-32.26-32.26c-.18-.18-.18-.47,0-.66.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M473.34,418.07c-.12,0-.24.05-.33.14-.18.18-.18.47,0,.66l32.26,32.26c.09.09.21.14.33.14s.24-.05.33-.14c.18-.18.18-.47,0-.66l-32.26-32.26c-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                        <path d="M505.65,418.59c.18.18.18.47,0,.66l-31.88,31.88c-.18.18-.47.18-.66,0-.18-.18-.18-.47,0-.66l31.88-31.88c.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M505.32,418.45c-.12,0-.24.05-.33.14l-31.88,31.88c-.18.18-.18.47,0,.66.09.09.21.14.33.14s.24-.05.33-.14l31.88-31.88c.18-.18.18-.47,0-.66-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                    </g>
                    <g>
                        <g>
                        <g>
                            <path d="M506.69,451.99c.07.07.12.17.13.28l.59,5.68c.34,3.3-.42,6.14-2.2,8.22-1.66,1.94-4.07,3.04-6.99,3.19l-8.27.43c-.13,0-.26-.04-.35-.13,0,0,0,0,0,0-.09-.09-.14-.22-.14-.35l.4-8.52c.13-2.86,1.19-5.26,3.05-6.92,1.96-1.75,4.65-2.57,7.78-2.37l5.69.37c.12,0,.22.06.3.13ZM490.42,468.83l7.76-.4c2.65-.14,4.84-1.13,6.33-2.86,1.61-1.88,2.29-4.48,1.98-7.52l-.55-5.29-5.3-.34c-2.88-.19-5.34.55-7.11,2.13-1.67,1.5-2.62,3.67-2.74,6.28l-.38,8.01Z" fill="#fff"/>
                            <path d="M499.78,451.46c-2.74,0-5.1.82-6.86,2.4-1.86,1.67-2.92,4.06-3.05,6.92l-.4,8.52c0,.13.04.26.14.35,0,0,0,0,0,0,.09.09.2.14.33.14,0,0,.02,0,.02,0l8.27-.43c2.91-.15,5.33-1.25,6.99-3.19,1.78-2.08,2.54-4.92,2.2-8.22l-.59-5.68c-.01-.11-.06-.21-.13-.28-.08-.08-.18-.13-.3-.13l-5.69-.37c-.31-.02-.62-.03-.92-.03h0ZM490.42,468.83l.38-8.01c.12-2.61,1.07-4.78,2.74-6.28,1.59-1.42,3.73-2.16,6.24-2.16.28,0,.57,0,.86.03l5.3.34.55,5.29c.31,3.04-.37,5.64-1.98,7.52-1.49,1.74-3.68,2.73-6.33,2.86l-7.76.4h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M490.1,468.82c.09.09.14.22.14.35l-.4,8.52c-.13,2.86-1.19,5.26-3.05,6.92-1.96,1.75-4.65,2.57-7.78,2.37l-5.69-.37c-.23-.01-.41-.19-.43-.41l-.59-5.68c-.34-3.3.42-6.14,2.2-8.22,1.66-1.94,4.07-3.04,6.99-3.19l8.27-.43c.13,0,.26.05.35.14ZM473.76,485.71l5.3.34c2.88.19,5.34-.55,7.11-2.13,1.67-1.5,2.62-3.67,2.74-6.28l.38-8.01-7.76.4c-2.65.14-4.84,1.13-6.33,2.86-1.61,1.88-2.29,4.48-1.98,7.52l.55,5.29Z" fill="#fff"/>
                            <path d="M489.77,468.69s-.01,0-.02,0l-8.27.43c-2.91.15-5.33,1.25-6.99,3.19-1.78,2.08-2.54,4.92-2.2,8.22l.59,5.68c.02.23.21.4.43.41l5.69.37c.31.02.62.03.92.03,2.74,0,5.1-.82,6.86-2.4,1.86-1.67,2.92-4.06,3.05-6.92l.4-8.52c0-.13-.04-.26-.14-.35-.08-.08-.21-.14-.33-.14h0ZM489.29,469.64l-.38,8.01c-.12,2.61-1.07,4.78-2.74,6.28-1.59,1.42-3.73,2.16-6.24,2.16-.28,0-.57,0-.86-.03l-5.3-.34-.55-5.29c-.31-3.04.37-5.64,1.98-7.52,1.49-1.74,3.68-2.73,6.33-2.86l7.76-.4h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <g>
                            <path d="M504.9,471.95c.11.11.22.23.33.35,1.75,1.96,2.57,4.65,2.37,7.78l-.37,5.69c-.01.23-.19.41-.41.43l-5.68.59c-3.3.34-6.14-.42-8.22-2.2-1.93-1.66-3.04-4.07-3.19-6.99l-.43-8.27c0-.13.04-.26.13-.35.09-.09.22-.14.35-.14l8.52.4c2.68.13,4.95,1.06,6.59,2.7ZM506.33,485.33l.34-5.3c.19-2.88-.55-5.34-2.13-7.11-1.5-1.67-3.67-2.62-6.28-2.74l-8.01-.38.4,7.76c.14,2.65,1.13,4.84,2.86,6.33,1.88,1.61,4.48,2.29,7.52,1.98l5.29-.55Z" fill="#fff"/>
                            <path d="M489.77,468.85c-.12,0-.24.05-.33.14-.09.09-.14.22-.13.35l.43,8.27c.15,2.91,1.25,5.33,3.19,6.99,1.75,1.5,4.05,2.28,6.71,2.28.49,0,.99-.03,1.51-.08l5.68-.59c.22-.02.4-.21.41-.43l.37-5.69c.2-3.13-.62-5.83-2.37-7.78-.11-.12-.22-.24-.33-.35-1.64-1.65-3.91-2.58-6.59-2.7l-8.52-.4s-.01,0-.02,0h0ZM499.64,485.95c-2.44,0-4.53-.7-6.11-2.05-1.74-1.49-2.73-3.68-2.86-6.33l-.4-7.76,8.01.38c2.61.12,4.78,1.07,6.28,2.74,1.58,1.77,2.32,4.23,2.13,7.11l-.34,5.3-5.29.55c-.48.05-.95.07-1.41.07h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M487.27,454.32c1.63,1.63,2.56,3.88,2.7,6.53l.43,8.27c0,.13-.04.26-.13.35-.09.09-.22.14-.35.14l-8.52-.4c-2.86-.13-5.26-1.19-6.92-3.05-1.75-1.96-2.57-4.65-2.37-7.78l.37-5.69c.01-.23.19-.41.41-.43l5.68-.59c3.3-.34,6.14.42,8.22,2.2.17.15.33.3.49.45ZM489.45,468.67l-.4-7.76c-.14-2.65-1.13-4.84-2.86-6.33-1.88-1.61-4.48-2.29-7.52-1.98l-5.29.55-.34,5.3c-.19,2.88.55,5.34,2.13,7.11,1.5,1.67,3.67,2.62,6.28,2.74l8.01.38Z" fill="#fff"/>
                            <path d="M480.07,451.59c-.49,0-.99.03-1.51.08l-5.68.59c-.23.02-.4.21-.41.43l-.37,5.69c-.2,3.13.62,5.83,2.37,7.78,1.67,1.86,4.06,2.92,6.92,3.05l8.52.4s.01,0,.02,0c.12,0,.24-.05.33-.14.09-.09.14-.22.13-.35l-.43-8.27c-.14-2.66-1.07-4.9-2.7-6.53-.16-.16-.32-.31-.49-.45-1.75-1.5-4.05-2.28-6.71-2.28h0ZM489.45,468.67l-8.01-.38c-2.61-.12-4.78-1.07-6.28-2.74-1.58-1.77-2.32-4.23-2.13-7.11l.34-5.3,5.29-.55c.48-.05.95-.07,1.41-.07,2.44,0,4.53.7,6.11,2.05,1.74,1.49,2.73,3.68,2.86,6.33l.4,7.76h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <path d="M473.98,452.7l32.26,32.26c.18.18.18.47,0,.66-.18.18-.47.18-.66,0l-32.26-32.26c-.18-.18-.18-.47,0-.66.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M473.65,452.56c-.12,0-.24.05-.33.14-.18.18-.18.47,0,.66l32.26,32.26c.09.09.21.14.33.14s.24-.05.33-.14c.18-.18.18-.47,0-.66l-32.26-32.26c-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                        <path d="M505.96,453.07c.18.18.18.47,0,.66l-31.88,31.88c-.18.18-.47.18-.66,0-.18-.18-.18-.47,0-.66l31.88-31.88c.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M505.63,452.94c-.12,0-.24.05-.33.14l-31.88,31.88c-.18.18-.18.47,0,.66.09.09.21.14.33.14s.24-.05.33-.14l31.88-31.88c.18-.18.18-.47,0-.66-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                    </g>
                    </g>
                    <g opacity=".6">
                    <g>
                        <g>
                        <g>
                            <path d="M575.54,348.7c.07.07.12.17.13.28l.59,5.68c.34,3.3-.42,6.14-2.2,8.22-1.66,1.94-4.07,3.04-6.99,3.19l-8.27.43c-.13,0-.26-.04-.35-.13,0,0,0,0,0,0-.09-.09-.14-.22-.14-.35l.4-8.52c.13-2.86,1.19-5.26,3.05-6.92,1.96-1.75,4.65-2.57,7.78-2.37l5.69.37c.12,0,.22.06.3.13ZM559.27,365.53l7.76-.4c2.65-.14,4.84-1.13,6.33-2.86,1.61-1.88,2.29-4.48,1.98-7.52l-.55-5.29-5.3-.34c-2.88-.19-5.34.55-7.11,2.13-1.67,1.5-2.62,3.67-2.74,6.28l-.38,8.01Z" fill="#fff"/>
                            <path d="M568.63,348.16c-2.74,0-5.1.82-6.86,2.4-1.86,1.67-2.92,4.06-3.05,6.92l-.4,8.52c0,.13.04.26.14.35,0,0,0,0,0,0,.09.09.2.14.33.14,0,0,.02,0,.02,0l8.27-.43c2.91-.15,5.33-1.25,6.99-3.19,1.78-2.08,2.54-4.92,2.2-8.22l-.59-5.68c-.01-.11-.06-.21-.13-.28-.08-.08-.18-.13-.3-.13l-5.69-.37c-.31-.02-.62-.03-.92-.03h0ZM559.27,365.53l.38-8.01c.12-2.61,1.07-4.78,2.74-6.28,1.59-1.42,3.73-2.16,6.24-2.16.28,0,.57,0,.86.03l5.3.34.55,5.29c.31,3.04-.37,5.64-1.98,7.52-1.49,1.74-3.68,2.73-6.33,2.86l-7.76.4h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M558.95,365.53c.09.09.14.22.14.35l-.4,8.52c-.13,2.86-1.19,5.26-3.05,6.92-1.96,1.75-4.65,2.57-7.78,2.37l-5.69-.37c-.23-.01-.41-.19-.43-.41l-.59-5.68c-.34-3.3.42-6.14,2.2-8.22,1.66-1.94,4.07-3.04,6.99-3.19l8.27-.43c.13,0,.26.05.35.14ZM542.61,382.42l5.3.34c2.88.19,5.34-.55,7.11-2.13,1.67-1.5,2.62-3.67,2.74-6.28l.38-8.01-7.76.4c-2.65.14-4.84,1.13-6.33,2.86-1.61,1.88-2.29,4.48-1.98,7.52l.55,5.29Z" fill="#fff"/>
                            <path d="M558.62,365.4s-.01,0-.02,0l-8.27.43c-2.91.15-5.33,1.25-6.99,3.19-1.78,2.08-2.54,4.92-2.2,8.22l.59,5.68c.02.23.21.4.43.41l5.69.37c.31.02.62.03.92.03,2.74,0,5.1-.82,6.86-2.4,1.86-1.67,2.92-4.06,3.05-6.92l.4-8.52c0-.13-.04-.26-.14-.35-.08-.08-.21-.14-.33-.14h0ZM558.13,366.35l-.38,8.01c-.12,2.61-1.07,4.78-2.74,6.28-1.59,1.42-3.73,2.16-6.24,2.16-.28,0-.57,0-.86-.03l-5.3-.34-.55-5.29c-.31-3.04.37-5.64,1.98-7.52,1.49-1.74,3.68-2.73,6.33-2.86l7.76-.4h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <g>
                            <path d="M573.75,368.66c.11.11.22.23.33.35,1.75,1.96,2.57,4.65,2.37,7.78l-.37,5.69c-.01.23-.19.41-.41.43l-5.68.59c-3.3.34-6.14-.42-8.22-2.2-1.93-1.66-3.04-4.07-3.19-6.99l-.43-8.27c0-.13.04-.26.13-.35.09-.09.22-.14.35-.14l8.52.4c2.68.13,4.95,1.06,6.59,2.7ZM575.18,382.03l.34-5.3c.19-2.88-.55-5.34-2.13-7.11-1.5-1.67-3.67-2.62-6.28-2.74l-8.01-.38.4,7.76c.14,2.65,1.13,4.84,2.86,6.33,1.88,1.61,4.48,2.29,7.52,1.98l5.29-.55Z" fill="#fff"/>
                            <path d="M558.62,365.56c-.12,0-.24.05-.33.14-.09.09-.14.22-.13.35l.43,8.27c.15,2.91,1.25,5.33,3.19,6.99,1.75,1.5,4.05,2.28,6.71,2.28.49,0,.99-.03,1.51-.08l5.68-.59c.22-.02.4-.21.41-.43l.37-5.69c.2-3.13-.62-5.83-2.37-7.78-.11-.12-.22-.24-.33-.35-1.65-1.64-3.91-2.58-6.59-2.7l-8.52-.4s-.01,0-.02,0h0ZM568.48,382.65c-2.44,0-4.53-.7-6.11-2.05-1.74-1.49-2.73-3.68-2.86-6.33l-.4-7.76,8.01.38c2.61.12,4.78,1.07,6.28,2.74,1.58,1.77,2.32,4.23,2.13,7.11l-.34,5.3-5.29.55c-.48.05-.95.07-1.41.07h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M556.12,351.03c1.63,1.63,2.56,3.88,2.7,6.53l.43,8.27c0,.13-.04.26-.13.35-.09.09-.22.14-.35.14l-8.52-.4c-2.86-.13-5.26-1.19-6.92-3.05-1.75-1.96-2.57-4.65-2.37-7.78l.37-5.69c.01-.23.19-.41.41-.43l5.68-.59c3.3-.34,6.14.42,8.22,2.2.17.15.33.3.49.45ZM558.29,365.37l-.4-7.76c-.14-2.65-1.13-4.84-2.86-6.33-1.88-1.61-4.48-2.29-7.52-1.98l-5.29.55-.34,5.3c-.19,2.88.55,5.34,2.13,7.11,1.5,1.67,3.67,2.62,6.28,2.74l8.01.38Z" fill="#fff"/>
                            <path d="M548.92,348.3c-.49,0-.99.03-1.51.08l-5.68.59c-.22.02-.4.21-.41.43l-.37,5.69c-.2,3.13.62,5.83,2.37,7.78,1.67,1.86,4.06,2.92,6.92,3.05l8.52.4s.01,0,.02,0c.12,0,.24-.05.33-.14.09-.09.14-.22.13-.35l-.43-8.27c-.14-2.66-1.07-4.9-2.7-6.53-.16-.16-.32-.31-.49-.45-1.75-1.5-4.05-2.28-6.71-2.28h0ZM558.29,365.37l-8.01-.38c-2.61-.12-4.78-1.07-6.28-2.74-1.58-1.77-2.32-4.23-2.13-7.11l.34-5.3,5.29-.55c.48-.05.95-.07,1.41-.07,2.44,0,4.53.7,6.11,2.05,1.74,1.49,2.73,3.68,2.86,6.33l.4,7.76h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <path d="M542.82,349.4l32.26,32.26c.18.18.18.47,0,.66-.18.18-.47.18-.66,0l-32.26-32.26c-.18-.18-.18-.47,0-.66.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M542.49,349.27c-.12,0-.24.05-.33.14-.18.18-.18.47,0,.66l32.26,32.26c.09.09.21.14.33.14s.24-.05.33-.14c.18-.18.18-.47,0-.66l-32.26-32.26c-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                        <path d="M574.8,349.78c.18.18.18.47,0,.66l-31.88,31.88c-.18.18-.47.18-.66,0s-.18-.47,0-.66l31.88-31.88c.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M574.47,349.64c-.12,0-.24.05-.33.14l-31.88,31.88c-.18.18-.18.47,0,.66.09.09.21.14.33.14s.24-.05.33-.14l31.88-31.88c.18-.18.18-.47,0-.66-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                    </g>
                    <g>
                        <g>
                        <g>
                            <path d="M575.85,383.18c.07.07.12.17.13.28l.59,5.68c.34,3.3-.42,6.14-2.2,8.22-1.66,1.94-4.07,3.04-6.99,3.19l-8.27.43c-.13,0-.26-.04-.35-.13h0c-.09-.09-.14-.22-.14-.35l.4-8.52c.13-2.86,1.19-5.26,3.05-6.92,1.96-1.75,4.65-2.57,7.78-2.37l5.69.37c.12,0,.22.06.3.13ZM559.58,400.02l7.76-.4c2.65-.14,4.84-1.13,6.33-2.86,1.61-1.88,2.29-4.48,1.98-7.52l-.55-5.29-5.3-.34c-2.88-.19-5.34.55-7.11,2.13-1.67,1.5-2.62,3.67-2.74,6.28l-.38,8.01Z" fill="#fff"/>
                            <path d="M568.94,382.65c-2.74,0-5.1.82-6.86,2.4-1.86,1.67-2.92,4.06-3.05,6.92l-.4,8.52c0,.13.04.26.14.35,0,0,0,0,0,0,.09.09.2.14.33.14,0,0,.02,0,.02,0l8.27-.43c2.91-.15,5.33-1.25,6.99-3.19,1.78-2.08,2.54-4.92,2.2-8.22l-.59-5.68c-.01-.11-.06-.21-.13-.28-.08-.08-.18-.13-.3-.13l-5.69-.37c-.31-.02-.62-.03-.92-.03h0ZM559.58,400.02l.38-8.01c.12-2.61,1.07-4.78,2.74-6.28,1.59-1.42,3.73-2.16,6.24-2.16.28,0,.57,0,.86.03l5.3.34.55,5.29c.31,3.04-.37,5.64-1.98,7.52-1.49,1.74-3.68,2.73-6.33,2.86l-7.76.4h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M559.26,400.02c.09.09.14.22.14.35l-.4,8.52c-.13,2.86-1.19,5.26-3.05,6.92-1.96,1.75-4.65,2.57-7.78,2.37l-5.69-.37c-.23-.01-.41-.19-.43-.41l-.59-5.68c-.34-3.3.42-6.14,2.2-8.22,1.66-1.94,4.07-3.04,6.99-3.19l8.27-.43c.13,0,.26.05.35.14ZM542.92,416.91l5.3.34c2.88.19,5.34-.55,7.11-2.13,1.67-1.5,2.62-3.67,2.74-6.28l.38-8.01-7.76.4c-2.65.14-4.84,1.13-6.33,2.86-1.61,1.88-2.29,4.48-1.98,7.52l.55,5.29Z" fill="#fff"/>
                            <path d="M558.93,399.88s-.01,0-.02,0l-8.27.43c-2.91.15-5.33,1.25-6.99,3.19-1.78,2.08-2.54,4.92-2.2,8.22l.59,5.68c.02.23.21.4.43.41l5.69.37c.31.02.62.03.92.03,2.74,0,5.1-.82,6.86-2.4,1.86-1.67,2.92-4.06,3.05-6.92l.4-8.52c0-.13-.04-.26-.14-.35-.08-.08-.21-.14-.33-.14h0ZM558.44,400.84l-.38,8.01c-.12,2.61-1.07,4.78-2.74,6.28-1.59,1.42-3.73,2.16-6.24,2.16-.28,0-.57,0-.86-.03l-5.3-.34-.55-5.29c-.31-3.04.37-5.64,1.98-7.52,1.49-1.74,3.68-2.73,6.33-2.86l7.76-.4h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <g>
                            <path d="M574.06,403.15c.11.11.22.23.33.35,1.75,1.96,2.57,4.65,2.37,7.78l-.37,5.69c-.01.23-.19.41-.41.43l-5.68.59c-3.3.34-6.14-.42-8.22-2.2-1.93-1.66-3.04-4.07-3.19-6.99l-.43-8.27c0-.13.04-.26.13-.35.09-.09.22-.14.35-.14l8.52.4c2.68.13,4.95,1.06,6.59,2.7ZM575.49,416.52l.34-5.3c.19-2.88-.55-5.34-2.13-7.11-1.5-1.67-3.67-2.62-6.28-2.74l-8.01-.38.4,7.76c.14,2.65,1.13,4.84,2.86,6.33,1.88,1.61,4.48,2.29,7.52,1.98l5.29-.55Z" fill="#fff"/>
                            <path d="M558.93,400.05c-.12,0-.24.05-.33.14-.09.09-.14.22-.13.35l.43,8.27c.15,2.91,1.25,5.33,3.19,6.99,1.75,1.5,4.05,2.28,6.71,2.28.49,0,.99-.03,1.51-.08l5.68-.59c.22-.02.4-.21.41-.43l.37-5.69c.2-3.13-.62-5.83-2.37-7.78-.11-.12-.22-.24-.33-.35-1.65-1.65-3.91-2.58-6.59-2.7l-8.52-.4s-.01,0-.02,0h0ZM568.79,417.14c-2.44,0-4.53-.7-6.11-2.05-1.74-1.49-2.73-3.68-2.86-6.33l-.4-7.76,8.01.38c2.61.12,4.78,1.07,6.28,2.74,1.58,1.77,2.32,4.23,2.13,7.11l-.34,5.3-5.29.55c-.48.05-.95.07-1.41.07h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M556.43,385.52c1.63,1.63,2.56,3.88,2.7,6.53l.43,8.27c0,.13-.04.26-.13.35-.09.09-.22.14-.35.14l-8.52-.4c-2.86-.13-5.26-1.19-6.92-3.05-1.75-1.96-2.57-4.65-2.37-7.78l.37-5.69c.01-.23.19-.41.41-.43l5.68-.59c3.3-.34,6.14.42,8.22,2.2.17.15.33.3.49.45ZM558.6,399.86l-.4-7.76c-.14-2.65-1.13-4.84-2.86-6.33-1.88-1.61-4.48-2.29-7.52-1.98l-5.29.55-.34,5.3c-.19,2.88.55,5.34,2.13,7.11,1.5,1.67,3.67,2.62,6.28,2.74l8.01.38Z" fill="#fff"/>
                            <path d="M549.23,382.79c-.49,0-.99.03-1.51.08l-5.68.59c-.22.02-.4.21-.41.43l-.37,5.69c-.2,3.13.62,5.83,2.37,7.78,1.67,1.86,4.06,2.92,6.92,3.05l8.52.4s.01,0,.02,0c.12,0,.24-.05.33-.14.09-.09.14-.22.13-.35l-.43-8.27c-.14-2.66-1.07-4.9-2.7-6.53-.16-.16-.32-.31-.49-.45-1.75-1.5-4.05-2.28-6.71-2.28h0ZM558.6,399.86l-8.01-.38c-2.61-.12-4.78-1.07-6.28-2.74-1.58-1.77-2.32-4.23-2.13-7.11l.34-5.3,5.29-.55c.48-.05.95-.07,1.41-.07,2.44,0,4.53.7,6.11,2.05,1.74,1.49,2.73,3.68,2.86,6.33l.4,7.76h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <path d="M543.13,383.89l32.26,32.26c.18.18.18.47,0,.66-.18.18-.47.18-.66,0l-32.26-32.26c-.18-.18-.18-.47,0-.66s.47-.18.66,0Z" fill="#fff"/>
                        <path d="M542.8,383.76c-.12,0-.24.05-.33.14-.18.18-.18.47,0,.66l32.26,32.26c.09.09.21.14.33.14s.24-.05.33-.14c.18-.18.18-.47,0-.66l-32.26-32.26c-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                        <path d="M575.11,384.27c.18.18.18.47,0,.66l-31.88,31.88c-.18.18-.47.18-.66,0-.18-.18-.18-.47,0-.66l31.88-31.88c.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M574.78,384.13c-.12,0-.24.05-.33.14l-31.88,31.88c-.18.18-.18.47,0,.66.09.09.21.14.33.14s.24-.05.33-.14l31.88-31.88c.18-.18.18-.47,0-.66-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                    </g>
                    <g>
                        <g>
                        <g>
                            <path d="M576.08,417.5c.07.07.12.17.13.28l.59,5.68c.34,3.3-.42,6.14-2.2,8.22-1.66,1.94-4.07,3.04-6.99,3.19l-8.27.43c-.13,0-.26-.04-.35-.13,0,0,0,0,0,0-.09-.09-.14-.22-.14-.35l.4-8.52c.13-2.86,1.19-5.26,3.05-6.92,1.96-1.75,4.65-2.57,7.78-2.37l5.69.37c.12,0,.22.06.3.13ZM559.8,434.34l7.76-.4c2.65-.14,4.84-1.13,6.33-2.86,1.61-1.88,2.29-4.48,1.98-7.52l-.55-5.29-5.3-.34c-2.88-.19-5.34.55-7.11,2.13-1.67,1.5-2.62,3.67-2.74,6.28l-.38,8.01Z" fill="#fff"/>
                            <path d="M569.17,416.97c-2.74,0-5.1.82-6.86,2.4-1.86,1.67-2.92,4.06-3.05,6.92l-.4,8.52c0,.13.04.26.14.35,0,0,0,0,0,0,.09.09.2.13.33.13,0,0,.02,0,.02,0l8.27-.43c2.91-.15,5.33-1.25,6.99-3.19,1.78-2.08,2.54-4.92,2.2-8.22l-.59-5.68c-.01-.11-.06-.21-.13-.28-.08-.08-.18-.13-.3-.13l-5.69-.37c-.31-.02-.62-.03-.92-.03h0ZM559.8,434.34l.38-8.01c.12-2.61,1.07-4.78,2.74-6.28,1.59-1.42,3.73-2.16,6.24-2.16.28,0,.57,0,.86.03l5.3.34.55,5.29c.31,3.04-.37,5.64-1.98,7.52-1.49,1.74-3.68,2.73-6.33,2.86l-7.76.4h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M559.48,434.34c.09.09.14.22.14.35l-.4,8.52c-.13,2.86-1.19,5.26-3.05,6.92-1.96,1.75-4.65,2.57-7.78,2.37l-5.69-.37c-.23-.01-.41-.19-.43-.41l-.59-5.68c-.34-3.3.42-6.14,2.2-8.22,1.66-1.94,4.07-3.04,6.99-3.19l8.27-.43c.13,0,.26.05.35.14ZM543.14,451.22l5.3.34c2.88.19,5.34-.55,7.11-2.13,1.67-1.5,2.62-3.67,2.74-6.28l.38-8.01-7.76.4c-2.65.14-4.84,1.13-6.33,2.86-1.61,1.88-2.29,4.48-1.98,7.52l.55,5.29Z" fill="#fff"/>
                            <path d="M559.15,434.2s-.01,0-.02,0l-8.27.43c-2.91.15-5.33,1.25-6.99,3.19-1.78,2.08-2.54,4.92-2.2,8.22l.59,5.68c.02.23.21.4.43.41l5.69.37c.31.02.62.03.92.03,2.74,0,5.1-.82,6.86-2.4,1.86-1.67,2.92-4.06,3.05-6.92l.4-8.52c0-.13-.04-.26-.14-.35-.08-.08-.21-.14-.33-.14h0ZM558.67,435.15l-.38,8.01c-.12,2.61-1.07,4.78-2.74,6.28-1.59,1.42-3.73,2.16-6.24,2.16-.28,0-.57,0-.86-.03l-5.3-.34-.55-5.29c-.31-3.04.37-5.64,1.98-7.52,1.49-1.74,3.68-2.73,6.33-2.86l7.76-.4h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <g>
                            <path d="M574.29,437.47c.11.11.22.23.33.35,1.75,1.96,2.57,4.65,2.37,7.78l-.37,5.69c-.01.23-.19.41-.41.43l-5.68.59c-3.3.34-6.14-.42-8.22-2.2-1.93-1.66-3.04-4.07-3.19-6.99l-.43-8.27c0-.13.04-.26.13-.35.09-.09.22-.14.35-.14l8.52.4c2.68.13,4.95,1.06,6.59,2.7ZM575.72,450.84l.34-5.3c.19-2.88-.55-5.34-2.13-7.11-1.5-1.67-3.67-2.62-6.28-2.74l-8.01-.38.4,7.76c.14,2.65,1.13,4.84,2.86,6.33,1.88,1.61,4.48,2.29,7.52,1.98l5.29-.55Z" fill="#fff"/>
                            <path d="M559.16,434.36c-.12,0-.24.05-.33.14-.09.09-.14.22-.13.35l.43,8.27c.15,2.91,1.25,5.33,3.19,6.99,1.75,1.5,4.05,2.28,6.71,2.28.49,0,.99-.03,1.51-.08l5.68-.59c.23-.02.4-.21.41-.43l.37-5.69c.2-3.13-.62-5.83-2.37-7.78-.11-.12-.22-.24-.33-.35-1.65-1.64-3.91-2.58-6.59-2.7l-8.52-.4s-.01,0-.02,0h0ZM569.02,451.46c-2.44,0-4.53-.7-6.11-2.05-1.74-1.49-2.73-3.68-2.86-6.33l-.4-7.76,8.01.38c2.61.12,4.78,1.07,6.28,2.74,1.58,1.77,2.32,4.23,2.13,7.11l-.34,5.3-5.29.55c-.48.05-.95.07-1.41.07h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M556.66,419.84c1.63,1.63,2.56,3.88,2.7,6.53l.43,8.27c0,.13-.04.26-.13.35-.09.09-.22.14-.35.14l-8.52-.4c-2.86-.13-5.26-1.19-6.92-3.05-1.75-1.96-2.57-4.65-2.37-7.78l.37-5.69c.01-.23.19-.41.41-.43l5.68-.59c3.3-.34,6.14.42,8.22,2.2.17.15.33.3.49.45ZM558.83,434.18l-.4-7.76c-.14-2.65-1.13-4.84-2.86-6.33-1.88-1.61-4.48-2.29-7.52-1.98l-5.29.55-.34,5.3c-.19,2.88.55,5.34,2.13,7.11,1.5,1.67,3.67,2.62,6.28,2.74l8.01.38Z" fill="#fff"/>
                            <path d="M549.46,417.11c-.49,0-.99.03-1.51.08l-5.68.59c-.22.02-.4.21-.41.43l-.37,5.69c-.2,3.13.62,5.83,2.37,7.78,1.67,1.86,4.06,2.92,6.92,3.05l8.52.4s.01,0,.02,0c.12,0,.24-.05.33-.14.09-.09.14-.22.13-.35l-.43-8.27c-.14-2.66-1.07-4.9-2.7-6.53-.16-.16-.32-.31-.49-.45-1.75-1.5-4.05-2.28-6.71-2.28h0ZM558.83,434.18l-8.01-.38c-2.61-.12-4.78-1.07-6.28-2.74-1.58-1.77-2.32-4.23-2.13-7.11l.34-5.3,5.29-.55c.48-.05.95-.07,1.41-.07,2.44,0,4.53.7,6.11,2.05,1.74,1.49,2.73,3.68,2.86,6.33l.4,7.76h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <path d="M543.36,418.21l32.26,32.26c.18.18.18.47,0,.66-.18.18-.47.18-.66,0l-32.26-32.26c-.18-.18-.18-.47,0-.66.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M543.03,418.07c-.12,0-.24.05-.33.14-.18.18-.18.47,0,.66l32.26,32.26c.09.09.21.14.33.14s.24-.05.33-.14c.18-.18.18-.47,0-.66l-32.26-32.26c-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                        <path d="M575.34,418.59c.18.18.18.47,0,.66l-31.88,31.88c-.18.18-.47.18-.66,0s-.18-.47,0-.66l31.88-31.88c.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M575.01,418.45c-.12,0-.24.05-.33.14l-31.88,31.88c-.18.18-.18.47,0,.66.09.09.21.14.33.14s.24-.05.33-.14l31.88-31.88c.18-.18.18-.47,0-.66-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                    </g>
                    <g>
                        <g>
                        <g>
                            <path d="M576.39,451.99c.07.07.12.17.13.28l.59,5.68c.34,3.3-.42,6.14-2.2,8.22-1.66,1.94-4.07,3.04-6.99,3.19l-8.27.43c-.13,0-.26-.04-.35-.13,0,0,0,0,0,0-.09-.09-.14-.22-.14-.35l.4-8.52c.13-2.86,1.19-5.26,3.05-6.92,1.96-1.75,4.65-2.57,7.78-2.37l5.69.37c.12,0,.22.06.3.13ZM560.11,468.83l7.76-.4c2.65-.14,4.84-1.13,6.33-2.86,1.61-1.88,2.29-4.48,1.98-7.52l-.55-5.29-5.3-.34c-2.88-.19-5.34.55-7.11,2.13-1.67,1.5-2.62,3.67-2.74,6.28l-.38,8.01Z" fill="#fff"/>
                            <path d="M569.48,451.46c-2.74,0-5.1.82-6.86,2.4-1.86,1.67-2.92,4.06-3.05,6.92l-.4,8.52c0,.13.04.26.14.35,0,0,0,0,0,0,.09.09.2.14.33.14,0,0,.02,0,.02,0l8.27-.43c2.91-.15,5.33-1.25,6.99-3.19,1.78-2.08,2.54-4.92,2.2-8.22l-.59-5.68c-.01-.11-.06-.21-.13-.28-.08-.08-.18-.13-.3-.13l-5.69-.37c-.31-.02-.62-.03-.92-.03h0ZM560.11,468.83l.38-8.01c.12-2.61,1.07-4.78,2.74-6.28,1.59-1.42,3.73-2.16,6.24-2.16.28,0,.57,0,.86.03l5.3.34.55,5.29c.31,3.04-.37,5.64-1.98,7.52-1.49,1.74-3.68,2.73-6.33,2.86l-7.76.4h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M559.79,468.82c.09.09.14.22.14.35l-.4,8.52c-.13,2.86-1.19,5.26-3.05,6.92-1.96,1.75-4.65,2.57-7.78,2.37l-5.69-.37c-.23-.01-.41-.19-.43-.41l-.59-5.68c-.34-3.3.42-6.14,2.2-8.22,1.66-1.94,4.07-3.04,6.99-3.19l8.27-.43c.13,0,.26.05.35.14ZM543.45,485.71l5.3.34c2.88.19,5.34-.55,7.11-2.13,1.67-1.5,2.62-3.67,2.74-6.28l.38-8.01-7.76.4c-2.65.14-4.84,1.13-6.33,2.86-1.61,1.88-2.29,4.48-1.98,7.52l.55,5.29Z" fill="#fff"/>
                            <path d="M559.46,468.69s-.01,0-.02,0l-8.27.43c-2.91.15-5.33,1.25-6.99,3.19-1.78,2.08-2.54,4.92-2.2,8.22l.59,5.68c.02.23.21.4.43.41l5.69.37c.31.02.62.03.92.03,2.74,0,5.1-.82,6.86-2.4,1.86-1.67,2.92-4.06,3.05-6.92l.4-8.52c0-.13-.04-.26-.14-.35-.08-.08-.21-.14-.33-.14h0ZM558.98,469.64l-.38,8.01c-.12,2.61-1.07,4.78-2.74,6.28-1.59,1.42-3.73,2.16-6.24,2.16-.28,0-.57,0-.86-.03l-5.3-.34-.55-5.29c-.31-3.04.37-5.64,1.98-7.52,1.49-1.74,3.68-2.73,6.33-2.86l7.76-.4h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <g>
                            <path d="M574.6,471.95c.11.11.22.23.33.35,1.75,1.96,2.57,4.65,2.37,7.78l-.37,5.69c-.01.23-.19.41-.41.43l-5.68.59c-3.3.34-6.14-.42-8.22-2.2-1.93-1.66-3.04-4.07-3.19-6.99l-.43-8.27c0-.13.04-.26.13-.35.09-.09.22-.14.35-.14l8.52.4c2.68.13,4.95,1.06,6.59,2.7ZM576.02,485.33l.34-5.3c.19-2.88-.55-5.34-2.13-7.11-1.5-1.67-3.67-2.62-6.28-2.74l-8.01-.38.4,7.76c.14,2.65,1.13,4.84,2.86,6.33,1.88,1.61,4.48,2.29,7.52,1.98l5.29-.55Z" fill="#fff"/>
                            <path d="M559.47,468.85c-.12,0-.24.05-.33.14-.09.09-.14.22-.13.35l.43,8.27c.15,2.91,1.25,5.33,3.19,6.99,1.75,1.5,4.05,2.28,6.71,2.28.49,0,.99-.03,1.51-.08l5.68-.59c.23-.02.4-.21.41-.43l.37-5.69c.2-3.13-.62-5.83-2.37-7.78-.11-.12-.22-.24-.33-.35-1.64-1.65-3.91-2.58-6.59-2.7l-8.52-.4s-.01,0-.02,0h0ZM569.33,485.95c-2.44,0-4.53-.7-6.11-2.05-1.74-1.49-2.73-3.68-2.86-6.33l-.4-7.76,8.01.38c2.61.12,4.78,1.07,6.28,2.74,1.58,1.77,2.32,4.23,2.13,7.11l-.34,5.3-5.29.55c-.48.05-.95.07-1.41.07h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M556.97,454.32c1.63,1.63,2.56,3.88,2.7,6.53l.43,8.27c0,.13-.04.26-.13.35-.09.09-.22.14-.35.14l-8.52-.4c-2.86-.13-5.26-1.19-6.92-3.05-1.75-1.96-2.57-4.65-2.37-7.78l.37-5.69c.01-.23.19-.41.41-.43l5.68-.59c3.3-.34,6.14.42,8.22,2.2.17.15.33.3.49.45ZM559.14,468.67l-.4-7.76c-.14-2.65-1.13-4.84-2.86-6.33-1.88-1.61-4.48-2.29-7.52-1.98l-5.29.55-.34,5.3c-.19,2.88.55,5.34,2.13,7.11,1.5,1.67,3.67,2.62,6.28,2.74l8.01.38Z" fill="#fff"/>
                            <path d="M549.76,451.59c-.49,0-.99.03-1.51.08l-5.68.59c-.23.02-.4.21-.41.43l-.37,5.69c-.2,3.13.62,5.83,2.37,7.78,1.67,1.86,4.06,2.92,6.92,3.05l8.52.4s.01,0,.02,0c.12,0,.24-.05.33-.14.09-.09.14-.22.13-.35l-.43-8.27c-.14-2.66-1.07-4.9-2.7-6.53-.16-.16-.32-.31-.49-.45-1.75-1.5-4.05-2.28-6.71-2.28h0ZM559.14,468.67l-8.01-.38c-2.61-.12-4.78-1.07-6.28-2.74-1.58-1.77-2.32-4.23-2.13-7.11l.34-5.3,5.29-.55c.48-.05.95-.07,1.41-.07,2.44,0,4.53.7,6.11,2.05,1.74,1.49,2.73,3.68,2.86,6.33l.4,7.76h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <path d="M543.67,452.7l32.26,32.26c.18.18.18.47,0,.66s-.47.18-.66,0l-32.26-32.26c-.18-.18-.18-.47,0-.66s.47-.18.66,0Z" fill="#fff"/>
                        <path d="M543.34,452.56c-.12,0-.24.05-.33.14-.18.18-.18.47,0,.66l32.26,32.26c.09.09.21.14.33.14s.24-.05.33-.14c.18-.18.18-.47,0-.66l-32.26-32.26c-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                        <path d="M575.65,453.07c.18.18.18.47,0,.66l-31.88,31.88c-.18.18-.47.18-.66,0s-.18-.47,0-.66l31.88-31.88c.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M575.32,452.94c-.12,0-.24.05-.33.14l-31.88,31.88c-.18.18-.18.47,0,.66.09.09.21.14.33.14s.24-.05.33-.14l31.88-31.88c.18-.18.18-.47,0-.66-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                    </g>
                    </g>
                    <g opacity=".6">
                    <g>
                        <g>
                        <g>
                            <path d="M540.56,348.7c.07.07.12.17.13.28l.59,5.68c.34,3.3-.42,6.14-2.2,8.22-1.66,1.94-4.07,3.04-6.99,3.19l-8.27.43c-.13,0-.26-.04-.35-.13,0,0,0,0,0,0-.09-.09-.14-.22-.14-.35l.4-8.52c.13-2.86,1.19-5.26,3.05-6.92,1.96-1.75,4.65-2.57,7.78-2.37l5.69.37c.12,0,.22.06.3.13ZM524.28,365.53l7.76-.4c2.65-.14,4.84-1.13,6.33-2.86,1.61-1.88,2.29-4.48,1.98-7.52l-.55-5.29-5.3-.34c-2.88-.19-5.34.55-7.11,2.13-1.67,1.5-2.62,3.67-2.74,6.28l-.38,8.01Z" fill="#fff"/>
                            <path d="M533.65,348.16c-2.74,0-5.1.82-6.86,2.4-1.86,1.67-2.92,4.06-3.05,6.92l-.4,8.52c0,.13.04.26.14.35,0,0,0,0,0,0,.09.09.2.14.33.14,0,0,.02,0,.02,0l8.27-.43c2.91-.15,5.33-1.25,6.99-3.19,1.78-2.08,2.54-4.92,2.2-8.22l-.59-5.68c-.01-.11-.06-.21-.13-.28-.08-.08-.18-.13-.3-.13l-5.69-.37c-.31-.02-.62-.03-.92-.03h0ZM524.28,365.53l.38-8.01c.12-2.61,1.07-4.78,2.74-6.28,1.59-1.42,3.73-2.16,6.24-2.16.28,0,.57,0,.86.03l5.3.34.55,5.29c.31,3.04-.37,5.64-1.98,7.52-1.49,1.74-3.68,2.73-6.33,2.86l-7.76.4h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M523.96,365.53c.09.09.14.22.14.35l-.4,8.52c-.13,2.86-1.19,5.26-3.05,6.92-1.96,1.75-4.65,2.57-7.78,2.37l-5.69-.37c-.23-.01-.41-.19-.43-.41l-.59-5.68c-.34-3.3.42-6.14,2.2-8.22,1.66-1.94,4.07-3.04,6.99-3.19l8.27-.43c.13,0,.26.05.35.14ZM507.62,382.42l5.3.34c2.88.19,5.34-.55,7.11-2.13,1.67-1.5,2.62-3.67,2.74-6.28l.38-8.01-7.76.4c-2.65.14-4.84,1.13-6.33,2.86-1.61,1.88-2.29,4.48-1.98,7.52l.55,5.29Z" fill="#fff"/>
                            <path d="M523.63,365.4s-.01,0-.02,0l-8.27.43c-2.91.15-5.33,1.25-6.99,3.19-1.78,2.08-2.54,4.92-2.2,8.22l.59,5.68c.02.23.21.4.43.41l5.69.37c.31.02.62.03.92.03,2.74,0,5.1-.82,6.86-2.4,1.86-1.67,2.92-4.06,3.05-6.92l.4-8.52c0-.13-.04-.26-.14-.35-.08-.08-.21-.14-.33-.14h0ZM523.15,366.35l-.38,8.01c-.12,2.61-1.07,4.78-2.74,6.28-1.59,1.42-3.73,2.16-6.24,2.16-.28,0-.57,0-.86-.03l-5.3-.34-.55-5.29c-.31-3.04.37-5.64,1.98-7.52,1.49-1.74,3.68-2.73,6.33-2.86l7.76-.4h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <g>
                            <path d="M538.76,368.66c.11.11.22.23.33.35,1.75,1.96,2.57,4.65,2.37,7.78l-.37,5.69c-.01.23-.19.41-.41.43l-5.68.59c-3.3.34-6.14-.42-8.22-2.2-1.93-1.66-3.04-4.07-3.19-6.99l-.43-8.27c0-.13.04-.26.13-.35.09-.09.22-.14.35-.14l8.52.4c2.68.13,4.95,1.06,6.59,2.7ZM540.19,382.03l.34-5.3c.19-2.88-.55-5.34-2.13-7.11-1.5-1.67-3.67-2.62-6.28-2.74l-8.01-.38.4,7.76c.14,2.65,1.13,4.84,2.86,6.33,1.88,1.61,4.48,2.29,7.52,1.98l5.29-.55Z" fill="#fff"/>
                            <path d="M523.63,365.56c-.12,0-.24.05-.33.14-.09.09-.14.22-.13.35l.43,8.27c.15,2.91,1.25,5.33,3.19,6.99,1.75,1.5,4.05,2.28,6.71,2.28.49,0,.99-.03,1.51-.08l5.68-.59c.22-.02.4-.21.41-.43l.37-5.69c.2-3.13-.62-5.83-2.37-7.78-.11-.12-.22-.24-.33-.35-1.64-1.64-3.91-2.58-6.59-2.7l-8.52-.4s-.01,0-.02,0h0ZM533.5,382.65c-2.44,0-4.53-.7-6.11-2.05-1.74-1.49-2.73-3.68-2.86-6.33l-.4-7.76,8.01.38c2.61.12,4.78,1.07,6.28,2.74,1.58,1.77,2.32,4.23,2.13,7.11l-.34,5.3-5.29.55c-.48.05-.95.07-1.41.07h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M521.13,351.03c1.63,1.63,2.56,3.88,2.7,6.53l.43,8.27c0,.13-.04.26-.13.35-.09.09-.22.14-.35.14l-8.52-.4c-2.86-.13-5.26-1.19-6.92-3.05-1.75-1.96-2.57-4.65-2.37-7.78l.37-5.69c.01-.23.19-.41.41-.43l5.68-.59c3.3-.34,6.14.42,8.22,2.2.17.15.33.3.49.45ZM523.31,365.37l-.4-7.76c-.14-2.65-1.13-4.84-2.86-6.33-1.88-1.61-4.48-2.29-7.52-1.98l-5.29.55-.34,5.3c-.19,2.88.55,5.34,2.13,7.11,1.5,1.67,3.67,2.62,6.28,2.74l8.01.38Z" fill="#fff"/>
                            <path d="M513.93,348.3c-.49,0-.99.03-1.51.08l-5.68.59c-.22.02-.4.21-.41.43l-.37,5.69c-.2,3.13.62,5.83,2.37,7.78,1.67,1.86,4.06,2.92,6.92,3.05l8.52.4s.01,0,.02,0c.12,0,.24-.05.33-.14.09-.09.14-.22.13-.35l-.43-8.27c-.14-2.66-1.07-4.9-2.7-6.53-.16-.16-.32-.31-.49-.45-1.75-1.5-4.05-2.28-6.71-2.28h0ZM523.31,365.37l-8.01-.38c-2.61-.12-4.78-1.07-6.28-2.74-1.58-1.77-2.32-4.23-2.13-7.11l.34-5.3,5.29-.55c.48-.05.95-.07,1.41-.07,2.44,0,4.53.7,6.11,2.05,1.74,1.49,2.73,3.68,2.86,6.33l.4,7.76h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <path d="M507.84,349.4l32.26,32.26c.18.18.18.47,0,.66-.18.18-.47.18-.66,0l-32.26-32.26c-.18-.18-.18-.47,0-.66.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M507.51,349.27c-.12,0-.24.05-.33.14-.18.18-.18.47,0,.66l32.26,32.26c.09.09.21.14.33.14s.24-.05.33-.14c.18-.18.18-.47,0-.66l-32.26-32.26c-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                        <path d="M539.82,349.78c.18.18.18.47,0,.66l-31.88,31.88c-.18.18-.47.18-.66,0-.18-.18-.18-.47,0-.66l31.88-31.88c.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M539.49,349.64c-.12,0-.24.05-.33.14l-31.88,31.88c-.18.18-.18.47,0,.66.09.09.21.14.33.14s.24-.05.33-.14l31.88-31.88c.18-.18.18-.47,0-.66-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                    </g>
                    <g>
                        <g>
                        <g>
                            <path d="M540.86,383.18c.07.07.12.17.13.28l.59,5.68c.34,3.3-.42,6.14-2.2,8.22-1.66,1.94-4.07,3.04-6.99,3.19l-8.27.43c-.13,0-.26-.04-.35-.13,0,0,0,0,0,0-.09-.09-.14-.22-.14-.35l.4-8.52c.13-2.86,1.19-5.26,3.05-6.92,1.96-1.75,4.65-2.57,7.78-2.37l5.69.37c.12,0,.22.06.3.13ZM524.59,400.02l7.76-.4c2.65-.14,4.84-1.13,6.33-2.86,1.61-1.88,2.29-4.48,1.98-7.52l-.55-5.29-5.3-.34c-2.88-.19-5.34.55-7.11,2.13-1.67,1.5-2.62,3.67-2.74,6.28l-.38,8.01Z" fill="#fff"/>
                            <path d="M533.95,382.65c-2.74,0-5.1.82-6.86,2.4-1.86,1.67-2.92,4.06-3.05,6.92l-.4,8.52c0,.13.04.26.14.35,0,0,0,0,0,0,.09.09.2.14.33.14,0,0,.02,0,.02,0l8.27-.43c2.91-.15,5.33-1.25,6.99-3.19,1.78-2.08,2.54-4.92,2.2-8.22l-.59-5.68c-.01-.11-.06-.21-.13-.28-.08-.08-.18-.13-.3-.13l-5.69-.37c-.31-.02-.62-.03-.92-.03h0ZM524.59,400.02l.38-8.01c.12-2.61,1.07-4.78,2.74-6.28,1.59-1.42,3.73-2.16,6.24-2.16.28,0,.57,0,.86.03l5.3.34.55,5.29c.31,3.04-.37,5.64-1.98,7.52-1.49,1.74-3.68,2.73-6.33,2.86l-7.76.4h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M524.27,400.02c.09.09.14.22.14.35l-.4,8.52c-.13,2.86-1.19,5.26-3.05,6.92-1.96,1.75-4.65,2.57-7.78,2.37l-5.69-.37c-.23-.01-.41-.19-.43-.41l-.59-5.68c-.34-3.3.42-6.14,2.2-8.22,1.66-1.94,4.07-3.04,6.99-3.19l8.27-.43c.13,0,.26.05.35.14ZM507.93,416.91l5.3.34c2.88.19,5.34-.55,7.11-2.13,1.67-1.5,2.62-3.67,2.74-6.28l.38-8.01-7.76.4c-2.65.14-4.84,1.13-6.33,2.86-1.61,1.88-2.29,4.48-1.98,7.52l.55,5.29Z" fill="#fff"/>
                            <path d="M523.94,399.88s-.01,0-.02,0l-8.27.43c-2.91.15-5.33,1.25-6.99,3.19-1.78,2.08-2.54,4.92-2.2,8.22l.59,5.68c.02.23.21.4.43.41l5.69.37c.31.02.62.03.92.03,2.74,0,5.1-.82,6.86-2.4,1.86-1.67,2.92-4.06,3.05-6.92l.4-8.52c0-.13-.04-.26-.14-.35-.08-.08-.21-.14-.33-.14h0ZM523.46,400.84l-.38,8.01c-.12,2.61-1.07,4.78-2.74,6.28-1.59,1.42-3.73,2.16-6.24,2.16-.28,0-.57,0-.86-.03l-5.3-.34-.55-5.29c-.31-3.04.37-5.64,1.98-7.52,1.49-1.74,3.68-2.73,6.33-2.86l7.76-.4h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <g>
                            <path d="M539.07,403.15c.11.11.22.23.33.35,1.75,1.96,2.57,4.65,2.37,7.78l-.37,5.69c-.01.23-.19.41-.41.43l-5.68.59c-3.3.34-6.14-.42-8.22-2.2-1.93-1.66-3.04-4.07-3.19-6.99l-.43-8.27c0-.13.04-.26.13-.35.09-.09.22-.14.35-.14l8.52.4c2.68.13,4.95,1.06,6.59,2.7ZM540.5,416.52l.34-5.3c.19-2.88-.55-5.34-2.13-7.11-1.5-1.67-3.67-2.62-6.28-2.74l-8.01-.38.4,7.76c.14,2.65,1.13,4.84,2.86,6.33,1.88,1.61,4.48,2.29,7.52,1.98l5.29-.55Z" fill="#fff"/>
                            <path d="M523.94,400.05c-.12,0-.24.05-.33.14-.09.09-.14.22-.13.35l.43,8.27c.15,2.91,1.25,5.33,3.19,6.99,1.75,1.5,4.05,2.28,6.71,2.28.49,0,.99-.03,1.51-.08l5.68-.59c.22-.02.4-.21.41-.43l.37-5.69c.2-3.13-.62-5.83-2.37-7.78-.11-.12-.22-.24-.33-.35-1.65-1.65-3.91-2.58-6.59-2.7l-8.52-.4s-.01,0-.02,0h0ZM533.81,417.14c-2.44,0-4.53-.7-6.11-2.05-1.74-1.49-2.73-3.68-2.86-6.33l-.4-7.76,8.01.38c2.61.12,4.78,1.07,6.28,2.74,1.58,1.77,2.32,4.23,2.13,7.11l-.34,5.3-5.29.55c-.48.05-.95.07-1.41.07h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M521.44,385.52c1.63,1.63,2.56,3.88,2.7,6.53l.43,8.27c0,.13-.04.26-.13.35-.09.09-.22.14-.35.14l-8.52-.4c-2.86-.13-5.26-1.19-6.92-3.05-1.75-1.96-2.57-4.65-2.37-7.78l.37-5.69c.01-.23.19-.41.41-.43l5.68-.59c3.3-.34,6.14.42,8.22,2.2.17.15.33.3.49.45ZM523.62,399.86l-.4-7.76c-.14-2.65-1.13-4.84-2.86-6.33-1.88-1.61-4.48-2.29-7.52-1.98l-5.29.55-.34,5.3c-.19,2.88.55,5.34,2.13,7.11,1.5,1.67,3.67,2.62,6.28,2.74l8.01.38Z" fill="#fff"/>
                            <path d="M514.24,382.79c-.49,0-.99.03-1.51.08l-5.68.59c-.22.02-.4.21-.41.43l-.37,5.69c-.2,3.13.62,5.83,2.37,7.78,1.67,1.86,4.06,2.92,6.92,3.05l8.52.4s.01,0,.02,0c.12,0,.24-.05.33-.14.09-.09.14-.22.13-.35l-.43-8.27c-.14-2.66-1.07-4.9-2.7-6.53-.16-.16-.32-.31-.49-.45-1.75-1.5-4.05-2.28-6.71-2.28h0ZM523.62,399.86l-8.01-.38c-2.61-.12-4.78-1.07-6.28-2.74-1.58-1.77-2.32-4.23-2.13-7.11l.34-5.3,5.29-.55c.48-.05.95-.07,1.41-.07,2.44,0,4.53.7,6.11,2.05,1.74,1.49,2.73,3.68,2.86,6.33l.4,7.76h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <path d="M508.15,383.89l32.26,32.26c.18.18.18.47,0,.66-.18.18-.47.18-.66,0l-32.26-32.26c-.18-.18-.18-.47,0-.66.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M507.82,383.76c-.12,0-.24.05-.33.14-.18.18-.18.47,0,.66l32.26,32.26c.09.09.21.14.33.14s.24-.05.33-.14c.18-.18.18-.47,0-.66l-32.26-32.26c-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                        <path d="M540.13,384.27c.18.18.18.47,0,.66l-31.88,31.88c-.18.18-.47.18-.66,0-.18-.18-.18-.47,0-.66l31.88-31.88c.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M539.8,384.13c-.12,0-.24.05-.33.14l-31.88,31.88c-.18.18-.18.47,0,.66.09.09.21.14.33.14s.24-.05.33-.14l31.88-31.88c.18-.18.18-.47,0-.66-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                    </g>
                    <g>
                        <g>
                        <g>
                            <path d="M541.09,417.5c.07.07.12.17.13.28l.59,5.68c.34,3.3-.42,6.14-2.2,8.22-1.66,1.94-4.07,3.04-6.99,3.19l-8.27.43c-.13,0-.26-.04-.35-.13h0c-.09-.09-.14-.22-.14-.35l.4-8.52c.13-2.86,1.19-5.26,3.05-6.92,1.96-1.75,4.65-2.57,7.78-2.37l5.69.37c.12,0,.22.06.3.13ZM524.82,434.34l7.76-.4c2.65-.14,4.84-1.13,6.33-2.86,1.61-1.88,2.29-4.48,1.98-7.52l-.55-5.29-5.3-.34c-2.88-.19-5.34.55-7.11,2.13-1.67,1.5-2.62,3.67-2.74,6.28l-.38,8.01Z" fill="#fff"/>
                            <path d="M534.18,416.97c-2.74,0-5.1.82-6.86,2.4-1.86,1.67-2.92,4.06-3.05,6.92l-.4,8.52c0,.13.04.26.14.35h0c.09.09.2.14.33.14,0,0,.02,0,.02,0l8.27-.43c2.91-.15,5.33-1.25,6.99-3.19,1.78-2.08,2.54-4.92,2.2-8.22l-.59-5.68c-.01-.11-.06-.21-.13-.28-.08-.08-.18-.13-.3-.13l-5.69-.37c-.31-.02-.62-.03-.92-.03h0ZM524.82,434.34l.38-8.01c.12-2.61,1.07-4.78,2.74-6.28,1.59-1.42,3.73-2.16,6.24-2.16.28,0,.57,0,.86.03l5.3.34.55,5.29c.31,3.04-.37,5.64-1.98,7.52-1.49,1.74-3.68,2.73-6.33,2.86l-7.76.4h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M524.5,434.34c.09.09.14.22.14.35l-.4,8.52c-.13,2.86-1.19,5.26-3.05,6.92-1.96,1.75-4.65,2.57-7.78,2.37l-5.69-.37c-.23-.01-.41-.19-.43-.41l-.59-5.68c-.34-3.3.42-6.14,2.2-8.22,1.66-1.94,4.07-3.04,6.99-3.19l8.27-.43c.13,0,.26.05.35.14ZM508.16,451.22l5.3.34c2.88.19,5.34-.55,7.11-2.13,1.67-1.5,2.62-3.67,2.74-6.28l.38-8.01-7.76.4c-2.65.14-4.84,1.13-6.33,2.86-1.61,1.88-2.29,4.48-1.98,7.52l.55,5.29Z" fill="#fff"/>
                            <path d="M524.17,434.2s-.01,0-.02,0l-8.27.43c-2.91.15-5.33,1.25-6.99,3.19-1.78,2.08-2.54,4.92-2.2,8.22l.59,5.68c.02.23.21.4.43.41l5.69.37c.31.02.62.03.92.03,2.74,0,5.1-.82,6.86-2.4,1.86-1.67,2.92-4.06,3.05-6.92l.4-8.52c0-.13-.04-.26-.14-.35-.08-.08-.21-.14-.33-.14h0ZM523.68,435.15l-.38,8.01c-.12,2.61-1.07,4.78-2.74,6.28-1.59,1.42-3.73,2.16-6.24,2.16-.28,0-.57,0-.86-.03l-5.3-.34-.55-5.29c-.31-3.04.37-5.64,1.98-7.52,1.49-1.74,3.68-2.73,6.33-2.86l7.76-.4h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <g>
                            <path d="M539.3,437.47c.11.11.22.23.33.35,1.75,1.96,2.57,4.65,2.37,7.78l-.37,5.69c-.01.23-.19.41-.41.43l-5.68.59c-3.3.34-6.14-.42-8.22-2.2-1.93-1.66-3.04-4.07-3.19-6.99l-.43-8.27c0-.13.04-.26.13-.35.09-.09.22-.14.35-.14l8.52.4c2.68.13,4.95,1.06,6.59,2.7ZM540.73,450.84l.34-5.3c.19-2.88-.55-5.34-2.13-7.11-1.5-1.67-3.67-2.62-6.28-2.74l-8.01-.38.4,7.76c.14,2.65,1.13,4.84,2.86,6.33,1.88,1.61,4.48,2.29,7.52,1.98l5.29-.55Z" fill="#fff"/>
                            <path d="M524.17,434.36c-.12,0-.24.05-.33.14-.09.09-.14.22-.13.35l.43,8.27c.15,2.91,1.25,5.33,3.19,6.99,1.75,1.5,4.05,2.28,6.71,2.28.49,0,.99-.03,1.51-.08l5.68-.59c.22-.02.4-.21.41-.43l.37-5.69c.2-3.13-.62-5.83-2.37-7.78-.11-.12-.22-.24-.33-.35-1.64-1.64-3.91-2.58-6.59-2.7l-8.52-.4s-.01,0-.02,0h0ZM534.04,451.46c-2.44,0-4.53-.7-6.11-2.05-1.74-1.49-2.73-3.68-2.86-6.33l-.4-7.76,8.01.38c2.61.12,4.78,1.07,6.28,2.74,1.58,1.77,2.32,4.23,2.13,7.11l-.34,5.3-5.29.55c-.48.05-.95.07-1.41.07h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M521.67,419.84c1.63,1.63,2.56,3.88,2.7,6.53l.43,8.27c0,.13-.04.26-.13.35-.09.09-.22.14-.35.14l-8.52-.4c-2.86-.13-5.26-1.19-6.92-3.05-1.75-1.96-2.57-4.65-2.37-7.78l.37-5.69c.01-.23.19-.41.41-.43l5.68-.59c3.3-.34,6.14.42,8.22,2.2.17.15.33.3.49.45ZM523.84,434.18l-.4-7.76c-.14-2.65-1.13-4.84-2.86-6.33-1.88-1.61-4.48-2.29-7.52-1.98l-5.29.55-.34,5.3c-.19,2.88.55,5.34,2.13,7.11,1.5,1.67,3.67,2.62,6.28,2.74l8.01.38Z" fill="#fff"/>
                            <path d="M514.47,417.11c-.49,0-.99.03-1.51.08l-5.68.59c-.22.02-.4.21-.41.43l-.37,5.69c-.2,3.13.62,5.83,2.37,7.78,1.67,1.86,4.06,2.92,6.92,3.05l8.52.4s.01,0,.02,0c.12,0,.24-.05.33-.14.09-.09.14-.22.13-.35l-.43-8.27c-.14-2.66-1.07-4.9-2.7-6.53-.16-.16-.32-.31-.49-.45-1.75-1.5-4.05-2.28-6.71-2.28h0ZM523.84,434.18l-8.01-.38c-2.61-.12-4.78-1.07-6.28-2.74-1.58-1.77-2.32-4.23-2.13-7.11l.34-5.3,5.29-.55c.48-.05.95-.07,1.41-.07,2.44,0,4.53.7,6.11,2.05,1.74,1.49,2.73,3.68,2.86,6.33l.4,7.76h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <path d="M508.37,418.21l32.26,32.26c.18.18.18.47,0,.66-.18.18-.47.18-.66,0l-32.26-32.26c-.18-.18-.18-.47,0-.66s.47-.18.66,0Z" fill="#fff"/>
                        <path d="M508.05,418.07c-.12,0-.24.05-.33.14-.18.18-.18.47,0,.66l32.26,32.26c.09.09.21.14.33.14s.24-.05.33-.14c.18-.18.18-.47,0-.66l-32.26-32.26c-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                        <path d="M540.35,418.59c.18.18.18.47,0,.66l-31.88,31.88c-.18.18-.47.18-.66,0s-.18-.47,0-.66l31.88-31.88c.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M540.03,418.45c-.12,0-.24.05-.33.14l-31.88,31.88c-.18.18-.18.47,0,.66.09.09.21.14.33.14s.24-.05.33-.14l31.88-31.88c.18-.18.18-.47,0-.66-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                    </g>
                    <g>
                        <g>
                        <g>
                            <path d="M541.4,451.99c.07.07.12.17.13.28l.59,5.68c.34,3.3-.42,6.14-2.2,8.22-1.66,1.94-4.07,3.04-6.99,3.19l-8.27.43c-.13,0-.26-.04-.35-.13,0,0,0,0,0,0-.09-.09-.14-.22-.14-.35l.4-8.52c.13-2.86,1.19-5.26,3.05-6.92,1.96-1.75,4.65-2.57,7.78-2.37l5.69.37c.12,0,.22.06.3.13ZM525.13,468.83l7.76-.4c2.65-.14,4.84-1.13,6.33-2.86,1.61-1.88,2.29-4.48,1.98-7.52l-.55-5.29-5.3-.34c-2.88-.19-5.34.55-7.11,2.13-1.67,1.5-2.62,3.67-2.74,6.28l-.38,8.01Z" fill="#fff"/>
                            <path d="M534.49,451.46c-2.74,0-5.1.82-6.86,2.4-1.86,1.67-2.92,4.06-3.05,6.92l-.4,8.52c0,.13.04.26.14.35,0,0,0,0,0,0,.09.09.2.14.33.14,0,0,.02,0,.02,0l8.27-.43c2.91-.15,5.33-1.25,6.99-3.19,1.78-2.08,2.54-4.92,2.2-8.22l-.59-5.68c-.01-.11-.06-.21-.13-.28-.08-.08-.18-.13-.3-.13l-5.69-.37c-.31-.02-.62-.03-.92-.03h0ZM525.13,468.83l.38-8.01c.12-2.61,1.07-4.78,2.74-6.28,1.59-1.42,3.73-2.16,6.24-2.16.28,0,.57,0,.86.03l5.3.34.55,5.29c.31,3.04-.37,5.64-1.98,7.52-1.49,1.74-3.68,2.73-6.33,2.86l-7.76.4h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M524.81,468.82c.09.09.14.22.14.35l-.4,8.52c-.13,2.86-1.19,5.26-3.05,6.92-1.96,1.75-4.65,2.57-7.78,2.37l-5.69-.37c-.23-.01-.41-.19-.43-.41l-.59-5.68c-.34-3.3.42-6.14,2.2-8.22,1.66-1.94,4.07-3.04,6.99-3.19l8.27-.43c.13,0,.26.05.35.14ZM508.47,485.71l5.3.34c2.88.19,5.34-.55,7.11-2.13,1.67-1.5,2.62-3.67,2.74-6.28l.38-8.01-7.76.4c-2.65.14-4.84,1.13-6.33,2.86-1.61,1.88-2.29,4.48-1.98,7.52l.55,5.29Z" fill="#fff"/>
                            <path d="M524.48,468.69s-.01,0-.02,0l-8.27.43c-2.91.15-5.33,1.25-6.99,3.19-1.78,2.08-2.54,4.92-2.2,8.22l.59,5.68c.02.23.21.4.43.41l5.69.37c.31.02.62.03.92.03,2.74,0,5.1-.82,6.86-2.4,1.86-1.67,2.92-4.06,3.05-6.92l.4-8.52c0-.13-.04-.26-.14-.35-.08-.08-.21-.14-.33-.14h0ZM523.99,469.64l-.38,8.01c-.12,2.61-1.07,4.78-2.74,6.28-1.59,1.42-3.73,2.16-6.24,2.16-.28,0-.57,0-.86-.03l-5.3-.34-.55-5.29c-.31-3.04.37-5.64,1.98-7.52,1.49-1.74,3.68-2.73,6.33-2.86l7.76-.4h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <g>
                            <path d="M539.61,471.95c.11.11.22.23.33.35,1.75,1.96,2.57,4.65,2.37,7.78l-.37,5.69c-.01.23-.19.41-.41.43l-5.68.59c-3.3.34-6.14-.42-8.22-2.2-1.93-1.66-3.04-4.07-3.19-6.99l-.43-8.27c0-.13.04-.26.13-.35.09-.09.22-.14.35-.14l8.52.4c2.68.13,4.95,1.06,6.59,2.7ZM541.04,485.33l.34-5.3c.19-2.88-.55-5.34-2.13-7.11-1.5-1.67-3.67-2.62-6.28-2.74l-8.01-.38.4,7.76c.14,2.65,1.13,4.84,2.86,6.33,1.88,1.61,4.48,2.29,7.52,1.98l5.29-.55Z" fill="#fff"/>
                            <path d="M524.48,468.85c-.12,0-.24.05-.33.14-.09.09-.14.22-.13.35l.43,8.27c.15,2.91,1.25,5.33,3.19,6.99,1.75,1.5,4.05,2.28,6.71,2.28.49,0,.99-.03,1.51-.08l5.68-.59c.22-.02.4-.21.41-.43l.37-5.69c.2-3.13-.62-5.83-2.37-7.78-.11-.12-.22-.24-.33-.35-1.64-1.65-3.91-2.58-6.59-2.7l-8.52-.4s-.01,0-.02,0h0ZM534.35,485.95c-2.44,0-4.53-.7-6.11-2.05-1.74-1.49-2.73-3.68-2.86-6.33l-.4-7.76,8.01.38c2.61.12,4.78,1.07,6.28,2.74,1.58,1.77,2.32,4.23,2.13,7.11l-.34,5.3-5.29.55c-.48.05-.95.07-1.41.07h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M521.98,454.32c1.63,1.63,2.56,3.88,2.7,6.53l.43,8.27c0,.13-.04.26-.13.35-.09.09-.22.14-.35.14l-8.52-.4c-2.86-.13-5.26-1.19-6.92-3.05-1.75-1.96-2.57-4.65-2.37-7.78l.37-5.69c.01-.23.19-.41.41-.43l5.68-.59c3.3-.34,6.14.42,8.22,2.2.17.15.33.3.49.45ZM524.15,468.67l-.4-7.76c-.14-2.65-1.13-4.84-2.86-6.33-1.88-1.61-4.48-2.29-7.52-1.98l-5.29.55-.34,5.3c-.19,2.88.55,5.34,2.13,7.11,1.5,1.67,3.67,2.62,6.28,2.74l8.01.38Z" fill="#fff"/>
                            <path d="M514.78,451.59c-.49,0-.99.03-1.51.08l-5.68.59c-.22.02-.4.21-.41.43l-.37,5.69c-.2,3.13.62,5.83,2.37,7.78,1.67,1.86,4.06,2.92,6.92,3.05l8.52.4s.01,0,.02,0c.12,0,.24-.05.33-.14.09-.09.14-.22.13-.35l-.43-8.27c-.14-2.66-1.07-4.9-2.7-6.53-.16-.16-.32-.31-.49-.45-1.75-1.5-4.05-2.28-6.71-2.28h0ZM524.15,468.67l-8.01-.38c-2.61-.12-4.78-1.07-6.28-2.74-1.58-1.77-2.32-4.23-2.13-7.11l.34-5.3,5.29-.55c.48-.05.95-.07,1.41-.07,2.44,0,4.53.7,6.11,2.05,1.74,1.49,2.73,3.68,2.86,6.33l.4,7.76h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <path d="M508.68,452.7l32.26,32.26c.18.18.18.47,0,.66-.18.18-.47.18-.66,0l-32.26-32.26c-.18-.18-.18-.47,0-.66.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M508.35,452.56c-.12,0-.24.05-.33.14-.18.18-.18.47,0,.66l32.26,32.26c.09.09.21.14.33.14s.24-.05.33-.14c.18-.18.18-.47,0-.66l-32.26-32.26c-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                        <path d="M540.66,453.07c.18.18.18.47,0,.66l-31.88,31.88c-.18.18-.47.18-.66,0-.18-.18-.18-.47,0-.66l31.88-31.88c.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M540.34,452.94c-.12,0-.24.05-.33.14l-31.88,31.88c-.18.18-.18.47,0,.66.09.09.21.14.33.14s.24-.05.33-.14l31.88-31.88c.18-.18.18-.47,0-.66-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                    </g>
                    </g>
                    <g opacity=".6">
                    <g>
                        <g>
                        <g>
                            <path d="M610.05,348.63c.07.07.12.17.13.28l.59,5.68c.34,3.3-.42,6.14-2.2,8.22-1.66,1.94-4.07,3.04-6.99,3.19l-8.27.43c-.13,0-.26-.04-.35-.13,0,0,0,0,0,0-.09-.09-.14-.22-.14-.35l.4-8.52c.13-2.86,1.19-5.26,3.05-6.92,1.96-1.75,4.65-2.57,7.78-2.37l5.69.37c.12,0,.22.06.3.13ZM593.78,365.46l7.76-.4c2.65-.14,4.84-1.13,6.33-2.86,1.61-1.88,2.29-4.48,1.98-7.52l-.55-5.29-5.3-.34c-2.88-.19-5.34.55-7.11,2.13-1.67,1.5-2.62,3.67-2.74,6.28l-.38,8.01Z" fill="#fff"/>
                            <path d="M603.14,348.1c-2.74,0-5.1.82-6.86,2.4-1.86,1.67-2.92,4.06-3.05,6.92l-.4,8.52c0,.13.04.26.14.35,0,0,0,0,0,0,.09.09.2.13.33.13,0,0,.02,0,.02,0l8.27-.43c2.91-.15,5.33-1.25,6.99-3.19,1.78-2.08,2.54-4.92,2.2-8.22l-.59-5.68c-.01-.11-.06-.21-.13-.28-.08-.08-.18-.13-.3-.13l-5.69-.37c-.31-.02-.62-.03-.92-.03h0ZM593.78,365.46l.38-8.01c.12-2.61,1.07-4.78,2.74-6.28,1.59-1.42,3.73-2.16,6.24-2.16.28,0,.57,0,.86.03l5.3.34.55,5.29c.31,3.04-.37,5.64-1.98,7.52-1.49,1.74-3.68,2.73-6.33,2.86l-7.76.4h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M593.46,365.46c.09.09.14.22.14.35l-.4,8.52c-.13,2.86-1.19,5.26-3.05,6.92-1.96,1.75-4.65,2.57-7.78,2.37l-5.69-.37c-.23-.01-.41-.19-.43-.41l-.59-5.68c-.34-3.3.42-6.14,2.2-8.22,1.66-1.94,4.07-3.04,6.99-3.19l8.27-.43c.13,0,.26.05.35.14ZM577.12,382.35l5.3.34c2.88.19,5.34-.55,7.11-2.13,1.67-1.5,2.62-3.67,2.74-6.28l.38-8.01-7.76.4c-2.65.14-4.84,1.13-6.33,2.86-1.61,1.88-2.29,4.48-1.98,7.52l.55,5.29Z" fill="#fff"/>
                            <path d="M593.13,365.33s-.01,0-.02,0l-8.27.43c-2.91.15-5.33,1.25-6.99,3.19-1.78,2.08-2.54,4.92-2.2,8.22l.59,5.68c.02.23.21.4.43.41l5.69.37c.31.02.62.03.92.03,2.74,0,5.1-.82,6.86-2.4,1.86-1.67,2.92-4.06,3.05-6.92l.4-8.52c0-.13-.04-.26-.14-.35-.08-.08-.21-.14-.33-.14h0ZM592.65,366.28l-.38,8.01c-.12,2.61-1.07,4.78-2.74,6.28-1.59,1.42-3.73,2.16-6.24,2.16-.28,0-.57,0-.86-.03l-5.3-.34-.55-5.29c-.31-3.04.37-5.64,1.98-7.52,1.49-1.74,3.68-2.73,6.33-2.86l7.76-.4h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <g>
                            <path d="M608.26,368.59c.11.11.22.23.33.35,1.75,1.96,2.57,4.65,2.37,7.78l-.37,5.69c-.01.23-.19.41-.41.43l-5.68.59c-3.3.34-6.14-.42-8.22-2.2-1.93-1.66-3.04-4.07-3.19-6.99l-.43-8.27c0-.13.04-.26.13-.35.09-.09.22-.14.35-.14l8.52.4c2.68.13,4.95,1.06,6.59,2.7ZM609.69,381.96l.34-5.3c.19-2.88-.55-5.34-2.13-7.11-1.5-1.67-3.67-2.62-6.28-2.74l-8.01-.38.4,7.76c.14,2.65,1.13,4.84,2.86,6.33,1.88,1.61,4.48,2.29,7.52,1.98l5.29-.55Z" fill="#fff"/>
                            <path d="M593.13,365.49c-.12,0-.24.05-.33.14-.09.09-.14.22-.13.35l.43,8.27c.15,2.91,1.25,5.33,3.19,6.99,1.75,1.5,4.05,2.28,6.71,2.28.49,0,.99-.03,1.51-.08l5.68-.59c.22-.02.4-.21.41-.43l.37-5.69c.2-3.13-.62-5.83-2.37-7.78-.11-.12-.22-.24-.33-.35-1.64-1.64-3.91-2.58-6.59-2.7l-8.52-.4s-.01,0-.02,0h0ZM603,382.59c-2.44,0-4.53-.7-6.11-2.05-1.74-1.49-2.73-3.68-2.86-6.33l-.4-7.76,8.01.38c2.61.12,4.78,1.07,6.28,2.74,1.58,1.77,2.32,4.23,2.13,7.11l-.34,5.3-5.29.55c-.48.05-.95.07-1.41.07h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M590.63,350.96c1.63,1.63,2.56,3.88,2.7,6.53l.43,8.27c0,.13-.04.26-.13.35-.09.09-.22.14-.35.14l-8.52-.4c-2.86-.13-5.26-1.19-6.92-3.05-1.75-1.96-2.57-4.65-2.37-7.78l.37-5.69c.01-.23.19-.41.41-.43l5.68-.59c3.3-.34,6.14.42,8.22,2.2.17.15.33.3.49.45ZM592.8,365.31l-.4-7.76c-.14-2.65-1.13-4.84-2.86-6.33-1.88-1.61-4.48-2.29-7.52-1.98l-5.29.55-.34,5.3c-.19,2.88.55,5.34,2.13,7.11,1.5,1.67,3.67,2.62,6.28,2.74l8.01.38Z" fill="#fff"/>
                            <path d="M583.43,348.23c-.49,0-.99.03-1.51.08l-5.68.59c-.22.02-.4.21-.41.43l-.37,5.69c-.2,3.13.62,5.83,2.37,7.78,1.67,1.86,4.06,2.92,6.92,3.05l8.52.4s.01,0,.02,0c.12,0,.24-.05.33-.14.09-.09.14-.22.13-.35l-.43-8.27c-.14-2.66-1.07-4.9-2.7-6.53-.16-.16-.32-.31-.49-.45-1.75-1.5-4.05-2.28-6.71-2.28h0ZM592.8,365.31l-8.01-.38c-2.61-.12-4.78-1.07-6.28-2.74-1.58-1.77-2.32-4.23-2.13-7.11l.34-5.3,5.29-.55c.48-.05.95-.07,1.41-.07,2.44,0,4.53.7,6.11,2.05,1.74,1.49,2.73,3.68,2.86,6.33l.4,7.76h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <path d="M577.33,349.34l32.26,32.26c.18.18.18.47,0,.66s-.47.18-.66,0l-32.26-32.26c-.18-.18-.18-.47,0-.66.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M577.01,349.2c-.12,0-.24.05-.33.14-.18.18-.18.47,0,.66l32.26,32.26c.09.09.21.14.33.14s.24-.05.33-.14c.18-.18.18-.47,0-.66l-32.26-32.26c-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                        <path d="M609.31,349.71c.18.18.18.47,0,.66l-31.88,31.88c-.18.18-.47.18-.66,0-.18-.18-.18-.47,0-.66l31.88-31.88c.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M608.99,349.58c-.12,0-.24.05-.33.14l-31.88,31.88c-.18.18-.18.47,0,.66.09.09.21.14.33.14s.24-.05.33-.14l31.88-31.88c.18-.18.18-.47,0-.66-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                    </g>
                    <g>
                        <g>
                        <g>
                            <path d="M610.36,383.12c.07.07.12.17.13.28l.59,5.68c.34,3.3-.42,6.14-2.2,8.22-1.66,1.94-4.07,3.04-6.99,3.19l-8.27.43c-.13,0-.26-.04-.35-.13,0,0,0,0,0,0-.09-.09-.14-.22-.14-.35l.4-8.52c.13-2.86,1.19-5.26,3.05-6.92,1.96-1.75,4.65-2.57,7.78-2.37l5.69.37c.12,0,.22.06.3.13ZM594.09,399.95l7.76-.4c2.65-.14,4.84-1.13,6.33-2.86,1.61-1.88,2.29-4.48,1.98-7.52l-.55-5.29-5.3-.34c-2.88-.19-5.34.55-7.11,2.13-1.67,1.5-2.62,3.67-2.74,6.28l-.38,8.01Z" fill="#fff"/>
                            <path d="M603.45,382.59c-2.74,0-5.1.82-6.86,2.4-1.86,1.67-2.92,4.06-3.05,6.92l-.4,8.52c0,.13.04.26.14.35,0,0,0,0,0,0,.09.09.2.13.33.13,0,0,.02,0,.02,0l8.27-.43c2.91-.15,5.33-1.25,6.99-3.19,1.78-2.08,2.54-4.92,2.2-8.22l-.59-5.68c-.01-.11-.06-.21-.13-.28-.08-.08-.18-.13-.3-.13l-5.69-.37c-.31-.02-.62-.03-.92-.03h0ZM594.09,399.95l.38-8.01c.12-2.61,1.07-4.78,2.74-6.28,1.59-1.42,3.73-2.16,6.24-2.16.28,0,.57,0,.86.03l5.3.34.55,5.29c.31,3.04-.37,5.64-1.98,7.52-1.49,1.74-3.68,2.73-6.33,2.86l-7.76.4h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M593.77,399.95c.09.09.14.22.14.35l-.4,8.52c-.13,2.86-1.19,5.26-3.05,6.92-1.96,1.75-4.65,2.57-7.78,2.37l-5.69-.37c-.23-.01-.41-.19-.43-.41l-.59-5.68c-.34-3.3.42-6.14,2.2-8.22,1.66-1.94,4.07-3.04,6.99-3.19l8.27-.43c.13,0,.26.05.35.14ZM577.43,416.84l5.3.34c2.88.19,5.34-.55,7.11-2.13,1.67-1.5,2.62-3.67,2.74-6.28l.38-8.01-7.76.4c-2.65.14-4.84,1.13-6.33,2.86-1.61,1.88-2.29,4.48-1.98,7.52l.55,5.29Z" fill="#fff"/>
                            <path d="M593.44,399.82s-.01,0-.02,0l-8.27.43c-2.91.15-5.33,1.25-6.99,3.19-1.78,2.08-2.54,4.92-2.2,8.22l.59,5.68c.02.23.21.4.43.41l5.69.37c.31.02.62.03.92.03,2.74,0,5.1-.82,6.86-2.4,1.86-1.67,2.92-4.06,3.05-6.92l.4-8.52c0-.13-.04-.26-.14-.35-.08-.08-.21-.14-.33-.14h0ZM592.95,400.77l-.38,8.01c-.12,2.61-1.07,4.78-2.74,6.28-1.59,1.42-3.73,2.16-6.24,2.16-.28,0-.57,0-.86-.03l-5.3-.34-.55-5.29c-.31-3.04.37-5.64,1.98-7.52,1.49-1.74,3.68-2.73,6.33-2.86l7.76-.4h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <g>
                            <path d="M608.57,403.08c.11.11.22.23.33.35,1.75,1.96,2.57,4.65,2.37,7.78l-.37,5.69c-.01.23-.19.41-.41.43l-5.68.59c-3.3.34-6.14-.42-8.22-2.2-1.93-1.66-3.04-4.07-3.19-6.99l-.43-8.27c0-.13.04-.26.13-.35.09-.09.22-.14.35-.14l8.52.4c2.68.13,4.95,1.06,6.59,2.7ZM610,416.45l.34-5.3c.19-2.88-.55-5.34-2.13-7.11-1.5-1.67-3.67-2.62-6.28-2.74l-8.01-.38.4,7.76c.14,2.65,1.13,4.84,2.86,6.33,1.88,1.61,4.48,2.29,7.52,1.98l5.29-.55Z" fill="#fff"/>
                            <path d="M593.44,399.98c-.12,0-.24.05-.33.14-.09.09-.14.22-.13.35l.43,8.27c.15,2.91,1.25,5.33,3.19,6.99,1.75,1.5,4.05,2.28,6.71,2.28.49,0,.99-.03,1.51-.08l5.68-.59c.22-.02.4-.21.41-.43l.37-5.69c.2-3.13-.62-5.83-2.37-7.78-.11-.12-.22-.24-.33-.35-1.65-1.65-3.91-2.58-6.59-2.7l-8.52-.4s-.01,0-.02,0h0ZM603.31,417.07c-2.44,0-4.53-.7-6.11-2.05-1.74-1.49-2.73-3.68-2.86-6.33l-.4-7.76,8.01.38c2.61.12,4.78,1.07,6.28,2.74,1.58,1.77,2.32,4.23,2.13,7.11l-.34,5.3-5.29.55c-.48.05-.95.07-1.41.07h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M590.94,385.45c1.63,1.63,2.56,3.88,2.7,6.53l.43,8.27c0,.13-.04.26-.13.35-.09.09-.22.14-.35.14l-8.52-.4c-2.86-.13-5.26-1.19-6.92-3.05-1.75-1.96-2.57-4.65-2.37-7.78l.37-5.69c.01-.23.19-.41.41-.43l5.68-.59c3.3-.34,6.14.42,8.22,2.2.17.15.33.3.49.45ZM593.11,399.79l-.4-7.76c-.14-2.65-1.13-4.84-2.86-6.33-1.88-1.61-4.48-2.29-7.52-1.98l-5.29.55-.34,5.3c-.19,2.88.55,5.34,2.13,7.11,1.5,1.67,3.67,2.62,6.28,2.74l8.01.38Z" fill="#fff"/>
                            <path d="M583.74,382.72c-.49,0-.99.03-1.51.08l-5.68.59c-.22.02-.4.21-.41.43l-.37,5.69c-.2,3.13.62,5.83,2.37,7.78,1.67,1.86,4.06,2.92,6.92,3.05l8.52.4s.01,0,.02,0c.12,0,.24-.05.33-.14.09-.09.14-.22.13-.35l-.43-8.27c-.14-2.66-1.07-4.9-2.7-6.53-.16-.16-.32-.31-.49-.45-1.75-1.5-4.05-2.28-6.71-2.28h0ZM593.11,399.79l-8.01-.38c-2.61-.12-4.78-1.07-6.28-2.74-1.58-1.77-2.32-4.23-2.13-7.11l.34-5.3,5.29-.55c.48-.05.95-.07,1.41-.07,2.44,0,4.53.7,6.11,2.05,1.74,1.49,2.73,3.68,2.86,6.33l.4,7.76h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <path d="M577.64,383.83l32.26,32.26c.18.18.18.47,0,.66-.18.18-.47.18-.66,0l-32.26-32.26c-.18-.18-.18-.47,0-.66s.47-.18.66,0Z" fill="#fff"/>
                        <path d="M577.32,383.69c-.12,0-.24.05-.33.14-.18.18-.18.47,0,.66l32.26,32.26c.09.09.21.14.33.14s.24-.05.33-.14c.18-.18.18-.47,0-.66l-32.26-32.26c-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                        <path d="M609.62,384.2c.18.18.18.47,0,.66l-31.88,31.88c-.18.18-.47.18-.66,0-.18-.18-.18-.47,0-.66l31.88-31.88c.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M609.3,384.07c-.12,0-.24.05-.33.14l-31.88,31.88c-.18.18-.18.47,0,.66.09.09.21.14.33.14s.24-.05.33-.14l31.88-31.88c.18-.18.18-.47,0-.66-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                    </g>
                    <g>
                        <g>
                        <g>
                            <path d="M610.59,417.43c.07.07.12.17.13.28l.59,5.68c.34,3.3-.42,6.14-2.2,8.22-1.66,1.94-4.07,3.04-6.99,3.19l-8.27.43c-.13,0-.26-.04-.35-.13h0c-.09-.09-.14-.22-.14-.35l.4-8.52c.13-2.86,1.19-5.26,3.05-6.92,1.96-1.75,4.65-2.57,7.78-2.37l5.69.37c.12,0,.22.06.3.13ZM594.32,434.27l7.76-.4c2.65-.14,4.84-1.13,6.33-2.86,1.61-1.88,2.29-4.48,1.98-7.52l-.55-5.29-5.3-.34c-2.88-.19-5.34.55-7.11,2.13-1.67,1.5-2.62,3.67-2.74,6.28l-.38,8.01Z" fill="#fff"/>
                            <path d="M603.68,416.9c-2.74,0-5.1.82-6.86,2.4-1.86,1.67-2.92,4.06-3.05,6.92l-.4,8.52c0,.13.04.26.14.35,0,0,0,0,0,0,.09.09.2.14.33.14,0,0,.02,0,.02,0l8.27-.43c2.91-.15,5.33-1.25,6.99-3.19,1.78-2.08,2.54-4.92,2.2-8.22l-.59-5.68c-.01-.11-.06-.21-.13-.28-.08-.08-.18-.13-.3-.13l-5.69-.37c-.31-.02-.62-.03-.92-.03h0ZM594.32,434.27l.38-8.01c.12-2.61,1.07-4.78,2.74-6.28,1.59-1.42,3.73-2.16,6.24-2.16.28,0,.57,0,.86.03l5.3.34.55,5.29c.31,3.04-.37,5.64-1.98,7.52-1.49,1.74-3.68,2.73-6.33,2.86l-7.76.4h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M594,434.27c.09.09.14.22.14.35l-.4,8.52c-.13,2.86-1.19,5.26-3.05,6.92-1.96,1.75-4.65,2.57-7.78,2.37l-5.69-.37c-.23-.01-.41-.19-.43-.41l-.59-5.68c-.34-3.3.42-6.14,2.2-8.22,1.66-1.94,4.07-3.04,6.99-3.19l8.27-.43c.13,0,.26.05.35.14ZM577.66,451.16l5.3.34c2.88.19,5.34-.55,7.11-2.13,1.67-1.5,2.62-3.67,2.74-6.28l.38-8.01-7.76.4c-2.65.14-4.84,1.13-6.33,2.86-1.61,1.88-2.29,4.48-1.98,7.52l.55,5.29Z" fill="#fff"/>
                            <path d="M593.67,434.13s-.01,0-.02,0l-8.27.43c-2.91.15-5.33,1.25-6.99,3.19-1.78,2.08-2.54,4.92-2.2,8.22l.59,5.68c.02.23.21.4.43.41l5.69.37c.31.02.62.03.92.03,2.74,0,5.1-.82,6.86-2.4,1.86-1.67,2.92-4.06,3.05-6.92l.4-8.52c0-.13-.04-.26-.14-.35-.08-.08-.21-.14-.33-.14h0ZM593.18,435.09l-.38,8.01c-.12,2.61-1.07,4.78-2.74,6.28-1.59,1.42-3.73,2.16-6.24,2.16-.28,0-.57,0-.86-.03l-5.3-.34-.55-5.29c-.31-3.04.37-5.64,1.98-7.52,1.49-1.74,3.68-2.73,6.33-2.86l7.76-.4h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <g>
                            <path d="M608.8,437.4c.11.11.22.23.33.35,1.75,1.96,2.57,4.65,2.37,7.78l-.37,5.69c-.01.23-.19.41-.41.43l-5.68.59c-3.3.34-6.14-.42-8.22-2.2-1.93-1.66-3.04-4.07-3.19-6.99l-.43-8.27c0-.13.04-.26.13-.35.09-.09.22-.14.35-.14l8.52.4c2.68.13,4.95,1.06,6.59,2.7ZM610.23,450.77l.34-5.3c.19-2.88-.55-5.34-2.13-7.11-1.5-1.67-3.67-2.62-6.28-2.74l-8.01-.38.4,7.76c.14,2.65,1.13,4.84,2.86,6.33,1.88,1.61,4.48,2.29,7.52,1.98l5.29-.55Z" fill="#fff"/>
                            <path d="M593.67,434.3c-.12,0-.24.05-.33.14-.09.09-.14.22-.13.35l.43,8.27c.15,2.91,1.25,5.33,3.19,6.99,1.75,1.5,4.05,2.28,6.71,2.28.49,0,.99-.03,1.51-.08l5.68-.59c.22-.02.4-.21.41-.43l.37-5.69c.2-3.13-.62-5.83-2.37-7.78-.11-.12-.22-.24-.33-.35-1.65-1.65-3.91-2.58-6.59-2.7l-8.52-.4s-.01,0-.02,0h0ZM603.53,451.39c-2.44,0-4.53-.7-6.11-2.05-1.74-1.49-2.73-3.68-2.86-6.33l-.4-7.76,8.01.38c2.61.12,4.78,1.07,6.28,2.74,1.58,1.77,2.32,4.23,2.13,7.11l-.34,5.3-5.29.55c-.48.05-.95.07-1.41.07h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M591.17,419.77c1.63,1.63,2.56,3.88,2.7,6.53l.43,8.27c0,.13-.04.26-.13.35-.09.09-.22.14-.35.14l-8.52-.4c-2.86-.13-5.26-1.19-6.92-3.05-1.75-1.96-2.57-4.65-2.37-7.78l.37-5.69c.01-.23.19-.41.41-.43l5.68-.59c3.3-.34,6.14.42,8.22,2.2.17.15.33.3.49.45ZM593.34,434.11l-.4-7.76c-.14-2.65-1.13-4.84-2.86-6.33-1.88-1.61-4.48-2.29-7.52-1.98l-5.29.55-.34,5.3c-.19,2.88.55,5.34,2.13,7.11,1.5,1.67,3.67,2.62,6.28,2.74l8.01.38Z" fill="#fff"/>
                            <path d="M583.97,417.04c-.49,0-.99.03-1.51.08l-5.68.59c-.22.02-.4.21-.41.43l-.37,5.69c-.2,3.13.62,5.83,2.37,7.78,1.67,1.86,4.06,2.92,6.92,3.05l8.52.4s.01,0,.02,0c.12,0,.24-.05.33-.14.09-.09.14-.22.13-.35l-.43-8.27c-.14-2.66-1.07-4.9-2.7-6.53-.16-.16-.32-.31-.49-.45-1.75-1.5-4.05-2.28-6.71-2.28h0ZM593.34,434.11l-8.01-.38c-2.61-.12-4.78-1.07-6.28-2.74-1.58-1.77-2.32-4.23-2.13-7.11l.34-5.3,5.29-.55c.48-.05.95-.07,1.41-.07,2.44,0,4.53.7,6.11,2.05,1.74,1.49,2.73,3.68,2.86,6.33l.4,7.76h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <path d="M577.87,418.14l32.26,32.26c.18.18.18.47,0,.66-.18.18-.47.18-.66,0l-32.26-32.26c-.18-.18-.18-.47,0-.66.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M577.54,418.01c-.12,0-.24.05-.33.14-.18.18-.18.47,0,.66l32.26,32.26c.09.09.21.14.33.14s.24-.05.33-.14c.18-.18.18-.47,0-.66l-32.26-32.26c-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                        <path d="M609.85,418.52c.18.18.18.47,0,.66l-31.88,31.88c-.18.18-.47.18-.66,0s-.18-.47,0-.66l31.88-31.88c.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M609.52,418.38c-.12,0-.24.05-.33.14l-31.88,31.88c-.18.18-.18.47,0,.66.09.09.21.14.33.14s.24-.05.33-.14l31.88-31.88c.18-.18.18-.47,0-.66-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                    </g>
                    <g>
                        <g>
                        <g>
                            <path d="M610.9,451.92c.07.07.12.17.13.28l.59,5.68c.34,3.3-.42,6.14-2.2,8.22-1.66,1.94-4.07,3.04-6.99,3.19l-8.27.43c-.13,0-.26-.04-.35-.13,0,0,0,0,0,0-.09-.09-.14-.22-.14-.35l.4-8.52c.13-2.86,1.19-5.26,3.05-6.92,1.96-1.75,4.65-2.57,7.78-2.37l5.69.37c.12,0,.22.06.3.13ZM594.63,468.76l7.76-.4c2.65-.14,4.84-1.13,6.33-2.86,1.61-1.88,2.29-4.48,1.98-7.52l-.55-5.29-5.3-.34c-2.88-.19-5.34.55-7.11,2.13-1.67,1.5-2.62,3.67-2.74,6.28l-.38,8.01Z" fill="#fff"/>
                            <path d="M603.99,451.39c-2.74,0-5.1.82-6.86,2.4-1.86,1.67-2.92,4.06-3.05,6.92l-.4,8.52c0,.13.04.26.14.35,0,0,0,0,0,0,.09.09.2.14.33.14,0,0,.02,0,.02,0l8.27-.43c2.91-.15,5.33-1.25,6.99-3.19,1.78-2.08,2.54-4.92,2.2-8.22l-.59-5.68c-.01-.11-.06-.21-.13-.28-.08-.08-.18-.13-.3-.13l-5.69-.37c-.31-.02-.62-.03-.92-.03h0ZM594.63,468.76l.38-8.01c.12-2.61,1.07-4.78,2.74-6.28,1.59-1.42,3.73-2.16,6.24-2.16.28,0,.57,0,.86.03l5.3.34.55,5.29c.31,3.04-.37,5.64-1.98,7.52-1.49,1.74-3.68,2.73-6.33,2.86l-7.76.4h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M594.31,468.76c.09.09.14.22.14.35l-.4,8.52c-.13,2.86-1.19,5.26-3.05,6.92-1.96,1.75-4.65,2.57-7.78,2.37l-5.69-.37c-.23-.01-.41-.19-.43-.41l-.59-5.68c-.34-3.3.42-6.14,2.2-8.22,1.66-1.94,4.07-3.04,6.99-3.19l8.27-.43c.13,0,.26.05.35.14ZM577.97,485.65l5.3.34c2.88.19,5.34-.55,7.11-2.13,1.67-1.5,2.62-3.67,2.74-6.28l.38-8.01-7.76.4c-2.65.14-4.84,1.13-6.33,2.86-1.61,1.88-2.29,4.48-1.98,7.52l.55,5.29Z" fill="#fff"/>
                            <path d="M593.98,468.62s-.01,0-.02,0l-8.27.43c-2.91.15-5.33,1.25-6.99,3.19-1.78,2.08-2.54,4.92-2.2,8.22l.59,5.68c.02.23.21.4.43.41l5.69.37c.31.02.62.03.92.03,2.74,0,5.1-.82,6.86-2.4,1.86-1.67,2.92-4.06,3.05-6.92l.4-8.52c0-.13-.04-.26-.14-.35-.08-.08-.21-.14-.33-.14h0ZM593.49,469.58l-.38,8.01c-.12,2.61-1.07,4.78-2.74,6.28-1.59,1.42-3.73,2.16-6.24,2.16-.28,0-.57,0-.86-.03l-5.3-.34-.55-5.29c-.31-3.04.37-5.64,1.98-7.52,1.49-1.74,3.68-2.73,6.33-2.86l7.76-.4h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <g>
                            <path d="M609.11,471.89c.11.11.22.23.33.35,1.75,1.96,2.57,4.65,2.37,7.78l-.37,5.69c-.01.23-.19.41-.41.43l-5.68.59c-3.3.34-6.14-.42-8.22-2.2-1.93-1.66-3.04-4.07-3.19-6.99l-.43-8.27c0-.13.04-.26.13-.35.09-.09.22-.14.35-.14l8.52.4c2.68.13,4.95,1.06,6.59,2.7ZM610.54,485.26l.34-5.3c.19-2.88-.55-5.34-2.13-7.11-1.5-1.67-3.67-2.62-6.28-2.74l-8.01-.38.4,7.76c.14,2.65,1.13,4.84,2.86,6.33,1.88,1.61,4.48,2.29,7.52,1.98l5.29-.55Z" fill="#fff"/>
                            <path d="M593.98,468.78c-.12,0-.24.05-.33.14-.09.09-.14.22-.13.35l.43,8.27c.15,2.91,1.25,5.33,3.19,6.99,1.75,1.5,4.05,2.28,6.71,2.28.49,0,.99-.03,1.51-.08l5.68-.59c.22-.02.4-.21.41-.43l.37-5.69c.2-3.13-.62-5.83-2.37-7.78-.11-.12-.22-.24-.33-.35-1.65-1.64-3.91-2.58-6.59-2.7l-8.52-.4s-.01,0-.02,0h0ZM603.84,485.88c-2.44,0-4.53-.7-6.11-2.05-1.74-1.49-2.73-3.68-2.86-6.33l-.4-7.76,8.01.38c2.61.12,4.78,1.07,6.28,2.74,1.58,1.77,2.32,4.23,2.13,7.11l-.34,5.3-5.29.55c-.48.05-.95.07-1.41.07h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                            <path d="M591.48,454.26c1.63,1.63,2.56,3.88,2.7,6.53l.43,8.27c0,.13-.04.26-.13.35-.09.09-.22.14-.35.14l-8.52-.4c-2.86-.13-5.26-1.19-6.92-3.05-1.75-1.96-2.57-4.65-2.37-7.78l.37-5.69c.01-.23.19-.41.41-.43l5.68-.59c3.3-.34,6.14.42,8.22,2.2.17.15.33.3.49.45ZM593.65,468.6l-.4-7.76c-.14-2.65-1.13-4.84-2.86-6.33-1.88-1.61-4.48-2.29-7.52-1.98l-5.29.55-.34,5.3c-.19,2.88.55,5.34,2.13,7.11,1.5,1.67,3.67,2.62,6.28,2.74l8.01.38Z" fill="#fff"/>
                            <path d="M584.28,451.53c-.49,0-.99.03-1.51.08l-5.68.59c-.22.02-.4.21-.41.43l-.37,5.69c-.2,3.13.62,5.83,2.37,7.78,1.67,1.86,4.06,2.92,6.92,3.05l8.52.4s.01,0,.02,0c.12,0,.24-.05.33-.14.09-.09.14-.22.13-.35l-.43-8.27c-.14-2.66-1.07-4.9-2.7-6.53-.16-.16-.32-.31-.49-.45-1.75-1.5-4.05-2.28-6.71-2.28h0ZM593.65,468.6l-8.01-.38c-2.61-.12-4.78-1.07-6.28-2.74-1.58-1.77-2.32-4.23-2.13-7.11l.34-5.3,5.29-.55c.48-.05.95-.07,1.41-.07,2.44,0,4.53.7,6.11,2.05,1.74,1.49,2.73,3.68,2.86,6.33l.4,7.76h0Z" fill="#efe7da"/>
                        </g>
                        </g>
                        <g>
                        <path d="M578.18,452.63l32.26,32.26c.18.18.18.47,0,.66-.18.18-.47.18-.66,0l-32.26-32.26c-.18-.18-.18-.47,0-.66.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M577.85,452.5c-.12,0-.24.05-.33.14-.18.18-.18.47,0,.66l32.26,32.26c.09.09.21.14.33.14s.24-.05.33-.14c.18-.18.18-.47,0-.66l-32.26-32.26c-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                        <g>
                        <path d="M610.16,453.01c.18.18.18.47,0,.66l-31.88,31.88c-.18.18-.47.18-.66,0-.18-.18-.18-.47,0-.66l31.88-31.88c.18-.18.47-.18.66,0Z" fill="#fff"/>
                        <path d="M609.83,452.87c-.12,0-.24.05-.33.14l-31.88,31.88c-.18.18-.18.47,0,.66.09.09.21.14.33.14s.24-.05.33-.14l31.88-31.88c.18-.18.18-.47,0-.66-.09-.09-.21-.14-.33-.14h0Z" fill="#efe7da"/>
                        </g>
                    </g>
                    </g>
                </g>
                <g id="Couch">
                    <g>
                    <rect x="438.28" y="460.25" width="52.36" height="52.36" rx="8.6" ry="8.6" transform="translate(-21.96 950.89) rotate(-90)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M491.02,463.32v46.22c0,1.9-1.55,3.45-3.45,3.45h-46.22c-1.9,0-3.45-1.55-3.45-3.45v-46.22c0-1.9,1.55-3.45,3.45-3.45h46.22c1.9,0,3.45,1.55,3.45,3.45ZM438.66,509.54c0,1.48,1.21,2.69,2.69,2.69h46.22c1.48,0,2.69-1.21,2.69-2.69v-46.22c0-1.48-1.21-2.69-2.69-2.69h-46.22c-1.48,0-2.69,1.21-2.69,2.69v46.22Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M446.74,311.93h43.76v43.76c0,4.74-3.85,8.6-8.6,8.6h-35.16c-4.74,0-8.6-3.85-8.6-8.6v-35.16c0-4.74,3.85-8.6,8.6-8.6Z" transform="translate(126.21 802.43) rotate(-90)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M490.88,315v46.22c0,1.9-1.55,3.45-3.45,3.45h-46.22c-1.9,0-3.45-1.55-3.45-3.45v-49.67h49.67c1.9,0,3.45,1.55,3.45,3.45ZM438.52,361.22c0,1.48,1.21,2.69,2.69,2.69h46.22c1.48,0,2.69-1.21,2.69-2.69v-46.22c0-1.48-1.21-2.69-2.69-2.69h-48.91v48.91Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M385.79,311.93h48.2c2.29,0,4.16,1.86,4.16,4.16v48.2h-43.76c-4.74,0-8.6-3.85-8.6-8.6v-43.76h0Z" transform="translate(73.86 750.08) rotate(-90)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M438.52,311.55v49.67c0,1.9-1.55,3.45-3.45,3.45h-49.67v-51.25c0-1.03.84-1.86,1.86-1.86h51.25ZM386.17,363.91h48.91c1.48,0,2.69-1.21,2.69-2.69v-48.91h-50.49c-.61,0-1.1.49-1.1,1.1v50.49Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M385.79,364.29h52.36v52.36h-43.76c-4.74,0-8.6-3.85-8.6-8.6v-43.76h0Z" transform="translate(823.93 780.93) rotate(180)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M438.52,367.36v49.67h-53.11v-53.11h49.67c1.9,0,3.45,1.55,3.45,3.45ZM437.76,416.26v-48.91c0-1.48-1.21-2.69-2.69-2.69h-48.91v51.6h51.6Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <rect x="385.79" y="416.64" width="52.36" height="52.36" transform="translate(823.93 885.64) rotate(180)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M438.52,416.26v53.11h-53.11v-53.11h53.11ZM437.76,468.62v-51.6h-51.6v51.6h51.6Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <rect x="385.79" y="469" width="52.36" height="51.27" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M438.52,468.62v52.03h-53.11v-52.03h53.11ZM437.76,519.89v-50.51h-51.6v50.51h51.6Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <g>
                        <path d="M461.84,292.94h9.67v47.66c0,2.59-2.11,4.7-4.7,4.7h-4.97c-2.59,0-4.7-2.11-4.7-4.7v-42.96c0-2.59,2.11-4.7,4.7-4.7Z" transform="translate(145.21 783.44) rotate(-90)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M490.88,315v8.23c0,1.9-1.55,3.45-3.45,3.45h-46.22c-1.9,0-3.45-1.55-3.45-3.45v-11.67h49.67c1.9,0,3.45,1.55,3.45,3.45ZM438.52,323.23c0,1.48,1.21,2.69,2.69,2.69h46.22c1.48,0,2.69-1.21,2.69-2.69v-8.23c0-1.48-1.21-2.69-2.69-2.69h-48.91v10.92Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="462.12" y="286.45" width="4.4" height="52.36" rx="1.44" ry="1.44" transform="translate(151.69 776.95) rotate(-90)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M490.88,311.83v1.59c0,.98-.8,1.78-1.78,1.78h-49.55c-.98,0-1.78-.8-1.78-1.78v-1.59c0-.98.8-1.78,1.78-1.78h49.55c.98,0,1.78.8,1.78,1.78ZM438.52,313.43c0,.56.46,1.02,1.02,1.02h49.55c.56,0,1.02-.46,1.02-1.02v-1.59c0-.56-.46-1.02-1.02-1.02h-49.55c-.56,0-1.02.46-1.02,1.02v1.59Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    </g>
                    <g>
                    <path d="M409.48,292.94h8.08c.88,0,1.59.71,1.59,1.59v46.07c0,2.59-2.11,4.7-4.7,4.7h-4.97c-2.59,0-4.7-2.11-4.7-4.7v-42.96c0-2.59,2.11-4.7,4.7-4.7Z" transform="translate(92.85 731.08) rotate(-90)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M438.52,315v8.23c0,1.9-1.55,3.45-3.45,3.45h-46.22c-1.9,0-3.45-1.55-3.45-3.45v-10.26c0-.78.64-1.42,1.42-1.42h48.25c1.9,0,3.45,1.55,3.45,3.45ZM386.17,323.23c0,1.48,1.21,2.69,2.69,2.69h46.22c1.48,0,2.69-1.21,2.69-2.69v-8.23c0-1.48-1.21-2.69-2.69-2.69h-48.25c-.36,0-.66.3-.66.66v10.26Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M389.67,314.14l11.63,12.16v33.48c0,2.49-2.02,4.51-4.51,4.51h-9.85v-47.84c0-2.49.24-2.31,2.74-2.31Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M401.67,326.14v33.63c0,2.7-2.2,4.89-4.89,4.89h-10.23v-48.22c0-1.27.07-1.9.46-2.29.42-.41,1.04-.41,2.18-.4h.64s11.84,12.39,11.84,12.39ZM387.31,363.91h9.47c2.28,0,4.14-1.85,4.14-4.13v-33.32l-11.41-11.93h-.32c-.87,0-1.45,0-1.64.18-.2.19-.23.79-.23,1.75v47.46Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M385.79,312.63v49.46c0,1.22.99,2.2,2.2,2.2s2.2-.99,2.2-2.2v-47.26h45.75c1.22,0,2.2-.99,2.2-2.2s-.99-2.2-2.2-2.2h-47.95c-1.22,0-2.2.99-2.2,2.2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M438.52,312.63c0,1.42-1.16,2.58-2.58,2.58h-45.37v46.88c0,1.42-1.16,2.58-2.58,2.58s-2.58-1.16-2.58-2.58v-49.46c0-1.42,1.16-2.58,2.58-2.58h47.95c1.42,0,2.58,1.16,2.58,2.58ZM386.17,362.09c0,1,.82,1.82,1.82,1.82s1.82-.82,1.82-1.82v-47.64h46.13c1,0,1.82-.82,1.82-1.82s-.82-1.82-1.82-1.82h-47.95c-1,0-1.82.82-1.82,1.82v49.46Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <g>
                        <path d="M391.99,364.29h9.67v47.66c0,2.59-2.11,4.7-4.7,4.7h-4.97c-2.59,0-4.7-2.11-4.7-4.7v-42.96c0-2.59,2.11-4.7,4.7-4.7Z" transform="translate(788.95 780.93) rotate(-180)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M402.04,367.36v46.22c0,1.9-1.55,3.45-3.45,3.45h-11.67v-49.67c0-1.9,1.55-3.45,3.45-3.45h8.23c1.9,0,3.45,1.55,3.45,3.45ZM387.67,416.26h10.92c1.48,0,2.69-1.21,2.69-2.69v-46.22c0-1.48-1.21-2.69-2.69-2.69h-8.23c-1.48,0-2.69,1.21-2.69,2.69v48.91Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="385.79" y="364.29" width="4.4" height="52.36" rx="1.44" ry="1.44" transform="translate(775.98 780.93) rotate(-180)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M390.57,365.69v49.55c0,.98-.8,1.78-1.78,1.78h-1.59c-.98,0-1.78-.8-1.78-1.78v-49.55c0-.98.8-1.78,1.78-1.78h1.59c.98,0,1.78.8,1.78,1.78ZM386.17,415.24c0,.56.46,1.02,1.02,1.02h1.59c.56,0,1.02-.46,1.02-1.02v-49.55c0-.56-.46-1.02-1.02-1.02h-1.59c-.56,0-1.02.46-1.02,1.02v49.55Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    </g>
                    <g>
                    <g>
                        <path d="M392.02,416.64h9.67v47.66c0,2.59-2.11,4.7-4.7,4.7h-4.97c-2.59,0-4.7-2.11-4.7-4.7v-42.96c0-2.59,2.11-4.7,4.7-4.7Z" transform="translate(789 885.64) rotate(180)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M402.06,419.71v46.22c0,1.9-1.55,3.45-3.45,3.45h-11.67v-49.67c0-1.9,1.55-3.45,3.45-3.45h8.23c1.9,0,3.45,1.55,3.45,3.45ZM387.7,468.62h10.92c1.48,0,2.69-1.21,2.69-2.69v-46.22c0-1.48-1.21-2.69-2.69-2.69h-8.23c-1.48,0-2.69,1.21-2.69,2.69v48.91Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="385.82" y="416.64" width="4.4" height="52.36" rx="1.44" ry="1.44" transform="translate(776.03 885.64) rotate(-180)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M390.6,418.05v49.55c0,.98-.8,1.78-1.78,1.78h-1.59c-.98,0-1.78-.8-1.78-1.78v-49.55c0-.98.8-1.78,1.78-1.78h1.59c.98,0,1.78.8,1.78,1.78ZM386.2,467.59c0,.56.46,1.02,1.02,1.02h1.59c.56,0,1.02-.46,1.02-1.02v-49.55c0-.56-.46-1.02-1.02-1.02h-1.59c-.56,0-1.02.46-1.02,1.02v49.55Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    </g>
                    <g>
                    <path d="M409.48,487.97h4.97c2.59,0,4.7,2.11,4.7,4.7v46.07c0,.88-.71,1.59-1.59,1.59h-8.08c-2.59,0-4.7-2.11-4.7-4.7v-42.96c0-2.59,2.11-4.7,4.7-4.7Z" transform="translate(926.11 102.18) rotate(90)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M438.52,510.03v8.23c0,1.9-1.55,3.45-3.45,3.45h-48.25c-.78,0-1.42-.64-1.42-1.42v-10.26c0-1.9,1.55-3.45,3.45-3.45h46.22c1.9,0,3.45,1.55,3.45,3.45ZM386.17,520.29c0,.36.3.66.66.66h48.25c1.48,0,2.69-1.21,2.69-2.69v-8.23c0-1.48-1.21-2.69-2.69-2.69h-46.22c-1.48,0-2.69,1.21-2.69,2.69v10.26Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M389.67,519.12l11.63-12.16v-33.48c0-2.49-2.02-4.51-4.51-4.51h-9.85v47.84c0,2.49.24,2.31,2.74,2.31Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M401.67,473.49v33.63l-11.84,12.38h-.64c-1.14,0-1.76.01-2.18-.4-.39-.39-.46-1.02-.46-2.28v-48.22h10.23c2.7,0,4.89,2.2,4.89,4.89ZM400.91,506.81v-33.32c0-2.28-1.86-4.14-4.14-4.14h-9.47v47.46c0,.96.04,1.55.23,1.75.19.19.77.19,1.64.18h.32s11.41-11.93,11.41-11.93Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M490.64,311.13v49.46c0,1.22-.99,2.2-2.2,2.2s-2.2-.99-2.2-2.2v-47.26h-45.75c-1.22,0-2.2-.99-2.2-2.2s.99-2.2,2.2-2.2h47.95c1.22,0,2.2.99,2.2,2.2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M437.9,311.13c0-1.42,1.16-2.58,2.58-2.58h47.95c1.42,0,2.58,1.16,2.58,2.58v49.46c0,1.42-1.16,2.58-2.58,2.58s-2.58-1.16-2.58-2.58v-46.88h-45.37c-1.42,0-2.58-1.16-2.58-2.58ZM490.26,311.13c0-1-.82-1.82-1.82-1.82h-47.95c-1,0-1.82.82-1.82,1.82s.82,1.82,1.82,1.82h46.13v47.64c0,1,.82,1.82,1.82,1.82s1.82-.82,1.82-1.82v-49.46Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <g>
                        <path d="M398.45,504.81c-.18-.1-.21-.33-.07-.48,1.13-1.11,5.26-5.17,6.61-6.8,1.36-1.62,4.61-6.39,5.5-7.71.12-.17.36-.18.49-.01,1.04,1.36,5.51,5.92,7.15,7.28,1.6,1.34,5.91,4.18,7.33,4.84.19.09.24.35.08.49-1.19,1.13-5.35,5.07-6.69,6.68-1.36,1.62-4.53,6.46-5.4,7.8-.11.17-.36.18-.48.02-1.01-1.26-2.45-3.54-6.58-6.87-1.65-1.33-6.54-4.49-7.94-5.25Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M426.02,502.2c0,.19-.08.36-.21.49-1.23,1.16-5.33,5.06-6.66,6.65-1.33,1.6-4.45,6.35-5.37,7.77-.12.18-.32.3-.54.31-.22.01-.43-.08-.56-.25-.16-.2-.33-.43-.52-.68-1.02-1.34-2.55-3.36-6-6.14-1.58-1.28-6.44-4.43-7.89-5.21-.19-.1-.32-.29-.35-.5-.03-.21.04-.43.2-.58,1.21-1.18,5.25-5.17,6.59-6.77,1.33-1.6,4.53-6.28,5.48-7.68.12-.18.33-.29.54-.3.22,0,.43.09.56.27,1.04,1.35,5.48,5.88,7.09,7.22,1.59,1.32,5.85,4.14,7.25,4.79.21.09.35.28.39.51,0,.04,0,.07,0,.11ZM413.2,516.61c1-1.53,4.03-6.15,5.36-7.75,1.33-1.59,5.31-5.38,6.64-6.64-1.56-.76-5.7-3.49-7.31-4.84-1.6-1.34-5.97-5.78-7.14-7.26-1.02,1.51-4.14,6.06-5.46,7.65-1.34,1.6-5.26,5.48-6.56,6.75,1.6.89,6.3,3.94,7.91,5.24,3.52,2.84,5.09,4.9,6.13,6.27.16.21.3.4.44.57Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M391.88,479.92c-.12-.16-.05-.39.14-.46,1.5-.52,6.97-2.42,8.89-3.3,1.92-.88,6.9-3.79,8.28-4.61.18-.1.4,0,.44.2.36,1.67,2.44,7.71,3.33,9.65.87,1.9,3.54,6.31,4.55,7.52.14.16.06.41-.14.48-1.56.51-7,2.29-8.91,3.17-1.92.89-6.86,3.9-8.22,4.73-.17.11-.4.01-.45-.19-.37-1.57-.69-4.25-3-9.03-.92-1.91-3.98-6.86-4.92-8.15Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M417.98,489.1c0,.06,0,.13-.03.19-.06.22-.23.39-.44.46-1.6.52-6.98,2.28-8.87,3.15-1.89.87-6.74,3.83-8.18,4.71-.19.11-.42.13-.62.05-.2-.08-.35-.26-.4-.47-.06-.25-.12-.53-.18-.84-.35-1.64-.87-4.13-2.79-8.12-.88-1.83-3.92-6.76-4.89-8.09h0c-.13-.18-.16-.4-.1-.6.07-.21.22-.37.43-.44,1.6-.55,6.96-2.42,8.86-3.29,1.9-.87,6.79-3.73,8.25-4.59.19-.11.42-.12.62-.04.2.09.34.27.39.48.36,1.67,2.43,7.66,3.31,9.57.86,1.88,3.51,6.25,4.49,7.43.1.12.16.28.16.44ZM400.15,496.91c1.56-.96,6.28-3.83,8.17-4.7,1.88-.87,7.11-2.58,8.84-3.15-1.08-1.35-3.65-5.6-4.53-7.51-.87-1.9-2.91-7.78-3.34-9.62-1.57.92-6.33,3.7-8.22,4.57-1.89.87-7.1,2.69-8.82,3.28,1.07,1.49,4,6.26,4.89,8.12,1.96,4.08,2.49,6.61,2.85,8.29.05.26.1.49.15.71Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    </g>
                    <g>
                    <g>
                        <path d="M397.28,333.26c.02-.2.23-.32.41-.25,1.46.61,6.81,2.83,8.83,3.45,2.02.62,7.68,1.76,9.24,2.08.2.04.3.26.2.44-.85,1.49-3.31,7.38-3.93,9.42-.61,2-1.56,7.07-1.61,8.64,0,.21-.23.35-.42.26-1.5-.66-6.75-2.96-8.76-3.57-2.02-.62-7.71-1.66-9.29-1.94-.2-.04-.31-.26-.21-.44.76-1.42,2.31-3.63,3.78-8.73.59-2.04,1.6-7.77,1.75-9.36Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M416.39,338.83c0,.12-.03.23-.09.34-.84,1.48-3.29,7.33-3.9,9.34-.6,1.98-1.54,7-1.6,8.54,0,.23-.13.43-.32.55-.19.12-.43.14-.64.05-1.54-.68-6.73-2.95-8.71-3.55-1.98-.61-7.58-1.63-9.24-1.93-.21-.04-.4-.18-.49-.37-.09-.19-.09-.43.01-.62.12-.23.26-.47.42-.75.84-1.46,2.1-3.66,3.33-7.91.56-1.95,1.58-7.66,1.74-9.29h0c.02-.22.14-.41.33-.52.19-.11.41-.13.61-.04,1.56.65,6.8,2.83,8.8,3.44,1.99.61,7.55,1.73,9.21,2.07.21.04.4.19.49.38.04.09.06.19.06.28ZM410.05,356.9c.09-1.73,1.01-6.61,1.62-8.62.61-2,3.01-7.75,3.91-9.4-1.79-.36-7.2-1.46-9.17-2.06-1.99-.61-7.09-2.72-8.77-3.42-.2,1.82-1.18,7.33-1.75,9.32-1.25,4.35-2.54,6.59-3.4,8.08-.13.23-.25.44-.36.63,1.8.32,7.24,1.33,9.22,1.93,1.98.61,7.02,2.8,8.69,3.54ZM397.66,333.29h0s0,0,0,0Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <path d="M417.66,317.54c.1-.17.34-.2.48-.05,1.06,1.18,4.93,5.48,6.5,6.91,1.56,1.43,6.18,4.88,7.46,5.84.16.12.16.37,0,.49-1.4.98-6.15,5.24-7.59,6.82-1.41,1.54-4.44,5.72-5.16,7.11-.1.19-.36.22-.49.06-1.07-1.24-4.83-5.56-6.38-6.98-1.56-1.43-6.26-4.81-7.56-5.74-.17-.12-.17-.36,0-.48,1.3-.95,3.64-2.29,7.16-6.27,1.4-1.59,4.77-6.33,5.6-7.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M432.6,330.48h0c0,.23-.11.43-.29.56-1.4.98-6.11,5.21-7.53,6.76-1.39,1.53-4.4,5.66-5.1,7.03-.1.2-.3.34-.52.36-.22.03-.45-.06-.59-.23-1.1-1.28-4.82-5.55-6.35-6.95-1.54-1.4-6.15-4.73-7.52-5.71-.18-.13-.28-.33-.28-.55.01-.22.1-.42.28-.55.21-.15.44-.31.7-.49,1.38-.96,3.47-2.4,6.4-5.72,1.34-1.52,4.71-6.24,5.56-7.65h0c.11-.19.3-.31.52-.33.22-.02.42.06.57.22,1.13,1.26,4.93,5.47,6.47,6.88,1.54,1.4,6.08,4.81,7.43,5.82.17.13.27.33.27.55ZM419.06,344.38c.82-1.52,3.74-5.53,5.16-7.09,1.41-1.54,6.04-5.71,7.57-6.81-1.46-1.09-5.87-4.4-7.4-5.8-1.54-1.4-5.24-5.5-6.45-6.86-.96,1.56-4.22,6.12-5.58,7.67-2.99,3.39-5.12,4.87-6.53,5.84-.22.15-.41.29-.59.42,1.49,1.06,5.96,4.3,7.5,5.7,1.53,1.4,5.14,5.54,6.33,6.93Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    </g>
                    <path d="M490.5,311.93h40.47c6.57,0,11.89,5.32,11.89,11.89v28.58c0,6.57-5.32,11.89-11.89,11.89h-28.58c-6.57,0-11.89-5.32-11.89-11.89" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M490.12,311.55h49.67c1.9,0,3.45,1.55,3.45,3.45v46.22c0,1.9-1.55,3.45-3.45,3.45h-46.22c-1.9,0-3.45-1.55-3.45-3.45" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M490.88,361.22c0,1.48,1.21,2.69,2.69,2.69h46.22c1.48,0,2.69-1.21,2.69-2.69v-46.22c0-1.48-1.21-2.69-2.69-2.69h-48.91" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M490.5,311.93h45.86c3.59,0,6.5,2.91,6.5,6.5v1.37c0,3.59-2.91,6.5-6.5,6.5h-39.36c-3.59,0-6.5-2.91-6.5-6.5" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M490.12,311.55h49.67c1.9,0,3.45,1.55,3.45,3.45v8.23c0,1.9-1.55,3.45-3.45,3.45h-46.22c-1.9,0-3.45-1.55-3.45-3.45" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M490.88,323.23c0,1.48,1.21,2.69,2.69,2.69h46.22c1.48,0,2.69-1.21,2.69-2.69v-8.23c0-1.48-1.21-2.69-2.69-2.69h-48.91" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M490.5,312.42c0-1.1.89-1.99,1.99-1.99h48.37c1.1,0,1.99.89,1.99,1.99v.42c0,1.1-.89,1.99-1.99,1.99h-48.37c-1.1,0-1.99-.89-1.99-1.99" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M491.9,310.05h49.55c.98,0,1.78.8,1.78,1.78v1.59c0,.98-.8,1.78-1.78,1.78h-49.55" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M491.9,314.45h49.55c.56,0,1.02-.46,1.02-1.02v-1.59c0-.56-.46-1.02-1.02-1.02h-49.55" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M490.64,311.13c0-1.22.99-2.2,2.2-2.2h47.95c1.22,0,2.2.99,2.2,2.2v49.46c0,1.22-.99,2.2-2.2,2.2s-2.2-.99-2.2-2.2v-47.26h-45.75c-1.22,0-2.2-.99-2.2-2.2" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M490.26,311.13c0-1.42,1.16-2.58,2.58-2.58h47.95c1.42,0,2.58,1.16,2.58,2.58v49.46c0,1.42-1.16,2.58-2.58,2.58s-2.58-1.16-2.58-2.58v-46.88h-45.37c-1.42,0-2.58-1.16-2.58-2.58" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M491.02,311.13c0,1,.82,1.82,1.82,1.82h46.13v47.64c0,1,.82,1.82,1.82,1.82s1.82-.82,1.82-1.82v-49.46c0-1-.82-1.82-1.82-1.82h-47.95c-1,0-1.82.82-1.82,1.82" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="TV_stand">
                    <g>
                    <rect x="577.53" y="442.7" width="37.08" height="28.59" transform="translate(139.07 1053.07) rotate(-90)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M610.64,438.19v37.62h-29.13v-37.62h29.13ZM610.1,475.27v-36.54h-28.05v36.54h28.05Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <rect x="577.53" y="355.64" width="37.08" height="28.59" transform="translate(226.14 966.01) rotate(-90)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M610.64,351.13v37.62h-29.13v-37.62h29.13ZM610.1,388.21v-36.54h-28.05v36.54h28.05Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <rect x="571.13" y="399.13" width="49.88" height="28.59" transform="translate(182.65 1009.5) rotate(-90)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M610.64,388.22v50.42h-29.13v-50.42h29.13ZM610.1,438.09v-49.34h-28.05v49.34h28.05Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <g>
                        <g>
                        <path d="M595.78,424.5v-22.15h.19c.68,0,1.22.55,1.22,1.22v19.7c0,.67-.55,1.22-1.22,1.22h-.19Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M597.46,403.57v19.7c0,.82-.67,1.49-1.49,1.49h-.46v-22.69h.46c.82,0,1.49.67,1.49,1.49ZM596.04,424.23c.49-.04.88-.45.88-.95v-19.7c0-.5-.39-.91-.88-.95v21.6Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M593.79,428.29h.26c.91,0,1.64-.73,1.64-1.64v-26.46c0-.91-.73-1.64-1.64-1.64h-.26v29.74Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M595.97,400.2v26.46c0,1.05-.86,1.91-1.91,1.91h-.53v-30.27h.53c1.05,0,1.91.86,1.91,1.91ZM594.06,428.02c.75,0,1.36-.62,1.36-1.37v-26.46c0-.75-.61-1.37-1.36-1.37v29.2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <path d="M593.79,428.29h.26c.91,0,1.64-.73,1.64-1.64v-26.46c0-.91-.73-1.64-1.64-1.64h-.26v29.74Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M595.97,400.2v26.46c0,1.05-.86,1.91-1.91,1.91h-.53v-30.27h.53c1.05,0,1.91.86,1.91,1.91ZM594.06,428.02c.75,0,1.36-.62,1.36-1.37v-26.46c0-.75-.61-1.37-1.36-1.37v29.2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                        <g>
                        <line x1="593.73" y1="428.29" x2="593.73" y2="398.56" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <rect x="593.46" y="398.56" width=".54" height="29.74" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        </g>
                    </g>
                    <g>
                        <path d="M597.19,418.25v-8.81c1.77.68,3.02,2.4,3.02,4.41s-1.25,3.73-3.02,4.41Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M600.49,413.84c0,2.08-1.25,3.91-3.2,4.66l-.37.14v-9.6l.37.14c1.94.75,3.2,2.58,3.2,4.66ZM597.46,417.84c1.52-.74,2.49-2.27,2.49-4s-.96-3.25-2.49-4v7.99Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    </g>
                    <g>
                    <g>
                        <polygon points="583.35 351.39 583.35 388.47 581.78 388.47 581.78 370.06 581.78 351.39 583.35 351.39" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M583.62,351.13v37.62h-2.11v-37.62h2.11ZM583.08,388.21v-36.54h-1.04v36.54h1.04Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <line x1="583.2" y1="370.06" x2="581.78" y2="370.06" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <rect x="581.78" y="369.79" width="1.43" height=".54" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    </g>
                    <g>
                    <g>
                        <polygon points="583.35 438.46 583.35 475.54 581.78 475.54 581.78 457.13 581.78 438.46 583.35 438.46" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M583.62,438.19v37.62h-2.11v-37.62h2.11ZM583.08,475.27v-36.54h-1.04v36.54h1.04Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <line x1="583.2" y1="457.13" x2="581.78" y2="457.13" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <rect x="581.78" y="456.86" width="1.43" height=".54" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    </g>
                </g>
                <g id="Bedroom_2">
                    <g>
                    <path d="M895.42,363.96h73.75c2.32,0,4.2,1.88,4.2,4.2v101.27c0,.44-.35.79-.79.79h-80.32c-.57,0-1.04-.47-1.04-1.04v-101.03c0-2.32,1.88-4.2,4.2-4.2Z" transform="translate(1349.38 -515.2) rotate(90)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M878.9,457.15v-79.8c0-.91.58-1.66,1.3-1.66h101c2.47,0,4.48,2.57,4.48,5.72v71.36c0,3.15-2.01,5.72-4.48,5.72h-101.25c-.58,0-1.05-.6-1.05-1.34ZM985.17,381.41c0-2.8-1.78-5.08-3.97-5.08h-101c-.44,0-.79.45-.79,1.01v79.8c0,.38.24.7.54.7h101.25c2.19,0,3.97-2.28,3.97-5.08v-71.36Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <rect x="941.67" y="412.23" width="87.1" height="9.39" rx="2.63" ry="2.63" transform="translate(1402.14 -568.3) rotate(90)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M980.27,457.1v-80.35c0-2.04,1.3-3.69,2.89-3.69h4.11c1.59,0,2.89,1.66,2.89,3.69v80.35c0,2.04-1.3,3.69-2.89,3.69h-4.11c-1.59,0-2.89-1.66-2.89-3.69ZM989.66,376.74c0-1.68-1.07-3.05-2.39-3.05h-4.11c-1.32,0-2.39,1.37-2.39,3.05v80.35c0,1.68,1.07,3.05,2.39,3.05h4.11c1.32,0,2.39-1.37,2.39-3.05v-80.35Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M936.69,375.06c-4.79-.45-33.52-1.13-37.48-.45-3.96.68-16.18-2.27-16.02.23.17,2.5-1.49,34.95-2.15,42.44-.66,7.49-2.15,23.6-2.97,28.59-.83,4.99-.5,13.39.83,13.84,1.32.45,55.65.23,58.79-.68,3.14-.91-.99-83.97-.99-83.97Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M877.37,452.22c0-2.27.16-4.63.46-6.42.91-5.53,2.63-24.76,2.97-28.56.66-7.49,2.3-39.95,2.15-42.38-.02-.26.05-.5.2-.69.78-.99,3.8-.75,8.69-.23,2.84.3,5.79.61,7.34.35,4.01-.69,32.69,0,37.54.45l.22.02v.28c.02.21,1.05,21.01,1.69,41.65,1.29,42.02-.28,42.48-.88,42.65-2.47.71-56.97,1.34-58.91.68-1.01-.35-1.46-3.96-1.46-7.8ZM883.45,375.38c0,5.01-1.5,34.5-2.16,41.93-.34,3.81-2.06,23.07-2.98,28.63-.9,5.41-.36,13.12.65,13.47.66.21,13.8.28,28.69.16,13.46-.11,28.4-.39,29.97-.84.41-.17,1.66-3.69.48-42.13-.59-19.29-1.53-38.68-1.65-41.23-5.42-.46-33.28-1.11-37.21-.44-1.61.28-4.58-.04-7.45-.34-3.57-.38-7.62-.81-8.29.05-.06.07-.06.13-.06.18,0,.12.01.31.01.57Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M935.67,460.48c-.59-.7,1.2-17.02,1.14-29.76-.13-26.26-.91-55.18-.57-57.35.26-1.66,4.47-1.56,8.43-1.63,3.71-.06,7.17-.39,8.21.98,2.15,2.83,2.19,83.74-.68,87.11-1.27,1.49-4.51,1.31-7.64,1.46-3.96.19-7.88.38-8.89-.81Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M935.3,459.26c0-1.3.14-3.64.4-7.79.37-5.85.88-13.88.85-20.75-.06-12.2-.26-25.05-.43-35.37-.19-12.1-.33-20.85-.14-22.04.28-1.77,3.69-1.82,7.64-1.87h1.04c.54-.02,1.07-.04,1.59-.05,3.26-.09,5.83-.16,6.8,1.11,1.56,2.07,1.91,37.87,1.39,60.99-.26,11.31-.83,25.1-2.08,26.58-1.13,1.33-3.63,1.41-6.28,1.49-.5.02-1.01.03-1.52.06-4.1.2-7.98.39-9.07-.9h0c-.13-.16-.2-.56-.2-1.45ZM937.06,431.38c0,6.75-.49,14.46-.86,20.14-.27,4.21-.53,8.19-.35,8.74.97,1.08,5.07.88,8.69.71.51-.02,1.02-.04,1.52-.06,2.55-.08,4.96-.16,5.95-1.32.32-.38,1.4-3.37,1.92-26.13.61-26.71-.06-58.96-1.25-60.53-.81-1.07-3.54-.99-6.42-.92-.52.01-1.06.03-1.6.04h-1.04c-3.1.05-6.95.1-7.15,1.37-.18,1.13-.03,10.3.15,21.9.16,10.33.37,23.18.43,35.38,0,.22,0,.44,0,.67Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M976.39,387.77c-3.77-2.59-15.79-.19-17.67,0-8.07.8-3.76,57.2-1.32,59.01,2.1,1.55,19.82,1.82,20.64-1.59.41-1.69,1.36-16.16,1.22-29.71-.14-13.8-1.37-26.68-2.87-27.71Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M953.77,411.53c0-6.4.32-12.44,1.11-16.88.82-4.6,2.11-7.02,3.82-7.19.28-.03.8-.11,1.48-.21,3.91-.6,13.06-2,16.33.25,1.79,1.23,2.88,15.33,3.01,27.98.14,13.46-.81,28.05-1.23,29.81-.14.56-.59,1.02-1.38,1.41-4.21,2.1-17.78,1.73-19.63.36-1.5-1.11-3.51-19.46-3.51-35.53ZM979.03,418.15c0-.89,0-1.78-.01-2.67-.15-15.38-1.54-26.6-2.74-27.43h0c-3.12-2.15-12.17-.77-16.03-.18-.69.11-1.21.19-1.5.21-1.47.15-2.6,2.4-3.37,6.7-2.89,16.19.58,50.54,2.16,51.71,1.8,1.33,15.06,1.66,19.2-.4.79-.39,1.02-.76,1.08-1,.39-1.62,1.23-14.35,1.23-26.94Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                </g>
                <g id="People">
                    <g id="Boy">
                    <g>
                        <g>
                        <path d="M434.98,369.45c-2.37,0-11.08-4.04-12.57-4.74l3.12-7.52.72-5.12c.77.24,3.05.94,5.69,1.85,1.22.42,2.48.9,3.67,1.36l.51.2-.19-.52c-.25-.69-.28-1.28-.07-1.63.13-.21.34-.33.66-.38,1.36-.18,3.13-.74,3.78-1.56.33-.41,1.19-.75,1.93-.75.27,0,.74.05.95.35.1.15.12.28.07.43-.15.41-.85.79-1.27.92-.68.21-2.33,1.31-3.03,2.94-.12.27-.23.57-.33.89l-.07.23.23.08c1.15.42,2.01.71,2.72.9,1.71.46,5.24,2.28,7.81,3.6,1.04.53,1.93.99,2.43,1.22.52.23,1.09.34,1.8.34.39,0,.78-.03,1.16-.06.37-.03.73-.06,1.09-.06.44,0,.8.05,1.12.15.6.18.96.62,1.01,1.19.04.54-.23,1.06-.65,1.26-.18.08-.42.13-.74.13-.99,0-2.33-.42-2.97-.62l-.21-.06c-.25-.07-.54-.1-.85-.13-.55-.05-1.18-.11-1.77-.45l-.18-.1c-.86-.51-1.43-.85-4.36-1.42-1.05-.2-1.9-.33-2.67-.45-1.49-.23-2.66-.41-4.38-.99-.32-.11-.7-.21-1.13-.31l-.28-.07-.05.49c-.61,6.53-1.67,8.15-2.45,8.37-.07.02-.16.03-.28.03ZM428.9,359.67c.66,1.7,3.57,3.58,3.69,3.66l.61.39-.24-.68c-.28-.79.3-1.99.76-2.82l.17-.32-.36-.05c-2.3-.32-4.36-.52-4.38-.52l-.4-.04.15.38Z" fill="#fff"/>
                        <path d="M442.25,350.91c.36,0,.64.09.74.24.07.1.06.16.04.21-.1.28-.67.63-1.11.77-.72.22-2.45,1.38-3.19,3.08-.12.27-.23.58-.34.91l-.15.46.45.17c1.15.43,2.02.71,2.74.91,1.68.46,5.34,2.34,7.77,3.59,1.08.56,1.94,1,2.44,1.23.55.25,1.16.37,1.9.37.4,0,.8-.03,1.18-.06.37-.03.73-.06,1.07-.06.42,0,.75.04,1.05.14.68.21.81.7.83.97.03.44-.18.87-.5,1.02-.1.05-.29.1-.63.1-.95,0-2.26-.41-2.89-.61l-.21-.06c-.27-.08-.58-.11-.9-.14-.53-.05-1.13-.1-1.66-.42l-.18-.1c-.89-.52-1.47-.87-4.44-1.45-1.06-.21-1.92-.34-2.68-.45-1.47-.22-2.64-.4-4.33-.98-.31-.11-.7-.21-1.15-.32l-.56-.13-.05.57-.02.2c-.66,6.97-1.8,8.02-2.27,8.15-.03,0-.09.02-.21.02-1.99,0-9.14-3.16-12.25-4.61l3.03-7.3.02-.06v-.06s.67-4.77.67-4.77c.96.3,3.03.95,5.4,1.77,1.21.42,2.53.92,3.66,1.36l1.03.4-.38-1.04c-.22-.61-.26-1.14-.09-1.41.06-.09.16-.22.48-.26,1.09-.14,3.14-.65,3.94-1.66.28-.35,1.07-.65,1.73-.65M433.68,364.32l-.48-1.37c-.18-.52.06-1.37.74-2.62l.35-.64-.72-.1c-2.3-.32-4.37-.52-4.39-.52l-.81-.08.29.76c.69,1.78,3.67,3.7,3.79,3.78l1.22.78M442.25,350.41c-.8,0-1.74.35-2.13.84-.63.8-2.4,1.31-3.62,1.47-1.11.14-1.2,1.22-.79,2.34-1.23-.48-2.49-.96-3.68-1.37-3.29-1.13-5.98-1.94-5.98-1.94l-.74,5.35-3.21,7.74s10.23,4.87,12.89,4.87c.13,0,.25-.01.34-.04,1.95-.54,2.5-7.25,2.65-8.79.42.1.8.2,1.11.31,2.62.89,3.99.85,7.08,1.45s3.5.93,4.46,1.49,2.03.41,2.67.6c.5.15,2.08.69,3.24.69.33,0,.62-.04.85-.15,1.03-.49,1.21-2.42-.39-2.92-.39-.12-.79-.16-1.2-.16-.74,0-1.5.12-2.25.12-.57,0-1.14-.07-1.7-.32-1.68-.76-7.83-4.18-10.28-4.84-.78-.21-1.7-.53-2.7-.89.1-.31.21-.6.32-.86.67-1.55,2.28-2.62,2.88-2.8.6-.18,1.9-.88,1.34-1.73-.22-.32-.66-.46-1.15-.46h0ZM432.73,363.12s-2.96-1.89-3.6-3.54c0,0,2.05.2,4.37.52-.62,1.14-1.05,2.24-.77,3.02h0Z" fill="#9b978f"/>
                        </g>
                        <g>
                        <path d="M425.92,351.65s.03-.03.04-.04c.04-.03.09-.03.13-.02.03,0,2.73.82,5.99,1.95,1.11.38,2.31.84,3.37,1.25-.19-.68-.17-1.26.07-1.66.19-.32.52-.51.95-.57,1.32-.17,2.96-.71,3.51-1.41.43-.54,1.47-.94,2.37-.9.55.02.95.21,1.17.53.17.25.21.53.11.79-.21.58-1.04,1.02-1.54,1.17-.52.16-2.12,1.2-2.78,2.71-.09.21-.18.45-.27.7,1.06.39,1.87.66,2.54.84,1.75.47,5.3,2.3,7.9,3.64,1.03.53,1.92.99,2.41,1.21.88.4,1.84.32,2.76.25.79-.06,1.61-.13,2.37.1.76.23,1.24.81,1.29,1.55.05.71-.31,1.39-.88,1.66-.99.47-3.1-.19-4-.47-.08-.02-.15-.05-.2-.06-.21-.06-.47-.09-.77-.11-.57-.05-1.27-.12-1.93-.5-.06-.04-.12-.07-.18-.11-.83-.49-1.37-.81-4.23-1.37-1.04-.2-1.9-.33-2.65-.45-1.51-.23-2.7-.41-4.45-1.01-.25-.09-.56-.17-.92-.26v.02c-.09.96-.28,2.95-.68,4.81-.52,2.39-1.2,3.67-2.07,3.91-.84.23-3.35-.51-7.45-2.22-3.03-1.26-5.87-2.61-5.89-2.62-.08-.04-.11-.13-.08-.2l3.21-7.72.74-5.33s.01-.05.03-.07ZM435.84,355.15s-.01.01-.02.02c-.04.04-.11.06-.17.03-1.14-.44-2.46-.95-3.67-1.36-2.78-.96-5.15-1.69-5.8-1.89l-.72,5.17s0,.03-.01.04l-3.16,7.6c.6.28,3.1,1.45,5.74,2.55,5.02,2.09,6.71,2.35,7.24,2.2.51-.14,1.24-.89,1.84-3.68.4-1.84.59-3.82.68-4.77l.02-.2s.03-.09.07-.11c.04-.03.08-.04.13-.03.44.11.82.21,1.12.31,1.72.59,2.9.77,4.39.99.76.12,1.62.25,2.67.45,2.91.57,3.48.9,4.33,1.41.06.03.12.07.18.11.6.35,1.24.41,1.8.46.3.03.59.05.83.13.06.02.12.04.2.06.79.25,2.89.91,3.77.49.45-.22.74-.77.7-1.35-.04-.61-.43-1.08-1.07-1.27-.7-.22-1.45-.15-2.25-.09-.96.08-1.96.16-2.92-.27-.5-.23-1.39-.69-2.43-1.22-2.58-1.33-6.11-3.15-7.83-3.61-.71-.19-1.57-.48-2.71-.9-.08-.03-.12-.12-.1-.2.1-.32.21-.62.33-.88.71-1.63,2.39-2.71,2.98-2.89.46-.14,1.17-.53,1.33-.98.06-.17.04-.34-.08-.51-.15-.23-.48-.37-.92-.39-.79-.03-1.74.31-2.11.78-.64.8-2.38,1.36-3.72,1.53-.34.04-.58.18-.72.42-.22.37-.2.99.06,1.71.02.05,0,.11-.02.15ZM429,359.48s0,0,0,0c.03-.04.09-.07.14-.06.02,0,2.08.2,4.37.52.05,0,.1.04.12.09.02.05.02.1,0,.15-.74,1.35-.98,2.27-.76,2.89.02.06,0,.14-.05.18-.05.04-.13.05-.18,0-.12-.08-3.01-1.94-3.66-3.62-.02-.05-.01-.11.02-.15ZM433.25,360.22c-1.71-.23-3.25-.4-3.86-.46.62,1.2,2.37,2.5,3.1,3-.06-.64.18-1.45.76-2.54Z" fill="#fff"/>
                        <path d="M442.24,350.25c-.87,0-1.83.38-2.25.9-.56.7-2.19,1.24-3.51,1.41-.44.06-.76.25-.95.57-.24.4-.26.98-.07,1.66-1.07-.41-2.26-.87-3.37-1.25-3.26-1.12-5.96-1.94-5.99-1.95-.02,0-.03,0-.05,0-.03,0-.06,0-.09.03-.02.01-.03.02-.04.04-.02.02-.03.05-.03.07l-.74,5.33-3.21,7.72c-.03.08,0,.17.08.2.03.01,2.86,1.36,5.89,2.62,3.61,1.5,5.98,2.26,7.08,2.26.15,0,.27-.01.37-.04.87-.24,1.55-1.52,2.07-3.91.4-1.86.59-3.85.68-4.81v-.02c.36.09.67.18.92.26,1.75.6,2.94.78,4.45,1.01.76.12,1.61.25,2.65.45,2.86.56,3.41.88,4.23,1.37.06.03.12.07.18.11.66.39,1.37.45,1.93.5.3.03.56.05.77.11.05.02.12.04.2.06.68.21,2.03.64,3.08.64.35,0,.67-.05.92-.17.57-.27.93-.95.88-1.66-.05-.74-.54-1.32-1.29-1.55-.4-.12-.82-.16-1.25-.16-.37,0-.75.03-1.12.06-.37.03-.75.06-1.12.06-.56,0-1.11-.07-1.64-.31-.49-.22-1.38-.68-2.41-1.21-2.59-1.33-6.14-3.16-7.9-3.64-.67-.18-1.48-.45-2.54-.84.09-.26.18-.49.27-.7.66-1.51,2.25-2.55,2.78-2.71.5-.15,1.33-.59,1.54-1.17.1-.27.06-.54-.11-.79-.21-.32-.62-.51-1.17-.53-.04,0-.08,0-.12,0h0ZM435.71,355.21s.08-.02.11-.05c0,0,.01-.01.02-.02.03-.04.04-.1.02-.15-.26-.72-.28-1.34-.06-1.71.14-.23.39-.37.72-.42,1.34-.17,3.08-.73,3.72-1.53.35-.44,1.23-.78,2-.78.04,0,.07,0,.11,0,.44.02.76.16.92.39.11.17.14.34.08.51-.16.44-.88.84-1.33.98-.58.18-2.27,1.26-2.98,2.89-.11.26-.22.55-.33.88-.03.08.02.17.1.2,1.14.42,2.01.71,2.71.9,1.72.46,5.25,2.28,7.83,3.61,1.04.53,1.93.99,2.43,1.22.58.26,1.17.34,1.76.34.39,0,.77-.03,1.16-.06.38-.03.74-.06,1.1-.06.4,0,.78.04,1.15.15.64.2,1.03.66,1.07,1.27.04.58-.24,1.14-.7,1.35-.2.1-.47.14-.78.14-1.01,0-2.39-.43-3-.62-.08-.03-.15-.05-.2-.06-.24-.07-.53-.1-.83-.13-.56-.05-1.2-.11-1.8-.46-.06-.04-.12-.07-.18-.11-.86-.51-1.42-.84-4.33-1.41-1.05-.2-1.91-.33-2.67-.45-1.49-.23-2.67-.41-4.39-.99-.3-.1-.68-.21-1.12-.31-.01,0-.02,0-.04,0-.03,0-.07.01-.09.03-.04.03-.06.07-.07.11l-.02.2c-.09.95-.28,2.93-.68,4.77-.6,2.78-1.33,3.54-1.84,3.68-.08.02-.18.03-.31.03-.78,0-2.64-.45-6.93-2.24-2.65-1.1-5.14-2.27-5.74-2.55l3.16-7.6s0-.03.01-.04l.72-5.17c.65.2,3.02.93,5.8,1.89,1.22.42,2.53.92,3.67,1.36.02,0,.04.01.06.01h0ZM429.13,359.42s-.1.02-.13.06c0,0,0,0,0,0-.03.04-.04.1-.02.15.65,1.68,3.54,3.54,3.66,3.62.03.02.06.02.09.02.03,0,.07-.01.1-.03.05-.04.07-.11.05-.18-.22-.62.02-1.54.76-2.89.03-.05.03-.1,0-.15-.02-.05-.07-.08-.12-.09-2.3-.32-4.35-.52-4.38-.52,0,0-.01,0-.02,0h0ZM432.49,362.77c-.73-.5-2.48-1.8-3.1-3,.61.06,2.15.23,3.86.46-.58,1.1-.82,1.91-.76,2.54h0Z" fill="#9b978f"/>
                        </g>
                    </g>
                    <g>
                        <g>
                        <path d="M420.84,370.53c-.34-.07-.62-.31-.99-.61-.27-.22-.57-.48-.97-.7-.2-.12-.39-.21-.57-.3-.61-.3-.98-.48-1.23-1.19-.38-1.1-1.14-1.53-1.17-1.55-.2-.13-5.23-3.52-3.04-10.85,2.2-7.35,9.17-8.1,9.24-8.1l.16-.02.04-.13s0,0,.02,0c.06,0,.25-.05.67-.05,0,0,.26,0,.26,0,.64,0,1.01-.21,1.37-.42.39-.23.8-.46,1.54-.51.06,0,.11,0,.16,0,.29,0,.34.06.34.06.04.05-.04.29-.08.42-.1.31-.22.71,0,1.03.19.27.49.34.81.42.55.13,1.16.28,1.53,1.47.55,1.8-1.44,3.21-1.46,3.23l-.47.33,1.36.29c.67,1.84.3,4.88-.89,7.14-1.27,2.42-3.86,4.11-3.89,4.12l-.42.27,1.01.37c.78,1.62-.14,2.24-1.12,2.89-.56.37-1.08.72-1.24,1.26-.31,1.07-.95,1.11-1,1.11Z" fill="#fff"/>
                        <path d="M426.35,346.37s.05,0,.07,0c-.01.05-.03.11-.05.16-.1.33-.26.83.04,1.25.25.34.63.43.96.51.53.13,1.02.24,1.34,1.3.49,1.62-1.34,2.94-1.36,2.95l-.95.66,1.13.24.66.14c.5,1.56.36,4.37-.92,6.81-1.24,2.36-3.77,4.01-3.8,4.03l-.85.55.95.34.44.16c.58,1.29,0,1.77-1.07,2.48-.57.38-1.15.77-1.34,1.4-.23.77-.62.91-.73.93-.29-.08-.55-.29-.86-.55-.28-.23-.59-.49-1-.72-.21-.12-.4-.21-.58-.3-.59-.29-.89-.44-1.1-1.04-.41-1.19-1.25-1.67-1.25-1.67-.21-.14-5.09-3.44-2.95-10.58,2.15-7.18,8.75-7.9,9.03-7.93l.33-.03.04-.12c.09-.02.25-.04.51-.04.07,0,.15,0,.24,0h.1c.62,0,1.02-.23,1.41-.45.39-.22.75-.43,1.43-.47.05,0,.1,0,.14,0M426.35,345.87c-.05,0-.11,0-.17,0-1.5.1-1.77.92-2.81.92-.03,0-.05,0-.08,0-.09,0-.18,0-.26,0-.86,0-.92.19-.92.19,0,0-7.18.67-9.46,8.28s3.15,11.14,3.15,11.14c0,0,.7.39,1.05,1.41.36,1.02,1.01,1.1,1.91,1.62.9.51,1.32,1.19,2.07,1.35,0,0,0,0,0,0,.05,0,.87-.02,1.25-1.29.39-1.31,3.75-1.54,2.29-4.42l-.63-.23s2.65-1.71,3.97-4.22c1.32-2.51,1.57-5.68.85-7.47l-.93-.2s2.16-1.5,1.55-3.5-1.97-1.39-2.38-1.96c-.39-.55.78-1.62-.47-1.62h0Z" fill="#9b978f"/>
                        </g>
                        <g>
                        <path d="M414.38,351.38c.18-.25.38-.49.58-.72.89-1.02,1.96-1.87,3.19-2.53,1.88-1.01,3.52-1.26,3.87-1.3.13-.12.47-.22,1.27-.19.49.02.78-.15,1.16-.36.41-.24.88-.5,1.72-.56.44-.03.71.04.85.21.17.22.08.51-.01.8-.08.25-.16.51-.05.67.1.14.31.19.58.26.59.14,1.39.33,1.82,1.75.26.87.07,1.78-.57,2.64h0c-.27.37-.56.65-.77.83l.6.13c.05.01.09.05.11.1.37.91.49,2.17.35,3.54-.15,1.42-.58,2.86-1.21,4.06-1.1,2.09-3.06,3.6-3.77,4.1l.34.12s.07.04.09.08c1.02,2.01-.22,2.84-1.21,3.5-.49.33-.96.64-1.07,1.03-.42,1.41-1.37,1.41-1.41,1.41,0,0-.02,0-.03,0-.48-.1-.83-.39-1.21-.7-.27-.22-.55-.45-.91-.66-.19-.11-.38-.2-.55-.29-.63-.31-1.13-.56-1.43-1.42-.33-.95-.98-1.32-.98-1.33,0,0,0,0,0,0-.06-.04-1.4-.92-2.48-2.77-.63-1.08-1.04-2.27-1.21-3.53-.21-1.57-.05-3.26.47-5.02.43-1.44,1.06-2.72,1.89-3.84ZM422.24,347.08s-.07.06-.11.06c-.02,0-1.8.18-3.83,1.28-1.19.64-2.23,1.47-3.09,2.45-1.08,1.23-1.89,2.73-2.4,4.44-.51,1.71-.67,3.35-.46,4.87.16,1.22.55,2.36,1.16,3.41,1.02,1.74,2.31,2.63,2.38,2.68.08.04.76.47,1.12,1.5.26.74.66.94,1.27,1.24.17.08.36.18.57.29.39.22.69.47.95.69.35.29.66.55,1.05.63.1,0,.76-.08,1.08-1.18.15-.51.66-.85,1.2-1.21.97-.65,1.97-1.32,1.13-3.04l-.57-.21c-.06-.02-.1-.07-.1-.13,0-.06.02-.12.07-.15.03-.02,2.63-1.71,3.92-4.16,1.21-2.3,1.58-5.4.87-7.26l-.85-.18c-.06-.01-.11-.06-.12-.12-.01-.06.01-.13.06-.16.02-.01,2.06-1.46,1.49-3.33-.38-1.24-1.02-1.39-1.59-1.53-.3-.07-.59-.14-.76-.38-.2-.28-.09-.64,0-.95.06-.21.13-.42.06-.5-.04-.05-.16-.12-.58-.09-.76.05-1.18.29-1.58.52-.38.22-.75.43-1.32.4-.81-.03-1.01.09-1.04.11,0,0,0,0,0,.01ZM422.26,347.04h0s0,0,0,0ZM422.26,347.04h0s0,0,0,0Z" fill="#fff"/>
                        <path d="M426.35,345.72c-.06,0-.12,0-.18,0-.83.05-1.3.32-1.72.56-.35.2-.64.36-1.08.36-.02,0-.05,0-.07,0-.1,0-.18,0-.27,0-.61,0-.88.09-1,.2-.35.04-1.98.28-3.87,1.3-1.22.66-2.3,1.51-3.19,2.53-.2.23-.4.47-.58.72-.83,1.12-1.46,2.4-1.89,3.84-.53,1.76-.69,3.44-.47,5.02.17,1.26.58,2.45,1.21,3.53,1.08,1.85,2.42,2.73,2.48,2.77,0,0,0,0,0,0,0,0,.65.37.98,1.33.3.86.8,1.11,1.43,1.42.17.09.36.18.55.29.36.21.64.44.91.66.37.31.73.6,1.21.7,0,0,.02,0,.03,0,0,0,0,0,0,0,.09,0,1-.04,1.4-1.41.12-.4.58-.71,1.07-1.03.99-.66,2.23-1.49,1.21-3.5-.02-.04-.05-.06-.09-.08l-.34-.12c.71-.5,2.67-2.02,3.77-4.1.63-1.2,1.06-2.65,1.21-4.06.14-1.37.02-2.63-.35-3.54-.02-.05-.06-.08-.11-.1l-.6-.13c.21-.18.5-.46.77-.82h0c.64-.86.83-1.78.57-2.64-.43-1.42-1.24-1.61-1.82-1.75-.26-.06-.47-.11-.58-.26-.11-.16-.03-.42.05-.67.09-.28.18-.58.01-.8-.12-.15-.33-.22-.66-.22h0ZM423.36,346.96c.53,0,.88-.2,1.24-.41.4-.23.82-.47,1.58-.52.06,0,.12,0,.17,0,.29,0,.38.06.41.1.07.09,0,.3-.06.5-.1.31-.21.66,0,.95.17.24.46.31.76.38.57.14,1.21.29,1.59,1.53.57,1.86-1.47,3.31-1.49,3.33-.05.04-.08.1-.06.16.01.06.06.11.12.12l.85.18c.7,1.86.33,4.96-.87,7.26-1.28,2.44-3.89,4.14-3.92,4.16-.05.03-.08.09-.07.15,0,.06.05.11.1.13l.57.21c.84,1.72-.16,2.39-1.13,3.04-.54.36-1.05.7-1.2,1.21-.32,1.1-.98,1.17-1.08,1.18-.39-.09-.7-.34-1.05-.63-.27-.22-.57-.47-.95-.69-.2-.11-.4-.21-.57-.29-.61-.3-1.02-.5-1.27-1.24-.36-1.03-1.04-1.45-1.12-1.5-.07-.05-1.37-.93-2.38-2.68-.61-1.05-1-2.19-1.16-3.41-.2-1.52-.05-3.16.46-4.87.51-1.71,1.32-3.2,2.4-4.44.86-.99,1.91-1.81,3.09-2.45,2.03-1.09,3.81-1.27,3.83-1.28.05,0,.09-.03.11-.06,0,0,0,0,0-.01.03-.02.19-.12.79-.12.08,0,.16,0,.25,0,.03,0,.06,0,.08,0h0ZM422.26,347.04h0s0,0,0,0h0ZM422.26,347.04h0s0,0,0,0h0Z" fill="#9b978f"/>
                        </g>
                    </g>
                    <g>
                        <g>
                        <path d="M423.67,361.57c-.34-.76-1.33-3.61,1.72-6.02.24.42.72,1.4.57,2.41l-.02.16.13.09s.46.3.37.81c-.08.45-.56.47-.61.47h-.16s-.07.15-.07.15c-.07.15-.69,1.46-1.92,1.94Z" fill="#fff"/>
                        <path d="M425.31,355.94c.23.46.51,1.22.4,1.99l-.04.31.26.18s.32.23.26.55c-.04.23-.27.26-.37.26h-.33s-.13.3-.13.3c0,.01-.52,1.18-1.56,1.7-.35-.92-.88-3.25,1.51-5.3M425.45,355.19c-3.98,2.94-1.91,6.69-1.91,6.69,1.55-.46,2.28-2.15,2.28-2.15h0s.74,0,.86-.67c.12-.68-.48-1.06-.48-1.06.21-1.46-.75-2.81-.75-2.81h0Z" fill="#9b978f"/>
                        </g>
                        <g>
                        <path d="M423.87,356.51c.36-.49.85-.99,1.49-1.46.03-.03.08-.04.12-.03.04,0,.08.03.1.06.04.06.96,1.36.79,2.83.18.15.57.54.47,1.16-.1.58-.59.77-.91.8-.18.37-.92,1.73-2.34,2.14-.07.02-.15-.01-.18-.08-.02-.04-.54-.99-.56-2.32-.01-.86.19-1.99,1.03-3.12ZM425.41,355.41c-1.51,1.17-2.27,2.58-2.25,4.2.01,1,.33,1.78.46,2.07,1.38-.48,2.04-2,2.05-2.02.03-.06.08-.1.15-.1.02,0,.61,0,.7-.54.1-.56-.39-.89-.41-.9-.05-.03-.08-.09-.07-.16.16-1.12-.41-2.19-.63-2.56Z" fill="#fff"/>
                        <path d="M425.45,355.03s-.07.01-.09.03c-.64.47-1.12.96-1.49,1.46-.84,1.14-1.04,2.27-1.03,3.12.02,1.33.54,2.28.56,2.32.03.05.08.08.14.08.01,0,.03,0,.04,0,1.41-.42,2.16-1.78,2.34-2.14.32-.03.81-.22.91-.8.11-.62-.29-1.01-.47-1.16.16-1.47-.75-2.78-.79-2.83-.02-.03-.06-.06-.1-.06,0,0-.02,0-.02,0h0ZM423.62,361.68c-.13-.29-.45-1.07-.46-2.07-.02-1.62.74-3.04,2.25-4.2.23.37.8,1.44.63,2.56,0,.06.02.12.07.16.02.01.51.33.41.9-.09.53-.67.54-.7.54h0c-.06,0-.12.04-.15.1,0,.02-.68,1.53-2.05,2.02h0Z" fill="#9b978f"/>
                        </g>
                    </g>
                    <g>
                        <path d="M419.22,366.65s0,0,0,0c.03-.04.77-.91,1.96-1.16.19-.04.35-.07.51-.11.81-.16,1.21-.25,1.98-.67.08-.04.17-.01.22.06.04.08.01.17-.06.22-.81.45-1.26.54-2.07.7-.15.03-.32.06-.5.1-1.09.23-1.78,1.05-1.79,1.06-.06.07-.16.08-.22.02-.06-.05-.08-.15-.03-.22Z" fill="#fff"/>
                        <path d="M423.75,364.68s-.05,0-.08.02c-.77.42-1.17.51-1.98.67-.15.03-.32.07-.51.11-1.2.26-1.93,1.13-1.96,1.16,0,0,0,0,0,0-.05.07-.04.16.03.22.03.02.07.04.1.04.05,0,.09-.02.12-.06,0,0,.7-.82,1.79-1.06.18-.04.35-.07.5-.1.81-.17,1.26-.26,2.07-.7.08-.04.1-.14.06-.22-.03-.05-.08-.08-.14-.08h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                        <path d="M420.91,350.43s.02-.02.03-.03l2.75-2.14c.07-.05.17-.04.22.03.05.07.04.17-.03.22l-2.75,2.14c-.07.05-.17.04-.22-.03-.04-.06-.04-.14,0-.19Z" fill="#fff"/>
                        <path d="M423.79,348.22s-.07.01-.1.03l-2.75,2.14s-.02.02-.03.03c-.04.06-.04.13,0,.19.03.04.08.06.13.06.03,0,.07-.01.1-.03l2.75-2.14c.07-.05.08-.15.03-.22-.03-.04-.08-.06-.13-.06h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                        <path d="M425.73,352.43s0,0,0,0c.05-.07.15-.08.22-.03.97.77,1.58.44,1.6.42.08-.04.17-.02.22.06.04.08.02.17-.05.22-.03.02-.82.47-1.96-.45-.07-.05-.08-.15-.03-.22Z" fill="#fff"/>
                        <path d="M425.86,352.36s-.09.02-.12.06c0,0,0,0,0,0-.05.07-.04.17.03.22.57.46,1.06.57,1.4.57s.55-.12.56-.13c.07-.04.1-.14.05-.22-.03-.05-.08-.08-.14-.08-.03,0-.05,0-.08.02-.01,0-.15.08-.4.08-.28,0-.69-.1-1.2-.51-.03-.02-.06-.03-.1-.03h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                        <path d="M421.98,346.89c.04-.05.1-.08.17-.06.08.02,1.96.56,2.47,2.77.02.09-.03.17-.12.19-.09.02-.17-.03-.19-.12-.47-2.02-2.17-2.52-2.25-2.54-.08-.02-.13-.11-.11-.2,0-.02.01-.04.03-.05Z" fill="#fff"/>
                        <path d="M422.11,346.83c-.05,0-.1.02-.13.06-.01.02-.02.03-.03.05-.02.08.03.17.11.2.07.02,1.78.51,2.25,2.54.02.07.08.12.15.12.01,0,.02,0,.04,0,.09-.02.14-.11.12-.19-.51-2.21-2.39-2.75-2.47-2.77-.01,0-.03,0-.04,0h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                        <g>
                        <path d="M435.53,370.62c-.16,0-.44-.11-.74-.22-.4-.15-.9-.34-1.43-.41-.35-.04-.63-.13-.98-.24-.62-.2-1.46-.47-3.25-.63-2.26-.2-4.68-.82-5.44-1.03l.87-2.75c1.3.23,2.82.86,4.52,1.59.95.41,2.72,1.09,3.88,1.09.44,0,.78-.1.99-.3.53-.49,1.42-.66,2.08-.66.14,0,.28,0,.41.02.1.01.2.02.29.02.28,0,.55-.04.77-.08.14-.02.27-.05.37-.05.09.12-.14.31-.25.38l-.15.09.17.96c-.02.37-.1.39-.23.42-.14.03-.39.08-.47.41-.05.2-.12.27-.24.4-.1.1-.21.23-.33.43-.17.3-.32.36-.62.48l-.15.06h-.05Z" fill="#fff"/>
                        <path d="M424.73,365.64c1.23.26,2.66.85,4.25,1.53.97.42,2.77,1.11,3.98,1.11.51,0,.9-.12,1.16-.37.39-.36,1.14-.6,1.91-.6.13,0,.26,0,.38.02.11.01.22.02.32.02.16,0,.32-.01.46-.03l.06.33.13.74c0,.09-.02.15-.02.18,0,0,0,0,0,0-.15.03-.55.12-.66.6-.03.13-.07.17-.18.29-.1.11-.23.25-.36.48-.13.23-.21.26-.5.38l-.11.05c-.11,0-.41-.11-.65-.2-.41-.16-.93-.36-1.49-.42-.33-.04-.6-.12-.94-.23-.63-.2-1.49-.48-3.31-.64-2.03-.18-4.2-.7-5.15-.95l.72-2.28M424.38,365.07l-1.01,3.2s2.96.85,5.74,1.1c2.77.25,3.2.75,4.23.87.91.1,1.74.63,2.19.63.06,0,.11,0,.15-.03.39-.17.64-.22.89-.65s.49-.46.6-.9c.11-.45.68.09.71-.93l-.14-.79s.53-.31.4-.69c-.04-.12-.14-.16-.28-.16-.26,0-.67.13-1.14.13-.09,0-.17,0-.26-.02-.14-.02-.28-.02-.44-.02-.78,0-1.7.22-2.25.73-.18.16-.46.23-.82.23-.99,0-2.52-.53-3.78-1.07-1.73-.74-3.39-1.43-4.79-1.64h0Z" fill="#9b978f"/>
                        </g>
                        <g>
                        <path d="M424.25,364.98s.09-.07.15-.06c1.39.21,3.01.87,4.83,1.65,2.26.97,3.96,1.3,4.43.87.71-.66,1.95-.85,2.81-.75.34.04.68-.02.95-.06.39-.07.75-.13.87.21.11.35-.15.65-.38.81l.12.69s0,.02,0,.03c-.02.69-.29.8-.55.86-.12.03-.14.03-.16.11-.07.3-.2.44-.34.59-.09.1-.18.19-.27.36-.24.42-.49.53-.82.66-.05.02-.09.04-.15.06-.26.11-.63-.03-1.1-.21-.4-.15-.85-.33-1.33-.38-.39-.05-.7-.14-1.06-.26-.63-.2-1.42-.45-3.16-.61-2.76-.25-5.74-1.1-5.77-1.11-.04-.01-.08-.04-.1-.08-.02-.04-.02-.08-.01-.12l1.01-3.2s.01-.03.02-.05ZM437.92,367.19c.06-.08.1-.17.07-.26-.03-.08-.21-.05-.51,0-.29.05-.65.11-1.04.07-.81-.1-1.95.1-2.56.67-.79.74-3.33-.19-4.77-.81-1.74-.75-3.29-1.38-4.61-1.61l-.92,2.91c.65.18,3.18.84,5.55,1.05,1.78.16,2.62.43,3.23.62.36.11.64.2,1,.25.52.06,1.01.25,1.41.4.37.14.72.27.86.21.05-.02.1-.04.15-.06.3-.12.47-.2.66-.52.11-.2.22-.31.32-.42.12-.13.21-.23.26-.45.07-.27.27-.31.4-.34.16-.03.28-.06.3-.54l-.14-.77c-.01-.07.02-.13.08-.16,0,0,.17-.1.27-.24Z" fill="#fff"/>
                        <path d="M424.38,364.91c-.05,0-.1.02-.13.06-.01.01-.02.03-.02.05l-1.01,3.2s0,.09.01.12c.02.04.05.07.1.08.03,0,3.01.86,5.77,1.11,1.74.16,2.53.41,3.16.61.36.11.67.21,1.06.26.48.05.93.23,1.33.38.35.13.65.25.88.25.08,0,.15-.01.22-.04.05-.02.1-.04.15-.06.32-.13.57-.24.82-.66.09-.16.19-.26.27-.36.14-.15.27-.29.34-.59.02-.07.03-.08.16-.11.27-.06.53-.17.55-.86,0-.01,0-.02,0-.03l-.12-.69c.23-.16.49-.46.38-.81-.07-.21-.23-.27-.43-.27-.13,0-.28.03-.44.05-.2.04-.45.08-.7.08-.08,0-.16,0-.24-.01-.14-.02-.3-.03-.46-.03-.8,0-1.77.22-2.36.77-.14.13-.38.19-.71.19-.8,0-2.12-.37-3.73-1.06-1.82-.78-3.43-1.44-4.83-1.65,0,0-.02,0-.02,0h0ZM435.53,370.72c-.17,0-.46-.11-.77-.23-.4-.15-.89-.34-1.41-.4-.36-.04-.64-.13-1-.25-.61-.2-1.45-.46-3.23-.62-2.37-.21-4.9-.88-5.55-1.05l.92-2.91c1.33.22,2.88.86,4.61,1.61,1.06.46,2.72,1.08,3.84,1.08.4,0,.73-.08.94-.27.51-.47,1.39-.69,2.14-.69.14,0,.28,0,.41.02.1.01.19.02.28.02.28,0,.54-.04.76-.08.17-.03.3-.05.38-.05.07,0,.12.01.13.05.03.09,0,.18-.07.26-.1.14-.26.23-.27.24-.06.03-.09.1-.08.16l.14.77c-.02.48-.14.51-.3.54-.13.03-.34.07-.4.34-.05.22-.14.31-.26.45-.1.1-.21.22-.32.42-.19.33-.37.4-.66.52-.05.02-.1.04-.15.06-.02.01-.06.02-.09.02h0Z" fill="#9b978f"/>
                        </g>
                    </g>
                    <g>
                        <path d="M436.24,367.76s.08-.07.13-.06c.37.01,1.05-.04,1.26-.24.06-.06.16-.06.22,0,.06.06.06.16,0,.22-.38.35-1.37.33-1.49.32-.09,0-.16-.08-.15-.16,0-.03.01-.06.03-.09Z" fill="#fff"/>
                        <path d="M437.74,367.41s-.08.01-.11.04c-.19.18-.77.24-1.16.24-.04,0-.07,0-.1,0,0,0,0,0,0,0-.05,0-.1.03-.13.06-.02.02-.03.06-.03.09,0,.09.07.16.15.16.02,0,.06,0,.11,0,.3,0,1.06-.03,1.37-.33.06-.06.07-.16,0-.22-.03-.03-.07-.05-.12-.05h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                        <g>
                        <path d="M439.63,356.42c-.52-.03-1.63-1.08-2.01-1.69-.34-.55-1.59-.7-3.03-.88-.56-.07-1.12-.14-1.6-.23-1.21-.24-3.68-.64-4.77-.82.55-.51,1.41-1.51,1.34-2.71.68.16,2.26.58,3.81,1.28,2.31,1.04,3.8,1.64,5.04,1.84.42.07.8.1,1.13.13.4.04.95.09,1.01.19.07.15-.05.27-.08.29l-.13.11.06.16s.1.3-.14.56l-.12.13.09.16c.03.06.18.39-.24.71l-.11.09.02.14c.01.11,0,.37-.09.48-.02.03-.06.06-.15.06h-.03Z" fill="#fff"/>
                        <path d="M429.81,350.4c.77.2,2.13.59,3.46,1.19,2.33,1.05,3.84,1.66,5.11,1.86.43.07.81.1,1.15.13.26.02.56.05.74.09l-.19.18.09.31s.04.18-.09.32l-.21.26.14.3c.04.09.05.24-.16.41l-.22.17.03.28c0,.09,0,.2-.02.26-.38-.04-1.41-.94-1.8-1.57-.38-.62-1.47-.78-3.21-1-.55-.07-1.12-.14-1.58-.23-1.06-.21-3.08-.54-4.3-.74.48-.53,1.01-1.31,1.07-2.22M429.26,349.76c.39,1.75-1.62,3.2-1.62,3.2,0,0,3.71.59,5.3.9,1.59.31,4.07.36,4.47,1,.4.64,1.56,1.77,2.2,1.81.02,0,.03,0,.05,0,.59,0,.49-.82.49-.82.61-.47.3-1.03.3-1.03.35-.39.19-.82.19-.82,0,0,.3-.25.14-.59-.16-.34-1.06-.27-2.33-.46-1.27-.2-2.89-.87-4.98-1.82-2.09-.94-4.21-1.37-4.21-1.37h0Z" fill="#9b978f"/>
                        </g>
                        <g>
                        <path d="M429.14,349.66s0-.01.01-.02c.04-.04.09-.05.14-.04.02,0,2.16.44,4.24,1.39,2.28,1.03,3.74,1.62,4.94,1.8.41.06.78.1,1.11.13.75.07,1.2.11,1.34.42.14.29.01.56-.11.7.03.16.05.48-.18.79h0c.09.26.11.71-.32,1.08,0,.17,0,.51-.21.73-.09.09-.24.19-.5.18-.74-.05-1.94-1.27-2.33-1.89-.24-.38-1.56-.55-2.73-.69-.56-.07-1.14-.14-1.63-.24-1.57-.31-5.25-.9-5.29-.9-.06-.01-.11-.06-.13-.12-.01-.06,0-.13.06-.17.02-.01,1.92-1.41,1.56-3.03-.01-.05,0-.09.03-.13ZM440.6,353.81c.05-.07.11-.19.04-.33-.07-.14-.56-.19-1.09-.24-.33-.03-.71-.07-1.13-.13-1.23-.19-2.72-.79-5.02-1.83-1.66-.75-3.35-1.17-3.95-1.31.08.69-.18,1.43-.73,2.14-.25.32-.51.58-.7.74.96.16,3.67.6,4.95.85.48.09,1.05.16,1.61.23,1.42.18,2.65.33,2.97.84.39.63,1.52,1.7,2.08,1.74.11,0,.19-.02.25-.08.14-.14.14-.45.12-.56,0-.06.02-.11.06-.14.48-.37.28-.78.26-.83-.03-.06-.02-.13.02-.18.28-.31.17-.64.16-.66-.02-.06,0-.13.05-.18,0,0,.03-.03.06-.07Z" fill="#fff"/>
                        <path d="M429.26,349.6s-.08.02-.11.05c0,0-.01.01-.01.02-.03.04-.04.08-.03.13.36,1.62-1.54,3.02-1.56,3.03-.05.04-.08.1-.06.17.01.06.07.11.13.12.04,0,3.73.59,5.29.9.49.1,1.07.17,1.63.24,1.17.15,2.5.31,2.73.69.38.62,1.59,1.84,2.33,1.89.02,0,.04,0,.06,0,.22,0,.36-.1.44-.18.21-.22.22-.56.21-.73.43-.38.41-.82.32-1.08h0c.23-.32.21-.64.18-.79.12-.15.25-.41.11-.7-.15-.31-.6-.35-1.34-.42-.33-.03-.7-.07-1.11-.13-1.2-.19-2.66-.78-4.94-1.8-2.09-.94-4.22-1.38-4.24-1.39-.01,0-.02,0-.03,0h0ZM439.66,356.51s-.02,0-.03,0c-.56-.04-1.69-1.11-2.08-1.74-.32-.51-1.54-.66-2.97-.84-.55-.07-1.13-.14-1.61-.23-1.29-.25-3.99-.69-4.95-.85.19-.17.45-.42.7-.74.56-.72.81-1.45.73-2.14.6.14,2.29.56,3.95,1.31,2.3,1.04,3.79,1.64,5.02,1.83.42.07.8.1,1.13.13.52.05,1.02.1,1.09.24.07.14.01.26-.04.33-.03.04-.05.06-.06.07-.05.04-.07.11-.05.18,0,.01.12.35-.16.66-.04.05-.05.12-.02.18.02.05.22.46-.26.83-.04.03-.07.09-.06.14.01.11.01.42-.12.56-.05.05-.12.08-.21.08h0Z" fill="#9b978f"/>
                        </g>
                    </g>
                    <g>
                        <path d="M430.47,351.28s.08-.07.13-.06c.09,0,.16.07.16.16,0,.04-.03,1.09-.8,1.98-.06.07-.16.07-.22.02-.07-.06-.07-.16-.02-.22.69-.8.72-1.77.72-1.78,0-.03.01-.07.03-.09Z" fill="#fff"/>
                        <path d="M430.6,351.22c-.05,0-.1.03-.13.06-.02.03-.03.06-.03.09,0,0-.03.97-.72,1.78-.06.07-.05.17.02.22.03.03.07.04.1.04.04,0,.09-.02.12-.06.77-.89.8-1.93.8-1.98,0-.09-.07-.16-.16-.16,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                        <path d="M439.31,355.91s.02-.03.04-.04c.02-.01.41-.28.84-.18.09.02.14.11.12.19-.02.08-.11.14-.19.12-.29-.07-.58.13-.58.13-.07.05-.17.03-.22-.04-.04-.06-.04-.13,0-.18Z" fill="#fff"/>
                        <path d="M439.98,355.67c-.34,0-.62.19-.64.2-.01.01-.03.02-.04.04-.04.05-.04.13,0,.18.03.04.08.07.13.07.03,0,.06,0,.09-.03,0,0,.22-.14.46-.14.04,0,.09,0,.13.01.01,0,.03,0,.04,0,.07,0,.14-.05.15-.12.02-.09-.03-.17-.12-.19-.07-.02-.14-.02-.2-.02h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                        <path d="M438.73,356.17s.1-.08.16-.06c.09.02.14.11.12.19,0,.03-.74,3.2-.88,4.59,0,.09-.09.15-.17.14-.09,0-.15-.09-.14-.17.14-1.42.86-4.5.89-4.63,0-.02.01-.04.03-.06Z" fill="#fff"/>
                        <path d="M438.86,356.1c-.05,0-.1.02-.13.06-.01.02-.02.04-.03.06-.03.13-.75,3.22-.89,4.63,0,.09.05.17.14.17,0,0,.01,0,.02,0,.08,0,.15-.06.16-.14.14-1.4.87-4.56.88-4.59.02-.09-.03-.17-.12-.19-.01,0-.02,0-.04,0h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                        <path d="M435.58,354.96s.05-.05.08-.06c.08-.03.17.02.2.1,0,.02.17.58-.23,1.85-.4,1.25-1.94,3.26-2.01,3.34-.05.07-.15.08-.22.03-.07-.05-.08-.15-.03-.22.02-.02,1.58-2.05,1.96-3.24.37-1.15.23-1.65.23-1.65-.01-.05,0-.1.03-.14Z" fill="#fff"/>
                        <path d="M435.71,354.9s-.03,0-.05,0c-.03.01-.06.03-.08.06-.03.04-.04.09-.03.14,0,0,.14.5-.23,1.65-.38,1.19-1.94,3.22-1.96,3.24-.05.07-.04.17.03.22.03.02.06.03.1.03.05,0,.09-.02.13-.06.07-.08,1.61-2.09,2.01-3.34.4-1.27.24-1.82.23-1.85-.02-.07-.08-.11-.15-.11h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                        <polygon points="432.77 363.04 432.78 363.03 432.78 363.04 432.77 363.04" fill="#fff"/>
                        <path d="M432.73,362.96s-.1.02-.13.06c0,0,0,0,0,0-.05.07-.02.17.05.22,0,0,.87.56,1.25,1.22.03.05.08.08.14.08.03,0,.05,0,.08-.02.08-.04.1-.14.06-.22-.42-.73-1.32-1.3-1.36-1.33-.03-.02-.06-.02-.08-.02h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                        <path d="M439.83,357.95s.05-.05.08-.06c.08-.03.17.02.2.1.01.04.29.89-.44,1.88h0c-.05.08-.15.09-.22.04-.07-.05-.08-.15-.03-.22,0,0,0,0,0,0,.63-.85.41-1.56.4-1.59-.02-.05,0-.1.02-.14Z" fill="#fff"/>
                        <path d="M439.95,357.89s-.03,0-.05,0c-.03.01-.06.03-.08.06-.03.04-.04.09-.02.14,0,.03.23.74-.4,1.59,0,0,0,0,0,0-.05.07-.04.17.03.22.03.02.06.03.09.03.05,0,.1-.02.13-.06h0c.73-.99.45-1.85.44-1.88-.02-.07-.08-.11-.15-.11h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                        <path d="M434.26,354.5s.07-.06.12-.06c.09,0,.16.07.16.16,0,.1.02,2.36-2.07,5.19-.03.03-.05.07-.08.1-.05.07-.15.08-.22.03-.07-.05-.08-.15-.03-.22,0,0,0,0,0,0,1.1-1.46,1.61-2.77,1.84-3.61.25-.91.25-1.49.25-1.49,0-.04.01-.07.03-.1Z" fill="#fff"/>
                        <path d="M434.38,354.44s0,0,0,0c-.05,0-.1.03-.12.06-.02.03-.03.06-.03.1,0,0,0,.58-.25,1.49-.23.84-.74,2.15-1.84,3.61,0,0,0,0,0,0-.05.07-.04.17.03.22.03.02.06.03.1.03.05,0,.1-.02.13-.06.03-.04.05-.07.08-.1,2.1-2.83,2.08-5.1,2.07-5.19,0-.09-.07-.16-.16-.16h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                        <path d="M428.94,363.12c.24-.33.51-.6.8-.83.72-.56,1.31-.56,1.34-.56.09,0,.16.07.16.16,0,.09-.07.16-.16.16-.01,0-.53.01-1.16.51-.6.47-1.42,1.48-1.94,3.62-.02.08-.11.14-.19.12-.09-.02-.14-.11-.12-.19.3-1.25.73-2.25,1.28-2.99Z" fill="#fff"/>
                        <path d="M431.08,361.73s-.63.01-1.34.56c-.29.22-.55.5-.8.83-.55.74-.97,1.74-1.28,2.99-.02.09.03.17.12.19.01,0,.03,0,.04,0,.07,0,.14-.05.15-.12.52-2.14,1.34-3.15,1.94-3.62.63-.5,1.15-.51,1.16-.51h0c.09,0,.16-.07.16-.16,0-.09-.07-.16-.16-.16h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                        <g>
                        <path d="M421.74,362.57c-.42,0-.73-.06-.86-.12l-.08-.03-.08.02s-.47.13-1.09.13c-.71,0-1.72-.17-2.44-.96l-.04-.04-.05-.02c-.17-.07-4.14-1.7-2.25-6.8.04-.1.91-2.34,4.46-2.39h.26c3.68,0,4.71,1.15,5.53,2.42,0,.02.51,1.06-.57,2.16l-.15.16.14.17c.05.07,1.26,1.62.37,3.55-.75,1.62-2.59,1.75-3.14,1.75Z" fill="#fff"/>
                        <path d="M419.57,352.59c3.52,0,4.52,1.08,5.3,2.28.06.13.36.98-.52,1.88l-.3.32.27.34c.05.06,1.16,1.51.34,3.29-.69,1.49-2.4,1.61-2.91,1.61-.42,0-.68-.06-.77-.1l-.16-.06-.16.04s-.44.12-1.03.12c-.66,0-1.59-.15-2.25-.88l-.08-.09-.11-.04c-.16-.06-3.91-1.62-2.1-6.48.03-.09.87-2.18,4.23-2.23h.26M419.57,352.09c-.09,0-.17,0-.26,0-3.78.05-4.69,2.56-4.69,2.56-2.01,5.4,2.39,7.12,2.39,7.12.77.85,1.82,1.04,2.62,1.04.67,0,1.16-.13,1.16-.13.19.08.53.13.96.13,1.08,0,2.67-.39,3.36-1.9.97-2.1-.4-3.81-.4-3.81,1.23-1.26.6-2.47.6-2.47-.95-1.49-2.16-2.54-5.74-2.54h0Z" fill="#9b978f"/>
                        </g>
                        <g>
                        <path d="M414.86,353.9c.14-.19.33-.41.57-.63.66-.6,1.87-1.31,3.87-1.34,1.81-.03,3.12.2,4.13.69,1.02.51,1.59,1.25,2.01,1.92,0,0,0,0,0,.01,0,.01.17.34.18.84,0,.43-.12,1.07-.71,1.72.12.18.35.55.51,1.06.21.66.35,1.68-.17,2.81-.98,2.12-3.66,2.14-4.48,1.86-.16.04-.7.15-1.36.12-1.04-.04-1.9-.41-2.5-1.06-.2-.09-1.19-.54-1.98-1.57-1.45-1.88-1.05-4.16-.47-5.74,0-.02.11-.31.4-.69ZM425.16,354.71c-1.02-1.6-2.3-2.51-5.86-2.46-1.05.01-2.53.24-3.65,1.24-.67.6-.9,1.2-.9,1.21-.81,2.18-.67,4.01.41,5.43.81,1.06,1.88,1.49,1.89,1.5.02,0,.04.02.06.04,1.32,1.47,3.6.87,3.62.86.03,0,.07,0,.1,0,.5.2,3.15.4,4.12-1.68.92-1.98-.33-3.58-.38-3.65-.05-.06-.05-.15.01-.21,1.1-1.13.62-2.19.58-2.28Z" fill="#fff"/>
                        <path d="M419.57,351.93c-.09,0-.18,0-.27,0-2,.03-3.21.74-3.87,1.34-.24.22-.43.43-.57.63-.28.38-.39.68-.4.69-.59,1.58-.98,3.86.47,5.74.79,1.03,1.78,1.49,1.98,1.57.6.65,1.47,1.02,2.5,1.06.07,0,.14,0,.21,0,.56,0,1-.09,1.15-.13.21.07.55.13.95.13,1.14,0,2.8-.42,3.52-1.99.52-1.13.38-2.15.17-2.81-.16-.51-.39-.88-.51-1.06.59-.66.72-1.29.71-1.72,0-.49-.17-.82-.18-.84,0,0,0,0,0-.01-.42-.67-.99-1.41-2.01-1.92-.95-.47-2.18-.7-3.85-.7h0ZM419.63,362.66c-.77,0-1.78-.18-2.51-.99-.02-.02-.04-.03-.06-.04-.01,0-1.08-.43-1.89-1.5-1.08-1.42-1.22-3.24-.41-5.43,0,0,.23-.61.9-1.21,1.12-1,2.6-1.23,3.65-1.24.09,0,.18,0,.27,0,3.35,0,4.6.91,5.59,2.46.05.1.52,1.16-.58,2.28-.06.06-.06.15-.01.21.05.07,1.3,1.67.38,3.65-.68,1.47-2.19,1.8-3.21,1.8-.43,0-.77-.06-.91-.12-.02,0-.04-.01-.06-.01-.01,0-.03,0-.04,0-.01,0-.48.13-1.11.13h0Z" fill="#9b978f"/>
                        </g>
                    </g>
                    <g>
                        <path d="M416.03,354.61s.1-.07.16-.06c.07.01,1.62.35,3.13,1.63,1.68,1.42,3.39.82,3.58.74,1.25-.48,1.78-.07,1.92.07.06.06.06.16,0,.22-.06.06-.16.06-.22,0-.26-.27-.87-.27-1.57,0-.21.08-2.08.74-3.9-.8-1.45-1.22-2.98-1.56-2.99-1.56-.09-.02-.14-.1-.12-.19,0-.02.01-.04.03-.06Z" fill="#fff"/>
                        <path d="M416.15,354.55c-.05,0-.1.02-.13.06-.01.02-.02.04-.03.06-.02.09.04.17.12.19.02,0,1.55.34,2.99,1.56.95.8,1.91,1.01,2.65,1.01.67,0,1.16-.17,1.26-.21.35-.14.68-.2.95-.2.27,0,.49.07.62.2.03.03.07.05.11.05.04,0,.08-.01.11-.04.06-.06.07-.16,0-.22-.09-.09-.34-.3-.86-.3-.27,0-.62.06-1.06.23-.09.04-.53.19-1.14.19-.67,0-1.56-.19-2.44-.93-1.51-1.28-3.07-1.62-3.13-1.63-.01,0-.02,0-.03,0h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                        <path d="M424.24,358.4s.04-.04.07-.05c.08-.03.17.01.2.09.02.05.47,1.27-.09,2.36-.34.67-.99,1.14-1.92,1.39-.08.02-.17-.03-.19-.11-.02-.08.03-.17.11-.19.84-.23,1.42-.64,1.72-1.22.49-.96.08-2.09.07-2.1-.02-.05,0-.11.02-.15Z" fill="#fff"/>
                        <path d="M424.36,358.34s-.04,0-.06.01c-.03.01-.05.03-.07.05-.03.04-.04.1-.02.15,0,.01.42,1.14-.07,2.1-.3.59-.88,1-1.72,1.22-.08.02-.13.11-.11.19.02.07.08.12.15.12.01,0,.03,0,.04,0,.93-.25,1.58-.72,1.92-1.39.56-1.09.11-2.31.09-2.36-.02-.06-.08-.1-.15-.1h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                        <path d="M420.61,361.51s.08-.07.13-.06c1.88.06,2.22-.85,2.22-.86.03-.08.12-.13.2-.1.08.03.13.12.1.2-.02.05-.41,1.14-2.53,1.07-.09,0-.16-.08-.15-.16,0-.03.01-.06.03-.09Z" fill="#fff"/>
                        <path d="M423.11,360.48c-.07,0-.13.04-.15.11,0,0-.31.86-2.04.86-.06,0-.12,0-.18,0,0,0,0,0,0,0-.05,0-.1.03-.13.06-.02.02-.03.06-.03.09,0,.09.07.16.15.16.07,0,.13,0,.19,0,1.95,0,2.32-1.03,2.34-1.08.03-.08-.02-.17-.1-.2-.02,0-.03,0-.05,0h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                        <path d="M417.71,353.02s.05-.05.09-.06c2.71-.69,4.6.18,4.67.22.08.04.11.13.08.21-.04.08-.13.11-.21.08-.02,0-1.87-.85-4.46-.2-.08.02-.17-.03-.19-.11-.01-.05,0-.1.03-.13Z" fill="#fff"/>
                        <path d="M419.88,352.7c-.61,0-1.31.07-2.07.26-.04,0-.07.03-.09.06-.03.04-.04.09-.03.13.02.07.08.12.15.12.01,0,.03,0,.04,0,.72-.18,1.39-.25,1.98-.25,1.51,0,2.47.44,2.49.45.02.01.04.02.07.02.06,0,.12-.03.14-.09.04-.08,0-.17-.08-.21-.06-.03-1.04-.48-2.6-.48h0Z" fill="#9b978f"/>
                    </g>
                    </g>
                    <g id="boy">
                    <g>
                        <g>
                        <path d="M400.29,407.27c-1.28-.96-2.65-2.14-2.72-2.44,0-.11.03-.15.03-.15l1.03.38-.74-.78c-.23-.24-.46-.61-.4-.75.01,0,.03,0,.04,0,.07,0,.15.05.19.08l.35-.36c-.3-.35-.54-.81-.49-.93.03,0,.07-.01.1-.01.13,0,.23.07.26.1l.47.56-.03-.73s.01-.16.07-.21c.01-.01.04-.04.12-.04.51.08,1.68,1.28,2.19,2,.2.28.35.44.55.44.28,0,.39-.28.53-.66.04-.11.09-.24.15-.38.16-.38.36-.51.44-.51.09.1.13.22.13.46,0,.83.02,2.01.03,2.41l-2.3,1.52Z" fill="#fff"/>
                        <path d="M398.63,402.25c.35.11,1.38,1.12,1.92,1.88.19.27.41.54.76.54.46,0,.61-.42.77-.82.04-.11.09-.23.15-.37.03-.07.06-.13.09-.18,0,.01,0,.03,0,.04,0,.75.02,1.79.03,2.28l-2.04,1.35c-.83-.63-1.7-1.35-2.16-1.82l1.46.54-1.53-1.58c-.16-.17-.32-.42-.34-.48l.49-.5.4.47v-1.35M398.57,401.74c-.46,0-.43.51-.43.51-.07-.09-.28-.22-.48-.22-.12,0-.23.05-.29.19-.18.38.52,1.2.52,1.2,0,0-.19-.16-.37-.16-.1,0-.19.05-.24.18-.16.4.45,1.02.45,1.02,0,0-.05-.02-.11-.02-.12,0-.28.06-.28.41,0,.54,2.96,2.73,2.96,2.73l2.56-1.7s-.03-1.54-.03-2.54c0-.49-.17-.71-.38-.71-.22,0-.49.24-.67.66-.22.54-.3.88-.45.88-.08,0-.19-.1-.35-.33-.46-.65-1.7-2-2.28-2.09-.04,0-.08-.01-.12-.01h0Z" fill="#9b978f"/>
                        </g>
                        <g>
                        <path d="M402.98,403.25s0,.06,0,.09c0,.99.03,2.53.03,2.54,0,.06-.03.11-.08.15l-2.56,1.7c-.06.04-.14.04-.2,0,0,0-.75-.56-1.49-1.17-1.54-1.28-1.54-1.57-1.54-1.7,0-.24.06-.41.2-.51,0,0,.02-.01.03-.02-.19-.25-.4-.64-.27-.95.08-.19.2-.25.29-.28.01,0,.02,0,.03,0-.19-.3-.36-.68-.23-.95.08-.16.21-.26.38-.28.15-.02.3.03.43.09.03-.08.08-.17.16-.24.09-.08.26-.17.54-.13.68.11,1.99,1.59,2.39,2.16.1.14.16.21.19.24.04-.07.1-.23.15-.37.04-.12.09-.25.15-.39.22-.52.59-.82.92-.76.13.03.44.16.46.78ZM402.67,405.8c0-.35-.03-1.6-.03-2.45,0-.37-.1-.52-.19-.54-.12-.02-.36.13-.54.55-.06.14-.11.27-.15.38-.14.36-.22.58-.43.61-.18.02-.33-.13-.52-.4-.53-.74-1.7-1.95-2.16-2.02-.12-.02-.2,0-.26.04-.09.07-.1.23-.1.28,0,.07-.04.14-.11.17-.07.03-.15,0-.19-.05-.05-.06-.24-.18-.37-.16-.04,0-.08.02-.11.09-.08.16.19.66.5,1.01.06.07.05.17,0,.23-.06.06-.16.07-.23.01-.07-.06-.22-.13-.29-.12,0,0-.04,0-.06.07-.09.22.24.66.41.84.06.06.06.15.02.21-.04.07-.13.1-.2.07-.01,0-.07-.02-.1,0-.01,0-.06.05-.05.22,0,.03.06.31,1.44,1.45.57.47,1.14.91,1.36,1.07l2.38-1.58Z" fill="#fff"/>
                        <path d="M398.57,401.57c-.19,0-.32.07-.39.14-.08.07-.13.16-.16.24-.11-.05-.23-.1-.36-.1-.02,0-.05,0-.07,0-.17.02-.3.12-.38.28-.13.27.04.65.23.95-.01,0-.02,0-.03,0-.09.02-.22.09-.29.28-.13.32.09.71.27.95,0,0-.02.01-.03.02-.14.1-.2.27-.2.51,0,.12,0,.41,1.54,1.7.73.61,1.48,1.16,1.49,1.17.03.02.07.03.1.03.03,0,.07,0,.09-.03l2.56-1.7s.08-.09.08-.15c0-.02-.03-1.55-.03-2.54,0-.03,0-.06,0-.09-.03-.63-.33-.76-.46-.78-.03,0-.06,0-.09,0-.31,0-.63.29-.83.77-.06.15-.11.28-.15.39-.05.14-.11.3-.15.37-.03-.03-.09-.09-.19-.24-.4-.57-1.7-2.05-2.39-2.16-.05,0-.1-.01-.14-.01h0ZM398.13,402.42s.04,0,.06-.01c.07-.03.11-.09.11-.17,0-.05.01-.21.1-.28.04-.03.09-.05.17-.05.03,0,.06,0,.09,0,.46.08,1.64,1.28,2.16,2.02.18.25.32.4.49.4.01,0,.02,0,.04,0,.21-.03.29-.24.43-.61.04-.11.09-.24.15-.38.16-.39.39-.56.51-.56,0,0,.02,0,.02,0,.09.02.19.17.19.54,0,.85.02,2.1.03,2.45l-2.38,1.58c-.22-.17-.79-.6-1.36-1.07-1.37-1.14-1.43-1.42-1.44-1.45,0-.17.04-.21.05-.22.01,0,.03-.01.05-.01.02,0,.05,0,.05,0,.02,0,.04.01.06.01.06,0,.11-.03.14-.08.04-.07.03-.16-.02-.21-.17-.18-.5-.62-.41-.84.03-.07.05-.07.06-.07,0,0,.02,0,.02,0,.08,0,.2.07.26.12.03.03.07.04.11.04.04,0,.09-.02.12-.05.06-.06.07-.16,0-.23-.3-.36-.58-.85-.5-1.01.03-.07.08-.09.11-.09,0,0,.02,0,.03,0,.13,0,.3.11.35.16.03.04.08.06.13.06h0Z" fill="#9b978f"/>
                        </g>
                    </g>
                    <g>
                        <path d="M399.12,405.54s-.01.09-.04.12c-.06.07-.17.08-.24.01l-1.23-1.09c-.07-.06-.08-.17-.01-.24.06-.07.17-.08.24-.01l1.23,1.09s.06.08.06.12Z" fill="#fff"/>
                        <path d="M397.72,404.29s-.09.02-.13.06c-.06.07-.06.18.01.24l1.23,1.09s.07.04.11.04c.05,0,.09-.02.13-.06.03-.03.04-.08.04-.12,0-.04-.02-.09-.06-.12l-1.23-1.09s-.07-.04-.11-.04h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                        <path d="M399.6,404.91s-.01.09-.05.13c-.07.07-.17.07-.24,0l-1.54-1.5c-.07-.07-.07-.17,0-.24.07-.07.17-.07.24,0l1.54,1.5s.05.07.05.12Z" fill="#fff"/>
                        <path d="M397.88,403.24s-.09.02-.12.05c-.07.07-.06.18,0,.24l1.54,1.5s.08.05.12.05.09-.02.12-.05c.03-.04.05-.08.05-.13,0-.04-.02-.08-.05-.12l-1.54-1.5s-.08-.05-.12-.05h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                        <path d="M400.08,404.31s-.01.09-.05.13c-.07.07-.17.07-.24,0,0,0-.47-.45-.92-.93-.89-.95-.94-1.16-.9-1.31.02-.09.11-.15.21-.13.09.02.14.1.13.19.05.22.93,1.17,1.72,1.93.03.03.05.07.05.12Z" fill="#fff"/>
                        <path d="M398.13,402.08c-.08,0-.15.05-.17.13-.03.14,0,.36.9,1.31.45.48.92.92.92.93.03.03.08.05.12.05.05,0,.09-.02.12-.05.03-.04.05-.08.05-.13,0-.04-.02-.08-.05-.12-.8-.76-1.67-1.7-1.72-1.93.01-.09-.05-.17-.13-.19-.01,0-.03,0-.04,0h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                        <g>
                        <path d="M432.52,421.38c-.32-.15-1.31-.67-1.55-1.35-.08-.24-.06-.47.07-.71.7-1.3,3.28-3.71,4.48-3.71.07,0,.12,0,.18.02.04.01.1.04.16.16.38.79-.4,3.33-.77,4.36l-2.56,1.23Z" fill="#fff"/>
                        <path d="M435.52,415.86h0s.07,0,.09,0c.29.28-.06,2.24-.72,4.11l-2.36,1.14c-.42-.21-1.14-.66-1.32-1.15-.06-.17-.05-.33.05-.51.72-1.33,3.26-3.58,4.26-3.58M435.52,415.36c-1.33,0-3.99,2.51-4.7,3.84-.77,1.42,1.71,2.46,1.71,2.46l2.76-1.33s1.69-4.56.49-4.94c-.08-.02-.16-.04-.25-.04h0Z" fill="#9b978f"/>
                        </g>
                        <g>
                        <path d="M436.37,416.25c.06,1.46-.88,4.01-.92,4.14-.02.04-.05.08-.09.09l-2.76,1.33s-.1.02-.14,0c-.06-.03-1.54-.65-1.89-1.64-.13-.35-.09-.71.09-1.06.4-.74,1.34-1.79,2.35-2.63.7-.58,2-1.51,2.8-1.26.18.06.32.18.41.37.08.17.13.39.14.65ZM435.15,420.21c.37-1.02,1.18-3.63.78-4.45-.05-.1-.12-.17-.21-.2-.47-.15-1.4.3-2.48,1.2-.97.8-1.9,1.84-2.27,2.53-.14.26-.16.52-.07.78.26.74,1.34,1.28,1.63,1.41l2.63-1.26Z" fill="#fff"/>
                        <path d="M435.53,415.19c-.8,0-1.89.79-2.5,1.3-1.01.84-1.96,1.9-2.35,2.63-.19.35-.22.7-.09,1.06.35.99,1.82,1.61,1.89,1.64.02,0,.04.01.07.01.03,0,.05,0,.07-.02l2.76-1.33s.07-.05.09-.09c.05-.13.99-2.67.92-4.14-.01-.26-.05-.48-.14-.65-.09-.19-.23-.32-.41-.37-.09-.03-.19-.04-.3-.04h0ZM432.52,421.47c-.28-.13-1.37-.67-1.63-1.41-.09-.26-.07-.52.07-.78.37-.69,1.31-1.73,2.27-2.53.95-.78,1.77-1.22,2.28-1.22.07,0,.14,0,.2.03.09.03.16.09.21.2.4.82-.4,3.43-.78,4.45l-2.63,1.26h0Z" fill="#9b978f"/>
                        </g>
                    </g>
                    <g>
                        <g>
                        <path d="M441.93,430.52c-1.67,0-4.53-1.33-4.55-1.95-.03-.81.2-2.22.27-2.67.41-.17,1.57-.65,2.23-1.08.18.53.6,1.54,1.3,2.27.72.75,1.67,2.37,1.48,3.08-.04.16-.14.25-.31.3-.11.03-.25.05-.42.05Z" fill="#fff"/>
                        <path d="M439.75,425.19c.23.58.63,1.42,1.25,2.07.75.79,1.57,2.29,1.42,2.84-.01.05-.03.09-.14.12-.06.02-.17.04-.35.04-1.56,0-4.16-1.21-4.31-1.71-.03-.72.16-1.94.25-2.47.45-.18,1.27-.53,1.88-.89M440.01,424.41c-.54.52-2.58,1.32-2.58,1.32,0,0-.34,1.85-.3,2.86.04.9,3.22,2.19,4.81,2.19.19,0,.35-.02.48-.06,1.28-.36-.12-2.81-1.05-3.79s-1.35-2.52-1.35-2.52h0Z" fill="#9b978f"/>
                        </g>
                        <g>
                        <path d="M443.1,429.9c0,.14,0,.27-.04.39-.08.3-.29.5-.6.59-1.06.3-3.66-.55-4.84-1.4-.43-.31-.66-.61-.67-.89-.04-1.01.29-2.82.31-2.89.01-.06.05-.11.11-.13.02,0,2.01-.79,2.52-1.28.04-.04.11-.06.16-.04.06.02.1.06.12.12,0,.01.42,1.5,1.31,2.44.58.62,1.57,2.08,1.61,3.1ZM437.29,428.57c0,.16.2.39.53.63,1.2.87,3.66,1.6,4.54,1.35.2-.06.31-.17.36-.35.21-.75-.75-2.37-1.49-3.16-.74-.78-1.16-1.86-1.32-2.34-.64.46-1.98,1-2.34,1.15-.07.39-.32,1.88-.28,2.72Z" fill="#fff"/>
                        <path d="M440.01,424.24s-.09.02-.12.05c-.51.49-2.5,1.27-2.52,1.28-.06.02-.1.07-.11.13-.01.08-.35,1.88-.31,2.89.01.28.24.58.67.89,1.01.73,3.08,1.46,4.31,1.46.2,0,.38-.02.53-.06.31-.09.52-.29.6-.59.03-.12.04-.25.04-.39-.04-1.02-1.03-2.48-1.61-3.1-.89-.94-1.31-2.43-1.31-2.44-.02-.06-.06-.1-.12-.12-.02,0-.03,0-.05,0h0ZM441.93,430.6c-1.09,0-3.07-.65-4.1-1.4-.33-.24-.52-.47-.53-.63-.04-.85.22-2.34.28-2.72.36-.14,1.69-.69,2.34-1.15.16.48.58,1.57,1.32,2.34.75.79,1.7,2.41,1.49,3.16-.05.18-.17.29-.36.35-.12.03-.27.05-.44.05h0Z" fill="#9b978f"/>
                        </g>
                    </g>
                    <g>
                        <g>
                        <path d="M435.54,435.05c-4.61,0-13.13-3.96-14.31-4.52l-.36-11.94c.67-.84,7.25-8.8,12.69-8.8.46,0,.91.06,1.34.18,5.56,1.54,5.25,12.84,5.2,14.05-.73.6-2.32,1.34-2.33,1.34l-.24.11.12.23c.03.06,3.16,6.2.14,8.76-.46.39-1.22.59-2.25.59h0ZM434.07,416.61c-6.33,4.04-6.93,5.98-7,7.63-.07,1.63,5.34,3.62,6.43,4.01l.57.2-.26-.54c-1.09-2.3-1.35-5.22-1.38-5.76.99-1.27,2.87-1.56,2.89-1.56l.29-.04-1.26-4.1-.28.18Z" fill="#fff"/>
                        <path d="M433.56,410.04c.44,0,.87.06,1.27.17,5.24,1.45,5.08,12.04,5.03,13.69-.61.47-1.76,1.04-2.19,1.24l-.48.22.24.47c.03.06,3.07,6.02.2,8.45-.42.35-1.12.53-2.09.53-4.41,0-12.48-3.69-14.06-4.43l-.35-11.69c.92-1.12,7.24-8.64,12.44-8.64M434.56,428.88l-.52-1.09c-1.02-2.15-1.3-4.86-1.35-5.58.94-1.12,2.66-1.39,2.67-1.4l.57-.09-.17-.55-1.08-3.51-.19-.63-.55.35c-6.43,4.11-7.04,6.12-7.11,7.83-.07,1.72,4.59,3.55,6.59,4.25l1.13.4M433.56,409.54c-5.9,0-12.94,8.97-12.94,8.97l.36,12.18s9.5,4.61,14.55,4.61c1.03,0,1.87-.19,2.41-.65,3.21-2.72-.07-9.06-.07-9.06,0,0,1.75-.8,2.47-1.45,0,0,.73-12.72-5.38-14.41-.46-.13-.93-.19-1.4-.19h0ZM433.59,428.01s-6.33-2.23-6.26-3.76c.07-1.53.64-3.44,6.88-7.43l1.08,3.51s-2.07.3-3.11,1.73c0,0,.17,3.34,1.41,5.95h0Z" fill="#9b978f"/>
                        </g>
                        <g>
                        <path d="M440.52,421.41c.07,1.6,0,2.72,0,2.74,0,.05-.02.09-.06.12-.61.55-1.9,1.19-2.36,1.41.22.45.84,1.82,1.18,3.39.13.62.21,1.2.24,1.74.07,1.74-.42,3.09-1.46,3.97-1.38,1.17-4.7.85-9.85-.93-3.81-1.32-7.26-2.99-7.3-3.01-.06-.03-.09-.08-.1-.15l-.36-12.18s.01-.08.04-.11c.02-.03,2.1-2.66,4.9-5.05,1.65-1.41,3.23-2.46,4.68-3.12,1.84-.84,3.5-1.06,4.94-.67,1.44.4,2.63,1.42,3.53,3.05.71,1.28,1.24,2.94,1.58,4.93.24,1.39.35,2.75.39,3.87ZM440.18,424.06c.02-.49.12-3.41-.4-6.47-.33-1.95-.85-3.57-1.54-4.82-.85-1.54-1.97-2.51-3.32-2.88-1.35-.38-2.94-.16-4.7.65-1.43.65-2.98,1.68-4.6,3.07-2.57,2.19-4.53,4.59-4.82,4.96l.36,12.02c.58.27,3.73,1.76,7.17,2.95,4.96,1.72,8.25,2.06,9.52.99,3.07-2.6-.08-8.79-.12-8.85-.02-.04-.03-.09,0-.13.02-.04.05-.08.09-.1.02,0,1.65-.76,2.38-1.38ZM435.46,420.32s0,.07-.03.1c-.03.04-.07.07-.12.08-.02,0-1.96.3-2.96,1.62.03.46.27,3.47,1.39,5.82.03.06.02.14-.03.19-.05.05-.12.07-.18.05-.02,0-1.61-.57-3.17-1.31-2.19-1.04-3.23-1.9-3.2-2.62.03-.79.2-1.69,1.16-2.89,1.06-1.33,2.96-2.86,5.8-4.67.05-.03.1-.03.15-.02.05.02.09.06.1.11l1.08,3.51s0,.03,0,.04ZM432,422.07s0-.08.03-.11c.9-1.23,2.48-1.65,3.03-1.77l-.96-3.11c-2.7,1.74-4.51,3.21-5.53,4.48-.9,1.13-1.05,1.96-1.09,2.69-.01.31.36,1.03,3.01,2.29,1.09.52,2.2.95,2.76,1.16-1.09-2.54-1.26-5.61-1.26-5.64h0Z" fill="#fff"/>
                        <path d="M433.57,409.37c-1.07,0-2.24.29-3.49.86-1.46.66-3.03,1.72-4.68,3.12-2.8,2.39-4.88,5.03-4.9,5.05-.02.03-.04.07-.04.11l.36,12.18c0,.07.04.12.1.15.03.02,3.49,1.69,7.3,3.01,3.12,1.08,5.57,1.62,7.32,1.62,1.14,0,1.99-.23,2.53-.69,1.04-.88,1.53-2.23,1.46-3.97-.02-.54-.1-1.13-.24-1.74-.34-1.58-.96-2.94-1.18-3.39.45-.22,1.75-.86,2.36-1.41.03-.03.05-.07.06-.12,0-.02.06-1.14,0-2.74-.05-1.12-.16-2.48-.39-3.87-.34-1.99-.87-3.65-1.58-4.93-.9-1.62-2.08-2.65-3.53-3.05-.46-.13-.94-.19-1.45-.19h0ZM435.54,435.13c-1.71,0-4.14-.54-7.22-1.6-3.44-1.19-6.59-2.67-7.17-2.95l-.36-12.02c.29-.37,2.25-2.77,4.82-4.96,1.63-1.39,3.17-2.42,4.6-3.07,1.21-.55,2.33-.83,3.35-.83.47,0,.93.06,1.35.18,1.35.37,2.46,1.34,3.32,2.88.69,1.25,1.21,2.87,1.54,4.82.52,3.06.42,5.98.4,6.47-.72.61-2.36,1.37-2.38,1.38-.04.02-.08.06-.09.1-.02.04-.01.09,0,.13.03.06,3.19,6.25.12,8.85-.48.41-1.26.61-2.3.61h0ZM434.21,416.65s-.06,0-.09.03c-2.84,1.81-4.74,3.34-5.8,4.67-.96,1.21-1.13,2.1-1.16,2.89-.03.72,1.02,1.58,3.2,2.62,1.56.74,3.16,1.31,3.17,1.31.02,0,.04,0,.06,0,.05,0,.09-.02.13-.06.05-.05.06-.13.03-.19-1.12-2.35-1.36-5.36-1.39-5.82,1-1.31,2.94-1.61,2.96-1.62.05,0,.09-.04.12-.08.02-.03.03-.06.03-.1,0-.01,0-.03,0-.04l-1.08-3.51c-.02-.05-.05-.09-.1-.11-.02,0-.04-.01-.06-.01h0ZM433.27,427.71c-.56-.21-1.67-.64-2.76-1.16-2.65-1.26-3.02-1.98-3.01-2.29.03-.73.18-1.56,1.09-2.69,1.01-1.27,2.82-2.74,5.53-4.48l.96,3.11c-.55.12-2.14.54-3.03,1.77-.02.03-.03.07-.03.11h0s.17,3.09,1.26,5.64h0Z" fill="#9b978f"/>
                        </g>
                    </g>
                    <g>
                        <path d="M428.37,426.91c0,.06-.02.12-.08.15-.08.05-.19.03-.24-.05-.04-.06-.94-1.44-.9-2.7,0-.09.08-.17.18-.17.09,0,.17.08.17.18-.04,1.15.83,2.48.84,2.5.02.03.03.06.03.09Z" fill="#fff"/>
                        <path d="M427.33,424.15c-.09,0-.17.07-.17.17-.04,1.26.86,2.64.9,2.7.03.05.09.08.14.08.03,0,.07,0,.09-.03.05-.03.08-.09.08-.15,0-.03-.01-.06-.03-.09,0-.01-.88-1.34-.84-2.5,0-.09-.07-.17-.17-.18,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                        <path d="M435.66,428.64s0,.03,0,.04c-.02.09-.11.15-.2.13-1.08-.22-1.9-.63-1.94-.65-.08-.04-.12-.15-.08-.23.04-.08.15-.12.23-.08,0,0,.82.41,1.85.62.08.02.13.08.14.16Z" fill="#fff"/>
                        <path d="M433.59,427.84c-.06,0-.12.03-.15.09-.04.08,0,.19.08.23.03.02.86.43,1.94.65.01,0,.02,0,.03,0,.08,0,.15-.06.17-.14,0-.01,0-.03,0-.04,0-.08-.06-.14-.14-.16-1.03-.21-1.84-.62-1.85-.62-.02-.01-.05-.02-.08-.02h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                        <path d="M435.43,415.93c0,.07-.04.14-.11.17-.82.3-.93.74-.94.76-.02.09-.11.15-.2.13-.09-.02-.15-.11-.13-.2,0-.03.14-.65,1.16-1.02.09-.03.19.01.22.1,0,.02,0,.03.01.05Z" fill="#fff"/>
                        <path d="M435.26,415.76s-.04,0-.06.01c-1.02.37-1.15.99-1.16,1.02-.02.09.04.18.13.2.01,0,.02,0,.03,0,.08,0,.15-.06.17-.14,0-.02.12-.46.94-.76.07-.03.12-.1.11-.17,0-.02,0-.03-.01-.05-.03-.07-.09-.11-.16-.11h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                        <path d="M438.05,425.58c0,.07-.03.13-.1.16-.08.04-.19,0-.23-.08l-2.59-5.26c-.04-.08,0-.19.08-.23.08-.04.19,0,.23.08l2.59,5.26s.02.05.02.07Z" fill="#fff"/>
                        <path d="M435.29,420.16s-.05,0-.08.02c-.08.04-.12.14-.08.23l2.59,5.26c.03.06.09.1.15.1.03,0,.05,0,.08-.02.06-.03.1-.1.1-.16,0-.02,0-.05-.02-.07l-2.59-5.26c-.03-.06-.09-.1-.15-.1h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                        <g>
                        <path d="M425.29,433.63c-.3,0-.73-.12-1.34-.28l-.42-.11c-1.16-.31-3.09-.62-4.51-.82-4.95-.41-11.97-2.63-13.16-3.02l.08-4.23-.44-4.24c.87-.37,4.96-2.04,8.7-2.84,2.94-.84,4.73-1.61,5.92-2.13.79-.34,1.31-.56,1.62-.56.35,0,.53.31,1.02,1.57.61,1.56.62,2.81.64,4.03.01,1.26.02,2.44.71,3.77,1.39,2.69,2.15,4.71,1.93,7.06-.15,1.63-.36,1.81-.76,1.81h0Z" fill="#fff"/>
                        <path d="M421.76,415.64c.2,0,.38.37.79,1.41.6,1.51.61,2.75.62,3.94.01,1.29.02,2.5.74,3.88,1.37,2.65,2.12,4.64,1.91,6.92-.15,1.58-.33,1.58-.51,1.58-.27,0-.71-.12-1.27-.27l-.43-.12c-.94-.25-2.46-.53-4.57-.83-4.7-.39-11.33-2.44-12.91-2.95l.08-4.04v-.03s0-.03,0-.03l-.42-4.02c1.14-.47,4.97-2,8.52-2.77,2.94-.84,4.74-1.62,5.93-2.13.73-.32,1.26-.54,1.52-.54M421.76,415.14c-.87,0-2.58,1.26-7.59,2.69-4.27.92-8.92,2.93-8.92,2.93l.45,4.39-.09,4.41s7.9,2.63,13.37,3.09c1.55.22,3.37.52,4.48.82.84.22,1.42.41,1.82.41.66,0,.86-.48,1.01-2.04.24-2.51-.65-4.66-1.96-7.2-1.31-2.54-.06-4.55-1.33-7.78-.49-1.24-.71-1.73-1.25-1.73h0Z" fill="#9b978f"/>
                        </g>
                        <g>
                        <path d="M426.5,430.65c.02.39,0,.79-.03,1.21-.1,1.11-.24,1.76-.64,2.04-.41.28-1,.12-1.99-.15-.13-.04-.27-.07-.42-.11-.9-.24-2.44-.52-4.45-.81-2.84-.24-6.33-1.07-8.76-1.72-2.63-.71-4.62-1.37-4.64-1.37-.07-.02-.12-.09-.12-.17l.09-4.4-.45-4.38c0-.08.03-.15.1-.17.05-.02,4.7-2.03,8.95-2.94,2.9-.83,4.67-1.59,5.85-2.1,1.11-.48,1.67-.72,2.12-.54.43.18.67.73,1.08,1.77.64,1.63.65,2.98.66,4.18.01,1.2.02,2.34.66,3.58,1.19,2.3,1.93,4.13,2.01,6.09ZM405.79,429.45c1.01.33,8.19,2.62,13.22,3.04,0,0,0,0,.01,0,2.06.3,3.57.57,4.5.82.15.04.29.08.42.11.89.24,1.43.39,1.7.2.25-.17.38-.66.49-1.79.22-2.36-.54-4.39-1.94-7.1-.68-1.31-.69-2.49-.7-3.74-.01-1.22-.02-2.48-.64-4.06-.36-.93-.59-1.45-.89-1.58-.31-.13-.86.11-1.85.53-1.18.51-2.97,1.28-5.89,2.12,0,0,0,0-.01,0-3.84.82-8.03,2.56-8.77,2.87l.44,4.27s0,.01,0,.02l-.08,4.29Z" fill="#fff"/>
                        <path d="M421.76,414.97c-.4,0-.93.23-1.79.6-1.17.51-2.95,1.27-5.85,2.1-4.24.91-8.9,2.92-8.95,2.94-.07.03-.11.1-.1.17l.45,4.38-.09,4.4c0,.08.05.14.12.17.02,0,2.01.67,4.64,1.37,2.43.65,5.93,1.48,8.76,1.72,2.02.29,3.56.57,4.45.81.15.04.29.08.42.11.62.17,1.09.3,1.45.3.21,0,.39-.04.54-.15.4-.28.53-.93.64-2.04.04-.41.05-.81.03-1.21-.08-1.96-.82-3.79-2.01-6.09-.64-1.24-.65-2.38-.66-3.58-.01-1.19-.02-2.55-.66-4.18-.41-1.04-.64-1.59-1.08-1.77-.1-.04-.21-.06-.33-.06h0ZM425.29,433.71c-.31,0-.75-.12-1.35-.29-.13-.04-.27-.07-.42-.11-.92-.25-2.44-.52-4.5-.82,0,0,0,0-.01,0-5.03-.42-12.2-2.71-13.22-3.04l.08-4.29s0-.01,0-.02l-.44-4.27c.74-.31,4.93-2.05,8.77-2.87,0,0,0,0,.01,0,2.92-.84,4.71-1.61,5.89-2.12.81-.35,1.32-.57,1.65-.57.08,0,.14.01.2.04.31.13.53.66.89,1.58.62,1.57.63,2.83.64,4.06.01,1.25.02,2.42.7,3.74,1.4,2.71,2.16,4.74,1.94,7.1-.11,1.13-.24,1.62-.49,1.79-.09.06-.2.09-.35.09h0Z" fill="#9b978f"/>
                        </g>
                    </g>
                    <g>
                        <g>
                        <g>
                            <path d="M400.95,448.9c-.15,0-.18-.18-.18-.24l-.04-.71-.41.58s-.19.16-.29.16c-.12-.15.08-.63.35-1.01l-.38-.33c-.06.06-.16.12-.21.12-.08-.16.11-.55.32-.81l.7-.85s-1.01.47-1.01.47c-.02,0-.05-.04-.06-.15.04-.3,1.31-1.58,2.51-2.65l2.42,1.32c.03.4.1,1.58.17,2.41.03.34-.05.44-.07.46,0,0-.01,0-.02,0-.12,0-.32-.13-.49-.46-.07-.13-.13-.26-.18-.37-.18-.37-.29-.61-.56-.61-.24,0-.39.23-.54.48-.44.76-1.51,2.05-1.94,2.16-.04,0-.07.01-.1.01Z" fill="#fff"/>
                            <path d="M402.29,443.79l.76.41-2.42,2.24,1.1-1.33-1.43.67c.42-.5,1.23-1.29,2-1.99M403.13,444.26l1.3.71c.03.49.1,1.53.17,2.27,0,.01,0,.03,0,.04-.03-.05-.07-.1-.11-.17-.07-.13-.13-.25-.18-.36-.19-.39-.36-.76-.78-.76s-.63.38-.76.61c-.46.78-1.35,1.82-1.76,2.02l-.05-1.34,2.16-3.03M402.22,443.19s-2.76,2.43-2.72,2.97c.02.32.17.38.28.38.08,0,.14-.03.14-.03,0,0-.56.67-.36,1.06.06.12.15.16.23.16.19,0,.38-.19.38-.19,0,0-.63.88-.42,1.24.07.12.17.17.28.17.2,0,.42-.17.49-.26,0,0,.02.47.43.47.05,0,.1,0,.16-.02.57-.14,1.69-1.59,2.09-2.28.15-.25.24-.36.33-.36.15,0,.25.34.52.84.2.39.48.6.7.6s.39-.23.35-.75c-.09-1-.18-2.54-.18-2.54l-2.69-1.47h0Z" fill="#9b978f"/>
                        </g>
                        <g>
                            <path d="M405.27,447.28c.03.63-.26.78-.39.82-.33.09-.72-.18-.98-.68-.07-.14-.13-.27-.19-.38-.06-.13-.14-.28-.18-.35-.03.03-.09.1-.17.25-.35.6-1.53,2.19-2.2,2.36-.27.07-.45,0-.55-.08-.09-.06-.14-.15-.18-.23-.12.08-.27.13-.42.13-.17,0-.31-.1-.4-.25-.15-.26-.01-.65.15-.96-.01,0-.02,0-.03,0-.09-.02-.23-.07-.32-.25-.16-.31.03-.71.19-.97,0,0-.02,0-.03-.01-.14-.08-.22-.25-.24-.49,0-.12-.03-.41,1.4-1.82.68-.67,1.37-1.28,1.38-1.29.05-.05.13-.06.2-.02l2.69,1.47c.05.03.08.08.09.14,0,.02.1,1.54.18,2.53,0,.03,0,.06,0,.09ZM399.88,448.61s0,.06.02.08c.04.07.08.08.12.08.13,0,.31-.13.36-.19.04-.06.12-.09.19-.07s.12.08.12.16c0,.05.03.2.12.27.06.04.15.05.26.02.45-.11,1.53-1.41,1.99-2.2.17-.29.3-.45.49-.44.21,0,.31.22.48.57.05.11.11.23.18.37.21.4.47.54.58.51.09-.02.17-.18.14-.55-.07-.85-.15-2.1-.18-2.45l-2.5-1.37c-.21.18-.74.67-1.26,1.18-1.27,1.25-1.31,1.54-1.31,1.56.01.17.06.21.07.22.03.02.09,0,.11,0,.07-.03.16,0,.21.05.05.06.05.15,0,.21-.16.19-.45.66-.34.87.03.06.06.07.07.07.07.01.21-.07.28-.14.06-.06.16-.06.23,0,.07.06.08.16.03.23-.21.29-.44.74-.43.97Z" fill="#fff"/>
                            <path d="M402.22,443.01s-.08.01-.11.04c0,0-.7.62-1.38,1.29-1.43,1.41-1.41,1.7-1.4,1.82.02.24.1.4.24.49,0,0,.02.01.03.01-.16.26-.35.67-.19.97.09.18.22.24.32.25.01,0,.02,0,.03,0-.16.31-.3.71-.15.96.09.15.23.24.4.25,0,0,.01,0,.02,0,.14,0,.28-.06.39-.13.04.08.1.17.18.23.07.05.18.11.34.11.06,0,.13,0,.21-.03.67-.17,1.85-1.75,2.2-2.36.09-.15.14-.22.17-.25.05.07.12.22.18.35.05.11.11.24.19.38.23.43.55.7.85.7.04,0,.09,0,.13-.02.13-.04.42-.19.39-.82,0-.03,0-.06,0-.09-.08-.99-.18-2.52-.18-2.53,0-.06-.04-.11-.09-.14l-2.69-1.47s-.05-.02-.08-.02h0ZM399.78,446.37s-.03,0-.04,0c-.01,0-.06-.05-.07-.22,0-.03.04-.31,1.31-1.56.53-.52,1.06-1,1.26-1.18l2.5,1.37c.02.35.1,1.6.18,2.45.03.37-.06.53-.14.55-.01,0-.02,0-.04,0-.13,0-.35-.15-.54-.51-.07-.14-.13-.26-.18-.37-.17-.35-.27-.56-.48-.57,0,0,0,0-.01,0-.18,0-.31.16-.47.44-.46.79-1.54,2.08-1.99,2.2-.04.01-.09.02-.12.02-.06,0-.1-.01-.14-.04-.09-.07-.12-.22-.12-.27,0-.07-.05-.14-.12-.16-.02,0-.03,0-.05,0-.05,0-.11.03-.14.07-.04.06-.22.19-.35.19,0,0,0,0,0,0-.04,0-.08-.01-.12-.08-.01-.02-.02-.05-.02-.08,0-.23.23-.68.43-.97.05-.07.04-.17-.03-.23-.03-.03-.07-.04-.11-.04-.04,0-.09.02-.12.05-.07.06-.19.14-.26.14,0,0-.01,0-.01,0,0,0-.04,0-.07-.07-.11-.21.18-.68.34-.87.05-.06.05-.15,0-.21-.03-.04-.08-.07-.14-.07-.02,0-.05,0-.07.01,0,0-.04.01-.07.01h0Z" fill="#9b978f"/>
                        </g>
                        </g>
                        <g>
                        <path d="M401.22,445.31s-.01.09-.05.13l-1.13,1.19c-.07.07-.17.07-.24,0-.07-.07-.07-.17,0-.24l1.13-1.19c.07-.07.17-.07.24,0,.03.03.05.07.05.12Z" fill="#fff"/>
                        <path d="M401.05,445.15s-.09.02-.12.05l-1.13,1.19c-.07.07-.06.18,0,.24.03.03.08.05.12.05.05,0,.09-.02.12-.05l1.13-1.19s.05-.08.05-.13c0-.04-.02-.08-.05-.12-.03-.03-.08-.05-.12-.05h0Z" fill="#9b978f"/>
                        </g>
                        <g>
                        <path d="M401.76,445.91s-.01.09-.04.12l-1.41,1.62c-.06.07-.17.08-.24.02-.07-.06-.08-.17-.02-.24l1.41-1.62c.06-.07.17-.08.24-.02.04.03.06.08.06.12Z" fill="#fff"/>
                        <path d="M401.58,445.74s-.1.02-.13.06l-1.41,1.62c-.06.07-.05.18.02.24.03.03.07.04.11.04.05,0,.1-.02.13-.06l1.41-1.62s.04-.08.04-.12c0-.05-.02-.09-.06-.12-.03-.03-.07-.04-.11-.04h0Z" fill="#9b978f"/>
                        </g>
                        <g>
                        <path d="M402.29,446.46s-.01.09-.04.12c-.73.82-1.53,1.84-1.56,2.06.02.08-.03.17-.11.2-.09.03-.19-.02-.22-.11-.05-.14-.02-.36.79-1.38.41-.51.84-.99.84-1,.06-.07.17-.08.24-.01.04.03.06.08.06.12Z" fill="#fff"/>
                        <path d="M402.12,446.3s-.09.02-.13.06c0,0-.43.49-.84,1-.81,1.02-.84,1.24-.79,1.38.02.07.09.12.16.12.02,0,.04,0,.05,0,.08-.03.13-.11.11-.2.03-.23.83-1.24,1.56-2.06.03-.03.04-.08.04-.12,0-.04-.02-.09-.06-.12-.03-.03-.07-.04-.11-.04h0Z" fill="#9b978f"/>
                        </g>
                        <g>
                        <g>
                            <path d="M404.96,444.4c-.85-.06-2.05-.67-2.41-1.14-.08-.1-.09-.17-.09-.19.11-.47,2.62-7.09,3.58-9.61l.03-.08-.03-.09c-.64-1.88-.57-3.75-.57-3.77,0-.09.05-2,2.69-2,.78,0,1.71.17,2.78.5,4.88,1.52,10.63,1.64,12.27,1.64.06,0,.12,0,.18,0-.81,2.09-2.98,3.04-3,3.05-.08.04-.63.38-1.35,2.09-.31.74-.73,1.14-1.18,1.14-.12,0-.19-.03-.19-.03-1.35-.64-3.29-.78-4.67-.78-.82,0-1.38.05-1.38.05h-.13s-.07.12-.07.12c-2.84,4.86-5.94,8.48-6.47,9.08Z" fill="#fff"/>
                            <path d="M408.15,427.78c.75,0,1.66.16,2.7.49,4.73,1.47,10.26,1.64,12.14,1.65-.86,1.75-2.7,2.57-2.76,2.6-.15.09-.72.5-1.44,2.2-.27.63-.61.99-.95.99-.04,0-.08,0-.09,0,0,0,0,0,0,0-1.4-.66-3.37-.8-4.78-.8-.81,0-1.37.05-1.4.05l-.26.02-.13.22c-2.71,4.63-5.65,8.13-6.36,8.95-.87-.11-1.97-.76-2.14-1.06.22-.73,2.22-6.02,3.56-9.52l.06-.17-.06-.17c-.63-1.84-.56-3.66-.56-3.69,0-.18.11-1.75,2.44-1.75M408.15,427.28c-2.93,0-2.94,2.24-2.94,2.24,0,0-.08,1.9.58,3.86,0,0-3.46,9.05-3.59,9.64-.14.59,1.71,1.62,2.86,1.64,0,0,3.42-3.82,6.58-9.21,0,0,.55-.05,1.35-.05,1.29,0,3.23.12,4.57.76,0,0,.11.05.29.05.35,0,.94-.19,1.41-1.3.71-1.68,1.22-1.96,1.22-1.96,0,0,2.51-1.08,3.25-3.54,0,0-.19,0-.53,0-1.73,0-7.38-.12-12.2-1.62-1.17-.36-2.11-.51-2.85-.51h0Z" fill="#9b978f"/>
                        </g>
                        <g>
                            <path d="M423.91,429.4s0,.04,0,.06c-.74,2.44-3.12,3.55-3.34,3.64-.04.03-.51.38-1.14,1.87-.29.69-.67,1.13-1.12,1.31-.44.18-.79.03-.8.02,0,0,0,0,0,0-.87-.41-2.15-.66-3.71-.72-.98-.04-1.78,0-2.04.02-3.11,5.31-6.52,9.12-6.55,9.16-.03.04-.08.06-.13.06-.92-.01-2.36-.67-2.85-1.3-.15-.19-.21-.38-.17-.54.13-.58,3.26-8.76,3.58-9.6-.64-1.92-.58-3.75-.57-3.86,0-.08.03-1.13.98-1.82,1.04-.76,2.73-.79,5.03-.07,5.68,1.77,12.61,1.61,12.68,1.61.05,0,.11.02.14.07.02.03.03.06.03.1ZM417.64,435.99s.85.31,1.47-1.16c.71-1.68,1.24-2.01,1.29-2.04,0,0,.01,0,.02,0,.02-.01,2.29-1.01,3.08-3.21-1.28,0-7.41-.03-12.54-1.63-2.16-.67-3.79-.67-4.72.02-.83.6-.84,1.54-.84,1.55,0,0,0,0,0,0,0,.02-.07,1.9.58,3.8.01.04.01.08,0,.12-1.19,3.13-3.48,9.16-3.59,9.62-.01.06.02.15.1.25.38.49,1.62,1.12,2.51,1.17.44-.51,3.61-4.17,6.5-9.13.03-.05.08-.08.13-.08.16-.01,3.82-.31,6.01.72Z" fill="#fff"/>
                            <path d="M408.15,427.11c-.88,0-1.59.2-2.12.59-.94.69-.98,1.74-.98,1.82,0,.11-.07,1.94.57,3.86-.32.84-3.44,9.03-3.58,9.6-.04.17.02.35.17.54.49.63,1.93,1.29,2.85,1.3,0,0,0,0,0,0,.05,0,.1-.02.13-.06.03-.04,3.44-3.85,6.55-9.16.19-.01.65-.04,1.26-.04.24,0,.51,0,.79.02,1.56.06,2.84.31,3.71.72,0,0,0,0,0,0,0,0,.15.06.36.06.13,0,.28-.02.44-.09.45-.18.83-.62,1.12-1.31.63-1.49,1.1-1.84,1.14-1.87.21-.09,2.6-1.2,3.34-3.64,0-.02,0-.04,0-.06,0-.03-.01-.07-.03-.1-.03-.04-.08-.07-.14-.07,0,0,0,0,0,0-.01,0-.18,0-.48,0-1.67,0-7.38-.12-12.2-1.62-1.11-.35-2.08-.52-2.91-.52h0ZM404.99,444.48c-.89-.05-2.13-.68-2.51-1.17-.08-.1-.12-.2-.1-.25.11-.46,2.39-6.49,3.59-9.62.01-.04.02-.08,0-.12-.65-1.9-.58-3.78-.58-3.8,0,0,0,0,0,0,0,0,.02-.95.84-1.55.47-.34,1.12-.51,1.92-.51.79,0,1.73.17,2.8.5,4.86,1.51,10.62,1.63,12.3,1.63.09,0,.17,0,.24,0-.79,2.19-3.06,3.2-3.08,3.21,0,0-.01,0-.02,0-.06.03-.58.36-1.29,2.04-.44,1.03-.96,1.19-1.25,1.19-.12,0-.21-.03-.22-.04-1.37-.65-3.32-.77-4.62-.77-.78,0-1.33.04-1.39.05-.06,0-.11.04-.13.08-2.9,4.96-6.06,8.62-6.5,9.13h0Z" fill="#9b978f"/>
                        </g>
                        </g>
                        <g>
                        <path d="M407.63,434.18s0,.03,0,.05c-.02.09-.11.15-.2.13-.15-.03-1.5-.35-1.77-.9-.04-.08,0-.19.08-.23.08-.04.19,0,.23.08.15.3,1.03.6,1.54.72.08.02.13.08.13.16Z" fill="#fff"/>
                        <path d="M405.8,433.21s-.05,0-.08.02c-.08.04-.12.15-.08.23.28.54,1.62.86,1.77.9.01,0,.03,0,.04,0,.08,0,.15-.05.17-.13,0-.02,0-.03,0-.05,0-.08-.06-.14-.13-.16-.52-.12-1.39-.42-1.54-.72-.03-.06-.09-.09-.15-.09h0Z" fill="#9b978f"/>
                        </g>
                        <g>
                        <path d="M421.01,432.76c0,.06-.03.12-.08.15-.81.52-1.85.16-2.76-.21-.94-.38-2.27-.46-2.29-.46-.09,0-.17-.09-.16-.18,0-.09.09-.17.18-.16.06,0,1.41.08,2.4.48,1.03.42,1.84.62,2.45.24.08-.05.19-.03.24.05.02.03.03.06.03.08Z" fill="#fff"/>
                        <path d="M415.89,431.91c-.09,0-.17.07-.17.16,0,.09.07.18.16.18.01,0,1.35.08,2.29.46.58.24,1.22.47,1.81.47.34,0,.66-.07.95-.26.05-.03.08-.09.08-.15,0-.03,0-.06-.03-.08-.03-.05-.09-.08-.14-.08-.03,0-.06,0-.09.03-.23.14-.48.21-.76.21-.48,0-1.04-.18-1.68-.44-.99-.4-2.34-.48-2.4-.48,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                        </g>
                        <g>
                        <path d="M412.92,434.64s0,0,0,0h0Z" fill="#fff"/>
                        <path d="M412.9,434.39s-.03,0-.05,0c-.74.2-1.32.91-1.35.94-.06.07-.05.18.02.24.03.03.07.04.11.04.05,0,.1-.02.13-.06,0,0,.54-.65,1.17-.82.08-.02.13-.09.13-.17,0-.01,0-.03,0-.04-.02-.08-.09-.13-.17-.13h0Z" fill="#9b978f"/>
                        </g>
                    </g>
                    <g>
                        <g>
                        <path d="M407.1,422.7c-2.23,0-2.42-1.71-2.43-1.78,0-.03-.23-1.88.25-3.81l.02-.09-.04-.08c-1.17-2.42-4.23-8.81-4.37-9.27,0-.02,0-.08.07-.19.32-.5,1.47-1.2,2.31-1.33.57.56,3.97,3.9,7.21,8.51l.07.11h.13c.16,0,3.87-.01,5.97-1.24h0s.1-.04.24-.04c.3,0,.75.18,1.21,1.04.86,1.64,1.43,1.93,1.5,1.96.05.02,2.29.79,3.27,2.8-1.5.12-7.42.7-12.27,2.67-1.22.5-2.28.75-3.14.75Z" fill="#fff"/>
                        <path d="M402.83,406.41c.77.76,4,3.99,7.08,8.39l.15.21h.26c.16,0,3.94-.01,6.07-1.26,0,0,.06-.02.15-.02.33,0,.68.32.99.91.86,1.64,1.45,2,1.66,2.09.02,0,1.92.67,2.92,2.34-1.96.17-7.36.79-11.96,2.66-1.19.48-2.22.73-3.05.73-1.96,0-2.17-1.39-2.18-1.57,0-.02-.22-1.83.25-3.71l.04-.18-.08-.16c-1.62-3.37-4.06-8.48-4.34-9.19.15-.32,1.19-1.05,2.04-1.24M403,405.88c-1.14.11-2.9,1.29-2.71,1.87s4.39,9.31,4.39,9.31c-.5,2-.26,3.89-.26,3.89,0,0,.18,2.01,2.68,2.01.81,0,1.86-.21,3.23-.77,5.6-2.27,12.55-2.68,12.55-2.68-.95-2.39-3.54-3.25-3.54-3.25,0,0-.53-.24-1.38-1.85-.52-.99-1.07-1.18-1.43-1.18-.22,0-.37.08-.37.08-2.06,1.2-5.79,1.2-5.85,1.2h0c-3.59-5.11-7.32-8.63-7.32-8.63h0Z" fill="#9b978f"/>
                        </g>
                        <g>
                        <path d="M423.05,419.5s0,.07-.03.1c-.03.05-.08.08-.13.08-.07,0-6.98.43-12.5,2.67-2.23.91-3.92,1.02-5.02.35-1-.61-1.12-1.65-1.13-1.73-.01-.11-.23-1.93.25-3.89-.39-.81-4.19-8.71-4.37-9.27-.05-.16-.01-.35.12-.56.44-.67,1.82-1.45,2.73-1.54.05,0,.1.01.13.05.04.04,3.75,3.55,7.3,8.58.58,0,3.83-.11,5.67-1.18,0,0,0,0,0,0,.01,0,.35-.18.8-.04.47.14.88.55,1.23,1.22.75,1.42,1.24,1.74,1.29,1.77.23.08,2.69.98,3.63,3.35,0,.02.01.04.01.06ZM404.59,420.93s.1.95.97,1.48c.99.6,2.62.47,4.71-.38,4.98-2.02,11.08-2.58,12.36-2.67-.97-2.12-3.32-2.93-3.34-2.94,0,0-.01,0-.02,0-.06-.03-.61-.31-1.46-1.93-.74-1.4-1.51-1.06-1.56-1.03-2.09,1.22-5.77,1.22-5.93,1.22-.06,0-.11-.03-.14-.07-3.3-4.7-6.76-8.08-7.24-8.55-.88.12-2.06.85-2.4,1.37-.07.11-.1.2-.08.26.14.45,2.93,6.27,4.38,9.28.02.04.02.08.01.12-.49,1.95-.26,3.81-.26,3.83,0,0,0,0,0,0ZM404.42,420.95h0s0,0,0,0Z" fill="#fff"/>
                        <path d="M403,405.71s-.01,0-.02,0c-.91.09-2.29.87-2.73,1.54-.13.2-.18.39-.12.56.18.56,3.98,8.46,4.37,9.27-.48,1.97-.26,3.78-.25,3.89,0,.08.13,1.12,1.13,1.73.47.29,1.04.43,1.72.43.91,0,2.02-.26,3.3-.78,5.51-2.24,12.43-2.66,12.5-2.67.05,0,.1-.03.13-.08.02-.03.03-.06.03-.1,0-.02,0-.04-.01-.06-.94-2.37-3.4-3.27-3.63-3.35-.06-.03-.55-.35-1.29-1.77-.35-.66-.76-1.07-1.23-1.22-.13-.04-.25-.05-.35-.05-.27,0-.44.09-.45.1,0,0,0,0,0,0-1.84,1.07-5.1,1.17-5.67,1.18-3.55-5.03-7.26-8.55-7.3-8.58-.03-.03-.07-.05-.12-.05h0ZM407.09,422.78c-.61,0-1.13-.12-1.53-.37-.87-.53-.97-1.47-.97-1.48,0,0,0,0,0,0,0-.02-.23-1.88.26-3.83,0-.04,0-.08-.01-.12-1.45-3.02-4.23-8.84-4.38-9.28-.02-.06.01-.15.08-.26.34-.52,1.52-1.25,2.4-1.37.48.47,3.94,3.85,7.24,8.55.03.05.08.07.14.07h0c.21,0,3.85-.02,5.93-1.22.02,0,.12-.06.28-.06.3,0,.8.17,1.28,1.09.85,1.62,1.4,1.9,1.46,1.93,0,0,.01,0,.02,0,.02,0,2.37.81,3.34,2.94-1.28.1-7.38.65-12.36,2.67-1.23.5-2.3.75-3.17.75h0ZM404.42,420.95h0s0,0,0,0h0Z" fill="#9b978f"/>
                        </g>
                    </g>
                    <g>
                        <g>
                        <path d="M407.81,430.12c-.4,0-.77-.13-1.1-.39-.38-.3-.75-.44-1.15-.44-.3,0-.59.08-.86.16-.29.08-.58.17-.91.17-.3,0-.6-.07-.93-.21-1.36-.61-1.45-1.95-1.43-2.5,0-.21-.04-.42-.16-.59-.3-.46-.93-1.65-.42-2.8.34-.76.81-.97,1.4-1.23.57-.25,1.21-.53,1.88-1.32.45-.54,1.33-.87,2.31-.87,1.42,0,3.21.74,3.55,2.81,0,.04.39,1.55-.18,2.54-.46.79-.38,1.54-.3,2.28.04.38.08.74.04,1.1-.06.62-.81,1.31-1.75,1.31Z" fill="#fff"/>
                        <path d="M406.44,419.83v.5c1.33,0,2.99.68,3.31,2.64,0,.01.36,1.43-.16,2.33-.5.86-.41,1.69-.33,2.43.04.37.08.71.04,1.05-.04.49-.72,1.08-1.5,1.08-.34,0-.66-.11-.95-.34-.42-.33-.85-.49-1.3-.49-.34,0-.64.09-.93.17-.28.08-.55.16-.85.16-.27,0-.54-.06-.83-.19-1.18-.52-1.31-1.64-1.28-2.27.01-.27-.06-.52-.2-.74-.27-.42-.86-1.52-.4-2.57.3-.67.69-.84,1.27-1.1.56-.25,1.27-.55,1.97-1.39.4-.48,1.22-.78,2.11-.78v-.5M406.44,419.83c-1.02,0-1.98.35-2.5.96-1.35,1.6-2.61,1-3.32,2.61-.56,1.27.12,2.56.43,3.04.09.13.13.29.12.45-.03.59.07,2.07,1.58,2.74.39.17.73.23,1.03.23.7,0,1.21-.32,1.77-.32.3,0,.62.09,1,.39.4.31.84.44,1.26.44,1.01,0,1.93-.75,2-1.54.1-1.11-.42-2.18.22-3.28.64-1.1.21-2.71.21-2.71-.35-2.12-2.15-3.02-3.8-3.02h0Z" fill="#9b978f"/>
                        </g>
                        <g>
                        <path d="M410.54,423.82c.02.56-.04,1.25-.37,1.82-.39.67-.32,1.33-.24,2.02.04.38.08.78.05,1.18-.05.61-.54,1.2-1.24,1.5-.79.34-1.62.24-2.29-.28-.63-.49-1.07-.37-1.64-.21-.56.16-1.2.34-2.13-.07-1.6-.71-1.71-2.27-1.68-2.91,0-.13-.03-.24-.09-.35-.33-.52-1.04-1.86-.45-3.2.41-.91.99-1.17,1.62-1.44.53-.23,1.12-.49,1.73-1.21.76-.9,2.38-1.26,3.86-.86,1.49.41,2.49,1.5,2.73,2.99.02.07.12.48.14,1.01ZM409.53,427.05c-.02-.52.03-1.04.34-1.58.59-1.02.2-2.56.19-2.58,0,0,0-.01,0-.02-.22-1.36-1.13-2.35-2.49-2.72-1.33-.37-2.84-.05-3.5.75-.66.78-1.29,1.06-1.85,1.3-.61.26-1.09.47-1.44,1.27-.53,1.19.12,2.41.42,2.88.1.16.15.35.15.55-.03.57.07,1.95,1.48,2.58.81.36,1.36.2,1.89.05.58-.16,1.17-.33,1.94.27.56.44,1.27.53,1.94.24.58-.25.99-.74,1.04-1.21.03-.37,0-.75-.05-1.12-.02-.22-.05-.43-.05-.65Z" fill="#fff"/>
                        <path d="M406.43,419.66c-1.07,0-2.07.37-2.62,1.02-.61.72-1.2.98-1.73,1.21-.62.27-1.21.53-1.62,1.44-.6,1.34.11,2.69.45,3.2.07.1.1.22.09.35-.03.64.08,2.2,1.68,2.91.42.19.78.25,1.1.25.39,0,.72-.09,1.03-.18.26-.07.5-.14.74-.14.28,0,.56.09.89.35.41.32.88.48,1.36.48.31,0,.62-.07.92-.2.7-.3,1.19-.89,1.24-1.5.04-.4,0-.8-.05-1.18-.07-.7-.14-1.35.24-2.02.33-.57.39-1.26.37-1.82-.02-.53-.12-.94-.14-1.01-.25-1.49-1.24-2.58-2.73-2.99-.41-.11-.83-.17-1.24-.17h0ZM403.78,429.69c-.28,0-.59-.06-.96-.22-1.41-.63-1.5-2.01-1.48-2.58,0-.2-.04-.39-.15-.55-.3-.47-.95-1.69-.42-2.88.35-.79.83-1,1.44-1.27.56-.24,1.2-.52,1.85-1.3.48-.57,1.4-.9,2.37-.9.38,0,.76.05,1.13.15,1.36.37,2.27,1.37,2.49,2.72,0,0,0,.01,0,.02,0,.02.4,1.55-.19,2.58-.31.54-.36,1.06-.34,1.58,0,.22.03.44.05.65.04.37.08.75.05,1.12-.04.48-.46.96-1.04,1.21-.26.11-.53.17-.79.17-.41,0-.81-.14-1.15-.41-.41-.32-.77-.42-1.1-.42-.29,0-.57.08-.84.15-.29.08-.59.17-.94.17h0Z" fill="#9b978f"/>
                        </g>
                    </g>
                    <g>
                        <g>
                        <path d="M409.88,427.89c-1.26-1.65-.15-4.68.22-5.56.43.27,1.35,1.03,1.53,2.59.19,1.65-1.25,2.66-1.75,2.97Z" fill="#fff"/>
                        <path d="M410.22,422.72c.43.35,1.03,1.03,1.17,2.23.16,1.35-.87,2.22-1.43,2.6-.88-1.42-.14-3.78.26-4.83M409.99,421.98s-2,4.21-.16,6.23c0,0,2.31-1.12,2.05-3.31-.25-2.19-1.89-2.92-1.89-2.92h0Z" fill="#9b978f"/>
                        </g>
                        <g>
                        <path d="M412.07,425.1c.04.87-.31,1.69-1,2.39-.56.57-1.15.86-1.17.87-.07.03-.15.02-.2-.04-.79-.87-1.02-2.26-.65-4.02.27-1.31.76-2.35.78-2.4.04-.08.14-.12.22-.08.07.03,1.73.79,1.99,3.05,0,.07.01.15.02.22ZM409.87,428c.45-.26,2.05-1.31,1.85-3.08-.1-.86-.43-1.59-.98-2.17-.26-.27-.51-.44-.66-.53-.33.77-1.61,4.05-.2,5.78ZM409.83,428.21h0s0,0,0,0Z" fill="#fff"/>
                        <path d="M409.99,421.81c-.06,0-.13.04-.15.1-.02.04-.51,1.09-.78,2.4-.37,1.76-.14,3.15.65,4.02.03.04.08.06.13.06.03,0,.05,0,.07-.02.02-.01.61-.3,1.17-.87.69-.7,1.03-1.53,1-2.39,0-.07,0-.15-.02-.22-.26-2.26-1.92-3.02-1.99-3.05-.02-.01-.05-.01-.07-.01h0ZM409.87,428c-1.4-1.72-.13-5,.2-5.78.15.09.4.26.66.53.55.58.88,1.31.98,2.17.21,1.77-1.4,2.82-1.85,3.08h0ZM409.83,428.21h0s0,0,0,0h0Z" fill="#9b978f"/>
                        </g>
                    </g>
                    <g>
                        <path d="M404.8,428.94s0,.02,0,.03c-.01.09-.1.16-.19.15-1.01-.13-1.46-.96-1.48-.99-.05-.08-.01-.19.07-.23.08-.05.19-.01.23.07,0,.01.4.7,1.23.81.08.01.15.08.15.16Z" fill="#fff"/>
                        <path d="M403.27,427.88s-.06,0-.08.02c-.08.05-.11.15-.07.23.02.03.48.86,1.48.99,0,0,.02,0,.02,0,.08,0,.16-.06.17-.15,0-.01,0-.02,0-.03,0-.08-.06-.15-.15-.16-.83-.11-1.22-.8-1.23-.81-.03-.06-.09-.09-.15-.09h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                        <path d="M407.31,428.84s0,.02,0,.03c-.01.09-.1.16-.19.15-2.2-.29-3.11-1.42-3.14-1.46-.06-.07-.05-.18.03-.24.07-.06.18-.05.24.03,0,.01.87,1.07,2.92,1.34.08.01.15.08.15.16Z" fill="#fff"/>
                        <path d="M404.11,427.27s-.07.01-.11.04c-.07.06-.09.17-.03.24.04.05.94,1.18,3.14,1.46,0,0,.02,0,.02,0,.08,0,.16-.06.17-.15,0-.01,0-.02,0-.03,0-.08-.07-.15-.15-.16-2.05-.27-2.91-1.32-2.92-1.34-.03-.04-.08-.07-.13-.07h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                        <path d="M408.57,428.3s0,.02,0,.03c-.01.09-.1.16-.19.15-1.83-.2-2.89-.82-2.94-.84-.08-.05-.11-.15-.06-.23.05-.08.15-.11.23-.06.01,0,1.06.61,2.8.8.09,0,.15.08.15.16Z" fill="#fff"/>
                        <path d="M405.53,427.31c-.06,0-.12.03-.15.08-.05.08-.02.19.06.23.04.03,1.11.64,2.94.84,0,0,.01,0,.02,0,.09,0,.16-.06.17-.15,0,0,0-.02,0-.03,0-.08-.07-.15-.15-.16-1.75-.19-2.79-.79-2.8-.8-.03-.02-.06-.02-.09-.02h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                        <path d="M408.34,421.98s0,.08-.03.11c-.06.08-.16.09-.24.04-1.51-1.11-2.79-.87-2.8-.87-.09.02-.18-.04-.2-.13-.02-.09.04-.18.13-.2.06-.01,1.44-.27,3.07.93.04.03.07.08.07.13Z" fill="#fff"/>
                        <path d="M405.6,420.89c-.24,0-.39.03-.4.03-.09.02-.15.11-.13.2.02.08.09.14.17.14.01,0,.02,0,.03,0,0,0,.12-.02.33-.02.48,0,1.42.12,2.47.89.03.02.07.03.1.03.05,0,.1-.02.14-.07.02-.03.03-.07.03-.11,0-.05-.03-.1-.07-.13-1.13-.83-2.13-.96-2.67-.96h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                        <path d="M409.79,422.9c0,.07-.04.14-.1.16-.09.04-.19,0-.22-.09-.76-1.79-2.12-1.97-2.17-1.98-.09-.01-.16-.1-.15-.19.01-.09.1-.16.19-.15.07,0,1.61.2,2.45,2.19,0,.02.01.04.01.06Z" fill="#fff"/>
                        <path d="M407.31,420.66c-.09,0-.16.06-.17.15-.01.09.06.18.15.19.06,0,1.41.19,2.17,1.98.03.07.09.1.16.1.02,0,.05,0,.07-.01.07-.03.11-.1.1-.16,0-.02,0-.04-.01-.06-.84-1.98-2.38-2.18-2.45-2.19,0,0-.01,0-.02,0h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                        <path d="M406.28,416.19s0,0,0,0h0Z" fill="#fff"/>
                        <path d="M406.26,415.94s-.03,0-.05,0c-.15.05-1.46.48-1.69,1.04-.04.09,0,.19.09.22.02,0,.04.01.06.01.07,0,.13-.04.16-.11.13-.31.97-.69,1.48-.85.08-.02.12-.09.12-.17,0-.01,0-.03,0-.04-.02-.07-.09-.12-.16-.12h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                        <path d="M419.88,416.39s0,.06-.02.09c-.04.08-.15.12-.23.07-.64-.33-1.43-.07-2.42.44-.95.49-2.29.67-2.35.68-.09.01-.18-.05-.19-.15-.01-.09.05-.18.15-.19.01,0,1.34-.19,2.24-.65.88-.45,1.88-.88,2.73-.44.06.03.09.09.09.14Z" fill="#fff"/>
                        <path d="M419,416.06c-.65,0-1.33.31-1.94.62-.9.46-2.23.65-2.24.65-.09.01-.16.1-.15.19.01.09.09.15.17.15,0,0,.02,0,.02,0,.06,0,1.4-.2,2.35-.68.69-.35,1.28-.59,1.79-.59.22,0,.43.05.63.15.03.01.05.02.08.02.06,0,.12-.03.15-.09.01-.03.02-.06.02-.09,0-.06-.04-.12-.09-.14-.25-.13-.52-.19-.79-.19h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                        <path d="M411.82,415.27s0,.03,0,.04c-.02.09-.11.15-.2.14-.75-.14-1.39-.79-1.42-.82-.07-.07-.06-.18,0-.24.07-.07.18-.06.24,0,0,0,.59.6,1.24.72.08.01.14.08.14.16Z" fill="#fff"/>
                        <path d="M410.32,414.34s-.09.02-.12.05c-.07.07-.07.17,0,.24.03.03.66.68,1.42.82.01,0,.02,0,.03,0,.08,0,.15-.06.17-.14,0-.01,0-.03,0-.04,0-.08-.06-.15-.14-.16-.64-.12-1.23-.72-1.24-.72-.03-.03-.08-.05-.12-.05h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                        <path d="M418.5,426.03s0,.02,0,.03c-.01.09-.09.16-.19.15-.08,0-2.03-.24-2.56-1.4-.47-1.03-1.06-1.46-1.06-1.47-.08-.06-.09-.16-.04-.24.06-.08.16-.09.24-.04.03.02.66.48,1.18,1.6.45.99,2.27,1.2,2.29,1.21.09,0,.15.08.15.16Z" fill="#fff"/>
                        <path d="M414.78,423.02c-.05,0-.11.02-.14.07-.06.08-.04.18.04.24,0,0,.59.44,1.06,1.47.54,1.17,2.48,1.4,2.56,1.4,0,0,.01,0,.02,0,.09,0,.16-.06.17-.15,0,0,0-.02,0-.03,0-.08-.07-.15-.15-.16-.02,0-1.84-.21-2.29-1.21-.51-1.12-1.15-1.58-1.18-1.6-.03-.02-.06-.03-.1-.03h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                        <path d="M419.18,425.04s0,0,0,.01c0,.09-.08.17-.18.17-1.76-.06-2.59-1.32-2.62-1.37-.05-.08-.03-.19.05-.24.08-.05.19-.03.24.05,0,.01.77,1.16,2.35,1.21.09,0,.16.08.17.16Z" fill="#fff"/>
                        <path d="M416.52,423.58s-.06,0-.09.03c-.08.05-.1.16-.05.24.03.05.86,1.31,2.62,1.37,0,0,0,0,0,0,.09,0,.17-.07.17-.17,0,0,0,0,0-.01,0-.09-.08-.16-.17-.16-1.57-.05-2.34-1.2-2.35-1.21-.03-.05-.09-.08-.14-.08h0Z" fill="#9b978f"/>
                    </g>
                    </g>
                </g>
                <g id="Plant">
                    <g>
                    <path d="M163.17,388.54c3.36.54,6.46,1.75,7.69,4.34-.91-.12-2.37.22-3.4.54-1.41.44-3.76,1.28-4.48,4-.71,2.72.49.66,2.71-1.34,1.55-1.4,3.8-1.79,5.73-1.04.02.13.03.27.03.4.04,1.96-.47,3.67-1.21,4.99-1.2,2.15-3.02,3.27-4.08,2.76-3.85-1.86-1.1,7.02-4.37,7.97-1.18.34-2.55.13-3.91-.51-.62-1.99-1.07-3.66-.33-5.51.57-1.43,1.16-3.15.84-3.56-.26-.33-1.35.43-1.74.94-1.61,2.09-1.42,4.96-.61,7.01-1.71-1.3-3.18-3.21-3.96-5.43-.33-.93-.74-2.01-1.18-3.14,1.73-1.48,4.42-2.88,4.1-3.18-.46-.45-3.13.41-4.71,1.65-1.6-4.12-3.26-8.48-2.58-9.41.55-.76,3.21-1.37,6.33-1.66-.38,2.6.39,5.43,1.02,5.65.62.22-.14-3.44-.11-5.73,2.04-.14,4.2-.16,6.06,0h.07c-1.76,2.8-1.75,7.88-1.07,7.99.68.11.27-4.57,3.16-7.73Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M160.59,411.59c-.89,0-1.85-.23-2.82-.7l-.1-.05-.03-.1c-.64-2.06-1.08-3.79-.32-5.68,1.14-2.85.91-3.28.87-3.32-.14-.05-.95.44-1.34.94-1.58,2.05-1.33,4.84-.58,6.76l.33.84-.71-.55c-1.85-1.42-3.29-3.39-4.05-5.55-.33-.95-.76-2.06-1.18-3.14l-.06-.17.13-.12c.77-.65,1.73-1.3,2.51-1.82.54-.37,1.2-.81,1.45-1.04-.61-.1-2.72.52-4.24,1.72l-.27.21-.12-.31c-1.95-5.02-3.27-8.65-2.55-9.65.83-1.15,5.19-1.64,6.51-1.77l.32-.03-.05.31c-.36,2.44.31,4.84.76,5.3.06-.39-.05-1.46-.14-2.34-.1-1.01-.22-2.16-.2-3.08v-.23s.23-.02.23-.02c1.55-.11,3.86-.19,6.1,0l.46.07-.2.32c-1.63,2.58-1.61,6.76-1.27,7.52.08-.22.17-.7.25-1.13.3-1.63.8-4.35,2.71-6.43l.09-.1.13.02c4.13.67,6.78,2.18,7.88,4.48l.2.42-.46-.06c-1.03-.15-2.78.37-3.29.53-1.17.37-3.6,1.14-4.31,3.83-.12.46-.17.73-.19.88.21-.18.53-.52.83-.83.45-.47,1.01-1.06,1.66-1.65,1.61-1.45,3.95-1.88,5.98-1.09l.14.05.02.14c.02.15.03.29.03.44.04,2.31-.65,4.06-1.24,5.11-1.23,2.2-3.17,3.46-4.41,2.86-.52-.25-.9-.3-1.18-.14-.63.35-.77,1.82-.9,3.24-.19,2.06-.41,4.39-2.12,4.89-.4.12-.82.17-1.26.17ZM158.08,410.48c1.31.6,2.57.76,3.63.45,1.38-.4,1.58-2.55,1.76-4.45.16-1.69.3-3.15,1.15-3.63.43-.24.97-.2,1.64.13.86.41,2.58-.56,3.75-2.66.56-1,1.22-2.66,1.18-4.87,0-.08,0-.15,0-.22-1.82-.65-3.9-.25-5.33,1.05-.63.57-1.19,1.15-1.63,1.62-.83.87-1.17,1.23-1.5,1.05-.27-.15-.26-.52.01-1.58.78-2.96,3.39-3.79,4.64-4.18.6-.19,1.97-.58,3.04-.58h0c-1.12-1.91-3.53-3.19-7.17-3.8-1.74,1.97-2.21,4.54-2.49,6.09-.2,1.09-.32,1.69-.8,1.62-.16-.03-.3-.15-.39-.36-.51-1.12-.3-5.14,1.09-7.66-1.59-.12-3.52-.12-5.47,0,0,.86.11,1.88.2,2.79.2,1.94.24,2.64-.07,2.88-.1.08-.23.1-.36.05-.79-.28-1.51-3.09-1.23-5.61-3.07.31-5.4.92-5.84,1.53-.6.83,1.21,5.56,2.49,8.87,1.58-1.12,4.16-2.02,4.77-1.43.07.07.11.17.1.27-.03.31-.45.62-1.75,1.5-.76.51-1.61,1.08-2.33,1.68.4,1.03.8,2.08,1.12,2.98.63,1.8,1.76,3.47,3.21,4.76-.56-1.97-.56-4.48.93-6.41.35-.45,1.22-1.12,1.74-1.12h0c.21,0,.33.1.39.18.22.29.33.98-.81,3.81-.69,1.71-.32,3.26.3,5.24Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M175.19,408.15c2.34.78,4.44,3.4,4.75,5.28.2,1.19-.28,2.73-1.36,4.26-1.68-2.01-5.54-4.55-6.99-4.67-1.31-.13,1.45.72,3.92,3,.8.73,1.52,1.83,2.11,2.88-1.33,1.47-3.21,2.84-5.57,3.79-.66-2.28-2.75-5.89-4.09-6.19-.97-.21,1.03,1.8,2.31,3.85.57.93.9,1.85,1.02,2.61-1.25.43-2.62.75-4.1.9-.58.06-1.12.15-1.62.28-.52-1.58-1.79-3.83-2.69-3.99-1.05-.18,1.05,2.18,1.29,4.44-2.66,1.03-3.83,2.57-4.74,1.74-.57-.54-1.48-2.59-2.15-5.15,1.86-1.49,3.97-.81,3.49-1.46-.4-.55-2.36-.43-3.79.22-.52-2.43-.79-5.12-.36-7.3,3.14-.72,6.1.72,6.77,1.16.74.49.85-.92-2.07-2.12-1.57-.65-3.16-.77-4.31-.71.52-1.96,1.29-3.95,2.35-5.57,1.28.24,2.46.53,3.4,1.23,2.11,1.54,3.3,3.87,3.5,3.28.29-.79-3.66-4.67-5.99-5.71,1.35-1.52,3.06-2.44,5.2-2.22,5.13.52,5.48,3.45,5.55,5.01.08,1.88,2.32.54,4.17,1.16Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M160,426.82c-.26,0-.51-.09-.75-.31-.65-.61-1.59-2.83-2.22-5.27l-.04-.16.13-.1c1.12-.89,2.31-1.04,3.02-1.13.11-.01.23-.03.33-.05-.49-.3-2.05-.25-3.4.36l-.28.13-.06-.3c-.43-2.02-.84-4.94-.36-7.4l.03-.16.16-.04c3.13-.72,6.15.66,6.96,1.2.01,0,.03.02.04.02-.1-.27-.6-.99-2.34-1.71-1.7-.7-3.36-.74-4.2-.69l-.34.02.09-.33c.59-2.21,1.41-4.16,2.39-5.64l.09-.14.16.03c1.21.23,2.48.51,3.5,1.27,1.12.82,2,1.88,2.58,2.57.14.17.29.35.42.49-.61-1.11-3.61-4.1-5.75-5.06l-.31-.14.23-.25c1.54-1.74,3.36-2.52,5.41-2.31,5.55.56,5.72,3.97,5.78,5.25.01.3.09.5.22.62.27.25.85.2,1.51.16.71-.05,1.5-.1,2.27.15h0c2.5.83,4.6,3.55,4.92,5.48.21,1.27-.3,2.89-1.4,4.45l-.19.27-.21-.25c-1.39-1.67-4.2-3.6-5.89-4.31.85.5,2.04,1.24,3.18,2.29.71.65,1.43,1.64,2.16,2.94l.09.16-.12.13c-1.46,1.62-3.41,2.95-5.66,3.86l-.26.1-.08-.27c-.66-2.27-2.59-5.52-3.77-5.97.17.29.56.81.91,1.27.5.66,1.06,1.4,1.54,2.17.69,1.13.96,2.1,1.06,2.71l.03.21-.2.07c-1.31.45-2.71.76-4.16.91-.54.05-1.08.15-1.59.27l-.22.05-.07-.22c-.53-1.62-1.76-3.67-2.49-3.82.05.2.26.63.44.99.42.85,1.01,2.02,1.13,3.17l.02.19-.18.07c-1.01.39-1.8.86-2.44,1.23-.71.42-1.3.76-1.81.76ZM157.56,421.28c.68,2.57,1.55,4.42,2.04,4.87.4.37.89.11,1.96-.52.62-.36,1.38-.81,2.33-1.2-.15-1.01-.67-2.04-1.05-2.81-.41-.82-.64-1.27-.42-1.56.1-.14.27-.19.5-.15,1.08.19,2.31,2.54,2.81,3.94.47-.1.95-.18,1.44-.23,1.34-.14,2.63-.41,3.84-.82-.15-.74-.49-1.56-.95-2.32-.47-.75-1.02-1.48-1.51-2.13-.94-1.25-1.23-1.65-1.04-1.96.06-.1.2-.21.5-.14,1.42.31,3.45,3.8,4.19,6.1,2.01-.85,3.77-2.05,5.1-3.49-.67-1.18-1.33-2.07-1.97-2.66-1.31-1.21-2.69-2-3.52-2.47-.7-.4-.88-.51-.8-.76.08-.24.37-.22.6-.19,1.48.13,5.18,2.55,6.95,4.51.9-1.37,1.31-2.74,1.13-3.81-.3-1.78-2.32-4.34-4.58-5.08h0c-.67-.22-1.42-.17-2.08-.13-.78.05-1.45.1-1.88-.29-.24-.22-.37-.53-.39-.97-.06-1.27-.21-4.26-5.33-4.77-1.79-.18-3.38.46-4.76,1.9,2.33,1.21,6.18,4.87,5.81,5.87-.06.19-.2.24-.27.25-.29.05-.55-.25-1.11-.93-.6-.72-1.42-1.7-2.49-2.49-.82-.61-1.81-.9-3.13-1.15-.86,1.35-1.6,3.08-2.14,5.03.94-.03,2.49.09,4.07.74,1.91.78,2.63,1.68,2.67,2.21.01.19-.06.35-.2.43-.1.06-.31.12-.63-.09-.75-.5-3.51-1.76-6.42-1.16-.4,2.23-.06,4.84.33,6.74,1.44-.56,3.32-.69,3.81-.02.12.16.15.31.09.44-.1.24-.38.28-.85.33-.63.08-1.67.21-2.65.93ZM162.76,420.4h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M176.26,406.3c-5.38,4.2.13,7.54,3.35,8.25,2.62.58,4.48.03,7.45-1.01,2.79-.97,7.42-5.98,7.14-5.94-.27.04-2.38-1.94-3.16-2.67-1.57-1.46-5.28-4.35-8.8-4.91-3.71-.6-4.59,3.92-4.63,4.65-.04.74-.97,1.33-1.35,1.63Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M181.66,415.03c-.67,0-1.36-.07-2.11-.24-1.93-.42-5.19-1.97-5.73-4.31-.33-1.46.43-2.94,2.28-4.38l.17-.13c.4-.3,1.06-.79,1.09-1.32.03-.53.48-2.92,2.02-4.17.81-.65,1.79-.9,2.9-.72,4.23.68,8.46,4.54,8.93,4.97l.13.12c1.69,1.58,2.66,2.41,2.88,2.49l.22-.03v.22c.14.54-4.76,5.34-7.31,6.23-2.12.74-3.72,1.26-5.48,1.26ZM181.59,400.21c-.72,0-1.35.22-1.9.66-1.4,1.13-1.81,3.33-1.83,3.81-.04.76-.82,1.35-1.29,1.69l-.16.12c-1.68,1.31-2.38,2.62-2.1,3.88.48,2.11,3.53,3.53,5.35,3.93,2.6.57,4.47,0,7.31-1,2.37-.83,6.1-4.64,6.87-5.59-.38-.24-1.13-.88-2.84-2.48l-.13-.12c-.46-.43-4.59-4.19-8.67-4.85-.21-.03-.41-.05-.61-.05Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <path d="M173.55,393.56c3.47,3.96,5.83-.27,6.25-2.71.34-1.99-.16-3.38-1.08-5.59-.87-2.08-4.93-5.46-4.89-5.25.04.21-1.41,1.83-1.94,2.44-1.07,1.21-3.15,4.08-3.44,6.74-.31,2.81,3.22,3.38,3.79,3.39.57.01,1.07.7,1.32.98Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M176.3,395.43c-.96,0-1.94-.57-2.94-1.71h0l-.1-.12c-.24-.29-.64-.77-1.03-.77-.42,0-2.35-.3-3.38-1.48-.53-.6-.75-1.34-.66-2.18.36-3.22,3.18-6.51,3.51-6.88l.08-.09c1.09-1.23,1.69-1.97,1.79-2.19l-.03-.17.22-.08c.51-.16,4.44,3.6,5.19,5.4.91,2.19,1.46,3.64,1.1,5.73-.26,1.51-1.29,3.94-3.08,4.45-.22.06-.44.09-.66.09ZM173.94,380.36c-.2.32-.69.92-1.79,2.17l-.08.09c-.31.35-3.04,3.54-3.38,6.6-.08.7.1,1.31.53,1.8.92,1.05,2.7,1.3,3.01,1.31.61.01,1.11.6,1.4.95l.1.12c1.09,1.24,2.13,1.74,3.09,1.47,1.56-.44,2.5-2.72,2.73-4.05.33-1.95-.19-3.35-1.07-5.45-.72-1.73-3.71-4.38-4.54-5Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <path d="M166.68,414.06c.67-.41,1.13-1.02,1.6-1.63.55-.71,1.07-1.45,1.57-2.2,1-1.5,1.89-3.06,2.68-4.68.09-.18-.06-.44-.28-.37-.44.15-.86.13-1.28-.08-.29-.15-.54.29-.25.43.53.27,1.1.32,1.66.13-.09-.12-.19-.24-.28-.37-.75,1.52-1.58,3-2.51,4.42-.45.69-.92,1.36-1.41,2.02-.51.68-1.01,1.44-1.75,1.89-.27.17-.02.6.25.43h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M172.55,405.42c2.36.37,4.77-.06,7.14.18,2.7.28,5.22,1.64,7.87,2.19.31.07.45-.42.13-.48-2.63-.55-5.1-1.84-7.77-2.19-2.4-.31-4.85.18-7.24-.19-.31-.05-.45.43-.13.48h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M159.65,399.24c1.29,1.3,2.84,2.29,4.55,2.92.3.11.43-.37.13-.48-1.63-.6-3.11-1.56-4.33-2.8-.23-.23-.58.12-.35.35h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <g>
                    <path d="M194.25,390.7c.14.75-.29,2.24-1.08,3.96-1.14-.79-2.9-1.49-3.85-1.68-1.26-.24.81,1.92,2.91,3.49-.85,1.5-1.92,3.05-3.08,4.35-.94-1.71-2.73-4.42-3.53-5.07-1.16-.94-2.68-.99-1.39.02,1.21.93,2.78,3.34,3.64,6.34-.36.32-.73.61-1.1.87-1.31.91-3.08,1.61-4.93,2.05-.49-2.66-2.5-7.45-3.32-6.96-.91.54,1.84,3.63,1.68,7.25-3.33.46-6.54-.08-7.36-2.17-1.43-3.59,0-4.35-.75-5.11-.75-.77-.93.54-1.39-.95-.77-2.45-.32-4.61.72-6.35.22.04.47.09.73.16,1.78.48,4.21,1.78,4.46,2.4.49,1.19,2.28.24,1-1.3-.98-1.2-3.91-1.94-5.7-1.98,1.36-1.82,3.4-3.08,5.2-3.54.86-.22,2.27-.22,3.9-.05,1.36,3.61-.24,5.41.53,5.6.76.19,2.83-3.22,2.19-5.22,1.52.27,3.09.62,4.56,1.02-.38,2.38-1.15,3.09-.23,2.83.84-.23,1.75-1.38,2.02-2.29,2.33.76,4.05,1.62,4.18,2.34Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M178.12,405.71c-2.45,0-4.8-.65-5.52-2.48-.88-2.23-.7-3.43-.59-4.15.08-.49.09-.67-.11-.87-.23-.23-.33-.2-.48-.16-.48.13-.72-.08-.97-.89-.72-2.27-.46-4.54.74-6.56l.09-.15.17.03c.26.05.5.1.75.16,1.76.48,4.32,1.8,4.62,2.55.1.24.26.37.46.38.19,0,.36-.1.45-.28.15-.3.03-.72-.33-1.15-.95-1.16-3.86-1.85-5.51-1.89h-.49s.29-.4.29-.4c1.3-1.73,3.34-3.12,5.34-3.63,1.07-.28,2.76-.18,3.99-.05l.15.02.05.14c.86,2.27.57,3.84.4,4.77-.05.26-.11.59-.07.66.05.02.23-.04.55-.4.86-.98,1.79-3.16,1.37-4.49l-.13-.39.41.07c1.5.27,3.08.62,4.58,1.03l.22.06-.04.22c-.15.96-.37,1.65-.51,2.11-.05.17-.11.34-.13.46.03,0,.06-.01.1-.02.76-.21,1.6-1.29,1.85-2.12l.07-.24.24.08c2.74.9,4.2,1.75,4.35,2.53.15.78-.25,2.27-1.1,4.11l-.12.27-.24-.17c-1.1-.75-2.83-1.46-3.76-1.64-.02,0-.04,0-.06,0,.19.44,1.41,1.75,3.17,3.05l.18.13-.11.19c-.93,1.64-2.01,3.16-3.11,4.39l-.24.26-.17-.31c-.98-1.78-2.74-4.41-3.47-4.99-.55-.44-1.12-.63-1.4-.66.06.07.16.16.32.29,1.16.89,2.82,3.3,3.72,6.47l.04.15-.11.1c-.33.3-.69.59-1.12.89-1.28.88-3.06,1.63-5.02,2.09l-.26.06-.05-.26c-.55-2.95-2.41-6.79-2.94-6.79h0c-.22.13.16,1,.5,1.77.59,1.36,1.39,3.22,1.3,5.27v.21s-.22.03-.22.03c-.69.09-1.4.15-2.11.15ZM171.58,397.52c.18,0,.42.07.68.34.39.39.32.79.25,1.3-.11.71-.28,1.79.56,3.9.81,2.04,4.04,2.4,6.88,2.05.02-1.86-.72-3.58-1.27-4.84-.51-1.19-.88-2.04-.29-2.4.15-.09.33-.1.5-.01,1.05.47,2.64,4.49,3.14,6.88,1.8-.45,3.42-1.14,4.6-1.95.36-.25.67-.5.96-.74-.88-2.99-2.43-5.23-3.5-6.06-.44-.35-.62-.61-.59-.85.02-.14.11-.25.25-.3.41-.16,1.34.17,2.03.73.81.66,2.46,3.14,3.42,4.83.96-1.11,1.88-2.43,2.71-3.85-.74-.57-3.53-2.81-3.18-3.59.06-.14.23-.3.65-.22.91.18,2.52.81,3.7,1.56.71-1.6,1.06-2.91.94-3.54h0c-.08-.42-1.12-1.18-3.78-2.07-.37.93-1.24,1.98-2.11,2.21-.16.04-.46.13-.64-.05-.19-.2-.11-.47.06-1.01.13-.41.31-1.01.46-1.82-1.29-.35-2.65-.65-3.94-.89.24,1.56-.73,3.7-1.63,4.67-.36.39-.68.55-.95.48-.53-.13-.44-.64-.33-1.24.16-.86.42-2.29-.33-4.36-1.63-.16-2.89-.14-3.66.06-1.74.45-3.53,1.61-4.76,3.08,1.81.15,4.43.87,5.39,2.04.69.84.51,1.46.39,1.69-.17.35-.53.57-.92.56-.4-.01-.74-.27-.91-.69-.18-.45-2.37-1.74-4.29-2.25-.18-.05-.37-.09-.54-.12-1.05,1.85-1.26,3.92-.6,6,.16.51.26.57.27.58,0,0,.06-.01.09-.02.08-.02.18-.05.29-.05ZM183.98,395.16h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <path d="M172.85,405.05c-.66-1.49-1.08-3.07-1.22-4.7-.07-.9-.02-1.6.77-2.16.64-.45,1.37-.79,2.09-1.08,1.42-.56,2.9-.97,4.35-1.43,1.57-.49,3.14-.98,4.71-1.47.31-.1.18-.58-.13-.48-1.79.56-3.59,1.12-5.38,1.68-1.65.52-3.36.97-4.91,1.77-.6.31-1.3.68-1.7,1.25-.42.6-.35,1.33-.29,2.02.15,1.68.59,3.3,1.28,4.84.13.29.56.04.43-.25h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="Piano">
                    <g>
                    <path d="M177.49,515.99c-10.09,7.82-11.94,22.33-4.12,32.43.02.03.05.06.07.09,3.61,4.62,5.01,10.62,3.54,16.3-1.73,6.69-.46,14.08,4.1,19.96,7.82,10.09,22.33,11.94,32.43,4.12.25-.19.49-.39.72-.59l13.18-10.21v.02s24.3-18.81,24.3-18.81l-48.8-63-24.28,18.81.03.04c-.39.27-.78.55-1.16.84Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M202.95,495.94l49.11,63.4-24.69,19.12v-.02s-12.99,10.05-12.99,10.05c-.26.22-.5.41-.72.59-10.19,7.89-24.89,6.02-32.78-4.17-4.46-5.76-5.97-13.12-4.14-20.18,1.42-5.46.1-11.47-3.49-16.08l-.07-.09c-7.89-10.19-6.02-24.89,4.17-32.78.3-.23.62-.47.95-.7l-.02-.02,24.69-19.12ZM251.34,559.25l-48.48-62.6-23.88,18.5.04.05-.22.15c-.4.27-.79.55-1.15.83-9.97,7.72-11.79,22.11-4.07,32.07l.07.09c3.7,4.73,5.04,10.9,3.58,16.52-1.79,6.91-.31,14.11,4.05,19.75,7.72,9.97,22.1,11.79,32.07,4.08.22-.17.45-.36.72-.58l13.39-10.37v.02s23.9-18.5,23.9-18.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <rect x="179.46" y="523.83" width="79.6" height="20.29" transform="translate(-68.65 1034.3) rotate(-127.76)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M202.95,495.94l49.05,63.34-16.44,12.73-49.05-63.34,16.44-12.73ZM251.29,559.19l-48.43-62.53-15.64,12.11,48.43,62.53,15.64-12.11Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <rect x="175" y="532.92" width="79.6" height="9.02" transform="translate(-78.56 1036.34) rotate(-127.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M194.04,502.84l49.05,63.34-7.53,5.83-49.05-63.34,7.53-5.83ZM242.38,566.09l-48.43-62.53-6.73,5.21,48.43,62.53,6.73-5.21Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <rect x="200.36" y="493.29" width="2.66" height="11.27" transform="translate(-69.26 963.88) rotate(-127.76)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M205.37,494.07l1.94,2.5-9.31,7.21-1.94-2.5,9.31-7.21ZM206.6,496.48l-1.32-1.7-8.51,6.59,1.32,1.7,8.51-6.59Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <rect x="245.1" y="556.06" width="2.66" height="11.27" transform="translate(-46.75 1100.48) rotate(-127.76)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M250.12,556.84l1.94,2.5-9.31,7.21-1.94-2.5,9.31-7.21ZM251.34,559.25l-1.32-1.7-8.51,6.59,1.32,1.7,8.51-6.59Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <g>
                        <rect x="239.58" y="559.46" width="11.27" height="1.33" transform="translate(-291.63 267.44) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M249.29,555.9l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM249.82,557.17l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="238.54" y="558.12" width="11.27" height="1.33" transform="translate(-291.03 266.52) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M248.25,554.55l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM248.78,555.82l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="237.5" y="556.77" width="11.27" height="1.33" transform="translate(-290.43 265.6) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M247.21,553.21l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM247.74,554.48l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="236.46" y="555.43" width="11.27" height="1.33" transform="translate(-289.82 264.69) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M246.17,551.87l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM246.7,553.14l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="235.42" y="554.09" width="11.27" height="1.33" transform="translate(-289.22 263.77) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M245.13,550.52l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM245.66,551.79l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="234.38" y="552.74" width="11.27" height="1.33" transform="translate(-288.61 262.85) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M244.09,549.18l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM244.62,550.45l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="233.34" y="551.4" width="11.27" height="1.33" transform="translate(-288.01 261.93) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M243.05,547.84l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM243.58,549.11l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="232.29" y="550.06" width="11.27" height="1.33" transform="translate(-287.4 261.01) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M242.01,546.5l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM242.54,547.77l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="231.25" y="548.72" width="11.27" height="1.33" transform="translate(-286.8 260.1) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M240.97,545.15l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM241.5,546.42l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="230.21" y="547.37" width="11.27" height="1.33" transform="translate(-286.19 259.18) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M239.93,543.81l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM240.46,545.08l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="229.17" y="546.03" width="11.27" height="1.33" transform="translate(-285.59 258.26) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M238.89,542.47l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM239.42,543.74l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="228.13" y="544.69" width="11.27" height="1.33" transform="translate(-284.98 257.34) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M237.85,541.12l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM238.38,542.39l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="227.09" y="543.34" width="11.27" height="1.33" transform="translate(-284.38 256.42) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M236.81,539.78l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM237.34,541.05l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="226.05" y="542" width="11.27" height="1.33" transform="translate(-283.78 255.5) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M235.77,538.44l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM236.3,539.71l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="225.01" y="540.66" width="11.27" height="1.33" transform="translate(-283.17 254.59) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M234.73,537.09l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM235.26,538.37l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="223.97" y="539.31" width="11.27" height="1.33" transform="translate(-282.57 253.67) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M233.69,535.75l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM234.22,537.02l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="222.93" y="537.97" width="11.27" height="1.33" transform="translate(-281.96 252.75) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M232.65,534.41l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM233.18,535.68l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="221.89" y="536.63" width="11.27" height="1.33" transform="translate(-281.36 251.83) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M231.61,533.07l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM232.14,534.34l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="220.85" y="535.29" width="11.27" height="1.33" transform="translate(-280.75 250.91) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M230.57,531.72l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM231.1,532.99l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="219.81" y="533.94" width="11.27" height="1.33" transform="translate(-280.15 250) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M229.53,530.38l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM230.06,531.65l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="218.77" y="532.6" width="11.27" height="1.33" transform="translate(-279.54 249.08) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M228.49,529.04l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM229.02,530.31l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="217.73" y="531.26" width="11.27" height="1.33" transform="translate(-278.94 248.16) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M227.45,527.69l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM227.98,528.96l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="216.69" y="529.91" width="11.27" height="1.33" transform="translate(-278.34 247.24) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M226.41,526.35l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM226.94,527.62l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="215.65" y="528.57" width="11.27" height="1.33" transform="translate(-277.73 246.32) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M225.37,525.01l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM225.9,526.28l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="214.61" y="527.23" width="11.27" height="1.33" transform="translate(-277.13 245.41) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M224.33,523.67l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM224.86,524.94l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="213.57" y="525.89" width="11.27" height="1.33" transform="translate(-276.52 244.49) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M223.29,522.32l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM223.82,523.59l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="212.53" y="524.54" width="11.27" height="1.33" transform="translate(-275.92 243.57) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M222.25,520.98l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM222.78,522.25l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="211.49" y="523.2" width="11.27" height="1.33" transform="translate(-275.31 242.65) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M221.21,519.64l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM221.74,520.91l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="210.45" y="521.86" width="11.27" height="1.33" transform="translate(-274.71 241.73) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M220.17,518.29l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM220.7,519.56l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="209.41" y="520.51" width="11.27" height="1.33" transform="translate(-274.1 240.81) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M219.13,516.95l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM219.66,518.22l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="208.37" y="519.17" width="11.27" height="1.33" transform="translate(-273.5 239.9) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M218.09,515.61l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM218.62,516.88l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="207.33" y="517.83" width="11.27" height="1.33" transform="translate(-272.89 238.98) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M217.05,514.26l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM217.58,515.53l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="206.29" y="516.48" width="11.27" height="1.33" transform="translate(-272.29 238.06) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M216.01,512.92l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM216.54,514.19l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="205.25" y="515.14" width="11.27" height="1.33" transform="translate(-271.69 237.14) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M214.97,511.58l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM215.5,512.85l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="204.21" y="513.8" width="11.27" height="1.33" transform="translate(-271.08 236.22) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M213.93,510.24l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM214.46,511.51l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="203.17" y="512.46" width="11.27" height="1.33" transform="translate(-270.48 235.31) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M212.89,508.89l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM213.42,510.16l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="202.13" y="511.11" width="11.27" height="1.33" transform="translate(-269.87 234.39) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M211.85,507.55l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM212.38,508.82l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="201.09" y="509.77" width="11.27" height="1.33" transform="translate(-269.27 233.47) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M210.81,506.21l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM211.34,507.48l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="200.05" y="508.43" width="11.27" height="1.33" transform="translate(-268.66 232.55) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M209.77,504.86l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM210.3,506.13l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="199.01" y="507.08" width="11.27" height="1.33" transform="translate(-268.06 231.63) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M208.73,503.52l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM209.26,504.79l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="197.97" y="505.74" width="11.27" height="1.33" transform="translate(-267.45 230.72) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M207.69,502.18l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM208.22,503.45l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="196.93" y="504.4" width="11.27" height="1.33" transform="translate(-266.85 229.8) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M206.65,500.83l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM207.18,502.11l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="195.89" y="503.05" width="11.27" height="1.33" transform="translate(-266.24 228.88) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M205.61,499.49l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM206.14,500.76l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                        <rect x="194.85" y="501.71" width="11.27" height="1.33" transform="translate(-265.64 227.96) rotate(-37.76)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M204.56,498.15l1.03,1.33-9.19,7.12-1.03-1.33,9.19-7.12ZM205.1,499.42l-.59-.77-8.63,6.68.59.77,8.63-6.68Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    </g>
                </g>
                <g id="Plant1" data-name="Plant">
                    <g>
                    <circle cx="194.63" cy="575.6" r="9.97" transform="translate(-220.98 132.36) rotate(-24.48)" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M202.69,569.35c3.44,4.44,2.63,10.86-1.82,14.3s-10.86,2.63-14.3-1.82c-3.44-4.44-2.63-10.86,1.82-14.3s10.86-2.63,14.3,1.82ZM186.93,581.56c3.29,4.25,9.42,5.03,13.67,1.74,4.25-3.29,5.03-9.42,1.74-13.67s-9.42-5.03-13.67-1.74-5.03,9.42-1.74,13.67Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <g>
                        <path d="M194.83,578.42s-2.15-1.61-.06-3.71c2.35-2.37,2.95-.08,4.33.24,1.38.32,1.27-.61,2.45-.29,1.18.32,1.8,1.4,2.63.96.83-.44,1.56-1.28,2.46-.74,1.04.62,1.99.7,3.15.38,1.9-.52,3.74,1.27,5.71.45,0,0-2.76,3.78-4.4,3.74-1.44-.03-1.97,1.68-3.29,1.96-.47.1-.95.02-1.39-.18-.38-.18-.63-.38-1.07-.25-.87.28-1.52.98-2.45,1.16-1.53.3-2.61-.86-3.63-.42-1.02.43-2.37.58-4.1-.3-1.73-.89-.34-2.99-.34-2.99Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M215.67,575.58c.06.08.06.18,0,.26-.12.16-2.85,3.87-4.58,3.83-.69-.01-1.16.44-1.66.92-.45.44-.92.89-1.58,1.03-.5.1-1.03.04-1.52-.2-.07-.03-.14-.07-.2-.1-.27-.14-.44-.22-.71-.14-.37.12-.7.31-1.04.52-.43.26-.88.53-1.43.64-.83.17-1.53-.07-2.14-.27-.55-.18-1.02-.34-1.45-.16-1.33.57-2.78.46-4.28-.31-.49-.25-.8-.62-.93-1.09-.21-.81.2-1.69.4-2.05-.28-.25-.84-.88-.91-1.74-.05-.74.27-1.47.97-2.17,1.79-1.8,2.71-1.06,3.52-.42.33.26.64.51,1.01.6.63.15.89,0,1.17-.14.29-.15.63-.33,1.28-.15.51.14.91.41,1.27.64.54.36.84.53,1.2.34.18-.1.37-.22.55-.34.62-.41,1.32-.88,2.13-.4.95.56,1.84.67,2.98.36.95-.26,1.87.02,2.76.28,1,.3,1.94.58,2.92.17.09-.04.19-.01.25.07h0ZM194.77,580.82c.12.16.29.29.5.4,1.41.72,2.69.82,3.91.3.58-.25,1.15-.05,1.76.15.59.2,1.2.4,1.92.26.47-.09.87-.33,1.29-.59.35-.21.72-.43,1.14-.57.45-.14.75.01,1.04.16.06.03.12.06.18.09.41.19.84.25,1.25.17.54-.11.94-.5,1.37-.91.54-.52,1.1-1.06,1.97-1.05,1.07.02,2.86-1.93,3.82-3.13-.88.15-1.73-.1-2.55-.35-.87-.26-1.7-.51-2.52-.28-1.27.34-2.26.22-3.32-.41-.57-.34-1.08,0-1.66.38-.19.13-.38.26-.59.36-.61.33-1.11,0-1.65-.36-.33-.22-.7-.46-1.14-.58-.49-.13-.7-.02-.97.12-.31.16-.69.36-1.47.18-.46-.11-.83-.4-1.18-.68-.8-.64-1.43-1.14-2.94.38-.6.61-.89,1.22-.84,1.83.07.93.88,1.54.88,1.55.09.07.11.2.05.29,0,.01-.66,1.03-.44,1.87.04.15.11.29.2.41Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <path d="M215.67,575.58h0c.07.1.05.23-.04.31-3.32,2.52-5.65,2.46-7.69,2.41-1.16-.03-2.25-.06-3.43.37-7.4,2.69-9.97-.16-10.07-.29-.08-.08-.07-.23.02-.31.09-.08.23-.07.31.02.03.03,2.51,2.74,9.6.16,1.26-.46,2.39-.43,3.59-.39,2.07.06,4.22.11,7.42-2.32.1-.07.23-.05.3.04Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M197.21,574.19c-.82,1.39-2.2,3.52-.77,4.9.09.09.07.24-.03.31-.36.23-.72.51-.99.83-.28.33-.45.77-.23,1.19-.68-.85.33-1.86,1.02-2.35,0,0-.02.31-.02.31-1.71-1.47-.27-3.96,1.04-5.19h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M198.76,581.75c-.73-.56-1.33-1.36-1.46-2.31,0-.04,0-.08.02-.11.59-1.09,1.3-2.13,2.19-3.01.3-.29.62-.56.98-.76-.56.6-1.03,1.25-1.5,1.92-.46.67-.9,1.35-1.33,2.04l.02-.11c.07.86.55,1.66,1.07,2.35h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M203.19,581.42c-1.08-.32-2.09-.94-2.81-1.81-.07-.08-.06-.19.02-.26.65-.65,1.15-1.48,1.71-2.22.19-.26.37-.51.58-.76-.31.92-.77,1.77-1.34,2.55-.22.27-.4.51-.7.73l.04-.28c.66.87,1.54,1.53,2.5,2.05h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M206.19,580.64c-.69-.73-1.43-1.43-2.29-1.93-.13-.07-.12-.26,0-.34.83-.86,1.41-1.94,2.19-2.85-.1.3-.21.59-.34.87-.42.85-.88,1.72-1.64,2.32,0,0,0-.34,0-.34.87.57,1.58,1.37,2.09,2.27h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M209,579.75c-.54-.48-1.02-1.01-1.48-1.56-.07-.08-.06-.2.03-.27.71-.4,1.36-.94,1.96-1.5.2-.19.4-.38.61-.57-.23.52-.56.99-.96,1.4-.41.41-.86.76-1.41,1l.08-.3c.42.58.81,1.18,1.17,1.8h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <g>
                        <path d="M192.24,577.66s1.4-2.29,3.69-.41c2.58,2.12.36,2.93.17,4.33s.73,1.21.52,2.41c-.21,1.2-1.23,1.93-.71,2.71.52.78,1.42,1.44.97,2.38-.52,1.09-.51,2.04-.09,3.17.69,1.84-.91,3.85.08,5.73,0,0-4.02-2.4-4.14-4.03-.11-1.44-1.86-1.8-2.25-3.09-.14-.46-.11-.95.05-1.4.14-.4.32-.66.15-1.09-.36-.84-1.11-1.43-1.38-2.33-.45-1.49.61-2.68.08-3.65-.53-.97-.8-2.31-.08-4.11.72-1.8,2.95-.62,2.95-.62Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M196.9,577.92c.88,1.14.37,1.92-.09,2.63-.23.35-.45.69-.5,1.06-.09.64.07.89.25,1.15.18.28.39.6.27,1.26-.09.52-.32.95-.52,1.32-.3.57-.45.89-.23,1.23.12.17.26.35.39.52.47.58,1,1.23.59,2.08-.47,1-.5,1.9-.08,3,.34.92.16,1.86-.03,2.78-.2,1.02-.4,1.99.1,2.92.05.09.03.19-.04.26-.07.07-.18.08-.26.03-.17-.1-4.12-2.48-4.24-4.2-.05-.69-.55-1.12-1.07-1.57-.48-.41-.97-.83-1.17-1.48-.15-.49-.13-1.02.06-1.54.03-.07.05-.14.08-.21.11-.28.18-.45.07-.72-.15-.36-.38-.66-.62-.99-.3-.41-.61-.83-.77-1.37-.24-.81-.07-1.53.07-2.16.13-.56.25-1.05.03-1.45-.69-1.28-.72-2.72-.09-4.29.21-.51.54-.86,1-1.03.79-.29,1.7.04,2.08.21.23-.3.79-.92,1.65-1.06.73-.12,1.49.13,2.25.76.36.3.64.58.84.84ZM195.93,587.11c-.07-.1-.15-.19-.21-.29-.38-.57-.1-1.11.2-1.67.19-.35.39-.74.47-1.19.09-.5-.04-.7-.21-.95-.19-.29-.42-.65-.31-1.45.06-.47.32-.86.57-1.24.56-.86,1-1.53-.66-2.9-.66-.54-1.3-.77-1.9-.67-.92.15-1.46,1.02-1.47,1.02-.06.1-.19.13-.29.08-.01,0-1.09-.57-1.9-.27-.34.13-.58.38-.74.78-.59,1.47-.57,2.75.07,3.92.3.55.16,1.14.02,1.76-.14.61-.29,1.23-.08,1.93.14.46.41.84.71,1.23.25.33.5.67.67,1.08.18.43.06.75-.07,1.05-.02.06-.05.12-.07.19-.15.43-.17.86-.05,1.26.16.53.59.89,1.04,1.27.57.49,1.16.99,1.23,1.86.08,1.07,2.19,2.67,3.48,3.51-.23-.86-.06-1.73.11-2.57.18-.89.35-1.74.05-2.54-.46-1.23-.43-2.23.1-3.34.29-.6-.1-1.07-.54-1.62-.07-.08-.14-.17-.21-.26Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <path d="M192.58,577.27c.06.08.06.2-.01.28-.03.03-2.49,2.76.73,9.57.57,1.21.65,2.34.73,3.54.14,2.07.28,4.21,3,7.17.08.09.08.23-.01.31-.09.08-.23.08-.31-.01-2.82-3.07-2.98-5.39-3.11-7.44-.08-1.15-.15-2.24-.69-3.38-3.37-7.12-.77-9.94-.65-10.06.08-.09.22-.09.31,0,0,0,.01.02.02.02Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M196.67,579.63c-1.46-.69-3.71-1.87-4.95-.31-.08.1-.23.1-.31,0-.26-.33-.57-.67-.92-.91-.36-.25-.81-.38-1.2-.12.78-.75,1.88.16,2.44.79,0,0-.32,0-.32,0,1.31-1.84,3.92-.64,5.26.55h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M189.3,581.88c.49-.78,1.23-1.45,2.16-1.67.04,0,.08,0,.12.01,1.15.49,2.24,1.09,3.2,1.9.31.27.61.57.85.91-.65-.5-1.34-.91-2.06-1.32-.71-.39-1.43-.77-2.15-1.13h.12c-.85.16-1.6.71-2.24,1.3h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M190.03,586.26c.21-1.1.74-2.17,1.54-2.97.07-.07.18-.08.26,0,.71.59,1.58,1.01,2.37,1.5.27.16.55.32.81.51-.94-.22-1.84-.6-2.66-1.1-.29-.19-.54-.35-.8-.62l.28.02c-.8.74-1.37,1.68-1.81,2.68h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M191.09,589.18c.67-.75,1.29-1.56,1.71-2.46.05-.12.21-.15.3-.06.05.04.1.09.17.15.92.67,1.96,1.15,2.9,1.79-.31-.07-.6-.15-.9-.26-.88-.33-1.79-.72-2.46-1.41,0,0,.33-.03.33-.03-.49.92-1.22,1.7-2.06,2.29h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M192.24,591.89c.42-.59.91-1.11,1.42-1.62.07-.07.2-.07.27,0,.47.67,1.06,1.27,1.68,1.82.2.18.42.36.63.56-.54-.18-1.04-.47-1.48-.82-.45-.37-.84-.79-1.13-1.31,0,0,.31.05.31.05-.54.47-1.1.92-1.69,1.33h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <g>
                        <path d="M195.01,573.23s-1.6,2.16-3.71.08c-2.38-2.34-.1-2.95.22-4.33.31-1.38-.62-1.27-.3-2.45.32-1.18,1.39-1.81.95-2.64-.45-.82-1.29-1.55-.76-2.46.61-1.04.69-1.99.37-3.15-.53-1.89,1.25-3.75.42-5.71,0,0,3.79,2.74,3.77,4.38-.02,1.44,1.69,1.96,1.97,3.28.1.47.03.95-.18,1.39-.18.38-.38.63-.24,1.07.28.87.98,1.52,1.17,2.45.31,1.53-.84,2.62-.4,3.63.44,1.02.6,2.37-.28,4.1-.88,1.73-2.99.36-2.99.36Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M195.41,555.27c.46.59.77,1.18.77,1.69,0,.69.45,1.16.93,1.65.44.45.89.91,1.04,1.57.11.5.04,1.03-.19,1.52-.03.07-.07.14-.1.2-.14.27-.22.44-.13.71.12.37.32.69.53,1.04.26.43.54.88.65,1.43.17.83-.06,1.53-.26,2.14-.18.55-.34,1.02-.15,1.45.58,1.33.48,2.77-.29,4.28-.25.49-.62.81-1.09.93-.81.22-1.69-.19-2.05-.39-.25.28-.87.85-1.74.92-.74.06-1.47-.26-2.18-.96-1.81-1.78-1.08-2.7-.44-3.52.26-.33.51-.65.59-1.01.14-.63,0-.89-.14-1.17-.16-.29-.33-.63-.16-1.28.14-.51.4-.92.63-1.27.35-.54.53-.84.33-1.2-.1-.18-.23-.37-.35-.55-.41-.62-.88-1.31-.41-2.12.56-.95.66-1.84.35-2.98-.26-.94,0-1.87.27-2.76.29-1,.57-1.95.16-2.92-.04-.09-.01-.19.07-.25.08-.06.18-.06.26,0,.11.08,2,1.46,3.09,2.87ZM196.23,558.29c-.29-.37-.5-.79-.49-1.34.01-1.07-1.95-2.85-3.16-3.8.15.88-.09,1.73-.34,2.55-.26.87-.5,1.7-.27,2.53.35,1.26.23,2.26-.39,3.32-.34.57,0,1.08.39,1.66.13.19.26.38.37.59.33.6,0,1.11-.35,1.65-.22.33-.46.7-.58,1.15-.13.49-.02.7.12.97.16.31.36.68.18,1.47-.11.46-.39.83-.67,1.18-.63.8-1.13,1.44.4,2.94.61.6,1.23.88,1.83.83.93-.07,1.54-.88,1.55-.89.07-.09.2-.11.29-.05.01,0,1.03.66,1.87.43.35-.09.62-.33.81-.71.72-1.41.81-2.69.28-3.91-.25-.58-.06-1.15.14-1.76.2-.59.4-1.2.25-1.92-.1-.47-.34-.87-.6-1.29-.22-.35-.44-.72-.57-1.13-.14-.45.01-.75.16-1.04.03-.06.06-.12.09-.18.19-.41.25-.84.16-1.25-.12-.54-.51-.94-.92-1.36-.2-.2-.4-.4-.57-.63Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <path d="M192.36,552.44h0c2.54,3.31,2.49,5.63,2.45,7.68-.02,1.16-.05,2.25.39,3.42,2.73,7.38-.11,9.97-.23,10.08-.09.08-.23.07-.31-.02-.08-.09-.07-.23.02-.31.03-.03,2.73-2.53.11-9.6-.46-1.25-.44-2.39-.41-3.59.04-2.07.09-4.22-2.36-7.41-.07-.1-.06-.23.04-.31.1-.07.23-.06.3.04Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M190.77,570.88c1.39.81,3.53,2.19,4.9.75.08-.09.24-.08.31.03.23.36.51.71.84.99.33.28.77.45,1.19.23-.85.68-1.86-.32-2.36-1,0,0,.31.02.31.02-1.46,1.72-3.96.29-5.19-1.01h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M198.31,569.28c-.56.74-1.35,1.34-2.3,1.47-.04,0-.08,0-.11-.02-1.1-.59-2.14-1.29-3.02-2.17-.29-.3-.56-.62-.77-.98.6.56,1.26,1.03,1.93,1.49.67.45,1.36.89,2.05,1.32l-.11-.02c.86-.07,1.65-.55,2.34-1.08h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M197.97,564.86c-.31,1.08-.93,2.09-1.8,2.82-.08.07-.19.06-.26-.01-.66-.65-1.49-1.14-2.23-1.7-.26-.18-.52-.37-.77-.58.92.3,1.78.76,2.56,1.33.27.22.51.4.74.69,0,0-.28-.04-.28-.04.87-.66,1.52-1.55,2.04-2.51h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M197.17,561.86c-.73.69-1.42,1.44-1.92,2.3-.07.13-.26.12-.34,0-.86-.83-1.95-1.4-2.87-2.17.3.09.59.21.87.34.85.41,1.72.87,2.33,1.62,0,0-.34,0-.34,0,.57-.87,1.36-1.59,2.25-2.1h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M196.27,559.05c-.47.55-1.01,1.03-1.56,1.49-.08.07-.2.06-.27-.02-.41-.71-.95-1.36-1.51-1.96-.19-.2-.38-.4-.57-.61.52.22.99.56,1.4.95.42.41.77.86,1.01,1.4l-.3-.07c.58-.42,1.17-.82,1.8-1.18h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <g>
                        <path d="M195.4,575.12s-1.99.32-2.03-1.91c-.04-2.51,1.5-1.63,2.39-2.21s.34-1,1.12-1.47c.79-.47,1.7-.24,1.89-.92.19-.68.13-1.51.89-1.72.87-.24,1.42-.7,1.86-1.5.71-1.29,2.64-1.36,3.23-2.84,0,0,.59,3.46-.28,4.33-.77.76-.12,1.94-.67,2.8-.19.31-.49.52-.82.65-.3.11-.54.14-.69.45-.31.61-.27,1.33-.66,1.93-.64.98-1.83.96-2.13,1.74-.3.78-.93,1.58-2.31,2.05-1.38.47-1.79-1.38-1.79-1.38Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M204.92,562.43s.04.06.04.1c.06.37.58,3.6-.34,4.52-.35.35-.35.81-.35,1.34,0,.48,0,.97-.28,1.42-.21.33-.53.59-.93.74-.05.02-.11.04-.16.06-.23.08-.33.12-.41.28-.13.25-.19.53-.26.82-.09.38-.18.77-.41,1.13-.35.55-.85.8-1.29,1.03-.39.2-.7.36-.82.67-.4,1.03-1.22,1.77-2.44,2.18-.41.14-.78.11-1.12-.07-.54-.3-.81-.96-.91-1.28-.31.01-.92-.03-1.41-.44-.44-.37-.67-.94-.68-1.7-.03-1.95.91-2.07,1.67-2.17.31-.04.6-.08.83-.22.39-.25.45-.45.52-.67.07-.25.16-.53.62-.8.35-.21.71-.29,1.02-.36.45-.1.69-.17.77-.43.04-.15.07-.31.1-.47.1-.56.22-1.2.94-1.4.8-.22,1.29-.62,1.72-1.39.36-.66,1-1.02,1.62-1.36.68-.38,1.31-.74,1.6-1.45.04-.09.13-.15.22-.14.06,0,.11.04.15.08ZM196.02,575.95c.1.12.21.23.34.31.22.13.47.14.76.04,1.11-.37,1.82-1,2.18-1.92.18-.46.59-.67,1.02-.9.41-.21.83-.43,1.12-.88.19-.3.27-.63.35-.99.07-.31.14-.62.29-.92.17-.33.42-.42.66-.5.05-.02.09-.03.14-.05.31-.12.56-.31.72-.56.21-.34.21-.75.21-1.19,0-.55,0-1.17.48-1.65.54-.53.45-2.37.31-3.52-.38.5-.93.8-1.46,1.1-.59.33-1.15.64-1.45,1.19-.49.88-1.08,1.36-1.99,1.6-.43.12-.52.48-.62,1.06-.03.17-.06.34-.11.51-.15.53-.63.63-1.1.74-.3.07-.61.13-.9.31-.31.18-.36.34-.42.55-.08.26-.17.58-.7.92-.31.2-.66.24-1.01.29-.73.1-1.31.17-1.29,1.73.01.63.19,1.09.52,1.37.51.43,1.25.33,1.26.33.11-.02.22.06.25.17,0,0,.12.5.41.87Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <path d="M204.92,562.43s.05.1.04.16c-.38,3.13-1.64,4.36-2.74,5.44-.62.6-1.2,1.17-1.58,2.02-2.43,5.43-5.36,5.32-5.48,5.31-.12,0-.21-.11-.2-.23s.11-.21.23-.2c.03,0,2.76.06,5.06-5.06.41-.93,1.03-1.52,1.68-2.16,1.11-1.08,2.25-2.2,2.62-5.18.01-.12.12-.2.24-.19.06,0,.11.04.15.08Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M194.36,571.63c.37,1.15.76,2.94,2.22,2.93.11-.01.21.07.21.19-.08.47-.19,1.01.03,1.45.07.14.2.24.36.31-.83-.05-.88-1.15-.78-1.79,0,0,.21.24.21.24-1.72.18-2.35-1.95-2.26-3.32h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M199.25,574.75c-.7.12-1.57.07-2.1-.46-.29-.9-.48-1.83-.47-2.78,0-.31.04-.63.13-.93.06.62.18,1.21.3,1.81.13.59.26,1.19.4,1.78l-.07-.1c.49.41,1.16.58,1.79.69h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M201.39,572.19c-.72.44-1.6.68-2.45.62-.1,0-.17-.08-.17-.18-.02-.69-.2-1.4-.29-2.09-.12-.84-.09-.85.25-.07.27.69.49,1.41.43,2.17,0,0-.17-.23-.17-.23.8.11,1.62-.01,2.41-.23h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M202.54,570.16c-.77.02-1.53.07-2.23.27-.24.05-.25-.18-.25-.36-.07-.85-.3-1.68-.34-2.53.42.71.69,1.51.75,2.34,0,.15.01.24-.02.4l-.24-.23c.77-.16,1.58-.12,2.33.11h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M203.53,568.18c-.54.06-1.08.06-1.62.03-.1,0-.18-.09-.18-.2.04-.2.1-.42.12-.64.09-.59.11-1.24.16-1.84.37.79.41,1.72.1,2.55l-.16-.26c.54.08,1.06.19,1.58.36h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <g>
                        <path d="M187.88,575.91s1.77.12,1.37,2.03c-.45,2.16-1.6,1.11-2.48,1.43-.88.32-.48.8-1.25,1.04-.77.25-1.51-.13-1.8.42s-.4,1.27-1.1,1.3c-.8.03-1.35.33-1.88.92-.86.97-2.53.65-3.33,1.81,0,0,.17-3.09,1.09-3.66.81-.5.48-1.64,1.12-2.27.23-.23.52-.36.83-.4.28-.04.49-.01.68-.25.38-.47.49-1.09.94-1.53.74-.72,1.76-.47,2.16-1.08.41-.61,1.1-1.18,2.38-1.31,1.28-.13,1.27,1.53,1.27,1.53Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M189.19,576.37s0,0,0,.01c.31.41.4.95.26,1.61-.36,1.71-1.2,1.62-1.88,1.56-.27-.03-.52-.05-.74.03-.37.14-.46.29-.56.47-.11.19-.24.43-.7.58-.34.11-.67.11-.96.11-.44,0-.62.01-.72.21-.06.12-.12.25-.18.38-.2.47-.43,1-1.1,1.03-.72.03-1.22.28-1.73.85-.45.5-1.07.68-1.67.86-.65.19-1.26.37-1.64.93-.06.08-.16.11-.25.08-.09-.03-.15-.12-.15-.22.02-.33.2-3.22,1.19-3.83.36-.23.45-.61.55-1.06.09-.41.19-.84.52-1.17.25-.25.58-.41.96-.46.05,0,.1-.01.15-.02.21-.02.3-.03.39-.15.16-.19.26-.41.38-.65.15-.31.3-.63.58-.89.42-.41.9-.53,1.32-.64.37-.1.66-.17.82-.4.55-.82,1.4-1.29,2.54-1.4.39-.04.71.06.96.29.4.36.51.97.54,1.27.27.05.77.21,1.11.64ZM177.67,584.27c.42-.33.93-.48,1.43-.62.57-.17,1.1-.33,1.47-.73.59-.66,1.2-.96,2.04-1,.37-.02.52-.3.72-.77.06-.14.12-.28.2-.42.24-.44.68-.44,1.11-.43.27,0,.54,0,.82-.09.29-.09.36-.21.45-.38.12-.21.26-.47.79-.66.31-.11.63-.08.93-.05.66.06,1.14.11,1.41-1.22.11-.53.05-.95-.18-1.26-.36-.46-.99-.51-1-.51-.11,0-.2-.1-.2-.22,0,0,0-.78-.4-1.14-.16-.15-.37-.2-.63-.18-1.02.1-1.74.5-2.22,1.21-.25.37-.67.48-1.07.58-.39.1-.79.2-1.12.53-.22.21-.35.48-.49.77-.12.25-.25.51-.44.74-.22.26-.47.29-.69.31-.04,0-.09,0-.13.02-.28.04-.53.16-.71.34-.24.24-.32.59-.41.96-.11.48-.23,1.01-.75,1.34-.5.31-.81,1.75-.93,2.88Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <path d="M188.25,575.8c.04.05.06.12.04.19-.03.12-.15.18-.27.15-.03,0-2.35-.58-5.3,3.34-.54.72-1.18,1.11-1.87,1.53-1.16.71-2.36,1.44-3.24,3.92-.04.11-.17.17-.28.13-.11-.04-.17-.17-.13-.28.94-2.62,2.26-3.43,3.43-4.15.65-.4,1.26-.77,1.75-1.42,3.16-4.2,5.66-3.53,5.77-3.5.05.01.08.04.11.08Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M188.08,579.11c-.22-4.2-2.05-2.1-1.33-3.59.13-.38.24-.88-.15-1.15.71.19.55,1.16.35,1.7,0,0-.15-.28-.15-.28,1.52.18,1.66,2.15,1.29,3.31h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M184.5,575.49c.63,0,1.26.22,1.7.71.03.03.04.07.04.11.09,1.09.07,2.26-.46,3.24.1-.93.07-2.26.07-3.21l.04.11c-.33-.45-.87-.73-1.39-.96h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M182.16,577.26c.71-.26,1.51-.29,2.23-.07.09.03.15.12.13.21-.11.6-.1,1.24-.17,1.85-.07.74-.1.75-.26.01-.11-.65-.16-1.31.05-1.96,0,0,.12.26.12.26-.64-.24-1.37-.31-2.1-.3h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M180.78,578.78c.67.12,1.33.22,1.96.17.16,0,.18.16.19.28,0,0-.01.07-.02.11-.1.74-.07,1.49-.23,2.23-.26-.74-.34-1.55-.18-2.32.02-.06.03-.1.06-.19l.19.28c-.7-.01-1.38-.22-1.98-.57h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M179.54,580.29c.48.04.95.15,1.41.27.1.03.16.13.13.23-.15.32-.3.68-.41,1.03-.11.31-.23.73-.34,1.04-.19-.75-.04-1.57.39-2.22,0,0,.1.3.1.3-.43-.18-.87-.38-1.28-.64h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                    <g>
                        <path d="M191.77,573.2s.88,1.54-.94,2.27c-2.05.82-1.81-.73-2.56-1.28-.75-.56-.93.04-1.56-.47-.63-.51-.73-1.33-1.34-1.27-.62.05-1.28.37-1.69-.2-.47-.65-1.02-.95-1.81-1.06-1.29-.19-1.94-1.75-3.34-1.77,0,0,2.67-1.56,3.65-1.11.87.4,1.64-.5,2.51-.32.31.06.58.24.79.48.18.21.28.4.58.43.6.06,1.18-.19,1.79-.06,1.01.22,1.36,1.21,2.09,1.21.73,0,1.59.27,2.41,1.26.81.99-.58,1.91-.58,1.91Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                        <path d="M192.55,571.19c.22.29.31.6.26.93-.08.54-.53.96-.77,1.15.11.26.26.77.07,1.3-.17.48-.57.86-1.2,1.11-1.62.64-2.02-.11-2.34-.71-.13-.24-.25-.47-.43-.6-.32-.24-.49-.23-.7-.21-.22.02-.5.04-.87-.26-.28-.23-.46-.5-.62-.74-.24-.37-.35-.51-.57-.49-.13.01-.28.04-.42.06-.5.09-1.07.2-1.47-.35-.42-.58-.9-.86-1.66-.97-.66-.1-1.16-.51-1.64-.92-.52-.44-1.01-.85-1.68-.86-.1,0-.18-.07-.21-.16-.02-.09.02-.19.1-.24.28-.17,2.8-1.61,3.85-1.12.39.18.76.04,1.19-.13.4-.15.81-.31,1.27-.21.35.07.66.26.91.54.03.04.07.08.1.11.13.16.19.23.35.24.24.03.49,0,.75-.04.34-.05.69-.09,1.06-.01.57.12.94.45,1.26.75.28.26.51.46.79.46.98,0,1.85.46,2.57,1.34,0,.01.02.02.03.04ZM189.21,575.18c.25.33.62.46,1.54.09.5-.2.82-.48.95-.84.19-.55-.12-1.11-.12-1.12-.06-.1-.03-.23.07-.29,0,0,.65-.43.73-.97.03-.22-.04-.42-.2-.62-.65-.79-1.38-1.18-2.24-1.18-.44,0-.76-.29-1.07-.57-.3-.27-.61-.55-1.06-.65-.3-.06-.6-.02-.91.02-.27.04-.56.08-.86.04-.34-.04-.5-.23-.64-.4-.03-.03-.06-.07-.09-.1-.19-.21-.42-.35-.67-.41-.34-.07-.67.06-1.03.19-.46.17-.97.37-1.53.11-.58-.27-2.01.34-2.91.81.5.17.91.51,1.31.85.45.38.88.74,1.42.82.88.13,1.47.47,1.96,1.15.22.3.54.26,1.04.17.15-.03.3-.05.46-.07.5-.04.74.33.97.68.15.22.3.46.53.64.24.19.37.18.57.17.24-.02.54-.04.99.3.26.2.41.48.56.75.08.16.16.3.25.42Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <path d="M191.7,572.67c.27.35.36.62.37.65.04.11-.03.24-.14.27-.11.04-.24-.03-.27-.14,0-.02-.8-2.28-5.71-2.57-.9-.05-1.58-.37-2.31-.71-1.23-.57-2.5-1.17-5.06-.54-.12.03-.23-.04-.26-.16-.03-.12.04-.23.16-.26,2.71-.66,4.11,0,5.35.57.69.32,1.34.62,2.15.67,3.61.22,5.13,1.45,5.73,2.23Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M189.22,575.14c3.38-2.5.62-2.87,2.26-3.09.39-.1.87-.28.87-.76.23.7-.67,1.1-1.22,1.22l.15-.28c.69,1.37-.88,2.57-2.05,2.9h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M190.27,570.15c.34.53.51,1.18.34,1.81-.01.04-.04.07-.07.1-.86.67-1.85,1.31-2.96,1.4.83-.43,1.93-1.19,2.72-1.71l-.07.1c.19-.52.13-1.12.03-1.68h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M187.5,569.19c.6.45,1.07,1.1,1.29,1.82.03.09-.02.19-.1.22-.56.24-1.09.6-1.64.88-.66.35-.69.33-.15-.21.48-.45,1.01-.86,1.66-1.04,0,0-.15.24-.15.24-.15-.67-.49-1.31-.91-1.92h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M185.47,568.87c.27.62.55,1.23.94,1.73.1.14-.03.23-.13.31,0,0-.06.03-.1.04-.67.32-1.28.77-1.99,1.05.47-.63,1.1-1.14,1.84-1.43.06-.02.1-.03.19-.05l-.13.31c-.38-.59-.58-1.27-.62-1.96h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M183.53,568.67c.24.42.4.87.55,1.32.04.13-.06.25-.19.25-.69.09-1.39.34-2.07.5.25-.29.58-.5.93-.66.37-.15.73-.25,1.14-.24l-.19.25c-.09-.46-.16-.93-.17-1.42h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <path d="M193.89,575.79s.05.09.04.15c-.02.1-.12.17-.22.15l-1.94-.34.02,1.61c0,.1-.08.19-.19.19-.1,0-.19-.08-.19-.19l-.02-1.47-2.14.76c-.1.04-.21-.02-.24-.11-.04-.1.01-.21.11-.24l2.49-.94s.07-.02.1,0l2.06.36s.09.03.12.07Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M193.75,574.42s.01.02.02.03c.05.09.01.21-.08.26l-2.03,1.09c-.09.05-.21.02-.26-.08-.05-.09-.01-.21.08-.26l2.03-1.09c.08-.04.18-.02.24.05Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                </g>
            </g>

          {/* OPTION: Guest Entry */}
          <g id="optionalBar" data-option="optionalBar" style={{ display: active.optionalBar ? "block" : "none" }} fill="#CC0001">
            <g id="f0_optional_bar">
              <g id="Lines">
                <path d="M511.3,210.7c0,0,0,.2.1.2,0,0,.1,0,.2,0h7.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-7.2v-.7c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v1.1" fill="#425563"/>
                <path d="M511.8,196.7c0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2" fill="#425563"/>
                <path d="M511.6,192.9c0,0,.2,0,.2,0,0,0,0-.1,0-.2v-1.1h7c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-7.2c0,0-.2,0-.2.1,0,0,0,.1-.1.2v1.3c0,0,0,.2.1.2,0,0,.1,0,.2,0" fill="#425563"/>
                <path d="M687.9,210.9c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2" fill="#425563"/>
                <path d="M675.5,210.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5" fill="#425563"/>
                <path d="M662.6,210.9c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2" fill="#425563"/>
                <path d="M662.6,191.1c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5" fill="#425563"/>
                <path d="M683.7,191.6c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5" fill="#425563"/>
                <path d="M687.7,191.6c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2" fill="#425563"/>
                <path d="M649.9,210.9c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2" fill="#425563"/>
                <path d="M637.1,210.7c0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2" fill="#425563"/>
                <path d="M633.4,210.5c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2" fill="#425563"/>
                <path d="M624.3,191.6c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2" fill="#425563"/>
                <path d="M649.7,191.6c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2" fill="#425563"/>
                <path d="M637.2,191.1c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5" fill="#425563"/>
                <path d="M612,210.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5" fill="#425563"/>
                <path d="M599.1,210.9c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2" fill="#425563"/>
                <path d="M586.7,210.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5" fill="#425563"/>
                <path d="M573.8,210.9c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2" fill="#425563"/>
                <path d="M573.8,191.1c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5" fill="#425563"/>
                <path d="M611.6,191.6c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2" fill="#425563"/>
                <path d="M594.9,191.6c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5" fill="#425563"/>
                <path d="M598.9,191.6c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2" fill="#425563"/>
                <path d="M569.8,210.9c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5" fill="#425563"/>
                <path d="M548.6,210.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5" fill="#425563"/>
                <path d="M535.7,210.9c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2" fill="#425563"/>
                <path d="M531.7,210.9c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5" fill="#425563"/>
                <path d="M535.7,191.1c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5" fill="#425563"/>
                <path d="M531.7,191.2c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2" fill="#425563"/>
                <path d="M560.9,191.6c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2" fill="#425563"/>
                <path d="M557.1,191.2c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2" fill="#425563"/>
                <path d="M854.9,210.9c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2" fill="#425563"/>
                <path d="M842.4,210.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5" fill="#425563"/>
                <path d="M829.4,210.7c0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2" fill="#425563"/>
                <path d="M830.2,191.1c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5" fill="#425563"/>
                <path d="M851.4,191.6c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5" fill="#425563"/>
                <path d="M855.4,191.6c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2" fill="#425563"/>
                <path d="M816.7,210.7c0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2" fill="#425563"/>
                <path d="M804.3,210.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5" fill="#425563"/>
                <path d="M791.4,210.9c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2" fill="#425563"/>
                <path d="M792.2,191.1c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5" fill="#425563"/>
                <path d="M817.3,191.6c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2" fill="#425563"/>
                <path d="M813.5,191.2c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2" fill="#425563"/>
                <path d="M778.8,210.9c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2" fill="#425563"/>
                <path d="M766,210.7c0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2" fill="#425563"/>
                <path d="M762.3,210.5c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2" fill="#425563"/>
                <path d="M753.9,191.6c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2" fill="#425563"/>
                <path d="M779.3,191.6c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2" fill="#425563"/>
                <path d="M766.6,191.6c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2" fill="#425563"/>
                <path d="M740.6,210.7c0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2" fill="#425563"/>
                <path d="M728,210.9c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2" fill="#425563"/>
                <path d="M715.9,210.9c0,0,.1,0,.2,0h7.9c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-7.9c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2" fill="#425563"/>
                <path d="M709.5,210.5c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2" fill="#425563"/>
                <path d="M700.4,191.6c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2" fill="#425563"/>
                <path d="M741.4,191.1c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5" fill="#425563"/>
                <path d="M728.8,191.1c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5" fill="#425563"/>
                <path d="M724.7,191.2c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2" fill="#425563"/>
                <path d="M905.5,210.7c0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2" fill="#425563"/>
                <path d="M901.6,210.9c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5" fill="#425563"/>
                <path d="M880.2,210.9c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2" fill="#425563"/>
                <path d="M876.2,210.9c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5" fill="#425563"/>
                <path d="M881,191.1c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5" fill="#425563"/>
                <path d="M877,191.2c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2" fill="#425563"/>
                <path d="M906.3,191.1c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8" fill="#425563"/>
                <path d="M893.4,191.6c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2Z" fill="#425563"/>
                <path d="M863.5,203.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M838.4,203.4c0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0M842.2,203.4c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M830.1,186.7c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5M829.7,182.6c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5M851.5,186.8c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M855.3,187.2c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M851.1,182.7c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M863.7,182.7c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M817,203.4h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0M800.1,203.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M804.1,203.4c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M792.1,186.7c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5M800.3,182.7c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M825.9,187.2c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M813.2,187.2c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M813,182.7c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M807.6,176.8c0,0,0,.1-.1.2v3.1c0,.5.3,1,.6,1.3h0c.4.4.9.6,1.5.5h5.8c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-5.8c-.4,0-.8-.1-1.1-.4h-.1c-.2-.2-.4-.5-.4-1v-3c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M825.7,182.7c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M819.3,181.7c0,0,0,.2.1.2,0,0,.1,0,.2,0h3.8c.6,0,1.1-.1,1.4-.5h.1c.4-.4.6-.8.5-1.4v-1.9c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v1.9c0,.4-.1.7-.4,1h0c-.2.3-.6.5-1.1.4h-3.8c0,0-.2,0-.2.1,0,0,0,.1-.1.2M819.1,178.9s0,0,0-.1c0-.5-.3-.7-.8-.7-.5,0-.8.3-.8.8,0,.5.3.8.7.8,0,0,.1,0,.1,0,.5,0,.8-.3.8-.8M818.3,178.5c.2,0,.3.1.3.3,0,.2-.1.3-.3.3-.2,0-.3-.1-.3-.3,0-.2.1-.3.3-.3M818,171.3s0,0,0-.1c-.1-.8-.6-1.3-1.4-1.4h0c-.9.1-1.4.6-1.5,1.5h0c.1.9.6,1.3,1.5,1.4h0c.8,0,1.2-.5,1.4-1.4M816.5,172.2c-.5,0-.7-.3-.8-.8,0-.5.4-.8,1-1,.5.1.7.4.8,1-.1.5-.4.8-1,.8M824.6,176c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v4c0,.3-.3.5-.7.5h-2.6c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h2.7c.7,0,1.1-.4,1.2-1.1v-4M823.7,174.3c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v1.1c0,.6-.1,1-.5,1.4h0c-.4.5-.8.7-1.4.6h-3.9v-3.4c0,0,0-.2,0-.2l-.3-.3c0,0-.1,0-.2-.1h-.5s0,0-.1.1l-.3.3s0,0-.1,0c0,0,0,.2-.1.2v3.4h-3.7c-.6,0-1.1-.2-1.5-.6h0c-.2-.2-.4-.4-.5-.6,0,0,0-.1-.1-.2,0,0-.1,0-.2.1,0,0-.1,0-.2.1,0,0,0,.1.1.2.1.3.3.6.5.8h0c.5.5,1.1.8,1.9.7h3.7v.8c0-.5-.3-.7-.8-.7-.5,0-.8.3-.8.8,0,.5.3.8.7.8,0,0,.1,0,.1,0,.5,0,.8-.3.8-.8v1.2c0,.3.2.4.3.5h-6.3c-.4,0-.6-.2-.7-.6,0,0,0,0-.1-.1,0,0,0,0-.2-.1,0,0,0,0-.1.1,0,0,0,.2-.1.2.1.7.5,1,1.2,1.1h7c0,0,.2,0,.2,0,0,0,0-.1,0-.2.5-.1.7-.4.6-.8v-2.1h3.9c.7,0,1.3-.3,1.8-.8h0c.5-.4.7-1,.6-1.7v-1.1M816.3,173.9h.3l.2.2v5.9c0,.2,0,.3-.2.3-.2,0-.3-.1-.4-.3v-2.3c0,0,0-.1,0-.2,0,0,0,0,0-.1v-3.4h.1M815.1,178.9c0,.2-.1.3-.3.3-.2,0-.3-.1-.3-.3,0-.2.1-.3.3-.3.2,0,.3.1.3.3M825.4,165.4c0,0,0-.1-.1-.2,0,0-.1,0-.2.1,0,0-.1,0-.2.1,0,0,0,.1.1.2,0,.1,0,.3,0,.4v7.8c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-7.8c0-.3,0-.5-.1-.6M817.7,166.3c0,0,.1,0,.2,0h3.3c.6.1,1.1.4,1.5.7.4.4.6.8.5,1.4v1.7c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-1.7c0-.7-.2-1.3-.6-1.8-.5-.5-1.1-.7-1.8-.8h-3.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M822.1,165c0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h1.2c.4,0,.6.3.6.6v5.7c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-5.8c0-.7-.4-1-1.2-1.1h-1.2c0,0-.2,0-.2.1M812.6,164.6c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M810,166.6h0c-.5.5-.7,1.1-.7,1.8v3.6c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-3.6c0-.6.3-1,.6-1.4h0c.4-.5.9-.7,1.5-.7h1.7c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-1.7c-.8,0-1.4.3-1.9.8M808.5,167.1c0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M809,164.5c0,0,0-.1-.1-.2,0,0-.1,0-.2.1-.1,0-.3.1-.4.2h-.1c-.4.4-.6.9-.6,1.5v6.8c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-6.8c0-.4.2-.8.5-1.1h-.1c.1,0,.3-.1.4-.2,0,0,.1,0,.1-.1,0,0,0-.1,0-.2M809.4,165.4c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M825.7,154.8c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M804.3,154.6c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5M800.3,154.8c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M863.7,154.8c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M838.4,155.2c0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0M842.2,155.2c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M774.7,203.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M778.8,203.4c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M753.4,203.4c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M762.7,186.8c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M753.6,182.6c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5M779.2,187.2c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M766.5,187.2c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M774.9,182.7c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M779,182.6c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5M723.1,206.3c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h6c0,0,.2,0,.2,0,0,0,0-.1,0-.2v-2.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v2.1h-5.7M740.6,203.2c0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2M705.2,200.9c0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M710.3,206.9c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M709.2,194.8c0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M705.6,188.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5M709.2,182.1c0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M705.6,175.8c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5M733.4,194.7c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v16c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-7.3h3.3c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-3.3v-8.1M741.1,187.2c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M729.2,191.2c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.2h3.8c0,0,.2,0,.2,0,0,0,0-.1,0-.2v-4.3h3.7c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-3.9c0,0-.2,0-.2.1,0,0,0,.1-.1.2v4.2h-3.7M729.4,181.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5M740.9,182.6c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5M733,177.8c0,0,0,.1-.1.2v4.9c0,0,0,.2.1.2,0,0,.1,0,.2,0h3.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-3.3v-4.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M733,165.1c0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M729.4,168.7c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5M727.3,158.1h1.6v6.3c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-6.6c0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-1.9c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0M733.4,153.9c0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-7.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h7.1v7c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-5.9h3.3c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-3.3v-.7M714.4,158.1c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M709.4,169.3c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M705.4,162.8c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M709.2,157.7c0,0,0,.1-.1.2v7.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-7.3h.7c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-1c0,0-.2,0-.2.1M705.4,153.6c0,0-.2,0-.2.1,0,0,0,.1-.1.2v5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-4.8h3.3c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-3.5M712.9,154.1c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M779,154.6c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5M774.9,154.8c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M749.4,155.2c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M753.4,155.2c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M774.7,91.9c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M745.3,104c0,0,.1,0,.2,0h3.2c0,0,.2,0,.2,0,0,0,0-.1,0-.2v-5.3c0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-4.9c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h4.5v4.8h-2.9c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M762,91.9c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M748.9,90.3c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v6.8h-1.1c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h1.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2v-7.1M750.8,81.9c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5M748.5,77.4c0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M750.8,69.2c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5M730.4,97.6c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M739.8,98.3c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M732.9,103.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5M734.5,97.6c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M720.2,103.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5M716,104c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M718.5,98.2c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5M714.5,98.3c0,0-.1,0-.2-.1h-7.1c0,0-.2,0-.2.1,0,0,0,.1-.1.2v1.3c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-1.1h6.9c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M717.8,97.6c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M707.4,86.8c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5M707.4,73.9c0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2M727.6,64.6c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5M714.9,64.6c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5M710.7,64.6h-3.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2v5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-4.8h3.3c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1M750.6,63.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2v1.2c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-1.2c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M748.9,64.7c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.1v8.2c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2M863.5,91.9c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M838.4,91.9c0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0M842.2,91.9c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M851.1,77.5c0,0-.1,0-.2-.1h-5.4v-2.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v2.9c0,0,0,.2.1.2,0,0,.1,0,.2,0h5.6c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M863.7,77.5c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M825.7,91.4c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M787.6,91.4c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M804.1,91.9c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M800.3,91.4c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M845.2,63.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2v6.8c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-6.8c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M892.9,203.4c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M905.6,203.4c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M876.2,203.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M888.9,203.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M880.7,187.2c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M876.6,187.2c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M876.4,182.7c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M889.1,182.7c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M906.2,186.7c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8M902,187.2c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M901.6,182.6h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1M905.8,182.6c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5M893.1,154.6c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5M876.4,154.8c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M888.9,155.2c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M914.5,154.8c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M901.8,91.4c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M905.6,91.9c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M876.2,91.9c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M888.9,91.9c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M876.2,77.9c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M888.9,77.9c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M893.1,77.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5M905.6,77.9c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2Z" fill="#425563"/>
                <path d="M750.8,77.5c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M763.5,77.9c0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0M775.8,77.1c0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2h0c0,.1-7.7.1-7.7.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8c0,0,.2,0,.2,0,0,0,0-.1,0-.2v-.4c0,0,0-.2,0-.2M712.6,77.9c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-7v-1c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v1.3c0,0,0,.2.1.2,0,0,.1,0,.2,0h7.2M725.3,77.9c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M738.2,77.7c0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2M705.6,63.7c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5M775.6,64.3c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1Z" fill="#425563"/>
              </g>
              <g id="Text">
                <text transform="translate(788.7 138)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">27’ 10” x 10’ 0”</tspan></text>
                <text transform="translate(779.9 119.4)" fill="#425563" font-family="Fredoka, sans-serif" font-size="16"><tspan x="0" y="0">Optional Bar</tspan></text>
              </g>
            </g>
          </g>
      </g>
    </g>
  </svg>

  );
}



// ❗ if you have a placeholder, TYPE IT so it matches Floor['SVG']
export const EmptySVG: React.FC<SVGProps> = () => null;

export const DillonD399AMainOptions = [
    { key: "sunroom", label: "Sunroom" },
    { key: "optBed4", label: "Optional fourth bedroom" },
];
export const DillonD399SecondOptions = [
    { key: "loft", label: "Loft" },
    { key: "masterBathTwo", label: "Master Bath Option Two" },
];
export const DillonD399BasementOptions = [
];
export const DillonD399 = {
    code: "DillonD399",

    title: "Meet the Dillon II",
    description:
      `Today’s healthy lifestyle thrives on balance—between work
and family, solitude and togetherness, calm and celebration.
This home offers the perfect harmony, giving you space to
recharge in private and room to welcome the people you love.
It’s everything you need, exactly when you need it.`,
    floors: [
        { 
          id: "main", 
          name: "Main Floor", 
          SVG:DillonD399mainSVG, 
          options: DillonD399AMainOptions 
        },
        { 
          id: "second", 
          name: "Second Floor", 
          SVG:DillonD399SecondSVG, 
          options: DillonD399SecondOptions 
        },
        { 
          id: "basement", 
          name: "Basement", 
          SVG:DillonD399basementSVG, 
          options: DillonD399BasementOptions 
        },
    ],
};
