<script lang="ts">
    import Article from "./components/Article.svelte";
    import Console from "./components/Console.svelte";
    import EpilepsyWarning from "./components/EpilepsyWarning.svelte";

    let accessibilityMode = $state<"on" | "off">();
    let loggedIn = $state(false);

    // TODO:
    // change highlight color (probably red bg white text)
    // add epilepsy warning
    // add redirect to a version without the flashing background (and persist between reloads!!)
</script>

<div
    class="overlay"
    style={`${accessibilityMode === "off" ? "animation-duration:100ms" : ""}`}
></div>

{#if accessibilityMode === undefined}
    <EpilepsyWarning bind:accessibilityMode />
{:else}
    <Console bind:loggedIn></Console>
{/if}
{#if loggedIn}
    <Article />
{/if}

<style>
    .overlay {
        top: 0px;
        left: 0px;
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 32;
        background: url("/crt-filter2.png");
        pointer-events: none;
        opacity: 0.4;
        zoom: 200%;
        animation-name: opacity-flicker;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    @keyframes opacity-flicker {
        0% {
            opacity: 0.4;
        }
        1% {
            opacity: 0.7;
        }
    }
</style>
