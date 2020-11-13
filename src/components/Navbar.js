// import React, { Component, useContext } from 'react';
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { DowolnaNazwaKontekstu } from '../contexts/ThemeContext';

// class Navbar extends Component {
//     state = {}
//     render() {
//         return (
//             <AuthContext.Consumer>{(authContext) => (
//                 <DowolnaNazwaKontekstu.Consumer>{(themeContext) => {
//                     const { isLightTheme, light, dark } = themeContext;
//                     const { isAuthenticated, toggleAuth } = authContext;
//                     const theme = isLightTheme ? light : dark;
//                     return (
//                         <nav style={{ background: theme.ui, color: theme.syntaxt }}>
//                             <h1>Context App</h1>
//                             <div>
//                                 <div>{isAuthenticated ? 'You are logged in' : 'You are logged out'}</div>
//                                 <div> {isAuthenticated ? <button onClick={toggleAuth}>Log out</button> : <button onClick={toggleAuth}>Log in</button>}</div>
//                             </div>
//                             <ul>
//                                 <li>Home</li>
//                                 <li>About</li>
//                                 <li>Contact</li>
//                             </ul>
//                         </nav>
//                     )
//                 }}
//                 </DowolnaNazwaKontekstu.Consumer>
//             )}
//             </AuthContext.Consumer>
//         );
//     }
// }

// export default Navbar;

const Navbar = () => {
    const { isLightTheme, light, dark } = useContext(DowolnaNazwaKontekstu);
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const theme = isLightTheme ? light : dark;
    return (
        <nav style={{ background: theme.ui, color: theme.syntaxt }}>
            <h1>Context App</h1>
            <div>
                <div>{isAuthenticated ? 'You are logged in' : 'You are logged out'}</div>
                <div> {isAuthenticated ? <button onClick={toggleAuth}>Log out</button> : <button onClick={toggleAuth}>Log in</button>}</div>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;