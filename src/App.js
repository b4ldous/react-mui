import BasicGrid from "./components/BasicGrid";
import BoxComponent from "./components/BoxComponent";
import BoxSx from "./components/BoxSx";
import FixedContainer from "./components/FixedContainer";
import GridMultipleBreakPoints from "./components/GridMultipleBreakPoints";
import SimpleContainer from "./components/SimpleContainer";


function App() {
  return (

    <>
    <h1>Layout Components</h1>
    <h2>Box</h2>
    <BoxSx/>
    <h2>Overriding MUI components</h2>
    <BoxComponent/>
    <hr></hr>
    <hr></hr>
    <h2>Container</h2>
    <p>The container centers your content horizontally. It's the most basic layout element.</p>
    <h3>Fluid</h3>
    <p> A fluid container width is bounded by the maxWidth prop value.</p>
    <SimpleContainer/>
    <h3>Fixed</h3>
    <FixedContainer/>
    <hr></hr>
    <hr></hr>
    <h1>Grid</h1>
    <h2>Basic</h2>
    <BasicGrid/>
    <h2>Multiple Breakpoints</h2>
    <GridMultipleBreakPoints/>
    <br></br>
    


    </>
    
  );
}

export default App;
