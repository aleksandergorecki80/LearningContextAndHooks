import React, { Component} from 'react';
import { DowolnaNazwaKontekstu } from '../contexts/ThemeContext';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <DowolnaNazwaKontekstu.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;
                return (
                    <nav style={ { background: theme.ui, color: theme.syntaxt } }>
                    <h1>Context App</h1>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        
                    </ul>
                </nav>
                )
            }}
            </DowolnaNazwaKontekstu.Consumer>
         );
    }
}
 
export default Navbar;