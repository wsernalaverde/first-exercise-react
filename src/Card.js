import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

class Cards extends Component{
 render(){
     const {items} = this.props;//Con destructuring sacamos el items que le mandamos en el objeto de propiedades
     /* <div className="contCard">
                <div className="cont-img">
                    <img src={item.inputImage} alt=""/>
                </div>
                <div className="cont-excerpt">
                    <span>{item.inputExcerpt}</span>
                </div>
            </div> */
      return(
          <div>
          {items.map((item) => {
            return(
            <Card>
                <Image src={item.inputImage} />
                <Card.Content>
                <Card.Header>
                   {item.inputExcerpt}
                </Card.Header>
                <Card.Meta>
                    <span className='date'>
                    Joined in 2015
                    </span>
                </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    22 Friends
                </a>
                </Card.Content>
            </Card> 
           
            );
         })
        }</div>
      )
     
 }
}

export default Cards;