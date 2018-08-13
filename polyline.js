function getPolyline(mapData, map) {
    var locations = new Array();
    for (let i = 0; i < mapData.length; i++) {
        locations.push(new Microsoft.Maps.Location(mapData[i].GpsLat, mapData[i].GpsLng));
    }
    var polyline = new Microsoft.Maps.Polyline(locations, { strokeColor: 'rgb(255, 0, 0)', strokeThickness: 2 });
    
    map.entities.push(polyline);  
}
