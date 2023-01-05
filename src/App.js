import './App.css';
import Day from './component/Day';
import DayList from './component/DayList';
import Header from "./component/Header";
import EmptyPage from "./component/EmptyPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>                   {/*Header는 모두가 공통되게 표시*/}
        <Switch>                    {/*URL 따라 다르게 표시*/}
          <Route exact path="/">    {/*exact를 꼭 써줘야 됨*/}
            <DayList/>
          </Route>
          <Route path="/day/:day">
            <Day />
          </Route>
          <Route>
            <EmptyPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;