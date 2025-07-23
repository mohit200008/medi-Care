import React from 'react';
import BodyCard from './BodyCard';

const Homepagehi = () => {
	const cards = [
		{
			title: 'Card 1',
			description: 'Description for Card 1',
			imageUrl: '/path/to/image1.jpg',
			linkTo: '/card1'
		},
		{
			title: 'Card 2',
			description: 'Description for Card 2',
			imageUrl: '/path/to/image2.jpg',
			linkTo: '/card2'
		},
		// Add more cards as needed
	];

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold text-center mb-8">Welcome to Our Homepage</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{cards.map((card, index) => (
					<BodyCard
						key={index}
						title={card.title}
						description={card.description}
						imageUrl={card.imageUrl}
						linkTo={card.linkTo}
					/>
				))}
			</div>
		</div>
	);
};

export default Homepagehi;
