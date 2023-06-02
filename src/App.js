import logo from './logo.svg';
import './App.css';
import {Route, Link, Routes, useLocation} from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Contests from './pages/Contests';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';



function App() {

  const location = useLocation();
  console.log('hash', location.hash);
  console.log('pathname', location.pathname);
  console.log('search', location.search);

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


  return (
      <div id="page-top">
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
              <li className="nav-item"><a className="nav-link" href="#about">Hakkımızda</a></li>
              <div className="dropdown">
                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Yarışmalar
                </a>

                <ul className="dropdown-menu">
                  <li><a className="dropdown-item nav-item" href="allcomps.html">Tüm Yarışmalar</a></li>
                  <li><a className="dropdown-item nav-item" href="mycomps.html">Yarışmalarım</a></li>
                </ul>
              </div>


              <div className="dropdown">
                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Sonuçlar
                </a>

                <ul className="dropdown-menu">
                  <li><a className="dropdown-item nav-item" href="records.html">Rekorlar</a></li>
                  <li><a className="dropdown-item nav-item" href="rankings.html">Sıralama</a></li>
                  <li><a className="dropdown-item nav-item" href="myresults.html">Sonuçlarım</a></li>
                  <li><a className="dropdown-item nav-item" href="compare.html">Karşılaştırma</a></li>
                </ul>
              </div>
              <li className="nav-item"><a className="nav-link" href="faq.html">Sıkça Sorulan Sorular</a></li>
              <li className="nav-item"><a className="nav-link" href="#signup">İletişim</a></li>
              <li className="nav-item"><a className="nav-link" href="https://www.worldcubeassociation.org/oauth/authorize?response_type=code&client_id=ouXKX3BlCsI4r1k8hBpv1ctiJnV6_PfY8WsIktT_fhM&redirect_uri=http://localhost:3000/index.html">Giriş Yap</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="masthead">
        <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
          <div className="d-flex justify-content-center">
            <div className="text-center">
              <h1 className="mx-auto my-0 text-uppercase">CUBING TR</h1>
              <h2 className="text-white-50 mx-auto mt-2 mb-5">Türkiye Rubik Küp Organizasyonu.</h2>
              <a className="btn btn-primary" href="#about">Yakındaki Yarışmalar...</a>
            </div>
          </div>
        </div>
      </header>

      <section className="about-section text-center" id="about">


        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item">
              <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
                   xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide"
                   preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777"></rect>
                <text x="50%" y="50%" fill="#555" dy=".3em">First slide</text>
              </svg>

            </div>
            <div className="carousel-item active">
              <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="500"
                   xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide"
                   preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                <rect width="100%" height="100%" fill="#666"></rect>
                <text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text>
              </svg>

            </div>
            <div className="carousel-item">
              <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
                   xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide"
                   preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                <rect width="100%" height="100%" fill="#555"></rect>
                <text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text>
              </svg>

            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                  data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>


        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8">


              <h2 className="text-white mb-4">Uzun aradan sonra yeniden İstanbul'da</h2>
              <p className="text-white-50">
                Grayscale is a free Bootstrap theme created by Start Bootstrap. It can be yours right now, simply
                download the template on
                <a href="https://startbootstrap.com/theme/grayscale/">the preview page.</a>
                The theme is open source, and you can use it for any purpose, personal or commercial.
              </p>
            </div>
          </div>
          <img className="img-fluid" src="assets/img/IMG_7613.JPG" alt="..." width="50%" height="50%"/>
        </div>
      </section>

      <section className="projects-section bg-light" id="projects">
        <div className="container px-4 px-lg-5">
          <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div className="col-xl-8 col-lg-7"><img className="img-fluid mb-3 mb-lg-0" src="assets/img/IMG_7741.JPG"
                                                    alt="..."/></div>
            <div className="col-xl-4 col-lg-5">
              <div className="featured-text text-center text-lg-left">
                <h4 className="text-white">66 Yarışma organize etmiş bir komite</h4>
                <p className="text-white-50 mb-0">Ankara'dan İstanbul'a Uşak'tan Balıkesir'e Pek çok şehir gezdik</p>
              </div>
            </div>
          </div>
          <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
            <div className="col-lg-6"><img className="img-fluid" src="assets/img/IMG_7669.JPG" alt="..."/></div>
            <div className="col-lg-6">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-left">
                    <h4 className="text-white">Misty</h4>
                    <p className="mb-0 text-white-50">An example of where you can put an image of a project, or anything
                      else, along with a description.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row gx-0 justify-content-center">
            <div className="col-lg-6"><img className="img-fluid" src="assets/img/IMG_7657.JPG" alt="..."/></div>
            <div className="col-lg-6 order-lg-first">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-right">
                    <h4 className="text-white">Mountains</h4>
                    <p className="mb-0 text-white-50">Another example of a project with its respective description.
                      These sections work well responsively as well!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="signup-section" id="signup">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5">
            <div className="col-md-10 col-lg-8 mx-auto text-center">
              <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
              <h2 className="text-white mb-5">Subscribe to receive updates!</h2>
              <form className="form-signup" id="contactForm" data-sb-form-api-token="API_TOKEN">
                <div className="row input-group-newsletter">
                  <div className="col"><input className="form-control" id="emailAddress" type="email"
                                              placeholder="Enter email address..." aria-label="Enter email address..."
                                              data-sb-validations="required,email"/></div>
                  <div className="col-auto">
                    <button className="btn btn-primary disabled" id="submitButton" type="submit">Notify Me!</button>
                  </div>
                </div>
                <div className="invalid-feedback mt-2" data-sb-feedback="emailAddress:required">An email is required.
                </div>
                <div className="invalid-feedback mt-2" data-sb-feedback="emailAddress:email">Email is not valid.</div>
                <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3 mt-2 text-white">
                    <div className="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br/>
                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                  </div>
                </div>
                <div className="d-none" id="submitErrorMessage">
                  <div className="text-center text-danger mb-3 mt-2">Error sending message!</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>


      <section className="contact-section bg-black">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Address</h4>
                  <hr className="my-4 mx-auto"/>
                  <div className="small text-black-50">4923 Market Street, Orlando FL</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-envelope text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Email</h4>
                  <hr className="my-4 mx-auto"/>
                  <div className="small text-black-50"><a href="#!">hello@yourdomain.com</a></div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-mobile-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Phone</h4>
                  <hr className="my-4 mx-auto"/>
                  <div className="small text-black-50">+1 (555) 902-8832</div>
                </div>
              </div>
            </div>
          </div>
          <div className="social d-flex justify-content-center">
            <a className="mx-2" href="#!"><i className="fab fa-twitter"></i></a>
            <a className="mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
            <a className="mx-2" href="#!"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </section>


      <footer className="footer bg-black small text-center text-white-50">
        <div className="container px-4 px-lg-5">Copyright &copy; Your Website 2023</div>
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      <script src="js/scripts.js"></script>
      <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
      </div>
  );
}

export default App;
