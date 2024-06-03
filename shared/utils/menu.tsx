import React from 'react';
import Cart from '../../assets/icons/Cart.icon';
import FavIcon from '../../assets/icons/Fav.icon';

export const MENU = [
	{
		text: 'My orders',
		icon: <Cart />,
		path: 'orders/index',
	},

	{
		text: 'My favorites',
		icon: <FavIcon />,
		path: 'favorites/index',
	},
];
