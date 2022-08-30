<script>
    import ReviewsGiven from "$components/ReviewsGiven.svelte";
    import ReviewsPending from "$components/ReviewsPending.svelte";
    import ReviewsRecieved from "$components/ReviewsRecieved.svelte";

    export let location;
</script>

<div
    class="uk-card uk-card-default uk-card-body uk-padding uk-margin-top uk-border-rounded"
>
    <ul class="uk-flex-center" uk-tab>
        <li>
            <a href="#recieved">
                Reviews Recieved
                <span class="uk-badge" style="background-color: green;">
                    12
                </span>
            </a>
        </li>
        <li>
            <a href="#given">Reviews Given<span class="uk-badge">8</span></a>
        </li>
        <li>
            <a href="#pending">
                Pending Reviews
                <span class="uk-badge" style="background-color: red;">5</span>
            </a>
        </li>
    </ul>

    <ul class="uk-switcher uk-margin">
        <li>
            <ReviewsRecieved />
        </li>
        <li>
            <ReviewsGiven />
        </li>
        <li>
            <ReviewsPending />
        </li>
    </ul>
</div>
