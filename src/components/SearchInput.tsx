import { Form } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const SearchInput = () => {
  return (
    <div className="position-relative">
      <Form.Control
        type="text"
        placeholder="Search..."
        className="rounded-pill bg-light"
        style={{ paddingLeft: '40px', backgroundColor: 'var(--light-color)' }} 
      />
      <FaSearch
        className="position-absolute"
        style={{
          left: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#888',
        }}
      />
    </div>
  );
};

export default SearchInput;
