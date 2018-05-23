$(document).ready(function(){
    $('#button').on('click',function(event){
      event.preventDefault();
      $.ajax({
        //   equal to burger controllers
        url:'/api/burgers',
        method:'POST',
        data:{
          burger_name: $("#bname").val(),
          devoured: 0
        }
      }).then(function(response){
        location.reload();
      })
    })
    $('.devour').on('click',function(event){
        event.preventDefault();
        console.log("Value is ", event.target.value);
        console.log("Here i am ", event.target.innerHTML);
        $.ajax({
          url:'/api/burgers/' + event.target.value,
          method:'POST',
          data:{
            burger_name:$('#bname').val(),
            devoured:0
          }
        }).then(function(response){
          
        })
      })
    })


  
  