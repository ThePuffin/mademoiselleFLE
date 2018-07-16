$(function () {
    $('#datetimepicker4').datetimepicker({
        inline: true,
        format: 'L',
        daysOfWeekDisabled: [
            0, 1, 5, 6
        ],
        locale: 'fr',
        dayViewHeaderFormat: "DD MMMM YYYY"
    });
});