import React from 'react'
import Nav from './Nav'

const VechSearch = () => {
  return (
    <div>
<Nav/>
<div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                    <div className="row g-3">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="Name" className="form-label">Vehicle</label>
                                <input type="text" className="form-control" />

                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        

    </div>
  )
}

export default VechSearch