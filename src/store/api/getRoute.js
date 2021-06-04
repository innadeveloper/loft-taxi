export const getRouteFromServer = ({address1, address2}) => {
    return fetch(`https://loft-taxi.glitch.me/route?address1=${address1}&address2=${address2}`)
        .then(res => res.json());
}