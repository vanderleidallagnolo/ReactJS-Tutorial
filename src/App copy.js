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
import ParentComponent1                      from './components/ParentComponent1'                   ;
import ParentComponent2                      from './components/ParentComponent2'                   ;
import UserGreeting                         from './components/UserGreeting'                        ;
import NameList                             from './components/NameList'                            ;
import NameList2                            from './components/Namelist2'                           ;  
import NameList3                            from './components/NameList3'                            ;
import Stylesheet                           from './components/Stylesheet'                          ;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

          <ol>

            <li><h1>Function with props</h1></li>
            
            <Greet name="Bruce" heroName="Batman"       >
              <p>This is children props</p>
            </Greet>
            <Greet name="Clark" heroName="Superman"     >
              <button>Action</button>
            </Greet>
            <Greet name="Diana" heroName="Wonder Woman" />

            <hr />

            <li><h1>Component with props</h1></li>
            <Welcome name="Bruce" heroName="Batman"       />
            <Welcome name="Clark" heroName="Superman"       />
            <Welcome name="Diana" heroName="Wonder Woman"       />

            <hr />

            <li><h1>Create Element</h1></li>

            <Hello />

            <hr />

            <li><h1>Using State</h1></li>
            <Message />
            <hr />

            <li><h1>Using prevState</h1></li>
            <Counter />
            <hr />

            <li><h1>Destructuring Props </h1></li>
            <DestructuringProps name="Diana" heroName="Wonder Woman"  gender="female"     >
              <p>This is children props</p>
            </DestructuringProps>
            <hr />

            <li><h1>Destructuring Props in class component</h1></li>
            <DestructuringPropsinClassComponent name="Diana" heroName="Wonder Woman" />
            <hr />

            <li><h1>Handler -  Function</h1></li>
            <FunctionClick />           
            <hr />

            <li><h1>Handler -  Class</h1></li>
            <ClassClick /> 
            <hr />
            
            <li><h1>Event bind approaches</h1></li>
            <EventBind />
            <hr />

            <li><h1>Method as props -  Without Parameter</h1></li>
            <ParentComponent1 />
            <hr />

            <li><h1>Method as props -  With Parameter</h1></li>
            <ParentComponent2 />
            <hr />

            <li><h1>Conditional Rendering</h1></li>
            <UserGreeting />
            <hr />

            <li><h1>List Rendering</h1></li>
            <NameList />
            <hr />

            <li><h1>Lists and Keys</h1></li>
            <NameList2 />
            <hr />

            <li><h1>Indexes as Key Anti-Pattern</h1></li>
            <NameList3 />
            <hr />

            <li><h1>Styling React components</h1></li>

            <div>
            <Stylesheet primary={true} />
            </div>
            <hr />


          </ol>




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
