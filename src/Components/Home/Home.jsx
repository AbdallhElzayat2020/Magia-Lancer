
import Navbar from '../header/Navbar';
import back from "../../Images/secondSection.png";
// import frame from "../../Images/Frame 8.png";
// import logo from "../../Images/logo.jpeg";
const Home = () => {
    return (<>
        <Navbar />
        <section className="home" >
            <div className="container">
                <div className="row gap-4">
                    <div className="col-lg-12">
                        <div className="title">
                            <h4 className="text-white text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
                                aliquam, maiores id omnis nisi eum ut voluptate labore exercitationem
                                incidunt voluptatem minus asperiores explicabo facilis, perspiciatis
                                et in iusto consequuntur!
                            </h4>
                            <input id="search" className="search" type="text" placeholder="search a job" />
                            <button className="search_btn " form="search" type="submit">search</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container text-center">
                {/* <h3 className="mb-4">Our Services</h3> */}
                <div className="row">
                    <div className="col-lg-3">
                        <div className="card">
                            <img src={back} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the  content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card">
                            <img src={back} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the  content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card">
                            <img src={back} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the  content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card">
                            <img src={back} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the  content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container text-center">
                <h3 className="mb-4">Our Services</h3>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="card">
                            <img src={back} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the  content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card">
                            <img src={back} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of thecontent.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card">
                            <img src={back} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the  content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card">
                            <img src={back} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="footer">
            <div className="container text-center bg-primary text-white p-2">
                <h3>Made With Magia Team</h3>
            </div>
        </div>
    </>
    )
};

export default Home;