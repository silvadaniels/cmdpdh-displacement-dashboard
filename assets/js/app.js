const I18N = {
  es: {
    title:"Desplazamiento interno en México", subtitle:"Explora los registros documentados por año, entidad y municipio.",
    stateFilter:"Filtrar por estado", allStates:"Todos los estados", level:"Nivel", states:"Estados", municipalities:"Municipios",
    indicator:"Indicador", reportedPersons:"Personas reportadas", estimatedPersons:"Personas estimadas",
    displacedFamilies:"Familias desplazadas", displacementEvents:"Eventos de desplazamiento",
    timeMode:"Tiempo", singleYear:"Un año", compareYears:"Comparar", year:"Año", selectYears:"Seleccionar años",
    noDataShort:"Sin datos", areasWithData:"Áreas con información", geography:"Geografía",
    mapHint:"Selecciona un área para filtrar todo el tablero.", selectedArea:"Área seleccionada",
    nothingSelected:"Ninguna selección", clearSelection:"Limpiar selección", inspectMunicipalities:"Ver municipios de esta entidad",
    period:"Periodo", ranking:"Clasificación", trend:"Tendencia", annualEvolution:"Evolución anual",
    gapNote:"2021 se muestra como No disponible y no se interpola.", data:"Datos", reportedAreas:"Áreas reportadas",
    search:"Buscar municipio o estado", area:"Área", state:"Estado", methodology:"Metodología",
    howToRead:"Cómo leer estos datos", methodText:"Los municipios son la unidad fuente y se agregan automáticamente por clave geográfica a las entidades. Los años seleccionados se suman de forma independiente; la selección nunca es acumulativa por defecto. La falta de información no se convierte en cero.",
    source:"Fuente:", sourceText:"CMDPDH y cartografía municipal de INEGI.", audit:"Consultar auditoría de datos",
    footer:"Tablero estático de acceso público", unavailable:"No disponible", noDataAvailable:"No hay datos disponibles",
    records:"registros", withData:"con información", displayed:"áreas mostradas", mainStates:"Principales estados",
    mainMunicipalities:"Principales municipios", lightMap:"Mapa claro", roadsMap:"Rutas y localidades",
    selectedYears:"Años seleccionados", selectedYear:"Año seleccionado", chooseYear:"Selecciona al menos un año",
    loadError:"No fue posible cargar los datos procesados.", periodSummary:"Periodo seleccionado",
    noDataLegend:"No disponible", selectedGeography:"Geografía seleccionada", national:"México"
  },
  en: {
    title:"Internal displacement in Mexico", subtitle:"Explore documented records by year, state, and municipality.",
    stateFilter:"Filter by state", allStates:"All states", level:"Level", states:"States", municipalities:"Municipalities",
    indicator:"Indicator", reportedPersons:"Reported persons", estimatedPersons:"Estimated persons",
    displacedFamilies:"Displaced families", displacementEvents:"Displacement events",
    timeMode:"Time", singleYear:"Single year", compareYears:"Compare years", year:"Year", selectYears:"Select years",
    noDataShort:"No data", areasWithData:"Areas with information", geography:"Geography",
    mapHint:"Select an area to filter the entire dashboard.", selectedArea:"Selected area",
    nothingSelected:"No selection", clearSelection:"Clear selection", inspectMunicipalities:"View municipalities in this state",
    period:"Period", ranking:"Ranking", trend:"Trend", annualEvolution:"Annual evolution",
    gapNote:"2021 is shown as No data available and is not interpolated.", data:"Data", reportedAreas:"Reported areas",
    search:"Search municipality or state", area:"Area", state:"State", methodology:"Methodology",
    howToRead:"How to read these data", methodText:"Municipalities are the source unit and are automatically aggregated to states by geographic code. Selected years are summed independently; selection is never cumulative by default. Missing information is not converted to zero.",
    source:"Source:", sourceText:"CMDPDH and INEGI municipal cartography.", audit:"View data audit",
    footer:"Static public-access dashboard", unavailable:"No data available", noDataAvailable:"No data available",
    records:"records", withData:"with information", displayed:"areas shown", mainStates:"Top states",
    mainMunicipalities:"Top municipalities", lightMap:"Light map", roadsMap:"Roads and places",
  selectedYears:"Selected years", selectedYear:"Selected year", chooseYear:"Select at least one year",
    loadError:"The processed data could not be loaded.", periodSummary:"Selected period",
    noDataLegend:"No data available", selectedGeography:"Selected geography", national:"Mexico"
  }
};
Object.assign(I18N.es,{
  headerEyebrow:"2017–2023 · MÉXICO",title:"Desplazamiento interno documentado",
  subtitle:"Eventos y personas identificadas mediante el monitoreo anual de la Comisión Mexicana de Defensa y Promoción de los Derechos Humanos (CMDPDH).",
  sourceMethods:"Fuente y metodología",closeMethods:"Cerrar",methodsDataSourceTitle:"Fuente de los datos",
  methodsDataSource:"Comisión Mexicana de Defensa y Promoción de los Derechos Humanos (CMDPDH). Monitoreo anual del desplazamiento interno en México.",
  methodsScopeTitle:"Alcance",methodsScope:"El tablero presenta eventos y personas identificadas entre 2017 y 2023. No hay observaciones disponibles para 2021.",
  methodsMethodTitle:"Tratamiento de los datos",methodsMethod:"Los registros municipales se vinculan y agregan mediante claves geográficas oficiales. Los años seleccionados se suman de forma independiente y la información faltante se conserva como no disponible.",
  methodsLimitationsTitle:"Limitaciones",methodsLimitations:"Las cifras constituyen un mínimo documentado y no un censo completo. La ausencia de eventos documentados no demuestra la ausencia de desplazamiento.",
  methodsCartographyTitle:"Tratamiento cartográfico",methodsCartography:"Los nombres y límites geográficos corresponden a la cartografía municipal oficial de INEGI; las entidades se construyen a partir de sus claves geográficas.",
  methodsAttributionTitle:"Atribución institucional",dataMethodSourceLabel:"Fuente de datos e investigación:",
  dashboardDesignLabel:"Diseño y desarrollo del dashboard:",cmdpdhName:"Comisión Mexicana de Defensa y Promoción de los Derechos Humanos (CMDPDH).",
  contactTitle:"Contacto",dataSourceLabel:"Fuente de datos",
  formalCitation:"Comisión Mexicana de Defensa y Promoción de los Derechos Humanos (CMDPDH). Monitoreo anual del desplazamiento interno en México.",
  interpretiveNoteLabel:"Nota de interpretación",
  footerInterpretiveNote:"Las cifras representan un mínimo documentado y no un censo completo del desplazamiento interno en México. Los valores se agregan a partir de eventos de desplazamiento documentados mediante la metodología de monitoreo de la CMDPDH. La información faltante nunca se interpreta como cero. Las áreas sin eventos documentados pueden reflejar información no disponible o no verificada y no deben interpretarse como áreas sin desplazamiento.",
  viewSourceMethods:"Consultar fuente y metodología",dashboardDevelopment:"Desarrollo del dashboard",
  lastUpdated:"Última actualización:",institutionalContact:"Contacto institucional",
  participatingInstitutions:"Instituciones participantes",cmdpdhRole:"Fuente de datos e investigación",
  utRole:"Diseño y desarrollo del dashboard",
  direction:"Dirección",origin:"Origen",destination:"Destino",peopleFrom:"Personas desde el área",
  peopleTo:"Personas hacia el área",populationAndCauses:"Población, retorno y causas",
  returnStatus:"Retorno",indigenousPopulation:"Población indígena",armedAttack:"Ataque armado",
  clashes:"Enfrentamientos",weaponsPresence:"Presencia de armas",threatsIntimidation:"Amenazas e intimidación",
  propertyDestruction:"Destrucción de bienes",forcedRecruitment:"Reclutamiento forzado",detentions:"Detenciones",
  killings:"Asesinatos",extortion:"Extorsión",disappearances:"Desapariciones",
  intentionalEviction:"Desalojo intencional",yes:"Sí",no:"No",totals:"Totales"
  ,population:"Población",causes:"Causas",return:"Retorno",metadata:"Metadatos"
  ,years:"Años",selectAll:"Seleccionar todos",clear:"Limpiar",annualEvolutionFor:"Evolución anual"
  ,validRecords:"registros válidos"
  ,clearFilters:"Limpiar filtros",reportedCausesHeading:"Causas reportadas entre registros con información disponible"
  ,indigenousReported:"Población indígena reportada",events:"eventos",validInformation:"Información válida"
  ,ofEvents:"de",validReports:"reportes válidos",noInformation:"sin información"
  ,methodText:"Los municipios son la unidad fuente y se agregan por clave geográfica. Origen incluye todos los registros; destino incluye solo nombres con una coincidencia municipal oficial única. Los porcentajes de variables binarias son promedios de los valores conocidos multiplicados por 100. La falta de información no se convierte en cero."
});
Object.assign(I18N.en,{
  headerEyebrow:"2017–2023 · MEXICO",title:"Documented Internal Displacement",
  subtitle:"Events and people identified through the annual monitoring of the Comisión Mexicana de Defensa y Promoción de los Derechos Humanos (CMDPDH).",
  sourceMethods:"Source and Methods",closeMethods:"Close",methodsDataSourceTitle:"Data source",
  methodsDataSource:"Comisión Mexicana de Defensa y Promoción de los Derechos Humanos (CMDPDH). Annual Monitoring of Internal Displacement in Mexico.",
  methodsScopeTitle:"Scope",methodsScope:"The dashboard presents events and people identified from 2017 through 2023. No observations are available for 2021.",
  methodsMethodTitle:"Data treatment",methodsMethod:"Municipal records are linked and aggregated using official geographic codes. Selected years are summed independently, and missing information remains unavailable.",
  methodsLimitationsTitle:"Limitations",methodsLimitations:"The figures constitute a documented minimum rather than a complete census. The absence of documented events does not demonstrate the absence of displacement.",
  methodsCartographyTitle:"Cartographic treatment",methodsCartography:"Geographic names and boundaries follow official INEGI municipal cartography; states are constructed from their geographic codes.",
  methodsAttributionTitle:"Institutional attribution",dataMethodSourceLabel:"Data source and research:",
  dashboardDesignLabel:"Dashboard design and development:",cmdpdhName:"Comisión Mexicana de Defensa y Promoción de los Derechos Humanos (CMDPDH).",
  contactTitle:"Contact",dataSourceLabel:"Data source",
  formalCitation:"Comisión Mexicana de Defensa y Promoción de los Derechos Humanos (CMDPDH). Annual Monitoring of Internal Displacement in Mexico.",
  interpretiveNoteLabel:"Interpretive note",
  footerInterpretiveNote:"The figures represent a documented minimum rather than a complete census of internal displacement in Mexico. Values are aggregated from documented displacement events identified through the CMDPDH monitoring methodology. Missing information is never interpreted as zero. Areas without documented events may reflect unavailable or unverified information and should not be interpreted as areas without displacement.",
  viewSourceMethods:"View Source and Methods",dashboardDevelopment:"Dashboard development",
  lastUpdated:"Last updated:",institutionalContact:"Institutional contact",
  participatingInstitutions:"Participating institutions",cmdpdhRole:"Data source and research",
  utRole:"Dashboard design and development",
  direction:"Direction",origin:"Origin",destination:"Destination",peopleFrom:"People from the area",
  peopleTo:"People to the area",populationAndCauses:"Population, return, and causes",
  returnStatus:"Return status",indigenousPopulation:"Indigenous population",armedAttack:"Armed attack",
  clashes:"Clashes",weaponsPresence:"Weapons presence",threatsIntimidation:"Threats and intimidation",
  propertyDestruction:"Property destruction",forcedRecruitment:"Forced recruitment",detentions:"Detentions",
  killings:"Killings",extortion:"Extortion",disappearances:"Disappearances",
  intentionalEviction:"Intentional eviction",yes:"Yes",no:"No",totals:"Totals"
  ,population:"Population",causes:"Causes",return:"Return",metadata:"Metadata"
  ,years:"Years",selectAll:"Select all",clear:"Clear",annualEvolutionFor:"Annual evolution"
  ,validRecords:"valid records"
  ,clearFilters:"Clear filters",reportedCausesHeading:"Reported causes among records with available information"
  ,indigenousReported:"Indigenous population reported",events:"events",validInformation:"Valid information"
  ,ofEvents:"of",validReports:"valid reports",noInformation:"no information"
  ,methodText:"Municipalities are the source unit and are aggregated by geographic code. Origin includes all records; destination includes only names with one unique official municipality match. Binary-variable percentages are averages of known values multiplied by 100. Missing information is not converted to zero."
});

