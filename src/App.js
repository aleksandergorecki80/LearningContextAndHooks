import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import DowolnaNazwaKontekstuProvider from './contexts/ThemeContext';


const App = () => {
  return (
    <div className="App">
      <DowolnaNazwaKontekstuProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </DowolnaNazwaKontekstuProvider>

    </div>
  );
}

export default App;
