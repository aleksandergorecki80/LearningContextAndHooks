import React, { createContext, Component } from 'react';

export const DowolnaNazwaKontekstu = createContext();

class DowolnaNazwaKontekstuProvider extends Component {
    state = { 
        isLightTheme: true,
        light: { syntaxt: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntaxt: '#ddd', ui: '#333', bg: '#555' }
     }
     toggleTheme = () => {
         this.setState( { isLightTheme: !this.state.isLightTheme} );
     }
    render() { 
        return ( 
            <DowolnaNazwaKontekstu.Provider 
                value={ {...this.state, toggleTheme: this.toggleTheme} }
            >
                {this.props.children}
            </DowolnaNazwaKontekstu.Provider>
         );
    }
}
 
export default DowolnaNazwaKontekstuProvider;