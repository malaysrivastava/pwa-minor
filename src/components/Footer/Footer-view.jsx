import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';

const View = () => {
    return (
      
      <footer class="footer-section">
      <div class="container">
          
          <div class="footer-content pt-5 pb-5">
              <div class="row">
                  <div class="col-xl-6 col-lg-6 mb-50">
                      <div class="footer-widget">
                          <div class="footer-logo">
                              <a href="index.html"><img src="../logo.png" class="img-fluid" alt="logo"/></a>
                          </div>
                          <div class="footer-text">
                              <p>
A group of JUIT students initiate to create a platform for exchanging goods for the students, to the students, by the students among the campus. </p>
                          </div>
                          <div class="footer-social-icon">
                              <span>Follow us</span>
                              <a href="#"><i class="fab fa-brands fa-github github-bg bg-secondary"></i></a>
                              <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                              <a href="#"><i class="fab fa-linkedin bg-primary linkedin-bg"></i></a>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 mb-30">
                      <div class="footer-widget">
                          <div class="footer-widget-heading">
                              <h3>Useful Links</h3>
                          </div>
                          <ul>
                              <li><a href="#">Home</a></li>
                              <li><a href="#">about</a></li>
                              <li><a href="#">services</a></li>
                              <li><a href="#">portfolio</a></li>
                              <li><a href="#">Contact</a></li>
                              <li><a href="#">About us</a></li>
                              <li><a href="#">Our Services</a></li>
                              <li><a href="#">Expert Team</a></li>
                              <li><a href="#">Contact us</a></li>
                              <li><a href="#">Latest News</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
  </footer>
   
  )
}

export default View;