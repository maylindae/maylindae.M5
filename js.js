// Layer Peta
var osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "©️ OpenStreetMap",
});

// Basemap
var map = L.map("mapid", {
  center: [-7.733495772573685, 110.5106288531787],
  zoom: 13,
  layers: [osm],
});
function onMapClick(e) {
  L.popup()
    .setLatLng(e.latlng)
    .setContent("Koordinatnya adalah " + e.latlng.toString())
    .openOn(map);
}

map.on("click", onMapClick);

var marker = L.marker([-7.753290971479749, 110.49524394660787])
  .bindPopup(
    "<p><b>Candi Prambanan</b><br>Taman Wisata Candi Prambanan, Jl. Candi Sewu No.9 LM, Tlogo Kidul, Tlogo, Kec. Prambanan, Kabupaten Klaten, Jawa Tengah 57454</br></p> <img src='ikon/candipramb.jpeg' height='120px' width='150px'>"
  )
  .addTo(map);

// Layer Group Marking
var perum = L.icon({
  iconUrl: "./ikon/ic2.png",
  iconSize: [50, 50],
});

//PV 3
L.marker([-7.742466778488754, 110.49865766664523], { icon: perum }).bindPopup("<b>Prambanan Village 3</b><br>Area Sawah, Bugisan, Kec. Prambanan, Kabupaten Klaten, Jawa Tengah 57454").addTo(map);

//PV 4
L.marker([-7.734057551543627, 110.49263878962134], { icon: perum }).bindPopup("<b>Prambanan Village 4</b><br>Jl. Raya Kokosan, Area Sawah, Kokosan, Kec. Prambanan, Kabupaten Klaten, Jawa Tengah 57454").addTo(map);

//NJP
L.marker([-7.7311977383673245, 110.49449487824931], { icon: perum }).bindPopup("<b>Ndalem Joglo Prambanan</b><br>Ndalem Joglo, Area Sawah, Kokosan, Kec. Prambanan, Kabupaten Klaten, Jawa Tengah 57454").addTo(map);

//BJP
L.marker([-7.749009662357028, 110.50128971336581], { icon: perum }).bindPopup("<b>Bale Joglo Pramabanan</b><br>Jl. Raya Manisrenggo - Prambanan No.0,5, Tlogo Lot, Tlogo, Kec. Prambanan, Kabupaten Klaten, Jawa Tengah 57454").addTo(map);

//BPP
L.marker([-7.75642353430225, 110.51357743849785], { icon: perum }).bindPopup("<b>Bale Paragon Prambanan</b><br>Area Sawah, Kotesan, Kec. Prambanan, Kabupaten Klaten, Jawa Tengah 57454").addTo(map);

//OP
L.marker([-7.756420291630357, 110.51328143955392], { icon: perum }).bindPopup("<b>Oemah Prambanan</b><br>Area Sawah, Kotesan, Kec. Prambanan, Kabupaten Klaten, Jawa Tengah 57454").addTo(map);

//VPT
L.marker([-7.745912179043036, 110.5039400951812], { icon: perum }).bindPopup("<b>Villa Puri Tlogo</b><br>Tlogo lor, Tlogo, Kec. Prambanan, Kabupaten Klaten, Jawa Tengah 57454").addTo(map);

//TP1
L.marker([-7.7088369109926465, 110.50037645829995], { icon: perum }).bindPopup("<b>The Palm 1</b><br>Area Sawah, Solodiran, Kec. Manisrenggo, Kabupaten Klaten, Jawa Tengah 57485").addTo(map);

//PH
L.marker([-7.721440810420342, 110.51953815939753], { icon: perum }).bindPopup("<b>Prambanan Heritage 1</b><br>, Joho, Kec. Prambanan, Kabupaten Klaten, Jawa Tengah 57454").addTo(map);

//PH2
L.marker([-7.720111863655831, 110.51770352844156], { icon: perum }).bindPopup("<b>Prambanan Heritage 2</b><br>Joho, Kec. Prambanan, Kabupaten Klaten, Jawa Tengah 57454").addTo(map);

//GPA2
L.marker([-7.722649269375063, 110.5195769115136], { icon: perum }).bindPopup("<b>Griya Pratama Asri 2</b><br>Ngladon, Joho, Kec. Prambanan, Kabupaten Klaten, Jawa Tengah 57454").addTo(map);
