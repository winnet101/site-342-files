export function useChoice<O extends Record<string, unknown>>() {
    let choice = $state<keyof O>();
    let resolver = $state<(value: O[keyof O]) => void>();

    async function choose<K extends keyof O>(newChoice: K) {
        choice = newChoice;
        console.log(choice);
        return await new Promise<O[K]>((res, rej) => {
            //@ts-expect-error
            resolver = res;
        });
    }

    function getChoice() {
        return choice;
    }

    function resolve<K extends keyof O>(fromChoice: K, result: O[K]) {
        if (resolver) {
            resolver(result);
            choice = undefined;
            resolver = undefined;
        } else {
            throw new Error(
                "Tried to call `resolve()` when a choice does not exist."
            );
        }
    }

    return [getChoice, choose, resolve] as const;
}
