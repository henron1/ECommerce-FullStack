import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: [
				{
					title: "hats",
					imageUrl:
						"https://cdn.pixabay.com/photo/2014/05/21/15/18/musician-349790_960_720.jpg",
					id: 1,
					linkUrl: "shop/hats"
				},
				{
					title: "jackets",
					imageUrl:
						"https://cdn.pixabay.com/photo/2016/01/19/18/04/man-1150058_960_720.jpg",
					id: 2,
					linkUrl: "shop/jackets"
				},
				{
					title: "shoes",
					imageUrl:
						"https://cdn.pixabay.com/photo/2014/09/03/20/15/legs-434918__340.jpg",
					id: 3,
					linkUrl: "shop/sneakers"
				},
				{
					title: "womens",
					imageUrl:
						"https://cdn.pixabay.com/photo/2016/11/29/03/36/beautiful-1867093_960_720.jpg",
					size: "large",
					id: 4,
					linkUrl: "shop/womens"
				},
				{
					title: "mens",
					imageUrl:
						"https://images.unsplash.com/photo-1549920867-1629df28cdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
					size: "large",
					id: 5,
					linkUrl: "shop/mens"
				}
			]
		};
	}

	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		);
	}
}

export default Directory;
