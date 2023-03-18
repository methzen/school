import React from 'react';

const Check = (prop) => {
    const element=<i className="fa fa-check-circle position-absolute top-50 end-0 translate-middle-y" 
    aria-hidden="true"></i>    
    return  prop.bool? element: null;

}
 
export default Check;