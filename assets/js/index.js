
$("#add_user").submit(function(event){
    alert("Data Inserted Successfully!");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {};

    // console.log(unindexed_array);
    $.map(unindexed_array, function(n,i){
        data[n['name']] = n['value']
    })

    var request = {
        url: "http://localhost:3000/api/users/"+data.id,
        type: "PUT",
        dataType: "json",
        data: JSON.stringify(data), 
        success: function(response) {
            console.log(response);
        },
        error: function(response) {
            console.log(response);
            console.log(request.url)
        }
    };
    
    $.ajax(request).done(function(response){
        alert("Data updated successfully!");
    });
    $.ajax(request).fail(function(err,status){
        alert("Request failed: "+status+err.data)
    })

})