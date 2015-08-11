function calculate() {
  var frequency = parseInt($("#frequency").val());
  var wavelength = parseInt($("#wavelength").val());
  var full = 984;
  var length_feet = (full*(wavelength/8))/frequency;
  var length_meters = length_feet * 0.3048;
  $("#feet").text(length_feet + " feet");
  $("#meters").text(length_meters + " meters")
}