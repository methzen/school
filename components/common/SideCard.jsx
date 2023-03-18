import React from 'react';


const SideCard = () => {
    return ( 
        <div className="card" style={{ width: "18rem" }}>
        <img src="https://github.com/mdo.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Course name</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
          </p>
         
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>
                  <a >
                    <div className="small">
                      <div className="fw-bold" >8.2K</div>
                      <div className="text-muted fs-12">members</div>
                    </div>
                  </a>
                </td>
                <td>
                  <a >
                  <div className="small">
                      <div className="fw-bold">10</div>
                      <div className="text-muted">online</div>
                    </div>
                  </a>
                </td>
                <td>
                  <a >
                  <div className="small">
                      <div className="fw-bold">7</div>
                      <div className="text-muted">Rules</div>
                    </div>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
{/*           <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
     );
}
 
export default SideCard;