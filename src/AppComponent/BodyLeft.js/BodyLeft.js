import React from 'react'
import { useSelector } from 'react-redux'
import BodyContentHome from "./BodyContentLeftHome"
import BodyContentBooking from './BodyContentLeftBooking'
import Footer from './Footer'
import '../../App.css'
import BodyContentMenu from './BodyContentLeftMenu'

const BodyLeft =() =>{
    
        const type = useSelector(state => state.ChangePageReducer);
        return (
            <div className='Body'>
    
                {newFunction(type)}
                <Footer/>
                  
            </div>
            )
    
}

export default BodyLeft
function newFunction(type) {
    switch (type) {
        case 'HOME': return(
                <BodyContentHome/>
            )
        case 'BOOK': return(
                <BodyContentBooking/>
        )
        case 'MENU': return(
                <BodyContentMenu/>
        )
        default: return 'this is default';
    }
}

