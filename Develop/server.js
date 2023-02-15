$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        var time= $(this).parent().attr("id")
        var value = $(this).siblings(".description").val()
        localStorage.setItem(time, value)
        $(".notification").addClass("show")
        setTimeout(function(){
            $(".notification").removeClass("show")
        },5000)
    })

    function rowformat(){
        var currentTime= moment().hour()
        $(".timeBlock").each(function(){
            var blockTime= parseInt($(this).attr("id").split("-")[1])
            if(blockTime<currentTime){
                $(this).addClass("past")
            } else if(blockTime=== currentTime){
                $(this).removeClass("past")
                $(this).addClass("present")
            } else{
                $(this).removeClass("past")
                $(this).removeClass("present")
                $(this).addClass("future")
            }

        })
    }
    rowformat()
    setInterval(rowformat, 10000)

    $(".description").each(function(){
    $(this).val( localStorage.getItem( $(this).parent().attr("id")))
    })
    $("#currentDay").text(moment().format("MMM Do YYYY"))
})
























// var saveButtonEl =$("#save-btn")
// var pastColor = $(".past")
// var presentColor = $(".present")
// var futureColor =$(".future")
// var date = moment();
// $("#currentDay").text(date. format("MMM Do YYYY"))

// var timeBl = $("#TimeBlock");
// timeBl.on('click', function (customEvent){

// })

// function saveHandler({ currentTarget }) {
//     let elem = currentTarget;
//     do {
//     elem = elem.parentElement;
//     if (elem && elem.classList.contains("has-exportable-content")) {
//         const { textContent } = elem.querySelector(".exportable-content") || {};
//         download(textContent, saveButtonEl);
//         return;
//     }
//     } while (elem && elem !== elem.getParentNode());
// }

// function saveDate() {
//     saveButtonEl.textContent = saveDate;
//     localStorage.setItem("btnSave, saveDate");
// }