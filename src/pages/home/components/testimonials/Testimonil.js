import { Button } from '../../../../components/Button';
import { Card } from '../../../../components/Card';
import { Heading } from '../../../../components/Heading';
import { ReviewStar } from '../../../../components/ReviewStar';
import './Testimonials.css';

const Testimonials = ({ data }) => {
  return (
    <section id="testimonials" className="LL-Testimonials">
      <Heading size="xl" align="center">
        Testimonials
      </Heading>
      <section className="LL-Testimonials-Carousel">
        {data.map(({ id, rating, name, review, image }) => (
          <Card
            key={`testimonial-card-${name.trim()}-${id}`}
            title={`Testimonial by ${name}`}
            imagePosition="left"
            image={image}
          >
            <Heading tag="h3" size="base" className="LL-Testimonial-Name">
              {name}
            </Heading>
            <div className="LL-Testimonial-Rating">
              {Array.from(
                { length: Math.round(Math.abs(Number(rating))) },
                (v, i) => (
                  <ReviewStar key={`reviewstar-${name.trim()}-${i}`} />
                )
              )}
            </div>
            <p className="LL-Testimonial-Review">{review}</p>
          </Card>
        ))}
      </section>
    </section>
  );
};

export default Testimonials