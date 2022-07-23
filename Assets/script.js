// Uses moment.js to display current date
var todayDate = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").text(todayDate);

// Function to display timeblock color based on current hour
function timeColor() {
    var hour = moment().hour();

    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));
    
        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }

        // Gets item from local storage so that it displays on page even after refresh
        var savedEvent = localStorage.getItem(currentHour);
        if (savedEvent) {
            $(this).children(".description").val(savedEvent);
        }
    })
};

// Function to save item to local storage on button click
var saveButton = $(".saveBtn");

saveButton.on('click', function() {
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();

    localStorage.setItem(time, text);
});

// Calls timeblock color function
timeColor();