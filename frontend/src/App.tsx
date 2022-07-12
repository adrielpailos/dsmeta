import Header from './components/header'
import SalesCard from './components/salescard'
function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard/>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