const INDICATORS = {
  persons_reported:{label:"reportedPersons"},
  persons_estimated:{label:"estimatedPersons"},
  families_displaced:{label:"displacedFamilies"},
  event_records:{label:"displacementEvents"}
};
const AVAILABLE_YEARS = [2017,2018,2019,2020,2022,2023];
const ALL_YEARS = [2017,2018,2019,2020,2021,2022,2023];
const DUMMY_FIELDS = [
  ["return_status","returnStatus"],["indigenous_population","indigenousPopulation"],
  ["armed_attack","armedAttack"],["clashes","clashes"],["weapons_presence","weaponsPresence"],
  ["threats_intimidation","threatsIntimidation"],["property_destruction","propertyDestruction"],
  ["forced_recruitment","forcedRecruitment"],["detentions","detentions"],["killings","killings"],
  ["extortion","extortion"],["disappearances","disappearances"],["intentional_eviction","intentionalEviction"]
];
const OPTIONAL_DIMENSIONS = ["rural_urban","vulnerable_population"];
const MAP_PALETTES = {
  origin:["#edf2ef","#c8ddd4","#8ebbaa","#4e927e","#1d665b","#0d403b"],
  destination:["#edf2ef","#c8ddd4","#8ebbaa","#4e927e","#1d665b","#0d403b"]
};

