// $(function() {
    
//     // live number animation
//     var liveNumbers = $("h3.live_number");

//     liveNumbers.each(function( index ) {
//         var number = parseInt($( this ).text()); //save number to var before clean
//         $( this ).text(0); //clean number before set
//         setNumber($(this), number);
//     });


//     function setNumber(obj, number) {
//         console.log(obj.text());
//         if(parseInt(obj.text()) < number){
//             obj.text( parseInt(obj.text() + 1));

//             //recursive
//             setTimeout(setNumber(obj, number), 50000);
//         }
//     }
// });