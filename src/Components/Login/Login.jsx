// import React from 'react'
import img from "../../Images/05.png"
const Login = () => {
    return (
        <section className='login'>
            <section className="container">
                <div className="row gap-5">
                    <div className="col-lg-5 col-sm-12">
                        <form className="row g-3">
                            <div className="col-md-6">
                                <label for="inputEmail4" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" />
                            </div>
                            <div className="col-md-6">
                                <label for="inputPassword4" className="form-label">Password</label>
                                <input type="password" className="form-control" id="inputPassword4" />
                            </div>
                            <div className="col-12">
                                <label for="inputAddress" className="form-label">Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                            <div className="col-12">
                                <label for="inputAddress2" className="form-label">Address 2</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="Adress 2 IF You Have" />
                            </div>
                            <div className="col-md-6">
                                <label for="inputCity" className="form-label">City</label>
                                <input type="text" className="form-control" id="inputCity" />
                            </div>
                            <div className="col-12 mx-auto">
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6">
                        <img className='image img-filued' src={img} alt="" />
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Login;