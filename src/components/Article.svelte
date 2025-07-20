<script lang="ts">
    import Classification from "./Classification.svelte";
</script>

<div class="background"></div>

<article class="body">
    <div class="warning-container">
        <sub class="warning" style="margin-top:1.5em">
            WARNING: YOU ARE ENTERING A RESTRICTED AREA.
        </sub>
        <sub class="warning"
            >The following data is classified.<br /> Unauthorized access is strictly
            prohibited.
        </sub>
        <sub class="warning"
            >ACCESSING THIS DATA WITHOUT PROPER AUTHORIZATION WILL RESULT IN
            SEVERE CONSEQUENCES.<br />
            ALL ACCESS ATTEMPTS ARE LOGGED AND MONITORED.<br />
            PROCEED ONLY IF YOU HAVE LEVEL 5 CLEARANCE OR HIGHER.
        </sub>
        <sub class="warning"
            >TURN BACK NOW OR FACE THE CONSEQUENCES.<br />THIS IS YOUR FINAL
            WARNING.
        </sub>
        <!-- <div style="height: 200vh;"></div> -->
    </div>

    <div
        class="gradient"
        style="height: 20vh; background: linear-gradient(transparent 0%, transparent 10%, black 100%)"
    ></div>
    <div class="main-container">
        <div
            style="height: 20vh; background:black; z-index: 99; position: relative;"
        ></div>
        <div class="main">
            <h1>SCP-10442</h1>
            <Classification
                data={{ classification: "apollyon", disrupt: 5, risk: 5 }}
            />
            <h2>Lorem ipsum</h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quaerat consequuntur perferendis necessitatibus amet, omnis
                temporibus voluptates maiores beatae sequi provident explicabo
                quo aliquid sint commodi suscipit repellendus totam, sit ab.
            </p>

            <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                facere sint, nulla dicta perspiciatis ea soluta pariatur ex unde
                assumenda cumque beatae quasi! Maiores atque autem laudantium
                vitae hic ex!
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                quod at odit sit ullam perferendis sequi libero illo, maiores
                cumque vitae! Eaque adipisci rem quibusdam ipsam delectus,
                voluptates consequatur hic!
            </p>
        </div>
    </div>

    <div
        style="height: 20vh; background:black; z-index: 99; position: relative;"
    ></div>
</article>

<style>
    .background {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(
            black 0%,
            rgb(98, 0, 0) 25%,
            rgb(193, 0, 0) 40%,
            red 60%,
            red 80%,
            rgb(60, 0, 0) 90%,
            rgb(4, 0, 0) 100%
        );
        z-index: -99;
    }

    .warning-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .warning {
        font-size: 1.3rem;
        margin-bottom: 300vh;
        text-align: center;
        text-transform: uppercase;
        /* width: 100%;
        display: block; */
    }

    .warning:last-child {
        z-index: 100;
    }

    .main {
        width: 80%;
        max-width: 700px;
        margin: 0 auto;
        background-color: black;
        padding: 1rem;
    }

    .main-container {
        background-color: black;
    }

    @keyframes horizontal-shake {
        0% {
            transform: translate(0, 0);
        }
        25% {
            transform: translate(1px, 1px);
        }
        50% {
            transform: translate(-1px, 1px);
        }
        75% {
            transform: translate(1px, -1px);
        }
        100% {
            transform: translate(-1px, -1px);
        }
    }
</style>
