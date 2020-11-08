import React, { Component } from 'react';
import { DowolnaNazwaKontekstu } from '../contexts/ThemeContext';

// class ThemeToggle extends Component {
//     static contextType = DowolnaNazwaKontekstu;
//     render() { 
//         const { toggleTheme } = this.context;
//         return ( 
//             <button onClick={toggleTheme}>Toggle the theme</button>
//          );
//     }
// }

class ThemeToggle extends Component {
    state = {}
    render() {
        return (
            <DowolnaNazwaKontekstu.Consumer>{(context) => {
                const { toggleTheme } = context;
                return (
                    <button onClick={toggleTheme}>Toggle the theme</button>
                );
            }}
            </DowolnaNazwaKontekstu.Consumer>
        );
    }
}




export default ThemeToggle;