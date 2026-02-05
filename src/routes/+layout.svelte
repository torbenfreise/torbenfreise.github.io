<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Dropdown,
		DropdownItem,
		DropdownDivider,
		FooterLinkGroup,
		Footer,
		FooterBrand,
		FooterCopyright,
		FooterIcon,
		FooterLink
	} from 'flowbite-svelte';
	import {
		ChevronDownOutline,
		DiscordSolid,
		FacebookSolid,
		GithubSolid,
		LinkedinSolid,
		TwitterSolid
	} from 'flowbite-svelte-icons';
	import { page } from '$app/state';
	let { children } = $props();
	let activeUrl = $derived(page.url.pathname);
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Navbar>
	<NavHamburger />
	<NavUl {activeUrl}>
		<NavLi href="/">Home</NavLi>
		<NavLi class="cursor-pointer">
			Projects<ChevronDownOutline class="ms-2 inline h-6 w-6 text-primary-800 dark:text-white" />
		</NavLi>
		<Dropdown simple class="w-44">
			<DropdownItem href="/projects/totp">TOTP generator</DropdownItem>
		</Dropdown>
		<NavLi href="/blog">Blog</NavLi>
	</NavUl>
</Navbar>
{@render children()}

<Footer footerType="socialmedia" class="w-full bg-white">
	<div class="mx-auto max-w-6xl px-6 py-10 text-center">
		<hr class="mb-8 border-gray-200 dark:border-gray-700" />

		<div class="flex justify-center">
			<div class="flex space-x-8">
				<FooterIcon href="https://www.linkedin.com/in/torbenfreise">
					<LinkedinSolid
						class="h-7 w-7 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
					/>
				</FooterIcon>

				<FooterIcon href="https://github.com/torbenfreise">
					<GithubSolid
						class="h-7 w-7 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
					/>
				</FooterIcon>
			</div>
		</div>
	</div>
</Footer>
