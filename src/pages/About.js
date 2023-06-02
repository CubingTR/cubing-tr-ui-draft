const About = () =>{
    return (
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
    )
}

export default About;