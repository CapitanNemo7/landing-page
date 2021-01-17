function getDate() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    //По надобности условие ниже повторить с minutes и hours
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    document.getElementById('timedisplay').innerHTML ='[ '+'&nbsp ' + hours + ':' + minutes + ':' + seconds +'&nbsp'+ '  ]';
}
setInterval(getDate, 0);