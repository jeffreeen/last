;(function() {
  let myMap;

const init = () => {
  myMap = new ymaps.Map("map", {
    center: [55.749789, 37.605706],
    zoom: 14,
    controls: []
  });

  const coords = [
    [55.758805, 37.582543],
    [55.743558, 37.580903],
    [55.749537, 37.607942],
    [55.757516, 37.617693]
  ];

  const myCollection = new ymaps.GeoObjectCollection({}, {
    draggable: false, 
    iconLayout: 'default#image',
    iconImageHref: "./images/marker.png",
    iconImageSize: [58, 73],
    iconImageOffset: [-3, -42]
  });

  coords.forEach(coord => {
    myCollection.add(new ymaps.Placemark(coord));
  });

  myMap.geoObjects.add(myCollection);

  myMap.behaviors.disable("scrollZoom");
}

ymaps.ready(init);
})()

