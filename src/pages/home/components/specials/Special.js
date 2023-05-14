import React from 'react';
import './Specials.css';
import { Button } from '../../../../components/Button';
import { Card } from '../../../../components/Card';
import { Heading } from '../../../../components/Heading';

const Special = ({data}) => {
    console.log(data)
    return (
        <section id="specials" className="LL-Specials">
      <section className="specials-titlebar">
        <h1>Specials</h1>
        <button className='RR-button-online'>Online Menu</button>
      </section>
      <section id="LL-Section-SpecialItems">
        {data.map(({ id, title, price, description, image }) => (
          <Card key={id} title={title} width={300} image={image}>
            <div className="LL-CardHeader card-variant-food">
              <Heading tag="h3" size="m" className="food-title">
                {title}
              </Heading>
              <p className="food-price">${price}</p>
            </div>
            <div className="food-desc">{description}</div>

            <div className="card-footer LL-OrderButton">
              <Button class="btn-order" outline>
                Order
              </Button>
            </div>
          </Card>
        ))}
      </section>
      </section>
    );
};

export default Special