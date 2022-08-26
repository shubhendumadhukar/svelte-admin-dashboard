<script>
    import Icon from "svelte-icons-pack/Icon.svelte";
    import { Link } from "svelte-routing";
    export let icon;
    export let title;
    export let active;
    export let onClick;
    export let destination;
</script>

<div
    class="{active
        ? 'active uk-box-shadow-large'
        : ''} uk-width-1-1 side-menu-item uk-margin-small-bottom uk-flex uk-flex-between uk-padding-small uk-padding-remove-top uk-padding-remove-bottom"
>
    <div class="icon">
        <Icon size="1.25em" src={icon} />
    </div>
    <div>
        <button
            class="uk-button uk-button-default uk-button-small uk-text-left"
            on:click={onClick}
        >
            <Link to={destination}>
                <span class="uk-text-bolder">{title}</span></Link
            >
        </button>
    </div>
</div>

<style>
    .active {
        background-image: linear-gradient(to left, #093824 50%, #1336fe 0);
        background-position: left;
        background-size: 200% 200%;
        transition: background-position 0.5s;
    }
    .active:hover {
        background-position: right;
    }
    .active button {
        color: white;
    }
    .active .icon {
        color: white;
    }
    button {
        border: none;
        line-height: 2rem;
        cursor: default;
    }
    .side-menu-item {
        border-radius: 10px;
    }
    .icon {
        line-height: 1.75rem;
    }
</style>
