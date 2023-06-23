import React from 'react';
import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='keywords' content={keywords} />
		</Helmet>
	);
};

Meta.defaultProps = {
	title: 'Welcome To ShopLuxe',
	keywords: 'Electronics, ShopLuxe, Ecommerce',
	description: 'Buy the best products at the lowest prices',
};
export default Meta;
