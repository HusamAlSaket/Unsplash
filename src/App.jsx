import Gallery from './Gallery';
import SearchForm from './SearchForm';
import ThemeToggle from './ThemeToggle';
import { useGlobalContext } from './Context';
import { useEffect } from 'react';

const App = () => {
  const { isDarkTheme } = useGlobalContext();

  useEffect(() => {
    document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
  }, [isDarkTheme]);

  return (
    <main>
      <div className="container">
        <ThemeToggle />
        <SearchForm />
        <Gallery />
      </div>
    </main>
  );
};

export default App;
