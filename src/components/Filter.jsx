
function Filter({filterName,checkedFilter}) {
    return (
        <div onClick={() => checkedFilter(filterName)} className="p-[7px] bg-[#ffffff6b] rounded-md cursor-pointer hover:bg-slate-700 hover:text-white transition-all duration-100 md:text-sm">{filterName}</div>
    );
}

export default Filter;