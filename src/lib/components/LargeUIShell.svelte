<div class="main uk-height-1-1 uk-width-1-1 uk-grid-small" uk-grid>
    <div
        class="sidenav uk-card uk-card-default uk-height-1-1 uk-card-body uk-visible@l"
    >
        <slot name="sidenav" />
    </div>
    <div
        class="right-panel uk-margin-small-left uk-height-1-1 uk-width-expand@m"
    >
        <slot name="main" />
    </div>
</div>

<style>
    .sidenav {
        width: 300px;
        padding: 0px;
    }
    .main {
        overflow: hidden;
        margin-left: 0;
    }
    .right-panel {
        overflow-y: auto;
    }
</style>
