import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";

const AdminButtons = ({ stream, currentUserID }) => {
  if (stream.userID === currentUserID) {
    return (
      <>
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
          <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
        </div>
      </>
    );
  } else {
    return null;
  }
};

const StreamListItem = ({ stream, currentUserID }) => (
  <React.Fragment>
    <div className="item">
      <AdminButtons stream={stream} currentUserID={currentUserID} />
      <i className="large middle aligned icon camera" />
      <div className="content"> {stream.title} </div>
      <div className="description"> {stream.description}</div>
    </div>
  </React.Fragment>
);

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  render() {
    return (
      <>
        <div className="ui celled list">
          {this.props.streams.map((stream) => (
            <StreamListItem
              key={stream.id}
              stream={stream}
              currentUserID={this.props.currentUserID}
            />
          ))}
        </div>
        {this.props.isSignedIn ? <><Link to='/streams/create' className='ui button primary'>New Stream</Link></> : null}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserID: state.auth.userID,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
