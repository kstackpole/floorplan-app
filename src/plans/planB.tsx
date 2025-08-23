import type { SVGProps } from "../types/floorplan";


export function PlanBSVG({ active, panZoom }: SVGProps) {
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
                        <line fill="none" stroke="#666666" stroke-miterlimit="10" x1="799.4" y1="13.2" x2="809.4" y2="13.2" />

                        <line fill="none" stroke="#666666" stroke-miterlimit="10" stroke-dasharray="19.9991,1" x1="810.4" y1="13.2" x2="998.9" y2="13.2" />
                        <line fill="none" stroke="#666666" stroke-miterlimit="10" x1="999.4" y1="13.2" x2="1009.4" y2="13.2" />
                    </g>
                </g>
                <g>
                    <g>
                        <line fill="none" stroke="#666666" stroke-miterlimit="10" x1="495.5" y1="13.2" x2="505.5" y2="13.2" />

                        <line fill="none" stroke="#666666" stroke-miterlimit="10" stroke-dasharray="19.4154,0.9708" x1="506.5" y1="13.2" x2="771" y2="13.2" />
                        <line fill="none" stroke="#666666" stroke-miterlimit="10" x1="771.5" y1="13.2" x2="781.5" y2="13.2" />
                    </g>
                </g>
                <g>
                    <g>
                        <line fill="none" stroke="#666666" stroke-miterlimit="10" x1="491.5" y1="23.2" x2="501.5" y2="23.2" />

                        <line fill="none" stroke="#666666" stroke-miterlimit="10" stroke-dasharray="19.7074,0.9854" x1="502.5" y1="23.2" x2="771" y2="23.2" />
                        <line fill="none" stroke="#666666" stroke-miterlimit="10" x1="771.5" y1="23.2" x2="781.5" y2="23.2" />
                    </g>
                </g>
                <g>
                    <g>
                        <line fill="none" stroke="#666666" stroke-miterlimit="10" x1="782.1" y1="143.4" x2="782.1" y2="133.4" />

                        <line fill="none" stroke="#666666" stroke-miterlimit="10" stroke-dasharray="18.8663,0.9433" x1="782.1" y1="132.5" x2="782.1" y2="33.9" />
                        <line fill="none" stroke="#666666" stroke-miterlimit="10" x1="782.1" y1="33.4" x2="782.1" y2="23.4" />
                    </g>
                </g>
                <g>
                    <g>
                        <line fill="none" stroke="#666666" stroke-miterlimit="10" x1="792.3" y1="143.4" x2="792.3" y2="133.4" />

                        <line fill="none" stroke="#666666" stroke-miterlimit="10" stroke-dasharray="18.8663,0.9433" x1="792.3" y1="132.5" x2="792.3" y2="33.9" />
                        <line fill="none" stroke="#666666" stroke-miterlimit="10" x1="792.3" y1="33.4" x2="792.3" y2="23.4" />
                    </g>
                </g>
                <g>
                    <g>
                        <line fill="none" stroke="#666666" stroke-miterlimit="10" x1="1009.6" y1="432" x2="1009.6" y2="422" />

                        <line fill="none" stroke="#666666" stroke-miterlimit="10" stroke-dasharray="19.8996,0.995" x1="1009.6" y1="421" x2="1009.6" y2="24.5" />
                        <line fill="none" stroke="#666666" stroke-miterlimit="10" x1="1009.6" y1="24" x2="1009.6" y2="14" />
                    </g>
                </g>
                <rect x="632" y="13.2" fill="#666666" width="10.2" height="10.2" />
                <rect x="782.1" y="13.2" fill="#666666" width="10.2" height="10.2" />
                <rect x="136.7" y="392.7" fill="none" stroke="#666666" stroke-width="0.25" stroke-miterlimit="10" width="8.9" height="29.3" />
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
                <rect x="810.5" y="433.4" fill="none" stroke="#666666" stroke-miterlimit="10" stroke-dasharray="9,1" width="58" height="7.7" />
                <rect x="933.3" y="433.4" fill="none" stroke="#666666" stroke-miterlimit="10" stroke-dasharray="9,1" width="58" height="7.7" />

                <rect x="1003.1" y="539.5" fill="none" stroke="#666666" stroke-miterlimit="10" stroke-dasharray="9,1" width="7.9" height="58.9" />

                <rect x="1003.1" y="724.6" fill="none" stroke="#666666" stroke-miterlimit="10" stroke-dasharray="9,1" width="7.9" height="58.9" />

                <rect x="1003.2" y="910.7" fill="none" stroke="#666666" stroke-miterlimit="10" stroke-dasharray="9,1" width="7.9" height="58.9" />
                <rect x="787.7" y="163.9" fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" width="6.2" height="43.5" />
                <rect x="787.7" y="304.2" fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" width="6.2" height="43.5" />
                <rect x="136.7" y="484.1" fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" width="6.2" height="43.5" />
                <rect x="287.9" y="11.4" fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" width="43.5" height="6.2" />
                <rect x="182.5" y="11.5" fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" width="29.3" height="6.2" />
                <rect x="335.3" y="11.5" fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" width="72.4" height="6.2" />
                <rect x="411.5" y="11.5" fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" width="43.5" height="6.2" />
                <rect x="136.7" y="531.7" fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" width="6.2" height="43.5" />
                <rect x="136.7" y="693.8" fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" width="6.2" height="44.2" />
                <rect x="257.5" y="1170.7" fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" width="43.5" height="6.2" />
                <rect x="301" y="1170.8" fill="#666666" width="4.2" height="4.2" />
                <rect x="163" y="1141.9" fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" width="29.2" height="6.2" />
                <rect x="136.8" y="897.8" fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" width="8.7" height="29.4" />
                <rect x="305.1" y="1170.7" fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" width="43.5" height="6.2" />
                <rect x="721.4" y="142.1" fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" width="43.5" height="6.2" />
                <rect x="674.2" y="142.2" fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" width="43.5" height="6.2" />
                <rect x="627" y="142.1" fill="none" stroke="#666666" stroke-width="0.5" stroke-miterlimit="10" width="43.5" height="6.2" />
                <rect x="812.2" y="1065.2" fill="none" stroke="#666666" stroke-miterlimit="10" width="177.5" height="2.5" />
                <rect x="520.5" y="1094.7" fill="none" stroke="#666666" stroke-miterlimit="10" width="235.5" height="2.5" />
                <polygon fill="#666666" points="491.6,422.6 491.6,462.8 484.4,462.8 484.4,435.2 390.6,435.2 390.6,462.1 383.3,462.1 
            383.3,435.2 138.4,435.2 138.4,422 145.6,422 145.6,430 229.6,430 229.6,384.5 224.7,384.5 224.7,379.7 234.4,379.7 234.4,430 
            306.4,430 306.4,379.7 328.4,379.7 328.4,339.8 333.3,339.8 333.3,430 429.1,430 429.1,273.3 323.7,273.3 323.7,268 434.4,268 
            434.4,325.9 440.2,325.9 440.2,330.9 434.4,330.9 434.4,430 484.4,430 484.4,422.6 	"/>
                <polygon fill="#666666" points="512.1,143.2 512.1,148.6 491.5,148.6 491.5,379.5 484.3,379.5 484.3,331 478.4,331 478.4,325.9 
            487,325.9 487,17.7 455,17.7 455,13.1 491.5,13.1 491.5,143.2 	"/>


                {/* labels */}
            </g>
        </svg>

  );
}