const dashboardState = {
  language:"es",
  geographyLevel:"states",
  selectedYears:[2023],
  indicator:"persons_reported",
  direction:"origin",
  stateFilter:null,
  selectedFeature:null,
  tableSearch:"",
  data:{}
};

const $ = id => document.getElementById(id);
const t = key => I18N[dashboardState.language][key] || key;
const locale = () => dashboardState.language === "es" ? "es-MX" : "en-US";
const valueText = value => value == null || Number.isNaN(value)
  ? t("unavailable") : new Intl.NumberFormat(locale()).format(value);
const shortValue = value => new Intl.NumberFormat(locale(),{notation:"compact",maximumFractionDigits:1}).format(value);
const properties = feature => feature.properties;
const featureCode = feature => dashboardState.geographyLevel === "states"
  ? properties(feature).state_id : properties(feature).municipality_id;
const featureName = feature => dashboardState.geographyLevel === "states"
  ? properties(feature).state_name : properties(feature).municipality_name;
const activeYears = () => dashboardState.selectedYears;
const periodText = () => activeYears().join(", ");
const indicatorLabel = () => t(INDICATORS[dashboardState.indicator].label);

let map, geoLayer, labelsLayer, lightBasemap, roadsBasemap, layerControl, chartResizeObserver;

function directionRows(feature,direction=dashboardState.direction,years=activeYears()) {
  return years.map(year=>properties(feature).years?.[direction]?.[String(year)]).filter(Boolean);
}

