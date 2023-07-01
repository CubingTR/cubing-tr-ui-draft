import axios from "axios";



const client = axios.create({
});

let authClient = axios.create({
    headers: {
      Authorization : `Bearer ${localStorage.getItem("access_token")}`
      }
    }
);


export  const  post = async (path, params)=>{
    console.log("try to post:", path)
    const response = await client.post("/api" + path, params);
    return response.data
}

export const get = async(path, parameters)=>{
    const response = await client.get("/api" + path, { params:  parameters});
    return response.data
   
}


export  const  authPost = async (path, params)=>{
    const response = await authClient.post("/api" + path, params);
    return response.data
}
export const authGet = async(path, params)=>{
    const response = await authClient.get("/api" + path, params);
    return response.data
   
}

