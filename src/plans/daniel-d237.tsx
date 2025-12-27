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
            <g id="furniture1" data-name="furniture">
              <g>
                <g>
                  <path d="M387.9,1022.2l-.5,5.1-71.8-.7c-7.3,0-16.7,4.9-20.8,10.9-4.2,6.2-7.6,14.6-7.6,27.3s3,21.3,8,29.4c3,4.9,10.2,8.9,16,8.9l76.2-.7.5,5.5c.3,2.9,3,5.1,5.9,4.7v-.6l-1-9.6,62.9-.5c9.9,0,18.7-4.9,21.9-14.2l1.1-3.1c4.5-12.8,4.5-26.8,0-39.6h0c-3.9-11.1-14.4-17.2-26.3-17.2l-59.6-.6,1-9.3v-.6c-2.9-.3-5.6,1.8-5.9,4.7Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M482.4,1065c0,6.7-1.1,13.5-3.4,19.9l-1.1,3.1c-3.1,8.9-11.6,14.4-22.2,14.4l-62.6.5,1,9.3v.7c0,.2-.1.3-.3.3-3.1.3-5.9-1.9-6.2-5l-.5-5.2-75.9.7c-5.9,0-13.1-4-16.2-9-5.1-8.2-8.1-15.7-8.1-29.6s2.5-19.9,7.7-27.5c4.1-6.1,13.6-11.1,21-11.1l71.5.7.5-4.9s0,0,0,0c.3-3.1,3.1-5.3,6.2-5,.2,0,.3.1.3.3v.6l-1,9,59.3.5c12.6,0,22.8,6.7,26.6,17.4,2.2,6.4,3.4,13.2,3.4,19.9ZM392.5,1102.5c0,0,0-.1,0-.2,0,0,.1-.1.2-.1l62.9-.6c10.4,0,18.7-5.4,21.7-14l1.1-3.1c4.4-12.7,4.4-26.7,0-39.4-3.7-10.5-13.6-17-26-17l-59.6-.6c0,0-.2,0-.2-.1,0,0,0-.2,0-.2l1-9.3v-.3c-2.7-.1-5,1.8-5.3,4.5l-.5,5.1c0,.2-.1.3-.3.3l-71.8-.7c-7.3,0-16.5,4.8-20.5,10.8-5.1,7.5-7.6,16.4-7.6,27.2s2.9,21.1,8,29.3c3,4.8,10,8.7,15.7,8.7l76.2-.7c.2,0,.3.1.3.3l.5,5.5c.1,1.3.8,2.5,1.9,3.4,1,.8,2.2,1.2,3.4,1.1v-.4l-1-9.6s0,0,0,0Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
                <g>
                  <path d="M382.8,1044.2c-4.7,14.3-4.7,27.3,0,41.6-3,1.2-6.5,2.9-9,4.8-5.4-16.6-5.4-34.7,0-51.2,3,2,5.5,3.2,9,4.8Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M383.1,1085.7c0,.1,0,.2-.2.3-3.6,1.4-6.8,3.2-8.9,4.8,0,0-.2,0-.3,0,0,0-.2-.1-.2-.2-5.4-16.6-5.4-34.9,0-51.4,0,0,0-.2.2-.2,0,0,.2,0,.3,0,3.1,2,5.6,3.3,9,4.8.1,0,.2.2.2.4-4.6,14.1-4.6,27.3,0,41.4,0,0,0,0,0,0ZM379.1,1065c0-6.8,1.1-13.6,3.4-20.6-3.1-1.4-5.6-2.7-8.5-4.5-5.2,16.2-5.2,34,0,50.3,2.8-2.1,6.4-3.7,8.5-4.5-2.3-7-3.4-13.8-3.4-20.6Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
                <g>
                  <path d="M434.6,1085.7c4.6-16.7,3.5-26.6,0-41.6,5.3-1.2,9.7-2.9,14.1-4.8,9.6,16.6,9.6,34.7,0,51.2-5.3-2-7.9-3.2-14.1-4.8Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M456.2,1065c0,8.7-2.4,17.5-7.2,25.8,0,.1-.2.2-.4.1-1.4-.5-2.7-1-3.8-1.5-3.2-1.2-5.7-2.2-10.2-3.4,0,0-.1,0-.2-.1,0,0,0-.2,0-.2,4.5-16.4,3.6-26,0-41.4,0,0,0-.2,0-.2,0,0,.1-.1.2-.1,5.1-1.1,9.3-2.8,14-4.8.1,0,.3,0,.4.1,4.8,8.3,7.2,17,7.2,25.8ZM448.6,1090.2c9.3-16.3,9.3-34.2,0-50.5-4.6,2-8.7,3.6-13.6,4.7,3.5,14.9,4.4,25,0,41.1,4.4,1.1,6.9,2.1,10,3.3,1.1.4,2.2.9,3.6,1.4Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
                <g>
                  <g>
                    <path d="M388.7,1035.7h-13.8l10.4,5.4s1.3,0,3.4,0v-5.5Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M389,1035.7v5.5c0,0,0,.2,0,.2,0,0-.1,0-.2,0-2.1,0-3.4,0-3.4,0,0,0,0,0-.1,0l-10.4-5.4c-.1,0-.2-.2-.2-.3,0-.1.2-.2.3-.2h13.8c.2,0,.3.1.3.3ZM388.4,1040.9v-4.9h-12.3l9.2,4.8c.3,0,1.4,0,3,0Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  </g>
                  <g>
                    <path d="M391.2,1035.7v5.5c6.9,0,20.6,0,32.7-1.9v-3.7h-32.7Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M424.2,1035.7v3.7c0,.2-.1.3-.3.3-12.2,1.8-25.8,2-32.8,1.9-.2,0-.3-.1-.3-.3v-5.5c0-.2.1-.3.3-.3h32.7c.2,0,.3.1.3.3ZM423.6,1039.2v-3.1h-32.1v4.9c7,0,20.2,0,32.1-1.8Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  </g>
                  <g>
                    <path d="M426.4,1039.2c5-.8,9.8-1.9,13.7-3.5h-13.7v3.5Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M440.3,1035.7c0,.1,0,.2-.2.3-3.6,1.4-8.2,2.6-13.7,3.5,0,0-.2,0-.2,0,0,0-.1-.1-.1-.2v-3.5c0-.2.1-.3.3-.3h13.7c.1,0,.3.1.3.2,0,0,0,0,0,0ZM426.7,1038.9c4.6-.8,8.5-1.7,11.7-2.8h-11.7v2.8Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M388.7,1093.8h-13.8l10.4-5.4s1.3,0,3.4,0v5.5Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M389,1088.2v5.5c0,.2-.1.3-.3.3h-13.8c-.1,0-.3,0-.3-.2,0-.1,0-.3.2-.3l10.4-5.4s0,0,.1,0c0,0,1.3,0,3.4,0,0,0,.2,0,.2,0,0,0,0,.1,0,.2ZM388.4,1093.4v-4.9c-1.7,0-2.8,0-3,0l-9.2,4.8h12.3Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  </g>
                  <g>
                    <path d="M391.2,1093.8v-5.5c6.9,0,20.6,0,32.7,1.9v3.7h-32.7Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M424.2,1090.1v3.7c0,.2-.1.3-.3.3h-32.7c-.2,0-.3-.1-.3-.3v-5.5c0-.2.1-.3.3-.3,7,0,20.6,0,32.8,1.9.1,0,.3.2.3.3ZM423.6,1093.4v-3.1c-11.9-1.8-25.1-1.9-32.1-1.8v4.9h32.1Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  </g>
                  <g>
                    <path d="M426.4,1090.3c5,.8,9.8,1.9,13.7,3.5h-13.7v-3.5Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M440.3,1093.8s0,0,0,0c0,.1-.2.2-.3.2h-13.7c-.2,0-.3-.1-.3-.3v-3.5c0,0,0-.2.1-.2,0,0,.2,0,.2,0,5.5.9,10.1,2.1,13.7,3.5.1,0,.2.2.2.3ZM426.7,1093.4h11.7c-3.2-1.1-7.1-2.1-11.7-2.8v2.8Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  </g>
                </g>
                <g>
                  <path d="M300.3,1048.8c-3.9,10.7-3.9,22.4,0,33.1-2,.7-4,1.4-6,2.2-4.4-12.1-4.4-25.4,0-37.5,2,.7,4,1.4,6,2.2Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M300.6,1081.9c0,.1,0,.2-.2.3l-6,2.2c0,0-.2,0-.2,0,0,0-.1,0-.2-.2-4.4-12.2-4.4-25.5,0-37.7,0-.2.2-.2.4-.2l6,2.2c0,0,.1,0,.2.2,0,0,0,.2,0,.2-3.8,10.6-3.8,22.3,0,32.9,0,0,0,0,0,.1ZM294.5,1083.7l5.5-2c-3.7-10.6-3.7-22.2,0-32.8l-5.5-2c-4.2,11.8-4.2,24.8,0,36.7Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
                <g>
                  <path d="M310.4,1035.6c-3.4,1.9-6.5,5.3-8.3,9.8-.2.5-.6.8-1.1.6-1-.3-2-.8-3-1.2-1.2-.5-1.8-3.3-1-4.5,2.7-4.5,6.5-7.7,10.5-9.4.5-.2.9,0,1.3.3.6.7,1.3,1.4,2,2,.8.7.7,2-.3,2.5Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M311.5,1034.3c0,0,0,.1,0,.2,0,.6-.4,1.1-.9,1.4,0,0,0,0,0,0-3.6,2-6.5,5.4-8.2,9.6-.3.7-.9,1-1.5.8-1-.4-2-.8-3-1.3-.6-.3-1.1-1-1.4-1.9-.3-1.1-.3-2.3.2-3,2.6-4.3,6.4-7.7,10.6-9.5.6-.2,1.2-.1,1.6.4.6.7,1.3,1.3,2,1.9.4.4.6.9.6,1.4ZM310.3,1035.3c.4-.2.6-.5.6-.9,0-.4-.1-.8-.4-1.1-.7-.6-1.4-1.3-2-2-.2-.3-.6-.3-.9-.2-4.1,1.7-7.8,5-10.3,9.3-.4.6-.4,1.6-.1,2.5.2.8.6,1.3,1,1.5,1,.5,2,.9,3,1.2.4.1.6-.2.8-.4,1.8-4.4,4.7-7.9,8.4-9.9Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
                <g>
                  <path d="M310.4,1095c-3.4-1.9-6.5-5.3-8.3-9.8-.2-.5-.6-.8-1.1-.6-1,.3-2,.8-3,1.2-1.2.5-1.8,3.3-1,4.5,2.7,4.5,6.5,7.7,10.5,9.4.5.2.9,0,1.3-.3.6-.7,1.3-1.4,2-2,.8-.7.7-2-.3-2.5Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M311.5,1096.3c0,.5-.2,1-.6,1.4-.7.6-1.4,1.2-2,1.9-.4.5-1,.6-1.6.4-4.2-1.8-8-5.2-10.6-9.5-.4-.7-.5-1.9-.2-3,.3-.9.8-1.6,1.4-1.9,1-.5,2-.9,3-1.3.6-.2,1.2,0,1.5.8,1.7,4.2,4.6,7.6,8.2,9.6,0,0,0,0,0,0,.5.3.9.8.9,1.4,0,0,0,.1,0,.2ZM296.9,1088.9c0,.5.1,1,.3,1.3,2.6,4.2,6.2,7.5,10.3,9.3.3.1.7,0,.9-.2.6-.7,1.3-1.4,2-2,.3-.3.5-.6.4-1,0-.4-.3-.7-.6-.9-3.7-2.1-6.7-5.6-8.4-9.9-.1-.3-.3-.6-.8-.4-1,.3-2,.8-3,1.2-.4.2-.8.8-1,1.5-.1.4-.2.9-.2,1.3ZM310.4,1095h0s0,0,0,0Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
                <g>
                  <path d="M476.8,1054c2.6,7.1,2.6,14.9,0,22-1.2-.4-2.4-.9-3.5-1.3,2.3-6.3,2.3-13.2,0-19.5,1.2-.4,2.4-.9,3.5-1.3Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M479,1065c0,3.8-.6,7.5-1.9,11.1,0,.2-.2.2-.4.2l-3.5-1.3c0,0-.1,0-.2-.2,0,0,0-.2,0-.2,2.2-6.2,2.2-13,0-19.2,0-.2,0-.3.2-.4l3.5-1.3c0,0,.2,0,.2,0,0,0,.1,0,.2.2,1.3,3.6,1.9,7.3,1.9,11.1ZM476.6,1075.6c2.4-6.9,2.4-14.4,0-21.2l-3,1.1c2.1,6.2,2.1,12.9,0,19.1l3,1.1Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
                <g>
                  <path d="M463.2,1089.4c3-1.7,5.7-4.6,7.3-8.6.2-.5.6-.7,1-.5.9.3,1.8.7,2.7,1.1,1.1.5,1.6,2.9.9,4-2.4,4-5.8,6.8-9.3,8.3-.4.2-.8,0-1.1-.2-.6-.6-1.2-1.2-1.8-1.7-.7-.6-.6-1.7.2-2.2Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M475.8,1084.1c0,.5,0,1-.4,1.4-2.3,3.8-5.7,6.8-9.4,8.4-.5.2-1.1,0-1.5-.3-.5-.6-1.1-1.2-1.7-1.7-.4-.4-.6-.9-.6-1.4,0-.5.4-1,.8-1.3,0,0,0,0,0,0,3.1-1.8,5.7-4.8,7.2-8.5.3-.6.8-.9,1.4-.7.9.3,1.8.7,2.7,1.1.5.2,1,.9,1.2,1.7.1.4.2.8.2,1.3ZM462.8,1090.6c0,.3.1.6.4.8.6.5,1.2,1.1,1.8,1.8.2.2.5.3.8.2,3.6-1.5,6.9-4.4,9.1-8.2.3-.5.4-1.4.1-2.2-.2-.7-.5-1.2-.9-1.3-.9-.4-1.7-.8-2.6-1.1-.3,0-.5,0-.6.4-1.6,3.9-4.2,7-7.5,8.8-.3.2-.5.5-.5.8,0,0,0,0,0,.1Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
                <g>
                  <path d="M463.2,1040.6c3,1.7,5.7,4.6,7.3,8.6.2.5.6.7,1,.5.9-.3,1.8-.7,2.7-1.1,1.1-.5,1.6-2.9.9-4-2.4-4-5.8-6.8-9.3-8.3-.4-.2-.8,0-1.1.2-.6.6-1.2,1.2-1.8,1.7-.7.6-.6,1.7.2,2.2Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M475.8,1045.9c0,.5,0,.9-.2,1.3-.3.8-.7,1.5-1.2,1.7-.9.4-1.8.8-2.7,1.1-.6.2-1.1,0-1.4-.7-1.5-3.7-4.1-6.7-7.2-8.5,0,0,0,0,0,0-.5-.3-.8-.7-.8-1.3,0-.5.1-1.1.6-1.4.6-.5,1.2-1.1,1.7-1.7.4-.4.9-.5,1.5-.3,3.7,1.6,7.1,4.6,9.4,8.4.3.4.4.9.4,1.4ZM463.4,1040.3c3.3,1.8,5.9,4.9,7.5,8.8.1.3.3.5.6.4.9-.3,1.8-.7,2.6-1.1.4-.2.7-.7.9-1.3.3-.8.2-1.7,0-2.2-2.3-3.7-5.5-6.6-9.1-8.2-.3-.1-.6,0-.8.2-.6.6-1.2,1.2-1.8,1.8-.3.2-.4.6-.4.9,0,.3.2.6.5.8Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M771.3,750.5v141.9c0,5.5-2.9,10.7-7.6,13.5-5.8,3.5-15.8,6.8-32.8,6.8s-26.9-3.4-32.8-6.9c-4.8-2.8-7.7-8-7.7-13.6v-141.6c0-2.5.5-5,1.4-7.3.7,0,3.9-.6,8-4.9,4.6-4.9,10.2-4.4,10.2-4.4l-1.7-5.1s-.1,0-.3,0c1.3-.6,2.6-1.2,4.1-1.7l.9,3.9s8.7-2.1,18.1-2.2c9.4.1,18.1,2.2,18.1,2.2l1-4.1c1.7.7,3.3,1.4,4.8,2.1-1.1-.2-1.8-.2-1.8-.2l-1.7,5.1s5.6-.5,10.2,4.4c4.6,4.9,8.1,4.9,8.4,5.1,1.1,2.5,1.2,4.2,1.2,6.9Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M730.8,913c-14.1,0-25.2-2.3-32.9-6.9-4.8-2.9-7.8-8.2-7.8-13.9v-141.6c0-2.5.5-5,1.4-7.4,0-.1.1-.2.3-.2.6,0,3.7-.5,7.8-4.8,4-4.2,8.6-4.6,10-4.6l-1.5-4.5h-.1c-.1,0-.3,0-.3-.2s0-.3.2-.4c1.3-.6,2.7-1.2,4.1-1.7,0,0,.2,0,.2,0,0,0,.1.1.2.2l.9,3.6c1.6-.4,9.5-2,17.9-2.2,8.3.1,16.3,1.8,17.9,2.2l.9-3.8c0,0,0-.2.2-.2,0,0,.2,0,.3,0,1.6.6,3.3,1.3,4.8,2.2.1,0,.2.2.2.4,0,.1-.2.2-.3.2-.7,0-1.2-.1-1.5-.2l-1.5,4.5c1.5,0,6.1.3,10,4.6,3.9,4.2,7,4.8,8,4.9.2,0,.3,0,.4.1,0,0,.1,0,.1.1,1.1,2.5,1.3,4.3,1.3,7v141.9c0,5.7-3,11-7.8,13.8-7.6,4.5-18.8,6.8-33,6.8ZM691.9,743.6c-.8,2.2-1.3,4.6-1.3,7v141.6c0,5.5,2.9,10.6,7.5,13.3,7.6,4.5,18.6,6.9,32.6,6.9s25.1-2.3,32.7-6.8c4.6-2.7,7.5-7.8,7.5-13.3v-141.9c0-2.6-.2-4.3-1.2-6.7,0,0,0,0-.1,0-1.1-.2-4.3-.8-8.3-5.1-4.5-4.8-9.9-4.3-10-4.3-.1,0-.2,0-.3-.1,0,0,0-.2,0-.3l1.7-5.1c0-.1.2-.2.3-.2,0,0,0,0,.1,0-1-.5-1.9-.9-2.9-1.3l-.9,3.8c0,.2-.2.3-.4.2,0,0-8.8-2.1-18-2.2-9.2.1-17.9,2.2-18,2.2,0,0-.2,0-.2,0,0,0-.1-.1-.1-.2l-.9-3.6c-1.1.4-2.1.8-3.2,1.3l1.7,5c0,0,0,.2,0,.3,0,0-.2.1-.3.1,0,0-5.5-.4-10,4.3-3.9,4.2-7,4.9-8,5Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
                <g>
                  <g>
                    <rect x="749.1" y="806.8" width="3.4" height="74.9" rx="1.7" ry="1.7" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M752,882h-2.2c-.5,0-.9-.4-.9-.9v-73.7c0-.5.4-.9.9-.9h2.2c.5,0,.9.4.9.9v73.7c0,.5-.4.9-.9.9ZM749.7,807.1c-.2,0-.3.1-.3.3v73.7c0,.2.1.3.3.3h2.2c.2,0,.3-.1.3-.3v-73.7c0-.2-.1-.3-.3-.3h-2.2Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  </g>
                  <g>
                    <rect x="741.1" y="806.8" width="3.4" height="74.9" rx="1.7" ry="1.7" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M743.9,882h-2.2c-.5,0-.9-.4-.9-.9v-73.7c0-.5.4-.9.9-.9h2.2c.5,0,.9.4.9.9v73.7c0,.5-.4.9-.9.9ZM741.7,807.1c-.2,0-.3.1-.3.3v73.7c0,.2.1.3.3.3h2.2c.2,0,.3-.1.3-.3v-73.7c0-.2-.1-.3-.3-.3h-2.2Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  </g>
                  <g>
                    <path d="M734.9,806.8h0c.9,0,1.7.8,1.7,1.7v71.5c0,.9-.8,1.7-1.7,1.7h0c-.9,0-1.7-.8-1.7-1.7v-71.5c0-.9.8-1.7,1.7-1.7Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M736,882h-2.2c-.5,0-.9-.4-.9-.9v-73.7c0-.5.4-.9.9-.9h2.2c.5,0,.9.4.9.9v73.7c0,.5-.4.9-.9.9ZM733.8,807.1c-.2,0-.3.1-.3.3v73.7c0,.2.1.3.3.3h2.2c.2,0,.3-.1.3-.3v-73.7c0-.2-.1-.3-.3-.3h-2.2Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  </g>
                  <g>
                    <path d="M726.9,806.8h0c.9,0,1.7.8,1.7,1.7v71.5c0,.9-.8,1.7-1.7,1.7h0c-.9,0-1.7-.8-1.7-1.7v-71.5c0-.9.8-1.7,1.7-1.7Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M728,882h-2.2c-.5,0-.9-.4-.9-.9v-73.7c0-.5.4-.9.9-.9h2.2c.5,0,.9.4.9.9v73.7c0,.5-.4.9-.9.9ZM725.7,807.1c-.2,0-.3.1-.3.3v73.7c0,.2.1.3.3.3h2.2c.2,0,.3-.1.3-.3v-73.7c0-.2-.1-.3-.3-.3h-2.2Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  </g>
                  <g>
                    <path d="M719.1,806.8h0c.9,0,1.7.8,1.7,1.7v71.5c0,.9-.8,1.7-1.7,1.7h0c-.9,0-1.7-.8-1.7-1.7v-71.5c0-.9.8-1.7,1.7-1.7Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M720.2,882h-2.2c-.5,0-.9-.4-.9-.9v-73.7c0-.5.4-.9.9-.9h2.2c.5,0,.9.4.9.9v73.7c0,.5-.4.9-.9.9ZM718,807.1c-.2,0-.3.1-.3.3v73.7c0,.2.1.3.3.3h2.2c.2,0,.3-.1.3-.3v-73.7c0-.2-.1-.3-.3-.3h-2.2Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  </g>
                  <g>
                    <rect x="709.4" y="806.8" width="3.4" height="74.9" rx="1.7" ry="1.7" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M712.2,882h-2.2c-.5,0-.9-.4-.9-.9v-73.7c0-.5.4-.9.9-.9h2.2c.5,0,.9.4.9.9v73.7c0,.5-.4.9-.9.9ZM709.9,807.1c-.2,0-.3.1-.3.3v73.7c0,.2.1.3.3.3h2.2c.2,0,.3-.1.3-.3v-73.7c0-.2-.1-.3-.3-.3h-2.2Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M753.5,799.8c-14.9-4.7-30.8-4.7-45.7,0-1.2.4-2.4-.3-2.8-1.5-2.1-6.1-4.1-12.1-6.2-18.2-.4-1.2.3-2.6,1.5-2.9,19.8-6.3,41-6.3,60.8,0,1.2.4,1.9,1.7,1.5,2.9-2.1,6.1-4.1,12.1-6.2,18.2-.4,1.2-1.7,1.8-2.8,1.5Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M707.1,800.2c-1.1,0-2.1-.7-2.4-1.8l-6.2-18.2c-.2-.7-.2-1.4.1-2,.3-.6.9-1.1,1.5-1.3,20-6.4,41.1-6.4,61,0,.7.2,1.2.7,1.5,1.3.3.6.4,1.4.1,2l-6.2,18.2c-.5,1.3-1.9,2.1-3.2,1.6-14.9-4.7-30.7-4.7-45.6,0-.3,0-.5.1-.8.1ZM730.6,772.8c-10.2,0-20.4,1.6-30.3,4.7-.5.2-.9.5-1.2,1-.2.5-.3,1-.1,1.6l6.2,18.2c.4,1,1.4,1.6,2.5,1.3,15-4.7,30.9-4.7,45.9,0h0c1,.3,2.1-.2,2.5-1.3l6.2-18.2c.2-.5.1-1.1-.1-1.6-.2-.5-.7-.8-1.2-1-9.9-3.2-20.1-4.7-30.3-4.7Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  </g>
                  <g>
                    <path d="M753.5,799.8c-14.9-4.7-30.8-4.7-45.7,0-1.2.4-2.4-.3-2.8-1.5-2.1-6.1-4.1-12.1-6.2-18.2-.4-1.2.3-2.6,1.5-2.9,19.8-6.3,41-6.3,60.8,0,1.2.4,1.9,1.7,1.5,2.9-2.1,6.1-4.1,12.1-6.2,18.2-.4,1.2-1.7,1.8-2.8,1.5Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M707.1,800.2c-1.1,0-2.1-.7-2.4-1.8l-6.2-18.2c-.2-.7-.2-1.4.1-2,.3-.6.9-1.1,1.5-1.3,20-6.4,41.1-6.4,61,0,.7.2,1.2.7,1.5,1.3.3.6.4,1.4.1,2l-6.2,18.2c-.5,1.3-1.9,2.1-3.2,1.6-14.9-4.7-30.7-4.7-45.6,0-.3,0-.5.1-.8.1ZM730.6,772.8c-10.2,0-20.4,1.6-30.3,4.7-.5.2-.9.5-1.2,1-.2.5-.3,1-.1,1.6l6.2,18.2c.4,1,1.4,1.6,2.5,1.3,15-4.7,30.9-4.7,45.9,0h0c1,.3,2.1-.2,2.5-1.3l6.2-18.2c.2-.5.1-1.1-.1-1.6-.2-.5-.7-.8-1.2-1-9.9-3.2-20.1-4.7-30.3-4.7Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M758.4,802.8l4.1-9.2c0-.2.3-.3.5-.3h1.2c.3,0,.6.3.6.6v23.6c0,.3-.3.6-.6.6h-5.2c-.3,0-.6-.3-.6-.6v-14.3c0,0,0-.2,0-.2Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M764.2,818.3h-5.2c-.5,0-.9-.4-.9-.9v-14.3c0-.1,0-.2,0-.4l4.1-9.2c.1-.3.4-.5.8-.5h1.2c.5,0,.9.4.9.9v23.6c0,.5-.4.9-.9.9ZM758.7,802.9h0s0,0,0,.1v14.3c0,.2.1.3.3.3h5.2c.2,0,.3-.1.3-.3v-23.6c0-.1-.1-.3-.3-.3h-1.2c-.1,0-.2,0-.2.2l-4.1,9.2Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  </g>
                  <g>
                    <path d="M758.4,846.4l5.1,9.2c0,.2.3.3.5.3h.2c.3,0,.6-.3.6-.6v-33.2c0-.3-.3-.6-.6-.6h-5.2c-.3,0-.6.3-.6.6v24c0,0,0,.2,0,.2Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M764.2,856.3h-.2c-.3,0-.7-.2-.8-.5l-5.1-9.2c0-.1,0-.2,0-.4v-24c0-.5.4-.9.9-.9h5.2c.5,0,.9.4.9.9v33.2c0,.5-.4.9-.9.9ZM758.7,846.3l5.1,9.2c0,.1.1.2.2.2h.2c.1,0,.3-.1.3-.3v-33.2c0-.2-.1-.3-.3-.3h-5.2c-.2,0-.3.1-.3.3v24s0,0,0,.1Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  </g>
                  <g>
                    <path d="M758.3,855.4c0-.2.2-.2.3,0,1.3,2.3,6.1,10.3,6.1,10.5v22.2c0,.4-.5.5-.7.2-1.7-2.3-5.7-7.9-5.7-8.1,0,0,0-20.9,0-24.8Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M764.4,888.8c-.2,0-.4-.1-.6-.3,0,0-5.8-7.8-5.8-8.3,0-.2,0-20.9,0-24.8,0-.2.1-.4.4-.5.2,0,.4,0,.5.2.6,1.2,2.2,3.8,3.6,6.2,2.5,4.3,2.5,4.3,2.5,4.5v22.2c0,.3-.2.6-.5.7,0,0-.1,0-.2,0ZM758.6,880.1c.3.6,3.7,5.4,5.7,8,0,0,0,0,0,0,0,0,0,0,0,0v-22.2c-.2-.3-1.3-2.3-2.5-4.2-1.2-2.1-2.6-4.4-3.4-5.7,0,4.8,0,23,0,24.2ZM758.6,855.4h0s0,0,0,0Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M702.9,802.8l-4.1-9.2c0-.2-.3-.3-.5-.3h-1.2c-.3,0-.6.3-.6.6v23.6c0,.3.3.6.6.6h5.2c.3,0,.6-.3.6-.6v-14.3c0,0,0-.2,0-.2Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M702.4,818.3h-5.2c-.5,0-.9-.4-.9-.9v-23.6c0-.5.4-.9.9-.9h1.2c.3,0,.7.2.8.5l4.1,9.2c0,.1,0,.2,0,.4v14.3c0,.5-.4.9-.9.9ZM697.1,793.6c-.1,0-.3.1-.3.3v23.6c0,.2.1.3.3.3h5.2c.2,0,.3-.1.3-.3v-14.3s0,0,0-.1l-4.1-9.2c0,0-.1-.2-.2-.2h-1.2Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  </g>
                  <g>
                    <path d="M702.9,846.4l-5.1,9.2c0,.2-.3.3-.5.3h-.2c-.3,0-.6-.3-.6-.6v-33.2c0-.3.3-.6.6-.6h5.2c.3,0,.6.3.6.6v24c0,0,0,.2,0,.2Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M697.3,856.3h-.2c-.5,0-.9-.4-.9-.9v-33.2c0-.5.4-.9.9-.9h5.2c.5,0,.9.4.9.9v24c0,.1,0,.2,0,.4h0s-5.1,9.3-5.1,9.3c-.1.3-.4.5-.8.5ZM697.2,821.9c-.2,0-.3.1-.3.3v33.2c0,.1.1.3.3.3h.2c.1,0,.2,0,.2-.2l5.2-9.2s0,0,0-.1v-24c0-.2-.1-.3-.3-.3h-5.2Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  </g>
                  <g>
                    <path d="M703,855.4c0-.2-.2-.2-.3,0-1.3,2.3-6.1,10.3-6.1,10.5v22.2c0,.4.5.5.7.2,1.7-2.3,5.7-7.9,5.7-8.1,0,0,0-20.9,0-24.8Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M697,888.8c0,0-.1,0-.2,0-.3,0-.5-.4-.5-.7v-22.2c0-.2,0-.2,2.5-4.4,1.4-2.3,3-5,3.6-6.2.1-.2.3-.3.5-.2.2,0,.4.2.4.5h0c0,3.9,0,24.6,0,24.8,0,.4-5.7,8.2-5.8,8.3-.1.2-.3.3-.6.3ZM696.9,865.9v22.2c0,0,0,0,0,0,0,0,0,0,0,0,1.9-2.6,5.3-7.4,5.7-8,0-1.2,0-19.4,0-24.2-.8,1.3-2.1,3.7-3.4,5.7-1.1,1.9-2.3,3.8-2.5,4.2Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M758.5,900.8c-18.3,4.7-37.4,4.7-55.7,0,1.3-5,2.6-10,3.8-15,15.8,4.1,32.3,4.1,48.1,0,1.3,5,2.6,10,3.8,15Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M730.7,904.6c-9.4,0-18.8-1.2-27.9-3.5h-.3c0,0,4-15.7,4-15.7h.3c15.7,4.1,32.2,4.1,47.9,0h.3c0,0,4,15.5,4,15.5h-.3c-9.1,2.4-18.5,3.6-27.9,3.6ZM703.2,900.6c18,4.6,37,4.6,55,0l-3.7-14.4c-15.6,4-32,4-47.6,0l-3.7,14.4Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  </g>
                  <g>
                    <path d="M758.5,900.8c-18.3,4.7-37.4,4.7-55.7,0,1.3-5,2.6-10,3.8-15,15.8,4.1,32.3,4.1,48.1,0,1.3,5,2.6,10,3.8,15Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M730.7,904.6c-9.4,0-18.8-1.2-27.9-3.5h-.3c0,0,4-15.7,4-15.7h.3c15.7,4.1,32.2,4.1,47.9,0h.3c0,0,4,15.5,4,15.5h-.3c-9.1,2.4-18.5,3.6-27.9,3.6ZM703.2,900.6c18,4.6,37,4.6,55,0l-3.7-14.4c-15.6,4-32,4-47.6,0l-3.7,14.4Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  </g>
                </g>
                <g>
                  <path d="M767.1,792.7h9.5s.5-6-9.5-5.4v5.4Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M776.9,793h-10.1v-6h.3c4-.2,6.8.5,8.4,2.2,1.6,1.6,1.4,3.4,1.4,3.5v.3ZM767.4,792.4h8.9c0-.5-.2-1.7-1.2-2.8-1.5-1.5-4.1-2.2-7.7-2.1v4.8Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
                <g>
                  <path d="M694.6,792.7h-9.5s-.5-6,9.5-5.4v5.4Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M694.9,793h-10.1v-.3c0,0-.2-1.9,1.4-3.5,1.6-1.7,4.5-2.5,8.4-2.3h.3v6.1ZM685.3,792.4h8.9v-4.8c-3.6-.1-6.2.6-7.7,2.1-1,1.1-1.2,2.2-1.2,2.8Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
                <g>
                  <path d="M751.1,735.8s-2.5,25.8,10,37.9" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M761.1,774.1c0,0-.2,0-.2,0-12.5-12.1-10.2-37.9-10.1-38.2,0-.2.2-.3.3-.3.2,0,.3.2.3.3,0,.3-2.3,25.8,9.9,37.7.1.1.1.3,0,.4,0,0-.1,0-.2,0Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
                <g>
                  <path d="M760,740s-1,21.5,6.3,37.1" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M766.3,777.4c-.1,0-.2,0-.3-.2-7.3-15.5-6.3-37.1-6.3-37.3,0-.2.1-.3.3-.3.2,0,.3.2.3.3,0,.2-.9,21.6,6.3,37,0,.2,0,.3-.1.4,0,0,0,0-.1,0Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
                <g>
                  <path d="M751.1,735.8s-2.5,25.8,10,37.9" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M761.1,774.1c0,0-.2,0-.2,0-12.5-12.1-10.2-37.9-10.1-38.2,0-.2.2-.3.3-.3.2,0,.3.2.3.3,0,.3-2.3,25.8,9.9,37.7.1.1.1.3,0,.4,0,0-.1,0-.2,0Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
                <g>
                  <path d="M760,740s-1,21.5,6.3,37.1" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M766.3,777.4c-.1,0-.2,0-.3-.2-7.3-15.5-6.3-37.1-6.3-37.3,0-.2.1-.3.3-.3.2,0,.3.2.3.3,0,.2-.9,21.6,6.3,37,0,.2,0,.3-.1.4,0,0,0,0-.1,0Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
                <g>
                  <path d="M770,743.5s-3.8-.2-8.4-5.1c-4.6-4.9-10.2-4.4-10.2-4.4l1.9-5.6s1.6.7,1.6.7c4,1.9,6.8,4.1,9.2,6.1,2.5,2,4.2,4.4,5.5,7.2.2.5.4.9.5,1.2Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M770,743.9s0,0,0,0c-.2,0-4-.2-8.6-5.2-4.5-4.8-9.9-4.3-10-4.3-.1,0-.2,0-.3-.1,0,0,0-.2,0-.3l1.9-5.6c0,0,0-.1.2-.2,0,0,.2,0,.2,0,0,0,1.5.6,1.6.7,0,0,0,0,0,0,4.1,1.9,6.9,4.2,9.3,6.1,2.5,2.1,4.3,4.5,5.5,7.3,0,.2.1.3.2.4.1.3.2.6.3.8,0,0,0,.2,0,.3,0,0-.1.1-.2.1ZM751.9,733.7c1.5,0,6.1.4,10,4.5,3.5,3.8,6.6,4.7,7.8,4.9,0,0,0-.2-.1-.3,0-.1-.1-.3-.2-.4-1.2-2.8-2.9-5.1-5.4-7.1-2.3-1.9-5.2-4.2-9.2-6.1h0c-.1,0-.5-.2-1.3-.5l-1.6,4.9s0,0,0,0Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
                <g>
                  <path d="M750,726.9l-1,4.1s-8.7-2.1-18.1-2.2c-9.4.1-18.1,2.2-18.1,2.2l-.9-3.9c5.6-2,12.3-3.4,20.3-3.4s12.8,1.3,17.8,3.2Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M749.1,731.3s0,0,0,0c0,0-8.8-2.1-18-2.2-9.2.1-17.9,2.2-18,2.2,0,0-.2,0-.2,0,0,0-.1-.1-.1-.2l-.9-3.9c0-.2,0-.3.2-.4,6.3-2.3,13.1-3.5,20.4-3.5s12.3,1.1,17.9,3.2c.1,0,.2.2.2.4l-1,4.1c0,.1-.2.2-.3.2ZM731,728.5c8.3.1,16.3,1.8,17.9,2.2l.9-3.6c-5.5-2.1-11.4-3.1-17.4-3.1s-13.8,1.1-19.9,3.3l.8,3.3c1.6-.4,9.5-2,17.9-2.2Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
                <g>
                  <path d="M709.7,735.8s2.5,25.8-10,37.9" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M699.7,774.1c0,0-.2,0-.2,0-.1-.1-.1-.3,0-.4,12.3-11.9,10-37.4,9.9-37.7,0-.2.1-.3.3-.3.2,0,.3.1.3.3,0,.3,2.4,26.1-10.1,38.2,0,0-.1,0-.2,0Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
                <g>
                  <path d="M700.9,740s1,21.5-6.3,37.1" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M694.6,777.4s0,0-.1,0c-.2,0-.2-.3-.1-.4,7.2-15.4,6.3-36.8,6.3-37,0-.2.1-.3.3-.3.2,0,.3.1.3.3,0,.2.9,21.7-6.3,37.3,0,.1-.2.2-.3.2Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
                <g>
                  <path d="M709.9,733.9s-5.6-.5-10.2,4.4c-4.1,4.4-7.3,4.9-8,4.9,1.2-3.2,3.3-6.1,6.1-8.3,2.6-2.1,6-4.3,10.1-6.2.2,0,.3,0,.3,0l1.7,5.1Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M691.7,743.6c0,0-.2,0-.2-.1,0,0,0-.2,0-.3,1.3-3.3,3.4-6.2,6.2-8.4,3.1-2.4,6.5-4.5,10.1-6.2,0,0,0,0,.1,0h.3c.1,0,.3,0,.3.2l1.7,5.1c0,0,0,.2,0,.3,0,0-.2.1-.3.1,0,0-5.5-.4-10,4.3-4.2,4.5-7.6,5-8.2,5,0,0,0,0,0,0ZM707.9,729.1c-3.6,1.7-6.9,3.7-10,6.1-2.5,2-4.5,4.7-5.8,7.7,1.2-.2,3.9-1.2,7.3-4.8,4-4.2,8.6-4.6,10-4.6l-1.5-4.5h0Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
                <g>
                  <path d="M770.1,897.8s-10.4-1-9.2,9.3c0,0,7.5-2.9,9.2-9.3Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M760.6,907.5v-.4c-.4-3.1.3-5.5,1.9-7.2,2.8-2.9,7.4-2.5,7.6-2.4h.4s0,.4,0,.4c-1.7,6.4-9.1,9.4-9.4,9.5h-.4ZM769.4,898.1c-1.3,0-4.5.2-6.5,2.3-1.4,1.5-2,3.6-1.8,6.3,1.5-.7,6.9-3.5,8.5-8.5,0,0-.2,0-.3,0Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
                <g>
                  <path d="M701.4,907.1s.5-10.5-9.6-8.8c0,0,3.3,7.4,9.6,8.8Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M701.7,907.5h-.4c-6.5-1.5-9.7-8.8-9.9-9.1l-.2-.4h.4c3-.6,5.5,0,7.2,1.5,3,2.7,2.8,7.4,2.8,7.6v.4ZM692.2,898.5c.7,1.5,3.8,6.8,8.9,8.2,0-1.1-.3-4.6-2.6-6.7-1.5-1.3-3.6-1.8-6.3-1.5Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M886.8,820.1l-5.1-.5.7-71.8c0-7.3-4.9-16.7-10.9-20.8-6.2-4.2-14.6-7.6-27.3-7.6s-21.3,3-29.4,8c-4.9,3-8.9,10.2-8.9,16l.7,76.2-5.5.5c-2.9.3-5.1,3-4.7,5.9h.6l9.6-1,.5,62.9c0,9.9,4.9,18.7,14.2,21.9l3.1,1.1c12.8,4.5,26.8,4.5,39.6,0h0c11.1-3.9,17.2-14.4,17.2-26.3l.6-59.6,9.3,1h.6c.3-2.9-1.8-5.6-4.7-5.9Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M844,914.5c-6.7,0-13.5-1.1-19.9-3.4l-3.1-1.1c-8.9-3.1-14.4-11.6-14.4-22.2l-.5-62.6-9.3,1h-.7c-.2,0-.3-.1-.3-.3-.3-3.1,1.9-5.9,5-6.2l5.2-.5-.7-75.9c0-5.9,4-13.1,9-16.2,8.2-5.1,15.7-8.1,29.6-8.1s19.9,2.5,27.5,7.7c6.1,4.1,11.1,13.6,11.1,21l-.7,71.5,4.9.5s0,0,0,0c3.1.3,5.3,3.1,5,6.2,0,.2-.1.3-.3.3h-.6l-9-1-.5,59.3c0,12.6-6.7,22.8-17.4,26.6-6.4,2.2-13.2,3.4-19.9,3.4ZM806.5,824.6c0,0,.1,0,.2,0,0,0,.1.1.1.2l.6,62.9c0,10.4,5.4,18.7,14,21.7l3.1,1.1c12.7,4.4,26.7,4.4,39.4,0,10.5-3.7,17-13.6,17-26l.6-59.6c0,0,0-.2.1-.2,0,0,.2,0,.2,0l9.3,1h.3c.1-2.7-1.8-5-4.5-5.3l-5.1-.5c-.2,0-.3-.1-.3-.3l.7-71.8c0-7.3-4.8-16.5-10.8-20.5-7.5-5.1-16.4-7.6-27.2-7.6s-21.1,2.9-29.3,8c-4.8,3-8.7,10-8.7,15.7l.7,76.2c0,.2-.1.3-.3.3l-5.5.5c-1.3.1-2.5.8-3.4,1.9-.8,1-1.2,2.2-1.1,3.4h.4l9.6-1s0,0,0,0Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
                <g>
                  <path d="M864.8,815c-14.3-4.7-27.3-4.7-41.6,0-1.2-3-2.9-6.5-4.8-9,16.6-5.4,34.7-5.4,51.2,0-2,3-3.2,5.5-4.8,9Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M823.2,815.3c-.1,0-.2,0-.3-.2-1.4-3.6-3.2-6.8-4.8-8.9,0,0,0-.2,0-.3,0,0,.1-.2.2-.2,16.6-5.4,34.9-5.4,51.4,0,0,0,.2,0,.2.2,0,0,0,.2,0,.3-2,3.1-3.3,5.6-4.8,9,0,.1-.2.2-.4.2-14.1-4.6-27.3-4.6-41.4,0,0,0,0,0,0,0ZM844,811.2c6.8,0,13.6,1.1,20.6,3.4,1.4-3.1,2.7-5.6,4.5-8.5-16.2-5.2-34-5.2-50.3,0,2.1,2.8,3.7,6.4,4.5,8.5,7-2.3,13.8-3.4,20.6-3.4Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
                <g>
                  <path d="M823.2,866.8c16.7,4.6,26.6,3.5,41.6,0,1.2,5.3,2.9,9.7,4.8,14.1-16.6,9.6-34.7,9.6-51.2,0,2-5.3,3.2-7.9,4.8-14.1Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M844,888.3c-8.7,0-17.5-2.4-25.8-7.2-.1,0-.2-.2-.1-.4.5-1.4,1-2.7,1.5-3.8,1.2-3.2,2.2-5.7,3.4-10.2,0,0,0-.1.1-.2,0,0,.2,0,.2,0,16.4,4.5,26,3.6,41.4,0,0,0,.2,0,.2,0,0,0,.1.1.1.2,1.1,5.1,2.8,9.3,4.8,14,0,.1,0,.3-.1.4-8.3,4.8-17,7.2-25.8,7.2ZM818.8,880.7c16.3,9.3,34.2,9.3,50.5,0-2-4.6-3.6-8.7-4.7-13.6-14.9,3.5-25,4.4-41.1,0-1.1,4.4-2.1,6.9-3.3,10-.4,1.1-.9,2.2-1.4,3.6Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
                <g>
                  <g>
                    <path d="M873.2,820.9v-13.8l-5.4,10.4s0,1.3,0,3.4h5.5Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M873.2,821.2h-5.5c0,0-.2,0-.2,0,0,0,0-.1,0-.2,0-2.1,0-3.4,0-3.4,0,0,0,0,0-.1l5.4-10.4c0-.1.2-.2.3-.2.1,0,.2.2.2.3v13.8c0,.2-.1.3-.3.3ZM868,820.5h4.9v-12.3l-4.8,9.2c0,.3,0,1.4,0,3Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  </g>
                  <g>
                    <path d="M873.2,823.3h-5.5c0,6.9,0,20.6,1.9,32.7h3.7v-32.7Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M873.2,856.3h-3.7c-.2,0-.3-.1-.3-.3-1.8-12.2-2-25.8-1.9-32.8,0-.2.1-.3.3-.3h5.5c.2,0,.3.1.3.3v32.7c0,.2-.1.3-.3.3ZM869.8,855.7h3.1v-32.1h-4.9c0,7,0,20.2,1.8,32.1Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  </g>
                  <g>
                    <path d="M869.8,858.5c.8,5,1.9,9.8,3.5,13.7v-13.7h-3.5Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M873.2,872.5c-.1,0-.2,0-.3-.2-1.4-3.6-2.6-8.2-3.5-13.7,0,0,0-.2,0-.2,0,0,.1-.1.2-.1h3.5c.2,0,.3.1.3.3v13.7c0,.1-.1.3-.2.3,0,0,0,0,0,0ZM870.1,858.8c.8,4.6,1.7,8.5,2.8,11.7v-11.7h-2.8Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M815.2,820.9v-13.8l5.4,10.4s0,1.3,0,3.4h-5.5Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M820.7,821.2h-5.5c-.2,0-.3-.1-.3-.3v-13.8c0-.1,0-.3.2-.3.1,0,.3,0,.3.2l5.4,10.4s0,0,0,.1c0,0,0,1.3,0,3.4,0,0,0,.2,0,.2,0,0-.1,0-.2,0ZM815.5,820.5h4.9c0-1.7,0-2.8,0-3l-4.8-9.2v12.3Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  </g>
                  <g>
                    <path d="M815.2,823.3h5.5c0,6.9,0,20.6-1.9,32.7h-3.7v-32.7Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M818.9,856.3h-3.7c-.2,0-.3-.1-.3-.3v-32.7c0-.2.1-.3.3-.3h5.5c.2,0,.3.1.3.3,0,7,0,20.6-1.9,32.8,0,.1-.2.3-.3.3ZM815.5,855.7h3.1c1.8-11.9,1.9-25.1,1.8-32.1h-4.9v32.1Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  </g>
                  <g>
                    <path d="M818.7,858.5c-.8,5-1.9,9.8-3.5,13.7v-13.7h3.5Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M815.2,872.5s0,0,0,0c-.1,0-.2-.2-.2-.3v-13.7c0-.2.1-.3.3-.3h3.5c0,0,.2,0,.2.1,0,0,0,.2,0,.2-.9,5.5-2.1,10.1-3.5,13.7,0,.1-.2.2-.3.2ZM815.5,858.8v11.7c1.1-3.2,2.1-7.1,2.8-11.7h-2.8Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  </g>
                </g>
                <g>
                  <path d="M860.2,732.4c-10.7-3.9-22.4-3.9-33.1,0-.7-2-1.4-4-2.2-6,12.1-4.4,25.4-4.4,37.5,0-.7,2-1.4,4-2.2,6Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M827.1,732.7c-.1,0-.2,0-.3-.2l-2.2-6c0,0,0-.2,0-.2,0,0,0-.1.2-.2,12.2-4.4,25.5-4.4,37.7,0,.2,0,.2.2.2.4l-2.2,6c0,0,0,.1-.2.2,0,0-.2,0-.2,0-10.6-3.8-22.3-3.8-32.9,0,0,0,0,0-.1,0ZM825.3,726.6l2,5.5c10.6-3.7,22.2-3.7,32.8,0l2-5.5c-11.8-4.2-24.8-4.2-36.7,0Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
                <g>
                  <path d="M873.4,742.6c-1.9-3.4-5.3-6.5-9.8-8.3-.5-.2-.8-.6-.6-1.1.3-1,.8-2,1.2-3,.5-1.2,3.3-1.8,4.5-1,4.5,2.7,7.7,6.5,9.4,10.5.2.5,0,.9-.3,1.3-.7.6-1.4,1.3-2,2-.7.8-2,.7-2.5-.3Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M874.7,743.7c0,0-.1,0-.2,0-.6,0-1.1-.4-1.4-.9,0,0,0,0,0,0-2-3.6-5.4-6.5-9.6-8.2-.7-.3-1-.9-.8-1.5.4-1,.8-2,1.3-3,.3-.6,1-1.1,1.9-1.4,1.1-.3,2.3-.3,3,.2,4.3,2.6,7.7,6.4,9.5,10.6.2.6.1,1.2-.4,1.6-.7.6-1.3,1.3-1.9,2-.4.4-.9.6-1.4.6ZM873.6,742.4c.2.4.5.6.9.6.4,0,.8-.1,1.1-.4.6-.7,1.3-1.4,2-2,.3-.2.3-.6.2-.9-1.7-4.1-5-7.8-9.3-10.3-.6-.4-1.6-.4-2.5-.1-.8.2-1.3.6-1.5,1-.5,1-.9,2-1.2,3-.1.4.2.6.4.8,4.4,1.8,7.9,4.7,9.9,8.4Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
                <g>
                  <path d="M814,742.6c1.9-3.4,5.3-6.5,9.8-8.3.5-.2.8-.6.6-1.1-.3-1-.8-2-1.2-3-.5-1.2-3.3-1.8-4.5-1-4.5,2.7-7.7,6.5-9.4,10.5-.2.5,0,.9.3,1.3.7.6,1.4,1.3,2,2,.7.8,2,.7,2.5-.3Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M812.7,743.7c-.5,0-1-.2-1.4-.6-.6-.7-1.2-1.4-1.9-2-.5-.4-.6-1-.4-1.6,1.8-4.2,5.2-8,9.5-10.6.7-.4,1.9-.5,3-.2.9.3,1.6.8,1.9,1.4.5,1,.9,2,1.3,3,.2.6,0,1.2-.8,1.5-4.2,1.7-7.6,4.6-9.6,8.2,0,0,0,0,0,0-.3.5-.8.9-1.4.9,0,0-.1,0-.2,0ZM820.1,729c-.5,0-1,.1-1.3.3-4.2,2.6-7.5,6.2-9.3,10.3-.1.3,0,.7.2.9.7.6,1.4,1.3,2,2,.3.3.6.5,1,.4.4,0,.7-.3.9-.6,2.1-3.7,5.6-6.7,9.9-8.4.3-.1.6-.3.4-.8-.3-1-.8-2-1.2-3-.2-.4-.8-.8-1.5-1-.4-.1-.9-.2-1.3-.2ZM814,742.6h0,0Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
                <g>
                  <path d="M855,909c-7.1,2.6-14.9,2.6-22,0,.4-1.2.9-2.4,1.3-3.5,6.3,2.3,13.2,2.3,19.5,0,.4,1.2.9,2.4,1.3,3.5Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M844,911.2c-3.8,0-7.5-.6-11.1-1.9-.2,0-.2-.2-.2-.4l1.3-3.5c0,0,0-.1.2-.2,0,0,.2,0,.2,0,6.2,2.2,13,2.2,19.2,0,.2,0,.3,0,.4.2l1.3,3.5c0,0,0,.2,0,.2,0,0,0,.1-.2.2-3.6,1.3-7.3,1.9-11.1,1.9ZM833.4,908.8c6.9,2.4,14.4,2.4,21.2,0l-1.1-3c-6.2,2.1-12.9,2.1-19.1,0l-1.1,3Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
                <g>
                  <path d="M819.5,895.4c1.7,3,4.6,5.7,8.6,7.3.5.2.7.6.5,1-.3.9-.7,1.8-1.1,2.7-.5,1.1-2.9,1.6-4,.9-4-2.4-6.8-5.8-8.3-9.3-.2-.4,0-.8.2-1.1.6-.6,1.2-1.2,1.7-1.8.6-.7,1.7-.6,2.2.2Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M824.9,907.9c-.5,0-1,0-1.4-.4-3.8-2.3-6.8-5.7-8.4-9.4-.2-.5,0-1.1.3-1.5.6-.5,1.2-1.1,1.7-1.7.4-.4.9-.6,1.4-.6.5,0,1,.4,1.3.8,0,0,0,0,0,0,1.8,3.1,4.8,5.7,8.5,7.2.6.3.9.8.7,1.4-.3.9-.7,1.8-1.1,2.7-.2.5-.9,1-1.7,1.2-.4.1-.8.2-1.3.2ZM818.4,895c-.3,0-.6.1-.8.4-.5.6-1.1,1.2-1.8,1.8-.2.2-.3.5-.2.8,1.5,3.6,4.4,6.9,8.2,9.1.5.3,1.4.4,2.2.1.7-.2,1.2-.5,1.3-.9.4-.9.8-1.7,1.1-2.6,0-.3,0-.5-.4-.6-3.9-1.6-7-4.2-8.8-7.5-.2-.3-.5-.5-.8-.5,0,0,0,0-.1,0Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
                <g>
                  <path d="M868.4,895.4c-1.7,3-4.6,5.7-8.6,7.3-.5.2-.7.6-.5,1,.3.9.7,1.8,1.1,2.7.5,1.1,2.9,1.6,4,.9,4-2.4,6.8-5.8,8.3-9.3.2-.4,0-.8-.2-1.1-.6-.6-1.2-1.2-1.7-1.8-.6-.7-1.7-.6-2.2.2Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M863.1,907.9c-.5,0-.9,0-1.3-.2-.8-.3-1.5-.7-1.7-1.2-.4-.9-.8-1.8-1.1-2.7-.2-.6,0-1.1.7-1.4,3.7-1.5,6.7-4.1,8.5-7.2,0,0,0,0,0,0,.3-.5.7-.8,1.3-.8.5,0,1.1.1,1.4.6.5.6,1.1,1.2,1.7,1.7.4.4.5.9.3,1.5-1.6,3.7-4.6,7.1-8.4,9.4-.4.3-.9.4-1.4.4ZM868.7,895.5c-1.8,3.3-4.9,5.9-8.8,7.5-.3.1-.5.3-.4.6.3.9.7,1.8,1.1,2.6.2.4.7.7,1.3.9.8.3,1.7.2,2.2,0,3.7-2.3,6.6-5.5,8.2-9.1.1-.3,0-.6-.2-.8-.6-.6-1.2-1.2-1.8-1.8-.2-.3-.6-.4-.9-.4-.3,0-.6.2-.8.5Z" fill="none" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
              </g>
              <g id="Desk1" data-name="Desk" filter="url(#drop-shadow-6)">
                <g>
                  <g>
                    <polygon points="478.4 905.1 471.8 899.4 470.6 900.4 477.2 906.2 478.4 905.1" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M471.8,899l7.1,6.2-1.7,1.5-7.1-6.2,1.7-1.5ZM477.9,905.1l-6.1-5.3-.7.6,6.1,5.3.7-.6Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <polygon points="494.8 905.1 501.4 899.4 502.5 900.4 496 906.2 494.8 905.1" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M501.4,899l1.7,1.5-7.1,6.2-1.7-1.5,7.1-6.2ZM502.1,900.4l-.7-.6-6.1,5.3.7.6,6.1-5.3Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <g>
                      <path d="M479.6,893.3h13.9c3.5,0,6.3,2.8,6.3,6.3v7.3c0,3.5-2.8,6.3-6.3,6.3h-13.9c-3.5,0-6.3-2.8-6.3-6.3v-7.3c0-3.5,2.8-6.3,6.3-6.3Z" transform="translate(973.1 1806.5) rotate(-180)" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                      <path d="M475.5,893h22.1c1.4,0,2.5,1,2.5,2.2v16.1c0,1.2-1.1,2.2-2.5,2.2h-22.1c-1.4,0-2.5-1-2.5-2.2v-16.1c0-1.2,1.1-2.2,2.5-2.2ZM497.6,912.9c1,0,1.8-.7,1.8-1.6v-16.1c0-.9-.8-1.6-1.8-1.6h-22.1c-1,0-1.8.7-1.8,1.6v16.1c0,.9.8,1.6,1.8,1.6h22.1Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    </g>
                    <g>
                      <path d="M473.9,925.5h12.7s12.7,0,12.7,0c3,0,5.2-2.6,4.2-5.1l-2.5-6.2c-.5-1.3-1.9-2.1-3.4-2.1h-11.1s-11.1,0-11.1,0c-1.5,0-2.9.8-3.4,2.1l-2.5,6.2c-1,2.5,1.1,5.1,4.2,5.1Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                      <path d="M475.5,911.9h22.1c1.7,0,3.2.9,3.7,2.3l2.5,6.2c.5,1.3.3,2.7-.6,3.8-.9,1.1-2.3,1.7-3.9,1.7h-25.4c-1.6,0-3-.6-3.9-1.7s-1.1-2.5-.6-3.8l2.5-6.2c.5-1.4,2-2.3,3.7-2.3ZM499.3,925.2c1.3,0,2.5-.5,3.3-1.5.8-1,1-2.1.5-3.2l-2.5-6.2c-.5-1.1-1.7-1.9-3-1.9h-22.1c-1.4,0-2.6.8-3,1.9l-2.5,6.2c-.4,1.1-.2,2.3.5,3.2.8,1,2,1.5,3.3,1.5h25.4Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    </g>
                    <g>
                      <rect x="501.1" y="898.7" width="3.5" height="16.6" rx="1.5" ry="1.5" transform="translate(1005.7 1814.1) rotate(-180)" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                      <path d="M502,898.4h1.7c.7,0,1.3.5,1.3,1.1v15c0,.6-.6,1.1-1.3,1.1h-1.7c-.7,0-1.3-.5-1.3-1.1v-15c0-.6.6-1.1,1.3-1.1ZM503.7,915c.3,0,.6-.2.6-.5v-15c0-.3-.3-.5-.6-.5h-1.7c-.3,0-.6.2-.6.5v15c0,.3.3.5.6.5h1.7Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    </g>
                    <g>
                      <rect x="468.5" y="898.7" width="3.5" height="16.6" rx="1.5" ry="1.5" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                      <path d="M469.4,898.4h1.7c.7,0,1.3.5,1.3,1.1v15c0,.6-.6,1.1-1.3,1.1h-1.7c-.7,0-1.3-.5-1.3-1.1v-15c0-.6.6-1.1,1.3-1.1ZM471.1,915c.3,0,.6-.2.6-.5v-15c0-.3-.3-.5-.6-.5h-1.7c-.3,0-.6.2-.6.5v15c0,.3.3.5.6.5h1.7Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    </g>
                  </g>
                </g>
                <g>
                  <path d="M444.6,926.5v-15.2c0-8,7.4-14.4,16.5-14.4h62.2c1.7,0,3.1-1.2,3.1-2.7v-30.8c0-1.5-1.4-2.7-3.1-2.7h-103.1c-1.7,0-3.1,1.2-3.1,2.7v28.7s0,4.8,0,4.8v29.6c0,1.5,1.4,2.7,3.1,2.7h21.3c1.7,0,3.1-1.2,3.1-2.7Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M420.2,860.5h103.1c1.9,0,3.4,1.3,3.4,3v30.8c0,1.6-1.5,3-3.4,3h-62.2c-8.9,0-16.2,6.3-16.2,14.1v15.2c0,1.6-1.5,3-3.4,3h-21.3c-1.9,0-3.4-1.3-3.4-3v-63.1c0-1.6,1.5-3,3.4-3ZM523.3,896.6c1.5,0,2.7-1.1,2.7-2.4v-30.8c0-1.3-1.2-2.4-2.7-2.4h-103.1c-1.5,0-2.7,1.1-2.7,2.4v63.1c0,1.3,1.2,2.4,2.7,2.4h21.3c1.5,0,2.7-1.1,2.7-2.4v-15.2c0-8.1,7.6-14.7,16.9-14.7h62.2Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <path d="M417.1,864.2h109.3c.2,0,.3.1.3.3s-.2.3-.3.3h-109.3c-.2,0-.3-.1-.3-.3s.2-.3.3-.3Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                <g>
                  <g>
                    <path d="M470.1,874.9c0,1.5,2.1,2.6,4.8,2.6s4.8-1.2,4.8-2.6-2.1-2.6-4.8-2.6-4.8,1.2-4.8,2.6Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M474.9,872.1c2.7,0,4.9,1.2,4.9,2.8s-2.2,2.8-4.9,2.8-4.9-1.3-4.9-2.8,2.2-2.8,4.9-2.8ZM474.9,877.4c2.5,0,4.6-1.1,4.6-2.5s-2.1-2.5-4.6-2.5-4.6,1.1-4.6,2.5,2.1,2.5,4.6,2.5Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M449.9,870.3l3.3,4.8c.2.3.6.5,1,.5h20.7s20.7,0,20.7,0c.4,0,.8-.2,1-.5l3.3-4.8c.3-.4,0-.9-.6-.9h-24.3s-24.3,0-24.3,0c-.5,0-.9.5-.6.9Z" fill="#f4f2ef" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M450.5,869.3h48.7c.3,0,.6.1.8.4.2.2.2.5,0,.8l-3.3,4.8c-.2.3-.7.6-1.1.6h-41.4c-.5,0-.9-.2-1.1-.6l-3.3-4.8c-.2-.2-.2-.5,0-.8.2-.2.4-.4.8-.4ZM495.5,875.4c.3,0,.7-.2.8-.4l3.3-4.8c0-.1,0-.3,0-.5,0-.1-.3-.2-.5-.2h-48.7c-.2,0-.4,0-.5.2,0,.1,0,.3,0,.5h0s3.3,4.8,3.3,4.8c.2.3.5.4.8.4h41.4Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                </g>
                <g>
                  <rect x="459.7" y="879.7" width="30.3" height="11.8" rx="5.2" ry="5.2" transform="translate(949.7 1771.1) rotate(-180)" fill="#f4f2ef" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M461.5,879.5h26.7c1.1,0,2,.8,2,1.7v8.7c0,1-.9,1.7-2,1.7h-26.7c-1.1,0-2-.8-2-1.7v-8.7c0-1,.9-1.7,2-1.7ZM488.2,891.3c.9,0,1.6-.6,1.6-1.4v-8.7c0-.8-.7-1.4-1.6-1.4h-26.7c-.9,0-1.6.6-1.6,1.4v8.7c0,.8.7,1.4,1.6,1.4h26.7Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M496.3,881.1h1c1.8,0,3.3,1.5,3.3,3.3v2.2c0,1.4-1.1,2.5-2.5,2.5h-2.5c-1.4,0-2.5-1.1-2.5-2.5v-2.2c0-1.8,1.5-3.3,3.3-3.3Z" transform="translate(993.5 1770.2) rotate(-180)" fill="#f4f2ef" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M495.9,880.9h1.8c1.7,0,3.1,1.2,3.1,2.7v2.2c0,1.9-1.8,3.5-4,3.5s-4-1.6-4-3.5v-2.2c0-1.5,1.4-2.7,3.1-2.7ZM496.8,889c2,0,3.6-1.4,3.6-3.2v-2.2c0-1.3-1.2-2.4-2.7-2.4h-1.8c-1.5,0-2.7,1.1-2.7,2.4v2.2c0,1.7,1.6,3.2,3.6,3.2Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <path d="M496.8,880.9c0,0,.2,0,.2.2v8c0,0,0,.2-.2.2s-.2,0-.2-.2v-8c0,0,0-.2.2-.2Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                <g>
                  <g>
                    <rect x="433.9" y="874.9" width="14.3" height="17.5" transform="translate(882.2 1767.2) rotate(-180)" fill="#f4f2ef" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M433.8,874.7h14.7s0,17.8,0,17.8h-14.7s0-17.8,0-17.8ZM448.1,875h-14s0,17.2,0,17.2h14s0-17.2,0-17.2Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <polygon points="426.1 878.2 439.6 874 446.4 890.4 432.9 894.7 426.1 878.2" fill="#f4f2ef" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M439.7,873.8l6.9,16.7-13.8,4.3-6.9-16.7,13.8-4.3ZM446.2,890.3l-6.7-16.2-13.2,4.1,6.7,16.2,13.2-4.1Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                </g>
              </g>
              <g id="Bedroom_21" data-name="Bedroom_2" filter="url(#drop-shadow-7)">
                <g>
                  <path d="M296.6,528.8h53c2.3,0,4.2,1.9,4.2,4.2v74.5c0,.4-.4.8-.8.8h-59.6c-.6,0-1-.5-1-1v-74.2c0-2.3,1.9-4.2,4.2-4.2Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M353.1,608.5h-59.7c-.7,0-1.2-.4-1.2-1v-75.5c0-1.8,1.9-3.3,4.3-3.3h53.4c2.4,0,4.3,1.5,4.3,3.3v75.7c0,.4-.4.8-1,.8ZM296.5,529c-2.1,0-3.8,1.3-3.8,3v75.5c0,.3.3.6.8.6h59.7c.3,0,.5-.2.5-.4v-75.7c0-1.6-1.7-3-3.8-3h-53.4Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <rect x="290.5" y="525.5" width="65.2" height="7" rx="2.6" ry="2.6" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M353.1,532.7h-60.1c-1.5,0-2.8-1-2.8-2.2v-3.1c0-1.2,1.2-2.2,2.8-2.2h60.1c1.5,0,2.8,1,2.8,2.2v3.1c0,1.2-1.2,2.2-2.8,2.2ZM293,525.7c-1.3,0-2.3.8-2.3,1.8v3.1c0,1,1,1.8,2.3,1.8h60.1c1.3,0,2.3-.8,2.3-1.8v-3.1c0-1-1-1.8-2.3-1.8h-60.1Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M291.7,565.3c-.3,3.6-.8,25.1-.3,28,.5,3-1.7,12.1.2,12,1.9-.1,26.1,1.1,31.7,1.6,5.6.5,17.7,1.6,21.4,2.2,3.7.6,10,.4,10.4-.6.3-1,.2-41.6-.5-44-.7-2.3-62.8.7-62.8.7Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M349.4,609.7c-1.7,0-3.5-.1-4.8-.3-4.1-.7-18.5-2-21.4-2.2-5.6-.5-29.9-1.7-31.7-1.6-.2,0-.4,0-.5-.2-.7-.6-.6-2.8-.2-6.5.2-2.1.5-4.3.3-5.5-.5-3,0-24.5.3-28.1v-.2s.2,0,.2,0c.2,0,15.7-.8,31.2-1.3,31.4-1,31.8.2,31.9.7.5,1.8,1,42.6.5,44.1-.3.8-3,1.1-5.8,1.1ZM292,605.1c3.7,0,25.8,1.1,31.4,1.6,2.8.3,17.3,1.5,21.4,2.2,4,.7,9.8.3,10.1-.5.2-.5.2-10.3.1-21.5,0-10.1-.3-21.2-.6-22.4-.1-.3-2.8-1.2-31.5-.4-14.4.4-28.9,1.1-30.8,1.2-.3,4.1-.8,24.9-.3,27.8.2,1.2,0,3.4-.3,5.6-.3,2.7-.6,5.7,0,6.2,0,0,0,0,.1,0,0,0,.2,0,.4,0Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M355.6,566.1c-.5.4-12.7-.9-22.3-.9-19.6,0-41.3.7-42.9.4-1.2-.2-1.2-3.3-1.2-6.3,0-2.8-.3-5.4.7-6.1,2.1-1.6,62.6-1.6,65.2.5,1.1.9,1,3.4,1.1,5.7.1,3,.3,5.9-.6,6.6Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M354.7,566.3c-1,0-2.7-.1-5.8-.3-4.4-.3-10.4-.7-15.5-.6-9.1,0-18.7.2-26.5.3-9.1.1-15.6.2-16.5.1-1.3-.2-1.4-2.8-1.4-5.7v-.8c0-.4,0-.8,0-1.2,0-2.4-.1-4.4.8-5.1,1.5-1.2,28.3-1.4,45.6-1,8.5.2,18.8.6,19.9,1.6,1,.8,1.1,2.7,1.1,4.7,0,.4,0,.8,0,1.1.1,3.1.3,6-.7,6.8h0c-.1,0-.4.1-1.1.1ZM333.8,565c5,0,10.8.4,15.1.6,3.2.2,6.1.4,6.5.3.8-.7.7-3.8.5-6.5,0-.4,0-.8,0-1.1,0-1.9-.1-3.7-1-4.5-.3-.2-2.5-1-19.5-1.4-20-.5-44.1,0-45.3.9-.8.6-.7,2.6-.7,4.8,0,.4,0,.8,0,1.2v.8c0,2.3,0,5.2,1,5.4.8.1,7.7,0,16.4-.1,7.7-.1,17.3-.3,26.5-.3.2,0,.3,0,.5,0Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M301.2,535.6c-1.9,2.8-.1,11.8,0,13.2.6,6,42.8,2.8,44.1,1,1.2-1.6,1.4-14.8-1.2-15.4-1.3-.3-12.1-1-22.2-.9-10.3.1-20,1-20.7,2.2Z" fill="#f4f2ef" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M319,552.5c-4.8,0-9.3-.2-12.6-.8-3.4-.6-5.3-1.6-5.4-2.9,0-.2,0-.6-.2-1.1-.4-2.9-1.5-9.8.2-12.2.9-1.3,11.5-2.2,20.9-2.2,10.1-.1,21,.6,22.3.9.4.1.8.4,1.1,1,1.6,3.2,1.3,13.3.3,14.7-.8,1.1-14.6,2.6-26.6,2.6ZM323.9,533.6c-.7,0-1.3,0-2,0-11.5.1-19.9,1.2-20.5,2.1h0c-1.6,2.3-.6,9.1-.1,12,0,.5.1.9.2,1.1.1,1.1,1.8,1.9,5,2.5,12.1,2.2,37.8-.4,38.7-1.6,1-1.3,1.2-11.3-.3-14.4-.3-.6-.6-.8-.8-.8-1.2-.3-10.7-.9-20.2-.9Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
              </g>
              <g id="Bedroom_22" data-name="Bedroom_2" filter="url(#drop-shadow-8)">
                <g>
                  <path d="M274.9,825.2h53c2.3,0,4.2,1.9,4.2,4.2v74.5c0,.4-.4.8-.8.8h-59.6c-.6,0-1-.5-1-1v-74.2c0-2.3,1.9-4.2,4.2-4.2Z" transform="translate(-563.5 1166.3) rotate(-90)" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M341.4,834.9v59.7c0,.7-.4,1.2-1,1.2h-75.5c-1.8,0-3.3-1.9-3.3-4.3v-53.4c0-2.4,1.5-4.3,3.3-4.3h75.7c.4,0,.8.4.8,1ZM261.9,891.6c0,2.1,1.3,3.8,3,3.8h75.5c.3,0,.6-.3.6-.8v-59.7c0-.3-.2-.5-.4-.5h-75.7c-1.6,0-3,1.7-3,3.8v53.4Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <rect x="229.3" y="861.5" width="65.2" height="7" rx="2.6" ry="2.6" transform="translate(-603.2 1126.9) rotate(-90)" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M265.5,835v60.1c0,1.5-1,2.8-2.2,2.8h-3.1c-1.2,0-2.2-1.2-2.2-2.8v-60.1c0-1.5,1-2.8,2.2-2.8h3.1c1.2,0,2.2,1.2,2.2,2.8ZM258.5,895.1c0,1.3.8,2.3,1.8,2.3h3.1c1,0,1.8-1,1.8-2.3v-60.1c0-1.3-.8-2.3-1.8-2.3h-3.1c-1,0-1.8,1-1.8,2.3v60.1Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M298.1,896.3c3.6.3,25.1.8,28,.3,3-.5,12.1,1.7,12-.2-.1-1.9,1.1-26.1,1.6-31.7.5-5.6,1.6-17.7,2.2-21.4.6-3.7.4-10-.6-10.4-1-.3-41.6-.2-44,.5-2.3.7.7,62.8.7,62.8Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M342.5,838.6c0,1.7-.1,3.5-.3,4.8-.7,4.1-2,18.5-2.2,21.4-.5,5.6-1.7,29.9-1.6,31.7,0,.2,0,.4-.2.5-.6.7-2.8.6-6.5.2-2.1-.2-4.3-.5-5.5-.3-3,.5-24.5,0-28.1-.3h-.2s0-.2,0-.2c0-.2-.8-15.7-1.3-31.2-1-31.4.2-31.8.7-31.9,1.8-.5,42.6-1,44.1-.5.8.3,1.1,3,1.1,5.8ZM338,896.1c0-3.7,1.1-25.8,1.6-31.4.3-2.8,1.5-17.3,2.2-21.4.7-4,.3-9.8-.5-10.1-.5-.2-10.3-.2-21.5-.1-10.1,0-21.2.3-22.4.6-.3.1-1.2,2.8-.4,31.5.4,14.4,1.1,28.9,1.2,30.8,4.1.3,24.9.8,27.8.3,1.2-.2,3.4,0,5.6.3,2.7.3,5.7.6,6.2,0,0,0,0,0,0-.1,0,0,0-.2,0-.4Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M298.9,832.5c.4.5-.9,12.7-.9,22.3,0,19.6.7,41.3.4,42.9-.2,1.2-3.3,1.2-6.3,1.2-2.8,0-5.4.3-6.1-.7-1.6-2.1-1.6-62.6.5-65.2.9-1.1,3.4-1,5.7-1.1,3-.1,5.9-.3,6.6.6Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M299.2,833.4c0,1-.1,2.7-.3,5.8-.3,4.4-.7,10.4-.6,15.5,0,9.1.2,18.7.3,26.5.1,9.1.2,15.6.1,16.5-.2,1.3-2.8,1.4-5.7,1.4h-.8c-.4,0-.8,0-1.2,0-2.4,0-4.4.1-5.1-.8-1.2-1.5-1.4-28.3-1-45.6.2-8.5.6-18.8,1.6-19.9.8-1,2.7-1.1,4.7-1.1.4,0,.8,0,1.1,0,3.1-.1,6-.3,6.8.7h0c0,.1.1.4.1,1.1ZM297.9,854.2c0-5,.4-10.8.6-15.1.2-3.2.4-6.1.3-6.5-.7-.8-3.8-.7-6.5-.5-.4,0-.8,0-1.1,0-1.9,0-3.7.1-4.5,1-.2.3-1,2.5-1.4,19.5-.5,20,0,44.1.9,45.3.6.8,2.6.7,4.8.7.4,0,.8,0,1.2,0h.8c2.3,0,5.2,0,5.4-1,.1-.8,0-7.7-.1-16.4-.1-7.7-.3-17.3-.3-26.5,0-.2,0-.3,0-.5Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M268.4,886.8c2.8,1.9,11.8.1,13.2,0,6-.6,2.8-42.8,1-44.1-1.6-1.2-14.8-1.4-15.4,1.2-.3,1.3-1,12.1-.9,22.2.1,10.3,1,20,2.2,20.7Z" fill="#f4f2ef" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M285.4,869.1c0,4.8-.2,9.3-.8,12.6-.6,3.4-1.6,5.3-2.9,5.4-.2,0-.6,0-1.1.2-2.9.4-9.8,1.5-12.2-.2-1.3-.9-2.2-11.5-2.2-20.9-.1-10.1.6-21,.9-22.3.1-.4.4-.8,1-1.1,3.2-1.6,13.3-1.3,14.7-.3,1.1.8,2.6,14.6,2.6,26.6ZM266.5,864.1c0,.7,0,1.3,0,2,.1,11.5,1.2,19.9,2.1,20.5h0c2.3,1.6,9.1.6,12,.1.5,0,.9-.1,1.1-.2,1.1-.1,1.9-1.8,2.5-5,2.2-12.1-.4-37.8-1.6-38.7-1.3-1-11.3-1.2-14.4.3-.6.3-.8.6-.8.8-.3,1.2-.9,10.7-.9,20.2Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
              </g>
              <g id="Primary_Bed" filter="url(#drop-shadow-9)">
                <line x1="842.7" y1="338.6" x2="842.7" y2="338.6" fill="#e2d0b5" stroke="#ccb596" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".2"/>
                <line x1="826.6" y1="338.6" x2="826.6" y2="338.6" fill="#e2d0b5" stroke="#ccb596" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".2"/>
                <g>
                  <rect x="850.8" y="290.7" width="112.7" height="9.3" rx="4" ry="4" transform="translate(1202.5 -611.8) rotate(90)" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M902.3,347.8v-104.8c0-2.3,1.9-4.2,4.2-4.2h1.4c2.3,0,4.2,1.9,4.2,4.2v104.8c0,2.3-1.9,4.2-4.2,4.2h-1.4c-2.3,0-4.2-1.9-4.2-4.2ZM911.6,243c0-2-1.7-3.7-3.7-3.7h-1.4c-2,0-3.7,1.7-3.7,3.7v104.8c0,2,1.7,3.7,3.7,3.7h1.4c2,0,3.7-1.7,3.7-3.7v-104.8Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <rect x="805.1" y="248.6" width="100.7" height="93.8" transform="translate(1151 -559.9) rotate(90)" fill="#fff" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M808.3,346.2v-101.2h94.3v101.2h-94.3ZM808.8,245.4v100.2h93.3v-100.2h-93.3Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M878,289.4c-.2-.3-.2-2.2-.4-5.8-.2-3.3-.7-8-.6-12.3,0-6.1.6-10.8.9-14.5.1-2.2-.2-4.7.2-5,.3-.2,2.4.1,4.6,0,5.5-.3,14.2-.8,15.3,0,.5.4.2,2.9.4,5.3.3,4,.7,9,.8,12.5.1,3.4-.5,9.5-.8,14.2-.2,2.5,0,5.4-.3,5.6-.2.2-2-.1-4,0-1.4.1-4.1.6-5.8.6-5.5,0-9.1.5-10.1-.7Z" fill="#f4f2ef" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M876.7,272c0-.2,0-.4,0-.7,0-4.4.4-8.1.6-11.2,0-1.2.2-2.3.3-3.4,0-.9,0-1.9,0-2.7,0-1.5,0-2.2.3-2.5.2-.2.6-.1,1.7,0,.9,0,1.9.1,3.1,0h.1c7.5-.4,14.3-.8,15.3,0,.4.3.4,1.2.4,2.9,0,.8,0,1.7,0,2.6.3,3.7.7,8.9.8,12.5.1,2.8-.3,7.5-.6,11.5,0,.9-.2,1.8-.2,2.7,0,1,0,2.1-.1,3.1,0,1.9,0,2.6-.4,2.8-.2.1-.5.1-1.3,0-.7,0-1.8,0-2.8,0-.5,0-1.1.1-1.8.2-1.4.2-2.9.4-4.1.4-1.6,0-3,0-4.2,0-3.3,0-5.3.1-6.1-.8h0c-.2-.2-.2-.9-.3-2.8,0-.8,0-1.9-.2-3.1,0-.8-.1-1.7-.2-2.7-.2-2.8-.4-6-.4-9ZM878.1,255.5c0,.4,0,.9,0,1.4,0,1-.2,2.2-.3,3.4-.2,3-.6,6.8-.6,11.1,0,3.2.2,6.6.4,9.6,0,1,.1,1.9.2,2.7,0,1.2.1,2.3.2,3.1,0,1.2.1,2.3.2,2.5.6.7,2.7.7,5.7.6,1.2,0,2.7,0,4.2,0,1.1,0,2.7-.2,4-.4.7,0,1.3-.2,1.8-.2,1.1-.1,2.1,0,2.9,0,.4,0,.9,0,1,0,0-.2,0-1.3.1-2.3,0-1,0-2.1.1-3.1,0-.9.1-1.7.2-2.7.3-4.1.7-8.7.6-11.5-.1-3.6-.5-8.7-.8-12.4,0-.9,0-1.8,0-2.7,0-1.1,0-2.3-.2-2.5-1-.7-10.1-.2-15,0h-.1c-1.1,0-2.3,0-3.1,0-.6,0-1.3,0-1.4,0,0,.2,0,1.2,0,2.1,0,.4,0,.9,0,1.4Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M878,335.4c-.2-.3-.2-2.2-.4-5.8-.2-3.3-.7-8-.6-12.3,0-6.1.6-10.8.9-14.5.1-2.2-.2-4.7.2-5,.3-.2,2.4.1,4.6,0,5.5-.3,14.2-.8,15.3,0,.5.4.2,2.9.4,5.3.3,4,.7,9,.8,12.5.1,3.4-.5,9.5-.8,14.2-.2,2.5,0,5.4-.3,5.6-.2.2-2-.1-4,0-1.4.1-4.1.6-5.8.6-5.5,0-9.1.5-10.1-.7Z" fill="#f4f2ef" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M876.7,318c0-.2,0-.4,0-.7,0-4.4.4-8.1.6-11.2,0-1.2.2-2.3.3-3.4,0-.9,0-1.9,0-2.7,0-1.5,0-2.2.3-2.5.2-.2.6-.1,1.7,0,.9,0,1.9.1,3.1,0h0c7.5-.4,14.3-.8,15.3,0,.4.3.4,1.2.4,2.9,0,.8,0,1.7,0,2.6.3,3.7.7,8.9.8,12.5.1,2.8-.3,7.5-.6,11.5,0,.9-.2,1.8-.2,2.7,0,1,0,2.1-.1,3.1,0,1.9,0,2.6-.4,2.8-.2.1-.5.1-1.3,0-.7,0-1.8,0-2.8,0-.5,0-1.1.1-1.8.2-1.4.2-2.9.4-4.1.4-1.6,0-3,0-4.2,0-3.3,0-5.3.1-6.1-.8h0c-.2-.2-.2-.9-.3-2.8,0-.8,0-1.9-.2-3.1,0-.8-.1-1.7-.2-2.7-.2-2.8-.4-6-.4-9ZM878.1,301.4c0,.4,0,.9,0,1.4,0,1-.2,2.2-.3,3.4-.2,3-.6,6.8-.6,11.1,0,3.2.2,6.6.4,9.6,0,1,.1,1.9.2,2.7,0,1.2.1,2.3.2,3.1,0,1.2.1,2.3.2,2.5.6.7,2.7.7,5.7.6,1.2,0,2.7,0,4.2,0,1.1,0,2.7-.2,4-.4.7,0,1.3-.2,1.8-.2,1.1-.1,2.1,0,2.9,0,.4,0,.9,0,1,0,0-.2,0-1.3.1-2.3,0-1,0-2.1.1-3.1,0-.9.1-1.7.2-2.7.3-4.1.7-8.7.6-11.5-.1-3.6-.5-8.7-.8-12.4,0-.9,0-1.8,0-2.7,0-1.1,0-2.3-.2-2.5-1-.7-10.1-.2-15,0h0c-1.1,0-2.3,0-3.1,0-.6,0-1.3,0-1.4,0,0,.2,0,1.2,0,2.1,0,.4,0,.9,0,1.4Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M848.7,243.7c-2.8.2-40.1-.9-41.8.9-1.7,1.9-2.1,101.8.5,102.3,2.6.5,47.2.9,48.7-.7.8-.9,3.4-31.4,1.2-58.8-1.8-23-8.5-43.7-8.5-43.7Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M805.3,296.2c0-.8,0-1.6,0-2.4,0-19.2.4-48.2,1.4-49.3,1.2-1.3,16.4-1.3,33.4-1.1,4.4,0,7.9,0,8.6,0h.2s0,.2,0,.2c0,.2,6.7,21,8.5,43.7,2.2,27-.3,57.9-1.2,59-.7.8-8.8,1.2-24.1,1.2-11.1,0-23.4-.2-24.8-.4-.2,0-.4-.3-.4-.5-1.2-3.4-1.6-28.8-1.6-50.5ZM848.6,244c-1.1,0-4.2,0-8.5,0-10.3-.1-31.8-.4-33,.9-.7,1.1-1.3,24-1.3,51,0,29.5.7,49.9,1.7,50.9,2.6.5,46.9.8,48.4-.6.7-1.2,3.3-31.8,1.1-58.6-1.7-21.5-7.8-41.3-8.4-43.5Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M881.5,273.4c.4-.6,1.2-1,1.8-.5.5.5.4,1.3.7,1.7,4.7,7.2,5.5,11.7,5.5,13.4s.5,2.6.7,3.2c.4,1-.6,1.1-1.8.8-1.2-.2-2.9,1-4.8,2.4-1.9,1.4-5.1,1.1-6.2,2.1-1.2,1-1.5,1.4-2.1,1.2-.6-.3-.7-.8-.8-1.8-.1-1-4.5-7.7-4.5-10.6s-.5-4.7-1.3-5.7c-.8-1-.1-1.9.9-1.5,1,.4,2.8-1.5,4.7-2.3,1.1-.5,6.4-1.1,7.2-2.4Z" fill="#f4f2ef" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M868.2,278.8c0-.2,0-.4.2-.6.3-.4.8-.5,1.4-.3.5.2,1.4-.4,2.4-1.1.7-.4,1.4-.9,2.1-1.2.4-.2,1.1-.3,2.1-.5,1.8-.4,4.5-1,5-1.8h0c.3-.4.7-.8,1.2-.8.4,0,.7,0,1,.3.4.3.5.8.6,1.2,0,.2.1.5.2.6,5.1,7.7,5.5,12.3,5.5,13.5s.4,2.2.6,2.8c0,.1,0,.2.1.4.1.4.1.7,0,1-.3.4-1,.4-2,.2-1-.2-2.6.9-4.3,2.1l-.3.2c-1.1.8-2.5,1-3.7,1.3-1,.2-2,.4-2.5.8-.2.2-.4.3-.6.5-.7.7-1.1,1-1.8.7-.7-.3-.8-1-.9-2,0-.3-.6-1.4-1.2-2.5-1.4-2.6-3.3-6.2-3.3-8.2s-.4-4.5-1.2-5.5c-.3-.4-.4-.7-.4-1ZM881.7,273.6c-.6,1-3.2,1.6-5.3,2-.9.2-1.6.4-2,.5-.7.3-1.4.7-2,1.2-1.1.7-2.1,1.4-2.8,1.1-.4-.1-.7,0-.8.1-.2.2,0,.6.2,1,.9,1.2,1.3,3.1,1.3,5.8s1.9,5.5,3.2,7.9c.8,1.5,1.2,2.3,1.3,2.7.1,1,.2,1.4.6,1.6.3.1.5,0,1.2-.6.2-.1.3-.3.6-.5.6-.5,1.6-.7,2.7-.9,1.2-.2,2.5-.5,3.5-1.2l.3-.2c1.9-1.3,3.5-2.4,4.7-2.2,1.2.2,1.5,0,1.5,0,0-.1,0-.3,0-.5,0,0,0-.2-.1-.3-.3-.6-.6-1.6-.6-3s-.4-5.6-5.4-13.2c-.1-.2-.2-.5-.3-.8,0-.3-.2-.7-.4-.9-.2-.1-.4-.2-.6-.2-.3,0-.6.3-.8.6h0Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M853.8,348.2c-.1,0-.3,0-.4-.1-.5-.2-.8-.3-1-.6-.5-.7-.2-4.4.5-10.1,0-.1,0-.3,0-.4.3-2.9.7-6.3,1-10.1,0-.1,0-.3,0-.4.3-2.8.5-5.9.7-9.1,0-.1,0-.3,0-.4.2-2.9.3-6,.4-9.1,0-.1,0-.3,0-.4,0-2.8,0-5.7,0-8.6,0-.1,0-.3,0-.4,0-2.2-.2-4.5-.3-6.8,0-.9-.1-1.8-.2-2.7,0-.1,0-.3,0-.4-.2-3-.5-5.9-.9-8.7,0-.1,0-.3,0-.4-.4-3.3-.8-6.4-1.3-9.4,0-.1,0-.3,0-.4-.5-3.5-1.1-6.8-1.6-9.7,0-.1,0-.3,0-.4-.6-3.3-1.1-6.2-1.4-8.6,0-.1,0-.3,0-.4-.7-4.9-.8-7.8.4-7.9.6,0,1.6-.1,2.9-.2.1,0,.3,0,.4,0,5.4-.3,14.5-.4,16-.1.8.2,1.5,2.7,2.1,6.9,0,.1,0,.3,0,.4.3,2.3.6,5.1.9,8.3,0,.1,0,.3,0,.4.2,2.8.5,6,.7,9.3,0,.1,0,.3,0,.4.2,2.7.3,5.6.4,8.5,0,.1,0,.3,0,.4.2,3.3.3,6.7.4,10.1,0,.1,0,.3,0,.4,0,3.3.2,6.6.3,9.9,0,.1,0,.3,0,.4,0,2.8,0,5.6.1,8.4v.4c0,3.4,0,6.8,0,10v.4c0,3.8,0,7.4-.1,10.8,0,.1,0,.3,0,.4,0,3.6-.2,6.9-.4,9.7,0,.1,0,.3,0,.4-.3,5.6-.8,9.1-1.5,9.3-1.9.6-6.2,1-10.3,1.1-.1,0-.3,0-.4,0-2.9,0-5.7,0-7.4-.5Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M848.4,245.3c0-1.2.2-1.9.5-2.3.2-.2.4-.4.7-.4.6,0,1.5-.1,2.9-.2.1,0,.3,0,.4,0,5.2-.3,14.5-.5,16.1-.1.6.1,1.4,1,2.3,7.1v.2c0,0,0,.1,0,.2.3,2.2.6,5,.9,8.3,0,0,0,.1,0,.2,0,0,0,.1,0,.2.2,2.7.5,5.7.7,9.3v.4c.2,2.7.3,5.5.5,8.5,0,.1,0,.3,0,.4.2,3.2.3,6.6.4,10.1,0,0,0,.1,0,.2v.2c.1,3.9.2,7,.3,9.9v.2c0,0,0,.1,0,.2,0,2.8,0,5.6.1,8.4v.4c0,3.4,0,6.8,0,10v.4c0,3.8,0,7.5-.1,10.8h0c0,0,0,.1,0,.2v.2c0,3.6-.2,6.9-.4,9.7v.4c-.6,9.1-1.4,9.4-1.7,9.5-1.9.6-6.1,1-10.4,1.2h-.2c0,0-.2,0-.2,0-3.3,0-5.9,0-7.4-.5h-.2c0,0-.2,0-.3-.1-.6-.2-.9-.4-1.1-.6-.6-.7-.3-3.7.4-10.2h0c0-.2,0-.3,0-.4v-.6c.4-2.8.7-6,1-9.6v-.4c.3-3,.5-6.1.7-9.1v-.4c.2-3.2.3-6.2.4-9.1h0c0,0,0-.1,0-.2v-.2c0-3.1,0-5.9,0-8.6,0-.1,0-.3,0-.4,0-2.3-.2-4.5-.3-6.8,0-.6,0-1.2-.1-1.8v-1.2c-.3-3-.6-5.9-1-8.7,0-.2,0-.3,0-.4-.3-2.9-.7-5.9-1.3-9.4,0,0,0-.1,0-.2v-.2c-.6-3.6-1.1-6.9-1.6-9.7l-.5-2.7c-.4-2.4-.8-4.5-1-6.3,0-.2,0-.3,0-.4-.4-2.4-.5-4.2-.5-5.4ZM873.7,315c0-2.8,0-5.6,0-8.4v-.4c0-2.7,0-5.5-.1-8.4,0,0,0-.1,0-.2v-.2c0-2.9-.1-6.1-.3-9.9v-.4c-.1-3.5-.3-6.9-.4-10.1,0-.1,0-.3,0-.4-.1-3-.3-5.8-.4-8.5v-.4c-.2-3.6-.5-6.6-.7-9.3,0,0,0-.1,0-.2,0,0,0-.1,0-.2-.3-3.2-.6-6-.9-8.3,0,0,0-.1,0-.2v-.2c-.9-5.8-1.6-6.6-1.9-6.6-1.5-.3-10.7-.1-16,.1-.1,0-.3,0-.4,0-1.4,0-2.3.1-2.9.2-.2,0-.3,0-.4.2-.7.9-.3,4.2.2,7.4,0,.1,0,.3,0,.4.3,1.9.6,3.9,1,6.3l.5,2.7c.5,2.8,1,6.1,1.6,9.7,0,0,0,.1,0,.2,0,0,0,.1,0,.2.5,3.5.9,6.5,1.3,9.4,0,.1,0,.3,0,.4.3,2.8.6,5.7.9,8.7v1.2c.1.6.2,1.2.2,1.8.2,2.3.3,4.5.3,6.8,0,.1,0,.3,0,.4,0,2.7,0,5.5,0,8.6h0c0,0,0,.1,0,.2v.2c0,2.9-.2,5.9-.4,9.1v.4c-.2,3-.4,6.1-.7,9.1v.4c-.4,3.6-.7,6.8-1,9.6v.6c0,.1,0,.2,0,.3h0c-.5,4.7-1,9.4-.5,10,.1.2.4.3.9.5,0,0,.1,0,.2,0h.2c1.5.4,4.1.6,7.3.5h.2c0,0,.2,0,.2,0,4.1-.1,8.4-.6,10.2-1.1.1,0,.8-.7,1.3-9v-.4c.2-2.8.3-6.1.4-9.7v-.4c0-3.3.1-6.9.1-10.8v-.4c0-.5,0-1.1,0-1.6Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <path d="M849.2,251.1c0-.1,0-.3,0-.4.9-.2,1.9-.4,2.8-.6.1,0,.3,0,.4,0h0c3.2-.6,6.4-1.1,9.6-1.3.1,0,.3,0,.4,0,2.9-.1,5.7,0,8.5.5,0,.1,0,.3,0,.4-2.8-.5-5.7-.7-8.5-.5-.1,0-.3,0-.4,0-3.3.2-6.5.7-9.7,1.3-.1,0-.3,0-.4,0-.9.2-1.9.4-2.8.6Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                <path d="M850.7,260.1c0-.1,0-.3,0-.4.9,0,1.7-.1,2.6-.2.1,0,.3,0,.4,0,3.3-.2,6.7-.5,10-.7.1,0,.3,0,.4,0,2.6-.2,5.2-.5,7.9-.7,0,.1,0,.3,0,.4-2.6.3-5.2.5-7.8.7-.1,0-.3,0-.4,0-3.3.3-6.6.5-10,.7-.1,0-.3,0-.4,0-.9,0-1.8.1-2.6.2Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                <path d="M852.4,270.2c0-.1,0-.3,0-.4,1.1,0,2.3,0,3.4-.2h.4c2.8-.2,5.6-.5,8.5-.8.1,0,.3,0,.4,0,2.6-.3,5.1-.7,7.7-1.1,0,.1,0,.3,0,.4-2.5.4-5.1.8-7.7,1.1-.1,0-.3,0-.4,0-2.8.3-5.6.6-8.4.8-.1,0-.3,0-.4,0-1.1,0-2.3.1-3.4.2Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                <path d="M853.7,280c0-.1,0-.3,0-.4,1.3,0,2.6-.2,3.9-.3.1,0,.2,0,.4,0,2.4-.2,4.7-.5,7-.9.1,0,.3,0,.4,0,2.6-.4,5.2-1,7.8-1.6,0,.1,0,.3,0,.4-2.6.6-5.2,1.2-7.8,1.7-.1,0-.3,0-.4,0-2.3.4-4.6.7-7,.9-.1,0-.2,0-.4,0-1.3.1-2.6.2-3.9.3Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                <path d="M856.9,289.1c-.8,0-1.5,0-2.3,0,0-.1,0-.3,0-.4.9,0,1.8,0,2.8,0s.8,0,1.2,0c.1,0,.3,0,.4,0,1.3,0,2.7,0,4-.2.7,0,1.4-.1,2.1-.2.1,0,.3,0,.4,0,2.7-.3,5.4-.7,8.1-1.2,0,.1,0,.3,0,.4-2.7.5-5.4.9-8.1,1.2-.1,0-.3,0-.4,0-.7,0-1.5.1-2.2.2-1.3,0-2.6.1-3.9.2-.1,0-.3,0-.4,0-.5,0-1.1,0-1.6,0Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                <path d="M855.1,298.9c0-.1,0-.3,0-.4,1.2,0,2.4,0,3.6-.1.1,0,.3,0,.4,0,1.9,0,3.9-.2,5.8-.3.1,0,.3,0,.4,0,2.8-.2,5.7-.4,8.5-.6,0,.1,0,.3,0,.4-2.8.2-5.7.5-8.5.6-.1,0-.3,0-.4,0-1.9.1-3.9.2-5.8.3-.1,0-.3,0-.4,0-1.2,0-2.4.1-3.6.1Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                <path d="M855.1,307.9c0-.1,0-.3,0-.4.3,0,.7,0,1,0,.8,0,1.5-.1,2.3-.2h0c.1,0,.3,0,.4,0,1.2,0,2.5-.2,3.7-.3.8,0,1.5-.1,2.3-.2.1,0,.3,0,.4,0,2.9-.2,5.8-.4,8.8-.6v.4c-2.9.2-5.8.4-8.8.6-.1,0-.3,0-.4,0-.7,0-1.5.1-2.3.2-1.3,0-2.5.2-3.8.3-.1,0-.3,0-.4,0-.8,0-1.5.1-2.3.2-.3,0-.7,0-1,0Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                <path d="M865.2,317.7c-.1,0-.3,0-.4,0-.5,0-1.1,0-1.6,0-1.8,0-3.5,0-5.3-.1-.1,0-.3,0-.4,0-.9,0-1.9,0-2.8,0,0-.1,0-.3,0-.4.9,0,1.9,0,2.8,0,.1,0,.3,0,.4,0,1.7,0,3.4,0,5,.1.6,0,1.2,0,1.8,0h.4c2.9,0,5.9,0,8.8-.7v.4c-2.9.7-5.8.7-8.8.7Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                <path d="M865.3,328.1c-.1,0-.3,0-.4,0-2.7-.1-5.4-.4-8.1-.8-.1,0-.3,0-.4,0-.8-.1-1.6-.2-2.4-.4,0-.1,0-.3,0-.4.8.1,1.6.3,2.4.4.1,0,.3,0,.4,0,2.7.4,5.4.6,8.1.8.1,0,.3,0,.4,0,2.8.1,5.7.2,8.5,0,0,.1,0,.3,0,.4-2.8.1-5.7,0-8.5,0Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                <path d="M869,338.3c-1.5,0-2.9,0-4.4,0-.1,0-.3,0-.4,0-1.9,0-3.7-.1-5.6-.2-1.1,0-2.2-.1-3.3-.2-.1,0-.3,0-.4,0-.7,0-1.4-.2-2-.3,0-.1,0-.3,0-.4.7.1,1.4.2,2,.3.1,0,.3,0,.4,0,.1,0,.2,0,.3,0,2.1.2,4.2.3,6.3.4.8,0,1.5,0,2.3,0,.1,0,.3,0,.4,0,2.9,0,5.9,0,8.8,0,0,.1,0,.3,0,.4-1.5,0-3,0-4.5,0Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                <path d="M861.2,348.7c1.5-3.3,2.4-6.8,3-10.4,0-.1,0-.3,0-.4.4-2.5.5-5,.6-7.6,0-.7,0-1.5,0-2.2,0-.1,0-.3,0-.4,0-3.3,0-6.7,0-10,0-.1,0-.3,0-.4,0-2.6,0-5.2,0-7.9,0-.7,0-1.5,0-2.2,0-.1,0-.3,0-.4,0-2.8,0-5.6.1-8.4,0-.1,0-.3,0-.4,0-3.1,0-6.2.1-9.3,0-.1,0-.3,0-.4,0-.4,0-.8,0-1.2,0-2.8,0-5.6,0-8.4,0-.1,0-.3,0-.4,0-3-.2-6-.3-9.1,0-.1,0-.3,0-.4,0-1.3-.2-2.7-.3-4-.2-1.9-.3-3.8-.6-5.7,0-.1,0-.3,0-.4-.4-3.2-.9-6.4-1.5-9.6,0-.1,0-.3,0-.4-.4-2-.9-4-1.4-6.1,0-.3.3-.4.4-.1.2.9.5,1.8.7,2.7.3,1.1.5,2.3.8,3.4,0,.1,0,.3,0,.4.6,3.2,1.1,6.3,1.5,9.6,0,.1,0,.3,0,.4.3,2.8.6,5.5.8,8.3,0,.5,0,.9,0,1.4,0,.1,0,.3,0,.4.2,3,.3,6,.3,9,0,.1,0,.3,0,.4,0,3.2,0,6.4,0,9.6,0,.1,0,.3,0,.4,0,.4,0,.9,0,1.3,0,2.7,0,5.4-.1,8.1,0,.1,0,.3,0,.4,0,2.8,0,5.6-.1,8.4,0,.1,0,.3,0,.4,0,1.8,0,3.6,0,5.3s0,3.2,0,4.7c0,.1,0,.3,0,.4,0,3.3.1,6.7.1,10,0,.1,0,.3,0,.4,0,1.7,0,3.4-.2,5.1,0,1.5-.3,3.1-.5,4.6,0,.1,0,.3,0,.4-.5,3.6-1.4,7.1-2.9,10.4-.1,0-.3,0-.4,0Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                <path d="M853.8,348.2c-.1,0-.3,0-.4-.1.3-1.9.5-3.7.8-5.6.2-1.6.5-3.2.7-4.8,0-.1,0-.3,0-.4.3-2,.6-4,.8-6,.2-1.4.4-2.7.5-4.1,0-.1,0-.3,0-.4.4-3.1.8-6.2,1.1-9.4,0-.1,0-.3,0-.4.3-2.8.5-5.7.7-8.5,0-.3,0-.6,0-.9,0-.1,0-.3,0-.4h0c.2-2.8.3-5.7.3-8.5,0-.1,0-.3,0-.4,0-3.1,0-6.2-.2-9.3,0-.1,0-.3,0-.4,0-.8,0-1.6-.2-2.4-.2-2.2-.4-4.4-.7-6.6,0-.1,0-.3,0-.4-.2-1.4-.4-2.8-.7-4.2-.3-1.7-.7-3.4-1.1-5.1,0-.1,0-.3,0-.4-.4-1.8-.9-3.6-1.3-5.5-.4-1.4-.7-2.8-1-4.2,0-.1,0-.3,0-.4-.4-2-.8-4-1-6.1-.1-1-.2-1.9-.2-2.9,0-.1,0-.3,0-.4,0-2.5,0-5,.5-7.5.1,0,.3,0,.4,0-.1.9-.3,1.8-.3,2.7-.1,1.6-.2,3.2-.1,4.8,0,.1,0,.3,0,.4,0,2,.3,3.9.6,5.8.2,1.1.4,2.1.6,3.2,0,.1,0,.3,0,.4.5,2.3,1.1,4.7,1.7,7,.2.9.4,1.8.6,2.7,0,.1,0,.3,0,.4.7,3.1,1.3,6.1,1.7,9.2,0,.1,0,.3,0,.4.4,2.9.7,5.7.9,8.6,0,.1,0,.3,0,.4,0,.1,0,.3,0,.4.2,3.1.2,6.2.2,9.3v.4c0,2.8-.1,5.7-.3,8.5,0,.1,0,.3,0,.4,0,.8-.1,1.6-.2,2.5-.2,2.3-.4,4.7-.6,7,0,.1,0,.3,0,.4-.3,3.1-.7,6.3-1.1,9.4,0,.1,0,.3,0,.4-.2,1.5-.4,3-.6,4.5-.3,1.9-.5,3.7-.8,5.6,0,.1,0,.3,0,.4-.2,1.6-.5,3.3-.7,4.9-.3,1.8-.5,3.6-.8,5.5Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
              </g>
              <path d="M418.6,264.4c0-1.1-.6-2-1.4-2.7-.8-.7-1.9-1-2.9-.9-1.1,0-2,.6-2.7,1.4-.7.8-1,1.8-.9,2.8,0,0-.1,0-.2,0-.4,0-.7.2-1,.5-.2.2-.3.4-.3.6-.3-.4-.7-.8-1.1-1.1-.8-.7-1.8-1.2-2.9-1.5l1.9-.2c.7,0,1.3-.4,1.7-.9.4-.5.6-1.1.6-1.8,0-.7-.4-1.3-.9-1.7-.5-.4-1.2-.6-1.8-.6l-12.1,1c-.4,0-.8.2-1.1.4-2.7-4.5-6.5-8.4-11-11.1.1,0,.2-.1.3-.2.5-.4.8-1,.9-1.7l1-12.1c.1-1.4-.9-2.6-2.3-2.7-1.4-.1-2.6.9-2.7,2.3l-.2,2.1c-.4-1.7-1.3-3.2-2.7-4.3.2,0,.5-.1.7-.3.3-.2.5-.6.5-1,0,0,0-.2,0-.2.9,0,1.8-.3,2.5-.9.8-.7,1.3-1.7,1.4-2.7,0-1.1-.2-2.1-.9-2.9-.7-.8-1.7-1.3-2.7-1.4l-14-1.2c-1.1,0-2.1.2-2.9.9-.8.7-1.3,1.7-1.4,2.7,0,1.1.2,2.1.9,2.9.7.8,1.6,1.3,2.6,1.4,0,0,0,.1,0,.2,0,.6.3,1.2.9,1.4-.5.2-.9.5-1.3.9-.9.7-1.5,1.6-1.9,2.6l.2-1.9c0-.7-.1-1.3-.6-1.8-.4-.5-1-.8-1.7-.9-.7,0-1.3.2-1.8.6-.5.4-.8,1-.9,1.7l-1,12.1c0,.7.2,1.3.6,1.8-2.5.9-4.9,2.1-7.1,3.6,0,0,0,0-.2-.1l-10.5-6.1c-.6-.3-1.2-.4-1.9-.3-.6.2-1.2.6-1.5,1.1-.7,1.2-.3,2.7.9,3.4l1.8,1.1c-1.2-.3-2.4-.3-3.5,0-.5.1-1,.3-1.5.6.2-.6,0-1.2-.6-1.6,0,0-.1,0-.2-.1.9-1.9.2-4.1-1.6-5.1-.9-.5-2-.7-3-.4-1,.3-1.9.9-2.5,1.9l-7.1,12.1c-.5.9-.7,2-.4,3,.3,1,.9,1.9,1.9,2.5.6.4,1.3.5,2,.5s.7,0,1-.1c1-.3,1.8-.9,2.4-1.7,0,0,.1,0,.2.1.2.1.5.2.7.2s.2,0,.4,0c.2,0,.4-.2.6-.3,0,.5,0,1,.2,1.5.3,1.1.8,2,1.5,2.9l-1.7-1c-.6-.3-1.2-.4-1.9-.3-.6.2-1.2.6-1.5,1.1-.3.6-.4,1.2-.3,1.9.2.6.6,1.2,1.1,1.5l10.5,6.1c.2.1.5.2.8.3-.1,3.1.2,6.2.9,9.1-.3.1-.7.3-.9.5l-9.1,8.1c-.5.4-.8,1-.8,1.7,0,.7.2,1.3.6,1.8.5.5,1.1.8,1.9.8s1.2-.2,1.6-.6l1.6-1.4c-.6,1-1,2.2-1.1,3.4,0,.5,0,1.1,0,1.6-.2-.1-.4-.2-.7-.2-.4,0-.7.1-1,.4,0,0-.1.1-.2.2-1.5-1.4-3.8-1.5-5.4,0-1.7,1.5-1.8,4-.3,5.7l9.3,10.5c.7.8,1.7,1.3,2.8,1.3,0,0,.2,0,.2,0,1,0,1.9-.4,2.7-1,.8-.7,1.3-1.7,1.3-2.8,0-1-.3-2-.9-2.8,0,0,.1,0,.2-.1.3-.2.4-.6.5-1,0-.2,0-.5-.1-.7.5.1,1,.2,1.5.3.1,0,.3,0,.4,0,1,0,1.9-.2,2.7-.5l-1.4,1.3c-.5.4-.8,1-.8,1.7,0,.7.2,1.3.6,1.8.5.5,1.1.8,1.9.8s1.2-.2,1.6-.6l9.1-8.1c.2-.1.3-.3.4-.5,3,1.3,6.2,2.1,9.6,2.4,0,0,0,0,0,0,0,.5,0,1,.2,1.5l5.2,11c.4.9,1.3,1.4,2.2,1.4s.7,0,1-.2c.6-.3,1-.8,1.3-1.4.2-.6.2-1.3,0-1.9l-.9-1.9c.8.9,1.8,1.6,3,2,.5.2,1,.3,1.5.4-.5.4-.6,1.1-.4,1.7,0,0,0,.1.1.2-.8.5-1.4,1.2-1.7,2.1-.4,1-.3,2.1.1,3.1.7,1.4,2.1,2.3,3.6,2.3s1.2-.1,1.7-.4l12.7-6c1-.5,1.7-1.3,2.1-2.3.4-1,.3-2.1-.1-3.1-.5-1-1.3-1.7-2.3-2.1-1-.3-2-.3-2.9,0,0,0,0-.1,0-.2-.2-.3-.4-.6-.8-.7-.2,0-.5,0-.7,0,.9-1.4,1.2-3,1.1-4.6l.8,1.7c.4.9,1.3,1.4,2.2,1.4s.7,0,1-.2c1.2-.6,1.8-2.1,1.2-3.3l-5.1-10.8c2.5-2.7,4.4-5.9,5.8-9.2.3.1.6.2,1,.2s.1,0,.2,0l12.1-1c.7,0,1.3-.4,1.7-.9.4-.5.6-1.1.6-1.8,0-.7-.4-1.3-.9-1.7-.5-.4-1.1-.6-1.8-.6l-2.1.2c1.1-.4,2.1-1.1,2.9-2.1.3-.4.6-.8.9-1.3,0,.2.2.4.4.6.3.2.6.3.9.3s0,0,.1,0c0,0,.2,0,.2,0,.3,1.9,2,3.3,3.9,3.3s.2,0,.3,0c1.1,0,2-.6,2.7-1.4.7-.8,1-1.9.9-2.9l-1.1-14ZM334.6,306.9l-3.8-4.3c0,0,.1,0,.2-.1,0,0,.1-.1.2-.2,0,.1.2.2.3.4l3.2,3.6c.1.1.2.2.3.3,0,0-.1,0-.2.1,0,0,0,0-.1.1ZM395.7,264.2h.5c-.1,0-.3,0-.4.2,0,0,0-.1,0-.2ZM381.1,317.2l4.3-2c.1,0,.3-.1.4-.2,0,0,0,.1,0,.2,0,0,0,.1.1.2l-5.2,2.4c0,0,0-.1,0-.2,0,0,0-.1-.1-.2.1,0,.3-.1.4-.2ZM373.6,230.2c0,0,0,.1,0,.2,0,0,0,.2,0,.2-.2,0-.3,0-.5,0l-4.8-.4c-.2,0-.3,0-.5,0,0,0,0-.1,0-.2,0,0,0-.1,0-.2l5.7.5ZM360.8,244.6c-.2,0-.4,0-.6.1,0,0,0-.1,0-.2v-1.2c.2.4.3.8.5,1.2ZM327.1,256.1c0,.1-.1.3-.2.4,0,0-.1,0-.2-.1,0,0-.1,0-.2,0l2.9-4.9c0,0,.1,0,.2.1,0,0,.1,0,.2,0,0,.1-.2.3-.3.4l-2.4,4.1ZM411,275.1c0-.2,0-.3,0-.5l-.4-4.8c0-.2,0-.3,0-.5,0,0,0,0,.1,0s0,0,.1,0c0,0,.1,0,.2,0l.5,5.7c0,0-.1,0-.2,0,0,0-.2,0-.2,0ZM378.7,246.3c0,.1,0,.3,0,.4-.3-.1-.5-.2-.8-.3.4-.5.7-1.1.9-1.7v1.6ZM337.5,288.1c0,0,0,.1,0,.2-.2,0-.4.1-.6.2l.5-.4ZM368.7,307c.1,0,.2,0,.3,0,0,.3,0,.6,0,.8l-.4-.8ZM397,282.6c0-.1,0-.2,0-.3.3,0,.6.2.8.2h-.9Z" fill="#d8d8d8" filter="url(#drop-shadow-10)"/>
              <g id="Nook_table">
                <g>
                  <path d="M366.4,230.9h-1.6c-.6-.2-1.1-.7-1-1.3h0c0-.6.6-1.1,1.2-1h1.6c.6.2,1.1.7,1,1.3h0c0,.6-.6,1.1-1.2,1Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M366.5,231.1s0,0-.1,0h-1.6c-.7-.2-1.3-.8-1.2-1.6,0-.3.2-.7.5-.9.3-.2.6-.3,1-.3h1.6c.3.2.7.3.9.6.2.3.3.6.3,1,0,.7-.6,1.2-1.3,1.2ZM366.4,230.7c.5,0,.9-.3,1-.8,0-.2,0-.5-.2-.7-.2-.2-.4-.3-.6-.3h-1.6c-.2-.2-.5,0-.7,0-.2.2-.3.4-.3.6,0,.5.3.9.8,1h1.6Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M376.5,231.7h-1.6c-.6-.2-1.1-.7-1-1.3h0c0-.6.6-1.1,1.2-1h1.6c.6.2,1.1.7,1,1.3h0c0,.6-.6,1.1-1.2,1Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M376.6,231.9s0,0-.1,0h-1.6c-.7-.2-1.3-.8-1.2-1.6,0-.7.7-1.2,1.4-1.2h1.6c.3.2.7.3.9.6.2.3.3.6.3,1,0,.3-.2.7-.5.9-.2.2-.5.3-.8.3ZM375,229.6c-.5,0-.9.4-.9.8,0,.5.3.9.8,1h1.6c.2.2.5,0,.7,0,.2-.2.3-.4.3-.6,0-.2,0-.5-.2-.7-.2-.2-.4-.3-.6-.3h-1.6c0-.1,0-.1,0-.1Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M368.1,230.6h3.6c4.2,0,7.5,3.4,7.5,7.5v3.1c0,4.2-3.4,7.5-7.5,7.5h-3.6c-4.2,0-7.5-3.4-7.5-7.5v-3.1c0-4.2,3.4-7.5,7.5-7.5Z" transform="translate(21.6 -30.4) rotate(4.8)" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M372.1,249.2c-.2,0-.4,0-.6,0l-4.8-.4c-3.9-.3-6.8-3.8-6.5-7.7l.4-4.3c.2-1.9,1.1-3.6,2.5-4.8,1.5-1.2,3.3-1.8,5.2-1.7l4.8.4c3.9.3,6.8,3.8,6.5,7.7l-.4,4.3c-.2,1.9-1.1,3.6-2.5,4.8-1.3,1.1-2.9,1.7-4.6,1.7ZM371.5,248.7c1.8.2,3.5-.4,4.9-1.6,1.4-1.2,2.2-2.8,2.4-4.6l.4-4.3c.3-3.7-2.4-7-6.1-7.3l-4.8-.4c-1.8-.2-3.5.4-4.9,1.6-1.4,1.2-2.2,2.8-2.4,4.6l-.4,4.3c-.3,3.7,2.4,7,6.1,7.3l4.8.4Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M377.6,230.2l-14-1.2c-2-.2-3.6-2-3.4-4h0c.2-2,2-3.6,4-3.4l14,1.2c2,.2,3.6,2,3.4,4h0c-.2,2-2,3.6-4,3.4Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M377.9,230.4c-.1,0-.2,0-.3,0l-14-1.2c-2.2-.2-3.8-2.1-3.6-4.2,0-1,.6-2,1.4-2.7.8-.7,1.8-1,2.9-.9l14,1.2c1,0,2,.6,2.7,1.4.7.8,1,1.8.9,2.9,0,1-.6,2-1.4,2.7-.7.6-1.6.9-2.5.9ZM364,221.8c-.8,0-1.6.3-2.3.8-.7.6-1.2,1.5-1.2,2.4-.2,1.9,1.3,3.6,3.2,3.8l14,1.2c.9,0,1.8-.2,2.6-.8.7-.6,1.2-1.5,1.2-2.4,0-.9-.2-1.8-.8-2.6-.6-.7-1.5-1.2-2.4-1.2l-14-1.2c-.1,0-.2,0-.3,0Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M357.6,246.5h0c-1.2-.1-2.1-1.2-2-2.4l1-12.1c.1-1.2,1.2-2.1,2.3-2h0c1.2.1,2.1,1.2,2,2.3l-1,12.1c-.1,1.2-1.2,2.1-2.3,2Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M357.8,246.8c0,0-.1,0-.2,0h0c-1.3-.1-2.3-1.3-2.2-2.6l1-12.1c0-.6.4-1.2.8-1.6.5-.4,1.1-.6,1.7-.6.6,0,1.2.4,1.6.8.4.5.6,1.1.6,1.7l-1,12.1c-.1,1.2-1.1,2.2-2.4,2.2ZM357.6,246.3c1.1,0,2-.7,2.1-1.8l1-12.1c0-.5-.1-1-.5-1.4-.3-.4-.8-.7-1.3-.7-.5,0-1,.1-1.4.5-.4.3-.7.8-.7,1.3l-1,12.1c0,1.1.7,2,1.8,2.1h0Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M381,248.6h0c-1.2-.1-2.1-1.2-2-2.3l1-12.1c.1-1.2,1.2-2.1,2.3-2h0c1.2.1,2.1,1.2,2,2.4l-1,12.1c-.1,1.2-1.2,2.1-2.3,2Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M381.2,248.8c0,0-.1,0-.2,0-.6,0-1.2-.4-1.6-.8-.4-.5-.6-1.1-.6-1.7l1-12.1c.1-1.3,1.3-2.3,2.6-2.2,1.3.1,2.3,1.3,2.2,2.6l-1,12.1c0,.6-.4,1.2-.8,1.6-.4.4-1,.6-1.5.6ZM382.2,232.4c-1,0-1.9.8-2,1.8l-1,12.1c0,.5.1,1,.5,1.4.3.4.8.7,1.3.7h0c.5,0,1-.1,1.4-.5.4-.3.7-.8.7-1.3l1-12.1c0-1.1-.7-2-1.8-2.1,0,0-.1,0-.2,0Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M326.9,258.2l-.8,1.4c-.3.5-1,.7-1.5.4h0c-.5-.3-.7-1-.4-1.5l.8-1.4c.3-.5,1-.7,1.5-.4h0c.5.3.7,1,.4,1.5Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M325.1,260.3c-.2,0-.5,0-.7-.2-.3-.2-.5-.5-.6-.8,0-.3,0-.7.1-1l.8-1.4c.2-.3.5-.5.8-.6.3,0,.7,0,1,.1.6.4.8,1.2.5,1.8l-.8,1.4c-.2.3-.5.5-.8.6-.1,0-.2,0-.3,0ZM326,256.7c-.3,0-.6.2-.8.4l-.8,1.4c-.1.2-.2.5,0,.7,0,.2.2.4.4.6.2.1.5.2.7,0,.2,0,.4-.2.6-.4l.8-1.4c.3-.4.1-1-.3-1.2-.1,0-.3-.1-.5-.1Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M332,249.4l-.8,1.4c-.3.5-1,.7-1.5.4h0c-.5-.3-.7-1-.4-1.5l.8-1.4c.3-.5,1-.7,1.5-.4h0c.5.3.7,1,.4,1.5Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M330.3,251.6c-.2,0-.5,0-.7-.2-.3-.2-.5-.5-.6-.8,0-.3,0-.7.1-1l.8-1.4c.2-.3.5-.5.8-.6.3,0,.7,0,1,.1.6.4.8,1.2.5,1.8l-.8,1.4c-.2.4-.7.6-1.1.6ZM331.1,248c0,0-.2,0-.2,0-.2,0-.4.2-.6.4l-.8,1.4c-.1.2-.2.5,0,.7,0,.2.2.4.4.6.4.3,1,.1,1.2-.3l.8-1.4c.3-.4.1-1-.3-1.2-.1,0-.3-.1-.5-.1Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <rect x="327.1" y="249.7" width="18.6" height="18.2" rx="7.5" ry="7.5" transform="translate(-56.9 418.3) rotate(-59.6)" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M337,269.1c-1.2,0-2.5-.3-3.6-1l-3.7-2.2c-1.6-1-2.8-2.5-3.3-4.3-.5-1.8-.2-3.8.7-5.4l2.4-4.1c2-3.4,6.4-4.5,9.7-2.5l3.7,2.2c3.4,2,4.5,6.4,2.5,9.7l-2.4,4.1c-1,1.6-2.5,2.8-4.3,3.3-.6.2-1.2.2-1.8.2ZM335.7,248.9c-2.3,0-4.6,1.2-5.8,3.3l-2.4,4.1c-.9,1.5-1.2,3.4-.7,5.1.5,1.7,1.6,3.2,3.1,4.1l3.7,2.2c1.5.9,3.4,1.2,5.1.7,1.7-.5,3.2-1.6,4.1-3.1l2.4-4.1c1.9-3.2.8-7.3-2.4-9.2l-3.7-2.2c-1.1-.6-2.2-.9-3.4-.9Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M331.2,247.7l-7.1,12.1c-1,1.8-3.3,2.4-5.1,1.3h0c-1.8-1-2.4-3.3-1.3-5.1l7.1-12.1c1-1.8,3.3-2.4,5.1-1.3h0c1.8,1,2.4,3.3,1.3,5.1Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M320.8,261.9c-.7,0-1.4-.2-2-.5-.9-.5-1.5-1.4-1.8-2.4-.3-1-.1-2.1.4-3l7.1-12.1c1.1-1.9,3.5-2.5,5.4-1.4,1.9,1.1,2.5,3.5,1.4,5.4l-7.1,12.1c-.5.9-1.4,1.5-2.4,1.8-.3,0-.7.1-1,.1ZM328,242.4c-1.2,0-2.4.6-3,1.7l-7.1,12.1c-.5.8-.6,1.8-.4,2.7.2.9.8,1.7,1.6,2.1.8.5,1.8.6,2.7.4.9-.2,1.7-.8,2.1-1.6l7.1-12.1c1-1.7.4-3.8-1.3-4.8-.6-.3-1.2-.5-1.8-.5Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M337.3,272.9h0c-.6,1-1.9,1.4-3,.8l-10.5-6.1c-1-.6-1.4-1.9-.8-3h0c.6-1,1.9-1.4,3-.8l10.5,6.1c1,.6,1.4,1.9.8,3Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M335.4,274.1c-.4,0-.8-.1-1.2-.3l-10.5-6.1c-.5-.3-.9-.8-1.1-1.4-.2-.6,0-1.3.2-1.8.3-.5.8-.9,1.4-1.1.6-.2,1.3,0,1.8.2l10.5,6.1c1.1.7,1.5,2.1.8,3.2h0c-.4.8-1.2,1.2-2.1,1.2ZM324.9,263.7c-.2,0-.3,0-.5,0-.5.1-.9.5-1.2.9-.3.5-.3,1-.2,1.5.1.5.5.9.9,1.2l10.5,6.1c.9.5,2.1.2,2.7-.7h0c.5-.9.2-2.1-.7-2.7l-10.5-6.1c-.3-.2-.6-.3-1-.3Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M349.2,252.7h0c-.6,1-1.9,1.4-3,.8l-10.5-6.1c-1-.6-1.4-1.9-.8-3h0c.6-1,1.9-1.4,3-.8l10.5,6.1c1,.6,1.4,1.9.8,3Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M347.4,253.9c-.4,0-.8-.1-1.2-.3l-10.5-6.1c-1.1-.7-1.5-2.1-.8-3.2.3-.5.8-.9,1.4-1.1.6-.2,1.3,0,1.8.2l10.5,6.1c.5.3.9.8,1.1,1.4.2.6,0,1.3-.2,1.8-.3.5-.8.9-1.4,1.1-.2,0-.4,0-.6,0ZM336.9,243.4c-.2,0-.3,0-.5,0-.5.1-.9.5-1.2.9-.5.9-.2,2.1.7,2.7l10.5,6.1c.5.3,1,.3,1.5.2.5-.1.9-.5,1.2-.9h0c.3-.5.3-1,.2-1.5-.1-.5-.5-.9-.9-1.2l-10.5-6.1c-.3-.2-.6-.3-1-.3Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M336.5,307.1l1.1,1.2c.4.5.4,1.2,0,1.6h0c-.5.4-1.2.4-1.6,0l-1.1-1.2c-.4-.5-.4-1.2,0-1.6h0c.5-.4,1.2-.4,1.6,0Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M336.7,310.4s0,0,0,0c-.3,0-.7-.2-.9-.4l-1.1-1.2c-.2-.3-.3-.6-.3-.9s.2-.7.4-.9c.3-.2.6-.3.9-.3.3,0,.7.2.9.4l1.1,1.2c.2.3.3.6.3.9,0,.3-.2.7-.4.9-.2.2-.5.3-.9.3ZM335.6,306.9c-.2,0-.4,0-.6.2-.2.2-.3.4-.3.6,0,.2,0,.5.2.7l1.1,1.2c.2.2.4.3.6.3.2,0,.5,0,.7-.2.2-.2.3-.4.3-.6,0-.2,0-.5-.2-.7l-1.1-1.2c-.2-.2-.4-.3-.6-.3,0,0,0,0,0,0Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M329.7,299.5l1.1,1.2c.4.5.4,1.2,0,1.6h0c-.5.4-1.2.4-1.6,0l-1.1-1.2c-.4-.5-.4-1.2,0-1.6h0c.5-.4,1.2-.4,1.6,0Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M330,302.8s0,0,0,0c-.3,0-.7-.2-.9-.4l-1.1-1.2c-.5-.5-.4-1.4.1-1.8.3-.2.6-.3.9-.3.3,0,.7.2.9.4l1.1,1.2c.2.3.3.6.3.9,0,.3-.2.7-.4.9-.2.2-.5.3-.9.3ZM328.9,299.4c-.2,0-.4,0-.6.2-.4.3-.4.9,0,1.3l1.1,1.2c.2.2.4.3.6.3.2,0,.5,0,.7-.2.2-.2.3-.4.3-.6,0-.2,0-.5-.2-.7l-1.1-1.2c-.2-.2-.4-.3-.6-.3,0,0,0,0,0,0Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M338.2,289.2h3.6c4.2,0,7.5,3.4,7.5,7.5v3.1c0,4.2-3.4,7.5-7.5,7.5h-3.6c-4.2,0-7.5-3.4-7.5-7.5v-3.1c0-4.2,3.4-7.5,7.5-7.5Z" transform="translate(342.5 750.6) rotate(-131.6)" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M340,308.6c-.1,0-.3,0-.4,0-1.9-.1-3.6-1-4.9-2.4l-3.2-3.6c-2.6-2.9-2.3-7.5.6-10.1l3.2-2.9c1.4-1.3,3.2-1.9,5.2-1.8,1.9.1,3.6,1,4.9,2.4l3.2,3.6c2.6,2.9,2.3,7.5-.6,10.1l-3.2,2.9c-1.3,1.2-3,1.8-4.7,1.8ZM340,288.4c-1.6,0-3.2.6-4.4,1.7l-3.2,2.9c-2.8,2.5-3,6.7-.6,9.5l3.2,3.6c1.2,1.3,2.8,2.1,4.6,2.2,1.8.1,3.5-.5,4.9-1.7l3.2-2.9c2.8-2.5,3-6.7.6-9.5l-3.2-3.6c-1.2-1.3-2.8-2.1-4.6-2.2-.1,0-.3,0-.4,0Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M327.9,299.8l9.3,10.5c1.4,1.5,1.2,3.9-.3,5.2h0c-1.5,1.4-3.9,1.2-5.2-.3l-9.3-10.5c-1.4-1.5-1.2-3.9.3-5.2h0c1.5-1.4,3.9-1.2,5.2.3Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M334.4,316.7c0,0-.2,0-.2,0-1,0-2-.5-2.7-1.3l-9.3-10.5c-1.4-1.6-1.3-4.1.3-5.5s4.1-1.3,5.5.3l9.3,10.5c.7.8,1,1.8,1,2.8,0,1-.5,2-1.3,2.7-.7.6-1.6,1-2.6,1ZM325.1,298.8c-.8,0-1.7.3-2.3.9-1.5,1.3-1.6,3.5-.3,5l9.3,10.5c.6.7,1.5,1.1,2.4,1.2.9,0,1.8-.3,2.5-.9.7-.6,1.1-1.5,1.2-2.4,0-.9-.3-1.8-.9-2.5l-9.3-10.5c-.7-.8-1.7-1.2-2.6-1.2Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M353.7,301.8h0c.8.9.7,2.3-.2,3.1l-9.1,8.1c-.9.8-2.3.7-3.1-.2h0c-.8-.9-.7-2.3.2-3.1l9.1-8.1c.9-.8,2.3-.7,3.1.2Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M342.9,313.7c-.7,0-1.3-.3-1.8-.8-.9-1-.8-2.5.2-3.4l9.1-8.1c1-.9,2.5-.8,3.4.2.4.5.6,1.1.6,1.7,0,.6-.3,1.2-.8,1.6l-9.1,8.1c-.5.4-1,.6-1.6.6ZM352,301.3c-.5,0-.9.2-1.3.5l-9.1,8.1c-.4.3-.6.8-.7,1.4,0,.5.1,1,.5,1.4.7.8,2,.9,2.8.2l9.1-8.1c.8-.7.9-2,.2-2.8h0c-.4-.4-.9-.7-1.5-.7Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M338.1,284.2h0c.8.9.7,2.3-.2,3.1l-9.1,8.1c-.9.8-2.3.7-3.1-.2h0c-.8-.9-.7-2.3.2-3.1l9.1-8.1c.9-.8,2.3-.7,3.1.2Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M327.4,296.1c-.7,0-1.3-.3-1.8-.8-.4-.5-.6-1.1-.6-1.7,0-.6.3-1.2.8-1.6l9.1-8.1c1-.9,2.5-.8,3.4.2h0c.9,1,.8,2.5-.2,3.4l-9.1,8.1c-.5.4-1,.6-1.6.6ZM336.5,283.6c-.5,0-.9.2-1.3.5l-9.1,8.1c-.4.3-.6.8-.7,1.4,0,.5.1,1,.5,1.4s.8.6,1.4.7c.5,0,1-.1,1.4-.5l9.1-8.1c.8-.7.9-2,.2-2.8h0c-.3-.4-.8-.6-1.4-.7,0,0,0,0-.1,0Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M386.7,313.6l1.5-.7c.6-.3,1.2,0,1.5.5h0c.3.6,0,1.2-.5,1.5l-1.5.7c-.6.3-1.2,0-1.5-.5h0c-.3-.6,0-1.2.5-1.5Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M387.2,315.9c-.2,0-.3,0-.4,0-.3-.1-.6-.4-.7-.7-.3-.7,0-1.4.6-1.7l1.5-.7c.3-.1.7-.2,1,0,.3.1.6.4.7.7.3.7,0,1.4-.6,1.7l-1.5.7c-.2,0-.4.1-.6.1ZM386.8,313.7h0c-.5.2-.6.8-.4,1.2.1.2.3.4.5.5.2,0,.5,0,.7,0l1.5-.7c.5-.2.6-.8.4-1.2-.1-.2-.3-.4-.5-.5-.2,0-.5,0-.7,0l-1.5.7Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M377.6,317.9l1.5-.7c.6-.3,1.2,0,1.5.5h0c.3.6,0,1.2-.5,1.5l-1.5.7c-.6.3-1.2,0-1.5-.5h0c-.3-.6,0-1.2.5-1.5Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M378,320.2c-.5,0-1-.3-1.2-.8-.3-.7,0-1.4.6-1.7l1.5-.7c.3-.1.7-.2,1,0,.3.1.6.4.7.7.1.3.2.7,0,1-.1.3-.4.6-.7.7l-1.5.7c-.2,0-.4.1-.6.1ZM377.7,318.1h0c-.5.2-.6.8-.4,1.2.2.5.8.6,1.2.4l1.5-.7c.2-.1.4-.3.5-.5,0-.2,0-.5,0-.7-.1-.2-.3-.4-.5-.5-.2,0-.5,0-.7,0l-1.5.7Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M377.5,298.6h3.6c4.2,0,7.5,3.4,7.5,7.5v3.1c0,4.2-3.4,7.5-7.5,7.5h-3.6c-4.2,0-7.5-3.4-7.5-7.5v-3.1c0-4.2,3.4-7.5,7.5-7.5Z" transform="translate(853.4 424.8) rotate(154.8)" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M378.1,317.8c-.8,0-1.6-.1-2.4-.4-1.8-.6-3.2-1.9-4-3.7l-1.8-3.9c-.8-1.7-.9-3.6-.2-5.4.6-1.8,1.9-3.2,3.7-4l4.3-2c1.7-.8,3.6-.9,5.4-.2,1.8.6,3.2,1.9,4,3.7l1.8,3.9c1.7,3.6.1,7.8-3.4,9.5l-4.3,2c-1,.4-2,.7-3,.7ZM380.5,298c-1,0-1.9.2-2.8.6l-4.3,2c-1.6.8-2.8,2.1-3.5,3.8-.6,1.7-.5,3.5.2,5.1l1.8,3.9c.8,1.6,2.1,2.8,3.8,3.5,1.7.6,3.5.5,5.1-.2l4.3-2c3.4-1.6,4.8-5.6,3.2-8.9l-1.8-3.9c-.8-1.6-2.1-2.8-3.8-3.5-.7-.3-1.5-.4-2.3-.4Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M377.4,319.8l12.7-6c1.9-.9,4.1,0,4.9,1.8h0c.9,1.9,0,4.1-1.8,4.9l-12.7,6c-1.9.9-4.1,0-4.9-1.8h0c-.9-1.9,0-4.1,1.8-4.9Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M378.9,327c-1.5,0-2.9-.8-3.6-2.3-.4-.9-.5-2-.1-3,.4-1,1.1-1.8,2-2.2l12.7-6c2-.9,4.3,0,5.2,1.9.9,2,0,4.3-1.9,5.2l-12.7,6c-.5.3-1.1.4-1.7.4ZM391.6,313.6c-.5,0-1,.1-1.5.3l-12.7,6c-.8.4-1.5,1.1-1.8,2-.3.9-.3,1.8.1,2.7.8,1.8,2.9,2.5,4.7,1.7l12.7-6c1.8-.8,2.5-2.9,1.7-4.7-.6-1.3-1.9-2-3.2-2Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M386.5,295.6h0c1.1-.5,2.4,0,2.9,1l5.2,11c.5,1.1,0,2.4-1,2.9h0c-1.1.5-2.4,0-2.9-1l-5.2-11c-.5-1.1,0-2.4,1-2.9Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M392.6,310.9c-.9,0-1.7-.5-2.2-1.4l-5.2-11c-.3-.6-.3-1.2,0-1.8.2-.6.6-1.1,1.2-1.3h0c.6-.3,1.2-.3,1.8,0,.6.2,1.1.6,1.3,1.2l5.2,11c.6,1.2,0,2.6-1.1,3.2-.3.2-.7.2-1,.2ZM387.4,295.6c-.3,0-.6,0-.8.2h0c-.5.2-.8.6-1,1.1-.2.5-.2,1,0,1.5l5.2,11c.5,1,1.6,1.4,2.6.9,1-.5,1.4-1.6.9-2.6l-5.2-11c-.2-.5-.6-.8-1.1-1-.2,0-.4-.1-.7-.1Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M365.2,305.5h0c1.1-.5,2.4,0,2.9,1l5.2,11c.5,1.1,0,2.4-1,2.9h0c-1.1.5-2.4,0-2.9-1l-5.2-11c-.5-1.1,0-2.4,1-2.9Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M371.3,320.8c-.9,0-1.7-.5-2.2-1.4l-5.2-11c-.6-1.2,0-2.6,1.1-3.2h0c1.2-.6,2.6,0,3.2,1.1l5.2,11c.3.6.3,1.2,0,1.8-.2.6-.6,1.1-1.2,1.3-.3.2-.7.2-1,.2ZM365.3,305.7h0c-1,.5-1.4,1.6-.9,2.6l5.2,11c.5,1,1.6,1.4,2.6.9.5-.2.8-.6,1-1.1.2-.5.2-1,0-1.5l-5.2-11c-.5-1-1.6-1.4-2.6-.9Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M409.5,268v-1.6c-.2-.6.3-1.1.9-1.2h0c.6,0,1.1.4,1.2,1v1.6c.2.6-.3,1.1-.9,1.2h0c-.6,0-1.1-.4-1.2-1Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M410.6,269.3c-.3,0-.6-.1-.8-.3-.3-.2-.4-.5-.5-.9v-1.6c-.2-.3,0-.7.2-1,.2-.3.5-.4.9-.5.3,0,.7,0,1,.3.3.2.4.5.5.9v1.6c.2.3,0,.7-.2,1-.2.3-.5.4-.9.5,0,0,0,0-.1,0ZM410.5,265.4s0,0,0,0c-.2,0-.5.1-.6.3-.2.2-.2.4-.2.7v1.6c.2.2.3.5.4.6.2.2.4.2.7.2.2,0,.5-.1.6-.3.2-.2.2-.4.2-.7v-1.6c-.2-.2-.3-.5-.4-.6-.2-.1-.4-.2-.6-.2Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M410.3,278.1v-1.6c-.2-.6.3-1.1.9-1.2h0c.6,0,1.1.4,1.2,1v1.6c.2.6-.3,1.1-.9,1.2h0c-.6,0-1.1-.4-1.2-1Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M411.4,279.4c-.3,0-.6-.1-.8-.3-.3-.2-.4-.5-.5-.9v-1.6c-.2-.3,0-.7.2-1,.2-.3.5-.4.9-.5.3,0,.7,0,1,.3.3.2.4.5.5.9v1.6c.2.7-.3,1.4-1.1,1.4,0,0,0,0-.1,0ZM410.5,278.1c0,.2.1.5.3.6.2.2.4.2.7.2.5,0,.9-.5.8-1v-1.6c-.2-.2-.3-.5-.4-.6-.2-.2-.4-.2-.7-.2-.2,0-.5.1-.6.3-.2.2-.2.4-.2.7v1.6Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M399.6,263.9h3.6c4.2,0,7.5,3.4,7.5,7.5v3.1c0,4.2-3.4,7.5-7.5,7.5h-3.6c-4.2,0-7.5-3.4-7.5-7.5v-3.1c0-4.2,3.4-7.5,7.5-7.5Z" transform="translate(641.4 -149) rotate(85.4)" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M399.4,282.6c-1.7,0-3.3-.6-4.6-1.7-1.5-1.2-2.3-3-2.5-4.8l-.4-4.8c-.3-3.9,2.6-7.4,6.5-7.7l4.3-.3c1.9-.2,3.7.4,5.2,1.7,1.5,1.2,2.3,3,2.5,4.8l.4,4.8c.2,1.9-.4,3.7-1.7,5.2-1.2,1.5-3,2.3-4.8,2.5l-4.3.3c-.2,0-.4,0-.6,0ZM403.4,263.7c-.2,0-.4,0-.5,0l-4.3.3c-3.7.3-6.5,3.5-6.2,7.2l.4,4.8c.3,3.7,3.5,6.5,7.2,6.2l4.3-.3c1.8-.1,3.4-1,4.6-2.3,1.2-1.4,1.7-3.1,1.6-4.9l-.4-4.8c-.3-3.5-3.2-6.2-6.7-6.2Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M412,279l-1.1-14c-.2-2,1.4-3.8,3.4-4h0c2-.2,3.8,1.4,4,3.4l1.1,14c.2,2-1.4,3.8-3.4,4h0c-2,.2-3.8-1.4-4-3.4Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M415.7,282.6c-2,0-3.7-1.6-3.9-3.6l-1.1-14c-.2-2.2,1.4-4,3.6-4.2,2.2-.2,4,1.4,4.2,3.6l1.1,14c0,1-.2,2.1-.9,2.9-.7.8-1.6,1.3-2.7,1.4-.1,0-.2,0-.3,0ZM412.2,279c.2,1.9,1.9,3.4,3.8,3.2.9,0,1.8-.5,2.4-1.2s.9-1.6.8-2.6l-1.1-14c-.2-1.9-1.9-3.4-3.8-3.2-1.9.2-3.4,1.9-3.2,3.8l1.1,14Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M392.6,261.9h0c0-1.2.8-2.2,2-2.3l12.1-1c1.2,0,2.2.8,2.3,2h0c0,1.2-.8,2.2-2,2.3l-12.1,1c-1.2,0-2.2-.8-2.3-2Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M394.8,264.1c-1.2,0-2.3-.9-2.4-2.2,0-.6.1-1.2.6-1.7.4-.5,1-.8,1.6-.8l12.1-1c.6,0,1.2.1,1.7.6.5.4.8,1,.8,1.6.1,1.3-.9,2.5-2.2,2.6l-12.1,1c0,0-.1,0-.2,0ZM406.9,258.8c0,0-.1,0-.2,0l-12.1,1c-.5,0-1,.3-1.3.7-.3.4-.5.9-.5,1.4,0,1.1,1.1,1.9,2.1,1.8l12.1-1c1.1,0,1.9-1,1.8-2.1,0-.5-.3-1-.7-1.3-.4-.3-.8-.5-1.3-.5Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M394.4,285.3h0c0-1.2.8-2.2,2-2.3l12.1-1c1.2,0,2.2.8,2.3,2h0c0,1.2-.8,2.2-2,2.3l-12.1,1c-1.2,0-2.2-.8-2.3-2Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M396.5,287.5c-1.2,0-2.3-.9-2.4-2.2,0-.6.1-1.2.6-1.7.4-.5,1-.8,1.6-.8l12.1-1c1.3-.1,2.5.9,2.6,2.2.1,1.3-.9,2.5-2.2,2.6l-12.1,1c0,0-.1,0-.2,0ZM408.6,282.2c0,0-.1,0-.2,0l-12.1,1c-.5,0-1,.3-1.3.7-.3.4-.5.9-.5,1.4h0c0,1.1,1,1.9,2.1,1.8l12.1-1c1.1,0,1.9-1,1.8-2.1,0-1-.9-1.8-2-1.8Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g filter="url(#drop-shadow-11)">
                  <path d="M397.4,278.3c-1.5,17.2-16.5,29.9-33.7,28.4-17.2-1.5-29.9-16.5-28.4-33.7,1.5-17.2,16.5-29.9,33.7-28.4,17.2,1.5,29.9,16.5,28.4,33.7Z" fill="#fff" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M366.4,307c-.9,0-1.8,0-2.7-.1-17.2-1.5-30.1-16.7-28.6-33.9.7-8.4,4.6-15.9,11-21.3,6.4-5.4,14.5-8,22.9-7.3,17.2,1.5,30.1,16.7,28.6,33.9-1.4,16.3-15.1,28.7-31.2,28.7ZM366.3,244.7c-7.3,0-14.3,2.5-19.9,7.3-6.3,5.3-10.2,12.8-10.9,21.1-1.4,17,11.2,32,28.3,33.5,17,1.4,32-11.2,33.5-28.3h.2s-.2,0-.2,0c1.4-17-11.2-32-28.3-33.5-.9,0-1.8-.1-2.7-.1Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M397.4,278.3c-1.5,17.2-16.5,29.9-33.7,28.4-17.2-1.5-29.9-16.5-28.4-33.7,1.5-17.2,16.5-29.9,33.7-28.4,17.2,1.5,29.9,16.5,28.4,33.7Z" fill="#fff" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M366.4,307c-.9,0-1.8,0-2.7-.1-17.2-1.5-30.1-16.7-28.6-33.9.7-8.4,4.6-15.9,11-21.3,6.4-5.4,14.5-8,22.9-7.3,17.2,1.5,30.1,16.7,28.6,33.9-1.4,16.3-15.1,28.7-31.2,28.7ZM366.3,244.7c-7.3,0-14.3,2.5-19.9,7.3-6.3,5.3-10.2,12.8-10.9,21.1-1.4,17,11.2,32,28.3,33.5,17,1.4,32-11.2,33.5-28.3h.2s-.2,0-.2,0c1.4-17-11.2-32-28.3-33.5-.9,0-1.8-.1-2.7-.1Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <g>
                    <path d="M366.7,276.3c.2-1.7,1.1-4,2.5-5.5,1.7-1.8,4.1-2.6,4.3-2.5.4.2-2.4,2.7-2.9,5-.4,2.3-3.9,2.9-3.9,2.9Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M366.4,276.5v-.3c.2-1.6,1-4,2.5-5.6,1.7-1.8,4.1-2.7,4.5-2.5,0,0,.1.1.1.2,0,.2-.2.5-.8,1.3-.8,1-1.9,2.4-2.2,3.8-.5,2.4-3.9,3.1-4,3.1h-.3ZM373.2,268.5c-.5.1-2.4.9-3.9,2.4-1.3,1.4-2.1,3.5-2.4,5.1.8-.2,3.1-.9,3.4-2.7.3-1.5,1.5-3,2.2-4,.2-.3.5-.6.6-.8Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M367.1,275.4c.3-3.3-3.5-6.1-3.9-6.2-.5,0,.6,1.7.8,3,.2,1.2.7,3.9,1.8,4.1,1.1.3,1.2-.2,1.3-.9Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M366.4,276.6c-.2,0-.4,0-.6,0-1.2-.3-1.7-2.9-2-4.3-.1-.5-.4-1.2-.6-1.7-.3-.8-.5-1.2-.3-1.4,0,0,.2-.1.3,0,.6.1,4.4,3,4.1,6.4h0c0,.4,0,.8-.4,1.1-.1,0-.3.1-.5.1ZM363.3,269.5c0,.2.2.6.3.9.2.6.5,1.2.6,1.8.2,1.1.7,3.7,1.7,4,.4,0,.6,0,.8,0,.2-.1.2-.4.2-.8h0c.3-2.9-2.8-5.4-3.6-5.9Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M367.6,275.4c2.5-.9,5.1,5.6,5.6,6.1.5.5-.7,0-1.2-.6s-1.8-1.4-2.3-1.9c-.4-.5-4.1-2.9-2.1-3.6Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M373.2,281.8c-.3,0-1.1-.4-1.5-.9-.3-.4-.9-.8-1.4-1.1-.4-.3-.7-.5-.9-.7,0,0-.3-.2-.5-.4-1.2-1-2.4-2-2.3-2.8,0-.3.3-.6.7-.7h0c2.1-.7,4.1,3,5.2,5,.3.5.5,1,.6,1,.1.1.2.2.2.4h0c0,.1-.2.2-.2.2,0,0,0,0,0,0ZM367.6,275.6c-.3.1-.4.2-.5.4-.1.7,1.4,1.8,2.1,2.4.2.2.4.3.5.4.2.2.5.4.8.7.5.4,1.1.8,1.4,1.2.2.2.5.4.7.6-.1-.2-.3-.5-.5-.8-1-1.8-3-5.5-4.7-4.9h0Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M366.5,276.2c.4-2.3-4.2-.7-5.8.3-1.6,1-3.6,3-2.8,2.7.9-.3,3.4-1.5,4.9-1.7,1.6-.2,3.5-.7,3.6-1.3Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M357.8,279.4c-.2,0-.2,0-.2-.1-.2-.5,2.2-2.4,3.1-3,1.2-.7,4.5-2,5.7-1.2.2.2.5.5.4,1.1h0c-.2.9-3.4,1.4-3.8,1.5-1.1.1-2.6.8-3.7,1.3-.5.2-.9.4-1.1.5,0,0-.1,0-.2,0ZM365.2,275.2c-1.3,0-3.4.8-4.5,1.4-1.1.7-2.3,1.8-2.7,2.3.2,0,.5-.2.9-.4,1.1-.5,2.7-1.1,3.8-1.3,2-.3,3.4-.8,3.5-1.1h0c0-.4,0-.6-.2-.7-.2-.1-.5-.2-.8-.2Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M366.8,275.9c-3,0-2,4.6-2.3,5.6-.3,1-.5,1.7-.2,1.3.3-.4.9-1.1,1.8-2.9.9-1.8,1.6-4,.7-4Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M364.2,283.1s0,0-.1,0c-.2-.1-.1-.3,0-1.1,0-.2.1-.4.2-.6,0-.2,0-.7,0-1.2,0-1.3,0-3.2.9-4.1.4-.4.9-.6,1.5-.5.2,0,.4.1.5.3.4.7-.3,2.6-1,4-.7,1.4-1.3,2.4-1.9,3,0,0-.1.2-.3.2ZM364.1,282.7h0ZM366.7,276.1c-.5,0-.9.1-1.2.4-.8.8-.8,2.5-.8,3.8,0,.6,0,1,0,1.3,0,.2-.1.4-.2.6,0,0,0,0,0,0,.4-.6.9-1.4,1.4-2.4.8-1.6,1.3-3.2,1-3.6,0,0,0,0-.2,0h0s0,0,0,0Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M367.5,275.4c2-1.1,3.2-.2,4.2.3,1,.5,2.8.9,2.4,1-.4,0-1.6-.2-2.8-.2-1.1,0-5.1-.4-3.8-1.1Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M373.8,276.9c-.3,0-.6,0-1.1-.1-.5,0-1-.1-1.5-.1-1,0-4.1-.2-4.2-1,0-.2,0-.4.4-.5h0c1.8-1,3-.4,4,.1.1,0,.2.1.3.2.5.2,1.1.4,1.6.6.8.3,1,.3,1,.6,0,0,0,.2-.2.2,0,0-.2,0-.3,0ZM369.2,275.1c-.5,0-1,.1-1.7.5h0c-.1,0-.2.1-.2.1.2.2,2.2.5,3.9.6.5,0,1.1,0,1.5.2,0,0,.2,0,.3,0-.5-.2-1.1-.4-1.5-.6-.1,0-.2-.1-.4-.2-.6-.3-1.2-.6-2-.6Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M367.8,270.7c.3,1.3.3,2.8-.1,3.7-.5.9-.6,1.6-.8,1.3-.3-.2-1-1-.7-2.3.2-1.2,1.2-3.8.9-4.2-.2-.4.6.9.8,1.5Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M366.9,276c0,0-.2,0-.2-.1-.3-.3-1-1.2-.8-2.4,0-.4.3-1.1.4-1.7.2-.9.6-2.2.5-2.4,0,0,0-.2,0-.3h0c0,0,.1,0,.1,0,.2,0,.9,1.5.9,1.7h0c.4,1.5.3,3-.2,3.8-.2.3-.3.6-.4.8-.2.4-.3.6-.5.7,0,0,0,0,0,0ZM367.2,269.9c0,.4-.2,1.1-.5,1.9-.2.6-.4,1.2-.4,1.7-.2,1,.3,1.7.6,2,0,0,.1-.3.2-.4,0-.2.2-.5.4-.8.4-.8.5-2.1.1-3.5h0c0-.2-.2-.5-.4-.8Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                </g>
              </g>
              <g filter="url(#drop-shadow-12)">
                <g>
                  <g>
                    <rect x="288.4" y="170.7" width="7.5" height="2.1" transform="translate(547.2 395) rotate(-169.2)" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M287.9,172.3l.5-2.7,8,1.5-.5,2.7-8-1.5ZM288.9,170.4l-.3,1.4,6.8,1.3.3-1.4-6.8-1.3Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <rect x="289" y="169.8" width="8.5" height="2.1" transform="translate(549.6 393.3) rotate(-169.2)" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M288.6,171.3l.5-2.7,8.9,1.7-.5,2.7-8.9-1.7ZM289.6,169.4l-.3,1.4,7.7,1.5.3-1.4-7.7-1.5Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <rect x="269" y="149.7" width="7.6" height="2.1" transform="translate(392.8 -136.9) rotate(83.7)" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M271,146.8l2.7-.3.9,8.1-2.7.3-.9-8.1ZM273.1,147.2l-1.5.2.8,6.9,1.5-.2-.8-6.9Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <rect x="269.6" y="148.7" width="8.5" height="2.1" transform="translate(392.7 -138.8) rotate(83.7)" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M271.9,145.4l2.7-.3,1,9-2.7.3-1-9ZM274.1,145.8l-1.5.2.9,7.8,1.5-.2-.9-7.8Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M274.4,165.6c-4-4.3-3.9-11,.2-15.3l8-8.3c1.5-1.6,3.5-1.6,5,0l14.6,15.8c1.5,1.6,1.4,3.6-.3,5l-8.9,7.3c-4.5,3.8-11.2,3.3-15.2-1l-3.3-3.6Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M271.2,156.4c.3-2.3,1.4-4.5,3.1-6.3l8-8.3c.8-.8,1.8-1.3,2.8-1.3,1,0,1.9.5,2.7,1.3l14.6,15.8c.8.9,1.2,1.8,1.1,2.8,0,1-.6,1.9-1.5,2.7l-8.9,7.3c-4.7,3.9-11.6,3.4-15.7-1.1l-3.3-3.6c-2.4-2.6-3.4-6.1-2.9-9.4ZM302.9,160.6c0,0,0-.1,0-.2,0-.8-.3-1.6-1-2.4l-14.6-15.8c-.7-.7-1.5-1.1-2.3-1.1-.8,0-1.6.4-2.3,1.1l-8,8.3c-4,4.1-4,10.6-.2,14.8l3.3,3.6c3.9,4.2,10.4,4.6,14.8,1l8.9-7.3c.7-.6,1.1-1.3,1.2-2Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <path d="M272.6,156.9c.3-2.1,1.2-4,2.8-5.6l7.1-7.4c.7-.8,1.6-1.2,2.5-1.1.9,0,1.7.4,2.5,1.2l13,14c.7.8,1.1,1.7,1,2.5,0,.9-.5,1.7-1.3,2.4l-7.9,6.5c-4.2,3.4-10.3,3-14-.9l-2.9-3.2c-2.2-2.3-3-5.4-2.6-8.4ZM300.7,160.6c0,0,0-.1,0-.2,0-.7-.2-1.4-.8-2.1l-13-14c-.6-.6-1.3-1-2-1-.7,0-1.4.3-2,1l-7.1,7.4c-3.5,3.6-3.6,9.4-.1,13.1l2.9,3.2c3.4,3.7,9.2,4.1,13.1.9l7.9-6.5c.6-.5,1-1.1,1.1-1.8Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <g>
                    <path d="M272.8,149.1l-1.1,1.1c-5.4,5.4-5.6,14.1-.4,19.7l1.7,1.8c5.2,5.6,13.9,6.1,19.7,1.1l1.1-1-.5,2.9-9.7,4.2-7.3-1.2-6.2-4.9-4.1-6.5s-1-5.7-1.1-5.9c0-.2.7-6,1-6.5.3-.6,3.8-4.7,4-4.7.2,0,2.9,0,2.9,0Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M265.1,156.6c.2-1.3.4-2.6.5-2.8.2-.4,1.6-2.1,2.1-2.6,1.9-2.2,2-2.2,2.1-2.3.2,0,2.1,0,3,0h.8s-1.6,1.6-1.6,1.6c-5.3,5.3-5.5,13.8-.4,19.3l1.7,1.8c5.1,5.5,13.6,6,19.2,1.1l1.8-1.6-.7,3.9-9.9,4.4-7.5-1.2h0c0,0-6.3-5-6.3-5l-4.1-6.6h0c-.1-.6-1-5.7-1.1-6,0-.1.2-2.1.5-3.9ZM270,149.5c-.5.5-3.6,4.1-3.8,4.6-.2.5-.9,5.9-.9,6.4,0,.2.6,3.5,1.1,5.8l4,6.4,6.1,4.8,7.1,1.1,9.4-4.1.3-1.8-.5.4c-5.9,5.1-14.8,4.6-20.1-1.1l-1.7-1.8c-5.3-5.8-5.1-14.6.4-20.1l.5-.5c-.8,0-1.7,0-2,0Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M269.7,170.7c-4.9-5.6-4.6-14.1.7-19.3l7.4-7.3-2-2.1-7.4,7.3c-6.4,6.3-6.8,16.5-.8,23.2l2.4,2.6c6.3,6.4,16.5,6.8,23.2,1l7.9-6.8-1.9-2.2-7.9,6.8c-5.6,4.9-14.1,4.5-19.3-.8l-2.3-2.5Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M263.2,159c.5-3.6,2.2-7.1,5-9.8l7.7-7.5,2.5,2.5-7.7,7.5c-5.2,5.1-5.5,13.4-.7,18.8l2.3,2.5c5.1,5.2,13.3,5.5,18.8.8l8.1-7,2.3,2.7-8.1,7c-6.9,6-17.3,5.5-23.7-1l-2.4-2.6c-3.4-3.9-4.8-9-4.1-13.8ZM275.8,142.5l-7.2,7.1c-6.3,6.2-6.6,16.2-.8,22.8l2.4,2.6c6.1,6.3,16.1,6.7,22.8.9l7.6-6.6-1.5-1.7-7.6,6.6c-5.7,5-14.4,4.6-19.7-.8l-2.3-2.5c-5-5.7-4.7-14.4.7-19.7l7.2-7.1-1.6-1.6Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="274.7" y="110.3" width="7.5" height="2.1" transform="translate(128.8 371.2) rotate(-81.9)" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M276.5,115.1l1.2-8.1,2.7.4-1.2,8.1-2.7-.4ZM278.2,107.8l-1,6.8,1.4.2,1-6.8-1.4-.2Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <rect x="275.2" y="111.3" width="8.5" height="2.1" transform="translate(128.6 373.1) rotate(-81.9)" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M277.5,116.7l1.3-9,2.7.4-1.3,9-2.7-.4ZM279.3,108.4l-1.1,7.8,1.4.2,1.1-7.8-1.4-.2Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <rect x="294.8" y="89.9" width="7.6" height="2.1" transform="translate(607.6 134.7) rotate(171.1)" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M294.7,92.9l-.4-2.7,8.1-1.3.4,2.7-8.1,1.3ZM295,90.8l.2,1.4,6.8-1.1-.2-1.4-6.8,1.1Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <rect x="295.4" y="90.9" width="8.5" height="2.1" transform="translate(609.8 136.5) rotate(171.1)" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M295.3,94l-.4-2.7,9-1.4.4,2.7-9,1.4ZM295.6,91.8l.2,1.4,7.7-1.2-.2-1.4-7.7,1.2Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M283.8,93.2c4.1-4.2,10.8-4.4,15.3-.5l8.7,7.6c1.7,1.5,1.7,3.5.2,5l-15.1,15.3c-1.6,1.6-3.6,1.5-5-.1l-7.7-8.6c-4-4.4-3.8-11.1.3-15.3l3.4-3.5Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M288.2,121.4c-.2-.2-.4-.4-.7-.6l-7.7-8.6c-4.1-4.5-3.9-11.4.3-15.7l3.4-3.5c4.3-4.3,11.2-4.5,15.7-.5l8.7,7.6c.9.8,1.4,1.7,1.4,2.7,0,1-.4,2-1.2,2.8l-15.1,15.3c-.8.8-1.8,1.3-2.8,1.2-.7,0-1.4-.3-2.1-.8ZM298.2,92.5c-4.3-3.3-10.4-2.9-14.2,1l-3.4,3.5c-4,4.1-4.2,10.6-.3,14.8l7.7,8.6c.7.7,1.5,1.1,2.3,1.2.8,0,1.6-.3,2.3-1.1l15.1-15.3c.7-.7,1.1-1.5,1-2.3,0-.8-.4-1.6-1.2-2.3l-8.7-7.6c-.2-.2-.4-.3-.6-.5Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M284.4,94.2c3.7-3.7,9.6-3.9,13.6-.5l7.7,6.8c1.5,1.3,1.5,3.1.2,4.5l-13.4,13.6c-1.4,1.4-3.2,1.4-4.5,0l-6.9-7.6c-3.5-3.9-3.4-9.8.3-13.6l3-3.1Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M288.3,119.3c-.2-.2-.4-.3-.6-.5l-6.9-7.6c-3.6-4-3.5-10.2.3-14l3-3.1c3.8-3.8,10-4.1,14-.5l7.7,6.8c.8.7,1.2,1.5,1.3,2.4,0,.9-.3,1.8-1.1,2.5l-13.4,13.6c-.7.7-1.6,1.1-2.5,1.1-.7,0-1.3-.2-1.9-.7ZM297.2,93.6c-3.8-2.9-9.2-2.6-12.6.9l-3,3.1c-3.6,3.6-3.7,9.4-.3,13.1l6.9,7.6c.6.6,1.3,1,2,1,.7,0,1.4-.3,2-.9l13.4-13.6c.6-.6.9-1.3.9-2,0-.7-.4-1.4-1-2l-7.7-6.8c-.2-.2-.3-.3-.5-.4Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M300.2,90.9l-1.1-1c-5.6-5.2-14.3-5-19.7.5l-1.8,1.8c-5.4,5.4-5.5,14.2-.2,19.7l1,1.1-2.9-.4-4.7-9.5.8-7.3,4.6-6.5,6.3-4.4s5.6-1.3,5.8-1.3c.2,0,6,.4,6.6.7.6.3,4.9,3.6,4.9,3.7,0,.2.2,2.9.2,2.9Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M275.3,112.9l-4.8-9.7.9-7.5,4.7-6.6,6.4-4.4h0c.6-.1,5.6-1.3,5.9-1.4.2,0,6.1.4,6.8.7.4.2,2.2,1.5,2.7,1.9,2.3,1.8,2.3,1.9,2.4,2,0,.2.2,2.1.2,2.9v.8s-1.6-1.6-1.6-1.6c-5.5-5.1-14-4.9-19.3.5l-1.8,1.8c-5.3,5.3-5.4,13.8-.2,19.3l1.6,1.7-3.9-.5ZM271.2,103.1l4.6,9.2,1.9.2-.4-.5c-5.4-5.7-5.3-14.6.2-20.1l1.8-1.8c5.5-5.6,14.4-5.8,20.1-.5l.5.5c0-.8-.1-1.7-.1-2-.5-.5-4.2-3.4-4.7-3.6-.5-.2-5.9-.7-6.4-.6-.2,0-3.5.8-5.8,1.3l-6.2,4.3-4.6,6.4-.8,7.2Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M278.5,88.8c5.4-5.2,13.8-5.2,19.3-.2l7.7,7.1,2-2.1-7.7-7.1c-6.6-6.1-16.8-6-23.2.2l-2.5,2.5c-6.1,6.5-6.1,16.8,0,23.2l7.2,7.6,2.1-2-7.2-7.6c-5.1-5.4-5.2-13.9,0-19.3l2.4-2.4Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M281.2,120.5l-7.4-7.8c-6.3-6.6-6.3-17,0-23.7l2.5-2.5c6.6-6.3,17-6.4,23.7-.2l7.9,7.3-2.4,2.6-7.9-7.3c-5.3-4.9-13.6-4.9-18.9.2l-2.4,2.4c-5,5.3-4.9,13.6,0,18.9l7.4,7.8-2.5,2.4ZM298.3,85.8c-6.4-4.9-15.6-4.5-21.6,1.2l-2.5,2.5c-6,6.4-6,16.4,0,22.8l7,7.3,1.6-1.6-7-7.3c-5.2-5.5-5.3-14.2,0-19.7l2.4-2.4c5.5-5.3,14.1-5.3,19.7-.2l7.4,6.9,1.5-1.7-7.4-6.9c-.4-.4-.8-.7-1.2-1Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                </g>
                <g>
                  <circle cx="313.1" cy="133.1" r="14.3" transform="translate(-25.2 168.6) rotate(-29)" fill="#fff" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M298.6,133c0-2.7.7-5.3,2.2-7.6,4.2-6.7,13.1-8.8,19.9-4.6,3.3,2,5.5,5.2,6.4,9,.9,3.8.2,7.6-1.8,10.9-2,3.3-5.2,5.5-9,6.4-3.8.9-7.6.2-10.9-1.8h0c-3.3-2-5.5-5.2-6.4-9-.3-1.1-.4-2.2-.4-3.3ZM327.2,133.1c0-1.1-.1-2.1-.4-3.2-.8-3.7-3.1-6.8-6.3-8.8-6.6-4.1-15.3-2.1-19.4,4.5-2,3.2-2.6,7-1.8,10.7.8,3.7,3.1,6.8,6.3,8.8h0c3.2,2,7,2.6,10.7,1.8,3.7-.8,6.8-3.1,8.8-6.3,1.4-2.3,2.1-4.8,2.1-7.4Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
              </g>
              <g id="Plant" filter="url(#drop-shadow-13)">
                <g>
                  <path d="M646.6,219.9c3.4.5,6.5,1.7,7.7,4.3-.9-.1-2.4.2-3.4.5-1.4.4-3.8,1.3-4.5,4-.7,2.7.5.7,2.7-1.3,1.6-1.4,3.8-1.8,5.7-1,0,.1,0,.3,0,.4,0,2-.5,3.7-1.2,5-1.2,2.1-3,3.3-4.1,2.8-3.8-1.9-1.1,7-4.4,8-1.2.3-2.6.1-3.9-.5-.6-2-1.1-3.7-.3-5.5.6-1.4,1.2-3.1.8-3.6-.3-.3-1.3.4-1.7.9-1.6,2.1-1.4,5-.6,7-1.7-1.3-3.2-3.2-4-5.4-.3-.9-.7-2-1.2-3.1,1.7-1.5,4.4-2.9,4.1-3.2-.5-.4-3.1.4-4.7,1.6-1.6-4.1-3.3-8.5-2.6-9.4.5-.8,3.2-1.4,6.3-1.7-.4,2.6.4,5.4,1,5.7.6.2-.1-3.4-.1-5.7,2-.1,4.2-.2,6.1,0h0c-1.8,2.8-1.8,7.9-1.1,8,.7.1.3-4.6,3.2-7.7Z" fill="#dbedda" stroke="#b0c1ae" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M644,243c-.9,0-1.8-.2-2.8-.7h0s0-.2,0-.2c-.6-2.1-1.1-3.8-.3-5.7,1.1-2.8.9-3.3.9-3.3-.1,0-1,.4-1.3.9-1.6,2.1-1.3,4.8-.6,6.8l.3.8-.7-.5c-1.9-1.4-3.3-3.4-4-5.5-.3-1-.8-2.1-1.2-3.1v-.2c0,0,0-.1,0-.1.8-.7,1.7-1.3,2.5-1.8.5-.4,1.2-.8,1.4-1-.6,0-2.7.5-4.2,1.7l-.3.2v-.3c-2.1-5-3.4-8.6-2.7-9.7.8-1.2,5.2-1.6,6.5-1.8h.3s0,.3,0,.3c-.4,2.4.3,4.8.8,5.3,0-.4,0-1.5-.1-2.3-.1-1-.2-2.2-.2-3.1v-.2s.2,0,.2,0c1.5-.1,3.9-.2,6.1,0h.5c0,0-.2.4-.2.4-1.6,2.6-1.6,6.8-1.3,7.5,0-.2.2-.7.3-1.1.3-1.6.8-4.3,2.7-6.4h0c0,0,.1,0,.1,0,4.1.7,6.8,2.2,7.9,4.5l.2.4h-.5c-1-.2-2.8.3-3.3.5-1.2.4-3.6,1.1-4.3,3.8-.1.5-.2.7-.2.9.2-.2.5-.5.8-.8.5-.5,1-1.1,1.7-1.6,1.6-1.5,4-1.9,6-1.1h.1c0,0,0,.2,0,.2,0,.1,0,.3,0,.4,0,2.3-.7,4.1-1.2,5.1-1.2,2.2-3.2,3.5-4.4,2.9-.5-.2-.9-.3-1.2-.1-.6.4-.8,1.8-.9,3.2-.2,2.1-.4,4.4-2.1,4.9-.4.1-.8.2-1.3.2ZM641.5,241.9c1.3.6,2.6.8,3.6.5,1.4-.4,1.6-2.6,1.8-4.5.2-1.7.3-3.1,1.2-3.6.4-.2,1-.2,1.6.1.9.4,2.6-.6,3.8-2.7.6-1,1.2-2.7,1.2-4.9,0,0,0-.1,0-.2-1.8-.7-3.9-.2-5.3,1-.6.6-1.2,1.2-1.6,1.6-.8.9-1.2,1.2-1.5,1.1-.3-.1-.3-.5,0-1.6.8-3,3.4-3.8,4.6-4.2.6-.2,2-.6,3-.6h0c-1.1-1.9-3.5-3.2-7.2-3.8-1.7,2-2.2,4.5-2.5,6.1-.2,1.1-.3,1.7-.8,1.6-.2,0-.3-.1-.4-.4-.5-1.1-.3-5.1,1.1-7.7-1.6-.1-3.5-.1-5.5,0,0,.9.1,1.9.2,2.8.2,1.9.2,2.6,0,2.9-.1,0-.2,0-.4,0-.8-.3-1.5-3.1-1.2-5.6-3.1.3-5.4.9-5.8,1.5-.6.8,1.2,5.6,2.5,8.9,1.6-1.1,4.2-2,4.8-1.4,0,0,.1.2.1.3,0,.3-.5.6-1.8,1.5-.8.5-1.6,1.1-2.3,1.7.4,1,.8,2.1,1.1,3,.6,1.8,1.8,3.5,3.2,4.8-.6-2-.6-4.5.9-6.4.3-.4,1.2-1.1,1.7-1.1h0c.2,0,.3,0,.4.2.2.3.3,1-.8,3.8-.7,1.7-.3,3.3.3,5.2Z" fill="#dbedda" stroke="#b0c1ae" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M658.6,239.5c2.3.8,4.4,3.4,4.8,5.3.2,1.2-.3,2.7-1.4,4.3-1.7-2-5.5-4.5-7-4.7-1.3-.1,1.5.7,3.9,3,.8.7,1.5,1.8,2.1,2.9-1.3,1.5-3.2,2.8-5.6,3.8-.7-2.3-2.7-5.9-4.1-6.2-1-.2,1,1.8,2.3,3.9.6.9.9,1.8,1,2.6-1.2.4-2.6.7-4.1.9-.6,0-1.1.2-1.6.3-.5-1.6-1.8-3.8-2.7-4-1-.2,1.1,2.2,1.3,4.4-2.7,1-3.8,2.6-4.7,1.7-.6-.5-1.5-2.6-2.1-5.2,1.9-1.5,4-.8,3.5-1.5-.4-.6-2.4-.4-3.8.2-.5-2.4-.8-5.1-.4-7.3,3.1-.7,6.1.7,6.8,1.2.7.5.9-.9-2.1-2.1-1.6-.6-3.2-.8-4.3-.7.5-2,1.3-3.9,2.4-5.6,1.3.2,2.5.5,3.4,1.2,2.1,1.5,3.3,3.9,3.5,3.3.3-.8-3.7-4.7-6-5.7,1.3-1.5,3.1-2.4,5.2-2.2,5.1.5,5.5,3.4,5.6,5,0,1.9,2.3.5,4.2,1.2Z" fill="#dbedda" stroke="#b0c1ae" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M643.4,258.2c-.3,0-.5,0-.7-.3-.7-.6-1.6-2.8-2.2-5.3v-.2s0-.1,0-.1c1.1-.9,2.3-1,3-1.1.1,0,.2,0,.3,0-.5-.3-2-.2-3.4.4h-.3c0,.1,0-.2,0-.2-.4-2-.8-4.9-.4-7.4v-.2s.2,0,.2,0c3.1-.7,6.2.7,7,1.2,0,0,0,0,0,0,0-.3-.6-1-2.3-1.7-1.7-.7-3.4-.7-4.2-.7h-.3s0-.3,0-.3c.6-2.2,1.4-4.2,2.4-5.6h0c0-.1.2-.1.2-.1,1.2.2,2.5.5,3.5,1.3,1.1.8,2,1.9,2.6,2.6.1.2.3.3.4.5-.6-1.1-3.6-4.1-5.7-5.1h-.3c0-.1.2-.4.2-.4,1.5-1.7,3.4-2.5,5.4-2.3,5.5.6,5.7,4,5.8,5.2,0,.3,0,.5.2.6.3.2.8.2,1.5.2.7,0,1.5-.1,2.3.2h0c2.5.8,4.6,3.5,4.9,5.5.2,1.3-.3,2.9-1.4,4.4l-.2.3-.2-.3c-1.4-1.7-4.2-3.6-5.9-4.3.8.5,2,1.2,3.2,2.3.7.6,1.4,1.6,2.2,2.9v.2c0,0,0,.1,0,.1-1.5,1.6-3.4,2.9-5.7,3.9h-.3c0,.1,0-.2,0-.2-.7-2.3-2.6-5.5-3.8-6,.2.3.6.8.9,1.3.5.7,1.1,1.4,1.5,2.2.7,1.1,1,2.1,1.1,2.7v.2s-.2,0-.2,0c-1.3.5-2.7.8-4.2.9-.5,0-1.1.1-1.6.3h-.2c0,0,0-.2,0-.2-.5-1.6-1.8-3.7-2.5-3.8,0,.2.3.6.4,1,.4.9,1,2,1.1,3.2v.2s-.2,0-.2,0c-1,.4-1.8.9-2.4,1.2-.7.4-1.3.8-1.8.8ZM641,252.7c.7,2.6,1.6,4.4,2,4.9.4.4.9.1,2-.5.6-.4,1.4-.8,2.3-1.2-.2-1-.7-2-1.1-2.8-.4-.8-.6-1.3-.4-1.6.1-.1.3-.2.5-.1,1.1.2,2.3,2.5,2.8,3.9.5-.1.9-.2,1.4-.2,1.3-.1,2.6-.4,3.8-.8-.2-.7-.5-1.6-1-2.3-.5-.7-1-1.5-1.5-2.1-.9-1.2-1.2-1.7-1-2,0-.1.2-.2.5-.1,1.4.3,3.5,3.8,4.2,6.1,2-.8,3.8-2.1,5.1-3.5-.7-1.2-1.3-2.1-2-2.7-1.3-1.2-2.7-2-3.5-2.5-.7-.4-.9-.5-.8-.8,0-.2.4-.2.6-.2,1.5.1,5.2,2.5,6.9,4.5.9-1.4,1.3-2.7,1.1-3.8-.3-1.8-2.3-4.3-4.6-5.1h0c-.7-.2-1.4-.2-2.1-.1-.8,0-1.4,0-1.9-.3-.2-.2-.4-.5-.4-1,0-1.3-.2-4.3-5.3-4.8-1.8-.2-3.4.5-4.8,1.9,2.3,1.2,6.2,4.9,5.8,5.9,0,.2-.2.2-.3.3-.3,0-.5-.3-1.1-.9-.6-.7-1.4-1.7-2.5-2.5-.8-.6-1.8-.9-3.1-1.2-.9,1.3-1.6,3.1-2.1,5,.9,0,2.5,0,4.1.7,1.9.8,2.6,1.7,2.7,2.2,0,.2,0,.3-.2.4,0,0-.3.1-.6,0-.8-.5-3.5-1.8-6.4-1.2-.4,2.2,0,4.8.3,6.7,1.4-.6,3.3-.7,3.8,0,.1.2.1.3,0,.4-.1.2-.4.3-.9.3-.6,0-1.7.2-2.6.9ZM646.2,251.8h0Z" fill="#dbedda" stroke="#b0c1ae" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M659.7,237.7c-5.4,4.2.1,7.5,3.3,8.2,2.6.6,4.5,0,7.5-1,2.8-1,7.4-6,7.1-5.9-.3,0-2.4-1.9-3.2-2.7-1.6-1.5-5.3-4.3-8.8-4.9-3.7-.6-4.6,3.9-4.6,4.7,0,.7-1,1.3-1.4,1.6Z" fill="#dbedda" stroke="#b0c1ae" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M665.1,246.4c-.7,0-1.4,0-2.1-.2-1.9-.4-5.2-2-5.7-4.3-.3-1.5.4-2.9,2.3-4.4h.2c.4-.4,1.1-.9,1.1-1.4,0-.5.5-2.9,2-4.2.8-.7,1.8-.9,2.9-.7,4.2.7,8.5,4.5,8.9,5h.1c1.7,1.7,2.7,2.5,2.9,2.6h.2s0,.2,0,.2c.1.5-4.8,5.3-7.3,6.2-2.1.7-3.7,1.3-5.5,1.3ZM665,231.6c-.7,0-1.4.2-1.9.7-1.4,1.1-1.8,3.3-1.8,3.8,0,.8-.8,1.3-1.3,1.7h-.2c-1.7,1.4-2.4,2.7-2.1,4,.5,2.1,3.5,3.5,5.3,3.9,2.6.6,4.5,0,7.3-1,2.4-.8,6.1-4.6,6.9-5.6-.4-.2-1.1-.9-2.8-2.5h-.1c-.5-.5-4.6-4.3-8.7-5-.2,0-.4,0-.6,0Z" fill="#dbedda" stroke="#b0c1ae" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M657,225c3.5,4,5.8-.3,6.2-2.7.3-2-.2-3.4-1.1-5.6-.9-2.1-4.9-5.5-4.9-5.2,0,.2-1.4,1.8-1.9,2.4-1.1,1.2-3.1,4.1-3.4,6.7-.3,2.8,3.2,3.4,3.8,3.4.6,0,1.1.7,1.3,1Z" fill="#dbedda" stroke="#b0c1ae" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M659.7,226.8c-1,0-1.9-.6-2.9-1.7h-.1c-.2-.4-.6-.9-1-.9-.4,0-2.3-.3-3.4-1.5-.5-.6-.7-1.3-.7-2.2.4-3.2,3.2-6.5,3.5-6.9h0c1.1-1.3,1.7-2.1,1.8-2.3v-.2s.2,0,.2,0c.5-.2,4.4,3.6,5.2,5.4.9,2.2,1.5,3.6,1.1,5.7-.3,1.5-1.3,3.9-3.1,4.4-.2,0-.4,0-.7,0ZM657.4,211.8c-.2.3-.7.9-1.8,2.2h0c-.3.4-3,3.6-3.4,6.7,0,.7.1,1.3.5,1.8.9,1,2.7,1.3,3,1.3.6,0,1.1.6,1.4,1h0c1.1,1.4,2.1,1.9,3.1,1.6,1.6-.4,2.5-2.7,2.7-4,.3-2-.2-3.3-1.1-5.5-.7-1.7-3.7-4.4-4.5-5Z" fill="#dbedda" stroke="#b0c1ae" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <path d="M650.1,245.5c.7-.4,1.1-1,1.6-1.6.5-.7,1.1-1.4,1.6-2.2,1-1.5,1.9-3.1,2.7-4.7,0-.2,0-.4-.3-.4-.4.2-.9.1-1.3,0-.3-.1-.5.3-.3.4.5.3,1.1.3,1.7.1,0-.1-.2-.2-.3-.4-.7,1.5-1.6,3-2.5,4.4-.5.7-.9,1.4-1.4,2-.5.7-1,1.4-1.7,1.9-.3.2,0,.6.3.4h0Z" fill="#dbedda" stroke="#b0c1ae" strokeMiterlimit="10" strokeWidth=".2"/>
                <path d="M656,236.8c2.4.4,4.8,0,7.1.2,2.7.3,5.2,1.6,7.9,2.2.3,0,.4-.4.1-.5-2.6-.5-5.1-1.8-7.8-2.2-2.4-.3-4.8.2-7.2-.2-.3,0-.5.4-.1.5h0Z" fill="#dbedda" stroke="#b0c1ae" strokeMiterlimit="10" strokeWidth=".2"/>
                <path d="M643.1,230.6c1.3,1.3,2.8,2.3,4.6,2.9.3.1.4-.4.1-.5-1.6-.6-3.1-1.6-4.3-2.8-.2-.2-.6.1-.4.4h0Z" fill="#dbedda" stroke="#b0c1ae" strokeMiterlimit="10" strokeWidth=".2"/>
                <g>
                  <path d="M677.7,222.1c.1.7-.3,2.2-1.1,4-1.1-.8-2.9-1.5-3.9-1.7-1.3-.2.8,1.9,2.9,3.5-.9,1.5-1.9,3.1-3.1,4.3-.9-1.7-2.7-4.4-3.5-5.1-1.2-.9-2.7-1-1.4,0,1.2.9,2.8,3.3,3.6,6.3-.4.3-.7.6-1.1.9-1.3.9-3.1,1.6-4.9,2.1-.5-2.7-2.5-7.5-3.3-7-.9.5,1.8,3.6,1.7,7.2-3.3.5-6.5,0-7.4-2.2-1.4-3.6,0-4.3-.8-5.1-.8-.8-.9.5-1.4-.9-.8-2.4-.3-4.6.7-6.4.2,0,.5,0,.7.2,1.8.5,4.2,1.8,4.5,2.4.5,1.2,2.3.2,1-1.3-1-1.2-3.9-1.9-5.7-2,1.4-1.8,3.4-3.1,5.2-3.5.9-.2,2.3-.2,3.9,0,1.4,3.6-.2,5.4.5,5.6.8.2,2.8-3.2,2.2-5.2,1.5.3,3.1.6,4.6,1-.4,2.4-1.1,3.1-.2,2.8.8-.2,1.7-1.4,2-2.3,2.3.8,4,1.6,4.2,2.3Z" fill="#dbedda" stroke="#b0c1ae" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M661.6,237.1c-2.5,0-4.8-.6-5.5-2.5-.9-2.2-.7-3.4-.6-4.2,0-.5,0-.7-.1-.9-.2-.2-.3-.2-.5-.2-.5.1-.7,0-1-.9-.7-2.3-.5-4.5.7-6.6v-.2c0,0,.3,0,.3,0,.3,0,.5,0,.7.2,1.8.5,4.3,1.8,4.6,2.5,0,.2.3.4.5.4.2,0,.4-.1.5-.3.1-.3,0-.7-.3-1.1-1-1.2-3.9-1.9-5.5-1.9h-.5s.3-.4.3-.4c1.3-1.7,3.3-3.1,5.3-3.6,1.1-.3,2.8-.2,4,0h.2s0,.2,0,.2c.9,2.3.6,3.8.4,4.8,0,.3-.1.6,0,.7,0,0,.2,0,.5-.4.9-1,1.8-3.2,1.4-4.5v-.4c-.1,0,.3,0,.3,0,1.5.3,3.1.6,4.6,1h.2c0,0,0,.3,0,.3-.2,1-.4,1.7-.5,2.1,0,.2-.1.3-.1.5,0,0,0,0,0,0,.8-.2,1.6-1.3,1.9-2.1v-.2c0,0,.3,0,.3,0,2.7.9,4.2,1.7,4.3,2.5.2.8-.3,2.3-1.1,4.1v.3c-.1,0-.4-.2-.4-.2-1.1-.8-2.8-1.5-3.8-1.6,0,0,0,0,0,0,.2.4,1.4,1.7,3.2,3.1h.2c0,.1-.1.3-.1.3-.9,1.6-2,3.2-3.1,4.4l-.2.3-.2-.3c-1-1.8-2.7-4.4-3.5-5-.5-.4-1.1-.6-1.4-.7,0,0,.2.2.3.3,1.2.9,2.8,3.3,3.7,6.5h0c0,.1-.1.3-.1.3-.3.3-.7.6-1.1.9-1.3.9-3.1,1.6-5,2.1h-.3c0,0,0-.2,0-.2-.5-3-2.4-6.8-2.9-6.8h0c-.2.1.2,1,.5,1.8.6,1.4,1.4,3.2,1.3,5.3v.2s-.2,0-.2,0c-.7,0-1.4.1-2.1.1ZM655,228.9c.2,0,.4,0,.7.3.4.4.3.8.2,1.3-.1.7-.3,1.8.6,3.9.8,2,4,2.4,6.9,2,0-1.9-.7-3.6-1.3-4.8-.5-1.2-.9-2-.3-2.4.1,0,.3,0,.5,0,1,.5,2.6,4.5,3.1,6.9,1.8-.5,3.4-1.1,4.6-2,.4-.3.7-.5,1-.7-.9-3-2.4-5.2-3.5-6.1-.4-.3-.6-.6-.6-.8,0-.1.1-.2.2-.3.4-.2,1.3.2,2,.7.8.7,2.5,3.1,3.4,4.8,1-1.1,1.9-2.4,2.7-3.9-.7-.6-3.5-2.8-3.2-3.6,0-.1.2-.3.6-.2.9.2,2.5.8,3.7,1.6.7-1.6,1.1-2.9.9-3.5h0c0-.4-1.1-1.2-3.8-2.1-.4.9-1.2,2-2.1,2.2-.2,0-.5.1-.6,0-.2-.2-.1-.5,0-1,.1-.4.3-1,.5-1.8-1.3-.3-2.6-.7-3.9-.9.2,1.6-.7,3.7-1.6,4.7-.4.4-.7.6-1,.5-.5-.1-.4-.6-.3-1.2.2-.9.4-2.3-.3-4.4-1.6-.2-2.9-.1-3.7,0-1.7.4-3.5,1.6-4.8,3.1,1.8.1,4.4.9,5.4,2,.7.8.5,1.5.4,1.7-.2.4-.5.6-.9.6-.4,0-.7-.3-.9-.7-.2-.5-2.4-1.7-4.3-2.3-.2,0-.4,0-.5-.1-1.1,1.9-1.3,3.9-.6,6,.2.5.3.6.3.6,0,0,0,0,0,0,0,0,.2,0,.3,0ZM667.4,226.6h0Z" fill="#dbedda" stroke="#b0c1ae" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <path d="M656.3,236.5c-.7-1.5-1.1-3.1-1.2-4.7,0-.9,0-1.6.8-2.2.6-.5,1.4-.8,2.1-1.1,1.4-.6,2.9-1,4.4-1.4,1.6-.5,3.1-1,4.7-1.5.3,0,.2-.6-.1-.5-1.8.6-3.6,1.1-5.4,1.7-1.7.5-3.4,1-4.9,1.8-.6.3-1.3.7-1.7,1.3-.4.6-.3,1.3-.3,2,.2,1.7.6,3.3,1.3,4.8.1.3.6,0,.4-.3h0Z" fill="#dbedda" stroke="#b0c1ae" strokeMiterlimit="10" strokeWidth=".2"/>
              </g>
              <g id="island-chairs">
                <g clipPath="url(#clippath)">
                  <g>
                    
                    <g>
                      <g>
                        <rect x="397.7" y="339.6" width="1.6" height="5.9" transform="translate(-125.6 304.1) rotate(-36.5)" fill="#dfd1b8" stroke="#aa9d87" strokeMiterlimit="10"/>
                        <path d="M395.7,340.6l1.7-1.3,3.8,5.1-1.7,1.3-3.8-5.1ZM397.3,340l-.9.7,3.2,4.3.9-.7-3.2-4.3Z" fill="#dfd1b8" stroke="#aa9d87" strokeMiterlimit="10"/>
                      </g>
                      <g>
                        <rect x="396.5" y="339.1" width="1.6" height="6.7" transform="translate(-125.8 303.4) rotate(-36.5)" fill="#dfd1b8" stroke="#aa9d87" strokeMiterlimit="10"/>
                        <path d="M394.4,340.2l1.7-1.3,4.2,5.7-1.7,1.3-4.2-5.7ZM396,339.7l-.9.7,3.7,5,.9-.7-3.7-5Z" fill="#dfd1b8" stroke="#aa9d87" strokeMiterlimit="10"/>
                      </g>
                      <g>
                        <rect x="395.5" y="364.2" width="5.9" height="1.6" transform="translate(-131.9 468.3) rotate(-53.5)" fill="#dfd1b8" stroke="#aa9d87" strokeMiterlimit="10"/>
                        <path d="M395.7,366.9l3.8-5.2,1.7,1.3-3.8,5.2-1.7-1.3ZM399.6,362.4l-3.2,4.4.9.7,3.2-4.4-.9-.7Z" fill="#dfd1b8" stroke="#aa9d87" strokeMiterlimit="10"/>
                      </g>
                      <g>
                        <rect x="394" y="364.2" width="6.7" height="1.6" transform="translate(-132.4 467.5) rotate(-53.5)" fill="#dfd1b8" stroke="#aa9d87" strokeMiterlimit="10"/>
                        <path d="M394.4,367.2l4.2-5.7,1.7,1.3-4.2,5.7-1.7-1.3ZM398.7,362.2l-3.7,5,.9.7,3.7-5-.9-.7Z" fill="#dfd1b8" stroke="#aa9d87" strokeMiterlimit="10"/>
                      </g>
                      <g>
                        <path d="M405.5,355.5c0,4.6-3.6,8.5-8.2,8.7l-9,.5c-1.7,0-2.9-1-2.9-2.7v-16.8c0-1.7,1.1-2.8,2.9-2.7l9,.5c4.6.3,8.2,4.1,8.2,8.7v3.8Z" fill="#dfd1b8" stroke="#aa9d87" strokeMiterlimit="10"/>
                        <path d="M385.1,362v-16.8c0-.9.3-1.7.9-2.2.6-.5,1.4-.8,2.3-.7l9,.5c4.8.3,8.5,4.2,8.5,9v3.8c0,4.8-3.7,8.7-8.5,9l-9,.5c-.9,0-1.7-.2-2.3-.7s-.9-1.3-.9-2.2ZM405.2,351.7c0-4.5-3.5-8.2-8-8.5l-9-.5c-.8,0-1.4.2-1.9.6-.5.4-.7,1.1-.7,1.9v16.8c0,.8.2,1.4.7,1.9.5.4,1.1.6,1.9.6l9-.5c4.5-.3,8-4,8-8.5v-3.8Z" fill="#dfd1b8" stroke="#aa9d87" strokeMiterlimit="10"/>
                      </g>
                      <g>
                        <path d="M404.6,355.3c0,4.1-3.2,7.5-7.3,7.8l-8,.5c-1.5,0-2.6-.9-2.6-2.4v-15c0-1.5,1-2.5,2.6-2.4l8,.5c4.1.2,7.3,3.6,7.3,7.8v3.4Z" fill="#dfd1b8" stroke="#aa9d87" strokeMiterlimit="10"/>
                        <path d="M386.5,361.1v-15c0-.8.3-1.5.7-1.9.5-.5,1.2-.7,1.9-.6l8,.5c4.2.2,7.4,3.7,7.4,7.9v3.4c0,4.2-3.3,7.6-7.4,7.9l-8,.5c-.8,0-1.5-.2-1.9-.6-.5-.5-.7-1.1-.7-1.9ZM404.5,351.9c0-4-3.2-7.4-7.2-7.6l-8-.5c-.7,0-1.3.2-1.8.6-.4.4-.7,1-.7,1.7v15c0,.7.2,1.3.7,1.7.4.4,1,.6,1.8.6l8-.5c4-.2,7.2-3.6,7.2-7.6v-3.4Z" fill="#dfd1b8" stroke="#aa9d87" strokeMiterlimit="10"/>
                      </g>
                      <g>
                        <path d="M397.6,365.9h1.2c6-.2,10.8-5.2,10.8-11.2v-2c0-6-4.8-10.9-10.8-11.1h-1.2s1.8-1.4,1.8-1.4l7.8,2.7,3.6,4.6,1,6.2-1.1,5.9s-2.4,3.8-2.5,4c-.1.1-3.6,3.1-4,3.3-.5.2-4.7.7-4.8.6-.1,0-1.7-1.5-1.7-1.5Z" fill="#dfd1b8" stroke="#aa9d87" strokeMiterlimit="10"/>
                        <path d="M396.9,341.8l2.5-1.9,8,2.8,3.7,4.7,1,6.3h0s-1.1,6-1.1,6h0c-.2.4-2.4,3.9-2.5,4-.1.2-3.6,3.1-4.2,3.3-.3.1-2.1.4-2.6.4-2.3.3-2.4.2-2.4.2-.1,0-1.3-1.1-1.7-1.5l-.5-.4h1.8c5.9-.3,10.5-5,10.5-10.9v-2c0-5.9-4.6-10.7-10.5-10.9h-1.9ZM409.8,352.8v2c0,6.2-4.8,11.2-11,11.4h-.6c.5.5,1,.9,1.2,1.1.6,0,4.2-.4,4.6-.6.4-.1,3.7-2.9,3.9-3.2,0-.1,1.5-2.4,2.5-3.9l1.1-5.9-1-6.1-3.5-4.4-7.6-2.6-1.2.9h.5c6.2.2,11,5.2,11,11.4Z" fill="#dfd1b8" stroke="#aa9d87" strokeMiterlimit="10"/>
                      </g>
                      <g>
                        <path d="M410.9,355.1c-.2,5.8-4.8,10.6-10.7,10.7l-8.2.3v2.3c0,0,8.3-.3,8.3-.3,7-.2,12.7-5.9,12.9-12.9v-2.8c-.2-7-5.8-12.7-12.9-12.9l-8.2-.3v2.3c0,0,8.1.3,8.1.3,5.8.2,10.5,4.9,10.7,10.7v2.7Z" fill="#dfd1b8" stroke="#aa9d87" strokeMiterlimit="10"/>
                        <path d="M391.8,365.8l8.4-.3c5.7-.2,10.3-4.8,10.4-10.5v-2.7c-.2-5.7-4.7-10.3-10.4-10.5l-8.4-.3v-2.8c0,0,8.5.3,8.5.3,7.2.2,12.9,6,13.1,13.2v2.8c-.2,7.2-5.9,13-13.1,13.2l-8.4.3v-2.8ZM392.3,339.4v1.8c0,0,7.9.3,7.9.3,6,.2,10.8,5,10.9,11v2.7s0,0,0,0c-.2,6-5,10.8-10.9,11l-7.9.3v1.8c0,0,8-.3,8-.3,6.9-.2,12.5-5.8,12.6-12.7v-2.8c-.2-6.9-5.7-12.5-12.6-12.7l-7.9-.3Z" fill="#dfd1b8" stroke="#aa9d87" strokeMiterlimit="10"/>
                      </g>
                    </g>
                  </g>
                  <g>
                    
                    <g>
                      <g>
                        <g>
                          <rect x="392" y="379.9" width="1.6" height="5.9" transform="translate(-44 714.6) rotate(-81.5)" fill="#dfd1b8"/>
                          <path d="M390,381.5l5.9.9-.3,1.7-5.9-.9.3-1.7ZM395.8,382.5l-5.7-.9-.2,1.5,5.7.9.2-1.5Z" fill="#aa9d87"/>
                        </g>
                        <g>
                          <path d="M389.5,383.4l.3-2.1,6.3.9-.3,2.1-6.3-.9ZM390.2,381.9l-.2,1.1,5.3.8.2-1.1-5.3-.8Z" fill="#dfd1b8"/>
                          <path d="M389.8,381.3l6.4,1-.3,2.2-6.4-1,.3-2.2ZM396.1,382.3l-6.2-.9-.3,2,6.2.9.3-2ZM390.2,381.8l5.5.8-.2,1.2-5.5-.8.2-1.2ZM395.5,382.7l-5.2-.8-.2,1,5.2.8.2-1Z" fill="#aa9d87"/>
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect x="391.2" y="380.3" width="1.6" height="6.7" transform="translate(-45.5 714.5) rotate(-81.5)" fill="#dfd1b8"/>
                          <path d="M388.8,382.3l6.7,1-.3,1.7-6.7-1,.3-1.7ZM395.3,383.4l-6.5-1-.2,1.5,6.5,1,.2-1.5Z" fill="#aa9d87"/>
                        </g>
                        <g>
                          <path d="M388.3,384.2l.3-2.1,7.1,1.1-.3,2.1-7.1-1.1ZM389,382.6l-.2,1.1,6.1.9.2-1.1-6.1-.9Z" fill="#dfd1b8"/>
                          <path d="M388.5,382l7.2,1.1-.3,2.2-7.2-1.1.3-2.2ZM395.6,383.2l-7-1-.3,2,7,1,.3-2ZM389,382.5l6.2.9-.2,1.2-6.2-.9.2-1.2ZM395,383.6l-6-.9-.2,1,6,.9.2-1Z" fill="#aa9d87"/>
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect x="407.9" y="395.8" width="1.6" height="5.9" transform="translate(-54.5 64.9) rotate(-8.5)" fill="#dfd1b8"/>
                          <path d="M409.1,395.6l.9,6-1.7.3-.9-6,1.7-.3ZM409.9,401.5l-.9-5.8-1.5.2.9,5.8,1.5-.2Z" fill="#aa9d87"/>
                        </g>
                        <g>
                          <path d="M408.1,402.1l-1-6.4,2.1-.3,1,6.4-2.1.3ZM407.7,396.1l.8,5.4,1.1-.2-.8-5.4-1.1.2Z" fill="#dfd1b8"/>
                          <path d="M409.3,395.3l1,6.5-2.2.3-1-6.5,2.2-.3ZM410.2,401.7l-.9-6.2-2,.3.9,6.2,2-.3ZM408.9,395.9l.8,5.5-1.2.2-.8-5.5,1.2-.2ZM409.6,401.3l-.8-5.3-1,.2.8,5.3,1-.2Z" fill="#aa9d87"/>
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect x="407.1" y="396.2" width="1.6" height="6.7" transform="translate(-54.7 64.8) rotate(-8.5)" fill="#dfd1b8"/>
                          <path d="M408.3,396.1l1,6.7-1.7.3-1-6.7,1.7-.3ZM409.1,402.7l-1-6.5-1.5.2,1,6.5,1.5-.2Z" fill="#aa9d87"/>
                        </g>
                        <g>
                          <path d="M407.4,403.3l-1.1-7.1,2.1-.3,1.1,7.1-2.1.3ZM406.9,396.6l.9,6.1,1.1-.2-.9-6.1-1.1.2Z" fill="#dfd1b8"/>
                          <path d="M408.5,395.8l1.1,7.2-2.2.3-1.1-7.2,2.2-.3ZM409.4,402.9l-1-7-2,.3,1,7,2-.3ZM408.1,396.4l.9,6.2-1.2.2-.9-6.2,1.2-.2ZM408.9,402.5l-.9-6-1,.2.9,6,1-.2Z" fill="#aa9d87"/>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M407,387.1c3.3,3.3,3.4,8.5.3,12l-6,6.8c-1.2,1.3-2.7,1.3-4,.1l-11.9-11.9c-1.2-1.2-1.2-2.8.1-4l6.8-6c3.5-3.1,8.7-2.9,12,.3l2.7,2.7Z" fill="#dfd1b8"/>
                          <path d="M398.1,381.8c2.3,0,4.5.9,6.2,2.6l2.7,2.7c3.3,3.3,3.4,8.6.3,12.1l-6,6.8c-.6.6-1.3,1-2,1-.7,0-1.4-.3-2-.9l-11.9-11.9c-.6-.6-.9-1.3-.9-2s.4-1.4,1-2l6.8-6c1.7-1.5,3.8-2.2,5.9-2.2ZM399.3,406.8s0,0,0,0c.7,0,1.4-.4,1.9-1l6-6.8c3.1-3.4,2.9-8.7-.3-11.9l-2.7-2.7c-1.7-1.7-3.9-2.5-6.1-2.5-2.1,0-4.1.7-5.8,2.2l-6.8,6c-.6.6-1,1.2-1,1.9s.3,1.4.9,2l11.9,11.9c.6.6,1.2.9,1.9.9Z" fill="#aa9d87"/>
                        </g>
                        <g>
                          <path d="M397.1,406.2l-11.9-11.9c-.7-.7-1-1.4-1-2.2,0-.8.4-1.5,1.1-2.1l6.8-6c3.5-3.2,9-3,12.3.3l2.7,2.7c3.4,3.4,3.5,8.8.3,12.3l-6,6.8c-.6.7-1.4,1.1-2.1,1.1s-1.5-.3-2.2-1ZM404.1,384.6c-3.2-3.2-8.3-3.3-11.7-.3l-6.8,6c-.6.5-.9,1.1-.9,1.8,0,.6.3,1.3.8,1.8l11.9,11.9c.6.6,1.2.8,1.8.8.6,0,1.3-.3,1.8-.9l6-6.8c3-3.4,2.9-8.5-.3-11.7l-2.7-2.7Z" fill="#dfd1b8"/>
                          <path d="M398.1,381.5c2.3,0,4.6.9,6.4,2.6l2.7,2.7c3.4,3.4,3.5,8.8.3,12.4l-6,6.8c-.6.7-1.4,1.1-2.2,1.1-.8,0-1.6-.3-2.2-1l-11.9-11.9c-.7-.7-1-1.4-1-2.2,0-.8.4-1.5,1.1-2.2l6.8-6c1.7-1.5,3.9-2.3,6-2.3ZM399.2,407.1s0,0,0,0c.8,0,1.5-.4,2.1-1.1l6-6.8c3.1-3.5,3-8.9-.3-12.3l-2.7-2.7c-1.7-1.7-4-2.6-6.3-2.6-2.1,0-4.2.8-5.9,2.3l-6.8,6c-.7.6-1,1.3-1.1,2.1,0,.8.3,1.5.9,2.1l11.9,11.9c.6.6,1.3.9,2.1.9ZM398.1,382c2.2,0,4.4.8,6,2.5l2.7,2.7c3.2,3.2,3.3,8.4.3,11.7l-6,6.8c-.5.6-1.2.9-1.8.9-.7,0-1.3-.3-1.9-.8l-11.9-11.9c-.6-.6-.9-1.2-.8-1.9,0-.7.3-1.3.9-1.8l6.8-6c1.6-1.5,3.7-2.2,5.7-2.2ZM404,384.6c-3.2-3.2-8.2-3.3-11.6-.3l-6.8,6c-.6.5-.9,1.1-.9,1.7,0,.6.3,1.2.8,1.8l11.9,11.9c.5.5,1.2.8,1.8.8.6,0,1.2-.3,1.7-.9l6-6.8c3-3.3,2.8-8.4-.3-11.6l-2.7-2.7Z" fill="#aa9d87"/>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M406.2,387.6c2.9,2.9,3,7.6.3,10.7l-5.4,6c-1,1.2-2.4,1.2-3.5,0l-10.6-10.6c-1.1-1.1-1.1-2.5,0-3.5l6-5.4c3.1-2.7,7.7-2.6,10.7.3l2.4,2.4Z" fill="#dfd1b8"/>
                          <path d="M398.3,382.9c2,0,4,.8,5.5,2.3l2.4,2.4c2.9,2.9,3.1,7.6.3,10.7l-5.4,6c-.5.6-1.1.9-1.8.9-.6,0-1.3-.3-1.8-.8l-10.6-10.6c-.5-.5-.8-1.2-.8-1.8,0-.6.3-1.3.9-1.8l6-5.4c1.5-1.3,3.3-2,5.2-2ZM399.3,405.1s0,0,0,0c.6,0,1.2-.3,1.7-.9l5.4-6c2.7-3,2.6-7.7-.3-10.6l-2.4-2.4c-1.5-1.5-3.5-2.3-5.5-2.3-1.8,0-3.7.6-5.1,2l-6,5.4c-.6.5-.9,1.1-.9,1.7,0,.6.3,1.2.8,1.7l10.6,10.6c.5.5,1.1.8,1.7.8Z" fill="#aa9d87"/>
                        </g>
                        <g>
                          <path d="M397.5,404.5l-10.6-10.6c-.6-.6-.8-1.2-.8-1.9,0-.7.3-1.3.9-1.8l6-5.4c3.1-2.8,7.9-2.6,10.8.3l2.4,2.4c3,3,3.1,7.7.3,10.8l-5.4,6c-.5.6-1.2.9-1.8.9-.7,0-1.3-.3-1.9-.8ZM403.7,385.3c-2.9-2.9-7.5-3-10.5-.3l-6,5.4c-.5.5-.8,1.1-.8,1.6,0,.6.2,1.2.8,1.7l10.6,10.6c.5.5,1.1.8,1.7.8.6,0,1.2-.3,1.6-.9l5.4-6c2.7-3,2.6-7.6-.3-10.5l-2.4-2.4Z" fill="#dfd1b8"/>
                          <path d="M398.3,382.7c2,0,4.1.8,5.6,2.3l2.4,2.4c3,3,3.1,7.8.3,10.9l-5.4,6c-.5.6-1.2.9-1.9,1-.7,0-1.3-.3-1.9-.8l-10.6-10.6c-.6-.6-.9-1.2-.8-1.9,0-.7.3-1.3,1-1.9l6-5.4c1.5-1.3,3.4-2,5.3-2ZM399.3,405.2s0,0,0,0c.6,0,1.3-.3,1.8-.9l5.4-6c2.8-3.1,2.6-7.8-.3-10.8l-2.4-2.4c-1.5-1.5-3.5-2.3-5.5-2.3-1.9,0-3.7.7-5.2,2l-6,5.4c-.6.5-.9,1.1-.9,1.8,0,.6.3,1.3.8,1.8l10.6,10.6c.5.5,1.1.8,1.8.8ZM398.3,383c2,0,3.9.8,5.4,2.3l2.4,2.4c2.9,2.9,3,7.5.3,10.6l-5.4,6c-.5.6-1.1.9-1.7.9-.6,0-1.2-.2-1.7-.8l-10.6-10.6c-.5-.5-.8-1.1-.8-1.7,0-.6.3-1.2.9-1.7l6-5.4c1.5-1.3,3.3-2,5.1-2ZM399.3,405s0,0,0,0c.6,0,1.1-.3,1.6-.8l5.4-6c2.7-3,2.5-7.6-.3-10.4l-2.4-2.4c-2.8-2.8-7.4-3-10.4-.3l-6,5.4c-.5.5-.8,1-.8,1.6,0,.6.2,1.2.7,1.7l10.6,10.6c.5.5,1,.7,1.6.7Z" fill="#aa9d87"/>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M408.7,400l.8-.9c4.1-4.4,4-11.2-.3-15.5l-1.4-1.4c-4.2-4.2-11.1-4.4-15.5-.3l-.9.8.3-2.3,7.5-3.6,5.8.7,5.1,3.7,3.4,5s1,4.4,1,4.6c0,.2-.4,4.7-.6,5.2-.2.5-2.8,3.8-3,3.8-.1,0-2.3.1-2.3.1Z" fill="#dfd1b8"/>
                          <path d="M399.3,376.9l5.8.7h0s5.1,3.7,5.1,3.7h0s3.4,5,3.4,5h0c0,.2,1,4.4,1,4.6,0,.2-.4,4.7-.6,5.2-.2.4-2.8,3.8-3,3.9-.1,0-2.1.1-2.3.1h-.1s.9-1,.9-1c2-2.1,3-4.9,3-7.7,0-2.9-1.2-5.6-3.2-7.6l-1.4-1.4c-2-2-4.8-3.2-7.6-3.2-2.9,0-5.6,1-7.7,3l-1,.9.3-2.5,7.5-3.7ZM405,377.7l-5.7-.7-7.4,3.6-.3,2.1.8-.7c2.1-2,4.9-3.1,7.8-3,2.9,0,5.7,1.2,7.7,3.3l1.4,1.4c2.1,2.1,3.2,4.8,3.3,7.7,0,2.9-1,5.7-3,7.8l-.7.8c.8,0,2-.1,2.1-.1.2-.2,2.7-3.3,2.9-3.8.2-.4.6-4.9.6-5.1,0-.2-1-4.3-1-4.6l-3.4-5-5-3.7Z" fill="#aa9d87"/>
                        </g>
                        <g>
                          <path d="M391.2,383.5l.4-3.1,7.6-3.7,5.9.7,5.1,3.7h0s3.4,5.1,3.4,5.1h0c.1.5,1,4.5,1,4.7,0,.2-.3,4.8-.6,5.3-.1.3-1.2,1.7-1.5,2.1-1.4,1.8-1.5,1.8-1.6,1.8-.1,0-1.7.1-2.3.1h-.6s1.2-1.3,1.2-1.3c4-4.3,3.9-11-.3-15.1l-1.4-1.4c-4.2-4.2-10.8-4.3-15.1-.3l-1.4,1.3ZM408,382.1l1.4,1.4c4.4,4.4,4.5,11.3.3,15.8l-.4.4c.7,0,1.4,0,1.6,0,.4-.4,2.7-3.3,2.8-3.7.2-.4.6-4.7.5-5,0-.1-.6-2.8-1-4.5l-3.4-4.9-5-3.6-5.6-.7-7.3,3.5-.2,1.5.4-.3c4.5-4.2,11.5-4.1,15.8.3Z" fill="#dfd1b8"/>
                          <path d="M399.2,376.6l5.9.7h0s5.1,3.7,5.1,3.7h0s3.4,5.1,3.4,5.1h0c.4,1.8,1,4.5,1,4.7,0,.2-.3,4.8-.6,5.3-.2.3-1.2,1.7-1.5,2.1-1.4,1.8-1.5,1.8-1.6,1.9-.1,0-1.7.1-2.3.1h-.8s1.3-1.4,1.3-1.4c4-4.3,3.9-10.9-.3-15l-1.4-1.4c-4.1-4.1-10.8-4.3-15-.3l-1.5,1.4.4-3.3,7.7-3.7ZM405.1,377.5l-5.9-.7-7.6,3.7-.4,2.9,1.3-1.2c4.3-4,11-3.9,15.2.3l1.4,1.4c4.2,4.2,4.3,10.9.3,15.2l-1.1,1.2h.5c1.4,0,2.2-.1,2.3-.2,0,0,.2,0,1.6-1.8.7-.9,1.4-1.9,1.5-2.1.2-.5.6-5.1.6-5.3,0-.1-.4-1.8-1-4.5h0c0-.1-3.4-5.1-3.4-5.1l-5.1-3.7ZM399.3,377.1l5.6.7h0s5,3.6,5,3.6h0s3.4,4.9,3.4,4.9h0c.4,1.7,1,4.4,1,4.5,0,.4-.4,4.7-.5,5.1-.2.4-2.5,3.3-2.9,3.7h0s0,0,0,0c-.3,0-1.2,0-1.6,0h-.1s.5-.5.5-.5c4.2-4.5,4.1-11.4-.3-15.7l-1.4-1.4c-4.3-4.3-11.2-4.5-15.7-.3l-.5.5.2-1.6,7.3-3.6ZM404.9,377.9l-5.6-.7-7.2,3.5-.2,1.3.2-.2c2.2-2.1,5-3.1,7.8-3.1,2.9,0,5.8,1.1,8.1,3.4l1.4,1.4c4.4,4.4,4.5,11.4.3,15.9l-.3.3c.4,0,1.2,0,1.4,0,.5-.5,2.7-3.3,2.8-3.7.2-.4.6-4.6.5-5,0-.1-.6-2.8-1-4.5l-3.3-4.9-4.9-3.6Z" fill="#aa9d87"/>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M410.4,383c4,4.2,4,10.9,0,15.1l-5.6,6,1.7,1.5,5.6-6c4.8-5.1,4.8-13.1,0-18.3l-2-2c-5.1-4.8-13.1-4.9-18.3,0l-6,5.6,1.5,1.7,6-5.6c4.3-4,10.9-4,15.1,0l1.9,1.9Z" fill="#dfd1b8"/>
                          <path d="M401,375.7c3.3,0,6.6,1.2,9.2,3.7l2,2c4.9,5.1,4.9,13.2,0,18.3l-5.6,6-1.7-1.6,5.6-6c4-4.2,4-10.9,0-15.1l-1.9-1.9c-4.2-4-10.8-4-15.1,0l-6,5.6-1.6-1.7h0s6-5.6,6-5.6c2.6-2.4,5.9-3.6,9.1-3.6ZM406.5,405.6l5.6-5.9c4.8-5.1,4.8-13.1,0-18.2l-2-2c-5.1-4.8-13.1-4.8-18.2,0l-5.9,5.6,1.5,1.6,5.9-5.6c4.3-4,11-4,15.2,0l1.9,1.9c4,4.3,4.1,10.9,0,15.2l-5.6,5.9,1.6,1.5Z" fill="#aa9d87"/>
                        </g>
                        <g>
                          <path d="M404.5,404.1l5.8-6.2c3.9-4.2,3.9-10.7,0-14.8l-1.9-1.9c-4.1-3.9-10.6-3.9-14.8,0l-6.2,5.8-1.9-2,6.2-5.8c5.2-4.9,13.4-4.9,18.6,0l2,2c4.9,5.2,5,13.4,0,18.6l-5.8,6.2-2-1.9ZM386.2,385l1.2,1.3,5.8-5.4c4.4-4.1,11.2-4.1,15.5,0l1.9,1.9h0c4.1,4.3,4.1,11.1,0,15.5l-5.4,5.8,1.3,1.2,5.4-5.8c4.7-5,4.7-12.9,0-17.9l-2-2c-5-4.7-12.9-4.8-17.9,0l-5.8,5.4Z" fill="#dfd1b8"/>
                          <path d="M401,375.5c3.4,0,6.7,1.2,9.4,3.7l2,2c5,5.2,5,13.4,0,18.7l-5.8,6.2-2.1-2,5.8-6.2c3.9-4.1,3.9-10.6,0-14.7l-1.9-1.9c-2.1-2-4.7-2.9-7.4-2.9-2.6,0-5.3,1-7.3,2.9l-6.2,5.8-2-2.1h0s6.2-5.8,6.2-5.8c2.6-2.5,6-3.7,9.3-3.7ZM406.5,405.9l5.7-6.1c4.9-5.2,4.9-13.3,0-18.5l-2-2c-5.2-4.9-13.3-4.9-18.5,0l-6.1,5.7,1.8,1.9,6.1-5.7c4.2-3.9,10.7-3.9,14.9,0l1.9,1.9c3.9,4.2,4,10.7,0,14.9l-5.7,6.1,1.9,1.8ZM401,376c3.2,0,6.5,1.2,9,3.6l2,2c4.8,5,4.8,12.9,0,18l-5.5,5.8-1.4-1.3,5.5-5.8c4.1-4.3,4-11.1,0-15.4l-1.9-1.9c-4.3-4.1-11.1-4.1-15.4,0l-5.8,5.5-1.3-1.4h0s5.8-5.5,5.8-5.5c2.5-2.4,5.7-3.5,9-3.5ZM406.5,405.2l5.4-5.8c4.7-5,4.7-12.8,0-17.8l-2-2c-5-4.7-12.8-4.7-17.8,0l-5.8,5.4,1.1,1.2,5.8-5.4c4.4-4.1,11.2-4.1,15.6,0l1.9,1.9c4.1,4.4,4.2,11.2,0,15.6l-5.4,5.8,1.2,1.1Z" fill="#aa9d87"/>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    
                    <g>
                      <g>
                        <g>
                          <rect x="397.7" y="411.6" width="1.6" height="5.9" transform="translate(-168.4 318.2) rotate(-36.5)" fill="#dfd1b8"/>
                          <path d="M397.4,411.6l3.6,4.8-1.4,1-3.6-4.8,1.4-1ZM400.8,416.4l-3.4-4.6-1.2.9,3.4,4.6,1.2-.9Z" fill="#aa9d87"/>
                        </g>
                        <g>
                          <path d="M395.7,412.6l1.7-1.3,3.8,5.1-1.7,1.3-3.8-5.1ZM397.3,412l-.9.7,3.2,4.3.9-.7-3.2-4.3Z" fill="#dfd1b8"/>
                          <path d="M397.5,411.2l3.9,5.2-1.8,1.3-3.9-5.2,1.8-1.3ZM401.2,416.4l-3.7-5-1.6,1.2,3.7,5,1.6-1.2ZM397.4,411.9l3.3,4.4-1,.7-3.3-4.4,1-.7ZM400.5,416.3l-3.1-4.2-.8.6,3.1,4.2.8-.6Z" fill="#aa9d87"/>
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect x="396.5" y="411.1" width="1.6" height="6.7" transform="translate(-168.6 317.5) rotate(-36.5)" fill="#dfd1b8"/>
                          <path d="M396,411.2l4,5.4-1.4,1-4-5.4,1.4-1ZM399.9,416.6l-3.9-5.3-1.2.9,3.9,5.3,1.2-.9Z" fill="#aa9d87"/>
                        </g>
                        <g>
                          <path d="M394.4,412.2l1.7-1.3,4.2,5.7-1.7,1.3-4.2-5.7ZM396,411.6l-.9.7,3.7,5,.9-.7-3.7-5Z" fill="#dfd1b8"/>
                          <path d="M396.1,410.9l4.3,5.8-1.8,1.3-4.3-5.8,1.8-1.3ZM400.3,416.7l-4.2-5.7-1.6,1.2,4.2,5.7,1.6-1.2ZM396,411.6l3.7,5-1,.7-3.7-5,1-.7ZM399.6,416.6l-3.6-4.9-.8.6,3.6,4.9.8-.6Z" fill="#aa9d87"/>
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect x="395.5" y="436.1" width="5.9" height="1.6" transform="translate(-189.8 497.5) rotate(-53.5)" fill="#dfd1b8"/>
                          <path d="M399.6,434l1.4,1-3.6,4.9-1.4-1,3.6-4.9ZM400.8,435.1l-1.2-.9-3.5,4.7,1.2.9,3.5-4.7Z" fill="#aa9d87"/>
                        </g>
                        <g>
                          <path d="M395.7,438.9l3.8-5.2,1.7,1.3-3.8,5.2-1.7-1.3ZM399.6,434.4l-3.2,4.4.9.7,3.2-4.4-.9-.7Z" fill="#dfd1b8"/>
                          <path d="M399.5,433.7l1.8,1.3-3.9,5.3-1.8-1.3,3.9-5.3ZM401.2,435l-1.6-1.2-3.8,5.1,1.6,1.2,3.8-5.1ZM399.6,434.4l1,.7-3.3,4.5-1-.7,3.3-4.5ZM400.5,435.1l-.8-.6-3.2,4.3.8.6,3.2-4.3Z" fill="#aa9d87"/>
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect x="394" y="436.2" width="6.7" height="1.6" transform="translate(-190.3 496.6) rotate(-53.5)" fill="#dfd1b8"/>
                          <path d="M398.7,433.8l1.4,1-4,5.4-1.4-1,4-5.4ZM399.9,434.8l-1.2-.9-3.9,5.3,1.2.9,3.9-5.3Z" fill="#aa9d87"/>
                        </g>
                        <g>
                          <path d="M394.4,439.2l4.2-5.7,1.7,1.3-4.2,5.7-1.7-1.3ZM398.7,434.2l-3.7,5,.9.7,3.7-5-.9-.7Z" fill="#dfd1b8"/>
                          <path d="M398.6,433.4l1.8,1.3-4.3,5.8-1.8-1.3,4.3-5.8ZM400.3,434.8l-1.6-1.2-4.2,5.7,1.6,1.2,4.2-5.7ZM398.7,434.1l1,.7-3.7,5-1-.7,3.7-5ZM399.6,434.9l-.8-.6-3.6,4.9.8.6,3.6-4.9Z" fill="#aa9d87"/>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M405.5,427.5c0,4.6-3.6,8.5-8.2,8.7l-9,.5c-1.7,0-2.9-1-2.9-2.7v-16.8c0-1.7,1.1-2.8,2.9-2.7l9,.5c4.6.3,8.2,4.1,8.2,8.7v3.8Z" fill="#dfd1b8"/>
                          <path d="M388,414.4c0,0,.1,0,.2,0l9,.5c4.7.3,8.3,4.1,8.3,8.8v3.8c0,4.7-3.6,8.5-8.3,8.8l-9,.5c-.9,0-1.6-.2-2.1-.7-.5-.5-.8-1.2-.8-2.1v-16.8c0-.9.3-1.6.8-2.1.5-.5,1.1-.7,1.9-.7ZM388,436.7c0,0,.1,0,.2,0l9-.5c4.6-.3,8.2-4.1,8.2-8.7v-3.8c0-4.6-3.6-8.4-8.2-8.7l-9-.5c-.8,0-1.5.2-2,.7-.5.5-.8,1.2-.8,2v16.8c0,.8.3,1.5.8,2,.5.4,1.1.7,1.8.7Z" fill="#aa9d87"/>
                        </g>
                        <g>
                          <path d="M385.1,434v-16.8c0-.9.3-1.7.9-2.2.6-.5,1.4-.8,2.3-.7l9,.5c4.8.3,8.5,4.2,8.5,9v3.8c0,4.8-3.7,8.7-8.5,9l-9,.5c-.9,0-1.7-.2-2.3-.7s-.9-1.3-.9-2.2ZM405.2,423.7c0-4.5-3.5-8.2-8-8.5l-9-.5c-.8,0-1.4.2-1.9.6-.5.4-.7,1.1-.7,1.9v16.8c0,.8.2,1.4.7,1.9.5.4,1.1.6,1.9.6l9-.5c4.5-.3,8-4,8-8.5v-3.8Z" fill="#dfd1b8"/>
                          <path d="M388,414.2c0,0,.2,0,.2,0l9,.5c4.8.3,8.5,4.2,8.5,9v3.8c0,4.8-3.7,8.8-8.5,9l-9,.5c-.9,0-1.7-.2-2.3-.8-.6-.5-.9-1.3-.9-2.3v-16.8c0-.9.3-1.7.9-2.3.5-.5,1.2-.8,2.1-.8ZM388,437c0,0,.2,0,.2,0l9-.5c4.7-.3,8.4-4.2,8.4-8.9v-3.8c0-4.7-3.7-8.6-8.4-8.9l-9-.5c-.9,0-1.7.2-2.2.7-.6.5-.8,1.3-.8,2.2v16.8c0,.9.3,1.7.8,2.2.5.5,1.2.7,2,.7ZM388,414.7c0,0,.1,0,.2,0l9,.5c4.5.3,8.1,4,8.1,8.5v3.8c0,4.5-3.5,8.3-8.1,8.5l-9,.5c-.8,0-1.5-.2-1.9-.6-.5-.5-.7-1.1-.7-1.9v-16.8c0-.8.3-1.5.7-1.9.4-.4,1-.6,1.7-.6ZM388,436.5c0,0,.1,0,.2,0l9-.5c4.5-.3,8-3.9,8-8.4v-3.8c0-4.5-3.5-8.2-8-8.4l-9-.5c-.8,0-1.4.2-1.9.6-.5.4-.7,1.1-.7,1.8v16.8c0,.8.2,1.4.7,1.8.4.4,1,.6,1.7.6Z" fill="#aa9d87"/>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M404.6,427.3c0,4.1-3.2,7.5-7.3,7.8l-8,.5c-1.5,0-2.6-.9-2.6-2.4v-15c0-1.5,1-2.5,2.6-2.4l8,.5c4.1.2,7.3,3.6,7.3,7.8v3.4Z" fill="#dfd1b8"/>
                          <path d="M389,415.6c0,0,.1,0,.2,0l8,.5c4.1.2,7.4,3.7,7.4,7.8v3.4c0,4.1-3.2,7.6-7.4,7.8l-8,.5c-.8,0-1.4-.2-1.9-.6-.5-.4-.7-1.1-.7-1.9v-15c0-.8.2-1.4.7-1.9.4-.4,1-.6,1.7-.6ZM389,435.5c0,0,.1,0,.2,0l8-.5c4.1-.2,7.3-3.6,7.3-7.7v-3.4c0-4.1-3.2-7.5-7.3-7.7l-8-.5c-.7,0-1.4.2-1.8.6-.4.4-.7,1-.7,1.8v15c0,.7.2,1.4.7,1.8.4.4,1,.6,1.6.6Z" fill="#aa9d87"/>
                        </g>
                        <g>
                          <path d="M386.5,433.1v-15c0-.8.3-1.5.7-1.9.5-.5,1.2-.7,1.9-.6l8,.5c4.2.2,7.4,3.7,7.4,7.9v3.4c0,4.2-3.3,7.6-7.4,7.9l-8,.5c-.8,0-1.5-.2-1.9-.6-.5-.5-.7-1.1-.7-1.9ZM404.5,423.9c0-4-3.2-7.4-7.2-7.6l-8-.5c-.7,0-1.3.2-1.8.6-.4.4-.7,1-.7,1.7v15c0,.7.2,1.3.7,1.7.4.4,1,.6,1.8.6l8-.5c4-.2,7.2-3.6,7.2-7.6v-3.4Z" fill="#dfd1b8"/>
                          <path d="M389,415.5c0,0,.1,0,.2,0l8,.5c4.2.2,7.5,3.7,7.5,7.9v3.4c0,4.2-3.3,7.7-7.5,7.9l-8,.5c-.8,0-1.5-.2-2-.6-.5-.5-.8-1.1-.8-2v-15c0-.8.3-1.5.8-2,.5-.4,1.1-.7,1.8-.7ZM389,435.6c0,0,.1,0,.2,0l8-.5c4.1-.2,7.4-3.7,7.4-7.8v-3.4c0-4.1-3.2-7.6-7.4-7.8l-8-.5c-.8,0-1.4.2-1.9.6-.5.4-.7,1.1-.7,1.9v15c0,.8.2,1.4.7,1.9.4.4,1,.6,1.7.6ZM389,415.8c0,0,.1,0,.2,0l8,.5c4.1.2,7.3,3.6,7.3,7.7v3.4c0,4.1-3.2,7.5-7.3,7.7l-8,.5c-.7,0-1.4-.2-1.8-.6-.4-.4-.7-1-.7-1.8v-15c0-.7.2-1.4.7-1.8.4-.4,1-.6,1.6-.6ZM389,435.3c0,0,.1,0,.2,0l8-.5c4-.2,7.2-3.6,7.2-7.6v-3.4c0-4-3.1-7.3-7.2-7.6l-8-.5c-.7,0-1.3.1-1.7.5-.4.4-.6,1-.6,1.7v15c0,.7.2,1.3.6,1.7.4.4.9.6,1.5.6Z" fill="#aa9d87"/>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M397.6,437.9h1.2c6-.2,10.8-5.2,10.8-11.2v-2c0-6-4.8-10.9-10.8-11.1h-1.2s1.8-1.4,1.8-1.4l7.8,2.7,3.6,4.6,1,6.2-1.1,5.9s-2.4,3.8-2.5,4c-.1.1-3.6,3.1-4,3.3-.5.2-4.7.7-4.8.6-.1,0-1.7-1.5-1.7-1.5Z" fill="#dfd1b8"/>
                          <path d="M399.4,412.1l7.9,2.7h0s3.6,4.6,3.6,4.6h0s1,6.2,1,6.2l-1.1,6c0,.2-2.4,3.8-2.5,4-.1.2-3.6,3.1-4.1,3.3-.4.2-4.7.7-4.9.6-.1,0-1.6-1.4-1.7-1.5h-.1c0,0,1.3-.1,1.3-.1,2.9,0,5.6-1.3,7.6-3.4s3.1-4.8,3.1-7.7v-2c0-2.9-1.1-5.6-3.1-7.7s-4.7-3.3-7.6-3.4h-1.3s2-1.6,2-1.6ZM407.2,414.9l-7.8-2.7-1.7,1.3h1c2.9.1,5.6,1.3,7.7,3.4,2,2.1,3.1,4.9,3.1,7.8v2c0,2.9-1.1,5.7-3.1,7.8-2,2.1-4.7,3.3-7.7,3.4h-1c.6.6,1.5,1.4,1.6,1.4.3,0,4.3-.4,4.8-.6.4-.2,3.9-3.1,4-3.2.1-.1,2.4-3.8,2.5-4l1.1-5.9-1-6.1-3.6-4.5Z" fill="#aa9d87"/>
                        </g>
                        <g>
                          <path d="M396.9,413.8l2.5-1.9,8,2.8,3.7,4.7,1,6.3h0s-1.1,6-1.1,6h0c-.2.4-2.4,3.9-2.5,4-.1.2-3.6,3.1-4.2,3.3-.3.1-2.1.4-2.6.4-2.3.3-2.4.2-2.4.2-.1,0-1.3-1.1-1.7-1.5l-.5-.4h1.8c5.9-.3,10.5-5,10.5-10.9v-2c0-5.9-4.6-10.7-10.5-10.9h-1.9ZM409.8,424.7v2c0,6.2-4.8,11.2-11,11.4h-.6c.5.5,1,.9,1.2,1.1.6,0,4.2-.4,4.6-.6.4-.1,3.7-2.9,3.9-3.2,0-.1,1.5-2.4,2.5-3.9l1.1-5.9-1-6.1-3.5-4.4-7.6-2.6-1.2.9h.5c6.2.2,11,5.2,11,11.4Z" fill="#dfd1b8"/>
                          <path d="M399.3,411.8l8.1,2.8h0s3.7,4.7,3.7,4.7h0s1,6.3,1,6.3h0c0,0-1.1,6-1.1,6h0c-.9,1.5-2.4,3.9-2.5,4-.1.2-3.6,3.1-4.2,3.4-.3.1-2.1.4-2.6.4-2.3.3-2.4.2-2.5.2-.1,0-1.1-1-1.7-1.5l-.6-.5h1.9c5.9-.3,10.5-5,10.5-10.9v-2c0-5.9-4.6-10.6-10.5-10.8h-2c0,0,2.6-2.1,2.6-2.1ZM407.3,414.7l-8-2.8-2.3,1.8h1.7c5.9.3,10.6,5.1,10.6,11v2c0,5.9-4.6,10.7-10.6,10.9h-1.7c0,0,.3.4.3.4,1,.9,1.7,1.5,1.7,1.5,0,0,.1,0,2.4-.2,1.1-.1,2.3-.3,2.6-.4.5-.2,4-3.2,4.1-3.3,0,0,1-1.5,2.5-3.9h0c0,0,1.1-6.1,1.1-6.1l-1-6.2-3.6-4.6ZM399.4,412.4l7.7,2.7h0s3.5,4.5,3.5,4.5h0s1,6.1,1,6.1l-1.1,5.9c-.9,1.5-2.4,3.8-2.5,3.9-.3.3-3.6,3.1-4,3.2-.4.2-4.1.6-4.6.6h0s0,0,0,0c-.2-.2-.9-.8-1.2-1.1h-.1c0,0,.7-.1.7-.1,6.1-.2,10.9-5.2,10.9-11.3v-2c0-6.1-4.8-11.1-10.9-11.3h-.7s1.3-1,1.3-1ZM407.1,415.1l-7.6-2.6-1,.8h.3c6.2.2,11,5.2,11,11.4v2c0,6.2-4.9,11.2-11,11.4h-.4c.3.3.9.8,1.1,1,.7,0,4.2-.5,4.6-.6.4-.1,3.7-2.9,3.9-3.2,0-.1,1.5-2.3,2.5-3.9l1.1-5.8-1-6-3.5-4.4Z" fill="#aa9d87"/>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M410.9,427.1c-.2,5.8-4.8,10.6-10.7,10.7l-8.2.3v2.3c0,0,8.3-.3,8.3-.3,7-.2,12.7-5.9,12.9-12.9v-2.8c-.2-7-5.8-12.7-12.9-12.9l-8.2-.3v2.3c0,0,8.1.3,8.1.3,5.8.2,10.5,4.9,10.7,10.7v2.7Z" fill="#dfd1b8"/>
                          <path d="M392,411.1l8.2.3c7.1.2,12.7,5.9,12.9,13v2.8c-.2,7.1-5.9,12.8-12.9,13l-8.2.3v-2.4c0,0,8.2-.3,8.2-.3,5.8-.2,10.5-4.9,10.6-10.7v-2.7c-.2-5.8-4.8-10.5-10.6-10.7l-8.2-.3v-2.4ZM392.1,440.3l8.1-.3c7-.2,12.6-5.9,12.8-12.9v-2.8c-.2-7-5.8-12.7-12.8-12.9l-8.1-.3v2.1c0,0,8.1.3,8.1.3,5.9.2,10.6,4.9,10.7,10.8v2.7c-.2,5.9-4.9,10.6-10.7,10.8l-8.1.3v2.1Z" fill="#aa9d87"/>
                        </g>
                        <g>
                          <path d="M391.8,437.8l8.4-.3c5.7-.2,10.3-4.8,10.4-10.5v-2.7c-.2-5.7-4.7-10.3-10.4-10.5l-8.4-.3v-2.8c0,0,8.5.3,8.5.3,7.2.2,12.9,6,13.1,13.2v2.8c-.2,7.2-5.9,13-13.1,13.2l-8.4.3v-2.8ZM392.3,411.4v1.8c0,0,7.9.3,7.9.3,6,.2,10.8,5,10.9,11v2.7s0,0,0,0c-.2,6-5,10.8-10.9,11l-7.9.3v1.8c0,0,8-.3,8-.3,6.9-.2,12.5-5.8,12.6-12.7v-2.8c-.2-6.9-5.7-12.5-12.6-12.7l-7.9-.3Z" fill="#dfd1b8"/>
                          <path d="M391.8,410.8l8.5.3c7.2.2,13,6,13.2,13.2v2.8c-.2,7.2-6,13-13.2,13.2l-8.5.3v-2.9c0,0,8.4-.3,8.4-.3,5.7-.2,10.2-4.8,10.4-10.4v-2.7c-.1-5.7-4.7-10.3-10.4-10.4l-8.5-.3v-2.9ZM391.9,440.5l8.4-.3c7.1-.2,12.9-6,13.1-13.1v-2.8c-.2-7.1-5.9-12.9-13.1-13.1l-8.4-.3v2.6c0,0,8.3.3,8.3.3,5.7.2,10.3,4.8,10.5,10.5v2.7c-.2,5.7-4.8,10.4-10.5,10.6l-8.4.3v2.6ZM392.3,411.3l8,.3c6.9.2,12.5,5.8,12.7,12.8v2.8c-.2,6.9-5.8,12.5-12.7,12.8l-8,.3v-1.9c0,0,7.9-.3,7.9-.3,5.9-.2,10.7-5,10.9-10.9v-2.7c-.2-5.9-4.9-10.7-10.9-10.9l-8-.3v-1.9ZM392.4,440l7.9-.3c6.9-.2,12.4-5.8,12.6-12.6v-2.8c-.2-6.9-5.7-12.4-12.6-12.6l-7.9-.3v1.7c0,0,7.8.3,7.8.3,6,.2,10.8,5,11,11v2.7c-.2,6-5,10.8-11,11l-7.9.3v1.7Z" fill="#aa9d87"/>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g filter="url(#drop-shadow-14)">
                    <g>
                      <g>
                        <rect x="395.5" y="341.7" width="5.9" height="1.6" transform="translate(436.9 -181.5) rotate(53.5)" fill="#dfd1b8"/>
                        <path d="M397.4,339.6l3.6,4.8-1.4,1-3.6-4.8,1.4-1ZM400.8,344.4l-3.4-4.6-1.2.9,3.4,4.6,1.2-.9Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M395.7,340.6l1.7-1.3,3.8,5.1-1.7,1.3-3.8-5.1ZM397.3,340l-.9.7,3.2,4.3.9-.7-3.2-4.3Z" fill="#dfd1b8"/>
                        <path d="M397.5,339.2l3.9,5.2-1.8,1.3-3.9-5.2,1.8-1.3ZM401.2,344.4l-3.7-5-1.6,1.2,3.7,5,1.6-1.2ZM397.4,339.9l3.3,4.4-1,.7h0s-3.2-4.4-3.2-4.4l1-.7ZM400.5,344.3l-3.1-4.2-.8.6,3.1,4.2.8-.6Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="394" y="341.7" width="6.7" height="1.6" transform="translate(436.4 -180.6) rotate(53.5)" fill="#dfd1b8"/>
                        <path d="M396,339.2l4,5.4-1.4,1-4-5.4,1.4-1ZM399.9,344.6l-3.9-5.3-1.2.9,3.9,5.3,1.2-.9Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M394.4,340.2l1.7-1.3,4.2,5.7-1.7,1.3-4.2-5.7ZM396,339.7l-.9.7,3.7,5,.9-.7-3.7-5Z" fill="#dfd1b8"/>
                        <path d="M396.1,338.9l4.3,5.8-1.8,1.3-4.3-5.8,1.8-1.3ZM400.3,344.7l-4.2-5.7-1.6,1.2,4.2,5.7,1.6-1.2ZM396,339.6l3.7,5-1,.7-3.7-5,1-.7ZM399.6,344.6l-3.6-4.9-.8.6,3.6,4.9.8-.6Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="395.5" y="364.2" width="5.9" height="1.6" transform="translate(-131.9 468.3) rotate(-53.5)" fill="#dfd1b8"/>
                        <path d="M399.6,362l1.4,1-3.6,4.9-1.4-1,3.6-4.9ZM400.8,363.1l-1.2-.9-3.5,4.7,1.2.9,3.5-4.7Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M395.7,366.9l3.8-5.2,1.7,1.3-3.8,5.2-1.7-1.3ZM399.6,362.4l-3.2,4.4.9.7,3.2-4.4-.9-.7Z" fill="#dfd1b8"/>
                        <path d="M399.5,361.7l1.8,1.3-3.9,5.3-1.8-1.3,3.9-5.3ZM401.2,363l-1.6-1.2-3.8,5.1,1.6,1.2,3.8-5.1ZM399.6,362.4l1,.7-3.3,4.5-1-.7,3.3-4.5ZM400.5,363.1l-.8-.6-3.2,4.3.8.6,3.2-4.3Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="394" y="364.2" width="6.7" height="1.6" transform="translate(-132.4 467.5) rotate(-53.5)" fill="#dfd1b8"/>
                        <path d="M398.7,361.8l1.4,1-4,5.4-1.4-1,4-5.4ZM399.9,362.8l-1.2-.9-3.9,5.3,1.2.9,3.9-5.3Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M394.4,367.2l4.2-5.7,1.7,1.3-4.2,5.7-1.7-1.3ZM398.7,362.2l-3.7,5,.9.7,3.7-5-.9-.7Z" fill="#dfd1b8"/>
                        <path d="M398.6,361.4l1.8,1.3-4.3,5.8-1.8-1.3,4.3-5.8ZM400.3,362.8l-1.6-1.2-4.2,5.7,1.6,1.2,4.2-5.7ZM398.7,362.1l1,.7-3.7,5-1-.7,3.7-5ZM399.6,362.9l-.8-.6-3.6,4.9.8.6,3.6-4.9Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M405.5,355.5c0,4.6-3.6,8.5-8.2,8.7l-9,.5c-1.7,0-2.9-1-2.9-2.7v-16.8c0-1.7,1.1-2.8,2.9-2.7l9,.5c4.6.3,8.2,4.1,8.2,8.7v3.8Z" fill="#dfd1b8"/>
                        <path d="M388,342.4c0,0,.1,0,.2,0l9,.5c4.7.3,8.3,4.1,8.3,8.8v3.8c0,4.7-3.6,8.5-8.3,8.8l-9,.5c-.9,0-1.6-.2-2.1-.7-.5-.5-.8-1.2-.8-2.1v-16.8c0-.9.3-1.6.8-2.1.5-.5,1.1-.7,1.9-.7ZM388,364.7c0,0,.1,0,.2,0l9-.5c4.6-.3,8.2-4.1,8.2-8.7v-3.8c0-4.6-3.6-8.4-8.2-8.7l-9-.5c-.8,0-1.5.2-2,.7-.5.5-.8,1.2-.8,2v16.8c0,.8.3,1.5.8,2,.5.4,1.1.7,1.8.7Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M385.1,362v-16.8c0-.9.3-1.7.9-2.2.6-.5,1.4-.8,2.3-.7l9,.5c4.8.3,8.5,4.2,8.5,9v3.8c0,4.8-3.7,8.7-8.5,9l-9,.5c-.9,0-1.7-.2-2.3-.7s-.9-1.3-.9-2.2ZM405.2,351.7c0-4.5-3.5-8.2-8-8.5l-9-.5c-.8,0-1.4.2-1.9.6-.5.4-.7,1.1-.7,1.9v16.8c0,.8.2,1.4.7,1.9.5.4,1.1.6,1.9.6l9-.5c4.5-.3,8-4,8-8.5v-3.8Z" fill="#dfd1b8"/>
                        <path d="M388,342.2c0,0,.2,0,.2,0l9,.5c4.8.3,8.5,4.2,8.5,9v3.8c0,4.8-3.7,8.8-8.5,9l-9,.5c-.9,0-1.7-.2-2.3-.8-.6-.5-.9-1.3-.9-2.3v-16.8c0-.9.3-1.7.9-2.3.5-.5,1.2-.8,2.1-.8ZM388,365c0,0,.2,0,.2,0l9-.5c4.7-.3,8.4-4.2,8.4-8.9v-3.8c0-4.7-3.7-8.6-8.4-8.9l-9-.5c-.9,0-1.7.2-2.2.7-.6.5-.8,1.3-.8,2.2v16.8c0,.9.3,1.7.8,2.2.5.5,1.2.7,2,.7ZM388,342.7c0,0,.1,0,.2,0l9,.5c4.5.3,8.1,4,8.1,8.5v3.8c0,4.5-3.5,8.3-8.1,8.5l-9,.5c-.8,0-1.5-.2-1.9-.6-.5-.5-.7-1.1-.7-1.9v-16.8c0-.8.3-1.5.7-1.9.4-.4,1-.6,1.7-.6ZM388,364.5c0,0,.1,0,.2,0l9-.5c4.5-.3,8-3.9,8-8.4v-3.8c0-4.5-3.5-8.2-8-8.4l-9-.5c-.8,0-1.4.2-1.9.6-.5.4-.7,1.1-.7,1.8v16.8c0,.8.2,1.4.7,1.8.4.4,1,.6,1.7.6Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M404.6,355.3c0,4.1-3.2,7.5-7.3,7.8l-8,.5c-1.5,0-2.6-.9-2.6-2.4v-15c0-1.5,1-2.5,2.6-2.4l8,.5c4.1.2,7.3,3.6,7.3,7.8v3.4Z" fill="#dfd1b8"/>
                        <path d="M389,343.7c0,0,.1,0,.2,0l8,.5c4.1.2,7.4,3.7,7.4,7.8v3.4c0,4.1-3.2,7.6-7.4,7.8l-8,.5c-.8,0-1.4-.2-1.9-.6-.5-.4-.7-1.1-.7-1.9v-15c0-.8.2-1.4.7-1.9.4-.4,1-.6,1.7-.6ZM389,363.5c0,0,.1,0,.2,0l8-.5c4.1-.2,7.3-3.6,7.3-7.7v-3.4c0-4.1-3.2-7.5-7.3-7.7l-8-.5c-.7,0-1.4.2-1.8.6-.4.4-.7,1-.7,1.8v15c0,.7.2,1.4.7,1.8.4.4,1,.6,1.6.6Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M386.5,361.1v-15c0-.8.3-1.5.7-1.9.5-.5,1.2-.7,1.9-.6l8,.5c4.2.2,7.4,3.7,7.4,7.9v3.4c0,4.2-3.3,7.6-7.4,7.9l-8,.5c-.8,0-1.5-.2-1.9-.6-.5-.5-.7-1.1-.7-1.9ZM404.5,351.9c0-4-3.2-7.4-7.2-7.6l-8-.5c-.7,0-1.3.2-1.8.6-.4.4-.7,1-.7,1.7v15c0,.7.2,1.3.7,1.7.4.4,1,.6,1.8.6l8-.5c4-.2,7.2-3.6,7.2-7.6v-3.4Z" fill="#dfd1b8"/>
                        <path d="M389,343.5c0,0,.1,0,.2,0l8,.5c4.2.2,7.5,3.7,7.5,7.9v3.4c0,4.2-3.3,7.7-7.5,7.9l-8,.5c-.8,0-1.5-.2-2-.6-.5-.5-.8-1.1-.8-2v-15c0-.8.3-1.5.8-2,.5-.4,1.1-.7,1.8-.7ZM389,363.6c0,0,.1,0,.2,0l8-.5c4.1-.2,7.4-3.7,7.4-7.8v-3.4c0-4.1-3.2-7.6-7.4-7.8l-8-.5c-.8,0-1.4.2-1.9.6-.5.4-.7,1.1-.7,1.9v15c0,.8.2,1.4.7,1.9.4.4,1,.6,1.7.6ZM389,343.8c0,0,.1,0,.2,0l8,.5c4.1.2,7.3,3.6,7.3,7.7v3.4c0,4.1-3.2,7.5-7.3,7.7l-8,.5c-.7,0-1.4-.2-1.8-.6-.4-.4-.7-1-.7-1.8v-15c0-.7.2-1.4.7-1.8.4-.4,1-.6,1.6-.6ZM389,363.4c0,0,.1,0,.2,0l8-.5c4-.2,7.2-3.6,7.2-7.6v-3.4c0-4-3.1-7.3-7.2-7.6l-8-.5c-.7,0-1.3.2-1.7.5-.4.4-.6,1-.6,1.7v15c0,.7.2,1.3.6,1.7.4.4.9.6,1.5.6Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M397.6,365.9h1.2c6-.2,10.8-5.2,10.8-11.2v-2c0-6-4.8-10.9-10.8-11.1h-1.2s1.8-1.4,1.8-1.4l7.8,2.7,3.6,4.6,1,6.2-1.1,5.9s-2.4,3.8-2.5,4c-.1.1-3.6,3.1-4,3.3-.5.2-4.7.7-4.8.6-.1,0-1.7-1.5-1.7-1.5Z" fill="#dfd1b8"/>
                        <path d="M399.4,340.1l7.9,2.7h0s3.6,4.6,3.6,4.6h0s1,6.2,1,6.2h0s-1.1,6-1.1,6h0c0,.2-2.4,3.8-2.5,4-.1.2-3.6,3.1-4.1,3.3-.4.2-4.7.7-4.9.6-.1,0-1.6-1.4-1.7-1.5h-.1c0,0,1.3-.1,1.3-.1,2.9,0,5.6-1.3,7.6-3.4s3.1-4.8,3.1-7.7v-2c0-2.9-1.1-5.6-3.1-7.7s-4.7-3.3-7.6-3.4h-1.3s2-1.6,2-1.6ZM407.2,342.9l-7.8-2.7-1.7,1.3h1c2.9.1,5.6,1.3,7.7,3.4,2,2.1,3.1,4.9,3.1,7.8v2c0,2.9-1.1,5.7-3.1,7.8-2,2.1-4.7,3.3-7.7,3.4h-1c.6.6,1.5,1.4,1.6,1.4.3,0,4.3-.4,4.8-.6.4-.2,3.9-3.1,4-3.2.1-.1,2.4-3.8,2.5-4l1.1-5.9-1-6.1-3.6-4.5Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M396.9,341.8l2.5-1.9,8,2.8,3.7,4.7,1,6.3h0s-1.1,6-1.1,6h0c-.2.4-2.4,3.9-2.5,4-.1.2-3.6,3.1-4.2,3.3-.3.1-2.1.4-2.6.4-2.3.3-2.4.2-2.4.2-.1,0-1.3-1.1-1.7-1.5l-.5-.4h1.8c5.9-.3,10.5-5,10.5-10.9v-2c0-5.9-4.6-10.7-10.5-10.9h-1.9ZM409.8,352.8v2c0,6.2-4.8,11.2-11,11.4h-.6c.5.5,1,.9,1.2,1.1.6,0,4.2-.4,4.6-.6.4-.1,3.7-2.9,3.9-3.2,0-.1,1.5-2.4,2.5-3.9l1.1-5.9-1-6.1-3.5-4.4-7.6-2.6-1.2.9h.5c6.2.2,11,5.2,11,11.4Z" fill="#dfd1b8"/>
                        <path d="M399.3,339.8l8.1,2.8h0s3.7,4.7,3.7,4.7h0s1,6.3,1,6.3h0c0,0-1.1,6-1.1,6h0c-.9,1.5-2.4,3.9-2.5,4-.1.2-3.6,3.1-4.2,3.4-.3.1-2.1.4-2.6.4-2.3.3-2.4.2-2.5.2-.1,0-1.1-1-1.7-1.5l-.6-.5h1.9c5.9-.3,10.5-5,10.5-10.9v-2c0-5.9-4.6-10.6-10.5-10.8h-2c0,0,2.6-2.1,2.6-2.1ZM407.3,342.7l-8-2.8-2.3,1.8h1.7c5.9.3,10.6,5.1,10.6,11v2c0,5.9-4.6,10.7-10.6,10.9h-1.7c0,0,.3.4.3.4,1,.9,1.7,1.5,1.7,1.5,0,0,.1,0,2.4-.2,1.1-.1,2.3-.3,2.6-.4.5-.2,4-3.2,4.1-3.3,0,0,1-1.5,2.5-3.9h0c0-.1,1.1-6.1,1.1-6.1l-1-6.2-3.6-4.6ZM399.4,340.4l7.7,2.7h0s3.5,4.5,3.5,4.5h0s1,6.1,1,6.1h0s-1.1,5.9-1.1,5.9h0c-.9,1.5-2.4,3.8-2.5,3.9-.3.3-3.6,3.1-4,3.2-.4.2-4.1.6-4.6.6h0s0,0,0,0c-.2-.2-.9-.8-1.2-1.1h-.1c0,0,.7-.1.7-.1,6.1-.2,10.9-5.2,10.9-11.3v-2c0-6.1-4.8-11.1-10.9-11.3h-.7s1.3-1,1.3-1ZM407.1,343.2l-7.6-2.6-1,.8h.3c6.2.2,11,5.2,11,11.4v2c0,6.2-4.9,11.2-11,11.4h-.4c.3.3.9.8,1.1,1,.7,0,4.2-.5,4.6-.6.4-.1,3.7-2.9,3.9-3.2,0-.1,1.5-2.3,2.5-3.9l1.1-5.8-1-6-3.5-4.4Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M410.9,355.1c-.2,5.8-4.8,10.6-10.7,10.7l-8.2.3v2.3c0,0,8.3-.3,8.3-.3,7-.2,12.7-5.9,12.9-12.9v-2.8c-.2-7-5.8-12.7-12.9-12.9l-8.2-.3v2.3c0,0,8.1.3,8.1.3,5.8.2,10.5,4.9,10.7,10.7v2.7Z" fill="#dfd1b8"/>
                        <path d="M392,339.1l8.2.3c7.1.2,12.7,5.9,12.9,13v2.8c-.2,7.1-5.9,12.8-12.9,13l-8.2.3v-2.4c0,0,8.2-.3,8.2-.3,5.8-.2,10.5-4.9,10.6-10.7v-2.7c-.2-5.8-4.8-10.5-10.6-10.7l-8.2-.3v-2.4ZM392.1,368.3l8.1-.3c7-.2,12.6-5.9,12.8-12.9v-2.8c-.2-7-5.8-12.7-12.8-12.9l-8.1-.3v2.1c0,0,8.1.3,8.1.3,5.9.2,10.6,4.9,10.7,10.8v2.7c-.2,5.9-4.9,10.6-10.7,10.8l-8.1.3v2.1Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M391.8,365.8l8.4-.3c5.7-.2,10.3-4.8,10.4-10.5v-2.7c-.2-5.7-4.7-10.3-10.4-10.5l-8.4-.3v-2.8c0,0,8.5.3,8.5.3,7.2.2,12.9,6,13.1,13.2v2.8c-.2,7.2-5.9,13-13.1,13.2l-8.4.3v-2.8ZM392.3,339.4v1.8c0,0,7.9.3,7.9.3,6,.2,10.8,5,10.9,11v2.7s0,0,0,0c-.2,6-5,10.8-10.9,11l-7.9.3v1.8c0,0,8-.3,8-.3,6.9-.2,12.5-5.8,12.6-12.7v-2.8c-.2-6.9-5.7-12.5-12.6-12.7l-7.9-.3Z" fill="#dfd1b8"/>
                        <path d="M391.8,338.8l8.5.3c7.2.2,13,6,13.2,13.2v2.8c-.2,7.2-6,13-13.2,13.2l-8.5.3v-2.9c0,0,8.4-.3,8.4-.3,5.7-.2,10.2-4.8,10.4-10.4v-2.7c-.1-5.7-4.7-10.3-10.4-10.4l-8.5-.3v-2.9ZM391.9,368.5l8.4-.3c7.1-.2,12.9-6,13.1-13.1v-2.8c-.2-7.1-5.9-12.9-13.1-13.1l-8.4-.3v2.6c0,0,8.3.3,8.3.3,5.7.2,10.3,4.8,10.5,10.5v2.7c-.2,5.7-4.8,10.4-10.5,10.6l-8.4.3v2.6ZM392.3,339.3l8,.3c6.9.2,12.5,5.8,12.7,12.8v2.8c-.2,6.9-5.8,12.5-12.7,12.8l-8,.3v-1.9c0,0,7.9-.3,7.9-.3,5.9-.2,10.7-5,10.9-10.9v-2.7c-.2-5.9-4.9-10.7-10.9-10.9l-8-.3v-1.9ZM392.4,368l7.9-.3c6.9-.2,12.4-5.8,12.6-12.6v-2.8c-.2-6.9-5.7-12.4-12.6-12.6l-7.9-.3v1.7c0,0,7.8.3,7.8.3,6,.2,10.8,5,11,11v2.7c-.2,6-5,10.8-11,11l-7.9.3v1.7Z" fill="#aa9d87"/>
                      </g>
                    </g>
                  </g>
                  <g filter="url(#drop-shadow-15)">
                    <g>
                      <g>
                        <rect x="389.9" y="382" width="5.9" height="1.6" transform="translate(61 -53.9) rotate(8.5)" fill="#dfd1b8"/>
                        <path d="M390,381.5l5.9.9-.3,1.7-5.9-.9.3-1.7ZM395.8,382.5l-5.7-.9-.2,1.5,5.7.9.2-1.5Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M389.5,383.4l.3-2.1,6.3.9-.3,2.1-6.3-.9ZM390.2,381.9l-.2,1.1,5.3.8.2-1.1-5.3-.8Z" fill="#dfd1b8"/>
                        <path d="M389.8,381.3l6.4,1-.3,2.2-6.4-1,.3-2.2ZM396.1,382.3l-6.2-.9-.3,2,6.2.9.3-2ZM390.2,381.8l5.5.8-.2,1.2-5.5-.8.2-1.2ZM395.5,382.7l-5.2-.8-.2,1,5.2.8.2-1Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="388.6" y="382.8" width="6.7" height="1.6" transform="translate(61.1 -53.8) rotate(8.5)" fill="#dfd1b8"/>
                        <path d="M388.8,382.3l6.7,1-.3,1.7-6.7-1,.3-1.7ZM395.3,383.4l-6.5-1-.2,1.5,6.5,1,.2-1.5Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M388.3,384.2l.3-2.1,7.1,1.1-.3,2.1-7.1-1.1ZM389,382.6l-.2,1.1,6.1.9.2-1.1-6.1-.9Z" fill="#dfd1b8"/>
                        <path d="M388.5,382l7.2,1.1-.3,2.2-7.2-1.1.3-2.2ZM395.6,383.2l-7-1-.3,2,7,1,.3-2ZM389,382.5l6.2.9-.2,1.2-6.2-.9.2-1.2ZM395,383.6l-6-.9-.2,1,6,.9.2-1Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="405.7" y="397.9" width="5.9" height="1.6" transform="translate(74.9 862) rotate(-98.5)" fill="#dfd1b8"/>
                        <path d="M409.1,395.6l.9,6-1.7.3-.9-6,1.7-.3ZM409.9,401.5l-.9-5.8-1.5.2.9,5.8,1.5-.2Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M408.1,402.1l-1-6.4,2.1-.3,1,6.4-2.1.3ZM407.7,396.1l.8,5.4,1.1-.2-.8-5.4-1.1.2Z" fill="#dfd1b8"/>
                        <path d="M409.3,395.3l1,6.5-2.2.3-1-6.5,2.2-.3ZM410.2,401.7l-.9-6.2-2,.3.9,6.2,2-.3ZM408.9,395.9l.8,5.5-1.2.2-.8-5.5,1.2-.2ZM409.6,401.3l-.8-5.3-1,.2.8,5.3,1-.2Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="404.6" y="398.7" width="6.7" height="1.6" transform="translate(73.1 862.1) rotate(-98.5)" fill="#dfd1b8"/>
                        <path d="M408.3,396.1l1,6.7-1.7.3-1-6.7,1.7-.3ZM409.1,402.7l-1-6.5-1.5.2,1,6.5,1.5-.2Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M407.4,403.3l-1.1-7.1,2.1-.3,1.1,7.1-2.1.3ZM406.9,396.6l.9,6.1,1.1-.2-.9-6.1-1.1.2Z" fill="#dfd1b8"/>
                        <path d="M408.5,395.8l1.1,7.2-2.2.3-1.1-7.2,2.2-.3ZM409.4,402.9l-1-7-2,.3,1,7,2-.3ZM408.1,396.4l.9,6.2-1.2.2-.9-6.2,1.2-.2ZM408.9,402.5l-.9-6-1,.2.9,6,1-.2Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M407,387.1c3.3,3.3,3.4,8.5.3,12l-6,6.8c-1.2,1.3-2.7,1.3-4,.1l-11.9-11.9c-1.2-1.2-1.2-2.8.1-4l6.8-6c3.5-3.1,8.7-2.9,12,.3l2.7,2.7Z" fill="#dfd1b8"/>
                        <path d="M398.1,381.8c2.3,0,4.5.9,6.2,2.6l2.7,2.7c3.3,3.3,3.4,8.6.3,12.1l-6,6.8c-.6.6-1.3,1-2,1-.7,0-1.4-.3-2-.9l-11.9-11.9c-.6-.6-.9-1.3-.9-2s.4-1.4,1-2l6.8-6c1.7-1.5,3.8-2.2,5.9-2.2ZM399.3,406.8s0,0,0,0c.7,0,1.4-.4,1.9-1l6-6.8c3.1-3.4,2.9-8.7-.3-11.9l-2.7-2.7c-1.7-1.7-3.9-2.5-6.1-2.5-2.1,0-4.1.7-5.8,2.2l-6.8,6c-.6.6-1,1.2-1,1.9s.3,1.4.9,2l11.9,11.9c.6.6,1.2.9,1.9.9Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M397.1,406.2l-11.9-11.9c-.7-.7-1-1.4-1-2.2,0-.8.4-1.5,1.1-2.1l6.8-6c3.5-3.2,9-3,12.3.3l2.7,2.7c3.4,3.4,3.5,8.8.3,12.3l-6,6.8c-.6.7-1.4,1.1-2.1,1.1s-1.5-.3-2.2-1ZM404.1,384.6c-3.2-3.2-8.3-3.3-11.7-.3l-6.8,6c-.6.5-.9,1.1-.9,1.8,0,.6.3,1.3.8,1.8l11.9,11.9c.6.6,1.2.8,1.8.8.6,0,1.3-.3,1.8-.9l6-6.8c3-3.4,2.9-8.5-.3-11.7l-2.7-2.7Z" fill="#dfd1b8"/>
                        <path d="M398.1,381.5c2.3,0,4.6.9,6.4,2.6l2.7,2.7c3.4,3.4,3.5,8.8.3,12.4l-6,6.8c-.6.7-1.4,1.1-2.2,1.1-.8,0-1.6-.3-2.2-1l-11.9-11.9c-.7-.7-1-1.4-1-2.2,0-.8.4-1.5,1.1-2.2l6.8-6c1.7-1.5,3.9-2.3,6-2.3ZM399.2,407.1s0,0,0,0c.8,0,1.5-.4,2.1-1.1l6-6.8c3.1-3.5,3-8.9-.3-12.3l-2.7-2.7c-1.7-1.7-4-2.6-6.3-2.6-2.1,0-4.2.8-5.9,2.3l-6.8,6c-.7.6-1,1.3-1.1,2.1,0,.8.3,1.5.9,2.1l11.9,11.9c.6.6,1.3.9,2.1.9ZM398.1,382c2.2,0,4.4.8,6,2.5l2.7,2.7c3.2,3.2,3.3,8.4.3,11.7l-6,6.8c-.5.6-1.2.9-1.8.9-.7,0-1.3-.3-1.9-.8l-11.9-11.9c-.6-.6-.9-1.2-.8-1.9,0-.7.3-1.3.9-1.8l6.8-6c1.6-1.5,3.7-2.2,5.7-2.2ZM404,384.6c-3.2-3.2-8.2-3.3-11.6-.3l-6.8,6c-.6.5-.9,1.1-.9,1.7,0,.6.3,1.2.8,1.8l11.9,11.9c.5.5,1.2.8,1.8.8.6,0,1.2-.3,1.7-.9l6-6.8c3-3.3,2.8-8.4-.3-11.6l-2.7-2.7Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M406.2,387.6c2.9,2.9,3,7.6.3,10.7l-5.4,6c-1,1.2-2.4,1.2-3.5,0l-10.6-10.6c-1.1-1.1-1.1-2.5,0-3.5l6-5.4c3.1-2.7,7.7-2.6,10.7.3l2.4,2.4Z" fill="#dfd1b8"/>
                        <path d="M398.3,382.9c2,0,4,.8,5.5,2.3l2.4,2.4c2.9,2.9,3.1,7.6.3,10.7l-5.4,6c-.5.6-1.1.9-1.8.9-.6,0-1.3-.3-1.8-.8l-10.6-10.6c-.5-.5-.8-1.2-.8-1.8,0-.6.3-1.3.9-1.8l6-5.4c1.5-1.3,3.3-2,5.2-2ZM399.3,405.1s0,0,0,0c.6,0,1.2-.3,1.7-.9l5.4-6c2.7-3,2.6-7.7-.3-10.6l-2.4-2.4c-1.5-1.5-3.5-2.3-5.5-2.3-1.8,0-3.7.6-5.1,2l-6,5.4c-.6.5-.9,1.1-.9,1.7,0,.6.3,1.2.8,1.7l10.6,10.6c.5.5,1.1.8,1.7.8Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M397.5,404.5l-10.6-10.6c-.6-.6-.8-1.2-.8-1.9,0-.7.3-1.3.9-1.8l6-5.4c3.1-2.8,7.9-2.6,10.8.3l2.4,2.4c3,3,3.1,7.7.3,10.8l-5.4,6c-.5.6-1.2.9-1.8.9-.7,0-1.3-.3-1.9-.8ZM403.7,385.3c-2.9-2.9-7.5-3-10.5-.3l-6,5.4c-.5.5-.8,1.1-.8,1.6,0,.6.2,1.2.8,1.7l10.6,10.6c.5.5,1.1.8,1.7.8.6,0,1.2-.3,1.6-.9l5.4-6c2.7-3,2.6-7.6-.3-10.5l-2.4-2.4Z" fill="#dfd1b8"/>
                        <path d="M398.3,382.7c2,0,4.1.8,5.6,2.3l2.4,2.4c3,3,3.1,7.8.3,10.9l-5.4,6c-.5.6-1.2.9-1.9,1-.7,0-1.3-.3-1.9-.8l-10.6-10.6c-.6-.6-.9-1.2-.8-1.9,0-.7.3-1.3,1-1.9l6-5.4c1.5-1.3,3.4-2,5.3-2ZM399.3,405.2s0,0,0,0c.6,0,1.3-.3,1.8-.9l5.4-6c2.8-3.1,2.6-7.8-.3-10.8l-2.4-2.4c-1.5-1.5-3.5-2.3-5.5-2.3-1.9,0-3.7.7-5.2,2l-6,5.4c-.6.5-.9,1.1-.9,1.8,0,.6.3,1.3.8,1.8l10.6,10.6c.5.5,1.1.8,1.8.8ZM398.3,383c2,0,3.9.8,5.4,2.3l2.4,2.4c2.9,2.9,3,7.5.3,10.6l-5.4,6c-.5.6-1.1.9-1.7.9-.6,0-1.2-.2-1.7-.8l-10.6-10.6c-.5-.5-.8-1.1-.8-1.7,0-.6.3-1.2.9-1.7l6-5.4c1.5-1.3,3.3-2,5.1-2ZM399.3,405s0,0,0,0c.6,0,1.1-.3,1.6-.8l5.4-6c2.7-3,2.5-7.6-.3-10.4l-2.4-2.4c-2.8-2.8-7.4-3-10.4-.3l-6,5.4c-.5.5-.8,1-.8,1.6,0,.6.2,1.2.7,1.7l10.6,10.6c.5.5,1,.7,1.6.7Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M408.7,400l.8-.9c4.1-4.4,4-11.2-.3-15.5l-1.4-1.4c-4.2-4.2-11.1-4.4-15.5-.3l-.9.8.3-2.3,7.5-3.6,5.8.7,5.1,3.7,3.4,5s1,4.4,1,4.6c0,.2-.4,4.7-.6,5.2-.2.5-2.8,3.8-3,3.8-.1,0-2.3.1-2.3.1Z" fill="#dfd1b8"/>
                        <path d="M399.3,376.9l5.8.7h0s5.1,3.7,5.1,3.7h0s3.4,5,3.4,5h0c0,.2,1,4.4,1,4.6,0,.2-.4,4.7-.6,5.2-.2.4-2.8,3.8-3,3.9-.1,0-2.1.1-2.3.1h-.1s.9-1,.9-1c2-2.1,3-4.9,3-7.7,0-2.9-1.2-5.6-3.2-7.6l-1.4-1.4c-2-2-4.8-3.2-7.6-3.2-2.9,0-5.6,1-7.7,3l-1,.9.3-2.5,7.5-3.7ZM405,377.7l-5.7-.7-7.4,3.6-.3,2.1.8-.7c2.1-2,4.9-3.1,7.8-3,2.9,0,5.7,1.2,7.7,3.3l1.4,1.4c2.1,2.1,3.2,4.8,3.3,7.7,0,2.9-1,5.7-3,7.8l-.7.8c.8,0,2-.1,2.1-.1.2-.2,2.7-3.3,2.9-3.8.2-.4.6-4.9.6-5.1,0-.2-1-4.3-1-4.6l-3.4-5-5-3.7Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M391.2,383.5l.4-3.1,7.6-3.7,5.9.7,5.1,3.7h0s3.4,5.1,3.4,5.1h0c.1.5,1,4.5,1,4.7,0,.2-.3,4.8-.6,5.3-.1.3-1.2,1.7-1.5,2.1-1.4,1.8-1.5,1.8-1.6,1.8-.1,0-1.7.1-2.3.1h-.6s1.2-1.3,1.2-1.3c4-4.3,3.9-11-.3-15.1l-1.4-1.4c-4.2-4.2-10.8-4.3-15.1-.3l-1.4,1.3ZM408,382.1l1.4,1.4c4.4,4.4,4.5,11.3.3,15.8l-.4.4c.7,0,1.4,0,1.6,0,.4-.4,2.7-3.3,2.8-3.7.2-.4.6-4.7.5-5,0-.1-.6-2.8-1-4.5l-3.4-4.9-5-3.6-5.6-.7-7.3,3.5-.2,1.5.4-.3c4.5-4.2,11.5-4.1,15.8.3Z" fill="#dfd1b8"/>
                        <path d="M399.2,376.6l5.9.7h0s5.1,3.7,5.1,3.7h0s3.4,5.1,3.4,5.1h0c.4,1.8,1,4.5,1,4.7,0,.2-.3,4.8-.6,5.3-.2.3-1.2,1.7-1.5,2.1-1.4,1.8-1.5,1.8-1.6,1.9-.1,0-1.7.1-2.3.1h-.8s1.3-1.4,1.3-1.4c4-4.3,3.9-10.9-.3-15l-1.4-1.4c-4.1-4.1-10.8-4.3-15-.3l-1.5,1.4.4-3.3,7.7-3.7ZM405.1,377.5l-5.9-.7-7.6,3.7-.4,2.9,1.3-1.2c4.3-4,11-3.9,15.2.3l1.4,1.4c4.2,4.2,4.3,10.9.3,15.2l-1.1,1.2h.5c1.4,0,2.2-.1,2.3-.2,0,0,.2,0,1.6-1.8.7-.9,1.4-1.9,1.5-2.1.2-.5.6-5.1.6-5.3,0-.1-.4-1.8-1-4.5h0c0-.1-3.4-5.1-3.4-5.1l-5.1-3.7ZM399.3,377.1l5.6.7h0s5,3.6,5,3.6h0s3.4,4.9,3.4,4.9h0c.4,1.7,1,4.4,1,4.5,0,.4-.4,4.7-.5,5.1-.2.4-2.5,3.3-2.9,3.7h0s0,0,0,0c-.3,0-1.2,0-1.6,0h-.1s.5-.5.5-.5c4.2-4.5,4.1-11.4-.3-15.7l-1.4-1.4c-4.3-4.3-11.2-4.5-15.7-.3l-.5.5.2-1.6,7.3-3.6ZM404.9,377.9l-5.6-.7-7.2,3.5-.2,1.3.2-.2c2.2-2.1,5-3.1,7.8-3.1,2.9,0,5.8,1.1,8.1,3.4l1.4,1.4c4.4,4.4,4.5,11.4.3,15.9l-.3.3c.4,0,1.2,0,1.4,0,.5-.5,2.7-3.3,2.8-3.7.2-.4.6-4.6.5-5,0-.1-.6-2.8-1-4.5l-3.3-4.9-4.9-3.6Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M410.4,383c4,4.2,4,10.9,0,15.1l-5.6,6,1.7,1.5,5.6-6c4.8-5.1,4.8-13.1,0-18.3l-2-2c-5.1-4.8-13.1-4.9-18.3,0l-6,5.6,1.5,1.7,6-5.6c4.3-4,10.9-4,15.1,0l1.9,1.9Z" fill="#dfd1b8"/>
                        <path d="M401,375.7c3.3,0,6.6,1.2,9.2,3.7l2,2c4.9,5.1,4.9,13.2,0,18.3l-5.6,6-1.7-1.6,5.6-6c4-4.2,4-10.9,0-15.1l-1.9-1.9c-4.2-4-10.8-4-15.1,0l-6,5.6-1.6-1.7h0s6-5.6,6-5.6c2.6-2.4,5.9-3.6,9.1-3.6ZM406.5,405.6l5.6-5.9c4.8-5.1,4.8-13.1,0-18.2l-2-2c-5.1-4.8-13.1-4.8-18.2,0l-5.9,5.6,1.5,1.6,5.9-5.6c4.3-4,11-4,15.2,0l1.9,1.9c4,4.3,4.1,10.9,0,15.2l-5.6,5.9,1.6,1.5Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M404.5,404.1l5.8-6.2c3.9-4.2,3.9-10.7,0-14.8l-1.9-1.9c-4.1-3.9-10.6-3.9-14.8,0l-6.2,5.8-1.9-2,6.2-5.8c5.2-4.9,13.4-4.9,18.6,0l2,2c4.9,5.2,5,13.4,0,18.6l-5.8,6.2-2-1.9ZM386.2,385l1.2,1.3,5.8-5.4c4.4-4.1,11.2-4.1,15.5,0l1.9,1.9h0c4.1,4.3,4.1,11.1,0,15.5l-5.4,5.8,1.3,1.2,5.4-5.8c4.7-5,4.7-12.9,0-17.9l-2-2c-5-4.7-12.9-4.8-17.9,0l-5.8,5.4Z" fill="#dfd1b8"/>
                        <path d="M401,375.5c3.4,0,6.7,1.2,9.4,3.7l2,2c5,5.2,5,13.4,0,18.7l-5.8,6.2-2.1-2,5.8-6.2c3.9-4.1,3.9-10.6,0-14.7l-1.9-1.9c-2.1-2-4.7-2.9-7.4-2.9-2.6,0-5.3,1-7.3,2.9l-6.2,5.8-2-2.1h0s6.2-5.8,6.2-5.8c2.6-2.5,6-3.7,9.3-3.7ZM406.5,405.9l5.7-6.1c4.9-5.2,4.9-13.3,0-18.5l-2-2c-5.2-4.9-13.3-4.9-18.5,0l-6.1,5.7,1.8,1.9,6.1-5.7c4.2-3.9,10.7-3.9,14.9,0l1.9,1.9c3.9,4.2,4,10.7,0,14.9l-5.7,6.1,1.9,1.8ZM401,376c3.2,0,6.5,1.2,9,3.6l2,2c4.8,5,4.8,12.9,0,18l-5.5,5.8-1.4-1.3,5.5-5.8c4.1-4.3,4-11.1,0-15.4l-1.9-1.9c-4.3-4.1-11.1-4.1-15.4,0l-5.8,5.5-1.3-1.4h0s5.8-5.5,5.8-5.5c2.5-2.4,5.7-3.5,9-3.5ZM406.5,405.2l5.4-5.8c4.7-5,4.7-12.8,0-17.8l-2-2c-5-4.7-12.8-4.7-17.8,0l-5.8,5.4,1.1,1.2,5.8-5.4c4.4-4.1,11.2-4.1,15.6,0l1.9,1.9c4.1,4.4,4.2,11.2,0,15.6l-5.4,5.8,1.2,1.1Z" fill="#aa9d87"/>
                      </g>
                    </g>
                  </g>
                  <g filter="url(#drop-shadow-16)">
                    <g>
                      <g>
                        <rect x="395.5" y="413.7" width="5.9" height="1.6" transform="translate(494.8 -152.4) rotate(53.5)" fill="#dfd1b8"/>
                        <path d="M397.4,411.6l3.6,4.8-1.4,1-3.6-4.8,1.4-1ZM400.8,416.4l-3.4-4.6-1.2.9,3.4,4.6,1.2-.9Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M395.7,412.6l1.7-1.3,3.8,5.1-1.7,1.3-3.8-5.1ZM397.3,412l-.9.7,3.2,4.3.9-.7-3.2-4.3Z" fill="#dfd1b8"/>
                        <path d="M397.5,411.2l3.9,5.2-1.8,1.3-3.9-5.2,1.8-1.3ZM401.2,416.4l-3.7-5-1.6,1.2,3.7,5,1.6-1.2ZM397.4,411.9l3.3,4.4-1,.7-3.3-4.4,1-.7ZM400.5,416.3l-3.1-4.2-.8.6,3.1,4.2.8-.6Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="394" y="413.6" width="6.7" height="1.6" transform="translate(494.3 -151.5) rotate(53.5)" fill="#dfd1b8"/>
                        <path d="M396,411.2l4,5.4-1.4,1-4-5.4,1.4-1ZM399.9,416.6l-3.9-5.3-1.2.9,3.9,5.3,1.2-.9Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M394.4,412.2l1.7-1.3,4.2,5.7-1.7,1.3-4.2-5.7ZM396,411.6l-.9.7,3.7,5,.9-.7-3.7-5Z" fill="#dfd1b8"/>
                        <path d="M396.1,410.9l4.3,5.8-1.8,1.3-4.3-5.8,1.8-1.3ZM400.3,416.7l-4.2-5.7-1.6,1.2,4.2,5.7,1.6-1.2ZM396,411.6l3.7,5-1,.7-3.7-5,1-.7ZM399.6,416.6l-3.6-4.9-.8.6,3.6,4.9.8-.6Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="395.5" y="436.1" width="5.9" height="1.6" transform="translate(-189.8 497.5) rotate(-53.5)" fill="#dfd1b8"/>
                        <path d="M399.6,434l1.4,1-3.6,4.9-1.4-1,3.6-4.9ZM400.8,435.1l-1.2-.9-3.5,4.7,1.2.9,3.5-4.7Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M395.7,438.9l3.8-5.2,1.7,1.3-3.8,5.2-1.7-1.3ZM399.6,434.4l-3.2,4.4.9.7,3.2-4.4-.9-.7Z" fill="#dfd1b8"/>
                        <path d="M399.5,433.7l1.8,1.3-3.9,5.3-1.8-1.3,3.9-5.3ZM401.2,435l-1.6-1.2-3.8,5.1,1.6,1.2,3.8-5.1ZM399.6,434.4l1,.7-3.3,4.5-1-.7,3.3-4.5ZM400.5,435.1l-.8-.6-3.2,4.3.8.6,3.2-4.3Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="394" y="436.2" width="6.7" height="1.6" transform="translate(-190.3 496.6) rotate(-53.5)" fill="#dfd1b8"/>
                        <path d="M398.7,433.8l1.4,1-4,5.4-1.4-1,4-5.4ZM399.9,434.8l-1.2-.9-3.9,5.3,1.2.9,3.9-5.3Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M394.4,439.2l4.2-5.7,1.7,1.3-4.2,5.7-1.7-1.3ZM398.7,434.2l-3.7,5,.9.7,3.7-5-.9-.7Z" fill="#dfd1b8"/>
                        <path d="M398.6,433.4l1.8,1.3-4.3,5.8-1.8-1.3,4.3-5.8ZM400.3,434.8l-1.6-1.2-4.2,5.7,1.6,1.2,4.2-5.7ZM398.7,434.1l1,.7-3.7,5-1-.7,3.7-5ZM399.6,434.9l-.8-.6-3.6,4.9.8.6,3.6-4.9Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M405.5,427.5c0,4.6-3.6,8.5-8.2,8.7l-9,.5c-1.7,0-2.9-1-2.9-2.7v-16.8c0-1.7,1.1-2.8,2.9-2.7l9,.5c4.6.3,8.2,4.1,8.2,8.7v3.8Z" fill="#dfd1b8"/>
                        <path d="M388,414.4c0,0,.1,0,.2,0l9,.5c4.7.3,8.3,4.1,8.3,8.8v3.8c0,4.7-3.6,8.5-8.3,8.8l-9,.5c-.9,0-1.6-.2-2.1-.7-.5-.5-.8-1.2-.8-2.1v-16.8c0-.9.3-1.6.8-2.1.5-.5,1.1-.7,1.9-.7ZM388,436.7c0,0,.1,0,.2,0l9-.5c4.6-.3,8.2-4.1,8.2-8.7v-3.8c0-4.6-3.6-8.4-8.2-8.7l-9-.5c-.8,0-1.5.2-2,.7-.5.5-.8,1.2-.8,2v16.8c0,.8.3,1.5.8,2,.5.4,1.1.7,1.8.7Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M385.1,434v-16.8c0-.9.3-1.7.9-2.2.6-.5,1.4-.8,2.3-.7l9,.5c4.8.3,8.5,4.2,8.5,9v3.8c0,4.8-3.7,8.7-8.5,9l-9,.5c-.9,0-1.7-.2-2.3-.7s-.9-1.3-.9-2.2ZM405.2,423.7c0-4.5-3.5-8.2-8-8.5l-9-.5c-.8,0-1.4.2-1.9.6-.5.4-.7,1.1-.7,1.9v16.8c0,.8.2,1.4.7,1.9.5.4,1.1.6,1.9.6l9-.5c4.5-.3,8-4,8-8.5v-3.8Z" fill="#dfd1b8"/>
                        <path d="M388,414.2c0,0,.2,0,.2,0l9,.5c4.8.3,8.5,4.2,8.5,9v3.8c0,4.8-3.7,8.8-8.5,9l-9,.5c-.9,0-1.7-.2-2.3-.8-.6-.5-.9-1.3-.9-2.3v-16.8c0-.9.3-1.7.9-2.3.5-.5,1.2-.8,2.1-.8ZM388,437c0,0,.2,0,.2,0l9-.5c4.7-.3,8.4-4.2,8.4-8.9v-3.8c0-4.7-3.7-8.6-8.4-8.9l-9-.5c-.9,0-1.7.2-2.2.7-.6.5-.8,1.3-.8,2.2v16.8c0,.9.3,1.7.8,2.2.5.5,1.2.7,2,.7ZM388,414.7c0,0,.1,0,.2,0l9,.5c4.5.3,8.1,4,8.1,8.5v3.8c0,4.5-3.5,8.3-8.1,8.5l-9,.5c-.8,0-1.5-.2-1.9-.6-.5-.5-.7-1.1-.7-1.9v-16.8c0-.8.3-1.5.7-1.9.4-.4,1-.6,1.7-.6ZM388,436.5c0,0,.1,0,.2,0l9-.5c4.5-.3,8-3.9,8-8.4v-3.8c0-4.5-3.5-8.2-8-8.4l-9-.5c-.8,0-1.4.2-1.9.6-.5.4-.7,1.1-.7,1.8v16.8c0,.8.2,1.4.7,1.8.4.4,1,.6,1.7.6Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M404.6,427.3c0,4.1-3.2,7.5-7.3,7.8l-8,.5c-1.5,0-2.6-.9-2.6-2.4v-15c0-1.5,1-2.5,2.6-2.4l8,.5c4.1.2,7.3,3.6,7.3,7.8v3.4Z" fill="#dfd1b8"/>
                        <path d="M389,415.6c0,0,.1,0,.2,0l8,.5c4.1.2,7.4,3.7,7.4,7.8v3.4c0,4.1-3.2,7.6-7.4,7.8l-8,.5c-.8,0-1.4-.2-1.9-.6-.5-.4-.7-1.1-.7-1.9v-15c0-.8.2-1.4.7-1.9.4-.4,1-.6,1.7-.6ZM389,435.5c0,0,.1,0,.2,0l8-.5c4.1-.2,7.3-3.6,7.3-7.7v-3.4c0-4.1-3.2-7.5-7.3-7.7l-8-.5c-.7,0-1.4.2-1.8.6-.4.4-.7,1-.7,1.8v15c0,.7.2,1.4.7,1.8.4.4,1,.6,1.6.6Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M386.5,433.1v-15c0-.8.3-1.5.7-1.9.5-.5,1.2-.7,1.9-.6l8,.5c4.2.2,7.4,3.7,7.4,7.9v3.4c0,4.2-3.3,7.6-7.4,7.9l-8,.5c-.8,0-1.5-.2-1.9-.6-.5-.5-.7-1.1-.7-1.9ZM404.5,423.9c0-4-3.2-7.4-7.2-7.6l-8-.5c-.7,0-1.3.2-1.8.6-.4.4-.7,1-.7,1.7v15c0,.7.2,1.3.7,1.7.4.4,1,.6,1.8.6l8-.5c4-.2,7.2-3.6,7.2-7.6v-3.4Z" fill="#dfd1b8"/>
                        <path d="M389,415.5c0,0,.1,0,.2,0l8,.5c4.2.2,7.5,3.7,7.5,7.9v3.4c0,4.2-3.3,7.7-7.5,7.9l-8,.5c-.8,0-1.5-.2-2-.6-.5-.5-.8-1.1-.8-2v-15c0-.8.3-1.5.8-2,.5-.4,1.1-.7,1.8-.7ZM389,435.6c0,0,.1,0,.2,0l8-.5c4.1-.2,7.4-3.7,7.4-7.8v-3.4c0-4.1-3.2-7.6-7.4-7.8l-8-.5c-.8,0-1.4.2-1.9.6-.5.4-.7,1.1-.7,1.9v15c0,.8.2,1.4.7,1.9.4.4,1,.6,1.7.6ZM389,415.8c0,0,.1,0,.2,0l8,.5c4.1.2,7.3,3.6,7.3,7.7v3.4c0,4.1-3.2,7.5-7.3,7.7l-8,.5c-.7,0-1.4-.2-1.8-.6-.4-.4-.7-1-.7-1.8v-15c0-.7.2-1.4.7-1.8.4-.4,1-.6,1.6-.6ZM389,435.3c0,0,.1,0,.2,0l8-.5c4-.2,7.2-3.6,7.2-7.6v-3.4c0-4-3.1-7.3-7.2-7.6l-8-.5c-.7,0-1.3.1-1.7.5-.4.4-.6,1-.6,1.7v15c0,.7.2,1.3.6,1.7.4.4.9.6,1.5.6Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M397.6,437.9h1.2c6-.2,10.8-5.2,10.8-11.2v-2c0-6-4.8-10.9-10.8-11.1h-1.2s1.8-1.4,1.8-1.4l7.8,2.7,3.6,4.6,1,6.2-1.1,5.9s-2.4,3.8-2.5,4c-.1.1-3.6,3.1-4,3.3-.5.2-4.7.7-4.8.6-.1,0-1.7-1.5-1.7-1.5Z" fill="#dfd1b8"/>
                        <path d="M399.4,412.1l7.9,2.7h0s3.6,4.6,3.6,4.6h0s1,6.2,1,6.2l-1.1,6c0,.2-2.4,3.8-2.5,4-.1.2-3.6,3.1-4.1,3.3-.4.2-4.7.7-4.9.6-.1,0-1.6-1.4-1.7-1.5h-.1c0,0,1.3-.1,1.3-.1,2.9,0,5.6-1.3,7.6-3.4s3.1-4.8,3.1-7.7v-2c0-2.9-1.1-5.6-3.1-7.7s-4.7-3.3-7.6-3.4h-1.3s2-1.6,2-1.6ZM407.2,414.9l-7.8-2.7-1.7,1.3h1c2.9.1,5.6,1.3,7.7,3.4,2,2.1,3.1,4.9,3.1,7.8v2c0,2.9-1.1,5.7-3.1,7.8-2,2.1-4.7,3.3-7.7,3.4h-1c.6.6,1.5,1.4,1.6,1.4.3,0,4.3-.4,4.8-.6.4-.2,3.9-3.1,4-3.2.1-.1,2.4-3.8,2.5-4l1.1-5.9-1-6.1-3.6-4.5Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M396.9,413.8l2.5-1.9,8,2.8,3.7,4.7,1,6.3h0s-1.1,6-1.1,6h0c-.2.4-2.4,3.9-2.5,4-.1.2-3.6,3.1-4.2,3.3-.3.1-2.1.4-2.6.4-2.3.3-2.4.2-2.4.2-.1,0-1.3-1.1-1.7-1.5l-.5-.4h1.8c5.9-.3,10.5-5,10.5-10.9v-2c0-5.9-4.6-10.7-10.5-10.9h-1.9ZM409.8,424.7v2c0,6.2-4.8,11.2-11,11.4h-.6c.5.5,1,.9,1.2,1.1.6,0,4.2-.4,4.6-.6.4-.1,3.7-2.9,3.9-3.2,0-.1,1.5-2.4,2.5-3.9l1.1-5.9-1-6.1-3.5-4.4-7.6-2.6-1.2.9h.5c6.2.2,11,5.2,11,11.4Z" fill="#dfd1b8"/>
                        <path d="M399.3,411.8l8.1,2.8h0s3.7,4.7,3.7,4.7h0s1,6.3,1,6.3h0c0,0-1.1,6-1.1,6h0c-.9,1.5-2.4,3.9-2.5,4-.1.2-3.6,3.1-4.2,3.4-.3.1-2.1.4-2.6.4-2.3.3-2.4.2-2.5.2-.1,0-1.1-1-1.7-1.5l-.6-.5h1.9c5.9-.3,10.5-5,10.5-10.9v-2c0-5.9-4.6-10.6-10.5-10.8h-2c0,0,2.6-2.1,2.6-2.1ZM407.3,414.7l-8-2.8-2.3,1.8h1.7c5.9.3,10.6,5.1,10.6,11v2c0,5.9-4.6,10.7-10.6,10.9h-1.7c0,0,.3.4.3.4,1,.9,1.7,1.5,1.7,1.5,0,0,.1,0,2.4-.2,1.1-.1,2.3-.3,2.6-.4.5-.2,4-3.2,4.1-3.3,0,0,1-1.5,2.5-3.9h0c0,0,1.1-6.1,1.1-6.1l-1-6.2-3.6-4.6ZM399.4,412.4l7.7,2.7h0s3.5,4.5,3.5,4.5h0s1,6.1,1,6.1l-1.1,5.9c-.9,1.5-2.4,3.8-2.5,3.9-.3.3-3.6,3.1-4,3.2-.4.2-4.1.6-4.6.6h0s0,0,0,0c-.2-.2-.9-.8-1.2-1.1h-.1c0,0,.7-.1.7-.1,6.1-.2,10.9-5.2,10.9-11.3v-2c0-6.1-4.8-11.1-10.9-11.3h-.7s1.3-1,1.3-1ZM407.1,415.1l-7.6-2.6-1,.8h.3c6.2.2,11,5.2,11,11.4v2c0,6.2-4.9,11.2-11,11.4h-.4c.3.3.9.8,1.1,1,.7,0,4.2-.5,4.6-.6.4-.1,3.7-2.9,3.9-3.2,0-.1,1.5-2.3,2.5-3.9l1.1-5.8-1-6-3.5-4.4Z" fill="#aa9d87"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M410.9,427.1c-.2,5.8-4.8,10.6-10.7,10.7l-8.2.3v2.3c0,0,8.3-.3,8.3-.3,7-.2,12.7-5.9,12.9-12.9v-2.8c-.2-7-5.8-12.7-12.9-12.9l-8.2-.3v2.3c0,0,8.1.3,8.1.3,5.8.2,10.5,4.9,10.7,10.7v2.7Z" fill="#dfd1b8"/>
                        <path d="M392,411.1l8.2.3c7.1.2,12.7,5.9,12.9,13v2.8c-.2,7.1-5.9,12.8-12.9,13l-8.2.3v-2.4c0,0,8.2-.3,8.2-.3,5.8-.2,10.5-4.9,10.6-10.7v-2.7c-.2-5.8-4.8-10.5-10.6-10.7l-8.2-.3v-2.4ZM392.1,440.3l8.1-.3c7-.2,12.6-5.9,12.8-12.9v-2.8c-.2-7-5.8-12.7-12.8-12.9l-8.1-.3v2.1c0,0,8.1.3,8.1.3,5.9.2,10.6,4.9,10.7,10.8v2.7c-.2,5.9-4.9,10.6-10.7,10.8l-8.1.3v2.1Z" fill="#aa9d87"/>
                      </g>
                      <g>
                        <path d="M391.8,437.8l8.4-.3c5.7-.2,10.3-4.8,10.4-10.5v-2.7c-.2-5.7-4.7-10.3-10.4-10.5l-8.4-.3v-2.8c0,0,8.5.3,8.5.3,7.2.2,12.9,6,13.1,13.2v2.8c-.2,7.2-5.9,13-13.1,13.2l-8.4.3v-2.8ZM392.3,411.4v1.8c0,0,7.9.3,7.9.3,6,.2,10.8,5,10.9,11v2.7s0,0,0,0c-.2,6-5,10.8-10.9,11l-7.9.3v1.8c0,0,8-.3,8-.3,6.9-.2,12.5-5.8,12.6-12.7v-2.8c-.2-6.9-5.7-12.5-12.6-12.7l-7.9-.3Z" fill="#dfd1b8"/>
                        <path d="M391.8,410.8l8.5.3c7.2.2,13,6,13.2,13.2v2.8c-.2,7.2-6,13-13.2,13.2l-8.5.3v-2.9c0,0,8.4-.3,8.4-.3,5.7-.2,10.2-4.8,10.4-10.4v-2.7c-.1-5.7-4.7-10.3-10.4-10.4l-8.5-.3v-2.9ZM391.9,440.5l8.4-.3c7.1-.2,12.9-6,13.1-13.1v-2.8c-.2-7.1-5.9-12.9-13.1-13.1l-8.4-.3v2.6c0,0,8.3.3,8.3.3,5.7.2,10.3,4.8,10.5,10.5v2.7c-.2,5.7-4.8,10.4-10.5,10.6l-8.4.3v2.6ZM392.3,411.3l8,.3c6.9.2,12.5,5.8,12.7,12.8v2.8c-.2,6.9-5.8,12.5-12.7,12.8l-8,.3v-1.9c0,0,7.9-.3,7.9-.3,5.9-.2,10.7-5,10.9-10.9v-2.7c-.2-5.9-4.9-10.7-10.9-10.9l-8-.3v-1.9ZM392.4,440l7.9-.3c6.9-.2,12.4-5.8,12.6-12.6v-2.8c-.2-6.9-5.7-12.4-12.6-12.6l-7.9-.3v1.7c0,0,7.8.3,7.8.3,6,.2,10.8,5,11,11v2.7c-.2,6-5,10.8-11,11l-7.9.3v1.7Z" fill="#aa9d87"/>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <rect id="sink1" data-name="sink" x="463.9" y="682.3" width="24" height="24" fill="none" stroke="#425563" strokeDasharray="6" strokeMiterlimit="10" strokeWidth=".5"/>
              <g id="dryer">
                <g>
                  <polyline points="472.8 636.1 475.8 636.1 475.8 639.1" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                  <line x1="475.8" y1="644.4" x2="475.8" y2="662.6" fill="none" stroke="#425563" strokeDasharray="5.2 5.2" strokeMiterlimit="10" strokeWidth=".5"/>
                  <polyline points="475.8 665.3 475.8 668.3 472.8 668.3" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M467.2,668.3h-17.9c-2.4,0-4.4-2-4.4-4.4v-23.3c0-2.4,2-4.4,4.4-4.4h20.7" fill="none" stroke="#425563" strokeDasharray="5.6 5.6" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
              </g>
              <g id="washer">
                <g>
                  <polyline points="472.8 603.4 475.8 603.4 475.8 606.4" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                  <line x1="475.8" y1="611.7" x2="475.8" y2="629.9" fill="none" stroke="#425563" strokeDasharray="5.2 5.2" strokeMiterlimit="10" strokeWidth=".5"/>
                  <polyline points="475.8 632.5 475.8 635.5 472.8 635.5" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                  <path d="M467.2,635.5h-17.9c-2.4,0-4.4-2-4.4-4.4v-23.3c0-2.4,2-4.4,4.4-4.4h20.7" fill="none" stroke="#425563" strokeDasharray="5.6 5.6" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
              </g>
              <g id="sec-van">
                <rect x="536.3" y="649" width="27.2" height="68.7" transform="translate(1099.9 1366.8) rotate(180)" fill="#dde7ed" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <g id="sink2" data-name="sink">
                  <path d="M550.1,695.9c1.3.1,2.5.6,3.6,1.5l.5-3c-1.3-.5-2.6-.8-4.1-.8-2.7,0-5,1-6.8,2.9-1.9,1.8-2.9,4.1-2.9,6.8,0,2.8,1,5.1,2.9,6.9,1.8,1.9,4.1,2.9,6.8,2.9,2.8,0,5.1-1,6.9-2.9,1.9-1.8,2.9-4.1,2.9-6.9,0-2.7-1-5-2.9-6.8-.8-.8-1.8-1.5-2.8-2.1.8,2.7,1.3,5.5,1.3,8.4l1.9-.3h.2c.2,0,.4.1.5.3.2.2.3.4.2.6,0,.2,0,.4-.2.6-.2.1-.4.2-.6.2s-.4-.1-.6-.3h-1.4c0,2.8-.4,5.6-1.3,8.3l-.5-2.9c-1.3,1-2.8,1.6-4.5,1.6s-3.2-.5-4.6-1.6c-1.1-.9-1.9-2-2.4-3.1-.5-1.2-.6-2.4-.4-3.8.1-1.3.6-2.5,1.5-3.6.9-1.1,2-1.9,3.1-2.4s2.4-.6,3.8-.4Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <path d="M550.1,692.3c-2,0-3.8.6-5.5,1.5-1.7,1-3,2.3-4,4-.9,1.6-1.4,3.4-1.5,5.5,0,2.1.6,4,1.5,5.6,1,1.7,2.3,3,4,4,1.6.9,3.4,1.4,5.5,1.5,2,0,3.9-.6,5.6-1.5,1.7-1,3-2.3,3.9-4,1-1.6,1.5-3.5,1.6-5.6,0-2-.6-3.8-1.6-5.5-.9-1.7-2.2-3-3.9-4-1.7-.9-3.5-1.4-5.6-1.5Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <path d="M556,705.5v1.5c0,.1.2.2.3.3.2,0,.3-.2.3-.3v-2c0-.2-.1-.3-.3-.3s-.2.1-.3.3v.5c-.1,0-.2-.2-.3-.3-.1-.3,0-.7.4-.9.4,0,.7,0,.9.4.1.4,0,.7-.4.9" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <path d="M553.7,709.2h0c.3-1.9.6-3.6.6-5.4h-2.9l-.2-.3v-.5l.2-.3h2.9c0-1.8-.3-3.6-.6-5.4" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <path d="M550.1,702.4c-.5,0-.8.3-.8.8,0,.6.3.9.8.9.6,0,.9-.4.9-.9,0-.5-.4-.8-.9-.8Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <line x1="554.3" y1="702.7" x2="555.5" y2="702.7" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <line x1="555.5" y1="703.8" x2="554.3" y2="703.8" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <path d="M556.9,703.8l.8.2c.2-.2.3-.5.4-.8,0-.3-.3-.6-.6-.8" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <path d="M557.5,704.1c0,0,.1-.1.2-.1" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <path d="M556,700.8c-.3.3-.5.6-.3.9.2.4.5.6.9.4.4-.2.6-.5.4-.9,0-.1-.2-.3-.4-.4v.7c0,.1-.1.2-.3.3-.1,0-.2-.2-.3-.3v-2c0-.2.2-.3.3-.3.2,0,.3.1.3.3v1.3" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                </g>
                <g id="sink3" data-name="sink">
                  <path d="M549.9,659.6c1.3.1,2.5.6,3.6,1.5l.5-3c-1.3-.5-2.6-.8-4.1-.8-2.7,0-5,1-6.8,2.9-1.9,1.8-2.9,4.1-2.9,6.8,0,2.8,1,5.1,2.9,6.9,1.8,1.9,4.1,2.9,6.8,2.9,2.8,0,5.1-1,6.9-2.9,1.9-1.8,2.9-4.1,2.9-6.9,0-2.7-1-5-2.9-6.8-.8-.8-1.8-1.5-2.8-2.1.8,2.7,1.3,5.5,1.3,8.4l1.9-.3h.2c.2,0,.4.1.5.3.2.2.3.4.2.6,0,.2,0,.4-.2.6-.2.1-.4.2-.6.2s-.4-.1-.6-.3h-1.4c0,2.8-.4,5.6-1.3,8.3l-.5-2.9c-1.3,1-2.8,1.6-4.5,1.6s-3.2-.5-4.6-1.6c-1.1-.9-1.9-2-2.4-3.1-.5-1.2-.6-2.4-.4-3.8.1-1.3.6-2.5,1.5-3.6.9-1.1,2-1.9,3.1-2.4s2.4-.6,3.8-.4Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <path d="M549.9,656c-2,0-3.8.6-5.5,1.5-1.7,1-3,2.3-4,4-.9,1.6-1.4,3.4-1.5,5.5,0,2.1.6,4,1.5,5.6,1,1.7,2.3,3,4,4,1.6.9,3.4,1.4,5.5,1.5,2,0,3.9-.6,5.6-1.5,1.7-1,3-2.3,3.9-4,1-1.6,1.5-3.5,1.6-5.6,0-2-.6-3.8-1.6-5.5-.9-1.7-2.2-3-3.9-4-1.7-.9-3.5-1.4-5.6-1.5Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <path d="M555.8,669.2v1.5c0,.1.2.2.3.3.2,0,.3-.2.3-.3v-2c0-.2-.1-.3-.3-.3s-.2.1-.3.3v.5c-.1,0-.2-.2-.3-.3-.1-.3,0-.7.4-.9.4,0,.7,0,.9.4.1.4,0,.7-.4.9" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <path d="M553.5,672.9h0c.3-1.9.6-3.6.6-5.4h-2.9l-.2-.3v-.5l.2-.3h2.9c0-1.8-.3-3.6-.6-5.4" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <path d="M549.9,666.1c-.5,0-.8.3-.8.8,0,.6.3.9.8.9.6,0,.9-.4.9-.9,0-.5-.4-.8-.9-.8Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <line x1="554.1" y1="666.4" x2="555.2" y2="666.4" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <line x1="555.2" y1="667.5" x2="554.1" y2="667.5" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <path d="M556.6,667.5l.8.2c.2-.2.3-.5.4-.8,0-.3-.3-.6-.6-.8" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <path d="M557.2,667.9c0,0,.1-.1.2-.1" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <path d="M555.8,664.5c-.3.3-.5.6-.3.9.2.4.5.6.9.4.4-.2.6-.5.4-.9,0-.1-.2-.3-.4-.4v.7c0,.1-.1.2-.3.3-.1,0-.2-.2-.3-.3v-2c0-.2.2-.3.3-.3.2,0,.3.1.3.3v1.3" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                </g>
              </g>
              <g id="mbr-van">
                <rect x="747.6" y="393.9" width="27.2" height="85.4" fill="#dde7ed" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <g id="sink4" data-name="sink">
                  <path d="M761.3,419.7c-1.3-.1-2.5-.6-3.6-1.5l-.5,3c1.3.5,2.6.8,4.1.8,2.7,0,5-1,6.8-2.9,1.9-1.8,2.9-4.1,2.9-6.8,0-2.8-1-5.1-2.9-6.9-1.8-1.9-4.1-2.9-6.8-2.9-2.8,0-5.1,1-6.9,2.9-1.9,1.8-2.9,4.1-2.9,6.9,0,2.7,1,5,2.9,6.8.8.8,1.8,1.5,2.8,2.1-.8-2.7-1.3-5.5-1.3-8.4l-1.9.3h-.2c-.2,0-.4-.1-.5-.3-.2-.2-.3-.4-.2-.6,0-.2,0-.4.2-.6.2-.1.4-.2.6-.2s.4.1.6.3h1.4c0-2.8.4-5.6,1.3-8.3l.5,2.9c1.3-1,2.8-1.6,4.5-1.6s3.2.5,4.6,1.6c1.1.9,1.9,2,2.4,3.1.5,1.2.6,2.4.4,3.8-.1,1.3-.6,2.5-1.5,3.6-.9,1.1-2,1.9-3.1,2.4s-2.4.6-3.8.4Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <path d="M761.3,423.3c2,0,3.8-.6,5.5-1.5,1.7-1,3-2.3,4-4,.9-1.6,1.4-3.4,1.5-5.5,0-2.1-.6-4-1.5-5.6-1-1.7-2.3-3-4-4-1.6-.9-3.4-1.4-5.5-1.5-2,0-3.9.6-5.6,1.5-1.7,1-3,2.3-3.9,4-1,1.6-1.5,3.5-1.6,5.6,0,2,.6,3.8,1.6,5.5.9,1.7,2.2,3,3.9,4,1.7.9,3.5,1.4,5.6,1.5Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <path d="M755.4,410v-1.5c0-.1-.2-.2-.3-.3-.2,0-.3.2-.3.3v2c0,.2.1.3.3.3s.2-.1.3-.3v-.5c.1,0,.2.2.3.3.1.3,0,.7-.4.9-.4,0-.7,0-.9-.4-.1-.4,0-.7.4-.9" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <path d="M757.7,406.4h0c-.3,1.9-.6,3.6-.6,5.4h2.9l.2.3v.5l-.2.3h-2.9c0,1.8.3,3.6.6,5.4" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <path d="M761.3,413.2c.5,0,.8-.3.8-.8,0-.6-.3-.9-.8-.9-.6,0-.9.4-.9.9,0,.5.4.8.9.8Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <line x1="757.1" y1="412.9" x2="755.9" y2="412.9" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <line x1="755.9" y1="411.7" x2="757.1" y2="411.7" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <path d="M754.6,411.7l-.8-.2c-.2.2-.3.5-.4.8,0,.3.3.6.6.8" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <path d="M753.9,411.4c0,0-.1.1-.2.1" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <path d="M755.4,414.8c.3-.3.5-.6.3-.9-.2-.4-.5-.6-.9-.4-.4.2-.6.5-.4.9,0,.1.2.3.4.4v-.7c0-.1.1-.2.3-.3.1,0,.2.2.3.3v2c0,.2-.2.3-.3.3-.2,0-.3-.1-.3-.3v-1.3" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                </g>
                <g id="sink5" data-name="sink">
                  <path d="M761.3,461.4c-1.3-.1-2.5-.6-3.6-1.5l-.5,3c1.3.5,2.6.8,4.1.8,2.7,0,5-1,6.8-2.9,1.9-1.8,2.9-4.1,2.9-6.8,0-2.8-1-5.1-2.9-6.9-1.8-1.9-4.1-2.9-6.8-2.9-2.8,0-5.1,1-6.9,2.9-1.9,1.8-2.9,4.1-2.9,6.9,0,2.7,1,5,2.9,6.8.8.8,1.8,1.5,2.8,2.1-.8-2.7-1.3-5.5-1.3-8.4l-1.9.3h-.2c-.2,0-.4-.1-.5-.3-.2-.2-.3-.4-.2-.6,0-.2,0-.4.2-.6.2-.1.4-.2.6-.2s.4.1.6.3h1.4c0-2.8.4-5.6,1.3-8.3l.5,2.9c1.3-1,2.8-1.6,4.5-1.6s3.2.5,4.6,1.6c1.1.9,1.9,2,2.4,3.1.5,1.2.6,2.4.4,3.8-.1,1.3-.6,2.5-1.5,3.6-.9,1.1-2,1.9-3.1,2.4s-2.4.6-3.8.4Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <path d="M761.3,465c2,0,3.8-.6,5.5-1.5,1.7-1,3-2.3,4-4,.9-1.6,1.4-3.4,1.5-5.5,0-2.1-.6-4-1.5-5.6-1-1.7-2.3-3-4-4-1.6-.9-3.4-1.4-5.5-1.5-2,0-3.9.6-5.6,1.5-1.7,1-3,2.3-3.9,4-1,1.6-1.5,3.5-1.6,5.6,0,2,.6,3.8,1.6,5.5.9,1.7,2.2,3,3.9,4,1.7.9,3.5,1.4,5.6,1.5Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <path d="M755.4,451.7v-1.5c0-.1-.2-.2-.3-.3-.2,0-.3.2-.3.3v2c0,.2.1.3.3.3s.2-.1.3-.3v-.5c.1,0,.2.2.3.3.1.3,0,.7-.4.9-.4,0-.7,0-.9-.4-.1-.4,0-.7.4-.9" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <path d="M757.7,448.1h0c-.3,1.9-.6,3.6-.6,5.4h2.9l.2.3v.5l-.2.3h-2.9c0,1.8.3,3.6.6,5.4" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <path d="M761.3,454.9c.5,0,.8-.3.8-.8,0-.6-.3-.9-.8-.9-.6,0-.9.4-.9.9,0,.5.4.8.9.8Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <line x1="757.1" y1="454.6" x2="755.9" y2="454.6" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <line x1="755.9" y1="453.4" x2="757.1" y2="453.4" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <path d="M754.6,453.4l-.8-.2c-.2.2-.3.5-.4.8,0,.3.3.6.6.8" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <path d="M753.9,453.1c0,0-.1.1-.2.1" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                  <path d="M755.4,456.5c.3-.3.5-.6.3-.9-.2-.4-.5-.6-.9-.4-.4.2-.6.5-.4.9,0,.1.2.3.4.4v-.7c0-.1.1-.2.3-.3.1,0,.2.2.3.3v2c0,.2-.2.3-.3.3-.2,0-.3-.1-.3-.3v-1.3" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                </g>
              </g>
              <g id="toilet1" data-name="toilet">
                <path d="M555.4,629.5l-1.8.6c-1,.2-2,.6-2.7,1.3-.4.3-.8.7-1.3.9-2.2,1.2-4.4,1.7-6.8,1.7-2.4,0-4.7-.7-6.7-1.9-2-1.2-3.7-2.9-4.9-5-.5-1.3-.5-2.6,0-3.9.2-.5.5-.9.7-1.3,1.5-2,3.4-3.5,5.6-4.5,2.2-1,4.4-1.4,6.8-1.2,2.4.2,4.6,1,6.6,2.4h0c.8.7,1.6,1.2,2.6,1.4l1.9.7v-4.5c0-.4.1-.8.4-1.2.2-.2.5-.4.9-.5l7-.4c.5,0,.9.2,1.4.5.3.2.5.5.6.9v18.8c-.1.5-.3.9-.6,1.2-.4.3-.9.4-1.4.4l-7-.4c-.4,0-.7-.2-.9-.5-.3-.3-.4-.7-.4-1.2v-13.1" fill="#dde7ed" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <path d="M532.4,623.7c-.3.9-.3,1.8,0,2.7,1.1,2,2.6,3.5,4.5,4.5,1.7,1,3.7,1.6,5.9,1.7,2.1,0,4.1-.5,6.1-1.6,1.2-.7,2.2-1.5,3.1-2.5.1-.1.2-.3.2-.6v-5.7c0-.2,0-.4-.2-.6-1.5-1.6-3.2-2.7-5.2-3.4-2-.7-4.1-.8-6.1-.4-2.1.3-4,1.3-5.7,2.7-1,.9-1.9,2-2.6,3.1Z" fill="#dde7ed" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <line x1="556.8" y1="635.5" x2="556.8" y2="614.6" fill="#dde7ed" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              </g>
              <g id="toilet2" data-name="toilet">
                <path d="M760.2,546.1l-.6-1.8c-.2-1-.6-2-1.3-2.7-.3-.4-.7-.8-.9-1.3-1.2-2.2-1.7-4.4-1.7-6.8,0-2.4.7-4.7,1.9-6.7,1.2-2,2.9-3.7,5-4.9,1.3-.5,2.6-.5,3.9,0,.5.2.9.5,1.3.7,2,1.5,3.5,3.4,4.5,5.6,1,2.2,1.4,4.4,1.2,6.8-.2,2.4-1,4.6-2.4,6.6h-.1c-.6.8-1,1.6-1.3,2.6l-.7,1.9h4.5c.4,0,.8.1,1.2.4.2.2.4.5.5.9l.4,7c0,.5-.2.9-.5,1.4-.2.3-.5.5-.9.6h-18.8c-.5-.1-.9-.3-1.2-.6-.3-.4-.4-.9-.4-1.4l.4-7c0-.4.2-.7.5-.9.3-.3.7-.4,1.2-.4h13.1" fill="#dde7ed" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <path d="M765.9,523.1c-.9-.3-1.8-.3-2.7,0-2,1.1-3.5,2.6-4.5,4.5-1,1.7-1.6,3.7-1.7,5.9,0,2.1.5,4.1,1.6,6.1.7,1.2,1.5,2.2,2.5,3.1.1.1.3.2.6.2h5.7c.2,0,.4,0,.6-.2,1.6-1.5,2.7-3.2,3.4-5.2.7-2,.8-4.1.4-6.1-.3-2.1-1.3-4-2.7-5.7-.9-1-2-1.9-3.1-2.6Z" fill="#dde7ed" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <line x1="754.1" y1="547.4" x2="775.1" y2="547.4" fill="#dde7ed" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              </g>
              <g id="wic-shelves">
                <polygon points="911.2 641.9 911.2 654.4 745 654.4 745 571.6 758.3 571.6 758.3 641.9 898.4 641.9 898.4 531.7 911 531.7 911 641.9 911.2 641.9" fill="#dde7ed"/>
                <line x1="898.3" y1="531.7" x2="898.3" y2="641.9" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <line x1="758.3" y1="570.7" x2="758.3" y2="641.9" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <line x1="898.4" y1="641.6" x2="758.2" y2="641.6" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <polygon points="565.4 491.3 565.4 504.5 509.1 504.5 509.1 567.8 495.9 567.8 495.9 491.3 565.4 491.3" fill="#dde7ed" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <polygon points="491 517.9 491 596.5 403 596.5 403 579.3 474.1 579.3 474.1 517.9 491 517.9" fill="#dde7ed" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <rect x="475.8" y="601" width="13.6" height="116.7" fill="#dde7ed" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <polygon points="321.3 681.9 321.3 738.6 255.3 738.6 255.3 725.6 308.4 725.6 308.4 681.9 321.3 681.9" fill="#dde7ed" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <rect x="325.8" y="681.9" width="17.7" height="56.7" fill="#dde7ed" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <g>
                  <rect x="255.5" y="743.1" width="92.8" height="13.4" fill="#dde7ed" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                  <rect x="331.2" y="750.7" width="17.1" height="19.7" fill="#dde7ed" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                </g>
              </g>
              <g id="wic-island">
                <rect x="811.4" y="560.3" width="24.4" height="33.2" fill="#dde7ed"/>
                <rect x="811.4" y="560.1" width="24.6" height="33.6" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              </g>
              <g id="livingroom-furn">
                <g>
                  <g>
                    <path d="M598.8,383.1c-3.7,0-7.2-.8-10.2-2.4-1.1-.6-2.1-1.3-3-2-2-1.5-3.9-2.8-6.8-3.1-.4,0-.8,0-1.1,0-4.3,0-7.6,2.1-10.5,3.9-2.2,1.4-4,2.5-5.8,2.5s-1.1-.1-1.7-.4c-2.2-1-2.9-3.4-3.6-5.8-.7-2.4-1.4-4.8-3.7-5.5-.4-.1-.8-.2-1.2-.2-2.1,0-4,1.8-6.2,3.9-2.8,2.6-5.9,5.6-10.5,6.3-.6,0-1.3.1-1.9.1-6.9,0-14.2-4.7-15.5-10.1-.7-2.8.4-4.7,1.7-6.9,1.3-2.2,2.8-4.8,2.5-8.5-.4-4.8-3.5-7.9-6.2-10.6-2.6-2.6-4.9-4.9-4.5-8.3.3-2.2,1.5-3.5,3-4.9,1.5-1.5,3.3-3.2,4.1-6.4,1.1-4.5-.6-8.1-2.4-11.9-.5-1-1-2.1-1.5-3.2-6.2-15-.6-33.6,8.3-43,3.9-4.1,10.5-8.6,15.6-8.6s2.1.2,3,.6c2.5,1.2,3.3,3.8,4.1,6.5.9,2.9,1.7,5.8,4.7,7.3.9.5,1.9.7,2.9.7,2.3,0,4.6-1.2,7-2.5,2.8-1.5,5.9-3.2,9.7-3.2s1.7,0,2.6.3c3.5.7,6,2.7,8.1,4.4,2.3,1.8,4.4,3.5,7.2,3.5s1,0,1.6-.2c1.9-.4,2.8-1.3,3.7-2.1.8-.8,1.6-1.5,3.2-1.9.7-.2,1.5-.3,2.3-.3,5.7,0,13.4,4.8,14.9,11,.8,3.4-.7,5.9-2.3,8.5-1.6,2.6-3.3,5.4-2.7,9.3.7,4.8,4.2,7,7.6,9.2,3.1,2,6.2,4,7.4,8,1.5,5.3-1.7,10-5.2,14.9-3.8,5.5-7.8,11.1-6.3,18.6.5,2.5,1.5,5,2.5,7.8,2.8,7.2,5.7,14.6-1,20.2-.6.5-1.4,1-2.1,1.5-3.3,2-7.4,3.1-11.7,3.1h0Z" fill="#fff"/>
                    <path d="M537.6,258.6c1,0,2,.2,2.8.6,2.3,1.1,3,3.6,3.8,6.2.8,2.8,1.8,6,5,7.6,1,.5,2,.7,3.1.7,2.4,0,4.8-1.2,7.2-2.6,2.9-1.5,5.8-3.1,9.4-3.1s1.7,0,2.5.3c3.4.7,5.7,2.5,7.9,4.3,2.3,1.8,4.5,3.6,7.5,3.6s1.1,0,1.7-.2c2-.4,3-1.4,3.9-2.2.8-.8,1.5-1.4,3-1.8.7-.2,1.4-.3,2.2-.3,5.5,0,13,4.6,14.4,10.6.8,3.2-.6,5.5-2.2,8.1-1.6,2.6-3.4,5.5-2.8,9.6.7,5,4.3,7.3,7.8,9.5,3.1,2,6.1,3.9,7.2,7.7,1.5,5.1-1.7,9.7-5.1,14.5-3.7,5.3-7.9,11.3-6.4,19,.5,2.5,1.5,5.1,2.6,7.9,2.8,7.4,5.5,14.3-.9,19.6-.6.5-1.3,1-2,1.4-3.2,1.9-7.3,3-11.4,3s-7.1-.8-9.9-2.3c-1.1-.6-2-1.3-2.9-1.9-2-1.4-4.1-2.9-7.1-3.2-.4,0-.8,0-1.2,0-4.5,0-7.8,2.1-10.8,4-2.1,1.3-3.9,2.4-5.6,2.4s-1-.1-1.5-.3c-2-.9-2.7-3.1-3.3-5.5-.7-2.5-1.5-5.1-4-5.9-.4-.1-.9-.2-1.3-.2-2.3,0-4.3,1.9-6.5,4-2.7,2.6-5.8,5.5-10.3,6.1-.6,0-1.2.1-1.9.1-6.6,0-13.8-4.6-15-9.7-.7-2.6.4-4.3,1.7-6.5,1.4-2.3,2.9-4.9,2.6-8.8-.4-5-3.6-8.2-6.3-10.9-2.5-2.5-4.7-4.7-4.4-7.8.2-2.1,1.4-3.2,2.8-4.6,1.6-1.5,3.4-3.3,4.2-6.6,1.2-4.7-.7-8.5-2.4-12.2-.5-1-1-2.1-1.4-3.2-6.1-14.8-.6-33.2,8.2-42.4,3.9-4.1,10.3-8.4,15.2-8.4M537.6,257.6c-5.3,0-12,4.5-16,8.7-9.5,10-14.4,29-8.4,43.5,2,4.9,5.2,9.2,3.8,14.8-1.5,6-6.5,6.4-7.1,11.3-.8,7.3,10,9.8,10.7,19,.6,7.2-5.7,9.6-4.2,15.5,1.4,5.7,9,10.5,16,10.5s1.3,0,2-.1c8.5-1.2,12.2-10.1,16.6-10.1s.7,0,1,.2c4.2,1.3,2.5,9.2,7.3,11.3.6.3,1.3.4,1.9.4,4.5,0,8.9-6.4,16.4-6.4.4,0,.7,0,1.1,0,4.1.3,6.3,3.2,9.6,5,3,1.6,6.7,2.4,10.4,2.4s8.5-1,11.9-3.1c.8-.5,1.5-1,2.2-1.5,9.5-7.9.4-19.4-1.4-28.4-2.8-14.1,14.8-22.1,11.5-33.5-2.5-8.6-13.7-8.2-14.9-17.1-1.1-7.6,6.7-10.7,5-17.8-1.5-6.2-9.1-11.4-15.4-11.4-.8,0-1.7,0-2.4.3-3.5.9-3.5,3.3-6.9,4-.5.1-1,.2-1.5.2-5.2,0-8.1-6.3-15.2-7.8-.9-.2-1.8-.3-2.7-.3-7.1,0-11.8,5.7-16.7,5.7s-1.8-.2-2.6-.6c-5.6-2.7-3.4-11.2-8.8-13.8-1-.5-2.1-.7-3.2-.7h0Z" fill="#efe7da"/>
                  </g>
                  <g>
                    <path d="M623.9,319.8c0,4.5-2.8,8.5-5.7,12.7-3.7,5.3-7.6,10.8-6.2,17.9.5,2.4,1.5,4.9,2.5,7.6,2.8,7.1,5.9,15.2-1.3,21.2-.7.6-1.4,1.1-2.2,1.6h0c-6.5,3.9-16.1,4.2-22.7.7-1.1-.6-2.1-1.3-3.1-2-1.9-1.4-3.8-2.7-6.4-2.9-4.6-.4-8.1,1.8-11.1,3.7-3,1.9-5.5,3.5-8.3,2.2-2.6-1.1-3.4-3.9-4.1-6.3-.7-2.2-1.3-4.4-3.1-5-2.1-.7-4,1.2-6.4,3.5-2.7,2.6-6.1,5.8-11,6.5-7.7,1.1-16.8-4.2-18.4-10.6-.8-3.1.5-5.3,1.8-7.6,1.3-2.2,2.7-4.5,2.4-8-.4-4.5-3.2-7.3-5.9-10.1-2.7-2.7-5.2-5.2-4.8-9,.3-2.5,1.7-3.9,3.2-5.4,1.5-1.5,3.1-3,3.9-6,1.1-4.2-.6-7.7-2.3-11.3-.5-1-1-2.1-1.5-3.2-6.3-15.3-.6-34.3,8.5-43.9,4.6-4.8,13.6-11,19.6-8.1,2.8,1.4,3.7,4.2,4.5,7,.8,2.8,1.6,5.5,4.3,6.8,3,1.5,5.8,0,9.1-1.8,3.6-1.9,7.6-4.1,12.9-3,3.7.8,6.2,2.8,8.5,4.6,2.6,2,4.8,3.8,8,3.1,1.6-.3,2.4-1.1,3.3-1.9.9-.8,1.8-1.7,3.6-2.1,3.2-.8,7.2,0,10.9,2.3,3.8,2.3,6.6,5.7,7.4,9.1.9,3.8-.8,6.5-2.4,9.1-1.5,2.5-3.1,5.1-2.6,8.7.6,4.4,3.8,6.4,7.2,8.6,3.2,2,6.5,4.1,7.8,8.4.3,1,.4,2,.4,3ZM610.9,347.4c0-5.9,3.4-10.7,6.6-15.3,3.5-5,6.8-9.6,5.2-15-1.2-4-4.4-6.1-7.4-8-3.4-2.1-6.8-4.3-7.5-9.1-.6-3.9,1.1-6.6,2.7-9.2,1.6-2.6,3.1-5.1,2.3-8.6-.8-3.2-3.4-6.5-7-8.7-3.5-2.1-7.4-2.9-10.4-2.2-1.6.4-2.4,1.2-3.3,2-.9.8-1.8,1.7-3.6,2.1-3.5.7-6-1.2-8.6-3.3-2.2-1.7-4.7-3.7-8.2-4.4-5-1-8.9,1.1-12.4,2.9-3.3,1.8-6.4,3.5-9.8,1.8-3-1.4-3.8-4.4-4.7-7.2-.8-2.7-1.6-5.3-4.1-6.6-5.6-2.7-14.4,3.5-18.7,8-9,9.4-14.5,28.1-8.4,43.1.4,1.1,1,2.2,1.5,3.2,1.8,3.8,3.5,7.3,2.4,11.8-.8,3.2-2.5,4.8-4.1,6.3-1.5,1.4-2.8,2.7-3,4.9-.4,3.4,1.9,5.7,4.6,8.4,2.7,2.7,5.8,5.7,6.2,10.5.3,3.7-1.2,6.2-2.5,8.4-1.3,2.2-2.5,4.2-1.8,7,1.5,6,10.4,11.1,17.6,10.1,4.7-.7,7.8-3.7,10.6-6.3,2.5-2.4,4.7-4.5,7.2-3.6,2.2.7,2.9,3,3.6,5.5.7,2.4,1.4,4.9,3.7,5.9,2.4,1.1,4.7-.3,7.6-2.2,3.2-2,6.7-4.2,11.6-3.8,2.9.2,4.8,1.6,6.8,3.1.9.7,1.9,1.4,3,2,6.4,3.4,15.6,3.1,22-.7h0c.7-.5,1.5-1,2.1-1.5,6.8-5.6,3.9-13.1,1.1-20.3-1.1-2.7-2.1-5.3-2.5-7.8-.2-1.1-.3-2.1-.3-3.1Z" fill="#fff"/>
                    <path d="M537.6,257.2c-5.6,0-12.4,4.9-16.2,8.9-9.1,9.6-14.8,28.6-8.5,43.9.5,1.1,1,2.2,1.5,3.2,1.7,3.6,3.4,7.1,2.3,11.3-.7,2.9-2.3,4.5-3.9,6-1.5,1.5-3,2.9-3.2,5.4-.4,3.8,2.1,6.3,4.8,9,2.7,2.7,5.6,5.6,5.9,10.1.3,3.5-1.1,5.8-2.4,8-1.4,2.3-2.6,4.5-1.8,7.6,1.5,5.9,9.2,10.8,16.4,10.8s1.4,0,2.1-.1c4.9-.7,8.3-3.9,11-6.5,2.1-2,3.8-3.6,5.6-3.6.3,0,.6,0,.9.1,1.8.6,2.5,2.7,3.1,5,.7,2.4,1.5,5.2,4.1,6.3.7.3,1.4.4,2,.4,2.1,0,4.1-1.3,6.3-2.7,2.8-1.8,6-3.7,10.1-3.7.3,0,.7,0,1.1,0,2.6.2,4.5,1.5,6.4,2.9,1,.7,2,1.4,3.1,2,3.1,1.6,6.8,2.5,10.5,2.5s8.7-1.1,12.2-3.2c.8-.5,1.5-1,2.2-1.6,7.2-5.9,4-14,1.3-21.2-1-2.7-2-5.2-2.5-7.6-1.4-7.1,2.4-12.6,6.2-17.9,2.9-4.2,5.7-8.2,5.7-12.7s-.1-2-.4-3c-1.2-4.3-4.6-6.4-7.8-8.4-3.4-2.1-6.5-4.2-7.2-8.6-.5-3.6,1.1-6.2,2.6-8.7,1.6-2.6,3.3-5.4,2.4-9.1-.8-3.4-3.5-6.8-7.4-9.1-2.8-1.7-5.7-2.6-8.4-2.6-.9,0-1.7.1-2.5.3-1.8.5-2.7,1.3-3.6,2.1-.8.8-1.6,1.5-3.3,1.9-.5.1-.9.1-1.4.1-2.5,0-4.4-1.5-6.6-3.3-2.3-1.8-4.8-3.8-8.5-4.6-1-.2-1.9-.3-2.8-.3-3.9,0-7.2,1.7-10.1,3.3-2.4,1.3-4.5,2.4-6.6,2.4s-1.6-.2-2.5-.6c-2.7-1.3-3.4-4-4.3-6.8-.8-2.8-1.7-5.7-4.5-7-1.1-.5-2.2-.7-3.4-.7h0ZM532.6,380.5c-6.8,0-14.3-4.7-15.7-10.2-.7-2.8.4-4.8,1.8-7,1.3-2.2,2.8-4.7,2.5-8.4-.4-4.8-3.5-7.8-6.2-10.5-2.7-2.7-5-4.9-4.6-8.4.3-2.3,1.5-3.5,3-4.9,1.5-1.5,3.3-3.2,4.1-6.3,1.1-4.5-.6-8-2.4-11.8-.5-1-1-2.1-1.5-3.2-6.2-15-.6-33.7,8.4-43.1,3.6-3.7,10.3-8.6,15.7-8.6,1.1,0,2.1.2,3.1.7,2.5,1.2,3.3,3.8,4.1,6.6.8,2.8,1.7,5.8,4.7,7.2.9.5,1.9.7,2.8.7,2.3,0,4.6-1.2,7-2.5,2.8-1.5,6-3.2,9.8-3.2.8,0,1.7,0,2.6.3,3.5.7,6,2.7,8.2,4.4,2.2,1.8,4.4,3.4,7.1,3.4s1,0,1.5-.2c1.8-.4,2.7-1.2,3.6-2.1.8-.8,1.7-1.5,3.3-2,.7-.2,1.5-.3,2.4-.3,2.5,0,5.4.9,8,2.5,3.6,2.2,6.3,5.4,7,8.7.8,3.5-.7,6-2.3,8.6-1.6,2.6-3.3,5.3-2.7,9.2.7,4.7,4.2,6.9,7.5,9.1,3.1,2,6.3,4,7.4,8,1.6,5.4-1.7,10.1-5.2,15-3.3,4.6-6.6,9.4-6.6,15.3s0,2.1.3,3.1c.5,2.5,1.5,5,2.5,7.8,2.8,7.2,5.7,14.7-1.1,20.3-.7.5-1.4,1-2.1,1.5-3.4,2-7.6,3.1-11.8,3.1s-7.2-.8-10.2-2.4c-1.1-.6-2.1-1.3-3-2-2-1.4-3.9-2.8-6.8-3.1-.4,0-.8,0-1.1,0-4.3,0-7.6,2-10.5,3.9-2.2,1.4-4.1,2.5-5.9,2.5s-1.2-.1-1.7-.4c-2.3-1-3-3.5-3.7-5.9-.7-2.4-1.4-4.7-3.6-5.5-.4-.1-.8-.2-1.1-.2-2.1,0-3.9,1.8-6.1,3.8-2.8,2.6-5.9,5.6-10.6,6.3-.6,0-1.3.1-1.9.1h0Z" fill="#efe7da"/>
                  </g>
                </g>
                <g>
                  <path d="M618.4,319.8c0,1.4-.8,2.4-2.2,3.9-1.5,1.8-3.9,4.5-6.6,9.7-2.8,5.4-3.6,8.8-3.9,11.2h0c-.2,1.3-.6,3.9-.2,7.2.5,3.9,1.7,6.2,2.9,8.3,1.1,2.1,2.2,4,2.3,7.2,0,4.1-1.1,7.5-3.4,9.5-4.2,3.7-10.9,2.1-13.5,1.4-5-1.2-7.5-3.4-9.7-5.3-2-1.7-3.7-3.2-6.9-3.4-3.8-.2-6.3,1.6-8.7,3.3-2.5,1.8-4.9,3.5-8.4,2.9-3.4-.6-5.2-2.8-6.9-4.9-1.6-2-3.2-3.9-5.9-3.9-2.9,0-4.7,1.9-6.7,3.9-2.2,2.2-4.4,4.5-8.2,4.7-3.7.1-8.5-2-10.3-5.7-1.6-3.4,0-6.5,1.7-9.8,1.7-3.3,3.5-6.8,2.5-11-.9-3.7-3.6-5.9-6-7.8-2.5-2-4.6-3.7-4.4-6.7.2-2.3,1.7-3.6,3.3-4.9,1.6-1.3,3.5-2.8,4.2-5.6.8-2.9-.2-4.8-1.8-8.4-1-2-2.2-4.6-3.4-8.1-2.3-6.5-4.3-12.2-3.8-19,.2-2.5,1.3-11.2,8.1-18.4,1.8-1.9,10.9-11,15.9-6.8.9.7,1.4,1.8,1.9,2.8.3.6.5,1.1.8,1.7.8,1.7,1.5,3.4,2.7,5,1.4,1.9,3.5,4.5,6.7,5.2,3.2.7,5.8-.9,8.5-2.5,1.7-1,3.5-2.1,5.4-2.5,4.4-1,9.2-.6,13.1,1.2,1.2.5,2.4,1.2,3.5,1.9,2.7,1.7,5.3,3.3,8.5,2.5,1.6-.4,3.1-1.2,4.6-2.1,2.3-1.4,4.7-2.8,7.7-2.1,3.9.9,7.9,3.7,7.9,8h0c0,2.9-1.8,5.3-3.5,7.6-.5.7-1,1.4-1.5,2.1-4.2,6.6-.8,15.6,4.9,19.6.8.5,1.8,1,2.9,1.6,2.7,1.3,5.7,2.8,6.2,5.6,0,.2,0,.4,0,.6ZM605.3,344.6c.3-2.4,1.1-5.8,3.9-11.3,2.7-5.2,5.1-8,6.6-9.8,1.5-1.8,2.3-2.7,2.1-4.3-.4-2.7-3.4-4.1-5.9-5.4-1.1-.5-2.1-1-2.9-1.6-6-4.2-9.4-13.3-5-20.1.5-.7,1-1.4,1.5-2.1,1.7-2.3,3.4-4.6,3.4-7.4h0c0-4.1-3.8-6.8-7.6-7.7-2.8-.7-5.1.6-7.4,2-1.5.9-3,1.8-4.7,2.1-3.4.7-6.1-.9-8.8-2.6-1.1-.7-2.3-1.4-3.4-1.9-3.9-1.7-8.6-2.1-12.9-1.1-1.9.4-3.6,1.5-5.3,2.5-2.7,1.6-5.4,3.2-8.8,2.5-3.3-.7-5.5-3.4-6.9-5.4-1.1-1.6-1.9-3.3-2.7-5-.3-.5-.5-1.1-.8-1.7-.5-1-1-2-1.8-2.7-4.8-4-13.7,4.9-15.4,6.7-6.7,7.1-7.8,15.7-8,18.2-.5,6.7,1.5,12.3,3.8,18.8,1.3,3.5,2.4,6.1,3.4,8.1,1.7,3.6,2.6,5.6,1.8,8.6-.8,2.9-2.7,4.5-4.3,5.8-1.6,1.3-3,2.5-3.2,4.6-.2,2.8,1.9,4.4,4.3,6.4,2.4,1.9,5.2,4.2,6.2,8,1.1,4.3-.8,8-2.5,11.2-1.7,3.2-3.2,6.3-1.7,9.5,1.7,3.6,6.4,5.6,9.9,5.5,3.6-.1,5.8-2.4,7.9-4.6,2.1-2.1,4-4.1,7-4,2.9,0,4.5,2,6.2,4.1,1.7,2.1,3.5,4.2,6.7,4.7,3.4.6,5.7-1.1,8.2-2.9,2.5-1.8,5-3.6,8.9-3.4,3.3.2,5,1.7,7.1,3.5,2.2,1.9,4.6,4,9.6,5.2,2.5.6,9.1,2.2,13.1-1.4,2.2-1.9,3.3-5.2,3.3-9.2,0-3.1-1.1-4.9-2.2-7-1.1-2.1-2.4-4.5-2.9-8.4-.4-3.4,0-6,.2-7.3h0Z" fill="#fff"/>
                  <path d="M535.1,262.4c-5,0-11.3,6.3-12.8,7.9-6.8,7.2-7.9,15.9-8.1,18.4-.5,6.8,1.5,12.4,3.8,19,1.3,3.5,2.5,6.1,3.4,8.1,1.7,3.6,2.6,5.5,1.8,8.4-.8,2.8-2.6,4.3-4.2,5.6-1.6,1.3-3.2,2.6-3.3,4.9-.2,3,2,4.7,4.4,6.7,2.4,1.9,5.1,4.1,6,7.8,1,4.2-.7,7.6-2.5,11-1.7,3.3-3.3,6.4-1.7,9.8,1.7,3.6,6.3,5.7,9.9,5.7s.2,0,.3,0c3.8-.1,6-2.4,8.2-4.7,2-2,3.8-3.9,6.6-3.9,0,0,.1,0,.2,0,2.7,0,4.3,2,5.9,3.9,1.7,2.1,3.5,4.3,6.9,4.9.5,0,1,.1,1.4.1,2.8,0,4.9-1.5,7-3.1,2.3-1.6,4.6-3.3,8-3.3.2,0,.4,0,.7,0,3.1.2,4.9,1.7,6.9,3.4,2.2,1.9,4.7,4.1,9.7,5.3,1.3.3,3.7.9,6.3.9s5.1-.5,7.2-2.3c2.3-2,3.5-5.4,3.4-9.5,0-3.1-1.1-5.1-2.3-7.2-1.1-2.1-2.4-4.4-2.9-8.3-.4-3.3,0-5.9.2-7.2.3-2.4,1.1-5.8,3.9-11.2,2.7-5.2,5.1-7.9,6.6-9.7,1.4-1.6,2.2-2.5,2.2-3.9s0-.4,0-.6c-.5-2.9-3.5-4.3-6.2-5.6-1.1-.5-2.1-1-2.9-1.6-5.7-4-9.1-13-4.9-19.6.4-.7,1-1.4,1.5-2.1,1.7-2.3,3.5-4.7,3.5-7.6h0c0-4.3-4-7.1-7.9-8-.5-.1-1.1-.2-1.6-.2-2.3,0-4.2,1.1-6.1,2.2-1.5.8-3,1.7-4.6,2.1-.6.1-1.1.2-1.6.2-2.5,0-4.7-1.3-6.9-2.7-1.1-.7-2.3-1.4-3.5-1.9-2.6-1.1-5.5-1.7-8.4-1.7s-3.2.2-4.8.5c-1.9.4-3.7,1.5-5.4,2.5-2.3,1.3-4.5,2.6-7,2.6s-1,0-1.5-.2c-3.1-.7-5.3-3.3-6.7-5.2-1.1-1.6-1.9-3.2-2.7-5-.3-.6-.5-1.1-.8-1.7-.5-1-1-2.1-1.9-2.8-.9-.8-2-1.1-3.2-1.1h0ZM532,375.2c-3.5,0-8-2-9.6-5.5-1.5-3.2,0-6.2,1.7-9.5,1.7-3.2,3.6-6.9,2.5-11.2-1-3.9-3.7-6.1-6.2-8-2.4-1.9-4.5-3.6-4.3-6.4.2-2.2,1.6-3.3,3.2-4.6,1.7-1.3,3.6-2.9,4.3-5.8.8-3-.1-5-1.8-8.6-1-2-2.1-4.6-3.4-8.1-2.3-6.5-4.3-12.1-3.8-18.8.2-2.5,1.3-11.1,8-18.2,1.4-1.5,7.6-7.8,12.5-7.8,1.1,0,2.1.3,2.9,1,.8.7,1.3,1.7,1.8,2.7.3.6.5,1.1.8,1.7.8,1.7,1.6,3.4,2.7,5,1.4,2,3.6,4.7,6.9,5.4.5.1,1.1.2,1.6.2,2.6,0,4.9-1.4,7.2-2.7,1.7-1,3.4-2,5.3-2.5,1.5-.3,3.1-.5,4.7-.5,2.9,0,5.7.6,8.2,1.7,1.2.5,2.3,1.2,3.4,1.9,2.2,1.4,4.5,2.8,7.1,2.8s1.1,0,1.7-.2c1.7-.4,3.2-1.3,4.7-2.1,1.9-1.1,3.8-2.2,5.9-2.2s1,0,1.5.2c3.8.9,7.6,3.6,7.6,7.6h0c0,2.8-1.8,5.1-3.4,7.4-.5.7-1.1,1.4-1.5,2.1-4.4,6.8-1,15.9,5,20.1.8.6,1.8,1.1,2.9,1.6,2.6,1.3,5.5,2.7,5.9,5.4.3,1.6-.5,2.5-2.1,4.3-1.6,1.8-3.9,4.5-6.6,9.8-2.8,5.4-3.6,8.9-3.9,11.3-.2,1.3-.6,3.9-.2,7.3.5,4,1.8,6.3,2.9,8.4,1.2,2.1,2.2,4,2.2,7,0,4-1.1,7.2-3.3,9.2-2,1.7-4.5,2.2-6.9,2.2s-4.9-.6-6.2-.9c-4.9-1.2-7.4-3.3-9.6-5.2-2-1.8-3.8-3.3-7.1-3.5-.2,0-.5,0-.7,0-3.5,0-5.9,1.7-8.2,3.4-2.1,1.5-4.1,3-6.8,3s-.9,0-1.3-.1c-3.3-.5-5-2.7-6.7-4.7-1.7-2.1-3.3-4-6.2-4.1,0,0-.1,0-.2,0-2.9,0-4.8,1.9-6.8,4-2.1,2.2-4.3,4.4-7.9,4.6-.1,0-.2,0-.3,0h0Z" fill="#efe7da"/>
                </g>
                <g>
                  <path d="M610.7,320.3c0,3-2.6,5.3-5.6,7.9-3.4,3-7.4,6.4-8.7,12.1-1.9,7.8,2.3,15.3,5.4,20.8,2.2,3.9,3.8,6.8,2.3,8.2-1.2,1.2-3.4,0-6.4-1.6-4.2-2.3-9.9-5.4-17.2-4.7-5,.4-8.5,2.5-11.6,4.2-3.4,1.9-6.3,3.6-9.8,2.3-3-1.1-4.2-3.5-5.4-5.8-1.2-2.2-2.3-4.4-5-5.1-4.3-1.2-8.9,2.3-12.3,4.8-2.4,1.8-4.1,3.1-5,2.3-.9-.8,0-2.8,1.4-5.6,2-4.2,4.7-9.9,2.5-14.5-1.2-2.5-3.4-3.6-5.6-4.6-2.2-1.1-4.3-2.1-5.1-4.6h.2c0,0-.2,0-.2,0-.8-2.7.7-4.7,2.5-6.9,1.4-1.9,3.1-4,3.9-7.1,1.6-5.8-1.1-10.4-3.9-15.1-2.8-4.7-6-10-5.4-17.4.6-7.1,4.3-13.2,7.4-15.9,1.5-1.2,2.9-1.8,4.1-1.7,2.4.2,3.6,3,4.9,6,1.4,3.3,3,7.1,6.5,8.1,3,.8,5.4-1,8.2-3.1,2.9-2.1,6.1-4.6,10.7-4.4,4,.2,6.2,2.2,8.6,4.4,2.3,2.1,4.6,4.2,8.8,4.6,5.4.5,9.8-2.3,13-4.3,2.4-1.5,4.1-2.6,5.1-1.7,1.2,1.1,0,3.5-1.6,6.8-2.2,4.6-5.3,10.8-3.2,16.4,1.6,4.3,5.6,6.2,9.2,7.9,3.4,1.6,6.6,3.2,7.2,6.5,0,.3,0,.6,0,.9ZM595.6,344.3c0-1.3.1-2.7.5-4.1,1.4-5.8,5.3-9.2,8.8-12.3,3.2-2.8,5.9-5.2,5.4-8.5-.5-3.2-3.5-4.6-7-6.3-3.6-1.7-7.7-3.7-9.4-8.1-2.1-5.7,1-12.1,3.2-16.7,1.5-3.1,2.7-5.5,1.7-6.4-.8-.7-2.5.3-4.7,1.7-3.3,2.1-7.7,4.9-13.2,4.4-4.3-.4-6.7-2.6-9-4.7-2.3-2.1-4.5-4.1-8.4-4.3-4.4-.2-7.6,2.2-10.4,4.3-2.7,2.1-5.3,4-8.5,3.1-3.7-1-5.3-4.9-6.8-8.3-1.3-3-2.4-5.6-4.5-5.8-1.1,0-2.5.5-3.9,1.7-3.1,2.6-6.7,8.7-7.3,15.7-.6,7.2,2.4,12.3,5.3,17.2,2.9,4.9,5.6,9.4,4,15.4-.9,3.1-2.5,5.3-4,7.2-1.8,2.3-3.1,4.1-2.4,6.6.7,2.4,2.7,3.3,4.9,4.4,2.2,1.1,4.5,2.2,5.7,4.8,2.3,4.7-.5,10.5-2.5,14.8-1.2,2.5-2.2,4.6-1.5,5.2.7.6,2.5-.8,4.6-2.3,3.4-2.6,8.1-6.1,12.6-4.9,2.8.8,4,3,5.2,5.3,1.2,2.2,2.4,4.5,5.2,5.6,3.4,1.3,6.1-.3,9.5-2.2,3.1-1.8,6.7-3.8,11.8-4.3,7.4-.7,13.2,2.5,17.4,4.8,2.9,1.6,4.9,2.7,6,1.7,1.2-1.2-.4-4.1-2.4-7.7-2.6-4.6-5.9-10.6-5.9-17Z" fill="#fff"/>
                  <path d="M533,272.1c-1.2,0-2.5.6-3.9,1.7-3.2,2.7-6.9,8.8-7.4,15.9-.6,7.4,2.6,12.7,5.4,17.4,2.9,4.8,5.5,9.3,3.9,15.1-.8,3.1-2.5,5.2-3.9,7.1-1.7,2.3-3.3,4.3-2.5,6.9h.2c0,0-.2,0-.2,0,.7,2.5,2.8,3.5,5.1,4.6,2.1,1,4.3,2.1,5.6,4.6,2.2,4.5-.5,10.3-2.5,14.5-1.3,2.8-2.3,4.9-1.4,5.6.2.1.4.2.6.2,1,0,2.5-1.1,4.4-2.5,2.9-2.2,6.7-5,10.5-5,.6,0,1.2,0,1.8.2,2.7.7,3.8,2.9,5,5.1,1.2,2.3,2.5,4.6,5.4,5.8.9.3,1.7.5,2.6.5,2.5,0,4.7-1.3,7.2-2.7,3.1-1.8,6.6-3.8,11.6-4.2.7,0,1.3,0,2,0,6.4,0,11.4,2.8,15.2,4.8,2.1,1.2,3.9,2.1,5.1,2.1s.9-.2,1.3-.5c1.4-1.4-.2-4.2-2.3-8.2-3.1-5.5-7.3-13-5.4-20.8,1.4-5.6,5.3-9.1,8.7-12.1,3-2.6,5.6-4.9,5.6-7.9,0-.3,0-.6,0-.9-.6-3.4-3.8-4.9-7.2-6.5-3.5-1.7-7.6-3.6-9.2-7.9-2.1-5.6,1-11.8,3.2-16.4,1.6-3.3,2.8-5.8,1.6-6.8-.3-.2-.6-.3-.9-.3-1,0-2.4.9-4.2,2-3,1.9-6.9,4.4-11.7,4.4s-.8,0-1.3,0c-4.1-.4-6.5-2.5-8.8-4.6-2.4-2.1-4.6-4.2-8.6-4.4-.2,0-.4,0-.6,0-4.3,0-7.3,2.3-10.1,4.4-2.3,1.7-4.3,3.3-6.7,3.3s-1,0-1.5-.2c-3.5-1-5.1-4.7-6.5-8.1-1.3-3-2.5-5.8-4.9-6,0,0-.2,0-.3,0h0ZM532,365.5c-.2,0-.3,0-.4-.1-.7-.6.3-2.7,1.5-5.2,2-4.3,4.8-10.1,2.5-14.8-1.3-2.6-3.5-3.7-5.7-4.8-2.1-1-4.2-2-4.9-4.4-.7-2.5.7-4.3,2.4-6.6,1.5-1.9,3.1-4.1,4-7.2,1.7-6-1.1-10.6-4-15.4-2.9-4.9-5.9-9.9-5.3-17.2.6-7,4.2-13,7.3-15.7,1.3-1.1,2.5-1.7,3.6-1.7,0,0,.2,0,.3,0,2.2.2,3.3,2.8,4.5,5.8,1.5,3.4,3.1,7.3,6.8,8.3.5.1,1.1.2,1.6.2,2.5,0,4.7-1.6,6.9-3.3,2.7-2,5.7-4.3,9.9-4.3.2,0,.4,0,.6,0,3.9.2,6,2.2,8.4,4.3,2.3,2.1,4.7,4.3,9,4.7.4,0,.9,0,1.3,0,4.9,0,8.9-2.5,11.9-4.4,1.7-1.1,3.1-1.9,4-1.9s.5,0,.7.2c1,.9-.2,3.3-1.7,6.4-2.3,4.6-5.4,11-3.2,16.7,1.7,4.5,5.8,6.4,9.4,8.1,3.5,1.7,6.4,3.1,7,6.3.6,3.3-2.2,5.7-5.4,8.5-3.5,3-7.4,6.5-8.8,12.3-.3,1.4-.5,2.7-.5,4.1,0,6.4,3.3,12.4,5.9,17,2,3.6,3.6,6.5,2.4,7.7-.3.3-.6.4-1,.4-1.2,0-2.8-.9-4.9-2.1-3.8-2.1-9-4.9-15.4-4.9s-1.3,0-2,0c-5.1.5-8.6,2.5-11.8,4.3-2.6,1.5-4.7,2.7-7,2.7s-1.6-.1-2.5-.5c-2.8-1.1-4.1-3.4-5.2-5.6-1.2-2.3-2.4-4.5-5.2-5.3-.6-.2-1.3-.3-1.9-.3-3.9,0-7.8,2.9-10.7,5.1-1.7,1.3-3.3,2.5-4.2,2.5h0Z" fill="#efe7da"/>
                </g>
                <g>
                  <path d="M600,322.5c0,2.5-2.1,4.4-4.5,6.6-2.9,2.7-6.2,5.7-7,10.6-.7,4.6,1.2,8.5,2.7,11.6,1.2,2.5,2.2,4.5,1.1,5.7-1.1,1.2-3,.5-5.7-.5-3.1-1.2-7.4-2.8-12.1-1.7-3.9.9-6.5,3.3-8.5,5.2-1.9,1.8-3.5,3.2-5.3,2.6-2.1-.7-2.7-3.5-3.3-6.4-.6-2.9-1.2-5.9-3.4-6.7-2.3-.9-5.1,1-7.5,2.7-2.1,1.4-3.9,2.6-5,1.8-1-.7-.6-2.5,0-4.8.7-2.8,1.6-6.3-.1-9-1.2-1.9-3-2.4-4.8-2.9-1.7-.5-3.3-.9-4-2.6h0c-1.1-2.3.6-4.4,2.6-7.1,1.8-2.4,3.9-5.2,4.7-8.8,1.9-7.9-3.3-15.9-6.7-21.1-2.2-3.4-3.8-5.9-2.7-7,.8-.8,2.2,0,4.2,1,2.7,1.5,6.5,3.5,11.2,3.1,4.4-.4,7.1-2.6,9.5-4.6,2.4-2,4.5-3.7,7.7-3.2,3.3.5,5,3.1,6.7,5.7,1.7,2.6,3.4,5,6.5,5.3,3.4.4,6.3-2,8.6-4,1.7-1.4,3.1-2.6,4-1.9,1.1.7.4,2.7-.5,5.4-1.3,3.8-3,9.1-.9,13.6,1.6,3.3,4.5,4.7,7.1,5.9,2.6,1.2,4.8,2.2,5.2,4.7,0,.3,0,.6,0,.9ZM588,341.7c0-.7,0-1.3.2-2,.8-5,4.1-8.1,7.1-10.8,2.6-2.4,4.8-4.4,4.3-7.1-.4-2.3-2.6-3.3-5-4.5-2.7-1.2-5.7-2.7-7.3-6.1-2.2-4.7-.4-10,.9-13.9.8-2.5,1.5-4.4.6-5-.7-.5-2,.6-3.6,1.9-2.2,1.9-5.3,4.5-8.9,4.1-3.3-.4-5-3-6.8-5.5-1.7-2.5-3.4-5-6.5-5.5-2.9-.5-5,1.2-7.4,3.1-2.5,2-5.3,4.3-9.7,4.7-4.9.4-8.7-1.7-11.4-3.2-1.8-1-3.2-1.7-3.8-1.1-.9.9.7,3.4,2.8,6.6,2.9,4.5,7.2,11.1,7.2,17.9,0,1.2-.1,2.4-.4,3.5-.9,3.7-3,6.5-4.8,8.9-2,2.6-3.5,4.7-2.6,6.8h0c.7,1.5,2.1,1.9,3.8,2.4,1.7.5,3.7,1.1,5,3.1,1.8,2.9.9,6.4.2,9.3-.5,2-1,3.8-.1,4.4.9.7,2.6-.5,4.6-1.8,2.5-1.7,5.4-3.6,7.9-2.7,2.4.9,3,4,3.7,7,.6,2.8,1.1,5.5,3,6.1,1.6.6,3-.7,4.9-2.5,2.1-1.9,4.7-4.3,8.7-5.3,4.9-1.2,9.2.5,12.4,1.7,2.5,1,4.3,1.7,5.3.6,1-1,0-2.8-1.1-5.3-1.3-2.6-2.9-5.9-2.9-9.8Z" fill="#fff"/>
                  <path d="M562,286.8c-2.5,0-4.4,1.6-6.6,3.3-2.4,2-5.2,4.3-9.5,4.6-.4,0-.8,0-1.2,0-4.2,0-7.5-1.8-10-3.2-1.4-.8-2.5-1.4-3.4-1.4s-.6.1-.9.3c-1.1,1.1.5,3.6,2.7,7,3.4,5.3,8.6,13.3,6.7,21.1-.9,3.6-2.9,6.4-4.7,8.8-2.1,2.7-3.7,4.9-2.6,7.1.8,1.6,2.3,2.1,4,2.6,1.8.5,3.6,1,4.8,2.9,1.7,2.7.9,6.2.1,9-.6,2.2-1,4,0,4.8.2.2.5.3.8.3,1.1,0,2.5-1,4.2-2.1,2-1.4,4.2-2.9,6.2-2.9.4,0,.9,0,1.3.2,2.2.8,2.8,3.8,3.4,6.7.6,2.9,1.2,5.7,3.3,6.4.3.1.6.2.9.2,1.5,0,2.8-1.2,4.4-2.7,2-1.9,4.6-4.2,8.5-5.2,1.1-.3,2.2-.4,3.3-.4,3.4,0,6.5,1.2,8.8,2.1,1.7.6,3,1.2,4.1,1.2s1.1-.2,1.6-.6c1.2-1.2.2-3.2-1.1-5.7-1.5-3.1-3.4-7-2.7-11.6.8-4.9,4.1-7.9,7-10.6,2.4-2.2,4.5-4.1,4.5-6.6s0-.6,0-.9c-.5-2.5-2.7-3.5-5.2-4.7-2.6-1.2-5.6-2.6-7.1-5.9-2.1-4.5-.4-9.8.9-13.6.9-2.7,1.6-4.7.5-5.4-.2-.1-.4-.2-.6-.2-.9,0-2,1-3.4,2.1-2.2,1.8-4.8,4-7.9,4s-.5,0-.7,0c-3.1-.3-4.7-2.8-6.5-5.3-1.7-2.5-3.5-5.1-6.7-5.7-.4,0-.7,0-1.1,0h0ZM544.7,295.1c.4,0,.8,0,1.3,0,4.5-.4,7.3-2.7,9.7-4.7,2.1-1.7,3.9-3.2,6.3-3.2.3,0,.7,0,1,0,3.1.5,4.8,3.1,6.5,5.5,1.7,2.5,3.5,5.2,6.8,5.5.2,0,.5,0,.7,0,3.3,0,6.1-2.4,8.2-4.1,1.3-1.1,2.4-2,3.2-2s.3,0,.4.1c.8.5.2,2.5-.6,5-1.3,3.9-3.1,9.2-.9,13.9,1.6,3.5,4.7,4.9,7.3,6.1,2.5,1.2,4.6,2.1,5,4.5.5,2.7-1.7,4.7-4.3,7.1-3,2.7-6.3,5.8-7.1,10.8-.1.7-.2,1.4-.2,2,0,3.9,1.7,7.2,2.9,9.8,1.2,2.5,2.1,4.2,1.1,5.3-.3.4-.8.5-1.3.5-1,0-2.3-.5-4-1.1-2.4-.9-5.5-2.1-9-2.1s-2.2.1-3.4.4c-4,1-6.6,3.3-8.7,5.3-1.6,1.5-2.8,2.6-4.2,2.6s-.5,0-.8-.1c-1.9-.7-2.5-3.3-3-6.1-.6-3-1.3-6.1-3.7-7-.5-.2-.9-.3-1.4-.3-2.1,0-4.4,1.5-6.5,2.9-1.6,1.1-3,2-3.9,2s-.5,0-.6-.2c-.8-.6-.4-2.3.1-4.4.7-2.9,1.7-6.4-.2-9.3-1.3-2-3.3-2.6-5-3.1-1.7-.5-3.1-.9-3.8-2.4-1-2.1.6-4.1,2.6-6.8,1.8-2.5,3.9-5.2,4.8-8.9.3-1.2.4-2.4.4-3.5,0-6.8-4.2-13.3-7.2-17.9-2-3.2-3.7-5.7-2.8-6.6.2-.2.4-.2.6-.2.7,0,1.8.6,3.2,1.3,2.5,1.4,5.9,3.2,10.2,3.2h0Z" fill="#efe7da"/>
                </g>
                <g>
                  <path d="M592,322.7c0,1.6-1.7,2.7-3.7,4-2.3,1.5-5.2,3.4-6.3,6.8-1.2,3.8.4,7.5,1.8,10.5,1,2.3,1.8,4,.8,4.9-.9.9-2.5,0-4.5-.9-2.6-1.3-5.8-2.9-9.1-1.8-2.5.8-4.1,2.8-5.3,4.4-1.2,1.5-2.1,2.7-3.3,2.4-1.2-.3-1.5-1.7-1.9-3.3-.4-1.8-.9-3.8-2.6-4.7-1.6-.9-3.3-.3-4.9.2-1.5.5-3,1-4.1,0-1.1-.9-.9-2.3-.7-3.9.2-1.7.5-3.6-.6-5.2-1.1-1.7-3.1-2.1-4.7-2.5-1.5-.3-3-.6-3.6-1.9-.8-1.7.7-3.5,2.6-5.7,2-2.3,4.5-5.2,4.9-9.1.5-4.7-2.1-8.6-4.3-11.7-1.6-2.4-2.9-4.2-1.9-5.5.8-1,2.3-.7,4.3-.2,2.4.6,5.8,1.3,9.3-.1,2.3-1,3.6-2.4,4.6-3.6,1.1-1.2,2-2.2,3.4-2.1,2,.2,3.1,2.3,4.2,4.5,1.2,2.4,2.5,5,5.3,5.9,2.2.7,4.3,0,6-.7,1.5-.6,2.8-1,3.7-.2.9.9.3,2.3-.3,3.9-.7,1.8-1.5,4-.8,6.1,1,3,4.2,4.2,7,5.4,2.6,1,4.8,1.9,5,3.8,0,0,0,.2,0,.3ZM581.2,336.3c0-.9.1-1.9.4-2.8,1.1-3.5,4.1-5.4,6.5-7,2.1-1.3,3.7-2.4,3.5-3.9-.2-1.7-2.3-2.5-4.7-3.5-2.9-1.2-6.2-2.5-7.2-5.6-.8-2.3.1-4.6.8-6.4.6-1.6,1.1-2.8.4-3.5-.7-.7-1.8-.2-3.3.3-1.7.6-3.9,1.4-6.2.7-2.9-.9-4.3-3.7-5.5-6.1-1.1-2.2-2-4.1-3.9-4.3-1.3-.1-2.1.8-3.1,2-1.1,1.2-2.4,2.7-4.7,3.7-3.6,1.5-7,.7-9.5.2-1.9-.4-3.3-.8-3.9,0-.8,1,.4,2.8,1.9,5,2.1,3,4.9,7.2,4.3,11.9-.4,4-3,6.9-5,9.3-1.8,2.1-3.2,3.8-2.5,5.3.5,1.1,1.8,1.4,3.3,1.7,1.8.3,3.7.7,5,2.6,1.2,1.8.9,3.8.7,5.5-.2,1.5-.4,2.8.5,3.6.9.8,2.2.4,3.7-.1,1.6-.5,3.5-1.1,5.2-.2v.2c0,0,0-.2,0-.2,1.9,1,2.4,3.1,2.8,5,.4,1.5.7,2.8,1.6,3.1,1,.2,1.8-.8,2.9-2.2,1.3-1.7,2.9-3.7,5.5-4.6,3.5-1.1,6.7.5,9.4,1.8,1.9.9,3.3,1.7,4.1,1,.8-.7,0-2.4-.9-4.5-1-2.2-2.2-5-2.2-7.9Z" fill="#fff"/>
                  <path d="M561.8,293.8c-1.3,0-2.1.9-3.2,2.1-1,1.2-2.3,2.6-4.6,3.6-1.5.6-3,.9-4.4.9s-3.5-.4-4.9-.7c-1-.2-2-.5-2.7-.5s-1.2.2-1.6.6c-1,1.2.3,3.1,1.9,5.5,2.1,3.1,4.8,7,4.3,11.7-.4,3.9-2.9,6.8-4.9,9.1-1.9,2.2-3.4,3.9-2.6,5.7.6,1.3,2.1,1.6,3.6,1.9,1.7.3,3.6.7,4.7,2.5,1.1,1.7.9,3.6.6,5.2-.2,1.6-.4,3,.7,3.9.4.4,1,.5,1.5.5.8,0,1.7-.3,2.6-.6,1-.3,2.1-.7,3.1-.7.6,0,1.2.1,1.8.4,1.7.9,2.2,3,2.6,4.7.4,1.6.7,3,1.9,3.3.1,0,.3,0,.4,0,1,0,1.9-1.1,2.9-2.4,1.3-1.6,2.8-3.6,5.3-4.4.8-.2,1.5-.3,2.3-.3,2.5,0,4.8,1.2,6.8,2.2,1.4.7,2.6,1.3,3.5,1.3s.7-.1,1-.4c1-.9.2-2.7-.8-4.9-1.3-3-2.9-6.7-1.8-10.5,1.1-3.4,4-5.3,6.3-6.8,2-1.3,3.7-2.4,3.7-4s0-.2,0-.3c-.2-1.9-2.4-2.8-5-3.8-2.8-1.1-6-2.4-7-5.4-.7-2.2.1-4.4.8-6.1.6-1.6,1.2-3,.3-3.9-.3-.3-.7-.5-1.2-.5-.7,0-1.6.3-2.5.7-1.2.4-2.6,1-4.2,1s-1.2,0-1.8-.3c-2.8-.9-4.1-3.5-5.3-5.9-1.1-2.2-2.1-4.3-4.2-4.5,0,0-.2,0-.3,0h0ZM549.6,300.7c1.4,0,3-.2,4.5-.9,2.4-1,3.7-2.5,4.7-3.7,1-1.1,1.7-2,2.9-2,0,0,.2,0,.2,0,1.8.2,2.8,2.1,3.9,4.3,1.2,2.4,2.6,5.2,5.5,6.1.7.2,1.3.3,1.9.3,1.6,0,3.1-.5,4.3-1,.9-.3,1.7-.6,2.4-.6s.7,0,.9.3c.7.7.2,1.9-.4,3.5-.7,1.8-1.6,4.1-.8,6.4,1,3.1,4.3,4.4,7.2,5.6,2.4,1,4.6,1.8,4.7,3.5.2,1.5-1.4,2.6-3.5,3.9-2.4,1.6-5.4,3.5-6.5,7-.3.9-.4,1.9-.4,2.8,0,2.9,1.2,5.7,2.2,7.9.9,2.1,1.7,3.8.9,4.5-.2.2-.5.3-.8.3-.8,0-2-.6-3.3-1.2-2-1-4.4-2.2-7-2.2s-1.6.1-2.4.4c-2.6.8-4.2,2.9-5.5,4.6-1,1.3-1.8,2.3-2.6,2.3s-.2,0-.3,0c-1-.2-1.3-1.5-1.6-3.1-.5-1.9-1-4-2.8-5v.2c0,0,0-.2,0-.2-.7-.4-1.3-.5-2-.5-1.1,0-2.2.3-3.2.7-.9.3-1.7.6-2.5.6s-.9-.1-1.3-.4c-.9-.7-.7-2.1-.5-3.6.2-1.7.5-3.7-.7-5.5-1.2-1.9-3.2-2.3-5-2.6-1.5-.3-2.8-.6-3.3-1.7-.7-1.5.7-3.2,2.5-5.3,2-2.4,4.6-5.3,5-9.3.5-4.8-2.3-8.9-4.3-11.9-1.5-2.2-2.7-4-1.9-5,.3-.4.7-.5,1.3-.5.7,0,1.6.2,2.6.4,1.4.3,3.1.7,5,.7h0Z" fill="#efe7da"/>
                </g>
                <g>
                  <path d="M583.7,323c0,1-1.4,1.6-3.2,2.3-2.2.9-4.9,1.9-5.7,4.1-1,2.7,1.1,6,2.6,8.4,1.1,1.8,1.9,3.1,1.3,3.7-.6.6-2-.1-3.8-1-2.3-1.2-5.2-2.7-7-1.6-1.3.8-1.7,2.8-1.9,4.4-.2,1.3-.4,2.4-1.1,2.4-.7,0-1-.8-1.6-1.9-.7-1.5-1.6-3.5-3.5-4.3-1.3-.5-2.4-.3-3.4,0-1.1.2-2,.4-2.7-.3h0c-.8-.7-.6-1.7-.5-2.8.2-1.1.3-2.2-.3-3.4-.8-1.3-2.1-1.6-3.4-1.9-1.2-.3-2.3-.5-2.7-1.5-.6-1.3.5-2.5,1.9-4.1,1.4-1.6,3.2-3.6,3.6-6.2.6-3.8-1.8-7.4-3.5-9.9-1.3-1.9-2.2-3.3-1.5-4.1.5-.6,1.5-.3,2.8.2,1.6.5,3.8,1.3,6,.5,1.6-.6,2.6-1.8,3.3-2.7.7-.9,1.3-1.7,2.3-1.6,1.4.1,2,1.9,2.7,3.9.7,2.1,1.6,4.5,3.5,5.2,2.1.7,4.5-.8,6.4-2,1.5-.9,2.6-1.6,3.2-1.1.6.5,0,1.6-.7,3-.9,1.8-2.2,4.3-1.4,6.4.8,2,3.1,2.9,5.1,3.6,1.7.6,3.3,1.2,3.4,2.4,0,0,0,.1,0,.2ZM574.1,330.9c0-.5,0-1.1.3-1.6.9-2.4,3.7-3.5,5.9-4.4,1.7-.7,3.1-1.2,3-2.1-.1-1-1.6-1.5-3.2-2.1-2.1-.8-4.5-1.6-5.3-3.8-.9-2.3.4-4.9,1.4-6.7.6-1.2,1.1-2.2.8-2.6-.4-.4-1.5.4-2.7,1.1-2,1.2-4.5,2.8-6.7,2-2.1-.7-2.9-3.2-3.7-5.4-.7-1.9-1.2-3.5-2.4-3.6-.8,0-1.2.6-1.9,1.4-.8,1-1.7,2.2-3.5,2.9-2.4.9-4.6.1-6.3-.4-1.1-.4-2-.7-2.4-.3-.5.6.4,1.9,1.5,3.6,1.8,2.6,4.2,6.2,3.6,10.2-.4,2.8-2.2,4.8-3.7,6.4-1.3,1.5-2.3,2.6-1.8,3.7.4.8,1.3,1,2.5,1.3,1.3.3,2.8.6,3.7,2.1.7,1.2.6,2.5.4,3.6-.1,1-.3,1.9.3,2.5h-.1c0,.1.1,0,.1,0,.6.6,1.4.4,2.4.2,1.1-.2,2.3-.4,3.7.1,2.1.8,3,3,3.7,4.5.4.9.8,1.8,1.2,1.7.4,0,.6-1.1.8-2.1.3-1.7.6-3.7,2.1-4.7,2-1.2,5,.3,7.4,1.6,1.5.8,2.9,1.5,3.3,1.1.4-.4-.5-1.8-1.4-3.2-1.3-2-2.9-4.6-2.9-7.1Z" fill="#fff"/>
                  <path d="M561.3,301.4c-.9,0-1.4.7-2.1,1.6-.7.9-1.6,2.1-3.3,2.7-.7.3-1.4.4-2.1.4-1.5,0-2.8-.5-3.9-.8-.8-.3-1.4-.5-2-.5s-.6,0-.8.3c-.7.8.2,2.2,1.5,4.1,1.7,2.6,4.1,6.1,3.5,9.9-.4,2.7-2.2,4.6-3.6,6.2-1.4,1.6-2.5,2.8-1.9,4.1.5,1,1.6,1.2,2.7,1.5,1.3.3,2.6.6,3.4,1.9.7,1.1.5,2.2.3,3.4-.2,1.1-.3,2.1.5,2.8.4.4.9.5,1.4.5s.9,0,1.4-.2c.6-.1,1.2-.2,1.8-.2.5,0,1.1,0,1.7.3,1.9.8,2.9,2.8,3.5,4.3.5,1.1.9,1.9,1.5,1.9s0,0,0,0c.7,0,.9-1.1,1.1-2.4.3-1.6.6-3.6,1.9-4.4.4-.3,1-.4,1.5-.4,1.7,0,3.8,1.1,5.5,2,1.3.7,2.4,1.3,3.2,1.3s.5,0,.6-.2c.6-.6-.2-1.9-1.3-3.7-1.5-2.4-3.6-5.7-2.6-8.4.8-2.2,3.5-3.3,5.7-4.1,1.8-.7,3.2-1.3,3.2-2.3s0-.1,0-.2c-.2-1.2-1.7-1.8-3.4-2.4-2-.7-4.3-1.6-5.1-3.6-.8-2.1.4-4.6,1.4-6.4.7-1.4,1.3-2.5.7-3-.1-.1-.3-.2-.5-.2-.6,0-1.5.6-2.6,1.3-1.6,1-3.4,2.2-5.2,2.2s-.8,0-1.2-.2c-1.9-.7-2.7-3.1-3.5-5.2-.7-2-1.3-3.7-2.7-3.9,0,0-.1,0-.2,0h0ZM553.8,306.5c.7,0,1.5-.1,2.3-.4,1.7-.7,2.7-1.9,3.5-2.9.6-.8,1.1-1.4,1.8-1.4,0,0,0,0,.1,0,1.2.1,1.7,1.7,2.4,3.6.8,2.2,1.6,4.6,3.7,5.4.4.2.9.2,1.3.2,1.9,0,3.8-1.2,5.4-2.2,1-.6,1.9-1.2,2.4-1.2s.2,0,.3,0c.4.3-.2,1.4-.8,2.6-1,1.9-2.3,4.5-1.4,6.7.8,2.2,3.2,3.1,5.3,3.8,1.6.6,3,1.1,3.2,2.1.1.8-1.3,1.4-3,2.1-2.2.9-5,2-5.9,4.4-.2.5-.3,1.1-.3,1.6,0,2.4,1.7,5.1,2.9,7.1.9,1.4,1.8,2.8,1.4,3.2,0,0-.2.1-.4.1-.6,0-1.8-.6-3-1.2-1.8-.9-3.9-2-5.7-2s-1.2.1-1.7.4c-1.5.9-1.8,3-2.1,4.7-.2,1.1-.3,2.1-.8,2.1,0,0,0,0,0,0-.4,0-.7-.8-1.2-1.7-.7-1.5-1.7-3.7-3.7-4.5-.6-.3-1.2-.3-1.8-.3s-1.3.1-1.9.2c-.5,0-.9.2-1.3.2s-.8-.1-1.1-.4h-.1c0,.1.1,0,.1,0-.6-.6-.5-1.5-.3-2.5.2-1.1.3-2.4-.4-3.6-.9-1.4-2.4-1.8-3.7-2.1-1.1-.2-2.1-.5-2.5-1.3-.5-1.1.5-2.2,1.8-3.7,1.4-1.6,3.2-3.7,3.7-6.4.6-4-1.8-7.6-3.6-10.2-1.1-1.7-2-3-1.5-3.6.1-.1.3-.2.5-.2.5,0,1.1.2,1.8.5,1.1.4,2.5.9,4,.9h0Z" fill="#efe7da"/>
                </g>
                <path d="M574.3,322.8c0,.7-1,1.2-2.2,1.7-1.4.6-3.1,1.4-3.5,2.8-.5,1.7,1,3.8,2,5.1.6.8.8,1.1.6,1.3-.3.2-.6-.1-1.6-1-1.2-1.1-3-2.8-4-2.3-.8.4-.9,2.2-1,3.5,0,1.2-.1,1.9-.6,1.9-.4,0-.5-.4-.7-1-.3-.8-.7-1.9-1.6-2.2-.8-.3-1.6.2-2.3.6-.7.4-1.2.7-1.7.4-.5-.3-.3-1,0-1.8.2-.9.5-1.9,0-2.8-.4-.8-1.2-1-2-1.2-.7-.2-1.4-.4-1.6-1h0c-.3-.8.4-1.4,1.2-2.2.8-.8,1.8-1.7,2.2-3.1.5-2.1-.6-4.2-1.4-5.8-.6-1.3-1.1-2.2-.6-2.6.4-.3.9-.1,1.5,0,.7.3,1.5.6,2.3.2,1-.4,1.3-1.5,1.7-2.4.2-.7.4-1.2.9-1.2.5,0,.7.8.9,2,.3,1.4.7,3.4,1.9,3.9,1.1.5,2.6-.2,3.8-.8,1-.5,1.7-.9,2.1-.5.3.4,0,1-.4,1.7-.5.9-1.2,2.1-.8,3.1.4,1.1,1.7,1.6,2.9,2.1,1,.4,1.9.7,2,1.4,0,0,0,0,0,0ZM568.2,328.1c0-.3,0-.6.1-.8.5-1.6,2.3-2.4,3.7-3,1.1-.5,2-.9,2-1.4,0-.5-.8-.8-1.7-1.1-1.2-.4-2.7-1-3.1-2.3-.4-1.2.3-2.4.9-3.4.3-.6.6-1.1.5-1.3-.2-.2-1,.2-1.7.5-1.3.6-2.9,1.4-4.2.8-1.4-.7-1.8-2.7-2.1-4.2-.2-.7-.4-1.7-.6-1.7-.2,0-.3.5-.5,1-.3.9-.8,2.1-1.9,2.6-1,.4-1.9,0-2.6-.2-.5-.2-.9-.4-1.1-.2-.3.3.1,1.2.7,2.2.8,1.6,2,3.9,1.4,6.1-.4,1.5-1.5,2.5-2.3,3.3-.7.7-1.3,1.2-1.1,1.8h0c.2.5.7.6,1.4.8.8.2,1.7.5,2.2,1.3.6,1,.3,2.1,0,3-.2.6-.3,1.2,0,1.4.2.2.7,0,1.3-.4.7-.4,1.7-.9,2.6-.6,1,.4,1.5,1.5,1.8,2.4.1.3.3.7.4.8.1,0,.2-1,.2-1.6.1-1.5.2-3.3,1.2-3.8,1.2-.5,3.1,1.2,4.4,2.4.3.3.6.6.9.8-.1-.2-.3-.4-.4-.6-.8-1.1-2.1-2.9-2.1-4.6Z"/>
                <path d="M568.4,322.6c0,.3-.4.4-1,.5-.8.2-1.9.4-2.2,1.1-.3.7.4,1.7.9,2.4.4.5.5.8.3,1-.2.2-.4,0-.8-.3-.4-.3-1-.8-1.3-.7-.4.1-.4,1-.5,1.5,0,.6,0,.9-.4.9-.3,0-.4-.3-.5-.8,0-.3-.3-.9-.5-1-.2,0-.6.8-.7,1.1-.3.5-.4.8-.6.7-.2,0-.2-.3-.1-.7.1-.5.3-1.4-.1-2.1-.2-.4-.5-.5-.7-.7-.3-.2-.5-.3-.6-.7-.1-.6.4-.9.9-1.3.5-.4,1-.8,1.1-1.4.3-1.1-.7-2.4-1.3-3.2-.4-.6-.7-.9-.5-1.1.2-.2.4,0,.8.2.4.2.9.6,1.2.4.2-.1.3-.5.4-.8,0-.3.1-.6.4-.7.3,0,.4.3.6.8.2.6.5,1.4,1.1,1.6.7.3,1.6-.2,2.2-.5.5-.3.7-.4.9-.2.2.2,0,.5-.6,1-.5.5-1.3,1.3-1.1,1.8.2.4,1.1.6,1.8.7.7.1,1,.2,1.1.5,0,0,0,0,0,0ZM564.7,324.5c0-.2,0-.3,0-.5.3-.9,1.6-1.1,2.5-1.3.2,0,.4,0,.6-.1-.2,0-.4,0-.6-.1-.8-.1-1.9-.3-2.1-.9-.2-.7.6-1.6,1.2-2.2,0,0,.2-.2.3-.3,0,0-.1,0-.2,0-.7.4-1.7.9-2.6.6-.7-.3-1.1-1.2-1.3-1.8,0-.2-.2-.4-.2-.5,0,0,0,.2,0,.3,0,.4-.2.9-.6,1.1-.5.3-1.1-.1-1.6-.4,0,0-.1,0-.2-.1,0,.1.2.3.3.4.7.9,1.7,2.2,1.4,3.5-.2.8-.8,1.2-1.3,1.6-.5.4-.8.7-.7,1h0c0,.2.2.3.4.4.3.2.6.4.9.8.4.7.3,1.5.3,2,.3-.6.6-1.2,1.1-1.2.4,0,.6.6.8,1.2,0,.1,0,.3.1.4,0-.1,0-.3,0-.4,0-.7.2-1.6.7-1.8.5-.2,1.2.3,1.7.7,0,0,0,0,0,0,0,0,0-.1-.1-.2-.4-.6-1-1.5-1-2.2Z"/>
                <g filter="url(#drop-shadow-17)">
                  <circle cx="547.1" cy="342.8" r="12.7" transform="translate(98.3 806.9) rotate(-78)" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M560.2,342.7c0,1.4-.2,2.7-.7,4.1-1.1,3.3-3.4,6-6.5,7.6-3.1,1.6-6.7,1.9-10,.8-3.3-1.1-6-3.4-7.6-6.5-1.6-3.1-1.9-6.7-.8-10,2.2-6.8,9.6-10.6,16.5-8.4,3.3,1.1,6,3.4,7.6,6.5.9,1.9,1.4,3.9,1.4,5.9ZM534.8,342.8c0,1.9.4,3.8,1.3,5.6,1.5,2.9,4,5.1,7.2,6.1,3.1,1,6.5.8,9.4-.7,2.9-1.5,5.1-4,6.1-7.2h0c2.1-6.5-1.4-13.4-7.9-15.5-6.5-2.1-13.4,1.4-15.5,7.9-.4,1.3-.6,2.6-.6,3.8Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g filter="url(#drop-shadow-18)">
                  <circle cx="566.1" cy="325.8" r="17.4" transform="translate(192.8 861.7) rotate(-85.1)" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M583.8,325.7c0,1.9-.3,3.7-.9,5.5-3,9.3-13.1,14.4-22.4,11.3-4.5-1.5-8.2-4.6-10.3-8.8-2.1-4.2-2.5-9-1-13.5,1.5-4.5,4.6-8.2,8.8-10.3,4.2-2.1,9-2.5,13.5-1,4.5,1.5,8.2,4.6,10.3,8.8,1.3,2.5,1.9,5.3,1.9,8ZM549.1,325.8c0,2.6.6,5.2,1.8,7.7,2.1,4,5.6,7.1,9.9,8.5,8.9,2.9,18.5-2,21.4-10.9,1.4-4.3,1.1-8.9-1-13-2.1-4-5.6-7.1-9.9-8.5-8.9-2.9-18.5,2-21.4,10.9-.6,1.7-.9,3.5-.9,5.3Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M572,326.1c.6-1.8-.4-3.7-2.2-4.3-1.8-.6-3.7.4-4.3,2.2-.6,1.8.4,3.7,2.2,4.3,1.8.6,3.7-.4,4.3-2.2Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M572.4,325c0,.4,0,.8-.2,1.1h0c-.3.9-.9,1.7-1.8,2.1-.9.4-1.8.5-2.8.2-.9-.3-1.7-.9-2.1-1.8-.4-.9-.5-1.8-.2-2.8.6-1.9,2.7-2.9,4.6-2.3.9.3,1.7.9,2.1,1.8.3.5.4,1.1.4,1.6ZM565.5,325c0,.5.1,1,.4,1.5.4.8,1.1,1.3,1.9,1.6.8.3,1.7.2,2.5-.2.8-.4,1.3-1.1,1.6-1.9h0c.3-.8.2-1.7-.2-2.5-.4-.8-1.1-1.3-1.9-1.6-1.7-.6-3.5.4-4.1,2.1-.1.3-.2.7-.2,1Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M567.5,321.7h2c.2,0,.4.2.4.4v.2c0,.2-.2.4-.4.4h-2v-.9h0Z" transform="translate(246.6 890.9) rotate(-90)" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M569.4,321.4v2.1h-1.3v-2.1c0-.4.3-.7.7-.7s.7.3.7.7ZM569,323.2v-1.8c0-.2-.1-.3-.3-.3s-.3.1-.3.3v1.8h.6Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M571,325.8c.4-1.3-.3-2.6-1.5-3-1.3-.4-2.6.3-3,1.5s.3,2.6,1.5,3c1.3.4,2.6-.3,3-1.5Z" fill="#fff" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M571.4,325c0,.3,0,.5-.1.8-.2.7-.7,1.2-1.3,1.5-.6.3-1.3.4-2,.2-.7-.2-1.2-.7-1.5-1.3-.3-.6-.4-1.3-.2-2,.2-.7.7-1.2,1.3-1.5.6-.3,1.3-.4,2-.2.7.2,1.2.7,1.5,1.3.2.4.3.8.3,1.2ZM566.5,325c0,.3,0,.7.2,1,.3.5.7.9,1.3,1.1,1.2.4,2.4-.3,2.8-1.4.4-1.2-.3-2.4-1.4-2.8-1.2-.4-2.4.3-2.8,1.4,0,.2-.1.5-.1.7Z" fill="#fff" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <g>
                    <rect x="543.8" y="340.2" width="6.6" height="6.6" rx="2.7" ry="2.7" transform="translate(133.9 -153.1) rotate(18.1)" fill="#dbedda" stroke="#b0c1ae" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M551,342.7c0,.2,0,.4-.1.7l-.8,2.6c-.4,1.1-1.6,1.7-2.7,1.4l-2.6-.8c-.5-.2-1-.6-1.2-1.1-.3-.5-.3-1.1-.1-1.6l.8-2.6c.4-1.1,1.6-1.7,2.7-1.4l2.6.8c.5.2,1,.6,1.2,1.1.2.3.2.6.2,1ZM547.4,346.9c.9.3,1.9-.2,2.2-1.1l.8-2.6c.1-.4.1-.9-.1-1.3-.2-.4-.6-.7-1-.9l-2.6-.8c-.9-.3-1.9.2-2.2,1.1l-.8,2.6c-.1.4-.1.9.1,1.3.2.4.6.7,1,.9l2.6.8Z" fill="#dbedda" stroke="#b0c1ae" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M546.7,342.7c-.3-.4-1.8,1-4.1.6-.9-.1-1-.4-1.6-.3-1.1.3-1.2,1.6-2.4,3.2-1.4,1.8-2.8,2.1-2.6,2.5.2.5,3.1.6,4.5-1,.5-.6.9-1.4,1.8-1.6.5-.1.7,0,1.1,0,1.9,0,3.7-2.9,3.3-3.4Z" fill="#dbedda" stroke="#b0c1ae" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M546.9,342.9c0,.3-.1.5-.2.8-.5,1.1-1.9,2.6-3.3,2.6-.1,0-.3,0-.4,0-.2,0-.4,0-.7,0-.6.2-1,.6-1.3,1.1-.1.2-.3.3-.4.5-1.1,1.2-3.1,1.5-4.2,1.3-.4,0-.6-.2-.7-.4-.1-.3.2-.5.6-.8.5-.4,1.3-.9,2.1-1.9.5-.6.8-1.2,1-1.7.4-.8.7-1.4,1.5-1.6.4,0,.6,0,.9,0,.2,0,.4.1.8.2,1.4.2,2.4-.2,3.1-.5.5-.2.9-.4,1.1,0h0c0,0,.1.2.1.3ZM536.1,348.7s.2,0,.6.1c.9.1,2.7-.1,3.7-1.2.1-.1.3-.3.4-.5.4-.5.8-1,1.5-1.2.3,0,.6,0,.8,0,.1,0,.2,0,.3,0,1.2,0,2.5-1.4,3-2.4.2-.5.2-.7.2-.7h0c0,0-.4.1-.7.2-.7.3-1.9.7-3.3.5-.4,0-.6-.1-.8-.2-.3,0-.4-.1-.7,0-.6.1-.9.6-1.2,1.4-.3.5-.6,1.1-1.1,1.7-.8,1-1.6,1.6-2.1,2-.2.1-.4.3-.5.4Z" fill="#dbedda" stroke="#b0c1ae" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M547.2,342.3c0-.2-.3-.6-.3-1.1,0-.7.3-1,.4-1.4.4-1.4-1.1-2.9-1-3,.2-.1,1.6,1.1,2.3,3,0,.2.4,1.2.2,2.3,0,.4-.2,1.3-.6,1.4-.4,0-.9-.8-1.1-1.1Z" fill="#dbedda" stroke="#b0c1ae" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M549.1,341.4c0,.2,0,.4,0,.6,0,.8-.3,1.5-.7,1.6-.6.1-1.2-1-1.3-1.2,0-.2-.3-.6-.3-1.2,0-.5.1-.8.3-1.1,0-.1.1-.2.1-.4.3-.9-.4-1.9-.7-2.5-.2-.3-.4-.5-.2-.7,0,0,.1,0,.2,0,.4.1,1.7,1.3,2.4,3.1.1.3.3,1,.3,1.8ZM547.1,341.2s0,0,0,0c0,.5.2.9.3,1h0c.3.5.7,1.1.9,1,.1,0,.3-.3.4-1.3.1-1,0-1.8-.2-2.2-.4-1.2-1.1-2-1.6-2.5.4.6.9,1.6.6,2.6,0,.1-.1.3-.2.4-.1.3-.2.5-.2.9Z" fill="#dbedda" stroke="#b0c1ae" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M547.2,342c-.4-.8-1.1-1.2-1.5-1.5-1.1-.7-1.7-1.1-2.9-1.6-1-.4-2.8-1.2-3-.9,0,.2,1,1.1,3.1,2.9.6.5,1.5,1.2,2.8,1.8.5.2,1.4.6,1.7.3.2-.2,0-.7-.2-1Z" fill="#dbedda" stroke="#b0c1ae" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M547.7,342.8c0,.1,0,.2,0,.3-.3.3-1,.2-1.9-.3-1.4-.6-2.3-1.4-2.9-1.8-3.1-2.6-3.3-2.8-3.2-3.1.2-.3.9-.2,3.2.8,1.2.5,1.8.9,2.9,1.6.3.2,1.1.7,1.5,1.6h0c.1.2.3.6.3.9ZM540.1,338.1c.3.4,1.5,1.4,3,2.6.5.4,1.4,1.2,2.8,1.8,1.2.5,1.4.4,1.5.4,0,0,0-.2-.3-.7h.2c0,0-.2,0-.2,0-.4-.8-1.1-1.2-1.4-1.4-1.1-.7-1.7-1.1-2.9-1.6-.6-.2-2.2-.9-2.7-1Z" fill="#dbedda" stroke="#b0c1ae" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M554.3,347c1.1.5,1.4.8,2.5,1.2,1.1.3,2.4.6,2.5.3,0-.2-.9-.6-2.3-1.6-2.5-1.6-2.5-2-4-2.8-2-1.1-4.6-1.8-4.9-1.3-.3.5,1,2,2.4,2.8,1.3.8,1.7.4,3.8,1.3Z" fill="#dbedda" stroke="#b0c1ae" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M559.5,348.5s0,0,0,.1c-.2.6-2.7-.2-2.8-.2-.7-.2-1.1-.4-1.6-.7-.3-.1-.6-.3-1-.5-1.1-.5-1.6-.6-2.2-.7-.5-.1-.9-.2-1.6-.6-1.2-.7-2.4-1.9-2.6-2.6,0-.2,0-.3,0-.5.5-.8,3.4.2,5.2,1.2.8.4,1.1.7,1.6,1.1.5.4,1.1.9,2.4,1.7.5.3.9.5,1.2.8.8.5,1.2.7,1.2.9ZM548.2,343s0,0,0,.1c.1.6,1.2,1.7,2.4,2.4.6.4,1,.5,1.5.6.5.1,1.2.3,2.2.8h0c.4.2.7.4,1,.5.5.2.8.4,1.5.7.9.3,1.8.4,2.2.4-.2-.1-.5-.3-.9-.6-.3-.2-.8-.5-1.2-.8-1.3-.8-1.9-1.3-2.4-1.7-.5-.4-.8-.7-1.6-1.1-2.1-1.2-4.5-1.7-4.7-1.3,0,0,0,0,0,0Z" fill="#dbedda" stroke="#b0c1ae" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M547.5,342.9c-.1-.3.1-.8.5-1.1.3-.2.7-.1,1-.2,1.1,0,1.2-1.3,2.7-2.4.2-.2,1-.7,2.1-1.1,1-.4,1.4-.2,2.6-.4,2-.4,2.9-1.2,3-1,.2.3-1.2,1.9-2.9,3.2-1.3,1-1.3.6-5.3,2.8-.2.1-1.1.6-2.4.6-.4,0-1.1,0-1.3-.4Z" fill="#dbedda" stroke="#b0c1ae" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M559.5,336.8c0,.8-2.1,2.6-2.9,3.3-.7.6-1.1.7-1.9,1.1-.7.3-1.6.7-3.5,1.7-1,.5-1.9.6-2.5.6-.5,0-1.3,0-1.5-.5h0c-.2-.4.1-1,.5-1.3.3-.2.6-.2.8-.2,0,0,.2,0,.3,0,.5,0,.8-.4,1.2-.9.3-.4.7-.9,1.4-1.5.4-.3,1.1-.8,2.1-1.1.6-.2,1-.2,1.4-.3.3,0,.7,0,1.2-.2,1.1-.2,1.8-.6,2.3-.8.5-.2.7-.3.9-.1,0,0,0,.1,0,.2ZM547.6,342.8c.1.3.8.3,1.2.3.5,0,1.4,0,2.3-.6,1.9-1,2.9-1.4,3.5-1.7.8-.3,1.1-.5,1.8-1,1.5-1.2,2.6-2.5,2.8-2.9-.1,0-.3.1-.4.2-.5.2-1.3.6-2.4.8-.5.1-.9.1-1.2.2-.4,0-.8,0-1.4.3-1,.3-1.7.8-2,1.1-.6.5-1,1-1.3,1.4-.4.6-.8,1-1.5,1.1,0,0-.2,0-.3,0-.2,0-.4,0-.6.1-.3.2-.5.6-.4.8h0Z" fill="#dbedda" stroke="#b0c1ae" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M545.3,344.6c-.1.3-.3.8-.2,1.8,0,1.6.6,2.2,1.1,3.9.6,1.9.5,3,.7,3,.3,0,0-1.9.8-4.5.5-1.7,1-2.2.9-3.5,0-.8-.5-2.3-1.3-2.4-.8-.1-1.6.8-1.9,1.6Z" fill="#dbedda" stroke="#b0c1ae" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M548.7,345.8c0,.7-.2,1.2-.4,1.8-.1.4-.3.8-.5,1.3-.5,1.5-.6,2.8-.6,3.6,0,.7,0,1-.4,1-.3,0-.3-.2-.4-.9,0-.5-.2-1.3-.5-2.3-.2-.6-.3-1.1-.5-1.5-.3-.8-.5-1.4-.6-2.5,0-1,.1-1.6.3-1.9h0c.3-.7,1.2-1.8,2.1-1.7,1,.2,1.4,1.7,1.5,2.6,0,.1,0,.3,0,.4ZM546.8,352.5s0,0,0,0c0-.8.2-2.1.6-3.7.2-.6.3-1,.5-1.4.3-.7.5-1.2.4-2,0-.8-.5-2.1-1.2-2.2-.7-.1-1.4.8-1.7,1.5-.1.3-.3.8-.2,1.7,0,1,.3,1.6.6,2.4.2.4.3.9.5,1.5.3,1,.4,1.8.5,2.3Z" fill="#dbedda" stroke="#b0c1ae" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M547.3,343.1c-.4.4.2,1.5.4,1.9.6,1.1,1.2,1.7,1.3,1.8,1.3,1.3,2.3,1.8,3.6,2.7,2.4,1.7,3.5,3,3.8,2.8.2-.2-.2-.9-.6-1.7-.4-.8-.9-1.8-2-3-1.7-1.9-2.2-1.4-3.2-2.9-.2-.3-.7-1.1-1.6-1.7-.4-.2-.8-.4-1.2-.3-.1,0-.3,0-.4.2Z" fill="#dbedda" stroke="#b0c1ae" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M556.6,352.2c0,.1,0,.2-.1.3-.3.2-.6,0-1.5-.8-.6-.5-1.4-1.2-2.6-2-.3-.2-.6-.4-.9-.6-.9-.6-1.7-1.2-2.7-2.1-.1-.1-.8-.8-1.3-1.9-.3-.5-.8-1.6-.4-2.2h0c.1-.2.3-.2.5-.2.4-.1.9,0,1.4.3.8.5,1.4,1.3,1.6,1.7h0c.5.8.8,1,1.3,1.3.5.3,1,.7,1.9,1.6,1.1,1.2,1.7,2.3,2.1,3,.4.8.7,1.3.7,1.6ZM547.3,343.5c0,.5.4,1.2.5,1.4.5,1,1.2,1.6,1.3,1.8,1,.9,1.8,1.5,2.7,2.1.3.2.6.4.9.6,1.1.8,2,1.5,2.6,2,.4.3.8.7,1,.8,0-.2-.4-.9-.7-1.4-.4-.7-.9-1.7-2-2.9-.8-.9-1.4-1.3-1.8-1.5-.5-.3-.9-.6-1.4-1.3h0c-.2-.4-.7-1.1-1.5-1.6-.4-.3-.8-.3-1.1-.3-.1,0-.2,0-.3.1,0,0,0,.2,0,.3Z" fill="#dbedda" stroke="#b0c1ae" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                </g>
                <g filter="url(#drop-shadow-19)">
                  <g>
                    <path d="M535.9,392.1c0,.5-1.1,29.2-1.1,29.2l-46.6-5-7-41.6,3.4-57.5,23.9,1.1s3.6,62.2,3.6,62.7,23.7,11.1,23.7,11.1Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M536.3,391.9v.2c0,.5-1,28.1-1.1,29.3v.4s-47.3-5-47.3-5l-7-41.9h0s3.4-58,3.4-58l24.6,1.1v.3c.2,2.5,3.5,58.9,3.6,62.5,1.4.9,14.6,7,23.5,11h.2ZM534.5,421c.4-9.5,1-26.4,1.1-28.6-1.1-.5-6.4-2.9-11.6-5.3-12.1-5.6-12.1-5.7-12.1-6.1,0-.7-3.3-57.4-3.6-62.3l-23.2-1.1-3.4,57.1,6.9,41.3,45.9,4.9ZM512.6,381s0,0,0,0c0,0,0,0,0,0Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M469.2,321.9v68.2c0,23.2,18.8,41.9,41.9,41.9h16v-21.3h-11c-14.1,0-25.6-11.4-25.6-25.6v-63.2h-21.3Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M527.5,410.3v22.1h-16.4c-11.3,0-21.9-4.4-29.9-12.4-8-8-12.4-18.6-12.4-29.9v-68.6h22.1v63.6c0,13.9,11.3,25.2,25.2,25.2h11.4ZM526.8,431.7v-20.6h-10.7c-14.3,0-25.9-11.6-25.9-25.9v-62.8h-20.6v67.8c0,11.1,4.3,21.5,12.2,29.4,7.8,7.8,18.3,12.2,29.4,12.2h15.6Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <polygon points="598.3 399.3 606.5 411.3 527.2 410.7 527.2 399.3 598.3 399.3" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M607.2,411.7l-80.4-.6v-12.2s71.7,0,71.7,0l8.7,12.8ZM527.5,410.3l78.2.6-7.7-11.3h-70.5v10.7Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <polygon points="490.6 321.9 502 321.9 502 258.2 489.5 250.1 490.6 321.9" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M502.4,258v64.2h-12.2s-1.1-72.9-1.1-72.9l13.3,8.6ZM501.6,321.5v-63.1l-11.8-7.6,1.1,70.7h10.7Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M527.2,399.3v-27.7c0-1.3,1.1-2.4,2.4-2.4h30.4c4.4,0,8.8-.6,13-1.8h0c11.7-3.2,23.3,5,24.2,17.1l1.1,14.8h-71.1Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M598.7,399.6h-71.9v-28c0-1.6,1.3-2.8,2.8-2.8h30.4c4.4,0,8.7-.6,12.9-1.8,5.7-1.6,11.7-.5,16.5,2.9,4.8,3.4,7.8,8.7,8.2,14.5l1.1,15.2ZM527.5,398.9h70.3l-1.1-14.4c-.4-5.6-3.3-10.7-7.9-14-4.6-3.3-10.4-4.3-15.8-2.7-4.3,1.2-8.7,1.8-13.1,1.8h-30.4c-1.1,0-2.1.9-2.1,2.1v27.3Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M527.2,399.3v-74.5c0-1.5-1.3-2.8-2.8-2.8h-22.4v57.8c0,10.8,8.8,19.6,19.6,19.6h5.6Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M527.5,324.7v74.9h-6c-11,0-20-9-20-20v-58.1h22.7c1.8,0,3.2,1.4,3.2,3.2ZM526.8,398.9v-74.2c0-1.3-1.1-2.4-2.4-2.4h-22v57.4c0,10.6,8.6,19.2,19.2,19.2h5.2Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M502,321.9h22.2c1.7,0,3-1.3,3-3v-17.7c0-4.6.6-9.2,1.7-13.6l3-11.8c2.3-8.9-4.4-17.6-13.7-17.6h-16.3v63.7Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M532.7,272.3c0,1.2-.2,2.4-.5,3.6l-3,11.8c-1.1,4.4-1.7,9-1.7,13.5v17.7c0,1.9-1.5,3.4-3.4,3.4h-22.5v-64.4h16.6c4.5,0,8.7,2,11.4,5.6,2,2.6,3,5.7,3,8.8ZM502.4,321.5h21.8c1.4,0,2.6-1.2,2.6-2.6v-17.7c0-4.6.6-9.2,1.7-13.7l3-11.8c1.1-4.1.2-8.5-2.4-11.8-2.6-3.4-6.6-5.3-10.8-5.3h-15.9v62.9Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M469.2,249.3h21.3v57.6c0,8.3-6.7,15-15,15h-3.6c-1.5,0-2.7-1.2-2.7-2.7v-69.9h0Z" transform="translate(959.8 571.2) rotate(-180)" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M490.9,252.6v69.7h-22.1v-54.9c0-10.2,8.3-18.4,18.4-18.4s3.7,1.6,3.7,3.7ZM490.2,321.5v-68.9c0-1.6-1.3-2.9-2.9-2.9-9.7,0-17.7,7.9-17.7,17.7v54.2h20.6Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M559.6,381h3.6c8.3,0,15,6.7,15,15v65.8h-21.3v-78.1c0-1.5,1.2-2.7,2.7-2.7Z" transform="translate(988.9 -146.2) rotate(90)" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M608.3,414h0c0,10.2-8.2,18.4-18.3,18.4h-63.2v-22.1h77.9c2,0,3.7,1.6,3.7,3.7ZM527.5,431.7h62.5c9.7,0,17.6-7.9,17.6-17.6h0c0-1.7-1.3-3-2.9-3h-77.1v20.6Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M489.7,278.8c-.3.8-.5,1.6-.6,2.4-.3,1.3-.5,2.4-.8,3.2-.4,1.6-.6,2-1,2.5-.9,1.1-1.9,1.3-1.8,1.7.1.3.7.4,1.6.6.8.2,1.6.5,2.3.9,1,.6,2.6,1.5,4.3,2.3,3,1.4,3.2,1.2,5.3,1.8,1.9.5,2.9,0,4.3,1,1,.7,1.3,1.4,1.8,1.4.6,0,.9-1.1,1.1-1.9.4-1.6.2-1.7.5-2.8,0-.3.2-.5.2-.8.7-1.7,1.6-3,1.6-3,1.9-2.6,5.8-12.1,6.3-15.3,0,0,.2-1.6,1-3.2.2-.4.4-.7.4-.7,0,0,.2-.3.4-.6.3-.4.4-.5.6-.8,0,0,.3-.4.7-1,.5-.8,1-1.7.6-2.1-.3-.4-1,0-2.3-.3-1.1-.3-1.2-.7-3.8-2.3-.9-.5-1.4-.9-2.1-1.3-.3-.1-1.2-.6-2.9-1.2-2.6-.9-2.9-.6-4.7-1.4-2-.9-2.3-1-2.3-1-1-.5-1.3-.8-1.6-.7-.4.2.1,1.2,0,2.5,0,.8-.3,1.3-1,2.5-1.2,2.1-1.8,3.1-2.3,3.7-1.1,1.4-2.8,5-5.8,13.9Z" fill="#f4f2ef" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M518.9,264.7c0,.6-.4,1.3-.8,1.9-.3.6-.7,1-.7,1,0,0-.1.2-.2.2-.1.2-.3.3-.4.6,0,.1-.2.3-.3.5h0c0,0-.2.4-.3.7-.7,1.6-.9,3.1-.9,3.1-.5,3.2-4.4,12.7-6.3,15.4,0,0-.9,1.3-1.6,2.9,0,.2-.2.4-.2.7-.1.5-.2.8-.2,1.1,0,.4,0,.8-.3,1.7-.2.9-.5,2.2-1.4,2.2-.5,0-.8-.3-1.1-.7-.2-.3-.5-.5-.9-.8-.8-.5-1.4-.6-2.3-.6-.6,0-1.2-.1-1.9-.3-.4-.1-.8-.2-1.1-.3-1.2-.3-1.9-.4-4.2-1.5-1.7-.8-3.3-1.7-4.3-2.3-.7-.4-1.4-.7-2.2-.8-1-.2-1.7-.4-1.8-.9-.2-.5.3-.8.7-1.1.3-.2.8-.5,1.2-1,.3-.4.5-.8.9-2.3.3-1,.5-2.1.8-3.2.2-.8.4-1.6.6-2.4,2.5-7.6,4.5-12.2,5.9-14.1.5-.6,1.1-1.6,2.3-3.7.7-1.2.9-1.6,1-2.3,0-.5,0-1-.1-1.4-.1-.6-.2-1.2.3-1.4.3-.1.7,0,1.3.3.2,0,.4.2.6.3,0,0,.4.2,2.2,1,.9.4,1.4.5,2.1.7.6.1,1.3.3,2.6.7,1.1.4,2.2.8,2.9,1.2.8.4,1.3.7,2.1,1.3,1,.6,1.7,1.1,2.1,1.5.7.5,1,.7,1.5.8.5.1,1,.1,1.3,0,.4,0,.9,0,1.2.3.2.2.2.4.2.6ZM514.5,272.7c0-.3.3-1.8,1-3.3.2-.4.3-.7.4-.7.1-.2.2-.4.4-.6.2-.3.3-.4.5-.6,0,0,.1-.1.2-.2,0,0,.3-.4.6-.9.3-.5.9-1.4.6-1.7,0,0-.2,0-.6,0-.4,0-.9,0-1.5-.1-.7-.2-1.1-.4-1.8-1-.5-.3-1.1-.8-2.1-1.4-.8-.5-1.3-.9-2.1-1.2-.7-.4-1.7-.8-2.8-1.2-1.2-.4-1.9-.6-2.5-.7-.7-.2-1.2-.3-2.2-.7-1.9-.8-2.3-1-2.3-1-.2-.1-.5-.2-.6-.3-.2-.1-.4-.2-.5-.3,0,.1,0,.3,0,.5,0,.4.2,1,.1,1.6,0,.9-.4,1.5-1.1,2.6-1.2,2.1-1.9,3.1-2.3,3.8-1.3,1.8-3.3,6.4-5.8,13.8h0c-.3.8-.5,1.6-.6,2.3-.2,1.1-.5,2.2-.8,3.3-.4,1.6-.7,2.1-1.1,2.6-.5.6-1,.9-1.3,1.2-.1,0-.2.2-.3.2.2.1.9.3,1.2.3.9.2,1.7.5,2.4.9,1,.6,2.6,1.5,4.3,2.2,2.3,1.1,2.9,1.2,4.1,1.5.3,0,.7.2,1.2.3.7.2,1.3.2,1.8.3.9,0,1.7.1,2.6.8.5.3.8.7,1.1.9.3.3.4.4.6.4.4,0,.6-1.1.7-1.6.2-.8.2-1.2.3-1.6,0-.4,0-.7.2-1.2,0-.3.2-.6.3-.8.4-.9.8-1.7,1.1-2.2.3-.5.5-.8.6-.9,1.8-2.5,5.7-12,6.2-15.1h0Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M576.1,393.7c-.7.4-1.4.8-2.1,1.2-1.1.7-2.1,1.3-2.8,1.7-1.4.8-1.9,1-2.5,1-1.4.2-2.3-.5-2.5,0-.1.3.2.8.7,1.5.5.7.8,1.5,1,2.3.3,1.1.8,2.9,1.4,4.7,1.1,3.1,1.4,3.2,2.5,5,1,1.7,2,2.1,2.4,3.8.2,1.2-.1,1.9.3,2.3.5.4,1.4-.1,2.1-.6,1.4-.9,1.3-1.1,2.3-1.6.3-.2.5-.3.7-.4,1.7-.7,3.2-1,3.2-1,3.2-.5,12.6-4.5,15.2-6.3,0,0,1.3-1,3-1.6.4-.1.8-.2.8-.2,0,0,.3,0,.6-.1.4,0,.7,0,1-.1,0,0,.6,0,1.2-.2.9-.2,1.9-.5,1.9-1.1,0-.5-.7-.7-1.4-1.8-.6-.9-.4-1.4-1-4.3-.2-1-.3-1.6-.6-2.4,0-.3-.4-1.3-1.2-2.9-1.2-2.5-1.6-2.5-2.3-4.3-.8-2-.9-2.3-.9-2.3-.3-1-.4-1.5-.6-1.6-.4-.2-.7.9-1.7,1.8-.6.5-1.1.7-2.5,1-2.3.6-3.5.9-4.3,1-1.8.2-5.6,1.5-14,5.7Z" fill="#f4f2ef" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M606.9,403.7s0,0,0,0c0,.9-1.2,1.2-2.2,1.4-.4.1-.9.2-1.1.2h0s-.1,0-.1,0c-.1,0-.2,0-.3,0-.2,0-.4,0-.7,0-.3,0-.5.1-.6.1,0,0-.4,0-.7.2-1.6.6-2.9,1.6-2.9,1.6-2.6,1.9-12.1,5.9-15.4,6.4,0,0-1.6.3-3.2.9-.2,0-.4.2-.7.3-.5.3-.7.4-.9.6-.3.2-.6.5-1.4,1-.8.5-1.9,1.2-2.6.6-.4-.3-.3-.8-.3-1.3,0-.4,0-.8,0-1.2-.2-.9-.6-1.4-1.2-2.1-.4-.4-.8-.9-1.2-1.6-.2-.4-.4-.7-.6-1-.6-1-1-1.6-1.9-4-.7-1.8-1.2-3.5-1.5-4.7-.2-.8-.5-1.5-1-2.2-.6-.9-.9-1.4-.7-1.9.2-.5.7-.4,1.2-.3.4,0,.9.2,1.6.1.5,0,.9-.2,2.3-1,.9-.5,1.9-1.1,2.8-1.7.7-.4,1.4-.9,2.2-1.2h0c7.2-3.6,11.8-5.5,14.1-5.8.7-.1,1.9-.4,4.2-1,1.3-.3,1.8-.5,2.3-.9.4-.4.7-.8.9-1.1.3-.5.7-1,1.2-.7.3.1.5.5.6,1.1,0,.2.1.4.2.7,0,0,.1.4.9,2.3.4.9.6,1.3,1,1.9.3.5.7,1.2,1.3,2.4.5,1.1,1,2.1,1.2,2.9.3.8.4,1.5.6,2.4.3,1.2.4,2,.5,2.5.1.9.2,1.2.5,1.7.3.5.6.8.9,1,.3.3.6.6.6,1ZM603.4,404.7h0c0,0,.6,0,1.1-.2.6-.1,1.6-.4,1.7-.7,0,0-.1-.2-.4-.4-.3-.3-.7-.6-1-1.2-.4-.6-.5-1.1-.6-2,0-.6-.2-1.3-.5-2.5-.2-1-.3-1.5-.6-2.3-.2-.8-.7-1.8-1.2-2.8-.6-1.2-.9-1.8-1.3-2.3-.4-.6-.7-1-1-2-.8-2-.9-2.3-.9-2.3,0-.3-.2-.5-.2-.7,0-.2-.1-.5-.2-.6,0,0-.2.3-.3.4-.3.4-.6.8-1,1.2-.7.6-1.3.8-2.6,1.1-2.3.6-3.5.9-4.3,1-2.2.3-6.9,2.2-13.9,5.7-.7.4-1.4.8-2.1,1.2-.9.6-1.9,1.2-2.8,1.8-1.4.8-1.9,1-2.6,1.1-.7,0-1.3,0-1.8-.1-.1,0-.3,0-.4,0,0,.2.5.8.6,1.1.5.7.9,1.5,1.1,2.4.3,1.1.8,2.8,1.4,4.6.9,2.4,1.2,2.9,1.8,3.9.2.3.4.6.6,1,.4.6.7,1.1,1.1,1.5.6.7,1.1,1.3,1.3,2.4.1.6.1,1,.1,1.4,0,.4,0,.6,0,.7.3.2,1.2-.4,1.7-.7.7-.5,1-.7,1.3-.9.3-.2.5-.4,1-.7.3-.2.5-.3.8-.4,1.5-.6,3-.9,3.3-1h0c3.1-.5,12.5-4.4,15-6.3,0,0,1.4-1,3-1.7.1,0,.6-.2.8-.3h0c.1,0,.3,0,.7-.1.3,0,.5,0,.7-.1,0,0,.2,0,.3,0Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M509.8,299.2c0-3.1-.4-3.6,0-5.4.2-1.5.4-1.4.8-3.6.2-1.1.4-2.5-.1-2.9-.5-.3-1.1.4-2.4.7-1.7.3-2.5-.7-4.5-1.2-2.2-.5-2.3-.8-5.8-.7-2,0-3.9.2-5.1.4-.9.1-1.7,0-2.6-.2-.9-.3-1.5-.4-1.8,0-.3.4.6,1.2.9,3,.2,1.1,0,1.9-.2,3.5-.2,1-.9,3.2-1,5.6-.1,2.4.4,4.6.5,5.6,0,1.6.2,2.4-.2,3.5-.5,1.7-1.5,2.4-1.2,2.9.2.3.8.2,1.8,0,.9-.2,1.7-.2,2.6,0,1.2.3,3,.6,5,.8,3.4.4,3.6,0,5.8-.2,2-.3,2.9-1.2,4.6-.7,1.2.4,1.8,1.2,2.3.9.6-.3.5-1.7.4-2.8-.2-2.2-.4-2.2-.5-3.6-.1-1.8.3-2.3.5-5.4Z" fill="#f4f2ef" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M511.2,288.4c0,.6-.1,1.3-.2,1.9-.2,1.1-.4,1.7-.5,2.1-.1.4-.2.8-.3,1.4-.2,1-.1,1.6,0,2.4,0,.7.1,1.5.1,2.9h0c-.1,1.4-.3,2.2-.4,2.9-.1.9-.2,1.4-.2,2.4,0,.7.1,1,.2,1.5,0,.5.2,1,.3,2.2.1,1.3.3,2.8-.6,3.2-.5.3-.9,0-1.4-.3-.3-.2-.7-.4-1.2-.6-.9-.3-1.6,0-2.4.2-.6.2-1.2.4-2,.5-.5,0-.9.1-1.2.2-1.2.2-2,.3-4.7,0-2-.2-3.9-.6-5.1-.8-.8-.2-1.6-.2-2.4,0-.9.2-1.8.3-2.1-.2-.3-.4,0-.9.3-1.4.3-.4.6-1,.8-1.8.3-1,.2-1.8.1-3.3,0-.3,0-.7-.2-1.2-.2-1.2-.4-2.8-.3-4.5,0-1.7.5-3.3.7-4.4.1-.5.2-.9.3-1.2.2-1.5.4-2.3.2-3.3-.2-.8-.4-1.4-.7-1.9-.3-.5-.5-1-.2-1.4.4-.5,1.3-.3,2.2,0,.8.2,1.6.3,2.4.2,1.2-.2,3.1-.3,5.1-.4,2.7,0,3.4.1,4.7.5.3,0,.7.2,1.2.3.8.2,1.4.5,2,.7.8.4,1.5.6,2.4.5.5-.1.9-.3,1.2-.5.5-.2.9-.5,1.4-.2.4.3.5.8.5,1.4ZM509.3,295.1c0-.4,0-.8.1-1.4.1-.7.2-1.1.3-1.5.1-.5.3-1,.5-2.1.1-.7.4-2.2,0-2.5,0,0-.3,0-.7.2-.4.2-.8.4-1.4.5-1.2.2-2-.1-2.9-.5-.5-.2-1.1-.5-1.8-.6-.5-.1-.9-.2-1.2-.3-1.2-.3-1.8-.5-4.5-.4-2,0-3.8.2-5,.4-.9.1-1.8,0-2.7-.2-.3,0-1.2-.4-1.4-.2,0,0,.1.4.2.6.2.5.5,1.1.7,2.1.2,1.2,0,2-.2,3.6,0,.3-.2.7-.3,1.2-.3,1.1-.7,2.7-.7,4.3,0,1.6.2,3.2.3,4.3,0,.5.1.9.2,1.3.1,1.6.2,2.4-.2,3.6-.3.9-.6,1.5-.9,2-.1.2-.3.5-.3.6.1.1,1.1,0,1.4-.1.9-.2,1.8-.2,2.7,0,1.2.3,3,.6,5,.8,2.6.3,3.3.2,4.5,0,.4,0,.7-.1,1.2-.2.7,0,1.3-.3,1.9-.5.9-.3,1.7-.6,2.9-.3.6.2,1,.4,1.4.6.3.2.5.3.6.3.4-.2.3-1.7.2-2.5-.1-1.1-.2-1.6-.3-2.1,0-.4-.2-.8-.2-1.5,0-1.1,0-1.7.2-2.6.1-.7.2-1.5.4-2.8,0-1.3,0-2.1-.1-2.8,0-.4,0-.8,0-1.2Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M577.2,408.4c2.5-1.8,2.7-2.3,4.4-3.1,1.3-.6,1.4-.5,3.4-1.4,1.1-.5,2.3-1.1,2.3-1.8,0-.6-1-.7-1.9-1.5-1.3-1.2-.9-2.5-1.7-4.4-.9-2-.7-2.4-2.7-5.1-1.2-1.6-2.4-3.1-3.2-4-.6-.6-1-1.4-1.3-2.2-.3-.9-.5-1.5-.9-1.5-.6,0-.7,1.2-1.9,2.5-.8.8-1.5,1.2-2.9,1.9-.9.4-3.2,1.1-5.1,2.4-2,1.3-3.5,3-4.3,3.7-1.2,1-1.9,1.5-2.9,1.9-1.7.6-2.8.2-3,.7-.1.4.3.8,1,1.5.6.6,1.1,1.3,1.5,2.1.5,1.1,1.2,2.8,2.2,4.6,1.7,3,2,3,3.5,4.6,1.4,1.5,2.7,1.7,3.3,3.3.4,1.2,0,2.1.6,2.4.6.3,1.7-.6,2.5-1.3,1.7-1.4,1.5-1.6,2.7-2.5,1.4-1.2,2-1.1,4.7-2.6Z" fill="#f4f2ef" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M587.6,402.1c0,.9-1.3,1.5-2.5,2.1-1,.5-1.6.7-2,.8-.4.1-.7.3-1.4.6-.9.4-1.3.8-2,1.4-.5.4-1.2,1-2.3,1.8h0c-1.2.7-1.9,1.1-2.6,1.4-.8.4-1.3.6-2.1,1.3-.5.4-.8.7-1.1,1-.3.3-.7.7-1.6,1.5-1,.8-2.1,1.8-3,1.4-.5-.2-.5-.8-.6-1.3,0-.4,0-.8-.2-1.3-.3-.9-.9-1.3-1.6-1.9-.5-.4-1-.8-1.6-1.4-.3-.4-.6-.6-.8-.9-.9-.9-1.4-1.4-2.7-3.8-1-1.7-1.8-3.5-2.2-4.6-.3-.8-.8-1.4-1.4-2-.7-.6-1.3-1.3-1.1-1.9.2-.5.7-.5,1.3-.6.5,0,1.2,0,2-.4,1-.3,1.6-.8,2.8-1.8.2-.2.5-.5.9-.8.9-.8,2-2,3.5-2.9,1.4-.9,2.9-1.5,4.1-1.9.5-.2.9-.3,1.1-.5,1.4-.7,2.1-1,2.8-1.8.6-.6.9-1.2,1.2-1.6.3-.5.5-1,1.1-.9.7,0,1,.9,1.3,1.7.3.8.7,1.5,1.2,2.1.8.9,2.1,2.4,3.3,4,1.6,2.2,1.9,2.9,2.3,4.1.1.3.3.7.5,1.1.3.8.5,1.4.6,2,.2.9.3,1.6,1,2.2.4.4.8.6,1.1.8.5.3.9.5.9,1.1,0,0,0,0,0,0ZM577,408.1c1.1-.8,1.7-1.3,2.2-1.7.7-.6,1.2-1,2.2-1.5.7-.3,1-.4,1.4-.6.4-.2.9-.3,2-.8.7-.3,2-.9,2-1.4s0,0,0,0c0-.1-.2-.2-.6-.4-.4-.2-.8-.4-1.2-.9-.9-.8-1-1.7-1.2-2.6-.1-.6-.2-1.2-.5-1.9-.2-.5-.3-.8-.5-1.2-.4-1.1-.7-1.8-2.2-3.9-1.2-1.6-2.4-3-3.2-3.9-.6-.7-1.1-1.5-1.4-2.4-.1-.3-.4-1.2-.6-1.2,0,0-.2.3-.4.6-.3.5-.6,1.1-1.3,1.8-.8.8-1.6,1.2-3,1.9-.3.1-.7.3-1.2.5-1.1.4-2.6,1-3.9,1.9-1.4.9-2.5,2-3.4,2.8-.4.4-.7.7-.9.9-1.2,1-1.9,1.5-3,1.9-.9.3-1.6.4-2.1.4-.3,0-.6,0-.7.1,0,.2.7.8.9,1,.7.6,1.2,1.4,1.6,2.3.5,1.1,1.2,2.8,2.2,4.6,1.3,2.3,1.7,2.8,2.6,3.6.2.3.5.5.9.9.5.6,1,.9,1.5,1.3.8.6,1.5,1.1,1.9,2.2.2.6.2,1.1.3,1.5,0,.4,0,.6.2.7.4.2,1.6-.8,2.1-1.3.8-.7,1.2-1.1,1.5-1.4.3-.3.6-.6,1.1-1.1.8-.7,1.4-1,2.2-1.4.6-.3,1.4-.7,2.5-1.3Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M509,369.2c-.5-3.1-.9-3.5-.9-5.3,0-1.5.2-1.5.2-3.7,0-1.2,0-2.5-.6-2.8-.5-.2-1,.6-2.2,1-1.7.6-2.6-.3-4.7-.4-2.2-.1-2.4-.4-5.8.2-2,.3-3.8.8-5,1.1-.8.2-1.7.3-2.6.2-.9-.1-1.6-.2-1.7.2-.3.5.7,1.1,1.4,2.8.4,1,.4,1.9.4,3.4,0,1-.4,3.3-.1,5.7.2,2.3,1.2,4.5,1.4,5.5.3,1.5.5,2.3.4,3.4-.2,1.8-1.1,2.6-.7,3,.3.3.9.1,1.7-.2.8-.3,1.7-.4,2.6-.4,1.2,0,3.1.1,5.1,0,3.4-.2,3.6-.5,5.7-1.1,2-.6,2.7-1.7,4.4-1.4,1.3.2,1.9.9,2.4.5.6-.4.2-1.7,0-2.9-.5-2.1-.7-2.1-1-3.5-.4-1.8,0-2.3-.3-5.4Z" fill="#f4f2ef" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M511,380.1c0,.5-.1.9-.5,1.2-.4.3-.9.1-1.4,0-.4-.1-.8-.3-1.3-.4-1-.1-1.6.2-2.4.6-.5.3-1.1.6-1.9.8-.5.1-.8.3-1.2.4-1.2.4-1.9.6-4.6.8-2,.1-3.9,0-5.1,0-.8,0-1.6,0-2.4.4-.9.3-1.7.6-2.2.1-.3-.4-.1-.9,0-1.4.2-.5.4-1.1.5-1.9.1-1,0-1.8-.4-3.3,0-.3-.2-.7-.3-1.2-.4-1.1-.9-2.7-1-4.4-.2-1.7,0-3.3,0-4.5,0-.5,0-.9,0-1.2,0-1.5,0-2.3-.4-3.3-.3-.8-.7-1.3-.9-1.7-.3-.5-.6-.9-.4-1.4.3-.6,1.2-.5,2.1-.4.8.1,1.6,0,2.4-.2,1.2-.3,3-.8,5-1.2,2.7-.5,3.4-.4,4.7-.3.3,0,.7,0,1.2,0,.8,0,1.5.2,2.1.4.9.2,1.5.4,2.4,0,.5-.2.8-.4,1.2-.6.4-.3.9-.6,1.4-.4.9.4.8,1.9.8,3.2,0,1.1,0,1.7-.2,2.2,0,.4,0,.8,0,1.5,0,1,.1,1.6.3,2.4.2.7.4,1.5.6,2.8h0c0,1.4,0,2.2,0,2.9,0,.9,0,1.5.2,2.4.2.7.3,1,.4,1.4.2.5.3,1,.6,2.1.2.7.4,1.5.4,2.1ZM488.7,383.3s0,0,0,0c.1.1,1-.2,1.3-.3.9-.3,1.8-.5,2.7-.4,1.2,0,3.1.1,5.1,0,2.6-.1,3.3-.3,4.4-.7.3-.1.7-.2,1.2-.4.7-.2,1.3-.5,1.8-.8.8-.4,1.6-.8,2.8-.7.6,0,1.1.3,1.5.4.4.1.6.2.7.2.4-.3,0-1.8-.2-2.5-.3-1.1-.4-1.6-.6-2-.1-.4-.3-.8-.4-1.5-.2-1.1-.2-1.7-.2-2.6,0-.7,0-1.5,0-2.8-.2-1.3-.4-2.1-.5-2.8-.2-.9-.4-1.5-.3-2.6,0-.7,0-1.1.1-1.6,0-.5.1-1,.1-2.1,0-.7,0-2.3-.3-2.5-.1,0-.3,0-.6.3-.3.2-.7.5-1.3.7-1.1.4-2,.2-2.9,0-.6-.2-1.2-.3-1.9-.4-.5,0-.9,0-1.2-.1-1.2-.1-1.9-.2-4.5.3-1.9.3-3.8.8-4.9,1.1-.9.3-1.8.3-2.7.2-.3,0-1.3-.2-1.4,0,0,0,.2.4.3.6.3.4.7,1,1,1.9.4,1.1.4,2,.4,3.6h0c0,.3,0,.8,0,1.3-.1,1.2-.2,2.8,0,4.3.2,1.6.6,3.1,1,4.2.2.5.3.9.4,1.2.3,1.5.5,2.4.4,3.6-.1.9-.4,1.6-.6,2.1,0,.2-.2.5-.2.6Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M521.7,386.4c-3.1-.2-3.6.1-5.4-.3-1.4-.3-1.4-.5-3.5-1-1.1-.3-2.5-.6-2.9,0-.4.5.4,1.1.5,2.4.2,1.8-.9,2.5-1.4,4.4-.6,2.1-.9,2.3-1.1,5.7,0,2,0,3.9,0,5.1,0,.9,0,1.7-.4,2.6-.3.9-.5,1.5-.2,1.7.4.4,1.2-.5,3-.7,1.1-.1,1.9,0,3.4.4,1,.2,3.2,1.1,5.5,1.4,2.3.3,4.7-.1,5.7-.1,1.6,0,2.4,0,3.4.4,1.7.6,2.3,1.6,2.8,1.3.3-.2.3-.8.2-1.7-.1-.9,0-1.7.2-2.6.3-1.1.8-3,1.1-5,.6-3.4.3-3.6.2-5.8-.1-2-1.1-3-.4-4.7.4-1.2,1.3-1.7,1-2.2-.3-.6-1.6-.6-2.8-.6-2.2,0-2.2.2-3.7.3-1.8,0-2.2-.4-5.3-.9Z" fill="#f4f2ef" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M533.9,387.8c0,.4-.2.7-.5,1-.2.3-.5.7-.6,1.2-.3.9-.1,1.6,0,2.4.2.6.3,1.2.4,2.1,0,.5,0,.9.1,1.2.1,1.2.2,2-.3,4.7-.3,2-.8,3.8-1.1,5-.2.8-.3,1.6-.2,2.4.1.9.2,1.8-.4,2.1-.4.2-.9,0-1.4-.4-.4-.3-1-.7-1.8-.9-1-.4-1.8-.4-3.3-.4-.3,0-.7,0-1.2,0-1.2.1-2.8.3-4.5,0-1.7-.2-3.2-.7-4.4-1-.5-.1-.9-.3-1.2-.3-1.5-.3-2.3-.5-3.3-.4-.8.1-1.4.3-1.9.5-.6.2-1,.4-1.4,0-.5-.4-.2-1.3.1-2.2.3-.8.4-1.6.4-2.4,0-1.2-.1-3.1,0-5.1.1-2.7.4-3.4.8-4.6.1-.3.2-.7.4-1.2.2-.8.5-1.4.8-1.9.4-.8.7-1.4.6-2.4,0-.5-.2-.9-.4-1.3-.2-.5-.4-1,0-1.4.6-.8,2-.4,3.3,0,1.1.3,1.6.5,2.1.6.4.1.7.3,1.4.4,1,.2,1.5.2,2.4.2.7,0,1.5,0,2.9,0h0c1.3.2,2.2.4,2.8.6.9.2,1.4.3,2.4.3.7,0,1,0,1.5,0,.5,0,1-.1,2.2-.2,1.3,0,2.8,0,3.2.8,0,.1,0,.2,0,.4ZM531.9,391c0-.4,0-.8.2-1.2.2-.6.5-1,.7-1.3.2-.3.4-.5.3-.6-.2-.4-1.7-.4-2.5-.3-1.1,0-1.6,0-2.1.2-.4,0-.8,0-1.6.1-1.1,0-1.7-.1-2.6-.3-.7-.2-1.5-.3-2.8-.5-1.3,0-2.1,0-2.8,0-.9,0-1.5,0-2.6-.2-.7-.2-1.1-.3-1.5-.4-.4-.2-.9-.3-2-.6-.7-.2-2.2-.6-2.5-.2,0,0,0,.3.2.7.2.4.3.8.4,1.5.2,1.2-.3,2-.7,2.8-.3.5-.6,1.1-.8,1.8-.1.5-.3.9-.4,1.2-.4,1.2-.6,1.8-.7,4.4,0,2,0,3.8,0,5.1,0,.9,0,1.8-.4,2.7-.1.3-.4,1.2-.3,1.3,0,0,.4-.1.6-.2.5-.2,1.2-.5,2.1-.6,1.2-.1,2,0,3.6.4.3,0,.7.2,1.2.4,1.1.4,2.6.8,4.2,1,1.6.2,3.2,0,4.4,0,.5,0,1,0,1.3,0,1.6,0,2.5,0,3.6.4.9.3,1.5.7,1.9,1,.2.2.5.3.6.3.1-.1,0-1.1,0-1.4-.1-.9,0-1.8.2-2.7.3-1.2.8-3,1.1-4.9.4-2.6.4-3.2.3-4.5,0-.4,0-.8-.1-1.2,0-.8-.2-1.3-.4-1.9-.1-.5-.3-1.1-.3-1.7Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M514.2,376.9c-1.7-1.9-2.2-2-3-3.2-.7-1-.5-1.1-1.5-2.6-.5-.8-1.1-1.8-1.6-1.7-.5,0-.4.9-1.1,1.7-.9,1.2-1.9,1-3.4,1.8-1.6.9-1.9.8-3.9,2.7-1.2,1.1-2.3,2.3-2.9,3-.5.5-1,1-1.7,1.3-.7.3-1.1.6-1.1.9,0,.5,1,.4,2.2,1.3.7.5,1.1,1.1,1.8,2.2.5.7,1.2,2.5,2.4,3.9,1.2,1.5,2.8,2.6,3.4,3.2.9.9,1.4,1.4,1.8,2.2.6,1.3.4,2.3.9,2.4.3,0,.6-.3,1.1-.9.4-.6,1-1.1,1.6-1.4.8-.5,2.2-1.3,3.5-2.3,2.3-1.7,2.2-1.9,3.4-3.3,1.1-1.3,1.1-2.4,2.4-3,.9-.5,1.7-.3,1.9-.7.2-.5-.6-1.3-1.3-1.9-1.3-1.2-1.4-1.1-2.3-1.9-1.1-1-1.1-1.5-2.6-3.6Z" fill="#f4f2ef" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M520.8,384.1c0,.1,0,.2,0,.3-.2.5-.6.5-1,.6-.3,0-.6.1-1,.3-.7.3-1,.8-1.3,1.5-.2.4-.5.9-1,1.4-.3.3-.5.5-.6.8-.6.8-1,1.3-2.8,2.6-1.3,1-2.7,1.8-3.5,2.3-.6.3-1.1.8-1.5,1.3-.5.6-.9,1.2-1.5,1.1-.4-.1-.5-.6-.6-1.1,0-.4-.2-.9-.5-1.5-.4-.8-.8-1.2-1.7-2.1-.2-.2-.4-.4-.8-.6-.8-.6-1.8-1.5-2.7-2.6-.9-1.1-1.5-2.2-2-3.1-.2-.4-.4-.7-.5-.9-.7-1.1-1-1.6-1.7-2.1-.5-.4-1-.6-1.4-.8-.5-.2-.9-.4-.9-.8,0-.6.7-.9,1.3-1.3.6-.3,1.1-.7,1.6-1.2.7-.8,1.7-1.9,2.9-3,1.6-1.5,2.2-1.8,3.1-2.3.3-.1.5-.3.9-.5.6-.3,1.1-.5,1.6-.7.7-.2,1.2-.4,1.7-1,.2-.3.4-.7.5-.9.2-.4.3-.8.8-.9.8-.1,1.5.9,2,1.8.5.8.7,1.2.9,1.6.2.3.3.6.6,1,.4.7.8,1,1.3,1.5.4.4.9.9,1.7,1.7h0c.7.9,1,1.5,1.4,2,.4.6.6,1,1.2,1.6.4.4.6.6.9.8.3.2.7.5,1.4,1.2.7.6,1.5,1.4,1.5,2ZM506.6,395.6c.1,0,.5-.6.7-.8.5-.6,1-1.1,1.7-1.5.9-.5,2.2-1.3,3.5-2.2,1.7-1.3,2.1-1.7,2.7-2.5.2-.2.4-.5.7-.8.4-.5.6-.9.9-1.3.4-.7.7-1.3,1.6-1.8.5-.2.9-.3,1.2-.4.2,0,.5,0,.5-.1.1-.3-.9-1.2-1.2-1.5-.7-.6-1-.9-1.3-1.1-.3-.2-.5-.4-1-.8-.6-.6-.9-1.1-1.3-1.7-.3-.5-.7-1-1.3-1.9-.7-.8-1.2-1.3-1.6-1.6-.5-.5-.9-.9-1.4-1.6-.3-.5-.5-.8-.6-1.1-.2-.3-.4-.7-.8-1.5-.3-.4-.9-1.5-1.3-1.5,0,0-.2.3-.2.4-.1.3-.3.7-.6,1.1-.6.8-1.3,1-2,1.3-.5.1-.9.3-1.5.6-.4.2-.6.4-.9.5-.9.5-1.4.7-2.9,2.2-1.2,1.1-2.2,2.2-2.9,3-.5.6-1.1,1-1.8,1.4-.2.1-.8.4-.9.5,0,0,.3.1.4.2.4.2,1,.4,1.6.9.8.6,1.2,1.2,1.9,2.3.1.2.3.5.5.9.4.8,1.1,2,1.9,3,.8,1,1.8,1.8,2.6,2.4.3.3.6.5.8.7.9.9,1.4,1.4,1.9,2.3.3.7.5,1.3.5,1.7,0,.2,0,.4.1.5Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                </g>
              </g>
              <g id="kitchen-counter">
                <rect x="362.3" y="489.5" width="35.2" height="28.4" fill="#dde7ed"/>
                <polygon points="360.3 490.4 360.3 517.9 255.2 517.9 255.2 206.5 281.4 206.5 281.4 490.4 360.3 490.4" fill="#dde7ed"/>
                <circle cx="273.8" cy="379.7" r="4.4" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <circle cx="261.2" cy="379.7" r="3.8" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <circle cx="261.2" cy="392.3" r="3.8" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <circle cx="261.2" cy="404.6" r="3.8" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <circle cx="273.8" cy="404.6" r="4.7" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <circle cx="274.6" cy="389.8" r="1.6" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <circle cx="274.6" cy="394.6" r="1.6" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <circle cx="278.1" cy="387.6" r="1.6" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <circle cx="278.1" cy="392.6" r="1.6" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <circle cx="278.1" cy="397" r="1.6" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <line x1="281.4" y1="206.5" x2="281.4" y2="490.7" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <line x1="360.3" y1="490.4" x2="281.4" y2="490.4" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <line x1="360.3" y1="520.3" x2="360.3" y2="490.4" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <line x1="255.5" y1="412.4" x2="281.4" y2="412.4" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <line x1="255.5" y1="372.2" x2="281.4" y2="372.2" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <rect id="island" x="362.3" y="489.5" width="35.2" height="27.4" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <g id="island1" data-name="island">
                  <rect x="335" y="339.3" width="52.3" height="95.3" fill="#dde7ed"/>
                  <g id="sink6" data-name="sink">
                    <path d="M354.9,392.3h-16.7c-.7.1-1.1.5-1.2,1.2v13.3c0,.7.5,1.1,1.2,1.2h16.7c.7,0,1.1-.5,1.2-1.2v-13.3c0-.6-.5-1-1.2-1.2Z" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M344.2,400.1c0,.6.2,1.2.7,1.6.4.4.9.7,1.6.7.7,0,1.3-.2,1.7-.7.4-.4.6-.9.6-1.6s-.2-1.3-.6-1.7-1-.6-1.7-.6-1.2.2-1.6.6c-.5.4-.7,1-.7,1.7Z" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M355.5,390.5c.3-.2.6-.6.6-1v-13.2c0-.7-.5-1.1-1.2-1.2h-16.7c-.7,0-1.1.5-1.2,1.2v13.2c0,.7.5,1.1,1.2,1.2h13.4l-3-.9c-.3-.1-.5-.4-.4-.7.1-.3.4-.5.7-.4l6.5,2,2.3.6v-4.2h2.3c0-.1,0,9.1,0,9.1h-2.3v-3.7l-6.1-1.8" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M335.3,373.6v35.7c0,.7.5,1.1,1.2,1.2h23.1c.7,0,1.1-.5,1.2-1.2v-35.7c0-.7-.5-1.1-1.2-1.2h-23.1c-.7,0-1.1.5-1.2,1.2Z" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M344.2,382.8c0,.6.2,1.2.7,1.6.4.4.9.7,1.6.7.7,0,1.3-.2,1.7-.7.4-.4.6-.9.6-1.6s-.2-1.2-.6-1.7c-.4-.4-1-.6-1.7-.6s-1.2.2-1.6.6-.7,1-.7,1.7Z" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M358,394.4c0,.6.4,1,.9,1,.6-.1.9-.5.9-1,0-.6-.4-.9-.9-.9-.6,0-.9.4-.9.9Z" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M357.8,392.4l.5.2c.3,0,.6,0,.6-.4.1-.3,0-.6-.3-.7l-.8-.3" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                    <path d="M358,388.5c0,.6.4,1,.9,1,.6-.1.9-.5.9-1,0-.6-.4-.9-.9-.9-.6,0-.9.4-.9.9Z" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                  </g>
                  <g>
                    <polyline points="360.7 369.8 360.7 371.3 359.2 371.3" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                    <line x1="356.5" y1="371.3" x2="336.3" y2="371.3" fill="none" stroke="#425563" strokeDasharray="2.7 2.7" strokeMiterlimit="10" strokeWidth=".5"/>
                    <polyline points="335 371.3 333.5 371.3 333.5 369.8" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                    <line x1="333.5" y1="367.1" x2="333.5" y2="346.9" fill="none" stroke="#425563" strokeDasharray="2.7 2.7" strokeMiterlimit="10" strokeWidth=".5"/>
                    <polyline points="333.5 345.5 333.5 344 335 344" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                    <line x1="337.7" y1="344" x2="357.9" y2="344" fill="none" stroke="#425563" strokeDasharray="2.7 2.7" strokeMiterlimit="10" strokeWidth=".5"/>
                    <polyline points="359.2 344 360.7 344 360.7 345.5" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                    <line x1="360.7" y1="348.2" x2="360.7" y2="368.4" fill="none" stroke="#425563" strokeDasharray="2.7 2.7" strokeMiterlimit="10" strokeWidth=".5"/>
                  </g>
                  <rect x="335.3" y="339.5" width="52" height="95.1" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                  <g>
                    <polyline points="362.1 341 362.1 339.5 363.6 339.5" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                    <line x1="366.1" y1="339.5" x2="369.9" y2="339.5" fill="none" stroke="#425563" strokeDasharray="2.5 2.5" strokeMiterlimit="10" strokeWidth=".5"/>
                    <polyline points="371.2 339.5 372.7 339.5 372.7 341" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                    <line x1="372.7" y1="344" x2="372.7" y2="431.6" fill="none" stroke="#425563" strokeDasharray="3 3" strokeMiterlimit="10" strokeWidth=".5"/>
                    <polyline points="372.7 433.1 372.7 434.6 371.2 434.6" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                    <line x1="368.6" y1="434.6" x2="364.9" y2="434.6" fill="none" stroke="#425563" strokeDasharray="2.5 2.5" strokeMiterlimit="10" strokeWidth=".5"/>
                    <polyline points="363.6 434.6 362.1 434.6 362.1 433.1" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                    <line x1="362.1" y1="430.1" x2="362.1" y2="342.5" fill="none" stroke="#425563" strokeDasharray="3 3" strokeMiterlimit="10" strokeWidth=".5"/>
                  </g>
                </g>
              </g>
              <g id="mbr-shr-1">
                <polygon points="911.2 526.8 862.4 526.8 862.4 474.1 858.1 474.1 858.1 393.9 911.2 393.9 911.2 526.8" fill="#dde7ed" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <line x1="858.1" y1="393.9" x2="858.1" y2="473" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <line x1="914.8" y1="473" x2="858.7" y2="473" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <circle cx="882.2" cy="500.6" r="2.1" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <line x1="866" y1="476.4" x2="880.9" y2="498.6" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <line x1="898.3" y1="476.4" x2="883.7" y2="498.6" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <line x1="883.7" y1="502.7" x2="898.3" y2="524.5" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <line x1="880.9" y1="502.7" x2="866" y2="524.5" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <rect x="865.3" y="475.2" width="34" height="51" rx="3.1" ry="3.1" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <rect x="862.4" y="473" width="38.2" height="53.8" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <ellipse cx="884.6" cy="433.2" rx="22.9" ry="33.1" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".8"/>
                <ellipse cx="884.6" cy="433.2" rx="20.5" ry="29.7" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <ellipse cx="884.6" cy="433.2" rx="19.3" ry="28" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <circle cx="885" cy="411.3" r="1.9" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <path d="M881.1,451.5c-1.9-.3-3.6-1-4.9-2.4-1.4-1.5-2.1-3.7-2.3-5.8-.3-2.8-.2-5.7-.3-8.5-.1-3.6.8-26.4,8.1-23.7.8.3,1.3,1.1,2,1.6,2.4,1.9,2.6-2.2,4.8-1.8s1.9.9,2.6,1.7c3,2.9,3.4,7.1,3.8,11s1.1,9.3,1.2,14c0,3.8,0,8.3-2,11.7-.5.8-1,1.5-1.8,1.9-.9.5-1.9.5-2.9.5-2.6,0-5.6.4-8.3,0Z" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              </g>
              <rect x="248.1" y="65.5" width=".1" height="3.7" fill="#425563"/>
              <g id="sec-tub">
                <rect x="495.9" y="572.4" width="66.1" height="32.6" fill="#dde7ed" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <rect x="495.9" y="572.4" width="66.1" height="32.6" fill="#dde7ed" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
                <path d="M512.3,574.4h41.8c2.8,0,5,2.2,5,5v16.6c0,2.8-2.2,5-5,5h-43.9c-6.8,0-12.3-5.5-12.3-12.3h0c0-7.9,6.4-14.3,14.3-14.3Z" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <line x1="495.9" y1="605" x2="562" y2="605" fill="none" stroke="#425563" strokeMiterlimit="10"/>
              </g>
              <circle cx="552.5" cy="588.5" r="1.1" fill="#425563"/>
              <polyline points="562 588.1 556.7 586.1 556.7 591.3 562.3 589.2" fill="#425563"/>
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
              <text transform="matrix(1 0 0 1 798.4509 225.9061)" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="14px">Primary Bedroom</text>
              <text transform="matrix(1 0 0 1 793.5568 444.1721)"><tspan x="0" y="0" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="14px">Primary </tspan><tspan x="-4.3" y="14" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="14px">Bathroom</tspan></text>
              <text transform="matrix(1 0 0 1 842.6834 618.6125)"><tspan x="0" y="0" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="14px">Walk-in</tspan><tspan x="3.5" y="14" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="14px">Closet</tspan></text>
              <text transform="matrix(1 0 0 1 814.2958 686.7698)" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="14px">2-Car Garage</text>
              <text transform="matrix(1 0 0 1 518.4379 949.4492)" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="14px">Study</text>
              <text transform="matrix(1 0 0 1 269.9747 977.4371)" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="14px">Sideturn Garage</text>
              <text transform="matrix(1 0 0 1 277.2927 816.8004)" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="14px">Bedroom 3</text>
              <text transform="matrix(1 0 0 1 313.7813 636.1404)" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="14px">Bedroom 2</text>
              <text transform="matrix(1 0 0 1 275.042 713.252)"><tspan x="0" y="0" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="8.4763px">Walk-in</tspan><tspan x="2.1" y="8.5" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="8.4763px">Closet</tspan></text>
              <text transform="matrix(1 0 0 1 514.8159 524.457)"><tspan x="0" y="0" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="8.4763px">Walk-in</tspan><tspan x="2.1" y="8.5" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="8.4763px">Closet</tspan></text>
              <text transform="matrix(1 0 0 1 407.9174 616.4339)" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="8.4763px">Laundry</text>
              <text transform="matrix(1 0 0 1 498.3083 661.0334)"><tspan x="0" y="0" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="8.4763px">Bathroom</tspan><tspan x="16" y="8.5" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="8.4763px">2</tspan></text>
              <text transform="matrix(1 0 0 1 422.335 563.4813)" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="8.4763px">Pantry</text>
              <text transform="matrix(1 0 0 1 291.2883 369.9121)"><tspan x="0" y="0" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="8.4763px">Gourmet</tspan><tspan x="2.4" y="8.5" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="8.4763px">Kitchen</tspan></text>
              <text transform="matrix(1 0 0 1 339.632 157.2229)" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="8.4763px">Covered Patio</text>
              <text transform="matrix(1 0 0 1 559.9799 256.3091)" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="8.4763px">Great Room</text>
              <text transform="matrix(1 0 0 1 632.1828 629.5667)" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="8.4763px">Down</text>
              <text transform="matrix(1 0 0 1 599.8372 735.538)" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="8.4763px">Entry</text>
              <text transform="matrix(1 0 0 1 582.6396 894.3644)" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="8.4763px">Covered Entry</text>
            </g>
            <PantryHotspotBase/>
          </g>

          {/* OPTION: Extended Bedroom*/}
          <g id="extendedBed" data-option="extendedBed" style={{ display: active.extendedBed ? "block" : "none" }} fill="#CC0001">
            <g id="extended-br2">
              <rect x="234.1" y="516.9" width="6.9" height="57" fill="#425563"/>
              <path d="M240,574.4v51.5h-5.9v-51.5h5.9M241,573.4h-7.9v53.5h7.9v-53.5h0Z" fill="#425563"/>
              <rect x="234.1" y="626.9" width="6.9" height="57.3" fill="#425563"/>
              <rect x="238.7" y="677.3" width="10.6" height="6.9" fill="#425563"/>
              <rect x="238.3" y="516.9" width="11.6" height="6.9" fill="#425563"/>
              <rect x="241" y="523.8" width="157.5" height="153.7" fill="#f2f2f2"/>
              <line x1="238.2" y1="574.3" x2="238.2" y2="626.3" fill="none" stroke="#425563" strokeMiterlimit="10"/>
              <g id="Bedroom_23" data-name="Bedroom_2" filter="url(#drop-shadow-20)">
                <g>
                  <path d="M296.6,528.8h53c2.3,0,4.2,1.9,4.2,4.2v74.5c0,.4-.4.8-.8.8h-59.6c-.6,0-1-.5-1-1v-74.2c0-2.3,1.9-4.2,4.2-4.2Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M353.1,608.5h-59.7c-.7,0-1.2-.4-1.2-1v-75.5c0-1.8,1.9-3.3,4.3-3.3h53.4c2.4,0,4.3,1.5,4.3,3.3v75.7c0,.4-.4.8-1,.8ZM296.5,529c-2.1,0-3.8,1.3-3.8,3v75.5c0,.3.3.6.8.6h59.7c.3,0,.5-.2.5-.4v-75.7c0-1.6-1.7-3-3.8-3h-53.4Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <rect x="290.5" y="525.5" width="65.2" height="7" rx="2.6" ry="2.6" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M353.1,532.7h-60.1c-1.5,0-2.8-1-2.8-2.2v-3.1c0-1.2,1.2-2.2,2.8-2.2h60.1c1.5,0,2.8,1,2.8,2.2v3.1c0,1.2-1.2,2.2-2.8,2.2ZM293,525.7c-1.3,0-2.3.8-2.3,1.8v3.1c0,1,1,1.8,2.3,1.8h60.1c1.3,0,2.3-.8,2.3-1.8v-3.1c0-1-1-1.8-2.3-1.8h-60.1Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M291.7,565.3c-.3,3.6-.8,25.1-.3,28,.5,3-1.7,12.1.2,12,1.9-.1,26.1,1.1,31.7,1.6,5.6.5,17.7,1.6,21.4,2.2,3.7.6,10,.4,10.4-.6.3-1,.2-41.6-.5-44-.7-2.3-62.8.7-62.8.7Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M349.4,609.7c-1.7,0-3.5-.1-4.8-.3-4.1-.7-18.5-2-21.4-2.2-5.6-.5-29.9-1.7-31.7-1.6-.2,0-.4,0-.5-.2-.7-.6-.6-2.8-.2-6.5.2-2.1.5-4.3.3-5.5-.5-3,0-24.5.3-28.1v-.2s.2,0,.2,0c.2,0,15.7-.8,31.2-1.3,31.4-1,31.8.2,31.9.7.5,1.8,1,42.6.5,44.1-.3.8-3,1.1-5.8,1.1ZM292,605.1c3.7,0,25.8,1.1,31.4,1.6,2.8.3,17.3,1.5,21.4,2.2,4,.7,9.8.3,10.1-.5.2-.5.2-10.3.1-21.5,0-10.1-.3-21.2-.6-22.4-.1-.3-2.8-1.2-31.5-.4-14.4.4-28.9,1.1-30.8,1.2-.3,4.1-.8,24.9-.3,27.8.2,1.2,0,3.4-.3,5.6-.3,2.7-.6,5.7,0,6.2,0,0,0,0,.1,0,0,0,.2,0,.4,0Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M355.6,566.1c-.5.4-12.7-.9-22.3-.9-19.6,0-41.3.7-42.9.4-1.2-.2-1.2-3.3-1.2-6.3,0-2.8-.3-5.4.7-6.1,2.1-1.6,62.6-1.6,65.2.5,1.1.9,1,3.4,1.1,5.7.1,3,.3,5.9-.6,6.6Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M354.7,566.3c-1,0-2.7-.1-5.8-.3-4.4-.3-10.4-.7-15.5-.6-9.1,0-18.7.2-26.5.3-9.1.1-15.6.2-16.5.1-1.3-.2-1.4-2.8-1.4-5.7v-.8c0-.4,0-.8,0-1.2,0-2.4-.1-4.4.8-5.1,1.5-1.2,28.3-1.4,45.6-1,8.5.2,18.8.6,19.9,1.6,1,.8,1.1,2.7,1.1,4.7,0,.4,0,.8,0,1.1.1,3.1.3,6-.7,6.8h0c-.1,0-.4.1-1.1.1ZM333.8,565c5,0,10.8.4,15.1.6,3.2.2,6.1.4,6.5.3.8-.7.7-3.8.5-6.5,0-.4,0-.8,0-1.1,0-1.9-.1-3.7-1-4.5-.3-.2-2.5-1-19.5-1.4-20-.5-44.1,0-45.3.9-.8.6-.7,2.6-.7,4.8,0,.4,0,.8,0,1.2v.8c0,2.3,0,5.2,1,5.4.8.1,7.7,0,16.4-.1,7.7-.1,17.3-.3,26.5-.3.2,0,.3,0,.5,0Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M301.2,535.6c-1.9,2.8-.1,11.8,0,13.2.6,6,42.8,2.8,44.1,1,1.2-1.6,1.4-14.8-1.2-15.4-1.3-.3-12.1-1-22.2-.9-10.3.1-20,1-20.7,2.2Z" fill="#f4f2ef" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M319,552.5c-4.8,0-9.3-.2-12.6-.8-3.4-.6-5.3-1.6-5.4-2.9,0-.2,0-.6-.2-1.1-.4-2.9-1.5-9.8.2-12.2.9-1.3,11.5-2.2,20.9-2.2,10.1-.1,21,.6,22.3.9.4.1.8.4,1.1,1,1.6,3.2,1.3,13.3.3,14.7-.8,1.1-14.6,2.6-26.6,2.6ZM323.9,533.6c-.7,0-1.3,0-2,0-11.5.1-19.9,1.2-20.5,2.1h0c-1.6,2.3-.6,9.1-.1,12,0,.5.1.9.2,1.1.1,1.1,1.8,1.9,5,2.5,12.1,2.2,37.8-.4,38.7-1.6,1-1.3,1.2-11.3-.3-14.4-.3-.6-.6-.8-.8-.8-1.2-.3-10.7-.9-20.2-.9Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
              </g>
              <g>
                <rect x="391.3" y="643.7" width="2.6" height="34.4" fill="none" stroke="#425563" strokeMiterlimit="10"/>
                <path d="M391.3,643.7s-30.7-.4-30.7,33.8" fill="none" stroke="#425563" strokeMiterlimit="10" strokeWidth=".5"/>
              </g>
              <g>
                <path d="M252,656.6c0,.4,0,.8-.2,1.1-.2.4-.4.7-.6.9-.3.3-.6.5-1,.6s-.7.2-1.2.2-.8,0-1.2-.2c-.4-.1-.7-.4-1-.6-.3-.3-.5-.6-.7-.9s-.2-.7-.2-1.1,0-.8.2-1.1.4-.7.6-.9c.3-.3.6-.5,1-.6s.8-.2,1.2-.2.8,0,1.2.2c.4.1.7.4,1,.6.3.3.5.6.7.9.2.3.2.7.2,1.1ZM251,656.6c0-.3,0-.5-.2-.7s-.2-.4-.4-.6-.4-.3-.6-.4c-.2,0-.5-.1-.8-.1s-.5,0-.8.1-.5.2-.6.4c-.2.2-.3.4-.4.6s-.2.5-.2.7,0,.5.2.7.2.4.4.6c.2.2.4.3.6.4s.5.1.8.1.5,0,.8-.1c.2,0,.5-.2.6-.4.2-.2.3-.4.4-.6.1-.2.2-.5.2-.7Z" fill="#425563"/>
                <path d="M251.9,650.9c0,.3,0,.5-.2.7-.1.2-.3.4-.4.6s-.4.3-.7.3c-.2,0-.5.1-.8.1-.3,0-.6,0-.8-.1s-.5-.2-.7-.3c-.2-.2-.3-.3-.4-.5s-.2-.5-.2-.7,0-.5.2-.7c.1-.2.3-.4.4-.6.2-.2.4-.3.7-.4.3-.1.5-.2.8-.2s.6,0,.8.2c.2.1.5.2.6.4.2.2.3.4.4.6s.2.5.2.7ZM253.6,652.6c0,.2,0,.3,0,.3,0,0-.1.1-.2.1,0,0-.2,0-.3,0h-4.9c0,0-.2,0-.3,0,0,0-.1,0-.2-.1,0,0,0-.2,0-.3s0-.3,0-.3c0,0,.1-.1.2-.2h5.1c0,0,.2,0,.3,0s.1,0,.2.1c0,0,0,.2,0,.3ZM250.9,651.1c0-.2,0-.4-.1-.5,0-.2-.2-.3-.4-.4-.2,0-.4-.1-.6-.1s-.4,0-.6.1c-.2,0-.3.2-.4.4,0,.2-.1.3-.1.5s0,.4.1.5c0,.2.2.3.4.4.2,0,.4.1.6.1s.4,0,.6-.1c.2,0,.3-.2.4-.4,0-.2.1-.3.1-.5Z" fill="#425563"/>
                <path d="M251.9,646.2c0,.3,0,.5,0,.7,0,.2-.1.4-.3.5-.1.1-.3.2-.5.3s-.4,0-.7,0h-3.6c0,0-.2,0-.3,0,0,0-.1,0-.2-.1,0,0,0-.2,0-.3s0-.3,0-.3.1-.1.2-.1c0,0,.2,0,.3,0h3.6c.1,0,.2,0,.3,0,0,0,.1,0,.2,0,0,0,0,0,0-.2,0,0,0-.2,0-.3s0-.2,0-.3c0,0,0-.1.1-.2,0,0,.2,0,.3,0s.3,0,.3,0c0,0,.1.1.1.2,0,0,0,.2,0,.2ZM247.8,648.1v-.9s0-1.2,0-1.2c0,0,0-.2,0-.3s0-.1.1-.2c0,0,.2,0,.3,0s.3,0,.3,0c0,0,.1.1.1.2,0,0,0,.2,0,.3v1.1s0,.9,0,.9c0,.1,0,.2-.1.3,0,0-.2,0-.4,0s-.3,0-.4,0c0,0-.1-.2-.1-.3Z" fill="#425563"/>
                <path d="M246.9,644.4c0,.2,0,.3,0,.4,0,0-.1.1-.2.1,0,0-.2,0-.3,0s-.2,0-.3,0-.1,0-.2-.1c0,0,0-.2,0-.4s0-.3,0-.4.1-.1.2-.1c0,0,.2,0,.3,0s.2,0,.3,0c0,0,.1,0,.2.1,0,0,0,.2,0,.4ZM251.9,644.4c0,.2,0,.3,0,.3,0,0-.1.1-.2.1s-.2,0-.3,0h-3.1c0,0-.2,0-.3,0,0,0-.1,0-.2-.1,0,0,0-.2,0-.3s0-.3,0-.3.1-.1.2-.1c0,0,.2,0,.3,0h3.1c0,0,.2,0,.3,0,0,0,.1,0,.2.1,0,0,0,.2,0,.4Z" fill="#425563"/>
                <path d="M252,641c0,.3,0,.5-.2.8-.1.3-.3.5-.4.7-.2.2-.4.4-.7.5-.3.1-.5.2-.9.2s-.6,0-.8-.2c-.3-.1-.5-.3-.7-.5-.2-.2-.4-.4-.5-.7-.1-.3-.2-.5-.2-.8s0-.8.3-1.1c.2-.3.4-.6.8-.8.3-.2.7-.3,1.1-.3s.6,0,.9.2c.3.1.5.3.7.5.2.2.3.4.4.7.1.3.2.5.2.8ZM251,641.1c0-.2,0-.4-.1-.5,0-.2-.2-.3-.4-.4-.2-.1-.4-.2-.6-.2s-.4,0-.6.1c-.2,0-.3.2-.4.4s-.1.4-.1.6,0,.4.1.6.2.3.4.4c.2,0,.4.1.6.1s.4,0,.6-.2c.2-.1.3-.2.4-.4,0-.2.1-.4.1-.5Z" fill="#425563"/>
                <path d="M251.9,637.7c0,.2,0,.3,0,.3s-.1.1-.2.1c0,0-.2,0-.3,0h-3.2c0,0-.2,0-.2,0s-.1,0-.2-.1c0,0,0-.2,0-.3s0-.2,0-.3c0,0,0-.1.1-.1,0,0,.1,0,.2,0,0,0,0,0,.1,0h.3c0,0-.2,0-.3-.1,0,0-.2-.2-.2-.3,0-.1-.1-.2-.2-.4s0-.3,0-.4c0-.3,0-.5.1-.7,0-.2.2-.4.4-.5.2-.2.4-.3.6-.3.2,0,.5-.1.8-.1h1.7c0,0,.2,0,.3,0,0,0,.1,0,.2.1,0,0,0,.2,0,.3s0,.3,0,.4-.1.1-.2.1c0,0-.2,0-.3,0h-1.7c-.2,0-.4,0-.5.1s-.3.2-.3.3c0,.1-.1.3-.1.5s0,.4.1.5c0,.1.2.3.3.3.1,0,.3.1.5.1h1.7c0,0,.2,0,.3,0,0,0,.1,0,.2.1,0,0,0,.2,0,.4Z" fill="#425563"/>
                <path d="M251.9,630c0,.2,0,.3,0,.4s-.1.1-.3.1h-.3c0,0,.2,0,.3.2s.2.2.3.4.1.4.1.6,0,.5-.2.8-.3.4-.5.6c-.2.2-.4.3-.7.4-.3.1-.5.2-.8.2s-.5,0-.8-.2c-.2-.1-.5-.2-.7-.4s-.3-.4-.5-.6c-.1-.2-.2-.5-.2-.7s0-.4,0-.6c0-.2.1-.3.2-.4,0-.1.2-.2.3-.3h-.2c-.1,0-.2,0-.3,0,0,0,0-.2,0-.4s0-.3,0-.3c0,0,.1-.1.2-.1,0,0,.2,0,.3,0h3.1c0,0,.2,0,.3,0,0,0,.1,0,.2.1s0,.2,0,.3ZM250.9,631.6c0-.2,0-.4-.1-.5,0-.2-.2-.3-.4-.4-.2,0-.4-.1-.6-.1s-.4,0-.6.1c-.2,0-.3.2-.4.4,0,.2-.1.3-.1.5s0,.4.1.6c0,.2.2.3.4.4.2,0,.4.1.6.1s.4,0,.6-.1c.2,0,.3-.2.4-.4,0-.2.1-.4.1-.6Z" fill="#425563"/>
                <path d="M251.9,627.2c0,.2,0,.4,0,.6,0,.2,0,.3-.1.4,0,.1-.2.2-.3.3-.1,0-.3.1-.4.2-.2,0-.4,0-.6,0h-4.1c-.1,0-.2,0-.3,0,0,0-.1,0-.2-.1,0,0,0-.2,0-.3s0-.3,0-.3c0,0,.1-.1.2-.1s.2,0,.3,0h4c.1,0,.2,0,.3,0,0,0,.1,0,.2,0s0,0,0-.1c0,0,0-.1,0-.2s0-.1,0-.2c0,0,0-.1.1-.1,0,0,.2,0,.3,0s.3,0,.3,0,.1,0,.1.1c0,0,0,.1,0,.2Z" fill="#425563"/>
                <path d="M251.9,623.7c0,.2,0,.3,0,.3,0,0-.1.1-.2.1,0,0-.2,0-.3,0h-4.8c0,0-.2,0-.3,0s-.2,0-.2-.1c0,0,0-.2,0-.3v-2.2c0-.3,0-.6.2-.9.2-.2.4-.4.6-.6.3-.1.5-.2.8-.2s.3,0,.4,0,.3,0,.4.1.2.1.3.2c.1-.1.2-.2.4-.3.1,0,.3-.2.5-.2.2,0,.3,0,.5,0,.3,0,.5,0,.7.1s.4.2.6.4.3.4.4.6c0,.2.1.4.1.7v2.3ZM250.9,623.1v-1.7c0-.2,0-.3,0-.4,0-.1-.2-.2-.3-.3-.1,0-.3-.1-.5-.1s-.3,0-.4,0-.2.1-.2.2,0,.2-.1.2c0,0,0,.2,0,.3,0,0,0,.2,0,.2v.4c0,.1,0,.3-.1.3,0,0-.2.1-.3.1s-.3,0-.3-.1c0,0,0-.2,0-.3v-.4c0,0,0-.2,0-.2,0,0,0-.2,0-.3s0-.1-.2-.2-.2,0-.4,0c-.3,0-.4,0-.6.2-.1.1-.2.4-.2.7v1.5h3.9Z" fill="#425563"/>
                <path d="M252,616.8c0,.4,0,.7-.2,1-.1.3-.3.5-.5.7-.2.2-.4.3-.7.4-.3,0-.5.1-.8.1-.4,0-.8,0-1.1-.3s-.6-.4-.7-.8-.3-.7-.3-1.1,0-.6.1-.8c0-.2.2-.4.4-.6.2-.2.3-.3.5-.4s.4-.1.5-.1c.3,0,.5,0,.7.2.1.1.2.3.2.5v2.2c.2,0,.4,0,.5-.2.1-.1.2-.3.3-.4s.1-.4.1-.5,0-.3,0-.4c0-.1,0-.2,0-.3s0-.1,0-.2,0-.1,0-.2c0,0,0,0,0-.1,0,0,0-.1,0-.2s0-.1.2-.2c0,0,.1,0,.2,0s0,0,.1,0c.1,0,.2,0,.3.2.1.1.2.3.2.6,0,.2,0,.5,0,.9ZM249.5,617.9v-1.7c0,0,0-.2,0-.2,0,0,0,0-.2,0s-.2,0-.3.1-.2.2-.2.3c0,.1,0,.3,0,.5s0,.4.1.6c0,.2.2.3.3.4.1,0,.3.1.5.1Z" fill="#425563"/>
                <path d="M251.9,610.7c0,.2,0,.3,0,.4s-.1.1-.3.1h-5.2c0,0-.2,0-.3,0,0,0-.1,0-.2-.1,0,0,0-.2,0-.3s0-.3,0-.3c0,0,.1-.1.2-.1s.2,0,.3,0h5c0,0,.2,0,.3,0s.1,0,.2.1c0,0,0,.2,0,.3ZM251.9,612.5c0,.3,0,.5-.2.7s-.3.4-.4.6c-.2.2-.4.3-.7.4s-.5.2-.8.2-.5,0-.8-.2c-.3-.1-.5-.2-.7-.4s-.3-.4-.4-.6-.2-.5-.2-.7,0-.5.2-.7.3-.4.4-.5c.2-.2.4-.3.7-.3.3,0,.5-.1.8-.1.3,0,.6,0,.8.1.3,0,.5.2.7.3.2.1.3.3.5.5s.2.5.2.7ZM250.9,612.3c0-.2,0-.4-.1-.5,0-.2-.2-.3-.4-.4-.2,0-.3-.1-.6-.1s-.4,0-.6.1-.3.2-.4.4c0,.2-.1.3-.1.5s0,.4.1.5c0,.2.2.3.4.4.2,0,.4.1.6.1s.4,0,.6-.1c.2,0,.3-.2.4-.4,0-.2.1-.3.1-.5Z" fill="#425563"/>
                <path d="M251.9,608.9c0,.2,0,.3,0,.3,0,0-.1.1-.2.1s-.2,0-.3,0h-3.1c0,0-.2,0-.3,0,0,0-.1,0-.2-.1,0,0,0-.2,0-.3s0-.3,0-.3c0,0,0-.1.2-.1,0,0,.1,0,.2,0h.2s0,0-.2,0c0,0-.1-.1-.2-.2,0,0-.1-.2-.2-.3,0-.1,0-.3,0-.4s0-.1,0-.2c0,0,0-.2,0-.2s0-.1,0-.2c0,0,0-.1.1-.1,0,0,.1,0,.2,0,.2,0,.3,0,.5.1.1,0,.2.2.2.3s0,.1,0,.2c0,0,0,0,0,0s0,0,0,.1c0,0,0,.1,0,.2s0,.2,0,.3c0,0,0,.2.1.2,0,0,.1.1.2.2s.2,0,.3,0h2.1c0,0,.2,0,.3,0,0,0,.1,0,.2.1,0,0,0,.2,0,.4Z" fill="#425563"/>
                <path d="M252,603.9c0,.3,0,.5-.2.8-.1.3-.3.5-.4.7s-.4.4-.7.5c-.3.1-.5.2-.9.2s-.6,0-.8-.2-.5-.3-.7-.5c-.2-.2-.4-.4-.5-.7s-.2-.5-.2-.8,0-.8.3-1.1.4-.6.8-.8c.3-.2.7-.3,1.1-.3s.6,0,.9.2.5.3.7.5c.2.2.3.4.4.7s.2.5.2.8ZM251,603.9c0-.2,0-.4-.1-.5,0-.2-.2-.3-.4-.4-.2-.1-.4-.2-.6-.2s-.4,0-.6.1c-.2,0-.3.2-.4.4,0,.2-.1.4-.1.6s0,.4.1.6c0,.2.2.3.4.4.2,0,.4.1.6.1s.4,0,.6-.2c.2-.1.3-.2.4-.4,0-.2.1-.4.1-.5Z" fill="#425563"/>
                <path d="M252,599.2c0,.3,0,.5-.2.8-.1.3-.3.5-.4.7-.2.2-.4.4-.7.5-.3.1-.5.2-.9.2s-.6,0-.8-.2-.5-.3-.7-.5c-.2-.2-.4-.4-.5-.7-.1-.3-.2-.5-.2-.8s0-.8.3-1.1c.2-.3.4-.6.8-.8.3-.2.7-.3,1.1-.3s.6,0,.9.2.5.3.7.5c.2.2.3.4.4.7s.2.5.2.8ZM251,599.2c0-.2,0-.4-.1-.5,0-.2-.2-.3-.4-.4-.2-.1-.4-.2-.6-.2s-.4,0-.6.1c-.2,0-.3.2-.4.4s-.1.4-.1.6,0,.4.1.6.2.3.4.4c.2,0,.4.1.6.1s.4,0,.6-.2c.2-.1.3-.2.4-.4,0-.2.1-.4.1-.5Z" fill="#425563"/>
                <path d="M251.9,595.9c0,.2,0,.3,0,.3,0,0-.1.1-.2.1,0,0-.2,0-.3,0h-3.2c0,0-.2,0-.3,0,0,0-.1,0-.2-.1,0,0,0-.2,0-.4s0-.3.1-.4c0,0,.2-.1.3-.1h.2c0,0-.1,0-.2,0,0,0-.1-.2-.2-.2,0,0-.1-.2-.2-.3,0-.1,0-.3,0-.4s0-.4,0-.5c0-.2.2-.3.3-.4.1-.1.3-.2.4-.3-.1,0-.3-.2-.4-.3-.1-.1-.2-.3-.3-.4,0-.2-.1-.3-.1-.5,0-.3,0-.6.2-.8s.4-.4.7-.5c.3-.1.7-.2,1.1-.2h1.6c0,0,.2,0,.3,0s.1,0,.2.1c0,0,0,.2,0,.4s0,.3,0,.3c0,0-.1.1-.2.1,0,0-.2,0-.3,0h-1.6c-.2,0-.4,0-.5,0-.2,0-.3.1-.4.2,0,.1-.1.2-.1.4s0,.3.1.4.2.2.3.3c.2,0,.3.1.6.1h1.7c0,0,.2,0,.3,0,0,0,.1,0,.2.2,0,0,0,.2,0,.4,0,.1,0,.3,0,.3,0,0-.1.1-.2.1,0,0-.2,0-.2,0h-1.6c-.2,0-.4,0-.5,0-.2,0-.3.1-.4.2,0,.1-.1.2-.1.4s0,.3.1.4c0,.1.2.2.4.3.2,0,.3,0,.5,0h1.7c0,0,.2,0,.3,0,0,0,.1,0,.2.1s0,.2,0,.4Z" fill="#425563"/>
                <path d="M251.9,586.8c0,.2,0,.3,0,.4s-.1.1-.2.1c0,0-.2,0-.3,0h-4.9c-.2,0-.3,0-.4-.1,0,0-.1-.2-.1-.4v-3.3c0,0,0-.2,0-.3,0,0,0-.1.1-.2,0,0,.2,0,.4,0s.3,0,.3,0c0,0,.1.1.1.2,0,0,0,.2,0,.3v2.8h1.4v-1.9c0,0,0-.2,0-.2,0,0,0-.1.1-.2,0,0,.2,0,.3,0s.2,0,.3,0c0,0,.1,0,.1.2,0,0,0,.2,0,.3v1.9h1.5v-2.8c0,0,0-.2,0-.3,0,0,0-.1.1-.2,0,0,.2,0,.3,0s.3,0,.3,0c0,0,.1.1.1.2,0,0,0,.2,0,.3v3.3Z" fill="#425563"/>
                <path d="M247.9,578.8c0-.1.2-.2.3-.2,0,0,.1,0,.2,0,0,0,.2,0,.3.2l3.1,2.7c.1,0,.2.2.2.3,0,0,0,.1,0,.2,0,0,0,.2-.2.3,0,0-.2.2-.2.2,0,0-.1,0-.2,0,0,0-.2,0-.3-.2l-3.1-2.7c-.2-.1-.2-.3-.2-.4s0-.2.2-.4ZM247.9,582.1c0,0-.1-.2-.2-.3s0-.1,0-.2c0,0,.1-.2.2-.2l3.1-2.7c.1,0,.2-.2.3-.2,0,0,.2,0,.2,0s.2,0,.2.2c0,0,.1.2.2.3,0,0,0,.1,0,.2,0,0-.1.2-.2.3l-3.1,2.7c-.1,0-.2.2-.3.2,0,0-.2,0-.2,0,0,0-.2,0-.3-.2Z" fill="#425563"/>
                <path d="M251.9,575.8c0,.3,0,.5,0,.7s-.1.4-.3.5c-.1.1-.3.2-.5.3-.2,0-.4,0-.7,0h-3.6c0,0-.2,0-.3,0s-.1,0-.2-.1c0,0,0-.2,0-.3s0-.3,0-.3.1-.1.2-.1c0,0,.2,0,.3,0h3.6c.1,0,.2,0,.3,0,0,0,.1,0,.2,0,0,0,0,0,0-.2,0,0,0-.2,0-.3s0-.2,0-.3c0,0,0-.1.1-.2,0,0,.2,0,.3,0s.3,0,.3,0c0,0,.1.1.1.2,0,0,0,.2,0,.2ZM247.8,577.7v-.9s0-1.2,0-1.2c0,0,0-.2,0-.3,0,0,0-.1.1-.2,0,0,.2,0,.3,0s.3,0,.3,0c0,0,.1.1.1.2,0,0,0,.2,0,.3v1.1s0,.9,0,.9c0,.1,0,.2-.1.3s-.2,0-.4,0-.3,0-.4,0c0,0-.1-.2-.1-.3Z" fill="#425563"/>
                <path d="M252,572.5c0,.4,0,.7-.2,1s-.3.5-.5.7c-.2.2-.4.3-.7.4s-.5.1-.8.1c-.4,0-.8,0-1.1-.3s-.6-.4-.7-.8-.3-.7-.3-1.1,0-.6.1-.8c0-.2.2-.4.4-.6s.3-.3.5-.4.4-.1.5-.1c.3,0,.5,0,.7.2s.2.3.2.5v2.2c.2,0,.4,0,.5-.2.1-.1.2-.3.3-.4s.1-.4.1-.5,0-.3,0-.4c0-.1,0-.2,0-.3s0-.1,0-.2c0,0,0-.1,0-.2,0,0,0,0,0-.1,0,0,0-.1,0-.2,0,0,0-.1.2-.2,0,0,.1,0,.2,0,0,0,0,0,.1,0,.1,0,.2,0,.3.2.1.1.2.3.2.6,0,.2,0,.5,0,.9ZM249.5,573.6v-1.7c0,0,0-.2,0-.2,0,0,0,0-.2,0s-.2,0-.3.1-.2.2-.2.3c0,.1,0,.3,0,.5s0,.4.1.6c0,.2.2.3.3.4.1,0,.3.1.5.1Z" fill="#425563"/>
                <path d="M251.9,569.4c0,.2,0,.3,0,.3,0,0-.1.1-.2.1,0,0-.2,0-.3,0h-3.2c0,0-.2,0-.2,0,0,0-.1,0-.2-.1,0,0,0-.2,0-.3s0-.2,0-.3c0,0,0-.1.1-.1s.1,0,.2,0c0,0,0,0,.1,0h.3c0,0-.2,0-.3-.1,0,0-.2-.2-.2-.3,0-.1-.1-.2-.2-.4s0-.3,0-.4c0-.3,0-.5.1-.7,0-.2.2-.4.4-.5.2-.1.4-.3.6-.3.2,0,.5-.1.8-.1h1.7c0,0,.2,0,.3,0,0,0,.1,0,.2.1,0,0,0,.2,0,.3s0,.3,0,.4c0,0-.1.1-.2.1,0,0-.2,0-.3,0h-1.7c-.2,0-.4,0-.5.1s-.3.2-.3.3c0,.1-.1.3-.1.5s0,.4.1.5c0,.1.2.3.3.3.1,0,.3.1.5.1h1.7c0,0,.2,0,.3,0,0,0,.1,0,.2.1,0,0,0,.2,0,.4Z" fill="#425563"/>
                <path d="M252,563.8c0,.1,0,.3,0,.5,0,.2,0,.3-.1.5,0,.2-.1.3-.2.4s-.2.2-.3.2c0,0-.1,0-.2,0s-.1,0-.2,0c0,0-.1,0-.2-.1,0,0,0-.1-.1-.2,0,0,0-.1,0-.2,0,0,0-.2.1-.2,0,0,0-.2.1-.3,0,0,0-.2.1-.3s0-.2,0-.3c0-.2,0-.4-.1-.5,0-.1-.2-.2-.3-.2s-.1,0-.2,0-.1,0-.1.2c0,0,0,.1-.1.2,0,0,0,.2,0,.3,0,.1,0,.2,0,.3,0,.1,0,.3-.1.4,0,.1-.1.3-.2.4,0,.1-.2.2-.3.3s-.3.1-.5.1-.5,0-.6-.2c-.2-.1-.3-.3-.4-.5,0-.2-.1-.5-.1-.8s0-.2,0-.3c0-.1,0-.2,0-.3,0,0,0-.2.1-.3,0,0,0-.2.2-.3,0-.1.2-.2.3-.2.1,0,.2,0,.3.1,0,0,.1.1.2.2,0,0,0,.1,0,.2,0,0,0,.2-.1.3,0,.1,0,.2-.1.3,0,.1,0,.2,0,.3s0,.2,0,.3,0,.2.1.2c0,0,.1,0,.2,0s.1,0,.2,0c0,0,0-.1.1-.2,0,0,0-.2,0-.3,0-.1,0-.2,0-.3,0-.2,0-.3.1-.5,0-.2.1-.3.2-.5,0-.1.2-.2.4-.3.2,0,.3-.1.6-.1.4,0,.7.2,1,.5.2.3.3.7.3,1.3Z" fill="#425563"/>
                <path d="M246.9,560.8c0,.2,0,.3,0,.4,0,0-.1.1-.2.1,0,0-.2,0-.3,0s-.2,0-.3,0-.1,0-.2-.1c0,0,0-.2,0-.4s0-.3,0-.4c0,0,.1-.1.2-.1,0,0,.2,0,.3,0s.2,0,.3,0c0,0,.1,0,.2.1,0,0,0,.2,0,.4ZM251.9,560.8c0,.2,0,.3,0,.3,0,0-.1.1-.2.1,0,0-.2,0-.3,0h-3.1c0,0-.2,0-.3,0,0,0-.1,0-.2-.1,0,0,0-.2,0-.3s0-.3,0-.3.1-.1.2-.1.2,0,.3,0h3.1c0,0,.2,0,.3,0s.1,0,.2.1c0,0,0,.2,0,.4Z" fill="#425563"/>
                <path d="M252,557.4c0,.3,0,.5-.2.8-.1.3-.3.5-.4.7-.2.2-.4.4-.7.5-.3.1-.5.2-.9.2s-.6,0-.8-.2c-.3-.1-.5-.3-.7-.5-.2-.2-.4-.4-.5-.7-.1-.3-.2-.5-.2-.8s0-.8.3-1.1c.2-.3.4-.6.8-.8.3-.2.7-.3,1.1-.3s.6,0,.9.2.5.3.7.5c.2.2.3.4.4.7s.2.5.2.8ZM251,557.4c0-.2,0-.4-.1-.5,0-.2-.2-.3-.4-.4-.2-.1-.4-.2-.6-.2s-.4,0-.6.1c-.2,0-.3.2-.4.4s-.1.4-.1.6,0,.4.1.6.2.3.4.4c.2,0,.4.1.6.1s.4,0,.6-.2c.2-.1.3-.2.4-.4,0-.2.1-.4.1-.5Z" fill="#425563"/>
                <path d="M251.9,554.1c0,.2,0,.3,0,.3,0,0-.1.1-.2.1,0,0-.2,0-.3,0h-3.2c0,0-.2,0-.2,0,0,0-.1,0-.2-.1,0,0,0-.2,0-.3s0-.2,0-.3c0,0,0-.1.1-.1s.1,0,.2,0c0,0,0,0,.1,0h.3c0,0-.2,0-.3-.1,0,0-.2-.2-.2-.3,0-.1-.1-.2-.2-.4s0-.3,0-.4c0-.3,0-.5.1-.7,0-.2.2-.4.4-.5.2-.1.4-.3.6-.3.2,0,.5-.1.8-.1h1.7c0,0,.2,0,.3,0,0,0,.1,0,.2.1,0,0,0,.2,0,.3s0,.3,0,.4c0,0-.1.1-.2.1,0,0-.2,0-.3,0h-1.7c-.2,0-.4,0-.5.1s-.3.2-.3.3c0,.1-.1.3-.1.5s0,.4.1.5c0,.1.2.3.3.3.1,0,.3.1.5.1h1.7c0,0,.2,0,.3,0,0,0,.1,0,.2.1,0,0,0,.2,0,.4Z" fill="#425563"/>
              </g>
              <g>
                <path d="M315.1,636.3c-.3,0-.4,0-.6-.1-.1,0-.2-.2-.2-.3,0-.1,0-.3,0-.5v-8c0-.2,0-.3,0-.4,0-.1.1-.2.2-.3.1,0,.3-.1.6-.1h3.7c.5,0,1,.1,1.4.4s.7.6,1,1c.2.4.4.9.4,1.4s0,.4,0,.7-.1.4-.2.6c-.1.2-.2.4-.4.5.2.2.4.4.6.6.2.2.3.5.4.8,0,.3.1.6.1.9,0,.4,0,.8-.2,1.2-.1.4-.4.7-.6.9-.3.3-.6.5-.9.6-.4.1-.7.2-1.1.2h-3.9ZM315.9,634.6h2.8c.3,0,.5,0,.7-.2.2-.1.4-.3.5-.5.1-.2.2-.5.2-.8s0-.5-.1-.7c0-.2-.2-.3-.3-.4-.1,0-.3-.2-.4-.2s-.3,0-.4,0c-.1,0-.3,0-.4,0h-.6c-.2,0-.4,0-.5-.2-.1-.1-.2-.3-.2-.6s0-.4.2-.6c.1-.1.3-.2.6-.2h.6c.1,0,.3,0,.4,0,.1,0,.3,0,.4-.1.1,0,.2-.2.3-.3,0-.1.1-.3.1-.6,0-.4-.1-.7-.3-.9s-.6-.3-1.1-.3h-2.5v6.5Z" fill="#425563"/>
                <path d="M326.4,636.4c-.6,0-1.1,0-1.6-.3-.5-.2-.8-.5-1.1-.8-.3-.3-.5-.7-.7-1.1-.2-.4-.2-.9-.2-1.3,0-.7.2-1.3.5-1.8.3-.5.7-.9,1.3-1.2s1.2-.4,1.9-.4.9,0,1.3.2c.4.2.7.4,1,.6s.5.5.6.8c.1.3.2.6.2.9,0,.5-.1.9-.4,1.1-.2.2-.5.3-.9.3h-3.7c0,.3.1.6.3.8.2.2.4.4.7.5s.6.2.9.2.4,0,.6,0,.3,0,.5-.1.2,0,.4-.1.2,0,.3-.1.2,0,.2,0c.1,0,.2,0,.3,0,.1,0,.2.2.3.3,0,0,0,.2.1.3,0,0,0,.2,0,.2,0,.2-.1.4-.3.5s-.5.3-.9.4c-.4.1-.9.2-1.4.2ZM324.5,632.3h2.9c.2,0,.3,0,.4,0,0,0,.1-.2.1-.3s0-.4-.2-.6c-.1-.2-.3-.3-.5-.4-.2-.1-.5-.2-.8-.2s-.7,0-.9.2c-.3.1-.5.3-.7.6-.2.2-.2.5-.2.8Z" fill="#425563"/>
                <path d="M333.6,636.3c-.4,0-.8,0-1.2-.3-.4-.2-.7-.4-1-.7s-.5-.7-.7-1.1-.3-.9-.3-1.4,0-.9.3-1.3.4-.8.7-1.1c.3-.3.6-.6,1-.7.4-.2.8-.3,1.2-.3s.9,0,1.2.3.7.4.9.7c.2.3.4.7.6,1.1.1.4.2.9.2,1.3,0,.5,0,.9-.2,1.3-.1.4-.3.8-.6,1.1s-.5.6-.9.7c-.4.2-.8.3-1.2.3ZM333.8,634.6c.3,0,.6,0,.9-.2.3-.2.5-.4.6-.6s.2-.6.2-.9,0-.7-.2-.9-.4-.5-.6-.6c-.3-.2-.6-.2-.9-.2s-.6,0-.9.2c-.3.2-.5.4-.6.6s-.2.6-.2.9,0,.7.2.9.4.5.6.6.6.2.9.2ZM336.4,636.3c-.3,0-.5,0-.6-.1-.1,0-.2-.2-.2-.4v-8.6c0-.2,0-.3,0-.4,0-.1,0-.2.2-.3s.3-.1.6-.1.5,0,.6.1c.1,0,.2.2.2.3s0,.3,0,.4v8.3c0,.2,0,.3,0,.4s-.1.2-.2.3c-.1,0-.3.1-.6.1Z" fill="#425563"/>
                <path d="M339.5,636.3c-.3,0-.5,0-.6-.1s-.2-.2-.2-.3,0-.3,0-.4v-5.2c0-.2,0-.3,0-.4s.1-.2.2-.3.3-.1.6-.1.4,0,.6,0,.2.1.2.3c0,.1,0,.2,0,.3v.3c0,0,0-.2,0-.3s.2-.2.3-.3c.1-.1.3-.2.5-.3.2,0,.4-.1.7-.1s.2,0,.4,0c.1,0,.3,0,.4,0s.2,0,.3.2c.1,0,.2.1.2.2s0,.2,0,.3c0,.3,0,.6-.2.8-.1.2-.3.3-.5.3s-.2,0-.3,0c0,0-.1,0-.2,0,0,0-.1,0-.2,0,0,0-.2,0-.4,0s-.3,0-.4,0-.3.1-.4.2c-.1,0-.2.2-.3.4,0,.1-.1.3-.1.5v3.4c0,.2,0,.3,0,.4,0,.1-.1.2-.2.3-.1,0-.3.1-.6.1Z" fill="#425563"/>
                <path d="M347.7,636.4c-.4,0-.9,0-1.3-.3-.4-.2-.8-.4-1.2-.7-.3-.3-.6-.7-.8-1.1-.2-.4-.3-.9-.3-1.4s0-1,.3-1.4c.2-.4.4-.8.8-1.1.3-.3.7-.6,1.1-.8.4-.2.9-.3,1.4-.3s1.3.2,1.8.5c.5.3,1,.7,1.3,1.3.3.5.5,1.1.5,1.8s0,1-.3,1.5c-.2.4-.5.8-.8,1.1s-.7.6-1.1.7c-.4.2-.8.3-1.3.3ZM347.7,634.7c.3,0,.6,0,.9-.2s.5-.4.7-.7c.2-.3.3-.6.3-1s0-.7-.2-1c-.2-.3-.4-.5-.7-.7-.3-.2-.6-.2-1-.2s-.6,0-.9.2c-.3.2-.5.4-.7.7-.2.3-.2.6-.2,1s0,.7.3,1c.2.3.4.5.7.7s.6.2.9.2Z" fill="#425563"/>
                <path d="M355.5,636.4c-.4,0-.9,0-1.3-.3-.4-.2-.8-.4-1.2-.7-.3-.3-.6-.7-.8-1.1-.2-.4-.3-.9-.3-1.4s0-1,.3-1.4c.2-.4.4-.8.8-1.1.3-.3.7-.6,1.1-.8.4-.2.9-.3,1.4-.3s1.3.2,1.8.5c.5.3,1,.7,1.3,1.3.3.5.5,1.1.5,1.8s0,1-.3,1.5c-.2.4-.5.8-.8,1.1s-.7.6-1.1.7c-.4.2-.8.3-1.3.3ZM355.5,634.7c.3,0,.6,0,.9-.2s.5-.4.7-.7c.2-.3.3-.6.3-1s0-.7-.2-1c-.2-.3-.4-.5-.7-.7-.3-.2-.6-.2-1-.2s-.6,0-.9.2c-.3.2-.5.4-.7.7-.2.3-.2.6-.2,1s0,.7.3,1c.2.3.4.5.7.7s.6.2.9.2Z" fill="#425563"/>
                <path d="M360.9,636.3c-.3,0-.5,0-.6-.1-.1,0-.2-.2-.2-.3,0-.1,0-.3,0-.4v-5.2c0-.2,0-.3,0-.4,0-.1.1-.2.2-.3.1,0,.3-.1.6-.1s.5,0,.6.2c.1.1.2.3.2.5v.4c0-.1,0-.2.1-.3.1-.1.2-.2.4-.4.2-.1.3-.2.6-.3.2,0,.4-.1.6-.1s.6,0,.8.2.5.3.7.4c.2.2.4.4.5.7.2-.2.3-.5.5-.7.2-.2.4-.4.7-.5.3-.1.6-.2.9-.2.5,0,1,.1,1.4.4.4.3.6.7.8,1.2.2.5.3,1.1.3,1.8v2.7c0,.2,0,.3,0,.4s-.1.2-.2.3c-.1,0-.3.1-.6.1s-.5,0-.6-.1c-.1,0-.2-.2-.2-.3s0-.3,0-.4v-2.7c0-.3,0-.6-.1-.9s-.2-.4-.4-.6c-.2-.1-.4-.2-.6-.2s-.5,0-.7.2c-.2.1-.4.3-.5.6-.1.3-.2.6-.2.9v2.7c0,.2,0,.3,0,.4,0,.1-.1.2-.3.3s-.3,0-.6,0c-.2,0-.4,0-.5-.1-.1,0-.2-.2-.2-.3,0-.1,0-.3,0-.4v-2.7c0-.3,0-.6-.1-.9s-.2-.4-.4-.6c-.2-.1-.4-.2-.6-.2s-.5,0-.7.2-.4.3-.5.6c-.1.3-.2.5-.2.9v2.7c0,.1,0,.3,0,.4,0,.1-.1.2-.2.3-.1,0-.3.1-.6.1Z" fill="#425563"/>
                <path d="M375.6,636.2c-.2,0-.4,0-.6-.3-.2-.2-.3-.4-.3-.6s0-.3,0-.4c0-.1,0-.3.1-.4,0-.1.2-.3.3-.4.4-.4.9-.7,1.3-1,.4-.3.9-.6,1.3-.9.4-.3.8-.5,1.1-.8.3-.3.6-.6.8-.9.2-.3.3-.6.3-1s0-.5-.2-.8-.3-.4-.6-.6c-.3-.1-.6-.2-1-.2s-.5,0-.8.1-.4.2-.5.4c-.1.2-.3.4-.3.6,0,.2-.1.5-.1.8s0,.3,0,.4c0,.1-.1.2-.2.3-.1,0-.3.1-.6.1s-.5,0-.6-.1-.2-.2-.2-.3c0-.1,0-.3,0-.4,0-.5,0-.9.2-1.3.2-.4.4-.8.7-1.1s.7-.6,1.1-.7c.4-.2.9-.3,1.4-.3s1.3.1,1.8.4c.5.3.9.7,1.2,1.2s.4,1.1.4,1.8,0,.7-.2,1c-.1.3-.3.6-.5.9s-.4.5-.7.8c-.3.2-.5.5-.8.7-.3.2-.6.4-.9.6-.3.2-.6.4-.9.5l-.5.3h4c.2,0,.3,0,.4,0,.1,0,.2.1.3.2s.1.3.1.6,0,.5-.1.6c0,.1-.2.2-.3.2-.1,0-.3,0-.4,0h-5.6Z" fill="#425563"/>
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
              <g id="Pool_table" filter="url(#drop-shadow-1)">
                <g>
                  <rect x="332.2" y="250.5" width="74.7" height="151.6" rx="3.8" ry="3.8" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M407.1,254.3v144c0,2.3-1.8,4.1-4.1,4.1h-67c-2.3,0-4.1-1.8-4.1-4.1v-144c0-2.3,1.8-4.1,4.1-4.1h67c2.3,0,4.1,1.8,4.1,4.1ZM332.4,398.3c0,2,1.6,3.6,3.6,3.6h67c2,0,3.6-1.6,3.6-3.6v-144c0-2-1.6-3.6-3.6-3.6h-67c-2,0-3.6,1.6-3.6,3.6v144Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <rect x="336.6" y="254.9" width="65.8" height="142.8" fill="#f4f2ef" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M402.7,254.6v143.4h-66.4v-143.4h66.4ZM402.2,397.4v-142.3h-65.3v142.3h65.3Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M396.6,250.5h6.4c2.1,0,3.8,1.7,3.8,3.8v6.9h0c-5.6,0-10.2-4.6-10.2-10.2s0-.3,0-.5Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M407.1,254.3v7.1h-.3c-5.8,0-10.5-4.7-10.5-10.5s0-.3,0-.5v-.3h6.7c2.3,0,4.1,1.8,4.1,4.1ZM406.6,260.9v-6.6c0-2-1.6-3.6-3.6-3.6h-6.1c0,0,0,.1,0,.2,0,5.4,4.3,9.8,9.7,10Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M332.2,260.7v-6.4c0-2.1,1.7-3.8,3.8-3.8h6.9c0,5.7-4.6,10.2-10.2,10.2s-.3,0-.5,0Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M343.1,250.2v.3c0,5.8-4.7,10.5-10.5,10.5s-.3,0-.5,0h-.3v-6.7c0-2.3,1.8-4.1,4.1-4.1h7.1ZM332.4,260.4c0,0,.1,0,.2,0,5.4,0,9.8-4.3,10-9.7h-6.6c-2,0-3.6,1.6-3.6,3.6v6.1Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M342.4,402.1h-6.4c-2.1,0-3.8-1.7-3.8-3.8v-6.9h0c5.6,0,10.2,4.6,10.2,10.2s0,.3,0,.5Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M342.7,401.6c0,.2,0,.3,0,.5v.3h-6.7c-2.3,0-4.1-1.8-4.1-4.1v-7.1h.3c5.8,0,10.5,4.7,10.5,10.5ZM342.1,401.9c0,0,0-.1,0-.2,0-5.4-4.3-9.8-9.7-10v6.6c0,2,1.6,3.6,3.6,3.6h6.1Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M406.8,391.9v6.4c0,2.1-1.7,3.8-3.8,3.8h-6.9c0-5.7,4.6-10.2,10.2-10.2s.3,0,.5,0Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M407.1,391.6v6.6c0,2.3-1.8,4.1-4.1,4.1h-7.1v-.3c0-5.8,4.7-10.5,10.5-10.5s.3,0,.5,0h.3ZM396.4,401.9h6.6c2,0,3.6-1.6,3.6-3.6v-6.1c0,0-.1,0-.2,0-5.4,0-9.8,4.3-10,9.7Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M332.3,333.9c4.1,0,7.5-3.5,7.5-7.6s-3.3-7.5-7.5-7.6v15.2Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M340.1,326.3c0,4.3-3.5,7.8-7.8,7.9h-.3s0-15.8,0-15.8h.3c4.3,0,7.8,3.6,7.8,7.9ZM332.6,333.6c3.9-.2,7-3.4,7-7.3s-3.1-7.1-7-7.3v14.7Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M406.8,318.7c-4.1,0-7.5,3.5-7.5,7.6s3.3,7.5,7.5,7.6v-15.2Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M407.1,318.4v15.8h-.3c-4.3,0-7.8-3.6-7.8-7.9s3.5-7.8,7.8-7.9h.3ZM406.6,333.6v-14.7c-3.9.2-7,3.4-7,7.3s3.1,7.1,7,7.3Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M364.8,355.5c1.2,0,2.2,1,2.2,2.2s-1,2.2-2.2,2.2-2.2-1-2.2-2.2,1-2.2,2.2-2.2Z" fill="#fff"/>
                  <path d="M367,357.7c0,1.4-1.1,2.5-2.5,2.5s-2.5-1.1-2.5-2.5,1.1-2.5,2.5-2.5,2.5,1.1,2.5,2.5ZM362.6,357.7c0,1.1.9,1.9,1.9,1.9s1.9-.9,1.9-1.9-.9-1.9-1.9-1.9-1.9.9-1.9,1.9Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M360.4,355.5c1.2,0,2.2,1,2.2,2.2s-1,2.2-2.2,2.2-2.2-1-2.2-2.2,1-2.2,2.2-2.2Z" fill="#fff"/>
                  <path d="M362.6,357.7c0,1.4-1.1,2.5-2.5,2.5s-2.5-1.1-2.5-2.5,1.1-2.5,2.5-2.5,2.5,1.1,2.5,2.5ZM358.2,357.7c0,1.1.9,1.9,1.9,1.9s1.9-.9,1.9-1.9-.9-1.9-1.9-1.9-1.9.9-1.9,1.9Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M369.2,355.5c1.2,0,2.2,1,2.2,2.2s-1,2.2-2.2,2.2-2.2-1-2.2-2.2,1-2.2,2.2-2.2Z" fill="#fff"/>
                  <path d="M371.4,357.7c0,1.4-1.1,2.5-2.5,2.5s-2.5-1.1-2.5-2.5,1.1-2.5,2.5-2.5,2.5,1.1,2.5,2.5ZM367,357.7c0,1.1.9,1.9,1.9,1.9s1.9-.9,1.9-1.9-.9-1.9-1.9-1.9-1.9.9-1.9,1.9Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M373.6,355.5c1.2,0,2.2,1,2.2,2.2s-1,2.2-2.2,2.2-2.2-1-2.2-2.2,1-2.2,2.2-2.2Z" fill="#fff"/>
                  <path d="M375.8,357.7c0,1.4-1.1,2.5-2.5,2.5s-2.5-1.1-2.5-2.5,1.1-2.5,2.5-2.5,2.5,1.1,2.5,2.5ZM371.4,357.7c0,1.1.9,1.9,1.9,1.9s1.9-.9,1.9-1.9-.9-1.9-1.9-1.9-1.9.9-1.9,1.9Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M366.8,359.9c1.2,0,2.2,1,2.2,2.2s-1,2.2-2.2,2.2-2.2-1-2.2-2.2,1-2.2,2.2-2.2Z" fill="#fff"/>
                  <path d="M369.2,362.1c0,1.4-1.1,2.5-2.5,2.5s-2.5-1.1-2.5-2.5,1.1-2.5,2.5-2.5,2.5,1.1,2.5,2.5ZM364.8,362.1c0,1.1.9,1.9,1.9,1.9s1.9-.9,1.9-1.9-.9-1.9-1.9-1.9-1.9.9-1.9,1.9Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M362.6,359.9c1.2,0,2.2,1,2.2,2.2s-1,2.2-2.2,2.2-2.2-1-2.2-2.2,1-2.2,2.2-2.2Z" fill="#fff"/>
                  <path d="M364.8,362.1c0,1.4-1.1,2.5-2.5,2.5s-2.5-1.1-2.5-2.5,1.1-2.5,2.5-2.5,2.5,1.1,2.5,2.5ZM360.4,362.1c0,1.1.9,1.9,1.9,1.9s1.9-.9,1.9-1.9-.9-1.9-1.9-1.9-1.9.9-1.9,1.9Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M371.2,359.9c1.2,0,2.2,1,2.2,2.2s-1,2.2-2.2,2.2-2.2-1-2.2-2.2,1-2.2,2.2-2.2Z" fill="#fff"/>
                  <path d="M373.6,362.1c0,1.4-1.1,2.5-2.5,2.5s-2.5-1.1-2.5-2.5,1.1-2.5,2.5-2.5,2.5,1.1,2.5,2.5ZM369.2,362.1c0,1.1.9,1.9,1.9,1.9s1.9-.9,1.9-1.9-.9-1.9-1.9-1.9-1.9.9-1.9,1.9Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M375.6,359.9c1.2,0,2.2,1,2.2,2.2s-1,2.2-2.2,2.2-2.2-1-2.2-2.2,1-2.2,2.2-2.2Z" fill="#fff"/>
                  <path d="M378,362.1c0,1.4-1.1,2.5-2.5,2.5s-2.5-1.1-2.5-2.5,1.1-2.5,2.5-2.5,2.5,1.1,2.5,2.5ZM373.6,362.1c0,1.1.9,1.9,1.9,1.9s1.9-.9,1.9-1.9-.9-1.9-1.9-1.9-1.9.9-1.9,1.9Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M364.6,364c1.2,0,2.2,1,2.2,2.2s-1,2.2-2.2,2.2-2.2-1-2.2-2.2,1-2.2,2.2-2.2Z" fill="#fff"/>
                  <path d="M367,366.2c0,1.4-1.1,2.5-2.5,2.5s-2.5-1.1-2.5-2.5,1.1-2.5,2.5-2.5,2.5,1.1,2.5,2.5ZM362.6,366.2c0,1.1.9,1.9,1.9,1.9s1.9-.9,1.9-1.9-.9-1.9-1.9-1.9-1.9.9-1.9,1.9Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <circle cx="369" cy="366.2" r="2.2" fill="#fff"/>
                  <path d="M371.4,366.2c0,1.4-1.1,2.5-2.5,2.5s-2.5-1.1-2.5-2.5,1.1-2.5,2.5-2.5,2.5,1.1,2.5,2.5ZM367,366.2c0,1.1.9,1.9,1.9,1.9s1.9-.9,1.9-1.9-.9-1.9-1.9-1.9-1.9.9-1.9,1.9Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M366.8,368.1c1.2,0,2.2,1,2.2,2.2s-1,2.2-2.2,2.2-2.2-1-2.2-2.2,1-2.2,2.2-2.2Z" fill="#fff"/>
                  <path d="M369.2,370.3c0,1.4-1.1,2.5-2.5,2.5s-2.5-1.1-2.5-2.5,1.1-2.5,2.5-2.5,2.5,1.1,2.5,2.5ZM364.8,370.3c0,1.1.9,1.9,1.9,1.9s1.9-.9,1.9-1.9-.9-1.9-1.9-1.9-1.9.9-1.9,1.9Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <circle cx="369" cy="374.4" r="2.2" fill="#fff"/>
                  <path d="M371.4,374.4c0,1.4-1.1,2.5-2.5,2.5s-2.5-1.1-2.5-2.5,1.1-2.5,2.5-2.5,2.5,1.1,2.5,2.5ZM367,374.4c0,1.1.9,1.9,1.9,1.9s1.9-.9,1.9-1.9-.9-1.9-1.9-1.9-1.9.9-1.9,1.9Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M371.2,368.1c1.2,0,2.2,1,2.2,2.2s-1,2.2-2.2,2.2-2.2-1-2.2-2.2,1-2.2,2.2-2.2Z" fill="#fff"/>
                  <path d="M373.6,370.3c0,1.4-1.1,2.5-2.5,2.5s-2.5-1.1-2.5-2.5,1.1-2.5,2.5-2.5,2.5,1.1,2.5,2.5ZM369.2,370.3c0,1.1.9,1.9,1.9,1.9s1.9-.9,1.9-1.9-.9-1.9-1.9-1.9-1.9.9-1.9,1.9Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <circle cx="373.4" cy="366.2" r="2.2" fill="#fff"/>
                  <path d="M375.8,366.2c0,1.4-1.1,2.5-2.5,2.5s-2.5-1.1-2.5-2.5,1.1-2.5,2.5-2.5,2.5,1.1,2.5,2.5ZM371.4,366.2c0,1.1.9,1.9,1.9,1.9s1.9-.9,1.9-1.9-.9-1.9-1.9-1.9-1.9.9-1.9,1.9Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M378,355.5c1.2,0,2.2,1,2.2,2.2s-1,2.2-2.2,2.2-2.2-1-2.2-2.2,1-2.2,2.2-2.2Z" fill="#fff"/>
                  <path d="M380.2,357.7c0,1.4-1.1,2.5-2.5,2.5s-2.5-1.1-2.5-2.5,1.1-2.5,2.5-2.5,2.5,1.1,2.5,2.5ZM375.8,357.7c0,1.1.9,1.9,1.9,1.9s1.9-.9,1.9-1.9-.9-1.9-1.9-1.9-1.9.9-1.9,1.9Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <polygon points="355.3 265.8 355.3 326.3 354.9 326.3 354.2 265.8 355.3 265.8" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M355.5,265.5v61h-.9v-.3s-.8-60.8-.8-60.8h1.6ZM355,309.5v-43.4h-.6l.6,43.4Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <polygon points="372.6 271.2 360.4 330.4 360 330.4 371.6 271 372.6 271.2" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M373,271l-12.4,59.8-.8-.2,11.6-59.9,1.6.3ZM363.5,314l8.8-42.5h-.5c0-.1-8.3,42.5-8.3,42.5Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
              </g>
              <g id="Couch" filter="url(#drop-shadow-2)">
                <g>
                  <rect x="567.1" y="344.3" width="45.1" height="45.1" rx="8.6" ry="8.6" transform="translate(222.8 956.5) rotate(-90)" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M612.5,347v39.8c0,1.6-1.3,3-3,3h-39.8c-1.6,0-3-1.3-3-3v-39.8c0-1.6,1.3-3,3-3h39.8c1.6,0,3,1.3,3,3ZM567.5,386.8c0,1.3,1,2.3,2.3,2.3h39.8c1.3,0,2.3-1,2.3-2.3v-39.8c0-1.3-1-2.3-2.3-2.3h-39.8c-1.3,0-2.3,1-2.3,2.3v39.8Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M575.6,216.7h36.5v36.5c0,4.7-3.9,8.6-8.6,8.6h-27.9c-4.7,0-8.6-3.9-8.6-8.6v-27.9c0-4.7,3.9-8.6,8.6-8.6Z" transform="translate(350.3 828.8) rotate(-90)" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M612.4,219.3v39.8c0,1.6-1.3,3-3,3h-39.8c-1.6,0-3-1.3-3-3v-42.7h42.7c1.6,0,3,1.3,3,3ZM567.3,259.1c0,1.3,1,2.3,2.3,2.3h39.8c1.3,0,2.3-1,2.3-2.3v-39.8c0-1.3-1-2.3-2.3-2.3h-42.1v42.1Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M522,216.7h40.9c2.3,0,4.2,1.9,4.2,4.2v40.9h-36.5c-4.7,0-8.6-3.9-8.6-8.6v-36.5h0Z" transform="translate(305.3 783.7) rotate(-90)" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M567.3,216.4v42.7c0,1.6-1.3,3-3,3h-42.7v-44.1c0-.9.7-1.6,1.6-1.6h44.1ZM522.3,261.4h42.1c1.3,0,2.3-1,2.3-2.3v-42.1h-43.5c-.5,0-.9.4-.9.9v43.5Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M522,261.7h45.1v45.1h-36.5c-4.7,0-8.6-3.9-8.6-8.6v-36.5h0Z" transform="translate(1089 568.5) rotate(180)" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M567.3,264.4v42.7h-45.7v-45.7h42.7c1.6,0,3,1.3,3,3ZM566.7,306.5v-42.1c0-1.3-1-2.3-2.3-2.3h-42.1v44.4h44.4Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <rect x="522" y="306.8" width="45.1" height="45.1" transform="translate(1089 658.7) rotate(180)" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M567.3,306.5v45.7h-45.7v-45.7h45.7ZM566.7,351.5v-44.4h-44.4v44.4h44.4Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <rect x="522" y="351.9" width="45.1" height="44.1" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M567.3,351.5v44.8h-45.7v-44.8h45.7ZM566.7,395.7v-43.5h-44.4v43.5h44.4Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <g>
                    <path d="M588.1,200.3h7.7v40.4c0,2.6-2.1,4.7-4.7,4.7h-3c-2.6,0-4.7-2.1-4.7-4.7v-35.7c0-2.6,2.1-4.7,4.7-4.7Z" transform="translate(366.7 812.4) rotate(-90)" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M612.4,219.3v7.1c0,1.6-1.3,3-3,3h-39.8c-1.6,0-3-1.3-3-3v-10h42.7c1.6,0,3,1.3,3,3ZM567.3,226.4c0,1.3,1,2.3,2.3,2.3h39.8c1.3,0,2.3-1,2.3-2.3v-7.1c0-1.3-1-2.3-2.3-2.3h-42.1v9.4Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <rect x="587.6" y="194.7" width="3.8" height="45.1" rx="1.4" ry="1.4" transform="translate(372.3 806.8) rotate(-90)" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M612.4,216.6v1.4c0,.8-.7,1.5-1.5,1.5h-42.6c-.8,0-1.5-.7-1.5-1.5v-1.4c0-.8.7-1.5,1.5-1.5h42.6c.8,0,1.5.7,1.5,1.5ZM567.3,218c0,.5.4.9.9.9h42.6c.5,0,.9-.4.9-.9v-1.4c0-.5-.4-.9-.9-.9h-42.6c-.5,0-.9.4-.9.9v1.4Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                </g>
                <g>
                  <path d="M543,200.3h6.1c.9,0,1.6.7,1.6,1.6v38.8c0,2.6-2.1,4.7-4.7,4.7h-3c-2.6,0-4.7-2.1-4.7-4.7v-35.7c0-2.6,2.1-4.7,4.7-4.7Z" transform="translate(321.6 767.3) rotate(-90)" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M567.3,219.3v7.1c0,1.6-1.3,3-3,3h-39.8c-1.6,0-3-1.3-3-3v-8.8c0-.7.5-1.2,1.2-1.2h41.5c1.6,0,3,1.3,3,3ZM522.3,226.4c0,1.3,1,2.3,2.3,2.3h39.8c1.3,0,2.3-1,2.3-2.3v-7.1c0-1.3-1-2.3-2.3-2.3h-41.5c-.3,0-.6.3-.6.6v8.8Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M525.3,218.6l10,10.5v28.8c0,2.1-1.7,3.9-3.9,3.9h-8.5v-41.2c0-2.1.2-2,2.4-2Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M535.6,228.9v28.9c0,2.3-1.9,4.2-4.2,4.2h-8.8v-41.5c0-1.1,0-1.6.4-2,.4-.4.9-.4,1.9-.3h.6s10.2,10.7,10.2,10.7ZM523.3,261.4h8.1c2,0,3.6-1.6,3.6-3.6v-28.7l-9.8-10.3h-.3c-.7,0-1.2,0-1.4.2-.2.2-.2.7-.2,1.5v40.8Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M522,217.3v42.6c0,1,.8,1.9,1.9,1.9s1.9-.8,1.9-1.9v-40.7h39.4c1,0,1.9-.8,1.9-1.9s-.8-1.9-1.9-1.9h-41.3c-1,0-1.9.8-1.9,1.9Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M567.3,217.3c0,1.2-1,2.2-2.2,2.2h-39.1v40.3c0,1.2-1,2.2-2.2,2.2s-2.2-1-2.2-2.2v-42.6c0-1.2,1-2.2,2.2-2.2h41.3c1.2,0,2.2,1,2.2,2.2ZM522.3,259.8c0,.9.7,1.6,1.6,1.6s1.6-.7,1.6-1.6v-41h39.7c.9,0,1.6-.7,1.6-1.6s-.7-1.6-1.6-1.6h-41.3c-.9,0-1.6.7-1.6,1.6v42.6Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <g>
                    <path d="M527.9,261.7h7.7v40.4c0,2.6-2.1,4.7-4.7,4.7h-3c-2.6,0-4.7-2.1-4.7-4.7v-35.7c0-2.6,2.1-4.7,4.7-4.7Z" transform="translate(1058.9 568.5) rotate(-180)" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M535.9,264.4v39.8c0,1.6-1.3,3-3,3h-10v-42.7c0-1.6,1.3-3,3-3h7.1c1.6,0,3,1.3,3,3ZM523.6,306.5h9.4c1.3,0,2.3-1,2.3-2.3v-39.8c0-1.3-1-2.3-2.3-2.3h-7.1c-1.3,0-2.3,1-2.3,2.3v42.1Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <rect x="522" y="261.7" width="3.8" height="45.1" rx="1.4" ry="1.4" transform="translate(1047.7 568.5) rotate(-180)" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M526.1,262.9v42.6c0,.8-.7,1.5-1.5,1.5h-1.4c-.8,0-1.5-.7-1.5-1.5v-42.6c0-.8.7-1.5,1.5-1.5h1.4c.8,0,1.5.7,1.5,1.5ZM522.3,305.6c0,.5.4.9.9.9h1.4c.5,0,.9-.4.9-.9v-42.6c0-.5-.4-.9-.9-.9h-1.4c-.5,0-.9.4-.9.9v42.6Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M528,306.8h7.7v40.4c0,2.6-2.1,4.7-4.7,4.7h-3c-2.6,0-4.7-2.1-4.7-4.7v-35.7c0-2.6,2.1-4.7,4.7-4.7Z" transform="translate(1058.9 658.7) rotate(180)" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M536,309.4v39.8c0,1.6-1.3,3-3,3h-10v-42.7c0-1.6,1.3-3,3-3h7.1c1.6,0,3,1.3,3,3ZM523.6,351.5h9.4c1.3,0,2.3-1,2.3-2.3v-39.8c0-1.3-1-2.3-2.3-2.3h-7.1c-1.3,0-2.3,1-2.3,2.3v42.1Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <rect x="522" y="306.8" width="3.8" height="45.1" rx="1.4" ry="1.4" transform="translate(1047.7 658.7) rotate(-180)" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M526.1,308v42.6c0,.8-.7,1.5-1.5,1.5h-1.4c-.8,0-1.5-.7-1.5-1.5v-42.6c0-.8.7-1.5,1.5-1.5h1.4c.8,0,1.5.7,1.5,1.5ZM522.3,350.7c0,.5.4.9.9.9h1.4c.5,0,.9-.4.9-.9v-42.6c0-.5-.4-.9-.9-.9h-1.4c-.5,0-.9.4-.9.9v42.6Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                </g>
                <g>
                  <path d="M543,368.2h3c2.6,0,4.7,2.1,4.7,4.7v38.8c0,.9-.7,1.6-1.6,1.6h-6.1c-2.6,0-4.7-2.1-4.7-4.7v-35.7c0-2.6,2.1-4.7,4.7-4.7Z" transform="translate(935.2 -153.8) rotate(90)" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M567.3,387.2v7.1c0,1.6-1.3,3-3,3h-41.5c-.7,0-1.2-.5-1.2-1.2v-8.8c0-1.6,1.3-3,3-3h39.8c1.6,0,3,1.3,3,3ZM522.3,396c0,.3.3.6.6.6h41.5c1.3,0,2.3-1,2.3-2.3v-7.1c0-1.3-1-2.3-2.3-2.3h-39.8c-1.3,0-2.3,1-2.3,2.3v8.8Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M525.3,395l10-10.5v-28.8c0-2.1-1.7-3.9-3.9-3.9h-8.5v41.2c0,2.1.2,2,2.4,2Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M535.6,355.7v28.9l-10.2,10.7h-.6c-1,0-1.5,0-1.9-.3-.3-.3-.4-.9-.4-2v-41.5h8.8c2.3,0,4.2,1.9,4.2,4.2ZM535,384.4v-28.7c0-2-1.6-3.6-3.6-3.6h-8.1v40.8c0,.8,0,1.3.2,1.5.2.2.7.2,1.4.2h.3s9.8-10.3,9.8-10.3Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M612.2,216v42.6c0,1-.8,1.9-1.9,1.9s-1.9-.8-1.9-1.9v-40.7h-39.4c-1,0-1.9-.8-1.9-1.9s.8-1.9,1.9-1.9h41.3c1,0,1.9.8,1.9,1.9Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M566.8,216c0-1.2,1-2.2,2.2-2.2h41.3c1.2,0,2.2,1,2.2,2.2v42.6c0,1.2-1,2.2-2.2,2.2s-2.2-1-2.2-2.2v-40.3h-39.1c-1.2,0-2.2-1-2.2-2.2ZM611.9,216c0-.9-.7-1.6-1.6-1.6h-41.3c-.9,0-1.6.7-1.6,1.6s.7,1.6,1.6,1.6h39.7v41c0,.9.7,1.6,1.6,1.6s1.6-.7,1.6-1.6v-42.6Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <g>
                    <path d="M532.8,382.7c-.2,0-.2-.3,0-.4,1-1,4.5-4.5,5.7-5.9,1.2-1.4,4-5.5,4.7-6.6,0-.1.3-.2.4,0,.9,1.2,4.7,5.1,6.2,6.3,1.4,1.2,5.1,3.6,6.3,4.2.2,0,.2.3,0,.4-1,1-4.6,4.4-5.8,5.8-1.2,1.4-3.9,5.6-4.6,6.7,0,.1-.3.2-.4,0-.9-1.1-2.1-3-5.7-5.9-1.4-1.1-5.6-3.9-6.8-4.5Z" fill="#f4f2ef" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M556.6,380.4c0,.2,0,.3-.2.4-1.1,1-4.6,4.4-5.7,5.7-1.1,1.4-3.8,5.5-4.6,6.7-.1.2-.3.3-.5.3-.2,0-.4,0-.5-.2-.1-.2-.3-.4-.5-.6-.9-1.2-2.2-2.9-5.2-5.3-1.4-1.1-5.5-3.8-6.8-4.5-.2,0-.3-.2-.3-.4,0-.2,0-.4.2-.5,1-1,4.5-4.4,5.7-5.8,1.1-1.4,3.9-5.4,4.7-6.6.1-.2.3-.3.5-.3.2,0,.4,0,.5.2.9,1.2,4.7,5.1,6.1,6.2,1.4,1.1,5,3.6,6.2,4.1.2,0,.3.2.3.4,0,0,0,0,0,0ZM545.5,392.8c.9-1.3,3.5-5.3,4.6-6.7,1.1-1.4,4.6-4.6,5.7-5.7-1.3-.7-4.9-3-6.3-4.2-1.4-1.2-5.1-5-6.1-6.2-.9,1.3-3.6,5.2-4.7,6.6-1.1,1.4-4.5,4.7-5.6,5.8,1.4.8,5.4,3.4,6.8,4.5,3,2.4,4.4,4.2,5.3,5.4.1.2.3.3.4.5Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M527.2,361.3c-.1-.1,0-.3.1-.4,1.3-.4,6-2.1,7.7-2.8,1.7-.8,5.9-3.3,7.1-4,.2,0,.3,0,.4.2.3,1.4,2.1,6.6,2.9,8.3.8,1.6,3,5.4,3.9,6.5.1.1,0,.4-.1.4-1.3.4-6,2-7.7,2.7-1.7.8-5.9,3.4-7.1,4.1-.2,0-.3,0-.4-.2-.3-1.3-.6-3.7-2.6-7.8-.8-1.6-3.4-5.9-4.2-7Z" fill="#f4f2ef" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M549.7,369.2c0,0,0,.1,0,.2,0,.2-.2.3-.4.4-1.4.4-6,2-7.6,2.7-1.6.7-5.8,3.3-7,4.1-.2,0-.4.1-.5,0-.2,0-.3-.2-.3-.4,0-.2-.1-.5-.2-.7-.3-1.4-.7-3.6-2.4-7-.8-1.6-3.4-5.8-4.2-7h0c-.1-.2-.1-.3,0-.5,0-.2.2-.3.4-.4,1.4-.5,6-2.1,7.6-2.8,1.6-.8,5.8-3.2,7.1-3.9.2,0,.4-.1.5,0,.2,0,.3.2.3.4.3,1.4,2.1,6.6,2.8,8.2.7,1.6,3,5.4,3.9,6.4,0,.1.1.2.1.4ZM534.3,375.9c1.3-.8,5.4-3.3,7-4,1.6-.7,6.1-2.2,7.6-2.7-.9-1.2-3.1-4.8-3.9-6.5-.8-1.6-2.5-6.7-2.9-8.3-1.4.8-5.4,3.2-7.1,3.9-1.6.7-6.1,2.3-7.6,2.8.9,1.3,3.4,5.4,4.2,7,1.7,3.5,2.1,5.7,2.4,7.1,0,.2,0,.4.1.6Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M531.8,235c0-.2.2-.3.4-.2,1.3.5,5.9,2.4,7.6,3,1.7.5,6.6,1.5,8,1.8.2,0,.3.2.2.4-.7,1.3-2.8,6.3-3.4,8.1-.5,1.7-1.3,6.1-1.4,7.4,0,.2-.2.3-.4.2-1.3-.6-5.8-2.5-7.5-3.1-1.7-.5-6.6-1.4-8-1.7-.2,0-.3-.2-.2-.4.7-1.2,2-3.1,3.2-7.5.5-1.8,1.4-6.7,1.5-8.1Z" fill="#f4f2ef" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M548.3,239.8c0,.1,0,.2,0,.3-.7,1.3-2.8,6.3-3.4,8-.5,1.7-1.3,6-1.4,7.3,0,.2-.1.4-.3.5-.2.1-.4.1-.5,0-1.3-.6-5.8-2.5-7.5-3.1-1.7-.5-6.5-1.4-8-1.7-.2,0-.3-.2-.4-.3,0-.2,0-.4,0-.5.1-.2.2-.4.4-.6.7-1.3,1.8-3.1,2.9-6.8.5-1.7,1.4-6.6,1.5-8h0c0-.2.1-.3.3-.4.2,0,.4-.1.5,0,1.3.6,5.9,2.4,7.6,3,1.7.5,6.5,1.5,7.9,1.8.2,0,.3.2.4.3,0,0,0,.2,0,.2ZM542.8,255.4c0-1.5.9-5.7,1.4-7.4.5-1.7,2.6-6.7,3.4-8.1-1.5-.3-6.2-1.3-7.9-1.8-1.7-.5-6.1-2.3-7.5-2.9-.2,1.6-1,6.3-1.5,8-1.1,3.7-2.2,5.7-2.9,7-.1.2-.2.4-.3.5,1.5.3,6.2,1.1,7.9,1.7,1.7.5,6,2.4,7.5,3ZM532.2,235.1h0s0,0,0,0Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M549.4,221.5c0-.1.3-.2.4,0,.9,1,4.2,4.7,5.6,5.9,1.3,1.2,5.3,4.2,6.4,5,.1.1.1.3,0,.4-1.2.8-5.3,4.5-6.5,5.9-1.2,1.3-3.8,4.9-4.4,6.1,0,.2-.3.2-.4,0-.9-1.1-4.2-4.8-5.5-6-1.3-1.2-5.4-4.1-6.5-4.9-.1-.1-.1-.3,0-.4,1.1-.8,3.1-2,6.2-5.4,1.2-1.4,4.1-5.5,4.8-6.6Z" fill="#f4f2ef" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M562.2,232.6h0c0,.2,0,.4-.2.5-1.2.8-5.3,4.5-6.5,5.8-1.2,1.3-3.8,4.9-4.4,6,0,.2-.3.3-.5.3-.2,0-.4,0-.5-.2-.9-1.1-4.1-4.8-5.5-6-1.3-1.2-5.3-4.1-6.5-4.9-.2-.1-.2-.3-.2-.5,0-.2,0-.4.2-.5.2-.1.4-.3.6-.4,1.2-.8,3-2.1,5.5-4.9,1.2-1.3,4.1-5.4,4.8-6.6h0c0-.2.3-.3.4-.3.2,0,.4,0,.5.2,1,1.1,4.2,4.7,5.6,5.9,1.3,1.2,5.2,4.1,6.4,5,.1.1.2.3.2.5ZM550.6,244.6c.7-1.3,3.2-4.8,4.4-6.1,1.2-1.3,5.2-4.9,6.5-5.9-1.3-.9-5.1-3.8-6.4-5-1.3-1.2-4.5-4.7-5.6-5.9-.8,1.3-3.6,5.3-4.8,6.6-2.6,2.9-4.4,4.2-5.6,5-.2.1-.4.2-.5.4,1.3.9,5.1,3.7,6.5,4.9,1.3,1.2,4.4,4.8,5.5,6Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                </g>
                <path d="M612.1,216.7h34.8c5.7,0,10.2,4.6,10.2,10.2v24.6c0,5.7-4.6,10.2-10.2,10.2h-24.6c-5.7,0-10.2-4.6-10.2-10.2" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                <path d="M611.7,216.4h42.7c1.6,0,3,1.3,3,3v39.8c0,1.6-1.3,3-3,3h-39.8c-1.6,0-3-1.3-3-3" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                <path d="M612.4,259.1c0,1.3,1,2.3,2.3,2.3h39.8c1.3,0,2.3-1,2.3-2.3v-39.8c0-1.3-1-2.3-2.3-2.3h-42.1" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                <path d="M612.1,216.7h39.5c3.1,0,5.6,2.5,5.6,5.6v1.2c0,3.1-2.5,5.6-5.6,5.6h-33.9c-3.1,0-5.6-2.5-5.6-5.6" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                <path d="M611.7,216.4h42.7c1.6,0,3,1.3,3,3v7.1c0,1.6-1.3,3-3,3h-39.8c-1.6,0-3-1.3-3-3" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                <path d="M612.4,226.4c0,1.3,1,2.3,2.3,2.3h39.8c1.3,0,2.3-1,2.3-2.3v-7.1c0-1.3-1-2.3-2.3-2.3h-42.1" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                <path d="M612.1,217.1c0-.9.8-1.7,1.7-1.7h41.6c.9,0,1.7.8,1.7,1.7v.4c0,.9-.8,1.7-1.7,1.7h-41.6c-.9,0-1.7-.8-1.7-1.7" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                <path d="M613.3,215.1h42.6c.8,0,1.5.7,1.5,1.5v1.4c0,.8-.7,1.5-1.5,1.5h-42.6" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                <path d="M613.3,218.8h42.6c.5,0,.9-.4.9-.9v-1.4c0-.5-.4-.9-.9-.9h-42.6" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                <path d="M612.2,216c0-1,.8-1.9,1.9-1.9h41.3c1,0,1.9.8,1.9,1.9v42.6c0,1-.8,1.9-1.9,1.9s-1.9-.8-1.9-1.9v-40.7h-39.4c-1,0-1.9-.8-1.9-1.9" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                <path d="M611.9,216c0-1.2,1-2.2,2.2-2.2h41.3c1.2,0,2.2,1,2.2,2.2v42.6c0,1.2-1,2.2-2.2,2.2s-2.2-1-2.2-2.2v-40.3h-39.1c-1.2,0-2.2-1-2.2-2.2" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                <path d="M612.5,216c0,.9.7,1.6,1.6,1.6h39.7v41c0,.9.7,1.6,1.6,1.6s1.6-.7,1.6-1.6v-42.6c0-.9-.7-1.6-1.6-1.6h-41.3c-.9,0-1.6.7-1.6,1.6" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
              </g>
              <g id="TV_stand" filter="url(#drop-shadow-3)">
                <g>
                  <rect x="708" y="332.3" width="37.1" height="28.6" transform="translate(380 1073.1) rotate(-90)" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M741.1,327.8v37.6h-29.1v-37.6h29.1ZM740.5,364.8v-36.5h-28.1v36.5h28.1Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <rect x="708" y="245.2" width="37.1" height="28.6" transform="translate(467 986) rotate(-90)" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M741.1,240.7v37.6h-29.1v-37.6h29.1ZM740.5,277.8v-36.5h-28.1v36.5h28.1Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <rect x="701.6" y="288.7" width="49.9" height="28.6" transform="translate(423.5 1029.5) rotate(-90)" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M741.1,277.8v50.4h-29.1v-50.4h29.1ZM740.5,327.7v-49.3h-28.1v49.3h28.1Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M726.2,314.1v-22.1h.2c.7,0,1.2.5,1.2,1.2v19.7c0,.7-.5,1.2-1.2,1.2h-.2Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                      <path d="M727.9,293.1v19.7c0,.8-.7,1.5-1.5,1.5h-.5v-22.7h.5c.8,0,1.5.7,1.5,1.5ZM726.5,313.8c.5,0,.9-.4.9-1v-19.7c0-.5-.4-.9-.9-1v21.6Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    </g>
                    <g>
                      <path d="M724.2,317.9h.3c.9,0,1.6-.7,1.6-1.6v-26.5c0-.9-.7-1.6-1.6-1.6h-.3v29.7Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                      <path d="M726.4,289.8v26.5c0,1.1-.9,1.9-1.9,1.9h-.5v-30.3h.5c1.1,0,1.9.9,1.9,1.9ZM724.5,317.6c.8,0,1.4-.6,1.4-1.4v-26.5c0-.8-.6-1.4-1.4-1.4v29.2Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    </g>
                    <g>
                      <path d="M724.2,317.9h.3c.9,0,1.6-.7,1.6-1.6v-26.5c0-.9-.7-1.6-1.6-1.6h-.3v29.7Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                      <path d="M726.4,289.8v26.5c0,1.1-.9,1.9-1.9,1.9h-.5v-30.3h.5c1.1,0,1.9.9,1.9,1.9ZM724.5,317.6c.8,0,1.4-.6,1.4-1.4v-26.5c0-.8-.6-1.4-1.4-1.4v29.2Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    </g>
                    <g>
                      <line x1="724.2" y1="317.9" x2="724.2" y2="288.1" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                      <rect x="723.9" y="288.1" width=".5" height="29.7" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    </g>
                  </g>
                  <g>
                    <path d="M727.6,307.8v-8.8c1.8.7,3,2.4,3,4.4s-1.3,3.7-3,4.4Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M730.9,303.4c0,2.1-1.3,3.9-3.2,4.7h-.4c0,.1,0-9.5,0-9.5h.4c1.9.9,3.2,2.7,3.2,4.8ZM727.9,307.4c1.5-.7,2.5-2.3,2.5-4s-1-3.3-2.5-4v8Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                </g>
                <g>
                  <g>
                    <polygon points="713.8 241 713.8 278 712.2 278 712.2 259.6 712.2 241 713.8 241" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M714.1,240.7v37.6h-2.1v-37.6h2.1ZM713.5,277.8v-36.5h-1v36.5h1Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <line x1="713.7" y1="259.6" x2="712.2" y2="259.6" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <rect x="712.2" y="259.4" width="1.4" height=".5" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                </g>
                <g>
                  <g>
                    <polygon points="713.8 328 713.8 365.1 712.2 365.1 712.2 346.7 712.2 328 713.8 328" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M714.1,327.8v37.6h-2.1v-37.6h2.1ZM713.5,364.8v-36.5h-1v36.5h1Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <line x1="713.7" y1="346.7" x2="712.2" y2="346.7" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <rect x="712.2" y="346.4" width="1.4" height=".5" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                </g>
              </g>
              <g id="sink">
                <path d="M842.3,469.2l2.9-.5c-2.7-.8-5.5-1.2-8.4-1.3v1.3c1.8,0,3.6.2,5.4.5h.1c1,1.4,1.5,3,1.5,4.7s-.5,3.2-1.6,4.7c-.9,1.1-2,1.9-3.2,2.4-1.2.4-2.5.6-3.8.4-1.3-.1-2.5-.6-3.6-1.5-1.1-.9-1.9-2-2.4-3.2-.4-1.2-.6-2.5-.4-3.8.1-1.3.6-2.6,1.5-3.7l-3-.5c-.6,1.3-.9,2.6-1,4.1,0,2.8,1.1,5.1,3,7,1.8,1.9,4.2,2.9,7,3,2.7,0,5-1.1,6.9-3,1.9-1.8,2.9-4.2,3-7,0-1.5-.4-2.9-1-4.1-.5-1-1.2-1.9-2-2.9-1.8-1.8-4.1-2.8-6.9-2.9-2.8,0-5.1,1-7,2.9-.8.9-1.5,1.9-2,2.9,2.7-.8,5.5-1.2,8.4-1.3v-1.4c-.2-.2-.3-.4-.3-.5h0c0-.4.1-.6.3-.7.2-.1.4-.2.6-.2s.4.1.6.3c.1.1.2.3.2.5h0c0,.3-.1.5-.3.6v1.4" fill="none" stroke="#425563" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <path d="M838.6,466.2c-.2-.4-.5-.5-1-.3-.4.2-.6.5-.4,1,.3.4.6.6,1.1.4.1,0,.2-.2.3-.4" fill="none" stroke="#425563" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <path d="M847.3,472.8c0-2-.6-3.9-1.5-5.5-1-1.7-2.3-3-4-4-1.6-.9-3.5-1.4-5.5-1.5-2.1,0-4,.6-5.6,1.5-1.7,1-3,2.3-4,4-.9,1.6-1.4,3.5-1.5,5.5,0,2,.6,3.9,1.5,5.6,1,1.7,2.3,3,4,3.9,1.6,1,3.5,1.5,5.6,1.6,2,0,3.9-.6,5.5-1.6,1.7-.9,3-2.2,4-3.9.9-1.7,1.4-3.6,1.5-5.6Z" fill="none" stroke="#425563" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <path d="M833.9,466.2h-1.4c-.1,0-.2.2-.3.3,0,.2.2.3.3.3h2c.2,0,.3-.1.3-.3s-.1-.2-.3-.3h-.6c0-.1.2-.2.3-.3.4-.1.7,0,1,.4.1.4,0,.7-.3,1-.4.1-.8,0-1.1-.4" fill="none" stroke="#425563" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <path d="M838,466.9h2c.2,0,.3-.1.3-.3s-.1-.2-.3-.3h-2c-.1,0-.2.2-.3.3,0,.2.2.3.3.3Z" fill="none" stroke="#425563" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <path d="M837.1,472.8c0-.5-.4-.8-.8-.8-.6,0-.9.4-1,.8,0,.6.4.9,1,1,.5,0,.8-.4.8-1Z" fill="none" stroke="#425563" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <path d="M835.7,468.7c-1.8,0-3.6.2-5.4.5" fill="none" stroke="#425563" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <polyline points="835.7 467.4 835.7 468.7 835.7 471.5 836 471.7 836.5 471.7 836.8 471.5 836.8 468.7" fill="none" stroke="#425563" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
              </g>
              <g id="toilet">
                <path d="M899.2,472l.3-7.1c0-.5-.1-.9-.4-1.3s-.6-.6-1.1-.7h-18.9c-.4.1-.8.4-1.1.7s-.4.8-.4,1.3l.4,7.1h21.1c-.1.4-.4.7-.6,1-.3.3-.7.4-1.2.4h-4.4l.6,1.8c.3,1.1.7,2,1.4,2.7.3.4.5.8.7,1.3,1.3,2.3,1.9,4.6,1.8,7,0,2.4-.7,4.6-1.9,6.7-1.2,2-2.9,3.7-5.1,5-1.3.5-2.6.5-3.9.1-.4-.3-.8-.6-1.2-1-2.1-1.5-3.6-3.3-4.5-5.5-1-2.2-1.4-4.5-1.2-6.9.1-2.4,1-4.6,2.4-6.7.6-.8,1.1-1.7,1.3-2.7l.7-1.8h-4.4c-.5,0-.9-.1-1.2-.4-.3-.2-.5-.5-.5-1" fill="#dde7ed" stroke="#425563" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <path d="M887.3,496.4c.9.4,1.8.4,2.6,0,2-1.1,3.5-2.6,4.5-4.4,1.1-1.8,1.7-3.8,1.7-5.9,0-2.1-.5-4.2-1.6-6.1-.6-1.2-1.5-2.3-2.5-3.2-.2-.1-.4-.2-.5-.2h-5.7c-.2,0-.4,0-.6.2-1.7,1.5-2.9,3.2-3.5,5.3-.7,2-.8,4-.4,6.1.4,2,1.3,3.9,2.7,5.7,1,1,2.1,1.8,3.3,2.5Z" fill="none" stroke="#425563" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <line x1="884.2" y1="473.4" x2="893" y2="473.4" fill="none" stroke="#425563" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
              </g>
              <g id="tub">
                <path d="M904.5,534.4c-.3-.5-.7-.8-1.2-.8h-47.8c-.5,0-.9.3-1.2.8l23.9,16.4c0,0,.1-.2.2-.3.3-.4.6-.5,1-.5s.7.2,1,.5c.1.1.2.3.2.4l23.9-16.6c.4.4.6,1,.6,1.6v31.4c0,.7-.2,1.3-.6,1.7-.3.4-.7.7-1.2.7h-47.8c-.5,0-.9-.2-1.2-.7-.4-.4-.6-1-.6-1.7v-15s-1.1-.7-1.1-.7l1.1-.5v-15.1c0-.7.2-1.2.6-1.6" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <polyline points="853.7 552.4 857 554.1 857 549.4 853.7 551.2" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <path d="M878.2,550.9c-.1.3-.2.6-.2.9s0,.7.2.9l.2.4c.3.4.6.5,1,.5.4,0,.7-.2,1-.5.1-.1.2-.3.2-.4,0-.2,0-.5,0-.9s0-.5,0-.8" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <line x1="880.6" y1="552.6" x2="904.5" y2="569.2" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <line x1="878.2" y1="552.6" x2="854.2" y2="569.2" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
                <line x1="852.5" y1="528.9" x2="906.4" y2="528.9" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".3"/>
              </g>
              <g id="Bedroom_2" filter="url(#drop-shadow-4)">
                <g>
                  <path d="M796.8,214.2h61.1c2.3,0,4.2,1.9,4.2,4.2v81.8c0,.4-.4.8-.8.8h-67.7c-.6,0-1-.5-1-1v-81.5c0-2.3,1.9-4.2,4.2-4.2Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M861.3,301.1h-67.6c-.8,0-1.4-.5-1.4-1.1v-82.4c0-2,2.2-3.7,4.8-3.7h60.4c2.7,0,4.8,1.6,4.8,3.7v82.6c0,.5-.5.9-1.1.9ZM797.2,214.4c-2.4,0-4.3,1.5-4.3,3.2v82.4c0,.4.4.6.9.6h67.6c.3,0,.6-.2.6-.4v-82.6c0-1.8-1.9-3.2-4.3-3.2h-60.4Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <rect x="790.4" y="210.5" width="73.7" height="7.7" rx="2.6" ry="2.6" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M861.3,218.4h-68c-1.7,0-3.1-1.1-3.1-2.4v-3.4c0-1.3,1.4-2.4,3.1-2.4h68c1.7,0,3.1,1.1,3.1,2.4v3.4c0,1.3-1.4,2.4-3.1,2.4ZM793.2,210.7c-1.4,0-2.6.9-2.6,2v3.4c0,1.1,1.2,2,2.6,2h68c1.4,0,2.6-.9,2.6-2v-3.4c0-1.1-1.2-2-2.6-2h-68Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M791.8,254c-.4,3.9-1,27.4-.4,30.6.6,3.2-1.9,13.2.2,13.1,2.1-.1,29.6,1.2,35.9,1.8,6.3.5,20,1.8,24.2,2.4,4.2.7,11.3.4,11.7-.7.4-1.1.2-45.4-.6-48-.8-2.6-71.1.8-71.1.8Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M857.1,302.4c-1.9,0-3.9-.1-5.4-.4-4.7-.7-21-2.1-24.2-2.4-6.3-.5-33.8-1.9-35.9-1.8-.2,0-.4,0-.6-.2-.8-.6-.6-3.1-.2-7.1.3-2.3.5-4.7.3-6-.6-3.3,0-26.7.4-30.6v-.2s.3,0,.3,0c.2,0,17.8-.8,35.3-1.4,35.6-1.1,36,.2,36.1.7.6,2,1.1,46.5.6,48.1-.3.8-3.4,1.2-6.6,1.2ZM792.1,297.4c4.2,0,29.2,1.2,35.5,1.8,3.2.3,19.5,1.7,24.2,2.4,4.6.7,11.1.3,11.4-.5.2-.5.2-11.3.1-23.4,0-11-.3-23.2-.7-24.5-.1-.3-3.1-1.4-35.7-.4-16.3.5-32.7,1.2-34.9,1.3-.4,4.4-.9,27.2-.4,30.4.2,1.3,0,3.7-.3,6.1-.3,2.9-.7,6.2,0,6.8,0,0,.1,0,.2,0,.1,0,.3,0,.5,0Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M864.1,254.8c-.6.5-14.4-1-25.2-.9-22.2.1-46.7.7-48.6.5-1.4-.2-1.3-3.6-1.4-6.9,0-3-.3-5.9.8-6.7,2.4-1.8,70.9-1.8,73.8.6,1.3,1,1.1,3.7,1.2,6.2.2,3.2.3,6.4-.7,7.3Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M863.1,255.1c-1.1,0-3.1-.1-6.6-.3-5-.3-11.7-.7-17.6-.7-10.3,0-21.2.2-29.9.3-10.2.2-17.7.3-18.7.1-1.5-.2-1.5-3-1.6-6.2v-.8c0-.4,0-.9,0-1.3,0-2.7-.1-4.8.9-5.5,1.7-1.3,32.1-1.6,51.6-1.1,9.6.2,21.3.7,22.5,1.7,1.1.9,1.2,3,1.3,5.1,0,.4,0,.8,0,1.2.2,3.3.3,6.5-.8,7.4h0c-.1.1-.5.2-1.2.2ZM839.5,253.7c5.7,0,12.2.4,17,.7,3.6.2,6.9.4,7.4.3.9-.8.7-4.1.6-7.1,0-.4,0-.8,0-1.2,0-2.1-.1-4-1.1-4.9-.3-.3-2.9-1.1-22.1-1.6-22.6-.5-49.9,0-51.2,1-.9.7-.8,2.9-.8,5.2,0,.4,0,.9,0,1.3v.8c0,2.5,0,5.7,1.2,5.8,1,.1,8.7,0,18.5-.1,8.7-.1,19.6-.3,30-.3.2,0,.4,0,.6,0Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M802.6,221.5c-2.2,3.1-.2,12.9,0,14.4.7,6.6,48.4,3.1,50,1.1,1.3-1.7,1.5-16.2-1.3-16.8-1.4-.3-13.7-1.1-25.2-1-11.7.1-22.6,1.1-23.5,2.3Z" fill="#f4f2ef" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M822.7,240c-5.4,0-10.5-.3-14.3-.9-3.9-.7-5.9-1.7-6.1-3.1,0-.2,0-.7-.2-1.2-.5-3.2-1.7-10.7.2-13.3,1-1.5,13-2.4,23.7-2.5,11.4-.1,23.7.7,25.2,1,.5.1.9.5,1.2,1.1,1.8,3.4,1.5,14.5.3,16-.9,1.2-16.5,2.9-30.1,2.9ZM828.3,219.4c-.8,0-1.5,0-2.3,0-13,.1-22.5,1.3-23.2,2.2h0c-1.8,2.6-.6,9.9-.1,13.1,0,.6.2,1,.2,1.2.1,1.2,2,2.1,5.7,2.8,13.7,2.4,42.8-.5,43.8-1.8,1.1-1.5,1.4-12.3-.3-15.7-.3-.6-.6-.8-.9-.9-1.4-.3-12.1-1-22.8-1Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
              </g>
              <g id="Desk" filter="url(#drop-shadow-5)">
                <g>
                  <g>
                    <polygon points="312.2 669 318.8 674.7 320 673.7 313.4 667.9 312.2 669" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M318.8,675.2l-7.1-6.2,1.7-1.5,7.1,6.2-1.7,1.5ZM312.7,669l6.1,5.3.7-.6-6.1-5.3-.7.6Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <polygon points="295.8 669 289.2 674.7 288 673.7 294.6 667.9 295.8 669" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M289.2,675.2l-1.7-1.5,7.1-6.2,1.7,1.5-7.1,6.2ZM288.5,673.7l.7.6,6.1-5.3-.7-.6-6.1,5.3Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <g>
                      <path d="M297.1,660.9h13.9c3.5,0,6.3,2.8,6.3,6.3v7.3c0,3.5-2.8,6.3-6.3,6.3h-13.9c-3.5,0-6.3-2.8-6.3-6.3v-7.3c0-3.5,2.8-6.3,6.3-6.3Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                      <path d="M315.1,681.1h-22.1c-1.4,0-2.5-1-2.5-2.2v-16.1c0-1.2,1.1-2.2,2.5-2.2h22.1c1.4,0,2.5,1,2.5,2.2v16.1c0,1.2-1.1,2.2-2.5,2.2ZM293,661.2c-1,0-1.8.7-1.8,1.6v16.1c0,.9.8,1.6,1.8,1.6h22.1c1,0,1.8-.7,1.8-1.6v-16.1c0-.9-.8-1.6-1.8-1.6h-22.1Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    </g>
                    <g>
                      <path d="M316.7,648.6h-25.4c-3,0-5.2,2.6-4.2,5.1l2.5,6.2c.5,1.3,1.9,2.1,3.4,2.1h22.1c1.5,0,2.9-.8,3.4-2.1l2.5-6.2c1-2.5-1.1-5.1-4.2-5.1Z" fill="#e2d0b5" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                      <path d="M315.1,662.3h-22.1c-1.7,0-3.2-.9-3.7-2.3l-2.5-6.2c-.5-1.3-.3-2.7.6-3.8.9-1.1,2.3-1.7,3.9-1.7h25.4c1.6,0,3,.6,3.9,1.7s1.1,2.5.6,3.8l-2.5,6.2c-.5,1.4-2,2.3-3.7,2.3ZM291.3,648.9c-1.3,0-2.5.5-3.3,1.5-.8,1-1,2.1-.5,3.2l2.5,6.2c.5,1.1,1.7,1.9,3,1.9h22.1c1.4,0,2.6-.8,3-1.9l2.5-6.2c.4-1.1.2-2.3-.5-3.2-.8-1-2-1.5-3.3-1.5h-25.4Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    </g>
                    <g>
                      <rect x="285.9" y="658.8" width="3.5" height="16.6" rx="1.5" ry="1.5" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                      <path d="M288.5,675.7h-1.7c-.7,0-1.3-.5-1.3-1.1v-15c0-.6.6-1.1,1.3-1.1h1.7c.7,0,1.3.5,1.3,1.1v15c0,.6-.6,1.1-1.3,1.1ZM286.9,659.1c-.3,0-.6.2-.6.5v15c0,.3.3.5.6.5h1.7c.3,0,.6-.2.6-.5v-15c0-.3-.3-.5-.6-.5h-1.7Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    </g>
                    <g>
                      <rect x="318.6" y="658.8" width="3.5" height="16.6" rx="1.5" ry="1.5" transform="translate(640.7 1334.2) rotate(180)" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                      <path d="M321.2,675.7h-1.7c-.7,0-1.3-.5-1.3-1.1v-15c0-.6.6-1.1,1.3-1.1h1.7c.7,0,1.3.5,1.3,1.1v15c0,.6-.6,1.1-1.3,1.1ZM319.5,659.1c-.3,0-.6.2-.6.5v15c0,.3.3.5.6.5h1.7c.3,0,.6-.2.6-.5v-15c0-.3-.3-.5-.6-.5h-1.7Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    </g>
                  </g>
                </g>
                <g>
                  <path d="M346,647.6v15.2c0,8-7.4,14.4-16.5,14.4h-62.2c-1.7,0-3.1,1.2-3.1,2.7v30.8c0,1.5,1.4,2.7,3.1,2.7h103.1c1.7,0,3.1-1.2,3.1-2.7v-63.1c0-1.5-1.4-2.7-3.1-2.7h-21.3c-1.7,0-3.1,1.2-3.1,2.7Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M370.4,713.6h-103.1c-1.9,0-3.4-1.3-3.4-3v-30.8c0-1.6,1.5-3,3.4-3h62.2c8.9,0,16.2-6.3,16.2-14.1v-15.2c0-1.6,1.5-3,3.4-3h21.3c1.9,0,3.4,1.3,3.4,3v63.1c0,1.6-1.5,3-3.4,3ZM267.3,677.5c-1.5,0-2.7,1.1-2.7,2.4v30.8c0,1.3,1.2,2.4,2.7,2.4h103.1c1.5,0,2.7-1.1,2.7-2.4v-63.1c0-1.3-1.2-2.4-2.7-2.4h-21.3c-1.5,0-2.7,1.1-2.7,2.4v15.2c0,8.1-7.6,14.7-16.9,14.7h-62.2Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <path d="M373.5,709.9h-109.3c-.2,0-.3-.1-.3-.3s.2-.3.3-.3h109.3c.2,0,.3.1.3.3s-.2.3-.3.3Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                <g>
                  <g>
                    <path d="M320.5,699.2c0-1.5-2.1-2.6-4.8-2.6s-4.8,1.2-4.8,2.6,2.1,2.6,4.8,2.6,4.8-1.2,4.8-2.6Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M315.7,702c-2.7,0-4.9-1.2-4.9-2.8s2.2-2.8,4.9-2.8,4.9,1.3,4.9,2.8-2.2,2.8-4.9,2.8ZM315.7,696.7c-2.5,0-4.6,1.1-4.6,2.5s2.1,2.5,4.6,2.5,4.6-1.1,4.6-2.5-2.1-2.5-4.6-2.5Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <path d="M340.7,703.8l-3.3-4.8c-.2-.3-.6-.5-1-.5h-41.4c-.4,0-.8.2-1,.5l-3.3,4.8c-.3.4,0,.9.6.9h48.7c.5,0,.9-.5.6-.9Z" fill="#f4f2ef" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M340.1,704.8h-48.7c-.3,0-.6-.1-.8-.4-.2-.2-.2-.5,0-.8l3.3-4.8c.2-.3.7-.6,1.1-.6h41.4c.5,0,.9.2,1.1.6l3.3,4.8c.2.2.2.5,0,.8-.2.2-.4.4-.8.4ZM295.1,698.7c-.3,0-.7.2-.8.4l-3.3,4.8c0,.1,0,.3,0,.5,0,.1.3.2.5.2h48.7c.2,0,.4,0,.5-.2,0-.1,0-.3,0-.5h0s-3.3-4.8-3.3-4.8c-.2-.3-.5-.4-.8-.4h-41.4Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                </g>
                <g>
                  <rect x="300.6" y="682.6" width="30.3" height="11.8" rx="5.2" ry="5.2" fill="#f4f2ef" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M329.1,694.6h-26.7c-1.1,0-2-.8-2-1.7v-8.7c0-1,.9-1.7,2-1.7h26.7c1.1,0,2,.8,2,1.7v8.7c0,1-.9,1.7-2,1.7ZM302.4,682.8c-.9,0-1.6.6-1.6,1.4v8.7c0,.8.7,1.4,1.6,1.4h26.7c.9,0,1.6-.6,1.6-1.4v-8.7c0-.8-.7-1.4-1.6-1.4h-26.7Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <g>
                  <path d="M293.3,685h1c1.8,0,3.3,1.5,3.3,3.3v2.2c0,1.4-1.1,2.5-2.5,2.5h-2.5c-1.4,0-2.5-1.1-2.5-2.5v-2.2c0-1.8,1.5-3.3,3.3-3.3Z" fill="#f4f2ef" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  <path d="M294.7,693.2h-1.8c-1.7,0-3.1-1.2-3.1-2.7v-2.2c0-1.9,1.8-3.5,4-3.5s4,1.6,4,3.5v2.2c0,1.5-1.4,2.7-3.1,2.7ZM293.8,685.1c-2,0-3.6,1.4-3.6,3.2v2.2c0,1.3,1.2,2.4,2.7,2.4h1.8c1.5,0,2.7-1.1,2.7-2.4v-2.2c0-1.7-1.6-3.2-3.6-3.2Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                </g>
                <path d="M293.8,693.2c0,0-.2,0-.2-.2v-8c0,0,0-.2.2-.2s.2,0,.2.2v8c0,0,0,.2-.2.2Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                <g>
                  <g>
                    <rect x="342.3" y="681.8" width="14.3" height="17.5" fill="#f4f2ef" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M356.8,699.4h-14.7v-17.8h14.7v17.8ZM342.5,699.1h14v-17.2h-14v17.2Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                  <g>
                    <polygon points="364.5 695.9 351 700.1 344.2 683.7 357.7 679.4 364.5 695.9" fill="#f4f2ef" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                    <path d="M350.9,700.3l-6.9-16.7,13.8-4.3,6.9,16.7-13.8,4.3ZM344.4,683.8l6.7,16.2,13.2-4.1-6.7-16.2-13.2,4.1Z" fill="#efe5d8" stroke="#ccb596" strokeMiterlimit="10" strokeWidth=".2"/>
                  </g>
                </g>
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
                <text transform="matrix(1 0 0 1 712.8577 457.6905)" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="12px">Up</text>
                <text transform="matrix(1 0 0 1 418.7501 228.0319)" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="12px">Recreation Room</text>
                <text transform="matrix(1 0 0 1 380.4433 591.6241)" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="12px">Flex Room</text>
                <text transform="matrix(1 0 0 1 500.7921 679.6296)" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="12px">Mechanical/Storage</text>
                <text transform="matrix(1 0 0 1 756.1921 885.1091)" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="12px">Unexcavated</text>
                <text transform="matrix(1 0 0 1 343.953 1063.6948)" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="12px">Unexcavated</text>
                <text transform="matrix(1 0 0 1 758.1252 338.7141)" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="12px">Bedroom 4</text>
                <text transform="matrix(1 0 0 1 817.8455 422.0201)"><tspan x="0" y="0" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="12px">Walk-in</tspan><tspan x="0" y="14.4" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="12px">Closet</tspan></text>
                <text transform="matrix(1 0 0 1 754.8792 600.0001)" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="12px">Storage</text>
                <text transform="matrix(1 0 0 1 846.2822 520.353)" fill="#425563" fontFamily="Fredoka, sans-serif" fontSize="8.5539px">basement bath</text>
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
