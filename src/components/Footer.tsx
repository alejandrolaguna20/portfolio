export default function Footer({ theme }) {
	const handleDownload = () => {
		const link = document.createElement('a');
		link.href = '/public/resume_eng.pdf';
		link.download = 'alejandrolaguna_resume_eng.pdf';
		link.click();
	};

	return (
		<footer class={`pt-8 border-t border-opacity-20 ${theme.border}`}>
			<div class="flex flex-col md:flex-row justify-between items-center">
				<p class="text-sm text-[#b8c4b5]/50 mb-4 md:mb-0">© 2025 Alejandro Laguna</p>
				<div class="flex gap-6">
					<a href="https://github.com/alejandrolaguna20" class={`text-sm ${theme.text} ${theme.hover}`}>GitHub</a>
					<a href="https://www.linkedin.com/in/alejandro-laguna-939687278/" class={`text-sm ${theme.text} ${theme.hover}`}>LinkedIn</a>
					<button
						onClick={handleDownload}
						class={`text-sm ${theme.text} ${theme.hover} cursor-pointer`}
					>
						CV
					</button>
				</div>
			</div>
		</footer>
	);
}
