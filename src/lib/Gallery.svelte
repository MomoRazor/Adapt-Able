<script lang="ts">
	import { useSwipe, type SwipeCustomEvent } from 'svelte-gestures';
	import Arrow from './Arrow.svelte';

	interface GalleryProps {
		images: {
			altName: string;
			src: string;
		}[];
		startIndex?: number;
	}

	let props: GalleryProps = $props();

	let currentIndex = $state(props.startIndex ?? 0);

	function handler(event: SwipeCustomEvent) {
		if (event.detail.direction === 'right') {
			if (currentIndex === props.images.length - 1) {
				currentIndex = 0;
			} else {
				currentIndex += 1;
			}
		} else {
			if (currentIndex === 0) {
				currentIndex = props.images.length - 1;
			} else {
				currentIndex -= 1;
			}
		}
	}
</script>

<div
	class="gallery row"
	{...useSwipe(handler, () => ({ timeframe: 300, minSwipeDistance: 60, touchAction: 'none' }))}
>
	<button
		class="hidden-button arrow column back-icon"
		style="color: var(--text-color);"
		onclick={() => {
			if (currentIndex === 0) {
				currentIndex = props.images.length - 1;
			} else {
				currentIndex -= 1;
			}
		}}
	>
		<Arrow />
	</button>
	<div class="column image-container">
		{#each props.images as image, index}
			<!-- TODO to use crossfade -->
			<!-- {#if index === currentIndex} -->
			<img
				src={image.src}
				alt={image.altName}
				style={`display: ${index === currentIndex ? 'flex' : 'none'}`}
			/>

			<!-- {/if} -->
		{/each}
		<p>{currentIndex + 1}/{props.images.length}</p>
	</div>
	<button
		class="hidden-button arrow column"
		style="color: var(--text-color);"
		onclick={() => {
			if (currentIndex === props.images.length - 1) {
				currentIndex = 0;
			} else {
				currentIndex += 1;
			}
		}}
	>
		<Arrow />
	</button>
</div>

<style>
	.gallery {
		justify-content: space-between;
		width: 100%;
		height: 300px;
		gap: 10px;
	}

	.image-container {
		display: flex;
		height: 85%;
		text-align: center;
	}

	img {
		width: 100%;
		height: 100%;
		border-radius: 8px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	.arrow {
		font-size: 3em;
	}
</style>
