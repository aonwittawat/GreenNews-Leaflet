// BASEMAP LAYERS
const Carto = L.tileLayer('https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="https://carto.com">CARTO</a>'
});
const Hybrid = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',{
    attribution: '&copy; <a href="https://www.google.com/">Google</a>'
});
const OpenStreetMap = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
});

const baseLayers = {
    พื้นฐาน: Carto,
    ภาพดาวเทียม: Hybrid,
    เส้นถนน: OpenStreetMap
};

// Disaster
const iconDisaster = L.icon({
    iconUrl: 'images/icons/Disaster_and_climate_change.png',
    iconSize: [25,25]
});

const Disaster = L.esri.featureLayer({
    url: 'https://services5.arcgis.com/60ZyqBuk6DAAkHuh/ArcGIS/rest/services/DISASTER/FeatureServer/0',
    attribution: '&copy; 2020 สำนักข่าวสิ่งแวดล้อม โดยชมรมนักข่าวสิ่งแวดล้อม | สมาคมนักข่าวนักหนังสือพิมพ์แห่งประเทศไทย <a href="https://greennews.agency/">(GreenNews)</a>',
    pointToLayer: function (geojson, latlng) {
    const GeoJSON = L.marker(latlng,{
        highlight: "temporary",
        icon: iconDisaster
    });
    return GeoJSON
    }
});

Disaster.bindPopup(function (layer) {
    document.getElementById("title").innerHTML = layer.feature.properties.TITLE;
    document.getElementById("details").innerHTML = layer.feature.properties.DETAIL;
    document.getElementById("image").src = layer.feature.properties.IMAGE;
    document.getElementById("link").href = layer.feature.properties.LINK;

    const date = new Date(layer.feature.properties.DATE);
    document.getElementById("datePost").innerHTML = date.toLocaleDateString();
    
    sidebar.open('home');
    return L.Util.template('<p>{TITLE}</p>', layer.feature.properties);
});

// Ecology
const iconEcology = L.icon({
    iconUrl: 'images/icons/Ecology.png',
    iconSize: [25,25]
});

const Ecology = L.esri.featureLayer({
    url: 'https://services5.arcgis.com/60ZyqBuk6DAAkHuh/ArcGIS/rest/services/Ecology/FeatureServer/0',
    attribution: '&copy; 2020 สำนักข่าวสิ่งแวดล้อม โดยชมรมนักข่าวสิ่งแวดล้อม | สมาคมนักข่าวนักหนังสือพิมพ์แห่งประเทศไทย <a href="https://greennews.agency/">(GreenNews)</a>',
    pointToLayer: function (geojson, latlng) {
    const GeoJSON = L.marker(latlng,{
        highlight: "temporary",
        icon: iconEcology
    });
    return GeoJSON
    }
});

Ecology.bindPopup(function (layer) {
    document.getElementById("title").innerHTML = layer.feature.properties.TITLE;
    document.getElementById("details").innerHTML = layer.feature.properties.DETAIL;
    document.getElementById("image").src = layer.feature.properties.IMAGE;
    document.getElementById("link").href = layer.feature.properties.LINK;

    const date = new Date(layer.feature.properties.DATE);
    document.getElementById("datePost").innerHTML = date.toLocaleDateString();
    
    sidebar.open('home');
    return L.Util.template('<p>{TITLE}</p>', layer.feature.properties);
});

// Water and Ocean
const iconOcean = L.icon({
    iconUrl: 'images/icons/Water_and_Ocean.png',
    iconSize: [25,25]
});

const Ocean = L.esri.featureLayer({
    url: 'https://services5.arcgis.com/60ZyqBuk6DAAkHuh/ArcGIS/rest/services/WATER_AND_OCEAN/FeatureServer/0',
    attribution: '&copy; 2020 สำนักข่าวสิ่งแวดล้อม โดยชมรมนักข่าวสิ่งแวดล้อม | สมาคมนักข่าวนักหนังสือพิมพ์แห่งประเทศไทย <a href="https://greennews.agency/">(GreenNews)</a>',
    pointToLayer: function (geojson, latlng) {
    const GeoJSON = L.marker(latlng,{
        highlight: "temporary",
        icon: iconOcean
    });
    return GeoJSON
    }
});

