import logo from './logo.svg';
import './App.css';

import Greet                                from './components/Greet'                               ;
import Welcome                              from './components/Welcome'                             ;
import Hello                                from './components/Hello'                               ;
import Message                              from './components/Message'                             ;
import Counter                              from './components/Counter'                             ;
import DestructuringProps                   from './components/DestructuringProps'                  ;
import DestructuringPropsinClassComponent   from './components/DestructuringPropsinClassComponent'  ;
import FunctionClick                        from './components/FunctionClick'                       ;
import ClassClick                           from './components/ClassClick'                          ;
import EventBind                            from './components/EventBind'                           ;  

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* <!--Edit <code>src/App.js</code> and save to reload.--> */}
          {/* <Greet></Greet> */}
          <Greet name="Bruce" heroName="Batman"       >
            <p>This is children props</p>
          </Greet>
          <Greet name="Clark" heroName="Superman"     >
            <button>Action</button>
          </Greet>
          <Greet name="Diana" heroName="Wonder Woman" />
          <Welcome name="Bruce" heroName="Batman"       />
          <Welcome name="Clark" heroName="Superman"       />
          <Welcome name="Diana" heroName="Wonder Woman"       />
          <Hello />
          <Message />
          <Counter />
          <DestructuringProps name="Diana" heroName="Wonder Woman"  gender="female"     >
            <p>This is children props</p>
          </DestructuringProps>
          <DestructuringPropsinClassComponent name="Diana" heroName="Wonder Woman" />
          <FunctionClick />
          <ClassClick />
          <EventBind />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
