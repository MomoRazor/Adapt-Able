<script lang="ts">
	import { swipe } from 'svelte-gestures';
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
</script>

<div
	class="gallery row"
	use:swipe={() => ({ timeframe: 300, minSwipeDistance: 60 })}
	onswipe={(event) => {
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
	}}
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
		align-items: center;
		justify-content: center;
		width: 100%;
		gap: 10px;
	}

	.image-container {
		display: flex;
		flex: 1;
		max-width: 600px;
		text-align: center;
	}

	img {
		flex: 1;
		width: 100%;
		height: auto;
		border-radius: 8px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	.arrow {
		font-size: 3em;
	}
</style>
