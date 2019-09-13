import React from 'react';
import CollectionPreview from '../collection-preview/collection-preview.component';
import './collections-overview.styles.scss';
import CollectionsContext from '../../contexts/collections/collections.context';

const CollectionsOverview = () => {
  const shopData = React.useContext(CollectionsContext);
  const collections = Object.keys(shopData).map(key => shopData[key]);
  return(
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
)};

export default CollectionsOverview;