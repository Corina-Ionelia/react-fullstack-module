// src/Manu.jsx
import PropTypes from 'prop-types';

const Manu = ({ items }) => {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item.name}</li>
            ))}
        </ul>
    );
};

Manu.propTypes = {
    items: PropTypes.array.isRequired,
};

export default Manu;
