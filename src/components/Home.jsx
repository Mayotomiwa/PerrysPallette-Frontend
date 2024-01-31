import React, { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight, faClock, faEnvelope, faPhone, faLocation, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons';

import Container from 'react-bootstrap/Container';
import { Nav, Navbar, Image, Row, Col, Stack, Form, Button, NavbarBrand } from 'react-bootstrap';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade'

import Aos from 'aos';
import '../styles/Home.css';

import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

export default function Home() {
    useEffect(() => {
        Aos.init({
            duration: 3000,
        });
        Aos.refresh({
            duration: 3000,
        });
    }, []);
    return (
        <Container fluid className='body'>
            <div>
                {/* Header */}
                <Container fluid id="header" className="fixed-top align-items-center">
                    <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

                        <Navbar collapseOnSelect expand="lg" data-bs-theme="dark" id="navbar" className="navbar order-last order-lg-0">
                            <Container>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Brand href="#hero">
                                    <img src="src/assets/images/ppLogo.png" style={{ width: 70, height: 70 }} alt="" class="img-fluid p-0 ms-0 me-2" />
                                </Navbar.Brand>
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav>
                                        <Nav.Link href="#hero">Home</Nav.Link>
                                        <Nav.Link href="#about">About</Nav.Link>
                                        <Nav.Link href="#menu">Menu</Nav.Link>
                                        <Nav.Link href="#specials">Specials</Nav.Link>
                                        <Nav.Link href="#events">Events</Nav.Link>
                                        <Nav.Link href="#chefs">Chefs</Nav.Link>
                                        <Nav.Link href="#gallery">Gallery</Nav.Link>
                                        <Nav.Link href="#contact">Contact</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                        {/* <!-- .navbar --> */}
                        <a href="#book-a-table" className="book-a-table-btn scrollto d-none d-lg-flex">Book a table</a>

                    </div>
                </Container>
                {/* <!-- End Header --> */}

                {/* <!-- ======= Hero Section ======= --> */}
                <div id="hero" className="d-flex align-items-center">
                    <div className="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
                        <div className="row">
                            <div className="col-lg-8">
                                <h1>Welcome to <span>Perry's Palete</span></h1>
                                <h2>The home of international cuisines and delicatessen.</h2>
                                <h2 style={{ fontStyle: 'italic' }}>We make food shine, we shine through food.</h2>

                                <div className="btns">
                                    <a href="#menu" className="btn-menu animated fadeInUp scrollto">Our Menu</a>
                                    <a href="#book-a-table" className="btn-book animated fadeInUp scrollto">Book a Table</a>
                                </div>
                            </div>
                            <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
                                <a href="https://www.youtube.com/watch?v=GlrxcuEDyF8" className="glightbox play-btn"></a>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <!-- End Hero --> */}
                <main id="main">
                    {/* <!-- ======= About Section ======= --> */}
                    <section id="about" className="about overlay">
                        <Container data-aos="fade-up">
                            <Row>
                                <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
                                    <div className="about-img">
                                        <Image src="src/assets/img/about.jpg" rounded />
                                    </div>
                                </div>
                                <Col lg={6} className="pt-4 pt-lg-0 order-2 order-lg-1 content" >
                                    <h3>The Story</h3>
                                    <h5 className="fst-italic story">
                                        In the bustling heart of Houston, perry’s palete thrived.
                                        From corporate events to lavish weddings, our expertise has thrived.
                                        With our delicious dishes, precision and flair, we turned gatherings into memorable dates.
                                        Houston's tastebuds have rejoiced, for our company's cuisine is truly top-rate
                                    </h5>
                                    <Stack direction='horizontal' className='fst-bolder story' gap={3}>
                                        <div className='col-lg-6 col-sm-12 col-md-12'>
                                            <h3>2019</h3>
                                            <p className='fst-italic'>
                                                In this captivating year, our venture began its rise,In the heart of Houston,
                                                where our culinary dreams did materialize. With dedication and flair,
                                                we navigated the catering circuit, From small gatherings to grand galas,
                                                our reputation took flight.
                                            </p>
                                        </div>
                                        <div className='col-lg-6 col-md-12 col-sm-12'>
                                            <h3>2023</h3>
                                            <p className='fst-italic'>
                                                In this remarkable year, our perry’s palete has soared,
                                                Houston's culinary scene embraced us, and our presence roared.
                                                From exquisite galas to intimate celebrations.
                                                with our passion for food and impeccable service, we left a lasting mark.
                                                With each event, our reputation grows, as clients praise our culinary art.
                                            </p>
                                        </div>

                                    </Stack>

                                </Col>
                            </Row>

                        </Container>
                    </section>
                    {/* <!-- End About Section --> */}

                    {/* Why Us Section  */}
                    <section id="why-us" className="why-us">
                        <div className="container" data-aos="fade-up">

                            <div className="section-title">
                                <h2>Why Us</h2>
                                <p>Why Choose Our Restaurant</p>
                            </div>

                            <div className="row">

                                <div className="col-lg-4">
                                    <div className="box" data-aos="zoom-in" data-aos-delay="100">
                                        <span>01</span>
                                        <h4>Lorem Ipsum</h4>
                                        <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 mt-4 mt-lg-0">
                                    <div className="box" data-aos="zoom-in" data-aos-delay="200">
                                        <span>02</span>
                                        <h4>Repellat Nihil</h4>
                                        <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 mt-4 mt-lg-0">
                                    <div className="box" data-aos="zoom-in" data-aos-delay="300">
                                        <span>03</span>
                                        <h4> Ad ad velit qui</h4>
                                        <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>
                    {/* End Why Us Section */}

                    {/* Menu Section */}
                    <section id="menu" className="menu section-bg">
                        <Container data-aos="fade-up">

                            <div className="section-title">
                                <h2>Menu</h2>
                                <p>Check Our Tasty Menu</p>
                            </div>
                            <Row className="row menu-container" data-aos="fade-up" data-aos-delay="200">

                                <Col lg={6} className="menu-item">
                                    <img src="src/assets/img/menu/lobster-bisque.jpg" className="menu-img" alt="" />
                                    <div className="menu-content">
                                        <a href="#">Lobster Bisque</a><span>$5.95</span>
                                    </div>
                                    <div className="menu-ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </div>
                                </Col>

                                <Col lg={6} className="menu-item">
                                    <img src="src/assets/img/menu/bread-barrel.jpg" className="menu-img" alt="" />
                                    <div className="menu-content">
                                        <a href="#">Bread Barrel</a><span>$6.95</span>
                                    </div>
                                    <div className="menu-ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </div>
                                </Col>

                                <Col lg={6} className="menu-item">
                                    <img src="src/assets/img/menu/cake.jpg" className="menu-img" alt="" />
                                    <div className="menu-content">
                                        <a href="#">Crab Cake</a><span>$7.95</span>
                                    </div>
                                    <div className="menu-ingredients">
                                        A delicate crab cake served on a toasted roll with lettuce and tartar sauce
                                    </div>
                                </Col>

                                <Col lg={6} className="menu-item">
                                    <img src="src/assets/img/menu/caesar.jpg" className="menu-img" alt="" />
                                    <div className="menu-content">
                                        <a href="#">Caesar Selections</a><span>$8.95</span>
                                    </div>
                                    <div className="menu-ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </div>
                                </Col>

                                <Col lg={6} className="menu-item">
                                    <img src="src/assets/img/menu/tuscan-grilled.jpg" className="menu-img" alt="" />
                                    <div className="menu-content">
                                        <a href="#">Tuscan Grilled</a><span>$9.95</span>
                                    </div>
                                    <div className="menu-ingredients">
                                        Grilled chicken with provolone, artichoke hearts, and roasted red pesto
                                    </div>
                                </Col>

                                <Col lg={6} className="menu-item">
                                    <img src="src/assets/img/menu/mozzarella.jpg" className="menu-img" alt="" />
                                    <div className="menu-content">
                                        <a href="#">Mozzarella Stick</a><span>$4.95</span>
                                    </div>
                                    <div className="menu-ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </div>
                                </Col>

                                <Col lg={6} className="menu-item">
                                    <img src="src/assets/img/menu/greek-salad.jpg" className="menu-img" alt="" />
                                    <div className="menu-content">
                                        <a href="#">Greek Salad</a><span>$9.95</span>
                                    </div>
                                    <div className="menu-ingredients">
                                        Fresh spinach, crisp romaine, tomatoes, and Greek olives
                                    </div>
                                </Col>

                                <Col lg={6} className="menu-item">
                                    <img src="src/assets/img/menu/spinach-salad.jpg" className="menu-img" alt="" />
                                    <div className="menu-content">
                                        <a href="#">Spinach Salad</a><span>$9.95</span>
                                    </div>
                                    <div className="menu-ingredients">
                                        Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette
                                    </div>
                                </Col>

                                <Col lg={6} className="menu-item">
                                    <img src="src/assets/img/menu/lobster-roll.jpg" className="menu-img" alt="" />
                                    <div className="menu-content">
                                        <a href="#">Lobster Roll</a><span>$12.95</span>
                                    </div>
                                    <div className="menu-ingredients">
                                        Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll
                                    </div>
                                </Col>

                            </Row>
                        </Container>
                    </section>
                    {/* End Menu Section */}
                    {/* Events Section */}
                    <section id="events" className="events">
                        <div className="container" data-aos="fade-up">

                            <div className="section-title">
                                <h2>Events</h2>
                                <p>Book Us For Your Events</p>
                            </div>

                            <div className="events-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
                                <Swiper
                                    modules={[Pagination, Autoplay, EffectFade]}
                                    pagination={{ clickable: true }}
                                    autoplay={true}
                                    loop={true}
                                    speed={2000}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                >
                                    <SwiperSlide>
                                        <Row className="event-item">
                                            <Col lg={6}>
                                                <img src="src/assets/img/event-birthday.jpg" className="img-fluid" alt="" />
                                            </Col>
                                            <Col lg={6} className="pt-4 pt-lg-0 content">
                                                <h3>Birthday Parties</h3>
                                                <div className="price">
                                                    <p><span>$189</span></p>
                                                </div>
                                                <p className="fst-italic">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                                    magna aliqua.
                                                </p>
                                                <ul>
                                                    <li> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                                    <li> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                                    <li> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                                </ul>
                                                <p>
                                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                    velit esse cillum dolore eu fugiat nulla pariatur
                                                </p>
                                            </Col>
                                        </Row>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Row className="event-item">
                                            <Col lg={6}>
                                                <img src="src/assets/img/event-private.jpg" className="img-fluid" alt="" />
                                            </Col>
                                            <Col lg={6} className="pt-4 pt-lg-0 content">
                                                <h3>Private Parties</h3>
                                                <div className="price">
                                                    <p><span>$290</span></p>
                                                </div>
                                                <p className="fst-italic">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                                    magna aliqua.
                                                </p>
                                                <ul>
                                                    <li> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                                    <li> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                                    <li> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                                </ul>
                                                <p>
                                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                    velit esse cillum dolore eu fugiat nulla pariatur
                                                </p>
                                            </Col>
                                        </Row>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Row className="event-item">
                                            <Col lg={6}>
                                                <img src="src/assets/img/event-custom.jpg" className="img-fluid" alt="" />
                                            </Col>
                                            <Col lg={6} className="pt-4 pt-lg-0 content">
                                                <h3>Custom Parties</h3>
                                                <div className="price">
                                                    <p><span>$99</span></p>
                                                </div>
                                                <p className="fst-italic">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                                    magna aliqua.
                                                </p>
                                                <ul>
                                                    <li> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                                    <li> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                                    <li> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                                </ul>
                                                <p>
                                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                    velit esse cillum dolore eu fugiat nulla pariatur
                                                </p>
                                            </Col>
                                        </Row>
                                    </SwiperSlide>
                                </Swiper>
                            </div>

                        </div>
                    </section>
                    {/* End Events Section */}
                    {/* Book A Table Section */}
                    <section id="book-a-table" className="book-a-table">
                        <div className="container" data-aos="fade-up">

                            <div className="section-title">
                                <h2>Reservation</h2>
                                <p>Book a Table</p>
                            </div>

                            <Form className='book-a-table-form' data-aos="fade-up" data-aos-delay="100">
                                <Row className='form-items'>
                                    <Form.Group className="col-lg-4 col-md-6">
                                        <Form.Control className='form-item' type="text" id="name" placeholder="Your Name" />
                                    </Form.Group>
                                    <Form.Group className=" col-lg-4 col-md-6 mt-3 mt-md-0">
                                        <Form.Control className='form-item' type="email" id="email" placeholder="Your Email" />
                                    </Form.Group>
                                    <Form.Group className=" col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                                        <Form.Control className='form-item' type="text" id="phone" placeholder="Your Phone" />
                                    </Form.Group>
                                    <Form.Group className=" col-lg-4 col-md-6 form-group mt-3">
                                        <Form.Control className='form-item' type="text" id="date" placeholder="Date" />
                                    </Form.Group>
                                    <Form.Group className=" col-lg-4 col-md-6 form-group mt-3">
                                        <Form.Control className='form-item' type="text" id="time" placeholder="Time" />
                                    </Form.Group>
                                    <Form.Group className="  col-lg-4 col-md-6 form-group mt-3">
                                        <Form.Control className='form-item' type="number" id="people" placeholder="Number of Guests" />
                                    </Form.Group>
                                </Row>
                                <Form.Group className="mt-3">
                                    <Form.Control className='form-text' as="textarea" rows="5" placeholder="Message" />
                                </Form.Group>
                                {/* <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
                            </div> */}
                                <div className="text-center"><Button className='mt-5 btn-table' type="submit">Book a Table</Button></div>
                            </Form>

                        </div>
                    </section>
                    {/* End Book A Table Section */}
                    {/* Testimonials Section */}
                    <section id="testimonials" class="testimonials section-bg">
                        <div class="container" data-aos="fade-up">

                            <div class="section-title">
                                <h2>Testimonials</h2>
                                <p>What they're saying about us</p>
                            </div>

                            <div class="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
                                <Swiper
                                    modules={[Pagination, Autoplay, EffectFade]}
                                    pagination={{ clickable: true }}
                                    autoplay={true}
                                    loop={true}
                                    speed={2000}
                                    spaceBetween={50}
                                    slidesPerView={2}
                                >
                                    <SwiperSlide>
                                        <div class="testimonial-item">
                                            <p>
                                                <FontAwesomeIcon icon={faQuoteLeft} style={{ color: '#ed3c0d', fontSize: 30 }} />
                                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                                <FontAwesomeIcon icon={faQuoteRight} style={{ color: '#ed3c0d', fontSize: 30 }} />
                                            </p>
                                            <img src="src/assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="" />
                                            <h3>Saul Goodman</h3>
                                        </div>
                                    </SwiperSlide>
                                    {/* End testimonial item */}

                                    <SwiperSlide>
                                        <div class="testimonial-item">
                                            <p>
                                                <FontAwesomeIcon icon={faQuoteLeft} style={{ color: '#ed3c0d', fontSize: 30 }} />
                                                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                                <FontAwesomeIcon icon={faQuoteRight} style={{ color: '#ed3c0d', fontSize: 30 }} />
                                            </p>
                                            <img src="src/assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt="" />
                                            <h3>Sara Wilsson</h3>
                                        </div>
                                    </SwiperSlide>
                                    {/* End testimonial item */}

                                    <SwiperSlide class="swiper-slide">
                                        <div class="testimonial-item">
                                            <p>
                                                <FontAwesomeIcon icon={faQuoteLeft} style={{ color: '#ed3c0d', fontSize: 30 }} />
                                                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                                <FontAwesomeIcon icon={faQuoteRight} style={{ color: '#ed3c0d', fontSize: 30 }} />
                                            </p>
                                            <img src="src/assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt="" />
                                            <h3>Jena Karlis</h3>
                                        </div>
                                    </SwiperSlide>
                                    {/* End testimonial item */}

                                    <SwiperSlide class="swiper-slide">
                                        <div class="testimonial-item">
                                            <p>
                                                <FontAwesomeIcon icon={faQuoteLeft} style={{ color: '#ed3c0d', fontSize: 30 }} />
                                                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                                <FontAwesomeIcon icon={faQuoteRight} style={{ color: '#ed3c0d', fontSize: 30 }} />
                                            </p>
                                            <img src="src/assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt="" />
                                            <h3>Matt Brandon</h3>
                                        </div>
                                    </SwiperSlide>
                                    {/* End testimonial item */}

                                    <SwiperSlide class="swiper-slide">
                                        <div class="testimonial-item">
                                            <p>
                                                <FontAwesomeIcon icon={faQuoteLeft} style={{ color: '#ed3c0d', fontSize: 30 }} />
                                                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                                <FontAwesomeIcon icon={faQuoteLeft} style={{ color: '#ed3c0d', fontSize: 30 }} />
                                            </p>
                                            <img src="src/assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt="" />
                                            <h3>John Larson</h3>
                                        </div>
                                    </SwiperSlide>
                                    {/* End testimonial item */}

                                </Swiper>
                            </div>

                        </div>
                    </section>
                    {/* End Testimonials Section */}
                    {/* Chefs Section */}
                    <section id="chefs" className="chefs">
                        <div className="container" data-aos="fade-up">

                            <div className="section-title">
                                <h2>Chefs</h2>
                                <p>Our Proffesional Chefs</p>
                            </div>

                            <Row>

                                <Col lg={4} md={6}>
                                    <div className="member" data-aos="zoom-in" data-aos-delay="100">
                                        <img src="src/assets/img/chefs/chefs-1.jpg" className="img-fluid" alt="" />
                                        <div className="member-info">
                                            <div className="member-info-content">
                                                <h4>Walter White</h4>
                                                <span>Master Chef</span>
                                            </div>
                                            <div className="social">
                                                <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                                                <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
                                                <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                                                <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={4} md={6}>
                                    <div className="member" data-aos="zoom-in" data-aos-delay="200">
                                        <img src="src/assets/img/chefs/chefs-2.jpg" className="img-fluid" alt="" />
                                        <div className="member-info">
                                            <div className="member-info-content">
                                                <h4>Sarah Jhonson</h4>
                                                <span>Patissier</span>
                                            </div>
                                            <div className="social">
                                                <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                                                <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
                                                <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                                                <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={4} md={6}>
                                    <div className="member" data-aos="zoom-in" data-aos-delay="300">
                                        <img src="src/assets/img/chefs/chefs-3.jpg" className="img-fluid" alt="" />
                                        <div className="member-info">
                                            <div className="member-info-content">
                                                <h4>William Anderson</h4>
                                                <span>Cook</span>
                                            </div>
                                            <div className="social">
                                                <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                                                <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
                                                <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                                                <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                            </Row>

                        </div>
                    </section>
                    {/* End Chefs Section */}
                    {/* Contact Section */}
                    <section id="contact" className="contact">
                        <Container data-aos="fade-up">

                            <div className="section-title">
                                <h2>Contact</h2>
                                <p>Contact Us</p>
                            </div>
                        </Container>
                        <div data-aos="fade-up">
                            <iframe style={{ border: 0, width: '100%', height: 350, }} src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=15250, Gray Ridge Drive, Houston, Texas, USA&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" allowFullScreen></iframe>
                        </div>
                        <Container data-aos="fade-up">
                            <Row className="mt-5">
                                <Col lg={4}>
                                    <div className="info">
                                        <div className="address">
                                            <div className='icons'>
                                                <FontAwesomeIcon icon={faLocation} />
                                            </div>
                                            <h4>Location:</h4>
                                            <p>15250, Gray Ridge Drive, Houston, Texas, USA</p>
                                        </div>
                                        <div className="open-hours">
                                            <div className="icons">
                                                <FontAwesomeIcon icon={faClock} />
                                            </div>
                                            <h4>Open Hours:</h4>
                                            <p>
                                                Monday-Saturday:<br />
                                                8:00 AM - 7:00 PM
                                            </p>
                                        </div>
                                        <div className="email">
                                            <div className="icons">
                                                <FontAwesomeIcon icon={faEnvelope} />
                                            </div>
                                            <h4>Email:</h4>
                                            <p>info@perryspalete.com</p>
                                        </div>
                                        <div className="phone">
                                            <div className="icons">
                                                <FontAwesomeIcon icon={faPhone} />
                                            </div>
                                            <h4>Call:</h4>
                                            <p>+1 346-242-3200</p>
                                        </div>
                                    </div>
                                </Col>
                                <div className="col-lg-8 mt-5 mt-lg-0">
                                    <Form>
                                        <Row>
                                            <Form.Group className="form-item col-md-6">
                                                <Form.Control type="text" id="name" placeholder="Your Name" className='form-items' required />
                                            </Form.Group>
                                            <Form.Group className="col-md-6 mt-3 mt-md-0">
                                                <Form.Control type="email" id="email" placeholder="Your Email" className='form-items' required />
                                            </Form.Group>
                                        </Row>
                                        <Form.Group className="mt-3">
                                            <Form.Control type="text" id="subject" placeholder="Subject" className='form-items' required />
                                        </Form.Group>
                                        <Form.Group className="mt-3">
                                            <Form.Control as="textarea" className="form-text" name="message" rows="8" placeholder="Message" required />
                                        </Form.Group>
                                        {/* <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div> */}
                                        <div className="text-center"><Button className='btn-message mt-5' type="submit">Send Message</Button></div>
                                    </Form>
                                </div>
                            </Row>
                        </Container>
                    </section>
                    {/* End Contact Section */}
                </main>
                {/* End Sections */}

                {/* Footer */}
                <div id="footer">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-3 col-md-6">
                                    <div className="footer-info">
                                        <span>
                                            <img src="src/assets/images/ppLogo.png" style={{ width: 70, height: 70 }} alt="" class="img-fluid p-0 ms-0 me-2" />
                                            <h3>Perry's Palete</h3>
                                        </span>
                                        <p>
                                            A108 Adam Street <br />
                                            NY 535022, USA<br /><br />
                                            <strong>Phone:</strong> +1 5589 55488 55<br />
                                            <strong>Email:</strong> info@example.com<br />
                                        </p>
                                        <div className="social-links mt-3">
                                            <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                                            <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
                                            <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                                            <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                                            <a href=""><FontAwesomeIcon icon={faSkype} /></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-2 col-md-6 footer-links">
                                    <h4>Useful Links</h4>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faChevronRight} className='icons' /> <a className='ms-2' href="#">Home</a></li>
                                        <li><FontAwesomeIcon icon={faChevronRight} className='icons' /> <a className='ms-2' href="#">About us</a></li>
                                        <li><FontAwesomeIcon icon={faChevronRight} className='icons' /> <a className='ms-2' href="#">Services</a></li>
                                        <li><FontAwesomeIcon icon={faChevronRight} className='icons' /> <a className='ms-2' href="#">Menu</a></li>
                                    </ul>
                                </div>

                                <div className="col-lg-3 col-md-6 footer-links">
                                    <h4>Our Services</h4>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faChevronRight} className='icons' /> <a className='ms-2' href="#">Available for Bookings</a></li>
                                        <li><FontAwesomeIcon icon={faChevronRight} className='icons' /> <a className='ms-2' href="#">Special Menus</a></li>
                                        <li><FontAwesomeIcon icon={faChevronRight} className='icons' /> <a className='ms-2' href="#">Delivery</a></li>
                                    </ul>
                                </div>

                                <Form className="col-lg-4 col-md-6 footer-newsletter">
                                    <h4>Our Newsletter</h4>
                                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                    <Form.Group className='form-item'>
                                        <Form.Control type="email" name="email" className='form-items-email' /><Form.Control type="submit" value="Subscribe" className='form-items-submit' />
                                    </Form.Group>

                                </Form>

                            </div>
                        </div>
                    </div>

                    <Container className="container">
                        <div className="copyright">
                            &copy; Copyright <strong><span style={{ color: '#ed3c0d' }}>Perry's Palete</span></strong>. All Rights Reserved
                        </div>
                        <div className='credits'>
                            <span style={{ color: '#ed3c0d' }}>Designed by:</span><span style={{ fontStyle: 'italic' }}> Oluseyi Mayotomiwa Immanuel</span>
                        </div>
                    </Container>
                </div>
                {/* End Footer */}

            </div>
        </Container >
    )
}