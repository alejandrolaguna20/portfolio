export function Header({ theme }) {

	return (
		<header class="fixed w-full top-0 z-50 backdrop-blur-sm">
			<div class="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
				<h1 class={`text-xl font-bold opacity-50 ${theme.accent} tracking-wider font-serif`}>alejandrolaguna.dev</h1>
				<nav class="hidden md:flex gap-6">
					{['About', 'Projects', 'Experience'].map((item) => (
						<a
							href={`#${item.toLowerCase()}`}
							class={`text-sm ${theme.text} ${theme.hover} transition-colors`}
						>
							{item}
						</a>
					))}
				</nav>
			</div>
		</header>
	);
}


