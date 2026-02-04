import { useEffect, } from "react";
import type { SVGProps } from "../types/floorplan";
import type { Plan } from "../types/floorplan"
import useFPState from "../store/useFPState";


// LIFESTYLE FEATURES

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
export function PantryHotspot() {
  const { setVideo, openModal } = useFPState();
  const base = import.meta.env.BASE_URL;
  
  const media = {
    id: "Pantry",
    title: "CONTAIN THE CHAOS, KEEP THE CALM",
    text: `While kitchen countertops can be a magnet for clutter, this corner walk-in pantry keeps it all out of sight. Stow dog food, small appliances, and baking supplies so your counters stay clear and ready for mixing up culinary magic.`,
    src: `${base}videos/Pantry_hotspot.mp4`,
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
      <circle className="dot" cx={280} cy={501} r={20} fill="#af272f" opacity={1} />
      <circle className="pulse" cx={280} cy={501} r={20} stroke="#af272f" fill="transparent" opacity={1} />
      <text x={280} y={505} textAnchor="middle" fill="white" fontSize={12}>
        1
      </text>
    </g>
  );
}
export function PantryHotspotBase() {
  const { setVideo, openModal } = useFPState();
  const base = import.meta.env.BASE_URL;
  
  const media = {
    id: "Pantry",
    title: "CONTAIN THE CHAOS, KEEP THE CALM",
    text: `While kitchen countertops can be a magnet for clutter, this corner walk-in pantry keeps it all out of sight. Stow dog food, small appliances, and baking supplies so your counters stay clear and ready for mixing up culinary magic.`,
    src: `${base}videos/Pantry_hotspot.mp4`,
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
      <circle className="dot" cx={450} cy={531} r={20} fill="#af272f" opacity={1} />
      <circle className="pulse" cx={450} cy={531} r={20} stroke="#af272f" fill="transparent" opacity={1} />
      <text x={450} y={535} textAnchor="middle" fill="white" fontSize={12}>
        1
      </text>
    </g>
  );
}

// PLAN SVG
export function DanielD237mainSVG({
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
        <filter id="ds-soft" x="-60%" y="-60%" width="220%" height="220%">
          <feOffset dx="0" dy="3" in="SourceAlpha" result="off"/>
          <feGaussianBlur in="off" stdDeviation="6" result="blur"/>
          <feColorMatrix in="blur" type="matrix"
            values="0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0.4 0" result="shadow"/>
          <feMerge>
            <feMergeNode in="shadow"/>
            <feMergeNode in="SourceGraphic"/>
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
              <polygon points="248.7 1151.47 248.7 66.05 658.94 66.05 658.94 199.62 728.95 199.62 728.95 195.68 733.12 191.51 733.38 191.77 752.73 172.43 752.46 172.16 755.65 168.97 756.15 169.47 756.18 168.76 763.43 168.76 763.93 168.77 844.24 168.77 844.24 168.62 851.47 168.62 851.47 169.33 852.01 168.82 855.21 172.02 855.01 172.22 874.35 191.55 874.55 191.36 878.73 195.54 878.73 199.62 917.76 199.62 917.76 214.13 917.69 214.63 917.69 243.28 917.76 243.28 917.76 348.56 917.69 349.06 917.69 376.93 917.76 376.93 917.76 406.53 917.69 407.03 917.69 461.64 917.76 461.64 917.76 660.72 917.7 661.22 917.7 762.04 918.69 762.04 918.69 976.47 501.58 976.47 501.58 1151.47 248.7 1151.47" fill="#fff"/>
              <path d="M658.44,66.55v133.57h71.01v-4.24l3.67-3.67.26.26.71-.71,18.64-18.63.71-.71-.27-.27,2.5-2.5,1.04,1.01v-1.41h6.23s1,0,1,0h80.81v-.15h6.23v1.46l1.05-1.05,2.49,2.49-.2.2.71.71,18.64,18.63.69.69.2-.19,3.69,3.69v4.38h39.03v13.51h-.07v30.15h.07v104.28h-.07v29.37h.07v28.6h-.07v56.11h.07v198.08h-.06v102.32h.99v213.43h-417.11v175h-251.88V66.55h409.24M659.44,65.55H248.2v1086.42h253.88v-175h417.11v-215.43h-.99v-100.32h.06v-200.08h-.07v-54.11h.07v-30.6h-.07v-27.37h.07v-106.28h-.07v-28.15h.07v-15.51h-39.03v-3.8h0l-4.66-4.66-.2.19-18.64-18.63.2-.2-3.9-3.9-.05.05v-.05h-8.23v.15h-79.81s-8.23,0-8.23,0v.05l-.05-.05-3.9,3.9.27.27-18.64,18.63-.26-.26-4.66,4.66h-.01v3.66h-69.01V65.55h0Z"/>
            </g>
            <g id="flooring">
              <g id="sec-br-floor">
                <rect x="496" y="605.7" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="517.1" y="605.7" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="538.2" y="605.7" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="559.3" y="605.7" width="8.8" height="21.5" fill="#bcd3dd"/>
                <rect x="496" y="627.4" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="517.1" y="627.4" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="538.2" y="627.4" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="559.3" y="627.4" width="8.8" height="21.5" fill="#bcd3dd"/>
                <rect x="496" y="649" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="517.1" y="649" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="496" y="670.7" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="517.1" y="670.7" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="496" y="692.5" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="517.1" y="692.5" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="496" y="714.2" width="20.8" height="10" fill="#bcd3dd"/>
                <rect x="517.1" y="714.2" width="20.8" height="10" fill="#bcd3dd"/>
                <rect x="538.2" y="714.2" width="20.8" height="10" fill="#bcd3dd"/>
                <rect x="559.3" y="714.2" width="8.8" height="10" fill="#bcd3dd"/>
              </g>
              <g id="br-floor">
                <rect x="748.3" y="394.4" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="769.6" y="394.4" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="790.9" y="394.4" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="812.2" y="394.4" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="833.5" y="394.4" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="854.8" y="394.4" width="2.3" height="21.5" fill="#bcd3dd"/>
                <rect x="748.3" y="416.4" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="769.6" y="416.4" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="790.9" y="416.4" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="812.2" y="416.4" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="833.5" y="416.4" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="854.8" y="416.4" width="2.3" height="21.5" fill="#bcd3dd"/>
                <rect x="748.3" y="438.3" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="769.6" y="438.3" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="790.9" y="438.3" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="812.2" y="438.3" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="833.5" y="438.3" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="854.8" y="438.3" width="2.3" height="21.5" fill="#bcd3dd"/>
                <rect x="748.3" y="460.3" width="20.8" height="18.6" fill="#bcd3dd"/>
                <rect x="769.6" y="460.3" width="20.8" height="18.6" fill="#bcd3dd"/>
                <rect x="745.6" y="484.5" width="18.9" height="17" fill="#bcd3dd"/>
                <rect x="765" y="484.5" width="18.9" height="17" fill="#bcd3dd"/>
                <rect x="745.6" y="502.1" width="18.9" height="17" fill="#bcd3dd"/>
                <rect x="765" y="502.1" width="18.9" height="17" fill="#bcd3dd"/>
                <rect x="745.6" y="519.8" width="18.9" height="17" fill="#bcd3dd"/>
                <rect x="765" y="519.8" width="18.9" height="17" fill="#bcd3dd"/>
                <rect x="745.6" y="537.4" width="18.9" height="17" fill="#bcd3dd"/>
                <rect x="765" y="537.4" width="18.9" height="17" fill="#bcd3dd"/>
                <rect x="745.6" y="555" width="18.9" height="1.5" fill="#bcd3dd"/>
                <rect x="765" y="555" width="18.9" height="1.5" fill="#bcd3dd"/>
                <rect x="790.9" y="460.3" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="812.2" y="460.3" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="833.5" y="460.3" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="790.9" y="482.2" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="784.5" y="489.1" width="5.5" height="14.7" fill="#bcd3dd"/>
                <rect x="784.5" y="504.4" width="5.5" height="14.1" fill="#bcd3dd"/>
                <rect x="812.2" y="482.2" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="833.5" y="482.2" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="854.8" y="482.2" width="7" height="21.5" fill="#bcd3dd"/>
                <rect x="790.9" y="504.2" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="812.2" y="504.2" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="833.5" y="504.2" width="20.8" height="21.5" fill="#bcd3dd"/>
                <rect x="854.8" y="504.2" width="7" height="21.5" fill="#bcd3dd"/>
                <polygon points="861.8 481.8 854.8 481.8 854.8 460.3 857.1 460.3 857.1 475.2 861.8 475.2 861.8 481.8" fill="#bcd3dd"/>
              </g>
            </g>
            <g id="structural">
              <rect id="patio" x="248.2" y="67.4" width="411.2" height="131.7" fill="#dde7ed"/>
              <rect x="664.1" y="299" width="20" height="81.1" fill="#dde7ed"/>
              <polygon points="763.9 168.3 763.9 175 759.2 175 756.9 177.3 751.8 172.2 755.7 168.3 755.7 168.3 755.7 168.3 763.9 168.3" fill="#425563"/>
              <rect x="911.2" y="242.8" width="7.1" height="106.3" fill="#425563"/>
              <polygon points="918.3 376.4 918.3 407 911.2 407 911.2 393.9 844.2 393.9 844.2 386.9 911.2 386.9 911.2 376.4 918.3 376.4" fill="#425563"/>
              <polygon points="278.4 1132.1 278.4 1137 248.2 1137 248.2 1069.7 253.1 1069.7 253.1 1132.1 278.4 1132.1" fill="#425563"/>
              <polygon points="395.8 1145.8 395.8 1150.8 341.6 1150.8 341.6 1137 312.6 1137 312.6 1132.1 346.5 1132.1 346.5 1145.8 395.8 1145.8" fill="#425563"/>
              <polygon points="503.3 1116.3 503.3 1150.8 449.1 1150.8 449.1 1145.8 496.4 1145.8 496.4 1116.3 503.3 1116.3" fill="#425563"/>
              <polygon points="574.4 808.9 574.4 815.7 570.5 815.7 570.5 855.2 563.3 855.2 563.3 777.6 522.4 777.6 522.4 770.4 563.3 770.4 563.3 767.1 570.5 767.1 570.5 808.9 574.4 808.9" fill="#425563"/>
              <polygon points="570.5 909.2 570.5 976.5 552.8 976.5 552.8 969.6 563.3 969.6 563.3 909.2 570.5 909.2" fill="#425563"/>
              <polygon points="677.7 969.6 677.7 976.5 659.6 976.5 659.6 984.4 650.9 984.4 650.9 976.5 649.7 976.5 649.7 815.7 645.4 815.7 645.4 808.9 649.7 808.9 649.7 700.8 656.7 700.8 656.7 969.6 677.7 969.6" fill="#425563"/>
              <path d="M911.2,461.1v65.7h-86.9v4.9h86.9v122.8h-166.1v-82.8h16.2v-10h28.1v-29.9h4.2v-4.9h-4.2v-7.7h-4.9v37.7h-39.4v-72.6h39.5v4.5h4.7v-9.4h-41.7v-85.4h63.4v-7h-70.5v35.7h-4.1v4.5h4.1v61.6h-43.5v-5.1h-7.2v3.4h-3.2v6.2h53.9v157.7h-90.8v14.8h7v-4.3h256.7v100.1h4.8v-100.3h0v-200.1h-7.1ZM745,561.6h11v5.7h-11v-5.7Z" fill="#425563"/>
              <polygon points="918.2 816.5 918.2 976.5 887.8 976.5 887.8 969.6 913.4 969.6 913.4 816.5 918.2 816.5" fill="#425563"/>
              <polygon points="519.2 969.6 519.2 976.5 503.3 976.5 503.3 1009.8 496.4 1009.8 496.4 976.5 408.9 976.5 408.9 949.9 253.1 949.9 253.1 1015.8 248.2 1015.8 248.2 829 255.5 829 255.5 943 410.7 943 410.7 774.7 406.5 774.7 406.5 770.4 456.5 770.4 456.5 777.6 415.8 777.6 415.8 969.6 519.2 969.6" fill="#425563"/>
              <polygon points="373.9 770.4 373.9 774.7 336.8 774.7 336.8 770.4 348.3 770.4 348.3 743.1 255.5 743.1 255.5 770.4 270.4 770.4 270.4 774.9 255.5 774.9 255.5 781.5 248.2 781.5 248.2 633.3 255.5 633.3 255.5 677.5 259.5 677.5 259.5 681.9 255.5 681.9 255.5 738.6 321.3 738.6 321.3 681.9 285.5 681.9 285.5 677.5 360.6 677.5 360.6 681.9 352.8 681.9 352.8 696.2 348.3 696.2 348.3 681.9 325.8 681.9 325.8 738.6 348.3 738.6 348.3 727 352.8 727 352.8 770.4 373.9 770.4" fill="#425563"/>
              <path d="M442.7,486.8v4.5h18.7v26.6h29.6v78.6h-88v-105.2h4.5v-4.5h-9v30.1h-143v-223.2h-7.3v272.3h7.3v-42.1h143v153.7h-4.7v4.5h4.7v42.3h9v-6.5h-4.5v-116.7h86.4v116.7h-46.9v6.5h58v-6.5h-4.5v-68.7h4.4v-4.5h-4.4v-72.1h66.1v35.3h3.4v36.8h-34.7v4.5h32.8v68.7h-32.8v6.5h32.8v2.9h6.7v-164h-4.9v4.7h-69.5v-76.5h69.5v41.3h4.9v-41.3h3.1v-4.5h-130.7ZM491,513.3h-24.7v-22h24.7v22Z" fill="#425563"/>
              <polygon points="918.3 199.1 918.3 214.6 911.2 214.6 911.2 206.5 871.9 206.5 871.9 202.6 871.9 202.6 871.9 198.4 869.4 195.8 874.6 190.7 879.2 195.3 879.2 195.3 879.2 199.1 918.3 199.1" fill="#425563"/>
              <polygon points="855.9 172 850.7 177.2 848.4 174.9 843.7 174.9 843.7 168.1 852 168.1 852 168.2 852 168.1 855.9 172" fill="#425563"/>
              <polygon points="738.3 196 735.8 198.5 735.8 206.5 694.3 206.5 694.3 422.6 703.2 422.6 703.2 427.1 697 427.1 697 437.3 689.8 437.3 689.8 417.3 686 417.3 686 396.5 664.1 396.5 664.1 370 682.7 364.7 682.7 327 664.1 321.6 664.1 295.1 686 295.1 686 274.4 689.8 274.4 689.8 206.5 596.3 206.5 596.3 199.1 655.8 199.1 655.8 69.2 464 69.2 464 199.1 489.5 199.1 489.5 206.5 408.8 206.5 408.8 199.1 460.3 199.1 460.3 69.2 251.9 69.2 251.9 199.1 329.1 199.1 329.1 206.5 255.5 206.5 255.5 239.6 248.2 239.6 248.2 65.5 659.4 65.5 659.4 199.1 728.5 199.1 728.5 195.5 728.5 195.5 733.1 190.8 738.3 196" fill="#425563"/>
              <rect x="629.7" y="808.9" width="1.5" height="6.8" fill="#425563"/>
              <rect x="588.3" y="808.9" width="1.5" height="6.8" fill="#425563"/>
              <g id="stairs">
                <rect x="649.7" y="600" width="44.5" height="4.2" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <polygon points="690.4 650.9 688.5 650.9 688.5 649.5 655.8 649.4 655.9 650.8 654.4 650.9 654.4 647.3 690.4 647.3 690.4 650.9" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <line x1="657.1" y1="604.2" x2="657.1" y2="647.3" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <line x1="668.1" y1="604.2" x2="668.1" y2="647.3" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <line x1="679.2" y1="604.2" x2="679.2" y2="647.3" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <line x1="689.3" y1="604.2" x2="689.3" y2="647.3" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <line x1="737.3" y1="597.6" x2="694.2" y2="597.6" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <line x1="737.3" y1="586.7" x2="694.2" y2="586.7" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <line x1="737.3" y1="575.8" x2="694.2" y2="575.8" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <line x1="737.3" y1="564.8" x2="694.2" y2="564.8" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <line x1="737.3" y1="553.9" x2="694.2" y2="553.9" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <line x1="737.3" y1="542.9" x2="694.2" y2="542.9" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <line x1="737.3" y1="531" x2="694.2" y2="531" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <line x1="737.3" y1="519.7" x2="694.2" y2="519.7" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <line x1="737.3" y1="508.4" x2="694.2" y2="508.4" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <line x1="737.3" y1="497.1" x2="694.2" y2="497.1" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <line x1="693.2" y1="492.8" x2="694.2" y2="599.9" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".8"/>
                <line x1="689.3" y1="492.8" x2="690.3" y2="599.9" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".8"/>
                <line x1="737.4" y1="492.5" x2="737.4" y2="597.6" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <line x1="739.4" y1="494.6" x2="739.4" y2="596.5" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              </g>
              <g id="windows">
                <rect x="223.2" y="1039.7" width="53.9" height="6" transform="translate(-792.6 1292.9) rotate(-90)" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <line x1="250.8" y1="1069.4" x2="250.8" y2="1014.6" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="278" y="1132.7" width="34.6" height="5.3" transform="translate(590.6 2270.8) rotate(180)" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <line x1="312.4" y1="1134.8" x2="277.2" y2="1134.8" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="395.7" y="1146.6" width="53.4" height="5.3" transform="translate(844.8 2298.6) rotate(180)" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <line x1="448.8" y1="1148.7" x2="394.5" y2="1148.7" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="540.2" y="878.7" width="53.8" height="6.8" transform="translate(1449.2 315) rotate(90)" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <line x1="566.3" y1="855.5" x2="566.3" y2="910.2" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="889.3" y="785.7" width="55.1" height="6.8" transform="translate(1705.9 -127.7) rotate(90)" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <line x1="916" y1="761.8" x2="916" y2="817.9" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="887.3" y="430.7" width="55.1" height="6.8" transform="translate(1348.9 -480.7) rotate(90)" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <line x1="914" y1="406.8" x2="914" y2="462.9" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="898.5" y="357.9" width="32.6" height="6.8" transform="translate(1276.1 -553.5) rotate(90)" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <line x1="914" y1="345.2" x2="914" y2="378.4" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="898.5" y="226.3" width="32.6" height="6.8" transform="translate(1144.5 -685.1) rotate(90)" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <line x1="914" y1="213.6" x2="914" y2="246.8" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="846.4" y="179.6" width="30.6" height="6.8" transform="translate(381.7 -555.7) rotate(45)" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <line x1="850.4" y1="172.8" x2="872.4" y2="194.8" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="731" y="179.6" width="30.6" height="6.8" transform="translate(1403.4 -215.4) rotate(135)" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <line x1="757.6" y1="172.8" x2="735.6" y2="194.8" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="763.9" y="168.3" width="79.9" height="6.8" transform="translate(1607.6 343.3) rotate(180)" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <line x1="843.3" y1="172.5" x2="762" y2="172.5" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="488.3" y="199.1" width="27.9" height="6.8" transform="translate(1004.5 405) rotate(180)" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <line x1="516.1" y1="203.3" x2="487.7" y2="203.3" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="570.6" y="199.1" width="25.8" height="6.8" transform="translate(1166.9 405) rotate(180)" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <line x1="596.2" y1="203.3" x2="570" y2="203.3" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="517.1" y="199.1" width="53.2" height="6.8" transform="translate(1087.4 405) rotate(180)" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <line x1="570" y1="203.3" x2="515.9" y2="203.3" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="518.5" y="970.2" width="34.3" height="7.3" transform="translate(1071.4 1947.6) rotate(-180)" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <line x1="552.7" y1="972.9" x2="517.7" y2="972.9" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="631.6" y="809.2" width="13.9" height="7.8" transform="translate(1277 1626.2) rotate(-180)" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <line x1="645.4" y1="812.2" x2="631.2" y2="812.2" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="574.4" y="809.2" width="13.9" height="7.8" transform="translate(1162.7 1626.2) rotate(-180)" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <line x1="588.2" y1="812.2" x2="574.1" y2="812.2" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="227.2" y="802.1" width="47.7" height="6" transform="translate(-554 1056.2) rotate(-90)" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <line x1="251.8" y1="828.8" x2="251.8" y2="780.2" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="217.3" y="596.8" width="67.7" height="6" transform="translate(-348.7 850.9) rotate(-90)" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <line x1="251.8" y1="633.3" x2="251.8" y2="564.4" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="224.1" y="263.6" width="54" height="6" transform="translate(-15.5 517.7) rotate(-90)" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <line x1="251.8" y1="293.3" x2="251.8" y2="238.4" fill="none" stroke="#425563" strokeMiterlimit="10"/>
              </g>
              <rect x="548.2" y="545.9" width="2.7" height="31.7" transform="translate(1111.4 12.2) rotate(90)" fill="none" stroke="#425563" strokeMiterlimit="10"/>
              <g id="doors">
                <polygon points="352.8 727 374.6 705.3 372.4 703.4 350.5 725.8 352.8 727" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="391.3" y="643.7" width="2.6" height="34.4" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="259.5" y="681.9" width="1.8" height="26.4" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="286.4" y="755.1" width="1.8" height="33.8" transform="translate(1059.4 484.7) rotate(90)" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <rect x="317.9" y="756.5" width="2.1" height="34.3" transform="translate(1092.6 454.7) rotate(90)" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <rect x="348.1" y="182.1" width="1.8" height="39.8" transform="translate(551.1 -147) rotate(90)" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <rect x="375.8" y="183.8" width="2.1" height="39.6" transform="translate(580.5 -173.3) rotate(90)" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <rect x="406.8" y="682.3" width="2.7" height="36.1" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="499.9" y="686.8" width="2.7" height="31.7" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="793.6" y="531.7" width="2.7" height="30.8" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="768.3" y="474.1" width="1.9" height="30.8" transform="translate(1258.7 -279.7) rotate(90)" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="782.9" y="862.6" width="2.6" height="214.8" transform="translate(1754.2 185.8) rotate(90)" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="498.5" y="1007.6" width="2.6" height="111.8" transform="translate(999.7 2127) rotate(180)" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="701.3" y="387" width="1.9" height="35.6" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="499.9" y="613.7" width="2.7" height="31.7" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="407.5" y="491.3" width="2.7" height="31.7" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="841.5" y="393.9" width="2.7" height="31.7" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="627.6" y="768.9" width="2.1" height="40.9" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <rect x="631.3" y="682.3" width="2.1" height="34.9" transform="translate(-67.4 1332.1) rotate(-90)" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <g>
                  <path d="M457.5,777.5v33.7h-1.6v-33.7h1.6M458,777h-2.6v34.7h2.6v-34.7h0Z" fill="#425563"/>
                  <path d="M523.1,777.5v33.7h-1.6v-33.7h1.6M523.6,777h-2.6v34.7h2.6v-34.7h0Z" fill="#425563"/>
                  <path d="M457.9,811.4c8.2-1.5,16.1-4.4,22-10.5,6.1-6.3,8.8-14.9,9.6-23.5.6,4.4,1.5,8.9,3.1,13s3.9,8.1,7,11.3c5.3,5.4,13.8,9.4,21.5,9.6" fill="none" stroke="#425563" strokeLinejoin="round" strokeWidth=".5"/>
                </g>
                <line x1="329.1" y1="199.1" x2="408.8" y2="199.1" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <line x1="589.8" y1="815.7" x2="629.7" y2="815.7" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <path d="M261.3,708.3s24.2,1.5,24.2-26.4" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <path d="M372.4,703.4s-11.9-10.7-19.6-7.2" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <path d="M409.5,682.3s32.9,5,32.9,35.4" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <path d="M391.3,643.7s-30.7-.4-30.7,33.8" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <path d="M627.6,768.9s-37.8-2.2-37.8,39.9" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <path d="M614.9,698.7s-2-33.1,34.8-33.1" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <path d="M502.6,686.8s28.2,1.6,28.2,31" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <path d="M502.6,613.7s28.2-3.3,28.2,30.8" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <path d="M796.3,562.5s28-2.6,28-30.8" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <path d="M753.8,490.4s-4.6,28.7,30.6,28.7" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <path d="M841.5,425.6s-30.6,3.3-30.6-31.7" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <path d="M703.2,387s33.1,3.7,33.1,35.6" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <path d="M410.8,523s31.9,3.8,31.9-31.7" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <path d="M533.8,560.4s-3.1-27.8,31.7-27.8" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              </g>
            </g>
            <g id="furniture">
              <g>
                <g>
                  <path d="M387.94,1022.2l-.5,5.14-71.79-.66c-7.35,0-16.71,4.92-20.79,10.94-4.2,6.19-7.62,14.57-7.62,27.34,0,13.84,2.99,21.32,8.01,29.41,3.02,4.87,10.18,8.87,15.97,8.87l76.19-.67.53,5.46c.32,2.93,2.96,5.05,5.89,4.73v-.63l-1.05-9.61,62.94-.55c9.91,0,18.72-4.94,21.95-14.17l1.07-3.06c4.48-12.82,4.48-26.75,0-39.58h0c-3.87-11.07-14.43-17.23-26.31-17.23l-59.62-.55,1.01-9.29v-.63c-2.93-.32-5.57,1.8-5.89,4.73Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M482.4,1064.96c0,6.74-1.12,13.48-3.36,19.89l-1.07,3.06c-3.1,8.87-11.62,14.38-22.24,14.38l-62.6.55,1.01,9.27v.66c0,.16-.12.29-.27.3-3.1.34-5.89-1.91-6.23-5l-.5-5.19-75.91.66c-5.87,0-13.15-4.05-16.23-9.02-5.1-8.22-8.06-15.7-8.06-29.57,0-10.9,2.51-19.9,7.67-27.52,4.14-6.11,13.58-11.07,21.04-11.07l71.52.66.47-4.87s0,0,0,0c.34-3.1,3.13-5.34,6.23-5,.16.02.27.15.27.3v.63l-.98,8.99,59.28.55c12.64,0,22.84,6.68,26.59,17.44,2.24,6.41,3.36,13.15,3.36,19.89ZM392.48,1102.54c0-.07.03-.15.08-.2.06-.06.14-.1.23-.1l62.94-.55c10.35,0,18.66-5.35,21.66-13.97l1.07-3.06c4.43-12.7,4.43-26.68,0-39.37-3.67-10.5-13.64-17.03-26.02-17.03l-59.62-.55c-.09,0-.17-.04-.23-.1-.06-.06-.08-.15-.08-.24l1.01-9.29v-.32c-2.65-.15-4.99,1.81-5.28,4.48l-.5,5.14c-.02.16-.15.28-.31.28l-71.79-.66c-7.28,0-16.49,4.85-20.53,10.81-5.09,7.51-7.57,16.4-7.57,27.17,0,13.73,2.92,21.12,7.96,29.25,2.99,4.81,10.03,8.73,15.71,8.73l76.19-.67c.16,0,.29.12.31.28l.53,5.46c.15,1.33.8,2.54,1.85,3.38.98.79,2.19,1.17,3.43,1.1v-.35l-1.05-9.58s0-.02,0-.03Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                </g>
                <g>
                  <path d="M382.83,1044.18c-4.65,14.25-4.65,27.32,0,41.57-3,1.19-6.53,2.92-9.01,4.84-5.41-16.56-5.41-34.69,0-51.25,3.01,1.96,5.52,3.24,9.01,4.84Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M383.14,1085.75c0,.12-.07.24-.19.28-3.58,1.42-6.84,3.17-8.93,4.8-.08.06-.18.08-.28.05-.1-.03-.17-.1-.2-.2-5.41-16.59-5.41-34.85,0-51.44.03-.09.1-.16.19-.19.09-.03.19-.02.27.03,3.09,2.01,5.63,3.29,8.97,4.82.14.06.21.23.16.37-4.61,14.12-4.61,27.27,0,41.38.01.03.02.06.02.09ZM379.06,1064.96c0-6.8,1.13-13.59,3.4-20.62-3.13-1.44-5.57-2.67-8.46-4.53-5.21,16.23-5.21,34.04,0,50.27,2.77-2.06,6.37-3.67,8.47-4.51-2.27-7.03-3.4-13.82-3.4-20.61Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                </g>
                <g>
                  <path d="M434.64,1085.75c4.58-16.67,3.53-26.65,0-41.57,5.33-1.19,9.7-2.92,14.09-4.84,9.59,16.56,9.59,34.69,0,51.25-5.34-1.96-7.9-3.24-14.09-4.84Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M456.22,1064.96c0,8.73-2.41,17.47-7.22,25.78-.07.13-.23.18-.37.13-1.44-.53-2.65-1-3.83-1.45-3.2-1.24-5.72-2.22-10.23-3.38-.08-.02-.15-.07-.19-.14-.04-.07-.05-.16-.03-.23,4.51-16.39,3.64-26.02,0-41.42-.02-.08,0-.16.04-.23.04-.07.11-.12.19-.14,5.11-1.14,9.31-2.75,14.03-4.82.14-.06.31,0,.39.13,4.81,8.31,7.22,17.04,7.22,25.78ZM448.59,1090.21c9.34-16.29,9.34-34.19,0-50.48-4.57,1.99-8.66,3.55-13.59,4.68,3.51,14.93,4.4,24.99,0,41.12,4.36,1.14,6.86,2.1,10,3.32,1.11.43,2.25.87,3.58,1.36Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                </g>
                <g>
                  <g>
                    <path d="M388.73,1035.75h-13.81l10.39,5.42s1.26.05,3.42.09v-5.51Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M389.03,1035.75v5.51c0,.08-.03.16-.09.22-.06.06-.14.09-.22.09-2.14-.04-3.42-.09-3.43-.09-.04,0-.09-.01-.13-.03l-10.39-5.42c-.12-.06-.19-.21-.16-.34.03-.14.16-.23.3-.23h13.81c.17,0,.31.14.31.31ZM388.42,1040.95v-4.89h-12.26l9.22,4.81c.27.01,1.36.05,3.04.08Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  </g>
                  <g>
                    <path d="M391.18,1035.75v5.53c6.94.09,20.56-.03,32.74-1.86v-3.67h-32.74Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M424.22,1035.75v3.67c0,.15-.11.28-.26.3-12.17,1.83-25.77,1.96-32.79,1.87-.17,0-.3-.14-.3-.31v-5.53c0-.17.14-.31.31-.31h32.74c.17,0,.31.14.31.31ZM423.61,1039.15v-3.1h-32.13v4.92c7.03.08,20.23-.06,32.13-1.82Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  </g>
                  <g>
                    <path d="M426.36,1039.23c5.05-.81,9.8-1.94,13.66-3.48h-13.66v3.48Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M440.33,1035.75c0,.12-.07.24-.19.28-3.57,1.43-8.19,2.61-13.72,3.5-.09.01-.18-.01-.25-.07-.07-.06-.11-.14-.11-.23v-3.48c0-.17.14-.31.31-.31h13.66c.15,0,.27.1.3.25,0,.02,0,.04,0,.06ZM426.67,1038.87c4.55-.75,8.47-1.7,11.66-2.82h-11.66v2.82Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M388.73,1093.75h-13.81l10.39-5.42s1.26-.05,3.42-.09v5.51Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M389.03,1088.24v5.51c0,.17-.14.31-.31.31h-13.81c-.14,0-.26-.1-.3-.23-.03-.14.03-.28.16-.34l10.39-5.42s.08-.03.13-.03c.01,0,1.29-.05,3.43-.09.08,0,.16.03.22.09.06.06.09.14.09.22ZM388.42,1093.45v-4.89c-1.68.03-2.76.07-3.04.08l-9.22,4.81h12.26Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  </g>
                  <g>
                    <path d="M391.18,1093.75v-5.53c6.94-.09,20.56.03,32.74,1.86v3.67h-32.74Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M424.22,1090.09v3.67c0,.17-.14.31-.31.31h-32.74c-.17,0-.31-.14-.31-.31v-5.53c0-.17.13-.3.3-.31,7.02-.09,20.61.03,32.79,1.87.15.02.26.15.26.3ZM423.61,1093.45v-3.1c-11.9-1.77-25.1-1.91-32.13-1.82v4.92h32.13Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  </g>
                  <g>
                    <path d="M426.36,1090.27c5.05.81,9.8,1.94,13.66,3.48h-13.66v-3.48Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M440.33,1093.75s0,.04,0,.06c-.03.14-.15.25-.3.25h-13.66c-.17,0-.31-.14-.31-.31v-3.48c0-.09.04-.17.11-.23.07-.06.16-.08.25-.07,5.53.89,10.15,2.07,13.72,3.5.12.05.19.16.19.28ZM426.67,1093.45h11.66c-3.2-1.12-7.11-2.07-11.66-2.82v2.82Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  </g>
                </g>
                <g>
                  <path d="M300.31,1048.77c-3.85,10.71-3.85,22.42,0,33.13-2.01.72-4.02,1.45-6.03,2.17-4.36-12.11-4.36-25.36,0-37.47,2.01.72,4.02,1.45,6.03,2.17Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M300.61,1081.9c0,.13-.08.24-.2.29l-6.03,2.17c-.08.03-.16.02-.23-.01-.07-.03-.13-.1-.16-.17-4.37-12.15-4.37-25.53,0-37.68.06-.16.23-.24.39-.18l6.03,2.17c.08.03.14.08.17.16.03.07.04.16.01.23-3.82,10.62-3.82,22.31,0,32.92.01.03.02.07.02.1ZM294.46,1083.68l5.46-1.97c-3.73-10.58-3.73-22.19,0-32.76l-5.46-1.97c-4.19,11.84-4.19,24.85,0,36.69Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                </g>
                <g>
                  <path d="M310.45,1035.61c-3.41,1.9-6.47,5.26-8.3,9.78-.22.54-.64.78-1.15.61-1.01-.35-2.01-.76-3-1.24-1.19-.54-1.84-3.25-1.04-4.5,2.74-4.53,6.52-7.71,10.47-9.38.47-.2.94-.07,1.26.28.63.71,1.31,1.36,2.01,1.96.8.71.67,1.96-.25,2.49Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M311.53,1034.28c0,.06,0,.13,0,.19-.06.59-.4,1.11-.92,1.41,0,0,0,0,0,0-3.56,1.99-6.46,5.41-8.16,9.63-.28.7-.88,1.01-1.53.78-1.02-.35-2.04-.78-3.03-1.26-.58-.26-1.07-.95-1.35-1.89-.34-1.14-.27-2.34.18-3.04,2.62-4.34,6.39-7.72,10.61-9.5.58-.24,1.19-.11,1.61.36.62.69,1.28,1.34,1.98,1.93.41.36.63.86.63,1.39ZM310.3,1035.35c.35-.2.58-.55.62-.94.04-.4-.11-.78-.42-1.05-.71-.61-1.4-1.27-2.03-1.98-.24-.27-.58-.35-.91-.2-4.1,1.73-7.77,5.02-10.33,9.26-.36.56-.41,1.58-.12,2.55.23.76.61,1.33,1.03,1.52.98.47,1.98.89,2.97,1.23.43.15.65-.16.76-.43,1.76-4.35,4.75-7.88,8.43-9.93Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                </g>
                <g>
                  <path d="M310.45,1094.97c-3.41-1.9-6.47-5.26-8.3-9.78-.22-.54-.64-.78-1.15-.61-1.01.35-2.01.76-3,1.24-1.19.54-1.84,3.25-1.04,4.5,2.74,4.53,6.52,7.71,10.47,9.38.47.2.94.07,1.26-.28.63-.71,1.31-1.36,2.01-1.96.8-.71.67-1.96-.25-2.49Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M311.53,1096.31c0,.53-.22,1.02-.63,1.38-.7.59-1.37,1.24-1.98,1.93-.41.47-1.03.6-1.61.36-4.22-1.78-7.99-5.16-10.61-9.51-.45-.7-.52-1.9-.18-3.04.28-.94.78-1.64,1.36-1.9.99-.48,2.01-.9,3.02-1.25.65-.22,1.25.09,1.53.78,1.7,4.22,4.6,7.64,8.16,9.63,0,0,0,0,0,0,.53.3.86.82.92,1.41,0,.06,0,.13,0,.19ZM296.92,1088.87c0,.51.1.97.3,1.29,2.56,4.24,6.23,7.53,10.33,9.26.34.14.67.07.91-.2.64-.71,1.32-1.38,2.04-1.99.3-.27.45-.65.41-1.05-.04-.4-.27-.74-.62-.94-3.68-2.06-6.67-5.58-8.43-9.93-.11-.28-.34-.58-.76-.44-.99.34-1.99.76-2.97,1.23-.42.19-.81.76-1.03,1.52-.13.42-.19.85-.19,1.25ZM310.45,1094.97h0s0,0,0,0Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                </g>
                <g>
                  <path d="M476.83,1054c2.56,7.11,2.56,14.89,0,22-1.18-.43-2.36-.85-3.54-1.28,2.26-6.29,2.26-13.17,0-19.45,1.18-.43,2.36-.85,3.54-1.28Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M479.05,1065c0,3.76-.64,7.52-1.93,11.11-.06.16-.23.24-.39.18l-3.54-1.28c-.08-.03-.14-.08-.17-.16-.03-.07-.04-.16-.01-.23,2.23-6.2,2.23-13.04,0-19.24-.06-.16.03-.33.18-.39l3.54-1.28c.08-.03.16-.02.23.01.07.03.13.1.16.17,1.29,3.58,1.93,7.34,1.93,11.1ZM476.64,1075.61c2.39-6.86,2.39-14.37,0-21.22l-2.97,1.07c2.15,6.17,2.15,12.92,0,19.08l2.97,1.07Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                </g>
                <g>
                  <path d="M463.23,1089.44c3.01-1.68,5.72-4.65,7.33-8.65.19-.47.56-.69,1.01-.54.89.31,1.77.67,2.65,1.1,1.05.47,1.63,2.87.92,3.98-2.42,4-5.77,6.82-9.26,8.29-.42.18-.83.07-1.11-.25-.56-.63-1.15-1.2-1.77-1.73-.7-.63-.59-1.73.22-2.2Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M475.77,1084.06c0,.51-.1,1.02-.36,1.43-2.32,3.84-5.66,6.83-9.4,8.41-.52.22-1.08.1-1.46-.33-.54-.61-1.13-1.18-1.74-1.7-.42-.37-.62-.89-.56-1.42.05-.54.36-1,.83-1.28,0,0,0,0,0,0,3.14-1.75,5.7-4.77,7.2-8.5.26-.64.8-.92,1.4-.71.9.31,1.81.69,2.68,1.11.52.23.96.85,1.22,1.7.11.38.19.84.19,1.29ZM462.85,1090.62c0,.3.13.58.36.79.63.53,1.24,1.13,1.8,1.76.2.23.48.29.77.17,3.62-1.53,6.86-4.43,9.11-8.17.31-.49.35-1.38.1-2.22-.2-.65-.54-1.16-.89-1.32-.86-.42-1.74-.78-2.63-1.09-.28-.1-.49.03-.63.36-1.55,3.85-4.21,6.98-7.47,8.8-.3.17-.49.47-.53.81,0,.04,0,.07,0,.11Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                </g>
                <g>
                  <path d="M463.23,1040.56c3.01,1.68,5.72,4.65,7.33,8.65.19.47.56.69,1.01.54.89-.31,1.77-.67,2.65-1.1,1.05-.47,1.63-2.87.92-3.98-2.42-4-5.77-6.82-9.26-8.29-.42-.18-.83-.07-1.11.25-.56.63-1.15,1.2-1.77,1.73-.7.63-.59,1.73.22,2.2Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M475.77,1045.93c0,.45-.08.91-.19,1.29-.25.84-.7,1.46-1.22,1.7-.87.42-1.77.79-2.68,1.11-.59.2-1.14-.08-1.4-.71-1.5-3.72-4.06-6.74-7.2-8.5,0,0,0,0,0,0-.47-.27-.78-.74-.83-1.28-.05-.54.15-1.06.56-1.42.62-.53,1.21-1.1,1.75-1.71.38-.42.94-.55,1.46-.33,3.74,1.58,7.07,4.57,9.4,8.42.26.4.36.91.36,1.42ZM463.38,1040.29c3.26,1.82,5.91,4.95,7.47,8.8.14.34.35.46.63.36.88-.31,1.76-.67,2.62-1.08.36-.16.7-.67.9-1.32.25-.84.21-1.73-.1-2.22-2.26-3.75-5.5-6.65-9.12-8.18-.28-.12-.56-.06-.77.17-.56.63-1.17,1.22-1.8,1.76-.26.23-.39.56-.35.9.03.34.23.63.53.81Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M771.28,750.47v141.87c0,5.54-2.86,10.72-7.62,13.55-5.82,3.46-15.85,6.8-32.85,6.8s-26.92-3.41-32.78-6.9c-4.78-2.84-7.69-8.02-7.69-13.59v-141.65c0-2.51.47-4.97,1.35-7.26.7-.06,3.91-.57,7.98-4.93,4.62-4.94,10.24-4.44,10.24-4.44l-1.71-5.14s-.12,0-.34.02c1.28-.59,2.64-1.16,4.07-1.68l.93,3.9s8.72-2.09,18.09-2.22c9.37.12,18.09,2.22,18.09,2.22l.99-4.13c1.71.65,3.31,1.37,4.81,2.14-1.09-.15-1.77-.17-1.77-.17l-1.71,5.15s5.62-.51,10.24,4.44c4.61,4.94,8.13,4.94,8.44,5.11,1.05,2.46,1.23,4.18,1.23,6.92Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M730.81,913c-14.12,0-25.2-2.34-32.94-6.94-4.83-2.87-7.84-8.18-7.84-13.85v-141.65c0-2.53.46-5.01,1.38-7.37.04-.11.14-.18.26-.19.59-.05,3.74-.5,7.78-4.84,3.95-4.24,8.58-4.56,10.03-4.55l-1.5-4.5h-.1c-.14.01-.28-.08-.31-.23s.03-.29.17-.35c1.35-.63,2.73-1.2,4.1-1.69.08-.03.17-.02.25.02.08.04.13.11.15.2l.86,3.61c1.61-.36,9.53-2.05,17.86-2.16,8.34.11,16.26,1.79,17.87,2.16l.92-3.84c.02-.09.08-.16.15-.2.08-.04.17-.05.25-.02,1.64.63,3.27,1.35,4.84,2.15.13.07.2.22.15.36-.04.14-.19.23-.33.21-.7-.1-1.23-.14-1.51-.16l-1.5,4.51c1.46-.02,6.08.32,10.03,4.55,3.9,4.18,6.95,4.75,7.96,4.94.21.04.32.06.4.11.06.03.11.09.14.15,1.07,2.5,1.26,4.26,1.26,7.04v141.87c0,5.67-2.98,10.96-7.77,13.81-7.65,4.54-18.75,6.85-33.01,6.85ZM691.91,743.58c-.84,2.24-1.27,4.58-1.27,6.97v141.65c0,5.46,2.89,10.56,7.54,13.33,7.65,4.55,18.62,6.86,32.63,6.86s25.14-2.27,32.69-6.76c4.61-2.74,7.47-7.83,7.47-13.29v-141.87c0-2.64-.17-4.33-1.15-6.66-.04,0-.1-.02-.15-.03-1.05-.2-4.26-.81-8.29-5.13-4.45-4.77-9.93-4.35-9.99-4.34-.1,0-.2-.03-.27-.11-.06-.08-.08-.19-.05-.29l1.71-5.15c.04-.13.17-.2.3-.21,0,0,.04,0,.1,0-.96-.45-1.95-.87-2.93-1.26l-.91,3.79c-.04.16-.21.26-.37.23-.09-.02-8.8-2.08-18.03-2.21-9.21.12-17.93,2.19-18.02,2.21-.08.02-.16,0-.23-.04-.07-.04-.12-.11-.14-.19l-.85-3.57c-1.06.39-2.13.83-3.18,1.31l1.67,5c.03.1.01.21-.05.29-.06.08-.17.12-.27.11-.05,0-5.54-.42-9.99,4.34-3.87,4.15-7.03,4.88-7.99,5.01Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                </g>
                <g>
                  <g>
                    <rect x="749.15" y="806.81" width="3.41" height="74.91" rx="1.71" ry="1.71" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M751.98,882.03h-2.25c-.49,0-.89-.4-.89-.89v-73.74c0-.49.4-.89.89-.89h2.25c.49,0,.89.4.89.89v73.74c0,.49-.4.89-.89.89ZM749.73,807.12c-.15,0-.28.12-.28.28v73.74c0,.15.12.28.28.28h2.25c.15,0,.28-.12.28-.28v-73.74c0-.15-.12-.28-.28-.28h-2.25Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  </g>
                  <g>
                    <rect x="741.11" y="806.81" width="3.41" height="74.91" rx="1.71" ry="1.71" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M743.94,882.03h-2.25c-.49,0-.89-.4-.89-.89v-73.74c0-.49.4-.89.89-.89h2.25c.49,0,.89.4.89.89v73.74c0,.49-.4.89-.89.89ZM741.7,807.12c-.15,0-.28.12-.28.28v73.74c0,.15.12.28.28.28h2.25c.15,0,.28-.12.28-.28v-73.74c0-.15-.12-.28-.28-.28h-2.25Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  </g>
                  <g>
                    <path d="M734.89,806.81h0c.94,0,1.71.76,1.71,1.71v71.49c0,.94-.76,1.71-1.71,1.71h0c-.94,0-1.71-.76-1.71-1.71v-71.49c0-.94.76-1.71,1.71-1.71Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M736.02,882.03h-2.25c-.49,0-.89-.4-.89-.89v-73.74c0-.49.4-.89.89-.89h2.25c.49,0,.89.4.89.89v73.74c0,.49-.4.89-.89.89ZM733.77,807.12c-.15,0-.28.12-.28.28v73.74c0,.15.12.28.28.28h2.25c.15,0,.28-.12.28-.28v-73.74c0-.15-.12-.28-.28-.28h-2.25Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  </g>
                  <g>
                    <path d="M726.86,806.81h0c.94,0,1.71.76,1.71,1.71v71.49c0,.94-.76,1.71-1.71,1.71h0c-.94,0-1.71-.76-1.71-1.71v-71.49c0-.94.76-1.71,1.71-1.71Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M727.98,882.03h-2.25c-.49,0-.89-.4-.89-.89v-73.74c0-.49.4-.89.89-.89h2.25c.49,0,.89.4.89.89v73.74c0,.49-.4.89-.89.89ZM725.73,807.12c-.15,0-.28.12-.28.28v73.74c0,.15.12.28.28.28h2.25c.15,0,.28-.12.28-.28v-73.74c0-.15-.12-.28-.28-.28h-2.25Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  </g>
                  <g>
                    <path d="M719.11,806.81h0c.94,0,1.71.76,1.71,1.71v71.49c0,.94-.76,1.71-1.71,1.71h0c-.94,0-1.71-.76-1.71-1.71v-71.49c0-.94.76-1.71,1.71-1.71Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M720.23,882.03h-2.25c-.49,0-.89-.4-.89-.89v-73.74c0-.49.4-.89.89-.89h2.25c.49,0,.89.4.89.89v73.74c0,.49-.4.89-.89.89ZM717.98,807.12c-.15,0-.28.12-.28.28v73.74c0,.15.12.28.28.28h2.25c.15,0,.28-.12.28-.28v-73.74c0-.15-.12-.28-.28-.28h-2.25Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  </g>
                  <g>
                    <rect x="709.37" y="806.81" width="3.41" height="74.91" rx="1.71" ry="1.71" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M712.2,882.03h-2.25c-.49,0-.89-.4-.89-.89v-73.74c0-.49.4-.89.89-.89h2.25c.49,0,.89.4.89.89v73.74c0,.49-.4.89-.89.89ZM709.95,807.12c-.15,0-.28.12-.28.28v73.74c0,.15.12.28.28.28h2.25c.15,0,.28-.12.28-.28v-73.74c0-.15-.12-.28-.28-.28h-2.25Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M753.51,799.82c-14.9-4.65-30.85-4.65-45.75,0-1.18.37-2.44-.27-2.84-1.45-2.06-6.06-4.13-12.11-6.19-18.17-.42-1.23.26-2.56,1.49-2.95,19.79-6.3,41.04-6.3,60.83,0,1.23.39,1.9,1.72,1.49,2.95-2.06,6.06-4.13,12.11-6.19,18.17-.4,1.18-1.66,1.82-2.84,1.45Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M707.08,800.23c-1.08,0-2.07-.68-2.44-1.76l-6.19-18.17c-.23-.67-.18-1.39.14-2.02.32-.63.87-1.1,1.54-1.31,19.96-6.35,41.06-6.35,61.02,0,.67.21,1.22.68,1.54,1.31.32.63.37,1.35.14,2.02l-6.19,18.17c-.46,1.34-1.87,2.07-3.22,1.64-14.9-4.65-30.66-4.65-45.56,0-.26.08-.52.12-.78.12ZM730.64,772.8c-10.2,0-20.41,1.58-30.32,4.73-.52.16-.94.52-1.18,1.01-.25.49-.28,1.04-.11,1.55l6.19,18.17c.35,1.03,1.43,1.58,2.46,1.26,15.02-4.69,30.9-4.69,45.93,0h0c1.03.32,2.11-.23,2.46-1.26l6.19-18.17c.18-.52.14-1.07-.11-1.55-.24-.49-.66-.84-1.18-1.01-9.92-3.16-20.12-4.73-30.32-4.73Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  </g>
                  <g>
                    <path d="M753.51,799.82c-14.9-4.65-30.85-4.65-45.75,0-1.18.37-2.44-.27-2.84-1.45-2.06-6.06-4.13-12.11-6.19-18.17-.42-1.23.26-2.56,1.49-2.95,19.79-6.3,41.04-6.3,60.83,0,1.23.39,1.9,1.72,1.49,2.95-2.06,6.06-4.13,12.11-6.19,18.17-.4,1.18-1.66,1.82-2.84,1.45Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M707.08,800.23c-1.08,0-2.07-.68-2.44-1.76l-6.19-18.17c-.23-.67-.18-1.39.14-2.02.32-.63.87-1.1,1.54-1.31,19.96-6.35,41.06-6.35,61.02,0,.67.21,1.22.68,1.54,1.31.32.63.37,1.35.14,2.02l-6.19,18.17c-.46,1.34-1.87,2.07-3.22,1.64-14.9-4.65-30.66-4.65-45.56,0-.26.08-.52.12-.78.12ZM730.64,772.8c-10.2,0-20.41,1.58-30.32,4.73-.52.16-.94.52-1.18,1.01-.25.49-.28,1.04-.11,1.55l6.19,18.17c.35,1.03,1.43,1.58,2.46,1.26,15.02-4.69,30.9-4.69,45.93,0h0c1.03.32,2.11-.23,2.46-1.26l6.19-18.17c.18-.52.14-1.07-.11-1.55-.24-.49-.66-.84-1.18-1.01-9.92-3.16-20.12-4.73-30.32-4.73Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M758.38,802.82l4.08-9.23c.09-.2.29-.34.51-.34h1.22c.31,0,.56.25.56.56v23.56c0,.33-.26.59-.59.59h-5.24c-.33,0-.59-.27-.59-.59v-14.31c0-.08.02-.17.05-.24Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M764.16,818.27h-5.24c-.49,0-.9-.4-.9-.9v-14.31c0-.13.03-.25.08-.36l4.08-9.23c.14-.31.45-.52.79-.52h1.22c.48,0,.87.39.87.87v23.56c0,.5-.4.9-.9.9ZM758.66,802.94h0s-.03.08-.03.12v14.31c0,.16.13.29.29.29h5.24c.16,0,.29-.13.29-.29v-23.56c0-.14-.11-.26-.26-.26h-1.22c-.1,0-.19.06-.23.15l-4.08,9.23Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  </g>
                  <g>
                    <path d="M758.38,846.39l5.15,9.23c.09.2.29.34.51.34h.15c.31,0,.56-.25.56-.56v-33.21c0-.33-.26-.59-.59-.59h-5.24c-.33,0-.59.27-.59.59v23.97c0,.08.02.17.05.24Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M764.19,856.27h-.15c-.34,0-.65-.2-.79-.52l-5.15-9.23c-.05-.12-.08-.24-.08-.36v-23.97c0-.5.4-.9.9-.9h5.24c.49,0,.9.4.9.9v33.21c0,.48-.39.87-.87.87ZM758.66,846.26l5.14,9.22c.05.12.15.18.25.18h.15c.14,0,.26-.12.26-.26v-33.21c0-.16-.13-.29-.29-.29h-5.24c-.16,0-.29.13-.29.29v23.97s0,.07.02.11Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  </g>
                  <g>
                    <path d="M758.32,855.42c0-.17.23-.23.31-.08,1.26,2.34,6.12,10.28,6.12,10.48v22.24c0,.38-.48.54-.71.24-1.7-2.3-5.72-7.89-5.72-8.09,0,0-.03-20.87,0-24.79Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M764.36,888.76c-.21,0-.42-.1-.55-.28-.06-.08-5.78-7.84-5.78-8.27,0-.21-.03-20.91,0-24.79,0-.22.14-.4.36-.45.21-.05.42.04.52.23.64,1.19,2.22,3.84,3.61,6.17,2.55,4.27,2.55,4.3,2.55,4.45v22.24c0,.31-.19.57-.48.67-.07.02-.15.04-.22.04ZM758.64,880.14c.32.59,3.75,5.38,5.66,7.97.02.03.06.04.09.03.03,0,.06-.03.06-.09v-22.18c-.16-.34-1.33-2.3-2.46-4.2-1.23-2.07-2.61-4.37-3.36-5.71-.02,4.82,0,22.98,0,24.18ZM758.63,855.42h0s0,0,0,0Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M702.94,802.82l-4.08-9.23c-.09-.2-.29-.34-.51-.34h-1.22c-.31,0-.56.25-.56.56v23.56c0,.33.26.59.59.59h5.24c.33,0,.59-.27.59-.59v-14.31c0-.08-.02-.17-.05-.24Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M702.4,818.27h-5.24c-.49,0-.9-.4-.9-.9v-23.56c0-.48.39-.87.87-.87h1.22c.34,0,.65.2.79.52l4.08,9.23c.05.12.08.24.08.36v14.31c0,.5-.4.9-.9.9ZM697.13,793.55c-.14,0-.26.12-.26.26v23.56c0,.16.13.29.29.29h5.24c.16,0,.29-.13.29-.29v-14.31s0-.08-.02-.12l-4.08-9.23c-.04-.09-.13-.15-.23-.15h-1.22Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  </g>
                  <g>
                    <path d="M702.94,846.39l-5.15,9.23c-.09.2-.29.34-.51.34h-.15c-.31,0-.56-.25-.56-.56v-33.21c0-.33.26-.59.59-.59h5.24c.33,0,.59.27.59.59v23.97c0,.08-.02.17-.05.24Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M697.28,856.27h-.15c-.48,0-.87-.39-.87-.87v-33.21c0-.5.4-.9.9-.9h5.24c.49,0,.9.4.9.9v23.97c0,.13-.03.25-.08.36v.03s-5.16,9.23-5.16,9.23c-.13.29-.44.49-.78.49ZM697.16,821.9c-.16,0-.29.13-.29.29v33.21c0,.14.11.26.26.26h.15c.1,0,.19-.06.23-.15l5.15-9.25s.02-.07.02-.11v-23.97c0-.16-.13-.29-.29-.29h-5.24Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  </g>
                  <g>
                    <path d="M703,855.42c0-.17-.23-.23-.31-.08-1.26,2.34-6.12,10.28-6.12,10.48v22.24c0,.38.48.54.71.24,1.7-2.3,5.72-7.89,5.72-8.09,0,0,.03-20.87,0-24.79Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M696.96,888.76c-.07,0-.15-.01-.22-.04-.29-.1-.48-.36-.48-.67v-22.24c0-.15,0-.18,2.54-4.45,1.39-2.34,2.97-4.99,3.62-6.18.1-.19.31-.28.52-.23.21.05.35.24.36.45h0c.02,3.88,0,24.58,0,24.79,0,.43-5.72,8.19-5.78,8.27-.14.18-.34.28-.55.28ZM696.87,865.87v22.18c0,.05.03.08.06.09.04.01.07,0,.09-.03,1.91-2.59,5.34-7.38,5.66-7.97,0-1.2.02-19.36,0-24.18-.75,1.34-2.13,3.65-3.36,5.72-1.13,1.89-2.29,3.85-2.46,4.19Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M758.52,900.79c-18.28,4.72-37.45,4.72-55.73,0,1.28-5,2.55-10,3.83-14.99,15.77,4.07,32.3,4.07,48.07,0,1.28,5,2.55,10,3.83,14.99Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M730.66,904.62c-9.4,0-18.8-1.18-27.94-3.54l-.3-.08,3.98-15.59.3.08c15.67,4.05,32.24,4.05,47.91,0l.3-.08,3.98,15.59-.3.08c-9.14,2.36-18.54,3.54-27.94,3.54ZM703.16,900.57c17.99,4.59,36.99,4.59,54.98,0l-3.68-14.4c-15.59,3.97-32.04,3.97-47.63,0l-3.68,14.4Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  </g>
                  <g>
                    <path d="M758.52,900.79c-18.28,4.72-37.45,4.72-55.73,0,1.28-5,2.55-10,3.83-14.99,15.77,4.07,32.3,4.07,48.07,0,1.28,5,2.55,10,3.83,14.99Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M730.66,904.62c-9.4,0-18.8-1.18-27.94-3.54l-.3-.08,3.98-15.59.3.08c15.67,4.05,32.24,4.05,47.91,0l.3-.08,3.98,15.59-.3.08c-9.14,2.36-18.54,3.54-27.94,3.54ZM703.16,900.57c17.99,4.59,36.99,4.59,54.98,0l-3.68-14.4c-15.59,3.97-32.04,3.97-47.63,0l-3.68,14.4Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  </g>
                </g>
                <g>
                  <path d="M767.06,792.71h9.53s.5-5.95-9.53-5.45v5.45Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M776.87,793.01h-10.12v-6.04h.29c3.96-.21,6.8.55,8.44,2.25,1.55,1.6,1.42,3.44,1.41,3.52l-.02.28ZM767.37,792.4h8.92c-.03-.53-.22-1.72-1.25-2.77-1.48-1.52-4.06-2.22-7.67-2.08v4.85Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                </g>
                <g>
                  <path d="M694.56,792.71h-9.53s-.5-5.95,9.53-5.45v5.45Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M694.86,793.01h-10.12l-.02-.28c0-.08-.14-1.91,1.41-3.52,1.64-1.7,4.48-2.46,8.44-2.26h.29v6.06ZM685.33,792.4h8.92v-4.85c-3.61-.14-6.19.56-7.67,2.08-1.03,1.05-1.22,2.24-1.25,2.77Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                </g>
                <g>
                  <path d="M751.11,735.84s-2.51,25.83,10.03,37.93" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M761.14,774.08c-.08,0-.15-.03-.21-.09-12.5-12.07-10.15-37.92-10.13-38.18.02-.17.16-.29.33-.27.17.02.29.17.27.33-.02.26-2.35,25.82,9.94,37.68.12.12.12.31,0,.43-.06.06-.14.09-.22.09Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                </g>
                <g>
                  <path d="M759.96,739.97s-1.02,21.48,6.29,37.13" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M766.26,777.41c-.12,0-.23-.07-.28-.18-7.26-15.54-6.33-37.06-6.32-37.27,0-.17.15-.3.32-.29.17,0,.3.15.29.32-.01.21-.93,21.58,6.27,36.99.07.15,0,.33-.15.41-.04.02-.09.03-.13.03Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                </g>
                <g>
                  <path d="M751.11,735.84s-2.51,25.83,10.03,37.93" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M761.14,774.08c-.08,0-.15-.03-.21-.09-12.5-12.07-10.15-37.92-10.13-38.18.02-.17.16-.29.33-.27.17.02.29.17.27.33-.02.26-2.35,25.82,9.94,37.68.12.12.12.31,0,.43-.06.06-.14.09-.22.09Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                </g>
                <g>
                  <path d="M759.96,739.97s-1.02,21.48,6.29,37.13" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M766.26,777.41c-.12,0-.23-.07-.28-.18-7.26-15.54-6.33-37.06-6.32-37.27,0-.17.15-.3.32-.29.17,0,.3.15.29.32-.01.21-.93,21.58,6.27,36.99.07.15,0,.33-.15.41-.04.02-.09.03-.13.03Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                </g>
                <g>
                  <path d="M770.05,743.55s-3.83-.17-8.44-5.11c-4.62-4.94-10.24-4.44-10.24-4.44l1.88-5.64s1.61.66,1.61.66c3.96,1.85,6.79,4.06,9.24,6.1,2.45,2.03,4.24,4.36,5.46,7.22.19.46.39.85.49,1.21Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M770.05,743.85s0,0-.01,0c-.16,0-4-.23-8.65-5.21-4.45-4.77-9.94-4.34-9.99-4.34-.11,0-.2-.03-.27-.11-.06-.08-.08-.19-.05-.29l1.88-5.64c.03-.08.09-.15.16-.18.08-.04.16-.04.24,0,0,0,1.5.62,1.6.66,0,0,.02,0,.03.01,4.06,1.9,6.93,4.17,9.31,6.14,2.51,2.08,4.32,4.48,5.54,7.33.06.15.13.3.19.43.12.28.24.55.32.81.03.09,0,.2-.05.27-.06.07-.15.12-.24.12ZM751.87,733.68c1.53,0,6.07.38,9.96,4.55,3.53,3.78,6.61,4.72,7.75,4.94-.04-.09-.08-.18-.12-.27-.06-.14-.13-.29-.19-.44-1.18-2.76-2.94-5.08-5.37-7.1-2.35-1.95-5.18-4.19-9.18-6.06h0c-.14-.06-.46-.19-1.3-.53l-1.63,4.91s.05,0,.07,0Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                </g>
                <g>
                  <path d="M750.04,726.89l-.99,4.13s-8.72-2.09-18.09-2.22c-9.37.12-18.09,2.22-18.09,2.22l-.93-3.9c5.59-2.05,12.33-3.45,20.31-3.45,6.84,0,12.77,1.3,17.8,3.22Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M749.05,731.32s-.05,0-.07,0c-.09-.02-8.8-2.08-18.03-2.21-9.21.12-17.93,2.19-18.02,2.21-.08.02-.16,0-.23-.04-.07-.04-.12-.11-.14-.19l-.93-3.9c-.04-.15.05-.3.19-.36,6.28-2.3,13.15-3.47,20.41-3.47,6.25,0,12.28,1.09,17.91,3.24.14.05.22.21.19.36l-.99,4.13c-.03.14-.16.23-.3.23ZM730.95,728.5c8.34.11,16.26,1.79,17.87,2.16l.86-3.58c-5.49-2.06-11.36-3.1-17.44-3.1-7.09,0-13.8,1.12-19.95,3.34l.8,3.34c1.61-.36,9.53-2.05,17.86-2.16Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                </g>
                <g>
                  <path d="M709.71,735.84s2.51,25.83-10.03,37.93" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M699.67,774.08c-.08,0-.16-.03-.22-.09-.12-.12-.11-.31,0-.43,12.29-11.86,9.97-37.43,9.94-37.68-.02-.17.11-.32.27-.33.17-.02.32.11.33.27.03.26,2.38,26.11-10.13,38.18-.06.06-.14.09-.21.09Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                </g>
                <g>
                  <path d="M700.85,739.97s1.02,21.48-6.29,37.13" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M694.56,777.41s-.09,0-.13-.03c-.15-.07-.22-.25-.15-.41,7.19-15.4,6.28-36.77,6.27-36.99,0-.17.12-.31.29-.32.17-.01.31.12.32.29.01.22.94,21.73-6.32,37.27-.05.11-.16.18-.28.18Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                </g>
                <g>
                  <path d="M709.91,733.92s-5.62-.5-10.24,4.44c-4.07,4.36-7.28,4.88-7.98,4.93,1.25-3.23,3.33-6.11,6.1-8.31,2.62-2.08,5.97-4.29,10.08-6.19.22-.01.34-.02.34-.02l1.71,5.14Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M691.69,743.6c-.1,0-.19-.05-.25-.12-.06-.08-.08-.19-.04-.29,1.29-3.33,3.43-6.25,6.19-8.44,3.08-2.44,6.49-4.54,10.14-6.23.04-.02.07-.03.11-.03l.34-.02c.13,0,.26.08.3.21l1.71,5.14c.03.1.01.21-.05.29-.06.08-.17.12-.27.11-.05,0-5.54-.42-9.99,4.35-4.2,4.5-7.55,4.98-8.18,5.03,0,0-.02,0-.02,0ZM707.94,729.1c-3.59,1.67-6.94,3.73-9.96,6.13-2.54,2.02-4.54,4.67-5.81,7.69,1.17-.23,3.91-1.15,7.28-4.76,3.96-4.24,8.57-4.57,10.03-4.55l-1.5-4.5h-.05Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                </g>
                <g>
                  <path d="M770.06,897.82s-10.37-.96-9.21,9.27c0,0,7.49-2.93,9.21-9.27Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M760.59,907.52l-.04-.39c-.35-3.09.3-5.5,1.93-7.17,2.79-2.85,7.42-2.46,7.61-2.44l.36.03-.1.35c-1.74,6.42-9.08,9.35-9.39,9.48l-.37.14ZM769.4,898.11c-1.33,0-4.49.23-6.5,2.29-1.42,1.45-2.02,3.55-1.79,6.25,1.48-.67,6.95-3.46,8.55-8.54-.08,0-.16,0-.26,0Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                </g>
                <g>
                  <path d="M701.41,907.1s.46-10.46-9.64-8.82c0,0,3.26,7.38,9.64,8.82Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M701.7,907.48l-.36-.08c-6.46-1.46-9.72-8.69-9.86-8.99l-.16-.36.39-.06c3.04-.49,5.45.04,7.18,1.58,3,2.67,2.82,7.36,2.82,7.56l-.02.36ZM692.22,898.53c.74,1.45,3.76,6.82,8.88,8.19-.03-1.15-.3-4.65-2.61-6.7-1.51-1.34-3.61-1.84-6.27-1.49Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M886.79,820.07l-5.14-.5.66-71.79c0-7.35-4.92-16.71-10.94-20.79-6.19-4.2-14.57-7.62-27.34-7.62-13.84,0-21.32,2.99-29.41,8.01-4.87,3.02-8.87,10.18-8.87,15.97l.67,76.19-5.46.53c-2.93.32-5.05,2.96-4.73,5.89h.63l9.61-1.05.55,62.94c0,9.91,4.94,18.72,14.17,21.95l3.06,1.07c12.82,4.48,26.75,4.48,39.58,0h0c11.07-3.87,17.23-14.43,17.23-26.31l.55-59.62,9.29,1.01h.63c.32-2.93-1.8-5.57-4.73-5.89Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M844.03,914.52c-6.74,0-13.48-1.12-19.89-3.36l-3.06-1.07c-8.87-3.1-14.38-11.62-14.38-22.24l-.55-62.6-9.27,1.01h-.66c-.16,0-.29-.12-.3-.27-.34-3.1,1.91-5.89,5-6.23l5.19-.5-.66-75.91c0-5.87,4.05-13.15,9.02-16.23,8.22-5.1,15.7-8.06,29.57-8.06,10.9,0,19.9,2.51,27.52,7.67,6.11,4.14,11.07,13.58,11.07,21.04l-.66,71.52,4.87.47s0,0,0,0c3.1.34,5.34,3.13,5,6.23-.02.16-.15.27-.3.27h-.63l-8.99-.98-.55,59.28c0,12.64-6.68,22.84-17.44,26.59-6.41,2.24-13.15,3.36-19.89,3.36ZM806.45,824.61c.07,0,.15.03.2.08.06.06.1.14.1.23l.55,62.94c0,10.35,5.35,18.66,13.97,21.66l3.06,1.07c12.7,4.43,26.68,4.43,39.37,0,10.5-3.67,17.03-13.64,17.03-26.02l.55-59.62c0-.09.04-.17.1-.23.06-.06.15-.08.24-.08l9.29,1.01h.32c.15-2.65-1.81-4.99-4.48-5.28l-5.14-.5c-.16-.02-.28-.15-.28-.31l.66-71.79c0-7.28-4.85-16.49-10.81-20.53-7.51-5.09-16.4-7.57-27.17-7.57-13.73,0-21.12,2.92-29.25,7.96-4.81,2.99-8.73,10.03-8.73,15.71l.67,76.19c0,.16-.12.29-.28.31l-5.46.53c-1.33.15-2.54.8-3.38,1.85-.79.98-1.17,2.19-1.1,3.43h.35l9.58-1.05s.02,0,.03,0Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                </g>
                <g>
                  <path d="M864.81,814.96c-14.25-4.65-27.32-4.65-41.57,0-1.19-3-2.92-6.53-4.84-9.01,16.56-5.41,34.69-5.41,51.25,0-1.96,3.01-3.24,5.52-4.84,9.01Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M823.24,815.27c-.12,0-.24-.07-.28-.19-1.42-3.58-3.17-6.84-4.8-8.93-.06-.08-.08-.18-.05-.28.03-.1.1-.17.2-.2,16.59-5.41,34.85-5.41,51.44,0,.09.03.16.1.19.19.03.09.02.19-.03.27-2.01,3.09-3.29,5.63-4.82,8.97-.06.14-.23.21-.37.16-14.12-4.61-27.27-4.61-41.38,0-.03.01-.06.02-.09.02ZM844.03,811.18c6.8,0,13.59,1.13,20.62,3.4,1.44-3.13,2.67-5.57,4.53-8.46-16.23-5.21-34.04-5.21-50.27,0,2.06,2.77,3.67,6.37,4.51,8.47,7.03-2.27,13.82-3.4,20.61-3.4Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                </g>
                <g>
                  <path d="M823.24,866.77c16.67,4.58,26.65,3.53,41.57,0,1.19,5.33,2.92,9.7,4.84,14.09-16.56,9.59-34.69,9.59-51.25,0,1.96-5.34,3.24-7.9,4.84-14.09Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M844.03,888.34c-8.73,0-17.47-2.41-25.78-7.22-.13-.07-.18-.23-.13-.37.53-1.44,1-2.65,1.45-3.83,1.24-3.2,2.22-5.72,3.38-10.23.02-.08.07-.15.14-.19.07-.04.16-.05.23-.03,16.39,4.51,26.02,3.64,41.42,0,.08-.02.16,0,.23.04.07.04.12.11.14.19,1.14,5.11,2.75,9.31,4.82,14.03.06.14,0,.31-.13.39-8.31,4.81-17.04,7.22-25.78,7.22ZM818.78,880.72c16.29,9.34,34.19,9.34,50.48,0-1.99-4.57-3.55-8.66-4.68-13.59-14.93,3.51-24.99,4.4-41.12,0-1.14,4.36-2.1,6.86-3.32,10-.43,1.11-.87,2.25-1.36,3.58Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                </g>
                <g>
                  <g>
                    <path d="M873.24,820.85v-13.81l-5.42,10.39s-.05,1.26-.09,3.42h5.51Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M873.24,821.16h-5.51c-.08,0-.16-.03-.22-.09-.06-.06-.09-.14-.09-.22.04-2.14.09-3.42.09-3.43,0-.04.01-.09.03-.13l5.42-10.39c.06-.12.21-.19.34-.16.14.03.23.16.23.3v13.81c0,.17-.14.31-.31.31ZM868.04,820.55h4.89v-12.26l-4.81,9.22c-.01.27-.05,1.36-.08,3.04Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  </g>
                  <g>
                    <path d="M873.24,823.3h-5.53c-.09,6.94.03,20.56,1.86,32.74h3.67v-32.74Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M873.24,856.35h-3.67c-.15,0-.28-.11-.3-.26-1.83-12.17-1.96-25.77-1.87-32.79,0-.17.14-.3.31-.3h5.53c.17,0,.31.14.31.31v32.74c0,.17-.14.31-.31.31ZM869.84,855.73h3.1v-32.13h-4.92c-.08,7.03.06,20.23,1.82,32.13Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  </g>
                  <g>
                    <path d="M869.76,858.49c.81,5.05,1.94,9.8,3.48,13.66v-13.66h-3.48Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M873.24,872.45c-.12,0-.24-.07-.28-.19-1.43-3.57-2.61-8.19-3.5-13.72-.01-.09.01-.18.07-.25.06-.07.14-.11.23-.11h3.48c.17,0,.31.14.31.31v13.66c0,.15-.1.27-.25.3-.02,0-.04,0-.06,0ZM870.12,858.8c.75,4.55,1.7,8.47,2.82,11.66v-11.66h-2.82Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M815.24,820.85v-13.81l5.42,10.39s.05,1.26.09,3.42h-5.51Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M820.75,821.16h-5.51c-.17,0-.31-.14-.31-.31v-13.81c0-.14.1-.26.23-.3.14-.03.28.03.34.16l5.42,10.39s.03.08.03.13c0,.01.05,1.29.09,3.43,0,.08-.03.16-.09.22-.06.06-.14.09-.22.09ZM815.54,820.55h4.89c-.03-1.68-.07-2.76-.08-3.04l-4.81-9.22v12.26Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  </g>
                  <g>
                    <path d="M815.24,823.3h5.53c.09,6.94-.03,20.56-1.86,32.74h-3.67v-32.74Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M818.9,856.35h-3.67c-.17,0-.31-.14-.31-.31v-32.74c0-.17.14-.31.31-.31h5.53c.17,0,.3.13.31.3.09,7.02-.03,20.61-1.87,32.79-.02.15-.15.26-.3.26ZM815.54,855.73h3.1c1.77-11.9,1.91-25.1,1.82-32.13h-4.92v32.13Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  </g>
                  <g>
                    <path d="M818.72,858.49c-.81,5.05-1.94,9.8-3.48,13.66v-13.66h3.48Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M815.23,872.45s-.04,0-.06,0c-.14-.03-.25-.15-.25-.3v-13.66c0-.17.14-.31.31-.31h3.48c.09,0,.17.04.23.11.06.07.08.16.07.25-.89,5.53-2.07,10.15-3.5,13.72-.05.12-.16.19-.28.19ZM815.54,858.8v11.66c1.12-3.2,2.07-7.11,2.82-11.66h-2.82Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  </g>
                </g>
                <g>
                  <path d="M860.22,732.43c-10.71-3.85-22.42-3.85-33.13,0-.72-2.01-1.45-4.02-2.17-6.03,12.11-4.36,25.36-4.36,37.47,0-.72,2.01-1.45,4.02-2.17,6.03Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M827.09,732.74c-.13,0-.24-.08-.29-.2l-2.17-6.03c-.03-.08-.02-.16.01-.23.03-.07.1-.13.17-.16,12.15-4.37,25.53-4.37,37.68,0,.16.06.24.23.18.39l-2.17,6.03c-.03.08-.08.14-.16.17-.07.03-.16.04-.23.01-10.62-3.82-22.31-3.82-32.92,0-.03.01-.07.02-.1.02ZM825.31,726.58l1.97,5.46c10.58-3.73,22.19-3.73,32.76,0l1.97-5.46c-11.84-4.19-24.85-4.19-36.69,0Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                </g>
                <g>
                  <path d="M873.38,742.58c-1.9-3.41-5.26-6.47-9.78-8.3-.54-.22-.78-.64-.61-1.15.35-1.01.76-2.01,1.24-3,.54-1.19,3.25-1.84,4.5-1.04,4.53,2.74,7.71,6.52,9.38,10.47.2.47.07.94-.28,1.26-.71.63-1.36,1.31-1.96,2.01-.71.8-1.96.67-2.49-.25Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M874.71,743.66c-.06,0-.13,0-.19,0-.59-.06-1.11-.4-1.41-.92,0,0,0,0,0,0-1.99-3.56-5.41-6.46-9.63-8.16-.7-.28-1.01-.88-.78-1.53.35-1.02.78-2.04,1.26-3.03.26-.58.95-1.07,1.89-1.35,1.14-.34,2.34-.27,3.04.18,4.34,2.62,7.72,6.39,9.5,10.61.24.58.11,1.19-.36,1.61-.69.62-1.34,1.28-1.93,1.98-.36.41-.86.63-1.39.63ZM873.64,742.42c.2.35.55.58.94.62.4.04.78-.11,1.05-.42.61-.71,1.27-1.4,1.98-2.03.27-.24.35-.58.2-.91-1.73-4.1-5.02-7.77-9.26-10.33-.56-.36-1.58-.41-2.55-.12-.76.23-1.33.61-1.52,1.03-.47.98-.89,1.98-1.23,2.97-.15.43.16.65.43.76,4.35,1.76,7.88,4.75,9.93,8.43Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                </g>
                <g>
                  <path d="M814.01,742.58c1.9-3.41,5.26-6.47,9.78-8.3.54-.22.78-.64.61-1.15-.35-1.01-.76-2.01-1.24-3-.54-1.19-3.25-1.84-4.5-1.04-4.53,2.74-7.71,6.52-9.38,10.47-.2.47-.07.94.28,1.26.71.63,1.36,1.31,1.96,2.01.71.8,1.96.67,2.49-.25Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M812.68,743.66c-.53,0-1.02-.22-1.38-.63-.59-.7-1.24-1.37-1.93-1.98-.47-.41-.6-1.03-.36-1.61,1.78-4.22,5.16-7.99,9.51-10.61.7-.45,1.9-.52,3.04-.18.94.28,1.64.78,1.9,1.36.48.99.9,2.01,1.25,3.02.22.65-.09,1.25-.78,1.53-4.22,1.7-7.64,4.6-9.63,8.16,0,0,0,0,0,0-.3.53-.82.86-1.41.92-.06,0-.13,0-.19,0ZM820.12,729.05c-.51,0-.97.1-1.29.3-4.24,2.56-7.53,6.23-9.26,10.33-.14.34-.07.67.2.91.71.64,1.38,1.32,1.99,2.04.27.3.65.45,1.05.41.4-.04.74-.27.94-.62,2.06-3.68,5.58-6.67,9.93-8.43.28-.11.58-.34.44-.76-.34-.99-.76-1.99-1.23-2.97-.19-.42-.76-.81-1.52-1.03-.42-.13-.85-.19-1.25-.19ZM814.01,742.58h0,0Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                </g>
                <g>
                  <path d="M854.99,908.95c-7.11,2.56-14.89,2.56-22,0,.43-1.18.85-2.36,1.28-3.54,6.29,2.26,13.17,2.26,19.45,0,.43,1.18.85,2.36,1.28,3.54Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M843.99,911.17c-3.76,0-7.52-.64-11.11-1.93-.16-.06-.24-.23-.18-.39l1.28-3.54c.03-.08.08-.14.16-.17.07-.03.16-.04.23-.01,6.2,2.23,13.04,2.23,19.24,0,.16-.06.33.03.39.18l1.28,3.54c.03.08.02.16-.01.23-.03.07-.1.13-.17.16-3.58,1.29-7.34,1.93-11.1,1.93ZM833.38,908.77c6.86,2.39,14.37,2.39,21.22,0l-1.07-2.97c-6.17,2.15-12.92,2.15-19.08,0l-1.07,2.97Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                </g>
                <g>
                  <path d="M819.55,895.36c1.68,3.01,4.65,5.72,8.65,7.33.47.19.69.56.54,1.01-.31.89-.67,1.77-1.1,2.65-.47,1.05-2.87,1.63-3.98.92-4-2.42-6.82-5.77-8.29-9.26-.18-.42-.07-.83.25-1.11.63-.56,1.2-1.15,1.73-1.77.63-.7,1.73-.59,2.2.22Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M824.93,907.9c-.51,0-1.02-.1-1.43-.36-3.84-2.32-6.83-5.66-8.41-9.4-.22-.52-.1-1.08.33-1.46.61-.54,1.18-1.13,1.7-1.74.37-.42.89-.62,1.42-.56.54.05,1,.36,1.28.83,0,0,0,0,0,0,1.75,3.14,4.77,5.7,8.5,7.2.64.26.92.8.71,1.4-.31.9-.69,1.81-1.11,2.68-.23.52-.85.96-1.7,1.22-.38.11-.84.19-1.29.19ZM818.37,894.98c-.3,0-.58.13-.79.36-.53.63-1.13,1.24-1.76,1.8-.23.2-.29.48-.17.77,1.53,3.62,4.43,6.86,8.17,9.11.49.31,1.38.35,2.22.1.65-.2,1.16-.54,1.32-.89.42-.86.78-1.74,1.09-2.63.1-.28-.03-.49-.36-.63-3.85-1.55-6.98-4.21-8.8-7.47-.17-.3-.47-.49-.81-.53-.04,0-.07,0-.11,0Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                </g>
                <g>
                  <path d="M868.43,895.36c-1.68,3.01-4.65,5.72-8.65,7.33-.47.19-.69.56-.54,1.01.31.89.67,1.77,1.1,2.65.47,1.05,2.87,1.63,3.98.92,4-2.42,6.82-5.77,8.29-9.26.18-.42.07-.83-.25-1.11-.63-.56-1.2-1.15-1.73-1.77-.63-.7-1.73-.59-2.2.22Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M863.06,907.9c-.45,0-.91-.08-1.29-.19-.84-.25-1.46-.7-1.7-1.22-.42-.87-.79-1.77-1.11-2.68-.2-.59.08-1.14.71-1.4,3.72-1.5,6.74-4.06,8.5-7.2,0,0,0,0,0,0,.27-.47.74-.78,1.28-.83.54-.05,1.06.15,1.42.56.53.62,1.1,1.21,1.71,1.75.42.38.55.94.33,1.46-1.58,3.74-4.57,7.07-8.42,9.4-.4.26-.91.36-1.42.36ZM868.69,895.51c-1.82,3.26-4.95,5.91-8.8,7.47-.34.14-.46.35-.36.63.31.88.67,1.76,1.08,2.62.16.36.67.7,1.32.9.84.25,1.73.21,2.22-.1,3.75-2.26,6.65-5.5,8.18-9.12.12-.28.06-.56-.17-.77-.63-.56-1.22-1.17-1.76-1.8-.23-.26-.56-.39-.9-.35-.34.03-.63.23-.81.53Z" fill="none" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".5" />
                </g>
              </g>
              <g id="Desk" filter="url(#ds-soft)">
                <g>
                  <g>
                    <polygon points="438.02 878.82 442.12 883.52 441.38 884.37 437.28 879.67 438.02 878.82" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M441.38,884.71l-4.4-5.04,1.04-1.19,4.4,5.04-1.04,1.19ZM437.59,879.67l3.79,4.35.43-.5-3.79-4.35-.43.5Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <polygon points="438.02 867.11 442.12 862.42 441.38 861.57 437.28 866.27 438.02 867.11" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M438.02,867.46l-1.04-1.19,4.4-5.04,1.04,1.19-4.4,5.05ZM437.59,866.27l.43.5,3.79-4.35-.43-.5-3.79,4.35Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <g>
                      <path d="M436.2,865.87h6.3c3.47,0,6.29,2.82,6.29,6.29v1.63c0,3.47-2.82,6.29-6.29,6.29h-6.3c-3.47,0-6.29-2.82-6.29-6.29v-1.63c0-3.47,2.82-6.29,6.29-6.29Z" transform="translate(1312.32 433.61) rotate(90)" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M445.1,882.65h-11.5c-.86,0-1.57-.8-1.57-1.79v-15.78c0-.99.7-1.79,1.57-1.79h11.5c.86,0,1.57.8,1.57,1.79v15.78c0,.99-.7,1.79-1.57,1.79ZM432.47,880.86c0,.72.51,1.3,1.14,1.3h11.5c.63,0,1.14-.58,1.14-1.3v-15.78c0-.72-.51-1.3-1.14-1.3h-11.5c-.63,0-1.14.58-1.14,1.3v15.78Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <path d="M423.47,882.03v-9.06s0-9.06,0-9.06c0-2.17,1.87-3.69,3.65-2.98l4.39,1.75c.89.36,1.49,1.32,1.49,2.41v7.89s0,7.89,0,7.89c0,1.08-.6,2.05-1.49,2.41l-4.39,1.75c-1.79.71-3.65-.81-3.65-2.98Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M431.59,883.49l-4.39,1.75c-.92.37-1.9.2-2.69-.44s-1.25-1.66-1.25-2.77v-18.12c0-1.11.45-2.12,1.25-2.77.79-.65,1.77-.81,2.69-.44l4.39,1.75c.98.39,1.64,1.45,1.64,2.64v15.77c0,1.19-.66,2.25-1.64,2.64ZM423.69,882.03c0,.95.39,1.82,1.07,2.37.68.55,1.52.69,2.3.38l4.39-1.75c.81-.32,1.35-1.19,1.35-2.17v-15.77c0-.98-.54-1.85-1.35-2.17l-4.39-1.75c-.79-.31-1.62-.17-2.3.38-.68.55-1.07,1.42-1.07,2.37v18.12Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <rect x="435.4" y="855.41" width="2.53" height="11.85" rx="1.22" ry="1.22" transform="translate(1298 424.67) rotate(90)" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M442,862.85h-10.68c-.44,0-.8-.41-.8-.92v-1.18c0-.51.36-.92.8-.92h10.68c.44,0,.8.41.8.92v1.18c0,.51-.36.92-.8.92ZM430.95,861.93c0,.24.17.43.37.43h10.68c.21,0,.37-.19.37-.43v-1.18c0-.24-.17-.43-.37-.43h-10.68c-.21,0-.37.19-.37.43v1.18Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <rect x="435.4" y="878.67" width="2.53" height="11.85" rx="1.22" ry="1.22" transform="translate(-447.93 1321.26) rotate(-90)" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M442,886.11h-10.68c-.44,0-.8-.41-.8-.92v-1.18c0-.51.36-.92.8-.92h10.68c.44,0,.8.41.8.92v1.18c0,.51-.36.92-.8.92ZM430.95,885.19c0,.24.17.43.37.43h10.68c.21,0,.37-.19.37-.43v-1.18c0-.24-.17-.43-.37-.43h-10.68c-.21,0-.37.19-.37.43v1.18Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                  </g>
                </g>
                <g>
                  <path d="M422.78,902.92h10.81c5.68,0,10.29-5.28,10.29-11.8v-44.36c0-1.21.86-2.2,1.92-2.2h21.95c1.06,0,1.92.98,1.92,2.2v73.54c0,1.21-.86,2.2-1.92,2.2h-20.46s-3.4,0-3.4,0h-21.11c-1.06,0-1.92-.98-1.92-2.2v-15.18c0-1.21.86-2.2,1.92-2.2Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M467.75,922.75h-44.97c-1.17,0-2.13-1.1-2.13-2.44v-15.18c0-1.35.96-2.44,2.13-2.44h10.81c5.56,0,10.08-5.18,10.08-11.55v-44.36c0-1.35.96-2.44,2.13-2.44h21.95c1.17,0,2.13,1.1,2.13,2.44v73.54c0,1.35-.96,2.44-2.13,2.44ZM444.1,891.13c0,6.64-4.71,12.04-10.51,12.04h-10.81c-.94,0-1.7.87-1.7,1.95v15.18c0,1.07.76,1.95,1.7,1.95h44.97c.94,0,1.7-.87,1.7-1.95v-73.54c0-1.07-.76-1.95-1.7-1.95h-21.95c-.94,0-1.7.87-1.7,1.95v44.36Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <path d="M467.19,922.5v-77.93c0-.14-.1-.25-.21-.25s-.21.11-.21.25v77.93c0,.14.1.25.21.25s.21-.11.21-.25Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                <g>
                  <g>
                    <path d="M459.59,884.72c-1.04,0-1.88-1.52-1.88-3.4s.84-3.4,1.88-3.4,1.88,1.52,1.88,3.4-.84,3.4-1.88,3.4Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M459.59,884.84c-1.1,0-1.99-1.58-1.99-3.52s.89-3.52,1.99-3.52,1.99,1.58,1.99,3.52-.89,3.52-1.99,3.52ZM459.59,884.6c.98,0,1.77-1.47,1.77-3.28s-.8-3.28-1.77-3.28-1.77,1.47-1.77,3.28.8,3.28,1.77,3.28Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <path d="M462.83,899.09l-3.41-2.33c-.21-.15-.34-.41-.34-.7v-14.74s0-14.74,0-14.74c0-.28.13-.55.34-.7l3.41-2.33c.29-.2.65.04.65.43v17.35s0,17.35,0,17.35c0,.38-.37.62-.65.43Z" fill="#f5f3ef" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M463.32,899.2c-.17.11-.37.11-.54,0l-3.41-2.33c-.24-.17-.4-.47-.4-.8v-29.49c0-.33.15-.63.4-.8l3.41-2.33c.17-.12.37-.12.54,0,.17.11.27.31.27.54v34.69c0,.23-.1.43-.27.54ZM459.19,896.06c0,.24.11.47.29.59l3.41,2.33h0c.1.07.22.07.33,0,.1-.07.16-.19.16-.32v-34.69c0-.14-.06-.26-.16-.32-.1-.07-.23-.07-.33,0l-3.41,2.33c-.18.12-.29.35-.29.59v29.49Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                </g>
                <g>
                  <rect x="441.16" y="877.1" width="21.61" height="8.43" rx="4.06" ry="4.06" transform="translate(1333.28 429.35) rotate(90)" fill="#f5f3ef" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M455.05,892.24h-6.18c-.68,0-1.24-.64-1.24-1.42v-19.02c0-.78.55-1.42,1.24-1.42h6.18c.68,0,1.24.64,1.24,1.42v19.02c0,.78-.55,1.42-1.24,1.42ZM447.86,890.83c0,.64.46,1.17,1.02,1.17h6.18c.56,0,1.02-.52,1.02-1.17v-19.02c0-.64-.46-1.17-1.02-1.17h-6.18c-.56,0-1.02.52-1.02,1.17v19.02Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M451.58,862.84h1.42c1.1,0,2,.89,2,2v1.12c0,1.44-1.17,2.61-2.61,2.61h-.2c-1.44,0-2.61-1.17-2.61-2.61v-1.12c0-1.1.89-2,2-2Z" transform="translate(1318 413.41) rotate(90)" fill="#f5f3ef" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M453.35,868.54h-1.56c-1.36,0-2.47-1.27-2.47-2.83s1.11-2.83,2.47-2.83h1.56c1.06,0,1.92.98,1.92,2.2v1.27c0,1.21-.86,2.2-1.92,2.2ZM451.79,868.29h1.56c.94,0,1.7-.87,1.7-1.95v-1.27c0-1.07-.76-1.95-1.7-1.95h-1.56c-1.24,0-2.26,1.16-2.26,2.59s1.01,2.59,2.26,2.59Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <path d="M455.27,865.7c0-.07-.05-.12-.11-.12h-5.73c-.06,0-.11.06-.11.12s.05.12.11.12h5.73c.06,0,.11-.06.11-.12Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                <g>
                  <g>
                    <rect x="448.25" y="899.16" width="10.22" height="12.46" transform="translate(1358.75 452.03) rotate(90)" fill="#f5f3ef" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M447.02,910.62v-10.46s12.67,0,12.67,0v10.46s-12.67,0-12.67,0ZM447.24,900.4v9.97h12.24v-9.97h-12.24Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <polygon points="457.2 916.06 460.22 906.45 448.5 901.6 445.48 911.22 457.2 916.06" fill="#f5f3ef" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M457.26,916.22l-11.92-4.93,3.1-9.84,11.92,4.93-3.1,9.84ZM445.62,911.14l11.52,4.76,2.95-9.38-11.52-4.76-2.95,9.38Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                </g>
              </g>
              <g filter="url(#ds-soft)">
                <g>
                  <g>
                    <rect x="288.42" y="170.71" width="7.51" height="2.09" transform="translate(547.18 394.99) rotate(-169.25)" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M287.93,172.33l.51-2.67,7.99,1.52-.51,2.67-7.99-1.52ZM288.93,170.39l-.27,1.43,6.76,1.28.27-1.43-6.76-1.28Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <rect x="289.05" y="169.76" width="8.47" height="2.09" transform="translate(549.55 393.33) rotate(-169.25)" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M288.56,171.29l.51-2.67,8.94,1.7-.51,2.67-8.94-1.7ZM289.57,169.36l-.27,1.43,7.7,1.46.27-1.43-7.7-1.46Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <rect x="268.99" y="149.69" width="7.56" height="2.09" transform="translate(392.77 -136.88) rotate(83.72)" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M270.97,146.82l2.7-.3.9,8.14-2.7.3-.89-8.14ZM273.11,147.22l-1.45.16.76,6.89,1.45-.16-.76-6.89Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <rect x="269.56" y="148.69" width="8.47" height="2.09" transform="translate(392.68 -138.8) rotate(83.72)" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M271.95,145.36l2.7-.3.99,9.05-2.7.3-.99-9.05ZM274.09,145.76l-1.45.16.86,7.8,1.45-.16-.86-7.8Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <path d="M274.37,165.62c-4.01-4.33-3.93-11.03.17-15.28l8.02-8.3c1.54-1.59,3.54-1.57,5.05.05l14.57,15.75c1.5,1.62,1.37,3.63-.34,5.03l-8.9,7.35c-4.55,3.75-11.24,3.3-15.24-1.03l-3.31-3.58Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M271.22,156.44c.33-2.3,1.36-4.52,3.09-6.31l8.02-8.3c.82-.84,1.77-1.29,2.77-1.27.99.01,1.94.47,2.74,1.33l14.57,15.75c.8.86,1.18,1.84,1.12,2.83-.07.99-.58,1.91-1.49,2.66l-8.9,7.35c-4.67,3.86-11.56,3.39-15.67-1.06l-3.31-3.58c-2.42-2.62-3.39-6.09-2.92-9.39ZM302.87,160.62c0-.06.02-.13.02-.19.05-.81-.27-1.63-.95-2.36l-14.57-15.75c-.68-.73-1.47-1.12-2.28-1.13-.82,0-1.61.37-2.31,1.08l-8.02,8.3c-3.98,4.12-4.05,10.64-.16,14.85l3.31,3.58c3.89,4.21,10.4,4.64,14.81,1l8.9-7.35c.71-.58,1.13-1.28,1.24-2.02Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <path d="M272.55,156.88c.29-2.05,1.21-4.03,2.76-5.63l7.13-7.38c.73-.76,1.59-1.15,2.48-1.14.89,0,1.74.42,2.46,1.2l12.95,14.01c.72.77,1.06,1.65,1,2.54-.06.89-.52,1.72-1.33,2.39l-7.91,6.53c-4.17,3.44-10.31,3.03-13.98-.94l-2.95-3.19c-2.16-2.34-3.03-5.44-2.61-8.38ZM300.69,160.6c0-.06.01-.11.02-.17.05-.71-.24-1.43-.84-2.08l-12.95-14.01c-.59-.64-1.29-.99-2-1-.72,0-1.42.32-2.02.95l-7.13,7.38c-3.52,3.65-3.59,9.43-.14,13.15l2.95,3.19c3.44,3.72,9.21,4.11,13.12.88l7.91-6.53c.62-.51,1-1.12,1.09-1.77Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <g>
                    <path d="M272.82,149.1l-1.08,1.07c-5.43,5.38-5.62,14.09-.43,19.7l1.7,1.84c5.19,5.61,13.89,6.1,19.68,1.11l1.15-.99-.5,2.88-9.68,4.25-7.28-1.16-6.25-4.92-4.09-6.52s-1.04-5.67-1.07-5.9c-.03-.23.69-5.97.97-6.54.28-.58,3.8-4.71,3.96-4.73.16-.03,2.91-.06,2.91-.06Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M265.13,156.59c.19-1.33.4-2.55.54-2.84.2-.41,1.63-2.12,2.07-2.64,1.88-2.23,2.01-2.25,2.13-2.27.17-.03,2.12-.06,2.95-.07h.78s-1.63,1.6-1.63,1.6c-5.34,5.29-5.52,13.75-.42,19.27l1.7,1.84c5.1,5.52,13.55,5.99,19.24,1.09l1.81-1.56-.67,3.91-9.92,4.35-7.46-1.19-.06-.05-6.29-4.96-4.15-6.62v-.06c-.12-.58-1.06-5.69-1.08-5.93-.02-.14.21-2.1.46-3.88ZM270.03,149.46c-.53.49-3.55,4.07-3.8,4.56-.23.46-.94,5.9-.94,6.39.02.17.64,3.54,1.05,5.8l4.03,6.43,6.14,4.84,7.11,1.14,9.44-4.14.32-1.85-.48.42c-5.95,5.13-14.78,4.63-20.11-1.13l-1.7-1.84c-5.33-5.77-5.14-14.61.44-20.14l.52-.52c-.83.01-1.74.03-2.02.04Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <path d="M269.74,170.72c-4.9-5.59-4.6-14.06.7-19.28l7.43-7.33-2.03-2.05-7.43,7.33c-6.38,6.29-6.75,16.5-.84,23.23l2.41,2.6c6.26,6.42,16.46,6.84,23.23.97l7.88-6.84-1.89-2.18-7.88,6.84c-5.62,4.87-14.08,4.52-19.27-.81l-2.3-2.49Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M263.24,158.99c.52-3.61,2.18-7.09,4.96-9.83l7.66-7.55,2.47,2.5-7.66,7.55c-5.18,5.1-5.48,13.38-.69,18.84l2.3,2.49c5.07,5.2,13.35,5.55,18.84.78l8.12-7.04,2.3,2.65-8.12,7.04c-6.9,5.98-17.29,5.55-23.66-.99l-2.41-2.61c-3.45-3.93-4.8-9.01-4.11-13.84ZM275.84,142.51l-7.21,7.11c-6.26,6.17-6.63,16.19-.83,22.8l2.4,2.6c6.13,6.29,16.15,6.71,22.79.95l7.65-6.63-1.48-1.7-7.65,6.63c-5.74,4.98-14.4,4.62-19.7-.82l-2.32-2.5c-5.01-5.71-4.7-14.37.71-19.71l7.21-7.11-1.58-1.61Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="274.7" y="110.26" width="7.51" height="2.09" transform="translate(128.8 371.16) rotate(-81.85)" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M276.53,115.13l1.15-8.05,2.69.39-1.15,8.05-2.69-.38ZM278.21,107.79l-.98,6.81,1.44.21.97-6.81-1.44-.21Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <rect x="275.21" y="111.32" width="8.47" height="2.09" transform="translate(128.61 373.06) rotate(-81.85)" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M277.45,116.67l1.29-9.01,2.69.39-1.29,9.01-2.69-.38ZM279.28,108.38l-1.11,7.76,1.44.21,1.11-7.76-1.44-.21Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <rect x="294.78" y="89.91" width="7.56" height="2.09" transform="translate(607.58 134.72) rotate(171.12)" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M294.72,92.93l-.42-2.68,8.09-1.26.42,2.68-8.09,1.26ZM295.02,90.77l.23,1.44,6.85-1.07-.23-1.44-6.85,1.07Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <rect x="295.37" y="90.89" width="8.47" height="2.09" transform="translate(609.82 136.51) rotate(171.12)" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M295.32,93.98l-.42-2.68,8.99-1.4.42,2.68-8.99,1.4ZM295.62,91.82l.23,1.44,7.75-1.21-.23-1.44-7.75,1.21Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <path d="M283.76,93.24c4.14-4.2,10.84-4.43,15.27-.53l8.66,7.63c1.66,1.46,1.73,3.47.17,5.04l-15.08,15.27c-1.55,1.57-3.56,1.53-5.04-.11l-7.74-8.56c-3.96-4.37-3.81-11.08.33-15.27l3.43-3.47Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M288.16,121.36c-.23-.17-.44-.37-.65-.6l-7.74-8.56c-4.07-4.49-3.92-11.39.34-15.71l3.43-3.47c4.26-4.31,11.16-4.55,15.7-.54l8.66,7.63c.88.78,1.36,1.71,1.4,2.7.03.99-.38,1.96-1.21,2.8l-15.08,15.27c-.83.84-1.79,1.27-2.78,1.24-.73-.02-1.44-.28-2.07-.76ZM298.23,92.45c-4.29-3.27-10.4-2.89-14.24,1l-3.43,3.47c-4.02,4.08-4.17,10.6-.32,14.84l7.74,8.56c.67.74,1.45,1.14,2.27,1.16.82.02,1.62-.35,2.32-1.06l15.08-15.27c.7-.71,1.06-1.52,1.03-2.33-.03-.82-.44-1.6-1.19-2.25l-8.66-7.63c-.19-.17-.39-.33-.6-.49Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <path d="M284.38,94.23c3.68-3.73,9.64-3.94,13.57-.47l7.7,6.79c1.48,1.3,1.54,3.08.16,4.48l-13.4,13.58c-1.38,1.4-3.16,1.36-4.48-.1l-6.88-7.61c-3.52-3.89-3.39-9.85.3-13.58l3.05-3.09Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M288.27,119.25c-.2-.15-.4-.34-.58-.54l-6.88-7.61c-3.63-4.01-3.49-10.16.31-14.01l3.05-3.09c3.8-3.85,9.96-4.06,14.01-.48l7.7,6.79c.79.7,1.22,1.54,1.26,2.43.03.89-.34,1.76-1.08,2.51l-13.4,13.58c-.74.75-1.6,1.14-2.5,1.12-.66-.01-1.29-.25-1.86-.68ZM297.22,93.56c-3.8-2.9-9.21-2.56-12.62.89l-3.05,3.09c-3.56,3.61-3.69,9.39-.29,13.15l6.88,7.61c.59.65,1.28,1,1.99,1.02.72.02,1.42-.31,2.04-.93l13.4-13.58c.62-.62.93-1.33.9-2.05-.02-.72-.39-1.4-1.04-1.98l-7.7-6.79c-.17-.15-.35-.3-.53-.43Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <path d="M300.2,90.94l-1.11-1.03c-5.62-5.18-14.33-4.97-19.7.47l-1.76,1.78c-5.37,5.44-5.46,14.15-.22,19.71l1.04,1.1-2.9-.36-4.68-9.48.83-7.33,4.64-6.46,6.33-4.38s5.62-1.3,5.85-1.34c.23-.04,5.99.42,6.58.67.59.26,4.87,3.58,4.91,3.74.03.16.2,2.9.2,2.9Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M275.35,112.9l-4.8-9.71.85-7.5,4.72-6.58,6.42-4.45h.06c.58-.15,5.64-1.32,5.87-1.36.25-.04,6.07.4,6.76.69.42.18,2.19,1.54,2.73,1.95,2.31,1.78,2.34,1.9,2.36,2.02.03.17.15,2.12.2,2.95l.05.78-1.69-1.55c-5.52-5.09-13.99-4.89-19.27.46l-1.76,1.78c-5.28,5.35-5.37,13.81-.21,19.27l1.64,1.74-3.93-.49ZM271.19,103.07l4.57,9.24,1.86.23-.44-.46c-5.39-5.71-5.3-14.56.22-20.14l1.76-1.78c5.52-5.59,14.36-5.8,20.14-.48l.54.5c-.05-.83-.11-1.74-.14-2.01-.52-.5-4.23-3.37-4.73-3.59-.47-.21-5.93-.67-6.43-.65-.17.03-3.51.8-5.75,1.32l-6.24,4.32-4.56,6.35-.81,7.16Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <path d="M278.46,88.84c5.36-5.15,13.83-5.23,19.29-.18l7.66,7.09,1.96-2.12-7.66-7.09c-6.57-6.09-16.79-6-23.25.21l-2.49,2.52c-6.13,6.54-6.09,16.75.08,23.25l7.19,7.56,2.09-1.99-7.19-7.56c-5.12-5.39-5.15-13.86-.07-19.29l2.38-2.42Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M281.23,120.54l-7.41-7.79c-6.29-6.62-6.33-17.02-.09-23.68l2.5-2.53c6.59-6.33,16.99-6.43,23.69-.22l7.89,7.31-2.39,2.58-7.89-7.31c-5.33-4.94-13.61-4.86-18.85.17l-2.38,2.41c-4.96,5.3-4.93,13.58.07,18.85l7.41,7.79-2.55,2.42ZM298.28,85.75c-6.44-4.92-15.64-4.49-21.6,1.23l-2.49,2.52c-6.01,6.41-5.97,16.44.09,22.81l6.97,7.34,1.64-1.55-6.97-7.34c-5.24-5.51-5.27-14.17-.07-19.72l2.4-2.43c5.48-5.27,14.15-5.35,19.72-.18l7.43,6.88,1.53-1.66-7.43-6.88c-.39-.36-.8-.71-1.22-1.03Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                </g>
                <g>
                  <circle cx="313.07" cy="133.06" r="14.26" transform="translate(-25.25 168.58) rotate(-29.02)" fill="#fff" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M298.65,133.04c0-2.67.75-5.29,2.19-7.61,4.21-6.74,13.13-8.8,19.87-4.59,3.27,2.04,5.54,5.23,6.41,8.98.87,3.75.22,7.62-1.82,10.89-2.04,3.27-5.23,5.54-8.98,6.41-3.75.87-7.62.22-10.89-1.82h0c-3.27-2.04-5.54-5.23-6.41-8.98-.25-1.09-.38-2.19-.38-3.27ZM327.19,133.09c0-1.07-.12-2.14-.37-3.2-.85-3.67-3.08-6.79-6.27-8.79-6.6-4.12-15.32-2.11-19.44,4.49-2,3.2-2.63,6.98-1.78,10.65.85,3.67,3.08,6.79,6.27,8.79h0c3.2,2,6.98,2.63,10.65,1.78,3.67-.85,6.79-3.08,8.79-6.27,1.42-2.27,2.15-4.84,2.15-7.45Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
              </g>
              <g id="Plant" filter="url(#ds-soft)">
                <g>
                  <path d="M654.72,225.01c2.65.43,5.09,1.38,6.07,3.43-.72-.1-1.87.17-2.68.43-1.11.35-2.97,1.01-3.53,3.16-.56,2.15.39.52,2.13-1.06,1.22-1.11,3-1.42,4.52-.82.02.11.02.21.02.31.03,1.55-.37,2.9-.96,3.94-.95,1.7-2.38,2.58-3.22,2.18-3.03-1.47-.87,5.54-3.45,6.29-.93.27-2.01.1-3.08-.4-.49-1.57-.84-2.89-.26-4.35.45-1.13.92-2.48.66-2.81-.21-.26-1.06.34-1.37.74-1.27,1.65-1.12,3.91-.48,5.53-1.35-1.03-2.51-2.53-3.13-4.29-.26-.74-.59-1.59-.93-2.48,1.37-1.16,3.49-2.27,3.24-2.51-.37-.35-2.47.33-3.72,1.3-1.26-3.25-2.57-6.69-2.04-7.43.43-.6,2.53-1.08,5-1.31-.3,2.05.31,4.28.81,4.46.49.17-.11-2.71-.09-4.52,1.61-.11,3.31-.13,4.79,0h.05c-1.39,2.21-1.38,6.22-.84,6.31.54.09.22-3.61,2.49-6.1Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M652.69,243.2c-.7,0-1.46-.18-2.23-.55l-.08-.04-.03-.08c-.51-1.63-.85-2.99-.25-4.48.9-2.25.71-2.59.69-2.62-.11-.04-.75.35-1.06.74-1.25,1.62-1.05,3.82-.45,5.34l.26.66-.56-.43c-1.46-1.12-2.6-2.67-3.19-4.38-.26-.75-.6-1.63-.93-2.48l-.05-.13.11-.09c.61-.52,1.37-1.03,1.98-1.44.43-.29.95-.64,1.14-.82-.48-.08-2.14.41-3.35,1.35l-.21.16-.1-.25c-1.54-3.96-2.58-6.83-2.01-7.62.65-.91,4.1-1.3,5.14-1.39l.25-.02-.04.25c-.28,1.92.25,3.82.6,4.19.05-.31-.04-1.15-.11-1.85-.08-.8-.17-1.7-.16-2.43v-.18s.18-.01.18-.01c1.22-.09,3.05-.15,4.82,0l.36.06-.16.25c-1.29,2.03-1.27,5.34-1,5.93.07-.17.14-.55.2-.89.24-1.28.63-3.43,2.14-5.08l.07-.08.11.02c3.26.53,5.35,1.72,6.22,3.54l.16.33-.36-.05c-.82-.11-2.19.29-2.6.42-.92.29-2.84.9-3.4,3.02-.09.36-.13.57-.15.7.16-.14.42-.41.65-.65.36-.37.8-.84,1.31-1.3,1.27-1.15,3.12-1.49,4.72-.86l.11.04.02.11c.02.12.02.23.02.34.04,1.83-.51,3.2-.98,4.04-.97,1.74-2.5,2.73-3.48,2.26-.41-.2-.71-.23-.93-.11-.5.28-.61,1.44-.71,2.56-.15,1.62-.33,3.46-1.67,3.86-.32.09-.65.14-1,.14ZM650.7,242.33c1.04.47,2.03.6,2.87.36,1.09-.32,1.25-2.02,1.39-3.51.13-1.33.23-2.48.91-2.87.34-.19.76-.16,1.3.1.68.32,2.03-.44,2.96-2.1.44-.79.96-2.1.93-3.84,0-.06,0-.12,0-.18-1.44-.51-3.07-.2-4.2.83-.5.45-.94.91-1.29,1.28-.66.69-.93.97-1.18.83-.21-.12-.21-.41.01-1.24.62-2.34,2.68-2.99,3.66-3.3.47-.15,1.55-.46,2.4-.46h0c-.88-1.51-2.78-2.51-5.66-3-1.37,1.55-1.74,3.58-1.97,4.8-.16.86-.25,1.34-.63,1.28-.13-.02-.23-.12-.31-.29-.4-.89-.23-4.06.86-6.04-1.26-.1-2.77-.09-4.32,0,0,.68.09,1.49.16,2.21.15,1.53.19,2.09-.05,2.28-.08.06-.18.08-.28.04-.62-.22-1.19-2.44-.97-4.43-2.42.25-4.26.72-4.61,1.21-.47.66.95,4.39,1.97,7,1.24-.88,3.29-1.59,3.76-1.13.06.06.09.13.08.21-.02.25-.36.49-1.38,1.18-.6.4-1.27.85-1.84,1.32.31.81.63,1.64.88,2.36.5,1.42,1.39,2.74,2.54,3.76-.44-1.56-.44-3.54.73-5.06.27-.35.96-.88,1.37-.88h0c.17,0,.26.08.31.14.17.23.26.77-.64,3.01-.54,1.35-.25,2.57.24,4.13Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M664.21,240.49c1.85.61,3.5,2.69,3.75,4.17.15.94-.22,2.16-1.07,3.36-1.32-1.59-4.37-3.59-5.52-3.69-1.03-.1,1.15.57,3.09,2.37.63.58,1.2,1.44,1.66,2.27-1.05,1.16-2.53,2.24-4.39,2.99-.52-1.8-2.17-4.65-3.23-4.88-.76-.16.82,1.42,1.83,3.04.45.73.71,1.46.81,2.06-.98.34-2.07.59-3.24.71-.46.05-.89.12-1.28.22-.41-1.25-1.41-3.02-2.13-3.15-.83-.14.83,1.72,1.02,3.5-2.1.81-3.02,2.03-3.74,1.37-.45-.42-1.17-2.05-1.7-4.06,1.47-1.17,3.13-.64,2.76-1.15-.32-.44-1.86-.34-2.99.17-.41-1.92-.62-4.04-.28-5.76,2.48-.57,4.82.57,5.34.92.58.39.67-.73-1.64-1.67-1.24-.51-2.5-.61-3.4-.56.41-1.55,1.02-3.11,1.86-4.39,1.01.19,1.94.42,2.68.97,1.66,1.22,2.6,3.06,2.76,2.59.23-.63-2.89-3.68-4.73-4.51,1.06-1.2,2.42-1.93,4.1-1.75,4.05.41,4.32,2.72,4.38,3.96.07,1.48,1.83.43,3.29.92Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M652.22,255.22c-.21,0-.4-.07-.59-.24-.51-.48-1.25-2.23-1.75-4.16l-.03-.12.1-.08c.88-.7,1.82-.82,2.39-.89.09-.01.19-.02.26-.04-.38-.23-1.61-.2-2.68.28l-.22.1-.05-.24c-.34-1.59-.67-3.9-.29-5.84l.02-.13.13-.03c2.47-.57,4.86.52,5.5.94.01,0,.02.01.03.02-.08-.21-.47-.78-1.85-1.35-1.34-.55-2.65-.58-3.31-.55h-.27s.07-.25.07-.25c.46-1.74,1.11-3.28,1.88-4.45l.07-.11.13.02c.95.18,1.95.4,2.76,1,.89.65,1.58,1.48,2.04,2.03.11.13.23.28.33.39-.48-.87-2.85-3.24-4.54-3.99l-.25-.11.18-.2c1.22-1.37,2.65-1.99,4.27-1.82,4.38.44,4.51,3.13,4.56,4.14.01.24.07.4.17.49.22.19.67.16,1.19.13.56-.04,1.19-.08,1.79.12h0c1.97.65,3.63,2.8,3.88,4.32.16,1-.24,2.28-1.1,3.51l-.15.21-.16-.2c-1.1-1.32-3.32-2.84-4.65-3.4.67.39,1.61.98,2.51,1.81.56.51,1.13,1.29,1.7,2.32l.07.12-.09.1c-1.15,1.28-2.69,2.33-4.47,3.04l-.2.08-.06-.21c-.52-1.79-2.05-4.35-2.98-4.71.13.23.44.64.72,1,.39.52.84,1.1,1.21,1.71.55.89.76,1.65.84,2.13l.03.16-.16.05c-1.03.36-2.14.6-3.28.72-.43.04-.85.11-1.26.21l-.18.04-.06-.17c-.42-1.28-1.39-2.9-1.96-3.01.04.16.21.5.35.78.34.67.79,1.59.89,2.5l.02.15-.14.05c-.79.31-1.42.68-1.93.97-.56.33-1.02.6-1.43.6ZM650.29,250.85c.54,2.02,1.23,3.49,1.61,3.84.32.29.71.09,1.55-.41.49-.29,1.09-.64,1.84-.94-.12-.79-.53-1.61-.83-2.22-.32-.65-.5-1-.33-1.23.08-.11.22-.15.4-.12.85.15,1.82,2.01,2.22,3.11.37-.08.75-.14,1.13-.18,1.06-.11,2.08-.33,3.03-.65-.12-.59-.38-1.23-.75-1.83-.37-.59-.81-1.17-1.19-1.68-.75-.98-.97-1.3-.82-1.55.05-.08.16-.16.4-.11,1.12.24,2.73,3,3.31,4.81,1.59-.67,2.97-1.62,4.03-2.76-.53-.93-1.05-1.64-1.56-2.1-1.03-.95-2.12-1.58-2.78-1.95-.55-.32-.7-.4-.63-.6.06-.19.29-.17.47-.15,1.17.1,4.09,2.01,5.48,3.56.71-1.08,1.03-2.16.89-3.01-.24-1.41-1.83-3.42-3.62-4.01h0c-.53-.18-1.12-.14-1.64-.1-.61.04-1.14.08-1.48-.23-.19-.17-.29-.42-.31-.77-.05-1.01-.17-3.36-4.21-3.77-1.41-.15-2.67.36-3.76,1.5,1.84.95,4.88,3.84,4.59,4.63-.05.15-.16.19-.21.2-.23.04-.43-.2-.88-.73-.47-.57-1.12-1.34-1.97-1.96-.64-.48-1.43-.71-2.47-.91-.68,1.06-1.26,2.43-1.69,3.97.74-.02,1.96.07,3.21.58,1.51.62,2.08,1.33,2.11,1.75.01.15-.05.28-.16.34-.08.05-.25.1-.49-.07-.59-.39-2.77-1.39-5.06-.91-.31,1.76-.05,3.82.26,5.32,1.14-.44,2.62-.55,3.01-.01.09.12.11.24.07.35-.08.19-.3.22-.67.26-.5.06-1.32.17-2.09.73ZM654.4,250.16h0Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M665.05,239.03c-4.24,3.32.1,5.95,2.64,6.51,2.07.45,3.53.02,5.88-.8,2.2-.77,5.85-4.72,5.64-4.69-.22.03-1.87-1.53-2.49-2.11-1.24-1.15-4.17-3.43-6.94-3.88-2.93-.47-3.63,3.09-3.66,3.67-.03.58-.77,1.05-1.07,1.29Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M669.32,245.92c-.53,0-1.07-.06-1.67-.19-1.52-.33-4.1-1.55-4.52-3.4-.26-1.16.34-2.32,1.8-3.46l.13-.1c.31-.23.84-.62.86-1.04.02-.42.37-2.31,1.59-3.29.64-.52,1.41-.71,2.29-.57,3.33.54,6.68,3.58,7.05,3.93l.1.1c1.33,1.24,2.1,1.9,2.27,1.96l.18-.03v.18c.11.43-3.75,4.21-5.77,4.92-1.67.58-2.93.99-4.32.99ZM669.26,234.22c-.57,0-1.07.17-1.5.52-1.11.89-1.43,2.63-1.45,3.01-.03.6-.65,1.06-1.02,1.34l-.12.09c-1.32,1.04-1.88,2.06-1.66,3.06.38,1.67,2.79,2.79,4.22,3.1,2.05.45,3.53,0,5.77-.79,1.87-.65,4.81-3.66,5.42-4.41-.3-.19-.9-.7-2.24-1.95l-.1-.1c-.36-.34-3.62-3.31-6.84-3.82-.16-.03-.33-.04-.48-.04Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M662.92,228.97c2.74,3.12,4.6-.21,4.93-2.13.27-1.57-.13-2.66-.86-4.41-.68-1.64-3.89-4.31-3.86-4.14.03.16-1.11,1.45-1.53,1.92-.84.96-2.49,3.22-2.72,5.32-.25,2.22,2.54,2.66,2.99,2.67.45.01.85.56,1.04.78Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M665.09,230.45c-.75,0-1.53-.45-2.32-1.35h0l-.08-.1c-.19-.23-.51-.6-.81-.61-.33,0-1.85-.24-2.67-1.17-.42-.48-.59-1.06-.52-1.72.28-2.54,2.51-5.14,2.77-5.43l.06-.07c.86-.97,1.33-1.55,1.42-1.73l-.03-.13.17-.06c.4-.12,3.5,2.84,4.1,4.26.72,1.73,1.15,2.87.87,4.52-.2,1.19-1.02,3.11-2.43,3.51-.17.05-.35.07-.52.07ZM663.22,218.56c-.16.25-.54.73-1.41,1.71l-.06.07c-.25.28-2.4,2.79-2.67,5.21-.06.55.08,1.03.42,1.42.72.83,2.13,1.03,2.38,1.04.48.01.87.48,1.11.75l.08.09c.86.98,1.68,1.37,2.44,1.16,1.23-.35,1.97-2.14,2.15-3.19.26-1.54-.15-2.64-.84-4.3-.57-1.36-2.93-3.45-3.59-3.94Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <path d="M657.49,245.16c.53-.32.89-.81,1.26-1.29.43-.56.85-1.14,1.24-1.73.79-1.18,1.49-2.42,2.12-3.69.07-.14-.05-.35-.22-.29-.35.12-.68.11-1.01-.06-.23-.11-.43.23-.2.34.42.21.86.25,1.31.1-.07-.1-.15-.19-.22-.29-.59,1.2-1.25,2.37-1.98,3.49-.36.54-.73,1.08-1.12,1.6-.4.54-.8,1.13-1.38,1.49-.22.13-.02.47.2.34h0Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25" />
                <path d="M662.12,238.33c1.86.29,3.77-.05,5.64.15,2.13.22,4.12,1.29,6.21,1.73.25.05.35-.33.1-.38-2.07-.43-4.02-1.46-6.13-1.72-1.89-.24-3.83.14-5.71-.15-.25-.04-.36.34-.1.38h0Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25" />
                <path d="M651.94,233.46c1.02,1.02,2.24,1.81,3.59,2.31.24.09.34-.29.1-.38-1.29-.48-2.45-1.23-3.42-2.21-.18-.18-.46.1-.28.28h0Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25" />
                <g>
                  <path d="M679.25,226.72c.11.59-.23,1.77-.85,3.12-.9-.62-2.29-1.18-3.04-1.33-.99-.19.64,1.52,2.3,2.75-.67,1.18-1.51,2.41-2.43,3.43-.74-1.35-2.16-3.49-2.79-4-.92-.74-2.12-.78-1.09.01.95.73,2.19,2.63,2.87,5-.28.26-.57.48-.87.69-1.03.71-2.43,1.27-3.89,1.62-.39-2.1-1.97-5.88-2.62-5.49-.71.43,1.45,2.87,1.32,5.72-2.63.36-5.16-.07-5.81-1.72-1.13-2.84,0-3.43-.59-4.03-.6-.61-.73.42-1.1-.75-.61-1.93-.26-3.64.57-5.01.18.03.37.07.57.13,1.41.38,3.32,1.41,3.52,1.9.38.94,1.8.19.79-1.03-.78-.95-3.09-1.53-4.5-1.56,1.08-1.44,2.68-2.43,4.1-2.8.68-.17,1.79-.17,3.08-.04,1.07,2.85-.19,4.27.42,4.42.6.15,2.24-2.54,1.73-4.12,1.2.21,2.44.49,3.6.81-.3,1.87-.9,2.44-.18,2.23.67-.18,1.38-1.09,1.6-1.81,1.84.6,3.19,1.28,3.3,1.84Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M666.52,238.56c-1.93,0-3.78-.51-4.35-1.96-.7-1.76-.55-2.71-.46-3.28.06-.39.07-.53-.09-.69-.18-.18-.26-.16-.38-.13-.38.11-.56-.06-.77-.7-.57-1.79-.36-3.58.58-5.17l.07-.12.14.03c.2.04.4.08.59.13,1.39.38,3.41,1.42,3.65,2.01.08.19.21.29.36.3.15,0,.29-.08.36-.22.12-.24.02-.57-.26-.91-.75-.91-3.05-1.46-4.35-1.49h-.38s.23-.32.23-.32c1.02-1.36,2.64-2.46,4.21-2.87.85-.22,2.18-.14,3.15-.04h.12s.04.13.04.13c.68,1.79.45,3.03.32,3.77-.04.21-.09.47-.05.52.04.02.18-.03.43-.32.68-.77,1.42-2.49,1.08-3.55l-.1-.31.32.06c1.18.21,2.43.49,3.61.81l.17.05-.03.18c-.12.75-.29,1.3-.4,1.67-.04.13-.08.27-.1.36.02,0,.05-.01.08-.02.6-.16,1.26-1.02,1.46-1.67l.06-.19.19.06c2.16.71,3.31,1.38,3.43,1.99.12.61-.2,1.8-.87,3.24l-.1.21-.19-.13c-.87-.6-2.24-1.15-2.97-1.3-.02,0-.03,0-.05,0,.15.35,1.12,1.38,2.5,2.41l.14.1-.09.15c-.74,1.3-1.58,2.49-2.45,3.47l-.19.21-.13-.24c-.77-1.41-2.16-3.48-2.74-3.94-.43-.35-.88-.5-1.1-.52.05.05.12.13.25.23.91.7,2.22,2.6,2.94,5.1l.03.12-.09.08c-.26.23-.55.46-.89.7-1.01.7-2.42,1.28-3.96,1.65l-.2.05-.04-.2c-.43-2.33-1.9-5.36-2.32-5.36h0c-.17.1.13.79.39,1.4.46,1.07,1.1,2.54,1.03,4.16v.16s-.17.02-.17.02c-.54.07-1.11.12-1.66.12ZM661.36,232.09c.15,0,.33.05.54.27.3.31.26.62.2,1.03-.09.56-.22,1.42.44,3.07.64,1.61,3.19,1.89,5.43,1.61.02-1.47-.57-2.82-1-3.82-.41-.94-.7-1.61-.23-1.89.12-.07.26-.08.4-.01.83.37,2.08,3.55,2.48,5.43,1.42-.36,2.7-.9,3.63-1.54.28-.2.53-.39.75-.59-.7-2.36-1.91-4.13-2.77-4.78-.35-.27-.49-.48-.46-.67.02-.11.09-.19.2-.24.32-.13,1.06.14,1.61.58.64.52,1.94,2.48,2.7,3.81.75-.87,1.49-1.92,2.14-3.04-.58-.45-2.78-2.22-2.51-2.83.05-.11.18-.24.51-.17.71.14,1.99.64,2.92,1.23.56-1.26.84-2.3.74-2.8h0c-.06-.33-.88-.93-2.98-1.63-.29.73-.98,1.56-1.67,1.75-.13.03-.36.1-.5-.04-.15-.15-.08-.37.05-.8.1-.32.25-.8.36-1.44-1.02-.27-2.09-.51-3.11-.7.19,1.23-.57,2.92-1.29,3.68-.28.31-.54.44-.75.38-.42-.1-.34-.51-.26-.98.12-.68.33-1.81-.26-3.44-1.28-.13-2.28-.11-2.89.04-1.38.35-2.79,1.27-3.76,2.43,1.43.12,3.49.68,4.26,1.61.55.66.4,1.15.31,1.33-.14.28-.42.45-.72.44-.31-.01-.58-.22-.72-.55-.14-.36-1.87-1.37-3.39-1.78-.15-.04-.29-.07-.42-.1-.83,1.46-.99,3.09-.48,4.73.13.4.2.45.21.46,0,0,.04-.01.07-.02.06-.02.14-.04.23-.04ZM671.15,230.24h0Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <path d="M662.36,238.04c-.52-1.17-.85-2.43-.96-3.71-.06-.71-.01-1.26.61-1.7.5-.36,1.08-.63,1.65-.85,1.12-.44,2.29-.77,3.44-1.13,1.24-.39,2.48-.77,3.72-1.16.24-.08.14-.46-.1-.38-1.42.44-2.83.88-4.25,1.33-1.31.41-2.65.77-3.87,1.39-.48.25-1.03.54-1.34.99-.33.47-.28,1.05-.23,1.6.12,1.32.47,2.61,1.01,3.82.1.23.44.03.34-.2h0Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25" />
              </g>
              <g id="island-chairs">
                <g clip-path="url(#clippath)">
                  <g>
                    <image width="278" height="290" transform="translate(411.59 370.94) rotate(-180) scale(.1)" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARYAAAEiCAYAAAA8pv30AAAACXBIWXMAAAsSAAALEgHS3X78AAABT0lEQVR4nO3BMQEAAADCoPVP7WkJoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAb7Q4AAWGQdkYAAAAASUVORK5CYII=" mix-blend-mode="multiply" opacity=".5" />
                    <g>
                      <g>
                        <rect x="396.48" y="344.15" width="1.43" height="5.16" transform="translate(-128.32 304.13) rotate(-36.48)" fill="#e2d1b6" stroke="#ae9d85" stroke-miterlimit="10" />
                        <path d="M394.79,345.04l1.5-1.11,3.32,4.49-1.5,1.11-3.32-4.49ZM396.2,344.53l-.81.6,2.81,3.8.81-.6-2.81-3.8Z" fill="#e2d1b6" stroke="#ae9d85" stroke-miterlimit="10" />
                      </g>
                      <g>
                        <rect x="395.48" y="343.78" width="1.43" height="5.82" transform="translate(-128.5 303.53) rotate(-36.48)" fill="#e2d1b6" stroke="#ae9d85" stroke-miterlimit="10" />
                        <path d="M393.59,344.73l1.5-1.11,3.72,5.03-1.5,1.11-3.72-5.03ZM395,344.23l-.81.6,3.2,4.33.81-.6-3.2-4.33Z" fill="#e2d1b6" stroke="#ae9d85" stroke-miterlimit="10" />
                      </g>
                      <g>
                        <rect x="394.59" y="365.67" width="5.19" height="1.43" transform="translate(-133.56 467.87) rotate(-53.52)" fill="#e2d1b6" stroke="#ae9d85" stroke-miterlimit="10" />
                        <path d="M394.77,368.09l3.34-4.52,1.5,1.11-3.34,4.52-1.5-1.11ZM398.2,364.17l-2.83,3.83.81.6,2.83-3.83-.81-.6Z" fill="#e2d1b6" stroke="#ae9d85" stroke-miterlimit="10" />
                      </g>
                      <g>
                        <rect x="393.29" y="365.69" width="5.82" height="1.43" transform="translate(-133.98 467.09) rotate(-53.52)" fill="#e2d1b6" stroke="#ae9d85" stroke-miterlimit="10" />
                        <path d="M393.59,368.37l3.72-5.03,1.5,1.11-3.72,5.03-1.5-1.11ZM397.4,363.95l-3.2,4.33.81.6,3.2-4.33-.81-.6Z" fill="#e2d1b6" stroke="#ae9d85" stroke-miterlimit="10" />
                      </g>
                      <g>
                        <path d="M403.32,358.13c0,4.05-3.16,7.4-7.21,7.63l-7.92.45c-1.52.09-2.52-.86-2.52-2.38v-14.74c0-1.52,1-2.47,2.52-2.38l7.92.45c4.05.23,7.21,3.58,7.21,7.63v3.35Z" fill="#e2d1b6" stroke="#ae9d85" stroke-miterlimit="10" />
                        <path d="M385.46,363.82v-14.74c0-.81.26-1.48.76-1.95.5-.47,1.18-.69,1.99-.65l7.92.45c4.16.23,7.41,3.68,7.41,7.84v3.35c0,4.16-3.26,7.61-7.41,7.84l-7.92.45c-.81.05-1.49-.18-1.99-.65s-.76-1.14-.76-1.95ZM403.1,354.77c0-3.94-3.08-7.19-7.01-7.41l-7.92-.45c-.68-.04-1.26.14-1.67.53-.41.39-.62.95-.62,1.64v14.74c0,.69.22,1.25.62,1.64.41.39.98.57,1.67.53l7.92-.45c3.93-.22,7.01-3.48,7.01-7.41v-3.35Z" fill="#e2d1b6" stroke="#ae9d85" stroke-miterlimit="10" />
                      </g>
                      <g>
                        <path d="M402.54,357.94c0,3.6-2.81,6.58-6.41,6.78l-7.04.4c-1.35.08-2.24-.77-2.24-2.12v-13.11c0-1.35.89-2.19,2.24-2.12l7.04.4c3.6.2,6.41,3.18,6.41,6.78v2.98Z" fill="#e2d1b6" stroke="#ae9d85" stroke-miterlimit="10" />
                        <path d="M386.74,363v-13.11c0-.69.22-1.27.65-1.67.42-.4,1.01-.59,1.71-.55l7.04.4c3.65.21,6.51,3.23,6.51,6.89v2.98c0,3.66-2.86,6.68-6.51,6.89l-7.04.4c-.69.04-1.28-.15-1.71-.55-.42-.4-.65-.98-.65-1.67ZM402.43,354.96c0-3.54-2.77-6.47-6.31-6.67l-7.04-.4c-.63-.04-1.17.14-1.55.49-.38.36-.58.88-.58,1.52v13.11c0,.63.2,1.16.58,1.52.38.36.91.53,1.55.49l7.04-.4c3.54-.2,6.31-3.13,6.31-6.67v-2.98Z" fill="#e2d1b6" stroke="#ae9d85" stroke-miterlimit="10" />
                      </g>
                      <g>
                        <path d="M396.39,367.19l1.04-.04c5.25-.18,9.41-4.49,9.41-9.74v-1.72c0-5.25-4.16-9.56-9.41-9.74l-1.04-.04,1.59-1.22,6.86,2.37,3.13,3.99.85,5.4-.98,5.2s-2.12,3.35-2.21,3.48c-.09.13-3.13,2.69-3.54,2.85-.41.16-4.11.6-4.21.54-.09-.06-1.5-1.33-1.5-1.33Z" fill="#e2d1b6" stroke="#ae9d85" stroke-miterlimit="10" />
                        <path d="M395.78,346.11l2.16-1.66,7.03,2.43,3.21,4.08.87,5.49v.04s-1,5.24-1,5.24l-.02.04c-.22.34-2.13,3.36-2.22,3.49-.1.14-3.16,2.74-3.64,2.92-.29.11-1.81.31-2.27.36-1.99.25-2.06.2-2.13.15-.1-.06-1.1-.96-1.52-1.34l-.4-.36,1.57-.05c5.16-.18,9.2-4.36,9.2-9.52v-1.72c0-5.16-4.04-9.34-9.2-9.52l-1.64-.06ZM407.06,355.69v1.72c0,5.4-4.22,9.77-9.62,9.95l-.51.02c.43.38.89.8,1.04.92.5,0,3.69-.39,4.05-.53.33-.13,3.23-2.53,3.45-2.78.07-.1,1.33-2.09,2.18-3.42l.97-5.12-.84-5.31-3.06-3.89-6.69-2.31-1.02.78.44.02c5.39.19,9.62,4.56,9.62,9.95Z" fill="#e2d1b6" stroke="#ae9d85" stroke-miterlimit="10" />
                      </g>
                      <g>
                        <path d="M408.03,357.72c-.13,5.11-4.24,9.23-9.35,9.4l-7.17.23.06,1.98,7.17-.23c6.15-.2,11.1-5.17,11.26-11.33v-2.44c-.16-6.16-5.11-11.13-11.26-11.33l-7.17-.23-.06,1.98,7.17.23c5.11.16,9.21,4.29,9.35,9.4v2.33Z" fill="#e2d1b6" stroke="#ae9d85" stroke-miterlimit="10" />
                        <path d="M391.3,367.13l7.38-.24c4.99-.16,9-4.19,9.14-9.18v-2.33c-.13-4.99-4.14-9.02-9.14-9.18l-7.38-.24.08-2.41,7.38.24c6.27.2,11.31,5.27,11.47,11.54v2.44c-.17,6.28-5.2,11.34-11.47,11.54l-7.38.24-.08-2.41ZM391.79,344l-.05,1.55,6.95.22c5.22.17,9.42,4.39,9.55,9.61v2.34s0,0,0,0c-.14,5.22-4.33,9.44-9.55,9.61l-6.95.22.05,1.55,6.95-.22c6.04-.19,10.9-5.08,11.05-11.12v-2.43c-.16-6.04-5.01-10.92-11.05-11.11l-6.95-.22Z" fill="#e2d1b6" stroke="#ae9d85" stroke-miterlimit="10" />
                      </g>
                    </g>
                  </g>
                  <g>
                    <image width="308" height="307" transform="translate(413.91 404.7) rotate(-180) scale(.1)" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATQAAAEzCAYAAAC/hP8nAAAACXBIWXMAAAsSAAALEgHS3X78AAABhklEQVR4nO3BMQEAAADCoPVPbQZ/oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDDAMbuAAFje8GzAAAAAElFTkSuQmCC" mix-blend-mode="multiply" opacity=".5" />
                    <g>
                      <g>
                        <g>
                          <rect x="391.51" y="379.45" width="1.43" height="5.16" transform="translate(-43.67 713.36) rotate(-81.48)" fill="#e2d1b6" />
                          <path d="M389.74,380.88l5.2.78-.23,1.52-5.2-.78.23-1.52ZM394.82,381.74l-5-.75-.2,1.32,5,.75.2-1.32Z" fill="#ae9d85" />
                        </g>
                        <g>
                          <path d="M389.32,382.54l.28-1.85,5.53.83-.28,1.85-5.53-.83ZM389.96,381.18l-.15.99,4.67.7.15-.99-4.67-.7Z" fill="#e2d1b6" />
                          <path d="M389.56,380.63l5.63.84-.29,1.95-5.63-.84.29-1.95ZM395.07,381.56l-5.43-.81-.26,1.75,5.43.81.26-1.75ZM389.92,381.12l4.77.71-.16,1.09-4.77-.71.16-1.09ZM394.58,381.92l-4.57-.68-.13.89,4.57.68.13-.89Z" fill="#ae9d85" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect x="390.77" y="379.8" width="1.43" height="5.82" transform="translate(-44.97 713.21) rotate(-81.48)" fill="#e2d1b6" />
                          <path d="M388.68,381.51l5.86.88-.23,1.52-5.86-.88.23-1.52ZM394.42,382.47l-5.66-.85-.2,1.32,5.66.85.2-1.32Z" fill="#ae9d85" />
                        </g>
                        <g>
                          <path d="M388.26,383.17l.28-1.85,6.18.93-.28,1.85-6.18-.93ZM388.9,381.81l-.15.99,5.33.8.15-.99-5.33-.8Z" fill="#e2d1b6" />
                          <path d="M388.49,381.26l6.28.94-.29,1.95-6.28-.94.29-1.95ZM394.66,382.29l-6.08-.91-.26,1.75,6.08.91.26-1.75ZM388.86,381.75l5.43.81-.16,1.09-5.43-.81.16-1.09ZM394.17,382.65l-5.23-.78-.13.89,5.23.78.13-.89Z" fill="#ae9d85" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect x="405.4" y="393.34" width="1.43" height="5.19" transform="translate(-54.15 64.5) rotate(-8.52)" fill="#e2d1b6" />
                          <path d="M406.48,393.2l.78,5.23-1.52.23-.78-5.23,1.52-.23ZM407.15,398.35l-.75-5.04-1.32.2.75,5.04,1.32-.2Z" fill="#ae9d85" />
                        </g>
                        <g>
                          <path d="M405.61,398.85l-.83-5.56,1.85-.28.83,5.56-1.85.28ZM405.27,393.65l.7,4.71.99-.15-.7-4.71-.99.15Z" fill="#e2d1b6" />
                          <path d="M406.66,392.96l.85,5.66-1.95.29-.85-5.66,1.95-.29ZM407.4,398.53l-.82-5.46-1.75.26.82,5.46,1.75-.26ZM406.3,393.45l.72,4.81-1.09.16-.72-4.81,1.09-.16ZM406.91,398.17l-.69-4.61-.89.13.69,4.61.89-.13Z" fill="#ae9d85" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect x="404.72" y="393.74" width="1.43" height="5.82" transform="translate(-54.27 64.41) rotate(-8.52)" fill="#e2d1b6" />
                          <path d="M405.76,393.61l.88,5.86-1.52.23-.88-5.86,1.52-.23ZM406.52,399.38l-.85-5.66-1.32.2.85,5.66,1.32-.2Z" fill="#ae9d85" />
                        </g>
                        <g>
                          <path d="M404.97,399.88l-.93-6.18,1.85-.28.93,6.18-1.85.28ZM404.54,394.06l.8,5.33.99-.15-.8-5.33-.99.15Z" fill="#e2d1b6" />
                          <path d="M405.94,393.36l.94,6.28-1.95.29-.94-6.28,1.95-.29ZM406.76,399.56l-.91-6.08-1.75.26.91,6.08,1.75-.26ZM405.57,393.85l.81,5.43-1.09.16-.81-5.43,1.09-.16ZM406.27,399.2l-.78-5.23-.89.13.78,5.23.89-.13Z" fill="#ae9d85" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M404.61,385.76c2.87,2.87,3,7.47.3,10.49l-5.28,5.91c-1.01,1.13-2.39,1.17-3.47.1l-10.43-10.43c-1.08-1.08-1.04-2.45.1-3.47l5.91-5.28c3.02-2.7,7.63-2.57,10.49.3l2.37,2.37Z" fill="#e2d1b6" />
                          <path d="M396.84,381.1c1.97,0,3.94.75,5.44,2.25l2.37,2.37c2.88,2.88,3.01,7.52.3,10.56l-5.28,5.91c-.51.57-1.11.88-1.75.89-.64.02-1.26-.26-1.79-.79l-10.43-10.43c-.54-.54-.81-1.16-.79-1.79s.33-1.24.89-1.75l5.91-5.28c1.46-1.31,3.29-1.95,5.12-1.95ZM397.86,402.99s.04,0,.06,0c.61-.02,1.19-.31,1.67-.86l5.28-5.91c2.68-3,2.55-7.58-.29-10.42l-2.37-2.37c-1.48-1.48-3.42-2.22-5.37-2.22-1.8,0-3.61.64-5.05,1.93l-5.91,5.28c-.55.49-.84,1.07-.86,1.67s.25,1.2.76,1.72l10.43,10.43c.5.5,1.08.77,1.66.77Z" fill="#ae9d85" />
                        </g>
                        <g>
                          <path d="M396.01,402.42l-10.42-10.42c-.57-.57-.86-1.23-.84-1.91.02-.68.35-1.33.95-1.86l5.91-5.28c3.11-2.77,7.85-2.64,10.79.3l2.37,2.37c2.94,2.94,3.08,7.68.3,10.79l-5.28,5.91c-.54.6-1.18.93-1.86.95s-1.34-.27-1.92-.84ZM402.09,383.54c-2.78-2.78-7.26-2.91-10.2-.29l-5.91,5.28c-.51.46-.79.99-.81,1.55-.02.56.23,1.11.72,1.6l10.42,10.42c.48.48,1.04.73,1.6.72.56-.02,1.1-.29,1.55-.81l5.28-5.91c2.62-2.93,2.49-7.41-.29-10.2l-2.37-2.37Z" fill="#e2d1b6" />
                          <path d="M396.84,380.88c2.03,0,4.05.78,5.59,2.31l2.37,2.37c2.96,2.96,3.1,7.73.31,10.86l-5.28,5.91c-.55.61-1.2.95-1.9.97-.7.02-1.37-.28-1.95-.86l-10.42-10.42c-.58-.58-.88-1.26-.86-1.95.02-.7.35-1.35.97-1.9l5.91-5.28c1.5-1.34,3.39-2.01,5.27-2.01ZM397.86,403.21s.04,0,.06,0c.67-.02,1.3-.34,1.83-.93l5.28-5.91c2.76-3.09,2.62-7.79-.3-10.72l-2.37-2.37c-1.52-1.52-3.52-2.28-5.52-2.28-1.86,0-3.71.66-5.2,1.98l-5.91,5.28c-.59.53-.91,1.16-.93,1.83-.02.67.27,1.32.83,1.88l10.42,10.42c.54.54,1.17.83,1.82.83ZM396.84,381.32c1.92,0,3.83.73,5.29,2.19l2.37,2.37c2.8,2.8,2.93,7.31.29,10.27l-5.28,5.91c-.47.52-1.02.81-1.59.82-.57.02-1.14-.24-1.63-.73l-10.42-10.42c-.49-.49-.75-1.06-.73-1.63.02-.57.3-1.12.82-1.59l5.91-5.28c1.42-1.27,3.2-1.9,4.98-1.9ZM402.05,383.58c-2.76-2.76-7.21-2.89-10.13-.29l-5.91,5.28c-.5.45-.77.97-.79,1.52-.02.55.23,1.09.7,1.56l10.42,10.42c.47.47,1.01.72,1.56.7.55-.02,1.07-.29,1.52-.79l5.28-5.91c2.6-2.92,2.48-7.36-.29-10.13l-2.37-2.37Z" fill="#ae9d85" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M403.93,386.18c2.55,2.55,2.66,6.64.26,9.33l-4.7,5.26c-.9,1.01-2.12,1.04-3.08.09l-9.27-9.27c-.96-.96-.92-2.18.09-3.08l5.26-4.7c2.69-2.4,6.78-2.28,9.33.26l2.11,2.11Z" fill="#e2d1b6" />
                          <path d="M397.02,382.03c1.76,0,3.51.67,4.84,2l2.11,2.11c2.56,2.56,2.68,6.69.27,9.4l-4.7,5.26c-.45.51-.99.78-1.56.8-.57.02-1.12-.23-1.6-.71l-9.27-9.27c-.48-.48-.72-1.03-.71-1.6.02-.57.29-1.1.8-1.56l5.26-4.7c1.3-1.16,2.93-1.74,4.56-1.74ZM397.93,401.5s.03,0,.05,0c.54-.02,1.05-.28,1.48-.76l4.7-5.26c2.38-2.67,2.27-6.73-.26-9.26l-2.11-2.11c-1.31-1.31-3.04-1.97-4.77-1.97-1.6,0-3.21.57-4.49,1.71l-5.26,4.7c-.48.43-.75.95-.76,1.48-.02.54.22,1.07.68,1.52l9.27,9.27c.44.44.95.68,1.48.68Z" fill="#ae9d85" />
                        </g>
                        <g>
                          <path d="M396.34,400.93l-9.27-9.27c-.49-.49-.74-1.06-.72-1.64.02-.58.3-1.13.82-1.6l5.26-4.7c2.73-2.44,6.89-2.32,9.48.27l2.11,2.11c2.59,2.59,2.7,6.75.27,9.48l-4.7,5.26c-.46.52-1.01.8-1.6.82-.58.02-1.15-.23-1.64-.72ZM401.74,384.15c-2.51-2.51-6.54-2.62-9.18-.26l-5.26,4.7c-.47.42-.73.92-.74,1.44-.01.52.21,1.03.66,1.48l9.27,9.27c.45.45.96.68,1.48.66.52-.01,1.02-.27,1.44-.74l4.7-5.26c2.36-2.64,2.25-6.67-.26-9.18l-2.11-2.11Z" fill="#e2d1b6" />
                          <path d="M397.02,381.92c1.78,0,3.56.68,4.92,2.03l2.11,2.11c2.61,2.61,2.72,6.8.27,9.55l-4.7,5.26c-.47.53-1.04.82-1.63.83-.6.01-1.18-.24-1.68-.74l-9.27-9.27c-.5-.5-.76-1.08-.74-1.68.02-.6.3-1.16.83-1.63l5.26-4.7c1.32-1.18,2.98-1.77,4.63-1.77ZM397.93,401.6s.03,0,.05,0c.57-.02,1.11-.29,1.56-.8l4.7-5.26c2.42-2.71,2.3-6.84-.27-9.41l-2.11-2.11c-1.33-1.33-3.09-2.01-4.85-2.01-1.63,0-3.26.58-4.56,1.74l-5.26,4.7c-.51.45-.78.99-.8,1.56-.02.57.23,1.12.71,1.6l9.27,9.27c.47.47,1,.71,1.55.71ZM397.02,382.14c1.73,0,3.45.66,4.76,1.97l2.11,2.11c2.52,2.52,2.64,6.59.26,9.25l-4.7,5.26c-.43.48-.94.75-1.48.76-.54.01-1.06-.22-1.52-.68l-9.27-9.27c-.46-.46-.69-.98-.68-1.52.02-.54.28-1.05.76-1.48l5.26-4.7c1.28-1.14,2.88-1.71,4.49-1.71ZM397.93,401.39s.03,0,.05,0c.51-.01.99-.27,1.41-.73l4.7-5.26c2.34-2.62,2.23-6.62-.26-9.11l-2.11-2.11c-2.49-2.49-6.49-2.6-9.11-.26l-5.26,4.7c-.46.41-.71.9-.73,1.41-.01.51.21,1.01.65,1.44l9.27,9.27c.42.42.91.65,1.4.65Z" fill="#ae9d85" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M406.12,397.06l.71-.76c3.58-3.84,3.48-9.83-.23-13.54l-1.22-1.22c-3.71-3.71-9.7-3.82-13.54-.23l-.76.71.26-1.99,6.53-3.18,5.03.6,4.42,3.21,2.98,4.37s.87,3.87.89,4.02c.02.16-.31,4.12-.49,4.52-.18.4-2.48,3.33-2.59,3.35-.11.02-2,.12-2,.12Z" fill="#e2d1b6" />
                          <path d="M397.86,376.8l5.06.61h.01s4.43,3.23,4.43,3.23h0s2.99,4.38,2.99,4.38h0c.04.17.87,3.88.89,4.04.03.19-.31,4.13-.49,4.55-.17.38-2.48,3.35-2.63,3.38-.11.02-1.81.11-2,.12h-.12s.8-.85.8-.85c1.72-1.85,2.65-4.26,2.6-6.78-.04-2.53-1.05-4.9-2.84-6.69l-1.22-1.22c-1.79-1.79-4.16-2.79-6.69-2.84-2.52-.04-4.93.88-6.78,2.6l-.86.81.29-2.15,6.57-3.19ZM402.89,377.51l-5-.6-6.49,3.16-.24,1.82.66-.61c1.87-1.74,4.3-2.68,6.85-2.63,2.55.04,4.95,1.06,6.76,2.87l1.22,1.22c1.8,1.8,2.82,4.2,2.87,6.76.04,2.55-.89,4.99-2.63,6.85l-.63.67c.74-.04,1.74-.1,1.86-.11.19-.14,2.38-2.92,2.56-3.33.17-.37.51-4.31.49-4.49-.02-.15-.84-3.8-.89-4.01l-2.97-4.35-4.4-3.2Z" fill="#ae9d85" />
                        </g>
                        <g>
                          <path d="M390.79,382.59l.36-2.7,6.69-3.25,5.15.62,4.5,3.27.02.03,3.01,4.4v.04c.1.4.88,3.88.91,4.04.03.17-.3,4.17-.51,4.64-.13.29-1.07,1.5-1.35,1.86-1.23,1.58-1.32,1.6-1.4,1.61-.11.02-1.46.1-2.03.13l-.53.03,1.08-1.15c3.52-3.77,3.42-9.59-.23-13.24l-1.22-1.22c-3.65-3.65-9.46-3.75-13.24-.23l-1.2,1.12ZM405.53,381.39l1.22,1.22c3.82,3.82,3.92,9.89.24,13.84l-.34.37c.57-.03,1.19-.07,1.38-.08.35-.35,2.33-2.89,2.49-3.24.14-.32.49-4.07.47-4.41-.02-.12-.53-2.42-.88-3.96l-2.94-4.3-4.35-3.16-4.91-.59-6.37,3.1-.17,1.28.32-.3c3.94-3.68,10.02-3.58,13.84.24Z" fill="#e2d1b6" />
                          <path d="M397.83,376.58l5.18.62h.01s4.5,3.28,4.5,3.28l.03.04,3.01,4.41.02.11c.32,1.43.86,3.85.88,3.99.03.17-.3,4.19-.51,4.67-.13.3-1.07,1.51-1.36,1.88-1.24,1.59-1.33,1.61-1.43,1.63-.12.02-1.46.1-2.03.13l-.66.03,1.16-1.24c3.5-3.75,3.4-9.54-.23-13.17l-1.22-1.22c-3.63-3.63-9.41-3.73-13.17-.23l-1.3,1.22.38-2.87,6.73-3.27ZM402.97,377.3l-5.12-.61-6.65,3.24-.34,2.53,1.1-1.03c3.79-3.54,9.64-3.44,13.31.23l1.22,1.22c3.67,3.67,3.77,9.51.23,13.31l-.99,1.06.41-.02c1.19-.06,1.94-.11,2.02-.12.06-.01.15-.03,1.37-1.6.58-.75,1.24-1.63,1.34-1.85.21-.46.53-4.44.5-4.61-.01-.1-.34-1.55-.88-3.98l-.02-.09-3.02-4.42-4.48-3.26ZM397.9,377.03l4.94.59h.01s4.35,3.17,4.35,3.17h0s2.94,4.32,2.94,4.32h0c.33,1.48.86,3.85.88,3.97.02.35-.33,4.11-.48,4.44-.16.36-2.18,2.93-2.5,3.25h-.01s-.02.01-.02.01c-.23.02-1.05.07-1.39.08h-.12s.43-.45.43-.45c3.66-3.92,3.56-9.97-.24-13.77l-1.22-1.22c-3.8-3.8-9.84-3.9-13.77-.24l-.42.4.19-1.44,6.41-3.12ZM402.8,377.72l-4.89-.59-6.33,3.08-.15,1.11.22-.2c1.94-1.81,4.39-2.71,6.83-2.71,2.56,0,5.12.99,7.08,2.95l1.22,1.22c3.83,3.83,3.94,9.94.24,13.91l-.26.28c.37-.02,1.02-.06,1.24-.08.4-.42,2.32-2.88,2.46-3.21.14-.32.48-4.05.47-4.39-.02-.11-.55-2.47-.88-3.94l-2.93-4.29-4.33-3.15Z" fill="#ae9d85" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M407.65,382.13c3.52,3.71,3.53,9.53.04,13.25l-4.91,5.23,1.45,1.36,4.91-5.23c4.21-4.49,4.19-11.51-.04-15.97l-1.72-1.72c-4.47-4.24-11.48-4.26-15.97-.04l-5.23,4.91,1.36,1.45,5.23-4.91c3.73-3.5,9.55-3.48,13.25.04l1.65,1.65Z" fill="#e2d1b6" />
                          <path d="M399.36,375.81c2.9,0,5.79,1.07,8.05,3.2l1.72,1.72c4.26,4.49,4.28,11.53.05,16.04l-4.94,5.27-1.52-1.43,4.94-5.27c3.48-3.71,3.46-9.5-.04-13.18l-1.65-1.65c-3.69-3.5-9.48-3.51-13.18-.04l-5.27,4.94-1.43-1.52.04-.03,5.23-4.91c2.25-2.11,5.12-3.16,8-3.16ZM404.23,401.9l4.87-5.19c4.19-4.47,4.18-11.46-.04-15.9l-1.72-1.72c-4.45-4.22-11.43-4.24-15.9-.04l-5.19,4.87,1.29,1.37,5.19-4.87c3.74-3.51,9.6-3.5,13.32.04l1.65,1.65c3.53,3.73,3.55,9.58.04,13.32l-4.87,5.19,1.37,1.29Z" fill="#ae9d85" />
                        </g>
                        <g>
                          <path d="M402.48,400.63l5.05-5.39c3.42-3.64,3.4-9.33-.03-12.95l-1.65-1.65c-3.62-3.43-9.31-3.45-12.95-.03l-5.39,5.05-1.65-1.76,5.39-5.05c4.57-4.29,11.72-4.27,16.27.04l1.73,1.73c4.32,4.55,4.34,11.7.05,16.27l-5.05,5.39-1.76-1.65ZM386.47,383.92l1.06,1.13,5.07-4.76c3.81-3.57,9.76-3.56,13.55.04l1.65,1.65h0c3.59,3.79,3.61,9.74.04,13.55l-4.76,5.07,1.13,1.06,4.76-5.07c4.13-4.41,4.12-11.29-.04-15.68l-1.72-1.72c-4.38-4.16-11.27-4.17-15.67-.04l-5.07,4.76Z" fill="#e2d1b6" />
                          <path d="M399.36,375.59c2.95,0,5.9,1.09,8.19,3.26l1.73,1.73c4.34,4.57,4.36,11.75.05,16.34l-5.09,5.42-1.83-1.72,5.09-5.42c3.4-3.62,3.38-9.28-.03-12.89l-1.65-1.65c-1.81-1.71-4.13-2.57-6.46-2.57-2.31,0-4.62.85-6.43,2.54l-5.42,5.09-1.72-1.83.04-.03,5.39-5.05c2.29-2.15,5.22-3.22,8.15-3.22ZM404.24,402.21l5.02-5.35c4.27-4.55,4.25-11.67-.05-16.2l-1.73-1.73c-4.53-4.3-11.65-4.32-16.2-.04l-5.35,5.02,1.58,1.69,5.35-5.02c3.66-3.44,9.38-3.42,13.02.03l1.65,1.65c3.45,3.64,3.47,9.36.04,13.02l-5.02,5.35,1.69,1.58ZM399.36,376.02c2.84,0,5.68,1.05,7.89,3.14l1.72,1.72c4.18,4.4,4.2,11.32.04,15.75l-4.79,5.11-1.2-1.13,4.79-5.11c3.56-3.79,3.54-9.71-.04-13.48l-1.66-1.66c-3.77-3.58-9.69-3.59-13.48-.04l-5.11,4.79-1.13-1.2.04-.03,5.07-4.76c2.21-2.07,5.03-3.1,7.85-3.1ZM404.22,401.6l4.72-5.03c4.12-4.39,4.1-11.24-.04-15.61l-1.72-1.72c-4.36-4.14-11.22-4.15-15.6-.04l-5.03,4.72.99,1.06,5.03-4.72c3.83-3.59,9.81-3.58,13.62.04l1.66,1.66c3.62,3.81,3.63,9.79.04,13.62l-4.72,5.04,1.06.99Z" fill="#ae9d85" />
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <image width="278" height="291" transform="translate(411.59 433.96) rotate(-180) scale(.1)" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARYAAAEjCAYAAAD3+i5RAAAACXBIWXMAAAsSAAALEgHS3X78AAABUUlEQVR4nO3BMQEAAADCoPVPbQo/oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAowHxZwABCf0hUwAAAABJRU5ErkJggg==" mix-blend-mode="multiply" opacity=".5" />
                    <g>
                      <g>
                        <g>
                          <rect x="396.48" y="407.15" width="1.43" height="5.16" transform="translate(-165.78 316.48) rotate(-36.48)" fill="#e2d1b6" />
                          <path d="M396.25,407.16l3.13,4.23-1.23.91-3.13-4.23,1.23-.91ZM399.24,411.36l-3.01-4.07-1.07.79,3.01,4.07,1.07-.79Z" fill="#ae9d85" />
                        </g>
                        <g>
                          <path d="M394.79,408.03l1.5-1.11,3.32,4.49-1.5,1.11-3.32-4.49ZM396.2,407.53l-.81.6,2.81,3.8.81-.6-2.81-3.8Z" fill="#e2d1b6" />
                          <path d="M396.3,406.85l3.38,4.57-1.58,1.17-3.38-4.57,1.58-1.17ZM399.54,411.41l-3.26-4.41-1.42,1.05,3.26,4.41,1.42-1.05ZM396.21,407.46l2.87,3.88-.89.66-2.87-3.88.89-.66ZM398.94,411.32l-2.75-3.72-.73.54,2.75,3.72.73-.54Z" fill="#ae9d85" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect x="395.48" y="406.78" width="1.43" height="5.82" transform="translate(-165.95 315.87) rotate(-36.48)" fill="#e2d1b6" />
                          <path d="M395.05,406.85l3.52,4.76-1.23.91-3.52-4.76,1.23-.91ZM398.43,411.59l-3.4-4.6-1.07.79,3.4,4.6,1.07-.79Z" fill="#ae9d85" />
                        </g>
                        <g>
                          <path d="M393.59,407.73l1.5-1.11,3.72,5.03-1.5,1.11-3.72-5.03ZM395,407.22l-.81.6,3.2,4.33.81-.6-3.2-4.33Z" fill="#e2d1b6" />
                          <path d="M395.1,406.55l3.78,5.11-1.58,1.17-3.78-5.11,1.58-1.17ZM398.74,411.63l-3.66-4.95-1.42,1.05,3.66,4.95,1.42-1.05ZM395.01,407.15l3.26,4.41-.89.66-3.26-4.41.89-.66ZM398.13,411.54l-3.14-4.25-.73.54,3.14,4.25.73-.54Z" fill="#ae9d85" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect x="394.59" y="428.66" width="5.19" height="1.43" transform="translate(-184.21 493.41) rotate(-53.52)" fill="#e2d1b6" />
                          <path d="M398.14,426.8l1.23.91-3.15,4.26-1.23-.91,3.15-4.26ZM399.24,427.73l-1.07-.79-3.03,4.09,1.07.79,3.03-4.09Z" fill="#ae9d85" />
                        </g>
                        <g>
                          <path d="M394.77,431.09l3.34-4.52,1.5,1.11-3.34,4.52-1.5-1.11ZM398.2,427.17l-2.83,3.83.81.6,2.83-3.83-.81-.6Z" fill="#e2d1b6" />
                          <path d="M398.1,426.49l1.58,1.17-3.4,4.6-1.58-1.17,3.4-4.6ZM399.54,427.68l-1.42-1.05-3.28,4.44,1.42,1.05,3.28-4.44ZM398.19,427.1l.89.66-2.89,3.91-.89-.66,2.89-3.91ZM398.94,427.77l-.73-.54-2.77,3.75.73.54,2.77-3.75Z" fill="#ae9d85" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect x="393.29" y="428.69" width="5.82" height="1.43" transform="translate(-184.63 492.63) rotate(-53.52)" fill="#e2d1b6" />
                          <path d="M397.34,426.57l1.23.91-3.52,4.76-1.23-.91,3.52-4.76ZM398.43,427.5l-1.07-.79-3.4,4.6,1.07.79,3.4-4.6Z" fill="#ae9d85" />
                        </g>
                        <g>
                          <path d="M393.59,431.36l3.72-5.03,1.5,1.11-3.72,5.03-1.5-1.11ZM397.4,426.94l-3.2,4.33.81.6,3.2-4.33-.81-.6Z" fill="#e2d1b6" />
                          <path d="M397.3,426.27l1.58,1.17-3.78,5.11-1.58-1.17,3.78-5.11ZM398.74,427.46l-1.42-1.05-3.66,4.95,1.42,1.05,3.66-4.95ZM397.39,426.87l.89.66-3.26,4.41-.89-.66,3.26-4.41ZM398.13,427.55l-.73-.54-3.14,4.25.73.54,3.14-4.25Z" fill="#ae9d85" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M403.32,421.12c0,4.05-3.16,7.4-7.21,7.63l-7.92.45c-1.52.09-2.52-.86-2.52-2.38v-14.74c0-1.52,1-2.47,2.52-2.38l7.92.45c4.05.23,7.21,3.58,7.21,7.63v3.35Z" fill="#e2d1b6" />
                          <path d="M388,409.64c.06,0,.13,0,.19,0l7.92.45c4.07.23,7.26,3.6,7.26,7.68v3.35c0,4.08-3.19,7.45-7.26,7.68l-7.92.45c-.76.04-1.4-.17-1.87-.6-.46-.44-.71-1.07-.71-1.83v-14.74c0-.76.24-1.39.71-1.83.42-.4,1-.61,1.67-.61ZM388,429.15c.06,0,.12,0,.19,0l7.92-.45c4.02-.23,7.16-3.56,7.16-7.58v-3.35c0-4.02-3.15-7.35-7.16-7.58l-7.92-.45c-.73-.04-1.35.16-1.79.57-.44.42-.67,1.02-.67,1.76v14.74c0,.73.23,1.34.67,1.76.4.38.96.58,1.61.58Z" fill="#ae9d85" />
                        </g>
                        <g>
                          <path d="M385.46,426.82v-14.74c0-.81.26-1.48.76-1.95.5-.47,1.18-.69,1.99-.65l7.92.45c4.16.23,7.41,3.68,7.41,7.84v3.35c0,4.16-3.26,7.61-7.41,7.84l-7.92.45c-.81.05-1.49-.18-1.99-.65s-.76-1.14-.76-1.95ZM403.1,417.77c0-3.94-3.08-7.19-7.01-7.41l-7.92-.45c-.68-.04-1.26.14-1.67.53-.41.39-.62.95-.62,1.64v14.74c0,.69.22,1.25.62,1.64.41.39.98.57,1.67.53l7.92-.45c3.93-.22,7.01-3.48,7.01-7.41v-3.35Z" fill="#e2d1b6" />
                          <path d="M388,409.42c.07,0,.14,0,.21,0l7.92.45c4.18.24,7.46,3.7,7.46,7.89v3.35c0,4.19-3.28,7.66-7.46,7.89l-7.92.45c-.82.05-1.52-.18-2.03-.66-.51-.48-.77-1.17-.77-1.99v-14.74c0-.82.27-1.51.77-1.99.46-.44,1.09-.67,1.82-.67ZM388,429.37c.07,0,.13,0,.2,0l7.92-.45c4.13-.23,7.37-3.66,7.37-7.79v-3.35c0-4.14-3.24-7.56-7.37-7.79l-7.92-.45c-.79-.04-1.47.17-1.95.63-.49.46-.74,1.12-.74,1.91v14.74c0,.79.26,1.45.74,1.91.44.42,1.05.64,1.75.64ZM388,409.85c.06,0,.12,0,.18,0l7.92.45c3.96.22,7.05,3.5,7.05,7.46v3.35c0,3.96-3.1,7.24-7.05,7.46l-7.92.45c-.7.04-1.29-.15-1.71-.54-.42-.4-.64-.97-.64-1.67v-14.74c0-.7.22-1.28.64-1.67.38-.36.91-.55,1.53-.55ZM388,428.94c.06,0,.11,0,.17,0l7.92-.45c3.9-.22,6.96-3.45,6.96-7.36v-3.35c0-3.91-3.06-7.14-6.96-7.36l-7.92-.45c-.67-.04-1.23.14-1.63.52-.4.38-.61.93-.61,1.6v14.74c0,.67.21,1.22.61,1.6.36.34.86.52,1.46.52Z" fill="#ae9d85" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M402.54,420.94c0,3.6-2.81,6.58-6.41,6.78l-7.04.4c-1.35.08-2.24-.77-2.24-2.12v-13.11c0-1.35.89-2.19,2.24-2.12l7.04.4c3.6.2,6.41,3.18,6.41,6.78v2.98Z" fill="#e2d1b6" />
                          <path d="M388.92,410.72c.06,0,.11,0,.17,0l7.04.4c3.62.2,6.46,3.21,6.46,6.83v2.98c0,3.63-2.84,6.63-6.46,6.83l-7.04.4c-.68.04-1.25-.15-1.66-.54-.41-.39-.63-.95-.63-1.63v-13.11c0-.68.22-1.24.63-1.63.38-.36.89-.54,1.49-.54ZM388.92,428.07c.05,0,.11,0,.17,0l7.04-.4c3.57-.2,6.36-3.16,6.36-6.73v-2.98c0-3.57-2.79-6.53-6.36-6.73l-7.04-.4c-.65-.04-1.2.14-1.59.51-.39.37-.6.91-.6,1.56v13.11c0,.65.21,1.19.6,1.56.36.34.85.51,1.42.51Z" fill="#ae9d85" />
                        </g>
                        <g>
                          <path d="M386.74,426v-13.11c0-.69.22-1.27.65-1.67.42-.4,1.01-.59,1.71-.55l7.04.4c3.65.21,6.51,3.23,6.51,6.89v2.98c0,3.66-2.86,6.68-6.51,6.89l-7.04.4c-.69.04-1.28-.15-1.71-.55-.42-.4-.65-.98-.65-1.67ZM402.43,417.95c0-3.54-2.77-6.47-6.31-6.67l-7.04-.4c-.63-.04-1.17.14-1.55.49-.38.36-.58.88-.58,1.52v13.11c0,.63.2,1.16.58,1.52.38.36.91.53,1.55.49l7.04-.4c3.54-.2,6.31-3.13,6.31-6.67v-2.98Z" fill="#e2d1b6" />
                          <path d="M388.92,410.61c.06,0,.12,0,.18,0l7.04.4c3.68.21,6.56,3.26,6.56,6.94v2.98c0,3.68-2.88,6.73-6.56,6.94l-7.04.4c-.71.04-1.31-.16-1.74-.57-.43-.41-.66-1-.66-1.71v-13.11c0-.71.23-1.3.66-1.71.4-.38.94-.57,1.57-.57ZM388.92,428.18c.06,0,.11,0,.17,0l7.04-.4c3.62-.2,6.46-3.21,6.46-6.84v-2.98c0-3.63-2.84-6.64-6.46-6.84l-7.04-.4c-.68-.04-1.26.15-1.67.54-.41.39-.63.96-.63,1.64v13.11c0,.68.22,1.25.63,1.64.38.36.89.54,1.5.54ZM388.92,410.83c.05,0,.11,0,.17,0l7.04.4c3.56.2,6.36,3.16,6.36,6.72v2.98c0,3.57-2.79,6.52-6.36,6.72l-7.04.4c-.65.04-1.19-.14-1.58-.51-.39-.37-.6-.9-.6-1.55v-13.11c0-.65.21-1.18.6-1.55.36-.34.84-.51,1.42-.51ZM388.92,427.96c.05,0,.11,0,.16,0l7.04-.4c3.51-.2,6.26-3.11,6.26-6.62v-2.98c0-3.52-2.75-6.43-6.26-6.62l-7.04-.4c-.62-.03-1.14.13-1.51.48-.37.35-.56.86-.56,1.48v13.11c0,.62.2,1.13.56,1.48.34.32.8.48,1.35.48Z" fill="#ae9d85" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M396.39,430.18l1.04-.04c5.25-.18,9.41-4.49,9.41-9.74v-1.72c0-5.25-4.16-9.56-9.41-9.74l-1.04-.04,1.59-1.22,6.86,2.37,3.13,3.99.85,5.4-.98,5.2s-2.12,3.35-2.21,3.48c-.09.13-3.13,2.69-3.54,2.85-.41.16-4.11.6-4.21.54-.09-.06-1.5-1.33-1.5-1.33Z" fill="#e2d1b6" />
                          <path d="M397.97,407.63l6.9,2.39h0s3.14,4.01,3.14,4.01h0s.86,5.42.86,5.42l-.99,5.22c-.09.14-2.12,3.35-2.22,3.48-.11.15-3.14,2.7-3.56,2.87-.39.15-4.13.62-4.25.53-.1-.06-1.36-1.2-1.5-1.33l-.09-.08,1.16-.04c2.52-.09,4.88-1.14,6.64-2.95s2.72-4.21,2.72-6.74v-1.72c0-2.53-.97-4.92-2.72-6.74s-4.11-2.87-6.64-2.95l-1.18-.04,1.72-1.32ZM404.82,410.1l-6.82-2.36-1.46,1.12.9.03c2.55.09,4.93,1.15,6.71,2.98,1.77,1.84,2.75,4.25,2.75,6.81v1.72c0,2.55-.98,4.97-2.75,6.81-1.77,1.84-4.16,2.9-6.71,2.98l-.92.03c.55.49,1.3,1.16,1.39,1.23.23.04,3.75-.38,4.17-.54.38-.15,3.41-2.69,3.52-2.83.09-.12,2.09-3.28,2.21-3.47l.98-5.18-.85-5.38-3.11-3.96Z" fill="#ae9d85" />
                        </g>
                        <g>
                          <path d="M395.78,409.1l2.16-1.66,7.03,2.43,3.21,4.08.87,5.49v.04s-1,5.24-1,5.24l-.02.04c-.22.34-2.13,3.36-2.22,3.49-.1.14-3.16,2.74-3.64,2.92-.29.11-1.81.31-2.27.36-1.99.25-2.06.2-2.13.15-.1-.06-1.1-.96-1.52-1.34l-.4-.36,1.57-.05c5.16-.18,9.2-4.36,9.2-9.52v-1.72c0-5.16-4.04-9.34-9.2-9.52l-1.64-.06ZM407.06,418.68v1.72c0,5.4-4.22,9.77-9.62,9.95l-.51.02c.43.38.89.8,1.04.92.5,0,3.69-.39,4.05-.53.33-.13,3.23-2.53,3.45-2.78.07-.1,1.33-2.09,2.18-3.42l.97-5.12-.84-5.31-3.06-3.89-6.69-2.31-1.02.78.44.02c5.39.19,9.62,4.56,9.62,9.95Z" fill="#e2d1b6" />
                          <path d="M397.93,407.39l7.07,2.44h0s3.21,4.1,3.21,4.1h0s.87,5.51.87,5.51v.05s-1,5.25-1,5.25l-.06.09c-.78,1.24-2.11,3.33-2.19,3.44-.1.14-3.18,2.75-3.66,2.94-.3.12-1.83.31-2.28.37-2.01.25-2.08.2-2.17.14-.1-.06-1-.87-1.53-1.35l-.49-.44,1.7-.06c5.13-.18,9.15-4.34,9.15-9.47v-1.72c0-5.13-4.02-9.3-9.15-9.47l-1.78-.06,2.29-1.76ZM404.95,409.92l-6.99-2.42-2.03,1.55,1.5.05c5.19.18,9.25,4.38,9.25,9.57v1.72c0,5.19-4.06,9.39-9.25,9.57l-1.45.05.3.27c.88.8,1.45,1.3,1.52,1.34.05.04.13.09,2.1-.16.94-.12,2.03-.27,2.26-.36.47-.18,3.51-2.77,3.62-2.91.06-.08.86-1.33,2.19-3.44l.05-.08.99-5.26-.87-5.47-3.19-4.06ZM398.01,407.88l6.73,2.33h0s3.07,3.91,3.07,3.91h0s.84,5.33.84,5.33l-.97,5.15c-.8,1.27-2.11,3.32-2.18,3.42-.23.26-3.14,2.67-3.48,2.8-.37.14-3.61.53-4.06.53h-.02s-.01-.01-.01-.01c-.18-.15-.79-.69-1.04-.92l-.09-.08.63-.02c5.36-.19,9.57-4.54,9.57-9.9v-1.72c0-5.37-4.2-9.72-9.57-9.9l-.58-.02,1.15-.88ZM404.69,410.29l-6.65-2.3-.89.68h.3c5.42.2,9.66,4.59,9.66,10.02v1.72c0,5.42-4.25,9.82-9.66,10.01h-.38c.28.26.76.69.93.84.58-.01,3.68-.4,4.01-.53.33-.13,3.21-2.52,3.43-2.77.06-.09,1.3-2.04,2.17-3.4l.96-5.1-.84-5.28-3.04-3.87Z" fill="#ae9d85" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M408.03,420.71c-.13,5.11-4.24,9.23-9.35,9.4l-7.17.23.06,1.98,7.17-.23c6.15-.2,11.1-5.17,11.26-11.33v-2.44c-.16-6.16-5.11-11.13-11.26-11.33l-7.17-.23-.06,1.98,7.17.23c5.11.16,9.21,4.29,9.35,9.4v2.33Z" fill="#e2d1b6" />
                          <path d="M391.53,406.72l7.22.23c6.18.2,11.15,5.19,11.31,11.38v2.44c-.16,6.18-5.13,11.18-11.31,11.38l-7.22.23-.07-2.08,7.22-.23c5.08-.16,9.16-4.27,9.3-9.35v-2.33c-.13-5.08-4.22-9.19-9.3-9.35l-7.22-.23.07-2.08ZM391.63,432.27l7.12-.23c6.13-.2,11.05-5.15,11.22-11.28v-2.43c-.16-6.13-5.09-11.08-11.22-11.28l-7.12-.23-.06,1.88,7.12.23c5.13.16,9.26,4.31,9.39,9.45v2.33c-.14,5.13-4.26,9.28-9.39,9.45l-7.12.23.06,1.88Z" fill="#ae9d85" />
                        </g>
                        <g>
                          <path d="M391.3,430.13l7.38-.24c4.99-.16,9-4.19,9.14-9.18v-2.33c-.13-4.99-4.14-9.02-9.14-9.18l-7.38-.24.08-2.41,7.38.24c6.27.2,11.31,5.27,11.47,11.54v2.44c-.17,6.28-5.2,11.34-11.47,11.54l-7.38.24-.08-2.41ZM391.79,407l-.05,1.55,6.95.22c5.22.17,9.42,4.39,9.55,9.61v2.34s0,0,0,0c-.14,5.22-4.33,9.44-9.55,9.61l-6.95.22.05,1.55,6.95-.22c6.04-.19,10.9-5.08,11.05-11.12v-2.43c-.16-6.04-5.01-10.92-11.05-11.11l-6.95-.22Z" fill="#e2d1b6" />
                          <path d="M391.33,406.5l7.43.24c6.29.2,11.36,5.29,11.52,11.59v2.44c-.17,6.3-5.23,11.39-11.52,11.59l-7.43.24-.08-2.51,7.43-.24c4.96-.16,8.96-4.17,9.09-9.14v-2.33c-.13-4.96-4.12-8.97-9.09-9.13l-7.43-.24.08-2.51ZM391.42,432.49l7.33-.23c6.24-.2,11.26-5.25,11.42-11.49v-2.44c-.16-6.24-5.18-11.29-11.42-11.49l-7.33-.23-.07,2.31,7.33.23c5.02.16,9.05,4.21,9.19,9.23v2.33c-.13,5.02-4.17,9.08-9.19,9.23l-7.33.23.07,2.31ZM391.74,406.94l7,.22c6.07.19,10.94,5.1,11.1,11.16v2.43c-.16,6.07-5.04,10.97-11.1,11.17l-7,.22-.05-1.65,7-.22c5.19-.17,9.37-4.36,9.51-9.56v-2.34c-.14-5.19-4.31-9.39-9.51-9.56l-7-.22.05-1.65ZM391.84,432.04l6.9-.22c6.01-.19,10.85-5.05,11.01-11.07v-2.43c-.16-6.01-4.99-10.87-11.01-11.06l-6.9-.22-.05,1.45,6.9.22c5.25.17,9.47,4.41,9.6,9.66v2.34c-.14,5.25-4.36,9.49-9.6,9.66l-6.9.22.05,1.45Z" fill="#ae9d85" />
                        </g>
                      </g>
                    </g>
                  </g>
                  <g filter="url(#ds-soft)">
                    <g>
                      <g>
                        <rect x="394.62" y="346.01" width="5.16" height="1.43" transform="translate(439.8 -178.79) rotate(53.52)" fill="#e2d1b6" />
                        <path d="M396.25,344.16l3.13,4.23-1.23.91-3.13-4.23,1.23-.91ZM399.24,348.37l-3.01-4.07-1.07.79,3.01,4.07,1.07-.79Z" fill="#ae9d85" />
                      </g>
                      <g>
                        <path d="M394.79,345.04l1.5-1.11,3.32,4.49-1.5,1.11-3.32-4.49ZM396.2,344.53l-.81.6,2.81,3.8.81-.6-2.81-3.8Z" fill="#e2d1b6" />
                        <path d="M396.3,343.86l3.38,4.57-1.58,1.17-3.38-4.57,1.58-1.17ZM399.54,348.41l-3.26-4.41-1.42,1.05,3.26,4.41,1.42-1.05ZM396.21,344.46l2.87,3.88-.89.66-.03-.04-2.84-3.84.89-.66ZM398.94,348.32l-2.75-3.72-.73.54,2.75,3.72.73-.54Z" fill="#ae9d85" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="393.29" y="345.97" width="5.82" height="1.43" transform="translate(439.36 -178) rotate(53.52)" fill="#e2d1b6" />
                        <path d="M395.05,343.85l3.52,4.76-1.23.91-3.52-4.76,1.23-.91ZM398.43,348.59l-3.4-4.6-1.07.79,3.4,4.6,1.07-.79Z" fill="#ae9d85" />
                      </g>
                      <g>
                        <path d="M393.59,344.73l1.5-1.11,3.72,5.03-1.5,1.11-3.72-5.03ZM395,344.23l-.81.6,3.2,4.33.81-.6-3.2-4.33Z" fill="#e2d1b6" />
                        <path d="M395.1,343.55l3.78,5.11-1.58,1.17-3.78-5.11,1.58-1.17ZM398.74,348.64l-3.66-4.95-1.42,1.05,3.66,4.95,1.42-1.05ZM395.01,344.15l3.26,4.41-.89.66-3.26-4.41.89-.66ZM398.13,348.55l-3.14-4.25-.73.54,3.14,4.25.73-.54Z" fill="#ae9d85" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="394.59" y="365.67" width="5.19" height="1.43" transform="translate(-133.56 467.87) rotate(-53.52)" fill="#e2d1b6" />
                        <path d="M398.14,363.8l1.23.91-3.15,4.26-1.23-.91,3.15-4.26ZM399.24,364.73l-1.07-.79-3.03,4.09,1.07.79,3.03-4.09Z" fill="#ae9d85" />
                      </g>
                      <g>
                        <path d="M394.77,368.09l3.34-4.52,1.5,1.11-3.34,4.52-1.5-1.11ZM398.2,364.17l-2.83,3.83.81.6,2.83-3.83-.81-.6Z" fill="#e2d1b6" />
                        <path d="M398.1,363.5l1.58,1.17-3.4,4.6-1.58-1.17,3.4-4.6ZM399.54,364.69l-1.42-1.05-3.28,4.44,1.42,1.05,3.28-4.44ZM398.19,364.1l.89.66-2.89,3.91-.89-.66,2.89-3.91ZM398.94,364.78l-.73-.54-2.77,3.75.73.54,2.77-3.75Z" fill="#ae9d85" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="393.29" y="365.69" width="5.82" height="1.43" transform="translate(-133.98 467.09) rotate(-53.52)" fill="#e2d1b6" />
                        <path d="M397.34,363.57l1.23.91-3.52,4.76-1.23-.91,3.52-4.76ZM398.43,364.51l-1.07-.79-3.4,4.6,1.07.79,3.4-4.6Z" fill="#ae9d85" />
                      </g>
                      <g>
                        <path d="M393.59,368.37l3.72-5.03,1.5,1.11-3.72,5.03-1.5-1.11ZM397.4,363.95l-3.2,4.33.81.6,3.2-4.33-.81-.6Z" fill="#e2d1b6" />
                        <path d="M397.3,363.27l1.58,1.17-3.78,5.11-1.58-1.17,3.78-5.11ZM398.74,364.46l-1.42-1.05-3.66,4.95,1.42,1.05,3.66-4.95ZM397.39,363.87l.89.66-3.26,4.41-.89-.66,3.26-4.41ZM398.13,364.55l-.73-.54-3.14,4.25.73.54,3.14-4.25Z" fill="#ae9d85" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M403.32,358.13c0,4.05-3.16,7.4-7.21,7.63l-7.92.45c-1.52.09-2.52-.86-2.52-2.38v-14.74c0-1.52,1-2.47,2.52-2.38l7.92.45c4.05.23,7.21,3.58,7.21,7.63v3.35Z" fill="#e2d1b6" />
                        <path d="M388,346.64c.06,0,.13,0,.19,0l7.92.45c4.07.23,7.26,3.6,7.26,7.68v3.35c0,4.08-3.19,7.45-7.26,7.68l-7.92.45c-.76.04-1.4-.17-1.87-.6-.46-.44-.71-1.07-.71-1.83v-14.74c0-.76.24-1.39.71-1.83.42-.4,1-.61,1.67-.61ZM388,366.16c.06,0,.12,0,.19,0l7.92-.45c4.02-.23,7.16-3.56,7.16-7.58v-3.35c0-4.02-3.15-7.35-7.16-7.58l-7.92-.45c-.73-.04-1.35.16-1.79.57-.44.42-.67,1.02-.67,1.76v14.74c0,.73.23,1.34.67,1.76.4.38.96.58,1.61.58Z" fill="#ae9d85" />
                      </g>
                      <g>
                        <path d="M385.46,363.82v-14.74c0-.81.26-1.48.76-1.95.5-.47,1.18-.69,1.99-.65l7.92.45c4.16.23,7.41,3.68,7.41,7.84v3.35c0,4.16-3.26,7.61-7.41,7.84l-7.92.45c-.81.05-1.49-.18-1.99-.65s-.76-1.14-.76-1.95ZM403.1,354.77c0-3.94-3.08-7.19-7.01-7.41l-7.92-.45c-.68-.04-1.26.14-1.67.53-.41.39-.62.95-.62,1.64v14.74c0,.69.22,1.25.62,1.64.41.39.98.57,1.67.53l7.92-.45c3.93-.22,7.01-3.48,7.01-7.41v-3.35Z" fill="#e2d1b6" />
                        <path d="M388,346.42c.07,0,.14,0,.21,0l7.92.45c4.18.24,7.46,3.7,7.46,7.89v3.35c0,4.19-3.28,7.66-7.46,7.89l-7.92.45c-.82.05-1.52-.18-2.03-.66-.51-.48-.77-1.17-.77-1.99v-14.74c0-.82.27-1.51.77-1.99.46-.44,1.09-.67,1.82-.67ZM388,366.37c.07,0,.13,0,.2,0l7.92-.45c4.13-.23,7.37-3.66,7.37-7.79v-3.35c0-4.14-3.24-7.56-7.37-7.79l-7.92-.45c-.79-.05-1.47.17-1.95.63-.49.46-.74,1.12-.74,1.91v14.74c0,.79.26,1.45.74,1.91.44.42,1.05.64,1.75.64ZM388,346.86c.06,0,.12,0,.18,0l7.92.45c3.96.22,7.05,3.5,7.05,7.46v3.35c0,3.96-3.1,7.24-7.05,7.46l-7.92.45c-.7.04-1.29-.15-1.71-.54-.42-.39-.64-.97-.64-1.67v-14.74c0-.7.22-1.28.64-1.67.38-.36.91-.55,1.53-.55ZM388,365.94c.06,0,.12,0,.17,0l7.92-.45c3.9-.22,6.96-3.45,6.96-7.36v-3.35c0-3.91-3.06-7.14-6.96-7.36l-7.92-.45c-.67-.04-1.23.14-1.63.52-.4.38-.61.93-.61,1.6v14.74c0,.67.21,1.22.61,1.6.36.34.86.52,1.46.52Z" fill="#ae9d85" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M402.54,357.94c0,3.6-2.81,6.58-6.41,6.78l-7.04.4c-1.35.08-2.24-.77-2.24-2.12v-13.11c0-1.35.89-2.19,2.24-2.12l7.04.4c3.6.2,6.41,3.18,6.41,6.78v2.98Z" fill="#e2d1b6" />
                        <path d="M388.92,347.72c.06,0,.11,0,.17,0l7.04.4c3.62.2,6.46,3.21,6.46,6.83v2.98c0,3.63-2.84,6.63-6.46,6.83l-7.04.4c-.68.04-1.25-.15-1.66-.54-.41-.39-.63-.95-.63-1.63v-13.11c0-.68.22-1.24.63-1.63.38-.36.89-.54,1.49-.54ZM388.92,365.07c.05,0,.11,0,.17,0l7.04-.4c3.57-.2,6.36-3.16,6.36-6.73v-2.98c0-3.57-2.79-6.53-6.36-6.73l-7.04-.4c-.65-.04-1.2.14-1.59.51-.39.37-.6.91-.6,1.56v13.11c0,.65.21,1.19.6,1.56.36.34.85.51,1.42.51Z" fill="#ae9d85" />
                      </g>
                      <g>
                        <path d="M386.74,363v-13.11c0-.69.22-1.27.65-1.67.42-.4,1.01-.59,1.71-.55l7.04.4c3.65.21,6.51,3.23,6.51,6.89v2.98c0,3.66-2.86,6.68-6.51,6.89l-7.04.4c-.69.04-1.28-.15-1.71-.55-.42-.4-.65-.98-.65-1.67ZM402.43,354.96c0-3.54-2.77-6.47-6.31-6.67l-7.04-.4c-.63-.04-1.17.14-1.55.49-.38.36-.58.88-.58,1.52v13.11c0,.63.2,1.16.58,1.52.38.36.91.53,1.55.49l7.04-.4c3.54-.2,6.31-3.13,6.31-6.67v-2.98Z" fill="#e2d1b6" />
                        <path d="M388.92,347.62c.06,0,.12,0,.18,0l7.04.4c3.68.21,6.56,3.26,6.56,6.94v2.98c0,3.68-2.88,6.73-6.56,6.94l-7.04.4c-.71.04-1.31-.16-1.74-.57-.43-.41-.66-1-.66-1.71v-13.11c0-.71.23-1.3.66-1.71.4-.38.94-.57,1.57-.57ZM388.92,365.18c.06,0,.11,0,.17,0l7.04-.4c3.62-.2,6.46-3.21,6.46-6.84v-2.98c0-3.63-2.84-6.64-6.46-6.84l-7.04-.4c-.68-.04-1.26.15-1.67.54-.41.39-.63.96-.63,1.64v13.11c0,.68.22,1.25.63,1.64.38.36.89.54,1.5.54ZM388.92,347.83c.05,0,.11,0,.17,0l7.04.4c3.56.2,6.36,3.16,6.36,6.72v2.98c0,3.57-2.79,6.52-6.36,6.72l-7.04.4c-.65.04-1.19-.14-1.58-.51-.39-.37-.6-.9-.6-1.55v-13.11c0-.65.21-1.18.6-1.55.36-.34.84-.51,1.42-.51ZM388.92,364.97c.05,0,.11,0,.16,0l7.04-.4c3.51-.2,6.26-3.11,6.26-6.62v-2.98c0-3.52-2.75-6.43-6.26-6.62l-7.04-.4c-.62-.03-1.14.13-1.51.48-.37.35-.56.86-.56,1.48v13.11c0,.62.2,1.13.56,1.48.34.32.8.48,1.35.48Z" fill="#ae9d85" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M396.39,367.19l1.04-.04c5.25-.18,9.41-4.49,9.41-9.74v-1.72c0-5.25-4.16-9.56-9.41-9.74l-1.04-.04,1.59-1.22,6.86,2.37,3.13,3.99.85,5.4-.98,5.2s-2.12,3.35-2.21,3.48c-.09.13-3.13,2.69-3.54,2.85-.41.16-4.11.6-4.21.54-.09-.06-1.5-1.33-1.5-1.33Z" fill="#e2d1b6" />
                        <path d="M397.97,344.64l6.9,2.39h0s3.14,4.01,3.14,4.01h0s.86,5.42.86,5.42h0s-.98,5.22-.98,5.22h0c-.09.14-2.12,3.36-2.22,3.49-.11.15-3.14,2.7-3.56,2.87-.39.15-4.13.62-4.25.53-.1-.06-1.36-1.2-1.5-1.33l-.09-.08,1.16-.04c2.52-.09,4.88-1.14,6.64-2.95s2.72-4.21,2.72-6.74v-1.72c0-2.53-.97-4.92-2.72-6.74s-4.11-2.87-6.64-2.95l-1.18-.04,1.72-1.32ZM404.82,347.11l-6.82-2.36-1.46,1.12.9.03c2.55.09,4.93,1.15,6.71,2.98,1.77,1.84,2.75,4.25,2.75,6.81v1.72c0,2.55-.98,4.97-2.75,6.81-1.77,1.84-4.16,2.9-6.71,2.98l-.92.03c.55.49,1.3,1.16,1.39,1.23.23.04,3.75-.38,4.17-.54.38-.15,3.41-2.69,3.52-2.83.09-.12,2.09-3.28,2.21-3.47l.98-5.18-.85-5.38-3.11-3.96Z" fill="#ae9d85" />
                      </g>
                      <g>
                        <path d="M395.78,346.11l2.16-1.66,7.03,2.43,3.21,4.08.87,5.49v.04s-1,5.24-1,5.24l-.02.04c-.22.34-2.13,3.36-2.22,3.49-.1.14-3.16,2.74-3.64,2.92-.29.11-1.81.31-2.27.36-1.99.25-2.06.2-2.13.15-.1-.06-1.1-.96-1.52-1.34l-.4-.36,1.57-.05c5.16-.18,9.2-4.36,9.2-9.52v-1.72c0-5.16-4.04-9.34-9.2-9.52l-1.64-.06ZM407.06,355.69v1.72c0,5.4-4.22,9.77-9.62,9.95l-.51.02c.43.38.89.8,1.04.92.5,0,3.69-.39,4.05-.53.33-.13,3.23-2.53,3.45-2.78.07-.1,1.33-2.09,2.18-3.42l.97-5.12-.84-5.31-3.06-3.89-6.69-2.31-1.02.78.44.02c5.39.19,9.62,4.56,9.62,9.95Z" fill="#e2d1b6" />
                        <path d="M397.93,344.4l7.07,2.44h0s3.21,4.1,3.21,4.1h0s.87,5.51.87,5.51v.05s-1,5.25-1,5.25l-.07.11c-.78,1.23-2.1,3.32-2.18,3.43-.1.14-3.18,2.75-3.66,2.94-.3.12-1.83.31-2.28.37-2.01.25-2.08.2-2.17.14-.1-.06-1-.87-1.53-1.35l-.49-.44,1.7-.06c5.13-.18,9.15-4.34,9.15-9.47v-1.72c0-5.13-4.02-9.3-9.15-9.47l-1.78-.06,2.29-1.76ZM404.95,346.93l-6.99-2.42-2.03,1.55,1.5.05c5.19.18,9.25,4.38,9.25,9.57v1.72c0,5.19-4.06,9.39-9.25,9.57l-1.45.05.3.27c.88.8,1.45,1.3,1.52,1.34.05.04.13.09,2.1-.16.94-.12,2.03-.27,2.26-.36.47-.18,3.51-2.77,3.62-2.91.06-.08.83-1.29,2.18-3.42l.06-.09.99-5.26-.87-5.47-3.19-4.06ZM398.01,344.88l6.73,2.33h0s3.07,3.91,3.07,3.91h0s.84,5.33.84,5.33h0s-.97,5.14-.97,5.14h0c-.8,1.28-2.11,3.33-2.18,3.43-.23.26-3.14,2.67-3.48,2.8-.37.14-3.61.53-4.06.53h-.02s-.01-.01-.01-.01c-.17-.15-.78-.69-1.04-.92l-.09-.08.63-.02c5.36-.19,9.57-4.54,9.57-9.9v-1.72c0-5.37-4.2-9.72-9.57-9.9l-.58-.02,1.15-.88ZM404.69,347.29l-6.65-2.3-.89.68h.3c5.42.2,9.66,4.59,9.66,10.02v1.72c0,5.42-4.25,9.82-9.66,10.01h-.38c.28.26.76.69.93.84.58-.01,3.68-.4,4.01-.53.33-.13,3.21-2.52,3.43-2.77.06-.09,1.3-2.04,2.17-3.4l.96-5.1-.84-5.28-3.04-3.87Z" fill="#ae9d85" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M408.03,357.72c-.13,5.11-4.24,9.23-9.35,9.4l-7.17.23.06,1.98,7.17-.23c6.15-.2,11.1-5.17,11.26-11.33v-2.44c-.16-6.16-5.11-11.13-11.26-11.33l-7.17-.23-.06,1.98,7.17.23c5.11.16,9.21,4.29,9.35,9.4v2.33Z" fill="#e2d1b6" />
                        <path d="M391.53,343.72l7.22.23c6.18.2,11.15,5.19,11.31,11.38v2.44c-.16,6.18-5.13,11.18-11.31,11.38l-7.22.23-.07-2.08,7.22-.23c5.08-.16,9.16-4.27,9.3-9.35v-2.33c-.13-5.08-4.22-9.19-9.3-9.35l-7.22-.23.07-2.08ZM391.63,369.27l7.12-.23c6.13-.2,11.05-5.15,11.22-11.28v-2.43c-.16-6.13-5.09-11.08-11.22-11.28l-7.12-.23-.06,1.88,7.12.23c5.13.16,9.26,4.31,9.39,9.45v2.33c-.14,5.13-4.26,9.28-9.39,9.45l-7.12.23.06,1.88Z" fill="#ae9d85" />
                      </g>
                      <g>
                        <path d="M391.3,367.13l7.38-.24c4.99-.16,9-4.19,9.14-9.18v-2.33c-.13-4.99-4.14-9.02-9.14-9.18l-7.38-.24.08-2.41,7.38.24c6.27.2,11.31,5.27,11.47,11.54v2.44c-.17,6.28-5.2,11.34-11.47,11.54l-7.38.24-.08-2.41ZM391.79,344l-.05,1.55,6.95.22c5.22.17,9.42,4.39,9.55,9.61v2.34s0,0,0,0c-.14,5.22-4.33,9.44-9.55,9.61l-6.95.22.05,1.55,6.95-.22c6.04-.19,10.9-5.08,11.05-11.12v-2.43c-.16-6.04-5.01-10.92-11.05-11.11l-6.95-.22Z" fill="#e2d1b6" />
                        <path d="M391.33,343.5l7.43.24c6.29.2,11.36,5.29,11.52,11.59v2.44c-.17,6.3-5.23,11.39-11.52,11.59l-7.43.24-.08-2.51,7.43-.24c4.96-.16,8.96-4.17,9.09-9.14v-2.33c-.13-4.96-4.12-8.97-9.09-9.13l-7.43-.24.08-2.51ZM391.42,369.49l7.33-.23c6.24-.2,11.26-5.25,11.42-11.49v-2.44c-.16-6.24-5.18-11.29-11.42-11.49l-7.33-.23-.07,2.31,7.33.23c5.02.16,9.05,4.21,9.19,9.23v2.33c-.13,5.02-4.17,9.08-9.19,9.23l-7.33.23.07,2.31ZM391.74,343.95l7,.22c6.07.19,10.94,5.1,11.1,11.16v2.43c-.16,6.07-5.04,10.97-11.1,11.17l-7,.22-.05-1.65,7-.22c5.19-.17,9.37-4.36,9.51-9.56v-2.34c-.14-5.19-4.31-9.39-9.51-9.56l-7-.22.05-1.65ZM391.84,369.05l6.9-.22c6.01-.19,10.85-5.05,11.01-11.07v-2.43c-.16-6.01-4.99-10.87-11.01-11.06l-6.9-.22-.05,1.45,6.9.22c5.25.17,9.47,4.41,9.6,9.66v2.34c-.14,5.25-4.36,9.49-9.6,9.66l-6.9.22.05,1.45Z" fill="#ae9d85" />
                      </g>
                    </g>
                  </g>
                  <g filter="url(#ds-soft)">
                    <g>
                      <g>
                        <rect x="389.65" y="381.31" width="5.16" height="1.43" transform="translate(60.89 -53.87) rotate(8.52)" fill="#e2d1b6" />
                        <path d="M389.74,380.88l5.2.78-.23,1.52-5.2-.78.23-1.52ZM394.82,381.74l-5-.75-.2,1.32,5,.75.2-1.32Z" fill="#ae9d85" />
                      </g>
                      <g>
                        <path d="M389.32,382.54l.28-1.85,5.53.83-.28,1.85-5.53-.83ZM389.96,381.18l-.15.99,4.67.7.15-.99-4.67-.7Z" fill="#e2d1b6" />
                        <path d="M389.56,380.63l5.63.84-.29,1.95-5.63-.84.29-1.95ZM395.07,381.56l-5.43-.81-.26,1.75,5.43.81.26-1.75ZM389.92,381.12l4.77.71-.16,1.09-4.77-.71.16-1.09ZM394.58,381.92l-4.57-.68-.13.89,4.57.68.13-.89Z" fill="#ae9d85" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="388.58" y="381.99" width="5.82" height="1.43" transform="translate(60.99 -53.75) rotate(8.52)" fill="#e2d1b6" />
                        <path d="M388.68,381.51l5.86.88-.23,1.52-5.86-.88.23-1.52ZM394.42,382.47l-5.66-.85-.2,1.32,5.66.85.2-1.32Z" fill="#ae9d85" />
                      </g>
                      <g>
                        <path d="M388.26,383.17l.28-1.85,6.18.93-.28,1.85-6.18-.93ZM388.9,381.81l-.15.99,5.33.8.15-.99-5.33-.8Z" fill="#e2d1b6" />
                        <path d="M388.49,381.26l6.28.94-.29,1.95-6.28-.94.29-1.95ZM394.66,382.29l-6.08-.91-.26,1.75,6.08.91.26-1.75ZM388.86,381.75l5.43.81-.16,1.09-5.43-.81.16-1.09ZM394.17,382.65l-5.23-.78-.13.89,5.23.78.13-.89Z" fill="#ae9d85" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="403.52" y="395.22" width="5.19" height="1.43" transform="translate(74.68 856.2) rotate(-98.52)" fill="#e2d1b6" />
                        <path d="M406.48,393.2l.78,5.23-1.52.23-.78-5.23,1.52-.23ZM407.15,398.35l-.75-5.04-1.32.2.75,5.04,1.32-.2Z" fill="#ae9d85" />
                      </g>
                      <g>
                        <path d="M405.61,398.85l-.83-5.56,1.85-.28.83,5.56-1.85.28ZM405.27,393.65l.7,4.71.99-.15-.7-4.71-.99.15Z" fill="#e2d1b6" />
                        <path d="M406.66,392.96l.85,5.66-1.95.29-.85-5.66,1.95-.29ZM407.4,398.53l-.82-5.46-1.75.26.82,5.46,1.75-.26ZM406.3,393.45l.72,4.81-1.09.16-.72-4.81,1.09-.16ZM406.91,398.17l-.69-4.61-.89.13.69,4.61.89-.13Z" fill="#ae9d85" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="402.52" y="395.93" width="5.82" height="1.43" transform="translate(73.19 856.35) rotate(-98.52)" fill="#e2d1b6" />
                        <path d="M405.76,393.61l.88,5.86-1.52.23-.88-5.86,1.52-.23ZM406.52,399.38l-.85-5.66-1.32.2.85,5.66,1.32-.2Z" fill="#ae9d85" />
                      </g>
                      <g>
                        <path d="M404.97,399.88l-.93-6.18,1.85-.28.93,6.18-1.85.28ZM404.54,394.06l.8,5.33.99-.15-.8-5.33-.99.15Z" fill="#e2d1b6" />
                        <path d="M405.94,393.36l.94,6.28-1.95.29-.94-6.28,1.95-.29ZM406.76,399.56l-.91-6.08-1.75.26.91,6.08,1.75-.26ZM405.57,393.85l.81,5.43-1.09.16-.81-5.43,1.09-.16ZM406.27,399.2l-.78-5.23-.89.13.78,5.23.89-.13Z" fill="#ae9d85" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M404.61,385.76c2.87,2.87,3,7.47.3,10.49l-5.28,5.91c-1.01,1.13-2.39,1.17-3.47.1l-10.43-10.43c-1.08-1.08-1.04-2.45.1-3.47l5.91-5.28c3.02-2.7,7.63-2.57,10.49.3l2.37,2.37Z" fill="#e2d1b6" />
                        <path d="M396.84,381.1c1.97,0,3.94.75,5.44,2.25l2.37,2.37c2.88,2.88,3.01,7.52.3,10.56l-5.28,5.91c-.51.57-1.11.88-1.75.89-.64.02-1.26-.26-1.79-.79l-10.43-10.43c-.54-.54-.81-1.16-.79-1.79s.33-1.24.89-1.75l5.91-5.28c1.46-1.31,3.29-1.95,5.12-1.95ZM397.86,402.99s.04,0,.06,0c.61-.02,1.19-.31,1.67-.86l5.28-5.91c2.68-3,2.55-7.58-.29-10.42l-2.37-2.37c-1.48-1.48-3.42-2.22-5.37-2.22-1.8,0-3.61.64-5.05,1.93l-5.91,5.28c-.55.49-.84,1.07-.86,1.67s.25,1.2.76,1.72l10.43,10.43c.5.5,1.08.77,1.66.77Z" fill="#ae9d85" />
                      </g>
                      <g>
                        <path d="M396.01,402.42l-10.42-10.42c-.57-.57-.86-1.23-.84-1.91.02-.68.35-1.33.95-1.86l5.91-5.28c3.11-2.77,7.85-2.64,10.79.3l2.37,2.37c2.94,2.94,3.08,7.68.3,10.79l-5.28,5.91c-.54.6-1.18.93-1.86.95s-1.34-.27-1.92-.84ZM402.09,383.54c-2.78-2.78-7.26-2.91-10.2-.29l-5.91,5.28c-.51.46-.79.99-.81,1.55-.02.56.23,1.11.72,1.6l10.42,10.42c.48.48,1.04.73,1.6.72.56-.02,1.1-.29,1.55-.81l5.28-5.91c2.62-2.93,2.49-7.41-.29-10.2l-2.37-2.37Z" fill="#e2d1b6" />
                        <path d="M396.84,380.88c2.03,0,4.05.78,5.59,2.31l2.37,2.37c2.96,2.96,3.1,7.73.31,10.86l-5.28,5.91c-.55.61-1.2.95-1.9.97-.7.02-1.37-.28-1.95-.86l-10.42-10.42c-.58-.58-.88-1.26-.86-1.95.02-.7.35-1.35.97-1.9l5.91-5.28c1.5-1.34,3.39-2.01,5.27-2.01ZM397.86,403.21s.04,0,.06,0c.67-.02,1.3-.34,1.83-.93l5.28-5.91c2.76-3.09,2.62-7.79-.3-10.72l-2.37-2.37c-1.52-1.52-3.52-2.28-5.52-2.28-1.86,0-3.71.66-5.2,1.98l-5.91,5.28c-.59.53-.91,1.16-.93,1.83-.02.67.27,1.32.83,1.88l10.42,10.42c.54.54,1.17.83,1.82.83ZM396.84,381.32c1.92,0,3.83.73,5.29,2.19l2.37,2.37c2.8,2.8,2.93,7.31.29,10.27l-5.28,5.91c-.47.52-1.02.81-1.59.82-.57.02-1.14-.24-1.63-.73l-10.42-10.42c-.49-.49-.75-1.06-.73-1.63.02-.57.3-1.12.82-1.59l5.91-5.28c1.42-1.27,3.2-1.9,4.98-1.9ZM402.05,383.58c-2.76-2.76-7.21-2.89-10.13-.29l-5.91,5.28c-.5.45-.77.97-.79,1.52-.02.55.23,1.09.7,1.56l10.42,10.42c.47.47,1.01.72,1.56.7.55-.02,1.07-.29,1.52-.79l5.28-5.91c2.6-2.92,2.48-7.36-.29-10.13l-2.37-2.37Z" fill="#ae9d85" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M403.93,386.18c2.55,2.55,2.66,6.64.26,9.33l-4.7,5.26c-.9,1.01-2.12,1.04-3.08.09l-9.27-9.27c-.96-.96-.92-2.18.09-3.08l5.26-4.7c2.69-2.4,6.78-2.28,9.33.26l2.11,2.11Z" fill="#e2d1b6" />
                        <path d="M397.02,382.03c1.76,0,3.51.67,4.84,2l2.11,2.11c2.56,2.56,2.68,6.69.27,9.4l-4.7,5.26c-.45.51-.99.78-1.56.8-.57.02-1.12-.23-1.6-.71l-9.27-9.27c-.48-.48-.72-1.03-.71-1.6.02-.57.29-1.1.8-1.56l5.26-4.7c1.3-1.16,2.93-1.74,4.56-1.74ZM397.93,401.5s.03,0,.05,0c.54-.02,1.05-.28,1.48-.76l4.7-5.26c2.38-2.67,2.27-6.73-.26-9.26l-2.11-2.11c-1.31-1.31-3.04-1.97-4.77-1.97-1.6,0-3.21.57-4.49,1.71l-5.26,4.7c-.48.43-.75.95-.76,1.48-.02.54.22,1.07.68,1.52l9.27,9.27c.44.44.95.68,1.48.68Z" fill="#ae9d85" />
                      </g>
                      <g>
                        <path d="M396.34,400.93l-9.27-9.27c-.49-.49-.74-1.06-.72-1.64.02-.58.3-1.13.82-1.6l5.26-4.7c2.73-2.44,6.89-2.32,9.48.27l2.11,2.11c2.59,2.59,2.7,6.75.27,9.48l-4.7,5.26c-.46.52-1.01.8-1.6.82-.58.02-1.15-.23-1.64-.72ZM401.74,384.15c-2.51-2.51-6.54-2.62-9.18-.26l-5.26,4.7c-.47.42-.73.92-.74,1.44-.01.52.21,1.03.66,1.48l9.27,9.27c.45.45.96.68,1.48.66.52-.01,1.02-.27,1.44-.74l4.7-5.26c2.36-2.64,2.25-6.67-.26-9.18l-2.11-2.11Z" fill="#e2d1b6" />
                        <path d="M397.02,381.92c1.78,0,3.56.68,4.92,2.03l2.11,2.11c2.61,2.61,2.72,6.8.27,9.55l-4.7,5.26c-.47.53-1.04.82-1.63.83-.6.01-1.18-.24-1.68-.74l-9.27-9.27c-.5-.5-.76-1.08-.74-1.68.02-.6.3-1.16.83-1.63l5.26-4.7c1.32-1.18,2.98-1.77,4.63-1.77ZM397.93,401.6s.03,0,.05,0c.57-.02,1.11-.29,1.56-.8l4.7-5.26c2.42-2.71,2.3-6.84-.27-9.41l-2.11-2.11c-1.33-1.33-3.09-2.01-4.85-2.01-1.63,0-3.26.58-4.56,1.74l-5.26,4.7c-.51.45-.78.99-.8,1.56-.02.57.23,1.12.71,1.6l9.27,9.27c.47.47,1,.71,1.55.71ZM397.02,382.14c1.73,0,3.45.66,4.76,1.97l2.11,2.11c2.52,2.52,2.64,6.59.26,9.25l-4.7,5.26c-.43.48-.94.75-1.48.76-.54.01-1.06-.22-1.52-.68l-9.27-9.27c-.46-.46-.69-.98-.68-1.52.02-.54.28-1.05.76-1.48l5.26-4.7c1.28-1.14,2.88-1.71,4.49-1.71ZM397.93,401.39s.03,0,.05,0c.51-.01.99-.27,1.41-.73l4.7-5.26c2.34-2.62,2.23-6.62-.26-9.11l-2.11-2.11c-2.49-2.49-6.49-2.6-9.11-.26l-5.26,4.7c-.46.41-.71.9-.73,1.41-.01.51.21,1.01.65,1.44l9.27,9.27c.42.42.91.65,1.4.65Z" fill="#ae9d85" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M406.12,397.06l.71-.76c3.58-3.84,3.48-9.83-.23-13.54l-1.22-1.22c-3.71-3.71-9.7-3.82-13.54-.23l-.76.71.26-1.99,6.53-3.18,5.03.6,4.42,3.21,2.98,4.37s.87,3.87.89,4.02c.02.16-.31,4.12-.49,4.52-.18.4-2.48,3.33-2.59,3.35-.11.02-2,.12-2,.12Z" fill="#e2d1b6" />
                        <path d="M397.86,376.8l5.06.61h.01s4.43,3.23,4.43,3.23h0s2.99,4.38,2.99,4.38h0c.04.17.87,3.88.89,4.04.03.19-.31,4.13-.49,4.55-.17.38-2.48,3.35-2.63,3.38-.11.02-1.81.11-2,.12h-.12s.8-.85.8-.85c1.72-1.85,2.65-4.26,2.6-6.78-.04-2.53-1.05-4.9-2.84-6.69l-1.22-1.22c-1.79-1.79-4.16-2.79-6.69-2.84-2.52-.04-4.93.88-6.78,2.6l-.86.81.29-2.15,6.57-3.19ZM402.89,377.51l-5-.6-6.49,3.16-.24,1.82.66-.61c1.87-1.74,4.3-2.68,6.85-2.63,2.55.04,4.95,1.06,6.76,2.87l1.22,1.22c1.8,1.8,2.82,4.2,2.87,6.76.04,2.55-.89,4.99-2.63,6.85l-.63.67c.74-.04,1.74-.1,1.86-.11.19-.14,2.38-2.92,2.56-3.33.17-.37.51-4.31.49-4.49-.02-.15-.84-3.8-.89-4.01l-2.97-4.35-4.4-3.2Z" fill="#ae9d85" />
                      </g>
                      <g>
                        <path d="M390.79,382.59l.36-2.7,6.69-3.25,5.15.62,4.5,3.27.02.03,3.01,4.4v.04c.1.4.88,3.88.91,4.04.03.17-.3,4.17-.51,4.64-.13.29-1.07,1.5-1.35,1.86-1.23,1.58-1.32,1.6-1.4,1.61-.11.02-1.46.1-2.03.13l-.53.03,1.08-1.15c3.52-3.77,3.42-9.59-.23-13.24l-1.22-1.22c-3.65-3.65-9.46-3.75-13.24-.23l-1.2,1.12ZM405.53,381.39l1.22,1.22c3.82,3.82,3.92,9.89.24,13.84l-.34.37c.57-.03,1.19-.07,1.38-.08.35-.35,2.33-2.89,2.49-3.24.14-.32.49-4.07.47-4.41-.02-.12-.53-2.42-.88-3.96l-2.94-4.3-4.35-3.16-4.91-.59-6.37,3.1-.17,1.28.32-.3c3.94-3.68,10.02-3.58,13.84.24Z" fill="#e2d1b6" />
                        <path d="M397.83,376.58l5.18.62h.01s4.5,3.28,4.5,3.28l.03.04,3.01,4.41.02.11c.32,1.43.86,3.85.88,3.99.03.17-.3,4.19-.51,4.67-.13.3-1.07,1.51-1.36,1.88-1.24,1.59-1.33,1.61-1.43,1.63-.12.02-1.46.1-2.03.13l-.66.03,1.16-1.24c3.5-3.75,3.4-9.54-.23-13.17l-1.22-1.22c-3.63-3.63-9.41-3.73-13.17-.23l-1.3,1.22.38-2.87,6.73-3.27ZM402.97,377.3l-5.12-.61-6.65,3.24-.34,2.53,1.1-1.03c3.79-3.54,9.64-3.44,13.31.23l1.22,1.22c3.67,3.67,3.77,9.51.23,13.31l-.99,1.06.41-.02c1.19-.06,1.94-.11,2.02-.12.06-.01.15-.03,1.37-1.6.58-.75,1.24-1.63,1.34-1.85.21-.46.53-4.44.5-4.61-.01-.1-.34-1.55-.88-3.98l-.02-.09-3.02-4.42-4.48-3.26ZM397.9,377.03l4.94.59h.01s4.35,3.17,4.35,3.17h0s2.94,4.32,2.94,4.32h0c.33,1.48.86,3.85.88,3.97.02.35-.33,4.11-.48,4.44-.16.36-2.18,2.93-2.5,3.25h-.01s-.02.01-.02.01c-.23.02-1.05.07-1.39.08h-.12s.43-.45.43-.45c3.66-3.92,3.56-9.97-.24-13.77l-1.22-1.22c-3.8-3.8-9.84-3.9-13.77-.24l-.42.4.19-1.44,6.41-3.12ZM402.8,377.72l-4.89-.59-6.33,3.08-.15,1.11.22-.2c1.94-1.81,4.39-2.71,6.83-2.71,2.56,0,5.12.99,7.08,2.95l1.22,1.22c3.83,3.83,3.94,9.94.24,13.91l-.26.28c.37-.02,1.02-.06,1.24-.08.4-.42,2.32-2.88,2.46-3.21.14-.32.48-4.05.47-4.39-.02-.11-.55-2.47-.88-3.94l-2.93-4.29-4.33-3.15Z" fill="#ae9d85" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M407.65,382.13c3.52,3.71,3.53,9.53.04,13.25l-4.91,5.23,1.45,1.36,4.91-5.23c4.21-4.49,4.19-11.51-.04-15.97l-1.72-1.72c-4.47-4.24-11.48-4.26-15.97-.04l-5.23,4.91,1.36,1.45,5.23-4.91c3.73-3.5,9.55-3.48,13.25.04l1.65,1.65Z" fill="#e2d1b6" />
                        <path d="M399.36,375.81c2.9,0,5.79,1.07,8.05,3.2l1.72,1.72c4.26,4.49,4.28,11.53.05,16.04l-4.94,5.27-1.52-1.43,4.94-5.27c3.48-3.71,3.46-9.5-.04-13.18l-1.65-1.65c-3.69-3.5-9.48-3.51-13.18-.04l-5.27,4.94-1.43-1.52.04-.03,5.23-4.91c2.25-2.11,5.12-3.16,8-3.16ZM404.23,401.9l4.87-5.19c4.19-4.47,4.18-11.46-.04-15.9l-1.72-1.72c-4.45-4.22-11.43-4.24-15.9-.04l-5.19,4.87,1.29,1.37,5.19-4.87c3.74-3.51,9.6-3.5,13.32.04l1.65,1.65c3.53,3.73,3.55,9.58.04,13.32l-4.87,5.19,1.37,1.29Z" fill="#ae9d85" />
                      </g>
                      <g>
                        <path d="M402.48,400.63l5.05-5.39c3.42-3.64,3.4-9.33-.03-12.95l-1.65-1.65c-3.62-3.43-9.31-3.45-12.95-.03l-5.39,5.05-1.65-1.76,5.39-5.05c4.57-4.29,11.72-4.27,16.27.04l1.73,1.73c4.32,4.55,4.34,11.7.05,16.27l-5.05,5.39-1.76-1.65ZM386.47,383.92l1.06,1.13,5.07-4.76c3.81-3.57,9.76-3.56,13.55.04l1.65,1.65h0c3.59,3.79,3.61,9.74.04,13.55l-4.76,5.07,1.13,1.06,4.76-5.07c4.13-4.41,4.12-11.29-.04-15.68l-1.72-1.72c-4.38-4.16-11.27-4.17-15.67-.04l-5.07,4.76Z" fill="#e2d1b6" />
                        <path d="M399.36,375.59c2.95,0,5.9,1.09,8.19,3.26l1.73,1.73c4.34,4.57,4.36,11.75.05,16.34l-5.09,5.42-1.83-1.72,5.09-5.42c3.4-3.62,3.38-9.28-.03-12.89l-1.65-1.65c-1.81-1.71-4.13-2.57-6.46-2.57-2.31,0-4.62.85-6.43,2.54l-5.42,5.09-1.72-1.83.04-.03,5.39-5.05c2.29-2.15,5.22-3.22,8.15-3.22ZM404.24,402.21l5.02-5.35c4.27-4.55,4.25-11.67-.05-16.2l-1.73-1.73c-4.53-4.3-11.65-4.32-16.2-.04l-5.35,5.02,1.58,1.69,5.35-5.02c3.66-3.44,9.38-3.42,13.02.03l1.65,1.65c3.45,3.64,3.47,9.36.04,13.02l-5.02,5.35,1.69,1.58ZM399.36,376.02c2.84,0,5.68,1.05,7.89,3.14l1.72,1.72c4.18,4.4,4.2,11.32.04,15.75l-4.79,5.11-1.2-1.13,4.79-5.11c3.56-3.79,3.54-9.71-.04-13.48l-1.66-1.66c-3.77-3.58-9.69-3.59-13.48-.04l-5.11,4.79-1.13-1.2.04-.03,5.07-4.76c2.21-2.07,5.03-3.1,7.85-3.1ZM404.22,401.6l4.72-5.03c4.12-4.39,4.1-11.24-.04-15.61l-1.72-1.72c-4.36-4.14-11.22-4.15-15.6-.04l-5.03,4.72.99,1.06,5.03-4.72c3.83-3.59,9.81-3.58,13.62.04l1.66,1.66c3.62,3.81,3.63,9.79.04,13.62l-4.72,5.04,1.06.99Z" fill="#ae9d85" />
                      </g>
                    </g>
                  </g>
                  <g filter="url(#ds-soft)">
                    <g>
                      <g>
                        <rect x="394.62" y="409.01" width="5.16" height="1.43" transform="translate(490.45 -153.25) rotate(53.52)" fill="#e2d1b6" />
                        <path d="M396.25,407.16l3.13,4.23-1.23.91-3.13-4.23,1.23-.91ZM399.24,411.36l-3.01-4.07-1.07.79,3.01,4.07,1.07-.79Z" fill="#ae9d85" />
                      </g>
                      <g>
                        <path d="M394.79,408.03l1.5-1.11,3.32,4.49-1.5,1.11-3.32-4.49ZM396.2,407.53l-.81.6,2.81,3.8.81-.6-2.81-3.8Z" fill="#e2d1b6" />
                        <path d="M396.3,406.85l3.38,4.57-1.58,1.17-3.38-4.57,1.58-1.17ZM399.54,411.41l-3.26-4.41-1.42,1.05,3.26,4.41,1.42-1.05ZM396.21,407.46l2.87,3.88-.89.66-2.87-3.88.89-.66ZM398.94,411.32l-2.75-3.72-.73.54,2.75,3.72.73-.54Z" fill="#ae9d85" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="393.29" y="408.97" width="5.82" height="1.43" transform="translate(490.01 -152.47) rotate(53.52)" fill="#e2d1b6" />
                        <path d="M395.05,406.85l3.52,4.76-1.23.91-3.52-4.76,1.23-.91ZM398.43,411.59l-3.4-4.6-1.07.79,3.4,4.6,1.07-.79Z" fill="#ae9d85" />
                      </g>
                      <g>
                        <path d="M393.59,407.73l1.5-1.11,3.72,5.03-1.5,1.11-3.72-5.03ZM395,407.22l-.81.6,3.2,4.33.81-.6-3.2-4.33Z" fill="#e2d1b6" />
                        <path d="M395.1,406.55l3.78,5.11-1.58,1.17-3.78-5.11,1.58-1.17ZM398.74,411.63l-3.66-4.95-1.42,1.05,3.66,4.95,1.42-1.05ZM395.01,407.15l3.26,4.41-.89.66-3.26-4.41.89-.66ZM398.13,411.54l-3.14-4.25-.73.54,3.14,4.25.73-.54Z" fill="#ae9d85" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="394.59" y="428.66" width="5.19" height="1.43" transform="translate(-184.21 493.41) rotate(-53.52)" fill="#e2d1b6" />
                        <path d="M398.14,426.8l1.23.91-3.15,4.26-1.23-.91,3.15-4.26ZM399.24,427.73l-1.07-.79-3.03,4.09,1.07.79,3.03-4.09Z" fill="#ae9d85" />
                      </g>
                      <g>
                        <path d="M394.77,431.09l3.34-4.52,1.5,1.11-3.34,4.52-1.5-1.11ZM398.2,427.17l-2.83,3.83.81.6,2.83-3.83-.81-.6Z" fill="#e2d1b6" />
                        <path d="M398.1,426.49l1.58,1.17-3.4,4.6-1.58-1.17,3.4-4.6ZM399.54,427.68l-1.42-1.05-3.28,4.44,1.42,1.05,3.28-4.44ZM398.19,427.1l.89.66-2.89,3.91-.89-.66,2.89-3.91ZM398.94,427.77l-.73-.54-2.77,3.75.73.54,2.77-3.75Z" fill="#ae9d85" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="393.29" y="428.69" width="5.82" height="1.43" transform="translate(-184.63 492.63) rotate(-53.52)" fill="#e2d1b6" />
                        <path d="M397.34,426.57l1.23.91-3.52,4.76-1.23-.91,3.52-4.76ZM398.43,427.5l-1.07-.79-3.4,4.6,1.07.79,3.4-4.6Z" fill="#ae9d85" />
                      </g>
                      <g>
                        <path d="M393.59,431.36l3.72-5.03,1.5,1.11-3.72,5.03-1.5-1.11ZM397.4,426.94l-3.2,4.33.81.6,3.2-4.33-.81-.6Z" fill="#e2d1b6" />
                        <path d="M397.3,426.27l1.58,1.17-3.78,5.11-1.58-1.17,3.78-5.11ZM398.74,427.46l-1.42-1.05-3.66,4.95,1.42,1.05,3.66-4.95ZM397.39,426.87l.89.66-3.26,4.41-.89-.66,3.26-4.41ZM398.13,427.55l-.73-.54-3.14,4.25.73.54,3.14-4.25Z" fill="#ae9d85" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M403.32,421.12c0,4.05-3.16,7.4-7.21,7.63l-7.92.45c-1.52.09-2.52-.86-2.52-2.38v-14.74c0-1.52,1-2.47,2.52-2.38l7.92.45c4.05.23,7.21,3.58,7.21,7.63v3.35Z" fill="#e2d1b6" />
                        <path d="M388,409.64c.06,0,.13,0,.19,0l7.92.45c4.07.23,7.26,3.6,7.26,7.68v3.35c0,4.08-3.19,7.45-7.26,7.68l-7.92.45c-.76.04-1.4-.17-1.87-.6-.46-.44-.71-1.07-.71-1.83v-14.74c0-.76.24-1.39.71-1.83.42-.4,1-.61,1.67-.61ZM388,429.15c.06,0,.12,0,.19,0l7.92-.45c4.02-.23,7.16-3.56,7.16-7.58v-3.35c0-4.02-3.15-7.35-7.16-7.58l-7.92-.45c-.73-.04-1.35.16-1.79.57-.44.42-.67,1.02-.67,1.76v14.74c0,.73.23,1.34.67,1.76.4.38.96.58,1.61.58Z" fill="#ae9d85" />
                      </g>
                      <g>
                        <path d="M385.46,426.82v-14.74c0-.81.26-1.48.76-1.95.5-.47,1.18-.69,1.99-.65l7.92.45c4.16.23,7.41,3.68,7.41,7.84v3.35c0,4.16-3.26,7.61-7.41,7.84l-7.92.45c-.81.05-1.49-.18-1.99-.65s-.76-1.14-.76-1.95ZM403.1,417.77c0-3.94-3.08-7.19-7.01-7.41l-7.92-.45c-.68-.04-1.26.14-1.67.53-.41.39-.62.95-.62,1.64v14.74c0,.69.22,1.25.62,1.64.41.39.98.57,1.67.53l7.92-.45c3.93-.22,7.01-3.48,7.01-7.41v-3.35Z" fill="#e2d1b6" />
                        <path d="M388,409.42c.07,0,.14,0,.21,0l7.92.45c4.18.24,7.46,3.7,7.46,7.89v3.35c0,4.19-3.28,7.66-7.46,7.89l-7.92.45c-.82.05-1.52-.18-2.03-.66-.51-.48-.77-1.17-.77-1.99v-14.74c0-.82.27-1.51.77-1.99.46-.44,1.09-.67,1.82-.67ZM388,429.37c.07,0,.13,0,.2,0l7.92-.45c4.13-.23,7.37-3.66,7.37-7.79v-3.35c0-4.14-3.24-7.56-7.37-7.79l-7.92-.45c-.79-.04-1.47.17-1.95.63-.49.46-.74,1.12-.74,1.91v14.74c0,.79.26,1.45.74,1.91.44.42,1.05.64,1.75.64ZM388,409.85c.06,0,.12,0,.18,0l7.92.45c3.96.22,7.05,3.5,7.05,7.46v3.35c0,3.96-3.1,7.24-7.05,7.46l-7.92.45c-.7.04-1.29-.15-1.71-.54-.42-.4-.64-.97-.64-1.67v-14.74c0-.7.22-1.28.64-1.67.38-.36.91-.55,1.53-.55ZM388,428.94c.06,0,.11,0,.17,0l7.92-.45c3.9-.22,6.96-3.45,6.96-7.36v-3.35c0-3.91-3.06-7.14-6.96-7.36l-7.92-.45c-.67-.04-1.23.14-1.63.52-.4.38-.61.93-.61,1.6v14.74c0,.67.21,1.22.61,1.6.36.34.86.52,1.46.52Z" fill="#ae9d85" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M402.54,420.94c0,3.6-2.81,6.58-6.41,6.78l-7.04.4c-1.35.08-2.24-.77-2.24-2.12v-13.11c0-1.35.89-2.19,2.24-2.12l7.04.4c3.6.2,6.41,3.18,6.41,6.78v2.98Z" fill="#e2d1b6" />
                        <path d="M388.92,410.72c.06,0,.11,0,.17,0l7.04.4c3.62.2,6.46,3.21,6.46,6.83v2.98c0,3.63-2.84,6.63-6.46,6.83l-7.04.4c-.68.04-1.25-.15-1.66-.54-.41-.39-.63-.95-.63-1.63v-13.11c0-.68.22-1.24.63-1.63.38-.36.89-.54,1.49-.54ZM388.92,428.07c.05,0,.11,0,.17,0l7.04-.4c3.57-.2,6.36-3.16,6.36-6.73v-2.98c0-3.57-2.79-6.53-6.36-6.73l-7.04-.4c-.65-.04-1.2.14-1.59.51-.39.37-.6.91-.6,1.56v13.11c0,.65.21,1.19.6,1.56.36.34.85.51,1.42.51Z" fill="#ae9d85" />
                      </g>
                      <g>
                        <path d="M386.74,426v-13.11c0-.69.22-1.27.65-1.67.42-.4,1.01-.59,1.71-.55l7.04.4c3.65.21,6.51,3.23,6.51,6.89v2.98c0,3.66-2.86,6.68-6.51,6.89l-7.04.4c-.69.04-1.28-.15-1.71-.55-.42-.4-.65-.98-.65-1.67ZM402.43,417.95c0-3.54-2.77-6.47-6.31-6.67l-7.04-.4c-.63-.04-1.17.14-1.55.49-.38.36-.58.88-.58,1.52v13.11c0,.63.2,1.16.58,1.52.38.36.91.53,1.55.49l7.04-.4c3.54-.2,6.31-3.13,6.31-6.67v-2.98Z" fill="#e2d1b6" />
                        <path d="M388.92,410.61c.06,0,.12,0,.18,0l7.04.4c3.68.21,6.56,3.26,6.56,6.94v2.98c0,3.68-2.88,6.73-6.56,6.94l-7.04.4c-.71.04-1.31-.16-1.74-.57-.43-.41-.66-1-.66-1.71v-13.11c0-.71.23-1.3.66-1.71.4-.38.94-.57,1.57-.57ZM388.92,428.18c.06,0,.11,0,.17,0l7.04-.4c3.62-.2,6.46-3.21,6.46-6.84v-2.98c0-3.63-2.84-6.64-6.46-6.84l-7.04-.4c-.68-.04-1.26.15-1.67.54-.41.39-.63.96-.63,1.64v13.11c0,.68.22,1.25.63,1.64.38.36.89.54,1.5.54ZM388.92,410.83c.05,0,.11,0,.17,0l7.04.4c3.56.2,6.36,3.16,6.36,6.72v2.98c0,3.57-2.79,6.52-6.36,6.72l-7.04.4c-.65.04-1.19-.14-1.58-.51-.39-.37-.6-.9-.6-1.55v-13.11c0-.65.21-1.18.6-1.55.36-.34.84-.51,1.42-.51ZM388.92,427.96c.05,0,.11,0,.16,0l7.04-.4c3.51-.2,6.26-3.11,6.26-6.62v-2.98c0-3.52-2.75-6.43-6.26-6.62l-7.04-.4c-.62-.03-1.14.13-1.51.48-.37.35-.56.86-.56,1.48v13.11c0,.62.2,1.13.56,1.48.34.32.8.48,1.35.48Z" fill="#ae9d85" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M396.39,430.18l1.04-.04c5.25-.18,9.41-4.49,9.41-9.74v-1.72c0-5.25-4.16-9.56-9.41-9.74l-1.04-.04,1.59-1.22,6.86,2.37,3.13,3.99.85,5.4-.98,5.2s-2.12,3.35-2.21,3.48c-.09.13-3.13,2.69-3.54,2.85-.41.16-4.11.6-4.21.54-.09-.06-1.5-1.33-1.5-1.33Z" fill="#e2d1b6" />
                        <path d="M397.97,407.63l6.9,2.39h0s3.14,4.01,3.14,4.01h0s.86,5.42.86,5.42l-.99,5.22c-.09.14-2.12,3.35-2.22,3.48-.11.15-3.14,2.7-3.56,2.87-.39.15-4.13.62-4.25.53-.1-.06-1.36-1.2-1.5-1.33l-.09-.08,1.16-.04c2.52-.09,4.88-1.14,6.64-2.95s2.72-4.21,2.72-6.74v-1.72c0-2.53-.97-4.92-2.72-6.74s-4.11-2.87-6.64-2.95l-1.18-.04,1.72-1.32ZM404.82,410.1l-6.82-2.36-1.46,1.12.9.03c2.55.09,4.93,1.15,6.71,2.98,1.77,1.84,2.75,4.25,2.75,6.81v1.72c0,2.55-.98,4.97-2.75,6.81-1.77,1.84-4.16,2.9-6.71,2.98l-.92.03c.55.49,1.3,1.16,1.39,1.23.23.04,3.75-.38,4.17-.54.38-.15,3.41-2.69,3.52-2.83.09-.12,2.09-3.28,2.21-3.47l.98-5.18-.85-5.38-3.11-3.96Z" fill="#ae9d85" />
                      </g>
                      <g>
                        <path d="M395.78,409.1l2.16-1.66,7.03,2.43,3.21,4.08.87,5.49v.04s-1,5.24-1,5.24l-.02.04c-.22.34-2.13,3.36-2.22,3.49-.1.14-3.16,2.74-3.64,2.92-.29.11-1.81.31-2.27.36-1.99.25-2.06.2-2.13.15-.1-.06-1.1-.96-1.52-1.34l-.4-.36,1.57-.05c5.16-.18,9.2-4.36,9.2-9.52v-1.72c0-5.16-4.04-9.34-9.2-9.52l-1.64-.06ZM407.06,418.68v1.72c0,5.4-4.22,9.77-9.62,9.95l-.51.02c.43.38.89.8,1.04.92.5,0,3.69-.39,4.05-.53.33-.13,3.23-2.53,3.45-2.78.07-.1,1.33-2.09,2.18-3.42l.97-5.12-.84-5.31-3.06-3.89-6.69-2.31-1.02.78.44.02c5.39.19,9.62,4.56,9.62,9.95Z" fill="#e2d1b6" />
                        <path d="M397.93,407.39l7.07,2.44h0s3.21,4.1,3.21,4.1h0s.87,5.51.87,5.51v.05s-1,5.25-1,5.25l-.06.09c-.78,1.24-2.11,3.33-2.19,3.44-.1.14-3.18,2.75-3.66,2.94-.3.12-1.83.31-2.28.37-2.01.25-2.08.2-2.17.14-.1-.06-1-.87-1.53-1.35l-.49-.44,1.7-.06c5.13-.18,9.15-4.34,9.15-9.47v-1.72c0-5.13-4.02-9.3-9.15-9.47l-1.78-.06,2.29-1.76ZM404.95,409.92l-6.99-2.42-2.03,1.55,1.5.05c5.19.18,9.25,4.38,9.25,9.57v1.72c0,5.19-4.06,9.39-9.25,9.57l-1.45.05.3.27c.88.8,1.45,1.3,1.52,1.34.05.04.13.09,2.1-.16.94-.12,2.03-.27,2.26-.36.47-.18,3.51-2.77,3.62-2.91.06-.08.86-1.33,2.19-3.44l.05-.08.99-5.26-.87-5.47-3.19-4.06ZM398.01,407.88l6.73,2.33h0s3.07,3.91,3.07,3.91h0s.84,5.33.84,5.33l-.97,5.15c-.8,1.27-2.11,3.32-2.18,3.42-.23.26-3.14,2.67-3.48,2.8-.37.14-3.61.53-4.06.53h-.02s-.01-.01-.01-.01c-.18-.15-.79-.69-1.04-.92l-.09-.08.63-.02c5.36-.19,9.57-4.54,9.57-9.9v-1.72c0-5.37-4.2-9.72-9.57-9.9l-.58-.02,1.15-.88ZM404.69,410.29l-6.65-2.3-.89.68h.3c5.42.2,9.66,4.59,9.66,10.02v1.72c0,5.42-4.25,9.82-9.66,10.01h-.38c.28.26.76.69.93.84.58-.01,3.68-.4,4.01-.53.33-.13,3.21-2.52,3.43-2.77.06-.09,1.3-2.04,2.17-3.4l.96-5.1-.84-5.28-3.04-3.87Z" fill="#ae9d85" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M408.03,420.71c-.13,5.11-4.24,9.23-9.35,9.4l-7.17.23.06,1.98,7.17-.23c6.15-.2,11.1-5.17,11.26-11.33v-2.44c-.16-6.16-5.11-11.13-11.26-11.33l-7.17-.23-.06,1.98,7.17.23c5.11.16,9.21,4.29,9.35,9.4v2.33Z" fill="#e2d1b6" />
                        <path d="M391.53,406.72l7.22.23c6.18.2,11.15,5.19,11.31,11.38v2.44c-.16,6.18-5.13,11.18-11.31,11.38l-7.22.23-.07-2.08,7.22-.23c5.08-.16,9.16-4.27,9.3-9.35v-2.33c-.13-5.08-4.22-9.19-9.3-9.35l-7.22-.23.07-2.08ZM391.63,432.27l7.12-.23c6.13-.2,11.05-5.15,11.22-11.28v-2.43c-.16-6.13-5.09-11.08-11.22-11.28l-7.12-.23-.06,1.88,7.12.23c5.13.16,9.26,4.31,9.39,9.45v2.33c-.14,5.13-4.26,9.28-9.39,9.45l-7.12.23.06,1.88Z" fill="#ae9d85" />
                      </g>
                      <g>
                        <path d="M391.3,430.13l7.38-.24c4.99-.16,9-4.19,9.14-9.18v-2.33c-.13-4.99-4.14-9.02-9.14-9.18l-7.38-.24.08-2.41,7.38.24c6.27.2,11.31,5.27,11.47,11.54v2.44c-.17,6.28-5.2,11.34-11.47,11.54l-7.38.24-.08-2.41ZM391.79,407l-.05,1.55,6.95.22c5.22.17,9.42,4.39,9.55,9.61v2.34s0,0,0,0c-.14,5.22-4.33,9.44-9.55,9.61l-6.95.22.05,1.55,6.95-.22c6.04-.19,10.9-5.08,11.05-11.12v-2.43c-.16-6.04-5.01-10.92-11.05-11.11l-6.95-.22Z" fill="#e2d1b6" />
                        <path d="M391.33,406.5l7.43.24c6.29.2,11.36,5.29,11.52,11.59v2.44c-.17,6.3-5.23,11.39-11.52,11.59l-7.43.24-.08-2.51,7.43-.24c4.96-.16,8.96-4.17,9.09-9.14v-2.33c-.13-4.96-4.12-8.97-9.09-9.13l-7.43-.24.08-2.51ZM391.42,432.49l7.33-.23c6.24-.2,11.26-5.25,11.42-11.49v-2.44c-.16-6.24-5.18-11.29-11.42-11.49l-7.33-.23-.07,2.31,7.33.23c5.02.16,9.05,4.21,9.19,9.23v2.33c-.13,5.02-4.17,9.08-9.19,9.23l-7.33.23.07,2.31ZM391.74,406.94l7,.22c6.07.19,10.94,5.1,11.1,11.16v2.43c-.16,6.07-5.04,10.97-11.1,11.17l-7,.22-.05-1.65,7-.22c5.19-.17,9.37-4.36,9.51-9.56v-2.34c-.14-5.19-4.31-9.39-9.51-9.56l-7-.22.05-1.65ZM391.84,432.04l6.9-.22c6.01-.19,10.85-5.05,11.01-11.07v-2.43c-.16-6.01-4.99-10.87-11.01-11.06l-6.9-.22-.05,1.45,6.9.22c5.25.17,9.47,4.41,9.6,9.66v2.34c-.14,5.25-4.36,9.49-9.6,9.66l-6.9.22.05,1.45Z" fill="#ae9d85" />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <rect id="sink" x="463.95" y="682.3" width="24" height="24" fill="none" stroke="#3e5665" stroke-dasharray="6" stroke-miterlimit="10" stroke-width=".5" />
              <g id="dryer">
                <g>
                  <polyline points="472.85 636.14 475.85 636.14 475.85 639.14" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                  <line x1="475.85" y1="644.36" x2="475.85" y2="662.64" fill="none" stroke="#3e5665" stroke-dasharray="5.22 5.22" stroke-miterlimit="10" stroke-width=".5" />
                  <polyline points="475.85 665.25 475.85 668.25 472.85 668.25" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M467.25,668.25h-17.86c-2.44,0-4.41-1.98-4.41-4.41v-23.29c0-2.44,1.98-4.41,4.41-4.41h20.66" fill="none" stroke="#3e5665" stroke-dasharray="5.6 5.6" stroke-miterlimit="10" stroke-width=".5" />
                </g>
              </g>
              <g id="washer">
                <g>
                  <polyline points="472.81 603.43 475.81 603.43 475.81 606.43" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                  <line x1="475.81" y1="611.65" x2="475.81" y2="629.93" fill="none" stroke="#3e5665" stroke-dasharray="5.22 5.22" stroke-miterlimit="10" stroke-width=".5" />
                  <polyline points="475.81 632.54 475.81 635.54 472.81 635.54" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                  <path d="M467.2,635.54h-17.86c-2.44,0-4.41-1.98-4.41-4.41v-23.29c0-2.44,1.98-4.41,4.41-4.41h20.66" fill="none" stroke="#3e5665" stroke-dasharray="5.6 5.6" stroke-miterlimit="10" stroke-width=".5" />
                </g>
              </g>
              <g id="sec-van">
                <rect x="536.34" y="649.03" width="27.19" height="68.7" transform="translate(1099.87 1366.76) rotate(180)" fill="#dbe7ee" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <g id="sink1" data-name="sink">
                  <path d="M550.14,695.85c1.33.14,2.52.63,3.57,1.47l.52-3.04c-1.26-.49-2.62-.77-4.09-.84-2.73.07-5,1.05-6.82,2.94-1.89,1.82-2.87,4.09-2.94,6.82.07,2.8,1.05,5.11,2.94,6.93,1.82,1.89,4.09,2.87,6.82,2.94,2.8-.07,5.11-1.05,6.93-2.94,1.89-1.82,2.87-4.13,2.94-6.93-.07-2.73-1.05-5-2.94-6.82-.84-.84-1.78-1.54-2.83-2.1.84,2.73,1.26,5.53,1.26,8.4l1.89-.31h.21c.21,0,.38.1.52.31.21.21.28.42.21.63,0,.21-.07.42-.21.63-.21.14-.42.21-.63.21s-.42-.1-.63-.31h-1.36c0,2.8-.42,5.56-1.26,8.29l-.52-2.94c-1.33,1.05-2.83,1.57-4.51,1.57s-3.22-.52-4.62-1.57c-1.12-.91-1.92-1.96-2.41-3.15-.49-1.19-.63-2.45-.42-3.78.14-1.33.63-2.52,1.47-3.57.91-1.12,1.96-1.92,3.15-2.41s2.45-.63,3.78-.42Z" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <path d="M550.14,692.28c-2.03.07-3.85.56-5.46,1.47-1.68.98-3.01,2.31-3.99,3.99-.91,1.61-1.4,3.43-1.47,5.46.07,2.1.56,3.95,1.47,5.56.98,1.68,2.31,3.01,3.99,3.99,1.61.91,3.43,1.4,5.46,1.47,2.03-.07,3.88-.56,5.56-1.47,1.68-.98,2.97-2.31,3.88-3.99.98-1.61,1.5-3.46,1.57-5.56-.07-2.03-.59-3.85-1.57-5.46-.91-1.68-2.2-3.01-3.88-3.99-1.68-.91-3.53-1.4-5.56-1.47Z" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <path d="M556.02,705.51v1.47c.07.14.17.24.31.31.21-.07.31-.17.31-.31v-1.99c0-.21-.1-.31-.31-.31-.14,0-.24.1-.31.31v.52c-.14-.07-.24-.17-.31-.31-.14-.35,0-.66.42-.94.42-.07.73.07.94.42.14.42,0,.73-.42.94" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <path d="M553.71,709.18v-.1c.35-1.75.56-3.5.63-5.25h-2.94l-.21-.31v-.52l.21-.31h2.94c-.07-1.82-.28-3.6-.63-5.35" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <path d="M550.14,702.36c-.49.07-.77.35-.84.84.07.56.35.87.84.94.56-.07.87-.38.94-.94-.07-.49-.38-.77-.94-.84Z" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <line x1="554.34" y1="702.67" x2="555.49" y2="702.67" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <line x1="555.49" y1="703.83" x2="554.34" y2="703.83" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <path d="M556.86,703.83l.84.21c.21-.21.35-.49.42-.84-.07-.28-.28-.56-.63-.84" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <path d="M557.49,704.14c.07-.07.14-.1.21-.1" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <path d="M556.02,700.78c-.35.28-.45.59-.31.94.21.42.52.56.94.42.42-.21.56-.52.42-.94-.07-.14-.21-.28-.42-.42v.73c0,.14-.1.24-.31.31-.14-.07-.24-.17-.31-.31v-1.99c.07-.21.17-.31.31-.31.21,0,.31.1.31.31v1.26" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                </g>
                <g id="sink2" data-name="sink">
                  <path d="M549.88,659.56c1.33.14,2.52.63,3.57,1.47l.52-3.04c-1.26-.49-2.62-.77-4.09-.84-2.73.07-5,1.05-6.82,2.94-1.89,1.82-2.87,4.09-2.94,6.82.07,2.8,1.05,5.11,2.94,6.93,1.82,1.89,4.09,2.87,6.82,2.94,2.8-.07,5.11-1.05,6.93-2.94,1.89-1.82,2.87-4.13,2.94-6.93-.07-2.73-1.05-5-2.94-6.82-.84-.84-1.78-1.54-2.83-2.1.84,2.73,1.26,5.53,1.26,8.4l1.89-.31h.21c.21,0,.38.1.52.31.21.21.28.42.21.63,0,.21-.07.42-.21.63-.21.14-.42.21-.63.21s-.42-.1-.63-.31h-1.36c0,2.8-.42,5.56-1.26,8.29l-.52-2.94c-1.33,1.05-2.83,1.57-4.51,1.57s-3.22-.52-4.62-1.57c-1.12-.91-1.92-1.96-2.41-3.15-.49-1.19-.63-2.45-.42-3.78.14-1.33.63-2.52,1.47-3.57.91-1.12,1.96-1.92,3.15-2.41s2.45-.63,3.78-.42Z" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <path d="M549.88,655.99c-2.03.07-3.85.56-5.46,1.47-1.68.98-3.01,2.31-3.99,3.99-.91,1.61-1.4,3.43-1.47,5.46.07,2.1.56,3.95,1.47,5.56.98,1.68,2.31,3.01,3.99,3.99,1.61.91,3.43,1.4,5.46,1.47,2.03-.07,3.88-.56,5.56-1.47,1.68-.98,2.97-2.31,3.88-3.99.98-1.61,1.5-3.46,1.57-5.56-.07-2.03-.59-3.85-1.57-5.46-.91-1.68-2.2-3.01-3.88-3.99-1.68-.91-3.53-1.4-5.56-1.47Z" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <path d="M555.76,669.22v1.47c.07.14.17.24.31.31.21-.07.31-.17.31-.31v-1.99c0-.21-.1-.31-.31-.31-.14,0-.24.1-.31.31v.52c-.14-.07-.24-.17-.31-.31-.14-.35,0-.66.42-.94.42-.07.73.07.94.42.14.42,0,.73-.42.94" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <path d="M553.45,672.89v-.1c.35-1.75.56-3.5.63-5.25h-2.94l-.21-.31v-.52l.21-.31h2.94c-.07-1.82-.28-3.6-.63-5.35" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <path d="M549.88,666.07c-.49.07-.77.35-.84.84.07.56.35.87.84.94.56-.07.87-.38.94-.94-.07-.49-.38-.77-.94-.84Z" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <line x1="554.08" y1="666.39" x2="555.24" y2="666.39" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <line x1="555.24" y1="667.54" x2="554.08" y2="667.54" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <path d="M556.6,667.54l.84.21c.21-.21.35-.49.42-.84-.07-.28-.28-.56-.63-.84" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <path d="M557.23,667.86c.07-.07.14-.1.21-.1" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <path d="M555.76,664.5c-.35.28-.45.59-.31.94.21.42.52.56.94.42.42-.21.56-.52.42-.94-.07-.14-.21-.28-.42-.42v.73c0,.14-.1.24-.31.31-.14-.07-.24-.17-.31-.31v-1.99c.07-.21.17-.31.31-.31.21,0,.31.1.31.31v1.26" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                </g>
              </g>
              <g id="mbr-van">
                <rect x="747.62" y="393.88" width="27.19" height="85.44" fill="#dbe7ee" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <g id="sink3" data-name="sink">
                  <path d="M761.27,419.7c-1.33-.14-2.52-.63-3.57-1.47l-.52,3.04c1.26.49,2.62.77,4.09.84,2.73-.07,5-1.05,6.82-2.94,1.89-1.82,2.87-4.09,2.94-6.82-.07-2.8-1.05-5.11-2.94-6.93-1.82-1.89-4.09-2.87-6.82-2.94-2.8.07-5.11,1.05-6.93,2.94-1.89,1.82-2.87,4.13-2.94,6.93.07,2.73,1.05,5,2.94,6.82.84.84,1.78,1.54,2.83,2.1-.84-2.73-1.26-5.53-1.26-8.4l-1.89.31h-.21c-.21,0-.38-.1-.52-.31-.21-.21-.28-.42-.21-.63,0-.21.07-.42.21-.63.21-.14.42-.21.63-.21s.42.1.63.31h1.36c0-2.8.42-5.56,1.26-8.29l.52,2.94c1.33-1.05,2.83-1.57,4.51-1.57s3.22.52,4.62,1.57c1.12.91,1.92,1.96,2.41,3.15.49,1.19.63,2.45.42,3.78-.14,1.33-.63,2.52-1.47,3.57-.91,1.12-1.96,1.92-3.15,2.41s-2.45.63-3.78.42Z" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <path d="M761.27,423.27c2.03-.07,3.85-.56,5.46-1.47,1.68-.98,3.01-2.31,3.99-3.99.91-1.61,1.4-3.43,1.47-5.46-.07-2.1-.56-3.95-1.47-5.56-.98-1.68-2.31-3.01-3.99-3.99-1.61-.91-3.43-1.4-5.46-1.47-2.03.07-3.88.56-5.56,1.47-1.68.98-2.97,2.31-3.88,3.99-.98,1.61-1.5,3.46-1.57,5.56.07,2.03.59,3.85,1.57,5.46.91,1.68,2.2,3.01,3.88,3.99,1.68.91,3.53,1.4,5.56,1.47Z" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <path d="M755.39,410.05v-1.47c-.07-.14-.17-.24-.31-.31-.21.07-.31.17-.31.31v1.99c0,.21.1.31.31.31.14,0,.24-.1.31-.31v-.52c.14.07.24.17.31.31.14.35,0,.66-.42.94-.42.07-.73-.07-.94-.42-.14-.42,0-.73.42-.94" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <path d="M757.7,406.37v.1c-.35,1.75-.56,3.5-.63,5.25h2.94l.21.31v.52l-.21.31h-2.94c.07,1.82.28,3.6.63,5.35" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <path d="M761.27,413.2c.49-.07.77-.35.84-.84-.07-.56-.35-.87-.84-.94-.56.07-.87.38-.94.94.07.49.38.77.94.84Z" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <line x1="757.07" y1="412.88" x2="755.92" y2="412.88" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <line x1="755.92" y1="411.73" x2="757.07" y2="411.73" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <path d="M754.55,411.73l-.84-.21c-.21.21-.35.49-.42.84.07.28.28.56.63.84" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <path d="M753.92,411.41c-.07.07-.14.1-.21.1" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <path d="M755.39,414.77c.35-.28.45-.59.31-.94-.21-.42-.52-.56-.94-.42-.42.21-.56.52-.42.94.07.14.21.28.42.42v-.73c0-.14.1-.24.31-.31.14.07.24.17.31.31v1.99c-.07.21-.17.31-.31.31-.21,0-.31-.1-.31-.31v-1.26" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                </g>
                <g id="sink4" data-name="sink">
                  <path d="M761.27,461.39c-1.33-.14-2.52-.63-3.57-1.47l-.52,3.04c1.26.49,2.62.77,4.09.84,2.73-.07,5-1.05,6.82-2.94,1.89-1.82,2.87-4.09,2.94-6.82-.07-2.8-1.05-5.11-2.94-6.93-1.82-1.89-4.09-2.87-6.82-2.94-2.8.07-5.11,1.05-6.93,2.94-1.89,1.82-2.87,4.13-2.94,6.93.07,2.73,1.05,5,2.94,6.82.84.84,1.78,1.54,2.83,2.1-.84-2.73-1.26-5.53-1.26-8.4l-1.89.31h-.21c-.21,0-.38-.1-.52-.31-.21-.21-.28-.42-.21-.63,0-.21.07-.42.21-.63.21-.14.42-.21.63-.21s.42.1.63.31h1.36c0-2.8.42-5.56,1.26-8.29l.52,2.94c1.33-1.05,2.83-1.57,4.51-1.57s3.22.52,4.62,1.57c1.12.91,1.92,1.96,2.41,3.15.49,1.19.63,2.45.42,3.78-.14,1.33-.63,2.52-1.47,3.57-.91,1.12-1.96,1.92-3.15,2.41s-2.45.63-3.78.42Z" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <path d="M761.27,464.95c2.03-.07,3.85-.56,5.46-1.47,1.68-.98,3.01-2.31,3.99-3.99.91-1.61,1.4-3.43,1.47-5.46-.07-2.1-.56-3.95-1.47-5.56-.98-1.68-2.31-3.01-3.99-3.99-1.61-.91-3.43-1.4-5.46-1.47-2.03.07-3.88.56-5.56,1.47-1.68.98-2.97,2.31-3.88,3.99-.98,1.61-1.5,3.46-1.57,5.56.07,2.03.59,3.85,1.57,5.46.91,1.68,2.2,3.01,3.88,3.99,1.68.91,3.53,1.4,5.56,1.47Z" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <path d="M755.39,451.73v-1.47c-.07-.14-.17-.24-.31-.31-.21.07-.31.17-.31.31v1.99c0,.21.1.31.31.31.14,0,.24-.1.31-.31v-.52c.14.07.24.17.31.31.14.35,0,.66-.42.94-.42.07-.73-.07-.94-.42-.14-.42,0-.73.42-.94" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <path d="M757.7,448.06v.1c-.35,1.75-.56,3.5-.63,5.25h2.94l.21.31v.52l-.21.31h-2.94c.07,1.82.28,3.6.63,5.35" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <path d="M761.27,454.88c.49-.07.77-.35.84-.84-.07-.56-.35-.87-.84-.94-.56.07-.87.38-.94.94.07.49.38.77.94.84Z" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <line x1="757.07" y1="454.56" x2="755.92" y2="454.56" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <line x1="755.92" y1="453.41" x2="757.07" y2="453.41" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <path d="M754.55,453.41l-.84-.21c-.21.21-.35.49-.42.84.07.28.28.56.63.84" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <path d="M753.92,453.09c-.07.07-.14.1-.21.1" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                  <path d="M755.39,456.45c.35-.28.45-.59.31-.94-.21-.42-.52-.56-.94-.42-.42.21-.56.52-.42.94.07.14.21.28.42.42v-.73c0-.14.1-.24.31-.31.14.07.24.17.31.31v1.99c-.07.21-.17.31-.31.31-.21,0-.31-.1-.31-.31v-1.26" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3" />
                </g>
              </g>
              <g id="toilet">
                <path d="M555.4,629.46l-1.78.63c-1.05.21-1.96.63-2.73,1.26-.42.35-.84.66-1.26.94-2.17,1.19-4.44,1.75-6.82,1.68-2.45-.07-4.69-.7-6.72-1.89-2.03-1.19-3.67-2.87-4.93-5.04-.49-1.33-.49-2.62,0-3.88.21-.49.45-.91.73-1.26,1.54-2.03,3.39-3.53,5.56-4.51,2.17-.98,4.44-1.36,6.82-1.15,2.38.21,4.58,1.01,6.61,2.41v.1c.77.63,1.64,1.05,2.62,1.26l1.89.73v-4.51c0-.42.14-.8.42-1.15.21-.21.52-.38.94-.52l7.03-.42c.49,0,.94.17,1.36.52.28.21.49.52.63.94v18.79c-.14.49-.35.87-.63,1.15-.42.28-.87.42-1.36.42l-7.03-.42c-.42-.07-.73-.24-.94-.52-.28-.35-.42-.73-.42-1.15v-13.12" fill="#dbe7ee" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <path d="M532.42,623.68c-.28.91-.28,1.82,0,2.73,1.12,1.96,2.62,3.46,4.51,4.51,1.75,1.05,3.71,1.61,5.88,1.68,2.1,0,4.13-.52,6.09-1.57,1.19-.7,2.24-1.54,3.15-2.52.14-.14.21-.35.21-.63v-5.67c0-.21-.07-.42-.21-.63-1.47-1.61-3.22-2.73-5.25-3.36-2.03-.7-4.06-.84-6.09-.42-2.1.35-3.99,1.26-5.67,2.73-1.05.91-1.92,1.96-2.62,3.15Z" fill="#dbe7ee" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <line x1="556.77" y1="635.54" x2="556.77" y2="614.55" fill="#dbe7ee" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
              </g>
              <g id="toilet1" data-name="toilet">
                <path d="M760.16,546.06l-.63-1.78c-.21-1.05-.63-1.96-1.26-2.73-.35-.42-.66-.84-.94-1.26-1.19-2.17-1.75-4.44-1.68-6.82.07-2.45.7-4.69,1.89-6.72,1.19-2.03,2.87-3.67,5.04-4.93,1.33-.49,2.62-.49,3.88,0,.49.21.91.45,1.26.73,2.03,1.54,3.53,3.39,4.51,5.56.98,2.17,1.36,4.44,1.15,6.82-.21,2.38-1.01,4.58-2.41,6.61h-.1c-.63.77-1.05,1.64-1.26,2.62l-.73,1.89h4.51c.42,0,.8.14,1.15.42.21.21.38.52.52.94l.42,7.03c0,.49-.17.94-.52,1.36-.21.28-.52.49-.94.63h-18.79c-.49-.14-.87-.35-1.15-.63-.28-.42-.42-.87-.42-1.36l.42-7.03c.07-.42.24-.73.52-.94.35-.28.73-.42,1.15-.42h13.12" fill="#dbe7ee" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <path d="M765.93,523.07c-.91-.28-1.82-.28-2.73,0-1.96,1.12-3.46,2.62-4.51,4.51-1.05,1.75-1.61,3.71-1.68,5.88,0,2.1.52,4.13,1.57,6.09.7,1.19,1.54,2.24,2.52,3.15.14.14.35.21.63.21h5.67c.21,0,.42-.07.63-.21,1.61-1.47,2.73-3.22,3.36-5.25.7-2.03.84-4.06.42-6.09-.35-2.1-1.26-3.99-2.73-5.67-.91-1.05-1.96-1.92-3.15-2.62Z" fill="#dbe7ee" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <line x1="754.07" y1="547.42" x2="775.06" y2="547.42" fill="#dbe7ee" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
              </g>
              <g id="wic-shelves">
                <polygon points="911.17 641.88 911.17 654.44 745.05 654.44 745.05 571.61 758.3 571.61 758.3 641.88 898.42 641.88 898.42 531.69 910.98 531.69 910.98 641.88 911.17 641.88" fill="#dbe7ee" />
                <line x1="898.32" y1="531.69" x2="898.32" y2="641.88" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <line x1="758.3" y1="570.69" x2="758.3" y2="641.88" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <line x1="898.42" y1="641.63" x2="758.23" y2="641.63" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <polygon points="565.44 491.31 565.44 504.54 509.12 504.54 509.12 567.81 495.89 567.81 495.89 491.31 565.44 491.31" fill="#dbe7ee" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <polygon points="491.01 517.87 491.01 596.48 403.01 596.48 403.01 579.26 474.11 579.26 474.11 517.87 491.01 517.87" fill="#dbe7ee" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <rect x="475.81" y="601.03" width="13.58" height="116.7" fill="#dbe7ee" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <polygon points="321.34 681.92 321.34 738.62 255.35 738.62 255.35 725.65 308.37 725.65 308.37 681.92 321.34 681.92" fill="#dbe7ee" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <rect x="325.79" y="681.92" width="17.69" height="56.7" fill="#dbe7ee" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <polygon points="331.23 743.05 331.23 743.08 255.54 743.08 255.54 756.47 331.23 756.47 331.23 770.44 348.3 770.44 348.3 756.47 348.3 743.08 348.3 743.05 331.23 743.05" fill="#dbe7ee" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
              </g>
              <g id="wic-island">
                <rect x="811.45" y="560.29" width="24.44" height="33.18" fill="#dbe7ee" />
                <rect x="811.45" y="560.1" width="24.64" height="33.56" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
              </g>
              <g id="livingroom-furn">
                <g>
                  <g>
                    <g>
                      <path d="M575.57,399.04c-3.2,0-6.2-.7-8.69-2.03-.93-.5-1.76-1.1-2.57-1.68-1.68-1.2-3.41-2.45-5.91-2.66-.33-.03-.66-.04-.98-.04-3.75,0-6.59,1.77-9.09,3.34-1.85,1.15-3.44,2.15-4.98,2.15-.49,0-.95-.1-1.42-.31-1.87-.83-2.48-2.91-3.08-4.92-.6-2.05-1.23-4.17-3.23-4.81-.33-.11-.68-.16-1.02-.16-1.84,0-3.46,1.54-5.34,3.33-2.36,2.26-5.04,4.81-9.02,5.37-.53.07-1.08.11-1.65.11-5.91,0-12.12-4.03-13.28-8.63-.6-2.36.37-4,1.49-5.89,1.14-1.93,2.42-4.11,2.15-7.37-.35-4.18-3.01-6.83-5.35-9.17-2.25-2.25-4.2-4.19-3.88-7.04.21-1.89,1.29-2.93,2.54-4.14,1.34-1.29,2.85-2.75,3.54-5.51.98-3.92-.57-7.14-2.06-10.25-.43-.89-.87-1.81-1.25-2.74-5.28-12.82-.51-28.81,7.15-36.85,3.37-3.54,8.98-7.34,13.36-7.34.94,0,1.79.18,2.53.53,2.12,1.02,2.77,3.21,3.46,5.53.74,2.48,1.5,5.04,4.11,6.32.81.4,1.62.59,2.49.59,2.01,0,3.98-1.05,6.05-2.16,2.39-1.28,5.09-2.73,8.28-2.73.74,0,1.49.08,2.23.23,2.97.61,5.1,2.28,6.97,3.75,1.95,1.53,3.79,2.98,6.21,2.98.44,0,.9-.05,1.35-.15,1.62-.34,2.42-1.09,3.19-1.81.71-.67,1.39-1.29,2.76-1.65.61-.16,1.28-.24,1.98-.24,4.87,0,11.48,4.11,12.72,9.42.68,2.92-.6,5.02-1.95,7.24-1.39,2.28-2.83,4.64-2.33,8.03.61,4.15,3.63,6.07,6.54,7.93,2.74,1.75,5.33,3.4,6.32,6.79,1.32,4.55-1.48,8.55-4.45,12.77-3.31,4.71-6.73,9.59-5.44,16.01.42,2.12,1.28,4.34,2.19,6.7,2.39,6.16,4.86,12.54-.85,17.24-.55.46-1.16.88-1.79,1.26-2.81,1.69-6.37,2.63-10.01,2.63h0Z" fill="#fff" />
                      <path d="M523.01,292.32c.87,0,1.65.16,2.32.48,1.92.92,2.51,2.92,3.2,5.23.73,2.46,1.57,5.25,4.37,6.63.88.43,1.76.64,2.71.64,2.14,0,4.15-1.08,6.29-2.22,2.45-1.31,4.98-2.67,8.05-2.67.7,0,1.42.07,2.13.22,2.86.59,4.84,2.15,6.76,3.66,2.02,1.59,3.93,3.09,6.52,3.09.48,0,.97-.05,1.46-.16,1.75-.37,2.65-1.2,3.43-1.94.69-.65,1.29-1.21,2.54-1.53.57-.15,1.2-.22,1.85-.22,4.68,0,11.05,3.95,12.24,9.03.64,2.72-.54,4.64-1.89,6.87-1.37,2.25-2.93,4.8-2.4,8.37.64,4.38,3.76,6.36,6.77,8.28,2.66,1.69,5.18,3.3,6.11,6.51,1.25,4.32-1.36,8.04-4.38,12.34-3.21,4.58-6.85,9.76-5.52,16.39.43,2.17,1.3,4.41,2.22,6.78,2.43,6.27,4.72,12.2-.7,16.68-.53.44-1.12.85-1.73,1.22-2.74,1.65-6.2,2.55-9.75,2.55-3.12,0-6.04-.68-8.45-1.97-.9-.48-1.72-1.07-2.52-1.64-1.73-1.24-3.52-2.53-6.16-2.75-.34-.03-.68-.04-1.02-.04-3.9,0-6.93,1.89-9.36,3.42-1.78,1.11-3.32,2.08-4.72,2.08-.42,0-.82-.09-1.21-.26-1.66-.74-2.21-2.62-2.8-4.61-.64-2.17-1.3-4.42-3.56-5.15-.38-.12-.78-.19-1.17-.19-2.04,0-3.73,1.61-5.68,3.47-2.31,2.2-4.93,4.7-8.74,5.24-.51.07-1.04.11-1.58.11-5.6,0-11.7-3.93-12.79-8.26-.55-2.16.33-3.64,1.44-5.52,1.17-1.99,2.5-4.25,2.21-7.66-.37-4.37-3.09-7.08-5.49-9.48-2.16-2.16-4.03-4.02-3.73-6.63.19-1.71,1.16-2.65,2.39-3.84,1.38-1.34,2.95-2.85,3.68-5.75,1.03-4.09-.56-7.39-2.1-10.59-.42-.88-.86-1.8-1.24-2.72-5.2-12.64-.5-28.39,7.05-36.31,3.3-3.46,8.77-7.19,13-7.19M523.01,291.32c-4.55,0-10.27,3.88-13.72,7.5-8.15,8.55-12.39,24.9-7.25,37.38,1.74,4.24,4.5,7.86,3.29,12.68-1.3,5.18-5.62,5.52-6.09,9.72-.71,6.24,8.55,8.38,9.22,16.3.53,6.23-4.91,8.25-3.62,13.34,1.23,4.88,7.75,9.01,13.76,9.01.58,0,1.15-.04,1.72-.12,7.34-1.03,10.52-8.7,14.29-8.7.28,0,.57.04.87.14,3.58,1.15,2.19,7.91,6.26,9.72.54.24,1.08.35,1.62.35,3.86,0,7.67-5.49,14.08-5.49.31,0,.62.01.94.04,3.52.29,5.37,2.72,8.29,4.27,2.61,1.39,5.75,2.09,8.92,2.09,3.62,0,7.28-.9,10.27-2.7.65-.39,1.27-.83,1.85-1.31,8.18-6.75.38-16.67-1.17-24.42-2.41-12.09,12.73-18.98,9.88-28.82-2.14-7.4-11.73-7.06-12.85-14.66-.96-6.51,5.72-9.16,4.28-15.32-1.26-5.37-7.84-9.81-13.21-9.81-.73,0-1.44.08-2.1.26-3.02.78-2.99,2.84-5.93,3.46-.43.09-.85.14-1.25.14-4.5,0-6.92-5.45-13.08-6.72-.81-.17-1.58-.24-2.33-.24-6.06,0-10.17,4.89-14.33,4.89-.75,0-1.51-.16-2.27-.54-4.79-2.35-2.92-9.62-7.58-11.86-.84-.4-1.77-.58-2.75-.58h0Z" fill="#f0e6d9" />
                    </g>
                    <g>
                      <path d="M597.09,344.8c0,3.84-2.41,7.28-4.94,10.88-3.21,4.57-6.52,9.3-5.31,15.37.41,2.06,1.26,4.24,2.15,6.56,2.38,6.14,5.07,13.09-1.1,18.18-.58.48-1.22.93-1.89,1.33h0c-5.63,3.39-13.83,3.65-19.51.62-.98-.52-1.84-1.14-2.67-1.73-1.66-1.19-3.22-2.32-5.5-2.5-3.96-.33-6.94,1.53-9.57,3.18-2.55,1.6-4.75,2.97-7.17,1.9-2.22-.98-2.91-3.35-3.53-5.44-.57-1.93-1.11-3.75-2.69-4.26-1.8-.58-3.45.99-5.53,2.98-2.33,2.23-5.23,4.99-9.47,5.59-6.59.93-14.44-3.6-15.84-9.13-.68-2.68.42-4.54,1.58-6.51,1.13-1.91,2.29-3.88,2.04-6.88-.33-3.88-2.76-6.31-5.11-8.65-2.3-2.3-4.48-4.47-4.11-7.71.25-2.19,1.48-3.38,2.79-4.64,1.32-1.27,2.68-2.59,3.31-5.12.91-3.63-.51-6.57-2.01-9.69-.43-.9-.88-1.83-1.27-2.79-5.41-13.13-.53-29.5,7.31-37.73,3.96-4.16,11.71-9.45,16.84-6.98,2.44,1.17,3.18,3.65,3.89,6.04.72,2.42,1.4,4.7,3.68,5.82,2.55,1.25,4.98-.05,7.79-1.56,3.07-1.64,6.55-3.51,11.07-2.58,3.16.65,5.37,2.38,7.31,3.91,2.23,1.75,4.15,3.26,6.88,2.68,1.4-.3,2.08-.93,2.8-1.61.76-.71,1.54-1.44,3.11-1.84,2.71-.7,6.22.02,9.39,1.94,3.27,1.98,5.63,4.91,6.32,7.85.76,3.25-.67,5.59-2.05,7.86-1.32,2.16-2.68,4.39-2.22,7.48.56,3.78,3.28,5.52,6.17,7.35,2.75,1.75,5.6,3.56,6.67,7.26.26.89.37,1.75.37,2.59ZM585.93,368.48c0-5.06,2.88-9.17,5.69-13.17,2.99-4.26,5.81-8.29,4.47-12.92-1-3.46-3.74-5.21-6.39-6.9-2.88-1.84-5.86-3.73-6.46-7.8-.49-3.33.93-5.66,2.31-7.91,1.38-2.25,2.67-4.38,1.98-7.37-.65-2.77-2.9-5.56-6.02-7.45-3.02-1.83-6.35-2.53-8.9-1.87-1.41.37-2.1,1.01-2.83,1.69-.76.71-1.54,1.44-3.11,1.77-3.03.64-5.16-1.03-7.42-2.8-1.89-1.48-4.03-3.17-7.04-3.79-4.29-.88-7.66.92-10.63,2.52-2.85,1.53-5.54,2.97-8.38,1.57-2.54-1.24-3.29-3.77-4.02-6.21-.7-2.36-1.37-4.59-3.56-5.64-4.79-2.3-12.41,2.98-16.1,6.85-7.7,8.08-12.49,24.15-7.18,37.04.39.94.83,1.86,1.26,2.75,1.55,3.23,3.02,6.28,2.05,10.13-.68,2.71-2.17,4.15-3.49,5.43-1.27,1.23-2.37,2.29-2.59,4.25-.33,2.93,1.64,4.9,3.93,7.18,2.32,2.31,4.95,4.94,5.29,9.06.27,3.2-1,5.36-2.12,7.26-1.14,1.93-2.12,3.6-1.51,6.03,1.3,5.16,8.94,9.52,15.12,8.65,4.03-.57,6.73-3.15,9.12-5.42,2.15-2.05,4.01-3.83,6.18-3.13,1.91.61,2.5,2.59,3.12,4.69.61,2.05,1.23,4.17,3.17,5.04,2.1.93,4.07-.3,6.56-1.86,2.71-1.7,5.79-3.62,9.96-3.27,2.45.2,4.09,1.38,5.82,2.62.81.58,1.65,1.19,2.59,1.69,5.49,2.93,13.43,2.67,18.87-.6h0c.64-.39,1.25-.82,1.81-1.28,5.81-4.79,3.31-11.22.91-17.45-.91-2.34-1.76-4.56-2.19-6.67-.19-.93-.27-1.83-.27-2.7Z" fill="#fff" />
                      <path d="M522.96,290.99c-4.82,0-10.65,4.19-13.91,7.61-7.84,8.23-12.72,24.59-7.31,37.73.39.96.84,1.89,1.27,2.79,1.5,3.12,2.92,6.07,2.01,9.69-.63,2.53-2,3.85-3.31,5.12-1.31,1.26-2.54,2.45-2.79,4.64-.37,3.24,1.81,5.41,4.11,7.71,2.35,2.34,4.78,4.77,5.11,8.65.25,2.99-.91,4.97-2.04,6.88-1.16,1.97-2.26,3.83-1.58,6.51,1.28,5.05,7.91,9.25,14.07,9.25.6,0,1.19-.04,1.77-.12,4.24-.6,7.14-3.37,9.47-5.59,1.79-1.71,3.25-3.1,4.77-3.1.25,0,.51.04.76.12,1.59.51,2.13,2.33,2.69,4.26.62,2.09,1.32,4.46,3.53,5.44.59.26,1.18.38,1.75.38,1.77,0,3.49-1.08,5.41-2.28,2.42-1.51,5.14-3.22,8.66-3.22.3,0,.6.01.91.04,2.27.19,3.84,1.31,5.5,2.5.83.6,1.69,1.21,2.67,1.73,2.64,1.41,5.84,2.11,9.06,2.11,3.7,0,7.44-.92,10.45-2.73.67-.4,1.31-.85,1.89-1.33,6.17-5.08,3.47-12.04,1.1-18.18-.9-2.32-1.74-4.5-2.15-6.56-1.21-6.08,2.1-10.8,5.31-15.37,2.53-3.6,4.94-7.04,4.94-10.88,0-.84-.12-1.71-.37-2.59-1.07-3.7-3.91-5.51-6.67-7.26-2.89-1.84-5.61-3.58-6.17-7.35-.45-3.09.91-5.33,2.22-7.48,1.38-2.27,2.81-4.61,2.05-7.86-.69-2.94-3.05-5.87-6.32-7.85-2.37-1.44-4.94-2.2-7.22-2.2-.76,0-1.5.09-2.18.26-1.57.41-2.35,1.14-3.11,1.84-.72.68-1.41,1.31-2.8,1.61-.41.09-.8.13-1.17.13-2.14,0-3.82-1.32-5.71-2.8-1.95-1.53-4.15-3.26-7.31-3.91-.83-.17-1.63-.25-2.4-.25-3.39,0-6.16,1.49-8.66,2.83-2.02,1.09-3.85,2.06-5.66,2.06-.71,0-1.41-.15-2.13-.5-2.28-1.12-2.96-3.4-3.68-5.82-.71-2.39-1.45-4.87-3.89-6.04-.91-.44-1.9-.63-2.93-.63h0ZM518.65,396.93c-5.83,0-12.3-4.05-13.49-8.76-.61-2.43.37-4.1,1.51-6.03,1.12-1.9,2.4-4.06,2.12-7.26-.35-4.12-2.98-6.74-5.29-9.06-2.29-2.28-4.26-4.25-3.93-7.18.22-1.95,1.32-3.02,2.59-4.25,1.32-1.27,2.81-2.72,3.49-5.43.97-3.85-.5-6.9-2.05-10.13-.43-.89-.87-1.81-1.26-2.75-5.31-12.89-.52-28.95,7.18-37.04,3.06-3.22,8.85-7.41,13.47-7.41.94,0,1.82.17,2.63.56,2.19,1.05,2.85,3.28,3.56,5.64.73,2.44,1.48,4.97,4.02,6.21.81.4,1.61.56,2.4.56,1.99,0,3.94-1.05,5.98-2.14,2.43-1.3,5.13-2.75,8.38-2.75.72,0,1.47.07,2.25.23,3.01.62,5.15,2.3,7.04,3.79,1.92,1.51,3.74,2.94,6.11,2.94.42,0,.85-.04,1.3-.14,1.57-.33,2.35-1.06,3.11-1.77.73-.68,1.42-1.33,2.83-1.69.63-.16,1.31-.24,2.02-.24,2.16,0,4.6.74,6.87,2.11,3.12,1.89,5.38,4.67,6.02,7.45.7,2.99-.6,5.12-1.98,7.37-1.38,2.26-2.8,4.59-2.31,7.91.6,4.07,3.58,5.97,6.46,7.8,2.65,1.69,5.39,3.43,6.39,6.9,1.34,4.64-1.48,8.66-4.47,12.92-2.8,3.99-5.69,8.1-5.69,13.17,0,.87.09,1.77.27,2.7.42,2.11,1.28,4.32,2.19,6.67,2.41,6.22,4.9,12.66-.91,17.45-.56.46-1.17.89-1.81,1.28-2.91,1.75-6.53,2.64-10.11,2.64-3.12,0-6.2-.67-8.76-2.04-.94-.5-1.78-1.1-2.59-1.69-1.73-1.24-3.37-2.42-5.82-2.62-.33-.03-.66-.04-.98-.04-3.69,0-6.49,1.75-8.99,3.31-1.9,1.19-3.49,2.18-5.07,2.18-.5,0-.99-.1-1.5-.32-1.94-.86-2.57-2.99-3.17-5.04-.62-2.1-1.2-4.08-3.12-4.69-.33-.1-.65-.15-.96-.15-1.77,0-3.39,1.54-5.22,3.28-2.38,2.27-5.08,4.85-9.12,5.42-.53.08-1.08.11-1.63.11h0Z" fill="#f0e6d9" />
                    </g>
                  </g>
                  <g>
                    <path d="M592.41,344.8c0,1.2-.71,2.03-1.89,3.39-1.33,1.54-3.33,3.87-5.67,8.34-2.42,4.64-3.07,7.56-3.36,9.58h0c-.16,1.08-.48,3.34-.14,6.19.4,3.35,1.49,5.35,2.45,7.12.97,1.79,1.89,3.47,1.94,6.18.07,3.53-.97,6.41-2.91,8.14-3.58,3.18-9.38,1.77-11.56,1.24-4.32-1.05-6.46-2.9-8.35-4.53-1.71-1.48-3.19-2.76-5.89-2.93-3.25-.2-5.4,1.35-7.47,2.85-2.15,1.56-4.18,3.03-7.26,2.52-2.91-.48-4.46-2.36-5.96-4.18-1.41-1.71-2.75-3.33-5.1-3.39-2.46-.07-4.08,1.59-5.79,3.34-1.87,1.92-3.81,3.9-7.04,4.01-3.14.11-7.31-1.7-8.82-4.92-1.36-2.88.03-5.57,1.5-8.41,1.48-2.86,3.01-5.82,2.11-9.41-.8-3.2-3.13-5.07-5.19-6.71-2.14-1.72-4-3.2-3.82-5.75.14-2,1.46-3.07,2.86-4.2,1.39-1.12,2.97-2.4,3.62-4.83.65-2.45-.13-4.13-1.57-7.19-.82-1.76-1.85-3.95-2.93-6.99-2-5.62-3.73-10.48-3.3-16.31.16-2.15,1.12-9.63,6.96-15.8,1.53-1.61,9.35-9.47,13.69-5.81.75.63,1.23,1.55,1.65,2.43.23.48.45.96.67,1.43.68,1.49,1.32,2.9,2.28,4.25,1.17,1.65,3.03,3.9,5.73,4.48,2.73.58,4.95-.74,7.3-2.13,1.47-.87,2.99-1.77,4.63-2.14,3.75-.86,7.86-.49,11.28,1.01,1.03.45,2.03,1.07,2.99,1.67,2.32,1.44,4.52,2.8,7.32,2.18,1.4-.31,2.69-1.06,3.94-1.79,1.99-1.16,4.05-2.36,6.62-1.77,3.39.78,6.8,3.21,6.8,6.88v.02c0,2.45-1.54,4.53-3.03,6.53-.46.63-.9,1.22-1.28,1.81-3.65,5.64-.71,13.4,4.2,16.84.67.47,1.55.9,2.47,1.35,2.29,1.12,4.89,2.38,5.29,4.84.03.19.05.38.05.55ZM581.17,366.07c.29-2.05.95-5,3.39-9.69,2.35-4.5,4.37-6.85,5.71-8.4,1.32-1.54,1.99-2.31,1.77-3.68-.37-2.3-2.89-3.52-5.11-4.6-.94-.46-1.82-.89-2.52-1.37-5.14-3.6-8.09-11.4-4.29-17.28.39-.6.83-1.2,1.3-1.83,1.45-1.96,2.96-3.99,2.96-6.34v-.02c0-3.49-3.29-5.81-6.55-6.56-2.44-.56-4.35.55-6.38,1.74-1.27.74-2.58,1.5-4.03,1.82-2.92.64-5.28-.82-7.56-2.23-.95-.59-1.94-1.2-2.95-1.65-3.35-1.47-7.39-1.83-11.07-.99-1.59.36-3.09,1.25-4.54,2.11-2.3,1.36-4.68,2.77-7.53,2.16-2.81-.6-4.73-2.91-5.93-4.61-.98-1.38-1.63-2.8-2.31-4.31-.22-.47-.43-.95-.66-1.43-.41-.85-.87-1.73-1.57-2.32-4.11-3.47-11.75,4.21-13.24,5.78-5.76,6.09-6.72,13.48-6.87,15.6-.42,5.77,1.3,10.6,3.28,16.18,1.08,3.02,2.1,5.2,2.92,6.96,1.46,3.13,2.27,4.85,1.59,7.41-.68,2.53-2.3,3.84-3.73,5-1.4,1.13-2.61,2.11-2.74,3.97-.17,2.38,1.63,3.81,3.7,5.47,2.09,1.67,4.47,3.57,5.3,6.88.93,3.7-.7,6.86-2.14,9.64-1.43,2.77-2.78,5.38-1.49,8.12,1.46,3.1,5.48,4.85,8.52,4.74,3.1-.11,4.99-2.04,6.82-3.91,1.77-1.81,3.44-3.51,6.03-3.44,2.5.07,3.88,1.74,5.34,3.51,1.46,1.77,2.97,3.6,5.77,4.07,2.94.49,4.92-.95,7.02-2.47,2.12-1.54,4.31-3.13,7.68-2.92,2.81.18,4.33,1.49,6.08,3,1.86,1.61,3.97,3.44,8.22,4.47,2.14.52,7.82,1.9,11.27-1.17,1.87-1.66,2.87-4.47,2.8-7.89-.05-2.63-.91-4.2-1.9-6.03-.97-1.79-2.08-3.83-2.49-7.24-.35-2.89-.02-5.17.14-6.27h0Z" fill="#fff" />
                    <path d="M520.81,295.4c-4.31,0-9.74,5.46-10.98,6.77-5.84,6.17-6.8,13.65-6.96,15.8-.43,5.84,1.3,10.69,3.3,16.31,1.08,3.04,2.11,5.23,2.93,6.99,1.43,3.06,2.22,4.74,1.57,7.19-.65,2.43-2.23,3.71-3.62,4.83-1.4,1.13-2.72,2.2-2.86,4.2-.17,2.55,1.68,4.03,3.82,5.75,2.05,1.64,4.38,3.51,5.19,6.71.9,3.58-.63,6.55-2.11,9.41-1.47,2.84-2.86,5.52-1.5,8.41,1.47,3.13,5.44,4.93,8.55,4.93.09,0,.19,0,.28,0,3.23-.12,5.17-2.1,7.04-4.01,1.68-1.72,3.27-3.35,5.65-3.35.05,0,.1,0,.14,0,2.36.06,3.69,1.68,5.1,3.39,1.5,1.82,3.05,3.7,5.96,4.18.42.07.83.1,1.22.1,2.42,0,4.19-1.28,6.04-2.63,1.95-1.41,3.96-2.87,6.9-2.87.19,0,.38,0,.57.02,2.7.17,4.18,1.45,5.89,2.93,1.89,1.63,4.03,3.49,8.35,4.53,1.12.27,3.17.77,5.4.77s4.41-.46,6.16-2.01c1.94-1.73,2.98-4.61,2.91-8.14-.05-2.71-.97-4.39-1.94-6.18-.96-1.77-2.05-3.77-2.45-7.12-.34-2.85-.02-5.1.14-6.19.29-2.02.94-4.94,3.36-9.58,2.34-4.47,4.34-6.8,5.67-8.34,1.17-1.36,1.89-2.19,1.89-3.39,0-.18-.02-.36-.05-.55-.4-2.46-2.99-3.73-5.29-4.84-.93-.45-1.8-.88-2.47-1.35-4.91-3.44-7.85-11.2-4.2-16.84.38-.59.82-1.18,1.28-1.81,1.48-2,3.02-4.08,3.03-6.53v-.02c0-3.66-3.41-6.09-6.8-6.88-.47-.11-.92-.16-1.35-.16-1.96,0-3.63.98-5.26,1.93-1.25.73-2.53,1.48-3.94,1.79-.47.1-.93.15-1.37.15-2.17,0-4.01-1.14-5.94-2.34-.96-.6-1.96-1.21-2.99-1.67-2.2-.97-4.69-1.46-7.19-1.46-1.38,0-2.75.15-4.09.45-1.64.37-3.16,1.27-4.63,2.14-1.96,1.16-3.83,2.27-5.98,2.27-.43,0-.87-.04-1.32-.14-2.7-.57-4.57-2.83-5.73-4.48-.96-1.36-1.6-2.76-2.28-4.25-.22-.47-.43-.95-.67-1.43-.42-.88-.9-1.8-1.65-2.43-.8-.68-1.73-.96-2.71-.96h0ZM518.12,392.37c-3,0-6.83-1.73-8.25-4.74-1.29-2.74.06-5.35,1.49-8.12,1.44-2.78,3.07-5.93,2.14-9.64-.83-3.31-3.2-5.21-5.3-6.88-2.07-1.66-3.87-3.09-3.7-5.47.13-1.86,1.34-2.84,2.74-3.97,1.43-1.16,3.05-2.47,3.73-5,.69-2.56-.12-4.28-1.59-7.41-.82-1.75-1.84-3.94-2.92-6.96-1.99-5.59-3.71-10.41-3.28-16.18.16-2.12,1.11-9.51,6.87-15.6,1.22-1.29,6.57-6.67,10.72-6.67.92,0,1.78.26,2.52.89.7.59,1.16,1.47,1.57,2.32.23.48.45.96.66,1.43.69,1.5,1.34,2.92,2.31,4.31,1.2,1.69,3.12,4.01,5.93,4.61.47.1.92.14,1.36.14,2.26,0,4.24-1.17,6.16-2.31,1.45-.86,2.95-1.74,4.54-2.11,1.31-.3,2.66-.45,4.02-.45,2.45,0,4.9.49,7.06,1.43,1.01.44,2,1.05,2.95,1.65,1.9,1.17,3.85,2.38,6.13,2.38.46,0,.93-.05,1.42-.16,1.45-.32,2.76-1.08,4.03-1.82,1.65-.97,3.23-1.89,5.09-1.89.42,0,.85.05,1.3.15,3.26.75,6.55,3.07,6.55,6.56v.02c0,2.35-1.51,4.38-2.96,6.34-.47.63-.91,1.23-1.3,1.83-3.8,5.88-.85,13.68,4.29,17.28.7.49,1.58.92,2.52,1.37,2.22,1.08,4.74,2.31,5.11,4.6.22,1.37-.44,2.15-1.77,3.68-1.34,1.55-3.36,3.9-5.71,8.4-2.45,4.68-3.1,7.64-3.39,9.69-.16,1.1-.49,3.38-.14,6.27.41,3.41,1.52,5.44,2.49,7.24.99,1.83,1.85,3.4,1.9,6.03.07,3.42-.93,6.23-2.8,7.89-1.68,1.49-3.88,1.93-5.95,1.93-2.19,0-4.22-.49-5.32-.76-4.25-1.03-6.36-2.85-8.22-4.47-1.75-1.52-3.27-2.83-6.08-3-.2-.01-.4-.02-.6-.02-3.03,0-5.09,1.49-7.08,2.93-1.81,1.31-3.53,2.56-5.87,2.56-.37,0-.75-.03-1.15-.1-2.8-.46-4.31-2.3-5.77-4.07-1.46-1.77-2.84-3.44-5.34-3.51-.05,0-.1,0-.16,0-2.51,0-4.15,1.67-5.88,3.44-1.83,1.87-3.72,3.8-6.82,3.91-.09,0-.18,0-.27,0h0Z" fill="#f0e6d9" />
                  </g>
                  <g>
                    <path d="M585.82,345.22c0,2.62-2.23,4.56-4.78,6.79-2.96,2.59-6.32,5.52-7.48,10.37-1.61,6.72,2,13.17,4.64,17.88,1.89,3.37,3.25,5.8,2.01,7.01-1.06,1.04-2.93.03-5.52-1.38-3.6-1.95-8.52-4.63-14.78-4.06-4.28.38-7.31,2.12-9.97,3.65-2.89,1.66-5.39,3.09-8.43,1.94-2.54-.96-3.63-2.99-4.68-4.95-1.04-1.93-2.01-3.75-4.31-4.38-3.69-1.01-7.66,1.96-10.55,4.12-2.05,1.53-3.53,2.64-4.33,1.99-.81-.66.02-2.42,1.18-4.85,1.72-3.61,4.07-8.55,2.18-12.45-1.05-2.16-2.94-3.08-4.78-3.96-1.91-.92-3.71-1.79-4.34-3.97l.15-.05-.15.05c-.67-2.31.62-4,2.12-5.97,1.24-1.62,2.65-3.46,3.37-6.09,1.38-5.03-.93-8.91-3.38-13.02-2.41-4.04-5.15-8.63-4.64-14.95.49-6.11,3.66-11.38,6.39-13.7,1.26-1.07,2.49-1.58,3.55-1.49,2.05.18,3.08,2.6,4.18,5.16,1.22,2.86,2.61,6.1,5.62,6.92,2.62.71,4.67-.84,7.05-2.63,2.45-1.85,5.23-3.94,9.17-3.74,3.43.17,5.35,1.91,7.38,3.74,1.96,1.78,3.99,3.61,7.56,3.94,4.61.42,8.4-1.96,11.17-3.7,2.03-1.28,3.5-2.2,4.41-1.42,1.05.91.04,2.99-1.37,5.86-1.92,3.92-4.55,9.29-2.76,14.08,1.39,3.72,4.84,5.37,7.88,6.82,2.92,1.4,5.69,2.72,6.18,5.61.05.28.07.55.07.81ZM572.84,365.8c0-1.15.13-2.33.41-3.51,1.19-4.95,4.58-7.92,7.58-10.53,2.73-2.38,5.08-4.44,4.6-7.3-.46-2.73-3.03-3.96-6-5.38-3.1-1.48-6.61-3.16-8.05-7-1.84-4.91.82-10.36,2.77-14.33,1.29-2.64,2.31-4.73,1.45-5.47-.72-.62-2.11.25-4.02,1.45-2.8,1.76-6.65,4.18-11.37,3.75-3.67-.34-5.74-2.21-7.75-4.02-1.99-1.8-3.86-3.5-7.18-3.66-3.82-.19-6.55,1.87-8.96,3.68-2.34,1.77-4.56,3.43-7.33,2.68-3.17-.86-4.59-4.18-5.84-7.11-1.1-2.58-2.05-4.8-3.91-4.97-.97-.08-2.12.41-3.32,1.42-2.68,2.27-5.79,7.46-6.28,13.48-.5,6.22,2.09,10.56,4.59,14.76,2.49,4.17,4.84,8.11,3.42,13.27-.74,2.68-2.16,4.55-3.42,6.2-1.51,1.97-2.7,3.53-2.07,5.68.59,2.04,2.33,2.88,4.17,3.77,1.88.91,3.83,1.85,4.93,4.11,1.95,4.04-.44,9.06-2.18,12.72-1.01,2.12-1.88,3.96-1.27,4.46.6.49,2.15-.67,3.93-2,2.95-2.21,6.99-5.23,10.83-4.18,2.43.66,3.44,2.55,4.51,4.54,1.02,1.91,2.08,3.88,4.51,4.8,2.9,1.09,5.22-.24,8.16-1.92,2.7-1.55,5.75-3.3,10.11-3.69,6.36-.57,11.33,2.13,14.96,4.1,2.47,1.34,4.25,2.31,5.14,1.43,1.06-1.04-.32-3.5-2.07-6.62-2.2-3.94-5.08-9.08-5.08-14.6Z" fill="#fff" />
                    <path d="M519.05,303.76c-1,0-2.14.52-3.31,1.5-2.73,2.31-5.9,7.58-6.39,13.7-.51,6.32,2.22,10.91,4.64,14.95,2.45,4.11,4.77,7.99,3.38,13.02-.72,2.62-2.13,4.46-3.37,6.09-1.5,1.96-2.79,3.66-2.12,5.97l.15-.05-.15.05c.63,2.18,2.44,3.05,4.34,3.97,1.83.88,3.73,1.8,4.78,3.96,1.89,3.9-.46,8.84-2.18,12.45-1.16,2.43-1.99,4.19-1.18,4.85.16.13.34.19.56.19.85,0,2.13-.96,3.77-2.18,2.5-1.87,5.79-4.33,9.01-4.33.52,0,1.03.06,1.54.2,2.29.63,3.27,2.45,4.31,4.38,1.05,1.96,2.14,3.99,4.68,4.95.76.29,1.49.41,2.2.41,2.12,0,4.06-1.11,6.23-2.36,2.67-1.53,5.69-3.26,9.97-3.65.58-.05,1.14-.08,1.7-.08,5.46,0,9.82,2.37,13.09,4.14,1.85,1,3.33,1.81,4.41,1.81.43,0,.8-.13,1.11-.43,1.23-1.21-.13-3.64-2.01-7.01-2.64-4.71-6.25-11.16-4.64-17.88,1.16-4.85,4.52-7.78,7.48-10.37,2.55-2.22,4.78-4.17,4.78-6.79,0-.26-.02-.53-.07-.81-.49-2.89-3.25-4.21-6.18-5.61-3.04-1.46-6.49-3.11-7.88-6.82-1.79-4.78.84-10.15,2.76-14.08,1.41-2.87,2.42-4.95,1.37-5.86-.23-.2-.5-.29-.8-.29-.89,0-2.09.76-3.61,1.71-2.55,1.6-5.96,3.75-10.08,3.75-.36,0-.72-.02-1.08-.05-3.56-.33-5.6-2.17-7.56-3.94-2.03-1.84-3.95-3.57-7.38-3.74-.17,0-.34-.01-.51-.01-3.67,0-6.31,1.99-8.66,3.76-1.97,1.49-3.72,2.8-5.76,2.8-.42,0-.85-.06-1.29-.18-3.02-.82-4.4-4.06-5.62-6.92-1.09-2.56-2.13-4.98-4.18-5.16-.08,0-.16-.01-.24-.01h0ZM518.2,384.06c-.14,0-.26-.04-.36-.11-.62-.5.26-2.33,1.27-4.46,1.74-3.66,4.13-8.68,2.18-12.72-1.1-2.27-3.04-3.21-4.93-4.11-1.84-.89-3.58-1.73-4.17-3.77-.63-2.15.56-3.71,2.07-5.68,1.26-1.65,2.68-3.51,3.42-6.2,1.42-5.16-.93-9.1-3.42-13.27-2.5-4.2-5.09-8.54-4.59-14.76.48-6.02,3.6-11.21,6.28-13.48,1.11-.94,2.17-1.43,3.1-1.43.07,0,.15,0,.22,0,1.85.16,2.81,2.39,3.91,4.97,1.25,2.93,2.67,6.25,5.84,7.11.47.13.92.19,1.36.19,2.16,0,4.02-1.4,5.97-2.87,2.3-1.74,4.9-3.69,8.47-3.69.16,0,.32,0,.49.01,3.31.16,5.19,1.86,7.18,3.66,2,1.81,4.07,3.69,7.75,4.02.38.03.75.05,1.12.05,4.21,0,7.67-2.17,10.25-3.8,1.48-.93,2.64-1.66,3.42-1.66.23,0,.43.06.6.21.87.75-.16,2.83-1.45,5.47-1.95,3.97-4.61,9.42-2.77,14.33,1.44,3.84,4.95,5.52,8.05,7,2.97,1.42,5.54,2.65,6,5.38.48,2.86-1.87,4.91-4.6,7.3-3,2.62-6.4,5.59-7.58,10.53-.28,1.18-.41,2.35-.41,3.51,0,5.53,2.88,10.67,5.08,14.6,1.75,3.12,3.13,5.59,2.07,6.62-.24.23-.54.33-.89.33-.99,0-2.43-.78-4.24-1.77-3.3-1.79-7.7-4.18-13.23-4.18-.56,0-1.14.02-1.73.08-4.35.39-7.41,2.14-10.11,3.69-2.2,1.26-4.05,2.32-6.05,2.32-.68,0-1.37-.12-2.11-.4-2.43-.92-3.49-2.89-4.51-4.8-1.07-1.99-2.08-3.88-4.51-4.54-.54-.15-1.09-.22-1.63-.22-3.33,0-6.66,2.5-9.2,4.39-1.5,1.12-2.83,2.12-3.57,2.12h0Z" fill="#f0e6d9" />
                  </g>
                  <g>
                    <path d="M576.62,347.12c0,2.12-1.81,3.79-3.88,5.68-2.51,2.3-5.35,4.92-5.99,9.11-.61,3.96,1.03,7.27,2.35,9.94,1.06,2.14,1.89,3.83.9,4.89-.97,1.04-2.61.4-4.88-.47-2.67-1.03-6.33-2.44-10.43-1.46-3.36.8-5.55,2.83-7.31,4.45-1.67,1.54-2.98,2.75-4.55,2.21-1.82-.63-2.31-2.99-2.83-5.5-.51-2.48-1.04-5.05-2.94-5.78-1.98-.76-4.36.86-6.45,2.28-1.78,1.21-3.32,2.26-4.29,1.57-.89-.64-.5-2.16,0-4.08.62-2.41,1.39-5.4-.12-7.74-1.04-1.62-2.61-2.08-4.13-2.52-1.44-.42-2.8-.82-3.45-2.19h0c-.92-1.94.48-3.79,2.25-6.14,1.57-2.08,3.35-4.45,4.08-7.55,1.6-6.78-2.83-13.63-5.77-18.17-1.91-2.96-3.29-5.09-2.34-6.03.7-.69,1.93-.03,3.62.9,2.35,1.28,5.57,3.03,9.65,2.68,3.75-.32,6.11-2.27,8.2-3.98,2.09-1.72,3.9-3.21,6.58-2.77,2.79.46,4.31,2.7,5.78,4.87,1.5,2.21,2.92,4.31,5.57,4.6,2.93.32,5.4-1.75,7.39-3.42,1.47-1.23,2.63-2.2,3.47-1.66.93.6.36,2.3-.42,4.65-1.09,3.3-2.59,7.82-.76,11.72,1.35,2.87,3.89,4.06,6.13,5.11,2.19,1.03,4.09,1.92,4.5,4.07.05.25.07.5.07.74ZM566.3,363.6c0-.56.04-1.14.13-1.73.66-4.31,3.55-6.96,6.09-9.3,2.23-2.05,4.15-3.82,3.71-6.12-.38-1.99-2.21-2.85-4.32-3.84-2.29-1.07-4.89-2.29-6.29-5.26-1.89-4.01-.37-8.6.74-11.96.71-2.13,1.27-3.82.55-4.28-.64-.41-1.72.49-3.08,1.64-1.93,1.61-4.57,3.83-7.63,3.49-2.81-.31-4.33-2.56-5.81-4.74-1.43-2.11-2.91-4.3-5.56-4.74-2.53-.42-4.29,1.03-6.32,2.7-2.12,1.75-4.53,3.72-8.38,4.05-4.18.36-7.45-1.42-9.83-2.72-1.57-.86-2.71-1.48-3.24-.95-.77.76.62,2.91,2.38,5.63,2.53,3.91,6.16,9.52,6.16,15.38,0,1.01-.11,2.02-.35,3.04-.75,3.17-2.55,5.56-4.14,7.67-1.7,2.26-3.05,4.05-2.21,5.81h0c.59,1.25,1.82,1.61,3.25,2.02,1.5.44,3.21.93,4.31,2.65,1.58,2.45.79,5.52.16,7.99-.45,1.73-.83,3.23-.12,3.74.78.56,2.24-.43,3.92-1.57,2.16-1.47,4.61-3.14,6.75-2.32,2.06.79,2.61,3.45,3.14,6.01.5,2.42.97,4.7,2.62,5.26,1.39.48,2.58-.62,4.23-2.15,1.79-1.65,4.01-3.71,7.45-4.53,4.2-1,7.91.43,10.62,1.47,2.15.83,3.71,1.43,4.53.55.84-.89.08-2.41-.96-4.52-1.08-2.19-2.51-5.08-2.51-8.4Z" fill="#fff" />
                    <path d="M543.95,316.37c-2.18,0-3.8,1.33-5.64,2.85-2.09,1.72-4.45,3.66-8.2,3.98-.36.03-.71.05-1.06.05-3.59,0-6.45-1.56-8.59-2.73-1.21-.66-2.17-1.18-2.88-1.18-.29,0-.54.09-.74.29-.95.94.43,3.08,2.34,6.03,2.93,4.53,7.37,11.39,5.77,18.17-.73,3.11-2.51,5.47-4.08,7.55-1.77,2.35-3.16,4.2-2.25,6.14.65,1.38,2.01,1.78,3.45,2.19,1.52.44,3.09.9,4.13,2.52,1.5,2.34.73,5.33.12,7.74-.49,1.92-.88,3.44,0,4.08.21.15.46.22.72.22.94,0,2.18-.85,3.57-1.79,1.72-1.17,3.64-2.48,5.37-2.48.37,0,.73.06,1.08.19,1.9.73,2.43,3.3,2.94,5.78.52,2.51,1.01,4.88,2.83,5.5.26.09.51.13.76.13,1.26,0,2.4-1.06,3.79-2.34,1.76-1.63,3.95-3.65,7.31-4.45.98-.23,1.93-.33,2.85-.33,2.94,0,5.55,1,7.59,1.79,1.43.55,2.62,1.01,3.54,1.01.54,0,.99-.16,1.34-.54.99-1.06.15-2.75-.9-4.89-1.32-2.67-2.96-5.98-2.35-9.94.65-4.2,3.49-6.81,5.99-9.11,2.07-1.9,3.88-3.56,3.88-5.68,0-.24-.02-.49-.07-.74-.42-2.15-2.31-3.04-4.5-4.07-2.24-1.05-4.78-2.24-6.13-5.11-1.84-3.9-.34-8.42.76-11.72.78-2.36,1.35-4.06.42-4.65-.16-.1-.34-.15-.52-.15-.78,0-1.76.82-2.94,1.81-1.85,1.55-4.12,3.45-6.79,3.45-.2,0-.4-.01-.61-.03-2.66-.29-4.08-2.38-5.57-4.6-1.47-2.17-2.99-4.41-5.78-4.87-.32-.05-.64-.08-.94-.08h0ZM529.04,323.57c.36,0,.72-.01,1.09-.05,3.85-.33,6.25-2.31,8.38-4.05,1.79-1.48,3.37-2.77,5.45-2.77.28,0,.57.02.87.07,2.66.44,4.13,2.62,5.56,4.74,1.47,2.18,3,4.43,5.81,4.74.21.02.42.03.62.03,2.8,0,5.21-2.02,7.01-3.53,1.14-.95,2.08-1.74,2.73-1.74.13,0,.25.03.36.1.72.46.16,2.15-.55,4.28-1.11,3.35-2.63,7.94-.74,11.96,1.4,2.97,4,4.19,6.29,5.26,2.11.99,3.94,1.85,4.32,3.84.44,2.31-1.48,4.08-3.71,6.12-2.55,2.34-5.43,4.99-6.09,9.3-.09.59-.13,1.16-.13,1.73,0,3.33,1.43,6.21,2.51,8.4,1.04,2.11,1.79,3.63.96,4.52-.29.31-.66.43-1.12.43-.86,0-2.01-.44-3.41-.98-2.06-.79-4.7-1.81-7.7-1.81-.94,0-1.92.1-2.92.34-3.44.82-5.67,2.88-7.45,4.53-1.38,1.28-2.44,2.26-3.57,2.26-.22,0-.43-.04-.66-.11-1.65-.57-2.12-2.85-2.62-5.26-.53-2.57-1.08-5.22-3.14-6.01-.39-.15-.79-.22-1.2-.22-1.82,0-3.78,1.33-5.54,2.53-1.35.92-2.55,1.74-3.38,1.74-.21,0-.39-.05-.54-.16-.71-.51-.33-2.01.12-3.74.63-2.47,1.42-5.54-.16-7.99-1.11-1.72-2.81-2.22-4.31-2.65-1.43-.42-2.66-.77-3.25-2.02-.83-1.76.51-3.55,2.21-5.81,1.59-2.11,3.39-4.5,4.14-7.67.24-1.02.35-2.03.35-3.04,0-5.86-3.63-11.47-6.16-15.38-1.76-2.72-3.15-4.87-2.38-5.63.14-.13.31-.19.52-.19.62,0,1.55.51,2.72,1.14,2.17,1.18,5.08,2.77,8.74,2.77h0Z" fill="#f0e6d9" />
                  </g>
                  <g>
                    <path d="M569.73,347.29c0,1.39-1.47,2.35-3.16,3.45-2.01,1.31-4.51,2.94-5.42,5.84-1.02,3.26.38,6.45,1.51,9.01.85,1.93,1.52,3.46.67,4.24-.81.73-2.16.06-3.87-.79-2.21-1.1-4.95-2.47-7.8-1.56-2.16.69-3.5,2.42-4.58,3.81-1,1.28-1.79,2.3-2.83,2.04-1.01-.25-1.3-1.46-1.64-2.86-.37-1.53-.79-3.27-2.27-4.07-1.36-.74-2.83-.27-4.25.18-1.33.42-2.59.82-3.51.05-.91-.75-.75-1.96-.56-3.37.19-1.43.4-3.06-.54-4.49-.99-1.5-2.62-1.82-4.07-2.11-1.33-.26-2.58-.51-3.11-1.62-.71-1.49.57-2.98,2.19-4.88,1.72-2,3.85-4.49,4.21-7.81.43-4-1.84-7.36-3.67-10.05-1.38-2.03-2.47-3.63-1.65-4.69.67-.87,2.01-.56,3.7-.17,2.09.48,4.96,1.14,7.98-.13,1.96-.83,3.07-2.08,3.95-3.08.94-1.06,1.68-1.9,2.96-1.79,1.73.16,2.63,1.94,3.57,3.84,1.01,2.03,2.16,4.33,4.53,5.06,1.89.59,3.69-.08,5.13-.61,1.31-.48,2.45-.9,3.17-.18.75.75.29,1.95-.25,3.35-.58,1.51-1.31,3.4-.7,5.28.82,2.54,3.58,3.64,6.02,4.61,2.2.87,4.09,1.63,4.28,3.25,0,.08.01.16.01.24ZM560.48,358.93c0-.8.11-1.62.36-2.43.95-3.02,3.5-4.68,5.55-6.02,1.77-1.15,3.16-2.06,3-3.39-.17-1.43-1.98-2.15-4.08-2.98-2.5-1-5.34-2.13-6.2-4.81-.65-1.99.1-3.93.7-5.5.52-1.34.92-2.4.32-3-.57-.58-1.57-.21-2.83.25-1.49.55-3.35,1.23-5.34.61-2.5-.78-3.68-3.14-4.73-5.23-.94-1.89-1.76-3.52-3.31-3.66-1.12-.1-1.77.65-2.69,1.68-.91,1.03-2.04,2.31-4.07,3.17-3.11,1.31-6.04.64-8.17.14-1.64-.38-2.82-.65-3.37.05-.68.87.35,2.39,1.66,4.31,1.76,2.59,4.18,6.14,3.73,10.27-.37,3.41-2.54,5.95-4.29,7.98-1.55,1.8-2.77,3.23-2.15,4.53.46.96,1.58,1.18,2.88,1.44,1.51.3,3.21.64,4.28,2.25,1.01,1.53.79,3.22.59,4.71-.17,1.31-.32,2.43.45,3.08.79.66,1.91.3,3.21-.11,1.42-.45,3.02-.96,4.5-.16l-.08.14.08-.14c1.6.87,2.04,2.68,2.43,4.28.31,1.3.59,2.41,1.41,2.62.84.21,1.57-.73,2.5-1.92,1.11-1.43,2.49-3.2,4.74-3.92,2.98-.95,5.79.45,8.04,1.58,1.6.8,2.86,1.43,3.51.84.68-.62.05-2.05-.75-3.87-.83-1.88-1.88-4.28-1.88-6.8Z" fill="#fff" />
                    <path d="M543.74,322.45c-1.14,0-1.85.8-2.73,1.8-.89,1.01-1.99,2.26-3.95,3.08-1.3.55-2.56.74-3.76.74-1.58,0-3.03-.33-4.22-.61-.89-.21-1.68-.39-2.33-.39-.58,0-1.05.15-1.37.56-.82,1.06.27,2.66,1.65,4.69,1.83,2.69,4.11,6.05,3.67,10.05-.36,3.31-2.5,5.8-4.21,7.81-1.62,1.89-2.91,3.39-2.19,4.88.53,1.1,1.78,1.35,3.11,1.62,1.44.29,3.08.61,4.07,2.11.95,1.43.73,3.06.54,4.49-.19,1.4-.35,2.61.56,3.37.38.32.82.44,1.3.44.68,0,1.43-.24,2.21-.49.88-.28,1.78-.57,2.66-.57.54,0,1.07.11,1.59.39,1.47.8,1.9,2.54,2.27,4.07.34,1.4.63,2.6,1.64,2.86.11.03.22.04.33.04.89,0,1.61-.93,2.5-2.08,1.08-1.39,2.43-3.13,4.58-3.81.65-.21,1.3-.3,1.93-.3,2.14,0,4.17,1.01,5.87,1.86,1.2.6,2.22,1.11,3,1.11.34,0,.63-.09.87-.31.85-.77.18-2.3-.67-4.24-1.13-2.56-2.53-5.75-1.51-9.01.91-2.91,3.41-4.54,5.42-5.84,1.69-1.1,3.16-2.06,3.16-3.45,0-.08,0-.16-.01-.24-.19-1.62-2.09-2.37-4.28-3.25-2.43-.97-5.19-2.07-6.02-4.61-.61-1.88.12-3.77.7-5.28.54-1.39,1-2.59.25-3.35-.28-.28-.62-.39-1.01-.39-.62,0-1.35.27-2.15.57-1.05.38-2.28.84-3.59.84-.5,0-1.02-.07-1.54-.23-2.37-.74-3.52-3.04-4.53-5.06-.95-1.89-1.84-3.68-3.57-3.84-.08,0-.16-.01-.23-.01h0ZM533.3,328.39c1.23,0,2.54-.2,3.88-.76,2.03-.86,3.16-2.14,4.07-3.17.86-.97,1.49-1.69,2.49-1.69.06,0,.13,0,.2,0,1.55.14,2.37,1.77,3.31,3.66,1.04,2.09,2.22,4.45,4.73,5.23.56.17,1.11.25,1.64.25,1.36,0,2.63-.46,3.7-.86.8-.29,1.49-.55,2.03-.55.32,0,.58.08.79.3.6.6.19,1.66-.32,3-.6,1.56-1.35,3.51-.7,5.5.87,2.68,3.7,3.81,6.2,4.81,2.1.84,3.91,1.56,4.08,2.98.16,1.32-1.24,2.23-3,3.39-2.05,1.34-4.6,3-5.55,6.02-.26.81-.36,1.63-.36,2.43,0,2.52,1.06,4.92,1.88,6.8.8,1.82,1.43,3.25.75,3.87-.18.16-.4.23-.66.23-.7,0-1.68-.49-2.84-1.07-1.74-.87-3.8-1.89-6.01-1.89-.67,0-1.35.09-2.04.31-2.25.72-3.63,2.5-4.74,3.92-.84,1.08-1.52,1.95-2.26,1.95-.08,0-.16,0-.24-.03-.82-.21-1.09-1.33-1.41-2.62-.39-1.6-.83-3.41-2.43-4.28l-.08.14.08-.14c-.57-.31-1.15-.42-1.74-.42-.95,0-1.89.3-2.77.58-.78.25-1.49.47-2.11.47-.41,0-.78-.1-1.1-.36-.77-.64-.62-1.77-.45-3.08.2-1.49.42-3.18-.59-4.71-1.06-1.61-2.77-1.95-4.28-2.25-1.3-.26-2.42-.48-2.88-1.44-.62-1.3.6-2.73,2.15-4.53,1.75-2.04,3.92-4.57,4.29-7.98.45-4.12-1.96-7.67-3.73-10.27-1.3-1.92-2.34-3.44-1.66-4.31.25-.32.62-.44,1.11-.44.6,0,1.36.18,2.26.38,1.21.28,2.68.62,4.3.62h0Z" fill="#f0e6d9" />
                  </g>
                  <g>
                    <path d="M562.57,347.52c0,.88-1.24,1.37-2.79,1.98-1.87.73-4.19,1.65-4.89,3.55-.84,2.3.96,5.12,2.27,7.18.97,1.53,1.67,2.63,1.16,3.17-.51.54-1.72-.1-3.25-.9-1.98-1.04-4.45-2.33-6.01-1.38-1.15.7-1.43,2.41-1.66,3.77-.19,1.13-.33,2.03-.94,2.1-.57.07-.9-.65-1.35-1.65-.58-1.28-1.38-3.03-3.03-3.71-1.08-.45-2.08-.25-2.96-.08-.92.18-1.72.33-2.36-.28h0c-.65-.63-.53-1.5-.39-2.42.14-.95.28-1.93-.29-2.88-.67-1.11-1.83-1.37-2.95-1.62-1-.22-1.95-.43-2.33-1.28-.51-1.11.43-2.18,1.62-3.54,1.21-1.37,2.71-3.08,3.06-5.37.51-3.28-1.54-6.32-3.04-8.54-1.1-1.63-1.89-2.81-1.29-3.48.46-.52,1.32-.23,2.39.15,1.36.47,3.23,1.11,5.16.39,1.42-.53,2.2-1.54,2.82-2.36.6-.77,1.11-1.44,1.94-1.36,1.2.11,1.72,1.6,2.32,3.32.63,1.8,1.34,3.84,2.99,4.43,1.78.64,3.83-.65,5.48-1.69,1.28-.8,2.21-1.39,2.72-.91.49.45.04,1.35-.59,2.6-.79,1.56-1.88,3.7-1.18,5.53.67,1.75,2.64,2.46,4.38,3.09,1.5.54,2.8,1.01,2.95,2.05,0,.05.01.1.01.15ZM554.35,354.33c0-.47.07-.93.23-1.38.74-2.04,3.14-2.99,5.07-3.74,1.44-.57,2.69-1.06,2.58-1.78-.12-.85-1.34-1.29-2.74-1.79-1.81-.65-3.85-1.39-4.58-3.28-.75-1.97.37-4.18,1.19-5.8.52-1.03.98-1.93.66-2.21-.33-.31-1.31.3-2.33.95-1.71,1.07-3.84,2.41-5.76,1.72-1.79-.64-2.53-2.76-3.19-4.63-.56-1.61-1.05-3.01-2.04-3.1-.65-.06-1.07.48-1.65,1.24-.65.85-1.46,1.9-2.97,2.46-2.04.76-3.97.1-5.38-.38-.97-.33-1.73-.59-2.05-.24-.44.49.34,1.63,1.32,3.09,1.53,2.26,3.62,5.37,3.09,8.77-.37,2.38-1.91,4.13-3.14,5.53-1.11,1.27-1.99,2.26-1.57,3.19.32.7,1.15.88,2.11,1.1,1.13.25,2.41.54,3.15,1.77.63,1.05.48,2.14.34,3.09-.13.88-.24,1.63.3,2.14l-.11.12.11-.12c.52.5,1.2.36,2.07.2.93-.18,1.97-.38,3.15.1,1.78.73,2.6,2.55,3.21,3.88.37.81.68,1.5,1.02,1.47.36-.04.51-.91.66-1.83.24-1.43.53-3.22,1.81-4,1.72-1.04,4.27.3,6.33,1.37,1.29.68,2.52,1.32,2.86.96.34-.35-.41-1.53-1.2-2.77-1.1-1.73-2.53-3.98-2.53-6.08Z" fill="#fff" />
                    <path d="M543.34,328.96c-.75,0-1.24.64-1.81,1.37-.63.81-1.41,1.82-2.82,2.36-.62.23-1.24.32-1.84.32-1.25,0-2.4-.4-3.32-.71-.66-.23-1.24-.42-1.69-.42-.29,0-.52.08-.7.28-.6.67.19,1.85,1.29,3.48,1.5,2.22,3.55,5.26,3.04,8.54-.35,2.29-1.86,3.99-3.06,5.37-1.19,1.35-2.13,2.42-1.62,3.54.39.84,1.33,1.05,2.33,1.28,1.12.25,2.28.51,2.95,1.62.57.95.43,1.93.29,2.88-.13.92-.26,1.79.39,2.42.34.33.74.44,1.17.44.37,0,.76-.08,1.19-.16.48-.09.99-.19,1.53-.19.46,0,.93.07,1.43.27,1.66.68,2.45,2.43,3.03,3.71.43.96.75,1.66,1.28,1.66.02,0,.05,0,.07,0,.6-.07.75-.96.94-2.1.22-1.37.5-3.07,1.66-3.77.38-.23.82-.33,1.29-.33,1.45,0,3.22.93,4.72,1.71,1.13.59,2.09,1.09,2.72,1.09.22,0,.4-.06.53-.2.52-.54-.19-1.64-1.16-3.17-1.31-2.06-3.1-4.88-2.27-7.18.69-1.91,3.02-2.82,4.89-3.55,1.55-.61,2.79-1.1,2.79-1.98,0-.05,0-.1-.01-.15-.15-1.04-1.45-1.51-2.95-2.05-1.74-.63-3.71-1.34-4.38-3.09-.7-1.83.38-3.97,1.18-5.53.63-1.24,1.09-2.14.59-2.6-.13-.12-.28-.17-.46-.17-.54,0-1.3.48-2.27,1.08-1.35.84-2.96,1.86-4.48,1.86-.34,0-.68-.05-1.01-.17-1.65-.59-2.36-2.63-2.99-4.43-.6-1.72-1.12-3.2-2.32-3.32-.05,0-.09,0-.13,0h0ZM536.86,333.33c.63,0,1.29-.1,1.96-.35,1.5-.56,2.31-1.61,2.97-2.46.55-.71.96-1.24,1.55-1.24.03,0,.07,0,.1,0,.99.09,1.48,1.49,2.04,3.1.65,1.87,1.39,3.99,3.19,4.63.37.13.74.19,1.12.19,1.6,0,3.26-1.04,4.64-1.91.84-.53,1.64-1.03,2.09-1.03.1,0,.18.03.24.08.31.29-.14,1.18-.66,2.21-.82,1.62-1.94,3.83-1.19,5.8.72,1.89,2.77,2.63,4.58,3.28,1.41.51,2.62.94,2.74,1.79.11.72-1.14,1.21-2.58,1.78-1.93.76-4.33,1.7-5.07,3.74-.16.45-.23.91-.23,1.38,0,2.1,1.43,4.35,2.53,6.08.79,1.24,1.54,2.42,1.2,2.77-.07.07-.17.1-.31.1-.53,0-1.52-.52-2.56-1.06-1.53-.8-3.34-1.75-4.87-1.75-.52,0-1.02.11-1.45.38-1.28.78-1.57,2.56-1.81,4-.15.92-.29,1.79-.66,1.83,0,0-.02,0-.03,0-.33,0-.64-.68-.99-1.47-.6-1.33-1.43-3.15-3.21-3.88-.54-.22-1.06-.3-1.55-.3-.57,0-1.1.1-1.6.2-.41.08-.79.15-1.12.15-.37,0-.68-.09-.95-.35l-.11.12.11-.12c-.53-.51-.42-1.27-.3-2.14.14-.96.3-2.04-.34-3.09-.74-1.23-2.02-1.52-3.15-1.77-.96-.21-1.79-.4-2.11-1.1-.43-.92.45-1.92,1.57-3.19,1.23-1.4,2.77-3.15,3.14-5.53.53-3.4-1.56-6.51-3.09-8.77-.98-1.45-1.75-2.6-1.32-3.09.11-.12.27-.17.47-.17.39,0,.94.19,1.58.41.95.33,2.13.73,3.42.73h0Z" fill="#f0e6d9" />
                  </g>
                  <g>
                    <path d="M554.55,347.36c0,.64-.83,1-1.87,1.46-1.19.52-2.67,1.17-3.03,2.4-.44,1.5.9,3.3,1.7,4.37.5.68.71.95.5,1.13-.22.19-.55-.11-1.35-.85-1.04-.95-2.61-2.39-3.45-2.01-.69.31-.8,1.85-.87,2.97-.07,1.01-.11,1.62-.48,1.67-.3.03-.44-.33-.64-.88-.26-.68-.61-1.62-1.34-1.88-.65-.23-1.34.16-1.95.5-.57.32-1.07.59-1.45.32-.39-.28-.25-.86-.08-1.53.18-.73.41-1.65-.03-2.38-.38-.64-1.06-.83-1.71-1-.61-.17-1.19-.32-1.39-.87h0c-.23-.67.36-1.23,1.05-1.88.7-.67,1.58-1.49,1.9-2.71.47-1.79-.49-3.64-1.19-4.99-.56-1.08-.96-1.85-.51-2.26.32-.29.78-.12,1.31.08.62.23,1.32.5,2.02.19.82-.36,1.16-1.29,1.43-2.03.21-.58.38-1.04.75-1.03.46.01.61.72.81,1.71.26,1.22.61,2.88,1.66,3.37.97.45,2.26-.19,3.29-.71.84-.42,1.5-.75,1.83-.39.3.33,0,.84-.37,1.5-.45.79-1,1.78-.71,2.68.32.97,1.47,1.4,2.48,1.77.88.33,1.65.61,1.68,1.22,0,.02,0,.03,0,.05ZM549.24,351.85c0-.24.03-.48.1-.72.4-1.37,1.96-2.06,3.21-2.61.92-.4,1.7-.75,1.68-1.19-.03-.4-.7-.65-1.47-.94-1.03-.38-2.31-.85-2.68-1.97-.34-1.04.25-2.1.73-2.94.27-.48.55-.97.41-1.12-.17-.18-.82.15-1.45.46-1.09.55-2.45,1.23-3.57.71-1.21-.56-1.57-2.32-1.84-3.6-.14-.64-.3-1.44-.51-1.45-.14,0-.3.43-.44.82-.28.76-.66,1.8-1.6,2.22-.82.36-1.62.06-2.26-.18-.43-.16-.81-.31-.98-.15-.27.25.13,1,.58,1.88.72,1.4,1.71,3.31,1.21,5.22-.34,1.3-1.26,2.16-1.99,2.86-.63.6-1.13,1.07-.96,1.54h0c.14.39.61.52,1.17.67.68.18,1.46.39,1.91,1.15.5.85.26,1.83.06,2.62-.14.55-.25,1.03-.04,1.19.21.16.64-.08,1.1-.34.64-.36,1.43-.8,2.21-.52.88.31,1.26,1.33,1.54,2.07.1.27.24.64.32.68.09-.09.14-.83.18-1.37.09-1.27.19-2.86,1.06-3.25,1.03-.46,2.63,1,3.8,2.07.26.24.55.5.75.66-.1-.15-.24-.34-.38-.52-.72-.96-1.85-2.48-1.85-3.94Z" fill="#fff" />
                    <path d="M543.85,336.16c-.36,0-.53.46-.74,1.03-.27.75-.61,1.67-1.43,2.03-.23.1-.45.14-.68.14-.47,0-.92-.17-1.34-.33-.33-.12-.63-.24-.89-.24-.16,0-.3.04-.42.16-.45.41-.04,1.19.51,2.26.7,1.35,1.65,3.2,1.19,4.99-.32,1.21-1.19,2.04-1.9,2.71-.69.65-1.28,1.21-1.05,1.88.19.55.77.71,1.39.87.65.18,1.33.36,1.71,1,.43.73.21,1.65.03,2.38-.16.67-.31,1.24.08,1.53.11.08.23.11.36.11.31,0,.68-.2,1.09-.43.48-.27,1.02-.57,1.54-.57.14,0,.27.02.41.07.73.26,1.08,1.19,1.34,1.88.2.53.33.88.6.88.01,0,.03,0,.04,0,.37-.04.41-.65.48-1.67.08-1.13.18-2.67.87-2.97.09-.04.2-.06.31-.06.88,0,2.22,1.23,3.14,2.07.65.59.99.9,1.21.9.05,0,.1-.02.14-.06.21-.18,0-.46-.5-1.13-.8-1.08-2.14-2.87-1.7-4.37.36-1.23,1.84-1.88,3.03-2.4,1.04-.46,1.87-.82,1.87-1.46,0-.02,0-.03,0-.05-.04-.61-.8-.89-1.68-1.22-1.01-.37-2.16-.8-2.48-1.77-.3-.91.26-1.89.71-2.68.37-.66.66-1.18.37-1.5-.1-.11-.23-.15-.38-.15-.36,0-.86.25-1.45.55-.79.39-1.72.86-2.55.86-.26,0-.51-.05-.74-.15-1.06-.49-1.41-2.16-1.66-3.37-.21-.98-.36-1.69-.81-1.71,0,0,0,0-.01,0h0ZM541.01,339.69c.26,0,.53-.05.8-.17.95-.41,1.33-1.46,1.6-2.22.14-.38.3-.82.44-.82,0,0,0,0,0,0,.2,0,.37.81.51,1.45.27,1.28.64,3.04,1.84,3.6.28.13.57.18.88.18.9,0,1.87-.49,2.69-.9.5-.25,1.02-.51,1.29-.51.07,0,.12.02.15.05.14.15-.14.65-.41,1.12-.48.85-1.07,1.9-.73,2.94.37,1.12,1.65,1.59,2.68,1.97.78.29,1.45.54,1.47.94.02.44-.76.79-1.68,1.19-1.25.55-2.81,1.23-3.21,2.61-.07.24-.1.48-.1.72,0,1.46,1.13,2.98,1.85,3.94.13.18.27.37.38.52-.2-.16-.49-.42-.75-.66-1.01-.93-2.35-2.16-3.37-2.16-.15,0-.29.03-.43.09-.87.39-.98,1.97-1.06,3.25-.04.54-.09,1.28-.18,1.37-.08-.04-.22-.41-.32-.68-.28-.74-.66-1.76-1.54-2.07-.17-.06-.34-.09-.51-.09-.61,0-1.2.33-1.7.61-.36.2-.69.39-.93.39-.07,0-.12-.02-.17-.05-.21-.16-.1-.64.04-1.19.19-.79.44-1.77-.06-2.62-.45-.76-1.22-.97-1.91-1.15-.55-.15-1.03-.28-1.17-.67-.17-.47.33-.95.96-1.54.73-.69,1.65-1.56,1.99-2.86.5-1.91-.49-3.82-1.21-5.22-.45-.88-.84-1.63-.58-1.88.05-.05.13-.07.21-.07.2,0,.47.1.77.22.43.16.93.35,1.46.35h0Z" fill="#f0e6d9" />
                  </g>
                  <g>
                    <path d="M549.44,347.13c0,.25-.33.32-.87.43-.66.14-1.67.35-1.9.93-.24.6.35,1.48.74,2.06.3.45.45.68.28.83-.17.14-.37-.02-.7-.29-.34-.28-.86-.7-1.15-.58-.3.12-.38.84-.43,1.31-.05.48-.08.78-.32.8-.23.02-.32-.26-.46-.69-.08-.26-.26-.81-.4-.82-.18-.02-.5.65-.64.93-.22.44-.33.66-.53.6-.19-.06-.15-.27-.09-.58.09-.46.23-1.22-.12-1.82-.18-.31-.42-.45-.64-.57-.23-.13-.46-.27-.53-.58-.09-.48.31-.8.74-1.15.4-.32.85-.69.99-1.23.23-.95-.6-2.02-1.14-2.74-.38-.5-.58-.75-.39-.93.16-.15.38-.01.68.17.33.2.78.48,1.06.34.21-.11.27-.44.33-.72.05-.27.1-.53.33-.57.26-.04.38.27.54.69.18.49.44,1.16.94,1.38.59.25,1.39-.18,1.91-.47.39-.22.63-.35.77-.16.15.19-.06.41-.48.85-.44.46-1.1,1.15-.95,1.56.13.38.99.52,1.55.6.56.09.9.14.91.4,0,0,0,0,0,.01ZM546.29,348.8c0-.15.02-.29.08-.43.3-.74,1.36-.96,2.13-1.12.17-.04.36-.08.49-.12-.14-.03-.35-.07-.52-.09-.72-.11-1.61-.25-1.8-.82-.21-.6.5-1.35,1.02-1.89.08-.08.17-.18.25-.26-.05.03-.1.06-.15.08-.58.32-1.45.8-2.19.48-.63-.27-.91-1.01-1.12-1.56-.06-.15-.13-.34-.19-.44-.02.07-.04.18-.06.26-.06.32-.15.76-.5.94-.43.22-.98-.11-1.37-.35-.05-.03-.1-.06-.15-.09.08.11.19.26.28.38.58.76,1.47,1.91,1.2,3.01-.16.65-.68,1.07-1.1,1.4-.42.34-.68.56-.62.83h0c.03.16.15.23.37.36.23.14.53.3.75.69.34.58.3,1.25.22,1.75.26-.52.55-1.07.93-1.04.36.03.52.55.68,1.05.03.1.07.22.1.31.02-.11.03-.24.04-.36.07-.61.15-1.38.63-1.58.47-.19,1.05.28,1.48.62.02.01.04.03.05.04-.03-.05-.07-.1-.1-.15-.35-.52-.85-1.26-.85-1.93Z" fill="#fff" />
                    <path d="M544.3,342.27s-.03,0-.04,0c-.22.03-.27.29-.33.57-.05.27-.12.61-.33.72-.05.03-.11.04-.17.04-.27,0-.62-.21-.88-.38-.21-.13-.39-.24-.53-.24-.06,0-.11.02-.16.06-.19.18,0,.43.39.93.55.71,1.37,1.79,1.14,2.74-.13.54-.59.91-.99,1.23-.43.34-.83.67-.74,1.15.06.31.3.45.53.58.21.12.45.26.64.57.36.6.21,1.37.12,1.82-.06.31-.1.52.09.58.02,0,.04.01.07.01.16,0,.27-.22.47-.61.14-.28.46-.93.64-.93,0,0,0,0,0,0,.15.01.32.56.4.82.13.41.22.69.43.69,0,0,.01,0,.02,0,.24-.02.27-.31.32-.8.05-.47.13-1.19.43-1.31.04-.01.07-.02.12-.02.3,0,.74.35,1.04.6.25.2.42.34.56.34.05,0,.09-.02.14-.05.18-.15.03-.38-.28-.83-.39-.58-.98-1.46-.74-2.06.23-.58,1.24-.79,1.9-.93.54-.11.87-.18.87-.43,0,0,0,0,0-.01-.01-.26-.35-.31-.91-.4-.56-.09-1.42-.22-1.55-.6-.14-.41.52-1.1.95-1.56.42-.44.62-.65.48-.85-.05-.06-.1-.09-.17-.09-.14,0-.33.11-.6.25-.41.23-.99.55-1.51.55-.14,0-.27-.02-.4-.08-.5-.21-.76-.89-.94-1.38-.15-.4-.26-.69-.49-.69h0ZM543.43,343.92c.11,0,.22-.02.32-.07.35-.18.43-.62.5-.94.02-.08.04-.19.06-.26.06.1.13.29.19.44.2.54.49,1.29,1.12,1.56.17.07.35.1.52.1.6,0,1.22-.34,1.67-.59.05-.03.1-.06.15-.08-.08.08-.17.18-.25.26-.52.55-1.23,1.29-1.02,1.89.2.57,1.09.7,1.8.82.17.03.38.06.52.09-.13.04-.33.08-.49.12-.77.16-1.84.39-2.13,1.12-.06.14-.08.28-.08.43,0,.67.5,1.41.85,1.93.03.05.07.1.1.15-.02-.01-.04-.03-.05-.04-.36-.29-.82-.67-1.24-.67-.08,0-.16.01-.23.04-.48.2-.57.96-.63,1.58-.01.11-.03.25-.04.36-.04-.1-.07-.21-.1-.31-.16-.5-.32-1.02-.68-1.05-.01,0-.02,0-.03,0-.36,0-.64.54-.89,1.04.08-.5.13-1.16-.22-1.75-.23-.38-.52-.55-.75-.69-.22-.13-.34-.2-.37-.36-.05-.27.2-.49.62-.83.42-.34.94-.76,1.1-1.4.27-1.1-.62-2.25-1.2-3.01-.1-.12-.2-.27-.28-.38.05.03.11.06.15.09.3.19.69.42,1.06.42h0Z" fill="#f0e6d9" />
                  </g>
                </g>
                <g id="Study_furniture_set">
                  <g id="Living_Room" filter="url(#ds-soft)">
                    <g>
                      <rect x="474.91" y="347.21" width="27.97" height="34.36" rx="2.98" ry="2.98" transform="translate(124.51 853.28) rotate(-90)" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M506.24,352.37v24.04c0,1.17-.95,2.13-2.13,2.13h-30.43c-1.17,0-2.13-.95-2.13-2.13v-24.04c0-1.17.95-2.13,2.13-2.13h30.43c1.17,0,2.13.95,2.13,2.13ZM471.88,376.41c0,.99.81,1.8,1.8,1.8h30.43c.99,0,1.8-.81,1.8-1.8v-24.04c0-.99-.81-1.8-1.8-1.8h-30.43c-.99,0-1.8.81-1.8,1.8v24.04Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <rect x="474.98" y="319.28" width="27.97" height="34.36" rx="2.98" ry="2.98" transform="translate(152.5 825.42) rotate(-90)" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M506.3,324.44v24.04c0,1.17-.95,2.13-2.13,2.13h-30.43c-1.17,0-2.13-.95-2.13-2.13v-24.04c0-1.17.95-2.13,2.13-2.13h30.43c1.17,0,2.13.95,2.13,2.13ZM471.95,348.48c0,.99.81,1.8,1.8,1.8h30.43c.99,0,1.8-.81,1.8-1.8v-24.04c0-.99-.81-1.8-1.8-1.8h-30.43c-.99,0-1.8.81-1.8,1.8v24.04Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <rect x="475.12" y="291.28" width="27.97" height="34.36" rx="2.98" ry="2.98" transform="translate(180.65 797.56) rotate(-90)" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M506.45,296.43v24.04c0,1.17-.95,2.13-2.13,2.13h-30.43c-1.17,0-2.13-.95-2.13-2.13v-24.04c0-1.17.95-2.13,2.13-2.13h30.43c1.17,0,2.13.95,2.13,2.13ZM472.09,320.48c0,.99.81,1.8,1.8,1.8h30.43c.99,0,1.8-.81,1.8-1.8v-24.04c0-.99-.81-1.8-1.8-1.8h-30.43c-.99,0-1.8.81-1.8,1.8v24.04Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <path d="M488.71,365.33h4.77c1.23,0,2.24,1,2.24,2.24v21.77c0,1.23-1,2.24-2.24,2.24h-4.77c-1.23,0-2.24-1-2.24-2.24v-21.77c0-1.23,1-2.24,2.24-2.24Z" transform="translate(112.65 869.55) rotate(-90)" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M504.38,375.3v6.31c0,.9-.73,1.64-1.64,1.64h-23.3c-.9,0-1.64-.73-1.64-1.64v-6.31c0-.9.73-1.64,1.64-1.64h23.3c.9,0,1.64.73,1.64,1.64ZM478.14,381.61c0,.72.59,1.31,1.31,1.31h23.3c.72,0,1.31-.59,1.31-1.31v-6.31c0-.72-.59-1.31-1.31-1.31h-23.3c-.72,0-1.31.59-1.31,1.31v6.31Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <path d="M488.71,281.32h4.77c1.23,0,2.24,1,2.24,2.24v21.77c0,1.23-1,2.24-2.24,2.24h-4.77c-1.23,0-2.24-1-2.24-2.24v-21.77c0-1.23,1-2.24,2.24-2.24Z" transform="translate(196.66 785.54) rotate(-90)" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M504.38,291.29v6.31c0,.9-.73,1.63-1.64,1.63h-23.3c-.9,0-1.64-.73-1.64-1.64v-6.31c0-.9.73-1.64,1.64-1.64h23.3c.9,0,1.64.73,1.64,1.64ZM478.14,297.6c0,.72.59,1.31,1.31,1.31h23.3c.72,0,1.31-.59,1.31-1.31v-6.31c0-.72-.59-1.31-1.31-1.31h-23.3c-.72,0-1.31.59-1.31,1.31v6.31Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <rect x="431.78" y="331.19" width="87.23" height="9.94" rx="2.28" ry="2.28" transform="translate(139.24 811.55) rotate(-90)" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M480.53,294.04v84.22c0,.92-.75,1.67-1.67,1.67h-6.93c-.92,0-1.67-.75-1.67-1.67v-84.22c0-.92.75-1.67,1.67-1.67h6.93c.92,0,1.67.75,1.67,1.67ZM470.59,378.27c0,.74.6,1.34,1.34,1.34h6.93c.74,0,1.34-.6,1.34-1.34v-84.22c0-.74-.6-1.34-1.34-1.34h-6.93c-.74,0-1.34.6-1.34,1.34v84.22Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <circle cx="485.47" cy="343.28" r=".74" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M486.38,343.28c0,.5-.41.91-.91.91s-.91-.41-.91-.91.41-.91.91-.91.91.41.91.91ZM484.89,343.28c0,.32.26.58.58.58s.58-.26.58-.58-.26-.58-.58-.58-.58.26-.58.58Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <path d="M485.47,329.15c.41,0,.74.33.74.74s-.33.74-.74.74-.74-.33-.74-.74.33-.74.74-.74Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M486.38,329.89c0,.5-.41.91-.91.91s-.91-.41-.91-.91.41-.91.91-.91.91.41.91.91ZM484.89,329.89c0,.32.26.58.58.58s.58-.26.58-.58-.26-.58-.58-.58-.58.26-.58.58Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <circle cx="498.58" cy="343.28" r=".74" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M499.49,343.28c0,.5-.41.91-.91.91s-.91-.41-.91-.91.41-.91.91-.91.91.41.91.91ZM498,343.28c0,.32.26.58.58.58s.58-.26.58-.58-.26-.58-.58-.58-.58.26-.58.58Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <circle cx="498.58" cy="329.68" r=".74" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M499.49,329.68c0,.5-.41.91-.91.91s-.91-.41-.91-.91.41-.91.91-.91.91.41.91.91ZM498,329.68c0,.32.26.58.58.58s.58-.26.58-.58-.26-.58-.58-.58-.58.26-.58.58Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <path d="M492.87,335.2c.41,0,.74.33.74.74s-.33.75-.74.75-.75-.33-.75-.75.33-.74.75-.74Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M493.78,335.94c0,.5-.41.91-.91.91s-.91-.41-.91-.91.41-.91.91-.91.91.41.91.91ZM492.29,335.94c0,.32.26.58.58.58s.58-.26.58-.58-.26-.58-.58-.58-.58.26-.58.58Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <path d="M485.47,315.79c.41,0,.74.33.74.74s-.33.74-.74.74-.74-.33-.74-.74.33-.74.74-.74Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M486.38,316.54c0,.5-.41.91-.91.91s-.91-.41-.91-.91.41-.91.91-.91.91.41.91.91ZM484.89,316.54c0,.32.26.58.58.58s.58-.26.58-.58-.26-.58-.58-.58-.58.26-.58.58Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <path d="M485.47,302.4c.41,0,.74.33.74.74s-.33.74-.74.74-.74-.33-.74-.74.33-.74.74-.74Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M486.38,303.15c0,.5-.41.91-.91.91s-.91-.41-.91-.91.41-.91.91-.91.91.41.91.91ZM484.89,303.15c0,.32.26.58.58.58s.58-.26.58-.58-.26-.58-.58-.58-.58.26-.58.58Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <path d="M498.58,315.79c.41,0,.74.33.74.74s-.33.74-.74.74-.74-.33-.74-.74.33-.74.74-.74Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M499.49,316.54c0,.5-.41.91-.91.91s-.91-.41-.91-.91.41-.91.91-.91.91.41.91.91ZM498,316.54c0,.32.26.58.58.58s.58-.26.58-.58-.26-.58-.58-.58-.58.26-.58.58Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <circle cx="498.58" cy="302.94" r=".74" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M499.49,302.94c0,.5-.41.91-.91.91s-.91-.41-.91-.91.41-.91.91-.91.91.41.91.91ZM498,302.94c0,.32.26.58.58.58s.58-.26.58-.58-.26-.58-.58-.58-.58.26-.58.58Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <path d="M492.87,308.46c.41,0,.74.33.74.74s-.33.75-.74.75-.75-.33-.75-.75.33-.74.75-.74Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M493.78,309.2c0,.5-.41.91-.91.91s-.91-.41-.91-.91.41-.91.91-.91.91.41.91.91ZM492.29,309.2c0,.32.26.58.58.58s.58-.26.58-.58-.26-.58-.58-.58-.58.26-.58.58Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <circle cx="485.47" cy="369.29" r=".74" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M486.38,369.29c0,.5-.41.91-.91.91s-.91-.41-.91-.91.41-.91.91-.91.91.41.91.91ZM484.89,369.29c0,.32.26.58.58.58s.58-.26.58-.58-.26-.58-.58-.58-.58.26-.58.58Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <path d="M485.47,355.15c.41,0,.74.33.74.75s-.33.74-.74.74-.74-.33-.74-.74.33-.75.74-.75Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M486.38,355.9c0,.5-.41.91-.91.91s-.91-.41-.91-.91.41-.91.91-.91.91.41.91.91ZM484.89,355.9c0,.32.26.58.58.58s.58-.26.58-.58-.26-.58-.58-.58-.58.26-.58.58Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <circle cx="498.58" cy="369.29" r=".74" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M499.49,369.29c0,.5-.41.91-.91.91s-.91-.41-.91-.91.41-.91.91-.91.91.41.91.91ZM498,369.29c0,.32.26.58.58.58s.58-.26.58-.58-.26-.58-.58-.58-.58.26-.58.58Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <path d="M498.58,354.94c.41,0,.74.33.74.75s-.33.74-.74.74-.74-.33-.74-.74.33-.75.74-.75Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M499.49,355.69c0,.5-.41.91-.91.91s-.91-.41-.91-.91.41-.91.91-.91.91.41.91.91ZM498,355.69c0,.32.26.58.58.58s.58-.26.58-.58-.26-.58-.58-.58-.58.26-.58.58Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <path d="M492.87,361.2c.41,0,.74.33.74.74s-.33.74-.74.74-.75-.33-.75-.74.33-.74.75-.74Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M493.78,361.95c0,.5-.41.91-.91.91s-.91-.41-.91-.91.41-.91.91-.91.91.41.91.91ZM492.29,361.95c0,.32.26.58.58.58s.58-.26.58-.58-.26-.58-.58-.58-.58.26-.58.58Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                  </g>
                  <g id="Living_Room1" data-name="Living_Room" filter="url(#ds-soft)">
                    <g>
                      <rect x="577.98" y="378.59" width="27.97" height="34.36" rx="2.98" ry="2.98" transform="translate(1183.93 791.53) rotate(-180)" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M579.94,378.42h24.04c1.17,0,2.13.95,2.13,2.13v30.43c0,1.17-.95,2.13-2.13,2.13h-24.04c-1.17,0-2.13-.95-2.13-2.13v-30.43c0-1.17.95-2.13,2.13-2.13ZM603.98,412.78c.99,0,1.8-.81,1.8-1.8v-30.43c0-.99-.81-1.8-1.8-1.8h-24.04c-.99,0-1.8.81-1.8,1.8v30.43c0,.99.81,1.8,1.8,1.8h24.04Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <rect x="550.05" y="378.52" width="27.97" height="34.36" rx="2.98" ry="2.98" transform="translate(1128.07 791.4) rotate(-180)" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M552.02,378.36h24.04c1.17,0,2.13.95,2.13,2.13v30.43c0,1.17-.95,2.13-2.13,2.13h-24.04c-1.17,0-2.13-.95-2.13-2.13v-30.43c0-1.17.95-2.13,2.13-2.13ZM576.06,412.71c.99,0,1.8-.81,1.8-1.8v-30.43c0-.99-.81-1.8-1.8-1.8h-24.04c-.99,0-1.8.81-1.8,1.8v30.43c0,.99.81,1.8,1.8,1.8h24.04Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <rect x="522.05" y="378.38" width="27.97" height="34.36" rx="2.98" ry="2.98" transform="translate(1072.06 791.11) rotate(-180)" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M524.01,378.21h24.04c1.17,0,2.13.95,2.13,2.13v30.43c0,1.17-.95,2.13-2.13,2.13h-24.04c-1.17,0-2.13-.95-2.13-2.13v-30.43c0-1.17.95-2.13,2.13-2.13ZM548.05,412.57c.99,0,1.8-.81,1.8-1.8v-30.43c0-.99-.81-1.8-1.8-1.8h-24.04c-.99,0-1.8.81-1.8,1.8v30.43c0,.99.81,1.8,1.8,1.8h24.04Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <path d="M603.64,380.44h4.77c1.23,0,2.24,1,2.24,2.24v21.77c0,1.23-1,2.24-2.24,2.24h-4.77c-1.23,0-2.24-1-2.24-2.24v-21.77c0-1.23,1-2.24,2.24-2.24Z" transform="translate(1212.06 787.12) rotate(-180)" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M602.88,380.28h6.31c.9,0,1.64.73,1.64,1.64v23.3c0,.9-.73,1.64-1.64,1.64h-6.31c-.9,0-1.64-.73-1.64-1.64v-23.3c0-.9.73-1.64,1.64-1.64ZM609.18,406.52c.72,0,1.31-.59,1.31-1.31v-23.3c0-.72-.59-1.31-1.31-1.31h-6.31c-.72,0-1.31.59-1.31,1.31v23.3c0,.72.59,1.31,1.31,1.31h6.31Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <path d="M519.63,380.44h4.77c1.23,0,2.24,1,2.24,2.24v21.77c0,1.23-1,2.24-2.24,2.24h-4.77c-1.23,0-2.24-1-2.24-2.24v-21.77c0-1.23,1-2.24,2.24-2.24Z" transform="translate(1044.04 787.12) rotate(-180)" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M518.87,380.28h6.31c.9,0,1.63.73,1.63,1.64v23.3c0,.9-.73,1.64-1.64,1.64h-6.31c-.9,0-1.64-.73-1.64-1.64v-23.3c0-.9.73-1.64,1.64-1.64ZM525.17,406.52c.72,0,1.31-.59,1.31-1.31v-23.3c0-.72-.59-1.31-1.31-1.31h-6.31c-.72,0-1.31.59-1.31,1.31v23.3c0,.72.59,1.31,1.31,1.31h6.31Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <rect x="520.12" y="404.3" width="87.23" height="9.94" rx="2.28" ry="2.28" transform="translate(1127.46 818.54) rotate(-180)" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M521.62,404.13h84.22c.92,0,1.67.75,1.67,1.67v6.93c0,.92-.75,1.67-1.67,1.67h-84.22c-.92,0-1.67-.75-1.67-1.67v-6.93c0-.92.75-1.67,1.67-1.67ZM605.84,414.07c.74,0,1.34-.6,1.34-1.34v-6.93c0-.74-.6-1.34-1.34-1.34h-84.22c-.74,0-1.34.6-1.34,1.34v6.93c0,.74.6,1.34,1.34,1.34h84.22Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <circle cx="570.86" cy="399.19" r=".74" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M570.86,398.28c.5,0,.91.41.91.91s-.41.91-.91.91-.91-.41-.91-.91.41-.91.91-.91ZM570.86,399.77c.32,0,.58-.26.58-.58s-.26-.58-.58-.58-.58.26-.58.58.26.58.58.58Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <path d="M556.72,399.19c0-.41.33-.74.74-.74s.74.33.74.74-.33.74-.74.74-.74-.33-.74-.74Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M557.47,398.28c.5,0,.91.41.91.91s-.41.91-.91.91-.91-.41-.91-.91.41-.91.91-.91ZM557.47,399.77c.32,0,.58-.26.58-.58s-.26-.58-.58-.58-.58.26-.58.58.26.58.58.58Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <circle cx="570.86" cy="386.08" r=".74" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M570.86,385.17c.5,0,.91.41.91.91s-.41.91-.91.91-.91-.41-.91-.91.41-.91.91-.91ZM570.86,386.66c.32,0,.58-.26.58-.58s-.26-.58-.58-.58-.58.26-.58.58.26.58.58.58Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <circle cx="557.26" cy="386.08" r=".74" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M557.26,385.17c.5,0,.91.41.91.91s-.41.91-.91.91-.91-.41-.91-.91.41-.91.91-.91ZM557.26,386.66c.32,0,.58-.26.58-.58s-.26-.58-.58-.58-.58.26-.58.58.26.58.58.58Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <path d="M562.77,391.79c0-.41.33-.74.74-.74s.75.33.75.74-.33.75-.75.75-.74-.33-.74-.75Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M563.52,390.88c.5,0,.91.41.91.91s-.41.91-.91.91-.91-.41-.91-.91.41-.91.91-.91ZM563.52,392.37c.32,0,.58-.26.58-.58s-.26-.58-.58-.58-.58.26-.58.58.26.58.58.58Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <path d="M543.37,399.19c0-.41.33-.74.74-.74s.74.33.74.74-.33.74-.74.74-.74-.33-.74-.74Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M544.11,398.28c.5,0,.91.41.91.91s-.41.91-.91.91-.91-.41-.91-.91.41-.91.91-.91ZM544.11,399.77c.32,0,.58-.26.58-.58s-.26-.58-.58-.58-.58.26-.58.58.26.58.58.58Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <path d="M529.98,399.19c0-.41.33-.74.74-.74s.74.33.74.74-.33.74-.74.74-.74-.33-.74-.74Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M530.72,398.28c.5,0,.91.41.91.91s-.41.91-.91.91-.91-.41-.91-.91.41-.91.91-.91ZM530.72,399.77c.32,0,.58-.26.58-.58s-.26-.58-.58-.58-.58.26-.58.58.26.58.58.58Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <path d="M543.37,386.08c0-.41.33-.74.74-.74s.74.33.74.74-.33.74-.74.74-.74-.33-.74-.74Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M544.11,385.17c.5,0,.91.41.91.91s-.41.91-.91.91-.91-.41-.91-.91.41-.91.91-.91ZM544.11,386.66c.32,0,.58-.26.58-.58s-.26-.58-.58-.58-.58.26-.58.58.26.58.58.58Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <circle cx="530.51" cy="386.08" r=".74" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M530.51,385.17c.5,0,.91.41.91.91s-.41.91-.91.91-.91-.41-.91-.91.41-.91.91-.91ZM530.51,386.66c.32,0,.58-.26.58-.58s-.26-.58-.58-.58-.58.26-.58.58.26.58.58.58Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <path d="M536.03,391.79c0-.41.33-.74.74-.74s.75.33.75.74-.33.75-.75.75-.74-.33-.74-.75Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M536.78,390.88c.5,0,.91.41.91.91s-.41.91-.91.91-.91-.41-.91-.91.41-.91.91-.91ZM536.78,392.37c.32,0,.58-.26.58-.58s-.26-.58-.58-.58-.58.26-.58.58.26.58.58.58Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <circle cx="596.86" cy="399.19" r=".74" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M596.86,398.28c.5,0,.91.41.91.91s-.41.91-.91.91-.91-.41-.91-.91.41-.91.91-.91ZM596.86,399.77c.32,0,.58-.26.58-.58s-.26-.58-.58-.58-.58.26-.58.58.26.58.58.58Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <path d="M582.73,399.19c0-.41.33-.74.75-.74s.74.33.74.74-.33.74-.74.74-.75-.33-.75-.74Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M583.47,398.28c.5,0,.91.41.91.91s-.41.91-.91.91-.91-.41-.91-.91.41-.91.91-.91ZM583.47,399.77c.32,0,.58-.26.58-.58s-.26-.58-.58-.58-.58.26-.58.58.26.58.58.58Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <circle cx="596.86" cy="386.08" r=".74" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M596.86,385.17c.5,0,.91.41.91.91s-.41.91-.91.91-.91-.41-.91-.91.41-.91.91-.91ZM596.86,386.66c.32,0,.58-.26.58-.58s-.26-.58-.58-.58-.58.26-.58.58.26.58.58.58Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <path d="M582.52,386.08c0-.41.33-.74.75-.74s.74.33.74.74-.33.74-.74.74-.75-.33-.75-.74Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M583.26,385.17c.5,0,.91.41.91.91s-.41.91-.91.91-.91-.41-.91-.91.41-.91.91-.91ZM583.26,386.66c.32,0,.58-.26.58-.58s-.26-.58-.58-.58-.58.26-.58.58.26.58.58.58Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <path d="M588.78,391.79c0-.41.33-.74.74-.74s.74.33.74.74-.33.75-.74.75-.74-.33-.74-.75Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M589.53,390.88c.5,0,.91.41.91.91s-.41.91-.91.91-.91-.41-.91-.91.41-.91.91-.91ZM589.53,392.37c.32,0,.58-.26.58-.58s-.26-.58-.58-.58-.58.26-.58.58.26.58.58.58Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                  </g>
                  <g id="Plant1" data-name="Plant" filter="url(#ds-soft)">
                    <path d="M540.54,310.66h46.98c4.24,0,7.68,3.44,7.68,7.68v24.01c0,4.24-3.44,7.68-7.68,7.68h-46.97c-4.24,0-7.68-3.44-7.68-7.68v-24.01c0-4.24,3.44-7.68,7.68-7.68Z" fill="#fff" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M587.56,350.28h-47.05c-4.35,0-7.89-3.54-7.89-7.89v-24.09c0-4.35,3.54-7.89,7.89-7.89h47.05c4.35,0,7.89,3.54,7.89,7.89v24.09c0,4.35-3.54,7.89-7.89,7.89ZM540.5,310.91c-4.08,0-7.39,3.32-7.39,7.39v24.09c0,4.08,3.32,7.39,7.39,7.39h47.05c4.08,0,7.39-3.32,7.39-7.39v-24.09c0-4.08-3.32-7.39-7.39-7.39h-47.05Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g id="Plant2" data-name="Plant" filter="url(#ds-soft)">
                    <g>
                      <path d="M569.44,330.08c0,3.22-2.59,5.84-5.79,5.84s-5.79-2.61-5.79-5.84,2.59-5.84,5.79-5.84,5.79,2.61,5.79,5.84Z" fill="#d5ebd7" stroke="#aac0aa" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M563.65,336.17c-3.33,0-6.03-2.73-6.03-6.09s2.71-6.09,6.03-6.09,6.03,2.73,6.03,6.09-2.71,6.09-6.03,6.09ZM563.65,324.5c-3.05,0-5.54,2.51-5.54,5.59s2.48,5.59,5.54,5.59,5.54-2.51,5.54-5.59-2.48-5.59-5.54-5.59Z" fill="#d5ebd7" stroke="#aac0aa" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <path d="M563.51,328.08c-.25-5.76-3.71-5.23-6.8-5.11-3.09.12-7.91-1-7.04-.37.87.62,1.97,3.5,4.69,6.24,2.72,2.74,9.4,4.98,9.15-.75Z" fill="#d5ebd7" stroke="#aac0aa" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M560.53,331.91c-2.12,0-4.78-1.31-6.35-2.9-1.63-1.64-2.68-3.33-3.45-4.56-.5-.8-.89-1.43-1.2-1.65-.23-.16-.23-.32-.19-.42.12-.3.48-.27,2.4-.02,1.45.18,3.44.44,4.96.37l.54-.02c1.81-.09,3.68-.17,4.97,1.01.95.86,1.45,2.29,1.54,4.36h0c.1,2.27-.88,3.19-1.72,3.56-.45.19-.96.28-1.51.28ZM550.1,322.67c.31.35.64.87,1.05,1.52.76,1.21,1.79,2.87,3.38,4.47,1.86,1.88,5.38,3.35,7.31,2.51,1.01-.44,1.49-1.48,1.42-3.08h0c-.08-1.93-.53-3.25-1.38-4.02-1.14-1.04-2.91-.96-4.61-.88l-.55.02c-1.57.06-3.58-.19-5.05-.38-.58-.07-1.18-.15-1.57-.18Z" fill="#d5ebd7" stroke="#aac0aa" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <path d="M563.64,329.83c-2.89-1.03-3.97-5.78-1.49-10.15,2.48-4.37,5.63-5.51,4.66-4.08-.97,1.43,1.53,4.22,2.15,7.12.62,2.89-2.62,8.08-5.32,7.12Z" fill="#d5ebd7" stroke="#aac0aa" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M564.31,330.19c-.26,0-.51-.04-.76-.13h0c-1.16-.41-2.08-1.4-2.59-2.78-.85-2.28-.49-5.17.97-7.73,1.76-3.1,3.98-4.79,4.86-4.79h.01c.24,0,.35.14.39.22.1.19.04.43-.18.75-.49.73.12,2,.84,3.46.51,1.06,1.09,2.25,1.35,3.46.41,1.93-.79,4.93-2.63,6.54-.75.66-1.53.99-2.26.99ZM563.72,329.59c.96.34,1.9-.23,2.52-.77,1.69-1.48,2.85-4.31,2.48-6.06-.25-1.15-.81-2.32-1.31-3.35-.78-1.61-1.45-3-.8-3.96.06-.08.09-.14.11-.19-.55.1-2.56,1.38-4.35,4.53-1.38,2.43-1.73,5.16-.93,7.31.46,1.24,1.28,2.12,2.29,2.48h0Z" fill="#d5ebd7" stroke="#aac0aa" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <path d="M564.4,331.97c1.66-1.88.63-2.38,2.51-2.69,1.88-.32,5.02.48,6.12,2.3s4.16,6.81,3.53,6.33c-.63-.48-4.47-1.35-5.96-1.11-1.49.24-8.16-2.61-6.2-4.83Z" fill="#d5ebd7" stroke="#aac0aa" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M576.63,338.18c-.06,0-.13-.02-.21-.08-.55-.41-4.29-1.3-5.77-1.06-1.25.19-5.59-1.52-6.61-3.38-.37-.67-.3-1.31.19-1.86.66-.75.88-1.26,1.03-1.64.26-.62.44-.93,1.62-1.13,1.86-.31,5.19.45,6.37,2.41l.39.65c3.48,5.75,3.4,5.82,3.17,6.03-.02.02-.09.07-.18.07ZM571.21,336.51c1.49,0,3.86.5,4.98.94-.58-1.13-2.21-3.83-2.98-5.1l-.39-.65c-1.07-1.78-4.14-2.47-5.87-2.18-.97.16-1.03.32-1.25.83-.17.41-.4.97-1.12,1.78h0c-.35.39-.39.81-.12,1.29.92,1.67,5,3.31,6.1,3.12.19-.03.41-.04.65-.04Z" fill="#d5ebd7" stroke="#aac0aa" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <path d="M564.11,330.25c-1.87-3.79.88-6.13,4.84-6.35,2.56-.14,4.37.17,6.17.25,1.86.09,2.97-.54,3.4-.37,1,.38-1.14,2.17-2.13,3.22-.99,1.05-1.62,2.44-4.32,3.83-2.69,1.4-6.56,2.27-7.97-.58Z" fill="#d5ebd7" stroke="#aac0aa" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M567.45,332.37c-.55,0-1.06-.07-1.51-.22-.92-.3-1.62-.91-2.05-1.8h0c-.78-1.58-.83-3.04-.14-4.22.85-1.45,2.74-2.36,5.19-2.49,1.79-.1,3.25.02,4.54.13.57.05,1.11.09,1.66.12,1.06.05,1.86-.14,2.44-.27.48-.11.79-.18,1.04-.09.28.11.38.3.41.44.12.59-.63,1.39-1.8,2.54-.24.23-.46.46-.65.65-.23.24-.44.5-.66.78-.72.9-1.62,2.01-3.73,3.11-1.67.87-3.35,1.33-4.74,1.33ZM564.33,330.14c.38.76.97,1.28,1.76,1.54,1.45.48,3.65.07,5.87-1.08,2.02-1.05,2.84-2.07,3.57-2.98.23-.28.44-.55.68-.81.19-.2.42-.43.66-.66.65-.64,1.74-1.71,1.66-2.08,0-.01,0-.04-.1-.08-.1-.04-.42.03-.75.11-.58.13-1.45.33-2.58.28-.55-.03-1.1-.07-1.68-.12-1.33-.11-2.71-.23-4.47-.13-2.28.13-4.03.94-4.79,2.24-.6,1.03-.55,2.32.16,3.75h0Z" fill="#d5ebd7" stroke="#aac0aa" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <path d="M562.26,329.9c-3.6,1.39-6.48.93-7.02,3.41-.54,2.48-1.39,7.31-2.26,7.44-.86.13,2.17,1.16,3.79-.6,1.62-1.77,7.59-3.29,7.35-6.02-.24-2.74.18-5.01-1.86-4.22Z" fill="#d5ebd7" stroke="#aac0aa" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M554.21,341.42c-.58,0-1.07-.11-1.34-.24-.26-.13-.3-.28-.28-.39.02-.11.09-.24.36-.28.56-.1,1.42-4.23,1.79-5.99.09-.45.18-.88.26-1.25.4-1.83,1.98-2.2,3.97-2.67.96-.22,2.04-.48,3.2-.93h0c.59-.23,1.04-.23,1.38-.01.63.41.68,1.52.73,2.91.02.48.04,1,.09,1.53.17,1.91-2.33,3.22-4.52,4.38-1.2.63-2.34,1.23-2.89,1.83-.77.84-1.86,1.1-2.75,1.1ZM553.35,340.82c.69.17,2.26.22,3.24-.84.61-.67,1.79-1.29,3.03-1.94,2.06-1.08,4.4-2.31,4.26-3.9-.05-.54-.07-1.07-.09-1.56-.05-1.2-.09-2.24-.51-2.52-.19-.12-.5-.1-.93.06-1.19.46-2.29.72-3.27.95-1.97.46-3.27.77-3.6,2.29-.08.37-.17.8-.26,1.25-.76,3.68-1.26,5.64-1.87,6.21Z" fill="#d5ebd7" stroke="#aac0aa" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <path d="M563.86,329.83c.06-.25,1.17-1.61,4.17-2.41,3.01-.8,4.66-.8,4.66-.8l-8.84,3.22Z" fill="#d5ebd7" stroke="#aac0aa" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M564.1,329.89l-.48-.13c.1-.39,1.36-1.79,4.35-2.59,3-.8,4.66-.81,4.73-.81v.5s-1.67.01-4.6.8c-2.86.77-3.92,2.04-4,2.24Z" fill="#d5ebd7" stroke="#aac0aa" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <path d="M563.41,330.11c-1.4.41-2.5,2.55-3.36,3.64-.86,1.09-1.99,1.98-2.85,2.71-.86.73-1.08,1.6-1.08,1.6l7.29-7.95Z" fill="#d5ebd7" stroke="#aac0aa" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M556.36,338.12l-.48-.12s.24-.96,1.16-1.73l.36-.31c.81-.68,1.73-1.45,2.45-2.37.21-.26.43-.59.67-.93.75-1.09,1.68-2.45,2.82-2.79l.14.48c-.97.28-1.85,1.56-2.55,2.59-.24.35-.47.69-.69.96-.76.96-1.74,1.78-2.52,2.44l-.36.3c-.78.67-.99,1.46-1,1.47Z" fill="#d5ebd7" stroke="#aac0aa" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                    <g>
                      <path d="M553.86,324.88c2.68,1.53,3.76,2.68,5.39,3.34,1.63.66,4.16,1.52,4.16,1.52l-9.55-4.86Z" fill="#d5ebd7" stroke="#aac0aa" stroke-miterlimit="10" stroke-width=".25" />
                      <path d="M563.34,329.98s-2.56-.87-4.18-1.53c-.91-.37-1.63-.87-2.55-1.51-.77-.54-1.65-1.15-2.87-1.84l.25-.43c1.24.71,2.13,1.32,2.91,1.87.89.62,1.6,1.11,2.45,1.46,1.6.65,4.12,1.51,4.15,1.52l-.16.47Z" fill="#d5ebd7" stroke="#aac0aa" stroke-miterlimit="10" stroke-width=".25" />
                    </g>
                  </g>
                  <g>
                    <rect x="484.21" y="389.58" width="27.18" height="22.14" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M511.54,411.93h-27.48v-22.56s27.48,0,27.48,0v22.56ZM484.35,411.52h26.89s0-21.72,0-21.72h-26.89s0,21.72,0,21.72Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                </g>
              </g>
              <g id="kitchen-counter">
                <rect x="362.3" y="489.45" width="35.2" height="28.42" fill="#dbe7ee" />
                <polygon points="360.33 490.42 360.33 517.87 255.22 517.87 255.22 206.46 281.36 206.46 281.36 490.42 360.33 490.42" fill="#dbe7ee" />
                <circle cx="273.79" cy="379.71" r="4.43" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <circle cx="261.25" cy="379.71" r="3.76" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <circle cx="261.25" cy="392.29" r="3.76" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <circle cx="261.25" cy="404.62" r="3.76" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <circle cx="273.8" cy="404.62" r="4.69" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <circle cx="274.58" cy="389.77" r="1.58" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <circle cx="274.58" cy="394.61" r="1.58" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <circle cx="278.08" cy="387.59" r="1.58" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <circle cx="278.08" cy="392.59" r="1.58" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <circle cx="278.08" cy="397.05" r="1.58" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <line x1="281.36" y1="206.46" x2="281.36" y2="490.67" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <line x1="360.33" y1="490.42" x2="281.36" y2="490.42" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <line x1="360.33" y1="520.34" x2="360.33" y2="490.42" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <line x1="255.54" y1="412.4" x2="281.36" y2="412.4" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <line x1="255.54" y1="372.18" x2="281.36" y2="372.18" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <rect id="island" x="362.3" y="489.45" width="35.2" height="27.41" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <g id="island1" data-name="island">
                  <rect x="335.05" y="339.3" width="52.29" height="95.28" fill="#dbe7ee" />
                  <g id="sink5" data-name="sink">
                    <path d="M354.95,392.28h-16.69c-.7.14-1.08.52-1.15,1.15v13.33c.07.7.45,1.08,1.15,1.15h16.69c.7-.07,1.08-.45,1.15-1.15v-13.33c-.07-.63-.45-1.01-1.15-1.15Z" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M344.24,400.15c0,.63.24,1.15.73,1.57.42.42.94.66,1.57.73.7,0,1.26-.24,1.68-.73.42-.42.63-.94.63-1.57,0-.7-.21-1.26-.63-1.68s-.98-.63-1.68-.63c-.63,0-1.15.21-1.57.63-.49.42-.73.98-.73,1.68Z" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M355.47,390.49c.35-.21.56-.56.63-1.05v-13.22c-.07-.7-.45-1.08-1.15-1.15h-16.69c-.7.07-1.08.45-1.15,1.15v13.22c.07.7.45,1.08,1.15,1.15h13.44l-3.04-.94c-.35-.14-.49-.38-.42-.73.14-.35.38-.49.73-.42l6.51,1.99,2.31.63v-4.2l2.31-.1v9.24h-2.31v-3.67l-6.09-1.78" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M335.32,373.59v35.69c.07.7.45,1.08,1.15,1.15h23.09c.7-.07,1.08-.45,1.15-1.15v-35.69c-.07-.7-.45-1.08-1.15-1.15h-23.09c-.7.07-1.08.45-1.15,1.15Z" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M344.24,382.83c0,.63.24,1.15.73,1.57.42.42.94.66,1.57.73.7,0,1.26-.24,1.68-.73.42-.42.63-.94.63-1.57s-.21-1.19-.63-1.68c-.42-.42-.98-.63-1.68-.63-.63,0-1.15.21-1.57.63-.49.49-.73,1.05-.73,1.68Z" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M357.99,394.37c.07.63.38.98.94,1.05.63-.14.94-.49.94-1.05-.07-.56-.38-.87-.94-.94-.56.07-.87.38-.94.94Z" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M357.78,392.38l.52.21c.35.07.56-.07.63-.42.14-.35.04-.59-.31-.73l-.84-.31" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                    <path d="M357.99,388.5c.07.63.38.98.94,1.05.63-.14.94-.49.94-1.05-.07-.56-.38-.87-.94-.94-.56.07-.87.38-.94.94Z" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                  </g>
                  <g>
                    <polyline points="360.72 369.76 360.72 371.26 359.22 371.26" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                    <line x1="356.53" y1="371.26" x2="336.35" y2="371.26" fill="none" stroke="#3e5665" stroke-dasharray="2.69 2.69" stroke-miterlimit="10" stroke-width=".5" />
                    <polyline points="335 371.26 333.5 371.26 333.5 369.76" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                    <line x1="333.5" y1="367.07" x2="333.5" y2="346.89" fill="none" stroke="#3e5665" stroke-dasharray="2.69 2.69" stroke-miterlimit="10" stroke-width=".5" />
                    <polyline points="333.5 345.54 333.5 344.04 335 344.04" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                    <line x1="337.69" y1="344.04" x2="357.88" y2="344.04" fill="none" stroke="#3e5665" stroke-dasharray="2.69 2.69" stroke-miterlimit="10" stroke-width=".5" />
                    <polyline points="359.22 344.04 360.72 344.04 360.72 345.54" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                    <line x1="360.72" y1="348.23" x2="360.72" y2="368.42" fill="none" stroke="#3e5665" stroke-dasharray="2.69 2.69" stroke-miterlimit="10" stroke-width=".5" />
                  </g>
                  <rect x="335.32" y="339.53" width="52.01" height="95.06" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                  <g>
                    <polyline points="362.11 341.03 362.11 339.53 363.61 339.53" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                    <line x1="366.13" y1="339.53" x2="369.9" y2="339.53" fill="none" stroke="#3e5665" stroke-dasharray="2.51 2.51" stroke-miterlimit="10" stroke-width=".5" />
                    <polyline points="371.15 339.53 372.65 339.53 372.65 341.03" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                    <line x1="372.65" y1="343.99" x2="372.65" y2="431.6" fill="none" stroke="#3e5665" stroke-dasharray="2.97 2.97" stroke-miterlimit="10" stroke-width=".5" />
                    <polyline points="372.65 433.08 372.65 434.58 371.15 434.58" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                    <line x1="368.64" y1="434.58" x2="364.87" y2="434.58" fill="none" stroke="#3e5665" stroke-dasharray="2.51 2.51" stroke-miterlimit="10" stroke-width=".5" />
                    <polyline points="363.61 434.58 362.11 434.58 362.11 433.08" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                    <line x1="362.11" y1="430.11" x2="362.11" y2="342.51" fill="none" stroke="#3e5665" stroke-dasharray="2.97 2.97" stroke-miterlimit="10" stroke-width=".5" />
                  </g>
                </g>
              </g>
              <g id="mbr-shr-1">
                <polygon points="911.17 526.83 862.4 526.83 862.4 474.11 858.11 474.11 858.11 393.88 911.17 393.88 911.17 526.83" fill="#dbe7ee" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <line x1="858.11" y1="393.88" x2="858.11" y2="472.98" fill="none" stroke="#3e5665" stroke-miterlimit="10" />
                <line x1="914.81" y1="472.98" x2="858.7" y2="472.98" fill="none" stroke="#3e5665" stroke-miterlimit="10" />
                <circle cx="882.17" cy="500.65" r="2.09" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <line x1="866.02" y1="476.42" x2="880.92" y2="498.56" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <line x1="898.32" y1="476.42" x2="883.7" y2="498.56" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <line x1="883.7" y1="502.74" x2="898.32" y2="524.46" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <line x1="880.92" y1="502.74" x2="866.02" y2="524.46" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <rect x="865.26" y="475.24" width="34" height="51.02" rx="3.06" ry="3.06" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <rect x="862.4" y="472.98" width="38.15" height="53.84" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <ellipse cx="884.63" cy="433.17" rx="22.86" ry="33.13" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".75" />
                <ellipse cx="884.63" cy="433.17" rx="20.49" ry="29.69" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <ellipse cx="884.63" cy="433.17" rx="19.3" ry="27.96" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <circle cx="884.99" cy="411.25" r="1.95" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <path d="M881.14,451.51c-1.86-.3-3.58-.98-4.93-2.41-1.45-1.53-2.06-3.67-2.28-5.76-.29-2.82-.16-5.7-.27-8.53-.14-3.62.8-26.37,8.1-23.74.82.3,1.34,1.09,2.02,1.63,2.36,1.88,2.56-2.19,4.81-1.83,1.04.17,1.86.93,2.62,1.66,3,2.9,3.39,7.09,3.78,11.02.47,4.62,1.08,9.31,1.18,13.97.08,3.84-.01,8.28-1.99,11.68-.45.77-1.03,1.51-1.83,1.92-.88.45-1.91.46-2.89.46-2.57,0-5.6.36-8.33-.08Z" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
              </g>
              <rect x="248.1" y="65.55" width=".1" height="3.67" fill="#3e5665" />
              <g id="sec-tub">
                <rect x="495.89" y="572.36" width="66.11" height="32.63" fill="#dbe7ee" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <rect x="495.89" y="572.36" width="66.11" height="32.63" fill="#dbe7ee" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5" />
                <path d="M512.26,574.4h41.85c2.76,0,5,2.24,5,5v16.63c0,2.76-2.24,5-5,5h-43.89c-6.79,0-12.3-5.51-12.3-12.3h0c0-7.91,6.42-14.34,14.34-14.34Z" fill="none" stroke="#3e5665" stroke-miterlimit="10" />
                <line x1="495.89" y1="604.99" x2="562" y2="604.99" fill="none" stroke="#3e5665" stroke-miterlimit="10" />
              </g>
              <circle cx="552.5" cy="588.5" r="1.05" fill="#3e5665" />
              <polyline points="562 588.07 556.75 586.08 556.75 591.33 562.33 589.21" fill="#3e5665" />
              <g id="End_table" filter="url(#ds-soft)">
                <rect x="629.74" y="531.73" width="79.9" height="21.99" transform="translate(1212.42 -126.97) rotate(90)" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                <path d="M658.49,583.1v-80.76s22.41,0,22.41,0v80.76s-22.41,0-22.41,0ZM658.9,503.2v79.04s21.58,0,21.58,0v-79.04s-21.58,0-21.58,0Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
              </g>
              <g id="Primary_Bed" filter="url(#ds-soft)">
                <line x1="846.42" y1="333.74" x2="846.42" y2="333.74" fill="#e7d0b2" stroke="#d1b592" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25" />
                <line x1="832.72" y1="333.74" x2="832.72" y2="333.74" fill="#e7d0b2" stroke="#d1b592" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25" />
                <g>
                  <path d="M857.26,293.04h87.95c2.18,0,3.96,1.77,3.96,3.96h0c0,2.18-1.77,3.96-3.96,3.96h-87.95c-2.18,0-3.96-1.77-3.96-3.96h0c0-2.18,1.77-3.96,3.96-3.96Z" transform="translate(1198.24 -604.24) rotate(90)" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M897.07,341.56v-89.13c0-1.97,1.61-3.58,3.58-3.58h1.18c1.97,0,3.58,1.61,3.58,3.58v89.13c0,1.97-1.61,3.58-3.58,3.58h-1.18c-1.97,0-3.58-1.61-3.58-3.58ZM904.98,252.44c0-1.74-1.42-3.16-3.16-3.16h-1.18c-1.74,0-3.16,1.42-3.16,3.16v89.13c0,1.74,1.42,3.16,3.16,3.16h1.18c1.74,0,3.16-1.42,3.16-3.16v-89.13Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <rect x="814.39" y="257.26" width="85.67" height="79.79" transform="translate(1154.38 -560.06) rotate(90)" fill="#fff" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M817.11,340.2v-86.09h80.22v86.09h-80.22ZM817.54,254.54v85.24h79.37v-85.24h-79.37Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M876.41,291.93c-.2-.25-.17-1.91-.36-4.91-.18-2.8-.58-6.83-.54-10.46.06-5.16.54-9.22.74-12.37.12-1.88-.16-4.01.16-4.25.24-.19,2.04.12,3.93.01,4.71-.27,12.09-.69,12.97-.01.46.36.18,2.48.34,4.54.26,3.42.56,7.66.67,10.59.11,2.92-.4,8.05-.72,12.05-.17,2.15,0,4.61-.29,4.8-.21.13-1.71-.09-3.4.06-1.21.11-3.48.52-4.94.51-4.65-.05-7.73.44-8.56-.57Z" fill="#f5f3ef" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M875.3,277.12c0-.19,0-.37,0-.56.04-3.71.31-6.93.52-9.51.08-1.03.16-1.99.22-2.87.05-.77.03-1.58.01-2.3-.03-1.31-.03-1.9.23-2.1.18-.13.55-.12,1.45-.07.73.04,1.65.09,2.6.04h.09c6.37-.37,12.16-.64,13.03.03.36.28.38,1.03.37,2.47,0,.68,0,1.46.06,2.22.24,3.16.56,7.56.67,10.6.09,2.4-.24,6.34-.53,9.81-.06.78-.13,1.54-.19,2.26-.07.87-.08,1.8-.09,2.61-.02,1.62-.04,2.19-.3,2.35-.14.09-.39.09-1.09.06-.63-.02-1.49-.05-2.41.03-.4.04-.93.11-1.5.18-1.16.16-2.48.34-3.47.33-1.32-.01-2.52.01-3.58.04-2.8.07-4.49.11-5.15-.69h0c-.17-.21-.2-.73-.27-2.37-.03-.72-.07-1.61-.14-2.66-.04-.7-.1-1.47-.16-2.29-.18-2.38-.38-5.06-.38-7.63ZM876.49,263.06c0,.38,0,.77-.03,1.15-.06.89-.14,1.84-.22,2.88-.21,2.57-.47,5.78-.52,9.48-.03,2.71.18,5.6.37,8.15.06.82.12,1.59.16,2.29.07,1.06.1,1.95.14,2.67.05,1.06.09,1.97.18,2.12.53.64,2.32.59,4.81.53,1.06-.03,2.26-.06,3.59-.04.96.01,2.26-.17,3.41-.32.58-.08,1.11-.15,1.51-.19.94-.09,1.82-.05,2.46-.03.38.01.77.03.86,0,.06-.13.08-1.12.09-1.99.01-.82.02-1.75.09-2.64.06-.72.12-1.49.19-2.26.29-3.46.62-7.38.53-9.76-.11-3.03-.42-7.43-.67-10.58-.06-.78-.06-1.56-.06-2.26,0-.92,0-1.97-.2-2.13-.81-.63-8.58-.18-12.75.05h-.09c-.97.06-1.94,0-2.65-.03-.5-.03-1.07-.06-1.18-.01-.08.13-.06,1.02-.05,1.74,0,.38.02.78.02,1.19Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M876.41,331.04c-.2-.25-.17-1.91-.36-4.91-.18-2.81-.58-6.83-.54-10.46.06-5.16.54-9.22.74-12.37.12-1.88-.16-4.01.16-4.25.24-.19,2.04.12,3.93.01,4.71-.27,12.09-.69,12.97-.01.46.36.18,2.48.34,4.54.26,3.42.56,7.66.67,10.59.11,2.92-.4,8.05-.72,12.05-.17,2.15,0,4.61-.29,4.8-.21.13-1.71-.09-3.4.06-1.21.11-3.48.53-4.94.51-4.65-.05-7.73.44-8.56-.57Z" fill="#f5f3ef" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M875.3,316.23c0-.19,0-.37,0-.56.04-3.71.31-6.93.52-9.51.08-1.03.16-1.99.22-2.87.05-.77.03-1.58.01-2.3-.03-1.31-.03-1.9.23-2.1.18-.13.55-.12,1.45-.07.73.04,1.65.09,2.6.04h.08c6.38-.37,12.17-.64,13.04.03.36.28.38,1.04.37,2.47,0,.69,0,1.46.06,2.22.24,3.16.56,7.56.67,10.6.09,2.4-.24,6.34-.53,9.81-.06.78-.13,1.54-.19,2.26-.07.87-.08,1.8-.09,2.61-.02,1.62-.04,2.19-.3,2.35-.14.09-.39.09-1.09.06-.63-.02-1.49-.05-2.41.03-.4.04-.93.11-1.5.18-1.16.16-2.48.34-3.47.33-1.32-.01-2.52.01-3.57.04-2.8.07-4.49.11-5.15-.69h0c-.17-.21-.2-.73-.27-2.37-.03-.72-.07-1.61-.14-2.66-.04-.7-.1-1.47-.16-2.29-.18-2.38-.38-5.06-.38-7.63ZM876.49,302.17c0,.38,0,.77-.03,1.15-.06.89-.14,1.84-.22,2.88-.21,2.57-.47,5.78-.52,9.48-.03,2.71.18,5.61.37,8.15.06.82.12,1.59.16,2.29.07,1.06.1,1.95.14,2.67.05,1.05.09,1.97.18,2.12.53.64,2.32.59,4.81.53,1.06-.03,2.26-.06,3.59-.04.95,0,2.26-.17,3.41-.32.58-.08,1.11-.15,1.52-.19.94-.09,1.82-.05,2.46-.03.38.01.77.03.86,0,.06-.13.08-1.12.09-1.99.01-.82.02-1.75.09-2.64.06-.72.12-1.49.19-2.26.29-3.46.62-7.39.53-9.76-.11-3.03-.42-7.43-.67-10.58-.06-.78-.06-1.57-.06-2.26,0-.93,0-1.97-.2-2.13-.81-.63-8.58-.18-12.75.05h-.08c-.97.06-1.94,0-2.65-.03-.5-.03-1.07-.06-1.18-.01-.08.13-.06,1.02-.05,1.74,0,.38.02.78.02,1.19Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M851.53,253.1c-2.41.2-34.15-.8-35.56.8-1.41,1.61-1.81,86.58.4,86.98,2.21.4,40.18.8,41.38-.6.66-.77,2.87-26.7,1-50.02-1.57-19.53-7.23-37.16-7.23-37.16Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M814.61,297.71c0-.67,0-1.34,0-2.01.02-16.33.36-40.98,1.21-41.94,1-1.15,13.99-1.08,28.37-.9,3.73.05,6.68.08,7.33.03h.17s.05.15.05.15c.06.18,5.69,17.88,7.24,37.21,1.85,22.98-.22,49.2-1.05,50.17-.57.67-7.46,1.02-20.48,1.05-9.46.02-19.92-.16-21.11-.38-.2-.04-.31-.26-.37-.45-1.01-2.88-1.36-24.47-1.36-42.93ZM851.38,253.32c-.9.04-3.58,0-7.2-.04-8.79-.11-27.09-.33-28.04.76-.6.92-1.1,20.38-1.1,43.38-.01,25.05.57,42.46,1.43,43.27,2.19.39,39.9.7,41.14-.55.63-1.03,2.79-27.02.95-49.86-1.47-18.31-6.61-35.16-7.17-36.96Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M879.39,278.35c.31-.51.98-.85,1.49-.4.44.38.35,1.1.6,1.48,4.04,6.13,4.64,9.99,4.64,11.36s.46,2.23.63,2.73c.3.86-.55.92-1.53.71-.99-.21-2.43.86-4.07,2.02-1.64,1.16-4.3.97-5.29,1.81-.99.84-1.25,1.23-1.76.99-.51-.23-.57-.68-.67-1.52-.1-.84-3.79-6.53-3.79-9.06s-.44-4-1.1-4.84c-.66-.84-.11-1.58.77-1.26.88.32,2.41-1.25,3.96-1.94.92-.4,5.44-.96,6.11-2.07Z" fill="#f5f3ef" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M868.05,282.9c0-.2.06-.37.15-.5.24-.33.7-.43,1.19-.25.44.16,1.22-.35,2.04-.9.57-.38,1.16-.77,1.77-1.03.31-.14.94-.28,1.75-.45,1.54-.34,3.86-.85,4.27-1.53h0c.23-.38.61-.64.99-.7.3-.05.59.04.83.25.31.27.4.66.47,1.01.04.2.09.39.16.51,4.34,6.58,4.67,10.44,4.67,11.47,0,1.09.3,1.85.51,2.36.04.11.08.21.12.3.12.34.09.62-.08.81-.26.3-.83.36-1.7.17-.84-.18-2.19.78-3.63,1.79l-.28.19c-.91.64-2.1.88-3.16,1.1-.87.18-1.7.34-2.12.7-.18.15-.33.29-.47.41-.63.56-.97.86-1.52.62-.62-.28-.69-.84-.79-1.69-.03-.25-.51-1.16-1.02-2.12-1.17-2.21-2.77-5.23-2.77-6.96,0-2.23-.35-3.82-1.05-4.71-.24-.31-.33-.6-.33-.85ZM879.57,278.46c-.51.83-2.75,1.33-4.54,1.72-.75.17-1.4.31-1.67.43-.58.25-1.15.63-1.71,1-.95.63-1.77,1.17-2.42.94-.31-.11-.57-.07-.7.1-.14.19-.08.51.17.83.77.98,1.14,2.61,1.14,4.98,0,1.62,1.64,4.72,2.72,6.76.68,1.28,1.03,1.96,1.07,2.27.1.83.16,1.17.55,1.35.27.12.41.03,1.06-.55.14-.12.29-.26.47-.42.5-.43,1.34-.6,2.31-.8,1.01-.21,2.16-.44,3-1.03l.27-.19c1.58-1.12,2.94-2.08,3.96-1.86.99.21,1.24.03,1.29-.03.08-.09.04-.26,0-.39-.03-.08-.07-.18-.11-.28-.21-.53-.54-1.34-.54-2.52,0-1-.33-4.76-4.6-11.24-.12-.19-.17-.42-.23-.65-.06-.29-.13-.6-.34-.78-.14-.12-.31-.17-.48-.15-.25.04-.52.24-.69.5h0Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M855.87,341.97c-.12-.04-.23-.06-.34-.1-.4-.13-.69-.29-.84-.48-.46-.58-.15-3.7.38-8.56.01-.12.02-.23.04-.35.27-2.48.58-5.39.88-8.62,0-.12.02-.24.03-.36.22-2.41.43-5,.59-7.73,0-.11.01-.23.02-.35.15-2.48.26-5.06.31-7.74,0-.12,0-.23,0-.35.04-2.38.04-4.81-.03-7.29,0-.11,0-.23,0-.35-.05-1.9-.14-3.83-.27-5.78-.05-.77-.11-1.53-.17-2.28,0-.11-.02-.23-.03-.34-.21-2.56-.45-5.03-.73-7.4-.01-.12-.03-.23-.03-.35-.34-2.8-.71-5.47-1.08-7.98-.02-.11-.03-.23-.06-.34-.45-2.99-.91-5.75-1.33-8.24-.02-.12-.04-.23-.06-.34-.48-2.79-.91-5.24-1.22-7.29-.02-.12-.04-.24-.06-.36-.62-4.19-.71-6.6.36-6.72.54-.06,1.4-.12,2.44-.17.12,0,.24-.01.36-.01,4.61-.24,12.35-.38,13.64-.12.66.13,1.24,2.28,1.77,5.83.01.12.04.24.05.36.28,1.97.54,4.35.78,7.03,0,.12.02.23.03.35.21,2.41.4,5.06.57,7.89,0,.11.01.23.02.35.14,2.31.27,4.73.38,7.23,0,.12.01.24.01.36.13,2.79.24,5.67.34,8.58,0,.12,0,.23.01.35.08,2.79.16,5.62.22,8.44,0,.12,0,.24.01.35.05,2.4.08,4.78.11,7.12v.35c.03,2.92.05,5.78.04,8.53v.36c0,3.24-.04,6.32-.11,9.14,0,.12,0,.24,0,.35-.07,3.09-.17,5.87-.31,8.23,0,.12-.01.24-.02.36-.29,4.74-.71,7.71-1.29,7.88-1.59.48-5.26.87-8.75.97-.13,0-.25,0-.38,0-2.51.06-4.88-.06-6.28-.4Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M851.21,254.39c0-1.01.14-1.63.41-1.98.16-.2.36-.32.6-.35.49-.06,1.27-.11,2.45-.18.12,0,.24-.01.37-.01,4.45-.23,12.34-.38,13.68-.11.5.1,1.18.88,1.94,6.01l.02.17c0,.06.02.13.03.19.27,1.9.53,4.27.78,7.04,0,.06,0,.12.01.17,0,.06.01.12.01.18.2,2.27.38,4.85.57,7.89l.02.35c.14,2.26.26,4.69.38,7.23,0,.12.01.24.01.37.13,2.72.24,5.61.34,8.57,0,.06,0,.12,0,.18v.16c.11,3.3.17,5.98.22,8.45v.17c0,.06.01.11.01.17.05,2.41.08,4.79.11,7.13v.35c.03,2.89.05,5.76.04,8.53v.36c0,3.26-.04,6.34-.11,9.15h0c0,.06,0,.12,0,.18v.16c-.07,3.08-.18,5.85-.31,8.24l-.02.36c-.47,7.78-1.15,7.98-1.44,8.07-1.59.48-5.21.88-8.81.98h-.19c-.06,0-.13,0-.19,0-2.77.06-5.02-.08-6.33-.41l-.14-.04c-.07-.02-.15-.04-.21-.06-.47-.16-.77-.33-.94-.55-.49-.61-.27-3.13.34-8.72v-.11c.02-.08.03-.16.04-.25l.05-.48c.26-2.39.55-5.1.83-8.13l.03-.35c.24-2.58.44-5.18.59-7.73l.02-.35c.16-2.73.26-5.25.31-7.73h0c0-.06,0-.12,0-.18v-.17c.05-2.61.04-4.99-.02-7.29,0-.11,0-.23,0-.34-.05-1.92-.14-3.86-.27-5.77-.03-.53-.07-1.05-.11-1.57l-.08-1.06c-.21-2.56-.46-5.04-.73-7.39-.02-.13-.03-.24-.04-.36-.3-2.46-.64-5-1.07-7.96,0-.05-.02-.11-.03-.17l-.03-.16c-.46-3.07-.93-5.89-1.34-8.25l-.39-2.27c-.35-2.04-.65-3.8-.89-5.36-.02-.13-.04-.25-.06-.36-.31-2.07-.46-3.57-.46-4.63ZM872.8,313.73c0-2.35-.01-4.76-.04-7.18v-.35c-.03-2.34-.06-4.72-.11-7.11,0-.05,0-.11,0-.17v-.17c-.06-2.47-.13-5.16-.22-8.45v-.34c-.11-2.97-.22-5.85-.35-8.58,0-.12,0-.24-.01-.35-.11-2.54-.24-4.98-.38-7.23l-.02-.35c-.19-3.03-.38-5.61-.57-7.88,0-.06,0-.12-.01-.17,0-.06-.01-.12-.01-.18-.24-2.76-.5-5.12-.77-7.02,0-.06-.02-.12-.02-.18l-.02-.18c-.73-4.95-1.36-5.6-1.6-5.65-1.26-.25-9.12-.11-13.58.12-.13,0-.24,0-.35.01-1.17.06-1.94.12-2.43.17-.13.01-.23.07-.31.18-.59.77-.26,3.61.14,6.29.01.11.03.22.05.33.24,1.58.54,3.34.89,5.37l.39,2.27c.4,2.36.88,5.18,1.34,8.25,0,.05.02.11.03.17,0,.06.02.11.03.17.44,2.97.78,5.51,1.08,7.99,0,.12.02.22.03.33.28,2.37.53,4.86.74,7.42l.08,1.06c.04.52.08,1.05.11,1.57.13,1.92.22,3.87.27,5.79,0,.12,0,.24,0,.35.06,2.3.07,4.69.03,7.3h0c0,.06,0,.12,0,.18v.17c-.05,2.49-.15,5.02-.31,7.75l-.02.35c-.15,2.55-.35,5.15-.59,7.73l-.03.35c-.28,3.03-.57,5.74-.83,8.14l-.05.49c-.01.09-.02.16-.03.23v.12c-.43,3.87-.87,7.87-.44,8.41.11.14.36.28.74.41.06.02.13.04.19.06l.13.04c1.27.32,3.48.46,6.22.4h.19c.06,0,.13,0,.19,0,3.5-.1,7.16-.5,8.69-.96.12-.04.71-.61,1.14-7.69l.02-.36c.13-2.39.24-5.15.31-8.22v-.34c.07-2.81.11-5.88.11-9.14v-.36c0-.45,0-.9,0-1.35Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <path d="M851.94,259.35c-.02-.12-.04-.24-.06-.36.8-.17,1.61-.33,2.41-.48.12-.02.24-.05.36-.07h0c2.7-.52,5.46-.94,8.2-1.08.12,0,.24-.01.36-.01,2.42-.11,4.84,0,7.23.45.01.12.04.24.05.36-2.4-.45-4.81-.57-7.21-.46-.12,0-.24,0-.36.01-2.77.14-5.53.56-8.27,1.09-.12.02-.24.04-.35.06-.8.15-1.58.31-2.37.49Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                <path d="M853.21,266.98c-.02-.12-.04-.23-.06-.34.74-.04,1.49-.09,2.23-.13.12,0,.23-.01.35-.03,2.84-.17,5.67-.38,8.5-.63.12,0,.23-.01.35-.03,2.23-.19,4.46-.4,6.69-.63,0,.12.02.23.03.35-2.22.23-4.44.44-6.67.63-.11,0-.23.02-.34.03-2.82.24-5.64.45-8.47.63-.12,0-.23.01-.35.02-.75.05-1.5.09-2.24.13Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                <path d="M854.6,275.57c-.02-.11-.03-.23-.06-.34.97-.04,1.93-.08,2.91-.15l.36-.02c2.4-.15,4.8-.37,7.2-.64.11-.01.23-.03.35-.04,2.17-.26,4.34-.57,6.51-.94,0,.11.01.23.02.35-2.16.37-4.33.68-6.51.94-.12,0-.23.02-.35.03-2.38.28-4.76.5-7.14.64-.12,0-.24.01-.35.02-.98.06-1.96.11-2.93.15Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                <path d="M855.72,283.89c-.01-.12-.03-.23-.03-.35,1.11-.06,2.23-.15,3.34-.25.11,0,.21-.01.31-.03,2.01-.2,4-.46,5.98-.8.12-.02.24-.03.36-.06,2.21-.38,4.42-.85,6.59-1.4,0,.12.01.24.01.36-2.19.55-4.39,1.02-6.6,1.4-.12.01-.24.03-.36.06-1.97.33-3.95.59-5.94.79-.1,0-.21.02-.31.03-1.12.1-2.24.19-3.35.25Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                <path d="M858.45,291.67c-.66,0-1.31,0-1.98-.03,0-.11-.02-.23-.03-.34.78.02,1.56.03,2.35.03.34,0,.67,0,1.01-.01.12,0,.24,0,.36,0,1.13-.03,2.26-.08,3.39-.15.61-.04,1.21-.09,1.82-.15.12,0,.23-.02.35-.03,2.31-.22,4.62-.57,6.9-1.01,0,.12,0,.23.01.35-2.29.45-4.6.79-6.92,1.02-.12.01-.24.02-.36.03-.63.06-1.26.11-1.89.15-1.1.08-2.19.13-3.29.15-.12,0-.23,0-.35,0-.45,0-.92.01-1.37.01Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                <path d="M856.92,300.04c0-.11,0-.23,0-.35,1.03-.03,2.05-.07,3.08-.12.12,0,.24,0,.36-.01,1.63-.08,3.28-.16,4.91-.27.12,0,.23-.01.35-.02,2.41-.15,4.82-.34,7.23-.54,0,.12,0,.24.01.35-2.42.21-4.83.39-7.25.54-.11,0-.23.01-.34.02-1.63.1-3.28.19-4.91.27-.12,0-.24.01-.36.01-1.02.05-2.05.09-3.07.12Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                <path d="M856.95,307.69c0-.12,0-.23,0-.35.29-.02.57-.04.85-.06.64-.04,1.29-.09,1.93-.13h0c.11-.01.23-.02.35-.03,1.05-.08,2.11-.15,3.17-.22.64-.04,1.28-.09,1.92-.14.11,0,.22-.01.34-.02,2.48-.17,4.97-.35,7.45-.53v.35c-2.49.18-4.97.36-7.46.53-.12,0-.23.02-.34.02-.64.05-1.28.1-1.91.14-1.07.08-2.13.15-3.19.22-.12,0-.24.02-.35.03-.64.04-1.28.09-1.91.13-.29.02-.57.04-.85.06Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                <path d="M865.55,316.02c-.11,0-.22,0-.32,0-.46,0-.91-.02-1.38-.03-1.49-.04-3-.08-4.49-.13-.11,0-.23,0-.34,0-.8-.02-1.6-.05-2.4-.07,0-.11.01-.23.02-.35.8.02,1.61.05,2.42.07.11,0,.23,0,.34,0,1.42.04,2.86.08,4.28.12.51.01,1.03.03,1.54.04h.32c2.51.06,5.03.01,7.47-.59v.36c-2.44.59-4.96.64-7.46.59Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                <path d="M865.64,324.89c-.12,0-.24,0-.36-.02-2.31-.12-4.61-.34-6.9-.65-.12-.01-.23-.03-.34-.05-.68-.09-1.36-.19-2.04-.31,0-.12.02-.24.03-.36.68.12,1.37.22,2.05.31.11.03.23.04.34.05,2.28.31,4.57.53,6.87.65.12,0,.24.01.36.02,2.42.12,4.84.14,7.26.05,0,.12,0,.24,0,.35-2.42.09-4.84.08-7.26-.04Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                <path d="M868.79,333.56c-1.25,0-2.51,0-3.77-.04-.11,0-.22,0-.34,0-1.59-.04-3.18-.1-4.76-.2-.92-.05-1.85-.1-2.77-.2-.12,0-.23-.02-.34-.03-.58-.06-1.15-.15-1.73-.26.01-.12.02-.23.04-.35.57.12,1.15.2,1.74.26.11.01.23.03.34.03.09.01.17.02.27.03,1.77.15,3.54.24,5.32.3.65.03,1.29.05,1.94.06.12,0,.23,0,.35,0,2.51.06,5.02.06,7.52-.01,0,.12-.01.24-.02.36-1.26.03-2.52.05-3.79.05Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                <path d="M862.15,342.37c1.3-2.81,2.07-5.81,2.53-8.86.01-.12.03-.23.05-.35.3-2.13.45-4.29.52-6.43.02-.62.03-1.24.04-1.87,0-.12,0-.24,0-.36.03-2.83-.01-5.67-.06-8.49,0-.12,0-.24,0-.35-.04-2.23-.08-4.46-.07-6.69,0-.63,0-1.25.01-1.88,0-.12,0-.23,0-.35.01-2.37.05-4.74.09-7.1,0-.12,0-.23,0-.35.03-2.65.08-5.3.09-7.95,0-.12,0-.24,0-.36,0-.35,0-.71,0-1.05,0-2.37,0-4.74-.05-7.11,0-.12,0-.24,0-.36-.05-2.57-.14-5.14-.29-7.71,0-.12-.01-.23-.02-.34-.07-1.14-.15-2.28-.24-3.41-.13-1.61-.29-3.21-.48-4.81-.02-.12-.03-.24-.05-.35-.34-2.73-.76-5.44-1.31-8.14-.02-.11-.04-.23-.07-.34-.35-1.73-.75-3.44-1.2-5.15-.06-.22.28-.31.34-.09.2.76.4,1.53.58,2.31.23.97.44,1.94.64,2.92.02.12.05.23.07.34.54,2.69.96,5.4,1.3,8.12.01.12.03.23.04.35.28,2.34.5,4.68.66,7.03.03.39.05.78.08,1.17,0,.11.01.23.02.35.15,2.56.24,5.12.29,7.68,0,.12,0,.24,0,.36.05,2.73.06,5.46.03,8.19,0,.12,0,.24,0,.36,0,.37,0,.73,0,1.1-.02,2.28-.06,4.58-.09,6.86,0,.12,0,.23,0,.35-.03,2.37-.07,4.74-.09,7.1,0,.12,0,.23,0,.35-.01,1.52-.01,3.03-.01,4.55,0,1.35.02,2.69.05,4.04,0,.12,0,.24,0,.36.06,2.84.13,5.67.1,8.51,0,.12,0,.24,0,.36-.02,1.45-.08,2.91-.17,4.36-.08,1.31-.22,2.62-.4,3.93-.02.12-.03.23-.06.35-.45,3.05-1.23,6.04-2.49,8.84-.13,0-.25,0-.38,0Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                <path d="M855.87,341.97c-.12-.04-.23-.06-.34-.1.23-1.58.45-3.16.68-4.74.2-1.35.39-2.7.59-4.04.01-.11.03-.23.06-.35.24-1.7.48-3.4.72-5.1.16-1.16.31-2.31.46-3.47.02-.12.03-.24.04-.36.35-2.65.66-5.31.94-7.96.01-.12.02-.24.03-.35.24-2.4.45-4.81.61-7.22.01-.27.03-.52.05-.79,0-.12.01-.23.02-.35h0c.15-2.41.24-4.81.26-7.22,0-.12,0-.23,0-.35.03-2.64-.03-5.28-.17-7.92,0-.11-.01-.23-.02-.35-.04-.68-.08-1.38-.14-2.06-.15-1.87-.34-3.74-.59-5.6-.01-.12-.03-.23-.05-.35-.17-1.19-.36-2.38-.57-3.56-.27-1.45-.57-2.88-.91-4.31-.03-.11-.06-.23-.08-.34-.36-1.55-.75-3.1-1.15-4.65-.3-1.19-.59-2.38-.85-3.58-.03-.11-.06-.23-.08-.34-.37-1.71-.68-3.43-.89-5.17-.09-.82-.16-1.65-.19-2.47,0-.12-.01-.23-.01-.35-.07-2.14.06-4.29.39-6.41.12,0,.24-.01.36-.01-.12.77-.22,1.54-.29,2.31-.12,1.35-.15,2.7-.11,4.04,0,.12,0,.24,0,.36.08,1.66.26,3.33.54,4.97.15.91.34,1.81.53,2.71.02.12.05.24.08.35.44,1.99.96,3.97,1.46,5.95.19.76.37,1.52.54,2.28.03.12.06.23.08.34.59,2.61,1.08,5.23,1.45,7.87.02.12.04.23.05.35.35,2.43.6,4.87.75,7.34,0,.12.01.23.02.35,0,.12.01.23.01.35.15,2.63.2,5.27.18,7.91v.35c-.03,2.4-.13,4.81-.27,7.2,0,.11-.01.23-.02.35-.04.7-.09,1.39-.14,2.09-.15,1.98-.32,3.97-.52,5.95,0,.12-.02.23-.03.35-.27,2.68-.59,5.34-.94,8.01-.01.12-.03.24-.04.36-.17,1.26-.34,2.52-.51,3.79-.22,1.59-.45,3.18-.67,4.77-.02.12-.03.23-.06.35-.2,1.4-.4,2.8-.61,4.2-.22,1.54-.45,3.09-.67,4.65Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
              </g>
              <g>
                <rect x="876.5" y="215.81" width="31.24" height="22.96" transform="translate(664.83 1119.4) rotate(-90)" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                <path d="M903.81,211.5v31.57h-23.39v-31.57h23.39ZM903.39,242.73v-30.9h-22.52v30.9h22.52Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
              </g>
              <g>
                <rect x="876.5" y="355.68" width="31.24" height="22.96" transform="translate(524.96 1259.27) rotate(-90)" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                <path d="M903.81,351.37v31.57h-23.39v-31.57h23.39ZM903.39,382.6v-30.9h-22.52v30.9h22.52Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
              </g>
              <g>
                <rect x="676.21" y="285.35" width="76.61" height="26.76" transform="translate(1013.25 -415.79) rotate(90)" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                <path d="M700.89,337.44v-77.43s27.26,0,27.26,0v77.43s-27.26,0-27.26,0ZM701.38,260.83v75.78h26.25s0-75.78,0-75.78h-26.25Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
              </g>
              <g>
                <rect x="769.24" y="289.26" width="61.64" height="17.76" transform="translate(1098.2 -501.91) rotate(90)" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                <path d="M791,329.29v-62.3s18.1,0,18.1,0v62.3s-18.1,0-18.1,0ZM791.33,267.66v60.97s17.43,0,17.43,0v-60.97s-17.43,0-17.43,0Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
              </g>
              <g id="Bedroom_2" filter="url(#ds-soft)">
                <g>
                  <path d="M283.26,815.81h50.9c2.32,0,4.2,1.88,4.2,4.2v87.08c0,.44-.35.79-.79.79h-57.48c-.57,0-1.04-.47-1.04-1.04v-86.83c0-2.32,1.88-4.2,4.2-4.2Z" transform="translate(-553.13 1170.55) rotate(-90)" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M354.96,832.92v57.61c0,.66-.5,1.2-1.12,1.2h-87.51c-2.14,0-3.88-1.85-3.88-4.13v-51.51c0-2.28,1.74-4.13,3.88-4.13h87.72c.5,0,.91.43.91.97ZM262.89,887.6c0,2.02,1.54,3.66,3.44,3.66h87.51c.38,0,.69-.33.69-.73v-57.61c0-.28-.21-.5-.47-.5h-87.72c-1.9,0-3.44,1.64-3.44,3.66v51.51Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <rect x="231.42" y="857.9" width="62.88" height="8.13" rx="2.63" ry="2.63" transform="translate(-599.11 1124.82) rotate(-90)" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M267.14,832.96v58.01c0,1.47-1.12,2.67-2.51,2.67h-3.56c-1.38,0-2.51-1.2-2.51-2.67v-58.01c0-1.47,1.12-2.67,2.51-2.67h3.56c1.38,0,2.51,1.2,2.51,2.67ZM259.01,890.97c0,1.21.93,2.2,2.07,2.2h3.56c1.14,0,2.07-.99,2.07-2.2v-58.01c0-1.21-.93-2.2-2.07-2.2h-3.56c-1.14,0-2.07.99-2.07,2.2v58.01Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M304.9,892.18c4.15.33,29.04.82,32.48.33,3.43-.49,14.02,1.64,13.88-.16-.14-1.8,1.29-25.23,1.86-30.64.57-5.41,1.86-17.04,2.58-20.64.72-3.6.43-9.67-.72-9.99-1.14-.33-48.21-.16-50.93.49-2.72.66.86,60.62.86,60.62Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M356.3,836.48c0,1.64-.14,3.34-.4,4.63-.79,3.99-2.28,17.88-2.57,20.62-.57,5.41-1.99,28.84-1.86,30.59.02.19-.05.36-.17.5-.67.72-3.29.54-7.53.17-2.46-.22-5.01-.44-6.36-.25-3.47.5-28.32,0-32.52-.33h-.19s-.01-.22-.01-.22c0-.15-.9-15.17-1.45-30.07-1.12-30.34.25-30.67.76-30.79,2.14-.52,49.36-.97,51.04-.49.87.25,1.27,2.86,1.27,5.63ZM351.03,891.96c0-3.62,1.3-24.91,1.87-30.27.29-2.75,1.78-16.66,2.58-20.66.78-3.91.31-9.47-.56-9.72-.57-.15-11.95-.2-24.86-.11-11.66.08-24.6.28-25.97.61-.36.12-1.44,2.66-.42,30.41.51,13.93,1.33,27.92,1.43,29.76,4.7.33,28.84.8,32.24.32,1.4-.2,3.97.03,6.46.25,3.1.27,6.6.58,7.18-.03.05-.05.05-.09.05-.13,0-.09-.01-.23-.01-.41Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M305.78,830.52c.51.5-1.04,12.29-.99,21.49.11,18.96.79,39.84.49,41.4-.23,1.2-3.87,1.13-7.31,1.17-3.21.04-6.21.28-7.11-.7-1.86-2.05-1.9-60.45.59-62.89,1.1-1.08,3.9-.95,6.62-1.06,3.43-.14,6.83-.27,7.7.59Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M306.1,831.4c0,.94-.12,2.62-.35,5.63-.32,4.23-.76,10.02-.74,14.98.05,8.81.23,18.08.37,25.54.17,8.74.28,15.05.12,15.91-.24,1.28-3.2,1.31-6.62,1.35h-.9c-.47.02-.93.03-1.38.04-2.82.06-5.05.12-5.89-.8-1.35-1.49-1.66-27.34-1.2-44.03.22-8.17.72-18.12,1.81-19.19.98-.96,3.15-1.02,5.44-1.08.44-.01.88-.02,1.31-.04,3.56-.14,6.91-.28,7.86.65h0c.11.11.17.4.17,1.05ZM304.57,851.53c0-4.87.43-10.44.74-14.54.23-3.04.46-5.92.3-6.31-.84-.78-4.39-.64-7.53-.51-.44.02-.88.03-1.32.04-2.21.06-4.3.11-5.16.95-.28.27-1.22,2.43-1.66,18.86-.53,19.28.05,42.56,1.08,43.7.7.77,3.06.72,5.57.66.45-.01.92-.02,1.38-.03h.9c2.68-.04,6.03-.07,6.2-.99.15-.81.03-7.43-.13-15.81-.14-7.46-.32-16.73-.37-25.54,0-.16,0-.32,0-.48Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M270.5,883.01c3.26,1.87,13.68.13,15.31,0,6.99-.57,3.26-41.29,1.15-42.6-1.82-1.12-17.17-1.31-17.88,1.15-.35,1.22-1.18,11.67-1.06,21.45.12,9.96,1.19,19.26,2.49,20Z" fill="#f5f3ef" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M290.1,865.86c0,4.62-.27,8.98-.96,12.19-.71,3.32-1.83,5.07-3.31,5.19-.25.02-.69.08-1.28.15-3.39.43-11.32,1.44-14.15-.18-1.55-.88-2.5-11.07-2.61-20.2-.12-9.72.7-20.25,1.07-21.52.12-.4.51-.74,1.19-1.02,3.65-1.52,15.41-1.25,17.01-.26,1.3.8,3.04,14.05,3.04,25.65ZM268.21,861.08c0,.64,0,1.29.01,1.93.13,11.11,1.34,19.2,2.38,19.8h0c2.71,1.55,10.54.55,13.89.13.6-.08,1.05-.13,1.3-.15,1.27-.11,2.26-1.73,2.92-4.83,2.5-11.69-.5-36.49-1.87-37.33-1.56-.96-13.05-1.2-16.63.29-.68.28-.88.55-.93.73-.34,1.17-1.06,10.36-1.06,19.45Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
              </g>
              <g>
                <rect x="365.59" y="852.81" width="65" height="19.47" transform="translate(-464.46 1260.64) rotate(-90)" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                <path d="M408.01,829.7v65.7s-19.84,0-19.84,0v-65.7s19.84,0,19.84,0ZM407.65,894.71v-64.3s-19.1,0-19.1,0v64.3s19.1,0,19.1,0Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
              </g>
              <g>
                <rect x="258.94" y="793.22" width="21.84" height="31.12" transform="translate(539.71 1617.55) rotate(-180)" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                <path d="M258.82,792.92h22.07s0,31.71,0,31.71h-22.07s0-31.71,0-31.71ZM280.66,793.5h-21.6s0,30.53,0,30.53h21.6s0-30.53,0-30.53Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
              </g>
              <g>
                <rect x="259.7" y="903.68" width="21.84" height="31.12" transform="translate(541.24 1838.48) rotate(-180)" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                <path d="M259.58,903.39h22.07s0,31.71,0,31.71h-22.07s0-31.71,0-31.71ZM281.42,903.96h-21.6s0,30.53,0,30.53h21.6s0-30.53,0-30.53Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
              </g>
              <g id="Dining_Room_table" filter="url(#ds-soft)">
                <g>
                  <path d="M318.96,264.8h4.41c2.35,0,4.26,1.91,4.26,4.26v3.01c0,2.35-1.91,4.26-4.26,4.26h-4.41c-2.35,0-4.26-1.91-4.26-4.26v-3.01c0-2.35,1.91-4.26,4.26-4.26Z" transform="translate(591.72 -50.6) rotate(90)" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M315.27,274.67v-8.23c0-1.37,1.11-2.48,2.48-2.48h6.83c1.37,0,2.48,1.11,2.48,2.48v8.23c0,1.37-1.11,2.48-2.48,2.48h-6.83c-1.37,0-2.48-1.11-2.48-2.48ZM326.78,266.44c0-1.22-.99-2.21-2.21-2.21h-6.83c-1.22,0-2.21.99-2.21,2.21v8.23c0,1.22.99,2.21,2.21,2.21h6.83c1.22,0,2.21-.99,2.21-2.21v-8.23Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M316.38,275.67c-.55-3.56-.58-7.06-.02-10.51.16-1.03-.85-1.94-2.16-1.94h0c-1.06,0-1.96.6-2.15,1.43-.88,3.72-.88,7.55.02,11.5.19.83,1.09,1.44,2.15,1.44h0c1.3,0,2.32-.9,2.16-1.93Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M311.26,270.28c0-1.92.22-3.81.66-5.66.21-.89,1.17-1.53,2.29-1.53.76,0,1.48.3,1.91.81.32.38.46.83.38,1.29-.54,3.36-.53,6.88.02,10.46h0c.07.45-.07.91-.39,1.28-.43.5-1.14.8-1.91.8-1.12,0-2.09-.65-2.29-1.55-.45-1.99-.67-3.96-.67-5.9ZM316.24,264.95c0-.31-.12-.61-.34-.87-.38-.44-1.01-.71-1.7-.71-.99,0-1.84.56-2.02,1.32-.87,3.68-.86,7.53.02,11.44.18.77,1.02,1.34,2.02,1.34.68,0,1.32-.26,1.7-.71.27-.31.38-.69.33-1.06h0c-.56-3.61-.57-7.16-.02-10.55.01-.06.02-.13.02-.19Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <rect x="340.48" y="291.57" width="12.92" height="11.52" rx="4.26" ry="4.26" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M351.05,303.22h-8.23c-1.37,0-2.48-1.11-2.48-2.48v-6.83c0-1.37,1.11-2.48,2.48-2.48h8.23c1.37,0,2.48,1.11,2.48,2.48v6.83c0,1.37-1.11,2.48-2.48,2.48ZM342.82,291.7c-1.22,0-2.21.99-2.21,2.21v6.83c0,1.22.99,2.21,2.21,2.21h8.23c1.22,0,2.21-.99,2.21-2.21v-6.83c0-1.22-.99-2.21-2.21-2.21h-8.23Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M352.19,302.1c-3.56.55-7.06.58-10.51.02-1.03-.16-1.94.85-1.94,2.16h0c0,1.06.6,1.96,1.43,2.15,3.72.88,7.55.88,11.5-.02.83-.19,1.44-1.09,1.44-2.15h0c0-1.31-.9-2.32-1.93-2.16Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M346.81,307.22c-1.92,0-3.81-.22-5.66-.66-.89-.21-1.53-1.17-1.53-2.29,0-.76.3-1.48.81-1.91.38-.32.83-.46,1.29-.38,3.36.54,6.88.53,10.46-.02.45-.07.91.07,1.28.39.5.43.8,1.14.8,1.91,0,1.12-.65,2.09-1.55,2.29-1.99.45-3.96.67-5.9.67ZM341.47,302.25c-.31,0-.61.12-.87.34-.44.38-.71,1.01-.71,1.7,0,.99.56,1.84,1.32,2.02,3.68.87,7.53.86,11.44-.02.77-.18,1.34-1.02,1.34-2.02,0-.68-.26-1.32-.71-1.7-.31-.27-.69-.38-1.06-.33h0c-3.61.56-7.16.57-10.55.02-.06-.01-.13-.02-.19-.02Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M383.41,291.57h4.41c2.35,0,4.26,1.91,4.26,4.26v3.01c0,2.35-1.91,4.26-4.26,4.26h-4.41c-2.35,0-4.26-1.91-4.26-4.26v-3.01c0-2.35,1.91-4.26,4.26-4.26Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M389.73,303.22h-8.23c-1.37,0-2.48-1.11-2.48-2.48v-6.83c0-1.37,1.11-2.48,2.48-2.48h8.23c1.37,0,2.48,1.11,2.48,2.48v6.83c0,1.37-1.11,2.48-2.48,2.48ZM381.49,291.7c-1.22,0-2.21.99-2.21,2.21v6.83c0,1.22.99,2.21,2.21,2.21h8.23c1.22,0,2.21-.99,2.21-2.21v-6.83c0-1.22-.99-2.21-2.21-2.21h-8.23Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M390.87,302.1c-3.56.55-7.06.58-10.51.02-1.03-.16-1.94.85-1.94,2.16h0c0,1.06.6,1.96,1.43,2.15,3.72.88,7.55.88,11.5-.02.83-.19,1.44-1.09,1.44-2.15h0c0-1.31-.9-2.32-1.93-2.16Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M385.48,307.22c-1.92,0-3.81-.22-5.66-.66-.89-.21-1.53-1.17-1.53-2.29,0-.76.3-1.48.81-1.91.38-.32.83-.46,1.29-.38,3.36.54,6.88.53,10.46-.02h0c.45-.07.91.07,1.28.39.5.43.8,1.14.8,1.91,0,1.12-.65,2.09-1.55,2.29-1.99.45-3.96.67-5.9.67ZM380.14,302.25c-.31,0-.61.12-.87.34-.44.38-.71,1.01-.71,1.7,0,.99.56,1.84,1.32,2.02,3.68.87,7.53.86,11.44-.02.77-.18,1.34-1.02,1.34-2.02,0-.68-.26-1.32-.71-1.7-.31-.27-.69-.38-1.06-.33h0c-3.61.56-7.16.57-10.55.02-.06-.01-.13-.02-.19-.02Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M409.86,263.8h4.41c2.35,0,4.26,1.91,4.26,4.26v3.68c0,2.35-1.91,4.26-4.26,4.26h-4.41c-2.35,0-4.26-1.91-4.26-4.26v-3.68c0-2.35,1.91-4.26,4.26-4.26Z" transform="translate(681.96 -142.17) rotate(90)" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M405.83,274.01v-8.23c0-1.37,1.11-2.48,2.48-2.48h7.51c1.37,0,2.48,1.11,2.48,2.48v8.23c0,1.37-1.11,2.48-2.48,2.48h-7.51c-1.37,0-2.48-1.11-2.48-2.48ZM418.02,265.78c0-1.22-.99-2.21-2.21-2.21h-7.51c-1.22,0-2.21.99-2.21,2.21v8.23c0,1.22.99,2.21,2.21,2.21h7.51c1.22,0,2.21-.99,2.21-2.21v-8.23Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M417.12,275.01c.58-3.56.61-7.06.03-10.51-.17-1.03.9-1.94,2.28-1.94h0c1.12,0,2.07.6,2.28,1.43.93,3.72.93,7.55-.02,11.5-.2.83-1.15,1.44-2.28,1.44h0c-1.38,0-2.45-.9-2.28-1.93Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M416.97,275.22c0-.08,0-.15.02-.23.59-3.58.59-7.1.03-10.46-.07-.44.06-.88.37-1.25.45-.53,1.22-.85,2.05-.85,1.18,0,2.19.64,2.41,1.53.93,3.73.93,7.62-.02,11.57-.21.9-1.23,1.55-2.41,1.55-.83,0-1.6-.32-2.05-.85-.25-.3-.39-.65-.39-1.01ZM417.71,269.59c0,1.79-.15,3.6-.45,5.44h0c-.06.36.05.71.31,1.02.4.47,1.09.75,1.84.75,1.06,0,1.96-.56,2.15-1.34.93-3.91.94-7.75.02-11.44-.19-.77-1.09-1.32-2.14-1.32-.75,0-1.44.28-1.84.75-.26.31-.37.66-.3,1.02.28,1.67.42,3.38.42,5.11Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M344.73,237.14h4.41c2.35,0,4.26,1.91,4.26,4.26v3.68c0,2.35-1.91,4.26-4.26,4.26h-4.41c-2.35,0-4.26-1.91-4.26-4.26v-3.68c0-2.35,1.91-4.26,4.26-4.26Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M351.05,249.47h-8.23c-1.37,0-2.48-1.11-2.48-2.48v-7.51c0-1.37,1.11-2.48,2.48-2.48h8.23c1.37,0,2.48,1.11,2.48,2.48v7.51c0,1.37-1.11,2.48-2.48,2.48ZM342.82,237.28c-1.22,0-2.21.99-2.21,2.21v7.51c0,1.22.99,2.21,2.21,2.21h8.23c1.22,0,2.21-.99,2.21-2.21v-7.51c0-1.22-.99-2.21-2.21-2.21h-8.23Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M352.19,238.18c-3.56-.58-7.06-.61-10.51-.03-1.03.17-1.94-.9-1.94-2.28h0c0-1.12.6-2.07,1.43-2.28,3.72-.93,7.55-.93,11.5.02.83.2,1.44,1.15,1.44,2.28h0c0,1.38-.9,2.45-1.93,2.29Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M352.4,238.34c-.08,0-.15,0-.23-.02-3.58-.59-7.1-.59-10.46-.03-.44.07-.88-.06-1.24-.37-.53-.45-.85-1.22-.85-2.05,0-1.18.64-2.19,1.53-2.41,3.73-.93,7.62-.93,11.57.02.9.21,1.55,1.23,1.55,2.41,0,.83-.32,1.6-.85,2.05-.3.25-.65.39-1.01.39ZM346.78,237.59c1.79,0,3.6.15,5.44.45h0c.36.06.71-.05,1.02-.31.47-.4.75-1.09.75-1.84,0-1.06-.56-1.96-1.34-2.15-3.91-.93-7.75-.94-11.44-.02-.77.19-1.32,1.09-1.32,2.14,0,.75.28,1.44.75,1.84.31.26.66.37,1.02.3,1.67-.28,3.38-.42,5.11-.42Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M383.41,237.14h4.41c2.35,0,4.26,1.91,4.26,4.26v3.68c0,2.35-1.91,4.26-4.26,4.26h-4.41c-2.35,0-4.26-1.91-4.26-4.26v-3.68c0-2.35,1.91-4.26,4.26-4.26Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M389.73,249.47h-8.23c-1.37,0-2.48-1.11-2.48-2.48v-7.51c0-1.37,1.11-2.48,2.48-2.48h8.23c1.37,0,2.48,1.11,2.48,2.48v7.51c0,1.37-1.11,2.48-2.48,2.48ZM381.49,237.28c-1.22,0-2.21.99-2.21,2.21v7.51c0,1.22.99,2.21,2.21,2.21h8.23c1.22,0,2.21-.99,2.21-2.21v-7.51c0-1.22-.99-2.21-2.21-2.21h-8.23Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M390.87,238.18c-3.56-.58-7.06-.61-10.51-.03-1.03.17-1.94-.9-1.94-2.28h0c0-1.12.6-2.07,1.43-2.28,3.72-.93,7.55-.93,11.5.02.83.2,1.44,1.15,1.44,2.28h0c0,1.38-.9,2.45-1.93,2.29Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M391.08,238.34c-.08,0-.15,0-.23-.02-3.58-.59-7.1-.59-10.46-.03-.44.07-.88-.06-1.24-.37-.53-.45-.85-1.22-.85-2.05,0-1.18.64-2.19,1.53-2.41,3.73-.93,7.62-.93,11.57.02.9.21,1.55,1.23,1.55,2.41,0,.83-.32,1.6-.85,2.05-.3.25-.65.39-1.01.39ZM385.45,237.59c1.79,0,3.6.15,5.44.45h0c.36.06.71-.05,1.02-.31.47-.4.75-1.09.75-1.84,0-1.06-.56-1.96-1.34-2.15-3.91-.93-7.75-.94-11.44-.02-.77.19-1.32,1.09-1.32,2.14,0,.75.28,1.44.75,1.84.31.26.66.37,1.02.3,1.67-.28,3.38-.42,5.11-.42Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M412.2,249.78v40.25c0,4.06-2.6,7.34-5.81,7.34h-79.65c-3.21,0-5.81-3.29-5.81-7.34v-40.25c0-4.06,2.6-7.34,5.81-7.34h79.65c3.21,0,5.81,3.29,5.81,7.34Z" fill="#fff" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M406.39,297.51h-79.65c-3.26,0-5.92-3.36-5.92-7.48v-40.25c0-4.13,2.65-7.48,5.92-7.48h79.65c3.26,0,5.92,3.36,5.92,7.48v40.25c0,4.13-2.65,7.48-5.92,7.48ZM326.74,242.57c-3.15,0-5.71,3.23-5.71,7.21v40.25c0,3.97,2.56,7.21,5.71,7.21h79.65c3.15,0,5.71-3.23,5.71-7.21v-40.25c0-3.97-2.56-7.21-5.71-7.21h-79.65Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <rect x="320.92" y="262.22" width="90.99" height="16.37" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M412.02,278.72h-91.2v-16.64h91.2v16.64ZM321.03,278.45h90.79v-16.09h-90.79v16.09Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <polygon points="331.14 277.78 324.14 270.38 331.08 263.05 338.08 270.45 331.14 277.78" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M323.95,270.38l7.12-7.53,7.19,7.6-7.12,7.53-7.19-7.6ZM331.08,263.25l-6.75,7.13,6.81,7.2,6.75-7.13-6.81-7.2Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <ellipse cx="331.11" cy="270.41" rx="4.26" ry="4.51" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M326.71,270.41c0-2.56,1.97-4.64,4.4-4.64s4.4,2.08,4.4,4.64-1.97,4.64-4.4,4.64-4.4-2.08-4.4-4.64ZM335.24,270.41c0-2.41-1.85-4.37-4.13-4.37s-4.13,1.96-4.13,4.37,1.85,4.37,4.13,4.37,4.13-1.96,4.13-4.37Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M331.11,273.3c-1.51,0-2.73-1.29-2.73-2.89s1.22-2.89,2.73-2.89,2.74,1.29,2.74,2.89-1.22,2.89-2.74,2.89Z" fill="#fff" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M328.24,270.41c0-1.67,1.29-3.03,2.87-3.03s2.87,1.36,2.87,3.03-1.29,3.03-2.87,3.03-2.87-1.36-2.87-3.03ZM333.71,270.41c0-1.52-1.17-2.75-2.6-2.75s-2.6,1.23-2.6,2.75,1.17,2.75,2.6,2.75,2.6-1.23,2.6-2.75Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <polygon points="354.3 287.82 346.9 294.83 339.57 287.89 346.97 280.89 354.3 287.82" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M346.9,295.02l-7.53-7.12,7.6-7.19,7.53,7.12-7.6,7.19ZM339.77,287.89l7.13,6.75,7.2-6.81-7.13-6.75-7.2,6.81Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <ellipse cx="346.94" cy="287.86" rx="4.51" ry="4.26" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M346.94,292.26c-2.56,0-4.64-1.97-4.64-4.4s2.08-4.4,4.64-4.4,4.64,1.97,4.64,4.4-2.08,4.4-4.64,4.4ZM346.94,283.73c-2.41,0-4.37,1.85-4.37,4.13s1.96,4.13,4.37,4.13,4.37-1.85,4.37-4.13-1.96-4.13-4.37-4.13Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M349.83,287.86c0,1.51-1.29,2.73-2.89,2.73s-2.89-1.22-2.89-2.73,1.29-2.74,2.89-2.74,2.89,1.22,2.89,2.74Z" fill="#fff" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M346.94,290.73c-1.67,0-3.03-1.29-3.03-2.87s1.36-2.87,3.03-2.87,3.03,1.29,3.03,2.87-1.36,2.87-3.03,2.87ZM346.94,285.26c-1.52,0-2.75,1.17-2.75,2.6s1.23,2.6,2.75,2.6,2.75-1.17,2.75-2.6-1.23-2.6-2.75-2.6Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <polygon points="392.97 287.82 385.57 294.83 378.25 287.89 385.65 280.89 392.97 287.82" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M385.57,295.02l-7.53-7.12,7.6-7.19,7.53,7.12-7.6,7.19ZM378.45,287.89l7.13,6.75,7.2-6.81-7.13-6.75-7.2,6.81Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <ellipse cx="385.61" cy="287.86" rx="4.51" ry="4.26" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M385.61,292.26c-2.56,0-4.64-1.97-4.64-4.4s2.08-4.4,4.64-4.4,4.64,1.97,4.64,4.4-2.08,4.4-4.64,4.4ZM385.61,283.73c-2.41,0-4.37,1.85-4.37,4.13s1.96,4.13,4.37,4.13,4.37-1.85,4.37-4.13-1.96-4.13-4.37-4.13Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M388.5,287.86c0,1.51-1.29,2.73-2.89,2.73s-2.89-1.22-2.89-2.73,1.29-2.74,2.89-2.74,2.89,1.22,2.89,2.74Z" fill="#fff" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M385.61,290.73c-1.67,0-3.03-1.29-3.03-2.87s1.36-2.87,3.03-2.87,3.03,1.29,3.03,2.87-1.36,2.87-3.03,2.87ZM385.61,285.26c-1.52,0-2.75,1.17-2.75,2.6s1.23,2.6,2.75,2.6,2.75-1.17,2.75-2.6-1.23-2.6-2.75-2.6Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <polygon points="402.43 277.6 395.43 270.2 402.36 262.87 409.36 270.27 402.43 277.6" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M395.24,270.2l7.12-7.53,7.19,7.6-7.12,7.53-7.19-7.6ZM402.36,263.07l-6.75,7.13,6.81,7.2,6.75-7.13-6.81-7.2Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M402.4,274.73c-2.36,0-4.26-2.02-4.26-4.51s1.91-4.51,4.26-4.51,4.26,2.02,4.26,4.51-1.91,4.51-4.26,4.51Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M397.99,270.23c0-2.56,1.97-4.64,4.4-4.64s4.4,2.08,4.4,4.64-1.97,4.64-4.4,4.64-4.4-2.08-4.4-4.64ZM406.52,270.23c0-2.41-1.85-4.37-4.13-4.37s-4.13,1.96-4.13,4.37,1.85,4.37,4.13,4.37,4.13-1.96,4.13-4.37Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M402.4,273.12c-1.51,0-2.74-1.29-2.74-2.89s1.22-2.89,2.74-2.89,2.73,1.29,2.73,2.89-1.22,2.89-2.73,2.89Z" fill="#fff" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M399.52,270.23c0-1.67,1.29-3.03,2.87-3.03s2.87,1.36,2.87,3.03-1.29,3.03-2.87,3.03-2.87-1.36-2.87-3.03ZM404.99,270.23c0-1.52-1.17-2.75-2.6-2.75s-2.6,1.23-2.6,2.75,1.17,2.75,2.6,2.75,2.6-1.23,2.6-2.75Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <polygon points="354.3 251.67 346.9 258.67 339.57 251.73 346.97 244.73 354.3 251.67" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M346.9,258.86l-7.53-7.12,7.6-7.19,7.53,7.12-7.6,7.19ZM339.77,251.73l7.13,6.75,7.2-6.81-7.13-6.75-7.2,6.81Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M351.44,251.7c0,2.36-2.02,4.26-4.51,4.26s-4.51-1.91-4.51-4.26,2.02-4.26,4.51-4.26,4.51,1.91,4.51,4.26Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M346.94,256.1c-2.56,0-4.64-1.97-4.64-4.4s2.08-4.4,4.64-4.4,4.64,1.97,4.64,4.4-2.08,4.4-4.64,4.4ZM346.94,247.57c-2.41,0-4.37,1.85-4.37,4.13s1.96,4.13,4.37,4.13,4.37-1.85,4.37-4.13-1.96-4.13-4.37-4.13Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M349.83,251.7c0,1.51-1.29,2.74-2.89,2.74s-2.89-1.22-2.89-2.74,1.29-2.73,2.89-2.73,2.89,1.22,2.89,2.73Z" fill="#fff" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M346.94,254.57c-1.67,0-3.03-1.29-3.03-2.87s1.36-2.87,3.03-2.87,3.03,1.29,3.03,2.87-1.36,2.87-3.03,2.87ZM346.94,249.1c-1.52,0-2.75,1.17-2.75,2.6s1.23,2.6,2.75,2.6,2.75-1.17,2.75-2.6-1.23-2.6-2.75-2.6Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <polygon points="392.97 251.67 385.57 258.67 378.25 251.73 385.65 244.73 392.97 251.67" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M385.57,258.86l-7.53-7.12,7.6-7.19,7.53,7.12-7.6,7.19ZM378.45,251.73l7.13,6.75,7.2-6.81-7.13-6.75-7.2,6.81Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M390.12,251.7c0,2.36-2.02,4.26-4.51,4.26s-4.51-1.91-4.51-4.26,2.02-4.26,4.51-4.26,4.51,1.91,4.51,4.26Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M385.61,256.1c-2.56,0-4.64-1.97-4.64-4.4s2.08-4.4,4.64-4.4,4.64,1.97,4.64,4.4-2.08,4.4-4.64,4.4ZM385.61,247.57c-2.41,0-4.37,1.85-4.37,4.13s1.96,4.13,4.37,4.13,4.37-1.85,4.37-4.13-1.96-4.13-4.37-4.13Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M388.5,251.7c0,1.51-1.29,2.74-2.89,2.74s-2.89-1.22-2.89-2.74,1.29-2.73,2.89-2.73,2.89,1.22,2.89,2.73Z" fill="#fff" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M385.61,254.57c-1.67,0-3.03-1.29-3.03-2.87s1.36-2.87,3.03-2.87,3.03,1.29,3.03,2.87-1.36,2.87-3.03,2.87ZM385.61,249.1c-1.52,0-2.75,1.17-2.75,2.6s1.23,2.6,2.75,2.6,2.75-1.17,2.75-2.6-1.23-2.6-2.75-2.6Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M367.99,269.54c-2.1-3.25-4.3-2.36-5.83-1.64-2.46,1.16-2.91,2.96-2.91,2.96,0,0,2.5.13,3.12,1.31.62,1.18,4.16,2.3,4.93.53.76-1.77,1.46-1.97.69-3.15Z" fill="#d5ebd7" stroke="#aac0aa" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M365.56,273.75c-1.31,0-2.89-.72-3.31-1.52-.58-1.1-2.98-1.24-3.01-1.24h-.17s.04-.17.04-.17c.02-.08.5-1.87,2.99-3.05,1.31-.62,3.76-1.78,6,1.69h0c.59.91.35,1.33-.08,2.09-.17.31-.39.69-.61,1.19-.27.62-.86.97-1.72,1.01-.05,0-.09,0-.14,0ZM359.43,270.73c.6.06,2.5.31,3.06,1.37.39.74,1.98,1.43,3.2,1.37.52-.02,1.2-.18,1.48-.84.22-.52.44-.91.62-1.22.42-.75.58-1.03.09-1.8h0c-1.95-3.02-3.94-2.4-5.65-1.59-1.95.92-2.61,2.25-2.79,2.71Z" fill="#d5ebd7" stroke="#aac0aa" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M371.18,272.17c1.14,1.15,3.4,1.05,4.58-.2,1.18-1.25,1.25-2.96,2.22-3.09,0,0-1.46-1.31-3.54-1.18-2.08.13-2.98.59-3.82,1.45-.83.85-.49,1.97.56,3.02Z" fill="#d5ebd7" stroke="#aac0aa" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M373.3,273.11c-.88,0-1.68-.31-2.21-.85-1.18-1.19-1.38-2.36-.56-3.21.82-.84,1.72-1.35,3.91-1.49,2.11-.13,3.58,1.16,3.64,1.22l.22.2-.29.04c-.46.06-.71.58-1.02,1.24-.27.58-.58,1.23-1.12,1.8-.62.65-1.54,1.03-2.52,1.04-.01,0-.03,0-.04,0ZM374.73,267.83c-.09,0-.19,0-.28,0-2.1.13-2.96.62-3.73,1.4-.97.99-.07,2.2.55,2.83h0c.49.49,1.23.78,2.06.76.9-.01,1.77-.37,2.32-.96.51-.54.81-1.17,1.07-1.73.28-.59.52-1.11.96-1.32-.43-.32-1.53-1-2.96-1Z" fill="#d5ebd7" stroke="#aac0aa" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M369.35,271.02c-2.7.19-4.73-2.47-1.73-4.18,1.65-.94,2.59-3.64,2.59-3.64,0,0,2.42,2.35,2.68,3.38.74,2.97-.72,4.23-1.7,4.48-.98.25-1.16-.85-1.16-.85,0,0-.02.75-.68.8Z" fill="#d5ebd7" stroke="#aac0aa" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M370.91,271.24c-.18,0-.35-.05-.5-.14-.17-.11-.28-.26-.36-.41-.12.23-.33.44-.69.47h0c-1.53.11-2.94-.67-3.29-1.82-.29-.96.25-1.91,1.48-2.62,1.59-.91,2.52-3.54,2.53-3.56l.07-.2.15.15c.1.1,2.45,2.39,2.72,3.45.78,3.11-.83,4.4-1.8,4.65-.11.03-.22.04-.32.04ZM370.17,270.2s.08.46.4.67c.16.1.36.13.6.07.94-.24,2.33-1.42,1.6-4.32-.21-.84-1.96-2.64-2.49-3.17-.26.65-1.15,2.69-2.58,3.51-1.11.63-1.61,1.47-1.36,2.3.31,1.01,1.63,1.73,3.01,1.62h0c.53-.04.55-.64.55-.66l.27-.02Z" fill="#d5ebd7" stroke="#aac0aa" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M370.37,272.12c-1.94-.07-2.78.92-2.78,2.23s1.8,3.09,4.51,3.48c1.38.2,2.36.33,2.36.33,0,0-.03-1.42.35-2.96.49-1.97-.76-3.42-2.22-3.81-1.46-.39-2.22.72-2.22.72Z" fill="#d5ebd7" stroke="#aac0aa" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M374.6,278.32l-.16-.02s-.98-.13-2.36-.33c-2.73-.4-4.63-2.22-4.63-3.62,0-.69.22-1.27.65-1.68.5-.48,1.24-.71,2.2-.69.2-.24.99-1.08,2.32-.72,1.54.42,2.83,1.91,2.32,3.98-.37,1.5-.34,2.91-.34,2.92v.16ZM370.19,272.26c-.83,0-1.47.21-1.89.62-.37.36-.56.87-.56,1.48,0,1.28,1.8,2.97,4.39,3.34,1.05.15,1.87.26,2.2.31,0-.42.05-1.59.35-2.83.47-1.89-.72-3.26-2.12-3.64-1.34-.36-2.04.63-2.07.67l-.04.06h-.08c-.06,0-.12,0-.18,0Z" fill="#d5ebd7" stroke="#aac0aa" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M364.76,271.58c1.79-1.25,2.33-1.36,3.81-.66.47.22.16,2.06.16,2.06,0,0,2.33,1.33,1.01,2.87-1.32,1.55-9.26-.88-8.17-1.1,1.09-.22,2.36-2.58,3.19-3.17Z" fill="#d5ebd7" stroke="#aac0aa" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M367.85,276.5c-2.01,0-4.84-.77-5.95-1.24-.5-.21-.59-.33-.57-.46,0-.07.05-.15.21-.18.61-.12,1.33-1.04,1.97-1.85.43-.54.83-1.05,1.17-1.29h0c1.84-1.29,2.43-1.39,3.95-.67.49.23.33,1.58.25,2.12.29.18,1.23.83,1.38,1.72.08.46-.06.9-.42,1.32-.35.4-1.09.56-1.99.56ZM361.7,274.85c.61.37,3.56,1.26,5.79,1.36,1.11.05,1.85-.11,2.15-.45.3-.35.42-.72.36-1.09-.16-.9-1.32-1.57-1.33-1.57l-.08-.05.02-.09c.14-.84.15-1.81-.08-1.91-1.42-.67-1.9-.59-3.68.65h0c-.31.22-.7.71-1.11,1.24-.66.85-1.35,1.72-2.03,1.93Z" fill="#d5ebd7" stroke="#aac0aa" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <path d="M370.13,270.37l-.25-.12c.67-1.38.9-2.81.72-4.39l.27-.03c.18,1.63-.06,3.11-.75,4.54Z" fill="#d5ebd7" stroke="#aac0aa" stroke-miterlimit="10" stroke-width=".25" />
                <path d="M364.26,274.46l-.14-.23c1.45-.9,2.95-1.36,4.6-1.43v.28c-1.59.07-3.05.52-4.46,1.39Z" fill="#d5ebd7" stroke="#aac0aa" stroke-miterlimit="10" stroke-width=".25" />
                <path d="M373.1,275.82c-.56-1.42-1.46-2.6-2.76-3.59l.17-.22c1.35,1.03,2.28,2.24,2.85,3.71l-.26.1Z" fill="#d5ebd7" stroke="#aac0aa" stroke-miterlimit="10" stroke-width=".25" />
              </g>
              <g filter="url(#ds-soft)">
                <g>
                  <rect x="525.13" y="947.65" width="33.79" height="1.72" transform="translate(1595.98 1235.93) rotate(135)" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M529.11,959.84l24.25-24.25,1.58,1.58-24.25,24.25-1.58-1.58ZM553.36,936.32l-23.53,23.53.85.85,23.53-23.53-.85-.85Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <g>
                    <rect x="515.06" y="924.92" width="33.79" height="27.03" transform="translate(1571.67 1225.86) rotate(135)" fill="#f3f0ee" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M510.09,940.82l24.25-24.25,19.48,19.48-24.25,24.25-19.48-19.48ZM534.34,917.3l-23.53,23.53,18.75,18.75,23.53-23.53-18.75-18.75Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <rect x="543.67" y="910.84" width="1.7" height="30.14" transform="translate(1584.27 1195.59) rotate(135)" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M532.9,915.85l1.57-1.57,21.68,21.68-1.57,1.57-21.68-21.68ZM534.47,915.01l-.84.84,20.95,20.95.84-.84-20.95-20.95Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <rect x="518.57" y="935.93" width="1.7" height="30.14" transform="translate(1559.17 1256.18) rotate(135)" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M507.8,940.95l1.57-1.57,21.68,21.68-1.57,1.57-21.68-21.68ZM509.37,940.11l-.84.84,20.95,20.95.84-.84-20.95-20.95Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <path d="M524.97,954.32s0,0,0,.01l1.28,2.84.84-.64.07.07c.31.31.83.31,1.14,0l4.05-4.05,11.43-8.66,7.09-7.87.45-1.17-.6-2.15s-2-.85-2.74-1.17c-.08-.06-.18-.09-.27-.12,0,0,0,0,0,0h0c-.26-.06-.54.02-.74.22l-21.82,21.82c-.23.23-.29.57-.18.86h0s0,0,0,0Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M524.96,953.27l21.82-21.82c.22-.22.52-.33.83-.31l.03-.03.15.06c.11.03.22.07.31.13,1.52.65,2.56,1.1,2.69,1.15l.13.03.67,2.38-.5,1.29-.03.04-7.11,7.88h-.02s-11.42,8.67-11.42,8.67l-4.04,4.04c-.38.38-.99.41-1.41.09l-.93.7-1.5-3.35.03-.02c-.06-.34.05-.69.29-.94ZM547.63,931.66c-.18-.03-.36.02-.49.15l-21.82,21.82c-.15.15-.2.38-.12.59h0s1.14,2.56,1.14,2.56l.76-.58.23.23c.21.21.56.21.78,0l4.08-4.08,11.42-8.65,7.04-7.81.4-1.04-.55-1.95c-.24-.1-.88-.37-2.63-1.12l-.04-.02c-.05-.04-.12-.06-.18-.08h-.02Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <path d="M512.65,937.54l3.36.9c1.04.3,1.99.86,2.76,1.62l6.92,6.92c1.02,1.02,1.7,2.34,1.95,3.77l.38,2.25-7.93-5.78-7.6-9.45c-.09-.12.02-.28.16-.24Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M512.32,937.39c.1-.1.25-.14.4-.1l3.36.89c1.09.31,2.08.89,2.87,1.69l6.92,6.92c1.07,1.07,1.77,2.42,2.02,3.91l.49,2.87-8.46-6.17-.02-.03-7.6-9.45c-.11-.14-.12-.33-.02-.48.02-.02.03-.04.05-.06ZM527.66,952.42l-.28-1.63c-.23-1.38-.88-2.64-1.87-3.63l-6.92-6.92c-.73-.73-1.65-1.27-2.65-1.56l-3.05-.81,7.38,9.17,7.39,5.39Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <rect x="516.96" y="934.99" width="3.88" height="23.08" rx="1.51" ry="1.51" transform="translate(1555.11 1248.91) rotate(135)" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M509.78,938.97l1.55-1.55c.43-.43,1.13-.43,1.56,0l15.12,15.12c.43.43.43,1.13,0,1.56l-1.55,1.55c-.43.43-1.13.43-1.56,0l-15.12-15.12c-.43-.43-.43-1.13,0-1.56ZM527.65,953.73c.23-.23.23-.6,0-.83l-15.12-15.12c-.23-.23-.6-.23-.83,0l-1.55,1.55c-.23.23-.23.6,0,.83l15.12,15.12c.23.23.6.23.83,0l1.55-1.55Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <rect x="522.46" y="943.92" width="34.82" height="4.78" rx="1.87" ry="1.87" transform="translate(1590.76 1233.71) rotate(135)" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M526.29,956.14l23.4-23.4c.44-.44,1.15-.44,1.58,0l2.16,2.16c.44.44.44,1.15,0,1.58l-23.4,23.4c-.44.44-1.15.44-1.58,0l-2.16-2.16c-.44-.44-.44-1.15,0-1.58ZM553.08,936.12c.24-.24.24-.62,0-.86l-2.16-2.16c-.24-.24-.62-.24-.86,0l-23.4,23.4c-.24.24-.24.62,0,.86l2.16,2.16c.24.24.62.24.86,0l23.4-23.4Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <path d="M530.94,918.8l1.04,3.65c.3,1.04.86,1.99,1.62,2.76l6.92,6.92c1.02,1.02,2.34,1.7,3.77,1.95l2.25.38-5.78-7.93-9.51-7.51c-.1-.08-.36-.35-.32-.23Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M530.76,918.58s.03-.03.05-.04c.19-.12.34.02.52.19.04.03.07.07.1.09l9.54,7.53.02.03,6.15,8.44-2.87-.49c-1.49-.25-2.84-.95-3.91-2.02l-6.92-6.92c-.8-.8-1.38-1.79-1.69-2.87l-1.04-3.65c-.04-.13,0-.22.07-.28ZM531.19,918.73h0s0,0,0,0ZM540.59,926.71l-9.2-7.26.84,2.92c.29,1,.82,1.91,1.56,2.65l6.92,6.92c.99.99,2.25,1.64,3.63,1.87l1.63.28-5.39-7.39Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <rect x="538.15" y="913.8" width="3.88" height="23.08" rx="1.51" ry="1.51" transform="translate(-496.13 652.93) rotate(-45)" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M530.97,917.78l1.55-1.55c.43-.43,1.13-.43,1.56,0l15.12,15.12c.43.43.43,1.13,0,1.56l-1.55,1.55c-.43.43-1.13.43-1.56,0l-15.12-15.12c-.43-.43-.43-1.13,0-1.56ZM548.84,932.54c.23-.23.23-.6,0-.83l-15.12-15.12c-.23-.23-.6-.23-.83,0l-1.55,1.55c-.23.23-.23.6,0,.83l15.12,15.12c.23.23.6.23.83,0l1.55-1.55Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                </g>
              </g>
              <g id="Plant3" data-name="Plant" filter="url(#ds-soft)">
                <g>
                  <path d="M539.13,790.87c1.82.3,3.5.95,4.17,2.35-.49-.07-1.29.12-1.84.29-.76.24-2.04.7-2.42,2.17-.38,1.47.27.36,1.46-.73.84-.76,2.06-.97,3.1-.56.01.07.02.14.02.22.02,1.06-.26,1.99-.66,2.7-.65,1.16-1.64,1.77-2.21,1.49-2.08-1.01-.6,3.8-2.37,4.32-.64.18-1.38.07-2.12-.28-.34-1.08-.58-1.98-.18-2.98.31-.77.63-1.7.46-1.93-.14-.18-.73.23-.94.51-.87,1.13-.77,2.69-.33,3.8-.92-.71-1.72-1.74-2.15-2.94-.18-.51-.4-1.09-.64-1.7.94-.8,2.39-1.56,2.22-1.72-.25-.24-1.7.22-2.55.89-.87-2.23-1.76-4.59-1.4-5.1.3-.41,1.74-.74,3.43-.9-.21,1.41.21,2.94.55,3.06.34.12-.08-1.86-.06-3.1,1.1-.08,2.27-.09,3.28,0h.04c-.95,1.52-.95,4.27-.58,4.33.37.06.15-2.48,1.71-4.19Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M537.73,803.35c-.48,0-1-.13-1.53-.38l-.05-.03-.02-.06c-.35-1.12-.58-2.05-.17-3.07.62-1.54.49-1.78.47-1.8-.08-.03-.52.24-.73.51-.85,1.11-.72,2.62-.31,3.66l.18.45-.39-.3c-1-.77-1.78-1.83-2.19-3-.18-.52-.41-1.12-.64-1.7l-.03-.09.07-.06c.42-.35.94-.7,1.36-.99.29-.2.65-.44.78-.56-.33-.05-1.47.28-2.3.93l-.14.11-.07-.17c-1.06-2.72-1.77-4.68-1.38-5.23.45-.62,2.81-.89,3.53-.96l.17-.02-.03.17c-.19,1.32.17,2.62.41,2.87.03-.21-.03-.79-.07-1.27-.06-.55-.12-1.17-.11-1.67v-.12s.13,0,.13,0c.84-.06,2.09-.1,3.31,0l.25.04-.11.17c-.88,1.4-.87,3.66-.69,4.07.05-.12.09-.38.14-.61.16-.88.43-2.36,1.47-3.48l.05-.05h.07c2.24.37,3.67,1.19,4.27,2.44l.11.23-.25-.03c-.56-.08-1.5.2-1.78.29-.63.2-1.95.62-2.33,2.07-.06.25-.09.39-.1.48.11-.1.29-.28.45-.45.24-.26.55-.57.9-.89.87-.79,2.14-1.02,3.24-.59l.07.03v.08c.02.08.03.16.03.24.02,1.25-.35,2.2-.67,2.77-.67,1.19-1.72,1.87-2.39,1.55-.28-.14-.49-.16-.64-.08-.34.19-.42.99-.49,1.76-.1,1.11-.22,2.38-1.15,2.65-.22.06-.45.09-.68.09ZM536.37,802.75c.71.33,1.39.41,1.97.24.75-.22.85-1.38.95-2.41.09-.91.16-1.7.62-1.97.23-.13.52-.11.89.07.47.22,1.4-.3,2.03-1.44.3-.54.66-1.44.64-2.64,0-.04,0-.08,0-.12-.99-.35-2.11-.13-2.88.57-.34.31-.64.62-.88.88-.45.47-.64.67-.81.57-.14-.08-.14-.28,0-.85.42-1.6,1.84-2.05,2.51-2.26.32-.1,1.06-.31,1.65-.31h0c-.61-1.03-1.91-1.73-3.88-2.06-.94,1.07-1.2,2.46-1.35,3.3-.11.59-.17.92-.43.88-.09-.01-.16-.08-.21-.2-.27-.61-.16-2.78.59-4.15-.86-.07-1.9-.06-2.96,0,0,.46.06,1.02.11,1.51.11,1.05.13,1.43-.04,1.56-.05.04-.12.05-.19.03-.43-.15-.82-1.67-.66-3.04-1.66.17-2.92.5-3.16.83-.33.45.65,3.01,1.35,4.8.85-.6,2.25-1.09,2.58-.78.04.04.06.09.05.15-.01.17-.24.34-.95.81-.41.28-.87.59-1.26.91.21.56.43,1.12.61,1.62.34.98.95,1.88,1.74,2.58-.3-1.07-.3-2.43.5-3.47.19-.24.66-.61.94-.61h0c.11,0,.18.05.21.1.12.16.18.53-.44,2.06-.37.93-.17,1.76.16,2.84Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M545.64,801.49c1.27.42,2.4,1.84,2.57,2.86.11.64-.15,1.48-.73,2.31-.91-1.09-3-2.46-3.79-2.53-.71-.07.79.39,2.12,1.62.43.4.82.99,1.14,1.56-.72.8-1.74,1.54-3.02,2.05-.36-1.23-1.49-3.19-2.21-3.35-.52-.11.56.98,1.25,2.09.31.5.49,1,.55,1.42-.68.23-1.42.4-2.22.49-.31.03-.61.08-.88.15-.28-.86-.97-2.07-1.46-2.16-.57-.1.57,1.18.7,2.4-1.44.56-2.08,1.39-2.57.94-.31-.29-.8-1.4-1.16-2.79,1.01-.8,2.15-.44,1.89-.79-.22-.3-1.28-.23-2.05.12-.28-1.32-.43-2.77-.2-3.95,1.7-.39,3.3.39,3.67.63.4.27.46-.5-1.12-1.15-.85-.35-1.71-.42-2.33-.39.28-1.06.7-2.14,1.28-3.02.69.13,1.33.29,1.84.66,1.14.84,1.79,2.1,1.89,1.78.16-.43-1.98-2.53-3.24-3.09.73-.82,1.66-1.32,2.82-1.2,2.78.28,2.97,1.87,3.01,2.71.05,1.02,1.25.29,2.26.63Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M537.41,811.6c-.14,0-.28-.05-.4-.17-.35-.33-.86-1.53-1.2-2.85l-.02-.09.07-.05c.6-.48,1.25-.56,1.64-.61.06,0,.13-.02.18-.03-.26-.16-1.11-.13-1.84.19l-.15.07-.03-.16c-.23-1.09-.46-2.67-.2-4.01l.02-.09.09-.02c1.7-.39,3.33.36,3.77.65,0,0,.01,0,.02.01-.05-.15-.32-.54-1.27-.92-.92-.38-1.82-.4-2.27-.37h-.19s.05-.17.05-.17c.32-1.2.76-2.25,1.29-3.05l.05-.08.09.02c.65.12,1.34.28,1.9.69.61.45,1.08,1.02,1.4,1.39.08.09.16.19.23.27-.33-.6-1.95-2.22-3.11-2.74l-.17-.08.12-.14c.83-.94,1.82-1.36,2.93-1.25,3,.3,3.1,2.15,3.13,2.84,0,.16.05.27.12.34.15.13.46.11.82.09.38-.03.81-.05,1.23.08h0c1.35.45,2.49,1.92,2.66,2.97.11.69-.16,1.56-.76,2.41l-.1.14-.11-.14c-.75-.9-2.28-1.95-3.19-2.33.46.27,1.1.67,1.72,1.24.38.35.78.89,1.17,1.59l.05.08-.07.07c-.79.88-1.85,1.6-3.07,2.09l-.14.06-.04-.14c-.36-1.23-1.4-2.99-2.04-3.23.09.16.3.44.49.69.27.35.57.76.83,1.17.38.61.52,1.14.57,1.46l.02.11-.11.04c-.71.25-1.47.41-2.25.49-.29.03-.58.08-.86.15l-.12.03-.04-.12c-.29-.88-.95-1.99-1.35-2.07.03.11.14.34.24.54.23.46.55,1.09.61,1.72v.1s-.09.04-.09.04c-.54.21-.98.46-1.32.67-.39.23-.7.41-.98.41ZM536.09,808.6c.37,1.39.84,2.39,1.1,2.64.22.2.48.06,1.06-.28.33-.2.75-.44,1.26-.65-.08-.55-.36-1.11-.57-1.52-.22-.44-.34-.69-.23-.84.06-.07.15-.1.27-.08.59.1,1.25,1.38,1.52,2.13.25-.06.51-.1.78-.12.72-.08,1.42-.22,2.08-.44-.08-.4-.26-.84-.52-1.25-.25-.4-.55-.8-.82-1.15-.51-.67-.67-.9-.56-1.06.04-.05.11-.11.27-.08.77.17,1.87,2.06,2.27,3.3,1.09-.46,2.04-1.11,2.76-1.89-.36-.64-.72-1.12-1.07-1.44-.71-.65-1.46-1.08-1.91-1.34-.38-.22-.48-.27-.43-.41.04-.13.2-.12.32-.11.8.07,2.8,1.38,3.76,2.44.49-.74.71-1.49.61-2.06-.16-.97-1.26-2.35-2.48-2.75h0c-.36-.12-.77-.09-1.13-.07-.42.03-.78.05-1.02-.15-.13-.12-.2-.29-.21-.53-.03-.69-.11-2.31-2.89-2.59-.97-.1-1.83.25-2.58,1.03,1.26.65,3.35,2.64,3.15,3.18-.03.1-.11.13-.15.14-.16.03-.3-.14-.6-.5-.32-.39-.77-.92-1.35-1.35-.44-.33-.98-.49-1.7-.62-.47.73-.86,1.67-1.16,2.72.51-.01,1.35.05,2.2.4,1.04.42,1.43.91,1.45,1.2,0,.1-.03.19-.11.23-.05.03-.17.07-.34-.05-.41-.27-1.9-.95-3.47-.63-.21,1.21-.03,2.62.18,3.65.78-.3,1.8-.37,2.07,0,.06.09.08.17.05.24-.06.13-.21.15-.46.18-.34.04-.91.11-1.43.5ZM538.91,808.12h0Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M546.21,800.49c-2.91,2.28.07,4.08,1.81,4.47,1.42.31,2.43.02,4.04-.55,1.51-.53,4.02-3.24,3.87-3.22-.15.02-1.29-1.05-1.71-1.45-.85-.79-2.86-2.35-4.76-2.66-2.01-.32-2.49,2.12-2.51,2.52-.02.4-.53.72-.73.88Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M549.14,805.21c-.36,0-.74-.04-1.14-.13-1.05-.23-2.81-1.07-3.1-2.33-.18-.79.23-1.59,1.23-2.37l.09-.07c.21-.16.58-.43.59-.72.02-.29.26-1.58,1.09-2.26.44-.35.97-.48,1.57-.39,2.29.37,4.58,2.46,4.83,2.69l.07.07c.91.85,1.44,1.31,1.56,1.35l.12-.02v.12c.07.29-2.58,2.89-3.96,3.37-1.15.4-2.01.68-2.97.68ZM549.1,797.19c-.39,0-.73.12-1.03.36-.76.61-.98,1.8-.99,2.06-.02.41-.45.73-.7.92l-.09.06c-.91.71-1.29,1.42-1.14,2.1.26,1.14,1.91,1.91,2.89,2.13,1.41.31,2.42,0,3.96-.54,1.28-.45,3.3-2.51,3.72-3.03-.21-.13-.61-.48-1.54-1.34l-.07-.07c-.25-.23-2.48-2.27-4.69-2.62-.11-.02-.22-.03-.33-.03Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M544.75,793.59c1.88,2.14,3.16-.14,3.38-1.46.18-1.08-.09-1.83-.59-3.03-.47-1.13-2.67-2.95-2.65-2.84.02.11-.76.99-1.05,1.32-.58.66-1.71,2.21-1.87,3.65-.17,1.52,1.74,1.83,2.05,1.84.31,0,.58.38.71.53Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M546.24,794.6c-.52,0-1.05-.31-1.59-.93h0l-.06-.07c-.13-.15-.35-.41-.56-.42-.23,0-1.27-.16-1.83-.8-.29-.33-.41-.72-.35-1.18.19-1.74,1.72-3.53,1.9-3.72l.04-.05c.59-.67.91-1.06.97-1.19l-.02-.09.12-.04c.27-.08,2.4,1.95,2.81,2.93.49,1.19.79,1.97.6,3.1-.14.82-.7,2.13-1.67,2.41-.12.03-.24.05-.36.05ZM544.96,786.44c-.11.17-.37.5-.97,1.17l-.04.05c-.17.19-1.65,1.91-1.83,3.57-.04.38.06.71.29.97.5.57,1.46.71,1.63.71.33,0,.6.33.76.52l.05.06c.59.67,1.15.94,1.67.79.84-.24,1.35-1.47,1.48-2.19.18-1.06-.1-1.81-.58-2.95-.39-.94-2.01-2.37-2.46-2.71Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <path d="M541.03,804.69c.36-.22.61-.55.87-.89.3-.39.58-.78.85-1.19.54-.81,1.02-1.66,1.45-2.53.05-.1-.03-.24-.15-.2-.24.08-.47.07-.69-.04-.15-.08-.29.15-.14.23.29.15.59.17.9.07-.05-.07-.1-.13-.15-.2-.4.83-.86,1.63-1.36,2.39-.24.37-.5.74-.77,1.09-.27.37-.55.78-.95,1.02-.15.09-.01.33.14.23h0Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25" />
                <path d="M544.21,800.01c1.28.2,2.58-.03,3.87.1,1.46.15,2.83.89,4.26,1.19.17.04.24-.23.07-.26-1.42-.3-2.76-1-4.21-1.18-1.3-.17-2.63.1-3.92-.1-.17-.03-.24.23-.07.26h0Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25" />
                <path d="M537.22,796.67c.7.7,1.54,1.24,2.47,1.58.16.06.23-.2.07-.26-.88-.33-1.68-.85-2.35-1.51-.12-.12-.31.07-.19.19h0Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25" />
                <g>
                  <path d="M555.96,792.04c.08.4-.15,1.21-.59,2.14-.62-.43-1.57-.81-2.09-.91-.68-.13.44,1.04,1.58,1.89-.46.81-1.04,1.65-1.67,2.35-.51-.93-1.48-2.39-1.91-2.74-.63-.51-1.45-.54-.75.01.65.5,1.51,1.81,1.97,3.43-.19.18-.39.33-.59.47-.71.49-1.67.87-2.67,1.11-.27-1.44-1.35-4.04-1.8-3.77-.49.3.99,1.97.91,3.93-1.81.25-3.54-.05-3.99-1.18-.77-1.95,0-2.36-.41-2.77-.41-.42-.5.29-.76-.51-.42-1.33-.18-2.49.39-3.44.12.02.26.05.39.09.97.26,2.28.97,2.41,1.3.26.64,1.23.13.54-.71-.53-.65-2.12-1.05-3.08-1.07.74-.98,1.84-1.67,2.82-1.92.47-.12,1.23-.12,2.11-.02.74,1.95-.13,2.93.29,3.03.41.1,1.53-1.75,1.19-2.83.82.15,1.67.34,2.47.55-.21,1.29-.62,1.67-.13,1.53.46-.13.95-.75,1.1-1.24,1.26.41,2.19.88,2.26,1.27Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M547.22,800.17c-1.33,0-2.6-.35-2.99-1.34-.48-1.21-.38-1.86-.32-2.25.04-.27.05-.36-.06-.47-.12-.13-.18-.11-.26-.09-.26.07-.39-.04-.53-.48-.39-1.23-.25-2.46.4-3.55l.05-.08.09.02c.14.03.27.05.4.09.96.26,2.34.97,2.5,1.38.05.13.14.2.25.21.1,0,.2-.06.24-.15.08-.16.01-.39-.18-.62-.51-.63-2.09-1-2.98-1.02h-.26s.16-.22.16-.22c.7-.94,1.81-1.69,2.89-1.97.58-.15,1.5-.1,2.16-.03h.08s.03.09.03.09c.46,1.23.31,2.08.22,2.58-.03.14-.06.32-.04.36.03.01.13-.02.3-.22.46-.53.97-1.71.74-2.43l-.07-.21.22.04c.81.14,1.67.34,2.48.56l.12.03-.02.12c-.08.52-.2.89-.28,1.14-.03.09-.06.19-.07.25.01,0,.03,0,.05-.01.41-.11.87-.7,1-1.15l.04-.13.13.04c1.48.48,2.27.95,2.35,1.37.08.42-.14,1.23-.6,2.23l-.07.15-.13-.09c-.6-.41-1.53-.79-2.04-.89-.01,0-.02,0-.03,0,.1.24.77.95,1.71,1.65l.1.07-.06.1c-.51.89-1.09,1.71-1.68,2.38l-.13.14-.09-.17c-.53-.96-1.48-2.39-1.88-2.7-.3-.24-.61-.34-.76-.36.03.04.08.09.17.16.63.48,1.53,1.78,2.02,3.5l.02.08-.06.06c-.18.16-.38.32-.61.48-.69.48-1.66.88-2.72,1.13l-.14.03-.03-.14c-.3-1.6-1.3-3.68-1.59-3.68h0c-.12.07.09.54.27.96.32.74.76,1.74.71,2.86v.11s-.12.02-.12.02c-.37.05-.76.08-1.14.08ZM543.68,795.73c.1,0,.23.04.37.18.21.21.18.43.13.7-.06.39-.15.97.3,2.11.44,1.1,2.19,1.3,3.73,1.11.01-1.01-.39-1.94-.69-2.62-.28-.64-.48-1.11-.16-1.3.08-.05.18-.05.27,0,.57.26,1.43,2.43,1.7,3.73.97-.24,1.85-.62,2.49-1.06.2-.14.37-.27.52-.4-.48-1.62-1.31-2.83-1.9-3.28-.24-.19-.34-.33-.32-.46.01-.07.06-.13.14-.16.22-.09.73.09,1.1.4.44.35,1.33,1.7,1.85,2.62.52-.6,1.02-1.31,1.47-2.09-.4-.31-1.91-1.52-1.72-1.94.03-.08.12-.16.35-.12.49.1,1.36.44,2,.84.39-.87.58-1.58.51-1.92h0c-.04-.23-.6-.64-2.05-1.12-.2.5-.67,1.07-1.14,1.2-.09.02-.25.07-.35-.03-.1-.11-.06-.25.03-.55.07-.22.17-.55.25-.99-.7-.19-1.43-.35-2.14-.48.13.84-.39,2-.88,2.53-.19.21-.37.3-.52.26-.29-.07-.24-.35-.18-.67.09-.47.23-1.24-.18-2.36-.88-.09-1.56-.08-1.98.03-.94.24-1.91.87-2.58,1.67.98.08,2.4.47,2.92,1.11.38.45.27.79.21.91-.09.19-.29.31-.5.3-.21,0-.4-.15-.49-.37-.1-.24-1.28-.94-2.32-1.22-.1-.03-.2-.05-.29-.07-.57,1-.68,2.12-.33,3.25.09.27.14.31.14.31,0,0,.03,0,.05-.01.04-.01.1-.03.16-.03ZM550.4,794.46h0Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <path d="M544.37,799.81c-.36-.8-.59-1.66-.66-2.54-.04-.49,0-.87.42-1.17.35-.24.74-.43,1.13-.59.77-.31,1.57-.53,2.36-.77.85-.27,1.7-.53,2.55-.8.17-.05.1-.31-.07-.26-.97.3-1.94.61-2.91.91-.9.28-1.82.53-2.66.96-.33.17-.71.37-.92.68-.23.32-.19.72-.15,1.1.08.91.32,1.79.69,2.62.07.16.3.02.23-.14h0Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25" />
              </g>
              <g id="Bedroom_21" data-name="Bedroom_2" filter="url(#ds-soft)">
                <g>
                  <path d="M301.66,530.15h50.9c2.32,0,4.2,1.88,4.2,4.2v87.08c0,.44-.35.79-.79.79h-57.48c-.57,0-1.04-.47-1.04-1.04v-86.83c0-2.32,1.88-4.2,4.2-4.2Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M356.04,622.44h-57.61c-.66,0-1.2-.5-1.2-1.12v-87.51c0-2.14,1.85-3.88,4.13-3.88h51.51c2.28,0,4.13,1.74,4.13,3.88v87.72c0,.5-.43.91-.97.91ZM301.36,530.37c-2.02,0-3.66,1.54-3.66,3.44v87.51c0,.38.33.69.73.69h57.61c.28,0,.5-.21.5-.47v-87.72c0-1.9-1.64-3.44-3.66-3.44h-51.51Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <rect x="295.55" y="526.27" width="62.88" height="8.13" rx="2.63" ry="2.63" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M356,534.62h-58.01c-1.47,0-2.67-1.12-2.67-2.51v-3.56c0-1.38,1.2-2.51,2.67-2.51h58.01c1.47,0,2.67,1.12,2.67,2.51v3.56c0,1.38-1.2,2.51-2.67,2.51ZM297.99,526.48c-1.21,0-2.2.93-2.2,2.07v3.56c0,1.14.99,2.07,2.2,2.07h58.01c1.21,0,2.2-.93,2.2-2.07v-3.56c0-1.14-.99-2.07-2.2-2.07h-58.01Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M296.78,572.38c-.33,4.15-.82,29.04-.33,32.48.49,3.43-1.64,14.02.16,13.88,1.8-.14,25.23,1.29,30.64,1.86,5.41.57,17.04,1.86,20.64,2.58,3.6.72,9.67.43,9.99-.72.33-1.14.16-48.21-.49-50.93-.66-2.72-60.62.86-60.62.86Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M352.48,623.77c-1.64,0-3.34-.14-4.63-.4-3.99-.79-17.88-2.28-20.62-2.57-5.41-.57-28.84-1.99-30.59-1.86-.19.02-.36-.05-.5-.17-.72-.67-.54-3.29-.17-7.53.22-2.46.44-5.01.25-6.36-.5-3.47,0-28.32.33-32.52v-.19s.22-.01.22-.01c.15,0,15.17-.9,30.07-1.45,30.34-1.12,30.67.25,30.79.76.52,2.14.97,49.36.49,51.04-.25.87-2.86,1.27-5.63,1.27ZM297,618.5c3.62,0,24.91,1.3,30.27,1.87,2.75.29,16.66,1.78,20.66,2.58,3.91.78,9.47.31,9.72-.56.15-.57.2-11.95.11-24.86-.08-11.66-.28-24.6-.61-25.97-.12-.36-2.66-1.44-30.41-.42-13.93.51-27.92,1.33-29.76,1.43-.33,4.7-.8,28.84-.32,32.24.2,1.4-.03,3.97-.25,6.46-.27,3.1-.58,6.6.03,7.18.05.05.09.05.13.05.09,0,.23-.01.41-.01Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M358.44,573.26c-.5.51-12.29-1.04-21.49-.99-18.96.11-39.84.79-41.4.49-1.2-.23-1.13-3.87-1.17-7.31-.04-3.21-.28-6.21.7-7.11,2.05-1.86,60.45-1.9,62.89.59,1.08,1.1.95,3.9,1.06,6.62.14,3.43.27,6.83-.59,7.7Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M357.56,573.58c-.94,0-2.62-.12-5.63-.35-4.23-.32-10.02-.76-14.98-.74-8.81.05-18.08.23-25.54.37-8.74.17-15.05.28-15.91.12-1.28-.24-1.31-3.2-1.35-6.62v-.9c-.02-.47-.03-.93-.04-1.38-.06-2.82-.12-5.05.8-5.89,1.49-1.35,27.34-1.66,44.03-1.2,8.17.22,18.12.72,19.19,1.81.96.98,1.02,3.15,1.08,5.44.01.44.02.88.04,1.31.14,3.56.28,6.91-.65,7.86h0c-.11.11-.4.17-1.05.17ZM337.43,572.05c4.87,0,10.44.43,14.54.74,3.04.23,5.92.46,6.31.3.78-.84.64-4.39.51-7.53-.02-.44-.03-.88-.04-1.32-.06-2.21-.11-4.3-.95-5.16-.27-.28-2.43-1.22-18.86-1.66-19.28-.53-42.56.05-43.7,1.08-.77.7-.72,3.06-.66,5.57.01.45.02.92.03,1.38v.9c.04,2.68.07,6.03.99,6.2.81.15,7.43.03,15.81-.13,7.46-.14,16.73-.32,25.54-.37.16,0,.32,0,.48,0Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M305.95,537.98c-1.87,3.26-.13,13.68,0,15.31.57,6.99,41.29,3.26,42.6,1.15,1.12-1.82,1.31-17.17-1.15-17.88-1.22-.35-11.67-1.18-21.45-1.06-9.96.12-19.26,1.19-20,2.49Z" fill="#f5f3ef" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M323.1,557.58c-4.62,0-8.98-.27-12.19-.96-3.32-.71-5.07-1.83-5.19-3.31-.02-.25-.08-.69-.15-1.28-.43-3.39-1.44-11.32.18-14.15.88-1.55,11.07-2.5,20.2-2.61,9.72-.12,20.25.7,21.52,1.07.4.12.74.51,1.02,1.19,1.52,3.65,1.25,15.41.26,17.01-.8,1.3-14.05,3.04-25.65,3.04ZM327.88,535.69c-.64,0-1.29,0-1.93.01-11.11.13-19.2,1.34-19.8,2.38h0c-1.55,2.71-.55,10.54-.13,13.89.08.6.13,1.05.15,1.3.11,1.27,1.73,2.26,4.83,2.92,11.69,2.5,36.49-.5,37.33-1.87.96-1.56,1.2-13.05-.29-16.63-.28-.68-.55-.88-.73-.93-1.17-.34-10.36-1.06-19.45-1.06Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25" />
                </g>
              </g>
              <g>
                <rect x="290.71" y="655.83" width="65" height="19.47" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                <path d="M356.06,675.49h-65.7s0-19.84,0-19.84h65.7s0,19.84,0,19.84ZM291.05,675.13h64.3s0-19.1,0-19.1h-64.3s0,19.1,0,19.1Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
              </g>
              <g>
                <rect x="369.26" y="521.78" width="21.84" height="31.12" transform="translate(-157.15 917.52) rotate(-90)" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                <path d="M396.04,526.3v22.07s-31.71,0-31.71,0v-22.07s31.71,0,31.71,0ZM395.46,548.14v-21.6s-30.53,0-30.53,0v21.6s30.53,0,30.53,0Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
              </g>
              <g>
                <rect x="264" y="522.54" width="21.84" height="31.12" transform="translate(-263.18 813.01) rotate(-90)" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                <path d="M290.77,527.06v22.07s-31.71,0-31.71,0v-22.07s31.71,0,31.71,0ZM290.19,548.9v-21.6s-30.53,0-30.53,0v21.6s30.53,0,30.53,0Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
              </g>
              <g filter="url(#ds-soft)">
                <g>
                  <rect x="822.52" y="194.2" width="25.1" height="1.28" transform="translate(382.36 -533.42) rotate(45)" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M843.5,204.44l-18.02-18.02,1.17-1.17,18.02,18.02-1.17,1.17ZM826.02,186.42l17.48,17.48.63-.63-17.48-17.48-.63.63Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <g>
                    <rect x="815.04" y="192.28" width="25.1" height="20.08" transform="translate(385.46 -525.94) rotate(45)" fill="#f3f0ee" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M829.37,218.57l-18.02-18.02,14.47-14.47,18.02,18.02-14.47,14.47ZM811.89,200.55l17.48,17.48,13.93-13.93-17.48-17.48-13.93,13.93Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <rect x="817.65" y="181.79" width="1.27" height="22.4" transform="translate(376.13 -522.09) rotate(45)" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M810.82,201.62l-1.16-1.16,16.11-16.11,1.16,1.16-16.11,16.11ZM810.19,200.46l.63.63,15.57-15.57-.63-.63-15.57,15.57Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <rect x="836.3" y="200.43" width="1.27" height="22.4" transform="translate(394.78 -529.81) rotate(45)" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M829.46,220.27l-1.16-1.16,16.11-16.11,1.16,1.16-16.11,16.11ZM828.84,219.1l.63.63,15.57-15.57-.63-.63-15.57,15.57Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <path d="M839.39,207.51s0,0,0,0l2.11-.95-.47-.63.05-.05c.23-.23.23-.61,0-.85l-3.01-3.01-6.44-8.5-5.84-5.27-.87-.34-1.6.45s-.63,1.49-.87,2.04c-.04.06-.07.13-.09.2,0,0,0,0,0,0h0c-.04.19.01.4.16.55l16.21,16.21c.17.17.43.22.64.13h0s0,0,0,0Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M838.61,207.52l-16.21-16.21c-.16-.16-.25-.39-.23-.62l-.03-.03.05-.11c.02-.08.05-.16.1-.23.48-1.13.81-1.9.85-2l.02-.1,1.77-.5.96.37.03.02,5.86,5.28h.01s6.43,8.5,6.43,8.5l3,3c.28.28.31.73.06,1.04l.52.69-2.49,1.12v-.02c-.26.05-.53-.03-.71-.22ZM822.56,190.67c-.02.13.02.27.11.36l16.21,16.21c.11.11.29.15.44.09h0s1.89-.85,1.89-.85l-.43-.57.17-.17c.16-.16.16-.42,0-.58l-3.03-3.03-6.43-8.48-5.81-5.23-.78-.3-1.45.41c-.07.18-.27.65-.83,1.95l-.02.03s-.05.09-.06.14v.02Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <path d="M826.93,216.67l.67-2.5c.22-.77.64-1.48,1.21-2.05l5.14-5.14c.76-.76,1.74-1.27,2.8-1.45l1.67-.28-4.29,5.89-7.02,5.65c-.09.07-.21-.01-.18-.12Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M826.82,216.91c-.08-.08-.11-.19-.08-.29l.66-2.5c.23-.81.66-1.54,1.26-2.14l5.14-5.14c.79-.79,1.8-1.31,2.9-1.5l2.14-.36-4.58,6.29-.02.02-7.02,5.65c-.11.08-.25.09-.36.01-.02-.01-.03-.02-.05-.04ZM837.99,205.51l-1.21.21c-1.03.17-1.96.66-2.7,1.39l-5.14,5.14c-.55.55-.95,1.23-1.16,1.97l-.6,2.26,6.81-5.48,4-5.49Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <rect x="832.17" y="203.45" width="2.88" height="17.14" rx="1.44" ry="1.44" transform="translate(394.08 -527.35) rotate(45)" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M827.99,218.79l-1.15-1.15c-.32-.32-.32-.84,0-1.16l11.24-11.24c.32-.32.84-.32,1.16,0l1.15,1.15c.32.32.32.84,0,1.16l-11.24,11.24c-.32.32-.84.32-1.16,0ZM838.96,205.52c-.17-.17-.45-.17-.62,0l-11.24,11.24c-.17.17-.17.45,0,.62l1.15,1.15c.17.17.45.17.62,0l11.24-11.24c.17-.17.17-.45,0-.62l-1.15-1.15Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <rect x="820.51" y="194.66" width="25.87" height="3.55" rx="1.78" ry="1.78" transform="translate(383.02 -531.8) rotate(45)" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M840.75,206.53l-17.39-17.39c-.32-.32-.32-.85,0-1.18l1.61-1.61c.32-.32.85-.32,1.18,0l17.39,17.39c.32.32.32.85,0,1.18l-1.61,1.61c-.32.32-.85.32-1.18,0ZM825.87,186.63c-.18-.18-.46-.18-.64,0l-1.61,1.61c-.18.18-.18.46,0,.64l17.39,17.39c.18.18.46.18.64,0l1.61-1.61c.18-.18.18-.46,0-.64l-17.39-17.39Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <path d="M813,203.07l2.71-.78c.77-.22,1.48-.64,2.05-1.21l5.14-5.14c.76-.76,1.27-1.74,1.45-2.8l.28-1.67-5.89,4.29-5.58,7.07c-.06.08-.26.27-.17.24Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M812.84,203.21s-.02-.02-.03-.04c-.09-.14.02-.25.14-.38.03-.03.05-.05.06-.07l5.6-7.09.02-.02,6.27-4.57-.36,2.14c-.19,1.11-.71,2.11-1.5,2.9l-5.14,5.14c-.59.59-1.33,1.02-2.13,1.25l-2.71.78c-.09.03-.17,0-.21-.05ZM812.95,202.89h0s0,0,0,0ZM818.88,195.9l-5.39,6.83,2.17-.62c.74-.21,1.42-.61,1.97-1.16l5.14-5.14c.74-.74,1.22-1.67,1.39-2.7l.21-1.21-5.49,4Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <rect x="816.42" y="187.71" width="2.88" height="17.14" rx="1.44" ry="1.44" transform="translate(1257.39 913.39) rotate(-135)" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M812.24,203.05l-1.15-1.15c-.32-.32-.32-.84,0-1.16l11.24-11.24c.32-.32.84-.32,1.16,0l1.15,1.15c.32.32.32.84,0,1.16l-11.24,11.24c-.32.32-.84.32-1.16,0ZM823.22,189.78c-.17-.17-.45-.17-.62,0l-11.24,11.24c-.17.17-.17.45,0,.62l1.15,1.15c.17.17.45.17.62,0l11.24-11.24c.17-.17.17-.45,0-.62l-1.15-1.15Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                </g>
              </g>
              <g filter="url(#ds-soft)">
                <g>
                  <rect x="755.8" y="194.2" width="25.1" height="1.28" transform="translate(87.27 600.37) rotate(-45)" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M777.94,186.42l-18.02,18.02-1.17-1.17,18.02-18.02,1.17,1.17ZM759.92,203.9l17.48-17.48-.63-.63-17.48,17.48.63.63Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <g>
                    <rect x="763.28" y="192.28" width="25.1" height="20.08" transform="translate(84.17 607.85) rotate(-45)" fill="#f3f0ee" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M792.08,200.55l-18.02,18.02-14.47-14.47,18.02-18.02,14.47,14.47ZM774.06,218.03l17.48-17.48-13.93-13.93-17.48,17.48,13.93,13.93Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <rect x="765.86" y="200.43" width="1.27" height="22.4" transform="translate(74.85 603.98) rotate(-45)" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M775.13,219.1l-1.16,1.16-16.11-16.11,1.16-1.16,16.11,16.11ZM773.96,219.73l.63-.63-15.57-15.57-.63.63,15.57,15.57Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <rect x="784.5" y="181.79" width="1.27" height="22.4" transform="translate(93.5 611.7) rotate(-45)" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M793.77,200.46l-1.16,1.16-16.11-16.11,1.16-1.16,16.11,16.11ZM792.61,201.08l.63-.63-15.57-15.57-.63.63,15.57,15.57Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <path d="M781.02,190.52s0,0,0,0l-.95-2.11-.63.47-.05-.05c-.23-.23-.61-.23-.85,0l-3.01,3.01-8.5,6.44-5.27,5.84-.34.87.45,1.6s1.49.63,2.04.87c.06.04.13.07.2.09,0,0,0,0,0,0h0c.19.04.4-.01.55-.16l16.21-16.21c.17-.17.22-.43.13-.64h0s0,0,0,0Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M781.02,191.3l-16.21,16.21c-.16.16-.39.25-.62.23l-.03.03-.11-.05c-.08-.02-.16-.05-.23-.1-1.13-.48-1.9-.81-2-.85l-.1-.02-.5-1.77.37-.96.02-.03,5.28-5.86h.01s8.49-6.44,8.49-6.44l3-3c.28-.28.73-.31,1.04-.06l.69-.52,1.12,2.49h-.02c.05.26-.03.53-.22.71ZM764.18,207.36c.13.02.27-.02.36-.11l16.21-16.21c.11-.11.15-.29.09-.44h0s-.85-1.9-.85-1.9l-.57.43-.17-.17c-.16-.16-.42-.16-.58,0l-3.03,3.03-8.48,6.43-5.23,5.81-.3.78.41,1.45c.18.07.65.27,1.95.83l.03.02s.09.05.14.06h.02Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <path d="M790.17,202.99l-2.5-.67c-.77-.22-1.48-.64-2.05-1.21l-5.14-5.14c-.76-.76-1.27-1.74-1.45-2.8l-.28-1.67,5.89,4.29,5.65,7.02c.07.09-.01.21-.12.18Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M790.42,203.1c-.08.08-.19.11-.29.08l-2.5-.66c-.81-.23-1.54-.66-2.14-1.26l-5.14-5.14c-.79-.79-1.31-1.8-1.5-2.9l-.36-2.14,6.29,4.58.02.02,5.65,7.02c.08.11.09.25.01.36-.01.02-.02.03-.04.05ZM779.02,191.93l.21,1.21c.17,1.03.66,1.96,1.39,2.7l5.14,5.14c.55.55,1.23.95,1.97,1.16l2.26.6-5.48-6.81-5.49-4Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <rect x="784.09" y="187.74" width="2.88" height="17.14" rx="1.44" ry="1.44" transform="translate(91.26 612.95) rotate(-45)" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M792.3,201.93l-1.15,1.15c-.32.32-.84.32-1.16,0l-11.24-11.24c-.32-.32-.32-.84,0-1.16l1.15-1.15c.32-.32.84-.32,1.16,0l11.24,11.24c.32.32.32.84,0,1.16ZM779.03,190.96c-.17.17-.17.45,0,.62l11.24,11.24c.17.17.45.17.62,0l1.15-1.15c.17-.17.17-.45,0-.62l-11.24-11.24c-.17-.17-.45-.17-.62,0l-1.15,1.15Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <rect x="757.01" y="194.7" width="25.87" height="3.55" rx="1.78" ry="1.78" transform="translate(86.59 601.98) rotate(-45)" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M780.03,189.17l-17.39,17.39c-.32.32-.85.32-1.18,0l-1.61-1.61c-.32-.32-.32-.85,0-1.18l17.39-17.39c.32-.32.85-.32,1.18,0l1.61,1.61c.32.32.32.85,0,1.18ZM760.13,204.04c-.18.18-.18.46,0,.64l1.61,1.61c.18.18.46.18.64,0l17.39-17.39c.18-.18.18-.46,0-.64l-1.61-1.61c-.18-.18-.46-.18-.64,0l-17.39,17.39Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <path d="M776.58,216.91l-.78-2.71c-.22-.77-.64-1.48-1.21-2.05l-5.14-5.14c-.76-.76-1.74-1.27-2.8-1.45l-1.67-.28,4.29,5.89,7.07,5.58c.08.06.27.26.24.17Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M776.71,217.07s-.02.02-.04.03c-.14.09-.25-.02-.38-.14-.03-.03-.05-.05-.07-.06l-7.09-5.6-.02-.02-4.57-6.27,2.14.36c1.11.19,2.11.71,2.9,1.5l5.14,5.14c.59.59,1.02,1.33,1.25,2.13l.78,2.71c.03.09,0,.17-.05.21ZM776.4,216.97h0s0,0,0,0ZM769.41,211.03l6.83,5.39-.62-2.17c-.21-.74-.61-1.42-1.16-1.97l-5.14-5.14c-.74-.74-1.67-1.22-2.7-1.39l-1.21-.21,4,5.49Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                  <g>
                    <rect x="768.34" y="203.48" width="2.88" height="17.14" rx="1.44" ry="1.44" transform="translate(1464.05 -182.32) rotate(135)" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                    <path d="M776.56,217.67l-1.15,1.15c-.32.32-.84.32-1.16,0l-11.24-11.24c-.32-.32-.32-.84,0-1.16l1.15-1.15c.32-.32.84-.32,1.16,0l11.24,11.24c.32.32.32.84,0,1.16ZM763.28,206.7c-.17.17-.17.45,0,.62l11.24,11.24c.17.17.45.17.62,0l1.15-1.15c.17-.17.17-.45,0-.62l-11.24-11.24c-.17-.17-.45-.17-.62,0l-1.15,1.15Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  </g>
                </g>
              </g>
              <g filter="url(#ds-soft)">
                <g>
                  <path d="M533.39,224.99l-15.07,15.07-.59.59,13.67,13.67c2,2,5.24,2,7.24,0l1.95-1.95,7.06-7.06.28-.28c.64-.64,1-1.44,1.1-2.26.35-1.64-.11-3.42-1.38-4.7l-13.67-13.67-.59.59Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M548.08,245.18l-9.29,9.29c-2.08,2.08-5.46,2.08-7.54,0l-13.82-13.82,16.55-16.55,13.82,13.82c1.28,1.28,1.82,3.11,1.44,4.89-.11.9-.51,1.72-1.16,2.37ZM518.03,240.65l13.52,13.52c1.91,1.91,5.03,1.91,6.94,0l9.29-9.29c.58-.58.94-1.32,1.04-2.14.35-1.66-.14-3.34-1.32-4.52l-13.52-13.52-15.95,15.95Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M522.3,236.77h7.23v16.14c0,3.9-3.17,7.07-7.07,7.07h0c-2.21,0-4-1.79-4-4v-15.37c0-2.12,1.72-3.84,3.84-3.84Z" transform="translate(-22.15 443.27) rotate(-45)" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M531.27,257.82c-1.64,1.64-4.31,1.64-5.95,0l-10.87-10.87c-1.58-1.58-1.58-4.15,0-5.73l5.26-5.26,11.56,11.56c2.84,2.84,2.84,7.46,0,10.3ZM514.74,241.51c-1.41,1.41-1.41,3.72,0,5.13l10.87,10.87c1.48,1.48,3.88,1.48,5.36,0,2.68-2.68,2.67-7.03,0-9.7l-11.27-11.27-4.96,4.96Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M540.17,219.05h0c3.9,0,7.07,3.17,7.07,7.07v16.14h-7.23c-2.12,0-3.84-1.72-3.84-3.84v-15.37c0-2.21,1.79-4,4-4Z" transform="translate(1087.86 10.71) rotate(135)" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M551.15,237.93c-2.84,2.84-7.46,2.84-10.3,0l-11.56-11.56,5.26-5.26c1.58-1.58,4.15-1.58,5.73,0l10.87,10.87c1.64,1.64,1.64,4.31,0,5.95ZM529.89,226.37l11.27,11.27c2.68,2.68,7.03,2.68,9.7,0,1.48-1.48,1.48-3.88,0-5.36l-10.87-10.87c-1.41-1.41-3.72-1.41-5.13,0l-4.96,4.96Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M531,218.96l-2.97,2.97-12.78,12.78-2.97,2.97c-.65.65-.65,1.71,0,2.36h0c3.22,3.22,8.43,3.22,11.65,0l1.99-1.99,5.44-5.44,1.99-1.99c3.22-3.22,3.22-8.43,0-11.65h0c-.65-.65-1.71-.65-2.36,0Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M533.51,230.76l-9.41,9.41c-3.29,3.29-8.65,3.29-11.95,0-.73-.73-.73-1.92,0-2.65l18.71-18.71c.73-.73,1.92-.73,2.65,0,3.29,3.29,3.29,8.65,0,11.95ZM512.44,237.81c-.57.57-.57,1.49,0,2.06,3.13,3.13,8.22,3.13,11.35,0l9.41-9.41c3.13-3.13,3.13-8.22,0-11.35-.57-.57-1.49-.57-2.06,0l-18.71,18.71Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                </g>
              </g>
              <g filter="url(#ds-soft)">
                <g>
                  <path d="M607.07,240.05l-15.07-15.07-.59-.59-13.67,13.67c-2,2-2,5.24,0,7.24l1.95,1.95,7.06,7.06.28.28c.64.64,1.44,1,2.26,1.1,1.64.35,3.42-.11,4.7-1.38l13.67-13.67-.59-.59Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M586.89,254.74l-9.29-9.29c-2.08-2.08-2.08-5.46,0-7.54l13.82-13.82,16.55,16.55-13.82,13.82c-1.28,1.28-3.11,1.82-4.89,1.44-.9-.11-1.72-.51-2.37-1.16ZM591.42,224.69l-13.52,13.52c-1.91,1.91-1.91,5.03,0,6.94l9.29,9.29c.58.58,1.32.94,2.14,1.04,1.66.35,3.34-.14,4.52-1.32l13.52-13.52-15.95-15.95Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M581.99,219.05h7.23v16.14c0,3.9-3.17,7.07-7.07,7.07h0c-2.21,0-4-1.79-4-4v-15.37c0-2.12,1.72-3.84,3.84-3.84Z" transform="translate(334.06 -345.17) rotate(45)" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M574.25,237.93c-1.64-1.64-1.64-4.31,0-5.95l10.87-10.87c1.58-1.58,4.15-1.58,5.73,0l5.26,5.26-11.56,11.56c-2.84,2.84-7.46,2.84-10.3,0ZM590.55,221.4c-1.41-1.41-3.72-1.41-5.13,0l-10.87,10.87c-1.48,1.48-1.48,3.88,0,5.36,2.68,2.68,7.03,2.67,9.7,0l11.27-11.27-4.96-4.96Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M599.87,236.77h0c3.9,0,7.07,3.17,7.07,7.07v16.14h-7.23c-2.12,0-3.84-1.72-3.84-3.84v-15.37c0-2.21,1.79-4,4-4Z" transform="translate(851.03 849.25) rotate(-135)" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M594.13,257.82c-2.84-2.84-2.84-7.46,0-10.3l11.56-11.56,5.26,5.26c1.58,1.58,1.58,4.15,0,5.73l-10.87,10.87c-1.64,1.64-4.31,1.64-5.95,0ZM605.69,236.55l-11.27,11.27c-2.68,2.68-2.68,7.03,0,9.7,1.48,1.48,3.88,1.48,5.36,0l10.87-10.87c1.41-1.41,1.41-3.72,0-5.13l-4.96-4.96Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                </g>
                <g>
                  <path d="M613.1,237.67l-2.97-2.97-12.78-12.78-2.97-2.97c-.65-.65-1.71-.65-2.36,0h0c-3.22,3.22-3.22,8.43,0,11.65l1.99,1.99,5.44,5.44,1.99,1.99c3.22,3.22,8.43,3.22,11.65,0h0c.65-.65.65-1.71,0-2.36Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                  <path d="M601.3,240.17l-9.41-9.41c-3.29-3.29-3.29-8.65,0-11.95.73-.73,1.92-.73,2.65,0l18.71,18.71c.73.73.73,1.92,0,2.65-3.29,3.29-8.65,3.29-11.95,0ZM594.25,219.11c-.57-.57-1.49-.57-2.06,0-3.13,3.13-3.13,8.22,0,11.35l9.41,9.41c3.13,3.13,8.22,3.13,11.35,0,.57-.57.57-1.49,0-2.06l-18.71-18.71Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25" />
                </g>
              </g>
            </g>
            <g id="people1" data-name="people">
              <g>
                <g>
                  <path d="M375.8,430.9c-3.6,0-6.6-3-6.6-6.6s3-6.6,6.6-6.6,6.6,3,6.6,6.6-3,6.6-6.6,6.6Z" fill="#fff"/>
                  <path d="M375.8,417.9c3.5,0,6.4,2.9,6.4,6.4s-2.9,6.4-6.4,6.4-6.4-2.9-6.4-6.4,2.9-6.4,6.4-6.4M375.8,417.4c-3.8,0-6.9,3.1-6.9,6.9s3.1,6.9,6.9,6.9,6.9-3.1,6.9-6.9-3.1-6.9-6.9-6.9h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M375.8,417.2c3.9,0,7,3.2,7,7s-3.2,7-7,7-7-3.2-7-7,3.2-7,7-7ZM375.8,431c3.7,0,6.7-3,6.7-6.7s-3-6.7-6.7-6.7-6.7,3-6.7,6.7,3,6.7,6.7,6.7Z" fill="#fff"/>
                  <path d="M375.8,417.2c-3.9,0-7,3.2-7,7s3.2,7,7,7,7-3.2,7-7-3.2-7-7-7h0ZM375.8,431c-3.7,0-6.7-3-6.7-6.7s3-6.7,6.7-6.7,6.7,3,6.7,6.7-3,6.7-6.7,6.7h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <circle cx="375.8" cy="424.3" r="4.6" fill="#fff"/>
                  <path d="M375.8,419.9c2.4,0,4.3,2,4.3,4.3s-2,4.3-4.3,4.3-4.3-2-4.3-4.3,2-4.3,4.3-4.3M375.8,419.4c-2.7,0-4.8,2.2-4.8,4.8s2.2,4.8,4.8,4.8,4.8-2.2,4.8-4.8-2.2-4.8-4.8-4.8h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M375.8,419.2c2.8,0,5,2.3,5,5s-2.3,5-5,5-5-2.3-5-5,2.3-5,5-5ZM375.8,428.9c2.6,0,4.7-2.1,4.7-4.7s-2.1-4.7-4.7-4.7-4.7,2.1-4.7,4.7,2.1,4.7,4.7,4.7Z" fill="#fff"/>
                  <path d="M375.8,419.2c-2.8,0-5,2.3-5,5s2.3,5,5,5,5-2.3,5-5-2.3-5-5-5h0ZM375.8,428.9c-2.6,0-4.7-2.1-4.7-4.7s2.1-4.7,4.7-4.7,4.7,2.1,4.7,4.7-2.1,4.7-4.7,4.7h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M379,390.6c-3.6,0-6.6-3-6.6-6.6s3-6.6,6.6-6.6,6.6,3,6.6,6.6-3,6.6-6.6,6.6Z" fill="#fff"/>
                  <path d="M379,377.6c3.5,0,6.4,2.9,6.4,6.4s-2.9,6.4-6.4,6.4-6.4-2.9-6.4-6.4,2.9-6.4,6.4-6.4M379,377.1c-3.8,0-6.9,3.1-6.9,6.9s3.1,6.9,6.9,6.9,6.9-3.1,6.9-6.9-3.1-6.9-6.9-6.9h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M379,376.9c3.9,0,7,3.2,7,7s-3.2,7-7,7-7-3.2-7-7,3.2-7,7-7ZM379,390.7c3.7,0,6.7-3,6.7-6.7s-3-6.7-6.7-6.7-6.7,3-6.7,6.7,3,6.7,6.7,6.7Z" fill="#fff"/>
                  <path d="M379,376.9c-3.9,0-7,3.2-7,7s3.2,7,7,7,7-3.2,7-7-3.2-7-7-7h0ZM379,390.7c-3.7,0-6.7-3-6.7-6.7s3-6.7,6.7-6.7,6.7,3,6.7,6.7-3,6.7-6.7,6.7h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <circle cx="379" cy="384" r="4.6" fill="#fff"/>
                  <path d="M379,379.6c2.4,0,4.3,2,4.3,4.3s-2,4.3-4.3,4.3-4.3-2-4.3-4.3,2-4.3,4.3-4.3M379,379.1c-2.7,0-4.8,2.2-4.8,4.8s2.2,4.8,4.8,4.8,4.8-2.2,4.8-4.8-2.2-4.8-4.8-4.8h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M379,379c2.8,0,5,2.3,5,5s-2.3,5-5,5-5-2.3-5-5,2.3-5,5-5ZM379,388.7c2.6,0,4.7-2.1,4.7-4.7s-2.1-4.7-4.7-4.7-4.7,2.1-4.7,4.7,2.1,4.7,4.7,4.7Z" fill="#fff"/>
                  <path d="M379,379c-2.8,0-5,2.3-5,5s2.3,5,5,5,5-2.3,5-5-2.3-5-5-5h0ZM379,388.7c-2.6,0-4.7-2.1-4.7-4.7s2.1-4.7,4.7-4.7,4.7,2.1,4.7,4.7-2.1,4.7-4.7,4.7h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M379,390.6c-3.6,0-6.6-3-6.6-6.6s3-6.6,6.6-6.6,6.6,3,6.6,6.6-3,6.6-6.6,6.6Z" fill="#fff"/>
                  <path d="M379,377.6c3.5,0,6.4,2.9,6.4,6.4s-2.9,6.4-6.4,6.4-6.4-2.9-6.4-6.4,2.9-6.4,6.4-6.4M379,377.1c-3.8,0-6.9,3.1-6.9,6.9s3.1,6.9,6.9,6.9,6.9-3.1,6.9-6.9-3.1-6.9-6.9-6.9h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M379,376.9c3.9,0,7,3.2,7,7s-3.2,7-7,7-7-3.2-7-7,3.2-7,7-7ZM379,390.7c3.7,0,6.7-3,6.7-6.7s-3-6.7-6.7-6.7-6.7,3-6.7,6.7,3,6.7,6.7,6.7Z" fill="#fff"/>
                  <path d="M379,376.9c-3.9,0-7,3.2-7,7s3.2,7,7,7,7-3.2,7-7-3.2-7-7-7h0ZM379,390.7c-3.7,0-6.7-3-6.7-6.7s3-6.7,6.7-6.7,6.7,3,6.7,6.7-3,6.7-6.7,6.7h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <circle cx="379" cy="384" r="4.6" fill="#fff"/>
                  <path d="M379,379.6c2.4,0,4.3,2,4.3,4.3s-2,4.3-4.3,4.3-4.3-2-4.3-4.3,2-4.3,4.3-4.3M379,379.1c-2.7,0-4.8,2.2-4.8,4.8s2.2,4.8,4.8,4.8,4.8-2.2,4.8-4.8-2.2-4.8-4.8-4.8h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M379,379c2.8,0,5,2.3,5,5s-2.3,5-5,5-5-2.3-5-5,2.3-5,5-5ZM379,388.7c2.6,0,4.7-2.1,4.7-4.7s-2.1-4.7-4.7-4.7-4.7,2.1-4.7,4.7,2.1,4.7,4.7,4.7Z" fill="#fff"/>
                  <path d="M379,379c-2.8,0-5,2.3-5,5s2.3,5,5,5,5-2.3,5-5-2.3-5-5-5h0ZM379,388.7c-2.6,0-4.7-2.1-4.7-4.7s2.1-4.7,4.7-4.7,4.7,2.1,4.7,4.7-2.1,4.7-4.7,4.7h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M370.7,379.8c-1,0-1.9-.8-1.9-1.9s.8-1.9,1.9-1.9,1.9.8,1.9,1.9-.8,1.9-1.9,1.9Z" fill="#fff"/>
                  <path d="M370.7,376.3c.9,0,1.6.7,1.6,1.6s-.7,1.6-1.6,1.6-1.6-.7-1.6-1.6.7-1.6,1.6-1.6M370.7,375.8c-1.2,0-2.1,1-2.1,2.1s1,2.1,2.1,2.1,2.1-1,2.1-2.1-1-2.1-2.1-2.1h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M370.7,375.6c1.3,0,2.3,1,2.3,2.3s-1,2.3-2.3,2.3-2.3-1-2.3-2.3,1-2.3,2.3-2.3ZM370.7,379.9c1.1,0,2-.9,2-2s-.9-2-2-2-2,.9-2,2,.9,2,2,2Z" fill="#fff"/>
                  <path d="M370.7,375.6c-1.3,0-2.3,1-2.3,2.3s1,2.3,2.3,2.3,2.3-1,2.3-2.3-1-2.3-2.3-2.3h0ZM370.7,379.9c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M370.7,379.2c-.7,0-1.3-.6-1.3-1.3s.6-1.3,1.3-1.3,1.3.6,1.3,1.3-.6,1.3-1.3,1.3Z" fill="#fff"/>
                  <path d="M370.7,376.9c.6,0,1,.5,1,1s-.5,1-1,1-1-.5-1-1,.5-1,1-1M370.7,376.4c-.8,0-1.5.7-1.5,1.5s.7,1.5,1.5,1.5,1.5-.7,1.5-1.5-.7-1.5-1.5-1.5h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M370.7,376.2c.9,0,1.7.8,1.7,1.7s-.8,1.7-1.7,1.7-1.7-.8-1.7-1.7.8-1.7,1.7-1.7ZM370.7,379.3c.7,0,1.3-.6,1.3-1.3s-.6-1.3-1.3-1.3-1.3.6-1.3,1.3.6,1.3,1.3,1.3Z" fill="#fff"/>
                  <path d="M370.7,376.2c-.9,0-1.7.8-1.7,1.7s.8,1.7,1.7,1.7,1.7-.8,1.7-1.7-.8-1.7-1.7-1.7h0ZM370.7,379.3c-.7,0-1.3-.6-1.3-1.3s.6-1.3,1.3-1.3,1.3.6,1.3,1.3-.6,1.3-1.3,1.3h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M370.7,379.8c-1,0-1.9-.8-1.9-1.9s.8-1.9,1.9-1.9,1.9.8,1.9,1.9-.8,1.9-1.9,1.9Z" fill="#fff"/>
                  <path d="M370.7,376.3c.9,0,1.6.7,1.6,1.6s-.7,1.6-1.6,1.6-1.6-.7-1.6-1.6.7-1.6,1.6-1.6M370.7,375.8c-1.2,0-2.1,1-2.1,2.1s1,2.1,2.1,2.1,2.1-1,2.1-2.1-1-2.1-2.1-2.1h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M370.7,375.6c1.3,0,2.3,1,2.3,2.3s-1,2.3-2.3,2.3-2.3-1-2.3-2.3,1-2.3,2.3-2.3ZM370.7,379.9c1.1,0,2-.9,2-2s-.9-2-2-2-2,.9-2,2,.9,2,2,2Z" fill="#fff"/>
                  <path d="M370.7,375.6c-1.3,0-2.3,1-2.3,2.3s1,2.3,2.3,2.3,2.3-1,2.3-2.3-1-2.3-2.3-2.3h0ZM370.7,379.9c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M370.7,379.2c-.7,0-1.3-.6-1.3-1.3s.6-1.3,1.3-1.3,1.3.6,1.3,1.3-.6,1.3-1.3,1.3Z" fill="#fff"/>
                  <path d="M370.7,376.9c.6,0,1,.5,1,1s-.5,1-1,1-1-.5-1-1,.5-1,1-1M370.7,376.4c-.8,0-1.5.7-1.5,1.5s.7,1.5,1.5,1.5,1.5-.7,1.5-1.5-.7-1.5-1.5-1.5h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M370.7,376.2c.9,0,1.7.8,1.7,1.7s-.8,1.7-1.7,1.7-1.7-.8-1.7-1.7.8-1.7,1.7-1.7ZM370.7,379.3c.7,0,1.3-.6,1.3-1.3s-.6-1.3-1.3-1.3-1.3.6-1.3,1.3.6,1.3,1.3,1.3Z" fill="#fff"/>
                  <path d="M370.7,376.2c-.9,0-1.7.8-1.7,1.7s.8,1.7,1.7,1.7,1.7-.8,1.7-1.7-.8-1.7-1.7-1.7h0ZM370.7,379.3c-.7,0-1.3-.6-1.3-1.3s.6-1.3,1.3-1.3,1.3.6,1.3,1.3-.6,1.3-1.3,1.3h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M370.9,411.4c-1,0-1.9-.8-1.9-1.9s.8-1.9,1.9-1.9,1.9.8,1.9,1.9-.8,1.9-1.9,1.9Z" fill="#fff"/>
                  <path d="M370.9,407.8c.9,0,1.6.7,1.6,1.6s-.7,1.6-1.6,1.6-1.6-.7-1.6-1.6.7-1.6,1.6-1.6M370.9,407.3c-1.2,0-2.1,1-2.1,2.1s1,2.1,2.1,2.1,2.1-1,2.1-2.1-1-2.1-2.1-2.1h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M370.9,407.2c1.3,0,2.3,1,2.3,2.3s-1,2.3-2.3,2.3-2.3-1-2.3-2.3,1-2.3,2.3-2.3ZM370.9,411.5c1.1,0,2-.9,2-2s-.9-2-2-2-2,.9-2,2,.9,2,2,2Z" fill="#fff"/>
                  <path d="M370.9,407.2c-1.3,0-2.3,1-2.3,2.3s1,2.3,2.3,2.3,2.3-1,2.3-2.3-1-2.3-2.3-2.3h0ZM370.9,411.5c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <circle cx="370.9" cy="409.5" r="1.3" fill="#fff"/>
                  <path d="M370.9,408.5c.6,0,1,.5,1,1s-.5,1-1,1-1-.5-1-1,.5-1,1-1M370.9,408c-.8,0-1.5.7-1.5,1.5s.7,1.5,1.5,1.5,1.5-.7,1.5-1.5-.7-1.5-1.5-1.5h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M370.9,407.8c.9,0,1.7.8,1.7,1.7s-.8,1.7-1.7,1.7-1.7-.8-1.7-1.7.8-1.7,1.7-1.7ZM370.9,410.8c.7,0,1.3-.6,1.3-1.3s-.6-1.3-1.3-1.3-1.3.6-1.3,1.3.6,1.3,1.3,1.3Z" fill="#fff"/>
                  <path d="M370.9,407.8c-.9,0-1.7.8-1.7,1.7s.8,1.7,1.7,1.7,1.7-.8,1.7-1.7-.8-1.7-1.7-1.7h0ZM370.9,410.8c-.7,0-1.3-.6-1.3-1.3s.6-1.3,1.3-1.3,1.3.6,1.3,1.3-.6,1.3-1.3,1.3h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M370.9,411.4c-1,0-1.9-.8-1.9-1.9s.8-1.9,1.9-1.9,1.9.8,1.9,1.9-.8,1.9-1.9,1.9Z" fill="#fff"/>
                  <path d="M370.9,407.8c.9,0,1.6.7,1.6,1.6s-.7,1.6-1.6,1.6-1.6-.7-1.6-1.6.7-1.6,1.6-1.6M370.9,407.3c-1.2,0-2.1,1-2.1,2.1s1,2.1,2.1,2.1,2.1-1,2.1-2.1-1-2.1-2.1-2.1h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M370.9,407.2c1.3,0,2.3,1,2.3,2.3s-1,2.3-2.3,2.3-2.3-1-2.3-2.3,1-2.3,2.3-2.3ZM370.9,411.5c1.1,0,2-.9,2-2s-.9-2-2-2-2,.9-2,2,.9,2,2,2Z" fill="#fff"/>
                  <path d="M370.9,407.2c-1.3,0-2.3,1-2.3,2.3s1,2.3,2.3,2.3,2.3-1,2.3-2.3-1-2.3-2.3-2.3h0ZM370.9,411.5c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <circle cx="370.9" cy="409.5" r="1.3" fill="#fff"/>
                  <path d="M370.9,408.5c.6,0,1,.5,1,1s-.5,1-1,1-1-.5-1-1,.5-1,1-1M370.9,408c-.8,0-1.5.7-1.5,1.5s.7,1.5,1.5,1.5,1.5-.7,1.5-1.5-.7-1.5-1.5-1.5h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M370.9,407.8c.9,0,1.7.8,1.7,1.7s-.8,1.7-1.7,1.7-1.7-.8-1.7-1.7.8-1.7,1.7-1.7ZM370.9,410.8c.7,0,1.3-.6,1.3-1.3s-.6-1.3-1.3-1.3-1.3.6-1.3,1.3.6,1.3,1.3,1.3Z" fill="#fff"/>
                  <path d="M370.9,407.8c-.9,0-1.7.8-1.7,1.7s.8,1.7,1.7,1.7,1.7-.8,1.7-1.7-.8-1.7-1.7-1.7h0ZM370.9,410.8c-.7,0-1.3-.6-1.3-1.3s.6-1.3,1.3-1.3,1.3.6,1.3,1.3-.6,1.3-1.3,1.3h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <g>
                    <path d="M369.2,431.1c-.4,0-1.1-.1-1.8-.3-.9-.2-1.4-.5-1.8-.6.4,0,1.1.1,1.8.3.9.2,1.4.5,1.8.6Z" fill="#fff"/>
                    <path d="M365.5,429.9c-.2,0-.4,0-.4.1,0,.2.9.7,2.2,1,.8.2,1.6.3,2,.3s.4,0,.4-.1c0-.2-.9-.7-2.2-1-.8-.2-1.6-.3-2-.3h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M365.5,429.7c.1,0,.2,0,.4,0,.5,0,1.1.2,1.7.3.6.2,1.2.4,1.6.6.5.3.7.5.7.7,0,.2-.5.5-2.6-.1-.6-.2-1.2-.4-1.6-.6-.5-.3-.7-.5-.7-.7,0-.2.2-.2.6-.2ZM369.4,431.2c-.2-.2-.9-.5-2-.8-1.1-.3-1.8-.4-2.1-.3.2.2.9.5,2,.8,1.1.3,1.8.4,2.1.3Z" fill="#fff"/>
                    <path d="M365.5,429.7c-.4,0-.5,0-.6.2,0,.2.1.4.7.7.4.2,1,.4,1.6.6,1,.3,1.6.4,2,.4s.6-.1.6-.2c0-.2-.1-.4-.7-.7-.4-.2-1-.4-1.6-.6-.6-.2-1.2-.3-1.7-.3-.1,0-.3,0-.4,0h0ZM369.3,431.2c-.3,0-1,0-2-.3-1.1-.3-1.8-.6-2-.8,0,0,0,0,.2,0,.3,0,1,0,2,.3,1.1.3,1.8.6,2,.8,0,0,0,0-.2,0h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M364.1,430.3c-.2,0-.4,0-.6,0-.7-.2-1.1-.7-1-1,0-.2.4-.4.8-.4s.4,0,.6,0c.3,0,.6.3.8.5.2.2.2.3.2.5,0,.2-.4.4-.8.4Z" fill="#fff"/>
                    <path d="M363.4,429.2h0c.2,0,.3,0,.5,0,.3,0,.6.2.7.4.1.1.1.2.1.3,0,0-.2.2-.6.2s-.3,0-.5,0c-.6-.2-.9-.5-.9-.7,0,0,.2-.2.6-.2M363.4,428.7c-.5,0-1,.2-1.1.6-.1.5.4,1,1.2,1.3.2,0,.4,0,.6,0,.5,0,1-.2,1.1-.6.1-.5-.4-1-1.2-1.3-.2,0-.4,0-.6,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M363.4,428.5c.2,0,.4,0,.7,0,.4.1.8.3,1,.6.3.3.4.6.3.9,0,.3-.3.5-.7.6-.3,0-.8,0-1.2,0-.4-.1-.8-.3-1-.6-.3-.3-.4-.6-.3-.9,0-.3.3-.5.7-.6.2,0,.3,0,.5,0ZM364.1,430.4c.2,0,.3,0,.4,0,.3,0,.4-.2.5-.4,0-.2,0-.4-.2-.6-.2-.2-.5-.4-.9-.5-.4,0-.7-.1-1,0-.3,0-.4.2-.5.4,0,.2,0,.4.2.6.2.2.5.4.9.5.2,0,.4,0,.6,0Z" fill="#fff"/>
                    <path d="M363.4,428.5c-.2,0-.4,0-.5,0-.4.1-.6.3-.7.6,0,.3,0,.6.3.9.2.3.6.5,1,.6.2,0,.5,0,.7,0s.4,0,.5,0c.4-.1.6-.3.7-.6,0-.3,0-.6-.3-.9-.2-.3-.6-.5-1-.6-.2,0-.5,0-.7,0h0ZM364.1,430.4c-.2,0-.4,0-.6,0-.4,0-.7-.3-.9-.5-.2-.2-.3-.4-.2-.6,0-.2.2-.3.5-.4.1,0,.3,0,.4,0s.4,0,.6,0c.4,0,.7.3.9.5.2.2.3.4.2.6,0,.2-.2.3-.5.4-.1,0-.3,0-.4,0h0Z" fill="#9b978f"/>
                  </g>
                </g>
              </g>
              <g>
                <g>
                  <g>
                    <path d="M379.6,378.6c.2-.3.7-.8,1.4-1.4.7-.6,1.3-1,1.6-1.1-.2.3-.7.8-1.4,1.4-.7.6-1.3,1-1.6,1.1Z" fill="#fff"/>
                    <path d="M382.9,375.7c-.3,0-1.2.5-2.1,1.3-1,.9-1.8,1.7-1.6,1.9,0,0,0,0,0,0,.3,0,1.2-.5,2.1-1.3,1-.9,1.8-1.7,1.6-1.9,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M382.9,375.6c0,0,.2,0,.2,0,.4.4-1.2,1.8-1.6,2.2-.5.4-2,1.7-2.4,1.2-.4-.4,1.2-1.8,1.6-2.2.4-.3,1.6-1.3,2.2-1.3ZM379.4,378.8c.3,0,.9-.5,1.9-1.2.9-.8,1.4-1.4,1.5-1.6-.3,0-.9.5-1.9,1.2-.9.8-1.4,1.4-1.5,1.6Z" fill="#fff"/>
                    <path d="M382.9,375.6c-.6,0-1.8,1-2.2,1.3-.5.4-2,1.7-1.6,2.2,0,0,.1,0,.2,0,.6,0,1.8-1,2.2-1.3.5-.4,2-1.7,1.6-2.2,0,0-.1,0-.2,0h0ZM382.8,375.9c-.1.2-.6.8-1.5,1.6-.9.8-1.6,1.2-1.9,1.2.1-.2.6-.8,1.5-1.6.9-.8,1.6-1.2,1.9-1.2h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M377.5,380.9c-.1,0-.3,0-.4-.1-.2-.2,0-.9.6-1.4.3-.3.7-.5,1.1-.5s.3,0,.4.1c.2.2,0,.9-.6,1.4-.3.3-.7.5-1.1.5Z" fill="#fff"/>
                    <path d="M378.8,379.1h0c0,0,.2,0,.2,0,0,0,0,.6-.5,1-.3.3-.7.4-.9.4s-.2,0-.2,0c0,0,0-.2,0-.3,0-.2.3-.5.5-.7.3-.3.7-.4.9-.4M378.8,378.6c-.4,0-.8.2-1.2.5-.7.6-.9,1.3-.6,1.7.1.2.3.2.6.2.4,0,.8-.2,1.2-.5.7-.6.9-1.3.6-1.7-.1-.2-.3-.2-.6-.2h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M378.8,378.5c.3,0,.5,0,.7.3.4.5.1,1.3-.6,2-.7.6-1.6.7-2,.3-.4-.5-.1-1.3.6-2,.4-.4.9-.6,1.3-.6ZM377.5,380.9c.3,0,.7-.2,1.1-.5.6-.5.8-1.2.6-1.5-.3-.3-1-.2-1.6.3-.6.5-.8,1.2-.6,1.5h0c0,.1.3.2.4.2Z" fill="#fff"/>
                    <path d="M378.8,378.5h0c-.4,0-.9.2-1.3.6-.7.6-1,1.5-.6,2,.2.2.4.3.7.3.4,0,.9-.2,1.3-.6.7-.6,1-1.5.6-2-.2-.2-.4-.3-.7-.3h0ZM377.5,380.9c-.2,0-.3,0-.4-.2-.3-.3,0-1,.6-1.5.4-.3.8-.5,1.1-.5s.3,0,.4.2c.3.3,0,1-.6,1.5-.4.3-.8.5-1.1.5h0Z" fill="#9b978f"/>
                  </g>
                </g>
              </g>
              <g>
                <g>
                  <path d="M374.8,390.2s0,0,0-.1l.4-9.6c.3.2.6.6.6,1.8,0,1-.2,1.4-.4,1.8-.2.5-.4.9-.3,2.1,0,1.8,0,3.6,0,4,0,0-.1.1-.2.1Z" fill="#fff"/>
                  <path d="M375.3,381.3c0,.2.1.6,0,1,0,.6,0,.9-.2,1.2v-2.2M374.9,380.1l-.4,10.1c0,.2.2.3.3.3.2,0,.4-.3.4-.3,0,0,.1-2,0-4.1s.7-1.7.7-3.8-1.1-2.2-1.1-2.2h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M374.7,379.9h.2c0,0,1.3.1,1.2,2.4,0,1-.2,1.5-.4,1.9-.2.5-.4.8-.3,1.9.1,2.1,0,4.1,0,4.1h0c0,0,0,0,0,0,0,0-.3.4-.6.3-.2,0-.3-.2-.4-.4h0s.4-10.3.4-10.3ZM375.1,390.1c0-.3,0-2.1,0-4,0-1.1.1-1.6.3-2.1.2-.4.4-.8.4-1.8,0-1.4-.4-1.8-.7-2l-.4,9.8c0,0,0,.1.1.1,0,0,.2,0,.3-.2Z" fill="#fff"/>
                  <path d="M374.7,379.9l-.4,10.3h0c0,.3.2.4.4.4,0,0,0,0,0,0,.3,0,.5-.3.6-.4h0s0,0,0,0c0,0,.1-2,0-4.1,0-1.1.1-1.4.3-1.9.2-.4.4-.9.4-1.9,0-2.2-1.2-2.4-1.2-2.4h-.2ZM374.8,390.3s0,0,0,0c0,0,0,0-.1-.1l.4-9.8c.3.1.7.6.7,2,0,1-.2,1.4-.4,1.8-.2.5-.4.9-.3,2.1.1,1.9,0,3.7,0,4,0,0-.2.2-.3.2h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <path d="M372.2,425.9c0,.3.1.7.4.8s.7,0,.9-.2c0,0,.1-.2.2-.2.2,0,.3,0,.5.1.1,0,.2,0,.4-.1.3-.2.7-.5.7-.8,0-.4-.7-.5-.9-.8,0,0,0,0,0-.2,0-.1.2-.1.3-.2.2-.1,0-.4,0-.7,0-.3.4-.6.7-.4,0,0,0-.2,0-.2s-.1-.1-.2-.2c0-.1,0-.3.1-.3s.2-.1.4-.2c.4-.2.6-.7.7-1.1,0-.2-.3,0-.5,0-.1,0-.2-.2-.2-.4-.1-.7-1-1-1.6-.6,0-.1-.2-.2-.3-.3-.1.3-.1.6,0,.8,0,.3.3.6.1.8-.2.2-.5.2-.7.1s-.5-.2-.8,0c-.3.2-.3.6-.1.9s.4.6.3.9c-.4-.2-1,0-1.1.4,0,0,0,.2,0,.3,0,0-.1.1-.2.2-.2.2-.3.5-.1.8s.5.4.7.3" fill="#fff" stroke="#9b978f" strokeMiterlimit="10" strokeWidth=".5"/>
                <g>
                  <path d="M373.6,419.8h.2c.1.1.2.2.3.3.3-.1.6-.1,1,0,.4.2.7.5.8.8h0c0,0,0,.2,0,.2,0,0,0,0,.1,0,.1,0,.4-.1.5.2h0c0,0,0,.1,0,.1-.1.5-.3,1-.8,1.2,0,0-.1,0-.2,0,0,0-.1,0-.2,0,0,0,0,0,0,.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.1.2,0,.3,0,0,0,.2-.2.2h0s0,0,0,0c0,0-.2,0-.3,0,0,0-.2.1-.1.2,0,0,0,.1,0,.2,0,.2.2.4,0,.6,0,0-.1,0-.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.1.2.2.4.3.2.1.5.3.6.6,0,.3,0,.7-.7,1-.1,0-.3.1-.5.1,0,0-.2,0-.3,0,0,0-.1,0-.2,0,0,0,0,0,0,0,0,0,0,0,0,0-.3.3-.8.4-1.1.2-.4-.2-.6-.6-.5-1h.3c0,.3.1.6.4.7.2.1.6,0,.7-.1,0,0,0,0,0,0,0,0,.1-.1.2-.2.2,0,.3,0,.4,0,0,0,.1,0,.2,0,0,0,.2,0,.3,0,.2-.1.6-.4.6-.6,0-.2-.2-.3-.4-.4-.2,0-.3-.2-.5-.3-.1-.1-.1-.2,0-.3,0-.2.2-.2.3-.3,0,0,0,0,0,0,0,0,0-.1,0-.2,0,0,0-.2,0-.2,0-.2,0-.5.3-.6.1,0,.2-.1.3-.1,0,0,0,0,0-.1,0-.2,0-.4.2-.5,0,0,.2,0,.3-.1,0,0,0,0,.1,0,.3-.1.4-.5.6-.8,0,0-.2,0-.3,0-.2,0-.3-.3-.3-.5h0c0-.3-.3-.5-.5-.6-.3-.1-.6,0-.8,0h-.1c0,0,0,0,0,0,0,0,0,0-.1-.1,0,.2,0,.4,0,.5,0,0,0,.1,0,.2,0,.2.2.6,0,.8-.2.2-.5.3-.9.2h0c-.2,0-.4-.1-.6,0-.2.1-.2.5,0,.7,0,0,0,.1.1.2.1.2.3.5.3.8v.3s-.3-.2-.3-.2c-.1,0-.3,0-.5,0-.2,0-.3.2-.3.4,0,0,0,0,0,0,0,0,0,.2,0,.3,0,0-.1.1-.2.2,0,0,0,0,0,0-.2.1-.2.4,0,.6.1.2.3.3.5.2v.3c-.2.1-.7,0-.8-.4-.2-.3-.1-.8.2-1,0,0,0,0,0,0,0,0,0,0,.1,0,0,0,0,0,0-.1,0,0,0,0,0,0,0-.3.3-.5.5-.6.2,0,.3,0,.5,0,0-.1-.1-.3-.2-.4,0,0,0-.1-.1-.2-.2-.4-.2-.9.2-1.1.3-.2.6,0,.9,0h0c0,0,.4.1.5,0,0-.1,0-.3,0-.5,0,0,0-.1,0-.2,0-.3,0-.7,0-1v-.2Z" fill="#fff"/>
                  <path d="M373.6,419.8v.2c-.2.3-.2.7-.1,1,0,0,0,.1,0,.2,0,.2.1.4,0,.5,0,0-.1,0-.2,0s-.2,0-.3,0h0c-.2,0-.3-.1-.5-.1s-.2,0-.4,0c-.4.2-.4.7-.2,1.1,0,0,0,.1.1.2,0,.1.1.3.2.4,0,0,0,0-.1,0-.1,0-.2,0-.4,0-.3.1-.5.3-.5.6,0,0,0,0,0,0,0,0,0,.1,0,.1,0,0,0,0-.1,0,0,0,0,0,0,0-.3.2-.3.7-.2,1,.1.2.4.4.7.4s.2,0,.2,0v-.3c-.1,0-.2,0-.2,0-.2,0-.3,0-.4-.2-.1-.2,0-.4,0-.6,0,0,0,0,0,0,0,0,.1-.1.2-.2,0,0,0-.2,0-.3,0,0,0,0,0,0,0-.2.2-.3.3-.4,0,0,.2,0,.2,0s.2,0,.3,0l.2.2v-.3c0-.3-.1-.6-.2-.8,0,0,0-.1-.1-.2-.1-.3-.2-.6,0-.7,0,0,.1,0,.2,0,.1,0,.3,0,.4,0h0c.1,0,.3,0,.4,0,.2,0,.4,0,.5-.2.2-.3,0-.6,0-.8,0,0,0-.1,0-.2,0-.2,0-.4,0-.5,0,0,0,0,.1.1h0c0,.1.1,0,.1,0,.1,0,.3-.1.4-.1.1,0,.2,0,.4,0,.3.1.5.3.5.6h0c0,.2,0,.4.3.5,0,0,0,0,0,0,0,0,.1,0,.2,0-.1.3-.3.7-.6.8,0,0,0,0-.1,0,0,0-.2,0-.3.1-.2.1-.3.3-.2.5,0,0,0,0,0,.1-.1,0-.2,0-.3.1-.2.1-.3.4-.3.6,0,0,0,.2,0,.2,0,0,0,.2,0,.2,0,0,0,0,0,0,0,0-.2,0-.3.3,0,0,0,.2,0,.3.1.2.3.3.5.3.2.1.4.2.4.4,0,.3-.3.5-.6.6,0,0-.2,0-.2,0s0,0,0,0c0,0,0,0-.2,0,0,0-.2,0-.3,0s0,0-.1,0c-.1,0-.2.1-.2.2,0,0,0,0,0,0-.1.1-.3.2-.5.2s-.2,0-.3,0c-.2-.1-.4-.4-.4-.7h-.3c0,.4.2.8.5,1,.1,0,.3,0,.4,0,.3,0,.5-.1.7-.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.2,0,0,0,.2,0,.3,0,0,0,0,0,0,0,.2,0,.3,0,.4-.1.7-.4.8-.8.7-1,0-.3-.3-.5-.6-.6-.1,0-.3-.2-.4-.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.1,0,.2,0,.2-.2.1-.5,0-.6,0,0,0-.1,0-.2,0-.1,0-.2.1-.2,0,0,.1,0,.2,0s0,0,.1,0h0s0,0,0,0c0,0,.1,0,.2-.2,0-.1,0-.2,0-.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0-.1,0,0,.1,0,.2,0,0,0,.1,0,.2,0,.5-.2.7-.7.8-1.2h0c0,0,0-.1,0-.1,0-.1-.2-.2-.3-.2s-.1,0-.2,0c0,0-.1,0-.1,0s0,0,0,0c0,0,0-.1,0-.2h0c0-.4-.4-.7-.8-.9-.2,0-.3,0-.5,0s-.3,0-.5.1c0,0-.2-.2-.3-.2h-.2Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <path d="M380.5,387.2c-.2-.3-.3-.6-.4-.9-.1-.4-.2-.9-.5-1.1,0,0-.1,0-.2-.1,0,0,0-.1,0-.2,0,0-.1,0-.2,0-.2,0-.4,0-.6,0-.1,0-.3,0-.4.2,0,0,0,.1,0,.2.1.5.3,1,.5,1.4.1.3.3.5.4.8,0,0,0,.1,0,.2,0,0,0,0,0,0,.3.1.7,0,1-.3" fill="#fff" stroke="#9b978f" strokeMiterlimit="10" strokeWidth=".5"/>
                <g>
                  <path d="M379.2,384.6c0,0,.2,0,.3,0,0,0,0,.1,0,.2,0,0,0,0,0,0,0,0,0,0,0,0h0c.3.3.4.7.5,1,0,0,0,.1,0,.2,0,.3.2.6.4.9l-.3.2c-.2-.3-.4-.6-.5-1,0,0,0-.2,0-.2,0-.3-.2-.6-.4-.8h0c0,0-.1-.1-.2-.2,0,0,0,0,0-.1,0,0,0,0,0,0,0,0,0,0,0,0h-.6c-.2,0-.2,0-.2,0,0,0,0,0,0,.1.1.5.2.9.5,1.4,0,0,0,.1.1.2.1.2.2.4.3.7h0s0,0,0,0c0,0,0,0,0,0,.3.1.6,0,.8-.2l.3.2c-.3.3-.8.5-1.2.3,0,0,0,0-.1,0,0,0,0-.2-.1-.2h0c0-.2-.1-.4-.3-.6,0,0,0-.1-.1-.2-.2-.5-.4-.9-.5-1.4,0,0,0-.2,0-.3,0-.2.2-.3.5-.3h.6s0,0,0,0ZM379.2,384.9h0Z" fill="#fff"/>
                  <path d="M379.2,384.6s0,0,0,0h-.6c-.3,0-.5.1-.5.3,0,.1,0,.2,0,.3.1.5.3,1,.5,1.4,0,0,0,.1.1.2.1.2.2.4.3.6h0c0,0,0,.2.1.3,0,0,.1,0,.1,0,.1,0,.2,0,.4,0,.3,0,.6-.1.8-.4l-.3-.2c-.1.2-.3.3-.5.3s-.2,0-.2,0c0,0,0,0,0,0h0s0,0,0,0h0c0-.3-.2-.5-.3-.7,0,0,0-.1-.1-.2-.2-.4-.3-.9-.5-1.4,0,0,0,0,0-.1,0,0,0,0,.2,0h.6s0,0,0,0,0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,.1,0,0,.1.2.2.2h0c.2.2.3.5.4.8,0,0,0,.2,0,.2,0,.3.3.7.5,1l.3-.2c-.2-.3-.3-.6-.4-.9,0,0,0-.1,0-.2,0-.3-.2-.7-.5-1h0s0,0,0,0c0,0,0,0,0,0,0,0,0-.1,0-.2,0,0-.2,0-.3,0h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <path d="M381,385.1c.3,0,.5-.3.7-.2,0,0,.1,0,.2,0,.1,0,.3-.1.3-.3s0-.3-.1-.4-.2-.2-.2-.4c0,0,0,0,0-.1,0,0,0,0,0,0,.2,0,.3-.2.5-.2,0,0,.1,0,.1-.1,0,0,0-.2-.1-.3-.1-.1-.3-.2-.4-.4-.3-.3-.5-.5-.9-.7s-.7-.3-1.1-.3c0,0,0,.1.1.2-.2,0-.4,0-.6,0,0,.2,0,.4,0,.6,0,0,0,.2,0,.3s-.1.2-.2.1c.2.8.5,1.5,1.1,2.1.1.1.2.2.4.2" fill="#fff" stroke="#9b978f" strokeMiterlimit="10" strokeWidth=".5"/>
                <g>
                  <path d="M380.2,381.5c.4,0,.8.2,1,.3.3.2.6.5.9.7l.4.4c.2.2.2.3.2.4,0,.1-.2.2-.2.2l-.4.2c0,0,0,.1.1.2,0,0,0,0,0,0,0,.1.2.3.2.5,0,.1,0,.3-.2.3,0,0-.2.1-.3,0,0,0,0,0-.1,0,0,0,0,0,0,0,0,0-.2,0-.3,0-.1,0-.2.1-.4.1v.2s-.3,0-.5-.2c-.5-.6-.9-1.4-1.1-2.2v-.4c0,0,.2.2.2.2,0,0,0,0,0-.1h0c0-.3-.1-.5,0-.7h0c0-.1.4-.2.4-.2v-.2c-.1,0,.1,0,.1,0,0,0,.1,0,.2,0ZM382.3,383.3s0,0,0,0l-.4-.4c-.3-.2-.5-.5-.8-.7-.2,0-.4-.2-.6-.2v.2c.1,0-.6,0-.6,0,0,.1,0,.2,0,.3h0c0,.1,0,.2,0,.4,0,.1,0,.2-.2.3.2.7.5,1.3,1,1.9,0,.1.2.1.2.1h0s0-.3,0-.3c0,0,.2,0,.3,0,.1,0,.3-.2.5-.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0-.2-.1-.3,0,0,0,0,0,0,0,0-.1-.2-.2-.3,0,0,0-.1,0-.2,0-.1.1-.1.2-.2l.5-.2s0,0,0,0Z" fill="#fff"/>
                  <path d="M380.2,381.5c0,0-.1,0-.2,0h-.3s.1.2.1.2h-.4s0,.2,0,.2c0,.2,0,.5,0,.7h0c0,0,0,.1,0,.2l-.3-.2v.4c.3.8.6,1.6,1.2,2.2.2.2.3.3.4.3s0,0,.1,0v-.2c0,0,0,0,0,0,.2,0,.3,0,.4-.1,0,0,.2,0,.2,0s0,0,0,0c0,0,0,0,0,0,0,0,0,0,.1,0,0,0,0,0,0,0,0,0,.2,0,.2,0,.1,0,.2-.2.2-.3,0-.2,0-.4-.2-.5,0,0,0,0,0,0,0,0-.1-.1-.1-.2l.4-.2c0,0,.2,0,.2-.2,0-.1,0-.3-.2-.4l-.4-.4c-.3-.3-.6-.5-.9-.7-.2-.1-.6-.3-1-.3h0ZM380.9,385.1s-.1,0-.2-.1c-.5-.5-.8-1.2-1-1.9,0,0,.2-.2.2-.3,0-.1,0-.2,0-.3h0c0-.2,0-.3,0-.4h.7s-.1-.2-.1-.2c.3,0,.5.1.6.2.3.2.6.4.8.7l.4.4s0,0,0,0c0,0,0,0,0,0l-.5.2s-.1,0-.2.2c0,.1,0,.2,0,.2,0,.1.1.2.2.3,0,0,0,0,0,0,0,.1.1.2.1.3,0,0,0,0,0,0,0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0-.1,0-.1,0-.3,0-.4.1,0,0-.2,0-.2,0s0,0,0,0v.3s0,0,0,0c0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <g>
                  <line x1="408.1" y1="389.3" x2="409.7" y2="395.3" fill="#fff" stroke="#9b978f" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M409.8,395.4s-.1,0-.2,0c0,0,0,0-.1-.1l-1.6-5.9c0,0,0-.2.1-.2M408.3,389.4l1.5,5.6" fill="#fff" stroke="#9b978f" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
                <g>
                  <g>
                    <path d="M385.6,391.1c-.2-.4-.9-1.4-1-2.5.8-.6,6.2-4.4,11.5-6.6v6.1s-10.5,3.1-10.5,3.1Z" fill="#fff"/>
                    <path d="M395.9,382.3v5.5s-10.2,3-10.2,3c-.3-.4-.7-1.2-.8-2.1,1.1-.8,6.1-4.3,11-6.4M396.4,381.6c-6,2.4-12,6.9-12,6.9.1,1.6,1.2,3,1.2,3l10.9-3.2v-6.7h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M386,389.5c0-.4,0-.8,0-1.1.9-.8,3.4-3,6.7-4.9-2.8,1.9-5.2,4.4-6.5,5.7-.1.1-.2.2-.3.3Z" fill="#fff"/>
                    <path d="M388.4,386.7c-.9.8-1.6,1.6-2.1,2.2,0-.1,0-.2,0-.4.4-.4,1.2-1,2.1-1.8M396.4,381.4s0,0,0,0c-5.9,2.4-10.5,6.8-10.6,6.8,0,.7,0,1.4-.1,1.9.9-.8,5.3-6.2,10.6-8.4v6.3s-10.7,3.1-10.7,3.1c0,0,0-.1,0-.1s0,0,0,0c0,0,.1,0,0-.6-.1.6-.2,1-.2,1,0,0,0,0,.1,0s0,0,0,0l10.9-3.2c0,0,.1,0,.1-.2v-6.7s0,0,0,0c0,0,0,0,0-.1,0,0,0,0,0,0h0ZM385.8,388.3s0,0,0,0,0,0,0,0c0,0,0,0,0,0h0ZM385.6,390.2s0,0,0,0c0,.1,0,.2,0,.3,0-.1,0-.2,0-.3h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M388.1,391.7c-1.1-1-2-1.4-2.5-1.5.2-.8.8-3.5,3.4-8,2.4-4.1,6.9-4.7,9.5-4.7s1.5,0,1.9.1l-5.1,6-2.6,1.2-4.7,6.8Z" fill="#fff"/>
                    <path d="M398.6,377.8c.6,0,1,0,1.4,0l-4.7,5.6-2.4,1.1h-.1c0,0,0,.2,0,.2l-4.5,6.6c-.9-.8-1.7-1.1-2.1-1.3.2-1,1-3.6,3.4-7.7,2.2-3.7,6.2-4.5,9.3-4.5M398.6,377.3c-2.8,0-7.3.7-9.7,4.8-3.2,5.5-3.5,8.3-3.5,8.3,0,0,1.2,0,2.8,1.6l4.9-7,2.5-1.2,5.4-6.3s-1-.2-2.4-.2h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M401.1,377.5s0,0,0,.1l-5.4,6.3s0,0,0,0l-2.5,1.2-4.8,7s0,0-.1,0c0,0-.1,0-.1,0-1.6-1.5-2.7-1.6-2.7-1.6,0,0,0,0-.1,0,0,0,0,0,0-.1,0,0,0-.7.6-2.1.4-1.3,1.3-3.4,3-6.2.8-1.4,2-2.6,3.5-3.4,1.2-.6,2.5-1.1,4-1.3,2.6-.4,4.7,0,4.8,0,0,0,.1,0,.1.1,0,0,0,0,0,0ZM395.5,383.7l5.2-6.1c-.7,0-2.4-.3-4.4,0-1.5.2-2.8.6-3.9,1.3-1.4.8-2.5,1.9-3.3,3.3-2.7,4.6-3.3,7.4-3.5,8.1.4,0,1.3.4,2.6,1.5l4.7-6.9s0,0,0,0l2.5-1.2Z" fill="#fff"/>
                    <path d="M398.5,377.2c-.7,0-1.5,0-2.3.2-1.5.2-2.9.7-4,1.3-1.5.8-2.6,2-3.5,3.4-1.6,2.8-2.5,5-3,6.2-.5,1.4-.6,2.1-.6,2.1,0,0,0,0,0,.1,0,0,0,0,.1,0,0,0,1.1,0,2.7,1.6,0,0,0,0,.1,0s0,0,0,0c0,0,0,0,.1,0l4.8-7,2.5-1.2s0,0,0,0l5.4-6.3s0,0,0-.1c0,0,0,0,0,0,0,0,0-.1-.1-.1,0,0-1-.2-2.5-.2h0ZM388.1,391.8c-1.2-1.1-2.2-1.4-2.6-1.5.1-.7.8-3.4,3.5-8.1.8-1.4,1.9-2.5,3.3-3.3,1.1-.6,2.5-1.1,3.9-1.3.8-.1,1.6-.2,2.3-.2s1.7,0,2.1.1l-5.2,6.1-2.5,1.2s0,0,0,0l-4.7,6.9h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M397.2,404.7c-2.8,0-9.6-3.4-10.5-3.8-.3-1.1.5-2.2.8-2.5l8.4.9,4.7-2.3,8.7,3.4c-2.3,2.2-9,4-11.9,4.2,0,0-.1,0-.2,0Z" fill="#fff"/>
                    <path d="M400.6,397.3l8.3,3.3c-2.5,2-8.7,3.7-11.5,3.9,0,0-.1,0-.2,0-2.7,0-9-3.1-10.3-3.7-.1-.9.4-1.7.7-2l8.2.9h.1s.1,0,.1,0l4.6-2.2M400.6,396.7l-4.8,2.3-8.5-.9s-1.3,1.4-.9,2.9c0,0,7.6,3.9,10.7,3.9s.2,0,.2,0c2.9-.2,10.2-2.1,12.4-4.6l-9.2-3.6h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M409.9,400.3s0,0,0,.1c-2.2,2.6-9.7,4.4-12.5,4.6-2.9.2-10.7-3.7-11.1-3.9,0,0,0,0,0-.1-.5-1.6.9-3,.9-3.1,0,0,0,0,.1,0l8.4.9,4.7-2.3s0,0,.1,0l9.2,3.6c0,0,0,0,.1.1,0,0,0,0,0,0ZM386.6,400.9c.8.4,8.1,4,10.8,3.8,1.3-.1,3.8-.6,6.4-1.4,2.7-.9,4.7-1.9,5.6-2.9l-8.9-3.5-4.7,2.3s0,0,0,0l-8.4-.9c-.1.1-.3.4-.5.8-.3.6-.4,1.3-.3,1.8Z" fill="#fff"/>
                    <path d="M400.6,396.5s0,0,0,0l-4.7,2.3-8.4-.9s0,0,0,0c0,0,0,0-.1,0,0,0-1.4,1.5-.9,3.1,0,0,0,0,0,.1.3.2,7.7,3.9,10.8,3.9s.2,0,.3,0c2.7-.2,10.3-2,12.5-4.6,0,0,0,0,0-.1,0,0,0,0,0,0,0,0,0,0-.1-.1l-9.2-3.6s0,0,0,0h0ZM395.8,399.2s0,0,0,0l4.7-2.3,8.9,3.5c-1,1-3,2-5.6,2.9-2.6.9-5.1,1.3-6.4,1.4,0,0-.2,0-.2,0-2.9,0-9.8-3.5-10.6-3.8-.1-.6,0-1.2.3-1.8.2-.4.4-.7.5-.8l8.4.9s0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M409.1,400.1c-1.5,0-5.2-.2-7.1-1.7-1.3-1-6.1-6.6-6-14.7h0s.9-3.1,4.9-5.9c1.2,1.4,9.7,11.7,8.6,22.2-.1,0-.3,0-.4,0Z" fill="#fff"/>
                    <path d="M400.9,378.2c1.6,1.9,9.4,11.6,8.4,21.6,0,0-.1,0-.2,0-1.5,0-5.1-.2-6.9-1.6-1.2-1-6-6.5-5.9-14.4.1-.4,1.2-3.1,4.6-5.7M401,377.5c-4.3,3-5.2,6.2-5.2,6.2-.1,7.9,4.5,13.6,6.1,14.9,1.9,1.5,5.7,1.7,7.3,1.7s.6,0,.6,0c1.4-11.6-8.8-22.8-8.8-22.8h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M409.8,395c.3,1.9.3,3.7.1,5.4,0,0,0,.1-.2.2,0,0-1.4,0-3.1-.1-2.2-.2-3.9-.8-5-1.6-.7-.6-2.3-2.3-3.7-5-1.2-2.2-2.5-5.7-2.4-10,0,0,0,0,0,0,0,0,.2-.9,1-2.1.7-1.1,2-2.7,4.3-4.3,0,0,.2,0,.2,0,0,0,2.6,2.9,4.9,7.1,1.4,2.5,2.4,4.9,3.1,7.3.3,1.1.5,2.1.7,3.1ZM409.6,400.2c.3-2.6,0-5.4-.8-8.2-.7-2.4-1.7-4.8-3.1-7.3-2.1-3.7-4.3-6.3-4.8-6.9-2.1,1.5-3.4,3-4,4.1-.7,1.1-.9,1.8-1,2,0,4.2,1.3,7.7,2.4,9.8.6,1.2,2.2,3.7,3.6,4.9,2.2,1.7,6.8,1.7,7.6,1.7Z" fill="#fff"/>
                    <path d="M401,377.4s0,0,0,0c-2.2,1.5-3.6,3.2-4.3,4.3-.8,1.2-1,2-1,2.1,0,0,0,0,0,0,0,4.3,1.3,7.8,2.4,10,1.4,2.7,3,4.4,3.7,5,1,.8,2.7,1.4,5,1.6,1,.1,1.8.1,2.4.1s.6,0,.7,0c0,0,.2,0,.2-.2.2-1.7.2-3.5-.1-5.4-.2-1-.4-2.1-.7-3.1-.7-2.4-1.7-4.9-3.1-7.3-2.4-4.2-4.9-7.1-4.9-7.1,0,0,0,0-.1,0h0ZM409.1,400.2c-1.5,0-5.3-.2-7.2-1.7-1.5-1.2-3-3.7-3.6-4.9-1.1-2.2-2.5-5.6-2.4-9.8,0-.1.3-.9,1-2,.7-1,1.9-2.6,4-4.1.5.6,2.7,3.2,4.8,6.9,1.4,2.5,2.4,4.9,3.1,7.3.8,2.9,1.1,5.7.8,8.2-.1,0-.3,0-.5,0h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M394.1,396.9c-.5-.4-1.7-1.3-1.9-2.7-.3-1.3.5-2.6.9-3,.6.5,2.6,2.4,1.1,5.7Z" fill="#fff"/>
                    <path d="M393.1,391.6c.7.6,2,2.3.9,4.9-.5-.4-1.4-1.2-1.6-2.3-.2-1.1.3-2.1.7-2.6M393,390.8s-1.4,1.6-1.1,3.4c.4,1.8,2.3,3,2.3,3,2.1-4.2-1.2-6.4-1.2-6.4h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M395.1,393.9c.1.9,0,2.1-.7,3.5,0,0,0,0-.1,0,0,0,0,0-.1,0,0,0-2-1.2-2.4-3.1-.4-1.9,1-3.5,1.1-3.6,0,0,.2,0,.2,0,0,0,.9.6,1.5,1.7.2.4.4.9.5,1.5ZM394.2,397c.8-1.6.8-3.1.1-4.4-.4-.8-1-1.3-1.2-1.5-.3.4-1.2,1.7-.9,3.2.3,1.4,1.6,2.4,2.1,2.8Z" fill="#fff"/>
                    <path d="M393,390.7s0,0-.1,0c0,0-1.5,1.7-1.1,3.6.4,1.9,2.3,3,2.4,3.1,0,0,0,0,0,0s0,0,0,0c0,0,0,0,.1,0,.7-1.4.8-2.5.7-3.5,0-.6-.3-1.1-.5-1.5-.6-1.1-1.4-1.7-1.5-1.7,0,0,0,0,0,0h0ZM394.2,397c-.5-.3-1.8-1.3-2.1-2.8-.3-1.4.6-2.8.9-3.2.2.2.8.7,1.2,1.5.7,1.3.7,2.8-.1,4.4h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M397.5,398.5c-.5,0-.7,0-.7,0-.7-.2-2.4-.7-2.4-1.6-.1-1,.2-1.5.2-1.5v-.2c.1,0,0-.2,0-.2-.3-.4-.8-1.1-.7-1.4,0-.1,0-.2.1-.3.2-.5.4-1.2-.2-1.9-.4-.4-.9-1-.6-1.2.2-.2.4-.2.5-.2h.3s0-.3,0-.3c0,0,0-1.1,1.4-1.7.4-.2.8-.2,1.1-.2s.3,0,.5,0c.1,0,.2,0,.3,0,.3,0,.5,0,.7-.3.3-.3.7-.5,1.1-.5s.6,0,.8.4c.3.5.8.5,1.3.6.4,0,.8,0,1.2.3.6.4.6,1,.7,1.6,0,.3,0,.5.1.8,0,.3.3.7.6,1,.5.7,1,1.4.6,2.2-.3.6-.6.7-.9.8-.4.1-.7.3-.7,1.1,0,.9-.4,1.3-1.1,1.3s-.4,0-.6,0c-.1,0-.2,0-.3,0-.5,0-.8.3-1,.7-.3.4-.6.8-1.3.9-.4,0-.8,0-1.1,0Z" fill="#fff"/>
                    <path d="M399.1,387.2c.2,0,.5,0,.6.3.4.7,1,.7,1.6.7.4,0,.8,0,1.1.2.5.3.5.7.6,1.4,0,.3,0,.5.1.8,0,.4.3.7.6,1.1.5.8.9,1.3.5,2-.3.5-.5.6-.7.7-.4.2-.8.4-.9,1.3,0,.9-.4,1-.8,1s-.3,0-.5,0c-.1,0-.3,0-.4,0-.6,0-1,.4-1.2.8-.3.4-.5.7-1.1.8-.4,0-.8,0-1.1,0s-.5,0-.5,0h0s-.1,0-.1,0c-.8-.2-2.1-.7-2.2-1.3-.1-.9.1-1.3.1-1.3s0,0,0,0l.3-.3-.3-.3c-.4-.4-.7-1-.6-1.2,0-.1,0-.2.1-.3.2-.6.5-1.4-.3-2.1-.7-.7-.6-.9-.6-.9.1-.1.2-.2.3-.2h.6c0,0,0-.5,0-.5,0,0,0-1,1.3-1.5.4-.2.7-.2,1-.2s.3,0,.4,0c.1,0,.3,0,.4,0,.3,0,.6-.1.9-.4.3-.2.6-.4.9-.4M399.1,386.7c-.5,0-.9.2-1.3.5-.2.2-.4.2-.5.2s-.5,0-.8,0-.7,0-1.2.3c-1.7.7-1.6,2-1.6,2,0,0,0,0,0,0-.1,0-.4,0-.7.3-.3.4,0,.9.6,1.6s.2,1.3,0,2,.7,1.7.7,1.7c0,0-.4.4-.3,1.6.1,1.2,2.6,1.7,2.6,1.7,0,0,.2.1.8.1s.6,0,1.1,0c1.5-.2,1.4-1.6,2.3-1.6s.2,0,.3,0c.2,0,.5,0,.7,0,.8,0,1.3-.5,1.3-1.5,0-1.3.8-.4,1.6-1.8.7-1.4-.9-2.5-1.1-3.4-.2-.9,0-1.8-.9-2.5-1-.7-2,0-2.5-.8-.2-.4-.6-.6-1.1-.6h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M405,392.9c0,.3,0,.7-.2,1.1-.4.8-.8.9-1.1,1-.3.1-.4.2-.4.7,0,.7-.2,1.1-.6,1.4-.4.3-.9.3-1.6.2-.5-.1-.6.1-.9.5-.3.4-.7.9-1.6,1-1.4.2-1.9,0-2,0-.1,0-.7-.2-1.2-.4-.9-.4-1.4-.9-1.4-1.5-.1-.9,0-1.4.2-1.6-.3-.3-.9-1.1-.7-1.8,0-.1,0-.2.1-.4.2-.5.4-1-.1-1.4-.5-.5-1.1-1.3-.6-1.8.2-.3.5-.4.7-.4,0-.4.2-1.4,1.7-2,1-.4,1.5-.3,1.8-.2.3,0,.4,0,.7-.2.4-.4,1.1-.6,1.6-.6.4,0,.8.3,1,.6.2.3.5.3,1,.3.5,0,1,0,1.5.4.8.5.8,1.2.9,1.9,0,.2,0,.5,0,.7,0,.2.3.5.5.9.3.5.7,1,.8,1.6ZM396.8,398.5s.4.2,1.8,0c.7-.1,1.1-.5,1.3-.9.3-.4.6-.8,1.3-.6.6.1,1,.1,1.3-.1.3-.2.4-.6.5-1.2,0-.7.3-.9.7-1,.3-.1.6-.2.9-.9.4-.9,0-1.6-.6-2.3-.2-.3-.5-.7-.5-1,0-.3,0-.5-.1-.8,0-.6-.1-1.2-.7-1.6-.4-.3-.9-.3-1.3-.3-.5,0-1,0-1.3-.5-.2-.3-.5-.4-.7-.5-.5,0-1,.1-1.4.5-.4.4-.7.3-1,.3-.3,0-.8-.1-1.7.2-1.6.6-1.5,1.7-1.5,1.8,0,0,0,.1,0,.1,0,0,0,0-.1,0,0,0-.3,0-.6.3-.3.4.4,1.1.6,1.4.6.6.4,1.2.2,1.8,0,.1,0,.2-.1.3-.1.5.5,1.3.7,1.5,0,0,0,.2,0,.2,0,0-.3.4-.2,1.5.1.9,1.8,1.4,2.4,1.6,0,0,0,0,0,0ZM396.8,398.5h0ZM396.7,398.6h0s0,0,0,0Z" fill="#fff"/>
                    <path d="M399.2,386.6c-.5,0-1,.2-1.4.6-.2.2-.3.2-.4.2s-.2,0-.3,0c-.2,0-.3,0-.5,0-.3,0-.7,0-1.3.3-1.5.6-1.7,1.6-1.7,2-.2,0-.4.1-.7.4-.5.6.1,1.3.6,1.8.5.5.3.9.1,1.4,0,.1,0,.2-.1.4-.2.6.4,1.5.7,1.8-.1.2-.3.7-.2,1.6,0,.6.5,1,1.4,1.5.6.3,1.1.4,1.2.4,0,0,.3.1.9.1s.7,0,1.2-.1c.9-.1,1.3-.6,1.6-1,.2-.3.4-.5.7-.5,0,0,.1,0,.2,0,.3,0,.5.1.7.1.3,0,.6,0,.9-.3.4-.3.6-.7.6-1.4,0-.5.2-.6.4-.7.3-.1.7-.3,1.1-1,.2-.4.2-.7.2-1.1,0-.6-.5-1.1-.8-1.6-.2-.3-.4-.6-.5-.9,0-.2,0-.5,0-.7,0-.7-.1-1.3-.9-1.9-.5-.4-1-.4-1.5-.4-.5,0-.8,0-1-.3-.2-.3-.5-.6-1-.6,0,0-.2,0-.2,0h0ZM397.3,387.7c.2,0,.4,0,.7-.3.3-.3.8-.5,1.2-.5,0,0,.1,0,.2,0,.2,0,.5.1.7.5.3.5.8.5,1.3.5.4,0,.9,0,1.3.3.6.4.7,1,.7,1.6,0,.2,0,.5.1.8,0,.3.3.6.5,1,.5.7,1,1.4.6,2.3-.3.6-.6.8-.9.9-.4.1-.6.3-.7,1,0,.6-.2.9-.5,1.2-.2.1-.4.2-.7.2s-.4,0-.6,0c-.1,0-.2,0-.3,0-.5,0-.7.3-1,.7-.3.4-.6.8-1.3.9-.5,0-.8,0-1.1,0-.5,0-.7,0-.7,0,0,0,0,0,0,0-.6-.1-2.3-.7-2.4-1.6-.1-1.1.2-1.5.2-1.5,0,0,0-.2,0-.2-.2-.3-.8-1-.7-1.5,0-.1,0-.2.1-.3.2-.5.4-1.2-.2-1.8-.2-.2-1-1-.6-1.4.2-.2.5-.3.5-.3s0,0,0,0c0,0,0,0,0,0,0,0,0,0,.1,0,0,0,0,0,0-.1,0,0,0-1.2,1.5-1.8.5-.2.9-.3,1.2-.3s.4,0,.5,0c.1,0,.2,0,.3,0h0ZM396.7,398.6h0s0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <path d="M400.4,396.2s0,0,0,0c0,0-.1.1-.2.1-.4-.1-.6-.1-.8,0-.2.1-.2.4-.3.8,0,.7-.8.8-1.2.8,0,0-.2,0-.2-.2,0,0,0-.2.2-.2,0,0,.8,0,.9-.5,0-.4.1-.9.4-1.1.2-.2.6-.2,1.1,0,0,0,.1,0,.1.1Z" fill="#fff"/>
                  <path d="M399.8,396c-.2,0-.4,0-.5.1-.3.2-.4.7-.4,1.1,0,.4-.6.5-.8.5s0,0,0,0c0,0,0,0,0,0,0,0-.2,0-.2.2,0,0,0,.2.2.2,0,0,0,0,.1,0,.4,0,1.1-.2,1.1-.8,0-.4.1-.7.3-.8,0,0,.2,0,.3,0,.1,0,.3,0,.5,0,0,0,0,0,0,0,0,0,.1,0,.2-.1,0,0,0,0,0,0,0,0,0-.1-.1-.1-.2,0-.4,0-.6,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M399.8,395.5s0,0,0,0c0,0-.1.1-.2.1-.2,0-.4,0-.6,0-.4.2-.5.8-.5.8,0,0-.1.2-.2.1,0,0-.2-.1-.1-.2,0,0,.1-.7.6-1,.2-.2.5-.2.9,0,0,0,.1,0,.1.1Z" fill="#fff"/>
                  <path d="M399.3,395.3c-.2,0-.3,0-.5.1-.5.3-.6,1-.6,1,0,0,0,.2.1.2,0,0,0,0,0,0,0,0,.2,0,.2-.1,0,0,.1-.5.5-.8,0,0,.2,0,.3,0,0,0,.2,0,.3,0,0,0,0,0,0,0,0,0,.1,0,.2-.1,0,0,0,0,0,0,0,0,0-.1-.1-.1-.1,0-.2,0-.4,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M395,393.7c.1.8-.5,1.6-.5,1.6,0,0-.2,0-.2,0,0,0,0-.2,0-.2,0,0,.6-.8.4-1.5,0,0,0-.2.1-.2,0,0,.2,0,.2.1,0,0,0,.2,0,.2Z" fill="#fff"/>
                  <path d="M394.8,393.4s0,0,0,0c0,0-.1.1-.1.2.2.7-.4,1.5-.4,1.5,0,0,0,.2,0,.2,0,0,0,0,.1,0s0,0,.1,0c0,0,.6-.8.5-1.6,0,0,0-.2,0-.2,0,0,0-.1-.2-.1h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M396.3,393.5c0,.2,0,.3,0,.5-.2.6-.3,1.3-.3,1.3,0,0,0,.2-.2.2,0,0-.2,0-.2-.2,0,0,0-.8.3-1.4.2-.4-.4-1.2-.6-1.4,0,0,0-.2,0-.2,0,0,.2,0,.2,0,0,0,.6.7.7,1.3Z" fill="#fff"/>
                  <path d="M395.5,392.1s0,0-.1,0c0,0,0,.2,0,.2.2.3.8,1,.6,1.4-.3.7-.3,1.4-.3,1.4,0,0,0,.2.2.2,0,0,0,0,0,0,0,0,.2,0,.2-.2,0,0,0-.7.3-1.3,0-.2,0-.3,0-.5,0-.6-.7-1.2-.7-1.3,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M397.3,393c0,0,0,.2-.1.2,0,0-.2,0-.2,0,0,0-.4-1-1-1.1,0,0-.2-.1-.1-.2,0,0,.1-.2.2-.1.8.2,1.3,1.3,1.3,1.3,0,0,0,0,0,0Z" fill="#fff"/>
                  <path d="M396,391.6c0,0-.2,0-.2.1,0,0,0,.2.1.2.6.1,1,1.1,1,1.1,0,0,0,.1.2.1s0,0,0,0c0,0,.1-.1.1-.2,0,0,0,0,0,0,0,0-.5-1.2-1.3-1.3,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M398.3,388.5s0,0,0,.1c-.7.9-1.3.7-1.7.5-.2,0-.4-.1-.6-.1-.3,0-.4.1-.5.3,0,.1,0,.3,0,.3,0,0,0,.2-.1.2,0,0-.2,0-.2-.1,0,0,0-.4.2-.7.1-.2.4-.3.7-.3.3,0,.6,0,.8.1.5.2.8.3,1.4-.4,0,0,.2,0,.2,0,0,0,0,0,0,.1Z" fill="#fff"/>
                  <path d="M398.2,388.3c0,0-.1,0-.1,0-.3.4-.6.5-.8.5s-.3,0-.5-.1c-.2,0-.4-.1-.7-.1s0,0-.1,0c-.3,0-.5.1-.7.3-.2.3-.2.7-.2.7,0,0,0,.1.2.1s0,0,0,0c0,0,.2,0,.1-.2,0,0,0-.1,0-.3,0-.2.2-.3.5-.3,0,0,0,0,0,0,.2,0,.4,0,.6.1.2,0,.4.1.6.1.3,0,.7-.2,1.1-.7,0,0,0,0,0-.1,0,0,0,0,0-.1,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M398.7,388.9s0,0,0,0c-.4,1-1.7,1.1-1.7,1.1,0,0-.2,0-.2-.2,0,0,0-.2.2-.2,0,0,1.1,0,1.4-.9,0,0,.1-.1.2,0,0,0,0,0,.1.1Z" fill="#fff"/>
                  <path d="M398.6,388.7c0,0-.1,0-.2.1-.3.8-1.4.9-1.4.9,0,0-.2,0-.2.2,0,0,0,.2.2.2s0,0,0,0c0,0,1.3,0,1.7-1.1,0,0,0,0,0,0,0,0,0-.1-.1-.1,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M403.6,392.9s0,0,0,0c0,.6-.3,1.1-.4,1.1,0,0-.2,0-.2,0,0,0,0-.2,0-.2,0,0,.3-.4.3-.8,0-.3-.2-.5-.4-.7,0,0,0-.2,0-.2,0,0,.2,0,.2,0,.3.3.5.6.6.9Z" fill="#fff"/>
                  <path d="M402.9,392c0,0-.1,0-.1,0,0,0,0,.2,0,.2.3.2.4.4.4.7,0,.4-.3.8-.3.8,0,0,0,.2,0,.2,0,0,0,0,.1,0s0,0,.1,0c0,0,.4-.5.4-1.1,0,0,0,0,0,0,0-.3-.2-.6-.6-.9,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M402.6,390.1c0,.3,0,.5,0,.5,0,0,0,.2-.2.2,0,0-.2,0-.2-.2,0,0,0-1-.5-1.2,0,0-.1-.1-.1-.2,0,0,.1-.1.2-.1.5.2.7.7.7,1Z" fill="#fff"/>
                  <path d="M401.8,389c0,0-.1,0-.2.1,0,0,0,.2.1.2.6.2.5,1.2.5,1.2,0,0,0,.2.2.2,0,0,0,0,0,0,0,0,.2,0,.2-.2,0,0,0-.2,0-.5,0-.4-.2-.8-.7-1,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M393.2,385c0,0,0,.1,0,.2,0,0-.2,0-.2,0,0,0-.5-.7-1.5-1.1,0,0-.1-.1,0-.2,0,0,.1-.1.2,0,1,.4,1.6,1.2,1.6,1.2,0,0,0,0,0,0Z" fill="#fff"/>
                  <path d="M391.5,383.7c0,0-.1,0-.2.1,0,0,0,.2,0,.2.9.4,1.5,1.1,1.5,1.1,0,0,0,0,.1,0s0,0,0,0c0,0,0-.1,0-.2,0,0,0,0,0,0,0,0-.6-.8-1.6-1.2,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M396.3,400.9c0,0,0,.1,0,.2,0,0-.2,0-.2,0,0,0-.6-1.1-.3-1.9,0,0,.1-.1.2-.1,0,0,.1.1.1.2-.2.7.3,1.7.3,1.7,0,0,0,0,0,0Z" fill="#fff"/>
                  <path d="M395.8,398.9c0,0-.1,0-.2.1-.2.8.3,1.9.3,1.9,0,0,0,0,.2,0s0,0,0,0c0,0,.1-.1,0-.2,0,0,0,0,0,0,0,0-.5-1-.3-1.7,0,0,0-.2-.1-.2,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M405.1,401.7c0,0,0,.1,0,.2-.9.6-2.8,1.3-2.8,1.3,0,0-.2,0-.2-.1,0,0,0-.2.1-.2,0,0,1.9-.7,2.7-1.3,0,0,.2,0,.2,0,0,0,0,0,0,0Z" fill="#fff"/>
                  <path d="M404.9,401.5s0,0-.1,0c-.8.6-2.7,1.3-2.7,1.3,0,0-.1.1-.1.2,0,0,0,.1.2.1s0,0,0,0c0,0,1.9-.7,2.8-1.3,0,0,0-.1,0-.2,0,0,0,0,0,0,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M404.5,400.8c0,0,0,.1,0,.2-.7.6-1.5.9-1.6.9,0,0-.2,0-.2-.1,0,0,0-.2.1-.2,0,0,.8-.2,1.4-.8,0,0,.2,0,.2,0,0,0,0,0,0,0Z" fill="#fff"/>
                  <path d="M404.3,400.7s0,0-.1,0c-.6.6-1.4.8-1.4.8,0,0-.1.1-.1.2,0,0,0,.1.2.1s0,0,0,0c0,0,.9-.2,1.6-.9,0,0,0,0,0-.2,0,0,0,0,0,0,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M398.1,378.2s0,0,0,0c0,0,0,.2-.2.2-1.2,0-2.1.2-2.1.2,0,0-.2,0-.2-.1,0,0,0-.2.1-.2,0,0,.9-.3,2.2-.2,0,0,.1,0,.2.1Z" fill="#fff"/>
                  <path d="M397.5,378c-1,0-1.7.2-1.7.2,0,0-.1.1-.1.2,0,0,0,.1.2.1s0,0,0,0c0,0,.7-.2,1.6-.2s.3,0,.5,0c0,0,0,0,0,0,0,0,.2,0,.2-.2,0,0,0,0,0,0,0,0,0-.1-.2-.1-.2,0-.3,0-.5,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M396.2,379.1s0,0,0,0c0,0,0,.2-.2.2-1.1.1-2.4.7-2.4.7,0,0-.2,0-.2,0,0,0,0-.2,0-.2,0,0,1.4-.6,2.5-.7,0,0,.2,0,.2.1Z" fill="#fff"/>
                  <path d="M396.1,379s0,0,0,0c-1.1.1-2.5.7-2.5.7,0,0-.1.1,0,.2,0,0,0,.1.2.1s0,0,0,0c0,0,1.3-.6,2.4-.7,0,0,.2,0,.2-.2,0,0,0,0,0,0,0,0,0-.1-.2-.1h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <g>
                    <path d="M382.3,400.7c-.8,0-1.1-.3-1.1-.3,0,0,0,0,0,0,.5-.4,3.9-1.8,5.3-2.4,0,0,.3.2.4.5l-.6,2.2c-.2,0-.6-.2-1.2-.2s-1,0-1.6.2c-.4.1-.8.2-1.2.2Z" fill="#fff"/>
                    <path d="M386.4,398.2c0,0,.1.1.2.2l-.5,1.8c-.3,0-.6-.1-1-.1-.5,0-1.1,0-1.7.2-.4,0-.8.1-1.1.1s-.5,0-.7,0c.8-.4,3.2-1.5,4.9-2.2M386.5,397.6s-4.8,2.1-5.5,2.5c-.5.4,0,.9,1.2.9s.8,0,1.3-.2c.6-.1,1.1-.2,1.5-.2.9,0,1.3.3,1.3.3l.7-2.5c-.3-.5-.6-.8-.6-.8h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M387.3,398.3s0,0,0,0l-.7,2.5c0,0,0,0-.1.1,0,0-.1,0-.2,0,0,0-.8-.5-2.8,0-1.5.4-2.6,0-2.8-.4,0-.2,0-.4.2-.6.6-.5,5.3-2.5,5.5-2.5,0,0,.1,0,.2,0,0,0,.4.3.7.8,0,0,0,0,0,0ZM386.3,400.6l.7-2.3c-.2-.3-.4-.5-.5-.6-1.7.7-4.9,2.1-5.3,2.5-.1.1-.1.2-.1.2.1.2,1,.6,2.4.2,1.6-.4,2.5-.2,2.8,0Z" fill="#fff"/>
                    <path d="M386.5,397.4s0,0,0,0c-.2,0-4.9,2.1-5.5,2.5-.2.2-.3.4-.2.6.1.3.7.6,1.5.6s.8,0,1.3-.2c.6-.1,1.1-.2,1.5-.2.9,0,1.2.2,1.3.2,0,0,0,0,0,0s0,0,0,0c0,0,0,0,.1-.1l.7-2.5s0,0,0,0c0,0,0,0,0,0-.3-.6-.7-.8-.7-.8,0,0,0,0,0,0h0ZM382.3,400.8c-.7,0-1.1-.2-1.2-.4,0,0,0,0,.1-.2.5-.3,3.7-1.7,5.3-2.5.1,0,.3.3.5.6l-.7,2.3c-.2,0-.6-.2-1.2-.2s-.9,0-1.6.2c-.5.1-.9.2-1.2.2h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M380,400.1c-.8,0-1.5-.5-1.9-1.2-.5-1,0-2.3,1-2.8l3.5-1.6c.3-.1.6-.2.9-.2.8,0,1.5.5,1.9,1.2.5,1,0,2.3-1,2.8l-3.5,1.6c-.3.1-.6.2-.9.2Z" fill="#fff"/>
                    <path d="M383.5,394.5c.7,0,1.4.4,1.7,1.1.2.4.2.9,0,1.4-.2.5-.5.8-.9,1l-3.5,1.6c-.2.1-.5.2-.8.2-.7,0-1.4-.4-1.7-1.1-.4-.9,0-2,.9-2.4l3.5-1.6c.2-.1.5-.2.8-.2M383.5,394c-.3,0-.7,0-1,.2l-3.5,1.6c-1.2.5-1.7,1.9-1.1,3.1.4.9,1.2,1.4,2.1,1.4s.7,0,1-.2l3.5-1.6c1.2-.5,1.7-1.9,1.1-3.1-.4-.9-1.2-1.4-2.1-1.4h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M386.5,397c0,.2,0,.3,0,.5,0,.2-.3.4-.5.5l-6.3,2.9c-.2.1-.5.1-.7,0-.2,0-.4-.3-.5-.5l-1.3-2.8c-.2-.5,0-1.1.5-1.3l6.3-2.9c.5-.2,1.1,0,1.3.5l1.3,2.8c0,0,0,.2,0,.3ZM377.3,397.3c0,0,0,.1,0,.2l1.3,2.8c0,.1.2.3.3.3.2,0,.3,0,.5,0l6.3-2.9c.1,0,.3-.2.3-.3,0-.2,0-.3,0-.5l-1.3-2.8h.2c0,0-.2,0-.2,0-.1-.3-.5-.4-.8-.3l-6.3,2.9c-.3.1-.4.4-.4.7Z" fill="#fff"/>
                    <path d="M384.2,393.4c-.1,0-.3,0-.4,0l-6.3,2.9c-.5.2-.7.8-.5,1.3l1.3,2.8c.1.2.3.4.5.5.1,0,.2,0,.3,0s.3,0,.4,0l6.3-2.9c.2-.1.4-.3.5-.5,0-.2,0-.3,0-.5,0,0,0-.2,0-.3l-1.3-2.8c-.2-.4-.5-.6-.9-.6h0ZM379.2,400.6c0,0-.1,0-.2,0-.2,0-.3-.2-.3-.3l-1.3-2.8c0,0,0-.1,0-.2,0-.3,0-.5.4-.7l6.3-2.9c0,0,.2,0,.3,0,.2,0,.5.1.6.4h.2c0,0-.2,0-.2,0l1.3,2.8c0,.1,0,.3,0,.5,0,.2-.2.3-.3.3l-6.3,2.9c0,0-.2,0-.3,0h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M382.7,396.6c0,0-.1,0-.1,0-.1-.3.8-1.6,1.7-2.5l.4-.5h-.6c-2,.2-2.7,1-3.1,1.5-.1.1-.2.3-.3.3-.1,0-.2,0-.2-.1,0-.2.2-.5.4-.7h.1c0-.1,0-.2,0-.2-.2-.8.5-1.2.6-1.2h.1c0,0,0-.2,0-.2,0-.9,2.3-1.7,3.8-2,1.1,0,2,.9,2.2,1.2,0,1.1-.2,2.7-.7,2.9-.4.3-.7.6-.8.8-.1.2-.2.2-.3.3,0,0,0-.2,0-.5,0-.1.1-.3.2-.4.2-.3.3-.6.2-.8,0,0-.2-.2-.4-.2s-.2,0-.4,0c-.8.3-1.3.9-1.7,1.5-.1.2-.3.4-.5.6-.3.3-.4.4-.5.4Z" fill="#fff"/>
                    <path d="M385.4,390.9c.9,0,1.7.7,1.9,1,0,1.2-.3,2.5-.5,2.6-.3.2-.5.4-.6.5,0,0,0,0,0,0,.2-.3.4-.7.2-1,0-.1-.2-.3-.6-.3s-.3,0-.5,0c-.9.3-1.4,1-1.9,1.6-.1.2-.3.4-.4.6.3-.5.8-1.2,1.5-1.9l.9-.9h-1.3c-1.5.2-2.3.7-2.8,1.2v-.3c-.2-.6.3-.9.4-.9h.3c0-.1,0-.4,0-.4,0-.6,1.8-1.4,3.5-1.8M385.4,390.4s-4,.8-4,2.3c0,0-.9.5-.7,1.5,0,0-.9,1-.1,1.3,0,0,0,0,.1,0,.6,0,.7-1.5,3.4-1.7,0,0-2,2.1-1.7,2.8,0,0,.1.2.3.2s.4-.1.7-.5c.7-.9,1.1-1.8,2.1-2.1.1,0,.2,0,.3,0,.5,0-.1.7-.2,1.1,0,.4,0,.8.2.8s0,0,.1,0c.4-.1.5-.6,1.2-1.1.7-.5.8-3.2.8-3.2,0,0-1-1.3-2.5-1.4h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M388,391.8s0,0,0,0c0,.3,0,2.8-.8,3.4-.4.3-.6.5-.7.7-.2.2-.3.3-.5.4-.2,0-.4,0-.4,0-.3-.2-.2-.7-.1-.9,0-.2.1-.3.2-.5,0-.1.1-.3.2-.4,0,0-.1,0-.3,0-.7.2-1.1.7-1.5,1.4-.1.2-.3.4-.5.7-.3.4-.6.6-.9.5-.2,0-.4-.2-.4-.3,0,0,0,0,0,0-.2-.6.9-2,1.5-2.7-1.4.2-2,.8-2.3,1.2-.2.3-.4.5-.8.4-.3-.1-.4-.3-.4-.4,0-.4.3-.9.4-1-.2-.8.3-1.3.7-1.6,0-.6.8-1.2,2.1-1.8,1-.4,2-.6,2-.6,0,0,0,0,0,0,1.5,0,2.6,1.4,2.6,1.4,0,0,0,0,0,0ZM385.7,395.8c0,0,0,.1,0,.1,0,0,0,0,0,0,.1,0,.2-.2.4-.3.2-.2.4-.5.8-.7.5-.3.7-2,.7-3-.2-.2-1.1-1.2-2.3-1.2-1.1.2-3.8,1-3.8,2.1,0,0,0,.1,0,.2,0,0-.2.1-.4.4-.2.3-.3.6-.2,1,0,0,0,.1,0,.2-.2.2-.5.6-.4.8,0,0,0,.1.2.2.1,0,.2,0,.4-.3.4-.5,1.1-1.3,3-1.4,0,0,.1,0,.2,0,0,0,0,.1,0,.2-.8.8-1.8,2.2-1.7,2.6,0,0,0,0,.2.1,0,0,.3,0,.6-.4.2-.2.3-.4.5-.6.5-.6.9-1.3,1.7-1.5.2,0,.5-.1.6,0,.2.2,0,.5-.1.8,0,.2-.2.3-.2.4,0,.2,0,.4,0,.5Z" fill="#fff"/>
                    <path d="M385.4,390.3s0,0,0,0c0,0-1,.2-2,.6-1.3.5-2,1.1-2.1,1.8-.4.2-.9.8-.7,1.6-.2.2-.5.6-.4,1,0,.1.1.3.4.4,0,0,.1,0,.2,0,.3,0,.4-.2.6-.4.4-.4.9-1,2.3-1.2-.6.7-1.7,2-1.5,2.7,0,0,0,0,0,0,0,0,.2.3.4.3,0,0,0,0,0,0,.3,0,.5-.2.8-.5.2-.2.3-.4.5-.7.4-.6.8-1.2,1.5-1.4.1,0,.2,0,.3,0,0,0-.1.3-.2.4,0,.2-.2.4-.2.5,0,.2-.1.7.1.9,0,0,.1,0,.2,0s.1,0,.2,0c.2,0,.3-.2.5-.4.2-.2.4-.4.7-.7.8-.5.8-3.1.8-3.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0-1.1-1.4-2.6-1.4h0ZM380.7,395.3s0,0,0,0c-.2,0-.2-.2-.2-.2,0-.2.2-.6.4-.8,0,0,0-.1,0-.2,0-.3,0-.7.2-1,.2-.2.4-.4.4-.4,0,0,0,0,0-.2,0-1.1,2.7-1.9,3.8-2.1,1.2,0,2.1,1,2.3,1.2,0,1-.2,2.7-.7,3-.4.3-.6.5-.8.7-.1.2-.2.3-.4.3,0,0,0,0,0,0s0,0,0,0c0,0,0,0,0-.1,0-.1,0-.3,0-.5,0-.1.1-.3.2-.4.2-.3.3-.6.1-.8,0,0-.2-.1-.3-.1s-.2,0-.4,0c-.8.2-1.2.9-1.7,1.5-.1.2-.3.4-.5.6-.3.3-.5.4-.5.4s0,0,0,0c0,0-.2,0-.2-.1-.1-.4.9-1.8,1.7-2.6,0,0,0-.1,0-.2,0,0,0,0-.2,0s0,0,0,0c-1.9.1-2.6.9-3,1.4-.2.2-.3.3-.4.3h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <path d="M383.8,392.8s0,0,0,0c0,0,0,.2-.2.2,0,0-1.4.1-2.8,1.4,0,0-.2,0-.2,0,0,0,0-.2,0-.2,1.5-1.3,3-1.5,3-1.5,0,0,.2,0,.2.1Z" fill="#fff"/>
                  <path d="M383.7,392.6s0,0,0,0c0,0-1.5.1-3,1.5,0,0,0,.2,0,.2,0,0,0,0,.1,0s0,0,.1,0c1.4-1.2,2.8-1.4,2.8-1.4,0,0,.2,0,.2-.2,0,0,0,0,0,0,0,0,0-.1-.2-.1h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M383.6,391.9c0,0,0,.2-.1.2-1.2.3-1.9.8-2,.8,0,0-.2,0-.2,0,0,0,0-.2,0-.2,0,0,.8-.6,2.1-.8,0,0,.2,0,.2.1,0,0,0,0,0,0Z" fill="#fff"/>
                  <path d="M383.4,391.7s0,0,0,0c-1.3.3-2,.8-2.1.8,0,0,0,.2,0,.2,0,0,0,0,.1,0s0,0,.1,0c0,0,.7-.5,2-.8,0,0,.1-.1.1-.2,0,0,0,0,0,0,0,0,0-.1-.2-.1h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <path d="M385.7,421l2.3-2.8,11.1-3.3c-2,5-4.9,12-5.4,12.8-.5.2-1.9,1.2-3.2,2.1l-4.8-8.7Z" fill="#fff"/>
                <path d="M398.7,415.2c-1.9,4.6-4.6,11.1-5.2,12.2-.3.1-1.1.6-3,1.9l-4.6-8.3,2.2-2.6,10.5-3.2M399.5,414.4l-11.6,3.5-2.5,3,5,9.1s3-2.2,3.4-2.2,0,0,0,0c0,0,0,0,0,0,.3,0,5.7-13.4,5.7-13.4h0Z" fill="#9b978f"/>
              </g>
              <g>
                <g>
                  <g>
                    <path d="M389.6,431.8c-.5-.6-1.8-2.1-2.7-4-1.1-2.5-1.8-3.5-2.4-3.9-.5-.3-.9-.8-.8-1.2h0c0,0,0-.1,0-.1,0,0,0-.3.2-.6h0c0,0,0-.2,0-.2,0-.1,0-.4.2-.4h.1s0-.2,0-.2c0,0,.2-.4.5-.4.4,0,.4.2.4.2v.2s.2,0,.2,0c0,0,.4,0,.6.4.2.6,0,1.3,0,1.3h0c0,0,0,.2,0,.2,0,.1,1.7,2.8,2.9,3.8,1,.9,1.7,1.9,1.9,2.1v.7c-.2.3-1,1.2-1.4,2.2Z" fill="#fff"/>
                    <path d="M384.9,420.5v.5c.1,0,.2,0,.2,0v.3c0,0,.5,0,.5,0,0,0,.3,0,.3.3.2.5,0,1.1,0,1.2v.2s0,.1,0,.1c0,.1,1.7,2.8,2.9,3.9.9.8,1.6,1.7,1.8,2v.5c-.3.3-.8,1-1.3,1.8-.6-.7-1.7-2-2.4-3.7-1.2-2.5-1.8-3.6-2.4-4-.5-.4-.8-.7-.7-.9h0c0-.1,0-.3,0-.3,0,0,0-.2.1-.4h.1c0-.1,0-.3,0-.3,0,0,0-.2,0-.2h.3c0,0,0-.3,0-.3,0,0,0-.3.3-.3v-.5M384.9,420.5c-.5,0-.7.6-.7.6-.3,0-.4.6-.4.6-.4.4-.3.9-.3.9-.2.5.4,1.1.9,1.5.5.4,1.1,1.3,2.3,3.8s3,4.3,3,4.3c.5-1.3,1.6-2.5,1.6-2.5v-.8s-.8-1.2-1.9-2.2c-1.2-1-2.8-3.8-2.8-3.8,0,0,0-.8-.1-1.4-.2-.6-.8-.6-.8-.6s0,0,0,0c0,0,0-.3-.6-.4,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M391.4,428.9s0,0,0,0v.8s0,0,0,.1c0,0-1.1,1.2-1.6,2.5,0,0,0,0-.1.1,0,0-.1,0-.2,0,0,0-1.9-1.9-3-4.4-1.1-2.3-1.7-3.4-2.2-3.8-.4-.3-1.2-.9-1-1.6,0-.1,0-.6.3-.9,0-.2.1-.5.4-.7,0-.2.3-.6.9-.6.5,0,.7.2.7.4.3,0,.7.2.9.7.2.5.1,1.2.1,1.4.2.4,1.7,2.8,2.8,3.7,1.2,1,1.9,2.2,2,2.3,0,0,0,0,0,0ZM391.1,429.6v-.7c-.1-.2-.9-1.3-1.9-2.2-1.2-1.1-2.8-3.7-2.9-3.8,0,0,0,0,0-.1,0,0,0-.7,0-1.3-.2-.5-.6-.5-.7-.5,0,0-.2,0-.2-.1h0s0-.2-.5-.2c-.4,0-.6.5-.6.5,0,0,0,0-.1.1-.2,0-.3.5-.3.5,0,0,0,0,0,.1-.3.3-.2.7-.2.7,0,0,0,0,0,0-.2.5.6,1.1.8,1.3.6.4,1.2,1.5,2.3,3.9.9,2,2.3,3.6,2.8,4.1.5-1.1,1.3-2.1,1.5-2.3Z" fill="#fff"/>
                    <path d="M384.9,420.4c-.5,0-.8.4-.9.6-.3.1-.4.5-.4.7-.4.4-.3.8-.3.9-.2.7.6,1.4,1,1.6.5.3,1.1,1.4,2.2,3.8,1.2,2.5,3,4.4,3,4.4,0,0,0,0,.1,0s0,0,0,0c0,0,.1,0,.1-.1.5-1.2,1.6-2.5,1.6-2.5,0,0,0,0,0-.1v-.8s0,0,0,0c0,0,0,0,0,0,0,0-.8-1.2-2-2.3-1-.9-2.5-3.3-2.8-3.7,0-.2,0-.8-.1-1.4-.2-.5-.6-.7-.9-.7,0-.1-.3-.3-.7-.4,0,0,0,0,0,0h0ZM389.6,431.9c-.5-.5-1.9-2.1-2.8-4.1-1.1-2.4-1.8-3.5-2.3-3.9-.2-.2-1-.8-.8-1.3,0,0,0,0,0,0,0,0,0-.4.2-.7,0,0,0,0,0-.1,0,0,0-.4.3-.5,0,0,0,0,.1-.1,0,0,.2-.5.6-.5,0,0,0,0,0,0,.4,0,.5.2.5.2h0c0,0,0,.1.2.1s0,0,0,0,0,0,0,0c0,0,.5,0,.7.5.2.6,0,1.3,0,1.3,0,0,0,0,0,.1,0,.1,1.7,2.8,2.9,3.8,1,.9,1.7,1.9,1.9,2.2v.7c-.2.2-1,1.2-1.5,2.3h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M385.9,420.2c0,0-.1,0-.1,0v-.2s-.2-.1-.2-.1c-.3,0-.4-.2-.4-.3h0c0,0,0-.2,0-.2-.2-.4,0-.8,0-.8h0c0,0,0-.2,0-.2,0-.2.1-.5.2-.6.2-.5.7-.6,1.1-.6s.3,0,.3,0h.1c.3,0,1.6-.1,3.7-1.6,1.8-1.3,4.2-2.1,5.1-2.3l-.5,3c-.9.4-3.6,1.1-4.7,1.4h-.2c-1.1.4-2.6,1.3-2.7,1.3h0c0,0,0,.1,0,.1-.2.6-1,1-1.5,1.1h0Z" fill="#fff"/>
                    <path d="M395.4,413.6l-.4,2.5c-1,.4-3.5,1.1-4.6,1.3h-.3c-1.2.4-2.7,1.3-2.8,1.4h-.2c0,.1,0,.3,0,.3-.1.5-.8.8-1.2.9v-.2s-.4-.1-.4-.1c0,0-.1,0-.2,0h0c0-.1,0-.3,0-.3-.1-.2,0-.5,0-.6v-.2c0,0,0-.2,0-.2,0,0,0-.3.1-.4h0c0,0,0-.1,0-.1.1-.3.5-.4.9-.4.2,0,.3,0,.3,0,0,0,0,0,.1,0,.4,0,1.7-.1,3.8-1.7,1.6-1.1,3.6-1.8,4.7-2.2M396,412.9s-3.3.8-5.6,2.5c-2,1.5-3.2,1.6-3.5,1.6s0,0,0,0c0,0-.2,0-.4,0-.4,0-1.1.1-1.3.7,0,0-.3.5-.2.8,0,0-.3.6,0,1.1,0,0-.1.4.6.6,0,0,0,.4.4.4s0,0,.1,0c.5,0,1.5-.5,1.7-1.3,0,0,1.5-1,2.6-1.3,1.1-.3,4.3-1.1,5.2-1.6l.5-3.5h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M396.2,412.8s0,0,0,0l-.5,3.5c0,0,0,0,0,.1-.3.2-.8.3-1.4.5-1.2.4-2.7.8-3.6,1h-.3c-.9.3-2.2,1.1-2.5,1.3-.3.8-1.3,1.3-1.9,1.3-.2,0-.4,0-.5-.1,0,0-.1-.2-.1-.2-.2,0-.4-.2-.5-.3,0-.1,0-.3,0-.3-.2-.4,0-.9,0-1.1,0-.4.2-.8.2-.9.4-1,1.8-.8,1.9-.8,0,0,1.3,0,3.5-1.5,2.3-1.7,5.6-2.5,5.6-2.5,0,0,.1,0,.2,0,0,0,0,0,0,0ZM395.3,416.3l.5-3.1c-.8.2-3.4,1-5.3,2.4-2.4,1.7-3.6,1.6-3.7,1.6,0,0,0,0,0,0,0,0-1.3-.2-1.5.6,0,0,0,0,0,0,0,.1-.2.5-.2.7,0,0,0,0,0,.1,0,0-.2.5,0,.9,0,0,0,0,0,.1,0,0,0,.3.4.4,0,0,.1.1.1.2,0,0,0,0,0,.1,0,0,.1,0,.3,0,.4,0,1.4-.4,1.6-1.1,0,0,0,0,0-.1,0,0,1.6-1,2.7-1.3h.3c1.2-.4,3.9-1.1,4.8-1.5Z" fill="#fff"/>
                    <path d="M396,412.7s0,0,0,0c0,0-3.3.8-5.6,2.5-2,1.5-3.2,1.5-3.4,1.5s0,0,0,0c0,0-.2,0-.4,0-.5,0-1.2.1-1.5.8,0,.1-.3.5-.2.9,0,.2-.2.7,0,1.1,0,0,0,.2,0,.3,0,.2.3.3.5.3,0,0,0,.2.1.2.1.1.2.2.4.2s0,0,.1,0c.6,0,1.6-.5,1.9-1.3.3-.2,1.6-1,2.5-1.2h.3c.9-.3,2.4-.7,3.6-1.1.6-.2,1.1-.4,1.4-.5,0,0,0,0,0-.1l.5-3.5s0,0,0,0c0,0,0,0,0,0,0,0,0,0-.1,0h0ZM395.8,413.1l-.5,3.1c-.9.4-3.6,1.1-4.8,1.4h-.3c-1.1.4-2.6,1.3-2.7,1.3,0,0,0,0,0,.1-.2.7-1.2,1.1-1.6,1.1,0,0,0,0,0,0,0,0-.1,0-.2,0,0,0,0-.1,0-.1,0,0,0-.2-.1-.2-.5-.1-.4-.3-.4-.4,0,0,0,0,0-.1-.2-.4,0-.9,0-.9,0,0,0,0,0-.1,0-.2.1-.6.2-.7,0,0,0,0,0,0,.2-.5.8-.6,1.2-.6s.3,0,.3,0c0,0,0,0,0,0,0,0,0,0,0,0,.3,0,1.6-.1,3.6-1.6,1.9-1.4,4.5-2.1,5.3-2.4h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M396.6,437.1c-.7,0-1.1-.1-1.1-.1h0s0,0,0,0c-.1,0-.3,0-.4,0-.6,0-1.1-.3-1.6-.5-.2-.1-.4-.2-.6-.3-.6-.2-2.2-2.6-3.2-4.1,0-1.6.4-2.6,1-2.6s.6.2.6.2l.5.4v-.6c-.5-4.6.2-8.7,1.4-9.5,1.5-1,3-3.1,3.1-3.2v-.2c.1,0,0-.1,0-.1-.9-.7-1-1.4-.9-2,.2-.8.9-1.5,1.6-1.7.8-.2,1.2-.5,1.6-.8.4-.3.7-.6,1.4-.7.1,0,.3,0,.4,0,1.3,0,2.8,1,2.8,1,.9.3,1,.8,1.2,1.3,0,.3.2.6.4.9.2.2.5.6.7,1.1.3.5.6,1.2,1.1,1.6.8.8,1.1,1.7,1.1,1.7,1.8,5.4-.3,9.5-.3,9.5-4,7.5-8.3,8.6-10.5,8.6Z" fill="#fff"/>
                    <path d="M400.1,411.7c1.2,0,2.7.9,2.7.9h0s0,0,0,0c.7.3.8.6.9,1.1,0,.3.2.7.5,1,.2.1.4.6.7,1,.3.6.7,1.2,1.1,1.7.8.8,1,1.6,1,1.6,1.7,5.3-.3,9.3-.3,9.3-1.4,2.6-5.1,8.5-10.3,8.5s-1,0-1,0h-.1s-.1,0-.1,0c-.1,0-.2,0-.4,0-.5,0-1-.2-1.5-.5-.2-.1-.4-.2-.6-.3-.5-.2-1.9-2.2-3-3.9,0-1.7.4-2.3.7-2.3s.4.1.4.2l.9.8v-1.2c-.5-4.4,0-8.5,1.2-9.3,1.5-1,3.1-3.1,3.1-3.2l.3-.4-.4-.3c-.7-.5-.9-1.1-.8-1.7.1-.7.8-1.3,1.4-1.5.8-.2,1.3-.5,1.7-.9.4-.3.7-.5,1.3-.7.1,0,.2,0,.3,0M400.1,411.2c-.1,0-.3,0-.4,0-1.4.3-1.5,1.2-3,1.5-1.4.3-2.9,2.6-.8,4.1,0,0-1.6,2.1-3,3.1s-2,5.4-1.6,9.8c0,0-.3-.3-.8-.3s-1.2.5-1.2,2.9c0,0,2.4,3.9,3.3,4.2.8.3,1.5.8,2.4.8s.3,0,.5,0c0,0,.4.1,1.1.1,2.1,0,6.6-1,10.7-8.8,0,0,2.2-4.1.4-9.7,0,0-.3-1-1.1-1.8-.9-.9-1.3-2.3-1.9-2.8s0-1.6-1.6-2.2c0,0-1.6-1-3-1h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M389.3,431.9s0,0,0,0h0s0,0,0,0Z" fill="#fff"/>
                    <path d="M400.2,411c-.2,0-.3,0-.5,0-.8.1-1.2.5-1.6.8-.4.3-.7.6-1.4.7-.9.2-1.7,1-1.9,2-.2.9.1,1.7.9,2.3-.4.5-1.7,2.1-2.9,2.9-.9.6-1.4,2.4-1.6,3.7-.3,1.8-.3,3.9-.1,6.1-.2.2-.5.9-1.2,1.7-.3.3-.5.3-.7.3s-.1,0-.2,0c-.1,0-.1,0,0,.5,0,0,0,0,.1.1,0,0,0,.1,0,.1s0,0,0,0h0s2.5,3.9,3.4,4.3c.2,0,.4.2.6.3.6.3,1.2.6,1.8.6s.3,0,.5,0c.1,0,.5.1,1.1.1s1.7-.1,2.8-.5c1.3-.5,2.6-1.4,3.9-2.5,1.5-1.5,3-3.4,4.2-5.8,0,0,.6-1.1.9-2.8.2-1.3.4-3.1,0-5.3-.1-.5-.3-1.1-.4-1.7,0,0-.3-1-1.2-1.9-.4-.4-.7-1-1-1.5-.3-.5-.5-1-.9-1.2-.2-.1-.2-.3-.3-.6-.1-.5-.3-1.2-1.4-1.6-.2-.1-1.7-1-3-1h0ZM395,437.1c-.6,0-1.1-.3-1.7-.5-.2-.1-.4-.2-.6-.3-.8-.3-2.4-2.8-3.2-4.3.4-.1,1.9-2.3,1.9-2.3,0,0,0,0,0-.1-.2-2.2-.2-4.4,0-6.1.3-1.8.8-3.1,1.4-3.5.8-.5,1.5-1.3,2.1-2,.5-.6.9-1.1.9-1.2,0,0,0,0,0-.1,0,0,0,0,0-.1-.8-.6-1.1-1.3-.9-2,.2-.8.9-1.6,1.7-1.7.8-.2,1.2-.5,1.5-.8.4-.3.7-.6,1.4-.7.1,0,.3,0,.4,0,1.3,0,2.9,1,2.9,1,0,0,0,0,0,0,.9.3,1,.8,1.2,1.3,0,.3.1.6.4.8.3.2.5.6.8,1.1.3.5.6,1.2,1.1,1.6.8.8,1.1,1.7,1.1,1.8,0,0,0,0,0,0,.9,2.9.8,5.3.5,6.8-.3,1.7-.8,2.7-.8,2.7-1.3,2.4-2.7,4.3-4.1,5.7-1.2,1.1-2.5,2-3.8,2.5-1.1.4-2,.5-2.7.5s-1.1-.1-1.1-.1c0,0,0,0,0,0s0,0,0,0c-.2,0-.3,0-.4,0h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <path d="M401,435s0,0,0,0c0,0-.1.2-.2.1,0,0-1.2-.3-2.8-.8-1.4-.5-3.4-1.3-4.9-2.5-.3-.2-.7-.8-.3-1.6,0,0,0,0,0,0,0,0,0,0,0,0-.3,0-1,.1-1.6-.5,0,0,0-.2,0-.2,0,0,.2,0,.2,0,.5.5,1,.5,1.3.4.2,0,.3,0,.4,0,0,.1,0,.3,0,.5-.4.7.2,1.1.2,1.1,0,0,0,0,0,0,2.7,2.2,7.5,3.2,7.5,3.2,0,0,.1,0,.1.1Z" fill="#fff"/>
                  <path d="M391.3,429.5s0,0-.1,0c0,0,0,.2,0,.2.4.5.9.6,1.2.6s.3,0,.4,0c0,0,0,0,0,0,0,0,0,0,0,0-.4.8,0,1.4.3,1.6,1.4,1.2,3.4,2,4.9,2.5,1.5.5,2.8.8,2.8.8,0,0,0,0,0,0,0,0,.2,0,.2-.1,0,0,0,0,0,0,0,0,0-.1-.1-.1,0,0-4.8-1.1-7.5-3.2,0,0,0,0,0,0,0,0-.6-.4-.2-1.1.1-.2.2-.4,0-.5,0,0-.1-.1-.2-.1s-.1,0-.2,0c0,0-.2,0-.3,0-.3,0-.6,0-1-.5,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M401.6,417.5s0,0,0,0c0,0,0,.2-.2.2-3,.2-5.5-.7-5.6-.8,0,0-.1-.1,0-.2,0,0,.1-.1.2,0,0,0,2.5,1,5.5.8,0,0,.2,0,.2.1Z" fill="#fff"/>
                  <path d="M395.9,416.6c0,0-.1,0-.2.1,0,0,0,.2,0,.2,0,0,2.1.8,4.7.8s.6,0,.9,0c0,0,.2,0,.2-.2,0,0,0,0,0,0,0,0,0-.1-.2-.1s0,0,0,0c-.3,0-.6,0-.9,0-2.6,0-4.5-.8-4.6-.8,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M401.3,414.5c0,0,0,.1,0,.2-1.1,1.1-3.1,1.8-3.2,1.8,0,0-.2,0-.2-.1,0,0,0-.2.1-.2,0,0,2-.7,3.1-1.8,0,0,.2,0,.2,0,0,0,0,0,0,0Z" fill="#fff"/>
                  <path d="M401.1,414.4s0,0-.1,0c-1.1,1.1-3.1,1.7-3.1,1.8,0,0-.1.1-.1.2,0,0,0,.1.2.1s0,0,0,0c0,0,2.1-.7,3.2-1.8,0,0,0-.1,0-.2,0,0,0,0,0,0,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M398.6,428.8c-.4-.2-2-1.4-1.5-3.9h0c0-.1,0-.2,0-.2,0,0-.5-.5-.3-.9.2-.4.7-.4.7-.4h.2v-.2c0,0,.7-1.6,2.3-2h0c.5,0,1.1.8,1.3,2,.4,1.9-.1,4.5-2.6,5.5Z" fill="#fff"/>
                      <path d="M400,421.5c.2,0,.8.6,1,1.8.3,1.8,0,4.2-2.3,5.2-.5-.3-1.7-1.4-1.3-3.6v-.3s-.1-.2-.1-.2c-.1-.1-.3-.4-.2-.6,0-.2.5-.2.5-.2h.3s.1-.3.1-.3c0,0,.6-1.5,2-1.8,0,0,0,0,0,0M400,421s0,0-.1,0c-1.7.4-2.4,2.1-2.4,2.1,0,0,0,0,0,0,0,0-.8,0-1,.5-.2.6.3,1.1.3,1.1-.6,3.1,1.8,4.3,1.8,4.3,4.4-1.7,3-8.1,1.4-8.1h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                      <path d="M401.6,423.1c.2,1,.2,2.1-.1,3.1-.3,1-1.1,2.4-2.8,3,0,0,0,0-.1,0,0,0-.6-.3-1.2-1-.5-.6-1-1.7-.7-3.4-.2-.2-.5-.7-.3-1.3.2-.5.8-.6,1-.6.2-.4.9-1.8,2.4-2.1.6-.2,1.3.5,1.7,1.7,0,.2.1.4.1.6ZM398.6,428.9c1.6-.6,2.3-1.9,2.5-2.8.3-1.1.3-2.4,0-3.5-.3-1-.8-1.6-1.3-1.5-1.6.4-2.2,2-2.3,2,0,0,0,.1-.2.1,0,0-.6,0-.8.4-.2.4.3,1,.3,1,0,0,0,0,0,.2-.2,1.2,0,2.3.6,3.2.4.5.8.8,1,.9Z" fill="#fff"/>
                      <path d="M400,420.8c0,0-.1,0-.2,0-1.5.4-2.3,1.7-2.4,2.1-.2,0-.8.1-1,.6-.2.5.2,1.1.3,1.3-.3,1.6.2,2.7.7,3.4.5.7,1.1,1,1.2,1,0,0,0,0,0,0s0,0,0,0c1.8-.7,2.5-2,2.8-3,.3-1,.3-2.1.1-3.1,0-.2,0-.4-.1-.6-.3-1.1-.9-1.7-1.5-1.7h0ZM397.5,423.3c0,0,.1,0,.2-.1,0,0,.7-1.6,2.3-2,0,0,0,0,.1,0,.4,0,.9.6,1.2,1.5.3,1.1.3,2.4,0,3.5-.3.9-1,2.1-2.5,2.8-.2,0-.6-.4-1-.9-.6-.9-.9-1.9-.6-3.2,0,0,0-.1,0-.2,0,0-.5-.5-.3-1,.2-.4.7-.4.8-.4s0,0,0,0c0,0,0,0,0,0h0Z" fill="#9b978f"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M404.1,431.6c-2.5,0-4.4-.8-5.6-2.2,0-.4,0-2.4,1.8-3.2h.2c0-.1,0-.3,0-.3,0,0-.8-1.8-.1-3.3.3-.6.3-1.1,0-1.5-.1-.2-.3-.4-.4-.4.1,0,.2-.2.4-.2s.2,0,.4.2c.2.2.4.2.6.2s.4-.1.6-.2c.2-.1.4-.2.6-.2s.3,0,.4,0c.4.2.8.2,1.1.2h.4c.6,0,1.1,0,1.8.9.2.2.5.5.8.8,1.4,1.5,3.4,3.5,1.6,6.6,0,.2-.7,2.3-3.4,2.5-.4,0-.7,0-1,0Z" fill="#fff"/>
                      <path d="M402.5,420.6c0,0,.2,0,.3,0,.4.2.8.2,1.2.2h.2s.2,0,.2,0c.5,0,1,0,1.6.8.2.3.5.5.8.8,1.5,1.5,3.3,3.4,1.6,6.3h0c0,0,0,.1,0,.1,0,0-.6,2.1-3.1,2.3-.3,0-.7,0-1,0-2.4,0-4.2-.7-5.3-2,0-.5.2-2.2,1.6-2.9l.4-.2-.2-.4s-.7-1.7-.1-3.1c.3-.7.3-1.3,0-1.8,0,0,0,0,0-.1.2.2.5.3.7.3s.5-.1.8-.2c.2,0,.3-.2.5-.2M402.5,420.1c-.5,0-.9.4-1.3.4s-.3,0-.4-.2c-.2-.2-.4-.2-.5-.2-.5,0-.8.5-.8.5,0,0,1.3.2.6,1.8-.7,1.6.1,3.5.1,3.5-2,1-1.9,3.5-1.9,3.5,1.2,1.6,3.4,2.4,5.8,2.4s.7,0,1.1,0c2.9-.2,3.6-2.7,3.6-2.7,2.3-3.9-1.1-6.2-2.4-7.7-.7-.9-1.4-1-2-1s-.2,0-.4,0c-.3,0-.7,0-1-.2-.2,0-.4-.1-.5-.1h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                      <path d="M409.5,425.7c.2,1,0,2.1-.7,3.4,0,.1-.2.7-.7,1.3-.5.6-1.4,1.4-3,1.5-3.1.3-5.7-.6-7-2.4,0,0,0,0,0,0,0-.1-.1-2.6,1.9-3.6-.2-.5-.7-2.1,0-3.5.2-.5.3-.9.1-1.2-.2-.3-.5-.4-.5-.4,0,0-.1,0-.1-.1,0,0,0-.1,0-.2,0,0,.3-.5.8-.6.3,0,.5,0,.8.2.3.2.4.1.8,0,.3-.2.8-.4,1.4-.1.4.2.7.2,1.1.2.7,0,1.5,0,2.3,1,.2.2.5.5.7.8.9.9,2,2.1,2.4,3.7ZM398.4,429.4c1.3,1.7,3.7,2.5,6.7,2.2,2.8-.2,3.4-2.5,3.4-2.5,0,0,0,0,0,0,1.8-3.2-.2-5.2-1.6-6.7-.3-.3-.5-.6-.7-.8-.7-.9-1.4-.9-2-.9-.4,0-.8,0-1.2-.2-.5-.2-.8,0-1.1.1-.3.2-.7.4-1.1,0-.2-.1-.3-.2-.5-.2-.2,0-.3.1-.4.2.2,0,.4.2.5.5.2.4.2.9,0,1.5-.7,1.5.1,3.3.1,3.3,0,0,0,.2,0,.2-1.8.8-1.8,3-1.8,3.3Z" fill="#fff"/>
                      <path d="M402.5,420c-.3,0-.6.1-.8.3-.2,0-.3.2-.5.2s-.2,0-.3-.1c-.2-.2-.4-.3-.6-.3s0,0-.1,0c-.5,0-.8.5-.8.6,0,0,0,.1,0,.2,0,0,0,0,.1.1,0,0,.4,0,.5.4.1.3.1.7-.1,1.2-.6,1.4-.1,3,0,3.5-2,1.1-1.9,3.5-1.9,3.6,0,0,0,0,0,0,1.2,1.6,3.3,2.4,6,2.4s.7,0,1.1,0c1.6-.1,2.5-.9,3-1.5.5-.6.7-1.2.7-1.3.8-1.3.9-2.4.7-3.4-.3-1.6-1.5-2.8-2.4-3.7-.3-.3-.5-.5-.7-.8-.8-.9-1.5-1-2.1-1s-.1,0-.2,0c0,0-.1,0-.2,0-.3,0-.6,0-.9-.2-.2,0-.4-.1-.6-.1h0ZM401.2,420.7c.2,0,.4-.1.6-.2.2-.1.4-.2.7-.2s.3,0,.4.1c.4.2.7.2,1.1.2s.1,0,.2,0c0,0,.1,0,.2,0,.6,0,1.2,0,1.9.9.2.3.5.5.7.8,1.5,1.5,3.4,3.6,1.6,6.7,0,0,0,0,0,0,0,0-.7,2.3-3.4,2.5-.4,0-.7,0-1.1,0-2.5,0-4.5-.8-5.6-2.2,0-.4,0-2.5,1.8-3.3,0,0,.1-.1,0-.2,0,0-.8-1.8-.1-3.3.3-.6.3-1.1,0-1.5-.1-.3-.3-.4-.5-.5.1-.1.3-.2.4-.2,0,0,0,0,0,0,.1,0,.3,0,.4.2.2.2.4.2.5.2h0Z" fill="#9b978f"/>
                    </g>
                  </g>
                  <g>
                    <path d="M403.9,426.5s0,0,0,0c0,0,0,.2-.1.2-.1,0-2.9.4-3.7-.6,0,0,0-.2,0-.2,0,0,.2,0,.2,0,.6.7,2.7.6,3.4.5,0,0,.2,0,.2.1Z" fill="#fff"/>
                    <path d="M400.2,425.8s0,0-.1,0c0,0,0,.2,0,.2.5.6,1.6.7,2.4.7s1.3,0,1.3,0c0,0,.2-.1.1-.2,0,0,0,0,0,0,0,0,0-.1-.2-.1,0,0,0,0,0,0-.3,0-.7,0-1.2,0-.8,0-1.8-.1-2.2-.6,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <g>
                      <path d="M408.5,431.5c-.4,0-.6-.3-.6-.3l-.2-.2-.2.2s-.4.3-.8.3-.3,0-.5-.1c-.1,0-.2-.2-.2-.3,0-.4.2-.8.3-1h0c0,0,0-.2,0-.2,0,0-.8-2.4,1.4-4.2h0s0,0,0,0c0,0,.3-.6.8-.6s.3,0,.4.1h0s0,0,0,0c.5,0,1.1,0,1.3.4,0,.1.1.3.1.4h0c0,.1,0,.2,0,.2,0,0,.9.8.5,2.1-.1.4-.3.9-.7.9s-.2,0-.2,0l-.6-.3.2.6s.4,1.1-.6,1.8c-.3.2-.6.3-.8.3Z" fill="#fff"/>
                      <path d="M408.6,425.1h0c0,0,.2,0,.3,0h.1c0,0,.1,0,.1,0h0c.5,0,.9.1,1.1.3,0,0,0,.1,0,.2v.3s.2.2.2.2c0,0,.8.7.5,1.9,0,.3-.2.7-.5.7s-.1,0-.1,0,0,0,0,0l-1.2-.6.5,1.2c0,0,.3.9-.5,1.5-.2.2-.5.3-.6.3s-.4-.2-.4-.2l-.3-.4-.4.3s-.3.2-.7.2-.3,0-.4-.1c0,0-.2-.1-.1-.5,0-.3.2-.5.2-.5v-.2c.1,0,0-.2,0-.2,0,0-.7-2.3,1.3-3.9h0c0,0,0-.2,0-.2,0-.1.3-.5.6-.5M408.6,424.6c-.7,0-1.1.8-1.1.8-2.3,1.9-1.5,4.4-1.5,4.4,0,0-.7,1.2,0,1.7.2.1.4.2.6.2.5,0,1-.3,1-.3,0,0,.3.4.8.4s.6,0,1-.4c1.2-.9.6-2.1.6-2.1,0,0,.1,0,.3,0,.3,0,.8-.2,1-1.1.4-1.5-.6-2.4-.6-2.4.1-1-1.2-1.1-1.6-1.1s0,0,0,0c-.2-.1-.4-.2-.5-.2h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                      <path d="M411.6,427.1c0,.4,0,.8,0,1.2-.1.6-.4,1-.8,1.1-.2,0-.4,0-.5,0,0,.5.1,1.3-.8,2-.4.3-.9.5-1.3.4-.3,0-.5-.2-.7-.4-.3.2-1,.5-1.7,0-.2-.1-.4-.3-.4-.6-.1-.5.2-1.1.3-1.3,0-.2-.2-.8-.1-1.5,0-.8.4-2,1.7-3,0-.1.4-.6.9-.8.3,0,.6,0,.9.1.2,0,1.1,0,1.6.5.2.2.3.4.2.7.1.2.5.6.6,1.3ZM409.9,429.3c0,0,0-.1,0-.2,0,0,.1,0,.2,0,0,0,.3.1.5,0,.2-.1.4-.4.6-.9.3-1.4-.5-2.2-.6-2.2,0,0,0,0,0-.1,0-.2,0-.4-.1-.5-.3-.3-1.1-.4-1.4-.4,0,0,0,0,0,0-.2-.1-.5-.2-.7-.1-.4.1-.7.7-.7.7,0,0,0,0,0,0-.9.7-1.5,1.7-1.6,2.8,0,.8.1,1.4.1,1.5,0,0,0,.1,0,.1,0,0-.4.6-.3,1s0,0,0,0c0,.2.1.3.3.4.3.2.6.2.9,0,.3,0,.5-.2.5-.2,0,0,0,0,.1,0,0,0,0,0,.1,0,0,0,.2.3.5.3.3,0,.6,0,1-.3,1-.8.6-1.9.6-1.9,0,0,0,0,0,0Z" fill="#fff"/>
                      <path d="M408.6,424.5c-.1,0-.2,0-.3,0-.5.2-.8.7-.9.8-1.2,1-1.6,2.2-1.7,3,0,.7,0,1.3.1,1.5-.1.2-.4.8-.3,1.3,0,.2.2.4.4.6.2.2.5.2.7.2.4,0,.8-.2.9-.3.1.1.3.3.7.4,0,0,.1,0,.2,0,.3,0,.7-.1,1.1-.4.9-.7.9-1.6.8-2,0,0,0,0,.1,0,.1,0,.3,0,.4,0,.4-.2.6-.5.8-1.1.1-.5.1-.9,0-1.2-.1-.7-.5-1.1-.6-1.3,0-.3,0-.5-.2-.7-.4-.4-1.3-.5-1.5-.5s0,0,0,0c-.2-.1-.4-.2-.6-.2h0ZM406.7,431.5c-.2,0-.4,0-.5-.2-.1,0-.2-.2-.3-.4,0,0,0,0,0,0,0-.5.3-1,.3-1,0,0,0,0,0-.1,0,0-.2-.6-.1-1.5.1-1.1.6-2,1.6-2.8,0,0,0,0,0,0,0,0,.3-.5.7-.7,0,0,.1,0,.2,0,.1,0,.3,0,.5.1,0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0,.3,0,1,0,1.3.4.1.1.2.3.1.5,0,0,0,.1,0,.1,0,0,.9.9.6,2.2-.1.5-.3.8-.6.9,0,0-.2,0-.3,0-.2,0-.3,0-.3,0,0,0,0,0,0,0,0,0,0,0-.1,0,0,0,0,.1,0,.2,0,0,0,0,0,0,0,0,.4,1.1-.6,1.9-.3.2-.6.3-.8.3s0,0-.1,0c-.4,0-.5-.3-.5-.3,0,0,0,0-.1,0,0,0,0,0,0,0,0,0,0,0-.1,0,0,0-.2.2-.5.2-.1,0-.3,0-.4,0h0Z" fill="#9b978f"/>
                    </g>
                  </g>
                  <g>
                    <path d="M401.2,421.9c0,.3,0,.8-.1,1.4-.3.9,0,2,0,2,0,0,0,.2-.1.2,0,0-.2,0-.2-.1,0,0-.4-1.2,0-2.2.3-.8,0-1.4,0-1.4,0,0,0-.2,0-.2,0,0,.2,0,.2,0,0,0,0,0,0,.2Z" fill="#fff"/>
                    <path d="M401.3,421.6h0s0,0,0,0M401,421.6s0,0,0,0c0,0-.1.1,0,.2,0,0,.2.6,0,1.4-.3,1,0,2.2,0,2.2,0,0,0,.1.2.1s0,0,0,0c0,0,.1-.1.1-.2,0,0-.4-1.1,0-2,.2-.6.2-1.2.1-1.4,0-.1,0-.2,0-.2,0,0,0-.1-.2-.1h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M402.1,423.4s0,0,0,.1c-.5.9.1,2.1.1,2.1,0,0,0,.2,0,.2,0,0-.2,0-.2,0,0,0-.2-.3-.3-.8-.1-.6,0-1.2.2-1.6,0,0,.2-.1.2,0,0,0,0,0,0,.1Z" fill="#fff"/>
                    <path d="M401.9,423.3c0,0-.1,0-.2,0-.3.5-.3,1-.2,1.6.1.5.3.8.3.8,0,0,0,0,.2,0s0,0,0,0c0,0,.1-.1,0-.2,0,0-.6-1.2-.1-2.1,0,0,0,0,0-.1,0,0,0,0,0-.1,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M400.2,427.1c0,0,0,.1,0,.2-.8.7-.9,2-.9,2,0,0,0,.2-.2.2,0,0-.2,0-.2-.2,0,0,.1-1.5,1.1-2.2,0,0,.2,0,.2,0,0,0,0,0,0,0Z" fill="#fff"/>
                    <path d="M400.1,426.9s0,0-.1,0c-.9.7-1.1,2.2-1.1,2.2,0,0,0,.2.2.2,0,0,0,0,0,0,0,0,.2,0,.2-.2,0,0,.1-1.3.9-2,0,0,0-.1,0-.2,0,0,0,0,0,0,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M409.3,429.5s0,0,0,0c0,.3,0,1-.7,1.2-.5.2-.8,0-1-.2-.1.1-.3.2-.4.2-.3,0-.6-.1-.6-.1,0,0,0-.2,0-.2,0,0,.2,0,.2,0,0,0,.2.1.4,0,.1,0,.2-.1.4-.3,0,0,0,0,.2,0,0,0,.1,0,.1.1,0,0,.2.4.8.2.6-.2.5-.8.5-.8,0,0,0-.2.1-.2,0,0,.2,0,.2.1Z" fill="#fff"/>
                    <path d="M409.1,429.3s0,0,0,0c0,0-.2,0-.1.2,0,0,0,.6-.5.8-.1,0-.2,0-.3,0-.3,0-.5-.2-.5-.3,0,0,0,0-.1-.1,0,0,0,0,0,0,0,0-.1,0-.1,0-.1.2-.2.3-.4.3,0,0,0,0,0,0-.2,0-.3,0-.3,0,0,0,0,0-.1,0,0,0-.1,0-.1,0,0,0,0,.2,0,.2,0,0,.2.2.5.2s0,0,.1,0c.2,0,.3-.1.4-.2.1.1.4.3.6.3s.2,0,.4,0c.7-.2.8-.9.7-1.2,0,0,0,0,0,0,0,0,0-.1-.2-.1h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M410.1,426.2c0,0,0,.2,0,.2,0,0,0,.2-.2.2,0,0-.2,0-.2-.2,0-.2,0-.3-.1-.4-.2-.2-.7-.1-.9-.1,0,0-.2,0-.2-.1h0c0,0,0-.2.1-.2,0,0,.7-.2,1.1.2.1.1.2.2.2.4Z" fill="#fff"/>
                    <path d="M409.1,425.6c-.2,0-.4,0-.4,0,0,0-.2.1-.1.2h0c0,0,0,.1.2.1s0,0,0,0c0,0,.2,0,.3,0,.2,0,.4,0,.5.1.1,0,.1.2.1.4,0,0,0,.2.2.2,0,0,0,0,0,0,0,0,.2,0,.2-.2,0,0,0-.2,0-.2,0-.2-.1-.3-.2-.4-.2-.2-.5-.2-.8-.2h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M410.9,427.9s0,0,0,0c0,.3-.2.5-.5.6-.5.2-1.1-.2-1.1-.2,0,0-.1-.2,0-.2,0,0,.2-.1.2,0,.1,0,.5.3.8.1.1,0,.2-.2.3-.4,0,0,.1-.2.2-.1,0,0,.1,0,.1.1Z" fill="#fff"/>
                    <path d="M410.7,427.8c0,0-.2,0-.2.1,0,.2-.1.3-.3.4,0,0-.1,0-.2,0-.2,0-.5-.1-.6-.2,0,0,0,0,0,0,0,0-.1,0-.1,0,0,0,0,.2,0,.2,0,0,.4.2.8.2s.2,0,.3,0c.2-.1.4-.3.5-.6,0,0,0,0,0,0,0,0,0-.1-.1-.1,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                </g>
              </g>
              <g>
                <g>
                  <path d="M384.7,422.2s0-.2.2-.5c0,0,.2-.2.3-.4.2-.3.5-.5.4-.8-.1-.2-.4-.3-.6-.3-.9,0-1.5.5-2.1,1-.2.2-.4.3-.6.5-.3.2-.4.2-.5.2-.1,0-.1,0-.2-.1,0-.3,1.2-1.3,2.3-2l.6-.3h-.6c-.4-.2-.8-.3-1.2-.3-1.1,0-1.8.4-2.2.7-.1,0-.3.2-.4.2-.1,0-.2-.1-.2-.2,0-.2.3-.5.6-.6h.1c0,0,0-.2,0-.2,0-.8.8-1,.9-1h.1s0-.2,0-.2c.2-.6,1.4-1,3.4-1s.8,0,.8,0c1,.3,1.6,1.4,1.8,1.8-.3,1-.9,2.5-1.4,2.7-.5.2-.8.4-1,.5-.2.1-.3.2-.4.2h0s0,0,0,0Z" fill="#fff"/>
                  <path d="M384.9,417.4c.3,0,.6,0,.7,0,.9.3,1.4,1.2,1.6,1.5-.4,1.2-.9,2.3-1.2,2.4-.3.1-.6.2-.8.3,0,0,0,0,0,0,.3-.3.6-.6.4-1-.2-.4-.7-.4-.9-.4h0c-.9,0-1.6.6-2.2,1.1-.2.2-.4.3-.6.5.4-.4,1.1-1,1.9-1.4l1.1-.7-1.3-.3c-.4,0-.8-.1-1.2-.1-.8,0-1.4.2-1.8.4v-.3c0-.6.6-.8.7-.8h.3c0,0,0-.4,0-.4.1-.4,1.1-.8,3.2-.8M384.9,416.9c-1.2,0-3.4.1-3.6,1.2,0,0-1.1.3-1.1,1.3,0,0-1.2.7-.5,1.2,0,0,.1,0,.2,0,.4,0,.9-.9,2.5-.9s.7,0,1.1.1c0,0-2.5,1.5-2.4,2.3,0,0,0,.3.4.3s.4,0,.7-.3c.9-.6,1.5-1.4,2.5-1.4,0,0,0,0,0,0,.9,0,0,.6-.2,1-.2.4-.3.8,0,.8s0,0,0,0c.4,0,.6-.4,1.4-.7.9-.3,1.6-2.9,1.6-2.9,0,0-.6-1.6-2-2,0,0-.3,0-.8,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M387.9,418.9s0,0,0,0c0,.3-.8,2.7-1.7,3-.4.1-.7.3-.9.4-.2.1-.4.2-.6.3-.2,0-.3,0-.4-.2-.2-.3,0-.7.1-.9,0-.1.2-.3.4-.4,0,0,.2-.2.3-.3,0,0-.1,0-.3,0-.7,0-1.2.4-1.8.9-.2.2-.4.3-.6.5-.4.3-.7.4-1,.3-.2,0-.3-.3-.4-.4,0,0,0,0,0,0,0-.7,1.4-1.7,2.1-2.2-1.4-.2-2.1.3-2.6.6-.3.2-.6.4-.9.2-.3-.2-.3-.4-.3-.5,0-.4.5-.8.7-.9,0-.8.7-1.2,1.1-1.3.2-.6,1.1-1,2.5-1.1,1.1-.1,2.1,0,2.1,0,0,0,0,0,0,0,1.5.4,2.1,2,2.1,2.1,0,0,0,0,0,0ZM384.6,422.2c0,0,0,.1,0,.1,0,0,0,0,0,0,.1,0,.2,0,.4-.2.2-.1.5-.3,1-.5.5-.2,1.2-1.7,1.5-2.7-.1-.3-.7-1.5-1.9-1.8-1.1,0-4,0-4.2,1,0,0,0,.1-.1.1,0,0-.2,0-.5.2-.3.2-.5.5-.5.9,0,0,0,.1,0,.1-.2.1-.6.4-.6.6,0,0,0,.1.2.2.1,0,.2,0,.5-.2.5-.3,1.4-.9,3.3-.5,0,0,.1,0,.1.1,0,0,0,.1,0,.2-1,.6-2.4,1.6-2.3,2.1,0,0,0,.1.1.1,0,0,.3,0,.6-.2.2-.2.4-.3.6-.5.6-.5,1.2-1,2-1,.3,0,.5,0,.6.2,0,.2-.1.4-.3.7-.1.1-.2.3-.3.4,0,.2-.1.3-.2.4Z" fill="#fff"/>
                  <path d="M384.9,416.7c-.4,0-.8,0-1.3,0-1.4.1-2.3.5-2.5,1.1-.4.1-1,.5-1.1,1.3-.2.1-.7.5-.7.9,0,.1,0,.4.3.5,0,0,.2,0,.3,0,.2,0,.4-.1.6-.3.4-.3.9-.6,1.9-.6s.4,0,.7,0c-.8.5-2.2,1.5-2.1,2.2,0,0,0,0,0,0,0,.1.1.3.4.4,0,0,.1,0,.2,0,.2,0,.5-.1.8-.3.2-.2.4-.3.6-.5.6-.5,1.1-.9,1.8-.9,0,0,0,0,0,0,.1,0,.2,0,.2,0,0,0-.2.2-.3.3-.1.1-.3.3-.4.4,0,.2-.3.6-.1.9,0,0,.1.2.3.2s0,0,0,0c.2,0,.4-.1.6-.3.2-.1.5-.3.9-.4.9-.3,1.6-2.7,1.7-3,0,0,0,0,0,0,0,0,0,0,0,0,0,0-.7-1.7-2.1-2.1,0,0,0,0,0,0,0,0-.3,0-.8,0h0ZM380,420.4s0,0,0,0c-.2-.1-.2-.2-.2-.2,0-.2.4-.5.6-.6,0,0,0,0,0-.1,0-.4.2-.6.5-.9.2-.2.5-.2.5-.2,0,0,.1,0,.1-.1.2-.9,2.2-1,3.5-1s.6,0,.8,0c1.1.3,1.8,1.6,1.9,1.8-.3,1-.9,2.6-1.5,2.7-.5.2-.8.3-1,.5-.2.1-.3.2-.4.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0-.1,0-.1,0-.3.2-.4,0-.1.2-.2.3-.4.2-.3.4-.5.3-.7,0-.2-.3-.2-.5-.2,0,0,0,0,0,0-.8,0-1.4.5-2,1-.2.2-.4.3-.6.5-.3.2-.5.2-.6.2s0,0,0,0c0,0-.1-.1-.1-.1,0-.5,1.4-1.5,2.3-2.1,0,0,0-.1,0-.2,0,0,0-.1-.1-.1-.4,0-.8-.1-1.2-.1-1.1,0-1.7.4-2.1.7-.2.1-.3.2-.4.2h0Z" fill="#9b978f"/>
                </g>
              </g>
              <g>
                <path d="M383.6,418.8s0,0,0,0c0,0-.1.2-.2.1,0,0-1.4-.3-3.1.6,0,0-.2,0-.2,0,0,0,0-.2,0-.2,1.8-.9,3.3-.6,3.3-.6,0,0,.1.1.1.2Z" fill="#fff"/>
                <path d="M382.9,418.5c-.6,0-1.6.1-2.7.6,0,0-.1.1,0,.2,0,0,0,0,.2,0s0,0,0,0c1.1-.5,2-.6,2.6-.6.3,0,.5,0,.6,0,0,0,0,0,0,0,0,0,.2,0,.2-.1,0,0,0,0,0,0,0,0,0-.2-.1-.2,0,0-.3,0-.6,0h0Z" fill="#9b978f"/>
              </g>
              <g>
                <path d="M383.6,417.8c0,0,0,.2-.2.2-1.2,0-2.1.2-2.1.2,0,0-.2,0-.2-.1,0,0,0-.2.1-.2,0,0,.9-.3,2.2-.2,0,0,.2,0,.2.2,0,0,0,0,0,0Z" fill="#fff"/>
                <path d="M383,417.6c-1.1,0-1.8.3-1.8.3,0,0-.1.1-.1.2,0,0,0,.1.2.1s0,0,0,0c0,0,.7-.2,1.7-.2s.3,0,.4,0c0,0,0,0,0,0,0,0,.2,0,.2-.2,0,0,0,0,0,0,0,0,0-.2-.2-.2-.1,0-.3,0-.4,0h0Z" fill="#9b978f"/>
              </g>
              <g>
                <rect x="389.3" y="418.7" width=".3" height="4.5" transform="translate(-124.3 675.6) rotate(-73.6)" fill="#fff"/>
                <polygon points="387.4 420.1 387.3 420.4 391.6 421.7 391.7 421.4 387.4 420.1 387.4 420.1" fill="#9b978f"/>
              </g>
              <g>
                <rect x="384.6" y="423.6" width="2.2" height=".5" transform="translate(-169.5 281.7) rotate(-33.3)" fill="#fff"/>
                <polygon points="386.5 423.1 384.7 424.3 384.9 424.7 386.8 423.5 386.5 423.1 386.5 423.1" fill="#9b978f"/>
              </g>
            </g>
            <g id="room_names">
              <text transform="translate(739.93 350.01)" fill="#3e5665" font-family="fredoka, sans-serif" font-size="14"><tspan x="0" y="0">Primary</tspan><tspan x="-4.29" y="14">Bedroom</tspan></text>
              <text transform="translate(793.56 444.17)" fill="#3e5665" font-family="fredoka, sans-serif" font-size="14"><tspan x="0" y="0">Primary </tspan><tspan x="-4.29" y="14">Bathroom</tspan></text>
              <text transform="translate(851.02 618.61)" fill="#3e5665" font-family="fredoka, sans-serif" font-size="9"><tspan x="0" y="0">Walk-in</tspan><tspan x="2.25" y="10">Closet</tspan></text>
              <text transform="translate(814.3 686.77)" fill="#3e5665" font-family="fredoka, sans-serif" font-size="14"><tspan x="0" y="0">2-Car Garage</tspan></text>
              <text transform="translate(496.9 885.77)" fill="#3e5665" font-family="fredoka, sans-serif" font-size="14"><tspan x="0" y="0">Study</tspan></text>
              <text transform="translate(274.42 997.31)" fill="#3e5665" font-family="fredoka, sans-serif" font-size="14"><tspan x="0" y="0">Sideturn Garage</tspan></text>
              <text transform="translate(305.95 815.34)" fill="#3e5665" font-family="fredoka, sans-serif" font-size="14"><tspan x="0" y="0">Bedroom 3</tspan></text>
              <text transform="translate(291.17 642.69)" fill="#3e5665" font-family="fredoka, sans-serif" font-size="14"><tspan x="0" y="0">Bedroom 2</tspan></text>
              <text transform="translate(272.33 711.82)" fill="#3e5665" font-family="fredoka, sans-serif" font-size="9"><tspan x="0" y="0">Walk-in</tspan><tspan x="2.25" y="10">Closet</tspan></text>
              <text transform="translate(513.94 524.46)" fill="#3e5665" font-family="fredoka, sans-serif" font-size="9"><tspan x="0" y="0">Walk-in</tspan><tspan x="2.25" y="10">Closet</tspan></text>
              <text transform="translate(417.42 625.75)" fill="#3e5665" font-family="fredoka, sans-serif" font-size="14"><tspan x="0" y="0">Laundry</tspan></text>
              <text transform="translate(520.8 693.1) rotate(-90)" fill="#3e5665" font-family="fredoka, sans-serif" font-size="14"><tspan x="0" y="0">Bathroom 2</tspan></text>
              <text transform="translate(421.58 563.48)" fill="#3e5665" font-family="fredoka, sans-serif" font-size="9"><tspan x="0" y="0">Pantry</tspan></text>
              <text transform="translate(298 466.31)" fill="#3e5665" font-family="fredoka, sans-serif" font-size="14"><tspan x="0" y="0">Gourmet Kitchen</tspan></text>
              <text transform="translate(341.3 141.62)" fill="#3e5665" font-family="fredoka, sans-serif" font-size="14"><tspan x="0" y="0">Covered Patio</tspan></text>
              <text transform="translate(543.63 294.94)" fill="#3e5665" font-family="fredoka, sans-serif" font-size="14"><tspan x="0" y="0">Great Room</tspan></text>
              <text transform="translate(631.51 629.57)" fill="#3e5665" font-family="fredoka, sans-serif" font-size="9"><tspan x="0" y="0">Down</tspan></text>
              <text transform="translate(599.23 735.54)" fill="#3e5665" font-family="fredoka, sans-serif" font-size="9"><tspan x="0" y="0">Entry</tspan></text>
              <text transform="translate(580.97 894.36)" fill="#3e5665" font-family="fredoka, sans-serif" font-size="9"><tspan x="0" y="0">Covered Entry</tspan></text>
            </g>
            <PantryHotspotBase/>
          </g>

          {/* OPTION: Extended Bedroom*/}
          <g id="extendedBed" data-option="extendedBed" style={{ display: active.extendedBed ? "block" : "none" }} fill="#CC0001">
            <g id="extended-br2">
              <rect x="234.15" y="516.87" width="6.87" height="57" fill="#3e5665"/>
              <path d="M240.02,574.4v51.54h-5.88v-51.54h5.88M241.02,573.4h-7.88v53.54h7.88v-53.54h0Z" fill="#3e5665"/>
              <rect x="234.15" y="626.93" width="6.87" height="57.29" fill="#3e5665"/>
              <rect x="238.74" y="677.35" width="10.57" height="6.87" fill="#3e5665"/>
              <rect x="238.34" y="516.87" width="11.65" height="6.87" fill="#3e5665"/>
              <rect x="241.02" y="523.8" width="157.54" height="153.66" fill="#f3f3f3"/>
              <line x1="238.16" y1="574.35" x2="238.16" y2="626.32" fill="none" stroke="#3e5665" stroke-miterlimit="10"/>
              <g>
                <rect x="391.28" y="643.7" width="2.61" height="34.4" fill="none" stroke="#3e5665" stroke-miterlimit="10"/>
                <path d="M391.28,643.7s-30.69-.42-30.69,33.77" fill="none" stroke="#3e5665" stroke-miterlimit="10" stroke-width=".5"/>
              </g>
              <text transform="translate(251.84 658.94) rotate(-90)" fill="#3e5665" font-family="fredoka, sans-serif" font-size="8.48"><tspan x="0" y="0">Optional Bedroom Extension</tspan></text>
              <text transform="translate(290.63 636.14)" fill="#3e5665" font-family="fredoka, sans-serif" font-size="14"><tspan x="0" y="0">Bedroom 2</tspan></text>
              <g id="Bedroom_2" filter="url(#ds-soft)">
                <g>
                  <path d="M301.66,530.15h50.9c2.32,0,4.2,1.88,4.2,4.2v87.08c0,.44-.35.79-.79.79h-57.48c-.57,0-1.04-.47-1.04-1.04v-86.83c0-2.32,1.88-4.2,4.2-4.2Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M356.04,622.44h-57.61c-.66,0-1.2-.5-1.2-1.12v-87.51c0-2.14,1.85-3.88,4.13-3.88h51.51c2.28,0,4.13,1.74,4.13,3.88v87.72c0,.5-.43.91-.97.91ZM301.36,530.37c-2.02,0-3.66,1.54-3.66,3.44v87.51c0,.38.33.69.73.69h57.61c.28,0,.5-.21.5-.47v-87.72c0-1.9-1.64-3.44-3.66-3.44h-51.51Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <rect x="295.55" y="526.27" width="62.88" height="8.13" rx="2.63" ry="2.63" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M356,534.62h-58.01c-1.47,0-2.67-1.12-2.67-2.51v-3.56c0-1.38,1.2-2.51,2.67-2.51h58.01c1.47,0,2.67,1.12,2.67,2.51v3.56c0,1.38-1.2,2.51-2.67,2.51ZM297.99,526.48c-1.21,0-2.2.93-2.2,2.07v3.56c0,1.14.99,2.07,2.2,2.07h58.01c1.21,0,2.2-.93,2.2-2.07v-3.56c0-1.14-.99-2.07-2.2-2.07h-58.01Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M296.78,572.38c-.33,4.15-.82,29.04-.33,32.48.49,3.43-1.64,14.02.16,13.88,1.8-.14,25.23,1.29,30.64,1.86,5.41.57,17.04,1.86,20.64,2.58,3.6.72,9.67.43,9.99-.72.33-1.14.16-48.21-.49-50.93-.66-2.72-60.62.86-60.62.86Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M352.48,623.77c-1.64,0-3.34-.14-4.63-.4-3.99-.79-17.88-2.28-20.62-2.57-5.41-.57-28.84-1.99-30.59-1.86-.19.02-.36-.05-.5-.17-.72-.67-.54-3.29-.17-7.53.22-2.46.44-5.01.25-6.36-.5-3.47,0-28.32.33-32.52v-.19s.22-.01.22-.01c.15,0,15.17-.9,30.07-1.45,30.34-1.12,30.67.25,30.79.76.52,2.14.97,49.36.49,51.04-.25.87-2.86,1.27-5.63,1.27ZM297,618.5c3.62,0,24.91,1.3,30.27,1.87,2.75.29,16.66,1.78,20.66,2.58,3.91.78,9.47.31,9.72-.56.15-.57.2-11.95.11-24.86-.08-11.66-.28-24.6-.61-25.97-.12-.36-2.66-1.44-30.41-.42-13.93.51-27.92,1.33-29.76,1.43-.33,4.7-.8,28.84-.32,32.24.2,1.4-.03,3.97-.25,6.46-.27,3.1-.58,6.6.03,7.18.05.05.09.05.13.05.09,0,.23-.01.41-.01Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M358.44,573.26c-.5.51-12.29-1.04-21.49-.99-18.96.11-39.84.79-41.4.49-1.2-.23-1.13-3.87-1.17-7.31-.04-3.21-.28-6.21.7-7.11,2.05-1.86,60.45-1.9,62.89.59,1.08,1.1.95,3.9,1.06,6.62.14,3.43.27,6.83-.59,7.7Z" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M357.56,573.58c-.94,0-2.62-.12-5.63-.35-4.23-.32-10.02-.76-14.98-.74-8.81.05-18.08.23-25.54.37-8.74.17-15.05.28-15.91.12-1.28-.24-1.31-3.2-1.35-6.62v-.9c-.02-.47-.03-.93-.04-1.38-.06-2.82-.12-5.05.8-5.89,1.49-1.35,27.34-1.66,44.03-1.2,8.17.22,18.12.72,19.19,1.81.96.98,1.02,3.15,1.08,5.44.01.44.02.88.04,1.31.14,3.56.28,6.91-.65,7.86h0c-.11.11-.4.17-1.05.17ZM337.43,572.05c4.87,0,10.44.43,14.54.74,3.04.23,5.92.46,6.31.3.78-.84.64-4.39.51-7.53-.02-.44-.03-.88-.04-1.32-.06-2.21-.11-4.3-.95-5.16-.27-.28-2.43-1.22-18.86-1.66-19.28-.53-42.56.05-43.7,1.08-.77.7-.72,3.06-.66,5.57.01.45.02.92.03,1.38v.9c.04,2.68.07,6.03.99,6.2.81.15,7.43.03,15.81-.13,7.46-.14,16.73-.32,25.54-.37.16,0,.32,0,.48,0Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M305.95,537.98c-1.87,3.26-.13,13.68,0,15.31.57,6.99,41.29,3.26,42.6,1.15,1.12-1.82,1.31-17.17-1.15-17.88-1.22-.35-11.67-1.18-21.45-1.06-9.96.12-19.26,1.19-20,2.49Z" fill="#f5f3ef" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M323.1,557.58c-4.62,0-8.98-.27-12.19-.96-3.32-.71-5.07-1.83-5.19-3.31-.02-.25-.08-.69-.15-1.28-.43-3.39-1.44-11.32.18-14.15.88-1.55,11.07-2.5,20.2-2.61,9.72-.12,20.25.7,21.52,1.07.4.12.74.51,1.02,1.19,1.52,3.65,1.25,15.41.26,17.01-.8,1.3-14.05,3.04-25.65,3.04ZM327.88,535.69c-.64,0-1.29,0-1.93.01-11.11.13-19.2,1.34-19.8,2.38h0c-1.55,2.71-.55,10.54-.13,13.89.08.6.13,1.05.15,1.3.11,1.27,1.73,2.26,4.83,2.92,11.69,2.5,36.49-.5,37.33-1.87.96-1.56,1.2-13.05-.29-16.63-.28-.68-.55-.88-.73-.93-1.17-.34-10.36-1.06-19.45-1.06Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
              </g>
              <g>
                <rect x="290.71" y="655.83" width="65" height="19.47" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                <path d="M356.06,675.49h-65.7s0-19.84,0-19.84h65.7s0,19.84,0,19.84ZM291.05,675.13h64.3s0-19.1,0-19.1h-64.3s0,19.1,0,19.1Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
              </g>
              <g>
                <rect x="369.26" y="521.78" width="21.84" height="31.12" transform="translate(-157.15 917.52) rotate(-90)" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                <path d="M396.04,526.3v22.07s-31.71,0-31.71,0v-22.07s31.71,0,31.71,0ZM395.46,548.14v-21.6s-30.53,0-30.53,0v21.6s30.53,0,30.53,0Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
              </g>
              <g>
                <rect x="264" y="522.54" width="21.84" height="31.12" transform="translate(-263.18 813.01) rotate(-90)" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                <path d="M290.77,527.06v22.07s-31.71,0-31.71,0v-22.07s31.71,0,31.71,0ZM290.19,548.9v-21.6s-30.53,0-30.53,0v21.6s30.53,0,30.53,0Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
              </g>
            </g>
          </g>
          {/* OPTION: Powder Bath */}
          <g id="optionalPowder" data-option="optionalPowder" style={{ display: active.optionalPowder ? "block" : "none" }} fill="#CC0001">
            <g id="pdr-opt">
              <polygon points="568.5 516.9 566.8 516.9 565.4 525.7 565.4 532.6 570.3 532.6 570.3 563.1 565.4 563.1 565.4 566.8 494 571.5 493.9 596.5 402.7 596.5 402.7 523.6 494 523.6 495.5 516.9 312.2 516.9 312.2 485.8 350.4 485.8 350.4 478 396.6 478 396.6 485.8 568.5 485.8 568.5 516.9" fill="#f2f2f2"/>
              <rect x="444.2" y="473.4" width="6.9" height="93.9" transform="translate(-72.6 968.1) rotate(-90)" fill="#425563"/>
              <rect x="499.7" y="421.4" width="5.1" height="134.7" transform="translate(13.5 991) rotate(-90)" fill="#425563"/>
              <rect x="423.5" y="502.7" width="28" height="5.1" transform="translate(-67.9 942.8) rotate(-90)" fill="#425563"/>
              <rect x="474.9" y="506.3" width="37.1" height="5.1" transform="translate(-15.5 1002.4) rotate(-90)" fill="#425563"/>
              <rect x="475" y="574.1" width="36.2" height="4.5" transform="translate(-83.2 1069.4) rotate(-90)" fill="#425563"/>
              <rect x="549.3" y="506" width="34.4" height="5.1" transform="translate(58 1075.1) rotate(-90)" fill="#425563"/>
              <rect x="494.7" y="515" width="4.7" height="11.5" transform="translate(-23.7 1017.8) rotate(-90)" fill="#425563"/>
              <rect x="559.7" y="515" width="4.7" height="11.5" transform="translate(41.2 1082.7) rotate(-90)" fill="#425563"/>
              <rect x="528" y="529.8" width="4.7" height="78.6" transform="translate(-38.8 1099.5) rotate(-90)" fill="#425563"/>
              <rect x="515.2" y="506.4" width="1.4" height="27.3" transform="translate(-4.2 1035.9) rotate(-90)" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <rect x="540.4" y="508.3" width="1.9" height="26.8" transform="translate(19.7 1063.1) rotate(-90)" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <rect x="474.8" y="512.6" width="1.9" height="31.8" transform="translate(-52.6 1004.3) rotate(-90)" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <rect x="314.5" y="458.5" width="2.8" height="27.2" transform="translate(184.9 1024.8) rotate(-132.9)" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <line x1="495.9" y1="502.3" x2="566.5" y2="502.3" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <ellipse cx="470.6" cy="583.9" rx="10.1" ry="8.9" fill="none" stroke="#425563" strokeMiterlimit="10"/>
              <path d="M483.3,583.9c0,3.4-1.8,9.2-4.4,11.2s-5.1,0-8.2,0-6,1.3-8.1-.2c-3.1-2-4.5-7.4-4.5-11,0-6.2,5.7-11.2,12.6-11.2s12.6,5,12.6,11.2Z" fill="none" stroke="#425563" strokeMiterlimit="10"/>
              <rect x="254.1" y="458.8" width="30.8" height="4.8" fill="#425563"/>
              <rect x="281.8" y="460.3" width="6.2" height="4.8" transform="translate(410.6 -65.9) rotate(45)" fill="#425563"/>
              <rect x="304.9" y="483.4" width="6.2" height="4.8" transform="translate(433.7 -75.5) rotate(45)" fill="#425563"/>
              <rect x="292.3" y="500.8" width="34.9" height="4.9" transform="translate(812.9 193.5) rotate(90)" fill="#425563"/>
              <polygon points="290.4 518.4 254.1 518.4 254.1 463.6 282.4 463.6 304.1 485.3 307.3 488.4 307.3 518.4 290.4 518.4" fill="#f2f2f2"/>
              <g>
                <line x1="440" y1="491.3" x2="441.4" y2="492" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <line x1="444.2" y1="493.4" x2="488.1" y2="515.5" fill="none" stroke="#425563" strokeDasharray="3.2 3.2" strokeMiterlimit="10"/>
                <line x1="489.5" y1="516.2" x2="490.9" y2="516.9" fill="none" stroke="#425563" strokeMiterlimit="10"/>
              </g>
              <g>
                <line x1="491" y1="491.3" x2="489.7" y2="492" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <line x1="487.1" y1="493.2" x2="442.6" y2="515.4" fill="none" stroke="#425563" strokeDasharray="2.8 2.8" strokeMiterlimit="10"/>
                <line x1="441.4" y1="516" x2="440" y2="516.7" fill="none" stroke="#425563" strokeMiterlimit="10"/>
              </g>
              <rect x="312.2" y="485.8" width="38.3" height="31.1" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <rect x="396.6" y="485.8" width="38.3" height="31.1" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <rect x="350.4" y="478" width="46.2" height="38.8" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <g id="toilet3" data-name="toilet">
                <path d="M420.6,585l-.6-1.8c-.2-1-.6-2-1.3-2.7-.3-.4-.7-.8-.9-1.3-1.2-2.2-1.7-4.4-1.7-6.8,0-2.4.7-4.7,1.9-6.7,1.2-2,2.9-3.7,5-4.9,1.3-.5,2.6-.5,3.9,0,.5.2.9.5,1.3.7,2,1.5,3.5,3.4,4.5,5.6,1,2.2,1.4,4.4,1.2,6.8-.2,2.4-1,4.6-2.4,6.6h-.1c-.6.8-1,1.6-1.3,2.6l-.7,1.9h4.5c.4,0,.8.1,1.2.4.2.2.4.5.5.9l.4,7c0,.5-.2.9-.5,1.4-.2.3-.5.5-.9.6h-18.8c-.5-.1-.9-.3-1.2-.6-.3-.4-.4-.9-.4-1.4l.4-7c0-.4.2-.7.5-.9.3-.3.7-.4,1.2-.4h4.4s8.7,0,8.7,0" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <path d="M426.3,562c-.9-.3-1.8-.3-2.7,0-2,1.1-3.5,2.6-4.5,4.5-1,1.7-1.6,3.7-1.7,5.9,0,2.1.5,4.1,1.6,6.1.7,1.2,1.5,2.2,2.5,3.1.1.1.3.2.6.2h5.7c.2,0,.4,0,.6-.2,1.6-1.5,2.7-3.2,3.4-5.2.7-2,.8-4.1.4-6.1-.3-2.1-1.3-4-2.7-5.7-.9-1-2-1.9-3.1-2.6Z" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <line x1="414.5" y1="586.3" x2="435.5" y2="586.3" fill="none" stroke="#425563" strokeMiterlimit="10"/>
              </g>
              <path d="M459.9,529.4s-2,28.8,31,28.8" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <polygon points="307 500.8 307 518.4 254.1 518.4 254.1 463.6 271.7 463.6 271.7 500.8 307 500.8" fill="#dde7ed" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <g>
                <path d="M418,539.9c-.4,0-.8,0-1.1-.2s-.7-.4-.9-.6c-.3-.3-.5-.6-.6-1-.2-.4-.2-.7-.2-1.2s0-.8.2-1.2c.1-.4.4-.7.6-1,.3-.3.6-.5.9-.7.3-.2.7-.2,1.1-.2s.8,0,1.1.2.7.4.9.6c.3.3.5.6.6,1,.2.4.2.8.2,1.2s0,.8-.2,1.2c-.1.4-.4.7-.6,1-.3.3-.6.5-.9.7-.3.2-.7.2-1.1.2ZM418,538.8c.3,0,.5,0,.7-.2s.4-.2.6-.4.3-.4.4-.6c0-.2.1-.5.1-.8s0-.5-.1-.8-.2-.5-.4-.6-.4-.3-.6-.4-.5-.2-.7-.2-.5,0-.7.2-.4.2-.6.4c-.2.2-.3.4-.4.6s-.1.5-.1.8,0,.5.1.8c0,.2.2.5.4.6s.4.3.6.4c.2.1.5.2.7.2Z" fill="#425563"/>
                <path d="M422,541.5c-.2,0-.3,0-.3,0,0,0-.1-.1-.1-.2,0,0,0-.2,0-.3v-4.9c0,0,0-.2,0-.3,0,0,0-.1.1-.2,0,0,.2,0,.3,0s.3,0,.3,0c0,0,.1.1.2.2v5.1c0,0,0,.2,0,.3,0,0,0,.1-.1.2,0,0-.2,0-.3,0ZM423.7,539.7c-.3,0-.5,0-.7-.2-.2-.1-.4-.3-.6-.4-.1-.2-.3-.4-.3-.7,0-.2-.1-.5-.1-.8,0-.3,0-.6.1-.8s.2-.5.3-.7.3-.3.5-.4.5-.2.7-.2.5,0,.7.2c.2.1.4.3.6.4.2.2.3.4.4.7.1.3.2.5.2.8s0,.6-.2.8c-.1.2-.2.5-.4.6-.2.2-.4.3-.6.4-.2.1-.5.2-.7.2ZM423.5,538.8c.2,0,.4,0,.5-.1.2,0,.3-.2.4-.4,0-.2.1-.4.1-.6s0-.4-.1-.6-.2-.3-.4-.4c-.2,0-.3-.1-.5-.1s-.4,0-.5.1c-.2,0-.3.2-.4.4,0,.2-.1.4-.1.6s0,.4.1.6c0,.2.2.3.4.4.2,0,.3.1.5.1Z" fill="#425563"/>
                <path d="M426.4,535.7h.9s1.2,0,1.2,0c0,0,.2,0,.3,0,0,0,.1,0,.2.1,0,0,0,.2,0,.3s0,.3,0,.3c0,0-.1.1-.2.1,0,0-.2,0-.3,0h-1.1s-.9,0-.9,0c-.1,0-.2,0-.3-.1s0-.2,0-.4,0-.3,0-.4c0,0,.2-.1.3-.1ZM428.3,539.8c-.3,0-.5,0-.7,0s-.4-.1-.5-.3c-.1-.1-.2-.3-.3-.5,0-.2,0-.4,0-.7v-3.6c0,0,0-.2,0-.3s0-.1.1-.2c0,0,.2,0,.3,0s.3,0,.3,0,.1.1.1.2c0,0,0,.2,0,.3v3.6c0,.1,0,.2,0,.3,0,0,0,.1,0,.2,0,0,0,0,.2,0,0,0,.2,0,.3,0s.2,0,.3,0c0,0,.1,0,.2.1,0,0,0,.2,0,.3s0,.3,0,.3c0,0-.1.1-.2.1,0,0-.2,0-.2,0Z" fill="#425563"/>
                <path d="M430.2,534.8c-.2,0-.3,0-.4,0,0,0-.1-.1-.1-.2,0,0,0-.2,0-.3s0-.2,0-.3,0-.1.1-.2c0,0,.2,0,.4,0s.3,0,.4,0c0,0,.1.1.1.2,0,0,0,.2,0,.3s0,.2,0,.3c0,0,0,.1-.1.2,0,0-.2,0-.4,0ZM430.2,539.8c-.2,0-.3,0-.3,0,0,0-.1-.1-.1-.2,0,0,0-.2,0-.3v-3.1c0,0,0-.2,0-.3,0,0,0-.1.1-.2,0,0,.2,0,.3,0s.3,0,.3,0,.1.1.1.2,0,.2,0,.3v3.1c0,0,0,.2,0,.3s0,.1-.1.2c0,0-.2,0-.4,0Z" fill="#425563"/>
                <path d="M433.5,539.9c-.3,0-.5,0-.8-.2-.3-.1-.5-.3-.7-.4-.2-.2-.4-.4-.5-.7-.1-.3-.2-.5-.2-.9s0-.6.2-.8c.1-.3.3-.5.5-.7.2-.2.4-.4.7-.5.3-.1.5-.2.8-.2s.8,0,1.1.3c.3.2.6.4.8.8.2.3.3.7.3,1.1s0,.6-.2.9-.3.5-.5.7c-.2.2-.4.3-.7.4s-.5.2-.8.2ZM433.5,538.9c.2,0,.4,0,.5-.1.2,0,.3-.2.4-.4.1-.2.2-.4.2-.6s0-.4-.1-.6c0-.2-.2-.3-.4-.4s-.4-.1-.6-.1-.4,0-.6.1-.3.2-.4.4c0,.2-.1.4-.1.6s0,.4.2.6c.1.2.2.3.4.4.2,0,.4.1.5.1Z" fill="#425563"/>
                <path d="M436.8,539.8c-.2,0-.3,0-.3,0,0,0-.1-.1-.1-.2,0,0,0-.2,0-.3v-3.2c0,0,0-.2,0-.2,0,0,0-.1.1-.2,0,0,.2,0,.3,0s.2,0,.3,0c0,0,.1,0,.1.1s0,.1,0,.2c0,0,0,0,0,.1v.3c0,0,0-.2.1-.3,0,0,.2-.2.3-.2.1,0,.2-.1.4-.2s.3,0,.4,0c.3,0,.5,0,.7.1.2,0,.4.2.5.4.1.2.3.4.3.6,0,.2.1.5.1.8v1.7c0,0,0,.2,0,.3,0,0,0,.1-.1.2,0,0-.2,0-.3,0s-.3,0-.4,0c0,0-.1-.1-.1-.2,0,0,0-.2,0-.3v-1.7c0-.2,0-.4-.1-.5s-.2-.3-.3-.3c-.1,0-.3-.1-.5-.1s-.4,0-.5.1c-.1,0-.3.2-.3.3,0,.1-.1.3-.1.5v1.7c0,0,0,.2,0,.3,0,0,0,.1-.1.2,0,0-.2,0-.4,0Z" fill="#425563"/>
                <path d="M444.6,539.8c-.2,0-.3,0-.4,0s-.1-.1-.1-.3v-.3c0,0,0,.2-.2.3s-.2.2-.4.3-.4.1-.6.1-.5,0-.8-.2-.4-.3-.6-.5c-.2-.2-.3-.4-.4-.7-.1-.3-.2-.5-.2-.8s0-.5.2-.8c.1-.2.2-.5.4-.7s.4-.3.6-.5c.2-.1.5-.2.7-.2s.4,0,.6,0c.2,0,.3.1.4.2.1,0,.2.2.3.3v-.2c0-.1,0-.2,0-.3,0,0,.2,0,.4,0s.3,0,.3,0c0,0,.1.1.1.2,0,0,0,.2,0,.3v3.1c0,0,0,.2,0,.3,0,0,0,.1-.1.2s-.2,0-.3,0ZM443,538.8c.2,0,.4,0,.5-.1s.3-.2.4-.4c0-.2.1-.4.1-.6s0-.4-.1-.6c0-.2-.2-.3-.4-.4-.2,0-.3-.1-.5-.1s-.4,0-.6.1c-.2,0-.3.2-.4.4,0,.2-.1.4-.1.6s0,.4.1.6.2.3.4.4c.2,0,.4.1.6.1Z" fill="#425563"/>
                <path d="M447.4,539.8c-.2,0-.4,0-.6,0-.2,0-.3,0-.4-.1-.1,0-.2-.2-.3-.3,0-.1-.1-.3-.2-.4,0-.2,0-.4,0-.6v-4.1c0-.1,0-.2,0-.3s0-.1.1-.2c0,0,.2,0,.3,0s.3,0,.3,0c0,0,.1.1.1.2,0,0,0,.2,0,.3v4c0,.1,0,.2,0,.3,0,0,0,.1,0,.2,0,0,0,0,.1,0,0,0,.1,0,.2,0s.1,0,.2,0c0,0,.1,0,.1.1,0,0,0,.2,0,.3s0,.3,0,.3c0,0,0,.1-.1.1,0,0-.1,0-.2,0Z" fill="#425563"/>
                <path d="M408.8,548.3c-.2,0-.3,0-.4,0,0,0-.1-.1-.1-.2,0,0,0-.2,0-.3v-4.9c0,0,0-.2,0-.3s0-.1.1-.2c0,0,.2,0,.3,0h1.8c.3,0,.5,0,.7.1s.4.2.6.4c.2.2.3.4.5.6.1.2.2.5.2.9s0,.6-.2.9c-.1.2-.3.5-.5.6-.2.2-.4.3-.6.4s-.5.1-.7.1h-1.3v1.4c0,0,0,.2,0,.3,0,0,0,.1-.1.2,0,0-.2,0-.4,0ZM409.3,545.3h1.3c.2,0,.3,0,.5-.1s.3-.2.4-.3c0-.1.1-.3.1-.5s0-.4-.1-.5c0-.1-.2-.3-.3-.3s-.3-.1-.5-.1h-1.3v1.9Z" fill="#425563"/>
                <path d="M415.2,548.3c-.3,0-.5,0-.8-.2-.3-.1-.5-.3-.7-.4-.2-.2-.4-.4-.5-.7-.1-.3-.2-.5-.2-.9s0-.6.2-.8c.1-.3.3-.5.5-.7.2-.2.4-.4.7-.5.3-.1.5-.2.8-.2s.8,0,1.1.3c.3.2.6.4.8.8.2.3.3.7.3,1.1s0,.6-.2.9-.3.5-.5.7c-.2.2-.4.3-.7.4s-.5.2-.8.2ZM415.2,547.3c.2,0,.4,0,.5-.1.2,0,.3-.2.4-.4.1-.2.2-.4.2-.6s0-.4-.1-.6c0-.2-.2-.3-.4-.4s-.4-.1-.6-.1-.4,0-.6.1-.3.2-.4.4c0,.2-.1.4-.1.6s0,.4.2.6c.1.2.2.3.4.4.2,0,.4.1.5.1Z" fill="#425563"/>
                <path d="M419.6,548.3c-.1,0-.2,0-.3,0s-.1,0-.1-.2c0,0,0-.1,0-.2l-1.3-3.1c0-.1,0-.2,0-.3s0-.1,0-.2.1-.1.3-.1c.2,0,.3,0,.4,0s.2.1.2.3l.8,2.1.7-2c0,0,0-.1,0-.2,0,0,0-.1.1-.2,0,0,.2,0,.3,0s.2,0,.3,0c0,0,.1,0,.2.2,0,0,0,.1,0,.2l.7,2.1.8-2.1c0-.2.2-.3.3-.3.1,0,.2,0,.4,0,.2,0,.3.2.3.2,0,0,0,.2,0,.4l-1.2,3.1c0,0,0,.1,0,.2,0,0,0,.1-.1.2s-.2,0-.3,0-.2,0-.3,0c0,0-.1,0-.1-.1,0,0,0-.1,0-.2l-.7-2.1-.7,2.1c0,0,0,.2,0,.2,0,0,0,.1-.1.1,0,0-.2,0-.3,0Z" fill="#425563"/>
                <path d="M426.2,548.3c-.3,0-.5,0-.7-.2-.2-.1-.4-.3-.6-.4-.2-.2-.3-.4-.4-.7-.1-.3-.2-.5-.2-.8s0-.5.2-.8c.1-.3.2-.5.4-.7.2-.2.4-.3.6-.4.2-.1.5-.2.7-.2s.5,0,.7.2.4.3.5.4c.1.2.3.4.3.7,0,.3.1.5.1.8,0,.3,0,.6-.1.8,0,.3-.2.5-.3.7-.1.2-.3.3-.5.5s-.5.2-.7.2ZM426.4,547.3c.2,0,.4,0,.5-.1.2,0,.3-.2.4-.4,0-.2.1-.3.1-.6s0-.4-.1-.6-.2-.3-.4-.4c-.2,0-.3-.1-.5-.1s-.4,0-.5.1c-.2,0-.3.2-.4.4,0,.2-.1.4-.1.6s0,.4.1.6c0,.2.2.3.4.4.2,0,.3.1.5.1ZM427.9,548.3c-.2,0-.3,0-.4,0s-.1-.1-.1-.3v-5.2c0,0,0-.2,0-.3,0,0,0-.1.1-.2,0,0,.2,0,.3,0s.3,0,.3,0c0,0,.1.1.1.2,0,0,0,.2,0,.3v5c0,0,0,.2,0,.3,0,0,0,.1-.1.2,0,0-.2,0-.3,0Z" fill="#425563"/>
                <path d="M431.3,548.3c-.4,0-.7,0-1-.2s-.5-.3-.7-.5c-.2-.2-.3-.4-.4-.7s-.1-.5-.1-.8c0-.4,0-.8.3-1.1s.4-.6.8-.7.7-.3,1.1-.3.6,0,.8.1c.2,0,.4.2.6.4s.3.3.4.5.1.4.1.5c0,.3,0,.5-.2.7s-.3.2-.5.2h-2.2c0,.2,0,.4.2.5.1.1.3.2.4.3s.4.1.5.1.3,0,.4,0c.1,0,.2,0,.3,0s.1,0,.2,0c0,0,.1,0,.2,0,0,0,0,0,.1,0,0,0,.1,0,.2,0,0,0,.1,0,.2.2,0,0,0,.1,0,.2,0,0,0,0,0,.1,0,.1,0,.2-.2.3-.1.1-.3.2-.6.2-.2,0-.5,0-.9,0ZM430.2,545.9h1.7c0,0,.2,0,.2,0,0,0,0,0,0-.2s0-.2-.1-.3-.2-.2-.3-.2c-.1,0-.3,0-.5,0s-.4,0-.6.1c-.2,0-.3.2-.4.3,0,.1-.1.3-.1.5Z" fill="#425563"/>
                <path d="M434.4,548.3c-.2,0-.3,0-.3,0,0,0-.1-.1-.1-.2,0,0,0-.2,0-.3v-3.1c0,0,0-.2,0-.3,0,0,0-.1.1-.2,0,0,.2,0,.3,0s.3,0,.3,0c0,0,.1,0,.1.2,0,0,0,.1,0,.2v.2s0,0,0-.2c0,0,.1-.1.2-.2,0,0,.2-.1.3-.2.1,0,.3,0,.4,0s.1,0,.2,0c0,0,.2,0,.2,0,0,0,.1,0,.2,0,0,0,.1,0,.1.1s0,.1,0,.2c0,.2,0,.3-.1.5,0,.1-.2.2-.3.2s-.1,0-.2,0c0,0,0,0,0,0s0,0-.1,0c0,0-.1,0-.2,0s-.2,0-.3,0c0,0-.2,0-.2.1,0,0-.1.1-.2.2,0,0,0,.2,0,.3v2.1c0,0,0,.2,0,.3,0,0,0,.1-.1.2,0,0-.2,0-.4,0Z" fill="#425563"/>
                <path d="M439.9,548.3c-.2,0-.3,0-.3,0,0,0-.1-.1-.1-.2,0,0,0-.2,0-.3v-4.8c0,0,0-.2,0-.3,0,0,0-.2.1-.2s.2,0,.3,0h2.2c.3,0,.6,0,.9.2.2.2.4.4.6.6.1.3.2.5.2.8s0,.3,0,.4c0,.1,0,.3-.1.4,0,.1-.1.2-.2.3.1.1.2.2.3.4s.2.3.2.5c0,.2,0,.3,0,.5,0,.3,0,.5-.1.7s-.2.4-.4.6-.4.3-.6.4c-.2,0-.4.1-.7.1h-2.3ZM440.5,547.3h1.7c.2,0,.3,0,.4,0,.1,0,.2-.2.3-.3,0-.1.1-.3.1-.5s0-.3,0-.4-.1-.2-.2-.2c0,0-.2,0-.2-.1,0,0-.2,0-.3,0,0,0-.2,0-.2,0h-.4c-.1,0-.3,0-.3-.1,0,0-.1-.2-.1-.3s0-.3.1-.3c0,0,.2,0,.3,0h.4c0,0,.2,0,.2,0,0,0,.2,0,.3,0,0,0,.1,0,.2-.2s0-.2,0-.4c0-.3,0-.4-.2-.6-.1-.1-.4-.2-.7-.2h-1.5v3.9Z" fill="#425563"/>
                <path d="M448.3,548.3c-.2,0-.3,0-.4,0s-.1-.1-.1-.3v-.3c0,0,0,.2-.2.3s-.2.2-.4.3-.4.1-.6.1-.5,0-.8-.2-.4-.3-.6-.5c-.2-.2-.3-.4-.4-.7-.1-.3-.2-.5-.2-.8s0-.5.2-.8c.1-.2.2-.5.4-.7s.4-.3.6-.5c.2-.1.5-.2.7-.2s.4,0,.6,0c.2,0,.3.1.4.2.1,0,.2.2.3.3v-.2c0-.1,0-.2,0-.3,0,0,.2,0,.4,0s.3,0,.3,0c0,0,.1.1.1.2,0,0,0,.2,0,.3v3.1c0,0,0,.2,0,.3,0,0,0,.1-.1.2s-.2,0-.3,0ZM446.7,547.3c.2,0,.4,0,.5-.1s.3-.2.4-.4c0-.2.1-.4.1-.6s0-.4-.1-.6c0-.2-.2-.3-.4-.4-.2,0-.3-.1-.5-.1s-.4,0-.6.1c-.2,0-.3.2-.4.4,0,.2-.1.4-.1.6s0,.4.1.6.2.3.4.4c.2,0,.4.1.6.1Z" fill="#425563"/>
                <path d="M449.8,544.2h.9s1.2,0,1.2,0c0,0,.2,0,.3,0,0,0,.1,0,.2.1,0,0,0,.2,0,.3s0,.3,0,.3c0,0-.1.1-.2.1,0,0-.2,0-.3,0h-1.1s-.9,0-.9,0c-.1,0-.2,0-.3-.1s0-.2,0-.4,0-.3,0-.4c0,0,.2-.1.3-.1ZM451.7,548.3c-.3,0-.5,0-.7,0s-.4-.1-.5-.3c-.1-.1-.2-.3-.3-.5,0-.2,0-.4,0-.7v-3.6c0,0,0-.2,0-.3s0-.1.1-.2c0,0,.2,0,.3,0s.3,0,.3,0,.1.1.1.2c0,0,0,.2,0,.3v3.6c0,.1,0,.2,0,.3,0,0,0,.1,0,.2,0,0,0,0,.2,0,0,0,.2,0,.3,0s.2,0,.3,0c0,0,.1,0,.2.1,0,0,0,.2,0,.3s0,.3,0,.3c0,0-.1.1-.2.1,0,0-.2,0-.2,0Z" fill="#425563"/>
                <path d="M453.4,548.3c-.2,0-.3,0-.3,0,0,0-.1-.1-.1-.2,0,0,0-.2,0-.3v-5.1c0,0,0-.2,0-.3,0,0,0-.1.1-.2,0,0,.2,0,.3,0s.3,0,.3,0c0,0,.1.1.1.2,0,0,0,.2,0,.3v1.9c.1-.1.3-.2.4-.4.2-.1.4-.2.6-.2s.7,0,.9.2c.3.2.5.4.6.7.2.3.2.6.2,1v1.7c0,0,0,.2,0,.2,0,0,0,.1-.1.2,0,0-.2,0-.4,0s-.3,0-.3,0c0,0-.1-.1-.1-.2,0,0,0-.2,0-.3v-1.7c0-.2,0-.4-.1-.5,0-.1-.2-.3-.3-.3s-.3-.1-.5-.1-.5,0-.7.2c-.2.2-.3.4-.3.6v1.8c0,0,0,.2,0,.3,0,0,0,.1-.1.2,0,0-.2,0-.4,0Z" fill="#425563"/>
              </g>
              <g>
                <path d="M275.5,493.9c-.2,0-.3,0-.4,0,0,0-.1-.1-.1-.2,0,0,0-.2,0-.3v-4.9c0,0,0-.2,0-.3s0-.1.1-.2c0,0,.2,0,.3,0h1.8c.3,0,.5,0,.7.1s.4.2.6.4c.2.2.3.4.5.6.1.2.2.5.2.9s0,.6-.2.9c-.1.2-.3.5-.5.6-.2.2-.4.3-.6.4s-.5.1-.7.1h-1.3v1.4c0,0,0,.2,0,.3,0,0,0,.1-.1.2,0,0-.2,0-.4,0ZM276,490.9h1.3c.2,0,.3,0,.5-.1s.3-.2.4-.3c0-.1.1-.3.1-.5s0-.4-.1-.5c0-.1-.2-.3-.3-.3s-.3-.1-.5-.1h-1.3v1.9Z" fill="#425563"/>
                <path d="M283.5,493.9c-.2,0-.3,0-.4,0s-.1-.1-.1-.3v-.3c0,0,0,.2-.2.3s-.2.2-.4.3-.4.1-.6.1-.5,0-.8-.2-.4-.3-.6-.5c-.2-.2-.3-.4-.4-.7-.1-.3-.2-.5-.2-.8s0-.5.2-.8c.1-.2.2-.5.4-.7s.4-.3.6-.5c.2-.1.5-.2.7-.2s.4,0,.6,0c.2,0,.3.1.4.2.1,0,.2.2.3.3v-.2c0-.1,0-.2,0-.3,0,0,.2,0,.4,0s.3,0,.3,0c0,0,.1.1.1.2,0,0,0,.2,0,.3v3.1c0,0,0,.2,0,.3,0,0,0,.1-.1.2s-.2,0-.3,0ZM281.9,492.9c.2,0,.4,0,.5-.1s.3-.2.4-.4c0-.2.1-.4.1-.6s0-.4-.1-.6c0-.2-.2-.3-.4-.4-.2,0-.3-.1-.5-.1s-.4,0-.6.1c-.2,0-.3.2-.4.4,0,.2-.1.4-.1.6s0,.4.1.6.2.3.4.4c.2,0,.4.1.6.1Z" fill="#425563"/>
                <path d="M285.3,493.9c-.2,0-.3,0-.3,0,0,0-.1-.1-.1-.2,0,0,0-.2,0-.3v-3.2c0,0,0-.2,0-.2,0,0,0-.1.1-.2,0,0,.2,0,.3,0s.2,0,.3,0c0,0,.1,0,.1.1s0,.1,0,.2c0,0,0,0,0,.1v.3c0,0,0-.2.1-.3,0,0,.2-.2.3-.2.1,0,.2-.1.4-.2s.3,0,.4,0c.3,0,.5,0,.7.1.2,0,.4.2.5.4.1.2.3.4.3.6,0,.2.1.5.1.8v1.7c0,0,0,.2,0,.3,0,0,0,.1-.1.2,0,0-.2,0-.3,0s-.3,0-.4,0c0,0-.1-.1-.1-.2,0,0,0-.2,0-.3v-1.7c0-.2,0-.4-.1-.5s-.2-.3-.3-.3c-.1,0-.3-.1-.5-.1s-.4,0-.5.1c-.1,0-.3.2-.3.3,0,.1-.1.3-.1.5v1.7c0,0,0,.2,0,.3,0,0,0,.1-.1.2,0,0-.2,0-.4,0Z" fill="#425563"/>
                <path d="M289.7,489.8h.9s1.2,0,1.2,0c0,0,.2,0,.3,0,0,0,.1,0,.2.1,0,0,0,.2,0,.3s0,.3,0,.3c0,0-.1.1-.2.1,0,0-.2,0-.3,0h-1.1s-.9,0-.9,0c-.1,0-.2,0-.3-.1s0-.2,0-.4,0-.3,0-.4c0,0,.2-.1.3-.1ZM291.6,493.9c-.3,0-.5,0-.7,0s-.4-.1-.5-.3c-.1-.1-.2-.3-.3-.5,0-.2,0-.4,0-.7v-3.6c0,0,0-.2,0-.3s0-.1.1-.2c0,0,.2,0,.3,0s.3,0,.3,0,.1.1.1.2c0,0,0,.2,0,.3v3.6c0,.1,0,.2,0,.3,0,0,0,.1,0,.2,0,0,0,0,.2,0,0,0,.2,0,.3,0s.2,0,.3,0c0,0,.1,0,.2.1,0,0,0,.2,0,.3s0,.3,0,.3c0,0-.1.1-.2.1,0,0-.2,0-.2,0Z" fill="#425563"/>
                <path d="M293.4,493.9c-.2,0-.3,0-.3,0,0,0-.1-.1-.1-.2,0,0,0-.2,0-.3v-3.1c0,0,0-.2,0-.3,0,0,0-.1.1-.2,0,0,.2,0,.3,0s.3,0,.3,0c0,0,.1,0,.1.2,0,0,0,.1,0,.2v.2s0,0,0-.2c0,0,.1-.1.2-.2,0,0,.2-.1.3-.2.1,0,.3,0,.4,0s.1,0,.2,0c0,0,.2,0,.2,0,0,0,.1,0,.2,0,0,0,.1,0,.1.1s0,.1,0,.2c0,.2,0,.3-.1.5,0,.1-.2.2-.3.2s-.1,0-.2,0c0,0,0,0,0,0s0,0-.1,0c0,0-.1,0-.2,0s-.2,0-.3,0c0,0-.2,0-.2.1,0,0-.1.1-.2.2,0,0,0,.2,0,.3v2.1c0,0,0,.2,0,.3,0,0,0,.1-.1.2,0,0-.2,0-.4,0Z" fill="#425563"/>
                <path d="M298.2,493.5l-2-3c0-.2-.1-.3-.1-.4,0-.1.1-.2.3-.3.2-.1.3-.1.4-.1,0,0,.2.1.3.3l1.6,2.4-.4,1.1ZM297.5,495.6c-.2,0-.3-.2-.3-.3,0,0,0-.2,0-.4l2.2-4.9c0-.2.2-.3.3-.3,0,0,.2,0,.4,0,.2,0,.3.2.3.3,0,0,0,.2,0,.4l-2.2,4.9c0,.2-.2.3-.2.3s-.2,0-.4,0Z" fill="#425563"/>
              </g>
            </g>
            <PantryHotspot/>
          </g>
          {/* OPTION: Master Bath Layout 2 */}
          <g id="masterBathTwo" data-option="masterBathTwo" style={{ display: active.masterBathTwo ? "block" : "none" }} fill="#CC0001">
            <g id="mba-2">
              <rect x="857.3" y="393.9" width="53.9" height="132.4" fill="#f2f2f2"/>
              <rect x="859.6" y="393.9" width="4.5" height="16.6" fill="#425563"/>
              <rect x="909.5" y="393.9" width="6.8" height="13.2" fill="#425563"/>
              <rect x="859.6" y="456.3" width="4.5" height="22.3" fill="#425563"/>
              <rect x="859.6" y="511.2" width="4.5" height="15.6" fill="#425563"/>
              <rect x="909.5" y="460.1" width="6.8" height="66.8" fill="#425563"/>
              <line x1="859.9" y1="410.5" x2="859.9" y2="456.3" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <line x1="859.9" y1="474.1" x2="859.9" y2="519.9" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <line x1="909.5" y1="514.3" x2="863.6" y2="514.3" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <line x1="909.5" y1="469.6" x2="863.6" y2="469.6" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <line x1="879.5" y1="470.9" x2="863.6" y2="470.9" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <line x1="861.2" y1="410.5" x2="861.2" y2="456.3" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <line x1="862.7" y1="410.5" x2="862.7" y2="456.3" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <line x1="863.8" y1="410.5" x2="863.8" y2="456.3" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <line x1="864.1" y1="393.9" x2="885.6" y2="433.2" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <line x1="888.2" y1="433.2" x2="909.5" y2="394.9" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <line x1="888.2" y1="436.4" x2="909.5" y2="467.5" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <line x1="885.6" y1="436.4" x2="864.1" y2="468.7" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <polygon points="888.2 492.5 886.8 491.1 908.2 469.6 909.5 470.9 888.2 492.5" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <path d="M879.5,469.6s.5,14.8,7.3,21.4" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <polygon points="886.4 393.9 884.6 399.5 889.6 399.5 887.6 393.9 886.4 393.9" fill="#425563"/>
              <circle cx="886.8" cy="434.4" r="2" fill="none" stroke="#425563" strokeMiterlimit="10"/>
              <g>
                <path d="M877.1,500c-.3,0-.5,0-.7-.1-.2,0-.4-.2-.6-.4-.2-.2-.3-.4-.4-.6s-.1-.5-.1-.7,0-.5.1-.8c0-.2.2-.4.4-.6.2-.2.4-.3.6-.4s.5-.2.7-.2.5,0,.7.1c.2,0,.4.2.6.4s.3.4.4.6c0,.2.1.5.1.8s0,.5-.1.7c0,.2-.2.4-.4.6-.2.2-.4.3-.6.4-.2,0-.5.1-.7.1ZM877,499.3c.2,0,.3,0,.5,0,.1,0,.3-.2.4-.3.1-.1.2-.2.3-.4s0-.3,0-.5,0-.3,0-.5c0-.2-.1-.3-.3-.4-.1-.1-.2-.2-.4-.3-.1,0-.3-.1-.5-.1s-.3,0-.5.1c-.1,0-.3.2-.4.3s-.2.2-.3.4,0,.3,0,.5,0,.3,0,.5.1.3.3.4.2.2.4.3c.1,0,.3,0,.5,0Z" fill="#425563"/>
                <path d="M879.6,501.1c-.1,0-.2,0-.2,0s0,0,0-.1c0,0,0-.1,0-.2v-3.1c0,0,0-.1,0-.2,0,0,0,0,0-.1,0,0,.1,0,.2,0s.2,0,.2,0c0,0,0,0,.1.1v3.2c0,0,0,.1,0,.2,0,0,0,0,0,.1s-.1,0-.2,0ZM880.7,499.9c-.2,0-.3,0-.5-.1-.1,0-.3-.2-.4-.3s-.2-.3-.2-.4c0-.2,0-.3,0-.5,0-.2,0-.4,0-.5,0-.2.1-.3.2-.4,0-.1.2-.2.3-.3.1,0,.3-.1.5-.1s.3,0,.5.1c.1,0,.3.2.4.3.1.1.2.3.3.4,0,.2,0,.3,0,.5s0,.4,0,.5c0,.2-.2.3-.3.4-.1.1-.2.2-.4.3-.1,0-.3,0-.5,0ZM880.6,499.3c.1,0,.2,0,.3,0,.1,0,.2-.1.2-.2s0-.2,0-.4,0-.3,0-.4c0-.1-.1-.2-.2-.2-.1,0-.2,0-.3,0s-.2,0-.3,0c-.1,0-.2.1-.2.2s0,.2,0,.4,0,.3,0,.4.1.2.2.2c.1,0,.2,0,.3,0Z" fill="#425563"/>
                <path d="M882.5,497.3h.6s.7,0,.7,0c0,0,.1,0,.2,0,0,0,0,0,.1,0,0,0,0,.1,0,.2s0,.2,0,.2,0,0-.1,0c0,0-.1,0-.2,0h-.7s-.6,0-.6,0c0,0-.2,0-.2,0s0-.1,0-.2,0-.2,0-.2.1,0,.2,0ZM883.7,500c-.2,0-.3,0-.5,0-.1,0-.2,0-.3-.2,0,0-.1-.2-.2-.3s0-.3,0-.4v-2.3c0,0,0-.1,0-.2s0,0,0-.1c0,0,.1,0,.2,0s.2,0,.2,0,0,0,0,.1,0,.1,0,.2v2.3c0,0,0,.1,0,.2,0,0,0,0,0,.1s0,0,.1,0c0,0,.1,0,.2,0s.1,0,.2,0,0,0,.1,0,0,.1,0,.2,0,.2,0,.2c0,0,0,0-.1,0s-.1,0-.2,0Z" fill="#425563"/>
                <path d="M884.8,496.8c-.1,0-.2,0-.2,0,0,0,0,0,0-.1s0-.1,0-.2,0-.1,0-.2c0,0,0,0,0-.1s.1,0,.2,0,.2,0,.2,0c0,0,0,0,0,.1s0,.1,0,.2,0,.1,0,.2c0,0,0,0,0,.1,0,0-.1,0-.2,0ZM884.8,500c-.1,0-.2,0-.2,0,0,0,0,0,0-.1s0-.1,0-.2v-2c0,0,0-.1,0-.2s0,0,0-.1.1,0,.2,0,.2,0,.2,0c0,0,0,0,0,.1,0,0,0,.1,0,.2v2c0,0,0,.1,0,.2s0,0,0,.1c0,0-.1,0-.2,0Z" fill="#425563"/>
                <path d="M887,500c-.2,0-.3,0-.5-.1-.2,0-.3-.2-.4-.3s-.2-.3-.3-.4c0-.2-.1-.4-.1-.6s0-.4.1-.5.2-.3.3-.4.3-.2.4-.3c.2,0,.3-.1.5-.1s.5,0,.7.2c.2.1.4.3.5.5.1.2.2.4.2.7s0,.4-.1.6-.2.3-.3.4c-.1.1-.3.2-.4.3-.2,0-.3,0-.5,0ZM887,499.4c.1,0,.2,0,.3,0s.2-.1.3-.3c0-.1.1-.2.1-.4s0-.3,0-.4-.1-.2-.3-.3-.2,0-.4,0-.2,0-.4,0c-.1,0-.2.1-.3.3,0,.1,0,.2,0,.4s0,.3.1.4.2.2.3.3.2,0,.3,0Z" fill="#425563"/>
                <path d="M889.1,500c-.1,0-.2,0-.2,0,0,0,0,0,0-.1,0,0,0-.1,0-.2v-2c0,0,0-.1,0-.2s0,0,0-.1c0,0,.1,0,.2,0s.2,0,.2,0c0,0,0,0,0,0,0,0,0,0,0,0s0,0,0,0v.2c0,0,0-.1,0-.2s.1-.1.2-.1c0,0,.2,0,.2-.1s.2,0,.3,0c.2,0,.3,0,.5,0s.2.1.3.3c0,.1.2.2.2.4,0,.2,0,.3,0,.5v1.1c0,0,0,.1,0,.2s0,0,0,.1c0,0-.1,0-.2,0s-.2,0-.2,0c0,0,0,0,0-.1s0-.1,0-.2v-1.1c0-.1,0-.2,0-.3,0,0-.1-.2-.2-.2,0,0-.2,0-.3,0s-.2,0-.3,0c0,0-.2.1-.2.2,0,0,0,.2,0,.3v1.1c0,0,0,.1,0,.2s0,0,0,.1-.1,0-.2,0Z" fill="#425563"/>
                <path d="M894.1,499.9c-.1,0-.2,0-.2,0,0,0,0,0,0-.2v-.2s0,.1-.1.2c0,0-.2.1-.3.2s-.2,0-.4,0-.3,0-.5-.1c-.2,0-.3-.2-.4-.3-.1-.1-.2-.3-.3-.4,0-.2,0-.3,0-.5s0-.3,0-.5c0-.2.2-.3.3-.4s.2-.2.4-.3c.1,0,.3-.1.5-.1s.3,0,.4,0c.1,0,.2,0,.3.1,0,0,.1.1.2.2v-.2c0,0,0-.1,0-.2,0,0,.1,0,.2,0s.2,0,.2,0,0,0,0,.1,0,.1,0,.2v2c0,0,0,.1,0,.2,0,0,0,0,0,.1s-.1,0-.2,0ZM893.1,499.3c.1,0,.2,0,.3,0,0,0,.2-.1.2-.3,0-.1,0-.2,0-.4s0-.3,0-.4-.1-.2-.2-.2c-.1,0-.2,0-.3,0s-.3,0-.4,0c-.1,0-.2.1-.2.3,0,.1,0,.2,0,.4s0,.2,0,.4c0,.1.1.2.3.2.1,0,.2,0,.4,0Z" fill="#425563"/>
                <path d="M895.8,500c-.1,0-.3,0-.4,0-.1,0-.2,0-.3,0s-.1-.1-.2-.2,0-.2-.1-.3,0-.2,0-.4v-2.6c0,0,0-.1,0-.2s0,0,0-.1.1,0,.2,0,.2,0,.2,0c0,0,0,0,0,.1,0,0,0,.1,0,.2v2.6c0,0,0,.1,0,.2,0,0,0,0,0,.1,0,0,0,0,0,0,0,0,0,0,.1,0s0,0,.1,0c0,0,0,0,0,0,0,0,0,.1,0,.2s0,.2,0,.2,0,0,0,0,0,0-.1,0Z" fill="#425563"/>
                <path d="M867.8,505.4c0,0-.1,0-.2,0,0,0,0,0,0,0,0,0,0,0,0,0l-1.1-3.1c0-.1,0-.2,0-.3,0,0,0-.1.2-.1,0,0,.2,0,.2,0,0,0,0,0,.1,0s0,0,0,.2l.8,2.4.7-2.3s0,0,0-.1c0,0,0,0,0,0,0,0,.1,0,.2,0s.2,0,.2,0c0,0,0,0,0,0s0,0,0,0l.7,2.4.8-2.4c0,0,0-.1,0-.2,0,0,0,0,.1,0,0,0,.1,0,.2,0,0,0,.1,0,.2.1,0,0,0,0,0,.1,0,0,0,.1,0,.2l-1.1,3.1s0,0,0,0c0,0,0,0,0,0,0,0-.1,0-.2,0s-.1,0-.2,0c0,0,0,0,0-.1,0,0,0,0,0,0l-.7-2.4-.7,2.4s0,0,0,0c0,0,0,0,0,.1,0,0-.1,0-.2,0Z" fill="#425563"/>
                <path d="M874,505.4c-.1,0-.2,0-.2,0,0,0,0,0,0-.2v-.2s0,.1-.1.2c0,0-.2.1-.3.2s-.2,0-.4,0-.3,0-.5-.1c-.2,0-.3-.2-.4-.3-.1-.1-.2-.3-.3-.4,0-.2,0-.3,0-.5s0-.3,0-.5c0-.2.2-.3.3-.4s.2-.2.4-.3c.1,0,.3-.1.5-.1s.3,0,.4,0c.1,0,.2,0,.3.1,0,0,.1.1.2.2v-.2c0,0,0-.1,0-.2,0,0,.1,0,.2,0s.2,0,.2,0,0,0,0,.1,0,.1,0,.2v2c0,0,0,.1,0,.2,0,0,0,0,0,.1s-.1,0-.2,0ZM873,504.7c.1,0,.2,0,.3,0,0,0,.2-.1.2-.3,0-.1,0-.2,0-.4s0-.3,0-.4-.1-.2-.2-.2c-.1,0-.2,0-.3,0s-.3,0-.4,0c-.1,0-.2.1-.2.3,0,.1,0,.2,0,.4s0,.2,0,.4c0,.1.1.2.3.2.1,0,.2,0,.4,0Z" fill="#425563"/>
                <path d="M875.8,505.4c-.1,0-.3,0-.4,0-.1,0-.2,0-.3,0s-.1-.1-.2-.2,0-.2-.1-.3,0-.2,0-.4v-2.6c0,0,0-.1,0-.2s0,0,0-.1.1,0,.2,0,.2,0,.2,0c0,0,0,0,0,.1,0,0,0,.1,0,.2v2.6c0,0,0,.1,0,.2,0,0,0,0,0,.1,0,0,0,0,0,0,0,0,0,0,.1,0s0,0,.1,0c0,0,0,0,0,0,0,0,0,.1,0,.2s0,.2,0,.2,0,0,0,0,0,0-.1,0Z" fill="#425563"/>
                <path d="M878.6,504.8c0,0,.1.2.1.2,0,0,0,.1-.1.2,0,0-.1.1-.2.1,0,0,0,0-.1,0,0,0-.1,0-.2-.1l-1-.9v.6c0,0,0,.1,0,.2s0,0,0,.1c0,0-.1,0-.2,0s-.2,0-.2,0c0,0,0,0,0-.1s0-.1,0-.2v-3.2c0,0,0-.1,0-.2s0,0,0-.1c0,0,.1,0,.2,0s.2,0,.2,0c0,0,0,0,0,.1s0,.1,0,.2v1.8l.7-.7c0,0,.1,0,.2-.1,0,0,.1,0,.2,0,0,0,0,0,.2.1,0,.1.1.2.1.2,0,0,0,.1-.1.2l-.7.7,1,.8Z" fill="#425563"/>
                <path d="M879.2,504.2s0,0-.1,0c0,0,0,0-.1,0,0,0,0-.1,0-.2s0-.2,0-.2,0,0,.1,0c0,0,0,0,.1,0h1.4s0,0,.1,0c0,0,0,0,.1,0,0,0,0,.1,0,.2s0,.2,0,.2c0,0,0,0-.1,0,0,0,0,0-.1,0h-1.3Z" fill="#425563"/>
                <path d="M881.7,502.2c-.1,0-.2,0-.2,0,0,0,0,0,0-.1s0-.1,0-.2,0-.1,0-.2c0,0,0,0,0-.1s.1,0,.2,0,.2,0,.2,0c0,0,0,0,0,.1s0,.1,0,.2,0,.1,0,.2c0,0,0,0,0,.1,0,0-.1,0-.2,0ZM881.7,505.4c-.1,0-.2,0-.2,0,0,0,0,0,0-.1s0-.1,0-.2v-2c0,0,0-.1,0-.2s0,0,0-.1.1,0,.2,0,.2,0,.2,0c0,0,0,0,0,.1,0,0,0,.1,0,.2v2c0,0,0,.1,0,.2s0,0,0,.1c0,0-.1,0-.2,0Z" fill="#425563"/>
                <path d="M883,505.4c-.1,0-.2,0-.2,0,0,0,0,0,0-.1,0,0,0-.1,0-.2v-2c0,0,0-.1,0-.2s0,0,0-.1c0,0,.1,0,.2,0s.2,0,.2,0c0,0,0,0,0,0,0,0,0,0,0,0s0,0,0,0v.2c0,0,0-.1,0-.2s.1-.1.2-.1c0,0,.2,0,.2-.1s.2,0,.3,0c.2,0,.3,0,.5,0s.2.1.3.3c0,.1.2.2.2.4,0,.2,0,.3,0,.5v1.1c0,0,0,.1,0,.2s0,0,0,.1c0,0-.1,0-.2,0s-.2,0-.2,0c0,0,0,0,0-.1s0-.1,0-.2v-1.1c0-.1,0-.2,0-.3,0,0-.1-.2-.2-.2,0,0-.2,0-.3,0s-.2,0-.3,0c0,0-.2.1-.2.2,0,0,0,.2,0,.3v1.1c0,0,0,.1,0,.2s0,0,0,.1-.1,0-.2,0Z" fill="#425563"/>
                <path d="M888.2,505.4c-.2,0-.3,0-.4,0-.1,0-.2,0-.3-.2,0,0-.2-.1-.2-.2,0,0-.1-.1-.1-.2,0,0,0-.1,0-.2s0-.1,0-.1,0-.1.1-.2c0,0,.1,0,.2,0,0,0,.1,0,.2,0,0,0,.1,0,.2.2,0,.1.2.2.3.2s.2,0,.3,0,.3,0,.4,0c.1,0,.2,0,.2-.2,0,0,0-.2,0-.3s0-.2,0-.2c0,0-.1-.1-.2-.2,0,0-.2,0-.3-.1s-.2,0-.4-.1c0,0-.2,0-.3-.1s-.2,0-.2-.1c0,0-.1-.1-.2-.2,0,0,0-.2-.1-.3,0,0,0-.2,0-.3,0-.2,0-.4.2-.5.1-.2.2-.3.4-.4.2,0,.4-.1.6-.1s.3,0,.4,0c.1,0,.2,0,.3.1s.2,0,.2.1,0,0,.1.1c0,0,.1.2.1.2,0,0,0,.1,0,.2,0,0-.1.1-.2.2,0,0-.2,0-.2,0,0,0-.1-.1-.2-.1,0,0-.1,0-.2,0,0,0-.2,0-.3,0s-.1,0-.2,0c0,0-.1,0-.2,0,0,0,0,0-.1.1,0,0,0,.1,0,.2s0,.2,0,.2c0,0,.1.1.2.1,0,0,.2,0,.3.1.1,0,.2,0,.3.1.1,0,.2,0,.4.1.1,0,.2.1.3.2,0,0,.2.2.2.3,0,.1,0,.3,0,.4s0,.4-.1.5c0,.1-.2.3-.3.4-.1,0-.3.2-.4.2-.2,0-.3,0-.5,0Z" fill="#425563"/>
                <path d="M890.3,505.4c-.1,0-.2,0-.2,0,0,0,0,0,0-.1s0-.1,0-.2v-3.2c0,0,0-.1,0-.2s0,0,0-.1c0,0,.1,0,.2,0s.2,0,.2,0,0,0,0,.1,0,.1,0,.2v1.2c0,0,.2-.2.3-.2.1,0,.3-.1.4-.1s.4,0,.6.2c.2.1.3.3.4.4.1.2.2.4.2.7v1.1c0,0,0,.1,0,.2s0,0,0,.1c0,0-.1,0-.2,0s-.2,0-.2,0,0,0,0-.1,0-.1,0-.2v-1.1c0-.1,0-.2,0-.3,0,0-.1-.2-.2-.2,0,0-.2,0-.3,0s-.3,0-.4.1c-.1,0-.2.2-.2.4v1.2c0,0,0,.1,0,.2s0,0,0,.1-.1,0-.2,0Z" fill="#425563"/>
                <path d="M894.2,505.4c-.2,0-.3,0-.5-.1-.2,0-.3-.2-.4-.3s-.2-.3-.3-.4c0-.2-.1-.4-.1-.6s0-.4.1-.5.2-.3.3-.4.3-.2.4-.3c.2,0,.3-.1.5-.1s.5,0,.7.2c.2.1.4.3.5.5.1.2.2.4.2.7s0,.4-.1.6-.2.3-.3.4c-.1.1-.3.2-.4.3-.2,0-.3,0-.5,0ZM894.2,504.8c.1,0,.2,0,.3,0s.2-.1.3-.3c0-.1.1-.2.1-.4s0-.3,0-.4-.1-.2-.3-.3-.2,0-.4,0-.2,0-.4,0c-.1,0-.2.1-.3.3,0,.1,0,.2,0,.4s0,.3.1.4.2.2.3.3.2,0,.3,0Z" fill="#425563"/>
                <path d="M897,505.4c0,0-.1,0-.2,0,0,0,0,0,0-.1,0,0,0,0,0-.1l-.8-2c0,0,0-.1,0-.2,0,0,0,0,0-.1,0,0,0,0,.2,0,.1,0,.2,0,.3,0,0,0,.1,0,.1.2l.5,1.4.5-1.3s0,0,0-.1,0,0,0,0c0,0,0,0,.2,0s.1,0,.2,0c0,0,0,0,.1,0s0,0,0,.1l.5,1.3.5-1.3c0-.1,0-.2.2-.2,0,0,.2,0,.3,0,.1,0,.2,0,.2.2,0,0,0,.1,0,.3l-.8,2s0,0,0,.1c0,0,0,0,0,0,0,0,0,0-.2,0s-.1,0-.2,0c0,0,0,0,0,0,0,0,0,0,0-.1l-.5-1.3-.5,1.3c0,0,0,0,0,.1,0,0,0,0,0,0,0,0,0,0-.2,0Z" fill="#425563"/>
                <path d="M901.4,505.4c-.2,0-.4,0-.6-.1-.2,0-.3-.2-.4-.3-.1-.1-.2-.3-.3-.4s0-.3,0-.5c0-.3,0-.5.2-.7.1-.2.3-.4.5-.5s.5-.2.7-.2.4,0,.5,0,.3.1.4.2c0,0,.2.2.2.3,0,.1,0,.2,0,.3,0,.2,0,.3-.1.4,0,0-.2.1-.3.1h-1.4c0,.1,0,.2.1.3s.2.2.3.2c.1,0,.2,0,.3,0s.2,0,.2,0c0,0,.1,0,.2,0,0,0,0,0,.1,0,0,0,0,0,.1,0,0,0,0,0,0,0,0,0,0,0,.1,0,0,0,0,0,0,.1,0,0,0,0,0,.1s0,0,0,0c0,0,0,.1-.1.2,0,0-.2.1-.4.2s-.3,0-.6,0ZM900.7,503.9h1.1c0,0,.1,0,.1,0,0,0,0,0,0-.1s0-.2,0-.2-.1-.1-.2-.2c0,0-.2,0-.3,0s-.3,0-.4,0c-.1,0-.2.1-.3.2,0,0,0,.2,0,.3Z" fill="#425563"/>
                <path d="M903.3,505.4c-.1,0-.2,0-.2,0,0,0,0,0,0-.1,0,0,0-.1,0-.2v-2c0,0,0-.1,0-.2s0,0,0-.1c0,0,.1,0,.2,0s.2,0,.2,0c0,0,0,0,0,0,0,0,0,0,0,.1h0c0,0,0,0,0,0s0,0,.1-.1c0,0,.1,0,.2-.1,0,0,.2,0,.3,0s0,0,.1,0c0,0,0,0,.1,0,0,0,0,0,.1,0,0,0,0,0,0,0,0,0,0,0,0,.1,0,.1,0,.2,0,.3,0,0-.1.1-.2.1s0,0-.1,0c0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0-.1,0s-.1,0-.2,0c0,0-.1,0-.2,0s0,0-.1.1c0,0,0,.1,0,.2v1.3c0,0,0,.1,0,.2s0,0,0,.1-.1,0-.2,0Z" fill="#425563"/>
              </g>
            </g>
          </g>
          {/* OPTION: Great room sliding glass door patio access */}
          <g id="slidingGlass" data-option="slidingGlass" style={{ display: active.slidingGlass ? "block" : "none" }} fill="#CC0001">
            <g id="sliding-glassdoor-gr">
              <rect x="487.7" y="196.2" width="108.5" height="13.6" fill="#f2f2f2"/>
              <rect x="506.1" y="184.9" width="1.8" height="39.8" transform="translate(711.8 -302.2) rotate(90)" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <rect x="533.8" y="182.6" width="2.1" height="39.6" transform="translate(737.3 -332.5) rotate(90)" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <rect x="574.2" y="179.3" width="2.1" height="41.8" transform="translate(775.5 -375.1) rotate(90)" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <rect x="556.5" y="197" width="2.1" height="6.4" transform="translate(757.8 -357.4) rotate(90)" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <rect x="563" y="197" width="2.1" height="6.4" transform="translate(764.2 -363.8) rotate(90)" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <rect x="569.5" y="197" width="2.1" height="6.4" transform="translate(770.8 -370.4) rotate(90)" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <rect x="575.9" y="197" width="2.1" height="6.4" transform="translate(777.2 -376.8) rotate(90)" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <rect x="582.4" y="197" width="2.1" height="6.4" transform="translate(783.6 -383.3) rotate(90)" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <rect x="588.8" y="197" width="2.1" height="6.4" transform="translate(790.1 -389.7) rotate(90)" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
            </g>
          </g>
          {/* HOTSPOTS */}
      </g>
    </g>
  </svg>

  );
}

export function DanielD237basementSVG({
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
        <filter id="ds-soft" x="-60%" y="-60%" width="220%" height="220%">
          <feOffset dx="0" dy="3" in="SourceAlpha" result="off"/>
          <feGaussianBlur in="off" stdDeviation="6" result="blur"/>
          <feColorMatrix in="blur" type="matrix"
            values="0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0.4 0" result="shadow"/>
          <feMerge>
            <feMergeNode in="shadow"/>
            <feMergeNode in="SourceGraphic"/>
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
          
          <g id="basement">
            <g id="background">
              <polygon id="background" points="923.77 191.51 923.77 976.85 651.97 976.85 651.97 814.95 571.11 814.95 571.11 977.32 502.89 977.32 502.89 1152.47 245.66 1152.47 245.66 191.51 923.77 191.51" fill="#fff" stroke="#000" stroke-miterlimit="10"/>
            </g>
            <g id="Rug">
              <g opacity=".6">
                <g>
                  <g>
                    <g>
                      <path d="M567.4,240.1c0,0,.1.2.1.3l.6,5.7c.3,3.3-.4,6.1-2.2,8.2-1.7,1.9-4.1,3-7,3.2l-8.3.4c-.1,0-.3,0-.4-.1,0,0,0,0,0,0,0,0-.1-.2-.1-.3l.4-8.5c.1-2.9,1.2-5.3,3.1-6.9,2-1.8,4.6-2.6,7.8-2.4l5.7.4c.1,0,.2,0,.3.1ZM551.1,257l7.8-.4c2.7-.1,4.8-1.1,6.3-2.9,1.6-1.9,2.3-4.5,2-7.5l-.5-5.3-5.3-.3c-2.9-.2-5.3.6-7.1,2.1-1.7,1.5-2.6,3.7-2.7,6.3l-.4,8Z" fill="#fff"/>
                      <path d="M560.5,239.6c-2.7,0-5.1.8-6.9,2.4-1.9,1.7-2.9,4.1-3.1,6.9l-.4,8.5c0,.1,0,.3.1.3,0,0,0,0,0,0,0,0,.2.1.3.1s0,0,0,0l8.3-.4c2.9-.2,5.3-1.3,7-3.2,1.8-2.1,2.5-4.9,2.2-8.2l-.6-5.7c0-.1,0-.2-.1-.3,0,0-.2-.1-.3-.1l-5.7-.4c-.3,0-.6,0-.9,0h0ZM551.1,257l.4-8c.1-2.6,1.1-4.8,2.7-6.3,1.6-1.4,3.7-2.2,6.2-2.2s.6,0,.9,0l5.3.3.5,5.3c.3,3-.4,5.6-2,7.5-1.5,1.7-3.7,2.7-6.3,2.9l-7.8.4h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M550.8,257c0,0,.1.2.1.3l-.4,8.5c-.1,2.9-1.2,5.3-3.1,6.9-2,1.8-4.6,2.6-7.8,2.4l-5.7-.4c-.2,0-.4-.2-.4-.4l-.6-5.7c-.3-3.3.4-6.1,2.2-8.2,1.7-1.9,4.1-3,7-3.2l8.3-.4c.1,0,.3,0,.4.1ZM534.5,273.9l5.3.3c2.9.2,5.3-.6,7.1-2.1,1.7-1.5,2.6-3.7,2.7-6.3l.4-8-7.8.4c-2.7.1-4.8,1.1-6.3,2.9-1.6,1.9-2.3,4.5-2,7.5l.5,5.3Z" fill="#fff"/>
                      <path d="M550.5,256.8s0,0,0,0l-8.3.4c-2.9.2-5.3,1.3-7,3.2-1.8,2.1-2.5,4.9-2.2,8.2l.6,5.7c0,.2.2.4.4.4l5.7.4c.3,0,.6,0,.9,0,2.7,0,5.1-.8,6.9-2.4,1.9-1.7,2.9-4.1,3.1-6.9l.4-8.5c0-.1,0-.3-.1-.3,0,0-.2-.1-.3-.1h0ZM550,257.8l-.4,8c-.1,2.6-1.1,4.8-2.7,6.3-1.6,1.4-3.7,2.2-6.2,2.2s-.6,0-.9,0l-5.3-.3-.5-5.3c-.3-3,.4-5.6,2-7.5,1.5-1.7,3.7-2.7,6.3-2.9l7.8-.4h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M565.6,260.1c.1.1.2.2.3.3,1.8,2,2.6,4.6,2.4,7.8l-.4,5.7c0,.2-.2.4-.4.4l-5.7.6c-3.3.3-6.1-.4-8.2-2.2-1.9-1.7-3-4.1-3.2-7l-.4-8.3c0-.1,0-.3.1-.4,0,0,.2-.1.4-.1l8.5.4c2.7.1,4.9,1.1,6.6,2.7ZM567,273.5l.3-5.3c.2-2.9-.6-5.3-2.1-7.1-1.5-1.7-3.7-2.6-6.3-2.7l-8-.4.4,7.8c.1,2.7,1.1,4.8,2.9,6.3,1.9,1.6,4.5,2.3,7.5,2l5.3-.5Z" fill="#fff"/>
                      <path d="M550.5,257c-.1,0-.2,0-.3.1,0,0-.1.2-.1.4l.4,8.3c.2,2.9,1.3,5.3,3.2,7,1.8,1.5,4.1,2.3,6.7,2.3s1,0,1.5,0l5.7-.6c.2,0,.4-.2.4-.4l.4-5.7c.2-3.1-.6-5.8-2.4-7.8-.1-.1-.2-.2-.3-.3-1.6-1.6-3.9-2.6-6.6-2.7l-8.5-.4s0,0,0,0h0ZM560.4,274.1c-2.4,0-4.5-.7-6.1-2.1-1.7-1.5-2.7-3.7-2.9-6.3l-.4-7.8,8,.4c2.6.1,4.8,1.1,6.3,2.7,1.6,1.8,2.3,4.2,2.1,7.1l-.3,5.3-5.3.5c-.5,0-1,0-1.4,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M548,242.5c1.6,1.6,2.6,3.9,2.7,6.5l.4,8.3c0,.1,0,.3-.1.4,0,0-.2.1-.4.1l-8.5-.4c-2.9-.1-5.3-1.2-6.9-3.1-1.8-2-2.6-4.6-2.4-7.8l.4-5.7c0-.2.2-.4.4-.4l5.7-.6c3.3-.3,6.1.4,8.2,2.2.2.1.3.3.5.5ZM550.2,256.8l-.4-7.8c-.1-2.7-1.1-4.8-2.9-6.3-1.9-1.6-4.5-2.3-7.5-2l-5.3.5-.3,5.3c-.2,2.9.6,5.3,2.1,7.1,1.5,1.7,3.7,2.6,6.3,2.7l8,.4Z" fill="#fff"/>
                      <path d="M540.8,239.7c-.5,0-1,0-1.5,0l-5.7.6c-.2,0-.4.2-.4.4l-.4,5.7c-.2,3.1.6,5.8,2.4,7.8,1.7,1.9,4.1,2.9,6.9,3.1l8.5.4s0,0,0,0c.1,0,.2,0,.3-.1,0,0,.1-.2.1-.4l-.4-8.3c-.1-2.7-1.1-4.9-2.7-6.5-.2-.2-.3-.3-.5-.5-1.8-1.5-4.1-2.3-6.7-2.3h0ZM550.2,256.8l-8-.4c-2.6-.1-4.8-1.1-6.3-2.7-1.6-1.8-2.3-4.2-2.1-7.1l.3-5.3,5.3-.5c.5,0,1,0,1.4,0,2.4,0,4.5.7,6.1,2.1,1.7,1.5,2.7,3.7,2.9,6.3l.4,7.8h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M534.7,240.8l32.3,32.3c.2.2.2.5,0,.7-.2.2-.5.2-.7,0l-32.3-32.3c-.2-.2-.2-.5,0-.7s.5-.2.7,0Z" fill="#fff"/>
                    <path d="M534.4,240.7c-.1,0-.2,0-.3.1-.2.2-.2.5,0,.7l32.3,32.3c0,0,.2.1.3.1s.2,0,.3-.1c.2-.2.2-.5,0-.7l-32.3-32.3c0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M566.7,241.2c.2.2.2.5,0,.7l-31.9,31.9c-.2.2-.5.2-.7,0s-.2-.5,0-.7l31.9-31.9c.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M566.3,241.1c-.1,0-.2,0-.3.1l-31.9,31.9c-.2.2-.2.5,0,.7s.2.1.3.1.2,0,.3-.1l31.9-31.9c.2-.2.2-.5,0-.7,0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M567.7,274.6c0,0,.1.2.1.3l.6,5.7c.3,3.3-.4,6.1-2.2,8.2-1.7,1.9-4.1,3-7,3.2l-8.3.4c-.1,0-.3,0-.4-.1,0,0,0,0,0,0,0,0-.1-.2-.1-.3l.4-8.5c.1-2.9,1.2-5.3,3.1-6.9,2-1.8,4.6-2.6,7.8-2.4l5.7.4c.1,0,.2,0,.3.1ZM551.4,291.5l7.8-.4c2.7-.1,4.8-1.1,6.3-2.9,1.6-1.9,2.3-4.5,2-7.5l-.5-5.3-5.3-.3c-2.9-.2-5.3.6-7.1,2.1-1.7,1.5-2.6,3.7-2.7,6.3l-.4,8Z" fill="#fff"/>
                      <path d="M560.8,274.1c-2.7,0-5.1.8-6.9,2.4-1.9,1.7-2.9,4.1-3.1,6.9l-.4,8.5c0,.1,0,.3.1.3,0,0,0,0,0,0,0,0,.2.1.3.1s0,0,0,0l8.3-.4c2.9-.1,5.3-1.3,7-3.2,1.8-2.1,2.5-4.9,2.2-8.2l-.6-5.7c0-.1,0-.2-.1-.3,0,0-.2-.1-.3-.1l-5.7-.4c-.3,0-.6,0-.9,0h0ZM551.4,291.5l.4-8c.1-2.6,1.1-4.8,2.7-6.3,1.6-1.4,3.7-2.2,6.2-2.2s.6,0,.9,0l5.3.3.5,5.3c.3,3-.4,5.6-2,7.5-1.5,1.7-3.7,2.7-6.3,2.9l-7.8.4h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M551.1,291.5c0,0,.1.2.1.3l-.4,8.5c-.1,2.9-1.2,5.3-3.1,6.9-2,1.8-4.6,2.6-7.8,2.4l-5.7-.4c-.2,0-.4-.2-.4-.4l-.6-5.7c-.3-3.3.4-6.1,2.2-8.2,1.7-1.9,4.1-3,7-3.2l8.3-.4c.1,0,.3,0,.4.1ZM534.8,308.3l5.3.3c2.9.2,5.3-.6,7.1-2.1,1.7-1.5,2.6-3.7,2.7-6.3l.4-8-7.8.4c-2.7.1-4.8,1.1-6.3,2.9-1.6,1.9-2.3,4.5-2,7.5l.5,5.3Z" fill="#fff"/>
                      <path d="M550.8,291.3s0,0,0,0l-8.3.4c-2.9.2-5.3,1.3-7,3.2-1.8,2.1-2.5,4.9-2.2,8.2l.6,5.7c0,.2.2.4.4.4l5.7.4c.3,0,.6,0,.9,0,2.7,0,5.1-.8,6.9-2.4,1.9-1.7,2.9-4.1,3.1-6.9l.4-8.5c0-.1,0-.3-.1-.3,0,0-.2-.1-.3-.1h0ZM550.3,292.3l-.4,8c-.1,2.6-1.1,4.8-2.7,6.3-1.6,1.4-3.7,2.2-6.2,2.2s-.6,0-.9,0l-5.3-.3-.5-5.3c-.3-3,.4-5.6,2-7.5,1.5-1.7,3.7-2.7,6.3-2.9l7.8-.4h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M565.9,294.6c.1.1.2.2.3.3,1.8,2,2.6,4.6,2.4,7.8l-.4,5.7c0,.2-.2.4-.4.4l-5.7.6c-3.3.3-6.1-.4-8.2-2.2-1.9-1.7-3-4.1-3.2-7l-.4-8.3c0-.1,0-.3.1-.4,0,0,.2-.1.4-.1l8.5.4c2.7.1,4.9,1.1,6.6,2.7ZM567.4,308l.3-5.3c.2-2.9-.6-5.3-2.1-7.1-1.5-1.7-3.7-2.6-6.3-2.7l-8-.4.4,7.8c.1,2.7,1.1,4.8,2.9,6.3,1.9,1.6,4.5,2.3,7.5,2l5.3-.5Z" fill="#fff"/>
                      <path d="M550.8,291.5c-.1,0-.2,0-.3.1,0,0-.1.2-.1.4l.4,8.3c.2,2.9,1.3,5.3,3.2,7,1.8,1.5,4.1,2.3,6.7,2.3s1,0,1.5,0l5.7-.6c.2,0,.4-.2.4-.4l.4-5.7c.2-3.1-.6-5.8-2.4-7.8-.1-.1-.2-.2-.3-.3-1.6-1.6-3.9-2.6-6.6-2.7l-8.5-.4s0,0,0,0h0ZM560.7,308.6c-2.4,0-4.5-.7-6.1-2.1-1.7-1.5-2.7-3.7-2.9-6.3l-.4-7.8,8,.4c2.6.1,4.8,1.1,6.3,2.7,1.6,1.8,2.3,4.2,2.1,7.1l-.3,5.3-5.3.5c-.5,0-1,0-1.4,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M548.3,277c1.6,1.6,2.6,3.9,2.7,6.5l.4,8.3c0,.1,0,.3-.1.4,0,0-.2.1-.4.1l-8.5-.4c-2.9-.1-5.3-1.2-6.9-3.1-1.8-2-2.6-4.6-2.4-7.8l.4-5.7c0-.2.2-.4.4-.4l5.7-.6c3.3-.3,6.1.4,8.2,2.2.2.1.3.3.5.5ZM550.5,291.3l-.4-7.8c-.1-2.7-1.1-4.8-2.9-6.3-1.9-1.6-4.5-2.3-7.5-2l-5.3.5-.3,5.3c-.2,2.9.6,5.3,2.1,7.1,1.5,1.7,3.7,2.6,6.3,2.7l8,.4Z" fill="#fff"/>
                      <path d="M541.1,274.2c-.5,0-1,0-1.5,0l-5.7.6c-.2,0-.4.2-.4.4l-.4,5.7c-.2,3.1.6,5.8,2.4,7.8,1.7,1.9,4.1,2.9,6.9,3.1l8.5.4s0,0,0,0c.1,0,.2,0,.3-.1,0,0,.1-.2.1-.4l-.4-8.3c-.1-2.7-1.1-4.9-2.7-6.5-.2-.2-.3-.3-.5-.5-1.8-1.5-4.1-2.3-6.7-2.3h0ZM550.5,291.3l-8-.4c-2.6-.1-4.8-1.1-6.3-2.7-1.6-1.8-2.3-4.2-2.1-7.1l.3-5.3,5.3-.5c.5,0,1,0,1.4,0,2.4,0,4.5.7,6.1,2.1,1.7,1.5,2.7,3.7,2.9,6.3l.4,7.8h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M535,275.3l32.3,32.3c.2.2.2.5,0,.7-.2.2-.5.2-.7,0l-32.3-32.3c-.2-.2-.2-.5,0-.7.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M534.7,275.2c-.1,0-.2,0-.3.1-.2.2-.2.5,0,.7l32.3,32.3c0,0,.2.1.3.1s.2,0,.3-.1c.2-.2.2-.5,0-.7l-32.3-32.3c0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M567,275.7c.2.2.2.5,0,.7l-31.9,31.9c-.2.2-.5.2-.7,0-.2-.2-.2-.5,0-.7l31.9-31.9c.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M566.7,275.6c-.1,0-.2,0-.3.1l-31.9,31.9c-.2.2-.2.5,0,.7,0,0,.2.1.3.1s.2,0,.3-.1l31.9-31.9c.2-.2.2-.5,0-.7s-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M567.9,308.9c0,0,.1.2.1.3l.6,5.7c.3,3.3-.4,6.1-2.2,8.2-1.7,1.9-4.1,3-7,3.2l-8.3.4c-.1,0-.3,0-.4-.1,0,0,0,0,0,0,0,0-.1-.2-.1-.3l.4-8.5c.1-2.9,1.2-5.3,3.1-6.9,2-1.8,4.6-2.6,7.8-2.4l5.7.4c.1,0,.2,0,.3.1ZM551.7,325.8l7.8-.4c2.7-.1,4.8-1.1,6.3-2.9,1.6-1.9,2.3-4.5,2-7.5l-.5-5.3-5.3-.3c-2.9-.2-5.3.6-7.1,2.1-1.7,1.5-2.6,3.7-2.7,6.3l-.4,8Z" fill="#fff"/>
                      <path d="M561,308.4c-2.7,0-5.1.8-6.9,2.4-1.9,1.7-2.9,4.1-3.1,6.9l-.4,8.5c0,.1,0,.3.1.3h0c0,0,.2.1.3.1s0,0,0,0l8.3-.4c2.9-.1,5.3-1.3,7-3.2,1.8-2.1,2.5-4.9,2.2-8.2l-.6-5.7c0-.1,0-.2-.1-.3,0,0-.2-.1-.3-.1l-5.7-.4c-.3,0-.6,0-.9,0h0ZM551.7,325.8l.4-8c.1-2.6,1.1-4.8,2.7-6.3,1.6-1.4,3.7-2.2,6.2-2.2s.6,0,.9,0l5.3.3.5,5.3c.3,3-.4,5.6-2,7.5-1.5,1.7-3.7,2.7-6.3,2.9l-7.8.4h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M551.4,325.8c0,0,.1.2.1.3l-.4,8.5c-.1,2.9-1.2,5.3-3.1,6.9-2,1.8-4.6,2.6-7.8,2.4l-5.7-.4c-.2,0-.4-.2-.4-.4l-.6-5.7c-.3-3.3.4-6.1,2.2-8.2,1.7-1.9,4.1-3,7-3.2l8.3-.4c.1,0,.3,0,.4.1ZM535,342.7l5.3.3c2.9.2,5.3-.6,7.1-2.1,1.7-1.5,2.6-3.7,2.7-6.3l.4-8-7.8.4c-2.7.1-4.8,1.1-6.3,2.9-1.6,1.9-2.3,4.5-2,7.5l.5,5.3Z" fill="#fff"/>
                      <path d="M551,325.6s0,0,0,0l-8.3.4c-2.9.2-5.3,1.3-7,3.2-1.8,2.1-2.5,4.9-2.2,8.2l.6,5.7c0,.2.2.4.4.4l5.7.4c.3,0,.6,0,.9,0,2.7,0,5.1-.8,6.9-2.4,1.9-1.7,2.9-4.1,3.1-6.9l.4-8.5c0-.1,0-.3-.1-.3,0,0-.2-.1-.3-.1h0ZM550.5,326.6l-.4,8c-.1,2.6-1.1,4.8-2.7,6.3-1.6,1.4-3.7,2.2-6.2,2.2s-.6,0-.9,0l-5.3-.3-.5-5.3c-.3-3,.4-5.6,2-7.5,1.5-1.7,3.7-2.7,6.3-2.9l7.8-.4h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M566.2,328.9c.1.1.2.2.3.3,1.8,2,2.6,4.6,2.4,7.8l-.4,5.7c0,.2-.2.4-.4.4l-5.7.6c-3.3.3-6.1-.4-8.2-2.2-1.9-1.7-3-4.1-3.2-7l-.4-8.3c0-.1,0-.3.1-.4,0,0,.2-.1.4-.1l8.5.4c2.7.1,4.9,1.1,6.6,2.7ZM567.6,342.3l.3-5.3c.2-2.9-.6-5.3-2.1-7.1-1.5-1.7-3.7-2.6-6.3-2.7l-8-.4.4,7.8c.1,2.7,1.1,4.8,2.9,6.3,1.9,1.6,4.5,2.3,7.5,2l5.3-.5Z" fill="#fff"/>
                      <path d="M551,325.8c-.1,0-.2,0-.3.1,0,0-.1.2-.1.4l.4,8.3c.2,2.9,1.3,5.3,3.2,7,1.8,1.5,4.1,2.3,6.7,2.3s1,0,1.5,0l5.7-.6c.2,0,.4-.2.4-.4l.4-5.7c.2-3.1-.6-5.8-2.4-7.8-.1-.1-.2-.2-.3-.3-1.6-1.6-3.9-2.6-6.6-2.7l-8.5-.4s0,0,0,0h0ZM560.9,342.9c-2.4,0-4.5-.7-6.1-2.1-1.7-1.5-2.7-3.7-2.9-6.3l-.4-7.8,8,.4c2.6.1,4.8,1.1,6.3,2.7,1.6,1.8,2.3,4.2,2.1,7.1l-.3,5.3-5.3.5c-.5,0-1,0-1.4,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M548.5,311.3c1.6,1.6,2.6,3.9,2.7,6.5l.4,8.3c0,.1,0,.3-.1.4,0,0-.2.1-.4.1l-8.5-.4c-2.9-.1-5.3-1.2-6.9-3.1-1.8-2-2.6-4.6-2.4-7.8l.4-5.7c0-.2.2-.4.4-.4l5.7-.6c3.3-.3,6.1.4,8.2,2.2.2.1.3.3.5.5ZM550.7,325.6l-.4-7.8c-.1-2.7-1.1-4.8-2.9-6.3-1.9-1.6-4.5-2.3-7.5-2l-5.3.5-.3,5.3c-.2,2.9.6,5.3,2.1,7.1,1.5,1.7,3.7,2.6,6.3,2.7l8,.4Z" fill="#fff"/>
                      <path d="M541.3,308.5c-.5,0-1,0-1.5,0l-5.7.6c-.2,0-.4.2-.4.4l-.4,5.7c-.2,3.1.6,5.8,2.4,7.8,1.7,1.9,4.1,2.9,6.9,3.1l8.5.4s0,0,0,0c.1,0,.2,0,.3-.1,0,0,.1-.2.1-.4l-.4-8.3c-.1-2.7-1.1-4.9-2.7-6.5-.2-.2-.3-.3-.5-.5-1.8-1.5-4.1-2.3-6.7-2.3h0ZM550.7,325.6l-8-.4c-2.6-.1-4.8-1.1-6.3-2.7-1.6-1.8-2.3-4.2-2.1-7.1l.3-5.3,5.3-.5c.5,0,1,0,1.4,0,2.4,0,4.5.7,6.1,2.1,1.7,1.5,2.7,3.7,2.9,6.3l.4,7.8h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M535.2,309.6l32.3,32.3c.2.2.2.5,0,.7-.2.2-.5.2-.7,0l-32.3-32.3c-.2-.2-.2-.5,0-.7.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M534.9,309.5c-.1,0-.2,0-.3.1-.2.2-.2.5,0,.7l32.3,32.3c0,0,.2.1.3.1s.2,0,.3-.1c.2-.2.2-.5,0-.7l-32.3-32.3c0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M567.2,310c.2.2.2.5,0,.7l-31.9,31.9c-.2.2-.5.2-.7,0-.2-.2-.2-.5,0-.7l31.9-31.9c.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M566.9,309.9c-.1,0-.2,0-.3.1l-31.9,31.9c-.2.2-.2.5,0,.7,0,0,.2.1.3.1s.2,0,.3-.1l31.9-31.9c.2-.2.2-.5,0-.7,0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M568.3,343.4c0,0,.1.2.1.3l.6,5.7c.3,3.3-.4,6.1-2.2,8.2-1.7,1.9-4.1,3-7,3.2l-8.3.4c-.1,0-.3,0-.4-.1,0,0,0,0,0,0,0,0-.1-.2-.1-.3l.4-8.5c.1-2.9,1.2-5.3,3.1-6.9,2-1.8,4.6-2.6,7.8-2.4l5.7.4c.1,0,.2,0,.3.1ZM552,360.3l7.8-.4c2.7-.1,4.8-1.1,6.3-2.9,1.6-1.9,2.3-4.5,2-7.5l-.5-5.3-5.3-.3c-2.9-.2-5.3.6-7.1,2.1-1.7,1.5-2.6,3.7-2.7,6.3l-.4,8Z" fill="#fff"/>
                      <path d="M561.3,342.9c-2.7,0-5.1.8-6.9,2.4-1.9,1.7-2.9,4.1-3.1,6.9l-.4,8.5c0,.1,0,.3.1.3,0,0,0,0,0,0,0,0,.2.1.3.1s0,0,0,0l8.3-.4c2.9-.2,5.3-1.3,7-3.2,1.8-2.1,2.5-4.9,2.2-8.2l-.6-5.7c0-.1,0-.2-.1-.3,0,0-.2-.1-.3-.1l-5.7-.4c-.3,0-.6,0-.9,0h0ZM552,360.3l.4-8c.1-2.6,1.1-4.8,2.7-6.3,1.6-1.4,3.7-2.2,6.2-2.2s.6,0,.9,0l5.3.3.5,5.3c.3,3-.4,5.6-2,7.5-1.5,1.7-3.7,2.7-6.3,2.9l-7.8.4h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M551.7,360.3c0,0,.1.2.1.3l-.4,8.5c-.1,2.9-1.2,5.3-3.1,6.9-2,1.8-4.6,2.6-7.8,2.4l-5.7-.4c-.2,0-.4-.2-.4-.4l-.6-5.7c-.3-3.3.4-6.1,2.2-8.2,1.7-1.9,4.1-3,7-3.2l8.3-.4c.1,0,.3,0,.4.1ZM535.3,377.2l5.3.3c2.9.2,5.3-.6,7.1-2.1,1.7-1.5,2.6-3.7,2.7-6.3l.4-8-7.8.4c-2.7.1-4.8,1.1-6.3,2.9-1.6,1.9-2.3,4.5-2,7.5l.5,5.3Z" fill="#fff"/>
                      <path d="M551.3,360.1s0,0,0,0l-8.3.4c-2.9.1-5.3,1.3-7,3.2-1.8,2.1-2.5,4.9-2.2,8.2l.6,5.7c0,.2.2.4.4.4l5.7.4c.3,0,.6,0,.9,0,2.7,0,5.1-.8,6.9-2.4,1.9-1.7,2.9-4.1,3.1-6.9l.4-8.5c0-.1,0-.3-.1-.3,0,0-.2-.1-.3-.1h0ZM550.8,361.1l-.4,8c-.1,2.6-1.1,4.8-2.7,6.3-1.6,1.4-3.7,2.2-6.2,2.2s-.6,0-.9,0l-5.3-.3-.5-5.3c-.3-3,.4-5.6,2-7.5,1.5-1.7,3.7-2.7,6.3-2.9l7.8-.4h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M566.5,363.4c.1.1.2.2.3.3,1.8,2,2.6,4.6,2.4,7.8l-.4,5.7c0,.2-.2.4-.4.4l-5.7.6c-3.3.3-6.1-.4-8.2-2.2-1.9-1.7-3-4.1-3.2-7l-.4-8.3c0-.1,0-.3.1-.4,0,0,.2-.1.4-.1l8.5.4c2.7.1,4.9,1.1,6.6,2.7ZM567.9,376.8l.3-5.3c.2-2.9-.6-5.3-2.1-7.1-1.5-1.7-3.7-2.6-6.3-2.7l-8-.4.4,7.8c.1,2.7,1.1,4.8,2.9,6.3,1.9,1.6,4.5,2.3,7.5,2l5.3-.5Z" fill="#fff"/>
                      <path d="M551.3,360.3c-.1,0-.2,0-.3.1,0,0-.1.2-.1.4l.4,8.3c.2,2.9,1.3,5.3,3.2,7,1.8,1.5,4.1,2.3,6.7,2.3s1,0,1.5,0l5.7-.6c.2,0,.4-.2.4-.4l.4-5.7c.2-3.1-.6-5.8-2.4-7.8-.1-.1-.2-.2-.3-.3-1.6-1.6-3.9-2.6-6.6-2.7l-8.5-.4s0,0,0,0h0ZM561.2,377.4c-2.4,0-4.5-.7-6.1-2.1-1.7-1.5-2.7-3.7-2.9-6.3l-.4-7.8,8,.4c2.6.1,4.8,1.1,6.3,2.7,1.6,1.8,2.3,4.2,2.1,7.1l-.3,5.3-5.3.5c-.5,0-1,0-1.4,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M548.8,345.8c1.6,1.6,2.6,3.9,2.7,6.5l.4,8.3c0,.1,0,.3-.1.4,0,0-.2.1-.4.1l-8.5-.4c-2.9-.1-5.3-1.2-6.9-3.1-1.8-2-2.6-4.6-2.4-7.8l.4-5.7c0-.2.2-.4.4-.4l5.7-.6c3.3-.3,6.1.4,8.2,2.2.2.1.3.3.5.5ZM551,360.1l-.4-7.8c-.1-2.7-1.1-4.8-2.9-6.3-1.9-1.6-4.5-2.3-7.5-2l-5.3.5-.3,5.3c-.2,2.9.6,5.3,2.1,7.1,1.5,1.7,3.7,2.6,6.3,2.7l8,.4Z" fill="#fff"/>
                      <path d="M541.6,343c-.5,0-1,0-1.5,0l-5.7.6c-.2,0-.4.2-.4.4l-.4,5.7c-.2,3.1.6,5.8,2.4,7.8,1.7,1.9,4.1,2.9,6.9,3.1l8.5.4s0,0,0,0c.1,0,.2,0,.3-.1,0,0,.1-.2.1-.4l-.4-8.3c-.1-2.7-1.1-4.9-2.7-6.5-.2-.2-.3-.3-.5-.5-1.8-1.5-4.1-2.3-6.7-2.3h0ZM551,360.1l-8-.4c-2.6-.1-4.8-1.1-6.3-2.7-1.6-1.8-2.3-4.2-2.1-7.1l.3-5.3,5.3-.5c.5,0,1,0,1.4,0,2.4,0,4.5.7,6.1,2.1,1.7,1.5,2.7,3.7,2.9,6.3l.4,7.8h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M535.5,344.1l32.3,32.3c.2.2.2.5,0,.7-.2.2-.5.2-.7,0l-32.3-32.3c-.2-.2-.2-.5,0-.7.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M535.2,344c-.1,0-.2,0-.3.1-.2.2-.2.5,0,.7l32.3,32.3c0,0,.2.1.3.1s.2,0,.3-.1c.2-.2.2-.5,0-.7l-32.3-32.3c0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M567.5,344.5c.2.2.2.5,0,.7l-31.9,31.9c-.2.2-.5.2-.7,0-.2-.2-.2-.5,0-.7l31.9-31.9c.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M567.2,344.4c-.1,0-.2,0-.3.1l-31.9,31.9c-.2.2-.2.5,0,.7,0,0,.2.1.3.1s.2,0,.3-.1l31.9-31.9c.2-.2.2-.5,0-.7,0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                </g>
              </g>
              <g opacity=".6">
                <g>
                  <g>
                    <g>
                      <path d="M602.4,240.1c0,0,.1.2.1.3l.6,5.7c.3,3.3-.4,6.1-2.2,8.2-1.7,1.9-4.1,3-7,3.2l-8.3.4c-.1,0-.3,0-.4-.1,0,0,0,0,0,0,0,0-.1-.2-.1-.3l.4-8.5c.1-2.9,1.2-5.3,3.1-6.9,2-1.8,4.6-2.6,7.8-2.4l5.7.4c.1,0,.2,0,.3.1ZM586.1,257l7.8-.4c2.7-.1,4.8-1.1,6.3-2.9,1.6-1.9,2.3-4.5,2-7.5l-.5-5.3-5.3-.3c-2.9-.2-5.3.6-7.1,2.1-1.7,1.5-2.6,3.7-2.7,6.3l-.4,8Z" fill="#fff"/>
                      <path d="M595.5,239.6c-2.7,0-5.1.8-6.9,2.4-1.9,1.7-2.9,4.1-3.1,6.9l-.4,8.5c0,.1,0,.3.1.3,0,0,0,0,0,0,0,0,.2.1.3.1s0,0,0,0l8.3-.4c2.9-.2,5.3-1.3,7-3.2,1.8-2.1,2.5-4.9,2.2-8.2l-.6-5.7c0-.1,0-.2-.1-.3,0,0-.2-.1-.3-.1l-5.7-.4c-.3,0-.6,0-.9,0h0ZM586.1,257l.4-8c.1-2.6,1.1-4.8,2.7-6.3,1.6-1.4,3.7-2.2,6.2-2.2s.6,0,.9,0l5.3.3.5,5.3c.3,3-.4,5.6-2,7.5-1.5,1.7-3.7,2.7-6.3,2.9l-7.8.4h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M585.8,257c0,0,.1.2.1.3l-.4,8.5c-.1,2.9-1.2,5.3-3.1,6.9-2,1.8-4.6,2.6-7.8,2.4l-5.7-.4c-.2,0-.4-.2-.4-.4l-.6-5.7c-.3-3.3.4-6.1,2.2-8.2,1.7-1.9,4.1-3,7-3.2l8.3-.4c.1,0,.3,0,.4.1ZM569.5,273.9l5.3.3c2.9.2,5.3-.6,7.1-2.1,1.7-1.5,2.6-3.7,2.7-6.3l.4-8-7.8.4c-2.7.1-4.8,1.1-6.3,2.9-1.6,1.9-2.3,4.5-2,7.5l.5,5.3Z" fill="#fff"/>
                      <path d="M585.5,256.8s0,0,0,0l-8.3.4c-2.9.2-5.3,1.3-7,3.2-1.8,2.1-2.5,4.9-2.2,8.2l.6,5.7c0,.2.2.4.4.4l5.7.4c.3,0,.6,0,.9,0,2.7,0,5.1-.8,6.9-2.4,1.9-1.7,2.9-4.1,3.1-6.9l.4-8.5c0-.1,0-.3-.1-.3,0,0-.2-.1-.3-.1h0ZM585,257.8l-.4,8c-.1,2.6-1.1,4.8-2.7,6.3-1.6,1.4-3.7,2.2-6.2,2.2s-.6,0-.9,0l-5.3-.3-.5-5.3c-.3-3,.4-5.6,2-7.5,1.5-1.7,3.7-2.7,6.3-2.9l7.8-.4h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M600.6,260.1c.1.1.2.2.3.3,1.8,2,2.6,4.6,2.4,7.8l-.4,5.7c0,.2-.2.4-.4.4l-5.7.6c-3.3.3-6.1-.4-8.2-2.2-1.9-1.7-3-4.1-3.2-7l-.4-8.3c0-.1,0-.3.1-.4,0,0,.2-.1.4-.1l8.5.4c2.7.1,4.9,1.1,6.6,2.7ZM602,273.5l.3-5.3c.2-2.9-.6-5.3-2.1-7.1-1.5-1.7-3.7-2.6-6.3-2.7l-8-.4.4,7.8c.1,2.7,1.1,4.8,2.9,6.3,1.9,1.6,4.5,2.3,7.5,2l5.3-.5Z" fill="#fff"/>
                      <path d="M585.5,257c-.1,0-.2,0-.3.1,0,0-.1.2-.1.4l.4,8.3c.2,2.9,1.3,5.3,3.2,7,1.8,1.5,4.1,2.3,6.7,2.3s1,0,1.5,0l5.7-.6c.2,0,.4-.2.4-.4l.4-5.7c.2-3.1-.6-5.8-2.4-7.8-.1-.1-.2-.2-.3-.3-1.6-1.6-3.9-2.6-6.6-2.7l-8.5-.4s0,0,0,0h0ZM595.3,274.1c-2.4,0-4.5-.7-6.1-2.1-1.7-1.5-2.7-3.7-2.9-6.3l-.4-7.8,8,.4c2.6.1,4.8,1.1,6.3,2.7,1.6,1.8,2.3,4.2,2.1,7.1l-.3,5.3-5.3.5c-.5,0-1,0-1.4,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M583,242.5c1.6,1.6,2.6,3.9,2.7,6.5l.4,8.3c0,.1,0,.3-.1.4,0,0-.2.1-.4.1l-8.5-.4c-2.9-.1-5.3-1.2-6.9-3.1-1.8-2-2.6-4.6-2.4-7.8l.4-5.7c0-.2.2-.4.4-.4l5.7-.6c3.3-.3,6.1.4,8.2,2.2.2.1.3.3.5.5ZM585.1,256.8l-.4-7.8c-.1-2.7-1.1-4.8-2.9-6.3-1.9-1.6-4.5-2.3-7.5-2l-5.3.5-.3,5.3c-.2,2.9.6,5.3,2.1,7.1,1.5,1.7,3.7,2.6,6.3,2.7l8,.4Z" fill="#fff"/>
                      <path d="M575.8,239.7c-.5,0-1,0-1.5,0l-5.7.6c-.2,0-.4.2-.4.4l-.4,5.7c-.2,3.1.6,5.8,2.4,7.8,1.7,1.9,4.1,2.9,6.9,3.1l8.5.4s0,0,0,0c.1,0,.2,0,.3-.1,0,0,.1-.2.1-.4l-.4-8.3c-.1-2.7-1.1-4.9-2.7-6.5-.2-.2-.3-.3-.5-.5-1.8-1.5-4.1-2.3-6.7-2.3h0ZM585.1,256.8l-8-.4c-2.6-.1-4.8-1.1-6.3-2.7-1.6-1.8-2.3-4.2-2.1-7.1l.3-5.3,5.3-.5c.5,0,1,0,1.4,0,2.4,0,4.5.7,6.1,2.1,1.7,1.5,2.7,3.7,2.9,6.3l.4,7.8h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M569.7,240.8l32.3,32.3c.2.2.2.5,0,.7-.2.2-.5.2-.7,0l-32.3-32.3c-.2-.2-.2-.5,0-.7.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M569.3,240.7c-.1,0-.2,0-.3.1-.2.2-.2.5,0,.7l32.3,32.3c0,0,.2.1.3.1s.2,0,.3-.1c.2-.2.2-.5,0-.7l-32.3-32.3c0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M601.7,241.2c.2.2.2.5,0,.7l-31.9,31.9c-.2.2-.5.2-.7,0-.2-.2-.2-.5,0-.7l31.9-31.9c.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M601.3,241.1c-.1,0-.2,0-.3.1l-31.9,31.9c-.2.2-.2.5,0,.7,0,0,.2.1.3.1s.2,0,.3-.1l31.9-31.9c.2-.2.2-.5,0-.7,0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M602.7,274.6c0,0,.1.2.1.3l.6,5.7c.3,3.3-.4,6.1-2.2,8.2-1.7,1.9-4.1,3-7,3.2l-8.3.4c-.1,0-.3,0-.4-.1,0,0,0,0,0,0,0,0-.1-.2-.1-.3l.4-8.5c.1-2.9,1.2-5.3,3.1-6.9,2-1.8,4.6-2.6,7.8-2.4l5.7.4c.1,0,.2,0,.3.1ZM586.4,291.5l7.8-.4c2.7-.1,4.8-1.1,6.3-2.9,1.6-1.9,2.3-4.5,2-7.5l-.5-5.3-5.3-.3c-2.9-.2-5.3.6-7.1,2.1-1.7,1.5-2.6,3.7-2.7,6.3l-.4,8Z" fill="#fff"/>
                      <path d="M595.8,274.1c-2.7,0-5.1.8-6.9,2.4-1.9,1.7-2.9,4.1-3.1,6.9l-.4,8.5c0,.1,0,.3.1.3s0,0,0,0c0,0,.2.1.3.1s0,0,0,0l8.3-.4c2.9-.1,5.3-1.3,7-3.2,1.8-2.1,2.5-4.9,2.2-8.2l-.6-5.7c0-.1,0-.2-.1-.3,0,0-.2-.1-.3-.1l-5.7-.4c-.3,0-.6,0-.9,0h0ZM586.4,291.5l.4-8c.1-2.6,1.1-4.8,2.7-6.3,1.6-1.4,3.7-2.2,6.2-2.2s.6,0,.9,0l5.3.3.5,5.3c.3,3-.4,5.6-2,7.5-1.5,1.7-3.7,2.7-6.3,2.9l-7.8.4h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M586.1,291.5c0,0,.1.2.1.3l-.4,8.5c-.1,2.9-1.2,5.3-3.1,6.9-2,1.8-4.6,2.6-7.8,2.4l-5.7-.4c-.2,0-.4-.2-.4-.4l-.6-5.7c-.3-3.3.4-6.1,2.2-8.2,1.7-1.9,4.1-3,7-3.2l8.3-.4c.1,0,.3,0,.4.1ZM569.8,308.3l5.3.3c2.9.2,5.3-.6,7.1-2.1,1.7-1.5,2.6-3.7,2.7-6.3l.4-8-7.8.4c-2.7.1-4.8,1.1-6.3,2.9-1.6,1.9-2.3,4.5-2,7.5l.5,5.3Z" fill="#fff"/>
                      <path d="M585.8,291.3s0,0,0,0l-8.3.4c-2.9.2-5.3,1.3-7,3.2-1.8,2.1-2.5,4.9-2.2,8.2l.6,5.7c0,.2.2.4.4.4l5.7.4c.3,0,.6,0,.9,0,2.7,0,5.1-.8,6.9-2.4,1.9-1.7,2.9-4.1,3.1-6.9l.4-8.5c0-.1,0-.3-.1-.3,0,0-.2-.1-.3-.1h0ZM585.3,292.3l-.4,8c-.1,2.6-1.1,4.8-2.7,6.3-1.6,1.4-3.7,2.2-6.2,2.2s-.6,0-.9,0l-5.3-.3-.5-5.3c-.3-3,.4-5.6,2-7.5,1.5-1.7,3.7-2.7,6.3-2.9l7.8-.4h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M600.9,294.6c.1.1.2.2.3.3,1.8,2,2.6,4.6,2.4,7.8l-.4,5.7c0,.2-.2.4-.4.4l-5.7.6c-3.3.3-6.1-.4-8.2-2.2-1.9-1.7-3-4.1-3.2-7l-.4-8.3c0-.1,0-.3.1-.4,0,0,.2-.1.4-.1l8.5.4c2.7.1,4.9,1.1,6.6,2.7ZM602.3,308l.3-5.3c.2-2.9-.6-5.3-2.1-7.1-1.5-1.7-3.7-2.6-6.3-2.7l-8-.4.4,7.8c.1,2.7,1.1,4.8,2.9,6.3,1.9,1.6,4.5,2.3,7.5,2l5.3-.5Z" fill="#fff"/>
                      <path d="M585.8,291.5c-.1,0-.2,0-.3.1,0,0-.1.2-.1.4l.4,8.3c.2,2.9,1.3,5.3,3.2,7,1.8,1.5,4.1,2.3,6.7,2.3s1,0,1.5,0l5.7-.6c.2,0,.4-.2.4-.4l.4-5.7c.2-3.1-.6-5.8-2.4-7.8-.1-.1-.2-.2-.3-.3-1.6-1.6-3.9-2.6-6.6-2.7l-8.5-.4s0,0,0,0h0ZM595.6,308.6c-2.4,0-4.5-.7-6.1-2.1-1.7-1.5-2.7-3.7-2.9-6.3l-.4-7.8,8,.4c2.6.1,4.8,1.1,6.3,2.7,1.6,1.8,2.3,4.2,2.1,7.1l-.3,5.3-5.3.5c-.5,0-1,0-1.4,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M583.3,277c1.6,1.6,2.6,3.9,2.7,6.5l.4,8.3c0,.1,0,.3-.1.4,0,0-.2.1-.4.1l-8.5-.4c-2.9-.1-5.3-1.2-6.9-3.1-1.8-2-2.6-4.6-2.4-7.8l.4-5.7c0-.2.2-.4.4-.4l5.7-.6c3.3-.3,6.1.4,8.2,2.2.2.1.3.3.5.5ZM585.5,291.3l-.4-7.8c-.1-2.7-1.1-4.8-2.9-6.3-1.9-1.6-4.5-2.3-7.5-2l-5.3.5-.3,5.3c-.2,2.9.6,5.3,2.1,7.1,1.5,1.7,3.7,2.6,6.3,2.7l8,.4Z" fill="#fff"/>
                      <path d="M576.1,274.2c-.5,0-1,0-1.5,0l-5.7.6c-.2,0-.4.2-.4.4l-.4,5.7c-.2,3.1.6,5.8,2.4,7.8,1.7,1.9,4.1,2.9,6.9,3.1l8.5.4s0,0,0,0c.1,0,.2,0,.3-.1,0,0,.1-.2.1-.4l-.4-8.3c-.1-2.7-1.1-4.9-2.7-6.5-.2-.2-.3-.3-.5-.5-1.8-1.5-4.1-2.3-6.7-2.3h0ZM585.5,291.3l-8-.4c-2.6-.1-4.8-1.1-6.3-2.7-1.6-1.8-2.3-4.2-2.1-7.1l.3-5.3,5.3-.5c.5,0,1,0,1.4,0,2.4,0,4.5.7,6.1,2.1,1.7,1.5,2.7,3.7,2.9,6.3l.4,7.8h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M570,275.3l32.3,32.3c.2.2.2.5,0,.7-.2.2-.5.2-.7,0l-32.3-32.3c-.2-.2-.2-.5,0-.7s.5-.2.7,0Z" fill="#fff"/>
                    <path d="M569.7,275.2c-.1,0-.2,0-.3.1-.2.2-.2.5,0,.7l32.3,32.3c0,0,.2.1.3.1s.2,0,.3-.1c.2-.2.2-.5,0-.7l-32.3-32.3c0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M602,275.7c.2.2.2.5,0,.7l-31.9,31.9c-.2.2-.5.2-.7,0-.2-.2-.2-.5,0-.7l31.9-31.9c.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M601.6,275.6c-.1,0-.2,0-.3.1l-31.9,31.9c-.2.2-.2.5,0,.7,0,0,.2.1.3.1s.2,0,.3-.1l31.9-31.9c.2-.2.2-.5,0-.7,0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M602.9,308.9c0,0,.1.2.1.3l.6,5.7c.3,3.3-.4,6.1-2.2,8.2-1.7,1.9-4.1,3-7,3.2l-8.3.4c-.1,0-.3,0-.4-.1h0c0,0-.1-.2-.1-.4l.4-8.5c.1-2.9,1.2-5.3,3.1-6.9,2-1.8,4.6-2.6,7.8-2.4l5.7.4c.1,0,.2,0,.3.1ZM586.7,325.8l7.8-.4c2.7-.1,4.8-1.1,6.3-2.9,1.6-1.9,2.3-4.5,2-7.5l-.5-5.3-5.3-.3c-2.9-.2-5.3.6-7.1,2.1-1.7,1.5-2.6,3.7-2.7,6.3l-.4,8Z" fill="#fff"/>
                      <path d="M596,308.4c-2.7,0-5.1.8-6.9,2.4-1.9,1.7-2.9,4.1-3.1,6.9l-.4,8.5c0,.1,0,.3.1.3h0c0,0,.2.1.3.1s0,0,0,0l8.3-.4c2.9-.1,5.3-1.3,7-3.2,1.8-2.1,2.5-4.9,2.2-8.2l-.6-5.7c0-.1,0-.2-.1-.3,0,0-.2-.1-.3-.1l-5.7-.4c-.3,0-.6,0-.9,0h0ZM586.7,325.8l.4-8c.1-2.6,1.1-4.8,2.7-6.3,1.6-1.4,3.7-2.2,6.2-2.2s.6,0,.9,0l5.3.3.5,5.3c.3,3-.4,5.6-2,7.5-1.5,1.7-3.7,2.7-6.3,2.9l-7.8.4h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M586.3,325.8c0,0,.1.2.1.3l-.4,8.5c-.1,2.9-1.2,5.3-3.1,6.9-2,1.8-4.6,2.6-7.8,2.4l-5.7-.4c-.2,0-.4-.2-.4-.4l-.6-5.7c-.3-3.3.4-6.1,2.2-8.2,1.7-1.9,4.1-3,7-3.2l8.3-.4c.1,0,.3,0,.4.1ZM570,342.7l5.3.3c2.9.2,5.3-.6,7.1-2.1,1.7-1.5,2.6-3.7,2.7-6.3l.4-8-7.8.4c-2.7.1-4.8,1.1-6.3,2.9-1.6,1.9-2.3,4.5-2,7.5l.5,5.3Z" fill="#fff"/>
                      <path d="M586,325.6s0,0,0,0l-8.3.4c-2.9.2-5.3,1.3-7,3.2-1.8,2.1-2.5,4.9-2.2,8.2l.6,5.7c0,.2.2.4.4.4l5.7.4c.3,0,.6,0,.9,0,2.7,0,5.1-.8,6.9-2.4,1.9-1.7,2.9-4.1,3.1-6.9l.4-8.5c0-.1,0-.3-.1-.3,0,0-.2-.1-.3-.1h0ZM585.5,326.6l-.4,8c-.1,2.6-1.1,4.8-2.7,6.3-1.6,1.4-3.7,2.2-6.2,2.2s-.6,0-.9,0l-5.3-.3-.5-5.3c-.3-3,.4-5.6,2-7.5,1.5-1.7,3.7-2.7,6.3-2.9l7.8-.4h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M601.1,328.9c.1.1.2.2.3.3,1.8,2,2.6,4.6,2.4,7.8l-.4,5.7c0,.2-.2.4-.4.4l-5.7.6c-3.3.3-6.1-.4-8.2-2.2-1.9-1.7-3-4.1-3.2-7l-.4-8.3c0-.1,0-.3.1-.4,0,0,.2-.1.4-.1l8.5.4c2.7.1,4.9,1.1,6.6,2.7ZM602.6,342.3l.3-5.3c.2-2.9-.6-5.3-2.1-7.1-1.5-1.7-3.7-2.6-6.3-2.7l-8-.4.4,7.8c.1,2.7,1.1,4.8,2.9,6.3,1.9,1.6,4.5,2.3,7.5,2l5.3-.5Z" fill="#fff"/>
                      <path d="M586,325.8c-.1,0-.2,0-.3.1,0,0-.1.2-.1.4l.4,8.3c.2,2.9,1.3,5.3,3.2,7,1.8,1.5,4.1,2.3,6.7,2.3s1,0,1.5,0l5.7-.6c.2,0,.4-.2.4-.4l.4-5.7c.2-3.1-.6-5.8-2.4-7.8-.1-.1-.2-.2-.3-.3-1.6-1.6-3.9-2.6-6.6-2.7l-8.5-.4s0,0,0,0h0ZM595.9,342.9c-2.4,0-4.5-.7-6.1-2.1-1.7-1.5-2.7-3.7-2.9-6.3l-.4-7.8,8,.4c2.6.1,4.8,1.1,6.3,2.7,1.6,1.8,2.3,4.2,2.1,7.1l-.3,5.3-5.3.5c-.5,0-1,0-1.4,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M583.5,311.3c1.6,1.6,2.6,3.9,2.7,6.5l.4,8.3c0,.1,0,.3-.1.4,0,0-.2.1-.4.1l-8.5-.4c-2.9-.1-5.3-1.2-6.9-3.1-1.8-2-2.6-4.6-2.4-7.8l.4-5.7c0-.2.2-.4.4-.4l5.7-.6c3.3-.3,6.1.4,8.2,2.2.2.1.3.3.5.5ZM585.7,325.6l-.4-7.8c-.1-2.7-1.1-4.8-2.9-6.3-1.9-1.6-4.5-2.3-7.5-2l-5.3.5-.3,5.3c-.2,2.9.6,5.3,2.1,7.1,1.5,1.7,3.7,2.6,6.3,2.7l8,.4Z" fill="#fff"/>
                      <path d="M576.3,308.5c-.5,0-1,0-1.5,0l-5.7.6c-.2,0-.4.2-.4.4l-.4,5.7c-.2,3.1.6,5.8,2.4,7.8,1.7,1.9,4.1,2.9,6.9,3.1l8.5.4s0,0,0,0c.1,0,.2,0,.3-.1,0,0,.1-.2.1-.4l-.4-8.3c-.1-2.7-1.1-4.9-2.7-6.5-.2-.2-.3-.3-.5-.5-1.8-1.5-4.1-2.3-6.7-2.3h0ZM585.7,325.6l-8-.4c-2.6-.1-4.8-1.1-6.3-2.7-1.6-1.8-2.3-4.2-2.1-7.1l.3-5.3,5.3-.5c.5,0,1,0,1.4,0,2.4,0,4.5.7,6.1,2.1,1.7,1.5,2.7,3.7,2.9,6.3l.4,7.8h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M570.2,309.6l32.3,32.3c.2.2.2.5,0,.7-.2.2-.5.2-.7,0l-32.3-32.3c-.2-.2-.2-.5,0-.7.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M569.9,309.5c-.1,0-.2,0-.3.1-.2.2-.2.5,0,.7l32.3,32.3c0,0,.2.1.3.1s.2,0,.3-.1c.2-.2.2-.5,0-.7l-32.3-32.3c0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M602.2,310c.2.2.2.5,0,.7l-31.9,31.9c-.2.2-.5.2-.7,0-.2-.2-.2-.5,0-.7l31.9-31.9c.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M601.9,309.9c-.1,0-.2,0-.3.1l-31.9,31.9c-.2.2-.2.5,0,.7,0,0,.2.1.3.1s.2,0,.3-.1l31.9-31.9c.2-.2.2-.5,0-.7,0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M603.2,343.4c0,0,.1.2.1.3l.6,5.7c.3,3.3-.4,6.1-2.2,8.2-1.7,1.9-4.1,3-7,3.2l-8.3.4c-.1,0-.3,0-.4-.1,0,0,0,0,0,0,0,0-.1-.2-.1-.3l.4-8.5c.1-2.9,1.2-5.3,3.1-6.9,2-1.8,4.6-2.6,7.8-2.4l5.7.4c.1,0,.2,0,.3.1ZM587,360.3l7.8-.4c2.7-.1,4.8-1.1,6.3-2.9,1.6-1.9,2.3-4.5,2-7.5l-.5-5.3-5.3-.3c-2.9-.2-5.3.6-7.1,2.1-1.7,1.5-2.6,3.7-2.7,6.3l-.4,8Z" fill="#fff"/>
                      <path d="M596.3,342.9c-2.7,0-5.1.8-6.9,2.4-1.9,1.7-2.9,4.1-3.1,6.9l-.4,8.5c0,.1,0,.3.1.3,0,0,0,0,0,0,0,0,.2.1.3.1s0,0,0,0l8.3-.4c2.9-.2,5.3-1.3,7-3.2,1.8-2.1,2.5-4.9,2.2-8.2l-.6-5.7c0-.1,0-.2-.1-.3,0,0-.2-.1-.3-.1l-5.7-.4c-.3,0-.6,0-.9,0h0ZM587,360.3l.4-8c.1-2.6,1.1-4.8,2.7-6.3,1.6-1.4,3.7-2.2,6.2-2.2s.6,0,.9,0l5.3.3.5,5.3c.3,3-.4,5.6-2,7.5-1.5,1.7-3.7,2.7-6.3,2.9l-7.8.4h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M586.6,360.3c0,0,.1.2.1.3l-.4,8.5c-.1,2.9-1.2,5.3-3.1,6.9-2,1.8-4.6,2.6-7.8,2.4l-5.7-.4c-.2,0-.4-.2-.4-.4l-.6-5.7c-.3-3.3.4-6.1,2.2-8.2,1.7-1.9,4.1-3,7-3.2l8.3-.4c.1,0,.3,0,.4.1ZM570.3,377.2l5.3.3c2.9.2,5.3-.6,7.1-2.1,1.7-1.5,2.6-3.7,2.7-6.3l.4-8-7.8.4c-2.7.1-4.8,1.1-6.3,2.9-1.6,1.9-2.3,4.5-2,7.5l.5,5.3Z" fill="#fff"/>
                      <path d="M586.3,360.1s0,0,0,0l-8.3.4c-2.9.1-5.3,1.3-7,3.2-1.8,2.1-2.5,4.9-2.2,8.2l.6,5.7c0,.2.2.4.4.4l5.7.4c.3,0,.6,0,.9,0,2.7,0,5.1-.8,6.9-2.4,1.9-1.7,2.9-4.1,3.1-6.9l.4-8.5c0-.1,0-.3-.1-.3,0,0-.2-.1-.3-.1h0ZM585.8,361.1l-.4,8c-.1,2.6-1.1,4.8-2.7,6.3-1.6,1.4-3.7,2.2-6.2,2.2s-.6,0-.9,0l-5.3-.3-.5-5.3c-.3-3,.4-5.6,2-7.5,1.5-1.7,3.7-2.7,6.3-2.9l7.8-.4h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M601.5,363.4c.1.1.2.2.3.3,1.8,2,2.6,4.6,2.4,7.8l-.4,5.7c0,.2-.2.4-.4.4l-5.7.6c-3.3.3-6.1-.4-8.2-2.2-1.9-1.7-3-4.1-3.2-7l-.4-8.3c0-.1,0-.3.1-.4,0,0,.2-.1.4-.1l8.5.4c2.7.1,4.9,1.1,6.6,2.7ZM602.9,376.8l.3-5.3c.2-2.9-.6-5.3-2.1-7.1-1.5-1.7-3.7-2.6-6.3-2.7l-8-.4.4,7.8c.1,2.7,1.1,4.8,2.9,6.3,1.9,1.6,4.5,2.3,7.5,2l5.3-.5Z" fill="#fff"/>
                      <path d="M586.3,360.3c-.1,0-.2,0-.3.1,0,0-.1.2-.1.4l.4,8.3c.2,2.9,1.3,5.3,3.2,7,1.8,1.5,4.1,2.3,6.7,2.3s1,0,1.5,0l5.7-.6c.2,0,.4-.2.4-.4l.4-5.7c.2-3.1-.6-5.8-2.4-7.8-.1-.1-.2-.2-.3-.3-1.6-1.6-3.9-2.6-6.6-2.7l-8.5-.4s0,0,0,0h0ZM596.2,377.4c-2.4,0-4.5-.7-6.1-2.1-1.7-1.5-2.7-3.7-2.9-6.3l-.4-7.8,8,.4c2.6.1,4.8,1.1,6.3,2.7,1.6,1.8,2.3,4.2,2.1,7.1l-.3,5.3-5.3.5c-.5,0-1,0-1.4,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M583.8,345.8c1.6,1.6,2.6,3.9,2.7,6.5l.4,8.3c0,.1,0,.3-.1.4,0,0-.2.1-.4.1l-8.5-.4c-2.9-.1-5.3-1.2-6.9-3.1-1.8-2-2.6-4.6-2.4-7.8l.4-5.7c0-.2.2-.4.4-.4l5.7-.6c3.3-.3,6.1.4,8.2,2.2.2.1.3.3.5.5ZM586,360.1l-.4-7.8c-.1-2.7-1.1-4.8-2.9-6.3-1.9-1.6-4.5-2.3-7.5-2l-5.3.5-.3,5.3c-.2,2.9.6,5.3,2.1,7.1,1.5,1.7,3.7,2.6,6.3,2.7l8,.4Z" fill="#fff"/>
                      <path d="M576.6,343c-.5,0-1,0-1.5,0l-5.7.6c-.2,0-.4.2-.4.4l-.4,5.7c-.2,3.1.6,5.8,2.4,7.8,1.7,1.9,4.1,2.9,6.9,3.1l8.5.4s0,0,0,0c.1,0,.2,0,.3-.1,0,0,.1-.2.1-.4l-.4-8.3c-.1-2.7-1.1-4.9-2.7-6.5-.2-.2-.3-.3-.5-.5-1.8-1.5-4.1-2.3-6.7-2.3h0ZM586,360.1l-8-.4c-2.6-.1-4.8-1.1-6.3-2.7-1.6-1.8-2.3-4.2-2.1-7.1l.3-5.3,5.3-.5c.5,0,1,0,1.4,0,2.4,0,4.5.7,6.1,2.1,1.7,1.5,2.7,3.7,2.9,6.3l.4,7.8h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M570.5,344.1l32.3,32.3c.2.2.2.5,0,.7-.2.2-.5.2-.7,0l-32.3-32.3c-.2-.2-.2-.5,0-.7.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M570.2,344c-.1,0-.2,0-.3.1-.2.2-.2.5,0,.7l32.3,32.3c0,0,.2.1.3.1s.2,0,.3-.1c.2-.2.2-.5,0-.7l-32.3-32.3c0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M602.5,344.5c.2.2.2.5,0,.7l-31.9,31.9c-.2.2-.5.2-.7,0-.2-.2-.2-.5,0-.7l31.9-31.9c.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M602.2,344.4c-.1,0-.2,0-.3.1l-31.9,31.9c-.2.2-.2.5,0,.7,0,0,.2.1.3.1s.2,0,.3-.1l31.9-31.9c.2-.2.2-.5,0-.7,0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                </g>
              </g>
              <g opacity=".6">
                <g>
                  <g>
                    <g>
                      <path d="M637.3,240.1c0,0,.1.2.1.3l.6,5.7c.3,3.3-.4,6.1-2.2,8.2-1.7,1.9-4.1,3-7,3.2l-8.3.4c-.1,0-.3,0-.4-.1,0,0,0,0,0,0,0,0-.1-.2-.1-.3l.4-8.5c.1-2.9,1.2-5.3,3.1-6.9,2-1.8,4.6-2.6,7.8-2.4l5.7.4c.1,0,.2,0,.3.1ZM621,257l7.8-.4c2.7-.1,4.8-1.1,6.3-2.9,1.6-1.9,2.3-4.5,2-7.5l-.5-5.3-5.3-.3c-2.9-.2-5.3.6-7.1,2.1-1.7,1.5-2.6,3.7-2.7,6.3l-.4,8Z" fill="#fff"/>
                      <path d="M630.3,239.6c-2.7,0-5.1.8-6.9,2.4-1.9,1.7-2.9,4.1-3.1,6.9l-.4,8.5c0,.1,0,.3.1.3,0,0,0,0,0,0,0,0,.2.1.3.1s0,0,0,0l8.3-.4c2.9-.2,5.3-1.3,7-3.2,1.8-2.1,2.5-4.9,2.2-8.2l-.6-5.7c0-.1,0-.2-.1-.3,0,0-.2-.1-.3-.1l-5.7-.4c-.3,0-.6,0-.9,0h0ZM621,257l.4-8c.1-2.6,1.1-4.8,2.7-6.3,1.6-1.4,3.7-2.2,6.2-2.2s.6,0,.9,0l5.3.3.5,5.3c.3,3-.4,5.6-2,7.5-1.5,1.7-3.7,2.7-6.3,2.9l-7.8.4h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M620.7,257c0,0,.1.2.1.3l-.4,8.5c-.1,2.9-1.2,5.3-3.1,6.9-2,1.8-4.6,2.6-7.8,2.4l-5.7-.4c-.2,0-.4-.2-.4-.4l-.6-5.7c-.3-3.3.4-6.1,2.2-8.2,1.7-1.9,4.1-3,7-3.2l8.3-.4c.1,0,.3,0,.4.1ZM604.3,273.9l5.3.3c2.9.2,5.3-.6,7.1-2.1,1.7-1.5,2.6-3.7,2.7-6.3l.4-8-7.8.4c-2.7.1-4.8,1.1-6.3,2.9-1.6,1.9-2.3,4.5-2,7.5l.5,5.3Z" fill="#fff"/>
                      <path d="M620.3,256.8s0,0,0,0l-8.3.4c-2.9.2-5.3,1.3-7,3.2-1.8,2.1-2.5,4.9-2.2,8.2l.6,5.7c0,.2.2.4.4.4l5.7.4c.3,0,.6,0,.9,0,2.7,0,5.1-.8,6.9-2.4,1.9-1.7,2.9-4.1,3.1-6.9l.4-8.5c0-.1,0-.3-.1-.3,0,0-.2-.1-.3-.1h0ZM619.8,257.8l-.4,8c-.1,2.6-1.1,4.8-2.7,6.3-1.6,1.4-3.7,2.2-6.2,2.2s-.6,0-.9,0l-5.3-.3-.5-5.3c-.3-3,.4-5.6,2-7.5,1.5-1.7,3.7-2.7,6.3-2.9l7.8-.4h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M635.5,260.1c.1.1.2.2.3.3,1.8,2,2.6,4.6,2.4,7.8l-.4,5.7c0,.2-.2.4-.4.4l-5.7.6c-3.3.3-6.1-.4-8.2-2.2-1.9-1.7-3-4.1-3.2-7l-.4-8.3c0-.1,0-.3.1-.4,0,0,.2-.1.4-.1l8.5.4c2.7.1,4.9,1.1,6.6,2.7ZM636.9,273.5l.3-5.3c.2-2.9-.6-5.3-2.1-7.1-1.5-1.7-3.7-2.6-6.3-2.7l-8-.4.4,7.8c.1,2.7,1.1,4.8,2.9,6.3,1.9,1.6,4.5,2.3,7.5,2l5.3-.5Z" fill="#fff"/>
                      <path d="M620.3,257c-.1,0-.2,0-.3.1,0,0-.1.2-.1.4l.4,8.3c.2,2.9,1.3,5.3,3.2,7,1.8,1.5,4.1,2.3,6.7,2.3s1,0,1.5,0l5.7-.6c.2,0,.4-.2.4-.4l.4-5.7c.2-3.1-.6-5.8-2.4-7.8-.1-.1-.2-.2-.3-.3-1.6-1.6-3.9-2.6-6.6-2.7l-8.5-.4s0,0,0,0h0ZM630.2,274.1c-2.4,0-4.5-.7-6.1-2.1-1.7-1.5-2.7-3.7-2.9-6.3l-.4-7.8,8,.4c2.6.1,4.8,1.1,6.3,2.7,1.6,1.8,2.3,4.2,2.1,7.1l-.3,5.3-5.3.5c-.5,0-1,0-1.4,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M617.8,242.5c1.6,1.6,2.6,3.9,2.7,6.5l.4,8.3c0,.1,0,.3-.1.4,0,0-.2.1-.4.1l-8.5-.4c-2.9-.1-5.3-1.2-6.9-3.1-1.8-2-2.6-4.6-2.4-7.8l.4-5.7c0-.2.2-.4.4-.4l5.7-.6c3.3-.3,6.1.4,8.2,2.2.2.1.3.3.5.5ZM620,256.8l-.4-7.8c-.1-2.7-1.1-4.8-2.9-6.3-1.9-1.6-4.5-2.3-7.5-2l-5.3.5-.3,5.3c-.2,2.9.6,5.3,2.1,7.1,1.5,1.7,3.7,2.6,6.3,2.7l8,.4Z" fill="#fff"/>
                      <path d="M610.6,239.7c-.5,0-1,0-1.5,0l-5.7.6c-.2,0-.4.2-.4.4l-.4,5.7c-.2,3.1.6,5.8,2.4,7.8,1.7,1.9,4.1,2.9,6.9,3.1l8.5.4s0,0,0,0c.1,0,.2,0,.3-.1,0,0,.1-.2.1-.4l-.4-8.3c-.1-2.7-1.1-4.9-2.7-6.5-.2-.2-.3-.3-.5-.5-1.8-1.5-4.1-2.3-6.7-2.3h0ZM620,256.8l-8-.4c-2.6-.1-4.8-1.1-6.3-2.7-1.6-1.8-2.3-4.2-2.1-7.1l.3-5.3,5.3-.5c.5,0,1,0,1.4,0,2.4,0,4.5.7,6.1,2.1,1.7,1.5,2.7,3.7,2.9,6.3l.4,7.8h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M604.5,240.8l32.3,32.3c.2.2.2.5,0,.7s-.5.2-.7,0l-32.3-32.3c-.2-.2-.2-.5,0-.7.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M604.2,240.7c-.1,0-.2,0-.3.1-.2.2-.2.5,0,.7l32.3,32.3c0,0,.2.1.3.1s.2,0,.3-.1c.2-.2.2-.5,0-.7l-32.3-32.3c0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M636.5,241.2c.2.2.2.5,0,.7l-31.9,31.9c-.2.2-.5.2-.7,0-.2-.2-.2-.5,0-.7l31.9-31.9c.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M636.2,241.1c-.1,0-.2,0-.3.1l-31.9,31.9c-.2.2-.2.5,0,.7,0,0,.2.1.3.1s.2,0,.3-.1l31.9-31.9c.2-.2.2-.5,0-.7,0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M637.6,274.6c0,0,.1.2.1.3l.6,5.7c.3,3.3-.4,6.1-2.2,8.2-1.7,1.9-4.1,3-7,3.2l-8.3.4c-.1,0-.3,0-.4-.1,0,0,0,0,0,0,0,0-.1-.2-.1-.3l.4-8.5c.1-2.9,1.2-5.3,3.1-6.9,2-1.8,4.6-2.6,7.8-2.4l5.7.4c.1,0,.2,0,.3.1ZM621.3,291.5l7.8-.4c2.7-.1,4.8-1.1,6.3-2.9,1.6-1.9,2.3-4.5,2-7.5l-.5-5.3-5.3-.3c-2.9-.2-5.3.6-7.1,2.1-1.7,1.5-2.6,3.7-2.7,6.3l-.4,8Z" fill="#fff"/>
                      <path d="M630.7,274.1c-2.7,0-5.1.8-6.9,2.4-1.9,1.7-2.9,4.1-3.1,6.9l-.4,8.5c0,.1,0,.3.1.3s0,0,0,0c0,0,.2.1.3.1s0,0,0,0l8.3-.4c2.9-.1,5.3-1.3,7-3.2,1.8-2.1,2.5-4.9,2.2-8.2l-.6-5.7c0-.1,0-.2-.1-.3,0,0-.2-.1-.3-.1l-5.7-.4c-.3,0-.6,0-.9,0h0ZM621.3,291.5l.4-8c.1-2.6,1.1-4.8,2.7-6.3,1.6-1.4,3.7-2.2,6.2-2.2s.6,0,.9,0l5.3.3.5,5.3c.3,3-.4,5.6-2,7.5-1.5,1.7-3.7,2.7-6.3,2.9l-7.8.4h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M621,291.5c0,0,.1.2.1.3l-.4,8.5c-.1,2.9-1.2,5.3-3.1,6.9-2,1.8-4.6,2.6-7.8,2.4l-5.7-.4c-.2,0-.4-.2-.4-.4l-.6-5.7c-.3-3.3.4-6.1,2.2-8.2,1.7-1.9,4.1-3,7-3.2l8.3-.4c.1,0,.3,0,.4.1ZM604.6,308.3l5.3.3c2.9.2,5.3-.6,7.1-2.1,1.7-1.5,2.6-3.7,2.7-6.3l.4-8-7.8.4c-2.7.1-4.8,1.1-6.3,2.9-1.6,1.9-2.3,4.5-2,7.5l.5,5.3Z" fill="#fff"/>
                      <path d="M620.6,291.3s0,0,0,0l-8.3.4c-2.9.2-5.3,1.3-7,3.2-1.8,2.1-2.5,4.9-2.2,8.2l.6,5.7c0,.2.2.4.4.4l5.7.4c.3,0,.6,0,.9,0,2.7,0,5.1-.8,6.9-2.4,1.9-1.7,2.9-4.1,3.1-6.9l.4-8.5c0-.1,0-.3-.1-.3,0,0-.2-.1-.3-.1h0ZM620.2,292.3l-.4,8c-.1,2.6-1.1,4.8-2.7,6.3-1.6,1.4-3.7,2.2-6.2,2.2s-.6,0-.9,0l-5.3-.3-.5-5.3c-.3-3,.4-5.6,2-7.5,1.5-1.7,3.7-2.7,6.3-2.9l7.8-.4h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M635.8,294.6c.1.1.2.2.3.3,1.8,2,2.6,4.6,2.4,7.8l-.4,5.7c0,.2-.2.4-.4.4l-5.7.6c-3.3.3-6.1-.4-8.2-2.2-1.9-1.7-3-4.1-3.2-7l-.4-8.3c0-.1,0-.3.1-.4,0,0,.2-.1.4-.1l8.5.4c2.7.1,4.9,1.1,6.6,2.7ZM637.2,308l.3-5.3c.2-2.9-.6-5.3-2.1-7.1-1.5-1.7-3.7-2.6-6.3-2.7l-8-.4.4,7.8c.1,2.7,1.1,4.8,2.9,6.3,1.9,1.6,4.5,2.3,7.5,2l5.3-.5Z" fill="#fff"/>
                      <path d="M620.6,291.5c-.1,0-.2,0-.3.1,0,0-.1.2-.1.4l.4,8.3c.2,2.9,1.3,5.3,3.2,7,1.8,1.5,4.1,2.3,6.7,2.3s1,0,1.5,0l5.7-.6c.2,0,.4-.2.4-.4l.4-5.7c.2-3.1-.6-5.8-2.4-7.8-.1-.1-.2-.2-.3-.3-1.6-1.6-3.9-2.6-6.6-2.7l-8.5-.4s0,0,0,0h0ZM630.5,308.6c-2.4,0-4.5-.7-6.1-2.1-1.7-1.5-2.7-3.7-2.9-6.3l-.4-7.8,8,.4c2.6.1,4.8,1.1,6.3,2.7,1.6,1.8,2.3,4.2,2.1,7.1l-.3,5.3-5.3.5c-.5,0-1,0-1.4,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M618.1,277c1.6,1.6,2.6,3.9,2.7,6.5l.4,8.3c0,.1,0,.3-.1.4,0,0-.2.1-.4.1l-8.5-.4c-2.9-.1-5.3-1.2-6.9-3.1-1.8-2-2.6-4.6-2.4-7.8l.4-5.7c0-.2.2-.4.4-.4l5.7-.6c3.3-.3,6.1.4,8.2,2.2.2.1.3.3.5.5ZM620.3,291.3l-.4-7.8c-.1-2.7-1.1-4.8-2.9-6.3-1.9-1.6-4.5-2.3-7.5-2l-5.3.5-.3,5.3c-.2,2.9.6,5.3,2.1,7.1,1.5,1.7,3.7,2.6,6.3,2.7l8,.4Z" fill="#fff"/>
                      <path d="M610.9,274.2c-.5,0-1,0-1.5,0l-5.7.6c-.2,0-.4.2-.4.4l-.4,5.7c-.2,3.1.6,5.8,2.4,7.8,1.7,1.9,4.1,2.9,6.9,3.1l8.5.4s0,0,0,0c.1,0,.2,0,.3-.1,0,0,.1-.2.1-.4l-.4-8.3c-.1-2.7-1.1-4.9-2.7-6.5-.2-.2-.3-.3-.5-.5-1.8-1.5-4.1-2.3-6.7-2.3h0ZM620.3,291.3l-8-.4c-2.6-.1-4.8-1.1-6.3-2.7-1.6-1.8-2.3-4.2-2.1-7.1l.3-5.3,5.3-.5c.5,0,1,0,1.4,0,2.4,0,4.5.7,6.1,2.1,1.7,1.5,2.7,3.7,2.9,6.3l.4,7.8h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M604.8,275.3l32.3,32.3c.2.2.2.5,0,.7-.2.2-.5.2-.7,0l-32.3-32.3c-.2-.2-.2-.5,0-.7s.5-.2.7,0Z" fill="#fff"/>
                    <path d="M604.5,275.2c-.1,0-.2,0-.3.1-.2.2-.2.5,0,.7l32.3,32.3c0,0,.2.1.3.1s.2,0,.3-.1c.2-.2.2-.5,0-.7l-32.3-32.3c0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M636.8,275.7c.2.2.2.5,0,.7l-31.9,31.9c-.2.2-.5.2-.7,0-.2-.2-.2-.5,0-.7l31.9-31.9c.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M636.5,275.6c-.1,0-.2,0-.3.1l-31.9,31.9c-.2.2-.2.5,0,.7,0,0,.2.1.3.1s.2,0,.3-.1l31.9-31.9c.2-.2.2-.5,0-.7,0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M637.8,308.9c0,0,.1.2.1.3l.6,5.7c.3,3.3-.4,6.1-2.2,8.2-1.7,1.9-4.1,3-7,3.2l-8.3.4c-.1,0-.3,0-.4-.1h0c0,0-.1-.2-.1-.4l.4-8.5c.1-2.9,1.2-5.3,3.1-6.9,2-1.8,4.6-2.6,7.8-2.4l5.7.4c.1,0,.2,0,.3.1ZM621.5,325.8l7.8-.4c2.7-.1,4.8-1.1,6.3-2.9,1.6-1.9,2.3-4.5,2-7.5l-.5-5.3-5.3-.3c-2.9-.2-5.3.6-7.1,2.1-1.7,1.5-2.6,3.7-2.7,6.3l-.4,8Z" fill="#fff"/>
                      <path d="M630.9,308.4c-2.7,0-5.1.8-6.9,2.4-1.9,1.7-2.9,4.1-3.1,6.9l-.4,8.5c0,.1,0,.3.1.3h0c0,0,.2.1.3.1s0,0,0,0l8.3-.4c2.9-.1,5.3-1.3,7-3.2,1.8-2.1,2.5-4.9,2.2-8.2l-.6-5.7c0-.1,0-.2-.1-.3,0,0-.2-.1-.3-.1l-5.7-.4c-.3,0-.6,0-.9,0h0ZM621.5,325.8l.4-8c.1-2.6,1.1-4.8,2.7-6.3,1.6-1.4,3.7-2.2,6.2-2.2s.6,0,.9,0l5.3.3.5,5.3c.3,3-.4,5.6-2,7.5-1.5,1.7-3.7,2.7-6.3,2.9l-7.8.4h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M621.2,325.8c0,0,.1.2.1.3l-.4,8.5c-.1,2.9-1.2,5.3-3.1,6.9-2,1.8-4.6,2.6-7.8,2.4l-5.7-.4c-.2,0-.4-.2-.4-.4l-.6-5.7c-.3-3.3.4-6.1,2.2-8.2,1.7-1.9,4.1-3,7-3.2l8.3-.4c.1,0,.3,0,.4.1ZM604.9,342.7l5.3.3c2.9.2,5.3-.6,7.1-2.1,1.7-1.5,2.6-3.7,2.7-6.3l.4-8-7.8.4c-2.7.1-4.8,1.1-6.3,2.9-1.6,1.9-2.3,4.5-2,7.5l.5,5.3Z" fill="#fff"/>
                      <path d="M620.9,325.6s0,0,0,0l-8.3.4c-2.9.2-5.3,1.3-7,3.2-1.8,2.1-2.5,4.9-2.2,8.2l.6,5.7c0,.2.2.4.4.4l5.7.4c.3,0,.6,0,.9,0,2.7,0,5.1-.8,6.9-2.4,1.9-1.7,2.9-4.1,3.1-6.9l.4-8.5c0-.1,0-.3-.1-.3,0,0-.2-.1-.3-.1h0ZM620.4,326.6l-.4,8c-.1,2.6-1.1,4.8-2.7,6.3-1.6,1.4-3.7,2.2-6.2,2.2s-.6,0-.9,0l-5.3-.3-.5-5.3c-.3-3,.4-5.6,2-7.5,1.5-1.7,3.7-2.7,6.3-2.9l7.8-.4h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M636,328.9c.1.1.2.2.3.3,1.8,2,2.6,4.6,2.4,7.8l-.4,5.7c0,.2-.2.4-.4.4l-5.7.6c-3.3.3-6.1-.4-8.2-2.2-1.9-1.7-3-4.1-3.2-7l-.4-8.3c0-.1,0-.3.1-.4,0,0,.2-.1.4-.1l8.5.4c2.7.1,4.9,1.1,6.6,2.7ZM637.4,342.3l.3-5.3c.2-2.9-.6-5.3-2.1-7.1-1.5-1.7-3.7-2.6-6.3-2.7l-8-.4.4,7.8c.1,2.7,1.1,4.8,2.9,6.3,1.9,1.6,4.5,2.3,7.5,2l5.3-.5Z" fill="#fff"/>
                      <path d="M620.9,325.8c-.1,0-.2,0-.3.1,0,0-.1.2-.1.4l.4,8.3c.2,2.9,1.3,5.3,3.2,7,1.8,1.5,4.1,2.3,6.7,2.3s1,0,1.5,0l5.7-.6c.2,0,.4-.2.4-.4l.4-5.7c.2-3.1-.6-5.8-2.4-7.8-.1-.1-.2-.2-.3-.3-1.6-1.6-3.9-2.6-6.6-2.7l-8.5-.4s0,0,0,0h0ZM630.7,342.9c-2.4,0-4.5-.7-6.1-2.1-1.7-1.5-2.7-3.7-2.9-6.3l-.4-7.8,8,.4c2.6.1,4.8,1.1,6.3,2.7,1.6,1.8,2.3,4.2,2.1,7.1l-.3,5.3-5.3.5c-.5,0-1,0-1.4,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M618.4,311.3c1.6,1.6,2.6,3.9,2.7,6.5l.4,8.3c0,.1,0,.3-.1.4,0,0-.2.1-.4.1l-8.5-.4c-2.9-.1-5.3-1.2-6.9-3.1-1.8-2-2.6-4.6-2.4-7.8l.4-5.7c0-.2.2-.4.4-.4l5.7-.6c3.3-.3,6.1.4,8.2,2.2.2.1.3.3.5.5ZM620.5,325.6l-.4-7.8c-.1-2.7-1.1-4.8-2.9-6.3-1.9-1.6-4.5-2.3-7.5-2l-5.3.5-.3,5.3c-.2,2.9.6,5.3,2.1,7.1,1.5,1.7,3.7,2.6,6.3,2.7l8,.4Z" fill="#fff"/>
                      <path d="M611.2,308.5c-.5,0-1,0-1.5,0l-5.7.6c-.2,0-.4.2-.4.4l-.4,5.7c-.2,3.1.6,5.8,2.4,7.8,1.7,1.9,4.1,2.9,6.9,3.1l8.5.4s0,0,0,0c.1,0,.2,0,.3-.1,0,0,.1-.2.1-.4l-.4-8.3c-.1-2.7-1.1-4.9-2.7-6.5-.2-.2-.3-.3-.5-.5-1.8-1.5-4.1-2.3-6.7-2.3h0ZM620.5,325.6l-8-.4c-2.6-.1-4.8-1.1-6.3-2.7-1.6-1.8-2.3-4.2-2.1-7.1l.3-5.3,5.3-.5c.5,0,1,0,1.4,0,2.4,0,4.5.7,6.1,2.1,1.7,1.5,2.7,3.7,2.9,6.3l.4,7.8h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M605.1,309.6l32.3,32.3c.2.2.2.5,0,.7-.2.2-.5.2-.7,0l-32.3-32.3c-.2-.2-.2-.5,0-.7.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M604.7,309.5c-.1,0-.2,0-.3.1-.2.2-.2.5,0,.7l32.3,32.3c0,0,.2.1.3.1s.2,0,.3-.1c.2-.2.2-.5,0-.7l-32.3-32.3c0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M637.1,310c.2.2.2.5,0,.7l-31.9,31.9c-.2.2-.5.2-.7,0-.2-.2-.2-.5,0-.7l31.9-31.9c.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M636.7,309.9c-.1,0-.2,0-.3.1l-31.9,31.9c-.2.2-.2.5,0,.7,0,0,.2.1.3.1s.2,0,.3-.1l31.9-31.9c.2-.2.2-.5,0-.7,0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M638.1,343.4c0,0,.1.2.1.3l.6,5.7c.3,3.3-.4,6.1-2.2,8.2-1.7,1.9-4.1,3-7,3.2l-8.3.4c-.1,0-.3,0-.4-.1,0,0,0,0,0,0,0,0-.1-.2-.1-.3l.4-8.5c.1-2.9,1.2-5.3,3.1-6.9,2-1.8,4.6-2.6,7.8-2.4l5.7.4c.1,0,.2,0,.3.1ZM621.8,360.3l7.8-.4c2.7-.1,4.8-1.1,6.3-2.9,1.6-1.9,2.3-4.5,2-7.5l-.5-5.3-5.3-.3c-2.9-.2-5.3.6-7.1,2.1-1.7,1.5-2.6,3.7-2.7,6.3l-.4,8Z" fill="#fff"/>
                      <path d="M631.2,342.9c-2.7,0-5.1.8-6.9,2.4-1.9,1.7-2.9,4.1-3.1,6.9l-.4,8.5c0,.1,0,.3.1.3,0,0,0,0,0,0,0,0,.2.1.3.1s0,0,0,0l8.3-.4c2.9-.2,5.3-1.3,7-3.2,1.8-2.1,2.5-4.9,2.2-8.2l-.6-5.7c0-.1,0-.2-.1-.3,0,0-.2-.1-.3-.1l-5.7-.4c-.3,0-.6,0-.9,0h0ZM621.8,360.3l.4-8c.1-2.6,1.1-4.8,2.7-6.3,1.6-1.4,3.7-2.2,6.2-2.2s.6,0,.9,0l5.3.3.5,5.3c.3,3-.4,5.6-2,7.5-1.5,1.7-3.7,2.7-6.3,2.9l-7.8.4h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M621.5,360.3c0,0,.1.2.1.3l-.4,8.5c-.1,2.9-1.2,5.3-3.1,6.9-2,1.8-4.6,2.6-7.8,2.4l-5.7-.4c-.2,0-.4-.2-.4-.4l-.6-5.7c-.3-3.3.4-6.1,2.2-8.2,1.7-1.9,4.1-3,7-3.2l8.3-.4c.1,0,.3,0,.4.1ZM605.2,377.2l5.3.3c2.9.2,5.3-.6,7.1-2.1,1.7-1.5,2.6-3.7,2.7-6.3l.4-8-7.8.4c-2.7.1-4.8,1.1-6.3,2.9-1.6,1.9-2.3,4.5-2,7.5l.5,5.3Z" fill="#fff"/>
                      <path d="M621.2,360.1s0,0,0,0l-8.3.4c-2.9.1-5.3,1.3-7,3.2-1.8,2.1-2.5,4.9-2.2,8.2l.6,5.7c0,.2.2.4.4.4l5.7.4c.3,0,.6,0,.9,0,2.7,0,5.1-.8,6.9-2.4,1.9-1.7,2.9-4.1,3.1-6.9l.4-8.5c0-.1,0-.3-.1-.3,0,0-.2-.1-.3-.1h0ZM620.7,361.1l-.4,8c-.1,2.6-1.1,4.8-2.7,6.3-1.6,1.4-3.7,2.2-6.2,2.2s-.6,0-.9,0l-5.3-.3-.5-5.3c-.3-3,.4-5.6,2-7.5,1.5-1.7,3.7-2.7,6.3-2.9l7.8-.4h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M636.3,363.4c.1.1.2.2.3.3,1.8,2,2.6,4.6,2.4,7.8l-.4,5.7c0,.2-.2.4-.4.4l-5.7.6c-3.3.3-6.1-.4-8.2-2.2-1.9-1.7-3-4.1-3.2-7l-.4-8.3c0-.1,0-.3.1-.4,0,0,.2-.1.4-.1l8.5.4c2.7.1,4.9,1.1,6.6,2.7ZM637.7,376.8l.3-5.3c.2-2.9-.6-5.3-2.1-7.1-1.5-1.7-3.7-2.6-6.3-2.7l-8-.4.4,7.8c.1,2.7,1.1,4.8,2.9,6.3,1.9,1.6,4.5,2.3,7.5,2l5.3-.5Z" fill="#fff"/>
                      <path d="M621.2,360.3c-.1,0-.2,0-.3.1,0,0-.1.2-.1.4l.4,8.3c.2,2.9,1.3,5.3,3.2,7,1.8,1.5,4.1,2.3,6.7,2.3s1,0,1.5,0l5.7-.6c.2,0,.4-.2.4-.4l.4-5.7c.2-3.1-.6-5.8-2.4-7.8-.1-.1-.2-.2-.3-.3-1.6-1.6-3.9-2.6-6.6-2.7l-8.5-.4s0,0,0,0h0ZM631,377.4c-2.4,0-4.5-.7-6.1-2.1-1.7-1.5-2.7-3.7-2.9-6.3l-.4-7.8,8,.4c2.6.1,4.8,1.1,6.3,2.7,1.6,1.8,2.3,4.2,2.1,7.1l-.3,5.3-5.3.5c-.5,0-1,0-1.4,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M618.7,345.8c1.6,1.6,2.6,3.9,2.7,6.5l.4,8.3c0,.1,0,.3-.1.4,0,0-.2.1-.4.1l-8.5-.4c-2.9-.1-5.3-1.2-6.9-3.1-1.8-2-2.6-4.6-2.4-7.8l.4-5.7c0-.2.2-.4.4-.4l5.7-.6c3.3-.3,6.1.4,8.2,2.2.2.1.3.3.5.5ZM620.9,360.1l-.4-7.8c-.1-2.7-1.1-4.8-2.9-6.3-1.9-1.6-4.5-2.3-7.5-2l-5.3.5-.3,5.3c-.2,2.9.6,5.3,2.1,7.1,1.5,1.7,3.7,2.6,6.3,2.7l8,.4Z" fill="#fff"/>
                      <path d="M611.5,343c-.5,0-1,0-1.5,0l-5.7.6c-.2,0-.4.2-.4.4l-.4,5.7c-.2,3.1.6,5.8,2.4,7.8,1.7,1.9,4.1,2.9,6.9,3.1l8.5.4s0,0,0,0c.1,0,.2,0,.3-.1,0,0,.1-.2.1-.4l-.4-8.3c-.1-2.7-1.1-4.9-2.7-6.5-.2-.2-.3-.3-.5-.5-1.8-1.5-4.1-2.3-6.7-2.3h0ZM620.9,360.1l-8-.4c-2.6-.1-4.8-1.1-6.3-2.7-1.6-1.8-2.3-4.2-2.1-7.1l.3-5.3,5.3-.5c.5,0,1,0,1.4,0,2.4,0,4.5.7,6.1,2.1,1.7,1.5,2.7,3.7,2.9,6.3l.4,7.8h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M605.4,344.1l32.3,32.3c.2.2.2.5,0,.7-.2.2-.5.2-.7,0l-32.3-32.3c-.2-.2-.2-.5,0-.7.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M605.1,344c-.1,0-.2,0-.3.1-.2.2-.2.5,0,.7l32.3,32.3c0,0,.2.1.3.1s.2,0,.3-.1c.2-.2.2-.5,0-.7l-32.3-32.3c0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M637.4,344.5c.2.2.2.5,0,.7l-31.9,31.9c-.2.2-.5.2-.7,0-.2-.2-.2-.5,0-.7l31.9-31.9c.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M637,344.4c-.1,0-.2,0-.3.1l-31.9,31.9c-.2.2-.2.5,0,.7,0,0,.2.1.3.1s.2,0,.3-.1l31.9-31.9c.2-.2.2-.5,0-.7,0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                </g>
              </g>
              <g opacity=".6">
                <g>
                  <g>
                    <g>
                      <path d="M706.9,240.1c0,0,.1.2.1.3l.6,5.7c.3,3.3-.4,6.1-2.2,8.2-1.7,1.9-4.1,3-7,3.2l-8.3.4c-.1,0-.3,0-.4-.1,0,0,0,0,0,0,0,0-.1-.2-.1-.3l.4-8.5c.1-2.9,1.2-5.3,3.1-6.9,2-1.8,4.6-2.6,7.8-2.4l5.7.4c.1,0,.2,0,.3.1ZM690.7,257l7.8-.4c2.7-.1,4.8-1.1,6.3-2.9,1.6-1.9,2.3-4.5,2-7.5l-.5-5.3-5.3-.3c-2.9-.2-5.3.6-7.1,2.1-1.7,1.5-2.6,3.7-2.7,6.3l-.4,8Z" fill="#fff"/>
                      <path d="M700,239.6c-2.7,0-5.1.8-6.9,2.4-1.9,1.7-2.9,4.1-3.1,6.9l-.4,8.5c0,.1,0,.3.1.3,0,0,0,0,0,0,0,0,.2.1.3.1s0,0,0,0l8.3-.4c2.9-.2,5.3-1.3,7-3.2,1.8-2.1,2.5-4.9,2.2-8.2l-.6-5.7c0-.1,0-.2-.1-.3,0,0-.2-.1-.3-.1l-5.7-.4c-.3,0-.6,0-.9,0h0ZM690.7,257l.4-8c.1-2.6,1.1-4.8,2.7-6.3,1.6-1.4,3.7-2.2,6.2-2.2s.6,0,.9,0l5.3.3.5,5.3c.3,3-.4,5.6-2,7.5-1.5,1.7-3.7,2.7-6.3,2.9l-7.8.4h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M690.4,257c0,0,.1.2.1.3l-.4,8.5c-.1,2.9-1.2,5.3-3.1,6.9-2,1.8-4.6,2.6-7.8,2.4l-5.7-.4c-.2,0-.4-.2-.4-.4l-.6-5.7c-.3-3.3.4-6.1,2.2-8.2,1.7-1.9,4.1-3,7-3.2l8.3-.4c.1,0,.3,0,.4.1ZM674,273.9l5.3.3c2.9.2,5.3-.6,7.1-2.1,1.7-1.5,2.6-3.7,2.7-6.3l.4-8-7.8.4c-2.7.1-4.8,1.1-6.3,2.9-1.6,1.9-2.3,4.5-2,7.5l.5,5.3Z" fill="#fff"/>
                      <path d="M690,256.8s0,0,0,0l-8.3.4c-2.9.2-5.3,1.3-7,3.2-1.8,2.1-2.5,4.9-2.2,8.2l.6,5.7c0,.2.2.4.4.4l5.7.4c.3,0,.6,0,.9,0,2.7,0,5.1-.8,6.9-2.4,1.9-1.7,2.9-4.1,3.1-6.9l.4-8.5c0-.1,0-.3-.1-.3,0,0-.2-.1-.3-.1h0ZM689.5,257.8l-.4,8c-.1,2.6-1.1,4.8-2.7,6.3-1.6,1.4-3.7,2.2-6.2,2.2s-.6,0-.9,0l-5.3-.3-.5-5.3c-.3-3,.4-5.6,2-7.5,1.5-1.7,3.7-2.7,6.3-2.9l7.8-.4h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M705.2,260.1c.1.1.2.2.3.3,1.8,2,2.6,4.6,2.4,7.8l-.4,5.7c0,.2-.2.4-.4.4l-5.7.6c-3.3.3-6.1-.4-8.2-2.2-1.9-1.7-3-4.1-3.2-7l-.4-8.3c0-.1,0-.3.1-.4,0,0,.2-.1.4-.1l8.5.4c2.7.1,4.9,1.1,6.6,2.7ZM706.6,273.5l.3-5.3c.2-2.9-.6-5.3-2.1-7.1-1.5-1.7-3.7-2.6-6.3-2.7l-8-.4.4,7.8c.1,2.7,1.1,4.8,2.9,6.3,1.9,1.6,4.5,2.3,7.5,2l5.3-.5Z" fill="#fff"/>
                      <path d="M690,257c-.1,0-.2,0-.3.1,0,0-.1.2-.1.4l.4,8.3c.2,2.9,1.3,5.3,3.2,7,1.8,1.5,4.1,2.3,6.7,2.3s1,0,1.5,0l5.7-.6c.2,0,.4-.2.4-.4l.4-5.7c.2-3.1-.6-5.8-2.4-7.8-.1-.1-.2-.2-.3-.3-1.6-1.6-3.9-2.6-6.6-2.7l-8.5-.4s0,0,0,0h0ZM699.9,274.1c-2.4,0-4.5-.7-6.1-2.1-1.7-1.5-2.7-3.7-2.9-6.3l-.4-7.8,8,.4c2.6.1,4.8,1.1,6.3,2.7,1.6,1.8,2.3,4.2,2.1,7.1l-.3,5.3-5.3.5c-.5,0-1,0-1.4,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M687.5,242.5c1.6,1.6,2.6,3.9,2.7,6.5l.4,8.3c0,.1,0,.3-.1.4,0,0-.2.1-.4.1l-8.5-.4c-2.9-.1-5.3-1.2-6.9-3.1-1.8-2-2.6-4.6-2.4-7.8l.4-5.7c0-.2.2-.4.4-.4l5.7-.6c3.3-.3,6.1.4,8.2,2.2.2.1.3.3.5.5ZM689.7,256.8l-.4-7.8c-.1-2.7-1.1-4.8-2.9-6.3-1.9-1.6-4.5-2.3-7.5-2l-5.3.5-.3,5.3c-.2,2.9.6,5.3,2.1,7.1,1.5,1.7,3.7,2.6,6.3,2.7l8,.4Z" fill="#fff"/>
                      <path d="M680.3,239.7c-.5,0-1,0-1.5,0l-5.7.6c-.2,0-.4.2-.4.4l-.4,5.7c-.2,3.1.6,5.8,2.4,7.8,1.7,1.9,4.1,2.9,6.9,3.1l8.5.4s0,0,0,0c.1,0,.2,0,.3-.1,0,0,.1-.2.1-.4l-.4-8.3c-.1-2.7-1.1-4.9-2.7-6.5-.2-.2-.3-.3-.5-.5-1.8-1.5-4.1-2.3-6.7-2.3h0ZM689.7,256.8l-8-.4c-2.6-.1-4.8-1.1-6.3-2.7-1.6-1.8-2.3-4.2-2.1-7.1l.3-5.3,5.3-.5c.5,0,1,0,1.4,0,2.4,0,4.5.7,6.1,2.1,1.7,1.5,2.7,3.7,2.9,6.3l.4,7.8h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M674.2,240.8l32.3,32.3c.2.2.2.5,0,.7-.2.2-.5.2-.7,0l-32.3-32.3c-.2-.2-.2-.5,0-.7.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M673.9,240.7c-.1,0-.2,0-.3.1-.2.2-.2.5,0,.7l32.3,32.3c0,0,.2.1.3.1s.2,0,.3-.1c.2-.2.2-.5,0-.7l-32.3-32.3c0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M706.2,241.2c.2.2.2.5,0,.7l-31.9,31.9c-.2.2-.5.2-.7,0s-.2-.5,0-.7l31.9-31.9c.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M705.9,241.1c-.1,0-.2,0-.3.1l-31.9,31.9c-.2.2-.2.5,0,.7,0,0,.2.1.3.1s.2,0,.3-.1l31.9-31.9c.2-.2.2-.5,0-.7,0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M707.3,274.6c0,0,.1.2.1.3l.6,5.7c.3,3.3-.4,6.1-2.2,8.2-1.7,1.9-4.1,3-7,3.2l-8.3.4c-.1,0-.3,0-.4-.1h0c0,0-.1-.2-.1-.4l.4-8.5c.1-2.9,1.2-5.3,3.1-6.9,2-1.8,4.6-2.6,7.8-2.4l5.7.4c.1,0,.2,0,.3.1ZM691,291.5l7.8-.4c2.7-.1,4.8-1.1,6.3-2.9,1.6-1.9,2.3-4.5,2-7.5l-.5-5.3-5.3-.3c-2.9-.2-5.3.6-7.1,2.1-1.7,1.5-2.6,3.7-2.7,6.3l-.4,8Z" fill="#fff"/>
                      <path d="M700.3,274.1c-2.7,0-5.1.8-6.9,2.4-1.9,1.7-2.9,4.1-3.1,6.9l-.4,8.5c0,.1,0,.3.1.3s0,0,0,0c0,0,.2.1.3.1s0,0,0,0l8.3-.4c2.9-.1,5.3-1.3,7-3.2,1.8-2.1,2.5-4.9,2.2-8.2l-.6-5.7c0-.1,0-.2-.1-.3,0,0-.2-.1-.3-.1l-5.7-.4c-.3,0-.6,0-.9,0h0ZM691,291.5l.4-8c.1-2.6,1.1-4.8,2.7-6.3,1.6-1.4,3.7-2.2,6.2-2.2s.6,0,.9,0l5.3.3.5,5.3c.3,3-.4,5.6-2,7.5-1.5,1.7-3.7,2.7-6.3,2.9l-7.8.4h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M690.7,291.5c0,0,.1.2.1.3l-.4,8.5c-.1,2.9-1.2,5.3-3.1,6.9-2,1.8-4.6,2.6-7.8,2.4l-5.7-.4c-.2,0-.4-.2-.4-.4l-.6-5.7c-.3-3.3.4-6.1,2.2-8.2,1.7-1.9,4.1-3,7-3.2l8.3-.4c.1,0,.3,0,.4.1ZM674.3,308.3l5.3.3c2.9.2,5.3-.6,7.1-2.1,1.7-1.5,2.6-3.7,2.7-6.3l.4-8-7.8.4c-2.7.1-4.8,1.1-6.3,2.9-1.6,1.9-2.3,4.5-2,7.5l.5,5.3Z" fill="#fff"/>
                      <path d="M690.3,291.3s0,0,0,0l-8.3.4c-2.9.2-5.3,1.3-7,3.2-1.8,2.1-2.5,4.9-2.2,8.2l.6,5.7c0,.2.2.4.4.4l5.7.4c.3,0,.6,0,.9,0,2.7,0,5.1-.8,6.9-2.4,1.9-1.7,2.9-4.1,3.1-6.9l.4-8.5c0-.1,0-.3-.1-.3,0,0-.2-.1-.3-.1h0ZM689.8,292.3l-.4,8c-.1,2.6-1.1,4.8-2.7,6.3-1.6,1.4-3.7,2.2-6.2,2.2s-.6,0-.9,0l-5.3-.3-.5-5.3c-.3-3,.4-5.6,2-7.5,1.5-1.7,3.7-2.7,6.3-2.9l7.8-.4h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M705.5,294.6c.1.1.2.2.3.3,1.8,2,2.6,4.6,2.4,7.8l-.4,5.7c0,.2-.2.4-.4.4l-5.7.6c-3.3.3-6.1-.4-8.2-2.2-1.9-1.7-3-4.1-3.2-7l-.4-8.3c0-.1,0-.3.1-.4,0,0,.2-.1.4-.1l8.5.4c2.7.1,4.9,1.1,6.6,2.7ZM706.9,308l.3-5.3c.2-2.9-.6-5.3-2.1-7.1-1.5-1.7-3.7-2.6-6.3-2.7l-8-.4.4,7.8c.1,2.7,1.1,4.8,2.9,6.3,1.9,1.6,4.5,2.3,7.5,2l5.3-.5Z" fill="#fff"/>
                      <path d="M690.3,291.5c-.1,0-.2,0-.3.1,0,0-.1.2-.1.4l.4,8.3c.2,2.9,1.3,5.3,3.2,7,1.8,1.5,4.1,2.3,6.7,2.3s1,0,1.5,0l5.7-.6c.2,0,.4-.2.4-.4l.4-5.7c.2-3.1-.6-5.8-2.4-7.8-.1-.1-.2-.2-.3-.3-1.6-1.6-3.9-2.6-6.6-2.7l-8.5-.4s0,0,0,0h0ZM700.2,308.6c-2.4,0-4.5-.7-6.1-2.1-1.7-1.5-2.7-3.7-2.9-6.3l-.4-7.8,8,.4c2.6.1,4.8,1.1,6.3,2.7,1.6,1.8,2.3,4.2,2.1,7.1l-.3,5.3-5.3.5c-.5,0-1,0-1.4,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M687.8,277c1.6,1.6,2.6,3.9,2.7,6.5l.4,8.3c0,.1,0,.3-.1.4,0,0-.2.1-.4.1l-8.5-.4c-2.9-.1-5.3-1.2-6.9-3.1-1.8-2-2.6-4.6-2.4-7.8l.4-5.7c0-.2.2-.4.4-.4l5.7-.6c3.3-.3,6.1.4,8.2,2.2.2.1.3.3.5.5ZM690,291.3l-.4-7.8c-.1-2.7-1.1-4.8-2.9-6.3-1.9-1.6-4.5-2.3-7.5-2l-5.3.5-.3,5.3c-.2,2.9.6,5.3,2.1,7.1,1.5,1.7,3.7,2.6,6.3,2.7l8,.4Z" fill="#fff"/>
                      <path d="M680.6,274.2c-.5,0-1,0-1.5,0l-5.7.6c-.2,0-.4.2-.4.4l-.4,5.7c-.2,3.1.6,5.8,2.4,7.8,1.7,1.9,4.1,2.9,6.9,3.1l8.5.4s0,0,0,0c.1,0,.2,0,.3-.1,0,0,.1-.2.1-.4l-.4-8.3c-.1-2.7-1.1-4.9-2.7-6.5-.2-.2-.3-.3-.5-.5-1.8-1.5-4.1-2.3-6.7-2.3h0ZM690,291.3l-8-.4c-2.6-.1-4.8-1.1-6.3-2.7-1.6-1.8-2.3-4.2-2.1-7.1l.3-5.3,5.3-.5c.5,0,1,0,1.4,0,2.4,0,4.5.7,6.1,2.1,1.7,1.5,2.7,3.7,2.9,6.3l.4,7.8h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M674.5,275.3l32.3,32.3c.2.2.2.5,0,.7-.2.2-.5.2-.7,0l-32.3-32.3c-.2-.2-.2-.5,0-.7s.5-.2.7,0Z" fill="#fff"/>
                    <path d="M674.2,275.2c-.1,0-.2,0-.3.1-.2.2-.2.5,0,.7l32.3,32.3c0,0,.2.1.3.1s.2,0,.3-.1c.2-.2.2-.5,0-.7l-32.3-32.3c0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M706.5,275.7c.2.2.2.5,0,.7l-31.9,31.9c-.2.2-.5.2-.7,0-.2-.2-.2-.5,0-.7l31.9-31.9c.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M706.2,275.6c-.1,0-.2,0-.3.1l-31.9,31.9c-.2.2-.2.5,0,.7,0,0,.2.1.3.1s.2,0,.3-.1l31.9-31.9c.2-.2.2-.5,0-.7,0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M707.5,308.9c0,0,.1.2.1.3l.6,5.7c.3,3.3-.4,6.1-2.2,8.2-1.7,1.9-4.1,3-7,3.2l-8.3.4c-.1,0-.3,0-.4-.1,0,0,0,0,0,0,0,0-.1-.2-.1-.3l.4-8.5c.1-2.9,1.2-5.3,3.1-6.9,2-1.8,4.6-2.6,7.8-2.4l5.7.4c.1,0,.2,0,.3.1ZM691.2,325.8l7.8-.4c2.7-.1,4.8-1.1,6.3-2.9,1.6-1.9,2.3-4.5,2-7.5l-.5-5.3-5.3-.3c-2.9-.2-5.3.6-7.1,2.1-1.7,1.5-2.6,3.7-2.7,6.3l-.4,8Z" fill="#fff"/>
                      <path d="M700.6,308.4c-2.7,0-5.1.8-6.9,2.4-1.9,1.7-2.9,4.1-3.1,6.9l-.4,8.5c0,.1,0,.3.1.3s0,0,0,0c0,0,.2.1.3.1s0,0,0,0l8.3-.4c2.9-.1,5.3-1.3,7-3.2,1.8-2.1,2.5-4.9,2.2-8.2l-.6-5.7c0-.1,0-.2-.1-.3,0,0-.2-.1-.3-.1l-5.7-.4c-.3,0-.6,0-.9,0h0ZM691.2,325.8l.4-8c.1-2.6,1.1-4.8,2.7-6.3,1.6-1.4,3.7-2.2,6.2-2.2s.6,0,.9,0l5.3.3.5,5.3c.3,3-.4,5.6-2,7.5-1.5,1.7-3.7,2.7-6.3,2.9l-7.8.4h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M690.9,325.8c0,0,.1.2.1.3l-.4,8.5c-.1,2.9-1.2,5.3-3.1,6.9-2,1.8-4.6,2.6-7.8,2.4l-5.7-.4c-.2,0-.4-.2-.4-.4l-.6-5.7c-.3-3.3.4-6.1,2.2-8.2,1.7-1.9,4.1-3,7-3.2l8.3-.4c.1,0,.3,0,.4.1ZM674.6,342.7l5.3.3c2.9.2,5.3-.6,7.1-2.1,1.7-1.5,2.6-3.7,2.7-6.3l.4-8-7.8.4c-2.7.1-4.8,1.1-6.3,2.9-1.6,1.9-2.3,4.5-2,7.5l.5,5.3Z" fill="#fff"/>
                      <path d="M690.6,325.6s0,0,0,0l-8.3.4c-2.9.2-5.3,1.3-7,3.2-1.8,2.1-2.5,4.9-2.2,8.2l.6,5.7c0,.2.2.4.4.4l5.7.4c.3,0,.6,0,.9,0,2.7,0,5.1-.8,6.9-2.4,1.9-1.7,2.9-4.1,3.1-6.9l.4-8.5c0-.1,0-.3-.1-.3,0,0-.2-.1-.3-.1h0ZM690.1,326.6l-.4,8c-.1,2.6-1.1,4.8-2.7,6.3-1.6,1.4-3.7,2.2-6.2,2.2s-.6,0-.9,0l-5.3-.3-.5-5.3c-.3-3,.4-5.6,2-7.5,1.5-1.7,3.7-2.7,6.3-2.9l7.8-.4h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M705.7,328.9c.1.1.2.2.3.3,1.8,2,2.6,4.6,2.4,7.8l-.4,5.7c0,.2-.2.4-.4.4l-5.7.6c-3.3.3-6.1-.4-8.2-2.2-1.9-1.7-3-4.1-3.2-7l-.4-8.3c0-.1,0-.3.1-.4,0,0,.2-.1.4-.1l8.5.4c2.7.1,4.9,1.1,6.6,2.7ZM707.1,342.3l.3-5.3c.2-2.9-.6-5.3-2.1-7.1-1.5-1.7-3.7-2.6-6.3-2.7l-8-.4.4,7.8c.1,2.7,1.1,4.8,2.9,6.3,1.9,1.6,4.5,2.3,7.5,2l5.3-.5Z" fill="#fff"/>
                      <path d="M690.6,325.8c-.1,0-.2,0-.3.1,0,0-.1.2-.1.4l.4,8.3c.2,2.9,1.3,5.3,3.2,7,1.8,1.5,4.1,2.3,6.7,2.3s1,0,1.5,0l5.7-.6c.2,0,.4-.2.4-.4l.4-5.7c.2-3.1-.6-5.8-2.4-7.8-.1-.1-.2-.2-.3-.3-1.6-1.6-3.9-2.6-6.6-2.7l-8.5-.4s0,0,0,0h0ZM700.4,342.9c-2.4,0-4.5-.7-6.1-2.1-1.7-1.5-2.7-3.7-2.9-6.3l-.4-7.8,8,.4c2.6.1,4.8,1.1,6.3,2.7,1.6,1.8,2.3,4.2,2.1,7.1l-.3,5.3-5.3.5c-.5,0-1,0-1.4,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M688.1,311.3c1.6,1.6,2.6,3.9,2.7,6.5l.4,8.3c0,.1,0,.3-.1.4,0,0-.2.1-.4.1l-8.5-.4c-2.9-.1-5.3-1.2-6.9-3.1-1.8-2-2.6-4.6-2.4-7.8l.4-5.7c0-.2.2-.4.4-.4l5.7-.6c3.3-.3,6.1.4,8.2,2.2.2.1.3.3.5.5ZM690.2,325.6l-.4-7.8c-.1-2.7-1.1-4.8-2.9-6.3-1.9-1.6-4.5-2.3-7.5-2l-5.3.5-.3,5.3c-.2,2.9.6,5.3,2.1,7.1,1.5,1.7,3.7,2.6,6.3,2.7l8,.4Z" fill="#fff"/>
                      <path d="M680.9,308.5c-.5,0-1,0-1.5,0l-5.7.6c-.2,0-.4.2-.4.4l-.4,5.7c-.2,3.1.6,5.8,2.4,7.8,1.7,1.9,4.1,2.9,6.9,3.1l8.5.4s0,0,0,0c.1,0,.2,0,.3-.1,0,0,.1-.2.1-.4l-.4-8.3c-.1-2.7-1.1-4.9-2.7-6.5-.2-.2-.3-.3-.5-.5-1.8-1.5-4.1-2.3-6.7-2.3h0ZM690.2,325.6l-8-.4c-2.6-.1-4.8-1.1-6.3-2.7-1.6-1.8-2.3-4.2-2.1-7.1l.3-5.3,5.3-.5c.5,0,1,0,1.4,0,2.4,0,4.5.7,6.1,2.1,1.7,1.5,2.7,3.7,2.9,6.3l.4,7.8h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M674.8,309.6l32.3,32.3c.2.2.2.5,0,.7-.2.2-.5.2-.7,0l-32.3-32.3c-.2-.2-.2-.5,0-.7.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M674.4,309.5c-.1,0-.2,0-.3.1-.2.2-.2.5,0,.7l32.3,32.3c0,0,.2.1.3.1s.2,0,.3-.1c.2-.2.2-.5,0-.7l-32.3-32.3c0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M706.7,310c.2.2.2.5,0,.7l-31.9,31.9c-.2.2-.5.2-.7,0s-.2-.5,0-.7l31.9-31.9c.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M706.4,309.9c-.1,0-.2,0-.3.1l-31.9,31.9c-.2.2-.2.5,0,.7,0,0,.2.1.3.1s.2,0,.3-.1l31.9-31.9c.2-.2.2-.5,0-.7,0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M707.8,343.4c0,0,.1.2.1.3l.6,5.7c.3,3.3-.4,6.1-2.2,8.2-1.7,1.9-4.1,3-7,3.2l-8.3.4c-.1,0-.3,0-.4-.1,0,0,0,0,0,0,0,0-.1-.2-.1-.3l.4-8.5c.1-2.9,1.2-5.3,3.1-6.9,2-1.8,4.6-2.6,7.8-2.4l5.7.4c.1,0,.2,0,.3.1ZM691.5,360.3l7.8-.4c2.7-.1,4.8-1.1,6.3-2.9,1.6-1.9,2.3-4.5,2-7.5l-.5-5.3-5.3-.3c-2.9-.2-5.3.6-7.1,2.1-1.7,1.5-2.6,3.7-2.7,6.3l-.4,8Z" fill="#fff"/>
                      <path d="M700.9,342.9c-2.7,0-5.1.8-6.9,2.4-1.9,1.7-2.9,4.1-3.1,6.9l-.4,8.5c0,.1,0,.3.1.3,0,0,0,0,0,0,0,0,.2.1.3.1s0,0,0,0l8.3-.4c2.9-.2,5.3-1.3,7-3.2,1.8-2.1,2.5-4.9,2.2-8.2l-.6-5.7c0-.1,0-.2-.1-.3,0,0-.2-.1-.3-.1l-5.7-.4c-.3,0-.6,0-.9,0h0ZM691.5,360.3l.4-8c.1-2.6,1.1-4.8,2.7-6.3,1.6-1.4,3.7-2.2,6.2-2.2s.6,0,.9,0l5.3.3.5,5.3c.3,3-.4,5.6-2,7.5-1.5,1.7-3.7,2.7-6.3,2.9l-7.8.4h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M691.2,360.3c0,0,.1.2.1.3l-.4,8.5c-.1,2.9-1.2,5.3-3.1,6.9-2,1.8-4.6,2.6-7.8,2.4l-5.7-.4c-.2,0-.4-.2-.4-.4l-.6-5.7c-.3-3.3.4-6.1,2.2-8.2,1.7-1.9,4.1-3,7-3.2l8.3-.4c.1,0,.3,0,.4.1ZM674.9,377.2l5.3.3c2.9.2,5.3-.6,7.1-2.1,1.7-1.5,2.6-3.7,2.7-6.3l.4-8-7.8.4c-2.7.1-4.8,1.1-6.3,2.9-1.6,1.9-2.3,4.5-2,7.5l.5,5.3Z" fill="#fff"/>
                      <path d="M690.9,360.1s0,0,0,0l-8.3.4c-2.9.1-5.3,1.3-7,3.2-1.8,2.1-2.5,4.9-2.2,8.2l.6,5.7c0,.2.2.4.4.4l5.7.4c.3,0,.6,0,.9,0,2.7,0,5.1-.8,6.9-2.4,1.9-1.7,2.9-4.1,3.1-6.9l.4-8.5c0-.1,0-.3-.1-.3,0,0-.2-.1-.3-.1h0ZM690.4,361.1l-.4,8c-.1,2.6-1.1,4.8-2.7,6.3-1.6,1.4-3.7,2.2-6.2,2.2s-.6,0-.9,0l-5.3-.3-.5-5.3c-.3-3,.4-5.6,2-7.5,1.5-1.7,3.7-2.7,6.3-2.9l7.8-.4h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M706,363.4c.1.1.2.2.3.3,1.8,2,2.6,4.6,2.4,7.8l-.4,5.7c0,.2-.2.4-.4.4l-5.7.6c-3.3.3-6.1-.4-8.2-2.2-1.9-1.7-3-4.1-3.2-7l-.4-8.3c0-.1,0-.3.1-.4,0,0,.2-.1.4-.1l8.5.4c2.7.1,4.9,1.1,6.6,2.7ZM707.4,376.8l.3-5.3c.2-2.9-.6-5.3-2.1-7.1-1.5-1.7-3.7-2.6-6.3-2.7l-8-.4.4,7.8c.1,2.7,1.1,4.8,2.9,6.3,1.9,1.6,4.5,2.3,7.5,2l5.3-.5Z" fill="#fff"/>
                      <path d="M690.9,360.3c-.1,0-.2,0-.3.1,0,0-.1.2-.1.4l.4,8.3c.2,2.9,1.3,5.3,3.2,7,1.8,1.5,4.1,2.3,6.7,2.3s1,0,1.5,0l5.7-.6c.2,0,.4-.2.4-.4l.4-5.7c.2-3.1-.6-5.8-2.4-7.8-.1-.1-.2-.2-.3-.3-1.6-1.6-3.9-2.6-6.6-2.7l-8.5-.4s0,0,0,0h0ZM700.7,377.4c-2.4,0-4.5-.7-6.1-2.1-1.7-1.5-2.7-3.7-2.9-6.3l-.4-7.8,8,.4c2.6.1,4.8,1.1,6.3,2.7,1.6,1.8,2.3,4.2,2.1,7.1l-.3,5.3-5.3.5c-.5,0-1,0-1.4,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M688.4,345.8c1.6,1.6,2.6,3.9,2.7,6.5l.4,8.3c0,.1,0,.3-.1.4,0,0-.2.1-.4.1l-8.5-.4c-2.9-.1-5.3-1.2-6.9-3.1-1.8-2-2.6-4.6-2.4-7.8l.4-5.7c0-.2.2-.4.4-.4l5.7-.6c3.3-.3,6.1.4,8.2,2.2.2.1.3.3.5.5ZM690.5,360.1l-.4-7.8c-.1-2.7-1.1-4.8-2.9-6.3-1.9-1.6-4.5-2.3-7.5-2l-5.3.5-.3,5.3c-.2,2.9.6,5.3,2.1,7.1,1.5,1.7,3.7,2.6,6.3,2.7l8,.4Z" fill="#fff"/>
                      <path d="M681.2,343c-.5,0-1,0-1.5,0l-5.7.6c-.2,0-.4.2-.4.4l-.4,5.7c-.2,3.1.6,5.8,2.4,7.8,1.7,1.9,4.1,2.9,6.9,3.1l8.5.4s0,0,0,0c.1,0,.2,0,.3-.1,0,0,.1-.2.1-.4l-.4-8.3c-.1-2.7-1.1-4.9-2.7-6.5-.2-.2-.3-.3-.5-.5-1.8-1.5-4.1-2.3-6.7-2.3h0ZM690.5,360.1l-8-.4c-2.6-.1-4.8-1.1-6.3-2.7-1.6-1.8-2.3-4.2-2.1-7.1l.3-5.3,5.3-.5c.5,0,1,0,1.4,0,2.4,0,4.5.7,6.1,2.1,1.7,1.5,2.7,3.7,2.9,6.3l.4,7.8h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M675.1,344.1l32.3,32.3c.2.2.2.5,0,.7s-.5.2-.7,0l-32.3-32.3c-.2-.2-.2-.5,0-.7s.5-.2.7,0Z" fill="#fff"/>
                    <path d="M674.7,344c-.1,0-.2,0-.3.1-.2.2-.2.5,0,.7l32.3,32.3c0,0,.2.1.3.1s.2,0,.3-.1c.2-.2.2-.5,0-.7l-32.3-32.3c0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M707.1,344.5c.2.2.2.5,0,.7l-31.9,31.9c-.2.2-.5.2-.7,0s-.2-.5,0-.7l31.9-31.9c.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M706.7,344.4c-.1,0-.2,0-.3.1l-31.9,31.9c-.2.2-.2.5,0,.7,0,0,.2.1.3.1s.2,0,.3-.1l31.9-31.9c.2-.2.2-.5,0-.7,0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                </g>
              </g>
              <g opacity=".6">
                <g>
                  <g>
                    <g>
                      <path d="M672,240.1c0,0,.1.2.1.3l.6,5.7c.3,3.3-.4,6.1-2.2,8.2-1.7,1.9-4.1,3-7,3.2l-8.3.4c-.1,0-.3,0-.4-.1,0,0,0,0,0,0,0,0-.1-.2-.1-.3l.4-8.5c.1-2.9,1.2-5.3,3.1-6.9,2-1.8,4.6-2.6,7.8-2.4l5.7.4c.1,0,.2,0,.3.1ZM655.7,257l7.8-.4c2.7-.1,4.8-1.1,6.3-2.9,1.6-1.9,2.3-4.5,2-7.5l-.5-5.3-5.3-.3c-2.9-.2-5.3.6-7.1,2.1-1.7,1.5-2.6,3.7-2.7,6.3l-.4,8Z" fill="#fff"/>
                      <path d="M665.1,239.6c-2.7,0-5.1.8-6.9,2.4-1.9,1.7-2.9,4.1-3.1,6.9l-.4,8.5c0,.1,0,.3.1.3,0,0,0,0,0,0,0,0,.2.1.3.1s0,0,0,0l8.3-.4c2.9-.2,5.3-1.3,7-3.2,1.8-2.1,2.5-4.9,2.2-8.2l-.6-5.7c0-.1,0-.2-.1-.3,0,0-.2-.1-.3-.1l-5.7-.4c-.3,0-.6,0-.9,0h0ZM655.7,257l.4-8c.1-2.6,1.1-4.8,2.7-6.3,1.6-1.4,3.7-2.2,6.2-2.2s.6,0,.9,0l5.3.3.5,5.3c.3,3-.4,5.6-2,7.5-1.5,1.7-3.7,2.7-6.3,2.9l-7.8.4h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M655.4,257c0,0,.1.2.1.3l-.4,8.5c-.1,2.9-1.2,5.3-3.1,6.9-2,1.8-4.6,2.6-7.8,2.4l-5.7-.4c-.2,0-.4-.2-.4-.4l-.6-5.7c-.3-3.3.4-6.1,2.2-8.2,1.7-1.9,4.1-3,7-3.2l8.3-.4c.1,0,.3,0,.4.1ZM639,273.9l5.3.3c2.9.2,5.3-.6,7.1-2.1,1.7-1.5,2.6-3.7,2.7-6.3l.4-8-7.8.4c-2.7.1-4.8,1.1-6.3,2.9-1.6,1.9-2.3,4.5-2,7.5l.5,5.3Z" fill="#fff"/>
                      <path d="M655,256.8s0,0,0,0l-8.3.4c-2.9.2-5.3,1.3-7,3.2-1.8,2.1-2.5,4.9-2.2,8.2l.6,5.7c0,.2.2.4.4.4l5.7.4c.3,0,.6,0,.9,0,2.7,0,5.1-.8,6.9-2.4,1.9-1.7,2.9-4.1,3.1-6.9l.4-8.5c0-.1,0-.3-.1-.3,0,0-.2-.1-.3-.1h0ZM654.6,257.8l-.4,8c-.1,2.6-1.1,4.8-2.7,6.3-1.6,1.4-3.7,2.2-6.2,2.2s-.6,0-.9,0l-5.3-.3-.5-5.3c-.3-3,.4-5.6,2-7.5,1.5-1.7,3.7-2.7,6.3-2.9l7.8-.4h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M670.2,260.1c.1.1.2.2.3.3,1.8,2,2.6,4.6,2.4,7.8l-.4,5.7c0,.2-.2.4-.4.4l-5.7.6c-3.3.3-6.1-.4-8.2-2.2-1.9-1.7-3-4.1-3.2-7l-.4-8.3c0-.1,0-.3.1-.4,0,0,.2-.1.4-.1l8.5.4c2.7.1,4.9,1.1,6.6,2.7ZM671.6,273.5l.3-5.3c.2-2.9-.6-5.3-2.1-7.1-1.5-1.7-3.7-2.6-6.3-2.7l-8-.4.4,7.8c.1,2.7,1.1,4.8,2.9,6.3,1.9,1.6,4.5,2.3,7.5,2l5.3-.5Z" fill="#fff"/>
                      <path d="M655,257c-.1,0-.2,0-.3.1,0,0-.1.2-.1.4l.4,8.3c.2,2.9,1.3,5.3,3.2,7,1.8,1.5,4.1,2.3,6.7,2.3s1,0,1.5,0l5.7-.6c.2,0,.4-.2.4-.4l.4-5.7c.2-3.1-.6-5.8-2.4-7.8-.1-.1-.2-.2-.3-.3-1.6-1.6-3.9-2.6-6.6-2.7l-8.5-.4s0,0,0,0h0ZM664.9,274.1c-2.4,0-4.5-.7-6.1-2.1-1.7-1.5-2.7-3.7-2.9-6.3l-.4-7.8,8,.4c2.6.1,4.8,1.1,6.3,2.7,1.6,1.8,2.3,4.2,2.1,7.1l-.3,5.3-5.3.5c-.5,0-1,0-1.4,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M652.5,242.5c1.6,1.6,2.6,3.9,2.7,6.5l.4,8.3c0,.1,0,.3-.1.4,0,0-.2.1-.4.1l-8.5-.4c-2.9-.1-5.3-1.2-6.9-3.1-1.8-2-2.6-4.6-2.4-7.8l.4-5.7c0-.2.2-.4.4-.4l5.7-.6c3.3-.3,6.1.4,8.2,2.2.2.1.3.3.5.5ZM654.7,256.8l-.4-7.8c-.1-2.7-1.1-4.8-2.9-6.3-1.9-1.6-4.5-2.3-7.5-2l-5.3.5-.3,5.3c-.2,2.9.6,5.3,2.1,7.1,1.5,1.7,3.7,2.6,6.3,2.7l8,.4Z" fill="#fff"/>
                      <path d="M645.3,239.7c-.5,0-1,0-1.5,0l-5.7.6c-.2,0-.4.2-.4.4l-.4,5.7c-.2,3.1.6,5.8,2.4,7.8,1.7,1.9,4.1,2.9,6.9,3.1l8.5.4s0,0,0,0c.1,0,.2,0,.3-.1,0,0,.1-.2.1-.4l-.4-8.3c-.1-2.7-1.1-4.9-2.7-6.5-.2-.2-.3-.3-.5-.5-1.8-1.5-4.1-2.3-6.7-2.3h0ZM654.7,256.8l-8-.4c-2.6-.1-4.8-1.1-6.3-2.7-1.6-1.8-2.3-4.2-2.1-7.1l.3-5.3,5.3-.5c.5,0,1,0,1.4,0,2.4,0,4.5.7,6.1,2.1,1.7,1.5,2.7,3.7,2.9,6.3l.4,7.8h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M639.2,240.8l32.3,32.3c.2.2.2.5,0,.7-.2.2-.5.2-.7,0l-32.3-32.3c-.2-.2-.2-.5,0-.7.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M638.9,240.7c-.1,0-.2,0-.3.1-.2.2-.2.5,0,.7l32.3,32.3c0,0,.2.1.3.1s.2,0,.3-.1c.2-.2.2-.5,0-.7l-32.3-32.3c0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M671.2,241.2c.2.2.2.5,0,.7l-31.9,31.9c-.2.2-.5.2-.7,0-.2-.2-.2-.5,0-.7l31.9-31.9c.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M670.9,241.1c-.1,0-.2,0-.3.1l-31.9,31.9c-.2.2-.2.5,0,.7,0,0,.2.1.3.1s.2,0,.3-.1l31.9-31.9c.2-.2.2-.5,0-.7,0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M672.3,274.6c0,0,.1.2.1.3l.6,5.7c.3,3.3-.4,6.1-2.2,8.2-1.7,1.9-4.1,3-7,3.2l-8.3.4c-.1,0-.3,0-.4-.1,0,0,0,0,0,0,0,0-.1-.2-.1-.3l.4-8.5c.1-2.9,1.2-5.3,3.1-6.9,2-1.8,4.6-2.6,7.8-2.4l5.7.4c.1,0,.2,0,.3.1ZM656,291.5l7.8-.4c2.7-.1,4.8-1.1,6.3-2.9,1.6-1.9,2.3-4.5,2-7.5l-.5-5.3-5.3-.3c-2.9-.2-5.3.6-7.1,2.1-1.7,1.5-2.6,3.7-2.7,6.3l-.4,8Z" fill="#fff"/>
                      <path d="M665.4,274.1c-2.7,0-5.1.8-6.9,2.4-1.9,1.7-2.9,4.1-3.1,6.9l-.4,8.5c0,.1,0,.3.1.3,0,0,0,0,0,0,0,0,.2.1.3.1s0,0,0,0l8.3-.4c2.9-.1,5.3-1.3,7-3.2,1.8-2.1,2.5-4.9,2.2-8.2l-.6-5.7c0-.1,0-.2-.1-.3,0,0-.2-.1-.3-.1l-5.7-.4c-.3,0-.6,0-.9,0h0ZM656,291.5l.4-8c.1-2.6,1.1-4.8,2.7-6.3,1.6-1.4,3.7-2.2,6.2-2.2s.6,0,.9,0l5.3.3.5,5.3c.3,3-.4,5.6-2,7.5-1.5,1.7-3.7,2.7-6.3,2.9l-7.8.4h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M655.7,291.5c0,0,.1.2.1.3l-.4,8.5c-.1,2.9-1.2,5.3-3.1,6.9-2,1.8-4.6,2.6-7.8,2.4l-5.7-.4c-.2,0-.4-.2-.4-.4l-.6-5.7c-.3-3.3.4-6.1,2.2-8.2,1.7-1.9,4.1-3,7-3.2l8.3-.4c.1,0,.3,0,.4.1ZM639.3,308.3l5.3.3c2.9.2,5.3-.6,7.1-2.1,1.7-1.5,2.6-3.7,2.7-6.3l.4-8-7.8.4c-2.7.1-4.8,1.1-6.3,2.9-1.6,1.9-2.3,4.5-2,7.5l.5,5.3Z" fill="#fff"/>
                      <path d="M655.3,291.3s0,0,0,0l-8.3.4c-2.9.2-5.3,1.3-7,3.2-1.8,2.1-2.5,4.9-2.2,8.2l.6,5.7c0,.2.2.4.4.4l5.7.4c.3,0,.6,0,.9,0,2.7,0,5.1-.8,6.9-2.4,1.9-1.7,2.9-4.1,3.1-6.9l.4-8.5c0-.1,0-.3-.1-.3,0,0-.2-.1-.3-.1h0ZM654.9,292.3l-.4,8c-.1,2.6-1.1,4.8-2.7,6.3-1.6,1.4-3.7,2.2-6.2,2.2s-.6,0-.9,0l-5.3-.3-.5-5.3c-.3-3,.4-5.6,2-7.5,1.5-1.7,3.7-2.7,6.3-2.9l7.8-.4h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M670.5,294.6c.1.1.2.2.3.3,1.8,2,2.6,4.6,2.4,7.8l-.4,5.7c0,.2-.2.4-.4.4l-5.7.6c-3.3.3-6.1-.4-8.2-2.2-1.9-1.7-3-4.1-3.2-7l-.4-8.3c0-.1,0-.3.1-.4,0,0,.2-.1.4-.1l8.5.4c2.7.1,4.9,1.1,6.6,2.7ZM671.9,308l.3-5.3c.2-2.9-.6-5.3-2.1-7.1-1.5-1.7-3.7-2.6-6.3-2.7l-8-.4.4,7.8c.1,2.7,1.1,4.8,2.9,6.3,1.9,1.6,4.5,2.3,7.5,2l5.3-.5Z" fill="#fff"/>
                      <path d="M655.4,291.5c-.1,0-.2,0-.3.1,0,0-.1.2-.1.4l.4,8.3c.2,2.9,1.3,5.3,3.2,7,1.8,1.5,4.1,2.3,6.7,2.3s1,0,1.5,0l5.7-.6c.2,0,.4-.2.4-.4l.4-5.7c.2-3.1-.6-5.8-2.4-7.8-.1-.1-.2-.2-.3-.3-1.6-1.6-3.9-2.6-6.6-2.7l-8.5-.4s0,0,0,0h0ZM665.2,308.6c-2.4,0-4.5-.7-6.1-2.1-1.7-1.5-2.7-3.7-2.9-6.3l-.4-7.8,8,.4c2.6.1,4.8,1.1,6.3,2.7,1.6,1.8,2.3,4.2,2.1,7.1l-.3,5.3-5.3.5c-.5,0-1,0-1.4,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M652.9,277c1.6,1.6,2.6,3.9,2.7,6.5l.4,8.3c0,.1,0,.3-.1.4,0,0-.2.1-.4.1l-8.5-.4c-2.9-.1-5.3-1.2-6.9-3.1-1.8-2-2.6-4.6-2.4-7.8l.4-5.7c0-.2.2-.4.4-.4l5.7-.6c3.3-.3,6.1.4,8.2,2.2.2.1.3.3.5.5ZM655,291.3l-.4-7.8c-.1-2.7-1.1-4.8-2.9-6.3-1.9-1.6-4.5-2.3-7.5-2l-5.3.5-.3,5.3c-.2,2.9.6,5.3,2.1,7.1,1.5,1.7,3.7,2.6,6.3,2.7l8,.4Z" fill="#fff"/>
                      <path d="M645.7,274.2c-.5,0-1,0-1.5,0l-5.7.6c-.2,0-.4.2-.4.4l-.4,5.7c-.2,3.1.6,5.8,2.4,7.8,1.7,1.9,4.1,2.9,6.9,3.1l8.5.4s0,0,0,0c.1,0,.2,0,.3-.1,0,0,.1-.2.1-.4l-.4-8.3c-.1-2.7-1.1-4.9-2.7-6.5-.2-.2-.3-.3-.5-.5-1.8-1.5-4.1-2.3-6.7-2.3h0ZM655,291.3l-8-.4c-2.6-.1-4.8-1.1-6.3-2.7-1.6-1.8-2.3-4.2-2.1-7.1l.3-5.3,5.3-.5c.5,0,1,0,1.4,0,2.4,0,4.5.7,6.1,2.1,1.7,1.5,2.7,3.7,2.9,6.3l.4,7.8h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M639.6,275.3l32.3,32.3c.2.2.2.5,0,.7-.2.2-.5.2-.7,0l-32.3-32.3c-.2-.2-.2-.5,0-.7.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M639.2,275.2c-.1,0-.2,0-.3.1-.2.2-.2.5,0,.7l32.3,32.3c0,0,.2.1.3.1s.2,0,.3-.1c.2-.2.2-.5,0-.7l-32.3-32.3c0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M671.5,275.7c.2.2.2.5,0,.7l-31.9,31.9c-.2.2-.5.2-.7,0-.2-.2-.2-.5,0-.7l31.9-31.9c.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M671.2,275.6c-.1,0-.2,0-.3.1l-31.9,31.9c-.2.2-.2.5,0,.7,0,0,.2.1.3.1s.2,0,.3-.1l31.9-31.9c.2-.2.2-.5,0-.7,0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M672.5,308.9c0,0,.1.2.1.3l.6,5.7c.3,3.3-.4,6.1-2.2,8.2-1.7,1.9-4.1,3-7,3.2l-8.3.4c-.1,0-.3,0-.4-.1h0c0,0-.1-.2-.1-.4l.4-8.5c.1-2.9,1.2-5.3,3.1-6.9,2-1.8,4.6-2.6,7.8-2.4l5.7.4c.1,0,.2,0,.3.1ZM656.2,325.8l7.8-.4c2.7-.1,4.8-1.1,6.3-2.9,1.6-1.9,2.3-4.5,2-7.5l-.5-5.3-5.3-.3c-2.9-.2-5.3.6-7.1,2.1-1.7,1.5-2.6,3.7-2.7,6.3l-.4,8Z" fill="#fff"/>
                      <path d="M665.6,308.4c-2.7,0-5.1.8-6.9,2.4-1.9,1.7-2.9,4.1-3.1,6.9l-.4,8.5c0,.1,0,.3.1.3h0c0,0,.2.1.3.1s0,0,0,0l8.3-.4c2.9-.1,5.3-1.3,7-3.2,1.8-2.1,2.5-4.9,2.2-8.2l-.6-5.7c0-.1,0-.2-.1-.3,0,0-.2-.1-.3-.1l-5.7-.4c-.3,0-.6,0-.9,0h0ZM656.2,325.8l.4-8c.1-2.6,1.1-4.8,2.7-6.3,1.6-1.4,3.7-2.2,6.2-2.2s.6,0,.9,0l5.3.3.5,5.3c.3,3-.4,5.6-2,7.5-1.5,1.7-3.7,2.7-6.3,2.9l-7.8.4h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M655.9,325.8c0,0,.1.2.1.3l-.4,8.5c-.1,2.9-1.2,5.3-3.1,6.9-2,1.8-4.6,2.6-7.8,2.4l-5.7-.4c-.2,0-.4-.2-.4-.4l-.6-5.7c-.3-3.3.4-6.1,2.2-8.2,1.7-1.9,4.1-3,7-3.2l8.3-.4c.1,0,.3,0,.4.1ZM639.6,342.7l5.3.3c2.9.2,5.3-.6,7.1-2.1,1.7-1.5,2.6-3.7,2.7-6.3l.4-8-7.8.4c-2.7.1-4.8,1.1-6.3,2.9-1.6,1.9-2.3,4.5-2,7.5l.5,5.3Z" fill="#fff"/>
                      <path d="M655.6,325.6s0,0,0,0l-8.3.4c-2.9.2-5.3,1.3-7,3.2-1.8,2.1-2.5,4.9-2.2,8.2l.6,5.7c0,.2.2.4.4.4l5.7.4c.3,0,.6,0,.9,0,2.7,0,5.1-.8,6.9-2.4,1.9-1.7,2.9-4.1,3.1-6.9l.4-8.5c0-.1,0-.3-.1-.3,0,0-.2-.1-.3-.1h0ZM655.1,326.6l-.4,8c-.1,2.6-1.1,4.8-2.7,6.3-1.6,1.4-3.7,2.2-6.2,2.2s-.6,0-.9,0l-5.3-.3-.5-5.3c-.3-3,.4-5.6,2-7.5,1.5-1.7,3.7-2.7,6.3-2.9l7.8-.4h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M670.7,328.9c.1.1.2.2.3.3,1.8,2,2.6,4.6,2.4,7.8l-.4,5.7c0,.2-.2.4-.4.4l-5.7.6c-3.3.3-6.1-.4-8.2-2.2-1.9-1.7-3-4.1-3.2-7l-.4-8.3c0-.1,0-.3.1-.4,0,0,.2-.1.4-.1l8.5.4c2.7.1,4.9,1.1,6.6,2.7ZM672.1,342.3l.3-5.3c.2-2.9-.6-5.3-2.1-7.1-1.5-1.7-3.7-2.6-6.3-2.7l-8-.4.4,7.8c.1,2.7,1.1,4.8,2.9,6.3,1.9,1.6,4.5,2.3,7.5,2l5.3-.5Z" fill="#fff"/>
                      <path d="M655.6,325.8c-.1,0-.2,0-.3.1,0,0-.1.2-.1.4l.4,8.3c.2,2.9,1.3,5.3,3.2,7,1.8,1.5,4.1,2.3,6.7,2.3s1,0,1.5,0l5.7-.6c.2,0,.4-.2.4-.4l.4-5.7c.2-3.1-.6-5.8-2.4-7.8-.1-.1-.2-.2-.3-.3-1.6-1.6-3.9-2.6-6.6-2.7l-8.5-.4s0,0,0,0h0ZM665.4,342.9c-2.4,0-4.5-.7-6.1-2.1-1.7-1.5-2.7-3.7-2.9-6.3l-.4-7.8,8,.4c2.6.1,4.8,1.1,6.3,2.7,1.6,1.8,2.3,4.2,2.1,7.1l-.3,5.3-5.3.5c-.5,0-1,0-1.4,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M653.1,311.3c1.6,1.6,2.6,3.9,2.7,6.5l.4,8.3c0,.1,0,.3-.1.4,0,0-.2.1-.4.1l-8.5-.4c-2.9-.1-5.3-1.2-6.9-3.1-1.8-2-2.6-4.6-2.4-7.8l.4-5.7c0-.2.2-.4.4-.4l5.7-.6c3.3-.3,6.1.4,8.2,2.2.2.1.3.3.5.5ZM655.3,325.6l-.4-7.8c-.1-2.7-1.1-4.8-2.9-6.3-1.9-1.6-4.5-2.3-7.5-2l-5.3.5-.3,5.3c-.2,2.9.6,5.3,2.1,7.1,1.5,1.7,3.7,2.6,6.3,2.7l8,.4Z" fill="#fff"/>
                      <path d="M645.9,308.5c-.5,0-1,0-1.5,0l-5.7.6c-.2,0-.4.2-.4.4l-.4,5.7c-.2,3.1.6,5.8,2.4,7.8,1.7,1.9,4.1,2.9,6.9,3.1l8.5.4s0,0,0,0c.1,0,.2,0,.3-.1,0,0,.1-.2.1-.4l-.4-8.3c-.1-2.7-1.1-4.9-2.7-6.5-.2-.2-.3-.3-.5-.5-1.8-1.5-4.1-2.3-6.7-2.3h0ZM655.3,325.6l-8-.4c-2.6-.1-4.8-1.1-6.3-2.7-1.6-1.8-2.3-4.2-2.1-7.1l.3-5.3,5.3-.5c.5,0,1,0,1.4,0,2.4,0,4.5.7,6.1,2.1,1.7,1.5,2.7,3.7,2.9,6.3l.4,7.8h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M639.8,309.6l32.3,32.3c.2.2.2.5,0,.7-.2.2-.5.2-.7,0l-32.3-32.3c-.2-.2-.2-.5,0-.7s.5-.2.7,0Z" fill="#fff"/>
                    <path d="M639.5,309.5c-.1,0-.2,0-.3.1-.2.2-.2.5,0,.7l32.3,32.3c0,0,.2.1.3.1s.2,0,.3-.1c.2-.2.2-.5,0-.7l-32.3-32.3c0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M671.8,310c.2.2.2.5,0,.7l-31.9,31.9c-.2.2-.5.2-.7,0s-.2-.5,0-.7l31.9-31.9c.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M671.4,309.9c-.1,0-.2,0-.3.1l-31.9,31.9c-.2.2-.2.5,0,.7,0,0,.2.1.3.1s.2,0,.3-.1l31.9-31.9c.2-.2.2-.5,0-.7,0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M672.8,343.4c0,0,.1.2.1.3l.6,5.7c.3,3.3-.4,6.1-2.2,8.2-1.7,1.9-4.1,3-7,3.2l-8.3.4c-.1,0-.3,0-.4-.1,0,0,0,0,0,0,0,0-.1-.2-.1-.3l.4-8.5c.1-2.9,1.2-5.3,3.1-6.9,2-1.8,4.6-2.6,7.8-2.4l5.7.4c.1,0,.2,0,.3.1ZM656.5,360.3l7.8-.4c2.7-.1,4.8-1.1,6.3-2.9,1.6-1.9,2.3-4.5,2-7.5l-.5-5.3-5.3-.3c-2.9-.2-5.3.6-7.1,2.1-1.7,1.5-2.6,3.7-2.7,6.3l-.4,8Z" fill="#fff"/>
                      <path d="M665.9,342.9c-2.7,0-5.1.8-6.9,2.4-1.9,1.7-2.9,4.1-3.1,6.9l-.4,8.5c0,.1,0,.3.1.3,0,0,0,0,0,0,0,0,.2.1.3.1s0,0,0,0l8.3-.4c2.9-.2,5.3-1.3,7-3.2,1.8-2.1,2.5-4.9,2.2-8.2l-.6-5.7c0-.1,0-.2-.1-.3,0,0-.2-.1-.3-.1l-5.7-.4c-.3,0-.6,0-.9,0h0ZM656.5,360.3l.4-8c.1-2.6,1.1-4.8,2.7-6.3,1.6-1.4,3.7-2.2,6.2-2.2s.6,0,.9,0l5.3.3.5,5.3c.3,3-.4,5.6-2,7.5-1.5,1.7-3.7,2.7-6.3,2.9l-7.8.4h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M656.2,360.3c0,0,.1.2.1.3l-.4,8.5c-.1,2.9-1.2,5.3-3.1,6.9-2,1.8-4.6,2.6-7.8,2.4l-5.7-.4c-.2,0-.4-.2-.4-.4l-.6-5.7c-.3-3.3.4-6.1,2.2-8.2,1.7-1.9,4.1-3,7-3.2l8.3-.4c.1,0,.3,0,.4.1ZM639.9,377.2l5.3.3c2.9.2,5.3-.6,7.1-2.1,1.7-1.5,2.6-3.7,2.7-6.3l.4-8-7.8.4c-2.7.1-4.8,1.1-6.3,2.9-1.6,1.9-2.3,4.5-2,7.5l.5,5.3Z" fill="#fff"/>
                      <path d="M655.9,360.1s0,0,0,0l-8.3.4c-2.9.1-5.3,1.3-7,3.2-1.8,2.1-2.5,4.9-2.2,8.2l.6,5.7c0,.2.2.4.4.4l5.7.4c.3,0,.6,0,.9,0,2.7,0,5.1-.8,6.9-2.4,1.9-1.7,2.9-4.1,3.1-6.9l.4-8.5c0-.1,0-.3-.1-.3,0,0-.2-.1-.3-.1h0ZM655.4,361.1l-.4,8c-.1,2.6-1.1,4.8-2.7,6.3-1.6,1.4-3.7,2.2-6.2,2.2s-.6,0-.9,0l-5.3-.3-.5-5.3c-.3-3,.4-5.6,2-7.5,1.5-1.7,3.7-2.7,6.3-2.9l7.8-.4h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M671,363.4c.1.1.2.2.3.3,1.8,2,2.6,4.6,2.4,7.8l-.4,5.7c0,.2-.2.4-.4.4l-5.7.6c-3.3.3-6.1-.4-8.2-2.2-1.9-1.7-3-4.1-3.2-7l-.4-8.3c0-.1,0-.3.1-.4,0,0,.2-.1.4-.1l8.5.4c2.7.1,4.9,1.1,6.6,2.7ZM672.4,376.8l.3-5.3c.2-2.9-.6-5.3-2.1-7.1-1.5-1.7-3.7-2.6-6.3-2.7l-8-.4.4,7.8c.1,2.7,1.1,4.8,2.9,6.3,1.9,1.6,4.5,2.3,7.5,2l5.3-.5Z" fill="#fff"/>
                      <path d="M655.9,360.3c-.1,0-.2,0-.3.1,0,0-.1.2-.1.4l.4,8.3c.2,2.9,1.3,5.3,3.2,7,1.8,1.5,4.1,2.3,6.7,2.3s1,0,1.5,0l5.7-.6c.2,0,.4-.2.4-.4l.4-5.7c.2-3.1-.6-5.8-2.4-7.8-.1-.1-.2-.2-.3-.3-1.6-1.6-3.9-2.6-6.6-2.7l-8.5-.4s0,0,0,0h0ZM665.8,377.4c-2.4,0-4.5-.7-6.1-2.1-1.7-1.5-2.7-3.7-2.9-6.3l-.4-7.8,8,.4c2.6.1,4.8,1.1,6.3,2.7,1.6,1.8,2.3,4.2,2.1,7.1l-.3,5.3-5.3.5c-.5,0-1,0-1.4,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M653.4,345.8c1.6,1.6,2.6,3.9,2.7,6.5l.4,8.3c0,.1,0,.3-.1.4,0,0-.2.1-.4.1l-8.5-.4c-2.9-.1-5.3-1.2-6.9-3.1-1.8-2-2.6-4.6-2.4-7.8l.4-5.7c0-.2.2-.4.4-.4l5.7-.6c3.3-.3,6.1.4,8.2,2.2.2.1.3.3.5.5ZM655.6,360.1l-.4-7.8c-.1-2.7-1.1-4.8-2.9-6.3-1.9-1.6-4.5-2.3-7.5-2l-5.3.5-.3,5.3c-.2,2.9.6,5.3,2.1,7.1,1.5,1.7,3.7,2.6,6.3,2.7l8,.4Z" fill="#fff"/>
                      <path d="M646.2,343c-.5,0-1,0-1.5,0l-5.7.6c-.2,0-.4.2-.4.4l-.4,5.7c-.2,3.1.6,5.8,2.4,7.8,1.7,1.9,4.1,2.9,6.9,3.1l8.5.4s0,0,0,0c.1,0,.2,0,.3-.1,0,0,.1-.2.1-.4l-.4-8.3c-.1-2.7-1.1-4.9-2.7-6.5-.2-.2-.3-.3-.5-.5-1.8-1.5-4.1-2.3-6.7-2.3h0ZM655.6,360.1l-8-.4c-2.6-.1-4.8-1.1-6.3-2.7-1.6-1.8-2.3-4.2-2.1-7.1l.3-5.3,5.3-.5c.5,0,1,0,1.4,0,2.4,0,4.5.7,6.1,2.1,1.7,1.5,2.7,3.7,2.9,6.3l.4,7.8h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M640.1,344.1l32.3,32.3c.2.2.2.5,0,.7-.2.2-.5.2-.7,0l-32.3-32.3c-.2-.2-.2-.5,0-.7.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M639.8,344c-.1,0-.2,0-.3.1-.2.2-.2.5,0,.7l32.3,32.3c0,0,.2.1.3.1s.2,0,.3-.1c.2-.2.2-.5,0-.7l-32.3-32.3c0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M672.1,344.5c.2.2.2.5,0,.7l-31.9,31.9c-.2.2-.5.2-.7,0-.2-.2-.2-.5,0-.7l31.9-31.9c.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M671.7,344.4c-.1,0-.2,0-.3.1l-31.9,31.9c-.2.2-.2.5,0,.7,0,0,.2.1.3.1s.2,0,.3-.1l31.9-31.9c.2-.2.2-.5,0-.7,0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                </g>
              </g>
              <g opacity=".6">
                <g>
                  <g>
                    <g>
                      <path d="M741.5,240.1c0,0,.1.2.1.3l.6,5.7c.3,3.3-.4,6.1-2.2,8.2-1.7,1.9-4.1,3-7,3.2l-8.3.4c-.1,0-.3,0-.4-.1,0,0,0,0,0,0,0,0-.1-.2-.1-.3l.4-8.5c.1-2.9,1.2-5.3,3.1-6.9,2-1.8,4.6-2.6,7.8-2.4l5.7.4c.1,0,.2,0,.3.1ZM725.2,256.9l7.8-.4c2.7-.1,4.8-1.1,6.3-2.9,1.6-1.9,2.3-4.5,2-7.5l-.5-5.3-5.3-.3c-2.9-.2-5.3.6-7.1,2.1-1.7,1.5-2.6,3.7-2.7,6.3l-.4,8Z" fill="#fff"/>
                      <path d="M734.6,239.5c-2.7,0-5.1.8-6.9,2.4-1.9,1.7-2.9,4.1-3.1,6.9l-.4,8.5c0,.1,0,.3.1.3,0,0,0,0,0,0,0,0,.2.1.3.1s0,0,0,0l8.3-.4c2.9-.1,5.3-1.3,7-3.2,1.8-2.1,2.5-4.9,2.2-8.2l-.6-5.7c0-.1,0-.2-.1-.3,0,0-.2-.1-.3-.1l-5.7-.4c-.3,0-.6,0-.9,0h0ZM725.2,256.9l.4-8c.1-2.6,1.1-4.8,2.7-6.3,1.6-1.4,3.7-2.2,6.2-2.2s.6,0,.9,0l5.3.3.5,5.3c.3,3-.4,5.6-2,7.5-1.5,1.7-3.7,2.7-6.3,2.9l-7.8.4h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M724.9,256.9c0,0,.1.2.1.3l-.4,8.5c-.1,2.9-1.2,5.3-3.1,6.9-2,1.8-4.6,2.6-7.8,2.4l-5.7-.4c-.2,0-.4-.2-.4-.4l-.6-5.7c-.3-3.3.4-6.1,2.2-8.2,1.7-1.9,4.1-3,7-3.2l8.3-.4c.1,0,.3,0,.4.1ZM708.5,273.8l5.3.3c2.9.2,5.3-.6,7.1-2.1,1.7-1.5,2.6-3.7,2.7-6.3l.4-8-7.8.4c-2.7.1-4.8,1.1-6.3,2.9-1.6,1.9-2.3,4.5-2,7.5l.5,5.3Z" fill="#fff"/>
                      <path d="M724.5,256.8s0,0,0,0l-8.3.4c-2.9.2-5.3,1.3-7,3.2-1.8,2.1-2.5,4.9-2.2,8.2l.6,5.7c0,.2.2.4.4.4l5.7.4c.3,0,.6,0,.9,0,2.7,0,5.1-.8,6.9-2.4,1.9-1.7,2.9-4.1,3.1-6.9l.4-8.5c0-.1,0-.3-.1-.3,0,0-.2-.1-.3-.1h0ZM724.1,257.7l-.4,8c-.1,2.6-1.1,4.8-2.7,6.3-1.6,1.4-3.7,2.2-6.2,2.2s-.6,0-.9,0l-5.3-.3-.5-5.3c-.3-3,.4-5.6,2-7.5,1.5-1.7,3.7-2.7,6.3-2.9l7.8-.4h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M739.7,260c.1.1.2.2.3.3,1.8,2,2.6,4.6,2.4,7.8l-.4,5.7c0,.2-.2.4-.4.4l-5.7.6c-3.3.3-6.1-.4-8.2-2.2-1.9-1.7-3-4.1-3.2-7l-.4-8.3c0-.1,0-.3.1-.4,0,0,.2-.1.4-.1l8.5.4c2.7.1,4.9,1.1,6.6,2.7ZM741.1,273.4l.3-5.3c.2-2.9-.6-5.3-2.1-7.1-1.5-1.7-3.7-2.6-6.3-2.7l-8-.4.4,7.8c.1,2.7,1.1,4.8,2.9,6.3,1.9,1.6,4.5,2.3,7.5,2l5.3-.5Z" fill="#fff"/>
                      <path d="M724.5,256.9c-.1,0-.2,0-.3.1,0,0-.1.2-.1.4l.4,8.3c.2,2.9,1.3,5.3,3.2,7,1.8,1.5,4.1,2.3,6.7,2.3s1,0,1.5,0l5.7-.6c.2,0,.4-.2.4-.4l.4-5.7c.2-3.1-.6-5.8-2.4-7.8-.1-.1-.2-.2-.3-.3-1.6-1.6-3.9-2.6-6.6-2.7l-8.5-.4s0,0,0,0h0ZM734.4,274c-2.4,0-4.5-.7-6.1-2.1-1.7-1.5-2.7-3.7-2.9-6.3l-.4-7.8,8,.4c2.6.1,4.8,1.1,6.3,2.7,1.6,1.8,2.3,4.2,2.1,7.1l-.3,5.3-5.3.5c-.5,0-1,0-1.4,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M722,242.4c1.6,1.6,2.6,3.9,2.7,6.5l.4,8.3c0,.1,0,.3-.1.4,0,0-.2.1-.4.1l-8.5-.4c-2.9-.1-5.3-1.2-6.9-3.1-1.8-2-2.6-4.6-2.4-7.8l.4-5.7c0-.2.2-.4.4-.4l5.7-.6c3.3-.3,6.1.4,8.2,2.2.2.1.3.3.5.5ZM724.2,256.7l-.4-7.8c-.1-2.7-1.1-4.8-2.9-6.3-1.9-1.6-4.5-2.3-7.5-2l-5.3.5-.3,5.3c-.2,2.9.6,5.3,2.1,7.1,1.5,1.7,3.7,2.6,6.3,2.7l8,.4Z" fill="#fff"/>
                      <path d="M714.8,239.7c-.5,0-1,0-1.5,0l-5.7.6c-.2,0-.4.2-.4.4l-.4,5.7c-.2,3.1.6,5.8,2.4,7.8,1.7,1.9,4.1,2.9,6.9,3.1l8.5.4s0,0,0,0c.1,0,.2,0,.3-.1,0,0,.1-.2.1-.4l-.4-8.3c-.1-2.7-1.1-4.9-2.7-6.5-.2-.2-.3-.3-.5-.5-1.8-1.5-4.1-2.3-6.7-2.3h0ZM724.2,256.7l-8-.4c-2.6-.1-4.8-1.1-6.3-2.7-1.6-1.8-2.3-4.2-2.1-7.1l.3-5.3,5.3-.5c.5,0,1,0,1.4,0,2.4,0,4.5.7,6.1,2.1,1.7,1.5,2.7,3.7,2.9,6.3l.4,7.8h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M708.7,240.8l32.3,32.3c.2.2.2.5,0,.7s-.5.2-.7,0l-32.3-32.3c-.2-.2-.2-.5,0-.7.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M708.4,240.6c-.1,0-.2,0-.3.1-.2.2-.2.5,0,.7l32.3,32.3c0,0,.2.1.3.1s.2,0,.3-.1c.2-.2.2-.5,0-.7l-32.3-32.3c0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M740.7,241.2c.2.2.2.5,0,.7l-31.9,31.9c-.2.2-.5.2-.7,0-.2-.2-.2-.5,0-.7l31.9-31.9c.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M740.4,241c-.1,0-.2,0-.3.1l-31.9,31.9c-.2.2-.2.5,0,.7,0,0,.2.1.3.1s.2,0,.3-.1l31.9-31.9c.2-.2.2-.5,0-.7,0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M741.8,274.6c0,0,.1.2.1.3l.6,5.7c.3,3.3-.4,6.1-2.2,8.2-1.7,1.9-4.1,3-7,3.2l-8.3.4c-.1,0-.3,0-.4-.1,0,0,0,0,0,0,0,0-.1-.2-.1-.3l.4-8.5c.1-2.9,1.2-5.3,3.1-6.9,2-1.8,4.6-2.6,7.8-2.4l5.7.4c.1,0,.2,0,.3.1ZM725.5,291.4l7.8-.4c2.7-.1,4.8-1.1,6.3-2.9,1.6-1.9,2.3-4.5,2-7.5l-.5-5.3-5.3-.3c-2.9-.2-5.3.6-7.1,2.1-1.7,1.5-2.6,3.7-2.7,6.3l-.4,8Z" fill="#fff"/>
                      <path d="M734.9,274c-2.7,0-5.1.8-6.9,2.4-1.9,1.7-2.9,4.1-3.1,6.9l-.4,8.5c0,.1,0,.3.1.3,0,0,0,0,0,0,0,0,.2.1.3.1s0,0,0,0l8.3-.4c2.9-.2,5.3-1.3,7-3.2,1.8-2.1,2.5-4.9,2.2-8.2l-.6-5.7c0-.1,0-.2-.1-.3,0,0-.2-.1-.3-.1l-5.7-.4c-.3,0-.6,0-.9,0h0ZM725.5,291.4l.4-8c.1-2.6,1.1-4.8,2.7-6.3,1.6-1.4,3.7-2.2,6.2-2.2s.6,0,.9,0l5.3.3.5,5.3c.3,3-.4,5.6-2,7.5-1.5,1.7-3.7,2.7-6.3,2.9l-7.8.4h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M725.2,291.4c0,0,.1.2.1.3l-.4,8.5c-.1,2.9-1.2,5.3-3.1,6.9-2,1.8-4.6,2.6-7.8,2.4l-5.7-.4c-.2,0-.4-.2-.4-.4l-.6-5.7c-.3-3.3.4-6.1,2.2-8.2,1.7-1.9,4.1-3,7-3.2l8.3-.4c.1,0,.3,0,.4.1ZM708.8,308.3l5.3.3c2.9.2,5.3-.6,7.1-2.1,1.7-1.5,2.6-3.7,2.7-6.3l.4-8-7.8.4c-2.7.1-4.8,1.1-6.3,2.9-1.6,1.9-2.3,4.5-2,7.5l.5,5.3Z" fill="#fff"/>
                      <path d="M724.8,291.3s0,0,0,0l-8.3.4c-2.9.1-5.3,1.3-7,3.2-1.8,2.1-2.5,4.9-2.2,8.2l.6,5.7c0,.2.2.4.4.4l5.7.4c.3,0,.6,0,.9,0,2.7,0,5.1-.8,6.9-2.4,1.9-1.7,2.9-4.1,3.1-6.9l.4-8.5c0-.1,0-.3-.1-.3,0,0-.2-.1-.3-.1h0ZM724.4,292.2l-.4,8c-.1,2.6-1.1,4.8-2.7,6.3-1.6,1.4-3.7,2.2-6.2,2.2s-.6,0-.9,0l-5.3-.3-.5-5.3c-.3-3,.4-5.6,2-7.5,1.5-1.7,3.7-2.7,6.3-2.9l7.8-.4h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M740,294.5c.1.1.2.2.3.3,1.8,2,2.6,4.6,2.4,7.8l-.4,5.7c0,.2-.2.4-.4.4l-5.7.6c-3.3.3-6.1-.4-8.2-2.2-1.9-1.7-3-4.1-3.2-7l-.4-8.3c0-.1,0-.3.1-.4,0,0,.2-.1.4-.1l8.5.4c2.7.1,4.9,1.1,6.6,2.7ZM741.4,307.9l.3-5.3c.2-2.9-.6-5.3-2.1-7.1-1.5-1.7-3.7-2.6-6.3-2.7l-8-.4.4,7.8c.1,2.7,1.1,4.8,2.9,6.3,1.9,1.6,4.5,2.3,7.5,2l5.3-.5Z" fill="#fff"/>
                      <path d="M724.8,291.4c-.1,0-.2,0-.3.1,0,0-.1.2-.1.4l.4,8.3c.2,2.9,1.3,5.3,3.2,7,1.8,1.5,4.1,2.3,6.7,2.3s1,0,1.5,0l5.7-.6c.2,0,.4-.2.4-.4l.4-5.7c.2-3.1-.6-5.8-2.4-7.8-.1-.1-.2-.2-.3-.3-1.6-1.6-3.9-2.6-6.6-2.7l-8.5-.4s0,0,0,0h0ZM734.7,308.5c-2.4,0-4.5-.7-6.1-2.1-1.7-1.5-2.7-3.7-2.9-6.3l-.4-7.8,8,.4c2.6.1,4.8,1.1,6.3,2.7,1.6,1.8,2.3,4.2,2.1,7.1l-.3,5.3-5.3.5c-.5,0-1,0-1.4,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M722.4,276.9c1.6,1.6,2.6,3.9,2.7,6.5l.4,8.3c0,.1,0,.3-.1.4,0,0-.2.1-.4.1l-8.5-.4c-2.9-.1-5.3-1.2-6.9-3.1-1.8-2-2.6-4.6-2.4-7.8l.4-5.7c0-.2.2-.4.4-.4l5.7-.6c3.3-.3,6.1.4,8.2,2.2.2.1.3.3.5.5ZM724.5,291.2l-.4-7.8c-.1-2.7-1.1-4.8-2.9-6.3-1.9-1.6-4.5-2.3-7.5-2l-5.3.5-.3,5.3c-.2,2.9.6,5.3,2.1,7.1,1.5,1.7,3.7,2.6,6.3,2.7l8,.4Z" fill="#fff"/>
                      <path d="M715.1,274.2c-.5,0-1,0-1.5,0l-5.7.6c-.2,0-.4.2-.4.4l-.4,5.7c-.2,3.1.6,5.8,2.4,7.8,1.7,1.9,4.1,2.9,6.9,3.1l8.5.4s0,0,0,0c.1,0,.2,0,.3-.1,0,0,.1-.2.1-.4l-.4-8.3c-.1-2.7-1.1-4.9-2.7-6.5-.2-.2-.3-.3-.5-.5-1.8-1.5-4.1-2.3-6.7-2.3h0ZM724.5,291.2l-8-.4c-2.6-.1-4.8-1.1-6.3-2.7-1.6-1.8-2.3-4.2-2.1-7.1l.3-5.3,5.3-.5c.5,0,1,0,1.4,0,2.4,0,4.5.7,6.1,2.1,1.7,1.5,2.7,3.7,2.9,6.3l.4,7.8h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M709.1,275.3l32.3,32.3c.2.2.2.5,0,.7-.2.2-.5.2-.7,0l-32.3-32.3c-.2-.2-.2-.5,0-.7s.5-.2.7,0Z" fill="#fff"/>
                    <path d="M708.7,275.1c-.1,0-.2,0-.3.1-.2.2-.2.5,0,.7l32.3,32.3c0,0,.2.1.3.1s.2,0,.3-.1c.2-.2.2-.5,0-.7l-32.3-32.3c0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M741,275.6c.2.2.2.5,0,.7l-31.9,31.9c-.2.2-.5.2-.7,0-.2-.2-.2-.5,0-.7l31.9-31.9c.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M740.7,275.5c-.1,0-.2,0-.3.1l-31.9,31.9c-.2.2-.2.5,0,.7,0,0,.2.1.3.1s.2,0,.3-.1l31.9-31.9c.2-.2.2-.5,0-.7,0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M742,308.9c0,0,.1.2.1.3l.6,5.7c.3,3.3-.4,6.1-2.2,8.2-1.7,1.9-4.1,3-7,3.2l-8.3.4c-.1,0-.3,0-.4-.1h0c0,0-.1-.2-.1-.4l.4-8.5c.1-2.9,1.2-5.3,3.1-6.9,2-1.8,4.6-2.6,7.8-2.4l5.7.4c.1,0,.2,0,.3.1ZM725.7,325.7l7.8-.4c2.7-.1,4.8-1.1,6.3-2.9,1.6-1.9,2.3-4.5,2-7.5l-.5-5.3-5.3-.3c-2.9-.2-5.3.6-7.1,2.1-1.7,1.5-2.6,3.7-2.7,6.3l-.4,8Z" fill="#fff"/>
                      <path d="M735.1,308.3c-2.7,0-5.1.8-6.9,2.4-1.9,1.7-2.9,4.1-3.1,6.9l-.4,8.5c0,.1,0,.3.1.3,0,0,0,0,0,0,0,0,.2.1.3.1s0,0,0,0l8.3-.4c2.9-.2,5.3-1.3,7-3.2,1.8-2.1,2.5-4.9,2.2-8.2l-.6-5.7c0-.1,0-.2-.1-.3,0,0-.2-.1-.3-.1l-5.7-.4c-.3,0-.6,0-.9,0h0ZM725.7,325.7l.4-8c.1-2.6,1.1-4.8,2.7-6.3,1.6-1.4,3.7-2.2,6.2-2.2s.6,0,.9,0l5.3.3.5,5.3c.3,3-.4,5.6-2,7.5-1.5,1.7-3.7,2.7-6.3,2.9l-7.8.4h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M725.4,325.7c0,0,.1.2.1.3l-.4,8.5c-.1,2.9-1.2,5.3-3.1,6.9-2,1.8-4.6,2.6-7.8,2.4l-5.7-.4c-.2,0-.4-.2-.4-.4l-.6-5.7c-.3-3.3.4-6.1,2.2-8.2,1.7-1.9,4.1-3,7-3.2l8.3-.4c.1,0,.3,0,.4.1ZM709.1,342.6l5.3.3c2.9.2,5.3-.6,7.1-2.1,1.7-1.5,2.6-3.7,2.7-6.3l.4-8-7.8.4c-2.7.1-4.8,1.1-6.3,2.9-1.6,1.9-2.3,4.5-2,7.5l.5,5.3Z" fill="#fff"/>
                      <path d="M725.1,325.6s0,0,0,0l-8.3.4c-2.9.2-5.3,1.3-7,3.2-1.8,2.1-2.5,4.9-2.2,8.2l.6,5.7c0,.2.2.4.4.4l5.7.4c.3,0,.6,0,.9,0,2.7,0,5.1-.8,6.9-2.4,1.9-1.7,2.9-4.1,3.1-6.9l.4-8.5c0-.1,0-.3-.1-.3,0,0-.2-.1-.3-.1h0ZM724.6,326.5l-.4,8c-.1,2.6-1.1,4.8-2.7,6.3-1.6,1.4-3.7,2.2-6.2,2.2s-.6,0-.9,0l-5.3-.3-.5-5.3c-.3-3,.4-5.6,2-7.5,1.5-1.7,3.7-2.7,6.3-2.9l7.8-.4h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M740.2,328.8c.1.1.2.2.3.3,1.8,2,2.6,4.6,2.4,7.8l-.4,5.7c0,.2-.2.4-.4.4l-5.7.6c-3.3.3-6.1-.4-8.2-2.2-1.9-1.7-3-4.1-3.2-7l-.4-8.3c0-.1,0-.3.1-.4,0,0,.2-.1.4-.1l8.5.4c2.7.1,4.9,1.1,6.6,2.7ZM741.6,342.2l.3-5.3c.2-2.9-.6-5.3-2.1-7.1-1.5-1.7-3.7-2.6-6.3-2.7l-8-.4.4,7.8c.1,2.7,1.1,4.8,2.9,6.3,1.9,1.6,4.5,2.3,7.5,2l5.3-.5Z" fill="#fff"/>
                      <path d="M725.1,325.7c-.1,0-.2,0-.3.1,0,0-.1.2-.1.4l.4,8.3c.2,2.9,1.3,5.3,3.2,7,1.8,1.5,4.1,2.3,6.7,2.3s1,0,1.5,0l5.7-.6c.2,0,.4-.2.4-.4l.4-5.7c.2-3.1-.6-5.8-2.4-7.8-.1-.1-.2-.2-.3-.3-1.6-1.6-3.9-2.6-6.6-2.7l-8.5-.4s0,0,0,0h0ZM734.9,342.8c-2.4,0-4.5-.7-6.1-2.1-1.7-1.5-2.7-3.7-2.9-6.3l-.4-7.8,8,.4c2.6.1,4.8,1.1,6.3,2.7,1.6,1.8,2.3,4.2,2.1,7.1l-.3,5.3-5.3.5c-.5,0-1,0-1.4,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M722.6,311.2c1.6,1.6,2.6,3.9,2.7,6.5l.4,8.3c0,.1,0,.3-.1.4,0,0-.2.1-.4.1l-8.5-.4c-2.9-.1-5.3-1.2-6.9-3.1-1.8-2-2.6-4.6-2.4-7.8l.4-5.7c0-.2.2-.4.4-.4l5.7-.6c3.3-.3,6.1.4,8.2,2.2.2.1.3.3.5.5ZM724.7,325.5l-.4-7.8c-.1-2.7-1.1-4.8-2.9-6.3-1.9-1.6-4.5-2.3-7.5-2l-5.3.5-.3,5.3c-.2,2.9.6,5.3,2.1,7.1,1.5,1.7,3.7,2.6,6.3,2.7l8,.4Z" fill="#fff"/>
                      <path d="M715.4,308.5c-.5,0-1,0-1.5,0l-5.7.6c-.2,0-.4.2-.4.4l-.4,5.7c-.2,3.1.6,5.8,2.4,7.8,1.7,1.9,4.1,2.9,6.9,3.1l8.5.4s0,0,0,0c.1,0,.2,0,.3-.1,0,0,.1-.2.1-.4l-.4-8.3c-.1-2.7-1.1-4.9-2.7-6.5-.2-.2-.3-.3-.5-.5-1.8-1.5-4.1-2.3-6.7-2.3h0ZM724.8,325.5l-8-.4c-2.6-.1-4.8-1.1-6.3-2.7-1.6-1.8-2.3-4.2-2.1-7.1l.3-5.3,5.3-.5c.5,0,1,0,1.4,0,2.4,0,4.5.7,6.1,2.1,1.7,1.5,2.7,3.7,2.9,6.3l.4,7.8h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M709.3,309.6l32.3,32.3c.2.2.2.5,0,.7-.2.2-.5.2-.7,0l-32.3-32.3c-.2-.2-.2-.5,0-.7.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M709,309.4c-.1,0-.2,0-.3.1-.2.2-.2.5,0,.7l32.3,32.3c0,0,.2.1.3.1s.2,0,.3-.1c.2-.2.2-.5,0-.7l-32.3-32.3c0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M741.3,310c.2.2.2.5,0,.7l-31.9,31.9c-.2.2-.5.2-.7,0s-.2-.5,0-.7l31.9-31.9c.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M740.9,309.8c-.1,0-.2,0-.3.1l-31.9,31.9c-.2.2-.2.5,0,.7s.2.1.3.1.2,0,.3-.1l31.9-31.9c.2-.2.2-.5,0-.7,0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M742.3,343.4c0,0,.1.2.1.3l.6,5.7c.3,3.3-.4,6.1-2.2,8.2-1.7,1.9-4.1,3-7,3.2l-8.3.4c-.1,0-.3,0-.4-.1,0,0,0,0,0,0,0,0-.1-.2-.1-.3l.4-8.5c.1-2.9,1.2-5.3,3.1-6.9,2-1.8,4.6-2.6,7.8-2.4l5.7.4c.1,0,.2,0,.3.1ZM726,360.2l7.8-.4c2.7-.1,4.8-1.1,6.3-2.9,1.6-1.9,2.3-4.5,2-7.5l-.5-5.3-5.3-.3c-2.9-.2-5.3.6-7.1,2.1-1.7,1.5-2.6,3.7-2.7,6.3l-.4,8Z" fill="#fff"/>
                      <path d="M735.4,342.8c-2.7,0-5.1.8-6.9,2.4-1.9,1.7-2.9,4.1-3.1,6.9l-.4,8.5c0,.1,0,.3.1.3,0,0,0,0,0,0,0,0,.2.1.3.1s0,0,0,0l8.3-.4c2.9-.2,5.3-1.3,7-3.2,1.8-2.1,2.5-4.9,2.2-8.2l-.6-5.7c0-.1,0-.2-.1-.3,0,0-.2-.1-.3-.1l-5.7-.4c-.3,0-.6,0-.9,0h0ZM726,360.2l.4-8c.1-2.6,1.1-4.8,2.7-6.3,1.6-1.4,3.7-2.2,6.2-2.2s.6,0,.9,0l5.3.3.5,5.3c.3,3-.4,5.6-2,7.5-1.5,1.7-3.7,2.7-6.3,2.9l-7.8.4h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M725.7,360.2c0,0,.1.2.1.3l-.4,8.5c-.1,2.9-1.2,5.3-3.1,6.9-2,1.8-4.6,2.6-7.8,2.4l-5.7-.4c-.2,0-.4-.2-.4-.4l-.6-5.7c-.3-3.3.4-6.1,2.2-8.2,1.7-1.9,4.1-3,7-3.2l8.3-.4c.1,0,.3,0,.4.1ZM709.4,377.1l5.3.3c2.9.2,5.3-.6,7.1-2.1,1.7-1.5,2.6-3.7,2.7-6.3l.4-8-7.8.4c-2.7.1-4.8,1.1-6.3,2.9-1.6,1.9-2.3,4.5-2,7.5l.5,5.3Z" fill="#fff"/>
                      <path d="M725.4,360.1s0,0,0,0l-8.3.4c-2.9.2-5.3,1.3-7,3.2-1.8,2.1-2.5,4.9-2.2,8.2l.6,5.7c0,.2.2.4.4.4l5.7.4c.3,0,.6,0,.9,0,2.7,0,5.1-.8,6.9-2.4,1.9-1.7,2.9-4.1,3.1-6.9l.4-8.5c0-.1,0-.3-.1-.3,0,0-.2-.1-.3-.1h0ZM724.9,361l-.4,8c-.1,2.6-1.1,4.8-2.7,6.3-1.6,1.4-3.7,2.2-6.2,2.2s-.6,0-.9,0l-5.3-.3-.5-5.3c-.3-3,.4-5.6,2-7.5,1.5-1.7,3.7-2.7,6.3-2.9l7.8-.4h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M740.5,363.3c.1.1.2.2.3.3,1.8,2,2.6,4.6,2.4,7.8l-.4,5.7c0,.2-.2.4-.4.4l-5.7.6c-3.3.3-6.1-.4-8.2-2.2-1.9-1.7-3-4.1-3.2-7l-.4-8.3c0-.1,0-.3.1-.4,0,0,.2-.1.4-.1l8.5.4c2.7.1,4.9,1.1,6.6,2.7ZM741.9,376.7l.3-5.3c.2-2.9-.6-5.3-2.1-7.1-1.5-1.7-3.7-2.6-6.3-2.7l-8-.4.4,7.8c.1,2.7,1.1,4.8,2.9,6.3,1.9,1.6,4.5,2.3,7.5,2l5.3-.5Z" fill="#fff"/>
                      <path d="M725.4,360.2c-.1,0-.2,0-.3.1,0,0-.1.2-.1.4l.4,8.3c.2,2.9,1.3,5.3,3.2,7,1.8,1.5,4.1,2.3,6.7,2.3s1,0,1.5,0l5.7-.6c.2,0,.4-.2.4-.4l.4-5.7c.2-3.1-.6-5.8-2.4-7.8-.1-.1-.2-.2-.3-.3-1.6-1.6-3.9-2.6-6.6-2.7l-8.5-.4s0,0,0,0h0ZM735.3,377.3c-2.4,0-4.5-.7-6.1-2.1-1.7-1.5-2.7-3.7-2.9-6.3l-.4-7.8,8,.4c2.6.1,4.8,1.1,6.3,2.7,1.6,1.8,2.3,4.2,2.1,7.1l-.3,5.3-5.3.5c-.5,0-1,0-1.4,0h0Z" fill="#efe7da"/>
                    </g>
                    <g>
                      <path d="M722.9,345.7c1.6,1.6,2.6,3.9,2.7,6.5l.4,8.3c0,.1,0,.3-.1.4,0,0-.2.1-.4.1l-8.5-.4c-2.9-.1-5.3-1.2-6.9-3.1-1.8-2-2.6-4.6-2.4-7.8l.4-5.7c0-.2.2-.4.4-.4l5.7-.6c3.3-.3,6.1.4,8.2,2.2.2.1.3.3.5.5ZM725.1,360l-.4-7.8c-.1-2.7-1.1-4.8-2.9-6.3-1.9-1.6-4.5-2.3-7.5-2l-5.3.5-.3,5.3c-.2,2.9.6,5.3,2.1,7.1,1.5,1.7,3.7,2.6,6.3,2.7l8,.4Z" fill="#fff"/>
                      <path d="M715.7,343c-.5,0-1,0-1.5,0l-5.7.6c-.2,0-.4.2-.4.4l-.4,5.7c-.2,3.1.6,5.8,2.4,7.8,1.7,1.9,4.1,2.9,6.9,3.1l8.5.4s0,0,0,0c.1,0,.2,0,.3-.1,0,0,.1-.2.1-.4l-.4-8.3c-.1-2.7-1.1-4.9-2.7-6.5-.2-.2-.3-.3-.5-.5-1.8-1.5-4.1-2.3-6.7-2.3h0ZM725.1,360l-8-.4c-2.6-.1-4.8-1.1-6.3-2.7-1.6-1.8-2.3-4.2-2.1-7.1l.3-5.3,5.3-.5c.5,0,1,0,1.4,0,2.4,0,4.5.7,6.1,2.1,1.7,1.5,2.7,3.7,2.9,6.3l.4,7.8h0Z" fill="#efe7da"/>
                    </g>
                  </g>
                  <g>
                    <path d="M709.6,344.1l32.3,32.3c.2.2.2.5,0,.7-.2.2-.5.2-.7,0l-32.3-32.3c-.2-.2-.2-.5,0-.7.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M709.3,343.9c-.1,0-.2,0-.3.1-.2.2-.2.5,0,.7l32.3,32.3c0,0,.2.1.3.1s.2,0,.3-.1c.2-.2.2-.5,0-.7l-32.3-32.3c0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M741.6,344.4c.2.2.2.5,0,.7l-31.9,31.9c-.2.2-.5.2-.7,0-.2-.2-.2-.5,0-.7l31.9-31.9c.2-.2.5-.2.7,0Z" fill="#fff"/>
                    <path d="M741.2,344.3c-.1,0-.2,0-.3.1l-31.9,31.9c-.2.2-.2.5,0,.7,0,0,.2.1.3.1s.2,0,.3-.1l31.9-31.9c.2-.2.2-.5,0-.7,0,0-.2-.1-.3-.1h0Z" fill="#efe7da"/>
                  </g>
                </g>
              </g>
            </g>
            <g id="Flooring">
              <rect x="845.5" y="484.6" width="21.1" height="21.9" fill="#bcd3dd"/>
              <rect x="845.5" y="507.1" width="21.1" height="21.9" fill="#bcd3dd"/>
              <rect x="867.4" y="484.8" width="21.1" height="21.9" fill="#bcd3dd"/>
              <rect x="889.3" y="484.8" width="21.1" height="21.9" fill="#bcd3dd"/>
              <rect x="867.4" y="507.3" width="21.1" height="21.9" fill="#bcd3dd"/>
              <rect x="889.3" y="507.3" width="21.1" height="21.9" fill="#bcd3dd"/>
              <rect x="801.7" y="484.7" width="21.1" height="21.9" fill="#bcd3dd"/>
              <rect x="801.7" y="507.2" width="21.1" height="21.9" fill="#bcd3dd"/>
              <rect x="823.6" y="484.7" width="21.1" height="21.9" fill="#bcd3dd"/>
              <rect x="845.5" y="462.2" width="21.1" height="21.9" fill="#bcd3dd"/>
              <rect x="867.4" y="462.5" width="21.1" height="21.9" fill="#bcd3dd"/>
              <rect x="889.3" y="462.5" width="21.1" height="21.9" fill="#bcd3dd"/>
              <rect x="801.7" y="462.4" width="21.1" height="21.9" fill="#bcd3dd"/>
              <rect x="823.6" y="462.3" width="21.1" height="21.9" fill="#bcd3dd"/>
              <rect x="823.6" y="507.1" width="21.1" height="21.9" fill="#bcd3dd"/>
            </g>
            <g id="components">
              <path d="M634.9,423.3v1.5h-33.7v-1.5h33.7M635.4,422.8h-34.7v2.5h34.7v-2.5h0Z" fill="#425563"/>
              <path d="M492.5,463.3v1.6h-35.8v-1.6h35.8M493,462.8h-36.8v2.6h36.8v-2.6h0Z" fill="#425563"/>
              <path d="M617.9,425.3v.9h-33v-.9h33M618.4,424.8h-34v1.9h34v-1.9h0Z" fill="#425563"/>
              <path d="M324.5,516.5v33.7h-1.6v-33.7h1.6M325,516h-2.6v34.7h2.6v-34.7h0Z" fill="#425563"/>
              <path d="M390.1,516.5v33.7h-1.6v-33.7h1.6M390.6,516h-2.6v34.7h2.6v-34.7h0Z" fill="#425563"/>
              <path d="M757,363.5v33.7h-1.6v-33.7h1.6M757.5,363h-2.6v34.7h2.6v-34.7h0Z" fill="#425563"/>
              <path d="M901.7,375.5v31.7h-1.6v-31.7h1.6M902.2,375h-2.6v32.7h2.6v-32.7h0Z" fill="#425563"/>
              <path d="M758.9,533.6v35.6h-1.6v-35.6h1.6M759.4,533.1h-2.6v36.6h2.6v-36.6h0Z" fill="#425563"/>
              <path d="M833.1,523v1.7h-31.4v-1.7h31.4M833.6,522.5h-32.4v2.7h32.4v-2.7h0Z" fill="#425563"/>
              <line x1="578.3" y1="437.5" x2="658.4" y2="437.5" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <line x1="659.2" y1="601.3" x2="659.2" y2="649.3" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <line x1="670.4" y1="601.3" x2="670.4" y2="649.3" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <line x1="681.6" y1="601.3" x2="681.6" y2="649.3" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <line x1="692.8" y1="601.3" x2="692.8" y2="649.3" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <line x1="696.2" y1="594.7" x2="744.3" y2="594.7" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <line x1="696.2" y1="583.2" x2="744.3" y2="583.2" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <line x1="696.2" y1="571.7" x2="744.3" y2="571.7" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <line x1="696.2" y1="561" x2="744.3" y2="561" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <line x1="696.2" y1="549.4" x2="744.3" y2="549.4" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <line x1="696.2" y1="537.9" x2="744.3" y2="537.9" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <line x1="696.2" y1="526.8" x2="744.3" y2="526.8" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <line x1="696.2" y1="515.6" x2="744.3" y2="515.6" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <line x1="696.2" y1="504.6" x2="744.3" y2="504.6" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <line x1="696.2" y1="493.5" x2="744.3" y2="493.5" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <line x1="696.2" y1="481.7" x2="744.3" y2="481.7" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <line x1="696.2" y1="470.4" x2="744.3" y2="470.4" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <path d="M324.9,550.4c8.2-1.5,16.1-4.4,22-10.5,6.1-6.3,8.8-14.9,9.6-23.5.6,4.4,1.5,8.9,3.1,13s3.9,8.1,7,11.3c5.3,5.4,13.8,9.4,21.5,9.6" fill="none" stroke="#425563" strokeLinejoin="round" strokeWidth=".5"/>
              <path d="M456.9,498.9s35.8,3.4,35.8-33.5" fill="none" stroke="#425563" strokeLinejoin="round" strokeWidth=".5"/>
              <path d="M802.2,493s14.6,1,22.3,10.3,8.7,16.6,8.7,19.3" fill="none" stroke="#425563" strokeMiterlimit="10"/>
              <path d="M870.5,375.8s.5,13.8,9.1,21.8,17.8,9.1,20.2,9.7" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <path d="M757.4,363.3s15.7,2.4,23.2,12.3,8.1,17.2,8.1,21.7" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <path d="M793.2,533.6s-.4,15.5-8,22.8-18.1,13-25.7,13" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              <line x1="801.2" y1="485.4" x2="869.4" y2="485.4" fill="none" stroke="#425563" strokeMiterlimit="10"/>
              <line x1="869.4" y1="460" x2="869.4" y2="485.9" fill="none" stroke="#425563" strokeMiterlimit="10"/>
              <rect x="802.3" y="462.1" width="67.1" height="22.8" fill="#dde7ed"/>
              <rect x="852.5" y="528.9" width="55.1" height="42.8" fill="#dde7ed"/>
              <line x1="815.7" y1="375.8" x2="815.7" y2="442.1" fill="none" stroke="#425563" strokeMiterlimit="10"/>
              <line x1="912" y1="442.1" x2="815.7" y2="442.1" fill="none" stroke="#425563" strokeMiterlimit="10"/>
            </g>
            <g id="window-wells">
              <g>
                <path d="M245.7,299.6v-55.7h-27.8c-2.4,0-4.5.7-6.4,1.8-2,1.1-3.5,2.6-4.5,4.5-1.1,1.9-1.7,4.1-1.8,6.4v7" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <polygon points="209.7 277.8 206.3 277.8 206.3 279 210.8 279 210.8 263.1 206.3 263.1 206.3 264.2 209.7 264.2 209.7 277.8" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <path d="M246,298.3h-27.2c-2.3-.1-4.4-.7-6.3-1.8-1.9-1.1-3.4-2.6-4.4-4.5-1.1-1.9-1.7-4-1.8-6.3v-6.7" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <path d="M246,239h-1.1v3.6h-26.1c-2.5,0-4.8.7-6.8,1.9-2,1.2-3.6,2.9-4.9,5-1.2,2-1.8,4.3-1.9,6.8v29.4c0,2.5.7,4.9,1.9,6.9,1.2,2.1,2.9,3.7,4.9,4.9,2.1,1.2,4.3,1.9,6.8,1.9h26v3.7h1.2" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <path d="M246,298.2v-54.4h-27.2c-2.3,0-4.4.7-6.3,1.8-1.9,1.1-3.4,2.6-4.4,4.4-1.1,1.9-1.7,4-1.8,6.3v6.8" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <line x1="206.3" y1="277.8" x2="206.3" y2="264.2" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <line x1="262.9" y1="303.1" x2="262.9" y2="243.8" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
              </g>
              <g>
                <path d="M245.7,419.4v-55.7h-27.8c-2.4,0-4.5.7-6.4,1.8-2,1.1-3.5,2.6-4.5,4.5-1.1,1.9-1.7,4.1-1.8,6.4v7" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <polygon points="209.7 397.6 206.3 397.6 206.3 398.7 210.8 398.7 210.8 382.8 206.3 382.8 206.3 383.9 209.7 383.9 209.7 397.6" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <path d="M246,418h-27.2c-2.3-.1-4.4-.7-6.3-1.8-1.9-1.1-3.4-2.6-4.4-4.5-1.1-1.9-1.7-4-1.8-6.3v-6.7" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <path d="M246,358.7h-1.1v3.6h-26.1c-2.5,0-4.8.7-6.8,1.9-2,1.2-3.6,2.9-4.9,5-1.2,2-1.8,4.3-1.9,6.8v29.4c0,2.5.7,4.9,1.9,6.9,1.2,2.1,2.9,3.7,4.9,4.9,2.1,1.2,4.3,1.9,6.8,1.9h26v3.7h1.2" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <path d="M246,417.9v-54.4h-27.2c-2.3,0-4.4.7-6.3,1.8-1.9,1.1-3.4,2.6-4.4,4.4-1.1,1.9-1.7,4-1.8,6.3v6.8" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <line x1="206.3" y1="397.6" x2="206.3" y2="383.9" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <line x1="262.9" y1="422.8" x2="262.9" y2="357.5" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
              </g>
              <g>
                <path d="M245.7,640.8v-55.7h-27.8c-2.4,0-4.5.7-6.4,1.8-2,1.1-3.5,2.6-4.5,4.5-1.1,1.9-1.7,4.1-1.8,6.4v7" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <polygon points="209.7 619.1 206.3 619.1 206.3 620.2 210.8 620.2 210.8 604.3 206.3 604.3 206.3 605.4 209.7 605.4 209.7 619.1" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <path d="M246,639.5h-27.2c-2.3-.1-4.4-.7-6.3-1.8-1.9-1.1-3.4-2.6-4.4-4.5-1.1-1.9-1.7-4-1.8-6.3v-6.7" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <path d="M246,580.2h-1.1v3.6h-26.1c-2.5,0-4.8.7-6.8,1.9-2,1.2-3.6,2.9-4.9,5-1.2,2-1.8,4.3-1.9,6.8v29.4c0,2.5.7,4.9,1.9,6.9,1.2,2.1,2.9,3.7,4.9,4.9,2.1,1.2,4.3,1.9,6.8,1.9h26v3.7h1.2" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <path d="M246,639.4v-54.4h-27.2c-2.3,0-4.4.7-6.3,1.8-1.9,1.1-3.4,2.6-4.4,4.4-1.1,1.9-1.7,4-1.8,6.3v6.8" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <line x1="206.3" y1="619.1" x2="206.3" y2="605.4" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <line x1="262.9" y1="644.3" x2="262.9" y2="579" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
              </g>
              <g>
                <path d="M923.7,258.3v55.7h27.8c2.4,0,4.5-.7,6.4-1.8,2-1.1,3.5-2.6,4.5-4.5,1.1-1.9,1.7-4.1,1.8-6.4v-7" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <polygon points="959.7 280.1 963.1 280.1 963.1 279 958.6 279 958.6 294.9 963.1 294.9 963.1 293.8 959.7 293.8 959.7 280.1" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <path d="M923.5,259.7h27.2c2.3.1,4.4.7,6.3,1.8,1.9,1.1,3.4,2.6,4.4,4.5,1.1,1.9,1.7,4,1.8,6.3v6.7" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <path d="M923.5,319h1.1v-3.6h26.1c2.5,0,4.8-.7,6.8-1.9,2-1.2,3.6-2.9,4.9-5,1.2-2,1.8-4.3,1.9-6.8v-29.4c0-2.5-.7-4.9-1.9-6.9-1.2-2.1-2.9-3.7-4.9-4.9-2.1-1.2-4.3-1.9-6.8-1.9h-26v-3.7h-1.2" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <path d="M923.5,259.8v54.4h27.2c2.3,0,4.4-.7,6.3-1.8,1.9-1.1,3.4-2.6,4.4-4.4,1.1-1.9,1.7-4,1.8-6.3v-6.8" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <line x1="963.1" y1="280.1" x2="963.1" y2="293.8" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <line x1="906.5" y1="254.9" x2="906.5" y2="314.2" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
              </g>
            </g>
            <g id="basement-structural">
              <rect x="225.7" y="321.5" width="57.2" height="17.3" transform="translate(-75.8 584.4) rotate(-90)" fill="#425563"/>
              <polygon points="323 512 323 516.5 262.9 516.5 262.9 579.3 245.7 579.3 245.7 417.9 262.9 417.9 262.9 512 323 512" fill="#425563"/>
              <path d="M906.5,314.2v56.8h-4.3v4.9h4.3v79.3h-104.2v-79.3h68.5v-4.9h-73.4v26.2h-8.8v4.5h8.8v53.4h-3.1v6.9h3.1v31.4h4.9v-31.4h104.2v107.7h-54v-40.7h-50.4v-4.7h-4.6v4.7h-4.6v4.5h55.1v40.6h58.5v77.3h-158v-118h8.8v-4.5h-8.8v-67.1h5.7v-6.9h-3.2v-3.5h-7.4v196h-87.1v3.9h-4.5v151.7h-90.3v164.6h-143.6v-27.3h-155.2v-220.6h194v-221.1h-4.6v13h-62.3v4.6h62.3v198.9h-189.4v-72h-17.3v496.1h95.4v12.9h161.9v-175.1h68.2v-162.4h80.9v161.9h271.8V314.2h-17.3ZM493.5,1143.1h-143v-3.5h.2v-9.4h-87.7v-180.1h145.8v27.3h84.8v165.7ZM906.5,967.2h-244.9v-305.5h244.9v305.5Z" fill="#425563"/>
              <path d="M697.1,596.6v-141.5h-.1l-32.1-32.3v-.7h-13.7v5.2h7.2v27.6h-80.1v-27.6h6.1v-5.3h-99.8l-32.8,32.8v8.7h5.3v-6.5l29.6-29.6h86.2v34.7h.3c0,0,117.6,0,117.6,0v134.5h-34.4v4.7h40.7v-4.7h0ZM663,455v-26.6l26.4,26.6h-26.4Z" fill="#425563"/>
              <polygon points="923.8 191.5 923.8 254.9 906.5 254.9 906.5 208.8 748.5 208.8 748.5 397.2 755.8 397.2 755.8 401.7 750.9 401.7 750.9 405.2 743.6 405.2 743.6 208.8 262.9 208.8 262.9 244.2 245.7 244.2 245.7 191.5 923.8 191.5" fill="#425563"/>
            </g>
            <g id="furniture">
              <g id="Pool_table" filter="url(#ds-soft)">
                <g>
                  <rect x="310.07" y="287.26" width="63.3" height="128.54" rx="3.25" ry="3.25" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M373.6,290.51v122.03c0,1.92-1.56,3.48-3.48,3.48h-56.79c-1.92,0-3.48-1.56-3.48-3.48v-122.03c0-1.92,1.56-3.48,3.48-3.48h56.79c1.92,0,3.48,1.56,3.48,3.48ZM310.3,412.55c0,1.67,1.36,3.03,3.03,3.03h56.79c1.67,0,3.03-1.36,3.03-3.03v-122.03c0-1.67-1.36-3.03-3.03-3.03h-56.79c-1.67,0-3.03,1.36-3.03,3.03v122.03Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <rect x="313.81" y="291" width="55.82" height="121.06" fill="#f5f3ef" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M369.86,290.77v121.52h-56.27v-121.52h56.27ZM369.4,411.83v-120.61h-55.36v120.61h55.36Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M364.7,287.26h5.41c1.8,0,3.25,1.46,3.25,3.25v5.82h0c-4.79,0-8.67-3.88-8.67-8.67,0-.14,0-.27,0-.41Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M373.6,290.51v6.05h-.23c-4.91,0-8.9-3.99-8.9-8.9,0-.14,0-.28,0-.42v-.22h5.64c1.92,0,3.48,1.56,3.48,3.48ZM373.14,296.1v-5.59c0-1.67-1.36-3.03-3.03-3.03h-5.19c0,.06,0,.12,0,.18,0,4.58,3.67,8.32,8.22,8.44Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M310.07,295.92v-5.41c0-1.8,1.46-3.25,3.25-3.25h5.82c0,4.79-3.88,8.67-8.67,8.67-.14,0-.27,0-.41,0Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M319.37,287.03v.23c0,4.91-3.99,8.9-8.9,8.9-.14,0-.28,0-.42,0h-.22v-5.64c0-1.92,1.56-3.48,3.48-3.48h6.05ZM310.3,295.7c.06,0,.12,0,.18,0,4.58,0,8.32-3.67,8.44-8.22h-5.59c-1.67,0-3.03,1.36-3.03,3.03v5.19Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M318.74,415.8h-5.41c-1.8,0-3.25-1.46-3.25-3.25v-5.82h0c4.79,0,8.67,3.88,8.67,8.67,0,.14,0,.27,0,.41Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M318.97,415.39c0,.14,0,.28,0,.42v.22h-5.64c-1.92,0-3.48-1.56-3.48-3.48v-6.05h.23c4.91,0,8.9,3.99,8.9,8.9ZM318.52,415.57c0-.06,0-.12,0-.18,0-4.58-3.67-8.32-8.22-8.44v5.59c0,1.67,1.36,3.03,3.03,3.03h5.19Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M373.37,407.14v5.41c0,1.8-1.46,3.25-3.25,3.25h-5.82c0-4.79,3.88-8.67,8.67-8.67.14,0,.27,0,.41,0Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M373.6,406.92v5.63c0,1.92-1.56,3.48-3.48,3.48h-6.05v-.23c0-4.91,3.99-8.9,8.9-8.9.14,0,.28,0,.42,0h.22ZM364.52,415.57h5.59c1.67,0,3.03-1.36,3.03-3.03v-5.19c-.06,0-.12,0-.18,0-4.58,0-8.32,3.67-8.44,8.22Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M310.18,357.99c3.52-.06,6.35-2.93,6.35-6.46s-2.83-6.4-6.35-6.46v12.92Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M316.76,351.53c0,3.63-2.95,6.62-6.57,6.69h-.23s0-13.38,0-13.38h.23c3.62.07,6.57,3.06,6.57,6.69ZM310.41,357.75c3.27-.18,5.9-2.92,5.9-6.22s-2.62-6.05-5.9-6.22v12.45Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M373.37,345.07c-3.52.06-6.35,2.93-6.35,6.46s2.83,6.4,6.35,6.46v-12.92Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M373.6,344.84v13.38h-.23c-3.62-.07-6.57-3.06-6.57-6.69s2.95-6.62,6.57-6.69h.23ZM373.14,357.75v-12.45c-3.27.18-5.9,2.92-5.9,6.22s2.62,6.05,5.9,6.22Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M337.77,376.3c1.03,0,1.86.83,1.86,1.86s-.83,1.86-1.86,1.86-1.86-.83-1.86-1.86.83-1.86,1.86-1.86Z" fill="#fff"/>
                  <path d="M339.63,378.17c0,1.15-.94,2.09-2.09,2.09s-2.09-.94-2.09-2.09.94-2.09,2.09-2.09,2.09.94,2.09,2.09ZM335.9,378.17c0,.9.73,1.64,1.64,1.64s1.64-.73,1.64-1.64-.73-1.64-1.64-1.64-1.64.73-1.64,1.64Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M334.04,376.3c1.03,0,1.86.83,1.86,1.86s-.83,1.86-1.86,1.86-1.86-.83-1.86-1.86.83-1.86,1.86-1.86Z" fill="#fff"/>
                  <path d="M335.9,378.17c0,1.15-.94,2.09-2.09,2.09s-2.09-.94-2.09-2.09.94-2.09,2.09-2.09,2.09.94,2.09,2.09ZM332.18,378.17c0,.9.73,1.64,1.64,1.64s1.64-.73,1.64-1.64-.73-1.64-1.64-1.64-1.64.73-1.64,1.64Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M341.5,376.3c1.03,0,1.86.83,1.86,1.86s-.83,1.86-1.86,1.86-1.86-.83-1.86-1.86.83-1.86,1.86-1.86Z" fill="#fff"/>
                  <path d="M343.36,378.17c0,1.15-.94,2.09-2.09,2.09s-2.09-.94-2.09-2.09.94-2.09,2.09-2.09,2.09.94,2.09,2.09ZM339.63,378.17c0,.9.73,1.64,1.64,1.64s1.64-.73,1.64-1.64-.73-1.64-1.64-1.64-1.64.73-1.64,1.64Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M345.22,376.3c1.03,0,1.86.83,1.86,1.86s-.83,1.86-1.86,1.86-1.86-.83-1.86-1.86.83-1.86,1.86-1.86Z" fill="#fff"/>
                  <path d="M347.09,378.17c0,1.15-.94,2.09-2.09,2.09s-2.09-.94-2.09-2.09.94-2.09,2.09-2.09,2.09.94,2.09,2.09ZM343.36,378.17c0,.9.73,1.64,1.64,1.64s1.64-.73,1.64-1.64-.73-1.64-1.64-1.64-1.64.73-1.64,1.64Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M339.4,380.03c1.03,0,1.86.83,1.86,1.86s-.83,1.86-1.86,1.86-1.86-.83-1.86-1.86.83-1.86,1.86-1.86Z" fill="#fff"/>
                  <path d="M341.5,381.9c0,1.15-.94,2.09-2.09,2.09s-2.09-.94-2.09-2.09.94-2.09,2.09-2.09,2.09.94,2.09,2.09ZM337.77,381.9c0,.9.73,1.64,1.64,1.64s1.64-.73,1.64-1.64-.73-1.64-1.64-1.64-1.64.73-1.64,1.64Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M335.9,380.03c1.03,0,1.86.83,1.86,1.86s-.83,1.86-1.86,1.86-1.86-.83-1.86-1.86.83-1.86,1.86-1.86Z" fill="#fff"/>
                  <path d="M337.77,381.9c0,1.15-.94,2.09-2.09,2.09s-2.09-.94-2.09-2.09.94-2.09,2.09-2.09,2.09.94,2.09,2.09ZM334.04,381.9c0,.9.73,1.64,1.64,1.64s1.64-.73,1.64-1.64-.73-1.64-1.64-1.64-1.64.73-1.64,1.64Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M343.13,380.03c1.03,0,1.86.83,1.86,1.86s-.83,1.86-1.86,1.86-1.86-.83-1.86-1.86.83-1.86,1.86-1.86Z" fill="#fff"/>
                  <path d="M345.22,381.9c0,1.15-.94,2.09-2.09,2.09s-2.09-.94-2.09-2.09.94-2.09,2.09-2.09,2.09.94,2.09,2.09ZM341.5,381.9c0,.9.73,1.64,1.64,1.64s1.64-.73,1.64-1.64-.73-1.64-1.64-1.64-1.64.73-1.64,1.64Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M346.86,380.03c1.03,0,1.86.83,1.86,1.86s-.83,1.86-1.86,1.86-1.86-.83-1.86-1.86.83-1.86,1.86-1.86Z" fill="#fff"/>
                  <path d="M348.95,381.9c0,1.15-.94,2.09-2.09,2.09s-2.09-.94-2.09-2.09.94-2.09,2.09-2.09,2.09.94,2.09,2.09ZM345.22,381.9c0,.9.73,1.64,1.64,1.64s1.64-.73,1.64-1.64-.73-1.64-1.64-1.64-1.64.73-1.64,1.64Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M337.54,383.51c1.03,0,1.86.83,1.86,1.86s-.83,1.86-1.86,1.86-1.86-.83-1.86-1.86.83-1.86,1.86-1.86Z" fill="#fff"/>
                  <path d="M339.63,385.38c0,1.15-.94,2.09-2.09,2.09s-2.09-.94-2.09-2.09.94-2.09,2.09-2.09,2.09.94,2.09,2.09ZM335.9,385.38c0,.9.73,1.64,1.64,1.64s1.64-.73,1.64-1.64-.73-1.64-1.64-1.64-1.64.73-1.64,1.64Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <circle cx="341.27" cy="385.38" r="1.86" fill="#fff"/>
                  <path d="M343.36,385.38c0,1.15-.94,2.09-2.09,2.09s-2.09-.94-2.09-2.09.94-2.09,2.09-2.09,2.09.94,2.09,2.09ZM339.63,385.38c0,.9.73,1.64,1.64,1.64s1.64-.73,1.64-1.64-.73-1.64-1.64-1.64-1.64.73-1.64,1.64Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M339.4,386.99c1.03,0,1.86.83,1.86,1.86s-.83,1.86-1.86,1.86-1.86-.83-1.86-1.86.83-1.86,1.86-1.86Z" fill="#fff"/>
                  <path d="M341.5,388.86c0,1.15-.94,2.09-2.09,2.09s-2.09-.94-2.09-2.09.94-2.09,2.09-2.09,2.09.94,2.09,2.09ZM337.77,388.86c0,.9.73,1.64,1.64,1.64s1.64-.73,1.64-1.64-.73-1.64-1.64-1.64-1.64.73-1.64,1.64Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <circle cx="341.27" cy="392.33" r="1.86" fill="#fff"/>
                  <path d="M343.36,392.33c0,1.15-.94,2.09-2.09,2.09s-2.09-.94-2.09-2.09.94-2.09,2.09-2.09,2.09.94,2.09,2.09ZM339.63,392.33c0,.9.73,1.64,1.64,1.64s1.64-.73,1.64-1.64-.73-1.64-1.64-1.64-1.64.73-1.64,1.64Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M343.13,386.99c1.03,0,1.86.83,1.86,1.86s-.83,1.86-1.86,1.86-1.86-.83-1.86-1.86.83-1.86,1.86-1.86Z" fill="#fff"/>
                  <path d="M345.22,388.86c0,1.15-.94,2.09-2.09,2.09s-2.09-.94-2.09-2.09.94-2.09,2.09-2.09,2.09.94,2.09,2.09ZM341.5,388.86c0,.9.73,1.64,1.64,1.64s1.64-.73,1.64-1.64-.73-1.64-1.64-1.64-1.64.73-1.64,1.64Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <circle cx="345" cy="385.38" r="1.86" fill="#fff"/>
                  <path d="M347.09,385.38c0,1.15-.94,2.09-2.09,2.09s-2.09-.94-2.09-2.09.94-2.09,2.09-2.09,2.09.94,2.09,2.09ZM343.36,385.38c0,.9.73,1.64,1.64,1.64s1.64-.73,1.64-1.64-.73-1.64-1.64-1.64-1.64.73-1.64,1.64Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M348.95,376.3c1.03,0,1.86.83,1.86,1.86s-.83,1.86-1.86,1.86-1.86-.83-1.86-1.86.83-1.86,1.86-1.86Z" fill="#fff"/>
                  <path d="M350.82,378.17c0,1.15-.94,2.09-2.09,2.09s-2.09-.94-2.09-2.09.94-2.09,2.09-2.09,2.09.94,2.09,2.09ZM347.09,378.17c0,.9.73,1.64,1.64,1.64s1.64-.73,1.64-1.64-.73-1.64-1.64-1.64-1.64.73-1.64,1.64Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <polygon points="329.65 300.25 329.65 351.53 329.38 351.53 328.72 300.25 329.65 300.25" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M329.88,300.02v51.74h-.72v-.22s-.67-51.51-.67-51.51h1.39ZM329.42,337.3v-36.83h-.47l.47,36.83Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <polygon points="344.38 304.82 333.97 355.03 333.7 354.98 343.47 304.63 344.38 304.82" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M344.65,304.64l-10.5,50.66-.71-.15,9.85-50.79,1.36.28ZM336.63,341.06l7.48-36.07-.46-.1-7.01,36.16Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
              </g>
              <g id="TV_stand" filter="url(#ds-soft)">
                <g>
                  <rect x="708.68" y="321.35" width="32.66" height="25.18" transform="translate(391.07 1058.95) rotate(-90)" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M737.84,317.37v33.13h-25.66v-33.13h25.66ZM737.37,350.03v-32.19h-24.71v32.19h24.71Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <rect x="708.68" y="244.66" width="32.66" height="25.18" transform="translate(467.76 982.27) rotate(-90)" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M737.84,240.69v33.13h-25.66v-33.13h25.66ZM737.37,273.35v-32.19h-24.71v32.19h24.71Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <rect x="703.05" y="282.97" width="43.93" height="25.18" transform="translate(429.45 1020.57) rotate(-90)" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M737.84,273.36v44.41h-25.66v-44.41h25.66ZM737.37,317.29v-43.46h-24.71v43.46h24.71Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M724.75,305.31v-19.51h.17c.6,0,1.08.48,1.08,1.08v17.35c0,.59-.48,1.08-1.08,1.08h-.17Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                      <path d="M726.24,286.88v17.35c0,.72-.59,1.31-1.31,1.31h-.41v-19.98h.41c.72,0,1.31.59,1.31,1.31ZM724.99,305.07c.43-.03.77-.4.77-.84v-17.35c0-.44-.34-.8-.77-.84v19.03Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                      <path d="M723.01,308.66h.23c.8,0,1.44-.65,1.44-1.44v-23.3c0-.8-.65-1.44-1.44-1.44h-.23v26.19Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                      <path d="M724.92,283.91v23.3c0,.93-.75,1.68-1.68,1.68h-.47v-26.66h.47c.93,0,1.68.75,1.68,1.68ZM723.24,308.42c.66,0,1.2-.54,1.2-1.21v-23.3c0-.66-.54-1.2-1.2-1.21v25.72Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                      <path d="M723.01,308.66h.23c.8,0,1.44-.65,1.44-1.44v-23.3c0-.8-.65-1.44-1.44-1.44h-.23v26.19Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                      <path d="M724.92,283.91v23.3c0,.93-.75,1.68-1.68,1.68h-.47v-26.66h.47c.93,0,1.68.75,1.68,1.68ZM723.24,308.42c.66,0,1.2-.54,1.2-1.21v-23.3c0-.66-.54-1.2-1.2-1.21v25.72Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                      <line x1="722.95" y1="308.66" x2="722.95" y2="282.46" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                      <rect x="722.71" y="282.46" width=".47" height="26.19" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                  </g>
                  <g>
                    <path d="M726,299.81v-7.76c1.56.6,2.66,2.11,2.66,3.88s-1.1,3.28-2.66,3.88Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M728.9,295.93c0,1.83-1.11,3.45-2.82,4.1l-.32.12v-8.45l.32.12c1.71.66,2.82,2.27,2.82,4.1ZM726.24,299.45c1.34-.66,2.19-2,2.19-3.52s-.85-2.86-2.19-3.52v7.04Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  </g>
                </g>
                <g>
                  <g>
                    <polygon points="713.81 240.93 713.81 273.58 712.42 273.58 712.42 257.37 712.42 240.93 713.81 240.93" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M714.04,240.69v33.13h-1.86v-33.13h1.86ZM713.57,273.35v-32.19h-.91v32.19h.91Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  </g>
                  <g>
                    <line x1="713.68" y1="257.37" x2="712.42" y2="257.37" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                    <rect x="712.42" y="257.13" width="1.26" height=".47" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  </g>
                </g>
                <g>
                  <g>
                    <polygon points="713.81 317.61 713.81 350.27 712.42 350.27 712.42 334.05 712.42 317.61 713.81 317.61" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M714.04,317.37v33.13h-1.86v-33.13h1.86ZM713.57,350.03v-32.19h-.91v32.19h.91Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  </g>
                  <g>
                    <line x1="713.68" y1="334.05" x2="712.42" y2="334.05" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                    <rect x="712.42" y="333.82" width="1.26" height=".47" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  </g>
                </g>
              </g>
              <g id="sink">
                <path d="M842.31,469.21l2.85-.53c-2.68-.78-5.46-1.2-8.35-1.27v1.27c1.83,0,3.63.18,5.39.53h.11c.99,1.41,1.48,2.96,1.48,4.65s-.53,3.24-1.59,4.65c-.92,1.13-1.97,1.94-3.17,2.43-1.2.42-2.47.56-3.81.42-1.27-.14-2.47-.63-3.59-1.48-1.13-.92-1.94-1.97-2.43-3.17-.42-1.2-.56-2.47-.42-3.81.14-1.34.63-2.57,1.48-3.7l-2.96-.53c-.56,1.27-.88,2.64-.95,4.12.07,2.82,1.06,5.14,2.96,6.98,1.83,1.9,4.16,2.89,6.98,2.96,2.75-.07,5.04-1.06,6.87-2.96,1.9-1.83,2.89-4.16,2.96-6.98-.07-1.48-.39-2.85-.95-4.12-.49-.99-1.16-1.94-2.01-2.85-1.83-1.83-4.12-2.78-6.87-2.85-2.82.07-5.14,1.02-6.98,2.85-.85.92-1.52,1.87-2.01,2.85,2.68-.78,5.46-1.2,8.35-1.27v-1.37c-.21-.21-.32-.39-.32-.53v-.11c0-.28.11-.49.32-.63.21-.14.42-.21.63-.21s.42.11.63.32c.14.14.21.32.21.53v.11c0,.21-.11.39-.32.53v1.37" fill="none" stroke="#3e5665" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                <path d="M838.61,466.25c-.21-.35-.53-.46-.95-.32-.42.21-.56.53-.42.95.28.42.63.56,1.06.42.14-.07.25-.21.32-.42" fill="none" stroke="#3e5665" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                <path d="M847.28,472.8c-.07-2.04-.56-3.88-1.48-5.5-.99-1.69-2.33-3.03-4.02-4.02-1.62-.92-3.45-1.41-5.5-1.48-2.11.07-3.98.56-5.6,1.48-1.69.99-3.03,2.33-4.02,4.02-.92,1.62-1.41,3.45-1.48,5.5.07,2.04.56,3.91,1.48,5.6.99,1.69,2.33,3,4.02,3.91,1.62.99,3.49,1.52,5.6,1.59,2.04-.07,3.88-.6,5.5-1.59,1.69-.92,3.03-2.22,4.02-3.91.92-1.69,1.41-3.56,1.48-5.6Z" fill="none" stroke="#3e5665" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                <path d="M833.86,466.25h-1.37c-.14.07-.25.18-.32.32.07.21.18.32.32.32h2.01c.21,0,.32-.11.32-.32,0-.14-.11-.25-.32-.32h-.63c.07-.14.18-.25.32-.32.42-.14.74,0,.95.42.14.42.04.74-.32.95-.42.14-.78,0-1.06-.42" fill="none" stroke="#3e5665" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                <path d="M837.98,466.88h2.01c.21,0,.32-.11.32-.32,0-.14-.11-.25-.32-.32h-2.01c-.14.07-.25.18-.32.32.07.21.18.32.32.32Z" fill="none" stroke="#3e5665" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                <path d="M837.13,472.8c-.07-.49-.35-.78-.85-.85-.56.07-.88.35-.95.85.07.56.39.88.95.95.49-.07.78-.39.85-.95Z" fill="none" stroke="#3e5665" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                <path d="M835.65,468.68c-1.83,0-3.63.18-5.39.53" fill="none" stroke="#3e5665" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                <polyline points="835.65 467.41 835.65 468.68 835.65 471.53 835.97 471.74 836.5 471.74 836.82 471.53 836.82 468.68" fill="none" stroke="#3e5665" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
              </g>
              <g id="toilet">
                <path d="M899.2,471.98l.32-7.08c0-.49-.14-.92-.42-1.27s-.63-.6-1.06-.74h-18.92c-.42.14-.78.39-1.06.74s-.42.78-.42,1.27l.42,7.08h21.14c-.14.42-.35.74-.63.95-.28.28-.67.42-1.16.42h-4.44l.63,1.8c.28,1.06.74,1.97,1.37,2.75.28.42.53.85.74,1.27,1.27,2.26,1.87,4.58,1.8,6.98-.07,2.4-.7,4.62-1.9,6.66-1.2,2.04-2.89,3.7-5.07,4.97-1.27.49-2.57.53-3.91.11-.42-.28-.81-.6-1.16-.95-2.11-1.48-3.63-3.31-4.55-5.5-.99-2.18-1.37-4.48-1.16-6.87.14-2.4.95-4.62,2.43-6.66.63-.78,1.06-1.69,1.27-2.75l.74-1.8h-4.44c-.49,0-.88-.14-1.16-.42-.28-.21-.46-.53-.53-.95" fill="#dbe7ee" stroke="#3e5665" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                <path d="M887.25,496.4c.92.35,1.8.35,2.64,0,1.97-1.13,3.49-2.61,4.55-4.44,1.13-1.83,1.69-3.81,1.69-5.92.07-2.11-.46-4.16-1.59-6.13-.63-1.2-1.48-2.26-2.54-3.17-.21-.14-.39-.21-.53-.21h-5.71c-.21,0-.42.07-.63.21-1.69,1.48-2.85,3.24-3.49,5.29-.7,1.97-.85,4.02-.42,6.13.35,2.04,1.27,3.95,2.75,5.71.99.99,2.08,1.83,3.28,2.54Z" fill="none" stroke="#3e5665" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                <line x1="884.19" y1="473.35" x2="892.96" y2="473.35" fill="none" stroke="#3e5665" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
              </g>
              <g id="tub">
                <path d="M904.49,534.44c-.33-.51-.74-.76-1.23-.76h-47.79c-.49,0-.9.25-1.23.76l23.94,16.44c.05-.07.11-.18.16-.33.27-.36.6-.54.98-.54s.71.18.98.54c.11.15.19.29.25.44l23.94-16.55c.38.44.57.98.57,1.63v31.36c0,.73-.19,1.31-.57,1.74-.33.44-.74.65-1.23.65h-47.79c-.49,0-.9-.22-1.23-.65-.38-.44-.57-1.02-.57-1.74v-15.03s-1.14-.65-1.14-.65l1.14-.54v-15.14c.05-.65.25-1.2.57-1.63" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                <polyline points="853.67 552.4 857.02 554.15 857.02 549.36 853.67 551.21" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                <path d="M878.18,550.88c-.11.29-.16.58-.16.87,0,.36.05.65.16.87l.16.44c.27.36.6.54.98.54.38,0,.71-.18.98-.54.11-.15.19-.29.25-.44.05-.22.08-.51.08-.87,0-.29-.03-.54-.08-.76" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                <line x1="880.55" y1="552.62" x2="904.49" y2="569.18" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                <line x1="878.18" y1="552.62" x2="854.25" y2="569.18" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
                <line x1="852.53" y1="528.89" x2="906.37" y2="528.89" fill="none" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" stroke-width=".3"/>
              </g>
              <g id="Bike" filter="url(#ds-soft)">
                <g id="LINE">
                  <line x1="334.32" y1="681.61" x2="320.63" y2="687.17" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE1" data-name="LINE">
                  <line x1="319.94" y1="685.47" x2="333.63" y2="679.91" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE2" data-name="LINE">
                  <line x1="354.19" y1="672.06" x2="342.29" y2="676.89" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE3" data-name="LINE">
                  <line x1="340.84" y1="678.47" x2="334.15" y2="681.19" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE4" data-name="LINE">
                  <line x1="354.53" y1="672.91" x2="342.63" y2="677.74" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE5" data-name="LINE">
                  <line x1="340.5" y1="677.62" x2="333.81" y2="680.34" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE6" data-name="LINE">
                  <line x1="341.12" y1="678.85" x2="334.32" y2="681.61" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE7" data-name="LINE">
                  <line x1="354.7" y1="673.33" x2="342.82" y2="678.16" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE8" data-name="LINE">
                  <line x1="342.47" y1="677.31" x2="354.36" y2="672.49" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE9" data-name="LINE">
                  <line x1="333.98" y1="680.76" x2="340.77" y2="678" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE10" data-name="LINE">
                  <line x1="342.13" y1="676.46" x2="354.01" y2="671.64" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE11" data-name="LINE">
                  <line x1="333.63" y1="679.91" x2="340.43" y2="677.15" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE12" data-name="LINE">
                  <line x1="345.92" y1="685.8" x2="342.13" y2="676.46" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE13" data-name="LINE">
                  <polyline points="339.02 668.82 330.16 666.49 330.85 668.18 337.32 669.51 344.22 686.49 340.85 692.81 341.54 694.51 345.92 685.8" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE14" data-name="LINE">
                  <line x1="342.13" y1="676.46" x2="339.02" y2="668.82" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE15" data-name="LINE">
                  <polyline points="328.57 686.92 327.53 684.37 328.38 684.02 329.41 686.57 331.11 685.88 333.87 692.67 329.63 694.4 326.87 687.61 329.41 686.57" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE16" data-name="LINE">
                  <polyline points="324.29 683.7 323.26 681.16 324.96 680.47 322.2 673.67 317.95 675.4 320.71 682.19 322.41 681.5 323.44 684.05 322.41 681.5 323.26 681.16" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE17" data-name="LINE">
                  <line x1="354.01" y1="671.64" x2="354.7" y2="673.33" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE18" data-name="LINE">
                  <line x1="333.63" y1="679.91" x2="334.32" y2="681.61" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE19" data-name="LINE">
                  <line x1="302.03" y1="689.78" x2="304.79" y2="696.57" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="ARC">
                  <path d="M302.03,689.78c-.55-2.64.87-5.3,3.37-6.31,2.04-.56,4.2-.39,6.13.48,1.99.58,4.08.74,6.13.48.79,0,1.54.32,2.09.88,1.16,1.17,1.15,3.05-.02,4.21-1.66,1.24-3.04,2.81-4.06,4.62-.78,1.96-2.21,3.6-4.06,4.62-2.5,1.02-5.37.1-6.82-2.18" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE20" data-name="LINE">
                  <polyline points="304.1 694.87 299.69 698.64 296.94 691.85 302.72 691.48 302.03 689.78 296.25 690.15 295.21 687.6 293.49 683.36 291.79 684.05 301.44 707.82 303.14 707.13 300.38 700.34 304.79 696.57" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <rect x="300.21" y="693.48" width="6.75" height=".14" transform="translate(831.95 151.33) rotate(67.9)" fill="#cfb390"/>
                <rect x="338.9" y="681.02" width="10.25" height=".17" transform="translate(845.64 106.1) rotate(67.9)" fill="#cfb390"/>
              </g>
              <g id="Bike1" data-name="Bike" filter="url(#ds-soft)">
                <g id="LINE21" data-name="LINE">
                  <line x1="316.7" y1="638.2" x2="303" y2="643.76" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE22" data-name="LINE">
                  <line x1="302.31" y1="642.07" x2="316.01" y2="636.5" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE23" data-name="LINE">
                  <line x1="336.56" y1="628.65" x2="324.66" y2="633.49" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE24" data-name="LINE">
                  <line x1="323.21" y1="635.06" x2="316.52" y2="637.78" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE25" data-name="LINE">
                  <line x1="336.9" y1="629.5" x2="325" y2="634.34" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE26" data-name="LINE">
                  <line x1="322.87" y1="634.21" x2="316.18" y2="636.93" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE27" data-name="LINE">
                  <line x1="323.49" y1="635.44" x2="316.7" y2="638.2" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE28" data-name="LINE">
                  <line x1="337.08" y1="629.93" x2="325.19" y2="634.75" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE29" data-name="LINE">
                  <line x1="324.84" y1="633.91" x2="336.73" y2="629.08" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE30" data-name="LINE">
                  <line x1="316.35" y1="637.35" x2="323.14" y2="634.6" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE31" data-name="LINE">
                  <line x1="324.5" y1="633.06" x2="336.39" y2="628.23" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE32" data-name="LINE">
                  <line x1="316.01" y1="636.5" x2="322.8" y2="633.75" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE33" data-name="LINE">
                  <line x1="328.29" y1="642.4" x2="324.5" y2="633.06" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE34" data-name="LINE">
                  <polyline points="321.39 625.41 312.53 623.08 313.22 624.78 319.7 626.1 326.59 643.09 323.22 649.4 323.91 651.1 328.29 642.4" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE35" data-name="LINE">
                  <line x1="324.5" y1="633.06" x2="321.39" y2="625.41" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE36" data-name="LINE">
                  <polyline points="310.94 643.51 309.9 640.96 310.75 640.62 311.79 643.16 313.49 642.47 316.24 649.27 312 650.99 309.24 644.2 311.79 643.16" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE37" data-name="LINE">
                  <polyline points="306.67 640.3 305.63 637.75 307.33 637.06 304.57 630.27 300.33 631.99 303.08 638.79 304.78 638.1 305.82 640.64 304.78 638.1 305.63 637.75" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE38" data-name="LINE">
                  <line x1="336.39" y1="628.23" x2="337.08" y2="629.93" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE39" data-name="LINE">
                  <line x1="316.01" y1="636.5" x2="316.7" y2="638.2" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE40" data-name="LINE">
                  <line x1="284.4" y1="646.37" x2="287.16" y2="653.16" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="ARC1" data-name="ARC">
                  <path d="M284.4,646.37c-.55-2.64.87-5.3,3.37-6.31,2.04-.56,4.2-.39,6.13.48,1.99.58,4.08.74,6.13.48.79,0,1.54.32,2.09.88,1.16,1.17,1.15,3.05-.02,4.21-1.66,1.24-3.04,2.81-4.06,4.62-.78,1.96-2.21,3.6-4.06,4.62-2.5,1.02-5.37.1-6.82-2.18" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="LINE41" data-name="LINE">
                  <polyline points="286.47 651.47 282.07 655.23 279.31 648.44 285.09 648.07 284.4 646.37 278.62 646.74 277.58 644.19 275.86 639.95 274.16 640.64 283.82 664.41 285.52 663.72 282.76 656.93 287.16 653.16" fill="#f3eae3" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <rect x="282.58" y="650.07" width="6.75" height=".14" transform="translate(780.74 140.59) rotate(67.9)" fill="#cfb390"/>
                <rect x="321.27" y="637.61" width="10.25" height=".17" transform="translate(794.43 95.36) rotate(67.9)" fill="#cfb390"/>
              </g>
              <g id="TV_stand1" data-name="TV_stand" filter="url(#ds-soft)">
                <g>
                  <rect x="418.81" y="643.15" width="32.83" height="25.31" transform="translate(-220.58 1091.03) rotate(-90)" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M448.12,639.15v33.3h-25.79v-33.3h25.79ZM447.65,671.98v-32.35h-24.84v32.35h24.84Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <rect x="418.81" y="566.07" width="32.83" height="25.31" transform="translate(-143.5 1013.96) rotate(-90)" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M448.12,562.08v33.3h-25.79v-33.3h25.79ZM447.65,594.9v-32.35h-24.84v32.35h24.84Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <rect x="413.15" y="604.57" width="44.16" height="25.31" transform="translate(-182 1052.46) rotate(-90)" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M448.12,594.91v44.63h-25.79v-44.63h25.79ZM447.65,639.07v-43.68h-24.84v43.68h24.84Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M434.97,627.03v-19.61h.17c.6,0,1.08.49,1.08,1.08v17.44c0,.6-.48,1.08-1.08,1.08h-.17Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                      <path d="M436.46,608.51v17.44c0,.73-.59,1.32-1.32,1.32h-.41v-20.08h.41c.73,0,1.32.59,1.32,1.32ZM435.2,626.79c.43-.03.78-.4.78-.84v-17.44c0-.44-.34-.81-.78-.84v19.13Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                      <path d="M433.21,630.39h.23c.8,0,1.45-.65,1.45-1.45v-23.42c0-.8-.65-1.45-1.45-1.45h-.23v26.32Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                      <path d="M435.13,605.52v23.42c0,.93-.76,1.69-1.69,1.69h-.47v-26.8h.47c.93,0,1.69.76,1.69,1.69ZM433.45,630.15c.67,0,1.21-.55,1.21-1.21v-23.42c0-.67-.54-1.21-1.21-1.21v25.85Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                      <path d="M433.21,630.39h.23c.8,0,1.45-.65,1.45-1.45v-23.42c0-.8-.65-1.45-1.45-1.45h-.23v26.32Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                      <path d="M435.13,605.52v23.42c0,.93-.76,1.69-1.69,1.69h-.47v-26.8h.47c.93,0,1.69.76,1.69,1.69ZM433.45,630.15c.67,0,1.21-.55,1.21-1.21v-23.42c0-.67-.54-1.21-1.21-1.21v25.85Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                    <g>
                      <line x1="433.15" y1="630.39" x2="433.15" y2="604.07" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                      <rect x="432.91" y="604.07" width=".48" height="26.32" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                    </g>
                  </g>
                  <g>
                    <path d="M436.22,621.5v-7.8c1.57.6,2.68,2.12,2.68,3.9s-1.11,3.3-2.68,3.9Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M439.14,617.6c0,1.84-1.11,3.46-2.83,4.13l-.32.12v-8.5l.32.12c1.72.66,2.83,2.28,2.83,4.12ZM436.46,621.14c1.35-.66,2.2-2.01,2.2-3.54s-.85-2.88-2.2-3.54v7.08Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  </g>
                </g>
                <g>
                  <g>
                    <polygon points="423.96 562.31 423.96 595.14 422.57 595.14 422.57 578.84 422.57 562.31 423.96 562.31" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M424.2,562.08v33.3h-1.87v-33.3h1.87ZM423.73,594.9v-32.35h-.92v32.35h.92Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  </g>
                  <g>
                    <line x1="423.84" y1="578.84" x2="422.57" y2="578.84" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                    <rect x="422.57" y="578.6" width="1.26" height=".48" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  </g>
                </g>
                <g>
                  <g>
                    <polygon points="423.96 639.39 423.96 672.22 422.57 672.22 422.57 655.92 422.57 639.39 423.96 639.39" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M424.2,639.15v33.3h-1.87v-33.3h1.87ZM423.73,671.98v-32.35h-.92v32.35h.92Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  </g>
                  <g>
                    <line x1="423.84" y1="655.92" x2="422.57" y2="655.92" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                    <rect x="422.57" y="655.68" width="1.26" height=".48" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  </g>
                </g>
              </g>
              <g id="Couch" filter="url(#ds-soft)">
                <g>
                  <rect x="565.93" y="329.6" width="38.23" height="38.23" rx="8.6" ry="8.6" transform="translate(236.32 933.76) rotate(-90)" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M604.44,331.84v33.75c0,1.39-1.13,2.52-2.52,2.52h-33.75c-1.39,0-2.52-1.13-2.52-2.52v-33.75c0-1.39,1.13-2.52,2.52-2.52h33.75c1.39,0,2.52,1.13,2.52,2.52ZM566.2,365.59c0,1.08.88,1.96,1.96,1.96h33.75c1.08,0,1.96-.88,1.96-1.96v-33.75c0-1.08-.88-1.96-1.96-1.96h-33.75c-1.08,0-1.96.88-1.96,1.96v33.75Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M574.42,221.29h29.64v29.64c0,4.74-3.85,8.6-8.6,8.6h-21.04c-4.74,0-8.6-3.85-8.6-8.6v-21.04c0-4.74,3.85-8.6,8.6-8.6Z" transform="translate(344.54 825.34) rotate(-90)" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M604.34,223.53v33.75c0,1.39-1.13,2.52-2.52,2.52h-33.75c-1.39,0-2.52-1.13-2.52-2.52v-36.27h36.27c1.39,0,2.52,1.13,2.52,2.52ZM566.1,257.28c0,1.08.88,1.96,1.96,1.96h33.75c1.08,0,1.96-.88,1.96-1.96v-33.75c0-1.08-.88-1.96-1.96-1.96h-35.72v35.72Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M527.59,221.29h34.08c2.29,0,4.16,1.86,4.16,4.16v34.08h-29.64c-4.74,0-8.6-3.85-8.6-8.6v-29.64h0Z" transform="translate(306.3 787.11) rotate(-90)" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M566.1,221.01v36.27c0,1.39-1.13,2.52-2.52,2.52h-36.27v-37.43c0-.75.61-1.36,1.36-1.36h37.43ZM527.87,259.24h35.72c1.08,0,1.96-.88,1.96-1.96v-35.72h-36.87c-.44,0-.81.36-.81.81v36.87Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M527.59,259.52h38.23v38.23h-29.64c-4.74,0-8.6-3.85-8.6-8.6v-29.64h0Z" transform="translate(1093.41 557.28) rotate(180)" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M566.1,261.76v36.27h-38.79v-38.79h36.27c1.39,0,2.52,1.13,2.52,2.52ZM565.55,297.48v-35.72c0-1.08-.88-1.96-1.96-1.96h-35.72v37.68h37.68Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <rect x="527.59" y="297.76" width="38.23" height="38.23" transform="translate(1093.41 633.75) rotate(180)" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M566.1,297.48v38.79h-38.79v-38.79h38.79ZM565.55,335.71v-37.68h-37.68v37.68h37.68Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <rect x="527.59" y="335.99" width="38.23" height="37.44" fill="#f1e4d6" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M566.1,335.71v38h-38.79v-38h38.79ZM565.55,373.15v-36.89h-37.68v36.89h37.68Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <g>
                    <path d="M584.94,207.41h5.24v32.99c0,2.89-2.35,5.24-5.24,5.24h0c-2.89,0-5.24-2.35-5.24-5.24v-27.75c0-2.89,2.35-5.24,5.24-5.24Z" transform="translate(358.41 811.47) rotate(-90)" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M604.34,223.53v6.01c0,1.39-1.13,2.52-2.52,2.52h-33.75c-1.39,0-2.52-1.13-2.52-2.52v-8.53h36.27c1.39,0,2.52,1.13,2.52,2.52ZM566.1,229.53c0,1.08.88,1.96,1.96,1.96h33.75c1.08,0,1.96-.88,1.96-1.96v-6.01c0-1.08-.88-1.96-1.96-1.96h-35.72v7.97Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  </g>
                  <g>
                    <rect x="583.33" y="202.68" width="3.21" height="38.23" rx="1.61" ry="1.61" transform="translate(363.15 806.74) rotate(-90)" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M604.34,221.21v1.16c0,.72-.58,1.3-1.3,1.3h-36.18c-.72,0-1.3-.58-1.3-1.3v-1.16c0-.72.58-1.3,1.3-1.3h36.18c.72,0,1.3.58,1.3,1.3ZM566.1,222.38c0,.41.34.75.75.75h36.18c.41,0,.75-.34.75-.75v-1.16c0-.41-.34-.75-.75-.75h-36.18c-.41,0-.75.34-.75.75v1.16Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  </g>
                </g>
                <g>
                  <path d="M546.71,207.41h3.47c.98,0,1.78.8,1.78,1.78v31.21c0,2.89-2.35,5.24-5.24,5.24h0c-2.89,0-5.24-2.35-5.24-5.24v-27.74c0-2.89,2.35-5.24,5.24-5.24Z" transform="translate(320.17 773.24) rotate(-90)" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M566.1,223.53v6.01c0,1.39-1.13,2.52-2.52,2.52h-33.75c-1.39,0-2.52-1.13-2.52-2.52v-7.49c0-.57.46-1.04,1.04-1.04h35.24c1.39,0,2.52,1.13,2.52,2.52ZM527.87,229.53c0,1.08.88,1.96,1.96,1.96h33.75c1.08,0,1.96-.88,1.96-1.96v-6.01c0-1.08-.88-1.96-1.96-1.96h-35.24c-.27,0-.48.22-.48.48v7.49Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M530.42,222.9l8.49,8.88v24.45c0,1.82-1.48,3.3-3.3,3.3h-7.19v-34.94c0-1.82.18-1.69,2-1.69Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M539.19,231.66v24.56c0,1.97-1.6,3.57-3.57,3.57h-7.47v-35.21c0-.92.05-1.38.33-1.67.3-.3.76-.3,1.59-.3h.47s8.65,9.05,8.65,9.05ZM528.7,259.24h6.92c1.67,0,3.02-1.35,3.02-3.02v-24.34l-8.33-8.71h-.23c-.64,0-1.06,0-1.2.13-.14.14-.17.58-.17,1.28v34.66Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M527.59,221.8v36.12c0,.89.72,1.61,1.61,1.61s1.61-.72,1.61-1.61v-34.51h33.41c.89,0,1.61-.72,1.61-1.61s-.72-1.61-1.61-1.61h-35.02c-.89,0-1.61.72-1.61,1.61Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M566.1,221.8c0,1.04-.85,1.88-1.88,1.88h-33.14v34.23c0,1.04-.85,1.88-1.88,1.88s-1.88-.85-1.88-1.88v-36.12c0-1.04.85-1.88,1.88-1.88h35.02c1.04,0,1.88.85,1.88,1.88ZM527.87,257.91c0,.73.6,1.33,1.33,1.33s1.33-.6,1.33-1.33v-34.79h33.69c.73,0,1.33-.6,1.33-1.33s-.6-1.33-1.33-1.33h-35.02c-.73,0-1.33.6-1.33,1.33v36.12Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <g>
                    <path d="M533.93,259.52h5.24v32.99c0,2.89-2.35,5.24-5.24,5.24h0c-2.89,0-5.24-2.35-5.24-5.24v-27.75c0-2.89,2.35-5.24,5.24-5.24Z" transform="translate(1067.86 557.28) rotate(-180)" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M539.45,261.76v33.75c0,1.39-1.13,2.52-2.52,2.52h-8.53v-36.27c0-1.39,1.13-2.52,2.52-2.52h6.01c1.39,0,2.52,1.13,2.52,2.52ZM528.96,297.48h7.97c1.08,0,1.96-.88,1.96-1.96v-33.75c0-1.08-.88-1.96-1.96-1.96h-6.01c-1.08,0-1.96.88-1.96,1.96v35.72Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  </g>
                  <g>
                    <rect x="527.59" y="259.52" width="3.21" height="38.23" rx="1.61" ry="1.61" transform="translate(1058.39 557.28) rotate(180)" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M531.08,260.55v36.18c0,.72-.58,1.3-1.3,1.3h-1.16c-.72,0-1.3-.58-1.3-1.3v-36.18c0-.72.58-1.3,1.3-1.3h1.16c.72,0,1.3.58,1.3,1.3ZM527.87,296.73c0,.41.34.75.75.75h1.16c.41,0,.75-.34.75-.75v-36.18c0-.41-.34-.75-.75-.75h-1.16c-.41,0-.75.34-.75.75v36.18Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M533.95,297.76h5.24v32.99c0,2.89-2.35,5.24-5.24,5.24h0c-2.89,0-5.24-2.35-5.24-5.24v-27.75c0-2.89,2.35-5.24,5.24-5.24Z" transform="translate(1067.9 633.75) rotate(180)" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M539.47,300v33.75c0,1.39-1.13,2.52-2.52,2.52h-8.53v-36.27c0-1.39,1.13-2.52,2.52-2.52h6.01c1.39,0,2.52,1.13,2.52,2.52ZM528.98,335.71h7.97c1.08,0,1.96-.88,1.96-1.96v-33.75c0-1.08-.88-1.96-1.96-1.96h-6.01c-1.08,0-1.96.88-1.96,1.96v35.72Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  </g>
                  <g>
                    <rect x="527.61" y="297.76" width="3.21" height="38.23" rx="1.61" ry="1.61" transform="translate(1058.43 633.75) rotate(180)" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M531.1,298.78v36.18c0,.72-.58,1.3-1.3,1.3h-1.16c-.72,0-1.3-.58-1.3-1.3v-36.18c0-.72.58-1.3,1.3-1.3h1.16c.72,0,1.3.58,1.3,1.3ZM527.89,334.97c0,.41.34.75.75.75h1.16c.41,0,.75-.34.75-.75v-36.18c0-.41-.34-.75-.75-.75h-1.16c-.41,0-.75.34-.75.75v36.18Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  </g>
                </g>
                <g>
                  <path d="M546.71,349.84h0c2.89,0,5.24,2.35,5.24,5.24v31.21c0,.98-.8,1.78-1.78,1.78h-3.47c-2.89,0-5.24-2.35-5.24-5.24v-27.74c0-2.89,2.35-5.24,5.24-5.24Z" transform="translate(915.67 -177.75) rotate(90)" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M566.1,365.96v6.01c0,1.39-1.13,2.52-2.52,2.52h-35.24c-.57,0-1.04-.46-1.04-1.04v-7.49c0-1.39,1.13-2.52,2.52-2.52h33.75c1.39,0,2.52,1.13,2.52,2.52ZM527.87,373.45c0,.27.22.48.48.48h35.24c1.08,0,1.96-.88,1.96-1.96v-6.01c0-1.08-.88-1.96-1.96-1.96h-33.75c-1.08,0-1.96.88-1.96,1.96v7.49Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M530.42,372.59l8.49-8.88v-24.45c0-1.82-1.48-3.3-3.3-3.3h-7.19v34.94c0,1.82.18,1.69,2,1.69Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M539.19,339.27v24.56l-8.65,9.04h-.47c-.83,0-1.29,0-1.59-.29-.29-.28-.33-.74-.33-1.67v-35.22h7.47c1.97,0,3.57,1.6,3.57,3.57ZM538.63,363.6v-24.34c0-1.67-1.35-3.02-3.02-3.02h-6.92v34.66c0,.7.03,1.13.17,1.28.14.14.56.14,1.2.13h.24s8.33-8.71,8.33-8.71Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M604.16,220.7v36.12c0,.89-.72,1.61-1.61,1.61s-1.61-.72-1.61-1.61v-34.51h-33.41c-.89,0-1.61-.72-1.61-1.61s.72-1.61,1.61-1.61h35.02c.89,0,1.61.72,1.61,1.61Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M565.65,220.7c0-1.04.85-1.88,1.88-1.88h35.02c1.04,0,1.88.85,1.88,1.88v36.12c0,1.04-.85,1.88-1.88,1.88s-1.88-.85-1.88-1.88v-34.23h-33.14c-1.04,0-1.88-.85-1.88-1.88ZM603.88,220.7c0-.73-.6-1.33-1.33-1.33h-35.02c-.73,0-1.33.6-1.33,1.33s.6,1.33,1.33,1.33h33.69v34.79c0,.73.6,1.33,1.33,1.33s1.33-.6,1.33-1.33v-36.12Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <g>
                    <path d="M536.83,362.14c-.13-.07-.15-.24-.05-.35.83-.81,3.84-3.78,4.83-4.97.99-1.19,3.36-4.67,4.02-5.63.08-.12.26-.13.35-.01.76.99,4.03,4.32,5.22,5.32,1.17.98,4.31,3.05,5.35,3.54.14.07.17.25.06.36-.87.82-3.9,3.7-4.89,4.88-.99,1.19-3.31,4.72-3.94,5.7-.08.13-.26.13-.35.02-.74-.92-1.79-2.58-4.81-5.02-1.21-.97-4.78-3.28-5.8-3.84Z" fill="#f5f3ef" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M556.97,360.24c0,.14-.06.27-.16.36-.9.85-3.89,3.69-4.86,4.86-.97,1.17-3.25,4.64-3.92,5.67-.09.13-.23.22-.39.23-.16,0-.31-.06-.41-.18-.12-.15-.24-.31-.38-.49-.74-.98-1.86-2.45-4.38-4.48-1.15-.93-4.7-3.23-5.76-3.81-.14-.08-.23-.21-.25-.37-.02-.16.03-.31.14-.42.88-.86,3.83-3.77,4.81-4.94.97-1.17,3.31-4.59,4-5.61.09-.13.24-.21.4-.22.16,0,.31.07.41.19.76.99,4,4.29,5.18,5.28,1.16.97,4.27,3.03,5.29,3.5.15.07.26.21.28.37,0,.03,0,.05,0,.08ZM547.61,370.76c.73-1.12,2.94-4.49,3.92-5.66.97-1.16,3.88-3.93,4.85-4.85-1.14-.55-4.16-2.55-5.34-3.54-1.17-.98-4.36-4.22-5.21-5.3-.75,1.1-3.02,4.43-3.99,5.59-.98,1.17-3.84,4-4.79,4.93,1.17.65,4.6,2.88,5.77,3.83,2.57,2.07,3.72,3.58,4.47,4.58.12.15.22.29.32.42Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  </g>
                  <g>
                    <path d="M532.04,343.97c-.09-.12-.03-.29.11-.34,1.09-.38,5.09-1.77,6.49-2.41,1.4-.65,5.04-2.77,6.05-3.36.13-.08.29,0,.32.14.26,1.22,1.78,5.63,2.43,7.05.64,1.39,2.59,4.61,3.32,5.49.1.12.05.3-.1.35-1.14.37-5.11,1.67-6.51,2.31-1.4.65-5.01,2.85-6.01,3.46-.13.08-.29.01-.33-.14-.27-1.14-.51-3.1-2.19-6.6-.67-1.4-2.91-5.01-3.59-5.95Z" fill="#f5f3ef" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M551.09,350.67s0,.09-.02.14c-.05.16-.17.28-.32.33-1.17.38-5.1,1.66-6.48,2.3-1.38.64-4.92,2.79-5.98,3.44-.14.08-.3.1-.45.04-.15-.06-.26-.19-.29-.34-.04-.18-.09-.38-.13-.61-.25-1.2-.63-3.01-2.03-5.93-.64-1.34-2.86-4.94-3.57-5.91h0c-.09-.13-.12-.29-.07-.44.05-.15.16-.27.31-.32,1.17-.4,5.08-1.77,6.47-2.4,1.39-.64,4.96-2.73,6.02-3.35.14-.08.31-.09.45-.03.14.06.25.19.28.35.26,1.22,1.77,5.59,2.42,6.99.63,1.37,2.56,4.57,3.28,5.43.08.09.12.2.12.32ZM538.07,356.37c1.14-.7,4.59-2.79,5.97-3.43,1.38-.63,5.19-1.89,6.46-2.3-.79-.99-2.66-4.09-3.31-5.49-.64-1.39-2.13-5.68-2.44-7.02-1.15.67-4.62,2.7-6,3.34-1.38.64-5.19,1.96-6.44,2.4.78,1.09,2.92,4.57,3.57,5.93,1.43,2.98,1.82,4.83,2.08,6.06.04.19.08.36.11.52Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M535.98,236.86c.01-.15.17-.24.3-.18,1.07.45,4.97,2.07,6.45,2.52,1.48.45,5.61,1.29,6.75,1.52.15.03.22.19.15.32-.62,1.09-2.42,5.39-2.87,6.88-.45,1.46-1.14,5.16-1.18,6.31,0,.16-.17.26-.31.19-1.1-.48-4.93-2.16-6.4-2.61-1.48-.45-5.63-1.21-6.78-1.42-.15-.03-.22-.19-.15-.32.56-1.04,1.69-2.65,2.76-6.38.43-1.49,1.16-5.67,1.28-6.84Z" fill="#f5f3ef" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M549.94,240.93c0,.09-.02.17-.07.25-.62,1.08-2.4,5.35-2.85,6.82-.44,1.44-1.13,5.11-1.17,6.24,0,.17-.09.32-.23.4-.14.09-.31.1-.46.03-1.13-.5-4.92-2.15-6.36-2.6-1.45-.44-5.53-1.19-6.75-1.41-.16-.03-.29-.13-.36-.27-.07-.14-.07-.31.01-.45.09-.16.19-.34.31-.54.61-1.06,1.53-2.67,2.43-5.78.41-1.43,1.15-5.59,1.27-6.79h0c.02-.16.1-.3.24-.38.14-.08.3-.09.45-.03,1.14.48,4.97,2.07,6.43,2.51,1.45.44,5.51,1.27,6.72,1.51.16.03.29.14.35.28.03.07.04.14.04.21ZM545.31,254.13c.07-1.26.74-4.82,1.19-6.29.45-1.46,2.2-5.66,2.86-6.86-1.31-.26-5.26-1.07-6.7-1.51-1.46-.44-5.18-1.99-6.4-2.5-.15,1.33-.86,5.36-1.28,6.81-.91,3.17-1.86,4.82-2.48,5.9-.1.17-.18.32-.26.46,1.31.24,5.29.97,6.74,1.41,1.45.44,5.13,2.05,6.35,2.58ZM536.25,236.89h0s0,0,0,0Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  </g>
                  <g>
                    <path d="M550.86,225.38c.08-.13.25-.14.35-.03.77.86,3.6,4,4.75,5.05,1.14,1.04,4.51,3.57,5.45,4.27.12.09.12.27,0,.35-1.02.72-4.49,3.83-5.55,4.98-1.03,1.13-3.24,4.17-3.77,5.19-.07.14-.26.16-.36.04-.78-.91-3.53-4.06-4.66-5.1-1.14-1.04-4.57-3.51-5.52-4.19-.12-.09-.12-.27,0-.35.95-.7,2.66-1.67,5.23-4.58,1.03-1.16,3.49-4.63,4.09-5.63Z" fill="#f5f3ef" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M561.78,234.83h0c0,.17-.08.31-.21.41-1.02.71-4.46,3.81-5.5,4.94-1.02,1.11-3.21,4.14-3.73,5.13-.08.15-.22.25-.38.27-.16.02-.33-.04-.43-.17-.8-.93-3.52-4.05-4.64-5.08-1.12-1.03-4.49-3.45-5.49-4.17-.13-.09-.21-.24-.21-.4,0-.16.08-.31.2-.4.15-.11.32-.23.51-.36,1.01-.7,2.53-1.75,4.67-4.18.98-1.11,3.44-4.56,4.06-5.59h0c.08-.14.22-.22.38-.24.16-.02.31.04.42.16.82.92,3.6,4,4.73,5.03,1.12,1.03,4.44,3.51,5.43,4.25.13.09.2.24.2.4ZM551.88,244.98c.6-1.11,2.73-4.04,3.77-5.18,1.03-1.13,4.41-4.17,5.53-4.97-1.07-.79-4.29-3.21-5.41-4.23-1.12-1.02-3.82-4.02-4.71-5.01-.7,1.14-3.08,4.47-4.08,5.6-2.19,2.47-3.74,3.55-4.77,4.27-.16.11-.3.21-.43.3,1.08.78,4.36,3.14,5.48,4.16,1.12,1.02,3.75,4.05,4.63,5.06Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                  </g>
                </g>
              </g>
              <g id="Plant" filter="url(#ds-soft)">
                <path d="M589.9,278.92h30.81c4.24,0,7.68,3.44,7.68,7.68v13.8c0,4.24-3.44,7.68-7.68,7.68h-30.81c-4.24,0-7.68-3.44-7.68-7.68v-13.8c0-4.24,3.44-7.68,7.68-7.68Z" fill="#fff" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
                <path d="M622.74,308.27h-34.85c-3.22,0-5.84-2.62-5.84-5.84v-17.85c0-3.22,2.62-5.84,5.84-5.84h34.85c3.22,0,5.84,2.62,5.84,5.84v17.85c0,3.22-2.62,5.84-5.84,5.84ZM587.88,279.11c-3.02,0-5.47,2.46-5.47,5.47v17.85c0,3.02,2.46,5.47,5.47,5.47h34.85c3.02,0,5.47-2.46,5.47-5.47v-17.85c0-3.02-2.46-5.47-5.47-5.47h-34.85Z" fill="#e7d0b2" stroke="#d1b592" stroke-miterlimit="10" stroke-width=".25"/>
              </g>
              <g id="Plant1" data-name="Plant" filter="url(#ds-soft)">
                <g>
                  <path d="M604.64,290.23c1.92,0,3.48,1.54,3.48,3.45s-1.56,3.45-3.48,3.45-3.48-1.54-3.48-3.45,1.56-3.45,3.48-3.45Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M608.26,293.67c0,1.98-1.63,3.59-3.62,3.59s-3.62-1.61-3.62-3.59,1.63-3.59,3.62-3.59,3.62,1.61,3.62,3.59ZM601.31,293.67c0,1.82,1.49,3.3,3.33,3.3s3.33-1.48,3.33-3.3-1.49-3.3-3.33-3.3-3.33,1.48-3.33,3.3Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M603.44,293.76c-3.43.15-3.12,2.21-3.04,4.05.07,1.84-.59,4.71-.22,4.19.37-.52,2.08-1.17,3.71-2.79,1.63-1.62,2.96-5.6-.45-5.45Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M605.72,295.54c0,1.26-.78,2.85-1.73,3.78-.98.97-1.98,1.6-2.72,2.05-.47.3-.85.53-.98.72-.1.14-.19.13-.25.11-.18-.07-.16-.29-.01-1.43.11-.86.26-2.05.22-2.96v-.32c-.07-1.08-.12-2.19.59-2.96.51-.56,1.36-.86,2.6-.92h0c1.35-.06,1.9.52,2.12,1.02.12.27.17.57.17.9ZM600.22,301.74c.21-.19.52-.38.91-.62.72-.45,1.71-1.07,2.66-2.01,1.12-1.11,2-3.21,1.49-4.35-.26-.6-.88-.89-1.83-.85h0c-1.15.05-1.93.32-2.39.82-.62.68-.57,1.73-.52,2.75v.33c.05.93-.1,2.13-.21,3-.04.35-.09.7-.11.94Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M604.48,293.69c-.61,1.72-3.44,2.37-6.04.89-2.6-1.48-3.28-3.35-2.43-2.78.85.58,2.52-.91,4.24-1.28,1.72-.37,4.81,1.56,4.24,3.17Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M604.7,293.28c0,.15-.03.31-.08.45h0c-.25.69-.83,1.24-1.66,1.54-1.36.51-3.08.29-4.6-.58-1.84-1.05-2.85-2.37-2.85-2.89h0c0-.15.08-.21.13-.24.11-.06.26-.02.45.11.43.29,1.19-.07,2.06-.5.63-.3,1.34-.65,2.06-.8,1.15-.25,2.93.47,3.89,1.57.39.45.59.91.59,1.34ZM604.34,293.64c.2-.57-.14-1.13-.46-1.5-.88-1.01-2.57-1.7-3.61-1.47-.68.15-1.38.48-1.99.78-.96.46-1.78.86-2.36.48-.05-.03-.09-.05-.11-.06.06.33.82,1.52,2.7,2.59,1.45.82,3.08,1.03,4.35.56.74-.27,1.26-.76,1.48-1.36h0Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M605.76,293.23c-1.12-.99-1.41-.37-1.6-1.49-.19-1.12.28-2.99,1.37-3.64s4.05-2.48,3.77-2.1c-.28.37-.8,2.66-.66,3.55.14.89-1.56,4.86-2.88,3.69Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M609.46,285.95s-.01.08-.05.13c-.25.33-.77,2.55-.63,3.44.11.74-.91,3.33-2.01,3.94-.4.22-.78.18-1.11-.11-.44-.39-.75-.52-.98-.61-.37-.16-.56-.26-.67-.97-.19-1.11.27-3.09,1.44-3.8l.38-.23c3.42-2.07,3.47-2.02,3.59-1.89.01.01.04.05.04.11ZM608.46,289.17c0-.89.3-2.3.56-2.97-.67.34-2.28,1.32-3.04,1.78l-.38.23c-1.06.64-1.47,2.46-1.3,3.49.1.58.19.61.5.74.24.1.58.24,1.06.67h0c.23.21.49.23.77.07,1-.55,1.97-2.97,1.86-3.63-.02-.11-.03-.24-.03-.39Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M604.73,293.4c-2.26,1.11-3.65-.53-3.78-2.88-.08-1.52.1-2.6.15-3.68.05-1.11-.32-1.77-.22-2.02.23-.59,1.29.68,1.92,1.27.63.59,1.45.97,2.28,2.57.83,1.6,1.35,3.91-.34,4.74Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M606,291.42c0,.33-.04.63-.13.9-.18.55-.54.96-1.07,1.22h0c-.94.46-1.81.49-2.51.08-.86-.5-1.4-1.63-1.48-3.09-.06-1.07.01-1.94.08-2.7.03-.34.06-.66.07-.99.03-.63-.08-1.11-.16-1.45-.07-.28-.11-.47-.05-.62.06-.17.18-.23.26-.24.35-.07.82.38,1.51,1.07.14.14.27.27.39.39.14.14.3.26.46.39.53.43,1.2.96,1.85,2.22.52,1,.79,1.99.79,2.82ZM604.67,293.27c.46-.22.76-.58.92-1.05.28-.87.04-2.17-.64-3.49-.62-1.2-1.23-1.69-1.77-2.12-.17-.14-.33-.26-.48-.41-.12-.11-.25-.25-.4-.39-.38-.39-1.02-1.03-1.24-.99,0,0-.03,0-.04.06-.02.06.02.25.06.45.08.34.2.86.17,1.53-.02.33-.04.66-.07,1-.07.79-.13,1.61-.08,2.66.07,1.36.56,2.4,1.34,2.85.61.36,1.38.32,2.23-.09h0Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M604.53,294.5c.83,2.14.55,3.86,2.03,4.18,1.48.32,4.35.83,4.43,1.34.08.51.69-1.29-.36-2.25-1.05-.96-1.96-4.52-3.59-4.38-1.63.14-2.98-.11-2.51,1.11Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M611.39,299.3c0,.34-.07.64-.14.8-.07.16-.17.18-.23.17-.06,0-.14-.05-.17-.21-.06-.34-2.52-.85-3.57-1.06-.27-.06-.52-.11-.75-.16-1.09-.24-1.31-1.18-1.59-2.37-.13-.57-.28-1.22-.55-1.91h0c-.14-.35-.14-.62,0-.82.25-.38.9-.4,1.73-.44.29-.01.59-.02.91-.05,1.14-.1,1.92,1.38,2.61,2.69.38.72.73,1.39,1.09,1.72.5.46.66,1.11.66,1.64ZM611.03,299.81c.1-.41.13-1.35-.5-1.93-.4-.37-.77-1.06-1.15-1.8-.65-1.23-1.38-2.62-2.32-2.54-.32.03-.64.04-.93.05-.72.03-1.34.05-1.5.3-.07.11-.06.3.04.55.27.71.43,1.36.56,1.94.27,1.17.46,1.95,1.36,2.14.22.05.47.1.74.16,2.19.45,3.36.75,3.7,1.11Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M604.48,293.55c-.15-.04-.96-.69-1.44-2.48-.48-1.79-.48-2.78-.48-2.78l1.92,5.26Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M604.52,293.41l-.08.29c-.23-.06-1.07-.81-1.54-2.59-.48-1.79-.48-2.77-.48-2.82h.3s0,.99.47,2.74c.46,1.7,1.21,2.33,1.33,2.38Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M604.65,293.82c.24.83,1.52,1.49,2.16,2,.65.51,1.18,1.18,1.62,1.7.44.51.95.64.95.64l-4.73-4.34Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M609.42,298.02l-.07.29s-.57-.15-1.03-.69l-.18-.22c-.41-.48-.86-1.03-1.41-1.46-.16-.12-.35-.26-.56-.4-.65-.45-1.46-1-1.66-1.68l.28-.08c.17.58.93,1.1,1.54,1.52.21.14.41.28.57.41.57.45,1.06,1.03,1.45,1.5l.18.21c.4.47.87.59.88.59Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <path d="M601.54,299.51c.91-1.6,1.59-2.24,1.99-3.21.39-.97.91-2.48.91-2.48l-2.9,5.69Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M604.58,293.86s-.52,1.53-.91,2.49c-.22.54-.52.97-.9,1.52-.32.46-.68.98-1.1,1.71l-.26-.15c.42-.74.79-1.27,1.11-1.73.37-.53.66-.95.87-1.46.39-.95.9-2.46.9-2.47l.28.09Z" fill="#d6ecd8" stroke="#acc2ac" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
              </g>
              <g id="Std_Bedroom">
                <g>
                  <rect x="758.14" y="216.55" width="26.62" height="25.07" transform="translate(1542.9 458.17) rotate(180)" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M758,216.31h26.91s0,25.54,0,25.54h-26.91s0-25.54,0-25.54ZM784.62,216.78h-26.33v24.6s26.33,0,26.33,0v-24.6Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g>
                  <rect x="870.6" y="216.55" width="26.62" height="25.07" transform="translate(1767.83 458.17) rotate(180)" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                  <path d="M870.46,216.31h26.91s0,25.54,0,25.54h-26.91s0-25.54,0-25.54ZM897.08,216.78h-26.33v24.6s26.33,0,26.33,0v-24.6Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                </g>
                <g id="Full_bed">
                  <g>
                    <path d="M796.9,218.68h61.13c2.03,0,3.68,1.65,3.68,3.68v84.23c0,.39-.31.69-.69.69h-66.9c-.5,0-.91-.41-.91-.91v-84.01c0-2.03,1.65-3.68,3.68-3.68h0Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M860.86,307.5h-66.54c-.76,0-1.38-.48-1.38-1.08v-84.21c0-2.06,2.14-3.74,4.77-3.74h59.5c2.63,0,4.77,1.67,4.77,3.74v84.42c0,.48-.5.88-1.11.88h0ZM797.71,218.89c-2.33,0-4.24,1.49-4.24,3.31v84.21c0,.37.38.66.84.66h66.54c.32,0,.58-.2.58-.46v-84.42c0-1.82-1.9-3.31-4.24-3.31h-59.5,0Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                  </g>
                  <g>
                    <rect x="791" y="214.94" width="72.63" height="7.83" rx="2.63" ry="2.63" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M860.82,222.97h-67c-1.7,0-3.08-1.08-3.08-2.41v-3.42c0-1.33,1.39-2.41,3.08-2.41h67c1.7,0,3.08,1.08,3.08,2.41v3.42c0,1.33-1.39,2.41-3.08,2.41ZM793.82,215.15c-1.4,0-2.54.89-2.54,1.99v3.42c0,1.1,1.14,1.99,2.54,1.99h67c1.4,0,2.54-.89,2.54-1.99v-3.42c0-1.1-1.14-1.99-2.54-1.99h-67Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                  </g>
                  <g>
                    <path d="M792.41,259.32c-.38,3.99-.95,27.95-.38,31.25.57,3.31-1.89,13.49.19,13.35,2.08-.14,29.15,1.24,35.39,1.79,6.24.55,19.68,1.79,23.84,2.48,4.17.69,11.16.41,11.54-.69.38-1.1.19-46.4-.57-49.02-.75-2.61-70.02.82-70.02.82h0Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M856.76,308.78c-1.89,0-3.86-.13-5.36-.38-4.6-.76-20.65-2.19-23.82-2.47-6.25-.55-33.31-1.91-35.34-1.79-.22.02-.41-.04-.57-.17-.83-.65-.62-3.17-.19-7.24.25-2.37.51-4.82.29-6.12-.57-3.34,0-27.25.38-31.3l.02-.18h.24c.18-.02,17.52-.88,34.73-1.4,35.04-1.08,35.43.24,35.57.73.6,2.06,1.12,47.51.56,49.12-.29.84-3.31,1.22-6.51,1.22v-.02ZM792.68,303.72c4.17,0,28.77,1.25,34.97,1.8,3.17.28,19.24,1.72,23.87,2.48,4.52.75,10.94.3,11.23-.53.18-.54.23-11.5.13-23.92-.09-11.22-.32-23.68-.7-24.99-.14-.34-3.08-1.39-35.13-.4-16.08.49-32.25,1.27-34.38,1.38-.39,4.52-.93,27.75-.36,31.03.23,1.34-.04,3.82-.29,6.22-.32,2.98-.68,6.36.04,6.91.06.04.11.05.15.04.11,0,.26,0,.47,0Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                  </g>
                  <g>
                    <path d="M863.64,260.17c-.58.49-14.2-1-24.82-.95-21.9.11-46.02.76-47.82.47-1.39-.22-1.3-3.73-1.36-7.03-.05-3.1-.33-5.98.82-6.84,2.37-1.79,69.82-1.82,72.64.57,1.25,1.06,1.1,3.76,1.22,6.37.16,3.31.32,6.57-.68,7.41Z" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M862.62,260.48c-1.08,0-3.03-.11-6.5-.33-4.88-.32-11.57-.74-17.3-.71-10.17.05-20.89.22-29.5.35-10.09.16-17.38.27-18.38.11-1.48-.24-1.52-3.08-1.56-6.37v-.87c-.02-.45-.04-.89-.04-1.33-.08-2.72-.13-4.87.93-5.66,1.72-1.31,31.58-1.6,50.86-1.16,9.44.21,20.93.69,22.17,1.74,1.1.95,1.17,3.03,1.25,5.23,0,.42.03.84.04,1.26.17,3.42.32,6.66-.75,7.57h0c-.13.11-.46.17-1.21.17h0ZM839.38,259c5.63,0,12.06.41,16.79.72,3.52.23,6.83.44,7.29.29.9-.81.74-4.23.59-7.24-.02-.42-.04-.85-.04-1.27-.07-2.12-.13-4.14-1.1-4.96-.32-.26-2.81-1.17-21.78-1.6-22.27-.51-49.16.04-50.47,1.04-.89.68-.83,2.95-.76,5.36,0,.44.03.89.04,1.33v.87c.04,2.59.09,5.8,1.14,5.96.94.15,8.58.03,18.26-.12,8.61-.14,19.33-.31,29.51-.35h.56v-.02Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                  </g>
                  <g>
                    <path d="M803.02,226.21c-2.16,3.14-.16,13.17,0,14.73.67,6.73,47.69,3.14,49.2,1.1,1.3-1.74,1.52-16.52-1.32-17.21-1.4-.34-13.48-1.13-24.77-1.02-11.5.11-22.25,1.15-23.11,2.39Z" fill="#f3f0ee" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                    <path d="M822.82,245.07c-5.34,0-10.37-.26-14.07-.93-3.84-.68-5.86-1.75-6-3.19-.03-.24-.09-.67-.18-1.24-.5-3.26-1.67-10.89.21-13.62,1.03-1.49,12.78-2.4,23.33-2.51,11.22-.11,23.39.68,24.86,1.03.46.11.85.49,1.17,1.15,1.75,3.52,1.44,14.83.3,16.37-.93,1.25-16.23,2.92-29.63,2.92v.02ZM828.35,224.01c-.75,0-1.48,0-2.23,0-12.83.13-22.18,1.29-22.87,2.29h0c-1.79,2.6-.64,10.15-.15,13.36.09.58.16,1.01.18,1.25.12,1.23,2,2.17,5.59,2.81,13.5,2.41,42.14-.48,43.12-1.8,1.11-1.5,1.39-12.57-.33-16.01-.32-.66-.64-.85-.84-.9-1.35-.32-11.96-1.03-22.47-1.03h0Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                  </g>
                </g>
              </g>
              <g>
                <rect x="469.81" y="282.79" width="83.21" height="21.65" transform="translate(805.03 -217.8) rotate(90)" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                <path d="M500.38,335.67v-84.11s22.06,0,22.06,0v84.11s-22.06,0-22.06,0ZM500.79,252.45v82.32s21.24,0,21.24,0v-82.32s-21.24,0-21.24,0Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
              </g>
              <g id="End_table" filter="url(#ds-soft)">
                <rect x="800.48" y="347.9" width="65.1" height="19.88" fill="#efe3d5" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
                <path d="M865.92,367.97h-65.8s0-20.25,0-20.25h65.8s0,20.25,0,20.25ZM800.82,367.6h64.4v-19.5s-64.4,0-64.4,0v19.5Z" fill="#e4ceb0" stroke="#cfb390" stroke-miterlimit="10" stroke-width=".25"/>
              </g>
            </g>
            <g id="people">
              <g id="People">
                <g id="Boy">
                  <g>
                    <g>
                      <path d="M556.2,254.4c-1.9,0-9.1-3.3-10.4-3.9l2.6-6.2.6-4.2c.7.2,2.5.8,4.7,1.5,1,.3,2,.7,3.1,1.1l.5.2-.2-.5c-.2-.6-.2-1,0-1.3,0-.2.3-.3.5-.3.9-.1,2.5-.5,3.2-1.3.3-.3,1-.6,1.6-.6s.6,0,.8.3c0,.1,0,.2,0,.3-.1.3-.7.6-1,.7-.6.2-2,1.1-2.6,2.5,0,.2-.2.5-.3.7v.2c0,0,.2,0,.2,0,1,.4,1.7.6,2.3.8,1.4.4,4.4,1.9,6.5,3,.9.5,1.6.8,2,1,.4.2.9.3,1.5.3s.6,0,1,0c.3,0,.6,0,.9,0s.7,0,.9.1c.5.1.8.5.8,1,0,.4-.2.9-.5,1-.1,0-.3.1-.6.1-.8,0-1.9-.3-2.5-.5h-.2c-.2-.1-.5-.1-.7-.2-.5,0-1,0-1.5-.4h-.1c-.7-.5-1.2-.8-3.6-1.3-.9-.2-1.6-.3-2.2-.4-1.2-.2-2.2-.3-3.6-.8-.3,0-.6-.2-.9-.3h-.3c0,0,0,.4,0,.4-.5,5.4-1.4,6.8-2,6.9,0,0-.1,0-.2,0h0ZM551.1,246.3c.6,1.4,3,3,3.1,3.1l.6.4-.2-.7c-.2-.6.2-1.6.6-2.3l.2-.3h-.4c-1.9-.3-3.6-.5-3.6-.5h-.4s.1.3.1.3Z" fill="#fff"/>
                      <path d="M562.2,239.1c.3,0,.5,0,.5.2,0,0,0,0,0,0,0,.2-.5.5-.9.6-.6.2-2.1,1.2-2.7,2.6,0,.2-.2.5-.3.8v.5c-.1,0,.3.2.3.2,1,.4,1.7.6,2.3.8,1.4.4,4.4,1.9,6.4,3,.9.5,1.6.8,2,1,.5.2,1,.3,1.6.3s.7,0,1,0c.3,0,.6,0,.9,0,.3,0,.6,0,.8.1.5.2.6.5.6.7,0,.3-.1.7-.4.8,0,0-.2,0-.5,0-.8,0-1.9-.3-2.4-.5h-.2c-.2-.1-.5-.1-.8-.2-.5,0-.9,0-1.3-.3h-.1c-.7-.5-1.2-.8-3.7-1.3-.9-.2-1.6-.3-2.2-.4-1.2-.2-2.2-.3-3.6-.8-.3,0-.6-.2-1-.3h-.6c0-.1,0,.4,0,.4v.2c-.6,5.9-1.6,6.6-1.8,6.7,0,0,0,0-.2,0-1.6,0-7.5-2.6-10.1-3.8l2.5-6h0c0,0,0-.1,0-.1l.5-3.9c.8.3,2.5.8,4.4,1.4,1,.3,2.1.8,3,1.1l1,.4-.4-1c-.2-.5-.2-.9,0-1.1,0,0,0-.1.3-.2.9-.1,2.7-.5,3.3-1.4.2-.2.8-.5,1.4-.5M555.2,250.3l-.5-1.4c-.1-.4,0-1.1.6-2.1l.3-.6h-.7c-1.9-.4-3.6-.5-3.7-.5h-.8c0,0,.3.7.3.7.6,1.5,2.9,3,3.2,3.2l1.2.8M562.2,238.6c-.7,0-1.4.3-1.8.7-.5.7-2,1.1-3,1.2-.9.1-1,1-.7,1.9-1-.4-2.1-.8-3.1-1.1-2.7-.9-5-1.6-5-1.6l-.6,4.5-2.7,6.4s8.5,4,10.7,4,.2,0,.3,0c1.6-.5,2.1-6,2.2-7.3.4,0,.7.2.9.3,2.2.7,3.3.7,5.9,1.2,2.6.5,2.9.8,3.7,1.2s1.7.3,2.2.5c.4.1,1.7.6,2.7.6s.5,0,.7-.1c.9-.4,1-2-.3-2.4-.3,0-.7-.1-1-.1-.6,0-1.2.1-1.9.1s-1,0-1.4-.3c-1.4-.6-6.5-3.5-8.6-4-.7-.2-1.4-.4-2.2-.7,0-.3.2-.5.3-.7.6-1.3,1.9-2.2,2.4-2.3.5-.2,1.6-.7,1.1-1.4-.2-.3-.5-.4-1-.4h0ZM554.3,249.1s-2.5-1.6-3-2.9c0,0,1.7.2,3.6.4-.5.9-.9,1.9-.6,2.5h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                      <path d="M548.6,239.6s0,0,0,0c0,0,0,0,.1,0,0,0,2.3.7,5,1.6.9.3,1.9.7,2.8,1-.2-.6-.1-1.1,0-1.4.2-.3.4-.4.8-.5,1.1-.1,2.5-.6,2.9-1.2.4-.5,1.2-.8,2-.7.5,0,.8.2,1,.4.1.2.2.4,0,.7-.2.5-.9.8-1.3,1-.4.1-1.8,1-2.3,2.3,0,.2-.2.4-.2.6.9.3,1.6.5,2.1.7,1.5.4,4.4,1.9,6.6,3,.9.4,1.6.8,2,1,.7.3,1.5.3,2.3.2.7,0,1.3-.1,2,0,.6.2,1,.7,1.1,1.3,0,.6-.3,1.2-.7,1.4-.8.4-2.6-.2-3.3-.4,0,0-.1,0-.2,0-.2,0-.4,0-.6,0-.5,0-1.1,0-1.6-.4,0,0-.1,0-.1,0-.7-.4-1.1-.7-3.5-1.1-.9-.2-1.6-.3-2.2-.4-1.3-.2-2.2-.3-3.7-.8-.2,0-.5-.1-.8-.2h0c0,.8-.2,2.5-.6,4-.4,2-1,3.1-1.7,3.3-.7.2-2.8-.4-6.2-1.8-2.5-1-4.9-2.2-4.9-2.2,0,0,0-.1,0-.2l2.7-6.4.6-4.4s0,0,0,0ZM556.9,242.5s0,0,0,0c0,0,0,0-.1,0-.9-.4-2-.8-3.1-1.1-2.3-.8-4.3-1.4-4.8-1.6l-.6,4.3s0,0,0,0l-2.6,6.3c.5.2,2.6,1.2,4.8,2.1,4.2,1.7,5.6,2,6,1.8.4-.1,1-.7,1.5-3.1.3-1.5.5-3.2.6-4v-.2s0,0,0,0c0,0,0,0,.1,0,.4,0,.7.2.9.3,1.4.5,2.4.6,3.7.8.6,0,1.3.2,2.2.4,2.4.5,2.9.7,3.6,1.2,0,0,0,0,.1,0,.5.3,1,.3,1.5.4.3,0,.5,0,.7.1,0,0,.1,0,.2,0,.7.2,2.4.8,3.1.4.4-.2.6-.6.6-1.1,0-.5-.4-.9-.9-1.1-.6-.2-1.2-.1-1.9,0-.8,0-1.6.1-2.4-.2-.4-.2-1.2-.6-2-1-2.1-1.1-5.1-2.6-6.5-3-.6-.2-1.3-.4-2.3-.7,0,0-.1,0,0-.2,0-.3.2-.5.3-.7.6-1.4,2-2.3,2.5-2.4.4-.1,1-.4,1.1-.8,0-.1,0-.3,0-.4-.1-.2-.4-.3-.8-.3-.7,0-1.4.3-1.8.6-.5.7-2,1.1-3.1,1.3-.3,0-.5.2-.6.3-.2.3-.2.8,0,1.4,0,0,0,0,0,.1ZM551.2,246.1s0,0,0,0c0,0,0,0,.1,0,0,0,1.7.2,3.6.4,0,0,0,0,0,0,0,0,0,0,0,.1-.6,1.1-.8,1.9-.6,2.4,0,0,0,.1,0,.1,0,0-.1,0-.2,0-.1,0-2.5-1.6-3-3,0,0,0,0,0-.1ZM554.7,246.7c-1.4-.2-2.7-.3-3.2-.4.5,1,2,2.1,2.6,2.5,0-.5.2-1.2.6-2.1Z" fill="#fff"/>
                      <path d="M562.2,238.4c-.7,0-1.5.3-1.9.7-.5.6-1.8,1-2.9,1.2-.4,0-.6.2-.8.5-.2.3-.2.8,0,1.4-.9-.3-1.9-.7-2.8-1-2.7-.9-5-1.6-5-1.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0l-.6,4.4-2.7,6.4c0,0,0,.1,0,.2,0,0,2.4,1.1,4.9,2.2,3,1.2,5,1.9,5.9,1.9s.2,0,.3,0c.7-.2,1.3-1.3,1.7-3.3.3-1.5.5-3.2.6-4h0c.3,0,.6.1.8.2,1.5.5,2.4.6,3.7.8.6,0,1.3.2,2.2.4,2.4.5,2.8.7,3.5,1.1,0,0,0,0,.1,0,.6.3,1.1.4,1.6.4.2,0,.5,0,.6,0,0,0,.1,0,.2,0,.6.2,1.7.5,2.6.5s.6,0,.8-.1c.5-.2.8-.8.7-1.4,0-.6-.4-1.1-1.1-1.3-.3-.1-.7-.1-1-.1s-.6,0-.9,0c-.3,0-.6,0-.9,0-.5,0-.9,0-1.4-.3-.4-.2-1.1-.6-2-1-2.2-1.1-5.1-2.6-6.6-3-.6-.2-1.2-.4-2.1-.7,0-.2.1-.4.2-.6.5-1.3,1.9-2.1,2.3-2.3.4-.1,1.1-.5,1.3-1,0-.2,0-.4,0-.7-.2-.3-.5-.4-1-.4,0,0,0,0-.1,0h0ZM556.8,242.6s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0-.1-.2-.6-.2-1.1,0-1.4.1-.2.3-.3.6-.3,1.1-.1,2.6-.6,3.1-1.3.3-.4,1-.6,1.7-.6s0,0,0,0c.4,0,.6.1.8.3,0,.1.1.3,0,.4-.1.4-.7.7-1.1.8-.5.1-1.9,1-2.5,2.4,0,.2-.2.5-.3.7,0,0,0,.1,0,.2,1,.4,1.7.6,2.3.7,1.4.4,4.4,1.9,6.5,3,.9.4,1.6.8,2,1,.5.2,1,.3,1.5.3s.6,0,1,0c.3,0,.6,0,.9,0,.3,0,.6,0,1,.1.5.2.9.5.9,1.1,0,.5-.2.9-.6,1.1-.2,0-.4.1-.6.1-.8,0-2-.4-2.5-.5,0,0-.1,0-.2,0-.2,0-.4,0-.7-.1-.5,0-1,0-1.5-.4,0,0-.1,0-.1,0-.7-.4-1.2-.7-3.6-1.2-.9-.2-1.6-.3-2.2-.4-1.2-.2-2.2-.3-3.7-.8-.2,0-.6-.2-.9-.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0v.2c0,.8-.2,2.4-.6,4-.5,2.3-1.1,2.9-1.5,3.1,0,0-.1,0-.3,0-.6,0-2.2-.4-5.8-1.9-2.2-.9-4.3-1.9-4.8-2.1l2.6-6.3s0,0,0,0l.6-4.3c.5.2,2.5.8,4.8,1.6,1,.3,2.1.8,3.1,1.1,0,0,0,0,0,0h0ZM551.3,246.1s0,0-.1,0c0,0,0,0,0,0,0,0,0,0,0,.1.5,1.4,2.9,2.9,3,3,0,0,0,0,0,0s0,0,0,0c0,0,0,0,0-.1-.2-.5,0-1.3.6-2.4,0,0,0,0,0-.1,0,0,0,0,0,0-1.9-.3-3.6-.4-3.6-.4,0,0,0,0,0,0h0ZM554.1,248.9c-.6-.4-2.1-1.5-2.6-2.5.5,0,1.8.2,3.2.4-.5.9-.7,1.6-.6,2.1h0Z" fill="#9b978f"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M544.4,255.3c-.3,0-.5-.3-.8-.5-.2-.2-.5-.4-.8-.6-.2,0-.3-.2-.5-.2-.5-.2-.8-.4-1-1-.3-.9-1-1.3-1-1.3-.2-.1-4.3-2.9-2.5-9,1.8-6.1,7.6-6.7,7.7-6.7h.2s0,0,0,0c0,0,.2,0,.6,0,0,0,.2,0,.2,0,.5,0,.9-.2,1.2-.4.3-.2.7-.4,1.3-.4h.1c.2,0,.3,0,.3,0,0,0,0,.2,0,.3,0,.3-.2.6,0,.9.2.2.4.3.7.4.4.1.9.2,1.2,1.2.4,1.5-1.2,2.6-1.2,2.6l-.5.3,1.2.3c.5,1.5.2,4-.7,5.9-1.1,2-3.2,3.4-3.2,3.4l-.4.3.9.3c.6,1.3,0,1.8-.9,2.3-.5.3-.9.6-1,1.1-.2.8-.7.9-.8.9Z" fill="#fff"/>
                      <path d="M548.9,235.3s0,0,0,0c0,.3-.2.7,0,1.1.2.3.6.4.8.5.4.1.8.2,1.1,1,.4,1.3-1.1,2.3-1.1,2.4l-.9.7,1.1.2h.5c.4,1.4.3,3.7-.8,5.7-1,1.9-3.1,3.3-3.1,3.3l-.8.5.9.3h.3c.4,1.1,0,1.5-.9,2-.5.3-1,.7-1.1,1.2-.2.6-.4.7-.5.7-.2,0-.4-.2-.7-.4-.2-.2-.5-.4-.8-.6-.2,0-.3-.2-.5-.3-.5-.2-.7-.4-.9-.8-.3-1-1-1.4-1.1-1.4-.2-.1-4.2-2.8-2.4-8.7,1.8-5.9,7.2-6.5,7.4-6.5h.3s0-.1,0-.1c0,0,.2,0,.4,0s.1,0,.2,0h0c.5,0,.9-.2,1.2-.4.3-.2.6-.3,1.2-.4,0,0,0,0,0,0M549,234.8s0,0-.1,0c-1.2,0-1.5.8-2.3.8s0,0,0,0c0,0-.1,0-.2,0-.7,0-.8.2-.8.2,0,0-6,.6-7.9,6.9-1.9,6.3,2.6,9.3,2.6,9.3,0,0,.6.3.9,1.2.3.9.8.9,1.6,1.3s1.1,1,1.7,1.1h0s.7,0,1-1.1c.3-1.1,3.1-1.3,1.9-3.7l-.5-.2s2.2-1.4,3.3-3.5c1.1-2.1,1.3-4.7.7-6.2l-.8-.2s1.8-1.3,1.3-2.9c-.5-1.7-1.6-1.2-2-1.6-.3-.5.7-1.3-.4-1.3h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                      <path d="M539,239.4c.2-.2.3-.4.5-.6.7-.8,1.6-1.6,2.7-2.1,1.6-.8,2.9-1,3.2-1.1.1-.1.4-.2,1.1-.2.4,0,.7-.1,1-.3.3-.2.7-.4,1.4-.5.4,0,.6,0,.7.2.1.2,0,.4,0,.7,0,.2-.1.4,0,.6,0,.1.3.2.5.2.5.1,1.2.3,1.5,1.5.2.7,0,1.5-.5,2.2h0c-.2.3-.5.5-.6.7h.5c0,.1,0,.1,0,.2.3.8.4,1.8.3,2.9-.1,1.2-.5,2.4-1,3.4-.9,1.7-2.5,3-3.1,3.4h.3c0,.1,0,.1,0,.2.8,1.7-.2,2.4-1,2.9-.4.3-.8.5-.9.9-.3,1.2-1.1,1.2-1.2,1.2,0,0,0,0,0,0-.4,0-.7-.3-1-.6-.2-.2-.5-.4-.8-.5-.2,0-.3-.2-.5-.2-.5-.3-.9-.5-1.2-1.2-.3-.8-.8-1.1-.8-1.1,0,0,0,0,0,0,0,0-1.2-.8-2.1-2.3-.5-.9-.9-1.9-1-2.9-.2-1.3,0-2.7.4-4.2.4-1.2.9-2.3,1.6-3.2ZM545.6,235.8s0,0,0,0c0,0-1.5.2-3.2,1.1-1,.5-1.9,1.2-2.6,2-.9,1-1.6,2.3-2,3.7-.4,1.4-.6,2.8-.4,4.1.1,1,.5,2,1,2.8.8,1.5,1.9,2.2,2,2.2,0,0,.6.4.9,1.2.2.6.5.8,1.1,1,.1,0,.3.1.5.2.3.2.6.4.8.6.3.2.5.5.9.5,0,0,.6,0,.9-1,.1-.4.5-.7,1-1,.8-.5,1.6-1.1.9-2.5l-.5-.2s0,0,0-.1c0,0,0,0,0-.1,0,0,2.2-1.4,3.3-3.5,1-1.9,1.3-4.5.7-6h-.7c0-.2,0-.2-.1-.3,0,0,0-.1,0-.1,0,0,1.7-1.2,1.2-2.8-.3-1-.9-1.2-1.3-1.3-.3,0-.5-.1-.6-.3-.2-.2,0-.5,0-.8,0-.2.1-.3,0-.4,0,0-.1,0-.5,0-.6,0-1,.2-1.3.4-.3.2-.6.4-1.1.3-.7,0-.8,0-.9,0,0,0,0,0,0,0ZM545.6,235.8h0s0,0,0,0ZM545.6,235.8h0s0,0,0,0Z" fill="#fff"/>
                      <path d="M549,234.7s0,0-.2,0c-.7,0-1.1.3-1.4.5-.3.2-.5.3-.9.3s0,0,0,0c0,0-.2,0-.2,0-.5,0-.7,0-.8.2-.3,0-1.7.2-3.2,1.1-1,.5-1.9,1.3-2.7,2.1-.2.2-.3.4-.5.6-.7.9-1.2,2-1.6,3.2-.4,1.5-.6,2.9-.4,4.2.1,1,.5,2,1,2.9.9,1.5,2,2.3,2.1,2.3,0,0,0,0,0,0,0,0,.5.3.8,1.1.2.7.7.9,1.2,1.2.1,0,.3.1.5.2.3.2.5.4.8.5.3.3.6.5,1,.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.8,0,1.2-1.2,0-.3.5-.6.9-.9.8-.6,1.9-1.2,1-2.9,0,0,0,0,0,0h-.3c.6-.5,2.2-1.8,3.1-3.5.5-1,.9-2.2,1-3.4.1-1.1,0-2.2-.3-2.9,0,0,0,0,0,0h-.5c.2-.3.4-.5.6-.8h0c.5-.7.7-1.5.5-2.2-.4-1.2-1-1.3-1.5-1.5-.2,0-.4,0-.5-.2,0-.1,0-.3,0-.6,0-.2.2-.5,0-.7,0-.1-.3-.2-.6-.2h0ZM546.5,235.7c.4,0,.7-.2,1-.3.3-.2.7-.4,1.3-.4,0,0,0,0,.1,0,.2,0,.3,0,.3,0,0,0,0,.2,0,.4,0,.3-.2.6,0,.8.1.2.4.3.6.3.5.1,1,.2,1.3,1.3.5,1.6-1.2,2.8-1.2,2.8,0,0,0,0,0,.1,0,0,0,0,.1.1h.7c.6,1.7.3,4.3-.7,6.2-1.1,2-3.2,3.4-3.3,3.5,0,0,0,0,0,.1,0,0,0,0,0,.1l.5.2c.7,1.4-.1,2-.9,2.5-.5.3-.9.6-1,1-.3.9-.8,1-.9,1-.3,0-.6-.3-.9-.5-.2-.2-.5-.4-.8-.6-.2,0-.3-.2-.5-.2-.5-.3-.8-.4-1.1-1-.3-.9-.9-1.2-.9-1.2,0,0-1.1-.8-2-2.2-.5-.9-.8-1.8-1-2.8-.2-1.3,0-2.6.4-4.1.4-1.4,1.1-2.7,2-3.7.7-.8,1.6-1.5,2.6-2,1.7-.9,3.2-1.1,3.2-1.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.2,0,.7,0s.1,0,.2,0c0,0,0,0,0,0h0ZM545.6,235.8h0s0,0,0,0h0ZM545.6,235.8h0s0,0,0,0h0Z" fill="#9b978f"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M546.8,247.8c-.3-.7-1-2.9,1.4-4.9.2.4.6,1.1.4,1.9v.2s.1,0,.1,0c0,0,.4.2.3.6,0,.3-.4.4-.5.4h-.2s0,.2,0,.2c0,.1-.6,1.2-1.5,1.6Z" fill="#fff"/>
                      <path d="M548.1,243.3c.2.4.4.9.3,1.5v.3s.2.2.2.2c0,0,.2.2.2.4,0,.1-.1.1-.2.1h-.3s-.1.3-.1.3c0,0-.4.9-1.2,1.3-.3-.8-.6-2.6,1.2-4.2M548.2,242.5c-3.3,2.4-1.6,5.6-1.6,5.6,1.3-.4,1.9-1.8,1.9-1.8h0s.6,0,.7-.6c0-.6-.4-.9-.4-.9.2-1.2-.6-2.3-.6-2.3h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                      <path d="M546.9,243.7c.3-.4.7-.8,1.2-1.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.8,1.1.7,2.4.1.1.5.5.4,1,0,.5-.5.6-.8.7-.1.3-.8,1.4-1.9,1.8,0,0-.1,0-.2,0,0,0-.4-.8-.5-1.9,0-.7.2-1.7.9-2.6ZM548.2,242.7c-1.3,1-1.9,2.1-1.9,3.5,0,.8.3,1.5.4,1.7,1.1-.4,1.7-1.7,1.7-1.7,0,0,0,0,.1,0,0,0,.5,0,.6-.5,0-.5-.3-.7-.3-.7,0,0,0,0,0-.1.1-.9-.3-1.8-.5-2.1Z" fill="#fff"/>
                      <path d="M548.2,242.4s0,0,0,0c-.5.4-.9.8-1.2,1.2-.7.9-.9,1.9-.9,2.6,0,1.1.4,1.9.5,1.9,0,0,0,0,.1,0s0,0,0,0c1.2-.3,1.8-1.5,1.9-1.8.3,0,.7-.2.8-.7,0-.5-.2-.8-.4-1,.1-1.2-.6-2.3-.7-2.4,0,0,0,0,0,0,0,0,0,0,0,0h0ZM546.7,248c-.1-.2-.4-.9-.4-1.7,0-1.4.6-2.5,1.9-3.5.2.3.7,1.2.5,2.1,0,0,0,.1,0,.1,0,0,.4.3.3.7,0,.4-.6.5-.6.5h0c0,0-.1,0-.1,0,0,0-.6,1.3-1.7,1.7h0Z" fill="#9b978f"/>
                    </g>
                  </g>
                  <g>
                    <path d="M543,252.1s0,0,0,0c0,0,.6-.8,1.6-1,.2,0,.3,0,.4,0,.7-.1,1-.2,1.6-.6,0,0,.1,0,.2,0,0,0,0,.1,0,.2-.7.4-1,.4-1.7.6-.1,0-.3,0-.4,0-.9.2-1.5.9-1.5.9,0,0-.1,0-.2,0,0,0,0-.1,0-.2Z" fill="#fff"/>
                    <path d="M546.8,250.4s0,0,0,0c-.6.4-1,.4-1.6.6-.1,0-.3,0-.4,0-1,.2-1.6.9-1.6,1,0,0,0,0,0,0,0,0,0,.1,0,.2,0,0,0,0,0,0s0,0,.1,0c0,0,.6-.7,1.5-.9.2,0,.3,0,.4,0,.7-.1,1-.2,1.7-.6,0,0,0-.1,0-.2,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M544.5,238.6s0,0,0,0l2.3-1.8c0,0,.1,0,.2,0,0,0,0,.1,0,.2l-2.3,1.8c0,0-.1,0-.2,0,0,0,0-.1,0-.2Z" fill="#fff"/>
                    <path d="M546.9,236.8s0,0,0,0l-2.3,1.8s0,0,0,0c0,0,0,.1,0,.2,0,0,0,0,.1,0s0,0,0,0l2.3-1.8c0,0,0-.1,0-.2,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M548.5,240.2s0,0,0,0c0,0,.1,0,.2,0,.8.6,1.3.4,1.3.4,0,0,.1,0,.2,0,0,0,0,.1,0,.2,0,0-.7.4-1.6-.4,0,0,0-.1,0-.2Z" fill="#fff"/>
                    <path d="M548.6,240.2s0,0-.1,0c0,0,0,0,0,0,0,0,0,.1,0,.2.5.4.9.5,1.2.5s.5,0,.5-.1c0,0,0-.1,0-.2,0,0,0,0-.1,0s0,0,0,0c0,0-.1,0-.3,0s-.6,0-1-.4c0,0,0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M545.3,235.6s0,0,.1,0c0,0,1.6.5,2.1,2.3,0,0,0,.1,0,.2,0,0-.1,0-.2,0-.4-1.7-1.8-2.1-1.9-2.1,0,0-.1,0,0-.2,0,0,0,0,0,0Z" fill="#fff"/>
                    <path d="M545.5,235.6s0,0-.1,0c0,0,0,0,0,0,0,0,0,.1,0,.2,0,0,1.5.4,1.9,2.1,0,0,0,.1.1.1s0,0,0,0c0,0,.1,0,0-.2-.4-1.8-2-2.3-2.1-2.3,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <g>
                      <path d="M556.6,255.3c-.1,0-.4,0-.6-.2-.3-.1-.8-.3-1.2-.3-.3,0-.5-.1-.8-.2-.5-.2-1.2-.4-2.7-.5-1.8-.2-3.8-.7-4.5-.8l.7-2.2c1.1.2,2.3.7,3.7,1.3.8.3,2.3.9,3.2.9s.7,0,.9-.3c.4-.4,1.2-.5,1.7-.5s.2,0,.3,0c0,0,.2,0,.2,0,.2,0,.5,0,.6,0,.1,0,.2,0,.3,0,0,0-.1.2-.2.2h-.1c0,0,.1.9.1.9,0,.3,0,.3-.2.3-.1,0-.4,0-.4.4,0,.2,0,.2-.2.3,0,0-.2.2-.3.4-.1.2-.2.3-.5.4h-.1c0,0,0,0,0,0Z" fill="#fff"/>
                      <path d="M547.7,251.3c1,.2,2.2.7,3.4,1.3.8.3,2.3.9,3.3.9s.8-.1,1-.3c.3-.3.9-.5,1.5-.5.1,0,.2,0,.3,0,0,0,.2,0,.3,0s.2,0,.3,0v.2s.1.6.1.6c0,0,0,0,0,0-.2,0-.5.1-.6.5,0,0,0,.1-.1.2,0,0-.2.2-.3.4,0,.2-.1.2-.4.3h0c0,0-.3,0-.5-.1-.3-.1-.8-.3-1.3-.4-.3,0-.5,0-.8-.2-.5-.2-1.2-.4-2.8-.5-1.6-.1-3.4-.6-4.2-.8l.6-1.7M547.3,250.8l-.8,2.7s2.5.7,4.8.9c2.3.2,2.7.6,3.5.7.8,0,1.5.5,1.8.5s0,0,.1,0c.3-.1.5-.2.7-.5s.4-.4.5-.8c0-.4.6,0,.6-.8v-.7c-.1,0,.3-.3.2-.6,0,0-.1-.1-.2-.1-.2,0-.6.1-.9.1s-.1,0-.2,0c-.1,0-.2,0-.4,0-.6,0-1.4.2-1.9.6-.1.1-.4.2-.7.2-.8,0-2.1-.4-3.1-.9-1.4-.6-2.8-1.2-4-1.4h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                      <path d="M547.2,250.7s0,0,.1,0c1.2.2,2.5.7,4,1.4,1.9.8,3.3,1.1,3.7.7.6-.5,1.6-.7,2.3-.6.3,0,.6,0,.8,0,.3,0,.6-.1.7.2,0,.3-.1.5-.3.7v.6c.1,0,.1,0,.1,0,0,.6-.2.7-.5.7-.1,0-.1,0-.1,0,0,.3-.2.4-.3.5,0,0-.2.2-.2.3-.2.4-.4.4-.7.5,0,0,0,0-.1,0-.2,0-.5,0-.9-.2-.3-.1-.7-.3-1.1-.3-.3,0-.6-.1-.9-.2-.5-.2-1.2-.4-2.6-.5-2.3-.2-4.8-.9-4.8-.9,0,0,0,0,0,0,0,0,0,0,0-.1l.8-2.7s0,0,0,0ZM558.6,252.5c0,0,0-.1,0-.2,0,0-.2,0-.4,0-.2,0-.5,0-.9,0-.7,0-1.6,0-2.1.6-.7.6-2.8-.2-4-.7-1.4-.6-2.7-1.1-3.8-1.3l-.8,2.4c.5.1,2.6.7,4.6.9,1.5.1,2.2.4,2.7.5.3,0,.5.2.8.2.4,0,.8.2,1.2.3.3.1.6.2.7.2,0,0,0,0,.1,0,.2-.1.4-.2.5-.4,0-.2.2-.3.3-.3.1-.1.2-.2.2-.4,0-.2.2-.3.3-.3.1,0,.2,0,.3-.5v-.6c-.1,0,0-.1,0-.1,0,0,.1,0,.2-.2Z" fill="#fff"/>
                      <path d="M547.3,250.6s0,0-.1,0c0,0,0,0,0,0l-.8,2.7s0,0,0,.1c0,0,0,0,0,0,0,0,2.5.7,4.8.9,1.5.1,2.1.3,2.6.5.3,0,.6.2.9.2.4,0,.8.2,1.1.3.3.1.5.2.7.2s.1,0,.2,0c0,0,0,0,.1,0,.3-.1.5-.2.7-.5,0-.1.2-.2.2-.3.1-.1.2-.2.3-.5,0,0,0,0,.1,0,.2,0,.4-.1.5-.7,0,0,0,0,0,0v-.6c0-.1.3-.4.2-.7,0-.2-.2-.2-.4-.2s-.2,0-.4,0c-.2,0-.4,0-.6,0s-.1,0-.2,0c-.1,0-.2,0-.4,0-.7,0-1.5.2-2,.6-.1.1-.3.2-.6.2-.7,0-1.8-.3-3.1-.9-1.5-.6-2.9-1.2-4-1.4,0,0,0,0,0,0h0ZM556.6,255.5c-.1,0-.4,0-.6-.2-.3-.1-.7-.3-1.2-.3-.3,0-.5-.1-.8-.2-.5-.2-1.2-.4-2.7-.5-2-.2-4.1-.7-4.6-.9l.8-2.4c1.1.2,2.4.7,3.8,1.3.9.4,2.3.9,3.2.9s.6,0,.8-.2c.4-.4,1.2-.6,1.8-.6.1,0,.2,0,.3,0,0,0,.2,0,.2,0,.2,0,.4,0,.6,0,.1,0,.2,0,.3,0s0,0,.1,0c0,0,0,.2,0,.2,0,.1-.2.2-.2.2,0,0,0,0,0,.1v.6c0,.4,0,.4-.1.5-.1,0-.3,0-.3.3,0,.2-.1.3-.2.4,0,0-.2.2-.3.3-.2.3-.3.3-.5.4,0,0,0,0-.1,0,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                    </g>
                  </g>
                  <g>
                    <path d="M557.2,253s0,0,.1,0c.3,0,.9,0,1-.2,0,0,.1,0,.2,0,0,0,0,.1,0,.2-.3.3-1.1.3-1.2.3,0,0-.1,0-.1-.1,0,0,0,0,0,0Z" fill="#fff"/>
                    <path d="M558.5,252.7s0,0,0,0c-.2.2-.6.2-1,.2s0,0,0,0c0,0,0,0,0,0,0,0,0,0-.1,0,0,0,0,0,0,0,0,0,0,.1.1.1,0,0,0,0,0,0,.2,0,.9,0,1.1-.3,0,0,0-.1,0-.2,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <g>
                      <path d="M560,243.5c-.4,0-1.3-.8-1.6-1.4-.3-.4-1.1-.6-2.6-.8-.5,0-.9-.1-1.3-.2-1-.2-2.9-.5-3.9-.7.5-.4,1.1-1.2,1.1-2.2.6.1,1.9.5,3.1,1,1.9.9,3.2,1.4,4.2,1.5.4,0,.7,0,.9.1.3,0,.7,0,.8.1,0,0,0,.2,0,.2h-.1c0,.1,0,.3,0,.3,0,0,0,.2-.1.4h-.1c0,.1,0,.3,0,.3,0,0,.1.3-.2.5h-.1c0,0,0,.2,0,.2,0,.1,0,.3,0,.4,0,0,0,0,0,0h0Z" fill="#fff"/>
                      <path d="M551.9,238.7c.7.2,1.7.5,2.8,1,1.9.9,3.2,1.4,4.3,1.6.4,0,.7,0,1,.1.1,0,.3,0,.4,0h0s0,.4,0,.4c0,0,0,.1,0,.2l-.2.3v.3c.2,0,.1.2,0,.2l-.2.2v.3s0,0,0,.1c-.3-.1-1.1-.8-1.4-1.2-.3-.5-1.3-.7-2.7-.9-.5,0-.9-.1-1.3-.2-.9-.2-2.4-.4-3.4-.6.4-.4.7-1,.8-1.7M551.4,238c.3,1.5-1.3,2.7-1.3,2.7,0,0,3.1.5,4.4.8,1.3.3,3.4.3,3.7.8.3.5,1.3,1.5,1.8,1.5,0,0,0,0,0,0,.5,0,.4-.7.4-.7.5-.4.3-.9.3-.9.3-.3.2-.7.2-.7,0,0,.3-.2.1-.5s-.9-.2-1.9-.4c-1.1-.2-2.4-.7-4.1-1.5-1.7-.8-3.5-1.1-3.5-1.1h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                      <path d="M551.3,238s0,0,0,0c0,0,0,0,.1,0,0,0,1.8.4,3.5,1.2,1.9.9,3.1,1.3,4.1,1.5.3,0,.7,0,.9.1.6,0,1,0,1.1.4.1.2,0,.5,0,.6,0,.1,0,.4-.2.7h0c0,.2,0,.6-.3.9,0,.1,0,.4-.2.6,0,0-.2.2-.4.1-.6,0-1.6-1.1-1.9-1.6-.2-.3-1.3-.5-2.3-.6-.5,0-.9-.1-1.4-.2-1.3-.3-4.4-.7-4.4-.7,0,0,0,0-.1,0,0,0,0-.1,0-.1,0,0,1.6-1.2,1.3-2.5,0,0,0,0,0-.1ZM560.8,241.4c0,0,0-.2,0-.3,0-.1-.5-.2-.9-.2-.3,0-.6,0-.9-.1-1-.2-2.3-.7-4.2-1.5-1.4-.6-2.8-1-3.3-1.1,0,.6-.1,1.2-.6,1.8-.2.3-.4.5-.6.6.8.1,3.1.5,4.1.7.4,0,.9.1,1.3.2,1.2.1,2.2.3,2.5.7.3.5,1.3,1.4,1.7,1.4,0,0,.2,0,.2,0,.1-.1.1-.4.1-.5,0,0,0,0,0-.1.4-.3.2-.7.2-.7,0,0,0-.1,0-.2.2-.3.1-.5.1-.5,0,0,0-.1,0-.1,0,0,0,0,0,0Z" fill="#fff"/>
                      <path d="M551.4,237.9s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,.1.3,1.4-1.3,2.5-1.3,2.5,0,0,0,0,0,.1,0,0,0,0,.1,0,0,0,3.1.5,4.4.7.4,0,.9.1,1.4.2,1,.1,2.1.3,2.3.6.3.5,1.3,1.5,1.9,1.6,0,0,0,0,0,0,.2,0,.3,0,.4-.1.2-.2.2-.5.2-.6.4-.3.3-.7.3-.9h0c.2-.3.2-.5.2-.7.1-.1.2-.3,0-.6-.1-.3-.5-.3-1.1-.4-.3,0-.6,0-.9-.1-1-.2-2.2-.6-4.1-1.5-1.7-.8-3.5-1.1-3.5-1.2,0,0,0,0,0,0h0ZM560.1,243.6s0,0,0,0c-.5,0-1.4-.9-1.7-1.4-.3-.4-1.3-.6-2.5-.7-.5,0-.9-.1-1.3-.2-1.1-.2-3.3-.6-4.1-.7.2-.1.4-.4.6-.6.5-.6.7-1.2.6-1.8.5.1,1.9.5,3.3,1.1,1.9.9,3.2,1.4,4.2,1.5.4,0,.7,0,.9.1.4,0,.8,0,.9.2,0,.1,0,.2,0,.3,0,0,0,0,0,0,0,0,0,0,0,.1,0,0,0,.3-.1.5,0,0,0,.1,0,.2,0,0,.2.4-.2.7,0,0,0,0,0,.1,0,0,0,.3-.1.5,0,0-.1,0-.2,0h0Z" fill="#9b978f"/>
                    </g>
                  </g>
                  <g>
                    <path d="M552.4,239.3s0,0,.1,0c0,0,.1,0,.1.1,0,0,0,.9-.7,1.6,0,0-.1,0-.2,0,0,0,0-.1,0-.2.6-.7.6-1.5.6-1.5,0,0,0,0,0,0Z" fill="#fff"/>
                    <path d="M552.5,239.2s0,0-.1,0c0,0,0,0,0,0,0,0,0,.8-.6,1.5,0,0,0,.1,0,.2,0,0,0,0,0,0s0,0,.1,0c.6-.7.7-1.6.7-1.6,0,0,0-.1-.1-.1,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M559.8,243.1s0,0,0,0c0,0,.3-.2.7-.1,0,0,.1,0,0,.2,0,0,0,.1-.2,0-.2,0-.5.1-.5.1,0,0-.1,0-.2,0,0,0,0-.1,0-.2Z" fill="#fff"/>
                    <path d="M560.3,243c-.3,0-.5.2-.5.2,0,0,0,0,0,0,0,0,0,.1,0,.2,0,0,0,0,.1,0s0,0,0,0c0,0,.2-.1.4-.1s0,0,.1,0c0,0,0,0,0,0,0,0,.1,0,.1-.1,0,0,0-.1,0-.2,0,0-.1,0-.2,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M559.3,243.4s0,0,.1,0c0,0,.1,0,0,.2,0,0-.6,2.7-.7,3.8,0,0,0,.1-.1.1,0,0-.1,0-.1-.1.1-1.2.7-3.7.7-3.9,0,0,0,0,0,0Z" fill="#fff"/>
                    <path d="M559.4,243.3s0,0-.1,0c0,0,0,0,0,0,0,.1-.6,2.7-.7,3.9,0,0,0,.1.1.1,0,0,0,0,0,0,0,0,.1,0,.1-.1.1-1.2.7-3.8.7-3.8,0,0,0-.1,0-.2,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M556.7,242.4s0,0,0,0c0,0,.1,0,.2,0,0,0,.1.5-.2,1.5-.3,1-1.6,2.7-1.7,2.8,0,0-.1,0-.2,0,0,0,0-.1,0-.2,0,0,1.3-1.7,1.6-2.7.3-1,.2-1.4.2-1.4,0,0,0,0,0-.1Z" fill="#fff"/>
                    <path d="M556.8,242.3s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,.1,0,0,.1.4-.2,1.4-.3,1-1.6,2.7-1.6,2.7,0,0,0,.1,0,.2,0,0,0,0,0,0s0,0,.1,0c0,0,1.3-1.7,1.7-2.8.3-1.1.2-1.5.2-1.5,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M555.3,250.3s0,0,0,0h0Z" fill="#fff"/>
                    <path d="M554.3,249s0,0-.1,0c0,0,0,0,0,0,0,0,0,.1,0,.2,0,0,.7.5,1,1,0,0,0,0,.1,0s0,0,0,0c0,0,0-.1,0-.2-.3-.6-1.1-1.1-1.1-1.1,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M560.2,244.8s0,0,0,0c0,0,.1,0,.2,0,0,0,.2.7-.4,1.6h0c0,0-.1,0-.2,0,0,0,0-.1,0-.2,0,0,0,0,0,0,.5-.7.3-1.3.3-1.3,0,0,0,0,0-.1Z" fill="#fff"/>
                    <path d="M560.3,244.8s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,.1,0,0,.2.6-.3,1.3,0,0,0,0,0,0,0,0,0,.1,0,.2,0,0,0,0,0,0,0,0,0,0,.1,0h0c.6-.8.4-1.5.4-1.6,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M555.6,242s0,0,.1,0c0,0,.1,0,.1.1,0,0,0,2-1.7,4.3s0,0,0,0c0,0-.1,0-.2,0,0,0,0-.1,0-.2s0,0,0,0c.9-1.2,1.3-2.3,1.5-3,.2-.8.2-1.2.2-1.2,0,0,0,0,0,0Z" fill="#fff"/>
                    <path d="M555.7,241.9s0,0,0,0c0,0,0,0-.1,0,0,0,0,0,0,0,0,0,0,.5-.2,1.2-.2.7-.6,1.8-1.5,3,0,0,0,0,0,0,0,0,0,.1,0,.2,0,0,0,0,0,0,0,0,0,0,.1,0,0,0,0,0,0,0,1.7-2.4,1.7-4.2,1.7-4.3,0,0,0-.1-.1-.1h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M551.1,249.1c.2-.3.4-.5.7-.7.6-.5,1.1-.5,1.1-.5,0,0,.1,0,.1.1,0,0,0,.1-.1.1,0,0-.4,0-1,.4-.5.4-1.2,1.2-1.6,3,0,0,0,.1-.2,0,0,0-.1,0,0-.2.3-1,.6-1.9,1.1-2.5Z" fill="#fff"/>
                    <path d="M552.9,248s-.5,0-1.1.5c-.2.2-.5.4-.7.7-.5.6-.8,1.4-1.1,2.5,0,0,0,.1,0,.2,0,0,0,0,0,0,0,0,.1,0,.1-.1.4-1.8,1.1-2.6,1.6-3,.5-.4,1-.4,1-.4h0c0,0,.1,0,.1-.1,0,0,0-.1-.1-.1h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <g>
                      <path d="M545.1,248.6c-.3,0-.6,0-.7,0h0s0,0,0,0c0,0-.4.1-.9.1s-1.4-.1-2-.8h0s0,0,0,0c-.1,0-3.4-1.4-1.8-5.6,0,0,.8-1.9,3.7-2h.2c3,0,3.9.9,4.6,2,0,0,.4.9-.5,1.7l-.2.2v.2c.2,0,1.2,1.3.4,2.9-.6,1.3-2.1,1.4-2.6,1.4Z" fill="#fff"/>
                      <path d="M543.3,240.5c2.9,0,3.7.8,4.3,1.9,0,.1.3.8-.4,1.5l-.3.3.3.3s.9,1.2.3,2.7c-.6,1.2-1.9,1.3-2.3,1.3s-.5,0-.6,0h-.2c0,0-.2,0-.2,0,0,0-.4,0-.8,0-.8,0-1.4-.2-1.8-.7h0c0,0-.1-.1-.1-.1-.1,0-3.2-1.3-1.7-5.3,0,0,.7-1.8,3.4-1.8h.2M543.3,240c0,0-.1,0-.2,0-3.1,0-3.9,2.1-3.9,2.1-1.7,4.5,2,5.9,2,5.9.6.7,1.5.9,2.2.9s1-.1,1-.1c.2,0,.4.1.8.1.9,0,2.2-.3,2.8-1.6.8-1.7-.3-3.2-.3-3.2,1-1,.5-2.1.5-2.1-.8-1.2-1.8-2.1-4.8-2.1h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                      <path d="M539.4,241.5c.1-.2.3-.3.5-.5.5-.5,1.6-1.1,3.2-1.1,1.5,0,2.6.2,3.4.6.8.4,1.3,1,1.7,1.6,0,0,0,0,0,0,0,0,.1.3.1.7,0,.4-.1.9-.6,1.4,0,.1.3.5.4.9.2.5.3,1.4-.1,2.3-.8,1.8-3,1.8-3.7,1.5-.1,0-.6.1-1.1.1-.9,0-1.6-.3-2.1-.9-.2,0-1-.5-1.6-1.3-1.2-1.6-.9-3.5-.4-4.8,0,0,0-.3.3-.6ZM548,242.2c-.8-1.3-1.9-2.1-4.9-2-.9,0-2.1.2-3,1-.6.5-.7,1-.7,1-.7,1.8-.6,3.3.3,4.5.7.9,1.6,1.2,1.6,1.2,0,0,0,0,0,0,1.1,1.2,3,.7,3,.7,0,0,0,0,0,0,.4.2,2.6.3,3.4-1.4.8-1.6-.3-3-.3-3,0,0,0-.1,0-.2.9-.9.5-1.8.5-1.9Z" fill="#fff"/>
                      <path d="M543.3,239.8c0,0-.2,0-.2,0-1.7,0-2.7.6-3.2,1.1-.2.2-.4.4-.5.5-.2.3-.3.6-.3.6-.5,1.3-.8,3.2.4,4.8.7.9,1.5,1.2,1.6,1.3.5.5,1.2.8,2.1.9,0,0,.1,0,.2,0,.5,0,.8,0,1-.1.2,0,.5.1.8.1,1,0,2.3-.4,2.9-1.7.4-.9.3-1.8.1-2.3-.1-.4-.3-.7-.4-.9.5-.5.6-1.1.6-1.4,0-.4-.1-.7-.1-.7,0,0,0,0,0,0-.4-.6-.8-1.2-1.7-1.6-.8-.4-1.8-.6-3.2-.6h0ZM543.4,248.8c-.6,0-1.5-.2-2.1-.8,0,0,0,0,0,0,0,0-.9-.4-1.6-1.2-.9-1.2-1-2.7-.3-4.5,0,0,.2-.5.7-1,.9-.8,2.2-1,3-1,0,0,.2,0,.2,0,2.8,0,3.8.8,4.7,2,0,0,.4,1-.5,1.9,0,0,0,.1,0,.2,0,0,1.1,1.4.3,3-.6,1.2-1.8,1.5-2.7,1.5s-.6,0-.8,0c0,0,0,0,0,0s0,0,0,0c0,0-.4.1-.9.1h0Z" fill="#9b978f"/>
                    </g>
                  </g>
                  <g>
                    <path d="M547.5,244.2s0,0,0,0h0ZM540.5,242h0s0,0,0,0Z" fill="#fff"/>
                    <path d="M540.5,242s0,0-.1,0c0,0,0,0,0,0,0,0,0,.1.1.2,0,0,1.3.3,2.5,1.3.8.7,1.6.8,2.2.8s1-.1,1-.2c.3-.1.6-.2.8-.2s.4,0,.5.2c0,0,0,0,0,0s0,0,0,0c0,0,0-.1,0-.2,0,0-.3-.3-.7-.3s-.5,0-.9.2c0,0-.4.2-.9.2s-1.3-.2-2-.8c-1.3-1.1-2.6-1.3-2.6-1.4,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M547.2,245.2s0,0,0,0c0,0,.1,0,.2,0,0,0,.4,1.1,0,2-.3.6-.8.9-1.6,1.2,0,0-.1,0-.2,0,0,0,0-.1,0-.2.7-.2,1.2-.5,1.4-1,.4-.8,0-1.7,0-1.7,0,0,0,0,0-.1Z" fill="#fff"/>
                    <path d="M547.3,245.2s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,.1,0,0,.3.9,0,1.7-.2.5-.7.8-1.4,1,0,0-.1,0,0,.2,0,0,0,0,.1,0s0,0,0,0c.8-.2,1.3-.6,1.6-1.2.5-.9,0-1.9,0-2,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M544.2,247.8s0,0,.1,0c1.6,0,1.8-.7,1.8-.7,0,0,0-.1.2,0,0,0,.1,0,0,.2,0,0-.3,1-2.1.9,0,0-.1,0-.1-.1,0,0,0,0,0,0Z" fill="#fff"/>
                    <path d="M546.3,247c0,0-.1,0-.1,0,0,0-.3.7-1.7.7s-.1,0-.2,0c0,0,0,0,0,0,0,0,0,0-.1,0,0,0,0,0,0,0,0,0,0,.1.1.1,0,0,.1,0,.2,0,1.6,0,1.9-.9,1.9-.9,0,0,0-.1,0-.2,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M541.8,240.7s0,0,0,0c2.3-.6,3.8.2,3.9.2,0,0,0,.1,0,.2,0,0-.1,0-.2,0,0,0-1.6-.7-3.7-.2,0,0-.1,0-.2,0,0,0,0,0,0-.1Z" fill="#fff"/>
                    <path d="M543.6,240.5c-.5,0-1.1,0-1.7.2,0,0,0,0,0,0,0,0,0,0,0,.1,0,0,0,0,.1,0s0,0,0,0c.6-.2,1.2-.2,1.6-.2,1.3,0,2.1.4,2.1.4,0,0,0,0,0,0,0,0,0,0,.1,0,0,0,0-.1,0-.2,0,0-.9-.4-2.2-.4h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g id="boy">
                  <g>
                    <g>
                      <path d="M527.3,285.8c-1-.8-2.1-1.7-2.2-2,0,0,0,0,0,0l1,.4-.8-.8c-.2-.2-.4-.5-.3-.6,0,0,0,0,.1,0l.3-.4c-.2-.3-.4-.6-.4-.7,0,0,0,0,0,0,0,0,.2,0,.2,0l.5.5v-.7s0-.1,0-.1h.1c.3,0,1.3,1,1.7,1.6.1.2.3.4.5.4s.4-.3.5-.6c0,0,0-.2.1-.3.1-.3.3-.4.3-.4,0,0,0,0,0,.3,0,.7,0,1.6,0,2l-1.9,1.2Z" fill="#fff"/>
                      <path d="M526,281.8c.4.2,1.1.9,1.4,1.5.1.2.3.5.7.5s.6-.4.7-.7c0,0,0,0,0,0,0,.5,0,1.1,0,1.5l-1.6,1.1c-.5-.4-1.1-.8-1.4-1.2l1.2.4-1.5-1.6c-.1-.1-.2-.3-.3-.4,0,0,0,0,0,0,0,0-.1.2-.2.2l.5-.5.5.6v-1.3M525.9,281.3c-.4,0-.4.4-.4.4,0,0-.2-.2-.4-.2s-.2,0-.2.2c-.1.3.4,1,.4,1,0,0-.2-.1-.3-.1s-.2,0-.2.2c-.1.3.4.8.4.8,0,0,0,0,0,0,0,0-.2,0-.2.3,0,.4,2.5,2.3,2.5,2.3l2.1-1.4s0-1.3,0-2.1c0-.4-.1-.6-.3-.6-.2,0-.4.2-.6.6-.2.4-.2.7-.4.7s-.2,0-.3-.3c-.4-.5-1.4-1.7-1.9-1.7,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                      <path d="M529.5,282.5s0,0,0,0c0,.8,0,2.1,0,2.1,0,0,0,0,0,.1l-2.1,1.4c0,0-.1,0-.2,0,0,0-.6-.5-1.2-1-1.3-1.1-1.3-1.3-1.3-1.4,0-.2,0-.3.2-.4,0,0,0,0,0,0-.2-.2-.3-.5-.2-.8,0-.2.2-.2.2-.2,0,0,0,0,0,0-.2-.2-.3-.6-.2-.8,0-.1.2-.2.3-.2.1,0,.3,0,.4,0,0,0,0-.1.1-.2,0,0,.2-.1.4-.1.6,0,1.7,1.3,2,1.8,0,.1.1.2.2.2,0,0,0-.2.1-.3,0,0,0-.2.1-.3.2-.4.5-.7.8-.6.1,0,.4.1.4.7ZM529.3,284.7c0-.3,0-1.3,0-2,0-.3,0-.4-.2-.5,0,0-.3.1-.4.5,0,.1,0,.2-.1.3-.1.3-.2.5-.4.5-.2,0-.3-.1-.4-.3-.4-.6-1.4-1.6-1.8-1.7,0,0-.2,0-.2,0,0,0,0,.2,0,.2,0,0,0,.1,0,.1,0,0-.1,0-.2,0,0,0-.2-.1-.3-.1,0,0,0,0,0,0,0,.1.2.5.4.8,0,0,0,.1,0,.2,0,0-.1,0-.2,0,0,0-.2-.1-.2,0,0,0,0,0,0,0,0,.2.2.5.3.7,0,0,0,.1,0,.2,0,0-.1,0-.2,0,0,0,0,0,0,0,0,0,0,0,0,.2,0,0,0,.3,1.2,1.2.5.4.9.8,1.1.9l2-1.3Z" fill="#fff"/>
                      <path d="M525.9,281.1c-.2,0-.3,0-.3.1,0,0-.1.1-.1.2,0,0-.2,0-.3,0s0,0,0,0c-.1,0-.3.1-.3.2-.1.2,0,.5.2.8,0,0,0,0,0,0,0,0-.2,0-.2.2-.1.3,0,.6.2.8,0,0,0,0,0,0-.1,0-.2.2-.2.4,0,.1,0,.3,1.3,1.4.6.5,1.2,1,1.2,1,0,0,0,0,0,0s0,0,0,0l2.1-1.4s0,0,0-.1c0,0,0-1.3,0-2.1,0,0,0,0,0,0,0-.5-.3-.6-.4-.7,0,0,0,0,0,0-.3,0-.5.2-.7.6,0,.1,0,.2-.1.3,0,.1,0,.2-.1.3,0,0,0,0-.2-.2-.3-.5-1.4-1.7-2-1.8,0,0,0,0-.1,0h0ZM525.5,281.8s0,0,0,0c0,0,0,0,0-.1,0,0,0-.2,0-.2,0,0,0,0,.1,0s0,0,0,0c.4,0,1.4,1.1,1.8,1.7.1.2.3.3.4.3s0,0,0,0c.2,0,.2-.2.4-.5,0,0,0-.2.1-.3.1-.3.3-.5.4-.5s0,0,0,0c0,0,.2.1.2.5,0,.7,0,1.8,0,2l-2,1.3c-.2-.1-.7-.5-1.1-.9-1.1-.9-1.2-1.2-1.2-1.2,0-.1,0-.2,0-.2,0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0,0,0,0,0,.1,0,0,0,0-.1,0-.2-.1-.1-.4-.5-.3-.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.2,0,.2,0,0,0,0,0,0,0s0,0,.1,0c0,0,0-.1,0-.2-.3-.3-.5-.7-.4-.8,0,0,0,0,0,0,0,0,0,0,0,0,.1,0,.3,0,.3.1,0,0,0,0,.1,0h0Z" fill="#9b978f"/>
                    </g>
                  </g>
                  <g>
                    <path d="M526.3,284.4s0,0,0,.1c0,0-.1,0-.2,0l-1-.9c0,0,0-.1,0-.2,0,0,.1,0,.2,0l1,.9s0,0,0,.1Z" fill="#fff"/>
                    <path d="M525.2,283.4s0,0-.1,0c0,0,0,.1,0,.2l1,.9s0,0,0,0,0,0,.1,0c0,0,0,0,0-.1,0,0,0,0,0-.1l-1-.9s0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M526.7,283.9s0,0,0,.1c0,0-.1,0-.2,0l-1.3-1.2c0,0,0-.1,0-.2,0,0,.1,0,.2,0l1.3,1.2s0,0,0,0Z" fill="#fff"/>
                    <path d="M525.3,282.5s0,0-.1,0c0,0,0,.1,0,.2l1.3,1.2s0,0,0,0,0,0,.1,0c0,0,0,0,0-.1,0,0,0,0,0,0l-1.3-1.2s0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M527.1,283.4s0,0,0,.1c0,0-.1,0-.2,0,0,0-.4-.4-.8-.8-.7-.8-.8-1-.8-1.1,0,0,0-.1.2-.1,0,0,.1,0,.1.2,0,.2.8,1,1.4,1.6,0,0,0,0,0,0Z" fill="#fff"/>
                    <path d="M525.5,281.6c0,0-.1,0-.1.1,0,.1,0,.3.8,1.1.4.4.8.8.8.8,0,0,0,0,0,0s0,0,.1,0c0,0,0,0,0-.1,0,0,0,0,0,0-.7-.6-1.4-1.4-1.4-1.6,0,0,0-.1-.1-.2,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <g>
                      <path d="M554.1,297.6c-.4-.2-1.1-.6-1.2-1.1,0-.2,0-.4,0-.6.6-1.1,2.7-3.1,3.7-3.1s0,0,.1,0c0,0,0,0,.1.1.3.6-.2,2.5-.6,3.6l-2.1,1Z" fill="#fff"/>
                      <path d="M556.6,293.1h0s0,0,0,0c.2.3-.1,1.8-.6,3.3l-1.9.9c-.4-.2-.9-.5-1-.9,0-.1,0-.2,0-.4.6-1.1,2.7-2.9,3.5-2.9M556.6,292.6c-1.1,0-3.3,2.1-3.9,3.2-.6,1.2,1.4,2,1.4,2l2.3-1.1s1.4-3.8.4-4.1c0,0-.1,0-.2,0h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                      <path d="M557.3,293.4c0,1.2-.7,3.3-.8,3.4,0,0,0,0,0,0l-2.3,1.1s0,0-.1,0c0,0-1.3-.5-1.6-1.4-.1-.3,0-.6,0-.9.3-.6,1.1-1.5,2-2.2.6-.5,1.7-1.3,2.3-1,.1,0,.3.2.3.3,0,.1.1.3.1.5ZM556.3,296.6c.3-.9,1-3,.6-3.7,0,0,0-.1-.2-.2-.4-.1-1.2.2-2.1,1-.8.7-1.6,1.5-1.9,2.1-.1.2-.1.4,0,.6.2.6,1.1,1.1,1.4,1.2l2.2-1.1Z" fill="#fff"/>
                      <path d="M556.6,292.5c-.7,0-1.6.7-2.1,1.1-.8.7-1.6,1.6-2,2.2-.2.3-.2.6,0,.9.3.8,1.5,1.3,1.6,1.4,0,0,0,0,0,0s0,0,0,0l2.3-1.1s0,0,0,0c0-.1.8-2.2.8-3.4,0-.2,0-.4-.1-.5,0-.2-.2-.3-.3-.3,0,0-.2,0-.3,0h0ZM554.1,297.7c-.2-.1-1.1-.6-1.4-1.2,0-.2,0-.4,0-.6.3-.6,1.1-1.4,1.9-2.1.8-.7,1.5-1,1.9-1s.1,0,.2,0c0,0,.1,0,.2.2.3.7-.3,2.9-.6,3.7l-2.2,1.1h0Z" fill="#9b978f"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M561.9,305.2c-1.3,0-3.7-1.1-3.7-1.6,0-.7.2-1.8.2-2.2.4-.1,1.3-.5,1.8-.9.2.5.5,1.3,1.1,1.9.7.7,1.4,2,1.2,2.5,0,.1-.1.2-.2.2,0,0-.2,0-.3,0Z" fill="#fff"/>
                      <path d="M560.1,300.9c.2.5.5,1.1,1,1.7.8.8,1.3,2.1,1.1,2.3,0,0,0,0,0,0,0,0-.1,0-.3,0-1.2,0-3.3-1-3.5-1.3,0-.6.1-1.5.2-2,.4-.1,1-.4,1.4-.7M560.3,300.1c-.5.4-2.1,1.1-2.1,1.1,0,0-.3,1.5-.3,2.4,0,.7,2.7,1.8,4,1.8s.3,0,.4,0c1.1-.3,0-2.3-.9-3.2s-1.1-2.1-1.1-2.1h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                      <path d="M562.9,304.7c0,.1,0,.2,0,.3,0,.2-.2.4-.5.5-.9.2-3-.5-4-1.2-.4-.3-.5-.5-.6-.7,0-.8.2-2.3.3-2.4,0,0,0,0,0-.1,0,0,1.7-.7,2.1-1.1,0,0,0,0,.1,0,0,0,0,0,0,0,0,0,.3,1.2,1.1,2,.5.5,1.3,1.7,1.3,2.6ZM558.1,303.6c0,.1.2.3.4.5,1,.7,3,1.3,3.8,1.1.2,0,.3-.1.3-.3.2-.6-.6-2-1.2-2.6-.6-.6-1-1.5-1.1-1.9-.5.4-1.6.8-1.9,1,0,.3-.3,1.6-.2,2.3Z" fill="#fff"/>
                      <path d="M560.3,300s0,0,0,0c-.4.4-2.1,1.1-2.1,1.1,0,0,0,0,0,.1,0,0-.3,1.6-.3,2.4,0,.2.2.5.6.7.8.6,2.6,1.2,3.6,1.2s.3,0,.4,0c.3,0,.4-.2.5-.5,0,0,0-.2,0-.3,0-.8-.9-2.1-1.3-2.6-.7-.8-1.1-2-1.1-2,0,0,0,0,0,0,0,0,0,0,0,0h0ZM561.9,305.3c-.9,0-2.6-.5-3.4-1.2-.3-.2-.4-.4-.4-.5,0-.7.2-1.9.2-2.3.3-.1,1.4-.6,1.9-1,.1.4.5,1.3,1.1,1.9.6.7,1.4,2,1.2,2.6,0,.2-.1.2-.3.3,0,0-.2,0-.4,0h0Z" fill="#9b978f"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M556.6,309c-3.8,0-10.8-3.2-11.9-3.7l-.3-9.9c.6-.8,6-7.3,10.5-7.3s.8,0,1.1.1c4.6,1.3,4.3,10.5,4.3,11.6-.6.5-1.9,1.1-1.9,1.1h-.2c0,.1.1.3.1.3,0,0,2.6,5.1.1,7.2-.4.3-1,.5-1.8.5h0ZM555.4,293.6c-5.3,3.4-5.8,5-5.8,6.4,0,1.4,4.5,3.1,5.4,3.4l.6.2-.3-.5c-.9-1.9-1.1-4.3-1.1-4.8.8-1,2.4-1.3,2.4-1.3h.3s-1.1-3.6-1.1-3.6l-.3.2Z" fill="#fff"/>
                      <path d="M555,288.3c.4,0,.7,0,1,.1,4.3,1.2,4.2,9.8,4.1,11.3-.5.4-1.4.8-1.8,1l-.5.2.2.5s2.5,5,.2,6.9c-.3.3-.9.4-1.7.4-3.6,0-10.2-3-11.6-3.7l-.3-9.6c.8-1,6-7.1,10.3-7.1M556,304l-.5-1.1c-.8-1.7-1.1-3.9-1.1-4.6.8-.9,2.1-1.1,2.1-1.1h.6c0,0-.2-.6-.2-.6l-.9-2.9-.2-.6-.6.4c-5.4,3.4-5.9,5.1-6,6.6,0,1.5,3.9,3,5.5,3.6l1.1.4M555,287.8c-4.9,0-10.8,7.5-10.8,7.5l.3,10.1s7.9,3.8,12.1,3.8,1.6-.2,2-.5c2.7-2.3,0-7.5,0-7.5,0,0,1.5-.7,2.1-1.2,0,0,.6-10.6-4.5-12-.4-.1-.8-.2-1.2-.2h0ZM555,303.1s-5.3-1.9-5.2-3.1c0-1.3.5-2.9,5.7-6.2l.9,2.9s-1.7.3-2.6,1.4c0,0,.1,2.8,1.2,4.9h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                      <path d="M560.8,297.6c0,1.3,0,2.3,0,2.3,0,0,0,0,0,0-.5.5-1.6,1-2,1.2.2.4.7,1.5,1,2.8.1.5.2,1,.2,1.5,0,1.4-.4,2.6-1.2,3.3-1.2,1-3.9.7-8.2-.8-3.2-1.1-6-2.5-6.1-2.5,0,0,0,0,0-.1l-.3-10.1s0,0,0,0c0,0,1.7-2.2,4.1-4.2,1.4-1.2,2.7-2,3.9-2.6,1.5-.7,2.9-.9,4.1-.6,1.2.3,2.2,1.2,2.9,2.5.6,1.1,1,2.4,1.3,4.1.2,1.2.3,2.3.3,3.2ZM560.5,299.8c0-.4.1-2.8-.3-5.4-.3-1.6-.7-3-1.3-4-.7-1.3-1.6-2.1-2.8-2.4-1.1-.3-2.4-.1-3.9.5-1.2.5-2.5,1.4-3.8,2.6-2.1,1.8-3.8,3.8-4,4.1l.3,10c.5.2,3.1,1.5,6,2.5,4.1,1.4,6.9,1.7,7.9.8,2.6-2.2,0-7.3,0-7.4,0,0,0,0,0-.1,0,0,0,0,0,0,0,0,1.4-.6,2-1.1ZM556.6,296.7s0,0,0,0c0,0,0,0,0,0,0,0-1.6.3-2.5,1.3,0,.4.2,2.9,1.2,4.8,0,0,0,.1,0,.2,0,0,0,0-.2,0,0,0-1.3-.5-2.6-1.1-1.8-.9-2.7-1.6-2.7-2.2,0-.7.2-1.4,1-2.4.9-1.1,2.5-2.4,4.8-3.9,0,0,0,0,.1,0,0,0,0,0,0,0l.9,2.9s0,0,0,0ZM553.7,298.2s0,0,0,0c.7-1,2.1-1.4,2.5-1.5l-.8-2.6c-2.2,1.4-3.8,2.7-4.6,3.7-.7.9-.9,1.6-.9,2.2,0,.3.3.9,2.5,1.9.9.4,1.8.8,2.3,1-.9-2.1-1-4.7-1-4.7h0Z" fill="#fff"/>
                      <path d="M555,287.6c-.9,0-1.9.2-2.9.7-1.2.6-2.5,1.4-3.9,2.6-2.3,2-4.1,4.2-4.1,4.2,0,0,0,0,0,0l.3,10.1c0,0,0,.1,0,.1,0,0,2.9,1.4,6.1,2.5,2.6.9,4.6,1.3,6.1,1.3s1.7-.2,2.1-.6c.9-.7,1.3-1.9,1.2-3.3,0-.5,0-.9-.2-1.5-.3-1.3-.8-2.4-1-2.8.4-.2,1.5-.7,2-1.2,0,0,0,0,0,0,0,0,0-.9,0-2.3,0-.9-.1-2.1-.3-3.2-.3-1.7-.7-3-1.3-4.1-.7-1.4-1.7-2.2-2.9-2.5-.4-.1-.8-.2-1.2-.2h0ZM556.6,309.1c-1.4,0-3.4-.4-6-1.3-2.9-1-5.5-2.2-6-2.5l-.3-10c.2-.3,1.9-2.3,4-4.1,1.4-1.2,2.6-2,3.8-2.6,1-.5,1.9-.7,2.8-.7s.8,0,1.1.1c1.1.3,2,1.1,2.8,2.4.6,1,1,2.4,1.3,4,.4,2.5.4,5,.3,5.4-.6.5-2,1.1-2,1.1,0,0,0,0,0,0,0,0,0,0,0,.1,0,0,2.7,5.2,0,7.4-.4.3-1,.5-1.9.5h0ZM555.5,293.7s0,0,0,0c-2.4,1.5-3.9,2.8-4.8,3.9-.8,1-.9,1.7-1,2.4,0,.6.8,1.3,2.7,2.2,1.3.6,2.6,1.1,2.6,1.1,0,0,0,0,0,0,0,0,0,0,.1,0,0,0,0-.1,0-.2-.9-2-1.1-4.5-1.2-4.8.8-1.1,2.4-1.3,2.5-1.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0l-.9-2.9s0,0,0,0c0,0,0,0,0,0h0ZM554.7,302.9c-.5-.2-1.4-.5-2.3-1-2.2-1-2.5-1.6-2.5-1.9,0-.6.2-1.3.9-2.2.8-1.1,2.3-2.3,4.6-3.7l.8,2.6c-.5,0-1.8.4-2.5,1.5,0,0,0,0,0,0h0s.1,2.6,1,4.7h0Z" fill="#9b978f"/>
                    </g>
                  </g>
                  <g>
                    <path d="M550.7,302.2s0,0,0,.1c0,0-.2,0-.2,0,0,0-.8-1.2-.7-2.2,0,0,0-.1.1-.1,0,0,.1,0,.1.1,0,1,.7,2.1.7,2.1,0,0,0,0,0,0Z" fill="#fff"/>
                    <path d="M549.8,299.9c0,0-.1,0-.1.1,0,1,.7,2.2.7,2.2,0,0,0,0,.1,0s0,0,0,0c0,0,0,0,0-.1,0,0,0,0,0,0,0,0-.7-1.1-.7-2.1,0,0,0-.1-.1-.1,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M556.7,303.7s0,0,0,0c0,0,0,.1-.2.1-.9-.2-1.6-.5-1.6-.5,0,0,0-.1,0-.2,0,0,.1,0,.2,0,0,0,.7.3,1.5.5,0,0,.1,0,.1.1Z" fill="#fff"/>
                    <path d="M555,303c0,0-.1,0-.1,0,0,0,0,.2,0,.2,0,0,.7.4,1.6.5,0,0,0,0,0,0,0,0,.1,0,.1-.1,0,0,0,0,0,0,0,0,0-.1-.1-.1-.9-.2-1.5-.5-1.5-.5,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M556.5,293.1c0,0,0,.1,0,.1-.7.2-.8.6-.8.6,0,0,0,.1-.2.1,0,0-.1,0-.1-.2,0,0,.1-.5,1-.8,0,0,.2,0,.2,0,0,0,0,0,0,0Z" fill="#fff"/>
                    <path d="M556.4,292.9s0,0,0,0c-.8.3-1,.8-1,.8,0,0,0,.2.1.2,0,0,0,0,0,0,0,0,.1,0,.1-.1,0,0,0-.4.8-.6,0,0,0,0,0-.1,0,0,0,0,0,0,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M558.7,301.1c0,0,0,.1,0,.1,0,0-.2,0-.2,0l-2.2-4.4c0,0,0-.2,0-.2,0,0,.2,0,.2,0l2.2,4.4s0,0,0,0Z" fill="#fff"/>
                    <path d="M556.4,296.6s0,0,0,0c0,0,0,.1,0,.2l2.2,4.4c0,0,0,0,.1,0s0,0,0,0c0,0,0,0,0-.1,0,0,0,0,0,0l-2.2-4.4c0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <g>
                      <path d="M548.1,307.8c-.2,0-.6,0-1.1-.2h-.4c-1-.4-2.6-.6-3.8-.8-4.1-.3-9.8-2.2-10.9-2.5v-3.5c0,0-.3-3.5-.3-3.5.8-.3,4.1-1.7,7.2-2.4,2.5-.7,3.9-1.3,4.9-1.8.6-.3,1.1-.5,1.3-.5s.4.3.8,1.3c.5,1.3.5,2.3.5,3.3,0,1,0,2,.6,3.2,1.2,2.2,1.8,3.9,1.6,5.9-.1,1.4-.3,1.5-.6,1.5h0Z" fill="#fff"/>
                      <path d="M545.2,292.9c.1,0,.4.6.6,1.1.5,1.2.5,2.3.5,3.2,0,1,0,2.1.6,3.3,1.1,2.2,1.8,3.8,1.6,5.7,0,1-.2,1.2-.3,1.2,0,0,0,0,0,0-.2,0-.6,0-1-.2h-.4c-.8-.3-2.1-.5-3.8-.8-3.8-.3-9.2-2-10.7-2.4v-3.3c0,0,0,0,0,0h0s-.3-3.3-.3-3.3c1-.4,4.1-1.7,7-2.3,2.5-.7,4-1.3,4.9-1.8.6-.2,1-.4,1.2-.4M545.2,292.4c-.7,0-2.2,1-6.3,2.2-3.6.8-7.4,2.4-7.4,2.4l.4,3.7v3.7c0,0,6.5,2.2,11.1,2.6,1.3.2,2.8.4,3.7.7.7.2,1.2.3,1.5.3.5,0,.7-.4.8-1.7.2-2.1-.5-3.9-1.6-6s0-3.8-1.1-6.5c-.4-1-.6-1.4-1-1.4h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                      <path d="M549.1,305.3c0,.3,0,.7,0,1,0,.9-.2,1.5-.5,1.7-.3.2-.8.1-1.7-.1-.1,0-.2,0-.4,0-.7-.2-2-.4-3.7-.7-2.4-.2-5.3-.9-7.3-1.4-2.2-.6-3.8-1.1-3.9-1.1,0,0,0,0,0-.1v-3.7c0,0-.3-3.6-.3-3.6,0,0,0-.1,0-.1,0,0,3.9-1.7,7.4-2.4,2.4-.7,3.9-1.3,4.9-1.7.9-.4,1.4-.6,1.8-.4.4.2.6.6.9,1.5.5,1.4.5,2.5.6,3.5,0,1,0,1.9.6,3,1,1.9,1.6,3.4,1.7,5.1ZM531.9,304.3c.8.3,6.8,2.2,11,2.5,0,0,0,0,0,0,1.7.2,3,.5,3.7.7.1,0,.2,0,.4,0,.7.2,1.2.3,1.4.2.2-.1.3-.5.4-1.5.2-2-.5-3.7-1.6-5.9-.6-1.1-.6-2.1-.6-3.1,0-1,0-2.1-.5-3.4-.3-.8-.5-1.2-.7-1.3-.3-.1-.7,0-1.5.4-1,.4-2.5,1.1-4.9,1.8,0,0,0,0,0,0-3.2.7-6.7,2.1-7.3,2.4l.4,3.5s0,0,0,0v3.6Z" fill="#fff"/>
                      <path d="M545.2,292.3c-.3,0-.8.2-1.5.5-1,.4-2.5,1.1-4.9,1.7-3.5.8-7.4,2.4-7.4,2.4,0,0,0,0,0,.1l.4,3.6v3.7c0,0,0,.1,0,.1,0,0,1.7.6,3.9,1.1,2,.5,4.9,1.2,7.3,1.4,1.7.2,3,.5,3.7.7.1,0,.2,0,.4,0,.5.1.9.2,1.2.2s.3,0,.4-.1c.3-.2.4-.8.5-1.7,0-.3,0-.7,0-1,0-1.6-.7-3.1-1.7-5.1-.5-1-.5-2-.6-3,0-1,0-2.1-.6-3.5-.3-.9-.5-1.3-.9-1.5,0,0-.2,0-.3,0h0ZM548.1,307.9c-.3,0-.6-.1-1.1-.2-.1,0-.2,0-.4,0-.8-.2-2-.4-3.7-.7,0,0,0,0,0,0-4.2-.3-10.2-2.3-11-2.5v-3.6c0,0,0,0,0,0l-.4-3.5c.6-.3,4.1-1.7,7.3-2.4,0,0,0,0,0,0,2.4-.7,3.9-1.3,4.9-1.8.7-.3,1.1-.5,1.4-.5s.1,0,.2,0c.3.1.4.5.7,1.3.5,1.3.5,2.4.5,3.4,0,1,0,2,.6,3.1,1.2,2.3,1.8,3.9,1.6,5.9,0,.9-.2,1.3-.4,1.5,0,0-.2,0-.3,0h0Z" fill="#9b978f"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g>
                        <path d="M527.8,320.5c0,0-.1-.1-.1-.2v-.7s-.5.6-.5.6c0,0-.1.1-.2.1,0-.1.1-.5.3-.8l-.4-.3s-.1,0-.1,0c0,0,.1-.4.3-.6l.7-.9-1,.5s0,0,0,0c0-.2,1.1-1.3,2-2.1l2,1.1c0,.4,0,1.3.1,2,0,.2,0,.3,0,.4,0,0-.2,0-.4-.4,0-.1-.1-.2-.1-.3-.1-.3-.3-.5-.5-.5s-.4.2-.5.4c-.4.7-1.3,1.7-1.6,1.8h0Z" fill="#fff"/>
                        <path d="M529,316.4l.5.3-1.1,1,.4-.5-1.2.5c.4-.4.9-.9,1.3-1.3M529.7,316.8l1,.5c0,.3,0,1,.1,1.5,0,0,0,0,0,0-.2-.3-.3-.7-.7-.7s-.6.4-.7.5c-.3.6-1,1.3-1.3,1.6v-1s1.7-2.4,1.7-2.4M528.9,315.8s-2.3,2-2.3,2.5c0,.3.1.3.2.3s.1,0,.1,0c0,0-.5.6-.3.9,0,.1.1.1.2.1.2,0,.3-.2.3-.2,0,0-.5.7-.3,1,0,.1.1.1.2.1.2,0,.4-.1.4-.2,0,0,0,.4.4.4s0,0,.1,0c.5-.1,1.4-1.3,1.7-1.9.1-.2.2-.3.3-.3.1,0,.2.3.4.7.2.3.4.5.6.5s.3-.2.3-.6c0-.8-.2-2.1-.2-2.1l-2.2-1.2h0Z" fill="#9b978f"/>
                      </g>
                      <g>
                        <path d="M531.4,319.2c0,.5-.2.7-.3.7-.3,0-.6-.1-.8-.6,0-.1-.1-.2-.2-.3,0-.1-.1-.2-.2-.3,0,0,0,0-.1.2-.3.5-1.3,1.8-1.8,2-.2,0-.4,0-.5,0,0,0-.1-.1-.2-.2,0,0-.2.1-.3.1-.1,0-.3,0-.3-.2-.1-.2,0-.5.1-.8,0,0,0,0,0,0,0,0-.2,0-.3-.2-.1-.3,0-.6.2-.8,0,0,0,0,0,0-.1,0-.2-.2-.2-.4,0-.1,0-.3,1.2-1.5.6-.6,1.1-1.1,1.1-1.1,0,0,.1,0,.2,0l2.2,1.2s0,0,0,.1c0,0,0,1.3.2,2.1,0,0,0,0,0,0ZM527,320.3s0,0,0,0c0,0,0,0,0,0,.1,0,.3-.1.3-.2,0,0,0,0,.2,0s0,0,.1.1c0,0,0,.2.1.2,0,0,.1,0,.2,0,.4,0,1.3-1.2,1.7-1.8.1-.2.3-.4.4-.4.2,0,.3.2.4.5,0,0,0,.2.2.3.2.3.4.4.5.4,0,0,.1-.2.1-.5,0-.7-.1-1.7-.1-2l-2.1-1.1c-.2.2-.6.6-1.1,1-1.1,1-1.1,1.3-1.1,1.3,0,.1,0,.2,0,.2,0,0,0,0,0,0,0,0,.1,0,.2,0,0,0,0,.1,0,.2-.1.2-.4.5-.3.7,0,0,0,0,0,0,0,0,.2,0,.2-.1,0,0,.1,0,.2,0,0,0,0,.1,0,.2-.2.2-.4.6-.4.8Z" fill="#fff"/>
                        <path d="M528.9,315.6s0,0,0,0c0,0-.6.5-1.1,1.1-1.2,1.2-1.2,1.4-1.2,1.5,0,.2,0,.3.2.4,0,0,0,0,0,0-.1.2-.3.6-.2.8,0,.1.2.2.3.2,0,0,0,0,0,0-.1.3-.2.6-.1.8,0,.1.2.2.3.2,0,0,0,0,0,0,.1,0,.2,0,.3-.1,0,0,0,.1.2.2,0,0,.2,0,.3,0s.1,0,.2,0c.6-.1,1.5-1.5,1.8-2,0-.1.1-.2.1-.2,0,0,0,.2.2.3,0,0,0,.2.2.3.2.4.5.6.7.6s0,0,.1,0c.1,0,.3-.2.3-.7,0,0,0,0,0,0,0-.8-.2-2.1-.2-2.1,0,0,0,0,0-.1l-2.2-1.2s0,0,0,0h0ZM526.9,318.4s0,0,0,0c0,0,0,0,0-.2,0,0,0-.3,1.1-1.3.4-.4.9-.8,1.1-1l2.1,1.1c0,.3,0,1.3.1,2,0,.3,0,.4-.1.5,0,0,0,0,0,0-.1,0-.3-.1-.5-.4,0-.1-.1-.2-.2-.3-.1-.3-.2-.5-.4-.5,0,0,0,0,0,0-.1,0-.3.1-.4.4-.4.7-1.3,1.7-1.7,1.8,0,0,0,0-.1,0,0,0,0,0-.1,0,0,0,0-.2-.1-.2,0,0,0-.1-.1-.1,0,0,0,0,0,0,0,0,0,0-.1,0,0,0-.2.2-.3.2s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0,0-.2.2-.6.4-.8,0,0,0-.1,0-.2,0,0,0,0,0,0s0,0,0,0c0,0-.2.1-.2.1s0,0,0,0c0,0,0,0,0,0,0-.2.2-.6.3-.7,0,0,0-.1,0-.2,0,0,0,0-.1,0s0,0,0,0c0,0,0,0,0,0h0Z" fill="#9b978f"/>
                      </g>
                    </g>
                    <g>
                      <path d="M528.1,317.5s0,0,0,.1l-.9,1c0,0-.1,0-.2,0,0,0,0-.1,0-.2l.9-1c0,0,.1,0,.2,0,0,0,0,0,0,0Z" fill="#fff"/>
                      <path d="M527.9,317.4s0,0-.1,0l-.9,1c0,0,0,.1,0,.2,0,0,0,0,0,0s0,0,.1,0l.9-1s0,0,0-.1c0,0,0,0,0,0,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                      <path d="M528.5,318s0,0,0,0l-1.2,1.4c0,0-.1,0-.2,0,0,0,0-.1,0-.2l1.2-1.4c0,0,.1,0,.2,0,0,0,0,0,0,.1Z" fill="#fff"/>
                      <path d="M528.4,317.9s0,0-.1,0l-1.2,1.4c0,0,0,.1,0,.2,0,0,0,0,0,0s0,0,.1,0l1.2-1.4s0,0,0,0c0,0,0,0,0-.1,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                      <path d="M529,318.5s0,0,0,.1c-.6.7-1.3,1.5-1.3,1.7,0,0,0,.1,0,.2,0,0-.2,0-.2,0,0-.1,0-.3.7-1.1.3-.4.7-.8.7-.8,0,0,.1,0,.2,0,0,0,0,0,0,.1Z" fill="#fff"/>
                      <path d="M528.8,318.3s0,0-.1,0c0,0-.4.4-.7.8-.7.8-.7,1-.7,1.1,0,0,0,0,.1,0s0,0,0,0c0,0,.1,0,0-.2,0-.2.7-1,1.3-1.7,0,0,0,0,0-.1,0,0,0,0,0-.1,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                      <g>
                        <path d="M531.2,316.7c-.7,0-1.5-.5-1.9-.9-.1-.1-.1-.2-.1-.2,0-.3,1.8-5,3-8h0c0,0,0-.2,0-.2-.5-1.6-.5-3.1-.5-3.1,0,0,0-1.6,2.2-1.6s1.4.1,2.3.4c4.1,1.3,8.9,1.4,10.2,1.4h0c-.7,1.7-2.4,2.5-2.5,2.5-.1,0-.6.4-1.1,1.8-.3.6-.6.9-.9.9s-.1,0-.1,0c-1.1-.5-2.7-.6-3.9-.6s-1.1,0-1.1,0h-.1s0,.1,0,.1c-2.3,4-4.9,7-5.4,7.5Z" fill="#fff"/>
                        <path d="M533.8,303c.6,0,1.4.1,2.2.4,3.8,1.2,8.3,1.4,10,1.4-.7,1.3-2.1,2-2.2,2-.1,0-.6.4-1.2,1.9-.2.5-.5.8-.7.8s0,0,0,0,0,0,0,0c-1.2-.6-2.8-.7-4-.7s-1.1,0-1.2,0h-.3s-.1.2-.1.2c-2.2,3.8-4.6,6.7-5.3,7.4-.7,0-1.5-.6-1.7-.8.2-.7,1.9-5.1,2.9-7.9v-.2c0,0,0-.2,0-.2-.5-1.5-.5-3-.5-3,0-.1,0-1.4,1.9-1.4M533.8,302.5c-2.4,0-2.4,1.9-2.4,1.9,0,0,0,1.6.5,3.2,0,0-2.9,7.5-3,8s1.4,1.3,2.4,1.4c0,0,2.8-3.2,5.5-7.7,0,0,.5,0,1.1,0,1.1,0,2.7.1,3.8.6,0,0,0,0,.2,0,.3,0,.8-.2,1.2-1.1.6-1.4,1-1.6,1-1.6,0,0,2.1-.9,2.7-2.9,0,0-.2,0-.4,0-1.4,0-6.1-.1-10.2-1.4-1-.3-1.8-.4-2.4-.4h0Z" fill="#9b978f"/>
                      </g>
                      <g>
                        <path d="M547,304.3s0,0,0,0c-.6,2-2.6,3-2.8,3,0,0-.4.3-.9,1.6-.2.6-.6.9-.9,1.1-.4.1-.7,0-.7,0,0,0,0,0,0,0-.7-.3-1.8-.6-3.1-.6-.8,0-1.5,0-1.7,0-2.6,4.4-5.4,7.6-5.5,7.6,0,0,0,0-.1,0-.8,0-2-.6-2.4-1.1-.1-.2-.2-.3-.1-.5.1-.5,2.7-7.3,3-8-.5-1.6-.5-3.1-.5-3.2,0,0,0-.9.8-1.5.9-.6,2.3-.7,4.2,0,4.7,1.5,10.5,1.3,10.5,1.3,0,0,0,0,.1,0,0,0,0,0,0,0ZM541.7,309.8s.7.3,1.2-1c.6-1.4,1-1.7,1.1-1.7,0,0,0,0,0,0,0,0,1.9-.8,2.6-2.7-1.1,0-6.2,0-10.4-1.4-1.8-.6-3.2-.6-3.9,0-.7.5-.7,1.3-.7,1.3,0,0,0,0,0,0,0,0,0,1.6.5,3.2,0,0,0,0,0,0-1,2.6-2.9,7.6-3,8,0,0,0,.1,0,.2.3.4,1.3.9,2.1,1,.4-.4,3-3.5,5.4-7.6,0,0,0,0,.1,0,.1,0,3.2-.3,5,.6Z" fill="#fff"/>
                        <path d="M533.8,302.4c-.7,0-1.3.2-1.8.5-.8.6-.8,1.4-.8,1.5,0,0,0,1.6.5,3.2-.3.7-2.9,7.5-3,8,0,.1,0,.3.1.5.4.5,1.6,1.1,2.4,1.1,0,0,0,0,0,0,0,0,0,0,.1,0,0,0,2.9-3.2,5.5-7.6.2,0,.5,0,1,0s.4,0,.7,0c1.3,0,2.4.3,3.1.6,0,0,0,0,0,0,0,0,.1,0,.3,0s.2,0,.4,0c.4-.2.7-.5.9-1.1.5-1.2.9-1.5.9-1.6.2,0,2.2-1,2.8-3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0-.1,0s0,0,0,0c0,0-.1,0-.4,0-1.4,0-6.1,0-10.1-1.3-.9-.3-1.7-.4-2.4-.4h0ZM531.2,316.8c-.7,0-1.8-.6-2.1-1,0,0,0-.2,0-.2,0-.4,2-5.4,3-8,0,0,0,0,0,0-.5-1.6-.5-3.1-.5-3.2,0,0,0,0,0,0,0,0,0-.8.7-1.3.4-.3.9-.4,1.6-.4.7,0,1.4.1,2.3.4,4,1.3,8.8,1.4,10.2,1.4s.1,0,.2,0c-.7,1.8-2.5,2.7-2.6,2.7,0,0,0,0,0,0,0,0-.5.3-1.1,1.7-.4.9-.8,1-1,1s-.2,0-.2,0c-1.1-.5-2.8-.6-3.8-.6s-1.1,0-1.2,0c0,0,0,0-.1,0-2.4,4.1-5,7.2-5.4,7.6h0Z" fill="#9b978f"/>
                      </g>
                    </g>
                    <g>
                      <path d="M533.4,308.3s0,0,0,0c0,0,0,.1-.2.1-.1,0-1.2-.3-1.5-.7,0,0,0-.2,0-.2,0,0,.2,0,.2,0,.1.3.9.5,1.3.6,0,0,.1,0,.1.1Z" fill="#fff"/>
                      <path d="M531.9,307.5s0,0,0,0c0,0,0,.1,0,.2.2.5,1.3.7,1.5.7,0,0,0,0,0,0,0,0,.1,0,.1-.1,0,0,0,0,0,0,0,0,0-.1-.1-.1-.4,0-1.2-.3-1.3-.6,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                      <path d="M544.5,307.1s0,0,0,.1c-.7.4-1.5.1-2.3-.2-.8-.3-1.9-.4-1.9-.4,0,0-.1,0-.1-.1,0,0,0-.1.1-.1,0,0,1.2,0,2,.4.9.3,1.5.5,2,.2,0,0,.2,0,.2,0,0,0,0,0,0,0Z" fill="#fff"/>
                      <path d="M540.3,306.4c0,0-.1,0-.1.1,0,0,0,.1.1.1,0,0,1.1,0,1.9.4.5.2,1,.4,1.5.4s.5,0,.8-.2c0,0,0,0,0-.1,0,0,0,0,0,0,0,0,0,0-.1,0s0,0,0,0c-.2.1-.4.2-.6.2-.4,0-.9-.1-1.4-.4-.8-.3-1.9-.4-2-.4,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                      <path d="M537.9,308.6c0,0,0,.1-.1.1-.5.1-1,.7-1,.7,0,0-.1,0-.2,0,0,0,0-.1,0-.2,0,0,.5-.6,1.1-.8,0,0,.2,0,.2,0,0,0,0,0,0,0Z" fill="#fff"/>
                      <path d="M537.8,308.4s0,0,0,0c-.6.2-1.1.8-1.1.8,0,0,0,.2,0,.2,0,0,0,0,0,0s0,0,.1,0c0,0,.4-.5,1-.7,0,0,.1,0,.1-.1,0,0,0,0,0,0,0,0,0-.1-.1-.1h0Z" fill="#9b978f"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M533,298.7c-1.8,0-2-1.4-2-1.4,0,0-.2-1.6.2-3.2h0c0,0,0-.2,0-.2-1.4-2.9-3.5-7.4-3.6-7.7h0s0,0,.1-.2c.3-.4,1.2-.9,1.8-1,.5.5,3.3,3.3,6,7.1h0c0,.1.1.1.1.1.1,0,3.2,0,5-1h0s0,0,.2,0c.3,0,.7.3,1,.8.7,1.3,1.2,1.6,1.3,1.6,0,0,1.8.6,2.7,2.3-1.3.1-6.2.6-10.2,2.2-1,.4-1.9.6-2.6.6Z" fill="#fff"/>
                      <path d="M529.4,285.3c.7.7,3.3,3.3,5.9,6.9v.2h.4c.1,0,3.3,0,5.1-1.1,0,0,0,0,0,0,.2,0,.5.3.7.7.7,1.4,1.2,1.7,1.4,1.8,0,0,1.5.5,2.3,1.8-1.7.2-6.1.7-9.8,2.2-1,.4-1.8.6-2.5.6-1.6,0-1.7-1.1-1.7-1.2,0,0-.2-1.5.2-3.1v-.2s0-.2,0-.2c-1.3-2.6-3.3-6.9-3.6-7.6.2-.3.9-.8,1.6-.9M529.6,284.7c-.9,0-2.4,1.1-2.3,1.6.2.5,3.7,7.7,3.7,7.7-.4,1.7-.2,3.2-.2,3.2,0,0,.1,1.7,2.2,1.7s1.6-.2,2.7-.6c4.7-1.9,10.4-2.2,10.4-2.2-.8-2-2.9-2.7-2.9-2.7,0,0-.4-.2-1.1-1.5-.4-.8-.9-1-1.2-1s-.3,0-.3,0c-1.7,1-4.8,1-4.9,1h0c-3-4.3-6.1-7.2-6.1-7.2h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                      <path d="M546.2,296.1s0,0,0,0c0,0,0,0-.1,0,0,0-5.8.4-10.4,2.2-1.9.8-3.3.9-4.2.3-.8-.5-.9-1.4-.9-1.4,0,0-.2-1.6.2-3.2-.3-.7-3.5-7.2-3.6-7.7,0-.1,0-.3.1-.5.4-.6,1.5-1.2,2.3-1.3,0,0,0,0,.1,0,0,0,3.1,3,6.1,7.1.5,0,3.2,0,4.7-1,0,0,0,0,0,0,0,0,.3-.2.7,0,.4.1.7.5,1,1,.6,1.2,1,1.4,1.1,1.5.2,0,2.2.8,3,2.8,0,0,0,0,0,0ZM530.9,297.2s0,.8.8,1.2c.8.5,2.2.4,3.9-.3,4.1-1.7,9.2-2.1,10.3-2.2-.8-1.8-2.8-2.4-2.8-2.4,0,0,0,0,0,0,0,0-.5-.3-1.2-1.6-.6-1.2-1.3-.9-1.3-.9-1.7,1-4.8,1-4.9,1,0,0,0,0-.1,0-2.7-3.9-5.6-6.7-6-7.1-.7.1-1.7.7-2,1.1,0,0,0,.2,0,.2.1.4,2.4,5.2,3.6,7.7,0,0,0,0,0,0-.4,1.6-.2,3.2-.2,3.2,0,0,0,0,0,0ZM530.7,297.3h0s0,0,0,0Z" fill="#fff"/>
                      <path d="M529.6,284.6s0,0,0,0c-.8,0-1.9.7-2.3,1.3-.1.2-.1.3-.1.5.2.5,3.3,7,3.6,7.7-.4,1.6-.2,3.1-.2,3.2,0,0,.1.9.9,1.4.4.2.9.4,1.4.4s1.7-.2,2.7-.6c4.6-1.9,10.3-2.2,10.4-2.2,0,0,0,0,.1,0,0,0,0,0,0,0,0,0,0,0,0,0-.8-2-2.8-2.7-3-2.8,0,0-.5-.3-1.1-1.5-.3-.6-.6-.9-1-1-.1,0-.2,0-.3,0-.2,0-.4,0-.4,0,0,0,0,0,0,0-1.5.9-4.2,1-4.7,1-3-4.2-6-7.1-6.1-7.1,0,0,0,0,0,0h0ZM533,298.8c-.5,0-.9-.1-1.3-.3-.7-.4-.8-1.2-.8-1.2,0,0,0,0,0,0,0,0-.2-1.6.2-3.2,0,0,0,0,0,0-1.2-2.5-3.5-7.4-3.6-7.7,0,0,0-.1,0-.2.3-.4,1.3-1,2-1.1.4.4,3.3,3.2,6,7.1,0,0,0,0,.1,0h0c.2,0,3.2,0,4.9-1,0,0,.1,0,.2,0,.3,0,.7.1,1.1.9.7,1.3,1.2,1.6,1.2,1.6,0,0,0,0,0,0,0,0,2,.7,2.8,2.4-1.1,0-6.1.5-10.3,2.2-1,.4-1.9.6-2.6.6h0ZM530.7,297.3h0s0,0,0,0h0Z" fill="#9b978f"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M533.6,304.8c-.3,0-.6-.1-.9-.3-.3-.3-.6-.4-1-.4s-.5,0-.7.1c-.2,0-.5.1-.7.1s-.5,0-.8-.2c-1.1-.5-1.2-1.6-1.2-2,0-.2,0-.4-.1-.5-.2-.4-.8-1.4-.3-2.3.3-.6.6-.8,1.1-1,.5-.2,1-.4,1.6-1.1.4-.4,1.1-.7,1.9-.7,1.2,0,2.6.6,2.9,2.3,0,0,.3,1.3-.1,2.1-.4.7-.3,1.3-.3,1.9,0,.3,0,.6,0,.9,0,.5-.7,1.1-1.4,1.1Z" fill="#fff"/>
                      <path d="M532.4,296.8h0c1.1,0,2.4.5,2.7,2.1,0,.3.2,1.3-.1,1.9-.4.7-.4,1.4-.3,2.1,0,.3,0,.6,0,.9,0,.4-.6.8-1.2.8s-.5,0-.7-.3c-.4-.3-.7-.4-1.1-.4-.3,0-.5,0-.8.1-.2,0-.4.1-.7.1s-.4,0-.7-.2c-.9-.4-1-1.3-1-1.8,0-.2,0-.5-.2-.7-.2-.3-.7-1.2-.3-2.1.2-.5.5-.7,1-.9.5-.2,1.1-.5,1.7-1.2.3-.4,1-.6,1.7-.6M532.4,296.3c-.8,0-1.6.3-2.1.8-1.1,1.3-2.2.8-2.8,2.2-.5,1.1.1,2.1.4,2.5,0,.1.1.2,0,.4,0,.5,0,1.7,1.3,2.3.3.1.6.2.9.2.6,0,1-.3,1.5-.3.3,0,.5,0,.8.3.3.3.7.4,1,.4.8,0,1.6-.6,1.7-1.3,0-.9-.3-1.8.2-2.7.5-.9.2-2.3.2-2.3-.3-1.8-1.8-2.5-3.2-2.5h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                      <path d="M535.8,299.6c0,.5,0,1-.3,1.5-.3.6-.3,1.1-.2,1.7,0,.3,0,.6,0,1,0,.5-.5,1-1,1.2-.7.3-1.3.2-1.9-.2-.5-.4-.9-.3-1.4-.2-.5.1-1,.3-1.8,0-1.3-.6-1.4-1.9-1.4-2.4,0-.1,0-.2,0-.3-.3-.4-.9-1.5-.4-2.7.3-.8.8-1,1.3-1.2.4-.2.9-.4,1.4-1,.6-.7,2-1,3.2-.7,1.2.3,2.1,1.2,2.3,2.5,0,0,0,.4.1.8ZM535,302.3c0-.4,0-.9.3-1.3.5-.9.2-2.1.2-2.1,0,0,0,0,0,0-.2-1.1-.9-2-2.1-2.3-1.1-.3-2.4,0-2.9.6-.5.7-1.1.9-1.5,1.1-.5.2-.9.4-1.2,1.1-.4,1,0,2,.4,2.4,0,.1.1.3.1.5,0,.5,0,1.6,1.2,2.1.7.3,1.1.2,1.6,0,.5-.1,1-.3,1.6.2.5.4,1.1.4,1.6.2.5-.2.8-.6.9-1,0-.3,0-.6,0-.9,0-.2,0-.4,0-.5Z" fill="#fff"/>
                      <path d="M532.4,296.2c-.9,0-1.7.3-2.2.8-.5.6-1,.8-1.4,1-.5.2-1,.4-1.3,1.2-.5,1.1,0,2.2.4,2.7,0,0,0,.2,0,.3,0,.5,0,1.8,1.4,2.4.3.2.6.2.9.2s.6,0,.9-.2c.2,0,.4-.1.6-.1s.5,0,.7.3c.3.3.7.4,1.1.4s.5,0,.8-.2c.6-.3,1-.7,1-1.2,0-.3,0-.7,0-1,0-.6-.1-1.1.2-1.7.3-.5.3-1.1.3-1.5,0-.4-.1-.8-.1-.8-.2-1.2-1-2.1-2.3-2.5-.3,0-.7-.1-1-.1h0ZM530.2,304.5c-.2,0-.5,0-.8-.2-1.2-.5-1.2-1.7-1.2-2.1,0-.2,0-.3-.1-.5-.3-.4-.8-1.4-.4-2.4.3-.7.7-.8,1.2-1.1.5-.2,1-.4,1.5-1.1.4-.5,1.2-.7,2-.7s.6,0,.9.1c1.1.3,1.9,1.1,2.1,2.3,0,0,0,0,0,0,0,0,.3,1.3-.2,2.1-.3.4-.3.9-.3,1.3,0,.2,0,.4,0,.5,0,.3,0,.6,0,.9,0,.4-.4.8-.9,1-.2,0-.4.1-.7.1-.3,0-.7-.1-1-.3-.3-.3-.6-.4-.9-.4s-.5,0-.7.1c-.2,0-.5.1-.8.1h0Z" fill="#9b978f"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M535.3,303c-1-1.3-.1-3.7.2-4.5.4.2,1.1.9,1.2,2.1.2,1.3-1,2.1-1.4,2.4Z" fill="#fff"/>
                      <path d="M535.6,298.9c.3.3.7.8.9,1.7.1,1-.6,1.7-1.1,2-.6-1-.2-2.7.2-3.8M535.4,298.1s-1.7,3.5-.1,5.2c0,0,1.9-.9,1.7-2.8-.2-1.8-1.6-2.4-1.6-2.4h0Z" fill="#9b978f"/>
                    </g>
                    <g>
                      <path d="M537.1,300.7c0,.7-.3,1.4-.8,2-.5.5-1,.7-1,.7,0,0-.1,0-.2,0-.7-.7-.8-1.9-.5-3.3.2-1.1.6-2,.7-2,0,0,.1-.1.2,0,0,0,1.4.7,1.7,2.5,0,0,0,.1,0,.2ZM535.3,303.1c.4-.2,1.7-1.1,1.5-2.6,0-.7-.4-1.3-.8-1.8-.2-.2-.4-.4-.5-.4-.3.6-1.3,3.4-.2,4.8ZM535.2,303.3h0s0,0,0,0Z" fill="#fff"/>
                      <path d="M535.4,298c0,0-.1,0-.1,0,0,0-.4.9-.7,2-.3,1.5-.1,2.6.5,3.3,0,0,0,0,.1,0s0,0,0,0c0,0,.5-.2,1-.7.6-.6.9-1.3.8-2,0,0,0-.1,0-.2-.2-1.9-1.6-2.5-1.7-2.5,0,0,0,0,0,0h0ZM535.3,303.1c-1.2-1.4-.1-4.2.2-4.8.1,0,.3.2.5.4.5.5.7,1.1.8,1.8.2,1.5-1.2,2.3-1.5,2.6h0ZM535.2,303.3h0s0,0,0,0h0Z" fill="#9b978f"/>
                    </g>
                  </g>
                  <g>
                    <path d="M531,303.9s0,0,0,0c0,0,0,.1-.2.1-.8-.1-1.2-.8-1.2-.8,0,0,0-.2,0-.2,0,0,.2,0,.2,0,0,0,.3.6,1,.7,0,0,.1,0,.1.1Z" fill="#fff"/>
                    <path d="M529.8,303s0,0,0,0c0,0,0,.1,0,.2,0,0,.4.7,1.2.8,0,0,0,0,0,0,0,0,.1,0,.1-.1,0,0,0,0,0,0,0,0,0-.1-.1-.1-.7,0-1-.7-1-.7,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M533.1,303.8s0,0,0,0c0,0,0,.1-.2.1-1.8-.2-2.6-1.2-2.6-1.2,0,0,0-.2,0-.2,0,0,.2,0,.2,0,0,0,.7.9,2.4,1.1,0,0,.1,0,.1.1Z" fill="#fff"/>
                    <path d="M530.5,302.5s0,0,0,0c0,0,0,.1,0,.2,0,0,.8,1,2.6,1.2,0,0,0,0,0,0,0,0,.1,0,.1-.1,0,0,0,0,0,0,0,0,0-.1-.1-.1-1.7-.2-2.4-1.1-2.4-1.1,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M534.2,303.4s0,0,0,0c0,0,0,.1-.2.1-1.5-.2-2.4-.7-2.4-.7,0,0,0-.1,0-.2,0,0,.1,0,.2,0,0,0,.9.5,2.3.7,0,0,.1,0,.1.1Z" fill="#fff"/>
                    <path d="M531.7,302.6s0,0-.1,0c0,0,0,.2,0,.2,0,0,.9.5,2.4.7,0,0,0,0,0,0,0,0,.1,0,.1-.1,0,0,0,0,0,0,0,0,0-.1-.1-.1-1.5-.2-2.3-.7-2.3-.7,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M534,298.1s0,0,0,0c0,0-.1,0-.2,0-1.3-.9-2.3-.7-2.3-.7,0,0-.2,0-.2-.1,0,0,0-.2.1-.2,0,0,1.2-.2,2.6.8,0,0,0,0,0,.1Z" fill="#fff"/>
                    <path d="M531.7,297.2c-.2,0-.3,0-.3,0,0,0-.1,0-.1.2,0,0,0,.1.1.1s0,0,0,0c0,0,.1,0,.3,0,.4,0,1.2,0,2.1.7,0,0,0,0,0,0,0,0,0,0,.1,0,0,0,0,0,0,0,0,0,0,0,0-.1-.9-.7-1.8-.8-2.2-.8h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M535.2,298.9c0,0,0,.1,0,.1,0,0-.2,0-.2,0-.6-1.5-1.8-1.6-1.8-1.6,0,0-.1,0-.1-.2,0,0,0-.1.2-.1,0,0,1.3.2,2,1.8,0,0,0,0,0,0Z" fill="#fff"/>
                    <path d="M533.1,297c0,0-.1,0-.1.1,0,0,0,.1.1.2,0,0,1.2.2,1.8,1.6,0,0,0,0,.1,0s0,0,0,0c0,0,0,0,0-.1,0,0,0,0,0,0-.7-1.6-2-1.8-2-1.8,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M532.4,293.2c0,0,0,.1,0,.1-.4.1-1.1.4-1.2.7,0,0-.1.1-.2,0,0,0-.1-.1,0-.2.2-.5,1.3-.8,1.4-.9,0,0,.2,0,.2,0,0,0,0,0,0,0Z" fill="#fff"/>
                    <path d="M532.3,293.1s0,0,0,0c-.1,0-1.2.4-1.4.9,0,0,0,.2,0,.2,0,0,0,0,0,0,0,0,.1,0,.1,0,.1-.3.8-.6,1.2-.7,0,0,.1,0,0-.1,0,0,0,0,0,0,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M543.6,293.5s0,0,0,0c0,0-.1,0-.2,0-.5-.3-1.2,0-2,.4-.8.4-1.9.6-2,.6,0,0-.1,0-.2-.1,0,0,0-.1.1-.2,0,0,1.1-.2,1.9-.5.7-.4,1.6-.7,2.3-.4,0,0,0,0,0,.1Z" fill="#fff"/>
                    <path d="M542.9,293.2c-.5,0-1.1.3-1.6.5-.7.4-1.9.5-1.9.5,0,0-.1,0-.1.2,0,0,0,.1.1.1s0,0,0,0c0,0,1.2-.2,2-.6.6-.3,1.1-.5,1.5-.5.2,0,.4,0,.5.1,0,0,0,0,0,0,0,0,.1,0,.1,0,0,0,0,0,0,0,0,0,0,0,0-.1-.2-.1-.4-.2-.7-.2h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M536.9,292.5s0,0,0,0c0,0,0,.1-.2.1-.6-.1-1.2-.7-1.2-.7,0,0,0-.1,0-.2,0,0,.1,0,.2,0,0,0,.5.5,1,.6,0,0,.1,0,.1.1Z" fill="#fff"/>
                    <path d="M535.6,291.8s0,0,0,0c0,0,0,.1,0,.2,0,0,.6.6,1.2.7,0,0,0,0,0,0,0,0,.1,0,.1-.1,0,0,0,0,0,0,0,0,0-.1-.1-.1-.5-.1-1-.6-1-.6,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M542.5,301.5s0,0,0,0c0,0,0,.1-.2.1,0,0-1.7-.2-2.1-1.2-.4-.9-.9-1.2-.9-1.2,0,0,0-.1,0-.2,0,0,.1,0,.2,0,0,0,.6.4,1,1.3.4.8,1.9,1,1.9,1,0,0,.1,0,.1.1Z" fill="#fff"/>
                    <path d="M539.4,299s0,0-.1,0c0,0,0,.2,0,.2,0,0,.5.4.9,1.2.4,1,2.1,1.2,2.1,1.2,0,0,0,0,0,0,0,0,.1,0,.1-.1,0,0,0,0,0,0,0,0,0-.1-.1-.1,0,0-1.5-.2-1.9-1-.4-.9-1-1.3-1-1.3,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M543,300.7s0,0,0,0c0,0,0,.1-.1.1-1.5,0-2.2-1.1-2.2-1.1,0,0,0-.2,0-.2,0,0,.2,0,.2,0,0,0,.6,1,2,1,0,0,.1,0,.1.1Z" fill="#fff"/>
                    <path d="M540.8,299.5s0,0,0,0c0,0,0,.1,0,.2,0,0,.7,1.1,2.2,1.1,0,0,0,0,0,0,0,0,.1,0,.1-.1,0,0,0,0,0,0,0,0,0-.1-.1-.1-1.3,0-1.9-1-2-1,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                  </g>
                </g>
              </g>
              <g>
                <g>
                  <g>
                    <path d="M817.4,295.8c-.3,0-.5,0-.7,0-.5-.2-.7-1.2-.8-2.2-.1-.9.2-2.3.7-4l.2-.9c.6-2.2.5-3.3.4-4.8-.1-1.1,1.1-1.7,3-2.4,1-.3,1.3-1.4,1.7-2.5.5-1.4,1-3.1,2.7-3.9h.2c0,0-.1-.9-.1-.9.8,0,3.8.1,5.3,1.4-.2.5-.8,2.4-1.4,3.3-.9,1.1-3.6,3.8-5.8,5-2.4,1.3-2.2,5.4-2.2,5.5,0,0,.3,2.7-.5,4.7-.7,1.6-2.1,1.8-2.6,1.8Z" fill="#fff"/>
                    <path d="M825,274.4c1,0,3.4.2,4.7,1.2-.2.7-.7,2.3-1.3,3-.8,1.1-3.6,3.8-5.8,5-2.6,1.4-2.3,5.6-2.3,5.8,0,0,.3,2.6-.5,4.6-.6,1.4-1.7,1.6-2.4,1.6s-.6,0-.6,0c-.4-.1-.5-1.2-.6-2-.1-.8.2-2.2.7-3.9l.2-.9c.6-2.3.5-3.4.4-4.8,0-.8.7-1.4,2.9-2.1,1.1-.4,1.4-1.5,1.8-2.7.4-1.4,1-3,2.6-3.8l.3-.2v-.4c0,0-.1-.3-.1-.3M824.6,273.9c-.1,0-.2,0-.2,0v.9c-3.2,1.6-2.3,5.8-4.2,6.4-1.9.6-3.3,1.3-3.2,2.6s.2,2.4-.4,4.7-1.1,4-.9,5c.1,1,.3,2.2,1,2.4.2,0,.5.1.8.1.9,0,2.2-.4,2.9-1.9.9-2.1.5-4.8.5-4.8,0,0-.3-4,2.1-5.3,2.3-1.3,5.1-4,5.9-5.1.8-1.1,1.5-3.5,1.5-3.5-1.7-1.5-4.9-1.6-5.7-1.6h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M816.6,296.2c-.8-.3-.9-1.4-1.1-2.5h0c-.1-1,.2-2.3.7-4.2,0-.3.2-.6.2-.9.5-2.2.5-3.2.4-4.6-.2-1.5,1.6-2.3,3.3-2.8.8-.3,1.1-1.2,1.4-2.3.5-1.4,1-3.2,2.8-4.1v-.8c-.1,0-.1-.1,0-.1,0,0,0,0,.1,0,.2,0,4.1,0,6,1.6,0,0,0,.1,0,.2,0,.1-.7,2.5-1.6,3.6-.9,1.2-3.7,3.9-6,5.1-.6.3-1.4,1.1-1.8,3-.2,1.1-.2,2.1-.2,2.1,0,.2.3,2.8-.6,4.9-.9,2.1-3,2.2-3.9,1.9h0ZM824.6,274.1v.7c.1,0,0,.2,0,.2-1.8.9-2.3,2.5-2.8,4-.4,1.2-.7,2.2-1.6,2.5-2,.7-3.2,1.3-3.1,2.4.1,1.4.2,2.5-.4,4.7,0,.3-.2.6-.2.9-.5,1.8-.8,3.2-.7,4h0c.1,1,.3,2,.8,2.2h0c.5.2,2.6.4,3.4-1.7.8-2,.5-4.7.5-4.7,0,0,0,0,0,0,0-.2-.2-4.2,2.2-5.5,2.3-1.2,5-3.9,5.9-5,.7-.9,1.3-2.9,1.5-3.3-1.6-1.3-4.6-1.4-5.5-1.4Z" fill="#fff"/>
                    <path d="M824.6,273.7c-.1,0-.2,0-.2,0,0,0-.1,0-.1,0s0,0,0,.1v.8c-1.7,1-2.3,2.7-2.7,4.1-.3,1.1-.6,2-1.4,2.3-1.7.6-3.5,1.3-3.3,2.8.1,1.4.2,2.4-.4,4.6,0,.3-.2.6-.2.9-.5,1.9-.8,3.2-.7,4.2h0c.1,1.1.3,2.3,1.1,2.5h0c.2,0,.5.1.8.1,1,0,2.4-.4,3-2,.9-2.1.6-4.7.6-4.9,0,0,0-1,.2-2.1.4-1.9,1.2-2.7,1.8-3,2.3-1.3,5.1-4,6-5.1.9-1.1,1.5-3.5,1.6-3.6,0,0,0-.1,0-.2-1.7-1.5-5-1.6-5.8-1.6h0ZM817.4,295.9c-.3,0-.6,0-.7,0h0c-.6-.2-.7-1.3-.8-2.2h0c-.1-.9.2-2.3.7-4,0-.3.2-.6.2-.9.6-2.2.5-3.3.4-4.7-.1-1.1,1.1-1.8,3.1-2.4.9-.3,1.3-1.3,1.6-2.5.5-1.4,1-3.1,2.8-4,0,0,.1-.1.1-.2v-.7c.7,0,3.8.1,5.4,1.4-.1.5-.7,2.4-1.5,3.3-.9,1.1-3.6,3.8-5.9,5-2.4,1.3-2.2,5.3-2.2,5.5,0,0,0,0,0,0,0,0,.3,2.7-.5,4.7-.6,1.5-1.9,1.8-2.7,1.8h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M823.2,288.5c-.3,0-.6-.1-.9-.3-.6-.5-.5-2.5-.5-3.2,0-.2,0-.4,0-.5,0-.2-.4-.7-1.4-2-.8-1-1.8-2.2-2.5-3.3-.8-1.2-2.5-2.3-4.1-3.4-1.2-.8-2.4-1.6-3.2-2.4-1.7-1.7,0-4.7.4-5.2.1,0,.2,0,.4,0,1.4,0,3.9,1.7,4.8,2.3.2.1.3.2.4.3.4.2,1.2,1.7,1.5,2.9.3,1.2,1.7,2,1.8,2.1h0s0,0,0,0c.4,0,.7-.1,1-.1.7,0,1.2.2,1.6.6.7.8.6,2.3.5,3.3v.4c-.1,1.6.8,3,1.6,4.1.5.6-.2,2.3-.5,3.2-.1.3-.2.5-.2.7-.1.4-.5.6-.9.6Z" fill="#fff"/>
                    <path d="M811.5,268.4c1.4,0,3.8,1.6,4.7,2.2.2.1.3.2.4.3.3.2,1.1,1.6,1.3,2.7.3,1.2,1.7,2.1,1.9,2.2h.2c0,0,.2,0,.2,0,.3,0,.7,0,1,0,.6,0,1.1.2,1.4.5.7.7.5,2.2.4,3.1,0,.2,0,.3,0,.4-.1,1.6.9,3.1,1.7,4.2.4.5-.3,2.2-.6,3-.1.3-.2.5-.2.7,0,.3-.3.5-.6.5s-.5,0-.7-.3c-.3-.3-.5-1.3-.4-3,0-.2,0-.4,0-.5,0-.3-.3-.7-1.4-2.1-.8-1-1.8-2.2-2.4-3.3-.8-1.3-2.5-2.4-4.1-3.4-1.2-.8-2.4-1.5-3.2-2.4-1.5-1.5,0-4.2.3-4.8,0,0,.1,0,.2,0M811.5,267.9c-.2,0-.4,0-.5,0,0,0-2.4,3.6-.4,5.6,2,2,6,3.6,7.3,5.7s3.8,4.7,3.8,5.1-.4,3.2.5,3.9c.4.3.7.4,1.1.4.5,0,1-.3,1.1-.8.3-.9,1.4-3.3.7-4.1-.7-.9-1.7-2.3-1.6-3.9,0-1.4.7-4.6-2.3-4.6-.3,0-.7,0-1,.1,0,0-1.4-.8-1.7-1.9-.3-1.1-1.1-2.8-1.6-3-.4-.2-3.6-2.6-5.4-2.6h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M822.7,288.8c-.2,0-.4-.2-.6-.3-.8-.6-.7-2.6-.6-3.6,0-.2,0-.4,0-.4,0-.2-.7-1-1.3-1.7-.8-1-1.8-2.2-2.5-3.3-.7-1.2-2.4-2.2-3.9-3.2-1.2-.8-2.4-1.6-3.3-2.4-.9-.9-1.1-2.2-.6-3.7.4-1.2.9-2.1,1-2.1,0,0,0,0,0,0,1.3-.5,3.7.9,5.7,2.2.2.1.3.2.4.2.3.2.7.9.9,1.3.3.6.6,1.3.7,1.9.2.9,1.3,1.6,1.5,1.8,1.2-.2,2.2,0,2.8.5,1,.9.9,2.6.8,3.8,0,.2,0,.3,0,.4,0,1.4.8,2.8,1.6,3.8.6.8,0,2.5-.5,3.7,0,.3-.2.5-.2.6-.1.4-.4.8-.9.9-.3.1-.6,0-1,0ZM811.1,268.1c-.1.2-.6,1-.9,2-.4,1.4-.3,2.6.5,3.3.9.8,2.1,1.6,3.3,2.4,1.6,1,3.3,2.1,4.1,3.4.7,1.1,1.7,2.3,2.5,3.3,1,1.2,1.4,1.7,1.4,1.9,0,0,0,.2,0,.5,0,.8-.2,2.8.5,3.3.4.3.9.4,1.3.3.3,0,.5-.3.6-.6,0-.2.1-.4.2-.7.4-1,1-2.7.5-3.3-.8-1.1-1.8-2.5-1.7-4,0-.1,0-.3,0-.4,0-1.1.2-2.7-.6-3.5-.5-.5-1.4-.6-2.5-.4,0,0,0,0-.1,0,0,0-1.5-.9-1.8-2-.3-1.1-1.1-2.7-1.5-2.9,0,0-.2-.1-.4-.3-1-.7-4-2.7-5.3-2.2ZM821.5,284.5h0s0,0,0,0Z" fill="#fff"/>
                    <path d="M811.5,267.7c-.2,0-.4,0-.6.1,0,0,0,0,0,0,0,0-.6.9-1,2.1-.5,1.6-.3,2.9.6,3.7.9.9,2.1,1.7,3.3,2.4,1.6,1,3.2,2.1,3.9,3.2.7,1.1,1.7,2.3,2.5,3.3.6.8,1.2,1.5,1.3,1.7,0,0,0,.2,0,.4,0,1-.2,3,.6,3.6.2.1.4.3.6.3.2,0,.4,0,.6,0s.3,0,.4,0c.4-.1.7-.5.9-.9,0-.2.1-.4.2-.6.4-1.1,1.1-2.9.5-3.7-.8-1-1.7-2.3-1.6-3.8,0-.1,0-.3,0-.4,0-1.1.2-2.9-.8-3.8-.4-.4-1-.6-1.8-.6s-.6,0-1,0c-.3-.2-1.3-.9-1.5-1.8-.1-.5-.4-1.2-.7-1.9-.2-.4-.6-1.1-.9-1.3,0,0-.2-.1-.4-.2-1.7-1.1-3.7-2.4-5.1-2.4h0ZM823.2,288.5c-.3,0-.6-.1-.9-.4-.7-.5-.5-2.5-.5-3.3,0-.2,0-.4,0-.5,0-.2-.4-.7-1.4-1.9-.8-1-1.8-2.2-2.5-3.3-.8-1.2-2.4-2.3-4.1-3.4-1.2-.8-2.4-1.6-3.3-2.4-.8-.8-1-1.9-.5-3.3.3-1,.8-1.8.9-2,.1,0,.3,0,.4,0,1.4,0,4,1.7,4.9,2.3.2.1.3.2.4.3.4.2,1.2,1.8,1.5,2.9.3,1.1,1.7,2,1.8,2,0,0,0,0,0,0s0,0,0,0c.4,0,.7-.1,1-.1.7,0,1.2.2,1.5.5.9.8.7,2.4.6,3.5,0,.2,0,.3,0,.4-.1,1.5.8,3,1.7,4,.5.6-.1,2.3-.5,3.3,0,.3-.2.5-.2.7,0,.3-.3.6-.6.6-.1,0-.2,0-.3,0h0ZM821.5,284.5h0s0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M829.8,275.3c-.6,0-1.2-.2-1.2-.2-.5-.5-1.4-.7-2.4-.7s-1.5.2-1.7.2c-.2,0-.9-.2-1.2-.7-.4-.7-.9-1-1.2-1.2l1.6-3.8c0-1.4-.2-3.8-.2-3.9v-.4s-2,1.1-2,1.1l-4.1,3.7-.7.7c-1.5-.9-2.6-1-3.4-1s-.6,0-.7,0c-.7-.3-1.4-.9-1.6-1.5,0-.2,0-.3,0-.5.3-.7,2.8-4.4,2.8-4.5.5-1.5,1.4-2.1,1.4-2.1h0s.2-.8.2-.8l1-.6c0,0,.6-.8.9-2.5.3-1.4,1.9-3.4,2.2-3.9,8.7.1,13,4.5,13.6,5.2-.2.4-.5,1.3-.6,1.7,0,.5-.2,1.1-.6,1.7-.4.6-.6,2.5-.7,6.5,0,2.4-1.1,6.4-1.3,7.2,0,0-.2,0-.3,0Z" fill="#fff"/>
                    <path d="M819.8,253.1c8.2.1,12.3,4.1,13.2,5-.2.4-.5,1.2-.6,1.7,0,.4-.2,1-.5,1.5-.4.6-.7,2.5-.7,6.7,0,2.2-1,5.9-1.2,7,0,0,0,0-.1,0-.4,0-.8-.1-1-.2-.7-.5-1.5-.8-2.5-.8s-1.4.2-1.7.2c-.3,0-.8-.2-1-.6-.4-.6-.8-1-1.1-1.2l1.5-3.6h0c0,0,0-.2,0-.2,0-1.3-.2-3.8-.2-3.9v-.8c0,0-.7.4-.7.4l-1.6.9h0s0,0,0,0l-4,3.7-.5.6c-1.4-.8-2.6-1-3.3-1s-.5,0-.7,0c-.6-.3-1.2-.9-1.4-1.3,0-.1,0-.2,0-.3.3-.6,2.1-3.4,2.8-4.4h0c0,0,0-.1,0-.1.4-1.3,1.2-1.9,1.2-1.9h.1c0,0,0-.3,0-.3l.2-.6.9-.6h0c0,0,0-.1,0-.1,0,0,.6-.8.9-2.5.3-1.2,1.6-3.1,2.1-3.7M819.5,252.6s-2,2.5-2.4,4.1c-.3,1.6-.8,2.3-.8,2.3l-1.1.7-.2.7s-.9.7-1.4,2.2c0,0-2.5,3.8-2.8,4.5-.3.7.9,2,1.9,2.3,0,0,.3,0,.7,0,.7,0,1.9.2,3.4,1.1l.8-.9,4-3.7,1.6-.9s.2,2.5.2,3.8l-1.7,4s.7.2,1.3,1.2c.4.7,1.5.8,1.5.8,0,0,.7-.2,1.7-.2s1.6.2,2.3.7c0,0,.7.2,1.3.2s.4,0,.5,0c0,0,1.3-4.7,1.3-7.4,0-2.7.2-5.8.6-6.4.5-.6.6-1.3.6-1.8,0-.5.6-1.8.6-1.8,0,0-4.2-5.3-14-5.4h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M824,274.9c-.4-.1-.8-.4-1.1-.8-.5-.9-1.2-1.1-1.2-1.1,0,0,0,0-.1,0,0,0,0-.1,0-.2l1.6-4c0-1-.1-2.8-.2-3.5l-1.3.8-4,3.7-.8.8c0,0-.2,0-.2,0-1.2-.8-2.3-1-2.9-1.1-.7,0-1.1,0-1.1,0,0,0,0,0-.1,0-.8-.3-1.7-1.1-1.9-1.8-.1-.3-.1-.6,0-.8.3-.7,2.6-4.2,2.8-4.5.4-1.3,1.2-2,1.4-2.2l.2-.7s0,0,0-.1l1-.6c0-.1.5-.8.8-2.2.3-1.7,2.3-4.1,2.4-4.2,0,0,0,0,.1,0,5.1,0,8.7,1.5,10.8,2.8,2.3,1.3,3.3,2.7,3.4,2.7,0,0,0,.1,0,.2-.2.4-.6,1.4-.6,1.7h0c0,.5-.2,1.2-.7,1.9-.5.7-.6,4.9-.6,6.3,0,2.7-1.3,7.3-1.3,7.4,0,0,0,.1-.1.1-.7.3-1.9-.1-1.9-.1,0,0,0,0,0,0-1.4-1.2-3.8-.5-3.8-.5,0,0,0,0,0,0,0,0-.2,0-.5-.1ZM822,272.7c.3.1.8.5,1.2,1.2.3.5,1.1.7,1.3.7.2,0,.7-.2,1.4-.2,1.1,0,2,.2,2.6.7h0c.3.1,1.1.3,1.6.2.2-.7,1.3-4.8,1.3-7.3,0-4,.3-6,.7-6.5.4-.6.5-1.2.6-1.7h0c0-.5.5-1.4.6-1.8-.3-.3-1.3-1.4-3.2-2.6-2-1.2-5.5-2.7-10.5-2.7-.3.4-2,2.5-2.3,3.9-.3,1.6-.8,2.3-.9,2.4,0,0,0,0,0,0l-1,.6-.2.7s0,0,0,0c0,0-.9.7-1.4,2.1,0,0,0,0,0,0,0,0-2.5,3.8-2.8,4.5,0,.1,0,.3,0,.5.2.6,1,1.3,1.7,1.5.2,0,.6-.1,1.2,0,.7,0,1.7.3,3,1,0,0,.7-.7.7-.8l4-3.7s0,0,0,0l1.6-.9c0,0,.1,0,.2,0,0,0,0,0,0,.1,0,.1.2,2.5.2,3.8,0,0,0,0,0,0l-1.6,3.8ZM816.4,259h0s0,0,0,0Z" fill="#fff"/>
                    <path d="M819.5,252.4c0,0-.1,0-.1,0,0,.1-2.1,2.5-2.4,4.2-.3,1.4-.7,2.1-.8,2.2l-1,.6s0,0,0,.1l-.2.7c-.2.2-1,.9-1.4,2.2-.2.3-2.5,3.8-2.8,4.5-.1.2-.1.5,0,.8.3.7,1.1,1.5,1.9,1.8,0,0,0,0,0,0s0,0,0,0c0,0,.3,0,.7,0s.3,0,.4,0c.6,0,1.7.3,2.9,1.1,0,0,0,0,0,0,0,0,.1,0,.1,0l.8-.8,4-3.7,1.3-.8c0,.7.2,2.4.2,3.5l-1.6,4s0,.1,0,.2,0,0,.1,0c0,0,.7.2,1.2,1.1.3.4.7.7,1.1.8.3,0,.5.1.5.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.7-.2,1.6-.2.7,0,1.5.1,2.2.7,0,0,0,0,0,0,0,0,.7.2,1.3.2s.4,0,.6-.1c0,0,0,0,.1-.1,0-.2,1.3-4.7,1.3-7.4,0-1.4.1-5.6.6-6.3.5-.7.6-1.4.7-1.8h0c0-.4.5-1.4.6-1.8,0,0,0-.1,0-.2,0,0-1.1-1.4-3.4-2.7-2.1-1.2-5.7-2.7-10.8-2.8h0ZM812.7,269.3c-.7-.3-1.4-1-1.7-1.5,0-.2,0-.4,0-.5.3-.7,2.8-4.4,2.8-4.5,0,0,0,0,0,0,.5-1.4,1.3-2.1,1.4-2.1,0,0,0,0,0,0l.2-.7,1-.6s0,0,0,0c0,0,.5-.7.9-2.4.3-1.4,1.9-3.5,2.3-3.9,5,0,8.5,1.5,10.5,2.7,1.9,1.1,3,2.3,3.2,2.6-.1.3-.5,1.3-.6,1.7h0c0,.5-.2,1.1-.6,1.7-.4.5-.6,2.5-.7,6.5,0,2.5-1.1,6.6-1.3,7.3-.1,0-.2,0-.4,0-.4,0-.9-.1-1.2-.2h0c-.6-.5-1.4-.7-2.4-.7s-.2,0-.3,0c-.7,0-1.2.2-1.4.2-.2,0-1-.2-1.3-.7-.4-.7-1-1.1-1.2-1.2l1.6-3.8s0,0,0,0c0-1.3-.2-3.7-.2-3.8,0,0,0-.1,0-.1,0,0,0,0,0,0s0,0,0,0l-1.6.9s0,0,0,0l-4,3.7s-.7.8-.7.8c-1.3-.7-2.3-1-3-1-.2,0-.3,0-.4,0-.4,0-.6,0-.7,0h0ZM816.4,259h0s0,0,0,0h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M836.6,235.7c-1.1,0-3.8-.4-4.9-3.9l2.2-1.7,5.4,2.3c0,.4.4,1.6,0,2.5-.2.4-1.3.9-2.7.9Z" fill="#fff"/>
                    <path d="M834,230.3l5.1,2.2c.1.4.3,1.5,0,2.2-.1.2-1.1.7-2.4.7s-3.6-.5-4.6-3.6l2-1.5M833.9,229.8l-2.5,1.9c.9,3.3,3.3,4.3,5.2,4.3s2.7-.5,2.9-1c.5-1.1,0-2.8,0-2.8l-5.6-2.4h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M834.8,235.8c-1.3-.5-2.8-1.5-3.5-4.1,0,0,0-.2,0-.2l2.5-1.9c0,0,.1,0,.2,0l5.6,2.4c0,0,0,0,.1.1,0,0,.5,1.7,0,2.9-.3.6-1.7,1.2-3.4,1.1-.4,0-.9-.1-1.5-.3ZM831.6,231.7c1,3.3,3.3,3.9,4.6,4,1.6,0,2.9-.5,3.1-.9.4-.9,0-2.2,0-2.6l-5.4-2.3-2.3,1.8Z" fill="#fff"/>
                    <path d="M833.9,229.6s0,0-.1,0l-2.5,1.9c0,0,0,.1,0,.2.7,2.6,2.2,3.7,3.5,4.1.5.2,1.1.3,1.5.3.1,0,.3,0,.4,0,1.5,0,2.8-.6,3-1.2.5-1.2,0-2.8,0-2.9,0,0,0,0-.1-.1l-5.6-2.4s0,0,0,0h0ZM836.6,235.8c-.1,0-.2,0-.3,0-1.3,0-3.6-.7-4.6-4l2.3-1.8,5.4,2.3c0,.3.4,1.6,0,2.6-.2.4-1.3.9-2.7.9h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M837.9,233.9c-.6-.4-2.2-1.3-4.3-1.9.2-.4.4-1,.5-1.6,0-.8.3-2.6.3-2.6v-.2s-.2,0-.2,0c0,0-.5-.1-.3-1,.3-1.5.5-1.6.5-1.6s.1,0,.2.2l.3.3v-.4c.1,0,1.6-4,4.6-4s.7,0,1,.1c1.6.4,2.7,1.3,3.1,2.5.5,1.4,0,3.1-1.1,4.8l-.2.3h.3c0,.1.2.2.2.3,0,0,0,.2,0,.4-.3.6-1,1.4-1.6,1.4s-.2,0-.3,0h-.2c0,0-.1,0-.1,0,0,0-1.9,1.8-2.7,3.2Z" fill="#fff"/>
                    <path d="M839.5,221.1c.3,0,.6,0,.9.1,1.5.4,2.5,1.2,2.9,2.3.5,1.3,0,3-1.1,4.6l-.4.5.6.2s0,0,0,0c0,0,0,0,0,.2-.3.5-.9,1.3-1.3,1.3s-.1,0-.2,0l-.3-.2-.3.2c0,0-1.8,1.6-2.6,3.1-.7-.4-2.1-1.2-3.9-1.7.2-.4.3-.9.4-1.4,0-.8.3-2.6.3-2.6v-.5c0,0-.4,0-.4,0-.1,0-.2-.2-.2-.7.1-.8.3-1.2.3-1.3l.6.6.3-.8s1.4-3.9,4.2-3.9M839.5,220.6c-3.2,0-4.7,4.2-4.7,4.2-.2-.2-.3-.2-.4-.2-.4,0-.6.9-.8,1.8-.2,1.2.5,1.3.5,1.3,0,0-.3,1.8-.3,2.7,0,.8-.6,1.8-.6,1.8,2.8.7,4.8,2.1,4.8,2.1.6-1.5,2.7-3.4,2.7-3.4.1,0,.3,0,.4,0,.8,0,1.5-1,1.8-1.6.3-.7-.3-.9-.3-.9,2.3-3.1,1.9-6.6-2.1-7.7-.4-.1-.7-.1-1.1-.1h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M838,234.4s0,0,0,0c0,0-1.9-1.4-4.7-2.1,0,0-.1,0-.1-.1,0,0,0-.1,0-.2,0,0,.5-.9.6-1.7,0-.7.2-2.1.3-2.5-.1,0-.2-.1-.4-.3-.2-.3-.3-.7-.2-1.1.2-1.1.4-1.8.8-2,.1,0,.3,0,.5,0,.2-.4.6-1.4,1.3-2.2,1.3-1.6,2.9-2.2,4.6-1.7,1.7.5,2.9,1.4,3.4,2.8.5,1.5.1,3.3-1.1,5,0,0,.2.2.3.3,0,.2,0,.5,0,.7-.2.5-.8,1.4-1.5,1.6-.3,0-.5,0-.8,0-.4.4-2.1,2-2.6,3.3,0,0,0,0-.1.1,0,0,0,0-.1,0ZM834.5,232.3c1.7.6,3,1.4,3.4,1.7.7-1.5,2.6-3.2,2.7-3.3,0,0,.1,0,.2,0,.2,0,.4.1.6,0,.6-.2,1.1-1,1.3-1.4,0-.2,0-.3,0-.4,0-.2-.2-.2-.2-.2,0,0-.1,0-.1-.1,0,0,0-.1,0-.2,1.2-1.7,1.7-3.5,1.2-4.9-.4-1.2-1.5-2.1-3.1-2.5-1.6-.4-3,.1-4.2,1.6-.9,1.1-1.4,2.4-1.4,2.4,0,0,0,.1-.1.1,0,0-.1,0-.2,0,0,0-.2-.2-.3-.2-.3,0-.5,1.3-.6,1.7,0,.4,0,.7.1.9.1.2.3.2.3.2.1,0,.2.1.2.2,0,0-.3,1.8-.3,2.6,0,.6-.3,1.3-.5,1.7.3,0,.7.2,1,.3Z" fill="#fff"/>
                    <path d="M839.5,220.4c-1.3,0-2.5.6-3.5,1.8-.7.9-1.1,1.8-1.3,2.2-.1,0-.2-.1-.3-.1s0,0-.1,0c-.4.1-.6.8-.8,2,0,.5,0,.9.2,1.1.1.2.3.2.4.3,0,.5-.2,1.8-.3,2.5,0,.8-.5,1.7-.6,1.7,0,0,0,.1,0,.2,0,0,0,0,.1.1,2.8.7,4.7,2.1,4.7,2.1,0,0,0,0,0,0,0,0,0,0,0,0s0,0,0,0c0,0,0,0,.1-.1.5-1.2,2.2-2.9,2.6-3.3.1,0,.2,0,.4,0s.3,0,.4,0c.7-.3,1.3-1.1,1.5-1.6.1-.3.1-.5,0-.7,0-.1-.2-.2-.3-.3,1.2-1.7,1.6-3.6,1.1-5-.5-1.3-1.6-2.3-3.4-2.8-.4-.1-.7-.2-1.1-.2h0ZM834.8,225s0,0,0,0c0,0,.1,0,.1-.1,0,0,.5-1.3,1.4-2.4.9-1.1,2-1.7,3.1-1.7.3,0,.7,0,1,.1,1.6.4,2.7,1.3,3.1,2.5.5,1.4,0,3.2-1.2,4.9,0,0,0,.1,0,.2,0,0,0,.1.1.1,0,0,.2,0,.2.2,0,.1,0,.2,0,.4-.2.5-.8,1.2-1.3,1.4,0,0-.2,0-.3,0s-.2,0-.3,0c0,0,0,0,0,0,0,0,0,0-.1,0,0,0-2,1.8-2.7,3.3-.5-.3-1.7-1.1-3.4-1.7-.3-.1-.6-.2-1-.3.2-.3.5-1,.5-1.7,0-.8.3-2.6.3-2.6,0-.1,0-.2-.2-.2,0,0-.2,0-.3-.2-.1-.2-.2-.5-.1-.9,0-.4.3-1.6.6-1.7,0,0,0,0,0,0,0,0,.2.1.3.2,0,0,0,0,.1,0h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M833.2,258.5c-1-.7-4.1-3-7.1-3.8-2.9-.7-6.9-1.1-8.2-1.2l2.8-5.3,1.5-3.6c0-.3,1.4-6.4,1.5-7.5,0-.3,0-.6,0-.9,0-.7,0-1.2.5-1.8.9-.9,1.4-2.2,1.5-2.8,0-.5.8-1.4,1.3-1.4.5,0,.7-.2.9-.3,0,0,.2-.1.3-.2,0,0,0,0,.1,0,.2,0,.4.2.5.5,0,.3.5.5.9.6.5.2,1.1.4,1.5.9.4.6.4.7.4.7v.4c0,0,.4-.2.4-.2.2-.1.6-.3,1.2-.3.9,0,4,1.5,4.7,2.1.2.1.3.3.3.3.3.3.4.3.9.4.2,0,.4,0,.6,0,.6,0,1.6,0,1.8.3.1.1.2.3.2.4.1.2.2.5.7.7.5.2.5.5.7,1.5.1.8.6,1.4.9,1.9,0,.1.2.2.2.3,0,.2,0,.2,0,.3,0,0-.1.2-.6.4-.5.2-1.1.8-1.6,1.3-.3.3-.6.6-.8.7-.6.4-1.1,1-1.1,1,0,0-.8,1.8-3.1,4.8-1.4,1.9-3.8,5.3-3.5,6.9.1.8-.3,2.3-.5,2.9Z" fill="#fff"/>
                    <path d="M828.4,230.1c0,0,.2.1.2.3.1.5.6.6,1,.8.5.2,1,.3,1.3.8.1.2.2.3.3.4l-.4.3.6.3s.2,0,.3,0h.3s.1-.2.1-.2c0,0,0,0,0,0,.2,0,.5-.2.9-.2h0c.8,0,3.8,1.5,4.4,2,.2.1.3.3.3.3.3.4.5.4,1.1.4.2,0,.4,0,.6,0,.4,0,1.4,0,1.6.2,0,.1.1.2.2.3.1.3.3.6.9.8.3.1.4.2.5,1.3.1.9.6,1.5,1,2,0,.1.2.2.2.3,0,0,0,0,0,0,0,0-.1.1-.5.3-.6.2-1.2.8-1.7,1.3-.3.3-.6.6-.7.7-.6.4-1.1,1-1.1,1.1h0s0,.1,0,.1c0,0-.7,1.7-3,4.7-1.8,2.3-3.8,5.4-3.6,7.1,0,.6-.2,1.7-.4,2.5-1.2-.9-4.2-2.9-6.9-3.6-2.7-.7-6.3-1-7.8-1.1l2.6-5,1.5-3.6h0s0,0,0,0c0-.3,1.4-6.4,1.5-7.5,0-.3,0-.7,0-1,0-.7,0-1.1.4-1.6.9-1,1.5-2.3,1.6-2.9,0-.4.8-1.2,1-1.2.6,0,.8-.2,1.1-.4,0,0,.2-.1.3-.2,0,0,0,0,0,0M828.4,229.6c0,0-.2,0-.3,0-.4.2-.5.5-1.1.5-.6,0-1.4,1.1-1.5,1.6-.1.5-.6,1.7-1.5,2.7-.9.9-.5,1.8-.6,2.9-.1,1.1-1.5,7.4-1.5,7.4l-1.5,3.6-3,5.6s5,.3,8.5,1.2c3.5.9,7.3,3.9,7.3,3.9,0,0,.8-2.2.6-3.4-.2-1.2,1.1-3.6,3.5-6.7,2.3-3.1,3.1-4.8,3.1-4.8,0,0,.4-.6,1-.9s1.5-1.7,2.3-2c.8-.3.9-.7.7-1.1-.2-.4-1-1.1-1.1-2.1-.1-1-.2-1.4-.8-1.7-.6-.3-.5-.6-.8-1s-1.9-.3-2.6-.4-.4,0-1.1-.6c-.6-.6-3.8-2.1-4.8-2.1,0,0,0,0,0,0-.7,0-1.1.3-1.3.4,0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0,0-.1-.1-.3-.4-.8-.7-1.1-2.2-1-2.3-1.4-.1-.4-.4-.7-.7-.7h0Z" fill="#9b978f"/>
                  </g>
                  <g>
                    <path d="M817.5,254s0,0-.1,0c0,0,0-.1,0-.2l2.9-5.6,1.4-3.6c0-.4,1.4-6.3,1.5-7.4,0-.3,0-.6,0-.9,0-.7,0-1.4.6-2.1.8-.9,1.3-2,1.4-2.6,0-.3.3-.7.6-1.1.2-.2.6-.7,1.1-.7.3,0,.5-.1.7-.2.1,0,.2-.2.4-.2.2,0,.4,0,.7,0,.3.1.5.4.6.7,0,.1.3.2.6.3.5.2,1.2.4,1.7,1.1.2.3.3.5.4.6.3-.1.7-.3,1.3-.3,1,0,4.2,1.6,4.9,2.2.2.2.3.3.4.4q.2.2.6.2c.2,0,.4,0,.6,0,1,0,1.8,0,2.1.4.1.2.2.3.3.5.1.2.2.3.5.5.7.3.8.8.9,1.8.1.7.5,1.3.8,1.7.1.1.2.3.3.4.1.2.2.5,0,.7,0,.3-.4.5-.9.7-.5.2-1,.7-1.4,1.2-.3.3-.6.6-.9.8-.5.3-.9.8-.9.9,0,.2-.9,1.9-3.1,4.8-2.3,3.1-3.6,5.5-3.5,6.6.2,1.2-.6,3.4-.6,3.5,0,0,0,0-.1.1,0,0-.1,0-.2,0,0,0-1-.8-2.3-1.6-1.3-.8-3.1-1.8-4.9-2.3-3.4-.9-8.4-1.2-8.5-1.2,0,0,0,0,0,0ZM828.5,229.8c0,0-.2,0-.3,0-.1,0-.2.1-.3.2-.2.1-.4.3-.9.3-.5,0-1.2,1-1.3,1.5-.1.6-.6,1.8-1.5,2.7-.6.6-.6,1.2-.5,1.9,0,.3,0,.6,0,.9-.1,1.1-1.4,7.2-1.5,7.4,0,0,0,0,0,0l-1.5,3.6s0,0,0,0l-2.8,5.4c1.1,0,5.3.4,8.2,1.2,3,.8,6.3,3.1,7.2,3.8.2-.6.7-2.2.5-3-.2-1.6,2.1-5,3.5-6.9,2.3-3,3-4.7,3-4.8,0,0,0,0,0,0,0,0,.5-.6,1.1-1,.2-.1.5-.4.8-.7.5-.5,1-1.1,1.5-1.3.4-.1.6-.3.7-.5,0,0,0-.2,0-.3,0,0-.1-.2-.2-.3-.3-.4-.8-1-.9-1.8-.2-1-.2-1.3-.7-1.5-.5-.2-.6-.4-.7-.7,0-.1-.1-.2-.2-.4-.2-.3-1.2-.3-1.8-.3-.2,0-.5,0-.6,0-.5,0-.6,0-.9-.3,0,0-.2-.2-.4-.3-.6-.5-3.7-2.1-4.6-2.1-.6,0-1,.2-1.2.3,0,0,0,0,0,0,0,0-.2,0-.3,0,0,0,0,0,0-.1,0,0,0-.1,0-.2,0-.1-.1-.3-.4-.7-.4-.6-1-.8-1.5-.9-.4-.1-.8-.3-.8-.6,0-.2-.2-.4-.4-.5,0,0,0,0,0,0Z" fill="#fff"/>
                    <path d="M828.4,229.4c-.1,0-.2,0-.3,0-.2,0-.3.2-.4.2-.2.1-.3.2-.7.2-.4,0-.9.4-1.1.7-.3.4-.6.8-.6,1.1-.1.5-.6,1.7-1.4,2.6-.7.7-.7,1.4-.6,2.1,0,.3,0,.6,0,.9-.1,1-1.4,7-1.5,7.4l-1.4,3.6-2.9,5.6c0,0,0,.1,0,.2,0,0,0,0,.1,0,0,0,0,0,0,0,0,0,5.1.3,8.5,1.2,1.8.4,3.6,1.5,4.9,2.3,1.4.9,2.3,1.6,2.3,1.6,0,0,0,0,.1,0s0,0,0,0c0,0,.1,0,.1-.1,0,0,.8-2.3.6-3.5-.1-1.1,1.1-3.5,3.5-6.6,2.2-2.9,3-4.6,3.1-4.8,0,0,.5-.6.9-.9.3-.2.5-.5.9-.8.4-.5,1-1,1.4-1.2.5-.2.8-.4.9-.7,0-.2,0-.4,0-.7,0-.1-.2-.2-.3-.4-.3-.4-.7-.9-.8-1.7-.1-1-.2-1.5-.9-1.8-.3-.1-.4-.3-.5-.5,0-.1-.1-.3-.3-.5-.3-.4-1.1-.4-2.1-.4-.2,0-.4,0-.6,0q-.4,0-.6-.2c0,0-.2-.2-.4-.4-.7-.6-3.9-2.2-4.9-2.2,0,0,0,0,0,0-.6,0-1,.2-1.2.3,0-.2-.2-.4-.4-.6-.5-.7-1.2-.9-1.7-1.1-.3,0-.6-.2-.6-.3,0-.3-.3-.6-.6-.7-.1,0-.2,0-.3,0h0ZM833.3,258.7c-.9-.6-4.1-3-7.2-3.8-3-.8-7.1-1.1-8.2-1.2l2.8-5.4s0,0,0,0l1.5-3.6s0,0,0,0c0-.3,1.4-6.4,1.5-7.4,0-.3,0-.6,0-.9,0-.7,0-1.3.5-1.9.9-.9,1.4-2.2,1.5-2.7.1-.5.9-1.5,1.3-1.5.5,0,.7-.2.9-.3,0,0,.2-.1.3-.2,0,0,.1,0,.2,0s0,0,.1,0c0,0,0,0,0,0,.2,0,.3.3.4.5,0,.3.4.4.8.6.5.2,1.1.4,1.5.9.2.4.3.5.4.7,0,0,0,.1,0,.2,0,0,0,.1,0,.1,0,0,0,0,.1,0,0,0,.1,0,.2,0,0,0,0,0,0,0,.2-.1.6-.3,1.2-.3,0,0,0,0,0,0,.9,0,4,1.5,4.6,2.1.2.2.3.3.4.3.3.3.3.3.9.3.2,0,.4,0,.6,0,.6,0,1.6,0,1.8.3.1.1.2.3.2.4.1.2.2.5.7.7.5.2.6.5.7,1.5.1.8.6,1.4.9,1.8.1.1.2.2.2.3.1.2,0,.3,0,.3,0,.2-.3.3-.7.5-.5.2-1.1.8-1.5,1.3-.3.3-.6.6-.8.7-.6.4-1,.9-1.1,1,0,0,0,0,0,0,0,0-.7,1.7-3,4.8-1.4,1.9-3.7,5.2-3.5,6.9.1.9-.3,2.4-.5,3h0Z" fill="#9b978f"/>
                  </g>
                </g>
                <g>
                  <path d="M838.2,240.5c0,0-.1,0-.1-.2-.1-.8,0-1.8.2-3,.2-.9.4-1.6.4-1.6,0,0,.1-.1.2-.1,0,0,.2.1.1.2-.1,1.1.6,2.2.6,2.2,0,0,0,.2,0,.3,0,0-.2,0-.3,0,0,0-.4-.6-.6-1.3-.2.9-.5,2.3-.3,3.4,0,.1,0,.2-.2.2,0,0,0,0,0,0Z" fill="#fff"/>
                  <path d="M838.8,235.6c0,0-.2,0-.2.1,0,0-.2.7-.4,1.6-.2,1.2-.3,2.2-.2,3,0,0,0,.1.1.2,0,0,0,0,0,0s0,0,0,0c.1,0,.2-.1.2-.2-.2-1.1,0-2.5.3-3.4.2.7.5,1.3.6,1.3,0,0,0,0,.2,0s0,0,.1,0c0,0,.1-.2,0-.3,0,0-.7-1.1-.6-2.2,0,0,0-.2-.1-.2,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M841,242.5s0,0,0,0c0,0-.1-.1-.1-.2,1.1-2.8.8-5.7.8-5.7,0-.1,0-.2.2-.2.1,0,.2,0,.2.2,0,.1.4,2.9-.8,5.9,0,0-.1.1-.2.1Z" fill="#fff"/>
                  <path d="M841.9,236.3s0,0,0,0c-.1,0-.2.1-.2.2,0,0,.4,2.8-.8,5.7,0,0,0,.2.1.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.1,0,.2-.1,1.2-2.9.8-5.8.8-5.9,0,0,0-.2-.2-.2h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M831.3,238.4s0,0,0,0c0,0-.1-.2,0-.2,0,0,.7-1.5.2-3.2-.2-.8-.2-1.4,0-1.9.1-.4.3-.6.3-.6,0,0,.2,0,.3,0,0,0,0,.2,0,.3,0,0-.6.5-.1,2.1.5,1.8-.2,3.4-.2,3.5,0,0-.1.1-.2,0Z" fill="#fff"/>
                  <path d="M831.8,232.4s0,0-.1,0c0,0-.2.2-.3.6-.2.5-.1,1.2,0,1.9.5,1.7-.2,3.2-.2,3.2,0,0,0,.2,0,.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.1,0,.2-.1,0,0,.7-1.6.2-3.5-.4-1.6.1-2.1.1-2.1,0,0,0-.2,0-.3,0,0,0,0-.1,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M829.1,247.7c0,0-.1,0-.2,0-2.1-.8-2.6-3.2-2.7-3.3,0-.1,0-.2.1-.2.1,0,.2,0,.2.1,0,0,.5,2.4,2.4,3,2,.7,3.9,1,3.9,1,.1,0,.2.1.2.2,0,.1-.1.2-.2.2,0,0-1.8-.3-3.8-.9Z" fill="#fff"/>
                  <path d="M826.4,244.1s0,0,0,0c-.1,0-.2.1-.1.2,0,.1.5,2.6,2.7,3.3,0,0,.1,0,.2,0,2,.7,3.8.9,3.8.9,0,0,0,0,0,0,0,0,.2,0,.2-.2,0-.1,0-.2-.2-.2,0,0-1.9-.3-3.9-1-1.9-.7-2.4-3-2.4-3,0,0,0-.1-.2-.1h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M829.5,254.7c-.9-.3-1.8-.7-2.3-1.1-1.2-1-3.5-1.8-3.5-1.8,0,0,0,0,0,0,0,0-.1-.1-.1-.2,0,0,.1-.2.2-.1,0,0,2.3.8,3.6,1.9,1.2,1,5.3,1.9,5.4,1.9.1,0,.2.1.1.2,0,.1-.1.2-.2.1-.1,0-1.7-.4-3.3-.9Z" fill="#fff"/>
                  <path d="M823.8,251.4c0,0-.2,0-.2.1,0,0,0,.2.1.2,0,0,0,0,0,0,0,0,2.3.8,3.5,1.8.5.4,1.4.8,2.3,1.1,1.5.5,3.2.9,3.3.9,0,0,0,0,0,0,0,0,.2,0,.2-.1,0-.1,0-.2-.1-.2,0,0-4.1-.9-5.4-1.9-1.3-1.1-3.5-1.8-3.6-1.9,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M824,251.2s0,0,0,0l-2.3-1.2c0,0-.1-.2,0-.3,0,0,.2-.1.3,0l2.3,1.2c0,0,.1.2,0,.3,0,0-.1.1-.2,0Z" fill="#fff"/>
                  <path d="M821.8,249.6c0,0-.1,0-.2,0,0,0,0,.2,0,.3l2.3,1.2s0,0,0,0c0,0,0,0,0,0,0,0,.1,0,.2,0,0,0,0-.2,0-.3l-2.3-1.2s0,0,0,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M829,273.9s0,0,0,0c-4.5-1.6-5.1-4.2-5.2-4.3,0,0,0-.2.1-.2,0,0,.2,0,.2.1,0,0,.7,2.5,4.9,4.1,0,0,.1.1.1.2,0,0-.1.1-.2.1Z" fill="#fff"/>
                  <path d="M824,269.3s0,0,0,0c0,0-.2.1-.1.2,0,.1.7,2.7,5.2,4.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.1,0,.2-.1,0,0,0-.2-.1-.2-4.2-1.6-4.9-4-4.9-4.1,0,0,0-.1-.2-.1h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M810.7,270.5s0,0,0,0c0,0,0-.2,0-.3,0,0,1.6-1.2,3.2-1,.1,0,.2.1.2.2,0,.1-.1.2-.2.2-1.5-.2-3,.9-3,.9,0,0-.1,0-.2,0Z" fill="#fff"/>
                  <path d="M813.5,269.2c-1.5,0-2.8,1-2.9,1,0,0,0,.2,0,.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.1,0,0,0,1.3-1,2.6-1s.2,0,.3,0c0,0,0,0,0,0,0,0,.2,0,.2-.2,0-.1,0-.2-.2-.2-.1,0-.3,0-.4,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M829,276.7c0,0-.1,0-.1-.2,0,0-.1-.9-1-1.4,0,0-.1-.2,0-.3,0,0,.2-.1.3,0,1,.6,1.1,1.6,1.1,1.7,0,.1,0,.2-.2.2,0,0,0,0,0,0Z" fill="#fff"/>
                  <path d="M828,274.8c0,0-.1,0-.2,0,0,0,0,.2,0,.3.8.5,1,1.3,1,1.4,0,0,0,.1.1.2,0,0,0,0,0,0s0,0,0,0c.1,0,.2-.1.2-.2,0,0-.1-1.1-1.1-1.7,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M836.8,231.5s0,0,0,0c0,0,0,0,0-.1,0-.3-.1-.4-.4-.7-.4-.3-.9-.8-1.5-2-1.1-2.1-.1-3.9,0-4,0,0,.2-.1.3,0,0,0,.1.2,0,.3,0,0-.9,1.7,0,3.6.6,1.1,1.1,1.5,1.4,1.9.2.2.4.4.5.7.3,0,1.1-.3,1.9-.2,1,0,2.6-.7,3.6-2.5,0,0,.2-.1.3,0,0,0,.1.2,0,.3-.9,1.7-2.6,2.8-3.9,2.7-1.1,0-2,.2-2,.2,0,0,0,0-.1,0Z" fill="#fff"/>
                  <path d="M834.8,224.6c0,0-.1,0-.2,0,0,0-1,1.9,0,4,.6,1.1,1.1,1.6,1.5,2,.3.3.4.4.4.7,0,0,0,.1,0,.1,0,0,0,0,0,0,0,0,0,0,0,0s0,0,0,0c0,0,.7-.2,1.7-.2s.2,0,.3,0c0,0,.1,0,.2,0,1.3,0,2.9-1.1,3.8-2.7,0,0,0-.2,0-.3,0,0,0,0,0,0,0,0-.1,0-.2,0-1,1.7-2.4,2.5-3.4,2.5s0,0-.1,0c-.1,0-.3,0-.4,0-.7,0-1.3.1-1.6.2,0-.3-.3-.4-.5-.7-.4-.3-.8-.8-1.4-1.9-1-1.9,0-3.6,0-3.6,0,0,0-.2,0-.3,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
                <g>
                  <path d="M823.2,265.2s0,0,0,0c0,0-.1-.2,0-.3,3.4-6.3,3.7-9.6,3.7-9.6,0-.1,0-.2.2-.2.1,0,.2,0,.2.2,0,.1-.2,3.4-3.7,9.8,0,0-.1.1-.2,0Z" fill="#fff"/>
                  <path d="M826.9,255.1c0,0-.2,0-.2.2,0,0-.2,3.3-3.7,9.6,0,0,0,.2,0,.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.1,0,.2,0,3.5-6.4,3.7-9.6,3.7-9.8,0-.1,0-.2-.2-.2,0,0,0,0,0,0h0Z" fill="#9b978f"/>
                </g>
              </g>
            </g>
            <g id="arrow">
              <path d="M720.6,494.4v6.6l2.6-6.6h-2.6M720.6,500.9v-6.6h-2.6l2.6,6.6Z" fill="#425563"/>
              <line x1="720.6" y1="494.4" x2="720.6" y2="462.4" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
            </g>
            <g id="Room_Names">
              <text transform="translate(712.86 457.69)" fill="#3e5665" font-family="fredoka, sans-serif" font-size="9"><tspan x="0" y="0">Up</tspan></text>
              <text transform="translate(349.27 267.7)" fill="#3e5665" font-family="fredoka, sans-serif" font-size="14"><tspan x="0" y="0">Recreation Room</tspan></text>
              <text transform="translate(320.78 603.86)" fill="#3e5665" font-family="fredoka, sans-serif" font-size="14"><tspan x="0" y="0">Flex Room</tspan></text>
              <text transform="translate(509.3 570.71)" fill="#3e5665" font-family="fredoka, sans-serif" font-size="14"><tspan x="0" y="0">Mechanical/Storage</tspan></text>
              <text transform="translate(756.19 885.11)" fill="#3e5665" font-family="fredoka, sans-serif" font-size="14"><tspan x="0" y="0">Unexcavated</tspan></text>
              <text transform="translate(343.95 1063.69)" fill="#3e5665" font-family="fredoka, sans-serif" font-size="14"><tspan x="0" y="0">Unexcavated</tspan></text>
              <text transform="translate(790.12 333.52)" fill="#3e5665" font-family="fredoka, sans-serif" font-size="14"><tspan x="0" y="0">Bedroom 4</tspan></text>
              <text transform="translate(837.08 419.01)" fill="#3e5665" font-family="fredoka, sans-serif" font-size="9"><tspan x="0" y="0">Walk-in</tspan><tspan x="0" y="10.8">Closet</tspan></text>
              <text transform="translate(795.54 615.81)" fill="#3e5665" font-family="fredoka, sans-serif" font-size="14"><tspan x="0" y="0">Storage</tspan></text>
              <text transform="translate(804.62 511.65)" fill="#3e5665" font-family="fredoka, sans-serif" font-size="14"><tspan x="0" y="0">Basement Bath</tspan></text>
            </g>
          </g>

          <g id="slidingGlass" data-option="slidingGlass" style={{ display: active.slidingGlass ? "block" : "none" }} fill="#CC0001">
          </g>
      </g>
    </g>
  </svg>

  );
}



// ❗ if you have a placeholder, TYPE IT so it matches Floor['SVG']
export const EmptySVG: React.FC<SVGProps> = () => null;
export const danielD237: Plan = {
    code: "danield237",
    title: "Meet the Daniel",
    description:
      `Life evolves—and so does the way you live. 
      This thoughtfully designed home offers ample storage, 
      spaces for shared moments, and plenty of private corners 
      to relax, reflect, and recharge. Whether you’re enjoying 
      quiet mornings, lively family gatherings, or a peaceful 
      evening retreat, calm meets connection here. This is 
      more than a house—this is home.`,
    floors: [
        { 
          id: "main", 
          name: "Main Floor", 
          SVG:DanielD237mainSVG, 
          options: [
            { key: "optionalPowder", label: "Optional Powder Bath + Gourmet Kitchen" },
            { key: "masterBathTwo", label: "Deluxe Master Bath Two" },
            { key: "extendedBed", label: "Extended Bedroom 2" },
            { key: "slidingGlass", label: "Multi-slide Door at Great Room" },
          ]
        },
        { 
          id: "basement", 
          name: "Basement", 
          SVG:DanielD237basementSVG, 
          options: [
            // { key: "optionalBar", label: "Optional Bar" },
          ]
        },
    ],
};
