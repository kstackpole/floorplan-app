import type { SVGProps } from "../types/floorplan";

export const planBOptions = [
    { key: "primaryRetreat", label: "Primary Retreat" },
    { key: "primaryDoorToPat", label: "Primary Door to Covered Patio" },
    { key: "bbqConn", label: "BBQ Connection" },
    { key: "greatRmFire", label: "Great Room Fireplace" },
    { key: "kitchenDblOvn", label: "Kitchen Double Oven" },
    { key: "morningKitchen", label: "Morning Kitchen" },
];

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

            {/* World transform */}
            <g transform={`translate(${tx},${ty}) scale(${scale})`}>
                {/* FP-LINES */}
                <g id="gPlan">
                    <g id="v.1">
                        <g>
                            <g id="XMLID_00000160192486753796051340000009071922961222160512_">
                                <g>
                                    <polygon points="574.919,443.638 577.039,443.638 580.191,443.638 580.191,446.942 574.183,446.942 562.047,446.942 
                                    552.575,446.942 552.575,443.638 565.183,443.638 565.735,443.638 				"></polygon>
                                    <polygon points="751.599,477.262 743.495,477.262 742.815,477.262 742.367,477.262 736.287,477.262 736.287,521.99 
                                    736.287,521.998 742.367,521.998 742.815,521.998 743.495,521.998 743.495,521.99 751.599,521.99 751.599,517.638 
                                    752.647,517.638 753.695,517.638 753.695,527.398 751.599,527.398 751.599,524.094 734.183,524.094 734.183,476.062 
                                    734.183,473.958 734.183,452.942 738.391,452.942 738.391,466.758 738.391,473.958 761.807,473.958 799.631,473.958 
                                    799.631,473.91 799.631,466.758 799.631,459.55 799.631,458.35 803.143,454.838 804.623,456.326 801.727,459.222 
                                    801.727,466.758 801.727,473.958 834.151,473.958 834.151,441.542 826.943,441.542 819.407,441.542 816.511,444.438 
                                    815.023,442.95 818.543,439.438 819.743,439.438 826.943,439.438 834.151,439.438 834.151,416.926 834.151,398.91 
                                    834.151,376.398 834.151,363.19 834.151,341.574 834.151,337.974 834.151,316.358 834.151,301.654 819.439,301.654 
                                    819.439,298.35 837.447,298.35 837.447,316.358 837.447,337.974 837.447,341.574 837.447,363.19 837.447,501.582 
                                    834.151,501.582 834.151,477.262 753.695,477.262 753.695,481.622 751.599,481.622 				"></polygon>
                                    <rect x="783.415" y="741.734" width="3.608" height="3.296"></rect>
                                    <polygon points="783.415,298.35 783.415,301.654 740.791,301.654 740.791,298.35 765.407,298.35 				"></polygon>
                                    <polygon points="753.695,548.71 834.151,548.71 834.151,523.19 837.447,523.19 837.447,554.414 837.447,583.23 837.447,615.654 
                                    834.151,615.654 834.151,590.134 753.695,590.134 753.695,593.438 751.599,593.438 751.599,570.318 753.695,570.318 
                                    753.695,572.422 753.695,586.83 772.911,586.83 790.919,586.83 814.935,586.83 816.303,586.83 833.927,586.83 833.927,586.638 
                                    833.927,551.334 833.927,550.806 816.327,550.806 814.935,550.806 753.695,550.806 753.695,553.51 751.599,553.51 
                                    751.599,545.406 753.695,545.406 				"></polygon>
                                    <polygon points="751.599,616.854 743.495,616.854 742.815,616.854 742.367,616.854 736.287,616.854 736.287,662.79 
                                    742.367,662.79 742.815,662.79 743.495,662.79 751.599,662.79 751.599,657.83 752.647,657.83 753.695,657.83 753.695,662.79 
                                    834.151,662.79 834.151,637.27 837.447,637.27 837.447,720.118 837.447,730.622 837.447,741.734 837.447,745.03 834.151,745.03 
                                    812.535,745.03 808.631,745.03 808.631,741.734 812.535,741.734 834.151,741.734 834.151,720.118 834.151,664.886 
                                    736.287,664.886 734.183,664.886 734.183,614.75 751.599,614.75 751.599,611.446 753.695,611.446 753.695,621.806 
                                    751.599,621.806 				"></polygon>
                                    <polygon points="736.287,698.502 736.287,741.734 761.807,741.734 761.807,745.03 732.983,745.03 732.983,734.222 
                                    732.983,701.806 728.183,701.806 728.183,698.502 734.183,698.502 				"></polygon>
                                    <rect x="715.575" y="298.35" width="3.6" height="3.304"></rect>
                                    <rect x="700.567" y="727.318" width="3.296" height="3.304"></rect>
                                    <polygon points="700.567,476.062 700.567,524.99 698.463,524.99 698.463,516.59 698.463,515.91 698.463,515.462 
                                    698.463,509.382 698.463,508.47 698.463,503.382 698.463,497.374 698.463,491.67 698.463,485.67 698.463,479.662 
                                    698.463,473.958 700.567,473.958 				"></polygon>
                                    <rect x="690.359" y="298.35" width="3.6" height="3.304"></rect>
                                    <polygon points="673.247,491.67 673.247,495.718 672.343,495.262 671.143,495.262 671.143,488.07 671.143,476.062 
                                    668.591,476.062 668.591,473.958 671.143,473.958 673.247,473.958 673.247,479.662 673.247,485.67 				"></polygon>
                                    <polygon points="700.567,541.806 700.567,698.502 706.567,698.502 706.567,701.806 696.959,701.806 689.759,701.806 
                                    682.551,701.806 682.551,700.302 683.751,700.302 683.751,698.502 697.263,698.502 697.263,547.806 668.447,547.806 
                                    668.447,544.502 671.143,544.502 671.143,496.478 671.143,495.262 672.343,495.262 673.247,495.718 673.247,509.382 
                                    673.247,515.462 673.247,515.91 673.247,516.59 673.247,544.502 698.463,544.502 698.463,541.806 				"></polygon>
                                    <polygon points="644.727,405.518 644.727,301.654 622.519,301.654 622.519,298.35 668.743,298.35 668.743,301.654 
                                    648.031,301.654 648.031,407.622 645.927,407.622 642.327,407.622 642.327,405.518 				"></polygon>
                                    <polygon points="623.119,405.518 623.119,407.622 619.511,407.622 619.511,434.038 645.927,434.038 648.031,434.038 
                                    648.031,473.958 645.927,473.958 645.927,437.334 619.511,437.334 619.511,454.446 617.415,454.446 617.415,450.846 
                                    617.415,407.622 603.007,407.622 599.399,407.622 599.399,405.518 				"></polygon>
                                    <rect x="597.303" y="298.35" width="3.6" height="3.304"></rect>
                                    <polygon points="620.711,519.478 620.711,544.502 630.231,544.502 649.231,544.502 649.231,547.806 617.415,547.806 
                                    552.575,547.806 552.575,565.822 552.575,582.926 552.575,698.502 566.079,698.502 566.079,700.302 567.279,700.302 
                                    567.279,701.806 560.079,701.806 549.271,701.806 549.271,687.398 549.271,684.094 549.271,582.926 549.271,532.198 
                                    549.271,528.894 549.271,479.366 549.271,450.55 549.271,422.99 552.575,422.99 552.575,442.886 552.575,443.638 
                                    552.575,446.942 552.575,450.55 552.575,479.366 552.575,482.966 562.047,482.966 574.183,482.966 581.391,482.966 
                                    581.391,485.07 559.775,485.07 559.103,485.07 558.647,485.07 552.575,485.07 552.575,544.502 617.415,544.502 617.415,499.478 
                                    617.415,485.07 610.207,485.07 599.399,485.07 599.399,482.966 617.415,482.966 617.415,471.262 619.511,471.262 
                                    619.511,473.958 645.927,473.958 648.031,473.958 650.583,473.958 650.583,476.062 620.711,476.062 620.711,517.382 				"></polygon>
                                    <polygon points="581.391,405.518 581.391,407.622 577.119,407.622 574.919,407.622 565.775,407.622 565.183,407.622 
                                    553.247,407.622 552.575,407.622 552.575,408.358 552.575,422.99 549.271,422.99 549.271,376.998 549.271,373.694 
                                    549.271,370.398 549.271,355.382 549.271,351.782 549.271,330.174 549.271,298.35 575.687,298.35 575.687,301.654 
                                    552.575,301.654 552.575,330.174 552.575,351.782 552.575,355.382 552.575,376.998 552.575,405.518 				"></polygon>
                                </g>
                                <g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="799.631" y1="466.758" x2="798.031" y2="466.758"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="3.1476,1.5738" x1="796.457" y1="466.758" x2="764.194" y2="466.758"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="763.407" y1="466.758" x2="761.807" y2="466.758"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="826.943" y1="416.926" x2="826.943" y2="418.526"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.9711,1.4855" x1="826.943" y1="420.012" x2="826.943" y2="437.095"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="826.943" y1="437.838" x2="826.943" y2="439.438"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="826.943" y1="376.398" x2="826.943" y2="377.998"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.9711,1.4855" x1="826.943" y1="379.484" x2="826.943" y2="396.567"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="826.943" y1="397.31" x2="826.943" y2="398.91"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="761.807,466.758 761.199,466.758 
                                            760.207,466.758 						"></polyline>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="3.1102,1.5551" x1="758.652" y1="466.758" x2="740.769" y2="466.758"></line>
                                            <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="739.991,466.758 739.591,466.758 
                                            738.391,466.758 						"></polyline>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="736.287" y1="698.502" x2="736.287" y2="696.902"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="3.2017,1.6008" x1="736.287" y1="695.301" x2="736.287" y2="667.286"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="736.287" y1="666.486" x2="736.287" y2="664.886"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="734.183" y1="698.502" x2="734.183" y2="696.902"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="3.2017,1.6008" x1="734.183" y1="695.301" x2="734.183" y2="667.286"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="734.183" y1="666.486" x2="734.183" y2="664.886"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="768.711" y1="380.302" x2="768.711" y2="381.902"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="3.3466,1.6733" x1="768.711" y1="383.575" x2="768.711" y2="422.897"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="768.711" y1="423.734" x2="768.711" y2="425.334"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="772.007,428.63 772.007,428.03 
                                            772.007,427.03 						"></polyline>

                                            <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="3.1246,1.5623" points="
                                            772.007,425.468 772.007,393.814 772.007,379.379 						"></polyline>
                                            <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="772.007,378.598 772.007,377.598 
                                            772.007,376.998 						"></polyline>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="763.007" y1="380.302" x2="764.607" y2="380.302"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="767.111" y1="380.302" x2="768.711" y2="380.302"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="763.007" y1="376.998" x2="763.007" y2="378.598"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="763.007" y1="378.702" x2="763.007" y2="380.302"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="772.007" y1="376.998" x2="770.407" y2="376.998"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.9,1.45" x1="768.957" y1="376.998" x2="765.332" y2="376.998"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="764.607" y1="376.998" x2="763.007" y2="376.998"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="763.007" y1="425.334" x2="763.007" y2="426.934"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="763.007" y1="427.03" x2="763.007" y2="428.63"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="768.711" y1="425.334" x2="767.111" y2="425.334"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="764.607" y1="425.334" x2="763.007" y2="425.334"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="763.007" y1="428.63" x2="764.607" y2="428.63"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.9,1.45" x1="766.057" y1="428.63" x2="769.682" y2="428.63"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="770.407" y1="428.63" x2="772.007" y2="428.63"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="619.511" y1="471.262" x2="619.511" y2="469.662"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.7232,1.3616" x1="619.511" y1="468.301" x2="619.511" y2="456.727"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="619.511" y1="456.046" x2="619.511" y2="454.446"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="617.415" y1="471.262" x2="617.415" y2="469.662"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.7232,1.3616" x1="617.415" y1="468.301" x2="617.415" y2="456.727"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="617.415" y1="456.046" x2="617.415" y2="454.446"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="648.031" y1="434.038" x2="648.031" y2="432.438"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.902,1.451" x1="648.031" y1="430.987" x2="648.031" y2="409.948"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="648.031" y1="409.222" x2="648.031" y2="407.622"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="645.927" y1="434.038" x2="645.927" y2="432.438"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.902,1.451" x1="645.927" y1="430.987" x2="645.927" y2="409.948"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="645.927" y1="409.222" x2="645.927" y2="407.622"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="599.399" y1="482.966" x2="597.799" y2="482.966"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.9616,1.4808" x1="596.318" y1="482.966" x2="583.732" y2="482.966"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="582.991" y1="482.966" x2="581.391" y2="482.966"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="599.399" y1="485.07" x2="597.799" y2="485.07"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.9616,1.4808" x1="596.318" y1="485.07" x2="583.732" y2="485.07"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="582.991" y1="485.07" x2="581.391" y2="485.07"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="734.183" y1="473.958" x2="732.583" y2="473.958"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="3.2017,1.6008" x1="730.982" y1="473.958" x2="702.967" y2="473.958"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="702.167" y1="473.958" x2="700.567" y2="473.958"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="734.183" y1="476.062" x2="732.583" y2="476.062"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="3.2017,1.6008" x1="730.982" y1="476.062" x2="702.967" y2="476.062"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="702.167" y1="476.062" x2="700.567" y2="476.062"></line>
                                        </g>
                                    </g>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="552.575" y1="565.822" x2="617.415" y2="565.822"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="567.351,550.494 561.951,557.102 
                                    556.543,563.702 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="567.351,563.702 561.951,557.102 
                                    556.543,550.494 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="617.415" y1="565.822" x2="617.415" y2="547.806"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="765.407" y1="226.302" x2="765.407" y2="298.35"></line>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M618.015,568.222
                                    c0-0.496-0.408-0.904-0.904-0.904c-0.496,0-0.896,0.408-0.896,0.904c0,0.496,0.4,0.896,0.896,0.896
                                    C617.607,569.118,618.015,568.718,618.015,568.222z"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M589.191,568.222
                                    c0-0.496-0.4-0.904-0.896-0.904s-0.904,0.408-0.904,0.904c0,0.496,0.408,0.896,0.904,0.896S589.191,568.718,589.191,568.222z"></path>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="696.959" y1="701.806" x2="696.959" y2="734.222"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="696.959,734.222 704.167,734.222 
                                    732.983,734.222 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="700.567" y1="727.318" x2="700.567" y2="730.622"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="700.567" y1="473.958" x2="698.463" y2="473.958"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="671.143" y1="473.958" x2="673.247" y2="473.958"></line>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="825.743" y1="398.91" x2="826.42" y2="400.36"></line>

                                            <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="3.3363,1.6681" points="
                                            827.127,401.871 828.983,405.846 829.951,407.918 832.951,414.358 833.121,414.721 						"></polyline>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="833.474" y1="415.477" x2="834.151" y2="416.926"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="825.743" y1="416.926" x2="826.419" y2="415.476"></line>

                                            <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="3.3363,1.6681" points="
                                            827.125,413.964 829.015,409.918 829.951,407.918 832.951,401.478 833.121,401.115 						"></polyline>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="833.474" y1="400.36" x2="834.151" y2="398.91"></line>
                                        </g>
                                    </g>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M816.327,550.806
                                    c0.104,0.104,0.24,0.168,0.384,0.192"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M831.607,558.822
                                    c-0.048-0.696-0.584-1.248-1.28-1.336"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M832.999,554.558
                                    c-0.008-0.912-0.68-1.68-1.576-1.808"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M824.871,557.11
                                    c-1.848-0.072-3.696,0.056-5.52,0.384"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M818.255,552.758
                                    c-0.88,0.152-1.52,0.912-1.528,1.8"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M819.351,557.494
                                    c-0.672,0.104-1.184,0.656-1.224,1.336"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M830.327,557.486h-0.008
                                    c-1.8-0.32-3.624-0.448-5.448-0.376"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M831.423,552.75
                                    c-4.368-0.592-8.8-0.592-13.168,0.008"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M828.855,583.79
                                    c0.632-0.136,1.112-0.64,1.216-1.28"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M832.231,585.366
                                    c0.24-0.056,0.424-0.248,0.456-0.496"></path>
                                    <circle fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" cx="824.887" cy="581.71" r="0.664"></circle>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M819.655,582.518
                                    c0.104,0.616,0.56,1.112,1.168,1.256"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M820.823,583.782
                                    c1.336,0.24,2.696,0.352,4.048,0.336"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M817.039,584.862
                                    c0.04,0.256,0.224,0.456,0.472,0.512"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M816.703,586.622
                                    c-0.152,0.032-0.288,0.104-0.4,0.208"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M824.871,584.118
                                    c1.336,0.016,2.664-0.096,3.984-0.328"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M817.511,585.374
                                    c4.88,0.728,9.84,0.728,14.72,0"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M818.127,558.83
                                    c0.112,7.912,0.624,15.816,1.528,23.688"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M830.071,582.51
                                    c0.904-7.864,1.416-15.768,1.536-23.68"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M833.927,551.334
                                    c0-0.168-0.136-0.304-0.296-0.304"></path>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="834.151,416.926 832.951,416.926 
                                    826.943,416.926 825.743,416.926 819.743,416.926 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="834.151,398.91 832.951,398.91 
                                    826.943,398.91 825.743,398.91 819.743,398.91 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="832.951,398.91 832.951,401.478 
                                    832.951,414.358 832.951,416.926 				"></polyline>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M826.911,414.422
                                    c0.464,0.432,1.08,0.688,1.76,0.688c1.44,0,2.608-1.176,2.608-2.616c0-1.32-0.984-2.416-2.264-2.576
                                    c-0.112-0.024-0.224-0.032-0.344-0.032c-1.448,0-2.616,1.168-2.616,2.608C826.055,413.254,826.383,413.942,826.911,414.422z"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M828.983,405.846
                                    c1.296-0.152,2.296-1.248,2.296-2.592c0-1.44-1.168-2.608-2.608-2.608c-0.696,0-1.32,0.264-1.784,0.712
                                    c-0.512,0.464-0.832,1.144-0.832,1.896c0,1.448,1.168,2.616,2.616,2.616C828.775,405.87,828.879,405.862,828.983,405.846z"></path>
                                    <circle fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" cx="822.671" cy="413.078" r="2.032"></circle>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="819.743" y1="398.91" x2="819.743" y2="416.926"></line>
                                    <circle fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" cx="822.671" cy="402.934" r="2.032"></circle>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="786.871" y1="379.398" x2="785.271" y2="379.398"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="3.0309,1.5154" x1="783.756" y1="379.398" x2="775.421" y2="379.398"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="774.663" y1="379.398" x2="773.063" y2="379.398"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="786.871" y1="393.814" x2="785.271" y2="393.814"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="3.0309,1.5154" x1="783.756" y1="393.814" x2="775.421" y2="393.814"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="774.663" y1="393.814" x2="773.063" y2="393.814"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="773.063" y1="379.398" x2="773.063" y2="380.998"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="3.2046,1.6023" x1="773.063" y1="382.6" x2="773.063" y2="391.413"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="773.063" y1="392.214" x2="773.063" y2="393.814"></line>
                                        </g>
                                    </g>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M786.871,393.814c0.4-4.8,0.4-9.616,0-14.416
                                    "></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M787.327,393.814
                                    c0.056-0.32,0.104-0.632,0.144-0.952c0.6-4.152,0.6-8.36,0-12.512c-0.04-0.32-0.088-0.632-0.144-0.952"></path>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="786.871" y1="393.814" x2="787.327" y2="393.814"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="786.871" y1="379.398" x2="787.327" y2="379.398"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="773.063" y1="395.614" x2="773.063" y2="415.422"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="786.271" y1="395.614" x2="786.271" y2="415.422"></line>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M776.367,397.838
                                    c-0.24,1.872-0.392,3.744-0.448,5.624c-0.056,1.368-0.056,2.744,0,4.112c0.056,1.88,0.208,3.752,0.448,5.624"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M784.799,413.198
                                    c0.24-1.872,0.392-3.744,0.448-5.624c0.056-1.368,0.056-2.744,0-4.112c-0.056-1.88-0.208-3.752-0.448-5.624"></path>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="777.263" y1="406.286" x2="783.903" y2="406.286"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="777.263" y1="404.75" x2="783.903" y2="404.75"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="773.063" y1="395.614" x2="786.271" y2="395.614"></line>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M777.711,396.662
                                    c-0.68,0-1.256,0.504-1.344,1.176"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M784.799,397.838
                                    c-0.088-0.672-0.656-1.176-1.336-1.176"></path>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="777.711" y1="396.662" x2="783.463" y2="396.662"></line>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M785.255,407.686c0-0.04,0-0.072-0.008-0.112
                                    c-0.024-0.696-0.592-1.256-1.296-1.288c-0.016,0-0.032,0-0.048,0"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M783.903,404.75
                                    c0.72,0,1.32-0.576,1.344-1.288c0.008-0.024,0.008-0.04,0.008-0.064c0-0.016,0-0.032,0-0.048"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M777.263,406.286
                                    c-0.72,0-1.32,0.576-1.344,1.288c-0.008,0.024-0.008,0.04-0.008,0.064c0,0.016,0,0.032,0,0.048"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M775.911,403.35c0,0.04,0,0.072,0.008,0.112
                                    c0.024,0.696,0.592,1.256,1.296,1.288c0.016,0,0.032,0,0.048,0"></path>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="773.063" y1="415.422" x2="786.271" y2="415.422"></line>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M776.367,413.198
                                    c0.088,0.672,0.664,1.176,1.344,1.176"></path>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="777.711" y1="414.374" x2="783.463" y2="414.374"></line>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M783.463,414.374
                                    c0.68,0,1.248-0.504,1.336-1.176"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M613.151,557.414
                                    c0-3.616-2.928-6.552-6.544-6.552c-3.616,0-6.552,2.936-6.552,6.552c0,3.616,2.936,6.552,6.552,6.552
                                    C610.223,563.966,613.151,561.03,613.151,557.414z"></path>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="599.399" y1="564.622" x2="599.399" y2="550.206"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="599.399" y1="550.206" x2="613.807" y2="550.206"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="613.807" y1="550.206" x2="613.807" y2="564.622"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="613.807" y1="564.622" x2="599.399" y2="564.622"></line>
                                    <circle fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" cx="606.607" cy="557.414" r="0.656"></circle>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M627.423,437.942
                                    c-0.328-0.008-0.6,0.256-0.6,0.584c-0.008,0.016,0,0.04,0,0.056"></path>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="638.015" y1="437.942" x2="627.423" y2="437.942"></line>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M626.823,438.582
                                    c0.08,1.408,0.576,2.76,1.432,3.88"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M628.255,442.462
                                    c0.144,0.184,0.368,0.296,0.6,0.304"></path>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="628.855,442.766 630.199,442.766 
                                    635.247,442.766 636.591,442.766 				"></polyline>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M629.191,445.518
                                    c0.504-0.848,0.848-1.784,1.008-2.752"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M638.623,438.582
                                    c0.024-0.328-0.224-0.616-0.552-0.64c-0.016,0-0.032,0-0.056,0"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M636.591,442.766
                                    c0.232-0.008,0.456-0.12,0.6-0.304"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M637.191,442.462
                                    c0.856-1.12,1.352-2.472,1.432-3.88"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M635.247,442.766
                                    c0.16,0.968,0.504,1.904,1.008,2.752"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M628.655,450.926
                                    c0.288,1.248,0.848,2.408,1.648,3.408"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M635.135,454.334
                                    c0.8-1,1.368-2.16,1.656-3.408"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M630.303,454.334
                                    c1.304,1.336,3.44,1.36,4.776,0.064c0.016-0.024,0.04-0.04,0.056-0.064"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M629.191,445.518
                                    c-0.976,1.632-1.168,3.616-0.536,5.408"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M636.791,450.926
                                    c0.632-1.792,0.432-3.776-0.536-5.408"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M611.343,442.438
                                    c0-0.296-0.24-0.536-0.536-0.536c-0.296,0-0.536,0.24-0.536,0.536c0,0.304,0.24,0.544,0.536,0.544
                                    C611.103,442.982,611.343,442.742,611.343,442.438z"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M609.799,447.286
                                    c1.896,0,3.424-2.168,3.424-4.848c0-2.672-1.528-4.84-3.424-4.84c-1.888,0-3.416,2.168-3.416,4.84
                                    C606.383,445.118,607.911,447.286,609.799,447.286z"></path>

                                    <ellipse fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" cx="610.687" cy="442.438" rx="4.84" ry="5.648"></ellipse>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M807.023,586.23
                                    c0.328,0.008,0.6-0.256,0.608-0.584c0-0.024,0-0.04,0-0.056"></path>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="796.431" y1="586.23" x2="807.023" y2="586.23"></line>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M807.631,585.59
                                    c-0.08-1.408-0.584-2.76-1.44-3.88"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M806.191,581.71
                                    c-0.136-0.192-0.36-0.296-0.592-0.304"></path>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="805.599,581.406 804.255,581.406 
                                    799.207,581.406 797.863,581.406 				"></polyline>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M805.263,578.654
                                    c-0.504,0.848-0.848,1.776-1.008,2.752"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M795.831,585.59
                                    c-0.032,0.328,0.216,0.616,0.544,0.64c0.024,0,0.04,0,0.056,0"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M797.863,581.406
                                    c-0.24,0.008-0.456,0.112-0.6,0.304"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M797.263,581.71
                                    c-0.856,1.12-1.36,2.472-1.432,3.88"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M799.207,581.406
                                    c-0.16-0.976-0.504-1.904-1.008-2.752"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M805.799,573.246
                                    c-0.288-1.248-0.856-2.408-1.656-3.408"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M799.311,569.838
                                    c-0.8,1-1.36,2.16-1.648,3.408"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M804.143,569.838
                                    c-1.296-1.336-3.432-1.36-4.768-0.064c-0.024,0.024-0.04,0.04-0.064,0.064"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M805.263,578.654
                                    c0.968-1.64,1.168-3.616,0.536-5.408"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M797.663,573.246
                                    c-0.632,1.792-0.44,3.768,0.536,5.408"></path>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="669.943,488.07 669.943,488.67 
                                    669.943,495.878 669.943,496.478 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="669.943" y1="496.478" x2="671.143" y2="496.478"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="671.143" y1="488.07" x2="669.943" y2="488.07"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="669.943" y1="488.67" x2="669.647" y2="488.67"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="669.647" y1="488.67" x2="669.647" y2="495.878"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="669.647" y1="495.878" x2="669.943" y2="495.878"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="700.567" y1="727.318" x2="703.863" y2="727.318"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="703.863" y1="727.318" x2="703.863" y2="730.622"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="703.863" y1="730.622" x2="700.567" y2="730.622"></line>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="825.743" y1="416.926" x2="825.743" y2="415.326"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.9632,1.4816" x1="825.743" y1="413.844" x2="825.743" y2="401.251"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="825.743" y1="400.51" x2="825.743" y2="398.91"></line>
                                        </g>
                                    </g>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="814.935" y1="550.806" x2="814.935" y2="586.83"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="816.703,554.558 816.743,558.846 
                                    816.999,584.862 816.999,584.87 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="832.967,554.558 832.927,558.846 
                                    832.679,584.87 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="833.927" y1="586.638" x2="816.703" y2="586.638"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="833.927,550.806 833.927,551.334 
                                    833.927,586.638 833.927,586.83 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="816.703" y1="551.03" x2="833.631" y2="551.03"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="765.407" y1="226.302" x2="837.447" y2="226.302"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="567.351" y1="563.702" x2="556.543" y2="563.702"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="556.543" y1="563.702" x2="556.543" y2="550.494"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="556.543" y1="550.494" x2="567.351" y2="550.494"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="567.351" y1="550.494" x2="567.351" y2="563.702"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="610.887" y1="499.478" x2="610.207" y2="499.478"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="617.415" y1="499.478" x2="611.335" y2="499.478"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="684.479" y1="503.382" x2="682.295" y2="503.382"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="698.463" y1="503.382" x2="689.111" y2="503.382"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="698.463" y1="497.374" x2="676.527" y2="497.374"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="698.463" y1="491.67" x2="673.247" y2="491.67"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="698.463" y1="485.67" x2="673.247" y2="485.67"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="698.463" y1="479.662" x2="673.247" y2="479.662"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="699.367,508.926 698.463,508.47 
                                    689.071,503.718 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="689.071,503.718 689.111,503.382 
                                    689.695,498.494 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="689.695,498.494 684.487,503.382 
                                    684.479,503.382 682.015,505.694 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="682.015,505.694 682.295,503.382 
                                    682.639,500.47 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="682.639,500.47 676.527,497.374 
                                    673.247,495.718 672.343,495.262 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="698.463" y1="473.662" x2="673.247" y2="473.662"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="698.463,467.654 685.855,467.654 
                                    673.247,467.654 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="698.463,461.654 685.855,461.654 
                                    685.415,461.654 673.247,461.654 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="698.463,455.646 685.855,455.646 
                                    685.415,455.646 673.247,455.646 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="698.463,449.646 685.855,449.646 
                                    685.415,449.646 673.247,449.646 				"></polyline>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M629.231,447.414
                                    c-0.368,2.32,0.336,4.688,1.896,6.448"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M630.335,445.518
                                    c-0.608,0.464-1,1.144-1.104,1.896"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M635.111,445.518
                                    c-1.512-0.728-3.272-0.728-4.776,0"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M636.215,447.414
                                    c-0.104-0.752-0.504-1.432-1.104-1.896"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M634.311,453.862
                                    c1.568-1.76,2.264-4.128,1.904-6.448"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M631.127,453.862
                                    c0.92,0.784,2.272,0.784,3.184,0"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M805.223,576.758
                                    c0.36-2.328-0.336-4.688-1.904-6.448"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M804.119,578.646
                                    c0.6-0.456,1-1.136,1.104-1.888"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M799.335,578.646
                                    c1.512,0.736,3.272,0.736,4.784,0"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M798.231,576.758
                                    c0.112,0.752,0.504,1.432,1.104,1.888"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M800.135,570.31
                                    c-1.568,1.76-2.264,4.12-1.904,6.448"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M803.319,570.31
                                    c-0.912-0.784-2.264-0.784-3.184,0"></path>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="834.151" y1="473.958" x2="801.727" y2="473.958"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="753.695" y1="477.262" x2="834.151" y2="477.262"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="799.631,473.958 761.807,473.958 
                                    738.391,473.958 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="673.247" y1="446.342" x2="671.143" y2="446.342"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="671.143" y1="446.342" x2="671.143" y2="473.958"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="700.567" y1="446.342" x2="698.463" y2="446.342"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="648.031" y1="407.622" x2="648.031" y2="301.654"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="644.727" y1="301.654" x2="644.727" y2="405.518"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="580.191" y1="446.942" x2="580.191" y2="443.638"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="580.191,443.638 577.039,443.638 
                                    574.919,443.638 565.735,443.638 565.183,443.638 552.575,443.638 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="552.575,446.942 562.047,446.942 
                                    574.183,446.942 580.191,446.942 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="552.575,582.926 552.575,565.822 
                                    552.575,547.806 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="734.183" y1="614.75" x2="734.183" y2="664.886"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="819.743" y1="376.398" x2="819.743" y2="398.91"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="819.743" y1="416.926" x2="819.743" y2="439.438"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="819.743,376.398 826.943,376.398 
                                    834.151,376.398 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="761.807" y1="459.55" x2="799.631" y2="459.55"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="761.807,473.958 761.807,466.758 
                                    761.807,459.55 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="834.151" y1="473.958" x2="834.151" y2="441.542"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="826.943" y1="441.542" x2="826.943" y2="466.758"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="826.943" y1="466.758" x2="801.727" y2="466.758"></line>
                                    <g>
                                        <g>
                                            <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M803.143,454.838
                                            c-0.379-0.379-0.738-0.774-1.077-1.184"></path>
                                            <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.8574,1.4287" d="
                                            M801.204,452.515c-1.497-2.162-2.469-4.648-2.826-7.262"></path>
                                            <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M798.297,444.552
                                            c-0.017-0.182-0.031-0.364-0.042-0.546c-0.032-0.352-0.04-0.704-0.04-1.056"></path>
                                        </g>
                                    </g>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="761.951" y1="429.23" x2="761.951" y2="376.398"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="761.951,376.398 772.007,376.398 
                                    787.471,376.398 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="787.471,376.398 787.471,380.35 
                                    787.471,392.862 787.471,429.23 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="787.471,429.23 772.007,429.23 
                                    763.007,429.23 761.951,429.23 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="818.543" y1="439.438" x2="815.023" y2="442.95"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="815.023" y1="442.95" x2="816.511" y2="444.438"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="816.511" y1="444.438" x2="819.407" y2="441.542"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="804.623" y1="456.326" x2="803.143" y2="454.838"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="803.143" y1="454.838" x2="799.631" y2="458.35"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="801.727" y1="459.222" x2="804.623" y2="456.326"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="834.151,439.438 826.943,439.438 
                                    819.743,439.438 818.543,439.438 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="819.407,441.542 826.943,441.542 
                                    834.151,441.542 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="799.631,458.302 799.631,458.35 
                                    799.631,459.55 799.631,466.758 799.631,473.91 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="801.727,473.958 801.727,466.758 
                                    801.727,459.222 				"></polyline>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="558.647" y1="485.07" x2="558.647" y2="486.67"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="3.2361,1.6181" x1="558.647" y1="488.288" x2="558.647" y2="536.021"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="558.647" y1="536.83" x2="558.647" y2="538.43"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="558.647" y1="538.43" x2="560.247" y2="538.43"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="3.1928,1.5964" x1="561.843" y1="538.43" x2="608.937" y2="538.43"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="609.735" y1="538.43" x2="611.335" y2="538.43"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="611.335" y1="538.43" x2="611.335" y2="536.83"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="3.2502,1.6251" x1="611.335" y1="535.205" x2="611.335" y2="501.891"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="611.335" y1="501.078" x2="611.335" y2="499.478"></line>
                                        </g>
                                    </g>
                                    <g>

                                        <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="0.448" x1="611.335" y1="499.478" x2="610.887" y2="499.478"></line>
                                    </g>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="552.575" y1="485.07" x2="552.575" y2="544.502"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="610.207,485.07 610.207,499.478 
                                    610.207,537.302 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="610.207" y1="537.302" x2="559.775" y2="537.302"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="559.775" y1="537.302" x2="559.775" y2="485.07"></line>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="698.463" y1="515.462" x2="696.863" y2="515.462"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="3.3871,1.6935" x1="695.169" y1="515.462" x2="675.694" y2="515.462"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="674.847" y1="515.462" x2="673.247" y2="515.462"></line>
                                        </g>
                                    </g>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="698.463" y1="509.382" x2="673.247" y2="509.382"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="673.247" y1="516.59" x2="698.463" y2="516.59"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="567.279" y1="701.806" x2="682.551" y2="701.806"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="577.487,299.398 577.487,299.998 
                                    577.487,300.598 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="595.495,299.398 595.495,299.998 
                                    595.495,300.598 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="575.687" y1="298.35" x2="575.687" y2="297.75"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="575.687" y1="297.75" x2="597.303" y2="297.75"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="597.303" y1="297.75" x2="597.303" y2="298.35"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="602.703,299.398 602.703,299.998 
                                    602.703,300.598 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="620.711,299.398 620.711,299.998 
                                    620.711,300.598 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="600.903" y1="298.35" x2="600.903" y2="297.75"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="600.903" y1="297.75" x2="622.519" y2="297.75"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="622.519" y1="297.75" x2="622.519" y2="298.35"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="670.543,299.398 670.543,299.998 
                                    670.543,300.598 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="688.559,299.398 688.559,299.998 
                                    688.559,300.598 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="668.743" y1="298.35" x2="668.743" y2="297.75"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="668.743" y1="297.75" x2="690.359" y2="297.75"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="690.359" y1="297.75" x2="690.359" y2="298.35"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="695.759,299.398 695.759,299.998 
                                    695.759,300.598 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="713.775,299.398 713.775,299.998 
                                    713.775,300.598 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="693.959" y1="298.35" x2="693.959" y2="297.75"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="693.959" y1="297.75" x2="715.575" y2="297.75"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="715.575" y1="297.75" x2="715.575" y2="298.35"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="720.975,299.398 720.975,299.998 
                                    720.975,300.598 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="738.991,299.398 738.991,299.998 
                                    738.991,300.598 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="719.175" y1="298.35" x2="719.175" y2="297.75"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="719.175" y1="297.75" x2="740.791" y2="297.75"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="740.791" y1="297.75" x2="740.791" y2="298.35"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="818.543" y1="298.35" x2="784.319" y2="298.35"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="836.399,503.382 835.799,503.382 
                                    835.199,503.382 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="836.399,521.39 835.799,521.39 
                                    835.199,521.39 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="837.447" y1="501.582" x2="838.055" y2="501.582"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="838.055" y1="501.582" x2="838.055" y2="523.19"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="838.055" y1="523.19" x2="837.447" y2="523.19"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="836.399,617.454 835.799,617.454 
                                    835.199,617.454 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="836.399,635.47 835.799,635.47 
                                    835.199,635.47 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="837.447" y1="615.654" x2="838.055" y2="615.654"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="838.055" y1="615.654" x2="838.055" y2="637.27"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="838.055" y1="637.27" x2="837.447" y2="637.27"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="806.831,743.982 806.831,743.382 
                                    806.831,742.782 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="788.823,743.982 788.823,743.382 
                                    788.823,742.782 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="808.631" y1="745.03" x2="808.631" y2="745.63"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="808.631" y1="745.63" x2="787.023" y2="745.63"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="787.023" y1="745.63" x2="787.023" y2="745.03"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="763.607,743.982 763.607,743.382 
                                    763.607,742.782 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="781.615,743.982 781.615,743.382 
                                    781.615,742.782 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="761.807" y1="745.03" x2="761.807" y2="745.63"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="761.807" y1="745.63" x2="783.415" y2="745.63"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="783.415" y1="745.63" x2="783.415" y2="745.03"></line>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="742.367" y1="477.262" x2="742.367" y2="478.862"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="3.3229,1.6614" x1="742.367" y1="480.524" x2="742.367" y2="519.567"></line>
                                            <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="742.367,520.398 742.367,521.99 
                                            742.367,521.998 						"></polyline>
                                        </g>
                                    </g>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="736.287,477.262 736.287,521.99 
                                    736.287,521.998 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="736.287,521.998 742.367,521.998 
                                    742.815,521.998 743.495,521.998 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="743.495,521.998 743.495,521.99 
                                    743.495,477.262 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="751.599,477.262 743.495,477.262 
                                    742.815,477.262 742.367,477.262 736.287,477.262 				"></polyline>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="742.367" y1="616.854" x2="742.367" y2="618.454"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="3.0526,1.5263" x1="742.367" y1="619.98" x2="742.367" y2="660.427"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="742.367" y1="661.19" x2="742.367" y2="662.79"></line>
                                        </g>
                                    </g>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="736.287" y1="616.854" x2="736.287" y2="662.79"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="743.495" y1="662.79" x2="743.495" y2="616.854"></line>
                                    <g>
                                        <g>
                                            <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M599.399,407.622
                                            c0,0.536-0.024,1.069-0.071,1.599"></path>
                                            <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="3.1256,1.5628" d="
                                            M599.122,410.77c-0.502,2.833-1.677,5.509-3.432,7.8"></path>
                                            <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M595.208,419.173
                                            c-0.118,0.141-0.238,0.28-0.36,0.417c-0.232,0.264-0.472,0.52-0.72,0.768"></path>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M623.119,405.518
                                            c0-0.536,0.022-1.069,0.067-1.599"></path>
                                            <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="3.2443,1.6221" d="
                                            M623.388,402.31c0.499-2.947,1.679-5.739,3.45-8.15"></path>
                                            <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M627.329,393.52
                                            c0.223-0.279,0.455-0.552,0.694-0.818c0.112-0.136,0.232-0.264,0.352-0.392"></path>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M650.583,476.062
                                            c0,0.536,0.024,1.069,0.071,1.598"></path>
                                            <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.9754,1.4877" d="
                                            M650.848,479.136c0.468,2.699,1.545,5.26,3.148,7.481"></path>
                                            <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M654.443,487.21
                                            c0.222,0.282,0.453,0.558,0.692,0.828c0.12,0.128,0.232,0.256,0.352,0.384"></path>
                                        </g>
                                    </g>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="668.447" y1="547.806" x2="649.231" y2="547.806"></line>
                                    <g>
                                        <g>
                                            <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M649.231,544.502
                                            c0-0.536,0.022-1.069,0.067-1.599"></path>
                                            <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="3.3954,1.6977" d="
                                            M649.515,541.215c0.535-3.076,1.816-5.983,3.74-8.464"></path>
                                            <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M653.783,532.098
                                            c0.118-0.139,0.238-0.276,0.36-0.412c0.232-0.264,0.472-0.52,0.72-0.768"></path>
                                        </g>
                                    </g>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="706.567" y1="701.806" x2="728.183" y2="701.806"></line>
                                    <g>
                                        <g>
                                            <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M728.183,698.502
                                            c0-0.535-0.02-1.068-0.059-1.599"></path>
                                            <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.753,1.3765" d="
                                            M727.978,695.534c-0.538-3.88-2.124-7.553-4.591-10.605"></path>
                                            <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M722.945,684.399
                                            c-0.121-0.141-0.244-0.28-0.37-0.417c-0.232-0.256-0.472-0.512-0.72-0.76"></path>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M700.567,541.806
                                            c0.536,0,1.069-0.026,1.598-0.076"></path>
                                            <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.8575,1.4287" d="
                                            M703.585,541.532c2.586-0.473,5.03-1.547,7.133-3.141"></path>
                                            <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M711.268,537.956
                                            c0.142-0.117,0.281-0.236,0.419-0.358c0.264-0.232,0.52-0.472,0.768-0.72"></path>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M753.695,527.398
                                            c0.536,0,1.069,0.024,1.599,0.071"></path>
                                            <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.9755,1.4878" d="
                                            M756.769,527.662c2.701,0.468,5.26,1.545,7.481,3.149"></path>
                                            <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M764.843,531.258
                                            c0.282,0.222,0.558,0.453,0.828,0.692c0.128,0.12,0.256,0.232,0.384,0.352"></path>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M753.695,570.318
                                            c0.536,0,1.069-0.026,1.598-0.076"></path>
                                            <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.8568,1.4284" d="
                                            M756.708,570.047c2.588-0.47,5.031-1.54,7.134-3.133"></path>
                                            <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M764.396,566.476
                                            c0.142-0.117,0.281-0.236,0.419-0.358c0.264-0.232,0.52-0.472,0.768-0.72"></path>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M753.695,611.446
                                            c0.536,0,1.069-0.024,1.599-0.071"></path>
                                            <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="3.1258,1.5629" d="
                                            M756.843,611.169c2.834-0.503,5.508-1.677,7.798-3.426"></path>
                                            <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M765.249,607.257
                                            c0.142-0.119,0.283-0.24,0.422-0.363c0.264-0.232,0.512-0.472,0.76-0.72"></path>
                                        </g>
                                    </g>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="617.415" y1="450.846" x2="603.007" y2="450.846"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="603.007" y1="450.846" x2="603.007" y2="407.622"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="790.919" y1="586.83" x2="790.919" y2="572.422"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="753.695,572.422 772.911,572.422 
                                    790.919,572.422 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="617.415" y1="471.262" x2="617.415" y2="482.966"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="617.415,485.07 617.415,499.478 
                                    617.415,544.502 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="620.711,544.502 620.711,519.478 
                                    620.711,517.382 620.711,476.062 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="552.575,485.07 558.647,485.07 
                                    559.103,485.07 559.775,485.07 581.391,485.07 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="581.391" y1="485.07" x2="581.391" y2="482.966"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="581.391,482.966 574.183,482.966 
                                    562.047,482.966 552.575,482.966 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="599.399" y1="482.966" x2="599.399" y2="485.07"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="599.399,485.07 610.207,485.07 
                                    617.415,485.07 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="617.415" y1="482.966" x2="599.399" y2="482.966"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="552.575,407.622 553.247,407.622 
                                    565.183,407.622 565.775,407.622 574.919,407.622 577.119,407.622 581.391,407.622 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="581.391" y1="407.622" x2="581.391" y2="405.518"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="581.391" y1="405.518" x2="552.575" y2="405.518"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="599.399" y1="405.518" x2="599.399" y2="407.622"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="599.399,407.622 603.007,407.622 
                                    617.415,407.622 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="623.119" y1="405.518" x2="599.399" y2="405.518"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="619.511" y1="407.622" x2="623.119" y2="407.622"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="623.119" y1="407.622" x2="623.119" y2="405.518"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="642.327" y1="405.518" x2="642.327" y2="407.622"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="642.327,407.622 645.927,407.622 
                                    648.031,407.622 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="644.727" y1="405.518" x2="642.327" y2="405.518"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="619.511" y1="437.334" x2="645.927" y2="437.334"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="648.031,434.038 645.927,434.038 
                                    619.511,434.038 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="619.511" y1="434.038" x2="619.511" y2="407.622"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="617.415,407.622 617.415,450.846 
                                    617.415,454.446 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="617.415" y1="454.446" x2="619.511" y2="454.446"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="619.511" y1="454.446" x2="619.511" y2="437.334"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="619.511" y1="471.262" x2="617.415" y2="471.262"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="619.511" y1="473.958" x2="619.511" y2="471.262"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="648.031" y1="473.958" x2="648.031" y2="434.038"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="645.927" y1="437.334" x2="645.927" y2="473.958"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="673.247,544.502 673.247,516.59 
                                    673.247,515.91 673.247,515.462 673.247,509.382 673.247,495.718 673.247,491.67 673.247,485.67 673.247,479.662 
                                    673.247,473.958 673.247,473.662 673.247,467.654 673.247,461.654 673.247,455.646 673.247,449.646 673.247,446.342 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="671.143,476.062 671.143,488.07 
                                    671.143,495.262 671.143,496.478 671.143,544.502 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="620.711" y1="476.062" x2="650.583" y2="476.062"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="645.927" y1="473.958" x2="619.511" y2="473.958"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="650.583" y1="476.062" x2="650.583" y2="473.958"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="650.583" y1="473.958" x2="648.031" y2="473.958"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="668.591" y1="473.958" x2="668.591" y2="476.062"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="668.591" y1="476.062" x2="671.143" y2="476.062"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="671.143" y1="473.958" x2="668.591" y2="473.958"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="738.391" y1="452.942" x2="734.183" y2="452.942"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="734.183" y1="524.094" x2="751.599" y2="524.094"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="751.599,521.99 743.495,521.99 
                                    742.367,521.99 736.287,521.99 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="738.391,473.958 738.391,466.758 
                                    738.391,452.942 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="734.183,452.942 734.183,473.958 
                                    734.183,476.062 734.183,524.094 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="700.567" y1="541.806" x2="698.463" y2="541.806"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="698.463" y1="541.806" x2="698.463" y2="544.502"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="698.463" y1="524.99" x2="700.567" y2="524.99"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="700.567,524.99 700.567,476.062 
                                    700.567,473.958 700.567,446.342 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="698.463,446.342 698.463,449.646 
                                    698.463,455.646 698.463,461.654 698.463,467.654 698.463,473.662 698.463,473.958 698.463,479.662 698.463,485.67 
                                    698.463,491.67 698.463,497.374 698.463,503.382 698.463,508.47 698.463,509.382 698.463,515.462 698.463,515.91 
                                    698.463,516.59 698.463,524.99 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="834.151" y1="548.71" x2="753.695" y2="548.71"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="753.695,550.806 814.935,550.806 
                                    816.327,550.806 833.927,550.806 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="753.695" y1="590.134" x2="834.151" y2="590.134"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="833.927,586.83 816.303,586.83 
                                    814.935,586.83 790.919,586.83 772.911,586.83 753.695,586.83 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="751.599" y1="614.75" x2="734.183" y2="614.75"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="736.287,616.854 742.367,616.854 
                                    742.815,616.854 743.495,616.854 751.599,616.854 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="751.599" y1="477.262" x2="751.599" y2="481.622"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="751.599" y1="481.622" x2="753.695" y2="481.622"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="753.695" y1="481.622" x2="753.695" y2="477.262"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="753.695,517.638 752.647,517.638 
                                    751.599,517.638 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="751.599,499.63 751.599,517.638 
                                    751.599,521.99 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="751.599" y1="524.094" x2="751.599" y2="527.398"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="751.599" y1="527.398" x2="753.695" y2="527.398"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="753.695" y1="527.398" x2="753.695" y2="517.638"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="753.695" y1="545.406" x2="751.599" y2="545.406"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="753.695" y1="548.71" x2="753.695" y2="545.406"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="751.599" y1="545.406" x2="751.599" y2="553.51"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="751.599" y1="553.51" x2="753.695" y2="553.51"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="753.695" y1="553.51" x2="753.695" y2="550.806"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="753.695" y1="570.318" x2="751.599" y2="570.318"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="753.695,586.83 753.695,572.422 
                                    753.695,570.318 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="751.599" y1="570.318" x2="751.599" y2="593.438"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="751.599" y1="593.438" x2="753.695" y2="593.438"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="753.695" y1="593.438" x2="753.695" y2="590.134"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="753.695" y1="611.446" x2="751.599" y2="611.446"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="751.599" y1="611.446" x2="751.599" y2="614.75"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="751.599" y1="616.854" x2="751.599" y2="621.806"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="751.599" y1="621.806" x2="753.695" y2="621.806"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="753.695" y1="621.806" x2="753.695" y2="611.446"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="753.695,657.83 752.647,657.83 
                                    751.599,657.83 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="751.599,639.822 751.599,657.83 
                                    751.599,662.79 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="753.695" y1="662.79" x2="753.695" y2="657.83"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="834.151" y1="662.79" x2="753.695" y2="662.79"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="751.599,662.79 743.495,662.79 
                                    742.815,662.79 742.367,662.79 736.287,662.79 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="734.183,664.886 736.287,664.886 
                                    834.151,664.886 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="698.463" y1="544.502" x2="673.247" y2="544.502"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="671.143" y1="544.502" x2="668.447" y2="544.502"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="668.447" y1="544.502" x2="668.447" y2="547.806"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="668.447" y1="547.806" x2="697.263" y2="547.806"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="649.231" y1="547.806" x2="649.231" y2="544.502"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="649.231,544.502 630.231,544.502 
                                    620.711,544.502 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="617.415" y1="544.502" x2="552.575" y2="544.502"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="552.575,547.806 617.415,547.806 
                                    649.231,547.806 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="697.263" y1="547.806" x2="697.263" y2="698.502"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="700.567" y1="698.502" x2="700.567" y2="541.806"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="552.575" y1="698.502" x2="552.575" y2="582.926"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="549.271,582.926 549.271,684.094 
                                    549.271,687.398 549.271,701.806 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="736.287,698.502 734.183,698.502 
                                    728.183,698.502 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="728.183" y1="698.502" x2="728.183" y2="701.806"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="728.183" y1="701.806" x2="732.983" y2="701.806"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="706.567" y1="701.806" x2="706.567" y2="698.502"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="706.567" y1="698.502" x2="700.567" y2="698.502"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="697.263,698.502 683.751,698.502 
                                    682.551,698.502 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="682.551,698.502 682.551,698.878 
                                    682.551,699.926 682.551,700.302 682.551,701.806 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="682.551,701.806 689.759,701.806 
                                    696.959,701.806 706.567,701.806 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="567.279,701.806 567.279,700.302 
                                    567.279,699.926 567.279,698.878 567.279,698.502 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="567.279,698.502 566.079,698.502 
                                    552.575,698.502 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="549.271,701.806 560.079,701.806 
                                    567.279,701.806 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="549.271,479.366 549.271,528.894 
                                    549.271,532.198 549.271,582.926 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="552.575" y1="482.966" x2="552.575" y2="479.366"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="552.575,450.55 552.575,446.942 
                                    552.575,443.638 552.575,442.886 552.575,422.99 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="549.271" y1="422.99" x2="549.271" y2="450.55"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="552.575" y1="405.518" x2="552.575" y2="376.998"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="552.575" y1="355.382" x2="552.575" y2="351.782"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="549.271" y1="351.782" x2="549.271" y2="355.382"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="552.575" y1="330.174" x2="552.575" y2="301.654"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="549.271" y1="298.35" x2="549.271" y2="330.174"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="549.271" y1="450.55" x2="549.271" y2="479.366"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="549.271,355.382 549.271,370.398 
                                    549.271,373.694 549.271,376.998 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="549.271" y1="330.174" x2="549.271" y2="351.782"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="552.575" y1="351.782" x2="552.575" y2="330.174"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="552.575" y1="376.998" x2="552.575" y2="355.382"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="552.575" y1="479.366" x2="552.575" y2="450.55"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="736.287" y1="741.734" x2="736.287" y2="698.502"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="732.983,701.806 732.983,734.222 
                                    732.983,745.03 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="834.151" y1="745.03" x2="837.447" y2="745.03"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="787.023" y1="745.03" x2="787.023" y2="741.734"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="783.415" y1="741.734" x2="783.415" y2="745.03"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="761.807" y1="741.734" x2="736.287" y2="741.734"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="732.983" y1="745.03" x2="761.807" y2="745.03"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="807.735" y1="741.734" x2="787.919" y2="741.734"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="787.919" y1="745.03" x2="807.735" y2="745.03"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="812.535" y1="745.03" x2="834.151" y2="745.03"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="834.151" y1="741.734" x2="812.535" y2="741.734"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="761.807,745.03 762.703,745.03 
                                    782.519,745.03 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="782.519,741.734 762.703,741.734 
                                    761.807,741.734 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="834.151" y1="301.654" x2="834.151" y2="316.358"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="837.447,316.358 837.447,298.35 
                                    837.447,226.302 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="834.151" y1="337.974" x2="834.151" y2="341.574"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="837.447" y1="341.574" x2="837.447" y2="337.974"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="834.151,363.19 834.151,376.398 
                                    834.151,398.91 834.151,416.926 834.151,439.438 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="834.151" y1="501.582" x2="837.447" y2="501.582"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="837.447" y1="523.19" x2="834.151" y2="523.19"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="834.151" y1="523.19" x2="834.151" y2="548.71"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="837.447" y1="554.414" x2="837.447" y2="523.19"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="834.151" y1="615.654" x2="837.447" y2="615.654"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="834.151" y1="637.27" x2="834.151" y2="662.79"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="834.151" y1="664.886" x2="834.151" y2="720.118"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="837.447" y1="720.118" x2="837.447" y2="637.27"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="837.447" y1="745.03" x2="837.447" y2="741.734"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="837.447" y1="337.974" x2="837.447" y2="316.358"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="834.151" y1="316.358" x2="834.151" y2="337.974"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="837.447" y1="363.19" x2="837.447" y2="341.574"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="837.447,523.19 837.447,522.294 
                                    837.447,502.478 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="837.447" y1="583.23" x2="837.447" y2="554.414"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="837.447,637.27 837.447,636.366 
                                    837.447,616.558 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="837.447,741.734 837.447,730.622 
                                    837.447,720.118 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="834.151" y1="720.118" x2="834.151" y2="741.734"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="834.151,616.558 834.151,636.366 
                                    834.151,637.27 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="834.151,502.478 834.151,522.294 
                                    834.151,523.19 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="834.151" y1="341.574" x2="834.151" y2="363.19"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="552.575" y1="301.654" x2="575.687" y2="301.654"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="575.687" y1="301.654" x2="575.687" y2="298.35"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="575.687" y1="298.35" x2="549.271" y2="298.35"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="622.519" y1="298.35" x2="622.519" y2="301.654"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="648.031" y1="301.654" x2="668.743" y2="301.654"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="668.743" y1="301.654" x2="668.743" y2="298.35"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="690.359" y1="298.35" x2="690.359" y2="301.654"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="693.959" y1="301.654" x2="693.959" y2="298.35"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="719.175" y1="301.654" x2="719.175" y2="298.35"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="740.791" y1="298.35" x2="740.791" y2="301.654"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="783.415" y1="301.654" x2="783.415" y2="298.35"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="819.439" y1="298.35" x2="819.439" y2="301.654"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="714.671" y1="298.35" x2="694.863" y2="298.35"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="694.863" y1="301.654" x2="714.671" y2="301.654"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="689.455" y1="298.35" x2="669.647" y2="298.35"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="668.743,301.654 669.647,301.654 
                                    689.455,301.654 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="596.399,298.35 576.583,298.35 
                                    575.687,298.35 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="575.687,301.654 576.583,301.654 
                                    596.399,301.654 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="621.615" y1="298.35" x2="601.799" y2="298.35"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="601.799" y1="301.654" x2="621.615" y2="301.654"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="739.887" y1="298.35" x2="720.079" y2="298.35"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="720.079" y1="301.654" x2="739.887" y2="301.654"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="815.023" y1="442.95" x2="815.023" y2="444.006"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="815.023,444.006 798.255,444.006 
                                    798.215,444.006 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="798.215" y1="444.006" x2="798.215" y2="442.95"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="798.215" y1="442.95" x2="815.023" y2="442.95"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="567.279" y1="699.926" x2="682.551" y2="699.926"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="682.551" y1="698.878" x2="567.279" y2="698.878"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="682.551" y1="700.302" x2="683.751" y2="700.302"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="683.751" y1="700.302" x2="683.751" y2="698.502"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="566.079" y1="700.302" x2="567.279" y2="700.302"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="566.079" y1="698.502" x2="566.079" y2="700.302"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="552.575,422.99 552.575,408.358 
                                    552.575,407.622 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="549.271" y1="376.998" x2="549.271" y2="422.99"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="596.399,299.398 595.495,299.398 
                                    577.487,299.398 576.583,299.398 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="576.583,300.598 577.487,300.598 
                                    595.495,300.598 596.399,300.598 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="596.399,299.998 595.495,299.998 
                                    577.487,299.998 576.583,299.998 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="596.399,301.654 597.303,301.654 
                                    600.903,301.654 601.799,301.654 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="597.303" y1="301.654" x2="597.303" y2="298.35"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="601.799,298.35 600.903,298.35 
                                    597.303,298.35 596.399,298.35 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="596.399,298.35 596.399,299.398 
                                    596.399,299.998 596.399,300.598 596.399,301.654 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="576.583,298.35 576.583,299.398 
                                    576.583,299.998 576.583,300.598 576.583,301.654 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="621.615,299.398 620.711,299.398 
                                    602.703,299.398 601.799,299.398 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="601.799,300.598 602.703,300.598 
                                    620.711,300.598 621.615,300.598 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="621.615,299.998 620.711,299.998 
                                    602.703,299.998 601.799,299.998 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="621.615,301.654 622.519,301.654 
                                    644.727,301.654 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="669.647,298.35 668.743,298.35 
                                    622.519,298.35 621.615,298.35 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="621.615,298.35 621.615,299.398 
                                    621.615,299.998 621.615,300.598 621.615,301.654 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="600.903" y1="301.654" x2="600.903" y2="298.35"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="601.799,298.35 601.799,299.398 
                                    601.799,299.998 601.799,300.598 601.799,301.654 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="669.647,299.998 670.543,299.998 
                                    688.559,299.998 689.455,299.998 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="689.455,299.398 688.559,299.398 
                                    670.543,299.398 669.647,299.398 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="669.647,300.598 670.543,300.598 
                                    688.559,300.598 689.455,300.598 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="689.455,301.654 690.359,301.654 
                                    693.959,301.654 694.863,301.654 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="694.863,298.35 693.959,298.35 
                                    690.359,298.35 689.455,298.35 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="689.455,298.35 689.455,299.398 
                                    689.455,299.998 689.455,300.598 689.455,301.654 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="669.647,298.35 669.647,299.398 
                                    669.647,299.998 669.647,300.598 669.647,301.654 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="714.671,299.398 713.775,299.398 
                                    695.759,299.398 694.863,299.398 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="694.863,300.598 695.759,300.598 
                                    713.775,300.598 714.671,300.598 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="714.671,299.998 713.775,299.998 
                                    695.759,299.998 694.863,299.998 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="714.671,301.654 715.575,301.654 
                                    719.175,301.654 720.079,301.654 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="715.575" y1="301.654" x2="715.575" y2="298.35"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="720.079,298.35 719.175,298.35 
                                    715.575,298.35 714.671,298.35 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="714.671,298.35 714.671,299.398 
                                    714.671,299.998 714.671,300.598 714.671,301.654 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="694.863,298.35 694.863,299.398 
                                    694.863,299.998 694.863,300.598 694.863,301.654 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="720.079,299.998 720.975,299.998 
                                    738.991,299.998 739.887,299.998 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="739.887,299.398 738.991,299.398 
                                    720.975,299.398 720.079,299.398 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="720.079,300.598 720.975,300.598 
                                    738.991,300.598 739.887,300.598 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="739.887,301.654 740.791,301.654 
                                    783.415,301.654 784.319,301.654 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="784.319,298.35 783.415,298.35 
                                    765.407,298.35 740.791,298.35 739.887,298.35 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="739.887,298.35 739.887,299.398 
                                    739.887,299.998 739.887,300.598 739.887,301.654 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="720.079,298.35 720.079,299.398 
                                    720.079,299.998 720.079,300.598 720.079,301.654 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="810.055" y1="300.75" x2="810.055" y2="299.998"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="818.543,299.998 818.239,299.998 
                                    810.055,299.998 809.759,299.998 801.575,299.998 801.279,299.998 793.095,299.998 792.799,299.998 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="792.799,299.998 792.799,300.302 
                                    792.799,300.702 792.799,300.75 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="792.799,300.75 792.823,300.75 
                                    793.063,300.75 793.095,300.75 809.759,300.75 810.055,300.75 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="818.543,299.254 818.239,299.254 
                                    801.575,299.254 801.279,299.254 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="801.279" y1="299.254" x2="801.279" y2="299.998"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="784.319" y1="301.654" x2="784.319" y2="298.35"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="818.543,298.35 819.439,298.35 
                                    837.447,298.35 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="834.151,301.654 819.439,301.654 
                                    818.543,301.654 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="818.543,301.654 818.543,299.998 
                                    818.543,299.254 818.543,298.35 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="835.799,502.478 835.799,503.382 
                                    835.799,521.39 835.799,522.294 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="836.399,522.294 836.399,521.39 
                                    836.399,503.382 836.399,502.478 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="835.199,502.478 835.199,503.382 
                                    835.199,521.39 835.199,522.294 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="837.447,522.294 836.399,522.294 
                                    835.799,522.294 835.199,522.294 834.151,522.294 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="834.151,502.478 834.151,501.582 
                                    834.151,477.262 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="837.447,363.19 837.447,501.582 
                                    837.447,502.478 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="837.447,502.478 836.399,502.478 
                                    835.799,502.478 835.199,502.478 834.151,502.478 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="836.399,636.366 836.399,635.47 
                                    836.399,617.454 836.399,616.558 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="835.199,616.558 835.199,617.454 
                                    835.199,635.47 835.199,636.366 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="835.799,636.366 835.799,635.47 
                                    835.799,617.454 835.799,616.558 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="834.151" y1="637.27" x2="837.447" y2="637.27"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="837.447,636.366 836.399,636.366 
                                    835.799,636.366 835.199,636.366 834.151,636.366 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="834.151,616.558 834.151,615.654 
                                    834.151,590.134 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="837.447,583.23 837.447,615.654 
                                    837.447,616.558 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="837.447,616.558 836.399,616.558 
                                    835.799,616.558 835.199,616.558 834.151,616.558 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="787.919,743.982 788.823,743.982 
                                    806.831,743.982 807.735,743.982 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="807.735,742.782 806.831,742.782 
                                    788.823,742.782 787.919,742.782 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="787.919,743.382 788.823,743.382 
                                    806.831,743.382 807.735,743.382 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="787.919,745.03 787.919,743.982 
                                    787.919,743.382 787.919,742.782 787.919,741.734 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="807.735,741.734 808.631,741.734 
                                    812.535,741.734 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="808.631" y1="741.734" x2="808.631" y2="745.03"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="812.535,745.03 808.631,745.03 
                                    807.735,745.03 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="807.735,745.03 807.735,743.982 
                                    807.735,743.382 807.735,742.782 807.735,741.734 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="782.519,743.982 781.615,743.982 
                                    763.607,743.982 762.703,743.982 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="762.703,742.782 763.607,742.782 
                                    781.615,742.782 782.519,742.782 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="782.519,743.382 781.615,743.382 
                                    763.607,743.382 762.703,743.382 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="782.519,741.734 783.415,741.734 
                                    787.023,741.734 787.919,741.734 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="787.919,745.03 787.023,745.03 
                                    783.415,745.03 782.519,745.03 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="782.519,745.03 782.519,743.982 
                                    782.519,743.382 782.519,742.782 782.519,741.734 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="761.807" y1="741.734" x2="761.807" y2="745.03"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="762.703,745.03 762.703,743.982 
                                    762.703,743.382 762.703,742.782 762.703,741.734 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="581.391" y1="407.622" x2="582.135" y2="406.878"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="582.135,406.878 594.847,419.59 
                                    594.871,419.614 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="594.871" y1="419.614" x2="594.127" y2="420.358"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="594.127" y1="420.358" x2="581.391" y2="407.622"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="642.327" y1="405.518" x2="641.583" y2="406.262"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="641.583,406.262 628.023,392.702 
                                    627.999,392.678 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="627.999,392.678 628.375,392.31 
                                    628.743,391.934 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="628.743" y1="391.934" x2="642.327" y2="405.518"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="668.591" y1="476.062" x2="667.855" y2="475.326"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="667.855,475.318 667.855,475.326 
                                    655.135,488.038 655.119,488.054 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="655.119,488.054 655.487,488.422 
                                    655.855,488.798 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="655.855" y1="488.798" x2="668.591" y2="476.062"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="668.447" y1="544.502" x2="667.703" y2="545.246"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="667.703,545.246 654.143,531.686 
                                    654.119,531.662 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="654.119" y1="531.662" x2="654.863" y2="530.918"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="654.863" y1="530.918" x2="668.447" y2="544.502"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="706.567" y1="698.502" x2="707.311" y2="699.246"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="707.311,699.246 722.575,683.982 
                                    722.591,683.966 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="722.591" y1="683.966" x2="721.855" y2="683.222"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="721.855" y1="683.222" x2="706.567" y2="698.502"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="700.567" y1="524.99" x2="699.823" y2="525.734"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="699.823,525.734 711.687,537.598 
                                    711.711,537.622 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="711.711" y1="537.622" x2="712.455" y2="536.878"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="712.455" y1="536.878" x2="700.567" y2="524.99"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="753.695" y1="508.638" x2="752.647" y2="508.638"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="752.647" y1="490.622" x2="753.695" y2="490.622"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="753.695" y1="490.622" x2="753.695" y2="508.638"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="751.599" y1="499.63" x2="752.647" y2="499.63"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="752.647,490.622 752.647,499.63 
                                    752.647,508.638 752.647,517.638 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="753.695" y1="545.406" x2="752.959" y2="544.662"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="752.959,544.662 765.671,531.95 
                                    765.695,531.934 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="765.695,531.926 765.695,531.934 
                                    766.055,532.302 766.431,532.67 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="766.431" y1="532.67" x2="753.695" y2="545.406"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="753.695" y1="553.51" x2="752.959" y2="554.254"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="752.959,554.254 764.815,566.118 
                                    764.839,566.142 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="764.839" y1="566.142" x2="765.583" y2="565.398"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="765.583" y1="565.398" x2="753.695" y2="553.51"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="753.695" y1="648.822" x2="752.647" y2="648.822"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="752.647" y1="630.814" x2="753.695" y2="630.814"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="753.695" y1="630.814" x2="753.695" y2="648.822"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="751.599" y1="639.822" x2="752.647" y2="639.822"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="752.647,630.814 752.647,639.822 
                                    752.647,648.822 752.647,657.83 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="753.695" y1="593.438" x2="752.959" y2="594.182"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="752.959,594.182 765.671,606.894 
                                    765.695,606.918 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="765.695" y1="606.918" x2="766.431" y2="606.174"></line>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="766.431" y1="606.174" x2="753.695" y2="593.438"></line>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M614.303,443.718
                                    c0-0.152-0.12-0.272-0.264-0.272c-0.152,0-0.272,0.12-0.272,0.272c0,0.144,0.12,0.272,0.272,0.272
                                    C614.183,443.99,614.303,443.862,614.303,443.718z"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M614.303,442.438
                                    c0-0.144-0.12-0.264-0.264-0.264c-0.152,0-0.272,0.12-0.272,0.264c0,0.152,0.12,0.272,0.272,0.272
                                    C614.183,442.71,614.303,442.59,614.303,442.438z"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M614.303,441.166
                                    c0-0.152-0.12-0.272-0.264-0.272c-0.152,0-0.272,0.12-0.272,0.272c0,0.144,0.12,0.272,0.272,0.272
                                    C614.183,441.438,614.303,441.31,614.303,441.166z"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M782.455,580.23
                                    c0-0.296-0.24-0.536-0.536-0.536c-0.304,0-0.544,0.24-0.544,0.536s0.24,0.536,0.544,0.536
                                    C782.215,580.766,782.455,580.526,782.455,580.23z"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M786.759,579.222
                                    c0,1.888-2.168,3.424-4.84,3.424c-2.68,0-4.848-1.536-4.848-3.424s2.168-3.424,4.848-3.424
                                    C784.591,575.798,786.759,577.334,786.759,579.222z"></path>

                                    <ellipse fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" cx="781.919" cy="580.102" rx="5.648" ry="4.84"></ellipse>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M780.911,583.454
                                    c0-0.144-0.12-0.264-0.272-0.264c-0.144,0-0.264,0.12-0.264,0.264c0,0.152,0.12,0.272,0.264,0.272
                                    C780.791,583.726,780.911,583.606,780.911,583.454z"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M782.183,583.454
                                    c0-0.144-0.12-0.264-0.264-0.264c-0.152,0-0.272,0.12-0.272,0.264c0,0.152,0.12,0.272,0.272,0.272
                                    C782.063,583.726,782.183,583.606,782.183,583.454z"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" d="M783.463,583.454
                                    c0-0.144-0.12-0.264-0.272-0.264c-0.144,0-0.264,0.12-0.264,0.264c0,0.152,0.12,0.272,0.264,0.272
                                    C783.343,583.726,783.463,583.606,783.463,583.454z"></path>
                                    <circle fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" cx="779.023" cy="409.27" r="1.088"></circle>
                                    <circle fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" cx="779.023" cy="401.766" r="1.088"></circle>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="739.591" y1="473.062" x2="739.591" y2="471.462"></line>

                                            <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="3.0832,1.5416" points="
                                            739.591,469.921 739.591,466.758 739.591,456.817 						"></polyline>
                                            <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="739.591,456.046 739.591,455.646 
                                            739.591,454.446 						"></polyline>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="761.199" y1="473.062" x2="759.599" y2="473.062"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.832,1.416" x1="758.183" y1="473.062" x2="741.899" y2="473.062"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="741.191" y1="473.062" x2="739.591" y2="473.062"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="761.199" y1="473.062" x2="761.199" y2="471.462"></line>

                                            <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="3.0832,1.5416" points="
                                            761.199,469.921 761.199,466.758 761.199,456.817 						"></polyline>
                                            <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="761.199,456.046 761.199,455.646 
                                            761.199,454.446 						"></polyline>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="761.199" y1="454.446" x2="759.599" y2="454.446"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.832,1.416" x1="758.183" y1="454.446" x2="741.899" y2="454.446"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="741.191" y1="454.446" x2="739.591" y2="454.446"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="761.199" y1="455.646" x2="759.599" y2="455.646"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.832,1.416" x1="758.183" y1="455.646" x2="741.899" y2="455.646"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="741.191" y1="455.646" x2="739.591" y2="455.646"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="761.199" y1="456.102" x2="759.599" y2="456.102"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.832,1.416" x1="758.183" y1="456.102" x2="741.899" y2="456.102"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="741.191" y1="456.102" x2="739.591" y2="456.102"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="639.343" y1="495.278" x2="639.343" y2="493.678"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.8432,1.4216" x1="639.343" y1="492.256" x2="639.343" y2="480.173"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="639.343" y1="479.462" x2="639.343" y2="477.862"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="622.535" y1="477.862" x2="622.535" y2="479.462"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.8432,1.4216" x1="622.535" y1="480.884" x2="622.535" y2="492.967"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="622.535" y1="493.678" x2="622.535" y2="495.278"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="639.343" y1="477.862" x2="637.743" y2="477.862"></line>

                                            <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.7216,1.3608" points="
                                            636.382,477.862 625.535,477.862 624.935,477.862 624.815,477.862 						"></polyline>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="624.135" y1="477.862" x2="622.535" y2="477.862"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="622.535" y1="513.59" x2="624.135" y2="513.59"></line>

                                            <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.7216,1.3608" points="
                                            625.496,513.59 625.535,513.59 637.063,513.59 						"></polyline>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="637.743" y1="513.59" x2="639.343" y2="513.59"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="639.343" y1="495.278" x2="637.743" y2="495.278"></line>

                                            <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.7216,1.3608" points="
                                            636.382,495.278 625.535,495.278 624.935,495.278 624.815,495.278 						"></polyline>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="624.135" y1="495.278" x2="622.535" y2="495.278"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="639.343" y1="496.174" x2="637.743" y2="496.174"></line>

                                            <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.7216,1.3608" points="
                                            636.382,496.174 625.535,496.174 624.935,496.174 624.815,496.174 						"></polyline>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="624.135" y1="496.174" x2="622.535" y2="496.174"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="639.343" y1="513.59" x2="639.343" y2="511.99"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.8432,1.4216" x1="639.343" y1="510.568" x2="639.343" y2="498.485"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="639.343" y1="497.774" x2="639.343" y2="496.174"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="622.535" y1="496.174" x2="622.535" y2="497.774"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.8432,1.4216" x1="622.535" y1="499.196" x2="622.535" y2="511.279"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="622.535" y1="511.99" x2="622.535" y2="513.59"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="624.935" y1="496.174" x2="624.935" y2="497.774"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.8432,1.4216" x1="624.935" y1="499.196" x2="624.935" y2="511.279"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="624.935" y1="511.99" x2="624.935" y2="513.59"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="624.935" y1="477.862" x2="624.935" y2="479.462"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.8432,1.4216" x1="624.935" y1="480.884" x2="624.935" y2="492.967"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="624.935" y1="493.678" x2="624.935" y2="495.278"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="625.535" y1="496.174" x2="625.535" y2="497.774"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.8432,1.4216" x1="625.535" y1="499.196" x2="625.535" y2="511.279"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="625.535" y1="511.99" x2="625.535" y2="513.59"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="625.535" y1="477.862" x2="625.535" y2="479.462"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="2.8432,1.4216" x1="625.535" y1="480.884" x2="625.535" y2="492.967"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="625.535" y1="493.678" x2="625.535" y2="495.278"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="626.735" y1="499.174" x2="626.735" y2="500.774"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="4.104,2.052" x1="626.735" y1="502.826" x2="626.735" y2="507.956"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="626.735" y1="508.982" x2="626.735" y2="510.582"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="626.735" y1="510.582" x2="628.335" y2="510.582"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="3.204,1.602" x1="629.937" y1="510.582" x2="633.942" y2="510.582"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="634.743" y1="510.582" x2="636.343" y2="510.582"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="636.343" y1="510.582" x2="636.343" y2="508.982"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="4.104,2.052" x1="636.343" y1="506.93" x2="636.343" y2="501.8"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="636.343" y1="500.774" x2="636.343" y2="499.174"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="636.343" y1="499.174" x2="634.743" y2="499.174"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" stroke-dasharray="3.204,1.602" x1="633.141" y1="499.174" x2="629.136" y2="499.174"></line>

                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="628.335" y1="499.174" x2="626.735" y2="499.174"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="685.855,449.646 685.855,455.646 
                                            685.855,461.654 685.855,463.383 						"></polyline>
                                            <g>
                                                <polygon points="684.06,462.857 685.855,465.966 687.65,462.857 							"></polygon>
                                            </g>
                                        </g>
                                    </g>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="549.127,305.606 542.007,305.606 
                                    539.631,305.606 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="542.007,302.126 542.007,305.606 
                                    542.007,309.086 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="837.503,738.166 844.623,738.166 
                                    846.999,738.166 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="844.623,741.646 844.623,738.166 
                                    844.623,734.686 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="630.231,519.478 630.231,544.502 
                                    630.231,544.718 				"></polyline>

                                    <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="638.647" y1="519.478" x2="638.647" y2="517.382"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="638.647,517.382 620.711,517.382 
                                    620.623,517.382 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="620.623,519.478 620.711,519.478 
                                    630.231,519.478 638.647,519.478 				"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="562.047,447.086 562.047,482.966 
                                    562.047,483.134 				"></polyline>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" d="M555.279,425.734c0.168,3.928,0.992,7.792,2.44,11.416"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" d="M573.751,437.15c1.456-3.624,2.28-7.488,2.44-11.416"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" d="M559.135,417.438c0,0.008-0.008,0.024-0.008,0.032
                                    c-1.928,5.824-1.912,12.152,0.048,17.968"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" d="M572.295,435.438c1.96-5.816,1.976-12.144,0.048-17.968
                                    c0-0.008-0.008-0.024-0.008-0.032"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" d="M559.175,435.438c0.76,1.848,2.16,3.32,3.92,4.12"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" d="M557.719,437.15c1.352,3.384,4.504,5.6,8.016,5.624"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" d="M565.735,442.774c3.512-0.024,6.664-2.24,8.016-5.624"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" d="M568.375,439.558c1.76-0.8,3.168-2.272,3.92-4.12"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" d="M565.735,438.166c0.368,0,0.664-0.312,0.664-0.696
                                    c0-0.384-0.296-0.688-0.664-0.688s-0.664,0.304-0.664,0.688C565.071,437.854,565.367,438.166,565.735,438.166z"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" d="M563.095,439.558c1.712,0.592,3.568,0.592,5.28,0"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" d="M565.735,408.71c-3.512-0.016-6.68,2.208-8,5.616"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" d="M565.735,412.942c-2.824,0.144-5.352,1.88-6.6,4.528"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" d="M572.335,417.47c-1.248-2.648-3.776-4.384-6.6-4.528"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" d="M576.191,425.734c-0.176-3.928-1.008-7.784-2.456-11.408"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" d="M573.735,414.326c-1.312-3.392-4.464-5.616-7.96-5.616
                                    c-0.016,0-0.024,0-0.04,0"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" d="M557.735,414.326c-1.448,3.624-2.28,7.48-2.456,11.408"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" d="M574.919,443.094c4.512-11.032,4.528-23.52,0-34.544"></path>
                                    <line fill="none" stroke="#000000" stroke-width="0.36" x1="574.919" y1="407.622" x2="574.919" y2="408.55"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" points="574.919,443.094 574.919,443.638 574.919,443.646 				"></polyline>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" d="M555.799,416.262l1.872-4.608c0.048-0.128-0.016-0.264-0.136-0.304
                                    l-0.408-0.136c-0.272-0.088-0.568,0.04-0.696,0.304c-0.6,1.288-1.128,2.608-1.584,3.96c-0.104,0.312,0.056,0.656,0.36,0.768
                                    c0,0,0.232,0.064,0.392,0.112C555.679,416.382,555.799,416.262,555.799,416.262z"></path>
                                    <path fill="none" stroke="#000000" stroke-width="0.36" d="M556.431,440.126c-0.608-1.288-1.128-2.608-1.584-3.96
                                    c-0.096-0.328,0.064-0.664,0.368-0.768c0.12-0.04,0.248-0.08,0.36-0.136c0.064-0.024,0.12-0.04,0.184-0.04
                                    c0.032,0,0.064,0.008,0.088,0.024c0.144,0.064,0.152,0.224,0.208,0.352c0.088,0.24,0.176,0.48,0.264,0.72
                                    c0.12,0.32,0.232,0.64,0.36,0.96c0.12,0.344,0.248,0.688,0.376,1.032c0.12,0.32,0.232,0.632,0.352,0.952
                                    c0.104,0.272,0.16,0.448,0.272,0.72c0.016,0.04,0.032,0.096,0.024,0.176c-0.008,0.056-0.048,0.096-0.088,0.112
                                    c-0.056,0.016-0.104,0.032-0.16,0.048c-0.104,0.04-0.224,0.072-0.328,0.112C556.855,440.526,556.559,440.39,556.431,440.126z"></path>
                                </g>
                            </g>
                        </g>
                    </g><g id="v.1.lbl">
                        <g id="TEXT_00000160907013948312705450000006862521069649207468_">
                            <text transform="matrix(1 0 0 1 806.5693 472.2086)" font-family="'ArialMT'" font-size="5.6px">PANTRY</text>
                        </g>
                        <g id="TEXT_00000001646771794887480750000007902762217688229796_">
                            <text transform="matrix(1 0 0 1 681.8818 448.1153)" font-family="'ArialMT'" font-size="6.4px">UP</text>
                        </g>
                        <g id="TEXT_00000041265353054677646530000012295065040381205660_">
                            <text transform="matrix(1 0 0 1 602.1816 621.8067)"><tspan x="0" y="0" font-family="'ArialMT'" font-size="9.6px">GARAGE</tspan><tspan x="-12.455" y="11.52" font-family="'ArialMT'" font-size="9.6px">20'-0" X 20'-10"</tspan></text>
                        </g>
                        <g id="TEXT_00000137105176969678054750000013840220599055687871_">
                            <text transform="matrix(1 0 0 1 633.9955 527.3975)" font-family="'ArialMT'" font-size="7.2px">LAUNDRY</text>
                        </g>
                        <g id="TEXT_00000010282081098430411530000011964674234157484719_">
                            <text transform="matrix(1 0 0 1 782.748 333.7262)"><tspan x="0" y="0" font-family="'ArialMT'" font-size="9.6px"> NOOK</tspan><tspan x="-14.854" y="11.52" font-family="'ArialMT'" font-size="9.6px">10'-0" X 10'-4"</tspan></text>
                        </g>
                        <g id="TEXT_00000092451727220988310720000009581852629731774368_">
                            <text transform="matrix(1 0 0 1 744.996 439.2564)"><tspan x="0" y="0" font-family="'ArialMT'" font-size="9.6px">KITCHEN</tspan><tspan x="-9.255" y="11.52" font-family="'ArialMT'" font-size="9.6px">13'-6" X 13'-6"</tspan></text>
                        </g>
                        <g id="TEXT_00000077307176743747435900000008609015317469577612_">
                            <text transform="matrix(1 0 0 1 688.2343 349.6524)"><tspan x="0" y="0" font-family="'ArialMT'" font-size="9.6px">GREAT</tspan><tspan x="1.604" y="11.52" font-family="'ArialMT'" font-size="9.6px">ROOM</tspan><tspan x="-16.458" y="23.04" font-family="'ArialMT'" font-size="9.6px">14'-9" X 15'-10"</tspan></text>
                        </g>
                        <g id="TEXT_00000006675046932046809260000000729675953979502245_">
                            <text transform="matrix(1 0 0 1 786.705 264.6524)" font-family="'ArialMT'" font-size="9.6px">PATIO</text>
                        </g>
                        <g id="TEXT_00000183217817134799742070000005389128887812402305_">
                            <text transform="matrix(1 0 0 1 775.3886 387.6554)" font-family="'ArialMT'" font-size="4.8px">D.W.</text>
                        </g>
                        <g id="TEXT_00000133515071281787879790000005358624892352696467_">
                            <text transform="matrix(1 0 0 1 744.9296 464.8751)" font-family="'ArialMT'" font-size="4.8px">REF.</text>
                        </g>
                        <g id="TEXT_00000029012768145472580700000013977619479413916070_">
                            <text transform="matrix(1 0 0 1 699.9199 719.0225)" font-family="'ArialMT'" font-size="8px">PORCH</text>
                        </g>
                        <g id="TEXT_00000036245993603316801380000001257722199221802684_">
                            <text transform="matrix(1 0 0 1 765.7197 508.6393)"><tspan x="0" y="0" font-family="'ArialMT'" font-size="9.6px">BEDROOM 3</tspan><tspan x="-1.519" y="11.52" font-family="'ArialMT'" font-size="9.6px">11'-2" X 9'-11"</tspan></text>
                        </g>
                        <g id="TEXT_00000065044798550359627330000017417138612462476433_">
                            <text transform="matrix(1 0 0 1 703.3622 678.2393)" font-family="'ArialMT'" font-size="8px">FOYER</text>
                        </g>
                        <g id="TEXT_00000028322653487981440840000008269996624397151894_">
                            <text transform="matrix(1 0 0 1 770.0058 563.9669)" font-family="'ArialMT'" font-size="9.6px">BATH 2</text>
                        </g>
                        <g id="TEXT_00000021118409994211861910000009891752265173939358_">
                            <text transform="matrix(1 0 0 1 765.7206 623.5479)"><tspan x="0" y="0" font-family="'ArialMT'" font-size="9.6px">BEDROOM 2</tspan><tspan x="-1.519" y="11.52" font-family="'ArialMT'" font-size="9.6px">11'-2" X 10'-1"</tspan></text>
                        </g>
                        <g id="TEXT_00000072246819757817555030000017954209101426372274_">
                            <text transform="matrix(1 0 0 1 772.1279 700.3038)"><tspan x="0" y="0" font-family="'ArialMT'" font-size="9.6px">FLEX</tspan><tspan x="-20.988" y="11.52" font-family="'ArialMT'" font-size="9.6px">13'-10" X 10'-8"</tspan></text>
                        </g>
                        <g id="TEXT_00000109740999748633889750000012322829032212455552_">
                            <text transform="matrix(1 0 0 1 714.4394 569.1192)" font-family="'ArialMT'" font-size="9.6px">HALL</text>
                        </g>
                        <g id="TEXT_00000139251528721169586750000004197600371134718114_">
                            <text transform="matrix(1 0 0 1 577.2314 343.1285)"><tspan x="0" y="0" font-family="'ArialMT'" font-size="9.6px">PRIMARY</tspan><tspan x="-2.932" y="11.52" font-family="'ArialMT'" font-size="9.6px">BEDROOM</tspan><tspan x="-8.454" y="23.04" font-family="'ArialMT'" font-size="9.6px">12'-9" X 14'-5"</tspan></text>
                        </g>
                        <g id="MTEXT_00000045596721182415639310000018068779795372513198_">
                            <text transform="matrix(1 0 0 1 571.662 514.7872)" font-family="'ArialMT'" font-size="9.6px">W.I.C.</text>
                        </g>
                        <g id="TEXT_00000102524301087299078200000012555352002902386591_">
                            <text transform="matrix(1 0 0 1 572.8232 463.7569)"><tspan x="0" y="0" font-family="'ArialMT'" font-size="8px">PRIMARY</tspan><tspan x="7.557" y="9.6" font-family="'ArialMT'" font-size="8px">BATH</tspan></text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 621.1723 532.5196)" font-family="'ArialMT'" font-size="2.9625px">LINEN</text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 552.9599 465.9659)" font-family="'ArialMT'" font-size="2.9625px">LINEN</text>
                        </g>
                        <text transform="matrix(1 0 0 1 848.2197 737.0528)"><tspan x="0" y="0" font-family="'ArialMT'" font-size="4.8px">HOSE</tspan><tspan x="2.934" y="5.76" font-family="'ArialMT'" font-size="4.8px">BIB</tspan></text>
                        <g>
                            <text transform="matrix(1 0 0 1 526.0707 305.606)"><tspan x="0" y="0" font-family="'ArialMT'" font-size="4px">HOSE</tspan><tspan x="2.444" y="4.8" font-family="'ArialMT'" font-size="4px">BIB</tspan></text>
                        </g>
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
            </g>
        </svg>

    );
}

