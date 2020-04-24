import React, { useEffect } from 'react';
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar';
import MainControls from './components/MainControls/MainControls';
import { connect } from 'react-redux';
import * as Actions from '../src/store/action';
import './App.css';

function App( props ) {

  useEffect(() => {
    // We show the loader for a bit and then update the isLoading property to false
    setTimeout( () => {
      props.onUpdateIsLoading( false )
    }, 2000 );
  });

  return (
    <div className="App">
      <Navbar />
      <MainControls />
      <Content />
    </div>
  );
}

function mapDispatchToProps( dispatch ) {
  return {
    onUpdateIsLoading: ( isLoading ) => dispatch( Actions.updateIsLoading( isLoading ) )
  };
}

export default connect( null, mapDispatchToProps )( App );
