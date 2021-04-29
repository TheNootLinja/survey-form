import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import SubmitConfirm from './components/SubmitConfirm'

function App() {
  const [submitted, setSubmitted] = useState(false);
  const showSubmit = () => {
    console.log('SHOWING SUBMITTED!')
    setSubmitted(true);
  }
  return <div className="App">
    <Header />
    {/* TODO: Want to add an animation to the transition when 
    hiding the Form showing the SubmitConfirm component */}
    {!submitted ? <Form onSubmit={showSubmit}/> : <SubmitConfirm />}
  </div>;
}

export default App;
