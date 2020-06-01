import React from "react";
import { Button, Container, Row } from "reactstrap";
import { Link } from 'react-router-dom';

export default class Checkpoints extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
    };
  }
  
  render() {
    const { error, loading } = this.state;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error...</div>;

    return (
      <Container>
        <Button color="success" type="button" tag={Link} to="https://squizz.netlify.app/">
          Squizz game page
        </Button>
        <Row>
          
        </Row>
      </Container>
    );
  }
}
