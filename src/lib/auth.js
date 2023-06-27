import { get, authGet } from "./axios";

export const checkUserAccessToken = async () => {
    var isSessionActive = false;
    var user = null;

    var accessToken = localStorage.getItem("access_token");
    if (accessToken != null) {
        try {
            let response = await authGet('/auth/me');

            localStorage.setItem("user", response);
            user = response;
            isSessionActive = true;
        } catch(ex) {
            user = null;
        }
    }

    return user;
};


export const loginApiCall = async (code) => {



    console.log('calling backend api for token check');
    var user = null;

    try {
        let response = await get('/auth/login', { 'wcaAuthCode': code });

        var accessToken = response.access_token;
        localStorage.setItem("access_token", accessToken);
        console.log(`accessToken: ${accessToken}`);

        user = await checkUserAccessToken();
    } catch(ex) {
        console.error(ex);
        return {
            status: 400, 
            user: null
        }
    }


    /*todo:erdem 
    daha sonra gerçen end point i asyn await get ile aşağıda kapattığım kısımdaki gibi çağırıp beklendiği gibi döndürürsün.
    ben şimdilik api den cevap gelmiş gibi döndürüyorum.
     */
    return {
        status: 200, 
        user: user
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
