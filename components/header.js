class NexaHeader extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .header {
          background-color: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
        }
        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #2563eb;
          text-decoration: none;
        }
        .nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .nav-link {
          color: #374151;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        .nav-link:hover {
          color: #2563eb;
        }
        .cta-button {
          background-color: #2563eb;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          text-decoration: none;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }
        .cta-button:hover {
          background-color: #1d4ed8;
        }
        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #374151;
        }
        .mobile-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: white;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 2rem 1rem;
        }
        .mobile-menu.active {
          display: block;
        }
        .mobile-nav-link {
          display: block;
          color: #374151;
          text-decoration: none;
          font-weight: 500;
          padding: 0.75rem 0;
          transition: color 0.3s ease;
        }
        .mobile-nav-link:hover {
          color: #2563eb;
        }
        @media (max-width: 768px) {
          .nav {
            display: none;
          }
          .mobile-menu-button {
            display: block;
          }
        }
      </style>
      <header class="header">
        <div class="header-container">
          <a href="/" class="logo">Nexa Creative</a>
          
          <nav class="nav">
            <a href="#services" class="nav-link">Services</a>
            <a href="#pricing" class="nav-link">Tarifs</a>
            <a href="#contact" class="nav-link">Contact</a>
            <a href="#pricing" class="cta-button">Demander un site</a>
          </nav>
          
          <button class="mobile-menu-button">
            <i data-feather="menu"></i>
          </button>
        </div>
        
        <div class="mobile-menu">
          <a href="#services" class="mobile-nav-link">Services</a>
          <a href="#pricing" class="mobile-nav-link">Tarifs</a>
          <a href="#contact" class="mobile-nav-link">Contact</a>
          <a href="#pricing" class="cta-button block mt-4">Demander un site</a>
        </div>
      </header>
    `;

    // Mobile menu functionality
    const mobileMenuButton = this.shadowRoot.querySelector('.mobile-menu-button');
    const mobileMenu = this.shadowRoot.querySelector('.mobile-menu');

    mobileMenuButton.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.shadowRoot.contains(e.target)) {
        mobileMenu.classList.remove('active');
      }
    });

    // Update Feather icons in shadow DOM
    setTimeout(() => {
      if (window.feather) {
        window.feather.replace();
      }
    }, 100);
  }
}

customElements.define('nexa-header', NexaHeader);