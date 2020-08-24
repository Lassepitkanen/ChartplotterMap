function getPolygon(mapData, map) {
    const len = mapData.length;
    for (let i = 0; i < len; ++i) {
        const rect = [];
        //polygon around location
        rect.push(new Microsoft.Maps.Location(mapData[i].GpsLat - 0.000025, mapData[i].GpsLng - 0.00005));
        rect.push(new Microsoft.Maps.Location(mapData[i].GpsLat - 0.000025, mapData[i].GpsLng + 0.00005));
        rect.push(new Microsoft.Maps.Location(mapData[i].GpsLat + 0.000025, mapData[i].GpsLng + 0.00005));
        rect.push(new Microsoft.Maps.Location(mapData[i].GpsLat + 0.000025, mapData[i].GpsLng - 0.00005));
    
        const color = assignColor(mapData[i].WaterDepth);
        const polygon = new Microsoft.Maps.Polygon(rect, {
            fillColor: color,
            strokeThickness: 0
        });
        //Add the polygon to map
        map.entities.push(polygon);  
    }
}

function assignColor(waterDepth) {
    let color;
    if (waterDepth >= 5) {
        color = 'rgba(63.75, 0, 0, 0.5)';
    }
    else if (waterDepth >= 4.5) {
        color = 'rgba(127.5, 0, 0, 0.5)';
    }
    else if (waterDepth >= 4.0) {
        color = 'rgba(191.252, 0, 0, 0.5)';
    }
    else if (waterDepth >= 3.5) {
        color = 'rgba(255, 0, 0, 0.5)';
    }
    else if (waterDepth >= 3.0) {
        color = 'rgba(255, 63.75, 0, 0.5)';
    }
    else if (waterDepth >= 2.5) {
        color = 'rgba(255, 127.5, 0, 0.5)';
    }
    else if (waterDepth >= 2.0) {
        color = 'rgba(255, 191.25, 0, 0.5)';
    }
    else if (waterDepth >= 1.5) {
        color = 'rgba(255, 255, 0, 0.5)';
    }
    else if (waterDepth >= 1.0) {
        color = 'rgba(191.25, 255, 0, 0.5)';
    }
    else {
        color = 'rgba(127.5, 255, 0, 0.5)';
    }
    return color;
}
