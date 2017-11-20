//Check off to do by clicking

$('ul').on('click', 'li', function () {
    $(this).toggleClass("completed");
});

$('ul').on('click', 'span', function (e) {
    e.stopPropagation();
    $(this).css('backgroundColor', "green")
    $(this).parent().fadeOut(1000, function () {
        $(this).remove();
    })
});

$("input[type='text']").on('keypress', function (e) {
    var newTodo = $(this).val();
    if (e.which === 13) {
        thetext = "<li><span class=\"delete\"><img src=\"assests/images/icons8-empty-trash-50.png\" width=\"20\"/></span> " + newTodo + "</li>";
        $(this).val("");
        $('ul').append(thetext);
    }
})

$("#plus").on('click', function () {
    $('input[type="text"]').fadeToggle();
})

