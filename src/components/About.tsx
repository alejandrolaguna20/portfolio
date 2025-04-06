import { useEffect, useState } from 'react';
import image from '../assets/sketch.png';

const taglines = [
	"Amateur Writer",
	"Bookworm",
	"Star Gazer",
	"Physics Enthusiast",
	"Lifelong Learner",
	"Tea Enthusiast",
	"Cosmic Explorer",
	"Knowledge Seeker",
];

export default function About({ theme }) {
	const [tagline, setTagline] = useState('');

	useEffect(() => {
		const randomTagline = taglines[Math.floor(Math.random() * taglines.length)];
		setTagline(randomTagline);
	}, []);

	return (
		<section id="about" class="pt-8">
			<div class="flex flex-col md:flex-row gap-8 items-center">
				<div class="flex-1">
					<h1 class={`text-4xl md:text-5xl mb-4 ${theme.accent} font-serif font-semibold`}>Alejandro Laguna</h1>
					<h2 class="text-xl md:text-2xl mb-6 text-[#b8c4b5]/80 font-medium font-serif">Software Engineer & {tagline}</h2>
					<p class="text-lg mb-6 text-[#b8c4b5]/90">
						Crafting digital projects that inspire me, while exploring everything from books and tea to space and science. First-year computer science student.
					</p>
					<div class="flex gap-4">
						<a href="#projects" class={`px-6 py-2 rounded-full border ${theme.border} ${theme.hover} transition-all hover:-translate-y-0.5`}>
							View Work
						</a>
						<a href="mailto:alejandro.laguna@epitech.eu" class={`px-6 py-2 rounded-full ${theme.button} transition-all hover:-translate-y-0.5`}>
							Contact
						</a>
					</div>
				</div>
				<div class="flex-1 flex justify-center">
					<img src={image} alt="Alex Clark's Sketch" class="w-64 h-64 rounded-full object-cover" />
				</div>
			</div>
		</section>
	);
}

