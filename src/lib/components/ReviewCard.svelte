<script>
    import Icon from "svelte-icons-pack";

    import BsStarFill from "svelte-icons-pack/bs/BsStarFill";
    import BsStarHalf from "svelte-icons-pack/bs/BsStarHalf";
    import BsStar from "svelte-icons-pack/bs/BsStar";
    export let comment;
    export let stars;
    let fullStars = Math.floor(stars);
    let halfStars = Math.round(stars - fullStars);
    let blankStars = Math.floor(5 - stars);
</script>

<div class="uk-grid-divider uk-text-center" uk-grid>
    <div class="comment uk-width-expand">
        {comment}
    </div>
    <div class="rating uk-width-1-4">
        <p>
            {#each Array(fullStars) as _, i}
                <span class="uk-margin-small-right">
                    <Icon src={BsStarFill} color="coral" />
                </span>
            {/each}
            {#each Array(halfStars) as _, i}
                <span class="uk-margin-small-right">
                    <Icon src={BsStarHalf} color="coral" />
                </span>
            {/each}
            {#each Array(blankStars) as _, i}
                <span class="uk-margin-small-right">
                    <Icon src={BsStar} color="coral" />
                </span>
            {/each}
        </p>
    </div>
</div>

<style>
    .rating {
        line-height: 4em;
    }
</style>
