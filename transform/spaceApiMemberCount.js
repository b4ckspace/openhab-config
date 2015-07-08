
var parsedSensors = JSON.parse(input).sensors;
if(parsedSensors.people_now_present.length > 0) {
    parsedSensors.people_now_present[0].value;
} else {
    "0";
}
