// Components
import Footer from "./components/Footer";
import Header from "./components/Header";

// CSS
import styles from "./App.module.css"


function App() {
  return (
    <div className="App">
      <Header />
      <main className={styles.main}></main>
      <h1>Conteúdo...</h1>
      <Footer />
    </div>
  );
}

export default App;
