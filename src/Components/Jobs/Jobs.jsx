
import meta from '../../Images/meta.png'
const Jobs = () => {
  return (
    <>
      <section className="home" >
        <div className="container">
          <div className="row gap-4">
            <div className="col-lg-12">
              <div className="title">
                <h4 className="text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
                  aliquam, maiores id omnis nisi eum ut voluptate labore exercitationem
                  incidunt voluptatem minus asperiores explicabo facilis, perspiciatis
                  et in iusto consequuntur!
                </h4>
                <button className="search_btn" form="search" type="submit">Create Groupe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 bg-primary rounded text-center">
              <div className="type">
                <h5 className="text-white">Jop Type</h5>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
              </div>
              <div className="type">
                <h5 className="text-white">Jop Type</h5>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
              </div>
              <div className="type">
                <h5 className="text-white">Jop Type</h5>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
              </div>
              <div className="type">
                <h5 className="text-white">Jop Type</h5>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
              </div>
              <div className="type">
                <h5 className="text-white">Jop Type</h5>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
              </div>
              <div className="type mt-4">
                <h5 className="text-white">Jop Type</h5>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="meta bg-primary text-white  p-2 rounded">
                <div className="head">
                  <img src={meta} alt="" />
                  <span className="ms-2">company name</span>
                </div>
                <div className="body">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur,
                    maiores reprehenderit quibusdam iusto excepturi rem!
                  </p>
                </div>
                <div className="foot d-flex justify-content-between align-items-center">
                  <span>company name</span>
                  <span>Jop Type</span>
                  <span>Experience</span>
                  <button className="btn btn-info">Read More</button>
                </div>
              </div>
              <div className="meta bg-primary text-white  p-2 rounded mt-4">
                <div className="head">
                  <img src={meta} alt="" />
                  <span className="ms-2">company name</span>
                </div>
                <div className="body">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur,
                    maiores reprehenderit quibusdam iusto excepturi rem!
                  </p>
                </div>
                <div className="foot d-flex justify-content-between align-items-center">
                  <span>company name</span>
                  <span>Jop Type</span>
                  <span>Experience</span>
                  <button className="btn btn-info">Read More</button>
                </div>
              </div>
              <div className="meta bg-primary text-white  p-2 rounded mt-4">
                <div className="head">
                  <img src={meta} alt="" />
                  <span className="ms-2">company name</span>
                </div>
                <div className="body">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur,
                    maiores reprehenderit quibusdam iusto excepturi rem!
                  </p>
                </div>
                <div className="foot d-flex justify-content-between align-items-center">
                  <span>company name</span>
                  <span>Jop Type</span>
                  <span>Experience</span>
                  <button className="btn btn-info">Read More</button>
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
}

export default Jobs;