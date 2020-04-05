$(document).ready(function () {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    $(".btn-sm").on("click", function () {
        var activity = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, activity);
        console.log(localStorage);

    });

    $("#btn-sm-clear").on("click", function () {
        // var clearOut = $(this).siblings(".description").val();
        // var time = $(this).parent().attr("id");
        $(".description").empty();
        localStorage.clear();
    });

    function hourUpdater() {

        var currentHour = moment().hours();

        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("-")[1]);
            console.log(blockHour)

            //if < past
            if (blockHour < currentHour) {
                $(this).addClass("past")
                //addClass of past
            } else if (blockHour === currentHour) {
                //removeClass of past
                $(this).removeClass("past")
                //addClass of present
                $(this).addClass("present")
            }
            else {
                //removeClass of past
                $(this).removeClass("past");
                //removeClass of present
                $(this).removeClass("present");
                //addClass of future
                $(this).addClass("future");
            }
            // if === current hour present
            //else > future

        });
    }

    hourUpdater();

    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    $("#hour-18 .description").val(localStorage.getItem("hour-18"));
    $("#hour-19 .description").val(localStorage.getItem("hour-19"));
    $("#hour-20 .description").val(localStorage.getItem("hour-20"));
});



//     today = new Date();
//     currentMonth = today.getMonth();
//     currentYear = today.getFullYear();
//     selectYear = document.getElementById("year");
//     selectMonth = document.getElementById("month");

//     months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// // monthAndYear = document.getElementById("monthAndYear");
// // showCalendar(currentMonth, currentYear);


// function next() {
//     currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
//     currentMonth = (currentMonth + 1) % 12;
//     showCalendar(currentMonth, currentYear);
// }

// function back() {
//     currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
//     currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
//     showCalendar(currentMonth, currentYear);
// }

// function jump() {
//     currentYear = parseInt(selectYear.value);
//     currentMonth = parseInt(selectMonth.value);
//     showCalendar(currentMonth, currentYear);
// }


// function showCalender(month,year)
// let firstDay = (new Date(month,year)).getDay();

// tbl = document.getElementById("clender-body");

// tbl.innerHTML = "";

// // function to fill with months info
// monthAndYear.innerHTML = months[month] + "" + year;
// selectYear.value = year;
// selectMonth.value = month; 

// //generate the amount of days in that month 
// daysInMonth(month,year){
//     return 32 - new Date(month,year,32).getDate();
// }
// //this will create my rows and cells 
// let date = 1;
// for (let i = 0; i < 6; i++){
// let row = document.createElement("table-rowEL");
//     for (let d = 0; d < 7; d++){
//         if(i === 0 && d < firstDay){
//             cell = document.createElement("todayEl");
//             cellText = document.createTextNode("");
//             cell.appendChild(cellText);
//             row.appendChild(cell);
//         }
//         else if (date > daysInMonth(month,year))
//         break;
//     }
//     else { 
//         cell = documnet.createElement("todayEl");
//         cellText = document.createTextNode(date);
//         cell.appendChild(cellText);
//         row.appendChild(cell);
//         date++;

//     }
// }
// tbl.appendChild(row);

//function to input information
    //select or highlight date
    //input information 
    //cross out and delete information after its been submitted


//save data on server 