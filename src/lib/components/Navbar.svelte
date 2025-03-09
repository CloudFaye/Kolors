<script lang="ts">
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	let rightItems = [
		{ name: 'Home', href: '/' },
		{ name: 'Theme builder', href: '/custom' },
		{ name: 'Convert', href: '/' }
	];

	let logo = [{ name: '🟣 Kolors', href: '/' }];

	// Accept custom classes through props
	let className = '';
	let navItemClass = '';
	let logoClass = '';

	const navClasses = cn(
		'fixed text-white top-0 left-0 w-full z-50 bg-transparent border-b border-zinc-800  backdrop-blur-sm',
		className
	);

	const navItemClasses = cn(
		'text-sm font-medium text-zinc-800 lg:text-zinc-300 md:text-zinc-300 sm:text-zinc-300    transition-colors hover:text-zinc-400 lg:hover:animate-bounce ',
		navItemClass
	);

	const logoClasses = cn('text-[1.1em]  font-bold tracking-normal ', logoClass);

	let isMobileMenuOpen = $state(false);
	let mobileNav: HTMLDivElement;

	function toggleMobileMenu(event?: MouseEvent) {
		if (event) {
			event.stopPropagation();
		}
		isMobileMenuOpen = !isMobileMenuOpen;
		// Remove body class toggle since we're not using it anymore
	}

	let isScrolled = $state(false);
	$inspect(isMobileMenuOpen);

	onMount(() => {
		// Handle scroll
		const handleScroll = () => {
			isScrolled = window.scrollY > 0;
		};

		// Add event listeners
		window.addEventListener('scroll', handleScroll);
		document.addEventListener('click', handleClickOutside);

		// Cleanup
		return () => {
			window.removeEventListener('scroll', handleScroll);
			document.removeEventListener('click', handleClickOutside);
		};
	});

	// Add click outside handler
	function handleClickOutside(event: MouseEvent) {
		const target = event.target as Node;
		const button = document.querySelector('button.md\\:hidden');

		if (button?.contains(target)) {
			return;
		}

		if (mobileNav && !mobileNav.contains(target) && isMobileMenuOpen) {
			isMobileMenuOpen = false;
		}
	}
</script>

<div class="content-wrapper">
	<nav class={navClasses}>
		<div class=" relative flex h-14 flex-row items-center justify-between px-3 lg:px-10">
			<!-- Logo Section -->
			<div class="flex items-center">
				{#each logo as { name, href }}
					<a {href} class={logoClasses}>
						{name}
					</a>
				{/each}
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden items-center gap-6 md:flex">
				{#each rightItems as { name, href }}
					<a {href} class={navItemClasses}>
						{name}
					</a>
					
				{/each}

				<ThemeToggle  />

			</div>

			<!-- Mobile Navigation Button -->
			<button class="p-2  md:hidden" onclick={toggleMobileMenu} aria-label="Toggle mobile menu">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<line x1="3" y1="12" x2="21" y2="12"></line>
					<line x1="3" y1="6" x2="21" y2="6"></line>
					<line x1="3" y1="18" x2="21" y2="18"></line>
				</svg>
			</button>
		</div>
	</nav>

	<div class:shift-content={isMobileMenuOpen} class="grid-content">
		<slot />
	</div>
</div>

{#if isMobileMenuOpen}
	<div
		bind:this={mobileNav}
		transition:fly={{
			x: 300,
			duration: 400,
			easing: quintOut
		}}
		class="fixed right-0 top-[57px] z-50 h-[calc(100vh-57px)]
               w-[280px] transform border-l border-neutral-200 bg-white
               shadow-xl transition-transform duration-300"
	>
		<div class="flex flex-col items-start space-y-6 p-6">
			{#each rightItems as { name, href }}
				<a
					{href}
					class={cn(navItemClasses, '  w-full')}
					onclick={() => {
						isMobileMenuOpen = false;
					}}
				>
					{name}
				</a>
			{/each}
		</div>
	</div>

	<!-- Overlay -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		transition:fade={{
			duration: 200
		}}
		class="fixed inset-0 z-40 bg-black/20 md:hidden"
		onclick={() => {
			isMobileMenuOpen = false;
		}}
	></div>
{/if}

<style lang="postcss">
	.content-wrapper {
		position: relative;
		width: 100%;
		display: flex;
	}

	.grid-content {
		transition: transform 0.3s ease-in-out;
	}

	.shift-content {
		transform: translateX(-280px);
	}

	:global(.navbar-scrolled) {
		@apply shadow-md;
	}

	/* Mobile menu animation */
	@keyframes slideIn {
		from {
			transform: translateX(-100%);
		}
		to {
			transform: translateX(0);
		}
	}

	.mobile-nav {
		display: none;
	}
</style>
