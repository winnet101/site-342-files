<script lang="ts">
    import type { HTMLInputAttributes } from "svelte/elements";

    let {
        onSubmit,
        submitOnEnter = true,
        clearWhenSubmitted = true,
        acceptEmpty = false,
        showButton = true,
        ...props
    }: Partial<HTMLInputAttributes> & {
        onSubmit:
            | ((value: string) => void)
            | ((value: string) => PromiseLike<void>);
        submitOnEnter?: boolean;
        clearWhenSubmitted?: boolean;
        acceptEmpty?: boolean;
        showButton?: boolean;
    } = $props();

    let value = $state("");

    async function handleSubmit() {
        const valueTrimmed = value.trim();
        if (!acceptEmpty && valueTrimmed === "") return;
        if (clearWhenSubmitted) {
            value = "";
        }
        await onSubmit(valueTrimmed);
    }
</script>

<input
    {...props}
    class="stringInput_input_global_class"
    bind:value
    onkeydown={async (e) => {
        if (submitOnEnter && e.key === "Enter") {
            await handleSubmit();
        }
    }}
/>
{#if showButton}
    <button
        class="stringInput_button_global_class"
        onclick={async () => await handleSubmit()}>Submit</button
    >
{/if}