function summarizeRows(rows) {
  const result={persons_reported:null,persons_estimated:null,families_displaced:null,event_records:null};
  Object.keys(result).forEach(key=>{
    const known=rows.map(row=>row[key]).filter(value=>value!=null);
    result[key]=known.length?known.reduce((sum,value)=>sum+value,0):null;
  });
  DUMMY_FIELDS.forEach(([field])=>{
    const yes=rows.reduce((sum,row)=>sum+(row[`${field}_yes`]||0),0);
    const no=rows.reduce((sum,row)=>sum+(row[`${field}_no`]||0),0);
    const missing=rows.reduce((sum,row)=>sum+(row[`${field}_missing`]||0),0);
    const valid=yes+no;
    result[`${field}_pct`]=valid?yes/valid*100:null;
    result[`${field}_yes`]=yes;
    result[`${field}_no`]=no;
    result[`${field}_known`]=valid;
    result[`${field}_missing`]=missing;
  });
  return result;
}

function aggregateFeature(feature, years=activeYears(),direction=dashboardState.direction) {
  return summarizeRows(directionRows(feature,direction,years));
}

function aggregateFeatures(features,direction=dashboardState.direction,years=activeYears()) {
  return summarizeRows(features.flatMap(feature=>directionRows(feature,direction,years)));
}

function contextFeatures() {
  return dashboardState.data[dashboardState.geographyLevel].features.filter(feature =>
    !dashboardState.stateFilter || properties(feature).state_id === dashboardState.stateFilter);
}

function selectedFeatureObject() {
  if (!dashboardState.selectedFeature) return null;
  return dashboardState.data[dashboardState.geographyLevel].features.find(feature =>
    featureCode(feature) === dashboardState.selectedFeature.code) || null;
}

function analyticalFeatures() {
  const selected = selectedFeatureObject();
  return selected ? [selected] : contextFeatures();
}

function featuresWithData(features=analyticalFeatures()) {
  return features.filter(feature => aggregateFeature(feature)[dashboardState.indicator] != null);
}

function sumMetric(features,key,years=activeYears()) {
  return aggregateFeatures(features,dashboardState.direction,years)[key];
}

async function loadData() {
  try {
    const [states,municipalities,annual,records] = await Promise.all(
      ["states.geojson","municipal.geojson","annual.json","records.json"].map(file =>
        fetch(`data/processed/${file}`).then(response => {
          if (!response.ok) throw new Error(file);
          return response.json();
        }))
    );
    dashboardState.data = {states,municipalities,annual,records};
    init();
  } catch (error) {
    $("errorMessage").textContent = t("loadError");
    $("errorMessage").hidden = false;
    console.error(error);
  }
}

function init() {
  map = L.map("map",{
    zoomControl:true,minZoom:4,scrollWheelZoom:false,preferCanvas:true
  }).setView([23.7,-102.2],5);
  map.createPane("basemapPane"); map.getPane("basemapPane").style.zIndex=200;
  map.createPane("polygonPane"); map.getPane("polygonPane").style.zIndex=400;
  map.createPane("labelsPane"); map.getPane("labelsPane").style.zIndex=650;
  map.getPane("labelsPane").style.pointerEvents="none";
  const attribution='&copy; OpenStreetMap contributors &copy; CARTO';
  lightBasemap=L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png",{
    pane:"basemapPane",attribution,subdomains:"abcd",maxZoom:20
  }).addTo(map);
  roadsBasemap=L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
    pane:"basemapPane",attribution:"&copy; OpenStreetMap contributors",maxZoom:19
  });
  labelsLayer=L.tileLayer("https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png",{
    pane:"labelsPane",attribution,subdomains:"abcd",maxZoom:20
  }).addTo(map);
  [...dashboardState.data.states.features]
    .sort((a,b)=>properties(a).state_name.localeCompare(properties(b).state_name,"es"))
    .forEach(feature=>$("stateFilter").add(new Option(properties(feature).state_name,properties(feature).state_id)));
  bindEvents();
  renderDashboard();
  chartResizeObserver=new ResizeObserver(()=>{
    ["rankingChart","trendChart"].forEach(id=>{if(Plotly.Plots?.resize)Plotly.Plots.resize($(id))});
  });
  chartResizeObserver.observe($("rankingChart"));
  chartResizeObserver.observe($("trendChart"));
}

function clearSelection(render=true) {
  dashboardState.selectedFeature=null;
  if (render) renderDashboard();
}

