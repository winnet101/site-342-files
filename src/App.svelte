<script lang="ts">
    import Article from "./components/Article.svelte";
    import Console from "./components/Console.svelte";

    let loggedIn = $state(false);
</script>

<div class="overlay"></div>
<Console bind:loggedIn></Console>
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
        background: url("https://invertedfate.com/images/crt-filter2.png");
        pointer-events: none;
        opacity: 0.4;
        zoom: 200%;
        animation: opacity-flicker 100ms infinite linear;
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
