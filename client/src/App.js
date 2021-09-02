import "./App.css";
import { Router, Route } from "react-router-dom";
import StreamCreate from "./components/streams/StreamCreate";
import StreamEdit from "./components/streams/StreamEdit";
import StreamDelete from "./components/streams/StreamDelete";
import StreamShow from "./components/streams/StreamShow";
import StreamList from "./components/streams/StreamList";
import Header from "./components/Header";
import history from "./history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route exact path="/" component={StreamList} />
          <Route exact path="/streams/create" component={StreamCreate} />
          <Route exact path="/streams/edit/:id" component={StreamEdit} />
          <Route exact path="/streams/delete/:id" component={StreamDelete} />
          <Route exact path="/streams/show" component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
