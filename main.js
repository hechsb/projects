$(".student_Form").hide()

$("#addButton").click(function(){
    $(".student_Form").fadeIn("slow") 
})

function makeStudent(name,lastName,IQ,feedback){
    var obj={}
    obj.name=name,
    obj.lastName=lastName
    obj.IQ=IQ
    obj.feedback=feedback
    // obj.redPin=redPin
    // obj.bluePin=bluePin

    return obj
}
var students=[]
var marLeft=250
$("#addStudent").on('click',function(e){
    e.preventDefault()
    var std =makeStudent($("#fname").val(),$("#lname").val(),$("#IQ").val(),$("#feedback").val())
    $(".student_Form").fadeOut("4000")
    students.push(std)
    // $(".card").addClass("studentCard")
    // const $newStudentCard = $(`<div class="student">  
    // <div class="card">
    //     <div class="card-border-top">
    //     </div>
    //     <div class="img">
    //     </div>
    //     <div class="nameOfStudent">
    //         <span> ${std.name} ${std.lastName}</span>
    //     </div>
    //     </div>
    //     </div>
       
    // `)
    //  $(".card").addClass("studentCard")
    
    const $newStudentCard = $(` 
     <div class="card" style='margin-left:${marLeft}px'>
    <div class="card-border-top">
    </div>
    <div class="img">
    </div>
    <div class="addStudent">
      <span> ${std.name} ${std.lastName}</span>
      </button>
    </div>
  </div>
       
    `)
  marLeft+=250

    $(".container").append($newStudentCard)
})