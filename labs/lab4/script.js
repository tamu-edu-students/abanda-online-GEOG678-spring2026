function Run() {
    
    var data = theJSON.data;

    var topLeftPoint = findTopLeft(data);
    var topRightPoint = findTopRight(data);
    var bottomLeftPoint = findBottomLeft(data);
    var bottomRightPoint = findBottomRight(data);

    var boundingBox = {
        topLeft: topLeftPoint,
        topRight: topRightPoint,
        bottomLeft: bottomLeftPoint,
        bottomRight: bottomRightPoint
    };

    console.log("Bounding box computed for abpy1012@gmail.com:");
    console.log(boundingBox);
}

function getLat(point) {
    if (point.lat !== undefined) return point.lat;
    if (point.latitude !== undefined) return point.latitude;
    if (point.y !== undefined) return point.y;
    return null;
}

function getLon(point) {
    if (point.lon !== undefined) return point.lon;
    if (point.lng !== undefined) return point.lng;
    if (point.longitude !== undefined) return point.longitude;
    if (point.x !== undefined) return point.x;
    return null;
}

function findTopLeft(data) {
    var bestPoint = null;

    data.forEach(function(point) {
        var lat = getLat(point);
        var lon = getLon(point);

        if (bestPoint === null) {
            bestPoint = point;
        } else {
            var bestLat = getLat(bestPoint);
            var bestLon = getLon(bestPoint);

            if (lat > bestLat || (lat === bestLat && lon < bestLon)) {
                bestPoint = point;
            }
        }
    });

    return bestPoint;
}

function findTopRight(data) {
    var bestPoint = null;

    data.forEach(function(point) {
        var lat = getLat(point);
        var lon = getLon(point);

        if (bestPoint === null) {
            bestPoint = point;
        } else {
            var bestLat = getLat(bestPoint);
            var bestLon = getLon(bestPoint);

            if (lat > bestLat || (lat === bestLat && lon > bestLon)) {
                bestPoint = point;
            }
        }
    });

    return bestPoint;
}

function findBottomLeft(data) {
    var bestPoint = null;

    data.forEach(function(point) {
        var lat = getLat(point);
        var lon = getLon(point);

        if (bestPoint === null) {
            bestPoint = point;
        } else {
            var bestLat = getLat(bestPoint);
            var bestLon = getLon(bestPoint);

            if (lat < bestLat || (lat === bestLat && lon < bestLon)) {
                bestPoint = point;
            }
        }
    });

    return bestPoint;
}

function findBottomRight(data) {
    var bestPoint = null;

    data.forEach(function(point) {
        var lat = getLat(point);
        var lon = getLon(point);

        if (bestPoint === null) {
            bestPoint = point;
        } else {
            var bestLat = getLat(bestPoint);
            var bestLon = getLon(bestPoint);

            if (lat < bestLat || (lat === bestLat && lon > bestLon)) {
                bestPoint = point;
            }
        }
    });

    return bestPoint;
}