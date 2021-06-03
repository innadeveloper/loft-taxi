export const getAddressFromServer = () => {
    return fetch("https://loft-taxi.glitch.me/addressList")
        .then(res => res.json());
}