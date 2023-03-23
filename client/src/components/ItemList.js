import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ITEMS_BY_TAGS } from '../utils/queries';
import { useEffect } from 'react';
import Item from './Item';

const ItemList = () => {
	
	let hrefSplit = window.location.href.split('/');
	let tags = [];
	let itemTag = hrefSplit[hrefSplit.length - 1];
	if (itemTag) {
		tags.push(itemTag);
	}
	let categoryTag = hrefSplit[hrefSplit.length - 2];
	if (categoryTag) {
		tags.push(categoryTag);
	}
	let pageTag = hrefSplit[hrefSplit.length - 1];
	if (pageTag) {
		tags.push(pageTag);
	}
console.log('tags' + tags);
	const { loading, data } = useQuery(QUERY_ITEMS_BY_TAGS, {
		variables: { tags: tags },
		fetchPolicy: 'cache-and-network' //gets most updated data
	});

	const items = data?.itemsByCategory || [];
	
	return (
		<div className='categoryItemContainer'>
			{loading ? (
				<div>...loading</div>
			) : (
				 (
					<div className="categoryList">
						{items.map((item) => (
							<Item key= {item.name} displayItem ={item} />
						))}
					</div>
				)
			)}
		</div>
	);
};

export default ItemList;