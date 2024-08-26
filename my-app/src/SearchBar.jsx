// src/SearchBar.jsx
import PropTypes from 'prop-types';

const SearchBar = ({ text, isVisible, price }) => {
  if (!isVisible) return null; // Ascunde componenta dacă nu este vizibilă

  return (
    <div>
      <p>{text}</p>
      <p>Price: {price}</p>
    </div>
  );
};

SearchBar.propTypes = {
  text: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
  price: PropTypes.number,
};

export default SearchBar;
