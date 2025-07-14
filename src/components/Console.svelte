<script lang="ts">
    import StringInput from "../lib/StringInput.svelte";

    let { loggedIn = $bindable() }: { loggedIn: boolean } = $props();

    let messages: string[] = $state([]);
    let isLoading = $state(false);
    let triggerAnimation = $state(false);

    async function parseInput(value: string) {
        value = value.toLocaleLowerCase();
        switch (value) {
            case "help":
            case "?":
                messages.push("Type 'list' to view all available files.");
                messages.push("Type 'clear' to clear the console.");

                messages.push("");
                break;
            case "list":
                messages.push("Available files:");
                messages.push("  SCP-10442");

                messages.push("");
                messages.push("Type the name or number of a file to open it.");
                messages.push("");

                break;
            case "clear":
                messages = [];
                break;
            case "scp-10442":
            case "10442":
                messages.push("Loading...");
                messages.push("");

                triggerAnimation = true;
                await wait(1000);
                messages = [];
                window.scrollTo({ top: 0, behavior: "smooth" });

                loggedIn = true;
                return; // isLoading stays true

            default:
                messages.push("Error: Command not recognized.");
                messages.push("Type 'help' for commands.");
                messages.push("");
        }

        isLoading = false;
    }

    async function wait(ms: number) {
        await new Promise<void>((res) => {
            setTimeout(() => {
                res();
            }, ms);
        });
    }
</script>

<div class={`console-container ${triggerAnimation ? "slide" : ""}`}>
    <div class="header-container">
        <h1 class="header">SITE-342</h1>
        <sub class="sub">Secure Foundation Terminal v3.4.2</sub>
    </div>

    <div class="message-container">
        {#each messages as msg, i}
            <div
                class="message"
                style={msg.toLowerCase().trim().startsWith("err")
                    ? "color: red"
                    : msg.toLowerCase().trim().startsWith(">")
                      ? "color: var(--purple-0)"
                      : ""}
            >
                {msg}
            </div>
        {/each}
    </div>
    {#if !isLoading}
        <div class="input-container">
            <div style="white-space: pre;">{"> "}</div>
            <StringInput
                onSubmit={async (value) => {
                    isLoading = true;
                    messages.push(`> ${value}`);
                    await wait(200);
                    await parseInput(value);
                }}
                showButton={false}
                autofocus
            />
        </div>
    {/if}
</div>

<style>
    .header {
        font-weight: bold;
        margin: 0;
    }

    .sub {
    }

    .message {
        white-space: pre;
        height: 1em;
    }

    .message-container {
        /* height: 10em; */
        width: 100vw;
    }

    .header-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 1em;
    }

    :global(.stringInput_input_global_class) {
        background-color: black;
        border-width: 0;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        height: 1em;
        font-family: var(--font-typewrite);
        /* width: 100vw; */
    }

    :global(.stringInput_input_global_class):focus {
        outline: none;
    }

    .console-container {
        line-height: 1.1;
        font-size: 1.2rem;
        max-height: 700px;
        max-width: 700px;
        margin: 0 auto;

        /* padding: 1rem; */
        /* border-width: 2px; */
        /* border-style: solid; */
        /* border-image: var(--metallic) 1 100%; */
        /* border-image-slice: 1; */
        /* border-bottom: 0; */
    }

    .input-container {
        display: grid;
        grid-template-columns: auto 1fr;
        width: 100vw;
        overflow: hidden;
    }
</style>
