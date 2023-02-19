
import './App.css';
import { Routes, Route, Link, Router } from "react-router-dom";
import Landing from './pages/Landing';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesConfig from './config/particles-config';



function App() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);

  return (

    <>
    
    <div className="App">
      <Particles id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesConfig}
            />
      <Routes>
      <Route path='/' element={<Landing/>} />
      </Routes>
    </div>
    </>
  )
}

export default App
