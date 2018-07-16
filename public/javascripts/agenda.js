var update = function() {
  currentTime = moment(new Date());
  easternTime = moment.tz("US/Eastern");
  pacificTime = easternTime.clone().tz("US/Pacific");

  $(".current").html(currentTime.format("hh:mm:ss a"));
  $(".eastern").html(easternTime.format("hh:mm:ss a"));
  $(".pacific").html(pacificTime.format("hh:mm:ss a"));
};

$(function() {
  update();
  setInterval(update, 1000);
});
