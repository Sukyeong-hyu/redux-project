import React, { useState } from 'react';
import { connect } from 'react-redux';

function Home(props) {
  console.log(props);
  const [text, setText] = useState('');
  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    setText('');
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add!</button>
      </form>
      <ul></ul>
    </>
  );
}

// MapStateToProps: look at the store and define what to put as a props
// mapStateToProps(state, ownProps)
// gets current state of Redux as a parameter
function mapStateToProps(state) {
  return { toDos: state };
}

// connect: MapStateToProps return props => connect with Home Props
// connects store and components
export default connect(mapStateToProps)(Home);