function updateYearsFromPicker() {
  dashboardState.selectedYears=[...document.querySelectorAll("#yearPicker input:checked")]
    .map(input=>+input.value).filter(year=>AVAILABLE_YEARS.includes(year)).sort();
  renderDashboard();
}

function bindEvents() {
  const methodsDialog=$("methodsDialog");
  document.querySelectorAll("[data-open-methods]").forEach(button=>button.addEventListener("click",()=>methodsDialog.showModal()));
  $("closeMethods").addEventListener("click",()=>methodsDialog.close());
  methodsDialog.addEventListener("click",event=>{if(event.target===methodsDialog)methodsDialog.close()});
  $("languageToggle").addEventListener("click",()=>{
    dashboardState.language=dashboardState.language==="es"?"en":"es";
    renderDashboard();
  });
  $("stateFilter").addEventListener("change",event=>{
    dashboardState.stateFilter=event.target.value || null;
    clearSelection(false);
    renderDashboard();
  });
  document.querySelectorAll("[data-level]").forEach(button=>button.addEventListener("click",()=>{
    if (button.dataset.level===dashboardState.geographyLevel) return;
    dashboardState.geographyLevel=button.dataset.level;
    clearSelection(false);
    renderDashboard();
  }));
  $("indicatorSelect").addEventListener("change",event=>{
    dashboardState.indicator=event.target.value;
    renderDashboard();
  });
  document.querySelectorAll("[data-direction]").forEach(button=>button.addEventListener("click",()=>{
    dashboardState.direction=button.dataset.direction;
    clearSelection(false);
    renderDashboard();
  }));
  document.querySelectorAll("#yearPicker input").forEach(input=>input.addEventListener("change",updateYearsFromPicker));
  $("selectAllYears").addEventListener("click",()=>{
    document.querySelectorAll("#yearPicker input:not(:disabled)").forEach(input=>{input.checked=true});
    updateYearsFromPicker();
  });
  $("clearYears").addEventListener("click",()=>{
    document.querySelectorAll("#yearPicker input:not(:disabled)").forEach(input=>{input.checked=false});
    updateYearsFromPicker();
  });
  $("clearFilters").addEventListener("click",()=>{
    dashboardState.geographyLevel="states";
    dashboardState.direction="origin";
    dashboardState.indicator="persons_reported";
    dashboardState.selectedYears=[2023];
    dashboardState.stateFilter=null;
    dashboardState.selectedFeature=null;
    dashboardState.tableSearch="";
    $("stateFilter").value="";
    $("indicatorSelect").value="persons_reported";
    $("tableSearch").value="";
    document.querySelectorAll("#yearPicker input:not(:disabled)").forEach(input=>{input.checked=+input.value===2023});
    $("yearPicker").open=false;
    renderDashboard();
  });
  $("tableSearch").addEventListener("input",event=>{
    dashboardState.tableSearch=event.target.value.toLocaleLowerCase();
    renderTable();
  });
  $("clearSelection").addEventListener("click",()=>clearSelection());
  $("inspectMunicipalities").addEventListener("click",()=>{
    const selected=selectedFeatureObject();
    if (!selected || dashboardState.geographyLevel!=="states") return;
    dashboardState.stateFilter=properties(selected).state_id;
    dashboardState.geographyLevel="municipalities";
    dashboardState.selectedFeature=null;
    $("stateFilter").value=dashboardState.stateFilter;
    renderDashboard();
  });
  document.addEventListener("keydown",event=>{if(event.key==="Escape"&&dashboardState.selectedFeature)clearSelection()});
  map.on("click",()=>{if(dashboardState.selectedFeature)clearSelection()});
}

function updateLayerControl() {
  if (layerControl) map.removeControl(layerControl);
  layerControl=L.control.layers({[t("lightMap")]:lightBasemap,[t("roadsMap")]:roadsBasemap},null,{
    collapsed:false,position:"topright"
  }).addTo(map);
}

function classification(features) {
  const values=features.map(feature=>aggregateFeature(feature)[dashboardState.indicator])
    .filter(value=>value!=null).sort((a,b)=>a-b);
  if (!values.length) return {cuts:[0,0,0,0,0],min:null,max:null};
  const cuts=[.2,.4,.6,.8,.95].map(q=>values[Math.min(values.length-1,Math.floor(q*(values.length-1)))]);
  return {cuts,min:values[0],max:values.at(-1)};
}

function colorFor(value,cuts) {
  if (value==null) return getComputedStyle(document.documentElement).getPropertyValue("--color-null").trim();
  const palette=MAP_PALETTES[dashboardState.direction];
  return palette[value<=cuts[0]?0:value<=cuts[1]?1:value<=cuts[2]?2:value<=cuts[3]?3:value<=cuts[4]?4:5];
}

