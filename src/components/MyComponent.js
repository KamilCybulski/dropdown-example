import React from 'react';

import { Dropdown } from './common';

const MyButton = () => (
  <div
    style={{
      width: '300px',
      height: '50px',
      backgroundColor: 'grey',
      color: 'white'
    }}
  >
    Lorem ipsum dolor
  </div>
);

const MyPanel = () => (
  <div
    style={{
      width: '500px',
      height: '400px',
      backgroundColor: 'grey',
      color: 'white'
    }}
  >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque non sunt velit id, necessitatibus accusantium maxime quidem autem officia, facilis totam ipsum adipisci minus esse debitis. Provident, maxime voluptatibus! Consectetur?
    Enim minima rem fugiat veritatis ipsam, nemo et in dolore similique ullam recusandae cupiditate voluptates dolorum esse asperiores numquam tenetur unde, dicta doloremque velit officiis commodi. Repudiandae deserunt voluptatem ipsa!
    Sed odit asperiores aliquam consequuntur. Natus, atque quae? Repudiandae velit, omnis illo laborum unde in. Cumque iure ducimus eaque voluptatem, optio cupiditate sunt consequuntur, nulla ea fugit nesciunt qui expedita.
  </div>
);


const MyComponent = () => (
  <Dropdown>
    <Dropdown.Button>
      <MyButton />
    </Dropdown.Button>
    <Dropdown.Panel>
      <MyPanel />
    </Dropdown.Panel>
  </Dropdown>
);

export default MyComponent;
