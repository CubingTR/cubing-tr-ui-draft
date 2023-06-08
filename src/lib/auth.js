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


export const loginApiCall = async (code) => {

    console.log('calling backend api for token check');
    /*todo:erdem 
    daha sonra gerçen end point i asyn await get ile aşağıda kapattığım kısımdaki gibi çağırıp beklendiği gibi döndürürsün.
    ben şimdilik api den cevap gelmiş gibi döndürüyorum.
     */
    return {
        status:200, 
        user:{
            id:1, 
            first_name:'Erdem', 
            last_name:'Günay', 
            long_name:'Erdem Günay',
            email:'erdem@layermark.com',
            avatar_url:'https://2019.springio.net/images/speakers/erdem-gunay.jpeg', 
            access_token:'xyz'
        }
    }

    /*
    let response = await get('/auth/login', { 'wcaAuthCode': code });

    var accessToken = response.access_token;
    localStorage.setItem("access_token", accessToken);
    console.log(`accessToken: ${accessToken}`);

    await checkUserAccessToken();

    return accessToken;
    */
};
