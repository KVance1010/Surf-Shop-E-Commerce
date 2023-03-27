import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ITEMS_BY_TAGS } from '../utils/queries';
import { DELETE_ITEM } from '../utils/mutations';
import { useEffect, useState } from 'react';
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

	const [reRender, setRerender] = useState('')

	const [deleteItemMutation, { error, deleteItemData }] =
		useMutation(DELETE_ITEM);
	const handleRerender = (string) => {
		console.log('state change')
		setRerender(string)
	}

	const { loading, data } = useQuery(QUERY_ITEMS_BY_TAGS, {
		variables: { tags: tags },
		fetchPolicy: 'cache-and-network' //gets most updated data
	});

	const items = data?.itemsByCategory || [];
	
	useEffect(() => {

	}, [reRender])

	return (
		<div className='categoryItemContainer'>
			{loading ? (
				<div>...loading</div>
			) : (
				 (
					<div className="categoryList">
						{items.map((item) => (
							<Item key= {item.name} displayItem ={item} deleteItemMutation={deleteItemMutation} handleRerender={handleRerender} />
						))}
					</div>
					
				)
			)}

		</div>
	);
};

export default ItemList;