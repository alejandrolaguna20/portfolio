export default function Layout({ children, theme }) {
	return (
		<div class={`min-h-screen transition-colors duration-300 ${theme.bg} ${theme.text}`}>
			<main class="max-w-5xl mx-auto px-4 pt-24 pb-16 space-y-16">
				{children}
			</main>
		</div>
	);
}

