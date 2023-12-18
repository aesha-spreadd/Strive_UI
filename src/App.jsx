import React from 'react';
import './Main.scss';
import btnStyles from './Button.module.css';


const App = () => {
  return (
    <div>
      <header>
        <h1>Welcome to My React App</h1>
        <h2> Here I am making some changes!!!!!!!</h2>
        <h1> i Will make sure it is working or not!!!</h1>
      </header>
      <main>
        <section>
          <p>This is a simple React app. Feel free to explore!</p>
        </section>
        <section>
          <h2>Buttons with Styles</h2>
          <button className={btnStyles.success}>SUCCESS</button>
          <button className={btnStyles.error}>ERROR</button>
        </section>
      </main>
    </div>
  );
};

export default App;
