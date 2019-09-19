import React from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object
  };

  goToStore = event => {
    event.preventDefault();
    const storeName = this.myInput.current.value;
    this.props.history.push(`/store/${storeName}`);
  };

  myInput = React.createRef();

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a Store</h2>
        <input
          type="text"
          required
          ref={this.myInput}
          placeholder="Store Name"
          defaultValue={getFunName()}
        />

        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
