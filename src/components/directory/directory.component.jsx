import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

import DirectoryContext from '../../contexts/directory/directory.context';

const Directory = () => {
  const { sections } = React.useContext(DirectoryContext);
  return(
  <div className='directory-menu'>
    {sections.map(
      ({ id, ...otherSectionProps }) =>  //Destructure section to it's keys, to avoid rewriting section
        (
          <MenuItem key={id} {...otherSectionProps} />
        )
    )}
  </div>
)};

export default Directory;