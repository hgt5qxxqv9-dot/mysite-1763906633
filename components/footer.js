class NexaFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .footer {
          background-color: #1f2937;
          color: white;
          padding: 3rem 0 2rem 0;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .footer-content {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        .footer-section h3 {
          color: white;
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-links li {
          margin-bottom: 0.5rem;
        }
        .footer-links a {
          color: #d1d5db;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-links a:hover {
          color: white;
        }
        .footer-bottom {
          border-top: 1px solid #374151;
          padding-top: 2rem;
          text-align: center;
          color: #9ca3af;
        }
        .contact-info {
          color: #d1d5db;
          margin-top: 1rem;
        }
        .contact-link {
          color: #2563eb;
          text-decoration: none;
        }
        .contact-link:hover {
          text-decoration: underline;
        }
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      </style>
      <footer class="footer">
        <div class="footer-container">
          <div class="footer-content">
            <div class="footer-section">
              <h3>Nexa Creative</h3>
              <p style="color: #d1d5db; margin-bottom: 1rem;">
          Spécialiste en création de sites web modernes et performants pour les petites entreprises.
        </p>
              <div class="contact-info">
                <a href="https://wa.me/33631170414" class="contact-link">WhatsApp: +33 6 31 17 04 14</a>
                <br>
                <a href="mailto:nexa.creativee@gmail.com" class="contact-link">nexa.creativee@gmail.com</a>
              </div>
            </div>
            
            <div class="footer-section">
              <h3>Menu Rapide</h3>
              <ul class="footer-links">
                <li><a href="/">Accueil</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#pricing">Tarifs</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div class="footer-section">
              <h3>Légal</h3>
              <ul class="footer-links">
                <li><a href="#">Mentions légales</a></li>
                <li><a href="#">Politique de confidentialité</a></li>
                <li><a href="#">Conditions d'utilisation</a></li>
              </ul>
            </div>
          </div>
          
          <div class="footer-bottom">
            <p>&copy; 2024 Nexa Creative. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('nexa-footer', NexaFooter);