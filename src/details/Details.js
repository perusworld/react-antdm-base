import React, { Component } from 'react'
import { List, Checkbox, Button, InputItem } from 'antd-mobile';
const CheckboxItem = Checkbox.CheckboxItem;

export class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: props.match.params.id
    };
    this.setIsGoing = this.setIsGoing.bind(this);
    this.setNumberOfGuests = this.setNumberOfGuests.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setIsGoing(event) {
    this.setState({ isGoing: event.target.checked }, () => {
      console.log(this.state);
    });
  }
  setNumberOfGuests(value) {
    this.setState({ numberOfGuests: value }, () => {
      console.log(this.state);
    });
  }

  handleSubmit() {
    this.props.history.push("/settings");
  }

  render() {
    return (
      <div>
        <List renderHeader={() => 'Simple Form'}>
          <CheckboxItem checked={this.state.isGoing} onChange={this.setIsGoing} name="isGoing">
            Is Going
          </CheckboxItem>
          <InputItem placeholder="auto focus" name="numberOfGuests" type="number" value={this.state.numberOfGuests}
            onChange={this.setNumberOfGuests}>Guests</InputItem>
        </List>
        <Button onClick={this.handleSubmit} type="warning">Submit</Button>
      </div>
    );
  }
}

export default Details
