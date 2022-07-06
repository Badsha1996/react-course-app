
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/Header";
import AddEditCourse from "./pages/AddEditCourse";
import CourseInfo from "./pages/CourseInfo";
import About from "./pages/About";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageNotFound from "./component/PageNotFound";
import MainPage from "./component/MainPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Header />
        <Switch>
        <Route exact path="/" component={MainPage} />
          <Route exact path="/courses" component={Home} />
          <Route exact path="/addCourse" component={AddEditCourse} />
          <Route exact path="/editCourse/:id" component={AddEditCourse} />
          <Route exact path="/courseInfo/:id" component={CourseInfo} />
          <Route exact path="/about" component={About} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
