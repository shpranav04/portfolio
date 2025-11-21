class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: rgba(15, 23, 42, 0.9);
                    color: rgba(255, 255, 255, 0.7);
                    padding: 2rem 1rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }

                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 2rem;
                }

                .social-links {
                    display: flex;
                    gap: 1.5rem;
                }

                .social-links a {
                    color: rgba(255, 255, 255, 0.7);
                    transition: color 0.3s;
                }

                .social-links a:hover {
                    color: #3b82f6;
                }

                .copyright {
                    text-align: center;
                    font-size: 0.9rem;
                }

                .back-to-top {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: rgba(255, 255, 255, 0.7);
                    text-decoration: none;
                    transition: color 0.3s;
                }

                .back-to-top:hover {
                    color: #3b82f6;
                }
            </style>
            <div class="footer-container">
                <div class="social-links">
                    <a href="#" aria-label="GitHub">
                        <i data-feather="github"></i>
                    </a>
                    <a href="#" aria-label="LinkedIn">
                        <i data-feather="linkedin"></i>
                    </a>
                    <a href="#" aria-label="Twitter">
                        <i data-feather="twitter"></i>
                    </a>
                    <a href="#" aria-label="Mail">
                        <i data-feather="mail"></i>
                    </a>
                </div>
                <a href="#" class="back-to-top">
                    <i data-feather="arrow-up"></i>
                    <span>Back to top</span>
                </a>
                <div class="copyright">
                    &copy; ${new Date().getFullYear()} Pranav Sharma. All rights reserved.
                </div>
            </div>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);