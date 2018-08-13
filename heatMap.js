function getHeatMap(mapData, map) {
    Microsoft.Maps.loadModule('Microsoft.Maps.HeatMap', function () {
        var locations = new Array();
        for (let i = 0; i < mapData.length; i++) {
            if (mapData[i].HeatMap > 0)
                locations.push(new Microsoft.Maps.Location(mapData[i].GpsLat, mapData[i].GpsLng));
        }

        var heatMap = new Microsoft.Maps.HeatMapLayer(locations, {
            intensity: 1,
            radius: 7,
            unit: 'meters',
            colorGradient: {
                '0.25': 'Blue',
                '0.5': 'Green',
                '0.75': 'Yellow',
                '1': 'Red'
            }
        });
        map.layers.insert(heatMap);
    });
}