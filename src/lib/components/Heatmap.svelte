<script>
    import moment from "moment";

    // @ts-ignore
    import SvelteHeatmap from "svelte-heatmap";

    // Generate a random number
    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Generate dummy data for a heatmap
    function generateFakeData() {
        const data = [];
        const date = moment().subtract(1, "year");
        const now = moment();

        while (date.isBefore(now)) {
            data.push({
                date: date.toDate(),
                value: rand(0, 4),
            });

            date.add(1, "day");
        }

        return data;
    }

    const fakeData = generateFakeData();
</script>

<div
    class="uk-card uk-card-default uk-card-body uk-border-rounded uk-margin-remove-top uk-margin-bottom"
>
    <h3 class="uk-card-title">Activity Graph</h3>
    <hr />
    <SvelteHeatmap
        allowOverflow={true}
        cellGap={5}
        cellRadius={1}
        data={fakeData}
        dayLabelWidth={20}
        endDate={moment().toDate()}
        monthGap={20}
        monthLabelHeight={20}
        startDate={moment().subtract(3, "months").toDate()}
        view={"monthly"}
    />
</div>
