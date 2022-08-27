<script>
    import Icon from "svelte-icons-pack/Icon.svelte";
    export let icon;
    export let title;
    export let number;
    export let color;
</script>

<div>
    <div
        class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2 uk-margin uk-border-rounded"
        uk-grid
    >
        <div class="uk-card-media-left uk-width-1-4 uk-cover-container">
            <div class="uk-position-center">
                <Icon size="2em" {color} src={icon} />
            </div>
        </div>
        <div class="uk-width-expand">
            <div
                class="uk-card-body uk-flex uk-flex-column uk-text-left uk-flex-around"
            >
                <div class="uk-text-meta uk-text-uppercase">{title}</div>
                <div class="uk-text-large uk-text-bolder">{number}</div>
            </div>
        </div>
    </div>
</div>
