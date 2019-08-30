import React from "react";
import { Card, Button, Dropdown } from "react-bootstrap";
import image from '../../database/redblueyellow.jpg'

class Page5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownMenu: "Select One"
    };
    this.handleDropdownMenuChange = this.handleDropdownMenuChange.bind(this);
  }

  handleDropdownMenuChange(e) {
    this.setState({
      dropdownMenu: e
    });
  }
  render() {
    return (
      <div className="fourthPageCards">
      <Card border="danger" bg="dark" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>I would...</Card.Title>
          <Card.Text>
            Trade my blue and red version for a yellow version
</Card.Text>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {this.state.dropdownMenu}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                href="#/action-1"
                onClick={() => {
                  this.handleDropdownMenuChange("Strongly agree");
                }}
              >
                Strongly agree
</Dropdown.Item>
              <Dropdown.Item
                href="#/action-2"
                onClick={() => {
                  this.handleDropdownMenuChange("Agree");
                }}
              >
                Agree
</Dropdown.Item>
              <Dropdown.Item
                href="#/action-3"
                onClick={() => {
                  this.handleDropdownMenuChange("Neither agree or disagree");
                }}
              >
                Neither agree or disagree
</Dropdown.Item>
              <Dropdown.Item
                href="#/action-4"
                onClick={() => {
                  this.handleDropdownMenuChange("Disagree");
                }}
              >
                Disagree
</Dropdown.Item>
              <Dropdown.Item
                href="#/action-5"
                onClick={() => {
                  this.handleDropdownMenuChange("Strongly disagree");
                }}
              >
                Strongly disagree
</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
      </Card>
      <br />
      <br />
    <br></br>
    <Button
      onClick={e => {
        this.props.formComplete(e);
      }}
    >
      next
</Button>
  </div>
    );
  }
}

export default Page5;
