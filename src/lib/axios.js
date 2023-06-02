import axios from "axios";



const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/" 
});

let authClient = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {
      Authorization : `Bearer ${localStorage.getItem("access_token")}`
      }
    }
);


export  const  post = async (path, params)=>{
    console.log("try to post:", path)
    const response = await client.post(path, params);
    return response.data
}

export const get = async(path, params)=>{
    const response = await client.get(path, params);
    return response.data
   
}


export  const  authPost = async (path, params)=>{
    const response = await authClient.post(path, params);
    return response.data
}
export const authGet = async(path, params)=>{
    const response = await authClient.get(path, params);
    return response.data
   
}

