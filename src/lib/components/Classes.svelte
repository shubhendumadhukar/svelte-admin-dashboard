<script>
    const newClassrooms = ["", "", "", "", ""];
    const trendingClassrooms = ["", "", "", "", ""];
</script>

<div
    class="uk-card uk-card-default uk-card-body uk-border-rounded uk-text-center"
>
    <h3 class="uk-card-title uk-text-left">Classrooms</h3>
    <hr />
    <!-- New Clasrooms -->
    <table
        class="uk-table uk-table-divider uk-table-striped uk-table-hover uk-table-small"
    >
        <thead>
            <tr>
                <th colspan="3">New Clasrooms</th>
            </tr>
        </thead>
        <tbody>
            {#each newClassrooms as classes}
                <tr>
                    <td>Table Data</td>
                    <td>
                        <button
                            class="uk-button uk-button-primary uk-button-small"
                            type="button"
                        >
                            Enroll
                        </button>
                    </td>
                    <td>
                        <button
                            class="uk-button uk-button-secondary uk-button-small"
                            type="button"
                        >
                            View Details
                        </button>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
    <!-- Trending Clasrooms -->
    <table
        class="uk-table uk-table-divider uk-table-striped uk-table-hover uk-table-small"
    >
        <thead>
            <tr>
                <th colspan="3">Trending Clasrooms</th>
            </tr>
        </thead>
        <tbody>
            {#each trendingClassrooms as classes}
                <tr>
                    <td>Table Data</td>
                    <td>
                        <button
                            class="uk-button uk-button-primary uk-button-small"
                            type="button"
                        >
                            Enroll
                        </button>
                    </td>
                    <td>
                        <button
                            class="uk-button uk-button-secondary uk-button-small"
                            type="button"
                        >
                            View Details
                        </button>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