Ocean.bindPopup(function (layer) {
    document.getElementById("title").innerHTML = layer.feature.properties.TITLE;
    document.getElementById("details").innerHTML = layer.feature.properties.DETAIL;
    document.getElementById("image").src = layer.feature.properties.IMAGE;
    document.getElementById("link").href = layer.feature.properties.LINK;

    const date = new Date(layer.feature.properties.DATE);
    document.getElementById("datePost").innerHTML = date.toLocaleDateString();
    
    sidebar.open('home');
    return L.Util.template('<p>{TITLE}</p>', layer.feature.properties);
});

// Forest and Wildlife
const iconForest = L.icon({
    iconUrl: 'images/icons/Forest_and_Wildlife.png',
    iconSize: [25,25]
});

const Forest = L.esri.featureLayer({
    url: 'https://services5.arcgis.com/60ZyqBuk6DAAkHuh/ArcGIS/rest/services/FOREST_AND_WILDIFE/FeatureServer/0',
    attribution: '&copy; 2020 สำนักข่าวสิ่งแวดล้อม โดยชมรมนักข่าวสิ่งแวดล้อม | สมาคมนักข่าวนักหนังสือพิมพ์แห่งประเทศไทย <a href="https://greennews.agency/">(GreenNews)</a>',
    pointToLayer: function (geojson, latlng) {
    const GeoJSON = L.marker(latlng,{
        highlight: "temporary",
        icon: iconForest
    });
    return GeoJSON
    }
});

Forest.bindPopup(function (layer) {
    document.getElementById("title").innerHTML = layer.feature.properties.TITLE;
    document.getElementById("details").innerHTML = layer.feature.properties.DETAIL;
    document.getElementById("image").src = layer.feature.properties.IMAGE;
    document.getElementById("link").href = layer.feature.properties.LINK;

    const date = new Date(layer.feature.properties.DATE);
    document.getElementById("datePost").innerHTML = date.toLocaleDateString();
    
    sidebar.open('home');
    return L.Util.template('<p>{TITLE}</p>', layer.feature.properties);
});

// Urban
const iconUrban = L.icon({
    iconUrl: 'images/icons/Urban.png',
    iconSize: [25,25]
});

const Urban = L.esri.featureLayer({
    url: 'https://services5.arcgis.com/60ZyqBuk6DAAkHuh/ArcGIS/rest/services/Urban/FeatureServer/0',
    attribution: '&copy; 2020 สำนักข่าวสิ่งแวดล้อม โดยชมรมนักข่าวสิ่งแวดล้อม | สมาคมนักข่าวนักหนังสือพิมพ์แห่งประเทศไทย <a href="https://greennews.agency/">(GreenNews)</a>',
    pointToLayer: function (geojson, latlng) {
    const GeoJSON = L.marker(latlng,{
        highlight: "temporary",
        icon: iconUrban
    });
    return GeoJSON
    }
});

Urban.bindPopup(function (layer) {
    document.getElementById("title").innerHTML = layer.feature.properties.TITLE;
    document.getElementById("details").innerHTML = layer.feature.properties.DETAIL;
    document.getElementById("image").src = layer.feature.properties.IMAGE;
    document.getElementById("link").href = layer.feature.properties.LINK;

    const date = new Date(layer.feature.properties.DATE);
    document.getElementById("datePost").innerHTML = date.toLocaleDateString();
    
    sidebar.open('home');
    return L.Util.template('<p>{TITLE}</p>', layer.feature.properties);
});  

// Right
const iconRight = L.icon({
    iconUrl: 'images/icons/Right.png',
    iconSize: [25,25]
});

const Right = L.esri.featureLayer({
    url: 'https://services5.arcgis.com/60ZyqBuk6DAAkHuh/ArcGIS/rest/services/Right/FeatureServer/0',
    attribution: '&copy; 2020 สำนักข่าวสิ่งแวดล้อม โดยชมรมนักข่าวสิ่งแวดล้อม | สมาคมนักข่าวนักหนังสือพิมพ์แห่งประเทศไทย <a href="https://greennews.agency/">(GreenNews)</a>',
    pointToLayer: function (geojson, latlng) {
    const GeoJSON = L.marker(latlng,{
        highlight: "temporary",
        icon: iconRight
    });
    return GeoJSON
    }
});

Right.bindPopup(function (layer) {
    document.getElementById("title").innerHTML = layer.feature.properties.TITLE;
    document.getElementById("details").innerHTML = layer.feature.properties.DETAIL;
    document.getElementById("image").src = layer.feature.properties.IMAGE;
    document.getElementById("link").href = layer.feature.properties.LINK;

    const date = new Date(layer.feature.properties.DATE);
    document.getElementById("datePost").innerHTML = date.toLocaleDateString();
    
    sidebar.open('home');
    return L.Util.template('<p>{TITLE}</p>', layer.feature.properties);
});  

