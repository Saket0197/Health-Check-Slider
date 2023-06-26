import Content from './Content';
import Filters from './Filters';
import { useState } from 'react';
import filterData from '../filterData';
import response from '../data';
import {FiChevronLeft,FiChevronRight,} from 'react-icons/fi';

function Card() {

    const [filterChecked,setFilterChecked] = useState(`${filterData[0].title}`);
    const [index,setIndex] = useState(0);

    function checkedFilter(filterName) {
        setFilterChecked(filterName);
    }

    function decInd() {
        if(index === 0) {
            setIndex(response[filterChecked].length - 1);
        }
        else {
            setIndex((prevIndex) => prevIndex - 1);
        }
    }

    function incInd() {
        if(index === (response[filterChecked].length - 1)) {
            setIndex(0);
        }
        else {
            setIndex((prevIndex) => prevIndex + 1);
        }
    }

    function surprise() {
       let filterArr =  Object.keys(response);
       let filterInd = Math.floor(Math.random()*filterArr.length);
       let categoriesArr = response[filterArr[filterInd]];
       let categoryInd = Math.floor(Math.random()*categoriesArr.length);
       setFilterChecked(filterArr[filterInd]);
       setIndex(categoryInd);
    }

    return(
        <div>
            <Filters filterData = {filterData} checkedFilter = {checkedFilter}></Filters>
            <Content filterChecked = {filterChecked} index={index} response={response}></Content>
            <button onClick={decInd}> <FiChevronLeft/> </button>
            <button onClick={incInd}> <FiChevronRight/> </button>
            <button onClick={surprise}> surprise </button>
        </div>
    );

}

export default Card;