import React from 'react';

import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Body from './components/Body';
// import Checkpoints from './components/Checkpoints';
// import Checkpoints from './components/Checkpoints';
import Checkpoints from './components/Checkpoints';
import ReactExo from './components/ReactApi';

export default function Routter() {
  return (
  <>
    <Navbar bg="dark" expand="lg">
    <Navbar.Brand href={'/'}>Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Javascript</Nav.Link>
        <Nav.Link href={'/reactExo/'}>React </Nav.Link>
        <Nav.Link href="#link">Checkpoints</Nav.Link>
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

    <Router>
      <Switch>
        <Route exact path="/" component={Body} />
        {/* <Route path='/javascript/Checkpoints/' component={Checkpoints} /> */}
        {/* <Route path='/react/Checkpoints/' component={Checkpoints} /> */}
        <Route path='/checkpoints/Checkpoints/' component={Checkpoints} />
        <Route path='/reactExo/' component={ReactExo} />

      </Switch>
    </Router>
    </>
  );
}

// LayoutedRoute.propTypes = {
//   layout: PropTypes.func.isRequired,
//   component: PropTypes.func.isRequired,
// };
