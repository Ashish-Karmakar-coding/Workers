import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="footer">
        <div className="F-row-1 flex justify-around border-b border-gray-600 pb-8">
          <div className="F-column-1">
            <div className="F-heading">
              <p className="font-bold">ABOUT</p>
            </div>
            <div className="F-list flex flex-col">
              <a href="#">Contact Us</a>
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Flipkart Stories</a>
              <a href="#">Press</a>
              <a href="#">Flipkart Wholesale</a>
              <a href="#">Corporate Information</a>
            </div>
          </div>
          <div className="F-column-2">
            <div className="F-heading">
              <p className="font-bold">HELP</p>
            </div>
            <div className="F-list flex flex-col">
              <a href="#">Payments</a>
              <a href="#">Shipping</a>
              <a href="#">Cancellation & Returns</a>
              <a href="#">FAQ</a>
              <a href="#">Report Infringement</a>
            </div>
          </div>
          <div className="F-column-3">
            <div className="F-heading">
              <p className="font-bold">POLICY</p>
            </div>
            <div className="F-list flex flex-col">
              <a href="#">Return Policy</a>
              <a href="#">Terms Of Use</a>
              <a href="#">Security</a>
              <a href="#">Privacy</a>
              <a href="#">Sitemap</a>
              <a href="#">Grievance Redressal</a>
              <a href="#">EPR Compliance</a>
            </div>
          </div>
          <div className="F-column-4">
            <div className="F-heading">
              <p className="font-bold">SOCIAL</p>
            </div>
            <div className="F-list flex flex-col">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">YouTube</a>
            </div>
          </div>
          <div className="F-column-5">
            <div className="F-heading">
              <p className="font-bold">Mail Us:</p>
            </div>
            <div className="F-list">
              <p>Flipkart Internet Private Limited,</p>
              <p>Buildings Alyssa, Begonia &</p>
              <p>Clove Embassy Tech Village,</p>
              <p>Outer Ring Road, Devarabeesanahalli Village,</p>
              <p>Bengaluru, 560103,</p>
              <p>Karnataka, India</p>
            </div>
          </div>
          <div className="F-column-6">
            <div className="F-heading">
              <p className="font-bold">Registered Office Address:</p>
            </div>
            <div className="F-list-address">
              <p>Flipkart Internet Private Limited,</p>
              <p>Buildings Alyssa, Begonia &</p>
              <p>Clove Embassy Tech Village,</p>
              <p>Outer Ring Road, Devarabeesanahalli Village,</p>
              <p>Bengaluru, 560103,</p>
              <p>Karnataka, India</p>
              <p>CIN : U51109KA2012PTC066107</p>
              <p> Telephone: <a href="tel: 044-45614700">044-45614700</a></p>
            </div>
          </div>
        </div>
        <div className="Footer-Flipkart text-center mt-8">
          <p>© 2007-2023 Flipkart.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;