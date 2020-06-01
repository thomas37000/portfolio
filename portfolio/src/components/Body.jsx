import React from 'react';

import { Col,Container, Row} from 'react-bootstrap';
// import { Link } from 'react-router-dom';

import CarousseLControlled from './slider';
import ReactExo from './ReactApi';
import logo from './img/moi.jpeg';
import styles from './body.css';

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import PropTypes from 'prop-types';

// import Homepage from './home-Page/Homepage';
// import Main from './makeYourQuizz-Page/MainPage';
// import MainPlayTheQuizz from './playTheQuizz-Page/MainPage';
// import Mobile from './layouts/Mobile.layout';
// import ScoreBoard from './scoreBoard-Page/ScoreBoard';

export default function Body (){
  return(  
  <>  
  <Container>
  <CarousseLControlled />
    {/* Stack the columns on mobile by making one full-width and the other half-width */}
    <Row>
      <Col xs={12} md={8}>
        <img src={logo} className="App-logo" alt="logo" />
        <img className="App-backgound" alt="Bg Blue" />
        <img className="App-background2" alt="Bg Yellow" />
        <h2>Thomas Chalanson</h2>
        <h1>Développeur Web</h1>
        <a
          className="App-link"
          href="https://www.wildcodeschool.com/fr-FR"
          //targer ouvre le lien dans une autre fenêtre
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

      <ReactExo />

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