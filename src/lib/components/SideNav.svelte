<script>
    import BsGrid1x2Fill from "svelte-icons-pack/bs/BsGrid1x2Fill";
    import BsSearch from "svelte-icons-pack/bs/BsSearch";
    import BsCalendar3 from "svelte-icons-pack/bs/BsCalendar3";
    import BsWallet from "svelte-icons-pack/bs/BsWallet";
    import BsPersonCircle from "svelte-icons-pack/bs/BsPersonCircle";
    import BsPencilSquare from "svelte-icons-pack/bs/BsPencilSquare";
    import VscFeedback from "svelte-icons-pack/vsc/VscFeedback";
    import SideMenuItem from "$components/SideMenuItem.svelte";
    import { onMount } from "svelte";
    let homeMenuItems = [
        {
            icon: BsGrid1x2Fill,
            title: "DASHBOARD",
            active: true,
            destination: "/",
        },
    ];
    let classMenuItems = [
        {
            icon: BsSearch,
            title: "BROWSE CLASSES",
            active: false,
            destination: "/classes/browse",
        },
        {
            icon: BsCalendar3,
            title: "MY CALENDAR",
            active: false,
            destination: "/calendar",
        },
        {
            icon: VscFeedback,
            title: "MY REVIEWS",
            active: false,
            destination: "/classes/reviews",
        },
        {
            icon: BsPencilSquare,
            title: "NOTES",
            active: false,
            destination: "/classes/notes",
        },
    ];
    let profileMenuItems = [
        {
            icon: BsPersonCircle,
            title: "MY PROFILE",
            active: false,
            destination: "/profile",
        },
        {
            icon: BsWallet,
            title: "WALLET",
            active: false,
            destination: "/profile/wallet",
        },
    ];
    const sideMenuItemOnClick = (e) => {
        homeMenuItems = reMapItems(homeMenuItems, e);
        classMenuItems = reMapItems(classMenuItems, e);
        profileMenuItems = reMapItems(profileMenuItems, e);
    };
    const reMapItems = (items, e) => {
        items = items.map((item) => {
            if (item.icon !== null) {
                if (item.title === e.target.innerText) {
                    item.active = true;
                } else {
                    item.active = false;
                }
                return item;
            }
        });
        return items;
    };
    onMount(() => {
        let destination = window.location.pathname;
        console.log(destination);
        homeMenuItems = homeMenuItems.map((item) => {
            if (item.destination === destination) {
                item.active = true;
            } else {
                item.active = false;
            }
            return item;
        });
        classMenuItems = classMenuItems.map((item) => {
            if (item.destination === destination) {
                item.active = true;
            } else {
                item.active = false;
            }
            return item;
        });
        profileMenuItems = profileMenuItems.map((item) => {
            if (item.destination === destination) {
                item.active = true;
            } else {
                item.active = false;
            }
            return item;
        });
    });
</script>

<div class="uk-text-center">
    <a class="uk-navbar-item uk-logo" href="/">Instrukti</a>
</div>
<hr />
<div class="uk-card uk-card-default uk-card-body sidenav">
    <div class="uk-flex uk-flex-column uk-flex-between uk-height-1-1">
        <div>
            <p class="uk-text-bolder uk-text-uppercase">HOME</p>
            {#each homeMenuItems as item (item.icon)}
                <SideMenuItem {...item} onClick={sideMenuItemOnClick} />
            {/each}
            <p class="uk-text-bolder uk-text-uppercase">CLASSROOM</p>
            {#each classMenuItems as item (item.icon)}
                <SideMenuItem {...item} onClick={sideMenuItemOnClick} />
            {/each}
            <p class="uk-text-bolder uk-text-uppercase">PROFILE</p>
            {#each profileMenuItems as item (item.icon)}
                <SideMenuItem {...item} onClick={sideMenuItemOnClick} />
            {/each}
        </div>
        <div>
            <button
                class="uk-button uk-button-danger uk-width-1-1 uk-margin-top uk-border-rounded"
            >
                Logout
            </button>
        </div>
    </div>
</div>

<style>
    hr {
        margin: 0;
    }
    .sidenav {
        height: 95%;
    }
    .uk-text-bolder {
        font-size: small;
    }
    .uk-card {
        box-shadow: none;
        background-color: transparent;
    }
</style>
