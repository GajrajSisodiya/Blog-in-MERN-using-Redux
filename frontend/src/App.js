import logo from "./logo.svg";
import "./App.css";
import Blog from "./components/Blog";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";
import store from "./Redux/store";
import Navbar from "./components/Navbar";
import CreateBlog from "./components/CreateBlog";
import FullBlog from "./components/FullBlog";
import Kuchbhi from "./components/Kuchbhi";
import Footer from "./components/Footer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Kuchbhi />
        <Switch>
          <Route exact path="/" component={Blog}></Route>
          <Route exact path="/createblog/:_id" component={CreateBlog}></Route>
          <Route exact path="/createblog" component={CreateBlog}></Route>
          <Route exact path="/fullblog/:_id" component={FullBlog}></Route>
        </Switch>
      </div>
    </Provider>
  );
}
export default App;
