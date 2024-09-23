var kiloMeters = document.getelementbyid(kms).value;
var nmDiv = document.getelementbyid(nm);
var nauticalMiles = kiloMeters * 0.53;
nmDiv.innerhtml(nauticalMiles);
