function getPolyline(mapData, map) {
    const locations = new Array();
    const len = mapData.length;
    for (let i = 0; i < len; ++i) {
        locations.push(new Microsoft.Maps.Location(mapData[i].GpsLat, mapData[i].GpsLng));
    }
    const polyline = new Microsoft.Maps.Polyline(locations, { strokeColor: 'rgb(255, 0, 0)', strokeThickness: 2 });
    
    map.entities.push(polyline);  
}
