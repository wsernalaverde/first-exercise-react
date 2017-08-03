import React, { Component } from 'react';

class Card extends Component{
 render(){
     const {items} = this.props;//Con destructuring sacamos el items que le mandamos en el objeto de propiedades
     
      return(
          <div>
          {items.map((item) => {
            return(
            <div className="contCard">
                <div className="cont-img">
                    <img src={item.inputImage} alt=""/>
                </div>
                <div className="cont-excerpt">
                    <span>{item.inputExcerpt}</span>
                </div>
            </div>
            );
         })
        }</div>
      )
     
 }
}

export default Card;