// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// JavaScript function to select two engineers at random
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('scheduleEngineers').addEventListener('click', function () {  //name of button
        scheduleEngineers(); //calling the function
    });
});
function selectEngineers() {
    // Implementation of business rules and engineer selection
    var engineers = ["Engineer 1", "Engineer 2", "Engineer 3", "Engineer 4", "Engineer 5", "Engineer 6", "Engineer 7", "Engineer 8", "Engineer 9", "Engineer 10"];
    var selectedEngineers = [];
    var shiftDates = [];

    // Ensure each engineer can do at most one half day shift in a day
    for (var i = 0; i < 2; i++) {
        var randomIndex = Math.floor(Math.random() * engineers.length);
        var selectedEngineer = engineers[randomIndex];
        var currentDate = new Date();
        var currentShiftDate = currentDate.toLocaleDateString();

        // Check if the selected engineer has already been assigned a shift today
        if (shiftDates.includes(currentShiftDate)) {
            continue;
        }

        // Ensure an engineer cannot have half day shifts on consecutive days
        var previousShiftDate = new Date(currentDate.setDate(currentDate.getDate() - 1));
        if (shiftDates.includes(previousShiftDate.toLocaleDateString())) {
            continue;
        }

        // Ensure each engineer has completed one whole day of support in any 2 week period
        var previousShiftDate = new Date(currentDate.setDate(currentDate.getDate() - 14));
        if (shiftDates.includes(previousShiftDate.toLocaleDateString())) {
            continue;
        }


        // Add the selected engineer to the list of selected engineers and their shift date to the list of shift dates
        selectedEngineers.push(selectedEngineer);
        shiftDates.push(currentShiftDate);
    }

    return selectedEngineers;
}


document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'dayGridMonth'
        });
        calendar.render();
      });
// Get the generateCalendar button
var generateCalendarButton = document.getElementById("generateCalendar");

// Add an event listener to the button
generateCalendarButton.addEventListener("click", function () {
    // Call the generateCalendar function
    generateCalendar();
});

// Generate Calendar function
function generateCalendar() {
    // Get the calendar element
    var calendarEl = document.getElementById("calendar");

    // Initialize the calendar
    var calendar1 = new FullCalendar.Calendar(calendarEl, {
        plugins: ['dayGrid'],
        events: [
            { title: 'Engineer 1', start: '2023-01-01' },
            { title: 'Engineer 2', start: '2023-01-02' },
            // Add more events here
        ],
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay'
        },
        dateClick: function (info) {
            alert('Clicked on: ' + info.dateStr);
        }
    });

    // Render the calendar
    calendar1.render();
}

