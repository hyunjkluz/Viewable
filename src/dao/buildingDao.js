import { query } from "../utils/mysql";

async function BuildingQuery(latitude, longitude) {
    const selectQuery = `SELECT name, address, latitude, longitude FROM viewable.building WHERE latitude = ? AND longitude = ? `;
    return await query(selectQuery,[latitude, longitude]);
}

async function oneBuildingQuery(buildingIdx) {
    const selectQuery = `SELECT b.name, b.address, b.latitude, b.longitude,
                        (SELECT count(bsf.facilityIdx) FROM viewable.buildingStoreFacility bsf WHERE bsf.facilityIdx = 1) as accessRoad,
                        (SELECT count(bsf.facilityIdx) FROM viewable.buildingStoreFacility bsf WHERE bsf.facilityIdx = 2) as lift,
                        (SELECT count(bsf.facilityIdx) FROM viewable.buildingStoreFacility bsf WHERE bsf.facilityIdx = 3) as bathroom,
                        (SELECT count(bsf.facilityIdx) FROM viewable.buildingStoreFacility bsf WHERE bsf.facilityIdx = 4) as parking
                        FROM viewable.building b
                        JOIN viewable.buildingStoreFacility as bsf ON b.buildingIdx = bsf.buildingIdx
                        WHERE b.buildingIdx = ?
                        GROUP BY b.name;`;
    return await query(selectQuery, (buildingIdx));
}




module.exports = { 
    BuildingQuery,
    oneBuildingQuery
}
