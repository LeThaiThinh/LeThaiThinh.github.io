import React from 'react'
import  {BodyContentBookDefault} from './BodyContentBookDefault'
import  {BodyContentHomeDefault} from './BodyContentHomeDefault'
import {BodyContentMenuDefault} from './BodyContentMenuDefault'
import { useSelector } from 'react-redux'

function MainBody() {
        const type = useSelector(state => state.ChangePageReducer);
        return (
                newFunction(type)              
            )
}

export default MainBody

function newFunction(type) {
    switch (type) {
        case 'HOME': return(
                <BodyContentHomeDefault/>
            )
        case 'BOOK': return(
                <BodyContentBookDefault/>
        )
        case 'MENU': return(
                <BodyContentMenuDefault/>
        )
        default: return 'this is default';
    }
}
