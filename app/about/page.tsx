import AnimatedText from '../components/AnimatedText';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';

const Home = () => {
  return (
    <main className='flex w-full flex-col items-center justify-center dark:text-light'>
      <div className="w-full h-full inline-block p-16 md:p-32">
        
        <Skills />

        <Experience />

        <Education />

      </div>
    </main>
  )
}

export default Home;