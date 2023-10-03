//create component
class Hello extends React.Component {
  //render function
  render() {
    // return JSX
    return <h1>Hello World using Reactjs !!!</h1>;
  }
}

// react dom call function render
ReactDOM.render(<Hello />, document.getElementById('app'));
