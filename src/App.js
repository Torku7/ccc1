import './App.css';
import Login from './pages/Login';
import Register from './pages/register'; 
import Poll from'./pages/poll';
import BookPage from './pages/bookpage';
import {Header} from './common/Header';
import MyLibrary from '../src/pages/mylibrary';

function App() {
  return (
    // 여기다가 직접 html 코드를 작성해서 웹 화면 구성하지 말것.
    <div className="App">
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Header/> */}
      {/* <BookPage /> */}
      {/* <Poll /> */}
      <MyLibrary/>
    </div>
  );
}

export default App;
