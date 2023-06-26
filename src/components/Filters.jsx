import Filter from './Filter';

function Filters({filterData, checkedFilter}) {
    return(
        <div className='flex w-full justify-around text-lg font-bold text-slate-800 mb-6 flex-wrap gap-2'>
            {
                filterData.map((eachFilter) => {
                    return <Filter key={eachFilter.id} filterName = {eachFilter.title} checkedFilter = {checkedFilter}></Filter>
                })
            }
        </div>
    );
}

export default Filters;