import React from 'react';

import {Button,Col,Container,Form,FormControl,Nav,Navbar,NavDropdown,Row} from 'react-bootstrap';

import CarousseLControlled from './slider';
import logo from './img/moi.jpeg';
import styles from './body.css';

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import PropTypes from 'prop-types';

// import Homepage from './home-Page/Homepage';
// import Main from './makeYourQuizz-Page/MainPage';
// import MainPlayTheQuizz from './playTheQuizz-Page/MainPage';
// import Mobile from './layouts/Mobile.layout';
// import ScoreBoard from './scoreBoard-Page/ScoreBoard';

export default function Router (){
  return(  
  <>
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="#home">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Javascript</Nav.Link>
          <Nav.Link href="#link">React</Nav.Link>
          <NavDropdown title="Contact Me" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">GitHub</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Mail</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Linkedin</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
  </Navbar>
  <Container>
    {/* Stack the columns on mobile by making one full-width and the other half-width */}
    <Row>
      <Col xs={12} md={8}>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Thomas Chalanson</h2>
        <h1>Développeur Web</h1>
        <a
          className="App-link"
          href="https://www.wildcodeschool.com/fr-FR"
          target="_blank"
          rel="noopener noreferrer"
        > 
          à la Wild Code School de Nantes
        </a>
        <p>
          Bienvenue 
          sur mon Portfolio où vous pourrez découvrir 
          mes compétences comme développeur Web côté Front-end comme Back-end
        </p>         
      </Col>

      <CarousseLControlled />

      <Col xs={6} md={4}>
        
      </Col>
    </Row>

    {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
    <Row>
      <Col xs={6} md={4}>
      </Col>
      <Col xs={6} md={4}>
        xs=6 md=4
      </Col>
      <Col xs={6} md={4}>
        xs=6 md=4
      </Col>
    </Row>

    {/* Columns are always 50% wide, on mobile and desktop */}
    <Row>
      <Col xs={6}>xs=6</Col>
      <Col xs={6}>xs=6</Col>
    </Row>
  </Container>
  </>
  )
}

// function LayoutedRoute({ layout: Layout, component: Component, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         return (
//           <Layout>
//             <Component {...props} />
//           </Layout>
//         );
//       }}
//     />
//   );
// }

// function Routzer() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Homepage} />
//         <LayoutedRoute path="/playSoloQuizz" layout={Mobile} component={Main} />
//         <LayoutedRoute
//           path="/play/:round"
//           layout={Mobile}
//           component={MainPlayTheQuizz}
//         />
//         <LayoutedRoute path="/score" layout={Mobile} component={ScoreBoard} />
//       </Switch>
//     </Router>
//   );
// }

// LayoutedRoute.propTypes = {
//   layout: PropTypes.func.isRequired,
//   component: PropTypes.func.isRequired,
// };

// export default Routzer;