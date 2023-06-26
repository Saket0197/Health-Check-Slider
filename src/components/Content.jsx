import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa';

function Content({filterChecked,index,response}) {
    let content = response[filterChecked][index];
    return (
        <div>
            <figure>
                <div>
                    <img src={content.image} alt="content display"/>
                </div>
                <figcaption>
                    {content.name}
                </figcaption>
            </figure>
            <div>{content.category}</div>
            <FaQuoteLeft/>
            <p>{content.text}</p>
            <FaQuoteRight/>
        </div>
    );
}

export default Content;