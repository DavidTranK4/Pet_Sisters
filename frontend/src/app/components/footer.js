import Link from "next/link";
export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer__area">
                    <div className="footer__top fix">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="footer__widget">
                                        <div className="footer__logo">
                                            <Link href={"index.html"}><img src="img/logo/w_logo.png" alt=""/></Link>
                                        </div>
                                        <div className="footer__content">
                                            <p>555 A, East Manster Street, Ready Halley Neon, Uk 4512</p>
                                            <Link href={"tel:0123456789"}>+00 123 45678 44</Link>
                                            <Link href={"mailto:Supportinfo@gmail.com"}>Supportinfo@gmail.com</Link>
                                        </div>
                                        <div className="footer__social">
                                            <h6 className="title">Follow Us On:</h6>
                                            <ul className="list-wrap">
                                                <li><Link href={"https://www.facebook.com/"} target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href={"https://twitter.com"} target="_blank"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href={"https://www.whatsapp.com/"} target="_blank"><i className="fab fa-whatsapp"></i></Link></li>
                                                <li><Link href={"https://www.instagram.com/"} target="_blank"><i className="fab fa-instagram"></i></Link></li>
                                                <li><Link href={"https://www.youtube.com/"} target="_blank"><i className="fab fa-youtube"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                                    <div className="footer__widget">
                                        <h4 className="footer__widget-title">Quick Links</h4>
                                        <div className="footer__link">
                                            <ul className="list-wrap">
                                                <li><Link href="animal.html">Animal Rescue</Link></li>
                                                <li><Link href="contact.html">Humane Education</Link></li>
                                                <li><Link href="animal-details.html">Animal Hospital</Link></li>
                                                <li><Link href="animal.html">Street Animal Feeding</Link></li>
                                                <li><Link href={"index.html"}>Homepage 01</Link></li>
                                                <li><Link href="pricing.html">Pricing Table</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="footer__widget">
                                        <h4 className="footer__widget-title">Opening Hours</h4>
                                        <div className="footer__link">
                                            <ul className="list-wrap">
                                                <li>Monday <span>8.00 - 21.00</span></li>
                                                <li>Tuesday <span>8.00 - 21.00</span></li>
                                                <li>Thursday <span>8.00 - 21.00</span></li>
                                                <li>Friday <span>8.00 - 21.00</span></li>
                                                <li>Saturday <span>8.00 - 21.00</span></li>
                                                <li>Sunday <span>8.00 - 21.00</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="footer__widget">
                                        <div className="footer__newsletter">
                                            <h2 className="title">Subscribe to our newsletter</h2>
                                            <div className="shape">
                                                <img src="img/images/footer_newsletter_shape.svg" alt="" className="injectable"/>
                                            </div>
                                            <form action="#">
                                                <input id="email" type="email" placeholder="Type Your E-mail"/>
                                                <button className="btn" type="submit">Subscribe Now</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer__shape-wrap">
                            <img src="img/images/footer_shape01.png" alt="img" data-aos="fade-up-right" data-aos-delay="400"/>
                            <img src="img/images/footer_shape02.png" alt="img" data-aos="fade-up-left" data-aos-delay="400"/>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <div className="footer__bottom-menu">
                                        <ul className="list-wrap">
                                            <li><Link href="contact.html">Support</Link></li>
                                            <li><Link href="contact.html">Terms & Conditions</Link></li>
                                            <li><Link href="contact.html">Privacy Policy</Link></li>
                                            <li><Link href="contact.html">Career</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="copyright-text text-end">
                                        <p>Copyright © 2024. All Rights Reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
  }
  