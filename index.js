function setTime() {
    var currentTime = new Date(),
        hour = currentTime.getHours();
    console.log(hour)
    // hour = 1
    minute = currentTime.getMinutes(),
        second = currentTime.getSeconds(),
        hourDeg = (360 / 12) * hour,
        minuteDeg = (360 / 60) * minute,
        secondDeg = (360 / 60) * second;

    $('.hour').css('transform', 'rotate(' + hourDeg + 'deg)');

    $('.minute').css('transform', 'rotate(' + minuteDeg + 'deg)');

    $('.second').css('transform', 'rotate(' + secondDeg + 'deg)');

}

setInterval(function () {
    setTime();
}, 1000);

setTime()