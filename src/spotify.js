export const authEndpoint = "https://accounts.spotify.com/authorize";


// const redirectUri = "https://spotify-21c2b.firebaseapp.com/";


const redirectUri = "http://localhost:3000/";



const clientId = "3a29d8776a594e2d8c8b30434d3d2499";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)   // Gets the first of string
    .split('&')
    .reduce((initial, item) => {
      // #accessToken=mysupersecretkey&name=sonny
      let parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;

    }, {});
};



export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;