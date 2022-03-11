// BASEMAP LAYERS
var gray = L.layerGroup();
    L.esri.basemapLayer("Gray").addTo(gray);
    L.esri.basemapLayer("GrayLabels").addTo(gray);

var imagery = L.layerGroup();
    L.esri.basemapLayer('Imagery',{
        detectRetina: true
    }).addTo(imagery);
    L.esri.basemapLayer('ImageryLabels',{
        detectRetina: true
    }).addTo(imagery);

var street = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZXNyaTUwOTUiLCJhIjoiY2tmdDVlMTFoMHN6MTJzbXp4MXRvcTJkdSJ9.zcBuvjIov_A9NFWrJrPN_w'
});

var baseLayers = {
    พื้นฐาน: gray,
    ภาพดาวเทียม: imagery,
    เส้นถนน: street
};

// Disaster
var iconDisaster = L.icon({
    iconUrl: 'images/icons/Disaster_and_climate_change.png',
    iconSize: [25,25]
});

var Disaster = L.esri.featureLayer({
    url: 'https://services5.arcgis.com/60ZyqBuk6DAAkHuh/ArcGIS/rest/services/Disaster_and_climate_change/FeatureServer/0',
    where: "CATEGORY = 'DISASTER'",
    attribution: '&copy; 2020 สำนักข่าวสิ่งแวดล้อม โดยชมรมนักข่าวสิ่งแวดล้อม | สมาคมนักข่าวนักหนังสือพิมพ์แห่งประเทศไทย <a href="https://greennews.agency/">(GreenNews)</a>',
    pointToLayer: function (geojson, latlng) {
    console.log(geojson.properties.CATEGORY);
    var GeoJSON = L.marker(latlng,{
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

    var date = new Date(layer.feature.properties.DATE);
    document.getElementById("datePost").innerHTML = date.toLocaleDateString();
    
    sidebar.open('home');
    return L.Util.template('<p>{TITLE}</p>', layer.feature.properties);
});

// Ecology
var iconEcology = L.icon({
    iconUrl: 'images/icons/Ecology.png',
    iconSize: [25,25]
});

var Ecology = L.esri.featureLayer({
    url: 'https://services5.arcgis.com/60ZyqBuk6DAAkHuh/ArcGIS/rest/services/Ecology/FeatureServer/0',
    where: "CATEGORY = 'Ecology'",
    attribution: '&copy; 2020 สำนักข่าวสิ่งแวดล้อม โดยชมรมนักข่าวสิ่งแวดล้อม | สมาคมนักข่าวนักหนังสือพิมพ์แห่งประเทศไทย <a href="https://greennews.agency/">(GreenNews)</a>',
    pointToLayer: function (geojson, latlng) {
    var GeoJSON = L.marker(latlng,{
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

    var date = new Date(layer.feature.properties.DATE);
    document.getElementById("datePost").innerHTML = date.toLocaleDateString();
    
    sidebar.open('home');
    return L.Util.template('<p>{TITLE}</p>', layer.feature.properties);
});

// Water and Ocean
var iconOcean = L.icon({
    iconUrl: 'images/icons/Water_and_Ocean.png',
    iconSize: [25,25]
});

var Ocean = L.esri.featureLayer({
    url: 'https://services5.arcgis.com/60ZyqBuk6DAAkHuh/ArcGIS/rest/services/Water_and_Ocean/FeatureServer/0',
    attribution: '&copy; 2020 สำนักข่าวสิ่งแวดล้อม โดยชมรมนักข่าวสิ่งแวดล้อม | สมาคมนักข่าวนักหนังสือพิมพ์แห่งประเทศไทย <a href="https://greennews.agency/">(GreenNews)</a>',
    where: "CATEGORY = 'WATER AND OCEAN'",
    pointToLayer: function (geojson, latlng) {
    var GeoJSON = L.marker(latlng,{
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

    var date = new Date(layer.feature.properties.DATE);
    document.getElementById("datePost").innerHTML = date.toLocaleDateString();
    
    sidebar.open('home');
    return L.Util.template('<p>{TITLE}</p>', layer.feature.properties);
});

// Forest and Wildlife
var iconForest = L.icon({
    iconUrl: 'images/icons/Forest_and_Wildlife.png',
    iconSize: [25,25]
});

var Forest = L.esri.featureLayer({
    url: 'https://services5.arcgis.com/60ZyqBuk6DAAkHuh/ArcGIS/rest/services/Forest_and_Wildlife/FeatureServer/0',
    where: "CATEGORY = 'FOREST AND WILDIFE'",
    attribution: '&copy; 2020 สำนักข่าวสิ่งแวดล้อม โดยชมรมนักข่าวสิ่งแวดล้อม | สมาคมนักข่าวนักหนังสือพิมพ์แห่งประเทศไทย <a href="https://greennews.agency/">(GreenNews)</a>',
    pointToLayer: function (geojson, latlng) {
    var GeoJSON = L.marker(latlng,{
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

    var date = new Date(layer.feature.properties.DATE);
    document.getElementById("datePost").innerHTML = date.toLocaleDateString();
    
    sidebar.open('home');
    return L.Util.template('<p>{TITLE}</p>', layer.feature.properties);
});

// Urban
var iconUrban = L.icon({
    iconUrl: 'images/icons/Urban.png',
    iconSize: [25,25]
});

var Urban = L.esri.featureLayer({
    url: 'https://services5.arcgis.com/60ZyqBuk6DAAkHuh/ArcGIS/rest/services/Urban/FeatureServer/0',
    where: "CATEGORY = 'Urban'",
    attribution: '&copy; 2020 สำนักข่าวสิ่งแวดล้อม โดยชมรมนักข่าวสิ่งแวดล้อม | สมาคมนักข่าวนักหนังสือพิมพ์แห่งประเทศไทย <a href="https://greennews.agency/">(GreenNews)</a>',
    pointToLayer: function (geojson, latlng) {
    var GeoJSON = L.marker(latlng,{
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

    var date = new Date(layer.feature.properties.DATE);
    document.getElementById("datePost").innerHTML = date.toLocaleDateString();
    
    sidebar.open('home');
    return L.Util.template('<p>{TITLE}</p>', layer.feature.properties);
});  

// Right
var iconRight = L.icon({
    iconUrl: 'images/icons/Right.png',
    iconSize: [25,25]
});

var Right = L.esri.featureLayer({
    url: 'https://services5.arcgis.com/60ZyqBuk6DAAkHuh/ArcGIS/rest/services/Right/FeatureServer/0',
    where: "CATEGORY = 'Right'",
    attribution: '&copy; 2020 สำนักข่าวสิ่งแวดล้อม โดยชมรมนักข่าวสิ่งแวดล้อม | สมาคมนักข่าวนักหนังสือพิมพ์แห่งประเทศไทย <a href="https://greennews.agency/">(GreenNews)</a>',
    pointToLayer: function (geojson, latlng) {
    var GeoJSON = L.marker(latlng,{
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

    var date = new Date(layer.feature.properties.DATE);
    document.getElementById("datePost").innerHTML = date.toLocaleDateString();
    
    sidebar.open('home');
    return L.Util.template('<p>{TITLE}</p>', layer.feature.properties);
});  

// Energy
var iconEnergy = L.icon({
    iconUrl: 'images/icons/Energy.png',
    iconSize: [25,25]
});

var Energy = L.esri.featureLayer({
    url: 'https://services5.arcgis.com/60ZyqBuk6DAAkHuh/ArcGIS/rest/services/Energy/FeatureServer/0',
    where: "CATEGORY = 'Energy'",
    attribution: '&copy; 2020 สำนักข่าวสิ่งแวดล้อม โดยชมรมนักข่าวสิ่งแวดล้อม | สมาคมนักข่าวนักหนังสือพิมพ์แห่งประเทศไทย <a href="https://greennews.agency/">(GreenNews)</a>',
    pointToLayer: function (geojson, latlng) {
    var GeoJSON = L.marker(latlng,{
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

    var date = new Date(layer.feature.properties.DATE);
    document.getElementById("datePost").innerHTML = date.toLocaleDateString();
    
    sidebar.open('home');
    return L.Util.template('<p>{TITLE}</p>', layer.feature.properties);
});  

// Food and Agriculture
var iconFood = L.icon({
    iconUrl: 'images/icons/Food_and_Agriculture.png',
    iconSize: [25,25]
});

var Food = L.esri.featureLayer({
    url: 'https://services5.arcgis.com/60ZyqBuk6DAAkHuh/ArcGIS/rest/services/Food_and_Agriculture/FeatureServer/0',
    where: "CATEGORY = 'Food and Agriculture'",
    attribution: '&copy; 2020 สำนักข่าวสิ่งแวดล้อม โดยชมรมนักข่าวสิ่งแวดล้อม | สมาคมนักข่าวนักหนังสือพิมพ์แห่งประเทศไทย <a href="https://greennews.agency/">(GreenNews)</a>',
    pointToLayer: function (geojson, latlng) {
    var GeoJSON = L.marker(latlng,{
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

    var date = new Date(layer.feature.properties.DATE);
    document.getElementById("datePost").innerHTML = date.toLocaleDateString();
    
    sidebar.open('home');
    return L.Util.template('<p>{TITLE}</p>', layer.feature.properties);
});  

// Industrial
var iconIndustrial = L.icon({
    iconUrl: 'images/icons/Industrial.png',
    iconSize: [25,25]
});

var Industrial = L.esri.featureLayer({
    url: 'https://services5.arcgis.com/60ZyqBuk6DAAkHuh/ArcGIS/rest/services/Industrial/FeatureServer/0',
    where: "CATEGORY = 'Industrial'",
    attribution: '&copy; 2020 สำนักข่าวสิ่งแวดล้อม โดยชมรมนักข่าวสิ่งแวดล้อม | สมาคมนักข่าวนักหนังสือพิมพ์แห่งประเทศไทย <a href="https://greennews.agency/">(GreenNews)</a>',
    pointToLayer: function (geojson, latlng) {
    var GeoJSON = L.marker(latlng,{
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

    var date = new Date(layer.feature.properties.DATE);
    document.getElementById("datePost").innerHTML = date.toLocaleDateString();
    
    sidebar.open('home');
    return L.Util.template('<p>{TITLE}</p>', layer.feature.properties);
});  

// Pollution and waste
var iconPollution = L.icon({
    iconUrl: 'images/icons/Pollution_and_waste.png',
    iconSize: [25,25]
});

var Pollution = L.esri.featureLayer({
    url: 'https://services5.arcgis.com/60ZyqBuk6DAAkHuh/ArcGIS/rest/services/Pollution_and_waste/FeatureServer/0',
    where: "CATEGORY = 'Pollution and waste'",
    attribution: '&copy; 2020 สำนักข่าวสิ่งแวดล้อม โดยชมรมนักข่าวสิ่งแวดล้อม | สมาคมนักข่าวนักหนังสือพิมพ์แห่งประเทศไทย <a href="https://greennews.agency/">(GreenNews)</a>',
    pointToLayer: function (geojson, latlng) {
    var GeoJSON = L.marker(latlng,{
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

    var date = new Date(layer.feature.properties.DATE);
    document.getElementById("datePost").innerHTML = date.toLocaleDateString();
    
    sidebar.open('home');
    return L.Util.template('<p>{TITLE}</p>', layer.feature.properties);
});  

// Mining
var iconMining = L.icon({
    iconUrl: 'images/icons/Mining.png',
    iconSize: [25,25]
});

var Mining = L.esri.featureLayer({
    url: 'https://services5.arcgis.com/60ZyqBuk6DAAkHuh/ArcGIS/rest/services/Mining/FeatureServer/0',
    where: "CATEGORY = 'Mining'",
    attribution: '&copy; 2020 สำนักข่าวสิ่งแวดล้อม โดยชมรมนักข่าวสิ่งแวดล้อม | สมาคมนักข่าวนักหนังสือพิมพ์แห่งประเทศไทย <a href="https://greennews.agency/">(GreenNews)</a>',
    pointToLayer: function (geojson, latlng) {
    var GeoJSON = L.marker(latlng,{
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

    var date = new Date(layer.feature.properties.DATE);
    document.getElementById("datePost").innerHTML = date.toLocaleDateString();
    
    sidebar.open('home');
    return L.Util.template('<p>{TITLE}</p>', layer.feature.properties);
});               

var overlays = {
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
var map = L.map('map',{
    center: [13.769469, 100.534175],
    zoom: 7,
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
        gray
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
var zoomHome = L.Control.zoomHome();
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
var sidebar = L.control.sidebar({ container: 'sidebar', position: "right"})
    .addTo(map);
    //.open('home');

// be notified when a panel is opened
sidebar.on('content', function (ev) {
    switch (ev.id) {
        case 'autopan':
        sidebar.options.autopan = true;
        break;
        default:
        sidebar.options.autopan = false;
    }
});

var userid = 0
function addUser() {
    sidebar.addPanel({
        id:   'user' + userid++,
        tab:  '<i class="fa fa-user"></i>',
        title: 'User Profile ' + userid,
        pane: '<p>user ipsum dolor sit amet</p>',
    });
}