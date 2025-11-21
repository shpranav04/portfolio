class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    backdrop-filter: blur(10px);
                    background-color: rgba(15, 23, 42, 0.8);
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }

                .navbar {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: white;
                    text-decoration: none;
                }

                .logo span {
                    color: #3b82f6;
                }

                .nav-links {
                    display: flex;
                    gap: 2rem;
                }

                .nav-links a {
                    color: rgba(255, 255, 255, 0.8);
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s;
                    position: relative;
                }

                .nav-links a:hover {
                    color: #3b82f6;
                }

                .nav-links a::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: #3b82f6;
                    transition: width 0.3s;
                }

                .nav-links a:hover::after {
                    width: 100%;
                }

                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: white;
                    cursor: pointer;
                }

                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }

                    .mobile-menu-btn {
                        display: block;
                    }

                    .navbar {
                        padding: 1rem;
                    }
                }
            </style>
            <nav class="navbar">
                <a href="#" class="logo">Pranav<span>Sharma</span></a>
                <div class="nav-links">
                    <a href="#about">About</a>
                    <a href="#education">Education</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#experience">Experience</a>
                    <a href="#contact">Contact</a>
                </div>
                <button class="mobile-menu-btn">
                    <i data-feather="menu"></i>
                </button>
            </nav>
        `;
    }
}

customElements.define('custom-navbar', CustomNavbar);