export function PlanBSecondSVG({active, panZoom}: SVGProps) {
    const { onWheel, onPointerDown, onPointerMove, onPointerUp, scale, tx, ty } = panZoom;
    return (
        <svg
            className="h-full w-full touch-none select-none"
            viewBox="0 0 850 850"
            onWheel={onWheel}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
        >

            {/* World transform */}
            <g transform={`translate(${tx},${ty}) scale(${scale})`}>
                <g id="v.2">
                    <g id="XMLID_00000178892942250452849630000000757447161086427070_">
                        <g>
                            <g id="XMLID_00000170992024463881404010000007697319620594416551_">
                                <g>
                                    <polygon points="676.847,545.469 676.847,547.573 673.239,547.573 672.207,547.573 671.143,547.573 635.719,547.573 
                                        635.719,683.861 637.519,683.861 648.831,683.861 673.239,683.861 682.551,683.861 682.551,687.157 632.415,687.157 
                                        632.415,547.573 632.415,544.269 671.143,544.269 671.143,473.725 673.239,473.725 673.239,479.429 673.239,485.429 
                                        673.239,491.437 673.239,497.437 673.239,503.445 673.239,509.445 673.239,515.453 673.239,521.453 673.239,527.461 
                                        673.239,533.461 673.239,545.469 					"></polygon>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="673.239" y1="547.573" x2="673.239" y2="549.173"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" stroke-dasharray="3.246,1.623" x1="673.239" y1="550.796" x2="673.239" y2="681.45"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="673.239" y1="682.261" x2="673.239" y2="683.861"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="713.471" y1="547.573" x2="713.471" y2="549.173"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" stroke-dasharray="3.246,1.623" x1="713.471" y1="550.796" x2="713.471" y2="681.45"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="713.471" y1="682.261" x2="713.471" y2="683.861"></line>
                                        </g>
                                    </g>
                                    <g>
                                        
                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" stroke-dasharray="2.096" x1="673.239" y1="446.109" x2="671.143" y2="446.109"></line>
                                    </g>
                                    <g>
                                        <g>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="671.143" y1="446.109" x2="671.143" y2="447.709"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" stroke-dasharray="3.052,1.526" x1="671.143" y1="449.235" x2="671.143" y2="471.362"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="671.143" y1="472.125" x2="671.143" y2="473.725"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" points="673.239,473.725 673.239,473.421 
                                                673.239,472.125 							"></polyline>
                                            <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" stroke-dasharray="3.052,1.526" points="
                                                673.239,470.599 673.239,467.421 673.239,461.421 673.239,455.413 673.239,449.413 673.239,448.472 							"></polyline>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="673.239" y1="447.709" x2="673.239" y2="446.109"></line>
                                        </g>
                                    </g>
                                    <g>
                                        
                                            <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" stroke-dasharray="2.104" x1="698.455" y1="446.109" x2="700.559" y2="446.109"></line>
                                    </g>
                                    <g>
                                        <g>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="700.559" y1="446.109" x2="700.559" y2="447.709"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" stroke-dasharray="3.052,1.526" x1="700.559" y1="449.235" x2="700.559" y2="471.362"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="700.559" y1="472.125" x2="700.559" y2="473.725"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" points="698.455,473.725 698.455,473.421 
                                                698.455,472.125 							"></polyline>
                                            <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" stroke-dasharray="3.052,1.526" points="
                                                698.455,470.599 698.455,467.421 698.455,461.421 698.455,455.413 698.455,449.413 698.455,448.472 							"></polyline>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="698.455" y1="447.709" x2="698.455" y2="446.109"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="632.415" y1="544.269" x2="630.815" y2="544.269"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" stroke-dasharray="3.1285,1.5642" x1="629.251" y1="544.269" x2="554.949" y2="544.269"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="554.167" y1="544.269" x2="552.567" y2="544.269"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="700.559" y1="698.269" x2="700.559" y2="696.669"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" stroke-dasharray="3.956,1.978" x1="700.559" y1="694.691" x2="700.559" y2="689.746"></line>
                                            <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" points="700.559,688.757 700.559,687.757 
                                                700.559,687.157 							"></polyline>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="632.415" y1="547.573" x2="630.815" y2="547.573"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" stroke-dasharray="3.1285,1.5642" x1="629.251" y1="547.573" x2="554.949" y2="547.573"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="554.167" y1="547.573" x2="552.567" y2="547.573"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="697.255" y1="698.269" x2="697.255" y2="696.669"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" stroke-dasharray="3.956,1.978" x1="697.255" y1="694.691" x2="697.255" y2="689.746"></line>
                                            <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" points="697.255,688.757 697.255,687.757 
                                                697.255,687.157 							"></polyline>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="552.567" y1="301.413" x2="554.167" y2="301.413"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" stroke-dasharray="3.1814,1.5907" x1="555.758" y1="301.413" x2="831.748" y2="301.413"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="832.543" y1="301.413" x2="834.143" y2="301.413"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="834.143" y1="741.493" x2="834.143" y2="739.893"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" stroke-dasharray="3.1889,1.5945" x1="834.143" y1="738.299" x2="834.143" y2="303.81"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="834.143" y1="303.013" x2="834.143" y2="301.413"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="834.143" y1="741.493" x2="832.543" y2="741.493"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" stroke-dasharray="3.2643,1.6321" x1="830.911" y1="741.493" x2="738.695" y2="741.493"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="737.879" y1="741.493" x2="736.279" y2="741.493"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="736.279" y1="741.493" x2="736.279" y2="739.893"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" stroke-dasharray="3.2019,1.601" x1="736.279" y1="738.292" x2="736.279" y2="700.669"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="736.279" y1="699.869" x2="736.279" y2="698.269"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="736.279" y1="698.269" x2="734.679" y2="698.269"></line>
                                            
                                                <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" stroke-dasharray="3.2234,1.6117" points="
                                                733.067,698.269 700.559,698.269 697.255,698.269 554.973,698.269 							"></polyline>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="554.167" y1="698.269" x2="552.567" y2="698.269"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="552.567" y1="698.269" x2="552.567" y2="696.669"></line>
                                            
                                                <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" stroke-dasharray="3.1875,1.5937" points="
                                                552.567,695.075 552.567,547.573 552.567,544.269 552.567,303.81 							"></polyline>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="552.567" y1="303.013" x2="552.567" y2="301.413"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="549.263" y1="298.117" x2="550.863" y2="298.117"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" stroke-dasharray="3.2021,1.601" x1="552.464" y1="298.117" x2="835.047" y2="298.117"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="835.847" y1="298.117" x2="837.447" y2="298.117"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="837.447" y1="744.797" x2="837.447" y2="743.197"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" stroke-dasharray="3.202,1.601" x1="837.447" y1="741.596" x2="837.447" y2="300.518"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="837.447" y1="299.717" x2="837.447" y2="298.117"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="837.447" y1="744.797" x2="835.847" y2="744.797"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" stroke-dasharray="3.1645,1.5822" x1="834.265" y1="744.797" x2="735.374" y2="744.797"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="734.583" y1="744.797" x2="732.983" y2="744.797"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="732.983" y1="744.797" x2="732.983" y2="743.197"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" stroke-dasharray="3.2026,1.6013" x1="732.983" y1="741.596" x2="732.983" y2="703.966"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="732.983" y1="703.165" x2="732.983" y2="701.565"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="732.983" y1="701.565" x2="731.383" y2="701.565"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" stroke-dasharray="3.2236,1.6118" x1="729.771" y1="701.565" x2="551.669" y2="701.565"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="550.863" y1="701.565" x2="549.263" y2="701.565"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="549.263" y1="701.565" x2="549.263" y2="699.965"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" stroke-dasharray="3.202,1.601" x1="549.263" y1="698.364" x2="549.263" y2="300.518"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="549.263" y1="299.717" x2="549.263" y2="298.117"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="694.855" y1="545.469" x2="693.255" y2="545.469"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" stroke-dasharray="2.9616,1.4808" x1="691.774" y1="545.469" x2="679.187" y2="545.469"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="678.447" y1="545.469" x2="676.847" y2="545.469"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="694.855" y1="547.573" x2="693.255" y2="547.573"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" stroke-dasharray="2.9616,1.4808" x1="691.774" y1="547.573" x2="679.187" y2="547.573"></line>
                                            
                                                <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="2" x1="678.447" y1="547.573" x2="676.847" y2="547.573"></line>
                                        </g>
                                    </g>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="673.239,521.453 685.847,521.453 
                                        698.455,521.453 					"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="673.239,515.453 685.847,515.453 
                                        698.455,515.453 					"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="673.239,509.445 685.847,509.445 
                                        698.455,509.445 					"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="673.239,503.445 685.847,503.445 
                                        698.455,503.445 					"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="673.239,497.437 685.847,497.437 
                                        698.455,497.437 					"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="673.239,491.437 685.847,491.437 
                                        698.455,491.437 					"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="673.239,485.429 685.847,485.429 
                                        698.455,485.429 					"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="673.239,479.429 685.847,479.429 
                                        698.455,479.429 					"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="673.239,473.421 685.847,473.421 
                                        698.455,473.421 					"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="673.239,467.421 685.847,467.421 
                                        698.455,467.421 					"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="673.239,461.421 685.847,461.421 
                                        698.455,461.421 					"></polyline>
                                    
                                        <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="673.239" y1="455.413" x2="698.455" y2="455.413"></line>
                                    
                                        <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="673.239" y1="449.413" x2="698.455" y2="449.413"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="673.239,527.461 685.847,527.461 
                                        698.455,527.461 					"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="673.239,533.461 685.847,533.461 
                                        698.455,533.461 					"></polyline>
                                    <g>
                                        <g>
                                            <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="685.847,465.637 
                                                685.847,467.421 685.847,473.421 685.847,479.429 685.847,485.429 685.847,491.437 685.847,497.437 685.847,503.445 
                                                685.847,509.445 685.847,515.453 685.847,521.453 685.847,527.461 685.847,533.461 							"></polyline>
                                            <g>
                                                <polygon points="684.052,466.162 685.847,463.053 687.642,466.162 								"></polygon>
                                            </g>
                                        </g>
                                    </g>
                                    
                                        <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="676.847" y1="547.573" x2="676.847" y2="545.469"></line>
                                    
                                        <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="676.847" y1="545.469" x2="673.239" y2="545.469"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="684.351,686.109 684.351,685.509 
                                        684.351,684.909 					"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="702.359,686.109 702.359,685.509 
                                        702.359,684.909 					"></polyline>
                                    
                                        <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="682.551" y1="687.157" x2="682.551" y2="687.757"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="682.551,687.757 697.255,687.757 
                                        700.559,687.757 704.159,687.757 					"></polyline>
                                    
                                        <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="704.159" y1="687.757" x2="704.159" y2="687.157"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="635.719,547.573 671.143,547.573 
                                        672.207,547.573 673.239,547.573 676.847,547.573 					"></polyline>
                                    
                                        <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="671.143" y1="544.269" x2="632.415" y2="544.269"></line>
                                    
                                        <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="682.551" y1="687.157" x2="682.551" y2="683.861"></line>
                                    
                                        <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="637.519" y1="683.861" x2="635.719" y2="683.861"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="682.551,683.861 673.239,683.861 
                                        648.831,683.861 					"></polyline>
                                    
                                        <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="632.415" y1="687.157" x2="682.551" y2="687.157"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="682.551,687.157 683.447,687.157 
                                        697.255,687.157 700.559,687.157 703.263,687.157 					"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="703.263,683.861 683.447,683.861 
                                        682.551,683.861 					"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="632.415,544.269 632.415,547.573 
                                        632.415,687.157 					"></polyline>
                                    
                                        <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="635.719" y1="683.861" x2="635.719" y2="547.573"></line>
                                    <polygon stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="754.295,544.269 754.295,687.157 
                                        704.159,687.157 704.159,683.861 750.991,683.861 750.991,547.573 694.855,547.573 694.855,545.469 698.455,545.469 
                                        698.455,473.725 700.559,473.725 700.559,544.269 					"></polygon>
                                    
                                        <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="673.239" y1="473.725" x2="671.143" y2="473.725"></line>
                                    
                                        <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="671.143" y1="473.725" x2="671.143" y2="544.269"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="673.239,545.469 673.239,533.461 
                                        673.239,527.461 673.239,521.453 673.239,515.453 673.239,509.445 673.239,503.445 673.239,497.437 673.239,491.437 
                                        673.239,485.429 673.239,479.429 673.239,473.725 					"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="683.447,685.509 684.351,685.509 
                                        702.359,685.509 703.263,685.509 					"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="703.263,686.109 702.359,686.109 
                                        684.351,686.109 683.447,686.109 					"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="683.447,684.909 684.351,684.909 
                                        702.359,684.909 703.263,684.909 					"></polyline>
                                    
                                        <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="704.159" y1="683.861" x2="703.263" y2="683.861"></line>
                                    
                                        <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="704.159" y1="687.157" x2="703.263" y2="687.157"></line>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="703.263,687.157 703.263,686.109 
                                        703.263,685.509 703.263,684.909 703.263,683.861 					"></polyline>
                                    <polyline fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" points="683.447,687.157 683.447,686.109 
                                        683.447,685.509 683.447,684.909 683.447,683.861 					"></polyline>
                                    
                                        <line fill="none" stroke="#000000" stroke-width="0.36" stroke-miterlimit="10" x1="637.519" y1="683.861" x2="648.831" y2="683.861"></line>
                                </g>
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

export const planBMainOptions = [
    { key: "primaryRetreat", label: "Primary Retreat" },
    { key: "primaryDoorToPat", label: "Primary Patio Entry" },
    { key: "bbqConn", label: "BBQ Connection" },
    { key: "greatRmFire", label: "Great Room Fireplace" },
    { key: "kitchenDblOvn", label: "Kitchen Double Oven" },
    { key: "morningKitchen", label: "Morning Kitchen" },
];

export const planBSecondOptions = [
    { key: "opt2", label: "Option 2" },
    { key: "opt3", label: "Option 3" },
    { key: "opt4", label: "Option 4" },
];

export const planB = {
    code: "planB",
    floors: [
        { id: "main", name: "Main Level", SVG: PlanBSVG, options: planBMainOptions },
        { id: "second", name: "Second Level", SVG: PlanBSecondSVG, options: planBSecondOptions },
    ],
};
