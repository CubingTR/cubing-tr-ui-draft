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
import { checkUserAccessToken, login } from "./lib/auth";



function App() {
  let [accessToken, setAccessToken] = useState("access_token");
  let [user, setUser] = useState();

  const location = useLocation();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  console.log('hash', location.hash);
  console.log('pathname', location.pathname);
  console.log('search', location.search);

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

  // Similar to componentDidMount and componentDidUpdate:
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
        /*
        console.log('calling backend api for token check');
        let response = get('/auth/login', { 'wcaAuthCode': code }).then(
          (resp) => {
            accessToken = resp.access_token;
            setAccessToken(accessToken);
            localStorage.setItem("access_token", accessToken);
            console.log(`accessToken: ${accessToken}`);
  
            checkUserAccessToken();
          }
        ).catch((reason) => {
          console.error(reason);
        });
        */
      }
  
    }).catch((reason) => {
      console.error(reason);
    });

  }, []);

  return (

    <Layout>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/yarismalar" element={<Contests />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/sik-sorulan-sorular" element={<FAQ />} />
      </Routes>

    </Layout>

  )

}

export default App;
