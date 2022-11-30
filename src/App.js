import React from "react";
import VideoInput from './components/Videoinput';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <h1>Video upload</h1>
      <VideoInput width={400} height={300} />
    </div>
  );
}