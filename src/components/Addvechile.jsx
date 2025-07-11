import React from 'react'
import Nav from './Nav'

const Addvechile = () => {
    return (
        <div>


<Nav/>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor=" Name" className="form-label">Vechile Name</label>
                                <input type="text" className="form-control" /></div>


                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="Name" className="form-label">Vechile Brand</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="Fuel" className="form-label">Fuel type</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="Reg" className="form-label">Registration NO</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="Manufacturing Date" className="form-label">Manufacturing Date</label>
                                <input type="date" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="price" className="form-label">Price</label>
                                <input type="price" className="form-control" />

                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="image" className="form-label">Image</label>
                                <input type="file" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success">Sumbit</button>
                            </div>
                        </div>                </div>
                </div>
            </div>
        </div>
    )
}

export default Addvechile