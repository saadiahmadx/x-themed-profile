<script>
	import * as config from '$src/app.config';
	import DarkModeToggle from '$lib/components/DarkModeToggle';

	// icon svgs
	import XTwitter from '$lib/icons/XTwitter';
	import Github from '$lib/icons/Github';
	import Dribbble from '$lib/icons/Dribbble';
	import Codepen from '$lib/icons/Codepen';
	import BadgeCheck from '$lib/icons/BadgeCheck';

	// work/project list svgs
	import Astronaut from '$lib/icons/Astronaut';
	import ChatTMS from '$lib/icons/Chattms';
	import Death from '$lib/icons/Death';
	import ShortEdits from '$lib/icons/Shortedits';
	import ItBetterInThailand from '$lib/icons/ItBetterInThailand';
</script>

<svelte:head>
	<title>{config.siteName}</title>
	<meta name="description" content={config.siteDescription} />
</svelte:head>

<div class="w-full m-auto max-w-[1400px]">
	<div id="outer-container" class="grid grid-cols-12 mx-auto">
		<div id="left-container" class="top-0 flex flex-col col-span-12 overflow-y-auto lg:h-screen lg:sticky lg:col-span-6 xl:col-span-5 gap-ui-space">
			<div class="flex flex-col items-center md:flex-row">
				<a class="flex flex-col items-center justify-center gap-3 pt-5 text-center md:pt-0 md:justify-start md:text-left md:flex-row md:gap-5 lg:gap-4 xl:gap-6" href="https://x.com/intent/follow?screen_name=loopsvariables" target="_blank">
					<!-- <Logo /> -->
					<img src="/images/profile.jpg" alt="Henry" class="w-20 h-20 rounded-full md:w-16 md:h-16" />
					<div class="flex flex-col items-center justify-center text-xl md:items-start md:justify-start md:text-xl xl:text-xl">
						<span class="flex items-center gap-[0.3em] font-extrabold">Henry <BadgeCheck class="text-[#4a99e9] w-[1em] h-[1em]" /></span>
						<span class="font-medium opacity-60">@loopsvariables</span>
					</div>
				</a>
				<div class="flex items-center gap-5 mt-6 md:mt-0 xl:gap-6 md:ml-auto">
					<div class="absolute top-10 right-10 md:top-0 md:right-0 md:relative opacity-40 hover:opacity-100">
						<DarkModeToggle className="w-6 h-6" />
					</div>
					<a class="text-lg xl:text-xl font-bold rounded-full bg-dark dark:bg-light hover:opacity-80 px-[1em] py-[0.5em] text-light dark:text-dark" href="https://x.com/intent/follow?screen_name=loopsvariables" target="_blank">Follow</a>
				</div>
			</div>

			<div class="px-5 text-xl text-center md:text-left md:text-2xl lg:text-2xl xl:text-2xl md:px-0">
				<p class="">
					I created this template for my personal page. It's simple, responsive, and kinda looks like X? Get it from <a href="https://github.com/loopsandvariables/x-themed-profile" class="underline" target="_blank">GitHub</a>. My
					<a href="https://loopsandvariables.com" class="underline" target="_blank">original page</a> is here.
				</p>
				<p class="mt-[1em]"><a href="/updates" class="underline">Join my email list</a> for product updates and free stuff I make for other solo builders.</p>
			</div>

			<div class="flex items-center justify-center gap-10 py-6 mt-auto lg:py-0 md:justify-start">
				<a class="p-2 -m-2 opacity-100 hover:opacity-60" href="https://x.com/intent/follow?screen_name=loopsvariables" target="_blank">
					<XTwitter class="w-8 h-8" />
				</a>
				<a class="p-2 -m-2 opacity-100 hover:opacity-60" href="https://dribbble.com/henry" target="_blank">
					<Dribbble class="w-8 h-8" />
				</a>
				<a class="p-2 -m-2 opacity-100 hover:opacity-60" href="https://github.com/loopsandvariables" target="_blank">
					<Github class="w-8 h-8" />
				</a>
				<a class="p-2 -m-2 opacity-100 hover:opacity-60" href="https://codepen.io/loopsandvariables" target="_blank">
					<Codepen class="w-8 h-8" />
				</a>
			</div>
		</div>
		<div id="right-container" class="col-span-12 lg:col-span-6 xl:col-span-7">
			<div class="flex flex-col gap-6 text-base md:text-xl md:gap-6 lg:gap-7 xl:gap-8">
				<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://astronaut.build" target="_blank">
					<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
						<Astronaut />
					</div>
					<div class="flex flex-col">
						<h2 class="font-bold">Astronaut</h2>
						<p class="opacity-50 font-medium mt-[0.1em]">Build and launch your app with Astronaut, a production ready SvelteKit boilerplate.</p>
					</div>
				</a>

				<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https:/chattms.ai" target="_blank">
					<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
						<ChatTMS />
					</div>
					<div class="flex flex-col">
						<h2 class="font-bold">ChatTMS</h2>
						<p class="opacity-50 font-medium mt-[0.1em]">AI powered assistant for your TMS practice. Trained weekly with research, protocols, and more.</p>
					</div>
				</a>

				<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://death.iwasweak.com" target="_blank">
					<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
						<Death />
					</div>
					<div class="flex flex-col">
						<h2 class="font-bold">Death</h2>
						<p class="opacity-50 font-medium mt-[0.1em]">Turns out I only have 2,000 weeks left. I'm trying to make them count.</p>
					</div>
				</a>

				<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://shortedits.com" target="_blank">
					<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
						<ShortEdits />
					</div>
					<div class="flex flex-col">
						<h2 class="font-bold">Short Edits</h2>
						<p class="opacity-50 font-medium mt-[0.1em]">Productized video editing service. Get your videos edited like clockwork.</p>
					</div>
				</a>

				<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://itsbetterinthailand.com" target="_blank">
					<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
						<ItBetterInThailand />
					</div>
					<div class="flex flex-col">
						<h2 class="font-bold">It's better in Thailand</h2>
						<p class="opacity-50 font-medium mt-[0.1em]">A project I started in 2015. I had a crazy idea to travel to every province in Thailand.</p>
					</div>
				</a>

				<div class="opacity-50 flex flex-col items-center justify-center w-full gap-[1em] text-center p-ui-space">
					<span class="text-3xl font-medium">¯\_(ツ)_/¯</span>
					<p class="font-medium">I guess I should ship more.</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	#outer-container {
		@apply lg:gap-16 xl:gap-20 2xl:gap-24;
	}
	#left-container {
		@apply p-6 md:p-12 lg:p-16 xl:p-20 2xl:p-24 lg:pr-0 xl:pr-0 2xl:pr-0;
	}
	#right-container {
		@apply p-6 md:p-12 lg:p-16 xl:p-20 2xl:p-24 lg:pl-0 xl:pl-0 2xl:pl-0 -mt-6 md:-mt-12 lg:mt-0;
	}

	/* Spacing utilities for consist and responsive spacing in layouts */

	/* Margin*/
	.m-space {
		@apply m-9 md:m-12 lg:m-16 xl:m-20 2xl:m-24 !important;
	}
	.-m-space {
		@apply -m-9 md:-m-12 lg:-m-16 xl:-m-20 2xl:-m-24 !important;
	}
	.mx-space {
		@apply mx-9 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-24 !important;
	}
	.-mx-space {
		@apply -mx-9 md:-mx-12 lg:-mx-16 xl:-mx-20 2xl:-mx-24 !important;
	}
	.my-space {
		@apply my-9 md:my-12 lg:my-16 xl:my-20 2xl:my-24 !important;
	}
	.-my-space {
		@apply -my-9 md:-my-12 lg:-my-16 xl:-my-20 2xl:-my-24 !important;
	}
	.mt-space {
		@apply mt-9 md:mt-12 lg:mt-16 xl:mt-20 2xl:mt-24 !important;
	}
	.-mt-space {
		@apply -mt-9 md:-mt-12 lg:-mt-16 xl:-mt-20 2xl:-mt-24 !important;
	}
	.mr-space {
		@apply mr-9 md:mr-12 lg:mr-16 xl:mr-20 2xl:mr-24 !important;
	}
	.-mr-space {
		@apply -mr-9 md:-mr-12 lg:-mr-16 xl:-mr-20 2xl:-mr-24 !important;
	}
	.mb-space {
		@apply mb-9 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-24 !important;
	}
	.-mb-space {
		@apply -mb-9 md:-mb-12 lg:-mb-16 xl:-mb-20 2xl:-mb-24 !important;
	}
	.ml-space {
		@apply ml-9 md:ml-12 lg:ml-16 xl:ml-20 2xl:ml-24 !important;
	}
	.-ml-space {
		@apply -ml-9 md:-ml-12 lg:-ml-16 xl:-ml-20 2xl:-ml-24 !important;
	}

	/* Padding */
	.p-space {
		@apply p-9 md:p-12 lg:p-16 xl:p-20 2xl:p-24 !important;
	}
	.px-space {
		@apply px-9 md:px-12 lg:px-16 xl:px-20 2xl:px-24 !important;
	}
	.py-space {
		@apply py-9 md:py-12 lg:py-16 xl:py-20 2xl:py-24 !important;
	}
	.pt-space {
		@apply pt-9 md:pt-12 lg:pt-16 xl:pt-20 2xl:pt-24 !important;
	}
	.pr-space {
		@apply pr-9 md:pr-12 lg:pr-16 xl:pr-20 2xl:pr-24 !important;
	}
	.pb-space {
		@apply pb-9 md:pb-12 lg:pb-16 xl:pb-20 2xl:pb-24 !important;
	}
	.pl-space {
		@apply pl-9 md:pl-12 lg:pl-16 xl:pl-20 2xl:pl-24 !important;
	}

	/* Width / Height */
	.w-space {
		@apply w-9 md:w-12 lg:w-16 xl:w-20 2xl:w-24 !important;
	}
	.h-space {
		@apply h-9 md:h-12 lg:h-16 xl:h-20 2xl:h-24 !important;
	}

	/* Top / Bottom / Left / Right / Inset */
	.top-space {
		@apply top-9 md:top-12 lg:top-16 xl:top-20 2xl:top-24 !important;
	}
	.-top-space {
		@apply -top-9 md:-top-12 lg:-top-16 xl:-top-20 2xl:-top-24 !important;
	}
	.bottom-space {
		@apply bottom-9 md:bottom-12 lg:bottom-16 xl:bottom-20 2xl:bottom-24 !important;
	}
	.-bottom-space {
		@apply -bottom-9 md:-bottom-12 lg:-bottom-16 xl:-bottom-20 2xl:-bottom-24 !important;
	}
	.left-space {
		@apply left-9 md:left-12 lg:left-16 xl:left-20 2xl:left-24 !important;
	}
	.-left-space {
		@apply -left-9 md:-left-12 lg:-left-16 xl:-left-20 2xl:-left-24 !important;
	}
	.right-space {
		@apply right-9 md:right-12 lg:right-16 xl:right-20 2xl:right-24 !important;
	}
	.-right-space {
		@apply -right-9 md:-right-12 lg:-right-16 xl:-right-20 2xl:-right-24 !important;
	}
	.inset-space {
		@apply inset-9 md:inset-12 lg:inset-16 xl:inset-20 2xl:inset-24 !important;
	}
	.inset-x-space {
		@apply inset-x-9 md:inset-x-12 lg:inset-x-16 xl:inset-x-20 2xl:inset-x-24 !important;
	}
	.-inset-x-space {
		@apply -inset-x-9 md:-inset-x-12 lg:-inset-x-16 xl:-inset-x-20 2xl:-inset-x-24 !important;
	}
	.inset-y-space {
		@apply inset-y-9 md:inset-y-12 lg:inset-y-16 xl:inset-y-20 2xl:inset-y-24 !important;
	}
	.-inset-y-space {
		@apply -inset-y-9 md:-inset-y-12 lg:-inset-y-16 xl:-inset-y-20 2xl:-inset-y-24 !important;
	}

	/* Gap */
	.gap-space {
		@apply gap-9 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 !important;
	}

	/* Margin */
	.m-ui-space {
		@apply m-6 md:m-8 lg:m-10 xl:m-12 2xl:m-14 !important;
	}
	.-m-ui-space {
		@apply -m-6 md:-m-8 lg:-m-10 xl:-m-12 2xl:-m-14 !important;
	}
	.mx-ui-space {
		@apply mx-6 md:mx-8 lg:mx-10 xl:mx-12 2xl:mx-14 !important;
	}
	.-mx-ui-space {
		@apply -mx-6 md:-mx-8 lg:-mx-10 xl:-mx-12 2xl:-mx-14 !important;
	}
	.my-ui-space {
		@apply my-6 md:my-8 lg:my-10 xl:my-12 2xl:my-14 !important;
	}
	.-my-ui-space {
		@apply -my-6 md:-my-8 lg:-my-10 xl:-my-12 2xl:-my-14 !important;
	}
	.mt-ui-space {
		@apply mt-6 md:mt-8 lg:mt-10 xl:mt-12 2xl:mt-14 !important;
	}
	.-mt-ui-space {
		@apply -mt-6 md:-mt-8 lg:-mt-10 xl:-mt-12 2xl:-mt-14 !important;
	}
	.mr-ui-space {
		@apply mr-6 md:mr-8 lg:mr-10 xl:mr-12 2xl:mr-14 !important;
	}
	.-mr-ui-space {
		@apply -mr-6 md:-mr-8 lg:-mr-10 xl:-mr-12 2xl:-mr-14 !important;
	}
	.mb-ui-space {
		@apply mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-14 !important;
	}
	.-mb-ui-space {
		@apply -mb-6 md:-mb-8 lg:-mb-10 xl:-mb-12 2xl:-mb-14 !important;
	}
	.ml-ui-space {
		@apply ml-6 md:ml-8 lg:ml-10 xl:ml-12 2xl:ml-14 !important;
	}
	.-ml-ui-space {
		@apply -ml-6 md:-ml-8 lg:-ml-10 xl:-ml-12 2xl:-ml-14 !important;
	}

	/* Padding */
	.p-ui-space {
		@apply p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14 !important;
	}
	.px-ui-space {
		@apply px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 !important;
	}
	.py-ui-space {
		@apply py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-14 !important;
	}
	.pt-ui-space {
		@apply pt-6 md:pt-8 lg:pt-10 xl:pt-12 2xl:pt-14 !important;
	}
	.pr-ui-space {
		@apply pr-6 md:pr-8 lg:pr-10 xl:pr-12 2xl:pr-14 !important;
	}
	.pb-ui-space {
		@apply pb-6 md:pb-8 lg:pb-10 xl:pb-12 2xl:pb-14 !important;
	}
	.pl-ui-space {
		@apply pl-6 md:pl-8 lg:pl-10 xl:pl-12 2xl:pl-14 !important;
	}

	/* Width / Height */
	.w-ui-space {
		@apply w-6 md:w-8 lg:w-10 xl:w-12 2xl:w-14 !important;
	}
	.h-ui-space {
		@apply h-6 md:h-8 lg:h-10 xl:h-12 2xl:h-14 !important;
	}

	/* Top / Bottom / Left / Right / Inset */
	.top-ui-space {
		@apply top-6 md:top-8 lg:top-10 xl:top-12 2xl:top-14 !important;
	}
	.-top-ui-space {
		@apply -top-6 md:-top-8 lg:-top-10 xl:-top-12 2xl:-top-14 !important;
	}
	.bottom-ui-space {
		@apply bottom-6 md:bottom-8 lg:bottom-10 xl:bottom-12 2xl:bottom-14 !important;
	}
	.-bottom-ui-space {
		@apply -bottom-6 md:-bottom-8 lg:-bottom-10 xl:-bottom-12 2xl:-bottom-14 !important;
	}
	.left-ui-space {
		@apply left-6 md:left-8 lg:left-10 xl:left-12 2xl:left-14 !important;
	}
	.-left-ui-space {
		@apply -left-6 md:-left-8 lg:-left-10 xl:-left-12 2xl:-left-14 !important;
	}
	.right-ui-space {
		@apply right-6 md:right-8 lg:right-10 xl:right-12 2xl:right-14 !important;
	}
	.-right-ui-space {
		@apply -right-6 md:-right-8 lg:-right-10 xl:-right-12 2xl:-right-14 !important;
	}
	.inset-ui-space {
		@apply inset-6 md:inset-8 lg:inset-10 xl:inset-12 2xl:inset-14 !important;
	}
	.inset-x-ui-space {
		@apply inset-x-6 md:inset-x-8 lg:inset-x-10 xl:inset-x-12 2xl:inset-x-14 !important;
	}
	.-inset-x-ui-space {
		@apply -inset-x-6 md:-inset-x-8 lg:-inset-x-10 xl:-inset-x-12 2xl:-inset-x-14 !important;
	}
	.inset-y-ui-space {
		@apply inset-y-6 md:inset-y-8 lg:inset-y-10 xl:inset-y-12 2xl:inset-y-14 !important;
	}
	.-inset-y-ui-space {
		@apply -inset-y-6 md:-inset-y-8 lg:-inset-y-10 xl:-inset-y-12 2xl:-inset-y-14 !important;
	}

	/* Gap */
	.gap-ui-space {
		@apply gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 !important;
	}
</style>