// Energy
const iconEnergy = L.icon({
    iconUrl: 'images/icons/Energy.png',
    iconSize: [25,25]
});

const Energy = L.esri.featureLayer({
    url: 'https://services5.arcgis.com/60ZyqBuk6DAAkHuh/ArcGIS/rest/services/Energy/FeatureServer/0',
    attribution: '&copy; 2020 สำนักข่าวสิ่งแวดล้อม โดยชมรมนักข่าวสิ่งแวดล้อม | สมาคมนักข่าวนักหนังสือพิมพ์แห่งประเทศไทย <a href="https://greennews.agency/">(GreenNews)</a>',
    pointToLayer: function (geojson, latlng) {
    const GeoJSON = L.marker(latlng,{
        highlight: "temporary",
        icon: iconEnergy
    });
    return GeoJSON
    }
});

Energy.bindPopup(function (layer) {
    document.getElementById("title").innerHTML = layer.feature.properties.TITLE;
    document.getElementById("details").innerHTML = layer.feature.properties.DETAIL;
    document.getElementById("image").src = layer.feature.properties.IMAGE;
    document.getElementById("link").href = layer.feature.properties.LINK;

    const date = new Date(layer.feature.properties.DATE);
    document.getElementById("datePost").innerHTML = date.toLocaleDateString();
    
    sidebar.open('home');
    return L.Util.template('<p>{TITLE}</p>', layer.feature.properties);
});  

// Food and Agriculture
const iconFood = L.icon({
    iconUrl: 'images/icons/Food_and_Agriculture.png',
    iconSize: [25,25]
});

const Food = L.esri.featureLayer({
    url: 'https://services5.arcgis.com/60ZyqBuk6DAAkHuh/ArcGIS/rest/services/Food_and_Agriculture/FeatureServer/0',
    attribution: '&copy; 2020 สำนักข่าวสิ่งแวดล้อม โดยชมรมนักข่าวสิ่งแวดล้อม | สมาคมนักข่าวนักหนังสือพิมพ์แห่งประเทศไทย <a href="https://greennews.agency/">(GreenNews)</a>',
    pointToLayer: function (geojson, latlng) {
    const GeoJSON = L.marker(latlng,{
        highlight: "temporary",
        icon: iconFood
    });
    return GeoJSON
    }
});

Food.bindPopup(function (layer) {
    document.getElementById("title").innerHTML = layer.feature.properties.TITLE;
    document.getElementById("details").innerHTML = layer.feature.properties.DETAIL;
    document.getElementById("image").src = layer.feature.properties.IMAGE;
    document.getElementById("link").href = layer.feature.properties.LINK;

    const date = new Date(layer.feature.properties.DATE);
    document.getElementById("datePost").innerHTML = date.toLocaleDateString();
    
    sidebar.open('home');
    return L.Util.template('<p>{TITLE}</p>', layer.feature.properties);
});  

// Industrial
const iconIndustrial = L.icon({
    iconUrl: 'images/icons/Industrial.png',
    iconSize: [25,25]
});

const Industrial = L.esri.featureLayer({
    url: 'https://services5.arcgis.com/60ZyqBuk6DAAkHuh/ArcGIS/rest/services/Industrial/FeatureServer/0',
    attribution: '&copy; 2020 สำนักข่าวสิ่งแวดล้อม โดยชมรมนักข่าวสิ่งแวดล้อม | สมาคมนักข่าวนักหนังสือพิมพ์แห่งประเทศไทย <a href="https://greennews.agency/">(GreenNews)</a>',
    pointToLayer: function (geojson, latlng) {
    const GeoJSON = L.marker(latlng,{
        highlight: "temporary",
        icon: iconIndustrial
    });
    return GeoJSON
    }
});

Industrial.bindPopup(function (layer) {
    document.getElementById("title").innerHTML = layer.feature.properties.TITLE;
    document.getElementById("details").innerHTML = layer.feature.properties.DETAIL;
    document.getElementById("image").src = layer.feature.properties.IMAGE;
    document.getElementById("link").href = layer.feature.properties.LINK;

    const date = new Date(layer.feature.properties.DATE);
    document.getElementById("datePost").innerHTML = date.toLocaleDateString();
    
    sidebar.open('home');
    return L.Util.template('<p>{TITLE}</p>', layer.feature.properties);
});  

// Pollution and waste
const iconPollution = L.icon({
    iconUrl: 'images/icons/Pollution_and_waste.png',
    iconSize: [25,25]
});

