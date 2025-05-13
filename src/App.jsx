import "./App.css";

function App() {
  return (
    <>
      <header id="header">
        <a href="#" class="logo">
          <i class="fas fa-magic"></i>Elegant
        </a>

        <div class="menu-toggle">
          <i class="fas fa-bars"></i>
        </div>

        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#" class="btn-secondary">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section class="hero">
        <div class="floating"></div>
        <div class="floating"></div>
        <div class="floating"></div>
        <div class="floating"></div>

        <div class="hero-content">
          <div class="hero-text">
            <h1>
              Build Stunning Websites <span>Faster</span> Than Ever
            </h1>
            <p>
              Our platform empowers designers and developers to create
              beautiful, responsive websites in record time with our intuitive
              tools and pre-built components.
            </p>
            <div class="cta-buttons">
              <a href="#" class="btn btn-primary">
                <i class="fas fa-rocket"></i> Get Started
              </a>
              <a href="#" class="btn btn-secondary">
                <i class="fas fa-play"></i> Watch Demo
              </a>
            </div>
          </div>

          <div class="auth-container">
            <div class="form-header">
              <h2>Welcome Back!</h2>
              <p>Sign in to access your account</p>
            </div>

            <div class="form-toggle">
              <button class="active">Login</button>
              <button>Register</button>
            </div>

            <form id="login-form" class="active-form">
              <div class="form-group">
                <label for="login-email">Email Address</label>
                <input
                  type="email"
                  id="login-email"
                  placeholder="you@example.com"
                />
              </div>
              <div class="form-group">
                <label for="login-password">Password</label>
                <input
                  type="password"
                  id="login-password"
                  placeholder="••••••••"
                />
              </div>
              <div class="form-footer">
                <div class="remember-me">
                  <input type="checkbox" id="remember" />
                  <label for="remember">Remember me</label>
                </div>
                <a href="#">Forgot password?</a>
              </div>
              <button type="submit" class="submit-btn">
                Sign In
              </button>
            </form>

            <div class="social-login">
              <p>Or sign in with</p>
              <div class="social-icons">
                <a href="#" class="social-icon">
                  <i class="fab fa-google"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div class="footer-content">
          <div class="footer-col">
            <h3>About Elegant</h3>
            <p>
              We're revolutionizing web design with our cutting-edge platform
              that combines beautiful aesthetics with powerful functionality.
            </p>
            <div class="social-links">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div class="footer-col">
            <h3>Quick Links</h3>
            <ul class="footer-links">
              <li>
                <a href="#">
                  <i class="fas fa-chevron-right"></i> Home
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-chevron-right"></i> About Us
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-chevron-right"></i> Services
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-chevron-right"></i> Pricing
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-chevron-right"></i> Blog
                </a>
              </li>
            </ul>
          </div>

          <div class="footer-col">
            <h3>Services</h3>
            <ul class="footer-links">
              <li>
                <a href="#">
                  <i class="fas fa-chevron-right"></i> Web Design
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-chevron-right"></i> Web Development
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-chevron-right"></i> Product Management
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-chevron-right"></i> Marketing
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-chevron-right"></i> Graphic Design
                </a>
              </li>
            </ul>
          </div>

          <div class="footer-col">
            <h3>Contact Info</h3>
            <ul class="contact-info">
              <li>
                <i class="fas fa-map-marker-alt"></i>
                <span>123 Design Street, Creative City, CA 90210</span>
              </li>
              <li>
                <i class="fas fa-phone-alt"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <i class="fas fa-envelope"></i>
                <span>info@elegant.com</span>
              </li>
            </ul>

            <h4>Newsletter</h4>
            <p>Subscribe to our newsletter for the latest updates</p>
            <form class="newsletter-form">
              <input type="email" placeholder="Your Email" />
              <button type="submit">
                <i class="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        <div class="footer-bottom">
          <p>
            &copy; 2023 Elegant. All Rights Reserved. Made with{" "}
            <span class="heart">❤</span> by Creative Team
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
