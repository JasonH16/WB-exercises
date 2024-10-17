function getReceipt(days, wantsToll, wantsGPS, wantsRoadSide, isUnderAge) {
    const rentalDay = 29.99;
    const surchargePercent = .30;
    let surchargeAmount = 0;
    let carRental = rentalDay * days;
    if(isUnderAge){
        surchargeAmount = surchargePercent * carRental;
        // carRental = carRental + surchargeAmount; //IS DEMURE BETTER
        carRental += surchargeAmount; //TOO FANCY
    }
    let optionsSubtotal = 0;
    if(wantsToll){
        optionsSubtotal += 3.95 * days;
    }
    if(wantsGPS){
        optionsSubtotal += 2.95 * days;
    }
    if(wantsRoadSide){
        optionsSubtotal += 2.95 * days;
    }

    const grandTotal = (carRental + optionsSubtotal + surchargeAmount).toFixed(2);
    return `
        Car rental: ${carRental}
           Options: ${optionsSubtotal}
Under 25 surcharge: ${surchargeAmount}

         Total Due: ${grandTotal}
    `;
}
document.addEventListener("DOMContentLoaded", () => {
    const pickupDate = document.getElementById("pickupDate");
    const numberOfDays = document.getElementById("numberOfDays");

    const toll = document.getElementById("toll");
    const gps = document.getElementById("gps");
    const roadside = document.getElementById("roadside");

    const notUnder = document.getElementById("notUnder");
    const isUnder = document.getElementById("isUnder");

    const estimateButton = document.getElementById("estimateButton");

    const receiptOutput = document.getElementById("receiptOutput");

    estimateButton.addEventListener("click", () => {
        receiptOutput.innerText = getReceipt(
            numberOfDays.value,
            toll.checked,
            gps.checked,
            roadside.checked,
            isUnder.checked
        );
    });

}); //end dom content loaded