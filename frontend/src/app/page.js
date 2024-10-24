import Link from "next/link";
export default function Home() {
    return (
        <>
            <div className="fix">
                <div className="banner__area banner__bg" data-background="img/banner/banner_bg.jpg">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-xl-5 col-lg-6">
                                <div className="banner__content">
                                    <h2 className="title" data-aos="fade-up" data-aos-delay="200">Trusted Pet <img src="img/banner/banner_title_img01.png" alt=""/> care & Veterinary Center <span className="icon"><img src="img/banner/banner_title_img02.png" alt=""/></span> Point</h2>
                                    <p data-aos="fade-up" data-aos-delay="400">Template Kit uses demo images from Envato Elements Follower will need to license these images from Envato.</p>
                                    <Link href={"about.html"} className="btn" data-aos="fade-up" data-aos-delay="600">Read More <img src="img/icon/right_arrow.svg" alt="" className="injectable"/></Link>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-6 col-md-9">
                                <div className="banner__img text-end">
                                    <img src="img/banner/banner_img01.png" alt="img" data-aos="fade-left" data-aos-delay="800"/>
                                    <div className="healthy-pets" data-aos="zoom-in" data-aos-delay="1000">
                                        <div className="icon">
                                            <img src="img/icon/pet_icon01.svg" alt="" className="injectable"/>
                                        </div>
                                        <div className="content">
                                            <h6 className="circle rotateme">BETTER - HEALTHY - PETS - LOVE -</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner__shape-wrap">
                        <img src="img/banner/banner_shape01.png" alt="img" data-aos="fade-down" data-aos-delay="1200"/>
                        <img src="img/banner/banner_shape02.png" alt="img" data-aos="fade-up-right" data-aos-delay="1200"/>
                        <img src="img/banner/banner_shape03.png" alt="img" className="ribbonRotate"/>
                        <img src="img/banner/banner_shape04.png" alt="img"/>
                    </div>
                </div>
                <div className="about__area">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-xl-5 col-lg-6 col-md-8">
                                <div className="about__img">
                                    <img src="img/images/about_img.png" alt=""/>
                                    <div className="video__box">
                                        <div className="video__box-shape">
                                            <img src="img/images/about_video_shape.svg" alt="" className="injectable"/>
                                        </div>
                                        <h5 className="title">Watch Our <br/> Working Video</h5>
                                        <Link href={"https://www.youtube.com/watch?v=XdFfCPK5ycw"} className="popup-video play-btn"><i className="fas fa-play"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-6">
                                <div className="about__content">
                                    <div className="section__title mb-20">
                                        <span className="sub-title">Know More Us
                                            <strong className="shake">
                                                <img src="img/icon/pet_icon02.svg" alt="" className="injectable"/>
                                            </strong>
                                        </span>
                                        <h2 className="title">Our Passion Is Providing <br/> Superior Pet Care</h2>
                                    </div>
                                    <div className="about__content-inner">
                                        <div className="experience__box">
                                            <div className="experience__box-shape">
                                                <img src="img/images/experience_shape.svg" alt="" className="injectable"/>
                                            </div>
                                            <div className="experience__box-content">
                                                <h4 className="title">15 <span>Yr</span></h4>
                                                <p>Experience</p>
                                            </div>
                                        </div>
                                        <p>Come see how I’m styling these final days of summer with bright palettes and pops of color that will dazzle your wardrobe year round!</p>
                                    </div>
                                    <p>We will work with you to develop individualised care plans, including management of chronic diseases. We are committed to being the region’s premier healthcare network providing patient centered care that inspires.</p>
                                    <div className="about__content-bottom">
                                        <div className="about__content-sign">
                                            <img src="img/images/author_sign.png" alt=""/>
                                        </div>
                                        <div className="customer__review">
                                            <div className="customer__review-img">
                                                <ul className="list-wrap">
                                                    <li><img src="img/images/author_01.png" alt=""/></li>
                                                    <li><img src="img/images/author_02.png" alt=""/></li>
                                                    <li><img src="img/images/author_03.png" alt=""/></li>
                                                    <li><img src="img/images/author_04.png" alt=""/></li>
                                                </ul>
                                            </div>
                                            <div className="customer__review-content">
                                                <div className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                                <span>4.7 (1,567 Reviews)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shape">
                                        <img src="img/images/about_shape02.png" alt="img" data-aos="fade-down-left" data-aos-delay="400"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about__shape-wrap">
                        <img src="img/images/about_shape01.png" alt="img" data-aos="fade-up-right" data-aos-delay="800"/>
                        <img src="img/images/about_shape03.png" alt="img" className="ribbonRotate"/>
                    </div>
                </div>
                <div className="marquee__area">
                    <div className="marquee__wrap">
                        <div className="marquee__box">
                            <Link href={"contact.html"}>Book For Online Appointment <img src="img/images/marquee_icon.svg" alt=""/></Link>
                            <Link href={"contact.html"}>Book For Online Appointment <img src="img/images/marquee_icon.svg" alt=""/></Link>
                            <Link href={"contact.html"}>Book For Online Appointment <img src="img/images/marquee_icon.svg" alt=""/></Link>
                            <Link href={"contact.html"}>Book For Online Appointment <img src="img/images/marquee_icon.svg" alt=""/></Link>
                        </div>
                        <div className="marquee__box">
                            <Link href={"contact.html"}>Book For Online Appointment <img src="img/images/marquee_icon.svg" alt=""/></Link>
                            <Link href={"contact.html"}>Book For Online Appointment <img src="img/images/marquee_icon.svg" alt=""/></Link>
                            <Link href={"contact.html"}>Book For Online Appointment <img src="img/images/marquee_icon.svg" alt=""/></Link>
                            <Link href={"contact.html"}>Book For Online Appointment <img src="img/images/marquee_icon.svg" alt=""/></Link>
                        </div>
                    </div>
                </div>
                <div className="services__area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-7">
                                <div className="section__title mb-40">
                                    <span className="sub-title">Delivering world className home care
                                        <strong className="shake">
                                            <img src="img/icon/pet_icon02.svg" alt="" className="injectable"/>
                                        </strong>
                                    </span>
                                    <h2 className="title">Providing Our Best Pet Care & Veterinary Services</h2>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-5">
                                <div className="view__all-btn text-end mb-40">
                                    <Link href="animal-details.html" className="btn border-btn">See All Services <img src="img/icon/right_arrow.svg" alt="" className="injectable"/></Link>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                <div className="services__item">
                                    <div className="services__shape">
                                        <div className="shape-one">
                                            <img src="img/images/services_shape01.svg" alt="" className="injectable"/>
                                        </div>
                                        <div className="shape-two">
                                            <img src="img/images/services_shape02.svg" alt="" className="injectable"/>
                                        </div>
                                    </div>
                                    <div className="services__icon">
                                        <i className="flaticon-vaccine"></i>
                                        <div className="services__icon-shape">
                                            <img src="img/images/services_icon_shape.svg" alt="" className="injectable"/>
                                        </div>
                                    </div>
                                    <div className="services__content">
                                        <h4 className="title"><Link href="animal-details.html">Pet Vaccination</Link></h4>
                                        <p>We will work with you to develop individu alised care plans including</p>
                                        <Link href="animal-details.html" className="btn border-btn">See Details <img src="img/icon/right_arrow02.svg" alt="" className="injectable"/></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                <div className="services__item">
                                    <div className="services__shape">
                                        <div className="shape-one">
                                            <img src="img/images/services_shape01.svg" alt="" className="injectable"/>
                                        </div>
                                        <div className="shape-two">
                                            <img src="img/images/services_shape02.svg" alt="" className="injectable"/>
                                        </div>
                                    </div>
                                    <div className="services__icon">
                                        <i className="flaticon-beauty-saloon"></i>
                                        <div className="services__icon-shape">
                                            <img src="img/images/services_icon_shape.svg" alt="" className="injectable"/>
                                        </div>
                                    </div>
                                    <div className="services__content">
                                        <h4 className="title"><Link href="animal-details.html">Pet Grooming</Link></h4>
                                        <p>We will work with you to develop individu alised care plans including</p>
                                        <Link href="animal-details.html" className="btn border-btn">See Details <img src="img/icon/right_arrow02.svg" alt="" className="injectable"/></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                <div className="services__item">
                                    <div className="services__shape">
                                        <div className="shape-one">
                                            <img src="img/images/services_shape01.svg" alt="" className="injectable"/>
                                        </div>
                                        <div className="shape-two">
                                            <img src="img/images/services_shape02.svg" alt="" className="injectable"/>
                                        </div>
                                    </div>
                                    <div className="services__icon">
                                        <i className="flaticon-vet"></i>
                                        <div className="services__icon-shape">
                                            <img src="img/images/services_icon_shape.svg" alt="" className="injectable"/>
                                        </div>
                                    </div>
                                    <div className="services__content">
                                        <h4 className="title"><Link href="animal-details.html">Pet Veterinary</Link></h4>
                                        <p>We will work with you to develop individu alised care plans including</p>
                                        <Link href="animal-details.html" className="btn border-btn">See Details <img src="img/icon/right_arrow02.svg" alt="" className="injectable"/></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                <div className="services__item">
                                    <div className="services__shape">
                                        <div className="shape-one">
                                            <img src="img/images/services_shape01.svg" alt="" className="injectable"/>
                                        </div>
                                        <div className="shape-two">
                                            <img src="img/images/services_shape02.svg" alt="" className="injectable"/>
                                        </div>
                                    </div>
                                    <div className="services__icon">
                                        <i className="flaticon-spay"></i>
                                        <div className="services__icon-shape">
                                            <img src="img/images/services_icon_shape.svg" alt="" className="injectable"/>
                                        </div>
                                    </div>
                                    <div className="services__content">
                                        <h4 className="title"><Link href="animal-details.html">Pet Surgery</Link></h4>
                                        <p>We will work with you to develop individu alised care plans including</p>
                                        <Link href="animal-details.html" className="btn border-btn">See Details <img src="img/icon/right_arrow02.svg" alt="" className="injectable"/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services__shape-wrap">
                        <img src="img/images/services_shape01.png" alt="img" className="ribbonRotate"/>
                        <img src="img/images/services_shape02.png" alt="img" data-aos="fade-up-right" data-aos-delay="800"/>
                        <img src="img/images/services_shape03.png" alt="img" data-aos="fade-down-left" data-aos-delay="400"/>
                    </div>
                </div>
                <div className="why__we-are-area">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-6 col-md-8 col-sm-10">
                                <div className="why__we-are-img">
                                    <img src="img/images/why_we_are_img.png" alt=""/>
                                    <div className="shape shape-one" data-aos="fade-down-right" data-aos-delay="500">
                                        <img src="img/images/why_shape01.svg" alt="" className="injectable"/>
                                    </div>
                                    <div className="shape shape-two" data-aos="fade-up-right" data-aos-delay="500">
                                        <img src="img/images/why_shape02.svg" alt="" className="injectable"/>
                                    </div>
                                    <div className="shape shape-three" data-aos="fade-up-left" data-aos-delay="500">
                                        <img src="img/images/why_shape03.svg" alt="" className="injectable"/>
                                    </div>
                                    <div className="shape shape-four ribbonRotate">
                                        <img src="img/images/why_shape04.svg" alt="" className="injectable"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="why__we-are-content">
                                    <div className="section__title mb-10">
                                        <span className="sub-title">Why We are The Best
                                            <strong className="shake">
                                                <img src="img/icon/pet_icon02.svg" alt="" className="injectable"/>
                                            </strong>
                                        </span>
                                        <h2 className="title">Pet emergencies <br/> what you need to know.</h2>
                                    </div>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse We understand that your furry friend is a treasured member of your family and deserves pets are the best care and attention possible.</p>
                                    <div className="why__list-box">
                                        <ul className="list-wrap">
                                            <li>
                                                <div className="why__list-box-item">
                                                    <div className="why__list-box-item-top">
                                                        <div className="icon">
                                                            <img src="img/icon/check_icon.svg" alt="" className="injectable"/>
                                                        </div>
                                                        <h4 className="title">More Experience</h4>
                                                    </div>
                                                    <p>Be confident in the treatment plan and your doctor’s abilities.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="why__list-box-item">
                                                    <div className="why__list-box-item-top">
                                                        <div className="icon">
                                                            <img src="img/icon/check_icon.svg" alt="" className="injectable"/>
                                                        </div>
                                                        <h4 className="title">Affordable Pricing</h4>
                                                    </div>
                                                    <p>Be confident in the treatment plan and your doctor’s abilities.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="why__list-box-item">
                                                    <div className="why__list-box-item-top">
                                                        <div className="icon">
                                                            <img src="img/icon/check_icon.svg" alt="" className="injectable"/>
                                                        </div>
                                                        <h4 className="title">Modern Pet Training</h4>
                                                    </div>
                                                    <p>Be confident in the treatment plan and your doctor’s abilities.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="why__list-box-item">
                                                    <div className="why__list-box-item-top">
                                                        <div className="icon">
                                                            <img src="img/icon/check_icon.svg" alt="" className="injectable"/>
                                                        </div>
                                                        <h4 className="title">Maintain a daily routine</h4>
                                                    </div>
                                                    <p>Be confident in the treatment plan and your doctor’s abilities.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="counter__area">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-5 col-md-8 order-0 order-lg-2">
                                <div className="counter__img">
                                    <div className="mask-img-wrap">
                                        <img src="img/images/counter_img.jpg" alt="img"/>
                                    </div>
                                    <div className="counter__img-shape">
                                        <img src="img/images/counter_img_shape.svg" alt="" className="injectable"/>
                                    </div>
                                    <div className="shape">
                                        <img src="img/images/counter_shape01.png" alt="img" className="ribbonRotate"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-7">
                                <div className="counter__content">
                                    <div className="section__title white-title mb-10">
                                        <span className="sub-title">Your Trust Our Prirority
                                            <strong className="shake">
                                                <img src="img/icon/pet_icon02.svg" alt="" className="injectable"/>
                                            </strong>
                                        </span>
                                        <h2 className="title">Professional vest care and guaranteed quality</h2>
                                    </div>
                                    <p>Duis aute irure dolor in repreerit in voluptate velit esse We understand that your furry friend treas ured member of your pets are.</p>
                                    <Link href="about.html" className="btn border-btn white-btn">Read More <img src="img/icon/right_arrow.svg" alt="" className="injectable"/></Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-5 order-3">
                                <div className="counter__item-wrap">
                                    <div className="counter__item">
                                        <h2 className="count"><span className="odometer" data-count="15"></span>+</h2>
                                        <p>27 years of experience</p>
                                    </div>
                                    <div className="counter__item">
                                        <h2 className="count"><span className="odometer" data-count="23"></span>K</h2>
                                        <p>Our Beloved Clients</p>
                                    </div>
                                    <div className="counter__item">
                                        <h2 className="count"><span className="odometer" data-count="15"></span>K+</h2>
                                        <p>Real Customer Reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="counter__shape">
                        <img src="img/images/counter_shape02.png" alt="img" data-aos="fade-up-left" data-aos-delay="400"/>
                    </div>
                </div>
                <div className="brand__area">
                    <div className="container">
                        <div className="brand__item-wrap">
                            <div className="swiper brand-active">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="brand__item">
                                            <img src="img/brand/brand_img01.png" alt="img"/>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="brand__item">
                                            <img src="img/brand/brand_img02.png" alt="img"/>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="brand__item">
                                            <img src="img/brand/brand_img03.png" alt="img"/>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="brand__item">
                                            <img src="img/brand/brand_img04.png" alt="img"/>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="brand__item">
                                            <img src="img/brand/brand_img05.png" alt="img"/>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="brand__item">
                                            <img src="img/brand/brand_img06.png" alt="img"/>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="brand__item">
                                            <img src="img/brand/brand_img07.png" alt="img"/>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="brand__item">
                                            <img src="img/brand/brand_img03.png" alt="img"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team__area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section__title text-center mb-40">
                                    <span className="sub-title">WE CHANGE YOUR LIFE & WORLD
                                        <strong className="shake">
                                            <img src="img/icon/pet_icon02.svg" alt="" className="injectable"/>
                                        </strong>
                                    </span>
                                    <h2 className="title">Meet Our Expertise <br/> Pet Doctors</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                <div className="team__item">
                                    <div className="team__item-img">
                                        <div className="mask-img-wrap">
                                            <img src="img/team/team_img01.jpg" alt="img"/>
                                        </div>
                                        <div className="team__item-img-shape">
                                            <div className="shape-one">
                                                <img src="img/team/team_img_shape01.svg" alt="" className="injectable"/>
                                            </div>
                                            <div className="shape-two">
                                                <img src="img/team/team_img_shape02.svg" alt="" className="injectable"/>
                                            </div>
                                        </div>
                                        <div className="team__social">
                                            <ul className="list-wrap">
                                                <li>
                                                    <Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></Link>
                                                </li>
                                                <li>
                                                    <Link href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.whatsapp.com/" target="_blank"><i className="fab fa-whatsapp"></i></Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team__item-content">
                                        <h4 className="title"><Link href="team-details.html">Daria Andaloro</Link></h4>
                                        <span>Veterinary Technician</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                <div className="team__item">
                                    <div className="team__item-img">
                                        <div className="mask-img-wrap">
                                            <img src="img/team/team_img02.jpg" alt="img"/>
                                        </div>
                                        <div className="team__item-img-shape">
                                            <div className="shape-one">
                                                <img src="img/team/team_img_shape01.svg" alt="" className="injectable"/>
                                            </div>
                                            <div className="shape-two">
                                                <img src="img/team/team_img_shape02.svg" alt="" className="injectable"/>
                                            </div>
                                        </div>
                                        <div className="team__social">
                                            <ul className="list-wrap">
                                                <li>
                                                    <Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></Link>
                                                </li>
                                                <li>
                                                    <Link href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.whatsapp.com/" target="_blank"><i className="fab fa-whatsapp"></i></Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team__item-content">
                                        <h4 className="title"><Link href="team-details.html">Michael Brian</Link></h4>
                                        <span>Medicine Specialist</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                <div className="team__item">
                                    <div className="team__item-img">
                                        <div className="mask-img-wrap">
                                            <img src="img/team/team_img03.jpg" alt="img"/>
                                        </div>
                                        <div className="team__item-img-shape">
                                            <div className="shape-one">
                                                <img src="img/team/team_img_shape01.svg" alt="" className="injectable"/>
                                            </div>
                                            <div className="shape-two">
                                                <img src="img/team/team_img_shape02.svg" alt="" className="injectable"/>
                                            </div>
                                        </div>
                                        <div className="team__social">
                                            <ul className="list-wrap">
                                                <li>
                                                    <Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></Link>
                                                </li>
                                                <li>
                                                    <Link href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.whatsapp.com/" target="_blank"><i className="fab fa-whatsapp"></i></Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team__item-content">
                                        <h4 className="title"><Link href="team-details.html">Kenroly Gajon</Link></h4>
                                        <span>Food Technician</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                <div className="team__item">
                                    <div className="team__item-img">
                                        <div className="mask-img-wrap">
                                            <img src="img/team/team_img04.jpg" alt="img"/>
                                        </div>
                                        <div className="team__item-img-shape">
                                            <div className="shape-one">
                                                <img src="img/team/team_img_shape01.svg" alt="" className="injectable"/>
                                            </div>
                                            <div className="shape-two">
                                                <img src="img/team/team_img_shape02.svg" alt="" className="injectable"/>
                                            </div>
                                        </div>
                                        <div className="team__social">
                                            <ul className="list-wrap">
                                                <li>
                                                    <Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></Link>
                                                </li>
                                                <li>
                                                    <Link href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.whatsapp.com/" target="_blank"><i className="fab fa-whatsapp"></i></Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team__item-content">
                                        <h4 className="title"><Link href="team-details.html">Lizay Arianya</Link></h4>
                                        <span>Veterinary Technician</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team__bottom-content">
                            <p>Our Valuable Expert Doctors Team</p>
                            <Link href="team.html" className="btn">See All Doctors <img src="img/icon/right_arrow.svg" alt="" className="injectable"/></Link>
                        </div>
                    </div>
                    <div className="team__shape">
                        <img src="img/team/team_shape.png" alt="img" className="ribbonRotate"/>
                    </div>
                </div>
                <div className="testimonial__area"/>
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-6 col-md-8 order-0 order-lg-2">
                                <div className="testimonial__img">
                                    <div className="mask-img testimonial__img-mask">
                                        <img src="img/images/testimonial_img.jpg" alt="img"/>
                                    </div>
                                    <div className="testimonial__img-shape">
                                        <div className="shape-one">
                                            <img src="img/images/testimonial_img_shape.svg" alt="" className="injectable"/>
                                        </div>
                                        <div className="shape-two">
                                            <img src="img/images/testimonial_shape03.png" alt="img" className="alltuchtopdown"/>
                                        </div>
                                    </div>
                                    <div className="review__box">
                                        <div className="review__box-shape">
                                            <img src="img/images/review_shape.svg" alt="" className="injectable"/>
                                        </div>
                                        <div className="review__box-content">
                                            <img src="img/icon/star.svg" alt="" className="injectable"/>
                                            <h2 className="title">1500+</h2>
                                            <span>Reviews</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testimonial__item-wrap">
                                    <div className="swiper testimonial-active">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="testimonial__item">
                                                    <div className="testimonial__icon">
                                                        <img src="img/icon/quote.svg" alt="" className="injectable"/>
                                                    </div>
                                                    <div className="testimonial__content">
                                                        <h2 className="title">Pet Health Important</h2>
                                                        <p>“ Duis aute irure dolor in repreerit in voluptate velitesse We understand that your furry aute irure dolor in repreerit in voluptate ute irure dolor in repreerit in voluptate understand that you ”</p>
                                                        <div className="testimonial__author">
                                                            <div className="testimonial__author-thumb">
                                                                <img src="img/images/testi_author01.png" alt=""/>
                                                            </div>
                                                            <div className="testimonial__author-content">
                                                                <h4 className="title">Uraney Jacke</h4>
                                                                <span>Business Study</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="testimonial__item">
                                                    <div className="testimonial__icon">
                                                        <img src="img/icon/quote.svg" alt="" className="injectable"/>
                                                    </div>
                                                    <div className="testimonial__content">
                                                        <h2 className="title">Pet Health Important</h2>
                                                        <p>“ Duis aute irure dolor in repreerit in voluptate velitesse We understand that your furry aute irure dolor in repreerit in voluptate ute irure dolor in repreerit in voluptate understand that you ”</p>
                                                        <div className="testimonial__author">
                                                            <div className="testimonial__author-thumb">
                                                                <img src="img/images/testi_author01.png" alt=""/>
                                                            </div>
                                                            <div className="testimonial__author-content">
                                                                <h4 className="title">Uraney Jacke</h4>
                                                                <span>Business Study</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial__shape-wrap">
                        <img src="img/images/testimonial_shape01.png" alt="img" data-aos="fade-down-right" data-aos-delay="400"/>
                        <img src="img/images/testimonial_shape02.png" alt="img" data-aos="fade-right" data-aos-delay="400"/>
                    </div>
                </div>
                <div className="registration__area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="registration__inner-wrap">
                                    <h2 className="title">Schedule a visit today!</h2>
                                    <div className="shape">
                                        <img src="img/images/registration_shape.svg" alt=""/>
                                    </div>
                                    <form action="#">
                                        <div className="row gutter-15">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="form-grp">
                                                    <label htmlFor="name">Name</label>
                                                    <input id="name" type="text" placeholder="Type Full Name"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="form-grp select-grp">
                                                    <label>Pet Type</label>
                                                    <select name="pet_type" className="orderby">
                                                        <option value="Select Pet Type">Select Pet Type</option>
                                                        <option value="Cat">Cat</option>
                                                        <option value="Dog">Dog</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="form-grp select-grp">
                                                    <label>Interest In</label>
                                                    <select name="interest" className="orderby">
                                                        <option value="Select Service">Select Service</option>
                                                        <option value="Pet Training">Pet Training</option>
                                                        <option value="Pet Grooming">Pet Grooming</option>
                                                        <option value="Care Services">Care Services</option>
                                                        <option value="Pet Boarding">Pet Boarding</option>
                                                        <option value="Pet Bath">Pet Bath</option>
                                                        <option value="Pet Adoption">Pet Adoption</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="form-grp">
                                                    <label htmlFor="date">Date</label>
                                                    <input id="date" className="textbox-n" type="date"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="form-grp">
                                                    <label htmlFor="time">Time</label>
                                                    <input id="time" placeholder="08:00 am - 10:00 am"/>
                                                    <i className="flaticon-three-o-clock-clock"></i>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="form-grp">
                                                    <label htmlFor="phone">Phone</label>
                                                    <input id="phone" type="number" placeholder="+123 888 ...."/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="submit__btn text-center mt-25">
                                            <button type="submit" className="btn">Start a Reservation <img src="img/icon/right_arrow.svg" alt="" className="injectable"/></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="blog__post-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <div className="section__title mb-40">
                                    <span className="sub-title">News & Blogs
                                        <strong className="shake">
                                            <img src="img/icon/pet_icon02.svg" alt="" className="injectable"/>
                                        </strong>
                                    </span>
                                    <h2 className="title">Our Recent Articles</h2>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="view__all-btn text-end mb-40">
                                    <Link href="blog.html" className="btn btn-two">See All Posts <img src="img/icon/right_arrow.svg" alt="" className="injectable"/></Link>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-8">
                                <div className="blog__post-item shine-animate-item">
                                    <div className="blog__post-thumb">
                                        <div className="blog__post-mask shine-animate">
                                            <Link href="blog-details.html"><img src="img/blog/blog_post01.jpg" alt="img"/></Link>
                                            <ul className="list-wrap blog__post-tag">
                                                <li><Link href="blog.html">Pet</Link></li>
                                                <li><Link href="blog.html">Medical</Link></li>
                                            </ul>
                                        </div>
                                        <div className="shape">
                                            <img src="img/blog/blog_img_shape.svg" alt="" className="injectable"/>
                                        </div>
                                    </div>
                                    <div className="blog__post-content">
                                        <div className="blog__post-meta">
                                            <ul className="list-wrap">
                                                <li><i className="flaticon-user"></i>by <Link href="blog-details.html">admin</Link></li>
                                                <li><i className="flaticon-calendar"></i>25th Aug, 2024</li>
                                            </ul>
                                        </div>
                                        <h2 className="title"><Link href="blog-details.html">Clean indoor air as important in controlling asthma</Link></h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-8">
                                <div className="blog__post-item shine-animate-item">
                                    <div className="blog__post-thumb">
                                        <div className="blog__post-mask shine-animate">
                                            <Link href="blog-details.html"><img src="img/blog/blog_post02.jpg" alt="img"/></Link>
                                            <ul className="list-wrap blog__post-tag">
                                                <li><Link href="blog.html">Care</Link></li>
                                            </ul>
                                        </div>
                                        <div className="shape">
                                            <img src="img/blog/blog_img_shape.svg" alt="" className="injectable"/>
                                        </div>
                                    </div>
                                    <div className="blog__post-content">
                                        <div className="blog__post-meta">
                                            <ul className="list-wrap">
                                                <li><i className="flaticon-user"></i>by <Link href="blog-details.html">admin</Link></li>
                                                <li><i className="flaticon-calendar"></i>25th Aug, 2024</li>
                                            </ul>
                                        </div>
                                        <h2 className="title"><Link href="blog-details.html">Clean indoor air as important in controlling asthma</Link></h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-8">
                                <div className="blog__post-item shine-animate-item">
                                    <div className="blog__post-thumb">
                                        <div className="blog__post-mask shine-animate">
                                            <Link href="blog-details.html"><img src="img/blog/blog_post03.jpg" alt="img"/></Link>
                                            <ul className="list-wrap blog__post-tag">
                                                <li><Link href="blog.html">Pet Care</Link></li>
                                            </ul>
                                        </div>
                                        <div className="shape">
                                            <img src="img/blog/blog_img_shape.svg" alt="" className="injectable"/>
                                        </div>
                                    </div>
                                    <div className="blog__post-content">
                                        <div className="blog__post-meta">
                                            <ul className="list-wrap">
                                                <li><i className="flaticon-user"></i>by <Link href="blog-details.html">admin</Link></li>
                                                <li><i className="flaticon-calendar"></i>25th Aug, 2024</li>
                                            </ul>
                                        </div>
                                        <h2 className="title"><Link href="blog-details.html">Clean indoor air as important in controlling asthma</Link></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog__shape-wrap">
                        <img src="img/blog/blog_shape01.png" alt="img" data-aos="fade-up-right" data-aos-delay="400"/>
                        <img src="img/blog/blog_shape02.png" alt="img" className="ribbonRotate"/>
                    </div>
                </div>
                <div className="instagram__area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="instagram__follow-btn">
                                    <Link href="https://www.instagram.com/" target="_blank">Follow Us On Instagram</Link>
                                </div>
                            </div>
                        </div>
                        <div className="swiper instagram-active">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="instagram__item">
                                        <Link href="https://www.instagram.com/" target="_blank"><img src="img/instagram/instagram_img01.jpg" alt=""/></Link>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="instagram__item">
                                        <Link href="https://www.instagram.com/" target="_blank"><img src="img/instagram/instagram_img02.jpg" alt=""/></Link>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="instagram__item">
                                        <Link href="https://www.instagram.com/" target="_blank"><img src="img/instagram/instagram_img03.jpg" alt=""/></Link>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="instagram__item">
                                        <Link href="https://www.instagram.com/" target="_blank"><img src="img/instagram/instagram_img04.jpg" alt=""/></Link>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="instagram__item">
                                        <Link href="https://www.instagram.com/" target="_blank"><img src="img/instagram/instagram_img05.jpg" alt=""/></Link>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="instagram__item">
                                        <Link href="https://www.instagram.com/" target="_blank"><img src="img/instagram/instagram_img03.jpg" alt=""/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </>
    );
  }