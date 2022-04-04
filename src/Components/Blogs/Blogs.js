import React from 'react';
import { Dropdown } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <div>
            <Dropdown>
  <Dropdown.Toggle variant="success w-50 my-3 mx-3" id="dropdown-basic">
    What is Context Api
  </Dropdown.Toggle>
  <Dropdown.Menu variant='mx-3 my-3 p-5'>
    
    <p>Context Api is an alternative of Props drilling. If we need to send data from grandparents to child components then we need to do props drilling. But props drilling isn't a good way. Because of that we have another solution called Context Api. We can send single or multiple data to any componenets by context Api. Context Api made developer life easier.</p>
  </Dropdown.Menu>
</Dropdown>
            </div>
            <div>
            <Dropdown>
  <Dropdown.Toggle variant="success w-50 my-3 mx-3" id="dropdown-basic">
  What is Semantic tag?
  </Dropdown.Toggle>
  <Dropdown.Menu variant='mx-3 my-3 p-5'>
    
    <p>A semantic tag clearly describes its meaning. Let's start with examples, in html the div tag tells nothing about its content, but an article tag has a specifik meaning. we know that article tag refers that there would be an article. But div tag tell us nothing. Here is the difference. Semantic tag will tell us whats their work in html.</p>
  </Dropdown.Menu>
</Dropdown>
            </div>

            <div>
            <Dropdown>
  <Dropdown.Toggle variant="success w-50 my-3 mx-3" id="dropdown-basic">
    What is the differences between inline and block elements?
  </Dropdown.Toggle>
  <Dropdown.Menu variant='mx-3 my-3 p-5'>
    
    <p>Every HTML element has a default display value, depending on what type of element it is.</p>
    <p>There are two display values: block and inline</p>
    <p>A block-level element always starts on a new line. It always takes up the full width available.</p>
    <p>On the other hand, An inline element does not start on a new line. It only takes up as much width as necessary.</p>
  </Dropdown.Menu>
</Dropdown>
            </div>
        </div>
    );
};

export default Blogs;