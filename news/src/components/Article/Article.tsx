import React from 'react';
import { ArticleProps } from '../../helpers/interfaces';

const Article: React.FC<ArticleProps> = ({ art }) => {
	return (
		<>
			<p>{art.url}</p>
			<p>{art.urlToImage}</p>
			<p>{art.title}</p>
		</>
	);
};

export default Article;
