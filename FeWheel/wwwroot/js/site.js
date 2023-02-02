// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


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

const engineers = [{ id: 1, name: "Engineer 1", workingDays: [] },
{ id: 2, name: "Engineer 2", workingDays: [] },
{ id: 3, name: "Engineer 3", workingDays: [] },
{ id: 4, name: "Engineer 2", workingDays: [] },
 { id: 5, name: "Engineer 3", workingDays: [] },
{ id: 6, name: "Engineer 2", workingDays: [] },
{ id: 7, name: "Engineer 3", workingDays: [] },
{ id: 8, name: "Engineer 2", workingDays: [] },
{ id: 9, name: "Engineer 3", workingDays: [] },
{ id: 10, name: "Engineer 10", workingDays: [] }
];

function scheduleEngineers() {
    let workingDays = [];
    let currentDate = new Date();
    for (let i = 0; i < 14; i++) {
        let nextDate = new Date(currentDate.getTime() + (i * 24 * 60 * 60 * 1000));
        workingDays.push(nextDate);
    }

    workingDays.forEach(day => {
        let availableEngineers = engineers.filter(
            engineer =>
                engineer.workingDays.indexOf(day.toDateString()) === -1 &&
                engineer.workingDays[engineer.workingDays.length - 1] !==
                workingDays[workingDays.indexOf(day) - 1].toDateString()
        );
        let firstEngineer =
            availableEngineers[Math.floor(Math.random() * availableEngineers.length)];
        firstEngineer.workingDays.push(day.toDateString());

        let secondAvailableEngineers = engineers.filter(
            engineer =>
                engineer.workingDays.indexOf(day.toDateString()) === -1 &&
                engineer.id !== firstEngineer.id &&
                engineer.workingDays[engineer.workingDays.length - 1] !==
                workingDays[workingDays.indexOf(day) - 1].toDateString()
        );
        let secondEngineer =
            secondAvailableEngineers[Math.floor(Math.random() * secondAvailableEngineers.length)];
        secondEngineer.workingDays.push(day.toDateString());
    });
}

scheduleEngineers();
console.log(engineers);

