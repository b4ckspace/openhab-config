
var result = "";
var parsedSensors = JSON.parse(input).sensors;
if(parsedSensors.people_now_present.length > 0 && parsedSensors.people_now_present[0].names) {
    result = parsedSensors.people_now_present[0].names.sort().join(",");
}

result;
