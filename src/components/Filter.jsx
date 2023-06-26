
function Filter({filterName,checkedFilter}) {
    return (
        <button onClick={() => checkedFilter(filterName)}>{filterName}</button>
    );
}

export default Filter;