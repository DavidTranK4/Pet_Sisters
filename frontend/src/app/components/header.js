import Link from "next/link";
export default function Header() {
    return (
        <>
        {/* <div id="preloader">
            <div id="loader" className="loader">
                <div className="loader-container">
                    <div className="loader-icon"><img src="img/logo/preloader.svg" alt="Preloader"/></div>
                </div>
            </div>
        </div> */}
        <button className="scroll__top scroll-to-target" data-target="html">
            <i className="fas fa-angle-up"></i>
        </button>
        <header>
            <div id="header-fixed-height"></div>
            <div className="tg-header__top">
                <div className="container custom-container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8">
                            <ul className="tg-header__top-info left-side list-wrap">
                                <li><i className="flaticon-placeholder"></i>59 Jakc Street Brooklyn, New York</li>
                                <li><i className="flaticon-mail"></i><Link href="mailto:Petspostinfo@gmail.com">Petspostinfo@gmail.com</Link></li>
                            </ul>
                        </div>
                        <div className="col-xl-6 col-lg-4">
                            <ul className="tg-header__top-right list-wrap">
                                <li><i className="flaticon-three-o-clock-clock"></i>Opening Hour: 09.00 am- 11.00 pm</li>
                                <li className="tg-header__top-social">
                                    <ul className="list-wrap">
                                        <li><Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link href="https://www.whatsapp.com/" target="_blank"><i className="fab fa-whatsapp"></i></Link></li>
                                        <li><Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></Link></li>
                                        <li><Link href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id="sticky-header" className="tg-header__area">
                <div className="container custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tgmenu__wrap">
                                <nav className="tgmenu__nav">
                                    <div className="logo">
                                        <Link href="index.html"><img src="img/logo/logo.png" alt="Logo"/></Link>
                                    </div>
                                    <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                                        <ul className="navigation">
                                            <li className="active menu-item-has-children"><Link href="#">Home</Link>
                                                <ul className="sub-menu">
                                                    <li className="active"><Link href="index.html">Pet Care & Veterinary</Link></li>
                                                    <li><Link href="index-2.html">Pet Breed</Link></li>
                                                    <li><Link href="index-3.html">Pet Adopt</Link></li>
                                                    <li><Link href="index-4.html">pet Woocommerce</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="about.html">About</Link></li>
                                            <li className="menu-item-has-children"><Link href="#">Shop</Link>
                                                <ul className="sub-menu">
                                                    <li><Link href="product.html">Our Shop</Link></li>
                                                    <li><Link href="product-details.html">Shop Details</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children"><Link href="#">Pages</Link>
                                                <ul className="sub-menu">
                                                    <li><Link href="animal.html">All Pets</Link></li>
                                                    <li><Link href="animal-details.html">Pet Details</Link></li>
                                                    <li><Link href="gallery.html">Gallery</Link></li>
                                                    <li><Link href="faq.html">Faq Page</Link></li>
                                                    <li><Link href="pricing.html">Pricing Page</Link></li>
                                                    <li><Link href="reservation.html">Reservation Page</Link></li>
                                                    <li><Link href="team.html">Our Team</Link></li>
                                                    <li><Link href="team-details.html">Team Details</Link></li>
                                                    <li><Link href="blog.html">Our Blog</Link></li>
                                                    <li><Link href="blog-details.html">Blog Details</Link></li>
                                                    <li><Link href="error.html">404 Error Page</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href={"contact.html"}>contacts</Link></li>
                                        </ul>
                                    </div>
                                    <div className="tgmenu__action d-none d-md-block">
                                        <ul className="list-wrap">
                                            <li className="header-search">
                                                <Link href="#" className="search-open-btn">
                                                    <i className="flaticon-loupe"></i>
                                                </Link>
                                            </li>
                                            <li className="header-cart">
                                                <Link href="#">
                                                    <i className="flaticon-shopping-bag"></i>
                                                    <span>0</span>
                                                </Link>
                                            </li>
                                            <li className="offCanvas-menu">
                                                <Link href="#" className="menu-tigger">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" viewBox="0 0 26 16" fill="none">
                                                        <rect width="9" height="2" rx="1" fill="currentcolor"/>
                                                        <rect x="11" width="15" height="2" rx="1" fill="currentcolor" />
                                                        <rect y="14" width="26" height="2" rx="1" fill="currentcolor" />
                                                        <rect y="7" width="16" height="2" rx="1" fill="currentcolor" />
                                                        <rect x="17" y="7" width="9" height="2" rx="1" fill="currentcolor" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li className="header-btn"><Link href={"contact.html"} className="btn"><i className="flaticon-calendar-1"></i>Appointment</Link></li>
                                        </ul>
                                    </div>
                                    <div className="mobile-nav-toggler">
                                        <i className="flaticon-layout"></i>
                                    </div>
                                </nav>
                            </div>

                            <div className="tgmobile__menu">
                                <nav className="tgmobile__menu-box">
                                    <div className="close-btn"><i className="fas fa-times"></i></div>
                                    <div className="nav-logo">
                                        <Link href="index.html"><img src="img/logo/logo.png" alt="Logo"/></Link>
                                    </div>
                                    <div className="tgmobile__search">
                                        <form action="#">
                                            <input type="text" placeholder="Search here..."/>
                                            <button><i className="fas fa-search"></i></button>
                                        </form>
                                    </div>
                                    <div className="tgmobile__menu-outer">
                                    </div>
                                    <div className="social-links">
                                        <ul className="list-wrap">
                                            <li><Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link href="https://www.whatsapp.com/" target="_blank"><i className="fab fa-whatsapp"></i></Link></li>
                                            <li><Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></Link></li>
                                            <li><Link href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></Link></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div className="tgmobile__menu-backdrop"></div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="search__popup">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="search__wrapper">
                                <div className="search__close">
                                    <button type="button" className="search-close-btn">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M1 1L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div className="search__form">
                                    <form action="#">
                                        <div className="search__input">
                                            <input className="search-input-field" type="text" placeholder="Type keywords here"/>
                                            <span className="search-focus-border"></span>
                                            <button>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M19.0002 19.0002L17.2002 17.2002" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="search-popup-overlay"></div>
            <div className="offCanvas__info">
                <div className="offCanvas__close-icon menu-close">
                    <button><i className="far fa-window-close"></i></button>
                </div>
                <div className="offCanvas__logo mb-30">
                    <Link href="index.html"><img src="img/logo/logo.png" alt="Logo"/></Link>
                </div>
                <div className="offCanvas__side-info mb-30">
                    <div className="contact-list mb-30">
                        <h4>Office Address</h4>
                        <p>123/A, Miranda City Likaoli <br/> Prikano, Dope</p>
                    </div>
                    <div className="contact-list mb-30">
                        <h4>Phone Number</h4>
                        <p>+0989 7876 9865 9</p>
                        <p>+(090) 8765 86543 85</p>
                    </div>
                    <div className="contact-list mb-30">
                        <h4>Email Address</h4>
                        <p>info@example.com</p>
                        <p>example.mail@hum.com</p>
                    </div>
                </div>
                <div className="offCanvas__social-icon mt-30">
                    <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                    <Link href="#"><i className="fab fa-twitter"></i></Link>
                    <Link href="#"><i className="fab fa-google-plus-g"></i></Link>
                    <Link href="#"><i className="fab fa-instagram"></i></Link>
                </div>
            </div>
            <div className="offCanvas__overly"></div>
        </header>
        </>
    );
  }
  