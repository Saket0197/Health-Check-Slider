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
        setIndex(0);
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
        <div className='flex flex-col w-full items-center relative'>
            <Filters filterData = {filterData} checkedFilter = {checkedFilter}></Filters>
            <Content filterChecked = {filterChecked} index={index} response={response}></Content>
            <button onClick={decInd} className='absolute md:left-[2%] left-[5%] bg-[#5a515177] rounded-full md:top-[20%] top-[30%] text-[#1d1a1a] hover:bg-[#fcfcfc] font-bold text-7xl md:text-4xl transition-all duration-150'> <FiChevronLeft/> </button>
            <button onClick={incInd} className='absolute md:right-[2%] right-[5%] bg-[#5a515177] rounded-full md:top-[20%] top-[30%] text-[#1d1a1a] font-bold text-7xl md:text-4xl hover:bg-[#fcfcfc] transition-all duration-150'> <FiChevronRight/> </button>
            <button onClick={surprise} className='bg-red-500 hover:bg-red-600 transition-all duration-200 text-lg text-white font-bold py-2 px-6 rounded-2xl my-4'> surprise </button>
        </div>
    );

}

export default Card;