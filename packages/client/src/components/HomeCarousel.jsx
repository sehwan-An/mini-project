import {Container, Carousel} from 'react-bootstrap';
import HomeImage from '../assets/home-section.png'

function HomeCarousel() {
  return (
    <Container className='my-3 px-0' fluid={true}>
      <Carousel>
        <Carousel.Item>
          <img src={HomeImage} alt='home'className='w-100 img-fluid'/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={HomeImage} alt='home'className='w-100 img-fluid'/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={HomeImage} alt='home'className='w-100 img-fluid'/>
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