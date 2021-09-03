import React from "react";
import Modal from "../Modal";
import history from "../../history";

class StreamDelete extends React.Component {
  deleteActionButtons = () => (
    <>
      <button className="ui negative button">Delete</button>
      <button className="ui button">Cancel</button>
    </>
  );

  render() {
    return (
      <>
        StreamDelete
        <Modal
          title="Delete Stream"
          content="Are you sure you want to delete this stream?"
          actionButtons={this.deleteActionButtons()}
          onDismiss={() => history.push("/")}
        />
      </>
    );
  }
}

export default StreamDelete;
