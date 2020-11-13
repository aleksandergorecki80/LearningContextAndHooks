import React, { Component, useContext } from 'react';
import { DowolnaNazwaKontekstu } from '../contexts/ThemeContext';

// class BookList extends Component {
//     state = {  }
//     static contextType = DowolnaNazwaKontekstu;

//     render() { 
//         console.log(this.context);
//         const { isLightTheme, light, dark } = this.context;
//         const theme = isLightTheme ? light : dark;
//         return ( 
//             <div className='book-list' 
//             style={ { background: theme.bg, color: theme.syntaxt } }>
//                 <ul>
//                     <li style={ { background: theme.ui } }>The way of kings</li>
//                     <li style={ { background: theme.ui } }>The name of the wind</li>
//                     <li style={ { background: theme.ui } }>The final empire</li>
//                 </ul>
//             </div>
//          );
//     }
// }
 
// export default BookList;

const BookList = () => {
    const { isLightTheme, light, dark } = useContext(DowolnaNazwaKontekstu);
    const theme = isLightTheme ? light : dark;
    return ( 
        <div className='book-list' 
        style={ { background: theme.bg, color: theme.syntaxt } }>
            <ul>
                <li style={ { background: theme.ui } }>The way of kings</li>
                <li style={ { background: theme.ui } }>The name of the wind</li>
                <li style={ { background: theme.ui } }>The final empire</li>
            </ul>
        </div>
     );
}
 


export default BookList;