const Pollution = L.esri.featureLayer({
    url: 'https://services5.arcgis.com/60ZyqBuk6DAAkHuh/ArcGIS/rest/services/Pollution_and_waste/FeatureServer/0',
    attribution: '&copy; 2022 สำนักข่าวสิ่งแวดล้อม โดยชมรมนักข่าวสิ่งแวดล้อม | สมาคมนักข่าวนักหนังสือพิมพ์แห่งประเทศไทย <a href="https://greennews.agency/">(GreenNews)</a>',
    pointToLayer: function (geojson, latlng) {
    const GeoJSON = L.marker(latlng,{
        highlight: "temporary",
        icon: iconPollution
    });
    return GeoJSON
    }
});

Pollution.bindPopup(function (layer) {
    document.getElementById("title").innerHTML = layer.feature.properties.TITLE;
    document.getElementById("details").innerHTML = layer.feature.properties.DETAIL;
    document.getElementById("image").src = layer.feature.properties.IMAGE;
    document.getElementById("link").href = layer.feature.properties.LINK;

    const date = new Date(layer.feature.properties.DATE);
    document.getElementById("datePost").innerHTML = date.toLocaleDateString();
    
    sidebar.open('home');
    return L.Util.template('<p>{TITLE}</p>', layer.feature.properties);
});  

// Mining
const iconMining = L.icon({
    iconUrl: 'images/icons/Mining.png',
    iconSize: [25,25]
});

const Mining = L.esri.featureLayer({
    url: 'https://services5.arcgis.com/60ZyqBuk6DAAkHuh/ArcGIS/rest/services/Mining/FeatureServer/0',
    attribution: '&copy; 2020 สำนักข่าวสิ่งแวดล้อม โดยชมรมนักข่าวสิ่งแวดล้อม | สมาคมนักข่าวนักหนังสือพิมพ์แห่งประเทศไทย <a href="https://greennews.agency/">(GreenNews)</a>',
    pointToLayer: function (geojson, latlng) {
    const GeoJSON = L.marker(latlng,{
        highlight: "temporary",
        icon: iconMining
    });
    return GeoJSON
    }
});

Mining.bindPopup(function (layer) {
    document.getElementById("title").innerHTML = layer.feature.properties.TITLE;
    document.getElementById("details").innerHTML = layer.feature.properties.DETAIL;
    document.getElementById("image").src = layer.feature.properties.IMAGE;
    document.getElementById("link").href = layer.feature.properties.LINK;

    const date = new Date(layer.feature.properties.DATE);
    document.getElementById("datePost").innerHTML = date.toLocaleDateString();
    
    sidebar.open('home');
    return L.Util.template('<p>{TITLE}</p>', layer.feature.properties);
});               

const overlays = {
    'ภัยพิบัติและการเปลี่ยนแปลงสภาพภูมิอากาศ': Disaster,
    'ระบบนิเวศ': Ecology,
    'น้ำและมหาสมุทร': Ocean,
    'ป่าและสัตว์ป่า': Forest,
    'เมือง': Urban,
    'สิทธิ': Right,
    'พลังงาน': Energy,
    'อาหารและเกษตรกรรม': Food,
    'อุตสาหกรรม': Industrial,
    'มลพิษและขยะ': Pollution,
    'เหมือง': Mining
};

// standard leaflet map setup
const map = L.map('map',{
    center: [13.769469, 100.534175],
    zoom: 6,
    layers: [
        Disaster,
        Ecology,
        Ocean,
        Forest,
        Urban,
        Right,
        Energy,
        Food,
        Industrial,
        Pollution,
        Mining,
        Carto
        ],
    zoomControl: false
});

// close sidebar and zoom to defult extent
map.on('click', function () {
    sidebar.close();
    //map.setView([13.769469, 100.534175], 7);
})

// add layer control
//L.control.layers(baseLayers, overlays, { collapsed: false }).addTo(map);
L.control.layers(baseLayers, overlays).addTo(map);

// add home and zoom
const zoomHome = L.Control.zoomHome();
zoomHome.addTo(map);

// add logo
L.control.logo({
    position: 'bottomleft',
    height: '50px',
    width: '100px',
    target: '_blank',
    link: 'https://greennews.agency/',
    image: 'images/greennews-logo100x50.png'
}).addTo(map); 

// create the sidebar instance and add it to the map
const sidebar = L.control.sidebar({ container: 'sidebar', position: "right"})
    .addTo(map);
    //.open('home');