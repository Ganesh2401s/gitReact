import PropTypes  from 'prop-types';

function DynamicList (props) {

    const itemList = props.item ;
    const category = props.category;

    // itemList.sort((a,b) => b.carName.localeCompare(a.carName));

    // itemList.sort((a, b)=> a.topSpeedKmph -b.topSpeedKmph)

    const listItems = itemList.map(item => <li key={item.id}> {item.carName}: {item.topSpeedKmph} Kmph</li>)
    
    return (
    <> 
         <h1 className='item-category'>{category}</h1>
         <ul className='item-list'> {listItems}</ul>

    </>);
}

DynamicList.propTypes = {
    item : PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, 
        carName : PropTypes.string,
        topSpeedKmph : PropTypes.number
    })), 
    category : PropTypes.string, 
}

DynamicList.defaultProps = {
    item : [], 
    category : " Category Not defined", 
}

export default DynamicList