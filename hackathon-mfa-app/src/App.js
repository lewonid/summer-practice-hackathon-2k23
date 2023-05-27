import Header from './components/Header';
import GenCodesContainer from './components/GenCodesContainer';

import './App.css'
import style from './assets/App.module.css'

function App() {
  return (
    <div className={style.App}>
      <Header />
      <GenCodesContainer />
    </div>
  );
}

export default App;
