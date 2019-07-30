import React from "react";
import { Form, Button, Badge, Dropdown } from "react-bootstrap";

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
      <Form>
        <h1>
          <br />
          <br />
          <Badge variant="danger">
            I would trade my Blue and Red Version for Yellow Version
          </Badge>
          <br />
          <br />
        </h1>
        <h2 />
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
        <br />
        <br />
        <Button
          onClick={e => {
            this.props.formComplete(e);
          }}
        >
          next
        </Button>
      </Form>
    );
  }
}

export default Page5;
