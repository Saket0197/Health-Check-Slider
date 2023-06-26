import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa';

function Content({filterChecked,index,response}) {
    let content = response[filterChecked][index];
    return (
        <div className='w-full flex flex-col items-center'>
            <figure className='flex flex-col items-center'>
                <div className='h-[10.75rem] w-[10.75rem] my-2 md:h-[7.5rem] md:w-[7.5rem]'>
                    <img src={content.image} alt="content display" className='aspect-square rounded-full h-full w-full object-cover'/>
                </div>
                <figcaption className='text-center text-[#000000] text-2xl font-bold uppercase'>
                    {content.name}
                </figcaption>
            </figure>
            <div className='text-red-950 capitalize text-lg tracking-widest font-bold my-2 text-center'>{content.category}</div>
            <div className='text-red-950'><FaQuoteLeft/></div>
            <p className='text-center md:mx-2 mx-10 text-[#000000] font-semibold my-2'>{content.text}</p>
            <div className='text-red-950'><FaQuoteRight/></div>
        </div>
    );
}

export default Content;