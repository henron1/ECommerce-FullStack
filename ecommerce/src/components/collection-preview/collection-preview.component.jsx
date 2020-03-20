import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

// This chain of methods gets run every time as long as the component has to rerender so this could be a performance concern if the array gets huge.

const CollectionPreview = ({ title, items }) => (
	<div className="collection-preview">
		<h1 className="title">{title}</h1>
		<div className="preview">
			{items
				.filter((item, index) => index < 4)
				.map(({ id, ...itemProps }) => (
					<CollectionItem key={id} {...itemProps} />
				))}
		</div>
	</div>
);

export default CollectionPreview;
