import React from 'react';
const Header = () => {
return (
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
    );
};
export default Header;