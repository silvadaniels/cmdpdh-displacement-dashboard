const YEARS=[2017,2018,2019,2020,2021,2022,2023];
const COLORS=["#dce8d1","#a8c891","#62a278","#287b5b","#09513d"];
const copy={
 es:{brand:"Observatorio de desplazamiento",eyebrow:"EVIDENCIA MUNICIPAL · MÉXICO",title:"Desplazamiento interno, territorio y tiempo",lede:"Explore los registros documentados entre 2017 y 2023. El año 2021 se muestra como no disponible, nunca como cero.",year:"Año",estimated:"Personas estimadas",reported:"Personas reportadas",municipalities:"Municipios con registros",sourceRecords:"Suma de registros fuente",geography:"GEOGRAFÍA",mapTitle:"Municipios de origen",legend:"Menos",more:"Más",mapNote:"El color representa personas estimadas. Solo aparecen municipios con registros en la fuente.",time:"TIEMPO",trendTitle:"Evolución anual",trendNote:"La brecha en 2021 indica datos no disponibles; no se interpola.",detail:"DETALLE",stateTitle:"Resumen por entidad",search:"Buscar entidad",state:"Entidad",reading:"LECTURA RESPONSABLE",methodTitle:"Qué muestran —y qué no— estos datos",method1:"Los valores describen eventos documentados por la fuente; no constituyen un censo completo del desplazamiento.",method2:"Cero significa que la fuente reportó cero. Un valor vacío significa que no se informó. La interfaz conserva esa diferencia.",auditLink:"Leer auditoría y reglas de procesamiento →",footer:"Dashboard estático · Datos 2017–2023 · 2021 no disponible",unavailable:"Datos no disponibles",states:n=>`${n} entidades`,records:n=>`${n} registros`,searchPlaceholder:"Buscar entidad",popupEstimated:"Personas estimadas",popupEvents:"Registros"},
 en:{brand:"Displacement observatory",eyebrow:"MUNICIPAL EVIDENCE · MEXICO",title:"Internal displacement across place and time",lede:"Explore documented records from 2017 to 2023. The year 2021 is shown as unavailable, never as zero.",year:"Year",estimated:"Estimated people",reported:"Reported people",municipalities:"Municipalities with records",sourceRecords:"Sum of source records",geography:"GEOGRAPHY",mapTitle:"Municipalities of origin",legend:"Fewer",more:"More",mapNote:"Color represents estimated people. Only municipalities found in the source are shown.",time:"TIME",trendTitle:"Annual evolution",trendNote:"The 2021 gap means data are unavailable; no values are interpolated.",detail:"DETAIL",stateTitle:"Summary by state",search:"Search state",state:"State",reading:"READ RESPONSIBLY",methodTitle:"What these data show — and what they do not",method1:"Values describe events documented by the source; they are not a complete census of displacement.",method2:"Zero means the source reported zero. A blank means no value was reported. The interface preserves this distinction.",auditLink:"Read the audit and processing rules →",footer:"Static dashboard · 2017–2023 data · 2021 unavailable",unavailable:"Data unavailable",states:n=>`${n} states`,records:n=>`${n} records`,searchPlaceholder:"Search state",popupEstimated:"Estimated people",popupEvents:"Records"}
};
let lang="es", selected=2023, annual=[], states=[], geoData, geoLayer, map;
const nf=()=>new Intl.NumberFormat(lang==="es"?"es-MX":"en-US");
const value=v=>v===null||v===undefined?"—":nf().format(v);
function t(k){return copy[lang][k]}
function color(v,values){if(v===null||v===undefined)return"#ddd9cf";const sorted=values.filter(x=>x>0).sort((a,b)=>a-b);if(!sorted.length)return COLORS[0];const q=p=>sorted[Math.min(sorted.length-1,Math.floor((sorted.length-1)*p))];return v<=q(.2)?COLORS[0]:v<=q(.4)?COLORS[1]:v<=q(.6)?COLORS[2]:v<=q(.8)?COLORS[3]:COLORS[4]}
function yearRecord(feature){return feature.properties.years[String(selected)]}
function renderMap(){
 const vals=geoData.features.map(yearRecord).filter(Boolean).map(x=>x.persons_estimated).filter(x=>x!==null);
 if(geoLayer)geoLayer.remove();
 geoLayer=L.geoJSON(geoData,{style:f=>{const r=yearRecord(f);return{fillColor:r?color(r.persons_estimated,vals):"#dedbd2",fillOpacity:r?.display?.82:.12,color:"#f7f3e8",weight:.7}},onEachFeature:(f,l)=>{
   const r=yearRecord(f); if(!r)return;
   l.bindPopup(`<h3>${f.properties.municipality_name}</h3><p class="map-label">${f.properties.state_name} · ${selected}</p><p><b>${t("popupEstimated")}:</b> ${value(r.persons_estimated)}</p><p><b>${t("popupEvents")}:</b> ${value(r.event_records)}</p>`);
 }}).addTo(map);
}
function renderTrend(){
 const y=annual.map(r=>r.persons_estimated);
 Plotly.react("trend",[{x:YEARS,y,mode:"lines+markers",connectgaps:false,line:{color:"#08765b",width:4},marker:{size:9,color:"#c8dc70",line:{color:"#103e31",width:2}},hovertemplate:`%{x}<br>${t("estimated")}: %{y:,.0f}<extra></extra>`}],{margin:{l:62,r:25,t:30,b:55},paper_bgcolor:"transparent",plot_bgcolor:"transparent",font:{family:"Inter, system-ui",color:"#617067"},xaxis:{tickmode:"array",tickvals:YEARS,gridcolor:"#e3e0d8",fixedrange:true},yaxis:{gridcolor:"#e3e0d8",rangemode:"tozero",fixedrange:true,tickformat:"~s"},showlegend:false,annotations:[{x:2021,y:0,text:t("unavailable"),showarrow:true,arrowhead:0,ay:-58,font:{color:"#9a5e23",size:11}}]}, {displayModeBar:false,responsive:true});
}
function renderTable(){
 const query=document.querySelector("#search").value.trim().toLocaleLowerCase();
 const rows=states.filter(r=>r.year===selected&&r.state_name.toLocaleLowerCase().includes(query)).sort((a,b)=>(b.persons_estimated??-1)-(a.persons_estimated??-1));
 document.querySelector("#state-rows").innerHTML=selected===2021?`<tr><td colspan="4" class="unavailable">${t("unavailable")}</td></tr>`:rows.map(r=>`<tr><td>${r.state_name}</td><td>${value(r.persons_estimated)}</td><td>${value(r.persons_reported)}</td><td>${value(r.municipalities_with_records)}</td></tr>`).join("");
}
function render(){
 document.documentElement.lang=lang; document.querySelectorAll("[data-i18n]").forEach(el=>el.textContent=t(el.dataset.i18n));
 document.querySelector("#language").textContent=lang==="es"?"EN":"ES";document.querySelector("#language").setAttribute("aria-label",lang==="es"?"Switch to English":"Cambiar a español");
 document.querySelector("#search").placeholder=t("searchPlaceholder");document.querySelector("#year-value").textContent=selected;
 const a=annual.find(r=>r.year===selected), unavailable=a.availability!=="available";
 ["estimated","reported","municipalities"].forEach(k=>{const key=k==="estimated"?"persons_estimated":k==="reported"?"persons_reported":"municipalities";document.querySelector(`#kpi-${k}`).textContent=unavailable?"—":value(a[key]);document.querySelector(`#kpi-${k}`).classList.toggle("unavailable",unavailable)});
 document.querySelector("#kpi-estimated-note").textContent=unavailable?t("unavailable"):t("records")(a.event_records);
 document.querySelector("#kpi-states").textContent=unavailable?t("unavailable"):t("states")(a.states);
 renderMap();renderTrend();renderTable();
}
async function init(){
 [annual,states,geoData]=await Promise.all(["annual.json","state.json","municipal.geojson"].map(f=>fetch(`data/processed/${f}`).then(r=>{if(!r.ok)throw Error(f);return r.json()})));
 map=L.map("map",{zoomControl:true,scrollWheelZoom:false,minZoom:4}).setView([23.5,-102],5);
 L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png",{attribution:'&copy; OpenStreetMap &copy; CARTO',maxZoom:12}).addTo(map);
 render();
}
document.querySelector("#year").addEventListener("input",e=>{selected=YEARS[+e.target.value];render()});
document.querySelector("#language").addEventListener("click",()=>{lang=lang==="es"?"en":"es";render()});
document.querySelector("#search").addEventListener("input",renderTable);
init().catch(()=>{document.querySelector("#main").innerHTML="<p>No fue posible cargar los datos / Data could not be loaded.</p>"});
