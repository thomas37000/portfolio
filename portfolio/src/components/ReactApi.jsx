import React from 'react';

import {Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import squizzGame from './img/squizz game.png';

export default class ReactExo extends React.Component {
 
  handleClick = (e) => {
    e.preventDefault();
    console.log('');
  };

  render() {
    return(
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={squizzGame} />
        <Card.Body>
          <Card.Title>Squizz</Card.Title>
          <Card.Text>
            Squizz is a game made with my colleagues to do a Game Application
            where you have to find the good answer among several themes and difficulty.
          </Card.Text>
          {/* <a href="https://squizz.netlify.app/">See the Game</a> */}
            <Button 
              tag={Link} to={`/`}
              variant="primary"
              onClick={this.handleClick}
            >See More</Button>
        </Card.Body>
      </Card>
    );
  }
}

