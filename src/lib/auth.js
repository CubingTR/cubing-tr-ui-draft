import { get, authGet } from "./axios";

export const checkUserAccessToken = async () => {
    var isSessionActive = false;

    var accessToken = localStorage.getItem("access_token");
    if (accessToken != null) {
        let response = await authGet('/auth/me');

        localStorage.setItem("user", response);
        isSessionActive = true;
    }

    return isSessionActive;

};


export const login = async (code) => {

    console.log('calling backend api for token check');
    let response = await get('/auth/login', { 'wcaAuthCode': code });

    var accessToken = response.access_token;
    localStorage.setItem("access_token", accessToken);
    console.log(`accessToken: ${accessToken}`);

    await checkUserAccessToken();

    return accessToken;
};
