<div class="uk-height-1-1 uk-width-1-1 uk-grid-small" uk-grid>
    <div
        class="sidenav uk-card uk-card-default uk-height-1-1 uk-card-body uk-visible@l"
    >
        <slot name="sidenav" />
    </div>
    <div class="uk-margin-small-left uk-width-expand@m">
        <slot name="main" />
    </div>
</div>

<style>
    .sidenav {
        width: 300px;
        padding: 0px;
    }
</style>
