import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.scss';
import PageHeader from './components/PageHeader/PageHeader';

function App() {
  return (
    <div className="App">
      <PageHeader title="Rules Generator" />
    </div>
  );
}

export default App;
