var craftingComponent = new Array();

craftingComponent[0] = "selectedComponentQuantity-polluted_base_blueprints_crafting_item";
craftingComponent[1] = "selectedComponentQuantity-recycled_essence_crafting_item";
craftingComponent[2] = "selectedComponentQuantity-living_shard_crafting_item";
craftingComponent[3] = "selectedComponentQuantity-radioactive_sludge_craft_item";
craftingComponent[4] = "selectedComponentQuantity-scrap_metal_craft_item";

var incrementItem = new Array();
incrementItem[0] = "selectedComponentAdd-polluted_base_blueprints_crafting_item";
incrementItem[1] = "selectedComponentAdd-recycled_essence_crafting_item";
incrementItem[2] = "selectedComponentAdd-living_shard_crafting_item";
incrementItem[3] = "selectedComponentAdd-radioactive_sludge_craft_item";
incrementItem[4] = "selectedComponentAdd-scrap_metal_craft_item";

var decrementItem = new Array();
decrementItem[0] = "selectedComponentRemove-polluted_base_blueprints_crafting_item";
decrementItem[1] = "selectedComponentRemove-recycled_essence_crafting_item";
decrementItem[2] = "selectedComponentRemove-living_shard_crafting_item";
decrementItem[3] = "selectedComponentRemove-radioactive_sludge_craft_item";
decrementItem[4] = "selectedComponentRemove-scrap_metal_craft_item";



var counter = 1;
var running = new Boolean();
running = true;

window.setTimeout(function mainScript() {
	incrementCountUp();
	craft();
}, 1000);

// skip over item 1
var target = document.getElementById(craftingComponent[counter]).getValue() + 100;
function incrementCountUp() {
	console.log("Values: "+document.getElementById(craftingComponent[1]).getValue()+"/"
		+document.getElementById(craftingComponent[2]).getValue()+"/"
		+document.getElementById(craftingComponent[3]).getValue()+"/"
		+document.getElementById(craftingComponent[4]).getValue());
	
	if (counter > 4) {
		running = false; 
		return; 
	}
	var temp = document.getElementById(craftingComponent[counter]).getValue();
	document.getElementById(incrementItem[counter]).click();

	if (target == document.getElementById(craftingComponent[counter]).getValue() || temp == document.getElementById(craftingComponent[counter]).getValue()) {
		for (var i = 0; i < temp - (target - 100); i++) {
			document.getElementById(decrementItem[counter]).click();
		}
		target = document.getElementById(craftingComponent[++counter]).getValue() + 100;

	}
}


var stage = -1;
function testALl() {
	console.log("Values: "+document.getElementById(craftingComponent[1]).getValue()+"/"
		+document.getElementById(craftingComponent[2]).getValue()+"/"
		+document.getElementById(craftingComponent[3]).getValue()+"/"
		+document.getElementById(craftingComponent[4]).getValue());

	if(counter > 3) {
		return;
	}
	if (stage > 3) {
		stage = 0;
	}
	switch(stage++) {
		case 0:
			document.getElementById(incrementItem[1]).click();
			document.getElementById(incrementItem[2]).click();
			document.getElementById(incrementItem[3]).click();

			var temp = document.getElementById(craftingComponent[1]).getValue();
			document.getElementById(incrementItem[1]).click();
			break;
		case 1:
			document.getElementById(decrementItem[1]).click();
			var temp = document.getElementById(craftingComponent[2]).getValue();
			document.getElementById(incrementItem[2]).click();
			break;
		case 2:
			document.getElementById(decrementItem[2]).click();
			var temp = document.getElementById(craftingComponent[3]).getValue();
			document.getElementById(incrementItem[3]).click();
			break;
		case 3:
			document.getElementById(decrementItem[3]).click();
			var temp = document.getElementById(craftingComponent[4]).getValue();
			document.getElementById(incrementItem[4]).click();
			break;
	}
	if( temp === document.getElementById(craftingComponent[stage]).getValue()) {
		counter++;
	}
}

function craft() {
	document.getElementById("submitCraftingRequest").click();
	if (running == false) {
		return;
	}
	window.setTimeout(function mainScript() {
		if (document.getElementsByClassName("jsDialogClose button")[0].defaultValue != "Try again") {
			return;
		}
		incrementCountUp();
		craft();
		}, 2000);

}
