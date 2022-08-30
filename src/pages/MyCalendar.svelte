<script>
    import FullCalendar from "svelte-fullcalendar";
    import daygridPlugin from "@fullcalendar/daygrid";
    import timeGridPlugin from "@fullcalendar/timegrid";
    import listPlugin from "@fullcalendar/list";
    let month = (new Date().getMonth() + 1).toString();
    if (parseInt(month) < 10) {
        month = "0" + month;
    }
    let options = {
        initialView: "dayGridMonth",
        headerToolbar: {
            center: "timeGridDay,timeGridWeek,dayGridMonth,listMonth",
        },
        views: {
            dayGrid: {
                // options apply to dayGridMonth, dayGridWeek, and dayGridDay views
            },
            timeGrid: {
                nowIndicator: true,
            },
            week: {
                // options apply to dayGridWeek and timeGridWeek views
            },
            day: {
                // options apply to dayGridDay and timeGridDay views
            },
            listWeek: {},
        },
        plugins: [daygridPlugin, timeGridPlugin, listPlugin],
        height: "80vh",
        events: [
            {
                title: "Physics",
                start: `2022-${month}-29T15:00:00`,
                end: `2022-${month}-29T15:30:00`,
            },
            {
                title: "Mathematics",
                start: `2022-${month}-15T18:00:00`,
                end: `2022-${month}-15T19:00:00`,
            },
            {
                title: "Chemistry",
                start: `2022-${month}-10T15:00:00`,
                end: `2022-${month}-10T16:00:00`,
            },
            {
                title: "Biology",
                start: `2022-${month}-16T17:00:00`,
                end: `2022-${month}-16T17:30:00`,
            },
            {
                title: "English",
                start: `2022-${month}-22T12:00:00`,
                end: `2022-${month}-22T14:00:00`,
            },
            {
                title: "Mathematics",
                start: `2022-${month}-19T18:00:00`,
                end: `2022-${month}-19T18:30:00`,
            },
            {
                title: "Social Science",
                start: `2022-${month}-29T18:00:00`,
                end: `2022-${month}-29T18:40:00`,
            },
            {
                title: "Mathematics",
                start: `2022-${month}-17T14:00:00`,
                end: `2022-${month}-17T15:00:00`,
            },
        ],
    };
    export let location;
</script>

<div
    class="uk-card uk-card-default uk-card-body uk-padding uk-margin-top uk-margin-bottom uk-border-rounded"
>
    <FullCalendar {options} />
</div>

<style>
    .uk-card {
        height: 90vh;
    }
</style>
