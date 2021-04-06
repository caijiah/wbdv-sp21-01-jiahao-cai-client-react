import logo from './logo.svg';
import {BrowserRouter, Route} from "react-router-dom";
import CourseManager from "./component/course-manager/course-manager";
import CourseEditor from "./component/course-editor/course-editor";
import QuizzesList from "./component/quizzes/quizzes-list"
import Home from "./component/home"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  return (
      <BrowserRouter>
          <div>
          <Route path="/" exact={true} component={Home}/>
          <Route path={["/courses",
                        "/courses/table",
                        "/courses/grid"]}
                 exact={true}
                 component={CourseManager}/>
          <Route path="/courses/:courseId/quizzes" exact={true}>
              <QuizzesList/>
          </Route>
          <Route path={["/courses/:layout/edit/:courseId",
                        "/courses/:layout/edit/:courseId/modules/:moduleId",
                        "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                        "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"]}
                 exact={true}
                 render={(props) => <CourseEditor {...props}/>}/>
          </div>
      </BrowserRouter>
  );
}

export default App;
