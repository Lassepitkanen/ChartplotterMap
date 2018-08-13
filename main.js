function loadMap() {
    var mapData = loadData()

    map = new Microsoft.Maps.Map(document.getElementById('myMap'), { 
        center: new Microsoft.Maps.Location(mapData[0].GpsLat, mapData[0].GpsLng),
        mapTypeId: Microsoft.Maps.MapTypeId.aerial,
        zoom: 17
    });

    //Call layers 
    //getPolyline(mapData, map);
    //getHeatMap(mapData, map);
    getPolygon(mapData, map); 
}

function loadData(){
    return data;
}