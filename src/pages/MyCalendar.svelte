<script>
    import FullCalendar from "svelte-fullcalendar";
    import daygridPlugin from "@fullcalendar/daygrid";
    import timeGridPlugin from "@fullcalendar/timegrid";
    let month = (new Date().getMonth() + 1).toString();
    if (parseInt(month) < 10) {
        month = "0" + month;
    }
    let options = {
        initialView: "dayGridMonth",
        headerToolbar: { center: "dayGridMonth,timeGridWeek" },
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
        },
        plugins: [daygridPlugin, timeGridPlugin],
        height: "80vh",
        events: [
            {
                title: "Physics",
                date: `2022-${month}-29T15:00:00`,
                duration: { minutes: 30 },
            },
            {
                title: "Mathematics",
                date: `2022-${month}-15T18:00:00`,
                duration: { minutes: 30 },
            },
            {
                title: "Chemistry",
                date: `2022-${month}-10T15:00:00`,
                duration: { minutes: 30 },
            },
            {
                title: "Biology",
                date: `2022-${month}-16T17:00:00`,
                duration: { minutes: 30 },
            },
            {
                title: "English",
                date: `2022-${month}-22T12:00:00`,
                duration: { minutes: 30 },
            },
            {
                title: "Mathematics",
                date: `2022-${month}-19T18:00:00`,
                duration: { minutes: 30 },
            },
            {
                title: "Social Science",
                date: `2022-${month}-29T18:00:00`,
                duration: { minutes: 30 },
            },
            {
                title: "Mathematics",
                date: `2022-${month}-17T18:00:00`,
                duration: { minutes: 30 },
            },
        ],
    };
    export let location;
</script>

<div
    class="uk-card uk-card-default uk-card-body uk-padding uk-margin-top uk-border-rounded"
>
    <FullCalendar {options} />
</div>

<style>
    .uk-card {
        height: 90vh;
    }
</style>
