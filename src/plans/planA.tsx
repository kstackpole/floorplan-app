import { useEffect, useRef } from "react";
import type { SVGProps } from "../types/floorplan";
import useFPState from "../store/useFPState";




export function MudroomHotspot() {
  const { setVideo } = useFPState();

  const media = {
    id: "mudroom",
    title: "Tame dirt and clutter before you enter",
    text: "Built-in bench, hooks, and cubbies keep daily items organized.",
    src: "https://youtu.be/dQw4w9WgXcQ?si=RzOHn5zxEV2WCi3c", // or MP4/Vimeo
    thumb: "/assets/thumbs/mudroom.jpg",
  };

  return (
    <g
      role="button"
      tabIndex={0}
      onClick={() => setVideo(media)}
      onKeyDown={(e) => e.key === "Enter" && setVideo(media)}
      className="cursor-pointer"
    >
      <circle cx={610} cy={570} r={20} fill="#af272f" opacity={0.9} />
      <text x={610} y={574} textAnchor="middle" fill="white" fontSize={12}>1</text>
    </g>
  );
}
export function GreatRoomHotspot() {
  const { setVideo } = useFPState();

  const media = {
    id: "greatroom", 
    title: "Great Room Gathering Space",
    text: "Spacious great room with optional fireplace and large windows for natural light.",
    src: "https://youtu.be/dQw4w9WgXcQ?si=RzOHn5zxEV2WCi3c",
    thumb: "/assets/thumbs/greatroom.jpg",
  };

  return (
    <g
      role="button"
      tabIndex={0}
      onClick={() => setVideo(media)}
      onKeyDown={(e) => e.key === "Enter" && setVideo(media)}
      className="cursor-pointer"
    >
      <circle cx={660} cy={450} r={20} fill="#af272f" opacity={0.9} />
      <text x={660} y={454} textAnchor="middle" fill="white" fontSize={12}>
        2
      </text>
    </g>
  );
}



