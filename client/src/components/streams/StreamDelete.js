import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream } from "../../actions";
import { connect } from "react-redux";
import Loader from "../Loader";

class StreamDelete extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.fetchStream(this.props.match.params.id);
  }

  deleteActionButtons = () => (
    <>
      <button className="ui negative button">Delete</button>
      <button className="ui button">Cancel</button>
    </>
  );

  renderContent = () => {
    if (!this.props.stream) {
      return (
        <Loader />
      );
    }

    return (
      <>
        Are you sure you want to delete the stream{" "}
        <b>{this.props.stream.title}</b>?
      </>
    );
  };

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actionButtons={this.deleteActionButtons()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamDelete);
