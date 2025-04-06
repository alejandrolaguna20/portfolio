export default function EducationCard({ education, theme }) {
	return (
		<div class={`p-4 rounded-xl border ${theme.border} ${theme.card} transition-all hover:-translate-y-1 group`}>
			<div class="flex justify-between items-start mb-4">
				<div>
					<h3 class="text-lg">{education.degree}</h3>
					<p class="text-[#b8c4b5]/80">{education.institution}</p>
				</div>
				<span class="text-sm text-[#b8c4b5]/50">{education.duration}</span>
			</div>
			<ul class="list-disc pl-6 space-y-2 mb-4">
				{education.highlights.map((highlight, j) => (
					<li key={j} class="text-[#b8c4b5]/90">{highlight}</li>
				))}
			</ul>
		</div>
	);
}
