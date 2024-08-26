const Manu = ({ items }) => {
    return (
        <ul>
            {items.map((item, index) => (
                return <li key={index}>{item.name}</li>
            ))}
        </ul>
    );
};

Manu.propTypes = {
    items: propTypes.array,
};

export default Manu;