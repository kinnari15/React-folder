import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import New from './components/New'
import Message from './components/Message'
import Counter from './components/Counter'
import FuncClick from './components/FuncClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind'
import ParentComp from './components/ParentComp'
import UserGreeting from './components/UserGreeting';
import GalaxyList from './components/GalaxyList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './styles.css'
import styles from './components/Sytles.module.css'

function App() {
  return (
    <div className="App">
    <Hello name='Carl Sagan'></Hello>
    <New name = 'Yep!'></New>
    <h1 className="error">Noice!</h1>
    <h1 className="new">Masta!</h1>
   {/*  <FuncClick />
    <ClassClick /> */}
    {/* <ParentComp /> */}
    {/* <UserGreeting /> */}
  {/*   <GalaxyList /> */}
    <Stylesheet />
    <Inline />
    </div>
  );
}

export default App;
