<script>
    import DashboardWidget from "../lib/components/DashboardWidget.svelte";
    import FaSolidCoins from "svelte-icons-pack/fa/FaSolidCoins";
    import FaSolidFlagCheckered from "svelte-icons-pack/fa/FaSolidFlagCheckered";
    import BsCalendar2HeartFill from "svelte-icons-pack/bs/BsCalendar2HeartFill";
    import SiGoogleclassroom from "svelte-icons-pack/si/SiGoogleclassroom";

    const dashboardWidgets = [
        {
            icon: FaSolidFlagCheckered,
            title: "Classes Completed",
            number: 10,
            color: "#53A548",
        },
        {
            icon: SiGoogleclassroom,
            title: "Upcoming Classes",
            number: 2,
            color: "#493657",
        },
        {
            icon: FaSolidCoins,
            title: "Wallet (coins)",
            number: 100,
            color: "#F7B32B",
        },
        {
            icon: BsCalendar2HeartFill,
            title: "Streak (days)",
            number: 20,
            color: "#F2B5D4",
        },
    ];
</script>

<!-- Banner -->
<div id="dashboard" class="uk-card uk-card-default uk-card-body">
    <p class="uk-text-lead">Hello Shubhendu!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</div>
<!-- Widgets -->
<div class="uk-container uk-container-xlarge">
    <div
        class="widgets uk-grid-match uk-grid-column-small uk-grid-row-large uk-child-width-1-4@s uk-child-width-1-2 uk-margin-small-top"
        uk-grid
    >
        {#each dashboardWidgets as widget}
            <DashboardWidget {...widget} />
        {/each}
    </div>
</div>
Dashboard

<style>
    #dashboard {
        border-radius: 0 0 20px 20px;
        background-size: cover !important;
        background-repeat: no-repeat;
        color: white;
        background: url("../assets/blobs.svg");
    }
    .uk-text-lead {
        color: white;
    }
    @media only screen and (min-width: 640px) {
        .widgets {
            transform: translateY(-25%);
        }
    }
</style>
