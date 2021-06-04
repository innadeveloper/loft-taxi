export const serverRegister = async(email, password, name, surname) => {
    return fetch('https://loft-taxi.glitch.me/register',
    {
        method: 'POST',
        body: JSON.stringify({
            "email": email,
            "password": password,
            "name": name,
            "surname" : surname
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
}