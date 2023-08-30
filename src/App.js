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
import Inline from './components/Inline';

import './appStyles.css';
import styles from './appStyles.module.css';

import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import LifecycleC from './components/LifecycleC';
import FragmentDemo from './components/FragmentDemo';
import Tables from './components/Tables';
import PureComp from './components/PureComp';
import RegComp from './components/RegComp';
import ParentComp from './components/ParentComp';
import MemoComp from './components/MemoComp';
import ParentMemoComp from './components/ParentMemoComp';
import RefsDemo from './components/RefsDemo';
import RefsDemoOldApproach from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';

import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterEnhanced from './components/ClickCounterEnhanced';
import HoverCounterEnhanced from './components/HoverCounterEnhanced';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User.js';
import CounterRenderProp from './components/CounterRenderProp';
import CounterRenderChildren from './components/CounterRenderChildren';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';

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
            <div>
            <Inline primary={true} />
            </div>            
            <div>
            <h2 className="error">Error</h2>
            <h2 className={styles.success}>Success</h2>
            </div>
            <hr />

            <li><h1>Basics of Form Handling</h1></li>

            <div>
            <Form />
            </div>            

            <hr />

            <li><h1>Component Mounting Lifecycle Methods</h1></li>

            <div>
            <LifecycleA />
            </div>            

            <hr />

            <li><h1>Updating Lifecycle Methods</h1></li>

            <div>
            <LifecycleC />
            </div>            

            <hr />

            <li><h1>Fragments</h1></li>

            <div>
            <FragmentDemo />

            <Tables />
            </div>            

            <hr />

            <li><h1>Pure components</h1></li>

            <div>
              {/*}
            <PureComp />
            <RegComp />
  */}

            <ParentComp />


            </div>            

            <hr />


            <li><h1>Memo function</h1></li>

            <div>
            Avoid re-renders when there is no changes in props - in Functions
            <ParentMemoComp />


            </div>            

            <hr />

            <li><h1>Refs - calling properties and methods on an element</h1></li>

            <div>
            Actual Approach
            <RefsDemo />
            <br />
            Old Approach
            <RefsDemoOldApproach />            </div>            

            <hr />

            <li><h1>Refs with Class components</h1></li>

            <div>
            <FocusInput />
            </div>            

            <hr />

            <li><h1>Forwarding Refs</h1></li>

            <div>
            <FRParentInput />
            </div>            

            <hr />


            <li><h1>Portals</h1></li>

            <div>
            <PortalDemo />
            </div>            

            <hr />

            <li><h1>Error Boundary</h1></li>

            <div>
              <ErrorBoundary>
                <Hero heroName="Batman" />
                </ErrorBoundary>
                <ErrorBoundary>
                <Hero heroName="Superman" />                
                </ErrorBoundary>
                <ErrorBoundary>

                <Hero heroName="Joker" />
              </ErrorBoundary>
            </div>            

            <hr />

            <li><h1>Higher Order Components - Part 1</h1></li>

            <div>
            <ClickCounter />
            <HoverCounter />

            </div>            

            <hr />

            <li><h1>HOC - Higher Order Components - Part 2</h1></li>

            <div>
            <ClickCounterEnhanced />
            <HoverCounterEnhanced />

            </div>            

            <hr />

            <li><h1>HOC - Higher Order Components - Part 3</h1></li>

            <div>
            <ClickCounterEnhanced name='Vishwas'/>
            <HoverCounterEnhanced />

            </div>            

            <hr />

            <li><h1>Render Props</h1></li>

            <div>
              Using this.props.render
              <div>


              <CounterRenderProp 
                render={(count, incrementCount) => (

                  <ClickCounterTwo count={count} incrementCount={incrementCount} />

                ) }
              
              />

              <CounterRenderProp 
                render={(count, incrementCount) => (

                  <HoverCounter count={count} incrementCount={incrementCount} />

                ) }
              
              />

              </div> 

              Using this.props.children
              <div>


              <CounterRenderChildren>
                {(count, incrementCount) => (

                  <ClickCounterTwo count={count} incrementCount={incrementCount} />

                ) }
              
                </CounterRenderChildren>

              <CounterRenderChildren>
                {(count, incrementCount) => (

                  <HoverCounter count={count} incrementCount={incrementCount} />

                ) }
              
              </CounterRenderChildren>

              </div>  
            </div>          

            <hr />

            <li><h1>Context</h1></li>

            <div>
                  <UserProvider value="Vishwas" >
                    <ComponentC />
                  </UserProvider>

            </div>          

            <hr />

            <li><h1>React and HTTP</h1></li>

            <div>
                  <UserProvider value="Vishwas" >
                    <ComponentC />
                  </UserProvider>

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
