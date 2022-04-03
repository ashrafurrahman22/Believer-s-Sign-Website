import React from 'react';
import { Dropdown } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <div>
            <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    What is Context Api
  </Dropdown.Toggle>
  <Dropdown.Menu>
    
    <p>this is a library.</p>
  </Dropdown.Menu>
</Dropdown>
            </div>
            <div>
            <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  What is Semantic tag?
  </Dropdown.Toggle>
  <Dropdown.Menu>
    
    <p>this is a library.</p>
  </Dropdown.Menu>
</Dropdown>
            </div>

            <div>
            <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    What is the differences between inline and block elements?
  </Dropdown.Toggle>
  <Dropdown.Menu>
    
    <p>this is a library.</p>
  </Dropdown.Menu>
</Dropdown>
            </div>
        </div>
    );
};

export default Blogs;