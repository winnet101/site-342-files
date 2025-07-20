<script lang="ts">
    let {
        accessibilityMode = $bindable(),
    }: { accessibilityMode: "on" | "off" | undefined } = $props();
</script>

<div class="warning-flex-container">
    <div class="warning-container">
        <p>
            This website makes use of flashing lights and rapid flickering
            effects. <br /><br />If you have epilepsy or experience adverse
            reactions to the above, please choose 'ACCESSIBILITY MODE'.
        </p>
        <br />

        <div class="button-container">
            <button
                onclick={() => {
                    accessibilityMode = "off";
                }}>Continue</button
            >
            <button
                class="accessibile"
                onclick={() => {
                    accessibilityMode = "on";
                }}>View in accessibility mode</button
            >
        </div>
    </div>
</div>

<style>
    .warning-flex-container {
        display: flex;
        height: 100vh;
        width: 100vw;
        justify-content: center;
        align-items: center;
    }

    .warning-container {
        border: 1px var(--purple-0) solid;
        padding: 1em;
        background-color: rgba(from var(--purple-5) / 0.4);
        width: 60%;
        max-width: 700px;
        text-align: center;
        font-size: 1.2rem;
    }

    .button-container {
        display: flex;
        flex-direction: column;
        gap: 0.2em;
    }

    .button-container > button {
        border: 1px solid rgb(137, 0, 0);
        background-color: inherit;
        border-radius: 0;
        width: 80%;
        max-width: 300px;
        margin: 0 auto;
        transition: none !important;
    }

    .button-container > button:first-child {
        color: rgb(255, 149, 183);
    }

    .button-container > button:hover {
        background-color: rgb(65, 0, 0);
        border-color: red;

        /* border-color: var(--purple-0); */
    }

    .button-container > button:last-child {
        border-color: var(--purple-1);
        color: #9e6dff;
    }

    .button-container > button:hover:last-child {
        background-color: var(--purple-5);
        border-color: var(--purple-0);
    }
</style>
