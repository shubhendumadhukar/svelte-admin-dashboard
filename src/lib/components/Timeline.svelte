<script>
    import Icon from "svelte-icons-pack";
    import AiOutlineCheck from "svelte-icons-pack/ai/AiOutlineCheck";
    export let title;
    export let label;
    export let date;
    export let labelClass;
</script>

<div class="timeline">
    <div class="timeline-item">
        <div class="timeline-left">
            <span class="uk-badge uk-badge-{labelClass}">
                <Icon src={AiOutlineCheck} size="2em" color="white" />
            </span>
        </div>
        <div class="timeline-content">
            <div
                class="uk-card uk-card-default uk-border-rounded uk-margin-bottom"
            >
                <div
                    class="uk-card-header uk-flex-middle uk-grid-small"
                    uk-grid
                >
                    <h3
                        class="uk-text-default uk-text-bolder uk-text-capitalize"
                    >
                        {title}
                    </h3>
                    <span
                        class="uk-label uk-label-{labelClass} uk-margin-auto-left"
                        >{label}</span
                    >
                </div>
                <div class="uk-card-body uk-padding-remove">
                    <p class="uk-text-left uk-margin-small-top uk-text-meta">
                        {date}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .timeline .timeline-item {
        display: flex;
        display: -ms-flexbox;
        position: relative;
    }
    .timeline .timeline-item::before {
        background: #dadee4;
        content: "";
        height: 100%;
        left: 14px;
        position: absolute;
        top: 30px;
        width: 2px;
    }
    .timeline .timeline-item .timeline-left {
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    }
    .timeline .timeline-item .timeline-left .uk-badge {
        padding: 0;
        margin: 0;
        width: 30px;
        height: 30px;
    }
    .timeline .timeline-item .timeline-content {
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        padding: 0 0 0 1rem;
    }
    .uk-card {
        box-shadow: none;
        background-color: transparent;
    }
    .timeline .timeline-item .timeline-left .uk-badge.uk-badge-danger {
        background: #f0506e;
    }
    .timeline .timeline-item .timeline-left .uk-badge.uk-badge-success {
        background: #32d296;
    }
</style>
