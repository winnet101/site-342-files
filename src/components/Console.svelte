<script lang="ts">
    // TODO: create better transition between console and article
    // loading bar?
    import StringInput from "../lib/StringInput.svelte";
    import { useChoice } from "../lib/useChoice.svelte";

    let { loggedIn = $bindable() }: { loggedIn: boolean } = $props();

    let messages: string[] = $state(["Enter a command or type 'help'."]);
    let isLoading = $state(false);

    let [getChoice, choose, resolve] = useChoice<{ password: string }>();

    let audioCurrentTime = $state(0);
    let audioPaused = $state(true);

    async function parseInput(value: string) {
        value = value.toLocaleLowerCase();
        if (getChoice() === "password") {
            resolve("password", value);
            // Control flow returns to the switch-case
        } else {
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
                    messages.push(
                        "Type the name or number of a file to open it."
                    );
                    messages.push("");

                    break;
                case "clear":
                    messages = ["Enter a command or type 'help'."];
                    break;
                case "scp-10442":
                case "10442":
                    messages.push("Loading...");
                    await wait(1000);
                    messages.push("Error: The selected file is classified.");
                    messages.push("Please enter your password to continue.");
                    messages.push("");

                    isLoading = false;
                    const password = await choose("password");
                    isLoading = true;

                    if (btoa(password) === "dGVuZWJyaXM=") {
                        await wait(1000);
                        messages.push("Welcome, Director Void.");
                        await wait(2000);

                        // messages = [];
                        loggedIn = true;
                        window.scrollTo({ top: 0, behavior: "smooth" });

                        return; // isLoading stays true
                    } else {
                        messages.push("Error: Incorrect password.");
                        messages.push("Cancelling file access attempt.");
                        messages.push("");
                    }
                    break;
                default:
                    messages.push("Error: Command not recognized.");
                    messages.push("Type 'help' for commands.");
                    messages.push("");
            }
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

<audio
    src="site-342-files/click.mp3"
    style="display:none"
    volume="0.5"
    bind:currentTime={audioCurrentTime}
    bind:paused={audioPaused}
></audio>

<div class={`console-container`}>
    <div class="header-container">
        <h1 class="header">SITE-342</h1>
        <sub class="sub">Secure Foundation Terminal v3.4.2</sub>
    </div>

    <div class="message-container">
        {#each messages as msg, i}
            {@const cleaned = msg.toLocaleLowerCase().trim()}
            {#if cleaned.startsWith(">>")}
                <div class="message" style="color: red">
                    {msg.slice(2)}
                </div>
            {:else}
                <div
                    class="message"
                    style={cleaned.startsWith("err")
                        ? "color: red"
                        : cleaned.startsWith(">")
                          ? "color: var(--purple-0)"
                          : ""}
                >
                    {msg}
                </div>
            {/if}
        {/each}
    </div>
    {#if !isLoading}
        <div class="input-container">
            <div style="white-space: pre;">{"> "}</div>
            <StringInput
                onSubmit={async (value) => {
                    isLoading = true;
                    messages.push(`> ${value}`);
                    await wait(250);
                    await parseInput(value);
                }}
                onkeydown={() => {
                    audioPaused = true;
                    audioCurrentTime = 0.09;
                    audioPaused = false;
                    console.log("starting audio");
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
        margin-top: 2em;
        width: 100%;
        max-width: inherit;
        overflow: hidden;
    }

    .header-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 1em;
        max-width: inherit;
    }

    :global(.stringInput_input_global_class) {
        background-color: black;
        border-width: 0;
        /* border-bottom: 1px solid var(--purple-1); */
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        line-height: 1.1em;
        height: 1.1em;
        font-family: var(--font-typewrite);
        width: auto;
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
        width: 80%;
        margin: 0 auto;
        /* overflow: hidden; */

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
        width: 100%;
        max-width: inherit;
        overflow: hidden;
    }
</style>
