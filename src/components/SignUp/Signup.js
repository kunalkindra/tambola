import React from 'preact/compat';
import { Component } from 'preact';
import { signUp } from '../../api';
import Session from '../../session';

export default class Signup extends Component {
  state = {
    userName: '',
  };

  handleNameChange = (e) => {
    this.setState({ userName: e.target.value });
  };

  handleSignUp = async (e) => {
    e.preventDefault();
    const newUser = await signUp(this.state.userName);
    Session.set(newUser);
    window.location.reload();
  };

  render() {
    const { userName } = this.state;
    return (
      <form onSubmit={this.handleSignUp}>
        <div className="form-group">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="name">Please enter your name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={userName}
            required
            placeholder="Bablu, chintu, pintu..."
            onChange={this.handleNameChange}
          />
          <div className="mb-3" />
          <button type="submit" className="btn btn-primary">
            Continue
          </button>
        </div>
      </form>
    );
  }
}
