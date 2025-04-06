export default function Footer({ theme }) {
	return (
		<footer class={`pt-8 border-t border-opacity-20 ${theme.border}`}>
			<div class="flex flex-col md:flex-row justify-between items-center">
				<p class="text-sm text-[#b8c4b5]/50 mb-4 md:mb-0">© 2025 Alejandro Laguna</p>
				<div class="flex gap-6">
					<a href="https://github.com/alejandrolaguna20" class={`text-sm ${theme.text} ${theme.hover}`}>GitHub</a>
					<a href="https://www.linkedin.com/in/alejandro-laguna-939687278/" class={`text-sm ${theme.text} ${theme.hover}`}>LinkedIn</a>
					<a href="/resume_eng.pdf" download="cv_english_alejandro_laguna.pdf" target="_blank" rel="noopener" class={`text-sm ${theme.text} ${theme.hover}`}>CV</a>
				</div>
			</div>
		</footer>
	);
}

