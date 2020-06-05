import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Auth from "./pages/auth/auth.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: null,
		};
	}

	// We don't want to remount our app, we just want to always know when Firebase says that auth state has changed.
	// Firebase makes that happen really easily
	unsubscribeFromAuth = null;

	componentDidMount() {
		//subscriber to persist user session
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			// this.setState({ currentUser: user });
			// createUserProfileDocument(user);
			if (userAuth) {
				const userReference = await createUserProfileDocument(userAuth);
				// returns snapshot object moment of data related to user that we JUST stored or was already in db
				userReference.onSnapshot((snapshot) => {
					this.setState({
						currentUser: {
							id: snapshot.id,
							...snapshot.data(),
						},
					});
				});
			} else {
				// on logout it sets to null object we get back from the auth library
				this.setState({ currentUser: userAuth });
			}
		});
	}

	// close sub and prevent memory leaks
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" component={Auth} />
				</Switch>
			</div>
		);
	}
}

export default App;
