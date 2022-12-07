
export const getUserLocation = async () => {

    return new Promise((resolve, reject) => {
        
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                resolve([ coords.latitude, coords.longitude ])
            },
            (err) => {
                alert("No se pudo obtener la geolocalizacion");
                console.log(err);
                reject();
            }
        )
    });
}