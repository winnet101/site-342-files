<script lang="ts">
    let {
        data,
    }: {
        data: {
            classification: string;
            disrupt: 1 | 2 | 3 | 4 | 5;
            risk: 1 | 2 | 3 | 4 | 5;
        };
    } = $props();

    const disruptionClass = {
        1: "dark",
        2: "vlam",
        3: "keneq",
        4: "ekhi",
        5: "amida",
    };

    const riskClass = {
        1: "notice",
        2: "caution",
        3: "warning",
        4: "danger",
        5: "critical",
    };
</script>

<div class="container">
    <div class="classification">
        <div class="sub">CONTAINMENT CLASS:{" "}</div>
        <div class="data">{data.classification}</div>
        <div class="icon"></div>
    </div>
    <div class="disrupt">
        <div class="sub">DISRUPTION CLASS:{"  "}</div>
        <div class="data">
            {data.disrupt} [{Object.hasOwn(disruptionClass, data.risk)
                ? disruptionClass[data.disrupt]
                : "undefined"}]
        </div>
        <!-- <div class="icon"></div> -->
    </div>
    <div class="risk">
        <div class="sub">RISK CLASS:{"  "}</div>
        <div class="data">
            {data.risk} [{Object.hasOwn(riskClass, data.risk)
                ? riskClass[data.risk]
                : "undefined"}]
        </div>
        <!-- <div class="icon"></div> -->
    </div>
</div>

<style>
    .container {
        display: grid;
        grid-template-columns: 1fr 0.5fr 1fr;
        grid-template-areas:
            "class class dis"
            "class class risk";
        gap: 0.2em;
        font-size: 2rem;
        line-height: 0.9em;
        margin: 0 auto;
        height: max-content;
        max-width: 700px;
        text-transform: uppercase;
    }

    @media (max-width: 700px) {
        .container {
            grid-template-columns: 1fr;
            grid-template-rows:
                0.5fr
                1fr
                0.5fr
                0.5fr;
            grid-template-areas:
                "class"
                "class"
                "dis"
                "risk";
            max-width: 500px;
        }

        .disrupt,
        .risk {
            flex-direction: row !important;
            justify-content: left !important;
            /* justify-content: space-between !important; */
            align-items: center;
            /* padding-bottom: 0.2em !important; */
        }

        .disrupt > .data,
        .risk > .data {
            font-size: 0.9em;
        }

        .disrupt > .sub,
        .risk > .sub {
            font-size: 0.6em;
            white-space: pre;
        }
    }

    .classification {
        grid-area: class;
    }

    .disrupt {
        grid-area: dis;
    }

    .risk {
        grid-area: risk;
    }

    .container > div {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-transform: uppercase;
        background-color: var(--purple-5);
        padding: 0.2em;
        /* padding-bottom: 0.4em; */
        padding-left: 0.4em;
        border-left: 0.2em solid var(--purple-1);
        /* align-items: center; */
        text-shadow: 0 0 20px var(--purple-0);
    }

    .sub {
        font-size: 0.6em;
        line-height: normal;
    }

    .disrupt > .sub,
    .risk > .sub {
        font-size: 0.4em;
        line-height: 1em;
        white-space: pre;
    }

    .disrupt > .data,
    .risk > .data {
        font-size: 0.8em;
        line-height: 0.8em;
        line-height: 1em;
    }

    .data {
        font-size: 1.2em;
    }

    .icon {
        height: 50%;
        aspect-ratio: 1/1;
        background: var(--purple-0);
        border: 5px solid white;
        border-radius: 50px;
        position: absolute;
        right: 1em;
        /* image-rendering: pixelated; */
        filter: blur(0.2px);
        box-shadow: 0 0 20px var(--purple-0);
    }

    .icon::after {
        content: "";
        display: block;
        height: 100%;
        aspect-ratio: 1/1;
        background-image: url(/site-342-files/amida.svg);
        animation:
            rotate 2s infinite linear reverse,
            flicker 100ms infinite linear;
        filter: blur(0.7px) !important;
        position: relative;
        z-index: 300;
    }

    .disrupt > .icon::after {
        background-image: url(/site-342-files/critical.svg);
    }

    @media (max-width: 700px) {
        .icon {
            height: 75%;
        }

        .disrupt > .icon,
        .risk > .icon {
            display: none;
        }
    }

    @media (max-width: 350px) {
        .icon {
            display: none;
        }
    }

    @keyframes rotate {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(359deg);
        }
    }
    @keyframes opacity-flicker {
        from {
            opacity: 0.1;
        }
        to {
            opacity: 1;
        }
    }
</style>
