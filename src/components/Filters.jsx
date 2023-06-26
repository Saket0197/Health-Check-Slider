import Filter from './Filter';

function Filters({filterData, checkedFilter}) {
    return(
        <div>
            {
                filterData.map((eachFilter) => {
                    return <Filter key={eachFilter.id} filterName = {eachFilter.title} checkedFilter = {checkedFilter}></Filter>
                })
            }
        </div>
    );
}

export default Filters;