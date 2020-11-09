import './App.scss';
import Menu from './component/Menu/Menu';
import ProductList from './component/ProductList/ProductList';
import routes from './routes/routes'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
	const showContentMenu = (routes) => {
		var result = null
		result = routes.map((route, index) => {
			return (
				<Route key={index} path={route.path} exact={route.exact} component={route.main}></Route>
			)
		})
		return <Switch> {result}</Switch>
	}
	return (
		<Router>
			<div className="App">
				<Menu />
				<div className="container">
					{showContentMenu(routes)}
				</div>
			</div >
		</Router>
	);
}

export default App;
