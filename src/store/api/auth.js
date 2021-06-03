export const serverLogIn = async (email, password) => {
  return fetch(
    `https://loft-taxi.glitch.me/auth`, {
      method: 'POST',
      body: JSON.stringify({
        'email': email,
        'password': password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    ).then(res => res.json());
};
