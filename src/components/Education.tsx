import EducationCard from './EducationCard';

const education = [
	{
		institution: "European Institute of Technology (EPITECH)",
		degree: "Degree + Master in Computer Science",
		duration: "2024 - 2029",
		highlights: [
			"ONGOING",
			"Multiple courses passed with Honors",
			"Completed over 30 projects from different fields"
		]
	},
	{
		institution: "INS Cendrassos",
		degree: "Microcomputer systems & networks",
		duration: "2022 - 2024",
		highlights: [
			"First of the class",
			"ERASMUS+ Scholarship",
		]
	}
];

export default function Education({ theme }) {
	return (
		<section id="education">
			<h2 class={`text-3xl mb-8 font-serif font-semibold ${theme.accent}`}>Education</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				{education.map((edu, i) => (
					<EducationCard key={i} education={edu} theme={theme} />
				))}
			</div>
		</section>
	);
}
