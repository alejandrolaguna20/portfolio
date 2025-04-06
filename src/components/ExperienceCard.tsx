export default function ExperienceCard({ experience, theme }) {
	return (
		<div class={`p-6 rounded-xl border ${theme.border} ${theme.card} transition-all hover:-translate-y-1 group`}>
			<div class="flex justify-between items-start mb-4">
				<div>
					<h3 class="text-xl">{experience.company}</h3>
					<p class="text-[#b8c4b5]/80">{experience.role}</p>
				</div>
				<span class="text-sm text-[#b8c4b5]/50">{experience.duration}</span>
			</div>
			<ul class="list-disc pl-6 space-y-2 mb-4">
				{experience.highlights.map((highlight, j) => (
					<li key={j} class="text-[#b8c4b5]/90">{highlight}</li>
				))}
			</ul>
			{experience.technologies && (
				<div class="flex flex-wrap gap-2 mb-4">
					<h4 class="text-lg font-semibold text-[#b8c4b5]/90">Technologies Used:</h4>
					{experience.technologies.map((tech, i) => (
						<span key={i} class={`px-3 rounded-full ${theme.bg} text-[#b8c4b5]/80`}>{tech}</span>
					))}
				</div>
			)}
			{experience.link && (
				<a
					href={experience.link}
					class={`inline-flex items-center text-sm ${theme.accent} ${theme.hover}`}
				>
					View More
					<span class="ml-2 transition-transform group-hover:translate-x-1">→</span>
				</a>
			)}
		</div>
	);
}

