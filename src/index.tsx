import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';
import { Home } from './pages/Home/index.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';
import { Header } from './components/Header.js';

export function App() {
	const theme = {
		bg: 'bg-[#1c2529]',
		text: 'text-[#f0e4c8]',
		accent: 'text-[#c7dd9a]',
		accent2: 'text-[#f0b090]',
		border: 'border-[#344146]',
		card: 'bg-[#263136]',
		hover: 'hover:text-[#fff4d8]',
		button: 'bg-[#344146] hover:bg-[#49555a] text-[#f0e4c8]',
		bg_hl: 'bg-[#344146]',
		gradient: 'from-[#1c2529] via-[#263136] to-[#1c2529]'
	}

	return (
		<LocationProvider>
			<Header
				theme={theme}
			/>
			<main>
				<Router>
					<Route
						path="/"
						component={() => (
							<Home
								theme={theme}
							/>
						)}
					/>
					<Route default component={() => (<Home theme={theme} />)} />
				</Router>
			</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
