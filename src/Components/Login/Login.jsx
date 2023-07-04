import React from 'react'
import img from "../../Images/05.png"
const Login = () => {
    return (
        <section className='login'>
            <section className="container">
                <div className="row gap-5">
                    <div className="col-lg-5 col-sm-12">
                        <form class="row g-3">
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword4" class="form-label">Password</label>
                                <input type="password" class="form-control" id="inputPassword4" />
                            </div>
                            <div class="col-12">
                                <label for="inputAddress" class="form-label">Address</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                            <div class="col-12">
                                <label for="inputAddress2" class="form-label">Address 2</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="Adress 2 IF You Have" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputCity" class="form-label">City</label>
                                <input type="text" class="form-control" id="inputCity" />
                            </div>
                            <div class="col-12 mx-auto">
                                <button type="submit" class="btn btn-primary">Sign in</button>
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