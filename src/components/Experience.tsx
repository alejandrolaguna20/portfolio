import ExperienceCard from './ExperienceCard';

const experience = [
	{
		company: "Avantiam Inc - Figueres, Spain",
		role: "Full-Stack Developer",
		duration: "Sep 2023 - Sep 2024",
		technologies: ["Laravel", "Livewire", "AlpineJS", "TailwindCSS", "MariaDB/MySQL"],
		highlights: [
			"Developed and maintained a comprehensive business management service used by over 100 companies",
			"Managed all aspects of the project lifecycle, including server administration, performance tuning, and user experience improvements.",
			"Recommendation letter available upon request."
		]
	},
	{
		company: "Niblu Group - Maribor, Slovenia",
		role: "Backend Developer Intern",
		duration: "Summer 2023",
		technologies: ["NextJS", "TailwindCSS", "TypeScript", "FastAPI", "AWS S3 Bucket"],
		highlights: [
			"Developed a secure authentication system and features for managing courses across different user roles.",
			"Integrated AWS S3 for seamless storage and retrieval of course materials.",
			"Gained valuable personal and professional growth through the ERASMUS experience, adapting to new challenges abroad alone."
		]
	}
];
export default function Experience({ theme }) {
	return (
		<section id="experience">
			<h2 class={`text-3xl mb-8 ${theme.accent} font-semibold font-serif`}>Work Experience</h2>
			<div class="space-y-8">
				{experience.map((exp, i) => (
					<ExperienceCard key={i} experience={exp} theme={theme} />
				))}
			</div>
		</section>
	);
}

