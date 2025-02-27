import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayproduct } from "../features/productDetailSlide";

const Index = ()=>{
   
    const {products,loading} = useSelector((state)=>state.product)
    const dispatch = useDispatch()

    const [filter,setfilter]  = useState()
    const [filteredProducts, setFilterdProducts] = useState([])

    const filterHandler = (value)=>{
      
        setfilter(value)
    }

    useEffect(()=>{
        if(filter)
        {
            setFilterdProducts(products.filter(ele=>ele.category===filter))
        }
        else{
            setFilterdProducts(products)
        }
        
    },[products,filter])

  
    useEffect(()=>{
        dispatch(displayproduct())
    },[])

   return <>    

    <div className="container-fluid fixed-top">
        <div className="container topbar bg-primary d-none d-lg-block">
            <div className="d-flex justify-content-between">
                <div className="top-info ps-2">
                    <small className="me-3"><i className="fas fa-map-marker-alt me-2 text-secondary"></i> <a href="#" className="text-white">123 Street, New York</a></small>
                    <small className="me-3"><i className="fas fa-envelope me-2 text-secondary"></i><a href="#" className="text-white">Email@Example.com</a></small>
                </div>
                <div className="top-link pe-2">
                    <a href="#" className="text-white"><small className="text-white mx-2">Privacy Policy</small>/</a>
                    <a href="#" className="text-white"><small className="text-white mx-2">Terms of Use</small>/</a>
                    <a href="#" className="text-white"><small className="text-white ms-2">Sales and Refunds</small></a>
                </div>
            </div>
        </div>
        <div className="container px-0">
            <nav className="navbar navbar-light bg-white navbar-expand-xl">
                <a href="index.html" className="navbar-brand"><h1 className="text-primary display-6">Fruitables</h1></a>
                <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars text-primary"></span>
                </button>
                <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                    <div className="navbar-nav mx-auto">
                        <a href="index.html" className="nav-item nav-link active">Home</a>
                        <a href="shop.html" className="nav-item nav-link">Shop</a>
                        <a href="shop-detail.html" className="nav-item nav-link">Shop Detail</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0 bg-secondary rounded-0">
                                <a href="cart.html" className="dropdown-item">Cart</a>
                                <a href="chackout.html" className="dropdown-item">Chackout</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="404.html" className="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                    <div className="d-flex m-3 me-0">
                        <button className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search text-primary"></i></button>
                        <a href="#" className="position-relative me-4 my-auto">
                            <i className="fa fa-shopping-bag fa-2x"></i>
                            <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{top: "-5px", left: "15px", height: "20px", minWidth: "20px"}}>3</span>
                        </a>
                        <a href="#" className="my-auto">
                            <i className="fas fa-user fa-2x"></i>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
   
    <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
            <div className="modal-content rounded-0">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Search by keyword</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body d-flex align-items-center">
                    <div className="input-group w-75 mx-auto d-flex">
                        <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1"/>
                        <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    <div className="container-fluid py-5 mb-5 hero-header">
        <div className="container py-5">
            <div className="row g-5 align-items-center">
                <div className="col-md-12 col-lg-7">
                    <h4 className="mb-3 text-secondary">100% Organic Foods</h4>
                    <h1 className="mb-5 display-3 text-primary">Organic Veggies & Fruits Foods</h1>
                    <div className="position-relative mx-auto">
                        <input className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill" type="number" placeholder="Search"/>
                        <button type="submit" className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100" style={{top: "0", right: "25%"}}>Submit Now</button>
                    </div>
                </div>
                <div className="col-md-12 col-lg-5">
                    <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel">
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active rounded">
                                <img src="img/hero-img-1.png" className="img-fluid w-100 h-100 bg-secondary rounded" alt="First slide"/>
                                <a href="#" className="btn px-4 py-2 text-white rounded">Fruites</a>
                            </div>
                            <div className="carousel-item rounded">
                                <img src="img/hero-img-2.jpg" className="img-fluid w-100 h-100 rounded" alt="Second slide"/>
                                <a href="#" className="btn px-4 py-2 text-white rounded">Vesitables</a>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div className="container-fluid featurs py-5">
        <div className="container py-5">
            <div className="row g-4">
                <div className="col-md-6 col-lg-3">
                    <div className="featurs-item text-center rounded bg-light p-4">
                        <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                            <i className="fas fa-car-side fa-3x text-white"></i>
                        </div>
                        <div className="featurs-content text-center">
                            <h5>Free Shipping</h5>
                            <p className="mb-0">Free on order over $300</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="featurs-item text-center rounded bg-light p-4">
                        <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                            <i className="fas fa-user-shield fa-3x text-white"></i>
                        </div>
                        <div className="featurs-content text-center">
                            <h5>Security Payment</h5>
                            <p className="mb-0">100% security payment</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="featurs-item text-center rounded bg-light p-4">
                        <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                            <i className="fas fa-exchange-alt fa-3x text-white"></i>
                        </div>
                        <div className="featurs-content text-center">
                            <h5>30 Day Return</h5>
                            <p className="mb-0">30 day money guarantee</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="featurs-item text-center rounded bg-light p-4">
                        <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                            <i className="fa fa-phone-alt fa-3x text-white"></i>
                        </div>
                        <div className="featurs-content text-center">
                            <h5>24/7 Support</h5>
                            <p className="mb-0">Support every time fast</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 
    <div className="container-fluid fruite py-5">
        <div className="container py-5">
            <div className="tab-class text-center">
                <div className="row g-4">
                    <div className="col-lg-4 text-start">
                        <h1>Our Organic Products</h1>
                    </div>
                    <div className="col-lg-8 text-end">
                        <ul className="nav nav-pills d-inline-flex text-center mb-5">
                            <li className="nav-item">
                                <a  className={`d-flex py-2 m-2 bg-light rounded-pill ${filter==undefined && 'active'} `} >
                                    <span className="text-dark" style={{width: "130px"}} onClick={()=>filterHandler()}>All Products</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={`d-flex py-2 m-2 bg-light rounded-pill ${filter=='Vegetables' && 'active'} `}>
                                    <span className="text-dark" style={{width: "130px"}} onClick={()=>filterHandler("Vegetables")}>Vegetables</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a  className={`d-flex py-2 m-2 bg-light rounded-pill ${filter=='Fruits' && 'active'} `}>
                                    <span className="text-dark" style={{width: "130px"}} onClick={()=>filterHandler("Fruits")}>Fruits</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={`d-flex py-2 m-2 bg-light rounded-pill ${filter=='Breads' && 'active'} `}>
                                    <span  className="text-dark" style={{width: "130px"}} onClick={()=>filterHandler("Breads")}>Bread</span>
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div className="tab-content">
                    <div id="tab-1" className="tab-pane fade show p-0 active">
                        <div className="row g-4">
                            <div className="col-lg-12">
                                <div className="row g-4">
                                    {filteredProducts.map(ele=> <div className="col-md-6 col-lg-4 col-xl-3">
                                        <div className="rounded position-relative fruite-item">
                                            <div className="fruite-img">
                                                <img src="https://picsum.photos/id/1/200/300" className="img-fluid w-100 rounded-top" alt=""/>
                                            </div>
                                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px", left: "10px"}}>{ele.category}</div>
                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                <h4>{ele.name}</h4>
                                                <p>{ele.description}</p>
                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                    <p className="text-dark fs-5 fw-bold mb-0">${ele.price} / kg</p>
                                                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)}
                                   
                               
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="tab-2" className="tab-pane fade show p-0">
                        <div className="row g-4">
                            <div className="col-lg-12">
                                <div className="row g-4">
                                    <div className="col-md-6 col-lg-4 col-xl-3">
                                        <div className="rounded position-relative fruite-item">
                                            <div className="fruite-img">
                                                <img src="img/fruite-item-5.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                                            </div>
                                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px", left: "10px"}}>Fruits</div>
                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                <h4>Grapes</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                    <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-xl-3">
                                        <div className="rounded position-relative fruite-item">
                                            <div className="fruite-img">
                                                <img src="img/fruite-item-2.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                                            </div>
                                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px", left: "10px"}}>Fruits</div>
                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                <h4>Raspberries</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                    <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="tab-3" className="tab-pane fade show p-0">
                        <div className="row g-4">
                            <div className="col-lg-12">
                                <div className="row g-4">
                                    <div className="col-md-6 col-lg-4 col-xl-3">
                                        <div className="rounded position-relative fruite-item">
                                            <div className="fruite-img">
                                                <img src="img/fruite-item-1.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                                            </div>
                                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px", left: "10px"}}>Fruits</div>
                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                <h4>Oranges</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                    <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-xl-3">
                                        <div className="rounded position-relative fruite-item">
                                            <div className="fruite-img">
                                                <img src="img/fruite-item-6.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                                            </div>
                                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px", left: "10px"}}>Fruits</div>
                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                <h4>Apple</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                    <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="tab-4" className="tab-pane fade show p-0">
                        <div className="row g-4">
                            <div className="col-lg-12">
                                <div className="row g-4">
                                    <div className="col-md-6 col-lg-4 col-xl-3">
                                        <div className="rounded position-relative fruite-item">
                                            <div className="fruite-img">
                                                <img src="img/fruite-item-5.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                                            </div>
                                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px", left: "10px"}}>Fruits</div>
                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                <h4>Grapes</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                    <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-xl-3">
                                        <div className="rounded position-relative fruite-item">
                                            <div className="fruite-img">
                                                <img src="img/fruite-item-4.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                                            </div>
                                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px", left: "10px"}}>Fruits</div>
                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                <h4>Apricots</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                    <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="tab-5" className="tab-pane fade show p-0">
                        <div className="row g-4">
                            <div className="col-lg-12">
                                <div className="row g-4">
                                    <div className="col-md-6 col-lg-4 col-xl-3">
                                        <div className="rounded position-relative fruite-item">
                                            <div className="fruite-img">
                                                <img src="img/fruite-item-3.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                                            </div>
                                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px", left: "10px"}}>Fruits</div>
                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                <h4>Banana</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                    <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-xl-3">
                                        <div className="rounded position-relative fruite-item">
                                            <div className="fruite-img">
                                                <img src="img/fruite-item-2.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                                            </div>
                                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px", left: "10px"}}>Fruits</div>
                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                <h4>Raspberries</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                    <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-xl-3">
                                        <div className="rounded position-relative fruite-item">
                                            <div className="fruite-img">
                                                <img src="img/fruite-item-1.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                                            </div>
                                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px", left: "10px"}}>Fruits</div>
                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                <h4>Oranges</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                    <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
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
    </div>
  
    <div className="container-fluid service py-5">
        <div className="container py-5">
            <div className="row g-4 justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <a href="#">
                        <div className="service-item bg-secondary rounded border border-secondary">
                            <img src="img/featur-1.jpg" className="img-fluid rounded-top w-100" alt=""/>
                            <div className="px-4 rounded-bottom">
                                <div className="service-content bg-primary text-center p-4 rounded">
                                    <h5 className="text-white">Fresh Apples</h5>
                                    <h3 className="mb-0">20% OFF</h3>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-6 col-lg-4">
                    <a href="#">
                        <div className="service-item bg-dark rounded border border-dark">
                            <img src="img/featur-2.jpg" className="img-fluid rounded-top w-100" alt=""/>
                            <div className="px-4 rounded-bottom">
                                <div className="service-content bg-light text-center p-4 rounded">
                                    <h5 className="text-primary">Tasty Fruits</h5>
                                    <h3 className="mb-0">Free delivery</h3>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-6 col-lg-4">
                    <a href="#">
                        <div className="service-item bg-primary rounded border border-primary">
                            <img src="img/featur-3.jpg" className="img-fluid rounded-top w-100" alt=""/>
                            <div className="px-4 rounded-bottom">
                                <div className="service-content bg-secondary text-center p-4 rounded">
                                    <h5 className="text-white">Exotic Vegitable</h5>
                                    <h3 className="mb-0">Discount 30$</h3>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
 
    <div className="container-fluid vesitable py-5">
        <div className="container py-5">
            <h1 className="mb-0">Fresh Organic Vegetables</h1>
            <div className="owl-carousel vegetable-carousel justify-content-center">
                <div className="border border-primary rounded position-relative vesitable-item">
                    <div className="vesitable-img">
                        <img src="img/vegetable-item-6.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                    </div>
                    <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: "10px", right: "10px"}}>Vegetable</div>
                    <div className="p-4 rounded-bottom">
                        <h4>Parsely</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                        <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                            <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                        </div>
                    </div>
                </div>
                <div className="border border-primary rounded position-relative vesitable-item">
                    <div className="vesitable-img">
                        <img src="img/vegetable-item-1.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                    </div>
                    <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: "10px", right: "10px"}}>Vegetable</div>
                    <div className="p-4 rounded-bottom">
                        <h4>Parsely</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                        <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                            <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                        </div>
                    </div>
                </div>
                <div className="border border-primary rounded position-relative vesitable-item">
                    <div className="vesitable-img">
                        <img src="img/vegetable-item-3.png" className="img-fluid w-100 rounded-top bg-light" alt=""/>
                    </div>
                    <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: "10px", right: "10px"}}>Vegetable</div>
                    <div className="p-4 rounded-bottom">
                        <h4>Banana</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                        <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                            <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                        </div>
                    </div>
                </div>
                <div className="border border-primary rounded position-relative vesitable-item">
                    <div className="vesitable-img">
                        <img src="img/vegetable-item-4.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                    </div>
                    <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: "10px", right: "10px"}}>Vegetable</div>
                    <div className="p-4 rounded-bottom">
                        <h4>Bell Papper</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                        <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                            <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                        </div>
                    </div>
                </div>
                <div className="border border-primary rounded position-relative vesitable-item">
                    <div className="vesitable-img">
                        <img src="img/vegetable-item-5.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                    </div>
                    <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: "10px", right: "10px"}}>Vegetable</div>
                    <div className="p-4 rounded-bottom">
                        <h4>Potatoes</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                        <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                            <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                        </div>
                    </div>
                </div>
                <div className="border border-primary rounded position-relative vesitable-item">
                    <div className="vesitable-img">
                        <img src="img/vegetable-item-6.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                    </div>
                    <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: "10px", right: "10px"}}>Vegetable</div>
                    <div className="p-4 rounded-bottom">
                        <h4>Parsely</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                        <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                            <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                        </div>
                    </div>
                </div>
                <div className="border border-primary rounded position-relative vesitable-item">
                    <div className="vesitable-img">
                        <img src="img/vegetable-item-5.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                    </div>
                    <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: "10px", right: "10px"}}>Vegetable</div>
                    <div className="p-4 rounded-bottom">
                        <h4>Potatoes</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                        <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                            <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                        </div>
                    </div>
                </div>
                <div className="border border-primary rounded position-relative vesitable-item">
                    <div className="vesitable-img">
                        <img src="img/vegetable-item-6.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                    </div>
                    <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: "10px", right: "10px"}}>Vegetable</div>
                    <div className="p-4 rounded-bottom">
                        <h4>Parsely</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                        <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                            <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="container-fluid banner bg-secondary my-5">
        <div className="container py-5">
            <div className="row g-4 align-items-center">
                <div className="col-lg-6">
                    <div className="py-4">
                        <h1 className="display-3 text-white">Fresh Exotic Fruits</h1>
                        <p className="fw-normal display-3 text-dark mb-4">in Our Store</p>
                        <p className="mb-4 text-dark">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
                        <a href="#" className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5">BUY</a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="position-relative">
                        <img src="img/baner-1.png" className="img-fluid w-100 rounded" alt=""/>
                        <div className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute" style={{width: "140px", height: "140px", top: "0", left: "0"}}>
                            <h1 style={{fontSize: "100px"}}>1</h1>
                            <div className="d-flex flex-column">
                                <span className="h2 mb-0">50$</span>
                                <span className="h4 text-muted mb-0">kg</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    
  
    <div className="container-fluid py-5">
        <div className="container">
            <div className="bg-light p-5 rounded">
                <div className="row g-4 justify-content-center">
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="counter bg-white rounded p-5">
                            <i className="fa fa-users text-secondary"></i>
                            <h4>satisfied customers</h4>
                            <h1>1963</h1>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="counter bg-white rounded p-5">
                            <i className="fa fa-users text-secondary"></i>
                            <h4>quality of service</h4>
                            <h1>99%</h1>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="counter bg-white rounded p-5">
                            <i className="fa fa-users text-secondary"></i>
                            <h4>quality certificates</h4>
                            <h1>33</h1>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="counter bg-white rounded p-5">
                            <i className="fa fa-users text-secondary"></i>
                            <h4>Available Products</h4>
                            <h1>789</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div className="container-fluid testimonial py-5">
        <div className="container py-5">
            <div className="testimonial-header text-center">
                <h4 className="text-primary">Our Testimonial</h4>
                <h1 className="display-5 mb-5 text-dark">Our Client Saying!</h1>
            </div>
            <div className="owl-carousel testimonial-carousel">
                <div className="testimonial-item img-border-radius bg-light rounded p-4">
                    <div className="position-relative">
                        <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{bottom: "30px", right: "0"}}></i>
                        <div className="mb-4 pb-4 border-bottom border-secondary">
                            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </p>
                        </div>
                        <div className="d-flex align-items-center flex-nowrap">
                            <div className="bg-secondary rounded">
                                <img src="img/testimonial-1.jpg" className="img-fluid rounded" style={{width: "100px", height: "100px"}} alt=""/>
                            </div>
                            <div className="ms-4 d-block">
                                <h4 className="text-dark">Client Name</h4>
                                <p className="m-0 pb-3">Profession</p>
                                <div className="d-flex pe-5">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonial-item img-border-radius bg-light rounded p-4">
                    <div className="position-relative">
                        <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{bottom: "30px", right: "0"}}></i>
                        <div className="mb-4 pb-4 border-bottom border-secondary">
                            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </p>
                        </div>
                        <div className="d-flex align-items-center flex-nowrap">
                            <div className="bg-secondary rounded">
                                <img src="img/testimonial-1.jpg" className="img-fluid rounded" style={{width: "100px", height: "100px"}} alt=""/>
                            </div>
                            <div className="ms-4 d-block">
                                <h4 className="text-dark">Client Name</h4>
                                <p className="m-0 pb-3">Profession</p>
                                <div className="d-flex pe-5">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonial-item img-border-radius bg-light rounded p-4">
                    <div className="position-relative">
                        <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{bottom: "30px", right: "0"}}></i>
                        <div className="mb-4 pb-4 border-bottom border-secondary">
                            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </p>
                        </div>
                        <div className="d-flex align-items-center flex-nowrap">
                            <div className="bg-secondary rounded">
                                <img src="img/testimonial-1.jpg" className="img-fluid rounded" style={{width: "100px", height: "100px"}} alt=""/>
                            </div>
                            <div className="ms-4 d-block">
                                <h4 className="text-dark">Client Name</h4>
                                <p className="m-0 pb-3">Profession</p>
                                <div className="d-flex pe-5">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
        <div className="container py-5">
            <div className="pb-4 mb-4" style={{borderBottom: "1px solid rgba(226, 175, 24, 0.5)" }}>
                <div className="row g-4">
                    <div className="col-lg-3">
                        <a href="#">
                            <h1 className="text-primary mb-0">Fruitables</h1>
                            <p className="text-secondary mb-0">Fresh products</p>
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <div className="position-relative mx-auto">
                            <input className="form-control border-0 w-100 py-3 px-4 rounded-pill" type="number" placeholder="Your Email"/>
                            <button type="submit" className="btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white" style={{top: "0", right: "0"}}>Subscribe Now</button>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="d-flex justify-content-end pt-3">
                            <a className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-secondary btn-md-square rounded-circle" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <div className="footer-item">
                        <h4 className="text-light mb-3">Why People Like us!</h4>
                        <p className="mb-4">typesetting, remaining essentially unchanged. It was 
                            popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
                        <a href="" className="btn border-secondary py-2 px-4 rounded-pill text-primary">Read More</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="d-flex flex-column text-start footer-item">
                        <h4 className="text-light mb-3">Shop Info</h4>
                        <a className="btn-link" href="">About Us</a>
                        <a className="btn-link" href="">Contact Us</a>
                        <a className="btn-link" href="">Privacy Policy</a>
                        <a className="btn-link" href="">Terms & Condition</a>
                        <a className="btn-link" href="">Return Policy</a>
                        <a className="btn-link" href="">FAQs & Help</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="d-flex flex-column text-start footer-item">
                        <h4 className="text-light mb-3">Account</h4>
                        <a className="btn-link" href="">My Account</a>
                        <a className="btn-link" href="">Shop details</a>
                        <a className="btn-link" href="">Shopping Cart</a>
                        <a className="btn-link" href="">Wishlist</a>
                        <a className="btn-link" href="">Order History</a>
                        <a className="btn-link" href="">International Orders</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="footer-item">
                        <h4 className="text-light mb-3">Contact</h4>
                        <p>Address: 1429 Netus Rd, NY 48247</p>
                        <p>Email: Example@gmail.com</p>
                        <p>Phone: +0123 4567 8910</p>
                        <p>Payment Accepted</p>
                        <img src="img/payment.png" className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
   

   



   
    <a href="#" className="btn btn-primary border-3 border-primary rounded-circle back-to-top"><i className="fa fa-arrow-up"></i></a>   

    </>
}

export default Index