export function PlanASVG({
  active,
  panZoom,
  mirror = false,
  svgRef,                 // ← accept the ref from FloorPlan
}: SVGProps) {
  const { onWheel, onPointerDown, onPointerMove, onPointerUp, scale, tx, ty } = panZoom;

  const VBW = 1200;                       // must match your viewBox width
  const worldRef = useRef<SVGGElement | null>(null);

  // Re-flip text glyphs in-place when mirrored so they read normally
  useEffect(() => {
    const g = worldRef.current;
    if (!g) return;

    const texts = g.querySelectorAll<SVGGraphicsElement>("text");
    texts.forEach((t) => {
      // Save original transform once
      if (!t.hasAttribute("data-orig-transform")) {
        t.setAttribute("data-orig-transform", t.getAttribute("transform") ?? "");
      }
      const orig = t.getAttribute("data-orig-transform") ?? "";

      if (!mirror) {
        // Restore original when mirror is off
        t.setAttribute("transform", orig);
        return;
      }

      // Flip glyphs around their own center so position stays put
      const b = t.getBBox();
      const cx = b.x + b.width / 2;
      t.setAttribute("transform", `${orig} translate(${cx},0) scale(-1,1) translate(${-cx},0)`);
    });
  }, [mirror]);

  return (
    <svg
      ref={svgRef}                        // ← attach the ref here
      className="h-full w-full touch-none select-none"
      viewBox="0 0 1200 1200"
      onWheel={onWheel}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      <defs>
        <pattern id="diag" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
          <rect width="8" height="8" fill="white" />
          <path d="M 0 0 L 0 8" stroke="#e5e7eb" strokeWidth="2" />
        </pattern>
      </defs>

      {/* keep background outside world transform */}
      <rect x={0} y={0} width={1200} height={1200} fill="url(#diag)" />

      {/* WORLD: mirror first, then pan/zoom */}
      <g
        ref={worldRef}
        transform={`${mirror ? `translate(${VBW},0) scale(-1,1) ` : ""}translate(${tx},${ty}) scale(${scale})`}
      >
                {/* FP-LINES */}
                <g id="v.1">
                    <g id="XMLID_00000084499648169429763300000010449682447304860293_">
                        <g>
                            <rect x="852.154" y="348.192" width="3.717" height="4.059"></rect>
                            <polygon points="855.87,309.663 855.87,323.856 852.154,323.856 852.154,313.38 825.451,313.38 825.451,309.663 			"></polygon>
                            <rect x="797.065" y="309.663" width="4.059" height="3.717"></rect>
                            <polygon points="772.737,309.663 772.737,313.38 746.044,313.38 746.044,325.89 742.318,325.89 742.318,309.663 			"></polygon>
                            <polygon points="746.044,374.553 746.044,394.488 717.99,394.488 717.99,390.771 742.318,390.771 742.318,374.553 			"></polygon>
                            <rect x="689.604" y="390.771" width="4.059" height="3.717"></rect>
                            <rect x="645" y="390.771" width="4.05" height="3.717"></rect>
                            <rect x="521.313" y="309.663" width="4.05" height="3.717"></rect>
                            <polygon points="496.978,309.663 496.978,313.38 454.065,313.38 454.065,321.831 450.349,321.831 450.349,309.663 			"></polygon>
                            <rect x="450.349" y="338.058" width="3.717" height="64.881"></rect>
                            <polygon points="592.62,451.935 592.62,313.38 549.7,313.38 549.7,309.663 596.338,309.663 596.338,319.131 596.338,340.758 
                                596.338,390.771 620.664,390.771 620.664,394.488 596.338,394.488 596.338,503.982 592.62,503.982 592.62,454.302 
                                586.87,454.302 586.87,451.935 			"></polygon>
                            <polygon points="454.065,429.975 454.065,438.093 450.349,438.093 450.349,419.157 454.065,419.157 454.065,427.608 
                                496.645,427.608 496.645,429.975 			"></polygon>
                            <polygon points="526.38,493.506 526.38,488.097 540.916,488.097 557.133,488.097 557.133,429.975 540.916,429.975 
                                516.922,429.975 516.922,427.608 559.5,427.608 559.5,451.935 565.242,451.935 565.242,454.302 559.5,454.302 559.5,533.043 
                                592.62,533.043 592.62,528.984 596.338,528.984 596.338,533.043 631.312,533.043 631.312,536.76 628.773,536.76 628.773,559.062 
                                625.057,559.062 625.057,552.978 625.057,547.578 625.057,536.76 596.338,536.76 596.338,547.578 596.338,552.978 
                                596.338,565.488 593.971,565.488 593.971,544.869 593.971,536.76 549.024,536.76 528.747,536.76 528.747,544.617 
                                528.747,545.121 528.747,547.578 528.747,552.978 528.747,574.947 528.747,584.406 528.747,590.157 526.38,590.157 
                                526.38,541.512 526.38,525.285 515.562,525.285 510.837,525.285 510.837,522.918 526.38,522.918 526.38,512.433 528.747,512.433 
                                528.747,533.043 557.133,533.043 557.133,490.464 528.747,490.464 528.747,493.506 			"></polygon>
                            <polygon points="687.273,566.213 677.437,570.213 677.437,570.771 677.437,610.182 677.437,610.767 697.255,610.767 
                                697.506,610.767 698.812,610.767 699.063,610.767 701.773,610.767 701.773,643.545 704.815,643.545 704.815,645.912 
                                678.786,645.912 678.786,649.971 675.07,649.971 675.07,638.478 677.437,638.478 677.437,643.545 688.588,643.545 
                                691.044,643.545 691.549,643.545 699.406,643.545 699.406,613.134 691.549,613.134 691.044,613.134 688.588,613.134 
                                677.437,613.134 677.437,618.201 675.07,618.201 675.07,563.121 677.437,563.121 677.437,567.846 743.677,567.846 
                                743.677,535.41 677.437,535.41 677.437,541.494 675.07,541.494 675.07,536.76 672.541,536.76 672.541,533.043 746.044,533.043 
                                746.044,535.068 746.044,543.177 746.044,551.295 770.713,551.295 797.406,551.295 797.406,535.068 797.406,533.043 
                                803.823,533.043 803.823,535.41 799.773,535.41 799.773,553.653 756.852,553.653 746.044,553.653 746.044,590.832 
                                852.154,590.832 852.154,593.199 746.044,593.199 746.044,652.338 743.677,652.338 743.677,645.912 723.732,645.912 
                                723.732,643.545 726.099,643.545 742.318,643.545 742.318,594.549 742.318,570.213 699.063,570.213 698.812,570.213 
                                697.534,570.213 697.273,570.213 687.948,570.213 			"></polygon>
                            <polygon points="686.904,679.032 686.904,682.749 663.919,682.749 663.919,679.032 675.07,679.032 675.07,674.973 
                                678.786,674.973 678.786,679.032 			"></polygon>
                            <polygon points="701.773,731.412 701.773,723.303 709.881,723.303 709.881,725.67 704.14,725.67 704.14,729.045 709.881,729.045 
                                709.881,731.412 			"></polygon>
                            <rect x="704.14" y="725.67" width="5.742" height="3.375"></rect>
                            <rect x="628.773" y="725.67" width="5.751" height="3.375"></rect>
                            <polygon points="636.883,723.303 636.883,731.412 628.773,731.412 628.773,729.045 634.524,729.045 634.524,725.67 
                                628.773,725.67 628.773,723.303 			"></polygon>
                            <polygon points="454.065,525.285 454.065,590.157 515.562,590.157 526.38,590.157 528.747,590.157 549.024,590.157 
                                593.971,590.157 593.971,587.115 596.338,587.115 596.338,590.157 599.883,590.157 599.883,593.874 454.065,593.874 
                                454.065,629.019 454.065,792.576 473.326,792.576 474.676,792.576 474.676,796.293 450.349,796.293 450.349,629.019 
                                450.349,470.529 454.065,470.529 454.065,478.638 454.065,480.51 454.065,482.355 454.065,482.364 454.065,490.464 
                                454.065,522.909 454.065,522.918 479.742,522.918 481.102,522.918 482.452,522.918 490.56,522.918 490.56,525.285 
                                464.875,525.285 462.426,525.285 461.922,525.285 			"></polygon>
                            <polygon points="639.591,679.032 639.591,682.749 628.773,682.749 628.773,723.303 628.773,725.67 628.773,729.045 
                                628.773,731.412 628.773,735.462 628.773,796.293 604.446,796.293 604.446,792.576 605.797,792.576 625.057,792.576 
                                625.057,593.874 621.51,593.874 621.51,590.157 625.057,590.157 625.057,584.073 628.773,584.073 628.773,679.032 			"></polygon>
                            <polygon points="718.495,679.032 718.495,681.399 713.599,681.399 713.599,776.358 762.594,776.358 762.594,780.075 
                                709.881,780.075 709.881,735.462 709.881,731.412 709.881,729.045 709.881,725.67 709.881,723.303 709.881,682.749 
                                703.122,682.749 703.122,679.032 			"></polygon>
                            <polygon points="808.557,681.399 738.771,681.399 738.771,679.032 743.677,679.032 743.677,672.606 746.044,672.606 
                                746.044,679.032 828.834,679.032 828.834,681.399 821.734,681.399 819.286,681.399 818.781,681.399 810.924,681.399 
                                810.924,727.695 852.154,727.695 852.154,719.838 852.154,719.334 852.154,716.877 852.154,681.399 849.112,681.399 
                                849.112,679.032 852.154,679.032 852.154,670.923 855.87,670.923 855.87,780.075 803.148,780.075 803.148,776.358 
                                808.557,776.358 808.557,773.316 810.924,773.316 810.924,776.358 841.336,776.358 843.784,776.358 844.297,776.358 
                                852.154,776.358 852.154,730.062 810.924,730.062 810.924,737.919 810.924,738.423 810.924,740.871 810.924,753.039 
                                808.557,753.039 			"></polygon>
                            <polygon points="841.336,535.41 822.75,535.41 822.75,533.043 835.927,533.043 844.044,533.043 852.154,533.043 852.154,480.321 
                                852.154,460.044 852.154,430.983 852.154,376.578 855.87,376.578 855.87,646.587 852.154,646.587 852.154,593.199 
                                852.154,590.832 852.154,535.41 			"></polygon>
                        </g>
                        <g>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" points="770.713,543.177 
                                746.044,543.177 745.98,543.177 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" points="844.044,480.321 
                                844.044,533.043 844.044,533.097 			"></polyline>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="844.044" y1="460.044" x2="844.044" y2="430.983"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="803.49" y1="441.801" x2="787.948" y2="441.801"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="803.49" y1="458.019" x2="787.948" y2="458.019"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="787.948" y1="441.801" x2="787.948" y2="458.019"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="572.281" y1="557.739" x2="591.883" y2="557.739"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="591.883" y1="538.812" x2="572.281" y2="538.812"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" points="591.883,557.739 
                                591.883,544.869 591.883,542.187 591.883,541.512 591.883,538.812 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" points="551.661,538.812 
                                551.661,541.512 551.661,542.187 551.661,544.869 551.661,557.739 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" points="572.281,557.739 
                                572.281,544.869 572.281,542.187 572.281,541.512 572.281,538.812 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" points="571.263,557.739 
                                571.263,544.869 571.263,542.187 571.263,541.512 571.263,538.812 			"></polyline>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="551.661" y1="557.739" x2="571.263" y2="557.739"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="571.263" y1="538.812" x2="551.661" y2="538.812"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="571.263" y1="541.512" x2="551.661" y2="541.512"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="591.883" y1="541.512" x2="572.281" y2="541.512"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="571.263" y1="542.187" x2="551.661" y2="542.187"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="591.883" y1="542.187" x2="572.281" y2="542.187"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="567.888" y1="543.546" x2="555.045" y2="543.546"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" points="555.045,543.546 
                                555.045,544.869 555.045,554.355 			"></polyline>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="555.045" y1="554.355" x2="567.888" y2="554.355"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" points="567.888,554.355 
                                567.888,544.869 567.888,543.546 			"></polyline>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="842.685" y1="480.321" x2="842.685" y2="460.044"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" points="593.971,544.869 
                                591.883,544.869 572.281,544.869 571.263,544.869 567.888,544.869 555.045,544.869 551.661,544.869 549.024,544.869 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" points="770.713,535.068 
                                771.721,535.068 796.057,535.068 797.406,535.068 			"></polyline>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="510.837" y1="522.918" x2="490.56" y2="522.918"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="510.837" y1="525.285" x2="490.56" y2="525.285"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="628.773" y1="584.073" x2="628.773" y2="559.062"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="625.057" y1="584.073" x2="625.057" y2="559.062"></line>
                            <path fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" d="M822.75,535.41
                                c0,4.617-1.692,9.063-4.734,12.519c-0.261,0.297-0.531,0.585-0.81,0.864"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" d="M738.771,681.399
                                c0,4.977-1.827,9.774-5.13,13.473c-0.261,0.297-0.531,0.585-0.81,0.864"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" d="M746.044,652.338
                                c4.977,0,9.774,1.827,13.473,5.13c0.297,0.252,0.585,0.522,0.864,0.801"></path>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="691.549" y1="643.545" x2="691.549" y2="613.134"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="691.044" y1="613.134" x2="691.044" y2="643.545"></line>
                            <path fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" d="M675.07,638.478
                                c-4.977,0-9.774-1.827-13.473-5.13c-0.297-0.261-0.585-0.531-0.864-0.81"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" d="M675.07,563.121
                                c-5.337,0-10.467-1.971-14.427-5.526c-0.297-0.261-0.585-0.531-0.864-0.81"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" d="M723.732,643.545
                                c0-4.617-1.692-9.072-4.734-12.519c-0.261-0.297-0.531-0.585-0.81-0.864"></path>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="678.786" y1="674.973" x2="678.786" y2="649.971"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="675.07" y1="674.973" x2="675.07" y2="649.971"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="672.541" y1="533.043" x2="631.312" y2="533.043"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="672.541" y1="536.76" x2="631.312" y2="536.76"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="844.297" y1="776.358" x2="844.297" y2="737.919"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="844.297" y1="737.919" x2="810.924" y2="737.919"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="810.924" y1="738.423" x2="843.784" y2="738.423"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="843.784" y1="738.423" x2="843.784" y2="776.358"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="818.781" y1="681.399" x2="818.781" y2="719.838"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="818.781" y1="719.838" x2="852.154" y2="719.838"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="852.154" y1="719.334" x2="819.286" y2="719.334"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="819.286" y1="719.334" x2="819.286" y2="681.399"></line>
                            <path fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" d="M810.924,753.039
                                c4.977,0,9.765,1.827,13.473,5.13c0.297,0.261,0.585,0.531,0.864,0.81"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" d="M828.834,681.399
                                c0,4.977,1.827,9.774,5.13,13.473c0.261,0.297,0.531,0.585,0.81,0.864"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" d="M621.51,590.157
                                c0-11.556-9.054-20.988-20.448-21.591c-0.396-0.027-0.783-0.036-1.179-0.036"></path>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="549.024" y1="544.617" x2="528.747" y2="544.617"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="528.747" y1="545.121" x2="549.024" y2="545.121"></line>
                            <path fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" d="M528.747,512.433
                                c4.626,0,9.072-1.692,12.519-4.734c0.297-0.261,0.585-0.531,0.864-0.81"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" d="M481.102,502.65
                                c0.45,0,0.9,0.018,1.35,0.063c3.42,0.279,6.651,1.629,9.243,3.879c0.306,0.252,0.594,0.522,0.873,0.801"></path>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="461.922" y1="525.285" x2="461.922" y2="582.3"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" points="461.922,582.3 515.562,582.3 
                                518.523,582.3 			"></polyline>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="518.523" y1="582.3" x2="518.523" y2="541.512"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="518.019" y1="541.512" x2="518.019" y2="581.787"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" points="518.019,581.787 
                                515.562,581.787 462.426,581.787 			"></polyline>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="462.426" y1="581.787" x2="462.426" y2="525.285"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="516.922" y1="427.608" x2="496.645" y2="427.608"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="516.922" y1="429.975" x2="496.645" y2="429.975"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="596.338" y1="528.984" x2="596.338" y2="503.982"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="592.62" y1="528.984" x2="592.62" y2="503.982"></line>
                            <path fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" d="M565.242,451.935
                                c0-5.337,1.971-10.467,5.526-14.427c0.261-0.297,0.531-0.585,0.81-0.864"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" d="M593.971,565.488
                                c-5.346,0-10.476,1.971-14.436,5.526c-0.297,0.252-0.585,0.522-0.864,0.801"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" d="M663.919,679.032
                                c0-13.041-10.26-23.688-23.148-24.3c-0.387-0.027-0.783-0.036-1.179-0.036"></path>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="701.773" y1="731.412" x2="636.883" y2="731.412"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="701.773" y1="723.303" x2="636.883" y2="723.303"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" points="796.057,550.278 
                                796.057,535.068 796.057,531.18 796.057,530.676 796.057,529.326 			"></polyline>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="771.721" y1="550.278" x2="796.057" y2="550.278"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" points="771.721,550.278 
                                771.721,535.068 771.721,531.18 771.721,530.676 771.721,529.326 			"></polyline>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="771.721" y1="529.326" x2="796.057" y2="529.326"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="771.721" y1="530.676" x2="796.057" y2="530.676"></line>
                            
                                <line fill="none" stroke="#000000" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="771.721" y1="531.18" x2="796.057" y2="531.18"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="454.065" y1="490.464" x2="466.198" y2="505.8"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="467.611" y1="507.591" x2="479.742" y2="522.918"></line>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M467.611,507.591c0.27-0.207,0.441-0.531,0.441-0.9
                                c0-0.369-0.171-0.693-0.441-0.891c-0.189-0.162-0.441-0.252-0.702-0.252c-0.27,0-0.513,0.09-0.711,0.252
                                c-0.261,0.207-0.432,0.531-0.432,0.891c0,0.369,0.171,0.693,0.441,0.891c0.189,0.162,0.441,0.252,0.702,0.252
                                C467.169,507.834,467.422,507.744,467.611,507.591z"></path>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="454.065" y1="522.909" x2="466.198" y2="507.591"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="467.611" y1="505.8" x2="479.742" y2="490.482"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="454.065" y1="490.464" x2="479.742" y2="490.482"></line>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M475.35,614.151c0-0.567-0.45-1.017-1.008-1.017
                                c-0.567,0-1.017,0.45-1.017,1.017c0,0.558,0.45,1.008,1.017,1.008C474.901,615.159,475.35,614.709,475.35,614.151z"></path>
                            <circle fill="none" stroke="#000000" stroke-width="0.405" cx="464.199" cy="604.008" r="6.759"></circle>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="471.633" y1="611.442" x2="471.633" y2="596.574"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="471.633" y1="596.574" x2="456.766" y2="596.574"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="456.766" y1="596.574" x2="456.766" y2="611.442"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="456.766" y1="611.442" x2="471.633" y2="611.442"></line>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M735.459,633.069c0-0.333-0.27-0.603-0.603-0.603
                                s-0.603,0.27-0.603,0.603c0,0.333,0.27,0.612,0.603,0.612S735.459,633.402,735.459,633.069z"></path>
                            <ellipse fill="none" stroke="#000000" stroke-width="0.405" cx="733.722" cy="633.069" rx="3.852" ry="5.454"></ellipse>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M734.713,639.432c3.015,0,5.454-2.853,5.454-6.363
                                c0-3.51-2.439-6.354-5.454-6.354c-3.006,0-5.445,2.844-5.445,6.354C729.268,636.579,731.706,639.432,734.713,639.432z"></path>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="850.804" y1="460.044" x2="850.804" y2="480.321"></line>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M848.922,475.335c0-1.62-1.323-2.934-2.943-2.934
                                s-2.934,1.314-2.934,2.934c0,1.629,1.314,2.943,2.934,2.943S848.922,476.964,848.922,475.335z"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M848.922,464.94c0-1.62-1.323-2.943-2.943-2.943
                                s-2.934,1.323-2.934,2.943s1.314,2.934,2.934,2.934S848.922,466.56,848.922,464.94z"></path>
                            <circle fill="none" stroke="#000000" stroke-width="0.405" cx="839.229" cy="475.992" r="2.286"></circle>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="835.927" y1="460.044" x2="835.927" y2="480.321"></line>
                            <circle fill="none" stroke="#000000" stroke-width="0.405" cx="839.229" cy="464.58" r="2.286"></circle>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M803.49,458.019c0.45-5.4,0.45-10.818,0-16.218"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M804.003,458.019c0.063-0.36,0.117-0.711,0.162-1.071
                                c0.675-4.662,0.675-9.396,0-14.067c-0.045-0.36-0.099-0.72-0.162-1.08"></path>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="803.49" y1="458.019" x2="804.003" y2="458.019"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="803.49" y1="441.801" x2="804.003" y2="441.801"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="787.948" y1="459.036" x2="787.948" y2="481.338"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="802.815" y1="459.036" x2="802.815" y2="481.338"></line>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M791.151,472.626c0.081,2.07,0.252,4.14,0.513,6.201"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M791.151,467.811c-0.054,1.584-0.054,3.168,0,4.752"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M791.664,461.547c-0.261,2.061-0.432,4.131-0.513,6.201"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M801.159,478.827c0.27-2.106,0.441-4.212,0.504-6.327
                                c0.063-1.539,0.063-3.087,0-4.626c-0.063-2.115-0.234-4.221-0.504-6.327"></path>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="792.672" y1="471.051" x2="800.151" y2="471.051"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="792.672" y1="469.323" x2="800.151" y2="469.323"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="787.948" y1="459.036" x2="802.815" y2="459.036"></line>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M793.177,460.215c-0.765,0-1.413,0.567-1.512,1.332"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M801.159,461.547c-0.099-0.765-0.747-1.332-1.512-1.332"></path>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="793.177" y1="460.215" x2="799.648" y2="460.215"></line>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M801.672,472.626c0-0.045,0-0.081-0.009-0.126
                                c-0.027-0.783-0.666-1.413-1.458-1.449c-0.018,0-0.036,0-0.054,0"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M800.151,469.323c0.81,0,1.485-0.648,1.512-1.449
                                c0.009-0.027,0.009-0.045,0.009-0.072c0-0.018,0-0.036,0-0.054"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M792.672,471.051c-0.837,0-1.512,0.675-1.521,1.512v0.009
                                c0,0.018,0,0.036,0,0.054"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M791.151,467.748c0,0.018,0,0.036,0,0.063
                                c0,0.81,0.648,1.476,1.467,1.512c0.018,0,0.036,0,0.054,0"></path>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="787.948" y1="481.338" x2="802.815" y2="481.338"></line>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M791.664,478.827c0.099,0.765,0.747,1.332,1.512,1.332"></path>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="793.177" y1="480.159" x2="799.648" y2="480.159"></line>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M799.648,480.159c0.765,0,1.413-0.567,1.512-1.332"></path>
                            <circle fill="none" stroke="#000000" stroke-width="0.405" cx="734.857" cy="605.025" r="0.603"></circle>
                            <ellipse fill="none" stroke="#000000" stroke-width="0.405" cx="733.722" cy="605.025" rx="3.852" ry="5.454"></ellipse>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M734.713,598.662c3.015,0,5.454,2.853,5.454,6.363
                                c0,3.51-2.439,6.354-5.454,6.354c-3.006,0-5.445-2.844-5.445-6.354C729.268,601.515,731.706,598.662,734.713,598.662z"></path>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.977" y1="453.384" x2="461.977" y2="453.375"></line>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M462.039,455.58h0.009c0,0,0-0.009,0.009-0.009v-0.009
                                c0.009,0,0.009,0,0.009-0.009c0,0,0,0,0-0.009"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M462.057,453.06c0-0.009,0-0.009,0-0.009c-0.009,0-0.009,0-0.009,0"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M462.066,453.078v-0.009c0,0,0-0.009-0.009,0"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M461.931,455.535c0,0.009,0,0.018,0,0.018"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M461.914,455.571c0.018-0.009,0.018-0.009,0.018-0.018"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M461.905,455.535c0,0.018,0,0.027,0.009,0.036v0.009"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M461.931,453.069c0,0,0,0.009,0,0.018"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M461.914,453.042c-0.009,0.018-0.009,0.027-0.009,0.045"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M461.931,453.069c0-0.018-0.009-0.027-0.018-0.027"></path>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.931" y1="453.087" x2="461.931" y2="455.535"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.905" y1="455.535" x2="461.905" y2="453.087"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="461.887,455.535 461.905,455.535 461.931,455.535 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="462.039,455.58 461.914,455.58 461.896,455.58 			"></polyline>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M461.887,455.535c-0.009,0.018,0,0.027,0.009,0.045"></path>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="461.896,453.042 461.914,453.042 462.039,453.042 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="461.931,453.087 461.905,453.087 461.887,453.087 			"></polyline>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M461.896,453.042c-0.009,0.018-0.018,0.027-0.009,0.045"></path>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.887" y1="453.087" x2="461.887" y2="455.535"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="462.057" y1="453.069" x2="461.931" y2="453.069"></line>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M462.066,453.087c0-0.009,0-0.009,0-0.009
                                c0-0.009,0-0.009-0.009-0.009"></path>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="462.066" y1="455.535" x2="462.066" y2="453.087"></line>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M462.057,455.553c0.009,0,0.009,0,0.009-0.009c0,0,0,0,0-0.009"></path>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.931" y1="455.553" x2="462.057" y2="455.553"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="462.021" y1="453.402" x2="462.021" y2="455.22"></line>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M462.021,453.402c0-0.009,0-0.018-0.009-0.027"></path>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.986" y1="453.366" x2="462.013" y2="453.366"></line>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M461.977,453.384c0,0.009-0.009,0.009,0,0.018"></path>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.986" y1="453.375" x2="461.986" y2="453.384"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.977" y1="455.22" x2="461.977" y2="453.402"></line>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M461.977,455.22c0,0.009,0,0.009,0,0.018v0.009"></path>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="462.013" y1="455.265" x2="461.986" y2="455.265"></line>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M462.013,455.265c0.009-0.018,0.009-0.027,0.009-0.045"></path>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.958" y1="454.527" x2="461.958" y2="454.536"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.958" y1="454.536" x2="461.94" y2="454.554"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="461.94,454.554 461.94,454.572 461.94,454.608 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.94" y1="454.608" x2="461.967" y2="454.608"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.967" y1="454.455" x2="461.94" y2="454.455"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="461.94,454.455 461.94,454.491 461.94,454.509 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.94" y1="454.509" x2="461.958" y2="454.527"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.967" y1="454.311" x2="461.94" y2="454.356"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="461.94,454.356 461.94,454.374 461.94,454.392 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.94" y1="454.392" x2="461.967" y2="454.446"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.967" y1="454.158" x2="461.94" y2="454.212"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="461.94,454.212 461.94,454.23 461.94,454.248 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.94" y1="454.248" x2="461.967" y2="454.302"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.949" y1="454.086" x2="461.94" y2="454.104"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.94" y1="454.104" x2="461.94" y2="454.149"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.949" y1="454.104" x2="461.967" y2="454.158"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.967" y1="454.014" x2="461.949" y2="454.059"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.94" y1="454.023" x2="461.94" y2="454.059"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.94" y1="454.059" x2="461.949" y2="454.086"></line>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M462.039,455.58c0.009,0,0.018-0.009,0.018-0.018v-0.009"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M462.057,453.069v-0.009c0,0,0,0-0.009-0.009
                                c0-0.009,0-0.009-0.009-0.009"></path>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.94" y1="454.149" x2="461.949" y2="454.104"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.949" y1="454.059" x2="461.94" y2="454.023"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.967" y1="454.059" x2="461.967" y2="454.014"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.958" y1="454.086" x2="461.967" y2="454.059"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.967" y1="454.113" x2="461.958" y2="454.086"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.967" y1="454.158" x2="461.967" y2="454.113"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.967" y1="454.491" x2="461.967" y2="454.455"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.967" y1="454.518" x2="461.94" y2="454.491"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.967" y1="454.545" x2="461.967" y2="454.518"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.94" y1="454.572" x2="461.967" y2="454.545"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.967" y1="454.608" x2="461.967" y2="454.572"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="461.967,454.347 461.967,454.311 461.967,454.302 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.958" y1="454.347" x2="461.967" y2="454.347"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.958" y1="454.356" x2="461.958" y2="454.347"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.958" y1="454.401" x2="461.958" y2="454.392"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.967" y1="454.41" x2="461.958" y2="454.401"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.967" y1="454.446" x2="461.967" y2="454.41"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.967" y1="454.203" x2="461.967" y2="454.158"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.958" y1="454.203" x2="461.967" y2="454.203"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.958" y1="454.212" x2="461.958" y2="454.203"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.958" y1="454.257" x2="461.958" y2="454.248"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.967" y1="454.266" x2="461.958" y2="454.257"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.967" y1="454.302" x2="461.967" y2="454.266"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.94" y1="454.572" x2="461.967" y2="454.572"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.94" y1="454.491" x2="461.967" y2="454.491"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.958" y1="454.356" x2="461.94" y2="454.374"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.958" y1="454.392" x2="461.958" y2="454.356"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.94" y1="454.374" x2="461.958" y2="454.392"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.958" y1="454.212" x2="461.94" y2="454.23"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.958" y1="454.248" x2="461.958" y2="454.212"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.94" y1="454.23" x2="461.958" y2="454.248"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="462.021,453.402 461.995,453.402 461.977,453.402 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.977" y1="455.238" x2="461.995" y2="455.238"></line>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M462.013,455.265c0-0.018-0.009-0.027-0.018-0.027"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M461.995,453.384c0.009,0,0.018-0.009,0.018-0.009v-0.009"></path>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="461.995,453.384 461.986,453.384 461.977,453.384 			"></polyline>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M461.995,455.238c0,0,0-0.009,0-0.018"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M461.995,453.402c0-0.009,0-0.009,0-0.018"></path>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.995" y1="455.22" x2="461.995" y2="453.402"></line>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M470.284,435.924c0-0.036,0-0.081,0-0.117"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M461.724,443.313c0.009-0.009,0.009-0.027,0.009-0.045
                                c0-0.009,0.009-0.027,0.009-0.045s0-0.027,0.009-0.045c0-0.018,0-0.027,0-0.045c0.009-0.018,0.009-0.036,0.009-0.045
                                c0-0.018,0.009-0.036,0.009-0.054c0-0.009,0.009-0.027,0.009-0.045c0-0.018,0-0.027,0.009-0.045c0-0.018,0-0.036,0.009-0.045
                                c0-0.018,0-0.036,0.009-0.054c0-0.009,0-0.027,0.009-0.045c0-0.018,0-0.036,0.009-0.045c0-0.018,0-0.036,0.009-0.054
                                c0-0.009,0.009-0.027,0.009-0.045s0.009-0.036,0.009-0.045c0-0.018,0.009-0.036,0.009-0.054c0.009-0.018,0.009-0.027,0.018-0.045
                                c0-0.018,0-0.036,0.009-0.054c0-0.018,0.009-0.027,0.009-0.045c0.009-0.018,0.009-0.036,0.009-0.054
                                c0.009-0.018,0.009-0.027,0.018-0.045c0-0.018,0.009-0.036,0.009-0.054c0.009-0.018,0.009-0.027,0.018-0.045
                                c0-0.018,0.009-0.036,0.009-0.054c0.009-0.018,0.009-0.036,0.018-0.045c0-0.018,0.009-0.036,0.009-0.054
                                c0.009-0.018,0.018-0.036,0.018-0.054c0.009-0.009,0.009-0.027,0.018-0.045c0-0.018,0.009-0.036,0.018-0.054
                                c0-0.018,0.009-0.036,0.009-0.054c0.009-0.009,0.009-0.027,0.018-0.045s0.009-0.036,0.018-0.054
                                c0.009-0.018,0.009-0.036,0.018-0.054c0.009-0.009,0.009-0.027,0.018-0.045c0-0.018,0.009-0.036,0.018-0.054
                                c0-0.018,0.009-0.036,0.018-0.054c0.009-0.018,0.009-0.036,0.018-0.054c0.009-0.009,0.009-0.027,0.018-0.045
                                c0.009-0.018,0.018-0.036,0.018-0.054c0.009-0.018,0.018-0.036,0.027-0.054c0-0.018,0.009-0.036,0.018-0.054
                                s0.009-0.027,0.018-0.045c0.009-0.018,0.018-0.036,0.027-0.054c0-0.018,0.009-0.036,0.018-0.054
                                c0.009-0.018,0.018-0.036,0.018-0.054c0.009-0.018,0.018-0.036,0.027-0.054s0.018-0.036,0.027-0.054
                                c0-0.018,0.009-0.027,0.018-0.045s0.018-0.036,0.027-0.054s0.018-0.036,0.027-0.054s0.009-0.036,0.018-0.054
                                s0.018-0.036,0.027-0.054s0.018-0.036,0.027-0.054c0.009-0.018,0.018-0.036,0.027-0.054s0.018-0.036,0.027-0.054
                                c0.009-0.018,0.018-0.036,0.027-0.045c0.009-0.018,0.018-0.036,0.027-0.054c0.009-0.018,0.018-0.036,0.027-0.054
                                c0.054-0.09,0.099-0.18,0.153-0.27c0.063-0.099,0.126-0.198,0.189-0.297c0.072-0.117,0.153-0.234,0.234-0.342
                                c0.09-0.126,0.18-0.252,0.279-0.369c0.099-0.117,0.198-0.234,0.297-0.351c0.09-0.099,0.189-0.198,0.279-0.297
                                c0.09-0.09,0.18-0.171,0.261-0.252c0.081-0.072,0.162-0.144,0.243-0.216c0.207-0.18,0.423-0.342,0.648-0.504
                                c0.216-0.153,0.441-0.297,0.675-0.423c0.216-0.126,0.441-0.243,0.666-0.342c0.216-0.108,0.432-0.198,0.657-0.279
                                c0.243-0.09,0.486-0.162,0.738-0.234c0.243-0.063,0.495-0.117,0.747-0.162c0.063-0.009,0.117-0.018,0.18-0.027
                                c0.063-0.018,0.126-0.027,0.189-0.027c0.063-0.009,0.126-0.018,0.198-0.027c0.063-0.009,0.135-0.018,0.207-0.018
                                c0.063-0.009,0.135-0.018,0.207-0.018c0.054-0.009,0.117-0.009,0.171-0.009c0.045,0,0.099-0.009,0.144-0.009
                                c0.036,0,0.081,0,0.117,0c0.027,0,0.054,0,0.081,0c0.018,0,0.036,0,0.054,0"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M461.724,443.313h-0.009h-0.009c0,0,0,0-0.009,0
                                c0,0-0.009-0.009-0.018-0.009c0,0-0.009,0-0.018,0c-0.009-0.009-0.018-0.009-0.027-0.009s-0.018,0-0.027-0.009
                                c-0.009,0-0.009,0-0.009,0c-0.009,0-0.009,0-0.009,0c-0.009,0-0.009,0-0.018,0l-0.009-0.009c-0.009,0-0.018,0-0.018,0"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M461.194,443.205h0.009c0.009,0,0.018,0,0.018,0
                                c0.009,0,0.018,0.009,0.018,0.009c0.009,0,0.018,0,0.027,0s0.009,0.009,0.018,0.009s0.018,0,0.036,0c0,0.009,0,0.009,0.009,0.009
                                c0,0,0,0,0.009,0c0,0,0,0,0.009,0c0,0,0,0,0.009,0l0.009,0.009h0.009"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M470.284,435.807c-0.018,0-0.027,0-0.045,0s-0.036,0-0.045,0
                                c-0.018,0-0.036,0-0.054,0c-0.009,0-0.027,0-0.045,0c-0.018,0-0.027,0-0.045,0s-0.036,0-0.045,0
                                c-0.018,0.009-0.036,0.009-0.054,0.009c-0.009,0-0.027,0-0.045,0c-0.018,0-0.027,0-0.045,0s-0.036,0-0.045,0
                                c-0.018,0-0.036,0.009-0.045,0.009c-0.018,0-0.036,0-0.054,0c-0.009,0-0.027,0-0.045,0c-0.018,0-0.027,0.009-0.045,0.009
                                s-0.036,0-0.045,0c-0.018,0-0.036,0-0.054,0.009c-0.009,0-0.027,0-0.045,0c-0.018,0-0.027,0-0.045,0
                                c-0.018,0.009-0.036,0.009-0.045,0.009c-0.018,0-0.036,0-0.054,0.009c-0.009,0-0.027,0-0.045,0c-0.018,0-0.027,0.009-0.045,0.009
                                s-0.036,0-0.054,0c-0.009,0.009-0.027,0.009-0.045,0.009s-0.027,0-0.045,0.009c-0.018,0-0.036,0-0.045,0
                                c-0.018,0.009-0.036,0.009-0.045,0.009c-0.018,0-0.036,0.009-0.054,0.009c-0.009,0-0.027,0-0.045,0.009
                                c-0.018,0-0.027,0-0.045,0.009c-0.018,0-0.036,0-0.045,0c-0.018,0.009-0.036,0.009-0.054,0.009
                                c-0.009,0.009-0.027,0.009-0.045,0.009c-0.018,0.009-0.027,0.009-0.045,0.009c-0.018,0.009-0.036,0.009-0.045,0.009
                                c-0.018,0.009-0.036,0.009-0.054,0.009c-0.009,0.009-0.027,0.009-0.045,0.009c-0.018,0.009-0.027,0.009-0.045,0.009
                                c-0.018,0.009-0.027,0.009-0.045,0.009c-0.018,0.009-0.036,0.009-0.045,0.018c-0.018,0-0.036,0-0.054,0.009
                                c-0.009,0-0.027,0-0.045,0.009c-0.009,0-0.027,0.009-0.045,0.009c-0.018,0-0.027,0.009-0.045,0.009
                                c-0.018,0.009-0.036,0.009-0.045,0.018c-0.018,0-0.036,0-0.045,0.009c-0.018,0-0.036,0.009-0.054,0.009
                                c-0.009,0.009-0.027,0.009-0.045,0.009c-0.009,0.009-0.027,0.009-0.045,0.018c-0.018,0-0.027,0.009-0.045,0.009
                                c-0.018,0.009-0.027,0.009-0.045,0.018c-0.018,0-0.027,0.009-0.045,0.009c-0.018,0.009-0.036,0.009-0.045,0.018
                                c-0.018,0-0.036,0.009-0.045,0.009c-0.018,0.009-0.036,0.009-0.045,0.018c-0.018,0-0.036,0.009-0.045,0.009
                                c-0.018,0.009-0.036,0.009-0.045,0.018c-0.018,0-0.036,0.009-0.054,0.009c-0.009,0.009-0.027,0.018-0.045,0.018
                                c-0.009,0.009-0.027,0.009-0.045,0.018c-0.009,0-0.027,0.009-0.045,0.009c-0.009,0.009-0.027,0.018-0.045,0.018
                                c-0.009,0.009-0.027,0.009-0.045,0.018c-0.009,0.009-0.027,0.009-0.036,0.018c-0.018,0-0.036,0.009-0.045,0.018
                                c-0.018,0-0.036,0.009-0.045,0.009c-0.153,0.063-0.306,0.126-0.459,0.189c-0.153,0.063-0.306,0.135-0.459,0.216
                                c-0.153,0.081-0.306,0.162-0.45,0.252c-0.153,0.09-0.306,0.18-0.45,0.279c-0.153,0.108-0.297,0.207-0.441,0.324
                                c-0.144,0.108-0.288,0.225-0.423,0.342c-0.099,0.099-0.207,0.189-0.306,0.288c-0.108,0.099-0.207,0.207-0.306,0.315
                                c-0.108,0.108-0.207,0.225-0.306,0.342c-0.099,0.117-0.198,0.243-0.288,0.369c-0.054,0.072-0.108,0.144-0.162,0.216
                                c-0.036,0.063-0.081,0.126-0.117,0.18c-0.036,0.054-0.063,0.099-0.09,0.144c-0.027,0.036-0.045,0.072-0.072,0.108
                                c-0.009,0.027-0.027,0.045-0.036,0.072c-0.009,0.009-0.018,0.018-0.018,0.027c-0.018,0.027-0.027,0.045-0.045,0.063
                                c-0.009,0.027-0.018,0.045-0.036,0.063c-0.009,0.027-0.027,0.045-0.036,0.072c-0.009,0.018-0.027,0.036-0.036,0.063
                                c-0.018,0.018-0.027,0.036-0.036,0.063c-0.018,0.018-0.027,0.045-0.045,0.063c-0.009,0.018-0.018,0.045-0.036,0.063
                                c-0.009,0.027-0.027,0.045-0.036,0.072c-0.009,0.018-0.027,0.036-0.036,0.063c-0.009,0.018-0.027,0.045-0.036,0.063
                                c-0.018,0.027-0.027,0.045-0.036,0.063c-0.018,0.027-0.027,0.045-0.036,0.072c-0.027,0.045-0.054,0.081-0.072,0.126
                                c-0.027,0.045-0.054,0.09-0.072,0.135c-0.027,0.045-0.054,0.09-0.072,0.126c-0.027,0.045-0.054,0.09-0.072,0.135
                                c-0.027,0.045-0.045,0.09-0.072,0.135c-0.027,0.045-0.045,0.09-0.072,0.144c-0.027,0.045-0.045,0.09-0.072,0.135
                                c-0.018,0.045-0.045,0.09-0.072,0.135c-0.018,0.054-0.045,0.099-0.063,0.144c-0.027,0.045-0.054,0.099-0.072,0.144
                                c-0.027,0.045-0.045,0.099-0.072,0.144c-0.018,0.045-0.045,0.099-0.072,0.144c-0.018,0.054-0.045,0.099-0.063,0.144
                                c-0.027,0.054-0.045,0.099-0.072,0.153c-0.018,0.054-0.045,0.099-0.063,0.153c-0.027,0.045-0.045,0.099-0.072,0.144
                                c-0.018,0.054-0.045,0.108-0.063,0.153"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M470.284,472.815c0-0.036,0-0.072,0-0.117"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M461.194,465.426c0.009,0.027,0.018,0.045,0.027,0.072
                                c0.018,0.027,0.027,0.054,0.036,0.081c0.009,0.027,0.027,0.045,0.036,0.072c0.009,0.027,0.018,0.054,0.036,0.081
                                c0.009,0.018,0.018,0.045,0.027,0.072c0.018,0.027,0.027,0.054,0.036,0.072c0.009,0.027,0.027,0.054,0.036,0.081
                                c0.009,0.018,0.027,0.045,0.036,0.072c0.009,0.027,0.018,0.045,0.036,0.072c0.009,0.027,0.018,0.054,0.027,0.072
                                c0.018,0.027,0.027,0.054,0.036,0.072c0.018,0.027,0.027,0.054,0.036,0.072c0.009,0.027,0.027,0.054,0.036,0.081
                                c0.009,0.018,0.027,0.045,0.036,0.072c0.009,0.018,0.027,0.045,0.036,0.072c0.009,0.018,0.018,0.045,0.036,0.063
                                c0.009,0.027,0.018,0.054,0.036,0.072c0.009,0.027,0.018,0.054,0.036,0.072c0.009,0.027,0.018,0.045,0.036,0.072
                                c0.009,0.027,0.018,0.045,0.027,0.072c0.018,0.018,0.027,0.045,0.036,0.072c0.018,0.018,0.027,0.045,0.036,0.063
                                c0.018,0.027,0.027,0.045,0.036,0.072c0.018,0.027,0.027,0.045,0.036,0.072c0.018,0.018,0.027,0.045,0.036,0.063
                                c0.018,0.027,0.027,0.045,0.036,0.072c0.018,0.018,0.027,0.045,0.036,0.063c0.018,0.027,0.027,0.045,0.036,0.072
                                c0.018,0.018,0.027,0.045,0.036,0.063c0.018,0.027,0.027,0.045,0.036,0.072c0.018,0.018,0.027,0.045,0.036,0.063
                                c0.018,0.018,0.027,0.045,0.036,0.063c0.018,0.027,0.027,0.045,0.036,0.072c0.018,0.018,0.027,0.036,0.036,0.063
                                c0.018,0.018,0.027,0.045,0.036,0.063c0.018,0.018,0.027,0.045,0.036,0.063c0.018,0.027,0.027,0.045,0.036,0.063
                                c0.018,0.027,0.027,0.045,0.045,0.072c0.009,0.018,0.018,0.036,0.036,0.063c0.009,0.018,0.018,0.036,0.036,0.063
                                c0.027,0.054,0.063,0.108,0.099,0.171c0.027,0.054,0.063,0.108,0.099,0.162c0.018,0.027,0.027,0.054,0.045,0.09
                                c0.009,0.009,0.018,0.018,0.018,0.027c0.009,0.018,0.027,0.036,0.036,0.054c0.018,0.027,0.036,0.054,0.054,0.081
                                s0.036,0.054,0.054,0.081c0.072,0.117,0.144,0.225,0.216,0.333c0.081,0.099,0.153,0.207,0.234,0.306
                                c0.162,0.207,0.342,0.414,0.531,0.612c0.171,0.18,0.351,0.36,0.549,0.522c0.135,0.126,0.27,0.234,0.414,0.351
                                c0.144,0.108,0.288,0.216,0.441,0.315c0.144,0.099,0.297,0.189,0.45,0.279c0.144,0.09,0.297,0.171,0.45,0.252
                                c0.153,0.081,0.306,0.153,0.459,0.216c0.144,0.072,0.297,0.126,0.45,0.189c0.099,0.036,0.198,0.072,0.306,0.108
                                c0.099,0.027,0.198,0.063,0.297,0.09c0.099,0.027,0.198,0.054,0.306,0.081c0.099,0.027,0.198,0.054,0.297,0.072
                                c0.036,0.009,0.063,0.018,0.099,0.018c0.036,0.009,0.063,0.018,0.099,0.027c0.036,0,0.063,0.009,0.099,0.018
                                c0.036,0,0.063,0.009,0.099,0.018c0.036,0,0.063,0.009,0.099,0.009c0.036,0.009,0.063,0.009,0.099,0.018
                                c0.036,0.009,0.063,0.009,0.099,0.018c0.036,0,0.063,0,0.099,0.009c0.036,0,0.063,0.009,0.099,0.009
                                c0.036,0.009,0.063,0.009,0.099,0.009c0.036,0.009,0.063,0.009,0.099,0.009c0.036,0.009,0.063,0.009,0.099,0.009
                                c0.036,0.009,0.063,0.009,0.099,0.009c0.036,0,0.063,0.009,0.099,0.009c0.027,0,0.063,0,0.099,0c0.027,0,0.063,0.009,0.099,0.009
                                c0.027,0,0.063,0,0.09,0c0.036,0,0.072,0,0.099,0c0.036,0,0.063,0,0.099,0"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M461.194,465.426c0,0,0,0,0.009,0v-0.009h0.009h0.009
                                c0,0,0.009,0,0.018,0c0.009-0.009,0.018-0.009,0.027-0.009c0,0,0.009,0,0.018-0.009c0.009,0,0.018,0,0.036,0
                                c0.009-0.009,0.009-0.009,0.018-0.009c0,0,0,0,0.009,0h0.009c0.009,0,0.009-0.009,0.018-0.009"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M461.544,465.345c-0.018,0.009-0.027,0.009-0.045,0.009
                                c-0.009,0.009-0.027,0.009-0.045,0.009c-0.009,0.009-0.027,0.009-0.036,0.009c-0.018,0.009-0.027,0.009-0.045,0.009"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M461.724,465.309c0,0,0,0-0.009,0c0,0,0,0-0.009,0
                                c0,0,0,0-0.009,0.009c0,0-0.009,0-0.018,0s-0.009,0-0.018,0.009c-0.009,0-0.018,0-0.027,0s-0.018,0.009-0.027,0.009
                                c-0.009,0-0.009,0-0.009,0c-0.009,0-0.009,0-0.018,0c0,0,0,0.009-0.009,0.009c0,0,0,0-0.009,0h-0.009h-0.009"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M470.284,472.698c-0.018,0-0.036,0-0.045,0c-0.018,0-0.036,0-0.054,0
                                c-0.018,0-0.045,0-0.063,0s-0.036,0-0.063,0c-0.018,0-0.045,0-0.063,0c-0.027,0-0.045,0-0.072,0s-0.054-0.009-0.072-0.009
                                c-0.027,0-0.054,0-0.081,0c-0.036,0-0.063-0.009-0.09-0.009c-0.027,0-0.063,0-0.09-0.009c-0.027,0-0.063,0-0.09,0
                                c-0.036-0.009-0.072-0.009-0.099-0.009c-0.054-0.009-0.108-0.018-0.162-0.018c-0.054-0.009-0.117-0.018-0.171-0.027
                                c-0.054-0.009-0.108-0.018-0.162-0.018c-0.054-0.009-0.108-0.018-0.171-0.036c-0.252-0.045-0.504-0.099-0.747-0.162
                                c-0.252-0.072-0.495-0.144-0.738-0.234c-0.297-0.108-0.594-0.234-0.882-0.378c-0.306-0.153-0.603-0.324-0.891-0.513
                                c-0.306-0.198-0.603-0.423-0.873-0.657c-0.081-0.072-0.162-0.144-0.243-0.216c-0.09-0.081-0.18-0.171-0.261-0.252
                                c-0.099-0.099-0.189-0.198-0.279-0.297c-0.108-0.117-0.198-0.234-0.297-0.351s-0.189-0.234-0.279-0.36
                                c-0.072-0.108-0.153-0.216-0.225-0.333c-0.072-0.099-0.135-0.207-0.189-0.306c-0.054-0.09-0.108-0.18-0.162-0.279
                                c-0.018-0.027-0.036-0.063-0.054-0.099c-0.009-0.027-0.027-0.063-0.045-0.099c-0.018-0.027-0.036-0.063-0.054-0.099
                                c-0.018-0.027-0.027-0.063-0.045-0.099c-0.018-0.027-0.036-0.063-0.045-0.099c-0.018-0.027-0.036-0.063-0.045-0.099
                                c-0.018-0.027-0.027-0.063-0.045-0.099c-0.009-0.027-0.027-0.063-0.045-0.099c-0.009-0.027-0.018-0.063-0.036-0.09
                                c-0.009-0.036-0.027-0.072-0.036-0.099c-0.018-0.036-0.027-0.063-0.036-0.099c-0.018-0.036-0.027-0.063-0.036-0.099
                                c-0.009-0.027-0.027-0.063-0.036-0.099c-0.009-0.027-0.018-0.063-0.027-0.09c-0.018-0.036-0.027-0.063-0.036-0.099
                                c-0.009-0.027-0.018-0.063-0.027-0.09c-0.009-0.036-0.018-0.063-0.027-0.099c-0.009-0.027-0.018-0.063-0.027-0.09
                                c-0.009-0.036-0.018-0.063-0.027-0.099c-0.009-0.027-0.018-0.063-0.027-0.09c-0.009-0.036-0.009-0.063-0.018-0.09
                                c-0.009-0.036-0.018-0.063-0.027-0.099c0-0.027-0.009-0.054-0.018-0.09c-0.009-0.027-0.009-0.054-0.018-0.09
                                c-0.009-0.027-0.009-0.054-0.018-0.09c-0.009-0.027-0.009-0.054-0.018-0.09c-0.009-0.027-0.009-0.054-0.018-0.081
                                c0-0.036-0.009-0.063-0.009-0.09c-0.009-0.027-0.009-0.063-0.018-0.09c0-0.027-0.009-0.054-0.009-0.09
                                c-0.009-0.027-0.009-0.054-0.018-0.081"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M470.284,473.751c0.063,0,0.126,0,0.198,0
                                c0.063,0,0.126,0,0.189-0.009c0.135,0,0.261-0.009,0.387-0.018c0.261-0.027,0.513-0.054,0.765-0.099
                                c0.252-0.045,0.504-0.099,0.756-0.162c0.243-0.063,0.495-0.135,0.738-0.225c0.063-0.018,0.117-0.045,0.18-0.063
                                c0.063-0.027,0.126-0.045,0.18-0.072c0.126-0.045,0.243-0.099,0.36-0.153c0.234-0.099,0.468-0.216,0.693-0.342
                                c0.225-0.117,0.441-0.252,0.657-0.396c0.207-0.144,0.423-0.297,0.621-0.45c0.054-0.045,0.099-0.081,0.153-0.126
                                c0.045-0.045,0.099-0.081,0.144-0.126c0.099-0.081,0.198-0.171,0.288-0.261c0.189-0.171,0.369-0.36,0.54-0.549
                                c0.171-0.189,0.333-0.387,0.495-0.594c0.153-0.207,0.297-0.414,0.432-0.63c0.036-0.054,0.072-0.117,0.108-0.171
                                c0.036-0.054,0.063-0.108,0.099-0.162c0.063-0.117,0.126-0.225,0.189-0.342c0.117-0.234,0.225-0.459,0.324-0.702
                                c0.099-0.234,0.189-0.477,0.27-0.72c0.072-0.243,0.144-0.486,0.207-0.738c0.009-0.063,0.027-0.126,0.036-0.189
                                c0.018-0.072,0.027-0.135,0.036-0.198c0.027-0.126,0.054-0.252,0.072-0.378c0.018-0.126,0.027-0.261,0.045-0.387
                                c0.009-0.126,0.018-0.252,0.027-0.378c0.009-0.135,0.018-0.261,0.018-0.387c0-0.063,0.009-0.126,0.009-0.189
                                c0-0.063,0-0.135,0-0.198c0.009-0.252,0.009-0.513,0.018-0.765c0.009-0.513,0.009-1.026,0.018-1.539s0.009-1.026,0.018-1.539
                                c0-0.252,0.009-0.504,0.009-0.765c0-0.252,0-0.513,0.009-0.765c0-0.513,0.009-1.026,0.009-1.539c0-1.026,0.009-2.052,0.009-3.078
                                c0-1.026,0-2.043-0.009-3.069c0-0.513-0.009-1.026-0.009-1.539c0-0.261-0.009-0.513-0.009-0.765c0-0.261-0.009-0.513-0.009-0.774
                                c-0.009-0.513-0.009-1.026-0.018-1.539s-0.009-1.017-0.018-1.53c0-0.261-0.009-0.513-0.018-0.774c0-0.126,0-0.252-0.009-0.378
                                c0-0.036,0-0.072,0-0.099c0-0.036,0-0.063,0-0.099c-0.009-0.063-0.009-0.126-0.009-0.189c-0.009-0.126-0.018-0.252-0.027-0.387
                                c-0.018-0.126-0.027-0.252-0.045-0.378c-0.018-0.126-0.036-0.261-0.063-0.387s-0.045-0.252-0.081-0.378
                                c-0.009-0.063-0.027-0.126-0.045-0.189c-0.009-0.063-0.027-0.126-0.045-0.189c-0.036-0.126-0.072-0.252-0.108-0.378
                                c-0.081-0.243-0.171-0.486-0.261-0.729c-0.099-0.234-0.207-0.468-0.324-0.702c-0.126-0.225-0.252-0.45-0.387-0.675
                                c-0.036-0.054-0.072-0.108-0.108-0.162c-0.036-0.054-0.072-0.108-0.108-0.162c-0.072-0.108-0.144-0.216-0.225-0.315
                                c-0.153-0.207-0.324-0.414-0.495-0.603c-0.171-0.189-0.351-0.378-0.531-0.558c-0.189-0.18-0.387-0.351-0.585-0.513
                                c-0.054-0.036-0.108-0.081-0.162-0.117c-0.045-0.036-0.099-0.081-0.153-0.117c-0.108-0.081-0.207-0.153-0.315-0.225
                                c-0.216-0.144-0.441-0.279-0.666-0.405c-0.225-0.126-0.45-0.234-0.693-0.342c-0.234-0.108-0.477-0.207-0.72-0.288
                                c-0.063-0.027-0.126-0.045-0.189-0.063c-0.054-0.027-0.117-0.045-0.18-0.063c-0.126-0.036-0.252-0.072-0.378-0.108
                                c-0.252-0.063-0.504-0.117-0.756-0.162c-0.252-0.036-0.513-0.072-0.765-0.09c-0.135-0.018-0.261-0.027-0.396-0.027
                                c-0.063,0-0.126-0.009-0.189-0.009c-0.036,0-0.063,0-0.099,0c-0.018,0-0.036,0-0.054,0c0,0-0.009,0-0.018,0s-0.018,0-0.027,0"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M470.284,434.871c0-0.018,0-0.036,0-0.054c0-0.009,0-0.018,0-0.027
                                c0,0,0-0.009,0-0.018c0,0,0-0.009,0-0.018v-0.009v-0.009"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M477.736,470.187c-0.009,0.018-0.027,0.027-0.036,0.045
                                c-0.162,0.207-0.324,0.405-0.504,0.594c-0.171,0.198-0.351,0.378-0.54,0.558c-0.099,0.09-0.198,0.171-0.297,0.261
                                c-0.045,0.045-0.099,0.081-0.153,0.126c-0.045,0.036-0.099,0.081-0.144,0.117c-0.207,0.162-0.423,0.315-0.639,0.459
                                c-0.108,0.072-0.216,0.144-0.324,0.207c-0.108,0.072-0.216,0.126-0.333,0.189c-0.234,0.126-0.468,0.243-0.702,0.351
                                c-0.117,0.045-0.243,0.099-0.36,0.144c-0.063,0.027-0.126,0.054-0.18,0.072c-0.063,0.027-0.126,0.045-0.189,0.063
                                c-0.243,0.09-0.495,0.162-0.747,0.225c-0.252,0.063-0.504,0.117-0.756,0.162c-0.252,0.045-0.513,0.072-0.765,0.099
                                c-0.135,0.009-0.261,0.018-0.387,0.018c-0.072,0.009-0.135,0.009-0.198,0.009c-0.063,0-0.135,0-0.198,0"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M479.544,442.809c0.009,0.099,0.018,0.207,0.036,0.306
                                c0.009,0.135,0.018,0.261,0.027,0.387c0.009,0.135,0.018,0.261,0.018,0.387c0,0.072,0.009,0.135,0.009,0.198
                                c0,0.063,0,0.126,0,0.198c0.009,0.252,0.009,0.513,0.018,0.774c0.009,0.513,0.009,1.026,0.018,1.548
                                c0.009,0.513,0.009,1.035,0.018,1.548c0,0.261,0.009,0.513,0.009,0.774c0,0.261,0,0.522,0.009,0.774
                                c0,0.522,0.009,1.035,0.009,1.557c0.009,1.026,0.009,2.061,0.009,3.096c0,1.035-0.009,2.07-0.009,3.105
                                c0,0.513-0.009,1.026-0.009,1.548c-0.009,0.261-0.009,0.513-0.009,0.774c-0.009,0.261-0.009,0.513-0.009,0.774
                                c-0.009,0.513-0.018,1.035-0.018,1.548c-0.009,0.522-0.009,1.035-0.018,1.557c-0.009,0.252-0.009,0.513-0.018,0.774
                                c0,0.063,0,0.126-0.009,0.189c0,0.063,0,0.126,0,0.198c-0.009,0.126-0.009,0.252-0.018,0.387
                                c-0.009,0.126-0.027,0.252-0.036,0.387c-0.018,0.126-0.036,0.252-0.054,0.387c-0.018,0.126-0.045,0.252-0.072,0.378
                                c-0.018,0.135-0.054,0.261-0.081,0.387c-0.063,0.252-0.135,0.504-0.216,0.747s-0.171,0.486-0.27,0.729
                                c-0.108,0.234-0.216,0.468-0.342,0.693c-0.054,0.117-0.126,0.234-0.189,0.342c-0.036,0.063-0.063,0.117-0.099,0.171
                                c-0.036,0.054-0.072,0.108-0.108,0.171c-0.072,0.108-0.144,0.216-0.216,0.324"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M478.212,439.128c0.126,0.207,0.252,0.423,0.36,0.639
                                c0.117,0.234,0.234,0.468,0.333,0.702c0.099,0.243,0.189,0.486,0.27,0.738c0.036,0.126,0.081,0.243,0.108,0.378
                                c0.018,0.063,0.036,0.126,0.054,0.189c0.018,0.063,0.036,0.126,0.045,0.189c0.036,0.126,0.063,0.261,0.081,0.387
                                c0.027,0.126,0.045,0.252,0.072,0.387"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M470.284,434.736c0.063,0,0.135,0,0.198,0
                                c0.063,0,0.135,0.009,0.198,0.009c0.135,0,0.261,0.009,0.396,0.027c0.261,0.018,0.513,0.054,0.774,0.099
                                c0.126,0.018,0.252,0.045,0.387,0.063c0.126,0.036,0.252,0.063,0.378,0.099c0.126,0.027,0.252,0.063,0.378,0.099
                                c0.063,0.027,0.126,0.045,0.189,0.063c0.063,0.018,0.126,0.045,0.189,0.063c0.243,0.09,0.486,0.18,0.729,0.288
                                c0.234,0.108,0.468,0.225,0.693,0.351c0.234,0.126,0.45,0.261,0.666,0.405c0.117,0.072,0.216,0.144,0.324,0.225
                                c0.054,0.036,0.108,0.081,0.162,0.117c0.054,0.036,0.099,0.081,0.153,0.117c0.207,0.171,0.405,0.342,0.594,0.522
                                c0.189,0.171,0.369,0.36,0.549,0.558c0.171,0.189,0.333,0.387,0.495,0.594c0.081,0.108,0.153,0.216,0.225,0.324
                                c0.045,0.054,0.081,0.108,0.117,0.162c0.036,0.054,0.072,0.108,0.108,0.162"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M470.284,473.751c0,0.027,0,0.045,0,0.054s0,0.018,0,0.027
                                s0,0.009,0,0.018s0,0.009,0,0.018v0.009v0.009"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M470.284,435.015c0.018,0,0.027,0,0.045,0s0.045,0,0.063,0
                                c0.027,0,0.054,0,0.081,0c0.036,0,0.063,0,0.09,0.009c0.036,0,0.072,0,0.108,0c0.072,0,0.153,0.009,0.234,0.009
                                c0.045,0.009,0.099,0.009,0.144,0.018c0.144,0.009,0.288,0.027,0.423,0.045c0.117,0.009,0.225,0.027,0.342,0.045
                                c0.162,0.027,0.324,0.063,0.486,0.099c0.171,0.036,0.333,0.081,0.495,0.126c0.162,0.045,0.333,0.099,0.495,0.153
                                c0.126,0.045,0.252,0.099,0.378,0.144c0.144,0.054,0.288,0.117,0.423,0.18c0.135,0.063,0.279,0.126,0.414,0.198
                                c0.117,0.063,0.243,0.135,0.36,0.207c0.189,0.099,0.369,0.216,0.549,0.333c0.18,0.126,0.36,0.261,0.54,0.396
                                c0.198,0.153,0.387,0.324,0.576,0.495c0.18,0.171,0.36,0.351,0.531,0.54c0.162,0.18,0.315,0.36,0.459,0.549
                                c0.171,0.216,0.324,0.432,0.468,0.666c0.072,0.099,0.135,0.207,0.198,0.324c0.063,0.108,0.126,0.216,0.189,0.324
                                c0.117,0.225,0.225,0.459,0.324,0.693c0.054,0.117,0.099,0.234,0.144,0.36c0.045,0.117,0.09,0.234,0.126,0.36
                                c0.081,0.234,0.153,0.477,0.207,0.729c0.045,0.153,0.072,0.315,0.108,0.477c0.009,0.09,0.027,0.18,0.045,0.261
                                c0.018,0.126,0.036,0.261,0.045,0.387c0.018,0.126,0.027,0.252,0.036,0.378c0,0.063,0.009,0.126,0.009,0.189
                                c0,0.036,0.009,0.072,0.009,0.108c0,0.027,0,0.054,0,0.081c0,0.018,0,0.036,0,0.054s0,0.027,0,0.045c0,0.036,0,0.063,0,0.099
                                c0,0.027,0,0.063,0.009,0.09c0,0.036,0,0.063,0,0.099s0,0.081,0,0.117c0,0.09,0,0.18,0,0.27c0,0.063,0,0.126,0.009,0.198
                                c0,0.063,0,0.126,0,0.18c0.009,0.558,0.009,1.107,0.018,1.656c0.009,0.477,0.009,0.954,0.018,1.422
                                c0.009,1.071,0.018,2.142,0.018,3.213c0,0.981,0.009,1.962,0.009,2.943c0,0.981-0.009,1.962-0.009,2.943
                                c0,1.071-0.009,2.133-0.018,3.204c-0.009,0.477-0.009,0.945-0.018,1.422c0,0.549-0.009,1.107-0.018,1.656
                                c0,0.126,0,0.252-0.009,0.387c0,0.126,0,0.252,0,0.378c0,0.036,0,0.072,0,0.099c0,0.036,0,0.063-0.009,0.099
                                c0,0.036,0,0.072,0,0.099c0,0.036,0,0.063,0,0.09c0,0.027,0,0.045,0,0.072c0,0.036,0,0.081-0.009,0.117
                                c0,0.072,0,0.135-0.009,0.198c-0.009,0.135-0.018,0.279-0.036,0.423c-0.009,0.108-0.027,0.225-0.036,0.333
                                c-0.018,0.099-0.036,0.189-0.054,0.288c-0.027,0.153-0.054,0.306-0.09,0.459c-0.063,0.243-0.126,0.486-0.198,0.72
                                c-0.081,0.252-0.18,0.504-0.279,0.747c-0.045,0.117-0.099,0.225-0.153,0.342c-0.054,0.117-0.108,0.234-0.171,0.342
                                c-0.054,0.117-0.117,0.225-0.18,0.333c-0.063,0.117-0.135,0.225-0.198,0.333c-0.099,0.153-0.207,0.306-0.315,0.459
                                c-0.099,0.135-0.207,0.27-0.315,0.405c-0.099,0.117-0.198,0.243-0.297,0.351c-0.171,0.189-0.351,0.378-0.54,0.549
                                c-0.18,0.171-0.378,0.342-0.576,0.495c-0.162,0.135-0.333,0.261-0.504,0.378c-0.171,0.108-0.333,0.216-0.504,0.324
                                c-0.27,0.153-0.54,0.297-0.819,0.423c-0.144,0.072-0.288,0.135-0.441,0.198c-0.135,0.054-0.27,0.099-0.405,0.144
                                c-0.117,0.045-0.243,0.09-0.369,0.126s-0.243,0.072-0.369,0.099c-0.126,0.036-0.252,0.063-0.378,0.09
                                c-0.117,0.027-0.243,0.054-0.369,0.072c-0.054,0.009-0.108,0.018-0.153,0.027c-0.063,0.009-0.126,0.018-0.18,0.018
                                c-0.072,0.009-0.135,0.018-0.207,0.027s-0.144,0.018-0.225,0.027c-0.027,0-0.063,0-0.09,0c-0.036,0.009-0.063,0.009-0.099,0.009
                                c-0.027,0-0.063,0.009-0.099,0.009c-0.027,0-0.063,0-0.09,0c-0.036,0-0.063,0.009-0.099,0.009c-0.027,0-0.063,0-0.099,0
                                c-0.027,0-0.063,0-0.09,0c-0.036,0-0.063,0-0.099,0"></path>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="470.284" y1="435.015" x2="470.284" y2="434.871"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="470.284" y1="473.751" x2="470.284" y2="473.607"></line>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M470.284,434.871h-0.009c-0.009,0-0.009,0-0.018,0s-0.018,0-0.027,0
                                s-0.027,0-0.045,0c-0.036,0-0.063,0-0.099,0c-0.063,0-0.135,0.009-0.198,0.009c-0.135,0-0.261,0.009-0.396,0.027
                                c-0.261,0.018-0.522,0.054-0.783,0.099c-0.252,0.045-0.513,0.099-0.765,0.171c-0.072,0.009-0.135,0.027-0.198,0.045
                                c-0.063,0.018-0.126,0.045-0.189,0.063c-0.126,0.036-0.252,0.081-0.369,0.126c-0.252,0.081-0.495,0.18-0.729,0.288
                                c-0.243,0.108-0.468,0.234-0.702,0.36c-0.225,0.126-0.45,0.27-0.666,0.414c-0.054,0.036-0.108,0.081-0.162,0.117
                                s-0.108,0.081-0.162,0.117c-0.108,0.081-0.207,0.162-0.315,0.243c-0.198,0.162-0.396,0.342-0.585,0.522
                                c-0.189,0.18-0.369,0.369-0.54,0.567c-0.081,0.099-0.171,0.207-0.252,0.306s-0.162,0.207-0.234,0.315
                                c-0.081,0.108-0.153,0.216-0.225,0.324c-0.072,0.117-0.144,0.225-0.216,0.333c-0.036,0.063-0.072,0.117-0.099,0.171
                                c-0.036,0.054-0.072,0.117-0.099,0.171c-0.072,0.117-0.135,0.225-0.198,0.342c-0.126,0.234-0.252,0.459-0.378,0.693
                                c-0.063,0.117-0.117,0.234-0.18,0.351c-0.054,0.117-0.117,0.243-0.171,0.36c-0.063,0.117-0.117,0.234-0.171,0.351
                                c-0.063,0.126-0.117,0.243-0.171,0.36c-0.108,0.243-0.216,0.486-0.315,0.72c-0.108,0.243-0.207,0.486-0.306,0.729
                                c-0.189,0.486-0.369,0.981-0.531,1.476c-0.162,0.495-0.315,0.99-0.45,1.494c-0.144,0.495-0.27,1.008-0.378,1.512
                                c-0.225,1.017-0.387,2.052-0.504,3.096c-0.027,0.261-0.054,0.522-0.072,0.792c-0.027,0.261-0.045,0.522-0.054,0.783
                                c-0.036,0.531-0.045,1.053-0.045,1.584c0,0.261,0,0.531,0.009,0.792c0.009,0.261,0.018,0.522,0.036,0.783
                                c0.027,0.522,0.063,1.044,0.117,1.557c0.117,1.035,0.279,2.061,0.495,3.078c0.117,0.504,0.234,1.008,0.378,1.512
                                c0.135,0.504,0.279,0.999,0.45,1.494c0.081,0.252,0.162,0.504,0.252,0.747c0.045,0.126,0.09,0.243,0.135,0.369
                                c0.054,0.126,0.099,0.252,0.144,0.369c0.099,0.243,0.198,0.495,0.297,0.729c0.108,0.243,0.207,0.486,0.324,0.729
                                c0.108,0.234,0.216,0.477,0.333,0.711c0.054,0.117,0.117,0.234,0.171,0.351c0.063,0.117,0.117,0.234,0.18,0.351
                                c0.117,0.234,0.243,0.459,0.369,0.693c0.063,0.117,0.135,0.225,0.198,0.342c0.036,0.054,0.063,0.108,0.099,0.171
                                c0.036,0.054,0.063,0.108,0.099,0.162c0.072,0.117,0.135,0.225,0.207,0.342c0.081,0.108,0.153,0.216,0.225,0.324
                                c0.081,0.108,0.162,0.216,0.243,0.315c0.036,0.054,0.081,0.108,0.126,0.162c0.036,0.045,0.081,0.099,0.126,0.153
                                c0.171,0.198,0.351,0.396,0.54,0.576c0.189,0.189,0.387,0.36,0.585,0.531c0.207,0.162,0.414,0.324,0.63,0.477
                                c0.108,0.072,0.225,0.144,0.333,0.216c0.063,0.036,0.117,0.072,0.171,0.108c0.063,0.036,0.117,0.063,0.171,0.099
                                c0.234,0.135,0.468,0.252,0.711,0.36c0.234,0.117,0.477,0.216,0.729,0.306c0.252,0.09,0.504,0.162,0.756,0.234
                                c0.126,0.036,0.261,0.063,0.387,0.09c0.135,0.036,0.261,0.054,0.396,0.081c0.261,0.045,0.522,0.081,0.783,0.099
                                c0.135,0.018,0.27,0.027,0.405,0.027c0.063,0.009,0.126,0.009,0.198,0.009c0.027,0,0.063,0,0.099,0c0.018,0,0.036,0,0.045,0
                                s0.018,0,0.027,0s0.009,0,0.018,0s0.009,0,0.009,0"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M470.284,473.886c-0.063,0-0.135,0-0.198,0
                                c-0.072,0-0.135,0-0.207-0.009c-0.135,0-0.27-0.009-0.396-0.027c-0.27-0.018-0.531-0.054-0.801-0.099
                                c-0.126-0.027-0.261-0.045-0.396-0.081c-0.063-0.009-0.126-0.027-0.198-0.045c-0.063-0.009-0.126-0.027-0.189-0.045
                                c-0.261-0.072-0.513-0.153-0.765-0.234c-0.252-0.09-0.495-0.198-0.738-0.306c-0.243-0.108-0.477-0.234-0.711-0.36
                                c-0.063-0.036-0.117-0.072-0.171-0.099c-0.063-0.036-0.117-0.072-0.18-0.108c-0.108-0.072-0.225-0.144-0.333-0.225
                                c-0.216-0.144-0.432-0.306-0.639-0.477c-0.207-0.162-0.405-0.342-0.594-0.531c-0.189-0.18-0.378-0.378-0.549-0.576
                                c-0.045-0.054-0.09-0.108-0.126-0.153c-0.045-0.054-0.09-0.108-0.126-0.162c-0.09-0.108-0.171-0.207-0.243-0.315
                                c-0.081-0.108-0.153-0.225-0.234-0.333c-0.072-0.108-0.144-0.225-0.207-0.333c-0.036-0.054-0.072-0.117-0.108-0.171
                                c-0.027-0.054-0.063-0.117-0.099-0.171c-0.063-0.117-0.135-0.234-0.198-0.342c-0.126-0.234-0.252-0.468-0.369-0.702
                                c-0.063-0.117-0.126-0.234-0.189-0.351c-0.054-0.117-0.117-0.234-0.171-0.36c-0.117-0.234-0.234-0.477-0.342-0.711
                                c-0.108-0.243-0.216-0.486-0.324-0.729c-0.099-0.243-0.198-0.486-0.297-0.738c-0.054-0.126-0.099-0.252-0.144-0.369
                                c-0.045-0.126-0.09-0.252-0.135-0.378c-0.09-0.243-0.18-0.495-0.261-0.747c-0.171-0.504-0.324-1.008-0.459-1.512
                                s-0.261-1.017-0.378-1.521c-0.216-1.026-0.387-2.061-0.495-3.105c-0.063-0.522-0.099-1.044-0.126-1.566
                                c-0.018-0.27-0.027-0.531-0.036-0.801c-0.009-0.261-0.009-0.522-0.009-0.792c0-0.531,0.018-1.062,0.045-1.593
                                c0.009-0.27,0.027-0.531,0.054-0.801c0.018-0.261,0.045-0.522,0.072-0.792c0.117-1.053,0.288-2.097,0.513-3.123
                                c0.117-0.513,0.243-1.017,0.378-1.521c0.144-0.513,0.297-1.008,0.459-1.512c0.171-0.495,0.351-0.99,0.54-1.485
                                c0.099-0.243,0.198-0.486,0.306-0.729c0.099-0.243,0.207-0.486,0.324-0.729c0.054-0.117,0.108-0.243,0.162-0.36
                                c0.063-0.117,0.117-0.243,0.18-0.36c0.054-0.117,0.117-0.234,0.171-0.36c0.063-0.117,0.126-0.234,0.189-0.351
                                c0.117-0.234,0.243-0.468,0.378-0.702c0.063-0.117,0.126-0.225,0.198-0.342c0.036-0.054,0.063-0.117,0.099-0.171
                                c0.018-0.027,0.036-0.054,0.054-0.09c0.018-0.027,0.036-0.054,0.054-0.081c0.063-0.117,0.135-0.225,0.216-0.333
                                c0.036-0.054,0.072-0.108,0.108-0.171c0.045-0.054,0.081-0.108,0.117-0.162c0.081-0.108,0.162-0.207,0.243-0.315
                                c0.081-0.099,0.171-0.207,0.261-0.306c0.171-0.198,0.351-0.387,0.54-0.567c0.189-0.189,0.387-0.36,0.594-0.522
                                c0.108-0.09,0.207-0.171,0.315-0.252c0.054-0.036,0.108-0.072,0.162-0.117c0.054-0.036,0.108-0.072,0.162-0.108
                                c0.225-0.153,0.45-0.288,0.684-0.423c0.225-0.126,0.459-0.243,0.702-0.351c0.243-0.108,0.486-0.207,0.738-0.297
                                c0.117-0.045,0.243-0.09,0.378-0.126c0.063-0.018,0.126-0.036,0.189-0.054c0.063-0.018,0.126-0.036,0.189-0.054
                                c0.261-0.072,0.522-0.126,0.783-0.171c0.261-0.045,0.522-0.081,0.783-0.099c0.135-0.018,0.27-0.027,0.405-0.027
                                c0.063,0,0.126-0.009,0.198-0.009c0.063,0,0.135,0,0.198,0"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M470.284,473.607c-0.018,0-0.036,0-0.045,0c-0.018,0-0.036,0-0.054,0
                                c-0.018,0-0.036,0-0.045,0c-0.018,0-0.036,0-0.054,0c-0.018,0-0.036,0-0.054,0c-0.045,0-0.099-0.009-0.144-0.009
                                c-0.063,0-0.135,0-0.198-0.009c-0.063,0-0.126-0.009-0.189-0.018c-0.144-0.009-0.279-0.027-0.414-0.045
                                c-0.126-0.009-0.243-0.027-0.369-0.054c-0.252-0.045-0.504-0.099-0.756-0.162c-0.252-0.063-0.504-0.144-0.756-0.234
                                c-0.126-0.045-0.261-0.099-0.387-0.144c-0.144-0.063-0.297-0.126-0.441-0.198c-0.27-0.126-0.531-0.261-0.783-0.414
                                c-0.198-0.117-0.387-0.243-0.567-0.369c-0.18-0.126-0.36-0.27-0.54-0.405c-0.081-0.072-0.162-0.135-0.243-0.207
                                c-0.117-0.099-0.225-0.207-0.333-0.315c-0.099-0.09-0.189-0.189-0.288-0.288c-0.081-0.09-0.171-0.18-0.252-0.279
                                c-0.09-0.099-0.171-0.207-0.261-0.306c-0.072-0.099-0.153-0.207-0.225-0.306c-0.054-0.072-0.108-0.144-0.153-0.216
                                c-0.054-0.072-0.099-0.144-0.144-0.216c-0.045-0.072-0.09-0.153-0.135-0.225c-0.018-0.027-0.036-0.045-0.054-0.072
                                c-0.018-0.036-0.036-0.063-0.054-0.09c-0.009-0.036-0.027-0.063-0.045-0.09s-0.036-0.054-0.054-0.081
                                c-0.018-0.036-0.036-0.072-0.054-0.099c-0.045-0.081-0.09-0.162-0.135-0.243c-0.063-0.117-0.135-0.243-0.198-0.36
                                c-0.063-0.108-0.117-0.216-0.18-0.333c-0.243-0.459-0.468-0.927-0.693-1.404c-0.216-0.477-0.423-0.954-0.612-1.44
                                c-0.189-0.486-0.369-0.972-0.531-1.467c-0.162-0.495-0.315-0.99-0.45-1.485c-0.135-0.504-0.261-1.008-0.369-1.512
                                c-0.117-0.513-0.207-1.026-0.297-1.539c-0.081-0.522-0.153-1.035-0.207-1.557c-0.063-0.639-0.117-1.287-0.135-1.935
                                c-0.018-0.396-0.027-0.801-0.027-1.197s0.009-0.792,0.027-1.188c0.027-0.648,0.072-1.296,0.144-1.935
                                c0.054-0.522,0.126-1.035,0.207-1.548c0.045-0.261,0.09-0.522,0.135-0.783c0.054-0.252,0.099-0.504,0.162-0.756
                                c0.108-0.522,0.243-1.044,0.387-1.557c0.135-0.495,0.279-0.981,0.441-1.458c0.162-0.495,0.342-0.981,0.531-1.458
                                c0.198-0.486,0.396-0.963,0.612-1.431c0.216-0.468,0.45-0.936,0.693-1.395c0.054-0.108,0.117-0.216,0.171-0.324
                                c0.063-0.126,0.135-0.243,0.198-0.36c0.045-0.081,0.09-0.162,0.135-0.243c0.027-0.036,0.045-0.063,0.063-0.099
                                c0.018-0.027,0.036-0.054,0.045-0.09c0.018-0.027,0.036-0.054,0.054-0.081s0.036-0.054,0.054-0.081
                                c0-0.009,0.009-0.027,0.018-0.036c0.009-0.018,0.018-0.036,0.027-0.054c0.036-0.054,0.072-0.108,0.108-0.162
                                c0.036-0.054,0.072-0.108,0.108-0.171c0.072-0.108,0.144-0.207,0.225-0.315c0.153-0.207,0.315-0.414,0.486-0.612
                                c0.171-0.189,0.351-0.378,0.531-0.558c0.117-0.108,0.225-0.216,0.342-0.315c0.081-0.072,0.162-0.144,0.243-0.207
                                c0.108-0.09,0.216-0.171,0.333-0.252c0.108-0.081,0.225-0.162,0.342-0.243c0.108-0.081,0.234-0.153,0.351-0.225
                                c0.135-0.081,0.27-0.162,0.405-0.234c0.135-0.072,0.27-0.144,0.414-0.207c0.153-0.072,0.306-0.144,0.459-0.207
                                c0.135-0.054,0.27-0.108,0.405-0.153c0.126-0.045,0.252-0.09,0.378-0.126c0.126-0.036,0.252-0.072,0.378-0.108
                                c0.126-0.036,0.252-0.063,0.378-0.09c0.126-0.027,0.252-0.054,0.378-0.072c0.054-0.009,0.117-0.018,0.171-0.027
                                c0.063-0.009,0.126-0.018,0.189-0.027c0.063-0.009,0.135-0.018,0.198-0.027c0.072-0.009,0.144-0.018,0.216-0.018
                                c0.036-0.009,0.072-0.009,0.117-0.009c0.036-0.009,0.072-0.009,0.108-0.009s0.072-0.009,0.117-0.009c0.036,0,0.072,0,0.108,0
                                s0.072-0.009,0.108-0.009s0.081,0,0.117,0c0.036,0,0.072,0,0.108,0"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M470.284,435.015c0,0.027,0,0.063,0,0.09c0,0.036,0,0.063,0,0.099
                                c0,0.036,0,0.063,0,0.09s0,0.054,0,0.072"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M470.284,435.366c-0.126,0-0.252,0-0.387,0.009
                                c-0.126,0.009-0.252,0.009-0.378,0.027c-0.252,0.018-0.504,0.054-0.756,0.099c-0.252,0.045-0.495,0.099-0.747,0.162
                                c-0.063,0.018-0.117,0.036-0.18,0.054c-0.063,0.018-0.126,0.036-0.189,0.054c-0.117,0.036-0.243,0.081-0.36,0.126
                                c-0.243,0.09-0.477,0.18-0.702,0.288s-0.45,0.225-0.675,0.351c-0.216,0.126-0.432,0.261-0.639,0.405
                                c-0.099,0.081-0.207,0.153-0.306,0.234c-0.054,0.036-0.099,0.072-0.153,0.117c-0.045,0.036-0.099,0.081-0.144,0.117
                                c-0.198,0.171-0.387,0.342-0.567,0.522c-0.18,0.171-0.351,0.36-0.513,0.558c-0.162,0.189-0.315,0.396-0.468,0.603
                                c-0.072,0.099-0.144,0.207-0.207,0.315c-0.036,0.054-0.072,0.108-0.108,0.162c-0.009,0.027-0.027,0.054-0.045,0.081
                                c-0.009,0.018-0.018,0.027-0.027,0.045c-0.009,0.009-0.018,0.027-0.027,0.036c-0.252,0.441-0.504,0.891-0.738,1.341
                                c-0.234,0.45-0.45,0.909-0.666,1.368c-0.414,0.918-0.783,1.863-1.098,2.826c-0.162,0.486-0.306,0.972-0.441,1.458
                                c-0.072,0.252-0.135,0.495-0.198,0.747c-0.027,0.126-0.054,0.252-0.09,0.369c-0.027,0.126-0.054,0.252-0.081,0.378
                                c-0.216,0.999-0.378,1.998-0.486,3.015c-0.054,0.504-0.09,1.008-0.117,1.521c-0.027,0.504-0.045,1.017-0.045,1.53
                                c0,0.252,0,0.513,0.009,0.765c0.009,0.252,0.018,0.513,0.027,0.765c0.027,0.513,0.072,1.017,0.126,1.53
                                c0.027,0.252,0.054,0.504,0.09,0.756c0.018,0.135,0.027,0.261,0.054,0.387c0.018,0.126,0.036,0.252,0.054,0.378
                                c0.081,0.504,0.171,0.999,0.279,1.503c0.108,0.495,0.225,0.99,0.36,1.476c0.135,0.486,0.279,0.972,0.432,1.458
                                c0.324,0.963,0.693,1.908,1.107,2.844c0.054,0.117,0.108,0.225,0.162,0.342c0.054,0.117,0.108,0.234,0.162,0.351
                                c0.117,0.225,0.234,0.459,0.351,0.684c0.234,0.45,0.477,0.9,0.738,1.341c0.009,0.018,0.018,0.027,0.027,0.045
                                c0,0.009,0.009,0.027,0.018,0.036c0.018,0.027,0.036,0.054,0.054,0.081c0.027,0.054,0.063,0.108,0.099,0.162
                                c0.072,0.108,0.135,0.216,0.216,0.324c0.036,0.054,0.072,0.108,0.108,0.153c0.036,0.054,0.081,0.108,0.117,0.153
                                c0.081,0.108,0.153,0.207,0.234,0.306c0.171,0.189,0.342,0.378,0.522,0.558c0.171,0.18,0.36,0.351,0.558,0.513
                                c0.189,0.171,0.396,0.324,0.603,0.468c0.054,0.036,0.108,0.081,0.162,0.108c0.054,0.036,0.108,0.072,0.162,0.108
                                c0.108,0.072,0.216,0.135,0.324,0.198c0.216,0.126,0.441,0.252,0.675,0.351c0.225,0.108,0.468,0.207,0.702,0.297
                                c0.117,0.045,0.243,0.081,0.36,0.126c0.063,0.018,0.126,0.036,0.189,0.054c0.063,0.018,0.117,0.036,0.18,0.054
                                c0.252,0.063,0.504,0.117,0.756,0.162c0.243,0.045,0.504,0.081,0.756,0.099c0.126,0.018,0.252,0.027,0.378,0.027
                                c0.126,0.009,0.261,0.009,0.387,0.009"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M470.284,473.256c0,0.018,0,0.045,0,0.072s0,0.063,0,0.09
                                c0,0.036,0,0.063,0,0.099s0,0.063,0,0.09"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M461.374,443.241c-0.09,0.216-0.189,0.432-0.279,0.648
                                c-0.081,0.225-0.171,0.441-0.252,0.657c-0.171,0.441-0.324,0.891-0.468,1.341c-0.144,0.45-0.27,0.9-0.387,1.359
                                c-0.126,0.459-0.234,0.927-0.333,1.395c-0.018,0.108-0.045,0.234-0.063,0.351c-0.027,0.117-0.045,0.234-0.072,0.351
                                c-0.036,0.234-0.081,0.468-0.117,0.702c-0.072,0.468-0.126,0.945-0.18,1.422c-0.045,0.468-0.081,0.945-0.099,1.422
                                c-0.018,0.234-0.027,0.477-0.027,0.711c-0.009,0.117-0.009,0.243-0.009,0.36s0,0.243,0,0.36c0,0.954,0.045,1.899,0.135,2.844
                                c0.099,0.936,0.243,1.872,0.432,2.79c0.09,0.468,0.198,0.927,0.315,1.386c0.126,0.459,0.252,0.909,0.396,1.368
                                c0.072,0.225,0.144,0.45,0.225,0.675c0.036,0.117,0.081,0.225,0.117,0.342c0.045,0.108,0.09,0.225,0.126,0.333
                                c0.09,0.225,0.171,0.45,0.261,0.666c0.09,0.225,0.18,0.441,0.279,0.657"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M461.194,465.426c-0.099-0.225-0.189-0.441-0.279-0.666
                                c-0.09-0.216-0.18-0.441-0.261-0.666c-0.045-0.117-0.09-0.225-0.126-0.342c-0.045-0.108-0.081-0.225-0.126-0.333
                                c-0.072-0.225-0.153-0.459-0.225-0.684c-0.144-0.459-0.27-0.909-0.387-1.368c-0.126-0.468-0.225-0.927-0.324-1.386
                                c-0.189-0.927-0.333-1.863-0.423-2.808c-0.099-0.945-0.144-1.899-0.144-2.853c0-0.117,0-0.243,0-0.36s0.009-0.243,0.009-0.36
                                c0-0.243,0.009-0.477,0.027-0.72c0.018-0.477,0.054-0.954,0.108-1.431c0.045-0.468,0.108-0.945,0.18-1.422
                                c0.036-0.234,0.072-0.468,0.117-0.702c0.018-0.117,0.036-0.234,0.063-0.36c0.018-0.117,0.045-0.234,0.072-0.351
                                c0.189-0.936,0.432-1.854,0.72-2.754c0.144-0.459,0.297-0.9,0.459-1.341c0.081-0.225,0.171-0.45,0.261-0.666
                                s0.18-0.423,0.279-0.648v-0.009"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M461.544,465.345c0-0.009-0.009-0.027-0.009-0.045
                                c0-0.018,0-0.027-0.009-0.045c0-0.018,0-0.036,0-0.045c0-0.018-0.009-0.036-0.009-0.054c0-0.009,0-0.027,0-0.045
                                s-0.009-0.027-0.009-0.045s0-0.036,0-0.054c-0.009-0.036-0.009-0.081-0.018-0.126c0-0.045,0-0.099-0.009-0.144
                                c0-0.054,0-0.108-0.009-0.171c0-0.054,0-0.117,0-0.18c0-0.063-0.009-0.126-0.009-0.18c0-0.018,0-0.036,0.009-0.054
                                c0-0.009,0-0.027,0-0.045c0-0.009,0-0.027,0-0.045c0-0.009,0-0.027,0-0.045c0-0.063,0-0.126,0-0.18c0-0.252,0-0.495,0-0.738
                                c0.009-0.981,0.018-1.962,0.027-2.943c0.009-0.99,0.009-1.971,0.018-2.952c0-0.981,0-1.962,0-2.943c0-0.981,0-1.962,0-2.943
                                c-0.009-0.981-0.009-1.962-0.018-2.943c0-0.441-0.009-0.882-0.009-1.323c-0.009-0.54-0.009-1.089-0.018-1.629
                                c0-0.243,0-0.486,0-0.729c0-0.063,0-0.126,0-0.189c0-0.018,0-0.027,0-0.045c-0.009-0.018-0.009-0.027-0.009-0.045
                                c0-0.036,0-0.063,0.009-0.09c0-0.036,0-0.063,0-0.099c0-0.027,0-0.054,0-0.09c0-0.027,0-0.063,0-0.09s0.009-0.063,0.009-0.09
                                s0-0.045,0-0.072c0.009-0.054,0.009-0.108,0.018-0.171c0-0.027,0-0.054,0-0.081c0.009-0.045,0.009-0.099,0.018-0.153
                                c0-0.018,0.009-0.045,0.009-0.063c0-0.027,0-0.045,0.009-0.072c0-0.027,0-0.045,0.009-0.072"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M470.284,473.256c0.126,0,0.252,0,0.378-0.009
                                c0.126,0,0.252-0.009,0.369-0.018c0.252-0.027,0.504-0.054,0.747-0.099c0.126-0.018,0.243-0.045,0.369-0.072
                                c0.063-0.018,0.126-0.027,0.18-0.045c0.063-0.009,0.126-0.027,0.189-0.045c0.243-0.063,0.477-0.135,0.711-0.225
                                c0.234-0.081,0.468-0.171,0.693-0.279c0.225-0.099,0.441-0.216,0.657-0.333c0.117-0.063,0.216-0.126,0.324-0.189
                                c0.054-0.036,0.108-0.072,0.162-0.108c0.054-0.036,0.108-0.063,0.153-0.099c0.207-0.144,0.414-0.297,0.603-0.45
                                c0.189-0.162,0.378-0.324,0.558-0.495c0.18-0.171,0.342-0.351,0.513-0.54c0.081-0.099,0.162-0.189,0.234-0.288
                                c0.045-0.054,0.081-0.099,0.117-0.153c0.036-0.045,0.081-0.099,0.117-0.153c0.144-0.198,0.279-0.405,0.414-0.621
                                c0.126-0.207,0.243-0.432,0.36-0.648c0.108-0.225,0.207-0.45,0.297-0.684c0.045-0.117,0.09-0.234,0.135-0.351
                                c0.018-0.063,0.036-0.117,0.054-0.18s0.036-0.117,0.054-0.18c0.072-0.243,0.135-0.477,0.189-0.729
                                c0.045-0.243,0.09-0.486,0.117-0.729c0.027-0.252,0.045-0.495,0.054-0.747c0-0.063,0.009-0.126,0.009-0.189v-0.009v-0.009
                                c0-0.009,0-0.018,0-0.027c0-0.018,0-0.027,0-0.045c0-0.036,0-0.063,0-0.099c0-0.117,0-0.243,0.009-0.369
                                c0-0.252,0-0.504,0.009-0.756c0.009-0.999,0.027-1.998,0.036-2.997c0.018-2.007,0.027-4.005,0.027-6.003
                                c0-2.007-0.009-4.005-0.027-6.012c-0.009-0.999-0.027-1.998-0.036-2.997c-0.009-0.252-0.009-0.504-0.009-0.756
                                c-0.009-0.126-0.009-0.243-0.009-0.369c0-0.036,0-0.063,0-0.099c0-0.009,0-0.018,0-0.018c0-0.009,0-0.018,0-0.027
                                c0-0.018,0-0.027,0-0.045c-0.009-0.063-0.009-0.126-0.009-0.189c-0.009-0.252-0.036-0.495-0.063-0.747
                                c-0.027-0.243-0.072-0.486-0.126-0.729c-0.045-0.243-0.108-0.477-0.18-0.72c-0.036-0.117-0.081-0.234-0.117-0.351
                                c-0.018-0.054-0.045-0.117-0.063-0.171c-0.027-0.063-0.045-0.117-0.072-0.18c-0.09-0.234-0.189-0.459-0.306-0.675
                                c-0.108-0.225-0.234-0.441-0.36-0.648c-0.126-0.216-0.27-0.423-0.414-0.621c-0.072-0.099-0.144-0.198-0.225-0.288
                                c-0.036-0.054-0.081-0.099-0.117-0.153c-0.045-0.045-0.081-0.09-0.126-0.135c-0.162-0.189-0.333-0.369-0.513-0.54
                                c-0.18-0.171-0.36-0.342-0.558-0.495c-0.189-0.153-0.387-0.297-0.594-0.441c-0.099-0.072-0.207-0.135-0.315-0.198
                                c-0.045-0.036-0.099-0.072-0.153-0.099c-0.054-0.036-0.108-0.063-0.162-0.099c-0.225-0.117-0.441-0.234-0.666-0.333
                                s-0.459-0.198-0.693-0.279c-0.225-0.081-0.468-0.153-0.702-0.216c-0.126-0.036-0.243-0.063-0.369-0.09
                                c-0.054-0.009-0.117-0.027-0.18-0.036c-0.063-0.009-0.126-0.027-0.18-0.036c-0.252-0.045-0.495-0.072-0.747-0.09
                                c-0.126-0.018-0.252-0.027-0.369-0.027c-0.126-0.009-0.252-0.009-0.378-0.009"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M479.544,442.809c0.027,0.108,0.045,0.225,0.054,0.342
                                c0.027,0.252,0.045,0.504,0.045,0.756c0.018,0.864,0.027,1.737,0.045,2.601c0.009,0.873,0.018,1.737,0.027,2.601
                                c0.018,1.737,0.027,3.465,0.027,5.202s-0.009,3.465-0.027,5.202c-0.009,0.864-0.018,1.737-0.027,2.601
                                c-0.018,0.864-0.027,1.737-0.045,2.601c0,0.252-0.018,0.504-0.045,0.756c-0.027,0.252-0.063,0.504-0.108,0.747
                                c-0.072,0.423-0.18,0.846-0.315,1.251c-0.018,0.072-0.045,0.144-0.072,0.216c-0.171,0.477-0.378,0.936-0.621,1.377
                                c-0.162,0.297-0.342,0.585-0.558,0.864c-0.045,0.09-0.108,0.18-0.189,0.261c-0.018,0.045-0.054,0.09-0.09,0.135
                                c-0.306,0.405-0.657,0.774-1.026,1.116c-0.369,0.342-0.774,0.657-1.197,0.927c-0.108,0.072-0.216,0.135-0.324,0.189
                                c-0.324,0.207-0.657,0.387-0.999,0.54c-0.459,0.207-0.945,0.378-1.431,0.504c-0.486,0.126-0.99,0.216-1.485,0.261
                                c-0.504,0.054-1.017,0.063-1.521,0.027c-0.504-0.036-0.999-0.108-1.494-0.225c-0.351-0.081-0.702-0.18-1.035-0.315
                                c-0.135-0.036-0.27-0.09-0.405-0.144c-0.468-0.189-0.918-0.423-1.35-0.684c-0.432-0.261-0.837-0.567-1.224-0.891
                                c-0.378-0.333-0.738-0.693-1.062-1.08s-0.612-0.81-0.873-1.242c-0.333-0.558-0.648-1.134-0.936-1.719
                                c-0.297-0.594-0.576-1.188-0.828-1.791c-0.513-1.206-0.945-2.448-1.287-3.708c-0.351-1.269-0.612-2.556-0.783-3.852
                                c-0.171-1.305-0.261-2.61-0.261-3.924s0.09-2.619,0.261-3.924c0.171-1.296,0.432-2.583,0.783-3.852
                                c0.342-1.26,0.774-2.502,1.287-3.708c0.252-0.603,0.531-1.197,0.828-1.782c0.288-0.585,0.603-1.161,0.936-1.728
                                c0.261-0.432,0.549-0.846,0.873-1.233c0.324-0.387,0.684-0.756,1.062-1.08c0.387-0.333,0.792-0.63,1.224-0.9
                                c0.432-0.261,0.882-0.495,1.35-0.684c0.468-0.189,0.945-0.342,1.44-0.459c0.495-0.117,0.99-0.189,1.494-0.225
                                c0.504-0.027,1.017-0.027,1.521,0.027c0.351,0.036,0.702,0.09,1.053,0.171c0.144,0.018,0.288,0.054,0.432,0.09
                                c0.486,0.135,0.972,0.297,1.431,0.504c0.459,0.207,0.9,0.45,1.323,0.729c0.423,0.279,0.828,0.585,1.197,0.927
                                c0.369,0.342,0.72,0.72,1.026,1.116c0.036,0.045,0.072,0.09,0.09,0.135c0.171,0.207,0.324,0.423,0.45,0.648
                                c0.027,0.009,0.036,0.027,0.027,0.045c0.108,0.144,0.189,0.288,0.27,0.432c0.243,0.441,0.45,0.9,0.621,1.377
                                c0.171,0.477,0.297,0.972,0.387,1.467c0.018,0.108,0.036,0.216,0.045,0.333C479.544,442.755,479.553,442.782,479.544,442.809z"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M470.284,472.698c0-0.297,0-0.549,0-0.783c0-0.027,0-0.054,0-0.072
                                c0-1.152,0-1.863,0-2.718"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M470.284,469.125c0.045,0,0.099,0,0.144,0c0.054,0,0.099,0,0.144,0
                                c0.054-0.009,0.099-0.009,0.144-0.009c0.054-0.009,0.099-0.009,0.153-0.009c0.045-0.009,0.09-0.009,0.144-0.018
                                c0.045-0.009,0.09-0.009,0.144-0.018c0.045-0.009,0.09-0.009,0.144-0.018c0.045-0.009,0.09-0.018,0.144-0.027
                                c0.09-0.018,0.189-0.036,0.279-0.054c0.099-0.018,0.189-0.045,0.288-0.072c0.09-0.027,0.189-0.054,0.279-0.081
                                s0.18-0.054,0.279-0.09c0.09-0.036,0.18-0.072,0.27-0.108s0.18-0.072,0.261-0.117c0.09-0.036,0.18-0.081,0.261-0.126
                                c0.09-0.045,0.171-0.09,0.261-0.135c0.171-0.099,0.333-0.207,0.486-0.315c0.162-0.108,0.315-0.225,0.468-0.351
                                c0.144-0.126,0.288-0.261,0.432-0.396c0.135-0.135,0.27-0.279,0.387-0.423c0.063-0.081,0.126-0.153,0.189-0.234
                                c0.054-0.072,0.117-0.153,0.171-0.234c0.054-0.081,0.108-0.153,0.162-0.243c0.054-0.081,0.099-0.162,0.153-0.243
                                c0.045-0.09,0.09-0.171,0.135-0.261c0.045-0.081,0.09-0.171,0.126-0.261c0.045-0.081,0.081-0.171,0.117-0.261
                                c0.045-0.09,0.072-0.18,0.108-0.27c0.018-0.045,0.036-0.099,0.045-0.144c0.018-0.045,0.036-0.09,0.045-0.135
                                c0.018-0.045,0.036-0.09,0.045-0.144c0.018-0.045,0.027-0.09,0.036-0.135c0.018-0.045,0.027-0.099,0.036-0.144
                                c0.018-0.045,0.027-0.09,0.036-0.144c0.009-0.045,0.018-0.09,0.027-0.135c0.009-0.054,0.018-0.099,0.027-0.144
                                c0.009-0.054,0.018-0.099,0.027-0.144c0-0.054,0.009-0.099,0.018-0.144c0-0.054,0.009-0.099,0.018-0.144
                                c0-0.054,0.009-0.099,0.009-0.153c0-0.045,0.009-0.09,0.009-0.144c0-0.045,0.009-0.09,0.009-0.144c0-0.045,0-0.099,0-0.144
                                c0-0.045,0-0.099,0-0.144c0.009-0.054,0.009-0.099,0.009-0.144c0-0.054,0-0.099,0-0.144c0-0.054,0-0.099,0-0.153
                                c0-0.045,0-0.09,0-0.144c0-0.045,0.009-0.099,0.009-0.144c0-0.045,0-0.099,0-0.144c0-0.099,0-0.198,0-0.297
                                c0-0.09,0.009-0.189,0.009-0.288s0-0.189,0-0.288s0-0.198,0.009-0.297c0-0.09,0-0.189,0-0.288s0-0.189,0-0.288
                                c0.009-0.099,0.009-0.198,0.009-0.297c0-0.189,0-0.387,0-0.576c0.009-0.198,0.009-0.387,0.009-0.585s0-0.387,0.009-0.585
                                c0-0.189,0-0.387,0-0.576c0-0.198,0-0.396,0-0.585c0.009-0.198,0.009-0.387,0.009-0.585c0-0.189,0-0.387,0-0.576
                                c0-0.198,0-0.396,0-0.585c0-0.198,0-0.387,0-0.585c0-0.189,0-0.387,0-0.585c0-0.189,0-0.387,0-0.576c0-0.198,0-0.387,0-0.585
                                s0-0.387-0.009-0.585c0-0.189,0-0.387,0-0.576c0-0.198,0-0.387,0-0.585c-0.009-0.198-0.009-0.387-0.009-0.585
                                c0-0.189,0-0.387-0.009-0.576c0-0.099,0-0.198,0-0.297c0-0.09,0-0.189,0-0.288s0-0.198-0.009-0.288c0-0.099,0-0.198,0-0.297
                                s0-0.189,0-0.288c-0.009-0.099-0.009-0.198-0.009-0.288c0-0.099,0-0.198,0-0.297s-0.009-0.189-0.009-0.288
                                c0-0.054,0-0.099,0-0.144c0-0.054,0-0.099,0-0.144c0-0.054,0-0.099,0-0.153c0-0.045-0.009-0.09-0.009-0.144
                                c0-0.045,0-0.099,0-0.144c0-0.045,0-0.099,0-0.144c0-0.054,0-0.099,0-0.144c0-0.054,0-0.099-0.009-0.144c0-0.054,0-0.099,0-0.153
                                c0-0.045,0-0.09,0-0.144c0-0.045-0.009-0.099-0.009-0.144c0-0.045-0.009-0.099-0.009-0.144c0-0.045-0.009-0.099-0.009-0.144
                                c-0.009-0.054-0.018-0.099-0.018-0.144c-0.009-0.054-0.018-0.099-0.018-0.144c-0.009-0.054-0.018-0.099-0.027-0.144
                                c-0.009-0.054-0.018-0.099-0.027-0.144c-0.009-0.054-0.018-0.099-0.027-0.144c-0.009-0.045-0.018-0.099-0.036-0.144
                                c-0.009-0.045-0.018-0.09-0.036-0.144c-0.009-0.045-0.018-0.09-0.036-0.135c-0.009-0.045-0.027-0.09-0.045-0.144
                                c-0.009-0.045-0.027-0.09-0.045-0.135c-0.009-0.045-0.027-0.09-0.045-0.135c-0.027-0.09-0.063-0.18-0.099-0.27
                                c-0.045-0.09-0.081-0.18-0.117-0.27c-0.045-0.09-0.09-0.18-0.135-0.261c-0.045-0.09-0.09-0.171-0.135-0.252
                                c-0.054-0.09-0.099-0.171-0.153-0.252c-0.054-0.081-0.108-0.162-0.162-0.243c-0.054-0.081-0.117-0.162-0.171-0.234
                                c-0.063-0.081-0.126-0.153-0.189-0.225c-0.054-0.072-0.126-0.153-0.189-0.225c-0.063-0.063-0.135-0.135-0.198-0.207
                                c-0.144-0.135-0.288-0.27-0.432-0.387c-0.153-0.126-0.306-0.243-0.468-0.36c-0.153-0.108-0.315-0.216-0.486-0.306
                                c-0.171-0.099-0.342-0.189-0.522-0.27c-0.081-0.045-0.171-0.081-0.261-0.117c-0.09-0.036-0.18-0.072-0.27-0.108
                                c-0.099-0.027-0.189-0.063-0.279-0.09c-0.09-0.027-0.189-0.054-0.279-0.081c-0.099-0.027-0.189-0.045-0.288-0.072
                                c-0.09-0.018-0.189-0.036-0.279-0.054c-0.054-0.009-0.099-0.018-0.144-0.027c-0.054,0-0.099-0.009-0.144-0.018
                                c-0.054-0.009-0.099-0.009-0.144-0.018c-0.054,0-0.099-0.009-0.144-0.009c-0.054-0.009-0.099-0.009-0.153-0.018
                                c-0.045,0-0.09,0-0.144,0c-0.045-0.009-0.09-0.009-0.144-0.009c-0.045,0-0.099,0-0.144,0"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M470.284,439.497c0-0.846,0-1.566,0-2.718c0-0.018,0-0.045,0-0.063
                                c0-0.234,0-0.495,0-0.792"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M461.724,443.313c-0.009,0.117-0.027,0.225-0.036,0.342
                                c0,0.054-0.009,0.117-0.009,0.171c-0.009,0.054-0.009,0.117-0.009,0.171c-0.009,0.117-0.009,0.234-0.009,0.342
                                c0,0.036,0,0.063,0,0.09c0,0.018,0,0.027,0,0.045c0,0.009,0,0.027,0,0.045c0,0.054,0,0.108,0,0.171
                                c0,0.459,0.009,0.909,0.009,1.368c0.009,0.918,0.018,1.836,0.018,2.754c0.009,0.918,0.009,1.836,0.018,2.754
                                c0,0.909,0,1.827,0,2.745s0,1.836,0,2.754c-0.009,0.918-0.009,1.836-0.018,2.745c0,0.918-0.009,1.836-0.018,2.754
                                c0,0.459-0.009,0.918-0.009,1.377c0,0.054,0,0.108,0,0.171c0,0.009,0,0.027,0,0.045c0,0.009,0,0.027,0,0.036
                                c0,0.036,0,0.063,0,0.09c0,0.117,0,0.225,0.009,0.342c0.009,0.234,0.027,0.459,0.054,0.684"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M470.284,439.497c-0.018,0-0.027,0-0.045,0s-0.027,0-0.045,0
                                c-0.009,0-0.027,0-0.045,0c-0.009,0-0.027,0-0.045,0c-0.009,0-0.027,0-0.045,0c-0.009,0-0.027,0-0.036,0
                                c-0.018,0-0.036,0.009-0.045,0.009c-0.018,0-0.036,0-0.045,0c-0.018,0-0.036,0-0.045,0c-0.018,0-0.036,0-0.045,0
                                c-0.018,0.009-0.036,0.009-0.045,0.009c-0.018,0-0.036,0-0.045,0c-0.018,0-0.036,0-0.045,0.009c-0.018,0-0.036,0-0.045,0
                                c-0.018,0-0.036,0-0.045,0.009c-0.018,0-0.036,0-0.045,0c-0.018,0-0.036,0-0.045,0.009c-0.018,0-0.036,0-0.045,0
                                c-0.018,0-0.036,0.009-0.045,0.009c-0.018,0-0.036,0-0.045,0c-0.018,0.009-0.036,0.009-0.045,0.009
                                c-0.018,0-0.036,0.009-0.045,0.009c-0.018,0-0.036,0-0.045,0.009c-0.018,0-0.036,0-0.045,0c-0.018,0.009-0.036,0.009-0.045,0.009
                                c-0.018,0.009-0.036,0.009-0.045,0.009c-0.018,0-0.036,0.009-0.054,0.009c-0.009,0-0.027,0.009-0.045,0.009
                                c-0.009,0-0.027,0.009-0.045,0.009c-0.009,0-0.027,0.009-0.045,0.009c-0.009,0-0.027,0.009-0.045,0.009
                                c-0.009,0-0.027,0.009-0.045,0.009s-0.027,0.009-0.045,0.009c-0.018,0.009-0.027,0.009-0.045,0.009
                                c-0.018,0.009-0.027,0.009-0.045,0.018c-0.018,0-0.027,0-0.045,0.009c-0.018,0-0.027,0.009-0.045,0.009
                                c-0.018,0.009-0.036,0.009-0.045,0.009c-0.018,0.009-0.036,0.009-0.045,0.018c-0.018,0-0.036,0.009-0.045,0.009
                                c-0.018,0.009-0.036,0.009-0.045,0.018c-0.018,0-0.036,0.009-0.045,0.009c-0.018,0.009-0.036,0.009-0.054,0.018
                                c-0.009,0-0.027,0.009-0.045,0.009c-0.009,0.009-0.027,0.009-0.045,0.018c-0.009,0-0.027,0.009-0.045,0.009
                                c-0.009,0.009-0.027,0.009-0.045,0.018c-0.009,0.009-0.027,0.009-0.045,0.018c-0.018,0-0.027,0.009-0.045,0.009
                                c-0.018,0.009-0.027,0.018-0.045,0.018c-0.018,0.009-0.027,0.009-0.045,0.018c-0.135,0.054-0.279,0.108-0.414,0.162
                                c-0.135,0.063-0.279,0.135-0.414,0.207c-0.135,0.072-0.27,0.144-0.405,0.225c-0.135,0.09-0.27,0.18-0.405,0.27
                                c-0.135,0.099-0.261,0.198-0.387,0.306c-0.144,0.126-0.288,0.252-0.423,0.387c-0.144,0.144-0.279,0.288-0.405,0.441
                                c-0.117,0.144-0.234,0.297-0.342,0.45c-0.117,0.171-0.225,0.342-0.324,0.522c-0.099,0.153-0.18,0.324-0.261,0.486
                                c-0.081,0.189-0.162,0.378-0.234,0.576c-0.018,0.072-0.045,0.135-0.072,0.207c-0.027,0.09-0.045,0.18-0.072,0.261
                                c-0.027,0.108-0.054,0.207-0.072,0.315c-0.027,0.117-0.054,0.234-0.072,0.351c-0.009,0.045-0.018,0.09-0.018,0.135
                                c-0.009,0.036-0.009,0.081-0.018,0.117c-0.009,0.036-0.009,0.081-0.018,0.117c0,0.036,0,0.072-0.009,0.108
                                c0,0.036,0,0.072-0.009,0.108c0,0.036,0,0.063,0,0.099c-0.009,0.036-0.009,0.063-0.009,0.099c0,0.027,0,0.054,0,0.081
                                c0,0.036,0,0.063,0,0.09s0,0.045,0,0.072c-0.009,0.027-0.009,0.054-0.009,0.072c0,0.027,0,0.045,0,0.072c0,0.054,0,0.117,0,0.18
                                c0,0.054,0,0.117,0,0.18c0,0.054,0,0.108,0,0.171c0,0.054,0,0.108,0,0.162s0,0.108,0,0.162c0,0.054-0.009,0.108-0.009,0.153
                                c0,0.054,0,0.099,0,0.153c0,0.099,0,0.207,0,0.306s0,0.198,0,0.297c0,0.09,0,0.189,0,0.288c-0.009,0.09-0.009,0.18-0.009,0.27
                                c0,0.207,0,0.405,0,0.603c0,0.189,0,0.378-0.009,0.567c0,0.396,0,0.783,0,1.179c0,0.369-0.009,0.738-0.009,1.107
                                c0,0.396,0,0.783,0,1.179c0,0.369,0,0.747,0,1.116c0,0.027,0,0.054,0,0.081c0,0.378,0,0.756,0,1.134c0,0.396,0,0.792,0,1.188
                                c0,0.378,0.009,0.756,0.009,1.134c0,0.396,0,0.801,0.009,1.197c0,0.189,0,0.378,0,0.567c0,0.207,0,0.405,0,0.603
                                c0.009,0.09,0.009,0.18,0.009,0.27c0,0.099,0,0.198,0,0.288c0,0.099,0,0.198,0,0.297s0,0.207,0,0.306
                                c0,0.054,0.009,0.099,0.009,0.153c0,0.045,0,0.099,0,0.153c0,0.054,0,0.108,0,0.162c0,0.054,0,0.108,0,0.162
                                c0,0.063,0,0.117,0,0.171c0,0.063,0,0.126,0,0.18c0,0.063,0,0.126,0.009,0.189c0,0.018,0,0.036,0,0.054s0,0.036,0,0.063
                                c0,0.018,0,0.045,0,0.063c0,0.027,0,0.054,0,0.081s0.009,0.054,0.009,0.081c0,0.036,0,0.063,0,0.099
                                c0.009,0.027,0.009,0.063,0.009,0.099c0.009,0.036,0.009,0.072,0.018,0.108c0,0.036,0,0.072,0.009,0.108
                                c0.009,0.045,0.009,0.081,0.018,0.126c0,0.045,0.009,0.081,0.018,0.126c0.009,0.045,0.018,0.09,0.027,0.135
                                c0.018,0.117,0.045,0.225,0.072,0.342c0.018,0.099,0.045,0.198,0.072,0.297c0.027,0.081,0.054,0.171,0.081,0.261
                                c0.027,0.072,0.054,0.144,0.081,0.216c0.072,0.189,0.153,0.378,0.243,0.558c0.072,0.162,0.162,0.324,0.252,0.486
                                c0.108,0.171,0.216,0.333,0.333,0.495c0.108,0.153,0.225,0.297,0.342,0.441c0.126,0.153,0.261,0.297,0.405,0.432
                                c0.135,0.135,0.27,0.261,0.423,0.378c0.153,0.126,0.315,0.252,0.477,0.36c0.162,0.117,0.333,0.216,0.504,0.315
                                c0.162,0.09,0.333,0.18,0.504,0.252c0.171,0.081,0.342,0.144,0.513,0.207c0.027,0.009,0.054,0.018,0.081,0.027
                                s0.054,0.018,0.081,0.027c0.018,0.009,0.045,0.018,0.072,0.027c0.027,0.009,0.054,0.018,0.081,0.027s0.054,0.018,0.081,0.027
                                c0.027,0,0.054,0.009,0.081,0.018c0.027,0.009,0.054,0.018,0.081,0.018c0.018,0.009,0.045,0.018,0.072,0.027
                                c0.027,0,0.054,0.009,0.081,0.018s0.054,0.009,0.081,0.018c0.027,0.009,0.054,0.009,0.081,0.018
                                c0.027,0.009,0.054,0.009,0.081,0.018c0.018,0,0.045,0.009,0.072,0.009c0.027,0.009,0.054,0.018,0.081,0.018
                                c0.027,0.009,0.054,0.009,0.081,0.018c0.027,0,0.054,0,0.081,0.009c0.027,0,0.045,0.009,0.072,0.009
                                c0.027,0.009,0.054,0.009,0.081,0.009c0.027,0.009,0.054,0.009,0.081,0.009c0.027,0.009,0.054,0.009,0.081,0.009
                                c0.018,0.009,0.045,0.009,0.072,0.009c0.027,0.009,0.054,0.009,0.081,0.009s0.054,0,0.081,0.009c0.018,0,0.045,0,0.072,0
                                c0.027,0,0.054,0,0.081,0.009c0.027,0,0.054,0,0.072,0c0.027,0,0.054,0,0.081,0s0.054,0,0.072,0c0.027,0,0.054,0,0.081,0"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M470.293,467.766c0,0.009,0,0.009,0,0.018s0,0.009,0,0.018v0.009
                                c0,0.018,0,0.036,0,0.045c0,0.036,0,0.063,0,0.099c0,0.009,0,0.018,0,0.027s0,0.018,0,0.027c0,0.081,0,0.162,0,0.234
                                c0,0.045,0,0.09,0,0.135c0,0.036,0,0.081,0,0.117c-0.009,0.027-0.009,0.054-0.009,0.072c0,0.027,0,0.045,0,0.063s0,0.027,0,0.036
                                c0,0.027,0,0.045,0,0.063s0,0.027,0,0.036c0,0.018,0,0.027,0,0.036s0,0.018,0,0.018c0,0.027,0,0.045,0,0.063
                                c0,0.009,0,0.018,0,0.027v0.009c0,0.027,0,0.045,0,0.063c0,0.009,0,0.018,0,0.018c0,0.009,0,0.009,0,0.018s0,0.018,0,0.027
                                s0,0.018,0,0.027v0.009c0,0.009,0,0.009,0,0.018s0,0.009,0,0.009v0.009c0,0.009,0,0.009,0,0.009"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M470.293,467.766c0.009,0,0.027,0,0.036,0s0.018,0,0.036,0
                                c0.009,0,0.018,0,0.036,0c0.009,0,0.018,0,0.036,0c0.009,0,0.018,0,0.036,0c0.009,0,0.018,0,0.036,0c0.009,0,0.018,0,0.036,0
                                c0.009,0,0.018-0.009,0.036-0.009c0.009,0,0.018,0,0.027,0c0.018,0,0.027,0,0.036,0c0.018,0,0.027,0,0.036,0
                                c0.018,0,0.027-0.009,0.036-0.009c0.018,0,0.027,0,0.036,0c0.018,0,0.027,0,0.036,0c0.018,0,0.027-0.009,0.036-0.009
                                s0.027,0,0.036,0s0.027,0,0.036-0.009c0.009,0,0.027,0,0.036,0s0.027,0,0.036,0c0.009-0.009,0.018-0.009,0.036-0.009
                                c0.009,0,0.018,0,0.036-0.009c0.009,0,0.018,0,0.036,0c0.009,0,0.018,0,0.036-0.009c0.009,0,0.018,0,0.027,0
                                c0.018,0,0.027-0.009,0.036-0.009c0.018,0,0.027,0,0.036-0.009c0.018,0,0.027,0,0.036,0c0.009-0.009,0.027-0.009,0.036-0.009
                                s0.027,0,0.036-0.009c0.081-0.018,0.171-0.036,0.252-0.054s0.171-0.045,0.252-0.063c0.081-0.027,0.162-0.054,0.243-0.081
                                c0.081-0.036,0.162-0.063,0.243-0.099c0.162-0.063,0.315-0.135,0.468-0.216c0.153-0.081,0.297-0.162,0.441-0.261
                                c0.144-0.09,0.288-0.198,0.423-0.306s0.261-0.216,0.387-0.342c0.117-0.117,0.234-0.243,0.351-0.378
                                c0.108-0.126,0.216-0.27,0.306-0.405c0.099-0.144,0.189-0.297,0.27-0.45c0.09-0.144,0.162-0.306,0.225-0.459
                                c0.072-0.162,0.126-0.324,0.18-0.486c0.054-0.162,0.099-0.333,0.135-0.504c0.027-0.162,0.054-0.333,0.072-0.504
                                c0.009-0.09,0.018-0.171,0.027-0.261c0-0.045,0-0.081,0-0.126c0-0.009,0-0.018,0-0.036c0-0.009,0-0.018,0-0.027s0-0.027,0-0.036
                                s0-0.018,0-0.027c0-0.09,0.009-0.18,0.009-0.261c0-0.09,0-0.171,0-0.261c0-0.081,0-0.171,0-0.252
                                c0.009-0.081,0.009-0.171,0.009-0.252c0-0.171,0-0.342,0.009-0.522c0-0.162,0-0.333,0-0.504c0.009-0.342,0.009-0.693,0.009-1.044
                                c0.009-0.333,0.009-0.666,0.009-1.008c0.009-0.342,0.009-0.675,0.009-1.017c0-0.171,0.009-0.351,0.009-0.522
                                c0-0.162,0-0.333,0-0.504c0-0.171,0-0.342,0-0.513c0-0.171,0-0.342,0-0.513c0-0.171,0.009-0.342,0.009-0.513
                                c0-0.171,0-0.342,0-0.513c0-0.009,0-0.027,0-0.036c0-0.171,0-0.342,0-0.513s-0.009-0.342-0.009-0.513c0-0.162,0-0.333,0-0.504
                                c0-0.171,0-0.342,0-0.513c0-0.171,0-0.342,0-0.513s-0.009-0.342-0.009-0.513c0-0.342,0-0.684,0-1.017
                                c-0.009-0.342-0.009-0.675-0.018-1.008c0-0.351,0-0.693-0.009-1.044c0-0.162,0-0.333,0-0.504
                                c-0.009-0.171-0.009-0.342-0.009-0.513c0-0.171-0.009-0.342-0.009-0.504c0-0.18,0-0.351-0.009-0.522c0-0.018,0-0.045,0-0.063
                                c0-0.009,0-0.018,0-0.027c0-0.018,0-0.027,0-0.036s0-0.018,0-0.036c0-0.009,0-0.027,0-0.036c0-0.018,0-0.036,0-0.054
                                c-0.009-0.09-0.009-0.171-0.018-0.252c-0.018-0.171-0.045-0.342-0.072-0.504c-0.036-0.171-0.072-0.342-0.126-0.504
                                c-0.045-0.171-0.108-0.333-0.171-0.495c-0.063-0.162-0.144-0.315-0.225-0.468c-0.081-0.153-0.171-0.297-0.261-0.441
                                c-0.099-0.153-0.207-0.288-0.315-0.423c-0.108-0.135-0.225-0.261-0.351-0.387c-0.126-0.126-0.252-0.234-0.387-0.351
                                c-0.135-0.108-0.27-0.207-0.414-0.306c-0.072-0.045-0.153-0.09-0.225-0.135s-0.153-0.09-0.225-0.135
                                c-0.081-0.036-0.153-0.072-0.234-0.117c-0.081-0.036-0.162-0.072-0.243-0.099c-0.081-0.036-0.162-0.063-0.243-0.099
                                c-0.081-0.027-0.162-0.054-0.243-0.081c-0.081-0.018-0.171-0.045-0.252-0.063c-0.09-0.027-0.171-0.045-0.252-0.063
                                c-0.027,0-0.054-0.009-0.081-0.009c-0.018-0.009-0.045-0.009-0.072-0.018c-0.027,0-0.045-0.009-0.072-0.009
                                c-0.027,0-0.045-0.009-0.072-0.009c-0.027-0.009-0.054-0.009-0.072-0.009c-0.027-0.009-0.054-0.009-0.081-0.009
                                c-0.018-0.009-0.045-0.009-0.072-0.009c-0.027,0-0.054-0.009-0.072-0.009c-0.027,0-0.054,0-0.081-0.009c-0.018,0-0.045,0-0.072,0
                                c-0.027,0-0.045,0-0.072,0c-0.027-0.009-0.054-0.009-0.072-0.009c-0.027,0-0.054,0-0.081,0s-0.045,0-0.072,0"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M470.284,439.497v0.009c0,0.009,0,0.009,0,0.009
                                c0,0.009,0,0.009,0,0.009v0.009v0.009c0,0.009,0,0.009,0,0.018s0,0.018,0,0.018c0,0.009,0,0.018,0,0.027s0,0.009,0,0.018
                                c0,0,0,0.009,0,0.018c0,0.018,0,0.036,0,0.054v0.009c0,0.009,0,0.018,0,0.027c0,0.018,0,0.036,0,0.054c0,0.009,0,0.009,0,0.018
                                s0,0.018,0,0.036c0,0.009,0,0.018,0,0.027c0,0.018,0,0.045,0,0.063c0,0.009,0,0.018,0,0.036s0,0.036,0,0.054
                                c0,0.027,0,0.045,0.009,0.072c0,0.036,0,0.072,0,0.117c0,0.045,0,0.081,0,0.135c0,0.072,0,0.153,0,0.243c0,0.009,0,0.018,0,0.027
                                s0,0.018,0,0.027v0.009c0,0.036,0,0.063,0,0.099c0,0.018,0,0.036,0,0.054c0,0.009,0,0.009,0,0.018s0,0.009,0,0.018
                                c0,0.009,0,0.009,0,0.018"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M470.293,440.856c-0.009,0-0.027,0-0.036,0s-0.027,0-0.036,0
                                s-0.027,0-0.036,0s-0.027,0-0.036,0s-0.027,0-0.036,0s-0.027,0-0.036,0.009c-0.009,0-0.027,0-0.036,0s-0.027,0-0.036,0
                                s-0.027,0-0.036,0s-0.027,0-0.036,0s-0.027,0.009-0.036,0.009c-0.009,0-0.018,0-0.036,0c-0.009,0-0.018,0-0.036,0
                                c-0.009,0-0.018,0.009-0.036,0.009c-0.009,0-0.018,0-0.036,0c-0.009,0-0.018,0-0.036,0c-0.009,0.009-0.018,0.009-0.036,0.009
                                c-0.009,0-0.018,0-0.036,0c-0.009,0.009-0.018,0.009-0.036,0.009c-0.009,0-0.018,0-0.027,0c-0.018,0.009-0.027,0.009-0.036,0.009
                                c-0.018,0-0.027,0-0.036,0.009c-0.018,0-0.027,0-0.036,0c-0.018,0-0.027,0.009-0.036,0.009c-0.018,0-0.027,0-0.036,0
                                c-0.018,0.009-0.027,0.009-0.036,0.009s-0.027,0.009-0.036,0.009s-0.027,0-0.036,0.009c-0.009,0-0.027,0-0.036,0
                                c-0.081,0.018-0.171,0.036-0.252,0.063c-0.081,0.018-0.171,0.045-0.252,0.063c-0.081,0.027-0.162,0.054-0.252,0.081
                                c-0.081,0.036-0.162,0.063-0.243,0.099c-0.072,0.027-0.153,0.063-0.234,0.099c-0.081,0.036-0.153,0.081-0.234,0.117
                                c-0.072,0.045-0.153,0.081-0.225,0.126c-0.072,0.045-0.144,0.09-0.216,0.144c-0.144,0.09-0.288,0.198-0.423,0.306
                                c-0.135,0.108-0.261,0.225-0.387,0.342c-0.126,0.126-0.243,0.252-0.351,0.387c-0.108,0.135-0.216,0.27-0.315,0.414
                                c-0.099,0.144-0.189,0.297-0.27,0.45c-0.081,0.153-0.153,0.306-0.225,0.459c-0.063,0.171-0.126,0.333-0.18,0.504
                                c-0.045,0.162-0.09,0.324-0.126,0.495c-0.027,0.171-0.054,0.342-0.072,0.513c-0.009,0.081-0.018,0.171-0.018,0.252
                                c0,0.045-0.009,0.09-0.009,0.135c0,0.018,0,0.045,0,0.063c0,0.009,0,0.018,0,0.036c0,0.009,0,0.018,0,0.027
                                c0,0.018,0,0.036,0,0.054c0,0.027,0,0.054,0,0.072c0,0.045,0,0.09,0,0.135c0,0.081,0,0.171,0,0.252c0,0.171,0,0.351,0,0.522
                                c0,0.171-0.009,0.351-0.009,0.531c0,0.162,0,0.333,0,0.495c0,0.18,0,0.36,0,0.54c0,0.162,0,0.324,0,0.495
                                c-0.009,0.18-0.009,0.351-0.009,0.531c0,0.171,0,0.333,0,0.495c0,0.171,0,0.342,0,0.513c0,0.18,0,0.351-0.009,0.522
                                c0,0.171,0,0.342,0,0.513c0,0.09,0,0.18,0,0.261c0,0.09,0,0.171,0,0.252c0,0.126,0,0.243,0,0.36
                                c-0.009,0.117-0.009,0.225-0.009,0.342c0,0.108,0,0.225,0,0.333c0,0.081,0,0.171,0,0.261c0,0.081,0,0.171,0,0.252
                                c0,0.09,0,0.171,0,0.261c0,0.081,0,0.171,0,0.252c0,0.09,0,0.171,0,0.261s0,0.171,0,0.261c0,0.081,0,0.171,0,0.252
                                c0,0.09,0,0.171,0,0.261c0,0.081,0,0.171,0,0.252c0,0.09,0,0.171,0.009,0.261c0,0.171,0,0.342,0,0.513s0,0.351,0,0.522
                                s0,0.342,0,0.513c0.009,0.171,0.009,0.342,0.009,0.513s0,0.342,0,0.513s0,0.333,0,0.495c0,0.18,0.009,0.36,0.009,0.54
                                c0,0.162,0,0.333,0,0.495c0,0.18,0,0.36,0,0.531c0,0.171,0,0.333,0,0.504c0.009,0.18,0.009,0.351,0.009,0.531
                                c0,0.171,0,0.342,0,0.513c0,0.09,0,0.171,0,0.261c0,0.018,0,0.045,0,0.063c0,0.018,0,0.045,0,0.063c0,0.009,0,0.027,0,0.036
                                c0,0.009,0,0.018,0,0.027s0,0.018,0,0.027c0,0.018,0,0.027,0,0.036c0,0.045,0.009,0.09,0.009,0.126c0,0.045,0,0.09,0.009,0.135
                                c0,0.036,0,0.081,0.009,0.126c0,0.045,0.009,0.09,0.009,0.126c0.018,0.09,0.027,0.171,0.045,0.252
                                c0.009,0.09,0.027,0.171,0.045,0.252c0.036,0.162,0.081,0.324,0.135,0.486c0.054,0.162,0.117,0.324,0.189,0.486
                                c0.063,0.153,0.144,0.306,0.225,0.45c0.081,0.153,0.171,0.297,0.27,0.441c0.099,0.135,0.207,0.27,0.315,0.396
                                c0.108,0.135,0.225,0.261,0.351,0.378s0.252,0.234,0.387,0.333c0.135,0.108,0.27,0.207,0.414,0.297
                                c0.144,0.099,0.288,0.18,0.441,0.261c0.153,0.081,0.306,0.153,0.468,0.216c0.072,0.027,0.153,0.063,0.234,0.09
                                s0.162,0.054,0.243,0.081c0.081,0.018,0.162,0.045,0.252,0.063c0.081,0.018,0.162,0.036,0.243,0.054
                                c0.027,0.009,0.054,0.009,0.072,0.018c0.027,0,0.054,0.009,0.072,0.009c0.027,0,0.054,0.009,0.072,0.009
                                c0.027,0.009,0.054,0.009,0.072,0.018c0.027,0,0.054,0,0.081,0.009c0.018,0,0.045,0,0.072,0.009c0.018,0,0.045,0,0.072,0
                                c0.027,0.009,0.045,0.009,0.072,0.009s0.045,0.009,0.072,0.009s0.054,0,0.072,0c0.027,0,0.054,0.009,0.072,0.009
                                c0.027,0,0.054,0,0.081,0c0.018,0,0.045,0,0.072,0c0.018,0,0.045,0,0.072,0"></path>
                            <circle fill="none" stroke="#000000" stroke-width="0.405" cx="467.241" cy="454.311" r="1.251"></circle>
                            <circle fill="none" stroke="#000000" stroke-width="0.405" cx="467.241" cy="454.311" r="1.134"></circle>
                            <circle fill="none" stroke="#000000" stroke-width="0.405" cx="467.241" cy="454.311" r="0.981"></circle>
                            <circle fill="none" stroke="#000000" stroke-width="0.405" cx="467.241" cy="454.311" r="0.864"></circle>
                            <circle fill="none" stroke="#000000" stroke-width="0.405" cx="467.241" cy="454.311" r="0.675"></circle>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M461.977,453.375c0.009,0,0.009,0,0.009,0v-0.009"></path>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="462.021,455.22 461.995,455.22 461.977,455.22 			"></polyline>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M461.986,455.265c0-0.009,0-0.009-0.009-0.018"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M550.276,477.621c0-0.333-0.27-0.603-0.612-0.603
                                c-0.333,0-0.603,0.27-0.603,0.603s0.27,0.603,0.603,0.603C550.005,478.224,550.276,477.954,550.276,477.621z"></path>
                            <ellipse fill="none" stroke="#000000" stroke-width="0.405" cx="548.539" cy="477.621" rx="3.852" ry="5.454"></ellipse>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M549.529,483.975c3.006,0,5.445-2.844,5.445-6.354
                                s-2.439-6.354-5.445-6.354s-5.454,2.844-5.454,6.354S546.523,483.975,549.529,483.975z"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M550.276,440.451c0-0.333-0.27-0.612-0.612-0.612
                                c-0.333,0-0.603,0.279-0.603,0.612c0,0.333,0.27,0.603,0.603,0.603C550.005,441.054,550.276,440.784,550.276,440.451z"></path>
                            <ellipse fill="none" stroke="#000000" stroke-width="0.405" cx="548.539" cy="440.451" rx="3.852" ry="5.454"></ellipse>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M549.529,434.088c3.006,0,5.445,2.853,5.445,6.363
                                c0,3.51-2.439,6.354-5.445,6.354s-5.454-2.844-5.454-6.354C544.075,436.941,546.523,434.088,549.529,434.088z"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M548.898,532.368c0.378,0,0.684-0.288,0.684-0.666
                                c0-0.018,0-0.036,0-0.054"></path>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="536.974" y1="532.368" x2="548.898" y2="532.368"></line>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M549.583,531.648c-0.09-1.593-0.648-3.114-1.62-4.374"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M547.963,527.274c-0.153-0.207-0.405-0.333-0.666-0.342"></path>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="547.297,526.932 545.784,526.932 540.096,526.932 
                                538.584,526.932 			"></polyline>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M546.919,523.836c-0.567,0.954-0.954,1.998-1.134,3.096"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M536.299,531.648c-0.027,0.369,0.252,0.693,0.621,0.72
                                c0.018,0,0.036,0,0.054,0"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M538.584,526.932c-0.261,0.009-0.513,0.135-0.675,0.342"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M537.909,527.274c-0.963,1.26-1.521,2.781-1.611,4.374"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M540.096,526.932c-0.18-1.098-0.567-2.142-1.134-3.096"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M547.521,517.743c-0.324-1.395-0.963-2.709-1.863-3.834"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M540.222,513.909c-0.9,1.125-1.539,2.439-1.863,3.834"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M545.659,513.909c-1.467-1.503-3.87-1.53-5.373-0.072
                                c-0.018,0.027-0.045,0.054-0.063,0.072"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M546.919,523.836c1.089-1.845,1.314-4.068,0.603-6.093"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M538.359,517.743c-0.711,2.025-0.486,4.248,0.603,6.093"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M741.643,576.423c0.009-0.378-0.288-0.684-0.657-0.684
                                c-0.018,0-0.045,0-0.063,0"></path>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="741.643" y1="588.348" x2="741.643" y2="576.423"></line>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M740.922,575.739c-1.584,0.09-3.105,0.648-4.365,1.611"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M736.557,577.35c-0.216,0.162-0.342,0.414-0.342,0.675"></path>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="736.216,578.025 736.216,579.537 736.216,585.225 
                                736.216,586.737 			"></polyline>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M733.11,578.403c0.954,0.567,2.007,0.954,3.105,1.134"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M740.922,589.023c0.369,0.027,0.693-0.252,0.72-0.621
                                c0-0.018,0-0.036,0-0.054"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M736.216,586.737c0,0.261,0.126,0.513,0.342,0.675"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M736.557,587.412c1.26,0.963,2.781,1.521,4.365,1.611"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M736.216,585.225c-1.098,0.18-2.151,0.567-3.105,1.134"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M727.026,577.8c-1.404,0.324-2.718,0.963-3.834,1.863"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M723.193,585.099c1.116,0.9,2.43,1.539,3.834,1.863"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M723.193,579.663c-1.503,1.467-1.539,3.87-0.072,5.373
                                c0.018,0.018,0.045,0.045,0.072,0.063"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M733.11,578.403c-1.836-1.089-4.068-1.314-6.084-0.603"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M727.026,586.962c2.016,0.711,4.248,0.486,6.084-0.603"></path>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="528.747" y1="590.157" x2="526.38" y2="590.157"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="515.562,590.157 515.562,582.3 515.562,581.787 
                                515.562,579.339 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="756.852" y1="553.653" x2="756.852" y2="580.014"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="756.852" y1="580.014" x2="841.336" y2="580.014"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="841.336" y1="580.014" x2="841.336" y2="535.41"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="717.99" y1="390.771" x2="742.318" y2="390.771"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="689.604" y1="390.771" x2="693.664" y2="390.771"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="645" y1="390.771" x2="649.05" y2="390.771"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="596.338" y1="390.771" x2="620.664" y2="390.771"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="742.318" y1="325.89" x2="742.318" y2="309.663"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="742.318" y1="390.771" x2="742.318" y2="374.553"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="596.338,309.663 596.338,319.131 596.338,340.758 
                                596.338,390.771 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="703.122" y1="682.749" x2="709.881" y2="682.749"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="663.919" y1="682.749" x2="686.904" y2="682.749"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="628.773" y1="682.749" x2="639.591" y2="682.749"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="709.881" y1="735.462" x2="628.773" y2="735.462"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="722.049" y1="548.928" x2="716.641" y2="548.928"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="722.049" y1="562.446" x2="716.641" y2="562.446"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="716.641,563.796 716.641,562.446 716.641,548.928 
                                716.641,547.578 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="722.049" y1="562.446" x2="722.049" y2="548.928"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="716.641,548.928 719.349,555.687 722.049,562.446 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="722.049,548.928 719.349,555.687 716.641,562.446 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="714.615" y1="561.771" x2="714.615" y2="549.603"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="700.414" y1="548.928" x2="699.063" y2="548.928"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="700.414" y1="561.087" x2="699.063" y2="561.087"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="699.063" y1="561.087" x2="699.063" y2="548.928"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="700.414,563.796 700.414,561.087 700.414,548.928 
                                700.414,547.578 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="702.448" y1="561.771" x2="702.448" y2="549.603"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="716.641" y1="563.796" x2="700.414" y2="563.796"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="716.641" y1="547.578" x2="700.414" y2="547.578"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="714.615" y1="549.603" x2="702.448" y2="549.603"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="714.615" y1="561.771" x2="702.448" y2="561.771"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="625.057" y1="547.578" x2="596.338" y2="547.578"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="479.742,520.218 481.102,520.218 482.452,520.218 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="479.742,485.073 481.102,485.073 482.452,485.073 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="479.742,487.773 481.102,487.773 482.452,487.773 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="479.742,490.482 481.102,490.482 482.452,490.482 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="479.742,493.182 481.102,493.182 482.452,493.182 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.544" y1="443.277" x2="461.454" y2="443.259"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="461.454" y1="443.259" x2="461.374" y2="443.241"></line>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M546.873,521.703c0.405-2.619-0.378-5.283-2.142-7.263"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M545.631,523.827c0.675-0.513,1.125-1.278,1.242-2.124"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M540.25,523.827c1.701,0.828,3.681,0.828,5.382,0"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M539.008,521.703c0.117,0.846,0.567,1.611,1.242,2.124"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M541.149,514.44c-1.764,1.98-2.547,4.644-2.142,7.263"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M544.732,514.44c-1.026-0.882-2.556-0.882-3.582,0"></path>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="481.102,522.918 481.102,520.218 481.102,518.868 
                                481.102,517.518 481.102,517.194 481.102,514.809 481.102,512.109 481.102,509.4 481.102,506.7 481.102,504 481.102,502.65 
                                481.102,501.291 481.102,498.591 481.102,495.891 481.102,493.182 481.102,490.482 481.102,487.773 481.102,485.073 
                                481.102,482.373 481.102,480.51 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="481.102" y1="480.51" x2="454.065" y2="480.51"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="479.742,504 481.102,504 482.452,504 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="479.742,501.291 481.102,501.291 482.452,501.291 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="479.742,498.591 481.102,498.591 482.452,498.591 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="479.742,495.891 481.102,495.891 482.452,495.891 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="479.742,506.7 481.102,506.7 482.452,506.7 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="479.742,509.4 481.102,509.4 482.452,509.4 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="479.742,512.109 481.102,512.109 482.452,512.109 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="479.742,514.809 481.102,514.809 482.452,514.809 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="479.742,517.518 480.777,517.518 481.102,517.518 
                                482.452,517.518 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="479.742,482.373 479.742,485.073 479.742,487.773 
                                479.742,490.482 479.742,493.182 479.742,495.891 479.742,498.591 479.742,501.291 479.742,504 479.742,506.7 479.742,509.4 
                                479.742,512.109 479.742,514.809 479.742,517.518 479.742,520.218 479.742,522.918 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="454.065" y1="482.364" x2="479.742" y2="482.373"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="482.452,482.373 482.452,485.073 482.452,487.773 
                                482.452,490.482 482.452,493.182 482.452,495.891 482.452,498.591 482.452,501.291 482.452,502.713 482.452,504 482.452,506.7 
                                482.452,509.4 482.452,512.109 482.452,514.809 482.452,515.844 482.452,517.518 482.452,520.218 482.452,522.918 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="479.742" y1="522.918" x2="454.065" y2="522.909"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="530.097,574.947 530.097,575.622 530.097,583.731 
                                530.097,584.406 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="530.097" y1="584.406" x2="528.747" y2="584.406"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="528.747" y1="574.947" x2="530.097" y2="574.947"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="530.097" y1="575.622" x2="530.44" y2="575.622"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="530.44" y1="575.622" x2="530.44" y2="583.731"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="530.44" y1="583.731" x2="530.097" y2="583.731"></line>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M730.977,578.448c-2.61-0.405-5.274,0.378-7.254,2.142"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M733.11,579.69c-0.522-0.675-1.287-1.125-2.133-1.242"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M733.11,585.072c0.819-1.701,0.819-3.681,0-5.382"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M730.977,586.314c0.846-0.117,1.611-0.567,2.133-1.242"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M723.724,584.172c1.98,1.764,4.644,2.547,7.254,2.142"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M723.724,580.59c-0.891,1.026-0.891,2.556,0,3.582"></path>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="852.154,460.044 850.804,460.044 844.044,460.044 
                                842.685,460.044 835.927,460.044 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="835.927" y1="460.044" x2="835.927" y2="430.983"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="835.927,430.983 844.044,430.983 852.154,430.983 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="804.166,430.65 804.166,442.881 804.166,456.948 
                                804.166,503.307 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="804.166" y1="503.307" x2="776.454" y2="503.307"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="776.454" y1="503.307" x2="776.454" y2="430.65"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="776.454" y1="430.65" x2="804.166" y2="430.65"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="835.927" y1="533.043" x2="835.927" y2="480.321"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="835.927,480.321 842.685,480.321 844.044,480.321 
                                850.804,480.321 852.154,480.321 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="636.883" y1="731.412" x2="636.883" y2="723.303"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="634.524" y1="725.67" x2="634.524" y2="729.045"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="628.773" y1="731.412" x2="636.883" y2="731.412"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="634.524" y1="729.045" x2="628.773" y2="729.045"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="636.883" y1="723.303" x2="628.773" y2="723.303"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="628.773" y1="725.67" x2="634.524" y2="725.67"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="701.773" y1="723.303" x2="701.773" y2="731.412"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="704.14" y1="729.045" x2="704.14" y2="725.67"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="701.773" y1="731.412" x2="709.881" y2="731.412"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="709.881" y1="729.045" x2="704.14" y2="729.045"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="709.881" y1="723.303" x2="701.773" y2="723.303"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="704.14" y1="725.67" x2="709.881" y2="725.67"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="852.154" y1="590.832" x2="746.044" y2="590.832"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="746.044" y1="593.199" x2="852.154" y2="593.199"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="699.406" y1="643.545" x2="699.406" y2="613.134"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="688.588" y1="613.134" x2="688.588" y2="643.545"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="799.773" y1="535.41" x2="803.823" y2="535.41"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="803.823" y1="535.41" x2="803.823" y2="533.043"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="803.823" y1="533.043" x2="797.406" y2="533.043"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="822.75" y1="533.043" x2="822.75" y2="535.41"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="822.75,535.41 841.336,535.41 852.154,535.41 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="852.154,533.043 844.044,533.043 835.927,533.043 
                                822.75,533.043 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="726.099" y1="643.545" x2="726.099" y2="594.549"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="726.099" y1="594.549" x2="742.318" y2="594.549"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="746.044" y1="590.832" x2="746.044" y2="553.653"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="742.318,570.213 742.318,594.549 742.318,643.545 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="699.063" y1="570.213" x2="742.318" y2="570.213"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="743.677" y1="567.846" x2="677.437" y2="567.846"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="701.773" y1="610.767" x2="699.063" y2="610.767"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="677.437,613.134 688.588,613.134 691.044,613.134 
                                691.549,613.134 699.406,613.134 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="746.044" y1="535.068" x2="770.713" y2="535.068"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="770.713,535.068 770.713,543.177 770.713,551.295 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="797.406,533.043 797.406,535.068 797.406,551.295 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="799.773" y1="553.653" x2="799.773" y2="535.41"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="743.677" y1="535.41" x2="743.677" y2="567.846"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="746.044,551.295 746.044,543.177 746.044,535.068 
                                746.044,533.043 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="746.044" y1="679.032" x2="746.044" y2="672.606"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="746.044" y1="672.606" x2="743.677" y2="672.606"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="743.677" y1="672.606" x2="743.677" y2="679.032"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="743.677" y1="652.338" x2="746.044" y2="652.338"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="746.044" y1="652.338" x2="746.044" y2="593.199"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="743.677" y1="645.912" x2="743.677" y2="652.338"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="701.773" y1="643.545" x2="701.773" y2="610.767"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="678.786" y1="645.912" x2="704.815" y2="645.912"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="699.406,643.545 691.549,643.545 691.044,643.545 
                                688.588,643.545 677.437,643.545 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="704.815" y1="645.912" x2="704.815" y2="643.545"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="704.815" y1="643.545" x2="701.773" y2="643.545"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="723.732" y1="643.545" x2="723.732" y2="645.912"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="723.732" y1="645.912" x2="743.677" y2="645.912"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="742.318,643.545 726.099,643.545 723.732,643.545 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="678.786" y1="679.032" x2="678.786" y2="674.973"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="678.786" y1="674.973" x2="675.07" y2="674.973"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="675.07" y1="674.973" x2="675.07" y2="679.032"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="675.07" y1="649.971" x2="678.786" y2="649.971"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="678.786" y1="649.971" x2="678.786" y2="645.912"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="675.07" y1="638.478" x2="675.07" y2="649.971"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="688.93,681.57 688.93,680.886 688.93,680.211 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="701.097,681.57 701.097,680.886 701.097,680.211 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="686.904" y1="682.749" x2="686.904" y2="683.766"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="686.904" y1="683.766" x2="703.122" y2="683.766"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="703.122" y1="683.766" x2="703.122" y2="682.749"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="675.07" y1="536.76" x2="675.07" y2="541.494"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="675.07" y1="541.494" x2="677.437" y2="541.494"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="677.437" y1="541.494" x2="677.437" y2="535.41"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="677.437" y1="563.121" x2="675.07" y2="563.121"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="677.437" y1="567.846" x2="677.437" y2="563.121"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="675.07" y1="563.121" x2="675.07" y2="618.201"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="675.07" y1="618.201" x2="677.437" y2="618.201"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="677.437" y1="618.201" x2="677.437" y2="613.134"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="677.437" y1="638.478" x2="675.07" y2="638.478"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="677.437" y1="643.545" x2="677.437" y2="638.478"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="797.406,551.295 770.713,551.295 746.044,551.295 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="746.044,553.653 756.852,553.653 799.773,553.653 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="677.437" y1="535.41" x2="743.677" y2="535.41"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="854.682,648.621 854.008,648.621 853.333,648.621 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="854.682,668.889 854.008,668.889 853.333,668.889 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="855.87" y1="646.587" x2="856.878" y2="646.587"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="856.878" y1="646.587" x2="856.878" y2="670.923"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="856.878" y1="670.923" x2="855.87" y2="670.923"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="852.154" y1="776.358" x2="852.154" y2="730.062"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="852.154" y1="730.062" x2="810.924" y2="730.062"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="810.924" y1="740.871" x2="841.336" y2="740.871"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="841.336" y1="740.871" x2="841.336" y2="776.358"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="810.924" y1="727.695" x2="852.154" y2="727.695"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="852.154" y1="716.877" x2="821.734" y2="716.877"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="821.734" y1="716.877" x2="821.734" y2="681.399"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="764.286,778.212 764.286,777.708 764.286,777.204 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="764.286" y1="777.708" x2="782.709" y2="777.708"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="783.042,779.229 783.042,778.725 783.042,778.212 
                                783.042,777.204 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="801.456,779.229 801.456,778.725 801.456,778.212 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="783.042" y1="778.725" x2="801.456" y2="778.725"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="762.594" y1="780.075" x2="762.594" y2="781.092"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="762.594" y1="781.092" x2="803.148" y2="781.092"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="803.148" y1="781.092" x2="803.148" y2="780.075"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="810.924" y1="727.695" x2="810.924" y2="681.399"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="808.557" y1="681.399" x2="808.557" y2="753.039"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="808.557" y1="753.039" x2="810.924" y2="753.039"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="810.924,753.039 810.924,740.871 810.924,738.423 
                                810.924,737.919 810.924,730.062 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="810.924" y1="773.316" x2="808.557" y2="773.316"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="808.557" y1="773.316" x2="808.557" y2="776.358"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="810.924" y1="776.358" x2="810.924" y2="773.316"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="854.682,354.276 854.008,354.276 853.333,354.276 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="854.682,374.553 854.008,374.553 853.333,374.553 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="855.87" y1="352.251" x2="856.878" y2="352.251"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="856.878" y1="352.251" x2="856.878" y2="376.578"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="856.878" y1="376.578" x2="855.87" y2="376.578"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="854.682,325.89 854.008,325.89 853.333,325.89 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="854.682,346.167 854.008,346.167 853.333,346.167 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="855.87" y1="323.856" x2="856.878" y2="323.856"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="856.878" y1="323.856" x2="856.878" y2="348.192"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="856.878" y1="348.192" x2="855.87" y2="348.192"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="744.18,327.24 743.758,327.24 743.334,327.24 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="744.18,350.046 743.758,350.046 743.334,350.046 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="743.758" y1="327.24" x2="743.758" y2="350.046"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="745.026,338.814 744.604,338.814 744.18,338.814 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="745.026,361.629 744.604,361.629 744.18,361.629 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="744.604" y1="338.814" x2="744.604" y2="361.629"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="742.318,325.89 742.318,326.898 742.318,373.536 
                                742.318,374.553 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="642.966,391.95 642.966,392.634 642.966,393.309 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="622.69,391.95 622.69,392.634 622.69,393.309 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="645" y1="390.771" x2="645" y2="389.754"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="645" y1="389.754" x2="620.664" y2="389.754"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="620.664" y1="389.754" x2="620.664" y2="390.771"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="715.966,391.95 715.966,392.634 715.966,393.309 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="695.688,391.95 695.688,392.634 695.688,393.309 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="717.99" y1="390.771" x2="717.99" y2="389.754"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="717.99" y1="389.754" x2="693.664" y2="389.754"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="693.664" y1="389.754" x2="693.664" y2="390.771"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="687.912" y1="392.121" x2="687.912" y2="393.138"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="650.742" y1="392.121" x2="650.742" y2="393.138"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="689.604" y1="390.771" x2="689.604" y2="389.754"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="689.604" y1="389.754" x2="649.05" y2="389.754"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="649.05" y1="389.754" x2="649.05" y2="390.771"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="823.425,310.851 823.425,311.526 823.425,312.201 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="803.148,310.851 803.148,311.526 803.148,312.201 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="825.451" y1="309.663" x2="825.451" y2="308.655"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="825.451" y1="308.655" x2="801.123" y2="308.655"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="801.123" y1="308.655" x2="801.123" y2="309.663"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="795.039,310.851 795.039,311.526 795.039,312.201 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="774.763,310.851 774.763,311.526 774.763,312.201 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="797.065" y1="309.663" x2="797.065" y2="308.655"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="797.065" y1="308.655" x2="772.737" y2="308.655"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="772.737" y1="308.655" x2="772.737" y2="309.663"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="451.698" y1="417.465" x2="452.707" y2="417.465"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="451.698" y1="404.631" x2="452.707" y2="404.631"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="450.349" y1="419.157" x2="449.332" y2="419.157"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="449.332" y1="419.157" x2="449.332" y2="402.939"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="449.332" y1="402.939" x2="450.349" y2="402.939"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="451.698" y1="323.523" x2="452.707" y2="323.523"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="451.698" y1="336.366" x2="452.707" y2="336.366"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="450.349" y1="321.831" x2="449.332" y2="321.831"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="449.332" y1="321.831" x2="449.332" y2="338.058"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="449.332" y1="338.058" x2="450.349" y2="338.058"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="519.289,310.851 519.289,311.526 519.289,312.201 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="499.012,310.851 499.012,311.526 499.012,312.201 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="521.313" y1="309.663" x2="521.313" y2="308.655"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="521.313" y1="308.655" x2="496.978" y2="308.655"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="496.978" y1="308.655" x2="496.978" y2="309.663"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="547.674,310.851 547.674,311.526 547.674,312.201 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="527.398,310.851 527.398,311.526 527.398,312.201 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="549.7" y1="309.663" x2="549.7" y2="308.655"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="549.7" y1="308.655" x2="525.364" y2="308.655"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="525.364" y1="308.655" x2="525.364" y2="309.663"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="599.883" y1="593.874" x2="621.51" y2="593.874"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="528.747" y1="547.578" x2="549.024" y2="547.578"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="549.024,547.578 549.024,545.121 549.024,544.869 
                                549.024,544.617 549.024,536.76 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="454.065,590.157 515.562,590.157 526.38,590.157 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="526.38,541.512 518.523,541.512 518.019,541.512 
                                515.562,541.512 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="515.562,525.285 515.562,536.76 515.562,541.512 
                                515.562,579.339 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="515.562" y1="579.339" x2="464.875" y2="579.339"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="464.875" y1="579.339" x2="464.875" y2="525.285"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="452.202" y1="468.504" x2="452.878" y2="468.504"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="451.527,453.807 452.202,453.807 452.878,453.807 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="451.527" y1="440.118" x2="452.202" y2="440.118"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="450.349" y1="470.529" x2="449.332" y2="470.529"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="449.332" y1="470.529" x2="449.332" y2="438.093"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="449.332" y1="438.093" x2="450.349" y2="438.093"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="540.916" y1="488.097" x2="540.916" y2="429.975"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="526.38" y1="488.097" x2="526.38" y2="493.506"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="526.38" y1="493.506" x2="528.747" y2="493.506"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="528.747" y1="493.506" x2="528.747" y2="490.464"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="528.747" y1="512.433" x2="526.38" y2="512.433"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="526.38" y1="512.433" x2="526.38" y2="522.918"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="528.747" y1="533.043" x2="528.747" y2="512.433"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="526.38,525.285 526.38,541.512 526.38,590.157 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="528.747,590.157 528.747,584.406 528.747,574.947 
                                528.747,552.978 528.747,547.578 528.747,545.121 528.747,544.617 528.747,536.76 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="592.62" y1="451.935" x2="586.87" y2="451.935"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="586.87" y1="451.935" x2="586.87" y2="454.302"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="586.87" y1="454.302" x2="592.62" y2="454.302"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="565.242" y1="454.302" x2="565.242" y2="451.935"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="565.242" y1="451.935" x2="559.5" y2="451.935"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="559.5" y1="454.302" x2="565.242" y2="454.302"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="559.5" y1="451.935" x2="559.5" y2="427.608"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="557.133" y1="429.975" x2="557.133" y2="488.097"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="557.133" y1="490.464" x2="557.133" y2="533.043"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="559.5" y1="533.043" x2="559.5" y2="454.302"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="596.338" y1="590.157" x2="596.338" y2="587.115"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="596.338" y1="587.115" x2="593.971" y2="587.115"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="593.971" y1="587.115" x2="593.971" y2="590.157"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="593.971" y1="565.488" x2="596.338" y2="565.488"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="596.338,565.488 596.338,552.978 596.338,547.578 
                                596.338,536.76 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="593.971,536.76 593.971,544.869 593.971,565.488 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="852.154" y1="679.032" x2="849.112" y2="679.032"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="849.112" y1="679.032" x2="849.112" y2="681.399"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="849.112" y1="681.399" x2="852.154" y2="681.399"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="828.834" y1="681.399" x2="828.834" y2="679.032"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="810.924,681.399 818.781,681.399 819.286,681.399 
                                821.734,681.399 828.834,681.399 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="828.834" y1="679.032" x2="746.044" y2="679.032"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="743.677" y1="679.032" x2="738.771" y2="679.032"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="738.771" y1="679.032" x2="738.771" y2="681.399"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="738.771" y1="681.399" x2="808.557" y2="681.399"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="718.495" y1="681.399" x2="718.495" y2="679.032"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="713.599" y1="681.399" x2="718.495" y2="681.399"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="703.122" y1="679.032" x2="703.122" y2="682.749"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="686.904" y1="679.032" x2="678.786" y2="679.032"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="675.07" y1="679.032" x2="663.919" y2="679.032"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="663.919" y1="679.032" x2="663.919" y2="682.749"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="639.591,682.749 639.591,679.032 639.591,654.696 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="640.771,679.032 639.591,679.032 628.773,679.032 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="686.904,682.749 687.912,682.749 702.105,682.749 
                                703.122,682.749 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="702.105,679.032 687.912,679.032 686.904,679.032 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="625.057" y1="590.157" x2="621.51" y2="590.157"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="621.51" y1="590.157" x2="621.51" y2="593.874"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="621.51" y1="593.874" x2="625.057" y2="593.874"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="599.883,593.874 599.883,590.157 599.883,568.53 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="601.062,590.157 599.883,590.157 596.338,590.157 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="593.971,590.157 549.024,590.157 528.747,590.157 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="454.065" y1="593.874" x2="599.883" y2="593.874"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="528.747,536.76 549.024,536.76 593.971,536.76 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="557.133" y1="533.043" x2="528.747" y2="533.043"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="592.62" y1="533.043" x2="559.5" y2="533.043"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="596.338" y1="536.76" x2="625.057" y2="536.76"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="631.312" y1="533.043" x2="596.338" y2="533.043"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="628.773" y1="536.76" x2="631.312" y2="536.76"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="631.312" y1="536.76" x2="631.312" y2="533.043"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="672.541" y1="533.043" x2="672.541" y2="536.76"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="672.541" y1="536.76" x2="675.07" y2="536.76"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="746.044" y1="533.043" x2="672.541" y2="533.043"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="526.38" y1="522.918" x2="510.837" y2="522.918"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="510.837" y1="522.918" x2="510.837" y2="525.285"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="510.837,525.285 515.562,525.285 526.38,525.285 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="490.56" y1="525.285" x2="490.56" y2="522.918"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="490.56,522.918 482.452,522.918 481.102,522.918 
                                479.742,522.918 454.065,522.918 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="454.065,525.285 461.922,525.285 462.426,525.285 
                                464.875,525.285 490.56,525.285 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="557.133,488.097 540.916,488.097 526.38,488.097 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="528.747" y1="490.464" x2="557.133" y2="490.464"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="559.5" y1="427.608" x2="516.922" y2="427.608"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="516.922" y1="427.608" x2="516.922" y2="429.975"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="516.922,429.975 540.916,429.975 557.133,429.975 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="496.645" y1="429.975" x2="496.645" y2="427.608"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="496.645" y1="427.608" x2="454.065" y2="427.608"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="454.065" y1="429.975" x2="496.645" y2="429.975"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="852.154,776.358 844.297,776.358 843.784,776.358 
                                841.336,776.358 810.924,776.358 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="762.594" y1="776.358" x2="713.599" y2="776.358"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="709.881" y1="780.075" x2="762.594" y2="780.075"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="762.594,780.075 763.953,780.075 801.799,780.075 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="801.799,776.358 763.953,776.358 762.594,776.358 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="713.599" y1="776.358" x2="713.599" y2="681.399"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="709.881,682.749 709.881,723.303 709.881,725.67 
                                709.881,729.045 709.881,731.412 709.881,735.462 709.881,780.075 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="625.057,536.76 625.057,547.578 625.057,552.978 
                                625.057,559.062 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="625.057" y1="559.062" x2="628.773" y2="559.062"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="628.773" y1="559.062" x2="628.773" y2="536.76"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="628.773" y1="584.073" x2="625.057" y2="584.073"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="625.057" y1="584.073" x2="625.057" y2="590.157"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="628.773" y1="679.032" x2="628.773" y2="584.073"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="625.057" y1="593.874" x2="625.057" y2="792.576"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="628.773,796.293 628.773,735.462 628.773,731.412 
                                628.773,729.045 628.773,725.67 628.773,723.303 628.773,682.749 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="596.338" y1="394.488" x2="620.664" y2="394.488"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="620.664" y1="394.488" x2="620.664" y2="390.771"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="689.604" y1="390.771" x2="689.604" y2="394.488"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="693.664" y1="394.488" x2="693.664" y2="390.771"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="717.99" y1="390.771" x2="717.99" y2="394.488"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="689.604,390.771 688.255,390.771 650.401,390.771 
                                649.05,390.771 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="650.401" y1="394.488" x2="688.255" y2="394.488"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="645,390.771 643.984,390.771 621.682,390.771 
                                620.664,390.771 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="620.664,394.488 621.682,394.488 643.984,394.488 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="717.99,390.771 716.974,390.771 694.672,390.771 
                                693.664,390.771 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="694.672" y1="394.488" x2="716.974" y2="394.488"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="746.044,394.488 746.044,374.553 746.044,373.536 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="746.044" y1="374.553" x2="742.318" y2="374.553"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="852.154" y1="323.856" x2="855.87" y2="323.856"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="855.87" y1="376.578" x2="852.154" y2="376.578"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="852.154,376.578 852.154,430.983 852.154,460.044 
                                852.154,480.321 852.154,533.043 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="852.154" y1="535.41" x2="852.154" y2="590.832"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="852.154" y1="670.923" x2="852.154" y2="679.032"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="852.154,681.399 852.154,716.877 852.154,719.334 
                                852.154,719.838 852.154,727.695 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="855.87" y1="780.075" x2="855.87" y2="670.923"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="855.87" y1="347.175" x2="855.87" y2="324.873"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="852.154" y1="324.873" x2="852.154" y2="347.175"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="855.87" y1="375.561" x2="855.87" y2="353.259"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="855.87,670.923 855.87,669.906 855.87,647.604 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="852.154,647.604 852.154,669.906 852.154,670.923 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="852.154,353.259 852.154,375.561 852.154,376.578 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="746.044" y1="313.38" x2="772.737" y2="313.38"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="797.065" y1="309.663" x2="797.065" y2="313.38"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="825.451" y1="309.663" x2="825.451" y2="313.38"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="796.057" y1="309.663" x2="773.755" y2="309.663"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="772.737,313.38 773.755,313.38 796.057,313.38 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="824.443" y1="309.663" x2="802.141" y2="309.663"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="802.141" y1="313.38" x2="824.443" y2="313.38"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="592.62" y1="313.38" x2="592.62" y2="451.935"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="592.62" y1="454.302" x2="592.62" y2="503.982"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="592.62" y1="503.982" x2="596.338" y2="503.982"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="596.338" y1="503.982" x2="596.338" y2="394.488"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="596.338" y1="528.984" x2="592.62" y2="528.984"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="592.62" y1="528.984" x2="592.62" y2="533.043"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="596.338" y1="533.043" x2="596.338" y2="528.984"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="454.065" y1="313.38" x2="496.978" y2="313.38"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="496.978" y1="309.663" x2="450.349" y2="309.663"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="521.313" y1="309.663" x2="521.313" y2="313.38"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="525.364" y1="313.38" x2="525.364" y2="309.663"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="520.297,309.663 497.995,309.663 496.978,309.663 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="496.978,313.38 497.995,313.38 520.297,313.38 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="548.682" y1="309.663" x2="526.38" y2="309.663"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="526.38" y1="313.38" x2="548.682" y2="313.38"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="604.446" y1="796.293" x2="474.676" y2="796.293"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="625.057,792.576 605.797,792.576 604.446,792.576 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="604.446,790.551 604.446,790.974 604.446,792.153 
                                604.446,792.576 604.446,796.293 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="604.446" y1="796.293" x2="628.773" y2="796.293"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="474.676,796.293 474.676,792.576 474.676,792.153 
                                474.676,790.974 474.676,790.551 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="474.676,792.576 473.326,792.576 454.065,792.576 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="450.349" y1="796.293" x2="474.676" y2="796.293"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="454.065" y1="792.576" x2="454.065" y2="629.019"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="450.349" y1="629.019" x2="450.349" y2="796.293"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="454.065" y1="629.019" x2="454.065" y2="593.874"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="450.349" y1="470.529" x2="450.349" y2="629.019"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="454.065" y1="590.157" x2="454.065" y2="525.285"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="454.065,522.918 454.065,522.909 454.065,490.464 
                                454.065,482.364 454.065,482.355 454.065,480.51 454.065,478.638 454.065,470.529 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="454.065" y1="427.608" x2="454.065" y2="419.157"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="454.065" y1="338.058" x2="450.349" y2="338.058"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="450.349" y1="404.289" x2="450.349" y2="417.807"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="454.065,419.157 454.065,417.807 454.065,404.289 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="450.349,439.101 450.349,469.521 450.349,470.529 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="454.065,470.529 454.065,469.521 454.065,439.101 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="450.349" y1="323.181" x2="450.349" y2="336.699"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="454.065" y1="336.699" x2="454.065" y2="323.181"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="639.591" y1="682.749" x2="663.919" y2="682.749"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="803.823" y1="535.41" x2="804.661" y2="534.573"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="804.661,534.573 818.016,547.929 818.044,547.956 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="818.044" y1="547.956" x2="817.206" y2="548.793"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="817.206" y1="548.793" x2="803.823" y2="535.41"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="718.495" y1="681.399" x2="719.331" y2="680.562"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="719.331,680.562 733.641,694.872 733.669,694.899 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="733.669" y1="694.899" x2="732.831" y2="695.736"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="732.831" y1="695.736" x2="718.495" y2="681.399"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="746.044" y1="672.606" x2="745.216" y2="671.778"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="745.206,671.778 745.216,671.778 759.516,657.468 
                                759.544,657.441 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="759.544" y1="657.441" x2="760.38" y2="658.269"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="760.38" y1="658.269" x2="746.044" y2="672.606"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="675.07" y1="618.201" x2="675.906" y2="619.038"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="675.906,619.038 661.596,633.348 661.57,633.375 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="661.57" y1="633.375" x2="660.732" y2="632.538"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="660.732" y1="632.538" x2="675.07" y2="618.201"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="675.07" y1="541.494" x2="675.906" y2="542.331"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="675.906,542.331 660.643,557.595 660.615,557.622 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="660.615" y1="557.622" x2="659.779" y2="556.785"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="659.779" y1="556.785" x2="675.07" y2="541.494"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="704.815" y1="643.545" x2="705.651" y2="644.382"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="705.651,644.382 718.998,631.026 719.026,630.999 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="719.026" y1="630.999" x2="718.188" y2="630.162"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="718.188" y1="630.162" x2="704.815" y2="643.545"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="687.912,680.886 688.93,680.886 701.097,680.886 
                                702.105,680.886 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="702.105,681.57 701.097,681.57 688.93,681.57 
                                687.912,681.57 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="687.912,680.211 688.93,680.211 701.097,680.211 
                                702.105,680.211 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="702.105,679.032 703.122,679.032 718.495,679.032 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="702.105,682.749 702.105,681.57 702.105,680.886 
                                702.105,680.211 702.105,679.032 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="686.904" y1="679.032" x2="686.904" y2="682.749"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="687.912,682.749 687.912,681.57 687.912,680.886 
                                687.912,680.211 687.912,679.032 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="854.682,669.906 854.682,668.889 854.682,648.621 
                                854.682,647.604 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="853.333,647.604 853.333,648.621 853.333,668.889 
                                853.333,669.906 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="854.008,669.906 854.008,668.889 854.008,648.621 
                                854.008,647.604 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="852.154" y1="670.923" x2="855.87" y2="670.923"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="855.87,669.906 854.682,669.906 854.008,669.906 
                                853.333,669.906 852.154,669.906 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="852.154,647.604 852.154,646.587 852.154,593.199 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="852.154" y1="646.587" x2="855.87" y2="646.587"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="855.87,375.561 855.87,376.578 855.87,646.587 
                                855.87,647.604 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="855.87,647.604 854.682,647.604 854.008,647.604 
                                853.333,647.604 852.154,647.604 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="810.924" y1="773.316" x2="810.088" y2="772.479"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="810.088,772.479 824.398,758.169 824.424,758.142 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="824.424" y1="758.142" x2="825.261" y2="758.979"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="825.261" y1="758.979" x2="810.924" y2="773.316"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="782.709,779.229 782.709,778.212 782.709,777.708 
                                782.709,777.204 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="801.799,779.229 801.456,779.229 783.042,779.229 
                                782.709,779.229 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="763.953,777.204 764.286,777.204 782.709,777.204 
                                783.042,777.204 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="801.799,778.212 801.456,778.212 783.042,778.212 
                                782.709,778.212 764.286,778.212 763.953,778.212 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="801.799,776.358 803.148,776.358 808.557,776.358 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="803.148" y1="776.358" x2="803.148" y2="780.075"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="855.87,780.075 803.148,780.075 801.799,780.075 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="801.799,780.075 801.799,779.229 801.799,778.212 
                                801.799,776.358 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="762.594" y1="776.358" x2="762.594" y2="780.075"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="763.953,780.075 763.953,778.212 763.953,777.204 
                                763.953,776.358 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="849.112" y1="681.399" x2="848.274" y2="680.562"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="848.274,680.562 833.964,694.872 833.938,694.899 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="833.938" y1="694.899" x2="834.774" y2="695.736"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="834.774" y1="695.736" x2="849.112" y2="681.399"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="854.008,353.259 854.008,354.276 854.008,374.553 
                                854.008,375.561 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="854.682,375.561 854.682,374.553 854.682,354.276 
                                854.682,353.259 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="853.333,353.259 853.333,354.276 853.333,374.553 
                                853.333,375.561 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="855.87,375.561 854.682,375.561 854.008,375.561 
                                853.333,375.561 852.154,375.561 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="852.154,353.259 852.154,352.251 852.154,348.192 
                                852.154,347.175 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="852.154" y1="352.251" x2="855.87" y2="352.251"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="855.87,347.175 855.87,348.192 855.87,352.251 
                                855.87,353.259 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="855.87,353.259 854.682,353.259 854.008,353.259 
                                853.333,353.259 852.154,353.259 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="854.682,347.175 854.682,346.167 854.682,325.89 
                                854.682,324.873 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="853.333,324.873 853.333,325.89 853.333,346.167 
                                853.333,347.175 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="854.008,347.175 854.008,346.167 854.008,325.89 
                                854.008,324.873 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="852.154" y1="348.192" x2="855.87" y2="348.192"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="855.87,347.175 854.682,347.175 854.008,347.175 
                                853.333,347.175 852.154,347.175 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="852.154,324.873 852.154,323.856 852.154,313.38 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="855.87,309.663 855.87,323.856 855.87,324.873 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="855.87,324.873 854.682,324.873 854.008,324.873 
                                853.333,324.873 852.154,324.873 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="745.026" y1="338.472" x2="744.18" y2="338.472"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="744.18,326.898 744.18,327.24 744.18,338.472 
                                744.18,338.814 744.18,350.046 744.18,350.388 744.18,361.629 744.18,361.962 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="744.18" y1="361.962" x2="745.026" y2="361.962"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="745.026,361.962 745.026,361.629 745.026,338.814 
                                745.026,338.472 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="743.334,326.898 743.334,327.24 743.334,350.046 
                                743.334,350.388 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="743.334" y1="350.388" x2="744.18" y2="350.388"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="746.044" y1="373.536" x2="742.318" y2="373.536"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="742.318" y1="325.89" x2="746.044" y2="325.89"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="746.044,313.38 746.044,325.89 746.044,326.898 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="746.044,326.898 744.18,326.898 743.334,326.898 
                                742.318,326.898 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="643.984,392.634 642.966,392.634 622.69,392.634 
                                621.682,392.634 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="621.682,391.95 622.69,391.95 642.966,391.95 
                                643.984,391.95 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="643.984,393.309 642.966,393.309 622.69,393.309 
                                621.682,393.309 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="621.682,390.771 621.682,391.95 621.682,392.634 
                                621.682,393.309 621.682,394.488 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="643.984,394.488 645,394.488 649.05,394.488 
                                650.401,394.488 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="645" y1="394.488" x2="645" y2="390.771"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="643.984,390.771 643.984,391.95 643.984,392.634 
                                643.984,393.309 643.984,394.488 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="694.672,391.95 695.688,391.95 715.966,391.95 
                                716.974,391.95 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="716.974,393.309 715.966,393.309 695.688,393.309 
                                694.672,393.309 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="694.672,392.634 695.688,392.634 715.966,392.634 
                                716.974,392.634 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="694.672,390.771 694.672,391.95 694.672,392.634 
                                694.672,393.309 694.672,394.488 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="716.974,394.488 717.99,394.488 746.044,394.488 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="716.974,390.771 716.974,391.95 716.974,392.634 
                                716.974,393.309 716.974,394.488 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="688.255,393.138 687.912,393.138 650.742,393.138 
                                650.401,393.138 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="650.401,392.121 650.742,392.121 687.912,392.121 
                                688.255,392.121 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="649.05" y1="394.488" x2="649.05" y2="390.771"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="650.401,390.771 650.401,392.121 650.401,393.138 
                                650.401,394.488 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="688.255,394.488 689.604,394.488 693.664,394.488 
                                694.672,394.488 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="688.255,390.771 688.255,392.121 688.255,393.138 
                                688.255,394.488 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="802.141,310.851 803.148,310.851 823.425,310.851 
                                824.443,310.851 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="824.443,312.201 823.425,312.201 803.148,312.201 
                                802.141,312.201 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="802.141,311.526 803.148,311.526 823.425,311.526 
                                824.443,311.526 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="801.123" y1="313.38" x2="801.123" y2="309.663"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="802.141,309.663 802.141,310.851 802.141,311.526 
                                802.141,312.201 802.141,313.38 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="824.443,313.38 825.451,313.38 852.154,313.38 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="855.87,309.663 825.451,309.663 824.443,309.663 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="824.443,309.663 824.443,310.851 824.443,311.526 
                                824.443,312.201 824.443,313.38 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="773.755,310.851 774.763,310.851 795.039,310.851 
                                796.057,310.851 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="796.057,312.201 795.039,312.201 774.763,312.201 
                                773.755,312.201 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="773.755,311.526 774.763,311.526 795.039,311.526 
                                796.057,311.526 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="772.737" y1="313.38" x2="772.737" y2="309.663"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="773.755,309.663 773.755,310.851 773.755,311.526 
                                773.755,312.201 773.755,313.38 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="796.057,313.38 797.065,313.38 801.123,313.38 
                                802.141,313.38 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="802.141,309.663 801.123,309.663 797.065,309.663 
                                796.057,309.663 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="796.057,309.663 796.057,310.851 796.057,311.526 
                                796.057,312.201 796.057,313.38 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="452.707,417.807 452.707,417.465 452.707,404.631 
                                452.707,404.289 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="451.698,404.289 451.698,404.631 451.698,417.465 
                                451.698,417.807 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="454.065,404.289 454.065,402.939 454.065,338.058 
                                454.065,336.699 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="454.065" y1="402.939" x2="450.349" y2="402.939"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="450.349,336.699 450.349,338.058 450.349,402.939 
                                450.349,404.289 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="450.349,404.289 451.698,404.289 452.707,404.289 
                                454.065,404.289 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="454.065" y1="419.157" x2="450.349" y2="419.157"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="450.349,417.807 451.698,417.807 452.707,417.807 
                                454.065,417.807 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="452.707,323.181 452.707,323.523 452.707,336.366 
                                452.707,336.699 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="451.698,336.699 451.698,336.366 451.698,323.523 
                                451.698,323.181 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="450.349,336.699 451.698,336.699 452.707,336.699 
                                454.065,336.699 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="454.065,323.181 454.065,321.831 454.065,313.38 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="454.065" y1="321.831" x2="450.349" y2="321.831"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="450.349,309.663 450.349,321.831 450.349,323.181 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="450.349,323.181 451.698,323.181 452.707,323.181 
                                454.065,323.181 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="497.995,310.851 499.012,310.851 519.289,310.851 
                                520.297,310.851 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="520.297,312.201 519.289,312.201 499.012,312.201 
                                497.995,312.201 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="497.995,311.526 499.012,311.526 519.289,311.526 
                                520.297,311.526 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="496.978" y1="313.38" x2="496.978" y2="309.663"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="497.995,309.663 497.995,310.851 497.995,311.526 
                                497.995,312.201 497.995,313.38 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="520.297,313.38 521.313,313.38 525.364,313.38 
                                526.38,313.38 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="526.38,309.663 525.364,309.663 521.313,309.663 
                                520.297,309.663 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="520.297,309.663 520.297,310.851 520.297,311.526 
                                520.297,312.201 520.297,313.38 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="526.38,310.851 527.398,310.851 547.674,310.851 
                                548.682,310.851 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="548.682,312.201 547.674,312.201 527.398,312.201 
                                526.38,312.201 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="526.38,311.526 527.398,311.526 547.674,311.526 
                                548.682,311.526 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="526.38,309.663 526.38,310.851 526.38,311.526 
                                526.38,312.201 526.38,313.38 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="548.682,313.38 549.7,313.38 592.62,313.38 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="549.7" y1="313.38" x2="549.7" y2="309.663"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="773.755,309.663 772.737,309.663 742.318,309.663 
                                596.338,309.663 549.7,309.663 548.682,309.663 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="548.682,309.663 548.682,310.851 548.682,311.526 
                                548.682,312.201 548.682,313.38 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="601.062,590.157 601.062,568.566 601.062,568.53 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="601.062" y1="568.53" x2="599.883" y2="568.53"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="528.747" y1="493.506" x2="527.911" y2="494.343"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="527.911,494.343 541.266,507.699 541.294,507.726 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="541.294" y1="507.726" x2="542.13" y2="506.889"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="542.13" y1="506.889" x2="528.747" y2="493.506"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="481.102" y1="518.868" x2="480.264" y2="518.031"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="480.264,518.031 480.777,517.518 481.102,517.194 
                                482.452,515.844 491.694,506.592 491.73,506.556 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="491.73" y1="506.556" x2="492.568" y2="507.393"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="492.568,507.393 482.452,517.518 481.102,518.868 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="451.527,454.815 452.202,454.815 452.878,454.815 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="451.527,439.101 451.527,440.118 451.527,453.807 
                                451.527,454.815 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="452.878,469.521 452.878,468.504 452.878,454.815 
                                452.878,453.807 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="452.202,439.101 452.202,440.118 452.202,453.807 
                                452.202,454.815 452.202,468.504 452.202,469.521 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="454.065,439.101 454.065,438.093 454.065,429.975 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="454.065" y1="438.093" x2="450.349" y2="438.093"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="450.349,417.807 450.349,419.157 450.349,438.093 
                                450.349,439.101 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="450.349,439.101 451.527,439.101 452.202,439.101 
                                454.065,439.101 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="454.065" y1="470.529" x2="450.349" y2="470.529"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="450.349,469.521 452.202,469.521 452.878,469.521 
                                454.065,469.521 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="586.87" y1="451.935" x2="586.032" y2="452.772"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="586.032,452.772 570.768,437.508 570.742,437.481 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="570.742" y1="437.481" x2="571.578" y2="436.644"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="571.578" y1="436.644" x2="586.87" y2="451.935"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="593.971" y1="587.115" x2="594.807" y2="586.278"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="594.807,586.278 579.534,571.014 579.508,570.987 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="579.508" y1="570.987" x2="578.67" y2="571.815"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="578.67" y1="571.815" x2="593.971" y2="587.115"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="604.446" y1="792.153" x2="474.676" y2="792.153"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="474.676" y1="790.974" x2="604.446" y2="790.974"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="473.326" y1="792.576" x2="473.326" y2="790.551"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="473.326" y1="790.551" x2="474.676" y2="790.551"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="604.446" y1="790.551" x2="605.797" y2="790.551"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="605.797" y1="790.551" x2="605.797" y2="792.576"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="640.771,679.032 640.771,654.732 640.771,654.696 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="640.771" y1="654.696" x2="639.591" y2="654.696"></line>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M553.605,479.061c0-0.171-0.135-0.306-0.306-0.306
                                c-0.162,0-0.306,0.135-0.306,0.306c0,0.162,0.144,0.297,0.306,0.297C553.471,479.358,553.605,479.223,553.605,479.061z"></path>
                            <circle fill="none" stroke="#000000" stroke-width="0.405" cx="553.299" cy="477.621" r="0.306"></circle>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M553.605,476.181c0-0.162-0.135-0.297-0.306-0.297
                                c-0.162,0-0.306,0.135-0.306,0.297c0,0.171,0.144,0.306,0.306,0.306C553.471,476.487,553.605,476.352,553.605,476.181z"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M553.605,441.882c0-0.162-0.135-0.297-0.306-0.297
                                c-0.162,0-0.306,0.135-0.306,0.297c0,0.171,0.144,0.306,0.306,0.306C553.471,442.188,553.605,442.053,553.605,441.882z"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M553.605,440.451c0-0.171-0.135-0.306-0.306-0.306
                                c-0.162,0-0.306,0.135-0.306,0.306c0,0.162,0.144,0.297,0.306,0.297C553.471,440.748,553.605,440.613,553.605,440.451z"></path>
                            <circle fill="none" stroke="#000000" stroke-width="0.405" cx="553.299" cy="439.011" r="0.306"></circle>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M738.789,634.509c0-0.171-0.135-0.306-0.297-0.306
                                c-0.171,0-0.306,0.135-0.306,0.306c0,0.162,0.135,0.306,0.306,0.306C738.654,634.815,738.789,634.671,738.789,634.509z"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M738.789,633.069c0-0.162-0.135-0.297-0.297-0.297
                                c-0.171,0-0.306,0.135-0.306,0.297c0,0.171,0.135,0.306,0.306,0.306C738.654,633.375,738.789,633.24,738.789,633.069z"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M738.789,631.638c0-0.171-0.135-0.306-0.297-0.306
                                c-0.171,0-0.306,0.135-0.306,0.306c0,0.162,0.135,0.297,0.306,0.297C738.654,631.935,738.789,631.8,738.789,631.638z"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M738.789,606.456c0-0.162-0.135-0.297-0.297-0.297
                                c-0.171,0-0.306,0.135-0.306,0.297c0,0.171,0.135,0.306,0.306,0.306C738.654,606.762,738.789,606.627,738.789,606.456z"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M738.789,605.025c0-0.171-0.135-0.306-0.297-0.306
                                c-0.171,0-0.306,0.135-0.306,0.306c0,0.162,0.135,0.297,0.306,0.297C738.654,605.322,738.789,605.187,738.789,605.025z"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M738.789,603.585c0-0.162-0.135-0.297-0.297-0.297
                                c-0.171,0-0.306,0.135-0.306,0.297c0,0.171,0.135,0.306,0.306,0.306C738.654,603.891,738.789,603.756,738.789,603.585z"></path>
                            <circle fill="none" stroke="#000000" stroke-width="0.405" cx="794.661" cy="474.408" r="1.224"></circle>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M795.885,465.966c0-0.684-0.549-1.233-1.224-1.233
                                s-1.224,0.549-1.224,1.233c0,0.675,0.549,1.224,1.224,1.224S795.885,466.641,795.885,465.966z"></path>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="699.063" y1="570.213" x2="698.812" y2="570.213"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="699.063" y1="610.767" x2="698.812" y2="610.767"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="482.452" y1="478.656" x2="454.065" y2="478.638"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="482.452" y1="482.373" x2="482.452" y2="478.656"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="454.065,482.355 479.742,482.373 481.102,482.373 
                                482.452,482.373 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="697.255" y1="610.767" x2="677.437" y2="610.767"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="677.437" y1="570.771" x2="677.437" y2="570.213"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="677.437" y1="610.767" x2="677.437" y2="610.182"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="677.437,570.213 687.273,570.213 687.948,570.213 
                                697.273,570.213 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="689.146" y1="574.11" x2="686.076" y2="574.11"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="686.076,574.11 686.581,573.291 687.273,572.166 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="687.273,570.213 687.273,570.429 687.273,571.239 
                                687.273,572.166 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="687.948,572.166 688.641,573.291 689.146,574.11 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="687.948,570.213 687.948,570.429 687.948,571.239 
                                687.948,572.166 			"></polyline>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M697.255,610.767c-0.126-0.108-0.279-0.18-0.432-0.216"></path>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="696.823" y1="610.515" x2="677.769" y2="610.515"></line>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="677.437" y1="610.182" x2="677.437" y2="570.771"></line>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="677.769,570.429 687.273,570.429 687.948,570.429 
                                696.823,570.429 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="698.812,610.767 697.506,610.767 697.255,610.767 			"></polyline>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M680.047,601.74c0.054,0.783,0.657,1.413,1.44,1.512"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M678.48,606.546c0.009,1.026,0.765,1.89,1.773,2.034"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M687.625,603.666c2.079,0.09,4.167-0.054,6.219-0.423"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M695.076,608.571c0.99-0.171,1.71-1.026,1.719-2.025"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M693.844,603.243c0.756-0.117,1.332-0.747,1.377-1.503"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M681.487,603.252h0.009c2.025,0.36,4.077,0.504,6.129,0.423"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M680.253,608.58c4.923,0.666,9.909,0.666,14.823-0.009"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M683.143,573.642c-0.711,0.144-1.251,0.72-1.368,1.431"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M679.344,571.86c-0.27,0.063-0.477,0.288-0.513,0.558"></path>
                            <circle fill="none" stroke="#000000" stroke-width="0.405" cx="687.607" cy="575.982" r="0.747"></circle>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M693.502,575.073c-0.117-0.693-0.63-1.251-1.314-1.422"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M692.188,573.651c-1.17-0.207-2.358-0.333-3.546-0.36
                                c-0.342-0.018-0.675-0.018-1.017-0.018"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M696.445,572.427c-0.036-0.279-0.252-0.513-0.531-0.567"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M696.831,570.447c0.162-0.036,0.324-0.117,0.441-0.234"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M687.625,573.273c-0.351,0-0.702,0-1.044,0.018
                                c-1.152,0.027-2.295,0.153-3.429,0.351"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M695.914,571.86c-2.637-0.396-5.301-0.603-7.965-0.621
                                c-0.225,0-0.459,0-0.675,0c-2.655,0.018-5.301,0.225-7.929,0.621"></path>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="678.508,606.546 678.552,601.722 678.841,572.418 			"></polyline>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="696.823,606.546 696.778,601.722 696.498,572.427 
                                696.498,572.418 			"></polyline>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M695.221,601.74c-0.126-8.91-0.702-17.811-1.719-26.667"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M681.774,575.073c-1.017,8.856-1.593,17.757-1.728,26.667"></path>
                            <polyline fill="none" stroke="#000000" stroke-width="0.405" points="698.812,570.213 697.534,570.213 697.273,570.213 			"></polyline>
                            <line fill="none" stroke="#000000" stroke-width="0.405" x1="698.812" y1="610.767" x2="698.812" y2="570.213"></line>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M677.437,610.182c0,0.18,0.144,0.333,0.333,0.333"></path>
                            <path fill="none" stroke="#000000" stroke-width="0.405" d="M677.769,570.429c-0.189,0-0.333,0.153-0.333,0.342"></path>
                        </g>
                    </g>
                </g>
                {/* LABELS */}
                <g id="v.1.lbl">
                    <g id="TEXT_00000154408594903651456820000011943922751293898665_">
                        <g>
                            <text transform="matrix(1 0 0 1 766.7451 639.1973)" font-family="'ArialMT'" font-size="10.8px">BEDROOM 2</text>
                        </g>
                    </g>
                    <g id="TEXT_00000169517428310638687650000016122555885484847801_">
                        <g>
                            <text transform="matrix(1 0 0 1 731.0165 733.5167)" font-family="'ArialMT'" font-size="10.8px">BEDROOM 3</text>
                        </g>
                    </g>
                    <g id="TEXT_00000011732058491875693020000013462951388332374407_">
                        <g>
                            <text transform="matrix(1 0 0 1 780.9706 520.3389)" font-family="'ArialMT'" font-size="10.8px">KITCHEN</text>
                        </g>
                    </g>
                    <g id="TEXT_00000076575367870003383480000015934467082923391378_">
                        <g>
                            <text transform="matrix(1 0 0 1 783.9794 356.9918)" font-family="'ArialMT'" font-size="10.8px">NOOK</text>
                        </g>
                    </g>
                    <g id="TEXT_00000095307107875601626870000014673990354458844572_">
                        <g>
                            <text transform="matrix(1 0 0 1 475.224 554.3565)" font-family="'ArialMT'" font-size="10.8px">W.I.C.</text>
                        </g>
                    </g>
                    <g id="TEXT_00000087381109351329531190000004715512286345655191_">
                        <g>
                            <text transform="matrix(1 0 0 1 534.9941 582.8878)" font-family="'ArialMT'" font-size="9px">LAUNDRY</text>
                        </g>
                    </g>
                    <g id="TEXT_00000113331478285813224380000000627534843086464685_">
                        <g>
                            <text transform="matrix(1 0 0 1 825.8915 709.754)" font-family="'ArialMT'" font-size="9px">W.I.C.</text>
                        </g>
                    </g>
                    <g id="TEXT_00000085957789804325240470000018328067041308647580_">
                        <g>
                            <text transform="matrix(1 0 0 1 814.4228 750.3712)" font-family="'ArialMT'" font-size="9px">W.I.C.</text>
                        </g>
                    </g>
                    <g id="TEXT_00000070103856638312640000000013879112481414671234_">
                        <g>
                            <text transform="matrix(1 0 0 1 697.6425 543.9727)" font-family="'ArialMT'" font-size="5.4px">FURNACE</text>
                        </g>
                    </g>
                    <g id="TEXT_00000128448783919004826740000018383386634673414555_">
                        <g>
                            <text transform="matrix(1 0 0 1 775.5019 570.4473)" font-family="'ArialMT'" font-size="10.8px">PANTRY</text>
                        </g>
                    </g>
                    <g id="TEXT_00000171720491049495781180000010471060538141004931_">
                        <g>
                            <text transform="matrix(1 0 0 1 790.2822 452.7843)" font-family="'ArialMT'" font-size="7.2px">DW</text>
                        </g>
                    </g>
                    <g id="TEXT_00000006699690431866620150000005103348754149866924_">
                        <g>
                            <text transform="matrix(1 0 0 1 634.7094 465.61)" font-family="'ArialMT'" font-size="10.8px">GREAT ROOM</text>
                        </g>
                    </g>
                    <g id="TEXT_00000018215931188669842830000007814218410158048906_">
                        <g>
                            <text transform="matrix(1 0 0 1 704.7372 608.2872)"><tspan x="0" y="0" font-family="'ArialMT'" font-size="7.2px">BATH</tspan><tspan x="7.6" y="8.64" font-family="'ArialMT'" font-size="7.2px">2</tspan></text>
                        </g>
                    </g>
                    <g id="TEXT_00000121976862253978115540000006656173434629736078_">
                        <g>
                            <text transform="matrix(1 0 0 1 458.4745 606.001)" font-family="'ArialMT'" font-size="5.4px">W.H.</text>
                        </g>
                    </g>
                    <g id="TEXT_00000090269606234951292370000012865083790400955526_">
                        <g>
                            <text transform="matrix(1 0 0 1 500.0976 696.6319)" font-family="'ArialMT'" font-size="10.8px">2 CAR GARAGE</text>
                        </g>
                    </g>
                    <g id="TEXT_00000108305362301863695380000010525495954120274840_">
                        <g>
                            <text transform="matrix(1 0 0 1 652.2548 709.1837)" font-family="'ArialMT'" font-size="10.8px">PORCH</text>
                        </g>
                    </g>
                    <g id="TEXT_00000098902269557262653120000008619763657582382750_">
                        <g>
                            <text transform="matrix(1 0 0 1 498.9604 367.9019)"><tspan x="0" y="0" font-family="'ArialMT'" font-size="10.8px">PRIMARY</tspan><tspan x="-3.299" y="12.96" font-family="'ArialMT'" font-size="10.8px">BEDROOM</tspan></text>
                        </g>
                    </g>
                    <g id="TEXT_00000165210053876192241260000007328155379361965491_">
                        <g>
                            <text transform="matrix(1 0 0 1 623.7226 352.4361)" font-family="'ArialMT'" font-size="10.8px"> COVERED PATIO </text>
                        </g>
                    </g>
                    <g id="TEXT_00000158749803963267457070000003871240072293728648_">
                        <g>
                            <text transform="matrix(1 0 0 1 602.3984 559.1436)"><tspan x="0" y="0" font-family="'ArialMT'" font-size="5.4px">DROP</tspan><tspan x="0.301" y="6.48" font-family="'ArialMT'" font-size="5.4px">ZONE</tspan></text>
                        </g>
                    </g>
                    <g id="TEXT_00000049191475233065691280000017004095033218750908_">
                        <g>
                            <text transform="matrix(1 0 0 1 633.5991 610.8555)" font-family="'ArialMT'" font-size="10.8px">FOYER</text>
                        </g>
                    </g>
                    <g id="TEXT_00000175287861291505310440000014794790025493780919_">
                        <g>
                            <text transform="matrix(1 0 0 1 601.2392 542.7393)" font-family="'ArialMT'" font-size="5.4px">BENCH</text>
                        </g>
                    </g>
                    <g id="TEXT_00000066498922240223703010000002565604386879315112_">
                        <g>
                            <text transform="matrix(1 0 0 1 491.3134 466.3761)"><tspan x="0" y="0" font-family="'ArialMT'" font-size="9px">PRIMARY</tspan><tspan x="8.501" y="10.8" font-family="'ArialMT'" font-size="9px">BATH</tspan></text>
                        </g>
                    </g>
                    <g id="TEXT_00000093878049450977385470000015376740086560541619_">
                        <g>
                            <text transform="matrix(1 0 0 1 457.4652 488.3912)" font-family="'ArialMT'" font-size="5.4px">BENCH</text>
                        </g>
                    </g>
                    <text transform="matrix(1 0 0 1 776.8564 544.9346)" font-family="'ArialMT'" font-size="7.2px">REF</text>
                    <g id="TEXT_00000114770403106163912300000013910423522793113251_">
                        <text transform="matrix(1 0 0 1 490.3554 565.5352)"><tspan x="0" y="0" font-family="'ArialMT'" font-size="4.5px">LUGGAGE</tspan><tspan x="0.126" y="5.4" font-family="'ArialMT'" font-size="4.5px">STORAGE</tspan><tspan x="3.375" y="10.8" font-family="'ArialMT'" font-size="4.5px">ABOVE</tspan></text>
                    </g>
                </g>
                {/* OPTIONS */}
                {/* OPTION: Dining Room */}
                <g id="primaryRetreat" data-option="primaryRetreat" style={{ display: active.primaryRetreat ? "block" : "none" }} fill="#CC0001">
                    <g id="XMLID_00000163781386340739517640000007876300883653000586_">
                        <rect x="456.281" y="308.311" fill="#FFFFFF" width="134.606" height="6.553"></rect>
                        <g>
                            <polygon points="496.987,228.564 496.987,232.281 454.065,232.281 454.065,309.672 466.566,309.672 466.566,313.389 
                                454.065,313.389 450.349,313.389 450.349,228.564 			"></polygon>
                            <rect x="521.313" y="228.564" width="4.059" height="3.717"></rect>
                            <polygon points="596.338,228.564 596.338,279.252 592.62,279.252 592.62,232.281 549.7,232.281 549.7,228.564 			"></polygon>
                            <polygon points="596.338,309.672 596.338,313.389 592.62,313.389 580.12,313.389 580.12,309.672 592.62,309.672 592.62,303.588 
                                596.338,303.588 			"></polygon>
                        </g>
                        <g>
                            
                                <line fill="none" stroke="#CC0001" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="580.12" y1="309.672" x2="466.566" y2="309.672"></line>
                            
                                <line fill="none" stroke="#CC0001" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="580.12" y1="313.389" x2="466.566" y2="313.389"></line>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="596.338,303.588 596.338,309.672 596.338,313.389 			"></polyline>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="519.289,229.743 519.289,230.418 519.289,231.102 			"></polyline>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="499.012,229.743 499.012,230.418 499.012,231.102 			"></polyline>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="521.313" y1="228.564" x2="521.313" y2="227.547"></line>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="521.313" y1="227.547" x2="496.987" y2="227.547"></line>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="496.987" y1="227.547" x2="496.987" y2="228.564"></line>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="547.674,229.743 547.674,230.418 547.674,231.102 			"></polyline>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="527.398,229.743 527.398,230.418 527.398,231.102 			"></polyline>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="549.7" y1="228.564" x2="549.7" y2="227.547"></line>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="549.7" y1="227.547" x2="525.372" y2="227.547"></line>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="525.372" y1="227.547" x2="525.372" y2="228.564"></line>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="454.065" y1="232.281" x2="496.987" y2="232.281"></line>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="496.987" y1="232.281" x2="496.987" y2="228.564"></line>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="496.987" y1="228.564" x2="450.349" y2="228.564"></line>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="525.372" y1="232.281" x2="525.372" y2="228.564"></line>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="520.297,228.564 497.995,228.564 496.987,228.564 			"></polyline>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="496.987,232.281 497.995,232.281 520.297,232.281 			"></polyline>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="548.692" y1="228.564" x2="526.38" y2="228.564"></line>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="526.38" y1="232.281" x2="548.692" y2="232.281"></line>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="595.149,281.286 594.474,281.286 593.799,281.286 			"></polyline>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="595.149,301.554 594.474,301.554 593.799,301.554 			"></polyline>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="596.338" y1="279.252" x2="597.354" y2="279.252"></line>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="597.354" y1="279.252" x2="597.354" y2="303.588"></line>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="597.354" y1="303.588" x2="596.338" y2="303.588"></line>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="596.338" y1="303.588" x2="592.62" y2="303.588"></line>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="592.62" y1="303.588" x2="592.62" y2="309.672"></line>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="596.338,303.588 596.338,302.571 596.338,280.269 			"></polyline>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="592.62,280.269 592.62,302.571 592.62,303.588 			"></polyline>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="454.065" y1="309.672" x2="454.065" y2="232.281"></line>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="450.349,313.389 454.065,313.389 466.566,313.389 			"></polyline>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="466.566" y1="313.389" x2="466.566" y2="309.672"></line>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="466.566" y1="309.672" x2="454.065" y2="309.672"></line>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="580.12" y1="309.672" x2="580.12" y2="313.389"></line>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="580.12,313.389 592.62,313.389 596.338,313.389 			"></polyline>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="592.62" y1="309.672" x2="580.12" y2="309.672"></line>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="450.349" y1="228.564" x2="450.349" y2="313.389"></line>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="497.995,229.743 499.012,229.743 519.289,229.743 
                                520.297,229.743 			"></polyline>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="520.297,231.102 519.289,231.102 499.012,231.102 
                                497.995,231.102 			"></polyline>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="497.995,230.418 499.012,230.418 519.289,230.418 
                                520.297,230.418 			"></polyline>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="497.995,228.564 497.995,229.743 497.995,230.418 
                                497.995,231.102 497.995,232.281 			"></polyline>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="520.297,232.281 521.313,232.281 525.372,232.281 
                                526.38,232.281 			"></polyline>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="521.313" y1="232.281" x2="521.313" y2="228.564"></line>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="526.38,228.564 525.372,228.564 521.313,228.564 
                                520.297,228.564 			"></polyline>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="520.297,228.564 520.297,229.743 520.297,230.418 
                                520.297,231.102 520.297,232.281 			"></polyline>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="548.692,230.418 547.674,230.418 527.398,230.418 
                                526.38,230.418 			"></polyline>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="526.38,229.743 527.398,229.743 547.674,229.743 
                                548.692,229.743 			"></polyline>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="548.692,231.102 547.674,231.102 527.398,231.102 
                                526.38,231.102 			"></polyline>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="526.38,228.564 526.38,229.743 526.38,230.418 
                                526.38,231.102 526.38,232.281 			"></polyline>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="548.692,232.281 549.7,232.281 592.62,232.281 			"></polyline>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="549.7" y1="232.281" x2="549.7" y2="228.564"></line>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="596.338,228.564 549.7,228.564 548.692,228.564 			"></polyline>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="548.692,228.564 548.692,229.743 548.692,230.418 
                                548.692,231.102 548.692,232.281 			"></polyline>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="594.474,280.269 594.474,281.286 594.474,301.554 
                                594.474,302.571 			"></polyline>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="595.149,302.571 595.149,301.554 595.149,281.286 
                                595.149,280.269 			"></polyline>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="593.799,280.269 593.799,281.286 593.799,301.554 
                                593.799,302.571 			"></polyline>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="596.338,302.571 595.149,302.571 594.474,302.571 
                                593.799,302.571 592.62,302.571 			"></polyline>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="592.62,280.269 592.62,279.252 592.62,232.281 			"></polyline>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="592.62" y1="279.252" x2="596.338" y2="279.252"></line>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="596.338,228.564 596.338,279.252 596.338,280.269 			"></polyline>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="596.338,280.269 595.149,280.269 594.474,280.269 
                                593.799,280.269 592.62,280.269 			"></polyline>
                        </g>
                    </g>
                    <g id="TEXT_00000070799492734674244430000011991838013462722986_">
                        <g>
                            <text transform="matrix(1 0 0 1 498.9804 268.5162)"><tspan x="0" y="0" font-family="'ArialMT'" font-size="10.8px">PRIMARY</tspan><tspan x="-0.599" y="12.96" font-family="'ArialMT'" font-size="10.8px">RETREAT</tspan></text>
                        </g>
                    </g>
                </g>
                {/* Option: Primary Patio Entry */}
                <g id="primaryDoorToPat" data-option="primaryDoorToPat" style={{ display: active.primaryDoorToPat ? "block" : "none" }} fill="#CC0001">
                    <g>
                        <rect x="591.178" y="319.129" fill="#FFFFFF" width="6.339" height="21.628"></rect>
                        <path fill="none" stroke="#CC0001" stroke-width="0.405" d="M592.616,340.757c-11.945,0-21.628-9.683-21.628-21.628"></path>
                        <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="592.616" y1="319.129" x2="592.616" y2="320.312"></line>
                        <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="592.616" y1="320.312" x2="570.988" y2="320.312"></line>
                        <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="570.988" y1="320.312" x2="570.988" y2="319.129"></line>
                        <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="570.988" y1="319.129" x2="592.616" y2="319.129"></line>
                        <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="592.616,319.129 596.334,319.129 596.334,340.757 
                            592.616,340.757 		"></polyline>
                    </g>
                </g>
                {/* Option: BBQ Connection */}
                <g id="bbqConn" data-option="bbqConn" style={{ display: active.bbqConn ? "block" : "none" }} fill="#CC0001">
                    <g>
                        <g id="LINE_00000178170147710174444010000003504022459154358669_">
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="596.334" y1="354.275" x2="612.954" y2="354.275"></line>
                        </g>
                        <g id="CIRCLE_00000052804228872136666450000008116445120766250684_">
                            <circle fill="none" stroke="#CC0001" stroke-width="0.405" cx="606.706" cy="354.275" r="2.703"></circle>
                        </g>
                    </g>
                </g>
                {/* Option: Great Room Fireplace */}
                <g id="greatRmFire" data-option="greatRmFire" style={{ display: active.greatRmFire ? "block" : "none" }} fill="#CC0001">
                    <g id="XMLID_00000122711367073510246050000009228402936042024619_">
                        <g>
                            <polygon points="609.175,460.353 609.175,470.19 596.341,470.19 596.341,467.823 606.817,467.823 606.817,459.714 
                                609.175,459.714 			"></polygon>
                            <polygon points="609.175,424.227 609.175,434.064 609.175,434.703 606.817,434.703 606.817,426.594 596.341,426.594 
                                596.341,424.227 			"></polygon>
                        </g>
                        <g>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="606.817" y1="434.703" x2="599.041" y2="438.087"></line>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="606.817" y1="459.714" x2="599.041" y2="456.339"></line>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="609.859" y1="434.064" x2="609.859" y2="460.353"></line>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="609.859" y1="460.353" x2="609.175" y2="460.353"></line>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="609.859" y1="434.064" x2="609.175" y2="434.064"></line>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="609.175,470.19 609.175,460.353 609.175,459.714 			"></polyline>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="609.175,434.703 609.175,434.064 609.175,424.227 			"></polyline>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="599.041" y1="456.339" x2="599.041" y2="438.087"></line>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="606.817" y1="467.823" x2="606.817" y2="459.714"></line>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="606.817" y1="434.703" x2="606.817" y2="426.594"></line>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="606.817" y1="459.714" x2="609.175" y2="459.714"></line>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="606.817" y1="434.703" x2="609.175" y2="434.703"></line>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="606.817" y1="467.823" x2="596.341" y2="467.823"></line>
                            <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="609.175,470.19 596.341,470.19 596.341,467.823 
                                596.341,426.594 596.341,424.227 609.175,424.227 			"></polyline>
                            <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="606.817" y1="426.594" x2="596.341" y2="426.594"></line>
                        </g>
                    </g>
                </g>
                {/* Option: Kitchen Double Oven */}
                <g id="kitchenDblOvn" data-option="kitchenDblOvn" style={{ display: active.kitchenDblOvn ? "block" : "none" }} fill="#CC0001">
                    <g id="v.1.opt-dlx-kitch.lbl" fill="#CC0001">
                        <g id="v.1.opt-dlx-kitch" fill="#CC0001">
                            <g>
                                <rect x="835.806" y="430.988" fill="#FFFFFF" width="16.347" height="102.055"></rect>
                                <g>
                                    <g>
                                        <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="844.043" y1="492.155" x2="844.043" y2="493.955"></line>
                                        
                                            <line fill="none" stroke="#CC0001" stroke-width="0.405" stroke-dasharray="4.2819,2.1409" x1="844.043" y1="496.096" x2="844.043" y2="507.871"></line>
                                        <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="844.043" y1="508.941" x2="844.043" y2="510.741"></line>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="844.043" y1="471.879" x2="844.043" y2="470.079"></line>
                                        
                                            <line fill="none" stroke="#CC0001" stroke-width="0.405" stroke-dasharray="3.39,1.695" x1="844.043" y1="468.384" x2="844.043" y2="433.636"></line>
                                        <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="844.043" y1="432.788" x2="844.043" y2="430.988"></line>
                                    </g>
                                </g>
                                <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="850.802" y1="471.879" x2="850.802" y2="492.155"></line>
                                <circle fill="none" stroke="#CC0001" stroke-width="0.405" cx="845.983" cy="487.169" r="2.939"></circle>
                                <circle fill="none" stroke="#CC0001" stroke-width="0.405" cx="845.983" cy="476.769" r="2.939"></circle>
                                <circle fill="none" stroke="#CC0001" stroke-width="0.405" cx="839.234" cy="487.822" r="2.286"></circle>
                                <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="835.933" y1="471.879" x2="835.933" y2="492.155"></line>
                                <circle fill="none" stroke="#CC0001" stroke-width="0.405" cx="839.234" cy="476.406" r="2.286"></circle>
                                <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="852.154" y1="532.031" x2="835.933" y2="532.031"></line>
                                <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="852.154" y1="511.755" x2="835.933" y2="511.755"></line>
                                <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="850.802" y1="532.031" x2="850.802" y2="511.755"></line>
                                <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="835.257" y1="531.017" x2="835.257" y2="512.769"></line>
                                <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="834.581" y1="531.017" x2="834.581" y2="512.769"></line>
                                <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="835.257" y1="531.017" x2="834.581" y2="531.017"></line>
                                
                                    <line id="MeshWire_x5F_0_00000036973245356435734850000013951945689590970754_" fill="none" stroke="#CC0001" stroke-width="0.405" x1="852.154" y1="471.879" x2="835.933" y2="471.879"></line>
                                
                                    <line id="MeshWire_x5F_0_00000117646727680823045670000004405839715187347890_" fill="none" stroke="#CC0001" stroke-width="0.405" x1="835.933" y1="471.879" x2="835.933" y2="430.988"></line>
                                
                                    <line id="MeshWire_x5F_0_00000172401422689692052540000012470235161274252203_" fill="none" stroke="#CC0001" stroke-width="0.405" x1="835.933" y1="430.988" x2="852.154" y2="430.988"></line>
                                
                                    <line id="MeshWire_x5F_0_00000156549092184178510370000000147742169469291170_" fill="none" stroke="#CC0001" stroke-width="0.405" x1="835.933" y1="492.155" x2="852.154" y2="492.155"></line>
                                <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="852.154,430.988 852.154,533.045 835.933,533.045 
                                    835.933,492.155 		"></polyline>
                                <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="835.933" y1="530.341" x2="835.257" y2="530.341"></line>
                                <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="835.933" y1="529.666" x2="835.257" y2="529.666"></line>
                                <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="835.933" y1="514.121" x2="835.257" y2="514.121"></line>
                                <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="835.933" y1="513.445" x2="835.257" y2="513.445"></line>
                                <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="835.257" y1="512.769" x2="834.581" y2="512.769"></line>
                            </g>
                        </g>
                        <g id="TEXT_00000144322674995118850730000004801955599934399883_">
                            <g>
                                <text transform="matrix(1 0 0 1 838.1171 520.5499)"><tspan x="0" y="0" font-family="'ArialMT'" font-size="5.4px">DBL</tspan><tspan x="-2.399" y="6.48" font-family="'ArialMT'" font-size="5.4px">OVEN</tspan></text>
                            </g>
                        </g>
                    </g>
                </g>
                {/* Option: Morning Kitchen */}
                <g id="morningKitchen" data-option="morningKitchen" style={{ display: active.morningKitchen ? "block" : "none" }} fill="#CC0001">
                    <g id="v.1.opt-morn-kitch" fill="#CC0001">
                        <g>
                            <polygon fill="#FFFFFF" points="831.903,533.043 831.903,531.18 800.615,531.18 800.615,533.043 799.773,533.043 799.773,559.831 
                                770.713,559.831 770.713,571.57 799.773,571.57 799.773,590.832 858.434,590.832 858.434,533.043 		"></polygon>
                            <g id="XMLID_00000118361221293844285120000012442750691676509357_">
                                <g>
                                    <rect x="797.406" y="553.662" width="2.367" height="3.042"></rect>
                                    <polygon points="797.406,580.023 797.406,575.622 799.773,575.622 799.773,580.023 799.773,582.723 799.773,590.832 
                                        797.406,590.832 				"></polygon>
                                    <polygon points="855.87,571.23 855.87,590.832 855.852,590.832 852.154,590.832 852.154,582.723 852.154,571.23 				"></polygon>
                                    <polygon points="852.154,533.043 855.852,533.043 855.87,533.043 855.87,546.903 852.154,546.903 852.154,535.41 
                                        835.935,535.41 828.159,535.41 828.159,533.043 835.935,533.043 844.044,533.043 				"></polygon>
                                </g>
                                <g>
                                    
                                        <line fill="none" stroke="#CC0001" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="844.044" y1="533.043" x2="844.044" y2="533.106"></line>
                                    
                                        <line fill="none" stroke="#CC0001" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="799.773" y1="582.723" x2="852.154" y2="582.723"></line>
                                    
                                        <line fill="none" stroke="#CC0001" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="828.159" y1="533.043" x2="799.773" y2="533.043"></line>
                                    
                                        <line fill="none" stroke="#CC0001" stroke-width="0.405" stroke-dasharray="3.6,1.8" x1="828.159" y1="535.41" x2="799.773" y2="535.41"></line>
                                    <path fill="none" stroke="#CC0001" stroke-width="0.405" stroke-dasharray="3.6,1.8" d="M797.406,575.622
                                        c-4.626,0-9.063-1.683-12.519-4.725c-0.297-0.261-0.585-0.531-0.864-0.81"></path>
                                    <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="799.773" y1="580.023" x2="835.935" y2="580.023"></line>
                                    <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="835.935" y1="580.023" x2="835.935" y2="535.41"></line>
                                    <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="854.692,548.928 854.016,548.928 853.333,548.928 				"></polyline>
                                    <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="854.692,569.205 854.016,569.205 853.333,569.205 				"></polyline>
                                    <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="855.87" y1="546.903" x2="856.888" y2="546.903"></line>
                                    <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="856.888" y1="546.903" x2="856.888" y2="571.23"></line>
                                    <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="856.888" y1="571.23" x2="855.87" y2="571.23"></line>
                                    <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="855.852,590.832 852.154,590.832 799.773,590.832 				"></polyline>
                                    <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="799.773" y1="590.832" x2="797.406" y2="590.832"></line>
                                    <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="828.159" y1="533.043" x2="828.159" y2="535.41"></line>
                                    <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="828.159,535.41 835.935,535.41 852.154,535.41 				"></polyline>
                                    <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="855.852,533.043 852.154,533.043 844.044,533.043 
                                        835.935,533.043 828.159,533.043 				"></polyline>
                                    <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="797.406" y1="553.662" x2="797.406" y2="556.704"></line>
                                    <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="797.406" y1="556.704" x2="799.773" y2="556.704"></line>
                                    <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="799.773,556.704 799.773,553.662 799.773,535.41 
                                        799.773,533.043 				"></polyline>
                                    <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="799.773" y1="575.622" x2="797.406" y2="575.622"></line>
                                    <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="797.406,575.622 797.406,580.023 797.406,590.832 				"></polyline>
                                    <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="799.773,590.832 799.773,582.723 799.773,580.023 
                                        799.773,575.622 				"></polyline>
                                    <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="797.406" y1="553.662" x2="799.773" y2="553.662"></line>
                                    <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="852.154" y1="546.903" x2="855.87" y2="546.903"></line>
                                    <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="855.87" y1="571.23" x2="852.154" y2="571.23"></line>
                                    <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="852.154,571.23 852.154,582.723 852.154,590.832 				"></polyline>
                                    <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="855.87" y1="590.832" x2="855.87" y2="571.23"></line>
                                    <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="855.87,571.23 855.87,570.222 855.87,547.92 				"></polyline>
                                    <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="852.154,547.92 852.154,570.222 852.154,571.23 				"></polyline>
                                    <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="797.406" y1="556.704" x2="798.243" y2="557.541"></line>
                                    <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="798.243,557.541 784.888,570.897 784.86,570.924 				"></polyline>
                                    <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="784.86" y1="570.924" x2="784.023" y2="570.087"></line>
                                    <line fill="none" stroke="#CC0001" stroke-width="0.405" x1="784.023" y1="570.087" x2="797.406" y2="556.704"></line>
                                    <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="854.692,570.222 854.692,569.205 854.692,548.928 
                                        854.692,547.92 				"></polyline>
                                    <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="853.333,547.92 853.333,548.928 853.333,569.205 
                                        853.333,570.222 				"></polyline>
                                    <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="854.016,570.222 854.016,569.205 854.016,548.928 
                                        854.016,547.92 				"></polyline>
                                    <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="855.87,570.222 854.692,570.222 854.016,570.222 
                                        853.333,570.222 852.154,570.222 				"></polyline>
                                    <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="852.154,547.92 852.154,546.903 852.154,535.41 				"></polyline>
                                    <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="855.87,533.043 855.87,546.903 855.87,547.92 				"></polyline>
                                    <polyline fill="none" stroke="#CC0001" stroke-width="0.405" points="855.87,547.92 854.692,547.92 854.016,547.92 
                                        853.333,547.92 852.154,547.92 				"></polyline>
                                </g>
                            </g>
                        </g>
                    </g>
                    <g id="v.1.opt-morn-kitch.lbl" fill="#CC0001">
                        <g id="TEXT_00000075882104780853176680000013221669777373589170_">
                            <g>
                                <text transform="matrix(1 0 0 1 758.9911 563.419)" font-family="'ArialMT'" font-size="7.2px">PANTRY</text>
                            </g>
                        </g>
                        <g id="TEXT_00000023255038731224980160000017365890166049873299_">
                            <g>
                                <text transform="matrix(1 0 0 1 800.8085 557.5753)"><tspan x="0" y="0" font-family="'ArialMT'" font-size="7.2px">MORNING</tspan><tspan x="1.598" y="8.64" font-family="'ArialMT'" font-size="7.2px">KITCHEN</tspan></text>
                            </g>
                        </g>
                    </g>
                </g>
                {/* Hotspots: Mudroom Hotspot */}
                <MudroomHotspot />
                <GreatRoomHotspot />
            </g>
        </svg>

  );
}



// ❗ if you have a placeholder, TYPE IT so it matches Floor['SVG']
export const EmptySVG: React.FC<SVGProps> = () => null;

export const planAMainOptions = [
    { key: "primaryRetreat", label: "Primary Retreat" },
    { key: "primaryDoorToPat", label: "Primary Patio Entry" },
    { key: "bbqConn", label: "BBQ Connection" },
    { key: "greatRmFire", label: "Great Room Fireplace" },
    { key: "kitchenDblOvn", label: "Kitchen Double Oven" },
    { key: "morningKitchen", label: "Morning Kitchen" },
    { key: "bsOpt1", label: "Just BSING" },
];

export const planA = {
    code: "planA",
    floors: [
        { id: "main", name: "Main Level", SVG:PlanASVG, options: planAMainOptions },
    ],
};
