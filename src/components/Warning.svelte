<div class="background"></div>

<div class="warning-container">
    <sub class="warning" style="margin-top:1.5em">
        WARNING: YOU ARE ENTERING A RESTRICTED AREA.
    </sub>
    <sub class="warning"
        >The following data is classified.<br /> Unauthorized access is strictly
        prohibited.
    </sub>
    <sub class="warning"
        >ACCESSING THIS DATA WITHOUT PROPER AUTHORIZATION WILL RESULT IN SEVERE
        CONSEQUENCES.<br />
        ALL ACCESS ATTEMPTS ARE LOGGED AND MONITORED.<br />
        PROCEED ONLY IF YOU HAVE LEVEL 5 CLEARANCE OR HIGHER.
    </sub>
    <sub class="warning"
        >TURN BACK NOW OR FACE THE CONSEQUENCES.<br />THIS IS YOUR FINAL
        WARNING.
    </sub>
    <!-- <div style="height: 200vh;"></div> -->
</div>

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
