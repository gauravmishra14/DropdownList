import React from 'react';
import SelectCategory from './selectCategory/SelectCategory';
import DropDownList from './dropDownList/DropDownList.jsx';
import { colorsArray, componentsArray } from '../constants/Constants';


class Home extends React.Component{

    constructor(){
        super()
        this.state = {
            selectCat : 'colors'
        }
    }

    handleCategoryChange = e => {
        this.setState({
            selectCat: e.value,
        })
    }
    render() {
        const List = this.state.selectCat === 'colors' ? colorsArray : componentsArray
        return (
            <div className="home_wrapper">
                <h1>Dropdown with search</h1>
                <SelectCategory handleChange={this.handleCategoryChange} />
                <DropDownList showList={List} />
            </div>
        )
    };
}


export default Home;