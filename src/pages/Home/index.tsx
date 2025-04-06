import { useState, useEffect } from 'preact/hooks';
import Layout from '../../components/Layout';
import About from '../../components/About';
import Projects from '../../components/Projects';
import Experience from '../../components/Experience';
import Footer from '../../components/Footer';
import Education from '../../components/Education';

export function Home({ theme }) {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => setScrollPosition(window.scrollY);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<Layout theme={theme}>
			<About theme={theme} />
			<Education theme={theme} />
			<Experience theme={theme} />
			<Projects theme={theme} />
			<Footer theme={theme} />
		</Layout>
	);
}

