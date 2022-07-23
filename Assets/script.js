var todayDate = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").text(todayDate);

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

        var savedEvent = localStorage.getItem(currentHour);
        if (savedEvent) {
            $(this).children(".description").val(savedEvent);
        }
    })
};

var saveButton = $(".saveBtn");

saveButton.on('click', function() {
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();

    localStorage.setItem(time, text);
});

timeColor();