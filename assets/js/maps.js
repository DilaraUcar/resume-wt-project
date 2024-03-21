function initMap() {

    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


    const locations = [
        { position: new google.maps.LatLng(40.785091, -73.968285) },
        { position: new google.maps.LatLng(41.084045, -73.874245) },
        { position: new google.maps.LatLng(40.754932, -73.984016) }
    ]

    const myLatLng = new google.maps.LatLng(46.619261, -33.134766);
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: myLatLng,
    });

    const markers = [];

    for (let i = 0; i < locations.length; i++) {
        const marker = new google.maps.Marker({
            position: locations[i].position,
            map: map,
            label: {
                text: labels[i % labels.length],
                color: "white"
            },
            title: "Hello World!",
        });
        markers.push(marker);
    }

    const markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
        averageCenter: true
    });

    google.maps.event.addListener(markerCluster, 'clusterclick', function (cluster) {
        var bounds = cluster.getBounds();
        map.fitBounds(bounds);
    });

    map.addListener('click', function () {
        map.setZoom(map.getZoom() + 0.5);
    });
}

window.initMap = initMap;

