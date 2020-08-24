
import React, { useState} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

const Card =( { details }  )=>{
      return(
          <div className="card-group" >
            <div className="card" id="body">
                <img  src={ details.picture?.large} alt=""   />
                <p> Name : { details.name?.first } </p>
                <p> Email : { details.email } </p> 
            </div>

            
          </div>
      )
}

export default Card;
