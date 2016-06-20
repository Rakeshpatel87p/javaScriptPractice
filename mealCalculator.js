var diner = {
	dish1: 16,
	dish2: 22,
	dish3: 24,
}

var tipPercent = 0.1;

 var totalOwed = function(){
 	var totalAmount = diner.dish1 + diner.dish2 + diner.dish3;
 	var totalAmountWithTip = totalAmount + totalAmount * (tipPercent);
 	var totalAmountPerPerson = (totalAmountWithTip / 3).toFixed(2);
 	console.log("Total Amount: " + totalAmount);
 	console.log("Total Amount with Tip: " + totalAmountWithTip);
 	console.log("Total Amount Per Person: " + totalAmountPerPerson);
 }

 totalOwed();