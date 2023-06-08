import logo from './logo.svg';
import './App.css';
import { Route, Link, Routes, useLocation, useSearchParams } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Contests from './pages/Contests';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import { useEffect, useState } from 'react';
import { get, authGet } from "./lib/axios";
import { checkUserAccessToken, loginApiCall } from "./lib/auth";

import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/useAuth';

function App() {

  const { login, logout } = useAuth();

  const[user, setUser]=useState(null);


  const [accessToken, setAccessToken] = useState("access_token");
  //const [user, setUser] = useState();

  const location = useLocation();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  console.log('hash', location.hash);
  console.log('pathname', location.pathname);
  console.log('search', location.search);

  // check for callback code 

  useEffect(()=>{
    if (code!==null) {

      /* 
      todo:Erdem 
      code nerden geliyor?, code geldikten sonra login olmak için
      gideceğimiz bir end point var mı?
      buradaki kurgunun şu olduğunu varsyarak aşağıdaki kod bloğunu ekliyorum.

      code geldikten sonra biz bir endpoint çağırıp login oluyoruz  ve auth/me ile
      user a ait bilgileri çekiyoruz.
      auth/me responsunda  {id:1, user_nam:'erdem', access_token:'xyzdsfsf'} geldiğini varsayıyorum...

      */

      const  asyncCall = async() =>{
        let response=await loginApiCall(code);

        if (response.status===200){
          // add login response to context in order to access from everywhere.
          login(response.user);

          setUser(response.user);


        }else{
          //todo: login failed, show login failed message
        }
      }
      
      
      asyncCall();

    }
  },[code])


  /*
  const checkUserAccessToken__ = () => {
    var isSessionActive = false;

    accessToken = localStorage.getItem("access_token");
    if (accessToken != null) {
      let response = authGet('/auth/me').then(
        (resp) => {
          setUser(resp);
          localStorage.setItem("user", resp);
          isSessionActive = true;
        }
      ).catch((reason) => {
        setUser(null);
        console.error(reason);
      });
    }

    return isSessionActive;

  };
  */
  // Similar to componentDidMount and componentDidUpdate:
  /*
  useEffect(() => {
    console.log(`Your code: ${code} `);
    document.title = `Your code: ${code} `;

    var isSessionActive = false;

    checkUserAccessToken().then((resp) => {
      isSessionActive = resp;

      if (!isSessionActive && code != null) {
        login(code).then((accessToken) => {
          console.log(accessToken)
        });
        
      }
  
    }).catch((reason) => {
      console.error(reason);
    });

  }, []);
*/
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Layout >

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/yarismalar" element={<Contests />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/sik-sorulan-sorular" element={<FAQ />} />
        </Routes>

      </Layout>
    </AuthContext.Provider>
  )

}

export default App;
