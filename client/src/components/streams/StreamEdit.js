import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

// const StreamEdit = ({ history, location, match, stream }) => {
//   console.log(stream)
//   return <>StreamEdit</>;
// };

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    console.log(this.props);
    if (!this.props.stream) {
      return <>Loading...</>;
    }
    return <>{this.props.stream.title}</>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
