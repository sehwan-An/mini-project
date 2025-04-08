import {Container, Carousel} from 'react-bootstrap';
import HomeImage from '../assets/home-section.png'
import CarouselItemImage from './CarouselItemImage'

function HomeCarousel() {
  return (
    <Container className='my-3 px-0' fluid={true}>
      <Carousel fade>
        <Carousel.Item>
          <CarouselItemImage src="https://picsum.photos/id/1000/1920/400" text="picsum" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <CarouselItemImage src="https://picsum.photos/id/1002/1920/400" text="picsum" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <CarouselItemImage src="https://picsum.photos/id/1001/1920/400" text="picsum" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default HomeCarousel;