function renderMap() {
  if (geoLayer) geoLayer.remove();
  const features=contextFeatures();
  const {cuts}=classification(features);
  const renderer=L.canvas({padding:.5,tolerance:4});
  geoLayer=L.geoJSON({type:"FeatureCollection",features},{
    pane:"polygonPane",renderer,bubblingMouseEvents:false,
    style:feature=>{
      const value=aggregateFeature(feature)[dashboardState.indicator];
      const fillColor=colorFor(value,cuts);
      const selected=dashboardState.selectedFeature?.code===featureCode(feature);
      if (selected && dashboardState.geographyLevel==="states") {
        return {weight:0,opacity:0,color:fillColor,fillColor,fillOpacity:.96};
      }
      if (selected) return {weight:.8,opacity:.9,color:"#59635f",fillColor,fillOpacity:.92};
      if (dashboardState.geographyLevel==="states") {
        return {weight:0,opacity:0,color:fillColor,fillColor,fillOpacity:.82};
      }
      return {weight:.4,opacity:.65,color:"#8d9692",fillColor,fillOpacity:.82};
    },
    onEachFeature:(feature,layer)=>{
      const metric=aggregateFeature(feature)[dashboardState.indicator];
      layer.bindTooltip(`<div class="tooltip-name">${featureName(feature)}</div>${t(dashboardState.direction)} · ${indicatorLabel()}: ${valueText(metric)}`);
      layer.on("click",event=>{
        if (event.originalEvent) L.DomEvent.stopPropagation(event.originalEvent);
        const code=featureCode(feature);
        dashboardState.selectedFeature?.code===code
          ? dashboardState.selectedFeature=null
          : dashboardState.selectedFeature={level:dashboardState.geographyLevel,code};
        renderDashboard();
      });
    }
  }).addTo(map);
  labelsLayer.bringToFront();
  if (features.length) {
    const bounds=geoLayer.getBounds();
    if (bounds.isValid()) map.fitBounds(bounds,{padding:[12,12],maxZoom:dashboardState.geographyLevel==="states"?6:9});
  }
  $("mapTitle").textContent=`${t(dashboardState.geographyLevel)} · ${t(dashboardState.direction)} · ${indicatorLabel()}`;
  renderLegend(features,cuts);
}

function renderLegend(features,cuts) {
  const values=features.map(feature=>aggregateFeature(feature)[dashboardState.indicator]).filter(value=>value!=null);
  const palette=MAP_PALETTES[dashboardState.direction];
  let ranges="";
  if (values.length) {
    const bounds=[Math.min(...values),...cuts,Math.max(...values)];
    ranges=palette.map((color,index)=>{
      const low=index===0?bounds[0]:bounds[index-1]+1;
      const high=index===palette.length-1?bounds.at(-1):bounds[index];
      return `<span class="legend-bin"><i style="background:${color}"></i>${shortValue(low)}–${shortValue(Math.max(low,high))}</span>`;
    }).join("");
  }
  $("legend").innerHTML=`<strong>${t(dashboardState.direction)} · ${indicatorLabel()}</strong>${ranges}<span class="legend-bin"><i style="background:var(--color-null)"></i>${t("noDataLegend")}</span>`;
}

function renderCards() {
  const features=analyticalFeatures();
  const active=sumMetric(features,dashboardState.indicator);
  const events=sumMetric(features,"event_records");
  const areas=featuresWithData(features).length;
  $("activeIndicatorLabel").textContent=indicatorLabel();
  $("activeIndicatorTotal").textContent=valueText(active);
  $("activeIndicatorCoverage").textContent=`${areas} ${t("withData")}`;
  $("eventTotal").textContent=valueText(events);
  $("periodSummary").textContent=`${t("periodSummary")}: ${periodText() || "—"}`;
  $("areasWithData").textContent=valueText(areas);
  $("areaContext").textContent=`${t(dashboardState.geographyLevel)} · ${periodText() || "—"}`;
}

