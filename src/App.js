import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import DowolnaNazwaKontekstuProvider from './contexts/ThemeContext';


const App = () => {
  return (
    <div className="App">
      <DowolnaNazwaKontekstuProvider>
        <Navbar />
        <BookList />
        <ThemeToggle />
      </DowolnaNazwaKontekstuProvider>

    </div>
  );
}

export default App;
