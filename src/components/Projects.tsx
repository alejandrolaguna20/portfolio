import ProjectCard from './ProjectCard';

const projects = [
	{
		title: "Morph",
		description: "Lightweight URL shortening API built in Go with minimal dependencies. First ever project with this language, and I tried to focus on the stdlib and build any needed tools",
		tech: ["Go"],
		year: "2025",
		link: "https://github.com/alejandrolaguna20/morph"
	},
	{
		title: "Runes",
		description: "A small, simple, smooth and beautiful flashcard TUI program featuring keyboard navigation and custom study sessions. Built with Go and the Bubbletea framework.",
		tech: ["Go", "Bubbletea"],
		year: "2025",
		link: "https://github.com/alejandrolaguna20/nook.nvim"
	},
	{
		title: "Nook.nvim",
		description: "A tiny Neovim plugin created to manage tasks in a way that perfectly fits my personal workflow ",
		tech: ["Lua"],
		year: "2025",
		link: "https://github.com/alejandrolaguna20/nook.nvim"
	},
	{
		title: "Portfolio",
		description: "The website you are currently browsing, my little corner on the web.",
		tech: ["Typescript", "PreactJS", "TailwindCSS", "Vite"],
		year: "2025",
		link: "https://github.com/alejandrolaguna20/portfolio"
	},
	{
		title: "Epitech Projects",
		description: "A variety of projects I am building in my first year @ Epitech that range from algorithm implementation, graphical and mathematical simulations, and developing from scratch different Linux commands and programs, including a shell.",
		tech: ["C", "Bash", "Python"],
		year: "2025",
		link: "https://www.epitech.eu/programme-grande-ecole-informatique/"
	}
];

export default function Projects({ theme }) {
	return (
		<section id="projects">
			<h2 class={`text-3xl font-semibold font-serif mb-8 ${theme.accent}`}>Projects</h2>
			<div class="grid gap-6">
				{projects.map((project, i) => (
					<ProjectCard key={i} project={project} theme={theme} />
				))}
			</div>
		</section>
	);
}