function renderDetail() {
  const feature=selectedFeatureObject();
  $("clearSelection").hidden=!feature;
  $("inspectMunicipalities").hidden=!feature||dashboardState.geographyLevel!=="states";
  document.querySelectorAll("[data-detail-indicator]").forEach(row=>
    row.classList.toggle("active-detail",row.dataset.detailIndicator===dashboardState.indicator));
  const scope=feature?[feature]:contextFeatures();
  const metric=aggregateFeatures(scope);
  const origin=aggregateFeatures(scope,"origin");
  const destination=aggregateFeatures(scope,"destination");
  if (feature) {
    $("detailName").textContent=featureName(feature);
    $("detailState").textContent=dashboardState.geographyLevel==="municipalities"?properties(feature).state_name:"";
  } else {
    const filteredState=dashboardState.stateFilter
      ? dashboardState.data.states.features.find(item=>properties(item).state_id===dashboardState.stateFilter)
      : null;
    $("detailName").textContent=`${t("totals")} · ${filteredState?properties(filteredState).state_name:t("national")}`;
    $("detailState").textContent=`${t(dashboardState.direction)} · ${periodText() || "—"}`;
  }
  $("detailFrom").textContent=valueText(origin.persons_reported);
  $("detailTo").textContent=valueText(destination.persons_reported);
  $("detailReported").textContent=valueText(metric.persons_reported);
  $("detailEstimated").textContent=valueText(metric.persons_estimated);
  $("detailFamilies").textContent=valueText(metric.families_displaced);
  $("detailEvents").textContent=valueText(metric.event_records);
  $("detailPeriod").textContent=periodText() || "—";
  $("detailDirection").textContent=t(dashboardState.direction);
  $("detailGeography").textContent=feature?featureName(feature):$("detailName").textContent;
  const dummyRow=([field,label])=>{
    const pct=metric[`${field}_pct`];
    const known=metric[`${field}_known`];
    const missing=metric[`${field}_missing`];
    if (pct==null) return `<div class="dummy-row dummy-row-stacked"><span>${t(label)}</span><strong>${t("unavailable")}</strong></div>`;
    return `<div class="dummy-row dummy-row-stacked"><span>${t(label)}</span><strong>${t("yes")}: ${new Intl.NumberFormat(locale(),{maximumFractionDigits:1}).format(pct)}%</strong><small>${known} ${t("validReports")} · ${missing} ${t("noInformation")}</small></div>`;
  };
  const indigenousYes=metric.indigenous_population_yes;
  const indigenousValid=metric.indigenous_population_known;
  const indigenousMissing=metric.indigenous_population_missing;
  const indigenousTotal=indigenousValid+indigenousMissing;
  $("detailPopulation").innerHTML=indigenousValid
    ? `<div class="population-stat"><span>${t("indigenousReported")}</span><strong>${indigenousYes} ${t("events")}</strong><small>${t("validInformation")}: ${indigenousValid} ${t("ofEvents")} ${indigenousTotal} ${t("events")}<br>${indigenousYes} ${t("ofEvents")} ${indigenousValid} ${t("validReports")} — ${new Intl.NumberFormat(locale(),{maximumFractionDigits:1}).format(metric.indigenous_population_pct)}%</small></div>`
    : `<div class="population-stat"><span>${t("indigenousReported")}</span><strong>${t("unavailable")}</strong></div>`;
  $("detailReturn").innerHTML=DUMMY_FIELDS.filter(([field])=>field==="return_status").map(dummyRow).join("");
  $("detailCauses").innerHTML=DUMMY_FIELDS.filter(([field])=>!["indigenous_population","return_status"].includes(field)).map(dummyRow).join("");
}

function renderRanking() {
  const features=featuresWithData().sort((a,b)=>
    aggregateFeature(b)[dashboardState.indicator]-aggregateFeature(a)[dashboardState.indicator]).slice(0,12).reverse();
  $("rankingTitle").textContent=t(dashboardState.geographyLevel==="states"?"mainStates":"mainMunicipalities");
  Plotly.react("rankingChart",[{
    type:"bar",orientation:"h",x:features.map(feature=>aggregateFeature(feature)[dashboardState.indicator]),
    y:features.map(feature=>featureName(feature)),customdata:features.map(feature=>featureCode(feature)),
    marker:{color:features.map(feature=>dashboardState.selectedFeature?.code===featureCode(feature)
      ? "#b6812d" : "#3d8171")},
    hovertemplate:`%{y}<br>${indicatorLabel()}: %{x:,.0f}<extra></extra>`
  }],{
    margin:{l:145,r:24,t:10,b:45},paper_bgcolor:"transparent",plot_bgcolor:"transparent",
    font:{family:"Inter,system-ui",color:"#172522"},xaxis:{gridcolor:"#e4e9e6",zeroline:false},
    yaxis:{automargin:true}
  },{displayModeBar:false,responsive:true}).then(()=>{
    const chart=$("rankingChart");
    if (chart.removeAllListeners) chart.removeAllListeners("plotly_click");
    if (chart.on) chart.on("plotly_click",event=>{
      const code=String(event.points[0].customdata);
      dashboardState.selectedFeature?.code===code
        ? dashboardState.selectedFeature=null
        : dashboardState.selectedFeature={level:dashboardState.geographyLevel,code};
      renderDashboard();
    });
  });
}

