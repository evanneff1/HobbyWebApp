// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$('#mainForm').submit(function(event) {
    event.preventDefault();
    var hours = $('#hours').val();
    if (hours > 0) {
        var hourlyRate = 500;
        var total = hours * hourlyRate;
        $('#response').html("<p>The total cost for my ski classes will be $" + total + ". This will be you soon enough! :)</p>");
        $('#failGif').attr('src', 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM25ieWE4dzE5N3dnZ3pvcm5meW5pb2NtdW9rYTB2MmV6eDdoeGRmMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2aLiVCqTZmxwXeRfMh/giphy.gif')
        $('#failGif').attr('height', '500px');
    }
    else {
        $('#response').html("<p>Please enter a realistic number of hours, otherwise you will end up like this!</p> <br>");
        $('#failGif').attr('src', 'https://media1.tenor.com/m/yoZrO6uvBS4AAAAC/skiing-fail-skiing.gif')
        $('#failGif').attr('height', '300px');
    }
});
