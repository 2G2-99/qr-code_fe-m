import './App.css';
import Card from './components/Card';

function App() {
  return (
    <>
      <div className='content-grid'>
        <main className='full-width'>
          <section className='feature'>
            <Card />
          </section>
        </main>
        <footer>
          <div className='attribution'>
            Challenge by
            <a
              href='https://www.frontendmentor.io?ref=challenge'
              target='_blank'
            >
              Frontend Mentor
            </a>
            . Coded by{' '}
            <a
              href='https://www.frontendmentor.io/profile/2G2-99'
              target='blank'
            >
              Santiago Gomez
            </a>
            .
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