function renderAnnualBars() {
  const selected=selectedFeatureObject();
  let selectedGeography=null;
  let geographyLabel=t("national");
  if (selected) {
    const code=featureCode(selected);
    geographyLabel=featureName(selected);
    selectedGeography={
      level:dashboardState.geographyLevel==="states"?"state":"municipality",
      id:code
    };
  } else if (dashboardState.stateFilter) {
    const stateFeature=dashboardState.data.states.features.find(feature=>properties(feature).state_id===dashboardState.stateFilter);
    geographyLabel=stateFeature?properties(stateFeature).state_name:t("national");
    selectedGeography={level:"state",id:dashboardState.stateFilter};
  }
  const series=buildAnnualReportedPersons(dashboardState.data.records,selectedGeography);
  const values=series.map(item=>item.value);
  const colors=ALL_YEARS.map(year=>year===2021?"#9a9f9d":dashboardState.selectedYears.includes(year)?"#b6812d":"#3d8171");
  $("annualTitle").textContent=`${t("annualEvolutionFor")} — ${geographyLabel}`;
  $("annualSubtitle").textContent=`${t("origin")} · ${t("reportedPersons")}`;
  Plotly.react("trendChart",[{
    type:"bar",x:ALL_YEARS,y:values,marker:{color:colors},
    customdata:ALL_YEARS.map(year=>[`${t("origin")} · ${t("reportedPersons")}`,geographyLabel,year===2021?t("unavailable"):valueText(values[ALL_YEARS.indexOf(year)])]),
    hovertemplate:"%{customdata[0]}<br>%{x} · %{customdata[1]}<br>%{customdata[2]}<extra></extra>"
  }],{
    autosize:true,margin:{l:62,r:22,t:10,b:45},paper_bgcolor:"transparent",plot_bgcolor:"transparent",
    font:{family:"Inter,system-ui",color:"#172522"},
    xaxis:{type:"category",categoryorder:"array",categoryarray:ALL_YEARS,gridcolor:"#e4e9e6",fixedrange:true},
    yaxis:{gridcolor:"#e4e9e6",rangemode:"tozero",fixedrange:true},
    showlegend:false
  },{displayModeBar:false,responsive:true});
  requestAnimationFrame(()=>{if(Plotly.Plots?.resize)Plotly.Plots.resize($("trendChart"))});
}

function renderTable() {
  let features=featuresWithData();
  if (dashboardState.tableSearch) {
    features=features.filter(feature=>
      `${featureName(feature)} ${properties(feature).state_name}`.toLocaleLowerCase().includes(dashboardState.tableSearch));
  }
  features.sort((a,b)=>aggregateFeature(b)[dashboardState.indicator]-aggregateFeature(a)[dashboardState.indicator]);
  const keys=["persons_reported","persons_estimated","families_displaced","event_records"];
  $("dataTable").innerHTML=features.map(feature=>{
    const metric=aggregateFeature(feature);
    const origin=aggregateFeature(feature,activeYears(),"origin");
    const destination=aggregateFeature(feature,activeYears(),"destination");
    const dummyCells=DUMMY_FIELDS.map(([field])=>{
      const pct=metric[`${field}_pct`];
      const valid=metric[`${field}_known`],missing=metric[`${field}_missing`];
      return `<td title="${pct==null?t("unavailable"):`${valid} ${t("validReports")} · ${missing} ${t("noInformation")}`}">${pct==null?t("unavailable"):`${t("yes")}: ${new Intl.NumberFormat(locale(),{maximumFractionDigits:1}).format(pct)}%`}</td>`;
    }).join("");
    return `<tr tabindex="0" data-code="${featureCode(feature)}"><td>${featureName(feature)}</td><td>${properties(feature).state_name}</td><td>${valueText(origin.persons_reported)}</td><td>${valueText(destination.persons_reported)}</td>${keys.map(key=>`<td class="${key===dashboardState.indicator?"active-column":""}">${valueText(metric[key])}</td>`).join("")}${dummyCells}</tr>`;
  }).join("");
  document.querySelectorAll("th[data-column]").forEach(th=>
    th.classList.toggle("active-column",th.dataset.column===dashboardState.indicator));
  [...$("dataTable").rows].forEach(row=>{
    const select=()=>{
      dashboardState.selectedFeature?.code===row.dataset.code
        ? dashboardState.selectedFeature=null
        : dashboardState.selectedFeature={level:dashboardState.geographyLevel,code:row.dataset.code};
      renderDashboard();
    };
    row.addEventListener("click",select);
    row.addEventListener("keydown",event=>{if(event.key==="Enter")select()});
  });
  $("tableCount").textContent=`${features.length} ${t("displayed")}`;
}

function translate() {
  document.documentElement.lang=dashboardState.language;
  document.querySelectorAll("[data-i18n]").forEach(element=>element.textContent=t(element.dataset.i18n));
  document.querySelectorAll("[data-i18n-placeholder]").forEach(element=>element.placeholder=t(element.dataset.i18nPlaceholder));
  document.querySelectorAll("[data-i18n-aria-label]").forEach(element=>element.setAttribute("aria-label",t(element.dataset.i18nAriaLabel)));
  $("languageToggle").textContent=dashboardState.language==="es"?"EN":"ES";
  $("languageToggle").setAttribute("aria-label",dashboardState.language==="es"?"Switch to English":"Cambiar a español");
  $("stateFilter").options[0].textContent=t("allStates");
  updateLayerControl();
}

function renderDashboard() {
  translate();
  document.querySelectorAll("[data-level]").forEach(button=>
    button.classList.toggle("active",button.dataset.level===dashboardState.geographyLevel));
  $("indicatorSelect").value=dashboardState.indicator;
  document.querySelectorAll("[data-direction]").forEach(button=>
    button.classList.toggle("active",button.dataset.direction===dashboardState.direction));
  $("yearSummary").textContent=activeYears().length?periodText():t("clear");
  $("periodNote").textContent=activeYears().length
    ? `${t("selectedYears")}: ${periodText()}`
    : t("chooseYear");
  renderCards();
  renderMap();
  renderDetail();
  renderRanking();
  renderAnnualBars();
  renderTable();
}

loadData();
