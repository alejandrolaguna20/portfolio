export default function ProjectCard({ project, theme }) {
	return (
		<div class={`p-6 rounded-xl border ${theme.border} ${theme.card} transition-all hover:-translate-y-1 group`}>
			<div class="flex justify-between items-start mb-4">
				<h3 class="text-xl">{project.title}</h3>
				<span class="text-sm text-[#b8c4b5]/50">{project.year}</span>
			</div>
			<p class="mb-4 text-[#b8c4b5]/80">{project.description}</p>
			<div class="flex flex-wrap gap-2 mb-4">
				{project.tech.map((tech, j) => (
					<span key={j} class={`px-3 py-1 rounded-full ${theme.bg} text-[#b8c4b5]/80`}>{tech}</span>
				))}
			</div>
			{project.link && (
				<a
					href={project.link}
					class={`inline-flex items-center text-sm ${theme.accent} ${theme.hover}`}
				>
					View Details
					<span class="ml-2 transition-transform group-hover:translate-x-1">→</span>
				</a>
			)}
		</div>
	);
}

