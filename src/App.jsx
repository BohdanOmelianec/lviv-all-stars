import { Container } from 'react-bootstrap';
import NavMenu from './components/NavMenu';
import { routes } from './routes'
import { useRoutes } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  const element = useRoutes(routes);

  return (
    <>
      <NavMenu />
      <Container className='py-120'>
        {element}
      </Container>
      <Footer/>
    </>
    
  );
}

export default App;
