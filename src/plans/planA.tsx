import type { SVGProps } from "../types/floorplan";

export const planAOptions = [
  { key: "diningRoom", label: "Dining Room" },
  { key: "study", label: "Study" },
  { key: "primaryTwo", label: "Primary Bed 2" },
  { key: "gourmetKitchen", label: "Gourmet Kitchen" },
  { key: "garage", label: "Two Car Garage" },
];

export function PlanASVG({ active, panZoom }: SVGProps) {
  const { onWheel, onPointerDown, onPointerMove, onPointerUp, scale, tx, ty } = panZoom;

  return (
        <svg
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
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#777" floodOpacity="0.7" />
                </filter>
            </defs>

            {/* canvas background */}
            <rect x={0} y={0} width={1200} height={1200} fill="url(#diag)" />

            {/* World transform */}
            <g transform={`translate(${tx},${ty}) scale(${scale})`}>
                <g>
                    <g>
                        <line fill="none" stroke="#666666" strokeMiterlimit={10} x1="799.4" y1="13.2" x2="809.4" y2="13.2" />

                        <line fill="none" stroke="#666666" strokeMiterlimit={10} strokeDasharray="19.9991,1" x1="810.4" y1="13.2" x2="998.9" y2="13.2" />
                        <line fill="none" stroke="#666666" strokeMiterlimit={10} x1="999.4" y1="13.2" x2="1009.4" y2="13.2" />
                    </g>
                </g>
                <g>
                    <g>
                        <line fill="none" stroke="#666666" strokeMiterlimit={10} x1="495.5" y1="13.2" x2="505.5" y2="13.2" />

                        <line fill="none" stroke="#666666" strokeMiterlimit={10} strokeDasharray="19.4154,0.9708" x1="506.5" y1="13.2" x2="771" y2="13.2" />
                        <line fill="none" stroke="#666666" strokeMiterlimit={10} x1="771.5" y1="13.2" x2="781.5" y2="13.2" />
                    </g>
                </g>
                <g>
                    <g>
                        <line fill="none" stroke="#666666" strokeMiterlimit={10} x1="491.5" y1="23.2" x2="501.5" y2="23.2" />

                        <line fill="none" stroke="#666666" strokeMiterlimit={10} strokeDasharray="19.7074,0.9854" x1="502.5" y1="23.2" x2="771" y2="23.2" />
                        <line fill="none" stroke="#666666" strokeMiterlimit={10} x1="771.5" y1="23.2" x2="781.5" y2="23.2" />
                    </g>
                </g>
                <g>
                    <g>
                        <line fill="none" stroke="#666666" strokeMiterlimit={10} x1="782.1" y1="143.4" x2="782.1" y2="133.4" />

                        <line fill="none" stroke="#666666" strokeMiterlimit={10} strokeDasharray="18.8663,0.9433" x1="782.1" y1="132.5" x2="782.1" y2="33.9" />
                        <line fill="none" stroke="#666666" strokeMiterlimit={10} x1="782.1" y1="33.4" x2="782.1" y2="23.4" />
                    </g>
                </g>
                <g>
                    <g>
                        <line fill="none" stroke="#666666" strokeMiterlimit={10} x1="792.3" y1="143.4" x2="792.3" y2="133.4" />

                        <line fill="none" stroke="#666666" strokeMiterlimit={10} strokeDasharray="18.8663,0.9433" x1="792.3" y1="132.5" x2="792.3" y2="33.9" />
                        <line fill="none" stroke="#666666" strokeMiterlimit={10} x1="792.3" y1="33.4" x2="792.3" y2="23.4" />
                    </g>
                </g>
                <g>
                    <g>
                        <line fill="none" stroke="#666666" strokeMiterlimit={10} x1="1009.6" y1="432" x2="1009.6" y2="422" />

                        <line fill="none" stroke="#666666" strokeMiterlimit={10} strokeDasharray="19.8996,0.995" x1="1009.6" y1="421" x2="1009.6" y2="24.5" />
                        <line fill="none" stroke="#666666" strokeMiterlimit={10} x1="1009.6" y1="24" x2="1009.6" y2="14" />
                    </g>
                </g>
                <rect x="632" y="13.2" fill="#666666" width="10.2" height="10.2" />
                <rect x="782.1" y="13.2" fill="#666666" width="10.2" height="10.2" />
                <rect x="136.7" y="392.7" fill="none" stroke="#666666" strokeWidth={0.25} strokeMiterlimit={10} width="8.9" height="29.3" />
                <polygon fill="#666666" points="145.4,275.3 145.4,380.1 186.5,380.1 186.5,384.4 145.4,384.4 145.4,392.7 138.4,392.7 
            138.4,275.3 138.4,275.3 138.4,270.4 138.4,270.4 138.4,13.1 182.7,13.1 182.7,17.7 143.2,17.7 143.2,270.4 213.3,270.4 
            213.3,275.3 	"/>
                <polygon fill="#666666" points="280.3,267.8 280.3,275.1 246.8,275.1 246.8,270.4 251.4,270.4 251.4,13.4 256.3,13.4 256.3,267.8 	
            "/>
                <rect x="211.9" y="13.1" fill="#666666" width="75.9" height="4.5" />
                <rect x="331.5" y="13.1" fill="#666666" width="3.8" height="4.5" />
                <rect x="407.7" y="13.1" fill="#666666" width="3.8" height="4.5" />
                <rect x="599.1" y="143.2" fill="#666666" width="27.7" height="5.5" />
                <rect x="670.7" y="143.2" fill="#666666" width="3.5" height="5.5" />
                <rect x="717.6" y="143.2" fill="#666666" width="3.5" height="5.5" />
                <rect x="765.1" y="143.2" fill="#666666" width="27.2" height="5.5" />
                <rect x="786.8" y="145.9" fill="#666666" width="5.5" height="18" />
                <rect x="786.8" y="207.4" fill="#666666" width="5.5" height="96.7" />
                <rect x="868.6" y="434.3" fill="#666666" width="64.7" height="7.9" />
                <polygon fill="#666666" points="1010.4,434.3 1010.4,539.5 1002.1,539.5 1002.1,442.2 991.1,442.2 991.1,434.3 	" />
                <rect x="1002.1" y="598" fill="#666666" width="8.3" height="126.6" />
                <rect x="1002.1" y="784.3" fill="#666666" width="8.3" height="125.4" />
                <polygon fill="#666666" points="1010.4,968.7 1010.4,1073.6 989.7,1073.6 989.7,1065.7 1002.1,1065.7 1002.1,968.7 	" />
                <rect x="138.4" y="434.7" fill="#666666" width="4.8" height="49" />
                <rect x="138.4" y="528" fill="#666666" width="4.8" height="3.2" />
                <polygon fill="#666666" points="257.5,1170.2 257.5,1175.5 215.6,1175.5 215.6,1146.3 192.2,1146.3 192.2,1141.4 215.6,1141.4 
            215.6,1018.1 220.9,1018.1 220.9,1170.2 	"/>
                <polygon fill="#666666" points="342.9,975 342.9,979.8 288.3,979.8 288.3,975 322.3,975 322.3,860 288.3,860 288.3,855.2 
            324.7,855.2 324.7,850.5 329.5,850.5 329.5,855.3 329.8,855.3 329.8,975 	"/>
                <polygon fill="#666666" points="250.6,855.2 250.6,860 245.8,860 245.8,893.4 240.5,893.4 240.5,888.5 145.5,888.5 145.5,898.1 
            138.4,898.1 138.4,738 143.2,738 143.2,802.6 245.4,802.6 245.4,812.3 240.6,812.3 240.6,807.9 143.2,807.9 143.2,883.5 
            240.5,883.5 240.5,845.6 245.8,845.6 245.8,855.2 	"/>
                <rect x="327.6" y="626.9" fill="#666666" width="4.8" height="18.8" />
                <polygon fill="#666666" points="250.6,974.8 250.6,979.9 220.7,979.9 220.7,984.8 215.7,984.8 215.7,979.9 143.2,979.9 
            143.2,1141.4 162.4,1141.4 162.4,1146.3 138.4,1146.3 138.4,927.3 145.5,927.3 145.5,936.4 168.5,936.4 168.5,974.8 240.3,974.8 
            240.3,931.4 245.6,931.4 245.6,974.8 	"/>
                <polygon fill="#666666" points="391,980.1 391,1058.4 401.5,1058.4 401.5,1074.1 391,1074.1 391,1175.5 349,1175.5 349,1170.2 
            385.7,1170.2 385.7,980.1 378.2,980.1 378.2,974.9 383.2,974.9 383.2,927.7 391,927.7 391,974.9 407.2,974.9 407.2,980.1 	"/>
                <polygon fill="#666666" points="520.5,1094.7 520.5,1103 484.5,1103 484.5,1073.6 473.5,1073.6 473.5,1058.6 484.5,1058.6 
            484.5,980.2 466.9,980.2 466.9,974.8 484.5,974.8 484.5,761.2 491.7,761.2 491.7,802.2 496.2,802.2 496.2,806.9 489.3,806.9 
            489.3,1095.4 491.9,1095.4 491.9,1094.7 	"/>
                <polygon fill="#666666" points="397.8,624.3 397.8,631.4 391,631.4 391,639.1 383.2,639.1 383.2,629.1 304,629.1 304,697.5 
            327.6,697.5 327.6,681.1 332.4,681.1 332.4,697.5 340.4,697.5 340.4,702.1 306.4,702.1 306.4,802.6 385.7,802.6 385.7,702.1 
            378.7,702.1 378.7,697.5 383.3,697.5 383.3,690.5 391,690.5 391,855.2 383.4,855.2 383.4,807.7 329.5,807.7 329.5,814.9 
            324.6,814.9 324.6,807.7 299.2,807.7 299.2,629.1 143.2,629.1 143.2,693.7 138.4,693.7 138.4,575 143.2,575 143.2,623.9 
            383.2,623.9 383.2,596.4 391,596.4 391,624.3 	"/>
                <polygon fill="#666666" points="554.2,715.4 554.2,720.4 544.1,720.4 544.1,671.3 549.2,671.3 549.2,715.4 	" />
                <polygon fill="#666666" points="599.5,671.3 599.5,725.1 594.4,725.1 594.4,720.4 589.6,720.4 589.6,715.4 594.4,715.4 
            594.4,671.3 	"/>
                <polygon fill="#666666" points="810.5,434.3 810.5,442.2 792.3,442.2 792.3,806.8 785.2,806.8 785.2,771.1 708.3,771.1 
            708.3,806.8 535,806.8 535,802.2 544.1,802.2 544.1,767.7 554.2,767.7 554.2,772.4 549.2,772.4 549.2,802.2 594.5,802.2 
            594.5,772.4 589.8,772.4 589.8,767.7 594.5,767.7 594.5,762.9 599.6,762.9 599.6,802.2 703.4,802.2 703.4,671.6 491.9,671.6 
            491.9,717.5 484.4,717.5 484.4,631.8 476.9,631.8 476.9,624.3 484.4,624.3 484.4,617.1 491.9,617.1 491.9,663.9 712.8,663.9 
            712.8,668.8 708.3,668.8 708.3,669.2 708.3,669.2 708.3,765.6 786.8,765.6 786.8,669 746.7,669 746.7,664.3 786.8,664.3 
            786.8,347.6 792.3,347.6 792.3,434.3 	"/>
                <polygon fill="#666666" points="812.2,1066 812.2,1074.2 792.4,1074.2 792.4,1102.8 756.4,1102.8 756.4,1094.7 784.2,1094.7 
            784.2,1066 	"/>
                <rect x="810.5" y="433.4" fill="none" stroke="#666666" strokeMiterlimit={10} strokeDasharray="9,1" width="58" height="7.7" />
                <rect x="933.3" y="433.4" fill="none" stroke="#666666" strokeMiterlimit={10} strokeDasharray="9,1" width="58" height="7.7" />

                <rect x="1003.1" y="539.5" fill="none" stroke="#666666" strokeMiterlimit={10} strokeDasharray="9,1" width="7.9" height="58.9" />

                <rect x="1003.1" y="724.6" fill="none" stroke="#666666" strokeMiterlimit={10} strokeDasharray="9,1" width="7.9" height="58.9" />

                <rect x="1003.2" y="910.7" fill="none" stroke="#666666" strokeMiterlimit={10} strokeDasharray="9,1" width="7.9" height="58.9" />
                <rect x="787.7" y="163.9" fill="none" stroke="#666666" strokeWidth={0.5} strokeMiterlimit={10} width="6.2" height="43.5" />
                <rect x="787.7" y="304.2" fill="none" stroke="#666666" strokeWidth={0.5} strokeMiterlimit={10} width="6.2" height="43.5" />
                <rect x="136.7" y="484.1" fill="none" stroke="#666666" strokeWidth={0.5} strokeMiterlimit={10} width="6.2" height="43.5" />
                <rect x="287.9" y="11.4" fill="none" stroke="#666666" strokeWidth={0.5} strokeMiterlimit={10} width="43.5" height="6.2" />
                <rect x="182.5" y="11.5" fill="none" stroke="#666666" strokeWidth={0.5} strokeMiterlimit={10} width="29.3" height="6.2" />
                <rect x="335.3" y="11.5" fill="none" stroke="#666666" strokeWidth={0.5} strokeMiterlimit={10} width="72.4" height="6.2" />
                <rect x="411.5" y="11.5" fill="none" stroke="#666666" strokeWidth={0.5} strokeMiterlimit={10} width="43.5" height="6.2" />
                <rect x="136.7" y="531.7" fill="none" stroke="#666666" strokeWidth={0.5} strokeMiterlimit={10} width="6.2" height="43.5" />
                <rect x="136.7" y="693.8" fill="none" stroke="#666666" strokeWidth={0.5} strokeMiterlimit={10} width="6.2" height="44.2" />
                <rect x="257.5" y="1170.7" fill="none" stroke="#666666" strokeWidth={0.5} strokeMiterlimit={10} width="43.5" height="6.2" />
                <rect x="301" y="1170.8" fill="#666666" width="4.2" height="4.2" />
                <rect x="163" y="1141.9" fill="none" stroke="#666666" strokeWidth={0.5} strokeMiterlimit={10} width="29.2" height="6.2" />
                <rect x="136.8" y="897.8" fill="none" stroke="#666666" strokeWidth={0.5} strokeMiterlimit={10} width="8.7" height="29.4" />
                <rect x="305.1" y="1170.7" fill="none" stroke="#666666" strokeWidth={0.5} strokeMiterlimit={10} width="43.5" height="6.2" />
                <rect x="721.4" y="142.1" fill="none" stroke="#666666" strokeWidth={0.5} strokeMiterlimit={10} width="43.5" height="6.2" />
                <rect x="674.2" y="142.2" fill="none" stroke="#666666" strokeWidth={0.5} strokeMiterlimit={10} width="43.5" height="6.2" />
                <rect x="627" y="142.1" fill="none" stroke="#666666" strokeWidth={0.5} strokeMiterlimit={10} width="43.5" height="6.2" />
                <rect x="812.2" y="1065.2" fill="none" stroke="#666666" strokeMiterlimit={10} width="177.5" height="2.5" />
                <rect x="520.5" y="1094.7" fill="none" stroke="#666666" strokeMiterlimit={10} width="235.5" height="2.5" />
                <polygon fill="#666666" points="491.6,422.6 491.6,462.8 484.4,462.8 484.4,435.2 390.6,435.2 390.6,462.1 383.3,462.1 
            383.3,435.2 138.4,435.2 138.4,422 145.6,422 145.6,430 229.6,430 229.6,384.5 224.7,384.5 224.7,379.7 234.4,379.7 234.4,430 
            306.4,430 306.4,379.7 328.4,379.7 328.4,339.8 333.3,339.8 333.3,430 429.1,430 429.1,273.3 323.7,273.3 323.7,268 434.4,268 
            434.4,325.9 440.2,325.9 440.2,330.9 434.4,330.9 434.4,430 484.4,430 484.4,422.6 	"/>
                <polygon fill="#666666" points="512.1,143.2 512.1,148.6 491.5,148.6 491.5,379.5 484.3,379.5 484.3,331 478.4,331 478.4,325.9 
            487,325.9 487,17.7 455,17.7 455,13.1 491.5,13.1 491.5,143.2 	"/>


                {/* labels */}
                {/* BEDROOM 1 + dims */}
                <text x={370} y={135} fontFamily="arial" textAnchor="middle" fill="#111827">
                    <tspan fontSize={22}>PRIMARY BEDROOM</tspan>
                    <tspan x={370} dy="1.2em" fontSize={16}>15'-11" x 17'-3"</tspan>
                    <tspan x={198} y={135} fontSize={14}>Walk-in Closet</tspan>
                    <tspan x={382} y={380} fontSize={14}>Walk-in Closet</tspan>
                </text>

                {/* PRIMARY BATH */}
                <text x={235} y={340} fontFamily="arial" fontSize={22} textAnchor="middle" fill="#111827">
                    PRIMARY BATH
                </text>

                {/* COVERED PATIO */}
                <text x={640} y={90} fontFamily="arial" fontSize={22} textAnchor="middle" fill="#111827">
                    COVERED PATIO
                </text>

                {/* GREAT ROOM + dims */}
                <text x={640} y={300} fontFamily="arial" textAnchor="middle" fill="#111827">
                    <tspan fontSize={22}>GREAT ROOM</tspan>
                    <tspan x={640} dy="1.2em" fontSize={16}>20'-5" x 14'-9"</tspan>
                </text>

                {/* NOOK + dims */}
                <text x={640} y={460} fontFamily="arial" textAnchor="middle" fill="#111827">
                    <tspan fontSize={22}>NOOK</tspan>
                    <tspan x={640} dy="1.2em" fontSize={16}>20'-5" x 9'-0"</tspan>
                </text>

                {/* KITCHEN + dims */}
                <text x={640} y={605} fontFamily="arial" textAnchor="middle" fill="#111827">
                    <tspan fontSize={22}>KITCHEN</tspan>
                    <tspan x={640} dy="1.2em" fontSize={16}>20'-5" x 11'-9"</tspan>
                </text>

                {/* ENTRY */}
                <text x={438} y={855} fontFamily="arial" fontSize={22} textAnchor="middle" fill="#111827">
                    ENTRY
                </text>

                {/* COVERED ENTRY */}
                <text x={438} y={1025} fontFamily="arial" fontSize={10} textAnchor="middle" fill="#111827">
                    COVERED ENTRY
                </text>

                {/* MUD ROOM */}
                <text x={518} y={700} fontFamily="arial" fontSize={22} textAnchor="middle" fill="#111827">
                    MUD
                </text>

                {/* GARAGE + dims */}
                <text x={640} y={955} fontFamily="arial" textAnchor="middle" fill="#111827">
                    <tspan fontSize={22}>2-CAR GARAGE</tspan>
                    <tspan x={640} dy="1.2em" fontSize={16}>20'-5" x 19'-19"</tspan>
                </text>

                {/* RV GARAGE + dims */}
                <text x={900} y={655} fontFamily="arial" textAnchor="middle" fill="#111827">
                    <tspan fontSize={22}>RV GARAGE</tspan>
                    <tspan x={900} dy="1.2em" fontSize={16}>14'-6" x 43'-1"</tspan>
                </text>

                {/* OPTION: Dining Room */}
                <g id="diningRoom" data-option="diningRoom" style={{ display: active.diningRoom ? "block" : "none" }}>
                    <rect x={147} y={440} width={230} height={178} fill="#dcdcdc" stroke="#dcdcdc" strokeWidth={10} filter="url(#glow)" />
                    <text x={255} y={525} fontFamily="arial" textAnchor="middle" fill="#111827">
                        <tspan fontSize={22}>DINING ROOM</tspan>
                        <tspan x={255} dy="1.2em" fontSize={16}>16'-7" x 13'-1"</tspan>
                    </text>
                </g>

                {/* OPTION: PRIMARY BED 2 */}
                <g id="primaryTwo" data-option="primaryTwo" style={{ display: active.primaryTwo ? "block" : "none" }}>
                    <rect x={800} y={30} width={200} height={400} fill="#dcdcdc" stroke="#dcdcdc" strokeWidth={10} filter="url(#glow)" />
                    <rect x={500} y={20} width={280} height={120} fill="#dcdcdc" stroke="#dcdcdc" strokeWidth={10} filter="url(#glow)" />
                    <g id="primary_bed_2">
                        <polygon fill="#675C4D" points="513,143.6 513,149.5 487.2,149.5 487.2,13.9 493.1,13.9 493.1,143.6 	"/>
                        <rect x="599.5" y="143.6" fill="#675C4D" width="27.4" height="5.9"/>
                        <rect x="670.3" y="143.6" fill="#675C4D" width="4.3" height="5.9"/>
                        <rect x="717.5" y="143.6" fill="#675C4D" width="4.3" height="5.9"/>
                        <rect x="866.6" y="13.8" fill="#675C4D" width="3" height="5.2"/>
                        <rect x="928.4" y="13.8" fill="#675C4D" width="3" height="5.2"/>
                        <rect x="975.6" y="13.8" fill="#675C4D" width="34.5" height="5.2"/>
                        
                            <rect x="995.3" y="25" transform="matrix(6.123234e-17 -1 1 6.123234e-17 979.8119 1035.0668)" fill="#675C4D" width="24.2" height="5.2"/>
                        
                            <rect x="950.2" y="124.3" transform="matrix(6.123234e-17 -1 1 6.123234e-17 880.4996 1134.3792)" fill="#675C4D" width="114.5" height="5.2"/>
                        <polygon fill="#675C4D" points="1010,214.6 1010,441.9 787.4,441.9 787.4,430.7 794.9,430.7 794.9,434.4 1004.8,434.4 
                            1004.8,257.7 961.2,257.7 961.2,242.6 847.5,242.6 847.5,291.7 842.3,291.7 842.3,235.3 1004.8,235.3 1004.8,214.6 	"/>
                        <rect x="924.5" y="329.5" fill="#675C4D" width="82" height="4.9"/>
                        <rect x="842.6" y="329.5" fill="#675C4D" width="49.2" height="4.9"/>
                        <polygon fill="#675C4D" points="847.5,324.5 847.5,436 842.6,436 842.6,365.5 837.6,365.5 837.6,360.5 842.6,360.5 842.6,324.5 	
                            "/>
                        <polygon fill="#675C4D" points="792.7,19 792.7,360.5 800,360.5 800,365.5 795,365.5 795,379.8 787.4,379.8 787.4,149.5 
                            764.9,149.5 764.9,143.6 787.4,143.6 787.4,13.8 792,13.8 792,13.8 822.3,13.8 822.3,19 	"/>
                        <rect x="513" y="145.1" fill="none" stroke="#675C4D" strokeMiterlimit={10} width="43.3" height="2.2"/>
                        <rect x="543.2" y="147.3" fill="none" stroke="#675C4D" strokeMiterlimit={10} width="43.3" height="2.2"/>
                        <rect x="627" y="142.9" fill="none" stroke="#675C4D" strokeMiterlimit={10} width="43.3" height="6.5"/>
                        <rect x="822.8" y="12.3" fill="none" stroke="#675C4D" strokeMiterlimit={10} width="43.3" height="6.5"/>
                        <rect x="931.4" y="12.3" fill="none" stroke="#675C4D" strokeMiterlimit={10} width="44.2" height="6.5"/>
                        
                            <rect x="993.6" y="51.3" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 1062.9509 -953.847)" fill="none" stroke="#675C4D" strokeMiterlimit={10} width="29.6" height="6.4"/>
                        <rect x="869.6" y="12.3" fill="none" stroke="#675C4D" strokeMiterlimit={10} width="58.7" height="6.5"/>
                        <rect x="674.3" y="142.9" fill="none" stroke="#675C4D" strokeMiterlimit={10} width="43.3" height="6.5"/>
                        <rect x="721.8" y="142.9" fill="none" stroke="#675C4D" strokeMiterlimit={10} width="43.3" height="6.5"/>
                    </g>
                    <text x={900} y={125} fontFamily="arial" textAnchor="middle" fill="#111827">
                        <tspan fontSize={22}>PRIMARY BED 2</tspan>
                        <tspan x={900} dy="1.2em" fontSize={16}>16'-7" x 13'-1"</tspan>
                    </text>
                </g>

                {/* OPTION: STUDY */}
                <g id="study" data-option="study" style={{ display: active.study ? "block" : "none" }}>
                    <rect x={147} y={440} width={230} height={178} fill="#dcdcdc" stroke="#dcdcdc" strokeWidth={10} filter="url(#glow)" />
                    <text x={255} y={525} fontFamily="arial" textAnchor="middle" fill="#111827">
                        <tspan fontSize={22}>STUDY</tspan>
                        <tspan x={255} dy="1.2em" fontSize={16}>16'-7" x 13'-1"</tspan>
                    </text>
                </g>

                {/* OPTION: Gourmet Kitchen */}
                <g id="gourmetKitchen" data-option="gourmetKitchen" style={{ display: active.gourmetKitchen ? "block" : "none" }}>
                    <rect x={499} y={489} width={280} height={170} fill="#dcdcdc" stroke="#dcdcdc" strokeWidth={10} filter="url(#glow)" /><polyline fill="none" stroke="#666666" stroke-miterlimit="10" points="491.9,635.2 700.3,635.2 700.3,663.9 	"/>
                    <polyline fill="none" stroke="#666666" stroke-miterlimit="10" points="758.4,663.9 758.4,624.2 786.8,624.2 	"/>
                    <polyline fill="none" stroke="#666666" stroke-miterlimit="10" points="786.8,493.9 758.4,493.9 758.4,577.2 786.8,577.2 	"/>
                    <polyline fill="none" stroke="#666666" stroke-miterlimit="10" points="786.8,579.3 752.2,579.3 752.2,622.4 786.8,622.4 	"/>
                    <polyline fill="none" stroke="#666666" stroke-miterlimit="10" points="750.5,622.4 745.8,622.4 745.8,579.3 750.5,579.3 	"/>
                    <rect x="555.3" y="524.6" fill="none" stroke="#666666" stroke-miterlimit="10" width="145" height="52.6"/>
                    <path fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" d="M624.8,574.4h-12.1c-1.1,0-2.1-0.9-2.1-2.1v-16.1
                        c0-1.1,0.9-2.1,2.1-2.1h12.1c1.1,0,2.1,0.9,2.1,2.1v16.1C626.9,573.5,626,574.4,624.8,574.4z"/>
                    <path fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" d="M643.2,574.4h-12.1c-1.1,0-2.1-0.9-2.1-2.1v-16.1
                        c0-1.1,0.9-2.1,2.1-2.1h12.1c1.1,0,2.1,0.9,2.1,2.1v16.1C645.3,573.5,644.4,574.4,643.2,574.4z"/>
                    <circle fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" cx="618.8" cy="564.3" r="2.5"/>
                    <circle fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" cx="637.2" cy="564.3" r="2.5"/>
                    <rect x="649.4" y="549.3" fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" width="29.6" height="29.4"/>
                    <path fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" d="M646.6,576h-36.8c-0.8,0-1.5-0.7-1.5-1.5v-23.6
                        c0-0.8,0.7-1.5,1.5-1.5h36.8c0.8,0,1.5,0.7,1.5,1.5v23.6C648.1,575.3,647.4,576,646.6,576z"/>
                    <g>
                        <text transform="matrix(1 0 0 1 654.5156 567.0391)" fill="#666666" font-family="'MyriadPro-Regular'" font-size="12px">DW</text>
                    </g>
                    <g>
                        
                            <text transform="matrix(6.123234e-17 -1 1 6.123234e-17 765.1775 609.7725)" fill="#666666" font-family="arial" font-size="12px">Ref</text>
                    </g>
                    <g>
                        <g>
                            <line fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" x1="555.3" y1="547.6" x2="558.8" y2="547.6"/>
                            
                                <line fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" stroke-dasharray="7.2632,7.2632" x1="566.1" y1="547.6" x2="693.2" y2="547.6"/>
                            <line fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" x1="696.8" y1="547.6" x2="700.3" y2="547.6"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <line fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" x1="555.3" y1="541" x2="558.8" y2="541"/>
                            
                                <line fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" stroke-dasharray="7.2632,7.2632" x1="566.1" y1="541" x2="693.2" y2="541"/>
                            <line fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" x1="696.8" y1="541" x2="700.3" y2="541"/>
                        </g>
                    </g>
                    <rect x="493.1" y="631.6" fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" width="37" height="2.6"/>
                    <rect x="493.1" y="635.6" fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" width="37" height="27.5"/>
                    <rect x="531.5" y="635.6" fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" width="63" height="29.6"/>
                    <rect x="637.8" y="635.6" fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" width="62.5" height="29.6"/>
                    <rect x="594.5" y="635.6" fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" width="43.2" height="29.6"/>
                    <circle fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" cx="602.5" cy="644.7" r="4.8"/>
                    <circle fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" cx="629.5" cy="644.7" r="4.8"/>
                    <circle fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" cx="629.5" cy="658.1" r="3.8"/>
                    <circle fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" cx="616.2" cy="658.1" r="3.8"/>
                    <circle fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" cx="602.5" cy="658.1" r="3.8"/>
                    <circle fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" cx="616.1" cy="639.7" r="1.2"/>
                    <circle fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" cx="621.1" cy="639.7" r="1.2"/>
                    <circle fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" cx="618.5" cy="643.3" r="1.2"/>
                    <circle fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" cx="613.4" cy="643.3" r="1.2"/>
                    <circle fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" cx="611" cy="639.7" r="1.2"/>
                    <g>
                        <text transform="matrix(1 0 0 1 503.1156 653.072)" fill="#666666" font-family="arial" font-size="12px">DO</text>
                    </g>
                </g>
            </g>
        </svg>

  );
}