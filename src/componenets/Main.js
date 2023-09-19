import React from 'react';
import { marked } from 'marked';

const Main = () => {
	const [text, setText] = React.useState('');

	const handleChange = (e) => {
		setText(e.target.value);
	};

	return (
		<main className="main-container">
			<div className="input-field">
				<textarea
					type="text"
					placeholder="Enter your text here"
					onChange={handleChange}
					value={text}
				/>
			</div>
			<div
				className="preview-container"
				dangerouslySetInnerHTML={{ __html: marked(text) }}
			></div>
		</main>
	);
};

export default Main;
