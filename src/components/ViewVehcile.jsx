import React from 'react';
import Nav from './Nav';

const ViewVehicle = () => {
  return (
    <div>
      <Nav/>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center mb-4">VIEW VEHICLES</h2>
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="table-light">
                  <tr>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Fuel Type</th>
                    <th>Registartion No</th>
                    <th>Manufacture Date</th>
                    <th>Price</th>
                    <th>Image</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Swift</td>
                    <td>Maruti</td>
                    <td>Petrol</td>
                    <td>KL57AB1234</td>
                    <td>2021-05-12</td>
                    <td>₹6,50,000</td>
                    <td>
                      <img
                        src="https://th.bing.com/th/id/OIP.CwgqUAkH8i4HyAGEehnBtwHaE8?w=225&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                        alt="Swift"
                        width="60"
                        height="60"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>ALto</td>
                    <td>MARUTHI</td>
                    <td>Diesel</td>
                    <td>KL01AP5678</td>
                    <td>2020-08-22</td>
                    <td>₹10,50,000</td>
                    <td>
                      <img
                        src="https://imgs.search.brave.com/9K6CzawcBE0AQQzIkCk6fdN93zJRflkkEuH8uKz1cKc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmNhcmxlbG8u/Y29tL3VwbG9hZHMv/bW9kZWwvMTY2MDg5/MjE4NS53ZWJw"
                        alt="Creta"
                        width="60"
                        height="60"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Altroz</td>
                    <td>Tata</td>
                    <td>Petrol</td>
                    <td>KL12F9012</td>
                    <td>2022-02-15</td>
                    <td>₹7,50,000</td>
                    <td>
                      <img
                        src="https://th.bing.com/th/id/OIP.45yrDlFJwUBAP4JssZPYYwHaE8?w=226&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                        alt="Altroz"
                        width="60"
                        height="60"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Innova</td>
                    <td>Toyota</td>
                    <td>Diesel</td>
                    <td>KL73A2345</td>
                    <td>2019-03-20</td>
                    <td>₹15,00,000</td>
                    <td>
                      <img
                        src="https://www.dubicars.com/images/9afc9e/r_960x540/generations/generation_65e7014e7c254_innova_hycross_2_1669021887220_1669021905260_1669021905260.webp?6"
                        alt="Innova"
                        width="60"
                        height="60"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Thar</td>
                    <td>Mahindra</td>
                    <td>Diesel</td>
                    <td>KL72F0007</td>
                    <td>2023-04-18</td>
                    <td>₹14,50,000</td>
                    <td>
                      <img
                        src="https://ts3.mm.bing.net/th?id=OIP.NEpUpVBYD8lodvFLFHEl0wHaE7&pid=15.1"
                        alt="Thar"
                        width="60"
                        height="60"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewVehicle;