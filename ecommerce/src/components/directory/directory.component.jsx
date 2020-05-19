import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: [
				{
					title: "Vinyl",
					imageUrl:
						"https://cdn.pixabay.com/photo/2016/01/19/16/46/record-player-1149385_1280.jpg",
					id: 1,
					linkUrl: "shop/vinyl"
				},
				{
					title: "Movies",
					imageUrl:
						"https://cdn.pixabay.com/photo/2013/04/11/02/20/film-102681_1280.jpg",
					id: 2,
					linkUrl: "shop/movies"
				},
				{
					title: "Video Games",
					imageUrl:
						"https://cdn.pixabay.com/photo/2016/02/23/02/17/controller-1216816_1280.jpg",
					id: 3,
					linkUrl: "shop/video-games"
				},
				{
					title: "Books",
					imageUrl:
						"https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029_1280.jpg",
					size: "large",
					id: 4,
					linkUrl: "shop/books"
				},
				{
					title: "CDs",
					imageUrl:
						"https://cdn.pixabay.com/photo/2017/06/05/18/40/cd-2374855_1280.jpg",
					size: "large",
					id: 5,
					linkUrl: "shop/cds"
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
