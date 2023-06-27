import { React, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useUser } from '../hooks/useUser';

const Navigation = () => {


  const {user} =useUser();

  console.log("Navigation User :", user);
    
    return (


        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#page-top">Cubing TR</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                  aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link to="/hakkimizda" className="nav-link" >Hakkımızda</Link></li>


              <div className="dropdown">
                <Link to="/" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" >Ana Sayfa</Link>

                <ul className="dropdown-menu">
                  <li><Link to="/tum-yarismalar" className="dropdown-item nav-item" >Tüm Yarışmalar</Link></li>
                  <li><Link to="/yarismalarim" className="dropdown-item nav-item" >Yarışmalarım</Link></li>
                </ul>
              </div>

              <li className="nav-item"><Link to="/yarismalar" className="nav-link" >Yarışmalar</Link></li>


              <div className="dropdown">
                <Link  to="/sonuclar"  className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Sonuçlar
                </Link>

                <ul className="dropdown-menu">
                  <li><Link to="/rekorlar" className="dropdown-item nav-item" href="records.html">Rekorlar</Link></li>
                  <li><Link to="/siralama" className="dropdown-item nav-item" href="rankings.html">Sıralama</Link></li>
                  <li><Link to="/sonuclarim" className="dropdown-item nav-item" href="myresults.html">Sonuçlarım</Link></li>
                  <li><Link to="/karsilastirma" className="dropdown-item nav-item" href="compare.html">Karşılaştırma</Link></li>
                </ul>
              </div>
              <li className="nav-item"><Link to="/sss" className="nav-link" href="faq.html">Sıkça Sorulan Sorular</Link></li>
              <li className="nav-item"><Link to="/iletisim" className="nav-link" href="#signup">İletişim</Link></li>
              {user==null &&(
              <li className="nav-item"><Link to="https://www.worldcubeassociation.org/oauth/authorize?response_type=code&scope=public+dob+email&client_id=ouXKX3BlCsI4r1k8hBpv1ctiJnV6_PfY8WsIktT_fhM&redirect_uri=https://cubingtr.org" className="nav-link" >Giriş Yap</Link></li>
              )}

              {user!=null &&(
                <>
                 <li className="nav-item"><Link to="" className="nav-link" > {user.name}</Link></li>
                <li className="nav-item">
                <div style={
                  {
                    marginTop:'10px',
                    width: "40px", 
                    height: "40px",
                    display: 'inline-block', 
                    verticalAlign: "middle",
                    backgroundImage: `url(${user.avatar_thumb_url})`, 
                    backgroundSize: 'contain',
                    backgroundRepeat:'no-repeat'

                    }}>
                     
                </div>

              </li>
              
               </>
              )}
              

            </ul>
          </div>
        </div>
      </nav>

      
    );
};
export default Navigation;