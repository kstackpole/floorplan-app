import { useEffect, useRef } from "react";
import type { SVGProps } from "../types/floorplan";
import useFPState from "../store/useFPState";
import usePanZoomPreview from "../hooks/usePanZoomPreview";


// LIFESTYLE FEATURES
export function PictureHotspot() {
  const { openGallery, openModal } = useFPState();

  const gallery = {
    id: "greatroom",
    title: "FIND YOUR LOST-AND-FOUND AT-HOME ZONE",
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

export function DropZoneHotspot() {
  const { setVideo, openModal } = useFPState();
  const base = import.meta.env.BASE_URL;
  
  const media = {
    id: "dropzone",
    title: "FIND YOUR LOST-AND-FOUND AT-HOME ZONE",
    text: `You know the feeling…everyone walks in, drops their bags, coats and paperwork, and suddenly the entryway turns into chaos. This thoughtful drop zone, complete with organized closets and built-in cabinetry, keeps everything in its place so your home stays calm and clutter-free.`,
    src: `${base}videos/DropZone_hotspot.mp4`,
    thumb: `${base}assets/thumbs/drop-zone.png`,
  };


  const open = () => {
    setVideo(media);
    openModal(); 
  };

  return (
    <g
      role="button"
      aria-label="Open drop zone video"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => e.key === "Enter" && open()}
      className="hotspot cursor-pointer"
    >
      <circle className="dot" cx={540} cy={681} r={20} fill="#af272f" opacity={1} />
      <circle className="pulse" cx={540} cy={681} r={20} stroke="#af272f" fill="transparent" opacity={1} />
      <text x={540} y={685} textAnchor="middle" fill="white" fontSize={12}>
        1
      </text>
    </g>
  );
}
export function GarageHotspot() {
  const { openGallery, openModal } = useFPState();
  const base = import.meta.env.BASE_URL;

  const gallery = {
    id: "greatroom",
    title: "ENJOY PLAY TIME (AND SPACE) FOR GROWN-UPS",
    text: `With a 3-car garage, you have extra space to accommodate your lifestyle. Showcase your favorite grown-up toys in their own spaces, happily coexisting with extra storage, a hobby zone, or guest parking.`,
    index: 0,
    items: [
      {
        src: `${base}images/3-carGarage_S.gif`,
        thumb: `${base}images/3-carGarage_S.gif`,
        alt: "3 car garage — view 1",
        meta: "3 car garage filling with cars",
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
      <circle className="dot" cx={650} cy={850} r={20} fill="#af272f" opacity={1} />
      <circle className="pulse" cx={650} cy={850} r={20} stroke="#af272f" fill="transparent" opacity={0.25} />
      <text x={650} y={854} textAnchor="middle" fill="white" fontSize={12}>
        2
      </text>
    </g>
  );
}
export function FlexSpaceHotspot() {
  const { setVideo, openModal } = useFPState();
  const base = import.meta.env.BASE_URL;
  
  const media = {
    id: "dropzone",
    title: "FLEX IT YOUR WAY",
    text: `Flexible spaces empower multiple generations with different needs living under the same roof. Need an extra bedroom? A second office? More storage? Flex spaces are designed to put you in control.`,
    src: `${base}videos/FlexSpace_hotspot.mp4`,
    thumb: `${base}assets/thumbs/drop-zone.png`,
  };


  const open = () => {
    setVideo(media);
    openModal(); 
  };

  return (
    <g
      role="button"
      aria-label="Open flex space video"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => e.key === "Enter" && open()}
      className="hotspot cursor-pointer"
    >
      <circle className="dot" cx={740} cy={681} r={20} fill="#af272f" opacity={1} />
      <circle className="pulse" cx={740} cy={681} r={20} stroke="#af272f" fill="transparent" opacity={1} />
      <text x={740} y={685} textAnchor="middle" fill="white" fontSize={12}>
        3
      </text>
    </g>
  );
}

// Example: Opens the Compare (before/after) modal
export function StorageBAHotspot() {
  const { openCompare, openModal } = useFPState();
  const base = import.meta.env.BASE_URL;

  const open = () => {
    openCompare({
      title: "STORE IT OUT OF THE WAY",
      text: "When our spaces are too full or messy, it stresses us out and makes it difficult to relax. Unfinished storage is perfect for stashing holiday deco, ski equipment, and luggage—keeping your garage clutter-free and ready for everyday needs.",
      before: {
        src: `${base}/images/ext-stg-af.jpg`,
        alt: "Full Closet",
        label: "Before",
      },
      after: {
        src: `${base}/images/ext-stg-bf.jpg`,
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
      <circle className="dot" cx={300} cy={970} r={20} fill="#af272f" opacity={1} />
      <circle
        className="pulse"
        cx={300}
        cy={970}
        r={20}
        stroke="#af272f"
        fill="transparent"
        opacity={1}
      />
      <text x={300} y={974} textAnchor="middle" fill="white" fontSize={12}>
        4
      </text>
    </g>
  );
}

// PLAN SVG
export function DariusD786mainSVG({
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
            <g id="background">
              
            </g>
            <g id="f1_structural">
              <g id="Flooring">
                <rect x="670.6" y="259.6" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="692.1" y="259.6" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="713.6" y="259.6" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="734.9" y="259.6" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="670.6" y="281.7" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="692.1" y="281.7" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="713.6" y="281.7" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="734.9" y="281.7" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="756.2" y="259.6" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="777.7" y="259.6" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="799.2" y="259.6" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="820.5" y="259.6" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="756.2" y="281.7" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="777.7" y="281.7" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="799.2" y="281.7" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="820.5" y="281.7" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="842" y="259.7" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="842" y="281.8" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="863.5" y="259.9" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="884.8" y="259.9" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="863.5" y="282" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="884.8" y="282" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="906.3" y="259.9" width="13.4" height="21.5" fill="#bcd3dd"/>
                <rect x="906.3" y="282" width="13.4" height="21.5" fill="#bcd3dd"/>
                <rect x="756.2" y="303.9" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="777.7" y="303.9" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="799.2" y="303.9" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="820.5" y="303.9" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="756.2" y="326" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="777.7" y="326" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="799.2" y="326" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="820.5" y="326" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="842" y="304" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="842" y="326.1" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="863.5" y="304.2" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="884.8" y="304.2" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="863.5" y="326.3" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="884.8" y="326.3" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="906.3" y="304.2" width="13.4" height="21.5" fill="#bcd3dd"/>
                <rect x="906.3" y="326.3" width="13.4" height="21.5" fill="#bcd3dd"/>
                <rect x="756.2" y="348.3" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="777.7" y="348.3" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="799.2" y="348.3" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="820.5" y="348.3" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="756.2" y="370.4" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="777.7" y="370.4" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="799.2" y="370.4" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="820.5" y="370.4" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="842" y="348.4" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="842" y="370.4" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="863.5" y="348.6" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="884.8" y="348.6" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="863.5" y="370.7" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="884.8" y="370.7" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="906.3" y="348.6" width="13.4" height="21.5" fill="#bcd3dd"/>
                <rect x="906.3" y="370.7" width="13.4" height="21.5" fill="#bcd3dd"/>
                <rect x="756.2" y="392.4" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="777.7" y="392.4" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="799.2" y="392.4" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="820.5" y="392.4" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="842" y="392.4" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="863.5" y="392.6" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="884.8" y="392.6" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="906.3" y="392.7" width="13.4" height="21.5" fill="#bcd3dd"/>
                <rect x="673.3" y="532.5" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="673.3" y="554.6" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="694.9" y="532.7" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="716.4" y="532.7" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="694.9" y="554.8" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="716.4" y="554.8" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="673.3" y="576.8" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="694.9" y="577" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="630.3" y="532.6" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="630.3" y="554.7" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="651.8" y="532.5" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="673.3" y="525.8" width="20.8" height="6.1" fill="#bcd3dd"/>
                <rect x="694.9" y="525.9" width="20.8" height="6.1" fill="#bcd3dd"/>
                <rect x="716.4" y="525.9" width="20.8" height="6.1" fill="#bcd3dd"/>
                <rect x="630.3" y="525.8" width="20.8" height="6.1" fill="#bcd3dd"/>
                <rect x="651.8" y="525.8" width="20.8" height="6.1" fill="#bcd3dd"/>
                <rect x="651.8" y="554.6" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="630.3" y="576.9" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="651.8" y="576.8" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="716.1" y="577" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="635.3" y="654.2" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="635.3" y="676.3" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="656.9" y="654.4" width="11.9" height="21.5" fill="#bcd3dd"/>
                <rect x="656.9" y="676.5" width="11.9" height="21.5" fill="#bcd3dd"/>
                <rect x="635.3" y="698.5" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="656.9" y="698.7" width="11.9" height="21.5" fill="#bcd3dd"/>
                <rect x="592.3" y="654.3" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="592.3" y="676.4" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="613.8" y="654.2" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="613.8" y="676.3" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="592.3" y="698.6" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="613.8" y="698.5" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="635.3" y="720.5" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="656.9" y="720.8" width="11.9" height="21.5" fill="#bcd3dd"/>
                <rect x="592.3" y="720.7" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="613.8" y="720.6" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="310" y="800.2" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="310" y="822.3" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="331.5" y="800.4" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="353" y="800.4" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="331.5" y="822.5" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="353" y="822.5" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="310" y="844.5" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="331.5" y="844.7" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="266.9" y="800.3" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="266.9" y="822.4" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="288.4" y="800.2" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="310" y="781" width="20.8" height="18.7" fill="#bcd3dd"/>
                <rect x="331.5" y="781.2" width="20.8" height="18.7" fill="#bcd3dd"/>
                <rect x="353" y="781.2" width="20.8" height="18.7" fill="#bcd3dd"/>
                <rect x="266.9" y="781.1" width="20.8" height="18.7" fill="#bcd3dd"/>
                <rect x="288.4" y="781" width="20.8" height="18.7" fill="#bcd3dd"/>
                <rect x="288.4" y="822.3" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="266.9" y="844.6" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="288.4" y="844.5" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="352.8" y="844.7" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="331.5" y="866.9" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="353" y="866.9" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="331.5" y="889" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="353" y="889" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="331.5" y="911.2" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="352.8" y="911.2" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="331.5" y="933.2" width="20.8" height="12.5" fill="#bcd3dd"/>
                <rect x="323.2" y="866.9" width="7.6" height="21.5" fill="#bcd3dd"/>
                <rect x="323.2" y="889" width="7.6" height="21.5" fill="#bcd3dd"/>
                <rect x="323.2" y="911.2" width="7.6" height="21.5" fill="#bcd3dd"/>
                <rect x="323.2" y="933.2" width="7.6" height="12.5" fill="#bcd3dd"/>
                <rect x="352.8" y="933.2" width="20.8" height="12.5" fill="#bcd3dd"/>
              </g>
              <g id="LightBlue">
                <rect x="603.2" y="528.1" width="39.8" height="69.7" fill="#dde7ed"/>
                <rect x="679.8" y="573.4" width="57.4" height="24.5" fill="#dde7ed"/>
                <rect x="554.9" y="442.2" width="44.8" height="28.2" fill="#dde7ed"/>
                <rect x="511.5" y="430" width="41.1" height="40.4" fill="#dde7ed"/>
                <rect x="531.2" y="262.4" width="49.7" height="118.6" fill="#dde7ed"/>
                <rect x="632.8" y="371.3" width="2.2" height="34.6" fill="#dde7ed"/>
                <rect x="636.6" y="262.4" width="27.8" height="145.3" fill="#dde7ed"/>
                <rect x="230.4" y="57.9" width="273.1" height="137.9" fill="#dde7ed"/>
                <rect x="427.2" y="993.4" width="77.3" height="53" fill="#dde7ed"/>
                <rect x="669.7" y="430.9" width="68" height="13.1" fill="#dde7ed"/>
                <rect x="669.4" y="412.4" width="86.7" height="13.1" fill="#dde7ed"/>
                <rect x="669.4" y="305.9" width="86.7" height="13.1" fill="#dde7ed"/>
                <rect x="634.3" y="475.9" width="86.7" height="13.1" transform="translate(1160.1 -195.3) rotate(90)" fill="#dde7ed"/>
                <rect x="629" y="359.4" width="97.1" height="13.1" transform="translate(1043.5 -311.5) rotate(90)" fill="#dde7ed"/>
                <rect x="758.1" y="400.4" width="102.1" height="23.5" fill="#dde7ed"/>
                <rect x="860.3" y="333.9" width="55.4" height="89.9" fill="#dde7ed"/>
                <rect x="867.1" y="264.5" width="39.3" height="69.2" fill="#dde7ed"/>
                <rect x="238.5" y="288.6" width="20" height="81.1" fill="#dde7ed"/>
                <rect x="317.6" y="781.7" width="58.1" height="25.5" fill="#dde7ed"/>
                <rect x="383.6" y="806.4" width="13.9" height="60.1" fill="#dde7ed"/>
                <rect x="236.6" y="794.8" width="34.8" height="71.8" fill="#dde7ed"/>
                <rect x="236.6" y="870.1" width="13.9" height="79.1" fill="#dde7ed"/>
                <rect x="233.9" y="870.1" width="92.8" height="14.5" transform="translate(560.6 1754.7) rotate(180)" fill="#dde7ed"/>
                <rect x="508" y="654.6" width="13.9" height="46.7" fill="#dde7ed"/>
                <path d="M657.1,586.3l-.6-1.8c-.2-1-.6-2-1.3-2.7-.3-.4-.7-.8-.9-1.3-1.2-2.2-1.7-4.4-1.7-6.8,0-2.4.7-4.7,1.9-6.7,1.2-2,2.9-3.7,5-4.9,1.3-.5,2.6-.5,3.9,0,.5.2.9.5,1.3.7,2,1.5,3.5,3.4,4.5,5.6,1,2.2,1.4,4.4,1.2,6.8-.2,2.4-1,4.6-2.4,6.6h-.1c-.6.8-1,1.6-1.3,2.6l-.7,1.9h4.5c.4,0,.8.1,1.2.4.2.2.4.5.5.9l.4,7c0,.5-.2.9-.5,1.4-.2.3-.5.5-.9.6h-18.8c-.5-.1-.9-.3-1.2-.6-.3-.4-.4-.9-.4-1.4l.4-7c0-.4.2-.7.5-.9.3-.3.7-.4,1.2-.4h13.1" fill="#dde7ed"/>
                <path d="M652.8,728.1l-1.8.6c-1,.2-2,.6-2.7,1.3-.4.3-.8.7-1.3.9-2.2,1.2-4.4,1.7-6.8,1.7-2.4,0-4.7-.7-6.7-1.9-2-1.2-3.7-2.9-4.9-5-.5-1.3-.5-2.6,0-3.9.2-.5.5-.9.7-1.3,1.5-2,3.4-3.5,5.6-4.5,2.2-1,4.4-1.4,6.8-1.2,2.4.2,4.6,1,6.6,2.4h0c.8.7,1.6,1.2,2.6,1.4l1.9.7v-4.5c0-.4.1-.8.4-1.2.2-.2.5-.4.9-.5l7-.4c.5,0,.9.2,1.4.5.3.2.5.5.6.9v18.8c-.1.5-.3.9-.6,1.2-.4.3-.9.4-1.4.4l-7-.4c-.4,0-.7-.2-.9-.5-.3-.3-.4-.7-.4-1.2v-13.1" fill="#dde7ed"/>
                <rect x="645.8" y="409.8" width="19.8" height="60.1" fill="#dde7ed"/>
                <rect x="622.1" y="431.3" width="19.8" height="60.1" transform="translate(1093.3 -170.7) rotate(90)" fill="#dde7ed"/>
                <path d="M662.4,688.8c.5-.5.9-1,1.4-1.7v-16c-.4-.6-.9-1.2-1.4-1.8-1.2-1.3-2.6-2.3-4.2-3-1.5-.7-3.1-1-4.8-1s-3.3.3-4.9,1c-1.5.8-2.9,1.8-4.1,3h0c-1.2,1.4-2.1,2.8-2.7,4.5-.6,1.7-.9,3.4-.9,5.2s.3,3.5.9,5.2c.6,1.7,1.5,3.1,2.7,4.4h0c1.2,1.4,2.6,2.4,4.2,3.1,1.5.7,3.1,1,4.8,1,1.7,0,3.3-.4,4.8-1,1.6-.8,3-1.8,4.2-3.1Z" fill="#dde7ed"/>
                <path d="M655.7,669.4c-1.1-.5-2.3-.7-3.5-.7s-2.3.2-3.5.7c-1.1.6-2.1,1.3-3,2.2-.8,1-1.5,2.2-2,3.4-.5,1.3-.7,2.7-.7,4.1,0,1.3.2,2.7.7,4.1.5,1.2,1.2,2.3,2,3.3h.1c.8,1,1.8,1.7,2.9,2.2,1.1.5,2.3.7,3.5.7s2.3-.2,3.5-.7c1.1-.5,2.1-1.2,3-2.2.8-1,1.5-2.1,2-3.3.5-1.4.7-2.8.7-4.1,0-1.4-.2-2.8-.7-4.1-.5-1.3-1.2-2.4-2-3.4-.9-.9-1.9-1.6-3-2.2Z" fill="#dde7ed"/>
                <path d="M682.3,277.1l1.8-.6c1-.2,2-.6,2.7-1.3.4-.3.8-.7,1.3-.9,2.2-1.2,4.4-1.7,6.8-1.7,2.4,0,4.7.7,6.7,1.9,2,1.2,3.7,2.9,4.9,5,.5,1.3.5,2.6,0,3.9-.2.5-.5.9-.7,1.3-1.5,2-3.4,3.5-5.6,4.5-2.2,1-4.4,1.4-6.8,1.2-2.4-.2-4.6-1-6.6-2.4h0c-.8-.7-1.6-1.2-2.6-1.4l-1.9-.7v4.5c0,.4-.1.8-.4,1.2-.2.2-.5.4-.9.5l-7,.4c-.5,0-.9-.2-1.4-.5-.3-.2-.5-.5-.6-.9v-18.8c.1-.5.3-.9.6-1.2.4-.3.9-.4,1.4-.4l7,.4c.4,0,.7.2.9.5.3.3.4.7.4,1.2v13.1" fill="#dde7ed"/>
                <path d="M301.1,794.9l.6,1.8c.2,1,.6,2,1.3,2.7.3.4.7.8.9,1.3,1.2,2.2,1.7,4.4,1.7,6.8,0,2.4-.7,4.7-1.9,6.7-1.2,2-2.9,3.7-5,4.9-1.3.5-2.6.5-3.9,0-.5-.2-.9-.5-1.3-.7-2-1.5-3.5-3.4-4.5-5.6-1-2.2-1.4-4.4-1.2-6.8.2-2.4,1-4.6,2.4-6.6h.1c.6-.8,1-1.6,1.3-2.6l.7-1.9h-4.5c-.4,0-.8-.1-1.2-.4-.2-.2-.4-.5-.5-.9l-.4-7c0-.5.2-.9.5-1.4.2-.3.5-.5.9-.6h18.8c.5.1.9.3,1.2.6.3.4.4.9.4,1.4l-.4,7c0,.4-.2.7-.5.9-.3.3-.7.4-1.2.4h-4.4s-8.7,0-8.7,0" fill="#dde7ed"/>
              </g>
              <g id="Floor1_x5F_structural">
                <path d="M334.1,1150.4v1.8h41.6v-8.1h-41.6v6.3M330.6,1152.2v-8.1h-41.5v8.1h41.5M236.7,962h-7.5v41.5h7.5v-41.5M291.1,939h-.1v1c0-.4,0-.7.1-1M323.2,941.3v-2.3h-32.1c0,.3,0,.7-.1,1v1.3h32.2M434.4,1053.6v11.5h69.1v-11.5h-69.1M434.4,1065.1v11.5h69.1v-11.5h-69.1M447.7,994.8v-1.2h-13.2v59.9h69.1v-59.9h-13.2v1.2h-42.6M423.4,952.2h-2.3v34.5c.6,0,1.2,0,1.8,0h.5v-34.5M487.5,946c.4-.1.8-.2,1.2-.2h-1.2v.2M487.5,946v41.4h2.3v-41.6h-1.2c-.4,0-.8,0-1.2.2M487.5,987.4v-41.4c-4.9.2-9.5,1.3-13.9,3.1-5,2.1-9.4,5-13.2,8.8-3.8,3.8-6.7,8.3-8.8,13.2-2.2,5-3.3,10.4-3.4,16.2v6.3h-.5v1.2h42.6v-1.2h-.5v-6.3h-2.3M637.2,1049.6h15.5v27.6h19.6v-5.1h-14.4v-27.7h-20.8v5.2M634.4,1049.6v-2.3h-110.7v2.3h110.7M896,1077.2v-2.3h-221.3v2.3h221.3M664.3,783.3v2.9h248.3v285.8h-14.4v5.1h19.6v-293.9h-253.6M581.9,705.6h0c.3,0,.7,0,1,0h-1M584.2,705.6h-1.3c-.4,0-.7,0-1,.1v36.8h2.3v-36.9M599.8,686.5c-.3,0-.6,0-.9.1h.9M707.5,608.8c0-.2,0-.5.1-.8v-1.5h-36.9v2.3h36.8M707.6,608.8v-.8c0,.3,0,.6-.1.8h.1M599.8,654.3h-2.3v32.2h1.4c.3,0,.6,0,.9-.1v-32.1M597.5,654.3h-4.6v88.2h71.5v-88.2h-34.5c0,5.9-1.5,11.4-4.4,16.3-2.9,4.8-6.7,8.7-11.5,11.5-4.3,2.4-9,3.9-14.1,4.3h0c0,.1-.9.1-.9.1h-1.4v-32.2M648.5,666.3c1.6-.7,3.3-1,4.9-1s3.3.3,4.8,1c1.6.8,3,1.8,4.2,3,.5.6.9,1.2,1.4,1.8v16c-.4.6-.9,1.2-1.4,1.7-1.2,1.3-2.6,2.4-4.2,3.1-1.5.6-3.1,1-4.8,1-1.7,0-3.3-.3-4.8-1-1.6-.8-3-1.8-4.2-3h0c-1.2-1.4-2.1-2.8-2.7-4.5-.6-1.7-.9-3.5-.9-5.2s.3-3.6.9-5.2c.6-1.7,1.5-3.1,2.7-4.4h0c1.2-1.4,2.6-2.4,4.1-3.1M654.1,713.5l7.1-.3c.5,0,.9.1,1.3.3.3.3.6.7.6,1.2v18.8c0,.4-.3.8-.6,1-.3.3-.8.4-1.3.4l-7-.4h-.1c-.3,0-.6-.2-.8-.5-.3-.3-.5-.7-.5-1.2v-4.5l-1.8.7c-1,.2-1.9.6-2.6,1.3h-.1c-.3.3-.8.6-1.3.8-2.2,1.2-4.4,1.8-6.8,1.8-2.4,0-4.6-.7-6.7-1.9-2-1.2-3.7-2.9-4.9-5-.4-1.3-.4-2.6,0-3.9.3-.5.6-.9.8-1.3,1.5-2.1,3.3-3.6,5.5-4.5,2.2-1,4.4-1.4,6.8-1.2s4.6,1,6.6,2.5c.8.6,1.7,1,2.7,1.3l1.8.7v-4.5c0-.4.2-.8.5-1.2.2-.2.5-.4.8-.5M628.5,722.1c-.4,1.3-.4,2.6,0,3.9,1.3,2.2,2.9,3.8,4.9,5,2.1,1.2,4.3,1.8,6.7,1.9,2.4,0,4.7-.6,6.8-1.8.5-.2.9-.5,1.3-.8h.1c.8-.6,1.6-1,2.6-1.3l1.8-.7v-8.6l-1.8-.7c-1-.2-1.9-.6-2.7-1.3-2-1.5-4.2-2.3-6.6-2.5s-4.7.2-6.8,1.2c-2.2.9-4,2.4-5.5,4.5-.3.3-.6.8-.8,1.3M629.9,722.7c.7-1.2,1.5-2.2,2.5-3.1,1.7-1.5,3.6-2.4,5.7-2.7,2.1-.4,4.1-.3,6.1.4,2,.6,3.8,1.7,5.2,3.4.2.2.3.4.2.6v5.7c0,.2,0,.4-.2.6-.8,1-1.9,1.9-3.1,2.5-2,1-4,1.6-6.1,1.6-2.1,0-4.1-.6-5.9-1.7s-3.3-2.6-4.4-4.5c-.3-.9-.3-1.8,0-2.7M632.4,719.5c-1,.9-1.8,2-2.5,3.1-.3.9-.3,1.8,0,2.7,1.1,2,2.6,3.5,4.4,4.5s3.8,1.6,5.9,1.7c2.1,0,4.1-.5,6.1-1.6,1.3-.6,2.3-1.5,3.1-2.5.1-.2.2-.4.2-.6v-5.7c0-.2,0-.4-.2-.6-1.5-1.6-3.2-2.7-5.2-3.4-2-.7-4-.8-6.1-.4-2,.3-3.9,1.3-5.7,2.7M654.1,734.5v-21c-.3.1-.6.3-.8.5-.3.3-.5.7-.5,1.2v17.6c0,.4.2.8.5,1.2.2.3.5.5.8.5M661.3,713.2l-7.1.3v21h.1l7,.4c.5,0,.9-.1,1.3-.4.3-.3.6-.6.7-1v-18.8c-.2-.5-.4-.9-.7-1.2-.3-.2-.8-.3-1.3-.3M653.4,665.2c-1.7,0-3.3.3-4.9,1-1.5.8-2.9,1.8-4.1,3h0c-1.2,1.4-2.1,2.8-2.7,4.5-.6,1.7-.9,3.4-.9,5.2s.3,3.5.9,5.2c.6,1.7,1.5,3.1,2.7,4.4h0c1.2,1.4,2.6,2.4,4.2,3.1,1.5.7,3.1,1,4.8,1,1.7,0,3.3-.4,4.8-1,1.6-.8,3-1.8,4.2-3.1.5-.5.9-1,1.4-1.7v-16c-.4-.6-.9-1.2-1.4-1.8-1.2-1.3-2.6-2.3-4.2-3-1.5-.7-3.1-1-4.8-1M643.7,675c.5-1.2,1.2-2.3,2-3.4.9-.9,1.9-1.6,3-2.2,1.1-.5,2.3-.7,3.5-.7s2.3.2,3.5.7c1.1.6,2.1,1.3,3,2.2.8,1,1.5,2.1,2,3.4.5,1.3.7,2.7.7,4.1,0,1.3-.2,2.7-.7,4.1-.5,1.2-1.2,2.3-2,3.3-.9,1-1.9,1.7-3,2.2-1.1.5-2.3.7-3.5.7s-2.3-.2-3.5-.7c-1.1-.5-2.1-1.2-2.9-2.2h-.1c-.8-1-1.5-2.1-2-3.3-.5-1.4-.7-2.8-.7-4.1,0-1.4.2-2.8.7-4.1M645.7,671.7c-.8,1-1.5,2.2-2,3.4-.5,1.3-.7,2.7-.7,4.1,0,1.3.2,2.7.7,4.1.5,1.2,1.2,2.3,2,3.3h.1c.8,1,1.8,1.7,2.9,2.2,1.1.5,2.3.7,3.5.7s2.3-.2,3.5-.7c1.1-.5,2.1-1.2,3-2.2.8-1,1.5-2.1,2-3.3.5-1.4.7-2.8.7-4.1,0-1.4-.2-2.8-.7-4.1-.5-1.3-1.2-2.4-2-3.4-.9-.9-1.9-1.6-3-2.2-1.1-.5-2.3-.7-3.5-.7s-2.3.2-3.5.7c-1.1.6-2.1,1.3-3,2.2M623.9,564.7c-.3.1-.6.2-.9.2-.3,0-.5,0-.7-.2l-16.7,30.2c0,.1.2.3.4.4.4.5.9.7,1.6.7h30.2c.7,0,1.3-.2,1.7-.7.2-.1.3-.3.4-.5l-16-30.1M623.9,561.7c-.3-.1-.6-.2-.9-.2s-.5,0-.7.2c-.1,0-.3.2-.4.3-.3.3-.5.7-.5,1.2s.2.9.5,1.3c.1,0,.3.2.4.3.2.1.5.2.7.2.3,0,.7,0,.9-.2,0-.1.2-.2.3-.3.3-.3.5-.8.5-1.3,0-.5-.2-.9-.5-1.2-.1-.1-.2-.2-.3-.3M623.3,530.1l-.5-1.4-.6,1.4-1.7,4.4h4.6l-1.8-4.4M640.1,532.4c0-.3,0-.6-.1-.9l-16.1,30.2c0,0,.2.2.3.3.3.3.5.7.5,1.2,0,.5-.2.9-.5,1.3-.1,0-.2.2-.3.3l16,30.1c.1-.3.2-.6.2-1v-61.4M592.8,561c.4,0,.7,0,1-.1h-1M595.1,560.9h-1.3c-.3,0-.7,0-1,.1v36.8h2.3v-36.9M605.5,531.4c-.1.3-.2.6-.3.9v61.4c0,.4.1.8.3,1.2l16.7-30.2c-.1-.1-.3-.2-.4-.3-.3-.3-.5-.8-.5-1.3s.2-.9.5-1.2c.1-.1.3-.2.4-.3l-16.7-30.2M606,530.8c.4-.5.9-.7,1.6-.7h14.6l.6-1.4h-18.9v69.2h39.2v-69.2h-20.3l.5,1.4h14.5c.7,0,1.3.3,1.7.7.2.2.4.4.5.6,0,.3.1.7.1.9v61.4c0,.4,0,.8-.2,1,0,.2-.2.4-.4.5-.4.5-1,.7-1.7.7h-30.2c-.6,0-1.2-.2-1.6-.7-.2-.1-.3-.3-.4-.4-.2-.3-.3-.7-.3-1.2v-61.4c0-.3.2-.7.3-.9,0-.2.2-.4.4-.6M607.5,530.1c-.6,0-1.2.2-1.6.7-.2.2-.3.4-.4.6l16.7,30.2c.2-.1.5-.2.7-.2s.7,0,.9.2l16.1-30.2c-.1-.2-.3-.4-.5-.6-.4-.4-1-.7-1.7-.7h-14.5l1.8,4.4h-4.6l1.7-4.4h-14.6M574.2,510.9l1.2,1.2h.1c-.4-.4-.8-.8-1.3-1.2M601.4,485.9l-1.6-1.6-26.1,26.1.4.4c.4.3.8.7,1.3,1.2l26-26.1M603.9,484.3h-4l1.6,1.6-26,26.1c3.1,2.7,6.5,4.9,10.3,6.4,4.5,1.8,9.2,2.8,14.1,2.8h0c0-.1,4.1-.1,4.1-.1v3.5h9.1v-43.8h-9.1v3.5M631.5,480.8h-18.5v43.8h18.5v-43.8M737.5,573.6h-57.6v24.2h57.6v-24.2M722.6,585.7c0,2-.6,3.9-1.6,5.6-.9,1.7-2.2,3-3.9,3.9-1.7,1-3.5,1.5-5.6,1.6-2,0-3.9-.6-5.6-1.6-1.6-.9-2.9-2.2-3.9-3.9s-1.5-3.5-1.5-5.6.5-3.8,1.5-5.5c1-1.7,2.3-3,3.9-4,1.7-.9,3.5-1.4,5.6-1.5,2,0,3.9.6,5.6,1.5,1.7,1,3,2.3,3.9,4,1,1.6,1.5,3.4,1.6,5.5M721,591.3c1-1.7,1.5-3.5,1.6-5.6,0-2-.6-3.8-1.6-5.5-.9-1.7-2.2-3-3.9-4-1.7-.9-3.5-1.4-5.6-1.5-2,0-3.9.6-5.6,1.5-1.6,1-2.9,2.3-3.9,4-1,1.6-1.5,3.4-1.5,5.5s.5,3.9,1.5,5.6,2.3,3,3.9,3.9c1.7,1,3.5,1.5,5.6,1.6,2,0,3.9-.6,5.6-1.6,1.7-.9,3-2.2,3.9-3.9M720.5,589.8c-.5,1-1.2,2-2,2.8-1.8,1.8-4.1,2.8-6.9,2.9-2.7-.1-5-1.1-6.9-2.9-1.8-1.8-2.8-4.1-2.8-6.9,0-2.7,1-5,2.8-6.9,1.9-1.8,4.2-2.8,6.9-2.8,2.8,0,5.1,1,6.9,2.8,1.8,1.9,2.8,4.2,2.9,6.9,0,1.5-.4,2.9-.9,4.1M712.2,589.9v1.3c2.8,0,5.6-.5,8.3-1.4l-2.9-.4c-1.8.3-3.6.5-5.4.5M712.4,593.1h-.1c-.1.3-.4.5-.7.5-.3,0-.6-.2-.8-.5,0,.1,0,.3.2.5.1.2.3.3.6.3s.4,0,.6-.2c.1-.2.2-.4.2-.6M712.3,593.2h.1c0-.4,0-.6-.2-.7v.7M705.7,589.4l-2.9.4c2.7.8,5.5,1.3,8.3,1.4v-1.3c-1.8,0-3.6-.2-5.4-.5M712.2,587.1l-.3-.3h-.6l-.2.3v5.4c-.2.2-.3.5-.3.7.2.3.5.5.8.5.3,0,.6-.2.7-.4v-.7c-.1,0-.1-1.4-.1-1.4v-4.1M719,585.7c.1-1.3,0-2.5-.4-3.7-.6-1.3-1.4-2.3-2.4-3.3-1.1-.8-2.3-1.3-3.6-1.5-1.3-.1-2.6,0-3.8.5-1.3.5-2.3,1.3-3.1,2.3-1,1.4-1.6,2.9-1.6,4.6s.5,3.2,1.6,4.6c1.7.3,3.5.5,5.4.5v-2.8l.2-.3h.6l.3.3v2.8c1.7,0,3.5-.2,5.4-.5.8-1.1,1.3-2.3,1.5-3.7M710.7,585.7c0-.5.3-.8.8-.8.6,0,.8.3.8.8,0,.6-.3.9-.8.9-.5,0-.8-.4-.8-.9M711.5,584.9c-.5,0-.8.3-.8.8,0,.6.3.9.8.9.6,0,.8-.4.8-.9,0-.5-.3-.8-.8-.8M718.5,592.6c.8-.8,1.5-1.8,2-2.8-2.7.8-5.5,1.3-8.3,1.4v1.4c.1.1.2.3.2.6,0,.2,0,.4-.2.6-.2.1-.4.2-.6.2s-.5-.1-.6-.3c-.1-.2-.2-.4-.2-.5,0-.3.1-.5.3-.7v-1.3c-2.8,0-5.6-.5-8.3-1.4l2.9-.4c-1-1.4-1.6-2.9-1.6-4.6s.5-3.2,1.6-4.6c.8-1,1.9-1.8,3.1-2.3,1.2-.5,2.4-.7,3.8-.5,1.3.1,2.4.6,3.6,1.5,1,.9,1.9,2,2.4,3.3.4,1.2.6,2.4.4,3.7-.1,1.3-.6,2.6-1.5,3.7l2.9.4c.6-1.2.9-2.6.9-4.1-.1-2.7-1.1-5-2.9-6.9-1.8-1.8-4.1-2.8-6.9-2.8-2.7,0-5,1-6.9,2.8-1.8,1.9-2.8,4.2-2.8,6.9,0,2.8,1,5.1,2.8,6.9,1.9,1.8,4.2,2.8,6.9,2.9,2.8-.1,5.1-1.1,6.9-2.9M715.3,591.7c.2,0,.3.1.3.3s-.1.2-.3.2h-1.4c0,.1-.2.3-.3.4-.4.1-.7,0-.9-.4s-.1-.7.3-.9c.5-.1.8,0,.9.4h1.4M709.7,591.3c.3-.1.6,0,.8.4.1.4,0,.7-.3.9-.4.1-.7,0-.9-.4h-1.4c-.2,0-.3,0-.3-.2,0-.2.1-.3.3-.3h1.4c0-.2.2-.3.4-.4M709.9,592.2c.1,0,.2,0,.2-.2,0-.2,0-.3-.2-.3h-2c-.2,0-.3.1-.3.3,0,.1.1.2.3.2h2M710.1,592c0,.1,0,.2-.2.2h-.6c.2.4.5.6.9.4.3-.2.5-.5.3-.9-.2-.4-.5-.6-.8-.4-.2,0-.3.2-.4.4h.6c.1,0,.2.1.2.3M714,592.2h-.6c-.2,0-.3,0-.3-.2,0-.2.1-.3.3-.3h.6c-.1-.4-.5-.6-.9-.4-.4.2-.5.5-.3.9s.5.6.9.4c.1-.1.2-.3.3-.4M715.6,592c0-.2-.1-.3-.3-.3h-2c-.2,0-.3.1-.3.3s.1.2.3.2h2c.2,0,.3,0,.3-.2M705.2,534.6v1h.1c0-.3,0-.7-.1-1M737.5,535.6v-2.3h-32.2v1.3c0,.4,0,.7.1,1h32.1M737.5,533.3v-4.6h-94.5v69.2h36.8v-24.2h57.6v-8.1c-5.9,0-11.4-1.5-16.3-4.4-4.8-2.9-8.7-6.7-11.5-11.5-2.5-4.2-4-8.9-4.3-14h-.1v-2.3h32.2M659.5,562.1c1.3-.5,2.6-.5,3.9,0,.5.2.9.5,1.3.7,2,1.5,3.5,3.4,4.5,5.6,1,2.2,1.4,4.4,1.2,6.8-.2,2.4-1,4.6-2.4,6.6h-.1c-.6.8-1,1.6-1.3,2.6l-.7,1.9h4.5c.4,0,.8.1,1.2.4.2.2.4.5.5.9l.4,7c0,.5-.2.9-.5,1.4-.2.3-.5.5-.9.6h-18.8c-.5-.1-.9-.3-1.2-.6-.3-.4-.4-.9-.4-1.4l.4-7c0-.4.2-.7.5-.9.3-.3.7-.4,1.2-.4h4.4l-.6-1.8c-.2-1-.6-2-1.3-2.7-.3-.4-.7-.8-.9-1.3-1.2-2.2-1.7-4.4-1.7-6.8,0-2.4.7-4.7,1.9-6.7,1.2-2,2.9-3.7,5-4.9M651,587.7l-.4,7c0,.5.1.9.4,1.4.3.3.7.5,1.2.6h18.8c.4-.1.7-.3.9-.6.3-.4.5-.9.5-1.4l-.4-7h-21M651.5,586.7c-.3.2-.5.5-.5.9h21c-.1-.4-.3-.7-.5-.9-.3-.3-.7-.4-1.2-.4h-17.6c-.4,0-.8.1-1.2.4M663.4,562.1c-1.3-.5-2.6-.5-3.9,0-2.2,1.3-3.8,2.9-5,4.9-1.2,2-1.8,4.3-1.9,6.7,0,2.4.5,4.7,1.7,6.8.3.4.6.8.9,1.3.6.8,1,1.7,1.3,2.7l.6,1.8h8.7l.7-1.9c.2-1,.6-1.9,1.3-2.6h.1c1.4-2,2.2-4.2,2.4-6.6.2-2.4-.2-4.7-1.2-6.8-1-2.2-2.5-4-4.5-5.6-.3-.3-.8-.5-1.3-.7M653.9,573.7c0-2.2.6-4.1,1.7-5.9,1-1.9,2.6-3.4,4.5-4.5.9-.3,1.8-.3,2.7,0,1.2.7,2.2,1.6,3.1,2.6,1.5,1.7,2.4,3.6,2.7,5.7.4,2,.3,4.1-.4,6.1-.6,2-1.7,3.8-3.4,5.2-.2.1-.4.2-.6.2h-5.7c-.3,0-.5,0-.6-.2-1-.9-1.8-2-2.5-3.1-1-2-1.6-4-1.6-6.1M655.6,567.8c-1,1.7-1.6,3.7-1.7,5.9,0,2.1.5,4.1,1.6,6.1.7,1.2,1.5,2.2,2.5,3.1.1.1.3.2.6.2h5.7c.2,0,.4,0,.6-.2,1.6-1.5,2.7-3.2,3.4-5.2.7-2,.8-4.1.4-6.1-.3-2.1-1.3-4-2.7-5.7-.9-1-2-1.9-3.1-2.6-.9-.3-1.8-.3-2.7,0-2,1.1-3.5,2.6-4.5,4.5M705.4,517.7c0,.4,0,.7-.1,1v1.3h32.2v-2.3h-32.1M705.4,517.7h-.1v1c0-.3,0-.7.1-1M748.5,563.3c-.4,0-.7,0-1-.1h-1.3v34.6h2.3v-34.5M748.5,563.2h-1c.3,0,.7,0,1,.1h0M456.8,833.9c-.4-.4-.8-.8-1.3-1.2l-22.8,22.8,1.7,1.6,22.8-22.8-.4-.4M455.5,832.8c.4.3.8.7,1.3,1.2l-1.2-1.3h-.1M456.8,815.8c-.4.4-.8.8-1.3,1.2h.1c0,.1,1.2-1.2,1.2-1.2M455.5,816.9c.4-.3.8-.7,1.3-1.2l.4-.3-22.8-22.9-1.7,1.7,22.8,22.7M415.3,783.3h-13.7v83h13.7v-83M430.4,783.3h-15v83h15v-9.2h4.1l-1.7-1.6,22.8-22.8c-2.7-2.3-5.6-4.1-8.8-5.5-3.6-1.6-7.3-2.4-11.3-2.4,4,0,7.8-.9,11.3-2.5,3.2-1.3,6.2-3.1,8.8-5.5l-22.8-22.7,1.7-1.7h-4.1v-9.2M546.8,750v-1.2h-34v295.6h8.7v5.2h2.2v-2.3h110.7v2.3h2.8v-5.2h20.8v27.7h14.4v5.1h2.3v-2.3h221.3v2.3h2.3v-5.1h14.4v-285.8h-248.3v-37.5h-79.6v1.2h-38M512.7,748.8h-2.8v300.8h11.5v-5.2h-8.7v-295.6M558.2,716.4c-3.4,3.4-6.1,7.3-8,11.8-1.9,4.5-2.8,9.3-2.8,14.4v6.3h-.6v1.2h38v-1.2h-.5v-6.3h-2.3v-36.8c-4.3.3-8.3,1.2-12.1,2.8-4.4,1.9-8.3,4.5-11.7,7.9M562.8,686.5c-.4.4-.8.8-1.3,1.2h.1c0,.1,1.2-1.2,1.2-1.2M323.2,884.2h-72.6v63.9h72.6v-6.8h-32.2v-2.3h.1c.3-5.1,1.8-9.8,4.3-14.1,2.8-4.8,6.6-8.7,11.5-11.5,4.8-2.9,10.3-4.3,16.3-4.4v-24.8M345.9,843.5l-1.6,1.7,22.8,22.8,1.7-1.6-22.9-22.9M323.2,884.2v-13.9h-86.5v77.8h13.9v-63.9h72.6M344.3,845.1c-2.2,2.7-4,5.6-5.4,8.8-1.7,3.9-2.5,8-2.5,12.4v4h-9.2v38.6h-4c-6,0-11.4,1.5-16.3,4.4-4.9,2.9-8.7,6.7-11.5,11.5-2.5,4.3-4,9-4.3,14.1h32.1v2.3h4v4.5h3.5v6.4h-93.9v191.9h191.3v-191.9h-4.6v34.5h-.5c-.6,0-1.2,0-1.8,0-3.9-.3-7.6-1.2-11.1-2.7-4.2-1.7-7.9-4.2-11-7.3s-5.6-6.8-7.3-11c-1.8-4.1-2.7-8.6-2.7-13.4h-19v-6.4h3.5v-75.5h-4.6v-4l-1.7,1.6-22.8-22.8M350.9,829.8l-.4.4,22.9,22.9,1.6-1.7-22.8-22.8c-.4.4-.8.8-1.3,1.2M397.5,807.6h-13.9v58.8h13.9v-58.8M373.4,820.8c-4.3,0-8.5.8-12.4,2.5-3.2,1.3-6.2,3.1-8.8,5.4l22.8,22.8-1.6,1.7h4v13.2h6.3v-58.8h-6.3v13.2h-4M256.4,860.6h-4.6l.9,2.3,1.4,3.5,1.4-3.5.9-2.3M240.2,812.2c.6-2.9,2-5.3,4-7.3,2-2,4.4-3.3,7.3-3.9,2.6-.4,5-.2,7.3.6,2.3.8,4.3,2.2,5.9,4,1.6,1.9,2.7,4.1,3.1,6.6v46.1c0,1.3-.6,2.3-1.5,3.1-.8.8-1.9,1.3-3.1,1.5h-7.8l-1.4,3.5h17.2v-69.2h-34.6v69.2h17.4l-1.4-3.5h-8c-1.3,0-2.3-.6-3.1-1.5-.8-.8-1.3-1.9-1.5-3.1v-46.1M244.2,804.8c-2,2-3.4,4.5-4,7.3v46.1c.1,1.3.6,2.3,1.5,3.1.8.9,1.9,1.4,3.1,1.5h8l-.9-2.3h4.6l-.9,2.3h7.8c1.3-.1,2.3-.6,3.1-1.5.9-.8,1.4-1.9,1.5-3.1v-46.1c-.5-2.5-1.5-4.7-3.1-6.6-1.6-1.8-3.6-3.1-5.9-4-2.3-.8-4.8-1-7.3-.6-2.9.6-5.4,1.9-7.3,3.9M255.2,856.3c0,.7-.5,1.1-1.2,1.2-.7,0-1.1-.5-1.2-1.2,0-.7.5-1.1,1.2-1.2.7,0,1.1.5,1.2,1.2M254,857.4c.7,0,1.1-.5,1.2-1.2,0-.7-.5-1.1-1.2-1.2-.7,0-1.1.5-1.2,1.2,0,.7.5,1.1,1.2,1.2M278.3,797.2h-6.9v69.2h65.1c0-4.3.8-8.5,2.5-12.4,1.3-3.2,3.1-6.2,5.4-8.8l1.6-1.7,22.9,22.9h4.6v-13.2l-22.9-22.9.4-.4c.4-.3.8-.7,1.3-1.2,2.7-2.2,5.6-4,8.8-5.4,3.9-1.7,8-2.5,12.4-2.5v-13.2h-55.3v-24.2h-39.8v13.9M306.1,784.5c.5.1.8.4,1,.7.3.3.5.8.5,1.3l-.4,7c-.1.5-.3.8-.6,1-.3.3-.7.4-1.2.4h-4.4l.7,1.8c.2,1,.6,1.9,1.3,2.6.3.4.6.8.8,1.3,1.2,2.2,1.8,4.5,1.8,6.9-.1,2.4-.8,4.6-2,6.6-1.2,2.1-2.9,3.8-5,5-1.3.4-2.6.4-3.9,0-.4-.3-.8-.6-1.3-.8-2-1.5-3.5-3.4-4.5-5.6-.9-2.2-1.3-4.4-1.2-6.7.2-2.4,1.1-4.6,2.6-6.7.6-.8,1-1.6,1.3-2.6l.6-1.8h-4.4c-.5,0-.9-.1-1.2-.4-.3-.2-.5-.6-.5-1l-.4-7c0-.5.1-.9.4-1.3.3-.3.6-.6,1-.7h18.8M301.8,796.8l-.7-1.8h-8.7l-.6,1.8c-.3,1-.7,1.9-1.3,2.6-1.5,2.1-2.4,4.3-2.6,6.7-.1,2.3.2,4.5,1.2,6.7,1,2.2,2.5,4,4.5,5.6.4.3.8.6,1.3.8,1.3.4,2.6.4,3.9,0,2.2-1.3,3.8-2.9,5-5,1.2-2,1.9-4.2,2-6.6,0-2.4-.6-4.7-1.8-6.9-.3-.4-.6-.8-.8-1.3-.6-.8-1-1.6-1.3-2.6M293.3,798.3c.1-.2.3-.3.6-.3h5.7c.2,0,.4.1.5.3,1,.9,1.9,2,2.6,3.1,1,2,1.5,4,1.5,6.1,0,2.1-.6,4.1-1.7,5.9-1,1.8-2.4,3.3-4.4,4.4-.9.3-1.8.3-2.7,0-1.2-.7-2.2-1.5-3.1-2.5-1.5-1.7-2.4-3.6-2.8-5.7-.3-2.1-.2-4.2.4-6.2.6-2,1.8-3.7,3.5-5.1M293.9,798c-.3,0-.5.1-.6.3-1.7,1.5-2.8,3.2-3.5,5.1-.6,2-.8,4.1-.4,6.2.4,2,1.4,3.9,2.8,5.7.9,1,2,1.8,3.1,2.5.9.3,1.8.3,2.7,0,2-1.1,3.4-2.6,4.4-4.4,1.1-1.8,1.7-3.8,1.7-5.9,0-2.1-.4-4.1-1.5-6.1-.7-1.2-1.6-2.2-2.6-3.1-.1-.2-.3-.3-.5-.3h-5.7M306.6,794.6c.3-.2.5-.6.6-1h-21c0,.5.2.8.5,1,.3.3.7.4,1.2.4h17.5c.5,0,.9-.1,1.2-.4M307.1,785.2c-.2-.3-.6-.6-1-.7h-18.8c-.4.1-.8.4-1,.7-.3.3-.4.8-.4,1.3l.4,7h21l.4-7c0-.5-.2-.9-.5-1.3M373.4,783.3h-55.3v24.2h55.3v-24.2M351.2,786.1c1.6.9,2.9,2.2,3.9,3.9,1,1.7,1.5,3.5,1.5,5.6,0,2-.5,3.8-1.5,5.5-1,1.7-2.3,3-3.9,4-1.7.9-3.5,1.4-5.6,1.5-2,0-3.9-.6-5.6-1.5-1.6-1-2.9-2.3-3.9-4-1-1.6-1.5-3.4-1.5-5.5s.5-3.9,1.5-5.6c1-1.7,2.3-3,3.9-3.9,1.7-1,3.5-1.5,5.6-1.6,2,0,3.9.6,5.6,1.6M355.1,789.9c-1-1.7-2.3-3-3.9-3.9-1.7-1-3.5-1.5-5.6-1.6-2,0-3.9.6-5.6,1.6-1.6.9-2.9,2.2-3.9,3.9-1,1.7-1.5,3.5-1.5,5.6s.5,3.8,1.5,5.5c1,1.7,2.3,3,3.9,4,1.7.9,3.5,1.4,5.6,1.5,2,0,3.9-.6,5.6-1.5,1.6-1,2.9-2.3,3.9-4,1-1.6,1.5-3.4,1.5-5.5,0-2-.5-3.9-1.5-5.6M354.6,791.4c.6,1.3.8,2.6.8,4.1,0,2.7-1,5-2.8,6.8-1.8,1.9-4.1,2.9-6.9,2.9-2.7,0-5-1-6.9-2.9-1.8-1.8-2.8-4.1-2.8-6.8,0-1.5.3-2.9.9-4.1.4-1,1-2,1.9-2.8,1.9-1.9,4.2-2.9,6.9-2.9,2.8,0,5.1,1,6.9,2.9.8.8,1.5,1.8,2,2.8M336.8,791.4l2.9.5c1.7-.3,3.5-.6,5.4-.6v-1.2c-2.8,0-5.6.5-8.3,1.3M344.9,788.1c0,0-.1,0-.1.1,0,.2,0,.4.1.5v-.6M351.6,791.9l2.9-.5c-2.7-.8-5.5-1.2-8.3-1.3v1.2c1.7,0,3.5.3,5.4.6M355.4,795.5c0-1.5-.3-2.8-.8-4.1l-2.9.5c1,1.3,1.5,2.8,1.5,4.5s-.5,3.2-1.5,4.6c-.9,1.1-2,1.9-3.3,2.4-1.2.5-2.4.6-3.7.4-1.3-.1-2.6-.6-3.7-1.5-1-.9-1.8-2-2.3-3.1-.5-1.2-.7-2.4-.5-3.8.1-1.3.7-2.5,1.6-3.6l-2.9-.5c-.6,1.2-.9,2.6-.9,4.1,0,2.7,1,5,2.8,6.8,1.9,1.9,4.2,2.9,6.9,2.9,2.8,0,5.1-1,6.9-2.9,1.8-1.8,2.8-4.1,2.8-6.8M346.3,791.3v2.9l-.3.2h-.6l-.2-.2v-2.9c-1.8,0-3.6.3-5.4.6-.9,1-1.4,2.2-1.6,3.6-.1,1.3,0,2.6.5,3.8.5,1.2,1.3,2.2,2.3,3.1,1.1.8,2.3,1.3,3.7,1.5,1.3.2,2.5,0,3.7-.4,1.3-.5,2.3-1.3,3.3-2.4,1-1.4,1.5-2.9,1.5-4.6s-.5-3.2-1.5-4.5c-1.8-.3-3.6-.6-5.4-.6M346.5,795.5c0,.5-.3.8-.8.8-.6,0-.8-.3-.8-.8s.3-.9.8-.9c.6,0,.8.4.8.9M345.7,796.3c.6,0,.8-.3.8-.8,0-.6-.3-.9-.8-.9-.6,0-.8.4-.8.9s.3.8.8.8M346.3,788.8c.1-.1.2-.3.2-.5-.2-.4-.5-.7-.8-.7-.3,0-.5.2-.7.5v.6l.2,1.5v4.1l.2.2h.6l.3-.2v-5.5M346.5,788.2h0c0,.3,0,.5-.2.6v1.4c2.8,0,5.6.5,8.3,1.3-.5-1-1.2-2-2-2.8-1.8-1.9-4.1-2.9-6.9-2.9-2.7,0-5,1-6.9,2.9-.8.8-1.5,1.8-1.9,2.8,2.7-.8,5.5-1.2,8.3-1.3l-.2-1.5c0-.1-.1-.3-.1-.5h0c0-.3.1-.5.3-.6.1-.1.3-.2.6-.2.2,0,.4,0,.5.2.1.2.2.4.2.6M348.1,789.6c0,.1-.2.2-.3.3-.4.1-.7,0-.9-.3-.2-.4-.1-.8.3-1,.4-.1.7,0,.9.4h1.4c.2,0,.3.2.3.3,0,.2-.1.3-.3.3h-1.4M341.7,789.3c0-.1,0-.2.2-.3h1.5c0-.2.2-.3.3-.4.4-.1.7,0,.9.4.1.4,0,.7-.3.9-.4.1-.7,0-.9-.3h-1.5c-.1,0-.2-.1-.2-.3M343.3,789h.6c.1,0,.2.2.2.3,0,.2,0,.3-.2.3h-.6c.2.3.5.5.9.3.3-.2.5-.5.3-.9-.2-.4-.5-.6-.9-.4-.1,0-.2.2-.3.4M341.9,789c-.1,0-.2.2-.2.3,0,.2,0,.3.2.3h2.1c.1,0,.2-.1.2-.3s0-.2-.2-.3h-2.1M348.1,789h-.6c-.2,0-.3.2-.3.3,0,.2.1.3.3.3h2c.2,0,.3-.1.3-.3,0-.1-.1-.2-.3-.3h-1.4M347.4,789h.6c-.2-.4-.5-.6-.9-.4-.4.3-.5.6-.3,1,.2.3.5.5.9.3.1,0,.2-.2.3-.3h-.6c-.2,0-.3-.1-.3-.3,0-.1.1-.2.3-.3M346.5,788.3h0c0-.3,0-.5-.2-.7-.1-.1-.3-.2-.5-.2-.3,0-.5,0-.6.2-.2.1-.3.3-.3.5h0s0,0,.1,0c.2-.3.5-.5.7-.5.3,0,.6.3.8.7M358.9,599v-1.2h-4v4h4v-2.8M236.7,654.9h-8v69.2h8v-69.2M303.6,599v1.7h51.3v-1.7h-51.3M303.6,600.7v1.2h51.3v-1.2h-51.3M303.6,597.9v1.2h51.3v-1.2h-51.3M299.6,600.7v-1.7h-49v1.7h49M299.6,601.9v-1.2h-49v1.2h49M299.6,599v-1.2h-49v1.2h49M299.6,597.9v4h4v-4h-4M306.5,539.1h-.8v58.8h11.4v-58.8h-10.6M302.4,539.1h4.1v-4.1h-4.1v4.1M230.4,502.1h-1.7v69.2h8v-69.2h-6.3M247.1,495.2h-10.4v83h10.4v-83M363.3,539.1h-11.5v58.8h11.5v-58.8M360.3,535v-55.3h-11.5v55.3h11.5M314.3,535v-55.3h-1.8v-3.5h-65.4v121.6h58.6v-58.8h-3.3v-4.1h11.9M397.8,539.1h-11.5v58.8h11.5v-58.8M374.7,539.1h-11.4v58.8h11.4v-58.8M386.3,539.1h-11.5v58.8h11.5v-58.8M351.7,539.1h-11.5v58.8h11.5v-58.8M328.6,539.1h-11.5v58.8h11.5v-58.8M340.2,539.1h-11.5v58.8h11.5v-58.8M337.3,479.7h-11.4v55.3h11.4v-55.3M325.8,479.7h-11.5v55.3h11.5v-55.3M321.8,476.2v-1.2h-74.7v1.2h74.7M321.8,475.1v-1.7h-74.6v1.3c-.1,0-.1.4-.1.4h74.7M325.8,478v-1.8h-11.5v1.8h11.5M348.8,479.7h-11.5v55.3h11.5v-55.3M337.3,478v-1.8h-11.4v1.8h11.4M348.8,478v-1.8h-11.5v1.8h11.5M383.4,479.7h-11.5v55.3h11.5v-55.3M371.9,479.7h-11.5v55.3h11.5v-55.3M360.3,476.2v1.8h11.5v-1.8h-11.5M360.3,478v-1.8h-11.5v1.8h11.5M383.4,476.2v1.8h-69.2v-1.8h-1.8v3.5h72.6v-3.5h-1.7M383.4,478v-1.8h-11.5v1.8h11.5M538.8,664.9l1.7-1.7h-4.1v-8.9h-14.9v46.1h14.9v-4.8h4.1c4.3,0,8.4-.8,12.3-2.5,3.2-1.3,6.2-3.1,8.8-5.5l-22.8-22.7M540.5,663.3l-1.7,1.7,22.8,22.7c.4-.3.8-.7,1.3-1.2l.4-.3-22.8-22.9M521.5,654.3h-13.9v46.1h13.9v-46.1M549.7,583.4v14.5h8.6c0-5.1.9-9.9,2.8-14.4,2-4.5,4.6-8.4,8-11.8s7.3-6,11.8-7.9c3.7-1.6,7.7-2.6,12-2.8h0c0-.1,1-.1,1-.1h1.3v36.9h4.6v-76.6c-4.9,0-9.6-1-14.1-2.8-3.8-1.5-7.2-3.7-10.3-6.4h-.1l-1.2-1.2-.4-.4,26.1-26.1h-.1v-10.4h-89.8v109.5h39.8M414.2,601.9v-1.2h-55.3v1.2h55.3M414.2,600.7v-1.7h-55.3v1.7h55.3M414.2,599v-1.2h-55.3v1.2h55.3M400.4,535v-58.8h-15.3v3.5h-1.7v55.3h17M400.4,539.1v-1.2h-93.9v1.2h93.9M400.4,537.9v-1.8h-93.9v1.8h93.9M400.4,536.2v-1.2h-93.9v1.2h93.9M404.4,539.1v-4.1h-4v4.1h4M403.3,476.2h-1.7v58.8h1.7v-58.8M400.4,476.2v-1.2h-74.6v1.2h74.6M401.6,476.2h-1.2v58.8h1.2v-58.8M400.4,475.1v-1.7h-74.6v1.7h74.6M404.4,476.2h-1.2v58.8h1.2v-58.8M400.4,472.2h-74.6v1.2h74.6v-1.2M404.4,472.2h-4v4h4v-4M321.8,472.2h-74.6v1.2h74.6v-1.2M325.8,472.2h-4v4h4v-4M247.2,472.2h-.1v2.4-1.3c.1,0,.1-1.2.1-1.2M236.7,407.7h-7.5v41.5h7.5v-41.5M240,317.3v37.8l18.7,5.4v-48.4l-18.7,5.2M230.4,223.3h-1.2v41.5h7.5v-41.5h-6.3M422.3,202.5v-8h-110.6v8h110.6M508.4,118.1h-1.7v41.5h1.7v-41.5M506.8,89h-1.8v41.5h1.8v-41.5M502.4,88.4h1.2v-30.5H238.8v8.4h-8.4v129.9h81.2v-1.7h110.6v1.7h81.2v-23.6h-1.2v-84.2M759.9,399.6v24.2h100.3v-24.2h-100.3M786.8,402.3c1.7,1,3,2.3,4,4,.9,1.6,1.4,3.4,1.5,5.5,0,2-.6,3.9-1.5,5.6-1,1.7-2.3,3-4,3.9-1.6,1-3.5,1.5-5.6,1.6-2,0-3.8-.6-5.5-1.6-1.7-.9-3-2.2-4-3.9-.9-1.7-1.4-3.5-1.5-5.6,0-2,.6-3.8,1.5-5.5,1-1.7,2.3-3,4-4,1.6-.9,3.4-1.4,5.5-1.5,2.1,0,4,.6,5.6,1.5M836.7,400.9c2,0,3.8.6,5.5,1.5,1.7,1,3,2.3,4,4,.9,1.6,1.4,3.4,1.5,5.5,0,2-.6,3.9-1.5,5.6-1,1.7-2.3,3-4,3.9-1.6,1-3.4,1.5-5.5,1.6-2.1,0-4-.6-5.6-1.6-1.7-.9-3-2.2-4-3.9-.9-1.7-1.4-3.5-1.5-5.6,0-2,.6-3.8,1.5-5.5,1-1.7,2.3-3,4-4,1.6-.9,3.5-1.4,5.6-1.5M842.1,402.3c-1.6-.9-3.4-1.4-5.5-1.5-2.1,0-4,.6-5.6,1.5-1.7,1-3,2.3-4,4-.9,1.6-1.4,3.4-1.5,5.5,0,2,.6,3.9,1.5,5.6,1,1.7,2.3,3,4,3.9,1.6,1,3.5,1.5,5.6,1.6,2,0,3.8-.6,5.5-1.6,1.7-.9,3-2.2,4-3.9.9-1.7,1.4-3.5,1.5-5.6,0-2-.6-3.8-1.5-5.5-1-1.7-2.3-3-4-4M836.7,402c2.7,0,5,1,6.8,2.9,1.9,1.8,2.9,4.1,2.9,6.8,0,1.5-.3,2.8-.8,4.1-.6,1-1.3,2-2.1,2.8-1.8,1.9-4.1,2.9-6.8,2.9-2.8,0-5.1-1-6.9-2.9-1.9-1.8-2.9-4.1-2.9-6.9,0-2.7,1-5,2.9-6.8,1.8-1.9,4.1-2.9,6.9-2.9M836,418.5c-.2.2-.3.4-.3.6,0,0,.1.1.1.2l.2-.8M836.7,419.8c-.3,0-.6-.2-.8-.4,0,0,0-.1-.1-.2,0,.2,0,.4.2.6.2.1.4.2.6.2.2,0,.4,0,.6-.2.2-.1.3-.3.3-.5h0c-.3.2-.6.5-.8.5M837.2,416v1.2c2.9,0,5.7-.4,8.4-1.3l-3-.5c-1.7.3-3.5.6-5.4.6M837.2,413l-.3-.2h-.5l-.3.2v5.5l-.2.8c.2.2.5.3.8.4.3,0,.6-.3.8-.6h0c0-.1-.3-2-.3-2v-4.1M830.8,415.3h-.1l-2.9.5c2.7.8,5.5,1.3,8.3,1.3v-1.2c-1.7,0-3.5-.3-5.2-.6M841.2,404.8c-1-.8-2.2-1.3-3.6-1.5-1.3-.2-2.6,0-3.8.4-1.2.5-2.2,1.3-3.1,2.4-1,1.4-1.6,2.9-1.6,4.6s.5,3.2,1.6,4.5h.1c1.7.3,3.5.6,5.2.6v-2.9l.3-.2h.5l.3.2v2.9c1.8,0,3.6-.3,5.4-.6.8-1,1.3-2.2,1.5-3.6.2-1.3,0-2.6-.4-3.8s-1.3-2.2-2.4-3.1M836.7,410.9c.5,0,.8.3.8.8,0,.6-.3.9-.8.9-.6,0-.9-.4-.9-.9,0-.5.4-.8.9-.8M837.5,411.8c0-.5-.3-.8-.8-.8-.6,0-.9.3-.9.8,0,.6.4.9.9.9.5,0,.8-.4.8-.9M843.5,405c-1.8-1.9-4.1-2.9-6.8-2.9-2.8,0-5.1,1-6.9,2.9-1.9,1.8-2.9,4.1-2.9,6.8,0,2.8,1,5.1,2.9,6.9,1.8,1.9,4.1,2.9,6.9,2.9,2.7,0,5-1,6.8-2.9.8-.8,1.5-1.8,2.1-2.8-2.7.8-5.5,1.3-8.4,1.3l.3,1.9h0v.2c0,.2-.1.4-.3.5-.2.2-.4.3-.6.2-.2,0-.4,0-.6-.2-.1-.2-.2-.4-.2-.6s.1-.4.3-.6v-1.4c-2.8,0-5.6-.4-8.3-1.3l2.9-.5c-1-1.3-1.6-2.8-1.6-4.5s.5-3.2,1.6-4.6c.9-1.1,2-1.9,3.1-2.4,1.2-.5,2.4-.6,3.8-.4,1.3.1,2.5.6,3.6,1.5,1.1.9,1.9,2,2.4,3.1s.6,2.4.4,3.8c-.1,1.3-.6,2.5-1.5,3.6l3,.5c.5-1.3.8-2.6.8-4.1,0-2.7-1-5-2.9-6.8M832.9,417.7h1.5c0-.1.2-.2.3-.3.3-.1.7,0,.9.4,0,.4,0,.7-.4.9-.4.1-.7,0-.9-.4h-1.4c-.1,0-.2-.1-.3-.3,0-.1.2-.2.3-.3M839.1,418.3c-.1.2-.3.3-.4.4-.4.1-.7,0-.9-.4-.1-.4,0-.7.4-.9.3-.1.7,0,.9.3h1.3c.2,0,.3.2.3.3,0,.2-.1.3-.3.3h-1.3M838.3,417.7c-.1,0-.2.2-.3.3,0,.2.2.3.3.3h2c.2,0,.3-.1.3-.3s-.1-.2-.3-.3h-2M838.7,418.7c.1,0,.3-.2.4-.4h-.7c-.1,0-.2-.1-.3-.3,0-.1.2-.2.3-.3h.7c-.3-.3-.6-.5-.9-.3-.4.2-.6.5-.4.9.2.4.5.6.9.4M835.6,417.8c-.3-.4-.6-.6-.9-.4-.1,0-.2.2-.3.3h.5c.2,0,.3.2.3.3,0,.2-.1.3-.3.3h-.6c.2.4.5.6.9.4.3-.2.5-.5.4-.9M834.4,417.7h-1.5c-.1,0-.2.2-.3.3,0,.2.2.3.3.3h2c.2,0,.3-.1.3-.3s-.1-.2-.3-.3h-.5M790.8,406.3c-1-1.7-2.3-3-4-4-1.6-.9-3.5-1.4-5.6-1.5-2,0-3.8.6-5.5,1.5-1.7,1-3,2.3-4,4-.9,1.6-1.4,3.4-1.5,5.5,0,2,.6,3.9,1.5,5.6,1,1.7,2.3,3,4,3.9,1.6,1,3.4,1.5,5.5,1.6,2.1,0,4-.6,5.6-1.6,1.7-.9,3-2.2,4-3.9.9-1.7,1.4-3.5,1.5-5.6,0-2-.6-3.8-1.5-5.5M790.3,415.9c-.6,1-1.3,2-2.1,2.8-1.8,1.9-4.1,2.9-6.9,2.9-2.7,0-5-1-6.8-2.9-1.9-1.8-2.9-4.1-2.9-6.9,0-2.7,1-5,2.9-6.8,1.8-1.9,4.1-2.9,6.8-2.9,2.8,0,5.1,1,6.9,2.9,1.9,1.8,2.9,4.1,2.9,6.8,0,1.5-.3,2.8-.8,4.1M775.4,415.3l-2.9.5c2.7.8,5.5,1.3,8.3,1.3v-1.2c-1.7,0-3.5-.3-5.4-.6M780.4,411.8c0,.5.3.8.6.9h.2c.6,0,.9-.4.9-.9,0-.5-.4-.8-.9-.8-.5,0-.8.3-.8.8M781.9,419.8c.2-.1.3-.3.3-.5s-.1-.5-.3-.6v.5c0,.3-.3.6-.6.6-.3,0-.5-.3-.5-.6v-.6c-.3.4-.4.8-.1,1.3.2.1.4.2.6.2.2,0,.4,0,.6-.2M781.9,416v1.2c2.9,0,5.7-.4,8.4-1.3l-3-.5c-1.7.3-3.5.6-5.4.6M781.9,413l-.3-.2h-.5c0-.1-.3.2-.3.2v6.1c0,.3.2.6.5.6.3,0,.6-.3.6-.6v-6.1M782.3,403.4c1.3.1,2.4.6,3.6,1.5,1.1.9,1.9,2,2.4,3.1.5,1.2.6,2.4.4,3.8-.1,1.3-.6,2.5-1.5,3.6l3,.5c.5-1.3.8-2.6.8-4.1,0-2.7-1-5-2.9-6.8-1.8-1.9-4.1-2.9-6.9-2.9-2.7,0-5,1-6.8,2.9-1.9,1.8-2.9,4.1-2.9,6.8,0,2.8,1,5.1,2.9,6.9,1.8,1.9,4.1,2.9,6.8,2.9,2.8,0,5.1-1,6.9-2.9.8-.8,1.5-1.8,2.1-2.8-2.7.8-5.5,1.3-8.4,1.3v1.5c.2.1.3.3.3.6s-.1.4-.3.5c-.2.2-.4.3-.6.2-.2,0-.4,0-.6-.2-.3-.4-.2-.8.1-1.3v-1.4c-2.8,0-5.6-.4-8.3-1.3l2.9-.5c-1-1.3-1.6-2.8-1.6-4.5s.5-3.2,1.6-4.6c.9-1.1,2-1.9,3.1-2.4,1.2-.5,2.4-.6,3.8-.4M782.8,417.3c.3-.1.7,0,.9.3h1.3c.2,0,.3.2.3.3,0,.2-.1.3-.3.3h-1.3c-.1.2-.3.3-.4.4-.4.1-.7,0-.9-.4-.1-.4,0-.7.4-.9M777.3,418c0-.1.2-.2.3-.3h1.5c0-.1.2-.2.3-.3.3-.1.7,0,.9.4,0,.4,0,.7-.4.9-.4.1-.7,0-.9-.4h-1.4c-.1,0-.2-.1-.3-.3M779.6,418.3h-.6c.2.4.5.6.9.4.3-.2.5-.5.4-.9-.3-.4-.6-.6-.9-.4-.1,0-.2.2-.3.3h.5c.2,0,.3.2.3.3,0,.2-.1.3-.3.3M777.6,417.7c-.1,0-.2.2-.3.3,0,.2.2.3.3.3h2c.2,0,.3-.1.3-.3s-.1-.2-.3-.3h-2M783.8,418.3h-.7c-.1,0-.2-.1-.3-.3,0-.1.2-.2.3-.3h.7c-.3-.3-.6-.5-.9-.3-.4.2-.6.5-.4.9.2.4.5.6.9.4.1,0,.3-.2.4-.4M783,418.3h2c.2,0,.3-.1.3-.3s-.1-.2-.3-.3h-2c-.1,0-.2.2-.3.3,0,.2.2.3.3.3M785.9,404.8c-1.1-.8-2.3-1.3-3.6-1.5-1.3-.2-2.6,0-3.8.4-1.2.5-2.2,1.3-3.1,2.4-1,1.4-1.6,2.9-1.6,4.6s.5,3.2,1.6,4.5c1.8.3,3.6.6,5.4.6v-2.9l.3-.3c-.3-.1-.6-.5-.6-.9,0-.5.3-.8.8-.8.6,0,.9.3.9.8,0,.6-.4.9-.9.9h-.2.5c0,.1.3.3.3.3v2.9c1.8,0,3.6-.3,5.4-.6.8-1,1.3-2.2,1.5-3.6.2-1.3,0-2.6-.4-3.8-.5-1.2-1.3-2.2-2.4-3.1M826.4,283l.6-.6h-.1c-.2.2-.4.5-.5.6M886.7,300.7c.2.1.5.2.7.2s.6,0,.8-.2c.1,0,.3-.2.4-.3.3-.3.5-.7.5-1.2s-.2-.9-.5-1.3c-.1-.1-.3-.2-.4-.3-.2-.1-.5-.2-.8-.2-.3,0-.5,0-.7.2-.2,0-.3.2-.4.3-.3.3-.5.8-.5,1.3s.2.9.5,1.2c0,.1.2.2.4.3M886.7,300.7l-.3.5-15.6,30.3c.4.4.9.6,1.6.6h30.2c.6,0,1.2-.2,1.6-.7h.1l-16-30.8c-.2.1-.5.2-.8.2s-.5,0-.7-.2M870.8,266.9c-.5.4-.7.9-.7,1.6v61.4c0,.6.2,1.2.7,1.6h0c0,.1,15.6-30.2,15.6-30.2l.3-.5c-.2,0-.3-.2-.4-.3-.3-.3-.5-.7-.5-1.2s.2-.9.5-1.3c0-.1.2-.2.4-.3l-16-30.8M889.8,270.5l-1.7-4.3-.6-1.5-.5,1.5-1.8,4.3h4.6M904.3,266.9h-.1c-.4-.4-.9-.7-1.6-.7h-14.5l1.7,4.3h-4.6l1.8-4.3h-14.6c-.6,0-1.2.2-1.6.7l16,30.8c.2-.1.5-.2.7-.2.3,0,.6,0,.8.2l16-30.8M904.3,266.9c.4.4.6.9.6,1.6v61.4c0,.6-.2,1.2-.6,1.6h-.1c-.4.5-.9.7-1.6.7h-30.2c-.6,0-1.2-.2-1.6-.6h0c-.5-.5-.7-1-.7-1.7v-61.4c0-.6.2-1.2.7-1.6.4-.5.9-.7,1.6-.7h14.6l.5-1.5h-20.4v69.2h39.3v-69.2h-18.9l.6,1.5h14.5c.6,0,1.2.3,1.6.7h.1M904.9,268.5c0-.6-.2-1.2-.6-1.6l-16,30.8c.1,0,.3.2.4.3.3.3.5.8.5,1.3s-.2.9-.5,1.2c-.1.1-.3.2-.4.3l16,30.8c.4-.4.6-.9.6-1.6v-61.4M664.3,369.7v-32.9h-27.6v32.9h27.6M737.5,444h-52.9v80.6h52.9v-4.6h-32.2v-2.3h.1c.3-5,1.8-9.7,4.3-14,2.9-4.8,6.7-8.7,11.5-11.5,4.9-2.9,10.3-4.3,16.3-4.4v-43.8M737.5,444v-13.9h-66.9v94.5h14v-80.6h52.9M684.5,412.3h-13.9v13.9h85.3v-13.9h-71.5M599.8,469.9v-27.7h-44.9v27.7h44.9M603.9,451.4v18.5h60.5v-58.3h-18.5v39.8h-42M596.1,411.9v1.5c-.1,0,.1,0,.1,0,0-.5-.1-1-.1-1.5M628.3,414.5v-2.3l-32.2-1.2v.8c0,.5,0,1,.1,1.5l32.1,1.2M628.3,412.2v2.3l-32.1-1.2c0,3.5.7,6.9,2,10.2,1.5,3.9,3.6,7.5,6.5,10.6l2.8,3-3.7,3.4v10.9h42v-39.8h-11l-3.7,3.5-2.8-2.9M636.7,369.7v1.7h25.9v34.5h-25.9v1.8h27.6v-38h-27.6M636.7,371.4h-.6v34.5h26.6v-34.5h-25.9M664.3,336.8v-41.6h-27.6v41.6h27.6M660.3,300.6c.7.7,1.1,1.6,1.2,2.6,0,1-.5,1.8-1.2,2.5-.7.7-1.6,1.1-2.6,1.2-1,0-1.8-.5-2.5-1.2-.7-.7-1.1-1.5-1.2-2.5,0-1,.5-1.9,1.2-2.6.7-.7,1.5-1.1,2.5-1.2,1,0,1.9.5,2.6,1.2M654,316.1c0-1,.5-1.9,1.2-2.6.7-.7,1.5-1,2.5-1,1,0,1.9.3,2.6,1,.7.7,1.1,1.6,1.2,2.6,0,1-.5,1.9-1.2,2.6-.7.7-1.6,1-2.6,1-1,0-1.8-.3-2.5-1-.7-.7-1.1-1.6-1.2-2.6M654,329c0-1,.5-1.9,1.2-2.6.7-.7,1.5-1,2.5-1,1,0,1.9.3,2.6,1,.7.7,1.1,1.6,1.2,2.6,0,1-.5,1.9-1.2,2.6s-1.6,1-2.6,1-1.8-.3-2.5-1-1.1-1.6-1.2-2.6M644.9,298.6c1.3,0,2.4.5,3.3,1.4.8.8,1.3,1.9,1.4,3.3,0,1.3-.5,2.3-1.4,3.3-.8.8-1.9,1.3-3.3,1.3s-2.4-.4-3.3-1.3c-.8-.9-1.3-2-1.4-3.3,0-1.3.5-2.4,1.4-3.3.8-.9,1.9-1.4,3.3-1.4M641.5,311.2c0,.7-.5,1.1-1.2,1.2-.7,0-1.1-.5-1.2-1.2,0-.6.5-1,1.2-1.2.7.1,1.1.5,1.2,1.2M639.2,316.1c0-.7.5-1.1,1.2-1.2.7,0,1.1.5,1.2,1.2,0,.7-.5,1.1-1.2,1.2-.7,0-1.1-.5-1.2-1.2M645,313.6c-.1.7-.5,1.1-1.2,1.2-.7,0-1.1-.5-1.2-1.2,0-.6.5-1,1.2-1.2.6.1,1,.5,1.2,1.2M644.9,324.3c1.3,0,2.4.5,3.3,1.4.8.8,1.3,1.9,1.4,3.3,0,1.3-.5,2.4-1.4,3.3s-1.9,1.3-3.3,1.4c-1.3,0-2.4-.5-3.3-1.4s-1.3-1.9-1.4-3.3c0-1.3.5-2.4,1.4-3.3.8-.8,1.9-1.3,3.3-1.4M645,318.5c-.1.7-.5,1.1-1.2,1.2-.7,0-1.1-.5-1.2-1.2,0-.7.5-1.1,1.2-1.2.6,0,1,.5,1.2,1.2M641.5,320.9c0,.7-.5,1.1-1.2,1.2-.7,0-1.1-.5-1.2-1.2,0-.7.5-1.1,1.2-1.2.7,0,1.1.5,1.2,1.2M640.4,322c.7,0,1.1-.5,1.2-1.2,0-.7-.5-1.1-1.2-1.2-.7,0-1.1.5-1.2,1.2,0,.7.5,1.1,1.2,1.2M643.8,319.6c.6,0,1-.5,1.2-1.2-.1-.7-.5-1.1-1.2-1.2-.7,0-1.1.5-1.2,1.2,0,.7.5,1.1,1.2,1.2M648.1,325.7c-.8-.8-1.9-1.3-3.3-1.4-1.3,0-2.4.5-3.3,1.4-.8.8-1.3,1.9-1.4,3.3,0,1.3.5,2.4,1.4,3.3s1.9,1.3,3.3,1.4c1.3,0,2.4-.5,3.3-1.4s1.3-1.9,1.4-3.3c0-1.3-.5-2.4-1.4-3.3M643.8,314.8c.6,0,1-.5,1.2-1.2-.1-.6-.5-1-1.2-1.2-.7.1-1.1.5-1.2,1.2,0,.7.5,1.1,1.2,1.2M640.4,314.9c-.7,0-1.1.5-1.2,1.2,0,.7.5,1.1,1.2,1.2.7,0,1.1-.5,1.2-1.2,0-.7-.5-1.1-1.2-1.2M640.4,312.4c.7,0,1.1-.5,1.2-1.2,0-.6-.5-1-1.2-1.2-.7.1-1.1.5-1.2,1.2,0,.7.5,1.1,1.2,1.2M648.1,300c-.8-.9-1.9-1.4-3.3-1.4s-2.4.5-3.3,1.4c-.8.8-1.3,1.9-1.4,3.3,0,1.3.5,2.3,1.4,3.3.8.8,1.9,1.3,3.3,1.3s2.4-.4,3.3-1.3c.8-.9,1.3-2,1.4-3.3,0-1.3-.5-2.4-1.4-3.3M655.2,326.3c-.7.7-1.1,1.6-1.2,2.6,0,1,.5,1.9,1.2,2.6s1.5,1,2.5,1,1.9-.3,2.6-1,1.1-1.6,1.2-2.6c0-1-.5-1.9-1.2-2.6-.7-.7-1.6-1-2.6-1-1,0-1.8.3-2.5,1M655.2,313.4c-.7.7-1.1,1.6-1.2,2.6,0,1,.5,1.9,1.2,2.6.7.7,1.5,1,2.5,1,1,0,1.9-.3,2.6-1,.7-.7,1.1-1.6,1.2-2.6,0-1-.5-1.9-1.2-2.6-.7-.7-1.6-1-2.6-1-1,0-1.8.3-2.5,1M661.5,303.2c0-1-.5-1.9-1.2-2.6-.7-.7-1.6-1.1-2.6-1.2-1,0-1.8.5-2.5,1.2-.7.7-1.1,1.6-1.2,2.6,0,1,.5,1.8,1.2,2.5.7.7,1.5,1.1,2.5,1.2,1,0,1.9-.5,2.6-1.2.7-.7,1.1-1.5,1.2-2.5M723.6,347.6c0,.4,0,.8.2,1.3h32.1v-2.3h-32.3v1M723.6,347.6v1.3h.2c-.1-.5-.2-.9-.2-1.3M728.1,362.9c-2.5-4.2-4-8.9-4.3-14h-.2v-2.3h32.3v-25.4h-71.5v91.1h71.5v-33.5c-6,0-11.4-1.5-16.3-4.3-4.9-2.9-8.7-6.8-11.5-11.7M684.5,321.2h-13.9v91.1h13.9v-91.1M670.6,321.2h85.3v-13.7h-85.3v13.7M723.6,267.5c0,.5,0,.9.2,1.4h32.1v-2.3h-32.3v.9M723.6,268.8h.2c-.1-.5-.2-.9-.2-1.4v1.4M723.8,268.8h-.2v-2.3h32.3v-6.9h-85.3v43.8h85.3v-4.6c-6,0-11.4-1.5-16.3-4.3-1.7-1-3.2-2.1-4.6-3.4-2.8-2.4-5.1-5.1-6.9-8.3-2.5-4.2-4-8.9-4.3-14M705.7,284.7c-1.5,2-3.3,3.5-5.5,4.5-2.2.9-4.4,1.3-6.8,1.2-2.4-.3-4.6-1.2-6.6-2.6-.8-.6-1.7-1-2.7-1.3l-1.8-.6v4.4c0,.5-.1.9-.4,1.2-.2.3-.5.5-.9.5h-.1l-6.9.4c-.5,0-.9-.1-1.3-.4-.3-.3-.6-.6-.7-1v-18.8c.1-.5.4-.8.7-1,.3-.3.8-.4,1.3-.4l6.9.4h.1c.4,0,.7.2.9.5.3.3.4.7.4,1.2v4.4l1.8-.7c1-.2,2-.6,2.7-1.3.4-.3.8-.6,1.3-.8,2.2-1.2,4.5-1.7,6.9-1.7,2.4,0,4.6.7,6.6,1.9s3.7,2.9,4.9,5h.1c.4,1.3.4,2.6-.1,3.9-.2.4-.5.8-.8,1.3M680.9,271h-.1l-6.9-.4c-.5,0-.9.1-1.3.4-.3.2-.6.6-.7,1v18.8c.1.4.4.8.7,1,.3.3.8.4,1.3.4l6.9-.4h.1v-20.9M681.8,271.5c-.2-.3-.5-.5-.9-.5v20.9c.4,0,.7-.2.9-.5.3-.3.4-.7.4-1.2v-17.5c0-.5-.1-.9-.4-1.2M700.2,289.2c2.2-1,4-2.5,5.5-4.5.3-.4.6-.8.8-1.3.5-1.3.5-2.6.1-3.9h-.1c-1.3-2.2-2.9-3.8-4.9-5s-4.2-1.8-6.6-1.9c-2.4,0-4.7.5-6.9,1.7-.4.3-.8.6-1.3.8-.8.6-1.7,1-2.7,1.3l-1.8.7v8.7l1.8.6c1,.3,2,.7,2.7,1.3,2,1.5,4.2,2.3,6.6,2.6,2.4.1,4.7-.2,6.8-1.2M702.7,285.9c-1.7,1.5-3.7,2.4-5.8,2.8-2,.3-4.1.2-6.1-.4-2-.6-3.7-1.8-5.2-3.5-.1-.2-.2-.4-.2-.6v-5.7c0-.2,0-.4.2-.5.9-1,2-1.9,3.1-2.6,2-1,4-1.5,6.2-1.5,2.1,0,4.1.6,5.9,1.7,1.8,1,3.3,2.4,4.4,4.4.3,1,.3,1.9,0,2.7-.7,1.2-1.5,2.2-2.5,3.1M697,288.8c2.1-.4,4-1.4,5.8-2.8,1-.9,1.8-2,2.5-3.1.3-.8.3-1.7,0-2.7-1.1-2-2.6-3.4-4.4-4.4-1.8-1.1-3.8-1.7-5.9-1.7-2.2,0-4.2.4-6.2,1.5-1.2.7-2.2,1.6-3.1,2.6-.1.1-.2.3-.2.5v5.7c0,.2,0,.4.2.6,1.5,1.7,3.3,2.8,5.2,3.5,2,.6,4.1.8,6.1.4M664.3,262.4h-27.6v32.9h27.6v-32.9M738.1,243.9v-1h-.1c0,.3,0,.7.1,1M703.5,242.9v2.3h34.6v-1.3c0-.4,0-.7-.1-1h-34.5M703.5,210.6h-4v-10.4h-28.9v6.9h-6.3v-10.9h35.2V64.3h-189.6v24.8h-3.1v29.1h1.7v41.5h-1.7v-29.1h-1.8v-41.5h-1.5v-.6h-1.2v84.2h1.2v-.6h6.4v30.5H236.7v83h21.9v101.4h-21.9v83h10.4v2.3h157.3v66.9h-6.6v58.8h36.6v20.2h-6.4v-13.9h-13.9v-2.3h-163.6v2.3h-13.9v172.9h191.3v-13.9h6.4v13.9h3.4v6.3h-3.4v9.2l22.8,22.9-.4.3-1.2,1.3h-.1c-2.7,2.2-5.6,4-8.8,5.4-3.6,1.6-7.3,2.4-11.3,2.5,4,0,7.8.8,11.3,2.4,3.2,1.3,6.2,3.1,8.8,5.5h.1c0-.1,1.2,1.2,1.2,1.2l.4.4-22.8,22.8v16.7h-6.4v-3.5h-50.7v77.8h11.5v4.1c0,4.8.9,9.3,2.7,13.4,1.7,4.2,4.2,7.9,7.3,11s6.8,5.6,11,7.3c3.5,1.5,7.2,2.4,11.1,2.7v-34.5h2.3v-4.1h4.6v-19h6.4v58.3h13.7c0-5.8,1.2-11.2,3.4-16.2,2.1-5,5-9.4,8.8-13.2,3.8-3.8,8.2-6.7,13.2-8.8,4.3-1.9,9-2.9,13.9-3.1v-.2h2.3v41.6h13.7v-204h-3.5v-6.3h3.5v-130.3h6.4v3.5h34v6.4h-3.5v6.6l22.8,22.9-.4.3-1.2,1.3h-.1c-2.7,2.2-5.6,4-8.8,5.4-3.9,1.7-8,2.5-12.3,2.5v8.8h-32.9v38.1h39.8c0-5.1.9-9.9,2.8-14.4,1.9-4.5,4.5-8.4,8-11.8,3.4-3.4,7.2-6,11.7-7.9,3.8-1.6,7.8-2.6,12.1-2.8h0c0-.1,1-.1,1-.1h1.3v36.9h4.6v-85.9h-3.5v-6.4h12.1v4.1h2.3v32.1c5.1-.4,9.8-1.9,14.1-4.3,4.8-2.9,8.7-6.7,11.5-11.5,2.9-4.9,4.3-10.3,4.4-16.3v-4.1h34.5v-6.9h6.3c5.1,0,9.9-.9,14.4-2.8,4.5-2,8.4-4.6,11.8-7.9,3.4-3.4,6-7.3,7.9-11.8,1.6-3.8,2.6-7.8,2.8-12.1h-36.8v-2.3h-6.3v-4.6h-69.2v-4h-2.3v-36.8c-4.3.3-8.3,1.2-12,2.8-4.5,1.9-8.4,4.5-11.8,7.9s-6,7.3-8,11.8c-1.9,4.5-2.8,9.3-2.8,14.4v4h-48.4v3.5h-6.4v-166.6h6.4v31.2h44.9v-27.7h44.9v-3.5l4.9-4.6c-2.9-3.1-5-6.7-6.5-10.6-1.3-3.3-1.9-6.7-2-10.2h-.2v-1.5c.1,0,.1-.8.1-.8l32.2,1.2,4.9-4.5h3.5v-1.8h-.6v-34.5h.6v-108.9h27.6v-13.7h6.3v6.9h28.9v-10.4h4v-2.3h34.5c-.3-3.9-1.2-7.6-2.6-11.1-1.7-4.2-4.2-7.9-7.5-11-3.1-3.1-6.8-5.6-10.9-7.5-4.2-1.7-8.7-2.7-13.5-2.7M632.6,371.4h2.3v34.5h-2.3v-34.5M581.3,262.4v118.7h-50.1v-118.7h50.1M581.3,381.1v-118.7h-50.1v118.7h50.1M579.8,353.1c0,.7-.5,1.1-1.2,1.2h-23.1c-.7,0-1.1-.5-1.2-1.2v-35.7c0-.7.5-1.1,1.2-1.2h23.1c.7,0,1.1.5,1.2,1.2v35.7M578.7,354.3c.7,0,1.1-.5,1.2-1.2v-35.7c0-.7-.5-1.1-1.2-1.2h-23.1c-.7,0-1.1.5-1.2,1.2v35.7c0,.7.5,1.1,1.2,1.2h23.1M578,333.3c0,.6-.5,1-1.2,1.2h-16.7c-.7-.1-1.1-.5-1.2-1.2v-13.3c0-.7.5-1.1,1.2-1.2h16.7c.7,0,1.1.5,1.2,1.2v13.3M576.9,336.1c.7,0,1.1.5,1.2,1.2v13.2c0,.7-.5,1.1-1.2,1.2h-16.7c-.7,0-1.1-.5-1.2-1.2v-13.2c0-.5.3-.8.6-1l-2.3-.6v4.2h-2.3c0,.1,0-9.1,0-9.1h2.3v3.7l6.1,1.8h13.4M557.4,335.6l-.8-.3c-.3-.1-.5-.4-.3-.7,0-.3.3-.5.6-.4l.5.2v-3.7h-2.3v9.2h2.3v-4.3M556.2,331.3c.6,0,.9.4.9,1,0,.6-.4.9-.9.9-.6,0-.9-.4-.9-.9,0-.6.3-.9.9-1M557.1,338.2c0,.6-.4.9-.9.9-.6,0-.9-.4-.9-.9,0-.6.3-.9.9-1,.6,0,.9.4.9,1M556.2,339.1c.6,0,.9-.4.9-.9,0-.6-.4-1-.9-1-.6.1-.9.5-.9,1,0,.6.4.9.9.9M557.1,332.3c0-.6-.4-1-.9-1-.6.1-.9.5-.9,1,0,.6.4.9.9.9.6,0,.9-.4.9-.9M556.5,335.3l.8.3,2.3.6,6.5,2c.3,0,.6,0,.7-.4,0-.3,0-.6-.4-.7l-3-.9-6.1-1.8-.5-.2c-.3,0-.6,0-.6.4-.1.3,0,.6.3.7M578,337.3c0-.7-.5-1.1-1.2-1.2h-13.4l3,.9c.3.1.5.4.4.7-.1.3-.4.5-.7.4l-6.5-2c-.3.2-.6.6-.6,1v13.2c0,.7.5,1.1,1.2,1.2h16.7c.7,0,1.1-.5,1.2-1.2v-13.2M570.9,343.9c0,.6-.2,1.2-.7,1.7s-.9.6-1.6.6-1.3-.2-1.7-.6c-.4-.5-.6-1-.6-1.7s.2-1.2.6-1.6c.4-.5,1-.7,1.7-.7.6,0,1.2.3,1.6.7.5.4.7.9.7,1.6M570.2,345.5c.5-.5.7-1,.7-1.7s-.2-1.2-.7-1.6c-.4-.4-.9-.7-1.6-.7-.7,0-1.3.2-1.7.7-.4.4-.6.9-.6,1.6s.2,1.2.6,1.7c.4.4,1,.6,1.7.6s1.2-.2,1.6-.6M576.9,334.4c.7-.1,1.1-.5,1.2-1.2v-13.3c0-.7-.5-1.1-1.2-1.2h-16.7c-.7,0-1.1.5-1.2,1.2v13.3c0,.6.5,1,1.2,1.2h16.7M570.2,325c.5.4.7.9.7,1.6s-.2,1.3-.7,1.7c-.4.4-.9.6-1.6.6s-1.3-.2-1.7-.6-.6-1-.6-1.7.2-1.2.6-1.6c.4-.5,1-.7,1.7-.7.6,0,1.2.3,1.6.7M570.9,326.5c0-.6-.2-1.2-.7-1.6-.4-.4-.9-.7-1.6-.7-.7,0-1.3.2-1.7.7-.4.4-.6.9-.6,1.6s.2,1.3.6,1.7,1,.6,1.7.6,1.2-.2,1.6-.6c.5-.4.7-1,.7-1.7M634.9,371.4h-2.3v34.5h2.3v-34.5M641.9,64.3v-7.6h-83v7.6h83M800.9,259.6h-40.9v6.9h-4v2.3h-32.1c.3,5.1,1.8,9.8,4.3,14,1.8,3.1,4.1,5.9,6.9,8.3,1.4,1.3,2.9,2.4,4.6,3.4,4.8,2.8,10.3,4.2,16.3,4.3h4v47.9h-4v2.3h-32.1c.3,5.1,1.8,9.8,4.3,14,2.8,4.8,6.6,8.7,11.5,11.7,4.8,2.8,10.3,4.2,16.3,4.3h4v20.8h100.3v-65.7h6.8v-69.2h-6.8v-5.1h-24.8c0,3.8-.6,7.5-1.8,11-.3.7-.6,1.4-.8,2.2-.6,1.3-1.2,2.5-1.8,3.7-1.2,2.1-2.6,4.1-4.2,5.9h.1l-.6.6-1,1-24.5-24.5M802.5,258l-1.7,1.6,24.5,24.5,1-1c.2-.2.3-.4.5-.6l-24.4-24.4M850.4,57.9v-1.2h-82.9v7.6h82.9v-6.4M915.6,597.9v-167.7h-174v57.6h-4.1c-5.9,0-11.4,1.5-16.3,4.4-4.8,2.9-8.7,6.7-11.5,11.5-2.5,4.3-4,8.9-4.3,14h32.1v2.3h4.1v13.3h-4.1v2.3h-32.1c.3,5.1,1.8,9.8,4.3,14,2.9,4.8,6.7,8.7,11.5,11.5,4.9,2.9,10.3,4.3,16.3,4.4h4.1v32.3h4.6v-34.6h2.3c3.9.4,7.6,1.3,11.1,2.7,4.1,1.8,7.8,4.3,10.9,7.5,3.2,3.1,5.7,6.8,7.5,11,1.7,4.1,2.7,8.6,2.7,13.4h134.9M915.6,777v-175.2h-134.9v-4c0-4.8-1-9.3-2.7-13.4-1.7-4.2-4.2-7.9-7.5-11-3.1-3.1-6.8-5.6-10.9-7.5-3.5-1.5-7.2-2.3-11.1-2.6v34.5h-2.3v4h-75.6v4.6h36.9v2.3h-.1c-.3,4.3-1.2,8.3-2.8,12.1-1.9,4.4-4.5,8.3-7.9,11.8-3.4,3.3-7.3,5.9-11.8,7.9-4.5,1.9-9.3,2.8-14.4,2.8v133.7h245M915.6,423.8v-89.9h-55.3v89.9h55.3M909.7,369.7c1.2,4.1,1.8,8.5,1.8,13.2s-.6,9.1-1.8,13.2c-1.3,4.1-3,7.7-5.1,10.8-2.1,3.1-4.6,5.5-7.5,7.2-2.9,1.7-5.9,2.7-9.2,2.7-3.3,0-6.3-1-9.1-2.7-2.9-1.7-5.4-4.2-7.6-7.2-2.2-3.1-3.8-6.8-5-10.8-1.2-4.1-1.8-8.5-1.9-13.2,0-4.8.7-9.2,1.9-13.2,1.2-4.1,2.9-7.7,5-10.8,2.2-3.1,4.7-5.6,7.5-7.3,2.9-1.7,5.9-2.6,9.2-2.6s6.4.9,9.2,2.6c2.9,1.7,5.4,4.2,7.5,7.3,2.2,3.1,3.9,6.7,5.1,10.8M911.5,382.9c0-4.8-.6-9.2-1.8-13.2-1.3-4.1-3-7.7-5.1-10.8-2.1-3.1-4.6-5.6-7.5-7.3-2.9-1.7-5.9-2.6-9.2-2.6s-6.4.9-9.2,2.6c-2.8,1.7-5.3,4.2-7.5,7.3-2.2,3.1-3.8,6.7-5,10.8-1.2,4.1-1.8,8.5-1.9,13.2,0,4.7.7,9.1,1.9,13.2,1.2,4.1,2.9,7.7,5,10.8,2.2,3.1,4.7,5.5,7.6,7.2,2.8,1.7,5.8,2.7,9.1,2.7,3.3,0,6.4-1,9.2-2.7,2.9-1.7,5.4-4.2,7.5-7.2,2.2-3.1,3.9-6.8,5.1-10.8,1.2-4.1,1.8-8.5,1.8-13.2M909,371.4c.2.9.4,1.8.6,2.6.1.9.3,1.8.4,2.7v.7c0,.2.1.4.1.6,0,.5.1.9.2,1.4,0,.9,0,1.8.1,2.7,0,.9,0,1.9-.1,2.8v1.3c0,.5-.1.9-.1,1.4-.1,1-.3,1.9-.4,2.7,0,.5-.1.9-.2,1.4,0,.3-.1.5-.2.6,0,.3,0,.5-.1.7-.2.9-.4,1.8-.6,2.6-.3.9-.6,1.8-.8,2.6-.3.8-.7,1.7-1,2.5s-.7,1.6-1.2,2.4c-.3.4-.5.8-.7,1.2-.1.2-.2.4-.3.6,0,0-.1.1-.2.2,0,.1-.1.2-.2.3-.5.8-1,1.5-1.6,2.3-.3.3-.6.6-.9.9-.3.3-.6.7-.8,1-.3.3-.7.7-1,.9-.2.1-.4.3-.5.4,0,.1-.1.2-.2.3-.1,0-.2.1-.3.2-.7.6-1.5,1.1-2.3,1.6-.3.2-.7.4-1.2.6s-.8.4-1.3.5c0,0-.2.1-.3.2,0,0-.2,0-.3.1-.2,0-.4.1-.6.2-.4.1-.8.2-1.3.3-.5.1-1,.2-1.5.3-.4,0-.9.1-1.4.1h-1.4c-.4,0-.9,0-1.4-.1-.4,0-.9-.2-1.4-.3-.4,0-.9-.2-1.6-.4-.1,0-.2-.1-.3-.1-.3,0-.5-.1-.6-.2-.4-.2-.8-.4-1.3-.6-.5-.1-.9-.3-1.3-.6,0,0-.2-.1-.3-.2,0,0-.2-.1-.3-.2-.1,0-.3-.2-.5-.3-.3-.3-.7-.6-1-.8-.3-.3-.7-.6-1-.8-.7-.6-1.3-1.3-1.9-2-.2-.1-.4-.3-.5-.5-.1-.1-.3-.3-.4-.5-.3-.3-.6-.7-.8-1-.6-.8-1-1.5-1.5-2.3-.1-.2-.2-.4-.3-.6-.1-.2-.3-.4-.4-.5-.2-.4-.4-.8-.6-1.3-.4-.8-.8-1.6-1-2.4-.3-.9-.7-1.8-1-2.6-.2-.8-.5-1.7-.7-2.6,0-.4-.1-.8-.2-1.3-.1-.3-.2-.5-.2-.7,0-.2-.1-.4-.1-.6-.2-.9-.4-1.8-.5-2.7,0-.9-.1-1.8-.2-2.7,0-.4-.1-.9-.1-1.4v-4.1c0-.4,0-.9.1-1.4v-.7c0-.2.1-.4.1-.6,0-.9.2-1.8.3-2.7.1-.9.3-1.8.5-2.6.2-.9.5-1.8.7-2.7.2-.8.5-1.7.8-2.5,0-.2.1-.4.2-.6,0-.2.1-.4.2-.6.2-.4.4-.8.6-1.3.3-.8.7-1.7,1.2-2.5.1-.2.2-.4.3-.5.1-.2.2-.4.3-.6.3-.4.5-.8.7-1.2.6-.8,1.1-1.5,1.7-2.2.3-.3.6-.7.8-1,.3-.3.6-.7.9-1,.3-.3.6-.6.9-.8.1-.2.3-.4.5-.5,0,0,.1-.1.2-.2.1,0,.2-.1.3-.2.7-.6,1.4-1.1,2.2-1.6.4-.2.8-.4,1.3-.6.3-.2.7-.4,1.2-.6.1,0,.3,0,.4-.1,0,0,.2-.1.3-.1.2,0,.4-.1.6-.2.4-.1.9-.3,1.4-.4.4,0,.8-.1,1.3-.2.4,0,.9-.1,1.4-.2h1.4c.2,0,.5.1.7.1.2,0,.4.1.6.1.5,0,.9.1,1.4.2.5,0,.9.2,1.4.3.2,0,.4.1.6.2.1,0,.2.1.3.1.1,0,.2.1.3.2.4.1.8.3,1.3.5l1.3.6c.3.3.7.6,1.2.8.2,0,.4.2.5.3.1.1.3.3.5.4.3.3.7.6,1,.9.7.6,1.3,1.2,1.9,1.9.6.7,1.2,1.4,1.8,2.2.1.1.3.3.4.4.1.2.2.4.3.6.3.3.6.7.8,1.2.4.8.8,1.6,1.3,2.4.4.8.8,1.7,1.2,2.5s.6,1.7.8,2.5c.2.4.3.8.4,1.3,0,.3.1.5.2.6,0,.3.1.5.2.7M909.6,374c-.2-.8-.4-1.7-.6-2.6,0-.2-.1-.5-.2-.7,0-.1-.1-.3-.2-.6,0-.4-.2-.8-.4-1.3-.2-.8-.5-1.7-.8-2.5s-.7-1.7-1.2-2.5c-.4-.8-.8-1.6-1.3-2.4-.3-.4-.6-.8-.8-1.2,0-.2-.2-.4-.3-.6-.1-.1-.3-.3-.4-.4-.6-.8-1.2-1.5-1.8-2.2-.6-.7-1.2-1.3-1.9-1.9-.3-.3-.7-.7-1-.9-.2-.1-.4-.3-.5-.4-.1-.1-.3-.2-.5-.3-.4-.3-.8-.6-1.2-.8l-1.3-.6c-.4-.2-.8-.4-1.3-.5,0,0-.2-.1-.3-.2,0,0-.2,0-.3-.1-.2,0-.4-.1-.6-.2-.4-.1-.9-.2-1.4-.3-.4,0-.9-.1-1.4-.2-.2,0-.4,0-.6-.1-.3,0-.5,0-.7-.1h-1.4c-.5,0-.9.1-1.4.2-.4,0-.8.1-1.3.2-.5.1-.9.3-1.4.4-.2,0-.4.1-.6.2-.1,0-.2,0-.3.1-.1,0-.3.1-.4.1-.4.2-.8.4-1.2.6-.4.2-.8.4-1.3.6-.8.5-1.5,1-2.2,1.6,0,0-.2.1-.3.2,0,0-.1.1-.2.2-.2.1-.4.3-.5.5-.3.3-.7.6-.9.8-.3.3-.7.7-.9,1-.3.3-.6.7-.8,1-.6.7-1.1,1.4-1.7,2.2-.2.3-.5.7-.7,1.2,0,.2-.2.4-.3.6,0,.1-.2.3-.3.5-.4.8-.8,1.7-1.2,2.5-.2.4-.4.8-.6,1.3,0,.2-.1.4-.2.6,0,.2-.1.4-.2.6-.3.8-.6,1.7-.8,2.5-.3.9-.5,1.8-.7,2.7-.2.8-.4,1.7-.5,2.6-.1.9-.2,1.8-.3,2.7,0,.2,0,.4-.1.6v.7c0,.5-.1.9-.1,1.4v4.1c0,.5,0,.9.1,1.4,0,.9.1,1.8.2,2.7.1.9.3,1.8.5,2.7,0,.2,0,.4.1.6,0,.2,0,.5.2.7,0,.4.1.8.2,1.3.3.9.5,1.8.7,2.6.3.8.7,1.7,1,2.6.3.8.6,1.6,1,2.4.2.4.4.8.6,1.3.1.1.3.3.4.5,0,.2.2.4.3.6.4.8.9,1.5,1.5,2.3.3.3.6.7.8,1,.1.2.3.4.4.5.1.2.3.4.5.5.6.7,1.2,1.4,1.9,2,.3.3.7.6,1,.8.3.3.7.6,1,.8.2.1.4.2.5.3.1,0,.2.1.3.2.1,0,.2.1.3.2.3.3.8.5,1.3.6.4.2.8.4,1.3.6.1,0,.3.1.6.2,0,0,.2,0,.3.1.6.2,1.2.3,1.6.4.5.1.9.2,1.4.3.5,0,.9.1,1.4.1h1.4c.5,0,.9,0,1.4-.1.5,0,1-.2,1.5-.3.4,0,.8-.2,1.3-.3.2,0,.4-.1.6-.2.1,0,.2-.1.3-.1.1,0,.2-.1.3-.2.4-.1.8-.3,1.3-.5s.8-.4,1.2-.6c.8-.5,1.6-1,2.3-1.6,0,0,.2-.1.3-.2,0,0,.1-.2.2-.3.1-.1.3-.3.5-.4.3-.3.7-.6,1-.9.3-.3.6-.7.8-1,.3-.3.7-.7.9-.9.6-.8,1.1-1.5,1.6-2.3,0,0,.1-.2.2-.3,0,0,.1-.1.2-.2,0-.2.2-.4.3-.6.2-.3.5-.7.7-1.2.4-.8.8-1.6,1.2-2.4s.7-1.7,1-2.5c.3-.8.6-1.7.8-2.6.2-.8.4-1.7.6-2.6,0-.2.1-.5.1-.7,0-.1.1-.3.2-.6,0-.4.1-.9.2-1.4.1-.8.3-1.7.4-2.7,0-.4,0-.9.1-1.4v-1.3c0-1,.1-1.9.1-2.8,0-.9-.1-1.8-.1-2.7,0-.4-.1-.9-.2-1.4,0-.2,0-.4-.1-.6v-.7c-.1-.9-.3-1.8-.4-2.7M870,367.3c1.8-4.6,4.3-8.3,7.5-11.1,3.1-2.7,6.5-4.2,10.4-4.3,3.9.1,7.4,1.6,10.5,4.3,3.1,2.8,5.6,6.5,7.5,11.1,1.8,4.6,2.8,9.8,2.8,15.6,0,5.8-1,11.1-2.8,15.7-1.8,4.6-4.3,8.3-7.5,11.1-3.1,2.7-6.6,4.1-10.5,4.2-3.8,0-7.3-1.5-10.4-4.2-3.1-2.8-5.6-6.5-7.5-11.1-1.8-4.7-2.8-9.9-2.8-15.7,0-5.8,1-11,2.8-15.6M877.5,356.1c-3.1,2.8-5.6,6.5-7.5,11.1-1.8,4.6-2.8,9.8-2.8,15.6,0,5.8,1,11.1,2.8,15.7,1.8,4.6,4.3,8.3,7.5,11.1,3.1,2.7,6.5,4.1,10.4,4.2,3.9,0,7.4-1.5,10.5-4.2,3.1-2.8,5.6-6.5,7.5-11.1,1.8-4.7,2.8-9.9,2.8-15.7,0-5.8-1-11-2.8-15.6-1.8-4.6-4.3-8.3-7.5-11.1-3.1-2.7-6.6-4.2-10.5-4.3-3.8.1-7.3,1.6-10.4,4.3M871.6,368.1c1.7-4.3,4-7.8,6.8-10.5,2.8-2.5,6-3.8,9.6-4,3.5.1,6.6,1.5,9.4,4,2.9,2.7,5.1,6.2,6.8,10.5,1.7,4.4,2.6,9.3,2.6,14.8,0,5.5-.9,10.4-2.6,14.7-1.7,4.4-4,7.9-6.8,10.5-1.7,1.6-3.5,2.8-5.6,3.5-1.3.3-2.6.5-3.9.5s-2.7-.2-4-.6c-2-.6-3.9-1.7-5.6-3.4-2.9-2.6-5.1-6.1-6.8-10.5-1.7-4.3-2.5-9.2-2.5-14.7s.8-10.4,2.5-14.8M888,412.1c1.3,0,2.6-.2,3.9-.5h-7.9c1.3.3,2.6.5,4,.5M878.4,357.6c-2.9,2.7-5.1,6.2-6.8,10.5-1.7,4.4-2.5,9.3-2.5,14.8s.8,10.4,2.5,14.7c1.7,4.4,4,7.9,6.8,10.5,1.7,1.6,3.5,2.7,5.6,3.4h7.9c2-.6,3.9-1.7,5.6-3.4,2.9-2.6,5.1-6.1,6.8-10.5,1.7-4.3,2.6-9.2,2.6-14.7,0-5.5-.9-10.4-2.6-14.8-1.7-4.3-4-7.8-6.8-10.5-2.8-2.5-5.9-3.8-9.4-4-3.6.1-6.8,1.5-9.6,4M875.7,363.6c0,.1-.2.3-.3.5,0,0-.1.2-.2.3,0,0-.1.1-.1.2-.3.4-.5.8-.6,1.2-.2.4-.4.8-.5,1.3v.4c0,0-.1.2-.1.3,0,.2-.1.4-.1.6-1,5.3-1.4,10.6-1.2,16,0,5.3.7,10.6,2,15.8-.2-.3-.4-.6-.5-.9-.1-.3-.3-.7-.5-1-.3-.7-.5-1.4-.7-2-.6-1.4-1-2.8-1.3-4.2-.2-.7-.4-1.4-.5-2.2,0-.2,0-.4-.1-.5v-.5c0-.4-.1-.8-.2-1.2,0-.7-.1-1.4-.2-2.1,0-.8-.1-1.5-.1-2.2s0-1.5.1-2.2c0-.8,0-1.5.1-2.2,0-.4,0-.8.1-1.2,0-.1.1-.3.1-.5s0-.4.1-.5c0-.8.2-1.5.3-2.2.1-.7.3-1.4.5-2.1.2-.8.4-1.5.5-2.1.3-.7.5-1.4.7-2.1.3-.7.6-1.4.9-2,0-.1.1-.3.1-.4,0,0,.2-.2.3-.3,0-.2.2-.5.3-.7.2-.2.4-.4.5-.6.2-.2.4-.4.5-.5M881.6,364.4h.2c0,0,.1-.1.2-.2.1,0,.2,0,.3-.1.3,0,.6-.1.8-.2h.4c.1,0,.2-.1.3-.1h.4c.1,0,.3-.1.4-.1,1-.1,2.1-.2,3.3-.2h1.6c.3,0,.5.1.7.1s.6,0,.8.1.6.1.8.1h.7c.3.2.5.2.7.3,0,0,.1.1.2.1s.1,0,.2.1l.4.2c.2,0,.4.2.6.3.2.1.5.3.7.4,0,0,.1.2.2.3h.2c0,.2.1.2.2.2.1.2.3.4.5.6.1.2.3.4.5.6,0,.2.2.4.3.6,0,.1.1.2.1.3,0,0,.1,0,.1.1,0,.1.1.3.2.4,0,.2.1.5.2.7,0,.1,0,.3.1.4,0,0,.1.2.1.3s0,.3.1.4v.4c0,.6.1,1.1.2,1.6,0,.6.1,1.1.2,1.6,0,.6.1,1.1.1,1.7.2,2.1.3,4.2.2,6.4v3.3c0,.6-.1,1.1-.1,1.6s0,.6-.1.8v.8c-.2,2.1-.5,4.2-.8,6.3l-.6,3.1c0,.1,0,.3-.1.4v.2c0,0,0,.1-.1.2,0,.3,0,.5-.1.7-.2.6-.4,1-.6,1.5-.2.3-.3.5-.4.7-.1.1-.2.2-.2.3,0,0-.1.1-.2.2h-.1c0,.2-.1.3-.2.4,0,0-.1.1-.2.2h-.1c-.1.3-.3.5-.6.6-.1.2-.3.4-.5.6-.1.2-.3.4-.6.5-.1.2-.3.4-.5.5-.2.2-.5.4-.7.5l-.4.2c-.4,0-.7,0-.9-.2-.3-.1-.6-.4-.6-.7-.1-.7-.5-1.2-.9-1.5-.6-.3-1.2-.5-1.8-.3-.9.2-1.5.8-1.8,1.8,0,.1-.1.3-.2.4-.2.3-.5.5-.8.5-.3,0-.7,0-.9-.2-.3-.1-.5-.3-.7-.5-.2-.1-.4-.3-.6-.5-.2-.1-.4-.3-.5-.5-.2-.2-.4-.4-.6-.6,0,0-.1-.1-.2-.2,0,0-.1-.1-.2-.2h0c0-.1-.1-.1-.1-.1l-.3-.3c0,0-.1-.2-.2-.3-.2-.2-.3-.4-.4-.6-.2-.2-.4-.5-.5-.7,0-.2-.2-.5-.3-.7l-.6-2.3c0-.3-.1-.6-.2-.8,0-.2,0-.5-.1-.7,0-.6-.2-1.1-.3-1.6,0-.6-.1-1.1-.2-1.6,0-.3-.1-.6-.1-.8,0-.3-.1-.6-.2-.8-.1-1-.2-2.1-.3-3.1,0-1-.1-2.1-.2-3.3,0-.5,0-1-.1-1.6v-1.6c0-2.2.1-4.3.3-6.5,0-1,.2-2.1.3-3.1,0-.6.1-1.1.2-1.6,0-.1,0-.3.1-.4v-.4c0-.3.1-.5.2-.7,0-.3.2-.5.3-.7v-.3c0,0,.1,0,.1-.1,0-.1.1-.3.2-.4.1-.2.3-.4.4-.6.1-.2.3-.4.5-.6,0-.1.1-.2.2-.3.1-.1.2-.2.3-.3.1-.1.3-.3.6-.5.1-.1.3-.3.6-.4.2-.1.4-.3.6-.4M900.9,364.6c-.3-.4-.5-.8-.7-1.2.1.2.3.4.4.6.2.2.4.4.5.6.2.3.3.5.4.7.1.2.3.5.4.7.3.6.6,1.3.8,2,.3.7.5,1.4.7,2.1.3.6.5,1.3.6,2.1.2.7.4,1.4.5,2.1s.3,1.4.4,2.2v.5c0,.2,0,.4.1.5,0,.3,0,.7.1,1.2,0,.7.1,1.4.2,2.2v2.2c0,.7,0,1.4-.2,2.2,0,.7,0,1.4-.1,2.1,0,.3-.1.7-.2,1.2v.5c0,.1-.1.3-.1.5-.1.8-.3,1.5-.5,2.2-.3,1.4-.7,2.8-1.3,4.2-.2.6-.5,1.3-.8,2-.3.7-.6,1.4-.8,2,1.1-5.2,1.7-10.5,1.9-15.7.1-5.4-.2-10.7-1.2-16.1,0-.4-.1-.9-.2-1.4-.1-.4-.3-.8-.5-1.2,0-.2-.2-.4-.3-.6,0-.1,0-.2-.1-.3,0-.1-.1-.2-.1-.3M886.8,406.5c-.3-.3-.4-.6-.4-1s.1-.8.4-1c.3-.3.7-.5,1.2-.5s.8.2,1,.5c.3.3.4.6.4,1s-.1.8-.4,1c-.3.3-.6.4-1,.4s-.9-.1-1.2-.4M886.4,405.5c0,.4.1.8.4,1,.3.3.7.4,1.2.4s.8-.1,1-.4c.3-.3.4-.6.4-1s-.1-.8-.4-1c-.3-.3-.6-.5-1-.5s-.8.2-1.2.5c-.3.2-.4.6-.4,1M900.2,363.5c.2.3.5.7.7,1.2,0,0,0,.2.1.3,0,0,.1.2.1.3.1.2.2.4.3.6.2.3.4.7.5,1.2,0,.5.1.9.2,1.4.9,5.3,1.3,10.7,1.2,16.1-.1,5.2-.8,10.5-1.9,15.7.3-.6.6-1.3.8-2,.3-.7.6-1.4.8-2,.6-1.4,1-2.8,1.3-4.2.2-.7.4-1.4.5-2.2,0-.2,0-.4.1-.5v-.5c0-.4.1-.8.2-1.2,0-.7.1-1.4.1-2.1.1-.8.2-1.5.2-2.2v-2.2c0-.8-.1-1.5-.2-2.2,0-.4-.1-.8-.1-1.2,0-.1-.1-.3-.1-.5v-.5c-.1-.8-.3-1.5-.4-2.2s-.3-1.4-.5-2.1c-.1-.8-.3-1.5-.6-2.1-.2-.7-.5-1.4-.7-2.1-.3-.7-.6-1.4-.8-2-.1-.3-.3-.5-.4-.7,0-.2-.2-.5-.4-.7-.1-.2-.3-.4-.5-.6-.1-.2-.3-.4-.4-.6M881.8,364.4h-.2c-.2.1-.4.3-.6.4-.3.1-.5.3-.6.4-.3.2-.5.4-.6.5,0,0-.2.2-.3.3,0,0-.1.2-.2.3-.2.2-.4.4-.5.6-.1.2-.3.4-.4.6,0,.1-.1.3-.2.4,0,0,0,.1-.1.1v.3c-.1.2-.2.5-.3.7,0,.2-.1.5-.2.7v.4c0,.1-.1.3-.1.4,0,.5-.1,1-.2,1.6-.1,1-.2,2.1-.3,3.1-.2,2.2-.3,4.3-.3,6.5v1.6c0,.6.1,1.1.1,1.6,0,1.1.1,2.2.2,3.3,0,1,.2,2.1.3,3.1,0,.3.1.6.2.8,0,.3,0,.6.1.8,0,.5.1,1,.2,1.6.1.5.2,1,.3,1.6,0,.3.1.5.1.7,0,.3.1.6.2.8l.6,2.3c.1.3.2.5.3.7.1.3.3.5.5.7,0,.2.2.4.4.6,0,.1.1.2.2.3l.3.3h.1c0,.2.1.2.2.3,0,0,.1.1.2.2.2.2.4.4.6.6.1.2.3.4.5.5.2.2.4.4.6.5.2.2.5.4.7.5.3.2.6.3.9.2.3,0,.6-.2.8-.5,0-.1.1-.3.2-.4.3-1,.9-1.6,1.8-1.8.6-.1,1.2,0,1.8.3.5.3.8.8.9,1.5,0,.3.3.6.6.7.2.2.5.3.9.2l.4-.2c.3-.1.5-.3.7-.5.2-.1.4-.3.5-.5.3-.1.5-.3.6-.5.2-.2.4-.4.5-.6.3-.1.5-.3.6-.5h0c0-.1.1-.1.1-.1,0,0,.1-.1.2-.2,0,0,.1-.2.2-.3h.1c0-.2.1-.2.2-.3,0,0,0-.2.2-.3,0-.2.2-.5.4-.7.2-.4.4-.9.6-1.5,0-.2.1-.5.1-.7,0,0,.1-.1.1-.2v-.2c0-.1.1-.3.1-.4l.6-3.1c.3-2.1.6-4.2.8-6.3v-.8c0-.3.1-.6.1-.8,0-.5,0-1,.1-1.6v-3.3c0-2.2,0-4.3-.2-6.4,0-.6,0-1.1-.1-1.7,0-.5-.1-1-.2-1.6,0-.5-.1-1-.2-1.6v-.4c0-.1-.1-.3-.1-.4s0-.2-.1-.3c0-.1-.1-.3-.1-.4,0-.3-.1-.5-.2-.7,0-.1-.1-.3-.2-.4,0,0,0-.1-.1-.1,0,0,0-.2-.1-.3-.1-.2-.2-.4-.3-.6-.2-.2-.4-.4-.5-.6-.2-.2-.4-.4-.5-.6,0,0-.1,0-.2-.1h-.2c0-.2-.1-.3-.2-.4-.3-.1-.5-.3-.7-.4-.2-.1-.4-.2-.6-.3l-.4-.2c0,0-.1-.1-.2-.1s-.1,0-.2-.1c-.2,0-.5-.1-.7-.2h-.7c-.3-.1-.6-.1-.8-.2s-.6-.1-.8-.1-.5,0-.7-.1h-1.6c-1.1,0-2.2,0-3.3.2-.1,0-.3,0-.4.1h-.4c0,0-.2,0-.3.1h-.4c-.3,0-.6.1-.8.2,0,0-.2.1-.3.1,0,0-.1.1-.2.2M875.4,364.1c.1-.2.2-.4.3-.5-.1.1-.3.3-.5.5-.1.2-.3.4-.5.6-.1.3-.2.5-.3.7-.1.1-.2.2-.3.3,0,.1,0,.3-.1.4-.3.6-.7,1.3-.9,2-.2.7-.5,1.4-.7,2.1-.1.6-.3,1.3-.5,2.1-.2.7-.4,1.4-.5,2.1-.1.7-.2,1.4-.3,2.2,0,.1-.1.3-.1.5s0,.4-.1.5c0,.3-.1.7-.1,1.2,0,.7-.1,1.4-.1,2.2,0,.7-.1,1.4-.1,2.2s0,1.4.1,2.2c0,.7.1,1.4.2,2.1,0,.3.1.7.2,1.2v.5c0,.1.1.3.1.5.1.8.3,1.5.5,2.2.3,1.4.7,2.8,1.3,4.2.2.6.5,1.3.7,2,.2.3.4.7.5,1,.1.3.3.7.5.9-1.3-5.2-1.9-10.5-2-15.8-.2-5.3.2-10.6,1.2-16,0-.2,0-.4.1-.6,0-.1,0-.2.1-.3v-.4c.1-.4.3-.8.5-1.3.1-.3.3-.7.6-1.2,0,0,0-.1.1-.2,0-.1.1-.2.2-.3M915.6,333.9v-69.2h-9.2v69.2h9.2M915.6,255.6V64.3h-212.1v146.3c4.8,0,9.3,1,13.5,2.7,4.1,1.8,7.8,4.3,10.9,7.5,3.2,3.1,5.7,6.8,7.5,11,1.5,3.5,2.3,7.2,2.6,11.1h.1v2.3h-34.6v10.4h97.4v4l1.7-1.6,24.4,24.4c1.6-1.8,3-3.8,4.2-5.9.6-1.2,1.2-2.4,1.8-3.7.3-.8.6-1.5.8-2.2,1.2-3.6,1.8-7.2,1.8-11v-4h80.1Z" fill="none"/>
                <path d="M334.1,1144.1h-3.5v6.3h3.5v-6.3M236.7,1003.4h-6.3v146.9h58.8v-6.3h-52.5v-140.6M434.4,929.1h-6.4v19h-4.6v4.1h4.6v191.9h-52.4v6.3h58.8v-156.7h13.7v-6.3h-13.7v-58.3M648.8,1053.6v27.7h25.9v-4.1h-21.9v-27.6h-18.4v4h14.4M318,783.3h55.3v37.5h4v-13.2h20.2v58.8h-20.2v-13.2h-4v13.2h-4.6v4h4.6v75.5h-3.5v6.4h19v-4.1h-11.5v-77.8h50.7v3.5h6.4v-16.7h-4.1v9.2h-28.8v-83h28.8v9.2h4.1v-9.2h3.4v-6.3h-3.4v-13.9h-6.4v13.9h-191.3v-53h-6.3v237.9h6.3v-9.8h93.9v-6.4h-3.5v-4.5h-4v6.8h-86.5v-77.8h86.5v38.6h4v-38.6h9.2v-4h-99.7v-69.2h41.6v-13.9h39.8M377.3,783.3h20.2v20.2h-20.2v-20.2M236.7,783.3h37.5v9.9h-37.5v-9.9M274.2,783.3h-37.5v9.9h37.5v-9.9M397.5,783.3h-20.2v20.2h20.2v-20.2M236.7,571.3h-6.3v83.5h6.3v-50.7h13.9v-6.3h-3.5v-19.6h-10.4v-6.9M240.8,597.9h-4.1v-13.3h4.1v13.3M236.7,597.9h4.1v-13.3h-4.1v13.3M507.6,654.3h28.8v8.9h4.1v-6.6h3.5v-6.4h-34v-3.5h-6.4v130.3h-3.5v6.3h3.5v204h-13.7v6.3h13.7v59.9h20.2v-4h-13.7v-300.8h37.5v-6.3h-39.8v-38.1h32.9v-8.8h-4.1v4.8h-28.8v-46.1M414.2,597.9v6.3h13.9v13.9h6.4v-20.2h-20.3M236.7,469.9v-20.8h-6.3v53h6.3v-6.9h10.4v-25.3h-10.4M240.8,488.9h-4.1v-12.7h4.1v12.7M236.7,488.9h4.1v-12.7h-4.1v12.7M258.6,312.1h-4v-22.6h-17.9v93.4h17.9v-22.5h4l-18.7-5.4v-37.8l18.7-5.2M236.7,285.5v-20.8h-6.3v143h6.3v-20.8h21.9v-26.4h-4v22.5h-17.9v-93.4h17.9v22.6h4v-26.6h-21.9M311.6,202.5v-6.3h-81.2v27.1h6.3v-20.8h74.9M230.4,57.9v8.4h8.4v-8.4h-8.4M422.3,196.2v6.3h87.6v-30.5h-6.4v24.2h-81.2M558.8,64.3v-6.4h-55.3v31.2h6.4v-24.8h48.9M767.5,64.3v-6.4h-125.6v6.4h57.6v131.9h-35.2v10.9h6.3v-6.9h28.9v10.4h4V64.3h64M915.6,64.3v191.3h-80.1v4h24.8v5.1h55.3v159.1h-155.7v-45h-4v47.3h-85.3v-118.7h85.3v39.1h4v-47.9h-4v4.6h-85.3v-43.8h85.3v6.9h4v-6.9h40.9v-4h-97.4v-10.4h-4v10.4h-28.9v-6.9h-6.3v159h-31.1l-4.9,4.5,2.8,2.9,3.7-3.5h29.5v58.3h-60.5v-29.4l3.7-3.4-2.8-3-4.9,4.6v31.2h-89.8v-31.2h-6.4v166.6h6.4v-3.5h48.4v-4h-8.6v-14.5h-39.8v-109.5h89.8v10.4h4.1v-3.5h27.6v43.8h-27.6v-3.5h-4.1v76.7h-4.6v4h69.2v4.6h6.3v-4.6h75.6v-4h-4.6v-32.3h-4.1v32.3h-133.6v-69.2h133.6v4.6h4.1v-13.3h-4.1v4.6h-66.9v-94.5h66.9v57.6h4.1v-57.6h174v167.7h-134.9v4h134.9v175.2h-245v-133.7h-6.3v6.9h-34.5v4.1h34.5v88.2h-71.5v-88.2h4.6v-4.1h-12.1v6.4h3.5v85.9h-4.6v6.3h80.1v34.5h253.6v293.9h-21.9v4.1h25.9V57.9h-71.5v6.4h65.2M545.6,587.5v10.4h-35.7v-10.4h35.7M664.3,473.9v50.7h-28.8v-50.7h28.8M631.5,473.9v2.9h-27.6v-2.9h27.6M631.5,476.8v-2.9h-27.6v2.9h27.6M664.3,524.6v-50.7h-28.8v50.7h28.8M545.6,597.9v-10.4h-35.7v10.4h35.7Z" fill="#425563"/>
                <path d="M850.4,57.9v6.4h65.2v191.3h-80.1v4h24.8v5.1h55.3v159.1h-155.7v-45h-4v47.3h-85.3v-118.7h85.3v39.1h4v-47.9h-4v4.6h-85.3v-43.8h85.3v6.9h4v-6.9h40.9v-4h-97.4v-10.4h-4v10.4h-28.9v-6.9h-6.3v159h-31.1l-4.9,4.5,2.8,2.9,3.7-3.5h29.5v58.3h-60.5v-29.4l3.7-3.4-2.8-3-4.9,4.6v31.2h-89.8v-31.2h-6.4v166.6h6.4v-3.5h48.4v-4h-8.6v-14.5h-39.8v-109.5h89.8v10.4h4.1v-3.5h27.6v43.8h-27.6v-3.5h-4.1v76.7h-4.6v4h69.2v4.6h6.3v-4.6h75.6v-4h-4.6v-32.3h-4.1v32.3h-133.6v-69.2h133.6v4.6h4.1v-13.3h-4.1v4.6h-66.9v-94.5h66.9v57.6h4.1v-57.6h174v167.7h-134.9v4h134.9v175.2h-245v-133.7h-6.3v6.9h-34.5v4.1h34.5v88.2h-71.5v-88.2h4.6v-4.1h-12.1v6.4h3.5v85.9h-4.6v6.3h80.1v34.5h253.6v293.9h-21.9v4.1h25.9V57.9h-71.5v-1.2h-82.9v7.6h82.9M882.9,414.9c.6.2,1.2.3,1.6.4.5.1.9.2,1.4.3.5,0,.9.1,1.4.1h1.4c.5,0,.9,0,1.4-.1.5,0,1-.2,1.5-.3.4,0,.8-.2,1.3-.3.2,0,.4-.1.6-.2.1,0,.2-.1.3-.1.1,0,.2-.1.3-.2.4-.1.8-.3,1.3-.5s.8-.4,1.2-.6c.8-.5,1.6-1,2.3-1.6,0,0,.2-.1.3-.2,0,0,.1-.2.2-.3.1-.1.3-.3.5-.4.3-.3.7-.6,1-.9.3-.3.6-.7.8-1,.3-.3.7-.7.9-.9.6-.8,1.1-1.5,1.6-2.3,0,0,.1-.2.2-.3,0,0,.1-.1.2-.2,0-.2.2-.4.3-.6.2-.3.5-.7.7-1.2.4-.8.8-1.6,1.2-2.4s.7-1.7,1-2.5c.3-.8.6-1.7.8-2.6.2-.8.4-1.7.6-2.6,0-.2.1-.5.1-.7,0-.1.1-.3.2-.6,0-.4.1-.9.2-1.4.1-.8.3-1.7.4-2.7,0-.4,0-.9.1-1.4v-1.3c0-1,.1-1.9.1-2.8,0-.9-.1-1.8-.1-2.7,0-.4-.1-.9-.2-1.4,0-.2,0-.4-.1-.6v-.7c-.1-.9-.3-1.8-.4-2.7-.2-.8-.4-1.7-.6-2.6,0-.2-.1-.5-.2-.7,0-.1-.1-.3-.2-.6,0-.4-.2-.8-.4-1.3-.2-.8-.5-1.7-.8-2.5s-.7-1.7-1.2-2.5c-.4-.8-.8-1.6-1.3-2.4-.3-.4-.6-.8-.8-1.2,0-.2-.2-.4-.3-.6-.1-.1-.3-.3-.4-.4-.6-.8-1.2-1.5-1.8-2.2-.6-.7-1.2-1.3-1.9-1.9-.3-.3-.7-.7-1-.9-.2-.1-.4-.3-.5-.4-.1-.1-.3-.2-.5-.3-.4-.3-.8-.6-1.2-.8l-1.3-.6c-.4-.2-.8-.4-1.3-.5,0,0-.2-.1-.3-.2,0,0-.2,0-.3-.1-.2,0-.4-.1-.6-.2-.4-.1-.9-.2-1.4-.3-.4,0-.9-.1-1.4-.2-.2,0-.4,0-.6-.1-.3,0-.5,0-.7-.1h-1.4c-.5,0-.9.1-1.4.2-.4,0-.8.1-1.3.2-.5.1-.9.3-1.4.4-.2,0-.4.1-.6.2-.1,0-.2,0-.3.1-.1,0-.3.1-.4.1-.4.2-.8.4-1.2.6-.4.2-.8.4-1.3.6-.8.5-1.5,1-2.2,1.6,0,0-.2.1-.3.2,0,0-.1.1-.2.2-.2.1-.4.3-.5.5-.3.3-.7.6-.9.8-.3.3-.7.7-.9,1-.3.3-.6.7-.8,1-.6.7-1.1,1.4-1.7,2.2-.2.3-.5.7-.7,1.2,0,.2-.2.4-.3.6,0,.1-.2.3-.3.5-.4.8-.8,1.7-1.2,2.5-.2.4-.4.8-.6,1.3,0,.2-.1.4-.2.6,0,.2-.1.4-.2.6-.3.8-.6,1.7-.8,2.5-.3.9-.5,1.8-.7,2.7-.2.8-.4,1.7-.5,2.6-.1.9-.2,1.8-.3,2.7,0,.2,0,.4-.1.6v.7c0,.5-.1.9-.1,1.4v4.1c0,.5,0,.9.1,1.4,0,.9.1,1.8.2,2.7.1.9.3,1.8.5,2.7,0,.2,0,.4.1.6,0,.2,0,.5.2.7,0,.4.1.8.2,1.3.3.9.5,1.8.7,2.6.3.8.7,1.7,1,2.6.3.8.6,1.6,1,2.4.2.4.4.8.6,1.3.1.1.3.3.4.5,0,.2.2.4.3.6.4.8.9,1.5,1.5,2.3.3.3.6.7.8,1,.1.2.3.4.4.5.1.2.3.4.5.5.6.7,1.2,1.4,1.9,2,.3.3.7.6,1,.8.3.3.7.6,1,.8.2.1.4.2.5.3.1,0,.2.1.3.2.1,0,.2.1.3.2.3.3.8.5,1.3.6.4.2.8.4,1.3.6.1,0,.3.1.6.2,0,0,.2,0,.3.1ZM887.9,348.9c-3.3,0-6.4.9-9.2,2.6-2.8,1.7-5.3,4.2-7.5,7.3-2.2,3.1-3.8,6.7-5,10.8-1.2,4.1-1.8,8.5-1.9,13.2,0,4.7.7,9.1,1.9,13.2,1.2,4.1,2.9,7.7,5,10.8,2.2,3.1,4.7,5.5,7.6,7.2,2.8,1.7,5.8,2.7,9.1,2.7,3.3,0,6.4-1,9.2-2.7,2.9-1.7,5.4-4.2,7.5-7.2,2.2-3.1,3.9-6.8,5.1-10.8,1.2-4.1,1.8-8.5,1.8-13.2s-.6-9.2-1.8-13.2c-1.3-4.1-3-7.7-5.1-10.8-2.1-3.1-4.6-5.6-7.5-7.3-2.9-1.7-5.9-2.6-9.2-2.6ZM800.9,259.6l1.7-1.6,24.4,24.4c1.6-1.8,3-3.8,4.2-5.9.6-1.2,1.2-2.4,1.8-3.7.3-.8.6-1.5.8-2.2,1.2-3.6,1.8-7.2,1.8-11M641.9,57.9v6.4h57.6v131.9h-35.2v10.9h6.3v-6.9h28.9v10.4h4V64.3h64M558.8,57.9v-1.2h83v1.2h125.6M703.5,210.6c4.8,0,9.3,1,13.5,2.7,4.1,1.8,7.8,4.3,10.9,7.5,3.2,3.1,5.7,6.8,7.5,11,1.5,3.5,2.3,7.2,2.6,11.1h.1v2.3h-34.6v-2.3h34.5c0,.3,0,.7.1,1.1M664.3,262.4h-27.6v32.9h27.6M755.9,298.7c-6,0-11.4-1.5-16.3-4.3-1.7-1-3.2-2.1-4.6-3.4-2.8-2.4-5.1-5.1-6.9-8.3-2.5-4.2-4-8.9-4.3-14h-.2v-2.3h32.3v2.3h-32.1c-.1-.5-.2-.9-.2-1.4M705.2,282.8c.3-.8.3-1.7,0-2.7-1.1-2-2.6-3.4-4.4-4.4-1.8-1.1-3.8-1.7-5.9-1.7-2.2,0-4.2.4-6.2,1.5-1.2.7-2.2,1.6-3.1,2.6-.1.1-.2.3-.2.5v5.7c0,.2,0,.4.2.6,1.5,1.7,3.3,2.8,5.2,3.5,2,.6,4.1.8,6.1.4,2.1-.4,4-1.4,5.8-2.8,1-.9,1.8-2,2.5-3.1ZM682.3,285.8l1.8.6c1,.3,2,.7,2.7,1.3,2,1.5,4.2,2.3,6.6,2.6,2.4.1,4.7-.2,6.8-1.2,2.2-1,4-2.5,5.5-4.5.3-.4.6-.8.8-1.3.5-1.3.5-2.6.1-3.9h-.1c-1.3-2.2-2.9-3.8-4.9-5s-4.2-1.8-6.6-1.9c-2.4,0-4.7.5-6.9,1.7-.4.3-.8.6-1.3.8-.8.6-1.7,1-2.7,1.3l-1.8.7v13.1c0,.5-.1.9-.4,1.2-.2.3-.5.5-.9.5h-.1l-6.9.4c-.5,0-.9-.1-1.3-.4-.3-.3-.6-.6-.7-1v-18.8c.1-.5.4-.8.7-1,.3-.3.8-.4,1.3-.4l6.9.4h.1c.4,0,.7.2.9.5.3.3.4.7.4,1.2v4.4M661.5,303.2c0-1-.5-1.9-1.2-2.6-.7-.7-1.6-1.1-2.6-1.2-1,0-1.8.5-2.5,1.2-.7.7-1.1,1.6-1.2,2.6,0,1,.5,1.8,1.2,2.5.7.7,1.5,1.1,2.5,1.2,1,0,1.9-.5,2.6-1.2.7-.7,1.1-1.5,1.2-2.5ZM661.5,316.1c0-1-.5-1.9-1.2-2.6-.7-.7-1.6-1-2.6-1-1,0-1.8.3-2.5,1-.7.7-1.1,1.6-1.2,2.6,0,1,.5,1.9,1.2,2.6.7.7,1.5,1,2.5,1,1,0,1.9-.3,2.6-1,.7-.7,1.1-1.6,1.2-2.6ZM680.9,291.9v-20.9M661.5,329c0-1-.5-1.9-1.2-2.6-.7-.7-1.6-1-2.6-1-1,0-1.8.3-2.5,1-.7.7-1.1,1.6-1.2,2.6,0,1,.5,1.9,1.2,2.6s1.5,1,2.5,1,1.9-.3,2.6-1,1.1-1.6,1.2-2.6ZM670.6,321.2h85.3M755.9,378.8c-6,0-11.4-1.5-16.3-4.3-4.9-2.9-8.7-6.8-11.5-11.7-2.5-4.2-4-8.9-4.3-14h-.2v-2.3h32.3v2.3h-32.1c-.1-.5-.2-.9-.2-1.3M649.5,303.2c0-1.3-.5-2.4-1.4-3.3-.8-.9-1.9-1.4-3.3-1.4s-2.4.5-3.3,1.4c-.8.8-1.3,1.9-1.4,3.3,0,1.3.5,2.3,1.4,3.3.8.8,1.9,1.3,3.3,1.3s2.4-.4,3.3-1.3c.8-.9,1.3-2,1.4-3.3ZM641.5,311.2c0-.6-.5-1-1.2-1.2-.7.1-1.1.5-1.2,1.2,0,.7.5,1.1,1.2,1.2.7,0,1.1-.5,1.2-1.2ZM641.5,316.1c0-.7-.5-1.1-1.2-1.2-.7,0-1.1.5-1.2,1.2,0,.7.5,1.1,1.2,1.2.7,0,1.1-.5,1.2-1.2ZM645,313.6c-.1-.6-.5-1-1.2-1.2-.7.1-1.1.5-1.2,1.2,0,.7.5,1.1,1.2,1.2.6,0,1-.5,1.2-1.2ZM560.2,334.4h16.7c.7-.1,1.1-.5,1.2-1.2v-13.3c0-.7-.5-1.1-1.2-1.2h-16.7c-.7,0-1.1.5-1.2,1.2v13.3c0,.6.5,1,1.2,1.2ZM570.9,326.5c0-.6-.2-1.2-.7-1.6-.4-.4-.9-.7-1.6-.7-.7,0-1.3.2-1.7.7-.4.4-.6.9-.6,1.6s.2,1.3.6,1.7,1,.6,1.7.6,1.2-.2,1.6-.6c.5-.4.7-1,.7-1.7ZM559.7,336.2c-.3.2-.6.6-.6,1v13.2c0,.7.5,1.1,1.2,1.2h16.7c.7,0,1.1-.5,1.2-1.2v-13.2c0-.7-.5-1.1-1.2-1.2h-13.4l3,.9c.3.1.5.4.4.7-.1.3-.4.5-.7.4l-6.5-2-2.3-.6v4.2h-2.3c0,.1,0-9.1,0-9.1h2.3v3.7l6.1,1.8M579.8,353.1v-35.7c0-.7-.5-1.1-1.2-1.2h-23.1c-.7,0-1.1.5-1.2,1.2v35.7c0,.7.5,1.1,1.2,1.2h23.1c.7,0,1.1-.5,1.2-1.2ZM570.9,343.9c0-.6-.2-1.2-.7-1.6-.4-.4-.9-.7-1.6-.7-.7,0-1.3.2-1.7.7-.4.4-.6.9-.6,1.6s.2,1.2.6,1.7c.4.4,1,.6,1.7.6s1.2-.2,1.6-.6.7-1,.7-1.7ZM649.5,329c0-1.3-.5-2.4-1.4-3.3-.8-.8-1.9-1.3-3.3-1.4-1.3,0-2.4.5-3.3,1.4-.8.8-1.3,1.9-1.4,3.3,0,1.3.5,2.4,1.4,3.3s1.9,1.3,3.3,1.4c1.3,0,2.4-.5,3.3-1.4s1.3-1.9,1.4-3.3ZM645,318.5c-.1-.7-.5-1.1-1.2-1.2-.7,0-1.1.5-1.2,1.2,0,.7.5,1.1,1.2,1.2.6,0,1-.5,1.2-1.2ZM641.5,320.9c0-.7-.5-1.1-1.2-1.2-.7,0-1.1.5-1.2,1.2,0,.7.5,1.1,1.2,1.2.7,0,1.1-.5,1.2-1.2ZM636.7,407.7v-1.8h-.6v-34.5h.6v-76.1M634.9,371.4h-2.3v34.5h2.3v-34.5ZM628.3,412.2v2.3l-32.1-1.2c0,3.5.7,6.9,2,10.2,1.5,3.9,3.6,7.5,6.5,10.6M596.2,413.3h-.2v-1.5c.1,0,.1-.8.1-.8l32.2,1.2M596.2,413.3c0-.5-.1-1-.1-1.5M645.8,411.7v39.8h-42M755.9,412.3h-85.3M636.7,405.9h25.9v-34.5h-25.9M684.6,524.6v-80.6h52.9M684.5,412.3v-91.1M636.7,369.7h27.6M664.3,336.8h-27.6M904.3,331.5c.4-.4.6-.9.6-1.6v-61.4c0-.6-.2-1.2-.6-1.6l-16,30.8c.1,0,.3.2.4.3.3.3.5.8.5,1.3s-.2.9-.5,1.2c-.1.1-.3.2-.4.3l16,30.8h-.1c-.4.5-.9.7-1.6.7h-30.2c-.6,0-1.2-.2-1.6-.6h0c-.5-.5-.7-1-.7-1.7v-61.4c0-.6.2-1.2.7-1.6.4-.5.9-.7,1.6-.7h14.6l.5-1.5.6,1.5h14.5c.6,0,1.2.3,1.6.7h.1M886.9,266.2l-1.8,4.3h4.6l-1.7-4.3M888.3,300.7c-.2.1-.5.2-.8.2s-.5,0-.7-.2l-.3.5-15.6,30.3M888.3,297.7c-.2-.1-.5-.2-.8-.2-.3,0-.5,0-.7.2-.2,0-.3.2-.4.3-.3.3-.5.8-.5,1.3s.2.9.5,1.2c0,.1.2.2.4.3M886.7,297.7l-16-30.8M826.9,282.4h.1l-.6.6-1,1-24.5-24.5M826.9,282.4c-.2.2-.4.5-.5.6M875.7,363.6c-.1.1-.3.3-.5.5-.1.2-.3.4-.5.6-.1.3-.2.5-.3.7-.1.1-.2.2-.3.3,0,.1,0,.3-.1.4-.3.6-.7,1.3-.9,2-.2.7-.5,1.4-.7,2.1-.1.6-.3,1.3-.5,2.1-.2.7-.4,1.4-.5,2.1-.1.7-.2,1.4-.3,2.2,0,.1-.1.3-.1.5s0,.4-.1.5c0,.3-.1.7-.1,1.2,0,.7-.1,1.4-.1,2.2,0,.7-.1,1.4-.1,2.2s0,1.4.1,2.2c0,.7.1,1.4.2,2.1,0,.3.1.7.2,1.2v.5c0,.1.1.3.1.5.1.8.3,1.5.5,2.2.3,1.4.7,2.8,1.3,4.2.2.6.5,1.3.7,2,.2.3.4.7.5,1,.1.3.3.7.5.9-1.3-5.2-1.9-10.5-2-15.8-.2-5.3.2-10.6,1.2-16,0-.2,0-.4.1-.6,0-.1,0-.2.1-.3v-.4c.1-.4.3-.8.5-1.3.1-.3.3-.7.6-1.2,0,0,0-.1.1-.2,0-.1.1-.2.2-.3.1-.2.2-.4.3-.5ZM878.9,400.3c.1.3.2.5.3.7.1.3.3.5.5.7,0,.2.2.4.4.6,0,.1.1.2.2.3l.3.3h.1c0,.2.1.2.2.3,0,0,.1.1.2.2.2.2.4.4.6.6.1.2.3.4.5.5.2.2.4.4.6.5.2.2.5.4.7.5.3.2.6.3.9.2.3,0,.6-.2.8-.5,0-.1.1-.3.2-.4.3-1,.9-1.6,1.8-1.8.6-.1,1.2,0,1.8.3.5.3.8.8.9,1.5,0,.3.3.6.6.7.2.2.5.3.9.2l.4-.2c.3-.1.5-.3.7-.5.2-.1.4-.3.5-.5.3-.1.5-.3.6-.5.2-.2.4-.4.5-.6.3-.1.5-.3.6-.5h0c0-.1.1-.1.1-.1,0,0,.1-.1.2-.2,0,0,.1-.2.2-.3h.1c0-.2.1-.2.2-.3,0,0,0-.2.2-.3,0-.2.2-.5.4-.7.2-.4.4-.9.6-1.5,0-.2.1-.5.1-.7,0,0,.1-.1.1-.2v-.2c0-.1.1-.3.1-.4l.6-3.1c.3-2.1.6-4.2.8-6.3v-.8c0-.3.1-.6.1-.8,0-.5,0-1,.1-1.6v-3.3c0-2.2,0-4.3-.2-6.4,0-.6,0-1.1-.1-1.7,0-.5-.1-1-.2-1.6,0-.5-.1-1-.2-1.6v-.4c0-.1-.1-.3-.1-.4s0-.2-.1-.3c0-.1-.1-.3-.1-.4,0-.3-.1-.5-.2-.7,0-.1-.1-.3-.2-.4,0,0,0-.1-.1-.1,0,0,0-.2-.1-.3-.1-.2-.2-.4-.3-.6-.2-.2-.4-.4-.5-.6-.2-.2-.4-.4-.5-.6,0,0-.1,0-.2-.1h-.2c0-.2-.1-.3-.2-.4-.3-.1-.5-.3-.7-.4-.2-.1-.4-.2-.6-.3l-.4-.2c0,0-.1-.1-.2-.1s-.1,0-.2-.1c-.2,0-.5-.1-.7-.2h-.7c-.3-.1-.6-.1-.8-.2s-.6-.1-.8-.1-.5,0-.7-.1h-1.6c-1.1,0-2.2,0-3.3.2-.1,0-.3,0-.4.1h-.4c0,0-.2,0-.3.1h-.4c-.3,0-.6.1-.8.2,0,0-.2.1-.3.1,0,0-.1.1-.2.2h-.2c-.2.1-.4.3-.6.4-.3.1-.5.3-.6.4-.3.2-.5.4-.6.5,0,0-.2.2-.3.3,0,0-.1.2-.2.3-.2.2-.4.4-.5.6-.1.2-.3.4-.4.6,0,.1-.1.3-.2.4,0,0,0,.1-.1.1v.3c-.1.2-.2.5-.3.7,0,.2-.1.5-.2.7v.4c0,.1-.1.3-.1.4,0,.5-.1,1-.2,1.6-.1,1-.2,2.1-.3,3.1-.2,2.2-.3,4.3-.3,6.5v1.6c0,.6.1,1.1.1,1.6,0,1.1.1,2.2.2,3.3,0,1,.2,2.1.3,3.1,0,.3.1.6.2.8,0,.3,0,.6.1.8,0,.5.1,1,.2,1.6.1.5.2,1,.3,1.6,0,.3.1.5.1.7,0,.3.1.6.2.8l.6,2.3ZM891.9,411.6c2-.7,3.9-1.9,5.6-3.5,2.9-2.6,5.1-6.1,6.8-10.5,1.7-4.3,2.6-9.2,2.6-14.7,0-5.5-.9-10.4-2.6-14.8-1.7-4.3-4-7.8-6.8-10.5-2.8-2.5-5.9-3.8-9.4-4-3.6.1-6.8,1.5-9.6,4-2.9,2.7-5.1,6.2-6.8,10.5-1.7,4.4-2.5,9.3-2.5,14.8s.8,10.4,2.5,14.7c1.7,4.4,4,7.9,6.8,10.5,1.7,1.6,3.5,2.7,5.6,3.4h7.9c-1.3.5-2.6.6-3.9.6s-2.7-.2-4-.6M887.9,414c3.9,0,7.4-1.5,10.5-4.2,3.1-2.8,5.6-6.5,7.5-11.1,1.8-4.7,2.8-9.9,2.8-15.7,0-5.8-1-11-2.8-15.6-1.8-4.6-4.3-8.3-7.5-11.1-3.1-2.7-6.6-4.2-10.5-4.3-3.8.1-7.3,1.6-10.4,4.3-3.1,2.8-5.6,6.5-7.5,11.1-1.8,4.6-2.8,9.8-2.8,15.6,0,5.8,1,11.1,2.8,15.7,1.8,4.6,4.3,8.3,7.5,11.1,3.1,2.7,6.5,4.1,10.4,4.2ZM901.9,366.2c.3.6.6,1.3.8,2,.3.7.5,1.4.7,2.1.3.6.5,1.3.6,2.1.2.7.4,1.4.5,2.1s.3,1.4.4,2.2v.5c0,.2,0,.4.1.5,0,.3,0,.7.1,1.2,0,.7.1,1.4.2,2.2v2.2c0,.7,0,1.4-.2,2.2,0,.7,0,1.4-.1,2.1,0,.3-.1.7-.2,1.2v.5c0,.1-.1.3-.1.5-.1.8-.3,1.5-.5,2.2-.3,1.4-.7,2.8-1.3,4.2-.2.6-.5,1.3-.8,2-.3.7-.6,1.4-.8,2,1.1-5.2,1.7-10.5,1.9-15.7.1-5.4-.2-10.7-1.2-16.1,0-.4-.1-.9-.2-1.4-.1-.4-.3-.8-.5-1.2,0-.2-.2-.4-.3-.6,0-.1,0-.2-.1-.3,0-.1-.1-.2-.1-.3-.3-.4-.5-.8-.7-1.2.1.2.3.4.4.6.2.2.4.4.5.6.2.3.3.5.4.7.1.2.3.5.4.7ZM867.1,264.7v69.2h39.3v-69.2M867.1,333.9h-6.8v89.9M792.3,411.8c0-2-.6-3.8-1.5-5.5-1-1.7-2.3-3-4-4-1.6-.9-3.5-1.4-5.6-1.5-2,0-3.8.6-5.5,1.5-1.7,1-3,2.3-4,4-.9,1.6-1.4,3.4-1.5,5.5,0,2,.6,3.9,1.5,5.6,1,1.7,2.3,3,4,3.9,1.6,1,3.4,1.5,5.5,1.6,2.1,0,4-.6,5.6-1.6,1.7-.9,3-2.2,4-3.9.9-1.7,1.4-3.5,1.5-5.6ZM787.2,415.3c.8-1,1.3-2.2,1.5-3.6.2-1.3,0-2.6-.4-3.8-.5-1.2-1.3-2.2-2.4-3.1-1.1-.8-2.3-1.3-3.6-1.5-1.3-.2-2.6,0-3.8.4-1.2.5-2.2,1.3-3.1,2.4-1,1.4-1.6,2.9-1.6,4.6s.5,3.2,1.6,4.5c1.8.3,3.6.6,5.4.6v-2.9l.3-.3c-.3-.1-.6-.5-.6-.9,0-.5.3-.8.8-.8.6,0,.9.3.9.8,0,.6-.4.9-.9.9h-.2.5c0,.1.3.3.3.3v2.9c1.8,0,3.6-.3,5.4-.6l3,.5c.5-1.3.8-2.6.8-4.1,0-2.7-1-5-2.9-6.8-1.8-1.9-4.1-2.9-6.9-2.9-2.7,0-5,1-6.8,2.9-1.9,1.8-2.9,4.1-2.9,6.8,0,2.8,1,5.1,2.9,6.9,1.8,1.9,4.1,2.9,6.8,2.9,2.8,0,5.1-1,6.9-2.9.8-.8,1.5-1.8,2.1-2.8-2.7.8-5.5,1.3-8.4,1.3v1.5c.2.1.3.3.3.6s-.1.4-.3.5c-.2.2-.4.3-.6.2-.2,0-.4,0-.6-.2-.3-.4-.2-.8.1-1.3v-1.4c-2.8,0-5.6-.4-8.3-1.3l2.9-.5M781.9,417.1v-1.2M783.8,417.7h-.7c-.1,0-.2.2-.3.3,0,.2.2.3.3.3h2c.2,0,.3-.1.3-.3s-.1-.2-.3-.3h-1.3c-.3-.3-.6-.5-.9-.3-.4.2-.6.5-.4.9.2.4.5.6.9.4.1,0,.3-.2.4-.4M780.7,418.5v.6c0,.3.2.6.5.6.3,0,.6-.3.6-.6v-.5M780.7,416v1.2M779,417.7h-1.5c-.1,0-.2.2-.3.3,0,.2.2.3.3.3h2c.2,0,.3-.1.3-.3s-.1-.2-.3-.3h-.5c0-.1.2-.2.3-.3.3-.1.7,0,.9.4,0,.4,0,.7-.4.9-.4.1-.7,0-.9-.4M889.5,405.5c0-.4-.1-.8-.4-1-.3-.3-.6-.5-1-.5s-.8.2-1.2.5c-.3.2-.4.6-.4,1s.1.8.4,1c.3.3.7.4,1.2.4s.8-.1,1-.4c.3-.3.4-.6.4-1ZM844,411.8c-.1,1.3-.6,2.5-1.5,3.6l3,.5c.5-1.3.8-2.6.8-4.1,0-2.7-1-5-2.9-6.8-1.8-1.9-4.1-2.9-6.8-2.9-2.8,0-5.1,1-6.9,2.9-1.9,1.8-2.9,4.1-2.9,6.8,0,2.8,1,5.1,2.9,6.9,1.8,1.9,4.1,2.9,6.9,2.9,2.7,0,5-1,6.8-2.9.8-.8,1.5-1.8,2.1-2.8-2.7.8-5.5,1.3-8.4,1.3l.3,1.9h0v.2c0,.2-.1.4-.3.5-.2.2-.4.3-.6.2-.2,0-.4,0-.6-.2-.1-.2-.2-.4-.2-.6s.1-.4.3-.6v-1.4c-2.8,0-5.6-.4-8.3-1.3l2.9-.5c-1-1.3-1.6-2.8-1.6-4.5s.5-3.2,1.6-4.6c.9-1.1,2-1.9,3.1-2.4,1.2-.5,2.4-.6,3.8-.4,1.3.1,2.5.6,3.6,1.5,1.1.9,1.9,2,2.4,3.1s.6,2.4.4,3.8ZM847.6,411.8c0-2-.6-3.8-1.5-5.5-1-1.7-2.3-3-4-4-1.6-.9-3.4-1.4-5.5-1.5-2.1,0-4,.6-5.6,1.5-1.7,1-3,2.3-4,4-.9,1.6-1.4,3.4-1.5,5.5,0,2,.6,3.9,1.5,5.6,1,1.7,2.3,3,4,3.9,1.6,1,3.5,1.5,5.6,1.6,2,0,3.8-.6,5.5-1.6,1.7-.9,3-2.2,4-3.9.9-1.7,1.4-3.5,1.5-5.6ZM834.4,417.7h-1.5c-.1,0-.2.2-.3.3,0,.2.2.3.3.3h2c.2,0,.3-.1.3-.3s-.1-.2-.3-.3h-.5c0-.1.2-.2.3-.3.3-.1.7,0,.9.4,0,.4,0,.7-.4.9-.4.1-.7,0-.9-.4M830.7,415.3h.1c1.7.3,3.5.6,5.2.6v-2.9l.3-.2h.5l.3.2v2.9c1.8,0,3.6-.3,5.4-.6M837.5,411.8c0-.5-.3-.8-.8-.8-.6,0-.9.3-.9.8,0,.6.4.9.9.9.5,0,.8-.4.8-.9ZM837.2,416v1.2M836,417.1v-1.2M836,418.5l-.2.8c.2.2.5.3.8.4.3,0,.6-.3.8-.6M835.7,419.1c0,0,.1.1.1.2M839.1,417.7c-.3-.3-.6-.5-.9-.3-.4.2-.6.5-.4.9.2.4.5.6.9.4.1,0,.3-.2.4-.4h-.7c-.1,0-.2-.1-.3-.3,0-.1.2-.2.3-.3h2c.2,0,.3.2.3.3,0,.2-.1.3-.3.3h-1.3M759.9,399.6h100.3M581.3,262.4h-50.1v118.7h50.1v-118.7ZM503.5,57.9v31.2h6.4v-24.8h48.9v-6.4H238.8v8.4h-8.4v129.9h81.2v-1.7h110.6v1.7h81.2v-23.6h-1.2v-84.2h1.2M506.8,118.1v41.5h1.7v-41.5h-1.7v-29.1M505,89v41.5h1.8M422.3,196.2v6.3h87.6v-30.5h-6.4v.6M238.8,57.9h-8.4v8.4M230.4,223.3h6.3v-20.8h74.9v-6.3M230.4,223.3h-1.2v41.5h7.5v-41.5M230.4,196.2v27.1M258.6,312.1v-26.6h-21.9v-20.8M258.6,360.4h-4v22.5h-17.9v-93.4h17.9v22.6h4v74.8h-21.9v83h10.4v2.3h157.3v66.9h-6.6v58.8h36.6v20.2h-6.4v-13.9h-13.9v-2.3h-163.6v2.3h-13.9v172.9h191.3v-13.9h6.4v13.9h3.4v6.3h-3.4v9.2l22.8,22.9-.4.3-1.2,1.3h-.1c-2.7,2.2-5.6,4-8.8,5.4-3.6,1.6-7.3,2.4-11.3,2.5,4,0,7.8.8,11.3,2.4,3.2,1.3,6.2,3.1,8.8,5.5h.1c0-.1,1.2,1.2,1.2,1.2l.4.4-22.8,22.8v16.7h-6.4v-3.5h-50.7v77.8h11.5v4.1c0,4.8.9,9.3,2.7,13.4,1.7,4.2,4.2,7.9,7.3,11s6.8,5.6,11,7.3c3.5,1.5,7.2,2.4,11.1,2.7v-34.5h2.3v-4.1h4.6v-19h6.4v58.3h13.7c0-5.8,1.2-11.2,3.4-16.2,2.1-5,5-9.4,8.8-13.2,3.8-3.8,8.2-6.7,13.2-8.8,4.3-1.9,9-2.9,13.9-3.1v-.2h2.3v41.6h13.7v-204h-3.5v-6.3h3.5v-130.3h6.4v3.5h34v6.4h-3.5v6.6l22.8,22.9-.4.3-1.2,1.3h-.1c-2.7,2.2-5.6,4-8.8,5.4-3.9,1.7-8,2.5-12.3,2.5v8.8h-32.9v38.1h39.8c0-5.1.9-9.9,2.8-14.4,1.9-4.5,4.5-8.4,8-11.8,3.4-3.4,7.2-6,11.7-7.9,3.8-1.6,7.8-2.6,12.1-2.8h0c0-.1,1.1-.1,1.1-.1h1.2v36.9h-2.3v-36.8c.3,0,.7,0,1.1-.1M258.6,360.4l-18.7-5.4v-37.8l18.7-5.2M236.7,407.7h-7.5v41.5h7.5M230.4,264.7v143M557.1,332.3c0-.6-.4-1-.9-1-.6.1-.9.5-.9,1,0,.6.4.9.9.9.6,0,.9-.4.9-.9ZM557.4,334.3l-.5-.2c-.3,0-.6,0-.6.4-.1.3,0,.6.3.7l.8.3M557.1,338.2c0-.6-.4-1-.9-1-.6.1-.9.5-.9,1,0,.6.4.9.9.9.6,0,.9-.4.9-.9ZM599.8,442.2h-44.9v27.7M311.6,202.5h110.6M400.4,472.2v4h4M404.4,535h-4v4.1M400.4,476.2v58.8h-93.9v1.2h93.9M401.6,535v-58.8M403.3,535v-58.8M414.2,597.9v2.8M414.2,599h-55.3v1.7h55.3v1.2M545.6,597.9h-35.7v-10.4h35.7v10.4ZM558.3,597.9c0-5.1.9-9.9,2.8-14.4,2-4.5,4.6-8.4,8-11.8s7.3-6,11.8-7.9c3.7-1.6,7.7-2.6,12-2.8h0c0-.1,1.1-.1,1.1-.1h1.2v36.9h-2.3v-36.8c.4,0,.7,0,1.1-.1M540.5,695.6h-4.1v4.8h-28.8v-46.1h28.8v8.9h4.1l-1.7,1.7,22.8,22.7c.4-.3.8-.7,1.3-1.2M371.9,478h11.5v-1.8h-11.5v1.8h-57.6v-1.8h-1.8v3.5h72.6v-3.5h-1.7M360.3,478v-1.8h-11.5v1.8M360.3,476.2h11.5M337.3,478v-1.8h-11.4v1.8M337.3,476.2h11.5M321.8,472.2v4h4v-4M314.3,476.2h7.6M340.2,539.1h-11.5v58.8h11.5v-58.8h57.6M328.6,539.1h-11.5v58.8h11.5M314.3,535v-55.3M325.8,535v-55.3M337.3,535v-55.3M360.3,535v-55.3M371.9,535v-55.3M383.4,535v-55.3M348.8,535v-55.3M247.1,475.1v1.2h65.4M247.1,475.1v-2.8M321.8,473.4h-74.6v1.3M236.7,488.9v-12.7h4.1v12.7h-4.1ZM247.1,495.2h-10.4v83h10.4v-102M230.4,571.3h-1.7v-69.2h1.7v-53M230.4,502.1h6.3M236.7,571.3h-6.3v83.5h6.3M306.5,535h-4.1v4.1h4.1v-2.9M303.6,601.9v-4h-4v4M317.1,597.9h-13.5M250.6,601.9v-4h-3.5v-19.6M236.7,597.9v-13.3h4.1v13.3h-4.1ZM230.4,654.9h-1.7v69.2h8M299.6,597.9h-49M250.6,600.7h49M250.6,599h49M397.8,597.9h-38.9v1.2M358.9,601.9v-1.2M303.6,599h51.3v-1.2h-14.7M354.9,599v2.8M358.9,597.9h-4M303.6,600.7h51.3M247.1,475.1h74.7M305.7,539.1v58.8M317.1,539.1h-10.6M363.3,539.1v58.8M374.7,539.1v58.8M386.3,539.1v58.8M351.7,539.1v58.8M377.3,783.3h20.2v20.2h-20.2v-20.2ZM230.4,962h6.3v-9.8h93.9v-6.4h-3.5v-4.5h-4v6.8h-86.5v-77.8h86.5v38.6h4v-38.6h9.2v-4h-99.7v-69.2h41.6v-13.9h95.1v37.5h4v-13.2h20.2v58.8h-20.2v-13.2h-4v13.2h-4.6v4h4.6v75.5h-3.5v6.4h19M236.7,793.2v-9.9h37.5v9.9h-37.5ZM307.2,793.5l.4-7c0-.5-.2-.9-.5-1.3-.2-.3-.6-.6-1-.7h-18.8c-.4.1-.8.4-1,.7-.3.3-.4.8-.4,1.3l.4,7h21c-.1.5-.3.8-.6,1-.3.3-.7.4-1.2.4h-4.4l.7,1.8c.2,1,.6,1.9,1.3,2.6.3.4.6.8.8,1.3,1.2,2.2,1.8,4.5,1.8,6.9-.1,2.4-.8,4.6-2,6.6-1.2,2.1-2.9,3.8-5,5-1.3.4-2.6.4-3.9,0-.4-.3-.8-.6-1.3-.8-2-1.5-3.5-3.4-4.5-5.6-.9-2.2-1.3-4.4-1.2-6.7.2-2.4,1.1-4.6,2.6-6.7.6-.8,1-1.6,1.3-2.6l.6-1.8h-4.4c-.5,0-.9-.1-1.2-.4-.3-.2-.5-.6-.5-1M295.4,817.9c.9.3,1.8.3,2.7,0,2-1.1,3.4-2.6,4.4-4.4,1.1-1.8,1.7-3.8,1.7-5.9,0-2.1-.4-4.1-1.5-6.1-.7-1.2-1.6-2.2-2.6-3.1-.1-.2-.3-.3-.5-.3h-5.7c-.3,0-.5.1-.6.3-1.7,1.5-2.8,3.2-3.5,5.1-.6,2-.8,4.1-.4,6.2.4,2,1.4,3.9,2.8,5.7.9,1,2,1.8,3.1,2.5ZM292.3,795h8.7M255.5,862.9h7.8c1.3-.1,2.3-.6,3.1-1.5.9-.8,1.4-1.9,1.5-3.1v-46.1c-.5-2.5-1.5-4.7-3.1-6.6-1.6-1.8-3.6-3.1-5.9-4-2.3-.8-4.8-1-7.3-.6-2.9.6-5.4,1.9-7.3,3.9-2,2-3.4,4.5-4,7.3v46.1c.1,1.3.6,2.3,1.5,3.1.8.9,1.9,1.4,3.1,1.5h8l-.9-2.3h4.6l-.9,2.3-1.4,3.5-1.4-3.5M255.2,856.3c0-.7-.5-1.1-1.2-1.2-.7,0-1.1.5-1.2,1.2,0,.7.5,1.1,1.2,1.2.7,0,1.1-.5,1.2-1.2ZM271.3,866.4v-69.2M373.4,820.8c-4.3,0-8.5.8-12.4,2.5-3.2,1.3-6.2,3.1-8.8,5.4l22.8,22.8-1.6,1.7-22.9-22.9.4-.4c.4-.3.8-.7,1.3-1.2M356.6,795.5c0-2-.5-3.9-1.5-5.6-1-1.7-2.3-3-3.9-3.9-1.7-1-3.5-1.5-5.6-1.6-2,0-3.9.6-5.6,1.6-1.6.9-2.9,2.2-3.9,3.9-1,1.7-1.5,3.5-1.5,5.6s.5,3.8,1.5,5.5c1,1.7,2.3,3,3.9,4,1.7.9,3.5,1.4,5.6,1.5,2,0,3.9-.6,5.6-1.5,1.6-1,2.9-2.3,3.9-4,1-1.6,1.5-3.4,1.5-5.5ZM346.5,788.3h0c0-.3,0-.5-.2-.7-.1-.1-.3-.2-.5-.2-.3,0-.5,0-.6.2-.2.1-.3.3-.3.5h0s0,0,.1,0c.2-.3.5-.5.7-.5.3,0,.6.3.8.7,0,.2,0,.4-.2.5v1.4c2.8,0,5.6.5,8.3,1.3-.5-1-1.2-2-2-2.8-1.8-1.9-4.1-2.9-6.9-2.9-2.7,0-5,1-6.9,2.9-.8.8-1.5,1.8-1.9,2.8,2.7-.8,5.5-1.2,8.3-1.3l-.2-1.5c0-.1-.1-.3-.1-.5M348.1,789c-.2-.4-.5-.6-.9-.4-.4.3-.5.6-.3,1,.2.3.5.5.9.3.1,0,.2-.2.3-.3h-.6c-.2,0-.3-.1-.3-.3,0-.1.1-.2.3-.3h2c.2,0,.3.2.3.3,0,.2-.1.3-.3.3h-1.4M345.1,790.2v4.1l.2.2h.6l.3-.2v-4.1M346.5,795.5c0-.6-.3-.9-.8-.9-.6,0-.8.4-.8.9s.3.8.8.8c.6,0,.8-.3.8-.8ZM354.6,791.4l-2.9.5c1,1.3,1.5,2.8,1.5,4.5s-.5,3.2-1.5,4.6c-.9,1.1-2,1.9-3.3,2.4-1.2.5-2.4.6-3.7.4-1.3-.1-2.6-.6-3.7-1.5-1-.9-1.8-2-2.3-3.1-.5-1.2-.7-2.4-.5-3.8.1-1.3.7-2.5,1.6-3.6l-2.9-.5c-.6,1.2-.9,2.6-.9,4.1,0,2.7,1,5,2.8,6.8,1.9,1.9,4.2,2.9,6.9,2.9,2.8,0,5.1-1,6.9-2.9,1.8-1.8,2.8-4.1,2.8-6.8,0-1.5-.3-2.8-.8-4.1ZM351.6,791.9c-1.8-.3-3.6-.6-5.4-.6M343.3,789h-1.5c-.1,0-.2.2-.2.3,0,.2,0,.3.2.3h2.1c.1,0,.2-.1.2-.3s0-.2-.2-.3h-.6c0-.2.2-.3.3-.4.4-.1.7,0,.9.4.1.4,0,.7-.3.9-.4.1-.7,0-.9-.3M344.9,788.1v.6M345.1,791.3c-1.8,0-3.6.3-5.4.6M336.4,866.4c0-4.3.8-8.5,2.5-12.4,1.3-3.2,3.1-6.2,5.4-8.8l1.6-1.7,22.9,22.9-1.7,1.6-22.8-22.8M383.6,807.6v58.8M318,783.3v24.2h55.3M250.6,948.1v-63.9h72.6M523.7,1049.6h-13.7v-300.8h37.5v-6.3M584.8,748.8v1.2h-38v-1.2M434.4,857.1h-4.1v9.2h-28.8v-83h28.8v9.2h4.1l-1.7,1.7,22.8,22.7c.4-.3.8-.7,1.3-1.2M455.5,832.8c.4.3.8.7,1.3,1.2M434.4,857.1l-1.7-1.6,22.8-22.8M415.3,866.4v-83M521.5,700.4v-46.1M306.5,537.9h93.9M325.8,475.1h74.6M325.8,473.4h74.6M385.1,476.2h15.3M780.7,597.9c0-4.8-1-9.3-2.7-13.4-1.7-4.2-4.2-7.9-7.5-11-3.1-3.1-6.8-5.6-10.9-7.5-3.5-1.5-7.2-2.3-11.1-2.6v34.5h-2.3v-34.6h2.3c-.4,0-.7,0-1,0M737.5,487.8c-5.9,0-11.4,1.5-16.3,4.4-4.8,2.9-8.7,6.7-11.5,11.5-2.5,4.3-4,8.9-4.3,14h32.1v2.3h-32.2v-2.3h.1c0,.4,0,.7-.1,1.1M657.1,586.3l-.6-1.8c-.2-1-.6-2-1.3-2.7-.3-.4-.7-.8-.9-1.3-1.2-2.2-1.7-4.4-1.7-6.8,0-2.4.7-4.7,1.9-6.7,1.2-2,2.9-3.7,5-4.9,1.3-.5,2.6-.5,3.9,0,.5.2.9.5,1.3.7,2,1.5,3.5,3.4,4.5,5.6,1,2.2,1.4,4.4,1.2,6.8-.2,2.4-1,4.6-2.4,6.6h-.1c-.6.8-1,1.6-1.3,2.6l-.7,1.9h4.5c.4,0,.8.1,1.2.4.2.2.4.5.5.9l.4,7c0,.5-.2.9-.5,1.4-.2.3-.5.5-.9.6h-18.8c-.5-.1-.9-.3-1.2-.6-.3-.4-.4-.9-.4-1.4l.4-7c0-.4.2-.7.5-.9.3-.3.7-.4,1.2-.4h13.1M662.8,563.3c-.9-.3-1.8-.3-2.7,0-2,1.1-3.5,2.6-4.5,4.5-1,1.7-1.6,3.7-1.7,5.9,0,2.1.5,4.1,1.6,6.1.7,1.2,1.5,2.2,2.5,3.1.1.1.3.2.6.2h5.7c.2,0,.4,0,.6-.2,1.6-1.5,2.7-3.2,3.4-5.2.7-2,.8-4.1.4-6.1-.3-2.1-1.3-4-2.7-5.7-.9-1-2-1.9-3.1-2.6ZM737.5,533.3v2.3h-32.1c.3,5.1,1.8,9.8,4.3,14,2.9,4.8,6.7,8.7,11.5,11.5,4.9,2.9,10.3,4.3,16.3,4.4M705.4,535.6h-.1v-2.3h32.2M705.4,535.6c0-.3,0-.6-.1-1M664.3,524.6h-28.8v-50.7h28.8v50.7ZM679.8,597.9v-24.2h57.6M603.9,473.9h27.6v2.9h-27.6v-2.9ZM599.9,484.3l1.6,1.6-26,26.1c3.1,2.7,6.5,4.9,10.3,6.4,4.5,1.8,9.2,2.8,14.1,2.8M575.4,512h-.1l-1.2-1.2-.4-.4,26.1-26.1M575.4,512c-.4-.4-.8-.8-1.3-1.2M622.1,530.1h-14.6c-.6,0-1.2.2-1.6.7-.2.2-.3.4-.4.6l16.7,30.2c.2-.1.5-.2.7-.2s.7,0,.9.2l16.1-30.2c-.1-.2-.3-.4-.5-.6-.4-.4-1-.7-1.7-.7h-14.5l1.8,4.4h-4.6l1.7-4.4.6-1.4.5,1.4M605.5,531.4c-.1.3-.2.6-.3.9v61.4c0,.4.1.8.3,1.2l16.7-30.2c-.1-.1-.3-.2-.4-.3-.3-.3-.5-.8-.5-1.3s.2-.9.5-1.2c.1-.1.3-.2.4-.3M640,531.4c0,.3.1.7.1.9v61.4c0,.4,0,.8-.2,1,0,.2-.2.4-.4.5-.4.5-1,.7-1.7.7h-30.2c-.6,0-1.2-.2-1.6-.7-.2-.1-.3-.3-.4-.4M622.2,564.7c.2.1.5.2.7.2.3,0,.7,0,.9-.2,0-.1.2-.2.3-.3.3-.3.5-.8.5-1.3,0-.5-.2-.9-.5-1.2-.1-.1-.2-.2-.3-.3M613,524.6v-43.8M597.5,654.3h2.3v32.1c5.1-.4,9.8-1.9,14.1-4.3,4.8-2.9,8.7-6.7,11.5-11.5,2.9-4.9,4.3-10.3,4.4-16.3M662.4,688.8c.5-.5.9-1,1.4-1.7v-16c-.4-.6-.9-1.2-1.4-1.8-1.2-1.3-2.6-2.3-4.2-3-1.5-.7-3.1-1-4.8-1s-3.3.3-4.9,1c-1.5.8-2.9,1.8-4.1,3h0c-1.2,1.4-2.1,2.8-2.7,4.5-.6,1.7-.9,3.4-.9,5.2s.3,3.5.9,5.2c.6,1.7,1.5,3.1,2.7,4.4h0c1.2,1.4,2.6,2.4,4.2,3.1,1.5.7,3.1,1,4.8,1,1.7,0,3.3-.4,4.8-1,1.6-.8,3-1.8,4.2-3.1ZM655.7,669.4c-1.1-.5-2.3-.7-3.5-.7s-2.3.2-3.5.7c-1.1.6-2.1,1.3-3,2.2-.8,1-1.5,2.2-2,3.4-.5,1.3-.7,2.7-.7,4.1,0,1.3.2,2.7.7,4.1.5,1.2,1.2,2.3,2,3.3h.1c.8,1,1.8,1.7,2.9,2.2,1.1.5,2.3.7,3.5.7s2.3-.2,3.5-.7c1.1-.5,2.1-1.2,3-2.2.8-1,1.5-2.1,2-3.3.5-1.4.7-2.8.7-4.1,0-1.4-.2-2.8-.7-4.1-.5-1.3-1.2-2.4-2-3.4-.9-.9-1.9-1.6-3-2.2ZM722.6,585.7c0-2-.6-3.8-1.6-5.5-.9-1.7-2.2-3-3.9-4-1.7-.9-3.5-1.4-5.6-1.5-2,0-3.9.6-5.6,1.5-1.6,1-2.9,2.3-3.9,4-1,1.6-1.5,3.4-1.5,5.5s.5,3.9,1.5,5.6,2.3,3,3.9,3.9c1.7,1,3.5,1.5,5.6,1.6,2,0,3.9-.6,5.6-1.6,1.7-.9,3-2.2,3.9-3.9,1-1.7,1.5-3.5,1.6-5.6ZM719,585.7c-.1,1.3-.6,2.6-1.5,3.7l2.9.4c.6-1.2.9-2.6.9-4.1-.1-2.7-1.1-5-2.9-6.9-1.8-1.8-4.1-2.8-6.9-2.8-2.7,0-5,1-6.9,2.8-1.8,1.9-2.8,4.2-2.8,6.9,0,2.8,1,5.1,2.8,6.9,1.9,1.8,4.2,2.8,6.9,2.9,2.8-.1,5.1-1.1,6.9-2.9.8-.8,1.5-1.8,2-2.8-2.7.8-5.5,1.3-8.3,1.4v1.4c.1.1.2.3.2.6,0,.2,0,.4-.2.6-.2.1-.4.2-.6.2s-.5-.1-.6-.3c-.1-.2-.2-.4-.2-.5,0-.3.1-.5.3-.7v-1.3c-2.8,0-5.6-.5-8.3-1.4l2.9-.4c-1-1.4-1.6-2.9-1.6-4.6s.5-3.2,1.6-4.6c.8-1,1.9-1.8,3.1-2.3,1.2-.5,2.4-.7,3.8-.5,1.3.1,2.4.6,3.6,1.5,1,.9,1.9,2,2.4,3.3.4,1.2.6,2.4.4,3.7ZM712.4,585.7c0-.5-.3-.8-.8-.8-.5,0-.8.3-.8.8,0,.6.3.9.8.9.6,0,.8-.4.8-.9ZM712.2,591.1v-4.1l-.3-.3h-.6l-.2.3v4.1M714,592.2h1.4c.2,0,.3,0,.3-.2,0-.2-.1-.3-.3-.3h-2c-.2,0-.3.1-.3.3s.1.2.3.2h.6c0,.1-.2.3-.3.4-.4.1-.7,0-.9-.4s-.1-.7.3-.9c.5-.1.8,0,.9.4M712.2,592.5v.7c.1,0,.2-.1.2-.1M709.2,592.2c.2.4.5.6.9.4.3-.2.5-.5.3-.9-.2-.4-.5-.6-.8-.4-.2,0-.3.2-.4.4h.6c.1,0,.2.1.2.3s0,.2-.2.2h-2c-.2,0-.3,0-.3-.2,0-.2.1-.3.3-.3h1.4M710.7,593.1c.2.3.5.5.8.5.3,0,.6-.2.7-.4M712.2,589.9c1.7,0,3.5-.2,5.4-.5M705.7,589.4c1.7.3,3.5.5,5.4.5M670.6,643.3c5.1,0,9.9-.9,14.4-2.8,4.5-2,8.4-4.6,11.8-7.9,3.4-3.4,6-7.3,7.9-11.8,1.6-3.8,2.6-7.8,2.8-12.1h-36.8v-2.3h36.9v2.3h-.1c0-.2,0-.5.1-.8M639.9,594.8l-16-30.1M643,528.7v69.2M651,587.7h21M654.1,734.5h.1l7,.4c.5,0,.9-.1,1.3-.4.3-.3.6-.6.7-1v-18.8c-.2-.5-.4-.9-.7-1.2-.3-.2-.8-.3-1.3-.3l-7.1.3v21c-.3,0-.6-.2-.8-.5-.3-.3-.5-.7-.5-1.2v-4.5l-1.8.7c-1,.2-1.9.6-2.6,1.3h-.1c-.3.3-.8.6-1.3.8-2.2,1.2-4.4,1.8-6.8,1.8-2.4,0-4.6-.7-6.7-1.9-2-1.2-3.7-2.9-4.9-5-.4-1.3-.4-2.6,0-3.9.3-.5.6-.9.8-1.3,1.5-2.1,3.3-3.6,5.5-4.5,2.2-1,4.4-1.4,6.8-1.2s4.6,1,6.6,2.5c.8.6,1.7,1,2.7,1.3l1.8.7v-4.5c0-.4.2-.8.5-1.2.2-.2.5-.4.8-.5M629.9,722.7c-.3.9-.3,1.8,0,2.7,1.1,2,2.6,3.5,4.4,4.5s3.8,1.6,5.9,1.7c2.1,0,4.1-.5,6.1-1.6,1.3-.6,2.3-1.5,3.1-2.5.1-.2.2-.4.2-.6v-5.7c0-.2,0-.4-.2-.6-1.5-1.6-3.2-2.7-5.2-3.4-2-.7-4-.8-6.1-.4-2,.3-3.9,1.3-5.7,2.7-1,.9-1.8,2-2.5,3.1ZM652.8,719.7v8.6M599.8,686.5h0c0,.1-.9.1-.9.1h-1.4v-32.2M599.8,686.5c-.3,0-.6,0-.9.1M664.3,783.3v2.9h248.3v285.8h-14.4v5.1M247.2,472.2v1.2M558.8,64.3h83M674.7,1077.2v-2.3h221.3v2.3h-221.3v4.1h-25.9v-27.7h-14.4v-4h-110.7v4h-20.2v23.1h-69.1v73.7h-58.8v1.8h-41.6v-1.8h-3.5v1.8h-41.5v-1.8h-58.8v-146.9h-1.2v-41.5h1.2v-237.9M674.7,1077.2h-21.9v-27.6h-18.4v-2.3h-110.7v2.3M672.4,1077.2v-5.1h-14.4v-27.7h-20.8v5.2M489.8,987.4h-2.3v-41.4c.4-.1.8-.2,1.2-.2M423.4,952.2h4.6v191.9h-52.4v6.3M421.1,986.7c.6,0,1.2,0,1.8,0h.5v-34.5M490.3,993.7v1.2h-42.6v-1.2h-13.2v59.9h69.1v-59.9h-13.7v-6.3M447.7,993.7h.5v-6.3M434.4,1076.7v-23.1M521.5,1049.6v-5.2h-8.7v-295.6M434.4,1065.1h69.1M323.2,941.3v-2.3h-32.1c0,.3,0,.7-.1,1.1v1.2h32.2ZM323.2,909c-6,0-11.4,1.5-16.3,4.4-4.9,2.9-8.7,6.7-11.5,11.5-2.5,4.3-4,9-4.3,14.1h-.1v1.1M289.2,1150.4v-6.3h-52.5v-140.6h-6.3M236.7,962v41.5M334.1,1150.4v-6.3h-3.5v6.3M334.1,1144.1h41.6M330.6,1144.1h-41.5M915.6,333.9h-9.2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                <path d="M248.2,939.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M248.2,926.8c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M248.5,914.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M248.5,901.9c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M248.5,889.3c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M368.4,951.9c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h1.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-1.5M368.4,945.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h1.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-1.5M339.2,952c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M339,946c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4M355.8,951.9c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4M351.8,952c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M351.8,945.6c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M355.6,946c0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M503.7,1047.1c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M453.1,1047.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4M465.9,1047.1c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M482.5,1047c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4M478.5,1047.1c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M440.5,1047.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-6.1c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h6.1M428,920.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M434.4,920.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M434.2,907.9c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M428.3,908.1c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M428,895.2c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M434.4,895.2c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M698.1,768.4c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M698.5,756c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M698.3,743.1c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M692.1,725.3c0,0,0,.1-.1.2v2.5c0,.6-.1,1.1-.5,1.5-.4.4-.9.6-1.5.5h-2.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h2.5c.8,0,1.4-.2,1.9-.6.5-.5.7-1.1.6-1.9v-2.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M693.9,721.5c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M685.4,731.2c0,0,0,.2.1.2,0,0,.1,0,.2,0h6.6c.7,0,1.1-.3,1.2-1,0,0,0-.1,0-.2,0,0-.1,0-.2-.1,0,0-.1,0-.2.1,0,0,0,0-.1.1,0,.4-.2.7-.6.6h-6.6c0,0-.2,0-.2.1,0,0,0,.1-.1.2M682.8,731.8c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4M677.9,726.3c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v4c.1.7.5,1.1,1.3,1h2.9c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-2.9c-.4,0-.6-.1-.7-.5v-4M676.6,724.9c0,0,0,.1-.1.2v5.2c0,.6.2,1.1.6,1.5h0c.3.3.8.6,1.5.5,0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1-.5,0-.8-.1-1-.4h0c-.3-.3-.5-.6-.5-1v-5.2c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M685.6,723.3c0,0,0,.1,0,.1.2.9.7,1.3,1.4,1.4h.1c.9,0,1.3-.5,1.4-1.4h0c0-.9-.5-1.3-1.4-1.5h-.1c-.7.1-1.2.6-1.4,1.4M687.1,722.5c.5,0,.8.4.8.9,0,.5-.3.8-.8.8-.5,0-.8-.3-.9-.8.2-.5.5-.8.9-.9M680.5,721.7s0,0,0-.1c0-.4-.3-.7-.8-.8,0,0,0,0-.1,0-.5.1-.7.4-.7.9,0,.5.3.8.8.7.5,0,.8-.2.8-.7M680,721.7c0,.2-.1.2-.3.2-.2,0-.3,0-.3-.2,0-.2.1-.3.3-.4.2,0,.3.2.3.4M681.3,717c-.5.5-.7,1.1-.7,1.8v3.8h-2.1c-.5,0-.8.3-.8.8,0,.5.3.8.7.8h1.2c-.5.1-.7.4-.7.9,0,.5.3.8.8.7.5,0,.8-.2.8-.7,0,0,0,0,0-.1,0-.4-.3-.7-.8-.8h.9v3.8c0,.8.3,1.4.7,1.9.5.5,1.1.7,1.9.6h.1c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-.1c-.6,0-1.1-.1-1.5-.5-.4-.4-.6-.9-.6-1.5v-3.8h3.5c0,0,.2,0,.2,0l.2-.3c0,0,0-.1,0-.2v-.5c0,0,0-.2,0-.2l-.2-.3c0,0-.1,0-.2-.1h-3.5v-3.8c0-.5.3-1,.6-1.4h0c.4-.5.9-.7,1.5-.7h.3c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-.3c-.8,0-1.4.3-1.9.8h0M681,723.7s0,0-.1,0h-2.4c-.2,0-.3-.1-.3-.3,0-.2.1-.3.3-.3h5.9v.2c.1,0,.1.3.1.3h-.1c0,.1-3.1.1-3.1.1,0,0-.1,0-.2,0M680,725.2c0,.2-.1.2-.3.2-.2,0-.3,0-.3-.2,0-.2.1-.3.3-.4.2,0,.3.2.3.4M680,714.6c0,0-.1,0-.2-.1h-1.2c-.6,0-1.1.2-1.5.6h0c-.4.4-.6.8-.6,1.4v4.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-4.4c0-.4.2-.7.4-.9h.1c.2-.4.6-.5,1-.5h1.2c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M680,715.8c0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-1.3c-.7.1-1,.5-1.2,1v5.8c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-5.7c0-.3.3-.5.7-.6h1.2c0,0,.2,0,.2,0M693.1,717.5c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M692.5,715.8c0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0M693.8,715.1h-.1c-.3-.4-.7-.6-1.3-.6h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c.5,0,.8.2,1,.4h0c.3.3.5.6.4,1v1c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-1c0-.6-.1-1-.5-1.4M687.5,716.3c0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h2.3c.6.1,1.1.4,1.5.7.4.4.6.8.5,1.4v2.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-2.5c0-.7-.2-1.3-.6-1.8-.5-.5-1.1-.7-1.9-.8h-2.3c0,0-.2,0-.2.1M698.1,730.6c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M698.3,717.9c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M698.5,705.7c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M698.1,692.9c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M698.5,680.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M698.5,667.9c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M698.1,655.1c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M694.5,655.1c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4M673.3,655.1c0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M577.5,656.9c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4M585.4,656.9c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-3.7c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h3.7M581.5,650.5c0,0,.1,0,.2,0h3.7c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-3.7c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M568.9,650.5c0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M682.3,515.9c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M682.3,503.3c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M682.5,491c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M682.1,478.2c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M434.2,882.7c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M428.3,882.9c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M427.8,873.6c0,0,0,.1-.1.2v4.9c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-4.9c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M434.4,873.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2v4.9c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-4.9c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M413.2,858c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M413,845c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M412.8,832.6c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M413,819.9c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M413.2,807.6c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M412.8,794.8c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M462.8,783.5c0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M471.6,776.8c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M450.4,783c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4M450.4,776.7c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4M437.8,783c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4M437.6,777.2c0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M412.8,783.1c0,0,0,.1-.1.2v7.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-7.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M434.2,754.6c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M428.3,754.8c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M428,741.9c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M434.2,742c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M434.2,729.4c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M427.8,729.4c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M427.8,716.8c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M434.4,716.7c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M434.2,704.2c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M428.3,704.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M428,691.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M434.4,691.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M488.2,783c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4M484.2,783.1c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M484,777.2c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4M488,777.2c0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M519.2,691.7c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M323.4,881.7c0,0-.1,0-.2-.1h-2.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h2.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M308.1,881.6c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4M295.5,881.6c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4M282.7,882.1c0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M270.3,881.6c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4M257.7,881.6c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4M248.2,881.6c0,0-.2,0-.2.1,0,0,0,.1-.1.2v3.3c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-3h5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-5.2M347.3,604c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M334.5,604.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4M397.7,604c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M359.9,604c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M372.5,604.2c0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2M376.5,603.8c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4M259,604.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4M309.5,604c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M313.5,603.8c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4M271.8,604c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M284.4,604.2c0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2M288.3,603.8c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4M565.1,656.4c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M543.7,656.9c0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M552.5,650c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M556.3,650.5c0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M519.4,679.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M518.9,666.6c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M503.3,638.2c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M519.2,654c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.3c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.3c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M509.9,638.1c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M509.9,625.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M509.7,613c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M510.1,605.3c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v3.7c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-3.7M503.3,625.6c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M503.5,612.9c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M503.7,605.3c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v3.7c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-3.7M434.2,679c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M427.8,679c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M427.8,666.4c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M434.4,666.3c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M434.2,653.8c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M434.7,641.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M427.8,653.8c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M428.3,641.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M427.8,628.6c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M434.2,628.6c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M434.2,617.8c0,0,0,.1-.1.2v6.6c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-6.6c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M427.8,617.8c0,0,0,.1-.1.2v6.6c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-6.6c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M410.3,604c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M546.4,538.7c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M529.9,545.1c0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M530.3,532.9v3.8c0,.7.3,1.3.7,1.8.5.5,1.1.7,1.9.6h.7c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-.7c-.6,0-1.1-.1-1.5-.5-.4-.4-.6-.8-.6-1.4v-3.8c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2M551.3,537.2c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v7.3h-8.1c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h9.2c1-.1,1.8-.6,2.4-1.4h0c.3-.4.5-.9.6-1.4.3,0,.5-.2.4-.5h0c.4-1.4.6-2.8.7-4.3.2-1.1.3-2.2.3-3.4,0,0,0-.1,0-.2,0,0-.1,0-.2-.1,0,0-.1,0-.2.1,0,0,0,.1-.1.2,0,1.1-.1,2.2-.3,3.3h0c0,.8-.1,1.5-.2,2.2,0-.5,0-1,.1-1.6h0c.1-1.4.1-2.8.1-4.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,1.4,0,2.7-.1,4.1-.1,1.4-.3,2.7-.5,4h0c0,.6-.3,1.1-.5,1.6h0c-.5.6-1.2.9-2,1h-.6v-7.3M550.9,524.4c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M548.5,527.4c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M519.6,535.7c0,0,0,.1-.1.2v8.9c0,0,0,.2.1.2,0,0,.1,0,.2,0h6.1c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-5.9v-8.6c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M516.6,535c0,0,0,.1-.1.2v6.4c0,.5.3.9.7,1l.6.2c0,0,.1,0,.2,0,0,0,.1,0,.1-.1,0,0,0-.1,0-.2,0,0,0-.1-.1-.2l-.6-.2c-.2,0-.4-.2-.4-.5v-6.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M519.6,523.1c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M516.6,522.4c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M516.6,501.3c0,0,0,.1-.1.2v6.7c0,.5.3.8.7.9h.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-.2c-.2,0-.4-.2-.4-.4v-6.7c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M519.6,490.9c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M516.6,488.7c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M526.1,477.8c0,0-.1,0-.2-.1h-6.1c0,0-.2,0-.2.1,0,0,0,.1-.1.2v.3c-.2.1-.4.3-.5.5v.7h-.1l-1.6.5h0c-.5.2-.7.6-.7,1v3.6c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-3.6c0-.2.2-.4.4-.5h-.1l1.6-.5c.4,0,.5-.2.5-.5v7.3c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.7h5.9c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M554.9,520.9c0,0,0,.1-.1.2.2,2.9.2,5.7.2,8.5,0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2,0-2.8,0-5.6-.2-8.5,0,0,0-.2-.1-.2,0,0,0,0-.1-.1,0,0-.2,0-.2.1M556,521.4c0,0,0,.2-.1.2.3,2.8.4,5.6.3,8.4,0,0,0,0,.1.1,0,0,.1.1.2.1,0,0,0,0,.1,0,0,0,.1-.1.1-.2.1-2.8,0-5.6-.3-8.4,0,0,0-.2-.1-.2,0,0,0,0-.1-.1,0,0-.2,0-.2.1M546.4,517.7h-2c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h2c.6,0,1.1.3,1.5.6.4.4.6.9.5,1.5v3.1c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-3.1c0-.8-.2-1.4-.6-1.9-.5-.5-1.1-.7-1.9-.7M545,511.7c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h5.8v8.2c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.2h.6c.8.1,1.5.5,2,1.2h0c.3.5.4.9.5,1.4,0,0,0,.2,0,.2h0c.2.7.3,1.3.3,2,0,.1,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2-.1,0,0,0,0,0-.1,0-.1,0-.3,0-.4,0,.2,0,.4.1.6,0,.1,0,.2.1.2,0,0,.2,0,.2,0,.1,0,.2,0,.2-.1,0,0,0,0,0-.2-.1-.7-.3-1.4-.5-2.1,0-.3-.1-.4-.4-.5-.2-.4-.4-.8-.6-1.3h0c-.6-.9-1.4-1.4-2.4-1.5h-6.9M532,518.4c.3-.1.6-.2.9-.2h7.3c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-7.3c-.5,0-.8.1-1.2.3,0,0-.1,0-.2.1,0,0,0,.1.1.2,0,0,0,.1.1.1,0,0,.1,0,.2,0M530.8,520.3c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M528.4,512c0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c-.4,0-.6.2-.7.5v.7c0,0,0,.1-.1.1h0l-1.6.5h0c-.5.2-.7.6-.7,1v3.8c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-3.8c0-.2.2-.4.4-.5h-.1l1.6-.5h.1c.3,0,.4-.2.4-.5v6.1c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-6.9h8.2c0,0,.2,0,.2,0,0,0,0-.1,0-.2M532.2,512.2c0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M528.4,510.6c0,0-.1,0-.2-.1h-8.2v-6.8c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v7.1c0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M541,510.9c0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2M545,510.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h6.9c1-.1,1.8-.6,2.4-1.4h0c.3-.5.5-.9.6-1.4.3-.1.5-.3.4-.5h0c.4-1.4.6-2.8.7-4.3.2-1,.3-2.1.3-3.1,0,0,0-.1,0-.2,0,0-.1,0-.2-.1,0,0-.1,0-.2.1,0,0,0,.1-.1.2,0,1-.1,2-.3,3h0c0,1-.2,1.9-.4,2.8.1-.8.2-1.5.2-2.3.1-1.3.1-2.7.1-4.1,0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,1.4,0,2.8-.1,4.1,0,1.3-.2,2.6-.4,4h0c0,.6-.3,1.1-.5,1.6h0c-.5.6-1.2.9-2,1h-.6v-8.1c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.1h-5.8M538.5,478.2c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4M550.9,489.7c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M556,487.4c0,0,0,.1-.1.2.3,2.9.4,5.7.3,8.5,0,0,0,0,.1.1,0,0,.1.1.2.1,0,0,0,0,.1,0,0,0,.1-.1.1-.2.1-2.8,0-5.6-.3-8.5,0,0,0-.2-.1-.2,0,0,0,0-.1-.1,0,0-.2,0-.2.1M555.5,487.2c0,0,0-.2-.1-.2,0,0,0,0-.1-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2.1,2.8.1,5.6.1,8.4,0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2,0-2.8,0-5.6-.1-8.4M551.3,478.2h.6c.8.1,1.5.5,2,1.2.3.4.4.9.5,1.5h0c.2.8.3,1.5.3,2.1,0,.1,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2-.1,0,0,0,0,0-.1,0,0,0-.1,0-.2,0,.3.1.5.1.6,0,.1,0,.2.1.2,0,0,.2,0,.2,0,.1,0,.2,0,.2-.1,0,0,0,0,0-.2-.1-.7-.3-1.5-.5-2.4h0c0-.2-.2-.3-.4-.3-.2-.6-.4-1-.6-1.5-.6-.8-1.4-1.3-2.4-1.4h-9.2c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.1v7.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-7.5M552.7,458.1c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M542.5,468.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4M529.9,468.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4M528.2,435.5c0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M536.8,436.2c0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1M540.4,430.2c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4M552.7,445.5c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M549.4,435.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4M553.2,436.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-3.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h3v4.8c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-5M553.2,429.8c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.1v4.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-4.6c0,0,0-.2,0-.2M517.1,469c0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M511.6,461.4c0,0,0,.1-.1.2v7.1c0,0,0,.2.1.2,0,0,.1,0,.2,0h1.3c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-1v-6.8c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M511.6,448.8c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M524.1,436.4c0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2M511.6,436.2c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.2h8.2c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1M515.5,435.3c0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2M515.4,429.8c0,0-.1,0-.2-.1h-3.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2v5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-4.8h3.1c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M519.2,430.2c0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M547.6,381.1v-5.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v5.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2M553.5,372.5c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M553.9,360.1c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M553.7,347.2c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M547.2,363c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M547.2,350.4c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M547.6,338c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M553.9,334.9c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M547.6,325.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M553.5,322.1c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M554.8,314c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4M553.7,309.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M554.6,304.4c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M553.7,296.8c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M555,292c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M547.4,312.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M547.2,300c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M554.8,286.3c0,0-.2,0-.2.1,0,0,0,.1-.1.2v1.2c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-.9h7c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-7.2M553.7,284.2c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M547.6,287.6c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M553.7,271.7c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M547.6,275c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M238.6,191.8c0,0,0,.1-.1.2v4.2c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-4.2c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M238.6,179.2c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M239,166.8c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M238.6,154c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M239,141.6c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M238.6,128.8c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M239,116.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M239,103.8c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M239,91.2c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M238.6,78.4c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M238.6,66c0,0,0,.1-.1.2v8.2c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-.2c0,0-.2,0-.2.1M251.8,66c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M264.2,66.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4M277,66c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M289.4,66.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4M293.4,66.5c0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M314.8,66c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M327.2,66.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4M340,66c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M352.4,66.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4M356.4,66.5c0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M377.8,66c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M390.2,66.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4M553.5,262.2c0,0,0,.1-.1.2v5.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-5.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M547.2,262.2c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M403,66c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M415.3,66.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4M428.2,66c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M431.9,66.5c0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M453.1,66.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4M465.9,66c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M478.3,66.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4M491.1,66c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M494.9,66.5c0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M747.3,414.8c0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M754.8,318.7c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M699.9,441.9c0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M721.1,441.9c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4M725.1,441.9c0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M682.5,465.8c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M682.1,453c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M687.3,441.9c0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M682.5,441.9h.8c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-1c0,0-.2,0-.2.1,0,0,0,.1-.1.2v7.3c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-7.1M684.3,414.6c0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2M682.2,403.6c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M671.8,414.8c0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M682.4,391.3c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M682.2,378.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M734.7,414.8c0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M722,414.6c0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2M709.8,414.3c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4M697,414.8c0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M650.2,360.9c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M650.7,348.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M650.7,335.9c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M647.9,324c0,0,0,.1-.1.2v6.7c0,0,0,.2.1.2l1.3,1.3c0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2l-1.3-1.3v-6.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M582.2,308.1c0,0,0,.1-.1.2v5.7h-2.1c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h2.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2v-6c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M576,314.1c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M582.4,295.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M578.7,286.5c0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h3.3v4.6c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-4.8c0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-3.6c0,0-.2,0-.2.1M574.9,286.5c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M648.4,311.6c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M647.9,300.9s0,0-.1.1v6.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-6.2l1.3-1.3c0,0,.1-.1.1-.2,0,0,0-.1,0-.2,0,0-.1,0-.2-.1,0,0-.1,0-.2.1l-1.4,1.4M650.2,287.4c0,0,0,.1-.1.2v8.4c.1,0,.2.2.2.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2-.1-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M650.7,275c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M716.8,319.1c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4M733.4,319.1c0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M729.6,318.9c0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2M682.4,366.1c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M681.9,353.3c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M682.4,340.9c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M681.9,328.1c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M679.2,318.7c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M681.9,321c0,0,0,.1-.1.2v2.9c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-2.9c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M691.8,318.9c0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2M695.6,319.1c0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M664.5,240.3c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M670.8,240.3c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M670.4,227.5c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M664.3,227.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M664.5,215.1c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M670.4,214.9c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M670.4,206.9c0,0,0,.1-.1.2v3.8c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-3.8c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M664.3,206.8c0,0-.2,0-.2.1,0,0,0,.1-.1.2v3.8c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-3.8c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M650.2,262.2c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1Z" fill="#425563" opacity=".4"/>
                <path d="M524.5,575c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M524.1,562.2c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M524.5,549.8c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M524.1,537c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M524.5,524.6c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M524.3,511.7c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M524.1,499.2c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M524.3,486.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M524.1,474c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1Z" fill="#425563" opacity=".4"/>
                <path d="M549.4,456.3c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4M562.2,455.9c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M574.6,456.3c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4M587.4,455.9c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M599.8,456.3c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4M511.8,456.1c0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-1.7c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h1.7c0,0,.2,0,.2,0,0,0,0-.1,0-.2M524.4,455.9c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M537,455.9c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2Z" fill="#8a7e70"/>
                <path d="M684.3,768c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M684.3,755.4c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M684.7,743c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M684.3,730.2c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M684.7,717.8c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M684.7,705.2c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M684.7,692.6c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M684.3,679.8c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M684.7,667.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4M684.3,654.6c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1Z" fill="#425563" opacity=".4"/>
                <path d="M676,686.2c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-3.5v-4.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v4.8c0,0,0,.2.1.2,0,0,.1,0,.2,0h3.7M688.8,686c0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2M699.5,684.4c0,0,0,.1-.1.2v1.2h-6.6c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h6.9c0,0,.2,0,.2,0,0,0,0-.1,0-.2v-1.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M699.5,671.8c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M699.5,659.2c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M691.1,658.5c0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M687.3,658.1c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M672.1,668.4c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M672.3,658c0,0-.2,0-.2.1,0,0,0,.1-.1.2v6.1c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-5.9h2c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-2.2Z" fill="#425563" opacity=".4"/>
                <g id="windows">
                  <path d="M923.7,479.7h-8.1v69.2h8.1v-69.2M915.7,210.6v34.6h7.5v-34.6h-7.5M923.1,109.2v-34.5h-7.5v34.5h7.5Z" fill="#fff"/>
                  <path d="M923.1,109.2h-7.5v-34.5h7.5v34.5ZM915.7,210.6h7.5v34.6h-7.5v-34.6ZM923.7,548.9h-8.1v-69.2h8.1v69.2Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                  <path d="M923.7,406.5h-8.1v-55.3h8.1v55.3Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                  <path d="M923.8,726.2v-69.2h-8.1v69.2h8.1Z" fill="#fff"/>
                  <path d="M923.8,726.2h-8.1v-69.2h8.1v69.2Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                  <path d="M923.7,406.5v-55.3h-8.1v55.3h8.1Z" fill="#fff"/>
                </g>
                <path d="M346.8,568.2h6.6v-2.6l-6.6,2.6,6.6,2.6v-2.6h44.1" fill="#425563" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
              </g>
            </g>
            <g id="Furniture">
              <path d="M666.4,134.3c-.1-1.3-.7-2.5-1.7-3.4-1-.9-2.3-1.3-3.6-1.2-1.3.1-2.5.7-3.4,1.7-.8,1-1.2,2.2-1.2,3.4,0,0-.2,0-.3,0-.5,0-.9.3-1.2.6-.2.2-.3.5-.4.8-.4-.5-.8-1-1.3-1.4-1.1-.9-2.3-1.5-3.6-1.9l2.4-.2c.8,0,1.6-.4,2.1-1.1.5-.6.8-1.4.7-2.2,0-.8-.4-1.6-1.1-2.1-.6-.5-1.4-.8-2.2-.7l-15,1.2c-.5,0-1,.2-1.4.5-3.3-5.6-8-10.4-13.7-13.8.1,0,.3-.2.4-.3.6-.5,1-1.3,1.1-2.1l1.3-15c.1-1.7-1.1-3.2-2.8-3.3-1.7-.1-3.2,1.1-3.3,2.8l-.2,2.6c-.4-2.1-1.7-4-3.4-5.3.3,0,.6-.2.8-.4.4-.3.6-.7.6-1.2,0,0,0-.2,0-.3,1.1,0,2.3-.4,3.2-1.2,1-.9,1.6-2.1,1.8-3.4.1-1.3-.3-2.6-1.2-3.6-.9-1-2.1-1.6-3.4-1.8l-17.4-1.5c-1.3-.1-2.6.3-3.6,1.2-1,.9-1.6,2.1-1.8,3.4-.1,1.3.3,2.6,1.2,3.6.8,1,2,1.6,3.2,1.7,0,0,0,.2,0,.3,0,.8.4,1.5,1.1,1.8-.6.3-1.1.7-1.6,1.1-1.1.9-1.9,2-2.4,3.2l.2-2.4c0-.8-.2-1.6-.7-2.2-.5-.6-1.3-1-2.1-1.1-.8,0-1.6.2-2.2.7-.6.5-1,1.3-1.1,2.1l-1.3,15c0,.8.2,1.6.7,2.2-3.1,1.1-6.1,2.6-8.8,4.5,0,0-.1,0-.2-.1l-13-7.6c-.7-.4-1.5-.5-2.3-.3-.8.2-1.5.7-1.9,1.4-.9,1.5-.4,3.4,1.1,4.2l2.3,1.3c-1.4-.4-2.9-.3-4.4,0-.6.2-1.2.4-1.8.7.2-.7-.1-1.5-.8-1.9,0,0-.2,0-.3-.1,1.1-2.3.2-5.1-2-6.4-1.1-.7-2.5-.9-3.8-.5-1.3.3-2.4,1.2-3.1,2.3l-8.8,15c-.7,1.1-.9,2.5-.5,3.8.3,1.3,1.2,2.4,2.3,3,.8.4,1.6.7,2.5.7s.9,0,1.3-.2c1.2-.3,2.3-1.1,2.9-2.2,0,0,.1.1.2.2.3.2.6.2.9.2s.3,0,.4,0c.3,0,.6-.2.8-.4,0,.6.1,1.3.3,1.9.3,1.3,1,2.5,1.9,3.6l-2.1-1.2c-.7-.4-1.5-.5-2.3-.3-.8.2-1.5.7-1.9,1.4-.4.7-.5,1.5-.3,2.3.2.8.7,1.5,1.4,1.9l13,7.6c.3.2.6.3.9.3-.2,3.9.2,7.7,1.1,11.3-.4.1-.8.3-1.2.6l-11.3,10c-.6.5-1,1.3-1,2.1,0,.8.2,1.6.8,2.2.6.7,1.4,1,2.3,1s1.5-.3,2-.8l2-1.7c-.8,1.3-1.2,2.7-1.3,4.2,0,.7,0,1.3,0,1.9-.2-.2-.5-.3-.8-.3-.5,0-.9.1-1.3.4,0,0-.1.1-.2.2-1.9-1.7-4.8-1.8-6.7,0-2.1,1.8-2.2,5-.4,7.1l11.6,13c.9,1,2.1,1.6,3.4,1.7.1,0,.2,0,.3,0,1.2,0,2.4-.4,3.3-1.3,1-.9,1.6-2.1,1.7-3.4,0-1.3-.3-2.5-1.1-3.5,0,0,.1,0,.2-.2.3-.3.6-.7.6-1.2,0-.3,0-.6-.2-.9.6.2,1.3.3,1.9.3.2,0,.4,0,.6,0,1.2,0,2.3-.2,3.4-.7l-1.8,1.6c-.6.5-1,1.3-1,2.1,0,.8.2,1.6.8,2.2.6.7,1.4,1,2.3,1s1.5-.3,2-.8l11.3-10c.2-.2.4-.4.5-.6,3.7,1.6,7.7,2.6,12,3,0,0,0,0,0,0-.1.6,0,1.3.2,1.9l6.4,13.7c.5,1.1,1.6,1.8,2.8,1.8s.9,0,1.3-.3c.7-.3,1.3-1,1.6-1.7.3-.8.2-1.6-.1-2.4l-1.1-2.4c1,1.1,2.2,2,3.7,2.5.6.2,1.3.4,1.9.5-.6.5-.8,1.3-.4,2.1,0,0,.1.2.2.2-1,.6-1.8,1.5-2.2,2.6-.5,1.3-.4,2.6.2,3.8.8,1.7,2.6,2.9,4.5,2.9s1.4-.2,2.1-.5l15.8-7.4c1.2-.6,2.1-1.6,2.6-2.8.5-1.3.4-2.6-.2-3.8-.6-1.2-1.6-2.1-2.8-2.6-1.2-.4-2.5-.4-3.6.1,0,0,0-.2,0-.3-.2-.4-.6-.7-1-.9-.3-.1-.6-.1-.9,0,1.1-1.7,1.5-3.7,1.3-5.7l1,2.2c.5,1.1,1.6,1.8,2.8,1.8s.9,0,1.3-.3c1.5-.7,2.2-2.6,1.5-4.1l-6.3-13.5c3.1-3.4,5.5-7.3,7.2-11.5.4.2.8.3,1.2.3s.2,0,.2,0l15-1.2c.8,0,1.6-.4,2.1-1.1.5-.6.8-1.4.7-2.2,0-.8-.5-1.6-1.1-2.1-.6-.5-1.4-.8-2.2-.7l-2.6.2c1.4-.5,2.6-1.4,3.6-2.6.4-.5.8-1,1.1-1.6.1.3.3.5.5.7.3.3.7.4,1.1.4s0,0,.1,0c.1,0,.2,0,.3,0,.4,2.3,2.5,4.1,4.9,4.1s.3,0,.4,0c1.3-.1,2.5-.7,3.4-1.7.9-1,1.3-2.3,1.2-3.6l-1.4-17.4ZM562,187.2l-4.7-5.3c0,0,.1,0,.2-.1,0,0,.1-.1.2-.2.1.2.2.3.4.5l3.9,4.4c.1.1.3.3.4.4,0,0-.2.1-.2.2,0,0-.1.1-.2.2ZM637.9,134h.6c-.2,0-.3.1-.5.2,0,0,0-.1,0-.2ZM619.8,199.9l5.4-2.5c.2,0,.3-.2.5-.3,0,0,0,.2,0,.3,0,0,0,.1.1.2l-6.4,3c0,0,0-.2,0-.2,0,0,0-.2-.1-.2.2,0,.4-.1.5-.2ZM610.4,91.8c0,0,0,.2,0,.2,0,0,0,.2,0,.3-.2,0-.4,0-.6,0l-5.9-.5c-.2,0-.4,0-.6,0,0,0,0-.2,0-.3,0,0,0-.2,0-.2l7.1.6ZM594.5,109.8c-.2,0-.5,0-.7.1,0,0,0-.1,0-.2v-1.4c.3.5.4,1,.7,1.5ZM552.6,124c0,.2-.2.3-.3.5,0,0-.1-.1-.2-.2,0,0-.2,0-.2-.1l3.6-6.1c0,0,.1.1.2.1,0,0,.2,0,.3.1-.1.2-.2.3-.3.5l-3,5.1ZM656.9,147.6c0-.2,0-.4,0-.6l-.5-5.9c0-.2,0-.4,0-.6,0,0,0,0,.1,0s0,0,.1,0c0,0,.2,0,.2,0l.6,7.1c0,0-.2,0-.3,0,0,0-.2,0-.3,0ZM616.8,111.8c0,.2,0,.4,0,.5-.3-.1-.7-.3-1-.4.5-.6.9-1.3,1.2-2.1l-.2,2ZM565.5,163.8c0,0,0,.2.1.2-.2,0-.5.2-.7.3l.6-.5ZM604.3,187.3c.1,0,.3,0,.4,0,0,.3,0,.7,0,1l-.5-1ZM639.6,157c0-.1,0-.3,0-.4.3.1.7.2,1,.3h-1.1Z" fill="#d8d8d8" filter="url(#drop-shadow-1)"/>
              <g id="Nook_table">
                <g>
                  <path d="M601.5,92.6l-2-.2c-.8,0-1.3-.7-1.3-1.5h0c0-.8.7-1.3,1.5-1.3l2,.2c.8,0,1.3.7,1.3,1.5h0c0,.8-.7,1.3-1.5,1.3Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M601.6,92.9s0,0-.1,0l-2-.2c-.9,0-1.6-.9-1.5-1.8,0-.4.2-.8.6-1.1.3-.3.8-.4,1.2-.4l2,.2c.4,0,.8.2,1.1.6.3.3.4.8.4,1.2,0,.8-.8,1.5-1.6,1.5ZM601.5,92.4c.6,0,1.2-.4,1.2-1,0-.3,0-.6-.3-.8-.2-.2-.5-.4-.8-.4l-2-.2c-.3,0-.6,0-.8.3-.2.2-.4.5-.4.8,0,.6.4,1.2,1,1.2l2,.2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M614.1,93.7l-2-.2c-.8,0-1.3-.7-1.3-1.5h0c0-.8.7-1.3,1.5-1.3l2,.2c.8,0,1.3.7,1.3,1.5h0c0,.8-.7,1.3-1.5,1.3Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M614.2,94s0,0-.1,0l-2-.2c-.9,0-1.6-.9-1.5-1.8,0-.9.9-1.6,1.8-1.5l2,.2c.4,0,.8.2,1.1.6.3.3.4.8.4,1.2,0,.4-.2.8-.6,1.1-.3.3-.7.4-1,.4ZM612.1,91c-.6,0-1.1.4-1.1,1,0,.6.4,1.2,1,1.2l2,.2c.3,0,.6,0,.8-.3.2-.2.4-.5.4-.8,0-.3,0-.6-.3-.8-.2-.2-.5-.4-.8-.4l-2-.2s0,0,0,0Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M602.9,92.3h5.9c4.8,0,8.6,3.9,8.6,8.6v5.4c0,4.7-3.9,8.6-8.6,8.6h-5.9c-4.7,0-8.6-3.9-8.6-8.6v-5.4c0-4.7,3.9-8.6,8.6-8.6Z" transform="translate(10.9 -50.9) rotate(4.8)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M608.6,115.4c-.3,0-.5,0-.8,0l-5.9-.5c-4.9-.4-8.5-4.7-8.1-9.6l.5-5.4c.2-2.3,1.3-4.5,3.1-6,1.8-1.5,4.1-2.3,6.5-2.1l5.9.5c4.9.4,8.5,4.7,8.1,9.6l-.5,5.4c-.2,2.3-1.3,4.5-3.1,6-1.6,1.4-3.6,2.1-5.7,2.1ZM607.9,114.9c2.2.2,4.4-.5,6.1-1.9,1.7-1.4,2.8-3.5,2.9-5.7l.5-5.4c.4-4.6-3-8.6-7.6-9l-5.9-.5c-2.2-.2-4.4.5-6.1,1.9-1.7,1.4-2.8,3.5-2.9,5.7l-.5,5.4c-.4,4.6,3,8.6,7.6,9l5.9.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M615.5,91.8l-17.4-1.5c-2.5-.2-4.4-2.5-4.2-5h0c.2-2.5,2.5-4.4,5-4.2l17.4,1.5c2.5.2,4.4,2.5,4.2,5h0c-.2,2.5-2.5,4.4-5,4.2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M615.9,92.1c-.1,0-.3,0-.4,0l-17.4-1.5c-2.7-.2-4.7-2.6-4.4-5.3.1-1.3.7-2.5,1.7-3.3,1-.8,2.3-1.2,3.5-1.1l17.4,1.5c1.3.1,2.5.7,3.3,1.7.8,1,1.2,2.3,1.1,3.5-.1,1.3-.7,2.5-1.7,3.3-.9.8-2,1.2-3.1,1.2ZM598.5,81.4c-1,0-2,.4-2.8,1-.9.8-1.4,1.8-1.5,3-.2,2.4,1.6,4.5,4,4.7l17.4,1.5c1.2,0,2.3-.3,3.2-1,.9-.8,1.4-1.8,1.5-3,0-1.2-.3-2.3-1-3.2-.8-.9-1.8-1.4-3-1.5l-17.4-1.5c-.1,0-.2,0-.4,0Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M590.6,112.1h0c-1.5-.1-2.6-1.4-2.5-2.9l1.3-15c.1-1.5,1.4-2.6,2.9-2.5h0c1.5.1,2.6,1.4,2.5,2.9l-1.3,15c-.1,1.5-1.4,2.6-2.9,2.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M590.8,112.4c0,0-.2,0-.3,0h0c-1.6-.1-2.8-1.6-2.7-3.2l1.3-15c0-.8.4-1.5,1-2,.6-.5,1.4-.8,2.2-.7.8,0,1.5.4,2,1,.5.6.8,1.4.7,2.2l-1.3,15c-.1,1.5-1.4,2.7-2.9,2.7ZM590.6,111.9c1.3.1,2.5-.9,2.7-2.2l1.3-15c0-.6-.1-1.3-.6-1.8-.4-.5-1-.8-1.7-.9-.7,0-1.3.1-1.8.6-.5.4-.8,1-.9,1.7l-1.3,15c-.1,1.3.9,2.5,2.2,2.7h0Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M619.6,114.7h0c-1.5-.1-2.6-1.4-2.5-2.9l1.3-15c.1-1.5,1.4-2.6,2.9-2.5h0c1.5.1,2.6,1.4,2.5,2.9l-1.3,15c-.1,1.5-1.4,2.6-2.9,2.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M619.9,115c0,0-.2,0-.3,0-.8,0-1.5-.4-2-1-.5-.6-.8-1.4-.7-2.2l1.3-15c.1-1.6,1.6-2.8,3.2-2.7,1.6.1,2.8,1.6,2.7,3.2l-1.3,15c0,.8-.4,1.5-1,2-.5.5-1.2.7-1.9.7ZM621.1,94.5c-1.3,0-2.3,1-2.4,2.2l-1.3,15c0,.6.1,1.3.6,1.8.4.5,1,.8,1.7.9h0c.7,0,1.3-.1,1.8-.6.5-.4.8-1,.9-1.7l1.3-15c.1-1.3-.9-2.5-2.2-2.7,0,0-.1,0-.2,0Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M552.4,126.6l-1,1.8c-.4.7-1.2.9-1.9.5h0c-.7-.4-.9-1.2-.5-1.9l1-1.8c.4-.7,1.2-.9,1.9-.5h0c.7.4.9,1.2.5,1.9Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M550.2,129.3c-.3,0-.6,0-.8-.2-.4-.2-.6-.6-.8-1-.1-.4,0-.9.2-1.2l1-1.8c.2-.4.6-.6,1-.8.4-.1.9,0,1.2.2.8.5,1,1.5.6,2.2l-1,1.8c-.2.4-.6.6-1,.8-.1,0-.3,0-.4,0ZM551.2,124.8c-.4,0-.8.2-1,.6l-1,1.8c-.2.3-.2.6-.1.9,0,.3.3.5.5.7.3.2.6.2.9.1.3,0,.5-.3.7-.5l1-1.8c.3-.5.1-1.2-.4-1.5-.2-.1-.4-.2-.6-.2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M558.8,115.7l-1,1.8c-.4.7-1.2.9-1.9.5h0c-.7-.4-.9-1.2-.5-1.9l1-1.8c.4-.7,1.2-.9,1.9-.5h0c.7.4.9,1.2.5,1.9Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M556.6,118.4c-.3,0-.6,0-.8-.2-.4-.2-.6-.6-.8-1-.1-.4,0-.9.2-1.2l1-1.8c.2-.4.6-.6,1-.8.4-.1.9,0,1.2.2.8.5,1,1.5.6,2.2l-1,1.8c-.3.5-.8.8-1.4.8ZM557.6,113.9c0,0-.2,0-.3,0-.3,0-.5.3-.7.5l-1,1.8c-.2.3-.2.6-.1.9,0,.3.3.5.5.7.5.3,1.2.1,1.5-.4l1-1.8c.3-.5.1-1.2-.4-1.5-.2-.1-.4-.2-.6-.2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M561.2,116h5.9c4.7,0,8.6,3.9,8.6,8.6v5.4c0,4.7-3.9,8.6-8.6,8.6h-5.9c-4.7,0-8.6-3.9-8.6-8.6v-5.4c0-4.7,3.9-8.6,8.6-8.6Z" transform="translate(169.2 549.9) rotate(-59.6)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M565,140.1c-1.6,0-3.1-.4-4.4-1.2l-4.6-2.7c-2-1.2-3.5-3.1-4.1-5.4-.6-2.3-.3-4.7.9-6.7l3-5.1c2.5-4.2,7.9-5.6,12.1-3.2l4.6,2.7c4.2,2.5,5.6,7.9,3.2,12.1l-3,5.1c-1.2,2-3.1,3.5-5.4,4.1-.8.2-1.5.3-2.3.3ZM563.4,115.1c-2.9,0-5.7,1.5-7.2,4.1l-3,5.1c-1.1,1.9-1.4,4.2-.9,6.3.6,2.2,1.9,4,3.9,5.1l4.6,2.7c1.9,1.1,4.2,1.4,6.3.9,2.2-.6,4-1.9,5.1-3.9l3-5.1c2.3-4,1-9.1-3-11.4l-4.6-2.7c-1.3-.8-2.8-1.1-4.2-1.1Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M557.7,113.6l-8.8,15c-1.3,2.2-4.1,2.9-6.3,1.7h0c-2.2-1.3-2.9-4.1-1.7-6.3l8.8-15c1.3-2.2,4.1-2.9,6.3-1.7h0c2.2,1.3,2.9,4.1,1.7,6.3Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M544.9,131.2c-.9,0-1.7-.2-2.4-.7-1.1-.7-1.9-1.7-2.2-3-.3-1.3-.2-2.6.5-3.7l8.8-15c1.4-2.3,4.3-3.1,6.7-1.7,2.3,1.4,3.1,4.3,1.7,6.7l-8.8,15c-.7,1.1-1.7,1.9-3,2.2-.4.1-.8.2-1.2.2ZM553.7,106.9c-1.5,0-3,.8-3.8,2.2l-8.8,15c-.6,1-.7,2.2-.5,3.3.3,1.1,1,2.1,2,2.7,1,.6,2.2.7,3.3.5,1.1-.3,2.1-1,2.7-2l8.8-15c1.2-2.1.5-4.8-1.6-6-.7-.4-1.5-.6-2.2-.6Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M565.3,144.8h0c-.8,1.3-2.4,1.7-3.7,1l-13-7.6c-1.3-.8-1.7-2.4-1-3.7h0c.8-1.3,2.4-1.7,3.7-1l13,7.6c1.3.8,1.7,2.4,1,3.7Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M563,146.4c-.5,0-1-.1-1.5-.4l-13-7.6c-.7-.4-1.2-1-1.4-1.8-.2-.8,0-1.6.3-2.2.4-.7,1-1.2,1.8-1.4.8-.2,1.6,0,2.2.3l13,7.6c1.4.8,1.9,2.6,1.1,4h0c-.5.9-1.5,1.5-2.6,1.5ZM550,133.4c-.2,0-.4,0-.6,0-.6.2-1.2.6-1.5,1.1-.3.6-.4,1.2-.3,1.9.2.6.6,1.2,1.1,1.5l13,7.6c1.2.7,2.7.3,3.4-.9h0c.7-1.2.3-2.7-.9-3.4l-13-7.6c-.4-.2-.8-.3-1.2-.3Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M580.2,119.7h0c-.8,1.3-2.4,1.7-3.7,1l-13-7.6c-1.3-.8-1.7-2.4-1-3.7h0c.8-1.3,2.4-1.7,3.7-1l13,7.6c1.3.8,1.7,2.4,1,3.7Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M577.8,121.3c-.5,0-1-.1-1.5-.4l-13-7.6c-1.4-.8-1.9-2.6-1.1-4,.4-.7,1-1.2,1.8-1.4.8-.2,1.6,0,2.2.3l13,7.6c.7.4,1.2,1,1.4,1.8.2.8,0,1.6-.3,2.2-.4.7-1,1.2-1.8,1.4-.3,0-.5,0-.8,0ZM564.8,108.3c-.2,0-.4,0-.6,0-.6.2-1.2.6-1.5,1.1-.7,1.2-.3,2.7.9,3.4l13,7.6c.6.3,1.2.4,1.9.3.6-.2,1.2-.6,1.5-1.1h0c.3-.6.4-1.2.3-1.9-.2-.6-.6-1.2-1.1-1.5l-13-7.6c-.4-.2-.8-.3-1.2-.3Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M564.3,187.4l1.4,1.5c.5.6.5,1.4-.1,1.9h0c-.6.5-1.4.5-1.9-.1l-1.4-1.5c-.5-.6-.5-1.4.1-1.9h0c.6-.5,1.4-.5,1.9.1Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M564.6,191.5s0,0-.1,0c-.4,0-.8-.2-1.1-.5l-1.4-1.5c-.3-.3-.4-.7-.4-1.2s.2-.8.5-1.1c.3-.3.7-.4,1.2-.4.4,0,.8.2,1.1.5l1.4,1.5c.3.3.4.7.4,1.2,0,.4-.2.8-.5,1.1-.3.3-.7.4-1.1.4ZM563.3,187.2c-.3,0-.5,0-.7.3-.2.2-.4.5-.4.8,0,.3,0,.6.3.8l1.4,1.5c.2.2.5.4.8.4.3,0,.6,0,.8-.3.2-.2.4-.5.4-.8,0-.3,0-.6-.3-.8l-1.4-1.5c-.2-.2-.5-.4-.8-.4,0,0,0,0,0,0Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M555.9,178l1.4,1.5c.5.6.5,1.4-.1,1.9h0c-.6.5-1.4.5-1.9-.1l-1.4-1.5c-.5-.6-.5-1.4.1-1.9h0c.6-.5,1.4-.5,1.9.1Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M556.3,182s0,0,0,0c-.4,0-.8-.2-1.1-.5l-1.4-1.5c-.6-.7-.5-1.7.1-2.3.3-.3.7-.4,1.2-.4.4,0,.8.2,1.1.5l1.4,1.5c.3.3.4.7.4,1.2,0,.4-.2.8-.5,1.1-.3.3-.7.4-1.1.4ZM554.9,177.8c-.3,0-.5,0-.7.3-.5.4-.5,1.1,0,1.6l1.4,1.5c.2.2.5.4.8.4.3,0,.6,0,.8-.3.2-.2.4-.5.4-.8,0-.3,0-.6-.3-.8l-1.4-1.5c-.2-.2-.5-.4-.8-.4,0,0,0,0,0,0Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M565.7,165.1h5.9c4.7,0,8.6,3.9,8.6,8.6v5.4c0,4.7-3.9,8.6-8.6,8.6h-5.9c-4.7,0-8.6-3.9-8.6-8.6v-5.4c0-4.7,3.9-8.6,8.6-8.6Z" transform="translate(814.2 718.9) rotate(-131.6)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M568.7,189.3c-.2,0-.4,0-.5,0-2.4-.1-4.5-1.2-6.1-3l-3.9-4.4c-3.2-3.7-2.9-9.3.7-12.5l4-3.6c1.8-1.6,4-2.3,6.4-2.2,2.4.1,4.5,1.2,6.1,3l3.9,4.4c3.2,3.7,2.9,9.3-.7,12.5l-4,3.6c-1.6,1.4-3.7,2.2-5.9,2.2ZM568.7,164.1c-2,0-4,.7-5.5,2.1l-4,3.6c-3.4,3.1-3.8,8.3-.7,11.8l3.9,4.4c1.5,1.7,3.5,2.7,5.8,2.8,2.2.1,4.4-.6,6-2.1l4-3.6c3.4-3.1,3.8-8.4.7-11.8l-3.9-4.4c-1.5-1.7-3.5-2.7-5.8-2.8-.2,0-.3,0-.5,0Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M553.6,178.4l11.6,13c1.7,1.9,1.5,4.8-.4,6.5h0c-1.9,1.7-4.8,1.5-6.5-.4l-11.6-13c-1.7-1.9-1.5-4.8.4-6.5h0c1.9-1.7,4.8-1.5,6.5.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M561.7,199.3c0,0-.2,0-.3,0-1.3,0-2.5-.7-3.4-1.6l-11.6-13c-1.8-2-1.6-5.1.4-6.9s5.1-1.6,6.9.4l11.6,13c.9,1,1.3,2.2,1.2,3.5,0,1.3-.7,2.5-1.6,3.4-.9.8-2,1.2-3.2,1.2ZM550.2,177.1c-1,0-2.1.4-2.9,1.1-1.8,1.6-2,4.4-.4,6.2l11.6,13c.8.9,1.8,1.4,3,1.5,1.2,0,2.3-.3,3.2-1.1.9-.8,1.4-1.8,1.5-3,0-1.2-.3-2.3-1.1-3.2l-11.6-13c-.9-1-2.1-1.5-3.3-1.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M585.7,180.8h0c1,1.1.9,2.8-.2,3.8l-11.3,10c-1.1,1-2.8.9-3.8-.2h0c-1-1.1-.9-2.8.2-3.8l11.3-10c1.1-1,2.8-.9,3.8.2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M572.4,195.6c-.8,0-1.6-.3-2.2-1-1.1-1.2-1-3.1.2-4.2l11.3-10c1.2-1.1,3.1-1,4.2.2.5.6.8,1.3.7,2.1,0,.8-.4,1.5-1,2l-11.3,10c-.6.5-1.3.7-2,.7ZM583.6,180.2c-.6,0-1.2.2-1.6.6l-11.3,10c-.5.4-.8,1-.8,1.7,0,.7.2,1.3.6,1.8.9,1,2.4,1.1,3.5.2l11.3-10c1-.9,1.1-2.5.2-3.5h0c-.5-.5-1.2-.8-1.8-.8Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M566.4,158.9h0c1,1.1.9,2.8-.2,3.8l-11.3,10c-1.1,1-2.8.9-3.8-.2h0c-1-1.1-.9-2.8.2-3.8l11.3-10c1.1-1,2.8-.9,3.8.2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M553.1,173.7c-.8,0-1.6-.3-2.2-1-.5-.6-.8-1.3-.7-2.1,0-.8.4-1.5,1-2l11.3-10c1.2-1.1,3.1-1,4.2.2h0c1.1,1.2,1,3.1-.2,4.2l-11.3,10c-.6.5-1.3.7-2,.7ZM564.4,158.2c-.6,0-1.2.2-1.6.6l-11.3,10c-.5.4-.8,1-.8,1.7,0,.7.2,1.3.6,1.8s1,.8,1.7.8c.6,0,1.3-.2,1.8-.6l11.3-10c1-.9,1.1-2.5.2-3.5h0c-.4-.5-1-.8-1.7-.8,0,0-.1,0-.2,0Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M626.8,195.4l1.8-.9c.7-.3,1.5,0,1.8.7h0c.3.7,0,1.5-.7,1.8l-1.8.9c-.7.3-1.5,0-1.8-.7h0c-.3-.7,0-1.5.7-1.8Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M627.4,198.3c-.2,0-.4,0-.6,0-.4-.1-.7-.4-.9-.8-.4-.8,0-1.8.8-2.2l1.8-.9c.4-.2.8-.2,1.2,0,.4.1.7.4.9.8.4.8,0,1.8-.8,2.2l-1.8.9c-.2.1-.5.2-.7.2ZM626.9,195.6h0c-.6.3-.8.9-.5,1.5.1.3.4.5.6.6.3.1.6,0,.9,0l1.8-.9c.6-.3.8-.9.5-1.5-.1-.3-.4-.5-.6-.6-.3-.1-.6,0-.9,0l-1.8.9Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M615.4,200.8l1.8-.9c.7-.3,1.5,0,1.8.7h0c.3.7,0,1.5-.7,1.8l-1.8.9c-.7.3-1.5,0-1.8-.7h0c-.3-.7,0-1.5.7-1.8Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M616,203.7c-.6,0-1.2-.3-1.5-.9-.4-.8,0-1.8.8-2.2l1.8-.9c.4-.2.8-.2,1.2,0,.4.1.7.4.9.8.2.4.2.8,0,1.2-.1.4-.4.7-.8.9l-1.8.9c-.2.1-.5.2-.7.2ZM615.5,201h0c-.6.3-.8.9-.5,1.5.3.6.9.8,1.5.5l1.8-.9c.3-.1.5-.4.6-.6.1-.3,0-.6,0-.9-.1-.3-.4-.5-.6-.6-.3-.1-.6,0-.9,0l-1.8.9Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M614.6,176.8h5.9c4.7,0,8.6,3.9,8.6,8.6v5.4c0,4.7-3.9,8.6-8.6,8.6h-5.9c-4.7,0-8.6-3.9-8.6-8.6v-5.4c0-4.7,3.9-8.6,8.6-8.6Z" transform="translate(1256.4 95.7) rotate(154.8)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M616,200.7c-1,0-2-.2-3-.5-2.2-.8-4-2.4-5-4.6l-2.3-4.9c-1-2.1-1.1-4.5-.3-6.8.8-2.2,2.4-4,4.6-5l5.4-2.5c2.1-1,4.5-1.1,6.8-.3,2.2.8,4,2.4,5,4.6l2.3,4.9c2.1,4.4.2,9.7-4.2,11.8l-5.4,2.5c-1.2.6-2.5.8-3.7.8ZM619.1,176.1c-1.2,0-2.4.3-3.5.8l-5.4,2.5c-2,.9-3.5,2.6-4.3,4.7-.8,2.1-.7,4.4.3,6.4l2.3,4.9c.9,2,2.6,3.5,4.7,4.3,2.1.8,4.4.7,6.4-.3l5.4-2.5c4.2-2,6-6.9,4-11.1l-2.3-4.9c-.9-2-2.6-3.5-4.7-4.3-.9-.3-1.9-.5-2.9-.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M615.1,203.1l15.8-7.4c2.3-1.1,5.1,0,6.1,2.2h0c1.1,2.3,0,5.1-2.2,6.1l-15.8,7.4c-2.3,1.1-5.1,0-6.1-2.2h0c-1.1-2.3,0-5.1,2.2-6.1Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M617.1,212.2c-1.8,0-3.6-1-4.4-2.8-.6-1.2-.6-2.5-.2-3.7.4-1.2,1.3-2.2,2.5-2.8l15.8-7.4c2.4-1.1,5.3,0,6.5,2.3,1.1,2.4,0,5.3-2.3,6.5l-15.8,7.4c-.7.3-1.4.5-2.1.5ZM632.9,195.5c-.6,0-1.3.1-1.9.4l-15.8,7.4c-1.1.5-1.9,1.4-2.2,2.5-.4,1.1-.3,2.3.2,3.3,1,2.2,3.6,3.1,5.8,2.1l15.8-7.4c2.2-1,3.1-3.6,2.1-5.8-.7-1.6-2.3-2.5-4-2.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M626.5,173.1h0c1.3-.6,3,0,3.6,1.3l6.4,13.7c.6,1.3,0,3-1.3,3.6h0c-1.3.6-3,0-3.6-1.3l-6.4-13.7c-.6-1.3,0-3,1.3-3.6Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M634.1,192.1c-1.1,0-2.2-.6-2.7-1.7l-6.4-13.7c-.3-.7-.4-1.5-.1-2.3.3-.7.8-1.3,1.5-1.7h0c.7-.3,1.5-.4,2.3-.1.7.3,1.3.8,1.7,1.5l6.4,13.7c.7,1.5,0,3.2-1.4,3.9-.4.2-.8.3-1.3.3ZM627.7,173.1c-.4,0-.7,0-1,.2h0c-.6.3-1,.8-1.3,1.4-.2.6-.2,1.3,0,1.9l6.4,13.7c.6,1.2,2,1.8,3.3,1.2,1.2-.6,1.8-2,1.2-3.3l-6.4-13.7c-.3-.6-.8-1-1.4-1.3-.3,0-.6-.1-.8-.1Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M600,185.4h0c1.3-.6,3,0,3.6,1.3l6.4,13.7c.6,1.3,0,3-1.3,3.6h0c-1.3.6-3,0-3.6-1.3l-6.4-13.7c-.6-1.3,0-3,1.3-3.6Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M607.6,204.4c-1.1,0-2.2-.6-2.7-1.7l-6.4-13.7c-.7-1.5,0-3.2,1.4-3.9h0c1.5-.7,3.2,0,3.9,1.4l6.4,13.7c.3.7.4,1.5.1,2.3-.3.7-.8,1.3-1.5,1.7-.4.2-.8.3-1.3.3ZM600.1,185.6h0c-1.2.6-1.8,2-1.2,3.3l6.4,13.7c.6,1.2,2,1.8,3.3,1.2.6-.3,1-.8,1.3-1.4.2-.6.2-1.3,0-1.9l-6.4-13.7c-.6-1.2-2-1.8-3.3-1.2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M655.1,138.8l-.2-2c0-.8.5-1.4,1.3-1.5h0c.8,0,1.4.5,1.5,1.3l.2,2c0,.8-.5,1.4-1.3,1.5h0c-.8,0-1.4-.5-1.5-1.3Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M656.5,140.3c-.4,0-.8-.1-1.1-.4-.3-.3-.5-.7-.6-1.1l-.2-2c0-.4.1-.9.4-1.2.3-.3.7-.5,1.1-.6.4,0,.9.1,1.2.4.3.3.5.7.6,1.1l.2,2c0,.4-.1.9-.4,1.2-.3.3-.7.5-1.1.6,0,0,0,0-.1,0ZM656.3,135.6s0,0,0,0c-.3,0-.6.2-.8.4-.2.2-.3.5-.3.8l.2,2c0,.3.2.6.4.8.2.2.5.3.8.3.3,0,.6-.2.8-.4.2-.2.3-.5.3-.8l-.2-2c0-.3-.2-.6-.4-.8-.2-.2-.5-.3-.7-.3Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M656.1,151.4l-.2-2c0-.8.5-1.4,1.3-1.5h0c.8,0,1.4.5,1.5,1.3l.2,2c0,.8-.5,1.4-1.3,1.5h0c-.8,0-1.4-.5-1.5-1.3Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M657.5,152.9c-.4,0-.8-.1-1.1-.4-.3-.3-.5-.7-.6-1.1l-.2-2c0-.4.1-.9.4-1.2.3-.3.7-.5,1.1-.6.4,0,.9.1,1.2.4.3.3.5.7.6,1.1l.2,2c0,.9-.6,1.7-1.5,1.8,0,0,0,0-.1,0ZM656.3,151.4c0,.3.2.6.4.8.2.2.5.3.8.3.6,0,1.1-.6,1-1.2l-.2-2c0-.3-.2-.6-.4-.8-.2-.2-.5-.3-.8-.3-.3,0-.6.2-.8.4-.2.2-.3.5-.3.8l.2,2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M642,133.6h5.9c4.8,0,8.6,3.9,8.6,8.6v5.4c0,4.7-3.9,8.6-8.6,8.6h-5.9c-4.7,0-8.6-3.9-8.6-8.6v-5.4c0-4.7,3.9-8.6,8.6-8.6Z" transform="translate(737.9 -509.6) rotate(85.4)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M642.5,157c-2.1,0-4.1-.7-5.7-2.1-1.8-1.5-2.9-3.7-3.1-6l-.5-5.9c-.4-4.9,3.3-9.1,8.1-9.5l5.4-.4c2.3-.2,4.6.6,6.4,2.1,1.8,1.5,2.9,3.7,3.1,6l.5,5.9c.2,2.3-.6,4.6-2.1,6.4-1.5,1.8-3.7,2.9-6,3.1l-5.4.4c-.2,0-.5,0-.7,0ZM647.4,133.4c-.2,0-.4,0-.7,0l-5.4.4c-4.6.4-8,4.4-7.7,9l.5,5.9c.4,4.6,4.4,8,9,7.7l5.4-.4c2.2-.2,4.2-1.2,5.7-2.9,1.5-1.7,2.2-3.9,2-6.1l-.5-5.9c-.4-4.4-4-7.7-8.3-7.7Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M658.2,152.5l-1.4-17.4c-.2-2.5,1.7-4.8,4.2-5h0c2.5-.2,4.8,1.7,5,4.2l1.4,17.4c.2,2.5-1.7,4.8-4.2,5h0c-2.5.2-4.8-1.7-5-4.2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M662.8,157c-2.5,0-4.6-1.9-4.9-4.5l-1.4-17.4c-.2-2.7,1.8-5,4.5-5.2,2.7-.2,5,1.8,5.2,4.5l1.4,17.4c.1,1.3-.3,2.5-1.2,3.5-.8,1-2,1.6-3.3,1.7-.1,0-.3,0-.4,0ZM658.4,152.4c.2,2.4,2.3,4.2,4.7,4,1.2,0,2.2-.6,3-1.5s1.1-2,1-3.2l-1.4-17.4c-.2-2.4-2.3-4.2-4.7-4-2.4.2-4.2,2.3-4,4.7l1.4,17.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M634.1,131.2h0c-.1-1.5,1-2.8,2.5-2.9l15-1.2c1.5-.1,2.8,1,2.9,2.5h0c.1,1.5-1,2.8-2.5,2.9l-15,1.2c-1.5.1-2.8-1-2.9-2.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M636.8,134c-1.5,0-2.8-1.2-2.9-2.7,0-.8.2-1.5.7-2.1.5-.6,1.2-1,2-1l15-1.2c.8,0,1.5.2,2.1.7.6.5,1,1.2,1,2,.1,1.6-1.1,3-2.7,3.2l-15,1.2c0,0-.2,0-.2,0ZM651.8,127.4c0,0-.1,0-.2,0l-15,1.2c-.6,0-1.2.4-1.7.9-.4.5-.6,1.1-.6,1.8.1,1.3,1.3,2.4,2.6,2.2l15-1.2c1.3-.1,2.4-1.3,2.2-2.6,0-.6-.4-1.2-.9-1.7-.4-.4-1-.6-1.6-.6Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M636.3,160.3h0c-.1-1.5,1-2.8,2.5-2.9l15-1.2c1.5-.1,2.8,1,2.9,2.5h0c.1,1.5-1,2.8-2.5,2.9l-15,1.2c-1.5.1-2.8-1-2.9-2.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M639,163.1c-1.5,0-2.8-1.2-2.9-2.7,0-.8.2-1.5.7-2.1.5-.6,1.2-1,2-1l15-1.2c1.6-.1,3,1.1,3.2,2.7.1,1.6-1.1,3-2.7,3.2l-15,1.2c0,0-.2,0-.2,0ZM654,156.5c0,0-.1,0-.2,0l-15,1.2c-.6,0-1.2.4-1.7.9-.4.5-.6,1.1-.6,1.8h0c.1,1.3,1.3,2.4,2.6,2.2l15-1.2c1.3-.1,2.4-1.3,2.2-2.6-.1-1.3-1.2-2.3-2.4-2.3Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g filter="url(#drop-shadow-2)">
                  <path d="M640.1,151.6c-1.8,21.3-20.6,37.1-41.9,35.3s-37.1-20.6-35.3-41.9c1.8-21.3,20.6-37.1,41.9-35.3,21.3,1.8,37.1,20.6,35.3,41.9Z" fill="#fff" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M601.5,187.3c-1.1,0-2.2,0-3.3-.1-21.4-1.8-37.4-20.7-35.6-42.2.9-10.4,5.7-19.8,13.7-26.5,8-6.7,18.1-9.9,28.4-9.1,21.4,1.8,37.4,20.7,35.6,42.2-1.7,20.3-18.8,35.7-38.8,35.7ZM601.4,109.8c-9.1,0-17.8,3.2-24.8,9.1-7.9,6.6-12.7,15.9-13.5,26.2-1.8,21.2,14,39.8,35.1,41.6,21.2,1.8,39.8-14,41.6-35.1h.2s-.2,0-.2,0c1.8-21.2-14-39.8-35.1-41.6-1.1,0-2.2-.1-3.3-.1Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M640.1,151.6c-1.8,21.3-20.6,37.1-41.9,35.3s-37.1-20.6-35.3-41.9c1.8-21.3,20.6-37.1,41.9-35.3,21.3,1.8,37.1,20.6,35.3,41.9Z" fill="#fff" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M601.5,187.3c-1.1,0-2.2,0-3.3-.1-21.4-1.8-37.4-20.7-35.6-42.2.9-10.4,5.7-19.8,13.7-26.5,8-6.7,18.1-9.9,28.4-9.1,21.4,1.8,37.4,20.7,35.6,42.2-1.7,20.3-18.8,35.7-38.8,35.7ZM601.4,109.8c-9.1,0-17.8,3.2-24.8,9.1-7.9,6.6-12.7,15.9-13.5,26.2-1.8,21.2,14,39.8,35.1,41.6,21.2,1.8,39.8-14,41.6-35.1h.2s-.2,0-.2,0c1.8-21.2-14-39.8-35.1-41.6-1.1,0-2.2-.1-3.3-.1Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <g>
                    <path d="M601.8,149.1c.2-2.1,1.3-5,3.1-6.8,2.2-2.3,5-3.2,5.3-3.1.5.3-3,3.4-3.6,6.3-.6,2.9-4.8,3.6-4.8,3.6Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                    <path d="M601.5,149.4v-.3c.2-2,1.3-5,3.2-7,2.1-2.2,5.1-3.4,5.6-3.1,0,0,.1.1.2.2,0,.3-.2.6-.9,1.6-.9,1.2-2.4,3-2.7,4.7-.6,3-4.8,3.8-5,3.8h-.3ZM609.9,139.4c-.7.1-3,1.1-4.9,3-1.6,1.7-2.7,4.4-2.9,6.3,1-.2,3.8-1.2,4.3-3.4.4-1.8,1.8-3.7,2.8-4.9.3-.4.6-.8.8-1Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  </g>
                  <g>
                    <path d="M602.4,148c.4-4.1-4.3-7.5-4.9-7.7-.6-.1.8,2.2,1,3.7.3,1.5.9,4.8,2.3,5.1,1.4.3,1.5-.3,1.6-1.2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                    <path d="M601.4,149.5c-.2,0-.4,0-.7-.1-1.5-.4-2.1-3.6-2.4-5.3-.1-.7-.4-1.5-.7-2.2-.4-1-.6-1.5-.4-1.7,0,0,.2-.1.4-.1.7.1,5.5,3.8,5.1,7.9h0c0,.5-.1,1-.5,1.3-.2.1-.4.2-.6.2ZM597.6,140.7c0,.3.2.7.4,1.1.3.7.6,1.5.7,2.2.3,1.4.9,4.6,2.1,4.9.5.1.8.1,1,0,.2-.1.2-.5.3-.9h0c.4-3.5-3.5-6.7-4.5-7.3Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  </g>
                  <g>
                    <path d="M602.9,147.9c3.1-1.1,6.3,6.9,7,7.5.6.6-.8,0-1.5-.8s-2.2-1.7-2.8-2.3c-.6-.6-5.2-3.5-2.6-4.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                    <path d="M610,156c-.4,0-1.3-.5-1.8-1.1-.4-.5-1.1-1-1.7-1.4-.5-.3-.9-.6-1.1-.9,0,0-.3-.3-.6-.5-1.5-1.2-3-2.5-2.9-3.5,0-.4.4-.7.9-.9h0c2.6-.9,5.1,3.8,6.5,6.3.3.6.7,1.2.8,1.3.1.1.3.3.2.5h0c0,.1-.2.2-.2.2,0,0,0,0,0,0ZM603,148.2c-.3.1-.5.3-.6.5-.1.8,1.8,2.3,2.7,3,.3.2.5.4.6.5.2.2.6.5,1,.8.6.5,1.4,1,1.8,1.5.2.3.6.5.9.7-.1-.2-.3-.6-.6-1-1.2-2.2-3.7-6.8-5.9-6h0Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  </g>
                  <g>
                    <path d="M601.6,148.9c.6-2.8-5.2-.8-7.2.4-1.9,1.2-4.5,3.7-3.5,3.4,1.1-.3,4.2-1.9,6.1-2.1,2-.3,4.4-.9,4.5-1.6Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                    <path d="M590.8,153c-.2,0-.3-.1-.3-.2-.3-.6,2.7-3,3.8-3.7,1.5-.9,5.6-2.5,7.1-1.5.3.2.6.6.5,1.4h0c-.2,1.2-4.3,1.8-4.7,1.8-1.3.2-3.3,1-4.6,1.6-.6.2-1.1.5-1.4.6,0,0-.2,0-.2,0ZM600.1,147.7c-1.6,0-4.3,1-5.5,1.8-1.3.8-2.8,2.2-3.4,2.8.3-.1.7-.3,1.1-.4,1.4-.6,3.4-1.4,4.8-1.6,2.5-.3,4.2-1,4.3-1.4h0c0-.4,0-.7-.3-.9-.2-.2-.6-.2-1-.2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  </g>
                  <g>
                    <path d="M602,148.6c-3.7,0-2.5,5.8-2.8,7-.3,1.2-.7,2.1-.3,1.6.4-.5,1.1-1.4,2.3-3.6,1.2-2.3,2-5,.8-5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                    <path d="M598.8,157.6s0,0-.1,0c-.2-.1-.2-.4.1-1.3,0-.2.1-.5.2-.7,0-.3,0-.8,0-1.4,0-1.7,0-3.9,1.1-5.1.5-.5,1.1-.7,1.9-.7.3,0,.5.1.6.4.5.9-.3,3.2-1.2,5-.9,1.8-1.7,3-2.3,3.7,0,0-.2.2-.3.2ZM598.7,157.1h0ZM601.9,148.8c-.6,0-1.1.2-1.4.5-1,1-1,3.1-1,4.7,0,.7,0,1.3,0,1.6,0,.3-.1.5-.2.7,0,0,0,0,0,.1.5-.7,1.1-1.7,1.8-3,1-2,1.6-4,1.3-4.5,0,0-.1-.1-.2-.1h0s0,0,0,0Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  </g>
                  <g>
                    <path d="M602.8,148c2.4-1.3,3.9-.2,5.2.4,1.3.6,3.5,1.1,3,1.3-.5.1-2-.2-3.5-.3-1.4,0-6.4-.5-4.7-1.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                    <path d="M610.7,149.9c-.3,0-.8,0-1.3-.1-.6,0-1.2-.2-1.9-.2-1.2,0-5.1-.3-5.3-1.2,0-.2,0-.5.5-.7h0c2.3-1.3,3.8-.5,5,.2.1,0,.3.2.4.2.6.3,1.3.5,1.9.7,1,.3,1.3.4,1.3.7,0,0,0,.2-.3.3,0,0-.2,0-.3,0ZM605,147.6c-.6,0-1.3.2-2.1.6h0c-.2,0-.2.2-.2.2.2.3,2.7.7,4.8.8.6,0,1.3.1,1.9.2.1,0,.2,0,.3,0-.6-.2-1.3-.5-1.9-.7-.1,0-.3-.2-.4-.2-.7-.4-1.5-.8-2.4-.8Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  </g>
                  <g>
                    <path d="M603.3,142.1c.4,1.6.4,3.4-.2,4.6-.6,1.1-.7,2-1,1.7-.3-.3-1.2-1.3-.9-2.8.3-1.5,1.4-4.7,1.2-5.3-.3-.5.8,1.1.9,1.8Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                    <path d="M602.2,148.7c0,0-.2,0-.3-.1-.4-.4-1.3-1.4-1-3,.1-.6.3-1.3.6-2.1.3-1.1.8-2.7.6-3,0-.1-.1-.2,0-.4h0c0-.1.2,0,.2,0,.3,0,1.1,1.8,1.2,2.1h0c.5,1.9.4,3.7-.2,4.8-.2.4-.3.7-.5,1-.2.5-.3.8-.6.9,0,0,0,0,0,0ZM602.6,141.1c0,.5-.3,1.3-.6,2.4-.2.8-.4,1.5-.5,2.1-.2,1.3.4,2.1.8,2.5,0-.1.2-.3.2-.5.1-.3.3-.6.5-1,.5-1,.6-2.6.1-4.4h0c0-.3-.3-.7-.5-1.1Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  </g>
                </g>
              </g>
              <g id="Primary_Bed" filter="url(#drop-shadow-3)">
                <line x1="842.6" y1="196.7" x2="842.6" y2="196.7" fill="#e2d0b5" stroke="#ccb596" stroke-linecap="round" stroke-linejoin="round" stroke-width=".2"/>
                <line x1="826.5" y1="196.7" x2="826.5" y2="196.7" fill="#e2d0b5" stroke="#ccb596" stroke-linecap="round" stroke-linejoin="round" stroke-width=".2"/>
                <g>
                  <rect x="850.7" y="148.9" width="112.7" height="9.3" rx="4" ry="4" transform="translate(1060.6 -753.6) rotate(90)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M902.2,205.9v-104.8c0-2.3,1.9-4.2,4.2-4.2h1.4c2.3,0,4.2,1.9,4.2,4.2v104.8c0,2.3-1.9,4.2-4.2,4.2h-1.4c-2.3,0-4.2-1.9-4.2-4.2ZM911.5,101.1c0-2-1.7-3.7-3.7-3.7h-1.4c-2,0-3.7,1.7-3.7,3.7v104.8c0,2,1.7,3.7,3.7,3.7h1.4c2,0,3.7-1.7,3.7-3.7v-104.8Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="805" y="106.8" width="100.7" height="93.8" transform="translate(1009 -701.6) rotate(90)" fill="#fff" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M808.2,204.3v-101.2h94.3v101.2h-94.3ZM808.7,103.6v100.2h93.3v-100.2h-93.3Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M877.9,147.6c-.2-.3-.2-2.2-.4-5.8-.2-3.3-.7-8-.6-12.3,0-6.1.6-10.8.9-14.5.1-2.2-.2-4.7.2-5,.3-.2,2.4.1,4.6,0,5.5-.3,14.2-.8,15.3,0,.5.4.2,2.9.4,5.3.3,4,.7,9,.8,12.5.1,3.4-.5,9.5-.8,14.2-.2,2.5,0,5.4-.3,5.6-.2.2-2-.1-4,0-1.4.1-4.1.6-5.8.6-5.5,0-9.1.5-10.1-.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M876.6,130.1c0-.2,0-.4,0-.7,0-4.4.4-8.1.6-11.2,0-1.2.2-2.3.3-3.4,0-.9,0-1.9,0-2.7,0-1.5,0-2.2.3-2.5.2-.2.6-.1,1.7,0,.9,0,1.9.1,3.1,0h.1c7.5-.4,14.3-.8,15.3,0,.4.3.4,1.2.4,2.9,0,.8,0,1.7,0,2.6.3,3.7.7,8.9.8,12.5.1,2.8-.3,7.5-.6,11.5,0,.9-.2,1.8-.2,2.7,0,1,0,2.1-.1,3.1,0,1.9,0,2.6-.4,2.8-.2.1-.5.1-1.3,0-.7,0-1.8,0-2.8,0-.5,0-1.1.1-1.8.2-1.4.2-2.9.4-4.1.4-1.6,0-3,0-4.2,0-3.3,0-5.3.1-6.1-.8h0c-.2-.2-.2-.9-.3-2.8,0-.8,0-1.9-.2-3.1,0-.8-.1-1.7-.2-2.7-.2-2.8-.4-6-.4-9ZM878,113.6c0,.4,0,.9,0,1.4,0,1-.2,2.2-.3,3.4-.2,3-.6,6.8-.6,11.1,0,3.2.2,6.6.4,9.6,0,1,.1,1.9.2,2.7,0,1.2.1,2.3.2,3.1,0,1.2.1,2.3.2,2.5.6.7,2.7.7,5.7.6,1.2,0,2.7,0,4.2,0,1.1,0,2.7-.2,4-.4.7,0,1.3-.2,1.8-.2,1.1-.1,2.1,0,2.9,0,.4,0,.9,0,1,0,0-.2,0-1.3.1-2.3,0-1,0-2.1.1-3.1,0-.9.1-1.7.2-2.7.3-4.1.7-8.7.6-11.5-.1-3.6-.5-8.7-.8-12.4,0-.9,0-1.8,0-2.7,0-1.1,0-2.3-.2-2.5-1-.7-10.1-.2-15,0h-.1c-1.1,0-2.3,0-3.1,0-.6,0-1.3,0-1.4,0,0,.2,0,1.2,0,2.1,0,.4,0,.9,0,1.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M877.9,193.5c-.2-.3-.2-2.2-.4-5.8-.2-3.3-.7-8-.6-12.3,0-6.1.6-10.8.9-14.5.1-2.2-.2-4.7.2-5,.3-.2,2.4.1,4.6,0,5.5-.3,14.2-.8,15.3,0,.5.4.2,2.9.4,5.3.3,4,.7,9,.8,12.5.1,3.4-.5,9.5-.8,14.2-.2,2.5,0,5.4-.3,5.6-.2.2-2-.1-4,0-1.4.1-4.1.6-5.8.6-5.5,0-9.1.5-10.1-.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M876.6,176.1c0-.2,0-.4,0-.7,0-4.4.4-8.1.6-11.2,0-1.2.2-2.3.3-3.4,0-.9,0-1.9,0-2.7,0-1.5,0-2.2.3-2.5.2-.2.6-.1,1.7,0,.9,0,1.9.1,3.1,0h0c7.5-.4,14.3-.8,15.3,0,.4.3.4,1.2.4,2.9,0,.8,0,1.7,0,2.6.3,3.7.7,8.9.8,12.5.1,2.8-.3,7.5-.6,11.5,0,.9-.2,1.8-.2,2.7,0,1,0,2.1-.1,3.1,0,1.9,0,2.6-.4,2.8-.2.1-.5.1-1.3,0-.7,0-1.8,0-2.8,0-.5,0-1.1.1-1.8.2-1.4.2-2.9.4-4.1.4-1.6,0-3,0-4.2,0-3.3,0-5.3.1-6.1-.8h0c-.2-.2-.2-.9-.3-2.8,0-.8,0-1.9-.2-3.1,0-.8-.1-1.7-.2-2.7-.2-2.8-.4-6-.4-9ZM878,159.6c0,.4,0,.9,0,1.4,0,1-.2,2.2-.3,3.4-.2,3-.6,6.8-.6,11.1,0,3.2.2,6.6.4,9.6,0,1,.1,1.9.2,2.7,0,1.2.1,2.3.2,3.1,0,1.2.1,2.3.2,2.5.6.7,2.7.7,5.7.6,1.2,0,2.7,0,4.2,0,1.1,0,2.7-.2,4-.4.7,0,1.3-.2,1.8-.2,1.1-.1,2.1,0,2.9,0,.4,0,.9,0,1,0,0-.2,0-1.3.1-2.3,0-1,0-2.1.1-3.1,0-.9.1-1.7.2-2.7.3-4.1.7-8.7.6-11.5-.1-3.6-.5-8.7-.8-12.4,0-.9,0-1.8,0-2.7,0-1.1,0-2.3-.2-2.5-1-.7-10.1-.2-15,0h0c-1.1,0-2.3,0-3.1,0-.6,0-1.3,0-1.4,0,0,.2,0,1.2,0,2.1,0,.4,0,.9,0,1.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M848.6,101.9c-2.8.2-40.1-.9-41.8.9-1.7,1.9-2.1,101.8.5,102.3,2.6.5,47.2.9,48.7-.7.8-.9,3.4-31.4,1.2-58.8-1.8-23-8.5-43.7-8.5-43.7Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M805.2,154.4c0-.8,0-1.6,0-2.4,0-19.2.4-48.2,1.4-49.3,1.2-1.3,16.4-1.3,33.4-1.1,4.4,0,7.9,0,8.6,0h.2s0,.2,0,.2c0,.2,6.7,21,8.5,43.7,2.2,27-.3,57.9-1.2,59-.7.8-8.8,1.2-24.1,1.2-11.1,0-23.4-.2-24.8-.4-.2,0-.4-.3-.4-.5-1.2-3.4-1.6-28.8-1.6-50.5ZM848.5,102.2c-1.1,0-4.2,0-8.5,0-10.3-.1-31.8-.4-33,.9-.7,1.1-1.3,24-1.3,51,0,29.5.7,49.9,1.7,50.9,2.6.5,46.9.8,48.4-.6.7-1.2,3.3-31.8,1.1-58.6-1.7-21.5-7.8-41.3-8.4-43.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M881.4,131.6c.4-.6,1.2-1,1.8-.5.5.5.4,1.3.7,1.7,4.7,7.2,5.5,11.7,5.5,13.4s.5,2.6.7,3.2c.4,1-.6,1.1-1.8.8-1.2-.2-2.9,1-4.8,2.4-1.9,1.4-5.1,1.1-6.2,2.1-1.2,1-1.5,1.4-2.1,1.2-.6-.3-.7-.8-.8-1.8-.1-1-4.5-7.7-4.5-10.6s-.5-4.7-1.3-5.7c-.8-1-.1-1.9.9-1.5,1,.4,2.8-1.5,4.7-2.3,1.1-.5,6.4-1.1,7.2-2.4Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M868.1,136.9c0-.2,0-.4.2-.6.3-.4.8-.5,1.4-.3.5.2,1.4-.4,2.4-1.1.7-.4,1.4-.9,2.1-1.2.4-.2,1.1-.3,2.1-.5,1.8-.4,4.5-1,5-1.8h0c.3-.4.7-.8,1.2-.8.4,0,.7,0,1,.3.4.3.5.8.6,1.2,0,.2.1.5.2.6,5.1,7.7,5.5,12.3,5.5,13.5s.4,2.2.6,2.8c0,.1,0,.2.1.4.1.4.1.7,0,1-.3.4-1,.4-2,.2-1-.2-2.6.9-4.3,2.1l-.3.2c-1.1.8-2.5,1-3.7,1.3-1,.2-2,.4-2.5.8-.2.2-.4.3-.6.5-.7.7-1.1,1-1.8.7-.7-.3-.8-1-.9-2,0-.3-.6-1.4-1.2-2.5-1.4-2.6-3.3-6.2-3.3-8.2s-.4-4.5-1.2-5.5c-.3-.4-.4-.7-.4-1ZM881.6,131.7c-.6,1-3.2,1.6-5.3,2-.9.2-1.6.4-2,.5-.7.3-1.4.7-2,1.2-1.1.7-2.1,1.4-2.8,1.1-.4-.1-.7,0-.8.1-.2.2,0,.6.2,1,.9,1.2,1.3,3.1,1.3,5.8s1.9,5.5,3.2,7.9c.8,1.5,1.2,2.3,1.3,2.7.1,1,.2,1.4.6,1.6.3.1.5,0,1.2-.6.2-.1.3-.3.6-.5.6-.5,1.6-.7,2.7-.9,1.2-.2,2.5-.5,3.5-1.2l.3-.2c1.9-1.3,3.5-2.4,4.7-2.2,1.2.2,1.5,0,1.5,0,0-.1,0-.3,0-.5,0,0,0-.2-.1-.3-.3-.6-.6-1.6-.6-3s-.4-5.6-5.4-13.2c-.1-.2-.2-.5-.3-.8,0-.3-.2-.7-.4-.9-.2-.1-.4-.2-.6-.2-.3,0-.6.3-.8.6h0Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M853.7,206.4c-.1,0-.3,0-.4-.1-.5-.2-.8-.3-1-.6-.5-.7-.2-4.4.5-10.1,0-.1,0-.3,0-.4.3-2.9.7-6.3,1-10.1,0-.1,0-.3,0-.4.3-2.8.5-5.9.7-9.1,0-.1,0-.3,0-.4.2-2.9.3-6,.4-9.1,0-.1,0-.3,0-.4,0-2.8,0-5.7,0-8.6,0-.1,0-.3,0-.4,0-2.2-.2-4.5-.3-6.8,0-.9-.1-1.8-.2-2.7,0-.1,0-.3,0-.4-.2-3-.5-5.9-.9-8.7,0-.1,0-.3,0-.4-.4-3.3-.8-6.4-1.3-9.4,0-.1,0-.3,0-.4-.5-3.5-1.1-6.8-1.6-9.7,0-.1,0-.3,0-.4-.6-3.3-1.1-6.2-1.4-8.6,0-.1,0-.3,0-.4-.7-4.9-.8-7.8.4-7.9.6,0,1.6-.1,2.9-.2.1,0,.3,0,.4,0,5.4-.3,14.5-.4,16-.1.8.2,1.5,2.7,2.1,6.9,0,.1,0,.3,0,.4.3,2.3.6,5.1.9,8.3,0,.1,0,.3,0,.4.2,2.8.5,6,.7,9.3,0,.1,0,.3,0,.4.2,2.7.3,5.6.4,8.5,0,.1,0,.3,0,.4.2,3.3.3,6.7.4,10.1,0,.1,0,.3,0,.4,0,3.3.2,6.6.3,9.9,0,.1,0,.3,0,.4,0,2.8,0,5.6.1,8.4v.4c0,3.4,0,6.8,0,10v.4c0,3.8,0,7.4-.1,10.8,0,.1,0,.3,0,.4,0,3.6-.2,6.9-.4,9.7,0,.1,0,.3,0,.4-.3,5.6-.8,9.1-1.5,9.3-1.9.6-6.2,1-10.3,1.1-.1,0-.3,0-.4,0-2.9,0-5.7,0-7.4-.5Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M848.3,103.4c0-1.2.2-1.9.5-2.3.2-.2.4-.4.7-.4.6,0,1.5-.1,2.9-.2.1,0,.3,0,.4,0,5.2-.3,14.5-.5,16.1-.1.6.1,1.4,1,2.3,7.1v.2c0,0,0,.1,0,.2.3,2.2.6,5,.9,8.3,0,0,0,.1,0,.2,0,0,0,.1,0,.2.2,2.7.5,5.7.7,9.3v.4c.2,2.7.3,5.5.5,8.5,0,.1,0,.3,0,.4.2,3.2.3,6.6.4,10.1,0,0,0,.1,0,.2v.2c.1,3.9.2,7,.3,9.9v.2c0,0,0,.1,0,.2,0,2.8,0,5.6.1,8.4v.4c0,3.4,0,6.8,0,10v.4c0,3.8,0,7.5-.1,10.8h0c0,0,0,.1,0,.2v.2c0,3.6-.2,6.9-.4,9.7v.4c-.6,9.1-1.4,9.4-1.7,9.5-1.9.6-6.1,1-10.4,1.2h-.2c0,0-.2,0-.2,0-3.3,0-5.9,0-7.4-.5h-.2c0,0-.2,0-.3-.1-.6-.2-.9-.4-1.1-.6-.6-.7-.3-3.7.4-10.2h0c0-.2,0-.3,0-.4v-.6c.4-2.8.7-6,1-9.6v-.4c.3-3,.5-6.1.7-9.1v-.4c.2-3.2.3-6.2.4-9.1h0c0,0,0-.1,0-.2v-.2c0-3.1,0-5.9,0-8.6,0-.1,0-.3,0-.4,0-2.3-.2-4.5-.3-6.8,0-.6,0-1.2-.1-1.8v-1.2c-.3-3-.6-5.9-1-8.7,0-.2,0-.3,0-.4-.3-2.9-.7-5.9-1.3-9.4,0,0,0-.1,0-.2v-.2c-.6-3.6-1.1-6.9-1.6-9.7l-.5-2.7c-.4-2.4-.8-4.5-1-6.3,0-.2,0-.3,0-.4-.4-2.4-.5-4.2-.5-5.4ZM873.6,173.2c0-2.8,0-5.6,0-8.4v-.4c0-2.7,0-5.5-.1-8.4,0,0,0-.1,0-.2v-.2c0-2.9-.1-6.1-.3-9.9v-.4c-.1-3.5-.3-6.9-.4-10.1,0-.1,0-.3,0-.4-.1-3-.3-5.8-.4-8.5v-.4c-.2-3.6-.5-6.6-.7-9.3,0,0,0-.1,0-.2,0,0,0-.1,0-.2-.3-3.2-.6-6-.9-8.3,0,0,0-.1,0-.2v-.2c-.9-5.8-1.6-6.6-1.9-6.6-1.5-.3-10.7-.1-16,.1-.1,0-.3,0-.4,0-1.4,0-2.3.1-2.9.2-.2,0-.3,0-.4.2-.7.9-.3,4.2.2,7.4,0,.1,0,.3,0,.4.3,1.9.6,3.9,1,6.3l.5,2.7c.5,2.8,1,6.1,1.6,9.7,0,0,0,.1,0,.2,0,0,0,.1,0,.2.5,3.5.9,6.5,1.3,9.4,0,.1,0,.3,0,.4.3,2.8.6,5.7.9,8.7v1.2c.1.6.2,1.2.2,1.8.2,2.3.3,4.5.3,6.8,0,.1,0,.3,0,.4,0,2.7,0,5.5,0,8.6h0c0,0,0,.1,0,.2v.2c0,2.9-.2,5.9-.4,9.1v.4c-.2,3-.4,6.1-.7,9.1v.4c-.4,3.6-.7,6.8-1,9.6v.6c0,.1,0,.2,0,.3h0c-.5,4.7-1,9.4-.5,10,.1.2.4.3.9.5,0,0,.1,0,.2,0h.2c1.5.4,4.1.6,7.3.5h.2c0,0,.2,0,.2,0,4.1-.1,8.4-.6,10.2-1.1.1,0,.8-.7,1.3-9v-.4c.2-2.8.3-6.1.4-9.7v-.4c0-3.3.1-6.9.1-10.8v-.4c0-.5,0-1.1,0-1.6Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <path d="M849.1,109.3c0-.1,0-.3,0-.4.9-.2,1.9-.4,2.8-.6.1,0,.3,0,.4,0h0c3.2-.6,6.4-1.1,9.6-1.3.1,0,.3,0,.4,0,2.9-.1,5.7,0,8.5.5,0,.1,0,.3,0,.4-2.8-.5-5.7-.7-8.5-.5-.1,0-.3,0-.4,0-3.3.2-6.5.7-9.7,1.3-.1,0-.3,0-.4,0-.9.2-1.9.4-2.8.6Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M850.6,118.2c0-.1,0-.3,0-.4.9,0,1.7-.1,2.6-.2.1,0,.3,0,.4,0,3.3-.2,6.7-.5,10-.7.1,0,.3,0,.4,0,2.6-.2,5.2-.5,7.9-.7,0,.1,0,.3,0,.4-2.6.3-5.2.5-7.8.7-.1,0-.3,0-.4,0-3.3.3-6.6.5-10,.7-.1,0-.3,0-.4,0-.9,0-1.8.1-2.6.2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M852.3,128.3c0-.1,0-.3,0-.4,1.1,0,2.3,0,3.4-.2h.4c2.8-.2,5.6-.5,8.5-.8.1,0,.3,0,.4,0,2.6-.3,5.1-.7,7.7-1.1,0,.1,0,.3,0,.4-2.5.4-5.1.8-7.7,1.1-.1,0-.3,0-.4,0-2.8.3-5.6.6-8.4.8-.1,0-.3,0-.4,0-1.1,0-2.3.1-3.4.2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M853.6,138.1c0-.1,0-.3,0-.4,1.3,0,2.6-.2,3.9-.3.1,0,.2,0,.4,0,2.4-.2,4.7-.5,7-.9.1,0,.3,0,.4,0,2.6-.4,5.2-1,7.8-1.6,0,.1,0,.3,0,.4-2.6.6-5.2,1.2-7.8,1.7-.1,0-.3,0-.4,0-2.3.4-4.6.7-7,.9-.1,0-.2,0-.4,0-1.3.1-2.6.2-3.9.3Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M856.8,147.2c-.8,0-1.5,0-2.3,0,0-.1,0-.3,0-.4.9,0,1.8,0,2.8,0s.8,0,1.2,0c.1,0,.3,0,.4,0,1.3,0,2.7,0,4-.2.7,0,1.4-.1,2.1-.2.1,0,.3,0,.4,0,2.7-.3,5.4-.7,8.1-1.2,0,.1,0,.3,0,.4-2.7.5-5.4.9-8.1,1.2-.1,0-.3,0-.4,0-.7,0-1.5.1-2.2.2-1.3,0-2.6.1-3.9.2-.1,0-.3,0-.4,0-.5,0-1.1,0-1.6,0Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M855,157.1c0-.1,0-.3,0-.4,1.2,0,2.4,0,3.6-.1.1,0,.3,0,.4,0,1.9,0,3.9-.2,5.8-.3.1,0,.3,0,.4,0,2.8-.2,5.7-.4,8.5-.6,0,.1,0,.3,0,.4-2.8.2-5.7.5-8.5.6-.1,0-.3,0-.4,0-1.9.1-3.9.2-5.8.3-.1,0-.3,0-.4,0-1.2,0-2.4.1-3.6.1Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M855,166.1c0-.1,0-.3,0-.4.3,0,.7,0,1,0,.8,0,1.5-.1,2.3-.2h0c.1,0,.3,0,.4,0,1.2,0,2.5-.2,3.7-.3.8,0,1.5-.1,2.3-.2.1,0,.3,0,.4,0,2.9-.2,5.8-.4,8.8-.6v.4c-2.9.2-5.8.4-8.8.6-.1,0-.3,0-.4,0-.7,0-1.5.1-2.3.2-1.3,0-2.5.2-3.8.3-.1,0-.3,0-.4,0-.8,0-1.5.1-2.3.2-.3,0-.7,0-1,0Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M865.1,175.9c-.1,0-.3,0-.4,0-.5,0-1.1,0-1.6,0-1.8,0-3.5,0-5.3-.1-.1,0-.3,0-.4,0-.9,0-1.9,0-2.8,0,0-.1,0-.3,0-.4.9,0,1.9,0,2.8,0,.1,0,.3,0,.4,0,1.7,0,3.4,0,5,.1.6,0,1.2,0,1.8,0h.4c2.9,0,5.9,0,8.8-.7v.4c-2.9.7-5.8.7-8.8.7Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M865.2,186.3c-.1,0-.3,0-.4,0-2.7-.1-5.4-.4-8.1-.8-.1,0-.3,0-.4,0-.8-.1-1.6-.2-2.4-.4,0-.1,0-.3,0-.4.8.1,1.6.3,2.4.4.1,0,.3,0,.4,0,2.7.4,5.4.6,8.1.8.1,0,.3,0,.4,0,2.8.1,5.7.2,8.5,0,0,.1,0,.3,0,.4-2.8.1-5.7,0-8.5,0Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M868.9,196.5c-1.5,0-2.9,0-4.4,0-.1,0-.3,0-.4,0-1.9,0-3.7-.1-5.6-.2-1.1,0-2.2-.1-3.3-.2-.1,0-.3,0-.4,0-.7,0-1.4-.2-2-.3,0-.1,0-.3,0-.4.7.1,1.4.2,2,.3.1,0,.3,0,.4,0,.1,0,.2,0,.3,0,2.1.2,4.2.3,6.3.4.8,0,1.5,0,2.3,0,.1,0,.3,0,.4,0,2.9,0,5.9,0,8.8,0,0,.1,0,.3,0,.4-1.5,0-3,0-4.5,0Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M861.1,206.9c1.5-3.3,2.4-6.8,3-10.4,0-.1,0-.3,0-.4.4-2.5.5-5,.6-7.6,0-.7,0-1.5,0-2.2,0-.1,0-.3,0-.4,0-3.3,0-6.7,0-10,0-.1,0-.3,0-.4,0-2.6,0-5.2,0-7.9,0-.7,0-1.5,0-2.2,0-.1,0-.3,0-.4,0-2.8,0-5.6.1-8.4,0-.1,0-.3,0-.4,0-3.1,0-6.2.1-9.3,0-.1,0-.3,0-.4,0-.4,0-.8,0-1.2,0-2.8,0-5.6,0-8.4,0-.1,0-.3,0-.4,0-3-.2-6-.3-9.1,0-.1,0-.3,0-.4,0-1.3-.2-2.7-.3-4-.2-1.9-.3-3.8-.6-5.7,0-.1,0-.3,0-.4-.4-3.2-.9-6.4-1.5-9.6,0-.1,0-.3,0-.4-.4-2-.9-4-1.4-6.1,0-.3.3-.4.4-.1.2.9.5,1.8.7,2.7.3,1.1.5,2.3.8,3.4,0,.1,0,.3,0,.4.6,3.2,1.1,6.3,1.5,9.6,0,.1,0,.3,0,.4.3,2.8.6,5.5.8,8.3,0,.5,0,.9,0,1.4,0,.1,0,.3,0,.4.2,3,.3,6,.3,9,0,.1,0,.3,0,.4,0,3.2,0,6.4,0,9.6,0,.1,0,.3,0,.4,0,.4,0,.9,0,1.3,0,2.7,0,5.4-.1,8.1,0,.1,0,.3,0,.4,0,2.8,0,5.6-.1,8.4,0,.1,0,.3,0,.4,0,1.8,0,3.6,0,5.3s0,3.2,0,4.7c0,.1,0,.3,0,.4,0,3.3.1,6.7.1,10,0,.1,0,.3,0,.4,0,1.7,0,3.4-.2,5.1,0,1.5-.3,3.1-.5,4.6,0,.1,0,.3,0,.4-.5,3.6-1.4,7.1-2.9,10.4-.1,0-.3,0-.4,0Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M853.7,206.4c-.1,0-.3,0-.4-.1.3-1.9.5-3.7.8-5.6.2-1.6.5-3.2.7-4.8,0-.1,0-.3,0-.4.3-2,.6-4,.8-6,.2-1.4.4-2.7.5-4.1,0-.1,0-.3,0-.4.4-3.1.8-6.2,1.1-9.4,0-.1,0-.3,0-.4.3-2.8.5-5.7.7-8.5,0-.3,0-.6,0-.9,0-.1,0-.3,0-.4h0c.2-2.8.3-5.7.3-8.5,0-.1,0-.3,0-.4,0-3.1,0-6.2-.2-9.3,0-.1,0-.3,0-.4,0-.8,0-1.6-.2-2.4-.2-2.2-.4-4.4-.7-6.6,0-.1,0-.3,0-.4-.2-1.4-.4-2.8-.7-4.2-.3-1.7-.7-3.4-1.1-5.1,0-.1,0-.3,0-.4-.4-1.8-.9-3.6-1.3-5.5-.4-1.4-.7-2.8-1-4.2,0-.1,0-.3,0-.4-.4-2-.8-4-1-6.1-.1-1-.2-1.9-.2-2.9,0-.1,0-.3,0-.4,0-2.5,0-5,.5-7.5.1,0,.3,0,.4,0-.1.9-.3,1.8-.3,2.7-.1,1.6-.2,3.2-.1,4.8,0,.1,0,.3,0,.4,0,2,.3,3.9.6,5.8.2,1.1.4,2.1.6,3.2,0,.1,0,.3,0,.4.5,2.3,1.1,4.7,1.7,7,.2.9.4,1.8.6,2.7,0,.1,0,.3,0,.4.7,3.1,1.3,6.1,1.7,9.2,0,.1,0,.3,0,.4.4,2.9.7,5.7.9,8.6,0,.1,0,.3,0,.4,0,.1,0,.3,0,.4.2,3.1.2,6.2.2,9.3v.4c0,2.8-.1,5.7-.3,8.5,0,.1,0,.3,0,.4,0,.8-.1,1.6-.2,2.5-.2,2.3-.4,4.7-.6,7,0,.1,0,.3,0,.4-.3,3.1-.7,6.3-1.1,9.4,0,.1,0,.3,0,.4-.2,1.5-.4,3-.6,4.5-.3,1.9-.5,3.7-.8,5.6,0,.1,0,.3,0,.4-.2,1.6-.5,3.3-.7,4.9-.3,1.8-.5,3.6-.8,5.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g id="Dining_Room_table" filter="url(#drop-shadow-4)">
                <g>
                  <path d="M293.9,719.4h5.1c2.3,0,4.3,1.9,4.3,4.3v3.6c0,2.3-1.9,4.3-4.3,4.3h-5.1c-2.3,0-4.3-1.9-4.3-4.3v-3.6c0-2.3,1.9-4.3,4.3-4.3Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M300.7,731.7h-8.7c-1.4,0-2.6-1.2-2.6-2.6v-7.2c0-1.4,1.2-2.6,2.6-2.6h8.7c1.4,0,2.6,1.2,2.6,2.6v7.2c0,1.4-1.2,2.6-2.6,2.6ZM292.1,719.5c-1.3,0-2.3,1-2.3,2.3v7.2c0,1.3,1,2.3,2.3,2.3h8.7c1.3,0,2.3-1,2.3-2.3v-7.2c0-1.3-1-2.3-2.3-2.3h-8.7Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M301.8,730.5c-3.7.6-7.4.6-11,0-1.1-.2-2,.9-2,2.3h0c0,1.1.6,2.1,1.5,2.3,3.9.9,7.9.9,12.1,0,.9-.2,1.5-1.1,1.5-2.3h0c0-1.4-.9-2.4-2-2.3Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M296.1,735.9c-2,0-4-.2-5.9-.7-.9-.2-1.6-1.2-1.6-2.4s.3-1.6.8-2c.4-.3.9-.5,1.4-.4,3.5.6,7.2.6,11,0h0c.5,0,1,0,1.3.4.5.5.8,1.2.8,2,0,1.2-.7,2.2-1.6,2.4-2.1.5-4.2.7-6.2.7ZM290.5,730.6c-.3,0-.6.1-.9.4-.5.4-.7,1.1-.7,1.8,0,1,.6,1.9,1.4,2.1,3.9.9,7.9.9,12,0,.8-.2,1.4-1.1,1.4-2.1s-.3-1.4-.7-1.8c-.3-.3-.7-.4-1.1-.3h0c-3.8.6-7.5.6-11.1,0,0,0-.1,0-.2,0Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="316" y="719.4" width="13.6" height="12.1" rx="4.3" ry="4.3" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M327.1,731.7h-8.7c-1.4,0-2.6-1.2-2.6-2.6v-7.2c0-1.4,1.2-2.6,2.6-2.6h8.7c1.4,0,2.6,1.2,2.6,2.6v7.2c0,1.4-1.2,2.6-2.6,2.6ZM318.5,719.5c-1.3,0-2.3,1-2.3,2.3v7.2c0,1.3,1,2.3,2.3,2.3h8.7c1.3,0,2.3-1,2.3-2.3v-7.2c0-1.3-1-2.3-2.3-2.3h-8.7Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M328.2,730.5c-3.7.6-7.4.6-11,0-1.1-.2-2,.9-2,2.3h0c0,1.1.6,2.1,1.5,2.3,3.9.9,7.9.9,12.1,0,.9-.2,1.5-1.1,1.5-2.3h0c0-1.4-.9-2.4-2-2.3Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M322.5,735.9c-2,0-4-.2-5.9-.7-.9-.2-1.6-1.2-1.6-2.4s.3-1.6.8-2c.4-.3.9-.5,1.4-.4,3.5.6,7.2.6,11,0,.5,0,1,0,1.3.4.5.5.8,1.2.8,2,0,1.2-.7,2.2-1.6,2.4-2.1.5-4.2.7-6.2.7ZM316.9,730.6c-.3,0-.6.1-.9.4-.5.4-.7,1.1-.7,1.8,0,1,.6,1.9,1.4,2.1,3.9.9,7.9.9,12,0,.8-.2,1.4-1.1,1.4-2.1s-.3-1.4-.7-1.8c-.3-.3-.7-.4-1.1-.3h0c-3.8.6-7.5.6-11.1,0,0,0-.1,0-.2,0Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M348.8,719.4h5.1c2.3,0,4.3,1.9,4.3,4.3v3.6c0,2.3-1.9,4.3-4.3,4.3h-5.1c-2.3,0-4.3-1.9-4.3-4.3v-3.6c0-2.3,1.9-4.3,4.3-4.3Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M355.7,731.7h-8.7c-1.4,0-2.6-1.2-2.6-2.6v-7.2c0-1.4,1.2-2.6,2.6-2.6h8.7c1.4,0,2.6,1.2,2.6,2.6v7.2c0,1.4-1.2,2.6-2.6,2.6ZM347,719.5c-1.3,0-2.3,1-2.3,2.3v7.2c0,1.3,1,2.3,2.3,2.3h8.7c1.3,0,2.3-1,2.3-2.3v-7.2c0-1.3-1-2.3-2.3-2.3h-8.7Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M356.7,730.5c-3.7.6-7.4.6-11,0-1.1-.2-2,.9-2,2.3h0c0,1.1.6,2.1,1.5,2.3,3.9.9,7.9.9,12.1,0,.9-.2,1.5-1.1,1.5-2.3h0c0-1.4-.9-2.4-2-2.3Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M351.1,735.9c-2,0-4-.2-5.9-.7-.9-.2-1.6-1.2-1.6-2.4s.3-1.6.8-2c.4-.3.9-.5,1.4-.4,3.5.6,7.2.6,11,0h0c.5,0,1,0,1.3.4.5.5.8,1.2.8,2,0,1.2-.7,2.2-1.6,2.4-2.1.5-4.2.7-6.2.7ZM345.4,730.6c-.3,0-.6.1-.9.4-.5.4-.7,1.1-.7,1.8,0,1,.6,1.9,1.4,2.1,3.9.9,7.9.9,12,0,.8-.2,1.4-1.1,1.4-2.1s-.3-1.4-.7-1.8c-.3-.3-.7-.4-1.1-.3h0c-3.8.6-7.5.6-11.1,0,0,0-.1,0-.2,0Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="376.1" y="719.4" width="13.6" height="12.1" rx="4.3" ry="4.3" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M387.3,731.7h-8.7c-1.4,0-2.6-1.2-2.6-2.6v-7.2c0-1.4,1.2-2.6,2.6-2.6h8.7c1.4,0,2.6,1.2,2.6,2.6v7.2c0,1.4-1.2,2.6-2.6,2.6ZM378.6,719.5c-1.3,0-2.3,1-2.3,2.3v7.2c0,1.3,1,2.3,2.3,2.3h8.7c1.3,0,2.3-1,2.3-2.3v-7.2c0-1.3-1-2.3-2.3-2.3h-8.7Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M388.3,730.5c-3.7.6-7.4.6-11,0-1.1-.2-2,.9-2,2.3h0c0,1.1.6,2.1,1.5,2.3,3.9.9,7.9.9,12.1,0,.9-.2,1.5-1.1,1.5-2.3h0c0-1.4-.9-2.4-2-2.3Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M382.6,735.9c-2,0-4-.2-5.9-.7-.9-.2-1.6-1.2-1.6-2.4s.3-1.6.8-2c.4-.3.9-.5,1.4-.4,3.5.6,7.2.6,11,0h0c.5,0,1,0,1.3.4.5.5.8,1.2.8,2,0,1.2-.7,2.2-1.6,2.4-2.1.5-4.2.7-6.2.7ZM377,730.6c-.3,0-.6.1-.9.4-.5.4-.7,1.1-.7,1.8,0,1,.6,1.9,1.4,2.1,3.9.9,7.9.9,12,0,.8-.2,1.4-1.1,1.4-2.1s-.3-1.4-.7-1.8c-.3-.3-.7-.4-1.1-.3h0c-3.8.6-7.5.6-11.1,0,0,0-.1,0-.2,0Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M292.2,656.2h5.1c2.3,0,4.3,1.9,4.3,4.3v4.3c0,2.3-1.9,4.3-4.3,4.3h-5.1c-2.3,0-4.3-1.9-4.3-4.3v-4.3c0-2.3,1.9-4.3,4.3-4.3Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M299,669.2h-8.7c-1.4,0-2.6-1.2-2.6-2.6v-7.9c0-1.4,1.2-2.6,2.6-2.6h8.7c1.4,0,2.6,1.2,2.6,2.6v7.9c0,1.4-1.2,2.6-2.6,2.6ZM290.4,656.4c-1.3,0-2.3,1-2.3,2.3v7.9c0,1.3,1,2.3,2.3,2.3h8.7c1.3,0,2.3-1,2.3-2.3v-7.9c0-1.3-1-2.3-2.3-2.3h-8.7Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M300.1,657.3c-3.7-.6-7.4-.6-11,0-1.1.2-2-.9-2-2.4h0c0-1.2.6-2.2,1.5-2.4,3.9-1,7.9-1,12.1,0,.9.2,1.5,1.2,1.5,2.4h0c0,1.5-.9,2.6-2,2.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M300.3,657.5c0,0-.2,0-.2,0-3.8-.6-7.5-.6-11,0-.5,0-.9,0-1.3-.4-.6-.5-.9-1.3-.9-2.2s.7-2.3,1.6-2.5c3.9-1,8-1,12.2,0,.9.2,1.6,1.3,1.6,2.5s-.3,1.7-.9,2.2c-.3.3-.7.4-1.1.4ZM294.4,656.7c1.9,0,3.8.2,5.7.5h0c.4,0,.7,0,1.1-.3.5-.4.8-1.1.8-1.9s-.6-2.1-1.4-2.3c-4.1-1-8.1-1-12,0-.8.2-1.4,1.1-1.4,2.3s.3,1.5.8,1.9c.3.3.7.4,1.1.3,1.8-.3,3.6-.4,5.4-.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M318.6,656.2h5.1c2.3,0,4.3,1.9,4.3,4.3v4.3c0,2.3-1.9,4.3-4.3,4.3h-5.1c-2.3,0-4.3-1.9-4.3-4.3v-4.3c0-2.3,1.9-4.3,4.3-4.3Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M325.4,669.2h-8.7c-1.4,0-2.6-1.2-2.6-2.6v-7.9c0-1.4,1.2-2.6,2.6-2.6h8.7c1.4,0,2.6,1.2,2.6,2.6v7.9c0,1.4-1.2,2.6-2.6,2.6ZM316.8,656.4c-1.3,0-2.3,1-2.3,2.3v7.9c0,1.3,1,2.3,2.3,2.3h8.7c1.3,0,2.3-1,2.3-2.3v-7.9c0-1.3-1-2.3-2.3-2.3h-8.7Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M326.5,657.3c-3.7-.6-7.4-.6-11,0-1.1.2-2-.9-2-2.4h0c0-1.2.6-2.2,1.5-2.4,3.9-1,7.9-1,12.1,0,.9.2,1.5,1.2,1.5,2.4h0c0,1.5-.9,2.6-2,2.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M326.7,657.5c0,0-.2,0-.2,0-3.8-.6-7.5-.6-11,0-.5,0-.9,0-1.3-.4-.6-.5-.9-1.3-.9-2.2s.7-2.3,1.6-2.5c3.9-1,8-1,12.2,0,.9.2,1.6,1.3,1.6,2.5s-.3,1.7-.9,2.2c-.3.3-.7.4-1.1.4ZM320.8,656.7c1.9,0,3.8.2,5.7.5h0c.4,0,.7,0,1.1-.3.5-.4.8-1.1.8-1.9s-.6-2.1-1.4-2.3c-4.1-1-8.1-1-12,0-.8.2-1.4,1.1-1.4,2.3s.3,1.5.8,1.9c.3.3.7.4,1.1.3,1.8-.3,3.6-.4,5.4-.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M347.1,656.2h5.1c2.3,0,4.3,1.9,4.3,4.3v4.3c0,2.3-1.9,4.3-4.3,4.3h-5.1c-2.3,0-4.3-1.9-4.3-4.3v-4.3c0-2.3,1.9-4.3,4.3-4.3Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M354,669.2h-8.7c-1.4,0-2.6-1.2-2.6-2.6v-7.9c0-1.4,1.2-2.6,2.6-2.6h8.7c1.4,0,2.6,1.2,2.6,2.6v7.9c0,1.4-1.2,2.6-2.6,2.6ZM345.3,656.4c-1.3,0-2.3,1-2.3,2.3v7.9c0,1.3,1,2.3,2.3,2.3h8.7c1.3,0,2.3-1,2.3-2.3v-7.9c0-1.3-1-2.3-2.3-2.3h-8.7Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M355,657.3c-3.7-.6-7.4-.6-11,0-1.1.2-2-.9-2-2.4h0c0-1.2.6-2.2,1.5-2.4,3.9-1,7.9-1,12.1,0,.9.2,1.5,1.2,1.5,2.4h0c0,1.5-.9,2.6-2,2.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M355.2,657.5c0,0-.2,0-.2,0-3.8-.6-7.5-.6-11,0-.5,0-.9,0-1.3-.4-.6-.5-.9-1.3-.9-2.2s.7-2.3,1.6-2.5c3.9-1,8-1,12.2,0,.9.2,1.6,1.3,1.6,2.5s-.3,1.7-.9,2.2c-.3.3-.7.4-1.1.4ZM349.3,656.7c1.9,0,3.8.2,5.7.5h0c.4,0,.7,0,1.1-.3.5-.4.8-1.1.8-1.9s-.6-2.1-1.4-2.3c-4.1-1-8.1-1-12,0-.8.2-1.4,1.1-1.4,2.3s.3,1.5.8,1.9c.3.3.7.4,1.1.3,1.8-.3,3.6-.4,5.4-.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M378.7,656.2h5.1c2.3,0,4.3,1.9,4.3,4.3v4.3c0,2.3-1.9,4.3-4.3,4.3h-5.1c-2.3,0-4.3-1.9-4.3-4.3v-4.3c0-2.3,1.9-4.3,4.3-4.3Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M385.6,669.2h-8.7c-1.4,0-2.6-1.2-2.6-2.6v-7.9c0-1.4,1.2-2.6,2.6-2.6h8.7c1.4,0,2.6,1.2,2.6,2.6v7.9c0,1.4-1.2,2.6-2.6,2.6ZM376.9,656.4c-1.3,0-2.3,1-2.3,2.3v7.9c0,1.3,1,2.3,2.3,2.3h8.7c1.3,0,2.3-1,2.3-2.3v-7.9c0-1.3-1-2.3-2.3-2.3h-8.7Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M386.6,657.3c-3.7-.6-7.4-.6-11,0-1.1.2-2-.9-2-2.4h0c0-1.2.6-2.2,1.5-2.4,3.9-1,7.9-1,12.1,0,.9.2,1.5,1.2,1.5,2.4h0c0,1.5-.9,2.6-2,2.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M386.8,657.5c0,0-.2,0-.2,0-3.8-.6-7.5-.6-11,0-.5,0-.9,0-1.3-.4-.6-.5-.9-1.3-.9-2.2s.7-2.3,1.6-2.5c3.9-1,8-1,12.2,0,.9.2,1.6,1.3,1.6,2.5s-.3,1.7-.9,2.2c-.3.3-.7.4-1.1.4ZM380.9,656.7c1.9,0,3.8.2,5.7.5h0c.4,0,.7,0,1.1-.3.5-.4.8-1.1.8-1.9s-.6-2.1-1.4-2.3c-4.1-1-8.1-1-12,0-.8.2-1.4,1.1-1.4,2.3s.3,1.5.8,1.9c.3.3.7.4,1.1.3,1.8-.3,3.6-.4,5.4-.4Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M402.6,672.5v42.3c0,4.3-3.7,7.7-8.2,7.7h-111.7c-4.5,0-8.2-3.5-8.2-7.7v-42.3c0-4.3,3.7-7.7,8.2-7.7h111.7c4.5,0,8.2,3.5,8.2,7.7Z" fill="#fff" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M394.4,722.6h-111.7c-4.6,0-8.3-3.5-8.3-7.9v-42.3c0-4.3,3.7-7.9,8.3-7.9h111.7c4.6,0,8.3,3.5,8.3,7.9v42.3c0,4.3-3.7,7.9-8.3,7.9ZM282.7,664.9c-4.4,0-8,3.4-8,7.6v42.3c0,4.2,3.6,7.6,8,7.6h111.7c4.4,0,8-3.4,8-7.6v-42.3c0-4.2-3.6-7.6-8-7.6h-111.7Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="274.5" y="685.6" width="128" height="17.2" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M402.7,702.9h-128.3v-17.5h128.3v17.5ZM274.7,702.6h127.8v-16.9h-127.8v16.9Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <polygon points="302.9 712.5 295.2 719.8 287.5 712.5 295.2 705.2 302.9 712.5" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M295.2,720l-7.9-7.5,8-7.6,7.9,7.5-8,7.6ZM287.7,712.5l7.5,7.1,7.6-7.2-7.5-7.1-7.6,7.2Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <ellipse cx="295.2" cy="712.5" rx="4.7" ry="4.5" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M295.2,717.1c-2.7,0-4.9-2.1-4.9-4.6s2.2-4.6,4.9-4.6,4.9,2.1,4.9,4.6-2.2,4.6-4.9,4.6ZM295.2,708.2c-2.5,0-4.6,1.9-4.6,4.3s2.1,4.3,4.6,4.3,4.6-1.9,4.6-4.3-2.1-4.3-4.6-4.3Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M298.2,712.5c0,1.6-1.4,2.9-3,2.9s-3-1.3-3-2.9,1.4-2.9,3-2.9,3,1.3,3,2.9Z" fill="#fff" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M295.2,715.5c-1.8,0-3.2-1.4-3.2-3s1.4-3,3.2-3,3.2,1.4,3.2,3-1.4,3-3.2,3ZM295.2,709.8c-1.6,0-2.9,1.2-2.9,2.7s1.3,2.7,2.9,2.7,2.9-1.2,2.9-2.7-1.3-2.7-2.9-2.7Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <polygon points="329.9 712.5 322.2 719.8 314.5 712.5 322.2 705.2 329.9 712.5" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M322.2,720l-7.9-7.5,8-7.6,7.9,7.5-8,7.6ZM314.7,712.5l7.5,7.1,7.6-7.2-7.5-7.1-7.6,7.2Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <ellipse cx="322.2" cy="712.5" rx="4.7" ry="4.5" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M322.2,717.1c-2.7,0-4.9-2.1-4.9-4.6s2.2-4.6,4.9-4.6,4.9,2.1,4.9,4.6-2.2,4.6-4.9,4.6ZM322.2,708.2c-2.5,0-4.6,1.9-4.6,4.3s2.1,4.3,4.6,4.3,4.6-1.9,4.6-4.3-2.1-4.3-4.6-4.3Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M325.2,712.5c0,1.6-1.4,2.9-3,2.9s-3-1.3-3-2.9,1.4-2.9,3-2.9,3,1.3,3,2.9Z" fill="#fff" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M322.2,715.5c-1.8,0-3.2-1.4-3.2-3s1.4-3,3.2-3,3.2,1.4,3.2,3-1.4,3-3.2,3ZM322.2,709.8c-1.6,0-2.9,1.2-2.9,2.7s1.3,2.7,2.9,2.7,2.9-1.2,2.9-2.7-1.3-2.7-2.9-2.7Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <polygon points="359.1 712.5 351.3 719.8 343.6 712.5 351.4 705.2 359.1 712.5" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M351.3,720l-7.9-7.5,8-7.6,7.9,7.5-8,7.6ZM343.8,712.5l7.5,7.1,7.6-7.2-7.5-7.1-7.6,7.2Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <ellipse cx="351.4" cy="712.5" rx="4.7" ry="4.5" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M351.4,717.1c-2.7,0-4.9-2.1-4.9-4.6s2.2-4.6,4.9-4.6,4.9,2.1,4.9,4.6-2.2,4.6-4.9,4.6ZM351.4,708.2c-2.5,0-4.6,1.9-4.6,4.3s2.1,4.3,4.6,4.3,4.6-1.9,4.6-4.3-2.1-4.3-4.6-4.3Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M354.4,712.5c0,1.6-1.4,2.9-3,2.9s-3-1.3-3-2.9,1.4-2.9,3-2.9,3,1.3,3,2.9Z" fill="#fff" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M351.4,715.5c-1.8,0-3.2-1.4-3.2-3s1.4-3,3.2-3,3.2,1.4,3.2,3-1.4,3-3.2,3ZM351.4,709.8c-1.6,0-2.9,1.2-2.9,2.7s1.3,2.7,2.9,2.7,2.9-1.2,2.9-2.7-1.3-2.7-2.9-2.7Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <polygon points="390.6 712.5 382.8 719.8 375.1 712.5 382.9 705.2 390.6 712.5" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M382.8,720l-7.9-7.5,8-7.6,7.9,7.5-8,7.6ZM375.3,712.5l7.5,7.1,7.6-7.2-7.5-7.1-7.6,7.2Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <ellipse cx="382.8" cy="712.5" rx="4.7" ry="4.5" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M382.8,717.1c-2.7,0-4.9-2.1-4.9-4.6s2.2-4.6,4.9-4.6,4.9,2.1,4.9,4.6-2.2,4.6-4.9,4.6ZM382.8,708.2c-2.5,0-4.6,1.9-4.6,4.3s2.1,4.3,4.6,4.3,4.6-1.9,4.6-4.3-2.1-4.3-4.6-4.3Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M385.9,712.5c0,1.6-1.4,2.9-3,2.9s-3-1.3-3-2.9,1.4-2.9,3-2.9,3,1.3,3,2.9Z" fill="#fff" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M382.8,715.5c-1.8,0-3.2-1.4-3.2-3s1.4-3,3.2-3,3.2,1.4,3.2,3-1.4,3-3.2,3ZM382.8,709.8c-1.6,0-2.9,1.2-2.9,2.7s1.3,2.7,2.9,2.7,2.9-1.2,2.9-2.7-1.3-2.7-2.9-2.7Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <polygon points="302.9 675.5 295.2 682.8 287.5 675.5 295.2 668.2 302.9 675.5" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M295.2,683l-7.9-7.5,8-7.6,7.9,7.5-8,7.6ZM287.7,675.5l7.5,7.1,7.6-7.2-7.5-7.1-7.6,7.2Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M299.9,675.5c0,2.5-2.1,4.5-4.7,4.5s-4.7-2-4.7-4.5,2.1-4.5,4.7-4.5,4.7,2,4.7,4.5Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M295.2,680.1c-2.7,0-4.9-2.1-4.9-4.6s2.2-4.6,4.9-4.6,4.9,2.1,4.9,4.6-2.2,4.6-4.9,4.6ZM295.2,671.2c-2.5,0-4.6,1.9-4.6,4.3s2.1,4.3,4.6,4.3,4.6-1.9,4.6-4.3-2.1-4.3-4.6-4.3Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M298.2,675.5c0,1.6-1.4,2.9-3,2.9s-3-1.3-3-2.9,1.4-2.9,3-2.9,3,1.3,3,2.9Z" fill="#fff" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M295.2,678.5c-1.8,0-3.2-1.4-3.2-3s1.4-3,3.2-3,3.2,1.4,3.2,3-1.4,3-3.2,3ZM295.2,672.8c-1.6,0-2.9,1.2-2.9,2.7s1.3,2.7,2.9,2.7,2.9-1.2,2.9-2.7-1.3-2.7-2.9-2.7Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <polygon points="329.9 675.5 322.2 682.8 314.5 675.5 322.2 668.2 329.9 675.5" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M322.2,683l-7.9-7.5,8-7.6,7.9,7.5-8,7.6ZM314.7,675.5l7.5,7.1,7.6-7.2-7.5-7.1-7.6,7.2Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M326.9,675.5c0,2.5-2.1,4.5-4.7,4.5s-4.7-2-4.7-4.5,2.1-4.5,4.7-4.5,4.7,2,4.7,4.5Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M322.2,680.1c-2.7,0-4.9-2.1-4.9-4.6s2.2-4.6,4.9-4.6,4.9,2.1,4.9,4.6-2.2,4.6-4.9,4.6ZM322.2,671.2c-2.5,0-4.6,1.9-4.6,4.3s2.1,4.3,4.6,4.3,4.6-1.9,4.6-4.3-2.1-4.3-4.6-4.3Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M325.2,675.5c0,1.6-1.4,2.9-3,2.9s-3-1.3-3-2.9,1.4-2.9,3-2.9,3,1.3,3,2.9Z" fill="#fff" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M322.2,678.5c-1.8,0-3.2-1.4-3.2-3s1.4-3,3.2-3,3.2,1.4,3.2,3-1.4,3-3.2,3ZM322.2,672.8c-1.6,0-2.9,1.2-2.9,2.7s1.3,2.7,2.9,2.7,2.9-1.2,2.9-2.7-1.3-2.7-2.9-2.7Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <polygon points="359.1 675.5 351.3 682.8 343.6 675.5 351.4 668.2 359.1 675.5" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M351.3,683l-7.9-7.5,8-7.6,7.9,7.5-8,7.6ZM343.8,675.5l7.5,7.1,7.6-7.2-7.5-7.1-7.6,7.2Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M356.1,675.5c0,2.5-2.1,4.5-4.7,4.5s-4.7-2-4.7-4.5,2.1-4.5,4.7-4.5,4.7,2,4.7,4.5Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M351.4,680.1c-2.7,0-4.9-2.1-4.9-4.6s2.2-4.6,4.9-4.6,4.9,2.1,4.9,4.6-2.2,4.6-4.9,4.6ZM351.4,671.2c-2.5,0-4.6,1.9-4.6,4.3s2.1,4.3,4.6,4.3,4.6-1.9,4.6-4.3-2.1-4.3-4.6-4.3Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M354.4,675.5c0,1.6-1.4,2.9-3,2.9s-3-1.3-3-2.9,1.4-2.9,3-2.9,3,1.3,3,2.9Z" fill="#fff" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M351.4,678.5c-1.8,0-3.2-1.4-3.2-3s1.4-3,3.2-3,3.2,1.4,3.2,3-1.4,3-3.2,3ZM351.4,672.8c-1.6,0-2.9,1.2-2.9,2.7s1.3,2.7,2.9,2.7,2.9-1.2,2.9-2.7-1.3-2.7-2.9-2.7Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <polygon points="390.6 675.5 382.8 682.8 375.1 675.5 382.9 668.2 390.6 675.5" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M382.8,683l-7.9-7.5,8-7.6,7.9,7.5-8,7.6ZM375.3,675.5l7.5,7.1,7.6-7.2-7.5-7.1-7.6,7.2Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M387.6,675.5c0,2.5-2.1,4.5-4.7,4.5s-4.7-2-4.7-4.5,2.1-4.5,4.7-4.5,4.7,2,4.7,4.5Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M382.8,680.1c-2.7,0-4.9-2.1-4.9-4.6s2.2-4.6,4.9-4.6,4.9,2.1,4.9,4.6-2.2,4.6-4.9,4.6ZM382.8,671.2c-2.5,0-4.6,1.9-4.6,4.3s2.1,4.3,4.6,4.3,4.6-1.9,4.6-4.3-2.1-4.3-4.6-4.3Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M385.9,675.5c0,1.6-1.4,2.9-3,2.9s-3-1.3-3-2.9,1.4-2.9,3-2.9,3,1.3,3,2.9Z" fill="#fff" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M382.8,678.5c-1.8,0-3.2-1.4-3.2-3s1.4-3,3.2-3,3.2,1.4,3.2,3-1.4,3-3.2,3ZM382.8,672.8c-1.6,0-2.9,1.2-2.9,2.7s1.3,2.7,2.9,2.7,2.9-1.2,2.9-2.7-1.3-2.7-2.9-2.7Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M336.9,691.3c-2.2-3.4-4.5-2.5-6.1-1.7-2.6,1.2-3.1,3.1-3.1,3.1,0,0,2.6.1,3.3,1.4.7,1.2,4.4,2.4,5.2.6.8-1.9,1.5-2.1.7-3.3Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M334.3,695.7c-1.4,0-3-.8-3.5-1.6-.6-1.2-3.1-1.3-3.2-1.3h-.2s0-.2,0-.2c0,0,.5-2,3.1-3.2,1.4-.7,4-1.9,6.3,1.8h0c.6,1,.4,1.4,0,2.2-.2.3-.4.7-.6,1.3-.3.7-.9,1-1.8,1.1,0,0,0,0-.1,0ZM327.9,692.5c.6,0,2.6.3,3.2,1.4.4.8,2.1,1.5,3.4,1.4.5,0,1.3-.2,1.6-.9.2-.5.5-1,.6-1.3.4-.8.6-1.1,0-1.9h0c-2-3.2-4.1-2.5-5.9-1.7-2,1-2.7,2.4-2.9,2.8Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M340.3,694c1.2,1.2,3.6,1.1,4.8-.2,1.2-1.3,1.3-3.1,2.3-3.2,0,0-1.5-1.4-3.7-1.2-2.2.1-3.1.6-4,1.5-.9.9-.5,2.1.6,3.2Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M342.5,695c-.9,0-1.8-.3-2.3-.9-1.2-1.3-1.5-2.5-.6-3.4.9-.9,1.8-1.4,4.1-1.6,2.2-.1,3.8,1.2,3.8,1.3l.2.2h-.3c-.5.1-.7.7-1.1,1.3-.3.6-.6,1.3-1.2,1.9-.6.7-1.6,1.1-2.6,1.1,0,0,0,0,0,0ZM344,689.5c0,0-.2,0-.3,0-2.2.1-3.1.6-3.9,1.5-1,1,0,2.3.6,3h0c.5.5,1.3.8,2.2.8.9,0,1.9-.4,2.4-1,.5-.6.8-1.2,1.1-1.8.3-.6.6-1.2,1-1.4-.5-.3-1.6-1-3.1-1Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M338.3,692.8c-2.8.2-5-2.6-1.8-4.4,1.7-1,2.7-3.8,2.7-3.8,0,0,2.5,2.5,2.8,3.6.8,3.1-.8,4.4-1.8,4.7-1,.3-1.2-.9-1.2-.9,0,0,0,.8-.7.8Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M340,693c-.2,0-.4,0-.5-.2-.2-.1-.3-.3-.4-.4-.1.2-.3.5-.7.5h0c-1.6.1-3.1-.7-3.5-1.9-.3-1,.3-2,1.6-2.8,1.7-1,2.6-3.7,2.7-3.7v-.2c0,0,.2.2.2.2.1.1,2.6,2.5,2.9,3.6.8,3.3-.9,4.6-1.9,4.9-.1,0-.2,0-.3,0ZM339.2,691.9s0,.5.4.7c.2.1.4.1.6,0,1-.3,2.4-1.5,1.7-4.5-.2-.9-2.1-2.8-2.6-3.3-.3.7-1.2,2.8-2.7,3.7-1.2.7-1.7,1.5-1.4,2.4.3,1.1,1.7,1.8,3.2,1.7h0c.6,0,.6-.7.6-.7h.3Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M339.4,694c-2,0-2.9,1-2.9,2.3s1.9,3.2,4.7,3.7c1.4.2,2.5.3,2.5.3,0,0,0-1.5.4-3.1.5-2.1-.8-3.6-2.3-4-1.5-.4-2.3.8-2.3.8Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M343.9,700.5h-.2s-1-.2-2.5-.4c-2.9-.4-4.9-2.3-4.9-3.8s.2-1.3.7-1.8c.5-.5,1.3-.7,2.3-.7.2-.3,1-1.1,2.4-.8,1.6.4,3,2,2.4,4.2-.4,1.6-.4,3.1-.4,3.1v.2ZM339.2,694.1c-.9,0-1.5.2-2,.6-.4.4-.6.9-.6,1.6,0,1.3,1.9,3.1,4.6,3.5,1.1.2,2,.3,2.3.3,0-.4,0-1.7.4-3,.5-2-.8-3.4-2.2-3.8-1.4-.4-2.1.7-2.2.7h0c0,0,0,0,0,0,0,0-.1,0-.2,0Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M333.5,693.4c1.9-1.3,2.5-1.4,4-.7.5.2.2,2.2.2,2.2,0,0,2.5,1.4,1.1,3-1.4,1.6-9.7-.9-8.6-1.2,1.1-.2,2.5-2.7,3.4-3.3Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M336.8,698.6c-2.1,0-5.1-.8-6.3-1.3-.5-.2-.6-.4-.6-.5,0,0,0-.2.2-.2.6-.1,1.4-1.1,2.1-1.9.4-.6.9-1.1,1.2-1.4h0c1.9-1.4,2.6-1.5,4.2-.7.5.2.3,1.7.3,2.2.3.2,1.3.9,1.5,1.8,0,.5,0,.9-.4,1.4-.4.4-1.1.6-2.1.6ZM330.3,696.8c.6.4,3.7,1.3,6.1,1.4,1.2,0,1.9-.1,2.3-.5.3-.4.4-.8.4-1.1-.2-.9-1.4-1.6-1.4-1.7h0s0-.1,0-.1c.1-.9.2-1.9,0-2-1.5-.7-2-.6-3.9.7h0c-.3.2-.7.7-1.2,1.3-.7.9-1.4,1.8-2.1,2Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <path d="M339.1,692.1h-.3c.7-1.6.9-3.1.8-4.7h.3c.2,1.7,0,3.2-.8,4.7Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M333,696.4l-.2-.2c1.5-.9,3.1-1.4,4.8-1.5v.3c-1.7,0-3.2.5-4.7,1.5Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M342.3,697.9c-.6-1.5-1.5-2.7-2.9-3.8l.2-.2c1.4,1.1,2.4,2.4,3,3.9h-.3Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g id="Living_Room" filter="url(#drop-shadow-5)">
                <g>
                  <rect x="835.2" y="636" width="26.1" height="32" rx="3" ry="3" transform="translate(1500.2 -196.3) rotate(90)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M832.1,663.2v-22.4c0-1.1.9-2,2-2h28.4c1.1,0,2,.9,2,2v22.4c0,1.1-.9,2-2,2h-28.4c-1.1,0-2-.9-2-2ZM864.1,640.8c0-.9-.8-1.7-1.7-1.7h-28.4c-.9,0-1.7.8-1.7,1.7v22.4c0,.9.8,1.7,1.7,1.7h28.4c.9,0,1.7-.8,1.7-1.7v-22.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="835.1" y="662" width="26.1" height="32" rx="3" ry="3" transform="translate(1526.2 -170.2) rotate(90)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M832,689.2v-22.4c0-1.1.9-2,2-2h28.4c1.1,0,2,.9,2,2v22.4c0,1.1-.9,2-2,2h-28.4c-1.1,0-2-.9-2-2ZM864,666.8c0-.9-.8-1.7-1.7-1.7h-28.4c-.9,0-1.7.8-1.7,1.7v22.4c0,.9.8,1.7,1.7,1.7h28.4c.9,0,1.7-.8,1.7-1.7v-22.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="835" y="688.1" width="26.1" height="32" rx="3" ry="3" transform="translate(1552.1 -143.9) rotate(90)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M831.9,715.3v-22.4c0-1.1.9-2,2-2h28.4c1.1,0,2,.9,2,2v22.4c0,1.1-.9,2-2,2h-28.4c-1.1,0-2-.9-2-2ZM863.9,692.9c0-.9-.8-1.7-1.7-1.7h-28.4c-.9,0-1.7.8-1.7,1.7v22.4c0,.9.8,1.7,1.7,1.7h28.4c.9,0,1.7-.8,1.7-1.7v-22.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M844.1,626.6h4.1c1.2,0,2.2,1,2.2,2.2v20c0,1.2-1,2.2-2.2,2.2h-4.1c-1.2,0-2.2-1-2.2-2.2v-20c0-1.2,1-2.2,2.2-2.2Z" transform="translate(1485 -207.3) rotate(90)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M833.8,641.8v-5.9c0-.8.7-1.5,1.5-1.5h21.7c.8,0,1.5.7,1.5,1.5v5.9c0,.8-.7,1.5-1.5,1.5h-21.7c-.8,0-1.5-.7-1.5-1.5ZM858.2,635.9c0-.7-.5-1.2-1.2-1.2h-21.7c-.7,0-1.2.5-1.2,1.2v5.9c0,.7.5,1.2,1.2,1.2h21.7c.7,0,1.2-.5,1.2-1.2v-5.9Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M844.1,704.9h4.1c1.2,0,2.2,1,2.2,2.2v20c0,1.2-1,2.2-2.2,2.2h-4.1c-1.2,0-2.2-1-2.2-2.2v-20c0-1.2,1-2.2,2.2-2.2Z" transform="translate(1563.3 -129) rotate(90)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M833.8,720.1v-5.9c0-.8.7-1.5,1.5-1.5h21.7c.8,0,1.5.7,1.5,1.5v5.9c0,.8-.7,1.5-1.5,1.5h-21.7c-.8,0-1.5-.7-1.5-1.5ZM858.2,714.2c0-.7-.5-1.2-1.2-1.2h-21.7c-.7,0-1.2.5-1.2,1.2v5.9c0,.7.5,1.2,1.2,1.2h21.7c.7,0,1.2-.5,1.2-1.2v-5.9Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="820.2" y="673.6" width="81.3" height="9.3" rx="2.3" ry="2.3" transform="translate(1539.1 -182.5) rotate(90)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M856,717.5v-78.5c0-.9.7-1.6,1.6-1.6h6.5c.9,0,1.6.7,1.6,1.6v78.5c0,.9-.7,1.6-1.6,1.6h-6.5c-.9,0-1.6-.7-1.6-1.6ZM865.3,639c0-.7-.6-1.2-1.2-1.2h-6.5c-.7,0-1.2.6-1.2,1.2v78.5c0,.7.6,1.2,1.2,1.2h6.5c.7,0,1.2-.6,1.2-1.2v-78.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <circle cx="851.4" cy="671.6" r=".7" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M850.6,671.6c0-.5.4-.8.8-.8s.8.4.8.8-.4.8-.8.8-.8-.4-.8-.8ZM851.9,671.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5.2.5.5.5.5-.2.5-.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M851.4,684.8c-.4,0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M850.6,684.1c0-.5.4-.8.8-.8s.8.4.8.8-.4.8-.8.8-.8-.4-.8-.8ZM851.9,684.1c0-.3-.2-.5-.5-.5s-.5.2-.5.5.2.5.5.5.5-.2.5-.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <circle cx="839.2" cy="671.6" r=".7" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M838.3,671.6c0-.5.4-.8.8-.8s.8.4.8.8-.4.8-.8.8-.8-.4-.8-.8ZM839.7,671.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5.2.5.5.5.5-.2.5-.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <circle cx="839.2" cy="684.3" r=".7" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M838.3,684.3c0-.5.4-.8.8-.8s.8.4.8.8-.4.8-.8.8-.8-.4-.8-.8ZM839.7,684.3c0-.3-.2-.5-.5-.5s-.5.2-.5.5.2.5.5.5.5-.2.5-.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M844.5,679.2c-.4,0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M843.7,678.5c0-.5.4-.8.8-.8s.8.4.8.8-.4.8-.8.8-.8-.4-.8-.8ZM845.1,678.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5.2.5.5.5.5-.2.5-.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M851.4,697.3c-.4,0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M850.6,696.6c0-.5.4-.8.8-.8s.8.4.8.8-.4.8-.8.8-.8-.4-.8-.8ZM851.9,696.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5.2.5.5.5.5-.2.5-.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M851.4,709.7c-.4,0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M850.6,709c0-.5.4-.8.8-.8s.8.4.8.8-.4.8-.8.8-.8-.4-.8-.8ZM851.9,709c0-.3-.2-.5-.5-.5s-.5.2-.5.5.2.5.5.5.5-.2.5-.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M839.2,697.3c-.4,0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M838.3,696.6c0-.5.4-.8.8-.8s.8.4.8.8-.4.8-.8.8-.8-.4-.8-.8ZM839.7,696.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5.2.5.5.5.5-.2.5-.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <circle cx="839.2" cy="709.2" r=".7" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M838.3,709.2c0-.5.4-.8.8-.8s.8.4.8.8-.4.8-.8.8-.8-.4-.8-.8ZM839.7,709.2c0-.3-.2-.5-.5-.5s-.5.2-.5.5.2.5.5.5.5-.2.5-.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M844.5,704.1c-.4,0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M843.7,703.4c0-.5.4-.8.8-.8s.8.4.8.8-.4.8-.8.8-.8-.4-.8-.8ZM845.1,703.4c0-.3-.2-.5-.5-.5s-.5.2-.5.5.2.5.5.5.5-.2.5-.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <circle cx="851.4" cy="647.4" r=".7" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M850.6,647.4c0-.5.4-.8.8-.8s.8.4.8.8-.4.8-.8.8-.8-.4-.8-.8ZM851.9,647.4c0-.3-.2-.5-.5-.5s-.5.2-.5.5.2.5.5.5.5-.2.5-.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M851.4,660.6c-.4,0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M850.6,659.9c0-.5.4-.8.8-.8s.8.4.8.8-.4.8-.8.8-.8-.4-.8-.8ZM851.9,659.9c0-.3-.2-.5-.5-.5s-.5.2-.5.5.2.5.5.5.5-.2.5-.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <circle cx="839.2" cy="647.4" r=".7" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M838.3,647.4c0-.5.4-.8.8-.8s.8.4.8.8-.4.8-.8.8-.8-.4-.8-.8ZM839.7,647.4c0-.3-.2-.5-.5-.5s-.5.2-.5.5.2.5.5.5.5-.2.5-.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M839.2,660.8c-.4,0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M838.3,660.1c0-.5.4-.8.8-.8s.8.4.8.8-.4.8-.8.8-.8-.4-.8-.8ZM839.7,660.1c0-.3-.2-.5-.5-.5s-.5.2-.5.5.2.5.5.5.5-.2.5-.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M844.5,654.9c-.4,0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M843.7,654.2c0-.5.4-.8.8-.8s.8.4.8.8-.4.8-.8.8-.8-.4-.8-.8ZM845.1,654.2c0-.3-.2-.5-.5-.5s-.5.2-.5.5.2.5.5.5.5-.2.5-.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
              </g>
              <g id="Bedroom_2" filter="url(#drop-shadow-6)">
                <g>
                  <path d="M301.5,1028.8h55.6c2.3,0,4.2,1.9,4.2,4.2v100.7c0,.4-.4.8-.8.8h-62.1c-.6,0-1-.5-1-1v-100.5c0-2.3,1.9-4.2,4.2-4.2Z" transform="translate(658.6 2163.4) rotate(180)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M298.1,1028.6h62.1c.7,0,1.3.6,1.3,1.3v100.5c0,2.5-2,4.5-4.5,4.5h-55.6c-2.5,0-4.5-2-4.5-4.5v-100.7c0-.6.5-1,1-1ZM357.1,1134.3c2.2,0,4-1.8,4-4v-100.5c0-.4-.4-.8-.8-.8h-62.1c-.3,0-.5.2-.5.5v100.7c0,2.2,1.8,4,4,4h55.6Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="295.5" y="1129.7" width="67.8" height="9.3" rx="2.6" ry="2.6" transform="translate(658.9 2268.7) rotate(180)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M298.2,1129.4h62.6c1.6,0,2.9,1.3,2.9,2.9v4.1c0,1.6-1.3,2.9-2.9,2.9h-62.6c-1.6,0-2.9-1.3-2.9-2.9v-4.1c0-1.6,1.3-2.9,2.9-2.9ZM360.7,1138.7c1.3,0,2.4-1.1,2.4-2.4v-4.1c0-1.3-1.1-2.4-2.4-2.4h-62.6c-1.3,0-2.4,1.1-2.4,2.4v4.1c0,1.3,1.1,2.4,2.4,2.4h62.6Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M362,1086.1c.4-4.8.9-33.3.4-37.3-.5-3.9,1.8-16.1-.2-15.9-1.9.2-27.2-1.5-33-2.1-5.8-.7-18.4-2.1-22.3-3-3.9-.8-10.4-.5-10.8.8-.4,1.3-.2,55.3.5,58.5.7,3.1,65.4-1,65.4-1Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M302,1027.1c1.8,0,3.6.2,5,.5,4.3.9,19.3,2.6,22.2,3,5.8.7,31.1,2.3,33,2.1.2,0,.4,0,.5.2.8.8.6,3.8.2,8.6-.2,2.8-.5,5.8-.3,7.3.5,4,0,32.5-.4,37.3v.2s-.2,0-.2,0c-.2,0-16.4,1-32.4,1.7-32.7,1.3-33.1-.3-33.2-.9-.6-2.5-1-56.7-.5-58.6.3-1,3.1-1.5,6.1-1.5ZM361.8,1033.1c-3.9,0-26.9-1.5-32.7-2.1-3-.3-18-2-22.3-3-4.2-.9-10.2-.4-10.5.6-.2.7-.2,13.7-.1,28.5,0,13.4.3,28.2.7,29.8.1.4,2.9,1.7,32.8.5,15-.6,30.1-1.5,32.1-1.6.4-5.4.9-33.1.3-37-.2-1.6,0-4.6.3-7.4.3-3.6.6-7.6,0-8.2,0,0,0,0-.1,0,0,0-.2,0-.4,0Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M295.5,1085.1c.5-.6,13.3,1.2,23.2,1.1,20.4-.1,43-.9,44.7-.6,1.3.3,1.2,4.4,1.3,8.4,0,3.7.3,7.1-.8,8.2-2.2,2.1-65.2,2.2-67.8-.7-1.2-1.3-1-4.5-1.1-7.6-.1-3.9-.3-7.8.6-8.8Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M296.5,1084.7c1,0,2.8.1,6.1.4,4.6.4,10.8.9,16.2.8,9.5,0,19.5-.3,27.5-.4,9.4-.2,16.2-.3,17.2-.1,1.4.3,1.4,3.7,1.5,7.6v1c0,.5,0,1.1,0,1.6,0,3.2.1,5.8-.9,6.8-1.6,1.6-29.5,1.9-47.5,1.4-8.8-.3-19.5-.8-20.7-2.1-1-1.1-1.1-3.6-1.2-6.2,0-.5,0-1,0-1.5-.2-4.1-.3-7.9.7-9h0c.1-.1.4-.2,1.1-.2ZM318.2,1086.4c-5.3,0-11.3-.5-15.7-.9-3.3-.3-6.4-.5-6.8-.3-.8,1-.7,5-.6,8.6,0,.5,0,1,0,1.5,0,2.5.1,4.9,1,5.9.3.3,2.6,1.4,20.3,1.9,20.8.6,45.9,0,47.1-1.2.8-.8.8-3.5.7-6.4,0-.5,0-1.1,0-1.6v-1c0-3.1,0-6.9-1.1-7.1-.9-.2-8,0-17.1.1-8,.2-18,.4-27.6.4-.2,0-.3,0-.5,0Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M352.1,1125.6c2-3.7.1-15.7,0-17.6-.6-8-44.5-3.7-45.9-1.3-1.2,2.1-1.4,19.7,1.2,20.5,1.3.4,12.6,1.4,23.1,1.2,10.7-.1,20.8-1.4,21.6-2.9Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M333.6,1103.1c5,0,9.7.3,13.1,1.1,3.6.8,5.5,2.1,5.6,3.8,0,.3,0,.8.2,1.5.5,3.9,1.6,13-.2,16.2-1,1.8-11.9,2.9-21.8,3-10.5.1-21.8-.8-23.2-1.2-.4-.1-.8-.6-1.1-1.4-1.6-4.2-1.3-17.7-.3-19.5.9-1.5,15.2-3.5,27.7-3.5ZM328.5,1128.2c.7,0,1.4,0,2.1,0,12-.2,20.7-1.5,21.4-2.7h0c1.7-3.1.6-12.1.1-15.9,0-.7-.1-1.2-.2-1.5-.1-1.5-1.9-2.6-5.2-3.4-12.6-2.9-39.4.6-40.3,2.1-1,1.8-1.3,15,.3,19.1.3.8.6,1,.8,1.1,1.3.4,11.2,1.2,21,1.2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
              </g>
              <g id="People_at_Bar" >
                <g>
                  <path d="M539.9,281.1c-.7.2-1.3.5-1.9.9-1.4.9-2.4,2.2-2.9,3.8-.3,1-.4,2-.3,3.1.1,1.5.7,2.9,1.7,4,.9,1.1,2.1,1.9,3.5,2.3,2.4.7,4.7.3,6.7-1.3,1.4-1.1,2.3-2.5,2.6-4.3.4-2.2,0-4.3-1.5-6.1-.9-1.1-2.1-1.9-3.4-2.4-.8-.3-1.7-.4-2.6-.3-.4,0-.8,0-1.2.1-.2,0-.3,0-.4.2,0,0-.2.1-.2,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M539.9,329.2c-.8-.1-1.6,0-2.4.2-1.6.4-2.9,1.3-3.9,2.5-.8,1-1.3,2.2-1.5,3.5-.3,1.6,0,3.2.8,4.6,1,1.9,2.6,3.1,4.8,3.6,1.5.4,2.9.3,4.3-.3,0,0,.2,0,.3,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M531.3,292.8c.4.3.6.2.8-.2.2-.3.4-.6.5-.8,0-.2.2-.3.4-.3.2-.1.4-.4.5-.6.3-.5.4-1.1.4-1.7,0-.9,0-1.8,0-2.7,0-.8,0-1.7.1-2.5.2-1.5.4-3,.3-4.6,0-1.4-.3-2.8-.9-4.1,0-.2-.2-.3-.3-.5-.5-.6-1.1-.6-2-.3-.9.3-1.4.9-2,1.6-.6.7-1.1,1.5-1.6,2.3,0,.1-3,4.4-3.6,5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M516.9,313.3c-.6.4-1.2.9-1.9,1.1-1,.3-1.4,1.1-1.6,2.2,0,.2,0,.5-.1.7,0,0,0,.1,0,.2.2.5,0,1-.2,1.4-.2.3-.3.6-.5.9-.3.5-.2.9.2,1.3.3.4.6.7.8,1.1.3.6.4,1.3.5,1.9,0,.5.2,1,.5,1.4.3.5.8.9,1.3,1.1.5.3.9.7,1.3,1.2.3.4.7.6,1.1.6.6,0,1.1.2,1.6.4,1.1.3,2.1.1,2.9-.7.5-.5,1.1-.9,1.8-1,0,0,.2,0,.2-.1.6-.6,1.2-1.2,2-1.6.6-.3.9-.9,1.1-1.6.2-.8.5-1.6,1.1-2.2.3-.3.4-.7.3-1.1-.1-.4,0-.8,0-1.1" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M527.6,317.6c-.5.4-.2.9,0,1.4,0,.3.2.7.3,1,0,.2,0,.4-.1.7-.2.8-.3,1.7-.6,2.5-.6,1.4-1.6,2.5-2.9,3.3-.8.5-1.8.9-2.7,1.1-1.1.2-2.2,0-3.2-.4-.3-.1-.6-.3-.8-.4" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M542.1,332.2c-.2.3-.1.7-.2,1-.2,1.2,0,2.4,0,3.7,0,.9-.1,1.9-.2,2.8,0,.2-.1.3-.3.3-.2,0-.3,0-.3-.2-.2-.3-.1-.7-.2-1-.2-1-.1-2,0-3,0-.5.2-1,.4-1.4,0-.1,0-.3,0-.5,0-.6.1-1.1,0-1.7,0-.4,0-.8,0-1.2,0-.4,0-.8,0-1.2,0-.3,0-.6,0-.9,0-.3.2-.4.6-.4.3,0,.4.1.5.4,0,.3,0,.6,0,.8,0,.2,0,.3.2.4,2.1,1,3.4,2.7,3.9,4.9.3,1.3.2,2.5-.1,3.8-.4,1.4-1.2,2.6-2.4,3.6,0,0,0,0-.2.1-.2,0-.2.2-.2.4,0,.4,0,.8,0,1.1-.1.5-.4.6-.8.5-.2,0-.3-.2-.3-.4,0-.3,0-.6.1-.9.3-.7.5-1.4.7-2.2,0-.2.1-.4.3-.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M513.1,313.7c-.2-.1-.4,0-.7,0-1.3.4-2.4,1.2-3.1,2.4-.1.2-.3.3-.3.6,0,.3,0,.6,0,.9.2,1.2.5,2.4,1,3.6.4.8.9,1.5,1.4,2.2,1.1,1.3,1.9,2.8,2.8,4.3.3.5.5.9.8,1.3.1.2.2.4.2.6,0,.3.2.5.3.7.5.9,1,1.9,1.7,2.8.9,1.2,2.1,2,3.5,2.3.4,0,.8.1,1.1,0,.3,0,.7,0,1,.2.2.1.5.1.7.2,0,0,0,0,.1,0,.9.2,2.6.3,3.5.3.8,0,1.5,0,2.3,0,.3,0,.5,0,.8,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M541.3,331.6c-.3,0-.6-.1-.8-.2-1-.3-1.9-.1-2.8.2-1.6.6-2.7,1.7-3.2,3.4-.4,1.5-.2,2.8.5,4.2.1.2.2.3.4.4" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M539.9,283.4c-1.4.7-2.3,1.7-2.8,3.2-.6,1.9-.2,3.6,1.2,5.1.4.4.9.8,1.4,1,0,0,.1.1.2.2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M529.7,314.3c-.3.2-.7,0-1,0-.6,0-1.2-.2-1.8,0-.4,0-.9.2-1.3.3-.2,0-.3,0-.5,0-.8-.1-1.6-.3-2.5-.2,0,0-.1,0-.1,0-.4.3-.9.3-1.3.4-.8.2-1.5.5-2.3.8-1,.4-1.9.9-2.6,1.7-.8.9-1.3,2-1.6,3.2-.2,1-.1,1.9.2,2.8,0,0,0,.1.1.1" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M539.3,277.8c-.1-.2-.4-.3-.6-.3-.8-.2-1.6-.5-2.5-.8-.2,0-.4,0-.6,0-.3,0-.4.2-.4.5,0,.2,0,.4.3.5.3.2.6.2,1,.2.6,0,1.3,0,1.9,0,.5,0,1,0,1.4,0,.3,0,.6.1.9.2.2,0,.5,0,.7.1,0,0,0,0,0,0,.3-.2.8-.1,1.1-.3.5-.4,1.2-.1,1.5.4,0,0,0,.2.2.3,0,0,0,.2,0,.2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M522.9,309.8c-.2-.6-.6-.8-1.1-.9-.7-.2-1.3.2-1.8.6-.2.2-.4.3-.6.2-1.1,0-2.1-.1-3.2-.1-1.2,0-2.3,0-3.4.6-.4.2-.8.3-.9.7" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M534.7,309.9c0-.3-.3-.4-.6-.5-.2,0-.3,0-.4-.2-.3-.4-.7-.5-1.1-.5-.7-.1-1.4-.2-2.1-.1-.8,0-1.7.3-2.4.8-.7.5-1.4.7-2.3.7-.8,0-1.5,0-2.3,0-.2,0-.4,0-.6,0-.2,0-.4,0-.7,0-.7,0-1.3,0-2-.1-.2,0-.3,0-.5-.2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M532,300.7c.3-.2.5,0,.8,0,.3,0,.5,0,.8-.2,1-.4,1.9,0,2.6.6.3.2.6.5.8.9.3.6.3,1.1-.2,1.5-1.1.9-2.8,1.3-4.2.5-.5-.3-1.1-.5-1.6-.9-.1,0-.2-.1-.4-.1" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M524.3,316.4c-.4.3-.9.7-1.4,1-1,.7-1.8,1.7-2.5,2.7-.6.9-1.3,1.7-2.4,2.1,0,0,0,0-.1,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M547,287c.3.4.3.9.1,1.4,0,.2-.2.4-.1.6.1.6-.2,1-.4,1.4-.7,1.4-1.9,2.3-3.5,2.7-.4,0-.8.1-1.2.1-.2,0-.4-.2-.6-.2-.4,0-.8,0-1.2,0,0,0,0,0-.1,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M521.1,288.8c0,.2.2.2.3.3,1.5.7,2.5,1.8,3.4,3.1.5.7,1,1.4,1.4,2.2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M539.9,283.3c.2-.2.6-.2.9-.2,2.6-.7,5.3.7,6.2,3.3,0,.2,0,.4,0,.6-.4-.2-.6-.7-.9-.9-.4.2-.5.6-.5,1,0,.4,0,.8.5,1,.4-.3.5-.7.9-1" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M524.1,314.4c0-.2,0-.3-.1-.4-.4-.6-1-1.1-1.7-1.3-.7-.2-1.3-.2-2,0-.9.1-1.9.4-2.8.4-.2,0-.3.1-.4.2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M517,331.2c.4.3.7.7,1,1,.8.7,1.8.9,2.9.8.4,0,.8-.1,1.2-.2.1,0,.3-.1.4-.2.2-.2.5-.1.7-.2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M517.7,293.2c.3-.4.3-.9,0-1.3-.2-.4-.2-.8-.2-1.2,0-.6.2-1.1.3-1.7,0-.4.3-.7.6-.9.3-.2.6-.6.8-.9.3-.5.7-.8,1-1.1.2-.2.5,0,.7-.2.8-.3,1.6-.5,2.5-.5.5,0,1.1.1,1.6.3,1,.3,1.7,1.1,2.4,1.9.4.5.8.9,1.1,1.5.2.5.4,1,.5,1.6,0,.2,0,.4.2.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M527.2,279c1.1-.2,1.8,0,2.7.7.5.3.9.7,1,1.4,0,.2.2.2.2.4,0,.3.1.5.1.8,0,.7,0,1.3,0,2,0,.7,0,1.3-.4,1.9-.1.2-.2.3-.4.4" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M522.6,332.5c-.2-.1-.3-.2-.5-.2-.9,0-1.8-.2-2.6-.4-.8-.2-1.5-.5-2.1-.9-.4-.2-.7-.5-1.1-.9-.2-.2-.4-.3-.5-.6-.1-.1-.2-.2-.4-.2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M528,332.1c-.3.1-.5.4-.8.6-1.2,1-2.7,1.6-4.1,2,0,0-.1,0-.2,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M516.2,312.8c0-.3,0-.5-.3-.7-.7-.7-1.6-1.1-2.6-1.1-.4,0-.7,0-1.1,0-.4,0-.8,0-1.3,0-.6,0-.9.3-1.2.7-.4.8-.8,1.7-.9,2.7,0,.5,0,1,0,1.5,0,.1,0,.2.1.3" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M529.4,323.1c-.4,0-.4.3-.6.6-.4.7-.4,1.5-.4,2.3,0,.6,0,1.2.1,1.8.1,1.1-.2,2-.5,3,0,0,0,.2,0,.2,0,.4-.2.5-.5.6-1.2.6-2.6.7-3.9.8,0,0-.3,0-.2-.1" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M529.7,322.8c1.3.7,1.6,1.5,1.5,3.1,0,.4-.1.9-.1,1.3" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M530.3,294c-.4.2-.3.5-.3.8-.1.6-.3,1.1-.4,1.7-.1.5-.5.6-.9.8-.1,0-.3-.1-.5,0-.4,0-.8.2-1.2.2-.9.2-1.7,0-2.6-.3-.3,0-.6-.2-.8-.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M529.2,291.7c0,0-.1.2-.2.3-.3.7-.7,1.4-1.3,1.9-.4.3-.8.4-1.2.5-.2,0-.3,0-.5.2-.6.5-1.1,1-1.7,1.5-.4.3-.8.6-1.3.5-.5,0-1-.2-1.5-.5-.6-.4-1.2-1-1.8-1.4-.1-.1-.2-.3-.5-.3" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M536.8,339.3c-.3,0-.1-.2-.1-.3,0-.2-.1-.3-.2-.4,0-.1-.2-.1-.3,0-.3,0-.6.5-.6.7-.2.7.3,1.1.7,1.4,1,.8,2.2,1.2,3.5,1.1,1.2,0,2.3-.5,3.2-1.3.2-.2.3-.3.6-.3" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M515.8,312.9c-.2-.6-.7-.5-1.1-.6-.9-.1-1.8,0-2.7.3-.1,0-.2,0-.4,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M544.9,335.9c.3.4.2.9-.1,1.3-.2.2-.3.4-.4.7-.1.3-.3.6-.4,1-.1.4-.1.8-.3,1.2,0,0,0,.1,0,.2.3.4.1.9.1,1.3,0,.3,0,.5,0,.8" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M518,292.6c0,0,.2.1.2.2.3.4.6.9.8,1.3.1.2.1.4.1.6,0,.7.3,1.4.6,2,0,.1.2.3.3.4.2.2.3.4.2.7,0,.5.1,1.1.4,1.5.4.7,1.1,1.1,1.9,1.2,0,0,.1,0,.2,0,.6-.2,1.1,0,1.7.3.3.1.6.3.9.3,0,0,.1,0,.2.1.2.3.5.3.9.3.3,0,.7,0,1,0,0,0,.2,0,.2,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M526.6,279.8c.3.1.7,0,1,.1,1.1.2,2.1.6,2.7,1.6,0,0,.1.2.2.3" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M530.4,312.4c.6.1,1.1-.2,1.7-.2.1,0,.3,0,.4,0,.2,0,.4,0,.6-.1.1,0,.3-.1.5,0,.2,0,.4,0,.7,0,.3,0,.4-.2.5-.4,0-.3-.1-.4-.4-.4-.5,0-1.1-.1-1.6-.2-.7,0-1.4,0-2.2,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M534.8,309.9s0,0,0,0c-.1.4-.4.3-.7.3-.5,0-1-.1-1.5-.2-.6,0-1.2-.1-1.8-.1-.1,0-.2,0-.3,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M530.9,281.2c-.3.3-.6.6-.6,1,0,.1,0,.3,0,.4,0,0,0,.2,0,.4,0,1,0,2,0,3,0,.2,0,.4,0,.6,0,.4-.4.7-.6,1,0,0,0,0,0,.1" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M531.8,289.4c-.2.5-.4,1-.6,1.4-.3.5-.3,1.1-.3,1.6,0,.2,0,.4-.1.5,0,.2-.1.3,0,.5,0,.1.1.3.1.5,0,1.1,0,2.2,0,3.4,0,.2,0,.4,0,.7" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M524.7,327.2c.2.2.4.1.6.2,1.1.1,2.1.3,3.2.4" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M533,312.1c0,0,0,.1,0,.1.3.3.3.5-.1.7-.8.4-1.5.8-2.3,1.2-.1,0-.2.2-.3.3" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M527.6,298.2c.3.3.3.6.3.9.2.9.5,1.7,1,2.5,0,0,0,0,0,.2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M537.2,339.2c0,0,0-.1,0-.2-.1-.2-.2-.4-.1-.6.2-.2.4-.4.7-.4.7,0,1.2.3,1.8.7-.2.5-.5,1.1-.7,1.6-.5-.2-1-.5-1.5-.7-.2,0-.1-.3,0-.4.3-.3.4-.7.5-1.1" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M533.6,309.1c-.4.2-.7,0-1,0-.7-.2-1.4,0-2.1,0-.1,0,0,.1,0,.2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M529.3,324.5c0-.3,0-.6.2-.8.3.3.3.7.4,1.1.1.7,0,1.4,0,2.1,0,0,0,.2,0,.2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M527.3,334.9c-.1,0-.2-.2-.4-.2-.2,0-.4,0-.6-.2-.3-.3-.6-.1-1,0-.7.3-1.5.6-2.3.8-.1,0-.2,0-.3.2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M532.5,277.3c-.2.1-.2.4-.3.6-.4.7-.7,1.5-1.1,2.2,0,.2-.2.3-.3.4" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M528.6,297.6c.3.3.6.5.9.8.3.2.4.5.5.8.3.7.6,1.4.9,2.1,0,.1.1.1.3.1" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M522.2,314.7c0,.1.3.2.4.2.8.2,1.2.7,1.6,1.3,0,.1.2.2.4.2,1,.2,1.9.5,2.4,1.4,0,.1.2.1.3.2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M528.8,285.4c-.7,0-1.2-.2-1.8-.6-.5-.4-1.1-.6-1.7-.8-.4-.1-.8-.3-1-.6-.1-.1-.3-.1-.4,0-.5.2-1,1.7-1.5,1.9-.4.2-.4.3-.9.3" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M526.6,314.5c.3.3.4.6.3,1,0,.5.2.9.4,1.3.4.8,1.1,1.5,1.8,2.2.4.4.8.7,1.2.9.2.1.3.4.4.7.2.3.3.6.4.9" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M544.7,336.3c0-.3.1-.7-.3-.9-.2,0-.3.2-.5.3-.4.3-.6.7-.5,1.2.1.3.3.6.3,1,0,0,0,.2.1.2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M528.3,297.9c.3.6.6,1.1.8,1.8.2.8.6,1.4.9,2.1" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M530.3,282.5c-.6.4-.9,1-1,1.7,0,.3-.2.6-.3.9,0,.2,0,.2,0,.4.2.4.3.8.4,1.2,0,.4.3.8.4,1.2.2.5,0,.9,0,1.3,0,.2,0,.3,0,.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M528.7,297.3c0,.3-.3.4-.6.5-.4.1-.7.3-.9.7,0,.2,0,.3,0,.4,0,.4.1.9.2,1.3.1.7.2,1.5.8,1.9.2.2.5.2.8.3.4,0,.8,0,1.2.2.1,0,.3-.2.5,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M517.5,290c-.6,0-1.1.4-1.3,1.2,0,.3-.2.7,0,.9" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M532.5,290.1c-.3.2-.3.5-.4.7-.3.6-.5,1.3-.8,1.9-.1.2-.3.4-.4.6,0,.1-.2,0-.4,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M517,313.2c-.1,0-.2-.1-.3-.2-.4-.2-.7-.2-1.1-.1-.5.1-.9.4-1.5.4-.4,0-.8.1-1,.4-.4.4-.9.6-1.3,1,0,0,0,0-.1,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M511.3,314.3c0,.2.2.4.3.5.2.1.1.3.2.5.4.6.8,1.3,1.1,2,0,.1.2.2.3.2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M527.4,298.1c-.4-.1-.7,0-1,.2-.6.3-1.2.6-1.8.9-.5.3-1,.4-1.6.4-.1,0-.3,0-.4,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M517.1,313.3c.1.2.3.1.5.2.3.1.6.3.8.5.4.4.9.7,1.2,1.2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M520.4,297.6c.5.2.8.6,1.1,1,.4.5.8,1,1.3,1.4.1,0,.2.2.3.4" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M545.3,286.4c-.4.2-.7.5-1.1.6-.1-.1-.3-.3-.6-.3,0,0,0,0-.1,0-.1-.3-.4-.4-.7-.5-.2-.1-.3,0-.4,0-.2.2-.2.6,0,1,.2.4.4.4.8.3.1,0,.3-.1.3-.3,0-.1,0-.3.1-.4" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M538,334.9c-.2,0-.3.1-.4.3-.3.3-.1.6.2.7.3,0,.5,0,.8,0,.1,0,.2-.2.4,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M530.4,329.9c-.2,0-.3,0-.4.1-.2.2-.5.3-.7.5-.1.1-.3.2-.2.5,0,0,0,.2-.1.3-.1.2-.2.4-.3.7-.1.3-.2.5-.5.7-.6.5-1.2,1-1.9,1.4,0,0-.1.1-.2.2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M541.5,278.3c.4.3.8.6,1.2.9.3.2.7.3,1.1,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M530.2,298.9c.4-.4.5-.4.8,0,.2.4.4.8.6,1.2.2.3.4.6.6,1,.1.3,0,.5-.2.7" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M542.5,329.9c-.2.3-.2.6-.3.9,0,.3-.1.7-.2,1,0,.2,0,.3.2.4.5.2.8.6,1.2,1,.2.3.4.6.6.9" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M529.7,332.8c.1.4,0,.7-.2,1.1-.2.5-.4,1-.7,1.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M515.1,313c-.1-.2-.3-.2-.5-.2-.6,0-1.1,0-1.7,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M540.8,339.4c0,0-.2,0-.2,0,0,0,0-.1-.1-.2-.2-.2-.4-.2-.6,0-.2.2-.3.4-.1.7.1.2.2.5,0,.7,0,0,0,.1,0,.2,0,.1,0,.2,0,.3" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M538.3,333.5c.3,0,.4.2.6.3.4,0,.6-.3.9-.5.2-.1.2-.3,0-.5-.4-.5-1.2-.5-1.7-.2-.2.1-.3.3-.2.5.3.3.2.5,0,.8-.1.3,0,.6,0,.9,0,0,.1.2.2.2.4,0,.8-.2,1.2-.3,0,0,.1-.2.1-.3" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M524,297c0,.3,0,.5.2.7.2.4.4.9.6,1.3" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M533.4,289.5c-.1.4-.4.8-.4,1.3,0,.2-.2.5,0,.7" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M542.3,291.7c.1.4.3.7.7.8.3.1.7,0,.8-.4" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M530.2,289.7c.1.5-.3,1.4-.8,1.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M545,290.5c-.1-.5,0-.8.4-1.1,0,0,.2-.1.3,0,.2,0,.4.4.4.7,0,.3-.2.4-.4.4-.3,0-.5.2-.8.1-.1,0-.3.1-.4.3,0,.2-.1.4-.3.6-.1.2-.3.2-.4,0-.1-.1-.3-.2-.5-.2-.4,0-.6-.4-.7-.7,0-.1-.1-.3-.4-.2-.2,0-.4,0-.6.2-.2.1-.2.3-.1.5.1.2.2.3.3.5,0,.2.4.3.6.2.2,0,.4-.2.5-.4" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M544.7,286.9c0,.2.2.2.2.4,0,.3,0,.6-.4.7-.3,0-.5.1-.8.2-.2,0-.5-.1-.4-.4,0-.2,0-.3,0-.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M530.5,288.4c0,.3,0,.6,0,.9,0,.3-.1.5-.5.5-.2,0-.3.2-.3.4-.1.3-.1.7-.2,1.1,0,.3,0,.6.2.9.2.4.3.8.4,1.2,0,.2.1.3.3.4" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M526.2,284.4c-.3.4-.4,1-.7,1.4" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M527.5,334.7c.1.2.4.2.6.2.2,0,.5,0,.8.2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M530.3,332.3c-.2,0-.3,0-.4.1-.3.4-.8.6-1.2.8-.4.2-.6.4-.8.7-.3.5-.7.9-1,1.4,0,0,0,0-.1,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M529.4,319.3c0,0,0,.1-.2.1-.5,0-.8.2-1.1.5,0,0,0,0-.1,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M543.3,286.2c.1-.5.6-.7,1.2-.5.4,0,.7.2.9.6,0,0,.1,0,.2,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M543.4,288.1c0,0-.2,0-.2,0-.5.3-.5.4,0,1" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M529.1,335c.4.2.8.1,1.2.2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M537.9,333c-.1,0-.2,0-.4-.1-.3-.2-.6,0-.6.3,0,.5.2.9.7,1" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M541.7,291.5c-.1,0-.2,0-.4.2-.6.3-.6.7-.4,1.2,0,0,0,0,0,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M536.7,339.3c-.2.5-.2.5-.7.5-.1,0-.2,0-.3,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M516.8,290.9c0,.4-.2.9-.4,1.3" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M547,289c-.3.2-.8.2-1.1.4" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M527.3,299.6c-.3.1-.6.4-.9.6-.3.2-.5.4-.9.3,0,0-.2,0-.3,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M527.4,300.3c-.3,0-.7.2-1,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M539.9,329.3c0-.2.2,0,.2,0,.4,0,.7.2,1.1.2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M545.5,289.3c-.2-.5-.5-.6-1-.4,0,0-.1,0-.2,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M545.7,287.9c-.2.3-.2.7-.4,1" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M540.7,339.5c0,.4-.4.6-.8.8" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M529,330.9c-.2,0-.4.1-.6.2-.1,0-.3.2-.4.1" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M518.1,294c-.1-.4-.3-.8-.6-1,0,0-.1,0-.2,0-.2,0-.3,0-.4-.2,0-.1-.2-.3-.3-.3" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M529.9,331.3c0,.3,0,.7,0,1" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M544.2,288.2c.2.4.1.6,0,1-.3,0-.6-.1-1,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M530.4,297.9c-.3,0-.6.1-.8.4" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M516.3,292.3s0,0,0,0c-.2.3,0,.6,0,.9" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M535.5,310.7s0,0,0,0c-.1.4-.5.4-.8.6" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M543.1,289.2c-.4,0-.6.3-.8.5,0,.2.1.4,0,.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M534.7,310.2c0,0,.2.1.3.1.3,0,.4.2.4.4" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M542.1,291.7c0,.2,0,.4,0,.6,0,.2,0,.5-.3.6,0,0-.1.1-.2.2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M544.4,335.4c0,.2,0,.5,0,.8" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M544,278.9c-.2.1-.5,0-.7,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M539.3,333.7c.1.2.3.4.3.6,0,0,0,0,.1,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M544,335.7c0,.2,0,.3,0,.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M540.2,333.1c0,.3-.1.2-.3.2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M539.9,332.9c0,0,.2,0,.2,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M546.9,299.9c-.8.2-1.5.6-1.8,1.5-.5,1.5.6,3.2,2.4,3,1.2-.1,1.9-1.1,2-2.2,0-1.2-.8-2.1-1.9-2.3-.2,0-.5,0-.7,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M548.5,341.3c-.4,0-.9.2-1.2.5-.7.6-1,1.4-.8,2.3.2.9.8,1.6,1.7,1.8,1.6.4,2.9-.9,2.9-2.3,0-1.1-.9-2.4-2.6-2.4" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M548.6,342.1c-.7.1-1.1.5-1.3,1.1-.3,1,.5,2,1.6,1.9.9,0,1.4-.8,1.4-1.7,0-.8-.7-1.4-1.6-1.4" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M547.1,300.6c-.3.1-.7.2-.9.5-.5.6-.5,1.4,0,2,.5.6,1.4.7,2,.2.6-.4.8-1.2.5-1.9-.3-.6-.9-.9-1.5-.9" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                  <path d="M520.9,300.5s-1.8-.2-2.2-2.3-2.8-11.1-2.8-11.1l3-12.1s.9-1.2,2.3-1.2v1.3s-1.2-.1-1.6,1.6-2.7,7.7-2.2,12.4" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5"/>
                </g>
              </g>
              <g id="Living_Room1" data-name="Living_Room" filter="url(#drop-shadow-7)">
                <g>
                  <rect x="738.6" y="688" width="26.1" height="32" rx="3" ry="3" transform="translate(47.5 1455.6) rotate(-90)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M767.8,692.8v22.4c0,1.1-.9,2-2,2h-28.4c-1.1,0-2-.9-2-2v-22.4c0-1.1.9-2,2-2h28.4c1.1,0,2,.9,2,2ZM735.7,715.2c0,.9.8,1.7,1.7,1.7h28.4c.9,0,1.7-.8,1.7-1.7v-22.4c0-.9-.8-1.7-1.7-1.7h-28.4c-.9,0-1.7.8-1.7,1.7v22.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="738.6" y="662" width="26.1" height="32" rx="3" ry="3" transform="translate(73.6 1429.7) rotate(-90)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M767.8,666.8v22.4c0,1.1-.9,2-2,2h-28.4c-1.1,0-2-.9-2-2v-22.4c0-1.1.9-2,2-2h28.4c1.1,0,2,.9,2,2ZM735.8,689.2c0,.9.8,1.7,1.7,1.7h28.4c.9,0,1.7-.8,1.7-1.7v-22.4c0-.9-.8-1.7-1.7-1.7h-28.4c-.9,0-1.7.8-1.7,1.7v22.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="738.8" y="635.9" width="26.1" height="32" rx="3" ry="3" transform="translate(99.9 1403.7) rotate(-90)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M767.9,640.7v22.4c0,1.1-.9,2-2,2h-28.4c-1.1,0-2-.9-2-2v-22.4c0-1.1.9-2,2-2h28.4c1.1,0,2,.9,2,2ZM735.9,663.1c0,.9.8,1.7,1.7,1.7h28.4c.9,0,1.7-.8,1.7-1.7v-22.4c0-.9-.8-1.7-1.7-1.7h-28.4c-.9,0-1.7.8-1.7,1.7v22.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M751.6,704.9h4.1c1.2,0,2.2,1,2.2,2.2v20c0,1.2-1,2.2-2.2,2.2h-4.1c-1.2,0-2.2-1-2.2-2.2v-20c0-1.2,1-2.2,2.2-2.2Z" transform="translate(36.5 1470.8) rotate(-90)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M766,714.2v5.9c0,.8-.7,1.5-1.5,1.5h-21.7c-.8,0-1.5-.7-1.5-1.5v-5.9c0-.8.7-1.5,1.5-1.5h21.7c.8,0,1.5.7,1.5,1.5ZM741.6,720.1c0,.7.5,1.2,1.2,1.2h21.7c.7,0,1.2-.5,1.2-1.2v-5.9c0-.7-.5-1.2-1.2-1.2h-21.7c-.7,0-1.2.5-1.2,1.2v5.9Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M751.6,626.6h4.1c1.2,0,2.2,1,2.2,2.2v20c0,1.2-1,2.2-2.2,2.2h-4.1c-1.2,0-2.2-1-2.2-2.2v-20c0-1.2,1-2.2,2.2-2.2Z" transform="translate(114.8 1392.5) rotate(-90)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M766,635.9v5.9c0,.8-.7,1.5-1.5,1.5h-21.7c-.8,0-1.5-.7-1.5-1.5v-5.9c0-.8.7-1.5,1.5-1.5h21.7c.8,0,1.5.7,1.5,1.5ZM741.6,641.8c0,.7.5,1.2,1.2,1.2h21.7c.7,0,1.2-.5,1.2-1.2v-5.9c0-.7-.5-1.2-1.2-1.2h-21.7c-.7,0-1.2.5-1.2,1.2v5.9Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="698.4" y="673.1" width="81.3" height="9.3" rx="2.3" ry="2.3" transform="translate(61.3 1416.7) rotate(-90)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M743.8,638.5v78.5c0,.9-.7,1.6-1.6,1.6h-6.5c-.9,0-1.6-.7-1.6-1.6v-78.5c0-.9.7-1.6,1.6-1.6h6.5c.9,0,1.6.7,1.6,1.6ZM734.5,717c0,.7.6,1.2,1.2,1.2h6.5c.7,0,1.2-.6,1.2-1.2v-78.5c0-.7-.6-1.2-1.2-1.2h-6.5c-.7,0-1.2.6-1.2,1.2v78.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <circle cx="748.4" cy="684.4" r=".7" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M749.2,684.4c0,.5-.4.8-.8.8s-.8-.4-.8-.8.4-.8.8-.8.8.4.8.8ZM747.9,684.4c0,.3.2.5.5.5s.5-.2.5-.5-.2-.5-.5-.5-.5.2-.5.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M748.4,671.2c.4,0,.7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M749.2,671.9c0,.5-.4.8-.8.8s-.8-.4-.8-.8.4-.8.8-.8.8.4.8.8ZM747.9,671.9c0,.3.2.5.5.5s.5-.2.5-.5-.2-.5-.5-.5-.5.2-.5.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <circle cx="760.6" cy="684.4" r=".7" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M761.5,684.4c0,.5-.4.8-.8.8s-.8-.4-.8-.8.4-.8.8-.8.8.4.8.8ZM760.1,684.4c0,.3.2.5.5.5s.5-.2.5-.5-.2-.5-.5-.5-.5.2-.5.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <circle cx="760.6" cy="671.7" r=".7" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M761.5,671.7c0,.5-.4.8-.8.8s-.8-.4-.8-.8.4-.8.8-.8.8.4.8.8ZM760.1,671.7c0,.3.2.5.5.5s.5-.2.5-.5-.2-.5-.5-.5-.5.2-.5.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M755.3,676.8c.4,0,.7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M756.1,677.5c0,.5-.4.8-.8.8s-.8-.4-.8-.8.4-.8.8-.8.8.4.8.8ZM754.8,677.5c0,.3.2.5.5.5s.5-.2.5-.5-.2-.5-.5-.5-.5.2-.5.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M748.4,658.8c.4,0,.7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M749.2,659.4c0,.5-.4.8-.8.8s-.8-.4-.8-.8.4-.8.8-.8.8.4.8.8ZM747.9,659.4c0,.3.2.5.5.5s.5-.2.5-.5-.2-.5-.5-.5-.5.2-.5.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M748.4,646.3c.4,0,.7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M749.2,647c0,.5-.4.8-.8.8s-.8-.4-.8-.8.4-.8.8-.8.8.4.8.8ZM747.9,647c0,.3.2.5.5.5s.5-.2.5-.5-.2-.5-.5-.5-.5.2-.5.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M760.6,658.8c.4,0,.7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M761.5,659.4c0,.5-.4.8-.8.8s-.8-.4-.8-.8.4-.8.8-.8.8.4.8.8ZM760.1,659.4c0,.3.2.5.5.5s.5-.2.5-.5-.2-.5-.5-.5-.5.2-.5.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <circle cx="760.6" cy="646.8" r=".7" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M761.5,646.8c0,.5-.4.8-.8.8s-.8-.4-.8-.8.4-.8.8-.8.8.4.8.8ZM760.1,646.8c0,.3.2.5.5.5s.5-.2.5-.5-.2-.5-.5-.5-.5.2-.5.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M755.3,651.9c.4,0,.7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M756.1,652.6c0,.5-.4.8-.8.8s-.8-.4-.8-.8.4-.8.8-.8.8.4.8.8ZM754.8,652.6c0,.3.2.5.5.5s.5-.2.5-.5-.2-.5-.5-.5-.5.2-.5.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <circle cx="748.4" cy="708.6" r=".7" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M749.2,708.6c0,.5-.4.8-.8.8s-.8-.4-.8-.8.4-.8.8-.8.8.4.8.8ZM747.9,708.6c0,.3.2.5.5.5s.5-.2.5-.5-.2-.5-.5-.5-.5.2-.5.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M748.4,695.4c.4,0,.7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M749.2,696.1c0,.5-.4.8-.8.8s-.8-.4-.8-.8.4-.8.8-.8.8.4.8.8ZM747.9,696.1c0,.3.2.5.5.5s.5-.2.5-.5-.2-.5-.5-.5-.5.2-.5.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <circle cx="760.6" cy="708.6" r=".7" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M761.5,708.6c0,.5-.4.8-.8.8s-.8-.4-.8-.8.4-.8.8-.8.8.4.8.8ZM760.1,708.6c0,.3.2.5.5.5s.5-.2.5-.5-.2-.5-.5-.5-.5.2-.5.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M760.6,695.2c.4,0,.7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M761.5,695.9c0,.5-.4.8-.8.8s-.8-.4-.8-.8.4-.8.8-.8.8.4.8.8ZM760.1,695.9c0,.3.2.5.5.5s.5-.2.5-.5-.2-.5-.5-.5-.5.2-.5.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M755.3,701.1c.4,0,.7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M756.1,701.8c0,.5-.4.8-.8.8s-.8-.4-.8-.8.4-.8.8-.8.8.4.8.8ZM754.8,701.8c0,.3.2.5.5.5s.5-.2.5-.5-.2-.5-.5-.5-.5.2-.5.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
              </g>
              <g id="Plant" filter="url(#drop-shadow-8)">
                <g>
                  <path d="M257.6,215.4c3.4.5,6.5,1.7,7.7,4.3-.9-.1-2.4.2-3.4.5-1.4.4-3.8,1.3-4.5,4-.7,2.7.5.7,2.7-1.3,1.6-1.4,3.8-1.8,5.7-1,0,.1,0,.3,0,.4,0,2-.5,3.7-1.2,5-1.2,2.1-3,3.3-4.1,2.8-3.8-1.9-1.1,7-4.4,8-1.2.3-2.6.1-3.9-.5-.6-2-1.1-3.7-.3-5.5.6-1.4,1.2-3.1.8-3.6-.3-.3-1.3.4-1.7.9-1.6,2.1-1.4,5-.6,7-1.7-1.3-3.2-3.2-4-5.4-.3-.9-.7-2-1.2-3.1,1.7-1.5,4.4-2.9,4.1-3.2-.5-.4-3.1.4-4.7,1.6-1.6-4.1-3.3-8.5-2.6-9.4.5-.8,3.2-1.4,6.3-1.7-.4,2.6.4,5.4,1,5.7.6.2-.1-3.4-.1-5.7,2-.1,4.2-.2,6.1,0h0c-1.8,2.8-1.8,7.9-1.1,8,.7.1.3-4.6,3.2-7.7Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M255,238.5c-.9,0-1.8-.2-2.8-.7h0s0-.2,0-.2c-.6-2.1-1.1-3.8-.3-5.7,1.1-2.8.9-3.3.9-3.3-.1,0-1,.4-1.3.9-1.6,2.1-1.3,4.8-.6,6.8l.3.8-.7-.5c-1.9-1.4-3.3-3.4-4-5.5-.3-1-.8-2.1-1.2-3.1v-.2c0,0,0-.1,0-.1.8-.7,1.7-1.3,2.5-1.8.5-.4,1.2-.8,1.4-1-.6,0-2.7.5-4.2,1.7l-.3.2v-.3c-2.1-5-3.4-8.6-2.7-9.7.8-1.2,5.2-1.6,6.5-1.8h.3s0,.3,0,.3c-.4,2.4.3,4.8.8,5.3,0-.4,0-1.5-.1-2.3-.1-1-.2-2.2-.2-3.1v-.2s.2,0,.2,0c1.5-.1,3.9-.2,6.1,0h.5c0,0-.2.4-.2.4-1.6,2.6-1.6,6.8-1.3,7.5,0-.2.2-.7.3-1.1.3-1.6.8-4.3,2.7-6.4h0c0,0,.1,0,.1,0,4.1.7,6.8,2.2,7.9,4.5l.2.4h-.5c-1-.2-2.8.3-3.3.5-1.2.4-3.6,1.1-4.3,3.8-.1.5-.2.7-.2.9.2-.2.5-.5.8-.8.5-.5,1-1.1,1.7-1.6,1.6-1.5,4-1.9,6-1.1h.1c0,0,0,.2,0,.2,0,.1,0,.3,0,.4,0,2.3-.7,4.1-1.2,5.1-1.2,2.2-3.2,3.5-4.4,2.9-.5-.2-.9-.3-1.2-.1-.6.4-.8,1.8-.9,3.2-.2,2.1-.4,4.4-2.1,4.9-.4.1-.8.2-1.3.2ZM252.5,237.4c1.3.6,2.6.8,3.6.5,1.4-.4,1.6-2.6,1.8-4.5.2-1.7.3-3.1,1.2-3.6.4-.2,1-.2,1.6.1.9.4,2.6-.6,3.8-2.7.6-1,1.2-2.7,1.2-4.9,0,0,0-.1,0-.2-1.8-.7-3.9-.2-5.3,1-.6.6-1.2,1.2-1.6,1.6-.8.9-1.2,1.2-1.5,1.1-.3-.1-.3-.5,0-1.6.8-3,3.4-3.8,4.6-4.2.6-.2,2-.6,3-.6h0c-1.1-1.9-3.5-3.2-7.2-3.8-1.7,2-2.2,4.5-2.5,6.1-.2,1.1-.3,1.7-.8,1.6-.2,0-.3-.1-.4-.4-.5-1.1-.3-5.1,1.1-7.7-1.6-.1-3.5-.1-5.5,0,0,.9.1,1.9.2,2.8.2,1.9.2,2.6,0,2.9-.1,0-.2,0-.4,0-.8-.3-1.5-3.1-1.2-5.6-3.1.3-5.4.9-5.8,1.5-.6.8,1.2,5.6,2.5,8.9,1.6-1.1,4.2-2,4.8-1.4,0,0,.1.2.1.3,0,.3-.5.6-1.8,1.5-.8.5-1.6,1.1-2.3,1.7.4,1,.8,2.1,1.1,3,.6,1.8,1.8,3.5,3.2,4.8-.6-2-.6-4.5.9-6.4.3-.4,1.2-1.1,1.7-1.1h0c.2,0,.3,0,.4.2.2.3.3,1-.8,3.8-.7,1.7-.3,3.3.3,5.2Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M269.6,235c2.3.8,4.4,3.4,4.8,5.3.2,1.2-.3,2.7-1.4,4.3-1.7-2-5.5-4.5-7-4.7-1.3-.1,1.5.7,3.9,3,.8.7,1.5,1.8,2.1,2.9-1.3,1.5-3.2,2.8-5.6,3.8-.7-2.3-2.7-5.9-4.1-6.2-1-.2,1,1.8,2.3,3.9.6.9.9,1.8,1,2.6-1.2.4-2.6.7-4.1.9-.6,0-1.1.2-1.6.3-.5-1.6-1.8-3.8-2.7-4-1-.2,1.1,2.2,1.3,4.4-2.7,1-3.8,2.6-4.7,1.7-.6-.5-1.5-2.6-2.1-5.2,1.9-1.5,4-.8,3.5-1.5-.4-.6-2.4-.4-3.8.2-.5-2.4-.8-5.1-.4-7.3,3.1-.7,6.1.7,6.8,1.2.7.5.9-.9-2.1-2.1-1.6-.6-3.2-.8-4.3-.7.5-2,1.3-3.9,2.4-5.6,1.3.2,2.5.5,3.4,1.2,2.1,1.5,3.3,3.9,3.5,3.3.3-.8-3.7-4.7-6-5.7,1.3-1.5,3.1-2.4,5.2-2.2,5.1.5,5.5,3.4,5.6,5,0,1.9,2.3.5,4.2,1.2Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M254.4,253.7c-.3,0-.5,0-.7-.3-.7-.6-1.6-2.8-2.2-5.3v-.2s0-.1,0-.1c1.1-.9,2.3-1,3-1.1.1,0,.2,0,.3,0-.5-.3-2-.2-3.4.4h-.3c0,.1,0-.2,0-.2-.4-2-.8-4.9-.4-7.4v-.2s.2,0,.2,0c3.1-.7,6.2.7,7,1.2,0,0,0,0,0,0,0-.3-.6-1-2.3-1.7-1.7-.7-3.4-.7-4.2-.7h-.3s0-.3,0-.3c.6-2.2,1.4-4.2,2.4-5.6h0c0-.1.2-.1.2-.1,1.2.2,2.5.5,3.5,1.3,1.1.8,2,1.9,2.6,2.6.1.2.3.3.4.5-.6-1.1-3.6-4.1-5.7-5.1h-.3c0-.1.2-.4.2-.4,1.5-1.7,3.4-2.5,5.4-2.3,5.5.6,5.7,4,5.8,5.2,0,.3,0,.5.2.6.3.2.8.2,1.5.2.7,0,1.5-.1,2.3.2h0c2.5.8,4.6,3.5,4.9,5.5.2,1.3-.3,2.9-1.4,4.4l-.2.3-.2-.3c-1.4-1.7-4.2-3.6-5.9-4.3.8.5,2,1.2,3.2,2.3.7.6,1.4,1.6,2.2,2.9v.2c0,0,0,.1,0,.1-1.5,1.6-3.4,2.9-5.7,3.9h-.3c0,.1,0-.2,0-.2-.7-2.3-2.6-5.5-3.8-6,.2.3.6.8.9,1.3.5.7,1.1,1.4,1.5,2.2.7,1.1,1,2.1,1.1,2.7v.2s-.2,0-.2,0c-1.3.5-2.7.8-4.2.9-.5,0-1.1.1-1.6.3h-.2c0,0,0-.2,0-.2-.5-1.6-1.8-3.7-2.5-3.8,0,.2.3.6.4,1,.4.9,1,2,1.1,3.2v.2s-.2,0-.2,0c-1,.4-1.8.9-2.4,1.2-.7.4-1.3.8-1.8.8ZM252,248.2c.7,2.6,1.6,4.4,2,4.9.4.4.9.1,2-.5.6-.4,1.4-.8,2.3-1.2-.2-1-.7-2-1.1-2.8-.4-.8-.6-1.3-.4-1.6.1-.1.3-.2.5-.1,1.1.2,2.3,2.5,2.8,3.9.5-.1.9-.2,1.4-.2,1.3-.1,2.6-.4,3.8-.8-.2-.7-.5-1.6-1-2.3-.5-.7-1-1.5-1.5-2.1-.9-1.2-1.2-1.7-1-2,0-.1.2-.2.5-.1,1.4.3,3.5,3.8,4.2,6.1,2-.8,3.8-2.1,5.1-3.5-.7-1.2-1.3-2.1-2-2.7-1.3-1.2-2.7-2-3.5-2.5-.7-.4-.9-.5-.8-.8,0-.2.4-.2.6-.2,1.5.1,5.2,2.5,6.9,4.5.9-1.4,1.3-2.7,1.1-3.8-.3-1.8-2.3-4.3-4.6-5.1h0c-.7-.2-1.4-.2-2.1-.1-.8,0-1.4,0-1.9-.3-.2-.2-.4-.5-.4-1,0-1.3-.2-4.3-5.3-4.8-1.8-.2-3.4.5-4.8,1.9,2.3,1.2,6.2,4.9,5.8,5.9,0,.2-.2.2-.3.3-.3,0-.5-.3-1.1-.9-.6-.7-1.4-1.7-2.5-2.5-.8-.6-1.8-.9-3.1-1.2-.9,1.3-1.6,3.1-2.1,5,.9,0,2.5,0,4.1.7,1.9.8,2.6,1.7,2.7,2.2,0,.2,0,.3-.2.4,0,0-.3.1-.6,0-.8-.5-3.5-1.8-6.4-1.2-.4,2.2,0,4.8.3,6.7,1.4-.6,3.3-.7,3.8,0,.1.2.1.3,0,.4-.1.2-.4.3-.9.3-.6,0-1.7.2-2.6.9ZM257.2,247.3h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M270.7,233.2c-5.4,4.2.1,7.5,3.3,8.2,2.6.6,4.5,0,7.5-1,2.8-1,7.4-6,7.1-5.9-.3,0-2.4-1.9-3.2-2.7-1.6-1.5-5.3-4.3-8.8-4.9-3.7-.6-4.6,3.9-4.6,4.7,0,.7-1,1.3-1.4,1.6Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M276.1,241.9c-.7,0-1.4,0-2.1-.2-1.9-.4-5.2-2-5.7-4.3-.3-1.5.4-2.9,2.3-4.4h.2c.4-.4,1.1-.9,1.1-1.4,0-.5.5-2.9,2-4.2.8-.7,1.8-.9,2.9-.7,4.2.7,8.5,4.5,8.9,5h.1c1.7,1.7,2.7,2.5,2.9,2.6h.2s0,.2,0,.2c.1.5-4.8,5.3-7.3,6.2-2.1.7-3.7,1.3-5.5,1.3ZM276,227.1c-.7,0-1.4.2-1.9.7-1.4,1.1-1.8,3.3-1.8,3.8,0,.8-.8,1.3-1.3,1.7h-.2c-1.7,1.4-2.4,2.7-2.1,4,.5,2.1,3.5,3.5,5.3,3.9,2.6.6,4.5,0,7.3-1,2.4-.8,6.1-4.6,6.9-5.6-.4-.2-1.1-.9-2.8-2.5h-.1c-.5-.5-4.6-4.3-8.7-5-.2,0-.4,0-.6,0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M268,220.4c3.5,4,5.8-.3,6.2-2.7.3-2-.2-3.4-1.1-5.6-.9-2.1-4.9-5.5-4.9-5.2,0,.2-1.4,1.8-1.9,2.4-1.1,1.2-3.1,4.1-3.4,6.7-.3,2.8,3.2,3.4,3.8,3.4.6,0,1.1.7,1.3,1Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M270.7,222.3c-1,0-1.9-.6-2.9-1.7h-.1c-.2-.4-.6-.9-1-.9-.4,0-2.3-.3-3.4-1.5-.5-.6-.7-1.3-.7-2.2.4-3.2,3.2-6.5,3.5-6.9h0c1.1-1.3,1.7-2.1,1.8-2.3v-.2s.2,0,.2,0c.5-.2,4.4,3.6,5.2,5.4.9,2.2,1.5,3.6,1.1,5.7-.3,1.5-1.3,3.9-3.1,4.4-.2,0-.4,0-.7,0ZM268.4,207.2c-.2.3-.7.9-1.8,2.2h0c-.3.4-3,3.6-3.4,6.7,0,.7.1,1.3.5,1.8.9,1,2.7,1.3,3,1.3.6,0,1.1.6,1.4,1h0c1.1,1.4,2.1,1.9,3.1,1.6,1.6-.4,2.5-2.7,2.7-4,.3-2-.2-3.3-1.1-5.5-.7-1.7-3.7-4.4-4.5-5Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <path d="M261.1,240.9c.7-.4,1.1-1,1.6-1.6.5-.7,1.1-1.4,1.6-2.2,1-1.5,1.9-3.1,2.7-4.7,0-.2,0-.4-.3-.4-.4.2-.9.1-1.3,0-.3-.1-.5.3-.3.4.5.3,1.1.3,1.7.1,0-.1-.2-.2-.3-.4-.7,1.5-1.6,3-2.5,4.4-.5.7-.9,1.4-1.4,2-.5.7-1,1.4-1.7,1.9-.3.2,0,.6.3.4h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M267,232.3c2.4.4,4.8,0,7.1.2,2.7.3,5.2,1.6,7.9,2.2.3,0,.4-.4.1-.5-2.6-.5-5.1-1.8-7.8-2.2-2.4-.3-4.8.2-7.2-.2-.3,0-.5.4-.1.5h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M254.1,226.1c1.3,1.3,2.8,2.3,4.6,2.9.3.1.4-.4.1-.5-1.6-.6-3.1-1.6-4.3-2.8-.2-.2-.6.1-.4.4h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <g>
                  <path d="M288.7,217.6c.1.7-.3,2.2-1.1,4-1.1-.8-2.9-1.5-3.9-1.7-1.3-.2.8,1.9,2.9,3.5-.9,1.5-1.9,3.1-3.1,4.3-.9-1.7-2.7-4.4-3.5-5.1-1.2-.9-2.7-1-1.4,0,1.2.9,2.8,3.3,3.6,6.3-.4.3-.7.6-1.1.9-1.3.9-3.1,1.6-4.9,2.1-.5-2.7-2.5-7.5-3.3-7-.9.5,1.8,3.6,1.7,7.2-3.3.5-6.5,0-7.4-2.2-1.4-3.6,0-4.3-.8-5.1-.8-.8-.9.5-1.4-.9-.8-2.4-.3-4.6.7-6.4.2,0,.5,0,.7.2,1.8.5,4.2,1.8,4.5,2.4.5,1.2,2.3.2,1-1.3-1-1.2-3.9-1.9-5.7-2,1.4-1.8,3.4-3.1,5.2-3.5.9-.2,2.3-.2,3.9,0,1.4,3.6-.2,5.4.5,5.6.8.2,2.8-3.2,2.2-5.2,1.5.3,3.1.6,4.6,1-.4,2.4-1.1,3.1-.2,2.8.8-.2,1.7-1.4,2-2.3,2.3.8,4,1.6,4.2,2.3Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M272.5,232.6c-2.5,0-4.8-.6-5.5-2.5-.9-2.2-.7-3.4-.6-4.2,0-.5,0-.7-.1-.9-.2-.2-.3-.2-.5-.2-.5.1-.7,0-1-.9-.7-2.3-.5-4.5.7-6.6v-.2c0,0,.3,0,.3,0,.3,0,.5,0,.7.2,1.8.5,4.3,1.8,4.6,2.5,0,.2.3.4.5.4.2,0,.4-.1.5-.3.1-.3,0-.7-.3-1.1-1-1.2-3.9-1.9-5.5-1.9h-.5s.3-.4.3-.4c1.3-1.7,3.3-3.1,5.3-3.6,1.1-.3,2.8-.2,4,0h.2s0,.2,0,.2c.9,2.3.6,3.8.4,4.8,0,.3-.1.6,0,.7,0,0,.2,0,.5-.4.9-1,1.8-3.2,1.4-4.5v-.4c-.1,0,.3,0,.3,0,1.5.3,3.1.6,4.6,1h.2c0,0,0,.3,0,.3-.2,1-.4,1.7-.5,2.1,0,.2-.1.3-.1.5,0,0,0,0,0,0,.8-.2,1.6-1.3,1.9-2.1v-.2c0,0,.3,0,.3,0,2.7.9,4.2,1.7,4.3,2.5.2.8-.3,2.3-1.1,4.1v.3c-.1,0-.4-.2-.4-.2-1.1-.8-2.8-1.5-3.8-1.6,0,0,0,0,0,0,.2.4,1.4,1.7,3.2,3.1h.2c0,.1-.1.3-.1.3-.9,1.6-2,3.2-3.1,4.4l-.2.3-.2-.3c-1-1.8-2.7-4.4-3.5-5-.5-.4-1.1-.6-1.4-.7,0,0,.2.2.3.3,1.2.9,2.8,3.3,3.7,6.5h0c0,.1-.1.3-.1.3-.3.3-.7.6-1.1.9-1.3.9-3.1,1.6-5,2.1h-.3c0,0,0-.2,0-.2-.5-3-2.4-6.8-2.9-6.8h0c-.2.1.2,1,.5,1.8.6,1.4,1.4,3.2,1.3,5.3v.2s-.2,0-.2,0c-.7,0-1.4.1-2.1.1ZM266,224.4c.2,0,.4,0,.7.3.4.4.3.8.2,1.3-.1.7-.3,1.8.6,3.9.8,2,4,2.4,6.9,2,0-1.9-.7-3.6-1.3-4.8-.5-1.2-.9-2-.3-2.4.1,0,.3,0,.5,0,1,.5,2.6,4.5,3.1,6.9,1.8-.5,3.4-1.1,4.6-2,.4-.3.7-.5,1-.7-.9-3-2.4-5.2-3.5-6.1-.4-.3-.6-.6-.6-.8,0-.1.1-.2.2-.3.4-.2,1.3.2,2,.7.8.7,2.5,3.1,3.4,4.8,1-1.1,1.9-2.4,2.7-3.9-.7-.6-3.5-2.8-3.2-3.6,0-.1.2-.3.6-.2.9.2,2.5.8,3.7,1.6.7-1.6,1.1-2.9.9-3.5h0c0-.4-1.1-1.2-3.8-2.1-.4.9-1.2,2-2.1,2.2-.2,0-.5.1-.6,0-.2-.2-.1-.5,0-1,.1-.4.3-1,.5-1.8-1.3-.3-2.6-.7-3.9-.9.2,1.6-.7,3.7-1.6,4.7-.4.4-.7.6-1,.5-.5-.1-.4-.6-.3-1.2.2-.9.4-2.3-.3-4.4-1.6-.2-2.9-.1-3.7,0-1.7.4-3.5,1.6-4.8,3.1,1.8.1,4.4.9,5.4,2,.7.8.5,1.5.4,1.7-.2.4-.5.6-.9.6-.4,0-.7-.3-.9-.7-.2-.5-2.4-1.7-4.3-2.3-.2,0-.4,0-.5-.1-1.1,1.9-1.3,3.9-.6,6,.2.5.3.6.3.6,0,0,0,0,0,0,0,0,.2,0,.3,0ZM278.4,222h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <path d="M267.3,231.9c-.7-1.5-1.1-3.1-1.2-4.7,0-.9,0-1.6.8-2.2.6-.5,1.4-.8,2.1-1.1,1.4-.6,2.9-1,4.4-1.4,1.6-.5,3.1-1,4.7-1.5.3,0,.2-.6-.1-.5-1.8.6-3.6,1.1-5.4,1.7-1.7.5-3.4,1-4.9,1.8-.6.3-1.3.7-1.7,1.3-.4.6-.3,1.3-.3,2,.2,1.7.6,3.3,1.3,4.8.1.3.6,0,.4-.3h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g id="Plant1" data-name="Plant" filter="url(#drop-shadow-9)">
                <path d="M781,662.3h37.8c4.2,0,7.7,3.4,7.7,7.7v18.2c0,4.2-3.4,7.7-7.7,7.7h-37.8c-4.2,0-7.7-3.4-7.7-7.7v-18.2c0-4.2,3.4-7.7,7.7-7.7Z" transform="translate(1479 -120.8) rotate(90)" fill="#fff" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M782.9,699.2v-40.2c0-3.7,3-6.7,6.7-6.7h20.6c3.7,0,6.7,3,6.7,6.7v40.2c0,3.7-3,6.7-6.7,6.7h-20.6c-3.7,0-6.7-3-6.7-6.7ZM816.5,659c0-3.5-2.8-6.3-6.3-6.3h-20.6c-3.5,0-6.3,2.8-6.3,6.3v40.2c0,3.5,2.8,6.3,6.3,6.3h20.6c3.5,0,6.3-2.8,6.3-6.3v-40.2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g id="Plant2" data-name="Plant" filter="url(#drop-shadow-10)">
                <g>
                  <path d="M800.1,683.7c-2.8,0-5-2.2-5-4.9s2.2-4.9,5-4.9,5,2.2,5,4.9-2.2,4.9-5,4.9Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M794.9,678.8c0-2.8,2.3-5.2,5.2-5.2s5.2,2.3,5.2,5.2-2.3,5.2-5.2,5.2-5.2-2.3-5.2-5.2ZM804.9,678.8c0-2.6-2.1-4.7-4.8-4.7s-4.8,2.1-4.8,4.7,2.1,4.7,4.8,4.7,4.8-2.1,4.8-4.7Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M801.8,678.7c4.9-.2,4.5-3.2,4.4-5.8-.1-2.6.9-6.7.3-6-.5.7-3,1.7-5.3,4-2.3,2.3-4.3,8,.6,7.8Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M798.6,676.1c0-1.8,1.1-4.1,2.5-5.4,1.4-1.4,2.8-2.3,3.9-2.9.7-.4,1.2-.8,1.4-1,.1-.2.3-.2.4-.2.3,0,.2.4,0,2-.2,1.2-.4,2.9-.3,4.2v.5c0,1.5.2,3.1-.8,4.2-.7.8-2,1.2-3.7,1.3h0c-1.9,0-2.7-.8-3-1.5-.2-.4-.2-.8-.2-1.3ZM806.5,667.2c-.3.3-.7.5-1.3.9-1,.6-2.4,1.5-3.8,2.9-1.6,1.6-2.9,4.6-2.1,6.2.4.9,1.3,1.3,2.6,1.2h0c1.7,0,2.8-.5,3.4-1.2.9-1,.8-2.5.8-3.9v-.5c0-1.3.1-3.1.3-4.3,0-.5.1-1,.2-1.3Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M800.3,678.8c.9-2.5,4.9-3.4,8.7-1.3,3.7,2.1,4.7,4.8,3.5,4-1.2-.8-3.6,1.3-6.1,1.8-2.5.5-6.9-2.2-6.1-4.5Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M800,679.3c0-.2,0-.4.1-.6h0c.4-1,1.2-1.8,2.4-2.2,1.9-.7,4.4-.4,6.6.8,2.6,1.5,4.1,3.4,4.1,4.1h0c0,.2-.1.3-.2.3-.2,0-.4,0-.6-.2-.6-.4-1.7.1-3,.7-.9.4-1.9.9-3,1.2-1.7.4-4.2-.7-5.6-2.2-.6-.6-.8-1.3-.8-1.9ZM800.5,678.8c-.3.8.2,1.6.7,2.1,1.3,1.4,3.7,2.4,5.2,2.1,1-.2,2-.7,2.9-1.1,1.4-.7,2.6-1.2,3.4-.7,0,0,.1,0,.2,0,0-.5-1.2-2.2-3.9-3.7-2.1-1.2-4.4-1.5-6.2-.8-1.1.4-1.8,1.1-2.1,2h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M798.5,679.4c1.6,1.4,2,.5,2.3,2.1.3,1.6-.4,4.3-2,5.2s-5.8,3.6-5.4,3c.4-.5,1.1-3.8.9-5.1-.2-1.3,2.2-7,4.1-5.3Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M793.2,689.9c0,0,0-.1,0-.2.4-.5,1.1-3.7.9-4.9-.2-1.1,1.3-4.8,2.9-5.6.6-.3,1.1-.3,1.6.2.6.6,1.1.7,1.4.9.5.2.8.4,1,1.4.3,1.6-.4,4.4-2.1,5.4l-.6.3c-4.9,3-5,2.9-5.1,2.7,0,0,0,0,0-.2ZM794.6,685.2c0,1.3-.4,3.3-.8,4.3,1-.5,3.3-1.9,4.4-2.5l.6-.3c1.5-.9,2.1-3.5,1.9-5-.1-.8-.3-.9-.7-1.1-.3-.1-.8-.3-1.5-1h0c-.3-.3-.7-.3-1.1-.1-1.4.8-2.8,4.3-2.7,5.2,0,.2,0,.3,0,.6Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M800,679.2c3.2-1.6,5.2.8,5.4,4.1.1,2.2-.1,3.7-.2,5.3,0,1.6.5,2.5.3,2.9-.3.9-1.9-1-2.8-1.8-.9-.8-2.1-1.4-3.3-3.7-1.2-2.3-1.9-5.6.5-6.8Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M798.2,682c0-.5,0-.9.2-1.3.3-.8.8-1.4,1.5-1.8h0c1.4-.7,2.6-.7,3.6-.1,1.2.7,2,2.3,2.1,4.4,0,1.5,0,2.8-.1,3.9,0,.5,0,.9-.1,1.4,0,.9.1,1.6.2,2.1,0,.4.2.7,0,.9,0,.2-.3.3-.4.3-.5.1-1.2-.5-2.2-1.5-.2-.2-.4-.4-.6-.6-.2-.2-.4-.4-.7-.6-.8-.6-1.7-1.4-2.7-3.2-.7-1.4-1.1-2.9-1.1-4ZM800.1,679.4c-.7.3-1.1.8-1.3,1.5-.4,1.2,0,3.1.9,5,.9,1.7,1.8,2.4,2.5,3,.2.2.5.4.7.6.2.2.4.4.6.6.5.6,1.5,1.5,1.8,1.4,0,0,0,0,0,0,0,0,0-.4,0-.6-.1-.5-.3-1.2-.2-2.2,0-.5,0-.9.1-1.4,0-1.1.2-2.3.1-3.8-.1-1.9-.8-3.4-1.9-4.1-.9-.5-2-.5-3.2.1h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M800.3,677.6c-1.2-3.1-.8-5.5-2.9-6-2.1-.5-6.2-1.2-6.3-1.9-.1-.7-1,1.9.5,3.2,1.5,1.4,2.8,6.5,5.1,6.3,2.3-.2,4.3.2,3.6-1.6Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M790.5,670.7c0-.5,0-.9.2-1.1.1-.2.2-.3.3-.2,0,0,.2,0,.2.3,0,.5,3.6,1.2,5.1,1.5.4,0,.8.2,1.1.2,1.6.3,1.9,1.7,2.3,3.4.2.8.4,1.7.8,2.7h0c.2.5.2.9,0,1.2-.4.5-1.3.6-2.5.6-.4,0-.9,0-1.3,0-1.6.1-2.8-2-3.7-3.9-.5-1-1-2-1.6-2.5-.7-.7-.9-1.6-.9-2.3ZM791,670c-.1.6-.2,1.9.7,2.8.6.5,1.1,1.5,1.7,2.6.9,1.8,2,3.8,3.3,3.6.5,0,.9,0,1.3,0,1,0,1.9,0,2.1-.4.1-.2,0-.4,0-.8-.4-1-.6-2-.8-2.8-.4-1.7-.7-2.8-2-3.1-.3,0-.7-.1-1.1-.2-3.1-.7-4.8-1.1-5.3-1.6Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M800.3,679c.2,0,1.4,1,2.1,3.6.7,2.6.7,4,.7,4l-2.7-7.5Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M800.3,679.2v-.4c.4,0,1.6,1.2,2.3,3.7.7,2.6.7,4,.7,4h-.4s0-1.4-.7-3.9c-.7-2.4-1.7-3.3-1.9-3.4Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M800.1,678.6c-.3-1.2-2.2-2.1-3.1-2.9-.9-.7-1.7-1.7-2.3-2.4-.6-.7-1.4-.9-1.4-.9l6.8,6.2Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M793.3,672.6v-.4c.1,0,.9.2,1.6,1l.3.3c.6.7,1.2,1.5,2,2.1.2.2.5.4.8.6.9.6,2.1,1.4,2.4,2.4h-.4c-.2-.7-1.3-1.5-2.2-2.1-.3-.2-.6-.4-.8-.6-.8-.6-1.5-1.5-2.1-2.2l-.3-.3c-.6-.7-1.2-.8-1.3-.9Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M804.6,670.4c-1.3,2.3-2.3,3.2-2.8,4.6-.6,1.4-1.3,3.6-1.3,3.6l4.2-8.2Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M800.2,678.5s.7-2.2,1.3-3.6c.3-.8.7-1.4,1.3-2.2.5-.7,1-1.4,1.6-2.5l.4.2c-.6,1.1-1.1,1.8-1.6,2.5-.5.8-.9,1.4-1.2,2.1-.6,1.4-1.3,3.5-1.3,3.5h-.4Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
              </g>
              <g clip-path="url(#clippath)">
                <g>
                  <g>
                    <g>
                      <rect x="519.8" y="366.3" width="1.6" height="5.9" transform="translate(-117.5 381.9) rotate(-36.5)" fill="#dfd1b8" stroke="#aa9d87" stroke-miterlimit="10"/>
                      <path d="M523.4,371.2l-1.7,1.3-3.8-5.1,1.7-1.3,3.8,5.1ZM521.8,371.8l.9-.7-3.2-4.3-.9.7,3.2,4.3Z" fill="#dfd1b8" stroke="#aa9d87" stroke-miterlimit="10"/>
                    </g>
                    <g>
                      <rect x="521" y="366" width="1.6" height="6.7" transform="translate(-117.3 382.6) rotate(-36.5)" fill="#dfd1b8" stroke="#aa9d87" stroke-miterlimit="10"/>
                      <path d="M524.8,371.5l-1.7,1.3-4.2-5.7,1.7-1.3,4.2,5.7ZM523.1,372.1l.9-.7-3.7-5-.9.7,3.7,5Z" fill="#dfd1b8" stroke="#aa9d87" stroke-miterlimit="10"/>
                    </g>
                    <g>
                      <rect x="517.7" y="346" width="5.9" height="1.6" transform="translate(-67.8 559.2) rotate(-53.5)" fill="#dfd1b8" stroke="#aa9d87" stroke-miterlimit="10"/>
                      <path d="M523.4,344.8l-3.8,5.2-1.7-1.3,3.8-5.2,1.7,1.3ZM519.5,349.3l3.2-4.4-.9-.7-3.2,4.4.9.7Z" fill="#dfd1b8" stroke="#aa9d87" stroke-miterlimit="10"/>
                    </g>
                    <g>
                      <rect x="518.5" y="345.9" width="6.7" height="1.6" transform="translate(-67.3 560.1) rotate(-53.5)" fill="#dfd1b8" stroke="#aa9d87" stroke-miterlimit="10"/>
                      <path d="M524.8,344.5l-4.2,5.7-1.7-1.3,4.2-5.7,1.7,1.3ZM520.4,349.6l3.7-5-.9-.7-3.7,5,.9.7Z" fill="#dfd1b8" stroke="#aa9d87" stroke-miterlimit="10"/>
                    </g>
                    <g>
                      <path d="M513.6,356.2c0-4.6,3.6-8.5,8.2-8.7l9-.5c1.7,0,2.9,1,2.9,2.7v16.8c0,1.7-1.1,2.8-2.9,2.7l-9-.5c-4.6-.3-8.2-4.1-8.2-8.7v-3.8Z" fill="#dfd1b8" stroke="#aa9d87" stroke-miterlimit="10"/>
                      <path d="M534.1,349.7v16.8c0,.9-.3,1.7-.9,2.2-.6.5-1.4.8-2.3.7l-9-.5c-4.8-.3-8.5-4.2-8.5-9v-3.8c0-4.8,3.7-8.7,8.5-9l9-.5c.9,0,1.7.2,2.3.7s.9,1.3.9,2.2ZM513.9,360.1c0,4.5,3.5,8.2,8,8.5l9,.5c.8,0,1.4-.2,1.9-.6.5-.4.7-1.1.7-1.9v-16.8c0-.8-.2-1.4-.7-1.9-.5-.4-1.1-.6-1.9-.6l-9,.5c-4.5.3-8,4-8,8.5v3.8Z" fill="#dfd1b8" stroke="#aa9d87" stroke-miterlimit="10"/>
                    </g>
                    <g>
                      <path d="M514.5,356.4c0-4.1,3.2-7.5,7.3-7.8l8-.5c1.5,0,2.6.9,2.6,2.4v15c0,1.5-1,2.5-2.6,2.4l-8-.5c-4.1-.2-7.3-3.6-7.3-7.8v-3.4Z" fill="#dfd1b8" stroke="#aa9d87" stroke-miterlimit="10"/>
                      <path d="M532.6,350.7v15c0,.8-.3,1.5-.7,1.9-.5.5-1.2.7-1.9.6l-8-.5c-4.2-.2-7.4-3.7-7.4-7.9v-3.4c0-4.2,3.3-7.6,7.4-7.9l8-.5c.8,0,1.5.2,1.9.6.5.5.7,1.1.7,1.9ZM514.7,359.9c0,4,3.2,7.4,7.2,7.6l8,.5c.7,0,1.3-.2,1.8-.6.4-.4.7-1,.7-1.7v-15c0-.7-.2-1.3-.7-1.7-.4-.4-1-.6-1.8-.6l-8,.5c-4,.2-7.2,3.6-7.2,7.6v3.4Z" fill="#dfd1b8" stroke="#aa9d87" stroke-miterlimit="10"/>
                    </g>
                    <g>
                      <path d="M521.6,345.9h-1.2c-6,.2-10.8,5.2-10.8,11.2v2c0,6,4.8,10.9,10.8,11.1h1.2s-1.8,1.4-1.8,1.4l-7.8-2.7-3.6-4.6-1-6.2,1.1-5.9s2.4-3.8,2.5-4c.1-.1,3.6-3.1,4-3.3.5-.2,4.7-.7,4.8-.6.1,0,1.7,1.5,1.7,1.5Z" fill="#dfd1b8" stroke="#aa9d87" stroke-miterlimit="10"/>
                      <path d="M522.3,370l-2.5,1.9-8-2.8-3.7-4.7-1-6.3h0s1.1-6,1.1-6h0c.2-.4,2.4-3.9,2.5-4,.1-.2,3.6-3.1,4.2-3.3.3-.1,2.1-.4,2.6-.4,2.3-.3,2.4-.2,2.4-.2.1,0,1.3,1.1,1.7,1.5l.5.4h-1.8c-5.9.3-10.5,5-10.5,10.9v2c0,5.9,4.6,10.7,10.5,10.9h1.9ZM509.4,359v-2c0-6.2,4.8-11.2,11-11.4h.6c-.5-.5-1-.9-1.2-1.1-.6,0-4.2.4-4.6.6-.4.1-3.7,2.9-3.9,3.2,0,.1-1.5,2.4-2.5,3.9l-1.1,5.9,1,6.1,3.5,4.4,7.6,2.6,1.2-.9h-.5c-6.2-.2-11-5.2-11-11.4Z" fill="#dfd1b8" stroke="#aa9d87" stroke-miterlimit="10"/>
                    </g>
                    <g>
                      <path d="M508.3,356.7c.2-5.8,4.8-10.6,10.7-10.7l8.2-.3v-2.3c0,0-8.3.3-8.3.3-7,.2-12.7,5.9-12.9,12.9v2.8c.2,7,5.8,12.7,12.9,12.9l8.2.3v-2.3c0,0-8.1-.3-8.1-.3-5.8-.2-10.5-4.9-10.7-10.7v-2.7Z" fill="#dfd1b8" stroke="#aa9d87" stroke-miterlimit="10"/>
                      <path d="M527.4,345.9l-8.4.3c-5.7.2-10.3,4.8-10.4,10.5v2.7c.2,5.7,4.7,10.3,10.4,10.5l8.4.3v2.8c0,0-8.5-.3-8.5-.3-7.2-.2-12.9-6-13.1-13.2v-2.8c.2-7.2,5.9-13,13.1-13.2l8.4-.3v2.8ZM526.8,372.4v-1.8c0,0-7.9-.3-7.9-.3-6-.2-10.8-5-10.9-11v-2.7s0,0,0,0c.2-6,5-10.8,10.9-11l7.9-.3v-1.8c0,0-8,.3-8,.3-6.9.2-12.5,5.8-12.6,12.7v2.8c.2,6.9,5.7,12.5,12.6,12.7l7.9.3Z" fill="#dfd1b8" stroke="#aa9d87" stroke-miterlimit="10"/>
                    </g>
                  </g>
                </g>
                <g>
                  
                  <g>
                    <g>
                      <g>
                        <rect x="525.5" y="328.6" width="1.6" height="5.9" transform="translate(120.5 802.9) rotate(-81.5)" fill="#dfd1b8"/>
                        <path d="M529.2,332.8l-5.9-.9.3-1.7,5.9.9-.3,1.7ZM523.3,331.9l5.7.9.2-1.5-5.7-.9-.2,1.5Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M529.6,330.9l-.3,2.1-6.3-.9.3-2.1,6.3.9ZM528.9,332.5l.2-1.1-5.3-.8-.2,1.1,5.3.8Z" fill="#dfd1b8"/>
                        <path d="M529.4,333.1l-6.4-1,.3-2.2,6.4,1-.3,2.2ZM523.1,332.1l6.2.9.3-2-6.2-.9-.3,2ZM528.9,332.6l-5.5-.8.2-1.2,5.5.8-.2,1.2ZM523.6,331.6l5.2.8.2-1-5.2-.8-.2,1Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="526.3" y="327.4" width="1.6" height="6.7" transform="translate(122 803.1) rotate(-81.5)" fill="#dfd1b8"/>
                        <path d="M530.4,332.1l-6.7-1,.3-1.7,6.7,1-.3,1.7ZM523.8,331l6.5,1,.2-1.5-6.5-1-.2,1.5Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M530.8,330.2l-.3,2.1-7.1-1.1.3-2.1,7.1,1.1ZM530.1,331.8l.2-1.1-6.1-.9-.2,1.1,6.1.9Z" fill="#dfd1b8"/>
                        <path d="M530.6,332.4l-7.2-1.1.3-2.2,7.2,1.1-.3,2.2ZM523.5,331.2l7,1,.3-2-7-1-.3,2ZM530.2,331.8l-6.2-.9.2-1.2,6.2.9-.2,1.2ZM524.1,330.8l6,.9.2-1-6-.9-.2,1Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="509.6" y="312.7" width="1.6" height="5.9" transform="translate(-41.1 79.1) rotate(-8.5)" fill="#dfd1b8"/>
                        <path d="M510,318.8l-.9-6,1.7-.3.9,6-1.7.3ZM509.3,312.9l.9,5.8,1.5-.2-.9-5.8-1.5.2Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M511,312.3l1,6.4-2.1.3-1-6.4,2.1-.3ZM511.4,318.2l-.8-5.4-1.1.2.8,5.4,1.1-.2Z" fill="#dfd1b8"/>
                        <path d="M509.8,319l-1-6.5,2.2-.3,1,6.5-2.2.3ZM509,312.7l.9,6.2,2-.3-.9-6.2-2,.3ZM510.2,318.5l-.8-5.5,1.2-.2.8,5.5-1.2.2ZM509.5,313.1l.8,5.3,1-.2-.8-5.3-1,.2Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="510.4" y="311.5" width="1.6" height="6.7" transform="translate(-41 79.2) rotate(-8.5)" fill="#dfd1b8"/>
                        <path d="M510.9,318.3l-1-6.7,1.7-.3,1,6.7-1.7.3ZM510,311.7l1,6.5,1.5-.2-1-6.5-1.5.2Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M511.7,311.1l1.1,7.1-2.1.3-1.1-7.1,2.1-.3ZM512.2,317.8l-.9-6.1-1.1.2.9,6.1,1.1-.2Z" fill="#dfd1b8"/>
                        <path d="M510.6,318.6l-1.1-7.2,2.2-.3,1.1,7.2-2.2.3ZM509.7,311.5l1,7,2-.3-1-7-2,.3ZM511.1,318l-.9-6.2,1.2-.2.9,6.2-1.2.2ZM510.3,311.9l.9,6,1-.2-.9-6-1,.2Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M512.2,327.3c-3.3-3.3-3.4-8.5-.3-12l6-6.8c1.2-1.3,2.7-1.3,4-.1l11.9,11.9c1.2,1.2,1.2,2.8-.1,4l-6.8,6c-3.5,3.1-8.7,2.9-12-.3l-2.7-2.7Z" fill="#dfd1b8"/>
                        <path d="M521,332.6c-2.3,0-4.5-.9-6.2-2.6l-2.7-2.7c-3.3-3.3-3.4-8.6-.3-12.1l6-6.8c.6-.6,1.3-1,2-1,.7,0,1.4.3,2,.9l11.9,11.9c.6.6.9,1.3.9,2s-.4,1.4-1,2l-6.8,6c-1.7,1.5-3.8,2.2-5.9,2.2ZM519.9,307.6s0,0,0,0c-.7,0-1.4.4-1.9,1l-6,6.8c-3.1,3.4-2.9,8.7.3,11.9l2.7,2.7c1.7,1.7,3.9,2.5,6.1,2.5,2.1,0,4.1-.7,5.8-2.2l6.8-6c.6-.6,1-1.2,1-1.9s-.3-1.4-.9-2l-11.9-11.9c-.6-.6-1.2-.9-1.9-.9Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M522,308.2l11.9,11.9c.7.7,1,1.4,1,2.2,0,.8-.4,1.5-1.1,2.1l-6.8,6c-3.5,3.2-9,3-12.3-.3l-2.7-2.7c-3.4-3.4-3.5-8.8-.3-12.3l6-6.8c.6-.7,1.4-1.1,2.1-1.1s1.5.3,2.2,1ZM515,329.8c3.2,3.2,8.3,3.3,11.7.3l6.8-6c.6-.5.9-1.1.9-1.8,0-.6-.3-1.3-.8-1.8l-11.9-11.9c-.6-.6-1.2-.8-1.8-.8-.6,0-1.3.3-1.8.9l-6,6.8c-3,3.4-2.9,8.5.3,11.7l2.7,2.7Z" fill="#dfd1b8"/>
                        <path d="M521,332.8c-2.3,0-4.6-.9-6.4-2.6l-2.7-2.7c-3.4-3.4-3.5-8.8-.3-12.4l6-6.8c.6-.7,1.4-1.1,2.2-1.1.8,0,1.6.3,2.2,1l11.9,11.9c.7.7,1,1.4,1,2.2,0,.8-.4,1.5-1.1,2.2l-6.8,6c-1.7,1.5-3.9,2.3-6,2.3ZM519.9,307.3s0,0,0,0c-.8,0-1.5.4-2.1,1.1l-6,6.8c-3.1,3.5-3,8.9.3,12.3l2.7,2.7c1.7,1.7,4,2.6,6.3,2.6,2.1,0,4.2-.8,5.9-2.3l6.8-6c.7-.6,1-1.3,1.1-2.1,0-.8-.3-1.5-.9-2.1l-11.9-11.9c-.6-.6-1.3-.9-2.1-.9ZM521,332.3c-2.2,0-4.4-.8-6-2.5l-2.7-2.7c-3.2-3.2-3.3-8.4-.3-11.7l6-6.8c.5-.6,1.2-.9,1.8-.9.7,0,1.3.3,1.9.8l11.9,11.9c.6.6.9,1.2.8,1.9,0,.7-.3,1.3-.9,1.8l-6.8,6c-1.6,1.5-3.7,2.2-5.7,2.2ZM515.1,329.8c3.2,3.2,8.2,3.3,11.6.3l6.8-6c.6-.5.9-1.1.9-1.7,0-.6-.3-1.2-.8-1.8l-11.9-11.9c-.5-.5-1.2-.8-1.8-.8-.6,0-1.2.3-1.7.9l-6,6.8c-3,3.3-2.8,8.4.3,11.6l2.7,2.7Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M512.9,326.8c-2.9-2.9-3-7.6-.3-10.7l5.4-6c1-1.2,2.4-1.2,3.5,0l10.6,10.6c1.1,1.1,1.1,2.5,0,3.5l-6,5.4c-3.1,2.7-7.7,2.6-10.7-.3l-2.4-2.4Z" fill="#dfd1b8"/>
                        <path d="M520.8,331.5c-2,0-4-.8-5.5-2.3l-2.4-2.4c-2.9-2.9-3.1-7.6-.3-10.7l5.4-6c.5-.6,1.1-.9,1.8-.9.6,0,1.3.3,1.8.8l10.6,10.6c.5.5.8,1.2.8,1.8,0,.6-.3,1.3-.9,1.8l-6,5.4c-1.5,1.3-3.3,2-5.2,2ZM519.8,309.3s0,0,0,0c-.6,0-1.2.3-1.7.9l-5.4,6c-2.7,3-2.6,7.7.3,10.6l2.4,2.4c1.5,1.5,3.5,2.3,5.5,2.3,1.8,0,3.7-.6,5.1-2l6-5.4c.6-.5.9-1.1.9-1.7,0-.6-.3-1.2-.8-1.7l-10.6-10.6c-.5-.5-1.1-.8-1.7-.8Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M521.6,309.9l10.6,10.6c.6.6.8,1.2.8,1.9,0,.7-.3,1.3-.9,1.8l-6,5.4c-3.1,2.8-7.9,2.6-10.8-.3l-2.4-2.4c-3-3-3.1-7.7-.3-10.8l5.4-6c.5-.6,1.2-.9,1.8-.9.7,0,1.3.3,1.9.8ZM515.4,329.1c2.9,2.9,7.5,3,10.5.3l6-5.4c.5-.5.8-1.1.8-1.6,0-.6-.2-1.2-.8-1.7l-10.6-10.6c-.5-.5-1.1-.8-1.7-.8-.6,0-1.2.3-1.6.9l-5.4,6c-2.7,3-2.6,7.6.3,10.5l2.4,2.4Z" fill="#dfd1b8"/>
                        <path d="M520.8,331.6c-2,0-4.1-.8-5.6-2.3l-2.4-2.4c-3-3-3.1-7.8-.3-10.9l5.4-6c.5-.6,1.2-.9,1.9-1,.7,0,1.3.3,1.9.8l10.6,10.6c.6.6.9,1.2.8,1.9,0,.7-.3,1.3-1,1.9l-6,5.4c-1.5,1.3-3.4,2-5.3,2ZM519.8,309.2s0,0,0,0c-.6,0-1.3.3-1.8.9l-5.4,6c-2.8,3.1-2.6,7.8.3,10.8l2.4,2.4c1.5,1.5,3.5,2.3,5.5,2.3,1.9,0,3.7-.7,5.2-2l6-5.4c.6-.5.9-1.1.9-1.8,0-.6-.3-1.3-.8-1.8l-10.6-10.6c-.5-.5-1.1-.8-1.8-.8ZM520.8,331.4c-2,0-3.9-.8-5.4-2.3l-2.4-2.4c-2.9-2.9-3-7.5-.3-10.6l5.4-6c.5-.6,1.1-.9,1.7-.9.6,0,1.2.2,1.7.8l10.6,10.6c.5.5.8,1.1.8,1.7,0,.6-.3,1.2-.9,1.7l-6,5.4c-1.5,1.3-3.3,2-5.1,2ZM519.8,309.4s0,0,0,0c-.6,0-1.1.3-1.6.8l-5.4,6c-2.7,3-2.5,7.6.3,10.4l2.4,2.4c2.8,2.8,7.4,3,10.4.3l6-5.4c.5-.5.8-1,.8-1.6,0-.6-.2-1.2-.7-1.7l-10.6-10.6c-.5-.5-1-.7-1.6-.7Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M510.4,314.3l-.8.9c-4.1,4.4-4,11.2.3,15.5l1.4,1.4c4.2,4.2,11.1,4.4,15.5.3l.9-.8-.3,2.3-7.5,3.6-5.8-.7-5.1-3.7-3.4-5s-1-4.4-1-4.6c0-.2.4-4.7.6-5.2.2-.5,2.8-3.8,3-3.8.1,0,2.3-.1,2.3-.1Z" fill="#dfd1b8"/>
                        <path d="M519.9,337.5l-5.8-.7h0s-5.1-3.7-5.1-3.7h0s-3.4-5-3.4-5h0c0-.2-1-4.4-1-4.6,0-.2.4-4.7.6-5.2.2-.4,2.8-3.8,3-3.9.1,0,2.1-.1,2.3-.1h.1s-.9,1-.9,1c-2,2.1-3,4.9-3,7.7,0,2.9,1.2,5.6,3.2,7.6l1.4,1.4c2,2,4.8,3.2,7.6,3.2,2.9,0,5.6-1,7.7-3l1-.9-.3,2.5-7.5,3.7ZM514.1,336.7l5.7.7,7.4-3.6.3-2.1-.8.7c-2.1,2-4.9,3.1-7.8,3-2.9,0-5.7-1.2-7.7-3.3l-1.4-1.4c-2.1-2.1-3.2-4.8-3.3-7.7,0-2.9,1-5.7,3-7.8l.7-.8c-.8,0-2,.1-2.1.1-.2.2-2.7,3.3-2.9,3.8-.2.4-.6,4.9-.6,5.1,0,.2,1,4.3,1,4.6l3.4,5,5,3.7Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M528,330.9l-.4,3.1-7.6,3.7-5.9-.7-5.1-3.7h0s-3.4-5.1-3.4-5.1h0c-.1-.5-1-4.5-1-4.7,0-.2.3-4.8.6-5.3.1-.3,1.2-1.7,1.5-2.1,1.4-1.8,1.5-1.8,1.6-1.8.1,0,1.7-.1,2.3-.1h.6s-1.2,1.3-1.2,1.3c-4,4.3-3.9,11,.3,15.1l1.4,1.4c4.2,4.2,10.8,4.3,15.1.3l1.4-1.3ZM511.1,332.3l-1.4-1.4c-4.4-4.4-4.5-11.3-.3-15.8l.4-.4c-.7,0-1.4,0-1.6,0-.4.4-2.7,3.3-2.8,3.7-.2.4-.6,4.7-.5,5,0,.1.6,2.8,1,4.5l3.4,4.9,5,3.6,5.6.7,7.3-3.5.2-1.5-.4.3c-4.5,4.2-11.5,4.1-15.8-.3Z" fill="#dfd1b8"/>
                        <path d="M519.9,337.7l-5.9-.7h0s-5.1-3.7-5.1-3.7h0s-3.4-5.1-3.4-5.1h0c-.4-1.8-1-4.5-1-4.7,0-.2.3-4.8.6-5.3.2-.3,1.2-1.7,1.5-2.1,1.4-1.8,1.5-1.8,1.6-1.9.1,0,1.7-.1,2.3-.1h.8s-1.3,1.4-1.3,1.4c-4,4.3-3.9,10.9.3,15l1.4,1.4c4.1,4.1,10.8,4.3,15,.3l1.5-1.4-.4,3.3-7.7,3.7ZM514,336.9l5.9.7,7.6-3.7.4-2.9-1.3,1.2c-4.3,4-11,3.9-15.2-.3l-1.4-1.4c-4.2-4.2-4.3-10.9-.3-15.2l1.1-1.2h-.5c-1.4,0-2.2.1-2.3.2,0,0-.2,0-1.6,1.8-.7.9-1.4,1.9-1.5,2.1-.2.5-.6,5.1-.6,5.3,0,.1.4,1.8,1,4.5h0c0,.1,3.4,5.1,3.4,5.1l5.1,3.7ZM519.8,337.2l-5.6-.7h0s-5-3.6-5-3.6h0s-3.4-4.9-3.4-4.9h0c-.4-1.7-1-4.4-1-4.5,0-.4.4-4.7.5-5.1.2-.4,2.5-3.3,2.9-3.7h0s0,0,0,0c.3,0,1.2,0,1.6,0h.1s-.5.5-.5.5c-4.2,4.5-4.1,11.4.3,15.7l1.4,1.4c4.3,4.3,11.2,4.5,15.7.3l.5-.5-.2,1.6-7.3,3.6ZM514.2,336.5l5.6.7,7.2-3.5.2-1.3-.2.2c-2.2,2.1-5,3.1-7.8,3.1-2.9,0-5.8-1.1-8.1-3.4l-1.4-1.4c-4.4-4.4-4.5-11.4-.3-15.9l.3-.3c-.4,0-1.2,0-1.4,0-.5.5-2.7,3.3-2.8,3.7-.2.4-.6,4.6-.5,5,0,.1.6,2.8,1,4.5l3.3,4.9,4.9,3.6Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M508.7,331.4c-4-4.2-4-10.9,0-15.1l5.6-6-1.7-1.5-5.6,6c-4.8,5.1-4.8,13.1,0,18.3l2,2c5.1,4.8,13.1,4.9,18.3,0l6-5.6-1.5-1.7-6,5.6c-4.3,4-10.9,4-15.1,0l-1.9-1.9Z" fill="#dfd1b8"/>
                        <path d="M518.2,338.6c-3.3,0-6.6-1.2-9.2-3.7l-2-2c-4.9-5.1-4.9-13.2,0-18.3l5.6-6,1.7,1.6-5.6,6c-4,4.2-4,10.9,0,15.1l1.9,1.9c4.2,4,10.8,4,15.1,0l6-5.6,1.6,1.7h0s-6,5.6-6,5.6c-2.6,2.4-5.9,3.6-9.1,3.6ZM512.6,308.8l-5.6,5.9c-4.8,5.1-4.8,13.1,0,18.2l2,2c5.1,4.8,13.1,4.8,18.2,0l5.9-5.6-1.5-1.6-5.9,5.6c-4.3,4-11,4-15.2,0l-1.9-1.9c-4-4.3-4.1-10.9,0-15.2l5.6-5.9-1.6-1.5Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M514.6,310.3l-5.8,6.2c-3.9,4.2-3.9,10.7,0,14.8l1.9,1.9c4.1,3.9,10.6,3.9,14.8,0l6.2-5.8,1.9,2-6.2,5.8c-5.2,4.9-13.4,4.9-18.6,0l-2-2c-4.9-5.2-5-13.4,0-18.6l5.8-6.2,2,1.9ZM532.9,329.4l-1.2-1.3-5.8,5.4c-4.4,4.1-11.2,4.1-15.5,0l-1.9-1.9h0c-4.1-4.3-4.1-11.1,0-15.5l5.4-5.8-1.3-1.2-5.4,5.8c-4.7,5-4.7,12.9,0,17.9l2,2c5,4.7,12.9,4.8,17.9,0l5.8-5.4Z" fill="#dfd1b8"/>
                        <path d="M518.2,338.9c-3.4,0-6.7-1.2-9.4-3.7l-2-2c-5-5.2-5-13.4,0-18.7l5.8-6.2,2.1,2-5.8,6.2c-3.9,4.1-3.9,10.6,0,14.7l1.9,1.9c2.1,2,4.7,2.9,7.4,2.9,2.6,0,5.3-1,7.3-2.9l6.2-5.8,2,2.1h0s-6.2,5.8-6.2,5.8c-2.6,2.5-6,3.7-9.3,3.7ZM512.6,308.5l-5.7,6.1c-4.9,5.2-4.9,13.3,0,18.5l2,2c5.2,4.9,13.3,4.9,18.5,0l6.1-5.7-1.8-1.9-6.1,5.7c-4.2,3.9-10.7,3.9-14.9,0l-1.9-1.9c-3.9-4.2-4-10.7,0-14.9l5.7-6.1-1.9-1.8ZM518.2,338.4c-3.2,0-6.5-1.2-9-3.6l-2-2c-4.8-5-4.8-12.9,0-18l5.5-5.8,1.4,1.3-5.5,5.8c-4.1,4.3-4,11.1,0,15.4l1.9,1.9c4.3,4.1,11.1,4.1,15.4,0l5.8-5.5,1.3,1.4h0s-5.8,5.5-5.8,5.5c-2.5,2.4-5.7,3.5-9,3.5ZM512.6,309.2l-5.4,5.8c-4.7,5-4.7,12.8,0,17.8l2,2c5,4.7,12.8,4.7,17.8,0l5.8-5.4-1.1-1.2-5.8,5.4c-4.4,4.1-11.2,4.1-15.6,0l-1.9-1.9c-4.1-4.4-4.2-11.2,0-15.6l5.4-5.8-1.2-1.1Z" fill="#aa9d87"/>
                      </g>
                    </g>
                  </g>
                </g>
                <g>
                  
                  <g>
                    <g>
                      <g>
                        <rect x="519.8" y="293.4" width="1.6" height="5.9" transform="translate(-74.1 367.6) rotate(-36.5)" fill="#dfd1b8"/>
                        <path d="M521.7,299.2l-3.6-4.8,1.4-1,3.6,4.8-1.4,1ZM518.3,294.4l3.4,4.6,1.2-.9-3.4-4.6-1.2.9Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M523.4,298.2l-1.7,1.3-3.8-5.1,1.7-1.3,3.8,5.1ZM521.8,298.8l.9-.7-3.2-4.3-.9.7,3.2,4.3Z" fill="#dfd1b8"/>
                        <path d="M521.7,299.6l-3.9-5.2,1.8-1.3,3.9,5.2-1.8,1.3ZM518,294.4l3.7,5,1.6-1.2-3.7-5-1.6,1.2ZM521.8,298.9l-3.3-4.4,1-.7,3.3,4.4-1,.7ZM518.6,294.5l3.1,4.2.8-.6-3.1-4.2-.8.6Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="521" y="293" width="1.6" height="6.7" transform="translate(-73.9 368.3) rotate(-36.5)" fill="#dfd1b8"/>
                        <path d="M523.1,299.6l-4-5.4,1.4-1,4,5.4-1.4,1ZM519.2,294.2l3.9,5.3,1.2-.9-3.9-5.3-1.2.9Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M524.8,298.6l-1.7,1.3-4.2-5.7,1.7-1.3,4.2,5.7ZM523.1,299.2l.9-.7-3.7-5-.9.7,3.7,5Z" fill="#dfd1b8"/>
                        <path d="M523,299.9l-4.3-5.8,1.8-1.3,4.3,5.8-1.8,1.3ZM518.9,294.1l4.2,5.7,1.6-1.2-4.2-5.7-1.6,1.2ZM523.1,299.2l-3.7-5,1-.7,3.7,5-1,.7ZM519.6,294.2l3.6,4.9.8-.6-3.6-4.9-.8.6Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="517.7" y="273" width="5.9" height="1.6" transform="translate(-9.1 529.6) rotate(-53.5)" fill="#dfd1b8"/>
                        <path d="M519.6,276.8l-1.4-1,3.6-4.9,1.4,1-3.6,4.9ZM518.3,275.7l1.2.9,3.5-4.7-1.2-.9-3.5,4.7Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M523.4,271.9l-3.8,5.2-1.7-1.3,3.8-5.2,1.7,1.3ZM519.5,276.4l3.2-4.4-.9-.7-3.2,4.4.9.7Z" fill="#dfd1b8"/>
                        <path d="M519.6,277.1l-1.8-1.3,3.9-5.3,1.8,1.3-3.9,5.3ZM518,275.8l1.6,1.2,3.8-5.1-1.6-1.2-3.8,5.1ZM519.5,276.4l-1-.7,3.3-4.5,1,.7-3.3,4.5ZM518.6,275.7l.8.6,3.2-4.3-.8-.6-3.2,4.3Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="518.5" y="273" width="6.7" height="1.6" transform="translate(-8.6 530.5) rotate(-53.5)" fill="#dfd1b8"/>
                        <path d="M520.5,277l-1.4-1,4-5.4,1.4,1-4,5.4ZM519.2,276l1.2.9,3.9-5.3-1.2-.9-3.9,5.3Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M524.8,271.6l-4.2,5.7-1.7-1.3,4.2-5.7,1.7,1.3ZM520.4,276.6l3.7-5-.9-.7-3.7,5,.9.7Z" fill="#dfd1b8"/>
                        <path d="M520.5,277.4l-1.8-1.3,4.3-5.8,1.8,1.3-4.3,5.8ZM518.9,276l1.6,1.2,4.2-5.7-1.6-1.2-4.2,5.7ZM520.4,276.7l-1-.7,3.7-5,1,.7-3.7,5ZM519.6,275.9l.8.6,3.6-4.9-.8-.6-3.6,4.9Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M513.6,283.3c0-4.6,3.6-8.5,8.2-8.7l9-.5c1.7,0,2.9,1,2.9,2.7v16.8c0,1.7-1.1,2.8-2.9,2.7l-9-.5c-4.6-.3-8.2-4.1-8.2-8.7v-3.8Z" fill="#dfd1b8"/>
                        <path d="M531.1,296.4c0,0-.1,0-.2,0l-9-.5c-4.7-.3-8.3-4.1-8.3-8.8v-3.8c0-4.7,3.6-8.5,8.3-8.8l9-.5c.9,0,1.6.2,2.1.7.5.5.8,1.2.8,2.1v16.8c0,.9-.3,1.6-.8,2.1-.5.5-1.1.7-1.9.7ZM531.1,274.1c0,0-.1,0-.2,0l-9,.5c-4.6.3-8.2,4.1-8.2,8.7v3.8c0,4.6,3.6,8.4,8.2,8.7l9,.5c.8,0,1.5-.2,2-.7.5-.5.8-1.2.8-2v-16.8c0-.8-.3-1.5-.8-2-.5-.4-1.1-.7-1.8-.7Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M534.1,276.8v16.8c0,.9-.3,1.7-.9,2.2-.6.5-1.4.8-2.3.7l-9-.5c-4.8-.3-8.5-4.2-8.5-9v-3.8c0-4.8,3.7-8.7,8.5-9l9-.5c.9,0,1.7.2,2.3.7s.9,1.3.9,2.2ZM513.9,287.1c0,4.5,3.5,8.2,8,8.5l9,.5c.8,0,1.4-.2,1.9-.6.5-.4.7-1.1.7-1.9v-16.8c0-.8-.2-1.4-.7-1.9-.5-.4-1.1-.6-1.9-.6l-9,.5c-4.5.3-8,4-8,8.5v3.8Z" fill="#dfd1b8"/>
                        <path d="M531.1,296.6c0,0-.2,0-.2,0l-9-.5c-4.8-.3-8.5-4.2-8.5-9v-3.8c0-4.8,3.7-8.8,8.5-9l9-.5c.9,0,1.7.2,2.3.8.6.5.9,1.3.9,2.3v16.8c0,.9-.3,1.7-.9,2.3-.5.5-1.2.8-2.1.8ZM531.1,273.8c0,0-.2,0-.2,0l-9,.5c-4.7.3-8.4,4.2-8.4,8.9v3.8c0,4.7,3.7,8.6,8.4,8.9l9,.5c.9,0,1.7-.2,2.2-.7.6-.5.8-1.3.8-2.2v-16.8c0-.9-.3-1.7-.8-2.2-.5-.5-1.2-.7-2-.7ZM531.1,296.2c0,0-.1,0-.2,0l-9-.5c-4.5-.3-8.1-4-8.1-8.5v-3.8c0-4.5,3.5-8.3,8.1-8.5l9-.5c.8,0,1.5.2,1.9.6.5.5.7,1.1.7,1.9v16.8c0,.8-.3,1.5-.7,1.9-.4.4-1,.6-1.7.6ZM531.1,274.3c0,0-.1,0-.2,0l-9,.5c-4.5.3-8,3.9-8,8.4v3.8c0,4.5,3.5,8.2,8,8.4l9,.5c.8,0,1.4-.2,1.9-.6.5-.4.7-1.1.7-1.8v-16.8c0-.8-.2-1.4-.7-1.8-.4-.4-1-.6-1.7-.6Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M514.5,283.5c0-4.1,3.2-7.5,7.3-7.8l8-.5c1.5,0,2.6.9,2.6,2.4v15c0,1.5-1,2.5-2.6,2.4l-8-.5c-4.1-.2-7.3-3.6-7.3-7.8v-3.4Z" fill="#dfd1b8"/>
                        <path d="M530.1,295.2c0,0-.1,0-.2,0l-8-.5c-4.1-.2-7.4-3.7-7.4-7.8v-3.4c0-4.1,3.2-7.6,7.4-7.8l8-.5c.8,0,1.4.2,1.9.6.5.4.7,1.1.7,1.9v15c0,.8-.2,1.4-.7,1.9-.4.4-1,.6-1.7.6ZM530.1,275.3c0,0-.1,0-.2,0l-8,.5c-4.1.2-7.3,3.6-7.3,7.7v3.4c0,4.1,3.2,7.5,7.3,7.7l8,.5c.7,0,1.4-.2,1.8-.6.4-.4.7-1,.7-1.8v-15c0-.7-.2-1.4-.7-1.8-.4-.4-1-.6-1.6-.6Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M532.6,277.7v15c0,.8-.3,1.5-.7,1.9-.5.5-1.2.7-1.9.6l-8-.5c-4.2-.2-7.4-3.7-7.4-7.9v-3.4c0-4.2,3.3-7.6,7.4-7.9l8-.5c.8,0,1.5.2,1.9.6.5.5.7,1.1.7,1.9ZM514.7,286.9c0,4,3.2,7.4,7.2,7.6l8,.5c.7,0,1.3-.2,1.8-.6.4-.4.7-1,.7-1.7v-15c0-.7-.2-1.3-.7-1.7-.4-.4-1-.6-1.8-.6l-8,.5c-4,.2-7.2,3.6-7.2,7.6v3.4Z" fill="#dfd1b8"/>
                        <path d="M530.1,295.3c0,0-.1,0-.2,0l-8-.5c-4.2-.2-7.5-3.7-7.5-7.9v-3.4c0-4.2,3.3-7.7,7.5-7.9l8-.5c.8,0,1.5.2,2,.6.5.5.8,1.1.8,2v15c0,.8-.3,1.5-.8,2-.5.4-1.1.7-1.8.7ZM530.1,275.2c0,0-.1,0-.2,0l-8,.5c-4.1.2-7.4,3.7-7.4,7.8v3.4c0,4.1,3.2,7.6,7.4,7.8l8,.5c.8,0,1.4-.2,1.9-.6.5-.4.7-1.1.7-1.9v-15c0-.8-.2-1.4-.7-1.9-.4-.4-1-.6-1.7-.6ZM530.1,295c0,0-.1,0-.2,0l-8-.5c-4.1-.2-7.3-3.6-7.3-7.7v-3.4c0-4.1,3.2-7.5,7.3-7.7l8-.5c.7,0,1.4.2,1.8.6.4.4.7,1,.7,1.8v15c0,.7-.2,1.4-.7,1.8-.4.4-1,.6-1.6.6ZM530.1,275.5c0,0-.1,0-.2,0l-8,.5c-4,.2-7.2,3.6-7.2,7.6v3.4c0,4,3.1,7.3,7.2,7.6l8,.5c.7,0,1.3-.1,1.7-.5.4-.4.6-1,.6-1.7v-15c0-.7-.2-1.3-.6-1.7-.4-.4-.9-.6-1.5-.6Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M521.6,272.9h-1.2c-6,.2-10.8,5.2-10.8,11.2v2c0,6,4.8,10.9,10.8,11.1h1.2s-1.8,1.4-1.8,1.4l-7.8-2.7-3.6-4.6-1-6.2,1.1-5.9s2.4-3.8,2.5-4c.1-.1,3.6-3.1,4-3.3.5-.2,4.7-.7,4.8-.6.1,0,1.7,1.5,1.7,1.5Z" fill="#dfd1b8"/>
                        <path d="M519.7,298.7l-7.9-2.7h0s-3.6-4.6-3.6-4.6h0s-1-6.2-1-6.2l1.1-6c0-.2,2.4-3.8,2.5-4,.1-.2,3.6-3.1,4.1-3.3.4-.2,4.7-.7,4.9-.6.1,0,1.6,1.4,1.7,1.5h.1c0,0-1.3.1-1.3.1-2.9,0-5.6,1.3-7.6,3.4s-3.1,4.8-3.1,7.7v2c0,2.9,1.1,5.6,3.1,7.7s4.7,3.3,7.6,3.4h1.3s-2,1.6-2,1.6ZM511.9,295.9l7.8,2.7,1.7-1.3h-1c-2.9-.1-5.6-1.3-7.7-3.4-2-2.1-3.1-4.9-3.1-7.8v-2c0-2.9,1.1-5.7,3.1-7.8,2-2.1,4.7-3.3,7.7-3.4h1c-.6-.6-1.5-1.4-1.6-1.4-.3,0-4.3.4-4.8.6-.4.2-3.9,3.1-4,3.2-.1.1-2.4,3.8-2.5,4l-1.1,5.9,1,6.1,3.6,4.5Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M522.3,297l-2.5,1.9-8-2.8-3.7-4.7-1-6.3h0s1.1-6,1.1-6h0c.2-.4,2.4-3.9,2.5-4,.1-.2,3.6-3.1,4.2-3.3.3-.1,2.1-.4,2.6-.4,2.3-.3,2.4-.2,2.4-.2.1,0,1.3,1.1,1.7,1.5l.5.4h-1.8c-5.9.3-10.5,5-10.5,10.9v2c0,5.9,4.6,10.7,10.5,10.9h1.9ZM509.4,286.1v-2c0-6.2,4.8-11.2,11-11.4h.6c-.5-.5-1-.9-1.2-1.1-.6,0-4.2.4-4.6.6-.4.1-3.7,2.9-3.9,3.2,0,.1-1.5,2.4-2.5,3.9l-1.1,5.9,1,6.1,3.5,4.4,7.6,2.6,1.2-.9h-.5c-6.2-.2-11-5.2-11-11.4Z" fill="#dfd1b8"/>
                        <path d="M519.8,299l-8.1-2.8h0s-3.7-4.7-3.7-4.7h0s-1-6.3-1-6.3h0c0,0,1.1-6,1.1-6h0c.9-1.5,2.4-3.9,2.5-4,.1-.2,3.6-3.1,4.2-3.4.3-.1,2.1-.4,2.6-.4,2.3-.3,2.4-.2,2.5-.2.1,0,1.1,1,1.7,1.5l.6.5h-1.9c-5.9.3-10.5,5-10.5,10.9v2c0,5.9,4.6,10.6,10.5,10.8h2c0,0-2.6,2.1-2.6,2.1ZM511.8,296.1l8,2.8,2.3-1.8h-1.7c-5.9-.3-10.6-5.1-10.6-11v-2c0-5.9,4.6-10.7,10.6-10.9h1.7c0,0-.3-.4-.3-.4-1-.9-1.7-1.5-1.7-1.5,0,0-.1,0-2.4.2-1.1.1-2.3.3-2.6.4-.5.2-4,3.2-4.1,3.3,0,0-1,1.5-2.5,3.9h0c0,0-1.1,6.1-1.1,6.1l1,6.2,3.6,4.6ZM519.7,298.4l-7.7-2.7h0s-3.5-4.5-3.5-4.5h0s-1-6.1-1-6.1l1.1-5.9c.9-1.5,2.4-3.8,2.5-3.9.3-.3,3.6-3.1,4-3.2.4-.2,4.1-.6,4.6-.6h0s0,0,0,0c.2.2.9.8,1.2,1.1h.1c0,0-.7.1-.7.1-6.1.2-10.9,5.2-10.9,11.3v2c0,6.1,4.8,11.1,10.9,11.3h.7s-1.3,1-1.3,1ZM512.1,295.7l7.6,2.6,1-.8h-.3c-6.2-.2-11-5.2-11-11.4v-2c0-6.2,4.9-11.2,11-11.4h.4c-.3-.3-.9-.8-1.1-1-.7,0-4.2.5-4.6.6-.4.1-3.7,2.9-3.9,3.2,0,.1-1.5,2.3-2.5,3.9l-1.1,5.8,1,6,3.5,4.4Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M508.3,283.7c.2-5.8,4.8-10.6,10.7-10.7l8.2-.3v-2.3c0,0-8.3.3-8.3.3-7,.2-12.7,5.9-12.9,12.9v2.8c.2,7,5.8,12.7,12.9,12.9l8.2.3v-2.3c0,0-8.1-.3-8.1-.3-5.8-.2-10.5-4.9-10.7-10.7v-2.7Z" fill="#dfd1b8"/>
                        <path d="M527.1,299.7l-8.2-.3c-7.1-.2-12.7-5.9-12.9-13v-2.8c.2-7.1,5.9-12.8,12.9-13l8.2-.3v2.4c0,0-8.2.3-8.2.3-5.8.2-10.5,4.9-10.6,10.7v2.7c.2,5.8,4.8,10.5,10.6,10.7l8.2.3v2.4ZM527,270.5l-8.1.3c-7,.2-12.6,5.9-12.8,12.9v2.8c.2,7,5.8,12.7,12.8,12.9l8.1.3v-2.1c0,0-8.1-.3-8.1-.3-5.9-.2-10.6-4.9-10.7-10.8v-2.7c.2-5.9,4.9-10.6,10.7-10.8l8.1-.3v-2.1Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M527.4,273l-8.4.3c-5.7.2-10.3,4.8-10.4,10.5v2.7c.2,5.7,4.7,10.3,10.4,10.5l8.4.3v2.8c0,0-8.5-.3-8.5-.3-7.2-.2-12.9-6-13.1-13.2v-2.8c.2-7.2,5.9-13,13.1-13.2l8.4-.3v2.8ZM526.8,299.4v-1.8c0,0-7.9-.3-7.9-.3-6-.2-10.8-5-10.9-11v-2.7s0,0,0,0c.2-6,5-10.8,10.9-11l7.9-.3v-1.8c0,0-8,.3-8,.3-6.9.2-12.5,5.8-12.6,12.7v2.8c.2,6.9,5.7,12.5,12.6,12.7l7.9.3Z" fill="#dfd1b8"/>
                        <path d="M527.3,300l-8.5-.3c-7.2-.2-13-6-13.2-13.2v-2.8c.2-7.2,6-13,13.2-13.2l8.5-.3v2.9c0,0-8.4.3-8.4.3-5.7.2-10.2,4.8-10.4,10.4v2.7c.1,5.7,4.7,10.3,10.4,10.4l8.5.3v2.9ZM527.2,270.3l-8.4.3c-7.1.2-12.9,6-13.1,13.1v2.8c.2,7.1,5.9,12.9,13.1,13.1l8.4.3v-2.6c0,0-8.3-.3-8.3-.3-5.7-.2-10.3-4.8-10.5-10.5v-2.7c.2-5.7,4.8-10.4,10.5-10.6l8.4-.3v-2.6ZM526.9,299.5l-8-.3c-6.9-.2-12.5-5.8-12.7-12.8v-2.8c.2-6.9,5.8-12.5,12.7-12.8l8-.3v1.9c0,0-7.9.3-7.9.3-5.9.2-10.7,5-10.9,10.9v2.7c.2,5.9,4.9,10.7,10.9,10.9l8,.3v1.9ZM526.8,270.8l-7.9.3c-6.9.2-12.4,5.8-12.6,12.6v2.8c.2,6.9,5.7,12.4,12.6,12.6l7.9.3v-1.7c0,0-7.8-.3-7.8-.3-6-.2-10.8-5-11-11v-2.7c.2-6,5-10.8,11-11l7.9-.3v-1.7Z" fill="#aa9d87"/>
                      </g>
                    </g>
                  </g>
                </g>
                <g filter="url(#drop-shadow-11)">
                  <g>
                    <g>
                      <rect x="517.7" y="368.4" width="5.9" height="1.6" transform="translate(533.3 1007.4) rotate(-126.5)" fill="#dfd1b8"/>
                      <path d="M521.7,372.2l-3.6-4.8,1.4-1,3.6,4.8-1.4,1ZM518.3,367.4l3.4,4.6,1.2-.9-3.4-4.6-1.2.9Z" fill="#aa9d87"/>
                    </g>
                    <g>
                      <path d="M523.4,371.2l-1.7,1.3-3.8-5.1,1.7-1.3,3.8,5.1ZM521.8,371.8l.9-.7-3.2-4.3-.9.7,3.2,4.3Z" fill="#dfd1b8"/>
                      <path d="M521.7,372.5l-3.9-5.2,1.8-1.3,3.9,5.2-1.8,1.3ZM518,367.3l3.7,5,1.6-1.2-3.7-5-1.6,1.2ZM521.8,371.8l-3.3-4.4,1-.7h0s3.2,4.4,3.2,4.4l-1,.7ZM518.6,367.4l3.1,4.2.8-.6-3.1-4.2-.8.6Z" fill="#aa9d87"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <rect x="518.5" y="368.5" width="6.7" height="1.6" transform="translate(535.1 1008.4) rotate(-126.5)" fill="#dfd1b8"/>
                      <path d="M523.1,372.5l-4-5.4,1.4-1,4,5.4-1.4,1ZM519.2,367.1l3.9,5.3,1.2-.9-3.9-5.3-1.2.9Z" fill="#aa9d87"/>
                    </g>
                    <g>
                      <path d="M524.8,371.5l-1.7,1.3-4.2-5.7,1.7-1.3,4.2,5.7ZM523.1,372.1l.9-.7-3.7-5-.9.7,3.7,5Z" fill="#dfd1b8"/>
                      <path d="M523,372.9l-4.3-5.8,1.8-1.3,4.3,5.8-1.8,1.3ZM518.9,367.1l4.2,5.7,1.6-1.2-4.2-5.7-1.6,1.2ZM523.1,372.2l-3.7-5,1-.7,3.7,5-1,.7ZM519.6,367.2l3.6,4.9.8-.6-3.6-4.9-.8.6Z" fill="#aa9d87"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <rect x="517.7" y="346" width="5.9" height="1.6" transform="translate(1109.1 134.4) rotate(126.5)" fill="#dfd1b8"/>
                      <path d="M519.6,349.7l-1.4-1,3.6-4.9,1.4,1-3.6,4.9ZM518.3,348.7l1.2.9,3.5-4.7-1.2-.9-3.5,4.7Z" fill="#aa9d87"/>
                    </g>
                    <g>
                      <path d="M523.4,344.8l-3.8,5.2-1.7-1.3,3.8-5.2,1.7,1.3ZM519.5,349.3l3.2-4.4-.9-.7-3.2,4.4.9.7Z" fill="#dfd1b8"/>
                      <path d="M519.6,350.1l-1.8-1.3,3.9-5.3,1.8,1.3-3.9,5.3ZM518,348.7l1.6,1.2,3.8-5.1-1.6-1.2-3.8,5.1ZM519.5,349.4l-1-.7,3.3-4.5,1,.7-3.3,4.5ZM518.6,348.6l.8.6,3.2-4.3-.8-.6-3.2,4.3Z" fill="#aa9d87"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <rect x="518.5" y="345.9" width="6.7" height="1.6" transform="translate(1110.8 133.4) rotate(126.5)" fill="#dfd1b8"/>
                      <path d="M520.5,350l-1.4-1,4-5.4,1.4,1-4,5.4ZM519.2,348.9l1.2.9,3.9-5.3-1.2-.9-3.9,5.3Z" fill="#aa9d87"/>
                    </g>
                    <g>
                      <path d="M524.8,344.5l-4.2,5.7-1.7-1.3,4.2-5.7,1.7,1.3ZM520.4,349.6l3.7-5-.9-.7-3.7,5,.9.7Z" fill="#dfd1b8"/>
                      <path d="M520.5,350.4l-1.8-1.3,4.3-5.8,1.8,1.3-4.3,5.8ZM518.9,349l1.6,1.2,4.2-5.7-1.6-1.2-4.2,5.7ZM520.4,349.7l-1-.7,3.7-5,1,.7-3.7,5ZM519.6,348.9l.8.6,3.6-4.9-.8-.6-3.6,4.9Z" fill="#aa9d87"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M513.6,356.2c0-4.6,3.6-8.5,8.2-8.7l9-.5c1.7,0,2.9,1,2.9,2.7v16.8c0,1.7-1.1,2.8-2.9,2.7l-9-.5c-4.6-.3-8.2-4.1-8.2-8.7v-3.8Z" fill="#dfd1b8"/>
                      <path d="M531.1,369.4c0,0-.1,0-.2,0l-9-.5c-4.7-.3-8.3-4.1-8.3-8.8v-3.8c0-4.7,3.6-8.5,8.3-8.8l9-.5c.9,0,1.6.2,2.1.7.5.5.8,1.2.8,2.1v16.8c0,.9-.3,1.6-.8,2.1-.5.5-1.1.7-1.9.7ZM531.1,347.1c0,0-.1,0-.2,0l-9,.5c-4.6.3-8.2,4.1-8.2,8.7v3.8c0,4.6,3.6,8.4,8.2,8.7l9,.5c.8,0,1.5-.2,2-.7.5-.5.8-1.2.8-2v-16.8c0-.8-.3-1.5-.8-2-.5-.4-1.1-.7-1.8-.7Z" fill="#aa9d87"/>
                    </g>
                    <g>
                      <path d="M534.1,349.7v16.8c0,.9-.3,1.7-.9,2.2-.6.5-1.4.8-2.3.7l-9-.5c-4.8-.3-8.5-4.2-8.5-9v-3.8c0-4.8,3.7-8.7,8.5-9l9-.5c.9,0,1.7.2,2.3.7s.9,1.3.9,2.2ZM513.9,360.1c0,4.5,3.5,8.2,8,8.5l9,.5c.8,0,1.4-.2,1.9-.6.5-.4.7-1.1.7-1.9v-16.8c0-.8-.2-1.4-.7-1.9-.5-.4-1.1-.6-1.9-.6l-9,.5c-4.5.3-8,4-8,8.5v3.8Z" fill="#dfd1b8"/>
                      <path d="M531.1,369.6c0,0-.2,0-.2,0l-9-.5c-4.8-.3-8.5-4.2-8.5-9v-3.8c0-4.8,3.7-8.8,8.5-9l9-.5c.9,0,1.7.2,2.3.8.6.5.9,1.3.9,2.3v16.8c0,.9-.3,1.7-.9,2.3-.5.5-1.2.8-2.1.8ZM531.1,346.8c0,0-.2,0-.2,0l-9,.5c-4.7.3-8.4,4.2-8.4,8.9v3.8c0,4.7,3.7,8.6,8.4,8.9l9,.5c.9,0,1.7-.2,2.2-.7.6-.5.8-1.3.8-2.2v-16.8c0-.9-.3-1.7-.8-2.2-.5-.5-1.2-.7-2-.7ZM531.1,369.1c0,0-.1,0-.2,0l-9-.5c-4.5-.3-8.1-4-8.1-8.5v-3.8c0-4.5,3.5-8.3,8.1-8.5l9-.5c.8,0,1.5.2,1.9.6.5.5.7,1.1.7,1.9v16.8c0,.8-.3,1.5-.7,1.9-.4.4-1,.6-1.7.6ZM531.1,347.3c0,0-.1,0-.2,0l-9,.5c-4.5.3-8,3.9-8,8.4v3.8c0,4.5,3.5,8.2,8,8.4l9,.5c.8,0,1.4-.2,1.9-.6.5-.4.7-1.1.7-1.8v-16.8c0-.8-.2-1.4-.7-1.8-.4-.4-1-.6-1.7-.6Z" fill="#aa9d87"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M514.5,356.4c0-4.1,3.2-7.5,7.3-7.8l8-.5c1.5,0,2.6.9,2.6,2.4v15c0,1.5-1,2.5-2.6,2.4l-8-.5c-4.1-.2-7.3-3.6-7.3-7.8v-3.4Z" fill="#dfd1b8"/>
                      <path d="M530.1,368.1c0,0-.1,0-.2,0l-8-.5c-4.1-.2-7.4-3.7-7.4-7.8v-3.4c0-4.1,3.2-7.6,7.4-7.8l8-.5c.8,0,1.4.2,1.9.6.5.4.7,1.1.7,1.9v15c0,.8-.2,1.4-.7,1.9-.4.4-1,.6-1.7.6ZM530.1,348.3c0,0-.1,0-.2,0l-8,.5c-4.1.2-7.3,3.6-7.3,7.7v3.4c0,4.1,3.2,7.5,7.3,7.7l8,.5c.7,0,1.4-.2,1.8-.6.4-.4.7-1,.7-1.8v-15c0-.7-.2-1.4-.7-1.8-.4-.4-1-.6-1.6-.6Z" fill="#aa9d87"/>
                    </g>
                    <g>
                      <path d="M532.6,350.7v15c0,.8-.3,1.5-.7,1.9-.5.5-1.2.7-1.9.6l-8-.5c-4.2-.2-7.4-3.7-7.4-7.9v-3.4c0-4.2,3.3-7.6,7.4-7.9l8-.5c.8,0,1.5.2,1.9.6.5.5.7,1.1.7,1.9ZM514.7,359.9c0,4,3.2,7.4,7.2,7.6l8,.5c.7,0,1.3-.2,1.8-.6.4-.4.7-1,.7-1.7v-15c0-.7-.2-1.3-.7-1.7-.4-.4-1-.6-1.8-.6l-8,.5c-4,.2-7.2,3.6-7.2,7.6v3.4Z" fill="#dfd1b8"/>
                      <path d="M530.1,368.2c0,0-.1,0-.2,0l-8-.5c-4.2-.2-7.5-3.7-7.5-7.9v-3.4c0-4.2,3.3-7.7,7.5-7.9l8-.5c.8,0,1.5.2,2,.6.5.5.8,1.1.8,2v15c0,.8-.3,1.5-.8,2-.5.4-1.1.7-1.8.7ZM530.1,348.2c0,0-.1,0-.2,0l-8,.5c-4.1.2-7.4,3.7-7.4,7.8v3.4c0,4.1,3.2,7.6,7.4,7.8l8,.5c.8,0,1.4-.2,1.9-.6.5-.4.7-1.1.7-1.9v-15c0-.8-.2-1.4-.7-1.9-.4-.4-1-.6-1.7-.6ZM530.1,368c0,0-.1,0-.2,0l-8-.5c-4.1-.2-7.3-3.6-7.3-7.7v-3.4c0-4.1,3.2-7.5,7.3-7.7l8-.5c.7,0,1.4.2,1.8.6.4.4.7,1,.7,1.8v15c0,.7-.2,1.4-.7,1.8-.4.4-1,.6-1.6.6ZM530.1,348.4c0,0-.1,0-.2,0l-8,.5c-4,.2-7.2,3.6-7.2,7.6v3.4c0,4,3.1,7.3,7.2,7.6l8,.5c.7,0,1.3-.2,1.7-.5.4-.4.6-1,.6-1.7v-15c0-.7-.2-1.3-.6-1.7-.4-.4-.9-.6-1.5-.6Z" fill="#aa9d87"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M521.6,345.9h-1.2c-6,.2-10.8,5.2-10.8,11.2v2c0,6,4.8,10.9,10.8,11.1h1.2s-1.8,1.4-1.8,1.4l-7.8-2.7-3.6-4.6-1-6.2,1.1-5.9s2.4-3.8,2.5-4c.1-.1,3.6-3.1,4-3.3.5-.2,4.7-.7,4.8-.6.1,0,1.7,1.5,1.7,1.5Z" fill="#dfd1b8"/>
                      <path d="M519.7,371.6l-7.9-2.7h0s-3.6-4.6-3.6-4.6h0s-1-6.2-1-6.2h0s1.1-6,1.1-6h0c0-.2,2.4-3.8,2.5-4,.1-.2,3.6-3.1,4.1-3.3.4-.2,4.7-.7,4.9-.6.1,0,1.6,1.4,1.7,1.5h.1c0,0-1.3.1-1.3.1-2.9,0-5.6,1.3-7.6,3.4s-3.1,4.8-3.1,7.7v2c0,2.9,1.1,5.6,3.1,7.7s4.7,3.3,7.6,3.4h1.3s-2,1.6-2,1.6ZM511.9,368.8l7.8,2.7,1.7-1.3h-1c-2.9-.1-5.6-1.3-7.7-3.4-2-2.1-3.1-4.9-3.1-7.8v-2c0-2.9,1.1-5.7,3.1-7.8,2-2.1,4.7-3.3,7.7-3.4h1c-.6-.6-1.5-1.4-1.6-1.4-.3,0-4.3.4-4.8.6-.4.2-3.9,3.1-4,3.2-.1.1-2.4,3.8-2.5,4l-1.1,5.9,1,6.1,3.6,4.5Z" fill="#aa9d87"/>
                    </g>
                    <g>
                      <path d="M522.3,370l-2.5,1.9-8-2.8-3.7-4.7-1-6.3h0s1.1-6,1.1-6h0c.2-.4,2.4-3.9,2.5-4,.1-.2,3.6-3.1,4.2-3.3.3-.1,2.1-.4,2.6-.4,2.3-.3,2.4-.2,2.4-.2.1,0,1.3,1.1,1.7,1.5l.5.4h-1.8c-5.9.3-10.5,5-10.5,10.9v2c0,5.9,4.6,10.7,10.5,10.9h1.9ZM509.4,359v-2c0-6.2,4.8-11.2,11-11.4h.6c-.5-.5-1-.9-1.2-1.1-.6,0-4.2.4-4.6.6-.4.1-3.7,2.9-3.9,3.2,0,.1-1.5,2.4-2.5,3.9l-1.1,5.9,1,6.1,3.5,4.4,7.6,2.6,1.2-.9h-.5c-6.2-.2-11-5.2-11-11.4Z" fill="#dfd1b8"/>
                      <path d="M519.8,371.9l-8.1-2.8h0s-3.7-4.7-3.7-4.7h0s-1-6.3-1-6.3h0c0,0,1.1-6,1.1-6h0c.9-1.5,2.4-3.9,2.5-4,.1-.2,3.6-3.1,4.2-3.4.3-.1,2.1-.4,2.6-.4,2.3-.3,2.4-.2,2.5-.2.1,0,1.1,1,1.7,1.5l.6.5h-1.9c-5.9.3-10.5,5-10.5,10.9v2c0,5.9,4.6,10.6,10.5,10.8h2c0,0-2.6,2.1-2.6,2.1ZM511.8,369l8,2.8,2.3-1.8h-1.7c-5.9-.3-10.6-5.1-10.6-11v-2c0-5.9,4.6-10.7,10.6-10.9h1.7c0,0-.3-.4-.3-.4-1-.9-1.7-1.5-1.7-1.5,0,0-.1,0-2.4.2-1.1.1-2.3.3-2.6.4-.5.2-4,3.2-4.1,3.3,0,0-1,1.5-2.5,3.9h0c0,.1-1.1,6.1-1.1,6.1l1,6.2,3.6,4.6ZM519.7,371.4l-7.7-2.7h0s-3.5-4.5-3.5-4.5h0s-1-6.1-1-6.1h0s1.1-5.9,1.1-5.9h0c.9-1.5,2.4-3.8,2.5-3.9.3-.3,3.6-3.1,4-3.2.4-.2,4.1-.6,4.6-.6h0s0,0,0,0c.2.2.9.8,1.2,1.1h.1c0,0-.7.1-.7.1-6.1.2-10.9,5.2-10.9,11.3v2c0,6.1,4.8,11.1,10.9,11.3h.7s-1.3,1-1.3,1ZM512.1,368.6l7.6,2.6,1-.8h-.3c-6.2-.2-11-5.2-11-11.4v-2c0-6.2,4.9-11.2,11-11.4h.4c-.3-.3-.9-.8-1.1-1-.7,0-4.2.5-4.6.6-.4.1-3.7,2.9-3.9,3.2,0,.1-1.5,2.3-2.5,3.9l-1.1,5.8,1,6,3.5,4.4Z" fill="#aa9d87"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M508.3,356.7c.2-5.8,4.8-10.6,10.7-10.7l8.2-.3v-2.3c0,0-8.3.3-8.3.3-7,.2-12.7,5.9-12.9,12.9v2.8c.2,7,5.8,12.7,12.9,12.9l8.2.3v-2.3c0,0-8.1-.3-8.1-.3-5.8-.2-10.5-4.9-10.7-10.7v-2.7Z" fill="#dfd1b8"/>
                      <path d="M527.1,372.7l-8.2-.3c-7.1-.2-12.7-5.9-12.9-13v-2.8c.2-7.1,5.9-12.8,12.9-13l8.2-.3v2.4c0,0-8.2.3-8.2.3-5.8.2-10.5,4.9-10.6,10.7v2.7c.2,5.8,4.8,10.5,10.6,10.7l8.2.3v2.4ZM527,343.5l-8.1.3c-7,.2-12.6,5.9-12.8,12.9v2.8c.2,7,5.8,12.7,12.8,12.9l8.1.3v-2.1c0,0-8.1-.3-8.1-.3-5.9-.2-10.6-4.9-10.7-10.8v-2.7c.2-5.9,4.9-10.6,10.7-10.8l8.1-.3v-2.1Z" fill="#aa9d87"/>
                    </g>
                    <g>
                      <path d="M527.4,345.9l-8.4.3c-5.7.2-10.3,4.8-10.4,10.5v2.7c.2,5.7,4.7,10.3,10.4,10.5l8.4.3v2.8c0,0-8.5-.3-8.5-.3-7.2-.2-12.9-6-13.1-13.2v-2.8c.2-7.2,5.9-13,13.1-13.2l8.4-.3v2.8ZM526.8,372.4v-1.8c0,0-7.9-.3-7.9-.3-6-.2-10.8-5-10.9-11v-2.7s0,0,0,0c.2-6,5-10.8,10.9-11l7.9-.3v-1.8c0,0-8,.3-8,.3-6.9.2-12.5,5.8-12.6,12.7v2.8c.2,6.9,5.7,12.5,12.6,12.7l7.9.3Z" fill="#dfd1b8"/>
                      <path d="M527.3,372.9l-8.5-.3c-7.2-.2-13-6-13.2-13.2v-2.8c.2-7.2,6-13,13.2-13.2l8.5-.3v2.9c0,0-8.4.3-8.4.3-5.7.2-10.2,4.8-10.4,10.4v2.7c.1,5.7,4.7,10.3,10.4,10.4l8.5.3v2.9ZM527.2,343.2l-8.4.3c-7.1.2-12.9,6-13.1,13.1v2.8c.2,7.1,5.9,12.9,13.1,13.1l8.4.3v-2.6c0,0-8.3-.3-8.3-.3-5.7-.2-10.3-4.8-10.5-10.5v-2.7c.2-5.7,4.8-10.4,10.5-10.6l8.4-.3v-2.6ZM526.9,372.4l-8-.3c-6.9-.2-12.5-5.8-12.7-12.8v-2.8c.2-6.9,5.8-12.5,12.7-12.8l8-.3v1.9c0,0-7.9.3-7.9.3-5.9.2-10.7,5-10.9,10.9v2.7c.2,5.9,4.9,10.7,10.9,10.9l8,.3v1.9ZM526.8,343.8l-7.9.3c-6.9.2-12.4,5.8-12.6,12.6v2.8c.2,6.9,5.7,12.4,12.6,12.6l7.9.3v-1.7c0,0-7.8-.3-7.8-.3-6-.2-10.8-5-11-11v-2.7c.2-6,5-10.8,11-11l7.9-.3v-1.7Z" fill="#aa9d87"/>
                    </g>
                  </g>
                </g>
                <g filter="url(#drop-shadow-12)">
                  <g>
                    <g>
                      <rect x="523.4" y="330.7" width="5.9" height="1.6" transform="translate(997.7 737.3) rotate(-171.5)" fill="#dfd1b8"/>
                      <path d="M529.2,332.8l-5.9-.9.3-1.7,5.9.9-.3,1.7ZM523.3,331.9l5.7.9.2-1.5-5.7-.9-.2,1.5Z" fill="#aa9d87"/>
                    </g>
                    <g>
                      <path d="M529.6,330.9l-.3,2.1-6.3-.9.3-2.1,6.3.9ZM528.9,332.5l.2-1.1-5.3-.8-.2,1.1,5.3.8Z" fill="#dfd1b8"/>
                      <path d="M529.4,333.1l-6.4-1,.3-2.2,6.4,1-.3,2.2ZM523.1,332.1l6.2.9.3-2-6.2-.9-.3,2ZM528.9,332.6l-5.5-.8.2-1.2,5.5.8-.2,1.2ZM523.6,331.6l5.2.8.2-1-5.2-.8-.2,1Z" fill="#aa9d87"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <rect x="523.8" y="329.9" width="6.7" height="1.6" transform="translate(999.5 735.9) rotate(-171.5)" fill="#dfd1b8"/>
                      <path d="M530.4,332.1l-6.7-1,.3-1.7,6.7,1-.3,1.7ZM523.8,331l6.5,1,.2-1.5-6.5-1-.2,1.5Z" fill="#aa9d87"/>
                    </g>
                    <g>
                      <path d="M530.8,330.2l-.3,2.1-7.1-1.1.3-2.1,7.1,1.1ZM530.1,331.8l.2-1.1-6.1-.9-.2,1.1,6.1.9Z" fill="#dfd1b8"/>
                      <path d="M530.6,332.4l-7.2-1.1.3-2.2,7.2,1.1-.3,2.2ZM523.5,331.2l7,1,.3-2-7-1-.3,2ZM530.2,331.8l-6.2-.9.2-1.2,6.2.9-.2,1.2ZM524.1,330.8l6,.9.2-1-6-.9-.2,1Z" fill="#aa9d87"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <rect x="507.5" y="314.8" width="5.9" height="1.6" transform="translate(747 -235.9) rotate(81.5)" fill="#dfd1b8"/>
                      <path d="M510,318.8l-.9-6,1.7-.3.9,6-1.7.3ZM509.3,312.9l.9,5.8,1.5-.2-.9-5.8-1.5.2Z" fill="#aa9d87"/>
                    </g>
                    <g>
                      <path d="M511,312.3l1,6.4-2.1.3-1-6.4,2.1-.3ZM511.4,318.2l-.8-5.4-1.1.2.8,5.4,1.1-.2Z" fill="#dfd1b8"/>
                      <path d="M509.8,319l-1-6.5,2.2-.3,1,6.5-2.2.3ZM509,312.7l.9,6.2,2-.3-.9-6.2-2,.3ZM510.2,318.5l-.8-5.5,1.2-.2.8,5.5-1.2.2ZM509.5,313.1l.8,5.3,1-.2-.8-5.3-1,.2Z" fill="#aa9d87"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <rect x="507.9" y="314" width="6.7" height="1.6" transform="translate(746.9 -237.4) rotate(81.5)" fill="#dfd1b8"/>
                      <path d="M510.9,318.3l-1-6.7,1.7-.3,1,6.7-1.7.3ZM510,311.7l1,6.5,1.5-.2-1-6.5-1.5.2Z" fill="#aa9d87"/>
                    </g>
                    <g>
                      <path d="M511.7,311.1l1.1,7.1-2.1.3-1.1-7.1,2.1-.3ZM512.2,317.8l-.9-6.1-1.1.2.9,6.1,1.1-.2Z" fill="#dfd1b8"/>
                      <path d="M510.6,318.6l-1.1-7.2,2.2-.3,1.1,7.2-2.2.3ZM509.7,311.5l1,7,2-.3-1-7-2,.3ZM511.1,318l-.9-6.2,1.2-.2.9,6.2-1.2.2ZM510.3,311.9l.9,6,1-.2-.9-6-1,.2Z" fill="#aa9d87"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M512.2,327.3c-3.3-3.3-3.4-8.5-.3-12l6-6.8c1.2-1.3,2.7-1.3,4-.1l11.9,11.9c1.2,1.2,1.2,2.8-.1,4l-6.8,6c-3.5,3.1-8.7,2.9-12-.3l-2.7-2.7Z" fill="#dfd1b8"/>
                      <path d="M521,332.6c-2.3,0-4.5-.9-6.2-2.6l-2.7-2.7c-3.3-3.3-3.4-8.6-.3-12.1l6-6.8c.6-.6,1.3-1,2-1,.7,0,1.4.3,2,.9l11.9,11.9c.6.6.9,1.3.9,2s-.4,1.4-1,2l-6.8,6c-1.7,1.5-3.8,2.2-5.9,2.2ZM519.9,307.6s0,0,0,0c-.7,0-1.4.4-1.9,1l-6,6.8c-3.1,3.4-2.9,8.7.3,11.9l2.7,2.7c1.7,1.7,3.9,2.5,6.1,2.5,2.1,0,4.1-.7,5.8-2.2l6.8-6c.6-.6,1-1.2,1-1.9s-.3-1.4-.9-2l-11.9-11.9c-.6-.6-1.2-.9-1.9-.9Z" fill="#aa9d87"/>
                    </g>
                    <g>
                      <path d="M522,308.2l11.9,11.9c.7.7,1,1.4,1,2.2,0,.8-.4,1.5-1.1,2.1l-6.8,6c-3.5,3.2-9,3-12.3-.3l-2.7-2.7c-3.4-3.4-3.5-8.8-.3-12.3l6-6.8c.6-.7,1.4-1.1,2.1-1.1s1.5.3,2.2,1ZM515,329.8c3.2,3.2,8.3,3.3,11.7.3l6.8-6c.6-.5.9-1.1.9-1.8,0-.6-.3-1.3-.8-1.8l-11.9-11.9c-.6-.6-1.2-.8-1.8-.8-.6,0-1.3.3-1.8.9l-6,6.8c-3,3.4-2.9,8.5.3,11.7l2.7,2.7Z" fill="#dfd1b8"/>
                      <path d="M521,332.8c-2.3,0-4.6-.9-6.4-2.6l-2.7-2.7c-3.4-3.4-3.5-8.8-.3-12.4l6-6.8c.6-.7,1.4-1.1,2.2-1.1.8,0,1.6.3,2.2,1l11.9,11.9c.7.7,1,1.4,1,2.2,0,.8-.4,1.5-1.1,2.2l-6.8,6c-1.7,1.5-3.9,2.3-6,2.3ZM519.9,307.3s0,0,0,0c-.8,0-1.5.4-2.1,1.1l-6,6.8c-3.1,3.5-3,8.9.3,12.3l2.7,2.7c1.7,1.7,4,2.6,6.3,2.6,2.1,0,4.2-.8,5.9-2.3l6.8-6c.7-.6,1-1.3,1.1-2.1,0-.8-.3-1.5-.9-2.1l-11.9-11.9c-.6-.6-1.3-.9-2.1-.9ZM521,332.3c-2.2,0-4.4-.8-6-2.5l-2.7-2.7c-3.2-3.2-3.3-8.4-.3-11.7l6-6.8c.5-.6,1.2-.9,1.8-.9.7,0,1.3.3,1.9.8l11.9,11.9c.6.6.9,1.2.8,1.9,0,.7-.3,1.3-.9,1.8l-6.8,6c-1.6,1.5-3.7,2.2-5.7,2.2ZM515.1,329.8c3.2,3.2,8.2,3.3,11.6.3l6.8-6c.6-.5.9-1.1.9-1.7,0-.6-.3-1.2-.8-1.8l-11.9-11.9c-.5-.5-1.2-.8-1.8-.8-.6,0-1.2.3-1.7.9l-6,6.8c-3,3.3-2.8,8.4.3,11.6l2.7,2.7Z" fill="#aa9d87"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M512.9,326.8c-2.9-2.9-3-7.6-.3-10.7l5.4-6c1-1.2,2.4-1.2,3.5,0l10.6,10.6c1.1,1.1,1.1,2.5,0,3.5l-6,5.4c-3.1,2.7-7.7,2.6-10.7-.3l-2.4-2.4Z" fill="#dfd1b8"/>
                      <path d="M520.8,331.5c-2,0-4-.8-5.5-2.3l-2.4-2.4c-2.9-2.9-3.1-7.6-.3-10.7l5.4-6c.5-.6,1.1-.9,1.8-.9.6,0,1.3.3,1.8.8l10.6,10.6c.5.5.8,1.2.8,1.8,0,.6-.3,1.3-.9,1.8l-6,5.4c-1.5,1.3-3.3,2-5.2,2ZM519.8,309.3s0,0,0,0c-.6,0-1.2.3-1.7.9l-5.4,6c-2.7,3-2.6,7.7.3,10.6l2.4,2.4c1.5,1.5,3.5,2.3,5.5,2.3,1.8,0,3.7-.6,5.1-2l6-5.4c.6-.5.9-1.1.9-1.7,0-.6-.3-1.2-.8-1.7l-10.6-10.6c-.5-.5-1.1-.8-1.7-.8Z" fill="#aa9d87"/>
                    </g>
                    <g>
                      <path d="M521.6,309.9l10.6,10.6c.6.6.8,1.2.8,1.9,0,.7-.3,1.3-.9,1.8l-6,5.4c-3.1,2.8-7.9,2.6-10.8-.3l-2.4-2.4c-3-3-3.1-7.7-.3-10.8l5.4-6c.5-.6,1.2-.9,1.8-.9.7,0,1.3.3,1.9.8ZM515.4,329.1c2.9,2.9,7.5,3,10.5.3l6-5.4c.5-.5.8-1.1.8-1.6,0-.6-.2-1.2-.8-1.7l-10.6-10.6c-.5-.5-1.1-.8-1.7-.8-.6,0-1.2.3-1.6.9l-5.4,6c-2.7,3-2.6,7.6.3,10.5l2.4,2.4Z" fill="#dfd1b8"/>
                      <path d="M520.8,331.6c-2,0-4.1-.8-5.6-2.3l-2.4-2.4c-3-3-3.1-7.8-.3-10.9l5.4-6c.5-.6,1.2-.9,1.9-1,.7,0,1.3.3,1.9.8l10.6,10.6c.6.6.9,1.2.8,1.9,0,.7-.3,1.3-1,1.9l-6,5.4c-1.5,1.3-3.4,2-5.3,2ZM519.8,309.2s0,0,0,0c-.6,0-1.3.3-1.8.9l-5.4,6c-2.8,3.1-2.6,7.8.3,10.8l2.4,2.4c1.5,1.5,3.5,2.3,5.5,2.3,1.9,0,3.7-.7,5.2-2l6-5.4c.6-.5.9-1.1.9-1.8,0-.6-.3-1.3-.8-1.8l-10.6-10.6c-.5-.5-1.1-.8-1.8-.8ZM520.8,331.4c-2,0-3.9-.8-5.4-2.3l-2.4-2.4c-2.9-2.9-3-7.5-.3-10.6l5.4-6c.5-.6,1.1-.9,1.7-.9.6,0,1.2.2,1.7.8l10.6,10.6c.5.5.8,1.1.8,1.7,0,.6-.3,1.2-.9,1.7l-6,5.4c-1.5,1.3-3.3,2-5.1,2ZM519.8,309.4s0,0,0,0c-.6,0-1.1.3-1.6.8l-5.4,6c-2.7,3-2.5,7.6.3,10.4l2.4,2.4c2.8,2.8,7.4,3,10.4.3l6-5.4c.5-.5.8-1,.8-1.6,0-.6-.2-1.2-.7-1.7l-10.6-10.6c-.5-.5-1-.7-1.6-.7Z" fill="#aa9d87"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M510.4,314.3l-.8.9c-4.1,4.4-4,11.2.3,15.5l1.4,1.4c4.2,4.2,11.1,4.4,15.5.3l.9-.8-.3,2.3-7.5,3.6-5.8-.7-5.1-3.7-3.4-5s-1-4.4-1-4.6c0-.2.4-4.7.6-5.2.2-.5,2.8-3.8,3-3.8.1,0,2.3-.1,2.3-.1Z" fill="#dfd1b8"/>
                      <path d="M519.9,337.5l-5.8-.7h0s-5.1-3.7-5.1-3.7h0s-3.4-5-3.4-5h0c0-.2-1-4.4-1-4.6,0-.2.4-4.7.6-5.2.2-.4,2.8-3.8,3-3.9.1,0,2.1-.1,2.3-.1h.1s-.9,1-.9,1c-2,2.1-3,4.9-3,7.7,0,2.9,1.2,5.6,3.2,7.6l1.4,1.4c2,2,4.8,3.2,7.6,3.2,2.9,0,5.6-1,7.7-3l1-.9-.3,2.5-7.5,3.7ZM514.1,336.7l5.7.7,7.4-3.6.3-2.1-.8.7c-2.1,2-4.9,3.1-7.8,3-2.9,0-5.7-1.2-7.7-3.3l-1.4-1.4c-2.1-2.1-3.2-4.8-3.3-7.7,0-2.9,1-5.7,3-7.8l.7-.8c-.8,0-2,.1-2.1.1-.2.2-2.7,3.3-2.9,3.8-.2.4-.6,4.9-.6,5.1,0,.2,1,4.3,1,4.6l3.4,5,5,3.7Z" fill="#aa9d87"/>
                    </g>
                    <g>
                      <path d="M528,330.9l-.4,3.1-7.6,3.7-5.9-.7-5.1-3.7h0s-3.4-5.1-3.4-5.1h0c-.1-.5-1-4.5-1-4.7,0-.2.3-4.8.6-5.3.1-.3,1.2-1.7,1.5-2.1,1.4-1.8,1.5-1.8,1.6-1.8.1,0,1.7-.1,2.3-.1h.6s-1.2,1.3-1.2,1.3c-4,4.3-3.9,11,.3,15.1l1.4,1.4c4.2,4.2,10.8,4.3,15.1.3l1.4-1.3ZM511.1,332.3l-1.4-1.4c-4.4-4.4-4.5-11.3-.3-15.8l.4-.4c-.7,0-1.4,0-1.6,0-.4.4-2.7,3.3-2.8,3.7-.2.4-.6,4.7-.5,5,0,.1.6,2.8,1,4.5l3.4,4.9,5,3.6,5.6.7,7.3-3.5.2-1.5-.4.3c-4.5,4.2-11.5,4.1-15.8-.3Z" fill="#dfd1b8"/>
                      <path d="M519.9,337.7l-5.9-.7h0s-5.1-3.7-5.1-3.7h0s-3.4-5.1-3.4-5.1h0c-.4-1.8-1-4.5-1-4.7,0-.2.3-4.8.6-5.3.2-.3,1.2-1.7,1.5-2.1,1.4-1.8,1.5-1.8,1.6-1.9.1,0,1.7-.1,2.3-.1h.8s-1.3,1.4-1.3,1.4c-4,4.3-3.9,10.9.3,15l1.4,1.4c4.1,4.1,10.8,4.3,15,.3l1.5-1.4-.4,3.3-7.7,3.7ZM514,336.9l5.9.7,7.6-3.7.4-2.9-1.3,1.2c-4.3,4-11,3.9-15.2-.3l-1.4-1.4c-4.2-4.2-4.3-10.9-.3-15.2l1.1-1.2h-.5c-1.4,0-2.2.1-2.3.2,0,0-.2,0-1.6,1.8-.7.9-1.4,1.9-1.5,2.1-.2.5-.6,5.1-.6,5.3,0,.1.4,1.8,1,4.5h0c0,.1,3.4,5.1,3.4,5.1l5.1,3.7ZM519.8,337.2l-5.6-.7h0s-5-3.6-5-3.6h0s-3.4-4.9-3.4-4.9h0c-.4-1.7-1-4.4-1-4.5,0-.4.4-4.7.5-5.1.2-.4,2.5-3.3,2.9-3.7h0s0,0,0,0c.3,0,1.2,0,1.6,0h.1s-.5.5-.5.5c-4.2,4.5-4.1,11.4.3,15.7l1.4,1.4c4.3,4.3,11.2,4.5,15.7.3l.5-.5-.2,1.6-7.3,3.6ZM514.2,336.5l5.6.7,7.2-3.5.2-1.3-.2.2c-2.2,2.1-5,3.1-7.8,3.1-2.9,0-5.8-1.1-8.1-3.4l-1.4-1.4c-4.4-4.4-4.5-11.4-.3-15.9l.3-.3c-.4,0-1.2,0-1.4,0-.5.5-2.7,3.3-2.8,3.7-.2.4-.6,4.6-.5,5,0,.1.6,2.8,1,4.5l3.3,4.9,4.9,3.6Z" fill="#aa9d87"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M508.7,331.4c-4-4.2-4-10.9,0-15.1l5.6-6-1.7-1.5-5.6,6c-4.8,5.1-4.8,13.1,0,18.3l2,2c5.1,4.8,13.1,4.9,18.3,0l6-5.6-1.5-1.7-6,5.6c-4.3,4-10.9,4-15.1,0l-1.9-1.9Z" fill="#dfd1b8"/>
                      <path d="M518.2,338.6c-3.3,0-6.6-1.2-9.2-3.7l-2-2c-4.9-5.1-4.9-13.2,0-18.3l5.6-6,1.7,1.6-5.6,6c-4,4.2-4,10.9,0,15.1l1.9,1.9c4.2,4,10.8,4,15.1,0l6-5.6,1.6,1.7h0s-6,5.6-6,5.6c-2.6,2.4-5.9,3.6-9.1,3.6ZM512.6,308.8l-5.6,5.9c-4.8,5.1-4.8,13.1,0,18.2l2,2c5.1,4.8,13.1,4.8,18.2,0l5.9-5.6-1.5-1.6-5.9,5.6c-4.3,4-11,4-15.2,0l-1.9-1.9c-4-4.3-4.1-10.9,0-15.2l5.6-5.9-1.6-1.5Z" fill="#aa9d87"/>
                    </g>
                    <g>
                      <path d="M514.6,310.3l-5.8,6.2c-3.9,4.2-3.9,10.7,0,14.8l1.9,1.9c4.1,3.9,10.6,3.9,14.8,0l6.2-5.8,1.9,2-6.2,5.8c-5.2,4.9-13.4,4.9-18.6,0l-2-2c-4.9-5.2-5-13.4,0-18.6l5.8-6.2,2,1.9ZM532.9,329.4l-1.2-1.3-5.8,5.4c-4.4,4.1-11.2,4.1-15.5,0l-1.9-1.9h0c-4.1-4.3-4.1-11.1,0-15.5l5.4-5.8-1.3-1.2-5.4,5.8c-4.7,5-4.7,12.9,0,17.9l2,2c5,4.7,12.9,4.8,17.9,0l5.8-5.4Z" fill="#dfd1b8"/>
                      <path d="M518.2,338.9c-3.4,0-6.7-1.2-9.4-3.7l-2-2c-5-5.2-5-13.4,0-18.7l5.8-6.2,2.1,2-5.8,6.2c-3.9,4.1-3.9,10.6,0,14.7l1.9,1.9c2.1,2,4.7,2.9,7.4,2.9,2.6,0,5.3-1,7.3-2.9l6.2-5.8,2,2.1h0s-6.2,5.8-6.2,5.8c-2.6,2.5-6,3.7-9.3,3.7ZM512.6,308.5l-5.7,6.1c-4.9,5.2-4.9,13.3,0,18.5l2,2c5.2,4.9,13.3,4.9,18.5,0l6.1-5.7-1.8-1.9-6.1,5.7c-4.2,3.9-10.7,3.9-14.9,0l-1.9-1.9c-3.9-4.2-4-10.7,0-14.9l5.7-6.1-1.9-1.8ZM518.2,338.4c-3.2,0-6.5-1.2-9-3.6l-2-2c-4.8-5-4.8-12.9,0-18l5.5-5.8,1.4,1.3-5.5,5.8c-4.1,4.3-4,11.1,0,15.4l1.9,1.9c4.3,4.1,11.1,4.1,15.4,0l5.8-5.5,1.3,1.4h0s-5.8,5.5-5.8,5.5c-2.5,2.4-5.7,3.5-9,3.5ZM512.6,309.2l-5.4,5.8c-4.7,5-4.7,12.8,0,17.8l2,2c5,4.7,12.8,4.7,17.8,0l5.8-5.4-1.1-1.2-5.8,5.4c-4.4,4.1-11.2,4.1-15.6,0l-1.9-1.9c-4.1-4.4-4.2-11.2,0-15.6l5.4-5.8-1.2-1.1Z" fill="#aa9d87"/>
                    </g>
                  </g>
                </g>
                <g filter="url(#drop-shadow-13)">
                  <g>
                    <g>
                      <rect x="517.7" y="295.5" width="5.9" height="1.6" transform="translate(592 891.1) rotate(-126.5)" fill="#dfd1b8"/>
                      <path d="M521.7,299.2l-3.6-4.8,1.4-1,3.6,4.8-1.4,1ZM518.3,294.4l3.4,4.6,1.2-.9-3.4-4.6-1.2.9Z" fill="#aa9d87"/>
                    </g>
                    <g>
                      <path d="M523.4,298.2l-1.7,1.3-3.8-5.1,1.7-1.3,3.8,5.1ZM521.8,298.8l.9-.7-3.2-4.3-.9.7,3.2,4.3Z" fill="#dfd1b8"/>
                      <path d="M521.7,299.6l-3.9-5.2,1.8-1.3,3.9,5.2-1.8,1.3ZM518,294.4l3.7,5,1.6-1.2-3.7-5-1.6,1.2ZM521.8,298.9l-3.3-4.4,1-.7,3.3,4.4-1,.7ZM518.6,294.5l3.1,4.2.8-.6-3.1-4.2-.8.6Z" fill="#aa9d87"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <rect x="518.5" y="295.5" width="6.7" height="1.6" transform="translate(593.8 892.1) rotate(-126.5)" fill="#dfd1b8"/>
                      <path d="M523.1,299.6l-4-5.4,1.4-1,4,5.4-1.4,1ZM519.2,294.2l3.9,5.3,1.2-.9-3.9-5.3-1.2.9Z" fill="#aa9d87"/>
                    </g>
                    <g>
                      <path d="M524.8,298.6l-1.7,1.3-4.2-5.7,1.7-1.3,4.2,5.7ZM523.1,299.2l.9-.7-3.7-5-.9.7,3.7,5Z" fill="#dfd1b8"/>
                      <path d="M523,299.9l-4.3-5.8,1.8-1.3,4.3,5.8-1.8,1.3ZM518.9,294.1l4.2,5.7,1.6-1.2-4.2-5.7-1.6,1.2ZM523.1,299.2l-3.7-5,1-.7,3.7,5-1,.7ZM519.6,294.2l3.6,4.9.8-.6-3.6-4.9-.8.6Z" fill="#aa9d87"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <rect x="517.7" y="273" width="5.9" height="1.6" transform="translate(1050.4 18.1) rotate(126.5)" fill="#dfd1b8"/>
                      <path d="M519.6,276.8l-1.4-1,3.6-4.9,1.4,1-3.6,4.9ZM518.3,275.7l1.2.9,3.5-4.7-1.2-.9-3.5,4.7Z" fill="#aa9d87"/>
                    </g>
                    <g>
                      <path d="M523.4,271.9l-3.8,5.2-1.7-1.3,3.8-5.2,1.7,1.3ZM519.5,276.4l3.2-4.4-.9-.7-3.2,4.4.9.7Z" fill="#dfd1b8"/>
                      <path d="M519.6,277.1l-1.8-1.3,3.9-5.3,1.8,1.3-3.9,5.3ZM518,275.8l1.6,1.2,3.8-5.1-1.6-1.2-3.8,5.1ZM519.5,276.4l-1-.7,3.3-4.5,1,.7-3.3,4.5ZM518.6,275.7l.8.6,3.2-4.3-.8-.6-3.2,4.3Z" fill="#aa9d87"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <rect x="518.5" y="273" width="6.7" height="1.6" transform="translate(1052.2 17.1) rotate(126.5)" fill="#dfd1b8"/>
                      <path d="M520.5,277l-1.4-1,4-5.4,1.4,1-4,5.4ZM519.2,276l1.2.9,3.9-5.3-1.2-.9-3.9,5.3Z" fill="#aa9d87"/>
                    </g>
                    <g>
                      <path d="M524.8,271.6l-4.2,5.7-1.7-1.3,4.2-5.7,1.7,1.3ZM520.4,276.6l3.7-5-.9-.7-3.7,5,.9.7Z" fill="#dfd1b8"/>
                      <path d="M520.5,277.4l-1.8-1.3,4.3-5.8,1.8,1.3-4.3,5.8ZM518.9,276l1.6,1.2,4.2-5.7-1.6-1.2-4.2,5.7ZM520.4,276.7l-1-.7,3.7-5,1,.7-3.7,5ZM519.6,275.9l.8.6,3.6-4.9-.8-.6-3.6,4.9Z" fill="#aa9d87"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M513.6,283.3c0-4.6,3.6-8.5,8.2-8.7l9-.5c1.7,0,2.9,1,2.9,2.7v16.8c0,1.7-1.1,2.8-2.9,2.7l-9-.5c-4.6-.3-8.2-4.1-8.2-8.7v-3.8Z" fill="#dfd1b8"/>
                      <path d="M531.1,296.4c0,0-.1,0-.2,0l-9-.5c-4.7-.3-8.3-4.1-8.3-8.8v-3.8c0-4.7,3.6-8.5,8.3-8.8l9-.5c.9,0,1.6.2,2.1.7.5.5.8,1.2.8,2.1v16.8c0,.9-.3,1.6-.8,2.1-.5.5-1.1.7-1.9.7ZM531.1,274.1c0,0-.1,0-.2,0l-9,.5c-4.6.3-8.2,4.1-8.2,8.7v3.8c0,4.6,3.6,8.4,8.2,8.7l9,.5c.8,0,1.5-.2,2-.7.5-.5.8-1.2.8-2v-16.8c0-.8-.3-1.5-.8-2-.5-.4-1.1-.7-1.8-.7Z" fill="#aa9d87"/>
                    </g>
                    <g>
                      <path d="M534.1,276.8v16.8c0,.9-.3,1.7-.9,2.2-.6.5-1.4.8-2.3.7l-9-.5c-4.8-.3-8.5-4.2-8.5-9v-3.8c0-4.8,3.7-8.7,8.5-9l9-.5c.9,0,1.7.2,2.3.7s.9,1.3.9,2.2ZM513.9,287.1c0,4.5,3.5,8.2,8,8.5l9,.5c.8,0,1.4-.2,1.9-.6.5-.4.7-1.1.7-1.9v-16.8c0-.8-.2-1.4-.7-1.9-.5-.4-1.1-.6-1.9-.6l-9,.5c-4.5.3-8,4-8,8.5v3.8Z" fill="#dfd1b8"/>
                      <path d="M531.1,296.6c0,0-.2,0-.2,0l-9-.5c-4.8-.3-8.5-4.2-8.5-9v-3.8c0-4.8,3.7-8.8,8.5-9l9-.5c.9,0,1.7.2,2.3.8.6.5.9,1.3.9,2.3v16.8c0,.9-.3,1.7-.9,2.3-.5.5-1.2.8-2.1.8ZM531.1,273.8c0,0-.2,0-.2,0l-9,.5c-4.7.3-8.4,4.2-8.4,8.9v3.8c0,4.7,3.7,8.6,8.4,8.9l9,.5c.9,0,1.7-.2,2.2-.7.6-.5.8-1.3.8-2.2v-16.8c0-.9-.3-1.7-.8-2.2-.5-.5-1.2-.7-2-.7ZM531.1,296.2c0,0-.1,0-.2,0l-9-.5c-4.5-.3-8.1-4-8.1-8.5v-3.8c0-4.5,3.5-8.3,8.1-8.5l9-.5c.8,0,1.5.2,1.9.6.5.5.7,1.1.7,1.9v16.8c0,.8-.3,1.5-.7,1.9-.4.4-1,.6-1.7.6ZM531.1,274.3c0,0-.1,0-.2,0l-9,.5c-4.5.3-8,3.9-8,8.4v3.8c0,4.5,3.5,8.2,8,8.4l9,.5c.8,0,1.4-.2,1.9-.6.5-.4.7-1.1.7-1.8v-16.8c0-.8-.2-1.4-.7-1.8-.4-.4-1-.6-1.7-.6Z" fill="#aa9d87"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M514.5,283.5c0-4.1,3.2-7.5,7.3-7.8l8-.5c1.5,0,2.6.9,2.6,2.4v15c0,1.5-1,2.5-2.6,2.4l-8-.5c-4.1-.2-7.3-3.6-7.3-7.8v-3.4Z" fill="#dfd1b8"/>
                      <path d="M530.1,295.2c0,0-.1,0-.2,0l-8-.5c-4.1-.2-7.4-3.7-7.4-7.8v-3.4c0-4.1,3.2-7.6,7.4-7.8l8-.5c.8,0,1.4.2,1.9.6.5.4.7,1.1.7,1.9v15c0,.8-.2,1.4-.7,1.9-.4.4-1,.6-1.7.6ZM530.1,275.3c0,0-.1,0-.2,0l-8,.5c-4.1.2-7.3,3.6-7.3,7.7v3.4c0,4.1,3.2,7.5,7.3,7.7l8,.5c.7,0,1.4-.2,1.8-.6.4-.4.7-1,.7-1.8v-15c0-.7-.2-1.4-.7-1.8-.4-.4-1-.6-1.6-.6Z" fill="#aa9d87"/>
                    </g>
                    <g>
                      <path d="M532.6,277.7v15c0,.8-.3,1.5-.7,1.9-.5.5-1.2.7-1.9.6l-8-.5c-4.2-.2-7.4-3.7-7.4-7.9v-3.4c0-4.2,3.3-7.6,7.4-7.9l8-.5c.8,0,1.5.2,1.9.6.5.5.7,1.1.7,1.9ZM514.7,286.9c0,4,3.2,7.4,7.2,7.6l8,.5c.7,0,1.3-.2,1.8-.6.4-.4.7-1,.7-1.7v-15c0-.7-.2-1.3-.7-1.7-.4-.4-1-.6-1.8-.6l-8,.5c-4,.2-7.2,3.6-7.2,7.6v3.4Z" fill="#dfd1b8"/>
                      <path d="M530.1,295.3c0,0-.1,0-.2,0l-8-.5c-4.2-.2-7.5-3.7-7.5-7.9v-3.4c0-4.2,3.3-7.7,7.5-7.9l8-.5c.8,0,1.5.2,2,.6.5.5.8,1.1.8,2v15c0,.8-.3,1.5-.8,2-.5.4-1.1.7-1.8.7ZM530.1,275.2c0,0-.1,0-.2,0l-8,.5c-4.1.2-7.4,3.7-7.4,7.8v3.4c0,4.1,3.2,7.6,7.4,7.8l8,.5c.8,0,1.4-.2,1.9-.6.5-.4.7-1.1.7-1.9v-15c0-.8-.2-1.4-.7-1.9-.4-.4-1-.6-1.7-.6ZM530.1,295c0,0-.1,0-.2,0l-8-.5c-4.1-.2-7.3-3.6-7.3-7.7v-3.4c0-4.1,3.2-7.5,7.3-7.7l8-.5c.7,0,1.4.2,1.8.6.4.4.7,1,.7,1.8v15c0,.7-.2,1.4-.7,1.8-.4.4-1,.6-1.6.6ZM530.1,275.5c0,0-.1,0-.2,0l-8,.5c-4,.2-7.2,3.6-7.2,7.6v3.4c0,4,3.1,7.3,7.2,7.6l8,.5c.7,0,1.3-.1,1.7-.5.4-.4.6-1,.6-1.7v-15c0-.7-.2-1.3-.6-1.7-.4-.4-.9-.6-1.5-.6Z" fill="#aa9d87"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M521.6,272.9h-1.2c-6,.2-10.8,5.2-10.8,11.2v2c0,6,4.8,10.9,10.8,11.1h1.2s-1.8,1.4-1.8,1.4l-7.8-2.7-3.6-4.6-1-6.2,1.1-5.9s2.4-3.8,2.5-4c.1-.1,3.6-3.1,4-3.3.5-.2,4.7-.7,4.8-.6.1,0,1.7,1.5,1.7,1.5Z" fill="#dfd1b8"/>
                      <path d="M519.7,298.7l-7.9-2.7h0s-3.6-4.6-3.6-4.6h0s-1-6.2-1-6.2l1.1-6c0-.2,2.4-3.8,2.5-4,.1-.2,3.6-3.1,4.1-3.3.4-.2,4.7-.7,4.9-.6.1,0,1.6,1.4,1.7,1.5h.1c0,0-1.3.1-1.3.1-2.9,0-5.6,1.3-7.6,3.4s-3.1,4.8-3.1,7.7v2c0,2.9,1.1,5.6,3.1,7.7s4.7,3.3,7.6,3.4h1.3s-2,1.6-2,1.6ZM511.9,295.9l7.8,2.7,1.7-1.3h-1c-2.9-.1-5.6-1.3-7.7-3.4-2-2.1-3.1-4.9-3.1-7.8v-2c0-2.9,1.1-5.7,3.1-7.8,2-2.1,4.7-3.3,7.7-3.4h1c-.6-.6-1.5-1.4-1.6-1.4-.3,0-4.3.4-4.8.6-.4.2-3.9,3.1-4,3.2-.1.1-2.4,3.8-2.5,4l-1.1,5.9,1,6.1,3.6,4.5Z" fill="#aa9d87"/>
                    </g>
                    <g>
                      <path d="M522.3,297l-2.5,1.9-8-2.8-3.7-4.7-1-6.3h0s1.1-6,1.1-6h0c.2-.4,2.4-3.9,2.5-4,.1-.2,3.6-3.1,4.2-3.3.3-.1,2.1-.4,2.6-.4,2.3-.3,2.4-.2,2.4-.2.1,0,1.3,1.1,1.7,1.5l.5.4h-1.8c-5.9.3-10.5,5-10.5,10.9v2c0,5.9,4.6,10.7,10.5,10.9h1.9ZM509.4,286.1v-2c0-6.2,4.8-11.2,11-11.4h.6c-.5-.5-1-.9-1.2-1.1-.6,0-4.2.4-4.6.6-.4.1-3.7,2.9-3.9,3.2,0,.1-1.5,2.4-2.5,3.9l-1.1,5.9,1,6.1,3.5,4.4,7.6,2.6,1.2-.9h-.5c-6.2-.2-11-5.2-11-11.4Z" fill="#dfd1b8"/>
                      <path d="M519.8,299l-8.1-2.8h0s-3.7-4.7-3.7-4.7h0s-1-6.3-1-6.3h0c0,0,1.1-6,1.1-6h0c.9-1.5,2.4-3.9,2.5-4,.1-.2,3.6-3.1,4.2-3.4.3-.1,2.1-.4,2.6-.4,2.3-.3,2.4-.2,2.5-.2.1,0,1.1,1,1.7,1.5l.6.5h-1.9c-5.9.3-10.5,5-10.5,10.9v2c0,5.9,4.6,10.6,10.5,10.8h2c0,0-2.6,2.1-2.6,2.1ZM511.8,296.1l8,2.8,2.3-1.8h-1.7c-5.9-.3-10.6-5.1-10.6-11v-2c0-5.9,4.6-10.7,10.6-10.9h1.7c0,0-.3-.4-.3-.4-1-.9-1.7-1.5-1.7-1.5,0,0-.1,0-2.4.2-1.1.1-2.3.3-2.6.4-.5.2-4,3.2-4.1,3.3,0,0-1,1.5-2.5,3.9h0c0,0-1.1,6.1-1.1,6.1l1,6.2,3.6,4.6ZM519.7,298.4l-7.7-2.7h0s-3.5-4.5-3.5-4.5h0s-1-6.1-1-6.1l1.1-5.9c.9-1.5,2.4-3.8,2.5-3.9.3-.3,3.6-3.1,4-3.2.4-.2,4.1-.6,4.6-.6h0s0,0,0,0c.2.2.9.8,1.2,1.1h.1c0,0-.7.1-.7.1-6.1.2-10.9,5.2-10.9,11.3v2c0,6.1,4.8,11.1,10.9,11.3h.7s-1.3,1-1.3,1ZM512.1,295.7l7.6,2.6,1-.8h-.3c-6.2-.2-11-5.2-11-11.4v-2c0-6.2,4.9-11.2,11-11.4h.4c-.3-.3-.9-.8-1.1-1-.7,0-4.2.5-4.6.6-.4.1-3.7,2.9-3.9,3.2,0,.1-1.5,2.3-2.5,3.9l-1.1,5.8,1,6,3.5,4.4Z" fill="#aa9d87"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M508.3,283.7c.2-5.8,4.8-10.6,10.7-10.7l8.2-.3v-2.3c0,0-8.3.3-8.3.3-7,.2-12.7,5.9-12.9,12.9v2.8c.2,7,5.8,12.7,12.9,12.9l8.2.3v-2.3c0,0-8.1-.3-8.1-.3-5.8-.2-10.5-4.9-10.7-10.7v-2.7Z" fill="#dfd1b8"/>
                      <path d="M527.1,299.7l-8.2-.3c-7.1-.2-12.7-5.9-12.9-13v-2.8c.2-7.1,5.9-12.8,12.9-13l8.2-.3v2.4c0,0-8.2.3-8.2.3-5.8.2-10.5,4.9-10.6,10.7v2.7c.2,5.8,4.8,10.5,10.6,10.7l8.2.3v2.4ZM527,270.5l-8.1.3c-7,.2-12.6,5.9-12.8,12.9v2.8c.2,7,5.8,12.7,12.8,12.9l8.1.3v-2.1c0,0-8.1-.3-8.1-.3-5.9-.2-10.6-4.9-10.7-10.8v-2.7c.2-5.9,4.9-10.6,10.7-10.8l8.1-.3v-2.1Z" fill="#aa9d87"/>
                    </g>
                    <g>
                      <path d="M527.4,273l-8.4.3c-5.7.2-10.3,4.8-10.4,10.5v2.7c.2,5.7,4.7,10.3,10.4,10.5l8.4.3v2.8c0,0-8.5-.3-8.5-.3-7.2-.2-12.9-6-13.1-13.2v-2.8c.2-7.2,5.9-13,13.1-13.2l8.4-.3v2.8ZM526.8,299.4v-1.8c0,0-7.9-.3-7.9-.3-6-.2-10.8-5-10.9-11v-2.7s0,0,0,0c.2-6,5-10.8,10.9-11l7.9-.3v-1.8c0,0-8,.3-8,.3-6.9.2-12.5,5.8-12.6,12.7v2.8c.2,6.9,5.7,12.5,12.6,12.7l7.9.3Z" fill="#dfd1b8"/>
                      <path d="M527.3,300l-8.5-.3c-7.2-.2-13-6-13.2-13.2v-2.8c.2-7.2,6-13,13.2-13.2l8.5-.3v2.9c0,0-8.4.3-8.4.3-5.7.2-10.2,4.8-10.4,10.4v2.7c.1,5.7,4.7,10.3,10.4,10.4l8.5.3v2.9ZM527.2,270.3l-8.4.3c-7.1.2-12.9,6-13.1,13.1v2.8c.2,7.1,5.9,12.9,13.1,13.1l8.4.3v-2.6c0,0-8.3-.3-8.3-.3-5.7-.2-10.3-4.8-10.5-10.5v-2.7c.2-5.7,4.8-10.4,10.5-10.6l8.4-.3v-2.6ZM526.9,299.5l-8-.3c-6.9-.2-12.5-5.8-12.7-12.8v-2.8c.2-6.9,5.8-12.5,12.7-12.8l8-.3v1.9c0,0-7.9.3-7.9.3-5.9.2-10.7,5-10.9,10.9v2.7c.2,5.9,4.9,10.7,10.9,10.9l8,.3v1.9ZM526.8,270.8l-7.9.3c-6.9.2-12.4,5.8-12.6,12.6v2.8c.2,6.9,5.7,12.4,12.6,12.6l7.9.3v-1.7c0,0-7.8-.3-7.8-.3-6-.2-10.8-5-11-11v-2.7c.2-6,5-10.8,11-11l7.9-.3v-1.7Z" fill="#aa9d87"/>
                    </g>
                  </g>
                </g>
              </g>
              <g id="Plant3" data-name="Plant" filter="url(#drop-shadow-14)">
                <g>
                  <path d="M689.5,82.5c-.5,3.4-1.7,6.5-4.3,7.7.1-.9-.2-2.4-.5-3.4-.4-1.4-1.3-3.8-4-4.5-2.7-.7-.7.5,1.3,2.7,1.4,1.6,1.8,3.8,1,5.7-.1,0-.3,0-.4,0-2,0-3.7-.5-5-1.2-2.1-1.2-3.3-3-2.8-4.1,1.9-3.8-7-1.1-8-4.4-.3-1.2-.1-2.6.5-3.9,2-.6,3.7-1.1,5.5-.3,1.4.6,3.1,1.2,3.6.8.3-.3-.4-1.3-.9-1.7-2.1-1.6-5-1.4-7-.6,1.3-1.7,3.2-3.2,5.4-4,.9-.3,2-.7,3.1-1.2,1.5,1.7,2.9,4.4,3.2,4.1.4-.5-.4-3.1-1.6-4.7,4.1-1.6,8.5-3.3,9.4-2.6.8.5,1.4,3.2,1.7,6.3-2.6-.4-5.4.4-5.7,1-.2.6,3.4-.1,5.7-.1.1,2,.2,4.2,0,6.1h0c-2.8-1.7-7.9-1.7-8-1-.1.7,4.6.3,7.7,3.2Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M666.5,79.9c0-.9.2-1.8.7-2.8h0c0,0,.1-.1.1-.1,2.1-.6,3.8-1.1,5.7-.3,2.8,1.1,3.3.9,3.3.9,0-.1-.4-1-.9-1.3-2.1-1.6-4.8-1.3-6.8-.6l-.8.3.5-.7c1.4-1.9,3.4-3.3,5.5-4,1-.3,2.1-.8,3.1-1.2h.2c0,0,.1,0,.1,0,.7.8,1.3,1.7,1.8,2.5.4.5.8,1.2,1,1.4,0-.6-.5-2.7-1.7-4.2l-.2-.3h.3c5-2.1,8.6-3.4,9.7-2.7,1.2.8,1.6,5.2,1.8,6.5v.3s-.3,0-.3,0c-2.4-.4-4.8.3-5.3.8.4,0,1.5,0,2.3-.1,1-.1,2.2-.2,3.1-.2h.2s0,.2,0,.2c.1,1.5.2,3.9,0,6.1v.5c0,0-.4-.2-.4-.2-2.6-1.6-6.8-1.6-7.5-1.3.2,0,.7.2,1.1.3,1.6.3,4.3.8,6.4,2.7h0c0,0,0,.2,0,.2-.7,4.1-2.2,6.8-4.5,7.9l-.4.2v-.5c.2-1-.3-2.8-.5-3.3-.4-1.2-1.1-3.6-3.8-4.3-.5-.1-.7-.2-.9-.2.2.2.5.5.8.8.5.5,1.1,1,1.6,1.7,1.5,1.6,1.9,4,1.1,6h0c0,.1-.1.2-.1.2-.1,0-.3,0-.4,0-2.3,0-4.1-.7-5.1-1.2-2.2-1.2-3.5-3.2-2.9-4.4.2-.5.3-.9.1-1.2-.4-.6-1.8-.8-3.2-.9-2.1-.2-4.4-.4-4.9-2.1-.1-.4-.2-.8-.2-1.3ZM667.6,77.4c-.6,1.3-.8,2.6-.5,3.6.4,1.4,2.6,1.6,4.5,1.8,1.7.2,3.1.3,3.6,1.2.2.4.2,1-.1,1.6-.4.9.6,2.6,2.7,3.8,1,.6,2.7,1.2,4.9,1.2,0,0,.1,0,.2,0,.7-1.8.2-3.9-1-5.3-.6-.6-1.2-1.2-1.6-1.6-.9-.8-1.2-1.2-1.1-1.5.1-.3.5-.3,1.6,0,3,.8,3.8,3.4,4.2,4.6.2.6.6,2,.6,3h0c1.9-1.1,3.2-3.5,3.8-7.2-2-1.7-4.5-2.2-6.1-2.5-1.1-.2-1.7-.3-1.6-.8,0-.2.1-.3.4-.4,1.1-.5,5.1-.3,7.7,1.1.1-1.6.1-3.5,0-5.5-.9,0-1.9.1-2.8.2-1.9.2-2.6.2-2.9,0,0-.1,0-.2,0-.4.3-.8,3.1-1.5,5.6-1.2-.3-3.1-.9-5.4-1.5-5.8-.8-.6-5.6,1.2-8.9,2.5,1.1,1.6,2,4.2,1.4,4.8,0,0-.2.1-.3.1-.3,0-.6-.5-1.5-1.8-.5-.8-1.1-1.6-1.7-2.3-1,.4-2.1.8-3,1.1-1.8.6-3.5,1.8-4.8,3.2,2-.6,4.5-.6,6.4.9.4.3,1.1,1.2,1.1,1.7h0c0,.2,0,.3-.2.4-.3.2-1,.3-3.8-.8-1.7-.7-3.3-.3-5.2.3Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M669.9,94.5c-.8,2.3-3.4,4.4-5.3,4.8-1.2.2-2.7-.3-4.3-1.4,2-1.7,4.5-5.5,4.7-7,.1-1.3-.7,1.5-3,3.9-.7.8-1.8,1.5-2.9,2.1-1.5-1.3-2.8-3.2-3.8-5.6,2.3-.7,5.9-2.7,6.2-4.1.2-1-1.8,1-3.9,2.3-.9.6-1.8.9-2.6,1-.4-1.2-.7-2.6-.9-4.1,0-.6-.2-1.1-.3-1.6,1.6-.5,3.8-1.8,4-2.7.2-1-2.2,1.1-4.4,1.3-1-2.7-2.6-3.8-1.7-4.7.5-.6,2.6-1.5,5.2-2.1,1.5,1.9.8,4,1.5,3.5.6-.4.4-2.4-.2-3.8,2.4-.5,5.1-.8,7.3-.4.7,3.1-.7,6.1-1.2,6.8-.5.7.9.9,2.1-2.1.6-1.6.8-3.2.7-4.3,2,.5,3.9,1.3,5.6,2.4-.2,1.3-.5,2.5-1.2,3.4-1.5,2.1-3.9,3.3-3.3,3.5.8.3,4.7-3.7,5.7-6,1.5,1.3,2.4,3.1,2.2,5.2-.5,5.1-3.4,5.5-5,5.6-1.9,0-.5,2.3-1.2,4.2Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M651.2,79.3c0-.3,0-.5.3-.7.6-.7,2.8-1.6,5.3-2.2h.2s.1,0,.1,0c.9,1.1,1,2.3,1.1,3,0,.1,0,.2,0,.3.3-.5.2-2-.4-3.4v-.3c-.1,0,.2,0,.2,0,2-.4,4.9-.8,7.4-.4h.2s0,.2,0,.2c.7,3.1-.7,6.2-1.2,7,0,0,0,0,0,0,.3,0,1-.6,1.7-2.3.7-1.7.7-3.4.7-4.2v-.3s.3,0,.3,0c2.2.6,4.2,1.4,5.6,2.4h.1c0,0,0,.3,0,.3-.2,1.2-.5,2.5-1.3,3.5-.8,1.1-1.9,2-2.6,2.6-.2.1-.3.3-.5.4,1.1-.6,4.1-3.6,5.1-5.7v-.3c.1,0,.4.2.4.2,1.7,1.5,2.5,3.4,2.3,5.4-.6,5.5-4,5.7-5.2,5.8-.3,0-.5,0-.6.2-.2.3-.2.8-.2,1.5,0,.7.1,1.5-.2,2.3h0c-.8,2.5-3.5,4.6-5.5,4.9-1.3.2-2.9-.3-4.4-1.4l-.3-.2.3-.2c1.7-1.4,3.6-4.2,4.3-5.9-.5.8-1.2,2-2.3,3.2-.6.7-1.6,1.4-2.9,2.2h-.2c0,0-.1,0-.1,0-1.6-1.5-2.9-3.4-3.9-5.7v-.3c-.1,0,.2,0,.2,0,2.3-.7,5.5-2.6,6-3.8-.3.2-.8.6-1.3.9-.7.5-1.4,1.1-2.2,1.5-1.1.7-2.1,1-2.7,1.1h-.2s0-.2,0-.2c-.5-1.3-.8-2.7-.9-4.2,0-.5-.1-1.1-.3-1.6v-.2c0,0,.2,0,.2,0,1.6-.5,3.7-1.8,3.8-2.5-.2,0-.6.3-1,.4-.9.4-2,1-3.2,1.1h-.2s0-.2,0-.2c-.4-1-.9-1.8-1.2-2.4-.4-.7-.8-1.3-.8-1.8ZM656.8,76.9c-2.6.7-4.4,1.6-4.9,2-.4.4-.1.9.5,2,.4.6.8,1.4,1.2,2.3,1-.2,2-.7,2.8-1.1.8-.4,1.3-.6,1.6-.4.1.1.2.3.1.5-.2,1.1-2.5,2.3-3.9,2.8.1.5.2.9.2,1.4.1,1.3.4,2.6.8,3.8.7-.2,1.6-.5,2.3-1,.7-.5,1.5-1,2.1-1.5,1.2-.9,1.7-1.2,2-1,.1,0,.2.2.1.5-.3,1.4-3.8,3.5-6.1,4.2.8,2,2.1,3.8,3.5,5.1,1.2-.7,2.1-1.3,2.7-2,1.2-1.3,2-2.7,2.5-3.5.4-.7.5-.9.8-.8.2,0,.2.4.2.6-.1,1.5-2.5,5.2-4.5,6.9,1.4.9,2.7,1.3,3.8,1.1,1.8-.3,4.3-2.3,5.1-4.6h0c.2-.7.2-1.4.1-2.1,0-.8,0-1.4.3-1.9.2-.2.5-.4,1-.4,1.3,0,4.3-.2,4.8-5.3.2-1.8-.5-3.4-1.9-4.8-1.2,2.3-4.9,6.2-5.9,5.8-.2,0-.2-.2-.3-.3,0-.3.3-.5.9-1.1.7-.6,1.7-1.4,2.5-2.5.6-.8.9-1.8,1.2-3.1-1.3-.9-3.1-1.6-5-2.1,0,.9,0,2.5-.7,4.1-.8,1.9-1.7,2.6-2.2,2.7-.2,0-.3,0-.4-.2,0,0-.1-.3,0-.6.5-.8,1.8-3.5,1.2-6.4-2.2-.4-4.8,0-6.7.3.6,1.4.7,3.3,0,3.8-.2.1-.3.1-.4,0-.2-.1-.3-.4-.3-.9,0-.6-.2-1.7-.9-2.6ZM657.7,82.1h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M671.8,95.6c-4.2-5.4-7.5.1-8.2,3.3-.6,2.6,0,4.5,1,7.5,1,2.8,6,7.4,5.9,7.1,0-.3,1.9-2.4,2.7-3.2,1.5-1.6,4.3-5.3,4.9-8.8.6-3.7-3.9-4.6-4.7-4.6-.7,0-1.3-1-1.6-1.4Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M663,101c0-.7,0-1.4.2-2.1.4-1.9,2-5.2,4.3-5.7,1.5-.3,2.9.4,4.4,2.3v.2c.4.4.9,1.1,1.4,1.1.5,0,2.9.5,4.2,2,.7.8.9,1.8.7,2.9-.7,4.2-4.5,8.5-5,8.9h-.1c-1.6,1.8-2.4,2.8-2.5,3v.2s-.2,0-.2,0c-.5.1-5.3-4.8-6.2-7.3-.7-2.1-1.3-3.7-1.3-5.5ZM677.8,100.9c0-.7-.2-1.4-.7-1.9-1.1-1.4-3.3-1.8-3.8-1.8-.8,0-1.3-.8-1.7-1.3v-.2c-1.4-1.7-2.7-2.4-4-2.1-2.1.5-3.5,3.5-3.9,5.3-.6,2.6,0,4.5,1,7.3.8,2.4,4.6,6.1,5.6,6.9.2-.4.9-1.1,2.5-2.8h.1c.4-.6,4.2-4.7,4.8-8.8,0-.2,0-.4,0-.6Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M684.5,92.9c-4,3.5.3,5.8,2.7,6.2,2,.3,3.4-.2,5.6-1.1,2.1-.9,5.5-4.9,5.2-4.9-.2,0-1.8-1.4-2.4-1.9-1.2-1.1-4.1-3.1-6.7-3.4-2.8-.3-3.4,3.2-3.4,3.8,0,.6-.7,1.1-1,1.3Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M682.6,95.6c0-1,.6-1.9,1.7-2.9h.1c.3-.3.8-.7.8-1.1,0-.4.3-2.3,1.5-3.4.6-.5,1.3-.7,2.2-.7,3.2.4,6.5,3.2,6.9,3.5h0c1.2,1.2,2,1.8,2.2,1.9h.2s0,.2,0,.2c.2.5-3.6,4.4-5.4,5.2-2.2.9-3.6,1.5-5.7,1.1-1.5-.3-3.9-1.3-4.4-3.1,0-.2,0-.4,0-.7ZM697.7,93.3c-.3-.2-.9-.7-2.2-1.8h0c-.4-.4-3.5-3.1-6.6-3.5-.7,0-1.3.1-1.8.5-1,.9-1.3,2.7-1.3,3,0,.6-.6,1.1-1,1.4h-.1c-1.2,1.2-1.7,2.2-1.5,3.2.4,1.6,2.7,2.5,4,2.7,2,.3,3.3-.2,5.5-1.1,1.7-.7,4.4-3.7,5-4.5Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <path d="M664,86c.4.7,1,1.1,1.6,1.6.7.5,1.4,1.1,2.2,1.6,1.5,1,3.1,1.9,4.7,2.7.2,0,.4,0,.4-.3-.2-.4-.1-.9,0-1.3.1-.3-.3-.5-.4-.3-.3.5-.3,1.1-.1,1.7.1,0,.2-.2.4-.3-1.5-.7-3-1.6-4.4-2.5-.7-.5-1.4-.9-2-1.4-.7-.5-1.4-1-1.9-1.7-.2-.3-.6,0-.4.3h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M672.6,91.9c-.4,2.4,0,4.8-.2,7.1-.3,2.7-1.6,5.2-2.2,7.9,0,.3.4.4.5.1.5-2.6,1.8-5.1,2.2-7.8.3-2.4-.2-4.8.2-7.2,0-.3-.4-.5-.5-.1h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M678.8,79c-1.3,1.3-2.3,2.8-2.9,4.6-.1.3.4.4.5.1.6-1.6,1.6-3.1,2.8-4.3.2-.2-.1-.6-.4-.4h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <g>
                  <path d="M687.4,113.6c-.7.1-2.2-.3-4-1.1.8-1.1,1.5-2.9,1.7-3.9.2-1.3-1.9.8-3.5,2.9-1.5-.9-3.1-1.9-4.3-3.1,1.7-.9,4.4-2.7,5.1-3.5.9-1.2,1-2.7,0-1.4-.9,1.2-3.3,2.8-6.3,3.6-.3-.4-.6-.7-.9-1.1-.9-1.3-1.6-3.1-2.1-4.9,2.7-.5,7.5-2.5,7-3.3-.5-.9-3.6,1.8-7.2,1.7-.5-3.3,0-6.5,2.2-7.4,3.6-1.4,4.3,0,5.1-.8.8-.8-.5-.9.9-1.4,2.4-.8,4.6-.3,6.4.7,0,.2,0,.5-.2.7-.5,1.8-1.8,4.2-2.4,4.5-1.2.5-.2,2.3,1.3,1,1.2-1,1.9-3.9,2-5.7,1.8,1.4,3.1,3.4,3.5,5.2.2.9.2,2.3,0,3.9-3.6,1.4-5.4-.2-5.6.5-.2.8,3.2,2.8,5.2,2.2-.3,1.5-.6,3.1-1,4.6-2.4-.4-3.1-1.1-2.8-.2.2.8,1.4,1.7,2.3,2-.8,2.3-1.6,4-2.3,4.2Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M672.3,97.4c0-2.5.6-4.8,2.5-5.5,2.2-.9,3.4-.7,4.2-.6.5,0,.7,0,.9-.1.2-.2.2-.3.2-.5-.1-.5,0-.7.9-1,2.3-.7,4.5-.5,6.6.7h.2c0,0,0,.3,0,.3,0,.3,0,.5-.2.7-.5,1.8-1.8,4.3-2.5,4.6-.2,0-.4.3-.4.5,0,.2.1.4.3.5.3.1.7,0,1.1-.3,1.2-1,1.9-3.9,1.9-5.5v-.5s.4.3.4.3c1.7,1.3,3.1,3.3,3.6,5.3.3,1.1.2,2.8,0,4v.2s-.2,0-.2,0c-2.3.9-3.8.6-4.8.4-.3,0-.6-.1-.7,0,0,0,0,.2.4.5,1,.9,3.2,1.8,4.5,1.4h.4c0-.1,0,.3,0,.3-.3,1.5-.6,3.1-1,4.6v.2c0,0-.3,0-.3,0-1-.2-1.7-.4-2.1-.5-.2,0-.3-.1-.5-.1,0,0,0,0,0,0,.2.8,1.3,1.6,2.1,1.9h.2c0,0,0,.3,0,.3-.9,2.7-1.7,4.2-2.5,4.3-.8.2-2.3-.3-4.1-1.1h-.3c0-.1.2-.4.2-.4.8-1.1,1.5-2.8,1.6-3.8,0,0,0,0,0,0-.4.2-1.7,1.4-3.1,3.2v.2c-.1,0-.3-.1-.3-.1-1.6-.9-3.2-2-4.4-3.1l-.3-.2.3-.2c1.8-1,4.4-2.7,5-3.5.4-.5.6-1.1.7-1.4,0,0-.2.2-.3.3-.9,1.2-3.3,2.8-6.5,3.7h-.1s-.1,0-.1,0c-.3-.3-.6-.7-.9-1.1-.9-1.3-1.6-3.1-2.1-5v-.3c0,0,.2,0,.2,0,3-.5,6.8-2.4,6.8-2.9h0c-.1-.2-1,.2-1.8.5-1.4.6-3.2,1.4-5.3,1.3h-.2s0-.2,0-.2c0-.7-.1-1.4-.1-2.1ZM680.5,90.9c0,.2,0,.4-.3.7-.4.4-.8.3-1.3.2-.7-.1-1.8-.3-3.9.6-2,.8-2.4,4-2,6.9,1.9,0,3.6-.7,4.8-1.3,1.2-.5,2-.9,2.4-.3,0,.1,0,.3,0,.5-.5,1-4.5,2.6-6.9,3.1.5,1.8,1.1,3.4,2,4.6.3.4.5.7.7,1,3-.9,5.2-2.4,6.1-3.5.3-.4.6-.6.8-.6.1,0,.2.1.3.2.2.4-.2,1.3-.7,2-.7.8-3.1,2.5-4.8,3.4,1.1,1,2.4,1.9,3.9,2.7.6-.7,2.8-3.5,3.6-3.2.1,0,.3.2.2.6-.2.9-.8,2.5-1.6,3.7,1.6.7,2.9,1.1,3.5.9h0c.4,0,1.2-1.1,2.1-3.8-.9-.4-2-1.2-2.2-2.1,0-.2-.1-.5,0-.6.2-.2.5-.1,1,0,.4.1,1,.3,1.8.5.3-1.3.7-2.6.9-3.9-1.6.2-3.7-.7-4.7-1.6-.4-.4-.6-.7-.5-1,.1-.5.6-.4,1.2-.3.9.2,2.3.4,4.4-.3.2-1.6.1-2.9,0-3.7-.4-1.7-1.6-3.5-3.1-4.8-.1,1.8-.9,4.4-2,5.4-.8.7-1.5.5-1.7.4-.4-.2-.6-.5-.6-.9,0-.4.3-.7.7-.9.5-.2,1.7-2.4,2.3-4.3,0-.2,0-.4.1-.5-1.9-1.1-3.9-1.3-6-.6-.5.2-.6.3-.6.3,0,0,0,0,0,0,0,0,0,.2,0,.3ZM682.9,103.3h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <path d="M673,92.2c1.5-.7,3.1-1.1,4.7-1.2.9,0,1.6,0,2.2.8.5.6.8,1.4,1.1,2.1.6,1.4,1,2.9,1.4,4.4.5,1.6,1,3.1,1.5,4.7,0,.3.6.2.5-.1-.6-1.8-1.1-3.6-1.7-5.4-.5-1.7-1-3.4-1.8-4.9-.3-.6-.7-1.3-1.3-1.7-.6-.4-1.3-.3-2-.3-1.7.2-3.3.6-4.8,1.3-.3.1,0,.6.3.4h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <g>
                  <path d="M367.5,397.1c-.2,0-.5,0-.7,0-2.2-.3-3.5-1.5-4.9-3-1.5-1.5-3.2-3.3-6.4-4.1-1-.2-1.9-.4-2.9-.4-3.3,0-6,1.3-9,2.8-1,.5-2.1,1-3.2,1.5-4.1,1.7-8.8,2.6-13.7,2.6-10.8,0-22.3-4.3-29.2-10.9-5.6-5.3-10.3-13.7-7.9-18.6,1.2-2.5,3.8-3.3,6.5-4.1,2.9-.9,5.8-1.7,7.3-4.7,1.7-3.4,0-6.5-1.8-9.9-1.8-3.4-3.9-7.3-2.9-12.3.7-3.5,2.7-6,4.4-8.1,2.1-2.6,4-5.1,3.3-8.7-.4-1.9-1.3-2.8-2.1-3.7-.8-.8-1.5-1.6-1.9-3.2-.8-2.9,0-6.8,2.2-10.3,2.2-3.6,5.4-6.2,8.6-7,.6-.2,1.3-.2,1.9-.2,2.5,0,4.5,1.2,6.6,2.5,2.3,1.4,4.6,2.8,7.8,2.8.5,0,1,0,1.5-.1,4.8-.7,7-4.2,9.2-7.6,2-3.1,4-6.2,8-7.4.9-.3,1.8-.4,2.8-.4,4.2,0,8.1,2.7,12.2,5.6,4.6,3.3,9.5,6.6,15.4,6.6,1,0,2.1-.1,3.1-.3,2.5-.5,5-1.5,7.8-2.5,3.9-1.5,8-3.1,11.7-3.1s6.2,1.3,8.5,4.1c.5.6,1,1.4,1.5,2.1,3.8,6.3,4.1,15.5.7,21.8-.6,1.1-1.3,2.1-2,3-1.5,2-2.8,3.9-3.1,6.8-.4,4.9,1.8,8.5,3.8,11.7,1.8,2.9,3.2,5.1,2.2,7.5-1,2.2-3.4,2.9-5.8,3.6-2.4.7-4.8,1.4-5.5,3.7-.8,2.6,1.3,4.8,3.7,7.3,2.6,2.8,5.6,5.9,6.3,10.5,1,7.1-4,16-10,17.5-.6.1-1.1.2-1.7.2h0c-1.9,0-3.6-1-5.3-2-2-1.2-4.3-2.5-7.5-2.5s-.7,0-1,0c-4.8.4-7.9,3.5-10.6,6.2-2.5,2.5-4.6,4.6-7.5,4.6Z" fill="#fff"/>
                  <path d="M350.6,285.1c4.1,0,7.9,2.7,11.9,5.5,4.7,3.3,9.6,6.7,15.7,6.7s2.2-.1,3.2-.3c2.5-.5,5.1-1.5,7.9-2.6,3.9-1.5,7.9-3,11.5-3s5.9,1.3,8.1,3.9c.5.6,1,1.3,1.4,2,3.7,6.2,4,15.1.7,21.3-.6,1.1-1.3,2-1.9,2.9-1.4,2-2.9,4.1-3.2,7.1-.4,5.1,2,8.9,3.9,12,1.7,2.7,3.1,4.9,2.1,7.1-.9,2-3.1,2.7-5.5,3.3-2.5.7-5.1,1.5-5.9,4-.9,2.9,1.3,5.2,3.8,7.8,2.6,2.7,5.5,5.8,6.1,10.3,1,6.9-3.9,15.5-9.6,16.9-.5.1-1,.2-1.5.2-1.8,0-3.3-.9-5-1.9-2.1-1.2-4.4-2.6-7.8-2.6s-.7,0-1.1,0c-5,.4-8.2,3.6-10.9,6.3-2.4,2.4-4.4,4.4-7.2,4.4s-.4,0-.7,0c-2.1-.2-3.2-1.4-4.6-2.8-1.5-1.6-3.3-3.4-6.6-4.2-1-.2-2-.4-3-.4-3.4,0-6.3,1.4-9.2,2.8-1,.5-2.1,1-3.2,1.4-4.1,1.7-8.6,2.5-13.6,2.5-10.7,0-22-4.2-28.9-10.8-4.7-4.5-10.2-13-7.8-18,1.1-2.3,3.6-3,6.2-3.8,2.8-.8,6-1.8,7.6-5,1.8-3.6,0-6.9-1.8-10.3-1.9-3.5-3.8-7.2-2.9-12,.7-3.4,2.5-5.7,4.3-7.9,2.2-2.7,4.2-5.3,3.4-9.1-.4-2-1.4-3-2.2-3.9-.8-.8-1.4-1.5-1.8-3-.7-2.8,0-6.5,2.1-9.9,2.1-3.5,5.2-6,8.3-6.7.6-.1,1.2-.2,1.8-.2,2.4,0,4.3,1.2,6.3,2.4,2.3,1.4,4.7,2.9,8,2.9s1.1,0,1.6-.1c5-.7,7.3-4.3,9.5-7.8,2-3.1,3.9-6.1,7.7-7.2.9-.3,1.7-.4,2.6-.4M350.6,284.1c-.9,0-1.9.1-2.9.4-8.6,2.5-8.2,13.7-17.1,14.9-.5,0-1,.1-1.5.1-5.8,0-9-5.3-14.4-5.3-.6,0-1.3,0-2,.2-7.1,1.7-12.8,11.3-11.1,17.8.9,3.5,3.3,3.5,4,6.9,1.3,6.2-6.1,8.9-7.7,16.7-2.1,10,8,15.6,4.8,22-2.7,5.6-11.2,3.4-13.8,8.8-2.6,5.5,2.9,14.3,8,19.2,7,6.6,18.4,11,29.6,11s9.6-.8,13.9-2.6c4.1-1.7,7.7-4.2,12-4.2s1.8.1,2.8.3c6,1.5,6.4,6.5,11.3,7.1.3,0,.5,0,.8,0,6.7,0,9.3-10,18.2-10.8.3,0,.7,0,1,0,5.8,0,8.3,4.5,12.8,4.5s1.1,0,1.8-.2c6.2-1.6,11.4-10.5,10.3-18-1.3-9.2-11.5-12.8-10-17.6,1.3-4.2,9.2-2.5,11.3-7.3,2.4-5.4-6.7-10.2-5.9-19.4.3-4.1,3.2-6.3,5-9.6,3.5-6.5,3.2-15.8-.7-22.3-.5-.8-1-1.5-1.5-2.2-2.6-3.2-5.6-4.3-8.8-4.3-6.4,0-13.6,4.4-19.6,5.6-1,.2-2.1.3-3,.3-11.1,0-18.4-12.2-27.6-12.2h0Z" fill="#efe7da"/>
                </g>
                <g>
                  <path d="M350.6,283.7c4.5,0,8.5,2.8,12.7,5.7,5.3,3.7,10.8,7.6,17.9,6.2,2.4-.5,4.9-1.5,7.6-2.5,7.1-2.8,15.2-5.9,21.2,1.3.6.7,1.1,1.4,1.6,2.2h0c3.9,6.5,4.2,16.1.7,22.7-.6,1.1-1.3,2.1-2,3.1-1.4,1.9-2.7,3.8-2.9,6.4-.4,4.6,1.8,8.1,3.7,11.1,1.9,3,3.5,5.5,2.2,8.3-1.1,2.6-3.9,3.4-6.3,4.1-2.2.7-4.4,1.3-5,3.1-.7,2.1,1.2,4,3.5,6.4,2.6,2.7,5.8,6.1,6.5,11,1.1,7.7-4.2,16.8-10.6,18.4-3.1.8-5.3-.5-7.6-1.8-2.2-1.3-4.5-2.7-8-2.4-4.5.4-7.3,3.2-10.1,5.9-2.7,2.7-5.2,5.2-9,4.8-2.5-.3-3.9-1.7-5.4-3.2-1.5-1.5-3-3.1-6-3.9-4.2-1.1-7.7.6-11.3,2.3-1,.5-2.1,1-3.2,1.5-15.3,6.3-34.3.6-43.9-8.5-4.8-4.6-11-13.6-8.1-19.6,1.4-2.8,4.2-3.7,7-4.5,2.8-.8,5.5-1.6,6.8-4.3,1.5-3,0-5.8-1.8-9.1-1.9-3.6-4.1-7.6-3-12.9.8-3.7,2.8-6.2,4.6-8.5,2-2.6,3.8-4.8,3.1-8-.3-1.6-1.1-2.4-1.9-3.3-.8-.9-1.7-1.8-2.1-3.6-.8-3.2,0-7.2,2.3-10.9,2.3-3.8,5.7-6.6,9.1-7.4,3.8-.9,6.5.8,9.1,2.4,2.5,1.5,5.1,3.1,8.7,2.6,4.4-.6,6.4-3.8,8.6-7.2,2-3.2,4.1-6.5,8.4-7.8,1-.3,2-.4,3-.4ZM378.2,296.7c-5.9,0-10.7-3.4-15.3-6.6-5-3.5-9.6-6.8-15-5.2-4,1.2-6.1,4.4-8,7.4-2.1,3.4-4.3,6.8-9.1,7.5-3.9.6-6.6-1.1-9.2-2.7-2.6-1.6-5.1-3.1-8.6-2.3-3.2.8-6.5,3.4-8.7,7-2.1,3.5-2.9,7.4-2.2,10.4.4,1.6,1.2,2.4,2,3.3.8.9,1.7,1.8,2.1,3.6.7,3.5-1.2,6-3.3,8.6-1.7,2.2-3.7,4.7-4.4,8.2-1,5,1.1,8.9,2.9,12.4,1.8,3.3,3.5,6.4,1.8,9.8-1.4,3-4.4,3.8-7.2,4.7-2.7.8-5.3,1.6-6.6,4.1-2.7,5.6,3.5,14.4,8,18.7,9.4,9,28.1,14.5,43.1,8.4,1.1-.4,2.2-1,3.2-1.5,3.8-1.8,7.3-3.5,11.8-2.4,3.2.8,4.8,2.5,6.3,4.1,1.4,1.5,2.7,2.8,4.9,3,3.4.4,5.7-1.9,8.4-4.6,2.7-2.7,5.7-5.8,10.5-6.2,3.7-.3,6.2,1.2,8.4,2.5,2.2,1.3,4.2,2.5,7,1.8,6-1.5,11.1-10.4,10.1-17.6-.7-4.7-3.7-7.8-6.3-10.6-2.4-2.5-4.5-4.7-3.6-7.2.7-2.2,3-2.9,5.5-3.6,2.4-.7,4.9-1.4,5.9-3.7,1.1-2.4-.3-4.7-2.2-7.6-2-3.2-4.2-6.7-3.8-11.6.2-2.9,1.6-4.8,3.1-6.8.7-.9,1.4-1.9,2-3,3.4-6.4,3.1-15.6-.7-22h0c-.5-.7-1-1.5-1.5-2.1-5.6-6.8-13.1-3.9-20.3-1.1-2.7,1.1-5.3,2.1-7.8,2.5-1.1.2-2.1.3-3.1.3Z" fill="#fff"/>
                  <path d="M350.6,283.7c-1,0-2,.1-3,.4-4.3,1.2-6.4,4.6-8.4,7.8-2.1,3.4-4.2,6.5-8.6,7.2-.5,0-.9.1-1.4.1-2.9,0-5.1-1.4-7.3-2.7-2.1-1.3-4.3-2.6-7.1-2.6s-1.3,0-2.1.2c-3.4.8-6.8,3.5-9.1,7.4-2.2,3.7-3.1,7.8-2.3,10.9.5,1.8,1.3,2.7,2.1,3.6.8.8,1.5,1.6,1.9,3.3.7,3.2-1.1,5.4-3.1,8-1.8,2.3-3.8,4.8-4.6,8.5-1.1,5.3,1.1,9.3,3,12.9,1.8,3.3,3.3,6.1,1.8,9.1-1.3,2.7-4,3.4-6.8,4.3-2.8.8-5.7,1.7-7,4.5-2.9,6,3.3,15,8.1,19.6,6.8,6.4,18.3,11.2,29.8,11.2s9.6-.8,14.1-2.7c1.1-.5,2.2-1,3.2-1.5,2.8-1.4,5.6-2.7,8.6-2.7s1.7.1,2.7.3c2.9.7,4.5,2.3,6,3.9,1.5,1.5,2.9,3,5.4,3.2.3,0,.6,0,.8,0,3.3,0,5.7-2.4,8.2-4.8,2.7-2.7,5.6-5.6,10.1-5.9.3,0,.6,0,1,0,3,0,5,1.2,7.1,2.4,1.8,1.1,3.5,2.1,5.7,2.1s1.2,0,1.9-.2c6.4-1.6,11.7-10.8,10.6-18.4-.7-4.9-3.9-8.3-6.5-11-2.3-2.4-4.1-4.3-3.5-6.4.6-1.8,2.7-2.5,5-3.1,2.4-.7,5.2-1.5,6.3-4.1,1.2-2.8-.4-5.4-2.2-8.3-1.9-3.1-4.1-6.5-3.7-11.1.2-2.6,1.5-4.5,2.9-6.4.7-1,1.4-2,2-3.1,3.5-6.6,3.2-16.2-.7-22.7-.5-.8-1-1.5-1.6-2.2-2.7-3.3-5.8-4.4-9.1-4.4s-8.1,1.6-12,3.1c-2.7,1-5.2,2-7.6,2.5-1,.2-2,.3-3,.3-5.7,0-10.4-3.3-14.9-6.5-4.2-2.9-8.2-5.7-12.7-5.7h0ZM329.2,300c.5,0,1,0,1.5-.1,4.7-.7,6.9-4.2,9.1-7.5,2-3.1,4-6.3,8-7.4.9-.3,1.9-.4,2.8-.4,4.3,0,8.2,2.7,12.3,5.6,4.6,3.3,9.4,6.6,15.3,6.6s2.1,0,3.1-.3c2.5-.5,5-1.5,7.8-2.5,4-1.5,8-3.1,11.7-3.1s6,1.1,8.6,4.1c.5.7,1,1.4,1.5,2.1,3.8,6.3,4.1,15.6.7,22-.6,1.1-1.3,2.1-2,3-1.4,2-2.8,3.9-3.1,6.8-.4,4.9,1.8,8.4,3.8,11.6,1.8,2.9,3.2,5.2,2.2,7.6-1,2.3-3.5,3-5.9,3.7-2.4.7-4.7,1.4-5.5,3.6-.8,2.5,1.3,4.7,3.6,7.2,2.6,2.8,5.6,5.9,6.3,10.6,1,7.2-4.1,16.1-10.1,17.6-.6.2-1.2.2-1.7.2-2,0-3.6-.9-5.3-2-2-1.2-4.3-2.5-7.4-2.5s-.7,0-1,0c-4.8.4-7.8,3.5-10.5,6.2-2.5,2.5-4.6,4.6-7.6,4.6s-.5,0-.7,0c-2.3-.3-3.5-1.5-4.9-3-1.5-1.5-3.2-3.3-6.3-4.1-1-.2-1.9-.4-2.9-.4-3.2,0-6,1.3-8.9,2.7-1,.5-2.1,1-3.2,1.5-4.4,1.8-9.1,2.6-13.8,2.6-11.3,0-22.6-4.6-29.3-11-4.5-4.3-10.6-13.2-8-18.7,1.2-2.5,3.8-3.3,6.6-4.1,2.8-.8,5.8-1.7,7.2-4.7,1.6-3.3,0-6.4-1.8-9.8-1.9-3.5-4-7.4-2.9-12.4.7-3.5,2.7-6,4.4-8.2,2.1-2.6,4-5.1,3.3-8.6-.4-1.8-1.2-2.7-2.1-3.6-.8-.8-1.5-1.7-2-3.3-.8-3,0-6.8,2.2-10.4,2.2-3.6,5.4-6.3,8.7-7,.7-.2,1.3-.2,1.9-.2,2.5,0,4.6,1.2,6.7,2.5,2.3,1.4,4.6,2.8,7.7,2.8h0Z" fill="#efe7da"/>
                </g>
              </g>
              <g>
                <path d="M350.6,289.2c1.4,0,2.4.8,3.9,2.2,1.8,1.5,4.5,3.9,9.7,6.6,5.4,2.8,8.8,3.6,11.2,3.9h0c1.3.2,3.9.6,7.2.2,3.9-.5,6.2-1.7,8.3-2.9,2.1-1.1,4-2.2,7.2-2.3,4.1,0,7.5,1.1,9.5,3.4,3.7,4.2,2.1,10.9,1.4,13.5-1.2,5-3.4,7.5-5.3,9.7-1.7,2-3.2,3.7-3.4,6.9-.2,3.8,1.6,6.3,3.3,8.7,1.8,2.5,3.5,4.9,2.9,8.4-.6,3.4-2.8,5.2-4.9,6.9-2,1.6-3.9,3.2-3.9,5.9,0,2.9,1.9,4.7,3.9,6.7,2.2,2.2,4.5,4.4,4.7,8.2.1,3.7-2,8.5-5.7,10.3-3.4,1.6-6.5,0-9.8-1.7-3.3-1.7-6.8-3.5-11-2.5-3.7.9-5.9,3.6-7.8,6-2,2.5-3.7,4.6-6.7,4.4-2.3-.2-3.6-1.7-4.9-3.3-1.3-1.6-2.8-3.5-5.6-4.2-2.9-.8-4.8.2-8.4,1.8-2,1-4.6,2.2-8.1,3.4-6.5,2.3-12.2,4.3-19,3.8-2.5-.2-11.2-1.3-18.4-8.1-1.9-1.8-11-10.9-6.8-15.9.7-.9,1.8-1.4,2.8-1.9.6-.3,1.1-.5,1.7-.8,1.7-.8,3.4-1.5,5-2.7,1.9-1.4,4.5-3.5,5.2-6.7.7-3.2-.9-5.8-2.5-8.5-1-1.7-2.1-3.5-2.5-5.4-1-4.4-.6-9.2,1.2-13.1.5-1.2,1.2-2.4,1.9-3.5,1.7-2.7,3.3-5.3,2.5-8.5-.4-1.6-1.2-3.1-2.1-4.6-1.4-2.3-2.8-4.7-2.1-7.7.9-3.9,3.7-7.9,8-7.9h0c2.9,0,5.3,1.8,7.6,3.5.7.5,1.4,1,2.1,1.5,6.6,4.2,15.6.8,19.6-4.9.5-.8,1-1.8,1.6-2.9,1.3-2.7,2.8-5.7,5.6-6.2.2,0,.4,0,.6,0ZM375.4,302.2c-2.4-.3-5.8-1.1-11.3-3.9-5.2-2.7-8-5.1-9.8-6.6-1.8-1.5-2.7-2.3-4.3-2.1-2.7.4-4.1,3.4-5.4,5.9-.5,1.1-1,2.1-1.6,2.9-4.2,6-13.3,9.4-20.1,5-.7-.5-1.4-1-2.1-1.5-2.3-1.7-4.6-3.4-7.4-3.4h0c-4.1,0-6.8,3.8-7.6,7.6-.7,2.8.6,5.1,2,7.4.9,1.5,1.8,3,2.1,4.7.7,3.4-.9,6.1-2.6,8.8-.7,1.1-1.4,2.3-1.9,3.4-1.7,3.9-2.1,8.6-1.1,12.9.4,1.9,1.5,3.6,2.5,5.3,1.6,2.7,3.2,5.4,2.5,8.8-.7,3.3-3.4,5.5-5.4,6.9-1.6,1.1-3.3,1.9-5,2.7-.5.3-1.1.5-1.7.8-1,.5-2,1-2.7,1.8-4,4.8,4.9,13.7,6.7,15.4,7.1,6.7,15.7,7.8,18.2,8,6.7.5,12.3-1.5,18.8-3.8,3.5-1.3,6.1-2.4,8.1-3.4,3.6-1.7,5.6-2.6,8.6-1.8,2.9.8,4.5,2.7,5.8,4.3,1.3,1.6,2.5,3,4.6,3.2,2.8.2,4.4-1.9,6.4-4.3,1.9-2.4,4.2-5.2,8-6.2,4.3-1.1,8,.8,11.2,2.5,3.2,1.7,6.3,3.2,9.5,1.7,3.6-1.7,5.6-6.4,5.5-9.9-.1-3.6-2.4-5.8-4.6-7.9-2.1-2.1-4.1-4-4-7,0-2.9,2-4.5,4.1-6.2,2.1-1.7,4.2-3.5,4.7-6.7.6-3.4-1.1-5.7-2.9-8.2-1.8-2.5-3.6-5-3.4-8.9.2-3.3,1.7-5,3.5-7.1,1.9-2.2,4-4.6,5.2-9.6.6-2.5,2.2-9.1-1.4-13.1-1.9-2.2-5.2-3.3-9.2-3.3-3.1,0-4.9,1.1-7,2.2-2.1,1.1-4.5,2.4-8.4,2.9-3.4.4-6,0-7.3-.2h0Z" fill="#fff"/>
                <path d="M350.6,289.2c-.2,0-.4,0-.6,0-2.9.5-4.3,3.5-5.6,6.2-.5,1.1-1,2.1-1.6,2.9-2.8,3.9-7.9,6.8-13,6.8s-4.6-.6-6.6-1.9c-.7-.4-1.4-1-2.1-1.5-2.3-1.7-4.7-3.5-7.6-3.5h0c-4.3,0-7.1,4-8,7.9-.7,3,.7,5.4,2.1,7.7.8,1.5,1.7,3,2.1,4.6.7,3.3-.9,5.8-2.5,8.5-.7,1.1-1.4,2.3-1.9,3.5-1.7,4-2.2,8.8-1.2,13.1.4,1.9,1.5,3.7,2.5,5.4,1.6,2.7,3.1,5.3,2.5,8.5-.7,3.1-3.3,5.3-5.2,6.7-1.6,1.1-3.2,1.9-5,2.7-.6.3-1.1.5-1.7.8-1,.5-2.1,1-2.8,1.9-4.3,5,4.9,14.2,6.8,15.9,7.2,6.8,15.9,7.9,18.4,8.1.7,0,1.4,0,2.1,0,5.9,0,11-1.8,16.9-3.9,3.5-1.3,6.1-2.5,8.1-3.4,2.7-1.3,4.5-2.1,6.4-2.1.6,0,1.3,0,2,.3,2.8.8,4.3,2.6,5.6,4.2,1.3,1.6,2.6,3.2,4.9,3.3.1,0,.3,0,.4,0,2.7,0,4.4-2.1,6.3-4.5,1.9-2.4,4.1-5.1,7.8-6,.9-.2,1.7-.3,2.5-.3,3.1,0,5.8,1.4,8.4,2.8,2.4,1.2,4.6,2.4,6.9,2.4s1.9-.2,2.8-.6c3.8-1.8,5.9-6.6,5.7-10.3-.1-3.8-2.4-6-4.7-8.2-2-2-4-3.9-3.9-6.7,0-2.7,2-4.3,3.9-5.9,2.1-1.7,4.3-3.5,4.9-6.9.6-3.6-1.1-5.9-2.9-8.4-1.8-2.4-3.6-4.9-3.3-8.7.2-3.1,1.7-4.9,3.4-6.9,1.9-2.2,4.1-4.7,5.3-9.7.6-2.5,2.3-9.3-1.4-13.5-1.9-2.2-5.2-3.4-9.1-3.4s-.3,0-.4,0c-3.1,0-5.1,1.1-7.2,2.3-2.1,1.1-4.4,2.4-8.3,2.9-1.1.1-2.1.2-3,.2-1.9,0-3.4-.2-4.2-.3-2.4-.3-5.8-1.1-11.2-3.9-5.2-2.7-7.9-5.1-9.7-6.6-1.6-1.4-2.5-2.2-3.9-2.2h0ZM329.9,305.5c5.2,0,10.3-2.9,13.2-7,.6-.8,1.1-1.8,1.6-2.9,1.3-2.6,2.7-5.5,5.4-5.9.2,0,.4,0,.6,0,1.3,0,2.1.8,3.7,2.1,1.8,1.6,4.5,3.9,9.8,6.6,5.4,2.8,8.9,3.6,11.3,3.9.9.1,2.4.3,4.3.3s1.9,0,3-.2c4-.5,6.3-1.8,8.4-2.9,2.1-1.2,4-2.2,7-2.2.1,0,.3,0,.4,0,3.8,0,6.9,1.2,8.8,3.3,3.6,4,2,10.6,1.4,13.1-1.2,4.9-3.3,7.4-5.2,9.6-1.8,2-3.3,3.8-3.5,7.1-.2,3.9,1.6,6.5,3.4,8.9,1.8,2.4,3.4,4.7,2.9,8.2-.5,3.3-2.7,5-4.7,6.7-2.1,1.7-4,3.3-4.1,6.2,0,3,1.9,5,4,7,2.2,2.1,4.4,4.3,4.6,7.9.1,3.5-1.9,8.2-5.5,9.9-.9.4-1.8.6-2.7.6-2.2,0-4.5-1.1-6.8-2.3-2.6-1.3-5.4-2.8-8.7-2.8s-1.7,0-2.6.3c-3.9,1-6.1,3.7-8,6.2-1.8,2.3-3.5,4.3-6,4.3s-.2,0-.4,0c-2.2-.2-3.3-1.6-4.6-3.2-1.3-1.7-2.9-3.6-5.8-4.3-.7-.2-1.4-.3-2.1-.3-2,0-3.8.8-6.6,2.1-2,1-4.6,2.1-8.1,3.4-5.8,2.1-10.9,3.9-16.8,3.9s-1.4,0-2.1,0c-2.5-.2-11.1-1.3-18.2-8-1.8-1.7-10.8-10.6-6.7-15.4.7-.8,1.7-1.3,2.7-1.8.6-.3,1.1-.5,1.7-.8,1.7-.8,3.4-1.6,5-2.7,2-1.4,4.7-3.6,5.4-6.9.7-3.3-.9-6.1-2.5-8.8-1-1.7-2-3.4-2.5-5.3-1-4.3-.6-9,1.1-12.9.5-1.2,1.2-2.3,1.9-3.4,1.6-2.6,3.3-5.4,2.6-8.8-.4-1.7-1.3-3.2-2.1-4.7-1.4-2.4-2.7-4.6-2-7.4.9-3.8,3.6-7.6,7.6-7.6h0c2.7,0,5.1,1.8,7.4,3.4.7.5,1.4,1.1,2.1,1.5,2.2,1.4,4.5,2,6.9,2h0Z" fill="#efe7da"/>
              </g>
              <g>
                <path d="M351.1,296.8c3,0,5.3,2.6,7.9,5.6,3,3.4,6.4,7.4,12.1,8.7,7.8,1.9,15.3-2.3,20.8-5.4,3.9-2.2,6.8-3.8,8.2-2.3,1.2,1.2,0,3.4-1.6,6.4-2.3,4.2-5.4,9.9-4.7,17.2.4,5,2.5,8.5,4.2,11.6,1.9,3.4,3.6,6.3,2.3,9.8-1.1,3-3.5,4.2-5.8,5.4-2.2,1.2-4.4,2.3-5.1,5-1.2,4.3,2.3,8.9,4.8,12.3,1.8,2.4,3.1,4.1,2.3,5-.8.9-2.8,0-5.6-1.4-4.2-2-9.9-4.7-14.5-2.5-2.5,1.2-3.6,3.4-4.6,5.6-1.1,2.2-2.1,4.3-4.6,5.1v-.2c0,0,0,.2,0,.2-2.7.8-4.7-.7-6.9-2.5-1.9-1.4-4-3.1-7.1-3.9-5.8-1.6-10.4,1.1-15.1,3.9-4.7,2.8-10,6-17.4,5.4-7.1-.6-13.2-4.3-15.9-7.4-1.2-1.5-1.8-2.9-1.7-4.1.2-2.4,3-3.6,6-4.9,3.3-1.4,7.1-3,8.1-6.5.8-3-1-5.4-3.1-8.2-2.1-2.9-4.6-6.1-4.4-10.7.2-4,2.2-6.2,4.4-8.6,2.1-2.3,4.2-4.6,4.6-8.8.5-5.4-2.3-9.8-4.3-13-1.5-2.4-2.6-4.1-1.7-5.1,1.1-1.2,3.5,0,6.8,1.6,4.6,2.2,10.8,5.3,16.4,3.2,4.3-1.6,6.2-5.6,7.9-9.2,1.6-3.4,3.2-6.6,6.5-7.2.3,0,.6,0,.9,0ZM375.1,311.9c-1.3,0-2.7-.1-4.1-.5-5.8-1.4-9.2-5.3-12.3-8.8-2.8-3.2-5.2-5.9-8.5-5.4-3.2.5-4.6,3.5-6.3,7-1.7,3.6-3.7,7.7-8.1,9.4-5.7,2.1-12.1-1-16.7-3.2-3.1-1.5-5.5-2.7-6.4-1.7-.7.8.3,2.5,1.7,4.7,2.1,3.3,4.9,7.7,4.4,13.2-.4,4.3-2.6,6.7-4.7,9-2.1,2.3-4.1,4.5-4.3,8.4-.2,4.4,2.2,7.6,4.3,10.4,2.1,2.7,4,5.3,3.1,8.5-1,3.7-4.9,5.3-8.3,6.8-3,1.3-5.6,2.4-5.8,4.5,0,1.1.5,2.5,1.7,3.9,2.6,3.1,8.7,6.7,15.7,7.3,7.2.6,12.3-2.4,17.2-5.3,4.9-2.9,9.4-5.6,15.4-4,3.1.9,5.3,2.5,7.2,4,2.3,1.8,4.1,3.1,6.6,2.4,2.4-.7,3.3-2.7,4.4-4.9,1.1-2.2,2.2-4.5,4.8-5.7,4.7-2.3,10.5.5,14.8,2.5,2.5,1.2,4.6,2.2,5.2,1.5.6-.7-.8-2.5-2.3-4.6-2.6-3.4-6.1-8.1-4.9-12.6.8-2.8,3-4,5.3-5.2,2.2-1.2,4.5-2.4,5.6-5.2,1.3-3.4-.3-6.1-2.2-9.5-1.8-3.1-3.8-6.7-4.3-11.8-.7-7.4,2.5-13.2,4.8-17.4,1.6-2.9,2.7-4.9,1.7-6-1.2-1.2-4.1.4-7.7,2.4-4.6,2.6-10.6,5.9-17,5.9Z" fill="#fff"/>
                <path d="M351.1,296.8c-.3,0-.6,0-.9,0-3.4.6-4.9,3.8-6.5,7.2-1.7,3.5-3.6,7.6-7.9,9.2-1.3.5-2.7.7-4,.7-4.4,0-8.9-2.2-12.4-3.9-2.4-1.2-4.3-2.1-5.6-2.1s-.9.2-1.2.5c-.9,1.1.2,2.8,1.7,5.1,2,3.2,4.8,7.6,4.3,13-.4,4.1-2.5,6.5-4.6,8.8-2.1,2.4-4.2,4.6-4.4,8.6-.2,4.6,2.2,7.8,4.4,10.7,2.1,2.8,3.9,5.2,3.1,8.2-1,3.5-4.7,5.1-8.1,6.5-3,1.3-5.8,2.5-6,4.9-.1,1.2.5,2.7,1.7,4.1,2.7,3.2,8.8,6.9,15.9,7.4.6,0,1.2,0,1.8,0,6.5,0,11.3-2.9,15.6-5.5,3.8-2.3,7.4-4.4,11.7-4.4s2.3.1,3.5.5c3.1.8,5.2,2.5,7.1,3.9,1.9,1.4,3.5,2.7,5.5,2.7s.9,0,1.4-.2v-.2c0,0,0,.2,0,.2,2.5-.7,3.5-2.8,4.6-5.1,1-2.1,2.1-4.3,4.6-5.6,1.2-.6,2.5-.8,3.8-.8,3.7,0,7.6,1.9,10.7,3.4,2,1,3.7,1.8,4.7,1.8s.7-.1.9-.4c.8-.9-.5-2.7-2.3-5-2.5-3.4-6-8-4.8-12.3.7-2.7,2.9-3.8,5.1-5,2.3-1.2,4.6-2.5,5.8-5.4,1.3-3.5-.3-6.4-2.3-9.8-1.8-3.1-3.8-6.6-4.2-11.6-.7-7.3,2.5-13,4.7-17.2,1.6-3,2.8-5.2,1.6-6.4-.4-.4-.8-.5-1.4-.5-1.6,0-3.9,1.3-6.7,2.9-4.5,2.5-10.5,5.9-16.8,5.9s-2.6-.1-4-.5c-5.6-1.4-9.1-5.3-12.1-8.7-2.6-3-4.9-5.6-7.9-5.6h0ZM331.7,314.4c1.4,0,2.8-.2,4.1-.7,4.5-1.7,6.4-5.8,8.1-9.4,1.7-3.5,3.1-6.4,6.3-7,.3,0,.6,0,.9,0,2.9,0,5.1,2.5,7.6,5.4,3,3.5,6.5,7.4,12.3,8.8,1.4.3,2.7.5,4.1.5,6.4,0,12.4-3.3,17-5.9,2.8-1.5,5.1-2.8,6.6-2.8s.9.1,1.2.4c1,1-.1,3.1-1.7,6-2.3,4.2-5.4,10-4.8,17.4.5,5.1,2.5,8.6,4.3,11.8,2,3.4,3.5,6.1,2.2,9.5-1.1,2.8-3.4,4.1-5.6,5.2-2.3,1.2-4.5,2.4-5.3,5.2-1.2,4.5,2.3,9.2,4.9,12.6,1.6,2.1,2.9,3.9,2.3,4.6-.1.2-.4.2-.6.2-.9,0-2.6-.8-4.5-1.7-3.1-1.5-7.1-3.4-10.9-3.4s-2.7.2-3.9.9c-2.6,1.3-3.7,3.5-4.8,5.7-1,2.1-2,4.2-4.4,4.9-.5.1-.9.2-1.3.2-1.9,0-3.4-1.2-5.3-2.6-1.9-1.5-4.1-3.1-7.2-4-1.3-.3-2.5-.5-3.6-.5-4.3,0-8,2.2-11.8,4.5-4.5,2.7-9.1,5.4-15.4,5.4s-1.2,0-1.8,0c-7-.6-13-4.2-15.7-7.3-1.2-1.4-1.7-2.7-1.7-3.9.2-2.2,2.8-3.3,5.8-4.5,3.4-1.5,7.3-3.1,8.3-6.8.9-3.2-1.1-5.8-3.1-8.5-2.1-2.8-4.5-6-4.3-10.4.2-3.9,2.2-6,4.3-8.4,2.1-2.3,4.3-4.7,4.7-9,.5-5.5-2.3-10-4.4-13.2-1.4-2.2-2.4-3.8-1.7-4.7.2-.3.6-.4,1-.4,1.2,0,3.1.9,5.4,2.1,3.5,1.7,8.1,3.9,12.5,3.9h0Z" fill="#efe7da"/>
              </g>
              <g>
                <path d="M353.3,307.5c2.5,0,4.4,2.1,6.6,4.5,2.7,2.9,5.7,6.2,10.6,7,4.6.7,8.5-1.2,11.6-2.7,2.5-1.2,4.5-2.2,5.7-1.1,1.2,1.1.5,3-.5,5.7-1.2,3.1-2.8,7.4-1.7,12.1.9,3.9,3.3,6.5,5.2,8.5,1.8,1.9,3.2,3.5,2.6,5.3-.7,2.1-3.5,2.7-6.4,3.3-2.9.6-5.9,1.2-6.7,3.4-.9,2.3,1,5.1,2.7,7.5,1.4,2.1,2.6,3.9,1.8,5-.7,1-2.5.6-4.8,0-2.8-.7-6.3-1.6-9,.1-1.9,1.2-2.4,3-2.9,4.8-.5,1.7-.9,3.3-2.6,4h0c-2.3,1.1-4.4-.6-7.1-2.6-2.4-1.8-5.2-3.9-8.8-4.7-7.9-1.9-15.9,3.3-21.1,6.7-3.4,2.2-5.9,3.8-7,2.7-.8-.8,0-2.2,1-4.2,1.5-2.7,3.5-6.5,3.1-11.2-.4-4.4-2.6-7.1-4.6-9.5-2-2.4-3.7-4.5-3.2-7.7.5-3.3,3.1-5,5.7-6.7,2.6-1.7,5-3.4,5.3-6.5.4-3.4-2-6.3-4-8.6-1.4-1.7-2.6-3.1-1.9-4,.7-1.1,2.7-.4,5.4.5,3.8,1.3,9.1,3,13.6.9,3.3-1.6,4.7-4.5,5.9-7.1,1.2-2.6,2.2-4.8,4.7-5.2.3,0,.6,0,.9,0ZM372.5,319.5c-.7,0-1.3,0-2-.2-5-.8-8.1-4.1-10.8-7.1-2.4-2.6-4.4-4.8-7.1-4.3-2.3.4-3.3,2.6-4.5,5-1.2,2.7-2.7,5.7-6.1,7.3-4.7,2.2-10,.4-13.9-.9-2.5-.8-4.4-1.5-5-.6-.5.7.6,2,1.9,3.6,1.9,2.2,4.5,5.3,4.1,8.9-.4,3.3-3,5-5.5,6.8-2.5,1.7-5,3.4-5.5,6.5-.5,2.9,1.2,5,3.1,7.4,2,2.5,4.3,5.3,4.7,9.7.4,4.9-1.7,8.7-3.2,11.4-1,1.8-1.7,3.2-1.1,3.8.9.9,3.4-.7,6.6-2.8,4.5-2.9,11.1-7.2,17.9-7.2,1.2,0,2.4.1,3.5.4,3.7.9,6.5,3,8.9,4.8,2.6,2,4.7,3.5,6.8,2.6h0c1.5-.7,1.9-2.1,2.4-3.8.5-1.7,1.1-3.7,3.1-5,2.9-1.8,6.4-.9,9.3-.2,2,.5,3.8,1,4.4.1.7-.9-.5-2.6-1.8-4.6-1.7-2.5-3.6-5.4-2.7-7.9.9-2.4,4-3,7-3.7,2.8-.6,5.5-1.1,6.1-3,.6-1.6-.7-3-2.5-4.9-1.9-2.1-4.3-4.7-5.3-8.7-1.2-4.9.5-9.2,1.7-12.4,1-2.5,1.7-4.3.6-5.3-1-1-2.8,0-5.3,1.1-2.6,1.3-5.9,2.9-9.8,2.9Z" fill="#fff"/>
                <path d="M353.3,307.5c-.3,0-.6,0-.9,0-2.5.5-3.5,2.7-4.7,5.2-1.2,2.6-2.6,5.6-5.9,7.1-1.5.7-3.2,1-4.8,1-3.2,0-6.3-1-8.8-1.9-1.7-.6-3.2-1-4.1-1s-1,.2-1.3.6c-.6,1,.5,2.3,1.9,4,1.9,2.3,4.4,5.2,4,8.6-.3,3.1-2.8,4.7-5.3,6.5-2.5,1.7-5.1,3.5-5.7,6.7-.5,3.1,1.2,5.2,3.2,7.7,2,2.4,4.3,5.2,4.6,9.5.4,4.8-1.6,8.5-3.1,11.2-1.1,2-1.9,3.4-1,4.2.2.2.6.4.9.4,1.3,0,3.4-1.4,6.1-3.1,4.5-2.9,11-7.1,17.7-7.1,1.1,0,2.3.1,3.4.4,3.6.9,6.4,2.9,8.8,4.7,2.1,1.6,3.9,3,5.7,3s1-.1,1.5-.3c1.6-.8,2.1-2.3,2.6-4,.5-1.8,1-3.6,2.9-4.8,1.2-.8,2.5-1,3.8-1,1.8,0,3.6.5,5.2.9,1.3.3,2.4.6,3.2.6s1.2-.2,1.5-.6c.8-1.1-.4-2.9-1.8-5-1.7-2.4-3.5-5.2-2.7-7.5.8-2.2,3.8-2.8,6.7-3.4,2.9-.6,5.7-1.2,6.4-3.3.6-1.8-.8-3.4-2.6-5.3-1.9-2-4.2-4.6-5.2-8.5-1.1-4.8.5-9,1.7-12.1,1-2.6,1.8-4.6.5-5.7-.4-.4-.8-.5-1.4-.5-1.1,0-2.6.7-4.3,1.6-2.6,1.3-5.8,2.9-9.6,2.9s-1.3,0-2-.2c-4.9-.8-7.9-4.1-10.6-7-2.2-2.4-4.1-4.5-6.6-4.5h0ZM337,321.4c1.7,0,3.4-.3,5-1,3.5-1.6,4.9-4.7,6.1-7.3,1.2-2.5,2.1-4.6,4.5-5,.3,0,.5,0,.8,0,2.3,0,4.2,2.1,6.4,4.4,2.7,3,5.8,6.3,10.8,7.1.7.1,1.4.2,2,.2,3.9,0,7.2-1.7,9.8-2.9,1.7-.8,3.1-1.5,4.1-1.5s.8.1,1.1.4c1,1,.3,2.8-.6,5.3-1.2,3.2-2.9,7.5-1.7,12.4,1,4,3.3,6.6,5.3,8.7,1.8,1.9,3.1,3.3,2.5,4.9-.7,1.9-3.3,2.5-6.1,3-3,.6-6.1,1.3-7,3.7-1,2.5,1,5.3,2.7,7.9,1.3,2,2.5,3.7,1.8,4.6-.2.3-.7.5-1.2.5-.8,0-1.9-.3-3.1-.6-1.6-.4-3.5-.9-5.3-.9s-2.8.3-4,1.1c-2,1.3-2.6,3.3-3.1,5-.5,1.7-.9,3.1-2.4,3.8-.4.2-.9.3-1.3.3-1.6,0-3.4-1.3-5.5-2.9-2.5-1.8-5.2-3.9-8.9-4.8-1.2-.3-2.4-.4-3.5-.4-6.8,0-13.3,4.2-17.9,7.2-2.6,1.7-4.7,3-5.9,3s-.5,0-.7-.3c-.6-.6.1-1.9,1.1-3.8,1.5-2.8,3.6-6.6,3.2-11.4-.4-4.5-2.7-7.3-4.7-9.7-1.9-2.4-3.6-4.4-3.1-7.4.5-3.1,3.1-4.8,5.5-6.5,2.5-1.7,5.2-3.5,5.5-6.8.4-3.6-2.2-6.6-4.1-8.9-1.3-1.6-2.4-2.8-1.9-3.6.2-.3.5-.4,1-.4.9,0,2.4.5,4,1,2.6.9,5.7,1.9,9,1.9h0Z" fill="#efe7da"/>
              </g>
              <g>
                <path d="M353.5,315.6c1.6,0,2.7,1.7,4,3.7,1.5,2.3,3.4,5.2,6.8,6.3,3.8,1.2,7.5-.4,10.5-1.8,2.3-1,4-1.8,4.9-.8.9.9,0,2.5-.9,4.5-1.3,2.6-2.9,5.8-1.8,9.1.8,2.5,2.8,4.1,4.4,5.3,1.5,1.2,2.7,2.1,2.4,3.3-.3,1.2-1.7,1.5-3.3,1.9-1.8.4-3.8.9-4.7,2.6-.9,1.6-.3,3.3.2,4.9.5,1.5,1,3,0,4.1-.9,1.1-2.3.9-3.9.7-1.7-.2-3.6-.5-5.2.6-1.7,1.1-2.1,3.1-2.5,4.7-.3,1.5-.6,3-1.9,3.6-1.7.8-3.5-.7-5.7-2.6-2.3-2-5.2-4.5-9.1-4.9-4.7-.5-8.6,2.1-11.7,4.3-2.4,1.6-4.2,2.9-5.5,1.9-1-.8-.7-2.3-.2-4.3.6-2.4,1.3-5.8-.1-9.3-1-2.3-2.4-3.6-3.6-4.6-1.2-1.1-2.2-2-2.1-3.4.2-2,2.3-3.1,4.5-4.2,2.4-1.2,5-2.5,5.9-5.3.7-2.2,0-4.3-.7-6-.6-1.5-1-2.8-.2-3.7.9-.9,2.3-.3,3.9.3,1.8.7,4,1.5,6.1.8,3-1,4.2-4.2,5.4-7,1-2.6,1.9-4.8,3.8-5,0,0,.2,0,.3,0ZM367.1,326.3c-.9,0-1.9-.1-2.8-.4-3.5-1.1-5.4-4.1-7-6.5-1.3-2.1-2.4-3.7-3.9-3.5-1.7.2-2.5,2.3-3.5,4.7-1.2,2.9-2.5,6.2-5.6,7.2-2.3.8-4.6-.1-6.4-.8-1.6-.6-2.8-1.1-3.5-.4-.7.7-.2,1.8.3,3.3.6,1.7,1.4,3.9.7,6.2-.9,2.9-3.7,4.3-6.1,5.5-2.2,1.1-4.1,2-4.3,3.9-.1,1.3.8,2.1,2,3.1,1.2,1.1,2.7,2.4,3.7,4.7,1.5,3.6.7,7,.2,9.5-.4,1.9-.8,3.3,0,3.9,1,.8,2.8-.4,5-1.9,3-2.1,7.2-4.9,11.9-4.3,4,.4,6.9,3,9.3,5,2.1,1.8,3.8,3.2,5.3,2.5,1.1-.5,1.4-1.8,1.7-3.3.3-1.8.7-3.7,2.6-5,1.8-1.2,3.8-.9,5.5-.7,1.5.2,2.8.4,3.6-.5.8-.9.4-2.2-.1-3.7-.5-1.6-1.1-3.5-.2-5.2h.2c0,0-.2,0-.2,0,1-1.9,3.1-2.4,5-2.8,1.5-.4,2.8-.7,3.1-1.6.2-1-.8-1.8-2.2-2.9-1.7-1.3-3.7-2.9-4.6-5.5-1.1-3.5.5-6.7,1.8-9.4.9-1.9,1.7-3.3,1-4.1-.7-.8-2.4,0-4.5.9-2.2,1-5,2.2-7.9,2.2Z" fill="#fff"/>
                <path d="M353.5,315.6c0,0-.2,0-.3,0-1.9.2-2.8,2.4-3.8,5-1.1,2.8-2.4,6-5.4,7-.6.2-1.2.3-1.8.3-1.6,0-3.1-.6-4.4-1.1-1-.4-1.9-.7-2.7-.7s-.9.1-1.2.5c-.8.8-.4,2.2.2,3.7.6,1.7,1.4,3.8.7,6-.9,2.8-3.5,4.1-5.9,5.3-2.2,1.1-4.3,2.1-4.5,4.2-.1,1.5.8,2.4,2.1,3.4,1.2,1,2.6,2.3,3.6,4.6,1.5,3.5.7,6.8.1,9.3-.5,2-.8,3.5.2,4.3.3.2.6.3,1,.3,1.2,0,2.7-1,4.5-2.2,2.9-2,6.4-4.3,10.5-4.3.4,0,.8,0,1.2,0,3.9.4,6.8,2.9,9.1,4.9,1.8,1.5,3.3,2.8,4.7,2.8s.7,0,1-.2c1.3-.6,1.6-2.1,1.9-3.6.3-1.7.7-3.6,2.5-4.7,1-.6,2-.8,3-.8.7,0,1.5,0,2.2.2.6,0,1.3.2,1.8.2.8,0,1.6-.2,2.1-.8.9-1.1.4-2.5,0-4.1-.5-1.7-1.1-3.4-.2-4.9.9-1.7,3-2.2,4.7-2.6,1.6-.4,3-.7,3.3-1.9.3-1.2-.9-2.1-2.4-3.3-1.6-1.3-3.6-2.8-4.4-5.3-1.1-3.3.5-6.5,1.8-9.1,1-2,1.8-3.6.9-4.5-.3-.3-.7-.5-1.1-.5-1,0-2.3.6-3.8,1.2-2.3,1-4.9,2.2-7.7,2.2s-1.8-.1-2.8-.4c-3.4-1.1-5.3-4-6.8-6.3-1.3-2-2.4-3.7-4-3.7h0ZM342.3,328.2c.6,0,1.2,0,1.9-.3,3.1-1,4.4-4.3,5.6-7.2,1-2.4,1.8-4.6,3.5-4.7,0,0,.2,0,.2,0,1.4,0,2.4,1.6,3.7,3.5,1.6,2.4,3.5,5.4,7,6.5.9.3,1.9.4,2.8.4,2.9,0,5.7-1.2,7.9-2.2,1.5-.7,2.7-1.2,3.6-1.2s.7.1.9.3c.7.8,0,2.2-1,4.1-1.3,2.6-2.9,5.9-1.8,9.4.8,2.6,2.9,4.2,4.6,5.5,1.4,1.1,2.5,1.9,2.2,2.9-.2,1-1.5,1.3-3.1,1.6-1.9.5-4,1-5,2.8h.2c0,0-.2,0-.2,0-.9,1.7-.3,3.6.2,5.2.5,1.5.9,2.8.1,3.7-.4.5-1.1.7-1.8.7s-1.1,0-1.8-.2c-.7,0-1.5-.2-2.3-.2s-2.2.2-3.2.9c-1.9,1.2-2.3,3.2-2.6,5-.3,1.5-.6,2.8-1.7,3.3-.3.1-.6.2-.8.2-1.3,0-2.7-1.2-4.4-2.7-2.4-2-5.3-4.6-9.3-5-.4,0-.8,0-1.2,0-4.3,0-8,2.5-10.8,4.4-1.7,1.2-3.2,2.2-4.2,2.2s-.5,0-.8-.2c-.8-.6-.5-2,0-3.9.6-2.5,1.4-5.9-.2-9.5-1-2.4-2.5-3.7-3.7-4.7-1.2-1.1-2.1-1.8-2-3.1.2-1.8,2.1-2.8,4.3-3.9,2.4-1.2,5.2-2.6,6.1-5.5.7-2.3,0-4.5-.7-6.2-.5-1.5-1-2.6-.3-3.3.2-.2.6-.3.9-.3.7,0,1.6.3,2.6.7,1.3.5,2.9,1.1,4.5,1.1h0Z" fill="#efe7da"/>
              </g>
              <g filter="url(#drop-shadow-15)">
                <g>
                  <path d="M423.3,379.7c.5,0,29.2,1.1,29.2,1.1l-5,46.6-41.6,7-57.5-3.4,1.1-23.9s62.2-3.6,62.7-3.6,11.1-23.7,11.1-23.7Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M423.1,379.3h.2c.5,0,28.1,1,29.3,1.1h.4s-5,47.3-5,47.3l-41.9,7h0s-57.9-3.4-57.9-3.4l1.1-24.6h.3c2.5-.2,58.9-3.5,62.5-3.6.9-1.4,7-14.6,11-23.5v-.2ZM452.2,381.1c-9.5-.4-26.4-1-28.6-1.1-.5,1.1-2.9,6.4-5.3,11.6-5.6,12.1-5.7,12.1-6.1,12.1-.7,0-57.4,3.3-62.3,3.6l-1.1,23.2,57.1,3.4,41.3-6.9,4.9-45.9ZM412.2,403s0,0,0,0c0,0,0,0,0,0Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M353.1,446.4h68.2c23.2,0,41.9-18.8,41.9-41.9v-16h-21.3v11c0,14.1-11.4,25.6-25.6,25.6h-63.2v21.3Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M441.5,388.1h22.1v16.4c0,11.3-4.4,21.9-12.4,29.9-8,8-18.6,12.4-29.9,12.4h-68.6v-22.1h63.6c13.9,0,25.2-11.3,25.2-25.2v-11.4ZM462.9,388.8h-20.6v10.7c0,14.3-11.6,25.9-25.9,25.9h-62.8v20.6h67.8c11.1,0,21.5-4.3,29.4-12.2,7.8-7.8,12.2-18.3,12.2-29.4v-15.6Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <polygon points="430.5 317.3 442.5 309.1 441.9 388.4 430.5 388.4 430.5 317.3" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M442.9,308.4l-.6,80.4h-12.2s0-71.7,0-71.7l12.8-8.7ZM441.5,388.1l.6-78.2-11.3,7.7v70.5h10.7Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <polygon points="353.1 425 353.1 413.6 289.5 413.6 281.3 426.1 353.1 425" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M289.3,413.2h64.2v12.2s-72.9,1.1-72.9,1.1l8.6-13.3ZM352.7,414h-63.1l-7.6,11.8,70.7-1.1v-10.7Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M430.5,388.4h-27.7c-1.3,0-2.4-1.1-2.4-2.4v-30.4c0-4.4-.6-8.8-1.8-13h0c-3.2-11.7,5-23.3,17.1-24.2l14.8-1.1v71.1Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M430.8,316.9v71.9h-28c-1.6,0-2.8-1.3-2.8-2.8v-30.4c0-4.4-.6-8.7-1.8-12.9-1.6-5.7-.5-11.7,2.9-16.5,3.4-4.8,8.7-7.8,14.5-8.2l15.2-1.1ZM430.1,388.1v-70.3l-14.4,1.1c-5.6.4-10.7,3.3-14,7.9-3.3,4.6-4.3,10.4-2.7,15.8,1.2,4.3,1.8,8.7,1.8,13.1v30.4c0,1.1.9,2.1,2.1,2.1h27.3Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M430.5,388.4h-74.5c-1.5,0-2.8,1.3-2.8,2.8v22.4h57.8c10.8,0,19.6-8.8,19.6-19.6v-5.6Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M355.9,388.1h74.9v6c0,11-9,20-20,20h-58.1v-22.7c0-1.8,1.4-3.2,3.2-3.2ZM430.1,388.8h-74.2c-1.3,0-2.4,1.1-2.4,2.4v22h57.4c10.6,0,19.2-8.6,19.2-19.2v-5.2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M353.1,413.6v-22.2c0-1.7-1.3-3-3-3h-17.7c-4.6,0-9.2-.6-13.6-1.7l-11.8-3c-8.9-2.3-17.6,4.4-17.6,13.7v16.3h63.7Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M303.5,382.9c1.2,0,2.4.2,3.6.5l11.8,3c4.4,1.1,9,1.7,13.5,1.7h17.7c1.9,0,3.4,1.5,3.4,3.4v22.5h-64.4v-16.6c0-4.5,2-8.7,5.6-11.4,2.6-2,5.7-3,8.8-3ZM352.7,413.2v-21.8c0-1.4-1.2-2.6-2.6-2.6h-17.7c-4.6,0-9.2-.6-13.7-1.7l-11.8-3c-4.1-1.1-8.5-.2-11.8,2.4-3.4,2.6-5.3,6.6-5.3,10.8v15.9h62.9Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M306.1,399.4h21.3v57.6c0,8.3-6.7,15-15,15h-3.6c-1.5,0-2.7-1.2-2.7-2.7v-69.9h0Z" transform="translate(752.5 118.9) rotate(90)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M283.8,424.7h69.7v22.1h-54.9c-10.2,0-18.4-8.3-18.4-18.4s1.6-3.7,3.7-3.7ZM352.7,425.4h-68.9c-1.6,0-2.9,1.3-2.9,2.9,0,9.7,7.9,17.7,17.7,17.7h54.2v-20.6Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M444.6,307.6h3.6c8.3,0,15,6.7,15,15v65.8h-21.3v-78.1c0-1.5,1.2-2.7,2.7-2.7Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M445.2,307.3h.1c10.1,0,18.3,8.2,18.3,18.3v63.2h-22.1v-77.9c0-2,1.6-3.7,3.7-3.7ZM462.9,388.1v-62.5c0-9.7-7.9-17.6-17.6-17.6h-.1c-1.6,0-2.9,1.3-2.9,2.9v77.1h20.6Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M310,425.9c.8.3,1.6.5,2.4.6,1.3.3,2.4.5,3.2.8,1.6.4,2,.6,2.5,1,1.1.9,1.3,1.9,1.7,1.8.3-.1.4-.7.6-1.6.2-.8.5-1.6.9-2.3.6-1,1.5-2.6,2.3-4.3,1.4-3,1.2-3.2,1.8-5.3.5-1.9,0-2.9,1-4.3.7-1,1.4-1.3,1.4-1.8,0-.6-1.1-.9-1.9-1.1-1.6-.4-1.7-.2-2.8-.5-.3,0-.5-.2-.8-.2-1.7-.7-3-1.6-3-1.6-2.6-1.9-12.1-5.8-15.3-6.3,0,0-1.6-.2-3.2-1-.4-.2-.7-.4-.7-.4,0,0-.3-.2-.6-.4-.4-.3-.5-.4-.8-.6,0,0-.4-.3-1-.7-.8-.5-1.7-1-2.1-.6-.4.3,0,1-.3,2.3-.3,1.1-.7,1.2-2.3,3.8-.5.9-.9,1.4-1.3,2.1-.1.3-.6,1.2-1.2,2.9-.9,2.6-.6,2.9-1.4,4.7-.9,2-1,2.3-1,2.3-.5,1-.8,1.3-.7,1.6.2.4,1.2-.1,2.5,0,.8,0,1.3.3,2.5,1,2.1,1.2,3.1,1.8,3.7,2.3,1.4,1.1,5,2.8,13.9,5.8Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M295.9,396.7c.6,0,1.3.4,1.9.8.6.3,1,.7,1,.7,0,0,.2.1.2.2.2.1.3.3.6.4.1,0,.3.2.5.3h0c0,0,.4.2.7.3,1.6.7,3.1.9,3.1.9,3.2.5,12.7,4.4,15.4,6.3,0,0,1.3.9,2.9,1.6.2,0,.4.2.7.2.5.1.8.2,1.1.2.4,0,.8,0,1.7.3.9.2,2.2.5,2.2,1.4,0,.5-.3.8-.7,1.1-.3.2-.5.5-.8.9-.5.8-.6,1.4-.6,2.3,0,.6-.1,1.2-.3,1.9-.1.4-.2.8-.3,1.1-.3,1.2-.4,1.9-1.5,4.2-.8,1.7-1.7,3.3-2.3,4.3-.4.7-.7,1.4-.8,2.2-.2,1-.4,1.7-.9,1.8-.5.2-.8-.3-1.1-.7-.2-.3-.5-.8-1-1.2-.4-.3-.8-.5-2.3-.9-1-.3-2.1-.5-3.2-.8-.8-.2-1.6-.4-2.4-.6-7.6-2.5-12.2-4.5-14.1-5.9-.6-.5-1.6-1.1-3.7-2.3-1.2-.7-1.6-.9-2.3-1-.5,0-1,0-1.4.1-.6.1-1.2.2-1.4-.3-.1-.3,0-.7.3-1.3,0-.2.2-.4.3-.6,0,0,.2-.4,1-2.2.4-.9.5-1.4.7-2.1.1-.6.3-1.3.7-2.6.4-1.1.8-2.2,1.2-2.9.4-.8.7-1.3,1.3-2.1.6-1,1.1-1.7,1.5-2.1.5-.7.7-1,.8-1.5.1-.5.1-1,0-1.3,0-.4,0-.9.3-1.2.2-.2.4-.2.6-.2ZM303.9,401.1c-.3,0-1.8-.3-3.3-1-.4-.2-.7-.3-.7-.4-.2-.1-.4-.2-.6-.4-.3-.2-.4-.3-.6-.5,0,0-.1-.1-.2-.2,0,0-.4-.3-.9-.6-.5-.3-1.4-.9-1.7-.6,0,0,0,.2,0,.6,0,.4,0,.9-.1,1.5-.2.7-.4,1.1-1,1.8-.3.5-.8,1.1-1.4,2.1-.5.8-.9,1.3-1.2,2.1-.4.7-.8,1.7-1.2,2.8-.4,1.2-.6,1.9-.7,2.5-.2.7-.3,1.2-.7,2.2-.8,1.9-1,2.3-1,2.3-.1.2-.2.5-.3.6-.1.2-.2.4-.3.5.1,0,.3,0,.5,0,.4,0,1-.2,1.6-.1.9,0,1.5.4,2.6,1.1,2.1,1.2,3.1,1.9,3.8,2.3,1.8,1.3,6.4,3.3,13.8,5.8h0c.8.3,1.6.5,2.3.6,1.1.2,2.2.5,3.3.8,1.6.4,2.1.7,2.6,1.1.6.5.9,1,1.2,1.3,0,.1.2.2.2.3.1-.2.3-.9.3-1.2.2-.9.5-1.7.9-2.4.6-1,1.5-2.6,2.2-4.3,1.1-2.3,1.2-2.9,1.5-4.1,0-.3.2-.7.3-1.2.2-.7.2-1.3.3-1.8,0-.9.1-1.7.8-2.6.3-.5.7-.8.9-1.1.3-.3.4-.4.4-.6,0-.4-1.1-.6-1.6-.7-.8-.2-1.2-.2-1.6-.3-.4,0-.7,0-1.2-.2-.3,0-.6-.2-.8-.3-.9-.4-1.7-.8-2.2-1.1-.5-.3-.8-.5-.9-.6-2.5-1.8-12-5.7-15.1-6.2h0Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M424.9,339.5c.4.7.8,1.4,1.2,2.1.7,1.1,1.3,2.1,1.7,2.8.8,1.4,1,1.9,1,2.5.2,1.4-.5,2.3,0,2.5.3.1.8-.2,1.5-.7.7-.5,1.5-.8,2.3-1,1.1-.3,2.9-.8,4.7-1.4,3.1-1.1,3.2-1.4,5-2.5,1.7-1,2.1-2,3.8-2.4,1.2-.2,1.9.1,2.3-.3.4-.5-.1-1.4-.6-2.1-.9-1.4-1.1-1.3-1.6-2.3-.2-.3-.3-.5-.4-.7-.7-1.7-1-3.2-1-3.2-.5-3.2-4.5-12.6-6.3-15.2,0,0-1-1.3-1.6-3-.1-.4-.2-.8-.2-.8,0,0,0-.3-.1-.6,0-.4,0-.7-.1-1,0,0,0-.6-.2-1.2-.2-.9-.5-1.9-1.1-1.9-.5,0-.7.7-1.8,1.4-.9.6-1.4.4-4.3,1-1,.2-1.6.3-2.4.6-.3,0-1.3.4-2.9,1.2-2.5,1.2-2.5,1.6-4.3,2.3-2,.8-2.3.9-2.3.9-1,.3-1.5.4-1.6.6-.2.4.9.7,1.8,1.7.5.6.7,1.1,1,2.5.6,2.3.9,3.5,1,4.3.2,1.8,1.5,5.6,5.7,14Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M434.9,308.6s0,0,0,0c.9,0,1.2,1.2,1.4,2.2.1.4.2.9.2,1.1h0s0,.1,0,.1c0,.1,0,.2,0,.3,0,.2,0,.4,0,.7,0,.3.1.5.1.6,0,0,0,.4.2.7.6,1.6,1.6,2.9,1.6,2.9,1.9,2.6,5.9,12.1,6.4,15.4,0,0,.3,1.6.9,3.2,0,.2.2.4.3.7.3.5.4.7.6.9.2.3.5.6,1,1.4.5.8,1.2,1.9.6,2.6-.3.4-.8.3-1.3.3-.4,0-.8,0-1.2,0-.9.2-1.4.6-2.1,1.2-.4.4-.9.8-1.6,1.2-.4.2-.7.4-1,.6-1,.6-1.6,1-4,1.9-1.8.7-3.5,1.2-4.7,1.5-.8.2-1.5.5-2.2,1-.9.6-1.4.9-1.9.7-.5-.2-.4-.7-.3-1.2,0-.4.2-.9.1-1.6,0-.5-.2-.9-1-2.3-.5-.9-1.1-1.9-1.7-2.8-.4-.7-.9-1.4-1.2-2.2h0c-3.6-7.2-5.5-11.8-5.8-14.1-.1-.7-.4-1.9-1-4.2-.3-1.3-.5-1.8-.9-2.3-.4-.4-.8-.7-1.1-.9-.5-.3-1-.7-.7-1.2.1-.3.5-.5,1.1-.6.2,0,.4-.1.7-.2,0,0,.4-.1,2.3-.9.9-.4,1.3-.6,1.9-1,.5-.3,1.2-.7,2.4-1.3,1.1-.5,2.1-1,2.9-1.2.8-.3,1.5-.4,2.4-.6,1.2-.3,2-.4,2.5-.5.9-.1,1.2-.2,1.7-.5.5-.3.8-.6,1-.9.3-.3.6-.6,1-.6ZM435.9,312.2h0c0,0,0-.6-.2-1.1-.1-.6-.4-1.6-.7-1.7,0,0-.2.1-.4.4-.3.3-.6.7-1.2,1-.6.4-1.1.5-2,.6-.6,0-1.3.2-2.5.5-1,.2-1.5.3-2.3.6-.8.2-1.8.7-2.8,1.2-1.2.6-1.8.9-2.3,1.3-.6.4-1,.7-2,1-2,.8-2.3.9-2.3.9-.3,0-.5.2-.7.2-.2,0-.5.1-.6.2,0,0,.3.2.4.3.4.3.8.6,1.2,1,.6.7.8,1.3,1.1,2.6.6,2.3.9,3.5,1,4.3.3,2.2,2.2,6.9,5.7,13.9.4.7.8,1.4,1.2,2.1.6.9,1.2,1.9,1.8,2.8.8,1.4,1,1.9,1.1,2.6,0,.7,0,1.3-.1,1.8,0,.1,0,.3,0,.4.2,0,.8-.5,1.1-.6.7-.5,1.5-.9,2.4-1.1,1.1-.3,2.8-.8,4.6-1.4,2.4-.9,2.9-1.2,3.9-1.8.3-.2.6-.4,1-.6.6-.4,1.1-.7,1.5-1.1.7-.6,1.3-1.1,2.4-1.3.6-.1,1-.1,1.4-.1.4,0,.6,0,.7,0,.2-.3-.4-1.2-.7-1.7-.5-.7-.7-1-.9-1.3-.2-.3-.4-.5-.7-1-.2-.3-.3-.5-.4-.8-.6-1.5-.9-3-1-3.3h0c-.5-3.1-4.4-12.5-6.3-15,0,0-1-1.4-1.7-3,0-.1-.2-.6-.3-.8h0c0-.1,0-.3-.1-.7,0-.3,0-.5-.1-.7,0,0,0-.2,0-.3Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M330.4,405.8c-3.1,0-3.6.4-5.4,0-1.5-.2-1.4-.4-3.6-.8-1.1-.2-2.5-.4-2.9.1-.3.5.4,1.1.7,2.4.3,1.7-.7,2.5-1.2,4.5-.5,2.2-.8,2.3-.7,5.8,0,2,.2,3.9.4,5.1.1.9,0,1.7-.2,2.6-.3.9-.4,1.5,0,1.8.4.3,1.2-.6,3-.9,1.1-.2,1.9,0,3.5.2,1,.2,3.2.9,5.6,1,2.4.1,4.6-.4,5.6-.5,1.6,0,2.4-.2,3.5.2,1.7.5,2.4,1.5,2.9,1.2.3-.2.2-.8,0-1.8-.2-.9-.2-1.7,0-2.6.3-1.2.6-3,.8-5,.4-3.4,0-3.6-.2-5.8-.3-2-1.2-2.9-.7-4.6.4-1.2,1.2-1.8.9-2.3-.3-.6-1.7-.5-2.8-.4-2.2.2-2.2.4-3.6.5-1.8.1-2.3-.3-5.4-.5Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M319.6,404.4c.6,0,1.3.1,1.9.2,1.1.2,1.7.4,2.1.5.4.1.8.2,1.4.3,1,.2,1.6.1,2.4,0,.7,0,1.5-.1,2.9-.1h0c1.3.1,2.2.3,2.9.4.9.1,1.4.2,2.4.2.7,0,1-.1,1.5-.2.5,0,1-.2,2.2-.3,1.3-.1,2.8-.3,3.2.6.3.5,0,.9-.3,1.4-.2.3-.4.7-.6,1.2-.3.9,0,1.6.2,2.4.2.6.4,1.2.5,2,0,.5.1.9.2,1.2.2,1.2.3,2,0,4.7-.2,2-.6,3.9-.8,5.1-.2.8-.2,1.6,0,2.4.2.9.3,1.8-.2,2.1-.4.3-.9,0-1.4-.3-.4-.3-1-.6-1.8-.8-1-.3-1.8-.2-3.3-.1-.3,0-.7,0-1.2.2-1.2.2-2.8.4-4.5.3-1.7,0-3.3-.5-4.4-.7-.5-.1-.9-.2-1.2-.3-1.5-.2-2.3-.4-3.3-.2-.8.2-1.4.4-1.9.7-.5.3-1,.5-1.4.2-.5-.4-.3-1.3,0-2.2.2-.8.3-1.6.2-2.4-.2-1.2-.3-3.1-.4-5.1,0-2.7.1-3.4.5-4.7,0-.3.2-.7.3-1.2.2-.8.5-1.4.7-2,.4-.8.6-1.5.5-2.4-.1-.5-.3-.9-.5-1.2-.2-.5-.5-.9-.2-1.4.3-.4.8-.5,1.4-.5ZM326.3,406.3c-.4,0-.8,0-1.4-.1-.7-.1-1.1-.2-1.5-.3-.5-.1-1-.3-2.1-.5-.7-.1-2.2-.4-2.5,0,0,0,0,.3.2.7.2.4.4.8.5,1.4.2,1.2-.1,2-.5,2.9-.2.5-.5,1.1-.6,1.8-.1.5-.2.9-.3,1.2-.3,1.2-.5,1.8-.4,4.5,0,2,.2,3.8.4,5,.1.9,0,1.8-.2,2.7,0,.3-.4,1.2-.2,1.4,0,0,.4-.1.6-.2.5-.2,1.1-.5,2.1-.7,1.2-.2,2,0,3.6.2.3,0,.7.2,1.2.3,1.1.3,2.7.7,4.3.7,1.6,0,3.2-.2,4.3-.3.5,0,.9-.1,1.3-.2,1.6-.1,2.4-.2,3.6.2.9.3,1.5.6,2,.9.2.1.5.3.6.3.1-.1,0-1.1-.1-1.4-.2-.9-.2-1.8,0-2.7.3-1.2.6-3,.8-5,.3-2.6.2-3.3,0-4.5,0-.4-.1-.7-.2-1.2,0-.7-.3-1.3-.5-1.9-.3-.9-.6-1.7-.3-2.9.2-.6.4-1,.6-1.4.2-.3.3-.5.3-.6-.2-.4-1.7-.3-2.5-.2-1.1.1-1.6.2-2.1.3-.4,0-.8.2-1.5.2-1.1,0-1.7,0-2.6-.2-.7-.1-1.5-.2-2.8-.4-1.3,0-2.1,0-2.8.1-.4,0-.8,0-1.2,0Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M439.6,338.4c-1.8-2.5-2.3-2.7-3.1-4.4-.6-1.3-.5-1.4-1.4-3.4-.5-1.1-1.1-2.3-1.8-2.3-.6,0-.7,1-1.5,1.9-1.2,1.3-2.5.9-4.4,1.7-2,.9-2.4.7-5.1,2.7-1.6,1.2-3.1,2.4-4,3.2-.6.6-1.4,1-2.2,1.3-.9.3-1.5.5-1.5.9,0,.6,1.2.7,2.5,1.9.8.8,1.2,1.5,1.9,2.9.4.9,1.1,3.2,2.4,5.1,1.3,2,3,3.5,3.7,4.3,1,1.2,1.5,1.9,1.9,2.9.6,1.7.2,2.8.7,3,.4.1.8-.3,1.5-1,.6-.6,1.3-1.1,2.1-1.5,1.1-.5,2.8-1.2,4.6-2.2,3-1.7,3-2,4.6-3.5,1.5-1.4,1.7-2.7,3.3-3.3,1.2-.4,2.1,0,2.4-.6.3-.6-.6-1.7-1.3-2.5-1.4-1.7-1.6-1.5-2.5-2.7-1.2-1.4-1.1-2-2.6-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M433.3,328c.9,0,1.5,1.3,2.1,2.5.5,1,.7,1.6.8,2,.1.4.3.7.6,1.4.4.9.8,1.3,1.4,2,.4.5,1,1.2,1.8,2.3h0c.7,1.2,1,2,1.3,2.6.4.8.6,1.3,1.3,2.1.4.5.7.8,1,1.1.3.3.7.7,1.5,1.6.8,1,1.8,2.1,1.4,3-.2.5-.8.5-1.3.6-.4,0-.8,0-1.3.2-.9.3-1.3.9-1.9,1.6-.4.5-.8,1-1.4,1.6-.4.3-.6.6-.9.8-.9.9-1.4,1.4-3.8,2.7-1.7,1-3.5,1.8-4.6,2.2-.8.3-1.4.8-2,1.4-.6.7-1.3,1.3-1.9,1.1-.5-.2-.5-.7-.6-1.3,0-.5,0-1.2-.4-2-.3-1-.8-1.6-1.8-2.8-.2-.2-.5-.5-.8-.9-.8-.9-2-2-2.9-3.5-.9-1.4-1.5-2.9-1.9-4.1-.2-.5-.3-.9-.5-1.1-.7-1.4-1-2.1-1.8-2.8-.6-.6-1.2-.9-1.6-1.2-.5-.3-1-.5-.9-1.1,0-.7.9-1,1.7-1.3.8-.3,1.5-.7,2.1-1.2.9-.8,2.4-2.1,4-3.3,2.2-1.6,2.9-1.9,4.1-2.3.3-.1.7-.3,1.1-.5.8-.3,1.4-.5,2-.6.9-.2,1.6-.3,2.2-1,.4-.4.6-.8.8-1.1.3-.5.5-.9,1.1-.9,0,0,0,0,0,0ZM439.3,338.6c-.8-1.1-1.3-1.7-1.7-2.2-.6-.7-1-1.2-1.5-2.2-.3-.7-.4-1-.6-1.4-.2-.4-.3-.9-.8-2-.3-.7-.9-2-1.4-2s0,0,0,0c-.1,0-.2.2-.4.6-.2.4-.4.8-.9,1.2-.8.9-1.7,1-2.6,1.2-.6.1-1.2.2-1.9.5-.5.2-.8.3-1.2.5-1.1.4-1.8.7-3.9,2.2-1.6,1.2-3,2.4-3.9,3.2-.7.6-1.5,1.1-2.4,1.4-.3.1-1.2.4-1.2.6,0,0,.3.2.6.4.5.3,1.1.6,1.8,1.3.8.8,1.2,1.6,1.9,3,.1.3.3.7.5,1.2.4,1.1,1,2.6,1.9,3.9.9,1.4,2,2.5,2.8,3.4.4.4.7.7.9.9,1,1.2,1.5,1.9,1.9,3,.3.9.4,1.6.4,2.1,0,.3,0,.6.1.7.2,0,.8-.7,1-.9.6-.7,1.4-1.2,2.3-1.6,1.1-.5,2.8-1.2,4.6-2.2,2.3-1.3,2.8-1.7,3.6-2.6.3-.2.5-.5.9-.9.6-.5.9-1,1.3-1.5.6-.8,1.1-1.5,2.2-1.9.6-.2,1.1-.2,1.5-.3.4,0,.6,0,.7-.2.2-.4-.8-1.6-1.3-2.1-.7-.8-1.1-1.2-1.4-1.5-.3-.3-.6-.6-1.1-1.1-.7-.8-1-1.4-1.4-2.2-.3-.6-.7-1.4-1.3-2.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M400.4,406.6c-3.1.5-3.5.9-5.3.9-1.5,0-1.5-.2-3.7-.2-1.2,0-2.5,0-2.8.6-.2.5.6,1,1,2.2.6,1.7-.3,2.6-.4,4.7-.1,2.2-.4,2.4.2,5.8.3,2,.8,3.8,1.1,5,.2.8.3,1.7.2,2.6-.1.9-.2,1.6.2,1.7.5.3,1.1-.7,2.8-1.4,1-.4,1.9-.4,3.4-.4,1,0,3.3.4,5.7.1,2.3-.2,4.5-1.2,5.5-1.4,1.5-.3,2.3-.5,3.4-.4,1.8.2,2.6,1.1,3,.7.3-.3.1-.9-.2-1.7-.3-.8-.4-1.7-.4-2.6,0-1.2.1-3.1,0-5.1-.2-3.4-.5-3.6-1.1-5.7-.6-2-1.7-2.7-1.4-4.4.2-1.3.9-1.9.5-2.4-.4-.6-1.7-.2-2.9,0-2.1.5-2.1.7-3.5,1-1.8.4-2.3,0-5.4.3Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M411.3,404.6c.5,0,.9.1,1.2.5.3.4.1.9,0,1.4-.1.4-.3.8-.4,1.3-.1,1,.2,1.6.6,2.4.3.5.6,1.1.8,1.9.1.5.3.8.4,1.2.4,1.2.6,1.9.8,4.6.1,2,0,3.9,0,5.1,0,.8,0,1.6.4,2.4.3.9.6,1.7.1,2.2-.4.3-.9.1-1.4,0-.5-.2-1.1-.4-1.9-.5-1-.1-1.8,0-3.3.4-.3,0-.7.2-1.2.3-1.1.4-2.7.9-4.4,1-1.7.2-3.3,0-4.5,0-.5,0-.9,0-1.2,0-1.5,0-2.3,0-3.3.4-.8.3-1.3.7-1.7.9-.5.3-.9.6-1.4.4-.6-.3-.5-1.2-.4-2.1.1-.8,0-1.6-.2-2.4-.3-1.2-.8-3-1.2-5-.5-2.7-.4-3.4-.3-4.7,0-.3,0-.7,0-1.2,0-.8.2-1.5.4-2.1.2-.9.4-1.5,0-2.4-.2-.5-.4-.8-.6-1.2-.3-.4-.6-.9-.4-1.4.4-.9,1.9-.8,3.2-.8,1.1,0,1.7,0,2.2.2.4,0,.8,0,1.5,0,1,0,1.6-.1,2.4-.3.7-.2,1.5-.4,2.8-.6h0c1.3,0,2.2,0,2.9,0,.9,0,1.5,0,2.4-.2.7-.2,1-.3,1.4-.4.5-.2,1-.3,2.1-.6.7-.2,1.5-.4,2.1-.4ZM414.5,426.9s0,0,0,0c.1-.1-.2-1-.3-1.3-.3-.9-.5-1.8-.4-2.7,0-1.2.1-3.1,0-5.1-.1-2.6-.3-3.3-.7-4.4-.1-.3-.2-.7-.4-1.2-.2-.7-.5-1.3-.8-1.8-.4-.8-.8-1.6-.7-2.8,0-.6.3-1.1.4-1.5.1-.4.2-.6.2-.7-.3-.4-1.8,0-2.5.2-1.1.3-1.6.4-2,.6-.4.1-.8.3-1.5.4-1.1.2-1.7.2-2.6.2-.7,0-1.5,0-2.8,0-1.3.2-2.1.4-2.8.5-.9.2-1.5.4-2.6.3-.7,0-1.1,0-1.6-.1-.5,0-1-.1-2.1-.1-.7,0-2.3,0-2.5.3,0,.1,0,.3.3.6.2.3.5.7.7,1.3.4,1.1.2,2,0,2.9-.2.6-.3,1.2-.4,1.9,0,.5,0,.9-.1,1.2-.1,1.2-.2,1.9.3,4.5.3,1.9.8,3.8,1.1,4.9.3.9.3,1.8.2,2.7,0,.3-.2,1.3,0,1.4,0,0,.4-.2.6-.3.4-.3,1-.7,1.9-1,1.1-.4,2-.4,3.6-.4h0c.3,0,.8,0,1.3,0,1.2.1,2.8.2,4.3,0,1.6-.2,3.1-.6,4.2-1,.5-.2.9-.3,1.2-.4,1.5-.3,2.4-.5,3.6-.4.9.1,1.6.4,2.1.6.2,0,.5.2.6.2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M417.6,393.9c-.2,3.1.1,3.6-.3,5.4-.3,1.4-.5,1.4-1,3.5-.3,1.1-.6,2.5,0,2.9.5.4,1.1-.4,2.4-.5,1.8-.2,2.5.9,4.4,1.4,2.1.6,2.3.9,5.7,1.1,2,0,3.9,0,5.1,0,.9,0,1.7,0,2.6.4.9.3,1.5.5,1.7.2.4-.4-.5-1.2-.7-3-.1-1.1,0-1.9.4-3.4.2-1,1.1-3.2,1.4-5.5.3-2.3-.1-4.7-.1-5.7,0-1.6,0-2.4.4-3.4.6-1.7,1.6-2.3,1.3-2.8-.2-.3-.8-.3-1.7-.2-.9.1-1.7,0-2.6-.2-1.1-.3-3-.8-5-1.1-3.4-.6-3.6-.3-5.8-.2-2,.1-3,1.1-4.7.4-1.2-.4-1.7-1.3-2.2-1-.6.3-.6,1.6-.6,2.8,0,2.2.2,2.2.3,3.7,0,1.8-.4,2.2-.9,5.3Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M419,381.7c.4,0,.7.2,1,.5.3.2.7.5,1.2.6.9.3,1.6.1,2.4,0,.6-.2,1.2-.3,2.1-.4.5,0,.9,0,1.2-.1,1.2-.1,2-.2,4.7.3,2,.3,3.8.8,5,1.1.8.2,1.6.3,2.4.2.9-.1,1.8-.2,2.1.4.2.4,0,.9-.4,1.4-.3.4-.7,1-.9,1.8-.4,1-.4,1.8-.4,3.3,0,.3,0,.7,0,1.2.1,1.2.3,2.8,0,4.5-.2,1.7-.7,3.2-1,4.4-.1.5-.3.9-.3,1.2-.3,1.5-.5,2.3-.4,3.3.1.8.3,1.4.5,1.9.2.6.4,1,0,1.4-.4.5-1.3.2-2.2-.1-.8-.3-1.6-.4-2.4-.4-1.2,0-3.1.1-5.1,0-2.7-.1-3.4-.4-4.6-.8-.3-.1-.7-.2-1.2-.4-.8-.2-1.4-.5-1.9-.8-.8-.4-1.4-.7-2.4-.6-.5,0-.9.2-1.3.4-.5.2-1,.4-1.4,0-.8-.6-.4-2,0-3.3.3-1.1.5-1.6.6-2.1.1-.4.3-.7.4-1.4.2-1,.2-1.5.2-2.4,0-.7,0-1.5,0-2.9h0c.2-1.4.4-2.2.6-2.9.2-.9.3-1.4.3-2.4,0-.7,0-1,0-1.5,0-.5-.1-1-.2-2.2,0-1.3,0-2.8.8-3.2.1,0,.2,0,.4,0ZM422.2,383.7c-.4,0-.8,0-1.2-.2-.6-.2-1-.5-1.3-.7-.3-.2-.5-.4-.6-.3-.4.2-.4,1.7-.3,2.5,0,1.1,0,1.6.2,2.1,0,.4,0,.8.1,1.6,0,1.1-.1,1.7-.3,2.6-.2.7-.3,1.5-.5,2.8,0,1.3,0,2.1,0,2.8,0,.9,0,1.5-.2,2.6-.2.7-.3,1.1-.4,1.5-.2.4-.3.9-.6,2-.2.7-.6,2.2-.2,2.5,0,0,.3,0,.7-.2.4-.2.8-.3,1.5-.4,1.2-.2,2,.3,2.8.7.5.3,1.1.6,1.8.8.5.1.9.3,1.2.4,1.2.4,1.8.6,4.4.7,2,0,3.8,0,5.1,0,.9,0,1.8,0,2.7.4.3.1,1.2.4,1.3.3,0,0-.1-.4-.2-.6-.2-.5-.5-1.2-.6-2.1-.1-1.2,0-2,.4-3.6,0-.3.2-.7.4-1.2.4-1.1.8-2.6,1-4.2.2-1.6,0-3.2,0-4.4,0-.5,0-1,0-1.3,0-1.6,0-2.5.4-3.6.3-.9.7-1.5,1-1.9.2-.2.3-.5.3-.6-.1-.1-1.1,0-1.4,0-.9.1-1.8,0-2.7-.2-1.2-.3-3-.8-4.9-1.1-2.6-.4-3.2-.4-4.5-.3-.4,0-.8,0-1.2.1-.8,0-1.3.2-1.9.4-.5.1-1.1.3-1.7.3Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M408.1,401.4c-1.9,1.7-2,2.2-3.2,3-1,.7-1.1.5-2.6,1.5-.8.5-1.8,1.1-1.7,1.6,0,.5.9.4,1.7,1.1,1.2.9,1,1.9,1.8,3.4.9,1.6.8,1.9,2.7,3.9,1.1,1.2,2.3,2.3,3,2.9.5.5,1,1,1.3,1.7.3.7.6,1.1.9,1.1.5,0,.4-1,1.3-2.2.5-.7,1.1-1.1,2.2-1.8.7-.5,2.5-1.2,3.9-2.4,1.5-1.2,2.6-2.8,3.2-3.4.9-.9,1.4-1.4,2.2-1.8,1.3-.6,2.3-.4,2.4-.9,0-.3-.3-.6-.9-1.1-.6-.4-1.1-1-1.4-1.6-.5-.8-1.3-2.2-2.3-3.5-1.7-2.3-1.9-2.2-3.3-3.4-1.3-1.1-2.4-1.1-3-2.4-.5-.9-.3-1.7-.7-1.9-.5-.2-1.3.6-1.9,1.3-1.2,1.3-1.1,1.4-1.9,2.3-1,1.1-1.5,1.1-3.6,2.6Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M415.3,394.8c.1,0,.2,0,.3,0,.5.2.5.6.6,1,0,.3.1.6.3,1,.3.7.8,1,1.5,1.3.4.2.9.5,1.4,1,.3.3.5.5.8.6.8.6,1.3,1,2.6,2.8,1,1.3,1.8,2.7,2.3,3.5.3.6.8,1.1,1.3,1.5.6.5,1.2.9,1.1,1.5-.1.4-.6.5-1.1.6-.4,0-.9.2-1.5.5-.8.4-1.2.8-2.1,1.7-.2.2-.4.4-.6.8-.6.8-1.5,1.8-2.6,2.7-1.1.9-2.2,1.5-3.1,2-.4.2-.7.4-.9.5-1.1.7-1.6,1-2.1,1.7-.4.5-.6,1-.8,1.4-.2.5-.4.9-.8.9-.6,0-.9-.7-1.3-1.3-.3-.6-.7-1.1-1.2-1.6-.8-.7-1.9-1.7-3-2.9-1.5-1.6-1.8-2.2-2.3-3.1-.1-.3-.3-.5-.5-.9-.3-.6-.5-1.1-.7-1.6-.2-.7-.4-1.2-1-1.7-.3-.2-.7-.4-.9-.5-.4-.2-.8-.3-.9-.8-.1-.8.9-1.5,1.8-2,.8-.5,1.2-.7,1.6-.9.3-.2.6-.3,1-.6.7-.4,1-.8,1.5-1.3.4-.4.9-.9,1.7-1.7h0c.9-.7,1.5-1.1,2-1.4.6-.4,1-.6,1.6-1.2.4-.4.6-.6.8-.9.2-.3.5-.7,1.2-1.4.6-.7,1.4-1.5,2-1.5ZM426.8,409c0-.1-.6-.5-.8-.7-.6-.5-1.1-1-1.5-1.7-.5-.9-1.3-2.2-2.2-3.5-1.3-1.7-1.7-2.1-2.5-2.7-.2-.2-.5-.4-.8-.7-.5-.4-.9-.6-1.3-.9-.7-.4-1.3-.7-1.8-1.6-.2-.5-.3-.9-.4-1.2,0-.2,0-.5-.1-.5-.3-.1-1.2.9-1.5,1.2-.6.7-.9,1-1.1,1.3-.2.3-.4.5-.8,1-.6.6-1.1.9-1.7,1.3-.5.3-1,.7-1.9,1.3-.8.7-1.3,1.2-1.6,1.6-.5.5-.9.9-1.6,1.4-.5.3-.8.5-1.1.6-.3.2-.7.4-1.5.8-.4.3-1.5.9-1.5,1.3,0,0,.3.2.4.2.3.1.7.3,1.1.6.8.6,1,1.3,1.3,2,.1.5.3.9.6,1.5.2.4.4.6.5.9.5.9.7,1.4,2.2,2.9,1.1,1.2,2.2,2.2,3,2.9.6.5,1,1.1,1.4,1.8.1.2.4.8.5.9,0,0,.1-.3.2-.4.2-.4.4-1,.9-1.6.6-.8,1.2-1.2,2.3-1.9.2-.1.5-.3.9-.5.8-.4,2-1.1,3-1.9,1-.8,1.8-1.8,2.4-2.6.3-.3.5-.6.7-.8.9-.9,1.4-1.4,2.3-1.9.7-.3,1.3-.5,1.7-.5.2,0,.4,0,.5-.1Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
              </g>
              <g>
                <path d="M353.8,323.9c1,0,1.6,1.4,2.3,3.2.9,2.2,1.9,4.9,4.1,5.7,2.7,1,6-1.1,8.4-2.6,1.8-1.1,3.1-1.9,3.7-1.3.6.6-.1,2-1,3.8-1.2,2.3-2.7,5.2-1.6,7,.8,1.3,2.8,1.7,4.4,1.9,1.3.2,2.4.4,2.4,1.1,0,.7-.8,1-1.9,1.6-1.5.7-3.5,1.6-4.3,3.5-.5,1.3-.3,2.4,0,3.4.2,1.1.4,2-.3,2.7h0c-.7.8-1.7.6-2.8.5-1.1-.2-2.2-.3-3.4.3-1.3.8-1.6,2.1-1.9,3.4-.3,1.2-.5,2.3-1.5,2.7-1.3.6-2.5-.5-4.1-1.9-1.6-1.4-3.6-3.2-6.2-3.6-3.8-.6-7.4,1.8-9.9,3.5-1.9,1.3-3.3,2.2-4.1,1.5-.6-.5-.3-1.5.2-2.8.5-1.6,1.3-3.8.5-6-.6-1.6-1.8-2.6-2.7-3.3-.9-.7-1.7-1.3-1.6-2.3.1-1.4,1.9-2,3.9-2.7,2.1-.7,4.5-1.6,5.2-3.5.7-2.1-.8-4.5-2-6.4-.9-1.5-1.6-2.6-1.1-3.2.5-.6,1.6,0,3,.7,1.8.9,4.3,2.2,6.4,1.4,2-.8,2.9-3.1,3.6-5.1.6-1.7,1.2-3.3,2.4-3.4,0,0,.1,0,.2,0ZM361.7,333.5c-.5,0-1.1,0-1.6-.3-2.4-.9-3.5-3.7-4.4-5.9-.7-1.7-1.2-3.1-2.1-3-1,.1-1.5,1.6-2.1,3.2-.8,2.1-1.6,4.5-3.8,5.3-2.3.9-4.9-.4-6.7-1.4-1.2-.6-2.2-1.1-2.6-.8-.4.4.4,1.5,1.1,2.7,1.2,2,2.8,4.5,2,6.7-.7,2.1-3.2,2.9-5.4,3.7-1.9.7-3.5,1.2-3.6,2.4,0,.8.6,1.2,1.4,1.9,1,.8,2.2,1.7,2.9,3.5.9,2.4.1,4.6-.4,6.3-.4,1.1-.7,2-.3,2.4.6.5,1.9-.4,3.6-1.5,2.6-1.8,6.2-4.2,10.2-3.6,2.8.4,4.8,2.2,6.4,3.7,1.5,1.3,2.6,2.3,3.7,1.8.8-.4,1-1.3,1.3-2.5.3-1.3.6-2.8,2.1-3.7,1.2-.7,2.5-.6,3.6-.4,1,.1,1.9.3,2.5-.3h.1c0,.1-.1,0-.1,0,.6-.6.4-1.4.2-2.4-.2-1.1-.4-2.3.1-3.7.8-2.1,3-3,4.5-3.7.9-.4,1.8-.8,1.7-1.2,0-.4-1.1-.6-2.1-.8-1.7-.3-3.7-.6-4.7-2.1-1.2-2,.3-5,1.6-7.4.8-1.5,1.5-2.9,1.1-3.3-.4-.4-1.8.5-3.2,1.4-2,1.3-4.6,2.9-7.1,2.9Z" fill="#fff"/>
                <path d="M353.8,323.9c0,0-.1,0-.2,0-1.2.2-1.8,1.7-2.4,3.4-.7,2-1.6,4.3-3.6,5.1-.5.2-1,.3-1.5.3-1.7,0-3.5-.9-5-1.6-1-.5-1.8-.9-2.4-.9s-.4,0-.6.2c-.5.6.1,1.7,1.1,3.2,1.2,1.9,2.7,4.3,2,6.4-.7,1.9-3.1,2.7-5.2,3.5-2,.7-3.7,1.3-3.9,2.7,0,1,.7,1.6,1.6,2.3.9.7,2.1,1.6,2.7,3.3.8,2.2,0,4.4-.5,6-.4,1.3-.8,2.2-.2,2.8.2.2.4.2.7.2.8,0,1.9-.8,3.4-1.7,2.3-1.6,5.4-3.6,8.7-3.6.4,0,.8,0,1.2,0,2.7.4,4.6,2.2,6.2,3.6,1.3,1.1,2.3,2,3.4,2s.5,0,.7-.2c1-.5,1.2-1.6,1.5-2.7.3-1.3.6-2.6,1.9-3.4.6-.4,1.2-.5,1.9-.5s1,0,1.5.1c.4,0,.9.1,1.3.1.6,0,1.1-.1,1.6-.6.7-.7.5-1.7.3-2.7-.2-1-.4-2.2,0-3.4.8-1.9,2.8-2.9,4.3-3.5,1.2-.5,2-.9,1.9-1.6,0-.7-1.1-.9-2.4-1.1-1.6-.3-3.6-.6-4.4-1.9-1.1-1.8.4-4.7,1.6-7,.9-1.8,1.7-3.2,1-3.8-.1-.1-.3-.2-.5-.2-.7,0-1.8.7-3.1,1.6-2,1.3-4.5,2.9-6.9,2.9s-1,0-1.5-.2c-2.2-.8-3.3-3.5-4.1-5.7-.7-1.8-1.3-3.2-2.3-3.2h0ZM346.2,333.1c.5,0,1.1,0,1.6-.3,2.2-.8,3.1-3.2,3.8-5.3.6-1.6,1.1-3,2.1-3.2,0,0,0,0,.1,0,.8,0,1.3,1.4,2,3,.9,2.2,2,5,4.4,5.9.5.2,1.1.3,1.6.3,2.4,0,5.1-1.7,7.1-2.9,1.2-.8,2.3-1.5,2.9-1.5s.2,0,.3,0c.4.4-.3,1.8-1.1,3.3-1.3,2.4-2.8,5.4-1.6,7.4.9,1.5,3,1.8,4.7,2.1,1.1.2,2.1.3,2.1.8,0,.4-.8.8-1.7,1.2-1.5.7-3.7,1.7-4.5,3.7-.6,1.4-.3,2.6-.1,3.7.2,1,.4,1.8-.2,2.4h.1c0,.1-.1,0-.1,0-.3.4-.8.5-1.3.5s-.8,0-1.2-.1c-.5,0-1-.1-1.5-.1s-1.4.1-2.1.5c-1.4.9-1.8,2.4-2.1,3.7-.2,1.1-.5,2.1-1.3,2.5-.2,0-.4.1-.6.1-.9,0-1.9-.9-3.1-2-1.6-1.4-3.7-3.2-6.4-3.7-.4,0-.9,0-1.3,0-3.5,0-6.6,2.1-8.9,3.7-1.4.9-2.5,1.7-3.2,1.7s-.3,0-.4-.1c-.4-.4-.1-1.3.3-2.4.6-1.6,1.3-3.9.4-6.3-.7-1.7-1.9-2.7-2.9-3.5-.9-.7-1.5-1.2-1.4-1.9.1-1.2,1.7-1.7,3.6-2.4,2.2-.8,4.6-1.6,5.4-3.7.8-2.2-.8-4.7-2-6.7-.8-1.2-1.5-2.3-1.1-2.7,0,0,.2-.1.3-.1.5,0,1.3.4,2.2.9,1.4.7,3.3,1.7,5.1,1.7h0Z" fill="#efe7da"/>
              </g>
              <path d="M353.6,333.2c.7,0,1.2,1,1.7,2.2.6,1.4,1.4,3.1,2.8,3.5,1.7.5,3.8-1,5.1-2,.8-.6,1.1-.8,1.3-.6.2.3-.1.6-1,1.6-1.1,1.2-2.8,3-2.3,4,.4.8,2.2.9,3.5,1,1.2,0,1.9.1,1.9.6,0,.4-.4.5-1,.7-.8.3-1.9.7-2.2,1.6-.3.8.2,1.6.6,2.3.4.7.7,1.2.4,1.7-.3.5-1,.3-1.8,0-.9-.2-1.9-.5-2.8,0-.8.4-1,1.2-1.2,2-.2.7-.4,1.4-1,1.6h0c-.8.3-1.4-.4-2.2-1.2-.8-.8-1.7-1.8-3.1-2.2-2.1-.5-4.2.6-5.8,1.4-1.3.6-2.2,1.1-2.6.6-.3-.4-.1-.9,0-1.5.3-.7.6-1.5.2-2.3-.4-1-1.5-1.3-2.4-1.7-.7-.2-1.2-.4-1.2-.9,0-.5.8-.7,2-.9,1.4-.3,3.4-.7,3.9-1.9.5-1.1-.2-2.6-.8-3.8-.5-1-.9-1.7-.5-2.1.4-.3,1,0,1.7.4.9.5,2.1,1.2,3.1.8,1.1-.4,1.6-1.7,2.1-2.9.4-1,.7-1.9,1.4-2,0,0,0,0,0,0ZM358.8,339.4c-.3,0-.6,0-.8-.1-1.6-.5-2.4-2.3-3-3.7-.5-1.1-.9-2-1.4-2-.5,0-.8.8-1.1,1.7-.4,1.2-1,2.7-2.3,3.1-1.2.4-2.4-.3-3.4-.9-.6-.3-1.1-.6-1.3-.5-.2.2.2,1,.5,1.7.6,1.3,1.4,2.9.8,4.2-.7,1.4-2.7,1.8-4.2,2.1-.7.2-1.7.4-1.7.6,0,.2.5.3,1,.5.9.3,2.1.8,2.6,1.9.4,1,0,1.9-.2,2.6-.2.5-.4.9-.2,1.1.3.3,1.2-.1,2.2-.7,1.6-.8,3.9-2,6.1-1.4,1.5.4,2.5,1.5,3.3,2.3.7.7,1.2,1.3,1.8,1.1h0c.5-.2.6-.7.8-1.4.2-.8.5-1.7,1.3-2.2,1-.6,2.1-.3,3,0,.6.2,1.2.3,1.4,0,.2-.2,0-.7-.4-1.3-.4-.7-.9-1.7-.6-2.6.4-1,1.5-1.5,2.4-1.8.3-.1.7-.3.8-.4,0-.1-1-.2-1.6-.2-1.5-.1-3.3-.2-3.8-1.2-.5-1.2,1.2-3.1,2.4-4.4.3-.3.6-.6.8-.9-.2.1-.4.3-.6.4-1.1.8-2.9,2.1-4.6,2.1Z"/>
              <path d="M353.3,339.2c.3,0,.4.4.5,1,.2.8.4,1.9,1.1,2.2.7.3,1.7-.4,2.4-.9.5-.4.8-.5,1-.3.2.2,0,.4-.3.8-.3.4-.8,1-.7,1.3.1.4,1,.4,1.5.5.6,0,.9,0,.9.4,0,.3-.3.4-.8.5-.3,0-.9.3-1,.5,0,.2.8.6,1.1.7.5.3.8.4.7.6,0,.2-.3.2-.7.1-.5-.1-1.4-.3-2.1.1-.4.2-.5.5-.7.7-.2.3-.3.5-.7.6-.6.1-.9-.4-1.3-.9-.4-.5-.8-1-1.4-1.1-1.1-.3-2.4.7-3.2,1.3-.6.4-.9.7-1.1.5-.2-.2,0-.4.2-.8.2-.4.6-.9.4-1.2-.1-.2-.5-.3-.8-.4-.3,0-.6-.1-.7-.4,0-.3.3-.4.8-.6.6-.2,1.4-.5,1.6-1.1.3-.7-.2-1.6-.5-2.2-.3-.5-.4-.7-.2-.9.2-.2.5,0,1,.6.5.5,1.3,1.3,1.8,1.1.4-.2.6-1.1.7-1.8.1-.7.2-1,.5-1.1,0,0,0,0,0,0ZM355.3,342.8c-.2,0-.3,0-.5,0-.9-.3-1.1-1.6-1.3-2.5,0-.2,0-.4-.1-.6,0,.2,0,.4-.1.6-.1.8-.3,1.9-.9,2.1-.7.2-1.6-.6-2.2-1.2,0,0-.2-.2-.3-.3,0,0,0,.1,0,.2.4.7.9,1.7.6,2.6-.3.7-1.2,1.1-1.8,1.3-.2,0-.4.2-.5.2,0,0,.2,0,.3,0,.4,0,.9.2,1.1.6.3.5-.1,1.1-.4,1.6,0,0,0,.1-.1.2.1,0,.3-.2.4-.3.9-.7,2.2-1.7,3.5-1.4.8.2,1.2.8,1.6,1.3.4.5.7.8,1,.7h0c.2,0,.3-.2.4-.4.2-.3.4-.6.8-.9.7-.4,1.5-.3,2-.3-.6-.3-1.2-.6-1.2-1.1,0-.4.6-.6,1.2-.8.1,0,.3,0,.4-.1-.1,0-.3,0-.4,0-.7,0-1.6-.2-1.8-.7-.2-.5.3-1.2.7-1.7,0,0,0,0,0,0,0,0-.1,0-.2.1-.6.4-1.5,1-2.2,1Z"/>
              <g filter="url(#drop-shadow-16)">
                <circle cx="373.5" cy="360.4" r="12.7" transform="translate(-56.6 651) rotate(-78)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M373.5,347.3c1.4,0,2.7.2,4.1.7,3.3,1.1,6,3.4,7.6,6.5,1.6,3.1,1.9,6.7.8,10-1.1,3.3-3.4,6-6.5,7.6-3.1,1.6-6.7,1.9-10,.8-6.8-2.2-10.6-9.6-8.4-16.5,1.1-3.3,3.4-6,6.5-7.6,1.9-.9,3.9-1.4,5.9-1.4ZM373.5,372.8c1.9,0,3.8-.4,5.6-1.3,2.9-1.5,5.1-4,6.1-7.2,1-3.1.8-6.5-.7-9.4-1.5-2.9-4-5.1-7.2-6.1h0c-6.5-2.1-13.4,1.4-15.5,7.9-2.1,6.5,1.4,13.4,7.9,15.5,1.3.4,2.6.6,3.8.6Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g filter="url(#drop-shadow-17)">
                <circle cx="356.5" cy="341.5" r="17.4" transform="translate(-14.4 667.3) rotate(-85.1)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M356.5,323.8c1.9,0,3.7.3,5.5.9,9.3,3,14.4,13.1,11.3,22.4-1.5,4.5-4.6,8.2-8.8,10.3-4.2,2.1-9,2.5-13.5,1-4.5-1.5-8.2-4.6-10.3-8.8-2.1-4.2-2.5-9-1-13.5,1.5-4.5,4.6-8.2,8.8-10.3,2.5-1.3,5.3-1.9,8-1.9ZM356.6,358.5c2.6,0,5.2-.6,7.7-1.8,4-2.1,7.1-5.6,8.5-9.9,2.9-8.9-2-18.5-10.9-21.4-4.3-1.4-8.9-1.1-13,1-4,2.1-7.1,5.6-8.5,9.9-2.9,8.9,2,18.5,10.9,21.4,1.7.6,3.5.9,5.3.9Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M356.9,335.6c-1.8-.6-3.7.4-4.3,2.2-.6,1.8.4,3.7,2.2,4.3,1.8.6,3.7-.4,4.3-2.2.6-1.8-.4-3.7-2.2-4.3Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M355.8,335.2c.4,0,.8,0,1.1.2h0c.9.3,1.7.9,2.1,1.8.4.9.5,1.8.2,2.8-.3.9-.9,1.7-1.8,2.1-.9.4-1.8.5-2.8.2-1.9-.6-2.9-2.7-2.3-4.6.3-.9.9-1.7,1.8-2.1.5-.3,1.1-.4,1.6-.4ZM355.8,342.1c.5,0,1-.1,1.5-.4.8-.4,1.3-1.1,1.6-1.9.3-.8.2-1.7-.2-2.5-.4-.8-1.1-1.3-1.9-1.6h0c-.8-.3-1.7-.2-2.5.2-.8.4-1.3,1.1-1.6,1.9-.6,1.7.4,3.5,2.1,4.1.3.1.7.2,1,.2Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M351.7,338.3h2c.2,0,.4.2.4.4v.2c0,.2-.2.4-.4.4h-2v-.9h0Z" transform="translate(705.8 677.6) rotate(180)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M352.2,338.2h2.1v1.3h-2.1c-.4,0-.7-.3-.7-.7s.3-.7.7-.7ZM353.9,338.5h-1.8c-.2,0-.3.1-.3.3s.1.3.3.3h1.8v-.6Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M356.6,336.5c-1.3-.4-2.6.3-3,1.5-.4,1.3.3,2.6,1.5,3s2.6-.3,3-1.5c.4-1.3-.3-2.6-1.5-3Z" fill="#fff" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M355.8,336.2c.3,0,.5,0,.8.1.7.2,1.2.7,1.5,1.3.3.6.4,1.3.2,2-.2.7-.7,1.2-1.3,1.5-.6.3-1.3.4-2,.2-.7-.2-1.2-.7-1.5-1.3-.3-.6-.4-1.3-.2-2,.2-.7.7-1.2,1.3-1.5.4-.2.8-.3,1.2-.3ZM355.8,341c.3,0,.7,0,1-.2.5-.3.9-.7,1.1-1.3.4-1.2-.3-2.4-1.4-2.8-1.2-.4-2.4.3-2.8,1.4-.4,1.2.3,2.4,1.4,2.8.2,0,.5.1.7.1Z" fill="#fff" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <g>
                  <rect x="371" y="357.1" width="6.6" height="6.6" rx="2.7" ry="2.7" transform="translate(-84.6 604.1) rotate(-71.9)" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M373.4,356.6c.2,0,.4,0,.7.1l2.6.8c1.1.4,1.7,1.6,1.4,2.7l-.8,2.6c-.2.5-.6,1-1.1,1.2-.5.3-1.1.3-1.6.1l-2.6-.8c-1.1-.4-1.7-1.6-1.4-2.7l.8-2.6c.2-.5.6-1,1.1-1.2.3-.2.6-.2,1-.2ZM377.7,360.1c.3-.9-.2-1.9-1.1-2.2l-2.6-.8c-.4-.1-.9-.1-1.3.1-.4.2-.7.6-.9,1l-.8,2.6c-.3.9.2,1.9,1.1,2.2l2.6.8c.4.1.9.1,1.3-.1.4-.2.7-.6.9-1l.8-2.6Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M373.4,360.9c-.4.3,1,1.8.6,4.1-.1.9-.4,1-.3,1.6.3,1.1,1.6,1.2,3.2,2.4,1.8,1.4,2.1,2.8,2.5,2.6.5-.2.6-3.1-1-4.5-.6-.5-1.4-.9-1.6-1.8-.1-.5,0-.7,0-1.1,0-1.9-2.9-3.7-3.4-3.3Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M373.7,360.6c.3,0,.5.1.8.2,1.1.5,2.6,1.9,2.6,3.3,0,.1,0,.3,0,.4,0,.2,0,.4,0,.7.2.6.6,1,1.1,1.3.2.1.3.3.5.4,1.2,1.1,1.5,3.1,1.3,4.2,0,.4-.2.6-.4.7-.3.1-.5-.2-.8-.6-.4-.5-.9-1.3-1.9-2.1-.6-.5-1.2-.8-1.7-1-.8-.4-1.4-.7-1.6-1.5,0-.4,0-.6,0-.9,0-.2.1-.4.2-.8.2-1.4-.2-2.4-.5-3.1-.2-.5-.4-.9,0-1.1h0c0,0,.2-.1.3-.1ZM379.4,371.5s0-.2.1-.6c.1-.9-.1-2.7-1.2-3.7-.1-.1-.3-.3-.5-.4-.5-.4-1-.8-1.2-1.5,0-.3,0-.6,0-.8,0-.1,0-.2,0-.3,0-1.2-1.4-2.5-2.4-3-.5-.2-.7-.2-.7-.2h0c0,0,.1.4.2.7.3.7.7,1.9.5,3.3,0,.4-.1.6-.2.8,0,.3-.1.4,0,.7.1.6.6.9,1.4,1.2.5.3,1.1.6,1.7,1.1,1,.8,1.6,1.6,2,2.1.1.2.3.4.4.5Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M373.1,360.4c-.2,0-.6.3-1.1.3-.7,0-1-.3-1.4-.4-1.4-.4-2.9,1.1-3,1-.1-.2,1.1-1.6,3-2.3.2,0,1.2-.4,2.3-.2.4,0,1.3.2,1.4.6,0,.4-.8.9-1.1,1.1Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M372.2,358.5c.2,0,.4,0,.6,0,.8,0,1.5.3,1.6.7.1.6-1,1.2-1.2,1.3-.2,0-.6.3-1.2.3-.5,0-.8-.1-1.1-.3-.1,0-.2-.1-.4-.1-.9-.3-1.9.4-2.5.7-.3.2-.5.4-.7.2,0,0,0-.1,0-.2.1-.4,1.3-1.7,3.1-2.4.3-.1,1-.3,1.8-.3ZM371.9,360.5s0,0,0,0c.5,0,.9-.2,1-.3h0c.5-.3,1.1-.7,1-.9,0-.1-.3-.3-1.3-.4-1-.1-1.8,0-2.2.2-1.2.4-2,1.1-2.5,1.6.6-.4,1.6-.9,2.6-.6.1,0,.3.1.4.2.3.1.5.2.9.2Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M372.8,360.3c-.8.4-1.2,1.1-1.5,1.5-.7,1.1-1.1,1.7-1.6,2.9-.4,1-1.2,2.8-.9,3,.2,0,1.1-1,2.9-3.1.5-.6,1.2-1.5,1.8-2.8.2-.5.6-1.4.3-1.7-.2-.2-.7,0-1,.2Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M373.5,359.9c.1,0,.2,0,.3,0,.3.3.2,1-.3,1.9-.6,1.4-1.4,2.3-1.8,2.9-2.6,3.1-2.8,3.3-3.1,3.2-.3-.2-.2-.9.8-3.2.5-1.2.9-1.8,1.6-2.9.2-.3.7-1.1,1.6-1.5h0c.2-.1.6-.3.9-.3ZM368.9,367.5c.4-.3,1.4-1.5,2.6-3,.4-.5,1.2-1.4,1.8-2.8.5-1.2.4-1.4.4-1.5,0,0-.2,0-.7.3v-.2c0,0,0,.2,0,.2-.8.4-1.2,1.1-1.4,1.4-.7,1.1-1.1,1.7-1.6,2.9-.2.6-.9,2.2-1,2.7Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M377.8,353.3c.5-1.1.8-1.4,1.2-2.5.3-1.1.6-2.4.3-2.5-.2,0-.6.9-1.6,2.3-1.6,2.5-2,2.5-2.8,4-1.1,2-1.8,4.6-1.3,4.9.5.3,2-1,2.8-2.4.8-1.3.4-1.7,1.3-3.8Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M379.3,348.1s0,0,.1,0c.6.2-.2,2.7-.2,2.8-.2.7-.4,1.1-.7,1.6-.1.3-.3.6-.5,1-.5,1.1-.6,1.6-.7,2.2-.1.5-.2.9-.6,1.6-.7,1.2-1.9,2.4-2.6,2.6-.2,0-.3,0-.5,0-.8-.5.2-3.4,1.2-5.2.4-.8.7-1.1,1.1-1.6.4-.5.9-1.1,1.7-2.4.3-.5.5-.9.8-1.2.5-.8.7-1.2.9-1.2ZM373.8,359.4s0,0,.1,0c.6-.1,1.7-1.2,2.4-2.4.4-.6.5-1,.6-1.5.1-.5.3-1.2.8-2.2h0c.2-.4.4-.7.5-1,.2-.5.4-.8.7-1.5.3-.9.4-1.8.4-2.2-.1.2-.3.5-.6.9-.2.3-.5.8-.8,1.2-.8,1.3-1.3,1.9-1.7,2.4-.4.5-.7.8-1.1,1.6-1.2,2.1-1.7,4.5-1.3,4.7,0,0,0,0,0,0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M373.7,360.1c-.3.1-.8-.1-1.1-.5-.2-.3-.1-.7-.2-1,0-1.1-1.3-1.2-2.4-2.7-.2-.2-.7-1-1.1-2.1-.4-1-.2-1.4-.4-2.6-.4-2-1.2-2.9-1-3,.3-.2,1.9,1.2,3.2,2.9,1,1.3.6,1.3,2.8,5.3.1.2.6,1.1.6,2.4,0,.4,0,1.1-.4,1.3Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M367.6,348c.8,0,2.6,2.1,3.3,2.9.6.7.7,1.1,1.1,1.9.3.7.7,1.6,1.7,3.5.5,1,.6,1.9.6,2.5,0,.5,0,1.3-.5,1.5h0c-.4.2-1-.1-1.3-.5-.2-.3-.2-.6-.2-.8,0,0,0-.2,0-.3,0-.5-.4-.8-.9-1.2-.4-.3-.9-.7-1.5-1.4-.3-.4-.8-1.1-1.1-2.1-.2-.6-.2-1-.3-1.4,0-.3,0-.7-.2-1.2-.2-1.1-.6-1.8-.8-2.3-.2-.5-.3-.7-.1-.9,0,0,.1,0,.2,0ZM373.6,359.9c.3-.1.3-.8.3-1.2,0-.5,0-1.4-.6-2.3-1-1.9-1.4-2.9-1.7-3.5-.3-.8-.5-1.1-1-1.8-1.2-1.5-2.5-2.6-2.9-2.8,0,.1.1.3.2.4.2.5.6,1.3.8,2.4.1.5.1.9.2,1.2,0,.4,0,.8.3,1.4.3,1,.8,1.7,1.1,2,.5.6,1,1,1.4,1.3.6.4,1,.8,1.1,1.5,0,0,0,.2,0,.3,0,.2,0,.4.1.6.2.3.6.5.8.4h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M375.3,362.3c.3.1.8.3,1.8.2,1.6,0,2.2-.6,3.9-1.1,1.9-.6,3-.5,3-.7,0-.3-1.9,0-4.5-.8-1.7-.5-2.2-1-3.5-.9-.8,0-2.3.5-2.4,1.3-.1.8.8,1.6,1.6,1.9Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M376.5,358.8c.7,0,1.2.2,1.8.4.4.1.8.3,1.3.5,1.5.5,2.8.6,3.6.6.7,0,1,0,1,.4,0,.3-.2.3-.9.4-.5,0-1.3.2-2.3.5-.6.2-1.1.3-1.5.5-.8.3-1.4.5-2.5.6-1,0-1.6-.1-1.9-.3h0c-.7-.3-1.8-1.2-1.7-2.1.2-1,1.7-1.4,2.6-1.5.1,0,.3,0,.4,0ZM383.3,360.7s0,0,0,0c-.8,0-2.1-.2-3.7-.6-.6-.2-1-.3-1.4-.5-.7-.3-1.2-.5-2-.4-.8,0-2.1.5-2.2,1.2-.1.7.8,1.4,1.5,1.7.3.1.8.3,1.7.2,1,0,1.6-.3,2.4-.6.4-.2.9-.3,1.5-.5,1-.3,1.8-.4,2.3-.5Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M373.8,360.3c.4.4,1.5-.2,1.9-.4,1.1-.6,1.7-1.2,1.8-1.3,1.3-1.3,1.8-2.3,2.7-3.6,1.7-2.4,3-3.5,2.8-3.8-.2-.2-.9.2-1.7.6-.8.4-1.8.9-3,2-1.9,1.7-1.4,2.2-2.9,3.2-.3.2-1.1.7-1.7,1.6-.2.4-.4.8-.3,1.2,0,.1,0,.3.2.4Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M383,351c.1,0,.2,0,.3.1.2.3,0,.6-.8,1.5-.5.6-1.2,1.4-2,2.6-.2.3-.4.6-.6.9-.6.9-1.2,1.7-2.1,2.7-.1.1-.8.8-1.9,1.3-.5.3-1.6.8-2.2.4h0c-.2-.1-.2-.3-.2-.5-.1-.4,0-.9.3-1.4.5-.8,1.3-1.4,1.7-1.6h0c.7-.5.9-.9,1.2-1.3.3-.5.7-1,1.6-1.9,1.2-1.1,2.3-1.7,3-2.1.8-.4,1.3-.7,1.6-.7ZM374.3,360.2c.5,0,1.2-.4,1.4-.5,1-.5,1.6-1.2,1.8-1.3.9-1,1.5-1.8,2.1-2.7.2-.3.4-.6.6-.9.8-1.1,1.5-2,2-2.6.3-.4.7-.8.8-1-.2,0-.9.4-1.4.7-.7.4-1.7.9-2.9,2-.9.8-1.3,1.4-1.5,1.8-.3.5-.6.9-1.3,1.4h0c-.3.3-1.1.8-1.5,1.5-.3.4-.3.8-.3,1.1,0,.1,0,.2.1.3,0,0,.2,0,.3,0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
              </g>
              <g filter="url(#drop-shadow-18)">
                <g>
                  <circle cx="886.1" cy="747.9" r="4.7" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M886.1,752.8c-2.7,0-4.8-2.2-4.8-4.8s2.2-4.8,4.8-4.8,4.8,2.2,4.8,4.8-2.2,4.8-4.8,4.8ZM886.1,743.3c-2.5,0-4.6,2.1-4.6,4.6s2.1,4.6,4.6,4.6,4.6-2.1,4.6-4.6-2.1-4.6-4.6-4.6Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <circle cx="886.1" cy="748" r="3.8" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M886.1,751.9c-2.1,0-3.9-1.7-3.9-3.9s1.7-3.9,3.9-3.9,3.9,1.7,3.9,3.9-1.7,3.9-3.9,3.9ZM886.1,744.4c-2,0-3.7,1.6-3.7,3.7s1.6,3.7,3.7,3.7,3.7-1.6,3.7-3.7-1.6-3.7-3.7-3.7Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M902.3,724.2c-.2-.1-.6-.2-1.7-.3-.1,0-.4,0-.5,0,0,0,0,.8,0,.8,0,0-.3-.6-.7-.8l-2,1.4c0,.3.3.6.2.9-.1.4-.6.3-.9.6,0,0,.4,1.6.3,1.6,0,0-1.4-1.8-1.4-1.8,0,0-2.4,1.6-2.2,3,0,.7.5,1.3.4,1.4,0,0-.4-.7-.9-.8l-3.4,4.2c-.1,1.6.6,3.1.2,3.2-.3.1-1.3-1.5-1.3-1.5-.4.1-.6,2-.4,2.7.4,1.4,2.5,2,2.8,2.1,2.8.7,5.6-1.5,5.9-2.6,0,0-2.1-.9-2.1-1,0-.1,3.3.2,3.4.2.2,0,2.6-3.8,2.6-4,0,0-2.3-1-2.3-1,0,0,3,.2,3,.2.7-1.2,1.5-2.1,1.9-4,.4-1.8.1-2.8-.1-3.5-.3-.9-.7-1.1-.9-1.2Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M892.1,741.3c-.4,0-.8,0-1.2-.1,0,0-2.4-.6-2.8-2.2-.2-.7,0-2.7.4-2.8h0s0,0,0,0c.5.7,1,1.5,1.2,1.5,0,0,0-.5,0-.9-.1-.6-.3-1.4-.2-2.2h0s3.5-4.3,3.5-4.3h0c.2,0,.4.3.6.4-.1-.2-.2-.6-.2-.9-.1-1.5,2.2-3,2.3-3.1h0c0,0,0,0,0,0,.3.5.8,1.1,1.1,1.5,0-.3-.2-.9-.3-1.2h0s0,0,0,0c.1-.2.3-.3.5-.3.2,0,.3-.1.3-.2,0-.1,0-.2,0-.4,0-.1-.1-.3-.1-.4h0c0,0,2.1-1.6,2.1-1.6h0c.3.1.4.4.6.6,0-.2,0-.3,0-.5h0s0,0,0,0c.1-.1.4-.1.5,0,0,0,0,0,0,0,1.1,0,1.5.2,1.7.3h0c.4.2.7.7.9,1.3.2.6.5,1.6.1,3.5-.3,1.6-.9,2.5-1.5,3.5-.1.2-.2.4-.3.5h0c0,0,0,0,0,0-.8,0-1.9-.1-2.5-.1.5.2,1.3.5,1.8.8h0s0,.1,0,.1c0,0-2.3,4.1-2.7,4.1,0,0,0,0,0,0-.1,0-2.3-.2-3.1-.2.4.2,1.1.5,1.8.8h0s0,.1,0,.1c-.3,1-2.4,2.8-4.8,2.8ZM888.5,736.4c-.3.3-.4,1.9-.2,2.5.4,1.4,2.7,2,2.7,2,2.7.7,5.3-1.3,5.7-2.4-2.1-.9-2.1-1-2.1-1.1,0-.1,0-.2,1.8,0,.8,0,1.5.1,1.7.2.3-.2,2.2-3.2,2.5-3.8q-2.3-.9-2.3-1.1t3.1,0c.1-.2.2-.3.3-.5.6-1,1.2-1.9,1.5-3.4.4-1.8.1-2.8-.1-3.4-.2-.6-.5-1-.8-1.2h0c-.2-.1-.5-.2-1.6-.3,0,0,0,0-.1,0,0,0-.2,0-.3,0,0,.8,0,.9,0,.9-.1,0-.2,0-.3-.2,0-.2-.3-.4-.5-.6l-1.9,1.4c0,0,0,.2.1.3,0,.2.2.4,0,.6,0,.2-.3.3-.5.4-.1,0-.3.1-.4.2.4,1.6.4,1.6.3,1.7-.1,0-.1,0-1.5-1.8-.4.3-2.2,1.6-2.1,2.8,0,.4.2.8.3,1.1.1.2.2.4,0,.5-.1,0-.2,0-.3-.2-.1-.2-.3-.5-.6-.6l-3.3,4.1c0,.8,0,1.6.2,2.1.1.6.2,1,0,1.1-.2.1-.7-.4-1.4-1.5ZM898.2,737.6s0,0,0,0c0,0,0,0,0,0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M878,721.8c-.3.1-.5.4-.8,1.3-.8,2.4-.7,4.5-.6,5.3,0,.8.2,2.7,1,4.9.6,1.7,1,2.1,1.1,3.4.1,1.1,0,1.7.4,2.4.6,1,1.8,1.4,2.1,1.5.4.1,2,.6,3.1-.4,1-.8,1-2.1,1-2.2,0-.9-.4-1.4-.7-1.8-1.2-2,0-3.3-.5-6.2-.4-2.4-1.6-4.1-2.7-5.5-.7-.9-2.3-3.1-3.3-2.7Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M882.5,740.9c-.4,0-.9,0-1.4-.2-1-.3-1.7-.8-2.1-1.5-.3-.5-.3-.9-.3-1.5,0-.3,0-.6,0-.9,0-.9-.3-1.3-.6-2-.2-.4-.3-.8-.5-1.4-.8-2.3-.9-4.2-1-4.9-.2-1.9,0-3.7.6-5.4.3-.9.5-1.2.9-1.3h0c0,.1,0,0,0,0,1.1-.4,2.7,1.8,3.4,2.8,1.1,1.4,2.3,3.1,2.7,5.6.2,1.3.1,2.3,0,3.1,0,1.1-.2,2,.5,3.1,0,0,0,0,0,.1.2.4.6,1,.6,1.7,0,.1,0,1.4-1,2.3-.5.4-1.1.6-1.8.6ZM878.3,721.8c0,0-.1,0-.2,0-.2,0-.5.3-.8,1.2-.6,1.6-.8,3.4-.6,5.3,0,.7.2,2.6,1,4.9.2.6.4,1,.5,1.4.3.7.5,1.2.6,2.1,0,.4,0,.7,0,.9,0,.5,0,.9.3,1.4.4.7,1.1,1.2,2,1.4,1.3.4,2.3.3,3-.3.9-.8.9-2,.9-2.1,0-.7-.3-1.3-.6-1.6,0,0,0,0,0-.1-.7-1.1-.6-2.1-.5-3.2,0-.8.2-1.8,0-3.1-.4-2.4-1.6-4-2.6-5.5-.6-.8-2-2.7-3-2.7Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M885.5,753.6c-.9-.2-1.1-.4-1.4-.4-.5,0-.8.9-.8.9,0,0,1.4.6,1.4.7,0,0-.8.2-2,.3l-.6,1.6s.6.2.6.2c.2.2-1,1.7-1,1.7,0,0,2.6.8,2.5.9,0,0-2,.2-3.7.5l-.6,4.7,2,.3c0,0,0,.1,0,.1-.5.2-1.8.7-2.1.9l1.6,3.8c.2.4.6.5.9.2,1.3-1.1,3.7-4.8,3.7-4.8-.3-.7-1.6-.9-1.5-1,0-.2,1.5,0,1.5,0,0,0,.2-.9.3-1.6,0,0,.6.4.9.3,0,0,.8-3,.9-4.5,0,0-2.2-.5-2.2-.6,0-.1,2-.3,2-.3.4-.9.8-2.5.2-3.2-.3-.3-1-.4-2.3-.7-.2,0-.3,0-.5-.1Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M882,770.4c0,0-.1,0-.2,0-.2,0-.4-.2-.5-.4l-1.7-3.9h0c.2-.2.9-.5,1.5-.7.2,0,.4-.2.6-.2l-2-.3.6-4.9h0c.8-.1,1.7-.2,2.4-.3.4,0,.7,0,1-.1-.4-.2-1.4-.5-2.3-.8h-.2s.1-.2.1-.2c.6-.7,1-1.4,1-1.6,0,0-.3-.1-.6-.2h-.1s.7-1.8.7-1.8h0c.9,0,1.5-.1,1.8-.2-.2-.1-.7-.3-1.2-.5h0s0-.1,0-.1c0,0,.4-.9.9-1,.2,0,.4,0,.6.1.2,0,.4.2.8.3.1,0,.2,0,.3,0h.2c1.4.3,2,.5,2.4.8.8.8.2,2.5-.1,3.3h0c0,0,0,0,0,0-.7,0-1.4.2-1.8.2.4.1,1.2.3,1.9.5h0s0,.1,0,.1c-.1,1.4-.9,4.4-.9,4.5h0c0,0,0,0,0,0-.3,0-.7-.1-.9-.2,0,.7-.3,1.4-.3,1.5h0c0,0,0,0,0,0-.5,0-1.1,0-1.3,0,0,0,.1,0,.2,0,.4.2,1,.4,1.2.9h0c0,0,0,.1,0,.1,0,.1-2.4,3.6-3.7,4.8-.1.1-.3.2-.5.2ZM879.9,766.1l1.6,3.7c0,.1.2.3.3.3.2,0,.3,0,.4-.1,1.2-1,3.3-4.2,3.6-4.7-.2-.3-.7-.6-1.1-.7-.3-.1-.5-.2-.4-.4,0,0,0-.2,1.6-.1,0-.2.2-.9.3-1.5v-.2s.2,0,.2,0c.1,0,.5.3.8.3.1-.5.8-3,.9-4.3-2.2-.5-2.2-.6-2.2-.7,0-.1,0-.2,2.1-.4.4-.9.8-2.4.2-3-.3-.3-.9-.4-2.2-.7h-.2c-.1,0-.2,0-.4-.1h0c-.4,0-.7-.2-.9-.3-.2,0-.3-.1-.5,0-.3,0-.6.5-.7.8,1.4.6,1.3.6,1.3.7,0,0,0,.3-2,.4l-.5,1.4c.5.1.5.2.6.2.2.2-.3,1-.9,1.7,2.5.8,2.5.9,2.5,1,0,.1,0,.1-1.4.3-.7,0-1.5.2-2.3.3l-.6,4.5,1.9.3c0,0,.1,0,.2.2,0,0,0,.2-.1.2-.2,0-.4.2-.7.3-.5.2-1.1.5-1.4.6Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M880.1,754.5c-.4,0-1.1-.2-1.8,0-1.5.4-1.6,1.7-3.3,3.1-1.1.9-1.3.5-2.4,1.3-2.2,1.5-2.9,3.9-3.6,6.1-.2.7-1.2,3.6-.6,3.9.4.2,1-.6,2.5-2.1,2.6-2.7,3.9-4,5.1-5,2-1.7,3.1-2,4.7-3.9,1.2-1.5,1.3-2.2,1.1-2.6-.3-.5-1-.6-1.7-.7Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M868.4,769.1c0,0-.1,0-.2,0-.3-.2-.6-.7.5-4.1.7-2.1,1.5-4.5,3.7-6.1.6-.4.9-.5,1.2-.6.3-.1.6-.2,1.2-.7.7-.6,1.1-1.1,1.5-1.6.5-.7.9-1.2,1.8-1.5.7-.2,1.5,0,1.9,0h0c.7.1,1.5.3,1.8.8.3.6,0,1.4-1.1,2.7-1.1,1.3-1.9,1.9-2.9,2.6-.5.4-1.1.8-1.8,1.3-1.3,1-2.6,2.4-5.1,5l-.5.5c-1.1,1.1-1.7,1.7-2,1.7ZM879.1,754.5c-.3,0-.5,0-.8,0-.8.2-1.2.7-1.7,1.4-.4.5-.8,1.1-1.6,1.7-.6.5-.9.6-1.3.7-.3.1-.6.2-1.2.6-2.1,1.5-2.9,3.9-3.6,6-1,3.2-.8,3.7-.6,3.8.2.1.9-.5,1.9-1.6l.5-.5c2.6-2.7,3.9-4,5.2-5,.7-.6,1.3-1,1.8-1.3,1-.7,1.9-1.3,2.9-2.6,1-1.2,1.3-2,1.1-2.5-.2-.4-1-.5-1.6-.7h0c0-.1,0,0,0,0-.2,0-.6,0-1,0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M877.8,746.6c0-1.3,0-1.9-.3-2.4-.7-.9-2.1-.2-3.5-1.2-.1,0-.6-.3-.7-.3,0,0,0,2.8-.1,2.8-.1,0-1.2-3.6-1.2-3.6-.7-.4-.9-.5-4.2-1-2.8-.5-3.7-.2-3.7-.2l.6,3.5s0,0,0,0l-1.7-3.1s-3.2.4-4.1,1.8c0,0-1.1,1.8-.4,3.6.6,1.6,3.8,2.5,3.8,2.5,0-.3,1.4-1.7,1.6-1.6.1,0-.7,2.1-.7,2.1.3.4.9,1.1,6.3,1.4,3,.1,4.2,0,5.5-.5,1.8-.7,2.3-1.6,2.4-1.9.3-.6.3-1.3.4-2.1Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M871.7,751.2c-.6,0-1.3,0-2.1,0-5.6-.3-6.1-1-6.4-1.4h0s0-.1,0-.1c.3-.8.6-1.6.7-1.9-.3.3-1.3,1.3-1.4,1.5h0c0,0,0,0,0,0-.1,0-3.2-.9-3.8-2.6-.8-1.9.3-3.7.4-3.7.9-1.5,4-1.8,4.2-1.9h0s1.5,2.7,1.5,2.7l-.6-3.2h0s.9-.3,3.7.2c3.4.5,3.6.7,4.3,1.1h0s0,0,0,0c.3,1.1.8,2.8,1.1,3.4,0-.5,0-1.5,0-2.5h0c0,0,0-.1,0-.1.2,0,.8.2.8.3.7.5,1.4.5,2,.6.6,0,1.1.1,1.5.6.4.5.4,1.1.3,2.4h0c0,.8,0,1.4-.4,2.1-.2.4-.8,1.3-2.5,1.9-.9.4-1.8.5-3.4.5ZM863.3,749.6c.3.4,1,1.1,6.2,1.3,3.1.1,4.2,0,5.4-.5,1.6-.6,2.1-1.4,2.4-1.8.3-.6.3-1.2.4-2h0c0-1.3,0-1.9-.2-2.3-.3-.4-.8-.4-1.4-.5-.6,0-1.3-.1-2.1-.6-.1,0-.4-.2-.6-.3,0,2.7-.1,2.8-.2,2.8-.1,0-.2,0-1.3-3.7-.6-.4-.9-.5-4.2-1-2.3-.4-3.2-.3-3.5-.2l.6,3.4c0,0,0,.1,0,.2,0,0-.1,0-.2,0l-1.6-3c-.5,0-3.1.5-3.9,1.7,0,0-1.1,1.7-.3,3.5.6,1.4,3.1,2.3,3.6,2.4.2-.4,1.3-1.5,1.5-1.6,0,0,0,0,.1,0,0,0,.2.1-.6,2.2Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M877.7,736c-1.2-.9-2.3-1.4-4.5-2.5-2.6-1.3-3-1.3-3.4-1.1-1,.6-.5,3.1-.5,3.1.4.3,1.2,0,1.3.1,0,.2-.3.5-1,1,0,0,.7,2.2,1.7,2.8,0,0,1.7-.8,1.7-.7,0,.1-.5.8-1.2,1.6,0,0,2,3.1,3.4,4,1.5,1,4.4,2.7,5.3,1.8.4-.4.1-.9.7-1.5.6-.6,1.2-.4,1.5-.8.8-.9-.8-3.6-2.2-5.3-1.1-1.3-2.1-2.1-2.8-2.6Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M879.7,746.5c-1.6,0-4.3-1.8-4.6-2.1-1.4-.9-3.3-3.9-3.4-4.1h0c0,0,0-.1,0-.1.7-.6,1.1-1.1,1.2-1.4-.3,0-1,.4-1.6.7h0s0,0,0,0c-1-.6-1.7-2.8-1.7-2.9h0c0,0,.3-.3.3-.3.4-.3.8-.6.8-.7,0,0-.2,0-.3,0-.3,0-.7,0-1-.1h0s0,0,0,0c0-.1-.5-2.7.6-3.3.4-.2.9-.2,3.5,1.1,2.2,1.1,3.3,1.6,4.5,2.5.6.5,1.7,1.3,2.8,2.6,1.3,1.6,3,4.4,2.2,5.4-.2.2-.4.3-.6.3-.3,0-.6.1-.9.4-.3.3-.4.6-.4.9,0,.2-.1.5-.3.6-.2.2-.5.3-.8.3ZM871.9,740.4c.3.5,2.1,3.1,3.3,3.9,2,1.4,4.5,2.5,5.2,1.8.1-.1.2-.3.2-.5,0-.3.1-.6.5-1,.3-.4.7-.4,1-.5.2,0,.4,0,.5-.3.7-.8-.9-3.5-2.2-5.2-1.1-1.3-2.2-2.1-2.8-2.6h0c-1.2-.9-2.3-1.4-4.5-2.5-2.6-1.3-3-1.3-3.3-1.1-.9.5-.6,2.6-.5,3,.2.1.5,0,.8,0,.2,0,.5,0,.5.1.1.3-.2.5-.8,1h-.1c.1.5.8,2.2,1.6,2.8,1.7-.8,1.8-.7,1.8-.6.2.3-.9,1.3-1.2,1.6Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M894.9,747.8c-.6.7-.4,1.2-1,2.1-.6.8-1.1.7-1.4,1.2-.7,1.4,2.5,4.4,5.2,6.3,1.5,1.1,6.2,2.4,6.2,2.4.2-1,.7-2.4.9-2.4.2,0,.4,1.2.5,2.5,0,0,3.7.8,5-.8.6-.7.8-1.5.8-1.9.5-2.8-3.3-6.4-3.3-6.4-1.2,1-2.7,2.4-2.7,2.4,0,0,.3-1.8,1.5-3.3,0,0-1.4-1.2-4.2-2.1-3-1-4.6-1.1-6-.8-.5.1-1.1.3-1.6.8Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M907.4,760.2c-1.1,0-1.9-.2-2-.2h0s0,0,0,0c-.1-1.3-.3-2.2-.4-2.4-.2.2-.5,1.3-.8,2.3h0c0,.1-.1,0-.1,0-.2,0-4.7-1.4-6.2-2.4-2.1-1.5-6-4.8-5.2-6.4.1-.2.3-.4.5-.5.2-.1.5-.3.8-.7.3-.4.4-.7.5-1.1.1-.3.2-.7.5-1h0c.5-.6,1.2-.7,1.7-.9,1.5-.4,3.2-.2,6,.8,2.8.9,4.3,2.1,4.3,2.1h0c0,0,0,.1,0,.1-1,1.2-1.4,2.6-1.5,3.1.2-.2.5-.5.8-.7.5-.5,1.1-1,1.7-1.5h0c0,0,0,0,0,0,.2.2,3.8,3.7,3.3,6.5,0,.4-.2,1.2-.9,2-.7.8-2,1-3.1,1ZM905.5,759.8c.5,0,3.7.6,4.8-.7.6-.7.7-1.5.8-1.8.4-2.5-2.7-5.7-3.2-6.2-.6.5-1.1,1-1.6,1.4-1,.9-1.1,1-1.2.9-.2-.2.4-2,1.4-3.4-.3-.3-1.7-1.3-4.1-2-3.2-1.1-4.7-1.1-5.9-.8-.5.1-1.1.3-1.6.8h0c0,0,0,0,0,0-.3.3-.4.6-.5.9,0,.3-.2.7-.5,1.1-.3.5-.7.7-.9.8-.2.1-.3.2-.4.4-.6,1.2,2.2,4.1,5.2,6.1,1.4,1,5.4,2.2,6.1,2.4.1-.5.6-2.4,1-2.4.3,0,.5,1.6.6,2.5Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M895.4,742c-1.5.4-3.1.8-3.3,1.7-.1.6.5,1,.5,2.2,0,.8-.3,1-.2,1.4.2,1.2,3.1,1.6,3.9,1.7,5.5.7,9.7-1.6,11.9-2.8,2.7-1.5,2.8-2.2,2.7-2.5-.1-.9-1.8-1.3-3.4-1.7-3.1-.8-5.7-.7-8.2-.5-.6,0-2.1.1-3.9.6Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M898.3,749.2c-.6,0-1.3,0-2-.1-1.1-.1-3.7-.6-4-1.8,0-.2,0-.4,0-.6,0-.2.1-.4.1-.8,0-.6-.2-1-.3-1.3-.1-.3-.3-.6-.2-.9.2-1,1.9-1.4,3.4-1.8,1.9-.5,3.4-.6,3.9-.6,2.4-.1,5.1-.3,8.2.6,1.7.4,3.4.9,3.5,1.8,0,.2.1,1-2.8,2.6-1.7.9-5.3,2.9-10,2.9ZM895.4,742h0c-1.4.5-3,.9-3.2,1.7,0,.3,0,.5.2.7.2.3.4.7.4,1.4,0,.4,0,.7-.1.9,0,.2,0,.3,0,.5.2,1.1,2.9,1.5,3.8,1.6,5.5.7,9.9-1.8,11.8-2.8,1.3-.7,2.8-1.7,2.7-2.4-.1-.8-1.8-1.2-3.4-1.6-3.2-.8-5.7-.7-8.2-.5-.5,0-2,.1-3.9.6h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M891.1,755.2c-1.2.2-1.5,0-1.9.2-.9.6.3,3.7.9,5.4.7,1.7,1.9,3.8,4.4,7.9.8,1.3,1.4,2.3,2,2.2.8-.1,1-2,1.1-2.5.3-2.2-.3-3.6-1.8-8-1.2-3.5-1.9-5.7-3-5.8-.4,0-.6.3-1.7.5Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M896.4,771.1c-.6,0-1.2-1-2-2.3-2.4-4-3.7-6.2-4.4-7.9-1-2.5-1.7-4.9-.9-5.5.2-.1.4-.1.7-.1.3,0,.7,0,1.2-.1.6-.1.9-.3,1.1-.4.2,0,.4-.2.6-.2,1.1,0,1.7,1.9,2.8,5.1l.2.7c.2.4.3.9.4,1.3,1.2,3.5,1.7,4.8,1.4,6.8-.2,1.6-.6,2.5-1.2,2.6,0,0,0,0-.1,0ZM889.7,755.5c-.2,0-.3,0-.4,0-.9.6.4,3.9.9,5.3.7,1.7,2,3.9,4.4,7.9.7,1.2,1.3,2.2,1.9,2.1.3,0,.7-.4,1-2.4.3-2-.2-3.2-1.4-6.7-.1-.4-.3-.8-.4-1.3l-.2-.7c-1-3-1.7-5-2.6-5-.2,0-.3,0-.5.2-.2.1-.6.3-1.2.4-.6.1-1,.1-1.3.1,0,0-.1,0-.2,0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <path d="M886.3,748.1s0,0-.1,0c0-.3-.3-.7-.6-1.1-.4-.7-.8-1.4-1-2.1-1.1-3.2-2.6-7.3-3.8-11.8v-.4c-.8-2.5-2-6.8-2.7-10.8,0,0,0-.1,0-.1,0,0,.1,0,.1,0,.7,4,1.9,8.3,2.6,10.8v.4c1.4,4.5,2.8,8.6,3.9,11.8.2.7.6,1.4,1,2.1.3.5.5.9.6,1.2,0,0,0,.1,0,.1,0,0,0,0,0,0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M886.3,748.1s0,0,0,0c0,0,0,0,0-.1,1-2.8,2.4-5.5,4.3-8.5,1.1-1.7,2.1-2.9,3.4-4.4.7-.9,1.6-1.9,2.6-3.2,2.1-2.7,4.4-5.7,5.8-7.7,0,0,.1,0,.1,0s0,.1,0,.1c-1.4,2-3.7,5-5.8,7.7-1,1.3-1.9,2.3-2.6,3.2-1.3,1.6-2.2,2.7-3.4,4.4-1.9,2.9-3.3,5.7-4.3,8.4,0,0,0,0-.1,0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M886.3,748.1s0,0,0,0c-3.4-2.1-7.7-5.1-11.3-9-1.7-1.9-3.6-4.3-5.2-6.7,0,0,0-.1,0-.1,0,0,.1,0,.1,0,1.5,2.3,3.4,4.7,5.2,6.6,3.6,4,7.9,6.9,11.3,9,0,0,0,0,0,.1,0,0,0,0,0,0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M886.3,748.1s0,0,0,0c-1.6-.2-3.5-.3-5.4-.5-4-.4-8.1-.8-11.6-1.2-2.9-.4-6.1-.8-9.1-1.3l-1.8-.3c0,0,0,0,0-.1,0,0,0,0,.1,0l1.8.3c3,.4,6.2.9,9.1,1.3,3.5.4,7.6.8,11.6,1.2,1.9.2,3.7.4,5.4.5,0,0,.1,0,0,.1,0,0,0,0-.1,0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M868.3,769s0,0,0,0c0,0,0,0,0-.1,1.4-2.9,3.7-6.4,5-7.7.8-.8,1.3-1.1,2.1-1.7.8-.6,2.1-1.5,4.5-3.5,1.9-1.6,3.6-3,5.1-5.5.3-.5.7-1.3.9-1.9.1-.3.2-.5.3-.6,0,0,0,0,.1,0,0,0,0,0,0,.1,0,.1-.2.3-.3.6-.3.6-.6,1.5-.9,1.9-1.5,2.4-3.3,3.9-5.2,5.5-2.4,2-3.7,2.9-4.5,3.5-.8.6-1.3.9-2.1,1.7-1.4,1.3-3.6,4.8-5,7.7,0,0,0,0,0,0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M881.9,770.4s0,0,0,0c0,0,0,0,0-.1.1-.4.2-1,.3-1.7.3-1.3.6-3,1-4.5.5-1.7.9-2.8,1.2-3.8.2-.7.4-1.2.6-1.8.5-1.8,1-5.3,1.3-10.3,0,0,0-.1.1-.1,0,0,.1,0,.1.1-.3,5.1-.7,8.6-1.3,10.4-.2.6-.4,1.2-.6,1.8-.3,1-.7,2.1-1.2,3.8-.4,1.5-.8,3.2-1,4.5-.1.7-.2,1.3-.4,1.7,0,0,0,0-.1,0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M886.3,748.1s0,0,0,0c0,0,0-.1,0-.1.7-.4,3.1-1.5,4.7-2,2.9-.9,5.1-1,7.7-1.1,1.6,0,3.5-.1,5.7-.4.4,0,.9,0,1.6-.1,1.5-.1,3.4-.2,5.1-.7,0,0,.1,0,.1,0,0,0,0,.1,0,.1-1.8.5-3.7.6-5.1.7-.6,0-1.1,0-1.5.1-2.3.3-4.1.3-5.7.4-2.6,0-4.8.1-7.6,1.1-1.6.5-3.9,1.6-4.6,2,0,0,0,0,0,0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M910.9,758.6s0,0,0,0c-4.9-2.7-7.8-4.2-10-5.4-1.2-.7-2.3-1.2-3.4-1.8-.2,0-.4-.2-.7-.4-.9-.6-2.5-1.5-4.2-2.2-2.1-.8-5-.9-6.3-.7,0,0-.1,0-.1,0,0,0,0-.1,0-.1,1.3-.2,4.3,0,6.4.7,1.8.7,3.3,1.6,4.2,2.2.3.2.5.3.7.4,1.1.6,2.2,1.2,3.4,1.8,2.3,1.2,5.1,2.7,10,5.4,0,0,0,0,0,.1,0,0,0,0,0,0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M896.5,771.1c0,0-.1,0-.1-.1,0,0,0-.2,0-.3,0-.4,0-1.1,0-1.6-.3-1.9-1.2-3.2-1.5-3.7h0c-.9-1.5-1.3-2.8-1.7-4.4-.4-1.4-.9-3-1.8-4.9-.5-1.1-2.4-5-5.1-8,0,0,0-.1,0-.2,0,0,.1,0,.2,0,2.7,3.1,4.6,7,5.1,8.1.9,2,1.4,3.6,1.8,5,.4,1.5.8,2.8,1.7,4.3h0c.3.5,1.2,1.9,1.5,3.8,0,.5,0,1.2,0,1.6,0,.1,0,.2,0,.3,0,0,0,.1-.1.1h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <g>
                  <path d="M882.9,749c-.5-.9-1-1.6-1.7-2-1.2-.7-2.3.1-5.4,1-3.6,1-4,.4-5.7,1.4-1.3.8-3.5,2.5-3.1,3.9.4,1.8,4.8,2.1,7,2,1,0,3-.7,7-2.1,1.5-.5,2.6-.9,2.8-1.8.2-.7-.3-1.5-.9-2.5Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M873.3,755.5c-2.1,0-6-.4-6.5-2.1-.4-1.5,1.9-3.3,3.2-4,.9-.6,1.5-.6,2.4-.8.7-.1,1.7-.2,3.3-.7.9-.3,1.7-.5,2.3-.7,1.5-.5,2.3-.8,3.2-.3.7.4,1.2,1.1,1.8,2h0s0,0,0,0h0c.6.9,1.1,1.7.9,2.5-.3,1-1.5,1.4-2.9,1.9-4.1,1.4-6.1,2-7.1,2.1-.2,0-.4,0-.6,0ZM880.2,746.9c-.6,0-1.2.2-2.1.5-.6.2-1.4.5-2.3.7-1.6.4-2.6.6-3.3.7-.9.1-1.5.2-2.4.7-1.4.8-3.4,2.5-3.1,3.8.4,1.6,4.4,2.1,6.9,2,.9,0,3-.7,7-2.1,1.6-.5,2.5-.9,2.7-1.7.2-.7-.3-1.4-.9-2.4h0c0,0,0,0,0,0-.5-.9-1-1.6-1.7-2-.3-.2-.6-.2-.9-.2Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <path d="M866.9,753.5c0,0-.1,0-.1-.1,0,0,0-.1.1-.1,1.8,0,4.1-.6,6.5-1.2.7-.2,1.4-.4,2.2-.5,4.6-1.1,8.5-2.4,10.7-3.5,0,0,.1,0,.1,0,0,0,0,.1,0,.1-2.2,1.2-6.1,2.5-10.7,3.6-.7.2-1.5.4-2.2.5-2.4.6-4.7,1.2-6.5,1.2h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <g>
                  <path d="M890.2,750.7c-.6.8-1.5.5-1.9,1-1,1.3,3.5,6.4,4.1,7,3.1,3.5,6.3,7.1,7.8,6.4,1-.6.7-3.1.6-3.7-.3-2.2-1.2-2.6-3.9-6.8-1.1-1.7-2.9-4.6-4.7-5.3-.2,0-.8-.3-1.3,0-.5.3-.3.9-.7,1.5Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M899.7,765.3c-1.7,0-4.6-3.3-7.4-6.5-1.2-1.4-5.1-5.9-4.1-7.2.2-.2.5-.3.8-.4.4,0,.8-.2,1.1-.6h0c0,0,0,0,0,0,.2-.3.2-.5.3-.7,0-.3.1-.6.4-.8.5-.3,1.1,0,1.4,0,1.8.6,3.5,3.3,4.6,5l.2.3c.9,1.4,1.6,2.3,2.1,3.1,1.1,1.6,1.6,2.3,1.8,3.8.3,2.2,0,3.4-.7,3.8-.1,0-.3.1-.5.1ZM891.4,749.2c-.2,0-.3,0-.5.1-.2.1-.3.4-.3.6,0,.2-.1.5-.3.8-.3.5-.8.6-1.2.7-.3,0-.5.1-.7.3-.7.9,1.7,4.3,4.1,6.9,2.9,3.3,6.3,7.1,7.6,6.3.4-.2.9-1.1.5-3.6-.2-1.4-.7-2.1-1.8-3.7-.6-.8-1.2-1.7-2.1-3.1l-.2-.3c-1-1.6-2.8-4.3-4.5-4.9-.1,0-.4-.1-.7-.1Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <path d="M900,765.2s0,0,0,0c-2-4.1-4.7-8.9-8.7-12.8-1.5-1.5-3.6-3.1-5-4.1,0,0,0-.1,0-.2,0,0,.1,0,.2,0,1.4,1.1,3.5,2.7,5.1,4.2,4.1,4,6.7,8.7,8.8,12.9,0,0,0,.1,0,.1,0,0,0,0,0,0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <g>
                  <path d="M771.3,861.9v141.9c0,5.5-2.9,10.7-7.6,13.5-5.8,3.5-15.8,6.8-32.8,6.8s-26.9-3.4-32.8-6.9c-4.8-2.8-7.7-8-7.7-13.6v-141.6c0-2.5.5-5,1.4-7.3.7,0,3.9-.6,8-4.9,4.6-4.9,10.2-4.4,10.2-4.4l-1.7-5.1s-.1,0-.3,0c1.3-.6,2.6-1.2,4.1-1.7l.9,3.9s8.7-2.1,18.1-2.2c9.4.1,18.1,2.2,18.1,2.2l1-4.1c1.7.7,3.3,1.4,4.8,2.1-1.1-.2-1.8-.2-1.8-.2l-1.7,5.1s5.6-.5,10.2,4.4c4.6,4.9,8.1,4.9,8.4,5.1,1.1,2.5,1.2,4.2,1.2,6.9Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M730.8,1024.5c-14.1,0-25.2-2.3-32.9-6.9-4.8-2.9-7.8-8.2-7.8-13.9v-141.6c0-2.5.5-5,1.4-7.4,0-.1.1-.2.3-.2.6,0,3.7-.5,7.8-4.8,4-4.2,8.6-4.6,10-4.6l-1.5-4.5h-.1c-.1,0-.3,0-.3-.2s0-.3.2-.4c1.3-.6,2.7-1.2,4.1-1.7,0,0,.2,0,.2,0,0,0,.1.1.2.2l.9,3.6c1.6-.4,9.5-2,17.9-2.2,8.3.1,16.3,1.8,17.9,2.2l.9-3.8c0,0,0-.2.2-.2,0,0,.2,0,.3,0,1.6.6,3.3,1.3,4.8,2.2.1,0,.2.2.2.4,0,.1-.2.2-.3.2-.7,0-1.2-.1-1.5-.2l-1.5,4.5c1.5,0,6.1.3,10,4.6,3.9,4.2,7,4.8,8,4.9.2,0,.3,0,.4.1,0,0,.1,0,.1.1,1.1,2.5,1.3,4.3,1.3,7v141.9c0,5.7-3,11-7.8,13.8-7.6,4.5-18.8,6.8-33,6.8ZM691.9,855c-.8,2.2-1.3,4.6-1.3,7v141.6c0,5.5,2.9,10.6,7.5,13.3,7.6,4.5,18.6,6.9,32.6,6.9s25.1-2.3,32.7-6.8c4.6-2.7,7.5-7.8,7.5-13.3v-141.9c0-2.6-.2-4.3-1.2-6.7,0,0,0,0-.1,0-1.1-.2-4.3-.8-8.3-5.1-4.5-4.8-9.9-4.3-10-4.3-.1,0-.2,0-.3-.1,0,0,0-.2,0-.3l1.7-5.1c0-.1.2-.2.3-.2,0,0,0,0,.1,0-1-.5-1.9-.9-2.9-1.3l-.9,3.8c0,.2-.2.3-.4.2,0,0-8.8-2.1-18-2.2-9.2.1-17.9,2.2-18,2.2,0,0-.2,0-.2,0,0,0-.1-.1-.1-.2l-.9-3.6c-1.1.4-2.1.8-3.2,1.3l1.7,5c0,0,0,.2,0,.3,0,0-.2.1-.3.1,0,0-5.5-.4-10,4.3-3.9,4.2-7,4.9-8,5Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g>
                  <g>
                    <rect x="749.1" y="918.3" width="3.4" height="74.9" rx="1.7" ry="1.7" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M752,993.5h-2.2c-.5,0-.9-.4-.9-.9v-73.7c0-.5.4-.9.9-.9h2.2c.5,0,.9.4.9.9v73.7c0,.5-.4.9-.9.9ZM749.7,918.6c-.2,0-.3.1-.3.3v73.7c0,.2.1.3.3.3h2.2c.2,0,.3-.1.3-.3v-73.7c0-.2-.1-.3-.3-.3h-2.2Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  </g>
                  <g>
                    <rect x="741.1" y="918.3" width="3.4" height="74.9" rx="1.7" ry="1.7" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M743.9,993.5h-2.2c-.5,0-.9-.4-.9-.9v-73.7c0-.5.4-.9.9-.9h2.2c.5,0,.9.4.9.9v73.7c0,.5-.4.9-.9.9ZM741.7,918.6c-.2,0-.3.1-.3.3v73.7c0,.2.1.3.3.3h2.2c.2,0,.3-.1.3-.3v-73.7c0-.2-.1-.3-.3-.3h-2.2Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  </g>
                  <g>
                    <path d="M734.9,918.3h0c.9,0,1.7.8,1.7,1.7v71.5c0,.9-.8,1.7-1.7,1.7h0c-.9,0-1.7-.8-1.7-1.7v-71.5c0-.9.8-1.7,1.7-1.7Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M736,993.5h-2.2c-.5,0-.9-.4-.9-.9v-73.7c0-.5.4-.9.9-.9h2.2c.5,0,.9.4.9.9v73.7c0,.5-.4.9-.9.9ZM733.8,918.6c-.2,0-.3.1-.3.3v73.7c0,.2.1.3.3.3h2.2c.2,0,.3-.1.3-.3v-73.7c0-.2-.1-.3-.3-.3h-2.2Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  </g>
                  <g>
                    <path d="M726.9,918.3h0c.9,0,1.7.8,1.7,1.7v71.5c0,.9-.8,1.7-1.7,1.7h0c-.9,0-1.7-.8-1.7-1.7v-71.5c0-.9.8-1.7,1.7-1.7Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M728,993.5h-2.2c-.5,0-.9-.4-.9-.9v-73.7c0-.5.4-.9.9-.9h2.2c.5,0,.9.4.9.9v73.7c0,.5-.4.9-.9.9ZM725.7,918.6c-.2,0-.3.1-.3.3v73.7c0,.2.1.3.3.3h2.2c.2,0,.3-.1.3-.3v-73.7c0-.2-.1-.3-.3-.3h-2.2Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  </g>
                  <g>
                    <path d="M719.1,918.3h0c.9,0,1.7.8,1.7,1.7v71.5c0,.9-.8,1.7-1.7,1.7h0c-.9,0-1.7-.8-1.7-1.7v-71.5c0-.9.8-1.7,1.7-1.7Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M720.2,993.5h-2.2c-.5,0-.9-.4-.9-.9v-73.7c0-.5.4-.9.9-.9h2.2c.5,0,.9.4.9.9v73.7c0,.5-.4.9-.9.9ZM718,918.6c-.2,0-.3.1-.3.3v73.7c0,.2.1.3.3.3h2.2c.2,0,.3-.1.3-.3v-73.7c0-.2-.1-.3-.3-.3h-2.2Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  </g>
                  <g>
                    <rect x="709.4" y="918.3" width="3.4" height="74.9" rx="1.7" ry="1.7" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M712.2,993.5h-2.2c-.5,0-.9-.4-.9-.9v-73.7c0-.5.4-.9.9-.9h2.2c.5,0,.9.4.9.9v73.7c0,.5-.4.9-.9.9ZM709.9,918.6c-.2,0-.3.1-.3.3v73.7c0,.2.1.3.3.3h2.2c.2,0,.3-.1.3-.3v-73.7c0-.2-.1-.3-.3-.3h-2.2Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M753.5,911.3c-14.9-4.7-30.8-4.7-45.7,0-1.2.4-2.4-.3-2.8-1.5-2.1-6.1-4.1-12.1-6.2-18.2-.4-1.2.3-2.6,1.5-2.9,19.8-6.3,41-6.3,60.8,0,1.2.4,1.9,1.7,1.5,2.9-2.1,6.1-4.1,12.1-6.2,18.2-.4,1.2-1.7,1.8-2.8,1.5Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M707.1,911.7c-1.1,0-2.1-.7-2.4-1.8l-6.2-18.2c-.2-.7-.2-1.4.1-2,.3-.6.9-1.1,1.5-1.3,20-6.4,41.1-6.4,61,0,.7.2,1.2.7,1.5,1.3.3.6.4,1.4.1,2l-6.2,18.2c-.5,1.3-1.9,2.1-3.2,1.6-14.9-4.7-30.7-4.7-45.6,0-.3,0-.5.1-.8.1ZM730.6,884.3c-10.2,0-20.4,1.6-30.3,4.7-.5.2-.9.5-1.2,1-.2.5-.3,1-.1,1.6l6.2,18.2c.4,1,1.4,1.6,2.5,1.3,15-4.7,30.9-4.7,45.9,0h0c1,.3,2.1-.2,2.5-1.3l6.2-18.2c.2-.5.1-1.1-.1-1.6-.2-.5-.7-.8-1.2-1-9.9-3.2-20.1-4.7-30.3-4.7Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  </g>
                  <g>
                    <path d="M753.5,911.3c-14.9-4.7-30.8-4.7-45.7,0-1.2.4-2.4-.3-2.8-1.5-2.1-6.1-4.1-12.1-6.2-18.2-.4-1.2.3-2.6,1.5-2.9,19.8-6.3,41-6.3,60.8,0,1.2.4,1.9,1.7,1.5,2.9-2.1,6.1-4.1,12.1-6.2,18.2-.4,1.2-1.7,1.8-2.8,1.5Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M707.1,911.7c-1.1,0-2.1-.7-2.4-1.8l-6.2-18.2c-.2-.7-.2-1.4.1-2,.3-.6.9-1.1,1.5-1.3,20-6.4,41.1-6.4,61,0,.7.2,1.2.7,1.5,1.3.3.6.4,1.4.1,2l-6.2,18.2c-.5,1.3-1.9,2.1-3.2,1.6-14.9-4.7-30.7-4.7-45.6,0-.3,0-.5.1-.8.1ZM730.6,884.3c-10.2,0-20.4,1.6-30.3,4.7-.5.2-.9.5-1.2,1-.2.5-.3,1-.1,1.6l6.2,18.2c.4,1,1.4,1.6,2.5,1.3,15-4.7,30.9-4.7,45.9,0h0c1,.3,2.1-.2,2.5-1.3l6.2-18.2c.2-.5.1-1.1-.1-1.6-.2-.5-.7-.8-1.2-1-9.9-3.2-20.1-4.7-30.3-4.7Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M758.4,914.3l4.1-9.2c0-.2.3-.3.5-.3h1.2c.3,0,.6.3.6.6v23.6c0,.3-.3.6-.6.6h-5.2c-.3,0-.6-.3-.6-.6v-14.3c0,0,0-.2,0-.2Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M764.2,929.7h-5.2c-.5,0-.9-.4-.9-.9v-14.3c0-.1,0-.2,0-.4l4.1-9.2c.1-.3.4-.5.8-.5h1.2c.5,0,.9.4.9.9v23.6c0,.5-.4.9-.9.9ZM758.7,914.4h0s0,0,0,.1v14.3c0,.2.1.3.3.3h5.2c.2,0,.3-.1.3-.3v-23.6c0-.1-.1-.3-.3-.3h-1.2c-.1,0-.2,0-.2.2l-4.1,9.2Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  </g>
                  <g>
                    <path d="M758.4,957.9l5.1,9.2c0,.2.3.3.5.3h.2c.3,0,.6-.3.6-.6v-33.2c0-.3-.3-.6-.6-.6h-5.2c-.3,0-.6.3-.6.6v24c0,0,0,.2,0,.2Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M764.2,967.7h-.2c-.3,0-.7-.2-.8-.5l-5.1-9.2c0-.1,0-.2,0-.4v-24c0-.5.4-.9.9-.9h5.2c.5,0,.9.4.9.9v33.2c0,.5-.4.9-.9.9ZM758.7,957.7l5.1,9.2c0,.1.1.2.2.2h.2c.1,0,.3-.1.3-.3v-33.2c0-.2-.1-.3-.3-.3h-5.2c-.2,0-.3.1-.3.3v24s0,0,0,.1Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  </g>
                  <g>
                    <path d="M758.3,966.9c0-.2.2-.2.3,0,1.3,2.3,6.1,10.3,6.1,10.5v22.2c0,.4-.5.5-.7.2-1.7-2.3-5.7-7.9-5.7-8.1,0,0,0-20.9,0-24.8Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M764.4,1000.2c-.2,0-.4-.1-.6-.3,0,0-5.8-7.8-5.8-8.3,0-.2,0-20.9,0-24.8,0-.2.1-.4.4-.5.2,0,.4,0,.5.2.6,1.2,2.2,3.8,3.6,6.2,2.5,4.3,2.5,4.3,2.5,4.5v22.2c0,.3-.2.6-.5.7,0,0-.1,0-.2,0ZM758.6,991.6c.3.6,3.7,5.4,5.7,8,0,0,0,0,0,0,0,0,0,0,0,0v-22.2c-.2-.3-1.3-2.3-2.5-4.2-1.2-2.1-2.6-4.4-3.4-5.7,0,4.8,0,23,0,24.2ZM758.6,966.9h0s0,0,0,0Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M702.9,914.3l-4.1-9.2c0-.2-.3-.3-.5-.3h-1.2c-.3,0-.6.3-.6.6v23.6c0,.3.3.6.6.6h5.2c.3,0,.6-.3.6-.6v-14.3c0,0,0-.2,0-.2Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M702.4,929.7h-5.2c-.5,0-.9-.4-.9-.9v-23.6c0-.5.4-.9.9-.9h1.2c.3,0,.7.2.8.5l4.1,9.2c0,.1,0,.2,0,.4v14.3c0,.5-.4.9-.9.9ZM697.1,905c-.1,0-.3.1-.3.3v23.6c0,.2.1.3.3.3h5.2c.2,0,.3-.1.3-.3v-14.3s0,0,0-.1l-4.1-9.2c0,0-.1-.2-.2-.2h-1.2Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  </g>
                  <g>
                    <path d="M702.9,957.9l-5.1,9.2c0,.2-.3.3-.5.3h-.2c-.3,0-.6-.3-.6-.6v-33.2c0-.3.3-.6.6-.6h5.2c.3,0,.6.3.6.6v24c0,0,0,.2,0,.2Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M697.3,967.7h-.2c-.5,0-.9-.4-.9-.9v-33.2c0-.5.4-.9.9-.9h5.2c.5,0,.9.4.9.9v24c0,.1,0,.2,0,.4h0s-5.1,9.3-5.1,9.3c-.1.3-.4.5-.8.5ZM697.2,933.4c-.2,0-.3.1-.3.3v33.2c0,.1.1.3.3.3h.2c.1,0,.2,0,.2-.2l5.2-9.2s0,0,0-.1v-24c0-.2-.1-.3-.3-.3h-5.2Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  </g>
                  <g>
                    <path d="M703,966.9c0-.2-.2-.2-.3,0-1.3,2.3-6.1,10.3-6.1,10.5v22.2c0,.4.5.5.7.2,1.7-2.3,5.7-7.9,5.7-8.1,0,0,0-20.9,0-24.8Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M697,1000.2c0,0-.1,0-.2,0-.3,0-.5-.4-.5-.7v-22.2c0-.2,0-.2,2.5-4.4,1.4-2.3,3-5,3.6-6.2.1-.2.3-.3.5-.2.2,0,.4.2.4.5h0c0,3.9,0,24.6,0,24.8,0,.4-5.7,8.2-5.8,8.3-.1.2-.3.3-.6.3ZM696.9,977.3v22.2c0,0,0,0,0,0,0,0,0,0,0,0,1.9-2.6,5.3-7.4,5.7-8,0-1.2,0-19.4,0-24.2-.8,1.3-2.1,3.7-3.4,5.7-1.1,1.9-2.3,3.8-2.5,4.2Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M758.5,1012.2c-18.3,4.7-37.4,4.7-55.7,0,1.3-5,2.6-10,3.8-15,15.8,4.1,32.3,4.1,48.1,0,1.3,5,2.6,10,3.8,15Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M730.7,1016.1c-9.4,0-18.8-1.2-27.9-3.5h-.3c0,0,4-15.7,4-15.7h.3c15.7,4.1,32.2,4.1,47.9,0h.3c0,0,4,15.5,4,15.5h-.3c-9.1,2.4-18.5,3.6-27.9,3.6ZM703.2,1012c18,4.6,37,4.6,55,0l-3.7-14.4c-15.6,4-32,4-47.6,0l-3.7,14.4Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  </g>
                  <g>
                    <path d="M758.5,1012.2c-18.3,4.7-37.4,4.7-55.7,0,1.3-5,2.6-10,3.8-15,15.8,4.1,32.3,4.1,48.1,0,1.3,5,2.6,10,3.8,15Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M730.7,1016.1c-9.4,0-18.8-1.2-27.9-3.5h-.3c0,0,4-15.7,4-15.7h.3c15.7,4.1,32.2,4.1,47.9,0h.3c0,0,4,15.5,4,15.5h-.3c-9.1,2.4-18.5,3.6-27.9,3.6ZM703.2,1012c18,4.6,37,4.6,55,0l-3.7-14.4c-15.6,4-32,4-47.6,0l-3.7,14.4Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  </g>
                </g>
                <g>
                  <path d="M767.1,904.2h9.5s.5-6-9.5-5.4v5.4Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M776.9,904.5h-10.1v-6h.3c4-.2,6.8.5,8.4,2.2,1.6,1.6,1.4,3.4,1.4,3.5v.3ZM767.4,903.9h8.9c0-.5-.2-1.7-1.2-2.8-1.5-1.5-4.1-2.2-7.7-2.1v4.8Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g>
                  <path d="M694.6,904.2h-9.5s-.5-6,9.5-5.4v5.4Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M694.9,904.5h-10.1v-.3c0,0-.2-1.9,1.4-3.5,1.6-1.7,4.5-2.5,8.4-2.3h.3v6.1ZM685.3,903.9h8.9v-4.8c-3.6-.1-6.2.6-7.7,2.1-1,1.1-1.2,2.2-1.2,2.8Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g>
                  <path d="M751.1,847.3s-2.5,25.8,10,37.9" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M761.1,885.5c0,0-.2,0-.2,0-12.5-12.1-10.2-37.9-10.1-38.2,0-.2.2-.3.3-.3.2,0,.3.2.3.3,0,.3-2.3,25.8,9.9,37.7.1.1.1.3,0,.4,0,0-.1,0-.2,0Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g>
                  <path d="M760,851.4s-1,21.5,6.3,37.1" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M766.3,888.9c-.1,0-.2,0-.3-.2-7.3-15.5-6.3-37.1-6.3-37.3,0-.2.1-.3.3-.3.2,0,.3.2.3.3,0,.2-.9,21.6,6.3,37,0,.2,0,.3-.1.4,0,0,0,0-.1,0Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g>
                  <path d="M751.1,847.3s-2.5,25.8,10,37.9" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M761.1,885.5c0,0-.2,0-.2,0-12.5-12.1-10.2-37.9-10.1-38.2,0-.2.2-.3.3-.3.2,0,.3.2.3.3,0,.3-2.3,25.8,9.9,37.7.1.1.1.3,0,.4,0,0-.1,0-.2,0Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g>
                  <path d="M760,851.4s-1,21.5,6.3,37.1" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M766.3,888.9c-.1,0-.2,0-.3-.2-7.3-15.5-6.3-37.1-6.3-37.3,0-.2.1-.3.3-.3.2,0,.3.2.3.3,0,.2-.9,21.6,6.3,37,0,.2,0,.3-.1.4,0,0,0,0-.1,0Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g>
                  <path d="M770,855s-3.8-.2-8.4-5.1c-4.6-4.9-10.2-4.4-10.2-4.4l1.9-5.6s1.6.7,1.6.7c4,1.9,6.8,4.1,9.2,6.1,2.5,2,4.2,4.4,5.5,7.2.2.5.4.9.5,1.2Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M770,855.3s0,0,0,0c-.2,0-4-.2-8.6-5.2-4.5-4.8-9.9-4.3-10-4.3-.1,0-.2,0-.3-.1,0,0,0-.2,0-.3l1.9-5.6c0,0,0-.1.2-.2,0,0,.2,0,.2,0,0,0,1.5.6,1.6.7,0,0,0,0,0,0,4.1,1.9,6.9,4.2,9.3,6.1,2.5,2.1,4.3,4.5,5.5,7.3,0,.2.1.3.2.4.1.3.2.6.3.8,0,0,0,.2,0,.3,0,0-.1.1-.2.1ZM751.9,845.1c1.5,0,6.1.4,10,4.5,3.5,3.8,6.6,4.7,7.8,4.9,0,0,0-.2-.1-.3,0-.1-.1-.3-.2-.4-1.2-2.8-2.9-5.1-5.4-7.1-2.3-1.9-5.2-4.2-9.2-6.1h0c-.1,0-.5-.2-1.3-.5l-1.6,4.9s0,0,0,0Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g>
                  <path d="M750,838.3l-1,4.1s-8.7-2.1-18.1-2.2c-9.4.1-18.1,2.2-18.1,2.2l-.9-3.9c5.6-2,12.3-3.4,20.3-3.4s12.8,1.3,17.8,3.2Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M749.1,842.8s0,0,0,0c0,0-8.8-2.1-18-2.2-9.2.1-17.9,2.2-18,2.2,0,0-.2,0-.2,0,0,0-.1-.1-.1-.2l-.9-3.9c0-.2,0-.3.2-.4,6.3-2.3,13.1-3.5,20.4-3.5s12.3,1.1,17.9,3.2c.1,0,.2.2.2.4l-1,4.1c0,.1-.2.2-.3.2ZM731,840c8.3.1,16.3,1.8,17.9,2.2l.9-3.6c-5.5-2.1-11.4-3.1-17.4-3.1s-13.8,1.1-19.9,3.3l.8,3.3c1.6-.4,9.5-2,17.9-2.2Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g>
                  <path d="M709.7,847.3s2.5,25.8-10,37.9" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M699.7,885.5c0,0-.2,0-.2,0-.1-.1-.1-.3,0-.4,12.3-11.9,10-37.4,9.9-37.7,0-.2.1-.3.3-.3.2,0,.3.1.3.3,0,.3,2.4,26.1-10.1,38.2,0,0-.1,0-.2,0Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g>
                  <path d="M700.9,851.4s1,21.5-6.3,37.1" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M694.6,888.9s0,0-.1,0c-.2,0-.2-.3-.1-.4,7.2-15.4,6.3-36.8,6.3-37,0-.2.1-.3.3-.3.2,0,.3.1.3.3,0,.2.9,21.7-6.3,37.3,0,.1-.2.2-.3.2Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g>
                  <path d="M709.9,845.4s-5.6-.5-10.2,4.4c-4.1,4.4-7.3,4.9-8,4.9,1.2-3.2,3.3-6.1,6.1-8.3,2.6-2.1,6-4.3,10.1-6.2.2,0,.3,0,.3,0l1.7,5.1Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M691.7,855.1c0,0-.2,0-.2-.1,0,0,0-.2,0-.3,1.3-3.3,3.4-6.2,6.2-8.4,3.1-2.4,6.5-4.5,10.1-6.2,0,0,0,0,.1,0h.3c.1,0,.3,0,.3.2l1.7,5.1c0,0,0,.2,0,.3,0,0-.2.1-.3.1,0,0-5.5-.4-10,4.3-4.2,4.5-7.6,5-8.2,5,0,0,0,0,0,0ZM707.9,840.6c-3.6,1.7-6.9,3.7-10,6.1-2.5,2-4.5,4.7-5.8,7.7,1.2-.2,3.9-1.2,7.3-4.8,4-4.2,8.6-4.6,10-4.6l-1.5-4.5h0Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g>
                  <path d="M770.1,1009.3s-10.4-1-9.2,9.3c0,0,7.5-2.9,9.2-9.3Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M760.6,1019v-.4c-.4-3.1.3-5.5,1.9-7.2,2.8-2.9,7.4-2.5,7.6-2.4h.4s0,.4,0,.4c-1.7,6.4-9.1,9.4-9.4,9.5h-.4ZM769.4,1009.6c-1.3,0-4.5.2-6.5,2.3-1.4,1.5-2,3.6-1.8,6.3,1.5-.7,6.9-3.5,8.5-8.5,0,0-.2,0-.3,0Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g>
                  <path d="M701.4,1018.6s.5-10.5-9.6-8.8c0,0,3.3,7.4,9.6,8.8Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M701.7,1018.9h-.4c-6.5-1.5-9.7-8.8-9.9-9.1l-.2-.4h.4c3-.6,5.5,0,7.2,1.5,3,2.7,2.8,7.4,2.8,7.6v.4ZM692.2,1010c.7,1.5,3.8,6.8,8.9,8.2,0-1.1-.3-4.6-2.6-6.7-1.5-1.3-3.6-1.8-6.3-1.5Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M891.6,933.5l-5.1-.5.7-71.8c0-7.3-4.9-16.7-10.9-20.8-6.2-4.2-14.6-7.6-27.3-7.6s-21.3,3-29.4,8c-4.9,3-8.9,10.2-8.9,16l.7,76.2-5.5.5c-2.9.3-5.1,3-4.7,5.9h.6l9.6-1,.5,62.9c0,9.9,4.9,18.7,14.2,21.9l3.1,1.1c12.8,4.5,26.8,4.5,39.6,0h0c11.1-3.9,17.2-14.4,17.2-26.3l.6-59.6,9.3,1h.6c.3-2.9-1.8-5.6-4.7-5.9Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M848.8,1028c-6.7,0-13.5-1.1-19.9-3.4l-3.1-1.1c-8.9-3.1-14.4-11.6-14.4-22.2l-.5-62.6-9.3,1h-.7c-.2,0-.3-.1-.3-.3-.3-3.1,1.9-5.9,5-6.2l5.2-.5-.7-75.9c0-5.9,4-13.1,9-16.2,8.2-5.1,15.7-8.1,29.6-8.1s19.9,2.5,27.5,7.7c6.1,4.1,11.1,13.6,11.1,21l-.7,71.5,4.9.5s0,0,0,0c3.1.3,5.3,3.1,5,6.2,0,.2-.1.3-.3.3h-.6l-9-1-.5,59.3c0,12.6-6.7,22.8-17.4,26.6-6.4,2.2-13.2,3.4-19.9,3.4ZM811.2,938.1c0,0,.1,0,.2,0,0,0,.1.1.1.2l.6,62.9c0,10.4,5.4,18.7,14,21.7l3.1,1.1c12.7,4.4,26.7,4.4,39.4,0,10.5-3.7,17-13.6,17-26l.6-59.6c0,0,0-.2.1-.2,0,0,.2,0,.2,0l9.3,1h.3c.1-2.7-1.8-5-4.5-5.3l-5.1-.5c-.2,0-.3-.1-.3-.3l.7-71.8c0-7.3-4.8-16.5-10.8-20.5-7.5-5.1-16.4-7.6-27.2-7.6s-21.1,2.9-29.3,8c-4.8,3-8.7,10-8.7,15.7l.7,76.2c0,.2-.1.3-.3.3l-5.5.5c-1.3.1-2.5.8-3.4,1.9-.8,1-1.2,2.2-1.1,3.4h.4l9.6-1s0,0,0,0Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g>
                  <path d="M869.6,928.4c-14.3-4.7-27.3-4.7-41.6,0-1.2-3-2.9-6.5-4.8-9,16.6-5.4,34.7-5.4,51.2,0-2,3-3.2,5.5-4.8,9Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M828,928.7c-.1,0-.2,0-.3-.2-1.4-3.6-3.2-6.8-4.8-8.9,0,0,0-.2,0-.3,0,0,.1-.2.2-.2,16.6-5.4,34.9-5.4,51.4,0,0,0,.2,0,.2.2,0,0,0,.2,0,.3-2,3.1-3.3,5.6-4.8,9,0,.1-.2.2-.4.2-14.1-4.6-27.3-4.6-41.4,0,0,0,0,0,0,0ZM848.8,924.7c6.8,0,13.6,1.1,20.6,3.4,1.4-3.1,2.7-5.6,4.5-8.5-16.2-5.2-34-5.2-50.3,0,2.1,2.8,3.7,6.4,4.5,8.5,7-2.3,13.8-3.4,20.6-3.4Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g>
                  <path d="M828,980.2c16.7,4.6,26.6,3.5,41.6,0,1.2,5.3,2.9,9.7,4.8,14.1-16.6,9.6-34.7,9.6-51.2,0,2-5.3,3.2-7.9,4.8-14.1Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M848.8,1001.8c-8.7,0-17.5-2.4-25.8-7.2-.1,0-.2-.2-.1-.4.5-1.4,1-2.7,1.5-3.8,1.2-3.2,2.2-5.7,3.4-10.2,0,0,0-.1.1-.2,0,0,.2,0,.2,0,16.4,4.5,26,3.6,41.4,0,0,0,.2,0,.2,0,0,0,.1.1.1.2,1.1,5.1,2.8,9.3,4.8,14,0,.1,0,.3-.1.4-8.3,4.8-17,7.2-25.8,7.2ZM823.5,994.2c16.3,9.3,34.2,9.3,50.5,0-2-4.6-3.6-8.7-4.7-13.6-14.9,3.5-25,4.4-41.1,0-1.1,4.4-2.1,6.9-3.3,10-.4,1.1-.9,2.2-1.4,3.6Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g>
                  <g>
                    <path d="M878,934.3v-13.8l-5.4,10.4s0,1.3,0,3.4h5.5Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M878,934.6h-5.5c0,0-.2,0-.2,0,0,0,0-.1,0-.2,0-2.1,0-3.4,0-3.4,0,0,0,0,0-.1l5.4-10.4c0-.1.2-.2.3-.2.1,0,.2.2.2.3v13.8c0,.2-.1.3-.3.3ZM872.8,934h4.9v-12.3l-4.8,9.2c0,.3,0,1.4,0,3Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  </g>
                  <g>
                    <path d="M878,936.8h-5.5c0,6.9,0,20.6,1.9,32.7h3.7v-32.7Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M878,969.8h-3.7c-.2,0-.3-.1-.3-.3-1.8-12.2-2-25.8-1.9-32.8,0-.2.1-.3.3-.3h5.5c.2,0,.3.1.3.3v32.7c0,.2-.1.3-.3.3ZM874.6,969.2h3.1v-32.1h-4.9c0,7,0,20.2,1.8,32.1Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  </g>
                  <g>
                    <path d="M874.5,972c.8,5,1.9,9.8,3.5,13.7v-13.7h-3.5Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M878,985.9c-.1,0-.2,0-.3-.2-1.4-3.6-2.6-8.2-3.5-13.7,0,0,0-.2,0-.2,0,0,.1-.1.2-.1h3.5c.2,0,.3.1.3.3v13.7c0,.1-.1.3-.2.3,0,0,0,0,0,0ZM874.9,972.3c.8,4.6,1.7,8.5,2.8,11.7v-11.7h-2.8Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M820,934.3v-13.8l5.4,10.4s0,1.3,0,3.4h-5.5Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M825.5,934.6h-5.5c-.2,0-.3-.1-.3-.3v-13.8c0-.1,0-.3.2-.3.1,0,.3,0,.3.2l5.4,10.4s0,0,0,.1c0,0,0,1.3,0,3.4,0,0,0,.2,0,.2,0,0-.1,0-.2,0ZM820.3,934h4.9c0-1.7,0-2.8,0-3l-4.8-9.2v12.3Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  </g>
                  <g>
                    <path d="M820,936.8h5.5c0,6.9,0,20.6-1.9,32.7h-3.7v-32.7Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M823.7,969.8h-3.7c-.2,0-.3-.1-.3-.3v-32.7c0-.2.1-.3.3-.3h5.5c.2,0,.3.1.3.3,0,7,0,20.6-1.9,32.8,0,.1-.2.3-.3.3ZM820.3,969.2h3.1c1.8-11.9,1.9-25.1,1.8-32.1h-4.9v32.1Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  </g>
                  <g>
                    <path d="M823.5,972c-.8,5-1.9,9.8-3.5,13.7v-13.7h3.5Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M820,985.9s0,0,0,0c-.1,0-.2-.2-.2-.3v-13.7c0-.2.1-.3.3-.3h3.5c0,0,.2,0,.2.1,0,0,0,.2,0,.2-.9,5.5-2.1,10.1-3.5,13.7,0,.1-.2.2-.3.2ZM820.3,972.3v11.7c1.1-3.2,2.1-7.1,2.8-11.7h-2.8Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  </g>
                </g>
                <g>
                  <path d="M865,845.9c-10.7-3.9-22.4-3.9-33.1,0-.7-2-1.4-4-2.2-6,12.1-4.4,25.4-4.4,37.5,0-.7,2-1.4,4-2.2,6Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M831.9,846.2c-.1,0-.2,0-.3-.2l-2.2-6c0,0,0-.2,0-.2,0,0,0-.1.2-.2,12.2-4.4,25.5-4.4,37.7,0,.2,0,.2.2.2.4l-2.2,6c0,0,0,.1-.2.2,0,0-.2,0-.2,0-10.6-3.8-22.3-3.8-32.9,0,0,0,0,0-.1,0ZM830.1,840.1l2,5.5c10.6-3.7,22.2-3.7,32.8,0l2-5.5c-11.8-4.2-24.8-4.2-36.7,0Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g>
                  <path d="M878.1,856.1c-1.9-3.4-5.3-6.5-9.8-8.3-.5-.2-.8-.6-.6-1.1.3-1,.8-2,1.2-3,.5-1.2,3.3-1.8,4.5-1,4.5,2.7,7.7,6.5,9.4,10.5.2.5,0,.9-.3,1.3-.7.6-1.4,1.3-2,2-.7.8-2,.7-2.5-.3Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M879.5,857.1c0,0-.1,0-.2,0-.6,0-1.1-.4-1.4-.9,0,0,0,0,0,0-2-3.6-5.4-6.5-9.6-8.2-.7-.3-1-.9-.8-1.5.4-1,.8-2,1.3-3,.3-.6,1-1.1,1.9-1.4,1.1-.3,2.3-.3,3,.2,4.3,2.6,7.7,6.4,9.5,10.6.2.6.1,1.2-.4,1.6-.7.6-1.3,1.3-1.9,2-.4.4-.9.6-1.4.6ZM878.4,855.9c.2.4.5.6.9.6.4,0,.8-.1,1.1-.4.6-.7,1.3-1.4,2-2,.3-.2.3-.6.2-.9-1.7-4.1-5-7.8-9.3-10.3-.6-.4-1.6-.4-2.5-.1-.8.2-1.3.6-1.5,1-.5,1-.9,2-1.2,3-.1.4.2.6.4.8,4.4,1.8,7.9,4.7,9.9,8.4Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g>
                  <path d="M818.8,856.1c1.9-3.4,5.3-6.5,9.8-8.3.5-.2.8-.6.6-1.1-.3-1-.8-2-1.2-3-.5-1.2-3.3-1.8-4.5-1-4.5,2.7-7.7,6.5-9.4,10.5-.2.5,0,.9.3,1.3.7.6,1.4,1.3,2,2,.7.8,2,.7,2.5-.3Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M817.4,857.1c-.5,0-1-.2-1.4-.6-.6-.7-1.2-1.4-1.9-2-.5-.4-.6-1-.4-1.6,1.8-4.2,5.2-8,9.5-10.6.7-.4,1.9-.5,3-.2.9.3,1.6.8,1.9,1.4.5,1,.9,2,1.3,3,.2.6,0,1.2-.8,1.5-4.2,1.7-7.6,4.6-9.6,8.2,0,0,0,0,0,0-.3.5-.8.9-1.4.9,0,0-.1,0-.2,0ZM824.9,842.5c-.5,0-1,.1-1.3.3-4.2,2.6-7.5,6.2-9.3,10.3-.1.3,0,.7.2.9.7.6,1.4,1.3,2,2,.3.3.6.5,1,.4.4,0,.7-.3.9-.6,2.1-3.7,5.6-6.7,9.9-8.4.3-.1.6-.3.4-.8-.3-1-.8-2-1.2-3-.2-.4-.8-.8-1.5-1-.4-.1-.9-.2-1.3-.2ZM818.8,856.1h0,0Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g>
                  <path d="M859.7,1022.4c-7.1,2.6-14.9,2.6-22,0,.4-1.2.9-2.4,1.3-3.5,6.3,2.3,13.2,2.3,19.5,0,.4,1.2.9,2.4,1.3,3.5Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M848.7,1024.6c-3.8,0-7.5-.6-11.1-1.9-.2,0-.2-.2-.2-.4l1.3-3.5c0,0,0-.1.2-.2,0,0,.2,0,.2,0,6.2,2.2,13,2.2,19.2,0,.2,0,.3,0,.4.2l1.3,3.5c0,0,0,.2,0,.2,0,0,0,.1-.2.2-3.6,1.3-7.3,1.9-11.1,1.9ZM838.1,1022.2c6.9,2.4,14.4,2.4,21.2,0l-1.1-3c-6.2,2.1-12.9,2.1-19.1,0l-1.1,3Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g>
                  <path d="M824.3,1008.8c1.7,3,4.6,5.7,8.6,7.3.5.2.7.6.5,1-.3.9-.7,1.8-1.1,2.7-.5,1.1-2.9,1.6-4,.9-4-2.4-6.8-5.8-8.3-9.3-.2-.4,0-.8.2-1.1.6-.6,1.2-1.2,1.7-1.8.6-.7,1.7-.6,2.2.2Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M829.7,1021.4c-.5,0-1,0-1.4-.4-3.8-2.3-6.8-5.7-8.4-9.4-.2-.5,0-1.1.3-1.5.6-.5,1.2-1.1,1.7-1.7.4-.4.9-.6,1.4-.6.5,0,1,.4,1.3.8,0,0,0,0,0,0,1.8,3.1,4.8,5.7,8.5,7.2.6.3.9.8.7,1.4-.3.9-.7,1.8-1.1,2.7-.2.5-.9,1-1.7,1.2-.4.1-.8.2-1.3.2ZM823.1,1008.5c-.3,0-.6.1-.8.4-.5.6-1.1,1.2-1.8,1.8-.2.2-.3.5-.2.8,1.5,3.6,4.4,6.9,8.2,9.1.5.3,1.4.4,2.2.1.7-.2,1.2-.5,1.3-.9.4-.9.8-1.7,1.1-2.6,0-.3,0-.5-.4-.6-3.9-1.6-7-4.2-8.8-7.5-.2-.3-.5-.5-.8-.5,0,0,0,0-.1,0Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g>
                  <path d="M873.2,1008.8c-1.7,3-4.6,5.7-8.6,7.3-.5.2-.7.6-.5,1,.3.9.7,1.8,1.1,2.7.5,1.1,2.9,1.6,4,.9,4-2.4,6.8-5.8,8.3-9.3.2-.4,0-.8-.2-1.1-.6-.6-1.2-1.2-1.7-1.8-.6-.7-1.7-.6-2.2.2Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M867.8,1021.4c-.5,0-.9,0-1.3-.2-.8-.3-1.5-.7-1.7-1.2-.4-.9-.8-1.8-1.1-2.7-.2-.6,0-1.1.7-1.4,3.7-1.5,6.7-4.1,8.5-7.2,0,0,0,0,0,0,.3-.5.7-.8,1.3-.8.5,0,1.1.1,1.4.6.5.6,1.1,1.2,1.7,1.7.4.4.5.9.3,1.5-1.6,3.7-4.6,7.1-8.4,9.4-.4.3-.9.4-1.4.4ZM873.5,1009c-1.8,3.3-4.9,5.9-8.8,7.5-.3.1-.5.3-.4.6.3.9.7,1.8,1.1,2.6.2.4.7.7,1.3.9.8.3,1.7.2,2.2,0,3.7-2.3,6.6-5.5,8.2-9.1.1-.3,0-.6-.2-.8-.6-.6-1.2-1.2-1.8-1.8-.2-.3-.6-.4-.9-.4-.3,0-.6.2-.8.5Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M627.2,933.5l-5.1-.5.7-71.8c0-7.3-4.9-16.7-10.9-20.8-6.2-4.2-14.6-7.6-27.3-7.6s-21.3,3-29.4,8c-4.9,3-8.9,10.2-8.9,16l.7,76.2-5.5.5c-2.9.3-5.1,3-4.7,5.9h.6l9.6-1,.5,62.9c0,9.9,4.9,18.7,14.2,21.9l3.1,1.1c12.8,4.5,26.8,4.5,39.6,0h0c11.1-3.9,17.2-14.4,17.2-26.3l.6-59.6,9.3,1h.6c.3-2.9-1.8-5.6-4.7-5.9Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M584.4,1028c-6.7,0-13.5-1.1-19.9-3.4l-3.1-1.1c-8.9-3.1-14.4-11.6-14.4-22.2l-.5-62.6-9.3,1h-.7c-.2,0-.3-.1-.3-.3-.3-3.1,1.9-5.9,5-6.2l5.2-.5-.7-75.9c0-5.9,4-13.1,9-16.2,8.2-5.1,15.7-8.1,29.6-8.1s19.9,2.5,27.5,7.7c6.1,4.1,11.1,13.6,11.1,21l-.7,71.5,4.9.5s0,0,0,0c3.1.3,5.3,3.1,5,6.2,0,.2-.1.3-.3.3h-.6l-9-1-.5,59.3c0,12.6-6.7,22.8-17.4,26.6-6.4,2.2-13.2,3.4-19.9,3.4ZM546.8,938.1c0,0,.1,0,.2,0,0,0,.1.1.1.2l.6,62.9c0,10.4,5.4,18.7,14,21.7l3.1,1.1c12.7,4.4,26.7,4.4,39.4,0,10.5-3.7,17-13.6,17-26l.6-59.6c0,0,0-.2.1-.2,0,0,.2,0,.2,0l9.3,1h.3c.1-2.7-1.8-5-4.5-5.3l-5.1-.5c-.2,0-.3-.1-.3-.3l.7-71.8c0-7.3-4.8-16.5-10.8-20.5-7.5-5.1-16.4-7.6-27.2-7.6s-21.1,2.9-29.3,8c-4.8,3-8.7,10-8.7,15.7l.7,76.2c0,.2-.1.3-.3.3l-5.5.5c-1.3.1-2.5.8-3.4,1.9-.8,1-1.2,2.2-1.1,3.4h.4l9.6-1s0,0,0,0Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g>
                  <path d="M605.2,928.4c-14.3-4.7-27.3-4.7-41.6,0-1.2-3-2.9-6.5-4.8-9,16.6-5.4,34.7-5.4,51.2,0-2,3-3.2,5.5-4.8,9Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M563.6,928.7c-.1,0-.2,0-.3-.2-1.4-3.6-3.2-6.8-4.8-8.9,0,0,0-.2,0-.3,0,0,.1-.2.2-.2,16.6-5.4,34.9-5.4,51.4,0,0,0,.2,0,.2.2,0,0,0,.2,0,.3-2,3.1-3.3,5.6-4.8,9,0,.1-.2.2-.4.2-14.1-4.6-27.3-4.6-41.4,0,0,0,0,0,0,0ZM584.4,924.7c6.8,0,13.6,1.1,20.6,3.4,1.4-3.1,2.7-5.6,4.5-8.5-16.2-5.2-34-5.2-50.3,0,2.1,2.8,3.7,6.4,4.5,8.5,7-2.3,13.8-3.4,20.6-3.4Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g>
                  <path d="M563.6,980.2c16.7,4.6,26.6,3.5,41.6,0,1.2,5.3,2.9,9.7,4.8,14.1-16.6,9.6-34.7,9.6-51.2,0,2-5.3,3.2-7.9,4.8-14.1Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M584.4,1001.8c-8.7,0-17.5-2.4-25.8-7.2-.1,0-.2-.2-.1-.4.5-1.4,1-2.7,1.5-3.8,1.2-3.2,2.2-5.7,3.4-10.2,0,0,0-.1.1-.2,0,0,.2,0,.2,0,16.4,4.5,26,3.6,41.4,0,0,0,.2,0,.2,0,0,0,.1.1.1.2,1.1,5.1,2.8,9.3,4.8,14,0,.1,0,.3-.1.4-8.3,4.8-17,7.2-25.8,7.2ZM559.1,994.2c16.3,9.3,34.2,9.3,50.5,0-2-4.6-3.6-8.7-4.7-13.6-14.9,3.5-25,4.4-41.1,0-1.1,4.4-2.1,6.9-3.3,10-.4,1.1-.9,2.2-1.4,3.6Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g>
                  <g>
                    <path d="M613.6,934.3v-13.8l-5.4,10.4s0,1.3,0,3.4h5.5Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M613.6,934.6h-5.5c0,0-.2,0-.2,0,0,0,0-.1,0-.2,0-2.1,0-3.4,0-3.4,0,0,0,0,0-.1l5.4-10.4c0-.1.2-.2.3-.2.1,0,.2.2.2.3v13.8c0,.2-.1.3-.3.3ZM608.4,934h4.9v-12.3l-4.8,9.2c0,.3,0,1.4,0,3Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  </g>
                  <g>
                    <path d="M613.6,936.8h-5.5c0,6.9,0,20.6,1.9,32.7h3.7v-32.7Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M613.6,969.8h-3.7c-.2,0-.3-.1-.3-.3-1.8-12.2-2-25.8-1.9-32.8,0-.2.1-.3.3-.3h5.5c.2,0,.3.1.3.3v32.7c0,.2-.1.3-.3.3ZM610.2,969.2h3.1v-32.1h-4.9c0,7,0,20.2,1.8,32.1Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  </g>
                  <g>
                    <path d="M610.1,972c.8,5,1.9,9.8,3.5,13.7v-13.7h-3.5Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M613.6,985.9c-.1,0-.2,0-.3-.2-1.4-3.6-2.6-8.2-3.5-13.7,0,0,0-.2,0-.2,0,0,.1-.1.2-.1h3.5c.2,0,.3.1.3.3v13.7c0,.1-.1.3-.2.3,0,0,0,0,0,0ZM610.5,972.3c.8,4.6,1.7,8.5,2.8,11.7v-11.7h-2.8Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M555.6,934.3v-13.8l5.4,10.4s0,1.3,0,3.4h-5.5Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M561.1,934.6h-5.5c-.2,0-.3-.1-.3-.3v-13.8c0-.1,0-.3.2-.3.1,0,.3,0,.3.2l5.4,10.4s0,0,0,.1c0,0,0,1.3,0,3.4,0,0,0,.2,0,.2,0,0-.1,0-.2,0ZM555.9,934h4.9c0-1.7,0-2.8,0-3l-4.8-9.2v12.3Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  </g>
                  <g>
                    <path d="M555.6,936.8h5.5c0,6.9,0,20.6-1.9,32.7h-3.7v-32.7Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M559.3,969.8h-3.7c-.2,0-.3-.1-.3-.3v-32.7c0-.2.1-.3.3-.3h5.5c.2,0,.3.1.3.3,0,7,0,20.6-1.9,32.8,0,.1-.2.3-.3.3ZM555.9,969.2h3.1c1.8-11.9,1.9-25.1,1.8-32.1h-4.9v32.1Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  </g>
                  <g>
                    <path d="M559.1,972c-.8,5-1.9,9.8-3.5,13.7v-13.7h3.5Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                    <path d="M555.6,985.9s0,0,0,0c-.1,0-.2-.2-.2-.3v-13.7c0-.2.1-.3.3-.3h3.5c0,0,.2,0,.2.1,0,0,0,.2,0,.2-.9,5.5-2.1,10.1-3.5,13.7,0,.1-.2.2-.3.2ZM555.9,972.3v11.7c1.1-3.2,2.1-7.1,2.8-11.7h-2.8Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  </g>
                </g>
                <g>
                  <path d="M600.6,845.9c-10.7-3.9-22.4-3.9-33.1,0-.7-2-1.4-4-2.2-6,12.1-4.4,25.4-4.4,37.5,0-.7,2-1.4,4-2.2,6Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M567.5,846.2c-.1,0-.2,0-.3-.2l-2.2-6c0,0,0-.2,0-.2,0,0,0-.1.2-.2,12.2-4.4,25.5-4.4,37.7,0,.2,0,.2.2.2.4l-2.2,6c0,0,0,.1-.2.2,0,0-.2,0-.2,0-10.6-3.8-22.3-3.8-32.9,0,0,0,0,0-.1,0ZM565.7,840.1l2,5.5c10.6-3.7,22.2-3.7,32.8,0l2-5.5c-11.8-4.2-24.8-4.2-36.7,0Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g>
                  <path d="M613.7,856.1c-1.9-3.4-5.3-6.5-9.8-8.3-.5-.2-.8-.6-.6-1.1.3-1,.8-2,1.2-3,.5-1.2,3.3-1.8,4.5-1,4.5,2.7,7.7,6.5,9.4,10.5.2.5,0,.9-.3,1.3-.7.6-1.4,1.3-2,2-.7.8-2,.7-2.5-.3Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M615.1,857.1c0,0-.1,0-.2,0-.6,0-1.1-.4-1.4-.9,0,0,0,0,0,0-2-3.6-5.4-6.5-9.6-8.2-.7-.3-1-.9-.8-1.5.4-1,.8-2,1.3-3,.3-.6,1-1.1,1.9-1.4,1.1-.3,2.3-.3,3,.2,4.3,2.6,7.7,6.4,9.5,10.6.2.6.1,1.2-.4,1.6-.7.6-1.3,1.3-1.9,2-.4.4-.9.6-1.4.6ZM614,855.9c.2.4.5.6.9.6.4,0,.8-.1,1.1-.4.6-.7,1.3-1.4,2-2,.3-.2.3-.6.2-.9-1.7-4.1-5-7.8-9.3-10.3-.6-.4-1.6-.4-2.5-.1-.8.2-1.3.6-1.5,1-.5,1-.9,2-1.2,3-.1.4.2.6.4.8,4.4,1.8,7.9,4.7,9.9,8.4Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g>
                  <path d="M554.4,856.1c1.9-3.4,5.3-6.5,9.8-8.3.5-.2.8-.6.6-1.1-.3-1-.8-2-1.2-3-.5-1.2-3.3-1.8-4.5-1-4.5,2.7-7.7,6.5-9.4,10.5-.2.5,0,.9.3,1.3.7.6,1.4,1.3,2,2,.7.8,2,.7,2.5-.3Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M553,857.1c-.5,0-1-.2-1.4-.6-.6-.7-1.2-1.4-1.9-2-.5-.4-.6-1-.4-1.6,1.8-4.2,5.2-8,9.5-10.6.7-.4,1.9-.5,3-.2.9.3,1.6.8,1.9,1.4.5,1,.9,2,1.3,3,.2.6,0,1.2-.8,1.5-4.2,1.7-7.6,4.6-9.6,8.2,0,0,0,0,0,0-.3.5-.8.9-1.4.9,0,0-.1,0-.2,0ZM560.5,842.5c-.5,0-1,.1-1.3.3-4.2,2.6-7.5,6.2-9.3,10.3-.1.3,0,.7.2.9.7.6,1.4,1.3,2,2,.3.3.6.5,1,.4.4,0,.7-.3.9-.6,2.1-3.7,5.6-6.7,9.9-8.4.3-.1.6-.3.4-.8-.3-1-.8-2-1.2-3-.2-.4-.8-.8-1.5-1-.4-.1-.9-.2-1.3-.2ZM554.4,856.1h0,0Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g>
                  <path d="M595.3,1022.4c-7.1,2.6-14.9,2.6-22,0,.4-1.2.9-2.4,1.3-3.5,6.3,2.3,13.2,2.3,19.5,0,.4,1.2.9,2.4,1.3,3.5Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M584.3,1024.6c-3.8,0-7.5-.6-11.1-1.9-.2,0-.2-.2-.2-.4l1.3-3.5c0,0,0-.1.2-.2,0,0,.2,0,.2,0,6.2,2.2,13,2.2,19.2,0,.2,0,.3,0,.4.2l1.3,3.5c0,0,0,.2,0,.2,0,0,0,.1-.2.2-3.6,1.3-7.3,1.9-11.1,1.9ZM573.7,1022.2c6.9,2.4,14.4,2.4,21.2,0l-1.1-3c-6.2,2.1-12.9,2.1-19.1,0l-1.1,3Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g>
                  <path d="M559.9,1008.8c1.7,3,4.6,5.7,8.6,7.3.5.2.7.6.5,1-.3.9-.7,1.8-1.1,2.7-.5,1.1-2.9,1.6-4,.9-4-2.4-6.8-5.8-8.3-9.3-.2-.4,0-.8.2-1.1.6-.6,1.2-1.2,1.7-1.8.6-.7,1.7-.6,2.2.2Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M565.3,1021.4c-.5,0-1,0-1.4-.4-3.8-2.3-6.8-5.7-8.4-9.4-.2-.5,0-1.1.3-1.5.6-.5,1.2-1.1,1.7-1.7.4-.4.9-.6,1.4-.6.5,0,1,.4,1.3.8,0,0,0,0,0,0,1.8,3.1,4.8,5.7,8.5,7.2.6.3.9.8.7,1.4-.3.9-.7,1.8-1.1,2.7-.2.5-.9,1-1.7,1.2-.4.1-.8.2-1.3.2ZM558.7,1008.5c-.3,0-.6.1-.8.4-.5.6-1.1,1.2-1.8,1.8-.2.2-.3.5-.2.8,1.5,3.6,4.4,6.9,8.2,9.1.5.3,1.4.4,2.2.1.7-.2,1.2-.5,1.3-.9.4-.9.8-1.7,1.1-2.6,0-.3,0-.5-.4-.6-3.9-1.6-7-4.2-8.8-7.5-.2-.3-.5-.5-.8-.5,0,0,0,0-.1,0Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g>
                  <path d="M608.8,1008.8c-1.7,3-4.6,5.7-8.6,7.3-.5.2-.7.6-.5,1,.3.9.7,1.8,1.1,2.7.5,1.1,2.9,1.6,4,.9,4-2.4,6.8-5.8,8.3-9.3.2-.4,0-.8-.2-1.1-.6-.6-1.2-1.2-1.7-1.8-.6-.7-1.7-.6-2.2.2Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M603.4,1021.4c-.5,0-.9,0-1.3-.2-.8-.3-1.5-.7-1.7-1.2-.4-.9-.8-1.8-1.1-2.7-.2-.6,0-1.1.7-1.4,3.7-1.5,6.7-4.1,8.5-7.2,0,0,0,0,0,0,.3-.5.7-.8,1.3-.8.5,0,1.1.1,1.4.6.5.6,1.1,1.2,1.7,1.7.4.4.5.9.3,1.5-1.6,3.7-4.6,7.1-8.4,9.4-.4.3-.9.4-1.4.4ZM609.1,1009c-1.8,3.3-4.9,5.9-8.8,7.5-.3.1-.5.3-.4.6.3.9.7,1.8,1.1,2.6.2.4.7.7,1.3.9.8.3,1.7.2,2.2,0,3.7-2.3,6.6-5.5,8.2-9.1.1-.3,0-.6-.2-.8-.6-.6-1.2-1.2-1.8-1.8-.2-.3-.6-.4-.9-.4-.3,0-.6.2-.8.5Z" fill="none" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
              </g>
              <g id="Bedroom_21" data-name="Bedroom_2" filter="url(#drop-shadow-19)">
                <g>
                  <path d="M816.3,423.8h55.6c2.3,0,4.2,1.9,4.2,4.2v100.7c0,.4-.4.8-.8.8h-62.1c-.6,0-1-.5-1-1v-100.5c0-2.3,1.9-4.2,4.2-4.2Z" transform="translate(1320.8 -367.5) rotate(90)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M791,507.8v-62.1c0-.7.6-1.3,1.3-1.3h100.5c2.5,0,4.5,2,4.5,4.5v55.6c0,2.5-2,4.5-4.5,4.5h-100.7c-.6,0-1-.5-1-1ZM896.7,448.9c0-2.2-1.8-4-4-4h-100.5c-.4,0-.8.4-.8.8v62.1c0,.3.2.5.5.5h100.7c2.2,0,4-1.8,4-4v-55.6Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="862.8" y="471.8" width="67.8" height="9.3" rx="2.6" ry="2.6" transform="translate(1373.3 -420.2) rotate(90)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M891.8,507.8v-62.6c0-1.6,1.3-2.9,2.9-2.9h4.1c1.6,0,2.9,1.3,2.9,2.9v62.6c0,1.6-1.3,2.9-2.9,2.9h-4.1c-1.6,0-2.9-1.3-2.9-2.9ZM901.2,445.2c0-1.3-1.1-2.4-2.4-2.4h-4.1c-1.3,0-2.4,1.1-2.4,2.4v62.6c0,1.3,1.1,2.4,2.4,2.4h4.1c1.3,0,2.4-1.1,2.4-2.4v-62.6Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M848.5,443.9c-4.8-.4-33.3-.9-37.3-.4-3.9.5-16.1-1.8-15.9.2.2,1.9-1.5,27.2-2.1,33-.7,5.8-2.1,18.4-3,22.3-.8,3.9-.5,10.4.8,10.8,1.3.4,55.3.2,58.5-.5,3.1-.7-1-65.4-1-65.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M789.5,504c0-1.8.2-3.6.5-5,.9-4.3,2.6-19.3,3-22.2.7-5.8,2.3-31.1,2.1-33,0-.2,0-.4.2-.5.8-.8,3.8-.6,8.6-.2,2.8.2,5.8.5,7.3.3,4-.5,32.5,0,37.3.4h.2s0,.2,0,.2c0,.2,1,16.4,1.7,32.4,1.3,32.7-.3,33.1-.9,33.2-2.5.6-56.7,1-58.6.5-1-.3-1.5-3.1-1.5-6.1ZM795.5,444.2c0,3.9-1.5,26.9-2.1,32.7-.3,3-2,18-3,22.3-.9,4.2-.4,10.2.6,10.5.7.2,13.7.2,28.5.1,13.4,0,28.2-.3,29.8-.7.4-.1,1.7-2.9.5-32.8-.6-15-1.5-30.1-1.6-32.1-5.4-.4-33.1-.9-37-.3-1.6.2-4.6,0-7.4-.3-3.6-.3-7.6-.6-8.2,0,0,0,0,0,0,.1,0,0,0,.2,0,.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M847.5,510.4c-.6-.5,1.2-13.3,1.1-23.2-.1-20.4-.9-43-.6-44.7.3-1.3,4.4-1.2,8.4-1.3,3.7,0,7.1-.3,8.2.8,2.1,2.2,2.2,65.2-.7,67.8-1.3,1.2-4.5,1-7.6,1.1-3.9.1-7.8.3-8.8-.6Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M847.1,509.5c0-1,.1-2.8.4-6.1.4-4.6.9-10.8.8-16.2,0-9.5-.3-19.5-.4-27.5-.2-9.4-.3-16.2-.1-17.2.3-1.4,3.7-1.4,7.6-1.5h1c.5,0,1.1,0,1.6,0,3.2,0,5.8-.1,6.8.9,1.6,1.6,1.9,29.5,1.4,47.5-.3,8.8-.8,19.5-2.1,20.7-1.1,1-3.6,1.1-6.2,1.2-.5,0-1,0-1.5,0-4.1.2-7.9.3-9-.7h0c-.1-.1-.2-.4-.2-1.1ZM848.9,487.8c0,5.3-.5,11.3-.9,15.7-.3,3.3-.5,6.4-.3,6.8,1,.8,5,.7,8.6.6.5,0,1,0,1.5,0,2.5,0,4.9-.1,5.9-1,.3-.3,1.4-2.6,1.9-20.3.6-20.8,0-45.9-1.2-47.1-.8-.8-3.5-.8-6.4-.7-.5,0-1.1,0-1.6,0h-1c-3.1,0-6.9,0-7.1,1.1-.2.9,0,8,.1,17.1.2,8,.4,18,.4,27.6,0,.2,0,.3,0,.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M888,453.8c-3.7-2-15.7-.1-17.6,0-8,.6-3.7,44.5-1.3,45.9,2.1,1.2,19.7,1.4,20.5-1.2.4-1.3,1.4-12.6,1.2-23.1-.1-10.7-1.4-20.8-2.9-21.6Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M865.5,472.3c0-5,.3-9.7,1.1-13.1.8-3.6,2.1-5.5,3.8-5.6.3,0,.8,0,1.5-.2,3.9-.5,13-1.6,16.2.2,1.8,1,2.9,11.9,3,21.8.1,10.5-.8,21.8-1.2,23.2-.1.4-.6.8-1.4,1.1-4.2,1.6-17.7,1.3-19.5.3-1.5-.9-3.5-15.2-3.5-27.7ZM890.6,477.5c0-.7,0-1.4,0-2.1-.2-12-1.5-20.7-2.7-21.4h0c-3.1-1.7-12.1-.6-15.9-.1-.7,0-1.2.1-1.5.2-1.5.1-2.6,1.9-3.4,5.2-2.9,12.6.6,39.4,2.1,40.3,1.8,1,15,1.3,19.1-.3.8-.3,1-.6,1.1-.8.4-1.3,1.2-11.2,1.2-21Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
              </g>
              <g filter="url(#drop-shadow-20)">
                <g>
                  <g>
                    <rect x="271.7" y="170.7" width="7.5" height="2.1" transform="translate(514 391.9) rotate(-169.2)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                    <path d="M271.2,172.3l.5-2.7,8,1.5-.5,2.7-8-1.5ZM272.2,170.4l-.3,1.4,6.8,1.3.3-1.4-6.8-1.3Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  </g>
                  <g>
                    <rect x="272.3" y="169.8" width="8.5" height="2.1" transform="translate(516.3 390.2) rotate(-169.2)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                    <path d="M271.8,171.3l.5-2.7,8.9,1.7-.5,2.7-8.9-1.7ZM272.8,169.4l-.3,1.4,7.7,1.5.3-1.4-7.7-1.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  </g>
                  <g>
                    <rect x="252.2" y="149.7" width="7.6" height="2.1" transform="translate(377.8 -120.2) rotate(83.7)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                    <path d="M254.2,146.8l2.7-.3.9,8.1-2.7.3-.9-8.1ZM256.3,147.2l-1.5.2.8,6.9,1.5-.2-.8-6.9Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  </g>
                  <g>
                    <rect x="252.8" y="148.7" width="8.5" height="2.1" transform="translate(377.8 -122.1) rotate(83.7)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                    <path d="M255.2,145.4l2.7-.3,1,9-2.7.3-1-9ZM257.3,145.8l-1.5.2.9,7.8,1.5-.2-.9-7.8Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  </g>
                  <g>
                    <path d="M257.6,165.6c-4-4.3-3.9-11,.2-15.3l8-8.3c1.5-1.6,3.5-1.6,5,0l14.6,15.8c1.5,1.6,1.4,3.6-.3,5l-8.9,7.3c-4.5,3.8-11.2,3.3-15.2-1l-3.3-3.6Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                    <path d="M254.5,156.4c.3-2.3,1.4-4.5,3.1-6.3l8-8.3c.8-.8,1.8-1.3,2.8-1.3,1,0,1.9.5,2.7,1.3l14.6,15.8c.8.9,1.2,1.8,1.1,2.8,0,1-.6,1.9-1.5,2.7l-8.9,7.3c-4.7,3.9-11.6,3.4-15.7-1.1l-3.3-3.6c-2.4-2.6-3.4-6.1-2.9-9.4ZM286.1,160.6c0,0,0-.1,0-.2,0-.8-.3-1.6-1-2.4l-14.6-15.8c-.7-.7-1.5-1.1-2.3-1.1-.8,0-1.6.4-2.3,1.1l-8,8.3c-4,4.1-4,10.6-.2,14.8l3.3,3.6c3.9,4.2,10.4,4.6,14.8,1l8.9-7.3c.7-.6,1.1-1.3,1.2-2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  </g>
                  <path d="M255.8,156.9c.3-2.1,1.2-4,2.8-5.6l7.1-7.4c.7-.8,1.6-1.2,2.5-1.1.9,0,1.7.4,2.5,1.2l13,14c.7.8,1.1,1.7,1,2.5,0,.9-.5,1.7-1.3,2.4l-7.9,6.5c-4.2,3.4-10.3,3-14-.9l-2.9-3.2c-2.2-2.3-3-5.4-2.6-8.4ZM283.9,160.6c0,0,0-.1,0-.2,0-.7-.2-1.4-.8-2.1l-13-14c-.6-.6-1.3-1-2-1-.7,0-1.4.3-2,1l-7.1,7.4c-3.5,3.6-3.6,9.4-.1,13.1l2.9,3.2c3.4,3.7,9.2,4.1,13.1.9l7.9-6.5c.6-.5,1-1.1,1.1-1.8Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <g>
                    <path d="M256.1,149.1l-1.1,1.1c-5.4,5.4-5.6,14.1-.4,19.7l1.7,1.8c5.2,5.6,13.9,6.1,19.7,1.1l1.1-1-.5,2.9-9.7,4.2-7.3-1.2-6.2-4.9-4.1-6.5s-1-5.7-1.1-5.9c0-.2.7-6,1-6.5.3-.6,3.8-4.7,4-4.7.2,0,2.9,0,2.9,0Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                    <path d="M248.4,156.6c.2-1.3.4-2.6.5-2.8.2-.4,1.6-2.1,2.1-2.6,1.9-2.2,2-2.2,2.1-2.3.2,0,2.1,0,3,0h.8s-1.6,1.6-1.6,1.6c-5.3,5.3-5.5,13.8-.4,19.3l1.7,1.8c5.1,5.5,13.6,6,19.2,1.1l1.8-1.6-.7,3.9-9.9,4.4-7.5-1.2h0c0,0-6.3-5-6.3-5l-4.1-6.6h0c-.1-.6-1-5.7-1.1-6,0-.1.2-2.1.5-3.9ZM253.3,149.5c-.5.5-3.6,4.1-3.8,4.6-.2.5-.9,5.9-.9,6.4,0,.2.6,3.5,1.1,5.8l4,6.4,6.1,4.8,7.1,1.1,9.4-4.1.3-1.8-.5.4c-5.9,5.1-14.8,4.6-20.1-1.1l-1.7-1.8c-5.3-5.8-5.1-14.6.4-20.1l.5-.5c-.8,0-1.7,0-2,0Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  </g>
                  <g>
                    <path d="M253,170.7c-4.9-5.6-4.6-14.1.7-19.3l7.4-7.3-2-2.1-7.4,7.3c-6.4,6.3-6.8,16.5-.8,23.2l2.4,2.6c6.3,6.4,16.5,6.8,23.2,1l7.9-6.8-1.9-2.2-7.9,6.8c-5.6,4.9-14.1,4.5-19.3-.8l-2.3-2.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                    <path d="M246.5,159c.5-3.6,2.2-7.1,5-9.8l7.7-7.5,2.5,2.5-7.7,7.5c-5.2,5.1-5.5,13.4-.7,18.8l2.3,2.5c5.1,5.2,13.3,5.5,18.8.8l8.1-7,2.3,2.7-8.1,7c-6.9,6-17.3,5.5-23.7-1l-2.4-2.6c-3.4-3.9-4.8-9-4.1-13.8ZM259.1,142.5l-7.2,7.1c-6.3,6.2-6.6,16.2-.8,22.8l2.4,2.6c6.1,6.3,16.1,6.7,22.8.9l7.6-6.6-1.5-1.7-7.6,6.6c-5.7,5-14.4,4.6-19.7-.8l-2.3-2.5c-5-5.7-4.7-14.4.7-19.7l7.2-7.1-1.6-1.6Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="257.9" y="110.3" width="7.5" height="2.1" transform="translate(114.4 354.6) rotate(-81.9)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                    <path d="M259.8,115.1l1.2-8.1,2.7.4-1.2,8.1-2.7-.4ZM261.5,107.8l-1,6.8,1.4.2,1-6.8-1.4-.2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  </g>
                  <g>
                    <rect x="258.4" y="111.3" width="8.5" height="2.1" transform="translate(114.2 356.5) rotate(-81.9)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                    <path d="M260.7,116.7l1.3-9,2.7.4-1.3,9-2.7-.4ZM262.5,108.4l-1.1,7.8,1.4.2,1.1-7.8-1.4-.2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  </g>
                  <g>
                    <rect x="278" y="89.9" width="7.6" height="2.1" transform="translate(574.3 137.3) rotate(171.1)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                    <path d="M278,92.9l-.4-2.7,8.1-1.3.4,2.7-8.1,1.3ZM278.3,90.8l.2,1.4,6.8-1.1-.2-1.4-6.8,1.1Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  </g>
                  <g>
                    <rect x="278.6" y="90.9" width="8.5" height="2.1" transform="translate(576.5 139.1) rotate(171.1)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                    <path d="M278.6,94l-.4-2.7,9-1.4.4,2.7-9,1.4ZM278.9,91.8l.2,1.4,7.7-1.2-.2-1.4-7.7,1.2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  </g>
                  <g>
                    <path d="M267,93.2c4.1-4.2,10.8-4.4,15.3-.5l8.7,7.6c1.7,1.5,1.7,3.5.2,5l-15.1,15.3c-1.6,1.6-3.6,1.5-5-.1l-7.7-8.6c-4-4.4-3.8-11.1.3-15.3l3.4-3.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                    <path d="M271.4,121.4c-.2-.2-.4-.4-.7-.6l-7.7-8.6c-4.1-4.5-3.9-11.4.3-15.7l3.4-3.5c4.3-4.3,11.2-4.5,15.7-.5l8.7,7.6c.9.8,1.4,1.7,1.4,2.7,0,1-.4,2-1.2,2.8l-15.1,15.3c-.8.8-1.8,1.3-2.8,1.2-.7,0-1.4-.3-2.1-.8ZM281.5,92.5c-4.3-3.3-10.4-2.9-14.2,1l-3.4,3.5c-4,4.1-4.2,10.6-.3,14.8l7.7,8.6c.7.7,1.5,1.1,2.3,1.2.8,0,1.6-.3,2.3-1.1l15.1-15.3c.7-.7,1.1-1.5,1-2.3,0-.8-.4-1.6-1.2-2.3l-8.7-7.6c-.2-.2-.4-.3-.6-.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  </g>
                  <g>
                    <path d="M267.6,94.2c3.7-3.7,9.6-3.9,13.6-.5l7.7,6.8c1.5,1.3,1.5,3.1.2,4.5l-13.4,13.6c-1.4,1.4-3.2,1.4-4.5,0l-6.9-7.6c-3.5-3.9-3.4-9.8.3-13.6l3-3.1Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                    <path d="M271.5,119.3c-.2-.2-.4-.3-.6-.5l-6.9-7.6c-3.6-4-3.5-10.2.3-14l3-3.1c3.8-3.8,10-4.1,14-.5l7.7,6.8c.8.7,1.2,1.5,1.3,2.4,0,.9-.3,1.8-1.1,2.5l-13.4,13.6c-.7.7-1.6,1.1-2.5,1.1-.7,0-1.3-.2-1.9-.7ZM280.5,93.6c-3.8-2.9-9.2-2.6-12.6.9l-3,3.1c-3.6,3.6-3.7,9.4-.3,13.1l6.9,7.6c.6.6,1.3,1,2,1,.7,0,1.4-.3,2-.9l13.4-13.6c.6-.6.9-1.3.9-2,0-.7-.4-1.4-1-2l-7.7-6.8c-.2-.2-.3-.3-.5-.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  </g>
                  <g>
                    <path d="M283.4,90.9l-1.1-1c-5.6-5.2-14.3-5-19.7.5l-1.8,1.8c-5.4,5.4-5.5,14.2-.2,19.7l1,1.1-2.9-.4-4.7-9.5.8-7.3,4.6-6.5,6.3-4.4s5.6-1.3,5.8-1.3c.2,0,6,.4,6.6.7.6.3,4.9,3.6,4.9,3.7,0,.2.2,2.9.2,2.9Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                    <path d="M258.6,112.9l-4.8-9.7.9-7.5,4.7-6.6,6.4-4.4h0c.6-.1,5.6-1.3,5.9-1.4.2,0,6.1.4,6.8.7.4.2,2.2,1.5,2.7,1.9,2.3,1.8,2.3,1.9,2.4,2,0,.2.2,2.1.2,2.9v.8s-1.6-1.6-1.6-1.6c-5.5-5.1-14-4.9-19.3.5l-1.8,1.8c-5.3,5.3-5.4,13.8-.2,19.3l1.6,1.7-3.9-.5ZM254.4,103.1l4.6,9.2,1.9.2-.4-.5c-5.4-5.7-5.3-14.6.2-20.1l1.8-1.8c5.5-5.6,14.4-5.8,20.1-.5l.5.5c0-.8-.1-1.7-.1-2-.5-.5-4.2-3.4-4.7-3.6-.5-.2-5.9-.7-6.4-.6-.2,0-3.5.8-5.8,1.3l-6.2,4.3-4.6,6.4-.8,7.2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  </g>
                  <g>
                    <path d="M261.7,88.8c5.4-5.2,13.8-5.2,19.3-.2l7.7,7.1,2-2.1-7.7-7.1c-6.6-6.1-16.8-6-23.2.2l-2.5,2.5c-6.1,6.5-6.1,16.8,0,23.2l7.2,7.6,2.1-2-7.2-7.6c-5.1-5.4-5.2-13.9,0-19.3l2.4-2.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                    <path d="M264.5,120.5l-7.4-7.8c-6.3-6.6-6.3-17,0-23.7l2.5-2.5c6.6-6.3,17-6.4,23.7-.2l7.9,7.3-2.4,2.6-7.9-7.3c-5.3-4.9-13.6-4.9-18.9.2l-2.4,2.4c-5,5.3-4.9,13.6,0,18.9l7.4,7.8-2.5,2.4ZM281.5,85.8c-6.4-4.9-15.6-4.5-21.6,1.2l-2.5,2.5c-6,6.4-6,16.4,0,22.8l7,7.3,1.6-1.6-7-7.3c-5.2-5.5-5.3-14.2,0-19.7l2.4-2.4c5.5-5.3,14.1-5.3,19.7-.2l7.4,6.9,1.5-1.7-7.4-6.9c-.4-.4-.8-.7-1.2-1Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  </g>
                </g>
                <g>
                  <circle cx="296.3" cy="133.1" r="14.3" transform="translate(-27.4 160.4) rotate(-29)" fill="#fff" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M281.9,133c0-2.7.7-5.3,2.2-7.6,4.2-6.7,13.1-8.8,19.9-4.6,3.3,2,5.5,5.2,6.4,9,.9,3.8.2,7.6-1.8,10.9-2,3.3-5.2,5.5-9,6.4-3.8.9-7.6.2-10.9-1.8h0c-3.3-2-5.5-5.2-6.4-9-.3-1.1-.4-2.2-.4-3.3ZM310.4,133.1c0-1.1-.1-2.1-.4-3.2-.8-3.7-3.1-6.8-6.3-8.8-6.6-4.1-15.3-2.1-19.4,4.5-2,3.2-2.6,7-1.8,10.7.8,3.7,3.1,6.8,6.3,8.8h0c3.2,2,7,2.6,10.7,1.8,3.7-.8,6.8-3.1,8.8-6.3,1.4-2.3,2.1-4.8,2.1-7.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
              </g>
            </g>
            <g id="People">
              <g>
                <g>
                  <g>
                    <path d="M330.5,1058.9c-.8,0-3.8-.1-5.3-1.4.2-.5.8-2.4,1.4-3.3.9-1.1,3.6-3.8,5.8-5,2.4-1.3,2.2-5.4,2.2-5.5,0,0-.3-2.7.5-4.7.7-1.6,2.1-1.8,2.6-1.8s.5,0,.7,0c.5.2.7,1.2.8,2.2.1.9-.2,2.3-.7,4l-.2.9c-.6,2.2-.5,3.3-.4,4.8.1,1.1-1.1,1.7-3,2.4-1,.3-1.3,1.4-1.7,2.5-.5,1.4-1,3.1-2.7,3.9h-.2c0,0,.1.9.1.9Z" fill="#fff"/>
                    <path d="M337.8,1037.5h0c.4,0,.6,0,.6,0,.4.1.5,1.2.6,2,.1.8-.2,2.2-.7,3.9l-.2.9c-.6,2.3-.5,3.4-.4,4.8,0,.8-.7,1.4-2.9,2.1-1.1.4-1.4,1.5-1.8,2.7-.4,1.4-1,3-2.6,3.8l-.3.2v.4c0,0,.1.3.1.3-1,0-3.4-.2-4.7-1.2.2-.7.7-2.3,1.3-3,.8-1.1,3.6-3.8,5.8-5,2.6-1.4,2.3-5.6,2.3-5.8,0,0-.3-2.6.5-4.6.6-1.4,1.7-1.6,2.4-1.6M337.8,1037c-.9,0-2.2.4-2.9,1.9-.9,2.1-.5,4.8-.5,4.8,0,0,.3,4-2.1,5.3-2.3,1.3-5.1,4-5.9,5.1-.8,1.1-1.5,3.5-1.5,3.5,1.7,1.5,4.9,1.6,5.7,1.6s.2,0,.2,0v-.9c3.2-1.6,2.3-5.8,4.2-6.4,1.9-.6,3.3-1.3,3.2-2.6s-.2-2.4.4-4.7c.6-2.3,1.1-4,.9-5-.1-1-.3-2.2-1-2.4-.2,0-.5-.1-.8-.1h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M338.7,1036.9c.8.3.9,1.4,1.1,2.5h0c.1,1-.2,2.3-.7,4.2,0,.3-.2.6-.2.9-.5,2.2-.5,3.2-.4,4.6.2,1.5-1.6,2.3-3.3,2.8-.8.3-1.1,1.2-1.4,2.3-.5,1.4-1,3.2-2.8,4.1v.8c.1,0,.1.1,0,.1,0,0,0,0-.1,0-.2,0-4.1,0-6-1.6,0,0,0-.1,0-.2,0-.1.7-2.5,1.6-3.6.9-1.2,3.7-3.9,6-5.1.6-.3,1.4-1.1,1.8-3,.2-1.1.2-2.1.2-2.1,0-.2-.3-2.8.6-4.9.9-2.1,3-2.2,3.9-1.9h0ZM330.6,1059v-.7c-.1,0,0-.2,0-.2,1.8-.9,2.3-2.5,2.8-4,.4-1.2.7-2.2,1.6-2.5,2-.7,3.2-1.3,3.1-2.4-.1-1.4-.2-2.5.4-4.7,0-.3.2-.6.2-.9.5-1.8.8-3.2.7-4h0c-.1-1-.3-2-.8-2.2h0c-.5-.2-2.6-.4-3.4,1.7-.8,2-.5,4.7-.5,4.7,0,0,0,0,0,0,0,.2.2,4.2-2.2,5.5-2.3,1.2-5,3.9-5.9,5-.7.9-1.3,2.9-1.5,3.3,1.6,1.3,4.6,1.4,5.5,1.4Z" fill="#fff"/>
                    <path d="M337.8,1036.8c-1,0-2.4.4-3,2-.9,2.1-.6,4.7-.6,4.9,0,0,0,1-.2,2.1-.4,1.9-1.2,2.7-1.8,3-2.3,1.3-5.1,4-6,5.1-.9,1.1-1.5,3.5-1.6,3.6,0,0,0,.1,0,.2,1.7,1.5,5,1.6,5.8,1.6s.2,0,.2,0c0,0,.1,0,.1,0,0,0,0,0,0-.1v-.8c1.7-1,2.3-2.7,2.7-4.1.3-1.1.6-2,1.4-2.3,1.7-.6,3.5-1.3,3.3-2.8-.1-1.4-.2-2.4.4-4.6,0-.3.2-.6.2-.9.5-1.9.8-3.2.7-4.2h0c-.1-1.1-.3-2.3-1.1-2.5h0c-.2,0-.5-.1-.8-.1h0ZM330.6,1059c-.8,0-3.9-.1-5.5-1.4.1-.5.7-2.4,1.5-3.3.9-1.1,3.6-3.8,5.9-5,2.4-1.3,2.2-5.3,2.2-5.5,0,0,0,0,0,0,0,0-.3-2.7.5-4.7.6-1.5,1.9-1.8,2.7-1.8s.6,0,.7,0h0c.6.2.7,1.3.8,2.2h0c.1.9-.2,2.3-.7,4,0,.3-.2.6-.2.9-.6,2.2-.5,3.3-.4,4.7.1,1.1-1.1,1.8-3.1,2.4-.9.3-1.3,1.3-1.6,2.5-.5,1.4-1,3.1-2.8,4,0,0-.1.1-.1.2v.7h.1Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M343.8,1064.9c-1.4,0-3.9-1.7-4.8-2.3-.2-.1-.3-.2-.4-.3-.4-.2-1.2-1.7-1.5-2.9-.3-1.2-1.7-2-1.8-2.1h0s0,0,0,0c-.4,0-.7.1-1,.1-.7,0-1.2-.2-1.6-.6-.7-.8-.6-2.3-.5-3.3v-.4c.1-1.6-.8-3-1.6-4.1-.5-.6.2-2.3.5-3.2.1-.3.2-.5.2-.7.1-.4.5-.7.9-.7s.6.1.9.3c.6.5.5,2.5.5,3.2,0,.2,0,.4,0,.5,0,.2.4.7,1.4,2,.8,1,1.8,2.2,2.5,3.3.8,1.2,2.5,2.3,4.1,3.4,1.2.8,2.4,1.6,3.2,2.4,1.7,1.7,0,4.7-.4,5.2-.1,0-.2,0-.4,0h0Z" fill="#fff"/>
                    <path d="M332,1044.9h0c.2,0,.5.1.7.3.3.3.5,1.3.4,3,0,.2,0,.4,0,.5,0,.3.3.7,1.4,2.1.8,1,1.8,2.2,2.4,3.3.8,1.3,2.5,2.4,4.1,3.4,1.2.8,2.4,1.5,3.2,2.4,1.5,1.5,0,4.2-.3,4.8,0,0-.1,0-.2,0-1.4,0-3.8-1.6-4.7-2.2-.2-.1-.3-.2-.4-.3-.3-.2-1.1-1.6-1.3-2.7-.3-1.2-1.7-2.1-1.9-2.2h-.2c0,0-.2,0-.2,0-.3,0-.7,0-1,0-.6,0-1.1-.2-1.4-.5-.7-.7-.5-2.2-.4-3.1,0-.2,0-.3,0-.4.1-1.6-.9-3.1-1.7-4.2-.4-.5.3-2.2.6-3,.1-.3.2-.5.2-.7,0-.3.3-.5.6-.5M332,1044.4c-.5,0-1,.3-1.1.8-.3.9-1.4,3.3-.7,4.1.7.9,1.7,2.3,1.6,3.9,0,1.4-.7,4.6,2.3,4.6s.7,0,1-.1c0,0,1.4.8,1.7,1.9s1.1,2.8,1.6,3c.4.2,3.6,2.6,5.4,2.6s.4,0,.5,0c0,0,2.4-3.6.4-5.6-2-2-6-3.6-7.3-5.7-1.3-2.1-3.8-4.7-3.8-5.1,0-.4.4-3.2-.5-3.9-.4-.3-.7-.4-1.1-.4h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M332.5,1044.3c.2,0,.4.2.6.3.8.6.7,2.6.6,3.6,0,.2,0,.4,0,.4,0,.2.7,1,1.3,1.7.8,1,1.8,2.2,2.5,3.3.7,1.2,2.4,2.2,3.9,3.2,1.2.8,2.4,1.6,3.3,2.4.9.9,1.1,2.2.6,3.7-.4,1.2-.9,2.1-1,2.1,0,0,0,0,0,0-1.3.5-3.7-.9-5.7-2.2-.2-.1-.3-.2-.4-.2-.3-.2-.7-.9-.9-1.3-.3-.6-.6-1.3-.7-1.9-.2-.9-1.3-1.6-1.5-1.8-1.2.2-2.2,0-2.8-.5-1-.9-.9-2.6-.8-3.8,0-.2,0-.3,0-.4,0-1.4-.8-2.8-1.6-3.8-.6-.8,0-2.5.5-3.7,0-.3.2-.5.2-.6.1-.4.4-.8.9-.9.3-.1.6,0,1,0ZM344.2,1064.9c.1-.2.6-1,.9-2,.4-1.4.3-2.6-.5-3.3-.9-.8-2.1-1.6-3.3-2.4-1.6-1-3.3-2.1-4.1-3.4-.7-1.1-1.7-2.3-2.5-3.3-1-1.2-1.4-1.7-1.4-1.9,0,0,0-.2,0-.5,0-.8.2-2.8-.5-3.3-.4-.3-.9-.4-1.3-.3-.3,0-.5.3-.6.6,0,.2-.1.4-.2.7-.4,1-1,2.7-.5,3.3.8,1.1,1.8,2.5,1.7,4,0,.1,0,.3,0,.4,0,1.1-.2,2.7.6,3.5.5.5,1.4.6,2.5.4,0,0,0,0,.1,0,0,0,1.5.9,1.8,2,.3,1.1,1.1,2.7,1.5,2.9,0,0,.2.1.4.3,1,.7,4,2.7,5.3,2.2ZM333.8,1048.6h0s0,0,0,0Z" fill="#fff"/>
                    <path d="M332,1044.2c-.1,0-.3,0-.4,0-.4.1-.7.5-.9.9,0,.2-.1.4-.2.6-.4,1.1-1.1,2.9-.5,3.7.8,1,1.7,2.3,1.6,3.8,0,.1,0,.3,0,.4,0,1.1-.2,2.9.8,3.8.4.4,1,.6,1.8.6s.6,0,1,0c.3.2,1.3.9,1.5,1.8.1.5.4,1.2.7,1.9.2.4.6,1.1.9,1.3,0,0,.2.1.4.2,1.7,1.1,3.7,2.4,5.1,2.4s.4,0,.6-.1c0,0,0,0,0,0,0,0,.6-.9,1-2.1.5-1.6.3-2.9-.6-3.7-.9-.9-2.1-1.7-3.3-2.4-1.6-1-3.2-2.1-3.9-3.2-.7-1.1-1.7-2.3-2.5-3.3-.6-.8-1.2-1.5-1.3-1.7,0,0,0-.2,0-.4,0-1,.2-3-.6-3.6-.2-.1-.4-.3-.6-.3-.2,0-.4,0-.6,0h0ZM334.1,1057.6c-.7,0-1.2-.2-1.5-.5-.9-.8-.7-2.4-.6-3.5,0-.2,0-.3,0-.4.1-1.5-.8-3-1.7-4-.5-.6.1-2.3.5-3.3,0-.3.2-.5.2-.7,0-.3.3-.6.6-.6.1,0,.2,0,.3,0,.3,0,.6.1.9.4.7.5.5,2.5.5,3.3,0,.2,0,.4,0,.5,0,.2.4.7,1.4,1.9.8,1,1.8,2.2,2.5,3.3.8,1.2,2.4,2.3,4.1,3.4,1.2.8,2.4,1.6,3.3,2.4.8.8,1,1.9.5,3.3-.3,1-.8,1.8-.9,2-.1,0-.3,0-.4,0-1.4,0-4-1.7-4.9-2.3-.2-.1-.3-.2-.4-.3-.4-.2-1.2-1.8-1.5-2.9-.3-1.1-1.7-2-1.8-2,0,0,0,0,0,0s0,0,0,0c-.4,0-.7.1-1,.1h0ZM333.8,1048.6h0s0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M335.6,1080.2c-8.7-.1-13-4.5-13.6-5.2.2-.4.5-1.3.6-1.7,0-.5.2-1.1.6-1.7.4-.6.6-2.5.7-6.5,0-2.4,1.1-6.4,1.3-7.2,0,0,.2,0,.3,0,.6,0,1.2.2,1.2.2.5.5,1.4.7,2.4.7s1.5-.2,1.7-.2c.2,0,.9.2,1.2.7.4.7.9,1,1.2,1.2l-1.6,3.8c0,1.4.2,3.8.2,3.9v.4s2-1.1,2-1.1l4.1-3.7.7-.7c1.5.9,2.6,1,3.4,1s.6,0,.7,0c.7.3,1.4.9,1.6,1.5,0,.2,0,.3,0,.5-.3.7-2.8,4.4-2.8,4.5-.5,1.5-1.4,2.1-1.4,2.1h0s-.2.8-.2.8l-1,.6c0,0-.6.8-.9,2.5-.3,1.4-1.9,3.4-2.2,3.9Z" fill="#fff"/>
                    <path d="M325.5,1058c.4,0,.8.1,1,.2.7.5,1.5.8,2.5.8s1.4-.2,1.7-.2c.3,0,.8.2,1,.6.4.6.8,1,1.1,1.2l-1.5,3.6h0c0,0,0,.2,0,.2,0,1.3.2,3.8.2,3.9v.8c0,0,.7-.4.7-.4l1.6-.9h0s0,0,0,0l4-3.7.5-.6c1.4.8,2.6,1,3.3,1s.5,0,.7,0c.6.3,1.2.9,1.4,1.3,0,.1,0,.2,0,.3-.3.6-2.1,3.4-2.8,4.4h0c0,0,0,.1,0,.1-.4,1.3-1.2,1.9-1.2,1.9h-.1c0,0,0,.3,0,.3l-.2.6-.9.6h0c0,0,0,.1,0,.1,0,0-.6.8-.9,2.5-.3,1.2-1.6,3.1-2.1,3.7-8.2-.1-12.3-4.1-13.2-5,.2-.4.5-1.2.6-1.7,0-.4.2-1,.5-1.5.4-.6.7-2.5.7-6.7,0-2.2,1-5.9,1.2-7,0,0,0,0,.1,0M325.5,1057.5c-.2,0-.4,0-.5,0,0,0-1.3,4.7-1.3,7.4s-.2,5.8-.6,6.4c-.5.6-.6,1.3-.6,1.8s-.6,1.8-.6,1.8c0,0,4.2,5.3,14,5.4,0,0,2-2.5,2.4-4.1.3-1.6.8-2.3.8-2.3l1.1-.7.2-.7s.9-.7,1.4-2.2c0,0,2.5-3.8,2.8-4.5.3-.7-.9-2-1.9-2.3,0,0-.3,0-.7,0-.7,0-1.9-.2-3.4-1.1l-.8.9-4,3.7-1.6.9s-.2-2.5-.2-3.8l1.7-4s-.7-.2-1.3-1.2c-.4-.7-1.5-.8-1.5-.8,0,0-.7.2-1.7.2s-1.6-.2-2.3-.7c0,0-.7-.2-1.3-.2h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M331.2,1058.2c.4.1.8.4,1.1.8.5.9,1.2,1.1,1.2,1.1,0,0,0,0,.1,0,0,0,0,.1,0,.2l-1.6,4c0,1,.1,2.8.2,3.5l1.3-.8,4-3.7.8-.8c0,0,.2,0,.2,0,1.2.8,2.3,1,2.9,1.1.7,0,1.1,0,1.1,0,0,0,0,0,.1,0,.8.3,1.7,1.1,1.9,1.8.1.3.1.6,0,.8-.3.7-2.6,4.2-2.8,4.5-.4,1.3-1.2,2-1.4,2.2l-.2.7s0,0,0,.1l-1,.6c0,.1-.5.8-.8,2.2-.3,1.7-2.3,4.1-2.4,4.2,0,0,0,0-.1,0-5.1,0-8.7-1.5-10.8-2.8-2.3-1.3-3.3-2.7-3.4-2.7,0,0,0-.1,0-.2.2-.4.6-1.4.6-1.7h0c0-.5.2-1.2.7-1.9.5-.7.6-4.9.6-6.3,0-2.7,1.3-7.3,1.3-7.4,0,0,0-.1.1-.1.7-.3,1.9.1,1.9.1,0,0,0,0,0,0,1.4,1.2,3.8.5,3.8.5,0,0,0,0,0,0,0,0,.2,0,.5.1ZM333.2,1060.4c-.3-.1-.8-.5-1.2-1.2-.3-.5-1.1-.7-1.3-.7-.2,0-.7.2-1.4.2-1.1,0-2-.2-2.6-.7h0c-.3-.1-1.1-.3-1.6-.2-.2.7-1.3,4.8-1.3,7.3,0,4-.3,6-.7,6.5-.4.6-.5,1.2-.6,1.7h0c0,.5-.5,1.4-.6,1.8.3.3,1.3,1.4,3.2,2.6,2,1.2,5.5,2.7,10.5,2.7.3-.4,2-2.5,2.3-3.9.3-1.6.8-2.3.9-2.4,0,0,0,0,0,0l1-.6.2-.7s0,0,0,0c0,0,.9-.7,1.4-2.1,0,0,0,0,0,0,0,0,2.5-3.8,2.8-4.5,0-.1,0-.3,0-.5-.2-.6-1-1.3-1.7-1.5-.2,0-.6.1-1.2,0-.7,0-1.7-.3-3-1,0,0-.7.7-.7.8l-4,3.7s0,0,0,0l-1.6.9c0,0-.1,0-.2,0,0,0,0,0,0-.1,0-.1-.2-2.5-.2-3.8,0,0,0,0,0,0l1.6-3.8ZM338.9,1074.1h0s0,0,0,0Z" fill="#fff"/>
                    <path d="M325.5,1057.4c-.2,0-.4,0-.6.1,0,0,0,0-.1.1,0,.2-1.3,4.7-1.3,7.4,0,1.4-.1,5.6-.6,6.3-.5.7-.6,1.4-.7,1.8h0c0,.4-.5,1.4-.6,1.8,0,0,0,.1,0,.2,0,0,1.1,1.4,3.4,2.7,2.1,1.2,5.7,2.7,10.8,2.8h0c0,0,.1,0,.1,0,0-.1,2.1-2.5,2.4-4.2.3-1.4.7-2.1.8-2.2l1-.6s0,0,0-.1l.2-.7c.2-.2,1-.9,1.4-2.2.2-.3,2.5-3.8,2.8-4.5.1-.2.1-.5,0-.8-.3-.7-1.1-1.5-1.9-1.8,0,0,0,0,0,0s0,0,0,0c0,0-.3,0-.7,0s-.3,0-.4,0c-.6,0-1.7-.3-2.9-1.1,0,0,0,0,0,0,0,0-.1,0-.1,0l-.8.8-4,3.7-1.3.8c0-.7-.2-2.4-.2-3.5l1.6-4s0-.1,0-.2,0,0-.1,0c0,0-.7-.2-1.2-1.1-.3-.4-.7-.7-1.1-.8-.3,0-.5-.1-.5-.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0-.7.2-1.6.2s-1.5-.1-2.2-.7c0,0,0,0,0,0,0,0-.7-.2-1.3-.2h0ZM335.6,1080.3c-5,0-8.5-1.5-10.5-2.7-1.9-1.1-3-2.3-3.2-2.6.1-.3.5-1.3.6-1.7h0c0-.5.2-1.1.6-1.7.4-.5.6-2.5.7-6.5,0-2.5,1.1-6.6,1.3-7.3.1,0,.2,0,.4,0,.4,0,.9.1,1.2.2h0c.6.5,1.4.7,2.4.7s.2,0,.3,0c.7,0,1.2-.2,1.4-.2.2,0,1,.2,1.3.7.4.7,1,1.1,1.2,1.2l-1.6,3.8s0,0,0,0c0,1.3.2,3.7.2,3.8,0,0,0,.1,0,.1,0,0,0,0,0,0s0,0,0,0l1.6-.9s0,0,0,0l4-3.7s.7-.8.7-.8c1.3.7,2.3,1,3,1,.2,0,.3,0,.4,0,.4,0,.6,0,.7,0,.7.3,1.4,1,1.7,1.5,0,.2,0,.4,0,.5-.3.7-2.8,4.4-2.8,4.5,0,0,0,0,0,0-.5,1.4-1.3,2.1-1.4,2.1,0,0,0,0,0,0l-.2.7-1,.6s0,0,0,0c0,0-.5.7-.9,2.4-.3,1.4-1.9,3.5-2.3,3.9h0ZM338.9,1074.1h0s0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M316,1100.8c0-.4-.4-1.6,0-2.5.2-.4,1.3-.9,2.7-.9s3.8.4,4.9,3.9l-2.2,1.7-5.4-2.3Z" fill="#fff"/>
                    <path d="M318.6,1097.6h0c1.3,0,3.6.5,4.6,3.6l-2,1.5-5.1-2.2c-.1-.4-.3-1.5,0-2.2.1-.2,1.1-.7,2.4-.7M318.6,1097.1c-1.5,0-2.7.5-2.9,1-.5,1.1,0,2.8,0,2.8l5.6,2.4,2.5-1.9c-.9-3.3-3.3-4.3-5.2-4.3h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M320.5,1097.2c1.3.5,2.8,1.5,3.5,4.1,0,0,0,.2,0,.2l-2.5,1.9c0,0-.1,0-.2,0l-5.6-2.4c0,0,0,0-.1-.1,0,0-.5-1.7,0-2.9.3-.6,1.7-1.2,3.4-1.1.4,0,.9.1,1.5.3ZM323.6,1101.3c-1-3.3-3.3-3.9-4.6-4-1.6,0-2.9.5-3.1.9-.4.9,0,2.2,0,2.6l5.4,2.3,2.3-1.8Z" fill="#fff"/>
                    <path d="M318.6,1096.9c-1.5,0-2.8.6-3,1.2-.5,1.2,0,2.8,0,2.9,0,0,0,0,.1.1l5.6,2.4s0,0,0,0c0,0,0,0,.1,0l2.5-1.9c0,0,0-.1,0-.2-.7-2.6-2.2-3.7-3.5-4.1-.5-.2-1.1-.3-1.5-.3-.1,0-.3,0-.4,0h0ZM321.3,1103.1l-5.4-2.3c0-.3-.4-1.6,0-2.6.2-.4,1.3-.9,2.7-.9s.2,0,.3,0c1.3,0,3.6.7,4.6,4l-2.3,1.8h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M315.8,1112.3c-.3,0-.7,0-1-.1-1.6-.4-2.7-1.3-3.1-2.5-.5-1.4,0-3.1,1.1-4.8l.2-.3h-.3c0,0-.2-.2-.2-.3,0,0,0-.2,0-.4.3-.6,1-1.4,1.6-1.4s.2,0,.3,0h.2c0,0,.1,0,.1,0,0,0,1.9-1.8,2.7-3.2.6.4,2.2,1.3,4.3,1.9-.2.4-.4,1-.5,1.6,0,.8-.3,2.6-.3,2.6v.2s.2,0,.2,0c0,0,.5.1.3,1-.3,1.5-.5,1.6-.5,1.6s-.1,0-.2-.2l-.3-.3v.4c-.1,0-1.6,4-4.6,4h0Z" fill="#fff"/>
                    <path d="M317.4,1099.6c.7.4,2.1,1.2,3.9,1.7-.2.4-.3.9-.4,1.4,0,.8-.3,2.6-.3,2.6v.5c0,0,.4,0,.4,0,.1,0,.2.2.2.7-.1.8-.3,1.2-.3,1.3l-.6-.6-.3.8s-1.4,3.9-4.2,3.9-.6,0-.9-.1c-1.5-.4-2.5-1.2-2.9-2.3-.5-1.3,0-3,1.1-4.6l.4-.5-.6-.2s0,0,0,0c0,0,0,0,0-.2.3-.5.9-1.3,1.3-1.3s.1,0,.2,0l.3.2.3-.2c0,0,1.8-1.6,2.6-3.1M317.2,1098.8c-.6,1.5-2.7,3.4-2.7,3.4-.1,0-.3,0-.4,0-.8,0-1.5,1-1.8,1.6-.3.7.3.9.3.9-2.3,3.1-1.9,6.6,2.1,7.7.4.1.7.1,1.1.1,3.2,0,4.7-4.2,4.7-4.2.2.2.3.2.4.2.4,0,.6-.9.8-1.8.2-1.2-.5-1.3-.5-1.3,0,0,.3-1.8.3-2.7s.6-1.8.6-1.8c-2.8-.7-4.8-2.1-4.8-2.1h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M317.3,1098.7s0,0,0,0c0,0,1.9,1.4,4.7,2.1,0,0,.1,0,.1.1,0,0,0,.1,0,.2,0,0-.5.9-.6,1.7,0,.7-.2,2.1-.3,2.5.1,0,.2.1.4.3.2.3.3.7.2,1.1-.2,1.1-.4,1.8-.8,2-.1,0-.3,0-.5,0-.2.4-.6,1.4-1.3,2.2-1.3,1.6-2.9,2.2-4.6,1.7-1.7-.5-2.9-1.4-3.4-2.8-.5-1.5-.1-3.3,1.1-5,0,0-.2-.2-.3-.3,0-.2,0-.5,0-.7.2-.5.8-1.4,1.5-1.6.3,0,.5,0,.8,0,.4-.4,2.1-2,2.6-3.3,0,0,0,0,.1-.1,0,0,0,0,.1,0ZM320.7,1100.8c-1.7-.6-3-1.4-3.4-1.7-.7,1.5-2.6,3.2-2.7,3.3,0,0-.1,0-.2,0-.2,0-.4-.1-.6,0-.6.2-1.1,1-1.3,1.4,0,.2,0,.3,0,.4,0,.2.2.2.2.2,0,0,.1,0,.1.1,0,0,0,.1,0,.2-1.2,1.7-1.7,3.5-1.2,4.9.4,1.2,1.5,2.1,3.1,2.5,1.6.4,3-.1,4.2-1.6.9-1.1,1.4-2.4,1.4-2.4,0,0,0-.1.1-.1,0,0,.1,0,.2,0,0,0,.2.2.3.2.3,0,.5-1.3.6-1.7,0-.4,0-.7-.1-.9-.1-.2-.3-.2-.3-.2-.1,0-.2-.1-.2-.2,0,0,.3-1.8.3-2.6,0-.6.3-1.3.5-1.7-.3,0-.7-.2-1-.3Z" fill="#fff"/>
                    <path d="M317.2,1098.6s0,0,0,0c0,0,0,0-.1.1-.5,1.2-2.2,2.9-2.6,3.3-.1,0-.2,0-.4,0s-.3,0-.4,0c-.7.3-1.3,1.1-1.5,1.6-.1.3-.1.5,0,.7,0,.1.2.2.3.3-1.2,1.7-1.6,3.6-1.1,5,.5,1.3,1.6,2.3,3.4,2.8.4.1.7.2,1.1.2,1.3,0,2.5-.6,3.5-1.8.7-.9,1.1-1.8,1.3-2.2.1,0,.2.1.3.1s0,0,.1,0c.4-.1.6-.8.8-2,0-.5,0-.9-.2-1.1-.1-.2-.3-.2-.4-.3,0-.5.2-1.8.3-2.5,0-.8.5-1.7.6-1.7,0,0,0-.1,0-.2,0,0,0,0-.1-.1-2.8-.7-4.7-2.1-4.7-2.1,0,0,0,0,0,0,0,0,0,0,0,0h0ZM314.5,1102.5s0,0,.1,0c0,0,2-1.8,2.7-3.3.5.3,1.7,1.1,3.4,1.7.3.1.6.2,1,.3-.2.3-.5,1-.5,1.7,0,.8-.3,2.6-.3,2.6,0,.1,0,.2.2.2,0,0,.2,0,.3.2.1.2.2.5.1.9,0,.4-.3,1.6-.6,1.7,0,0,0,0,0,0,0,0-.2-.1-.3-.2,0,0,0,0-.1,0s0,0,0,0c0,0-.1,0-.1.1,0,0-.5,1.3-1.4,2.4-.9,1.1-2,1.7-3.1,1.7s-.7,0-1-.1c-1.6-.4-2.7-1.3-3.1-2.5-.5-1.4,0-3.2,1.2-4.9,0,0,0-.1,0-.2,0,0,0-.1-.1-.1,0,0-.2,0-.2-.2,0-.1,0-.2,0-.4.2-.5.8-1.2,1.3-1.4,0,0,.2,0,.3,0s.2,0,.3,0c0,0,0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M326.8,1103.3c-.2,0-.4-.2-.5-.5,0-.3-.5-.5-.9-.6-.5-.2-1.1-.4-1.5-.9-.4-.6-.4-.7-.4-.7v-.4c0,0-.4.2-.4.2-.2.1-.6.3-1.2.3-.9,0-4-1.5-4.6-2.1-.2-.2-.3-.3-.3-.3-.3-.3-.4-.3-.9-.4-.2,0-.4,0-.6,0-.6,0-1.6,0-1.8-.3-.1-.1-.2-.3-.2-.4-.1-.2-.2-.5-.7-.7-.5-.2-.5-.5-.7-1.5-.1-.8-.6-1.4-.9-1.9,0-.1-.2-.2-.2-.3,0-.2,0-.2,0-.3,0,0,.1-.2.6-.4.5-.2,1.1-.8,1.6-1.3.3-.3.6-.6.8-.7.6-.4,1.1-1,1.1-1,0,0,.8-1.8,3.1-4.8,1.4-1.9,3.8-5.3,3.5-6.9-.1-.8.3-2.3.5-2.9,1,.7,4.1,3,7.1,3.8,2.9.7,6.9,1.1,8.2,1.2l-2.8,5.3-1.5,3.6c0,.3-1.4,6.4-1.5,7.5,0,.3,0,.6,0,.9,0,.7,0,1.2-.5,1.8-.9.9-1.4,2.2-1.5,2.8,0,.5-.8,1.4-1.3,1.4-.5,0-.7.2-.9.3,0,0-.2.1-.3.2,0,0,0,0-.1,0Z" fill="#fff"/>
                    <path d="M322.2,1074.9c1.2.9,4.2,2.9,6.9,3.6,2.7.7,6.3,1,7.8,1.1l-2.6,5-1.5,3.6h0s0,0,0,0c0,.3-1.4,6.4-1.5,7.5,0,.3,0,.7,0,1,0,.7,0,1.1-.4,1.6-.9,1-1.5,2.3-1.6,2.9,0,.4-.8,1.2-1,1.2-.6,0-.8.2-1.1.4,0,0-.2.1-.3.2,0,0-.2-.1-.2-.3-.1-.5-.6-.6-1-.8-.5-.2-1-.3-1.3-.8-.1-.2-.2-.3-.3-.4l.4-.3-.6-.3s-.2,0-.3,0h-.3s-.1.2-.1.2c0,0,0,0,0,0-.2,0-.5.2-.9.2h0c-.8,0-3.8-1.5-4.4-2-.2-.1-.3-.3-.3-.3-.3-.4-.5-.4-1.1-.4-.2,0-.4,0-.6,0-.4,0-1.4,0-1.6-.2,0-.1-.1-.2-.2-.3-.1-.3-.3-.6-.9-.8-.3-.1-.4-.2-.5-1.3-.1-.9-.6-1.5-1-2,0-.1-.2-.2-.2-.3,0,0,0,0,0,0,0,0,.1-.1.5-.3.6-.2,1.2-.8,1.7-1.3.3-.3.6-.6.7-.7.6-.4,1.1-1,1.1-1.1h0s0-.1,0-.1c0,0,.7-1.7,3-4.7,1.8-2.3,3.8-5.4,3.6-7.1,0-.6.2-1.7.4-2.5M321.9,1074.1s-.8,2.2-.6,3.4-1.1,3.6-3.5,6.7-3.1,4.8-3.1,4.8c0,0-.4.6-1,.9s-1.5,1.7-2.3,2-.9.7-.7,1.1,1,1.1,1.1,2.1c.1,1,.2,1.4.8,1.7.6.3.5.6.8,1,.4.4,1.9.3,2.6.4s.4,0,1.1.6c.6.6,3.8,2.1,4.8,2.1,0,0,0,0,0,0,.7,0,1.1-.3,1.3-.4,0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0,0,.1.1.3.4.8.7,1.1,2.2,1,2.3,1.4.1.4.4.7.7.7s.2,0,.3,0c.4-.2.5-.5,1.1-.5.6,0,1.4-1.1,1.5-1.6.1-.5.6-1.7,1.5-2.7.9-.9.5-1.8.6-2.9.1-1.1,1.5-7.4,1.5-7.4l1.5-3.6,3-5.6s-5-.3-8.5-1.2c-3.5-.9-7.3-3.9-7.3-3.9h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <polygon points="323.4 1100.6 323.4 1100.6 323.4 1100.6 323.4 1100.6" fill="#fff"/>
                    <path d="M321.9,1073.9s0,0,0,0c0,0-.1,0-.1.1,0,0-.8,2.3-.6,3.5.1,1.1-1.1,3.5-3.5,6.6-2.2,2.9-3,4.6-3.1,4.8,0,0-.5.6-.9.9-.3.2-.5.5-.9.8-.4.5-1,1-1.4,1.2-.5.2-.8.4-.9.7,0,.2,0,.4,0,.7,0,.1.2.2.3.4.3.4.7.9.8,1.7.1,1,.2,1.5.9,1.8.3.1.4.3.5.5,0,.1.1.3.3.5.3.4,1.1.4,2.1.4.2,0,.4,0,.6,0q.4,0,.6.2c0,0,.2.2.4.4.7.6,3.9,2.2,4.9,2.2,0,0,0,0,0,0,.6,0,1-.2,1.2-.3,0,.2.2.4.4.6.5.7,1.2.9,1.7,1.1.3,0,.6.2.6.3,0,.3.3.6.6.7.1,0,.2,0,.3,0s.2,0,.3,0c.2,0,.3-.2.4-.2.2-.1.3-.2.7-.2.4,0,.9-.4,1.1-.7.3-.4.6-.8.6-1.1.1-.5.6-1.7,1.4-2.6.7-.7.7-1.4.6-2.1,0-.3,0-.6,0-.9.1-1,1.4-7,1.5-7.4l1.4-3.6,2.9-5.6c0,0,0-.1,0-.2,0,0,0,0-.1,0,0,0,0,0,0,0,0,0-5.1-.3-8.5-1.2-1.8-.4-3.6-1.5-4.9-2.3-1.4-.9-2.3-1.6-2.3-1.6,0,0,0,0-.1,0h0ZM322,1100.8s0,0,0,0c-.9,0-4-1.5-4.6-2.1-.2-.2-.3-.3-.4-.3-.3-.3-.3-.3-.9-.3-.2,0-.4,0-.6,0-.6,0-1.6,0-1.8-.3-.1-.1-.2-.3-.2-.4-.1-.2-.2-.5-.7-.7-.5-.2-.6-.5-.7-1.5-.1-.8-.6-1.4-.9-1.8-.1-.1-.2-.2-.2-.3-.1-.2,0-.3,0-.3,0-.2.3-.3.7-.5.5-.2,1.1-.8,1.5-1.3.3-.3.6-.6.8-.7.6-.4,1-.9,1.1-1,0,0,0,0,0,0,0,0,.7-1.7,3-4.8,1.4-1.9,3.7-5.2,3.5-6.9-.1-.9.3-2.4.5-3,.9.6,4.1,3,7.2,3.8,3,.8,7.1,1.1,8.2,1.2l-2.8,5.4s0,0,0,0l-1.5,3.6s0,0,0,0c0,.3-1.4,6.4-1.5,7.4,0,.3,0,.6,0,.9,0,.7,0,1.3-.5,1.9-.9.9-1.4,2.2-1.5,2.7-.1.5-.9,1.5-1.3,1.5-.5,0-.7.2-.9.3,0,0-.2.1-.3.2,0,0-.1,0-.2,0s0,0-.1,0c0,0,0,0,0,0-.2,0-.3-.3-.4-.5,0-.3-.4-.4-.8-.6-.5-.2-1.1-.4-1.5-.9-.2-.4-.3-.5-.4-.7,0,0,0-.1,0-.2,0,0,0-.1,0-.1,0,0,0,0-.1,0,0,0-.1,0-.2,0,0,0,0,0,0,0-.2.1-.6.3-1.2.3h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <path d="M317.1,1092.6c0,0,.1,0,.1.2.1.8,0,1.8-.2,3-.2.9-.4,1.6-.4,1.6,0,0-.1.1-.2.1,0,0-.2-.1-.1-.2.1-1.1-.6-2.2-.6-2.2,0,0,0-.2,0-.3,0,0,.2,0,.3,0,0,0,.4.6.6,1.3.2-.9.5-2.3.3-3.4,0-.1,0-.2.2-.2,0,0,0,0,0,0Z" fill="#fff"/>
                  <path d="M317,1092.6s0,0,0,0c-.1,0-.2.1-.2.2.2,1.1,0,2.5-.3,3.4-.2-.7-.5-1.3-.6-1.3,0,0,0,0-.2,0s0,0-.1,0c0,0-.1.2,0,.3,0,0,.7,1.1.6,2.2,0,0,0,.2.1.2,0,0,0,0,0,0,0,0,.2,0,.2-.1,0,0,.2-.7.4-1.6.2-1.2.3-2.2.2-3,0,0,0-.1-.1-.2,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M314.2,1090.6s0,0,0,0c0,0,.1.1.1.2-1.1,2.8-.8,5.7-.8,5.7,0,.1,0,.2-.2.2-.1,0-.2,0-.2-.2,0-.1-.4-2.9.8-5.9,0,0,.1-.1.2-.1Z" fill="#fff"/>
                  <path d="M314.2,1090.6c0,0-.1,0-.2.1-1.2,2.9-.8,5.8-.8,5.9,0,0,0,.2.2.2s0,0,0,0c.1,0,.2-.1.2-.2,0,0-.4-2.8.8-5.7,0,0,0-.2-.1-.2,0,0,0,0,0,0,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M323.9,1094.7s0,0,0,0c0,0,.1.2,0,.2,0,0-.7,1.5-.2,3.2.2.8.2,1.4,0,1.9-.1.4-.3.6-.3.6,0,0-.2,0-.3,0,0,0,0-.2,0-.3,0,0,.6-.5.1-2.1-.5-1.8.2-3.4.2-3.5,0,0,.1-.1.2,0Z" fill="#fff"/>
                  <path d="M323.9,1094.7c0,0-.1,0-.2.1,0,0-.7,1.6-.2,3.5.4,1.6-.1,2.1-.1,2.1,0,0,0,.2,0,.3,0,0,0,0,.1,0s0,0,.1,0c0,0,.2-.2.3-.6.2-.5.1-1.2,0-1.9-.5-1.7.2-3.2.2-3.2,0,0,0-.2,0-.2,0,0,0,0,0,0,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M326.2,1085.4c0,0,.1,0,.2,0,2.1.8,2.6,3.2,2.7,3.3,0,.1,0,.2-.1.2-.1,0-.2,0-.2-.1,0,0-.5-2.4-2.4-3-2-.7-3.9-1-3.9-1-.1,0-.2-.1-.2-.2,0-.1.1-.2.2-.2,0,0,1.8.3,3.8.9Z" fill="#fff"/>
                  <path d="M322.3,1084.4c0,0-.2,0-.2.2,0,.1,0,.2.2.2,0,0,1.9.3,3.9,1,1.9.7,2.4,3,2.4,3,0,0,0,.1.2.1s0,0,0,0c.1,0,.2-.1.1-.2,0-.1-.5-2.6-2.7-3.3,0,0-.1,0-.2,0-2-.7-3.8-.9-3.8-.9,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M325.7,1078.4c.9.3,1.8.7,2.3,1.1,1.2,1,3.5,1.8,3.5,1.8,0,0,0,0,0,0,0,0,.1.1.1.2,0,0-.1.2-.2.1,0,0-2.3-.8-3.6-1.9-1.2-1-5.3-1.9-5.4-1.9-.1,0-.2-.1-.1-.2,0-.1.1-.2.2-.1.1,0,1.7.4,3.3.9Z" fill="#fff"/>
                  <path d="M322.4,1077.5c0,0-.2,0-.2.1,0,.1,0,.2.1.2,0,0,4.1.9,5.4,1.9,1.3,1.1,3.5,1.8,3.6,1.9,0,0,0,0,0,0,0,0,.2,0,.2-.1,0,0,0-.2-.1-.2,0,0,0,0,0,0,0,0-2.3-.8-3.5-1.8-.5-.4-1.4-.8-2.3-1.1-1.5-.5-3.2-.9-3.3-.9,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M331.2,1081.9s0,0,0,0l2.3,1.2c0,0,.1.2,0,.3,0,0-.2.1-.3,0l-2.3-1.2c0,0-.1-.2,0-.3,0,0,.1-.1.2,0Z" fill="#fff"/>
                  <path d="M331.1,1081.9c0,0-.1,0-.2,0,0,0,0,.2,0,.3l2.3,1.2s0,0,0,0c0,0,.1,0,.2,0,0,0,0-.2,0-.3l-2.3-1.2s0,0,0,0c0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M326.3,1059.2s0,0,0,0c4.5,1.6,5.1,4.2,5.2,4.3,0,0,0,.2-.1.2,0,0-.2,0-.2-.1,0,0-.7-2.5-4.9-4.1,0,0-.1-.1-.1-.2,0,0,.1-.1.2-.1Z" fill="#fff"/>
                  <path d="M326.2,1059.2c0,0-.1,0-.2.1,0,0,0,.2.1.2,4.2,1.6,4.9,4,4.9,4.1,0,0,0,.1.2.1s0,0,0,0c0,0,.2-.1.1-.2,0-.1-.7-2.7-5.2-4.3,0,0,0,0,0,0,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M344.5,1062.5s0,0,0,0c0,0,0,.2,0,.3,0,0-1.6,1.2-3.2,1-.1,0-.2-.1-.2-.2,0-.1.1-.2.2-.2,1.5.2,3-.9,3-.9,0,0,.1,0,.2,0Z" fill="#fff"/>
                  <path d="M344.4,1062.5s0,0-.1,0c0,0-1.3,1-2.6,1s-.2,0-.3,0c0,0,0,0,0,0,0,0-.2,0-.2.2,0,.1,0,.2.2.2.1,0,.3,0,.4,0,1.5,0,2.8-1,2.9-1,0,0,0-.2,0-.3,0,0,0,0,0,0,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M326.2,1056.4c0,0,.1,0,.1.2,0,0,.1.9,1,1.4,0,0,.1.2,0,.3,0,0-.2.1-.3,0-1-.6-1.1-1.6-1.1-1.7,0-.1,0-.2.2-.2,0,0,0,0,0,0Z" fill="#fff"/>
                  <path d="M326.1,1056.4s0,0,0,0c-.1,0-.2.1-.2.2,0,0,.1,1.1,1.1,1.7,0,0,0,0,0,0,0,0,.1,0,.2,0,0,0,0-.2,0-.3-.8-.5-1-1.3-1-1.4,0,0,0-.1-.1-.2,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M318.5,1101.6s0,0,0,0c0,0,0,0,0,.1,0,.3.1.4.4.7.4.3.9.8,1.5,2,1.1,2.1.1,3.9,0,4,0,0-.2.1-.3,0,0,0-.1-.2,0-.3,0,0,.9-1.7,0-3.6-.6-1.1-1.1-1.5-1.4-1.9-.2-.2-.4-.4-.5-.7-.3,0-1.1.3-1.9.2-1,0-2.6.7-3.6,2.5,0,0-.2.1-.3,0,0,0-.1-.2,0-.3.9-1.7,2.6-2.8,3.9-2.7,1.1,0,2-.2,2-.2,0,0,0,0,.1,0Z" fill="#fff"/>
                  <path d="M318.4,1101.6s0,0,0,0c0,0-.7.2-1.7.2s-.2,0-.3,0c0,0-.1,0-.2,0-1.3,0-2.9,1.1-3.8,2.7,0,0,0,.2,0,.3,0,0,0,0,0,0,0,0,.1,0,.2,0,1-1.7,2.4-2.5,3.4-2.5s0,0,.1,0c.1,0,.3,0,.4,0,.7,0,1.3-.1,1.6-.2,0,.3.3.4.5.7.4.3.8.8,1.4,1.9,1,1.9,0,3.6,0,3.6,0,0,0,.2,0,.3,0,0,0,0,0,0,0,0,.1,0,.2,0,0,0,1-1.9,0-4-.6-1.1-1.1-1.6-1.5-2-.3-.3-.4-.4-.4-.7,0,0,0-.1,0-.1,0,0,0,0,0,0,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M332.1,1067.9s0,0,0,0c0,0,.1.2,0,.3-3.4,6.3-3.7,9.6-3.7,9.6,0,.1,0,.2-.2.2-.1,0-.2,0-.2-.2,0-.1.2-3.4,3.7-9.8,0,0,.1-.1.2,0Z" fill="#fff"/>
                  <path d="M332,1067.9c0,0-.1,0-.2,0-3.5,6.4-3.7,9.6-3.7,9.8,0,.1,0,.2.2.2,0,0,0,0,0,0,0,0,.2,0,.2-.2,0,0,.2-3.3,3.7-9.6,0,0,0-.2,0-.3,0,0,0,0,0,0,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g >
                <g>
                  <g>
                    <path d="M359.9,304.7c-.7,0-1.3-.3-1.9-.8-.4-.4-.6-.9-.5-1.3.2-.8,1.6-1.6,3.8-2.1,3.6-.9,4.7-2,4.7-2.1l4.7-2.3-.5-.2s-2-.7-4.5-1.7c-1.6-.6-4.6-.9-6.7-1-1.1,0-2.1-.2-2.4-.3-.2,0-.4-.2-.5-.5-.2-.5,0-1.2.1-1.6,0-.1,0-.2.1-.3.2-.5.4-.8,1.6-.9.1,0,.3,0,.4,0,.4,0,.7.1,1.1.3.6.3,1.5.6,3.5.7,1.4,0,1.9.5,2.4,1,.6.5,1.1,1,2.8,1s1.3,0,2.2-.2c1.6-.3,3.1-.4,4.5-.4,2.2,0,3.5.4,3.8.4,0,0,.2.1.5.1.8,0,2.9-.6,8.4-3.4,4.7-2.4,7.9-2.9,9.8-2.9s1.6.1,1.9.2l.5,16.2c-.7.1-1.4.2-2.2.2h0c-4.1,0-8.8-2-10.5-2.8-2.6-1.2-6.3-2-6.4-2h0s0,0,0,0c0,0-5.4,1.6-7.1,1.7-1.7.1-5.1.6-5.1.6h-.3s0,.3,0,.3c0,0,0,0,0,0,0,0-.2.3-1.3.7-1.2.4-2.7,1.4-3.9,2.1-.3.2-.7.4-.9.6-.8.5-1.5.7-2.1.7Z" fill="#fff"/>
                    <path d="M397.3,286.4c.8,0,1.4,0,1.7.2l.5,15.8c-.6.1-1.3.2-2,.2-4.1,0-8.7-2-10.4-2.8-2.6-1.2-6.3-2-6.4-2h-.1s-.1,0-.1,0c0,0-5.3,1.6-7,1.7-1.8.1-5.1.6-5.2.6h-.5c0,0,0,.4,0,.4-.1,0-.4.3-1.1.5-1.2.4-2.8,1.4-3.9,2.1-.3.2-.7.4-.9.6-.7.4-1.4.7-2,.7s-1.2-.2-1.7-.8c-.5-.6-.4-.9-.4-1,.2-.7,1.6-1.5,3.7-2,3.2-.8,4.5-1.8,4.8-2l4.2-2.1,1-.5-1.1-.4s-2-.7-4.5-1.7c-1.7-.6-4.6-.9-6.8-1-1,0-2.1-.2-2.3-.3,0,0-.2,0-.3-.3-.2-.4,0-1,.1-1.4,0-.1.1-.2.1-.3.2-.5.3-.6,1.4-.8.1,0,.2,0,.3,0,.4,0,.6.1,1,.3.7.3,1.6.7,3.6.8,1.3,0,1.7.4,2.2.9.6.5,1.2,1.1,2.9,1.1s1.3,0,2.2-.2c1.6-.3,3-.4,4.4-.4,2.1,0,3.3.3,3.7.4.1,0,.3.2.6.2,1.2,0,4.1-1.2,8.5-3.4,4.7-2.4,7.9-2.9,9.7-2.9M397.3,285.9c-1.9,0-5.2.5-9.9,2.9-5.7,2.9-7.6,3.4-8.2,3.4s-.3,0-.3,0c0,0-1.3-.5-3.9-.5-1.2,0-2.7.1-4.5.4-.9.2-1.6.2-2.1.2-3,0-2.1-1.8-5.1-2-3.2-.2-3.4-1-4.6-1-.1,0-.3,0-.4,0-1.6.2-1.5.6-1.9,1.4-.4.7-.4,2.1.5,2.4.9.3,6.6.3,9.1,1.3s4.5,1.7,4.5,1.7l-4.3,2.1s-1,1.1-4.6,2c-3.6.9-4.9,2.3-3.5,3.8.6.7,1.4.9,2,.9s1.6-.4,2.3-.7c1.1-.7,3.2-2.1,4.7-2.7,1.5-.6,1.4-.9,1.4-.9,0,0,3.4-.4,5.1-.6s7.1-1.7,7.1-1.7c0,0,3.7.8,6.3,2,2.2,1,6.5,2.8,10.6,2.8s1.7,0,2.5-.3l-.5-16.6s-.7-.3-2.2-.3h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M355.8,291c0-.2,0-.3.2-.4,0,0,0-.2.1-.3.1-.3.3-.5.5-.8.3-.2.7-.3,1.4-.4.8-.1,1.2,0,1.7.3.6.3,1.5.6,3.3.7,1.5,0,2.1.6,2.6,1.1.7.6,1.4,1.2,4.6.7,5.6-1,8.4,0,8.5,0,0,0,0,0,0,0,.1,0,1.3.3,8.3-3.3,2.4-1.2,5.9-2.7,9.2-2.9,2-.1,3,.3,3,.3,0,0,.1,0,.1.2l.5,16.6c0,0,0,.2-.1.2-4.8,1.1-10.9-1.5-13.2-2.6-2.4-1.1-5.8-1.8-6.2-1.9-.6.2-5.4,1.6-7.1,1.7-1.5.1-4.4.5-5,.6-.1.2-.5.6-1.5.9-1.1.4-2.7,1.4-3.8,2.1-.4.2-.7.4-.9.6-1.8,1.1-3.4,1-4.5-.2-.7-.7-.7-1.3-.6-1.7,0,0,0,0,0,0,.3-1,1.7-1.9,4.2-2.4,3.4-.8,4.5-1.9,4.5-1.9,0,0,0,0,0,0l3.9-1.9c-.7-.3-2.3-.8-4.1-1.5-1.6-.6-4.5-.8-6.6-1-1.3,0-2.2-.2-2.5-.3-.3-.1-.6-.4-.7-.7-.2-.5-.2-1.1,0-1.6ZM378.6,292.3c-.4-.1-3.2-.9-8.3,0-3.4.6-4.1-.1-4.9-.8-.5-.5-1-.9-2.4-1-2,0-2.8-.5-3.5-.7-.5-.2-.9-.4-1.5-.3-1.3.2-1.4.4-1.6,1,0,0,0,.2-.1.3-.2.4-.3,1.1-.1,1.7.1.3.3.4.5.5.3.1,1.3.2,2.4.3,2.1.2,5.1.4,6.7,1,2.5.9,4.5,1.7,4.5,1.7,0,0,.1,0,.1.2,0,0,0,.1-.1.2l-4.3,2.1c-.2.2-1.3,1.2-4.7,2-2.2.5-3.6,1.3-3.9,2.2,0,0,0,0,0,0-.1.4,0,.9.5,1.3,1,1.1,2.4,1.1,4.1.2.3-.2.6-.3.9-.6,1.1-.7,2.7-1.7,3.8-2.1,1.1-.4,1.3-.7,1.3-.8,0,0,0,0,0-.1,0,0,0,0,.1,0,0,0,3.4-.4,5.1-.6,1.7-.1,7-1.7,7.1-1.7,0,0,0,0,0,0,0,0,3.7.8,6.3,2,2.2,1,8.2,3.6,12.8,2.6l-.5-16.3c-.3,0-1.2-.3-2.8-.2-3.2.2-6.7,1.7-9,2.9-4.8,2.5-7.9,3.7-8.7,3.3,0,0,0,0-.1,0ZM368.1,300.7h0s0,0,0,0ZM368.1,300.7h0s0,0,0,0ZM378.9,292.1h0s0,0,0,0ZM378.9,292.1h0s0,0,0,0Z" fill="#fff"/>
                    <path d="M397.3,285.7c-.2,0-.5,0-.8,0-3.3.2-6.9,1.7-9.2,2.9-5.9,3-7.7,3.4-8.2,3.4s-.1,0-.2,0c0,0,0,0,0,0,0,0-1.4-.5-4-.5s-2.8.1-4.6.4c-.9.2-1.6.2-2.1.2-1.4,0-1.9-.4-2.5-.9-.5-.5-1.1-1-2.6-1.1-1.9,0-2.7-.4-3.3-.7-.4-.2-.8-.3-1.3-.3-.1,0-.3,0-.4,0-.7,0-1.1.2-1.4.4-.3.2-.4.5-.5.8,0,0,0,.2-.1.3,0,.1-.1.3-.2.4-.1.5-.2,1.1,0,1.6.1.4.4.6.7.7.3.1,1.3.2,2.5.3,2.1.2,5,.4,6.6,1,1.8.7,3.4,1.3,4.1,1.5l-3.9,1.9s0,0,0,0c0,0-1,1.1-4.5,1.9-2.4.6-3.9,1.4-4.2,2.4,0,0,0,0,0,0-.1.4,0,1,.6,1.7.6.6,1.4,1,2.2,1s1.5-.2,2.4-.7c.3-.2.6-.3.9-.6,1.1-.7,2.7-1.7,3.8-2.1,1-.4,1.4-.7,1.5-.9.6,0,3.5-.4,5-.6,1.7-.1,6.5-1.5,7.1-1.7.4,0,3.8.9,6.2,1.9,1.9.8,6.4,2.8,10.7,2.8s1.7,0,2.5-.3c0,0,.2-.1.1-.2l-.5-16.6c0,0,0-.1-.1-.2,0,0-.8-.3-2.2-.3h0ZM379.1,292.4c1.1,0,4-1.2,8.3-3.4,2.3-1.2,5.8-2.7,9-2.9.3,0,.6,0,.8,0,1.1,0,1.7.2,2,.2l.5,16.3c-.7.2-1.5.2-2.3.2-4.1,0-8.6-2-10.5-2.8-2.6-1.1-6.3-2-6.3-2,0,0,0,0,0,0s0,0,0,0c0,0-5.4,1.6-7.1,1.7-1.7.1-5.1.6-5.1.6,0,0-.1,0-.1,0,0,0,0,0,0,.1,0,0-.2.3-1.3.8-1.2.4-2.7,1.4-3.8,2.1-.4.2-.7.4-.9.6-.8.5-1.5.7-2.2.7s-1.4-.3-1.9-.8c-.4-.4-.6-.9-.5-1.3,0,0,0,0,0,0,.2-.9,1.7-1.6,3.9-2.2,3.3-.8,4.5-1.8,4.7-2l4.3-2.1c0,0,.1-.1.1-.2,0,0,0-.1-.1-.2,0,0-2-.8-4.5-1.7-1.6-.6-4.6-.8-6.7-1-1.1,0-2.1-.2-2.4-.3-.2,0-.4-.2-.5-.5-.2-.5,0-1.2.1-1.7,0-.1,0-.2.1-.3.2-.5.4-.8,1.6-1,.1,0,.3,0,.4,0,.4,0,.7.1,1.1.3.6.3,1.5.6,3.5.7,1.4,0,1.9.5,2.4,1,.6.5,1.1,1,2.7,1s1.3,0,2.2-.2c1.8-.3,3.2-.4,4.5-.4,2.3,0,3.6.4,3.8.4,0,0,0,0,.1,0,0,0,.2,0,.3,0h0ZM378.9,292.1h0s0,0,0,0h0ZM378.9,292.1h0s0,0,0,0h0ZM368.1,300.7h0s0,0,0,0h0ZM368.1,300.7h0s0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M420.9,278.6c-.8,0-1.6-.1-2.3-.3-1.8-.6-2.5-1.4-2.3-2.6h0s.6-1,1.4-1.6c.1,0,.2,0,.2,0,0,0,0,.6-.2,1.1v.5c-.1,0,.3-.2.3-.2.8-.3,2.9-1.1,3.6-1.1s.1,0,.1,0c0,0-.5.5-2.3,1.1l.2.5s2-.6,2.9-.6,0,0,.1,0c-.3.3-1.5.8-2.9,1.2v.5c.1,0,1.7-.3,2.6-.3s.4,0,.4,0c-.4.3-1.8.6-3.3.8l-1.8.3,1.8.2c1,.1,2.1.3,2.5.5-.1,0-.5.1-1,.1Z" fill="#fff"/>
                    <path d="M417.5,274.5c0,.1,0,.3,0,.4l-.3,1,.9-.4c.3-.1.7-.3,1.2-.4l.3.9c.3,0,.8-.3,1.4-.4-.4.2-.9.3-1.4.5l.2,1s.4,0,.9-.2c-.4,0-.8.2-1.3.2l-1.9.3c-.7-.4-1-1-.9-1.7.1-.2.4-.7.9-1.2M419.5,278.2c.2,0,.4,0,.6,0-.2,0-.4,0-.6,0M417.9,273.7c0,0-.2,0-.3.1-.9.7-1.5,1.8-1.5,1.8-.3,1.7,1,2.4,2.5,2.9.7.2,1.6.3,2.3.3s1.3-.1,1.3-.3c0-.4-2.8-.8-2.8-.8,0,0,3.5-.5,3.5-1.1,0-.2-.3-.2-.8-.2-1,0-2.6.3-2.6.3,0,0,3.3-1,3.1-1.5,0-.1-.2-.2-.4-.2-.9,0-3,.7-3,.7,1.6-.6,2.8-1.2,2.4-1.6,0,0-.1,0-.2,0-.9,0-3.7,1.1-3.7,1.1,0,0,.4-1.4,0-1.4h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M415.9,275.5s0,0,0,0c0,0,.6-1.1,1.5-1.8.2-.2.5-.2.6-.1.3.2.2.8.1,1.2.3-.1.9-.3,1.5-.5,2-.7,2.2-.5,2.3-.4.1,0,.2.2.2.4,0,.2-.2.4-.5.6.5,0,1-.1,1.3,0,.1,0,.2.2.2.2,0,.4-.6.8-1.4,1.1.6,0,1.2,0,1.4.1,0,0,.1.2.1.3,0,.3-.2.6-1.9,1-.2,0-.4.1-.7.1,0,0,.2,0,.3,0,1.1.2,1.6.4,1.5.8,0,0,0,.2-.2.3-.5.4-2.4.3-3.7-.1-2-.6-2.8-1.6-2.6-3.1,0,0,0,0,0,0ZM417.9,273.9s0,0-.2,0c-.8.6-1.3,1.5-1.4,1.7-.2,1.3.5,2.1,2.3,2.7.6.2,1.5.3,2.2.3.7,0,1.1,0,1.2-.2-.2-.2-1.4-.4-2.6-.6,0,0-.2,0-.2-.2,0,0,0-.2.2-.2,0,0,.8-.1,1.7-.3,1.3-.3,1.6-.5,1.7-.6,0,0-.4-.1-1.6,0-.8,0-1.5.2-1.5.2-.1,0-.2,0-.2-.1,0-.1,0-.2.1-.2,0,0,.8-.2,1.5-.5,1.2-.5,1.4-.7,1.5-.8,0,0-.4,0-1.6.2-.8.2-1.5.4-1.5.4-.1,0-.2,0-.2-.1,0-.1,0-.2.1-.2,1.8-.7,2.3-1.1,2.4-1.2h0s0,0,0,0c-.2-.1-1.7.3-3.7,1.1,0,0-.1,0-.2,0,0,0,0-.1,0-.2,0,0,0,0,0,0,.1-.5.2-1,.1-1.2Z" fill="#fff"/>
                    <path d="M417.9,273.5c-.1,0-.3,0-.4.2-.9.7-1.5,1.8-1.5,1.8,0,0,0,0,0,0,0,0,0,0,0,0-.2,1.5.6,2.5,2.6,3.1.7.2,1.6.3,2.4.3s1.1,0,1.3-.2c.1,0,.2-.2.2-.3,0-.3-.4-.5-1.5-.8,0,0-.2,0-.3,0,.2,0,.4,0,.7-.1,1.7-.4,1.9-.7,1.9-1,0-.1,0-.2-.1-.3-.2-.1-.5-.2-.9-.2s-.4,0-.6,0c.8-.3,1.5-.7,1.4-1.1,0,0,0-.2-.2-.2-.1,0-.3,0-.5,0s-.5,0-.8,0c.3-.2.5-.4.5-.6,0-.1,0-.3-.2-.4,0,0-.1,0-.3,0s-.9,0-2,.5c-.6.2-1.1.4-1.5.5.1-.5.2-1.1-.1-1.2,0,0-.1,0-.2,0h0ZM420.9,278.6s0,0,0,0c-.7,0-1.6-.1-2.2-.3-1.8-.6-2.5-1.4-2.3-2.7,0-.2.6-1.1,1.4-1.7,0,0,.1,0,.2,0,0,.1,0,.7-.1,1.2,0,0,0,0,0,0,0,0,0,.1,0,.2,0,0,0,0,.1,0s0,0,0,0c1.8-.7,3.2-1.1,3.6-1.1,0,0,0,0,.1,0,0,0,0,0,0,0h0c0,.1-.5.6-2.4,1.2,0,0-.2.1-.1.2,0,0,.1.1.2.1s0,0,0,0c0,0,.7-.2,1.5-.4.8-.2,1.2-.2,1.4-.2s.2,0,.2,0c0,0-.3.3-1.5.8-.8.3-1.5.5-1.5.5,0,0-.2.1-.1.2,0,0,.1.1.2.1s0,0,0,0c0,0,.7-.1,1.5-.2.5,0,.8,0,1,0,.4,0,.5,0,.5,0,0,0-.4.3-1.7.6-.8.2-1.7.3-1.7.3,0,0-.2,0-.2.2,0,0,0,.2.2.2,1.2.2,2.4.4,2.6.6-.1,0-.4.2-1.1.2h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M422.5,307.7c-.4,0-1.6-.9-1.8-1.9-.3-1.2-.3-2.2,2.3-3.2h0s1.1-.1,2-.1,1.1.2,1.1.2c-.1,0-1.3.3-2.5.3v.5c1.6.1,3.5.5,3.8.8h0c0,0-.3,0-.7,0-.9,0-2.2-.2-2.3-.2v.5c1.2.3,2.7.7,3.2.9,0,0-.1,0-.3,0-1,0-2.8-.4-2.8-.4v.5c.9.3,1.9.7,2.3,1-1,0-3.5-.9-3.6-1,0,0-.2,0-.4,0-.6,0-.8.2-.9.4-.1.3.1.6.3.9.2.3.4.5.3.7h0Z" fill="#fff"/>
                    <path d="M423.6,302.8v.9c.6,0,1.4.2,2,.3-.6,0-1.2-.2-1.2-.2l-.2,1c.2,0,.3,0,.5.1-.1,0-.2,0-.2,0l-.2.8c-.4-.1-.8-.3-1-.3h0s0,0,0,0c0,0-.2,0-.4,0-.8,0-1.1.4-1.2.6-.2.5.1.9.4,1.2,0,0,0,.1.1.2-.4-.3-1.1-.9-1.2-1.5-.2-.9-.4-1.9,2.1-2.8,0,0,.3,0,.5,0M425,302.2c-1,0-2.1.2-2.1.2-2.7,1-2.8,2.2-2.5,3.4.2,1.1,1.5,2.1,2.1,2.1s.2,0,.3-.2c.2-.7-.9-1.2-.7-1.6.1-.2.4-.3.7-.3s.3,0,.3,0c0,0,2.7,1,3.7,1s.3,0,.3-.1c.2-.5-2.7-1.3-2.7-1.3,0,0,1.9.4,2.9.4s.6,0,.7-.2c.2-.5-3.7-1.3-3.7-1.3,0,0,1.3.2,2.3.2s1,0,1-.3c0-.6-4-1-4-1,0,0,3-.1,2.7-.7-.1-.2-.7-.3-1.3-.3h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M420.2,304.3c.2-.8,1-1.5,2.6-2.1,0,0,0,0,0,0,0,0,.8-.1,1.6-.1,1.5,0,1.9.2,2,.4,0,.1,0,.2,0,.3-.1.2-.6.4-1.1.5.1,0,.2,0,.3,0,1.1.2,2.2.4,2.2.9,0,.1,0,.2-.1.3-.2.1-.5.2-.9.2,1,.3,1.3.5,1.4.7,0,0,0,.2,0,.3,0,.2-.4.4-1.7.2.4.2.8.4.9.6,0,.1,0,.2,0,.3,0,.2-.4.4-2.3-.1-.9-.3-1.8-.6-1.9-.6-.2,0-.7,0-.8.2,0,0,.1.3.3.4.3.3.6.7.4,1.2,0,.2-.3.3-.5.3-.3,0-.8-.3-1.3-.7-.5-.5-.8-1-.9-1.5-.1-.6-.2-1.1,0-1.5ZM423,302.6c-2.6,1-2.6,2-2.3,3.2.2,1,1.4,1.9,1.9,1.9,0,0,.1,0,.1,0,0-.2,0-.5-.4-.8-.2-.3-.5-.5-.3-.8.2-.5,1.1-.4,1.2-.4,0,0,0,0,0,0,1.9.7,3.4,1,3.7,1-.2-.2-1.3-.7-2.6-1.1,0,0-.2-.1-.1-.2,0,0,.1-.2.2-.1,0,0,.8.2,1.6.3,1.1.2,1.5.1,1.7,0-.3-.2-1.6-.6-3.5-1-.1,0-.2-.1-.2-.2,0-.1.1-.2.2-.2,0,0,.7.1,1.5.2,1.3.1,1.5,0,1.6,0,0,0-.3-.3-2-.6-1-.2-1.9-.2-1.9-.2-.1,0-.2,0-.2-.2,0-.1,0-.2.2-.2,1.2,0,2.3-.3,2.5-.4,0,0-.3-.2-1.6-.2-.7,0-1.4.1-1.5.1ZM427.8,305.5h0Z" fill="#fff"/>
                    <path d="M425,302c-.2,0-.3,0-.5,0-.8,0-1.6.1-1.6.1,0,0,0,0,0,0-1.7.6-2.4,1.3-2.6,2.1-.1.5,0,1,0,1.5.1.5.5,1.1.9,1.5.4.4.9.7,1.3.7,0,0,0,0,0,0,.2,0,.4-.1.5-.3.2-.5-.2-.8-.4-1.2-.1-.2-.3-.4-.3-.4,0-.1.3-.2.5-.2.1,0,.2,0,.3,0,.1,0,1,.4,1.9.6.9.3,1.5.4,1.8.4s.4-.1.5-.2c0,0,0-.2,0-.3,0-.2-.4-.4-.9-.6.4,0,.6,0,.9,0,.6,0,.8-.1.9-.3,0,0,0-.2,0-.3,0-.2-.3-.4-1.4-.7.4,0,.7,0,.9-.2,0,0,.1-.2.1-.3,0-.5-1-.7-2.2-.9-.1,0-.2,0-.3,0,.5,0,1-.2,1.1-.5,0-.1,0-.2,0-.3,0-.2-.4-.4-1.5-.4h0ZM422.5,307.7s0,0,0,0c-.5,0-1.6-.9-1.9-1.9-.3-1.2-.3-2.2,2.3-3.2.1,0,.8-.1,1.5-.1.2,0,.3,0,.5,0,.9,0,1.1.1,1.1.2-.2.2-1.3.4-2.5.4-.1,0-.2,0-.2.2,0,.1,0,.2.2.2,0,0,.9,0,1.9.2,1.6.3,1.9.5,2,.6,0,0-.2.1-.8.1s-.5,0-.8,0c-.8,0-1.5-.2-1.5-.2,0,0,0,0,0,0,0,0-.2,0-.2.2,0,.1,0,.2.2.2,1.8.4,3.1.8,3.5,1,0,0-.2,0-.4,0s-.7,0-1.3-.1c-.8-.1-1.6-.3-1.6-.3,0,0,0,0,0,0,0,0-.2,0-.2.1,0,.1,0,.2.1.2,1.2.4,2.3.8,2.6,1.1,0,0,0,0,0,0-.5,0-1.9-.3-3.6-1,0,0,0,0,0,0,0,0-.2,0-.4,0-.3,0-.7,0-.9.4-.1.3.1.6.3.8.3.3.4.5.4.8,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M420.3,305.4c-.2,0-.4,0-.7-.2-.3-.1-.7-.2-1.1-.2s-.4,0-.6,0c-.2,0-.4,0-.6,0-1,0-1.3-.7-1.3-.7h0c0,0,0-.1,0-.1-.1,0-3-2-4.5-2s-.3,0-.4,0c-1.2.4-4.2.9-4.2.9h0s0,0,0,0c0,0-.6.5-2.6.5h0c-.4,0-.8,0-1.3,0-2.9-.3-3.7-2.1-5.3-6.2l-.2-.5c-1.5-3.9,1.1-8.5,2.3-10.4.1-.3.3-.5.4-.6.6-1.1,3.8-1.8,5-1.9h0s0,0,0,0c1.6-1,3.9-1,4-1h.2s0-.2,0-.2c.9-2.6,2.1-3.4,3.1-3.9.5-.3,1.1-.6,1.4-1.2.5-.9,1-1.1,1.4-1.4.2-.1.4-.3.6-.5.2-.3.6-.5.7-.5.8.2,1.4.6,1.8,1.1.6.9.3,2.1.3,2.1v.2c0,0,.2,0,.2,0,2.1.6,1.8,2.8,1.8,2.9h0c0,.1,0,.2,0,.2,1,1.1.7,2.6.7,2.6h0c0,0,0,.1,0,.1.9,4.4,2.3,11.1,2.3,11.6,0,.4,0,1.4.1,2.8,0,.7.1,1.5.2,2.3.1,2.2-1.8,2.8-1.9,2.9h0s0,0,0,0c-.7,1-1.1,1.1-1.4,1.1Z" fill="#fff"/>
                    <path d="M416.3,275.6c.7.2,1.2.5,1.5,1,.5.8.2,1.9.2,1.9v.5c-.1,0,.4.1.4.1,1.9.5,1.7,2.5,1.7,2.6v.2s.1.2.1.2c.9,1,.7,2.3.6,2.4h0c0,.1,0,.2,0,.2.9,4.1,2.3,10.9,2.3,11.5,0,.4,0,1.3.1,2.8,0,.7.1,1.5.2,2.3.1,2-1.6,2.6-1.7,2.6h-.2c0,0,0,.2,0,.2-.7,1-1,1-1.2,1s-.4,0-.6-.2c-.3-.1-.7-.2-1.2-.2s-.4,0-.6,0c-.2,0-.4,0-.6,0-.8,0-1-.5-1.1-.6h0c0-.1-.1-.2-.1-.2-.3-.2-3.1-2.1-4.7-2.1s-.3,0-.5,0c-1.2.4-4.1.9-4.2.9h-.1s-.1.1-.1.1c0,0-.6.5-2.4.5s-.8,0-1.3,0c-2.8-.3-3.5-2-5.1-6.1l-.2-.5c-1.5-3.8,1.1-8.3,2.3-10.2.1-.3.3-.5.4-.6.5-.9,3.2-1.6,4.8-1.8h.1s0,0,0,0c1.5-.9,3.8-1,3.8-1h.3s.1-.3.1-.3c.9-2.5,2-3.2,3-3.8.6-.3,1.1-.7,1.5-1.3.5-.8.9-1.1,1.3-1.3.2-.2.5-.3.7-.6.1-.2.3-.3.5-.4M416.3,275s-.6.2-.9.6c-.3.5-1.1.5-1.9,1.9s-3.1,1-4.5,5.2c0,0-2.4,0-4.1,1.1,0,0-4.4.5-5.2,2-.8,1.5-4.4,6.8-2.6,11.2,1.8,4.5,2.5,6.6,5.7,6.9.5,0,1,0,1.4,0,2.1,0,2.7-.6,2.7-.6,0,0,3-.5,4.3-.9,0,0,.2,0,.3,0,1.4,0,4.4,2,4.4,2,0,0,.4.9,1.5.9s.4,0,.7,0c.2,0,.4,0,.5,0,.7,0,1.3.4,1.8.4s.9-.3,1.6-1.2c0,0,2.2-.7,2.1-3.1s-.4-4.5-.3-5c.1-.6-2.3-11.7-2.3-11.7,0,0,.4-1.6-.8-2.8,0,0,.3-2.6-2-3.2,0,0,.8-2.9-2.3-3.6h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M396.7,291.5c.6-2.2,1.7-4.1,2.4-5.2.1-.2.3-.5.4-.6.4-.7,1.4-1.2,3-1.7,1.1-.3,2.1-.4,2.3-.4,1.5-.9,3.5-1.1,4-1.1.9-2.7,2.2-3.4,3.3-4.1.5-.3,1-.6,1.2-1,.6-1,1.1-1.3,1.5-1.5.2-.1.4-.2.4-.4.3-.5,1-.7,1-.7,0,0,0,0,0,0,1,.2,1.7.7,2.1,1.4.5.9.4,1.9.3,2.3,2,.7,2,2.8,2,3.2,1,1.2.8,2.6.8,2.9.4,2,2.4,11.1,2.3,11.7,0,.3,0,1.4.1,2.6,0,.7.1,1.5.2,2.3.1,2.3-1.7,3.1-2.1,3.3-1.1,1.5-1.8,1.3-2.6,1-.4-.1-.9-.3-1.5-.1-1,.2-1.6,0-1.9-.3-.3-.2-.4-.5-.5-.6-1-.7-3.6-2.2-4.5-1.9-1.1.4-3.8.8-4.2.9-.2.2-1.3.8-4.2.5-3.2-.3-4-2.4-5.7-6.5l-.2-.5c-.7-1.8-.6-3.8,0-5.6ZM416.3,275.2c-.1,0-.5.2-.7.5-.1.2-.3.3-.6.5-.4.2-.9.5-1.4,1.4-.3.5-.8.8-1.4,1.2-1,.6-2.2,1.3-3.1,4,0,0,0,.1-.2.1,0,0-2.4,0-4,1.1,0,0,0,0,0,0,0,0-1.1.1-2.3.4-1.5.4-2.5.9-2.8,1.5,0,.2-.2.4-.4.6-.6,1.1-1.7,3-2.3,5.1-.5,1.7-.6,3.6,0,5.4l.2.5c1.6,4.1,2.4,6,5.3,6.2,2.4.2,3.6-.2,3.9-.5,0,0,0,0,0,0,0,0,3-.5,4.2-.9.6-.2,1.5,0,3,.8,1,.5,1.9,1.1,1.9,1.1,0,0,0,0,0,0,0,0,.5,1.1,2,.7.7-.2,1.2,0,1.7.2.7.2,1.2.4,2.1-.9,0,0,0,0,.1,0,0,0,2.1-.7,1.9-2.9,0-.8-.1-1.6-.2-2.3-.1-1.4-.2-2.3-.1-2.7,0-.5-1.3-7.2-2.3-11.6,0,0,0,0,0,0,0,0,.3-1.5-.7-2.7,0,0,0,0,0-.2,0,0,.3-2.4-1.9-3,0,0,0,0-.1,0s0,0,0-.1c0,0,.3-1.2-.3-2.2-.4-.6-1-1-1.8-1.2Z" fill="#fff"/>
                    <path d="M416.3,274.9s0,0,0,0c0,0-.7.2-1,.7,0,.1-.2.2-.4.4-.4.2-.9.6-1.5,1.5-.3.5-.7.7-1.2,1-1,.6-2.3,1.4-3.3,4.1-.5,0-2.5.2-4,1.1-.2,0-1.2.2-2.3.4-1.7.4-2.7,1-3,1.7,0,.2-.2.4-.4.6-.6,1.1-1.7,3-2.4,5.2-.5,1.8-.7,3.8,0,5.6l.2.5c1.6,4.1,2.4,6.2,5.7,6.5.5,0,1,0,1.4,0,1.9,0,2.6-.4,2.8-.6.4,0,3.1-.5,4.2-.9,0,0,.2,0,.3,0,1.1,0,3.3,1.3,4.2,1.9,0,.1.2.4.5.6.2.2.6.4,1.2.4s.5,0,.7,0c.2,0,.3,0,.5,0,.4,0,.7.1,1,.2.3,0,.6.2.9.2.5,0,1-.3,1.7-1.2.4-.1,2.3-1,2.1-3.3,0-.8-.1-1.6-.2-2.3-.1-1.3-.2-2.3-.1-2.6.1-.6-1.9-9.8-2.3-11.7,0-.3.3-1.7-.8-2.9,0-.5,0-2.6-2-3.2,0-.4.2-1.4-.3-2.3-.4-.7-1.1-1.1-2.1-1.4,0,0,0,0,0,0h0ZM404,303.8c-.4,0-.8,0-1.3,0-3-.3-3.7-2.2-5.3-6.2l-.2-.5c-.7-1.8-.5-3.6,0-5.4.6-2.1,1.7-4,2.3-5.1.1-.2.3-.5.4-.6.3-.6,1.3-1.1,2.8-1.5,1.2-.3,2.3-.4,2.3-.4,0,0,0,0,0,0,1.6-1,4-1.1,4-1.1,0,0,.2,0,.2-.1.9-2.6,2.1-3.4,3.1-4,.6-.3,1-.6,1.4-1.2.5-.9,1-1.2,1.4-1.4.2-.1.4-.3.6-.5.2-.3.6-.5.7-.5.9.2,1.5.6,1.8,1.2.6,1,.3,2.2.3,2.2,0,0,0,.1,0,.1,0,0,0,0,.1,0,2.2.6,1.9,2.9,1.9,3,0,0,0,.1,0,.2,1.1,1.2.7,2.6.7,2.7,0,0,0,0,0,0,1,4.4,2.4,11.1,2.3,11.6,0,.4,0,1.4.1,2.7,0,.7.1,1.5.2,2.3.1,2.2-1.8,2.9-1.9,2.9,0,0,0,0-.1,0-.6.9-1,1.1-1.4,1.1s-.5,0-.7-.2c-.3-.1-.7-.2-1.1-.2s-.4,0-.6,0c-.2,0-.5,0-.6,0-1,0-1.3-.7-1.3-.8,0,0,0,0,0,0,0,0-.9-.6-1.9-1.1-1.1-.6-2-.9-2.6-.9s-.3,0-.4,0c-1.2.4-4.2.9-4.2.9,0,0,0,0,0,0-.2.2-1,.5-2.6.5h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <path d="M414.9,277.3c0,0,0-.1.2-.1.1,0,2.9,0,3.7,1.3,0,0,0,.2,0,.3,0,0-.2,0-.3,0-.7-1.2-3.3-1.2-3.3-1.2-.1,0-.2,0-.2-.2,0,0,0,0,0,0Z" fill="#fff"/>
                  <path d="M415.2,277.2c0,0,0,0-.1,0,0,0-.2,0-.2.1,0,0,0,0,0,0,0,.1,0,.2.2.2s0,0,0,0c0,0,0,0,0,0,.4,0,2.6,0,3.2,1.2,0,0,.1,0,.2,0s0,0,0,0c0,0,.1-.2,0-.3-.7-1.3-3-1.4-3.6-1.4h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M417.2,278.8h0s0,0,0,0Z" fill="#fff"/>
                  <path d="M417.1,278.6s0,0,0,0c0,0-.1,0-.1.1,0,0,0,0,0,.1,0,0,1.3,3.5,1.9,5.5,0,0,.1.1.2.1s0,0,0,0c.1,0,.2-.1.1-.2-.6-2-1.9-5.4-1.9-5.5,0,0-.1-.1-.2-.1h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M421.8,297.4c0,0,.1-.1.2-.1.1,0,.2,0,.2.2,0,0,0,1.7-.1,3.3-.1,1.6.2,3.1.4,3.3,0,0,0,.2,0,.3,0,0-.2,0-.3,0-.3-.4-.6-2.1-.5-3.6.1-1.5.1-3.3.1-3.3,0,0,0,0,0,0Z" fill="#fff"/>
                  <path d="M421.9,297.3c0,0-.2,0-.2.1,0,0,0,0,0,0,0,0,0,1.7-.1,3.3,0,1.5.2,3.2.5,3.6,0,0,0,0,.2,0s0,0,.1,0c0,0,.1-.2,0-.3-.2-.2-.5-1.7-.4-3.3.1-1.6.1-3.3.1-3.3,0-.1,0-.2-.2-.2,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M401.8,286.2" fill="#fff"/>
                  <path d="M401.8,286s0,0-.1,0c0,0-.9.7-1.8,2.1-.7,1-1.6,2.6-2.2,4.6-.2.5-.3,1.1-.4,1.7,0,.1,0,.2.2.2,0,0,0,0,0,0,0,0,.2,0,.2-.2.9-5.5,4.2-8.2,4.2-8.2,0,0,0-.2,0-.3,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M399.2,292.8s0,0,0,0c0-.1.1-.2.2-.1.1,0,.2.1.1.2,0,0-1.2,3.9,1.1,8.5,0,0,0,.2,0,.3,0,0-.2,0-.3,0-1.2-2.5-1.4-4.8-1.4-6.2,0-1.4.3-2.3.3-2.6Z" fill="#fff"/>
                  <path d="M399.4,292.6c0,0-.2,0-.2.1,0,0,0,0,0,0,0,.2-.3,1.2-.3,2.6,0,1.5.2,3.7,1.4,6.2,0,0,.1.1.2.1s0,0,0,0c0,0,.1-.2,0-.3-2.2-4.6-1.1-8.5-1.1-8.5,0,0,0-.2-.1-.2,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M380.3,298.3c0,0,0-.1.2-.1,5.9-.7,13.9-3.4,14-3.4.1,0,.2,0,.2.1,0,.1,0,.2-.1.2,0,0-8.1,2.7-14.1,3.4-.1,0-.2,0-.2-.2,0,0,0,0,0,0Z" fill="#fff"/>
                  <path d="M394.5,294.7s0,0,0,0c0,0-8.1,2.7-14,3.4,0,0-.1,0-.2.1,0,0,0,0,0,0,0,0,0,.2.2.2s0,0,0,0c5.9-.7,14-3.4,14.1-3.4.1,0,.2-.1.1-.2,0,0-.1-.1-.2-.1h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M370,296.1s0,0,0-.1c.2-.1,5.6-3.2,9-3.9.1,0,.2,0,.2.1,0,.1,0,.2-.1.2-1.4.3-3.3,1-5.7,2.2-1.8.9-3.2,1.6-3.2,1.7,0,0-.2,0-.3,0,0,0,0,0,0-.1Z" fill="#fff"/>
                  <path d="M379.1,292.1s0,0,0,0c-3.3.7-8.7,3.8-9,3.9,0,0,0,0,0,.1,0,0,0,.1,0,.1,0,0,.1,0,.2,0s0,0,0,0c0,0,1.4-.8,3.2-1.7,2.4-1.1,4.3-1.9,5.7-2.2.1,0,.2-.1.1-.2,0,0,0-.2-.2-.2h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M379.8,294c0,0,.1-.1.2-.1.1,0,.2.1.2.2,0,0-.1,1.6.6,2.3,0,0,0,.2,0,.3,0,0-.2,0-.3,0-.9-.9-.8-2.6-.8-2.6,0,0,0,0,0,0Z" fill="#fff"/>
                  <path d="M380,293.9c0,0-.2,0-.2.1,0,0,0,0,0,0,0,0-.2,1.8.8,2.6,0,0,0,0,.1,0s.1,0,.1,0c0,0,0-.2,0-.3-.8-.8-.6-2.3-.6-2.3,0-.1,0-.2-.2-.2,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M366.6,297.8s0,0,0,0c0-.1.1-.2.2-.1.1,0,.2.1.1.2,0,0-.6,1.9,1.4,2.5.1,0,.2.1.1.2,0,.1-.1.2-.2.1-.7-.3-1.2-.7-1.5-1.2-.4-.7-.2-1.5-.1-1.7Z" fill="#fff"/>
                  <path d="M366.8,297.6c0,0-.2,0-.2.1,0,0,0,0,0,0,0,.2-.2,1,.1,1.7.3.6.8,1,1.5,1.2,0,0,0,0,0,0,0,0,.2,0,.2-.1,0-.1,0-.2-.1-.2-2-.7-1.4-2.5-1.4-2.5,0-.1,0-.2-.1-.2,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M365.6,293.2c.2-.7.6-1.3.6-1.3,0,0,.2-.1.3,0,0,0,.1.2,0,.3,0,0-.8,1.2-.7,2.3,0,.1,0,.2-.2.2-.1,0-.2,0-.2-.2,0-.4,0-.9.1-1.3Z" fill="#fff"/>
                  <path d="M366.4,291.8c0,0-.1,0-.2,0,0,0-.4.6-.6,1.3-.1.4-.2.8-.1,1.3,0,0,0,.2.2.2s0,0,0,0c.1,0,.2-.1.2-.2-.2-1.1.6-2.3.7-2.3,0,0,0-.2,0-.3,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <g>
                    <path d="M408.5,291.6c-.6,0-1.1,0-1.6,0h-.4c-1.4-.1-2.6-1.6-2.6-2.4,0-.2,0-.5.6-.5,2.1-.2,3.2-.8,4.8-2.5.5-.5,1.3-.8,2.4-.8s2.1.3,2.5.4c0,.2,0,1.1-1.3,3.5-1.2,2.2-2.9,2.5-4.3,2.5Z" fill="#fff"/>
                    <path d="M411.7,285.6c.9,0,1.8.2,2.2.3,0,.4-.3,1.3-1.3,3.2-1.1,2.1-2.8,2.3-4.1,2.3s-1.1,0-1.6,0h-.4c-1.2-.1-2.4-1.4-2.4-2.1,0,0,0-.2.4-.3,2.1-.2,3.4-.9,5-2.6.5-.5,1.2-.7,2.2-.7M411.7,285.1c-1,0-2,.2-2.6.9-1.6,1.7-2.7,2.2-4.7,2.4s0,3.2,2.1,3.3c.6,0,1.4.1,2.1.1,1.7,0,3.4-.4,4.6-2.6,1.7-3.1,1.3-3.8,1.3-3.8,0,0-1.3-.4-2.7-.4h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M403.4,288.9c.1-.4.4-.6,1-.7,2-.2,3-.8,4.6-2.4.7-.7,1.9-1.1,3.4-.9,1.1,0,2.1.4,2.1.4,0,0,0,0,.1,0,0,.1.3.9-1.3,4-1.6,3-4.4,2.8-6.4,2.6-.1,0-.3,0-.4,0-.7,0-1.5-.4-2.1-1-.6-.6-.9-1.2-1-1.7,0-.1,0-.2,0-.3ZM414.3,285.6c-.6-.2-3.7-1-5,.4-1.6,1.7-2.7,2.3-4.8,2.5-.4,0-.7.2-.6.6,0,.8,1.3,2.3,2.7,2.4.1,0,.3,0,.4,0,2,.2,4.5.4,6-2.4.6-1.2,1.1-2.2,1.2-2.9,0-.4,0-.6,0-.7Z" fill="#fff"/>
                    <path d="M411.7,284.9c-1.2,0-2.2.3-2.8,1-1.5,1.6-2.6,2.2-4.6,2.4-.5,0-.9.3-1,.7,0,0,0,.2,0,.3,0,.5.4,1.2,1,1.7.6.6,1.4,1,2.1,1,.1,0,.3,0,.4,0,.5,0,1.1,0,1.6,0,1.7,0,3.5-.4,4.8-2.7,1.6-3.1,1.4-3.8,1.3-4,0,0,0,0-.1,0,0,0-1-.3-2.1-.4-.2,0-.5,0-.7,0h0ZM408.5,291.7c-.6,0-1.1,0-1.6,0-.2,0-.3,0-.4,0-1.4-.1-2.7-1.6-2.7-2.4,0-.3.2-.5.6-.6,2.1-.2,3.2-.8,4.8-2.5.6-.6,1.6-.8,2.5-.8s2.2.3,2.6.4c0,0,0,.3,0,.7-.2.7-.6,1.7-1.2,2.9-1.1,2.1-2.8,2.5-4.4,2.5h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M412.4,296.1c-.9-.7-1.7-2.3-1.7-2.3h0c0,0,0-.1,0-.1-.2,0-.7-.3-.8-.6,0-.2.3-.6.6-.8h.1c0,0,0-.2,0-.2-.2-1.3.4-2.3.7-2.7,1.7,1.5,1.4,5.6,1.2,6.8Z" fill="#fff"/>
                    <path d="M411.2,289.6c1.1,1.3,1.2,4.2,1,5.9-.6-.6-1.1-1.5-1.3-1.9v-.2c0,0-.3,0-.3,0-.3-.1-.6-.3-.6-.4,0-.1.3-.4.5-.6l.2-.2v-.3c-.2-1,.2-1.9.4-2.3M411.1,288.9s-1.1,1.2-.9,3.1c0,0-.8.6-.7,1.1.2.5.9.8.9.8,0,0,.9,2,2.1,2.6,0,0,.9-6-1.5-7.6h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M409.4,292.8c.1-.4.5-.7.6-.9-.2-1.9.9-3.1,1-3.2,0,0,.2,0,.3,0,2.4,1.7,1.6,7.5,1.6,7.8,0,0,0,.1-.1.1s-.1,0-.2,0c-1.1-.6-2-2.3-2.2-2.6-.2,0-.8-.4-1-.9,0-.1,0-.3,0-.4ZM410.4,292.1s0,0,0,0c-.5.4-.6.8-.6.9.1.3.6.6.8.6,0,0,0,0,.1.1,0,0,.8,1.7,1.8,2.4.1-1.2.5-5.5-1.3-7-.3.4-.9,1.4-.7,2.8,0,0,0,0,0,0ZM411.1,288.9h0s0,0,0,0Z" fill="#fff"/>
                    <path d="M411.1,288.7c0,0-.1,0-.1,0,0,0-1.2,1.3-1,3.2-.2.1-.5.5-.6.9,0,.1,0,.3,0,.4.2.5.7.8,1,.9.2.4,1.1,2.1,2.2,2.6,0,0,0,0,0,0s0,0,0,0c0,0,0,0,.1-.1,0-.2.9-6.1-1.6-7.8,0,0,0,0-.1,0h0ZM411.1,288.9h0s0,0,0,0h0ZM412.5,296.2c-1-.7-1.8-2.4-1.8-2.4,0,0,0,0-.1-.1-.2,0-.7-.3-.8-.6,0-.1,0-.5.6-.9,0,0,0,0,0,0,0,0,0,0,0,0-.2-1.4.5-2.5.7-2.8,1.8,1.5,1.4,5.9,1.3,7h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M416.3,297.5c-1.4,0-2.6-.4-3.6-1.2h0s-.9-2,.1-3.8v-.2c0,0,0-.1,0-.1,0,0-1.6-1.9-1.5-3.8.2-.4,1.9-2.8,4.8-3,.4,0,.8,0,1.2,0,2.4,0,6.6.7,7.2,5.1.3,1.9-.1,3.5-1.2,4.8-1,1.2-2.4,1.9-3.3,1.9-.4,0-.8,0-1.2.2-.7.1-1.6.2-2.4.2Z" fill="#fff"/>
                    <path d="M417.3,285.5h0c2.3,0,6.4.6,6.9,4.9.2,1.8-.1,3.4-1.1,4.6-1,1.2-2.3,1.8-3.2,1.8-.4,0-.8,0-1.3.2-.7.1-1.5.2-2.4.2-1.3,0-2.4-.3-3.3-1.1-.2-.4-.8-2,0-3.6l.2-.3-.2-.3s-1.5-1.8-1.4-3.6c.3-.5,1.9-2.6,4.5-2.8.4,0,.8,0,1.2,0M417.3,285c-.4,0-.8,0-1.2,0-3.2.3-5,3.2-5,3.2-.2,2.1,1.6,4.1,1.6,4.1-1.2,2.1,0,4.2,0,4.2,1.2,1,2.5,1.2,3.7,1.2s2.8-.4,3.7-.4c1.7-.1,5.4-2.1,4.7-7-.6-4.3-4.4-5.3-7.4-5.3h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M410.9,288.2s0,0,0,0c0-.1,1.8-3,5.1-3.3,1.2-.1,3.4-.1,5.4.7,2,.9,3.2,2.5,3.5,4.7.4,2.5-.5,4.2-1.3,5.1-1.1,1.3-2.7,2-3.6,2.1-.3,0-.7,0-1.2.2-1.8.3-4.3.7-6.3-1,0,0,0,0,0,0,0,0-1.1-2.1,0-4.2-.4-.4-1.7-2.2-1.5-4.1,0,0,0,0,0,0ZM424.4,293.2c.2-.9.3-1.8.2-2.8-.3-2.1-1.4-3.6-3.3-4.4-1.9-.8-4.1-.8-5.2-.7-2.9.3-4.6,2.7-4.8,3.1-.1,1.9,1.5,3.9,1.5,3.9,0,0,0,.1,0,.2-1,1.8-.2,3.7,0,3.9,1.9,1.6,4.3,1.2,6,.9.5,0,.9-.1,1.2-.2.9,0,2.4-.7,3.4-1.9.5-.6.8-1.2,1-2Z" fill="#fff"/>
                    <path d="M417.3,284.8c-.5,0-.9,0-1.2,0-3.3.3-5.1,3.2-5.1,3.3,0,0,0,0,0,0,0,0,0,0,0,0-.1,1.9,1.2,3.7,1.5,4.1-1.1,2.1,0,4.1,0,4.2,0,0,0,0,0,0,1.2,1,2.6,1.3,3.8,1.3s1.7-.1,2.5-.3c.5,0,.9-.1,1.2-.2,1,0,2.6-.7,3.6-2.1.8-.9,1.6-2.6,1.3-5.1-.3-2.2-1.5-3.8-3.5-4.7-1.4-.6-3-.8-4.2-.8h0ZM416.4,297.5c-1.2,0-2.5-.3-3.6-1.2-.1-.3-.9-2.1,0-3.9,0,0,0-.2,0-.2,0,0-1.6-1.9-1.5-3.9.2-.3,1.9-2.8,4.8-3.1.3,0,.7,0,1.2,0,1.2,0,2.7.1,4,.8,1.9.8,3,2.3,3.3,4.4.1,1,0,2-.2,2.8-.2.7-.6,1.4-1,2-1,1.2-2.5,1.9-3.4,1.9-.4,0-.8,0-1.2.2-.7.1-1.6.2-2.4.2h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <path d="M405.1,289c0,0,.1-.1.2-.1,2.1,0,3.1-1.3,3.1-1.3,0,0,.2-.1.3,0,0,0,.1.2,0,.3,0,0-1.1,1.6-3.5,1.5-.1,0-.2,0-.2-.2,0,0,0,0,0,0Z" fill="#fff"/>
                  <path d="M408.6,287.5c0,0-.1,0-.2,0,0,0-.9,1.3-2.9,1.3s-.1,0-.2,0c0,0,0,0,0,0,0,0-.2,0-.2.1,0,0,0,0,0,0,0,.1,0,.2.2.2,0,0,.2,0,.2,0,2.2,0,3.2-1.4,3.2-1.5,0,0,0-.2,0-.3,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M409.3,286.7s0,0,0,0c0,0,.9-.9,2.2-.8.1,0,.2.1.2.2,0,.1-.1.2-.2.2-1-.2-1.8.6-1.8.6,0,0-.2,0-.3,0,0,0,0-.1,0-.2Z" fill="#fff"/>
                  <path d="M411.1,285.8c-1.1,0-1.8.8-1.8.8,0,0,0,0,0,0,0,0,0,.1,0,.2,0,0,0,0,.1,0s.1,0,.1,0c0,0,.6-.7,1.5-.7,0,0,.2,0,.3,0,0,0,0,0,0,0,0,0,.2,0,.2-.2,0-.1,0-.2-.2-.2-.1,0-.2,0-.3,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M413.1,292.2s0,0,0,0c0,0,.2,0,.3,0,0,0,.6.8,1.3.8.3,0,.6-.2.9-.5.1-.2.3-.4.4-.5.6-.8,1.2-1.6,2-1.7.5,0,.9.2,1.4.8.5.5.9.8,1.3.7.6,0,.9-.6.9-.6,0,0,.2-.1.3,0,0,0,.1.2,0,.3,0,0-.4.7-1.2.8-.5,0-1.1-.2-1.6-.8-.4-.5-.8-.7-1.1-.7-.6,0-1.1.7-1.7,1.5-.1.2-.3.4-.4.5-.3.4-.7.7-1.2.7-.9,0-1.6-.9-1.6-.9,0,0,0-.1,0-.2Z" fill="#fff"/>
                  <path d="M418,290.2s0,0,0,0c-.8,0-1.3.8-2,1.7-.1.2-.3.4-.4.5-.3.3-.6.5-.9.5,0,0,0,0,0,0-.7,0-1.3-.7-1.3-.8,0,0,0,0-.1,0s0,0-.1,0c0,0,0,0,0,0,0,0,0,.1,0,.2,0,0,.7.9,1.6.9s0,0,0,0c.4,0,.8-.2,1.2-.7.1-.2.3-.4.4-.5.6-.8,1.1-1.5,1.7-1.5,0,0,0,0,0,0,.3,0,.7.2,1.1.7.5.6,1,.8,1.5.8s0,0,.1,0c.7,0,1.2-.8,1.2-.8,0,0,0-.2,0-.3,0,0,0,0-.1,0,0,0-.1,0-.2,0,0,0-.3.5-.9.6,0,0,0,0,0,0-.4,0-.8-.2-1.2-.7-.5-.5-.9-.8-1.4-.8h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M412.2,288c0,0,0-.1.2-.1.1,0,.2,0,.2.2,0,0,.3,2.3,1.4,3,.3.2.5.3.6.2.1,0,.2-.4.2-.5,0-.1,0-.2.2-.2.1,0,.2,0,.2.2,0,0,0,.6-.4.8-.3.1-.6,0-1-.2-1.1-.8-1.5-3.2-1.5-3.3,0,0,0,0,0,0Z" fill="#fff"/>
                  <path d="M412.4,287.8s0,0,0,0c0,0-.1,0-.2.1,0,0,0,0,0,0,0,0,.4,2.4,1.5,3.3.3.2.5.3.7.3s.2,0,.3,0c.4-.2.4-.8.4-.8,0-.1,0-.2-.2-.2s0,0,0,0c-.1,0-.2,0-.2.2,0,.1,0,.4-.2.5,0,0,0,0,0,0-.1,0-.3,0-.5-.2-1-.7-1.4-3-1.4-3,0,0,0-.2-.2-.2h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M416.4,292.9s0,0,0,0c0,0,.3-.7.7-.8.1,0,.3,0,.4,0,.6.3,1.1,2.1.7,3.6h0c0,.1-.1.2-.2.1-.1,0-.2-.1-.1-.2.4-1.5-.2-3-.5-3.1,0,0,0,0,0,0-.2,0-.3.4-.4.6,0,0-.2.1-.3.1,0,0-.1-.1-.1-.2Z" fill="#fff"/>
                  <path d="M417.3,292c0,0-.1,0-.2,0-.4.1-.6.7-.7.8,0,0,0,0,0,0,0,0,0,.2.1.2,0,0,0,0,0,0,0,0,.1,0,.2-.1,0-.2.3-.5.4-.6,0,0,0,0,0,0s0,0,0,0c.3.2.9,1.7.5,3.1,0,.1,0,.2.1.2,0,0,0,0,0,0,0,0,.2,0,.2-.1h0c.4-1.5-.1-3.3-.7-3.6,0,0-.2,0-.2,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M416.8,294.9c0-.2,0-.3,0-.3,0,0,.2-.1.3-.1,0,0,.1.2.1.3,0,0-.4,1-.1,2,0,.1,0,.2-.1.2-.1,0-.2,0-.2-.1-.2-.8,0-1.6,0-2Z" fill="#fff"/>
                  <path d="M417.1,294.5c0,0-.1,0-.2.1,0,0,0,.1,0,.3-.1.4-.3,1.2,0,2,0,0,.1.1.2.1s0,0,0,0c.1,0,.2-.1.1-.2-.3-1,.1-2,.1-2,0,0,0-.2-.1-.3,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M420.7,286.6s0,0,0,0c0,0,.2-.1.3,0,0,0,.7.3,1.3,1,.9.8,1.4,1.8,1.5,2.8,0,.1,0,.2-.2.2-.1,0-.2,0-.2-.2-.2-2.2-2.6-3.5-2.6-3.5,0,0-.1-.1,0-.2Z" fill="#fff"/>
                  <path d="M420.9,286.5c0,0-.1,0-.2.1,0,0,0,0,0,0,0,0,0,.2,0,.2,0,0,2.4,1.3,2.6,3.5,0,.1,0,.2.2.2s0,0,0,0c.1,0,.2-.1.2-.2,0-1-.6-2-1.5-2.8-.7-.6-1.3-1-1.3-1,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <g>
                    <path d="M411.5,302.5s-.9-.8-1.8-.9l1.8.9Z" fill="#fff"/>
                    <path d="M409.7,301.7l1.8.9s-.9-.8-1.8-.9h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M409.6,301.6c0,0,.1-.1.2-.1.9,0,1.8.9,1.9.9,0,0,0,.2,0,.3,0,0-.2,0-.3,0,0,0-.9-.8-1.6-.8-.1,0-.2-.1-.2-.2,0,0,0,0,0,0Z" fill="#fff"/>
                    <path d="M409.7,301.5c0,0-.2,0-.2.1,0,0,0,0,0,0,0,.1,0,.2.2.2.7,0,1.6.8,1.6.8,0,0,0,0,.1,0s.1,0,.1,0c0,0,0-.2,0-.3,0,0-1-.8-1.9-.9,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                </g>
              </g>
              <g>
                <g>
                  <path d="M545.4,288.8c-3.6,0-6.6-3-6.6-6.6s3-6.6,6.6-6.6,6.6,3,6.6,6.6-3,6.6-6.6,6.6Z" fill="#fff"/>
                  <path d="M545.4,275.8c3.5,0,6.4,2.9,6.4,6.4s-2.9,6.4-6.4,6.4-6.4-2.9-6.4-6.4,2.9-6.4,6.4-6.4M545.4,275.3c-3.8,0-6.9,3.1-6.9,6.9s3.1,6.9,6.9,6.9,6.9-3.1,6.9-6.9-3.1-6.9-6.9-6.9h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M545.4,289.2c-3.9,0-7-3.2-7-7s3.2-7,7-7,7,3.2,7,7-3.2,7-7,7ZM545.4,275.5c-3.7,0-6.7,3-6.7,6.7s3,6.7,6.7,6.7,6.7-3,6.7-6.7-3-6.7-6.7-6.7Z" fill="#fff"/>
                  <path d="M545.4,275.1c-3.9,0-7,3.2-7,7s3.2,7,7,7,7-3.2,7-7-3.2-7-7-7h0ZM545.4,288.9c-3.7,0-6.7-3-6.7-6.7s3-6.7,6.7-6.7,6.7,3,6.7,6.7-3,6.7-6.7,6.7h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M545.4,286.8c-2.5,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6,4.6,2.1,4.6,4.6-2.1,4.6-4.6,4.6Z" fill="#fff"/>
                  <path d="M545.4,277.8c2.4,0,4.3,2,4.3,4.3s-2,4.3-4.3,4.3-4.3-2-4.3-4.3,2-4.3,4.3-4.3M545.4,277.3c-2.7,0-4.8,2.2-4.8,4.8s2.2,4.8,4.8,4.8,4.8-2.2,4.8-4.8-2.2-4.8-4.8-4.8h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M545.4,287.2c-2.8,0-5-2.3-5-5s2.3-5,5-5,5,2.3,5,5-2.3,5-5,5ZM545.4,277.5c-2.6,0-4.7,2.1-4.7,4.7s2.1,4.7,4.7,4.7,4.7-2.1,4.7-4.7-2.1-4.7-4.7-4.7Z" fill="#fff"/>
                  <path d="M545.4,277.2c-2.8,0-5,2.3-5,5s2.3,5,5,5,5-2.3,5-5-2.3-5-5-5h0ZM545.4,286.8c-2.6,0-4.7-2.1-4.7-4.7s2.1-4.7,4.7-4.7,4.7,2.1,4.7,4.7-2.1,4.7-4.7,4.7h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M543.4,331.6c-3.6,0-6.6-3-6.6-6.6s3-6.6,6.6-6.6,6.6,3,6.6,6.6-3,6.6-6.6,6.6Z" fill="#fff"/>
                  <path d="M543.4,318.7c3.5,0,6.4,2.9,6.4,6.4s-2.9,6.4-6.4,6.4-6.4-2.9-6.4-6.4,2.9-6.4,6.4-6.4M543.4,318.2c-3.8,0-6.9,3.1-6.9,6.9s3.1,6.9,6.9,6.9,6.9-3.1,6.9-6.9-3.1-6.9-6.9-6.9h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M543.4,332c-3.9,0-7-3.2-7-7s3.2-7,7-7,7,3.2,7,7-3.2,7-7,7ZM543.4,318.3c-3.7,0-6.7,3-6.7,6.7s3,6.7,6.7,6.7,6.7-3,6.7-6.7-3-6.7-6.7-6.7Z" fill="#fff"/>
                  <path d="M543.4,318c-3.9,0-7,3.2-7,7s3.2,7,7,7,7-3.2,7-7-3.2-7-7-7h0ZM543.4,331.7c-3.7,0-6.7-3-6.7-6.7s3-6.7,6.7-6.7,6.7,3,6.7,6.7-3,6.7-6.7,6.7h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <circle cx="543.4" cy="325" r="4.6" fill="#fff"/>
                  <path d="M543.4,320.7c2.4,0,4.3,2,4.3,4.3s-2,4.3-4.3,4.3-4.3-2-4.3-4.3,2-4.3,4.3-4.3M543.4,320.2c-2.7,0-4.8,2.2-4.8,4.8s2.2,4.8,4.8,4.8,4.8-2.2,4.8-4.8-2.2-4.8-4.8-4.8h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M543.4,330c-2.8,0-5-2.3-5-5s2.3-5,5-5,5,2.3,5,5-2.3,5-5,5ZM543.4,320.3c-2.6,0-4.7,2.1-4.7,4.7s2.1,4.7,4.7,4.7,4.7-2.1,4.7-4.7-2.1-4.7-4.7-4.7Z" fill="#fff"/>
                  <path d="M543.4,320c-2.8,0-5,2.3-5,5s2.3,5,5,5,5-2.3,5-5-2.3-5-5-5h0ZM543.4,329.7c-2.6,0-4.7-2.1-4.7-4.7s2.1-4.7,4.7-4.7,4.7,2.1,4.7,4.7-2.1,4.7-4.7,4.7h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M543.4,331.6c-3.6,0-6.6-3-6.6-6.6s3-6.6,6.6-6.6,6.6,3,6.6,6.6-3,6.6-6.6,6.6Z" fill="#fff"/>
                  <path d="M543.4,318.7c3.5,0,6.4,2.9,6.4,6.4s-2.9,6.4-6.4,6.4-6.4-2.9-6.4-6.4,2.9-6.4,6.4-6.4M543.4,318.2c-3.8,0-6.9,3.1-6.9,6.9s3.1,6.9,6.9,6.9,6.9-3.1,6.9-6.9-3.1-6.9-6.9-6.9h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M543.4,332c-3.9,0-7-3.2-7-7s3.2-7,7-7,7,3.2,7,7-3.2,7-7,7ZM543.4,318.3c-3.7,0-6.7,3-6.7,6.7s3,6.7,6.7,6.7,6.7-3,6.7-6.7-3-6.7-6.7-6.7Z" fill="#fff"/>
                  <path d="M543.4,318c-3.9,0-7,3.2-7,7s3.2,7,7,7,7-3.2,7-7-3.2-7-7-7h0ZM543.4,331.7c-3.7,0-6.7-3-6.7-6.7s3-6.7,6.7-6.7,6.7,3,6.7,6.7-3,6.7-6.7,6.7h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <circle cx="543.4" cy="325" r="4.6" fill="#fff"/>
                  <path d="M543.4,320.7c2.4,0,4.3,2,4.3,4.3s-2,4.3-4.3,4.3-4.3-2-4.3-4.3,2-4.3,4.3-4.3M543.4,320.2c-2.7,0-4.8,2.2-4.8,4.8s2.2,4.8,4.8,4.8,4.8-2.2,4.8-4.8-2.2-4.8-4.8-4.8h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M543.4,330c-2.8,0-5-2.3-5-5s2.3-5,5-5,5,2.3,5,5-2.3,5-5,5ZM543.4,320.3c-2.6,0-4.7,2.1-4.7,4.7s2.1,4.7,4.7,4.7,4.7-2.1,4.7-4.7-2.1-4.7-4.7-4.7Z" fill="#fff"/>
                  <path d="M543.4,320c-2.8,0-5,2.3-5,5s2.3,5,5,5,5-2.3,5-5-2.3-5-5-5h0ZM543.4,329.7c-2.6,0-4.7-2.1-4.7-4.7s2.1-4.7,4.7-4.7,4.7,2.1,4.7,4.7-2.1,4.7-4.7,4.7h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M551.6,333c-1,0-1.9-.8-1.9-1.9s.8-1.9,1.9-1.9,1.9.8,1.9,1.9-.8,1.9-1.9,1.9Z" fill="#fff"/>
                  <path d="M551.6,329.4c.9,0,1.6.7,1.6,1.6s-.7,1.6-1.6,1.6-1.6-.7-1.6-1.6.7-1.6,1.6-1.6M551.6,328.9c-1.2,0-2.1,1-2.1,2.1s1,2.1,2.1,2.1,2.1-1,2.1-2.1-1-2.1-2.1-2.1h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M551.6,333.4c-1.3,0-2.3-1-2.3-2.3s1-2.3,2.3-2.3,2.3,1,2.3,2.3-1,2.3-2.3,2.3ZM551.6,329.1c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Z" fill="#fff"/>
                  <path d="M551.6,328.8c-1.3,0-2.3,1-2.3,2.3s1,2.3,2.3,2.3,2.3-1,2.3-2.3-1-2.3-2.3-2.3h0ZM551.6,333c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M551.6,332.3c-.7,0-1.3-.6-1.3-1.3s.6-1.3,1.3-1.3,1.3.6,1.3,1.3-.6,1.3-1.3,1.3Z" fill="#fff"/>
                  <path d="M551.6,330.1c.6,0,1,.5,1,1s-.5,1-1,1-1-.5-1-1,.5-1,1-1M551.6,329.6c-.8,0-1.5.7-1.5,1.5s.7,1.5,1.5,1.5,1.5-.7,1.5-1.5-.7-1.5-1.5-1.5h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M551.6,332.8c-.9,0-1.7-.8-1.7-1.7s.8-1.7,1.7-1.7,1.7.8,1.7,1.7-.8,1.7-1.7,1.7ZM551.6,329.7c-.7,0-1.3.6-1.3,1.3s.6,1.3,1.3,1.3,1.3-.6,1.3-1.3-.6-1.3-1.3-1.3Z" fill="#fff"/>
                  <path d="M551.6,329.4c-.9,0-1.7.8-1.7,1.7s.8,1.7,1.7,1.7,1.7-.8,1.7-1.7-.8-1.7-1.7-1.7h0ZM551.6,332.4c-.7,0-1.3-.6-1.3-1.3s.6-1.3,1.3-1.3,1.3.6,1.3,1.3-.6,1.3-1.3,1.3h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M551.6,333c-1,0-1.9-.8-1.9-1.9s.8-1.9,1.9-1.9,1.9.8,1.9,1.9-.8,1.9-1.9,1.9Z" fill="#fff"/>
                  <path d="M551.6,329.4c.9,0,1.6.7,1.6,1.6s-.7,1.6-1.6,1.6-1.6-.7-1.6-1.6.7-1.6,1.6-1.6M551.6,328.9c-1.2,0-2.1,1-2.1,2.1s1,2.1,2.1,2.1,2.1-1,2.1-2.1-1-2.1-2.1-2.1h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M551.6,333.4c-1.3,0-2.3-1-2.3-2.3s1-2.3,2.3-2.3,2.3,1,2.3,2.3-1,2.3-2.3,2.3ZM551.6,329.1c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Z" fill="#fff"/>
                  <path d="M551.6,328.8c-1.3,0-2.3,1-2.3,2.3s1,2.3,2.3,2.3,2.3-1,2.3-2.3-1-2.3-2.3-2.3h0ZM551.6,333c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M551.6,332.3c-.7,0-1.3-.6-1.3-1.3s.6-1.3,1.3-1.3,1.3.6,1.3,1.3-.6,1.3-1.3,1.3Z" fill="#fff"/>
                  <path d="M551.6,330.1c.6,0,1,.5,1,1s-.5,1-1,1-1-.5-1-1,.5-1,1-1M551.6,329.6c-.8,0-1.5.7-1.5,1.5s.7,1.5,1.5,1.5,1.5-.7,1.5-1.5-.7-1.5-1.5-1.5h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M551.6,332.8c-.9,0-1.7-.8-1.7-1.7s.8-1.7,1.7-1.7,1.7.8,1.7,1.7-.8,1.7-1.7,1.7ZM551.6,329.7c-.7,0-1.3.6-1.3,1.3s.6,1.3,1.3,1.3,1.3-.6,1.3-1.3-.6-1.3-1.3-1.3Z" fill="#fff"/>
                  <path d="M551.6,329.4c-.9,0-1.7.8-1.7,1.7s.8,1.7,1.7,1.7,1.7-.8,1.7-1.7-.8-1.7-1.7-1.7h0ZM551.6,332.4c-.7,0-1.3-.6-1.3-1.3s.6-1.3,1.3-1.3,1.3.6,1.3,1.3-.6,1.3-1.3,1.3h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M545.6,296.3c-1,0-1.9-.8-1.9-1.9s.8-1.9,1.9-1.9,1.9.8,1.9,1.9-.8,1.9-1.9,1.9Z" fill="#fff"/>
                  <path d="M545.6,292.8c.9,0,1.6.7,1.6,1.6s-.7,1.6-1.6,1.6-1.6-.7-1.6-1.6.7-1.6,1.6-1.6M545.6,292.3c-1.2,0-2.1,1-2.1,2.1s1,2.1,2.1,2.1,2.1-1,2.1-2.1-1-2.1-2.1-2.1h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M545.6,296.8c-1.3,0-2.3-1-2.3-2.3s1-2.3,2.3-2.3,2.3,1,2.3,2.3-1,2.3-2.3,2.3ZM545.6,292.5c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Z" fill="#fff"/>
                  <path d="M545.6,292.1c-1.3,0-2.3,1-2.3,2.3s1,2.3,2.3,2.3,2.3-1,2.3-2.3-1-2.3-2.3-2.3h0ZM545.6,296.4c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <circle cx="545.6" cy="294.4" r="1.3" fill="#fff"/>
                  <path d="M545.6,293.4c.6,0,1,.5,1,1s-.5,1-1,1-1-.5-1-1,.5-1,1-1M545.6,292.9c-.8,0-1.5.7-1.5,1.5s.7,1.5,1.5,1.5,1.5-.7,1.5-1.5-.7-1.5-1.5-1.5h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M545.6,296.1c-.9,0-1.7-.8-1.7-1.7s.8-1.7,1.7-1.7,1.7.8,1.7,1.7-.8,1.7-1.7,1.7ZM545.6,293.1c-.7,0-1.3.6-1.3,1.3s.6,1.3,1.3,1.3,1.3-.6,1.3-1.3-.6-1.3-1.3-1.3Z" fill="#fff"/>
                  <path d="M545.6,292.7c-.9,0-1.7.8-1.7,1.7s.8,1.7,1.7,1.7,1.7-.8,1.7-1.7-.8-1.7-1.7-1.7h0ZM545.6,295.8c-.7,0-1.3-.6-1.3-1.3s.6-1.3,1.3-1.3,1.3.6,1.3,1.3-.6,1.3-1.3,1.3h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M545.6,296.3c-1,0-1.9-.8-1.9-1.9s.8-1.9,1.9-1.9,1.9.8,1.9,1.9-.8,1.9-1.9,1.9Z" fill="#fff"/>
                  <path d="M545.6,292.8c.9,0,1.6.7,1.6,1.6s-.7,1.6-1.6,1.6-1.6-.7-1.6-1.6.7-1.6,1.6-1.6M545.6,292.3c-1.2,0-2.1,1-2.1,2.1s1,2.1,2.1,2.1,2.1-1,2.1-2.1-1-2.1-2.1-2.1h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M545.6,296.8c-1.3,0-2.3-1-2.3-2.3s1-2.3,2.3-2.3,2.3,1,2.3,2.3-1,2.3-2.3,2.3ZM545.6,292.5c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Z" fill="#fff"/>
                  <path d="M545.6,292.1c-1.3,0-2.3,1-2.3,2.3s1,2.3,2.3,2.3,2.3-1,2.3-2.3-1-2.3-2.3-2.3h0ZM545.6,296.4c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <circle cx="545.6" cy="294.4" r="1.3" fill="#fff"/>
                  <path d="M545.6,293.4c.6,0,1,.5,1,1s-.5,1-1,1-1-.5-1-1,.5-1,1-1M545.6,292.9c-.8,0-1.5.7-1.5,1.5s.7,1.5,1.5,1.5,1.5-.7,1.5-1.5-.7-1.5-1.5-1.5h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M545.6,296.1c-.9,0-1.7-.8-1.7-1.7s.8-1.7,1.7-1.7,1.7.8,1.7,1.7-.8,1.7-1.7,1.7ZM545.6,293.1c-.7,0-1.3.6-1.3,1.3s.6,1.3,1.3,1.3,1.3-.6,1.3-1.3-.6-1.3-1.3-1.3Z" fill="#fff"/>
                  <path d="M545.6,292.7c-.9,0-1.7.8-1.7,1.7s.8,1.7,1.7,1.7,1.7-.8,1.7-1.7-.8-1.7-1.7-1.7h0ZM545.6,295.8c-.7,0-1.3-.6-1.3-1.3s.6-1.3,1.3-1.3,1.3.6,1.3,1.3-.6,1.3-1.3,1.3h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <g>
                    <path d="M548.6,273.8c-.4,0-1.1-.1-1.8-.3-.9-.2-1.4-.5-1.8-.6.4,0,1.1.1,1.8.3.9.2,1.4.5,1.8.6Z" fill="#fff"/>
                    <path d="M545,272.5c-.2,0-.4,0-.4.1,0,.2.9.7,2.2,1,.8.2,1.6.3,2,.3s.4,0,.4-.1c0-.2-.9-.7-2.2-1-.8-.2-1.6-.3-2-.3h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M548.7,274.2c-.1,0-.2,0-.4,0-.5,0-1.1-.2-1.7-.3-.6-.2-1.2-.4-1.6-.6-.5-.3-.7-.5-.7-.7,0-.2.5-.5,2.6.1.6.2,1.2.4,1.6.6.5.3.7.5.7.7,0,.2-.2.2-.6.2ZM544.8,272.7c.2.2.9.5,2,.8,1.1.3,1.8.4,2.1.3-.2-.2-.9-.5-2-.8-1.1-.3-1.8-.4-2.1-.3Z" fill="#fff"/>
                    <path d="M545,272.3c-.5,0-.6.1-.6.2,0,.2.1.4.7.7.4.2,1,.4,1.6.6.6.2,1.2.3,1.7.3.1,0,.3,0,.4,0,.4,0,.5,0,.6-.2,0-.2-.1-.4-.7-.7-.4-.2-1-.4-1.6-.6-1-.3-1.6-.4-2-.4h0ZM548.7,273.8c-.3,0-1,0-2-.3-1.1-.3-1.8-.6-2-.8,0,0,0,0,.2,0,.3,0,1,0,2,.3,1.1.3,1.8.6,2,.8,0,0,0,0-.2,0h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M550.9,275c-.2,0-.4,0-.6,0-.3,0-.6-.3-.8-.5-.2-.2-.2-.3-.2-.5,0-.2.4-.4.8-.4s.4,0,.6,0c.3,0,.6.3.8.5.2.2.2.3.2.5,0,.2-.4.4-.8.4Z" fill="#fff"/>
                    <path d="M550.1,273.8c.2,0,.3,0,.5,0,.3,0,.6.2.7.4.1.1.1.2.1.3,0,0-.2.2-.6.2s-.3,0-.5,0c-.3,0-.6-.2-.7-.4-.1-.1-.1-.2-.1-.3,0,0,.2-.2.6-.2M550.1,273.3c-.5,0-1,.2-1.1.6-.1.5.4,1,1.2,1.3.2,0,.4,0,.6,0,.5,0,1-.2,1.1-.6.1-.5-.4-1-1.2-1.3-.2,0-.4,0-.6,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M550.9,275.4c-.2,0-.4,0-.7,0-.4-.1-.8-.3-1-.6-.3-.3-.4-.6-.3-.9,0-.3.3-.5.7-.6.3,0,.8,0,1.2,0,.4.1.8.3,1,.6.3.3.4.6.3.9,0,.3-.3.5-.7.6-.2,0-.3,0-.5,0ZM550.1,273.5c-.2,0-.3,0-.4,0-.3,0-.4.2-.5.4,0,.2,0,.4.2.6.2.2.5.4.9.5.4,0,.7.1,1,0,.3,0,.4-.2.5-.4,0-.2,0-.4-.2-.6-.2-.2-.5-.4-.9-.5-.2,0-.4,0-.6,0Z" fill="#fff"/>
                    <path d="M550.1,273.1c-.2,0-.4,0-.5,0-.4.1-.6.3-.7.6,0,.3,0,.6.3.9.2.3.6.5,1,.6.2,0,.5,0,.7,0s.4,0,.5,0c.4-.1.6-.3.7-.6,0-.3,0-.6-.3-.9-.2-.3-.6-.5-1-.6-.2,0-.5,0-.7,0h0ZM550.9,275c-.2,0-.4,0-.6,0-.4,0-.7-.3-.9-.5-.2-.2-.3-.4-.2-.6s.2-.3.5-.4c.1,0,.3,0,.4,0s.4,0,.6,0c.4,0,.7.3.9.5.2.2.3.4.2.6,0,.2-.2.3-.5.4-.1,0-.3,0-.4,0h0Z" fill="#9b978f"/>
                  </g>
                </g>
              </g>
              <g>
                <g>
                  <g>
                    <path d="M539.7,332.9c.2-.3.7-.8,1.4-1.4.7-.6,1.3-1,1.6-1.1-.2.3-.7.8-1.4,1.4-.7.6-1.3,1-1.6,1.1Z" fill="#fff"/>
                    <path d="M543,330c-.3,0-1.2.5-2.1,1.3-1,.9-1.8,1.7-1.6,1.9,0,0,0,0,0,0,.3,0,1.2-.5,2.1-1.3,1-.9,1.8-1.7,1.6-1.9,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M539.4,333.4c0,0-.2,0-.2,0-.4-.4,1.2-1.8,1.6-2.2.5-.4,2-1.7,2.4-1.2.4.4-1.2,1.8-1.6,2.2-.4.3-1.6,1.3-2.2,1.3ZM542.9,330.2c-.3,0-.9.5-1.9,1.2-.9.8-1.4,1.4-1.5,1.6.3,0,.9-.5,1.9-1.2.9-.8,1.4-1.4,1.5-1.6Z" fill="#fff"/>
                    <path d="M543,329.8c-.6,0-1.8,1-2.2,1.3-.5.4-2,1.7-1.6,2.2,0,0,.1,0,.2,0,.6,0,1.8-1,2.2-1.3.5-.4,2-1.7,1.6-2.2,0,0-.1,0-.2,0h0ZM542.9,330.2c-.1.2-.6.8-1.5,1.6-.9.8-1.6,1.2-1.9,1.2.1-.2.6-.8,1.5-1.6.9-.8,1.6-1.2,1.9-1.2h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M543.6,330.1c-.1,0-.3,0-.4-.1-.2-.2,0-.9.6-1.4.3-.3.7-.5,1.1-.5s.3,0,.4.1c.2.2,0,.9-.6,1.4-.3.3-.7.5-1.1.5Z" fill="#fff"/>
                    <path d="M544.8,328.4c0,0,.2,0,.2,0,0,0,0,.6-.5,1-.3.3-.7.4-.9.4s-.2,0-.2,0c0,0,0-.2,0-.3,0-.2.3-.5.5-.7.3-.3.7-.4.9-.4M544.8,327.9c-.4,0-.8.2-1.2.5-.7.6-.9,1.3-.6,1.7.1.2.3.2.6.2.4,0,.8-.2,1.2-.5.7-.6.9-1.3.6-1.7-.1-.2-.3-.2-.6-.2h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M543.6,330.5c-.3,0-.5,0-.7-.3-.4-.5-.1-1.3.6-2,.7-.6,1.6-.7,2-.3.4.5.1,1.3-.6,2-.4.4-.9.6-1.3.6ZM544.8,328.1c-.3,0-.7.2-1.1.5-.6.5-.8,1.2-.6,1.5.3.3,1,.2,1.6-.3.6-.5.8-1.2.6-1.5h0c0-.1-.3-.2-.4-.2Z" fill="#fff"/>
                    <path d="M544.8,327.7c-.4,0-.9.2-1.3.6-.7.6-1,1.5-.6,2,.2.2.4.3.7.3h0c.4,0,.9-.2,1.3-.6.7-.6,1-1.5.6-2-.2-.2-.4-.3-.7-.3h0ZM543.6,330.2c-.2,0-.3,0-.4-.2-.3-.3,0-1,.6-1.5.4-.3.8-.5,1.1-.5s.3,0,.4.2c.3.3,0,1-.6,1.5-.4.3-.8.5-1.1.5h0Z" fill="#9b978f"/>
                  </g>
                </g>
              </g>
              <g>
                <g>
                  <path d="M547.2,328.6c-.3-.2-.6-.6-.6-1.8,0-1,.2-1.4.4-1.8.2-.5.4-.9.3-2.1,0-1.8,0-3.6,0-4,0,0,.1-.1.2-.1,0,0,0,0,0,.1l-.4,9.6Z" fill="#fff"/>
                  <path d="M547.1,325.5v2.2c-.1-.2-.2-.6-.2-1,0-.6,0-.9.2-1.2M547.6,318.6c-.2,0-.4.3-.4.3,0,0-.1,2,0,4.1s-.7,1.7-.7,3.8c0,2.1,1.1,2.2,1.1,2.2l.4-10.1c0-.2-.2-.3-.3-.3h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M547.7,329.1h-.2c0,0-1.3-.1-1.2-2.4,0-1,.2-1.5.4-1.9.2-.5.4-.8.3-1.9-.1-2.1,0-4.1,0-4.1h0c0,0,0,0,0,0,0,0,.3-.4.6-.3.2,0,.3.2.4.4h0s-.4,10.3-.4,10.3ZM547.3,318.9c0,.3,0,2.1,0,4,0,1.1-.1,1.6-.3,2.1-.2.4-.4.8-.4,1.8,0,1.4.4,1.8.7,2l.4-9.8c0,0,0-.1-.1-.1,0,0-.2,0-.3.2Z" fill="#fff"/>
                  <path d="M547.6,318.4c-.3,0-.5.3-.6.4h0s0,0,0,0c0,0-.1,2,0,4.1,0,1.1-.1,1.4-.3,1.9-.2.4-.4.9-.4,1.9,0,2.2,1.2,2.4,1.2,2.4h.2s.4-10.3.4-10.3h0c0-.3-.2-.4-.4-.4,0,0,0,0,0,0h0ZM547.3,328.7c-.3-.1-.7-.6-.7-2,0-1,.2-1.4.4-1.8.2-.5.4-.9.3-2.1-.1-1.9,0-3.7,0-4,0,0,.2-.2.3-.2s0,0,0,0c0,0,0,0,.1.1l-.4,9.8h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <path d="M549,280.6c0-.3-.1-.7-.4-.8s-.7,0-.9.2c0,0-.1.2-.2.2-.2,0-.3,0-.5-.1-.1,0-.2,0-.4.1-.3.2-.7.5-.7.8,0,.4.7.5.9.8,0,0,0,0,0,.2,0,.1-.2.1-.3.2-.2.1,0,.4,0,.7,0,.3-.4.6-.7.4,0,0,0,.2,0,.2s.1.1.2.2c0,.1,0,.3-.1.3s-.2.1-.4.2c-.4.2-.6.7-.7,1.1,0,.2.3,0,.5,0,.1,0,.2.2.2.4.1.7,1,1,1.6.6,0,.1.2.2.3.3.1-.3.1-.6,0-.8,0-.3-.3-.6-.1-.8.2-.2.5-.2.7-.1s.5.2.8,0c.3-.2.3-.6.1-.9s-.4-.6-.3-.9c.4.2,1,0,1.1-.4,0,0,0-.2,0-.3,0,0,.1-.1.2-.2.2-.2.3-.5.1-.8s-.5-.4-.7-.3" fill="#fff" stroke="#9b978f" stroke-miterlimit="10" stroke-width=".5"/>
                <g>
                  <path d="M547.6,286.6h-.2c-.1-.1-.2-.2-.3-.3-.3.1-.6.1-1,0-.4-.2-.7-.5-.8-.8h0c0,0,0-.2,0-.2,0,0,0,0-.1,0-.1,0-.4.1-.5-.2h0c0,0,0-.1,0-.1.1-.5.3-1,.8-1.2,0,0,.1,0,.2,0,0,0,.1,0,.2,0,0,0,0,0,0-.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0-.1-.2,0-.3,0,0,0-.2.2-.2h0s0,0,0,0c0,0,.2,0,.3,0,0,0,.2-.1.1-.2,0,0,0-.1,0-.2,0-.2-.2-.4,0-.6,0,0,.1,0,.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0-.1-.2-.2-.4-.3-.2-.1-.5-.3-.6-.6,0-.3,0-.7.7-1,.1,0,.3-.1.5-.1,0,0,.2,0,.3,0,0,0,.1,0,.2,0,0,0,0,0,0,0,0,0,0,0,0,0,.3-.3.8-.4,1.1-.2.4.2.6.6.5,1h-.3c0-.3-.1-.6-.4-.7-.2-.1-.6,0-.7.1,0,0,0,0,0,0,0,0-.1.1-.2.2-.2,0-.3,0-.4,0,0,0-.1,0-.2,0,0,0-.2,0-.3,0-.2.1-.6.4-.6.6,0,.2.2.3.4.4.2,0,.3.2.5.3.1.1.1.2,0,.3,0,.2-.2.2-.3.3,0,0,0,0,0,0,0,0,0,.1,0,.2,0,0,0,.2,0,.2,0,.2,0,.5-.3.6-.1,0-.2.1-.3.1,0,0,0,0,0,.1,0,.2,0,.4-.2.5,0,0-.2,0-.3.1,0,0,0,0-.1,0-.3.1-.4.5-.6.8,0,0,.2,0,.3,0,.2,0,.3.3.3.5h0c0,.3.3.5.5.6.3.1.6,0,.8,0h.1c0,0,0,0,0,0,0,0,0,0,.1.1,0-.2,0-.4,0-.5,0,0,0-.1,0-.2,0-.2-.2-.6,0-.8.2-.2.5-.3.9-.2h0c.2,0,.4.1.6,0,.2-.1.2-.5,0-.7,0,0,0-.1-.1-.2-.1-.2-.3-.5-.3-.8v-.3s.3.2.3.2c.1,0,.3,0,.5,0,.2,0,.3-.2.3-.4,0,0,0,0,0,0,0,0,0-.2,0-.3,0,0,.1-.1.2-.2,0,0,0,0,0,0,.2-.1.2-.4,0-.6-.1-.2-.3-.3-.5-.2v-.3c.2-.1.7,0,.8.4.2.3.1.8-.2,1,0,0,0,0,0,0,0,0,0,0-.1,0,0,0,0,0,0,.1,0,0,0,0,0,0,0,.3-.3.5-.5.6-.2,0-.3,0-.5,0,0,.1.1.3.2.4,0,0,0,.1.1.2.2.4.2.9-.2,1.1-.3.2-.6,0-.9,0h0c0,0-.4-.1-.5,0,0,.1,0,.3,0,.5,0,0,0,.1,0,.2,0,.3,0,.7,0,1v.2Z" fill="#fff"/>
                  <path d="M548.2,279.5c-.3,0-.5.1-.7.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0-.2,0,0,0-.2,0-.3,0,0,0,0,0,0,0-.2,0-.3,0-.4.1-.7.4-.8.8-.7,1,0,.3.3.5.6.6.1,0,.3.2.4.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0-.1,0-.2,0-.2.2-.1.5,0,.6,0,0,0,.1,0,.2,0,.1,0,.2-.1.2,0,0-.1,0-.2,0s0,0-.1,0h0s0,0,0,0c0,0-.1,0-.2.2,0,.1,0,.2,0,.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.1,0,0-.1,0-.2,0,0,0-.1,0-.2,0-.5.2-.7.7-.8,1.2h0c0,0,0,.1,0,.1,0,.1.2.2.3.2s.1,0,.2,0c0,0,.1,0,.1,0s0,0,0,0c0,0,0,.1,0,.2h0c0,.4.4.7.8.9.2,0,.3,0,.5,0s.3,0,.5-.1c0,0,.2.2.3.2h.2c0,0,0,0,0,0,.1-.3.2-.7,0-1,0,0,0-.1,0-.2,0-.2-.1-.4,0-.5,0,0,.1,0,.2,0s.2,0,.3,0h0c.2,0,.3.1.5.1s.2,0,.4,0c.4-.2.4-.7.2-1.1,0,0,0-.1-.1-.2,0-.1-.1-.3-.2-.4,0,0,0,0,.1,0,.1,0,.2,0,.4,0,.3-.1.5-.3.5-.6,0,0,0,0,0,0,0,0,0-.1,0-.1,0,0,0,0,.1,0,0,0,0,0,0,0,.3-.2.3-.7.2-1-.1-.2-.4-.4-.7-.4s-.2,0-.2,0v.3c.1,0,.2,0,.2,0,.2,0,.3,0,.4.2.1.2,0,.4,0,.6,0,0,0,0,0,0,0,0-.1.1-.2.2,0,0,0,.2,0,.3,0,0,0,0,0,0,0,.2-.2.3-.3.4,0,0-.2,0-.2,0s-.2,0-.3,0l-.2-.2v.3c0,.3.1.6.2.8,0,0,0,.1.1.2.1.3.2.6,0,.7,0,0-.1,0-.2,0-.1,0-.3,0-.4,0h0c-.1,0-.3,0-.4,0-.2,0-.4,0-.5.2-.2.3,0,.6,0,.8,0,0,0,.1,0,.2,0,.2,0,.4,0,.5,0,0,0,0-.1-.1h0c0-.1-.1,0-.1,0-.1,0-.3.1-.4.1s-.2,0-.4,0c-.3-.1-.5-.3-.5-.6h0c0-.2,0-.4-.3-.5,0,0,0,0,0,0,0,0-.1,0-.2,0,.1-.3.3-.7.6-.8,0,0,0,0,.1,0,0,0,.2,0,.3-.1.2-.1.3-.3.2-.5,0,0,0,0,0-.1.1,0,.2,0,.3-.1.2-.1.3-.4.3-.6,0,0,0-.2,0-.2,0,0,0-.2,0-.2,0,0,0,0,0,0,0,0,.2,0,.3-.3,0,0,0-.2,0-.3-.1-.2-.3-.3-.5-.3-.2-.1-.4-.2-.4-.4,0-.3.3-.5.6-.6,0,0,.2,0,.2,0s0,0,0,0c0,0,0,0,.2,0,0,0,.2,0,.3,0s0,0,.1,0c.1,0,.2-.1.2-.2,0,0,0,0,0,0,.1-.1.3-.2.5-.2s.2,0,.3,0c.2.1.4.4.4.7h.3c0-.4-.2-.8-.5-1-.1,0-.3,0-.4,0h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <path d="M541.9,321.8c.2.3.3.6.4.9.1.4.2.9.5,1.1,0,0,.1,0,.2.1,0,0,0,.1,0,.2,0,0,.1,0,.2,0,.2,0,.4,0,.6,0,.1,0,.3,0,.4-.2,0,0,0-.1,0-.2-.1-.5-.3-1-.5-1.4-.1-.3-.3-.5-.4-.8,0,0,0-.1,0-.2,0,0,0,0,0,0-.3-.1-.7,0-1,.3" fill="#fff" stroke="#9b978f" stroke-miterlimit="10" stroke-width=".5"/>
                <g>
                  <path d="M543.2,324.4c0,0-.2,0-.3,0,0,0,0-.1,0-.2,0,0,0,0,0,0,0,0,0,0,0,0h0c-.3-.3-.4-.7-.5-1,0,0,0-.1,0-.2,0-.3-.2-.6-.4-.9l.3-.2c.2.3.4.6.5,1,0,0,0,.2,0,.2,0,.3.2.6.4.8h0c0,0,.1.1.2.2,0,0,0,0,0,.1,0,0,0,0,0,0,0,0,0,0,0,0h.6c.2,0,.2,0,.2,0,0,0,0,0,0-.1-.1-.5-.2-.9-.5-1.4,0,0,0-.1-.1-.2-.1-.2-.2-.4-.3-.7h0s0,0,0,0c0,0,0,0,0,0-.3-.1-.6,0-.8.2l-.3-.2c.3-.3.8-.5,1.2-.3,0,0,0,0,.1,0,0,0,0,.2.1.2h0c0,.2.1.4.3.6,0,0,0,.1.1.2.2.5.4.9.5,1.4,0,0,0,.2,0,.3,0,.2-.2.3-.5.3h-.6s0,0,0,0ZM543.1,324.1h0Z" fill="#fff"/>
                  <path d="M542.9,321.1c-.3,0-.6.1-.8.4l.3.2c.1-.2.3-.3.5-.3,0,0,.2,0,.2,0,0,0,0,0,0,0h0s0,0,0,0h0c0,.3.2.5.3.7,0,0,0,.1.1.2.2.4.3.9.5,1.4,0,0,0,0,0,.1,0,0,0,0-.2,0h-.6s0,0,0,0,0,0,0,0c0,0,0,0,0,0,0,0,0,0,0-.1,0,0-.1-.2-.2-.2h0c-.2-.2-.3-.5-.4-.8,0,0,0-.2,0-.2,0-.3-.3-.7-.5-1l-.3.2c.2.3.3.6.4.9,0,0,0,.1,0,.2,0,.3.2.7.5,1h0s0,0,0,0c0,0,0,0,0,0,0,0,0,.1,0,.2,0,0,.2,0,.3,0s0,0,0,0h.6c.3,0,.5-.1.5-.3,0-.1,0-.2,0-.3-.1-.5-.3-1-.5-1.4,0,0,0-.1-.1-.2-.1-.2-.2-.4-.3-.6h0c0,0,0-.2-.1-.3,0,0-.1,0-.1,0-.1,0-.2,0-.4,0h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <path d="M541.4,323.9c-.3,0-.5.3-.7.2,0,0-.1,0-.2,0-.1,0-.3.1-.3.3s0,.3.1.4.2.2.2.4c0,0,0,0,0,.1,0,0,0,0,0,0-.2,0-.3.2-.5.2,0,0-.1,0-.1.1,0,0,0,.2.1.3.1.1.3.2.4.4.3.3.5.5.9.7s.7.3,1.1.3c0,0,0-.1-.1-.2.2,0,.4,0,.6,0,0-.2,0-.4,0-.6,0,0,0-.2,0-.3s.1-.2.2-.1c-.2-.8-.5-1.5-1.1-2.1-.1-.1-.2-.2-.4-.2" fill="#fff" stroke="#9b978f" stroke-miterlimit="10" stroke-width=".5"/>
                <g>
                  <path d="M542.2,327.4c-.4,0-.8-.2-1-.3-.3-.2-.6-.5-.9-.7l-.4-.4c-.2-.2-.2-.3-.2-.4,0-.1.2-.2.2-.2l.4-.2c0,0,0-.1-.1-.2,0,0,0,0,0,0,0-.1-.2-.3-.2-.5,0-.1,0-.3.2-.3,0,0,.2-.1.3,0,0,0,0,0,.1,0,0,0,0,0,0,0,0,0,.2,0,.3,0,.1,0,.2-.1.4-.1v-.2s.3,0,.5.2c.5.6.9,1.4,1.1,2.2v.4c0,0-.2-.2-.2-.2,0,0,0,0,0,.1h0c0,.3.1.5,0,.7h0c0,.1-.4.2-.4.2v.2c.1,0-.1,0-.1,0,0,0-.1,0-.2,0ZM540.1,325.7s0,0,0,0l.4.4c.3.2.5.5.8.7.2,0,.4.2.6.2v-.2c-.1,0,.6,0,.6,0,0-.1,0-.2,0-.3h0c0-.1,0-.2,0-.4,0-.1,0-.2.2-.3-.2-.7-.5-1.3-1-1.9,0-.1-.2-.1-.2-.1h0s0,.3,0,.3c0,0-.2,0-.3,0-.1,0-.3.2-.5.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.2.1.3,0,0,0,0,0,0,0,0,.1.2.2.3,0,0,0,.1,0,.2,0,.1-.1.1-.2.2l-.5.2s0,0,0,0Z" fill="#fff"/>
                  <path d="M541.4,323.5c0,0,0,0-.1,0v.2c0,0,0,0,0,0-.2,0-.3,0-.4.1,0,0-.2,0-.2,0s0,0,0,0c0,0,0,0,0,0,0,0,0,0-.1,0,0,0,0,0,0,0,0,0-.2,0-.2,0-.1,0-.2.2-.2.3,0,.2,0,.4.2.5,0,0,0,0,0,0,0,0,.1.1.1.2l-.4.2c0,0-.2,0-.2.2,0,.1,0,.3.2.4l.4.4c.3.3.6.5.9.7.2.1.6.3,1,.3s.1,0,.2,0h.3s-.1-.2-.1-.2h.4s0-.2,0-.2c0-.2,0-.5,0-.7h0c0,0,0-.1,0-.2l.3.2v-.4c-.3-.8-.6-1.6-1.2-2.2-.2-.2-.3-.3-.4-.3h0ZM541.4,324.1v-.3s0,0,0,0c0,0,0,0,0,0,0,0,.1,0,.2.1.5.5.8,1.2,1,1.9,0,0-.2.2-.2.3,0,.1,0,.2,0,.3h0c0,.2,0,.3,0,.4h-.7s.1.2.1.2c-.3,0-.5-.1-.6-.2-.3-.2-.6-.4-.8-.7l-.4-.4s0,0,0,0c0,0,0,0,0,0l.5-.2s.1,0,.2-.2c0-.1,0-.2,0-.2,0-.1-.1-.2-.2-.3,0,0,0,0,0,0,0-.1-.1-.2-.1-.3,0,0,0,0,0,0,0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.1,0,.1,0,.3,0,.4-.1,0,0,.2,0,.2,0s0,0,0,0h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <line x1="514.2" y1="319.7" x2="512.7" y2="313.7" fill="#fff" stroke="#9b978f" stroke-miterlimit="10" stroke-width=".5"/>
                  <path d="M512.6,313.6s.1,0,.2,0c0,0,0,0,.1.1l1.6,5.9c0,0,0,.2-.1.2M514,319.6l-1.5-5.6" fill="#fff" stroke="#9b978f" stroke-miterlimit="10" stroke-width=".5"/>
                </g>
                <g>
                  <g>
                    <path d="M526.2,320.9l10.6-3.1c.2.4.9,1.4,1,2.5-.8.6-6.2,4.4-11.5,6.6v-6.1Z" fill="#fff"/>
                    <path d="M536.7,318.1c.3.4.7,1.2.8,2.1-1.1.8-6.1,4.3-11,6.4v-5.5s10.2-3,10.2-3M536.9,317.5l-10.9,3.2v6.7c6-2.4,12.1-6.9,12.1-6.9-.1-1.6-1.2-3-1.2-3h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M529.6,325.5c2.8-1.9,5.2-4.4,6.5-5.7.1-.1.2-.2.3-.3,0,.4,0,.8,0,1.1-.9.8-3.4,3-6.7,4.9Z" fill="#fff"/>
                    <path d="M536.1,320.1c0,.1,0,.2,0,.4-.4.4-1.2,1-2.1,1.8.9-.8,1.6-1.6,2.1-2.2M536.9,317.4s0,0,0,0l-10.9,3.2c0,0-.1,0-.1.2v6.7s0,0,0,0c0,0,0,0,0,.1,0,0,0,0,0,0s0,0,0,0c5.9-2.4,10.5-6.8,10.6-6.8,0-.7,0-1.4.1-1.9-.9.8-5.3,6.2-10.6,8.4v-6.3s10.7-3.1,10.7-3.1c0,0,0,.1,0,.1s0,0,0,0c0,0-.1,0,0,.6.1-.6.2-1,.2-1,0,0,0,0-.1,0h0ZM536.8,318.4c0,.1,0,.2,0,.3,0,0,0,0,0,0,0-.1,0-.2,0-.3h0ZM536.6,320.7s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M523.8,331.4c-.8,0-1.5,0-1.9-.1l5.1-6,2.6-1.2,4.7-6.8c1.1,1,2,1.4,2.5,1.5-.2.8-.8,3.5-3.4,8-2.4,4.1-6.9,4.7-9.5,4.7h0Z" fill="#fff"/>
                    <path d="M534.3,317.7c.9.8,1.7,1.1,2.1,1.3-.2,1-1,3.6-3.4,7.7-2.2,3.7-6.2,4.5-9.3,4.5s-1,0-1.4,0l4.7-5.6,2.4-1.1h.1c0,0,0-.2,0-.2l4.5-6.6M534.2,316.9l-4.9,7-2.5,1.2-5.4,6.3s1,.2,2.4.2c2.8,0,7.3-.7,9.7-4.8,3.2-5.5,3.5-8.3,3.5-8.3,0,0-1.2,0-2.8-1.6h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M521.2,331.5s0,0,0-.1l5.4-6.3s0,0,0,0l2.5-1.2,4.8-7s0,0,.1,0c0,0,.1,0,.1,0,1.6,1.5,2.7,1.6,2.7,1.6,0,0,0,0,.1,0,0,0,0,0,0,.1,0,0,0,.7-.6,2.1-.4,1.3-1.3,3.4-3,6.2-.8,1.4-2,2.6-3.5,3.4-1.2.6-2.5,1.1-4,1.3-2.6.4-4.7,0-4.8,0,0,0-.1,0-.1-.1,0,0,0,0,0,0ZM526.9,325.3l-5.2,6.1c.7,0,2.4.3,4.4,0,1.5-.2,2.8-.6,3.9-1.3,1.4-.8,2.5-1.9,3.3-3.3,2.7-4.6,3.3-7.4,3.5-8.1-.4,0-1.3-.4-2.6-1.5l-4.7,6.9s0,0,0,0l-2.5,1.2Z" fill="#fff"/>
                    <path d="M534.2,316.7s0,0,0,0c0,0,0,0-.1,0l-4.8,7-2.5,1.2s0,0,0,0l-5.4,6.3s0,0,0,.1c0,0,0,0,0,0,0,0,0,.1.1.1,0,0,1,.2,2.5.2s1.5,0,2.3-.2c1.5-.2,2.9-.7,4-1.3,1.5-.8,2.6-2,3.5-3.4,1.6-2.8,2.5-5,3-6.2.5-1.4.6-2.1.6-2.1,0,0,0,0,0-.1,0,0,0,0-.1,0,0,0-1.1,0-2.7-1.6,0,0,0,0-.1,0h0ZM523.8,331.5c-.9,0-1.7,0-2.1-.1l5.2-6.1,2.5-1.2s0,0,0,0l4.7-6.9c1.2,1.1,2.2,1.4,2.6,1.5-.1.7-.8,3.4-3.5,8.1-.8,1.4-1.9,2.5-3.3,3.3-1.1.6-2.5,1.1-3.9,1.3-.8.1-1.6.2-2.3.2h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M513,308.6c2.3-2.2,9-4,11.9-4.2,0,0,.1,0,.2,0,2.8,0,9.6,3.4,10.5,3.8.3,1.1-.5,2.2-.8,2.5l-8.4-.9-4.7,2.3-8.7-3.4Z" fill="#fff"/>
                    <path d="M525.2,304.6c2.7,0,9,3.1,10.3,3.7.1.9-.4,1.7-.7,2l-8.2-.9h-.1s-.1,0-.1,0l-4.6,2.2-8.3-3.3c2.5-2,8.7-3.7,11.5-3.9,0,0,.1,0,.2,0M525.2,304.1c0,0-.2,0-.2,0-2.9.2-10.2,2.1-12.4,4.6l9.2,3.6,4.8-2.3,8.5.9s1.3-1.4.9-2.9c0,0-7.6-3.9-10.7-3.9h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M512.4,308.7s0,0,0-.1c2.2-2.6,9.7-4.4,12.5-4.6,2.9-.2,10.7,3.7,11.1,3.9,0,0,0,0,0,.1.5,1.6-.9,3-.9,3.1,0,0,0,0-.1,0l-8.4-.9-4.7,2.3s0,0-.1,0l-9.2-3.6c0,0,0,0-.1-.1,0,0,0,0,0,0ZM535.8,308.1c-.8-.4-8.1-4-10.8-3.8-1.3.1-3.8.6-6.4,1.4-2.7.9-4.7,1.9-5.6,2.9l8.9,3.5,4.7-2.3s0,0,0,0l8.4.9c.1-.1.3-.4.5-.8.3-.6.4-1.3.3-1.8Z" fill="#fff"/>
                    <path d="M525.2,303.9c0,0-.2,0-.3,0-2.7.2-10.3,2-12.5,4.6,0,0,0,0,0,.1,0,0,0,0,0,0,0,0,0,0,.1.1l9.2,3.6s0,0,0,0,0,0,0,0l4.7-2.3,8.4.9s0,0,0,0c0,0,0,0,.1,0,0,0,1.4-1.5.9-3.1,0,0,0,0,0-.1-.3-.2-7.7-3.9-10.8-3.9h0ZM521.8,312.1l-8.9-3.5c1-1,3-2,5.6-2.9,2.6-.9,5.1-1.3,6.4-1.4,0,0,.2,0,.2,0,2.9,0,9.8,3.5,10.6,3.8.1.6,0,1.2-.3,1.8-.2.4-.4.7-.5.8l-8.4-.9s0,0,0,0c0,0,0,0,0,0l-4.7,2.3h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M521.4,331.1c-1.2-1.4-9.7-11.7-8.6-22.2.1,0,.3,0,.4,0,1.5,0,5.2.2,7.1,1.7,1.3,1,6.1,6.6,6,14.7h0s-.9,3.1-4.9,5.9Z" fill="#fff"/>
                    <path d="M513.3,309.1c1.5,0,5.1.2,6.9,1.6,1.2,1,6,6.5,5.9,14.4-.1.4-1.2,3.1-4.6,5.7-1.6-1.9-9.4-11.6-8.4-21.6,0,0,.1,0,.2,0M513.3,308.6c-.4,0-.6,0-.6,0-1.4,11.6,8.8,22.8,8.8,22.8,4.3-3,5.2-6.2,5.2-6.2.1-7.9-4.5-13.6-6.1-14.9-1.9-1.5-5.7-1.7-7.3-1.7h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M512.5,314c-.3-1.9-.3-3.7-.1-5.4,0,0,0-.1.2-.2,0,0,1.4,0,3.1.1,2.2.2,3.9.8,5,1.6.7.6,2.3,2.3,3.7,5,1.2,2.2,2.5,5.7,2.4,10,0,0,0,0,0,0,0,0-.2.9-1,2.1-.7,1.1-2,2.7-4.3,4.3,0,0-.2,0-.2,0,0,0-2.6-2.9-4.9-7.1-1.4-2.5-2.4-4.9-3.1-7.3-.3-1.1-.5-2.1-.7-3.1ZM512.8,308.8c-.3,2.6,0,5.4.8,8.2.7,2.4,1.7,4.8,3.1,7.3,2.1,3.7,4.3,6.3,4.8,6.9,2.1-1.5,3.4-3,4-4.1.7-1.1.9-1.8,1-2,0-4.2-1.3-7.7-2.4-9.8-.6-1.2-2.2-3.7-3.6-4.9-2.2-1.7-6.8-1.7-7.6-1.7Z" fill="#fff"/>
                    <path d="M513.2,308.5c-.4,0-.6,0-.7,0,0,0-.2,0-.2.2-.2,1.7-.2,3.5.1,5.4.2,1,.4,2.1.7,3.1.7,2.4,1.7,4.9,3.1,7.3,2.4,4.2,4.9,7.1,4.9,7.1,0,0,0,0,.1,0s0,0,0,0c2.2-1.5,3.6-3.2,4.3-4.3.8-1.2,1-2,1-2.1,0,0,0,0,0,0,0-4.3-1.3-7.8-2.4-10-1.4-2.7-3-4.4-3.7-5-1-.8-2.7-1.4-5-1.6-1-.1-1.8-.1-2.4-.1h0ZM521.4,331.2c-.5-.6-2.7-3.2-4.8-6.9-1.4-2.5-2.4-4.9-3.1-7.3-.8-2.9-1.1-5.7-.8-8.2.1,0,.3,0,.5,0,1.5,0,5.3.2,7.2,1.7,1.5,1.2,3,3.7,3.6,4.9,1.1,2.2,2.5,5.6,2.4,9.8,0,.1-.3.9-1,2-.7,1-1.9,2.6-4,4.1h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M529.3,317.8c-.6-.5-2.6-2.4-1.1-5.7.5.4,1.7,1.3,1.9,2.7.3,1.3-.5,2.6-.9,3Z" fill="#fff"/>
                    <path d="M528.3,312.5c.5.4,1.4,1.2,1.6,2.3.2,1.1-.3,2.1-.7,2.6-.7-.6-2-2.3-.9-4.9M528.1,311.7c-2.1,4.2,1.2,6.4,1.2,6.4,0,0,1.4-1.6,1.1-3.4-.4-1.8-2.3-3-2.3-3h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M527.3,315.1c-.1-.9,0-2.1.7-3.5,0,0,0,0,.1,0,0,0,0,0,.1,0,0,0,2,1.2,2.4,3.1.4,1.9-1,3.5-1.1,3.6,0,0-.2,0-.2,0,0,0-.9-.6-1.5-1.7-.2-.4-.4-.9-.5-1.5ZM528.2,312c-.8,1.6-.8,3.1-.1,4.4.4.8,1,1.3,1.2,1.5.3-.4,1.2-1.7.9-3.2-.3-1.4-1.6-2.4-2.1-2.8Z" fill="#fff"/>
                    <path d="M528.1,311.6s0,0,0,0c0,0,0,0-.1,0-.7,1.4-.8,2.5-.7,3.5,0,.6.3,1.1.5,1.5.6,1.1,1.4,1.7,1.5,1.7,0,0,0,0,0,0,0,0,0,0,.1,0,0,0,1.5-1.7,1.1-3.6-.4-1.9-2.3-3-2.4-3.1,0,0,0,0,0,0h0ZM529.3,317.9c-.2-.2-.8-.7-1.2-1.5-.7-1.3-.7-2.8.1-4.4.5.3,1.8,1.3,2.1,2.8.3,1.4-.6,2.8-.9,3.2h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M523.2,322c-.2,0-.6,0-.8-.4-.3-.5-.8-.5-1.3-.6-.4,0-.8,0-1.2-.3-.6-.4-.6-1-.7-1.6,0-.3,0-.5-.1-.8,0-.3-.3-.7-.6-1-.5-.7-1-1.4-.6-2.2.3-.6.6-.7.9-.8.4-.1.7-.3.7-1.1,0-.9.4-1.3,1.1-1.3s.4,0,.6,0c.1,0,.2,0,.3,0h0c.5,0,.8-.3,1-.7.3-.4.6-.8,1.3-.9.4,0,.8,0,1.1,0,.5,0,.7,0,.7,0,.7.2,2.4.7,2.4,1.6.1,1-.2,1.5-.2,1.5v.2c-.1,0,0,.2,0,.2.3.4.8,1.1.7,1.4,0,.1,0,.2-.1.3-.2.5-.5,1.2.2,1.9.4.4.9,1,.6,1.2-.2.2-.4.2-.5.2h-.3s0,.3,0,.3c0,0,0,1.1-1.4,1.7-.4.2-.8.2-1.1.2s-.3,0-.5,0c-.1,0-.2,0-.3,0-.3,0-.5,0-.7.3-.3.3-.7.5-1.1.5Z" fill="#fff"/>
                    <path d="M524.9,310.7c.3,0,.5,0,.5,0h0s.1,0,.1,0c.8.2,2.1.7,2.2,1.3.1.9-.1,1.3-.1,1.3h0s-.3.3-.3.3l.3.3c.4.4.7,1,.6,1.2,0,.1,0,.2-.1.3-.2.6-.5,1.4.3,2.1.7.7.6.9.6.9-.1.1-.2.2-.3.2h-.6c0,0,0,.5,0,.5,0,0,0,1-1.3,1.5-.4.2-.7.2-1,.2s-.3,0-.4,0c-.1,0-.3,0-.4,0-.3,0-.6.1-.9.4-.3.2-.6.4-.9.4s-.5,0-.6-.3c-.4-.7-1-.7-1.6-.7-.4,0-.8,0-1.1-.2-.5-.3-.5-.7-.6-1.4,0-.3,0-.5-.1-.8,0-.4-.3-.7-.6-1.1-.5-.8-.9-1.3-.5-2,.3-.5.5-.6.7-.7.4-.2.8-.4.9-1.3,0-.9.4-1,.8-1s.3,0,.5,0c.1,0,.3,0,.4,0,.6,0,1-.4,1.2-.8.3-.4.5-.7,1.1-.8.4,0,.8,0,1.1,0M524.9,310.2c-.3,0-.6,0-1.1,0-1.5.2-1.4,1.6-2.3,1.6s-.2,0-.3,0c-.2,0-.5,0-.7,0-.8,0-1.3.5-1.3,1.5,0,1.3-.8.4-1.6,1.8-.7,1.4.9,2.5,1.1,3.4s0,1.8.9,2.5c1,.7,2,0,2.5.8.2.4.6.6,1.1.6s.9-.2,1.3-.5c.2-.2.4-.2.5-.2.2,0,.5,0,.8,0s.7,0,1.2-.3c1.7-.7,1.6-2,1.6-2,0,0,0,0,0,0,.1,0,.4,0,.7-.3.3-.4,0-.9-.6-1.6-.7-.7-.2-1.3,0-2,.2-.7-.7-1.7-.7-1.7,0,0,.4-.4.3-1.6-.1-1.2-2.6-1.7-2.6-1.7,0,0-.2-.1-.8-.1h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M517.3,316.1c0-.3,0-.7.2-1.1.4-.8.8-.9,1.1-1,.3-.1.4-.2.4-.7,0-.7.2-1.1.6-1.4.4-.3.9-.3,1.6-.2.5.1.6-.1.9-.5.3-.4.7-.9,1.6-1,1.4-.2,1.9,0,2,0,.1,0,.7.2,1.2.4.9.4,1.4.9,1.4,1.5.1.9,0,1.4-.2,1.6.3.3.9,1.1.7,1.8,0,.1,0,.2-.1.4-.2.5-.4,1,.1,1.4.5.5,1.1,1.3.6,1.8-.2.3-.5.4-.7.4,0,.4-.2,1.4-1.7,2-1,.4-1.5.3-1.8.2-.3,0-.4,0-.7.2-.4.4-1.1.6-1.6.6-.4,0-.8-.3-1-.6-.2-.3-.5-.3-1-.3-.5,0-1,0-1.5-.4-.8-.5-.8-1.2-.9-1.9,0-.2,0-.5,0-.7,0-.2-.3-.5-.5-.9-.3-.5-.7-1-.8-1.6ZM525.6,310.5s-.4-.2-1.8,0c-.7.1-1.1.5-1.3.9-.3.4-.6.8-1.3.6-.6-.1-1-.1-1.3.1-.3.2-.4.6-.5,1.2,0,.7-.3.9-.7,1-.3.1-.6.2-.9.9-.4.9,0,1.6.6,2.3.2.3.5.7.5,1,0,.3,0,.5.1.8,0,.6.1,1.2.7,1.6.4.3.9.3,1.3.3.5,0,1,0,1.3.5.2.3.5.4.7.5.5,0,1-.1,1.4-.5.4-.4.7-.3,1-.3.3,0,.8.1,1.7-.2,1.6-.6,1.5-1.7,1.5-1.8,0,0,0-.1,0-.1,0,0,0,0,.1,0,0,0,.3,0,.6-.3.3-.4-.4-1.1-.6-1.4-.6-.6-.4-1.2-.2-1.8,0-.1,0-.2.1-.3.1-.5-.5-1.3-.7-1.5,0,0,0-.2,0-.2,0,0,.3-.4.2-1.5-.1-.9-1.8-1.4-2.4-1.6,0,0,0,0,0,0ZM525.6,310.5h0ZM525.7,310.4h0s0,0,0,0Z" fill="#fff"/>
                    <path d="M524.9,310.1c-.3,0-.7,0-1.2.1-.9.1-1.3.6-1.6,1-.2.3-.4.5-.7.5s-.1,0-.2,0c-.3,0-.5-.1-.7-.1-.3,0-.6,0-.9.3-.4.3-.6.7-.6,1.4,0,.5-.2.6-.4.7-.3.1-.7.3-1.1,1-.2.4-.2.7-.2,1.1,0,.6.5,1.1.8,1.6.2.3.4.6.5.9,0,.2,0,.5,0,.7,0,.7.1,1.3.9,1.9.5.4,1,.4,1.5.4.5,0,.8,0,1,.3.2.3.5.6,1,.6,0,0,.2,0,.2,0,.5,0,1-.2,1.4-.6.2-.2.3-.2.4-.2s.2,0,.3,0c.2,0,.3,0,.5,0,.3,0,.7,0,1.3-.3,1.5-.6,1.7-1.6,1.7-2,.2,0,.4-.1.7-.4.5-.6-.1-1.3-.6-1.8-.5-.5-.3-.9-.1-1.4,0-.1,0-.2.1-.4.2-.6-.4-1.5-.7-1.8.1-.2.3-.7.2-1.6,0-.6-.5-1-1.4-1.5-.6-.3-1.1-.4-1.2-.4,0,0-.3-.1-.9-.1h0ZM525.7,310.4h0s0,0,0,0h0ZM521.5,312.1c.5,0,.7-.3,1-.7.3-.4.6-.8,1.3-.9.5,0,.8,0,1.1,0,.5,0,.7,0,.7,0,0,0,0,0,0,0,.6.1,2.3.7,2.4,1.6.1,1.1-.2,1.5-.2,1.5,0,0,0,.2,0,.2.2.3.8,1,.7,1.5,0,.1,0,.2-.1.3-.2.5-.4,1.2.2,1.8.2.2,1,1,.6,1.4-.2.2-.5.3-.5.3s0,0,0,0c0,0,0,0,0,0,0,0,0,0-.1,0,0,0,0,0,0,.1,0,0,0,1.2-1.5,1.8-.5.2-.9.3-1.2.3s-.4,0-.5,0c-.1,0-.2,0-.3,0-.2,0-.4,0-.7.3-.3.3-.8.5-1.2.5s-.1,0-.2,0c-.2,0-.5-.1-.7-.5-.3-.5-.8-.5-1.3-.5-.4,0-.9,0-1.3-.3-.6-.4-.7-1-.7-1.6,0-.2,0-.5-.1-.8,0-.3-.3-.6-.5-1-.5-.7-1-1.4-.6-2.3.3-.6.6-.8.9-.9.4-.1.6-.3.7-1,0-.6.2-.9.5-1.2.2-.1.4-.2.7-.2s.4,0,.6,0c.1,0,.2,0,.3,0h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <path d="M521.9,312.7s0,0,0,0c0,0,.1-.1.2-.1.4.1.6.1.8,0,.2-.1.2-.4.3-.8,0-.7.8-.8,1.2-.8,0,0,.2,0,.2.2,0,0,0,.2-.2.2,0,0-.8,0-.9.5,0,.4-.1.9-.4,1.1-.2.2-.6.2-1.1,0,0,0-.1,0-.1-.1Z" fill="#fff"/>
                  <path d="M524.3,310.9c-.4,0-1.1.2-1.1.8,0,.4-.1.7-.3.8,0,0-.2,0-.3,0s-.3,0-.5,0c0,0,0,0,0,0,0,0-.1,0-.2.1,0,0,0,0,0,0,0,0,0,.1.1.1.2,0,.4,0,.6,0s.4,0,.5-.1c.3-.2.4-.7.4-1.1,0-.4.6-.5.8-.5s0,0,0,0c0,0,0,0,0,0,0,0,.2,0,.2-.2,0,0,0-.2-.2-.2,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M522.6,313.5s0,0,0,0c0,0,.1-.1.2-.1.2,0,.4,0,.6,0,.4-.2.5-.8.5-.8,0,0,.1-.2.2-.1,0,0,.2.1.1.2,0,0-.1.7-.6,1-.2.2-.5.2-.9,0,0,0-.1,0-.1-.1Z" fill="#fff"/>
                  <path d="M524,312.3c0,0-.2,0-.2.1,0,0-.1.5-.5.8,0,0-.2,0-.3,0s-.2,0-.3,0c0,0,0,0,0,0,0,0-.1,0-.2.1,0,0,0,0,0,0,0,0,0,.1.1.1.1,0,.2,0,.4,0,.2,0,.3,0,.5-.1.5-.3.6-1,.6-1,0,0,0-.2-.1-.2,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M527.4,315.2c-.1-.8.5-1.6.5-1.6,0,0,.2,0,.2,0,0,0,0,.2,0,.2,0,0-.6.8-.4,1.5,0,0,0,.2-.1.2,0,0-.2,0-.2-.1,0,0,0-.2,0-.2Z" fill="#fff"/>
                  <path d="M528,313.6s0,0-.1,0c0,0-.6.8-.5,1.6,0,0,0,.2,0,.2,0,0,0,.1.2.1s0,0,0,0c0,0,.1-.1.1-.2-.2-.7.4-1.5.4-1.5,0,0,0-.2,0-.2,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M526,315.5c0-.2,0-.3,0-.5.2-.6.3-1.3.3-1.3,0,0,0-.2.2-.2,0,0,.2,0,.2.2,0,0,0,.8-.3,1.4-.2.4.4,1.2.6,1.4,0,0,0,.2,0,.2,0,0-.2,0-.2,0,0,0-.6-.7-.7-1.3Z" fill="#fff"/>
                  <path d="M526.5,313.5c0,0-.2,0-.2.2,0,0,0,.7-.3,1.3,0,.2,0,.3,0,.5,0,.6.7,1.2.7,1.3,0,0,0,0,.1,0s0,0,.1,0c0,0,0-.2,0-.2-.2-.3-.8-1-.6-1.4.3-.7.3-1.4.3-1.4,0,0,0-.2-.2-.2,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M525,316c0,0,0-.2.1-.2,0,0,.2,0,.2,0,0,0,.4,1,1,1.1,0,0,.2.1.1.2,0,0-.1.2-.2.1-.8-.2-1.3-1.3-1.3-1.3,0,0,0,0,0,0Z" fill="#fff"/>
                  <path d="M525.2,315.8s0,0,0,0c0,0-.1.1-.1.2,0,0,0,0,0,0,0,0,.5,1.2,1.3,1.3,0,0,0,0,0,0,0,0,.2,0,.2-.1,0,0,0-.2-.1-.2-.6-.1-1-1.1-1-1.1,0,0,0-.1-.2-.1h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M524,320.5s0,0,0-.1c.7-.9,1.3-.7,1.7-.5.2,0,.4.1.6.1.3,0,.4-.1.5-.3,0-.1,0-.3,0-.3,0,0,0-.2.1-.2,0,0,.2,0,.2.1,0,0,0,.4-.2.7-.1.2-.4.3-.7.3-.3,0-.6,0-.8-.1-.5-.2-.8-.3-1.4.4,0,0-.2,0-.2,0,0,0,0,0,0-.1Z" fill="#fff"/>
                  <path d="M527.2,319.1s0,0,0,0c0,0-.2,0-.1.2,0,0,0,.1,0,.3,0,.2-.2.3-.5.3,0,0,0,0,0,0-.2,0-.4,0-.6-.1-.2,0-.4-.1-.6-.1-.3,0-.7.2-1.1.7,0,0,0,0,0,.1,0,0,0,0,0,.1,0,0,0,0,.1,0s.1,0,.1,0c.3-.4.6-.5.8-.5.2,0,.3,0,.5.1.2,0,.4.1.7.1s0,0,.1,0c.3,0,.5-.1.7-.3.2-.3.2-.7.2-.7,0,0,0-.1-.2-.1h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M523.6,320.1s0,0,0,0c.4-1,1.7-1.1,1.7-1.1,0,0,.2,0,.2.2,0,0,0,.2-.2.2,0,0-1.1,0-1.4.9,0,0-.1.1-.2,0,0,0,0,0-.1-.1Z" fill="#fff"/>
                  <path d="M525.4,319s0,0,0,0c0,0-1.3,0-1.7,1.1,0,0,0,0,0,0,0,0,0,.1.1.1,0,0,0,0,0,0,0,0,.1,0,.2-.1.3-.8,1.4-.9,1.4-.9,0,0,.2,0,.2-.2,0,0,0-.2-.2-.2h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M518.8,316.1s0,0,0,0c0-.6.3-1.1.4-1.1,0,0,.2,0,.2,0,0,0,0,.2,0,.2,0,0-.3.4-.3.8,0,.3.2.5.4.7,0,0,0,.2,0,.2,0,0-.2,0-.2,0-.3-.3-.5-.6-.6-.9Z" fill="#fff"/>
                  <path d="M519.2,314.9s0,0-.1,0c0,0-.4.5-.4,1.1,0,0,0,0,0,0,0,.3.2.6.6.9,0,0,0,0,.1,0s.1,0,.1,0c0,0,0-.2,0-.2-.3-.2-.4-.4-.4-.7,0-.4.3-.8.3-.8,0,0,0-.2,0-.2,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M519.8,318.9c0-.3,0-.5,0-.5,0,0,0-.2.2-.2,0,0,.2,0,.2.2,0,0,0,1,.5,1.2,0,0,.1.1.1.2,0,0-.1.1-.2.1-.5-.2-.7-.7-.7-1Z" fill="#fff"/>
                  <path d="M519.9,318.2c0,0-.2,0-.2.2,0,0,0,.2,0,.5,0,.4.2.8.7,1,0,0,0,0,0,0,0,0,.1,0,.2-.1,0,0,0-.2-.1-.2-.6-.2-.5-1.2-.5-1.2,0,0,0-.2-.2-.2,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M529.2,324c0,0,0-.1,0-.2,0,0,.2,0,.2,0,0,0,.5.7,1.5,1.1,0,0,.1.1,0,.2,0,0-.1.1-.2,0-1-.4-1.6-1.2-1.6-1.2,0,0,0,0,0,0Z" fill="#fff"/>
                  <path d="M529.3,323.8s0,0,0,0c0,0,0,.1,0,.2,0,0,0,0,0,0,0,0,.6.8,1.6,1.2,0,0,0,0,0,0,0,0,.1,0,.2-.1,0,0,0-.2,0-.2-.9-.4-1.5-1.1-1.5-1.1,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M526.1,308.1c0,0,0-.1,0-.2,0,0,.2,0,.2,0,0,0,.6,1.1.3,1.9,0,0-.1.1-.2.1,0,0-.1-.1-.1-.2.2-.7-.3-1.7-.3-1.7,0,0,0,0,0,0Z" fill="#fff"/>
                  <path d="M526.3,307.9s0,0,0,0c0,0-.1.1,0,.2,0,0,0,0,0,0,0,0,.5,1,.3,1.7,0,0,0,.2.1.2,0,0,0,0,0,0,0,0,.1,0,.2-.1.2-.8-.3-1.9-.3-1.9,0,0,0,0-.2,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M517.3,307.3c0,0,0-.1,0-.2.9-.6,2.8-1.3,2.8-1.3,0,0,.2,0,.2.1,0,0,0,.2-.1.2,0,0-1.9.7-2.7,1.3,0,0-.2,0-.2,0,0,0,0,0,0,0Z" fill="#fff"/>
                  <path d="M520.3,305.8s0,0,0,0c0,0-1.9.7-2.8,1.3,0,0,0,.1,0,.2,0,0,0,0,0,0,0,0,0,0,.1,0s0,0,.1,0c.8-.6,2.7-1.3,2.7-1.3,0,0,.1-.1.1-.2,0,0,0-.1-.2-.1h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M517.9,308.2c0,0,0-.1,0-.2.7-.6,1.5-.9,1.6-.9,0,0,.2,0,.2.1,0,0,0,.2-.1.2,0,0-.8.2-1.4.8,0,0-.2,0-.2,0,0,0,0,0,0,0Z" fill="#fff"/>
                  <path d="M519.6,307.1s0,0,0,0c0,0-.9.2-1.6.9,0,0,0,0,0,.2,0,0,0,0,0,0,0,0,0,0,.1,0s0,0,.1,0c.6-.6,1.4-.8,1.4-.8,0,0,.1-.1.1-.2,0,0,0-.1-.2-.1h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M524.2,330.8s0,0,0,0c0,0,0-.2.2-.2,1.2,0,2.1-.2,2.1-.2,0,0,.2,0,.2.1,0,0,0,.2-.1.2,0,0-.9.3-2.2.2,0,0-.1,0-.2-.1Z" fill="#fff"/>
                  <path d="M526.5,330.4s0,0,0,0c0,0-.7.2-1.6.2s-.3,0-.5,0c0,0,0,0,0,0,0,0-.2,0-.2.2,0,0,0,0,0,0,0,0,0,.1.2.1.2,0,.3,0,.5,0,1,0,1.7-.2,1.7-.2,0,0,.1-.1.1-.2,0,0,0-.1-.2-.1h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M526.1,329.9s0,0,0,0c0,0,0-.2.2-.2,1.1-.1,2.4-.7,2.4-.7,0,0,.2,0,.2,0,0,0,0,.2,0,.2,0,0-1.4.6-2.5.7,0,0-.2,0-.2-.1Z" fill="#fff"/>
                  <path d="M528.8,329s0,0,0,0c0,0-1.3.6-2.4.7,0,0-.2,0-.2.2,0,0,0,0,0,0,0,0,0,.1.2.1s0,0,0,0c1.1-.1,2.5-.7,2.5-.7,0,0,.1-.1,0-.2,0,0,0-.1-.2-.1h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <g>
                    <path d="M535.9,311.1c0,0-.3-.2-.4-.5l.6-2.2c.2,0,.6.2,1.2.2s1,0,1.6-.2c.4-.1.8-.2,1.2-.2.8,0,1.1.3,1.1.3,0,0,0,0,0,0-.5.4-3.9,1.8-5.3,2.4Z" fill="#fff"/>
                    <path d="M540.1,308.5c.3,0,.5,0,.7,0-.8.4-3.2,1.5-4.9,2.2,0,0-.1-.1-.2-.2l.5-1.8c.3,0,.6.1,1,.1s1.1,0,1.7-.2c.4,0,.8-.1,1.1-.1M540.1,308c-.4,0-.8,0-1.3.2-.6.1-1.1.2-1.5.2-.9,0-1.3-.3-1.3-.3l-.7,2.5c.3.5.6.8.6.8,0,0,4.8-2.1,5.5-2.5.5-.4,0-.9-1.2-.9h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M535.1,310.7s0,0,0,0l.7-2.5c0,0,0,0,.1-.1,0,0,.1,0,.2,0,0,0,.8.5,2.8,0,1.5-.4,2.6,0,2.8.4,0,.2,0,.4-.2.6-.6.5-5.3,2.5-5.5,2.5,0,0-.1,0-.2,0,0,0-.4-.3-.7-.8,0,0,0,0,0,0ZM536.1,308.4l-.7,2.3c.2.3.4.5.5.6,1.7-.7,4.9-2.1,5.3-2.5.1-.1.1-.2.1-.2-.1-.2-1-.6-2.4-.2-1.6.4-2.5.2-2.8,0Z" fill="#fff"/>
                    <path d="M540.1,307.9c-.4,0-.8,0-1.3.2-.6.1-1.1.2-1.5.2-.9,0-1.2-.2-1.3-.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0-.1.1l-.7,2.5s0,0,0,0c0,0,0,0,0,0,.3.6.7.8.7.8,0,0,0,0,0,0s0,0,0,0c.2,0,4.9-2.1,5.5-2.5.2-.2.3-.4.2-.6-.1-.3-.7-.6-1.5-.6h0ZM537.3,308.6c.4,0,1,0,1.6-.2.5-.1.9-.2,1.2-.2.7,0,1.1.2,1.2.4,0,0,0,0-.1.2-.5.3-3.7,1.7-5.3,2.5-.1,0-.3-.3-.5-.6l.7-2.3c.2,0,.6.2,1.2.2h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M538.9,314.7c-.8,0-1.5-.5-1.9-1.2-.2-.5-.3-1.1,0-1.6.2-.5.6-.9,1.1-1.2l3.5-1.6c.3-.1.6-.2.9-.2.8,0,1.5.5,1.9,1.2.5,1,0,2.3-1,2.8l-3.5,1.6c-.3.1-.6.2-.9.2Z" fill="#fff"/>
                    <path d="M542.4,309.2h0c.7,0,1.4.4,1.7,1.1.4.9,0,2-.9,2.4l-3.5,1.6c-.2.1-.5.2-.8.2-.7,0-1.4-.4-1.7-1.1-.4-.9,0-2,.9-2.4l3.5-1.6c.2-.1.5-.2.8-.2M542.4,308.7c-.3,0-.7,0-1,.2l-3.5,1.6c-1.2.5-1.7,1.9-1.1,3.1h0c.4.9,1.2,1.4,2.1,1.4s.7,0,1-.2l3.5-1.6c1.2-.5,1.7-1.9,1.1-3.1-.4-.9-1.2-1.4-2.1-1.4h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M535.9,312c0-.2,0-.3,0-.5,0-.2.3-.4.5-.5l6.3-2.9c.2-.1.5-.1.7,0,.2,0,.4.3.5.5l1.3,2.8c.2.5,0,1.1-.5,1.3l-6.3,2.9c-.5.2-1.1,0-1.3-.5l-1.3-2.8c0,0,0-.2,0-.3ZM545,311.7c0,0,0-.1,0-.2l-1.3-2.8c0-.1-.2-.3-.3-.3-.2,0-.3,0-.5,0l-6.3,2.9c-.1,0-.3.2-.3.3,0,.2,0,.3,0,.5l1.3,2.8h-.2c0,0,.2,0,.2,0,.1.3.5.4.8.3l6.3-2.9c.3-.1.4-.4.4-.7Z" fill="#fff"/>
                    <path d="M543.1,308c-.1,0-.3,0-.4,0l-6.3,2.9c-.2.1-.4.3-.5.5,0,.2,0,.3,0,.5,0,0,0,.2,0,.3l1.3,2.8c.2.4.5.6.9.6s.3,0,.4,0l6.3-2.9c.5-.2.7-.8.5-1.3l-1.3-2.8c-.1-.2-.3-.4-.5-.5-.1,0-.2,0-.3,0h0ZM537.6,314.9l-1.3-2.8c0-.1,0-.3,0-.5,0-.2.2-.3.3-.3l6.3-2.9c0,0,.2,0,.3,0s.1,0,.2,0c.2,0,.3.2.3.3l1.3,2.8c0,0,0,.1,0,.2,0,.3,0,.5-.4.7l-6.3,2.9c0,0-.2,0-.3,0-.2,0-.5-.1-.6-.4h-.2c0,0,.2,0,.2,0h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M537,318.3c-1.1,0-2-.9-2.2-1.2,0-1.1.2-2.7.7-2.9.4-.3.7-.6.8-.8.1-.2.2-.2.3-.3,0,0,0,.2,0,.5,0,.1-.1.3-.2.4-.2.3-.3.6-.2.8,0,0,.2.2.4.2s.2,0,.4,0c.8-.3,1.3-.9,1.7-1.5.1-.2.3-.4.5-.6.3-.3.4-.4.5-.4,0,0,.1,0,.1,0,.1.3-.8,1.6-1.7,2.5l-.4.5h.6c2-.2,2.7-1,3.1-1.5.1-.1.2-.3.3-.3.2,0,.2.1.2.1,0,.2-.2.5-.4.7h-.1c0,.1,0,.2,0,.2.2.8-.5,1.2-.6,1.2h-.1c0,0,0,.2,0,.2,0,.9-2.3,1.7-3.7,2Z" fill="#fff"/>
                    <path d="M539.3,313c-.3.5-.8,1.2-1.5,1.9l-.9.9h1.3c1.5-.2,2.3-.7,2.8-1.2v.3c.2.6-.3.9-.4.9h-.3c0,.1,0,.4,0,.4,0,.6-1.8,1.4-3.5,1.8-.9,0-1.7-.7-1.9-1,0-1.2.3-2.5.5-2.6.3-.2.5-.4.6-.5,0,0,0,0,0,0-.2.3-.4.7-.2,1,0,.1.2.3.6.3s.3,0,.5,0c.9-.3,1.4-1,1.9-1.6.1-.2.3-.4.4-.6M539.6,312.2c-.2,0-.4.1-.7.5-.7.9-1.1,1.8-2.1,2.1-.1,0-.2,0-.3,0-.5,0,.1-.7.2-1.1,0-.4,0-.8-.2-.8s0,0-.1,0c-.4.1-.5.6-1.2,1.1-.7.5-.8,3.2-.8,3.2,0,0,1,1.3,2.5,1.4,0,0,4-.8,4-2.3,0,0,.9-.5.7-1.5,0,0,.9-1,.1-1.3,0,0,0,0-.1,0-.6,0-.7,1.5-3.4,1.7,0,0,2-2.1,1.7-2.8,0,0-.1-.2-.3-.2h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M534.3,317.2s0,0,0,0c0-.3,0-2.8.8-3.4.4-.3.6-.5.7-.7.2-.2.3-.3.5-.4.2,0,.4,0,.4,0,.3.2.2.7.1.9,0,.2-.1.3-.2.5,0,.1-.1.3-.2.4,0,0,.1,0,.3,0,.7-.2,1.1-.7,1.5-1.4.1-.2.3-.4.5-.7.3-.4.6-.6.9-.5.2,0,.4.2.4.3,0,0,0,0,0,0,.2.6-.9,2-1.5,2.7,1.4-.2,2-.8,2.3-1.2.2-.3.4-.5.8-.4.3.1.4.3.4.4,0,.4-.3.9-.4,1,.2.8-.3,1.3-.7,1.6,0,.6-.8,1.2-2.1,1.8-1,.4-2,.6-2,.6,0,0,0,0,0,0-1.5,0-2.6-1.4-2.6-1.4,0,0,0,0,0,0ZM536.7,313.2c0,0,0-.1,0-.1,0,0,0,0,0,0-.1,0-.2.2-.4.3-.2.2-.4.5-.8.7-.5.3-.7,2-.7,3,.2.2,1.1,1.2,2.3,1.2,1.1-.2,3.8-1,3.8-2.1,0,0,0-.1,0-.2,0,0,.2-.1.4-.4.2-.3.3-.6.2-1,0,0,0-.1,0-.2.2-.2.5-.6.4-.8,0,0,0-.1-.2-.2-.1,0-.2,0-.4.3-.4.5-1.1,1.3-3,1.4,0,0-.1,0-.2,0,0,0,0-.1,0-.2.8-.8,1.8-2.2,1.7-2.6,0,0,0,0-.2-.1,0,0-.3,0-.6.4-.2.2-.3.4-.5.6-.5.6-.9,1.3-1.7,1.5-.2,0-.5.1-.6,0-.2-.2,0-.5.1-.8,0-.2.2-.3.2-.4,0-.2,0-.4,0-.5Z" fill="#fff"/>
                    <path d="M539.6,312c-.3,0-.5.2-.8.5-.2.2-.3.4-.5.7-.4.6-.8,1.2-1.5,1.4-.1,0-.2,0-.3,0,0,0,.1-.3.2-.4,0-.2.2-.4.2-.5,0-.2.1-.7-.1-.9,0,0-.1,0-.2,0s-.1,0-.2,0c-.2,0-.3.2-.5.4-.2.2-.4.4-.7.7-.8.5-.8,3.1-.8,3.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1.1,1.4,2.6,1.4h0s0,0,0,0c0,0,1-.2,2-.6,1.3-.5,2-1.1,2.1-1.8.4-.2.9-.8.7-1.6.2-.2.5-.6.4-1,0-.1-.1-.3-.4-.4,0,0-.1,0-.2,0-.3,0-.4.2-.6.4-.4.4-.9,1-2.3,1.2.6-.7,1.7-2,1.5-2.7,0,0,0,0,0,0,0,0-.2-.3-.4-.3,0,0,0,0,0,0h0ZM536.6,315c.1,0,.2,0,.4,0,.8-.2,1.2-.9,1.7-1.5.1-.2.3-.4.5-.6.3-.3.5-.4.5-.4s0,0,0,0c0,0,.2,0,.2.1.1.4-.9,1.8-1.7,2.6,0,0,0,.1,0,.2,0,0,0,0,.2,0s0,0,0,0c1.9-.1,2.6-.9,3-1.4.2-.2.3-.3.4-.3s0,0,0,0c.2,0,.2.2.2.2,0,.2-.2.6-.4.8,0,0,0,.1,0,.2,0,.3,0,.7-.2,1-.2.2-.4.4-.4.4,0,0,0,0,0,.2,0,1.1-2.7,1.9-3.8,2.1-1.2,0-2.1-1-2.3-1.2,0-1,.2-2.7.7-3,.4-.3.6-.5.8-.7.1-.2.2-.3.4-.3,0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,.1,0,.1,0,.3,0,.5,0,.1-.1.3-.2.4-.2.3-.3.6-.1.8,0,0,.2.1.3.1h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <path d="M538.5,316.2s0,0,0,0c0,0,0-.2.2-.2,0,0,1.4-.1,2.8-1.4,0,0,.2,0,.2,0,0,0,0,.2,0,.2-1.5,1.3-3,1.5-3,1.5,0,0-.2,0-.2-.1Z" fill="#fff"/>
                  <path d="M541.6,314.6s0,0-.1,0c-1.4,1.2-2.8,1.4-2.8,1.4,0,0-.2,0-.2.2,0,0,0,0,0,0,0,0,0,.1.2.1s0,0,0,0c0,0,1.5-.1,3-1.5,0,0,0-.2,0-.2,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M538.8,317.1c0,0,0-.2.1-.2,1.2-.3,1.9-.8,2-.8,0,0,.2,0,.2,0,0,0,0,.2,0,.2,0,0-.8.6-2.1.8,0,0-.2,0-.2-.1,0,0,0,0,0,0Z" fill="#fff"/>
                  <path d="M541,316.1s0,0-.1,0c0,0-.7.5-2,.8,0,0-.1.1-.1.2,0,0,0,0,0,0,0,0,0,.1.2.1s0,0,0,0c1.3-.3,2-.8,2.1-.8,0,0,0-.2,0-.2,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <path d="M523.2,294.2c2-5,4.9-12,5.4-12.8.5-.2,1.9-1.2,3.2-2.1l4.8,8.7-2.3,2.8-11.1,3.3Z" fill="#fff"/>
                <path d="M531.8,279.7l4.6,8.3-2.2,2.6-10.5,3.2c1.9-4.6,4.6-11.1,5.2-12.2.3-.1,1.1-.6,3-1.9M532,279s-3,2.2-3.4,2.2,0,0,0,0c0,0,0,0,0,0-.3,0-5.7,13.4-5.7,13.4l11.6-3.5,2.5-3-5-9.1h0Z" fill="#9b978f"/>
              </g>
              <g>
                <g>
                  <g>
                    <path d="M537.5,288.2c-.3,0-.4-.2-.4-.2v-.2s-.2,0-.2,0c0,0-.4,0-.6-.4-.2-.6,0-1.3,0-1.3h0c0,0,0-.2,0-.2,0-.1-1.7-2.8-2.9-3.8-1-.9-1.7-1.9-1.9-2.1v-.7c.2-.3,1-1.2,1.4-2.2.5.6,1.8,2.1,2.7,4,1.1,2.5,1.8,3.5,2.4,3.9.5.3.9.8.8,1.2h0c0,0,0,.1,0,.1,0,0,0,.3-.2.6h0c0,0,0,.2,0,.2,0,.1,0,.4-.2.4h-.1s0,.2,0,.2c0,0-.2.4-.5.4h0Z" fill="#fff"/>
                    <path d="M532.9,277.6c.6.7,1.7,2,2.4,3.7,1.2,2.5,1.8,3.6,2.4,4,.5.4.8.7.7.9h0c0,.1,0,.3,0,.3,0,0,0,.2-.1.4h-.1c0,.1,0,.3,0,.3,0,0,0,.2,0,.2h-.3c0,0,0,.3,0,.3,0,0,0,.3-.3.3-.1,0-.2,0-.2,0v-.3c0,0-.5,0-.5,0,0,0-.3,0-.3-.3-.2-.5,0-1.1,0-1.2v-.2s0-.1,0-.1c0-.1-1.7-2.8-2.9-3.9-.9-.8-1.6-1.7-1.8-2v-.5c.3-.3.8-1,1.3-1.8M532.7,276.7c-.5,1.3-1.6,2.5-1.6,2.5v.8s.8,1.2,1.9,2.2,2.8,3.8,2.8,3.8c0,0,0,.8.1,1.4.2.6.8.6.8.6s0,0,0,0c0,0,0,.3.6.4,0,0,0,0,0,0,.5,0,.7-.6.7-.6.3,0,.4-.6.4-.6.4-.4.3-.9.3-.9.2-.5-.4-1.1-.9-1.5-.5-.4-1.1-1.3-2.3-3.8-1.2-2.5-3-4.3-3-4.3h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M530.9,280.1s0,0,0,0v-.8s0,0,0-.1c0,0,1.1-1.2,1.6-2.5,0,0,0,0,.1-.1,0,0,.1,0,.2,0,0,0,1.9,1.9,3,4.4,1.1,2.3,1.7,3.4,2.2,3.8.4.3,1.2.9,1,1.6,0,.1,0,.6-.3.9,0,.2-.1.5-.4.7,0,.2-.3.6-.9.6-.5,0-.7-.2-.7-.4-.3,0-.7-.2-.9-.7-.2-.5-.1-1.2-.1-1.4-.2-.4-1.7-2.8-2.8-3.7-1.2-1-1.9-2.2-2-2.3,0,0,0,0,0,0ZM531.3,279.3v.7c.1.2.9,1.3,1.9,2.2,1.2,1.1,2.8,3.7,2.9,3.8,0,0,0,0,0,.1,0,0,0,.7,0,1.3.2.5.6.5.7.5,0,0,.2,0,.2.1h0s0,.2.5.2c.4,0,.6-.5.6-.5,0,0,0,0,.1-.1.2,0,.3-.5.3-.5,0,0,0,0,0-.1.3-.3.2-.7.2-.7,0,0,0,0,0,0,.2-.5-.6-1.1-.8-1.3-.6-.4-1.2-1.5-2.3-3.9-.9-2-2.3-3.6-2.8-4.1-.5,1.1-1.3,2.1-1.5,2.3Z" fill="#fff"/>
                    <path d="M532.7,276.6s0,0,0,0c0,0-.1,0-.1.1-.5,1.2-1.6,2.5-1.6,2.5,0,0,0,0,0,.1v.8s0,0,0,0c0,0,0,0,0,0,0,0,.8,1.2,2,2.3,1,.9,2.5,3.3,2.8,3.7,0,.2,0,.8.1,1.4.2.5.6.7.9.7,0,.1.3.3.7.4,0,0,0,0,0,0,.5,0,.8-.4.9-.6.3-.1.4-.5.4-.7.4-.4.3-.8.3-.9.2-.7-.6-1.4-1-1.6-.5-.3-1.1-1.4-2.2-3.8-1.2-2.5-3-4.4-3-4.4,0,0,0,0-.1,0h0ZM536.8,287.9s-.5,0-.7-.5c-.2-.6,0-1.3,0-1.3,0,0,0,0,0-.1,0-.1-1.7-2.8-2.9-3.8-1-.9-1.7-1.9-1.9-2.2v-.7c.2-.2,1-1.2,1.5-2.3.5.5,1.9,2.1,2.8,4.1,1.1,2.4,1.8,3.5,2.3,3.9.2.2,1,.8.8,1.3,0,0,0,0,0,0,0,0,0,.4-.2.7,0,0,0,0,0,.1,0,0,0,.4-.3.5,0,0,0,0-.1.1,0,0-.2.5-.6.5s0,0,0,0c-.4,0-.5-.2-.5-.2h0c0,0,0-.1-.2-.1s0,0,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M527.1,292.8c.9-.4,3.6-1.1,4.7-1.4h.3c1.1-.4,2.6-1.3,2.7-1.3h0c0,0,0-.1,0-.1.2-.6,1-1,1.5-1.1,0,0,0,0,0,0,.1,0,.1,0,.1,0v.2s.2.1.2.1c.3,0,.4.2.4.3h0c0,0,0,.2,0,.2.2.4,0,.8,0,.8h0c0,0,0,.2,0,.2,0,.2-.1.5-.2.6-.2.5-.7.6-1.1.6s-.3,0-.3,0h-.1c-.3,0-1.6.1-3.7,1.6-1.8,1.3-4.2,2.1-5.1,2.3l.5-3Z" fill="#fff"/>
                    <path d="M536.4,289v.2s.4.1.4.1c0,0,.1,0,.2,0h0c0,.1,0,.3,0,.3.1.2,0,.5,0,.6v.2c0,0,0,.2,0,.2,0,0,0,.3-.1.4h0c0,0,0,.1,0,.1-.1.3-.5.4-.9.4s-.3,0-.3,0c0,0,0,0-.1,0-.4,0-1.7.1-3.8,1.7-1.6,1.1-3.6,1.8-4.7,2.2l.4-2.5c1-.4,3.5-1.1,4.6-1.3h.3c1.2-.4,2.7-1.3,2.8-1.4h.2c0-.1,0-.3,0-.3.1-.5.8-.8,1.2-.9M536.5,288.5s0,0-.1,0c-.5,0-1.5.5-1.7,1.3,0,0-1.5,1-2.6,1.3s-4.3,1.1-5.2,1.6l-.5,3.5s3.3-.8,5.6-2.5c2-1.5,3.2-1.6,3.5-1.6s0,0,0,0c0,0,.2,0,.4,0,.4,0,1.1-.1,1.3-.7,0,0,.3-.5.2-.8,0,0,.3-.6,0-1.1,0,0,.1-.4-.6-.6,0,0,0-.4-.4-.4h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M526.2,296.1s0,0,0,0l.5-3.5c0,0,0,0,0-.1.3-.2.8-.3,1.4-.5,1.2-.4,2.7-.8,3.6-1h.3c.9-.3,2.2-1.1,2.5-1.3.3-.8,1.3-1.3,1.9-1.3.2,0,.4,0,.5.1,0,0,.1.2.1.2.2,0,.4.2.5.3,0,.1,0,.3,0,.3.2.4,0,.9,0,1.1,0,.4-.2.8-.2.9-.4,1-1.8.8-1.9.8,0,0-1.3,0-3.5,1.5-2.3,1.7-5.6,2.5-5.6,2.5,0,0-.1,0-.2,0,0,0,0,0,0,0ZM527,292.7l-.5,3.1c.8-.2,3.4-1,5.3-2.4,2.4-1.7,3.6-1.6,3.7-1.6,0,0,0,0,0,0,0,0,1.3.2,1.5-.6,0,0,0,0,0,0,0-.1.2-.5.2-.7,0,0,0,0,0-.1,0,0,.2-.5,0-.9,0,0,0,0,0-.1,0,0,0-.3-.4-.4,0,0-.1-.1-.1-.2,0,0,0,0,0-.1,0,0-.1,0-.3,0-.4,0-1.4.4-1.6,1.1,0,0,0,0,0,.1,0,0-1.6,1-2.7,1.3h-.3c-1.2.4-3.9,1.1-4.8,1.5Z" fill="#fff"/>
                    <path d="M536.5,288.4s0,0-.1,0c-.6,0-1.6.5-1.9,1.3-.3.2-1.6,1-2.5,1.2h-.3c-.9.3-2.4.7-3.6,1.1-.6.2-1.1.4-1.4.5,0,0,0,0,0,.1l-.5,3.5s0,0,0,0c0,0,0,0,0,0,0,0,0,0,.1,0s0,0,0,0c0,0,3.3-.8,5.6-2.5,2-1.5,3.2-1.5,3.4-1.5s0,0,0,0c0,0,.2,0,.4,0,.5,0,1.2-.1,1.5-.8,0-.1.3-.5.2-.9,0-.2.2-.7,0-1.1,0,0,0-.2,0-.3,0-.2-.3-.3-.5-.3,0,0,0-.2-.1-.2-.1-.1-.2-.2-.4-.2h0ZM526.6,295.9l.5-3.1c.9-.4,3.6-1.1,4.8-1.4h.3c1.1-.4,2.6-1.3,2.7-1.3,0,0,0,0,0-.1.2-.7,1.2-1.1,1.6-1.1,0,0,0,0,0,0,0,0,.1,0,.2,0,0,0,0,.1,0,.1,0,0,0,.2.1.2.5.1.4.3.4.4,0,0,0,0,0,.1.2.4,0,.9,0,.9,0,0,0,0,0,.1,0,.2-.1.6-.2.7,0,0,0,0,0,0-.2.5-.8.6-1.2.6s-.3,0-.3,0c0,0,0,0,0,0,0,0,0,0,0,0-.3,0-1.6.1-3.6,1.6-1.9,1.4-4.5,2.1-5.3,2.4h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M522.2,297.6c-1.3,0-2.8-1-2.8-1-.9-.3-1-.8-1.2-1.3,0-.3-.2-.6-.4-.9-.2-.2-.5-.6-.7-1.1-.3-.5-.6-1.2-1.1-1.6-.8-.8-1.1-1.7-1.1-1.7-1.8-5.4.3-9.5.3-9.5,4-7.5,8.3-8.6,10.5-8.6s1.1.1,1.1.1h0s0,0,0,0c.1,0,.3,0,.4,0,.6,0,1.1.3,1.6.5.2.1.4.2.6.3.6.2,2.2,2.6,3.2,4.1,0,1.6-.4,2.6-1,2.6h0c-.3,0-.6-.2-.6-.2l-.5-.4v.6c.5,4.6-.2,8.7-1.4,9.5-1.5,1-3,3.1-3.1,3.2v.2c-.1,0,0,.1,0,.1.9.7,1,1.4.9,2-.2.8-.9,1.5-1.6,1.7-.8.2-1.2.5-1.6.8-.4.3-.7.6-1.4.7-.1,0-.3,0-.4,0Z" fill="#fff"/>
                    <path d="M525.7,272.1c.6,0,1,0,1,0h.1s.1,0,.1,0c.1,0,.2,0,.4,0,.5,0,1,.2,1.5.5.2.1.4.2.6.3.5.2,1.9,2.2,3,3.9,0,1.7-.4,2.3-.7,2.3s-.4-.1-.4-.2l-.9-.8v1.2c.5,4.4,0,8.5-1.2,9.3-1.5,1-3.1,3.1-3.1,3.2l-.3.4.4.3c.7.5.9,1.1.8,1.7-.1.7-.8,1.3-1.4,1.5-.8.2-1.3.5-1.7.9-.4.3-.7.5-1.3.7-.1,0-.2,0-.3,0-1.2,0-2.7-.9-2.7-.9h0s0,0,0,0c-.7-.3-.8-.6-.9-1.1,0-.3-.2-.7-.5-1-.2-.1-.4-.6-.7-1-.3-.6-.7-1.2-1.1-1.7-.8-.8-1-1.6-1-1.6-1.7-5.3.3-9.3.3-9.3,1.4-2.6,5.1-8.5,10.3-8.5M525.7,271.6c-2.1,0-6.6,1-10.7,8.8,0,0-2.2,4.1-.4,9.7,0,0,.3,1,1.1,1.8s1.3,2.3,1.9,2.8c.6.4,0,1.6,1.6,2.2,0,0,1.6,1,3,1s.3,0,.4,0c1.4-.3,1.5-1.2,3-1.5,1.4-.3,2.9-2.6.8-4.1,0,0,1.6-2.1,3-3.1,1.4-1,2-5.4,1.6-9.8,0,0,.3.3.8.3s1.2-.5,1.2-2.9c0,0-2.4-3.9-3.3-4.2-.8-.3-1.5-.8-2.4-.8-.2,0-.3,0-.5,0,0,0-.4-.1-1.1-.1h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M533,277.1s0,0,0,0h0Z" fill="#fff"/>
                    <path d="M525.7,271.4c-.7,0-1.7.1-2.8.5-1.3.5-2.6,1.4-3.9,2.5-1.5,1.5-3,3.4-4.2,5.8,0,0-.6,1.1-.9,2.8-.2,1.3-.4,3.1,0,5.3.1.5.3,1.1.4,1.7,0,0,.3,1,1.2,1.9.4.4.7,1,1,1.5.3.5.5,1,.9,1.2.2.1.2.3.3.6.1.5.3,1.2,1.4,1.6.2.1,1.7,1,3,1s.3,0,.5,0c.8-.1,1.2-.5,1.6-.8.4-.3.7-.6,1.4-.7.9-.2,1.7-1,1.9-2,.2-.9-.1-1.7-.9-2.3.4-.5,1.7-2.1,2.9-2.9.9-.6,1.4-2.4,1.6-3.7.3-1.8.3-3.9.1-6.1.2-.2.5-.9,1.2-1.7.3-.3.5-.3.7-.3,0,0,.1,0,.2,0,.1,0,.1,0,0-.5,0,0,0,0-.1-.1,0,0,0-.1,0-.1s0,0,0,0h0s-2.5-3.9-3.4-4.3c-.2,0-.4-.2-.6-.3-.6-.3-1.2-.6-1.8-.6s-.3,0-.5,0c-.1,0-.5-.1-1.1-.1h0ZM522.2,297.7c-1.3,0-2.9-1-2.9-1,0,0,0,0,0,0-.9-.3-1-.8-1.2-1.3,0-.3-.1-.6-.4-.8-.3-.2-.5-.6-.8-1.1-.3-.5-.6-1.2-1.1-1.6-.8-.8-1.1-1.7-1.1-1.8,0,0,0,0,0,0-.9-2.9-.8-5.3-.5-6.8.3-1.7.8-2.7.8-2.7,1.3-2.4,2.7-4.3,4.1-5.7,1.2-1.1,2.5-2,3.8-2.5,1.1-.4,2-.5,2.7-.5s1.1.1,1.1.1c0,0,0,0,0,0s0,0,0,0c.2,0,.3,0,.4,0,.6,0,1.1.3,1.7.5.2.1.4.2.6.3.8.3,2.4,2.8,3.2,4.3-.4.1-1.9,2.3-1.9,2.3,0,0,0,0,0,.1.2,2.2.2,4.4,0,6.1-.3,1.8-.8,3.1-1.4,3.5-.8.5-1.5,1.3-2.1,2-.5.6-.9,1.1-.9,1.2,0,0,0,0,0,.1,0,0,0,0,0,.1.8.6,1.1,1.3.9,2-.2.8-.9,1.6-1.7,1.7-.8.2-1.2.5-1.5.8-.4.3-.7.6-1.4.7-.1,0-.3,0-.4,0h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <path d="M521.4,273.9s0,0,0,0c0,0,.1-.2.2-.1,0,0,1.2.3,2.8.8,1.4.5,3.4,1.3,4.9,2.5.3.2.7.8.3,1.6,0,0,0,0,0,0,0,0,0,0,0,0,.3,0,1-.1,1.6.5,0,0,0,.2,0,.2,0,0-.2,0-.2,0-.5-.5-1-.5-1.3-.4-.2,0-.3,0-.4,0,0-.1,0-.3,0-.5.4-.7-.2-1.1-.2-1.1,0,0,0,0,0,0-2.7-2.2-7.5-3.2-7.5-3.2,0,0-.1,0-.1-.1Z" fill="#fff"/>
                  <path d="M521.6,273.7c0,0-.2,0-.2.1,0,0,0,0,0,0,0,0,0,.1.1.1,0,0,4.8,1.1,7.5,3.2,0,0,0,0,0,0,0,0,.6.4.2,1.1-.1.2-.2.4,0,.5,0,0,.1.1.2.1s.1,0,.2,0c0,0,.2,0,.3,0,.3,0,.6,0,1,.5,0,0,0,0,.1,0s0,0,.1,0c0,0,0-.2,0-.2-.4-.5-.9-.6-1.2-.6s-.3,0-.4,0c0,0,0,0,0,0,0,0,0,0,0,0,.4-.8,0-1.4-.3-1.6-1.4-1.2-3.4-2-4.9-2.5-1.5-.5-2.8-.8-2.8-.8,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M520.9,291.4s0,0,0,0h0Z" fill="#fff"/>
                  <path d="M521.8,291.2c-.3,0-.6,0-.9,0,0,0-.2,0-.2.2,0,0,0,0,0,0,0,0,0,.1.2.1s0,0,0,0c.3,0,.6,0,.9,0,2.6,0,4.5.8,4.6.8,0,0,0,0,0,0,0,0,.1,0,.2-.1,0,0,0-.2,0-.2,0,0-2.1-.8-4.7-.8h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M521.1,294.4c0,0,0-.1,0-.2,1.1-1.1,3.1-1.8,3.2-1.8,0,0,.2,0,.2.1,0,0,0,.2-.1.2,0,0-2,.7-3.1,1.8,0,0-.2,0-.2,0,0,0,0,0,0,0Z" fill="#fff"/>
                  <path d="M524.4,292.4s0,0,0,0c0,0-2.1.7-3.2,1.8,0,0,0,.1,0,.2,0,0,0,0,0,0,0,0,0,0,.1,0s0,0,.1,0c1.1-1.1,3.1-1.7,3.1-1.8,0,0,.1-.1.1-.2,0,0,0-.1-.2-.1h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M522.4,287.8c-.4,0-1-.8-1.2-2-.4-1.9.1-4.5,2.6-5.5.4.2,2,1.4,1.5,3.9h0c0,.1,0,.2,0,.2,0,0,.5.5.3.9-.2.4-.7.4-.7.4h-.2v.2c0,0-.7,1.6-2.3,2h0Z" fill="#fff"/>
                      <path d="M523.7,280.5c.5.3,1.7,1.4,1.3,3.6v.3s.1.2.1.2c.1.1.3.4.2.6,0,.2-.5.2-.5.2h-.3s-.1.3-.1.3c0,0-.6,1.5-2.1,1.8-.2,0-.8-.6-1-1.8-.3-1.8,0-4.2,2.3-5.2M523.8,279.9c-4.4,1.7-3,8.1-1.4,8.1s0,0,.1,0c1.7-.4,2.4-2.1,2.4-2.1,0,0,0,0,0,0,0,0,.8,0,1-.5.2-.6-.3-1.1-.3-1.1.6-3.1-1.8-4.3-1.8-4.3h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                      <path d="M520.7,285.9c-.2-1-.2-2.1.1-3.1.3-1,1.1-2.4,2.8-3,0,0,0,0,.1,0,0,0,.6.3,1.2,1,.5.6,1,1.7.7,3.4.2.2.5.7.3,1.3-.2.5-.8.6-1,.6-.2.4-.9,1.8-2.4,2.1-.6.2-1.3-.5-1.7-1.7,0-.2-.1-.4-.1-.6ZM523.7,280.1c-1.6.6-2.3,1.9-2.5,2.8-.3,1.1-.3,2.4,0,3.5.3,1,.8,1.6,1.3,1.5,1.6-.4,2.2-2,2.3-2,0,0,0-.1.2-.1,0,0,.6,0,.8-.4.2-.4-.3-1-.3-1,0,0,0,0,0-.2.2-1.2,0-2.3-.6-3.2-.4-.5-.8-.8-1-.9Z" fill="#fff"/>
                      <path d="M523.8,279.8s0,0,0,0c-1.8.7-2.5,2-2.8,3-.3,1-.3,2.1-.1,3.1,0,.2,0,.4.1.6.3,1.1.9,1.7,1.5,1.7s.1,0,.2,0c1.5-.4,2.3-1.7,2.4-2.1.2,0,.8-.1,1-.6.2-.5-.2-1.1-.3-1.3.3-1.6-.2-2.7-.7-3.4-.5-.7-1.1-1-1.2-1,0,0,0,0,0,0h0ZM522.4,287.8c-.4,0-.9-.6-1.2-1.5-.3-1.1-.3-2.4,0-3.5.3-.9,1-2.1,2.5-2.8.2,0,.6.4,1,.9.6.9.9,1.9.6,3.2,0,0,0,.1,0,.2,0,0,.5.5.3,1-.2.4-.7.4-.8.4s0,0,0,0c0,0,0,0,0,0,0,0-.1,0-.2.1,0,0-.7,1.6-2.3,2,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M519.9,288.6c-.1,0-.3,0-.4,0-.4-.2-.8-.2-1.1-.2h-.4c-.6,0-1.1,0-1.8-.9-.2-.2-.5-.5-.8-.8-1.4-1.5-3.4-3.5-1.6-6.6,0-.2.7-2.3,3.4-2.5.4,0,.7,0,1,0,2.5,0,4.4.8,5.6,2.2,0,.4,0,2.4-1.8,3.2h-.2c0,.1,0,.3,0,.3,0,0,.8,1.8.1,3.3-.3.6-.3,1.1,0,1.5.1.2.3.4.5.4-.1,0-.2.2-.4.2s-.2,0-.4-.2c-.2-.2-.4-.2-.6-.2s-.4.1-.6.2c-.2.1-.4.2-.6.2Z" fill="#fff"/>
                      <path d="M518.3,277.7h0c2.4,0,4.2.7,5.3,2,0,.5-.2,2.2-1.6,2.9l-.4.2.2.4s.7,1.7.1,3.1c-.3.7-.3,1.3,0,1.8,0,0,0,0,0,.1-.2-.2-.5-.3-.7-.3s-.5.1-.8.2c-.2,0-.3.2-.5.2s-.2,0-.3,0c-.4-.2-.8-.2-1.2-.2h-.2s-.2,0-.2,0c-.5,0-1,0-1.6-.8-.2-.3-.5-.5-.8-.8-1.5-1.5-3.3-3.4-1.6-6.3h0c0,0,0-.1,0-.1,0,0,.6-2.1,3.1-2.3.3,0,.7,0,1,0M518.3,277.2c-.3,0-.7,0-1.1,0-2.9.2-3.6,2.7-3.6,2.7-2.3,3.9,1.1,6.2,2.4,7.7.7.9,1.4,1,2,1s.2,0,.4,0c.3,0,.7,0,1,.2.2,0,.4.1.5.1.5,0,.9-.4,1.3-.4s.3,0,.4.2c.2.2.4.2.5.2.5,0,.8-.5.8-.5,0,0-1.3-.2-.6-1.8.7-1.6-.1-3.5-.1-3.5,2-1,1.9-3.5,1.9-3.5-1.2-1.6-3.4-2.4-5.8-2.4h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                      <path d="M512.8,283.2c-.2-1,0-2.1.7-3.4,0-.1.2-.7.7-1.3.5-.6,1.4-1.4,3-1.5,3.1-.3,5.7.6,7,2.4,0,0,0,0,0,0,0,.1.1,2.6-1.9,3.6.2.5.7,2.1,0,3.5-.2.5-.3.9-.1,1.2.2.3.5.4.5.4,0,0,.1,0,.1.1,0,0,0,.1,0,.2,0,0-.3.5-.8.6-.3,0-.5,0-.8-.2-.3-.2-.4-.1-.8,0-.3.2-.8.4-1.4.1-.4-.2-.7-.2-1.1-.2-.7,0-1.5,0-2.3-1-.2-.2-.5-.5-.7-.8-.9-.9-2-2.1-2.4-3.7ZM523.9,279.6c-1.3-1.7-3.7-2.5-6.7-2.2-2.8.2-3.4,2.5-3.4,2.5,0,0,0,0,0,0-1.8,3.2.2,5.2,1.6,6.7.3.3.5.6.7.8.7.9,1.4.9,2,.9.4,0,.8,0,1.2.2.5.2.8,0,1.1-.1.3-.2.7-.4,1.1,0,.2.1.3.2.5.2.2,0,.3-.1.4-.2-.2,0-.4-.2-.5-.5-.2-.4-.2-.9,0-1.5.7-1.5-.1-3.3-.1-3.3,0,0,0-.2,0-.2,1.8-.8,1.8-3,1.8-3.3Z" fill="#fff"/>
                      <path d="M518.3,277c-.4,0-.7,0-1.1,0-1.6.1-2.5.9-3,1.5-.5.6-.7,1.2-.7,1.3-.8,1.3-.9,2.4-.7,3.4.3,1.6,1.5,2.8,2.4,3.7.3.3.5.5.7.8.8.9,1.5,1,2.1,1s.1,0,.2,0c0,0,.1,0,.2,0,.3,0,.6,0,.9.2.2,0,.4.1.6.1.3,0,.6-.1.8-.3.2,0,.3-.2.5-.2s.2,0,.3.1c.2.2.4.3.6.3s0,0,.1,0c.5,0,.8-.5.8-.6,0,0,0-.1,0-.2,0,0,0,0-.1-.1,0,0-.4,0-.5-.4-.1-.3-.1-.7.1-1.2.6-1.4.1-3,0-3.5,2-1.1,1.9-3.5,1.9-3.6,0,0,0,0,0,0-1.2-1.6-3.3-2.4-6-2.4h0ZM518,288.4c-.6,0-1.2,0-1.9-.9-.2-.3-.5-.5-.7-.8-1.5-1.5-3.4-3.6-1.6-6.7,0,0,0,0,0,0,0,0,.7-2.3,3.4-2.5.4,0,.7,0,1.1,0,2.5,0,4.5.8,5.6,2.2,0,.4,0,2.5-1.8,3.3,0,0-.1.1,0,.2,0,0,.8,1.8.1,3.3-.3.6-.3,1.1,0,1.5.1.3.3.4.5.5-.1.1-.3.2-.4.2,0,0,0,0,0,0-.1,0-.3,0-.4-.2-.2-.2-.4-.2-.5-.2s-.4.1-.6.2c-.2.1-.4.2-.7.2s-.3,0-.4-.1c-.4-.2-.7-.2-1.1-.2s-.1,0-.2,0c0,0-.1,0-.2,0h0Z" fill="#9b978f"/>
                    </g>
                  </g>
                  <g>
                    <path d="M518.4,282.5s0,0,0,0c0,0,0-.2.1-.2.1,0,2.9-.4,3.7.6,0,0,0,.2,0,.2,0,0-.2,0-.2,0-.6-.7-2.7-.6-3.4-.5,0,0-.2,0-.2-.1Z" fill="#fff"/>
                    <path d="M519.9,282.2c-.7,0-1.3,0-1.3,0,0,0-.2.1-.1.2,0,0,0,0,0,0,0,0,0,.1.2.1s0,0,0,0c.3,0,.7,0,1.2,0,.8,0,1.8.1,2.2.6,0,0,0,0,.1,0s0,0,.1,0c0,0,0-.2,0-.2-.5-.6-1.6-.7-2.4-.7h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <g>
                      <path d="M513.8,284.1c-.1,0-.3,0-.4-.1h0s0,0,0,0c-.5,0-1.1,0-1.3-.4,0-.1-.1-.3-.1-.4h0c0-.1,0-.2,0-.2,0,0-.9-.8-.5-2.1.1-.4.3-.9.7-.9s.2,0,.2,0l.6.3-.2-.6s-.4-1.1.6-1.8c.3-.2.6-.3.8-.3.4,0,.6.3.6.3l.2.2.2-.2s.4-.3.8-.3.3,0,.5.1c.1,0,.2.2.2.3,0,.4-.2.8-.3,1h0c0,0,0,.2,0,.2,0,0,.8,2.4-1.4,4.2h0s0,0,0,0c0,0-.3.6-.8.6Z" fill="#fff"/>
                      <path d="M513.9,277.7c.3,0,.4.2.4.2l.3.4.4-.3s.3-.2.7-.2c.1,0,.3,0,.4.1,0,0,.2.1.1.5,0,.3-.2.5-.2.5v.2c-.1,0,0,.2,0,.2,0,0,.7,2.3-1.3,3.9h0c0,0,0,.2,0,.2,0,.1-.3.5-.6.5s-.2,0-.3,0h-.1c0,0-.1,0-.1,0h0c-.5,0-.9-.1-1.1-.3,0,0,0-.1,0-.2v-.3s-.2-.2-.2-.2c0,0-.8-.7-.5-1.9,0-.3.2-.7.5-.7s.1,0,.1,0,0,0,0,0l1.2.6-.5-1.2c0,0-.3-.9.5-1.5.2-.2.5-.3.6-.3M513.9,277.2c-.3,0-.6,0-1,.4-1.2.9-.6,2.1-.6,2.1,0,0-.1,0-.3,0-.3,0-.8.2-1,1.1-.4,1.5.6,2.4.6,2.4-.1,1,1.2,1.1,1.6,1.1s0,0,0,0c.2.1.4.2.5.2.7,0,1.1-.8,1.1-.8,2.3-1.9,1.5-4.4,1.5-4.4,0,0,.7-1.2,0-1.7-.2-.1-.4-.2-.6-.2-.5,0-1,.3-1,.3,0,0-.3-.4-.8-.4h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                      <path d="M510.7,281.9c0-.4,0-.8,0-1.2.1-.6.4-1,.8-1.1.2,0,.4,0,.5,0,0-.5-.1-1.3.8-2,.4-.3.9-.5,1.3-.4.3,0,.5.2.7.4.3-.2,1-.5,1.7,0,.2.1.4.3.4.6.1.5-.2,1.1-.3,1.3,0,.2.2.8.1,1.5,0,.8-.4,2-1.7,3,0,.1-.4.6-.9.8-.3,0-.6,0-.9-.1-.2,0-1.1,0-1.6-.5-.2-.2-.3-.4-.2-.7-.1-.2-.5-.6-.6-1.3ZM512.4,279.7c0,0,0,.1,0,.2,0,0-.1,0-.2,0,0,0-.3-.1-.5,0-.2.1-.4.4-.6.9-.3,1.4.5,2.2.6,2.2,0,0,0,0,0,.1,0,.2,0,.4.1.5.3.3,1.1.4,1.4.4,0,0,0,0,0,0,.2.1.5.2.7.1.4-.1.7-.7.7-.7,0,0,0,0,0,0,.9-.7,1.5-1.7,1.6-2.8,0-.8-.1-1.4-.1-1.5,0,0,0-.1,0-.1,0,0,.4-.6.3-1s0,0,0,0c0-.2-.1-.3-.3-.4-.3-.2-.6-.2-.9,0-.3,0-.5.2-.5.2,0,0,0,0-.1,0,0,0,0,0-.1,0,0,0-.2-.3-.5-.3-.3,0-.6,0-1,.3-1,.8-.6,1.9-.6,1.9,0,0,0,0,0,0Z" fill="#fff"/>
                      <path d="M513.9,277c-.3,0-.7.1-1.1.4-.9.7-.9,1.6-.8,2,0,0,0,0-.1,0-.1,0-.3,0-.4,0-.4.2-.6.5-.8,1.1-.1.5-.1.9,0,1.2.1.7.5,1.1.6,1.3,0,.3,0,.5.2.7.4.4,1.3.5,1.5.5s0,0,0,0c.2.1.4.2.6.2s.2,0,.3,0c.5-.2.8-.7.9-.8,1.2-1,1.6-2.2,1.7-3,0-.7,0-1.3-.1-1.5.1-.2.4-.8.3-1.3,0-.2-.2-.4-.4-.6-.2-.2-.5-.2-.7-.2-.4,0-.8.2-.9.3-.1-.1-.3-.3-.7-.4,0,0-.1,0-.2,0h0ZM512.3,279.9s0,0,.1,0c0,0,0-.1,0-.2,0,0,0,0,0,0,0,0-.4-1.1.6-1.9.3-.2.6-.3.8-.3s0,0,.1,0c.4,0,.5.3.5.3,0,0,0,0,.1,0,0,0,0,0,0,0,0,0,0,0,.1,0,0,0,.2-.2.5-.2.1,0,.3,0,.4,0,.2,0,.4,0,.5.2.1,0,.2.2.3.4,0,0,0,0,0,0,0,.5-.3,1-.3,1,0,0,0,0,0,.1,0,0,.2.6.1,1.5-.1,1.1-.6,2-1.6,2.8,0,0,0,0,0,0,0,0-.3.5-.7.7,0,0-.1,0-.2,0-.1,0-.3,0-.5-.1,0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0-.3,0-1,0-1.3-.4-.1-.1-.2-.3-.1-.5,0,0,0-.1,0-.1,0,0-.9-.9-.6-2.2.1-.5.3-.8.6-.9,0,0,.2,0,.3,0,.2,0,.3,0,.3,0,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                    </g>
                  </g>
                  <g>
                    <path d="M521.1,287.1c0-.3,0-.8.1-1.4.3-.9,0-2,0-2,0,0,0-.2.1-.2,0,0,.2,0,.2.1,0,0,.4,1.2,0,2.2-.3.8,0,1.4,0,1.4,0,0,0,.2,0,.2,0,0-.2,0-.2,0,0,0,0,0,0-.2Z" fill="#fff"/>
                    <path d="M521.3,283.4s0,0,0,0c0,0-.1.1-.1.2,0,0,.4,1.1,0,2-.2.6-.2,1.2-.1,1.4,0,.1,0,.2,0,.2,0,0,0,.1.2.1s0,0,0,0c0,0,.1-.1,0-.2,0,0-.2-.6,0-1.4.3-1,0-2.2,0-2.2,0,0,0-.1-.2-.1h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M520.2,285.6s0,0,0-.1c.5-.9-.1-2.1-.1-2.1,0,0,0-.2,0-.2,0,0,.2,0,.2,0,0,0,.2.3.3.8.1.6,0,1.2-.2,1.6,0,0-.2.1-.2,0,0,0,0,0,0-.1Z" fill="#fff"/>
                    <path d="M520.3,283.1s0,0,0,0c0,0-.1.1,0,.2,0,0,.6,1.2.1,2.1,0,0,0,0,0,.1,0,0,0,0,0,.1,0,0,0,0,0,0,0,0,.1,0,.2,0,.3-.5.3-1,.2-1.6-.1-.5-.3-.8-.3-.8,0,0,0,0-.2,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M522.1,281.9c0,0,0-.1,0-.2.8-.7.9-2,.9-2,0,0,0-.2.2-.2,0,0,.2,0,.2.2,0,0-.1,1.5-1.1,2.2,0,0-.2,0-.2,0,0,0,0,0,0,0Z" fill="#fff"/>
                    <path d="M523.3,279.6c0,0-.2,0-.2.2,0,0-.1,1.3-.9,2,0,0,0,.1,0,.2,0,0,0,0,0,0,0,0,0,0,.1,0s0,0,.1,0c.9-.7,1.1-2.2,1.1-2.2,0,0,0-.2-.2-.2,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M513.1,279.5s0,0,0,0c0-.3,0-1,.7-1.2.5-.2.8,0,1,.2.1-.1.3-.2.4-.2.3,0,.6.1.6.1,0,0,0,.2,0,.2,0,0-.2,0-.2,0,0,0-.2-.1-.4,0-.1,0-.2.1-.4.3,0,0,0,0-.2,0,0,0-.1,0-.1-.1,0,0-.2-.4-.8-.2-.6.2-.5.8-.5.8,0,0,0,.2-.1.2,0,0-.2,0-.2-.1Z" fill="#fff"/>
                    <path d="M514.2,278.3c-.1,0-.2,0-.4,0-.7.2-.8.9-.7,1.2,0,0,0,0,0,0,0,0,0,.1.2.1s0,0,0,0c0,0,.2,0,.1-.2,0,0,0-.6.5-.8.1,0,.2,0,.3,0,.3,0,.5.2.5.3,0,0,0,0,.1.1,0,0,0,0,0,0,0,0,.1,0,.1,0,.1-.2.2-.3.4-.3,0,0,0,0,0,0,.2,0,.3,0,.3,0,0,0,0,0,.1,0,0,0,.1,0,.1,0,0,0,0-.2,0-.2,0,0-.2-.2-.5-.2s0,0-.1,0c-.2,0-.3.1-.4.2-.1-.1-.4-.3-.6-.3h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M512.2,282.7c0,0,0-.2,0-.2,0,0,0-.2.2-.2,0,0,.2,0,.2.2,0,.2,0,.3.1.4.2.2.7.1.9.1,0,0,.2,0,.2.1h0c0,0,0,.2-.1.2,0,0-.7.2-1.1-.2-.1-.1-.2-.2-.2-.4Z" fill="#fff"/>
                    <path d="M512.4,282.3c0,0-.2,0-.2.2,0,0,0,.2,0,.2,0,.2.1.3.2.4.2.2.5.2.8.2s.4,0,.4,0c0,0,.2-.1.1-.2h0c0,0,0-.1-.2-.1s0,0,0,0c0,0-.2,0-.3,0-.2,0-.4,0-.5-.1-.1,0-.1-.2-.1-.4,0,0,0-.2-.2-.2,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M511.5,281s0,0,0,0c0-.3.2-.5.5-.6.5-.2,1.1.2,1.1.2,0,0,.1.2,0,.2,0,0-.2.1-.2,0-.1,0-.5-.3-.8-.1-.1,0-.2.2-.3.4,0,0-.1.2-.2.1,0,0-.1,0-.1-.1Z" fill="#fff"/>
                    <path d="M512.3,280.3c-.1,0-.2,0-.3,0-.2.1-.4.3-.5.6,0,0,0,0,0,0,0,0,0,.1.1.1,0,0,0,0,0,0,0,0,.2,0,.2-.1,0-.2.1-.3.3-.4,0,0,.1,0,.2,0,.2,0,.5.1.6.2,0,0,0,0,0,0,0,0,.1,0,.1,0,0,0,0-.2,0-.2,0,0-.4-.2-.8-.2h0Z" fill="#9b978f"/>
                  </g>
                </g>
              </g>
              <g>
                <g>
                  <path d="M537.4,291.9c-.5,0-.8,0-.8,0-1-.3-1.6-1.4-1.8-1.8.3-1,.9-2.5,1.4-2.7.5-.2.8-.4,1-.5.2-.1.3-.2.4-.2,0,0,0,.2-.1.5,0,0-.2.2-.3.4-.2.3-.5.5-.4.8.1.2.4.3.6.3.9,0,1.5-.5,2.1-1,.2-.2.4-.3.6-.5.3-.2.4-.2.5-.2.1,0,.1,0,.2.1,0,.3-1.2,1.3-2.3,2l-.6.3h.6c.4.2.8.3,1.2.3,1.1,0,1.8-.4,2.2-.7.1,0,.3-.2.4-.2.1,0,.2.1.2.2,0,.2-.3.5-.6.6h-.1c0,0,0,.2,0,.2,0,.8-.8,1-.9,1h-.1s0,.2,0,.2c-.2.6-1.4,1-3.4,1h0Z" fill="#fff"/>
                  <path d="M540.4,287.3c-.4.4-1.1,1-1.9,1.4l-1.1.7,1.3.3c.4,0,.8.1,1.2.1.8,0,1.4-.2,1.8-.4v.3c0,.6-.6.8-.7.8h-.3c0,0,0,.4,0,.4-.1.4-1.1.8-3.2.8s-.6,0-.7,0c-.9-.3-1.4-1.2-1.6-1.5.4-1.2.9-2.3,1.2-2.4.3-.1.6-.2.8-.3,0,0,0,0,0,0-.3.3-.6.6-.4,1,.2.4.7.4.9.4h0c.9,0,1.6-.6,2.2-1.1.2-.2.4-.3.6-.5M537.7,286.5s0,0,0,0c-.4,0-.6.4-1.4.7-.9.3-1.6,2.9-1.6,2.9,0,0,.6,1.6,2,2,0,0,.3,0,.8,0,1.2,0,3.4-.1,3.6-1.2,0,0,1.1-.3,1.1-1.3,0,0,1.2-.7.5-1.2,0,0-.1,0-.2,0-.4,0-.9.9-2.5.9s-.7,0-1.1-.1c0,0,2.5-1.5,2.4-2.3,0,0,0-.3-.4-.3s-.4,0-.7.3c-.9.6-1.5,1.4-2.5,1.4,0,0,0,0,0,0-.9,0,0-.6.2-1,.2-.4.3-.8,0-.8h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M534.4,290.1s0,0,0,0c0-.3.8-2.7,1.7-3,.4-.1.7-.3.9-.4.2-.1.4-.2.6-.3.2,0,.3,0,.4.2.2.3,0,.7-.1.9,0,.1-.2.3-.4.4,0,0-.2.2-.3.3,0,0,.1,0,.3,0,.7,0,1.2-.4,1.8-.9.2-.2.4-.3.6-.5.4-.3.7-.4,1-.3.2,0,.3.3.4.4,0,0,0,0,0,0,0,.7-1.4,1.7-2.1,2.2,1.4.2,2.1-.3,2.6-.6.3-.2.6-.4.9-.2.3.2.3.4.3.5,0,.4-.5.8-.7.9,0,.8-.7,1.2-1.1,1.3-.2.6-1.1,1-2.5,1.1-1.1.1-2.1,0-2.1,0,0,0,0,0,0,0-1.5-.4-2.1-2-2.1-2.1,0,0,0,0,0,0ZM537.7,286.8c0,0,0-.1,0-.1,0,0,0,0,0,0-.1,0-.2,0-.4.2-.2.1-.5.3-1,.5-.5.2-1.2,1.7-1.5,2.7.1.3.7,1.5,1.9,1.8,1.1,0,4,0,4.2-1,0,0,0-.1.1-.1,0,0,.2,0,.5-.2.3-.2.5-.5.5-.9,0,0,0-.1,0-.1.2-.1.6-.4.6-.6,0,0,0-.1-.2-.2-.1,0-.2,0-.5.2-.5.3-1.4.9-3.3.5,0,0-.1,0-.1-.1,0,0,0-.1,0-.2,1-.6,2.4-1.6,2.3-2.1,0,0,0-.1-.1-.1,0,0-.3,0-.6.2-.2.2-.4.3-.6.5-.6.5-1.2,1-2,1-.3,0-.5,0-.6-.2,0-.2.1-.4.3-.7.1-.1.2-.3.3-.4,0-.2.1-.3.2-.4Z" fill="#fff"/>
                  <path d="M537.7,286.3s0,0,0,0c-.2,0-.4.1-.6.3-.2.1-.5.3-.9.4-.9.3-1.6,2.7-1.7,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.7,1.7,2.1,2.1,0,0,0,0,0,0,0,0,.3,0,.8,0s.8,0,1.3,0c1.4-.1,2.3-.5,2.5-1.1.4-.1,1-.5,1.1-1.3.2-.1.7-.5.7-.9,0-.1,0-.4-.3-.5,0,0-.2,0-.3,0-.2,0-.4.1-.6.3-.4.3-.9.6-1.9.6s-.4,0-.7,0c.8-.5,2.2-1.5,2.1-2.2,0,0,0,0,0,0,0-.1-.1-.3-.4-.4,0,0-.1,0-.2,0-.2,0-.5.1-.8.3-.2.2-.4.3-.6.5-.6.5-1.1.9-1.8.9,0,0,0,0,0,0-.1,0-.2,0-.2,0,0,0,.2-.2.3-.3.1-.1.3-.3.4-.4,0-.2.3-.6.1-.9,0,0-.1-.2-.3-.2h0ZM537.4,291.9c-.3,0-.6,0-.8,0-1.1-.3-1.8-1.6-1.9-1.8.3-1,.9-2.6,1.5-2.7.5-.2.8-.3,1-.5.2-.1.3-.2.4-.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.1,0,.1,0,.3-.2.4,0,.1-.2.2-.3.4-.2.3-.4.5-.3.7,0,.2.3.2.5.2s0,0,0,0c.8,0,1.4-.5,2-1,.2-.2.4-.3.6-.5.3-.2.5-.2.6-.2s0,0,0,0c0,0,.1.1.1.1,0,.5-1.4,1.5-2.3,2.1,0,0,0,.1,0,.2,0,0,0,.1.1.1.4,0,.8.1,1.2.1,1.1,0,1.7-.4,2.1-.7.2-.1.3-.2.4-.2s0,0,0,0c.2.1.2.2.2.2,0,.2-.4.5-.6.6,0,0,0,0,0,.1,0,.4-.2.6-.5.9-.2.2-.5.2-.5.2,0,0-.1,0-.1.1-.2.9-2.2,1-3.5,1h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <path d="M538.7,290.2s0,0,0,0c0,0,.1-.2.2-.1,0,0,1.4.3,3.1-.6,0,0,.2,0,.2,0,0,0,0,.2,0,.2-1.8.9-3.3.6-3.3.6,0,0-.1-.1-.1-.2Z" fill="#fff"/>
                <path d="M542.1,289.5s0,0,0,0c-1.1.5-2,.6-2.6.6s-.5,0-.6,0c0,0,0,0,0,0,0,0-.2,0-.2.1,0,0,0,0,0,0,0,0,0,.2.1.2,0,0,.3,0,.6,0,.6,0,1.6-.1,2.7-.6,0,0,.1-.1,0-.2,0,0,0,0-.2,0h0Z" fill="#9b978f"/>
              </g>
              <g>
                <path d="M538.7,291.2c0,0,0-.2.2-.2,1.2,0,2.1-.2,2.1-.2,0,0,.2,0,.2.1,0,0,0,.2-.1.2,0,0-.9.3-2.2.2,0,0-.2,0-.2-.2,0,0,0,0,0,0Z" fill="#fff"/>
                <path d="M541.1,290.8s0,0,0,0c0,0-.7.2-1.7.2s-.3,0-.4,0c0,0,0,0,0,0,0,0-.2,0-.2.2,0,0,0,0,0,0,0,0,0,.2.2.2.1,0,.3,0,.4,0,1.1,0,1.8-.3,1.8-.3,0,0,.1-.1.1-.2,0,0,0-.1-.2-.1h0Z" fill="#9b978f"/>
              </g>
              <g>
                <rect x="532.7" y="285.8" width=".3" height="4.5" transform="translate(105.9 717.8) rotate(-73.6)" fill="#fff"/>
                <polygon points="530.7 287.3 530.6 287.6 535 288.9 535.1 288.5 530.7 287.3 530.7 287.3" fill="#9b978f"/>
              </g>
              <g>
                <rect x="535.5" y="284.9" width="2.2" height=".5" transform="translate(-68.4 341.8) rotate(-33.3)" fill="#fff"/>
                <polygon points="537.4 284.3 535.6 285.5 535.8 285.9 537.7 284.7 537.4 284.3 537.4 284.3" fill="#9b978f"/>
              </g>
            </g>
            <g id="Room_Names">
              <text transform="translate(330 126.9)" fill="#425563" font-family="Fredoka, sans-serif" font-size="16"><tspan x="0" y="0">Covered Patio</tspan></text>
              <text transform="translate(318 189.1)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">Opt. 12’ Multi-slide Doors</tspan></text>
              <text transform="translate(531 83.9)" fill="#425563" font-family="Fredoka, sans-serif" font-size="16"><tspan x="0" y="0">Nook</tspan></text>
              <text transform="translate(762.3 223.7)" fill="#425563" font-family="Fredoka, sans-serif" font-size="16"><tspan x="0" y="0">Primary Bedroom 1</tspan></text>
              <text transform="translate(330.5 255.3)" fill="#425563" font-family="Fredoka, sans-serif" font-size="16"><tspan x="0" y="0">Great Room</tspan></text>
              <text transform="translate(272.3 353.2) rotate(-90)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">Fireplace</tspan></text>
              <text transform="translate(523.9 397.3)" fill="#425563" font-family="Fredoka, sans-serif" font-size="16"><tspan x="-25" y="5">Gourmet Kitchen</tspan></text>
              <text transform="translate(525.7 455.4)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">Ref</tspan></text>
              <text transform="translate(607.6 431.7)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">Walk-in</tspan><tspan x="3.2" y="10">Pantry</tspan></text>
              <text transform="translate(643.5 392.2)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">DO</tspan></text>
              <text transform="translate(560.6 303.8)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">DW</tspan></text>
              <text transform="translate(534.5 497.5)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">D</tspan></text>
              <text transform="translate(533.3 531.1)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">W</tspan></text>
              <text transform="translate(625.6 513.2) rotate(-90)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">Linen</tspan></text>
              <text transform="translate(562.8 545)" fill="#425563" font-family="Fredoka, sans-serif" font-size="16"><tspan x="0" y="0">Laun</tspan></text>
              <text transform="translate(650.5 543.5)" fill="#425563" font-family="Fredoka, sans-serif" font-size="16"><tspan x="0" y="0">Primary</tspan><tspan x="4.6" y="16">Bath 2</tspan></text>
              <text transform="translate(402.7 571.3)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">Dn</tspan></text>
              <text transform="translate(301.6 629.9)" fill="#425563" font-family="Fredoka, sans-serif" font-size="16"><tspan x="0" y="0">Dining Room</tspan></text>
              <text transform="translate(285.5 839.3)" fill="#425563" font-family="Fredoka, sans-serif" font-size="16"><tspan x="0" y="0">Bath 2</tspan></text>
              <text transform="translate(393.7 845.9) rotate(-90)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">Linen</tspan></text>
              <text transform="translate(257.4 910.9)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">Walk-in</tspan><tspan x="4.2" y="10">Closet</tspan></text>
              <text transform="translate(451.1 891.4)" fill="#425563" font-family="Fredoka, sans-serif" font-size="16"><tspan x="0" y="0">Entry</tspan></text>
              <text transform="translate(443.8 1016.9)" fill="#425563" font-family="Fredoka, sans-serif" font-size="16"><tspan x="-5" y="0">Covered</tspan><tspan x="5" y="16">Entry</tspan></text>
              <text transform="translate(299 1001.2)" fill="#425563" font-family="Fredoka, sans-serif" font-size="16"><tspan x="0" y="0">Bedroom 2</tspan></text>
              <text transform="translate(571.6 803.5)" fill="#425563" font-family="Fredoka, sans-serif" font-size="16"><tspan x="0" y="0">3-Car Garage</tspan></text>
              <text transform="translate(760.8 749.4)" fill="#425563" font-family="Fredoka, sans-serif" font-size="16"><tspan x="0" y="0">Living Room</tspan></text>
              <text transform="translate(707.6 743.6) rotate(-90)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">Opt. Wet Bar</tspan></text>
              <text transform="translate(516.4 727.1)" fill="#425563" font-family="Fredoka, sans-serif" font-size="16"><tspan x="0" y="0">Mud</tspan></text>
              <text transform="translate(605.8 705.8)" fill="#425563" font-family="Fredoka, sans-serif" font-size="16"><tspan x="0" y="0">Pwdr</tspan></text>
              <text transform="translate(812.1 545.8)" fill="#425563" font-family="Fredoka, sans-serif" font-size="16"><tspan x="0" y="0">Primary</tspan><tspan x="-9.2" y="16">Bedroom 2</tspan></text>
              <text transform="translate(694.4 463.7)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">Walk-in</tspan><tspan x="4.2" y="10">Closet</tspan></text>
              <text transform="translate(692 365.4)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">Walk-in</tspan><tspan x="4.2" y="10">Closet</tspan></text>
              <text transform="translate(791.7 317.2)" fill="#425563" font-family="Fredoka, sans-serif" font-size="16"><tspan x="0" y="0">Deluxe </tspan><tspan x="-3.5" y="16">Primary </tspan><tspan x="4.3" y="32">Bath 1</tspan></text>
            </g>
            {/* <g id="Room_Dimensions">
              <text transform="translate(524 96.9)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">13’8” x 9’6”</tspan></text>
              <text transform="translate(793.1 240)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">15’4” x 13’10”</tspan></text>
              <text transform="translate(343 269.9)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">19’3” x 19’6”</tspan></text>
              <text transform="translate(544.5 410.9)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">11’7” x 15’0”</tspan></text>
              <text transform="translate(314.8 643.3)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">13’10” x 12’6”</tspan></text>
              <text transform="translate(303 1014.6)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">13’10” x 13’10”</tspan></text>
              <text transform="translate(588.6 818.1)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">29’6” x 21’3”</tspan></text>
              <text transform="translate(774.6 762.7)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">17’8” x 12’8”</tspan></text>
              <text transform="translate(814.5 574.8)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">12’7” x 12’1”</tspan></text>
            </g> */}
          </g>

          {/* OPTION: Guest Entry */}
          <g id="guestEntry" data-option="guestEntry" style={{ display: active.guestEntry ? "block" : "none" }} fill="#CC0001">
            
            <g id="f1_optional_entry">

              {/* Background */}
              <rect
                x={840}
                y={705}
                width={140}
                height={80}
                fill="#dfdfdf"
              />
              <g id="Lines1" data-name="Lines">
                <path d="M866.3,763.2c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4M887.8,775.4c0,0,0,.1-.1.2v7.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-7.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M879.1,763.2c0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0M894.2,768.2c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M895.4,743.4c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M895.4,730.8c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M909.1,714.8c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4M915.7,714.8c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-2.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h2.4M888,760.4h-6.1c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h5.8v1.8h-4.6c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h4.6v8.2c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.2h5.9v.9c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-.4h.9c0,0,.2,0,.2,0,0,0,0-.1,0-.2v-7.3c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v7h-.6v-.2c0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-6.2v-2c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M877.7,760.4h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1M852.7,760.5c0,0-.1,0-.2-.1h-6c0,0-.2,0-.2.1,0,0,0,.1-.1.2v2.3c0,0,0,.2.1.2,0,0,.1,0,.2,0h7.1c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-6.9v-1c0-.3,0-.5.1-.7h5.7c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M856.5,760.5c0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1M848.9,748.6c0,0-.1,0-.2.1-.9,2.7-1.5,5.4-2,8.2,0,.1,0,.2.1.2,0,0,0,.1.1.1.1,0,.2,0,.2,0,0,0,.1-.1.1-.2.5-2.7,1.1-5.4,2-8.1,0,0,0-.1,0-.2,0,0,0-.1-.1-.2,0,0-.1,0-.2.1M855.1,737.5s0,0-.1.1c-1.7,2.2-3.2,4.6-4.4,7.1,0,0,0,.1-.1.2,0,0,.1,0,.2.1,0,0,.1,0,.2,0,0,0,0,0,.1-.1,1.3-2.5,2.7-4.8,4.4-7,0,0,0,0,0-.2,0,0,0,0-.1-.1,0,0,0,0-.2-.1M857.6,734.6c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,.3-.3.6-.6.8-.8,1.8-1.8,3.7-3.4,5.7-4.8,0,0,.1-.1.1-.2,0,0,0-.1,0-.2,0,0-.1,0-.2-.1,0,0-.1,0-.2.1-2,1.4-3.9,3-5.8,4.8-.3.3-.6.6-.8.8,0,0,0,.1-.1.2M875.8,723.1c0,0-.1,0-.2-.1-1.3.5-2.5.9-3.8,1.5-1.3.6-2.6,1.3-3.9,2,0,0-.1,0-.2.1,0,0,0,.2.1.2,0,0,0,.1.1.1,0,0,.2,0,.2,0,1.3-.7,2.6-1.3,3.9-1.9,1.3-.5,2.5-1,3.8-1.5,0,0,0,0,.1-.1,0,0,0-.1,0-.2,0,0,0,0-.1-.1M888.2,721.3v-2.9c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v2.9c-2.7,0-5.4.3-8,.7,0,0,0,0-.1.1,0,0,0,.2-.1.2,0,.1,0,.2.1.2,0,0,.2,0,.2,0,2.7-.4,5.3-.7,8.1-.7h6.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2v-.4h.6v5.7c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-5.9c0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-.9v-5.8h1.9c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-2.1c0,0-.2,0-.2.1,0,0,0,.1-.1.2v6.6h-5.9M907.1,708.4c0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M894.5,708.4c0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M890.5,708.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-2.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2v5.9c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-5.7h2.3Z" fill="#425563"/>
                <path d="M947.8,779.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4M960.6,779c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M968.4,774.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v4.5h-3.3c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h3.6c0,0,.2,0,.2,0,0,0,0-.1,0-.2v-4.8M968.4,761.6c0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2M968,749c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M968,736.4c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M968,723.8c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M922.9,779.4c0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-.6c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h.6c0,0,.2,0,.2,0M926.6,779.4c0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M923.6,705.6c0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M968,711.2c0,0,0,.1-.1.2v8.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M967.9,705.6v1.6c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-1.8c0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-6.6c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h6.3M945,705.2c0,0-.1,0-.2-.1h-8.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M949,705.1c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.4c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4Z" fill="#425563"/>
              </g>
              <text transform="translate(935.9 731.3)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">Opt.</tspan><tspan x="-4" y="10">Living</tspan><tspan x="-3.4" y="20">Room</tspan><tspan x="-2.3" y="30">Entry</tspan></text>
            </g>
          </g>
          {/* Hotspots */}
          <DropZoneHotspot/>
          <GarageHotspot />
      </g>
    </g>
  </svg>

  );
}

export function DariusD786basementSVG({
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
        <g id="f0_basement" >
          <g id="f0_structural">
            <path d="M236.6,853h-9.3v55.7h9.3v-55.7M190,873.9h-3.5v14h3.5v-14M186.6,872.7v1.2h3.5v14h-3.5v1.2h4.7v-16.3h-4.7M192.9,854.8c-1.9,1.1-3.4,2.6-4.5,4.5-1.1,2-1.7,4.1-1.8,6.4v7h4.7v16.3h-4.7v7c0,2.3.7,4.5,1.8,6.4,1.1,1.9,2.6,3.4,4.5,4.5,2,1.1,4.1,1.7,6.4,1.7h27.9v-55.7h-27.9c-2.3,0-4.5.7-6.4,1.8M227.3,848.1h-1.3v3.7h-26.6c-2.6,0-4.9.7-7,1.9-2.1,1.3-3.8,3-5,5.1-1.3,2-1.9,4.4-2,7v30.2c0,2.5.7,4.9,2,7,1.2,2.1,2.9,3.8,5,5,2,1.3,4.4,1.9,7,1.9h26.6v3.7h1.3v-4.9h-27.9c-2.3,0-4.5-.6-6.4-1.7-1.9-1.1-3.4-2.6-4.5-4.5-1.1-2-1.7-4.1-1.8-6.4v-30.2c0-2.3.7-4.5,1.8-6.4,1.1-1.9,2.6-3.4,4.5-4.5,2-1.1,4.1-1.7,6.4-1.8h27.9v-4.9M303.8,539h-.8v59.2h11.6v-59.2h-10.8M317.3,537.8l-.2-1.7h-13.3v1.7h13.5M317.3,538.7v-.8h-13.5v1.2h13.5v-.3M317.4,539h-2.9v59.2h9.7l-3.5-28.8,3.4-1.7-7.5-1.7,3.5-1.8-2.7-25.3M317.4,539v-.3c-.1,0-.1.3-.1.3h.1M317.3,536.1h-.2l.2,1.7v-1.7M316.9,535h6.3v-55.7h-11.6v55.7h5.3M317.3,535h-.4l.2,1.2h.2v-1.2M303.8,535h-4v4h4v-4M311.6,535h-7.8v1.2h13.3l-.2-1.2h-5.3M311.6,479.3h-1.7v-3.5h-65.9v122.4h58.9v-59.2h-3.2v-4h11.8v-55.7M346.5,479.3h-11.6v55.7h11.6v-55.7M334.9,479.3h-11.6v55.7h11.6v-55.7M334.9,475.8v1.7h11.6v-1.7h-11.6M323.2,475.8v1.7h11.6v-1.7h-11.6M323.2,477.5v-1.7h-11.6v1.7h11.6M358.1,535v-55.7h-11.6v55.7h11.6M381.3,479.3h-11.6v55.7h11.6v-55.7M369.7,479.3h-11.5v55.7h11.5v-55.7M369.7,477.5h-58v-1.7h-1.7v3.5h73.2v-3.5h-1.8v1.7h-11.6M358.1,477.5v-1.7h-11.6v1.7h11.6M369.7,475.8v1.7h11.6v-1.7h-11.6M369.7,477.5v-1.7h-11.5v1.7h11.5M445.4,523.9v2.3h41.8v-2.3h-41.8M445.4,526.2v-2.3h41.8c-.3-4.9-1.4-9.5-3.3-13.8-2.1-5.1-5.1-9.5-9-13.3-3.8-3.8-8.2-6.8-13.2-9-5.1-2.1-10.5-3.2-16.3-3.3h-4.1v-8.7h-58.2v3.5h-1.8v55.7h60v-8.8h4.1M236.6,305.2h-9.3v55.7h9.3v-55.7M190,326h-3.5v14h3.5v-14M191.2,324.8h-4.7v1.2h3.5v14h-3.5v1.2h4.7v-16.3M192.9,306.9c-1.9,1.1-3.4,2.7-4.5,4.7-1.1,1.9-1.7,4.1-1.8,6.4v6.9h4.7v16.3h-4.7v7c0,2.4.7,4.5,1.8,6.4,1.1,1.9,2.6,3.4,4.5,4.5,2,1.1,4.1,1.7,6.4,1.8h27.9v-55.7h-27.9c-2.3,0-4.5.6-6.4,1.7M227.3,300.2h-1.3v3.7h-26.6c-2.6.1-4.9.7-7,2-2.1,1.2-3.8,2.9-5,5-1.3,2.1-1.9,4.5-2,7.1v30.1c0,2.6.7,4.9,2,7,1.2,2.1,2.9,3.8,5,5.1,2,1.2,4.4,1.8,7,1.9h26.6v3.7h1.3v-4.9h-27.9c-2.3,0-4.5-.7-6.4-1.8-1.9-1.1-3.4-2.6-4.5-4.5-1.1-1.9-1.7-4.1-1.8-6.4v-30.1c0-2.4.7-4.5,1.8-6.4,1.1-2,2.6-3.5,4.5-4.7,2-1.1,4.1-1.7,6.4-1.7h27.9v-5M606.8,13.8h-14v3.5h14v-3.5M607.9,13.8h-1.2v3.5h-14v-3.5h-1.2v4.7h16.3v-4.7M627.7,63.7v-9.3h-55.7v9.3h55.7M614.9,13.8c2.4,0,4.5.6,6.4,1.7,1.9,1.1,3.4,2.7,4.5,4.7,1.1,1.9,1.7,4.1,1.8,6.4v27.8h4.9v-1.3h-3.7v-26.5c0-2.6-.7-5-1.9-7.1-1.3-2-3-3.7-5.1-5-2-1.3-4.4-1.9-7-1.9h-30.1c-2.6,0-5,.6-7.1,1.9-2.1,1.3-3.8,2.9-5,5-1.3,2.1-1.9,4.5-1.9,7.1v26.5h-3.7v1.3h4.9v-27.8c0-2.4.6-4.5,1.7-6.4,1.1-2,2.7-3.5,4.7-4.7,1.9-1.1,4.1-1.7,6.4-1.7h30.1M621.3,15.5c-1.9-1.1-4.1-1.7-6.4-1.7h-7v4.7h-16.3v-4.7h-6.9c-2.4,0-4.5.6-6.4,1.7-2,1.1-3.5,2.7-4.7,4.7-1.1,1.9-1.7,4.1-1.7,6.4v27.8h55.7v-27.8c0-2.4-.7-4.5-1.8-6.4-1.1-2-2.6-3.5-4.5-4.7M816.8,17.3v-3.5h-13.8v3.5h13.8M818,18.5v-4.7h-1.2v3.5h-13.8v-3.5h-1.2v4.7h16.2M837.7,63.7v-9.3h-55.7v9.3h55.7M837.7,26.6c0-2.4-.6-4.5-1.7-6.4-1.1-2-2.7-3.5-4.7-4.7-1.9-1.1-4.1-1.7-6.4-1.7h-7v4.7h-16.2v-4.7h-7c-2.4,0-4.5.6-6.4,1.7-2,1.1-3.5,2.7-4.5,4.7-1.1,1.9-1.7,4.1-1.8,6.4v27.8h55.7v-27.8M837,19.6c-1.3-2-2.9-3.7-5-5-2.1-1.3-4.5-1.9-7.1-1.9h-30.1c-2.6,0-5,.6-7.1,1.9-2,1.3-3.7,2.9-5,5-1.2,2.1-1.8,4.5-1.9,7.1v26.5h-3.7v1.3h4.9v-27.8c0-2.4.7-4.5,1.8-6.4,1.1-2,2.6-3.5,4.5-4.7,1.9-1.1,4.1-1.7,6.4-1.7h30.1c2.4,0,4.5.6,6.4,1.7,2,1.1,3.5,2.7,4.7,4.7,1.1,1.9,1.7,4.1,1.7,6.4v27.8h4.9v-1.3h-3.7v-26.5c0-2.6-.6-5-1.9-7.1M960.8,546.6h3.5v-1.2h-4.7v16.2h4.7v-1.2h-3.5v-13.8M964.3,546.6h-3.5v13.8h3.5v-13.8M664.3,787.9v-37.6h-152.6v297.7h146.2v27.8h256.6v-287.8h-250.1M923.7,525.7h-9.3v55.7h9.3v-55.7M962.5,532c-1.1-2-2.6-3.5-4.5-4.7-1.9-1.1-4.1-1.6-6.4-1.7h-27.8c0-.1,0,0,0,0v55.7h27.8c2.4,0,4.5-.6,6.4-1.7,2-1.1,3.5-2.7,4.5-4.7,1.1-1.9,1.7-4.1,1.8-6.4v-7h-4.7v-16.2h4.7v-7c0-2.4-.7-4.5-1.8-6.4M957.9,527.4c2,1.1,3.5,2.7,4.5,4.7,1.1,1.9,1.7,4.1,1.8,6.4v30.1c0,2.4-.7,4.5-1.8,6.4-1.1,2-2.6,3.5-4.5,4.7-1.9,1.1-4.1,1.6-6.4,1.7h-27.8v4.9h1.2v-3.7h26.7c2.5,0,4.9-.7,7-1.9,2-1.3,3.7-2.9,5-5,1.2-2.1,1.8-4.5,1.9-7.1v-30.1c0-2.6-.7-5-1.9-7.1-1.3-2-2.9-3.7-5-5-2.1-1.2-4.4-1.8-7-1.9h-26.6v-3.8h-1.3v4.9h27.8c2.4.2,4.5.7,6.4,1.8M914.4,360.9V63.7h-402.8v139.3H236.6v266.3h208.9v15.1c5.8,0,11.2,1.2,16.3,3.3,5,2.2,9.4,5.2,13.2,9,3.9,3.8,6.9,8.2,9,13.3,1.9,4.4,3,9,3.3,13.8v2.3h-41.8v12.8h-128l2.7,25.3-3.5,1.8,7.5,1.7-3.4,1.7,3.5,28.8h78.2v4.1h-166v543.1h186.8v-157.8h79v-246.6h171.1v37.7h240.9v-417.9M714.7,196.1c0,.5-.2.9-.5,1.2-.3.4-.7.5-1.2.5-.5,0-.9-.2-1.3-.5-.4-.3-.5-.7-.5-1.2s.2-.9.5-1.3c.4-.4.8-.5,1.3-.5s.9.2,1.2.5c.4.4.5.8.5,1.3M371.1,774.1c0,.5-.2.9-.5,1.2-.3.4-.7.5-1.2.5-.5,0-.9-.2-1.3-.5-.4-.3-.5-.7-.5-1.2,0-.5.2-.9.5-1.3.4-.4.8-.5,1.3-.5.5,0,.9.2,1.2.5.4.4.5.8.5,1.3M669.6,471.3c.4.3.5.7.5,1.3s-.2.9-.5,1.2c-.4.4-.8.5-1.3.5-.5,0-.9-.2-1.2-.5-.4-.3-.5-.7-.5-1.2,0-.6.2-1,.5-1.3.3-.4.7-.5,1.2-.5s.9.2,1.3.5M627.8,505.8v-24.4h33.4v24.4h-33.4M667.9,548.3c0,2.2-.6,4.2-1.6,5.9-1.1,1.7-2.5,3.1-4.2,4.1-1.7,1-3.6,1.5-5.8,1.6-2.2,0-4.2-.6-5.9-1.6-1.7-1.1-3.1-2.4-4.1-4.1-1-1.8-1.5-3.7-1.6-5.9,0-2.2.6-4.1,1.6-5.8,1.1-1.8,2.4-3.2,4.1-4.2,1.8-1,3.7-1.5,5.9-1.6,2.2,0,4.1.6,5.8,1.6,1.8,1.1,3.2,2.5,4.2,4.2,1,1.7,1.5,3.6,1.6,5.8M666.3,554.2c1-1.8,1.5-3.7,1.6-5.9,0-2.2-.6-4.1-1.6-5.8-1.1-1.8-2.5-3.2-4.2-4.2-1.7-1-3.6-1.5-5.8-1.6-2.2,0-4.2.6-5.9,1.6-1.7,1.1-3.1,2.5-4.1,4.2-1,1.7-1.5,3.6-1.6,5.8,0,2.2.6,4.2,1.6,5.9,1.1,1.7,2.4,3.1,4.1,4.1,1.8,1,3.7,1.5,5.9,1.6,2.2,0,4.1-.6,5.8-1.6,1.8-1.1,3.2-2.4,4.2-4.1M627.8,481.4v24.4h33.4v-24.4h-33.4M631.9,484.4c0,.6-.5,1-1.2,1.2-.7-.1-1.1-.5-1.2-1.2,0-.7.5-1.1,1.2-1.2.7,0,1.1.5,1.2,1.2M631.9,502.9c0,.7-.5,1.1-1.2,1.2-.7,0-1.1-.5-1.2-1.2,0-.7.5-1.1,1.2-1.2.7,0,1.1.5,1.2,1.2M637.5,482.2h22.8v22.6h-22.8v-22.6M648.9,493.5l11.4-11.3h-22.8l11.4,11.3M660.4,482.2l-11.4,11.3,11.4,11.3v-22.6M637.5,504.9l11.4-11.3-11.4-11.3v22.6M648.9,493.5l-11.4,11.3h22.8l-11.4-11.3M630.8,504c.7,0,1.1-.5,1.2-1.2,0-.7-.5-1.1-1.2-1.2-.7,0-1.1.5-1.2,1.2,0,.7.5,1.1,1.2,1.2M630.8,485.5c.7-.1,1.1-.5,1.2-1.2,0-.7-.5-1.1-1.2-1.2-.7,0-1.1.5-1.2,1.2,0,.6.5,1,1.2,1.2M923.7,305.2h-9.3v55.7h9.3v-55.7M964.3,324.8v-6.9c0-2.4-.7-4.5-1.8-6.4-1.1-2-2.6-3.5-4.5-4.7-1.9-1.1-4.1-1.7-6.4-1.7h-27.8c0-.1,0,0,0,0v55.7h27.8c2.4,0,4.5-.7,6.4-1.8,2-1.1,3.5-2.6,4.5-4.5,1.1-1.9,1.7-4.1,1.8-6.4v-7h-4.7v-16.3h4.7M964.3,326h-3.5v14h3.5v-14M964.3,326v-1.2h-4.7v16.3h4.7v-1.2h-3.5v-14h3.5M964.3,324.8v23.3c0,2.4-.7,4.5-1.8,6.4-1.1,1.9-2.6,3.4-4.5,4.5-1.9,1.1-4.1,1.7-6.4,1.8h-27.8v4.9h1.2v-3.7h26.7c2.5,0,4.9-.7,7-1.9,2-1.3,3.7-3,5-5.1,1.2-2,1.8-4.4,1.9-7v-30.1c0-2.6-.7-5-1.9-7.1-1.3-2.1-2.9-3.8-5-5-2.1-1.3-4.4-1.9-7-1.9h-26.6v-3.8h-1.3v4.9h27.8c2.4.1,4.5.7,6.4,1.8,2,1.1,3.5,2.7,4.5,4.7,1.1,1.9,1.7,4.1,1.8,6.4v6.9Z" fill="#fff"/>
            <path d="M369.7,535h-52.3v4h128.1v-12.8h-4.1v8.8h-71.7M227.3,360.9v492.1h9.3v-250.6h166v-4.1h-158.5v-122.4h197.3v8.7h4.1v-15.1h-208.9v-108.5h-9.3M572,63.7v-9.3h-69.7v139.3H227.3v111.4h9.3v-102.1h275.1V63.7h60.4M782,54.4h-154.3v9.3h154.3v-9.3M923.7,581.4h-9.3v197.4h-240.9v-37.7h-171.1v246.6h-79v157.8h-186.8v-236.8h-9.3v246.1h205.4v-157.8h69.7v60.4h146.2v27.8h275.2v-503.7M664.3,750.3v37.6h250.1v287.8h-256.6v-27.8h-146.2v-297.7h152.6M670.1,472.6c0-.6-.2-1-.5-1.3-.4-.4-.8-.5-1.3-.5s-.9.2-1.2.5c-.4.3-.5.7-.5,1.3,0,.5.2.9.5,1.2.3.4.7.5,1.2.5.5,0,.9-.2,1.3-.5.4-.3.5-.7.5-1.2M370.6,775.3c.4-.3.5-.7.5-1.2s-.2-.9-.5-1.3c-.3-.4-.7-.5-1.2-.5-.5,0-.9.2-1.3.5-.4.4-.5.8-.5,1.3,0,.5.2.9.5,1.2.4.4.8.5,1.3.5.5,0,.9-.2,1.2-.5M714.2,197.2c.4-.3.5-.7.5-1.2,0-.5-.2-.9-.5-1.3-.3-.4-.7-.5-1.2-.5s-.9.2-1.3.5c-.4.4-.5.8-.5,1.3s.2.9.5,1.2c.4.4.8.5,1.3.5.5,0,.9-.2,1.2-.5M923.7,360.9h-9.3v164.8h9.3v-164.8M923.7,305.1V54.4h-85.9v9.3h76.6v241.4h9.3Z" fill="#425563"/>
            <path d="M923.7,305.1h27.8c2.4.1,4.5.7,6.4,1.8,2,1.1,3.5,2.7,4.5,4.7,1.1,1.9,1.7,4.1,1.8,6.4v30.1c0,2.4-.7,4.5-1.8,6.4-1.1,1.9-2.6,3.4-4.5,4.5-1.9,1.1-4.1,1.7-6.4,1.8h-27.8v4.9h1.2v-3.7h26.7c2.5,0,4.9-.7,7-1.9,2-1.3,3.7-3,5-5.1,1.2-2,1.8-4.4,1.9-7v-30.1c0-2.6-.7-5-1.9-7.1-1.3-2.1-2.9-3.8-5-5-2.1-1.3-4.4-1.9-7-1.9h-26.6v-3.8h-1.3v4.9h0v55.8h-9.3v164.8h9.3v-159.9M964.3,326h-3.5v14h3.5M964.3,324.8h-4.7v16.3h4.7M842.6,54.4h-4.9v9.3h76.6v241.4h9.3M914.4,305.2v55.7M923.7,300.2V54.4h-81.1v-1.3h-3.7v-26.5c0-2.6-.6-5-1.9-7.1-1.3-2-2.9-3.7-5-5-2.1-1.3-4.5-1.9-7.1-1.9h-30.1c-2.6,0-5,.6-7.1,1.9-2,1.3-3.7,2.9-5,5-1.2,2.1-1.8,4.5-1.9,7.1v26.5h-3.7v1.3h4.9v-27.8c0-2.4.7-4.5,1.8-6.4,1.1-2,2.6-3.5,4.5-4.7,1.9-1.1,4.1-1.7,6.4-1.7h30.1c2.4,0,4.5.6,6.4,1.7,2,1.1,3.5,2.7,4.7,4.7,1.1,1.9,1.7,4.1,1.7,6.4v27.8h-55.7v9.3h55.7M923.7,525.6h27.8c2.4.2,4.5.7,6.4,1.8,2,1.1,3.5,2.7,4.5,4.7,1.1,1.9,1.7,4.1,1.8,6.4v30.1c0,2.4-.7,4.5-1.8,6.4-1.1,2-2.6,3.5-4.5,4.7-1.9,1.1-4.1,1.6-6.4,1.7h-27.8v4.9h1.2v-3.7h26.7c2.5,0,4.9-.7,7-1.9,2-1.3,3.7-2.9,5-5,1.2-2.1,1.8-4.5,1.9-7.1v-30.1c0-2.6-.7-5-1.9-7.1-1.3-2-2.9-3.7-5-5-2.1-1.2-4.4-1.8-7-1.9h-26.6v-3.8h-1.3M923.7,581.4h-9.3v197.4h-240.9v-37.7h-171.1v246.6h-79v157.8h-186.8v-236.8h-9.3v246.1h205.4v-157.8h69.7v60.4h146.2v27.8h275.2v-498.8M964.3,546.6h-3.5v13.8h3.5M964.3,545.5h-4.7v16.2h4.7M923.7,581.4v-55.7M914.4,525.7v55.7M801.8,13.8v4.7h16.2v-4.7M803,13.8v3.5h13.8v-3.5M714.7,196.1c0-.5-.2-.9-.5-1.3-.3-.4-.7-.5-1.2-.5s-.9.2-1.3.5c-.4.4-.5.8-.5,1.3s.2.9.5,1.2c.4.4.8.5,1.3.5.5,0,.9-.2,1.2-.5.4-.3.5-.7.5-1.2ZM627.7,54.4v-27.8c0-2.4-.7-4.5-1.8-6.4-1.1-2-2.6-3.5-4.5-4.7-1.9-1.1-4.1-1.7-6.4-1.7h-7v4.7h-16.3v-4.7h-6.9c-2.4,0-4.5.6-6.4,1.7-2,1.1-3.5,2.7-4.7,4.7-1.1,1.9-1.7,4.1-1.7,6.4v27.8h60.6v-1.3h-3.7v-26.5c0-2.6-.7-5-1.9-7.1-1.3-2-3-3.7-5.1-5-2-1.3-4.4-1.9-7-1.9h-30.1c-2.6,0-5,.6-7.1,1.9-2.1,1.3-3.8,2.9-5,5-1.3,2.1-1.9,4.5-1.9,7.1v26.5h-3.7v1.3h4.9v9.3h55.7v-9.3ZM591.6,13.8h16.3M592.8,13.8v3.5h14v-3.5M777.2,54.4h-144.6M627.7,63.7h154.3M227.3,300.2v5h9.3v-102.1h275.1V63.7h60.4M567.1,54.4h-64.8v139.3H227.3v106.4h-1.3v3.7h-26.6c-2.6.1-4.9.7-7,2-2.1,1.2-3.8,2.9-5,5-1.3,2.1-1.9,4.5-2,7.1v30.1c0,2.6.7,4.9,2,7,1.2,2.1,2.9,3.8,5,5.1,2,1.2,4.4,1.8,7,1.9h26.6v3.7h1.3v-4.9h-27.9c-2.3,0-4.5-.7-6.4-1.8-1.9-1.1-3.4-2.6-4.5-4.5-1.1-1.9-1.7-4.1-1.8-6.4v-30.1c0-2.4.7-4.5,1.8-6.4,1.1-2,2.6-3.5,4.5-4.7,2-1.1,4.1-1.7,6.4-1.7h27.9v55.7h9.3v-55.7M186.6,341.1h4.7v-16.3h-4.7M186.6,340h3.5v-14h-3.5M445.4,526.2v-2.3h41.8c-.3-4.9-1.4-9.5-3.3-13.8-2.1-5.1-5.1-9.5-9-13.3-3.8-3.8-8.2-6.8-13.2-9-5.1-2.1-10.5-3.2-16.3-3.3h-4.1v-8.7h-58.2v3.5h-1.8v55.7h60v-8.8h45.9v-2.3M445.4,484.5v-15.1h-208.9v-108.5M358.1,475.8v1.7h11.5v-1.7h-23.2v1.7h11.6M309.9,475.8v3.5h71.4M369.7,477.5h11.6v-1.7h-11.6M381.3,475.8h1.8M381.3,535h-64v4h128.1v-12.8M358.1,535v-55.7M369.7,535v-55.7M227.3,848.1v4.9h9.3v-250.6h166v-4.1h-158.5v-122.4h102.4M311.6,475.8v1.7h11.6v-1.7M323.2,477.5h11.6v-1.7M334.9,477.5h11.6M311.6,535h-7.8v1.2h13.3l-.2-1.2h-5.3v-55.7M302.9,598.2v-59.2h-3.2v-4h4M317.3,535h-.4M346.5,535v-55.7M334.9,535v-55.7M323.2,535v-55.7M317.3,536.1h-.2l.2,1.7h-13.5v1.2h13.5v-.3M317.3,539h.1l2.7,25.3-3.5,1.8,7.5,1.7-3.4,1.7,3.5,28.8M303.8,536.1v1.7M303.8,539h-.8M314.6,539v59.2M227.3,848.1h-1.3v3.7h-26.6c-2.6,0-4.9.7-7,1.9-2.1,1.3-3.8,3-5,5.1-1.3,2-1.9,4.4-2,7v30.2c0,2.5.7,4.9,2,7,1.2,2.1,2.9,3.8,5,5,2,1.3,4.4,1.9,7,1.9h26.6v3.7h1.3M371.1,774.1c0-.5-.2-.9-.5-1.3-.3-.4-.7-.5-1.2-.5-.5,0-.9.2-1.3.5-.4.4-.5.8-.5,1.3,0,.5.2.9.5,1.2.4.4.8.5,1.3.5.5,0,.9-.2,1.2-.5.4-.3.5-.7.5-1.2ZM670.1,472.6c0-.6-.2-1-.5-1.3-.4-.4-.8-.5-1.3-.5s-.9.2-1.2.5c-.4.3-.5.7-.5,1.3,0,.5.2.9.5,1.2.3.4.7.5,1.2.5.5,0,.9-.2,1.3-.5.4-.3.5-.7.5-1.2ZM648.9,493.5l-11.4,11.3h22.8l-11.4-11.3-11.4-11.3v22.6M631.9,484.4c0-.7-.5-1.1-1.2-1.2-.7,0-1.1.5-1.2,1.2,0,.6.5,1,1.2,1.2.7-.1,1.1-.5,1.2-1.2ZM631.9,502.9c0-.7-.5-1.1-1.2-1.2-.7,0-1.1.5-1.2,1.2,0,.7.5,1.1,1.2,1.2.7,0,1.1-.5,1.2-1.2ZM660.4,504.9v-22.6l-11.4,11.3M637.5,482.2h22.8M627.8,481.4h33.4v24.4h-33.4v-24.4ZM667.9,548.3c0-2.2-.6-4.1-1.6-5.8-1.1-1.8-2.5-3.2-4.2-4.2-1.7-1-3.6-1.5-5.8-1.6-2.2,0-4.2.6-5.9,1.6-1.7,1.1-3.1,2.5-4.1,4.2-1,1.7-1.5,3.6-1.6,5.8,0,2.2.6,4.2,1.6,5.9,1.1,1.7,2.4,3.1,4.1,4.1,1.8,1,3.7,1.5,5.9,1.6,2.2,0,4.1-.6,5.8-1.6,1.8-1.1,3.2-2.4,4.2-4.1,1-1.8,1.5-3.7,1.6-5.9ZM511.6,1048v-297.7h152.6v37.6h250.1v287.8h-256.6v-27.8h-146.2ZM227.3,365.7v482.3M227.3,853h-27.9c-2.3,0-4.5.7-6.4,1.8-1.9,1.1-3.4,2.6-4.5,4.5-1.1,2-1.7,4.1-1.8,6.4v7h4.7v16.3h-4.7v7c0,2.3.7,4.5,1.8,6.4,1.1,1.9,2.6,3.4,4.5,4.5,2,1.1,4.1,1.7,6.4,1.7h27.9v-55.7ZM186.6,889v-16.3M186.6,887.8h3.5v-14h-3.5M236.6,908.7v-55.7" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
            <path d="M680.9,729.5c0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M681.3,717c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5M680.9,704.1c0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M681.3,691.6c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5M681.1,678.6c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M681.1,666c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M602.2,740.1c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M610,733.2c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M614.9,740.1c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M618.9,740.1c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M622.7,733.2c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M644.5,739.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5M640.5,739.6c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M635.4,727.3c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v5.8h-8.1c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h9.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-.8v-5.8M647,731.9c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-6.6c-.6,0-1.1-.1-1.5-.5,0,0,0,0,0-.1-.4-.4-.6-.8-.6-1.4,0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,.7.3,1.3.7,1.8h.1c.5.5,1.1.8,1.8.7h6.6M649.2,733.2c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M669.7,740.1c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M665.6,740.1c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M661.8,733.2c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M659.7,731.9c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M674.3,733.6c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M517.4,740.1c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M521.2,733.2c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M517.9,726.6c0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0M525.7,729c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M538.8,740.1c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M533.9,733.6c0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0M530.5,726.2c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M546.4,733.6c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M555.7,739.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5M551.7,739.6c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M550.6,733.1c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5M576.8,740.1c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M580.9,740.1c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M572,733.2c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M588.7,733.1c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5M584.7,733.2c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M535.4,721.1s0,0-.1-.1c0,0-.1,0-.2-.1,0,0,0,0-.1.1,0,.1,0,.2-.1.2.4,1.6.6,3.2.7,4.9h-1.1c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h1.1v1.6c0,0,0,.2,0,.2h-5.7c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h6c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0-.1,0-.3,0-.5v-1.9c-.1-1.7-.4-3.5-.7-5.2M530.8,709.3s-.1,0-.2-.1c0,0-.1,0-.2.1,0,0,0,0-.1.1,0,.1,0,.2.1.2.9,1.6,1.7,3.2,2.4,4.9.4.8.7,1.7,1,2.5,0,0,.1,0,.2.1,0,0,.1,0,.2,0,0,0,0,0,.1-.1,0,0,0-.1,0-.2-.2-.8-.6-1.7-1-2.5-.8-1.7-1.6-3.4-2.5-5M524.9,702.7h0c1.1,1,2,2.1,3,3.3,0,0,0,.1.1.1.1,0,.2,0,.2,0,0,0,.1-.1.1-.2,0,0,0-.1,0-.2-.9-1.2-1.9-2.3-3-3.4h-.1c-.9-.8-1.8-1.7-2.9-2.4,0,0,0,0-.2-.1,0,0,0,0-.1.1,0,0,0,.2-.1.2,0,.1,0,.2.1.2,1,.8,2,1.6,2.9,2.4M511.1,693.8c0,0,0,.1.1.2,0,0,0,.1.1.1.6.2,1.3.5,1.9.7,1.9.9,3.6,1.8,5.3,2.9.1,0,.2,0,.2,0,.1,0,.2,0,.2-.1,0,0,0-.1,0-.2,0,0,0,0-.1-.1-1.7-1.1-3.5-2.1-5.4-3-.6-.2-1.3-.5-1.9-.7,0,0-.1,0-.2.1,0,0-.1,0-.2.1M513.3,680.3c0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2l5.9,5.9c0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2l-5.9-5.9M510.2,681.3c0,0,0,.2.1.2l5.9,5.9c0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2l-5.9-5.9c0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2M528.6,687.5c0,0,0,.1-.1.2-.9,1.6-1.9,3.2-3.2,4.7l-3.2-3.2c0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2l3.2,3.2-1.2,1.3-4.1-4.1c0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2l4.3,4.3c0,0,.1,0,.2,0,0,0,.2,0,.2,0l1.6-1.7s0,0,0-.1c1.4-1.6,2.5-3.2,3.4-5,0,0,0-.1,0-.2,0,0,0,0-.1-.1,0,0-.1,0-.2-.1M541,662.7c0,0,0,.1-.1.2v8.6c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.6c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M532.1,671.8c0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v2.9c0,3-.4,5.8-1.4,8.5,0,0,0,.1.1.2,0,0,0,.1.1.1,0,0,.1,0,.2,0,0,0,.1,0,.1-.1.9-2.6,1.4-5.4,1.4-8.5h8.2c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.2v-2.5c0,0,0-.2,0-.2M536.9,664.3c0,0,0,.1-.1.2v5.9h-1.9c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h2.2c0,0,.2,0,.2,0,0,0,0-.1,0-.2v-6.2c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M537.3,651.8c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5M537.3,647.6v-.6c0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-7.8c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h7.5v.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2M541.2,649.9c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M525.3,646.7c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M513.9,643.1c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M539.5,642.6c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5M535.5,642.7c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M582.9,671c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5M592.1,659.4c0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M576,656.2c0,.1,0,.2-.1.2.2.9.4,1.8.4,2.7,0,2.2-.7,4.1-1.9,5.7,0,0,0,.2-.1.2,0,.1,0,.2.1.2,0,0,.2,0,.2,0,.1,0,.2,0,.2-.1,1.3-1.7,2-3.7,2-6,0-1-.2-2-.4-2.9,0,0,0,0-.1-.1,0,0-.1,0-.2-.1,0,0,0,0-.1.1M575,651.5c0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2.6.5,1,1.1,1.4,1.8h0c1,1.7,1.5,3.5,1.5,5.5,0,2-.5,3.7-1.5,5.3h0c-.3.6-.6,1.1-1,1.5,0,0,0,.2-.1.2,0,0,0,.2.1.2,0,0,.2,0,.2,0,0,0,.2,0,.2-.1.4-.4.7-.9,1-1.5h0c1-1.6,1.5-3.5,1.6-5.6h0c0-2.2-.6-4.1-1.6-5.8h0c-.3-.6-.8-1.3-1.4-1.9M588.9,646.7c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M570,671.6c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M563.4,669.8c0,0,0,.1.1.1,1,.3,2.1.5,3.2.5,2.1,0,4-.5,5.7-1.5,0,0,.1-.1.1-.2,0,0,0,0,0-.1,0,0-.1-.1-.2-.2,0,0,0,0-.1.1-1.7.9-3.5,1.3-5.5,1.4-1,0-2.1-.2-3.1-.5,0,0,0,0-.1.1,0,0-.1,0-.2.1,0,0,0,.2.1.2M563.1,668.1c0,0-.1.1-.2.2,0,0,0,.1,0,.2,0,0,.1.1.2.1,1.1.5,2.3.7,3.6.6,1.8,0,3.4-.4,4.8-1.2,0,0,.1-.1.1-.2,0,0,0,0,0-.1,0,0-.1-.1-.2-.2,0,0,0,0-.1.1-1.3.7-2.8,1-4.5,1.1-1.2,0-2.4-.2-3.4-.6,0,0-.1,0-.2,0M563.4,666.7c0,0,0,.1-.1.2,0,0,0,.1-.1.2,0,0,.1,0,.2.1.7.4,1.5.6,2.3.6,1.4.2,2.7,0,3.9-.5.8-.3,1.5-.6,2.1-1.2,0,0,.1-.1.1-.2,0,0,0-.1,0-.2,0,0-.1,0-.2-.1,0,0-.1,0-.2.1-.6.5-1.3.8-2,1.1-1.1.5-2.4.7-3.7.5h0c-.7,0-1.4-.2-2.1-.5,0,0-.1,0-.2-.1M557.3,671.6c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M553.3,671.6c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M555.7,661.2c0,.1,0,.2-.1.2.3,1.3.8,2.4,1.4,3.4h0c.8,1.3,1.7,2.5,2.9,3.4,0,0,.2,0,.2,0,.1,0,.2,0,.2-.1,0,0,0,0,0-.2,0,0,0,0-.1-.1-1.1-.9-2-2-2.7-3.3h0c-.5-.9-1-2-1.3-3.2,0,0,0,0-.1-.1,0,0-.1,0-.2-.1,0,0,0,0-.1.1M557.2,657.9s0-.1,0-.2c0,0-.1,0-.2-.1,0,0-.1,0-.2.1,0,0,0,0-.1.1,0,.5,0,.9-.1,1.4.1,2.7,1,5,2.7,6.9,0,0,.1.1.2.1,0,0,0,0,.1,0,0,0,.1-.1.1-.2,0,0,0-.1,0-.2-1.7-1.8-2.5-3.9-2.6-6.6,0-.4,0-.8.1-1.3M550.8,646.7c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M560,650.1s-.1,0-.2.1c-1.1.9-2.1,1.9-2.9,3.2h0c-.7,1.2-1.1,2.4-1.4,3.7,0,.1,0,.2.1.2,0,0,0,.1.1.1.1,0,.2,0,.2,0,0,0,.1-.1.1-.2.2-1.2.7-2.4,1.3-3.5h0c.8-1.2,1.7-2.2,2.7-3.1,0,0,.1-.1.1-.2,0,0,0-.1,0-.2,0,0-.1,0-.2-.1M563.5,648.8s0,0,.1,0c1-.2,2-.4,3.1-.5,1.8,0,3.4.5,4.9,1.3,0,0,0,0,.1,0,.1,0,.2,0,.2-.1,0,0,0-.1,0-.2,0,0,0,0-.1-.1-1.5-.8-3.2-1.3-5.1-1.4-1.1.1-2.1.3-3.2.5,0,0,0,.1-.1.2,0,0,0,0-.1.1,0,.1.1.2.2.2M563.5,646.9c0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2M566,650.8h0c-.3.3-.4.6-.4.8h0c0,.3.1.5.2.6h0c-.2-.4-.6-.6-1.1-.4-.2.1-.4.3-.5.4h-1.2c-.4,0-.6.2-.6.5,0,.4.2.6.6.5h1.3c0,0,0,.1,0,.1-2.2.2-4.4.6-6.6,1.3,0,0,0,.1-.1.2,0,0,0,0-.1.1,0,.1.1.2.2.2,0,0,0,0,.1,0,2.7-.8,5.4-1.2,8-1.4v.7c-1.7,0-3.4.2-5.2.5,0,0,0,0-.1.1-.9,1.2-1.4,2.5-1.7,3.8-.1,1.4,0,2.7.5,3.9.2.4.3.7.4,1.1,0,0,.1.1.2.1,0,0,.1,0,.2,0,0,0,.1,0,.1-.1,0,0,0-.1,0-.2-.1-.4-.2-.7-.4-1.1-.4-1.1-.6-2.3-.5-3.6.2-1.2.7-2.4,1.5-3.5,1.7-.3,3.4-.5,5-.5v2.6c0,0,0,.2.1.2h.1c-.3.3-.4.6-.5,1.1,0,0,0,.1,0,.1.1.7.5,1,1.1,1.1h.1c.7,0,1.1-.4,1.2-1.1h0c0-.5-.2-.9-.5-1.1l.2-.2s0,0,0-.1v-2.6c1.7,0,3.4.2,5.1.5,1,1.4,1.4,2.8,1.4,4.4,0,.8,0,1.6-.3,2.3,0,0,0,.2.1.2,0,0,0,.1.1.1,0,0,.2,0,.2,0,0,0,.1-.1.1-.2.2-.8.4-1.6.3-2.4,0-1.6-.4-3.1-1.4-4.4l2.4-.4h0c0,0,.2,0,.2,0,0,0,.1,0,.1-.1,0,0,0-.1,0-.2-.5-1.1-1.1-2.1-2-3h0c-1.2-1.2-2.5-2.1-4-2.6,0,0-.1,0-.2.1,0,0-.1,0-.2.1,0,0,0,.1.1.2,0,0,0,.1.1.1,1.4.5,2.7,1.3,3.8,2.4h0c.7.8,1.2,1.5,1.7,2.3-2-.6-4-1-6-1.2,0,0,0,0,.1-.1h1.3c.4,0,.6-.1.5-.5,0-.3-.1-.5-.5-.5h-1.2c-.2-.4-.6-.6-1.2-.4h0c-.2.2-.3.3-.4.4.1-.2.1-.3.1-.5v-.2c0-.2,0-.4-.3-.6h-.1c-.1-.3-.4-.4-.6-.4-.3,0-.5.1-.8.3M567.1,652.1s0,0-.1.1h0c0,0,0,.2.1.2v1.1c0,0,0,.2-.1.2,0,0,0,0,.1.1v1c0,0,0,.1-.1.2,0,0,0,0,.1.1v2.6c-.1,0-.2.1-.2.1h-.3l-.2-.2v-3.8s0,0,0-.1c0,0,0-.1,0-.2v-1.3c0,0,0-.2-.1-.2v-.4c0,0,.3-.2.4-.2.2,0,.4.1.5.3v.4M567.8,653.4c0,0-.1,0-.2,0h0c0-.1.1-.1.1-.1,0,0,0,0,.1.1M567.5,652.5h0c0-.1.1-.1.1-.1h-.1M565.8,653.4h0M567.5,654.6v-.7c2.3.1,4.6.5,6.9,1.1l-1.7.2h-.1c-1.6-.3-3.3-.5-5.1-.5M567.3,659.2c0,.3-.3.5-.6.5-.3,0-.5-.2-.6-.5.1-.4.3-.6.6-.7.4.1.6.4.6.7M565.8,649.5s0,0,0-.2c0,0,0,0-.1-.1,0,0,0,0-.2-.1-2.4.3-4.4,1.3-6,3-.6.6-1.1,1.2-1.5,1.9,0,.1,0,.2-.1.2,0,.1,0,.2.1.2.1,0,.2,0,.2,0,.1,0,.2,0,.2-.1.4-.6.9-1.2,1.5-1.8,1.6-1.6,3.5-2.5,5.7-2.9.1,0,.2,0,.2-.1M567.5,646.6c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5M552,643.1c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M577.3,642.9c0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2M573.4,643.1c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M673.5,722.3c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v7.1c0,.6-.1,1-.5,1.4,0,0,0,.1-.1.2h0c0,0,0,0-.1,0,0,0-.1,0-.2.1-.3.2-.6.4-1.1.3h-7c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h7c.6,0,1-.1,1.4-.4,0,0,.1-.1.1-.2,0,0,0,0,0-.1,0,0,.1,0,.2,0,0,0,.2,0,.2,0,.5-.5.7-1.1.6-1.8v-7.1M674.8,720.9c0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2M668.4,722.4c0,0-.1-.1-.2-.2,0,0,0,0-.1.1,0,0-.1,0-.2.1,0,0,0,.2.1.2l4,7.6c0,0,0,.1.1.1,0,0,.2,0,.2,0,0,0,.1-.1.1-.2,0,0,0,0,0-.1l-4-7.6M662.3,711s0,0-.1.1c0,0-.1,0-.2.1,0,0,0,.2.1.2l4,7.4c0,0,0,.1.1.1,0,0,.2,0,.2,0,0,0,.1-.1.1-.2,0,0,0,0,0-.1l-4-7.4c0,0-.1-.1-.2-.2M673.3,709.3c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M674.8,708.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5M643.1,722.2c0,0,0,.1-.1.2l-4,7.6c0,0,0,0-.1.1,0,.1.1.2.2.2,0,0,0,0,.1,0,.1,0,.2,0,.2-.1l4-7.6c0,0,0-.1,0-.2,0,0,0,0-.1-.1,0,0-.1,0-.2-.1M637.9,716.5c0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M637.9,703.8c0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M649.3,711.1c0,0-.1,0-.2-.1,0,0,0,.1-.1.2l-4,7.4c0,0,0,0-.1.1,0,.1.1.2.2.2,0,0,0,0,.1,0,.1,0,.2,0,.2-.1l4-7.4c0,0,0-.1,0-.2,0,0,0,0-.1-.1M637.9,691.1c0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M637.9,678.4c0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M644.9,678.1c0,0,0,.2.1.2l3.9,7.4c0,0,0,.1.1.1,0,0,.2,0,.2,0,0,0,.1-.1.1-.2,0,0,0,0,0-.1l-3.9-7.4c0,0-.1-.1-.2-.2,0,0,0,0-.1.1,0,0-.1,0-.2.1M674.4,695.6c0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M673.5,696.9c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5M660.2,689.1c0,0,0,.1-.1.2l-3.6,7h-.1v.3c-.3-.1-.5-.2-.7-.2-.2,0-.5.1-.7.2v-.3h-.1l-3.6-7c0,0,0-.1-.1-.2,0,0-.1,0-.2.1,0,0-.1,0-.2.1,0,0,0,.1.1.2l3.6,7h-.1v.3c0,0,0,.1-.1.2h0c-.4.3-.6.8-.6,1.4,0,.6.2,1.1.6,1.5.1,0,.2.2.3.2v.3c-.1,0-3.7,7-3.7,7,0,0,0,.1-.1.2,0,0,.1,0,.2.1,0,0,.1,0,.2,0,0,0,0,0,.1-.1l3.6-7v-.3c.4.1.6.1.8.1.2,0,.5,0,.7-.1v.3c.1,0,3.7,7,3.7,7,0,0,0,.1.1.1,0,0,.1,0,.2,0,0,0,.1,0,.1-.1,0,0,0-.1,0-.2l-3.6-7v-.3c0,0,0-.2.1-.3h0c.4-.3.6-.8.5-1.4,0-.6-.2-1-.6-1.4,0,0,0-.1-.1-.2v-.3h.1l3.6-7c0,0,0-.1,0-.2,0,0,0,0-.1-.1,0,0-.1,0-.2-.1M654.6,697.5c0-.1.2-.2.2-.3h.1s0,0,.1-.1c.2,0,.4,0,.6-.1.2,0,.4,0,.6.1,0,0,0,.1.1.1h.1c0,0,0,.1.1.2,0,0,0,0,0,.1.3.2.5.5.4,1,0,.4-.1.8-.4,1.1h0c0,.2-.1.3-.2.3h0s0,0-.1,0c-.2.1-.4.1-.6.1-.2,0-.4,0-.6-.1,0,0,0,0-.1,0-.1,0-.2-.2-.3-.3-.3-.3-.5-.6-.5-1.1,0-.4.2-.7.4-1h.1M666.2,677.9c0,0,0,.1-.1.2l-4,7.4c0,0,0,0-.1.1,0,.1.1.2.2.2,0,0,0,0,.1,0,.1,0,.2,0,.2-.1l4-7.4c0,0,0-.1,0-.2,0,0,0,0-.1-.1,0,0-.1,0-.2-.1M674.8,683.1c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5M673.3,683.9c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M634.9,723c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5M634.9,701.9v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2M634.9,689.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2M618.1,681.4c0,0-.1,0-.2.1-.5.5-1.1.9-1.7,1.3h0c-1.2.4-2.4.4-3.7-.1h0c-.4-.2-.8-.5-1.3-.7-.3-.2-.6-.5-.8-.7,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2.3.3.6.5,1,.7.5.3.9.6,1.3.8h.1c1.4.6,2.8.6,4.1,0h0c.7-.4,1.3-.8,1.8-1.3,0,0,.1-.1.1-.2,0,0,0-.1,0-.2,0,0-.1,0-.2-.1M620,677.9s0-.1,0-.2c0,0,0,0-.1-.1,0,0-.1,0-.2-.1,0,0,0,.1-.1.2-.9,1.6-2.2,2.8-3.9,3.8h0c-.8.2-1.7.2-2.6-.1-1.1-.6-2.1-1.5-3-2.4-.4-.4-.7-.8-1-1.3,0,0-.1-.1-.2-.2,0,0,0,0-.1.1,0,0-.1,0-.2.1,0,0,0,.2.1.2.3.5.6,1,1,1.4.9,1,2,1.9,3.2,2.6,0,0,.1,0,.1,0,1,.3,1.9.3,2.9,0h.1c1.8-1,3.2-2.4,4.1-4M635.2,676.2c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M623,669.6c0,0,0,.2-.1.2.1.5.1,1,.1,1.5,0,2.4-.7,4.6-1.9,6.7h0c-.2.3-.4.6-.6.8,0,0,0,.2-.1.2,0,.1,0,.2.1.2,0,0,.2,0,.2,0,.1,0,.2,0,.2-.1.2-.2.4-.6.6-1h0c1.2-2.1,1.9-4.4,2-6.9,0-.5,0-1-.1-1.6,0,0,0,0-.1-.1,0,0,0,0-.2-.1,0,0,0,0-.1.1M621,666c0,0,0-.1-.1-.2,0,0-.1,0-.2,0,0,0-.1.1-.2.2,0,0,0,.1,0,.2.8,1.7,1.2,3.3,1.1,5.1,0,1,0,2-.3,2.9,0,.1,0,.2.1.2,0,0,0,.1.1.1.1,0,.2,0,.2,0,0,0,.1-.1.1-.2.2-.9.4-1.9.3-3,.1-1.8-.2-3.6-1.1-5.3M632.7,656.9c0,0,0,.1-.1.2v6.8c0,0,0,.2.1.2,0,0,.1,0,.2,0h1.7c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-1.5v-6.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1M626.3,646.7c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M633.1,646.9c0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-2.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h2.2v5.7c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-5.9M605.4,669.9c0,0-.1,0-.2.1,0,0,0,.1-.1.2,0,2.3.3,4.5,1.2,6.6h.1c.3.6.6,1.1,1,1.7,0,0,0,.1.1.1.1,0,.2,0,.2,0,0,0,.1-.1.1-.2,0,0,0-.1,0-.2-.4-.5-.7-1-1-1.6h0c-.8-2-1.2-4.1-1.2-6.3,0,0,0-.1,0-.2,0,0-.1,0-.2-.1M608.3,665.7s0-.1,0-.2c0,0,0,0-.1-.1,0,0-.1,0-.2-.1,0,0,0,.1-.1.2-.3.5-.6,1-.8,1.6h0c-.6,2.1-.7,4.2-.4,6.2h0c.1.3.2.5.2.7,0,0,.1,0,.2.1,0,0,.1,0,.2,0,0,0,0,0,.1-.1,0,0,0-.1,0-.2,0-.2-.1-.4-.2-.6-.3-2-.2-4,.4-6h0c.2-.5.5-1,.7-1.5M610.7,662.6c.1-.1.3-.3.4-.4,0,0,.2-.2.4-.2h5.7c.1,0,.2.1.3.2.2.2.4.4.6.6,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2-.2-.2-.4-.4-.6-.6-.2-.2-.4-.3-.7-.3h-5.7c-.4,0-.7.1-.8.3-.1.1-.3.3-.4.4,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0M600.9,646.7c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.2h8.2c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M604,656.9v-.6c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v1.1c.1.5.4.8.6,1.1h0c.3.3.8.5,1.4.4h4l-.5,1.5h0c-.2,1-.6,1.8-1.2,2.5-.8,1.1-1.4,2.2-1.9,3.4,0,0,0,.1,0,.2,0,0,.1.1.2.1,0,0,.1,0,.2,0,0,0,.1,0,.1-.1.4-1.1,1-2.2,1.8-3.3.6-.8,1-1.7,1.3-2.7h0c0,.1.6-1.6.6-1.6h8.4l.6,1.7c.3,1,.7,1.9,1.4,2.6.3.4.6.9.8,1.4h0c.3.4.5.9.6,1.4,0,0,.1.1.2.1,0,0,.1,0,.2,0,0,0,.1,0,.1-.1,0,0,0-.1,0-.2-.2-.5-.4-1-.7-1.5h0c-.3-.4-.6-.9-.8-1.4-.6-.7-1-1.6-1.3-2.5h0l-.5-1.5h4c.6,0,1,0,1.4-.4h-.1c.3-.2.6-.5.7-1,0,0,0,0,0-.1,0,0,0,0,0-.1h0c0-.1.4-7.1.4-7.1h0c0-.5-.2-.9-.4-1.3,0,0-.1,0-.2-.1,0,0-.1,0-.2.1,0,0,0,0-.1.1,0,.1,0,.2.1.2.2.3.3.6.3,1l-.4,6.8h-8.1c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8c0,.2-.2.4-.4.5h0c-.2.2-.5.3-1,.3h-4.3c0,0-.1,0-.2,0h-.1s0,0-.1,0h-8.4c0,0-.1,0-.2,0h-4.3c-.4,0-.7,0-1-.3h-.1c-.1-.1-.2-.3-.3-.5h8.1c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.2M608.8,648.3c0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-3.7c-.5.2-.9.5-1.3.8-.3.4-.5.9-.5,1.5h0l.2,1.9c0,.1,0,.2.1.2,0,0,.2,0,.2,0,.1,0,.2,0,.2-.1,0,0,0,0,0-.2l-.2-1.8h0c0-.5.2-.8.4-1.2.2-.3.6-.5,1-.6h3.6c0,0,.2,0,.2,0M612.6,648.3c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M613.4,647.1c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M602.7,643.1c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M598.7,643.1c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M615.4,643.1c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M674.8,670.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5M673.3,671.2c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M672.3,666.6c0,0-.1,0-.2-.1,0,0,0,.1-.1.2l-4,7.6c0,0,0,0-.1.1,0,.1.1.2.2.2,0,0,0,0,.1,0,.1,0,.2,0,.2-.1l4-7.6c0,0,0-.1,0-.2,0,0,0,0-.1-.1M675,659.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h5.7v2.1c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-2.3c0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-6M674.8,663.8c0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-6.2c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h5.9v2.1c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-2.3M662.2,659.5c0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1M663.7,665c0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h6.9c.6.1,1.1.4,1.5.7,0,0,0,0,.1,0,.4.4.6.8.5,1.3,0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2,0-.6-.2-1.2-.6-1.7,0,0-.1,0-.2-.1-.4-.4-1-.6-1.7-.7h-7c0,0-.2,0-.2.1M649.7,659.4c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5M655.8,663.5c0,0-.1,0-.2,0h-7.7c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h7.4l-.4.8h-8.2c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8l-1.6,4c0,0,0,0,0,.1,0,0,0,.2.1.2,0,0,.2,0,.2,0h3.8c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-3.4l1.5-3.8h0c0-.2,0-.2,0-.3l.3-.6.7,2c0,0,.1,0,.2.1,0,0,.1,0,.2,0,0,0,0,0,.1-.1,0,0,0-.1,0-.2l-.2-.8h3.1c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-3.3l-.3-.8h8c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.4M639,666.7c0,0,0,.2.1.2l4,7.6c0,0,0,.1.1.1,0,0,.2,0,.2,0,0,0,.1-.1.1-.2,0,0,0,0,0-.1l-4-7.6c0,0-.1-.1-.2-.2,0,0,0,0-.1.1,0,0-.1,0-.2.1M643.9,664.1c0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.2h8.2c0,0,.2,0,.2,0M642.6,665.2c0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-1.9c-.7,0-1.3.3-1.7.7,0,0-.2,0-.2.1-.5.5-.7,1.1-.7,1.8v6.9c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-6.9c0-.5.2-1,.5-1.4,0,0,.2,0,.2,0,0,0,0,0,0-.1.3-.4.8-.6,1.4-.6h1.9c0,0,.2,0,.2,0,0,0,0-.1,0-.2M645.5,659.9c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M637.2,647c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5M636.8,643.1c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M504.7,740.1c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M495,737.2c0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v2.4c0,0,0,.2.1.2,0,0,.1,0,.2,0h5.9c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-5.7v-2.1c0,0,0-.2,0-.2M499.9,733.1c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5M504.3,729c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M505.2,726.2c0,0-.1,0-.2-.1h-6.1c0,0-.2,0-.2.1,0,0,0,.1-.1.2v2h-3.7c0,0-.2,0-.2.1,0,0,0,.1-.1.2v4.4c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-4.2h3.5v1.3c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-1.3h1.3c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-1.3v-1.8h5.9c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M495,678.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5M498.8,682.9c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.1h-3.5v-.2c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v.5c0,0,0,.2.1.2,0,0,.1,0,.2,0h4c3,.1,5.7.5,8.4,1.1.1,0,.2,0,.2,0,0,0,.1-.1.1-.2,0,0,0-.1,0-.2,0,0-.1,0-.2-.1-2.6-.6-5.3-.9-8.2-1.1v-8.1c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M503.2,675c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-4.3c0,0-.2,0-.2.1,0,0,0,.1-.1.2v4.1c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-3.9h4.1M499.4,670.5c0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h4.1v3.8c0,0,0,.2.1.2l3.6,3.6c0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2l-3.4-3.4,1.3-1.2,4.2,4.2c0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2l-4.4-4.4c0,0-.1,0-.2-.1,0,0-.2,0-.2.1l-1.3,1.2v-3.4c0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-4.4c0,0-.2,0-.2.1M495,665.7c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5M495,653.1c0,0,0-.2,0-.2,0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5M498.8,658.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2,0,0-.1,0-.2-.1M499.9,647.1c0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-.8c0,0-.2,0-.2.1,0,0,0,.1-.1.2v7.6c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-7.4h.6c0,0,.2,0,.2,0M503.7,647.1c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M501.3,643.1c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M494.8,642.6c0,0-.2,0-.2.1,0,0,0,.1-.1.2v5.9c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-5.7h2.2c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-2.4Z" fill="#425563"/>
            <path d="M923.7,305.2h-9.3v55.7h9.3v-55.7M914.3,69.3v-5.6h-402.7v139.3H236.6v266.3h177v6.4h-30.4v3.5h-1.8v55.7h32.2v11.1c4.9,0,9.7,1,14.2,2.9,3.8,1.6,7.3,3.7,10.4,6.4h.1c0-.1,1.2,1.2,1.2,1.2l.4.3-26.2,26.3v4.8h29.1v6.3h-3.6v12.7h-4v37.2h4v138.1h-4v2.3h-37.1c.3,4.3,1.2,8.4,2.9,12.2,1.9,4.5,4.6,8.5,8,11.8,3.3,3.4,7.2,6,11.7,7.9,4.5,1.9,9.3,2.9,14.5,3h4v59.7h14v4h37.2v-4h4.7v-150.3h4v-2.3h37.1c-.3-4.3-1.2-8.4-2.9-12.2-1.9-4.4-4.5-8.4-7.9-11.7-3.4-3.4-7.3-6.1-11.8-8-4.5-1.9-9.3-2.9-14.5-2.9h-4v-53.4h4v-37.2h-4v-6.9h-3.6v-6.3h48.8v-112.2h-8.1v-6.4h227.2v6.3h2.3v34.8c4-.3,7.8-1.2,11.3-2.6,4.2-1.8,7.8-4.3,11-7.5,2.5-2.5,4.5-5.2,6.2-8.2.4-.9.8-1.9,1.3-2.9,1.8-4.1,2.7-8.5,2.7-13.3,0,4.8,1,9.2,2.7,13.3.4,1,.9,1.9,1.4,2.9,1.6,3,3.6,5.8,6,8.2,3.2,3.2,6.9,5.7,11.1,7.5,3.5,1.5,7.3,2.4,11.2,2.6v-34.8h2.3v-6.3h85.6V69.3M709.3,210.7v-19.2h6.8v19.2h-6.8M914.3,69.3v-5.6c.1,0,0,0,0,0v5.6M837.7,63.7v-9.3h-55.7v9.3h55.7M914.4,778.7h0c0-.1-233.3-.1-233.3-.1h0c0,.1,233.3.1,233.3.1M914.4,525.7v-50h-85.6v34.8h-2.3c-3.9-.3-7.7-1.2-11.2-2.6-4.2-1.8-7.9-4.3-11.1-7.5-2.5-2.5-4.5-5.2-6-8.2-.5-.9-1-1.9-1.4-2.9-1.8-4.1-2.7-8.5-2.7-13.3,0,4.8-1,9.2-2.7,13.3-.4,1-.8,1.9-1.3,2.9-1.7,3-3.8,5.8-6.2,8.2-3.2,3.2-6.8,5.7-11,7.5-3.5,1.5-7.3,2.4-11.3,2.6h-2.3v-34.8h-78v303h233.3v-253M923.7,525.7h-9.3v55.7h9.3v-55.7M957.9,527.4c2,1.1,3.5,2.7,4.5,4.7,1.1,1.9,1.7,4.1,1.8,6.4v30.1c0,2.4-.7,4.5-1.8,6.4-1.1,2-2.6,3.5-4.5,4.7-1.9,1.1-4.1,1.6-6.4,1.7h-27.8v4.9h1.2v-3.7h26.7c2.5,0,4.9-.7,7-1.9,2-1.3,3.7-2.9,5-5,1.2-2.1,1.8-4.5,1.9-7.1v-30.1c0-2.6-.7-5-1.9-7.1-1.3-2-2.9-3.7-5-5-2.1-1.2-4.4-1.8-7-1.9h-26.6v-3.8h-1.3v4.9h27.8c2.4.2,4.5.7,6.4,1.8M236.6,853h-9.3v55.7h9.3v-55.7M186.6,873.9h3.5v14h-3.5v1.2h4.7v-16.3h-4.7v1.2M190,873.9h-3.5v14h3.5v-14M192.9,854.8c-1.9,1.1-3.4,2.6-4.5,4.5-1.1,2-1.7,4.1-1.8,6.4v7h4.7v16.3h-4.7v7c0,2.3.7,4.5,1.8,6.4,1.1,1.9,2.6,3.4,4.5,4.5,2,1.1,4.1,1.7,6.4,1.7h27.9v-55.7h-27.9c-2.3,0-4.5.7-6.4,1.8M488.8,920.4c-.4,0-.7,0-1-.1h0c0,.1,1,.1,1,.1M453,883.2c0,5.1,1.1,10,3,14.5,1.9,4.5,4.5,8.5,7.9,11.8s7.3,6,11.8,7.9c3.8,1.6,7.9,2.6,12.2,2.9v-37.1h-34.9M490.2,883.2h-2.3v37.1c.2,0,.6,0,1,.1h1.4v-37.2M502.3,883.2h-12.2v37.2h-2.3c-4.3-.4-8.4-1.3-12.2-3-4.5-1.9-8.5-4.5-11.8-7.9s-6-7.3-7.9-11.8c-1.9-4.5-2.9-9.3-3-14.5h-13.8v55.7h-202.5v206.6h186.8v-157.8h79v-104.4M535.9,726.5c0,.2,0,.6.1,1v-1h-.1M592.3,671.5v-24.4h-51.1v24.4h51.1M576.3,653.7c.9,1.6,1.4,3.5,1.5,5.5,0,2-.6,3.9-1.5,5.6-1,1.7-2.3,3-4,3.9-1.6,1-3.5,1.5-5.5,1.6-2.1,0-4-.6-5.6-1.6-1.7-.9-3-2.2-4-3.9-.9-1.7-1.4-3.6-1.5-5.6,0-2,.6-3.9,1.5-5.5,1-1.7,2.3-3,4-4,1.6-.9,3.5-1.4,5.6-1.5,2,0,3.9.6,5.5,1.5,1.7,1,3,2.3,4,4M577.8,659.2c0-2-.6-3.9-1.5-5.5-1-1.7-2.3-3-4-4-1.6-.9-3.5-1.4-5.5-1.5-2.1,0-4,.6-5.6,1.5-1.7,1-3,2.3-4,4-.9,1.6-1.4,3.5-1.5,5.5,0,2,.6,3.9,1.5,5.6,1,1.7,2.3,3,4,3.9,1.6,1,3.5,1.5,5.6,1.6,2,0,3.9-.6,5.5-1.6,1.7-.9,3-2.2,4-3.9.9-1.7,1.4-3.6,1.5-5.6M576.6,659.2c0,2.8-1.1,5.1-3,7-1.8,1.9-4.1,2.9-6.9,3-2.8,0-5.1-1.1-7-3-1.9-1.8-2.9-4.2-3-7,0-1.5.4-2.9,1-4.1.5-1,1.2-1.9,2-2.9,1.8-1.8,4.2-2.8,7-2.9,2.7,0,5,1,6.9,2.9.8.9,1.5,1.9,2,2.9.6,1.3.9,2.6,1,4.1M566.2,655.1v-1.3c-2.9,0-5.7.5-8.4,1.3l3,.5c1.8-.4,3.6-.5,5.4-.5M566,651.7c0,0,0,.1-.1.2,0,.1.1.3.3.5l-.2-.7M567.6,651.9h0c0-.1-.1,0-.1,0l-.2.5c.2-.1.3-.3.3-.5M566.8,651.3c.3,0,.5.2.7.6h.1c0-.3,0-.5-.2-.6-.2-.2-.4-.3-.6-.3s-.4,0-.6.2c-.2.1-.3.4-.3.6h0c0,0,.1,0,.1-.1.2-.3.5-.4.8-.4M567.5,651.9c-.2-.4-.5-.6-.7-.6s-.6.1-.8.4l.2.7v5.5l.3.2h.5l.3-.2v-5.5l.2-.5M575.7,655.1c-.5-1-1.2-1.9-2-2.9-1.8-1.8-4.1-2.8-6.9-2.9-2.8,0-5.1,1-7,2.9-.8.9-1.5,1.9-2,2.9,2.7-.8,5.5-1.2,8.4-1.3v-1.4c-.2-.2-.3-.4-.3-.5h0c0-.4.1-.6.3-.7.2-.1.4-.2.6-.2s.4.1.6.3c.1.1.2.3.2.5h0c0,.3-.1.5-.3.6v1.4c2.9,0,5.7.5,8.4,1.3M564.3,653.3h-1.3c-.1,0-.2-.1-.3-.3,0-.1.2-.2.3-.3h1.4c0-.1.2-.2.3-.3.4-.1.7,0,1,.4.1.4,0,.7-.3,1-.4.1-.8,0-1.1-.4M569.1,652.6h1.4c.2,0,.3.2.3.3,0,.2-.1.3-.3.3h-1.4c0,.2-.2.4-.3.4-.4.1-.8,0-1.1-.4-.1-.4,0-.7.4-1,.4-.1.7,0,1,.3M569.1,652.6c-.2-.4-.5-.5-1-.3-.4.2-.6.5-.4,1,.3.4.6.6,1.1.4.1,0,.2-.2.3-.4h-.6c-.1,0-.2-.1-.3-.3,0-.1.2-.2.3-.3h.6M570.5,652.6h-2c-.1,0-.2.2-.3.3,0,.2.2.3.3.3h2c.2,0,.3-.1.3-.3s-.1-.2-.3-.3M565.3,653c0,.2-.1.3-.3.3h-.7c.3.4.6.6,1.1.4.4-.2.5-.5.3-1-.2-.4-.5-.6-1-.4-.1,0-.2.2-.3.3h.6c.2,0,.3.2.3.3M565,653.3c.2,0,.3-.1.3-.3s-.1-.2-.3-.3h-2c-.1,0-.2.2-.3.3,0,.2.2.3.3.3h2M572.7,664.9c1.1-1.4,1.6-3,1.6-4.7s-.5-3.2-1.5-4.7h-.1c-1.8-.4-3.6-.5-5.4-.5v2.9l-.3.2h-.5l-.3-.2v-2.9c-1.8,0-3.6.2-5.4.5-.8,1.1-1.3,2.4-1.5,3.7-.1,1.3,0,2.6.4,3.8.5,1.2,1.3,2.3,2.4,3.2,1.1.8,2.3,1.3,3.6,1.5,1.3.1,2.6,0,3.8-.4,1.2-.5,2.3-1.3,3.2-2.4M567.6,659.2c0,.6-.4.9-.8,1-.6,0-.9-.4-1-1,0-.5.4-.8,1-.8.5,0,.8.4.8.8M566.8,660.1c.5,0,.8-.4.8-1,0-.5-.4-.8-.8-.8-.6,0-.9.4-1,.8,0,.6.4.9,1,1M575.7,655.1l-2.9.5c1,1.4,1.5,3,1.5,4.7s-.5,3.2-1.6,4.7c-.9,1.1-2,1.9-3.2,2.4-1.2.4-2.5.6-3.8.4-1.3-.1-2.5-.6-3.6-1.5-1.1-.9-1.9-2-2.4-3.2-.4-1.2-.6-2.5-.4-3.8.1-1.3.6-2.6,1.5-3.7l-3-.5c-.6,1.3-.9,2.6-1,4.1,0,2.8,1.1,5.1,3,7,1.8,1.9,4.2,2.9,7,3,2.7,0,5-1.1,6.9-3,1.9-1.8,2.9-4.2,3-7,0-1.5-.4-2.9-1-4.1M572.8,655.6l2.9-.5c-2.7-.8-5.5-1.2-8.4-1.3v1.3c1.8,0,3.6.2,5.4.5h.1M655.7,700.2c-.4,0-.6,0-.8-.1l-16.1,31c.4.5,1,.7,1.7.7h30.4c.6,0,1.2-.2,1.6-.7l-16.1-31c-.2,0-.5.1-.7.1M655.7,696.8c-.4,0-.6,0-.8.2l-.4.2c-.4.4-.5.8-.5,1.3,0,.5.2.9.5,1.3.1.1.3.2.4.3.2,0,.5.1.8.1s.5,0,.7-.1c.1,0,.3-.2.4-.3.4-.4.5-.8.5-1.3s-.2-.9-.5-1.3c-.1,0-.2-.1-.3-.2-.3-.1-.6-.2-.8-.2M638.8,666.1c-.4.4-.6,1-.6,1.6v61.8c0,.6.2,1.2.6,1.6l16.1-31c-.1,0-.3-.2-.4-.3-.4-.4-.5-.8-.5-1.3,0-.5.2-.9.5-1.3l.4-.2-16.1-31M655.7,663.8l-.6,1.5-1.7,4.3h4.7l-1.8-4.3-.5-1.5M672.5,666.1c-.4-.4-1-.7-1.6-.7h-14.7l1.8,4.3h-4.7l1.7-4.3h-14.6c-.7,0-1.3.2-1.7.7l16.1,31c.2-.1.5-.2.8-.2s.6,0,.8.2l16-31M672.5,666.1c.5.4.7,1,.7,1.6v61.8c0,.6-.2,1.2-.7,1.6-.4.5-1,.7-1.6.7h-30.4c-.7,0-1.3-.2-1.7-.7-.4-.4-.6-1-.6-1.6v-61.8c0-.6.2-1.2.6-1.6.4-.5,1-.7,1.7-.7h14.6l.6-1.5h-20.5v69.7h39.5v-69.7h-19l.5,1.5h14.7c.6,0,1.2.3,1.6.7M673.3,667.6c0-.6-.2-1.2-.7-1.6l-16,31c0,0,.2.1.3.2.4.4.5.8.5,1.3s-.2.9-.5,1.3c-.1.1-.3.2-.4.3l16.1,31c.5-.4.7-1,.7-1.6v-61.8M535.9,636c0,.2,0,.6.1,1v-1h-.1M761.4,510.5v-34.8h-2.3v34.8h2.3M826.4,475.7v34.8h2.3v-34.8h-2.3M397.9,784.6c0-.3,0-.5-.1-.7v.7h.1M435,784.6v-2.3h-37.2v1.6c0,.2,0,.5.1.7h37.1M525.4,692.9c-.6.6-1.1,1.1-1.6,1.7l1.7-1.7h-.1M498.8,726.5v2.3h37.2v-1.4c0-.4,0-.7-.1-1h-37.1M504.1,674.9h-5.3v16.8c5.1,0,10,1,14.5,2.9,4.5,2,8.5,4.7,11.8,8,3.4,3.4,6,7.3,7.9,11.7,1.6,3.8,2.6,7.9,2.9,12.2h.1v2.3h-37.2v4.7h136.4v-69.7h-2.3v-16.8h-40.6v24.4h-51.1v3.5h-9.3c0,3.7-.7,7.2-2.1,10.7-1.1,2.6-2.6,5-4.4,7.3h.1l-1.7,1.7-19.7-19.7M624.8,648.9c.3.4.4.8.4,1.3l-.3,7.1c-.1.4-.4.7-.6,1-.3.3-.7.4-1.2.4h-4.4l.6,1.8c.3,1.1.7,2,1.4,2.7.3.4.5.8.7,1.3,1.3,2.3,1.9,4.6,1.8,7,0,2.4-.7,4.6-1.9,6.7-1.2,2-2.9,3.7-5.1,5-1.3.5-2.6.5-3.9.1-.4-.3-.8-.6-1.2-1-2.1-1.5-3.6-3.3-4.5-5.5-1-2.2-1.4-4.5-1.2-6.9.1-2.4,1-4.6,2.4-6.7.6-.8,1.1-1.7,1.3-2.7l.7-1.8h-4.4c-.5,0-.9-.1-1.2-.4-.3-.2-.5-.5-.5-1l-.4-7.1c0-.5.1-.9.4-1.3s.6-.6,1.1-.7h18.9c.4.1.8.4,1.1.7M618.7,658.7h4.4c.5,0,.9-.1,1.2-.4.3-.2.5-.5.6-1h-21.1c0,.4.2.7.5,1,.3.3.7.4,1.2.4h13.2M621.5,664.5c-.2-.4-.5-.8-.7-1.3-.6-.8-1.1-1.7-1.4-2.7l-.6-1.8h-8.8l-.7,1.8c-.2,1.1-.6,2-1.3,2.7-1.5,2-2.3,4.3-2.4,6.7-.2,2.4.2,4.7,1.2,6.9.9,2.2,2.4,4,4.5,5.5.4.4.7.7,1.2,1,1.3.4,2.6.4,3.9-.1,2.2-1.3,3.9-2.9,5.1-5,1.2-2,1.8-4.3,1.9-6.7,0-2.4-.5-4.7-1.8-7M617.8,662c1.1.9,1.9,2,2.5,3.2,1.1,2,1.7,4,1.6,6.1,0,2.1-.6,4.1-1.7,5.9-1.1,1.8-2.6,3.3-4.5,4.4-.8.4-1.7.4-2.6,0-1.2-.7-2.3-1.6-3.3-2.5-1.5-1.8-2.4-3.7-2.7-5.7-.4-2.1-.3-4.2.4-6.1.6-2,1.8-3.8,3.5-5.3.2-.1.4-.2.6-.2h5.7c.1,0,.3,0,.5.2M620.3,665.2c-.6-1.2-1.5-2.3-2.5-3.2-.2-.1-.4-.2-.5-.2h-5.7c-.2,0-.4,0-.6.2-1.7,1.5-2.9,3.2-3.5,5.3-.7,2-.8,4-.4,6.1.4,2,1.3,3.9,2.7,5.7,1,1,2.1,1.8,3.3,2.5.9.4,1.8.4,2.6,0,2-1.1,3.5-2.6,4.5-4.4,1.1-1.8,1.7-3.8,1.7-5.9,0-2.1-.5-4.2-1.6-6.1M625.3,650.2c0-.5-.1-.9-.4-1.3s-.6-.6-1.1-.7h-18.9c-.4.1-.8.4-1.1.7s-.4.8-.4,1.3l.4,7.1h21.1l.3-7.1M505.7,673.3l-1.6,1.7,19.7,19.7c.5-.6,1-1.1,1.6-1.7l-19.7-19.7M504.1,674.9l1.6-1.7,19.7,19.7c1.8-2.3,3.3-4.7,4.4-7.3,1.4-3.5,2.1-7,2.1-10.7v-4.1h5.3v-5.2h-38.4v5.2h5.3v4.1M498.8,642.9h0c0,.1,175.9.1,175.9.1h0c0-.1-175.9-.1-175.9-.1M498.8,647v18.6h38.4v-18.6h-38.4M227.3,848.1h-1.3v3.7h-26.6c-2.6,0-4.9.7-7,1.9-2.1,1.3-3.8,3-5,5.1-1.3,2-1.9,4.4-2,7v30.2c0,2.5.7,4.9,2,7,1.2,2.1,2.9,3.8,5,5,2,1.3,4.4,1.9,7,1.9h26.6v3.7h1.3v-4.9h-27.9c-2.3,0-4.5-.6-6.4-1.7-1.9-1.1-3.4-2.6-4.5-4.5-1.1-2-1.7-4.1-1.8-6.4v-30.2c0-2.3.7-4.5,1.8-6.4,1.1-1.9,2.6-3.4,4.5-4.5,2-1.1,4.1-1.7,6.4-1.8h27.9v-4.9M265.1,743.2c-4.3-2.5-9-4-14.2-4.3v32.3h-2.3v6.3h-12.1v157.3h198.4v-115.4c-5.1,0-10-1.1-14.5-3-4.5-1.9-8.4-4.5-11.7-7.9-3.5-3.4-6.1-7.3-8-11.8-1.6-3.8-2.6-7.9-2.9-12.2h-.1v-2.3h37.2v-4.7h-153.8v-6.3c0-6.1-1.6-11.5-4.4-16.4-2.9-4.9-6.8-8.8-11.6-11.6M244.1,694.6v14.3h83.5v62.4h14v-76.6h-97.5M249.7,738.7c.4,0,.8,0,1.3.2v-.2h-1.3M248.6,738.7h2.3v.2c5.1.4,9.9,1.8,14.2,4.3,4.9,2.8,8.7,6.7,11.6,11.6,2.9,4.9,4.4,10.3,4.4,16.4h46.4v-62.4h-83.5v62.4h4.5v-32.6M249.7,738.7h-1.1v32.6h2.3v-32.3c-.5-.1-.9-.2-1.3-.2M303.8,539h-.8v59.2h11.6v-59.2h-10.8M317.3,537.8l-.2-1.7h-13.3v1.7h13.5M317.3,538.7v-.8h-13.5v1.2h13.5v-.3M317.4,539h-2.9v59.2h9.7l-3.5-28.8,3.4-1.7-7.5-1.7,3.5-1.8-2.7-25.3M317.3,539h.1v-.3c-.1,0-.1.3-.1.3M317.3,536.1h-.2l.2,1.7v-1.7M316.9,535h6.3v-55.7h-11.6v55.7h5.3M317.3,535h-.4l.2,1.2h.2v-1.2M311.6,535h-7.8v1.2h13.3l-.2-1.2h-5.3M303.8,535h-4v4h4v-4M311.6,479.3h-1.7v-3.5h-65.9v122.4h58.9v-59.2h-3.2v-4h11.8v-55.7M346.5,479.3h-11.6v55.7h11.6v-55.7M323.2,477.5v-1.7h-11.6v1.7h11.6M334.9,475.8v1.7h11.6v-1.7h-11.6M334.9,479.3h-11.6v55.7h11.6v-55.7M323.2,477.5h11.6v-1.7h-11.6v1.7M498.8,636v2.3h37.2v-1.4c0-.4,0-.7-.1-1h-37.1M525.2,612.2c-3.4-3.5-7.3-6.1-11.8-8-4.5-1.9-9.3-2.9-14.5-3v34.9h37.1c-.3-4.3-1.2-8.4-2.9-12.2-1.9-4.5-4.5-8.4-7.9-11.7M513.3,604.1c4.5,1.9,8.5,4.6,11.8,8,3.4,3.3,6,7.2,7.9,11.7,1.6,3.8,2.6,7.9,2.9,12.2h.1v2.3h-37.2v4.5h175.9v-167.1h-130.7v118.5h-45.2v6.9c5.1,0,10,1.1,14.5,3M627.8,505.8v-24.4h33.4v24.4h-33.4M667.9,548.3c0,2.2-.6,4.2-1.6,5.9-1.1,1.7-2.5,3.1-4.2,4.1-1.7,1-3.6,1.5-5.8,1.6-2.2,0-4.2-.6-5.9-1.6-1.7-1.1-3.1-2.4-4.1-4.1-1-1.8-1.5-3.7-1.6-5.9,0-2.2.6-4.1,1.6-5.8,1.1-1.8,2.4-3.2,4.1-4.2,1.8-1,3.7-1.5,5.9-1.6,2.2,0,4.1.6,5.8,1.6,1.8,1.1,3.2,2.5,4.2,4.2,1,1.7,1.5,3.6,1.6,5.8M666.3,554.2c1-1.8,1.5-3.7,1.6-5.9,0-2.2-.6-4.1-1.6-5.8-1.1-1.8-2.5-3.2-4.2-4.2-1.7-1-3.6-1.5-5.8-1.6-2.2,0-4.2.6-5.9,1.6-1.7,1.1-3.1,2.5-4.1,4.2-1,1.7-1.5,3.6-1.6,5.8,0,2.2.6,4.2,1.6,5.9,1.1,1.7,2.4,3.1,4.1,4.1,1.8,1,3.7,1.5,5.9,1.6,2.2,0,4.1-.6,5.8-1.6,1.8-1.1,3.2-2.4,4.2-4.1M627.8,481.4v24.4h33.4v-24.4h-33.4M630.8,485.5c-.7-.1-1.1-.5-1.2-1.2,0-.7.5-1.1,1.2-1.2.7,0,1.1.5,1.2,1.2,0,.6-.5,1-1.2,1.2M630.8,501.7c.7,0,1.1.5,1.2,1.2,0,.7-.5,1.1-1.2,1.2-.7,0-1.1-.5-1.2-1.2,0-.7.5-1.1,1.2-1.2M637.5,482.2h22.8v22.6h-22.8v-22.6M648.9,493.5l11.4-11.3h-22.8l11.4,11.3M660.4,482.2l-11.4,11.3,11.4,11.3v-22.6M637.5,504.9l11.4-11.3-11.4-11.3v22.6M648.9,493.5l-11.4,11.3h22.8l-11.4-11.3M631.9,502.9c0-.7-.5-1.1-1.2-1.2-.7,0-1.1.5-1.2,1.2,0,.7.5,1.1,1.2,1.2.7,0,1.1-.5,1.2-1.2M629.6,484.4c0,.6.5,1,1.2,1.2.7-.1,1.1-.5,1.2-1.2,0-.7-.5-1.1-1.2-1.2-.7,0-1.1.5-1.2,1.2M400.7,621.5c1.9,4.5,4.6,8.5,8,11.8,3.3,3.4,7.2,6,11.7,7.9,4.5,1.9,9.3,2.9,14.5,3v-34.9h-37.1c.3,4.3,1.2,8.4,2.9,12.2M397.9,609.3c0-.3,0-.5-.1-.7v.7h.1M397.8,607v1.6c0,.2,0,.5.1.7h37.1v-2.3h-37.2M397.8,608.6v-1.6h37.2v-4.7h-198.4v88.3h109v80.7h89.4v-127.1c-5.1,0-10-1.1-14.5-3-4.5-1.9-8.4-4.5-11.7-7.9-3.5-3.4-6.1-7.3-8-11.8-1.6-3.8-2.6-7.9-2.9-12.2h-.1v-.7M409.4,546.1v-7.1h-92l2.7,25.3-3.5,1.8,7.5,1.7-3.4,1.7,3.5,28.8h85.2v-52.1M439.3,556.6c-.4-.4-.8-.8-1.3-1.2l-26.2,26.2,1.7,1.6,26.2-26.3-.4-.3M438,555.4c.4.4.8.7,1.3,1.2l-1.2-1.3h-.1M438,555.4c-3.1-2.7-6.6-4.9-10.4-6.4-4.5-1.9-9.2-2.9-14.2-2.9h-4.1v37.1h4.1l-1.7-1.6,26.2-26.2M358.1,535v-55.7h-11.6v55.7h11.6M381.3,479.3h-11.6v55.7h11.6v-55.7M358.1,477.5v-1.7h-11.6v1.7h11.6M369.7,475.8v1.7h11.6v-1.7h-11.6M369.7,475.8h-11.5v1.7h11.5v-1.7M369.7,479.3h-11.5v55.7h11.5v-55.7M358.1,479.3h24.9v-3.5h-1.8v1.7h-69.7v-1.7h-1.7v3.5h48.2M236.6,305.2h-9.3v55.7h9.3v-55.7M186.6,326h3.5v14h-3.5v1.2h4.7v-16.3h-4.7v1.2M190,326h-3.5v14h3.5v-14M192.9,306.9c-1.9,1.1-3.4,2.7-4.5,4.7-1.1,1.9-1.7,4.1-1.8,6.4v6.9h4.7v16.3h-4.7v7c0,2.4.7,4.5,1.8,6.4,1.1,1.9,2.6,3.4,4.5,4.5,2,1.1,4.1,1.7,6.4,1.8h27.9v-55.7h-27.9c-2.3,0-4.5.6-6.4,1.7M227.3,300.2h-1.3v3.7h-26.6c-2.6.1-4.9.7-7,2-2.1,1.2-3.8,2.9-5,5-1.3,2.1-1.9,4.5-2,7.1v30.1c0,2.6.7,4.9,2,7,1.2,2.1,2.9,3.8,5,5.1,2,1.2,4.4,1.8,7,1.9h26.6v3.7h1.3v-4.9h-27.9c-2.3,0-4.5-.7-6.4-1.8-1.9-1.1-3.4-2.6-4.5-4.5-1.1-1.9-1.7-4.1-1.8-6.4v-30.1c0-2.4.7-4.5,1.8-6.4,1.1-2,2.6-3.5,4.5-4.7,2-1.1,4.1-1.7,6.4-1.7h27.9v-5M606.8,13.8v3.5h-14v-3.5h-1.2v4.7h16.3v-4.7h-1.2M606.8,17.3v-3.5h-14v3.5h14M627.7,63.7v-9.3h-55.7v9.3h55.7M614.9,13.8c2.4,0,4.5.6,6.4,1.7,1.9,1.1,3.4,2.7,4.5,4.7,1.1,1.9,1.7,4.1,1.8,6.4v27.8h4.9v-1.3h-3.7v-26.5c0-2.6-.7-5-1.9-7.1-1.3-2-3-3.7-5.1-5-2-1.3-4.4-1.9-7-1.9h-30.1c-2.6,0-5,.6-7.1,1.9-2.1,1.3-3.8,2.9-5,5-1.3,2.1-1.9,4.5-1.9,7.1v26.5h-3.7v1.3h4.9v-27.8c0-2.4.6-4.5,1.7-6.4,1.1-2,2.7-3.5,4.7-4.7,1.9-1.1,4.1-1.7,6.4-1.7h30.1M621.3,15.5c-1.9-1.1-4.1-1.7-6.4-1.7h-7v4.7h-16.3v-4.7h-6.9c-2.4,0-4.5.6-6.4,1.7-2,1.1-3.5,2.7-4.7,4.7-1.1,1.9-1.7,4.1-1.7,6.4v27.8h55.7v-27.8c0-2.4-.7-4.5-1.8-6.4-1.1-2-2.6-3.5-4.5-4.7M816.8,17.3v-3.5h-13.8v3.5h13.8M818,13.8h-1.2v3.5h-13.8v-3.5h-1.2v4.7h16.2v-4.7M837.7,26.6c0-2.4-.6-4.5-1.7-6.4-1.1-2-2.7-3.5-4.7-4.7-1.9-1.1-4.1-1.7-6.4-1.7h-7v4.7h-16.2v-4.7h-7c-2.4,0-4.5.6-6.4,1.7-2,1.1-3.5,2.7-4.5,4.7-1.1,1.9-1.7,4.1-1.8,6.4v27.8h55.7v-27.8M837,19.6c-1.3-2-2.9-3.7-5-5-2.1-1.3-4.5-1.9-7.1-1.9h-30.1c-2.6,0-5,.6-7.1,1.9-2,1.3-3.7,2.9-5,5-1.2,2.1-1.8,4.5-1.9,7.1v26.5h-3.7v1.3h4.9v-27.8c0-2.4.7-4.5,1.8-6.4,1.1-2,2.6-3.5,4.5-4.7,1.9-1.1,4.1-1.7,6.4-1.7h30.1c2.4,0,4.5.6,6.4,1.7,2,1.1,3.5,2.7,4.7,4.7,1.1,1.9,1.7,4.1,1.7,6.4v27.8h4.9v-1.3h-3.7v-26.5c0-2.6-.6-5-1.9-7.1M964.3,546.6h-3.5v13.8h3.5v-13.8M964.3,545.5h-4.7v16.2h4.7v-1.2h-3.5v-13.8h3.5v-1.2M962.5,532c-1.1-2-2.6-3.5-4.5-4.7-1.9-1.1-4.1-1.6-6.4-1.7h-27.8c0-.1,0,0,0,0v55.7h27.8c2.4,0,4.5-.6,6.4-1.7,2-1.1,3.5-2.7,4.5-4.7,1.1-1.9,1.7-4.1,1.8-6.4v-7h-4.7v-16.2h4.7v-7c0-2.4-.7-4.5-1.8-6.4M964.3,326h-3.5v14h3.5v-14M964.3,318v30.1c0,2.4-.7,4.5-1.8,6.4-1.1,1.9-2.6,3.4-4.5,4.5-1.9,1.1-4.1,1.7-6.4,1.8h-27.8v4.9h1.2v-3.7h26.7c2.5,0,4.9-.7,7-1.9,2-1.3,3.7-3,5-5.1,1.2-2,1.8-4.4,1.9-7v-30.1c0-2.6-.7-5-1.9-7.1-1.3-2.1-2.9-3.8-5-5-2.1-1.3-4.4-1.9-7-1.9h-26.6v-3.8h-1.3v4.9h27.8c2.4.1,4.5.7,6.4,1.8,2,1.1,3.5,2.7,4.5,4.7,1.1,1.9,1.7,4.1,1.8,6.4M959.6,324.8h4.7v-6.9c0-2.4-.7-4.5-1.8-6.4-1.1-2-2.6-3.5-4.5-4.7-1.9-1.1-4.1-1.7-6.4-1.7h-27.8c0-.1,0,0,0,0v55.7h27.8c2.4,0,4.5-.7,6.4-1.8,2-1.1,3.5-2.6,4.5-4.5,1.1-1.9,1.7-4.1,1.8-6.4v-7h-4.7v-16.3M964.3,324.8h-4.7v16.3h4.7v-1.2h-3.5v-14h3.5v-1.2Z" fill="#fff"/>
            <g id="Flooring1" data-name="Flooring">
              <rect x="541.5" y="667.3" width="20.8" height="21.5" fill="#bcd3dd"/>
              <rect x="541.5" y="689.4" width="20.8" height="21.5" fill="#bcd3dd"/>
              <rect x="563" y="667.6" width="20.8" height="21.5" fill="#bcd3dd"/>
              <rect x="584.6" y="667.6" width="20.8" height="21.5" fill="#bcd3dd"/>
              <rect x="563" y="689.7" width="20.8" height="21.5" fill="#bcd3dd"/>
              <rect x="584.6" y="689.7" width="20.8" height="21.5" fill="#bcd3dd"/>
              <rect x="541.5" y="711.6" width="20.8" height="21.5" fill="#bcd3dd"/>
              <rect x="563" y="711.9" width="20.8" height="21.5" fill="#bcd3dd"/>
              <rect x="498.4" y="667.5" width="20.8" height="21.5" fill="#bcd3dd"/>
              <rect x="498.4" y="689.6" width="20.8" height="21.5" fill="#bcd3dd"/>
              <rect x="520" y="667.4" width="20.8" height="21.5" fill="#bcd3dd"/>
              <rect x="541.5" y="645.4" width="20.8" height="21.5" fill="#bcd3dd"/>
              <rect x="563" y="645.6" width="20.8" height="21.5" fill="#bcd3dd"/>
              <rect x="584.6" y="645.6" width="20.8" height="21.5" fill="#bcd3dd"/>
              <rect x="498.4" y="645.5" width="20.8" height="21.5" fill="#bcd3dd"/>
              <rect x="520" y="645.4" width="20.8" height="21.5" fill="#bcd3dd"/>
              <rect x="520" y="689.5" width="20.8" height="21.5" fill="#bcd3dd"/>
              <rect x="498.4" y="711.8" width="20.8" height="21.5" fill="#bcd3dd"/>
              <rect x="520" y="711.7" width="20.8" height="21.5" fill="#bcd3dd"/>
              <rect x="584.3" y="711.9" width="20.8" height="21.5" fill="#bcd3dd"/>
              <rect x="606" y="667.6" width="20.8" height="21.5" fill="#bcd3dd"/>
              <rect x="627.6" y="667.6" width="20.8" height="21.5" fill="#bcd3dd"/>
              <rect x="606" y="689.7" width="20.8" height="21.5" fill="#bcd3dd"/>
              <rect x="627.6" y="689.7" width="20.8" height="21.5" fill="#bcd3dd"/>
              <rect x="606" y="711.9" width="20.8" height="21.5" fill="#bcd3dd"/>
              <rect x="606" y="645.6" width="20.8" height="21.5" fill="#bcd3dd"/>
              <rect x="627.6" y="645.6" width="20.8" height="21.5" fill="#bcd3dd"/>
              <rect x="627.3" y="711.9" width="20.8" height="21.5" fill="#bcd3dd"/>
            </g>
            <path d="M709.3,191.4v19.2h6.8v-19.2h-6.8M914.4,63.7v5.6c-.1,0,0,235.8,0,235.8h9.3V54.4h-85.9v9.3h76.6M572,63.7v-9.3h-69.7v139.3H227.3v111.4h9.3v-102.1h275.1V63.7h60.4M923.7,581.4h-9.3v197.3h0c0,.1-233.3.1-233.3.1h0v-303.1h78v-6.3h-227.2v6.4h8.1v112.2h-48.8v6.3h3.6v6.9h4v-6.9h45.2v-118.5h130.7v167.1h0c0,.1-175.9.1-175.9.1h0v-4.7h-4v53.4h4v-16.8h5.3v-4.1h-5.3v-23.8h38.4v23.8h-5.3v4.1h9.3v-27.9h91.7v16.8h41.9v69.7h-175.9v-4.7h-4v150.3h-4.7v4h12.2v104.4h-79v157.8h-186.8v-206.6h202.5v-55.7h13.8v-4h-14v-59.7h-4v115.4h-198.4v-26.2h-9.3v246.1h205.4v-157.8h79v-246.6h152.6v37.6h259.4v-206.6M674.7,647v12.8h-37.7v-12.8h37.7M674.7,659.8v-12.8h-37.7v12.8h37.7M369.7,535h-52.3v4h92.1v7.1h4.1v-11.1h-43.9M227.3,360.9v492.1h9.3v-75.4h12.1v-6.3h-4.5v-76.6h97.5v76.6h-60.4v6.3h153.8v4.7h4v-138.1h-4v127.1h-89.4v-80.7h-109v-88.3h198.4v4.7h4v-12.7h3.6v-6.3h-29.1v-4.8h-4v15h-165.4v-122.4h169.5v-6.4h-177v-108.5h-9.3M435,594.3v4h-21.5v-4h21.5M435,598.3v-4h-21.5v4h21.5M782,63.7v-9.3h-154.3v9.3h154.3M923.7,365.7v-4.9h-9.3v108.5h-85.6v6.3h85.6v50h9.3v-159.9Z" fill="#425563"/>
            <g id="LightBlue1" data-name="LightBlue">
              <rect x="627.4" y="481.4" width="34.1" height="24.5" fill="#dde7ed"/>
              <circle cx="656.1" cy="547.9" r="11.4" fill="#dde7ed"/>
              <path d="M618.8,658.7l.6,1.8c.2,1,.6,2,1.3,2.7.3.4.7.8.9,1.3,1.2,2.2,1.7,4.4,1.7,6.8,0,2.4-.7,4.7-1.9,6.7-1.2,2-2.9,3.7-5,4.9-1.3.5-2.6.5-3.9,0-.5-.2-.9-.5-1.3-.7-2-1.5-3.5-3.4-4.5-5.6-1-2.2-1.4-4.4-1.2-6.8.2-2.4,1-4.6,2.4-6.6h.1c.6-.8,1-1.6,1.3-2.6l.7-1.9h-4.5c-.4,0-.8-.1-1.2-.4-.2-.2-.4-.5-.5-.9l-.4-7c0-.5.2-.9.5-1.4.2-.3.5-.5.9-.6h18.8c.5.1.9.3,1.2.6.3.4.4.9.4,1.4l-.4,7c0,.4-.2.7-.5.9-.3.3-.7.4-1.2.4h-4.4s-8.7,0-8.7,0" fill="#dde7ed"/>
              <rect x="541.1" y="647.4" width="51.2" height="24.1" fill="#dde7ed"/>
              <rect x="499" y="647.2" width="38.2" height="18.4" fill="#dde7ed"/>
              <rect x="620.2" y="679" width="69.7" height="39.4" transform="translate(-43.6 1353.7) rotate(-90)" fill="#dde7ed"/>
              <rect x="244.1" y="694.6" width="97.5" height="14" fill="#dde7ed"/>
              <rect x="296.3" y="725.9" width="76.5" height="14" transform="translate(-398.3 1067.4) rotate(-90)" fill="#dde7ed"/>
            </g>
            <path d="M914.3,69.4v235.8h9.4V54.4h-85.9v9.3h76.6M914.3,63.7v5.7M960.8,326h3.5v-1.2h-4.7v16.3h4.7v-1.2h-3.5v-14ZM923.7,305.1h27.8c2.4.1,4.5.7,6.4,1.8,2,1.1,3.5,2.7,4.5,4.7,1.1,1.9,1.7,4.1,1.8,6.4v6.9M923.7,365.7h1.2v-3.7h26.7c2.5,0,4.9-.7,7-1.9,2-1.3,3.7-3,5-5.1,1.2-2,1.8-4.4,1.9-7v-30.1c0-2.6-.7-5-1.9-7.1-1.3-2.1-2.9-3.8-5-5-2.1-1.3-4.4-1.9-7-1.9h-26.6v-3.8h-1.3M923.7,365.7v-4.9h-9.3v108.5h-85.6v6.3h85.6v50h9.3v-159.9ZM923.7,305.2v55.7h27.8c2.4,0,4.5-.7,6.4-1.8,2-1.1,3.5-2.6,4.5-4.5,1.1-1.9,1.7-4.1,1.8-6.4v-7M964.3,326v14M914.4,305.2v55.7M923.7,525.6h27.8c2.4.2,4.5.7,6.4,1.8,2,1.1,3.5,2.7,4.5,4.7,1.1,1.9,1.7,4.1,1.8,6.4v30.1c0,2.4-.7,4.5-1.8,6.4-1.1,2-2.6,3.5-4.5,4.7-1.9,1.1-4.1,1.6-6.4,1.7h-27.8v4.9h1.2v-3.7h26.7c2.5,0,4.9-.7,7-1.9,2-1.3,3.7-2.9,5-5,1.2-2.1,1.8-4.5,1.9-7.1v-30.1c0-2.6-.7-5-1.9-7.1-1.3-2-2.9-3.7-5-5-2.1-1.2-4.4-1.8-7-1.9h-26.6v-3.8h-1.3M923.7,581.4h-9.3v197.3h0M681.1,778.7h0v-303.1h78v-6.3h-227.2v6.4h8.1v112.2h-48.8v6.3h3.6v6.9h4v-6.9h45.2v-118.5h130.7v167.1h0M498.8,643h0v-4.7h-4v53.4h4v-16.8h5.3v-4.1h-5.3v-23.8h38.4v23.8h-5.3v4.1h9.3v-27.9h91.7v16.8h41.9v69.7h-175.9v-4.7h-4v150.3h-4.7v4h12.2v104.4h-79v157.8h-186.8v-206.6h202.5v-55.7h13.8v-4h-14v-59.7h-4v115.4h-198.4v-26.2h-9.3v246.1h205.4v-157.8h79v-246.6h152.6v37.6h259.4v-201.7M964.3,545.5h-4.7v16.2h4.7M964.3,546.6h-3.5v13.8h3.5M923.7,581.4v-55.7M914.4,525.7v55.7M842.6,54.4v-1.3h-3.7v-26.5c0-2.6-.6-5-1.9-7.1-1.3-2-2.9-3.7-5-5-2.1-1.3-4.5-1.9-7.1-1.9h-30.1c-2.6,0-5,.6-7.1,1.9-2,1.3-3.7,2.9-5,5-1.2,2.1-1.8,4.5-1.9,7.1v26.5h-3.7v1.3h4.9v-27.8c0-2.4.7-4.5,1.8-6.4,1.1-2,2.6-3.5,4.5-4.7,1.9-1.1,4.1-1.7,6.4-1.7h30.1c2.4,0,4.5.6,6.4,1.7,2,1.1,3.5,2.7,4.7,4.7,1.1,1.9,1.7,4.1,1.7,6.4v27.8h-55.7v9.3h55.7M803,13.8v3.5h13.8v-3.5M801.8,13.8v4.7h16.2v-4.7M709.3,210.7h6.8v-19.2h-6.8v19.2ZM627.7,54.4v-27.8c0-2.4-.7-4.5-1.8-6.4-1.1-2-2.6-3.5-4.5-4.7-1.9-1.1-4.1-1.7-6.4-1.7h-7v4.7h-16.3v-4.7h-6.9c-2.4,0-4.5.6-6.4,1.7-2,1.1-3.5,2.7-4.7,4.7-1.1,1.9-1.7,4.1-1.7,6.4v27.8h60.6v-1.3h-3.7v-26.5c0-2.6-.7-5-1.9-7.1-1.3-2-3-3.7-5.1-5-2-1.3-4.4-1.9-7-1.9h-30.1c-2.6,0-5,.6-7.1,1.9-2.1,1.3-3.8,2.9-5,5-1.3,2.1-1.9,4.5-1.9,7.1v26.5h-3.7v1.3h4.9v9.3h55.7v-9.3ZM606.8,13.8h-14v3.5h14v-3.5h1.2M591.6,13.8h1.2M777.2,54.4h-144.6M627.7,63.7h154.3M227.3,300.2v5h9.3v-102.1h275.1V63.7h60.4M567.1,54.4h-64.8v139.3H227.3v106.4h-1.3v3.7h-26.6c-2.6.1-4.9.7-7,2-2.1,1.2-3.8,2.9-5,5-1.3,2.1-1.9,4.5-2,7.1v30.1c0,2.6.7,4.9,2,7,1.2,2.1,2.9,3.8,5,5.1,2,1.2,4.4,1.8,7,1.9h26.6v3.7h1.3v-4.9h-27.9c-2.3,0-4.5-.7-6.4-1.8-1.9-1.1-3.4-2.6-4.5-4.5-1.1-1.9-1.7-4.1-1.8-6.4v-30.1c0-2.4.7-4.5,1.8-6.4,1.1-2,2.6-3.5,4.5-4.7,2-1.1,4.1-1.7,6.4-1.7h27.9v55.7h9.3v-55.7M186.6,340h3.5v-14h-3.5M186.6,341.1h4.7v-16.3h-4.7M227.3,848.1v4.9h9.3v-75.4h12.1v-6.3h-4.5v-76.6h97.5v76.6h-60.4v6.3h153.8v4.7h4v-138.1h-4v127.1h-89.4v-80.7h-109v-88.3h198.4v4.7h4v-12.7h3.6v-6.3h-29.1v-4.8h-4v15h-165.4v-122.4h169.5v-6.4h-177v-108.5M309.9,475.8v3.5h73.2v-3.5M358.1,475.8v1.7h11.5v-1.7M369.7,477.5h11.6v-1.7M381.3,535h-64v4h92.1v7.1h4.1v-11.1h-32.2v-55.7M369.7,535v-55.7M358.1,535v-55.7M413.5,546.1c4.9,0,9.7,1,14.2,2.9,3.8,1.6,7.3,3.7,10.4,6.4h.1c0-.1,1.2,1.2,1.2,1.2l.4.3-26.2,26.3-1.7-1.6,26.2-26.2c.4.4.8.7,1.3,1.2M409.4,546.1v37.1M435,644.2c-5.1,0-10-1.1-14.5-3-4.5-1.9-8.4-4.5-11.7-7.9-3.5-3.4-6.1-7.3-8-11.8-1.6-3.8-2.6-7.9-2.9-12.2h-.1v-2.3h37.2v37.2ZM397.9,609.3c0-.3,0-.5-.1-.7M435,594.3v4h-21.5v-4h21.5ZM435,609.3h-37.1M498.8,601.2c5.1,0,10,1.1,14.5,3,4.5,1.9,8.5,4.6,11.8,8,3.4,3.3,6,7.2,7.9,11.7,1.6,3.8,2.6,7.9,2.9,12.2h.1v2.3h-37.2v-37.2ZM323.2,475.8v1.7h11.6v-1.7M334.9,477.5h11.6v-1.7M323.2,477.5h-11.6v-1.7M302.9,598.2v-59.2h-3.2v-4h11.8v-55.7M317.3,535h-.4l.2,1.2h.2M346.5,535v-55.7M316.9,535h-5.3M323.2,535v-55.7M334.9,535v-55.7M317.3,538.7v.3h.1l2.7,25.3-3.5,1.8,7.5,1.7-3.4,1.7,3.5,28.8M317.3,537.8h-13.5v1.2h13.5M317.1,536.1l.2,1.7M303.8,539h-.8M317.1,536.1h-13.3v1.7M314.6,539v59.2M303.8,535v1.2M250.9,738.9c-.5-.1-.9-.2-1.2-.2h-1.1v32.6h2.3v-32.6h-1.2M281.2,771.2c0-6.1-1.6-11.5-4.4-16.4-2.9-4.9-6.8-8.8-11.6-11.6-4.3-2.5-9-4-14.2-4.3M227.3,848.1h-1.3v3.7h-26.6c-2.6,0-4.9.7-7,1.9-2.1,1.3-3.8,3-5,5.1-1.3,2-1.9,4.4-2,7v30.2c0,2.5.7,4.9,2,7,1.2,2.1,2.9,3.8,5,5,2,1.3,4.4,1.9,7,1.9h26.6v3.7h1.3M244.1,708.9h83.5v62.4M504.1,674.9l1.6-1.7,19.7,19.7c1.8-2.3,3.3-4.7,4.4-7.3,1.4-3.5,2.1-7,2.1-10.7M498.8,728.9v-2.3h37.1c-.3-4.3-1.2-8.4-2.9-12.2-1.9-4.4-4.5-8.4-7.9-11.7-3.4-3.4-7.3-6.1-11.8-8-4.5-1.9-9.3-2.9-14.5-2.9M525.5,692.9h-.1c-.6.6-1.1,1.1-1.6,1.7l1.7-1.7ZM523.8,694.6l-19.7-19.7M435,782.2v2.3h-37.1c.3,4.3,1.2,8.4,2.9,12.2,1.9,4.5,4.6,8.5,8,11.8,3.3,3.4,7.2,6,11.7,7.9,4.5,1.9,9.3,2.9,14.5,3M397.9,784.6h-.1v-2.3h37.2M397.9,784.6c0-.3,0-.5-.1-.7M346.5,477.5h11.6M759.1,475.7h2.3v34.8c4-.3,7.8-1.2,11.3-2.6,4.2-1.8,7.8-4.3,11-7.5,2.5-2.5,4.5-5.2,6.2-8.2.4-.9.8-1.9,1.3-2.9,1.8-4.1,2.7-8.5,2.7-13.3,0,4.8,1,9.2,2.7,13.3.4,1,.9,1.9,1.4,2.9,1.6,3,3.6,5.8,6,8.2,3.2,3.2,6.9,5.7,11.1,7.5,3.5,1.5,7.3,2.4,11.2,2.6v-34.8h2.3v34.8h-2.3M761.4,510.5h-2.3v-34.8M648.9,493.5l-11.4,11.3h22.8l-11.4-11.3-11.4-11.3v22.6M631.9,484.4c0-.7-.5-1.1-1.2-1.2-.7,0-1.1.5-1.2,1.2,0,.6.5,1,1.2,1.2.7-.1,1.1-.5,1.2-1.2ZM631.9,502.9c0-.7-.5-1.1-1.2-1.2-.7,0-1.1.5-1.2,1.2,0,.7.5,1.1,1.2,1.2.7,0,1.1-.5,1.2-1.2ZM627.8,481.4h33.4v24.4h-33.4v-24.4ZM660.4,504.9v-22.6l-11.4,11.3M637.5,482.2h22.8M535.9,636c0,.2,0,.6.1,1M667.9,548.3c0-2.2-.6-4.1-1.6-5.8-1.1-1.8-2.5-3.2-4.2-4.2-1.7-1-3.6-1.5-5.8-1.6-2.2,0-4.2.6-5.9,1.6-1.7,1.1-3.1,2.5-4.1,4.2-1,1.7-1.5,3.6-1.6,5.8,0,2.2.6,4.2,1.6,5.9,1.1,1.7,2.4,3.1,4.1,4.1,1.8,1,3.7,1.5,5.9,1.6,2.2,0,4.1-.6,5.8-1.6,1.8-1.1,3.2-2.4,4.2-4.1,1-1.8,1.5-3.7,1.6-5.9ZM672.5,731.1c.5-.4.7-1,.7-1.6v-61.8c0-.6-.2-1.2-.7-1.6l-16,31c0,0,.2.1.3.2.4.4.5.8.5,1.3s-.2.9-.5,1.3c-.1.1-.3.2-.4.3l16.1,31c-.4.5-1,.7-1.6.7h-30.4c-.7,0-1.3-.2-1.7-.7-.4-.4-.6-1-.6-1.6v-61.8c0-.6.2-1.2.6-1.6.4-.5,1-.7,1.7-.7h14.6l.6-1.5.5,1.5h14.7c.6,0,1.2.3,1.6.7M674.7,647v12.8h-37.7v-12.8h37.7ZM624.9,657.3l.3-7.1c0-.5-.1-.9-.4-1.3s-.6-.6-1.1-.7h-18.9c-.4.1-.8.4-1.1.7s-.4.8-.4,1.3l.4,7.1h21.1c-.1.4-.4.7-.6,1-.3.3-.7.4-1.2.4h-4.4l.6,1.8c.3,1.1.7,2,1.4,2.7.3.4.5.8.7,1.3,1.3,2.3,1.9,4.6,1.8,7,0,2.4-.7,4.6-1.9,6.7-1.2,2-2.9,3.7-5.1,5-1.3.5-2.6.5-3.9.1-.4-.3-.8-.6-1.2-1-2.1-1.5-3.6-3.3-4.5-5.5-1-2.2-1.4-4.5-1.2-6.9.1-2.4,1-4.6,2.4-6.7.6-.8,1.1-1.7,1.3-2.7l.7-1.8h-4.4c-.5,0-.9-.1-1.2-.4-.3-.2-.5-.5-.5-1M613,681.7c.9.4,1.8.4,2.6,0,2-1.1,3.5-2.6,4.5-4.4,1.1-1.8,1.7-3.8,1.7-5.9,0-2.1-.5-4.2-1.6-6.1-.6-1.2-1.5-2.3-2.5-3.2-.2-.1-.4-.2-.5-.2h-5.7c-.2,0-.4,0-.6.2-1.7,1.5-2.9,3.2-3.5,5.3-.7,2-.8,4-.4,6.1.4,2,1.3,3.9,2.7,5.7,1,1,2.1,1.8,3.3,2.5ZM655.1,665.3l-1.7,4.3h4.7l-1.8-4.3M656.5,697c-.3-.1-.6-.2-.8-.2s-.6,0-.8.2l-.4.2c-.4.4-.5.8-.5,1.3,0,.5.2.9.5,1.3.1.1.3.2.4.3.2,0,.5.1.8.1s.5,0,.7-.1M654.9,700.1l-16.1,31M654.9,697l-16.1-31M635.2,663.8v69.7M572.8,655.6l2.9-.5c-2.7-.8-5.5-1.2-8.4-1.3v1.3c1.8,0,3.6.2,5.4.5h.1c1,1.4,1.5,3,1.5,4.7s-.5,3.2-1.6,4.7c-.9,1.1-2,1.9-3.2,2.4-1.2.4-2.5.6-3.8.4-1.3-.1-2.5-.6-3.6-1.5-1.1-.9-1.9-2-2.4-3.2-.4-1.2-.6-2.5-.4-3.8.1-1.3.6-2.6,1.5-3.7l-3-.5c-.6,1.3-.9,2.6-1,4.1,0,2.8,1.1,5.1,3,7,1.8,1.9,4.2,2.9,7,3,2.7,0,5-1.1,6.9-3,1.9-1.8,2.9-4.2,3-7,0-1.5-.4-2.9-1-4.1-.5-1-1.2-1.9-2-2.9-1.8-1.8-4.1-2.8-6.9-2.9-2.8,0-5.1,1-7,2.9-.8.9-1.5,1.9-2,2.9,2.7-.8,5.5-1.2,8.4-1.3v-1.4c-.2-.2-.3-.4-.3-.5h0c0-.4.1-.6.3-.7.2-.1.4-.2.6-.2s.4.1.6.3c.1.1.2.3.2.5h0c0,.3-.1.5-.3.6v1.4M577.8,659.2c0-2-.6-3.9-1.5-5.5-1-1.7-2.3-3-4-4-1.6-.9-3.5-1.4-5.5-1.5-2.1,0-4,.6-5.6,1.5-1.7,1-3,2.3-4,4-.9,1.6-1.4,3.5-1.5,5.5,0,2,.6,3.9,1.5,5.6,1,1.7,2.3,3,4,3.9,1.6,1,3.5,1.5,5.6,1.6,2,0,3.9-.6,5.5-1.6,1.7-.9,3-2.2,4-3.9.9-1.7,1.4-3.6,1.5-5.6ZM592.3,647v24.4h-51.1M564.4,652.6h-1.4c-.1,0-.2.2-.3.3,0,.2.2.3.3.3h2c.2,0,.3-.1.3-.3s-.1-.2-.3-.3h-.6c0-.1.2-.2.3-.3.4-.1.7,0,1,.4.1.4,0,.7-.3,1-.4.1-.8,0-1.1-.4M567.3,652.4l.2-.5c-.2-.4-.5-.6-.7-.6s-.6.1-.8.4l.2.7M567.5,651.9h.1M566,651.7c0,0,0,.1-.1.2M568.5,653.3h2c.2,0,.3-.1.3-.3s-.1-.2-.3-.3h-2c-.1,0-.2.2-.3.3,0,.2.2.3.3.3ZM569.1,652.6c-.2-.4-.5-.5-1-.3-.4.2-.6.5-.4,1,.3.4.6.6,1.1.4.1,0,.2-.2.3-.4M566.2,653.8v4.1l.3.2h.5l.3-.2v-2.9M567.6,659.2c0-.5-.4-.8-.8-.8-.6,0-.9.4-1,.8,0,.6.4.9,1,1,.5,0,.8-.4.8-1ZM566.2,655.1c-1.8,0-3.6.2-5.4.5M535.9,726.5h.1v2.3h-37.2M535.9,726.5c0,.2,0,.6.1,1M609.9,658.7h8.8M674.7,642.9h-175.9M498.8,636h37.1M498.8,665.6h38.4M227.3,365.7v482.3M490.2,883.2h-2.3v37.1c.2,0,.6,0,1,.1h1.3v-37.2ZM487.8,883.2h-34.9c0,5.1,1.1,10,3,14.5,1.9,4.5,4.5,8.5,7.9,11.8s7.3,6,11.8,7.9c3.8,1.6,7.9,2.6,12.2,2.9h0c0,.1,1,.1,1,.1M227.3,853h-27.9c-2.3,0-4.5.7-6.4,1.8-1.9,1.1-3.4,2.6-4.5,4.5-1.1,2-1.7,4.1-1.8,6.4v7h4.7v16.3h-4.7v7c0,2.3.7,4.5,1.8,6.4,1.1,1.9,2.6,3.4,4.5,4.5,2,1.1,4.1,1.7,6.4,1.7h27.9v-55.7ZM186.6,887.8h3.5v-14h-3.5v15.1M186.6,873.9v-1.2M236.6,908.7v-55.7M914.4,778.6h-233.3" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
            <path d="M482.1,777.8c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M457,777.6c0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2M460.8,777.8c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M448.3,770.9c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5M473.5,771c0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1M469.7,771.2c0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2M495,777.4c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M486.1,771c0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1M438.9,777.8c0,0,.1,0,.2,0h5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M438.9,771.5c0,0,.1,0,.2,0h5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M330.1,759.9c0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c.1,0,.2.2.2.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2-.1-.2M330.1,747.2c0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2M256.8,706.1c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5M252.7,706.2c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M330.1,734.6c0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2M330.1,721.9c0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2M330.1,709.2c0,0-.1,0-.2-.1,0,0-.2,0-.2.1,0,0,0,.1-.1.2v8.5c0,0,0,.2.1.2,0,0,.1,0,.2,0,0,0,.2,0,.2,0,0,0,0-.1,0-.2v-8.5c0,0,0-.2,0-.2M320.2,706.1c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5M290.8,706.2c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M278.1,706.2c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M307.3,706.7c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M294.8,706.1c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5M453.2,594.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M466.1,594.1c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M478.5,594.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M482.4,594.3c0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2M469.8,587.9c0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2M457.4,587.6c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5M444.5,588.2c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M491.4,587.7c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M430.6,475.6c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M421.8,469.6c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M418,475.6c0,0-.1,0-.2-.1h-4.2c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h4.2c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M413.3,469.6c0,0,.1,0,.2,0h4.2c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-4.2c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M472.5,476c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M481.4,469.1c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M459.8,476c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M443.3,475.6c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M447.1,476c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M443.3,469.1c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M460,469c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5M456,469.1c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M523.2,476c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M510.6,476c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M519.2,469.6c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5M523.2,469.6c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M497.9,476c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M494.1,475.6c0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2,0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2M485.2,469.6c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2M497.9,469.6c0,0,.1,0,.2,0h8.5c0,0,.2,0,.2,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0,0-.1,0-.2-.1h-8.5c0,0-.2,0-.2.1,0,0,0,.1-.1.2,0,0,0,.2.1.2" fill="#425563" opacity=".4"/>
            <path d="M337.2,507.1h-6.6l6.6,2.6v-2.6M330.6,507.1h6.6v-2.6l-6.6,2.6Z" fill="#425563"/>
            <path d="M330.6,507.1h6.6v-2.6l-6.6,2.6,6.6,2.6v-2.6h44.1" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
            <text transform="translate(386.5 510.2)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">Up</tspan></text>
          </g>
          <g id="Furniture1" data-name="Furniture">
            <g id="Pool_table" filter="url(#drop-shadow-21)">
              <g>
                <rect x="294.4" y="239.6" width="91.9" height="186.7" rx="4.7" ry="4.7" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M386.7,244.4v177.2c0,2.8-2.3,5.1-5.1,5.1h-82.5c-2.8,0-5.1-2.3-5.1-5.1v-177.2c0-2.8,2.3-5.1,5.1-5.1h82.5c2.8,0,5.1,2.3,5.1,5.1ZM294.8,421.6c0,2.4,2,4.4,4.4,4.4h82.5c2.4,0,4.4-2,4.4-4.4v-177.2c0-2.4-2-4.4-4.4-4.4h-82.5c-2.4,0-4.4,2-4.4,4.4v177.2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <rect x="299.9" y="245.1" width="81.1" height="175.8" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M381.3,244.8v176.5h-81.7v-176.5h81.7ZM380.6,420.5v-175.1h-80.4v175.1h80.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M373.8,239.6h7.9c2.6,0,4.7,2.1,4.7,4.7v8.5h0c-7,0-12.6-5.6-12.6-12.6s0-.4,0-.6Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M386.7,244.4v8.8h-.3c-7.1,0-12.9-5.8-12.9-12.9s0-.4,0-.6v-.3h8.2c2.8,0,5.1,2.3,5.1,5.1ZM386,252.5v-8.1c0-2.4-2-4.4-4.4-4.4h-7.5c0,0,0,.2,0,.3,0,6.7,5.3,12.1,11.9,12.3Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M294.4,252.2v-7.9c0-2.6,2.1-4.7,4.7-4.7h8.5c0,7-5.6,12.6-12.6,12.6s-.4,0-.6,0Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M308,239.3v.3c0,7.1-5.8,12.9-12.9,12.9s-.4,0-.6,0h-.3v-8.2c0-2.8,2.3-5.1,5.1-5.1h8.8ZM294.8,251.9c0,0,.2,0,.3,0,6.7,0,12.1-5.3,12.3-11.9h-8.1c-2.4,0-4.4,2-4.4,4.4v7.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M307,426.3h-7.9c-2.6,0-4.7-2.1-4.7-4.7v-8.5h0c7,0,12.6,5.6,12.6,12.6s0,.4,0,.6Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M307.4,425.7c0,.2,0,.4,0,.6v.3h-8.2c-2.8,0-5.1-2.3-5.1-5.1v-8.8h.3c7.1,0,12.9,5.8,12.9,12.9ZM306.7,426c0,0,0-.2,0-.3,0-6.7-5.3-12.1-11.9-12.3v8.1c0,2.4,2,4.4,4.4,4.4h7.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M386.4,413.7v7.9c0,2.6-2.1,4.7-4.7,4.7h-8.5c0-7,5.6-12.6,12.6-12.6s.4,0,.6,0Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M386.7,413.4v8.2c0,2.8-2.3,5.1-5.1,5.1h-8.8v-.3c0-7.1,5.8-12.9,12.9-12.9s.4,0,.6,0h.3ZM373.5,426h8.1c2.4,0,4.4-2,4.4-4.4v-7.5c0,0-.2,0-.3,0-6.7,0-12.1,5.3-12.3,11.9Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M294.6,342.4c5.1,0,9.2-4.3,9.2-9.4s-4.1-9.3-9.2-9.4v18.8Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M304.2,333c0,5.3-4.3,9.6-9.5,9.7h-.3s0-19.4,0-19.4h.3c5.3,0,9.5,4.4,9.5,9.7ZM294.9,342c4.8-.3,8.6-4.2,8.6-9s-3.8-8.8-8.6-9v18.1Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M386.4,323.6c-5.1,0-9.2,4.3-9.2,9.4s4.1,9.3,9.2,9.4v-18.8Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M386.7,323.3v19.4h-.3c-5.3,0-9.5-4.4-9.5-9.7s4.3-9.6,9.5-9.7h.3ZM386,342v-18.1c-4.8.3-8.6,4.2-8.6,9s3.8,8.8,8.6,9Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M334.7,369c1.5,0,2.7,1.2,2.7,2.7s-1.2,2.7-2.7,2.7-2.7-1.2-2.7-2.7,1.2-2.7,2.7-2.7Z" fill="#fff"/>
                <path d="M337.4,371.7c0,1.7-1.4,3-3,3s-3-1.4-3-3,1.4-3,3-3,3,1.4,3,3ZM332,371.7c0,1.3,1.1,2.4,2.4,2.4s2.4-1.1,2.4-2.4-1.1-2.4-2.4-2.4-2.4,1.1-2.4,2.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M329.3,369c1.5,0,2.7,1.2,2.7,2.7s-1.2,2.7-2.7,2.7-2.7-1.2-2.7-2.7,1.2-2.7,2.7-2.7Z" fill="#fff"/>
                <path d="M332,371.7c0,1.7-1.4,3-3,3s-3-1.4-3-3,1.4-3,3-3,3,1.4,3,3ZM326.5,371.7c0,1.3,1.1,2.4,2.4,2.4s2.4-1.1,2.4-2.4-1.1-2.4-2.4-2.4-2.4,1.1-2.4,2.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M340.1,369c1.5,0,2.7,1.2,2.7,2.7s-1.2,2.7-2.7,2.7-2.7-1.2-2.7-2.7,1.2-2.7,2.7-2.7Z" fill="#fff"/>
                <path d="M342.8,371.7c0,1.7-1.4,3-3,3s-3-1.4-3-3,1.4-3,3-3,3,1.4,3,3ZM337.4,371.7c0,1.3,1.1,2.4,2.4,2.4s2.4-1.1,2.4-2.4-1.1-2.4-2.4-2.4-2.4,1.1-2.4,2.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M345.5,369c1.5,0,2.7,1.2,2.7,2.7s-1.2,2.7-2.7,2.7-2.7-1.2-2.7-2.7,1.2-2.7,2.7-2.7Z" fill="#fff"/>
                <path d="M348.2,371.7c0,1.7-1.4,3-3,3s-3-1.4-3-3,1.4-3,3-3,3,1.4,3,3ZM342.8,371.7c0,1.3,1.1,2.4,2.4,2.4s2.4-1.1,2.4-2.4-1.1-2.4-2.4-2.4-2.4,1.1-2.4,2.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M337,374.4c1.5,0,2.7,1.2,2.7,2.7s-1.2,2.7-2.7,2.7-2.7-1.2-2.7-2.7,1.2-2.7,2.7-2.7Z" fill="#fff"/>
                <path d="M340.1,377.1c0,1.7-1.4,3-3,3s-3-1.4-3-3,1.4-3,3-3,3,1.4,3,3ZM334.7,377.1c0,1.3,1.1,2.4,2.4,2.4s2.4-1.1,2.4-2.4-1.1-2.4-2.4-2.4-2.4,1.1-2.4,2.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M332,374.4c1.5,0,2.7,1.2,2.7,2.7s-1.2,2.7-2.7,2.7-2.7-1.2-2.7-2.7,1.2-2.7,2.7-2.7Z" fill="#fff"/>
                <path d="M334.7,377.1c0,1.7-1.4,3-3,3s-3-1.4-3-3,1.4-3,3-3,3,1.4,3,3ZM329.3,377.1c0,1.3,1.1,2.4,2.4,2.4s2.4-1.1,2.4-2.4-1.1-2.4-2.4-2.4-2.4,1.1-2.4,2.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M342.5,374.4c1.5,0,2.7,1.2,2.7,2.7s-1.2,2.7-2.7,2.7-2.7-1.2-2.7-2.7,1.2-2.7,2.7-2.7Z" fill="#fff"/>
                <path d="M345.5,377.1c0,1.7-1.4,3-3,3s-3-1.4-3-3,1.4-3,3-3,3,1.4,3,3ZM340.1,377.1c0,1.3,1.1,2.4,2.4,2.4s2.4-1.1,2.4-2.4-1.1-2.4-2.4-2.4-2.4,1.1-2.4,2.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M347.9,374.4c1.5,0,2.7,1.2,2.7,2.7s-1.2,2.7-2.7,2.7-2.7-1.2-2.7-2.7,1.2-2.7,2.7-2.7Z" fill="#fff"/>
                <path d="M350.9,377.1c0,1.7-1.4,3-3,3s-3-1.4-3-3,1.4-3,3-3,3,1.4,3,3ZM345.5,377.1c0,1.3,1.1,2.4,2.4,2.4s2.4-1.1,2.4-2.4-1.1-2.4-2.4-2.4-2.4,1.1-2.4,2.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M334.3,379.4c1.5,0,2.7,1.2,2.7,2.7s-1.2,2.7-2.7,2.7-2.7-1.2-2.7-2.7,1.2-2.7,2.7-2.7Z" fill="#fff"/>
                <path d="M337.4,382.1c0,1.7-1.4,3-3,3s-3-1.4-3-3,1.4-3,3-3,3,1.4,3,3ZM332,382.1c0,1.3,1.1,2.4,2.4,2.4s2.4-1.1,2.4-2.4-1.1-2.4-2.4-2.4-2.4,1.1-2.4,2.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <circle cx="339.8" cy="382.1" r="2.7" fill="#fff"/>
                <path d="M342.8,382.1c0,1.7-1.4,3-3,3s-3-1.4-3-3,1.4-3,3-3,3,1.4,3,3ZM337.4,382.1c0,1.3,1.1,2.4,2.4,2.4s2.4-1.1,2.4-2.4-1.1-2.4-2.4-2.4-2.4,1.1-2.4,2.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M337,384.5c1.5,0,2.7,1.2,2.7,2.7s-1.2,2.7-2.7,2.7-2.7-1.2-2.7-2.7,1.2-2.7,2.7-2.7Z" fill="#fff"/>
                <path d="M340.1,387.2c0,1.7-1.4,3-3,3s-3-1.4-3-3,1.4-3,3-3,3,1.4,3,3ZM334.7,387.2c0,1.3,1.1,2.4,2.4,2.4s2.4-1.1,2.4-2.4-1.1-2.4-2.4-2.4-2.4,1.1-2.4,2.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <circle cx="339.8" cy="392.2" r="2.7" fill="#fff"/>
                <path d="M342.8,392.2c0,1.7-1.4,3-3,3s-3-1.4-3-3,1.4-3,3-3,3,1.4,3,3ZM337.4,392.2c0,1.3,1.1,2.4,2.4,2.4s2.4-1.1,2.4-2.4-1.1-2.4-2.4-2.4-2.4,1.1-2.4,2.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M342.5,384.5c1.5,0,2.7,1.2,2.7,2.7s-1.2,2.7-2.7,2.7-2.7-1.2-2.7-2.7,1.2-2.7,2.7-2.7Z" fill="#fff"/>
                <path d="M345.5,387.2c0,1.7-1.4,3-3,3s-3-1.4-3-3,1.4-3,3-3,3,1.4,3,3ZM340.1,387.2c0,1.3,1.1,2.4,2.4,2.4s2.4-1.1,2.4-2.4-1.1-2.4-2.4-2.4-2.4,1.1-2.4,2.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <circle cx="345.2" cy="382.1" r="2.7" fill="#fff"/>
                <path d="M348.2,382.1c0,1.7-1.4,3-3,3s-3-1.4-3-3,1.4-3,3-3,3,1.4,3,3ZM342.8,382.1c0,1.3,1.1,2.4,2.4,2.4s2.4-1.1,2.4-2.4-1.1-2.4-2.4-2.4-2.4,1.1-2.4,2.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M350.9,369c1.5,0,2.7,1.2,2.7,2.7s-1.2,2.7-2.7,2.7-2.7-1.2-2.7-2.7,1.2-2.7,2.7-2.7Z" fill="#fff"/>
                <path d="M353.6,371.7c0,1.7-1.4,3-3,3s-3-1.4-3-3,1.4-3,3-3,3,1.4,3,3ZM348.2,371.7c0,1.3,1.1,2.4,2.4,2.4s2.4-1.1,2.4-2.4-1.1-2.4-2.4-2.4-2.4,1.1-2.4,2.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <polygon points="322.9 258.5 322.9 333 322.5 333 321.5 258.5 322.9 258.5" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M323.2,258.2v75.1h-1v-.3s-1-74.8-1-74.8h2ZM322.5,312.3v-53.5h-.7l.7,53.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <polygon points="344.3 265.2 329.1 338.1 328.8 338 342.9 264.9 344.3 265.2" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M344.7,264.9l-15.3,73.6-1-.2,14.3-73.8,2,.4ZM333,317.8l10.9-52.4h-.7c0-.1-10.2,52.4-10.2,52.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
            </g>
            <g id="Plant4" data-name="Plant" filter="url(#drop-shadow-22)">
              <g>
                <circle cx="877.1" cy="512.6" r="9.6" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M877.1,522.3c-1.6,0-3.3-.4-4.8-1.2-2.3-1.3-3.9-3.4-4.6-5.9-.7-2.5-.4-5.1.9-7.4,1.3-2.3,3.4-3.9,5.9-4.6,2.5-.7,5.1-.4,7.4.9,2.3,1.3,3.9,3.4,4.6,5.9.7,2.5.4,5.1-.9,7.4s-3.4,3.9-5.9,4.6h0c-.9.2-1.8.4-2.7.4ZM877.1,503c-.9,0-1.7.1-2.6.4-2.4.7-4.5,2.3-5.7,4.5-1.2,2.2-1.5,4.8-.9,7.2.7,2.4,2.3,4.5,4.5,5.7,2.2,1.2,4.8,1.5,7.2.9h0c0,.1,0,0,0,0,2.4-.7,4.5-2.3,5.7-4.5,1.2-2.2,1.5-4.8.9-7.2-.7-2.4-2.3-4.5-4.5-5.7-1.4-.8-3-1.2-4.6-1.2Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <circle cx="877.1" cy="512.6" r="8.9" transform="translate(1.1 1026.9) rotate(-60.7)" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M877.1,521.6c-1.5,0-3-.4-4.4-1.2-2.1-1.2-3.6-3.1-4.3-5.4-.7-2.3-.4-4.7.8-6.8,1.2-2.1,3.1-3.6,5.4-4.3,2.3-.7,4.7-.4,6.8.8,2.1,1.2,3.6,3.1,4.3,5.4.7,2.3.4,4.7-.8,6.8-1.2,2.1-3.1,3.6-5.4,4.3h0c-.8.2-1.6.3-2.4.3ZM877.1,503.8c-.8,0-1.6.1-2.4.3-2.3.6-4.1,2.1-5.3,4.1-1.1,2-1.4,4.4-.8,6.7.6,2.3,2.1,4.1,4.1,5.3,2,1.1,4.4,1.4,6.7.8h0c2.3-.6,4.1-2.1,5.3-4.1,1.1-2,1.4-4.4.8-6.7-.6-2.3-2.1-4.1-4.1-5.3-1.3-.7-2.8-1.1-4.3-1.1Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M884.9,510.2c-.6-1.8-.3-3.3-.2-4,.1-.5.6-2.3,2.1-3.8,1.4-1.4,2.1-1,8.8-2.8,2.4-.6,3.6-1,4.6-.4,1,.6,1,1.7,2.3,2.2,1,.4,1.9.2,2,.5,0,.3-.8.4-1.3,1.1-.8.9-.5,2-.7,3-.3,1.6-1.8,2.6-5,4.6-2.7,1.7-4.1,2.6-5.9,2.9-1,.1-3.6.5-5.4-1.2-.8-.8-1.1-1.7-1.3-2.1Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M890,513.8c-1.2,0-2.7-.2-3.9-1.3-.8-.8-1.2-1.7-1.3-2.2h0c-.7-1.8-.3-3.4-.2-4,.2-.7.7-2.4,2.1-3.9.9-.9,1.6-1.1,3.7-1.6,1.2-.3,2.8-.6,5.1-1.3h.5c2-.7,3.2-1,4.1-.4.4.3.7.6.9,1,.3.5.7.9,1.4,1.2.5.2,1,.2,1.4.3.4,0,.7,0,.7.3,0,.2-.2.3-.5.5-.3.2-.6.4-.9.7-.5.6-.5,1.3-.6,2,0,.3,0,.6,0,.9-.3,1.6-1.9,2.7-5,4.7-2.7,1.7-4.1,2.6-6,2.9-.3,0-.9.1-1.6.1ZM885,510.2h0c.2.5.5,1.4,1.3,2.1,1.7,1.6,4.3,1.3,5.3,1.2,1.9-.2,3.2-1.1,5.9-2.8,3.1-2,4.7-3,4.9-4.5,0-.3,0-.6,0-.9,0-.7,0-1.5.6-2.1.3-.4.7-.6.9-.7.1,0,.4-.2.4-.3,0,0-.3,0-.5,0-.4,0-.9,0-1.4-.3-.8-.3-1.1-.8-1.5-1.3-.2-.4-.5-.7-.9-.9-.9-.6-1.9-.3-4,.3h-.5c-2.4.8-4,1.1-5.1,1.4-2.1.5-2.7.6-3.6,1.5-1.4,1.4-1.9,3.1-2,3.7-.1.6-.5,2.1.2,3.9h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M870.3,513.8c-.1-.6-.5-2.5-1.8-3.6-1.3-1.1-2.8-1-4.9-1-3.1,0-3.4,1-7,1.1-1.7,0-2.1.5-2.7.8-1.7,1.1-.8,3.4-2.6,4.4-1,.6-2.2.2-2.2.5,0,.3,1.3.4,2.3,1.3,1,1,.6,1.9,1.3,3,1.2,2.1,4.5,2.3,6.4,2.4,1.2,0,3.9.2,6.7-1.4,1.2-.7,3.9-2.1,4.5-4.9.2-1.1,0-2.2,0-2.6Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M860.2,522.8c-.4,0-.8,0-1,0-2-.1-5.3-.3-6.5-2.4-.3-.5-.4-.9-.4-1.3-.1-.6-.2-1.1-.8-1.7-.6-.6-1.3-.8-1.8-1-.4-.1-.6-.2-.6-.4,0-.2.3-.2.6-.2.4,0,1.1,0,1.6-.3.9-.5,1.1-1.3,1.3-2.1.2-.8.4-1.7,1.3-2.3,0,0,.1,0,.2-.1.5-.3,1-.7,2.6-.7,1.8,0,2.8-.3,3.7-.6.9-.3,1.8-.5,3.3-.5,2,0,3.6,0,4.9,1,1.4,1.2,1.8,3.1,1.9,3.7h0c0,.4.3,1.5,0,2.7-.6,2.8-3.4,4.3-4.6,5-2.2,1.2-4.4,1.4-5.8,1.4ZM849.2,516c0,0,.3.1.4.2.5.2,1.2.5,1.8,1.1.6.6.7,1.2.9,1.8,0,.4.2.8.4,1.2,1.1,2,4.4,2.2,6.3,2.3,1,0,3.8.2,6.7-1.4,1.2-.6,3.9-2.1,4.4-4.8.2-1.1,0-2.2,0-2.6h0c-.1-.6-.5-2.4-1.8-3.5-1.2-1.1-2.8-1-4.8-1-1.5,0-2.3.3-3.2.5-.9.3-1.9.5-3.8.6-1.5,0-2,.4-2.5.7,0,0-.1,0-.2.1-.8.5-1,1.3-1.2,2.1-.2.8-.4,1.7-1.4,2.2-.6.3-1.3.3-1.7.4-.2,0-.3,0-.4,0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M874.2,505.3c1.6-1.7,1.2-4.1,1.1-5.2-.2-1.1-.8-3.7-3.1-5.5-.7-.5-2.2-1.6-4-1.5-.9,0-1.7.5-2.8.2-.7-.2-1.2-.6-1.5-.4-.3.2.2.8.2,1.5,0,1.5-1.9,2-2.5,3.4-.8,2,1.5,4.6,2.2,5.4,1.7,1.9,5,4.3,8.1,3.4.4-.1,1.5-.4,2.4-1.4Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M870.5,506.9c-2.7,0-5.3-1.8-6.8-3.6-2-2.3-2.7-4.2-2.2-5.5.3-.7.8-1.1,1.3-1.5.6-.5,1.2-1,1.2-1.8,0-.3,0-.6-.2-.8,0-.3-.2-.6,0-.8.2-.2.5,0,.9,0,.2,0,.4.2.7.2.8.2,1.4.1,2,0,.3,0,.5-.1.9-.1,1.8-.1,3.3,1,4.1,1.5,2.4,1.8,3,4.5,3.2,5.5.2,1.1.5,3.5-1.1,5.3h0c-.9,1-2.1,1.3-2.4,1.4-.5.1-1,.2-1.4.2ZM864.1,493s0,0-.1,0c0,0,0,.3,0,.5,0,.2.2.5.2.9,0,.9-.6,1.4-1.3,2-.5.4-1,.9-1.2,1.5-.5,1.3.2,3,2.1,5.3,1.4,1.7,4.8,4.2,8,3.4.4,0,1.4-.4,2.3-1.3h0c1.5-1.7,1.2-4.1,1-5.1-.2-1.1-.8-3.7-3.1-5.4-.7-.5-2.2-1.6-3.9-1.4-.3,0-.6,0-.8.1-.6.1-1.2.2-2.1,0-.3,0-.5-.2-.7-.2-.2,0-.4-.2-.5-.2Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M884,505.8c-1.6-.4-2.6-1.5-3-2-1.3-1.6-1.5-3.4-1.6-4.3-.3-3.4,1.4-6,2.3-7.4,1.2-1.8,2.7-4.1,4.7-4,1.2,0,1.9.9,3.4.5,1.2-.3,1.8-1,2.1-.8.3.3-.6,1.3-.3,2.4.2.9,1,.9,1.5,1.7.8,1.1.4,2.7-.5,5.7-.7,2.3-1,3.5-2,4.9-.7.9-1.6,2.3-3.3,2.9-.5.2-1.9.7-3.5.3Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M885.4,506.1c-.4,0-.9,0-1.3-.2-1.7-.4-2.6-1.6-3-2.1-1.4-1.7-1.6-3.5-1.6-4.3-.3-3.5,1.4-6,2.4-7.4,1.2-1.8,2.8-4.1,4.8-4.1s0,0,0,0c.5,0,.9.2,1.4.3.6.2,1.2.4,2,.2.6-.1,1-.4,1.3-.6.4-.2.7-.4.9-.2.2.2,0,.5,0,.9-.2.5-.4,1-.2,1.6.1.5.4.7.8.9.2.2.5.4.8.7.9,1.2.4,2.8-.4,5.8-.7,2.3-1,3.5-2,4.9-.7,1-1.6,2.3-3.4,3-.3.1-1.2.5-2.2.5ZM886.5,488.3c-1.9,0-3.4,2.2-4.6,4-.9,1.4-2.6,3.9-2.3,7.3,0,.8.2,2.6,1.6,4.2.4.5,1.3,1.6,2.9,2h0c1.6.4,3-.1,3.4-.3,1.7-.7,2.6-2,3.3-2.9,1-1.4,1.3-2.6,2-4.9.9-3.1,1.2-4.6.5-5.6-.2-.3-.5-.5-.7-.7-.4-.3-.7-.5-.8-1.1-.2-.7,0-1.3.2-1.8.1-.3.2-.5.1-.6,0,0-.3,0-.6.2-.3.2-.8.4-1.4.6-.9.2-1.5,0-2.1-.2-.4-.1-.8-.3-1.3-.3,0,0,0,0,0,0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M903.8,523.6c0-.3-.7-.3-1.2-.8-.7-.8-.3-1.8-.4-2.8-.1-1.5-1.6-2.7-4.5-4.9-2.5-1.9-3.7-2.8-5-3.2-.7-.2-4.6-1.3-7,1-1.6,1.6-1.7,3.8-1.8,4.6,0,2,.6,3.5.8,3.8,1,2,2.6,2.9,4.5,3.8,2.8,1.5,5.3,1.8,6.4,1.9,2,.1,3.1.2,4.1-.5,1.1-.8,1.3-1.9,2.8-2.4.6-.2,1.3-.3,1.3-.5Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M897.4,527.2c-.5,0-1.1,0-1.8,0-1.5,0-3.9-.5-6.4-1.9-1.8-1-3.5-1.9-4.5-3.9-.3-.5-.9-2-.8-3.9,0-.8.1-3.1,1.8-4.7,2.1-2,5.4-1.5,7.1-1.1,1.3.4,2.5,1.3,5,3.2,2.9,2.2,4.4,3.4,4.6,5,0,.3,0,.6,0,.9,0,.7,0,1.3.4,1.8.2.2.5.4.7.5.3.1.5.2.5.4h0c0,.2-.3.3-.8.4-.2,0-.4.1-.6.2-.9.3-1.3.8-1.7,1.4-.3.3-.6.7-1,1-.7.5-1.4.6-2.4.6ZM889.9,511.5c-1.4,0-2.9.3-4,1.4-1.6,1.5-1.7,3.7-1.7,4.5,0,1.9.5,3.2.8,3.8,1,1.9,2.6,2.8,4.4,3.8,2.5,1.4,4.8,1.8,6.3,1.8,2,.1,3.1.2,4-.5.4-.3.7-.6,1-1,.4-.5.9-1.1,1.8-1.4.2,0,.4-.1.6-.2.3,0,.6-.2.6-.2h0c0,0-.2-.1-.3-.2-.2-.1-.6-.3-.8-.5-.5-.6-.5-1.3-.4-2,0-.3,0-.6,0-.9-.1-1.4-1.4-2.5-4.5-4.8-2.4-1.9-3.7-2.8-4.9-3.1-.6-.2-1.7-.4-2.9-.4Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M890.8,530.1c-.1-.5-.5-2-1.8-3.6-.6-.8-2.3-2.9-5.1-3.7-1-.3-2.5-.7-4,0-1.3.6-1.9,1.6-2.2,2-1,1.7-.8,3.5-.3,6.5.5,3,.7,4.5,2,5.5,1.2.8,2.5.8,3.2.8,1.2,0,1.3-.3,4.8-1.5,1.7-.6,2-.6,2.4-1,1.2-1.2,1.1-3.1,1.1-3.5,0-.6-.1-1.1-.2-1.5Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M882.4,537.6c-.8,0-2,0-3-.8-1.4-1-1.6-2.6-2.1-5.5-.5-3-.8-4.8.3-6.6.6-1,1.3-1.7,2.2-2.1,1.6-.7,3.1-.3,4.1,0,2.9.8,4.6,3,5.2,3.8,1.2,1.5,1.6,2.9,1.8,3.7,0,.3.2.8.2,1.5,0,1.6-.4,2.8-1.2,3.6-.4.4-.6.4-1.6.7-.2,0-.5.2-.9.3-1.3.4-2.2.7-2.8,1-.9.4-1.3.5-2,.5,0,0-.2,0-.3,0ZM881.6,522.4c-.6,0-1.2,0-1.8.4-.9.4-1.6,1.1-2.1,2-1,1.6-.8,3.3-.3,6.4.5,3.1.8,4.5,2,5.4,1.1.8,2.5.8,3.2.8.7,0,1-.1,2-.5.6-.2,1.4-.5,2.8-1,.3-.1.6-.2.9-.3,1-.3,1.2-.4,1.5-.7.7-.7,1.1-2,1.1-3.5,0-.6-.1-1.1-.2-1.4h0c-.2-.7-.6-2.1-1.8-3.6-.6-.8-2.2-2.9-5.1-3.7-.6-.2-1.3-.4-2.2-.4Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M876.8,518.5c-.2-.1-.9-.4-2.5,0-3.4,1-5.2,4-5.3,4.2-.2.3-2.4,4.1-1,6,.6.8,1.7,1,2.1,2.2.2.7,0,1.3.4,1.4.3.1.5-.3,1.1-.6,1-.5,1.7,0,2.7-.2.3,0,.7-.3,2-2.1,1.1-1.7,1.7-2.5,2-3.6.2-.6.8-2.6.1-4.8-.3-.9-.6-1.9-1.5-2.4Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M870.6,532.3s0,0-.1,0c-.3,0-.3-.4-.3-.8,0-.2,0-.5-.1-.7-.2-.7-.7-1-1.2-1.4-.3-.2-.6-.4-.9-.7-1.4-1.8.6-5.4,1-6.1.2-.3,2-3.3,5.4-4.2,1.1-.3,2-.3,2.6,0h0c1,.5,1.3,1.6,1.6,2.5.5,1.5.4,3.2-.1,4.8-.3,1.1-.9,1.9-2,3.6-1.2,1.7-1.7,2.1-2.1,2.2-.5.1-.8,0-1.2,0-.5,0-.9-.1-1.4.2-.2.1-.4.3-.6.4-.2.1-.3.3-.5.3ZM875.8,518.3c-.4,0-.9,0-1.4.2-3.4,1-5.2,4-5.2,4.1-.4.7-2.3,4.2-1,5.8.2.3.5.5.8.7.5.4,1,.7,1.3,1.5,0,.3.1.5.1.7,0,.3,0,.5.2.6,0,0,.2,0,.4-.2.2-.1.4-.3.6-.4.6-.3,1.1-.2,1.6-.2.4,0,.7,0,1.1,0,.2,0,.6-.2,1.9-2.1,1.1-1.7,1.7-2.5,2-3.5.5-1.6.6-3.2.1-4.7-.3-.8-.6-1.9-1.5-2.4h0c-.3-.1-.6-.2-1-.2Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <path d="M877.4,512.4s0,0,0,0c0,0,0-.1,0-.2.8-.9,1.6-1.9,2.3-2.8,2-2.6,3.3-4.9,3.8-5.7,1-1.7,1.4-2.6,2-4.1.4-1,.9-2.2,1.8-4,.7-1.6,2.2-3.8,3.3-5.6.6-.9,1.1-1.8,1.4-2.2,0,0,0,0,.2,0,0,0,0,0,0,.2-.2.4-.8,1.3-1.4,2.2-1.1,1.7-2.6,4-3.3,5.6-.8,1.8-1.4,3-1.8,4-.6,1.5-1,2.4-2,4.1-.5.9-1.8,3.1-3.8,5.8-.7,1-1.5,1.9-2.3,2.8,0,0,0,0,0,0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
              <path d="M877.4,512.4s0,0-.1,0c0,0,0-.1,0-.1.2,0,.5-.1.9-.2.6-.1,1.3-.3,1.9-.4,2.5-.7,5.6-1.6,8.7-2.9,1.8-.8,2.7-1.3,3.7-1.9,1-.6,2-1.2,4-2.1,2.2-.9,6.7-2.4,7.9-2.8,0,0,.1,0,.1,0s0,.1,0,.1c-1.3.4-5.8,1.8-7.9,2.8-2,.9-3,1.5-4,2.1-1,.6-1.9,1.2-3.7,2-3.1,1.3-6.2,2.2-8.7,2.9-.6.2-1.3.3-1.9.4-.4,0-.7.1-.9.2,0,0,0,0,0,0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
              <path d="M903.8,523.7s0,0,0,0c-1.2-.1-5.4-1-7.7-1.8-1.9-.6-2.7-1.1-4.1-1.9-1.1-.7-2.7-1.6-5.5-2.9-.3-.1-.5-.2-.8-.4-1.4-.7-3.2-1.5-5.7-2.9-.4-.2-1-.5-1.6-.8-.5-.2-.9-.5-1.1-.6,0,0,0,0,0-.2,0,0,0,0,.2,0,.2,0,.6.3,1.1.6.6.3,1.2.6,1.6.8,2.4,1.3,4.2,2.2,5.6,2.9.3.1.5.3.8.4,2.8,1.4,4.4,2.3,5.5,3,1.3.8,2.2,1.3,4,1.9,2.2.7,6.4,1.6,7.6,1.8,0,0,.1,0,0,.1,0,0,0,0-.1,0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
              <path d="M877.5,512.4s0,0,0,0c-.6-.8-1.3-1.9-1.8-2.9-.7-1.5-1.5-2.9-2.4-4.3-.9-1.4-1.5-2.2-4-5.3l-.8-1c-.3-.3-.8-1-1.4-1.7-1.1-1.3-2.4-2.9-3.4-4.2,0,0,0-.1,0-.2,0,0,.1,0,.2,0,1,1.2,2.3,2.8,3.3,4.2.6.8,1.1,1.4,1.4,1.7l.8,1c2.4,3,3.1,3.8,4,5.3.9,1.4,1.7,2.9,2.4,4.3.5,1,1.2,2.1,1.8,2.9,0,0,0,.1,0,.2,0,0,0,0,0,0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
              <path d="M885.9,536.7c0,0-.1,0-.1,0,0-.5-.5-1.8-.8-3-.2-.7-.4-1.4-.6-2-.4-1.5-.7-2.4-1.3-3.6-.3-.7-.6-1.5-1-2.6-.6-1.7-.9-2.7-1.2-3.6-.3-.9-.6-1.8-1.2-3.4v-.2c-.9-2.1-2-4.9-2.5-5.9,0,0,0-.1,0-.1,0,0,.1,0,.1,0,.5,1,1.6,3.8,2.4,5.9v.2c.7,1.6,1,2.5,1.3,3.4.3.9.6,1.9,1.2,3.6.4,1.1.7,1.9,1,2.6.5,1.2.8,2.1,1.3,3.6.2.6.4,1.3.6,2,.4,1.2.7,2.4.8,3,0,0,0,.1,0,.1,0,0,0,0,0,0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
              <path d="M870.5,532.3s0,0,0,0c0,0-.1,0,0-.1.1-.9,1-3.3,1.8-5.2.6-1.6,1.2-2.5,1.7-3.3.5-.8,1.1-1.6,1.5-3.2.2-.5.2-.9.4-1.5.1-.7.4-1.7.9-3.7.1-.5.3-1.2.4-1.8.1-.5.2-1,.3-1.2,0,0,0,0,.1,0,0,0,0,0,0,.1,0,.2-.2.7-.3,1.2-.1.6-.3,1.3-.4,1.8-.5,2-.7,3-.9,3.7-.1.6-.2.9-.4,1.5-.5,1.6-1,2.4-1.6,3.2-.5.8-1.1,1.6-1.7,3.3-.7,1.9-1.6,4.3-1.7,5.2,0,0,0,0-.1,0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
              <path d="M856,516.9c-2.3,0-4.8-.2-6.9-.8,0,0,0,0,0-.1,0,0,0,0,.1,0,5.4,1.5,12.8.7,15.1-.3.2-.1.5-.2.8-.3,1.8-.8,4.2-1.9,6.5-1.3h0c.4.1,1.1.3,2.1.2,1.2-.2,3.1-1.4,3.7-1.9,0,0,.1,0,.2,0,0,0,0,.1,0,.2-.6.5-2.5,1.7-3.8,1.9-1,.1-1.8,0-2.2-.2h0c-2.2-.6-4.6.5-6.3,1.3-.3.1-.6.2-.8.4-1.4.6-4.7,1.1-8.3,1.1Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
            </g>
            <g id="Desk" filter="url(#drop-shadow-23)">
              <g>
                <g>
                  <rect x="723.3" y="625.1" width="8.1" height="1.5" transform="translate(1684.2 554.1) rotate(135)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M731.2,623.5l-6.2,6.2-1.5-1.5,6.2-6.2,1.5,1.5ZM725,628.8l5.3-5.3-.6-.6-5.3,5.3.6.6Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="723.3" y="646.2" width="8.1" height="1.5" transform="translate(784.2 1618.8) rotate(-135)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M731.2,649.3l-1.5,1.5-6.2-6.2,1.5-1.5,6.2,6.2ZM729.7,649.9l.6-.6-5.3-5.3-.6.6,5.3,5.3Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <g>
                    <path d="M721.6,626.5h10.5c3.5,0,6.3,2.8,6.3,6.3v7.3c0,3.5-2.8,6.3-6.3,6.3h-10.5c-3.5,0-6.3-2.8-6.3-6.3v-7.3c0-3.5,2.8-6.3,6.3-6.3Z" transform="translate(90.4 1363.3) rotate(-90)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                    <path d="M737.1,626.8v19.3c0,1.2-1,2.2-2.2,2.2h-16.1c-1.2,0-2.2-1-2.2-2.2v-19.3c0-1.2,1-2.2,2.2-2.2h16.1c1.2,0,2.2,1,2.2,2.2ZM717.2,646.1c0,.9.7,1.6,1.6,1.6h16.1c.9,0,1.6-.7,1.6-1.6v-19.3c0-.9-.7-1.6-1.6-1.6h-16.1c-.9,0-1.6.7-1.6,1.6v19.3Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  </g>
                  <g>
                    <path d="M704.6,625.3v22.2c0,2.7,2.6,4.5,5.1,3.6l6.2-2.1c1.3-.4,2.1-1.6,2.1-2.9v-19.3c0-1.3-.8-2.5-2.1-2.9l-6.2-2.1c-2.5-.9-5.1,1-5.1,3.6Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                    <path d="M718.3,626.8v19.3c0,1.5-.9,2.8-2.3,3.2l-6.2,2.1c-1.3.4-2.7.3-3.8-.5-1.1-.8-1.7-2-1.7-3.4v-22.2c0-1.4.6-2.6,1.7-3.4s2.5-1,3.8-.5l6.2,2.1c1.4.5,2.3,1.8,2.3,3.2ZM704.9,647.5c0,1.2.5,2.2,1.5,2.9,1,.7,2.1.8,3.2.5l6.2-2.1c1.1-.4,1.9-1.5,1.9-2.7v-19.3c0-1.2-.8-2.3-1.9-2.7l-6.2-2.1c-1.1-.4-2.3-.2-3.2.5-1,.7-1.5,1.7-1.5,2.9v22.2Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  </g>
                  <g>
                    <rect x="721.5" y="642.3" width="3.1" height="16.6" rx="1.5" ry="1.5" transform="translate(72.4 1373.7) rotate(-90)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                    <path d="M731.7,649.9v1.4c0,.6-.5,1.1-1.1,1.1h-15c-.6,0-1.1-.5-1.1-1.1v-1.4c0-.6.5-1.1,1.1-1.1h15c.6,0,1.1.5,1.1,1.1ZM715.1,651.4c0,.3.2.5.5.5h15c.3,0,.5-.2.5-.5v-1.4c0-.3-.2-.5-.5-.5h-15c-.3,0-.5.2-.5.5v1.4Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  </g>
                  <g>
                    <rect x="721.5" y="613.9" width="3.1" height="16.6" rx="1.5" ry="1.5" transform="translate(1345.3 -100.9) rotate(90)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                    <path d="M731.7,621.5v1.4c0,.6-.5,1.1-1.1,1.1h-15c-.6,0-1.1-.5-1.1-1.1v-1.4c0-.6.5-1.1,1.1-1.1h15c.6,0,1.1.5,1.1,1.1ZM715.1,622.9c0,.3.2.5.5.5h15c.3,0,.5-.2.5-.5v-1.4c0-.3-.2-.5-.5-.5h-15c-.3,0-.5.2-.5.5v1.4Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  </g>
                </g>
              </g>
              <g>
                <path d="M703.6,599.8h15.2c8,0,14.4,6.5,14.4,14.4v54.3c0,1.5,1.2,2.7,2.7,2.7h30.8c1.5,0,2.7-1.2,2.7-2.7v-90c0-1.5-1.2-2.7-2.7-2.7h-63.1c-1.5,0-2.7,1.2-2.7,2.7v18.6c0,1.5,1.2,2.7,2.7,2.7Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M769.7,578.5v90c0,1.6-1.3,3-3,3h-30.8c-1.6,0-3-1.3-3-3v-54.3c0-7.8-6.3-14.1-14.1-14.1h-15.2c-1.6,0-3-1.3-3-3v-18.6c0-1.6,1.3-3,3-3h63.1c1.6,0,3,1.3,3,3ZM733.5,668.5c0,1.3,1.1,2.4,2.4,2.4h30.8c1.3,0,2.4-1.1,2.4-2.4v-90c0-1.3-1.1-2.4-2.4-2.4h-63.1c-1.3,0-2.4,1.1-2.4,2.4v18.6c0,1.3,1.1,2.4,2.4,2.4h15.2c8.1,0,14.7,6.6,14.7,14.7v54.3Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <path d="M765.9,575.8v95.3c0,.2-.1.3-.3.3s-.3-.1-.3-.3v-95.3c0-.2.1-.3.3-.3s.3.1.3.3Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              <g>
                <g>
                  <path d="M755.2,622c-1.5,0-2.6,1.9-2.6,4.2s1.2,4.2,2.6,4.2,2.6-1.9,2.6-4.2-1.2-4.2-2.6-4.2Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M758,626.2c0,2.4-1.2,4.3-2.8,4.3s-2.8-1.9-2.8-4.3,1.3-4.3,2.8-4.3,2.8,1.9,2.8,4.3ZM752.8,626.2c0,2.2,1.1,4,2.5,4s2.5-1.8,2.5-4-1.1-4-2.5-4-2.5,1.8-2.5,4Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M759.8,604.5l-4.8,2.9c-.3.2-.5.5-.5.9v36.1c0,.3.2.7.5.9l4.8,2.9c.4.2.9,0,.9-.5v-42.4c0-.5-.5-.8-.9-.5Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M760.9,605v42.4c0,.3-.1.5-.4.7-.2.1-.5.1-.8,0l-4.8-2.9c-.3-.2-.6-.6-.6-1v-36.1c0-.4.2-.8.6-1l4.8-2.9c.2-.1.5-.1.8,0,.2.1.4.4.4.7ZM754.7,644.2c0,.3.2.6.4.7l4.8,2.9c.1,0,.3,0,.5,0,.1,0,.2-.2.2-.4v-42.4c0-.2,0-.3-.2-.4-.1,0-.3,0-.5,0h0s-4.8,2.9-4.8,2.9c-.3.2-.4.4-.4.7v36.1Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
              </g>
              <g>
                <rect x="731.3" y="620.3" width="26.4" height="11.8" rx="5.2" ry="5.2" transform="translate(118.3 1370.7) rotate(-90)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M750.6,614.6v23.3c0,1-.8,1.7-1.7,1.7h-8.7c-1,0-1.7-.8-1.7-1.7v-23.3c0-1,.8-1.7,1.7-1.7h8.7c1,0,1.7.8,1.7,1.7ZM738.8,637.8c0,.8.6,1.4,1.4,1.4h8.7c.8,0,1.4-.6,1.4-1.4v-23.3c0-.8-.6-1.4-1.4-1.4h-8.7c-.8,0-1.4.6-1.4,1.4v23.3Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M745,641.3h0c1.8,0,3.3,1.5,3.3,3.3v2.2c0,1.4-1.1,2.5-2.5,2.5h-1.6c-1.4,0-2.5-1.1-2.5-2.5v-2.2c0-1.8,1.5-3.3,3.3-3.3Z" transform="translate(99.7 1390.3) rotate(-90)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M749.2,644.5v1.6c0,1.5-1.2,2.7-2.7,2.7h-2.2c-1.9,0-3.5-1.6-3.5-3.5s1.6-3.5,3.5-3.5h2.2c1.5,0,2.7,1.2,2.7,2.7ZM741.1,645.3c0,1.7,1.4,3.2,3.2,3.2h2.2c1.3,0,2.4-1.1,2.4-2.4v-1.6c0-1.3-1.1-2.4-2.4-2.4h-2.2c-1.7,0-3.2,1.4-3.2,3.2Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <path d="M749.2,645.3c0,0,0,.2-.2.2h-8c0,0-.2,0-.2-.2s0-.2.2-.2h8c0,0,.2,0,.2.2Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              <g>
                <g>
                  <rect x="740.3" y="588" width="12.5" height="17.5" transform="translate(149.8 1343.3) rotate(-90)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M755.4,590.4v12.8h-17.8v-12.8h17.8ZM755.1,602.9v-12.2h-17.2v12.2h17.2Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="739.5" y="583.8" width="12.5" height="17.5" transform="translate(441.6 1495.2) rotate(-109.8)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M756.3,595.5l-16.7,6-4.3-12,16.7-6,4.3,12ZM739.8,601.2l16.2-5.8-4.1-11.5-16.2,5.8,4.1,11.5Z" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
              </g>
            </g>
            <g id="Rug">
              <g opacity=".6">
                <g>
                  <g>
                    <g>
                      <path d="M624.8,268.9s0,0,0,0l.5-11.2c.2-3.6,1.5-6.6,3.8-8.7,2.2-2,5.2-3,8.6-3s.8,0,1.2,0l7.4.5h0c0,0,.8,7.5.8,7.5.4,4.2-.5,7.7-2.8,10.4-2.1,2.4-5.1,3.8-8.8,4l-10.8.6ZM637.6,246.2c-3.4,0-6.3,1-8.5,2.9-2.3,2-3.6,5-3.8,8.5l-.5,11,10.7-.6c3.6-.2,6.6-1.5,8.6-3.9,2.2-2.6,3.1-6.1,2.7-10.2l-.8-7.3-7.3-.5c-.4,0-.8,0-1.2,0Z" fill="#fff"/>
                      <path d="M637.6,245.5c-3.6,0-6.7,1.1-9,3.1-2.4,2.2-3.8,5.3-4,9l-.5,11.1c0,.2,0,.3.2.5,0,0,0,0,0,0,.1.1.3.2.4.2s0,0,0,0l10.8-.6c3.8-.2,7-1.6,9.1-4.2,2.3-2.7,3.3-6.4,2.9-10.7l-.8-7.4c0-.1,0-.3-.2-.4-.1-.1-.2-.2-.4-.2l-7.4-.5c-.4,0-.8,0-1.2,0h0ZM625.4,268.2l.5-10.5c.2-3.4,1.4-6.2,3.6-8.2,2.1-1.9,4.9-2.8,8.2-2.8s.7,0,1.1,0l6.9.4.7,6.9c.4,4-.5,7.4-2.6,9.8-1.9,2.3-4.8,3.6-8.3,3.7l-10.1.5h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M611.7,291.4c-.4,0-.8,0-1.2,0l-7.4-.5c0,0,0,0,0,0l-.8-7.4c-.4-4.2.5-7.7,2.8-10.4,2.1-2.4,5.1-3.8,8.8-4l10.8-.6h.1c0,.1-.5,11.2-.5,11.2-.2,3.6-1.5,6.6-3.8,8.7-2.2,2-5.2,3-8.6,3ZM613.8,269.3c-3.6.2-6.6,1.5-8.6,3.9-2.2,2.6-3.1,6.1-2.7,10.2l.8,7.3,7.3.5c.4,0,.8,0,1.2,0,3.4,0,6.3-1,8.5-2.9,2.3-2,3.6-5,3.8-8.5l.5-11-10.7.6Z" fill="#fff"/>
                      <path d="M624.5,268s0,0,0,0l-10.8.6c-3.8.2-7,1.6-9.1,4.2-2.3,2.7-3.3,6.4-2.9,10.7l.8,7.4c0,.3.3.5.6.5l7.4.5c.4,0,.8,0,1.2,0,3.6,0,6.7-1.1,9-3.1,2.4-2.2,3.8-5.3,4-9l.5-11.1c0-.2,0-.3-.2-.5-.1-.1-.3-.2-.4-.2h0ZM623.9,269.2l-.5,10.5c-.2,3.4-1.4,6.2-3.6,8.2-2.1,1.9-4.9,2.8-8.2,2.8s-.7,0-1.1,0l-6.9-.4-.7-6.9c-.4-4,.5-7.4,2.6-9.8,1.9-2.3,4.8-3.6,8.3-3.7l10.1-.5h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M637.4,291.2c-3.3,0-6.3-1-8.4-2.9-2.4-2.1-3.8-5.1-4-8.8l-.6-10.8h.1c0-.1,11.1.4,11.1.4,3.4.2,6.2,1.3,8.3,3.4.1.1.3.3.4.4,2.2,2.5,3.2,5.8,3,9.8l-.5,7.4c0,0,0,0,0,0l-7.4.8c-.6,0-1.3.1-1.9.1ZM625.2,279.6c.2,3.6,1.5,6.6,3.9,8.6,2.1,1.8,5,2.8,8.3,2.8h0c.6,0,1.2,0,1.9,0l7.3-.8.5-7.3c.3-3.9-.8-7.2-2.9-9.6-2-2.3-5-3.6-8.5-3.8l-11-.5.5,10.7Z" fill="#fff"/>
                      <path d="M624.6,268.2c-.2,0-.3,0-.4.2-.1.1-.2.3-.2.5l.6,10.8c.2,3.8,1.6,7,4.2,9.1,2.3,2,5.3,3,8.8,3s1.3,0,2-.1l7.4-.8c.3,0,.5-.3.5-.6l.5-7.4c.3-4.1-.8-7.6-3.1-10.2-.1-.2-.3-.3-.4-.5-2.1-2.1-5.1-3.4-8.6-3.5l-11.1-.5s0,0,0,0h0ZM637.4,290.5c-3.2,0-5.9-.9-8-2.7-2.3-1.9-3.6-4.8-3.7-8.3l-.5-10.1,10.5.5c3.4.2,6.2,1.4,8.2,3.6,2.1,2.3,3,5.5,2.8,9.3l-.4,6.9-6.9.7c-.6,0-1.2,0-1.8,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M613.6,268.2c-3.6-.2-6.6-1.5-8.7-3.8-2.2-2.5-3.2-5.8-3-9.8l.5-7.4c0,0,0,0,0,0l7.4-.8c.6,0,1.3-.1,1.9-.1,3.3,0,6.3,1,8.4,2.9.2.2.4.4.6.6,2,2,3.2,4.9,3.4,8.2l.6,10.8h-.1c0,.1-11.1-.4-11.1-.4ZM611.9,246.4c-.6,0-1.2,0-1.9,0l-7.3.8-.5,7.3c-.3,3.9.8,7.2,2.9,9.6,2,2.3,5,3.6,8.5,3.8l11,.5-.5-10.7c-.2-3.6-1.5-6.6-3.9-8.6-2.1-1.8-5-2.8-8.3-2.8Z" fill="#fff"/>
                      <path d="M611.9,245.7c-.6,0-1.3,0-2,.1l-7.4.8c-.3,0-.5.3-.5.6l-.5,7.4c-.3,4.1.8,7.6,3.1,10.2,2.2,2.4,5.3,3.8,9,4l11.1.5s0,0,0,0c.2,0,.3,0,.4-.2.1-.1.2-.3.2-.5l-.6-10.8c-.2-3.5-1.4-6.4-3.5-8.5-.2-.2-.4-.4-.6-.6-2.3-2-5.3-3-8.8-3h0ZM624.1,268l-10.5-.5c-3.4-.2-6.2-1.4-8.2-3.6-2.1-2.3-3-5.5-2.8-9.3l.4-6.9,6.9-.7c.6,0,1.2,0,1.8,0,3.2,0,5.9.9,8,2.7,2.3,1.9,3.6,4.8,3.7,8.3l.5,10.1h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M645.6,289.8s0,0,0,0l-42.1-42.1s0-.1,0-.1h.1l42.1,42.1s0,.1,0,.1h0Z" fill="#fff"/>
                    <path d="M603.5,246.9c-.2,0-.3,0-.4.2-.2.2-.2.6,0,.9l42.1,42.1c.1.1.3.2.4.2s.3,0,.4-.2c.2-.2.2-.6,0-.9l-42.1-42.1c-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M603.6,289.8s0,0,0,0h0c0-.1,41.6-41.8,41.6-41.8h.1s0,.1,0,.1l-41.6,41.6h0Z" fill="#fff"/>
                    <path d="M645.3,247.4c-.2,0-.3,0-.4.2l-41.6,41.6c-.2.2-.2.6,0,.9.1.1.3.2.4.2s.3,0,.4-.2l41.6-41.6c.2-.2.2-.6,0-.9-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M625.2,314s0,0,0,0l.5-11.2c.2-3.6,1.5-6.6,3.8-8.7,2.2-2,5.2-3,8.6-3s.8,0,1.2,0l7.4.5h0c0,0,.8,7.5.8,7.5.4,4.2-.5,7.8-2.8,10.4-2.1,2.4-5.1,3.8-8.8,4l-10.8.6ZM638,291.2c-3.4,0-6.3,1-8.5,2.9-2.3,2-3.6,5-3.8,8.5l-.5,11,10.7-.6c3.6-.2,6.6-1.5,8.6-3.9,2.2-2.6,3.1-6.1,2.7-10.2l-.8-7.3-7.3-.5c-.4,0-.8,0-1.2,0Z" fill="#fff"/>
                      <path d="M638,290.5c-3.6,0-6.7,1.1-9,3.1-2.4,2.2-3.8,5.3-4,9l-.5,11.1c0,.2,0,.3.2.5,0,0,0,0,0,0,.1.1.3.2.4.2s0,0,0,0l10.8-.6c3.8-.2,7-1.6,9.1-4.2,2.3-2.7,3.3-6.4,2.9-10.7l-.8-7.4c0-.1,0-.3-.2-.4-.1-.1-.2-.2-.4-.2l-7.4-.5c-.4,0-.8,0-1.2,0h0ZM625.8,313.2l.5-10.5c.2-3.4,1.4-6.2,3.6-8.2,2.1-1.9,4.9-2.8,8.2-2.8s.7,0,1.1,0l6.9.4.7,6.9c.4,4-.5,7.4-2.6,9.8-1.9,2.3-4.8,3.6-8.3,3.7l-10.1.5h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M612.1,336.5c-.4,0-.8,0-1.2,0l-7.4-.5c0,0,0,0,0,0l-.8-7.4c-.4-4.2.5-7.7,2.8-10.4,2.1-2.4,5.1-3.8,8.8-4l10.8-.6h.1c0,.1-.5,11.2-.5,11.2-.2,3.6-1.5,6.6-3.8,8.7-2.2,2-5.2,3-8.6,3ZM614.2,314.3c-3.6.2-6.6,1.5-8.6,3.9-2.2,2.6-3.1,6.1-2.7,10.2l.8,7.3,7.3.5c.4,0,.8,0,1.2,0,3.4,0,6.3-1,8.5-2.9,2.3-2,3.6-5,3.8-8.5l.5-11-10.7.6Z" fill="#fff"/>
                      <path d="M625,313s0,0,0,0l-10.8.6c-3.8.2-7,1.6-9.1,4.2-2.3,2.7-3.3,6.4-2.9,10.7l.8,7.4c0,.3.3.5.6.5l7.4.5c.4,0,.8,0,1.2,0,3.6,0,6.7-1.1,9-3.1,2.4-2.2,3.8-5.3,4-9l.5-11.1c0-.2,0-.3-.2-.5-.1-.1-.3-.2-.4-.2h0ZM624.3,314.3l-.5,10.5c-.2,3.4-1.4,6.2-3.6,8.2-2.1,1.9-4.9,2.8-8.2,2.8s-.7,0-1.1,0l-6.9-.4-.7-6.9c-.4-4,.5-7.4,2.6-9.8,1.9-2.3,4.8-3.6,8.3-3.7l10.1-.5h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M637.8,336.3c-3.3,0-6.3-1-8.4-2.9-2.4-2.1-3.8-5.1-4-8.8l-.6-10.8h.1c0-.1,11.1.4,11.1.4,3.4.2,6.2,1.3,8.3,3.4.1.1.3.3.4.4,2.2,2.5,3.2,5.8,3,9.8l-.5,7.4c0,0,0,0,0,0l-7.4.8c-.6,0-1.3.1-1.9.1ZM625.6,324.7c.2,3.6,1.5,6.6,3.9,8.6,2.1,1.8,5,2.8,8.3,2.8h0c.6,0,1.2,0,1.9,0l7.3-.8.5-7.3c.3-3.9-.8-7.2-2.9-9.6-2-2.3-5-3.6-8.5-3.8l-11-.5.5,10.7Z" fill="#fff"/>
                      <path d="M625,313.3c-.2,0-.3,0-.4.2-.1.1-.2.3-.2.5l.6,10.8c.2,3.8,1.6,7,4.2,9.1,2.3,2,5.3,3,8.8,3s1.3,0,2-.1l7.4-.8c.3,0,.5-.3.5-.6l.5-7.4c.3-4.1-.8-7.6-3.1-10.2-.1-.2-.3-.3-.4-.5-2.1-2.1-5.1-3.4-8.6-3.5l-11.1-.5s0,0,0,0h0ZM637.8,335.6c-3.2,0-5.9-.9-8-2.7-2.3-1.9-3.6-4.8-3.7-8.3l-.5-10.1,10.5.5c3.4.2,6.2,1.4,8.2,3.6,2.1,2.3,3,5.5,2.8,9.3l-.4,6.9-6.9.7c-.6,0-1.2,0-1.8,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M614,313.2c-3.6-.2-6.6-1.5-8.7-3.8-2.2-2.5-3.2-5.8-3-9.8l.5-7.4c0,0,0,0,0,0l7.4-.8c.6,0,1.3-.1,1.9-.1,3.3,0,6.3,1,8.4,2.9.2.2.4.4.6.6,2,2,3.2,4.9,3.4,8.2l.6,10.8h-.1c0,.1-11.1-.4-11.1-.4ZM612.3,291.4c-.6,0-1.2,0-1.9,0l-7.3.8-.5,7.3c-.3,3.9.8,7.2,2.9,9.6,2,2.3,5,3.6,8.5,3.8l11,.5-.5-10.7c-.2-3.6-1.5-6.6-3.9-8.6-2.1-1.8-5-2.8-8.3-2.8Z" fill="#fff"/>
                      <path d="M612.3,290.7c-.6,0-1.3,0-2,.1l-7.4.8c-.3,0-.5.3-.5.6l-.5,7.4c-.3,4.1.8,7.6,3.1,10.2,2.2,2.4,5.3,3.8,9,4l11.1.5s0,0,0,0c.2,0,.3,0,.4-.2.1-.1.2-.3.2-.5l-.6-10.8c-.2-3.5-1.4-6.4-3.5-8.5-.2-.2-.4-.4-.6-.6-2.3-2-5.3-3-8.8-3h0ZM624.5,313l-10.5-.5c-3.4-.2-6.2-1.4-8.2-3.6-2.1-2.3-3-5.5-2.8-9.3l.4-6.9,6.9-.7c.6,0,1.2,0,1.8,0,3.2,0,5.9.9,8,2.7,2.3,1.9,3.6,4.8,3.7,8.3l.5,10.1h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M646,334.8s0,0,0,0l-42.1-42.1s0-.1,0-.1h.1l42.1,42.1s0,.1,0,.1h0Z" fill="#fff"/>
                    <path d="M603.9,292c-.2,0-.3,0-.4.2-.2.2-.2.6,0,.9l42.1,42.1c.1.1.3.2.4.2s.3,0,.4-.2c.2-.2.2-.6,0-.9l-42.1-42.1c-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M604,334.8s0,0,0,0,0-.1,0-.1l41.6-41.6h.1s0,.1,0,.1l-41.6,41.6h0Z" fill="#fff"/>
                    <path d="M645.7,292.5c-.2,0-.3,0-.4.2l-41.6,41.6c-.2.2-.2.6,0,.9.1.1.3.2.4.2s.3,0,.4-.2l41.6-41.6c.2-.2.2-.6,0-.9-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M625.5,358.8s0,0,0,0l.5-11.2c.2-3.6,1.5-6.6,3.8-8.7,2.2-2,5.2-3,8.6-3s.8,0,1.2,0l7.4.5h0c0,0,.8,7.5.8,7.5.4,4.2-.5,7.7-2.8,10.4-2.1,2.4-5.1,3.8-8.8,4l-10.8.6ZM638.3,336.1c-3.4,0-6.3,1-8.5,2.9-2.3,2-3.6,5-3.8,8.5l-.5,11,10.7-.6c3.6-.2,6.6-1.5,8.6-3.9,2.2-2.6,3.1-6.1,2.7-10.2l-.8-7.3-7.3-.5c-.4,0-.8,0-1.2,0Z" fill="#fff"/>
                      <path d="M638.3,335.3c-3.6,0-6.7,1.1-9,3.1-2.4,2.2-3.8,5.3-4,9l-.5,11.1c0,.2,0,.3.2.5,0,0,0,0,0,0,.1.1.3.2.4.2s0,0,0,0l10.8-.6c3.8-.2,7-1.6,9.1-4.2,2.3-2.7,3.3-6.4,2.9-10.7l-.8-7.4c0-.1,0-.3-.2-.4s-.2-.2-.4-.2l-7.4-.5c-.4,0-.8,0-1.2,0h0ZM626.1,358l.5-10.5c.2-3.4,1.4-6.2,3.6-8.2,2.1-1.9,4.9-2.8,8.2-2.8s.7,0,1.1,0l6.9.4.7,6.9c.4,4-.5,7.4-2.6,9.8-1.9,2.3-4.8,3.6-8.3,3.7l-10.1.5h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M612.4,381.3c-.4,0-.8,0-1.2,0l-7.4-.5c0,0,0,0,0,0l-.8-7.4c-.4-4.2.5-7.7,2.8-10.4,2.1-2.4,5.1-3.8,8.8-4l10.8-.6h.1c0,.1-.5,11.2-.5,11.2-.2,3.6-1.5,6.6-3.8,8.7-2.2,2-5.2,3-8.6,3ZM614.5,359.1c-3.6.2-6.6,1.5-8.6,3.9-2.2,2.6-3.1,6.1-2.7,10.2l.8,7.3,7.3.5c.4,0,.8,0,1.2,0,3.4,0,6.3-1,8.5-2.9,2.3-2,3.6-5,3.8-8.5l.5-11-10.7.6Z" fill="#fff"/>
                      <path d="M625.3,357.8s0,0,0,0l-10.8.6c-3.8.2-7,1.6-9.1,4.2-2.3,2.7-3.3,6.4-2.9,10.7l.8,7.4c0,.3.3.5.6.5l7.4.5c.4,0,.8,0,1.2,0,3.6,0,6.7-1.1,9-3.1,2.4-2.2,3.8-5.3,4-9l.5-11.1c0-.2,0-.3-.2-.5-.1-.1-.3-.2-.4-.2h0ZM624.6,359.1l-.5,10.5c-.2,3.4-1.4,6.2-3.6,8.2-2.1,1.9-4.9,2.8-8.2,2.8s-.7,0-1.1,0l-6.9-.4-.7-6.9c-.4-4,.5-7.4,2.6-9.8,1.9-2.3,4.8-3.6,8.3-3.7l10.1-.5h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M638.1,381.1c-3.3,0-6.3-1-8.4-2.9-2.4-2.1-3.8-5.1-4-8.8l-.6-10.8h.1c0-.1,11.1.4,11.1.4,3.4.2,6.2,1.3,8.3,3.4.1.1.3.3.4.4,2.2,2.5,3.2,5.8,3,9.8l-.5,7.4c0,0,0,0,0,0l-7.4.8c-.6,0-1.3.1-1.9.1ZM625.9,369.5c.2,3.6,1.5,6.6,3.9,8.6,2.1,1.8,5,2.8,8.3,2.8h0c.6,0,1.2,0,1.9,0l7.3-.8.5-7.3c.3-3.9-.8-7.2-2.9-9.6-2-2.3-5-3.6-8.5-3.8l-11-.5.5,10.7Z" fill="#fff"/>
                      <path d="M625.3,358.1c-.2,0-.3,0-.4.2-.1.1-.2.3-.2.5l.6,10.8c.2,3.8,1.6,7,4.2,9.1,2.3,2,5.3,3,8.8,3s1.3,0,2-.1l7.4-.8c.3,0,.5-.3.5-.6l.5-7.4c.3-4.1-.8-7.6-3.1-10.2-.1-.2-.3-.3-.4-.5-2.1-2.1-5.1-3.4-8.6-3.5l-11.1-.5s0,0,0,0h0ZM638.1,380.4c-3.2,0-5.9-.9-8-2.7-2.3-1.9-3.6-4.8-3.7-8.3l-.5-10.1,10.5.5c3.4.2,6.2,1.4,8.2,3.6,2.1,2.3,3,5.5,2.8,9.3l-.4,6.9-6.9.7c-.6,0-1.2,0-1.8,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M614.3,358c-3.6-.2-6.6-1.5-8.7-3.8-2.2-2.5-3.2-5.8-3-9.8l.5-7.4c0,0,0,0,0,0l7.4-.8c.6,0,1.3-.1,1.9-.1,3.3,0,6.3,1,8.4,2.9.2.2.4.4.6.6,2,2,3.2,4.9,3.4,8.2l.6,10.8h-.1c0,.1-11.1-.4-11.1-.4ZM612.6,336.2c-.6,0-1.2,0-1.9,0l-7.3.8-.5,7.3c-.3,3.9.8,7.2,2.9,9.6,2,2.3,5,3.6,8.5,3.8l11,.5-.6-10.7c-.2-3.6-1.5-6.6-3.9-8.6-2.1-1.8-5-2.8-8.3-2.8Z" fill="#fff"/>
                      <path d="M612.6,335.5c-.6,0-1.3,0-2,.1l-7.4.8c-.3,0-.5.3-.5.6l-.5,7.4c-.3,4.1.8,7.6,3.1,10.2,2.2,2.4,5.3,3.8,9,4l11.1.5s0,0,0,0c.2,0,.3,0,.4-.2.1-.1.2-.3.2-.5l-.6-10.8c-.2-3.5-1.4-6.4-3.5-8.5-.2-.2-.4-.4-.6-.6-2.3-2-5.3-3-8.8-3h0ZM624.8,357.8l-10.5-.5c-3.4-.2-6.2-1.4-8.2-3.6-2.1-2.3-3-5.5-2.8-9.3l.4-6.9,6.9-.7c.6,0,1.2,0,1.8,0,3.2,0,5.9.9,8,2.7,2.3,1.9,3.6,4.8,3.7,8.3l.5,10.1h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M646.3,379.6s0,0,0,0l-42.1-42.1s0-.1,0-.1h.1l42.1,42.1s0,.1,0,.1h0Z" fill="#fff"/>
                    <path d="M604.2,336.8c-.2,0-.3,0-.4.2-.2.2-.2.6,0,.9l42.1,42.1c.1.1.3.2.4.2s.3,0,.4-.2c.2-.2.2-.6,0-.9l-42.1-42.1c-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M604.3,379.6s0,0,0,0,0-.1,0-.1l41.6-41.6h.1s0,.1,0,.1l-41.6,41.6h0Z" fill="#fff"/>
                    <path d="M646,337.3c-.2,0-.3,0-.4.2l-41.6,41.6c-.2.2-.2.6,0,.9.1.1.3.2.4.2s.3,0,.4-.2l41.6-41.6c.2-.2.2-.6,0-.9s-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M625.9,403.8s0,0,0,0l.5-11.2c.2-3.6,1.5-6.6,3.8-8.7,2.2-2,5.2-3,8.6-3s.8,0,1.2,0l7.4.5h0c0,0,.8,7.5.8,7.5.4,4.2-.5,7.7-2.8,10.4-2.1,2.4-5.1,3.8-8.8,4l-10.8.6ZM638.7,381.1c-3.4,0-6.3,1-8.5,2.9-2.3,2-3.6,5-3.8,8.5l-.5,11,10.7-.6c3.6-.2,6.6-1.5,8.6-3.9,2.2-2.6,3.1-6.1,2.7-10.2l-.8-7.3-7.3-.5c-.4,0-.8,0-1.2,0Z" fill="#fff"/>
                      <path d="M638.7,380.4c-3.6,0-6.7,1.1-9,3.1-2.4,2.2-3.8,5.3-4,9l-.5,11.1c0,.2,0,.3.2.5,0,0,0,0,0,0,.1.1.3.2.4.2s0,0,0,0l10.8-.6c3.8-.2,7-1.6,9.1-4.2,2.3-2.7,3.3-6.4,2.9-10.7l-.8-7.4c0-.1,0-.3-.2-.4s-.2-.2-.4-.2l-7.4-.5c-.4,0-.8,0-1.2,0h0ZM626.5,403.1l.5-10.5c.2-3.4,1.4-6.2,3.6-8.2,2.1-1.9,4.9-2.8,8.2-2.8s.7,0,1.1,0l6.9.4.7,6.9c.4,4-.5,7.4-2.6,9.8-1.9,2.3-4.8,3.6-8.3,3.7l-10.1.5h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M612.8,426.3c-.4,0-.8,0-1.2,0l-7.4-.5c0,0,0,0,0,0l-.8-7.4c-.4-4.2.5-7.7,2.8-10.4,2.1-2.4,5.1-3.8,8.8-4l10.8-.6h.1c0,.1-.5,11.2-.5,11.2-.2,3.6-1.5,6.6-3.8,8.7-2.2,2-5.2,3-8.6,3ZM614.9,404.2c-3.6.2-6.6,1.5-8.6,3.9-2.2,2.6-3.1,6.1-2.7,10.2l.8,7.3,7.3.5c.4,0,.8,0,1.2,0,3.4,0,6.3-1,8.5-2.9,2.3-2,3.6-5,3.8-8.5l.5-11-10.7.6Z" fill="#fff"/>
                      <path d="M625.7,402.9s0,0,0,0l-10.8.6c-3.8.2-7,1.6-9.1,4.2-2.3,2.7-3.3,6.4-2.9,10.7l.8,7.4c0,.3.3.5.6.5l7.4.5c.4,0,.8,0,1.2,0,3.6,0,6.7-1.1,9-3.1,2.4-2.2,3.8-5.3,4-9l.5-11.1c0-.2,0-.3-.2-.5-.1-.1-.3-.2-.4-.2h0ZM625,404.1l-.5,10.5c-.2,3.4-1.4,6.2-3.6,8.2-2.1,1.9-4.9,2.8-8.2,2.8s-.7,0-1.1,0l-6.9-.4-.7-6.9c-.4-4,.5-7.4,2.6-9.8,1.9-2.3,4.8-3.6,8.3-3.7l10.1-.5h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M638.5,426.1c-3.3,0-6.3-1-8.4-2.9-2.4-2.1-3.8-5.1-4-8.8l-.6-10.8h.1c0-.1,11.1.4,11.1.4,3.4.2,6.2,1.3,8.3,3.4.1.1.3.3.4.4,2.2,2.5,3.2,5.8,3,9.8l-.5,7.4c0,0,0,0,0,0l-7.4.8c-.6,0-1.3.1-1.9.1ZM626.3,414.5c.2,3.6,1.5,6.6,3.9,8.6,2.1,1.8,5,2.8,8.3,2.8h0c.6,0,1.2,0,1.9,0l7.3-.8.5-7.3c.3-3.9-.8-7.2-2.9-9.6-2-2.3-5-3.6-8.5-3.8l-11-.5.6,10.7Z" fill="#fff"/>
                      <path d="M625.7,403.1c-.2,0-.3,0-.4.2-.1.1-.2.3-.2.5l.6,10.8c.2,3.8,1.6,7,4.2,9.1,2.3,2,5.3,3,8.8,3s1.3,0,2-.1l7.4-.8c.3,0,.5-.3.5-.6l.5-7.4c.3-4.1-.8-7.6-3.1-10.2-.1-.2-.3-.3-.4-.5-2.1-2.1-5.1-3.4-8.6-3.5l-11.1-.5s0,0,0,0h0ZM638.5,425.4c-3.2,0-5.9-.9-8-2.7-2.3-1.9-3.6-4.8-3.7-8.3l-.5-10.1,10.5.5c3.4.2,6.2,1.4,8.2,3.6,2.1,2.3,3,5.5,2.8,9.3l-.4,6.9-6.9.7c-.6,0-1.2,0-1.8,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M614.7,403.1c-3.6-.2-6.6-1.5-8.7-3.8-2.2-2.5-3.2-5.8-3-9.8l.5-7.4c0,0,0,0,0,0l7.4-.8c.6,0,1.3-.1,1.9-.1,3.3,0,6.3,1,8.4,2.9.2.2.4.4.6.6,2,2,3.2,4.9,3.4,8.2l.6,10.8h-.1c0,.1-11.1-.4-11.1-.4ZM613,381.3c-.6,0-1.2,0-1.9,0l-7.3.8-.5,7.3c-.3,3.9.8,7.2,2.9,9.6,2,2.3,5,3.6,8.5,3.8l11,.5-.6-10.7c-.2-3.6-1.5-6.6-3.9-8.6-2.1-1.8-5-2.8-8.3-2.8Z" fill="#fff"/>
                      <path d="M613,380.6c-.6,0-1.3,0-2,.1l-7.4.8c-.3,0-.5.3-.5.6l-.5,7.4c-.3,4.1.8,7.6,3.1,10.2,2.2,2.4,5.3,3.8,9,4l11.1.5s0,0,0,0c.2,0,.3,0,.4-.2.1-.1.2-.3.2-.5l-.6-10.8c-.2-3.5-1.4-6.4-3.5-8.5-.2-.2-.4-.4-.6-.6-2.3-2-5.3-3-8.8-3h0ZM625.2,402.9l-10.5-.5c-3.4-.2-6.2-1.4-8.2-3.6-2.1-2.3-3-5.5-2.8-9.3l.4-6.9,6.9-.7c.6,0,1.2,0,1.8,0,3.2,0,5.9.9,8,2.7,2.3,1.9,3.6,4.8,3.7,8.3l.5,10.1h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M646.7,424.7s0,0,0,0l-42.1-42.1s0-.1,0-.1h.1l42.1,42.1s0,.1,0,.1h0Z" fill="#fff"/>
                    <path d="M604.6,381.8c-.2,0-.3,0-.4.2-.2.2-.2.6,0,.9l42.1,42.1c.1.1.3.2.4.2s.3,0,.4-.2c.2-.2.2-.6,0-.9l-42.1-42.1c-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M604.7,424.7s0,0,0,0,0-.1,0-.1l41.6-41.6h.1s0,.1,0,.1l-41.6,41.6h0Z" fill="#fff"/>
                    <path d="M646.4,382.3c-.2,0-.3,0-.4.2l-41.6,41.6c-.2.2-.2.6,0,.9.1.1.3.2.4.2s.3,0,.4-.2l41.6-41.6c.2-.2.2-.6,0-.9s-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                </g>
              </g>
              <g opacity=".6">
                <g>
                  <g>
                    <g>
                      <path d="M670.4,268.9s0,0,0,0l.5-11.2c.2-3.6,1.5-6.6,3.8-8.7,2.2-2,5.2-3,8.6-3s.8,0,1.2,0l7.4.5h0c0,0,.8,7.5.8,7.5.4,4.2-.5,7.7-2.8,10.4-2.1,2.4-5.1,3.8-8.8,4l-10.8.6ZM683.3,246.2c-3.4,0-6.3,1-8.5,2.9-2.3,2-3.6,5-3.8,8.5l-.5,11,10.7-.6c3.6-.2,6.6-1.5,8.6-3.9,2.2-2.6,3.1-6.1,2.7-10.2l-.8-7.3-7.3-.5c-.4,0-.8,0-1.2,0Z" fill="#fff"/>
                      <path d="M683.3,245.5c-3.6,0-6.7,1.1-9,3.1-2.4,2.2-3.8,5.3-4,9l-.5,11.1c0,.2,0,.3.2.5,0,0,0,0,0,0,.1.1.3.2.4.2s0,0,0,0l10.8-.6c3.8-.2,7-1.6,9.1-4.2,2.3-2.7,3.3-6.4,2.9-10.7l-.8-7.4c0-.1,0-.3-.2-.4-.1-.1-.2-.2-.4-.2l-7.4-.5c-.4,0-.8,0-1.2,0h0ZM671.1,268.2l.5-10.5c.2-3.4,1.4-6.2,3.6-8.2,2.1-1.9,4.9-2.8,8.2-2.8s.7,0,1.1,0l6.9.4.7,6.9c.4,4-.5,7.4-2.6,9.8-1.9,2.3-4.8,3.6-8.3,3.7l-10.1.5h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M657.4,291.4c-.4,0-.8,0-1.2,0l-7.4-.5c0,0,0,0,0,0l-.8-7.4c-.4-4.2.5-7.7,2.8-10.4,2.1-2.4,5.1-3.8,8.8-4l10.8-.6h.1c0,.1-.5,11.2-.5,11.2-.2,3.6-1.5,6.6-3.8,8.7-2.2,2-5.2,3-8.6,3ZM659.4,269.3c-3.6.2-6.6,1.5-8.6,3.9-2.2,2.6-3.1,6.1-2.7,10.2l.8,7.3,7.3.5c.4,0,.8,0,1.2,0,3.4,0,6.3-1,8.5-2.9,2.3-2,3.6-5,3.8-8.5l.5-11-10.7.6Z" fill="#fff"/>
                      <path d="M670.2,268s0,0,0,0l-10.8.6c-3.8.2-7,1.6-9.1,4.2-2.3,2.7-3.3,6.4-2.9,10.7l.8,7.4c0,.3.3.5.6.5l7.4.5c.4,0,.8,0,1.2,0,3.6,0,6.7-1.1,9-3.1,2.4-2.2,3.8-5.3,4-9l.5-11.1c0-.2,0-.3-.2-.5-.1-.1-.3-.2-.4-.2h0ZM669.6,269.2l-.5,10.5c-.2,3.4-1.4,6.2-3.6,8.2-2.1,1.9-4.9,2.8-8.2,2.8s-.7,0-1.1,0l-6.9-.4-.7-6.9c-.4-4,.5-7.4,2.6-9.8,1.9-2.3,4.8-3.6,8.3-3.7l10.1-.5h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M683.1,291.2c-3.3,0-6.3-1-8.4-2.9-2.4-2.1-3.8-5.1-4-8.8l-.6-10.8h.1c0-.1,11.1.4,11.1.4,3.4.2,6.2,1.3,8.3,3.4.1.1.3.3.4.4,2.2,2.5,3.2,5.8,3,9.8l-.5,7.4c0,0,0,0,0,0l-7.4.8c-.6,0-1.3.1-1.9.1ZM670.9,279.6c.2,3.6,1.5,6.6,3.9,8.6,2.1,1.8,5,2.8,8.3,2.8h0c.6,0,1.2,0,1.9,0l7.3-.8.5-7.3c.3-3.9-.8-7.2-2.9-9.6-2-2.3-5-3.6-8.5-3.8l-11-.5.6,10.7Z" fill="#fff"/>
                      <path d="M670.2,268.2c-.2,0-.3,0-.4.2-.1.1-.2.3-.2.5l.6,10.8c.2,3.8,1.6,7,4.2,9.1,2.3,2,5.3,3,8.8,3s1.3,0,2-.1l7.4-.8c.3,0,.5-.3.5-.6l.5-7.4c.3-4.1-.8-7.6-3.1-10.2-.1-.2-.3-.3-.4-.5-2.1-2.1-5.1-3.4-8.6-3.5l-11.1-.5s0,0,0,0h0ZM683.1,290.5c-3.2,0-5.9-.9-8-2.7-2.3-1.9-3.6-4.8-3.7-8.3l-.5-10.1,10.5.5c3.4.2,6.2,1.4,8.2,3.6,2.1,2.3,3,5.5,2.8,9.3l-.4,6.9-6.9.7c-.6,0-1.2,0-1.8,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M659.3,268.2c-3.6-.2-6.6-1.5-8.7-3.8-2.2-2.5-3.2-5.8-3-9.8l.5-7.4c0,0,0,0,0,0l7.4-.8c.6,0,1.3-.1,1.9-.1,3.3,0,6.3,1,8.4,2.9.2.2.4.4.6.6,2,2,3.2,4.9,3.4,8.2l.6,10.8h-.1c0,.1-11.1-.4-11.1-.4ZM657.6,246.4c-.6,0-1.2,0-1.9,0l-7.3.8-.5,7.3c-.3,3.9.8,7.2,2.9,9.6,2,2.3,5,3.6,8.5,3.8l11,.5-.6-10.7c-.2-3.6-1.5-6.6-3.9-8.6-2.1-1.8-5-2.8-8.3-2.8Z" fill="#fff"/>
                      <path d="M657.6,245.7c-.6,0-1.3,0-2,.1l-7.4.8c-.3,0-.5.3-.5.6l-.5,7.4c-.3,4.1.8,7.6,3.1,10.2,2.2,2.4,5.3,3.8,9,4l11.1.5s0,0,0,0c.2,0,.3,0,.4-.2.1-.1.2-.3.2-.5l-.6-10.8c-.2-3.5-1.4-6.4-3.5-8.5-.2-.2-.4-.4-.6-.6-2.3-2-5.3-3-8.8-3h0ZM669.8,268l-10.5-.5c-3.4-.2-6.2-1.4-8.2-3.6-2.1-2.3-3-5.5-2.8-9.3l.4-6.9,6.9-.7c.6,0,1.2,0,1.8,0,3.2,0,5.9.9,8,2.7,2.3,1.9,3.6,4.8,3.7,8.3l.5,10.1h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M691.3,289.8s0,0,0,0l-42.1-42.1s0-.1,0-.1h.1l42.1,42.1s0,.1,0,.1h0Z" fill="#fff"/>
                    <path d="M649.2,246.9c-.2,0-.3,0-.4.2-.2.2-.2.6,0,.9l42.1,42.1c.1.1.3.2.4.2s.3,0,.4-.2c.2-.2.2-.6,0-.9l-42.1-42.1c-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M649.3,289.8s0,0,0,0h0c0-.1,41.6-41.8,41.6-41.8h.1s0,.1,0,.1l-41.6,41.6h0Z" fill="#fff"/>
                    <path d="M690.9,247.4c-.2,0-.3,0-.4.2l-41.6,41.6c-.2.2-.2.6,0,.9.1.1.3.2.4.2s.3,0,.4-.2l41.6-41.6c.2-.2.2-.6,0-.9-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M670.8,314s0,0,0,0l.5-11.2c.2-3.6,1.5-6.6,3.8-8.7,2.2-2,5.2-3,8.6-3s.8,0,1.2,0l7.4.5h0c0,0,.8,7.5.8,7.5.4,4.2-.5,7.7-2.8,10.4-2.1,2.4-5.1,3.8-8.8,4l-10.8.6ZM683.7,291.2c-3.4,0-6.3,1-8.5,2.9-2.3,2-3.6,5-3.8,8.5l-.5,11,10.7-.6c3.6-.2,6.6-1.5,8.6-3.9,2.2-2.6,3.1-6.1,2.7-10.2l-.8-7.3-7.3-.5c-.4,0-.8,0-1.2,0Z" fill="#fff"/>
                      <path d="M683.7,290.5c-3.6,0-6.7,1.1-9,3.1-2.4,2.2-3.8,5.3-4,9l-.5,11.1c0,.2,0,.3.2.5,0,0,0,0,0,0,.1.1.3.2.4.2s0,0,0,0l10.8-.6c3.8-.2,7-1.6,9.1-4.2,2.3-2.7,3.3-6.4,2.9-10.7l-.8-7.4c0-.1,0-.3-.2-.4-.1-.1-.2-.2-.4-.2l-7.4-.5c-.4,0-.8,0-1.2,0h0ZM671.5,313.2l.5-10.5c.2-3.4,1.4-6.2,3.6-8.2,2.1-1.9,4.9-2.8,8.2-2.8s.7,0,1.1,0l6.9.4.7,6.9c.4,4-.5,7.4-2.6,9.8-1.9,2.3-4.8,3.6-8.3,3.7l-10.1.5h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M657.8,336.5c-.4,0-.8,0-1.2,0l-7.4-.5c0,0,0,0,0,0l-.8-7.4c-.4-4.2.5-7.7,2.8-10.4,2.1-2.4,5.1-3.8,8.8-4l10.8-.6h.1c0,.1-.5,11.2-.5,11.2-.2,3.6-1.5,6.6-3.8,8.7-2.2,2-5.2,3-8.6,3ZM659.8,314.3c-3.6.2-6.6,1.5-8.6,3.9-2.2,2.6-3.1,6.1-2.7,10.2l.8,7.3,7.3.5c.4,0,.8,0,1.2,0,3.4,0,6.3-1,8.5-2.9,2.3-2,3.6-5,3.8-8.5l.5-11-10.7.6Z" fill="#fff"/>
                      <path d="M670.6,313s0,0,0,0l-10.8.6c-3.8.2-7,1.6-9.1,4.2-2.3,2.7-3.3,6.4-2.9,10.7l.8,7.4c0,.3.3.5.6.5l7.4.5c.4,0,.8,0,1.2,0,3.6,0,6.7-1.1,9-3.1,2.4-2.2,3.8-5.3,4-9l.5-11.1c0-.2,0-.3-.2-.5-.1-.1-.3-.2-.4-.2h0ZM670,314.3l-.5,10.5c-.2,3.4-1.4,6.2-3.6,8.2-2.1,1.9-4.9,2.8-8.2,2.8s-.7,0-1.1,0l-6.9-.4-.7-6.9c-.4-4,.5-7.4,2.6-9.8,1.9-2.3,4.8-3.6,8.3-3.7l10.1-.5h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M683.5,336.3c-3.3,0-6.3-1-8.4-2.9-2.4-2.1-3.8-5.1-4-8.8l-.6-10.8h.1c0-.1,11.1.4,11.1.4,3.4.2,6.2,1.3,8.3,3.4.1.1.3.3.4.4,2.2,2.5,3.2,5.8,3,9.8l-.5,7.4c0,0,0,0,0,0l-7.4.8c-.6,0-1.3.1-1.9.1ZM671.3,324.7c.2,3.6,1.5,6.6,3.9,8.6,2.1,1.8,5,2.8,8.3,2.8h0c.6,0,1.2,0,1.9,0l7.3-.8.5-7.3c.3-3.9-.8-7.2-2.9-9.6-2-2.3-5-3.6-8.5-3.8l-11-.5.6,10.7Z" fill="#fff"/>
                      <path d="M670.6,313.3c-.2,0-.3,0-.4.2-.1.1-.2.3-.2.5l.6,10.8c.2,3.8,1.6,7,4.2,9.1,2.3,2,5.3,3,8.8,3s1.3,0,2-.1l7.4-.8c.3,0,.5-.3.5-.6l.5-7.4c.3-4.1-.8-7.6-3.1-10.2-.1-.2-.3-.3-.4-.5-2.1-2.1-5.1-3.4-8.6-3.5l-11.1-.5s0,0,0,0h0ZM683.5,335.6c-3.2,0-5.9-.9-8-2.7-2.3-1.9-3.6-4.8-3.7-8.3l-.5-10.1,10.5.5c3.4.2,6.2,1.4,8.2,3.6,2.1,2.3,3,5.5,2.8,9.3l-.4,6.9-6.9.7c-.6,0-1.2,0-1.8,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M659.7,313.2c-3.6-.2-6.6-1.5-8.7-3.8-2.2-2.5-3.2-5.8-3-9.8l.5-7.4c0,0,0,0,0,0l7.4-.8c.6,0,1.3-.1,1.9-.1,3.3,0,6.3,1,8.4,2.9.2.2.4.4.6.6,2,2,3.2,4.9,3.4,8.2l.6,10.8h-.1c0,.1-11.1-.4-11.1-.4ZM658,291.4c-.6,0-1.2,0-1.9,0l-7.3.8-.5,7.3c-.3,3.9.8,7.2,2.9,9.6,2,2.3,5,3.6,8.5,3.8l11,.5-.6-10.7c-.2-3.6-1.5-6.6-3.9-8.6-2.1-1.8-5-2.8-8.3-2.8Z" fill="#fff"/>
                      <path d="M658,290.7c-.6,0-1.3,0-2,.1l-7.4.8c-.3,0-.5.3-.5.6l-.5,7.4c-.3,4.1.8,7.6,3.1,10.2,2.2,2.4,5.3,3.8,9,4l11.1.5s0,0,0,0c.2,0,.3,0,.4-.2.1-.1.2-.3.2-.5l-.6-10.8c-.2-3.5-1.4-6.4-3.5-8.5-.2-.2-.4-.4-.6-.6-2.3-2-5.3-3-8.8-3h0ZM670.2,313l-10.5-.5c-3.4-.2-6.2-1.4-8.2-3.6-2.1-2.3-3-5.5-2.8-9.3l.4-6.9,6.9-.7c.6,0,1.2,0,1.8,0,3.2,0,5.9.9,8,2.7,2.3,1.9,3.6,4.8,3.7,8.3l.5,10.1h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M691.7,334.8s0,0,0,0l-42.1-42.1s0-.1,0-.1h.1l42.1,42.1s0,.1,0,.1h0Z" fill="#fff"/>
                    <path d="M649.6,292c-.2,0-.3,0-.4.2-.2.2-.2.6,0,.9l42.1,42.1c.1.1.3.2.4.2s.3,0,.4-.2c.2-.2.2-.6,0-.9l-42.1-42.1c-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M649.7,334.8s0,0,0,0c0,0,0-.1,0-.1l41.6-41.6h.1s0,.1,0,.1l-41.6,41.6h0Z" fill="#fff"/>
                    <path d="M691.3,292.5c-.2,0-.3,0-.4.2l-41.6,41.6c-.2.2-.2.6,0,.9.1.1.3.2.4.2s.3,0,.4-.2l41.6-41.6c.2-.2.2-.6,0-.9-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M671.1,358.8s0,0,0,0l.5-11.2c.2-3.6,1.5-6.6,3.8-8.7,2.2-2,5.2-3,8.6-3s.8,0,1.2,0l7.4.5h0c0,0,.8,7.5.8,7.5.4,4.2-.5,7.7-2.8,10.4-2.1,2.4-5.1,3.8-8.8,4l-10.8.6ZM684,336.1c-3.4,0-6.3,1-8.5,2.9-2.3,2-3.6,5-3.8,8.5l-.5,11,10.7-.6c3.6-.2,6.6-1.5,8.6-3.9,2.2-2.6,3.1-6.1,2.7-10.2l-.8-7.3-7.3-.5c-.4,0-.8,0-1.2,0Z" fill="#fff"/>
                      <path d="M684,335.3c-3.6,0-6.7,1.1-9,3.1-2.4,2.2-3.8,5.3-4,9l-.5,11.1c0,.2,0,.3.2.5,0,0,0,0,0,0,.1.1.3.2.4.2s0,0,0,0l10.8-.6c3.8-.2,7-1.6,9.1-4.2,2.3-2.7,3.3-6.4,2.9-10.7l-.8-7.4c0-.1,0-.3-.2-.4-.1-.1-.2-.2-.4-.2l-7.4-.5c-.4,0-.8,0-1.2,0h0ZM671.8,358l.5-10.5c.2-3.4,1.4-6.2,3.6-8.2,2.1-1.9,4.9-2.8,8.2-2.8s.7,0,1.1,0l6.9.4.7,6.9c.4,4-.5,7.4-2.6,9.8-1.9,2.3-4.8,3.6-8.3,3.7l-10.1.5h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M658.1,381.3c-.4,0-.8,0-1.2,0l-7.4-.5c0,0,0,0,0,0l-.8-7.4c-.4-4.2.5-7.7,2.8-10.4,2.1-2.4,5.1-3.8,8.8-4l10.8-.6h.1c0,.1-.5,11.2-.5,11.2-.2,3.6-1.5,6.6-3.8,8.7-2.2,2-5.2,3-8.6,3ZM660.1,359.1c-3.6.2-6.6,1.5-8.6,3.9-2.2,2.6-3.1,6.1-2.7,10.2l.8,7.3,7.3.5c.4,0,.8,0,1.2,0,3.4,0,6.3-1,8.5-2.9,2.3-2,3.6-5,3.8-8.5l.5-11-10.7.6Z" fill="#fff"/>
                      <path d="M670.9,357.8s0,0,0,0l-10.8.6c-3.8.2-7,1.6-9.1,4.2-2.3,2.7-3.3,6.4-2.9,10.7l.8,7.4c0,.3.3.5.6.5l7.4.5c.4,0,.8,0,1.2,0,3.6,0,6.7-1.1,9-3.1,2.4-2.2,3.8-5.3,4-9l.5-11.1c0-.2,0-.3-.2-.5-.1-.1-.3-.2-.4-.2h0ZM670.3,359.1l-.5,10.5c-.2,3.4-1.4,6.2-3.6,8.2-2.1,1.9-4.9,2.8-8.2,2.8s-.7,0-1.1,0l-6.9-.4-.7-6.9c-.4-4,.5-7.4,2.6-9.8,1.9-2.3,4.8-3.6,8.3-3.7l10.1-.5h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M683.8,381.1c-3.3,0-6.3-1-8.4-2.9-2.4-2.1-3.8-5.1-4-8.8l-.6-10.8h.1c0-.1,11.1.4,11.1.4,3.4.2,6.2,1.3,8.3,3.4.1.1.3.3.4.4,2.2,2.5,3.2,5.8,3,9.8l-.5,7.4c0,0,0,0,0,0l-7.4.8c-.6,0-1.3.1-1.9.1ZM671.6,369.5c.2,3.6,1.5,6.6,3.9,8.6,2.1,1.8,5,2.8,8.3,2.8h0c.6,0,1.2,0,1.9,0l7.3-.8.5-7.3c.3-3.9-.8-7.2-2.9-9.6-2-2.3-5-3.6-8.5-3.8l-11-.5.5,10.7Z" fill="#fff"/>
                      <path d="M670.9,358.1c-.2,0-.3,0-.4.2-.1.1-.2.3-.2.5l.6,10.8c.2,3.8,1.6,7,4.2,9.1,2.3,2,5.3,3,8.8,3s1.3,0,2-.1l7.4-.8c.3,0,.5-.3.5-.6l.5-7.4c.3-4.1-.8-7.6-3.1-10.2-.1-.2-.3-.3-.4-.5-2.1-2.1-5.1-3.4-8.6-3.5l-11.1-.5s0,0,0,0h0ZM683.8,380.4c-3.2,0-5.9-.9-8-2.7-2.3-1.9-3.6-4.8-3.7-8.3l-.5-10.1,10.5.5c3.4.2,6.2,1.4,8.2,3.6,2.1,2.3,3,5.5,2.8,9.3l-.4,6.9-6.9.7c-.6,0-1.2,0-1.8,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M660,358c-3.6-.2-6.6-1.5-8.7-3.8-2.2-2.5-3.2-5.8-3-9.8l.5-7.4c0,0,0,0,0,0l7.4-.8c.6,0,1.3-.1,1.9-.1,3.3,0,6.3,1,8.4,2.9.2.2.4.4.6.6,2,2,3.2,4.9,3.4,8.2l.6,10.8h-.1c0,.1-11.1-.4-11.1-.4ZM658.3,336.2c-.6,0-1.2,0-1.9,0l-7.3.8-.5,7.3c-.3,3.9.8,7.2,2.9,9.6,2,2.3,5,3.6,8.5,3.8l11,.5-.5-10.7c-.2-3.6-1.5-6.6-3.9-8.6-2.1-1.8-5-2.8-8.3-2.8Z" fill="#fff"/>
                      <path d="M658.3,335.5c-.6,0-1.3,0-2,.1l-7.4.8c-.3,0-.5.3-.5.6l-.5,7.4c-.3,4.1.8,7.6,3.1,10.2,2.2,2.4,5.3,3.8,9,4l11.1.5s0,0,0,0c.2,0,.3,0,.4-.2.1-.1.2-.3.2-.5l-.6-10.8c-.2-3.5-1.4-6.4-3.5-8.5-.2-.2-.4-.4-.6-.6-2.3-2-5.3-3-8.8-3h0ZM670.5,357.8l-10.5-.5c-3.4-.2-6.2-1.4-8.2-3.6-2.1-2.3-3-5.5-2.8-9.3l.4-6.9,6.9-.7c.6,0,1.2,0,1.8,0,3.2,0,5.9.9,8,2.7,2.3,1.9,3.6,4.8,3.7,8.3l.5,10.1h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M692,379.6s0,0,0,0l-42.1-42.1s0-.1,0-.1h.1l42.1,42.1s0,.1,0,.1h0Z" fill="#fff"/>
                    <path d="M649.9,336.8c-.2,0-.3,0-.4.2-.2.2-.2.6,0,.9l42.1,42.1c.1.1.3.2.4.2s.3,0,.4-.2c.2-.2.2-.6,0-.9l-42.1-42.1c-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M650,379.6s0,0,0,0,0-.1,0-.1l41.6-41.6h.1s0,.1,0,.1l-41.6,41.6h0Z" fill="#fff"/>
                    <path d="M691.6,337.3c-.2,0-.3,0-.4.2l-41.6,41.6c-.2.2-.2.6,0,.9.1.1.3.2.4.2s.3,0,.4-.2l41.6-41.6c.2-.2.2-.6,0-.9s-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M671.6,403.8s0,0,0,0l.5-11.2c.2-3.6,1.5-6.6,3.8-8.7,2.2-2,5.2-3,8.6-3s.8,0,1.2,0l7.4.5h0c0,0,.8,7.5.8,7.5.4,4.2-.5,7.7-2.8,10.4-2.1,2.4-5.1,3.8-8.8,4l-10.8.6ZM684.4,381.1c-3.4,0-6.3,1-8.5,2.9-2.3,2-3.6,5-3.8,8.5l-.5,11,10.7-.6c3.6-.2,6.6-1.5,8.6-3.9,2.2-2.6,3.1-6.1,2.7-10.2l-.8-7.3-7.3-.5c-.4,0-.8,0-1.2,0Z" fill="#fff"/>
                      <path d="M684.4,380.4c-3.6,0-6.7,1.1-9,3.1-2.4,2.2-3.8,5.3-4,9l-.5,11.1c0,.2,0,.3.2.5,0,0,0,0,0,0,.1.1.3.2.4.2s0,0,0,0l10.8-.6c3.8-.2,7-1.6,9.1-4.2,2.3-2.7,3.3-6.4,2.9-10.7l-.8-7.4c0-.1,0-.3-.2-.4-.1-.1-.2-.2-.4-.2l-7.4-.5c-.4,0-.8,0-1.2,0h0ZM672.2,403.1l.5-10.5c.2-3.4,1.4-6.2,3.6-8.2,2.1-1.9,4.9-2.8,8.2-2.8s.7,0,1.1,0l6.9.4.7,6.9c.4,4-.5,7.4-2.6,9.8-1.9,2.3-4.8,3.6-8.3,3.7l-10.1.5h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M658.5,426.3c-.4,0-.8,0-1.2,0l-7.4-.5c0,0,0,0,0,0l-.8-7.4c-.4-4.2.5-7.8,2.8-10.4,2.1-2.4,5.1-3.8,8.8-4l10.8-.6h.1c0,.1-.5,11.2-.5,11.2-.2,3.6-1.5,6.6-3.8,8.7-2.2,2-5.2,3-8.6,3ZM660.5,404.2c-3.6.2-6.6,1.5-8.6,3.9-2.2,2.6-3.1,6.1-2.7,10.2l.8,7.3,7.3.5c.4,0,.8,0,1.2,0,3.4,0,6.3-1,8.5-2.9,2.3-2,3.6-5,3.8-8.5l.5-11-10.7.6Z" fill="#fff"/>
                      <path d="M671.3,402.9s0,0,0,0l-10.8.6c-3.8.2-7,1.6-9.1,4.2-2.3,2.7-3.3,6.4-2.9,10.7l.8,7.4c0,.3.3.5.6.5l7.4.5c.4,0,.8,0,1.2,0,3.6,0,6.7-1.1,9-3.1,2.4-2.2,3.8-5.3,4-9l.5-11.1c0-.2,0-.3-.2-.5-.1-.1-.3-.2-.4-.2h0ZM670.7,404.1l-.5,10.5c-.2,3.4-1.4,6.2-3.6,8.2-2.1,1.9-4.9,2.8-8.2,2.8s-.7,0-1.1,0l-6.9-.4-.7-6.9c-.4-4,.5-7.4,2.6-9.8,1.9-2.3,4.8-3.6,8.3-3.7l10.1-.5h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M684.2,426.1c-3.3,0-6.3-1-8.4-2.9-2.4-2.1-3.8-5.1-4-8.8l-.6-10.8h.1c0-.1,11.1.4,11.1.4,3.4.2,6.2,1.3,8.3,3.4.1.1.3.3.4.4,2.2,2.5,3.2,5.8,3,9.8l-.5,7.4c0,0,0,0,0,0l-7.4.8c-.6,0-1.3.1-1.9.1ZM672,414.5c.2,3.6,1.5,6.6,3.9,8.6,2.1,1.8,5,2.8,8.3,2.8h0c.6,0,1.2,0,1.9,0l7.3-.8.5-7.3c.3-3.9-.8-7.2-2.9-9.6-2-2.3-5-3.6-8.5-3.8l-11-.5.5,10.7Z" fill="#fff"/>
                      <path d="M671.3,403.1c-.2,0-.3,0-.4.2-.1.1-.2.3-.2.5l.6,10.8c.2,3.8,1.6,7,4.2,9.1,2.3,2,5.3,3,8.8,3s1.3,0,2-.1l7.4-.8c.3,0,.5-.3.5-.6l.5-7.4c.3-4.1-.8-7.6-3.1-10.2-.1-.2-.3-.3-.4-.5-2.1-2.1-5.1-3.4-8.6-3.5l-11.1-.5s0,0,0,0h0ZM684.2,425.4c-3.2,0-5.9-.9-8-2.7-2.3-1.9-3.6-4.8-3.7-8.3l-.5-10.1,10.5.5c3.4.2,6.2,1.4,8.2,3.6,2.1,2.3,3,5.5,2.8,9.3l-.4,6.9-6.9.7c-.6,0-1.2,0-1.8,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M660.4,403.1c-3.6-.2-6.6-1.5-8.7-3.8-2.2-2.5-3.2-5.8-3-9.8l.5-7.4c0,0,0,0,0,0l7.4-.8c.6,0,1.3-.1,1.9-.1,3.3,0,6.3,1,8.4,2.9.2.2.4.4.6.6,2,2,3.2,4.9,3.4,8.2l.6,10.8h-.1c0,.1-11.1-.4-11.1-.4ZM658.7,381.3c-.6,0-1.2,0-1.9,0l-7.3.8-.5,7.3c-.3,3.9.8,7.2,2.9,9.6,2,2.3,5,3.6,8.5,3.8l11,.5-.5-10.7c-.2-3.6-1.5-6.6-3.9-8.6-2.1-1.8-5-2.8-8.3-2.8Z" fill="#fff"/>
                      <path d="M658.7,380.6c-.6,0-1.3,0-2,.1l-7.4.8c-.3,0-.5.3-.5.6l-.5,7.4c-.3,4.1.8,7.6,3.1,10.2,2.2,2.4,5.3,3.8,9,4l11.1.5s0,0,0,0c.2,0,.3,0,.4-.2.1-.1.2-.3.2-.5l-.6-10.8c-.2-3.5-1.4-6.4-3.5-8.5-.2-.2-.4-.4-.6-.6-2.3-2-5.3-3-8.8-3h0ZM670.9,402.9l-10.5-.5c-3.4-.2-6.2-1.4-8.2-3.6-2.1-2.3-3-5.5-2.8-9.3l.4-6.9,6.9-.7c.6,0,1.2,0,1.8,0,3.2,0,5.9.9,8,2.7,2.3,1.9,3.6,4.8,3.7,8.3l.5,10.1h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M692.4,424.7s0,0,0,0l-42.1-42.1s0-.1,0-.1h.1l42.1,42.1s0,.1,0,.1h0Z" fill="#fff"/>
                    <path d="M650.3,381.8c-.2,0-.3,0-.4.2-.2.2-.2.6,0,.9l42.1,42.1c.1.1.3.2.4.2s.3,0,.4-.2c.2-.2.2-.6,0-.9l-42.1-42.1c-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M650.4,424.7s0,0,0,0,0-.1,0-.1l41.6-41.6h.1s0,.1,0,.1l-41.6,41.6h0Z" fill="#fff"/>
                    <path d="M692,382.3c-.2,0-.3,0-.4.2l-41.6,41.6c-.2.2-.2.6,0,.9.1.1.3.2.4.2s.3,0,.4-.2l41.6-41.6c.2-.2.2-.6,0-.9s-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                </g>
              </g>
              <g opacity=".6">
                <g>
                  <g>
                    <g>
                      <path d="M716,268.9s0,0,0,0l.5-11.2c.2-3.6,1.5-6.6,3.8-8.7,2.2-2,5.2-3,8.6-3s.8,0,1.2,0l7.4.5h0c0,0,.8,7.5.8,7.5.4,4.2-.5,7.7-2.8,10.4-2.1,2.4-5.1,3.8-8.8,4l-10.8.6ZM728.8,246.2c-3.4,0-6.3,1-8.5,2.9-2.3,2-3.6,5-3.8,8.5l-.5,11,10.7-.6c3.6-.2,6.6-1.5,8.6-3.9,2.2-2.6,3.1-6.1,2.7-10.2l-.8-7.3-7.3-.5c-.4,0-.8,0-1.2,0Z" fill="#fff"/>
                      <path d="M728.8,245.5c-3.6,0-6.7,1.1-9,3.1-2.4,2.2-3.8,5.3-4,9l-.5,11.1c0,.2,0,.3.2.5,0,0,0,0,0,0,.1.1.3.2.4.2s0,0,0,0l10.8-.6c3.8-.2,7-1.6,9.1-4.2,2.3-2.7,3.3-6.4,2.9-10.7l-.8-7.4c0-.1,0-.3-.2-.4-.1-.1-.2-.2-.4-.2l-7.4-.5c-.4,0-.8,0-1.2,0h0ZM716.6,268.2l.5-10.5c.2-3.4,1.4-6.2,3.6-8.2,2.1-1.9,4.9-2.8,8.2-2.8s.7,0,1.1,0l6.9.4.7,6.9c.4,4-.5,7.4-2.6,9.8-1.9,2.3-4.8,3.6-8.3,3.7l-10.1.5h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M702.9,291.4c-.4,0-.8,0-1.2,0l-7.4-.5c0,0,0,0,0,0l-.8-7.4c-.4-4.2.5-7.7,2.8-10.4,2.1-2.4,5.1-3.8,8.8-4l10.8-.6h.1c0,.1-.5,11.2-.5,11.2-.2,3.6-1.5,6.6-3.8,8.7-2.2,2-5.2,3-8.6,3ZM705,269.3c-3.6.2-6.6,1.5-8.6,3.9-2.2,2.6-3.1,6.1-2.7,10.2l.8,7.3,7.3.5c.4,0,.8,0,1.2,0,3.4,0,6.3-1,8.5-2.9,2.3-2,3.6-5,3.8-8.5l.5-11-10.7.6Z" fill="#fff"/>
                      <path d="M715.8,268s0,0,0,0l-10.8.6c-3.8.2-7,1.6-9.1,4.2-2.3,2.7-3.3,6.4-2.9,10.7l.8,7.4c0,.3.3.5.6.5l7.4.5c.4,0,.8,0,1.2,0,3.6,0,6.7-1.1,9-3.1,2.4-2.2,3.8-5.3,4-9l.5-11.1c0-.2,0-.3-.2-.5-.1-.1-.3-.2-.4-.2h0ZM715.1,269.2l-.5,10.5c-.2,3.4-1.4,6.2-3.6,8.2-2.1,1.9-4.9,2.8-8.2,2.8s-.7,0-1.1,0l-6.9-.4-.7-6.9c-.4-4,.5-7.4,2.6-9.8,1.9-2.3,4.8-3.6,8.3-3.7l10.1-.5h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M728.6,291.2c-3.3,0-6.3-1-8.4-2.9-2.4-2.1-3.8-5.1-4-8.8l-.6-10.8h.1c0-.1,11.1.4,11.1.4,3.4.2,6.2,1.3,8.3,3.4.1.1.3.3.4.4,2.2,2.5,3.2,5.8,3,9.8l-.5,7.4c0,0,0,0,0,0l-7.4.8c-.6,0-1.3.1-1.9.1ZM716.4,279.6c.2,3.6,1.5,6.6,3.9,8.6,2.1,1.8,5,2.8,8.3,2.8h0c.6,0,1.2,0,1.9,0l7.3-.8.5-7.3c.3-3.9-.8-7.2-2.9-9.6-2-2.3-5-3.6-8.5-3.8l-11-.5.6,10.7Z" fill="#fff"/>
                      <path d="M715.8,268.2c-.2,0-.3,0-.4.2-.1.1-.2.3-.2.5l.6,10.8c.2,3.8,1.6,7,4.2,9.1,2.3,2,5.3,3,8.8,3s1.3,0,2-.1l7.4-.8c.3,0,.5-.3.5-.6l.5-7.4c.3-4.1-.8-7.6-3.1-10.2-.1-.2-.3-.3-.4-.5-2.1-2.1-5.1-3.4-8.6-3.5l-11.1-.5s0,0,0,0h0ZM728.6,290.5c-3.2,0-5.9-.9-8-2.7-2.3-1.9-3.6-4.8-3.7-8.3l-.5-10.1,10.5.5c3.4.2,6.2,1.4,8.2,3.6,2.1,2.3,3,5.5,2.8,9.3l-.4,6.9-6.9.7c-.6,0-1.2,0-1.8,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M704.8,268.2c-3.6-.2-6.6-1.5-8.7-3.8-2.2-2.5-3.2-5.8-3-9.8l.5-7.4c0,0,0,0,0,0l7.4-.8c.6,0,1.3-.1,1.9-.1,3.3,0,6.3,1,8.4,2.9.2.2.4.4.6.6,2,2,3.2,4.9,3.4,8.2l.6,10.8h-.1c0,.1-11.1-.4-11.1-.4ZM703.1,246.4c-.6,0-1.2,0-1.9,0l-7.3.8-.5,7.3c-.3,3.9.8,7.2,2.9,9.6,2,2.3,5,3.6,8.5,3.8l11,.5-.6-10.7c-.2-3.6-1.5-6.6-3.9-8.6-2.1-1.8-5-2.8-8.3-2.8Z" fill="#fff"/>
                      <path d="M703.1,245.7c-.6,0-1.3,0-2,.1l-7.4.8c-.3,0-.5.3-.5.6l-.5,7.4c-.3,4.1.8,7.6,3.1,10.2,2.2,2.4,5.3,3.8,9,4l11.1.5s0,0,0,0c.2,0,.3,0,.4-.2.1-.1.2-.3.2-.5l-.6-10.8c-.2-3.5-1.4-6.4-3.5-8.5-.2-.2-.4-.4-.6-.6-2.3-2-5.3-3-8.8-3h0ZM715.3,268l-10.5-.5c-3.4-.2-6.2-1.4-8.2-3.6-2.1-2.3-3-5.5-2.8-9.3l.4-6.9,6.9-.7c.6,0,1.2,0,1.8,0,3.2,0,5.9.9,8,2.7,2.3,1.9,3.6,4.8,3.7,8.3l.5,10.1h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M736.8,289.8s0,0,0,0l-42.1-42.1s0-.1,0-.1h.1l42.1,42.1s0,.1,0,.1h0Z" fill="#fff"/>
                    <path d="M694.7,246.9c-.2,0-.3,0-.4.2-.2.2-.2.6,0,.9l42.1,42.1c.1.1.3.2.4.2s.3,0,.4-.2c.2-.2.2-.6,0-.9l-42.1-42.1c-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M694.8,289.8s0,0,0,0h0c0-.1,41.6-41.8,41.6-41.8h.1s0,.1,0,.1l-41.6,41.6h0Z" fill="#fff"/>
                    <path d="M736.5,247.4c-.2,0-.3,0-.4.2l-41.6,41.6c-.2.2-.2.6,0,.9.1.1.3.2.4.2s.3,0,.4-.2l41.6-41.6c.2-.2.2-.6,0-.9-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M716.4,314s0,0,0,0l.5-11.2c.2-3.6,1.5-6.6,3.8-8.7,2.2-2,5.2-3,8.6-3s.8,0,1.2,0l7.4.5h0c0,0,.8,7.5.8,7.5.4,4.2-.5,7.7-2.8,10.4-2.1,2.4-5.1,3.8-8.8,4l-10.8.6ZM729.2,291.2c-3.4,0-6.3,1-8.5,2.9-2.3,2-3.6,5-3.8,8.5l-.5,11,10.7-.6c3.6-.2,6.6-1.5,8.6-3.9,2.2-2.6,3.1-6.1,2.7-10.2l-.8-7.3-7.3-.5c-.4,0-.8,0-1.2,0Z" fill="#fff"/>
                      <path d="M729.2,290.5c-3.6,0-6.7,1.1-9,3.1-2.4,2.2-3.8,5.3-4,9l-.5,11.1c0,.2,0,.3.2.5,0,0,0,0,0,0,.1.1.3.2.4.2s0,0,0,0l10.8-.6c3.8-.2,7-1.6,9.1-4.2,2.3-2.7,3.3-6.4,2.9-10.7l-.8-7.4c0-.1,0-.3-.2-.4-.1-.1-.2-.2-.4-.2l-7.4-.5c-.4,0-.8,0-1.2,0h0ZM717,313.2l.5-10.5c.2-3.4,1.4-6.2,3.6-8.2,2.1-1.9,4.9-2.8,8.2-2.8s.7,0,1.1,0l6.9.4.7,6.9c.4,4-.5,7.4-2.6,9.8-1.9,2.3-4.8,3.6-8.3,3.7l-10.1.5h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M703.3,336.5c-.4,0-.8,0-1.2,0l-7.4-.5c0,0,0,0,0,0l-.8-7.4c-.4-4.2.5-7.7,2.8-10.4,2.1-2.4,5.1-3.8,8.8-4l10.8-.6h.1c0,.1-.5,11.2-.5,11.2-.2,3.6-1.5,6.6-3.8,8.7-2.2,2-5.2,3-8.6,3ZM705.4,314.3c-3.6.2-6.6,1.5-8.6,3.9-2.2,2.6-3.1,6.1-2.7,10.2l.8,7.3,7.3.5c.4,0,.8,0,1.2,0,3.4,0,6.3-1,8.5-2.9,2.3-2,3.6-5,3.8-8.5l.5-11-10.7.6Z" fill="#fff"/>
                      <path d="M716.2,313s0,0,0,0l-10.8.6c-3.8.2-7,1.6-9.1,4.2-2.3,2.7-3.3,6.4-2.9,10.7l.8,7.4c0,.3.3.5.6.5l7.4.5c.4,0,.8,0,1.2,0,3.6,0,6.7-1.1,9-3.1,2.4-2.2,3.8-5.3,4-9l.5-11.1c0-.2,0-.3-.2-.5-.1-.1-.3-.2-.4-.2h0ZM715.5,314.3l-.5,10.5c-.2,3.4-1.4,6.2-3.6,8.2-2.1,1.9-4.9,2.8-8.2,2.8s-.7,0-1.1,0l-6.9-.4-.7-6.9c-.4-4,.5-7.4,2.6-9.8,1.9-2.3,4.8-3.6,8.3-3.7l10.1-.5h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M729,336.3c-3.3,0-6.3-1-8.4-2.9-2.4-2.1-3.8-5.1-4-8.8l-.6-10.8h.1c0-.1,11.1.4,11.1.4,3.4.2,6.2,1.3,8.3,3.4.1.1.3.3.4.4,2.2,2.5,3.2,5.8,3,9.8l-.5,7.4c0,0,0,0,0,0l-7.4.8c-.6,0-1.3.1-1.9.1ZM716.8,324.7c.2,3.6,1.5,6.6,3.9,8.6,2.1,1.8,5,2.8,8.3,2.8h0c.6,0,1.2,0,1.9,0l7.3-.8.5-7.3c.3-3.9-.8-7.2-2.9-9.6-2-2.3-5-3.6-8.5-3.8l-11-.5.6,10.7Z" fill="#fff"/>
                      <path d="M716.2,313.3c-.2,0-.3,0-.4.2-.1.1-.2.3-.2.5l.6,10.8c.2,3.8,1.6,7,4.2,9.1,2.3,2,5.3,3,8.8,3s1.3,0,2-.1l7.4-.8c.3,0,.5-.3.5-.6l.5-7.4c.3-4.1-.8-7.6-3.1-10.2-.1-.2-.3-.3-.4-.5-2.1-2.1-5.1-3.4-8.6-3.5l-11.1-.5s0,0,0,0h0ZM729,335.6c-3.2,0-5.9-.9-8-2.7-2.3-1.9-3.6-4.8-3.7-8.3l-.5-10.1,10.5.5c3.4.2,6.2,1.4,8.2,3.6,2.1,2.3,3,5.5,2.8,9.3l-.4,6.9-6.9.7c-.6,0-1.2,0-1.8,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M705.2,313.2c-3.6-.2-6.6-1.5-8.7-3.8-2.2-2.5-3.2-5.8-3-9.8l.5-7.4c0,0,0,0,0,0l7.4-.8c.6,0,1.3-.1,1.9-.1,3.3,0,6.3,1,8.4,2.9.2.2.4.4.6.6,2,2,3.2,4.9,3.4,8.2l.6,10.8h-.1c0,.1-11.1-.4-11.1-.4ZM703.5,291.4c-.6,0-1.2,0-1.9,0l-7.3.8-.5,7.3c-.3,3.9.8,7.2,2.9,9.6,2,2.3,5,3.6,8.5,3.8l11,.5-.6-10.7c-.2-3.6-1.5-6.6-3.9-8.6-2.1-1.8-5-2.8-8.3-2.8Z" fill="#fff"/>
                      <path d="M703.5,290.7c-.6,0-1.3,0-2,.1l-7.4.8c-.3,0-.5.3-.5.6l-.5,7.4c-.3,4.1.8,7.6,3.1,10.2,2.2,2.4,5.3,3.8,9,4l11.1.5s0,0,0,0c.2,0,.3,0,.4-.2.1-.1.2-.3.2-.5l-.6-10.8c-.2-3.5-1.4-6.4-3.5-8.5-.2-.2-.4-.4-.6-.6-2.3-2-5.3-3-8.8-3h0ZM715.7,313l-10.5-.5c-3.4-.2-6.2-1.4-8.2-3.6-2.1-2.3-3-5.5-2.8-9.3l.4-6.9,6.9-.7c.6,0,1.2,0,1.8,0,3.2,0,5.9.9,8,2.7,2.3,1.9,3.6,4.8,3.7,8.3l.5,10.1h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M737.2,334.8s0,0,0,0l-42.1-42.1s0-.1,0-.1h.1l42.1,42.1s0,.1,0,.1h0Z" fill="#fff"/>
                    <path d="M695.1,292c-.2,0-.3,0-.4.2-.2.2-.2.6,0,.9l42.1,42.1c.1.1.3.2.4.2s.3,0,.4-.2c.2-.2.2-.6,0-.9l-42.1-42.1c-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M695.2,334.8s0,0,0,0,0-.1,0-.1l41.6-41.6h.1s0,.1,0,.1l-41.6,41.6h0Z" fill="#fff"/>
                    <path d="M736.9,292.5c-.2,0-.3,0-.4.2l-41.6,41.6c-.2.2-.2.6,0,.9.1.1.3.2.4.2s.3,0,.4-.2l41.6-41.6c.2-.2.2-.6,0-.9-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M716.7,358.8s0,0,0,0l.5-11.2c.2-3.6,1.5-6.6,3.8-8.7,2.2-2,5.2-3,8.6-3s.8,0,1.2,0l7.4.5h0c0,0,.8,7.5.8,7.5.4,4.2-.5,7.7-2.8,10.4-2.1,2.4-5.1,3.8-8.8,4l-10.8.6ZM729.5,336.1c-3.4,0-6.3,1-8.5,2.9-2.3,2-3.6,5-3.8,8.5l-.5,11,10.7-.6c3.6-.2,6.6-1.5,8.6-3.9,2.2-2.6,3.1-6.1,2.7-10.2l-.8-7.3-7.3-.5c-.4,0-.8,0-1.2,0Z" fill="#fff"/>
                      <path d="M729.5,335.3c-3.6,0-6.7,1.1-9,3.1-2.4,2.2-3.8,5.3-4,9l-.5,11.1c0,.2,0,.3.2.5,0,0,0,0,0,0,.1.1.3.2.4.2s0,0,0,0l10.8-.6c3.8-.2,7-1.6,9.1-4.2,2.3-2.7,3.3-6.4,2.9-10.7l-.8-7.4c0-.1,0-.3-.2-.4-.1-.1-.2-.2-.4-.2l-7.4-.5c-.4,0-.8,0-1.2,0h0ZM717.3,358l.5-10.5c.2-3.4,1.4-6.2,3.6-8.2,2.1-1.9,4.9-2.8,8.2-2.8s.7,0,1.1,0l6.9.4.7,6.9c.4,4-.5,7.4-2.6,9.8-1.9,2.3-4.8,3.6-8.3,3.7l-10.1.5h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M703.6,381.3c-.4,0-.8,0-1.2,0l-7.4-.5c0,0,0,0,0,0l-.8-7.4c-.4-4.2.5-7.7,2.8-10.4,2.1-2.4,5.1-3.8,8.8-4l10.8-.6h.1c0,.1-.5,11.2-.5,11.2-.2,3.6-1.5,6.6-3.8,8.7-2.2,2-5.2,3-8.6,3ZM705.7,359.1c-3.6.2-6.6,1.5-8.6,3.9-2.2,2.6-3.1,6.1-2.7,10.2l.8,7.3,7.3.5c.4,0,.8,0,1.2,0,3.4,0,6.3-1,8.5-2.9,2.3-2,3.6-5,3.8-8.5l.5-11-10.7.6Z" fill="#fff"/>
                      <path d="M716.5,357.8s0,0,0,0l-10.8.6c-3.8.2-7,1.6-9.1,4.2-2.3,2.7-3.3,6.4-2.9,10.7l.8,7.4c0,.3.3.5.6.5l7.4.5c.4,0,.8,0,1.2,0,3.6,0,6.7-1.1,9-3.1,2.4-2.2,3.8-5.3,4-9l.5-11.1c0-.2,0-.3-.2-.5-.1-.1-.3-.2-.4-.2h0ZM715.8,359.1l-.5,10.5c-.2,3.4-1.4,6.2-3.6,8.2-2.1,1.9-4.9,2.8-8.2,2.8s-.7,0-1.1,0l-6.9-.4-.7-6.9c-.4-4,.5-7.4,2.6-9.8,1.9-2.3,4.8-3.6,8.3-3.7l10.1-.5h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M729.3,381.1c-3.3,0-6.3-1-8.4-2.9-2.4-2.1-3.8-5.1-4-8.8l-.6-10.8h.1c0-.1,11.1.4,11.1.4,3.4.2,6.2,1.3,8.3,3.4.1.1.3.3.4.4,2.2,2.5,3.2,5.8,3,9.8l-.5,7.4c0,0,0,0,0,0l-7.4.8c-.6,0-1.3.1-1.9.1ZM717.1,369.5c.2,3.6,1.5,6.6,3.9,8.6,2.1,1.8,5,2.8,8.3,2.8h0c.6,0,1.2,0,1.9,0l7.3-.8.5-7.3c.3-3.9-.8-7.2-2.9-9.6-2-2.3-5-3.6-8.5-3.8l-11-.5.5,10.7Z" fill="#fff"/>
                      <path d="M716.5,358.1c-.2,0-.3,0-.4.2-.1.1-.2.3-.2.5l.6,10.8c.2,3.8,1.6,7,4.2,9.1,2.3,2,5.3,3,8.8,3s1.3,0,2-.1l7.4-.8c.3,0,.5-.3.5-.6l.5-7.4c.3-4.1-.8-7.6-3.1-10.2-.1-.2-.3-.3-.4-.5-2.1-2.1-5.1-3.4-8.6-3.5l-11.1-.5s0,0,0,0h0ZM729.3,380.4c-3.2,0-5.9-.9-8-2.7-2.3-1.9-3.6-4.8-3.7-8.3l-.5-10.1,10.5.5c3.4.2,6.2,1.4,8.2,3.6,2.1,2.3,3,5.5,2.8,9.3l-.4,6.9-6.9.7c-.6,0-1.2,0-1.8,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M705.5,358c-3.6-.2-6.6-1.5-8.7-3.8-2.2-2.5-3.2-5.8-3-9.8l.5-7.4c0,0,0,0,0,0l7.4-.8c.6,0,1.3-.1,1.9-.1,3.3,0,6.3,1,8.4,2.9.2.2.4.4.6.6,2,2,3.2,4.9,3.4,8.2l.6,10.8h-.1c0,.1-11.1-.4-11.1-.4ZM703.8,336.2c-.6,0-1.2,0-1.9,0l-7.3.8-.5,7.3c-.3,3.9.8,7.2,2.9,9.6,2,2.3,5,3.6,8.5,3.8l11,.5-.5-10.7c-.2-3.6-1.5-6.6-3.9-8.6-2.1-1.8-5-2.8-8.3-2.8Z" fill="#fff"/>
                      <path d="M703.8,335.5c-.6,0-1.3,0-2,.1l-7.4.8c-.3,0-.5.3-.5.6l-.5,7.4c-.3,4.1.8,7.6,3.1,10.2,2.2,2.4,5.3,3.8,9,4l11.1.5s0,0,0,0c.2,0,.3,0,.4-.2.1-.1.2-.3.2-.5l-.6-10.8c-.2-3.5-1.4-6.4-3.5-8.5-.2-.2-.4-.4-.6-.6-2.3-2-5.3-3-8.8-3h0ZM716,357.8l-10.5-.5c-3.4-.2-6.2-1.4-8.2-3.6-2.1-2.3-3-5.5-2.8-9.3l.4-6.9,6.9-.7c.6,0,1.2,0,1.8,0,3.2,0,5.9.9,8,2.7,2.3,1.9,3.6,4.8,3.7,8.3l.5,10.1h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M737.5,379.6s0,0,0,0l-42.1-42.1s0-.1,0-.1h.1l42.1,42.1s0,.1,0,.1h0Z" fill="#fff"/>
                    <path d="M695.4,336.8c-.2,0-.3,0-.4.2-.2.2-.2.6,0,.9l42.1,42.1c.1.1.3.2.4.2s.3,0,.4-.2c.2-.2.2-.6,0-.9l-42.1-42.1c-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M695.5,379.6s0,0,0,0,0-.1,0-.1l41.6-41.6h.1s0,.1,0,.1l-41.6,41.6h0Z" fill="#fff"/>
                    <path d="M737.2,337.3c-.2,0-.3,0-.4.2l-41.6,41.6c-.2.2-.2.6,0,.9.1.1.3.2.4.2s.3,0,.4-.2l41.6-41.6c.2-.2.2-.6,0-.9s-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M717.1,403.8s0,0,0,0l.5-11.2c.2-3.6,1.5-6.6,3.8-8.7,2.2-2,5.2-3,8.6-3s.8,0,1.2,0l7.4.5h0c0,0,.8,7.5.8,7.5.4,4.2-.5,7.7-2.8,10.4-2.1,2.4-5.1,3.8-8.8,4l-10.8.6ZM729.9,381.1c-3.4,0-6.3,1-8.5,2.9-2.3,2-3.6,5-3.8,8.5l-.5,11,10.7-.6c3.6-.2,6.6-1.5,8.6-3.9,2.2-2.6,3.1-6.1,2.7-10.2l-.8-7.3-7.3-.5c-.4,0-.8,0-1.2,0Z" fill="#fff"/>
                      <path d="M729.9,380.4c-3.6,0-6.7,1.1-9,3.1-2.4,2.2-3.8,5.3-4,9l-.5,11.1c0,.2,0,.3.2.5,0,0,0,0,0,0,.1.1.3.2.4.2s0,0,0,0l10.8-.6c3.8-.2,7-1.6,9.1-4.2,2.3-2.7,3.3-6.4,2.9-10.7l-.8-7.4c0-.1,0-.3-.2-.4-.1-.1-.2-.2-.4-.2l-7.4-.5c-.4,0-.8,0-1.2,0h0ZM717.7,403.1l.5-10.5c.2-3.4,1.4-6.2,3.6-8.2,2.1-1.9,4.9-2.8,8.2-2.8s.7,0,1.1,0l6.9.4.7,6.9c.4,4-.5,7.4-2.6,9.8-1.9,2.3-4.8,3.6-8.3,3.7l-10.1.5h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M704,426.3c-.4,0-.8,0-1.2,0l-7.4-.5c0,0,0,0,0,0l-.8-7.4c-.4-4.2.5-7.7,2.8-10.4,2.1-2.4,5.1-3.8,8.8-4l10.8-.6h.1c0,.1-.5,11.2-.5,11.2-.2,3.6-1.5,6.6-3.8,8.7-2.2,2-5.2,3-8.6,3ZM706.1,404.2c-3.6.2-6.6,1.5-8.6,3.9-2.2,2.6-3.1,6.1-2.7,10.2l.8,7.3,7.3.5c.4,0,.8,0,1.2,0,3.4,0,6.3-1,8.5-2.9,2.3-2,3.6-5,3.8-8.5l.5-11-10.7.6Z" fill="#fff"/>
                      <path d="M716.9,402.9s0,0,0,0l-10.8.6c-3.8.2-7,1.6-9.1,4.2-2.3,2.7-3.3,6.4-2.9,10.7l.8,7.4c0,.3.3.5.6.5l7.4.5c.4,0,.8,0,1.2,0,3.6,0,6.7-1.1,9-3.1,2.4-2.2,3.8-5.3,4-9l.5-11.1c0-.2,0-.3-.2-.5-.1-.1-.3-.2-.4-.2h0ZM716.2,404.1l-.5,10.5c-.2,3.4-1.4,6.2-3.6,8.2-2.1,1.9-4.9,2.8-8.2,2.8s-.7,0-1.1,0l-6.9-.4-.7-6.9c-.4-4,.5-7.4,2.6-9.8,1.9-2.3,4.8-3.6,8.3-3.7l10.1-.5h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M729.7,426.1c-3.3,0-6.3-1-8.4-2.9-2.4-2.1-3.8-5.1-4-8.8l-.6-10.8h.1c0-.1,11.1.4,11.1.4,3.4.2,6.2,1.3,8.3,3.4.1.1.3.3.4.4,2.2,2.5,3.2,5.8,3,9.8l-.5,7.4c0,0,0,0,0,0l-7.4.8c-.6,0-1.3.1-1.9.1ZM717.5,414.5c.2,3.6,1.5,6.6,3.9,8.6,2.1,1.8,5,2.8,8.3,2.8h0c.6,0,1.2,0,1.9,0l7.3-.8.5-7.3c.3-3.9-.8-7.2-2.9-9.6-2-2.3-5-3.6-8.5-3.8l-11-.5.5,10.7Z" fill="#fff"/>
                      <path d="M716.9,403.1c-.2,0-.3,0-.4.2-.1.1-.2.3-.2.5l.6,10.8c.2,3.8,1.6,7,4.2,9.1,2.3,2,5.3,3,8.8,3s1.3,0,2-.1l7.4-.8c.3,0,.5-.3.5-.6l.5-7.4c.3-4.1-.8-7.6-3.1-10.2-.1-.2-.3-.3-.4-.5-2.1-2.1-5.1-3.4-8.6-3.5l-11.1-.5s0,0,0,0h0ZM729.7,425.4c-3.2,0-5.9-.9-8-2.7-2.3-1.9-3.6-4.8-3.7-8.3l-.5-10.1,10.5.5c3.4.2,6.2,1.4,8.2,3.6,2.1,2.3,3,5.5,2.8,9.3l-.4,6.9-6.9.7c-.6,0-1.2,0-1.8,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M705.9,403.1c-3.6-.2-6.6-1.5-8.7-3.8-2.2-2.5-3.2-5.8-3-9.8l.5-7.4c0,0,0,0,0,0l7.4-.8c.6,0,1.3-.1,1.9-.1,3.3,0,6.3,1,8.4,2.9.2.2.4.4.6.6,2,2,3.2,4.9,3.4,8.2l.6,10.8h-.1c0,.1-11.1-.4-11.1-.4ZM704.2,381.3c-.6,0-1.2,0-1.9,0l-7.3.8-.5,7.3c-.3,3.9.8,7.2,2.9,9.6,2,2.3,5,3.6,8.5,3.8l11,.5-.5-10.7c-.2-3.6-1.5-6.6-3.9-8.6-2.1-1.8-5-2.8-8.3-2.8Z" fill="#fff"/>
                      <path d="M704.2,380.6c-.6,0-1.3,0-2,.1l-7.4.8c-.3,0-.5.3-.5.6l-.5,7.4c-.3,4.1.8,7.6,3.1,10.2,2.2,2.4,5.3,3.8,9,4l11.1.5s0,0,0,0c.2,0,.3,0,.4-.2.1-.1.2-.3.2-.5l-.6-10.8c-.2-3.5-1.4-6.4-3.5-8.5-.2-.2-.4-.4-.6-.6-2.3-2-5.3-3-8.8-3h0ZM716.4,402.9l-10.5-.5c-3.4-.2-6.2-1.4-8.2-3.6-2.1-2.3-3-5.5-2.8-9.3l.4-6.9,6.9-.7c.6,0,1.2,0,1.8,0,3.2,0,5.9.9,8,2.7,2.3,1.9,3.6,4.8,3.7,8.3l.5,10.1h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M737.9,424.7s0,0,0,0l-42.1-42.1s0-.1,0-.1h.1l42.1,42.1s0,.1,0,.1h0Z" fill="#fff"/>
                    <path d="M695.8,381.8c-.2,0-.3,0-.4.2-.2.2-.2.6,0,.9l42.1,42.1c.1.1.3.2.4.2s.3,0,.4-.2c.2-.2.2-.6,0-.9l-42.1-42.1c-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M695.9,424.7s0,0,0,0,0-.1,0-.1l41.6-41.6h.1s0,.1,0,.1l-41.6,41.6h0Z" fill="#fff"/>
                    <path d="M737.6,382.3c-.2,0-.3,0-.4.2l-41.6,41.6c-.2.2-.2.6,0,.9.1.1.3.2.4.2s.3,0,.4-.2l41.6-41.6c.2-.2.2-.6,0-.9-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                </g>
              </g>
              <g opacity=".6">
                <g>
                  <g>
                    <g>
                      <path d="M807,268.9s0,0,0,0l.5-11.2c.2-3.6,1.5-6.6,3.8-8.7,2.2-2,5.2-3,8.6-3s.8,0,1.2,0l7.4.5h0c0,0,.8,7.5.8,7.5.4,4.2-.5,7.7-2.8,10.4-2.1,2.4-5.1,3.8-8.8,4l-10.8.6ZM819.8,246.2c-3.4,0-6.3,1-8.5,2.9-2.3,2-3.6,5-3.8,8.5l-.5,11,10.7-.6c3.6-.2,6.6-1.5,8.6-3.9,2.2-2.6,3.1-6.1,2.7-10.2l-.8-7.3-7.3-.5c-.4,0-.8,0-1.2,0Z" fill="#fff"/>
                      <path d="M819.8,245.5c-3.6,0-6.7,1.1-9,3.1-2.4,2.2-3.8,5.3-4,9l-.5,11.1c0,.2,0,.3.2.5,0,0,0,0,0,0,.1.1.3.2.4.2s0,0,0,0l10.8-.6c3.8-.2,7-1.6,9.1-4.2,2.3-2.7,3.3-6.4,2.9-10.7l-.8-7.4c0-.1,0-.3-.2-.4-.1-.1-.2-.2-.4-.2l-7.4-.5c-.4,0-.8,0-1.2,0h0ZM807.6,268.2l.5-10.5c.2-3.4,1.4-6.2,3.6-8.2,2.1-1.9,4.9-2.8,8.2-2.8s.7,0,1.1,0l6.9.4.7,6.9c.4,4-.5,7.4-2.6,9.8-1.9,2.3-4.8,3.6-8.3,3.7l-10.1.5h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M793.9,291.4c-.4,0-.8,0-1.2,0l-7.4-.5c0,0,0,0,0,0l-.8-7.4c-.4-4.2.5-7.7,2.8-10.4,2.1-2.4,5.1-3.8,8.8-4l10.8-.6h.1c0,.1-.5,11.2-.5,11.2-.2,3.6-1.5,6.6-3.8,8.7-2.2,2-5.2,3-8.6,3ZM796,269.3c-3.6.2-6.6,1.5-8.6,3.9-2.2,2.6-3.1,6.1-2.7,10.2l.8,7.3,7.3.5c.4,0,.8,0,1.2,0,3.4,0,6.3-1,8.5-2.9,2.3-2,3.6-5,3.8-8.5l.5-11-10.7.6Z" fill="#fff"/>
                      <path d="M806.8,268s0,0,0,0l-10.8.6c-3.8.2-7,1.6-9.1,4.2-2.3,2.7-3.3,6.4-2.9,10.7l.8,7.4c0,.3.3.5.6.5l7.4.5c.4,0,.8,0,1.2,0,3.6,0,6.7-1.1,9-3.1,2.4-2.2,3.8-5.3,4-9l.5-11.1c0-.2,0-.3-.2-.5-.1-.1-.3-.2-.4-.2h0ZM806.1,269.2l-.5,10.5c-.2,3.4-1.4,6.2-3.6,8.2-2.1,1.9-4.9,2.8-8.2,2.8s-.7,0-1.1,0l-6.9-.4-.7-6.9c-.4-4,.5-7.4,2.6-9.8,1.9-2.3,4.8-3.6,8.3-3.7l10.1-.5h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M819.6,291.2c-3.3,0-6.3-1-8.4-2.9-2.4-2.1-3.8-5.1-4-8.8l-.6-10.8h.1c0-.1,11.1.4,11.1.4,3.4.2,6.2,1.3,8.3,3.4.1.1.3.3.4.4,2.2,2.5,3.2,5.8,3,9.8l-.5,7.4c0,0,0,0,0,0l-7.4.8c-.6,0-1.3.1-1.9.1ZM807.4,279.6c.2,3.6,1.5,6.6,3.9,8.6,2.1,1.8,5,2.8,8.3,2.8h0c.6,0,1.2,0,1.9,0l7.3-.8.5-7.3c.3-3.9-.8-7.2-2.9-9.6-2-2.3-5-3.6-8.5-3.8l-11-.5.5,10.7Z" fill="#fff"/>
                      <path d="M806.8,268.2c-.2,0-.3,0-.4.2-.1.1-.2.3-.2.5l.6,10.8c.2,3.8,1.6,7,4.2,9.1,2.3,2,5.3,3,8.8,3s1.3,0,2-.1l7.4-.8c.3,0,.5-.3.5-.6l.5-7.4c.3-4.1-.8-7.6-3.1-10.2-.1-.2-.3-.3-.4-.5-2.1-2.1-5.1-3.4-8.6-3.5l-11.1-.5s0,0,0,0h0ZM819.6,290.5c-3.2,0-5.9-.9-8-2.7-2.3-1.9-3.6-4.8-3.7-8.3l-.5-10.1,10.5.5c3.4.2,6.2,1.4,8.2,3.6,2.1,2.3,3,5.5,2.8,9.3l-.4,6.9-6.9.7c-.6,0-1.2,0-1.8,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M795.8,268.2c-3.6-.2-6.6-1.5-8.7-3.8-2.2-2.5-3.2-5.8-3-9.8l.5-7.4c0,0,0,0,0,0l7.4-.8c.6,0,1.3-.1,1.9-.1,3.3,0,6.3,1,8.4,2.9.2.2.4.4.6.6,2,2,3.2,4.9,3.4,8.2l.6,10.8h-.1c0,.1-11.1-.4-11.1-.4ZM794.1,246.4c-.6,0-1.2,0-1.9,0l-7.3.8-.5,7.3c-.3,3.9.8,7.2,2.9,9.6,2,2.3,5,3.6,8.5,3.8l11,.5-.5-10.7c-.2-3.6-1.5-6.6-3.9-8.6-2.1-1.8-5-2.8-8.3-2.8Z" fill="#fff"/>
                      <path d="M794.1,245.7c-.6,0-1.3,0-2,.1l-7.4.8c-.3,0-.5.3-.5.6l-.5,7.4c-.3,4.1.8,7.6,3.1,10.2,2.2,2.4,5.3,3.8,9,4l11.1.5s0,0,0,0c.2,0,.3,0,.4-.2.1-.1.2-.3.2-.5l-.6-10.8c-.2-3.5-1.4-6.4-3.5-8.5-.2-.2-.4-.4-.6-.6-2.3-2-5.3-3-8.8-3h0ZM806.3,268l-10.5-.5c-3.4-.2-6.2-1.4-8.2-3.6-2.1-2.3-3-5.5-2.8-9.3l.4-6.9,6.9-.7c.6,0,1.2,0,1.8,0,3.2,0,5.9.9,8,2.7,2.3,1.9,3.6,4.8,3.7,8.3l.5,10.1h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M827.8,289.8s0,0,0,0l-42.1-42.1s0-.1,0-.1h.1l42.1,42.1s0,.1,0,.1h0Z" fill="#fff"/>
                    <path d="M785.7,246.9c-.2,0-.3,0-.4.2-.2.2-.2.6,0,.9l42.1,42.1c.1.1.3.2.4.2s.3,0,.4-.2c.2-.2.2-.6,0-.9l-42.1-42.1c-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M785.8,289.8s0,0,0,0h0c0-.1,41.6-41.8,41.6-41.8h.1s0,.1,0,.1l-41.6,41.6h0Z" fill="#fff"/>
                    <path d="M827.5,247.4c-.2,0-.3,0-.4.2l-41.6,41.6c-.2.2-.2.6,0,.9.1.1.3.2.4.2s.3,0,.4-.2l41.6-41.6c.2-.2.2-.6,0-.9-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M807.4,314s0,0,0,0l.5-11.2c.2-3.6,1.5-6.6,3.8-8.7,2.2-2,5.2-3,8.6-3s.8,0,1.2,0l7.4.5h0c0,0,.8,7.5.8,7.5.4,4.2-.5,7.7-2.8,10.4-2.1,2.4-5.1,3.8-8.8,4l-10.8.6ZM820.2,291.2c-3.4,0-6.3,1-8.5,2.9-2.3,2-3.6,5-3.8,8.5l-.5,11,10.7-.6c3.6-.2,6.6-1.5,8.6-3.9,2.2-2.6,3.1-6.1,2.7-10.2l-.8-7.3-7.3-.5c-.4,0-.8,0-1.2,0Z" fill="#fff"/>
                      <path d="M820.2,290.5c-3.6,0-6.7,1.1-9,3.1-2.4,2.2-3.8,5.3-4,9l-.5,11.1c0,.2,0,.3.2.5,0,0,0,0,0,0,.1.1.3.2.4.2s0,0,0,0l10.8-.6c3.8-.2,7-1.6,9.1-4.2,2.3-2.7,3.3-6.4,2.9-10.7l-.8-7.4c0-.1,0-.3-.2-.4-.1-.1-.2-.2-.4-.2l-7.4-.5c-.4,0-.8,0-1.2,0h0ZM808,313.2l.5-10.5c.2-3.4,1.4-6.2,3.6-8.2,2.1-1.9,4.9-2.8,8.2-2.8s.7,0,1.1,0l6.9.4.7,6.9c.4,4-.5,7.4-2.6,9.8-1.9,2.3-4.8,3.6-8.3,3.7l-10.1.5h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M794.3,336.5c-.4,0-.8,0-1.2,0l-7.4-.5c0,0,0,0,0,0l-.8-7.4c-.4-4.2.5-7.7,2.8-10.4,2.1-2.4,5.1-3.8,8.8-4l10.8-.6h.1c0,.1-.5,11.2-.5,11.2-.2,3.6-1.5,6.6-3.8,8.7-2.2,2-5.2,3-8.6,3ZM796.4,314.3c-3.6.2-6.6,1.5-8.6,3.9-2.2,2.6-3.1,6.1-2.7,10.2l.8,7.3,7.3.5c.4,0,.8,0,1.2,0,3.4,0,6.3-1,8.5-2.9,2.3-2,3.6-5,3.8-8.5l.5-11-10.7.6Z" fill="#fff"/>
                      <path d="M807.2,313s0,0,0,0l-10.8.6c-3.8.2-7,1.6-9.1,4.2-2.3,2.7-3.3,6.4-2.9,10.7l.8,7.4c0,.3.3.5.6.5l7.4.5c.4,0,.8,0,1.2,0,3.6,0,6.7-1.1,9-3.1,2.4-2.2,3.8-5.3,4-9l.5-11.1c0-.2,0-.3-.2-.5-.1-.1-.3-.2-.4-.2h0ZM806.5,314.3l-.5,10.5c-.2,3.4-1.4,6.2-3.6,8.2-2.1,1.9-4.9,2.8-8.2,2.8s-.7,0-1.1,0l-6.9-.4-.7-6.9c-.4-4,.5-7.4,2.6-9.8,1.9-2.3,4.8-3.6,8.3-3.7l10.1-.5h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M820,336.3c-3.3,0-6.3-1-8.4-2.9-2.4-2.1-3.8-5.1-4-8.8l-.6-10.8h.1c0-.1,11.1.4,11.1.4,3.4.2,6.2,1.3,8.3,3.4.1.1.3.3.4.4,2.2,2.5,3.2,5.8,3,9.8l-.5,7.4c0,0,0,0,0,0l-7.4.8c-.6,0-1.3.1-1.9.1ZM807.8,324.7c.2,3.6,1.5,6.6,3.9,8.6,2.1,1.8,5,2.8,8.3,2.8h0c.6,0,1.2,0,1.9,0l7.3-.8.5-7.3c.3-3.9-.8-7.2-2.9-9.6-2-2.3-5-3.6-8.5-3.8l-11-.5.5,10.7Z" fill="#fff"/>
                      <path d="M807.2,313.3c-.2,0-.3,0-.4.2-.1.1-.2.3-.2.5l.6,10.8c.2,3.8,1.6,7,4.2,9.1,2.3,2,5.3,3,8.8,3s1.3,0,2-.1l7.4-.8c.3,0,.5-.3.5-.6l.5-7.4c.3-4.1-.8-7.6-3.1-10.2-.1-.2-.3-.3-.4-.5-2.1-2.1-5.1-3.4-8.6-3.5l-11.1-.5s0,0,0,0h0ZM820,335.6c-3.2,0-5.9-.9-8-2.7-2.3-1.9-3.6-4.8-3.7-8.3l-.5-10.1,10.5.5c3.4.2,6.2,1.4,8.2,3.6,2.1,2.3,3,5.5,2.8,9.3l-.4,6.9-6.9.7c-.6,0-1.2,0-1.8,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M796.2,313.2c-3.6-.2-6.6-1.5-8.7-3.8-2.2-2.5-3.2-5.8-3-9.8l.5-7.4c0,0,0,0,0,0l7.4-.8c.6,0,1.3-.1,1.9-.1,3.3,0,6.3,1,8.4,2.9.2.2.4.4.6.6,2,2,3.2,4.9,3.4,8.2l.6,10.8h-.1c0,.1-11.1-.4-11.1-.4ZM794.5,291.4c-.6,0-1.2,0-1.9,0l-7.3.8-.5,7.3c-.3,3.9.8,7.2,2.9,9.6,2,2.3,5,3.6,8.5,3.8l11,.5-.6-10.7c-.2-3.6-1.5-6.6-3.9-8.6-2.1-1.8-5-2.8-8.3-2.8Z" fill="#fff"/>
                      <path d="M794.5,290.7c-.6,0-1.3,0-2,.1l-7.4.8c-.3,0-.5.3-.5.6l-.5,7.4c-.3,4.1.8,7.6,3.1,10.2,2.2,2.4,5.3,3.8,9,4l11.1.5s0,0,0,0c.2,0,.3,0,.4-.2.1-.1.2-.3.2-.5l-.6-10.8c-.2-3.5-1.4-6.4-3.5-8.5-.2-.2-.4-.4-.6-.6-2.3-2-5.3-3-8.8-3h0ZM806.7,313l-10.5-.5c-3.4-.2-6.2-1.4-8.2-3.6-2.1-2.3-3-5.5-2.8-9.3l.4-6.9,6.9-.7c.6,0,1.2,0,1.8,0,3.2,0,5.9.9,8,2.7,2.3,1.9,3.6,4.8,3.7,8.3l.5,10.1h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M828.2,334.8s0,0,0,0l-42.1-42.1s0-.1,0-.1h.1l42.1,42.1s0,.1,0,.1h0Z" fill="#fff"/>
                    <path d="M786.1,292c-.2,0-.3,0-.4.2-.2.2-.2.6,0,.9l42.1,42.1c.1.1.3.2.4.2s.3,0,.4-.2c.2-.2.2-.6,0-.9l-42.1-42.1c-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M786.2,334.8s0,0,0,0,0-.1,0-.1l41.6-41.6h.1s0,.1,0,.1l-41.6,41.6h0Z" fill="#fff"/>
                    <path d="M827.9,292.5c-.2,0-.3,0-.4.2l-41.6,41.6c-.2.2-.2.6,0,.9.1.1.3.2.4.2s.3,0,.4-.2l41.6-41.6c.2-.2.2-.6,0-.9-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M807.7,358.8s0,0,0,0l.5-11.2c.2-3.6,1.5-6.6,3.8-8.7,2.2-2,5.2-3,8.6-3s.8,0,1.2,0l7.4.5h0c0,0,.8,7.5.8,7.5.4,4.2-.5,7.7-2.8,10.4-2.1,2.4-5.1,3.8-8.8,4l-10.8.6ZM820.5,336.1c-3.4,0-6.3,1-8.5,2.9-2.3,2-3.6,5-3.8,8.5l-.5,11,10.7-.6c3.6-.2,6.6-1.5,8.6-3.9,2.2-2.6,3.1-6.1,2.7-10.2l-.8-7.3-7.3-.5c-.4,0-.8,0-1.2,0Z" fill="#fff"/>
                      <path d="M820.5,335.3c-3.6,0-6.7,1.1-9,3.1-2.4,2.2-3.8,5.3-4,9l-.5,11.1c0,.2,0,.3.2.5,0,0,0,0,0,0,.1.1.3.2.4.2s0,0,0,0l10.8-.6c3.8-.2,7-1.6,9.1-4.2,2.3-2.7,3.3-6.4,2.9-10.7l-.8-7.4c0-.1,0-.3-.2-.4-.1-.1-.2-.2-.4-.2l-7.4-.5c-.4,0-.8,0-1.2,0h0ZM808.3,358l.5-10.5c.2-3.4,1.4-6.2,3.6-8.2,2.1-1.9,4.9-2.8,8.2-2.8s.7,0,1.1,0l6.9.4.7,6.9c.4,4-.5,7.4-2.6,9.8-1.9,2.3-4.8,3.6-8.3,3.7l-10.1.5h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M794.6,381.3c-.4,0-.8,0-1.2,0l-7.4-.5c0,0,0,0,0,0l-.8-7.4c-.4-4.2.5-7.7,2.8-10.4,2.1-2.4,5.1-3.8,8.8-4l10.8-.6h.1c0,.1-.5,11.2-.5,11.2-.2,3.6-1.5,6.6-3.8,8.7-2.2,2-5.2,3-8.6,3ZM796.7,359.1c-3.6.2-6.6,1.5-8.6,3.9-2.2,2.6-3.1,6.1-2.7,10.2l.8,7.3,7.3.5c.4,0,.8,0,1.2,0,3.4,0,6.3-1,8.5-2.9,2.3-2,3.6-5,3.8-8.5l.5-11-10.7.6Z" fill="#fff"/>
                      <path d="M807.5,357.8s0,0,0,0l-10.8.6c-3.8.2-7,1.6-9.1,4.2-2.3,2.7-3.3,6.4-2.9,10.7l.8,7.4c0,.3.3.5.6.5l7.4.5c.4,0,.8,0,1.2,0,3.6,0,6.7-1.1,9-3.1,2.4-2.2,3.8-5.3,4-9l.5-11.1c0-.2,0-.3-.2-.5-.1-.1-.3-.2-.4-.2h0ZM806.8,359.1l-.5,10.5c-.2,3.4-1.4,6.2-3.6,8.2-2.1,1.9-4.9,2.8-8.2,2.8s-.7,0-1.1,0l-6.9-.4-.7-6.9c-.4-4,.5-7.4,2.6-9.8,1.9-2.3,4.8-3.6,8.3-3.7l10.1-.5h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M820.3,381.1c-3.3,0-6.3-1-8.4-2.9-2.4-2.1-3.8-5.1-4-8.8l-.6-10.8h.1c0-.1,11.1.4,11.1.4,3.4.2,6.2,1.3,8.3,3.4.1.1.3.3.4.4,2.2,2.5,3.2,5.8,3,9.8l-.5,7.4c0,0,0,0,0,0l-7.4.8c-.6,0-1.3.1-1.9.1ZM808.1,369.5c.2,3.6,1.5,6.6,3.9,8.6,2.1,1.8,5,2.8,8.3,2.8h0c.6,0,1.2,0,1.9,0l7.3-.8.5-7.3c.3-3.9-.8-7.2-2.9-9.6-2-2.3-5-3.6-8.5-3.8l-11-.5.6,10.7Z" fill="#fff"/>
                      <path d="M807.5,358.1c-.2,0-.3,0-.4.2-.1.1-.2.3-.2.5l.6,10.8c.2,3.8,1.6,7,4.2,9.1,2.3,2,5.3,3,8.8,3s1.3,0,2-.1l7.4-.8c.3,0,.5-.3.5-.6l.5-7.4c.3-4.1-.8-7.6-3.1-10.2-.1-.2-.3-.3-.4-.5-2.1-2.1-5.1-3.4-8.6-3.5l-11.1-.5s0,0,0,0h0ZM820.3,380.4c-3.2,0-5.9-.9-8-2.7-2.3-1.9-3.6-4.8-3.7-8.3l-.5-10.1,10.5.5c3.4.2,6.2,1.4,8.2,3.6,2.1,2.3,3,5.5,2.8,9.3l-.4,6.9-6.9.7c-.6,0-1.2,0-1.8,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M796.5,358c-3.6-.2-6.6-1.5-8.7-3.8-2.2-2.5-3.2-5.8-3-9.8l.5-7.4c0,0,0,0,0,0l7.4-.8c.6,0,1.3-.1,1.9-.1,3.3,0,6.3,1,8.4,2.9.2.2.4.4.6.6,2,2,3.2,4.9,3.4,8.2l.6,10.8h-.1c0,.1-11.1-.4-11.1-.4ZM794.8,336.2c-.6,0-1.2,0-1.9,0l-7.3.8-.5,7.3c-.3,3.9.8,7.2,2.9,9.6,2,2.3,5,3.6,8.5,3.8l11,.5-.6-10.7c-.2-3.6-1.5-6.6-3.9-8.6-2.1-1.8-5-2.8-8.3-2.8Z" fill="#fff"/>
                      <path d="M794.8,335.5c-.6,0-1.3,0-2,.1l-7.4.8c-.3,0-.5.3-.5.6l-.5,7.4c-.3,4.1.8,7.6,3.1,10.2,2.2,2.4,5.3,3.8,9,4l11.1.5s0,0,0,0c.2,0,.3,0,.4-.2.1-.1.2-.3.2-.5l-.6-10.8c-.2-3.5-1.4-6.4-3.5-8.5-.2-.2-.4-.4-.6-.6-2.3-2-5.3-3-8.8-3h0ZM807,357.8l-10.5-.5c-3.4-.2-6.2-1.4-8.2-3.6-2.1-2.3-3-5.5-2.8-9.3l.4-6.9,6.9-.7c.6,0,1.2,0,1.8,0,3.2,0,5.9.9,8,2.7,2.3,1.9,3.6,4.8,3.7,8.3l.5,10.1h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M828.5,379.6s0,0,0,0l-42.1-42.1s0-.1,0-.1h.1l42.1,42.1s0,.1,0,.1h0Z" fill="#fff"/>
                    <path d="M786.4,336.8c-.2,0-.3,0-.4.2-.2.2-.2.6,0,.9l42.1,42.1c.1.1.3.2.4.2s.3,0,.4-.2c.2-.2.2-.6,0-.9l-42.1-42.1c-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M786.5,379.6s0,0,0,0,0-.1,0-.1l41.6-41.6h.1s0,.1,0,.1l-41.6,41.6h0Z" fill="#fff"/>
                    <path d="M828.2,337.3c-.2,0-.3,0-.4.2l-41.6,41.6c-.2.2-.2.6,0,.9.1.1.3.2.4.2s.3,0,.4-.2l41.6-41.6c.2-.2.2-.6,0-.9s-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M808.1,403.8s0,0,0,0l.5-11.2c.2-3.6,1.5-6.6,3.8-8.7,2.2-2,5.2-3,8.6-3s.8,0,1.2,0l7.4.5h0c0,0,.8,7.5.8,7.5.4,4.2-.5,7.7-2.8,10.4-2.1,2.4-5.1,3.8-8.8,4l-10.8.6ZM820.9,381.1c-3.4,0-6.3,1-8.5,2.9-2.3,2-3.6,5-3.8,8.5l-.5,11,10.7-.6c3.6-.2,6.6-1.5,8.6-3.9,2.2-2.6,3.1-6.1,2.7-10.2l-.8-7.3-7.3-.5c-.4,0-.8,0-1.2,0Z" fill="#fff"/>
                      <path d="M820.9,380.4c-3.6,0-6.7,1.1-9,3.1-2.4,2.2-3.8,5.3-4,9l-.5,11.1c0,.2,0,.3.2.5,0,0,0,0,0,0,.1.1.3.2.4.2s0,0,0,0l10.8-.6c3.8-.2,7-1.6,9.1-4.2,2.3-2.7,3.3-6.4,2.9-10.7l-.8-7.4c0-.1,0-.3-.2-.4-.1-.1-.2-.2-.4-.2l-7.4-.5c-.4,0-.8,0-1.2,0h0ZM808.7,403.1l.5-10.5c.2-3.4,1.4-6.2,3.6-8.2,2.1-1.9,4.9-2.8,8.2-2.8s.7,0,1.1,0l6.9.4.7,6.9c.4,4-.5,7.4-2.6,9.8-1.9,2.3-4.8,3.6-8.3,3.7l-10.1.5h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M795,426.3c-.4,0-.8,0-1.2,0l-7.4-.5c0,0,0,0,0,0l-.8-7.4c-.4-4.2.5-7.7,2.8-10.4,2.1-2.4,5.1-3.8,8.8-4l10.8-.6h.1c0,.1-.5,11.2-.5,11.2-.2,3.6-1.5,6.6-3.8,8.7-2.2,2-5.2,3-8.6,3ZM797.1,404.2c-3.6.2-6.6,1.5-8.6,3.9-2.2,2.6-3.1,6.1-2.7,10.2l.8,7.3,7.3.5c.4,0,.8,0,1.2,0,3.4,0,6.3-1,8.5-2.9,2.3-2,3.6-5,3.8-8.5l.5-11-10.7.6Z" fill="#fff"/>
                      <path d="M807.9,402.9s0,0,0,0l-10.8.6c-3.8.2-7,1.6-9.1,4.2-2.3,2.7-3.3,6.4-2.9,10.7l.8,7.4c0,.3.3.5.6.5l7.4.5c.4,0,.8,0,1.2,0,3.6,0,6.7-1.1,9-3.1,2.4-2.2,3.8-5.3,4-9l.5-11.1c0-.2,0-.3-.2-.5-.1-.1-.3-.2-.4-.2h0ZM807.2,404.1l-.5,10.5c-.2,3.4-1.4,6.2-3.6,8.2-2.1,1.9-4.9,2.8-8.2,2.8s-.7,0-1.1,0l-6.9-.4-.7-6.9c-.4-4,.5-7.4,2.6-9.8,1.9-2.3,4.8-3.6,8.3-3.7l10.1-.5h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M820.7,426.1c-3.3,0-6.3-1-8.4-2.9-2.4-2.1-3.8-5.1-4-8.8l-.6-10.8h.1c0-.1,11.1.4,11.1.4,3.4.2,6.2,1.3,8.3,3.4.1.1.3.3.4.4,2.2,2.5,3.2,5.8,3,9.8l-.5,7.4c0,0,0,0,0,0l-7.4.8c-.6,0-1.3.1-1.9.1ZM808.5,414.5c.2,3.6,1.5,6.6,3.9,8.6,2.1,1.8,5,2.8,8.3,2.8h0c.6,0,1.2,0,1.9,0l7.3-.8.5-7.3c.3-3.9-.8-7.2-2.9-9.6-2-2.3-5-3.6-8.5-3.8l-11-.5.6,10.7Z" fill="#fff"/>
                      <path d="M807.9,403.1c-.2,0-.3,0-.4.2-.1.1-.2.3-.2.5l.6,10.8c.2,3.8,1.6,7,4.2,9.1,2.3,2,5.3,3,8.8,3s1.3,0,2-.1l7.4-.8c.3,0,.5-.3.5-.6l.5-7.4c.3-4.1-.8-7.6-3.1-10.2-.1-.2-.3-.3-.4-.5-2.1-2.1-5.1-3.4-8.6-3.5l-11.1-.5s0,0,0,0h0ZM820.7,425.4c-3.2,0-5.9-.9-8-2.7-2.3-1.9-3.6-4.8-3.7-8.3l-.5-10.1,10.5.5c3.4.2,6.2,1.4,8.2,3.6,2.1,2.3,3,5.5,2.8,9.3l-.4,6.9-6.9.7c-.6,0-1.2,0-1.8,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M796.9,403.1c-3.6-.2-6.6-1.5-8.7-3.8-2.2-2.5-3.2-5.8-3-9.8l.5-7.4c0,0,0,0,0,0l7.4-.8c.6,0,1.3-.1,1.9-.1,3.3,0,6.3,1,8.4,2.9.2.2.4.4.6.6,2,2,3.2,4.9,3.4,8.2l.6,10.8h-.1c0,.1-11.1-.4-11.1-.4ZM795.2,381.3c-.6,0-1.2,0-1.9,0l-7.3.8-.5,7.3c-.3,3.9.8,7.2,2.9,9.6,2,2.3,5,3.6,8.5,3.8l11,.5-.6-10.7c-.2-3.6-1.5-6.6-3.9-8.6-2.1-1.8-5-2.8-8.3-2.8Z" fill="#fff"/>
                      <path d="M795.2,380.6c-.6,0-1.3,0-2,.1l-7.4.8c-.3,0-.5.3-.5.6l-.5,7.4c-.3,4.1.8,7.6,3.1,10.2,2.2,2.4,5.3,3.8,9,4l11.1.5s0,0,0,0c.2,0,.3,0,.4-.2.1-.1.2-.3.2-.5l-.6-10.8c-.2-3.5-1.4-6.4-3.5-8.5-.2-.2-.4-.4-.6-.6-2.3-2-5.3-3-8.8-3h0ZM807.4,402.9l-10.5-.5c-3.4-.2-6.2-1.4-8.2-3.6-2.1-2.3-3-5.5-2.8-9.3l.4-6.9,6.9-.7c.6,0,1.2,0,1.8,0,3.2,0,5.9.9,8,2.7,2.3,1.9,3.6,4.8,3.7,8.3l.5,10.1h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M828.9,424.7s0,0,0,0l-42.1-42.1s0-.1,0-.1h.1l42.1,42.1s0,.1,0,.1h0Z" fill="#fff"/>
                    <path d="M786.8,381.8c-.2,0-.3,0-.4.2-.2.2-.2.6,0,.9l42.1,42.1c.1.1.3.2.4.2s.3,0,.4-.2c.2-.2.2-.6,0-.9l-42.1-42.1c-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M786.9,424.7s0,0,0,0c0,0,0-.1,0-.1l41.6-41.6h.1s0,.1,0,.1l-41.6,41.6h0Z" fill="#fff"/>
                    <path d="M828.6,382.3c-.2,0-.3,0-.4.2l-41.6,41.6c-.2.2-.2.6,0,.9s.3.2.4.2.3,0,.4-.2l41.6-41.6c.2-.2.2-.6,0-.9s-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                </g>
              </g>
              <g opacity=".6">
                <g>
                  <g>
                    <g>
                      <path d="M761.3,268.9s0,0,0,0l.5-11.2c.2-3.6,1.5-6.6,3.8-8.7,2.2-2,5.2-3,8.6-3s.8,0,1.2,0l7.4.5h0c0,0,.8,7.5.8,7.5.4,4.2-.5,7.7-2.8,10.4-2.1,2.4-5.1,3.8-8.8,4l-10.8.6ZM774.1,246.2c-3.4,0-6.3,1-8.5,2.9-2.3,2-3.6,5-3.8,8.5l-.5,11,10.7-.6c3.6-.2,6.6-1.5,8.6-3.9,2.2-2.6,3.1-6.1,2.7-10.2l-.8-7.3-7.3-.5c-.4,0-.8,0-1.2,0Z" fill="#fff"/>
                      <path d="M774.1,245.5c-3.6,0-6.7,1.1-9,3.1-2.4,2.2-3.8,5.3-4,9l-.5,11.1c0,.2,0,.3.2.5,0,0,0,0,0,0,.1.1.3.2.4.2s0,0,0,0l10.8-.6c3.8-.2,7-1.6,9.1-4.2,2.3-2.7,3.3-6.4,2.9-10.7l-.8-7.4c0-.1,0-.3-.2-.4-.1-.1-.2-.2-.4-.2l-7.4-.5c-.4,0-.8,0-1.2,0h0ZM761.9,268.2l.5-10.5c.2-3.4,1.4-6.2,3.6-8.2,2.1-1.9,4.9-2.8,8.2-2.8s.7,0,1.1,0l6.9.4.7,6.9c.4,4-.5,7.4-2.6,9.8-1.9,2.3-4.8,3.6-8.3,3.7l-10.1.5h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M748.2,291.4c-.4,0-.8,0-1.2,0l-7.4-.5c0,0,0,0,0,0l-.8-7.4c-.4-4.2.5-7.7,2.8-10.4,2.1-2.4,5.1-3.8,8.8-4l10.8-.6h.1c0,.1-.5,11.2-.5,11.2-.2,3.6-1.5,6.6-3.8,8.7-2.2,2-5.2,3-8.6,3ZM750.3,269.3c-3.6.2-6.6,1.5-8.6,3.9-2.2,2.6-3.1,6.1-2.7,10.2l.8,7.3,7.3.5c.4,0,.8,0,1.2,0,3.4,0,6.3-1,8.5-2.9,2.3-2,3.6-5,3.8-8.5l.5-11-10.7.6Z" fill="#fff"/>
                      <path d="M761.1,268s0,0,0,0l-10.8.6c-3.8.2-7,1.6-9.1,4.2-2.3,2.7-3.3,6.4-2.9,10.7l.8,7.4c0,.3.3.5.6.5l7.4.5c.4,0,.8,0,1.2,0,3.6,0,6.7-1.1,9-3.1,2.4-2.2,3.8-5.3,4-9l.5-11.1c0-.2,0-.3-.2-.5-.1-.1-.3-.2-.4-.2h0ZM760.4,269.2l-.5,10.5c-.2,3.4-1.4,6.2-3.6,8.2-2.1,1.9-4.9,2.8-8.2,2.8s-.7,0-1.1,0l-6.9-.4-.7-6.9c-.4-4,.5-7.4,2.6-9.8,1.9-2.3,4.8-3.6,8.3-3.7l10.1-.5h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M774,291.2c-3.3,0-6.3-1-8.4-2.9-2.4-2.1-3.8-5.1-4-8.8l-.6-10.8h.1c0-.1,11.1.4,11.1.4,3.4.2,6.2,1.3,8.3,3.4.1.1.3.3.4.4,2.2,2.5,3.2,5.8,3,9.8l-.5,7.4c0,0,0,0,0,0l-7.4.8c-.6,0-1.3.1-1.9.1ZM761.7,279.6c.2,3.6,1.5,6.6,3.9,8.6,2.1,1.8,5,2.8,8.3,2.8h0c.6,0,1.2,0,1.9,0l7.3-.8.5-7.3c.3-3.9-.8-7.2-2.9-9.6-2-2.3-5-3.6-8.5-3.8l-11-.5.6,10.7Z" fill="#fff"/>
                      <path d="M761.1,268.2c-.2,0-.3,0-.4.2-.1.1-.2.3-.2.5l.6,10.8c.2,3.8,1.6,7,4.2,9.1,2.3,2,5.3,3,8.8,3s1.3,0,2-.1l7.4-.8c.3,0,.5-.3.5-.6l.5-7.4c.3-4.1-.8-7.6-3.1-10.2-.1-.2-.3-.3-.4-.5-2.1-2.1-5.1-3.4-8.6-3.5l-11.1-.5s0,0,0,0h0ZM774,290.5c-3.2,0-5.9-.9-8-2.7-2.3-1.9-3.6-4.8-3.7-8.3l-.5-10.1,10.5.5c3.4.2,6.2,1.4,8.2,3.6,2.1,2.3,3,5.5,2.8,9.3l-.4,6.9-6.9.7c-.6,0-1.2,0-1.8,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M750.2,268.2c-3.6-.2-6.6-1.5-8.7-3.8-2.2-2.5-3.2-5.8-3-9.8l.5-7.4c0,0,0,0,0,0l7.4-.8c.6,0,1.3-.1,1.9-.1,3.3,0,6.3,1,8.4,2.9.2.2.4.4.6.6,2,2,3.2,4.9,3.4,8.2l.6,10.8h-.1c0,.1-11.1-.4-11.1-.4ZM748.4,246.4c-.6,0-1.2,0-1.9,0l-7.3.8-.5,7.3c-.3,3.9.8,7.2,2.9,9.6,2,2.3,5,3.6,8.5,3.8l11,.5-.6-10.7c-.2-3.6-1.5-6.6-3.9-8.6-2.1-1.8-5-2.8-8.3-2.8Z" fill="#fff"/>
                      <path d="M748.4,245.7c-.6,0-1.3,0-2,.1l-7.4.8c-.3,0-.5.3-.5.6l-.5,7.4c-.3,4.1.8,7.6,3.1,10.2,2.2,2.4,5.3,3.8,9,4l11.1.5s0,0,0,0c.2,0,.3,0,.4-.2.1-.1.2-.3.2-.5l-.6-10.8c-.2-3.5-1.4-6.4-3.5-8.5-.2-.2-.4-.4-.6-.6-2.3-2-5.3-3-8.8-3h0ZM760.6,268l-10.5-.5c-3.4-.2-6.2-1.4-8.2-3.6-2.1-2.3-3-5.5-2.8-9.3l.4-6.9,6.9-.7c.6,0,1.2,0,1.8,0,3.2,0,5.9.9,8,2.7,2.3,1.9,3.6,4.8,3.7,8.3l.5,10.1h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M782.1,289.8s0,0,0,0l-42.1-42.1s0-.1,0-.1h.1l42.1,42.1s0,.1,0,.1h0Z" fill="#fff"/>
                    <path d="M740,246.9c-.2,0-.3,0-.4.2-.2.2-.2.6,0,.9l42.1,42.1c.1.1.3.2.4.2s.3,0,.4-.2c.2-.2.2-.6,0-.9l-42.1-42.1c-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M740.1,289.8s0,0,0,0h0c0-.1,41.6-41.8,41.6-41.8h.1s0,.1,0,.1l-41.6,41.6h0Z" fill="#fff"/>
                    <path d="M781.8,247.4c-.2,0-.3,0-.4.2l-41.6,41.6c-.2.2-.2.6,0,.9.1.1.3.2.4.2s.3,0,.4-.2l41.6-41.6c.2-.2.2-.6,0-.9-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M761.7,314s0,0,0,0l.5-11.2c.2-3.6,1.5-6.6,3.8-8.7,2.2-2,5.2-3,8.6-3s.8,0,1.2,0l7.4.5h0c0,0,.8,7.5.8,7.5.4,4.2-.5,7.7-2.8,10.4-2.1,2.4-5.1,3.8-8.8,4l-10.8.6ZM774.6,291.2c-3.4,0-6.3,1-8.5,2.9-2.3,2-3.6,5-3.8,8.5l-.5,11,10.7-.6c3.6-.2,6.6-1.5,8.6-3.9,2.2-2.6,3.1-6.1,2.7-10.2l-.8-7.3-7.3-.5c-.4,0-.8,0-1.2,0Z" fill="#fff"/>
                      <path d="M774.6,290.5c-3.6,0-6.7,1.1-9,3.1-2.4,2.2-3.8,5.3-4,9l-.5,11.1c0,.2,0,.3.2.5,0,0,0,0,0,0,.1.1.3.2.4.2s0,0,0,0l10.8-.6c3.8-.2,7-1.6,9.1-4.2,2.3-2.7,3.3-6.4,2.9-10.7l-.8-7.4c0-.1,0-.3-.2-.4-.1-.1-.2-.2-.4-.2l-7.4-.5c-.4,0-.8,0-1.2,0h0ZM762.3,313.2l.5-10.5c.2-3.4,1.4-6.2,3.6-8.2,2.1-1.9,4.9-2.8,8.2-2.8s.7,0,1.1,0l6.9.4.7,6.9c.4,4-.5,7.4-2.6,9.8-1.9,2.3-4.8,3.6-8.3,3.7l-10.1.5h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M748.6,336.5c-.4,0-.8,0-1.2,0l-7.4-.5c0,0,0,0,0,0l-.8-7.4c-.4-4.2.5-7.7,2.8-10.4,2.1-2.4,5.1-3.8,8.8-4l10.8-.6h.1c0,.1-.5,11.2-.5,11.2-.2,3.6-1.5,6.6-3.8,8.7-2.2,2-5.2,3-8.6,3ZM750.7,314.3c-3.6.2-6.6,1.5-8.6,3.9-2.2,2.6-3.1,6.1-2.7,10.2l.8,7.3,7.3.5c.4,0,.8,0,1.2,0,3.4,0,6.3-1,8.5-2.9,2.3-2,3.6-5,3.8-8.5l.5-11-10.7.6Z" fill="#fff"/>
                      <path d="M761.5,313s0,0,0,0l-10.8.6c-3.8.2-7,1.6-9.1,4.2-2.3,2.7-3.3,6.4-2.9,10.7l.8,7.4c0,.3.3.5.6.5l7.4.5c.4,0,.8,0,1.2,0,3.6,0,6.7-1.1,9-3.1,2.4-2.2,3.8-5.3,4-9l.5-11.1c0-.2,0-.3-.2-.5-.1-.1-.3-.2-.4-.2h0ZM760.8,314.3l-.5,10.5c-.2,3.4-1.4,6.2-3.6,8.2-2.1,1.9-4.9,2.8-8.2,2.8s-.7,0-1.1,0l-6.9-.4-.7-6.9c-.4-4,.5-7.4,2.6-9.8,1.9-2.3,4.8-3.6,8.3-3.7l10.1-.5h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M774.4,336.3c-3.3,0-6.3-1-8.4-2.9-2.4-2.1-3.8-5.1-4-8.8l-.6-10.8h.1c0-.1,11.1.4,11.1.4,3.4.2,6.2,1.3,8.3,3.4.1.1.3.3.4.4,2.2,2.5,3.2,5.8,3,9.8l-.5,7.4c0,0,0,0,0,0l-7.4.8c-.6,0-1.3.1-1.9.1ZM762.1,324.7c.2,3.6,1.5,6.6,3.9,8.6,2.1,1.8,5,2.8,8.3,2.8h0c.6,0,1.2,0,1.9,0l7.3-.8.5-7.3c.3-3.9-.8-7.2-2.9-9.6-2-2.3-5-3.6-8.5-3.8l-11-.5.6,10.7Z" fill="#fff"/>
                      <path d="M761.5,313.3c-.2,0-.3,0-.4.2-.1.1-.2.3-.2.5l.6,10.8c.2,3.8,1.6,7,4.2,9.1,2.3,2,5.3,3,8.8,3s1.3,0,2-.1l7.4-.8c.3,0,.5-.3.5-.6l.5-7.4c.3-4.1-.8-7.6-3.1-10.2-.1-.2-.3-.3-.4-.5-2.1-2.1-5.1-3.4-8.6-3.5l-11.1-.5s0,0,0,0h0ZM774.4,335.6c-3.2,0-5.9-.9-8-2.7-2.3-1.9-3.6-4.8-3.7-8.3l-.5-10.1,10.5.5c3.4.2,6.2,1.4,8.2,3.6,2.1,2.3,3,5.5,2.8,9.3l-.4,6.9-6.9.7c-.6,0-1.2,0-1.8,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M750.6,313.2c-3.6-.2-6.6-1.5-8.7-3.8-2.2-2.5-3.2-5.8-3-9.8l.5-7.4c0,0,0,0,0,0l7.4-.8c.6,0,1.3-.1,1.9-.1,3.3,0,6.3,1,8.4,2.9.2.2.4.4.6.6,2,2,3.2,4.9,3.4,8.2l.6,10.8h-.1c0,.1-11.1-.4-11.1-.4ZM748.8,291.4c-.6,0-1.2,0-1.9,0l-7.3.8-.5,7.3c-.3,3.9.8,7.2,2.9,9.6,2,2.3,5,3.6,8.5,3.8l11,.5-.6-10.7c-.2-3.6-1.5-6.6-3.9-8.6-2.1-1.8-5-2.8-8.3-2.8Z" fill="#fff"/>
                      <path d="M748.8,290.7c-.6,0-1.3,0-2,.1l-7.4.8c-.3,0-.5.3-.5.6l-.5,7.4c-.3,4.1.8,7.6,3.1,10.2,2.2,2.4,5.3,3.8,9,4l11.1.5s0,0,0,0c.2,0,.3,0,.4-.2.1-.1.2-.3.2-.5l-.6-10.8c-.2-3.5-1.4-6.4-3.5-8.5-.2-.2-.4-.4-.6-.6-2.3-2-5.3-3-8.8-3h0ZM761.1,313l-10.5-.5c-3.4-.2-6.2-1.4-8.2-3.6-2.1-2.3-3-5.5-2.8-9.3l.4-6.9,6.9-.7c.6,0,1.2,0,1.8,0,3.2,0,5.9.9,8,2.7,2.3,1.9,3.6,4.8,3.7,8.3l.5,10.1h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M782.5,334.8s0,0,0,0l-42.1-42.1s0-.1,0-.1h.1l42.1,42.1s0,.1,0,.1h0Z" fill="#fff"/>
                    <path d="M740.4,292c-.2,0-.3,0-.4.2-.2.2-.2.6,0,.9l42.1,42.1c.1.1.3.2.4.2s.3,0,.4-.2c.2-.2.2-.6,0-.9l-42.1-42.1c-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M740.6,334.8s0,0,0,0,0-.1,0-.1l41.6-41.6h.1s0,.1,0,.1l-41.6,41.6h0Z" fill="#fff"/>
                    <path d="M782.2,292.5c-.2,0-.3,0-.4.2l-41.6,41.6c-.2.2-.2.6,0,.9.1.1.3.2.4.2s.3,0,.4-.2l41.6-41.6c.2-.2.2-.6,0-.9-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M762,358.8s0,0,0,0l.5-11.2c.2-3.6,1.5-6.6,3.8-8.7,2.2-2,5.2-3,8.6-3s.8,0,1.2,0l7.4.5h0c0,0,.8,7.5.8,7.5.4,4.2-.5,7.7-2.8,10.4-2.1,2.4-5.1,3.8-8.8,4l-10.8.6ZM774.9,336.1c-3.4,0-6.3,1-8.5,2.9-2.3,2-3.6,5-3.8,8.5l-.5,11,10.7-.6c3.6-.2,6.6-1.5,8.6-3.9,2.2-2.6,3.1-6.1,2.7-10.2l-.8-7.3-7.3-.5c-.4,0-.8,0-1.2,0Z" fill="#fff"/>
                      <path d="M774.8,335.3c-3.6,0-6.7,1.1-9,3.1-2.4,2.2-3.8,5.3-4,9l-.5,11.1c0,.2,0,.3.2.5,0,0,0,0,0,0,.1.1.3.2.4.2s0,0,0,0l10.8-.6c3.8-.2,7-1.6,9.1-4.2,2.3-2.7,3.3-6.4,2.9-10.7l-.8-7.4c0-.1,0-.3-.2-.4-.1-.1-.2-.2-.4-.2l-7.4-.5c-.4,0-.8,0-1.2,0h0ZM762.6,358l.5-10.5c.2-3.4,1.4-6.2,3.6-8.2,2.1-1.9,4.9-2.8,8.2-2.8s.7,0,1.1,0l6.9.4.7,6.9c.4,4-.5,7.4-2.6,9.8-1.9,2.3-4.8,3.6-8.3,3.7l-10.1.5h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M748.9,381.3c-.4,0-.8,0-1.2,0l-7.4-.5c0,0,0,0,0,0l-.8-7.4c-.4-4.2.5-7.7,2.8-10.4,2.1-2.4,5.1-3.8,8.8-4l10.8-.6h.1c0,.1-.5,11.2-.5,11.2-.2,3.6-1.5,6.6-3.8,8.7-2.2,2-5.2,3-8.6,3ZM751,359.1c-3.6.2-6.6,1.5-8.6,3.9-2.2,2.6-3.1,6.1-2.7,10.2l.8,7.3,7.3.5c.4,0,.8,0,1.2,0,3.4,0,6.3-1,8.5-2.9,2.3-2,3.6-5,3.8-8.5l.5-11-10.7.6Z" fill="#fff"/>
                      <path d="M761.8,357.8s0,0,0,0l-10.8.6c-3.8.2-7,1.6-9.1,4.2-2.3,2.7-3.3,6.4-2.9,10.7l.8,7.4c0,.3.3.5.6.5l7.4.5c.4,0,.8,0,1.2,0,3.6,0,6.7-1.1,9-3.1,2.4-2.2,3.8-5.3,4-9l.5-11.1c0-.2,0-.3-.2-.5-.1-.1-.3-.2-.4-.2h0ZM761.1,359.1l-.5,10.5c-.2,3.4-1.4,6.2-3.6,8.2-2.1,1.9-4.9,2.8-8.2,2.8s-.7,0-1.1,0l-6.9-.4-.7-6.9c-.4-4,.5-7.4,2.6-9.8,1.9-2.3,4.8-3.6,8.3-3.7l10.1-.5h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M774.7,381.1c-3.3,0-6.3-1-8.4-2.9-2.4-2.1-3.8-5.1-4-8.8l-.6-10.8h.1c0-.1,11.1.4,11.1.4,3.4.2,6.2,1.3,8.3,3.4.1.1.3.3.4.4,2.2,2.5,3.2,5.8,3,9.8l-.5,7.4c0,0,0,0,0,0l-7.4.8c-.6,0-1.3.1-1.9.1ZM762.4,369.5c.2,3.6,1.5,6.6,3.9,8.6,2.1,1.8,5,2.8,8.3,2.8h0c.6,0,1.2,0,1.9,0l7.3-.8.5-7.3c.3-3.9-.8-7.2-2.9-9.6-2-2.3-5-3.6-8.5-3.8l-11-.5.5,10.7Z" fill="#fff"/>
                      <path d="M761.8,358.1c-.2,0-.3,0-.4.2-.1.1-.2.3-.2.5l.6,10.8c.2,3.8,1.6,7,4.2,9.1,2.3,2,5.3,3,8.8,3s1.3,0,2-.1l7.4-.8c.3,0,.5-.3.5-.6l.5-7.4c.3-4.1-.8-7.6-3.1-10.2-.1-.2-.3-.3-.4-.5-2.1-2.1-5.1-3.4-8.6-3.5l-11.1-.5s0,0,0,0h0ZM774.7,380.4c-3.2,0-5.9-.9-8-2.7-2.3-1.9-3.6-4.8-3.7-8.3l-.5-10.1,10.5.5c3.4.2,6.2,1.4,8.2,3.6,2.1,2.3,3,5.5,2.8,9.3l-.4,6.9-6.9.7c-.6,0-1.2,0-1.8,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M750.9,358c-3.6-.2-6.6-1.5-8.7-3.8-2.2-2.5-3.2-5.8-3-9.8l.5-7.4c0,0,0,0,0,0l7.4-.8c.6,0,1.3-.1,1.9-.1,3.3,0,6.3,1,8.4,2.9.2.2.4.4.6.6,2,2,3.2,4.9,3.4,8.2l.6,10.8h-.1c0,.1-11.1-.4-11.1-.4ZM749.1,336.2c-.6,0-1.2,0-1.9,0l-7.3.8-.5,7.3c-.3,3.9.8,7.2,2.9,9.6,2,2.3,5,3.6,8.5,3.8l11,.5-.5-10.7c-.2-3.6-1.5-6.6-3.9-8.6-2.1-1.8-5-2.8-8.3-2.8Z" fill="#fff"/>
                      <path d="M749.1,335.5c-.6,0-1.3,0-2,.1l-7.4.8c-.3,0-.5.3-.5.6l-.5,7.4c-.3,4.1.8,7.6,3.1,10.2,2.2,2.4,5.3,3.8,9,4l11.1.5s0,0,0,0c.2,0,.3,0,.4-.2.1-.1.2-.3.2-.5l-.6-10.8c-.2-3.5-1.4-6.4-3.5-8.5-.2-.2-.4-.4-.6-.6-2.3-2-5.3-3-8.8-3h0ZM761.3,357.8l-10.5-.5c-3.4-.2-6.2-1.4-8.2-3.6-2.1-2.3-3-5.5-2.8-9.3l.4-6.9,6.9-.7c.6,0,1.2,0,1.8,0,3.2,0,5.9.9,8,2.7,2.3,1.9,3.6,4.8,3.7,8.3l.5,10.1h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M782.8,379.6s0,0,0,0l-42.1-42.1s0-.1,0-.1h.1l42.1,42.1s0,.1,0,.1h0Z" fill="#fff"/>
                    <path d="M740.7,336.8c-.2,0-.3,0-.4.2-.2.2-.2.6,0,.9l42.1,42.1c.1.1.3.2.4.2s.3,0,.4-.2c.2-.2.2-.6,0-.9l-42.1-42.1c-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M740.8,379.6s0,0,0,0,0-.1,0-.1l41.6-41.6h.1s0,.1,0,.1l-41.6,41.6h0Z" fill="#fff"/>
                    <path d="M782.5,337.3c-.2,0-.3,0-.4.2l-41.6,41.6c-.2.2-.2.6,0,.9.1.1.3.2.4.2s.3,0,.4-.2l41.6-41.6c.2-.2.2-.6,0-.9-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M762.4,403.8s0,0,0,0l.5-11.2c.2-3.6,1.5-6.6,3.8-8.7,2.2-2,5.2-3,8.6-3s.8,0,1.2,0l7.4.5h0c0,0,.8,7.5.8,7.5.4,4.2-.5,7.8-2.8,10.4-2.1,2.4-5.1,3.8-8.8,4l-10.8.6ZM775.3,381.1c-3.4,0-6.3,1-8.5,2.9-2.3,2-3.6,5-3.8,8.5l-.5,11,10.7-.6c3.6-.2,6.6-1.5,8.6-3.9,2.2-2.6,3.1-6.1,2.7-10.2l-.8-7.3-7.3-.5c-.4,0-.8,0-1.2,0Z" fill="#fff"/>
                      <path d="M775.3,380.4c-3.6,0-6.7,1.1-9,3.1-2.4,2.2-3.8,5.3-4,9l-.5,11.1c0,.2,0,.3.2.5,0,0,0,0,0,0,.1.1.3.2.4.2s0,0,0,0l10.8-.6c3.8-.2,7-1.6,9.1-4.2,2.3-2.7,3.3-6.4,2.9-10.7l-.8-7.4c0-.1,0-.3-.2-.4-.1-.1-.2-.2-.4-.2l-7.4-.5c-.4,0-.8,0-1.2,0h0ZM763,403.1l.5-10.5c.2-3.4,1.4-6.2,3.6-8.2,2.1-1.9,4.9-2.8,8.2-2.8s.7,0,1.1,0l6.9.4.7,6.9c.4,4-.5,7.4-2.6,9.8-1.9,2.3-4.8,3.6-8.3,3.7l-10.1.5h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M749.3,426.3c-.4,0-.8,0-1.2,0l-7.4-.5c0,0,0,0,0,0l-.8-7.4c-.4-4.2.5-7.7,2.8-10.4,2.1-2.4,5.1-3.8,8.8-4l10.8-.6h.1c0,.1-.5,11.2-.5,11.2-.2,3.6-1.5,6.6-3.8,8.7-2.2,2-5.2,3-8.6,3ZM751.4,404.2c-3.6.2-6.6,1.5-8.6,3.9-2.2,2.6-3.1,6.1-2.7,10.2l.8,7.3,7.3.5c.4,0,.8,0,1.2,0,3.4,0,6.3-1,8.5-2.9,2.3-2,3.6-5,3.8-8.5l.5-11-10.7.6Z" fill="#fff"/>
                      <path d="M762.2,402.9s0,0,0,0l-10.8.6c-3.8.2-7,1.6-9.1,4.2-2.3,2.7-3.3,6.4-2.9,10.7l.8,7.4c0,.3.3.5.6.5l7.4.5c.4,0,.8,0,1.2,0,3.6,0,6.7-1.1,9-3.1,2.4-2.2,3.8-5.3,4-9l.5-11.1c0-.2,0-.3-.2-.5-.1-.1-.3-.2-.4-.2h0ZM761.5,404.1l-.5,10.5c-.2,3.4-1.4,6.2-3.6,8.2-2.1,1.9-4.9,2.8-8.2,2.8s-.7,0-1.1,0l-6.9-.4-.7-6.9c-.4-4,.5-7.4,2.6-9.8,1.9-2.3,4.8-3.6,8.3-3.7l10.1-.5h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M775.1,426.1c-3.3,0-6.3-1-8.4-2.9-2.4-2.1-3.8-5.1-4-8.8l-.6-10.8h.1c0-.1,11.1.4,11.1.4,3.4.2,6.2,1.3,8.3,3.4.1.1.3.3.4.4,2.2,2.5,3.2,5.8,3,9.8l-.5,7.4c0,0,0,0,0,0l-7.4.8c-.6,0-1.3.1-1.9.1ZM762.8,414.5c.2,3.6,1.5,6.6,3.9,8.6,2.1,1.8,5,2.8,8.3,2.8h0c.6,0,1.2,0,1.9,0l7.3-.8.5-7.3c.3-3.9-.8-7.2-2.9-9.6-2-2.3-5-3.6-8.5-3.8l-11-.5.5,10.7Z" fill="#fff"/>
                      <path d="M762.2,403.1c-.2,0-.3,0-.4.2-.1.1-.2.3-.2.5l.6,10.8c.2,3.8,1.6,7,4.2,9.1,2.3,2,5.3,3,8.8,3s1.3,0,2-.1l7.4-.8c.3,0,.5-.3.5-.6l.5-7.4c.3-4.1-.8-7.6-3.1-10.2-.1-.2-.3-.3-.4-.5-2.1-2.1-5.1-3.4-8.6-3.5l-11.1-.5s0,0,0,0h0ZM775.1,425.4c-3.2,0-5.9-.9-8-2.7-2.3-1.9-3.6-4.8-3.7-8.3l-.5-10.1,10.5.5c3.4.2,6.2,1.4,8.2,3.6,2.1,2.3,3,5.5,2.8,9.3l-.4,6.9-6.9.7c-.6,0-1.2,0-1.8,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M751.3,403.1c-3.6-.2-6.6-1.5-8.7-3.8-2.2-2.5-3.2-5.8-3-9.8l.5-7.4c0,0,0,0,0,0l7.4-.8c.6,0,1.3-.1,1.9-.1,3.3,0,6.3,1,8.4,2.9.2.2.4.4.6.6,2,2,3.2,4.9,3.4,8.2l.6,10.8h-.1c0,.1-11.1-.4-11.1-.4ZM749.5,381.3c-.6,0-1.2,0-1.9,0l-7.3.8-.5,7.3c-.3,3.9.8,7.2,2.9,9.6,2,2.3,5,3.6,8.5,3.8l11,.5-.5-10.7c-.2-3.6-1.5-6.6-3.9-8.6-2.1-1.8-5-2.8-8.3-2.8Z" fill="#fff"/>
                      <path d="M749.5,380.6c-.6,0-1.3,0-2,.1l-7.4.8c-.3,0-.5.3-.5.6l-.5,7.4c-.3,4.1.8,7.6,3.1,10.2,2.2,2.4,5.3,3.8,9,4l11.1.5s0,0,0,0c.2,0,.3,0,.4-.2.1-.1.2-.3.2-.5l-.6-10.8c-.2-3.5-1.4-6.4-3.5-8.5-.2-.2-.4-.4-.6-.6-2.3-2-5.3-3-8.8-3h0ZM761.8,402.9l-10.5-.5c-3.4-.2-6.2-1.4-8.2-3.6-2.1-2.3-3-5.5-2.8-9.3l.4-6.9,6.9-.7c.6,0,1.2,0,1.8,0,3.2,0,5.9.9,8,2.7,2.3,1.9,3.6,4.8,3.7,8.3l.5,10.1h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M783.3,424.7s0,0,0,0l-42.1-42.1s0-.1,0-.1h.1l42.1,42.1s0,.1,0,.1h0Z" fill="#fff"/>
                    <path d="M741.1,381.8c-.2,0-.3,0-.4.2-.2.2-.2.6,0,.9l42.1,42.1c.1.1.3.2.4.2s.3,0,.4-.2c.2-.2.2-.6,0-.9l-42.1-42.1c-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M741.3,424.7s0,0,0,0,0-.1,0-.1l41.6-41.6h.1s0,.1,0,.1l-41.6,41.6h0Z" fill="#fff"/>
                    <path d="M782.9,382.3c-.2,0-.3,0-.4.2l-41.6,41.6c-.2.2-.2.6,0,.9.1.1.3.2.4.2s.3,0,.4-.2l41.6-41.6c.2-.2.2-.6,0-.9-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                </g>
              </g>
              <g opacity=".6">
                <g>
                  <g>
                    <g>
                      <path d="M852,268.8s0,0,0,0l.5-11.2c.2-3.6,1.5-6.6,3.8-8.7,2.2-2,5.2-3,8.6-3s.8,0,1.2,0l7.4.5h0c0,0,.8,7.5.8,7.5.4,4.2-.5,7.7-2.8,10.4-2.1,2.4-5.1,3.8-8.8,4l-10.8.6ZM864.9,246.1c-3.4,0-6.3,1-8.5,2.9-2.3,2-3.6,5-3.8,8.5l-.5,11,10.7-.6c3.6-.2,6.6-1.5,8.6-3.9,2.2-2.6,3.1-6.1,2.7-10.2l-.8-7.3-7.3-.5c-.4,0-.8,0-1.2,0Z" fill="#fff"/>
                      <path d="M864.9,245.4c-3.6,0-6.7,1.1-9,3.1-2.4,2.2-3.8,5.3-4,9l-.5,11.1c0,.2,0,.3.2.5,0,0,0,0,0,0,.1.1.3.2.4.2s0,0,0,0l10.8-.6c3.8-.2,7-1.6,9.1-4.2,2.3-2.7,3.3-6.4,2.9-10.7l-.8-7.4c0-.1,0-.3-.2-.4-.1-.1-.2-.2-.4-.2l-7.4-.5c-.4,0-.8,0-1.2,0h0ZM852.7,268.1l.5-10.5c.2-3.4,1.4-6.2,3.6-8.2,2.1-1.9,4.9-2.8,8.2-2.8s.7,0,1.1,0l6.9.4.7,6.9c.4,4-.5,7.4-2.6,9.8-1.9,2.3-4.8,3.6-8.3,3.7l-10.1.5h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M839,291.3c-.4,0-.8,0-1.2,0l-7.4-.5c0,0,0,0,0,0l-.8-7.4c-.4-4.2.5-7.7,2.8-10.4,2.1-2.4,5.1-3.8,8.8-4l10.8-.6h.1c0,.1-.5,11.2-.5,11.2-.2,3.6-1.5,6.6-3.8,8.7-2.2,2-5.2,3-8.6,3ZM841,269.2c-3.6.2-6.6,1.5-8.6,3.9-2.2,2.6-3.1,6.1-2.7,10.2l.8,7.3,7.3.5c.4,0,.8,0,1.2,0,3.4,0,6.3-1,8.5-2.9,2.3-2,3.6-5,3.8-8.5l.5-11-10.7.6Z" fill="#fff"/>
                      <path d="M851.8,267.9s0,0,0,0l-10.8.6c-3.8.2-7,1.6-9.1,4.2-2.3,2.7-3.3,6.4-2.9,10.7l.8,7.4c0,.3.3.5.6.5l7.4.5c.4,0,.8,0,1.2,0,3.6,0,6.7-1.1,9-3.1,2.4-2.2,3.8-5.3,4-9l.5-11.1c0-.2,0-.3-.2-.5-.1-.1-.3-.2-.4-.2h0ZM851.2,269.2l-.5,10.5c-.2,3.4-1.4,6.2-3.6,8.2-2.1,1.9-4.9,2.8-8.2,2.8s-.7,0-1.1,0l-6.9-.4-.7-6.9c-.4-4,.5-7.4,2.6-9.8,1.9-2.3,4.8-3.6,8.3-3.7l10.1-.5h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M864.7,291.2c-3.3,0-6.3-1-8.4-2.9-2.4-2.1-3.8-5.1-4-8.8l-.6-10.8h.1c0-.1,11.1.4,11.1.4,3.4.2,6.2,1.3,8.3,3.4.1.1.3.3.4.4,2.2,2.5,3.2,5.8,3,9.8l-.5,7.4c0,0,0,0,0,0l-7.4.8c-.6,0-1.3.1-1.9.1ZM852.5,279.5c.2,3.6,1.5,6.6,3.9,8.6,2.1,1.8,5,2.8,8.3,2.8h0c.6,0,1.2,0,1.9,0l7.3-.8.5-7.3c.3-3.9-.8-7.2-2.9-9.6-2-2.3-5-3.6-8.5-3.8l-11-.5.5,10.7Z" fill="#fff"/>
                      <path d="M851.8,268.1c-.2,0-.3,0-.4.2-.1.1-.2.3-.2.5l.6,10.8c.2,3.8,1.6,7,4.2,9.1,2.3,2,5.3,3,8.8,3s1.3,0,2-.1l7.4-.8c.3,0,.5-.3.5-.6l.5-7.4c.3-4.1-.8-7.6-3.1-10.2-.1-.2-.3-.3-.4-.5-2.1-2.1-5.1-3.4-8.6-3.5l-11.1-.5s0,0,0,0h0ZM864.7,290.5c-3.2,0-5.9-.9-8-2.7-2.3-1.9-3.6-4.8-3.7-8.3l-.5-10.1,10.5.5c3.4.2,6.2,1.4,8.2,3.6,2.1,2.3,3,5.5,2.8,9.3l-.4,6.9-6.9.7c-.6,0-1.2,0-1.8,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M840.9,268.1c-3.6-.2-6.6-1.5-8.7-3.8-2.2-2.5-3.2-5.8-3-9.8l.5-7.4c0,0,0,0,0,0l7.4-.8c.6,0,1.3-.1,1.9-.1,3.3,0,6.3,1,8.4,2.9.2.2.4.4.6.6,2,2,3.2,4.9,3.4,8.2l.6,10.8h-.1c0,.1-11.1-.4-11.1-.4ZM839.2,246.3c-.6,0-1.2,0-1.9,0l-7.3.8-.5,7.3c-.3,3.9.8,7.2,2.9,9.6,2,2.3,5,3.6,8.5,3.8l11,.5-.5-10.7c-.2-3.6-1.5-6.6-3.9-8.6-2.1-1.8-5-2.8-8.3-2.8Z" fill="#fff"/>
                      <path d="M839.2,245.6c-.6,0-1.3,0-2,.1l-7.4.8c-.3,0-.5.3-.5.6l-.5,7.4c-.3,4.1.8,7.6,3.1,10.2,2.2,2.4,5.3,3.8,9,4l11.1.5s0,0,0,0c.2,0,.3,0,.4-.2.1-.1.2-.3.2-.5l-.6-10.8c-.2-3.5-1.4-6.4-3.5-8.5-.2-.2-.4-.4-.6-.6-2.3-2-5.3-3-8.8-3h0ZM851.4,267.9l-10.5-.5c-3.4-.2-6.2-1.4-8.2-3.6-2.1-2.3-3-5.5-2.8-9.3l.4-6.9,6.9-.7c.6,0,1.2,0,1.8,0,3.2,0,5.9.9,8,2.7,2.3,1.9,3.6,4.8,3.7,8.3l.5,10.1h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M872.9,289.7s0,0,0,0l-42.1-42.1s0-.1,0-.1h.1l42.1,42.1h0c0,.1,0,.2,0,.2Z" fill="#fff"/>
                    <path d="M830.8,246.9c-.2,0-.3,0-.4.2-.2.2-.2.6,0,.9l42.1,42.1c.1.1.3.2.4.2s.3,0,.4-.2c.2-.2.2-.6,0-.9l-42.1-42.1c-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M830.9,289.7s0,0,0,0,0-.1,0-.1l41.6-41.6h.1s0,.1,0,.1l-41.6,41.6h0Z" fill="#fff"/>
                    <path d="M872.5,247.4c-.2,0-.3,0-.4.2l-41.6,41.6c-.2.2-.2.6,0,.9.1.1.3.2.4.2s.3,0,.4-.2l41.6-41.6c.2-.2.2-.6,0-.9-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M852.4,313.9s0,0,0,0l.5-11.2c.2-3.6,1.5-6.6,3.8-8.7,2.2-2,5.2-3,8.6-3s.8,0,1.2,0l7.4.5h0c0,0,.8,7.5.8,7.5.4,4.2-.5,7.7-2.8,10.4-2.1,2.4-5.1,3.8-8.8,4l-10.8.6ZM865.3,291.2c-3.4,0-6.3,1-8.5,2.9-2.3,2-3.6,5-3.8,8.5l-.5,11,10.7-.6c3.6-.2,6.6-1.5,8.6-3.9,2.2-2.6,3.1-6.1,2.7-10.2l-.8-7.3-7.3-.5c-.4,0-.8,0-1.2,0Z" fill="#fff"/>
                      <path d="M865.3,290.5c-3.6,0-6.7,1.1-9,3.1-2.4,2.2-3.8,5.3-4,9l-.5,11.1c0,.2,0,.3.2.5,0,0,0,0,0,0,.1.1.3.2.4.2s0,0,0,0l10.8-.6c3.8-.2,7-1.6,9.1-4.2,2.3-2.7,3.3-6.4,2.9-10.7l-.8-7.4c0-.1,0-.3-.2-.4-.1-.1-.2-.2-.4-.2l-7.4-.5c-.4,0-.8,0-1.2,0h0ZM853.1,313.1l.5-10.5c.2-3.4,1.4-6.2,3.6-8.2,2.1-1.9,4.9-2.8,8.2-2.8s.7,0,1.1,0l6.9.4.7,6.9c.4,4-.5,7.4-2.6,9.8-1.9,2.3-4.8,3.6-8.3,3.7l-10.1.5h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M839.4,336.4c-.4,0-.8,0-1.2,0l-7.4-.5c0,0,0,0,0,0l-.8-7.4c-.4-4.2.5-7.7,2.8-10.4,2.1-2.4,5.1-3.8,8.8-4l10.8-.6h.1c0,.1-.5,11.2-.5,11.2-.2,3.6-1.5,6.6-3.8,8.7-2.2,2-5.2,3-8.6,3ZM841.4,314.2c-3.6.2-6.6,1.5-8.6,3.9-2.2,2.6-3.1,6.1-2.7,10.2l.8,7.3,7.3.5c.4,0,.8,0,1.2,0,3.4,0,6.3-1,8.5-2.9,2.3-2,3.6-5,3.8-8.5l.5-11-10.7.6Z" fill="#fff"/>
                      <path d="M852.2,313s0,0,0,0l-10.8.6c-3.8.2-7,1.6-9.1,4.2-2.3,2.7-3.3,6.4-2.9,10.7l.8,7.4c0,.3.3.5.6.5l7.4.5c.4,0,.8,0,1.2,0,3.6,0,6.7-1.1,9-3.1,2.4-2.2,3.8-5.3,4-9l.5-11.1c0-.2,0-.3-.2-.5-.1-.1-.3-.2-.4-.2h0ZM851.6,314.2l-.5,10.5c-.2,3.4-1.4,6.2-3.6,8.2-2.1,1.9-4.9,2.8-8.2,2.8s-.7,0-1.1,0l-6.9-.4-.7-6.9c-.4-4,.5-7.4,2.6-9.8,1.9-2.3,4.8-3.6,8.3-3.7l10.1-.5h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M865.1,336.2c-3.3,0-6.3-1-8.4-2.9-2.4-2.1-3.8-5.1-4-8.8l-.6-10.8h.1c0-.1,11.1.4,11.1.4,3.4.2,6.2,1.3,8.3,3.4.1.1.3.3.4.4,2.2,2.5,3.2,5.8,3,9.8l-.5,7.4c0,0,0,0,0,0l-7.4.8c-.6,0-1.3.1-1.9.1ZM852.9,324.6c.2,3.6,1.5,6.6,3.9,8.6,2.1,1.8,5,2.8,8.3,2.8h0c.6,0,1.2,0,1.9,0l7.3-.8.5-7.3c.3-3.9-.8-7.2-2.9-9.6-2-2.3-5-3.6-8.5-3.8l-11-.5.5,10.7Z" fill="#fff"/>
                      <path d="M852.2,313.2c-.2,0-.3,0-.4.2-.1.1-.2.3-.2.5l.6,10.8c.2,3.8,1.6,7,4.2,9.1,2.3,2,5.3,3,8.8,3s1.3,0,2-.1l7.4-.8c.3,0,.5-.3.5-.6l.5-7.4c.3-4.1-.8-7.6-3.1-10.2-.1-.2-.3-.3-.4-.5-2.1-2.1-5.1-3.4-8.6-3.5l-11.1-.5s0,0,0,0h0ZM865.1,335.5c-3.2,0-5.9-.9-8-2.7-2.3-1.9-3.6-4.8-3.7-8.3l-.5-10.1,10.5.5c3.4.2,6.2,1.4,8.2,3.6,2.1,2.3,3,5.5,2.8,9.3l-.4,6.9-6.9.7c-.6,0-1.2,0-1.8,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M841.3,313.1c-3.6-.2-6.6-1.5-8.7-3.8-2.2-2.5-3.2-5.8-3-9.8l.5-7.4c0,0,0,0,0,0l7.4-.8c.6,0,1.3-.1,1.9-.1,3.3,0,6.3,1,8.4,2.9.2.2.4.4.6.6,2,2,3.2,4.9,3.4,8.2l.6,10.8h-.1c0,.1-11.1-.4-11.1-.4ZM839.6,291.3c-.6,0-1.2,0-1.9,0l-7.3.8-.5,7.3c-.3,3.9.8,7.2,2.9,9.6,2,2.3,5,3.6,8.5,3.8l11,.5-.5-10.7c-.2-3.6-1.5-6.6-3.9-8.6-2.1-1.8-5-2.8-8.3-2.8Z" fill="#fff"/>
                      <path d="M839.6,290.6c-.6,0-1.3,0-2,.1l-7.4.8c-.3,0-.5.3-.5.6l-.5,7.4c-.3,4.1.8,7.6,3.1,10.2,2.2,2.4,5.3,3.8,9,4l11.1.5s0,0,0,0c.2,0,.3,0,.4-.2.1-.1.2-.3.2-.5l-.6-10.8c-.2-3.5-1.4-6.4-3.5-8.5-.2-.2-.4-.4-.6-.6-2.3-2-5.3-3-8.8-3h0ZM851.8,312.9l-10.5-.5c-3.4-.2-6.2-1.4-8.2-3.6-2.1-2.3-3-5.5-2.8-9.3l.4-6.9,6.9-.7c.6,0,1.2,0,1.8,0,3.2,0,5.9.9,8,2.7,2.3,1.9,3.6,4.8,3.7,8.3l.5,10.1h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M873.3,334.7s0,0,0,0l-42.1-42.1s0-.1,0-.1h.1l42.1,42.1s0,.1,0,.1h0Z" fill="#fff"/>
                    <path d="M831.2,291.9c-.2,0-.3,0-.4.2-.2.2-.2.6,0,.9l42.1,42.1c.1.1.3.2.4.2s.3,0,.4-.2c.2-.2.2-.6,0-.9l-42.1-42.1c-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M831.3,334.7s0,0,0,0,0-.1,0-.1l41.6-41.6h.1s0,.1,0,.1l-41.6,41.6h0Z" fill="#fff"/>
                    <path d="M872.9,292.4c-.2,0-.3,0-.4.2l-41.6,41.6c-.2.2-.2.6,0,.9.1.1.3.2.4.2s.3,0,.4-.2l41.6-41.6c.2-.2.2-.6,0-.9-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M852.7,358.7s0,0,0,0l.5-11.2c.2-3.6,1.5-6.6,3.8-8.7,2.2-2,5.2-3,8.6-3s.8,0,1.2,0l7.4.5h0c0,0,.8,7.5.8,7.5.4,4.2-.5,7.7-2.8,10.4-2.1,2.4-5.1,3.8-8.8,4l-10.8.6ZM865.6,336c-3.4,0-6.3,1-8.5,2.9-2.3,2-3.6,5-3.8,8.5l-.5,11,10.7-.6c3.6-.2,6.6-1.5,8.6-3.9,2.2-2.6,3.1-6.1,2.7-10.2l-.8-7.3-7.3-.5c-.4,0-.8,0-1.2,0Z" fill="#fff"/>
                      <path d="M865.6,335.3c-3.6,0-6.7,1.1-9,3.1-2.4,2.2-3.8,5.3-4,9l-.5,11.1c0,.2,0,.3.2.5,0,0,0,0,0,0,.1.1.3.2.4.2s0,0,0,0l10.8-.6c3.8-.2,7-1.6,9.1-4.2,2.3-2.7,3.3-6.4,2.9-10.7l-.8-7.4c0-.1,0-.3-.2-.4-.1-.1-.2-.2-.4-.2l-7.4-.5c-.4,0-.8,0-1.2,0h0ZM853.4,357.9l.5-10.5c.2-3.4,1.4-6.2,3.6-8.2,2.1-1.9,4.9-2.8,8.2-2.8s.7,0,1.1,0l6.9.4.7,6.9c.4,4-.5,7.4-2.6,9.8-1.9,2.3-4.8,3.6-8.3,3.7l-10.1.5h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M839.7,381.2c-.4,0-.8,0-1.2,0l-7.4-.5c0,0,0,0,0,0l-.8-7.4c-.4-4.2.5-7.7,2.8-10.4,2.1-2.4,5.1-3.8,8.8-4l10.8-.6h.1c0,.1-.5,11.2-.5,11.2-.2,3.6-1.5,6.6-3.8,8.7-2.2,2-5.2,3-8.6,3ZM841.7,359c-3.6.2-6.6,1.5-8.6,3.9-2.2,2.6-3.1,6.1-2.7,10.2l.8,7.3,7.3.5c.4,0,.8,0,1.2,0,3.4,0,6.3-1,8.5-2.9,2.3-2,3.6-5,3.8-8.5l.5-11-10.7.6Z" fill="#fff"/>
                      <path d="M852.5,357.8s0,0,0,0l-10.8.6c-3.8.2-7,1.6-9.1,4.2-2.3,2.7-3.3,6.4-2.9,10.7l.8,7.4c0,.3.3.5.6.5l7.4.5c.4,0,.8,0,1.2,0,3.6,0,6.7-1.1,9-3.1,2.4-2.2,3.8-5.3,4-9l.5-11.1c0-.2,0-.3-.2-.5-.1-.1-.3-.2-.4-.2h0ZM851.9,359l-.5,10.5c-.2,3.4-1.4,6.2-3.6,8.2-2.1,1.9-4.9,2.8-8.2,2.8s-.7,0-1.1,0l-6.9-.4-.7-6.9c-.4-4,.5-7.4,2.6-9.8,1.9-2.3,4.8-3.6,8.3-3.7l10.1-.5h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M865.4,381c-3.3,0-6.3-1-8.4-2.9-2.4-2.1-3.8-5.1-4-8.8l-.6-10.8h.1c0-.1,11.1.4,11.1.4,3.4.2,6.2,1.3,8.3,3.4.1.1.3.3.4.4,2.2,2.5,3.2,5.8,3,9.8l-.5,7.4c0,0,0,0,0,0l-7.4.8c-.6,0-1.3.1-1.9.1ZM853.2,369.4c.2,3.6,1.5,6.6,3.9,8.6,2.1,1.8,5,2.8,8.3,2.8h0c.6,0,1.2,0,1.9,0l7.3-.8.5-7.3c.3-3.9-.8-7.2-2.9-9.6-2-2.3-5-3.6-8.5-3.8l-11-.5.6,10.7Z" fill="#fff"/>
                      <path d="M852.5,358c-.2,0-.3,0-.4.2-.1.1-.2.3-.2.5l.6,10.8c.2,3.8,1.6,7,4.2,9.1,2.3,2,5.3,3,8.8,3s1.3,0,2-.1l7.4-.8c.3,0,.5-.3.5-.6l.5-7.4c.3-4.1-.8-7.6-3.1-10.2-.1-.2-.3-.3-.4-.5-2.1-2.1-5.1-3.4-8.6-3.5l-11.1-.5s0,0,0,0h0ZM865.4,380.3c-3.2,0-5.9-.9-8-2.7-2.3-1.9-3.6-4.8-3.7-8.3l-.5-10.1,10.5.5c3.4.2,6.2,1.4,8.2,3.6,2.1,2.3,3,5.5,2.8,9.3l-.4,6.9-6.9.7c-.6,0-1.2,0-1.8,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M841.6,357.9c-3.6-.2-6.6-1.5-8.7-3.8-2.2-2.5-3.2-5.8-3-9.8l.5-7.4c0,0,0,0,0,0l7.4-.8c.6,0,1.3-.1,1.9-.1,3.3,0,6.3,1,8.4,2.9.2.2.4.4.6.6,2,2,3.2,4.9,3.4,8.2l.6,10.8h-.1c0,.1-11.1-.4-11.1-.4ZM839.9,336.2c-.6,0-1.2,0-1.9,0l-7.3.8-.5,7.3c-.3,3.9.8,7.2,2.9,9.6,2,2.3,5,3.6,8.5,3.8l11,.5-.6-10.7c-.2-3.6-1.5-6.6-3.9-8.6-2.1-1.8-5-2.8-8.3-2.8Z" fill="#fff"/>
                      <path d="M839.9,335.4c-.6,0-1.3,0-2,.1l-7.4.8c-.3,0-.5.3-.5.6l-.5,7.4c-.3,4.1.8,7.6,3.1,10.2,2.2,2.4,5.3,3.8,9,4l11.1.5s0,0,0,0c.2,0,.3,0,.4-.2.1-.1.2-.3.2-.5l-.6-10.8c-.2-3.5-1.4-6.4-3.5-8.5-.2-.2-.4-.4-.6-.6-2.3-2-5.3-3-8.8-3h0ZM852.1,357.7l-10.5-.5c-3.4-.2-6.2-1.4-8.2-3.6-2.1-2.3-3-5.5-2.8-9.3l.4-6.9,6.9-.7c.6,0,1.2,0,1.8,0,3.2,0,5.9.9,8,2.7,2.3,1.9,3.6,4.8,3.7,8.3l.5,10.1h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M873.6,379.5s0,0,0,0l-42.1-42.1s0-.1,0-.1h.1l42.1,42.1h0c0,.1,0,.2,0,.2Z" fill="#fff"/>
                    <path d="M831.5,336.7c-.2,0-.3,0-.4.2-.2.2-.2.6,0,.9l42.1,42.1c.1.1.3.2.4.2s.3,0,.4-.2c.2-.2.2-.6,0-.9l-42.1-42.1c-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M831.6,379.5s0,0,0,0,0-.1,0-.1l41.6-41.6h.1s0,.1,0,.1l-41.6,41.6h0Z" fill="#fff"/>
                    <path d="M873.2,337.2c-.2,0-.3,0-.4.2l-41.6,41.6c-.2.2-.2.6,0,.9.1.1.3.2.4.2s.3,0,.4-.2l41.6-41.6c.2-.2.2-.6,0-.9-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M853.1,403.7s0,0,0,0l.5-11.2c.2-3.6,1.5-6.6,3.8-8.7,2.2-2,5.2-3,8.6-3s.8,0,1.2,0l7.4.5h0c0,0,.8,7.5.8,7.5.4,4.2-.5,7.7-2.8,10.4-2.1,2.4-5.1,3.8-8.8,4l-10.8.6ZM866,381c-3.4,0-6.3,1-8.5,2.9-2.3,2-3.6,5-3.8,8.5l-.5,11,10.7-.6c3.6-.2,6.6-1.5,8.6-3.9,2.2-2.6,3.1-6.1,2.7-10.2l-.8-7.3-7.3-.5c-.4,0-.8,0-1.2,0Z" fill="#fff"/>
                      <path d="M866,380.3c-3.6,0-6.7,1.1-9,3.1-2.4,2.2-3.8,5.3-4,9l-.5,11.1c0,.2,0,.3.2.5,0,0,0,0,0,0,.1.1.3.2.4.2s0,0,0,0l10.8-.6c3.8-.2,7-1.6,9.1-4.2,2.3-2.7,3.3-6.4,2.9-10.7l-.8-7.4c0-.1,0-.3-.2-.4s-.2-.2-.4-.2l-7.4-.5c-.4,0-.8,0-1.2,0h0ZM853.8,403l.5-10.5c.2-3.4,1.4-6.2,3.6-8.2,2.1-1.9,4.9-2.8,8.2-2.8s.7,0,1.1,0l6.9.4.7,6.9c.4,4-.5,7.4-2.6,9.8-1.9,2.3-4.8,3.6-8.3,3.7l-10.1.5h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M840.1,426.2c-.4,0-.8,0-1.2,0l-7.4-.5c0,0,0,0,0,0l-.8-7.4c-.4-4.2.5-7.7,2.8-10.4,2.1-2.4,5.1-3.8,8.8-4l10.8-.6h.1c0,.1-.5,11.2-.5,11.2-.2,3.6-1.5,6.6-3.8,8.7-2.2,2-5.2,3-8.6,3ZM842.1,404.1c-3.6.2-6.6,1.5-8.6,3.9-2.2,2.6-3.1,6.1-2.7,10.2l.8,7.3,7.3.5c.4,0,.8,0,1.2,0,3.4,0,6.3-1,8.5-2.9,2.3-2,3.6-5,3.8-8.5l.5-11-10.7.6Z" fill="#fff"/>
                      <path d="M852.9,402.8s0,0,0,0l-10.8.6c-3.8.2-7,1.6-9.1,4.2-2.3,2.7-3.3,6.4-2.9,10.7l.8,7.4c0,.3.3.5.6.5l7.4.5c.4,0,.8,0,1.2,0,3.6,0,6.7-1.1,9-3.1,2.4-2.2,3.8-5.3,4-9l.5-11.1c0-.2,0-.3-.2-.5-.1-.1-.3-.2-.4-.2h0ZM852.3,404l-.5,10.5c-.2,3.4-1.4,6.2-3.6,8.2-2.1,1.9-4.9,2.8-8.2,2.8s-.7,0-1.1,0l-6.9-.4-.7-6.9c-.4-4,.5-7.4,2.6-9.8,1.9-2.3,4.8-3.6,8.3-3.7l10.1-.5h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M865.8,426c-3.3,0-6.3-1-8.4-2.9-2.4-2.1-3.8-5.1-4-8.8l-.6-10.8h.1c0-.1,11.1.4,11.1.4,3.4.2,6.2,1.3,8.3,3.4.1.1.3.3.4.4,2.2,2.5,3.2,5.8,3,9.8l-.5,7.4c0,0,0,0,0,0l-7.4.8c-.6,0-1.3.1-1.9.1ZM853.6,414.4c.2,3.6,1.5,6.6,3.9,8.6,2.1,1.8,5,2.8,8.3,2.8h0c.6,0,1.2,0,1.9,0l7.3-.8.5-7.3c.3-3.9-.8-7.2-2.9-9.6-2-2.3-5-3.6-8.5-3.8l-11-.5.6,10.7Z" fill="#fff"/>
                      <path d="M852.9,403c-.2,0-.3,0-.4.2-.1.1-.2.3-.2.5l.6,10.8c.2,3.8,1.6,7,4.2,9.1,2.3,2,5.3,3,8.8,3s1.3,0,2-.1l7.4-.8c.3,0,.5-.3.5-.6l.5-7.4c.3-4.1-.8-7.6-3.1-10.2-.1-.2-.3-.3-.4-.5-2.1-2.1-5.1-3.4-8.6-3.5l-11.1-.5s0,0,0,0h0ZM865.8,425.3c-3.2,0-5.9-.9-8-2.7-2.3-1.9-3.6-4.8-3.7-8.3l-.5-10.1,10.5.5c3.4.2,6.2,1.4,8.2,3.6,2.1,2.3,3,5.5,2.8,9.3l-.4,6.9-6.9.7c-.6,0-1.2,0-1.8,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M842,403c-3.6-.2-6.6-1.5-8.7-3.8-2.2-2.5-3.2-5.8-3-9.8l.5-7.4c0,0,0,0,0,0l7.4-.8c.6,0,1.3-.1,1.9-.1,3.3,0,6.3,1,8.4,2.9.2.2.4.4.6.6,2,2,3.2,4.9,3.4,8.2l.6,10.8h-.1c0,.1-11.1-.4-11.1-.4ZM840.3,381.2c-.6,0-1.2,0-1.9,0l-7.3.8-.5,7.3c-.3,3.9.8,7.2,2.9,9.6,2,2.3,5,3.6,8.5,3.8l11,.5-.6-10.7c-.2-3.6-1.5-6.6-3.9-8.6-2.1-1.8-5-2.8-8.3-2.8Z" fill="#fff"/>
                      <path d="M840.3,380.5c-.6,0-1.3,0-2,.1l-7.4.8c-.3,0-.5.3-.5.6l-.5,7.4c-.3,4.1.8,7.6,3.1,10.2,2.2,2.4,5.3,3.8,9,4l11.1.5s0,0,0,0c.2,0,.3,0,.4-.2.1-.1.2-.3.2-.5l-.6-10.8c-.2-3.5-1.4-6.4-3.5-8.5-.2-.2-.4-.4-.6-.6-2.3-2-5.3-3-8.8-3h0ZM852.5,402.8l-10.5-.5c-3.4-.2-6.2-1.4-8.2-3.6-2.1-2.3-3-5.5-2.8-9.3l.4-6.9,6.9-.7c.6,0,1.2,0,1.8,0,3.2,0,5.9.9,8,2.7,2.3,1.9,3.6,4.8,3.7,8.3l.5,10.1h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M874,424.6s0,0,0,0l-42.1-42.1s0-.1,0-.1h.1l42.1,42.1s0,.1,0,.1h0Z" fill="#fff"/>
                    <path d="M831.9,381.7c-.2,0-.3,0-.4.2-.2.2-.2.6,0,.9l42.1,42.1c.1.1.3.2.4.2s.3,0,.4-.2c.2-.2.2-.6,0-.9l-42.1-42.1c-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M832,424.6s0,0,0,0c0,0,0-.1,0-.1l41.6-41.6h.1c0,.1-41.6,41.8-41.6,41.8h0Z" fill="#fff"/>
                    <path d="M873.6,382.2c-.2,0-.3,0-.4.2l-41.6,41.6c-.2.2-.2.6,0,.9.1.1.3.2.4.2s.3,0,.4-.2l41.6-41.6c.2-.2.2-.6,0-.9-.1-.1-.3-.2-.4-.2h0Z" fill="#efe7da"/>
                  </g>
                </g>
              </g>
            </g>
            <g id="Couch" filter="url(#drop-shadow-24)">
              <g>
                <rect x="643.4" y="383.7" width="52.3" height="52.3" rx="8.6" ry="8.6" transform="translate(259.6 1079.4) rotate(-90)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M696,386.8v46.1c0,1.9-1.5,3.4-3.4,3.4h-46.2c-1.9,0-3.4-1.5-3.4-3.4v-46.1c0-1.9,1.5-3.4,3.4-3.4h46.2c1.9,0,3.4,1.5,3.4,3.4ZM643.7,432.9c0,1.5,1.2,2.7,2.7,2.7h46.2c1.5,0,2.7-1.2,2.7-2.7v-46.1c0-1.5-1.2-2.7-2.7-2.7h-46.2c-1.5,0-2.7,1.2-2.7,2.7v46.1Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M651.8,235.6h43.7v43.7c0,4.7-3.9,8.6-8.6,8.6h-35.1c-4.7,0-8.6-3.9-8.6-8.6v-35.1c0-4.7,3.9-8.6,8.6-8.6Z" transform="translate(407.6 931.1) rotate(-90)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M695.9,238.7v46.1c0,1.9-1.5,3.4-3.4,3.4h-46.1c-1.9,0-3.4-1.5-3.4-3.4v-49.6h49.6c1.9,0,3.4,1.5,3.4,3.4ZM643.6,284.8c0,1.5,1.2,2.7,2.7,2.7h46.1c1.5,0,2.7-1.2,2.7-2.7v-46.1c0-1.5-1.2-2.7-2.7-2.7h-48.8v48.8Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M590.9,235.6h48.1c2.3,0,4.2,1.9,4.2,4.2v48.1h-43.7c-4.7,0-8.6-3.9-8.6-8.6v-43.7h0Z" transform="translate(355.3 878.8) rotate(-90)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M643.6,235.3v49.6c0,1.9-1.5,3.4-3.4,3.4h-49.6v-51.2c0-1,.8-1.9,1.9-1.9h51.2ZM591.3,287.5h48.8c1.5,0,2.7-1.2,2.7-2.7v-48.8h-50.4c-.6,0-1.1.5-1.1,1.1v50.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M590.9,287.9h52.3v52.3h-43.7c-4.7,0-8.6-3.9-8.6-8.6v-43.7h0Z" transform="translate(1234.2 628.1) rotate(180)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M643.6,291v49.6h-53v-53h49.6c1.9,0,3.4,1.5,3.4,3.4ZM642.8,339.8v-48.8c0-1.5-1.2-2.7-2.7-2.7h-48.8v51.5h51.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <rect x="590.9" y="340.2" width="52.3" height="52.3" transform="translate(1234.2 732.7) rotate(180)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M643.6,339.8v53h-53v-53h53ZM642.8,392.1v-51.5h-51.5v51.5h51.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <rect x="590.9" y="392.5" width="52.3" height="51.2" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M643.6,392.1v52h-53v-52h53ZM642.8,443.3v-50.4h-51.5v50.4h51.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <g>
                  <path d="M668.3,216.7h8.3v46.2c0,3.4-2.7,6.1-6.1,6.1h-2.2c-3.4,0-6.1-2.7-6.1-6.1v-40.1c0-3.4,2.7-6.1,6.1-6.1Z" transform="translate(426.6 912.2) rotate(-90)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M695.9,238.7v8.2c0,1.9-1.5,3.4-3.4,3.4h-46.1c-1.9,0-3.4-1.5-3.4-3.4v-11.7h49.6c1.9,0,3.4,1.5,3.4,3.4ZM643.6,246.9c0,1.5,1.2,2.7,2.7,2.7h46.1c1.5,0,2.7-1.2,2.7-2.7v-8.2c0-1.5-1.2-2.7-2.7-2.7h-48.8v10.9Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="667.2" y="210.2" width="4.4" height="52.3" rx="1.9" ry="1.9" transform="translate(433 905.7) rotate(-90)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M695.9,235.5v1.6c0,1-.8,1.8-1.8,1.8h-49.5c-1,0-1.8-.8-1.8-1.8v-1.6c0-1,.8-1.8,1.8-1.8h49.5c1,0,1.8.8,1.8,1.8ZM643.6,237.1c0,.6.5,1,1,1h49.5c.6,0,1-.5,1-1v-1.6c0-.6-.5-1-1-1h-49.5c-.6,0-1,.5-1,1v1.6Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
              </g>
              <g>
                <path d="M616,216.7h6.2c1.1,0,2.1.9,2.1,2.1v44.1c0,3.4-2.7,6.1-6.1,6.1h-2.2c-3.4,0-6.1-2.7-6.1-6.1v-40.1c0-3.4,2.7-6.1,6.1-6.1Z" transform="translate(374.3 859.9) rotate(-90)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M643.6,238.7v8.2c0,1.9-1.5,3.4-3.4,3.4h-46.1c-1.9,0-3.4-1.5-3.4-3.4v-10.2c0-.8.6-1.4,1.4-1.4h48.2c1.9,0,3.4,1.5,3.4,3.4ZM591.3,246.9c0,1.5,1.2,2.7,2.7,2.7h46.1c1.5,0,2.7-1.2,2.7-2.7v-8.2c0-1.5-1.2-2.7-2.7-2.7h-48.2c-.4,0-.7.3-.7.7v10.2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M594.8,237.8l11.6,12.1v33.4c0,2.5-2,4.5-4.5,4.5h-9.8v-47.8c0-2.5.2-2.3,2.7-2.3Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M606.8,249.8v33.6c0,2.7-2.2,4.9-4.9,4.9h-10.2v-48.1c0-1.3,0-1.9.5-2.3.4-.4,1-.4,2.2-.4h.6s11.8,12.4,11.8,12.4ZM592.5,287.5h9.5c2.3,0,4.1-1.9,4.1-4.1v-33.3l-11.4-11.9h-.3c-.9,0-1.4,0-1.6.2-.2.2-.2.8-.2,1.7v47.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M590.9,236.3v49.4c0,1.2,1,2.2,2.2,2.2s2.2-1,2.2-2.2v-47.2h45.7c1.2,0,2.2-1,2.2-2.2s-1-2.2-2.2-2.2h-47.9c-1.2,0-2.2,1-2.2,2.2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M643.6,236.3c0,1.4-1.2,2.6-2.6,2.6h-45.3v46.8c0,1.4-1.2,2.6-2.6,2.6s-2.6-1.2-2.6-2.6v-49.4c0-1.4,1.2-2.6,2.6-2.6h47.9c1.4,0,2.6,1.2,2.6,2.6ZM591.3,285.7c0,1,.8,1.8,1.8,1.8s1.8-.8,1.8-1.8v-47.6h46.1c1,0,1.8-.8,1.8-1.8s-.8-1.8-1.8-1.8h-47.9c-1,0-1.8.8-1.8,1.8v49.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <g>
                  <path d="M598.5,287.9h8.3v46.2c0,3.4-2.7,6.1-6.1,6.1h-2.2c-3.4,0-6.1-2.7-6.1-6.1v-40.1c0-3.4,2.7-6.1,6.1-6.1Z" transform="translate(1199.2 628.1) rotate(180)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M607.2,291v46.1c0,1.9-1.5,3.4-3.4,3.4h-11.7v-49.6c0-1.9,1.5-3.4,3.4-3.4h8.2c1.9,0,3.4,1.5,3.4,3.4ZM592.8,339.8h10.9c1.5,0,2.7-1.2,2.7-2.7v-46.1c0-1.5-1.2-2.7-2.7-2.7h-8.2c-1.5,0-2.7,1.2-2.7,2.7v48.8Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="590.9" y="287.9" width="4.4" height="52.3" rx="1.9" ry="1.9" transform="translate(1186.3 628.1) rotate(180)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M595.7,289.3v49.5c0,1-.8,1.8-1.8,1.8h-1.6c-1,0-1.8-.8-1.8-1.8v-49.5c0-1,.8-1.8,1.8-1.8h1.6c1,0,1.8.8,1.8,1.8ZM591.3,338.8c0,.6.5,1,1,1h1.6c.6,0,1-.5,1-1v-49.5c0-.6-.5-1-1-1h-1.6c-.6,0-1,.5-1,1v49.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M598.5,340.2h8.3v46.2c0,3.4-2.7,6.1-6.1,6.1h-2.2c-3.4,0-6.1-2.7-6.1-6.1v-40.1c0-3.4,2.7-6.1,6.1-6.1Z" transform="translate(1199.3 732.7) rotate(180)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M607.2,343.3v46.2c0,1.9-1.5,3.4-3.4,3.4h-11.7v-49.6c0-1.9,1.5-3.4,3.4-3.4h8.2c1.9,0,3.4,1.5,3.4,3.4ZM592.8,392.1h10.9c1.5,0,2.7-1.2,2.7-2.7v-46.2c0-1.5-1.2-2.7-2.7-2.7h-8.2c-1.5,0-2.7,1.2-2.7,2.7v48.8Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="591" y="340.2" width="4.4" height="52.3" rx="1.9" ry="1.9" transform="translate(1186.3 732.7) rotate(180)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M595.7,341.6v49.5c0,1-.8,1.8-1.8,1.8h-1.6c-1,0-1.8-.8-1.8-1.8v-49.5c0-1,.8-1.8,1.8-1.8h1.6c1,0,1.8.8,1.8,1.8ZM591.3,391.1c0,.6.5,1,1,1h1.6c.6,0,1-.5,1-1v-49.5c0-.6-.5-1-1-1h-1.6c-.6,0-1,.5-1,1v49.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
              </g>
              <g>
                <path d="M616,411.4h2.2c3.4,0,6.1,2.7,6.1,6.1v44.1c0,1.1-.9,2.1-2.1,2.1h-6.2c-3.4,0-6.1-2.7-6.1-6.1v-40.1c0-3.4,2.7-6.1,6.1-6.1Z" transform="translate(1054.6 -179.5) rotate(90)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M643.6,433.4v8.2c0,1.9-1.5,3.4-3.4,3.4h-48.2c-.8,0-1.4-.6-1.4-1.4v-10.2c0-1.9,1.5-3.4,3.4-3.4h46.1c1.9,0,3.4,1.5,3.4,3.4ZM591.3,443.7c0,.4.3.7.7.7h48.2c1.5,0,2.7-1.2,2.7-2.7v-8.2c0-1.5-1.2-2.7-2.7-2.7h-46.1c-1.5,0-2.7,1.2-2.7,2.7v10.2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M594.8,442.5l11.6-12.1v-33.4c0-2.5-2-4.5-4.5-4.5h-9.8v47.8c0,2.5.2,2.3,2.7,2.3Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M606.8,396.9v33.6l-11.8,12.4h-.6c-1.1,0-1.8,0-2.2-.4-.4-.4-.5-1-.5-2.3v-48.1h10.2c2.7,0,4.9,2.2,4.9,4.9ZM606,430.2v-33.3c0-2.3-1.9-4.1-4.1-4.1h-9.5v47.4c0,1,0,1.5.2,1.7.2.2.8.2,1.6.2h.3s11.4-11.9,11.4-11.9Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M695.6,234.8v49.4c0,1.2-1,2.2-2.2,2.2s-2.2-1-2.2-2.2v-47.2h-45.7c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2h47.9c1.2,0,2.2,1,2.2,2.2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M643,234.8c0-1.4,1.2-2.6,2.6-2.6h47.9c1.4,0,2.6,1.2,2.6,2.6v49.4c0,1.4-1.2,2.6-2.6,2.6s-2.6-1.2-2.6-2.6v-46.8h-45.3c-1.4,0-2.6-1.2-2.6-2.6ZM695.3,234.8c0-1-.8-1.8-1.8-1.8h-47.9c-1,0-1.8.8-1.8,1.8s.8,1.8,1.8,1.8h46.1v47.6c0,1,.8,1.8,1.8,1.8s1.8-.8,1.8-1.8v-49.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <g>
                  <path d="M603.6,428.2c-.2,0-.2-.3,0-.5,1.1-1.1,5.2-5.2,6.6-6.8,1.4-1.6,4.6-6.4,5.5-7.7.1-.2.4-.2.5,0,1,1.4,5.5,5.9,7.1,7.3,1.6,1.3,5.9,4.2,7.3,4.8.2,0,.2.3,0,.5-1.2,1.1-5.3,5.1-6.7,6.7-1.4,1.6-4.5,6.5-5.4,7.8-.1.2-.4.2-.5,0-1-1.3-2.4-3.5-6.6-6.9-1.6-1.3-6.5-4.5-7.9-5.2Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M631.1,425.6c0,.2,0,.4-.2.5-1.2,1.2-5.3,5.1-6.7,6.6-1.3,1.6-4.4,6.3-5.4,7.8-.1.2-.3.3-.5.3-.2,0-.4,0-.6-.3-.2-.2-.3-.4-.5-.7-1-1.3-2.5-3.4-6-6.1-1.6-1.3-6.4-4.4-7.9-5.2-.2-.1-.3-.3-.3-.5,0-.2,0-.4.2-.6,1.2-1.2,5.2-5.2,6.6-6.8,1.3-1.6,4.5-6.3,5.5-7.7.1-.2.3-.3.5-.3.2,0,.4,0,.6.3,1,1.4,5.5,5.9,7.1,7.2,1.6,1.3,5.8,4.1,7.2,4.8.2,0,.3.3.4.5,0,0,0,0,0,.1ZM618.3,440c1-1.5,4-6.1,5.4-7.7,1.3-1.6,5.3-5.4,6.6-6.6-1.6-.8-5.7-3.5-7.3-4.8-1.6-1.3-6-5.8-7.1-7.2-1,1.5-4.1,6.1-5.5,7.6-1.3,1.6-5.3,5.5-6.6,6.7,1.6.9,6.3,3.9,7.9,5.2,3.5,2.8,5.1,4.9,6.1,6.3.2.2.3.4.4.6Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M597,403.4c-.1-.2,0-.4.1-.5,1.5-.5,7-2.4,8.9-3.3,1.9-.9,6.9-3.8,8.3-4.6.2-.1.4,0,.4.2.4,1.7,2.4,7.7,3.3,9.6.9,1.9,3.5,6.3,4.5,7.5.1.2,0,.4-.1.5-1.6.5-7,2.3-8.9,3.2-1.9.9-6.9,3.9-8.2,4.7-.2.1-.4,0-.4-.2-.4-1.6-.7-4.2-3-9-.9-1.9-4-6.8-4.9-8.1Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M623.1,412.5c0,0,0,.1,0,.2,0,.2-.2.4-.4.5-1.6.5-7,2.3-8.9,3.1-1.9.9-6.7,3.8-8.2,4.7-.2.1-.4.1-.6,0-.2,0-.3-.3-.4-.5,0-.2-.1-.5-.2-.8-.3-1.6-.9-4.1-2.8-8.1-.9-1.8-3.9-6.8-4.9-8.1h0c-.1-.2-.2-.4,0-.6,0-.2.2-.4.4-.4,1.6-.6,7-2.4,8.8-3.3,1.9-.9,6.8-3.7,8.2-4.6.2-.1.4-.1.6,0,.2,0,.3.3.4.5.4,1.7,2.4,7.6,3.3,9.6.9,1.9,3.5,6.2,4.5,7.4.1.1.2.3.2.4ZM605.3,420.3c1.6-1,6.3-3.8,8.2-4.7,1.9-.9,7.1-2.6,8.8-3.1-1.1-1.3-3.6-5.6-4.5-7.5-.9-1.9-2.9-7.8-3.3-9.6-1.6.9-6.3,3.7-8.2,4.6-1.9.9-7.1,2.7-8.8,3.3,1.1,1.5,4,6.3,4.9,8.1,2,4.1,2.5,6.6,2.8,8.3,0,.3.1.5.2.7Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M602.4,256.9c0-.2.2-.3.4-.2,1.5.6,6.8,2.8,8.8,3.4,2,.6,7.7,1.8,9.2,2.1.2,0,.3.3.2.4-.8,1.5-3.3,7.4-3.9,9.4-.6,2-1.6,7.1-1.6,8.6,0,.2-.2.4-.4.3-1.5-.7-6.7-3-8.7-3.6-2-.6-7.7-1.7-9.3-1.9-.2,0-.3-.3-.2-.4.8-1.4,2.3-3.6,3.8-8.7.6-2,1.6-7.8,1.8-9.3Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M621.5,262.5c0,.1,0,.2,0,.3-.8,1.5-3.3,7.3-3.9,9.3-.6,2-1.5,7-1.6,8.5,0,.2-.1.4-.3.6-.2.1-.4.1-.6,0-1.5-.7-6.7-2.9-8.7-3.5-2-.6-7.6-1.6-9.2-1.9-.2,0-.4-.2-.5-.4,0-.2,0-.4,0-.6.1-.2.3-.5.4-.7.8-1.5,2.1-3.7,3.3-7.9.6-1.9,1.6-7.6,1.7-9.3h0c0-.2.1-.4.3-.5.2-.1.4-.1.6,0,1.6.7,6.8,2.8,8.8,3.4,2,.6,7.5,1.7,9.2,2.1.2,0,.4.2.5.4,0,0,0,.2,0,.3ZM615.2,280.5c0-1.7,1-6.6,1.6-8.6.6-2,3-7.7,3.9-9.4-1.8-.4-7.2-1.5-9.2-2.1-2-.6-7.1-2.7-8.8-3.4-.2,1.8-1.2,7.3-1.8,9.3-1.2,4.3-2.5,6.6-3.4,8.1-.1.2-.3.4-.4.6,1.8.3,7.2,1.3,9.2,1.9,2,.6,7,2.8,8.7,3.5ZM602.8,257h0s0,0,0,0Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M622.8,241.2c.1-.2.3-.2.5,0,1.1,1.2,4.9,5.5,6.5,6.9,1.6,1.4,6.2,4.9,7.4,5.8.2.1.2.4,0,.5-1.4,1-6.1,5.2-7.6,6.8-1.4,1.5-4.4,5.7-5.2,7.1,0,.2-.4.2-.5,0-1.1-1.2-4.8-5.6-6.4-7-1.6-1.4-6.2-4.8-7.5-5.7-.2-.1-.2-.4,0-.5,1.3-1,3.6-2.3,7.1-6.3,1.4-1.6,4.8-6.3,5.6-7.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M637.7,254.2h0c0,.2-.1.4-.3.6-1.4,1-6.1,5.2-7.5,6.8-1.4,1.5-4.4,5.7-5.1,7-.1.2-.3.3-.5.4-.2,0-.4,0-.6-.2-1.1-1.3-4.8-5.5-6.3-6.9-1.5-1.4-6.1-4.7-7.5-5.7-.2-.1-.3-.3-.3-.5,0-.2.1-.4.3-.6.2-.2.4-.3.7-.5,1.4-1,3.5-2.4,6.4-5.7,1.3-1.5,4.7-6.2,5.6-7.6h0c.1-.2.3-.3.5-.3.2,0,.4,0,.6.2,1.1,1.3,4.9,5.5,6.5,6.9,1.5,1.4,6.1,4.8,7.4,5.8.2.1.3.3.3.5ZM624.2,268c.8-1.5,3.7-5.5,5.2-7.1,1.4-1.5,6-5.7,7.6-6.8-1.5-1.1-5.9-4.4-7.4-5.8-1.5-1.4-5.2-5.5-6.4-6.8-1,1.6-4.2,6.1-5.6,7.7-3,3.4-5.1,4.9-6.5,5.8-.2.1-.4.3-.6.4,1.5,1.1,6,4.3,7.5,5.7,1.5,1.4,5.1,5.5,6.3,6.9Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
              </g>
            </g>
            <g id="TV_stand" filter="url(#drop-shadow-25)">
              <g>
                <rect x="835.3" y="376.1" width="52.3" height="40.3" transform="translate(465.2 1257.7) rotate(-90)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M882,369.7v53h-41.1v-53h41.1ZM881.3,422v-51.5h-39.6v51.5h39.6Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <rect x="835.3" y="253.3" width="52.3" height="40.3" transform="translate(588 1135) rotate(-90)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M882,247v53h-41.1v-53h41.1ZM881.3,299.2v-51.5h-39.6v51.5h39.6Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <rect x="826.3" y="314.6" width="70.3" height="40.3" transform="translate(526.7 1196.3) rotate(-90)" fill="#efe5d8" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M882,299.3v71.1h-41.1v-71.1h41.1ZM881.3,369.6v-69.6h-39.6v69.6h39.6Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <g>
                  <g>
                    <path d="M861.1,350.4v-31.2h.3c1,0,1.7.8,1.7,1.7v27.8c0,1-.8,1.7-1.7,1.7h-.3Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                    <path d="M863.4,320.9v27.8c0,1.2-.9,2.1-2.1,2.1h-.7v-32h.7c1.2,0,2.1.9,2.1,2.1ZM861.4,350c.7,0,1.2-.6,1.2-1.3v-27.8c0-.7-.5-1.3-1.2-1.3v30.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  </g>
                  <g>
                    <path d="M858.3,355.8h.4c1.3,0,2.3-1,2.3-2.3v-37.3c0-1.3-1-2.3-2.3-2.3h-.4v41.9Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                    <path d="M861.3,316.2v37.3c0,1.5-1.2,2.7-2.7,2.7h-.7v-42.7h.7c1.5,0,2.7,1.2,2.7,2.7ZM858.7,355.4c1.1,0,1.9-.9,1.9-1.9v-37.3c0-1.1-.9-1.9-1.9-1.9v41.2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  </g>
                  <g>
                    <path d="M858.3,355.8h.4c1.3,0,2.3-1,2.3-2.3v-37.3c0-1.3-1-2.3-2.3-2.3h-.4v41.9Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                    <path d="M861.3,316.2v37.3c0,1.5-1.2,2.7-2.7,2.7h-.7v-42.7h.7c1.5,0,2.7,1.2,2.7,2.7ZM858.7,355.4c1.1,0,1.9-.9,1.9-1.9v-37.3c0-1.1-.9-1.9-1.9-1.9v41.2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  </g>
                  <g>
                    <line x1="858.2" y1="355.8" x2="858.2" y2="313.8" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                    <rect x="857.8" y="313.8" width=".8" height="41.9" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  </g>
                </g>
                <g>
                  <path d="M863.1,341.6v-12.4c2.5,1,4.3,3.4,4.3,6.2s-1.8,5.3-4.3,6.2Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M867.7,335.4c0,2.9-1.8,5.5-4.5,6.6l-.5.2v-13.5l.5.2c2.7,1.1,4.5,3.6,4.5,6.6ZM863.4,341c2.1-1,3.5-3.2,3.5-5.6s-1.4-4.6-3.5-5.6v11.3Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
              </g>
              <g>
                <g>
                  <polygon points="843.5 247.3 843.5 299.6 841.3 299.6 841.3 273.7 841.3 247.3 843.5 247.3" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M843.9,247v53h-3v-53h3ZM843.2,299.2v-51.5h-1.5v51.5h1.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <line x1="843.3" y1="273.7" x2="841.3" y2="273.7" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <rect x="841.3" y="273.3" width="2" height=".8" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
              </g>
              <g>
                <g>
                  <polygon points="843.5 370.1 843.5 422.4 841.3 422.4 841.3 396.4 841.3 370.1 843.5 370.1" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M843.9,369.7v53h-3v-53h3ZM843.2,422v-51.5h-1.5v51.5h1.5Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <line x1="843.3" y1="396.4" x2="841.3" y2="396.4" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <rect x="841.3" y="396" width="2" height=".8" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
              </g>
            </g>
            <g id="Piano" filter="url(#drop-shadow-26)">
              <g>
                <path d="M267.4,837.9c-11.5,5.4-16.5,19.2-11,30.8,0,0,0,0,0,.1,2.5,5.3,2.6,11.5,0,16.7-3.1,6.2-3.5,13.6-.3,20.4,5.4,11.5,19.2,16.5,30.8,11s.6-.3.8-.4l15.1-7.1h0s27.8-13.1,27.8-13.1l-34-72.1-27.8,13.1h0c-.4.2-.9.4-1.3.6Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M296.6,823.8l34.2,72.5-28.2,13.3h0s-14.8,7-14.8,7c-.3.2-.6.3-.8.4-11.7,5.5-25.6.5-31.1-11.2-3.1-6.6-3-14.1.3-20.6,2.6-5,2.6-11.2,0-16.5h0c-5.5-11.8-.5-25.7,11.2-31.2.3-.2.7-.3,1.1-.5h0s28.2-13.4,28.2-13.4ZM330.2,896.1l-33.8-71.6-27.3,12.9h0c0,0-.3.2-.3.2-.5.2-.9.4-1.3.6-11.4,5.4-16.3,19-10.9,30.4h0c2.6,5.5,2.6,11.8,0,17-3.2,6.4-3.4,13.7-.3,20.2,5.4,11.4,19,16.3,30.4,10.9.3-.1.5-.3.8-.4l15.3-7.2h0s27.3-12.9,27.3-12.9Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <rect x="264.5" y="854.3" width="79.6" height="20.3" transform="translate(-347.6 1508.7) rotate(-115.3)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M296.6,823.8l34.2,72.4-18.8,8.9-34.2-72.4,18.8-8.9ZM330.1,896l-33.8-71.5-17.9,8.4,33.8,71.5,17.9-8.4Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <rect x="259.4" y="862.4" width="79.6" height="9" transform="translate(-357 1507.5) rotate(-115.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M286.4,828.6l34.2,72.4-8.6,4.1-34.2-72.4,8.6-4.1ZM319.9,900.8l-33.8-71.5-7.7,3.6,33.8,71.5,7.7-3.6Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <rect x="293.4" y="820.8" width="2.7" height="11.3" transform="translate(-326.9 1445.8) rotate(-115.3)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M299.4,822.5l1.4,2.9-10.7,5-1.4-2.9,10.7-5ZM300.1,825.1l-.9-1.9-9.7,4.6.9,1.9,9.7-4.6Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <rect x="323.5" y="891.8" width="2.7" height="11.3" transform="translate(-348.1 1574.2) rotate(-115.3)" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M329.5,893.5l1.4,2.9-10.7,5-1.4-2.9,10.7-5ZM330.2,896.1l-.9-1.9-9.7,4.6.9,1.9,9.7-4.6Z" fill="#e2d0b5" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <g>
                  <rect x="318.4" y="895" width="11.3" height="1.3" transform="translate(-351.3 224) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M328.9,892.4l.7,1.5-10.5,5-.7-1.5,10.5-5ZM329.1,893.7l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="317.6" y="893.4" width="11.3" height="1.3" transform="translate(-350.7 223.5) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M328.2,890.8l.7,1.5-10.5,5-.7-1.5,10.5-5ZM328.4,892.2l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="316.9" y="891.9" width="11.3" height="1.3" transform="translate(-350.1 223.1) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M327.4,889.3l.7,1.5-10.5,5-.7-1.5,10.5-5ZM327.7,890.7l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="316.2" y="890.4" width="11.3" height="1.3" transform="translate(-349.5 222.6) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M326.7,887.8l.7,1.5-10.5,5-.7-1.5,10.5-5ZM327,889.1l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="315.5" y="888.8" width="11.3" height="1.3" transform="translate(-348.9 222.1) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M326,886.2l.7,1.5-10.5,5-.7-1.5,10.5-5ZM326.2,887.6l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="314.7" y="887.3" width="11.3" height="1.3" transform="translate(-348.3 221.7) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M325.3,884.7l.7,1.5-10.5,5-.7-1.5,10.5-5ZM325.5,886.1l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="314" y="885.7" width="11.3" height="1.3" transform="translate(-347.8 221.2) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M324.5,883.2l.7,1.5-10.5,5-.7-1.5,10.5-5ZM324.8,884.5l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="313.3" y="884.2" width="11.3" height="1.3" transform="translate(-347.2 220.8) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M323.8,881.6l.7,1.5-10.5,5-.7-1.5,10.5-5ZM324.1,883l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="312.6" y="882.7" width="11.3" height="1.3" transform="translate(-346.6 220.3) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M323.1,880.1l.7,1.5-10.5,5-.7-1.5,10.5-5ZM323.3,881.4l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="311.8" y="881.1" width="11.3" height="1.3" transform="translate(-346 219.9) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M322.4,878.6l.7,1.5-10.5,5-.7-1.5,10.5-5ZM322.6,879.9l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="311.1" y="879.6" width="11.3" height="1.3" transform="translate(-345.4 219.4) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M321.6,877l.7,1.5-10.5,5-.7-1.5,10.5-5ZM321.9,878.4l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="310.4" y="878.1" width="11.3" height="1.3" transform="translate(-344.8 218.9) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M320.9,875.5l.7,1.5-10.5,5-.7-1.5,10.5-5ZM321.2,876.8l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="309.7" y="876.5" width="11.3" height="1.3" transform="translate(-344.2 218.5) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M320.2,873.9l.7,1.5-10.5,5-.7-1.5,10.5-5ZM320.4,875.3l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="308.9" y="875" width="11.3" height="1.3" transform="translate(-343.7 218) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M319.5,872.4l.7,1.5-10.5,5-.7-1.5,10.5-5ZM319.7,873.8l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="308.2" y="873.5" width="11.3" height="1.3" transform="translate(-343.1 217.6) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M318.7,870.9l.7,1.5-10.5,5-.7-1.5,10.5-5ZM319,872.2l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="307.5" y="871.9" width="11.3" height="1.3" transform="translate(-342.5 217.1) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M318,869.3l.7,1.5-10.5,5-.7-1.5,10.5-5ZM318.3,870.7l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="306.8" y="870.4" width="11.3" height="1.3" transform="translate(-341.9 216.7) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M317.3,867.8l.7,1.5-10.5,5-.7-1.5,10.5-5ZM317.5,869.2l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="306" y="868.8" width="11.3" height="1.3" transform="translate(-341.3 216.2) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M316.6,866.3l.7,1.5-10.5,5-.7-1.5,10.5-5ZM316.8,867.6l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="305.3" y="867.3" width="11.3" height="1.3" transform="translate(-340.7 215.8) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M315.8,864.7l.7,1.5-10.5,5-.7-1.5,10.5-5ZM316.1,866.1l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="304.6" y="865.8" width="11.3" height="1.3" transform="translate(-340.1 215.3) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M315.1,863.2l.7,1.5-10.5,5-.7-1.5,10.5-5ZM315.4,864.5l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="303.9" y="864.2" width="11.3" height="1.3" transform="translate(-339.6 214.8) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M314.4,861.7l.7,1.5-10.5,5-.7-1.5,10.5-5ZM314.6,863l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="303.1" y="862.7" width="11.3" height="1.3" transform="translate(-339 214.4) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M313.7,860.1l.7,1.5-10.5,5-.7-1.5,10.5-5ZM313.9,861.5l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="302.4" y="861.2" width="11.3" height="1.3" transform="translate(-338.4 213.9) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M312.9,858.6l.7,1.5-10.5,5-.7-1.5,10.5-5ZM313.2,859.9l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="301.7" y="859.6" width="11.3" height="1.3" transform="translate(-337.8 213.5) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M312.2,857l.7,1.5-10.5,5-.7-1.5,10.5-5ZM312.5,858.4l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="301" y="858.1" width="11.3" height="1.3" transform="translate(-337.2 213) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M311.5,855.5l.7,1.5-10.5,5-.7-1.5,10.5-5ZM311.7,856.9l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="300.2" y="856.6" width="11.3" height="1.3" transform="translate(-336.6 212.6) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M310.8,854l.7,1.5-10.5,5-.7-1.5,10.5-5ZM311,855.3l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="299.5" y="855" width="11.3" height="1.3" transform="translate(-336 212.1) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M310,852.4l.7,1.5-10.5,5-.7-1.5,10.5-5ZM310.3,853.8l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="298.8" y="853.5" width="11.3" height="1.3" transform="translate(-335.5 211.6) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M309.3,850.9l.7,1.5-10.5,5-.7-1.5,10.5-5ZM309.6,852.3l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="298.1" y="851.9" width="11.3" height="1.3" transform="translate(-334.9 211.2) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M308.6,849.4l.7,1.5-10.5,5-.7-1.5,10.5-5ZM308.8,850.7l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="297.3" y="850.4" width="11.3" height="1.3" transform="translate(-334.3 210.7) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M307.9,847.8l.7,1.5-10.5,5-.7-1.5,10.5-5ZM308.1,849.2l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="296.6" y="848.9" width="11.3" height="1.3" transform="translate(-333.7 210.3) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M307.1,846.3l.7,1.5-10.5,5-.7-1.5,10.5-5ZM307.4,847.7l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="295.9" y="847.3" width="11.3" height="1.3" transform="translate(-333.1 209.8) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M306.4,844.8l.7,1.5-10.5,5-.7-1.5,10.5-5ZM306.7,846.1l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="295.2" y="845.8" width="11.3" height="1.3" transform="translate(-332.5 209.4) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M305.7,843.2l.7,1.5-10.5,5-.7-1.5,10.5-5ZM305.9,844.6l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="294.4" y="844.3" width="11.3" height="1.3" transform="translate(-331.9 208.9) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M305,841.7l.7,1.5-10.5,5-.7-1.5,10.5-5ZM305.2,843l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="293.7" y="842.7" width="11.3" height="1.3" transform="translate(-331.3 208.5) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M304.2,840.2l.7,1.5-10.5,5-.7-1.5,10.5-5ZM304.5,841.5l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="293" y="841.2" width="11.3" height="1.3" transform="translate(-330.8 208) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M303.5,838.6l.7,1.5-10.5,5-.7-1.5,10.5-5ZM303.8,840l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="292.3" y="839.7" width="11.3" height="1.3" transform="translate(-330.2 207.5) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M302.8,837.1l.7,1.5-10.5,5-.7-1.5,10.5-5ZM303,838.4l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="291.5" y="838.1" width="11.3" height="1.3" transform="translate(-329.6 207.1) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M302.1,835.5l.7,1.5-10.5,5-.7-1.5,10.5-5ZM302.3,836.9l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="290.8" y="836.6" width="11.3" height="1.3" transform="translate(-329 206.6) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M301.3,834l.7,1.5-10.5,5-.7-1.5,10.5-5ZM301.6,835.4l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="290.1" y="835.1" width="11.3" height="1.3" transform="translate(-328.4 206.2) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M300.6,832.5l.7,1.5-10.5,5-.7-1.5,10.5-5ZM300.9,833.8l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="289.4" y="833.5" width="11.3" height="1.3" transform="translate(-327.8 205.7) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M299.9,830.9l.7,1.5-10.5,5-.7-1.5,10.5-5ZM300.1,832.3l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="288.6" y="832" width="11.3" height="1.3" transform="translate(-327.2 205.3) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M299.2,829.4l.7,1.5-10.5,5-.7-1.5,10.5-5ZM299.4,830.8l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="287.9" y="830.4" width="11.3" height="1.3" transform="translate(-326.7 204.8) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M298.4,827.9l.7,1.5-10.5,5-.7-1.5,10.5-5ZM298.7,829.2l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <rect x="287.2" y="828.9" width="11.3" height="1.3" transform="translate(-326.1 204.3) rotate(-25.3)" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M297.7,826.3l.7,1.5-10.5,5-.7-1.5,10.5-5ZM298,827.7l-.4-.9-9.9,4.7.4.9,9.9-4.7Z" fill="#f4f2ef" stroke="#ccb596" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
              </g>
            </g>
            <g id="Plant5" data-name="Plant" filter="url(#drop-shadow-27)">
              <g>
                <circle cx="271.3" cy="899.8" r="10" transform="translate(-180.9 75.9) rotate(-12)" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M280.5,895.4c2.4,5.1.2,11.2-4.9,13.6s-11.2.2-13.6-4.9c-2.4-5.1-.2-11.2,4.9-13.6s11.2-.2,13.6,4.9ZM262.5,904c2.3,4.9,8.1,6.9,13,4.7,4.9-2.3,6.9-8.1,4.7-13s-8.1-6.9-13-4.7-6.9,8.1-4.7,13Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <g>
                  <path d="M270.8,902.6s-1.8-2,.7-3.6c2.8-1.8,2.9.6,4.2,1.2,1.3.6,1.4-.3,2.5.2,1.1.6,1.5,1.8,2.4,1.5.9-.3,1.8-.9,2.6-.2.9.8,1.8,1.1,3,1.1,2,0,3.4,2,5.5,1.7,0,0-3.5,3.1-5.1,2.7-1.4-.3-2.3,1.2-3.6,1.2-.5,0-.9-.2-1.3-.5-.3-.3-.5-.5-1-.5-.9,0-1.7.6-2.6.6-1.6,0-2.4-1.4-3.5-1.2-1.1.2-2.4,0-3.9-1.2-1.5-1.2.3-3,.3-3Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M291.8,904.3c0,0,0,.2,0,.3-.1.1-3.6,3.2-5.3,2.8-.7-.2-1.2.2-1.8.5-.5.3-1.1.7-1.8.7-.5,0-1-.2-1.4-.5,0,0-.1,0-.2-.1-.2-.2-.4-.3-.7-.3-.4,0-.7.2-1.1.3-.5.2-1,.3-1.5.3-.8,0-1.5-.4-2-.7-.5-.3-.9-.6-1.4-.5-1.4.3-2.8-.1-4.1-1.2-.4-.4-.7-.8-.7-1.3,0-.8.6-1.6.8-1.9-.2-.3-.6-1-.5-1.9.1-.7.6-1.4,1.4-1.9,2.1-1.4,2.9-.5,3.5.4.3.3.5.6.9.8.6.3.9.2,1.2.1.3,0,.7-.2,1.3.1.5.2.8.6,1.1.9.5.5.7.7,1.1.6.2,0,.4-.1.6-.2.7-.3,1.5-.6,2.2,0,.8.8,1.7,1.1,2.8,1,1,0,1.8.4,2.6.9.9.5,1.8,1,2.8.8,0,0,.2,0,.2.1h0ZM270.3,904.9c0,.2.2.3.4.5,1.2,1,2.4,1.4,3.8,1.1.6-.1,1.1.2,1.7.5.5.3,1.1.7,1.8.7.5,0,.9-.1,1.4-.3.4-.1.8-.3,1.2-.3.5,0,.7.2,1,.4,0,0,.1,0,.2.1.4.3.8.4,1.2.4.6,0,1-.3,1.5-.6.6-.4,1.3-.8,2.2-.6,1,.3,3.2-1.3,4.4-2.2-.9,0-1.7-.5-2.4-.9-.8-.4-1.5-.9-2.4-.8-1.3,0-2.3-.3-3.2-1.1-.5-.5-1.1-.2-1.7,0-.2,0-.4.2-.7.2-.7.2-1.1-.2-1.5-.7-.3-.3-.6-.6-1-.8-.5-.2-.7-.2-1,0-.3,0-.7.2-1.5-.1-.4-.2-.7-.6-1-.9-.6-.8-1.2-1.4-3-.3-.7.5-1.1,1-1.2,1.6-.1.9.5,1.7.5,1.7,0,0,0,.2,0,.3,0,0-.9.9-.8,1.7,0,.2,0,.3.1.4Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <path d="M291.8,904.3h0c0,.1,0,.2-.1.3-3.8,1.7-6,1.2-8,.7-1.1-.3-2.2-.5-3.4-.4-7.8,1-9.7-2.3-9.8-2.5,0,0,0-.2,0-.3.1,0,.2,0,.3,0,0,0,1.9,3.2,9.3,2.2,1.3-.2,2.4.1,3.6.4,2,.5,4.1,1,7.7-.7.1,0,.2,0,.3.1Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M274.1,899c-1.1,1.2-2.9,3-1.8,4.6,0,.1,0,.3,0,.3-.4.1-.8.3-1.1.6-.3.3-.6.7-.5,1.1-.5-1,.7-1.7,1.5-2.1,0,0,0,.3,0,.3-1.4-1.8.6-3.9,2.1-4.8h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M274,906.7c-.6-.7-1-1.6-.9-2.6,0,0,0,0,0-.1.8-.9,1.7-1.8,2.8-2.5.4-.2.7-.4,1.1-.5-.7.5-1.3,1-1.9,1.6-.6.6-1.2,1.1-1.7,1.7h0c-.1.7.2,1.6.5,2.4h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M278.4,907.3c-1-.5-1.8-1.4-2.4-2.4,0,0,0-.2,0-.2.8-.5,1.4-1.2,2.2-1.8.2-.2.5-.4.7-.6-.5.8-1.1,1.6-1.9,2.2-.3.2-.5.4-.8.6v-.3c.6,1,1.3,1.8,2.1,2.5h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M281.5,907.2c-.5-.9-1.1-1.7-1.8-2.4-.1,0,0-.3,0-.3,1-.7,1.8-1.6,2.8-2.3-.2.3-.3.5-.5.8-.6.7-1.2,1.5-2.1,1.9,0,0,0-.3,0-.3.7.7,1.2,1.7,1.5,2.7h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M284.4,907c-.4-.6-.8-1.2-1.1-1.8,0,0,0-.2,0-.3.8-.2,1.5-.6,2.2-1,.2-.1.5-.3.7-.4-.3.5-.8.8-1.2,1.2-.5.3-1,.6-1.6.7v-.3c.4.7.7,1.3.9,2h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <g>
                  <path d="M268.5,901.3s1.9-1.9,3.7.4c2.1,2.6-.3,2.9-.8,4.3s.4,1.3,0,2.5c-.5,1.1-1.6,1.6-1.3,2.5.3.9,1.1,1.7.4,2.5-.7,1-.9,1.9-.8,3.1.3,1.9-1.7,3.6-1.2,5.6,0,0-3.4-3.2-3.2-4.8.2-1.4-1.4-2.2-1.5-3.5,0-.5,0-.9.4-1.4.2-.4.5-.6.4-1-.2-.9-.8-1.6-.8-2.6-.1-1.6,1.2-2.5.9-3.5-.3-1.1-.3-2.4.8-4,1.1-1.6,3,0,3,0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M273,902.5c.6,1.3,0,2-.7,2.5-.3.3-.6.6-.7.9-.2.6-.1.9,0,1.2.1.3.2.7,0,1.3-.2.5-.5.9-.8,1.2-.4.5-.6.8-.5,1.1,0,.2.2.4.3.6.3.7.7,1.4.1,2.2-.7.9-.9,1.7-.7,2.9.1,1-.3,1.9-.6,2.7-.4,1-.8,1.9-.5,2.9,0,0,0,.2,0,.2,0,0-.2,0-.3,0-.1-.1-3.5-3.3-3.2-5,0-.7-.3-1.2-.7-1.8-.4-.5-.8-1-.8-1.7,0-.5,0-1,.4-1.5,0,0,0-.1.1-.2.2-.3.3-.4.2-.7,0-.4-.2-.7-.4-1.1-.2-.5-.4-.9-.5-1.5,0-.8.3-1.5.5-2.1.3-.5.5-1,.3-1.4-.4-1.4-.1-2.8.8-4.2.3-.5.7-.7,1.2-.8.8-.1,1.7.4,2,.7.3-.2,1-.7,1.8-.7.7,0,1.4.5,2,1.2.3.4.5.7.6,1ZM270,911.3c0-.1-.1-.2-.1-.3-.2-.6.1-1.1.6-1.6.3-.3.5-.6.7-1.1.2-.5.1-.7,0-1-.1-.3-.3-.7,0-1.5.2-.4.5-.8.8-1.1.7-.7,1.3-1.3,0-3-.5-.7-1.1-1-1.7-1.1-.9,0-1.6.7-1.7.7,0,0-.2,0-.3,0,0,0-.9-.8-1.8-.7-.4,0-.7.2-.9.6-.9,1.3-1.1,2.6-.8,3.8.2.6,0,1.1-.4,1.7-.3.6-.5,1.1-.5,1.9,0,.5.2.9.4,1.4.2.4.3.8.4,1.2,0,.5-.1.7-.3,1,0,0,0,.1-.1.2-.2.4-.4.8-.3,1.2,0,.5.4,1,.7,1.5.5.6.9,1.2.8,2.1-.2,1.1,1.6,3.1,2.6,4.2,0-.9.3-1.7.7-2.5.4-.8.7-1.6.6-2.5-.2-1.3,0-2.3.8-3.2.4-.5.1-1.1-.2-1.7,0,0,0-.2-.1-.3Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <path d="M268.9,901c0,0,0,.2,0,.3,0,0-3,2.2-1.4,9.5.3,1.3.1,2.4,0,3.6-.3,2.1-.6,4.2,1.4,7.7,0,.1,0,.2,0,.3-.1,0-.2,0-.3,0-2.1-3.6-1.7-5.9-1.4-7.9.2-1.1.3-2.2,0-3.4-1.8-7.7,1.4-9.9,1.5-10,.1,0,.2,0,.3,0,0,0,0,0,0,0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M272.4,904.2c-1.3-1-3.2-2.6-4.8-1.4,0,0-.2,0-.3,0-.2-.4-.4-.8-.7-1.1-.3-.3-.7-.5-1.1-.4.9-.6,1.8.6,2.2,1.3,0,0-.3,0-.3,0,1.7-1.5,4,.2,5,1.7h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M264.7,904.8c.6-.7,1.5-1.2,2.5-1.2,0,0,0,0,.1,0,1,.7,2,1.6,2.7,2.5.2.3.5.7.6,1.1-.5-.6-1.1-1.2-1.7-1.7-.6-.5-1.2-1.1-1.9-1.6h.1c-.9,0-1.7.4-2.5.8h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M264.5,909.2c.4-1,1.2-2,2.1-2.6,0,0,.2,0,.3,0,.6.7,1.3,1.3,2,2,.2.2.5.4.7.7-.9-.4-1.7-1-2.4-1.6-.2-.3-.5-.5-.6-.8h.3c-.9.6-1.7,1.4-2.3,2.3h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M264.9,912.3c.8-.6,1.6-1.2,2.2-2,0-.1.2,0,.3,0,0,0,0,.1.1.2.7.9,1.7,1.5,2.4,2.4-.3-.1-.6-.3-.8-.4-.8-.5-1.6-1.1-2.1-1.9,0,0,.3,0,.3,0-.7.8-1.6,1.4-2.5,1.8h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M265.4,915.2c.5-.5,1.1-.9,1.7-1.3,0,0,.2,0,.3,0,.3.8.8,1.5,1.2,2.1.2.2.3.4.5.7-.5-.3-.9-.7-1.3-1.1-.4-.5-.6-.9-.8-1.5,0,0,.3.1.3.1-.6.3-1.3.7-1.9.9h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <g>
                  <path d="M272.1,897.6s-2,1.8-3.6-.7c-1.8-2.8.5-2.9,1.1-4.2.6-1.3-.3-1.4.2-2.5.6-1.1,1.8-1.5,1.5-2.4-.3-.9-.9-1.8-.2-2.6.8-.9,1.1-1.8,1-3-.1-2,2-3.4,1.6-5.5,0,0,3.1,3.5,2.7,5.1-.3,1.4,1.2,2.3,1.2,3.6,0,.5-.2.9-.5,1.3-.3.3-.5.5-.5,1,0,.9.6,1.7.6,2.6,0,1.6-1.4,2.4-1.2,3.5.2,1.1,0,2.4-1.2,3.9-1.2,1.5-3-.3-3-.3Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M276.4,880.1c.3.7.5,1.3.4,1.8-.2.7.2,1.2.6,1.8.3.5.7,1.1.7,1.8,0,.5-.2,1-.5,1.4,0,0,0,.1-.1.2-.2.2-.3.4-.3.7,0,.4.2.7.3,1.1.2.5.3,1,.3,1.5,0,.8-.4,1.5-.7,2-.3.5-.6.9-.5,1.4.3,1.4-.1,2.8-1.2,4.1-.4.4-.8.7-1.3.7-.8,0-1.6-.6-1.9-.8-.3.2-1,.6-1.9.5-.7-.1-1.4-.6-1.9-1.4-1.4-2.1-.5-2.9.3-3.5.3-.3.6-.5.8-.9.3-.6.2-.9.1-1.2,0-.3-.2-.7.1-1.3.2-.5.6-.8.9-1.1.5-.5.7-.7.6-1.1,0-.2-.1-.4-.2-.6-.3-.7-.6-1.5,0-2.2.8-.8,1-1.7,1-2.8,0-1,.4-1.8.9-2.6.5-.9,1-1.8.8-2.8,0,0,0-.2.1-.2,0,0,.2,0,.3,0,0,.1,1.6,1.9,2.4,3.5ZM276.6,883.2c-.2-.4-.3-.9-.2-1.4.2-1-1.3-3.2-2.3-4.4,0,.9-.5,1.7-.9,2.4-.4.8-.9,1.6-.8,2.4,0,1.3-.3,2.3-1.1,3.2-.5.5-.2,1.1,0,1.7,0,.2.2.4.2.7.2.7-.2,1.1-.7,1.5-.3.3-.6.6-.8,1-.2.5-.2.7,0,1,0,.3.2.7-.1,1.5-.2.4-.6.7-.9,1-.8.6-1.4,1.2-.2,3,.5.7,1,1.1,1.6,1.2.9.1,1.7-.5,1.7-.5,0,0,.2,0,.3,0,0,0,.9.9,1.7.8.4,0,.7-.2.9-.5,1-1.2,1.4-2.5,1.1-3.8-.1-.6.2-1.1.5-1.7.3-.5.6-1.1.7-1.8,0-.5-.1-.9-.3-1.4-.1-.4-.3-.8-.3-1.2,0-.5.2-.7.4-1,0,0,0-.1.1-.2.3-.4.4-.8.4-1.2,0-.6-.3-1-.6-1.5-.1-.2-.3-.5-.4-.7Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <path d="M274.1,876.7h0c1.8,3.8,1.2,6,.7,8-.3,1.1-.5,2.2-.4,3.4,1.1,7.8-2.3,9.7-2.4,9.8-.1,0-.2,0-.3,0,0-.1,0-.2,0-.3,0,0,3.2-1.9,2.2-9.3-.2-1.3,0-2.4.4-3.6.5-2,1-4.1-.7-7.7,0-.1,0-.2.1-.3.1,0,.2,0,.3.1Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M268.5,894.3c1.2,1.1,3,2.9,4.6,1.8.1,0,.3,0,.3,0,.1.4.3.8.6,1.1.3.3.7.6,1.1.5-1,.5-1.8-.7-2.1-1.5,0,0,.3,0,.3,0-1.8,1.4-3.9-.6-4.9-2.1h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M276.2,894.4c-.7.6-1.6,1-2.6.9,0,0,0,0-.1,0-.9-.8-1.8-1.7-2.5-2.8-.2-.4-.4-.7-.5-1.1.5.7,1,1.3,1.6,1.9.6.6,1.1,1.2,1.7,1.7h-.1c.9,0,1.7-.2,2.5-.6h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M276.8,890c-.5,1-1.4,1.8-2.4,2.4,0,0-.2,0-.2,0-.5-.8-1.2-1.4-1.8-2.1-.2-.2-.4-.5-.6-.7.8.5,1.6,1.1,2.2,1.8.2.3.4.5.6.8,0,0-.3-.1-.3-.1,1-.5,1.8-1.2,2.5-2h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M276.7,886.9c-.9.5-1.7,1.1-2.4,1.8,0,.1-.3,0-.3,0-.7-1-1.6-1.8-2.3-2.7.3.2.5.3.8.5.7.6,1.5,1.2,1.9,2.1,0,0-.3,0-.3,0,.7-.7,1.7-1.3,2.7-1.6h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M276.4,884c-.6.4-1.2.8-1.8,1.1,0,0-.2,0-.3,0-.2-.8-.6-1.5-1.1-2.2-.1-.2-.3-.5-.4-.7.5.3.9.8,1.2,1.2.3.5.6,1,.7,1.6h-.3c.7-.4,1.3-.7,2-.9h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <g>
                  <path d="M272.1,899.5s-2-.1-1.6-2.3c.5-2.5,1.8-1.3,2.8-1.6s.5-.9,1.4-1.2c.9-.3,1.7.1,2-.5.3-.6.5-1.4,1.2-1.5.9,0,1.5-.4,2.1-1.1,1-1.1,2.9-.8,3.8-2.1,0,0-.2,3.5-1.2,4.2-.9.6-.5,1.9-1.3,2.6-.3.3-.6.4-.9.5-.3,0-.6,0-.8.3-.4.5-.6,1.2-1.1,1.7-.8.8-2,.5-2.5,1.2-.5.7-1.2,1.3-2.7,1.5-1.5.2-1.5-1.7-1.5-1.7Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M284.2,889.2s0,0,0,.1c0,.4-.2,3.6-1.3,4.3-.4.3-.5.7-.6,1.2-.1.5-.2,1-.6,1.3-.3.3-.6.5-1.1.5,0,0-.1,0-.2,0-.2,0-.3,0-.5.2-.2.2-.3.5-.4.7-.2.3-.3.7-.6,1-.5.5-1,.6-1.5.7-.4.1-.8.2-.9.5-.6.9-1.6,1.5-2.9,1.6-.4,0-.8,0-1.1-.3-.5-.4-.6-1.1-.6-1.4-.3,0-.9-.2-1.3-.7-.3-.5-.4-1.1-.3-1.8.4-1.9,1.3-1.8,2.1-1.8.3,0,.6,0,.9,0,.4-.2.5-.3.6-.5.1-.2.3-.5.8-.6.4-.1.8-.1,1.1-.1.5,0,.7,0,.8-.3,0-.1.1-.3.2-.4.2-.5.5-1.1,1.2-1.2.8,0,1.4-.3,2-1,.5-.6,1.2-.8,1.9-1,.7-.2,1.4-.4,1.9-1.1,0,0,.2-.1.2,0,0,0,.1,0,.1.1ZM272.5,900.4c0,.1.2.3.3.4.2.2.4.2.7.2,1.2-.1,2-.6,2.5-1.4.3-.4.7-.5,1.2-.7.4-.1.9-.2,1.3-.6.3-.2.4-.6.6-.9.1-.3.3-.6.5-.8.2-.3.5-.3.8-.3,0,0,0,0,.2,0,.3,0,.6-.2.8-.4.3-.3.4-.7.5-1.1.1-.5.3-1.1.8-1.5.6-.4.9-2.2,1.1-3.4-.5.4-1.1.6-1.7.8-.6.2-1.3.4-1.7.9-.7.8-1.3,1.1-2.3,1.1-.4,0-.6.4-.8.9,0,.2-.1.3-.2.5-.3.5-.8.5-1.2.5-.3,0-.6,0-.9.1-.3.1-.4.3-.5.4-.1.2-.3.5-.9.7-.3.1-.7,0-1,0-.7,0-1.3-.1-1.6,1.4-.1.6,0,1.1.2,1.5.4.5,1.2.6,1.2.6.1,0,.2.1.2.2,0,0,0,.5.2.9Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <path d="M284.2,889.2c0,0,0,.1,0,.2-1,3-2.5,3.9-3.9,4.7-.7.5-1.4.9-2,1.6-3.6,4.8-6.4,4-6.5,4-.1,0-.2-.2-.1-.3s.2-.2.3-.1c0,0,2.7.7,6-3.8.6-.8,1.3-1.3,2.1-1.7,1.3-.8,2.7-1.7,3.7-4.5,0-.1.2-.2.3-.1,0,0,.1,0,.1.1Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M271.9,895.9c.1,1.2.1,3,1.5,3.3.1,0,.2.1.2.2-.2.4-.4.9-.3,1.4,0,.1.1.3.3.4-.8-.2-.6-1.3-.4-1.9,0,0,.2.3.2.3-1.7-.2-1.9-2.4-1.5-3.7h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M276,900c-.7,0-1.5-.3-2-.9,0-.9,0-1.9.1-2.8,0-.3.2-.6.3-.9,0,.6,0,1.2,0,1.8,0,.6,0,1.2,0,1.8h0c.4.4,1,.7,1.6,1h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M278.6,897.9c-.8.3-1.7.3-2.5,0,0,0-.1-.1-.1-.2.1-.7.1-1.4.2-2.1,0-.8,0-.9.3,0,.1.7.2,1.5,0,2.2,0,0-.1-.3-.1-.3.8.3,1.6.3,2.4.3h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M280.2,896.2c-.8-.2-1.5-.3-2.2-.2-.2,0-.2-.2-.2-.4.1-.8,0-1.7.2-2.5.3.8.3,1.6.2,2.4,0,.1,0,.2-.1.4l-.2-.3c.8,0,1.6.2,2.2.6h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M281.6,894.5c-.5,0-1.1-.2-1.6-.3,0,0-.2-.1-.1-.2,0-.2.2-.4.3-.6.2-.6.4-1.2.6-1.8.2.9,0,1.8-.5,2.5v-.3c.4.2.9.4,1.4.7h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <g>
                  <path d="M264.6,898.6s1.7.5.9,2.3c-.9,2-1.8.7-2.7.9-.9.1-.6.7-1.4.7-.8,0-1.4-.4-1.9,0s-.7,1.2-1.4,1c-.8-.1-1.4,0-2,.5-1.1.8-2.6,0-3.6,1,0,0,.8-3,1.9-3.3.9-.3.8-1.5,1.6-2,.3-.2.6-.2.9-.2.3,0,.5,0,.7,0,.5-.4.7-1,1.2-1.3.9-.5,1.8,0,2.3-.6.5-.5,1.3-.9,2.6-.8,1.3.1.9,1.8.9,1.8Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M265.8,899.4s0,0,0,0c.2.5.2,1,0,1.6-.7,1.6-1.5,1.3-2.2,1.1-.3,0-.5-.2-.7-.1-.4,0-.5.2-.6.3-.1.2-.3.4-.8.4-.4,0-.7,0-1-.1-.4,0-.6-.1-.8,0,0,.1-.2.2-.3.3-.3.4-.6.9-1.3.8-.7-.1-1.2,0-1.9.5-.5.4-1.2.4-1.8.5-.7,0-1.3,0-1.8.6,0,0-.2,0-.3,0,0,0-.1-.2,0-.2,0-.3.9-3.1,2-3.5.4-.1.6-.5.8-.9.2-.4.4-.8.8-1,.3-.2.7-.3,1-.2,0,0,.1,0,.1,0,.2,0,.3,0,.4,0,.2-.2.3-.3.5-.6.2-.3.4-.5.8-.7.5-.3,1-.3,1.4-.3.4,0,.7,0,.9-.2.7-.7,1.6-1,2.8-.8.4,0,.7.2.9.5.3.4.3,1.1.2,1.4.3.1.7.4.9.9ZM252.8,904.6c.5-.2,1-.3,1.5-.3.6,0,1.1,0,1.6-.4.7-.5,1.4-.7,2.2-.5.4,0,.6-.2.9-.6,0-.1.2-.3.3-.4.3-.4.8-.3,1.2-.2.3,0,.5.1.8,0,.3,0,.4-.1.5-.3.2-.2.4-.4.9-.5.3,0,.6,0,.9.2.6.2,1.1.4,1.6-.9.2-.5.3-.9,0-1.3-.3-.5-.9-.7-.9-.7-.1,0-.2-.1-.2-.3,0,0,.2-.8-.1-1.2-.1-.2-.3-.3-.6-.3-1-.1-1.8.1-2.4.7-.3.3-.8.3-1.2.3-.4,0-.8,0-1.2.3-.3.2-.4.4-.6.6-.2.2-.3.4-.6.6-.3.2-.5.2-.7.2,0,0,0,0-.1,0-.3,0-.5,0-.8.2-.3.2-.4.5-.6.9-.2.4-.4.9-1,1.1-.6.2-1.2,1.5-1.5,2.6Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <path d="M265,898.6c0,0,0,.1,0,.2,0,.1-.2.1-.3,0,0,0-2.2-1.1-5.9,2.1-.7.6-1.4.8-2.2,1.1-1.3.4-2.6.9-4,3.1,0,.1-.2.1-.3,0-.1,0-.1-.2,0-.3,1.5-2.4,3-2.9,4.2-3.3.7-.2,1.4-.5,2-1,4-3.4,6.3-2.2,6.4-2.2,0,0,0,0,0,0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M264.1,901.8c.7-4.1-1.5-2.5-.5-3.8.2-.3.4-.8.1-1.2.7.3.3,1.3,0,1.7,0,0,0-.3,0-.3,1.5.5,1.2,2.5.5,3.5h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M261.4,897.5c.6.1,1.2.5,1.5,1.1,0,0,0,0,0,.1-.1,1.1-.4,2.2-1.2,3.1.3-.9.6-2.2.8-3.1h0c-.2-.4-.7-.8-1.1-1.1h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M258.7,898.7c.7,0,1.5,0,2.2.4,0,0,.1.1,0,.2-.2.6-.4,1.2-.6,1.8-.2.7-.3.7-.3,0,0-.7.1-1.3.5-1.9,0,0,0,.3,0,.3-.6-.4-1.3-.6-2-.7h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M257.1,899.9c.6.3,1.3.5,1.9.6.2,0,.1.2.1.3,0,0,0,0,0,.1-.3.7-.4,1.4-.7,2.1,0-.8,0-1.6.3-2.3,0,0,0,0,.1-.2v.3c-.6-.2-1.2-.5-1.7-1h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M255.5,901.1c.5.1.9.3,1.3.6,0,0,.1.2,0,.2-.2.3-.4.6-.6.9-.2.3-.4.7-.6.9,0-.8.3-1.5.9-2.1,0,0,0,.3,0,.3-.4-.3-.8-.6-1.1-.9h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <g>
                  <path d="M269,896.8s.5,1.7-1.4,2c-2.2.4-1.6-1.1-2.2-1.8-.6-.7-.9-.2-1.4-.8-.5-.6-.4-1.5-1-1.5-.6,0-1.3,0-1.6-.6-.3-.7-.8-1.1-1.5-1.4-1.2-.5-1.5-2.1-2.9-2.5,0,0,2.9-.9,3.8-.3.8.6,1.7-.1,2.5.2.3.1.5.4.7.6.1.2.2.5.5.5.6.2,1.2,0,1.8.3.9.4,1.1,1.5,1.8,1.6.7.2,1.5.6,2.1,1.8.6,1.1-1,1.7-1,1.7Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M270.2,895c.2.3.2.7,0,1-.2.5-.7.8-1,1,0,.3,0,.8-.2,1.3-.3.4-.7.7-1.4.8-1.7.3-1.9-.5-2.1-1.2,0-.3-.1-.5-.3-.7-.3-.3-.4-.3-.6-.4-.2,0-.5,0-.8-.4-.2-.3-.3-.6-.4-.9-.2-.4-.2-.6-.5-.6-.1,0-.3,0-.4,0-.5,0-1.1,0-1.4-.7-.3-.7-.7-1-1.4-1.3-.6-.2-1-.8-1.4-1.2-.4-.5-.8-1-1.5-1.2,0,0-.2-.1-.2-.2,0,0,0-.2.2-.2.3-.1,3.1-1,4-.3.3.3.7.2,1.2.1.4,0,.9-.1,1.3,0,.3.1.6.4.8.7,0,0,0,0,0,.1,0,.2.1.3.3.3.2,0,.5,0,.7.1.3,0,.7,0,1,.2.5.2.8.6,1.1,1,.2.3.4.6.7.6,1,.2,1.7.8,2.2,1.9,0,0,0,0,0,0ZM266.1,898.2c.2.4.5.6,1.5.4.5,0,.9-.3,1.1-.6.3-.5.1-1.1.1-1.1,0-.1,0-.2.1-.3,0,0,.7-.3.9-.8,0-.2,0-.4,0-.6-.5-.9-1.1-1.4-1.9-1.6-.4,0-.7-.5-.9-.8-.2-.3-.5-.7-.9-.9-.3-.1-.6-.2-.9-.2-.3,0-.6,0-.8-.1-.3-.1-.4-.3-.5-.5,0,0,0,0,0-.1-.1-.2-.3-.4-.6-.5-.3-.1-.7,0-1,0-.5,0-1,.1-1.5-.2-.5-.4-2,0-3,.2.5.3.8.7,1.1,1.1.4.5.7.9,1.2,1.1.8.3,1.3.8,1.7,1.5.1.3.5.4,1,.4.2,0,.3,0,.5,0,.5,0,.7.5.8.9,0,.3.2.5.4.7.2.2.3.3.5.3.2,0,.5,0,.9.5.2.2.3.6.4.9,0,.2,0,.3.2.5Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <path d="M269,896.3c.2.4.2.7.2.7,0,.1,0,.2-.2.2-.1,0-.2,0-.2-.2,0,0-.3-2.4-5-3.7-.9-.2-1.5-.7-2.1-1.2-1.1-.8-2.2-1.7-4.8-1.6-.1,0-.2,0-.2-.2,0-.1,0-.2.2-.2,2.8,0,4,.9,5.1,1.7.6.5,1.2.9,2,1.1,3.5,1,4.7,2.5,5.1,3.4Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M266.1,898.2c3.8-1.7,1.2-2.7,2.9-2.5.4,0,.9,0,1-.6,0,.7-.9.9-1.5.9l.2-.2c.4,1.5-1.4,2.3-2.6,2.4h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M268.2,893.5c.2.6.2,1.3,0,1.8,0,0,0,0,0,0-1,.5-2.1.9-3.2.7.9-.2,2.1-.8,3-1.1h0c.3-.4.4-1,.4-1.6h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M265.7,892c.5.6.8,1.3.9,2.1,0,0,0,.2-.1.2-.6.1-1.2.4-1.8.5-.7.2-.7.2-.1-.2.6-.3,1.2-.6,1.8-.7,0,0-.2.2-.2.2,0-.7-.2-1.4-.5-2.1h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M263.8,891.2c.1.7.3,1.3.5,1.9,0,.2,0,.2-.2.3,0,0,0,0-.1,0-.7.2-1.4.5-2.2.6.6-.5,1.3-.9,2.1-1,0,0,.1,0,.2,0l-.2.3c-.2-.7-.3-1.4-.2-2h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M261.9,890.6c.1.5.2.9.3,1.4,0,.1-.1.2-.2.2-.7,0-1.4,0-2.1,0,.3-.2.7-.4,1-.4.4,0,.8,0,1.2,0l-.2.2c0-.5,0-.9.1-1.4h0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <path d="M270.5,899.8s0,.1,0,.2c0,0-.2.1-.2.1l-1.8-.8-.3,1.6c0,.1-.1.2-.2.1-.1,0-.2-.1-.1-.2l.3-1.4-2.3.3c-.1,0-.2,0-.2-.2,0-.1,0-.2.2-.2l2.6-.4s0,0,0,0l1.9.8s0,0,0,0Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
              <path d="M270.7,898.4s0,0,0,0c0,.1,0,.2-.1.2l-2.2.6c-.1,0-.2,0-.2-.1,0-.1,0-.2.1-.2l2.2-.6c0,0,.2,0,.2.1Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
            </g>
            <g id="Plant6" data-name="Plant" filter="url(#drop-shadow-28)">
              <g>
                <g>
                  <g>
                    <path d="M263.9,453.5c-1.2,0-2.5-.2-3.7-.5-7-2-11.1-9.4-9.1-16.4,1.6-5.7,6.9-9.6,12.7-9.6s2.5.2,3.7.5c3.4,1,6.2,3.2,7.9,6.3,1.7,3.1,2.1,6.7,1.1,10.1-1.6,5.7-6.9,9.6-12.7,9.6Z" fill="#fff"/>
                    <path d="M263.9,426.5v1c1.2,0,2.4.2,3.5.5,3.3.9,6,3.1,7.6,6.1,1.7,3,2,6.4,1.1,9.7-1.6,5.4-6.6,9.2-12.3,9.2s-2.4-.2-3.5-.5c-3.3-.9-6-3.1-7.6-6.1-1.7-3-2-6.4-1.1-9.7,1.6-5.4,6.6-9.2,12.3-9.2v-1M263.9,426.5c-6,0-11.5,3.9-13.2,10-2.1,7.3,2.1,14.9,9.4,17,1.3.4,2.5.5,3.8.5,6,0,11.5-3.9,13.2-10,2.1-7.3-2.1-14.9-9.4-17-1.3-.4-2.5-.5-3.8-.5h0Z" fill="#aa9d87"/>
                  </g>
                  <g>
                    <path d="M263.9,426c1.3,0,2.6.2,3.9.6,3.6,1,6.7,3.4,8.5,6.8,1.8,3.3,2.3,7.1,1.2,10.8-1,3.6-3.4,6.7-6.8,8.5-3.3,1.8-7.1,2.3-10.8,1.2-3.6-1-6.7-3.4-8.5-6.8-1.8-3.3-2.3-7.1-1.2-10.8s3.4-6.7,6.8-8.5c2.1-1.2,4.5-1.8,6.8-1.8ZM263.9,453.6c2.2,0,4.4-.6,6.5-1.7,3.1-1.7,5.4-4.6,6.4-8s.6-7-1.2-10.2c-1.7-3.1-4.6-5.4-8-6.4-3.4-1-7-.6-10.2,1.2-3.1,1.7-5.4,4.6-6.4,8h0c-1,3.4-.6,7,1.2,10.2,1.7,3.1,4.6,5.4,8,6.4,1.2.4,2.5.5,3.7.5Z" fill="#fff"/>
                    <path d="M263.9,426c-2.4,0-4.7.6-6.8,1.8-3.3,1.8-5.7,4.8-6.8,8.5s-.6,7.5,1.2,10.8c1.8,3.3,4.8,5.7,8.5,6.8,1.3.4,2.6.6,3.9.6,2.4,0,4.7-.6,6.8-1.8,3.3-1.8,5.7-4.8,6.8-8.5,1-3.6.6-7.5-1.2-10.8-1.8-3.3-4.9-5.7-8.5-6.8-1.3-.4-2.6-.6-3.9-.6h0ZM263.9,453.6c-1.2,0-2.5-.2-3.7-.5-3.4-1-6.3-3.2-8-6.4-1.7-3.1-2.1-6.7-1.2-10.2,1-3.4,3.2-6.3,6.4-8,2-1.1,4.2-1.7,6.5-1.7s2.5.2,3.7.5c3.4,1,6.3,3.2,8,6.4,1.7,3.1,2.1,6.7,1.2,10.2s-3.2,6.3-6.4,8c-2,1.1-4.2,1.7-6.5,1.7h0Z" fill="#aa9d87"/>
                  </g>
                </g>
                <g>
                  <path d="M250.3,425.3s-2.5,12.7,12.3,14.8c.6-15-12.3-14.8-12.3-14.8Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M250.3,424.9c.5,0,5.5,0,9.1,3.8,2.6,2.7,3.8,6.5,3.6,11.4v.5s-.5,0-.5,0c-4.9-.7-8.4-2.6-10.6-5.6-3.1-4.4-2.1-9.4-2.1-9.7v-.3c0,0,.4,0,.4,0h0ZM262.2,439.6c0-4.5-1.1-7.9-3.4-10.4-3-3-7-3.5-8.2-3.6-.1,1.2-.4,5.2,2,8.7,2,2.7,5.2,4.5,9.6,5.2Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M241.5,447.9s12.5,7.8,20.9-7.2c-15.8-6.7-20.9,7.2-20.9,7.2Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M254.3,438.5c2.5,0,5.3.6,8.2,1.9l.4.2-.2.4c-2.7,4.9-6.2,7.9-10.3,9-5.9,1.5-10.9-1.5-11.1-1.7l-.3-.2v-.3c.2-.2,2.3-5.7,7.9-8.2,1.7-.7,3.5-1.1,5.5-1.1ZM261.8,440.9c-4.8-1.9-9-2.1-12.6-.6-4.5,2-6.7,6.2-7.2,7.4,1.1.6,5.4,2.6,10.2,1.4,3.8-1,7-3.7,9.6-8.2Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M263.5,458.9s8.8-8.1-1.1-17.9c-8.6,10.9,1.1,17.9,1.1,17.9Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M262.3,440.5l.3.3c3.3,3.2,4.9,6.6,4.8,10.1,0,5-3.6,8.3-3.7,8.4l-.2.2-.3-.2c-.2-.1-4.1-2.9-4.7-7.9-.5-3.4.7-7,3.5-10.6l.3-.4ZM263.5,458.4c.8-.8,3.2-3.7,3.2-7.6,0-3.1-1.4-6.2-4.3-9.1-2.5,3.3-3.5,6.5-3.1,9.6.5,3.9,3.3,6.4,4.1,7.1Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M284.7,444.6s-6.8-13.1-21.6-4.4c10.2,13.8,21.6,4.4,21.6,4.4Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M272.6,436.8c1.3,0,2.5.2,3.7.5,5.9,1.7,8.6,6.9,8.8,7.1l.2.3-.3.2c-.2.2-4.8,3.8-10.8,3.1-4.2-.5-8-3.1-11.4-7.6l-.3-.4.4-.2c3.4-2,6.7-3,9.8-3ZM284.2,444.5c-.7-1.1-3.3-5-8.1-6.4-3.7-1.1-7.9-.3-12.4,2.2,3.1,4.1,6.7,6.4,10.5,6.9,4.9.6,8.9-1.9,9.9-2.7Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
                <g>
                  <path d="M272.9,424.4s-12.2.9-10.4,15c13.8-3.3,10.4-15,10.4-15Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                  <path d="M273.2,424v.3c.1.2,1.5,4.9-1.1,9.3-1.8,3.1-5,5.1-9.5,6.2h-.4c0,.1,0-.3,0-.3-.6-4.6.3-8.4,2.5-11.1,3.2-3.9,8.1-4.4,8.3-4.4h.3ZM262.8,438.9c4.1-1,7-3,8.6-5.7,2-3.4,1.4-7.2,1.2-8.3-1.1.2-4.9.9-7.4,4-2,2.5-2.8,5.8-2.4,10Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                </g>
              </g>
              <g>
                <path d="M262.8,439.8c1.3-.7,2.9-.1,3.6,1.2.7,1.3.1,2.9-1.2,3.6-1.3.7-2.9.1-3.6-1.2-.7-1.3-.1-2.9,1.2-3.6Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M264,439.1c.3,0,.7,0,1,.2.8.3,1.4.8,1.8,1.6.4.7.4,1.6.1,2.4-.3.8-.8,1.4-1.6,1.8-1.5.8-3.4.1-4.1-1.4-.8-1.5-.1-3.4,1.4-4.1.4-.2.9-.3,1.4-.3ZM264,444.5c.3,0,.7,0,1-.2.5-.3,1-.7,1.2-1.3.2-.6.2-1.2-.1-1.7-.3-.5-.7-1-1.3-1.2-.6-.2-1.2-.2-1.7.1h0c-1.1.6-1.6,1.9-1,3,.4.8,1.2,1.3,2,1.3Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M258.3,438.4c1.3-.7,2.9-.1,3.6,1.2.7,1.3.1,2.9-1.2,3.6-1.3.7-2.9.1-3.6-1.2-.7-1.3-.1-2.9,1.2-3.6Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M259.5,437.8c1.1,0,2.2.6,2.8,1.7.8,1.5.1,3.4-1.4,4.1-1.5.8-3.4.1-4.1-1.4-.8-1.5-.1-3.4,1.4-4.1h0c.4-.2.9-.3,1.4-.3ZM259.5,443.1c.3,0,.7,0,1-.2,1.1-.6,1.6-1.9,1-3-.6-1.1-1.9-1.6-3-1-1.1.6-1.6,1.9-1,3,.4.8,1.2,1.3,2,1.3Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
              <g>
                <path d="M262.3,434.5c1.3-.7,2.9-.1,3.6,1.2.7,1.3.1,2.9-1.2,3.6-1.3.7-2.9.1-3.6-1.2-.7-1.3-.1-2.9,1.2-3.6Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
                <path d="M263.5,433.8c.3,0,.7,0,1,.2.8.3,1.4.8,1.8,1.6.4.7.4,1.6.1,2.4-.3.8-.8,1.4-1.6,1.8-.7.4-1.6.4-2.4.1-.8-.3-1.4-.8-1.8-1.6-.4-.7-.4-1.6-.1-2.4.3-.8.8-1.4,1.6-1.8.4-.2.9-.3,1.4-.3ZM263.5,439.2c.3,0,.7,0,1-.2.5-.3,1-.7,1.2-1.3.2-.6.2-1.2-.1-1.7-.3-.5-.7-1-1.3-1.2-.6-.2-1.2-.2-1.7.1h0c-.5.3-1,.7-1.2,1.3-.2.6-.2,1.2.1,1.7.4.8,1.2,1.3,2,1.3Z" fill="#dbedda" stroke="#b0c1ae" stroke-miterlimit="10" stroke-width=".2"/>
              </g>
            </g>
          </g>
          <g id="People1" data-name="People">
            <g id="Boy">
              <g>
                <g>
                  <path d="M640.9,289.3c-3.2,0-15-5.5-16.7-6.3l4.2-10,1-6.8c.9.3,4,1.2,7.6,2.5,1.6.6,3.4,1.2,4.9,1.8l.5.2-.2-.5c-.3-.9-.4-1.7,0-2.2.2-.3.5-.5.9-.5,1.8-.2,4.1-1,4.9-2,.5-.6,1.6-1,2.6-1s1.1.2,1.3.5c.1.2.2.4,0,.6-.2.6-1.1,1.1-1.7,1.3-.8.2-3,1.7-4,3.8-.2.4-.3.8-.4,1.2v.2c0,0,.2,0,.2,0,1.5.6,2.7.9,3.6,1.2,2.3.6,6.9,3,10.3,4.8,1.4.7,2.6,1.3,3.2,1.6.7.3,1.4.4,2.3.4s1,0,1.5,0c.5,0,1,0,1.4,0s1.1,0,1.5.2c.8.3,1.3.9,1.4,1.6,0,.8-.3,1.5-.9,1.7-.2.1-.6.2-1,.2-1.3,0-3.1-.6-3.9-.8h-.3c-.3-.2-.7-.2-1.1-.3-.7,0-1.6-.1-2.4-.6h-.2c-1.1-.8-1.9-1.3-5.7-2-1.4-.3-2.5-.4-3.5-.6-2-.3-3.5-.5-5.8-1.3-.4-.1-.9-.3-1.5-.4h-.3c0,0,0,.5,0,.5-.8,8.7-2.2,10.8-3.3,11.1,0,0-.2,0-.4,0ZM633,276.3c.9,2.2,4.7,4.7,4.8,4.8l.6.4-.2-.7c-.3-.8,0-2,1-3.8l.2-.3h-.4c-3-.5-5.8-.7-5.8-.7h-.4s.1.3.1.3Z" fill="#fff"/>
                  <path d="M650.5,264.6h0c.5,0,.9.1,1.1.4.1.2.1.3,0,.4-.2.5-1,.9-1.6,1.1-.9.3-3.2,1.8-4.1,4-.2.4-.3.8-.4,1.2v.5c-.1,0,.3.2.3.2,1.5.6,2.7.9,3.6,1.2,2.2.6,6.9,3,10.3,4.7,1.4.7,2.6,1.3,3.2,1.6.7.3,1.5.5,2.4.5s1,0,1.5,0c.5,0,1,0,1.4,0,.6,0,1,0,1.4.2.7.2,1.2.7,1.2,1.4,0,.6-.3,1.3-.8,1.5-.2,0-.5.2-.9.2-1.3,0-3-.5-3.9-.8h-.3c-.3-.2-.7-.2-1.2-.3-.7,0-1.5-.1-2.3-.6h-.2c-1.2-.8-1.9-1.3-5.8-2-1.4-.3-2.5-.4-3.5-.6-2-.3-3.5-.5-5.7-1.3-.4-.1-.9-.3-1.5-.4h-.6c0-.1,0,.4,0,.4v.3c-.9,9-2.3,10.7-3.1,10.9,0,0-.2,0-.3,0-3,0-14.1-5.1-16.4-6.2l4.1-9.8h0c0,0,0-.1,0-.1l.9-6.5c1.2.4,4,1.3,7.3,2.4,1.6.6,3.3,1.2,4.8,1.8l1,.4-.4-1c-.3-.9-.4-1.6-.1-2,.1-.2.4-.4.7-.4,1.4-.2,4.1-.8,5.1-2.1.4-.5,1.5-.9,2.4-.9M638.9,282.1l-.5-1.4c-.3-.7,0-1.9,1-3.6l.3-.6h-.7c-3-.5-5.8-.8-5.8-.8h-.8c0,0,.3.7.3.7.9,2.3,4.8,4.8,4.9,4.9l1.2.8M650.5,264.1c-1.1,0-2.3.5-2.8,1.1-.8,1.1-3.2,1.7-4.8,1.9-1.5.2-1.6,1.6-1,3.1-1.6-.6-3.3-1.3-4.9-1.8-4.4-1.5-7.9-2.6-7.9-2.6l-1,7.1-4.2,10.2s13.5,6.4,17,6.4.3,0,.5,0c2.6-.7,3.3-9.6,3.5-11.6.6.1,1.1.3,1.5.4,3.5,1.2,5.3,1.1,9.3,1.9,4.1.8,4.6,1.2,5.9,2,1.3.7,2.7.5,3.5.8.7.2,2.8.9,4.3.9s.8,0,1.1-.2c1.4-.6,1.6-3.2-.5-3.9-.5-.2-1-.2-1.6-.2-1,0-2,.2-3,.2s-1.5,0-2.2-.4c-2.2-1-10.3-5.5-13.6-6.4-1-.3-2.2-.7-3.6-1.2.1-.4.3-.8.4-1.1.9-2,3-3.5,3.8-3.7s2.5-1.2,1.8-2.3c-.3-.4-.9-.6-1.5-.6h0ZM638,280.9s-3.9-2.5-4.8-4.7c0,0,2.7.3,5.8.7-.8,1.5-1.4,3-1,4h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M629,265.7s0,0,0,0c0,0,.1,0,.2,0,0,0,3.6,1.1,7.9,2.6,1.5.5,3,1.1,4.5,1.6-.3-.9-.2-1.7,0-2.2.3-.4.7-.7,1.3-.8,1.7-.2,3.9-.9,4.6-1.9.6-.7,1.9-1.2,3.1-1.2.7,0,1.3.3,1.5.7.2.3.3.7.1,1-.3.8-1.4,1.3-2,1.6-.7.2-2.8,1.6-3.7,3.6-.1.3-.2.6-.4.9,1.4.5,2.5.9,3.4,1.1,2.3.6,7,3,10.4,4.8,1.4.7,2.5,1.3,3.2,1.6,1.2.5,2.4.4,3.6.3,1,0,2.1-.2,3.1.1,1,.3,1.6,1.1,1.7,2.1,0,.9-.4,1.8-1.2,2.2-1.3.6-4.1-.2-5.3-.6-.1,0-.2,0-.3,0-.3,0-.6-.1-1-.2-.7,0-1.7-.2-2.6-.7,0,0-.2,0-.2-.1-1.1-.6-1.8-1.1-5.6-1.8-1.4-.3-2.5-.4-3.5-.6-2-.3-3.6-.5-5.9-1.3-.3-.1-.7-.2-1.2-.3h0c-.1,1.3-.4,3.9-.9,6.4-.7,3.2-1.6,4.9-2.7,5.2-1.1.3-4.4-.7-9.8-2.9-4-1.7-7.7-3.4-7.8-3.5-.1,0-.1-.2-.1-.3l4.2-10.2,1-7s0,0,0,0ZM642.1,270.3s0,0,0,0c0,0-.1,0-.2,0-1.5-.6-3.2-1.2-4.9-1.8-3.7-1.3-6.8-2.2-7.7-2.5l-.9,6.8s0,0,0,0l-4.2,10c.8.4,4.1,1.9,7.6,3.4,6.6,2.8,8.9,3.1,9.6,2.9.7-.2,1.6-1.2,2.4-4.9.5-2.4.8-5,.9-6.3v-.3c0,0,0-.1.1-.2,0,0,.1,0,.2,0,.6.1,1.1.3,1.5.4,2.3.8,3.8,1,5.8,1.3,1,.2,2.1.3,3.5.6,3.8.7,4.6,1.2,5.7,1.9,0,0,.2,0,.2.1.8.5,1.6.5,2.4.6.4,0,.8,0,1.1.2,0,0,.2,0,.3,0,1,.3,3.8,1.2,5,.6.6-.3,1-1,.9-1.8,0-.8-.6-1.4-1.4-1.7-.9-.3-1.9-.2-3-.1-1.3.1-2.6.2-3.9-.4-.7-.3-1.8-.9-3.2-1.6-3.4-1.8-8.1-4.2-10.3-4.8-.9-.3-2.1-.6-3.6-1.2-.1,0-.2-.2-.1-.3.1-.4.3-.8.4-1.2.9-2.2,3.2-3.6,3.9-3.8.6-.2,1.5-.7,1.8-1.3,0-.2,0-.4-.1-.7-.2-.3-.6-.5-1.2-.5-1,0-2.3.4-2.8,1-.8,1.1-3.1,1.8-4.9,2-.4,0-.8.2-1,.6-.3.5-.3,1.3,0,2.3,0,0,0,.1,0,.2ZM633,276.1s0,0,0,0c0,0,.1,0,.2,0,0,0,2.7.3,5.8.7,0,0,.1,0,.2.1,0,0,0,.1,0,.2-1,1.8-1.3,3-1,3.8,0,0,0,.2,0,.2,0,0-.2,0-.2,0-.2-.1-4-2.6-4.8-4.8,0,0,0-.1,0-.2ZM638.6,277c-2.3-.3-4.3-.5-5.1-.6.8,1.6,3.1,3.3,4.1,4,0-.8.2-1.9,1-3.4Z" fill="#fff"/>
                  <path d="M650.5,263.9c-1.1,0-2.4.5-3,1.2-.7.9-2.9,1.6-4.6,1.9-.6,0-1,.3-1.3.8-.3.5-.3,1.3,0,2.2-1.4-.5-3-1.1-4.5-1.6-4.3-1.5-7.9-2.6-7.9-2.6,0,0,0,0,0,0,0,0,0,0-.1,0,0,0,0,0,0,0,0,0,0,0,0,0l-1,7-4.2,10.2c0,.1,0,.2.1.3,0,0,3.8,1.8,7.8,3.5,4.8,2,7.9,3,9.3,3s.4,0,.5,0c1.1-.3,2-2,2.7-5.2.5-2.5.8-5.1.9-6.4h0c.5,0,.9.2,1.2.3,2.3.8,3.9,1,5.9,1.3,1,.2,2.1.3,3.5.6,3.8.7,4.5,1.2,5.6,1.8,0,0,.2,0,.2.1.9.5,1.8.6,2.6.7.4,0,.7,0,1,.2,0,0,.2,0,.3,0,.9.3,2.7.8,4.1.8s.9,0,1.2-.2c.8-.4,1.2-1.3,1.2-2.2,0-1-.7-1.7-1.7-2.1-.5-.2-1.1-.2-1.6-.2s-1,0-1.5,0c-.5,0-1,0-1.5,0-.7,0-1.5,0-2.2-.4-.6-.3-1.8-.9-3.2-1.6-3.4-1.8-8.1-4.2-10.4-4.8-.9-.2-2-.6-3.4-1.1.1-.3.2-.7.4-.9.9-2,3-3.4,3.7-3.6.7-.2,1.8-.8,2-1.6.1-.4,0-.7-.1-1-.3-.4-.8-.7-1.5-.7,0,0-.1,0-.2,0h0ZM641.9,270.4c0,0,.1,0,.1,0,0,0,0,0,0,0,0,0,0-.1,0-.2-.3-.9-.4-1.8,0-2.3.2-.3.5-.5,1-.6,1.8-.2,4.1-1,4.9-2,.5-.6,1.6-1,2.6-1s0,0,.1,0c.6,0,1,.2,1.2.5.2.2.2.4.1.7-.2.6-1.2,1.1-1.8,1.3-.8.2-3,1.7-3.9,3.8-.1.3-.3.7-.4,1.2,0,.1,0,.2.1.3,1.5.6,2.6.9,3.6,1.2,2.3.6,6.9,3,10.3,4.8,1.4.7,2.6,1.3,3.2,1.6.8.3,1.5.4,2.3.4s1,0,1.5,0c.5,0,1,0,1.5,0,.5,0,1,0,1.5.2.8.3,1.4.9,1.4,1.7,0,.8-.3,1.5-.9,1.8-.3.1-.6.2-1,.2-1.3,0-3.2-.6-4-.8-.1,0-.2,0-.3,0-.3,0-.7-.1-1.1-.2-.7,0-1.6-.1-2.4-.6,0,0-.2,0-.2-.1-1.1-.7-1.9-1.1-5.7-1.9-1.4-.3-2.5-.4-3.5-.6-2-.3-3.5-.5-5.8-1.3-.4-.1-.9-.3-1.5-.4,0,0,0,0,0,0,0,0,0,0-.1,0,0,0,0,0,0,.2v.3c-.1,1.3-.4,3.9-.9,6.3-.8,3.7-1.8,4.7-2.4,4.9-.1,0-.2,0-.4,0-1,0-3.5-.6-9.2-3-3.5-1.5-6.8-3-7.6-3.4l4.2-10s0,0,0,0l.9-6.8c.9.3,4,1.2,7.7,2.5,1.6.6,3.3,1.2,4.9,1.8,0,0,0,0,0,0h0ZM633.2,276c0,0-.1,0-.2,0,0,0,0,0,0,0,0,0,0,.1,0,.2.9,2.2,4.7,4.7,4.8,4.8,0,0,0,0,.1,0s0,0,.1,0c0,0,0-.1,0-.2-.3-.8,0-2,1-3.8,0,0,0-.1,0-.2,0,0,0-.1-.2-.1-3-.4-5.8-.7-5.8-.7,0,0,0,0,0,0h0ZM637.6,280.4c-1-.7-3.3-2.4-4.1-4,.8,0,2.8.3,5.1.6-.8,1.4-1.1,2.5-1,3.4h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M622.3,290.7c-.5-.1-.9-.4-1.4-.8-.4-.3-.8-.6-1.3-.9-.3-.2-.5-.3-.8-.4-.8-.4-1.3-.7-1.7-1.6-.5-1.4-1.5-2-1.5-2,0,0-7-4.7-4-14.4,2.9-9.8,12.2-10.8,12.3-10.8h.2s0-.2,0-.2c0,0,0,0,0,0,0,0,.3,0,1,0s.4,0,.4,0c.7,0,1.2-.3,1.7-.5.5-.3,1.1-.6,2.1-.7,0,0,.1,0,.2,0,.4,0,.5,0,.5.1,0,0,0,.4,0,.6-.1.4-.3.9,0,1.3.2.3.6.4,1,.5.7.2,1.6.4,2.1,2,.7,2.4-1.9,4.3-2,4.4l-.5.3,1.7.4c.9,2.4.4,6.5-1.2,9.5-1.7,3.2-5.1,5.5-5.2,5.5l-.4.3,1.2.4c1.1,2.2-.2,3.1-1.5,3.9-.7.5-1.4.9-1.6,1.6-.4,1.5-1.3,1.5-1.4,1.5Z" fill="#fff"/>
                  <path d="M629.5,258.6c.1,0,.2,0,.3,0,0,.1,0,.3-.1.4-.1.4-.3,1,0,1.5.3.4.7.5,1.2.6.7.2,1.4.3,1.9,1.8.7,2.3-1.8,4.1-1.9,4.1l-.9.7,1.1.2,1,.2c.8,2.4.3,6.3-1.2,9.2-1.7,3.2-5,5.4-5.1,5.4l-.8.5.9.3.6.2c.9,2-.2,2.7-1.4,3.5-.8.5-1.5,1-1.7,1.8-.3,1.2-1,1.3-1.1,1.3-.4-.1-.8-.4-1.2-.8-.4-.3-.8-.6-1.3-.9-.3-.2-.5-.3-.8-.4-.8-.4-1.2-.6-1.5-1.5-.5-1.5-1.6-2.1-1.6-2.1-.3-.2-6.8-4.6-4-14.2,2.9-9.6,11.7-10.5,12.1-10.6h.3s0-.2,0-.2c.1,0,.3,0,.8,0s.2,0,.3,0h.1c.8,0,1.3-.3,1.8-.6.5-.3,1-.6,2-.6,0,0,.1,0,.2,0M629.5,258.1c0,0-.1,0-.2,0-2,.1-2.3,1.2-3.7,1.2s0,0-.1,0c-.1,0-.2,0-.3,0-1.1,0-1.2.3-1.2.3,0,0-9.5.9-12.5,10.9-3,10,4.2,14.7,4.2,14.7,0,0,.9.5,1.4,1.9.5,1.3,1.3,1.5,2.5,2.1s1.7,1.6,2.7,1.8c0,0,0,0,0,0,0,0,1.2,0,1.6-1.7.5-1.7,5-2,3-5.8l-.8-.3s3.5-2.3,5.2-5.6,2.1-7.5,1.1-9.9l-1.2-.3s2.9-2,2.1-4.6c-.8-2.6-2.6-1.8-3.1-2.6-.5-.7,1-2.1-.6-2.1h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M613.7,265.4c.2-.3.5-.6.8-1,1.2-1.3,2.6-2.5,4.2-3.3,2.5-1.3,4.6-1.7,5.1-1.7.2-.2.6-.3,1.7-.3.6,0,1-.2,1.5-.5.5-.3,1.2-.7,2.3-.7.6,0,.9,0,1.1.3.2.3.1.7,0,1.1-.1.3-.2.7,0,.9.1.2.4.3.8.3.8.2,1.8.4,2.4,2.3.3,1.1,0,2.3-.8,3.5h0c-.4.5-.7.9-1,1.1l.8.2c0,0,.1,0,.2.1.5,1.2.7,2.9.5,4.7-.2,1.9-.8,3.8-1.6,5.4-1.4,2.8-4,4.8-5,5.4l.5.2c0,0,0,0,.1.1,1.3,2.7-.3,3.7-1.6,4.6-.6.4-1.3.8-1.4,1.4-.5,1.9-1.8,1.9-1.9,1.9,0,0,0,0,0,0-.6-.1-1.1-.5-1.6-.9-.4-.3-.7-.6-1.2-.9-.3-.1-.5-.3-.7-.4-.8-.4-1.5-.7-1.9-1.9-.4-1.3-1.3-1.7-1.3-1.8,0,0,0,0,0,0,0,0-1.9-1.2-3.3-3.7-.8-1.4-1.4-3-1.6-4.7-.3-2.1,0-4.3.6-6.6.6-1.9,1.4-3.6,2.5-5.1ZM624.1,259.7s0,0-.1,0c0,0-2.4.2-5.1,1.7-1.6.8-2.9,1.9-4.1,3.2-1.4,1.6-2.5,3.6-3.2,5.9-.7,2.3-.9,4.4-.6,6.4.2,1.6.7,3.1,1.5,4.5,1.3,2.3,3.1,3.5,3.2,3.5.1,0,1,.6,1.5,2,.3,1,.9,1.2,1.7,1.6.2.1.5.2.7.4.5.3.9.6,1.3.9.5.4.9.7,1.4.8.1,0,1-.1,1.4-1.6.2-.7.9-1.1,1.6-1.6,1.3-.9,2.6-1.7,1.5-4l-.8-.3c0,0-.1,0-.1-.2,0,0,0-.2,0-.2,0,0,3.5-2.3,5.2-5.5,1.6-3,2.1-7.1,1.2-9.6l-1.1-.2c0,0-.1,0-.2-.2,0,0,0-.2,0-.2,0,0,2.7-1.9,2-4.4-.5-1.6-1.4-1.8-2.1-2-.4,0-.8-.2-1-.5-.3-.4-.1-.8,0-1.3,0-.3.2-.6,0-.7,0,0-.2-.2-.8-.1-1,0-1.6.4-2.1.7-.5.3-1,.6-1.7.5-1.1,0-1.3.1-1.4.1,0,0,0,0,0,0ZM624.1,259.6h0s0,0,0,0ZM624.1,259.6h0s0,0,0,0Z" fill="#fff"/>
                  <path d="M629.5,257.9c0,0-.2,0-.2,0-1.1,0-1.7.4-2.3.7-.5.3-.8.5-1.4.5s0,0,0,0c-.1,0-.2,0-.4,0-.8,0-1.2.1-1.3.3-.5,0-2.6.4-5.1,1.7-1.6.9-3,2-4.2,3.3-.3.3-.5.6-.8,1-1.1,1.5-1.9,3.2-2.5,5.1-.7,2.3-.9,4.5-.6,6.6.2,1.7.8,3.2,1.6,4.7,1.4,2.4,3.2,3.6,3.3,3.7,0,0,0,0,0,0,0,0,.9.5,1.3,1.8.4,1.1,1.1,1.5,1.9,1.9.2.1.5.2.7.4.5.3.8.6,1.2.9.5.4,1,.8,1.6.9,0,0,0,0,0,0,0,0,0,0,0,0,.1,0,1.3,0,1.8-1.9.2-.5.8-.9,1.4-1.4,1.3-.9,2.9-2,1.6-4.6,0,0,0,0-.1-.1l-.5-.2c.9-.7,3.5-2.7,5-5.4.8-1.6,1.4-3.5,1.6-5.4.2-1.8,0-3.5-.5-4.7,0,0,0-.1-.2-.1l-.8-.2c.3-.2.7-.6,1-1.1h0c.8-1.1,1.1-2.3.8-3.5-.6-1.9-1.6-2.1-2.4-2.3-.3,0-.6-.1-.8-.3-.1-.2,0-.6,0-.9.1-.4.2-.8,0-1.1-.2-.2-.4-.3-.9-.3h0ZM625.6,259.5c.7,0,1.2-.3,1.6-.5.5-.3,1.1-.6,2.1-.7,0,0,.2,0,.2,0,.4,0,.5,0,.5.1,0,.1,0,.4,0,.7-.1.4-.3.9,0,1.3.2.3.6.4,1,.5.8.2,1.6.4,2.1,2,.7,2.5-1.9,4.4-2,4.4,0,0-.1.1,0,.2,0,0,0,.1.2.2l1.1.2c.9,2.5.4,6.6-1.2,9.6-1.7,3.2-5.1,5.5-5.2,5.5,0,0-.1.1,0,.2,0,0,0,.1.1.2l.8.3c1.1,2.3-.2,3.2-1.5,4-.7.5-1.4.9-1.6,1.6-.4,1.5-1.3,1.5-1.4,1.6-.5-.1-.9-.4-1.4-.8-.4-.3-.7-.6-1.3-.9-.3-.2-.5-.3-.7-.4-.8-.4-1.3-.7-1.7-1.6-.5-1.4-1.4-1.9-1.5-2,0,0-1.8-1.2-3.2-3.5-.8-1.4-1.3-2.9-1.5-4.5-.3-2,0-4.2.6-6.4.7-2.3,1.7-4.2,3.2-5.9,1.1-1.3,2.5-2.4,4.1-3.2,2.7-1.4,5-1.7,5.1-1.7,0,0,.1,0,.1,0,0,0,0,0,0,0,0,0,.2-.2,1-.2s.2,0,.3,0c0,0,0,0,.1,0h0ZM624.1,259.6h0s0,0,0,0h0ZM624.1,259.6h0s0,0,0,0h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M625.9,278.9c-.4-.9-1.9-4.9,2.3-8.2.3.5,1,1.9.8,3.3v.2s.1,0,.1,0c0,0,.6.4.5,1.1-.1.7-.8.7-.9.7h-.2v.2c-.2.2-1,2-2.7,2.6Z" fill="#fff"/>
                  <path d="M628.2,271.1c.3.6.8,1.7.6,2.9v.3s.2.2.2.2c0,0,.5.3.4.9,0,.4-.6.5-.6.5h-.3s-.1.3-.1.3c0,0-.8,1.7-2.3,2.4-.5-1.1-1.4-4.5,2.1-7.5M628.3,270.4c-5.3,3.9-2.5,8.8-2.5,8.8,2.1-.6,3-2.8,3-2.8h0s1,0,1.1-.9c.2-.9-.6-1.4-.6-1.4.3-1.9-1-3.7-1-3.7h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M626.3,272.1c.5-.7,1.1-1.3,2-1.9,0,0,.1,0,.2,0,0,0,.1,0,.1,0,0,0,1.3,1.8,1,3.7.2.2.8.7.6,1.5-.1.8-.8,1-1.2,1.1-.2.5-1.2,2.3-3.1,2.8,0,0-.2,0-.2,0,0,0-.7-1.3-.7-3.1,0-1.1.2-2.6,1.4-4.1ZM628.3,270.7c-2,1.5-3,3.4-3,5.6,0,1.3.4,2.4.6,2.7,1.8-.6,2.7-2.6,2.7-2.7,0,0,.1-.1.2-.1,0,0,.8,0,.9-.7.1-.7-.5-1.2-.5-1.2,0,0-.1-.1,0-.2.2-1.5-.5-2.9-.8-3.4Z" fill="#fff"/>
                  <path d="M628.3,270.2s0,0-.1,0c-.8.6-1.5,1.3-2,1.9-1.1,1.5-1.4,3-1.4,4.1,0,1.8.7,3,.7,3.1,0,0,.1.1.2.1s0,0,0,0c1.9-.6,2.9-2.3,3.1-2.8.4,0,1.1-.3,1.2-1.1.1-.8-.4-1.3-.6-1.5.2-1.9-1-3.7-1-3.7,0,0,0,0-.1,0,0,0,0,0,0,0h0ZM625.9,279c-.2-.4-.6-1.4-.6-2.7,0-2.1,1-4,3-5.6.3.5,1.1,1.9.8,3.4,0,0,0,.2,0,.2,0,0,.7.4.5,1.2-.1.7-.9.7-.9.7h0c0,0-.2,0-.2.1,0,0-.9,2-2.7,2.7h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <path d="M620.1,285.5s0,0,0,0c0,0,1-1.2,2.6-1.5.2,0,.5,0,.7-.1,1.1-.2,1.6-.3,2.6-.9.1,0,.2,0,.3,0,0,.1,0,.2,0,.3-1.1.6-1.7.7-2.7.9-.2,0-.4,0-.7.1-1.4.3-2.4,1.4-2.4,1.4,0,0-.2.1-.3,0,0,0,0-.2,0-.3Z" fill="#fff"/>
                <path d="M626.1,282.9s0,0-.1,0c-1,.6-1.5.7-2.6.9-.2,0-.4,0-.7.1-1.6.3-2.6,1.5-2.6,1.5,0,0,0,0,0,0,0,0,0,.2,0,.3,0,0,0,0,.1,0s.1,0,.2,0c0,0,.9-1.1,2.4-1.4.2,0,.5,0,.7-.1,1.1-.2,1.7-.3,2.7-.9.1,0,.1-.2,0-.3,0,0-.1-.1-.2-.1h0Z" fill="#9b978f"/>
              </g>
              <g>
                <path d="M622.3,264.1s0,0,0,0l3.6-2.8c0,0,.2,0,.3,0,0,0,0,.2,0,.3l-3.6,2.8c0,0-.2,0-.3,0,0,0,0-.2,0-.3Z" fill="#fff"/>
                <path d="M626.2,261.2s0,0-.1,0l-3.6,2.8s0,0,0,0c0,0,0,.2,0,.3,0,0,.1,0,.2,0s0,0,.1,0l3.6-2.8c0,0,.1-.2,0-.3,0,0-.1,0-.2,0h0Z" fill="#9b978f"/>
              </g>
              <g>
                <path d="M628.7,266.7s0,0,0,0c0,0,.2-.1.3,0,1.3,1,2.1.6,2.1.6,0,0,.2,0,.3,0,0,0,0,.2,0,.3,0,0-1.1.6-2.6-.6,0,0-.1-.2,0-.3Z" fill="#fff"/>
                <path d="M628.9,266.6c0,0-.1,0-.2,0,0,0,0,0,0,0,0,0,0,.2,0,.3.8.6,1.4.8,1.8.8s.7-.2.7-.2c0,0,.1-.2,0-.3,0,0-.1-.1-.2-.1s0,0-.1,0c0,0-.2.1-.5.1s-.9-.1-1.6-.7c0,0,0,0-.1,0h0Z" fill="#9b978f"/>
              </g>
              <g>
                <path d="M623.8,259.4c0,0,.1-.1.2,0,.1,0,2.6.7,3.3,3.7,0,.1,0,.2-.2.3-.1,0-.2,0-.3-.2-.6-2.7-2.9-3.3-3-3.3-.1,0-.2-.1-.1-.3,0,0,0,0,0,0Z" fill="#fff"/>
                <path d="M623.9,259.3c0,0-.1,0-.2,0,0,0,0,0,0,0,0,.1,0,.2.1.3,0,0,2.3.7,3,3.3,0,0,.1.2.2.2s0,0,0,0c.1,0,.2-.1.2-.3-.7-2.9-3.2-3.6-3.3-3.7,0,0,0,0,0,0h0Z" fill="#9b978f"/>
              </g>
              <g>
                <g>
                  <path d="M641.7,290.8c-.2,0-.6-.1-1-.3-.5-.2-1.2-.5-1.9-.5-.5,0-.8-.2-1.3-.3-.8-.3-1.9-.6-4.3-.8-3.1-.3-6.4-1.1-7.3-1.4l1.2-3.8c1.7.3,3.8,1.1,6.1,2.1,1.2.5,3.6,1.4,5.1,1.4.6,0,1-.1,1.3-.4.7-.7,1.9-.9,2.8-.9s.4,0,.5,0c.1,0,.3,0,.4,0,.4,0,.7,0,1-.1.2,0,.4,0,.5,0s.1,0,.1,0c.1.3-.4.6-.4.6h-.1c0,0,.2,1.3.2,1.3,0,.6-.2.6-.4.6-.2,0-.5,0-.6.5,0,.3-.2.4-.3.6-.1.1-.3.3-.4.6-.2.4-.5.5-.9.7h-.2c0,0,0,.1-.1.1Z" fill="#fff"/>
                  <path d="M627.3,284c1.7.3,3.6,1.1,5.8,2.1,1.3.5,3.6,1.5,5.2,1.5s1.1-.1,1.4-.4c.7-.6,1.8-.8,2.6-.8.2,0,.4,0,.5,0,.1,0,.3,0,.4,0,.4,0,.8,0,1-.1,0,0,.2,0,.2,0,0,0-.1.1-.2.2l-.3.2v.3c0,0,.2,1,.2,1,0,.3,0,.4,0,.4,0,0,0,0-.1,0-.2,0-.6.1-.8.7,0,.2-.1.3-.3.5-.1.1-.3.3-.5.6-.2.3-.4.4-.7.6h-.2c-.2,0-.6,0-.9-.2-.5-.2-1.2-.5-1.9-.5-.4,0-.8-.2-1.3-.3-.8-.3-2-.6-4.3-.8-2.8-.3-5.8-1-7-1.3l1.1-3.3M626.9,283.4l-1.3,4.2s3.9,1.1,7.6,1.5c3.7.3,4.2,1,5.6,1.1,1.2.1,2.3.8,2.9.8s.1,0,.2,0c.5-.2.8-.3,1.2-.9s.6-.6.8-1.2c.1-.6.9.1.9-1.2l-.2-1s.7-.4.5-.9c0-.2-.2-.2-.4-.2-.3,0-.9.2-1.5.2s-.2,0-.3,0c-.2,0-.4,0-.6,0-1,0-2.2.3-3,1-.2.2-.6.3-1.1.3-1.3,0-3.3-.7-5-1.4-2.3-1-4.5-1.9-6.3-2.2h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M626.8,283.3c0,0,.1,0,.2,0,1.8.3,4,1.1,6.4,2.2,3,1.3,5.2,1.7,5.9,1.1.9-.9,2.6-1.1,3.7-1,.5,0,.9,0,1.2,0,.5,0,1-.2,1.1.3.2.5-.2.9-.5,1.1l.2.9s0,0,0,0c0,.9-.4,1.1-.7,1.1-.2,0-.2,0-.2.1,0,.4-.3.6-.4.8-.1.1-.2.3-.4.5-.3.6-.7.7-1.1.9,0,0-.1,0-.2,0-.3.1-.8,0-1.5-.3-.5-.2-1.1-.4-1.8-.5-.5,0-.9-.2-1.4-.3-.8-.3-1.9-.6-4.2-.8-3.6-.3-7.6-1.5-7.6-1.5,0,0-.1,0-.1-.1,0,0,0-.1,0-.2l1.3-4.2s0,0,0,0ZM644.8,286.2c0-.1.1-.2,0-.3,0-.1-.3,0-.7,0-.4,0-.9.1-1.4,0-1.1-.1-2.6.1-3.4.9-1,1-4.4-.2-6.3-1.1-2.3-1-4.3-1.8-6.1-2.1l-1.2,3.8c.9.2,4.2,1.1,7.3,1.4,2.3.2,3.5.6,4.3.8.5.2.8.3,1.3.3.7,0,1.3.3,1.9.5.5.2.9.4,1.1.3,0,0,.1,0,.2,0,.4-.2.6-.3.9-.7.1-.3.3-.4.4-.5.2-.2.3-.3.3-.6,0-.4.4-.4.5-.5.2,0,.4,0,.4-.7l-.2-1c0,0,0-.2.1-.2,0,0,.2-.1.4-.3Z" fill="#fff"/>
                  <path d="M626.9,283.2c0,0-.1,0-.2,0,0,0,0,0,0,0l-1.3,4.2c0,0,0,.1,0,.2,0,0,0,0,.1.1,0,0,4,1.1,7.6,1.5,2.3.2,3.3.5,4.2.8.5.2.9.3,1.4.3.6,0,1.2.3,1.8.5.5.2.9.3,1.2.3s.2,0,.3,0c0,0,.1,0,.2,0,.4-.2.8-.3,1.1-.9.1-.2.2-.3.4-.5.2-.2.4-.4.4-.8,0,0,0-.1.2-.1.4,0,.7-.2.7-1.1,0,0,0,0,0,0l-.2-.9c.3-.2.7-.6.5-1.1,0-.3-.3-.4-.6-.4s-.4,0-.6,0c-.3,0-.6.1-.9.1s-.2,0-.3,0c-.2,0-.4,0-.6,0-1.1,0-2.3.3-3.1,1-.2.2-.5.3-.9.3-1.1,0-2.8-.5-4.9-1.4-2.4-1-4.5-1.9-6.4-2.2,0,0,0,0,0,0h0ZM641.7,290.9c-.2,0-.6-.1-1-.3-.5-.2-1.2-.4-1.9-.5-.5,0-.8-.2-1.3-.3-.8-.3-1.9-.6-4.3-.8-3.1-.3-6.5-1.2-7.3-1.4l1.2-3.8c1.8.3,3.8,1.1,6.1,2.1,1.4.6,3.6,1.4,5.1,1.4s1-.1,1.2-.4c.7-.6,1.8-.9,2.8-.9.2,0,.4,0,.5,0,.1,0,.3,0,.4,0,.4,0,.7,0,1-.1.2,0,.4,0,.5,0s.2,0,.2,0c0,.1,0,.2,0,.3-.1.2-.3.3-.4.3,0,0-.1.1-.1.2l.2,1c0,.6-.2.7-.4.7-.2,0-.4,0-.5.5,0,.3-.2.4-.3.6-.1.1-.3.3-.4.5-.2.4-.5.5-.9.7,0,0-.1,0-.2,0,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <path d="M642.6,287c0,0,.1,0,.2,0,.5,0,1.4,0,1.7-.3,0,0,.2,0,.3,0,0,0,0,.2,0,.3-.5.5-1.8.4-2,.4-.1,0-.2-.1-.2-.2,0,0,0,0,0-.1Z" fill="#fff"/>
                <path d="M644.6,286.5c0,0-.1,0-.1,0-.3.2-1,.3-1.5.3s0,0-.1,0c0,0,0,0,0,0,0,0-.1,0-.2,0,0,0,0,0,0,.1,0,.1,0,.2.2.2,0,0,0,0,.1,0,.4,0,1.4,0,1.8-.4,0,0,0-.2,0-.3,0,0,0,0-.2,0h0Z" fill="#9b978f"/>
              </g>
              <g>
                <g>
                  <path d="M647.1,272.1c-.7,0-2.2-1.5-2.7-2.3-.4-.7-2.1-.9-3.9-1.1-.7,0-1.5-.2-2.1-.3-1.7-.3-5.1-.9-6.5-1.1.7-.6,2-2,1.9-3.7.8.2,3,.8,5.2,1.7,3,1.4,5,2.2,6.6,2.4.6,0,1.1.1,1.5.2.6,0,1.3.1,1.4.3.1.3-.1.5-.1.5h-.1c0,.1,0,.3,0,.3,0,0,.1.4-.2.8h-.1c0,.1,0,.3,0,.3,0,0,.3.6-.3,1h-.1c0,0,0,.2,0,.2,0,.1,0,.5-.1.7,0,0-.1.1-.3.1h0Z" fill="#fff"/>
                  <path d="M633.9,263.8c1,.2,2.9.8,4.8,1.6,3.1,1.4,5,2.2,6.7,2.4.6,0,1.1.1,1.5.2.5,0,1,0,1.2.2,0,0,0,.1,0,.1l-.3.2v.3c.1,0,.2.3,0,.6l-.2.3.2.3c0,.1.1.4-.3.7l-.2.2v.3c0,.2,0,.4,0,.5,0,0,0,0,0,0s0,0,0,0c-.6,0-2-1.3-2.5-2.2-.5-.8-1.9-1-4.1-1.2-.7,0-1.5-.2-2.1-.3-1.5-.3-4.4-.8-6-1,.7-.7,1.6-1.9,1.6-3.3M633.4,263.2c.5,2.3-2.1,4.2-2.1,4.2,0,0,4.9.8,7,1.2,2.1.4,5.4.5,5.9,1.3s2.1,2.3,2.9,2.4c0,0,0,0,0,0,.8,0,.7-1.1.7-1.1.8-.6.4-1.4.4-1.4.5-.5.3-1.1.3-1.1,0,0,.4-.3.2-.8-.2-.4-1.4-.4-3.1-.6-1.7-.3-3.8-1.2-6.6-2.4-2.8-1.2-5.6-1.8-5.6-1.8h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M633.2,263.1s0,0,0,0c0,0,.1,0,.2,0,0,0,2.8.6,5.6,1.8,3,1.4,4.9,2.1,6.5,2.4.5,0,1,.1,1.5.2,1,0,1.6.1,1.8.6.2.4,0,.7-.1.9,0,.2,0,.6-.2,1h0c.1.3.1.9-.4,1.4,0,.2,0,.7-.3,1-.1.1-.3.3-.7.2-1,0-2.6-1.7-3.1-2.5-.3-.5-2.1-.7-3.6-.9-.7,0-1.5-.2-2.2-.3-2.1-.4-6.9-1.2-7-1.2,0,0-.2,0-.2-.2,0,0,0-.2,0-.2,0,0,2.5-1.9,2.1-4,0,0,0-.1,0-.2ZM648.4,268.6c0,0,.1-.3,0-.4,0-.2-.7-.3-1.4-.3-.4,0-.9,0-1.5-.2-1.6-.3-3.6-1-6.6-2.4-2.2-1-4.4-1.6-5.2-1.7,0,.9-.2,1.9-1,2.8-.3.4-.7.8-.9,1,1.3.2,4.8.8,6.5,1.1.6.1,1.4.2,2.1.3,1.9.2,3.5.4,3.9,1.1.5.8,2,2.2,2.7,2.3.1,0,.3,0,.3-.1.2-.2.2-.6.2-.7,0,0,0-.1,0-.2.6-.5.4-1,.3-1.1,0,0,0-.2,0-.2.4-.4.2-.9.2-.9,0,0,0-.2,0-.2,0,0,0,0,0,0Z" fill="#fff"/>
                  <path d="M633.4,263c0,0-.1,0-.1,0,0,0,0,0,0,0,0,0,0,.1,0,.2.5,2.1-2,4-2.1,4,0,0-.1.1,0,.2,0,0,0,.1.2.2,0,0,4.9.8,7,1.2.6.1,1.4.2,2.2.3,1.5.2,3.3.4,3.6.9.5.8,2.1,2.4,3.1,2.5,0,0,0,0,0,0,.3,0,.5-.1.6-.2.3-.3.3-.7.3-1,.6-.5.5-1.1.4-1.4h0c.3-.4.3-.8.2-1,.2-.2.3-.5.1-.9-.2-.4-.8-.5-1.8-.6-.4,0-.9,0-1.5-.2-1.6-.2-3.5-1-6.5-2.4-2.8-1.2-5.6-1.8-5.6-1.8,0,0,0,0,0,0h0ZM647.1,272.1s0,0,0,0c-.7,0-2.2-1.5-2.7-2.3-.4-.7-2-.9-3.9-1.1-.7,0-1.5-.2-2.1-.3-1.7-.3-5.3-.9-6.5-1.1.3-.2.6-.6.9-1,.7-.9,1.1-1.9,1-2.8.8.2,3,.7,5.2,1.7,3,1.4,5,2.2,6.6,2.4.6,0,1.1.1,1.5.2.7,0,1.3.1,1.4.3,0,.2,0,.3,0,.4,0,0,0,0,0,0,0,0,0,.1,0,.2,0,0,.2.5-.2.9,0,0,0,.2,0,.2,0,0,.3.6-.3,1.1,0,0,0,.1,0,.2,0,.1,0,.6-.2.7,0,0-.2.1-.3.1h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <path d="M635,265.2c0,0,.1,0,.2,0,.1,0,.2,0,.2.2,0,0,0,1.4-1.1,2.6,0,0-.2,0-.3,0,0,0,0-.2,0-.3.9-1.1.9-2.3,1-2.3,0,0,0,0,0-.1Z" fill="#fff"/>
                <path d="M635.1,265.1c0,0-.1,0-.2,0,0,0,0,0,0,.1,0,0,0,1.3-1,2.3,0,0,0,.2,0,.3,0,0,0,0,.1,0s.1,0,.2,0c1-1.2,1.1-2.6,1.1-2.6,0-.1,0-.2-.2-.2,0,0,0,0,0,0h0Z" fill="#9b978f"/>
              </g>
              <g>
                <path d="M646.7,271.3s0,0,0,0c0,0,.5-.4,1.1-.2.1,0,.2.1.2.3,0,.1-.1.2-.3.2-.4,0-.8.2-.8.2,0,0-.2,0-.3,0,0,0,0-.2,0-.2Z" fill="#fff"/>
                <path d="M647.5,271c-.5,0-.8.3-.8.3,0,0,0,0,0,0,0,0,0,.2,0,.2,0,0,.1,0,.2,0s0,0,.1,0c0,0,.3-.2.6-.2,0,0,.1,0,.2,0,0,0,0,0,0,0,0,0,.2,0,.2-.2,0-.1,0-.2-.2-.3,0,0-.2,0-.3,0h0Z" fill="#9b978f"/>
              </g>
              <g>
                <path d="M645.9,271.7c0,0,.1,0,.2,0,.1,0,.2.1.2.3,0,0-1,4.2-1.2,6.1,0,.1-.1.2-.2.2-.1,0-.2-.1-.2-.2.2-1.9,1.1-5.9,1.2-6.1,0,0,0,0,0,0Z" fill="#fff"/>
                <path d="M646.1,271.6c0,0-.1,0-.2,0,0,0,0,0,0,0,0,.2-1,4.2-1.2,6.1,0,.1,0,.2.2.2,0,0,0,0,0,0,.1,0,.2,0,.2-.2.2-1.8,1.2-6,1.2-6.1,0-.1,0-.2-.2-.3,0,0,0,0,0,0h0Z" fill="#9b978f"/>
              </g>
              <g>
                <path d="M641.7,270.1s0,0,.1,0c.1,0,.2,0,.3.1,0,0,.2.8-.3,2.4-.5,1.6-2.6,4.3-2.7,4.4,0,0-.2.1-.3,0,0,0-.1-.2,0-.3,0,0,2.1-2.7,2.6-4.3.5-1.5.3-2.2.3-2.2,0,0,0-.1,0-.2Z" fill="#fff"/>
                <path d="M641.9,270s0,0,0,0c0,0,0,0-.1,0,0,0,0,.1,0,.2,0,0,.2.7-.3,2.2-.5,1.6-2.6,4.3-2.6,4.3,0,0,0,.2,0,.3,0,0,0,0,.1,0s.1,0,.2,0c0-.1,2.1-2.8,2.7-4.4.5-1.7.3-2.4.3-2.4,0,0-.1-.1-.2-.1h0Z" fill="#9b978f"/>
              </g>
              <g>
                <path d="M637.8,280.7c0,0,.2-.1.3,0,0,0,1.2.8,1.8,1.8,0,.1,0,.2,0,.3-.1,0-.2,0-.3,0-.5-.9-1.6-1.6-1.7-1.6,0,0-.1-.2,0-.3,0,0,0,0,0,0Z" fill="#fff"/>
                <path d="M638,280.6c0,0-.1,0-.2,0,0,0,0,0,0,0,0,0,0,.2,0,.3,0,0,1.2.7,1.7,1.6,0,0,.1.1.2.1s0,0,.1,0c.1,0,.1-.2,0-.3-.6-1-1.7-1.7-1.8-1.8,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
              </g>
              <g>
                <path d="M647.3,274s0,0,.1,0c.1,0,.2,0,.3.1,0,0,.4,1.2-.6,2.5h0c0,.1-.2.1-.3,0,0,0-.1-.2,0-.3,0,0,0,0,0,0,.8-1.1.5-2.1.5-2.1,0,0,0-.1,0-.2Z" fill="#fff"/>
                <path d="M647.5,273.9s0,0,0,0c0,0,0,0-.1,0,0,0,0,.1,0,.2,0,0,.3,1-.5,2.1,0,0,0,0,0,0,0,0,0,.2,0,.3,0,0,0,0,.1,0,0,0,.1,0,.2,0h0c1-1.3.6-2.4.6-2.5,0,0-.1-.1-.2-.1h0Z" fill="#9b978f"/>
              </g>
              <g>
                <path d="M640,269.5c0,0,0,0,.2,0,.1,0,.2,0,.2.2,0,.1,0,3.1-2.7,6.9s0,0-.1.1c0,0-.2.1-.3,0,0,0-.1-.2,0-.3s0,0,0,0c1.5-1.9,2.1-3.7,2.4-4.8.3-1.2.3-2,.3-2,0,0,0,0,0-.1Z" fill="#fff"/>
                <path d="M640.1,269.4s0,0,0,0c0,0-.1,0-.2,0,0,0,0,0,0,.1,0,0,0,.8-.3,2-.3,1.1-1,2.8-2.4,4.8,0,0,0,0,0,0,0,0,0,.2,0,.3,0,0,0,0,.1,0,0,0,.1,0,.2,0,0,0,0,0,.1-.1,2.8-3.7,2.7-6.7,2.7-6.9,0-.1,0-.2-.2-.2h0Z" fill="#9b978f"/>
              </g>
              <g>
                <path d="M633,280.9c.3-.4.7-.8,1.1-1.1,1-.7,1.7-.7,1.8-.7.1,0,.2,0,.2.2,0,.1,0,.2-.2.2,0,0-.7,0-1.5.7-.8.6-1.9,2-2.6,4.8,0,.1-.1.2-.3.2-.1,0-.2-.1-.2-.3.4-1.7,1-3,1.7-3.9Z" fill="#fff"/>
                <path d="M635.8,279c0,0-.8,0-1.8.7-.4.3-.7.7-1.1,1.1-.7,1-1.3,2.3-1.7,3.9,0,.1,0,.2.2.3,0,0,0,0,0,0,0,0,.2,0,.2-.2.7-2.8,1.8-4.2,2.6-4.8.8-.7,1.5-.7,1.5-.7h0c.1,0,.2,0,.2-.2,0-.1,0-.2-.2-.2h0Z" fill="#9b978f"/>
              </g>
              <g>
                <g>
                  <path d="M623.4,280.2c-.6,0-1,0-1.2-.2h0s0,0,0,0c0,0-.6.2-1.5.2s-2.3-.2-3.3-1.3h0s0,0,0,0c-.2,0-5.5-2.3-3-9.1,0-.1,1.2-3.1,6-3.2h.3c4.4,0,6.1,1.2,7.4,3.2,0,0,.7,1.5-.8,3l-.2.2v.2c.2,0,1.8,2.2.6,4.8-1,2.2-3.5,2.4-4.2,2.4Z" fill="#fff"/>
                  <path d="M620.6,266.8h0c4.7,0,6.1,1.5,7.1,3.1,0,.2.5,1.4-.7,2.7l-.3.3.3.3c0,0,1.6,2.1.5,4.5-1,2.1-3.3,2.2-4,2.2s-.9,0-1.1-.1h-.2c0,0-.2,0-.2,0,0,0-.6.2-1.4.2s-2.2-.2-3.1-1.2h0c0,0-.1-.1-.1-.1-.2,0-5.3-2.2-2.9-8.8,0-.1,1.2-3,5.7-3h.3M620.6,266.3c-.1,0-.2,0-.3,0-5,0-6.2,3.4-6.2,3.4-2.6,7.1,3.2,9.4,3.2,9.4,1,1.1,2.4,1.4,3.5,1.4s1.5-.2,1.5-.2c.2,0,.7.2,1.3.2,1.4,0,3.5-.5,4.4-2.5,1.3-2.8-.5-5-.5-5,1.6-1.7.8-3.3.8-3.3-1.3-2-2.9-3.4-7.6-3.4h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M614.4,268.7c.2-.3.4-.5.8-.8.9-.8,2.5-1.7,5.1-1.8,2.4,0,4.1.3,5.5.9,1.3.7,2.1,1.7,2.7,2.5,0,0,0,0,0,0,0,0,.2.5.2,1.1,0,.6-.2,1.4-.9,2.3.2.2.5.7.7,1.4.3.9.5,2.2-.2,3.7-1.3,2.8-4.8,2.8-5.9,2.5-.2,0-.9.2-1.8.2-1.4,0-2.5-.5-3.3-1.4-.3-.1-1.6-.7-2.6-2.1-1.9-2.5-1.4-5.5-.6-7.6,0,0,.2-.4.5-.9ZM628,269.7c-1.3-2.1-3-3.3-7.7-3.2-1.4,0-3.3.3-4.8,1.6-.9.8-1.2,1.6-1.2,1.6-1.1,2.9-.9,5.3.5,7.2,1.1,1.4,2.5,2,2.5,2,0,0,0,0,0,0,1.7,1.9,4.8,1.1,4.8,1.1,0,0,0,0,.1,0,.7.3,4.2.5,5.4-2.2,1.2-2.6-.4-4.7-.5-4.8,0,0,0-.2,0-.3,1.4-1.5.8-2.9.8-3Z" fill="#fff"/>
                  <path d="M620.6,266.1c-.1,0-.2,0-.4,0-2.6,0-4.2,1-5.1,1.8-.3.3-.6.6-.8.8-.4.5-.5.9-.5.9-.8,2.1-1.3,5.1.6,7.6,1,1.4,2.3,2,2.6,2.1.8.9,1.9,1.3,3.3,1.4,0,0,.2,0,.3,0,.7,0,1.3-.1,1.5-.2.3,0,.7.2,1.3.2,1.5,0,3.7-.6,4.7-2.6.7-1.5.5-2.8.2-3.7-.2-.7-.5-1.2-.7-1.4.8-.9.9-1.7.9-2.3,0-.7-.2-1.1-.2-1.1,0,0,0,0,0,0-.6-.9-1.3-1.9-2.7-2.5-1.3-.6-2.9-.9-5.1-.9h0ZM620.7,280.2c-1,0-2.4-.2-3.3-1.3,0,0,0,0,0,0,0,0-1.4-.6-2.5-2-1.4-1.9-1.6-4.3-.5-7.2,0,0,.3-.8,1.2-1.6,1.5-1.3,3.4-1.6,4.8-1.6.1,0,.2,0,.4,0,4.4,0,6.1,1.2,7.4,3.3,0,.1.7,1.5-.8,3,0,0,0,.2,0,.3,0,0,1.7,2.2.5,4.8-.9,1.9-2.9,2.4-4.2,2.4s-1,0-1.2-.2c0,0,0,0,0,0s0,0,0,0c0,0-.6.2-1.5.2h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <path d="M615.9,269.6c0,0,.1,0,.2,0,0,0,2.1.5,4.1,2.2,2.2,1.9,4.5,1.1,4.7,1,1.7-.6,2.4,0,2.5,0,0,0,0,.2,0,.3,0,0-.2,0-.3,0-.3-.4-1.2-.4-2.1,0-.3.1-2.8,1-5.2-1.1-1.9-1.6-3.9-2.1-4-2.1-.1,0-.2-.1-.2-.2,0,0,0,0,0,0Z" fill="#fff"/>
                <path d="M616.1,269.5c0,0-.1,0-.2,0,0,0,0,0,0,0,0,.1,0,.2.2.2,0,0,2,.4,4,2.1,1.3,1.1,2.5,1.3,3.5,1.3s1.5-.2,1.7-.3c.5-.2.9-.3,1.3-.3.4,0,.6,0,.8.3,0,0,0,0,.2,0s.1,0,.1,0c0,0,0-.2,0-.3-.1-.1-.5-.4-1.1-.4s-.8,0-1.4.3c-.1,0-.7.3-1.5.3s-2.1-.2-3.2-1.2c-2-1.7-4.1-2.1-4.1-2.2,0,0,0,0,0,0h0Z" fill="#9b978f"/>
              </g>
              <g>
                <path d="M626.7,274.6s0,0,0,0c.1,0,.2,0,.3.1,0,0,.6,1.7-.1,3.1-.5.9-1.3,1.5-2.5,1.8-.1,0-.2,0-.3-.1,0-.1,0-.2.1-.3,1.1-.3,1.9-.8,2.3-1.6.7-1.3.1-2.8,0-2.8,0,0,0-.1,0-.2Z" fill="#fff"/>
                <path d="M626.9,274.5s0,0,0,0c0,0,0,0,0,0,0,0,0,.1,0,.2,0,0,.6,1.5,0,2.8-.4.8-1.2,1.3-2.3,1.6-.1,0-.2.1-.1.3,0,0,.1.2.2.2s0,0,0,0c1.2-.3,2.1-.9,2.5-1.8.7-1.4.1-3,.1-3.1,0,0-.1-.1-.2-.1h0Z" fill="#9b978f"/>
              </g>
              <g>
                <path d="M622,278.7c0,0,.1,0,.2,0,2.5,0,2.9-1.1,2.9-1.1,0-.1.2-.2.3-.1.1,0,.2.2.1.3,0,0-.5,1.5-3.3,1.4-.1,0-.2-.1-.2-.2,0,0,0,0,0-.1Z" fill="#fff"/>
                <path d="M625.3,277.4c0,0-.2,0-.2.1,0,0-.4,1.1-2.7,1.1s-.2,0-.2,0c0,0,0,0,0,0,0,0-.1,0-.2,0,0,0,0,0,0,.1,0,.1,0,.2.2.2,0,0,.2,0,.3,0,2.6,0,3.1-1.4,3.1-1.4,0-.1,0-.2-.1-.3,0,0,0,0,0,0h0Z" fill="#9b978f"/>
              </g>
              <g>
                <path d="M618.1,267.5s0,0,.1,0c3.6-.9,6.1.2,6.2.3.1,0,.1.2.1.3,0,.1-.2.1-.3.1,0,0-2.5-1.1-5.9-.3-.1,0-.2,0-.3-.2,0,0,0-.1,0-.2Z" fill="#fff"/>
                <path d="M621,267.1c-.8,0-1.7,0-2.7.3,0,0,0,0-.1,0,0,0,0,.1,0,.2,0,0,.1.2.2.2s0,0,0,0c1-.2,1.8-.3,2.6-.3,2,0,3.3.6,3.3.6,0,0,0,0,0,0,0,0,.2,0,.2-.1,0-.1,0-.2-.1-.3,0,0-1.4-.6-3.4-.6h0Z" fill="#9b978f"/>
              </g>
            </g>
            <g id="boy">
              <g>
                <g>
                  <path d="M595.1,339.3c-1.8-1.3-3.6-2.9-3.7-3.3,0-.2,0-.2,0-.3h.1s1,.3,1,.3l-.7-.7c-.3-.3-.6-.8-.5-1.1,0,0,0,0,0,0,.1,0,.3.1.3.2l.3-.4c-.4-.5-.8-1.1-.7-1.3,0,0,0-.1.2-.1.2,0,.4.1.4.2l.5.6v-.7c0,0,0-.2,0-.3,0,0,.1,0,.2,0s0,0,.1,0c.6,0,2.1,1.7,2.8,2.7.2.3.4.5.7.5s.4-.3.6-.8c0-.1.1-.3.2-.5.2-.5.5-.7.7-.7s0,0,.1.1c0,.1.1.3.1.6,0,1.1,0,2.7,0,3.2l-3.1,2.1Z" fill="#fff"/>
                  <path d="M592.8,332.4s0,0,0,0c.5,0,2,1.6,2.7,2.6.2.3.5.6.9.6s.7-.5.9-1c0-.1.1-.3.2-.5.1-.3.3-.5.4-.5,0,0,0,.2,0,.4,0,1,0,2.5,0,3.1l-2.9,1.9c-1.4-1.1-3-2.4-3.3-2.9l2.5,1.3-2.2-2.3c-.2-.2-.4-.5-.4-.7l.7-.7c-.3-.3-.6-.8-.6-1,0,0,.1,0,.2,0l.9,1.1v-1.4c0,0,0-.1,0-.2,0,0,0,0,0,0M592.8,331.9c-.6,0-.6.7-.6.7,0-.1-.4-.3-.6-.3s-.3,0-.4.3c-.2.5.7,1.6.7,1.6,0,0-.3-.2-.5-.2s-.2,0-.3.2c-.2.5.6,1.3.6,1.3,0,0,0,0-.1,0-.2,0-.4,0-.4.5,0,.7,3.9,3.6,3.9,3.6l3.4-2.2s0-2,0-3.4c0-.7-.2-.9-.5-.9-.3,0-.7.3-.9.9-.3.7-.4,1.2-.6,1.2s-.2-.1-.5-.4c-.6-.9-2.2-2.6-3-2.8,0,0-.1,0-.2,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M591.6,335.4s0,0,0,0h0,0s0,0,0,0c0,0,0,0,0,0ZM591.9,334c0,0-.2-.1-.3-.2h.1s0,0,0,0c0,0,.1.2.2.2ZM592.2,332.5s0,0,0,0h0s0,0,0,0Z" fill="#fff"/>
                  <path d="M592.8,331.6c-.3,0-.4,0-.5.2-.1,0-.2.2-.2.3-.1,0-.3-.1-.5-.1s0,0,0,0c-.2,0-.4.2-.5.4-.2.4,0,.9.3,1.3,0,0,0,0,0,0-.1,0-.3.1-.4.4-.2.4.1.9.4,1.3,0,0,0,0,0,0-.2.1-.3.4-.3.7,0,.2,0,.5,2,2.2,1,.8,2,1.5,2,1.5,0,0,0,0,.1,0s0,0,.1,0l3.4-2.2c0,0,.1-.1.1-.2,0,0,0-2,0-3.4,0,0,0,0,0-.1,0-.8-.4-1-.6-1,0,0,0,0-.1,0-.4,0-.8.4-1.1,1,0,.2-.1.4-.2.5,0,.2-.1.4-.2.5,0,0-.1-.1-.3-.3-.5-.8-2.3-2.7-3.2-2.9,0,0-.1,0-.2,0h0ZM592.3,332.8s0,0,0,0c0,0,.1-.1.1-.2,0,0,0-.3.1-.4,0,0,.1,0,.2,0s0,0,.1,0c.6,0,2.2,1.7,2.9,2.7.2.3.4.5.6.5s0,0,0,0c.3,0,.4-.3.6-.8,0-.1.1-.3.2-.5.2-.5.5-.7.7-.7s0,0,0,0c.1,0,.2.2.2.7,0,1.1,0,2.8,0,3.2l-3.1,2.1c-.3-.2-1-.8-1.8-1.4-1.8-1.5-1.9-1.9-1.9-1.9,0-.2,0-.3,0-.3,0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0,0,0,.1,0,.2-.1,0,0,0-.2,0-.3-.2-.2-.7-.8-.5-1.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.3,0,.3.2,0,0,0,0,.1,0s.1,0,.2,0c0,0,0-.2,0-.3-.4-.5-.8-1.1-.7-1.3,0,0,.1-.1.1-.1,0,0,0,0,0,0,.2,0,.4.1.5.2,0,0,.1,0,.2,0h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <path d="M593.6,336.9c0,0,0,.1,0,.2,0,0-.2.1-.3,0l-1.6-1.4c0,0-.1-.2,0-.3,0,0,.2-.1.3,0l1.6,1.4s0,.1,0,.2Z" fill="#fff"/>
                <path d="M591.7,335.2c0,0-.1,0-.2,0,0,0,0,.2,0,.3l1.6,1.4s0,0,.1,0,.1,0,.2,0c0,0,0-.1,0-.2,0,0,0-.1,0-.2l-1.6-1.4s0,0-.1,0h0Z" fill="#9b978f"/>
              </g>
              <g>
                <path d="M594.2,336c0,0,0,.1,0,.2,0,0-.2,0-.3,0l-2-2c0,0,0-.2,0-.3,0,0,.2,0,.3,0l2,2s0,0,0,.2Z" fill="#fff"/>
                <path d="M591.9,333.8c0,0-.1,0-.2,0,0,0,0,.2,0,.3l2,2s.1,0,.2,0,.1,0,.2,0c0,0,0-.1,0-.2,0,0,0-.1,0-.2l-2-2s-.1,0-.2,0h0Z" fill="#9b978f"/>
              </g>
              <g>
                <path d="M592.5,332.9c-.2-.2-.2-.3-.2-.4,0,0,0,.2.2.4Z" fill="#fff"/>
                <path d="M592.3,332.3c-.1,0-.2,0-.2.2,0,.2,0,.5,1.2,1.7.6.6,1.2,1.2,1.2,1.2,0,0,0,0,.2,0s.1,0,.2,0c0,0,0-.1,0-.2,0,0,0-.1,0-.2-1.1-1-2.2-2.2-2.3-2.5,0-.1,0-.2-.2-.2,0,0,0,0,0,0h0Z" fill="#9b978f"/>
              </g>
              <g>
                <g>
                  <path d="M637.7,357.9c-.4-.2-1.8-.9-2.1-1.8-.1-.3,0-.7,0-1,.9-1.7,4.4-4.9,6-4.9s.2,0,.3,0c.1,0,.2.1.3.2.5,1.1-.5,4.5-1,5.9l-3.5,1.7Z" fill="#fff"/>
                  <path d="M641.7,350.4h0c0,0,.1,0,.2,0,0,0,0,0,.1.1.4.9-.4,3.8-1,5.6l-3.3,1.6c-.6-.3-1.6-.9-1.9-1.6,0-.3,0-.5,0-.8.9-1.7,4.3-4.8,5.8-4.8M641.7,349.9c-1.8,0-5.3,3.3-6.2,5.1-1,1.9,2.3,3.2,2.3,3.2l3.6-1.8s2.2-6,.6-6.5c-.1,0-.2,0-.3,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M642.8,351c0,1.9-1.2,5.3-1.2,5.5,0,0,0,0-.1.1l-3.6,1.8c0,0-.1,0-.2,0,0,0-2-.9-2.5-2.2-.2-.5-.1-.9.1-1.4.5-1,1.8-2.4,3.1-3.5.9-.8,2.6-2,3.7-1.7.2,0,.4.2.5.5.1.2.2.5.2.9ZM641.2,356.3c.5-1.4,1.6-4.8,1-5.9,0-.1-.2-.2-.3-.3-.6-.2-1.8.4-3.3,1.6-1.3,1.1-2.5,2.4-3,3.3-.2.3-.2.7,0,1,.3,1,1.8,1.7,2.1,1.9l3.5-1.7Z" fill="#fff"/>
                  <path d="M641.7,349.6c-1.1,0-2.5,1-3.3,1.7-1.3,1.1-2.6,2.5-3.1,3.5-.2.5-.3.9-.1,1.4.5,1.3,2.4,2.1,2.5,2.2,0,0,0,0,0,0s0,0,0,0l3.6-1.8c0,0,0,0,.1-.1,0-.2,1.3-3.5,1.2-5.5,0-.3,0-.6-.2-.9-.1-.3-.3-.4-.5-.5-.1,0-.3,0-.4,0h0ZM637.7,357.9c-.4-.2-1.8-.9-2.1-1.9-.1-.3,0-.7,0-1,.5-.9,1.7-2.3,3-3.3,1.2-1,2.3-1.6,3-1.6s.2,0,.3,0c.1,0,.2.1.3.3.5,1.1-.5,4.5-1,5.9l-3.5,1.7h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M650.1,370c-2.1,0-6.1-1.7-6.1-2.7,0-1.1.3-3.1.4-3.6.5-.2,2.2-.9,3.1-1.5.2.7.8,2.1,1.7,3.1,1,1,2.2,3.2,2,4.1,0,.2-.2.4-.5.4-.2,0-.3,0-.6,0Z" fill="#fff"/>
                  <path d="M647.3,362.6c.3.7.8,2,1.7,2.9,1,1.1,2.1,3.1,1.9,3.9,0,.1,0,.2-.3.3-.1,0-.3,0-.5,0-2.2,0-5.8-1.8-5.8-2.4,0-1,.2-2.7.3-3.4.6-.2,1.9-.8,2.7-1.3M647.6,361.8c-.7.7-3.4,1.7-3.4,1.7,0,0-.5,2.4-.4,3.8,0,1.2,4.3,2.9,6.3,2.9s.5,0,.6,0c1.7-.5-.2-3.7-1.4-5s-1.8-3.3-1.8-3.3h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M651.7,369.1c0,.2,0,.4,0,.5-.1.4-.4.7-.8.8-1.4.4-4.8-.7-6.4-1.8-.6-.4-.9-.8-.9-1.2,0-1.3.4-3.7.4-3.8,0,0,0-.1.1-.2,0,0,2.7-1,3.3-1.7,0,0,.1,0,.2,0,0,0,.1,0,.2.2,0,0,.6,2,1.7,3.2.8.8,2.1,2.8,2.1,4.1ZM644,367.3c0,.2.3.5.7.8,1.6,1.1,4.8,2.1,6,1.8.3,0,.4-.2.5-.5.3-1-1-3.1-2-4.2-1-1-1.5-2.5-1.7-3.1-.9.6-2.6,1.3-3.1,1.5,0,.5-.4,2.5-.4,3.6Z" fill="#fff"/>
                  <path d="M647.6,361.6c0,0-.1,0-.2,0-.7.7-3.3,1.7-3.3,1.7,0,0-.1,0-.1.2,0,.1-.5,2.5-.4,3.8,0,.4.3.8.9,1.2,1.3,1,4.1,1.9,5.7,1.9s.5,0,.7,0c.4-.1.7-.4.8-.8,0-.2,0-.3,0-.5,0-1.3-1.4-3.3-2.1-4.1-1.2-1.2-1.7-3.2-1.7-3.2,0,0,0-.1-.2-.2,0,0,0,0,0,0h0ZM650.1,370c-1.4,0-4.1-.9-5.4-1.8-.4-.3-.7-.6-.7-.8,0-1.1.3-3.1.4-3.6.5-.2,2.2-.9,3.1-1.5.2.6.8,2.1,1.7,3.1,1,1,2.2,3.2,2,4.2,0,.2-.2.4-.5.5-.2,0-.4,0-.6,0h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M641.7,375.9c-6.2,0-17.6-5.3-19-6l-.5-15.8c.8-1,9.6-11.7,16.8-11.7s1.2,0,1.8.2c7.5,2.1,7,17.3,6.9,18.7-1,.8-3.1,1.8-3.1,1.8h-.2c0,.1.1.3.1.3,0,0,4.2,8.2.2,11.7-.6.5-1.6.8-3,.8h0ZM639.8,351.6c-8.3,5.3-9.1,7.9-9.2,10,0,2.1,7.6,4.9,8.4,5.2l.6.2-.3-.5c-1.5-3.1-1.8-7-1.8-7.7,1.3-1.7,3.9-2.1,3.9-2.1h.3s-1.6-5.3-1.6-5.3l-.3.2Z" fill="#fff"/>
                  <path d="M639.1,342.7c.6,0,1.2,0,1.7.2,7.1,2,6.8,16.4,6.8,18.3-1,.8-3,1.7-3,1.7l-.5.2.2.5c0,0,4.1,8.1.2,11.4-.6.5-1.5.7-2.9.7-5.9,0-16.9-5-18.7-5.9l-.5-15.6c1.1-1.3,9.6-11.5,16.6-11.5M640.1,367.4l-.5-1.1c-1.4-2.9-1.7-6.6-1.8-7.5,1.3-1.6,3.6-1.9,3.7-1.9h.6c0,0-.2-.6-.2-.6l-1.4-4.6-.2-.6-.6.4c-8.4,5.4-9.2,8-9.3,10.2,0,2.2,6.6,4.7,8.6,5.5l1.1.4M639.1,342.2c-7.8,0-17.1,11.8-17.1,11.8l.5,16.1s12.5,6.1,19.2,6.1,2.5-.3,3.2-.9c4.2-3.6,0-12,0-12,0,0,2.3-1.1,3.3-1.9,0,0,1-16.8-7.1-19-.6-.2-1.2-.2-1.9-.2h0ZM639.1,366.6s-8.4-2.9-8.3-5c0-2,.8-4.5,9.1-9.8l1.4,4.6s-2.7.4-4.1,2.3c0,0,.2,4.4,1.9,7.9h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M648.2,357.8c0,2.1,0,3.6,0,3.6,0,0,0,.1,0,.2-.8.7-2.5,1.6-3.1,1.9.3.6,1.1,2.4,1.6,4.5.2.8.3,1.6.3,2.3,0,2.3-.6,4.1-1.9,5.2-1.8,1.5-6.2,1.1-13-1.2-5-1.7-9.6-3.9-9.6-4,0,0-.1-.1-.1-.2l-.5-16.1c0,0,0-.1,0-.1,0,0,2.8-3.5,6.5-6.7,2.2-1.9,4.3-3.2,6.2-4.1,2.4-1.1,4.6-1.4,6.5-.9,1.9.5,3.5,1.9,4.7,4,.9,1.7,1.6,3.9,2.1,6.5.3,1.8.5,3.6.5,5.1ZM647.8,361.3c0-.6.2-4.5-.5-8.5-.4-2.6-1.1-4.7-2-6.4-1.1-2-2.6-3.3-4.4-3.8-1.8-.5-3.9-.2-6.2.9-1.9.9-3.9,2.2-6.1,4.1-3.4,2.9-6,6.1-6.4,6.5l.5,15.9c.8.4,4.9,2.3,9.5,3.9,6.6,2.3,10.9,2.7,12.6,1.3,4.1-3.4-.1-11.6-.2-11.7,0,0,0-.1,0-.2,0,0,0-.1.1-.1,0,0,2.2-1,3.1-1.8ZM641.6,356.4s0,0,0,.1c0,0,0,0-.2.1,0,0-2.6.4-3.9,2.1,0,.6.4,4.6,1.8,7.7,0,0,0,.2,0,.2,0,0-.2,0-.2,0,0,0-2.1-.8-4.2-1.7-2.9-1.4-4.3-2.5-4.2-3.5,0-1,.3-2.2,1.5-3.8,1.4-1.8,3.9-3.8,7.7-6.2,0,0,.1,0,.2,0,0,0,.1,0,.1.1l1.4,4.6s0,0,0,0ZM637,358.7c0,0,0-.1,0-.1,1.2-1.6,3.3-2.2,4-2.3l-1.3-4.1c-3.6,2.3-6,4.2-7.3,5.9-1.2,1.5-1.4,2.6-1.4,3.6,0,.4.5,1.4,4,3,1.4.7,2.9,1.3,3.6,1.5-1.4-3.4-1.7-7.4-1.7-7.4h0Z" fill="#fff"/>
                  <path d="M639.1,341.9c-1.4,0-3,.4-4.6,1.1-1.9.9-4,2.3-6.2,4.1-3.7,3.2-6.4,6.6-6.5,6.7,0,0,0,0,0,.1l.5,16.1c0,0,0,.2.1.2,0,0,4.6,2.2,9.6,4,4.1,1.4,7.4,2.1,9.7,2.1s2.6-.3,3.3-.9c1.4-1.2,2-3,1.9-5.2,0-.7-.1-1.5-.3-2.3-.5-2.1-1.3-3.9-1.6-4.5.6-.3,2.3-1.1,3.1-1.9,0,0,0,0,0-.2,0,0,0-1.5,0-3.6,0-1.5-.2-3.3-.5-5.1-.4-2.6-1.2-4.8-2.1-6.5-1.2-2.1-2.8-3.5-4.7-4-.6-.2-1.2-.3-1.9-.3h0ZM641.7,376c-2.3,0-5.5-.7-9.5-2.1-4.5-1.6-8.7-3.5-9.5-3.9l-.5-15.9c.4-.5,3-3.7,6.4-6.5,2.1-1.8,4.2-3.2,6.1-4.1,1.6-.7,3.1-1.1,4.4-1.1s1.2,0,1.8.2c1.8.5,3.3,1.8,4.4,3.8.9,1.6,1.6,3.8,2,6.4.7,4,.6,7.9.5,8.5-1,.8-3.1,1.8-3.1,1.8,0,0,0,0-.1.1,0,0,0,.1,0,.2,0,0,4.2,8.3.2,11.7-.6.5-1.7.8-3,.8h0ZM639.9,351.6s0,0-.1,0c-3.8,2.4-6.3,4.4-7.7,6.2-1.3,1.6-1.5,2.8-1.5,3.8,0,1,1.3,2.1,4.2,3.5,2.1,1,4.2,1.7,4.2,1.7,0,0,0,0,0,0,0,0,.1,0,.2,0,0,0,0-.2,0-.2-1.5-3.1-1.8-7.1-1.8-7.7,1.3-1.7,3.9-2.1,3.9-2.1,0,0,.1,0,.2-.1,0,0,0,0,0-.1,0,0,0,0,0,0l-1.4-4.6c0,0,0-.1-.1-.1,0,0,0,0,0,0h0ZM638.7,366.2c-.7-.3-2.2-.8-3.6-1.5-3.5-1.7-4-2.6-4-3,0-1,.2-2.1,1.4-3.6,1.3-1.7,3.7-3.6,7.3-5.9l1.3,4.1c-.7.2-2.8.7-4,2.3,0,0,0,0,0,.1h0s.2,4.1,1.7,7.4h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <path d="M632.2,365.1c0,0,0,.2-.1.2-.1,0-.2,0-.3,0,0,0-1.2-1.9-1.2-3.6,0-.1.1-.2.2-.2.1,0,.2.1.2.2,0,1.5,1.1,3.3,1.1,3.3,0,0,0,0,0,.1Z" fill="#fff"/>
                <path d="M630.8,361.5c-.1,0-.2,0-.2.2,0,1.7,1.1,3.5,1.2,3.6,0,0,.1.1.2.1s0,0,.1,0c0,0,.1-.1.1-.2,0,0,0,0,0-.1,0,0-1.2-1.8-1.1-3.3,0-.1,0-.2-.2-.2,0,0,0,0,0,0h0Z" fill="#9b978f"/>
              </g>
              <g>
                <path d="M641.8,367.4s0,0,0,0c0,.1-.1.2-.3.2-1.4-.3-2.5-.8-2.6-.9-.1,0-.2-.2,0-.3,0-.1.2-.2.3,0,0,0,1.1.5,2.4.8.1,0,.2.1.2.2Z" fill="#fff"/>
                <path d="M639.1,366.3c0,0-.2,0-.2.1,0,.1,0,.2,0,.3,0,0,1.1.6,2.6.9,0,0,0,0,0,0,.1,0,.2,0,.2-.2,0,0,0,0,0,0,0-.1,0-.2-.2-.2-1.4-.3-2.4-.8-2.4-.8,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
              </g>
              <g>
                <path d="M641.5,350.6c0,0,0,.2-.1.2-1.1.4-1.2,1-1.2,1,0,.1-.1.2-.3.2-.1,0-.2-.1-.2-.3,0,0,.2-.9,1.5-1.3.1,0,.2,0,.3.1,0,0,0,0,0,0Z" fill="#fff"/>
                <path d="M641.3,350.4s0,0,0,0c-1.3.5-1.5,1.3-1.5,1.3,0,.1,0,.2.2.3,0,0,0,0,0,0,.1,0,.2,0,.2-.2,0,0,.2-.6,1.2-1,0,0,.2-.1.1-.2,0,0,0,0,0,0,0,0-.1-.1-.2-.1h0Z" fill="#9b978f"/>
              </g>
              <g>
                <path d="M645,363.4c0,0,0,.2-.1.2-.1,0-.2,0-.3-.1l-3.4-6.9c0-.1,0-.2.1-.3.1,0,.2,0,.3.1l3.4,6.9s0,0,0,0Z" fill="#fff"/>
                <path d="M641.3,356.2s0,0,0,0c-.1,0-.2.2-.1.3l3.4,6.9c0,0,.1.1.2.1s0,0,0,0c0,0,.1-.1.1-.2,0,0,0,0,0,0l-3.4-6.9c0,0-.1-.1-.2-.1h0Z" fill="#9b978f"/>
              </g>
              <g>
                <g>
                  <path d="M628.1,374.1c-.4,0-1-.2-1.8-.4l-.6-.2c-1.5-.4-4.1-.8-5.9-1.1-6.6-.6-16.1-3.6-17.4-4v-5.6c.1,0-.5-5.6-.5-5.6,1-.4,6.5-2.7,11.6-3.8,3.9-1.1,6.2-2.1,7.8-2.8,1-.5,1.7-.8,2.2-.8s.8.5,1.4,2.1c.8,2.1.8,3.7.8,5.3,0,1.6,0,3.2.9,4.9,1.8,3.6,2.9,6.3,2.6,9.4-.2,2.2-.5,2.5-1.1,2.5h0Z" fill="#fff"/>
                  <path d="M623.5,350.1c.4,0,.6.4,1.2,2,.8,2,.8,3.7.8,5.3,0,1.7,0,3.3,1,5.1,1.8,3.5,2.8,6.2,2.5,9.2-.2,2.2-.5,2.2-.8,2.2s-1-.2-1.7-.4l-.6-.2c-1.2-.3-3.2-.7-6-1.1-6.3-.5-15.3-3.3-17.2-3.9v-5.5c.1,0,.1,0,.1,0h0s-.6-5.5-.6-5.5c1.4-.6,6.6-2.7,11.4-3.7,3.9-1.1,6.2-2.1,7.8-2.8,1-.4,1.7-.7,2.1-.7M623.5,349.6c-1.2,0-3.4,1.7-10,3.6-5.6,1.2-11.8,3.9-11.8,3.9l.6,5.8v5.8c-.1,0,10.3,3.5,17.6,4.1,2,.3,4.5.7,5.9,1.1,1.1.3,1.9.5,2.4.5.9,0,1.1-.6,1.3-2.7.3-3.3-.9-6.2-2.6-9.5-1.7-3.4,0-6-1.8-10.3-.6-1.6-.9-2.3-1.7-2.3h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M629.7,370.1c0,.5,0,1,0,1.6-.1,1.5-.3,2.3-.8,2.7-.5.4-1.3.2-2.6-.2-.2,0-.4,0-.6-.2-1.2-.3-3.2-.7-5.9-1.1-3.7-.3-8.4-1.4-11.6-2.3-3.5-.9-6.1-1.8-6.1-1.8,0,0-.2-.1-.2-.2v-5.8c.1,0-.5-5.8-.5-5.8,0-.1,0-.2.1-.2,0,0,6.2-2.7,11.8-3.9,3.8-1.1,6.2-2.1,7.7-2.8,1.5-.6,2.2-1,2.8-.7.6.2.9,1,1.4,2.3.8,2.2.9,3.9.9,5.5,0,1.6,0,3.1.9,4.7,1.6,3,2.5,5.5,2.7,8ZM602.4,368.5c1.3.4,10.8,3.5,17.5,4,0,0,0,0,0,0,2.7.4,4.7.8,5.9,1.1.2,0,.4.1.6.2,1.2.3,1.9.5,2.2.3.3-.2.5-.9.6-2.4.3-3.1-.7-5.8-2.6-9.4-.9-1.7-.9-3.3-.9-4.9,0-1.6,0-3.3-.8-5.4-.5-1.2-.8-1.9-1.2-2.1-.4-.2-1.1.1-2.4.7-1.6.7-3.9,1.7-7.8,2.8,0,0,0,0,0,0-5.1,1.1-10.6,3.4-11.6,3.8l.6,5.6s0,0,0,0v5.7Z" fill="#fff"/>
                  <path d="M623.5,349.3c-.5,0-1.2.3-2.4.8-1.6.7-3.9,1.7-7.7,2.8-5.6,1.2-11.8,3.9-11.8,3.9,0,0-.1.1-.1.2l.6,5.8v5.8c-.1,0,0,.2,0,.2,0,0,2.7.9,6.1,1.8,3.2.9,7.8,2,11.6,2.3,2.7.4,4.7.8,5.9,1.1.2,0,.4.1.6.2.8.2,1.4.4,1.9.4s.5,0,.7-.2c.5-.4.7-1.2.8-2.7,0-.5,0-1.1,0-1.6-.1-2.6-1.1-5-2.7-8-.8-1.6-.9-3.1-.9-4.7,0-1.6,0-3.4-.9-5.5-.5-1.4-.9-2.1-1.4-2.3-.1,0-.3,0-.4,0h0ZM628.1,374.1c-.4,0-1-.2-1.8-.4-.2,0-.4,0-.6-.2-1.2-.3-3.2-.7-5.9-1.1,0,0,0,0,0,0-6.6-.6-16.1-3.6-17.5-4v-5.7c.1,0,.1,0,.1,0l-.6-5.6c1-.4,6.5-2.7,11.6-3.8,0,0,0,0,0,0,3.9-1.1,6.2-2.1,7.8-2.8,1.1-.5,1.7-.8,2.2-.8s.2,0,.3,0c.4.2.7.9,1.2,2.1.8,2.1.8,3.7.8,5.4,0,1.6,0,3.2.9,4.9,1.8,3.6,2.9,6.3,2.6,9.4-.1,1.5-.3,2.1-.6,2.4-.1,0-.3.1-.5.1h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <g>
                    <path d="M596,394.2c-.3,0-.3-.3-.3-.4v-.7s-.5.6-.5.6c0,0-.3.2-.4.2s-.1,0-.1,0c-.1-.2.2-.9.5-1.4l-.4-.3c0,0-.2.2-.3.2s0,0,0,0c-.1-.2.2-.8.4-1.1l.7-.9-1,.5s0,0,0,0c-.1,0-.2-.1-.2-.3,0-.4,1.7-2.1,3.4-3.6l3.3,1.8c0,.5.1,2.1.2,3.2,0,.5,0,.6-.1.7,0,0,0,0-.1,0-.2,0-.5-.2-.7-.7,0-.2-.2-.3-.2-.5-.2-.5-.4-.8-.7-.8s-.4.2-.6.6c-.6,1-2,2.7-2.6,2.9,0,0-.1,0-.2,0Z" fill="#fff"/>
                    <path d="M597.7,387.2l3,1.6c0,.6.1,2.1.2,3.1,0,.2,0,.3,0,.4,0,0-.3-.2-.4-.5,0-.2-.2-.3-.2-.5-.2-.5-.4-.9-.9-.9s-.6.4-.9.7c-.6,1.1-2,2.7-2.5,2.8,0,0,0,0-.1,0,0,0,0-.1,0-.2v-1.3c0,0-.9,1-.9,1,0,0,0,0-.2.1,0-.2.3-.7.5-1l-.7-.7c0-.2.2-.5.4-.7l2.1-2.5-2.5,1.6c.3-.6,1.8-2,3.1-3.2M597.7,386.6s-3.6,3.2-3.6,3.9c0,.4.2.5.4.5s.2,0,.2,0c0,0-.7.9-.5,1.4,0,.2.2.2.3.2.2,0,.5-.2.5-.2,0,0-.8,1.2-.6,1.6,0,.2.2.2.4.2.3,0,.6-.2.6-.3,0,0,0,.6.6.6s.1,0,.2,0c.8-.2,2.2-2.1,2.8-3,.2-.3.3-.5.4-.5.2,0,.3.4.7,1.1.3.5.6.8.9.8s.5-.3.5-1c-.1-1.3-.2-3.4-.2-3.4l-3.6-1.9h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M595.4,393.9s0,0,0,0c0,0,0,0,0,0h0ZM594.6,392.6c.2,0,.4-.2.4-.2,0,0-.1.1-.2.2h-.2ZM594.5,391.1c0,0,.1,0,.2,0,0,0,0,0,0,0h0Z" fill="#fff"/>
                    <path d="M597.7,386.4c0,0-.1,0-.1,0,0,0-.9.8-1.8,1.7-1.9,1.9-1.9,2.2-1.8,2.4,0,.3.1.5.3.6,0,0,0,0,0,0-.2.3-.5.9-.3,1.3.1.2.3.3.4.3s0,0,0,0c-.2.4-.4.9-.2,1.3.1.2.3.3.5.3,0,0,0,0,0,0,.2,0,.4,0,.5-.2,0,.1.1.2.2.3,0,0,.2.1.5.1s.2,0,.3,0c.9-.2,2.4-2.3,2.9-3.1.1-.2.2-.3.2-.3,0,0,.2.3.2.5,0,.1.1.3.2.5.3.6.7.9,1.1.9s.1,0,.2,0c.2,0,.6-.3.5-1.1,0,0,0,0,0-.1-.1-1.3-.2-3.3-.2-3.3,0,0,0-.1-.1-.2l-3.6-1.9s0,0-.1,0h0ZM594.4,390.8s0,0,0,0c0,0,0,0,0-.3,0,0,0-.4,1.7-2.1.7-.7,1.4-1.3,1.7-1.6l3.3,1.8c0,.5.1,2.1.2,3.2,0,.5,0,.7-.2.7,0,0,0,0,0,0-.2,0-.5-.2-.7-.7,0-.2-.2-.3-.2-.5-.2-.5-.4-.7-.6-.8,0,0,0,0,0,0-.2,0-.4.2-.6.6-.6,1-2,2.8-2.6,2.9,0,0-.1,0-.2,0,0,0-.1,0-.2,0-.1,0-.2-.3-.2-.4,0,0,0-.2-.2-.2,0,0,0,0,0,0,0,0-.1,0-.2,0,0,0-.3.3-.5.3s0,0,0,0c0,0-.1,0-.2-.1,0,0,0,0,0-.1,0-.3.3-.9.6-1.3,0,0,0-.2,0-.3,0,0,0,0-.1,0,0,0-.1,0-.2,0,0,0-.2.2-.3.2s0,0,0,0c0,0,0,0,0,0-.1-.3.2-.9.5-1.1,0,0,0-.2,0-.3,0,0-.1,0-.2,0s0,0,0,0c0,0,0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <path d="M596.3,389.4c0,0,0,.1,0,.2l-1.5,1.6c0,0-.2,0-.3,0,0,0,0-.2,0-.3l1.5-1.6c0,0,.2,0,.3,0,0,0,0,0,0,.2Z" fill="#fff"/>
                  <path d="M596.1,389.2c0,0-.1,0-.2,0l-1.5,1.6c0,0,0,.2,0,.3,0,0,0,0,.2,0s.1,0,.2,0l1.5-1.6s0-.1,0-.2c0,0,0-.1,0-.2,0,0,0,0-.2,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M597,390.2c0,0,0,.1,0,.2l-1.9,2.1c0,0-.2.1-.3,0,0,0-.1-.2,0-.3l1.9-2.1c0,0,.2-.1.3,0,0,0,0,.1,0,.2Z" fill="#fff"/>
                  <path d="M596.8,390c0,0-.1,0-.2,0l-1.9,2.1c0,0,0,.2,0,.3,0,0,0,0,.1,0s.1,0,.2,0l1.9-2.1s0-.1,0-.2c0,0,0-.1,0-.2,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M597.8,390.9c0,0,0,.1,0,.2-1,1.1-2,2.4-2.1,2.7,0,.1,0,.2-.2.3-.1,0-.2,0-.3-.1,0-.2,0-.5,1-1.8.5-.7,1.1-1.3,1.1-1.3,0,0,.2-.1.3,0,0,0,0,.1,0,.2Z" fill="#fff"/>
                  <path d="M597.5,390.7c0,0-.1,0-.2,0,0,0-.6.6-1.1,1.3-1.1,1.3-1.1,1.6-1,1.8,0,0,.1.2.2.2s0,0,0,0c.1,0,.2-.1.2-.3,0-.3,1.1-1.6,2.1-2.7,0,0,0-.1,0-.2,0,0,0-.1,0-.2,0,0,0,0-.2,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <g>
                    <path d="M601.3,388.3c-1.2,0-2.8-.9-3.3-1.5-.1-.1-.2-.2-.1-.3.1-.6,3.2-8.6,4.7-12.7h0c0,0,0-.2,0-.2-.9-2.5-.8-5-.8-5,0-.1,0-2.7,3.6-2.7s2.3.2,3.7.7c6.4,2,14,2.2,16.2,2.2s.3,0,.4,0c-1,2.9-4,4.2-4,4.2,0,0-.8.5-1.7,2.7-.6,1.4-1.3,1.6-1.6,1.6s-.3,0-.3,0c-1.8-.8-4.3-1-6.1-1s-1.8,0-1.8,0h-.1s0,.1,0,.1c-3.8,6.5-8,11.3-8.6,12Z" fill="#fff"/>
                    <path d="M605.5,366.1c1,0,2.2.2,3.6.7,6.4,2,14,2.2,16.2,2.2-1.1,2.5-3.8,3.7-3.8,3.7-.1,0-.9.6-1.8,2.8-.4.9-.9,1.4-1.4,1.4s-.2,0-.2,0,0,0,0,0c-1.8-.9-4.4-1-6.3-1s-1.8,0-1.8,0h-.3s-.1.2-.1.2c-3.7,6.3-7.6,11-8.5,11.9-1.3-.1-3-1.2-3.1-1.5.1-.5,2.9-7.9,4.7-12.7v-.2c0,0,0-.2,0-.2-.8-2.5-.7-4.9-.7-4.9,0-.3.1-2.5,3.4-2.5M605.5,365.6c-3.9,0-3.9,3-3.9,3,0,0-.1,2.5.8,5.1,0,0-4.6,12-4.7,12.7-.2.8,2.3,2.1,3.8,2.2,0,0,4.5-5,8.7-12.2,0,0,.7,0,1.8,0,1.7,0,4.3.2,6,1,0,0,.1,0,.4,0,.5,0,1.2-.2,1.9-1.7.9-2.2,1.6-2.6,1.6-2.6,0,0,3.3-1.4,4.3-4.7,0,0-.2,0-.7,0-2.3,0-9.7-.2-16.1-2.1-1.5-.5-2.8-.7-3.8-.7h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M626.3,368.4s0,0,0,0c-1,3.2-4.1,4.7-4.4,4.8,0,0-.7.5-1.5,2.5-.4.9-.9,1.5-1.5,1.7-.6.2-1,0-1.1,0,0,0,0,0,0,0-1.1-.5-2.8-.9-4.9-1-1.3,0-2.4,0-2.7,0-4.1,7-8.6,12.1-8.7,12.1,0,0-.1,0-.2,0-1.2,0-3.1-.9-3.8-1.7-.2-.3-.3-.5-.2-.7.2-.8,4.3-11.6,4.7-12.7-.8-2.5-.8-4.9-.8-5.1,0-.1,0-1.5,1.3-2.4,1.4-1,3.6-1,6.6,0,7.5,2.3,16.7,2.1,16.7,2.1,0,0,.1,0,.2,0,0,0,0,0,0,.1ZM618,377.1c0,0,1.1.4,1.9-1.5.9-2.2,1.6-2.7,1.7-2.7,0,0,0,0,0,0,0,0,3-1.3,4.1-4.2-1.7,0-9.8,0-16.6-2.2-2.8-.9-5-.9-6.2,0-1.1.8-1.1,2-1.1,2.1,0,0,0,0,0,0,0,0,0,2.5.8,5,0,0,0,.1,0,.2-1.6,4.1-4.6,12.1-4.7,12.7,0,0,0,.2.1.3.5.6,2.1,1.5,3.3,1.5.6-.7,4.8-5.5,8.6-12.1,0,0,.1-.1.2-.1.2,0,5.1-.4,7.9,1Z" fill="#fff"/>
                    <path d="M605.5,365.4c-1.2,0-2.1.3-2.8.8-1.2.9-1.3,2.3-1.3,2.4,0,.1,0,2.6.8,5.1-.4,1.1-4.5,11.9-4.7,12.7,0,.2,0,.5.2.7.7.8,2.6,1.7,3.8,1.7,0,0,0,0,0,0,0,0,.1,0,.2,0,0,0,4.5-5.1,8.7-12.1.2,0,.9,0,1.7,0s.7,0,1,0c2.1,0,3.8.4,4.9,1,0,0,0,0,0,0,0,0,.2,0,.5,0s.4,0,.6-.1c.6-.2,1.1-.8,1.5-1.7.8-2,1.4-2.4,1.5-2.5.3-.1,3.4-1.6,4.4-4.8,0,0,0,0,0,0,0,0,0,0,0-.1,0,0-.1,0-.2,0,0,0,0,0,0,0,0,0-.2,0-.6,0-2.2,0-9.7-.2-16.1-2.1-1.5-.5-2.8-.7-3.8-.7h0ZM601.3,388.3c-1.2,0-2.8-.9-3.3-1.5-.1-.1-.2-.3-.1-.3.1-.6,3.2-8.6,4.7-12.7,0,0,0-.1,0-.2-.9-2.5-.8-5-.8-5,0,0,0,0,0,0,0,0,0-1.3,1.1-2.1.6-.5,1.5-.7,2.5-.7,1,0,2.3.2,3.7.7,6.4,2,14,2.2,16.2,2.2s.2,0,.3,0c-1,2.9-4,4.2-4.1,4.2,0,0,0,0,0,0,0,0-.8.5-1.7,2.7-.6,1.4-1.3,1.6-1.7,1.6s-.3,0-.3,0c-1.8-.9-4.4-1-6.1-1-1,0-1.8,0-1.8,0,0,0-.1,0-.2.1-3.8,6.5-8,11.4-8.6,12.1h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <path d="M604.8,374.7s0,0,0,0c0,.1-.1.2-.3.2-.2,0-2-.5-2.3-1.2,0-.1,0-.2,0-.3.1,0,.2,0,.3,0,.2.4,1.4.8,2,.9.1,0,.2.1.2.2Z" fill="#fff"/>
                  <path d="M602.4,373.4s0,0-.1,0c-.1,0-.2.2,0,.3.4.7,2.1,1.1,2.3,1.2,0,0,0,0,0,0,.1,0,.2,0,.2-.2,0,0,0,0,0,0,0,0,0-.2-.2-.2-.7-.2-1.8-.5-2-.9,0,0-.1-.1-.2-.1h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M622.5,372.8c0,0,0,.2-.1.2-1.1.7-2.4.2-3.6-.3-1.2-.5-3-.6-3-.6-.1,0-.2-.1-.2-.2,0-.1.1-.2.2-.2,0,0,1.9.1,3.2.6,1.4.6,2.4.8,3.2.3.1,0,.2,0,.3,0,0,0,0,0,0,.1Z" fill="#fff"/>
                  <path d="M615.7,371.7c-.1,0-.2,0-.2.2,0,.1,0,.2.2.2,0,0,1.8.1,3,.6.8.3,1.6.6,2.4.6s.9,0,1.3-.3c0,0,.1-.1.1-.2,0,0,0,0,0-.1,0,0-.1-.1-.2-.1s0,0-.1,0c-.3.2-.6.3-1,.3-.6,0-1.4-.2-2.2-.6-1.3-.5-3.1-.6-3.2-.6,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M612,375.2c0,.1,0,.2-.2.2-.8.2-1.5,1.1-1.5,1.1,0,0-.2.1-.3,0,0,0-.1-.2,0-.3,0,0,.8-1,1.8-1.2.1,0,.2,0,.3.2,0,0,0,0,0,0Z" fill="#fff"/>
                  <path d="M611.8,375s0,0,0,0c-1,.3-1.7,1.2-1.8,1.2,0,0,0,.2,0,.3,0,0,0,0,.1,0s.1,0,.2,0c0,0,.7-.9,1.5-1.1.1,0,.2-.1.2-.2,0,0,0,0,0,0,0-.1-.1-.2-.2-.2h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M604.1,359.6c-3,0-3.3-2.3-3.3-2.4,0,0-.3-2.5.3-5.1h0c0,0,0-.2,0-.2-1.9-4-5.6-11.7-5.8-12.3,0,0,0-.2.1-.3.4-.7,2-1.6,3.1-1.8.7.6,5.2,5.1,9.6,11.3h0c0,.1.1.1.1.1.2,0,5.1,0,7.8-1.6h0s.1,0,.4,0c.4,0,1,.2,1.7,1.4,1.1,2.1,1.9,2.5,1.9,2.6,0,0,3.1,1.1,4.4,3.8-1.8.1-9.8.9-16.3,3.5-1.6.7-3,1-4.2,1Z" fill="#fff"/>
                  <path d="M598.5,337.9c.9.9,5.3,5.2,9.4,11.2v.2h.4c.2,0,5.2,0,8-1.6,0,0,.1,0,.3,0,.5,0,1,.5,1.4,1.3,1.1,2.2,1.9,2.6,2.1,2.7,0,0,2.8,1,4.1,3.4-2.3.2-9.8,1-16,3.5-1.6.6-3,1-4.1,1-2.7,0-3-2-3-2.2,0,0-.3-2.4.3-5v-.2s0-.2,0-.2c-2.2-4.6-5.6-11.7-5.8-12.2,0-.4,1.6-1.6,2.9-1.8M598.7,337.3c-1.5.1-3.8,1.7-3.6,2.5.2.8,5.8,12.3,5.8,12.3-.7,2.6-.3,5.1-.3,5.1,0,0,.2,2.6,3.5,2.6s2.5-.3,4.3-1c7.4-3,16.6-3.5,16.6-3.5-1.2-3.2-4.7-4.3-4.7-4.3,0,0-.7-.3-1.8-2.4-.7-1.3-1.4-1.6-1.9-1.6s-.5.1-.5.1c-2.7,1.6-7.7,1.6-7.7,1.6h0c-4.7-6.8-9.7-11.4-9.7-11.4h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M625.2,355.3s0,0,0,.1c0,0-.1,0-.2.1,0,0-9.2.6-16.5,3.5-2.9,1.2-5.2,1.4-6.6.5-1.3-.8-1.5-2.2-1.5-2.3,0-.1-.3-2.5.3-5.1-.5-1.1-5.5-11.5-5.8-12.2,0-.2,0-.5.2-.7.6-.9,2.4-1.9,3.6-2,0,0,.1,0,.2,0,0,0,5,4.7,9.6,11.3.8,0,5.1-.1,7.5-1.6,0,0,0,0,0,0,0,0,.5-.2,1.1,0,.6.2,1.2.7,1.6,1.6,1,1.9,1.6,2.3,1.7,2.3.3.1,3.6,1.3,4.8,4.4,0,0,0,0,0,0ZM600.8,357.2s.1,1.2,1.3,1.9c1.3.8,3.5.6,6.2-.5,6.6-2.7,14.6-3.4,16.3-3.5-1.3-2.8-4.4-3.9-4.4-3.9,0,0,0,0,0,0,0,0-.8-.4-1.9-2.5-1-1.9-2-1.4-2.1-1.4-2.8,1.6-7.6,1.6-7.8,1.6,0,0-.1,0-.2,0-4.4-6.2-8.9-10.7-9.6-11.3-1.2.2-2.7,1.1-3.2,1.8,0,.1-.1.3-.1.3.2.6,3.9,8.3,5.8,12.3,0,0,0,.1,0,.2-.6,2.6-.3,5-.3,5.1,0,0,0,0,0,0ZM600.6,357.2h0s0,0,0,0Z" fill="#fff"/>
                  <path d="M598.7,337.1s0,0,0,0c-1.2.1-3,1.1-3.6,2-.2.3-.2.5-.2.7.2.7,5.3,11.2,5.8,12.2-.6,2.6-.3,5-.3,5.1,0,.1.2,1.5,1.5,2.3.6.4,1.4.6,2.3.6s2.7-.3,4.4-1c7.3-3,16.4-3.5,16.5-3.5,0,0,.1,0,.2-.1,0,0,0,0,0-.1,0,0,0,0,0,0-1.2-3.1-4.5-4.3-4.8-4.4,0,0-.7-.5-1.7-2.3-.5-.9-1-1.4-1.6-1.6-.2,0-.3,0-.5,0-.4,0-.6.1-.6.1,0,0,0,0,0,0-2.4,1.4-6.7,1.5-7.5,1.6-4.7-6.6-9.6-11.3-9.6-11.3,0,0,0,0-.2,0h0ZM604.1,359.7c-.8,0-1.5-.2-2-.5-1.2-.7-1.3-1.9-1.3-1.9,0,0,0,0,0,0,0,0-.3-2.5.3-5.1,0,0,0-.1,0-.2-1.9-4-5.6-11.7-5.8-12.3,0,0,0-.2.1-.3.5-.7,2-1.7,3.2-1.8.6.6,5.2,5.1,9.6,11.3,0,0,.1,0,.2,0h0c.3,0,5.1,0,7.8-1.6,0,0,.2,0,.4,0,.4,0,1.1.2,1.7,1.4,1.1,2.1,1.8,2.5,1.9,2.5,0,0,0,0,0,0,0,0,3.1,1.1,4.4,3.9-1.7.1-9.8.9-16.3,3.5-1.6.7-3,1-4.2,1h0ZM600.6,357.2h0s0,0,0,0h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M605,369.4c-.5,0-1.1-.2-1.5-.5-.5-.4-1-.6-1.5-.6s-.7.1-1.1.2c-.4.1-.8.2-1.2.2s-.8,0-1.3-.3c-1.8-.8-2-2.6-1.9-3.4,0-.3,0-.5-.2-.7-.4-.6-1.2-2.2-.6-3.8.5-1,1.1-1.3,1.9-1.7.7-.3,1.6-.7,2.5-1.7.6-.7,1.8-1.2,3.1-1.2,1.9,0,4.3,1,4.8,3.8,0,0,.5,2.1-.2,3.4-.6,1-.5,2-.4,3,0,.5.1,1,0,1.5,0,.9-1.1,1.8-2.4,1.8Z" fill="#fff"/>
                  <path d="M603.2,355.8v.5c1.8,0,4.1.9,4.5,3.6,0,0,.5,1.9-.2,3.2-.6,1.1-.5,2.2-.4,3.1,0,.5.1,1,0,1.4,0,.7-1,1.6-2.1,1.6s-.9-.2-1.4-.5c-.5-.4-1.1-.6-1.6-.6s-.8.1-1.2.2c-.4.1-.7.2-1.2.2s-.8,0-1.2-.3c-1.7-.8-1.8-2.5-1.8-3.1,0-.3,0-.6-.2-.9-.4-.6-1.2-2.1-.5-3.5.4-.9,1-1.2,1.8-1.5.7-.3,1.6-.7,2.5-1.8.6-.7,1.7-1.1,2.9-1.1v-.5M603.2,355.8c-1.3,0-2.6.5-3.3,1.3-1.8,2.1-3.4,1.3-4.4,3.4-.7,1.7.2,3.4.6,4,.1.2.2.4.2.6,0,.8,0,2.7,2.1,3.6.5.2,1,.3,1.4.3.9,0,1.6-.4,2.3-.4.4,0,.8.1,1.3.5.5.4,1.1.6,1.7.6,1.3,0,2.5-1,2.6-2,.1-1.5-.5-2.9.3-4.3s.3-3.6.3-3.6c-.5-2.8-2.8-4-5-4h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M608.7,361c0,.7,0,1.6-.5,2.4-.5.9-.4,1.8-.3,2.7,0,.5.1,1,0,1.6,0,.8-.7,1.6-1.6,2-1,.5-2.1.3-3-.4-.8-.7-1.4-.5-2.2-.3-.7.2-1.6.5-2.8,0-2.1-.9-2.3-3-2.2-3.8,0-.2,0-.3-.1-.5-.4-.7-1.4-2.5-.6-4.2.5-1.2,1.3-1.5,2.1-1.9.7-.3,1.5-.6,2.3-1.6,1-1.2,3.1-1.7,5.1-1.1,2,.5,3.3,2,3.6,3.9,0,0,.2.6.2,1.3ZM607.3,365.3c0-.7,0-1.4.5-2.1.8-1.4.3-3.4.3-3.4,0,0,0,0,0,0-.3-1.8-1.5-3.1-3.3-3.6-1.8-.5-3.8,0-4.6,1-.9,1-1.7,1.4-2.4,1.7-.8.3-1.4.6-1.9,1.7-.7,1.6.2,3.2.6,3.8.1.2.2.5.2.7,0,.7,0,2.6,1.9,3.4,1.1.5,1.8.3,2.5,0,.8-.2,1.5-.4,2.6.4.7.6,1.7.7,2.6.3.8-.3,1.3-1,1.4-1.6,0-.5,0-1,0-1.5,0-.3,0-.6,0-.9Z" fill="#fff"/>
                  <path d="M603.2,355.5c-1.4,0-2.7.5-3.5,1.3-.8,1-1.6,1.3-2.3,1.6-.8.4-1.6.7-2.1,1.9-.8,1.8.2,3.5.6,4.2,0,.1.1.3.1.5,0,.8.1,2.9,2.2,3.8.6.2,1,.3,1.4.3s1-.1,1.4-.2c.3,0,.7-.2,1-.2s.7.1,1.2.5c.5.4,1.2.6,1.8.6s.8,0,1.2-.3c.9-.4,1.6-1.2,1.6-2,0-.5,0-1.1,0-1.6,0-.9-.2-1.8.3-2.7.4-.8.5-1.7.5-2.4,0-.7-.2-1.2-.2-1.3-.3-2-1.6-3.4-3.6-3.9-.5-.1-1.1-.2-1.6-.2h0ZM599.7,368.8c-.4,0-.8,0-1.3-.3-1.9-.8-2-2.7-1.9-3.4,0-.3,0-.5-.2-.7-.4-.6-1.3-2.2-.6-3.8.5-1,1.1-1.3,1.9-1.7.7-.3,1.6-.7,2.4-1.7.6-.8,1.8-1.2,3.1-1.2s1,0,1.5.2c1.8.5,3,1.8,3.3,3.6,0,0,0,0,0,0,0,0,.5,2.1-.3,3.4-.4.7-.5,1.4-.5,2.1,0,.3,0,.6,0,.9,0,.5.1,1,0,1.5,0,.6-.6,1.3-1.4,1.6-.3.1-.7.2-1,.2-.5,0-1.1-.2-1.5-.5-.5-.4-1-.6-1.5-.6s-.7.1-1.1.2c-.4.1-.8.2-1.2.2h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M607.8,366.5c-1.8-2.3-.2-6.5.3-7.6.5.3,1.9,1.3,2.1,3.5.3,2.3-1.8,3.7-2.4,4Z" fill="#fff"/>
                  <path d="M608.2,359.3c.6.4,1.6,1.4,1.8,3.2.2,2-1.4,3.2-2.1,3.7-1.4-2-.2-5.5.3-6.9M607.9,358.6s-2.6,5.6-.2,8.2c0,0,3-1.5,2.7-4.4s-2.5-3.9-2.5-3.9h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M610.7,362.7c0,1.1-.4,2.2-1.3,3.2-.7.8-1.5,1.1-1.5,1.1,0,0-.2,0-.3,0-1-1.1-1.3-3-.9-5.3.4-1.7,1-3.1,1-3.2,0-.1.2-.2.3-.1,0,0,2.3,1,2.6,4,0,0,0,.2,0,.3ZM607.8,366.5c.6-.3,2.7-1.7,2.4-4.1-.1-1.1-.6-2.1-1.3-2.9-.3-.4-.7-.6-.9-.7-.4,1-2.1,5.4-.3,7.6ZM607.7,366.8h0s0,0,0,0Z" fill="#fff"/>
                  <path d="M607.9,358.4c0,0-.2,0-.2.1,0,0-.7,1.4-1,3.2-.5,2.3-.2,4.2.9,5.3,0,0,.1,0,.2,0s0,0,0,0c0,0,.8-.4,1.5-1.1.9-.9,1.4-2,1.3-3.2,0,0,0-.2,0-.3-.3-3-2.5-4-2.6-4,0,0,0,0,0,0h0ZM607.8,366.5c-1.9-2.3-.2-6.6.3-7.6.2.1.5.3.9.7.7.8,1.2,1.7,1.3,2.9.3,2.3-1.8,3.7-2.4,4.1h0ZM607.7,366.8h0s0,0,0,0h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <path d="M601.1,367.8s0,0,0,0c0,.1-.1.2-.3.2-1.3-.2-1.9-1.3-2-1.3,0-.1,0-.2,0-.3.1,0,.2,0,.3,0,0,0,.5.9,1.6,1.1.1,0,.2.1.2.2Z" fill="#fff"/>
                <path d="M599,366.4s0,0-.1,0c-.1,0-.2.2,0,.3,0,0,.6,1.1,2,1.3,0,0,0,0,0,0,.1,0,.2,0,.2-.2,0,0,0,0,0,0,0-.1,0-.2-.2-.2-1.1-.1-1.6-1.1-1.6-1.1,0,0-.1-.1-.2-.1h0Z" fill="#9b978f"/>
              </g>
              <g>
                <path d="M604.4,367.7s0,0,0,0c0,.1-.1.2-.3.2-2.9-.4-4.1-1.9-4.2-1.9,0,0,0-.2,0-.3,0,0,.2,0,.3,0,0,0,1.1,1.4,3.9,1.8.1,0,.2.1.2.2Z" fill="#fff"/>
                <path d="M600.2,365.6s0,0-.1,0c0,0-.1.2,0,.3,0,0,1.2,1.6,4.2,1.9,0,0,0,0,0,0,.1,0,.2,0,.2-.2,0,0,0,0,0,0,0-.1,0-.2-.2-.2-2.7-.4-3.8-1.8-3.9-1.8,0,0-.1,0-.2,0h0Z" fill="#9b978f"/>
              </g>
              <g>
                <path d="M606,366.9s0,0,0,0c0,.1-.1.2-.2.2-2.4-.3-3.8-1.1-3.9-1.1-.1,0-.1-.2,0-.3,0-.1.2-.1.3,0,0,0,1.4.8,3.7,1.1.1,0,.2.1.2.2Z" fill="#fff"/>
                <path d="M602,365.6c0,0-.2,0-.2.1,0,.1,0,.2,0,.3,0,0,1.5.8,3.9,1.1,0,0,0,0,0,0,.1,0,.2,0,.2-.2,0,0,0,0,0,0,0-.1,0-.2-.2-.2-2.3-.3-3.7-1-3.7-1.1,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
              </g>
              <g>
                <path d="M605.7,358.6s0,.1,0,.1c0,.1-.2.1-.3,0-2-1.5-3.7-1.2-3.7-1.1-.1,0-.2,0-.3-.2,0-.1,0-.2.2-.3,0,0,1.9-.4,4.1,1.2,0,0,0,.1,0,.2Z" fill="#fff"/>
                <path d="M602.1,357.2c-.3,0-.5,0-.5,0-.1,0-.2.1-.2.3,0,.1.1.2.2.2s0,0,0,0c0,0,.2,0,.4,0,.6,0,1.9.2,3.3,1.2,0,0,0,0,.1,0,0,0,.1,0,.2,0,0,0,0,0,0-.1,0,0,0-.1,0-.2-1.5-1.1-2.8-1.3-3.5-1.3h0Z" fill="#9b978f"/>
              </g>
              <g>
                <path d="M607.7,359.8c0,0,0,.2-.1.2-.1,0-.2,0-.3-.1-1-2.4-2.8-2.6-2.9-2.6-.1,0-.2-.1-.2-.3,0-.1.1-.2.2-.2,0,0,2.1.3,3.2,2.9,0,0,0,0,0,0Z" fill="#fff"/>
                <path d="M604.4,356.9c-.1,0-.2,0-.2.2,0,.1,0,.2.2.3,0,0,1.9.2,2.9,2.6,0,0,.1.1.2.1s0,0,0,0c0,0,.1-.1.1-.2,0,0,0,0,0,0-1.1-2.6-3.1-2.9-3.2-2.9,0,0,0,0,0,0h0Z" fill="#9b978f"/>
              </g>
              <g>
                <path d="M603.2,350.8c0,0,0,.2-.2.2-.7.2-1.8.7-2,1.1,0,.1-.2.2-.3.1-.1,0-.2-.2-.1-.3.3-.7,2-1.3,2.2-1.4.1,0,.2,0,.3.1,0,0,0,0,0,0Z" fill="#fff"/>
                <path d="M603,350.6s0,0,0,0c-.2,0-1.9.6-2.2,1.4,0,.1,0,.2.1.3,0,0,0,0,0,0,0,0,.2,0,.2-.1.2-.4,1.3-.9,2-1.1,0,0,.2-.1.2-.2,0,0,0,0,0,0,0,0-.1-.2-.2-.2h0Z" fill="#9b978f"/>
              </g>
              <g>
                <path d="M621,351.2s0,0,0,.1c0,.1-.2.2-.3,0-.8-.4-1.9,0-3.2.6-1.3.6-3,.9-3.1.9-.1,0-.2,0-.3-.2,0-.1,0-.2.2-.3,0,0,1.8-.2,3-.9,1.2-.6,2.5-1.2,3.6-.6,0,0,.1.1.1.2Z" fill="#fff"/>
                <path d="M619.8,350.8c-.9,0-1.8.4-2.6.8-1.2.6-2.9.9-3,.9-.1,0-.2.1-.2.3,0,.1.1.2.2.2s0,0,0,0c0,0,1.8-.3,3.1-.9.9-.5,1.7-.8,2.4-.8.3,0,.6,0,.8.2,0,0,0,0,.1,0,0,0,.2,0,.2-.1,0,0,0,0,0-.1,0,0,0-.2-.1-.2-.3-.2-.7-.2-1-.2h0Z" fill="#9b978f"/>
              </g>
              <g>
                <path d="M610.3,349.7s0,0,0,0c0,.1-.1.2-.3.2-1-.2-1.8-1-1.9-1.1,0,0,0-.2,0-.3,0,0,.2,0,.3,0,0,0,.8.8,1.6,1,.1,0,.2.1.2.2Z" fill="#fff"/>
                <path d="M608.4,348.5c0,0-.1,0-.2,0,0,0,0,.2,0,.3,0,0,.9.9,1.9,1.1,0,0,0,0,0,0,.1,0,.2,0,.2-.2,0,0,0,0,0,0,0-.1,0-.2-.2-.2-.9-.2-1.6-.9-1.6-1,0,0-.1,0-.2,0h0Z" fill="#9b978f"/>
              </g>
              <g>
                <path d="M619.2,363.9s0,0,0,0c0,.1-.1.2-.2.2-.1,0-2.7-.3-3.4-1.9-.6-1.4-1.4-1.9-1.4-1.9-.1,0-.1-.2,0-.3,0-.1.2-.1.3,0,0,0,.9.6,1.6,2.1.6,1.3,3,1.6,3,1.6.1,0,.2.1.2.2Z" fill="#fff"/>
                <path d="M614.3,360c0,0-.1,0-.2,0,0,.1,0,.2,0,.3,0,0,.8.6,1.4,1.9.7,1.5,3.3,1.8,3.4,1.9,0,0,0,0,0,0,.1,0,.2,0,.2-.2,0,0,0,0,0,0,0-.1,0-.2-.2-.2,0,0-2.4-.3-3-1.6-.7-1.5-1.5-2.1-1.6-2.1,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
              </g>
              <g>
                <path d="M620.1,362.6s0,0,0,0c0,.1-.1.2-.2.2-2.3,0-3.4-1.7-3.5-1.8,0-.1,0-.2,0-.3.1,0,.2,0,.3,0,0,0,1,1.5,3.1,1.6.1,0,.2,0,.2.2Z" fill="#fff"/>
                <path d="M616.6,360.7s0,0-.1,0c-.1,0-.1.2,0,.3,0,0,1.1,1.7,3.5,1.8,0,0,0,0,0,0,.1,0,.2,0,.2-.2,0,0,0,0,0,0,0-.1,0-.2-.2-.2-2.1,0-3.1-1.6-3.1-1.6,0,0-.1-.1-.2-.1h0Z" fill="#9b978f"/>
              </g>
            </g>
          </g>
          <g id="Room_names">
            <text transform="translate(423 328)" fill="#425563" font-family="Fredoka, sans-serif" font-size="16"><tspan x="0" y="0">Recreation Room</tspan></text>
            <text transform="translate(802.6 624)" fill="#425563" font-family="Fredoka, sans-serif" font-size="16"><tspan x="0" y="0">Flex Room</tspan></text>
            <text transform="translate(559.2 541)" fill="#425563" font-family="Fredoka, sans-serif" font-size="16"><tspan x="0" y="0">Mechanical</tspan><tspan x="1.8" y="16">Unfinished</tspan><tspan x="10.4" y="32">Storage</tspan></text>
            <text transform="translate(630.8 496.4)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">HVAC</tspan></text>
            <text transform="translate(648.9 550.9)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">WH</tspan></text>
            <text transform="translate(329.3 571.1)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">Unfinished Storage</tspan></text>
            <text transform="translate(267.2 652.3)" fill="#425563" font-family="Fredoka, sans-serif" font-size="16"><tspan x="0" y="0">Unfinished Storage</tspan></text>
            <text transform="translate(322.4 844.8)" fill="#425563" font-family="Fredoka, sans-serif" font-size="16"><tspan x="0" y="0">Bedroom 4</tspan></text>
            <text transform="translate(263.6 1045.1)" fill="#425563" font-family="Fredoka, sans-serif" font-size="16"><tspan x="0" y="0">Unfinished Storage</tspan></text>
            <text transform="translate(674.8 907.8)" fill="#425563" font-family="Fredoka, sans-serif" font-size="16"><tspan x="0" y="0">Unexcavated</tspan></text>
            <text transform="translate(534.6 708.2)" fill="#425563" font-family="Fredoka, sans-serif" font-size="16"><tspan x="0" y="0">Basement Bath</tspan></text>
            <text transform="translate(506.7 659.5)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">Linen</tspan></text>
            <text transform="translate(287.1 737.6)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">Walk-in</tspan><tspan x="4.2" y="10">Closet</tspan></text>
          </g>
          <g id="Room_Dinensions" >
            <text transform="translate(446.2 343.4)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">47’ 7” x 18’ 7”</tspan></text>
            <text transform="translate(810.2 640.5)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">16’ 2” x 21’ 2”</tspan></text>
            <text transform="translate(328.2 858.8)" fill="#425563" font-family="Fredoka, sans-serif" font-size="10"><tspan x="0" y="0">13’8”x 11’3”</tspan></text>
          </g>
        </g>
          {/* OPTION: Guest Entry */}
          <g id="optionalBar" data-option="optionalBar" style={{ display: active.optionalBar ? "block" : "none" }} fill="#CC0001">
            <g id="f0_optional_bar">


              {/* Background */}
              <rect
                x={510}
                y={64}
                width={402}
                height={149}
                fill="#dfdfdf"
              />
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
          {/* Hotspots */}
          <FlexSpaceHotspot/>
          <StorageBAHotspot/>
      </g>
    </g>
  </svg>

  );
}



// ❗ if you have a placeholder, TYPE IT so it matches Floor['SVG']
export const EmptySVG: React.FC<SVGProps> = () => null;

export const dariusD786AMainOptions = [
    { key: "guestEntry", label: "Guest Entry" },
];
export const dariusD786BasementOptions = [
    { key: "optionalBar", label: "Optional Bar" },
];
export const dariusD786 = {
    code: "dariusD786",

    title: "Meet the Darius",
    description:
      `Life never stands still, and neither do your needs. That’s why this home offers flexible spaces that grow with you, storage right where you need it, and welcoming areas made for bringing people together. A place to quiet the chaos, find a little tranquility, and share more moments with the ones you love most. Welcome home.`,
    floors: [
        { 
          id: "main", 
          name: "Main Floor", 
          SVG:DariusD786mainSVG, 
          options: dariusD786AMainOptions 
        },
        { 
          id: "basement", 
          name: "Basement", 
          SVG:DariusD786basementSVG, 
          options: dariusD786BasementOptions 
        },
    ],
};
