function getHeatMap(mapData, map) {
    Microsoft.Maps.loadModule('Microsoft.Maps.HeatMap', () => {
        const locations = new Array();
        const len = mapData.length;
        for (let i = 0; i < len; ++i) {
            if (mapData[i].HeatMap > 0)
                locations.push(new Microsoft.Maps.Location(mapData[i].GpsLat, mapData[i].GpsLng));
        }

        const heatMap = new Microsoft.Maps.HeatMapLayer(locations, {
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