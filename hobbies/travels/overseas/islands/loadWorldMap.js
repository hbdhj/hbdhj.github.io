var map = null;

function GetMap()
{
	var initialViewBounds = Microsoft.Maps.LocationRect.fromCorners(new Microsoft.Maps.Location(60,-20), new Microsoft.Maps.Location(-20,-150));

	var mapOptions = {credentials:"Ai1S6-6Zn3-Pgb76eceZCLGSZJMAZjxjG5ctPrILSnh2Z8Q4isTYvzhwA9BEqJSp",
                           height: 600,
                           width: 1000,
                           bounds: initialViewBounds,
                           mapTypeId: Microsoft.Maps.MapTypeId.road,
                           showMapTypeSelector: false};

	map = new Microsoft.Maps.Map(document.getElementById("mapDiv"), mapOptions);

	var islands = new Microsoft.Maps.EntityCollection();

	var jeju_loc = new Microsoft.Maps.Location(33.5,126.5);
	var jeju_pin = new Microsoft.Maps.Pushpin(jeju_loc, { text: "Jeju"});
	islands.push(jeju_pin, { text: "Jeju"});
	var phuket_loc = new Microsoft.Maps.Location(8.1,98.3);
	var phuket_pin = new Microsoft.Maps.Pushpin(phuket_loc, { text: "Phuket"});
	islands.push(phuket_pin, { text: "Phuket"});
	var phiphi_loc = new Microsoft.Maps.Location(7.7,98.77);
	var phiphi_pin = new Microsoft.Maps.Pushpin(phiphi_loc, { text: "Phiphi"});
	islands.push(phiphi_pin, { text: "Phiphi"});
	var singapore_loc = new Microsoft.Maps.Location(1.36,103.8);
	var singapore_pin = new Microsoft.Maps.Pushpin(singapore_loc, { text: "Singapore"});
	islands.push(singapore_pin, { text: "Singapore"});
	var saipan_loc = new Microsoft.Maps.Location(15.19,145.764);
	var saipan_pin = new Microsoft.Maps.Pushpin(saipan_loc, { text: "Saipan"});
	islands.push(saipan_pin, { text: "Saipan"});
	var bali_loc = new Microsoft.Maps.Location(-8.35,115.116);
	var bali_pin = new Microsoft.Maps.Pushpin(bali_loc, { text: "Bali"});
	islands.push(bali_pin, { text: "Bali"});
	var bintan_loc = new Microsoft.Maps.Location(1.036,104.453);
	var bintan_pin = new Microsoft.Maps.Pushpin(bintan_loc, { text: "Bintan"});
	islands.push(bintan_pin, { text: "Bintan"});
	var male_loc = new Microsoft.Maps.Location(4.175,73.509);
	var male_pin = new Microsoft.Maps.Pushpin(male_loc, { text: "Male"});
	islands.push(male_pin, { text: "Male"});
	var palau_loc = new Microsoft.Maps.Location(7.44, 134.54);
	var palau_pin = new Microsoft.Maps.Pushpin(palau_loc, { text: "Palau"});
	islands.push(palau_pin, { text: "Palau"});
	var boracay_loc = new Microsoft.Maps.Location(11.969, 121.927);
	var boracay_pin = new Microsoft.Maps.Pushpin(boracay_loc, { text: "Boracay"});
	islands.push(boracay_pin, { text: "Boracay"});
	var santorini_loc = new Microsoft.Maps.Location(36.422,25.43);
	var santorini_pin = new Microsoft.Maps.Pushpin(santorini_loc, { text: "Santorini"});
	islands.push(santorini_pin, { text: "Santorini"});
	var gbr_loc = new Microsoft.Maps.Location(-18.286, 147.7);
	var gbr_pin = new Microsoft.Maps.Pushpin(gbr_loc, { text: "Great Barrier Reef"});
	islands.push(gbr_pin, { text: "Great Barrier Reef"});
	var seychelles_loc = new Microsoft.Maps.Location(-4.66, 55.47);
	var seychelles_pin = new Microsoft.Maps.Pushpin(seychelles_loc, { text: "Seychelles"});
	islands.push(seychelles_pin, { text: "Seychelles"});
	var mauritius_loc = new Microsoft.Maps.Location(-20.22, 57.59);
	var mauritius_pin = new Microsoft.Maps.Pushpin(mauritius_loc, { text: "Mauritius"});
	islands.push(mauritius_pin, { text: "Mauritius"});
	var iceland_loc = new Microsoft.Maps.Location(64.928, -18.96);
	var iceland_pin = new Microsoft.Maps.Pushpin(iceland_loc, { text: "Iceland"});
	islands.push(iceland_pin, { text: "Iceland"});
	var tahiti_loc = new Microsoft.Maps.Location(-17.69,-149.376);
	var tahiti_pin = new Microsoft.Maps.Pushpin(tahiti_loc, { text: "Tahiti"});
	islands.push(tahiti_pin, { text: "Tahiti"});
	var hawaii_loc = new Microsoft.Maps.Location(19.6, -155.52);
	var hawaii_pin = new Microsoft.Maps.Pushpin(hawaii_loc, { text: "Hawaii"});
	islands.push(hawaii_pin, { text: "Hawaii"});
	var samui_loc = new Microsoft.Maps.Location(9.5, 100);
	var samui_pin = new Microsoft.Maps.Pushpin(samui_loc, { text: "Samui"});
	islands.push(samui_pin, { text: "Samui"});
	var okinawa_loc = new Microsoft.Maps.Location(26.33, 127.8);
	var okinawa_pin = new Microsoft.Maps.Pushpin(okinawa_loc, { text: "Okinawa"});
	islands.push(okinawa_pin, { text: "Okinawa"});
	var vanuatu_loc = new Microsoft.Maps.Location(-16.376, 167.56);
	var vanuatu_loc = new Microsoft.Maps.Pushpin(vanuatu_loc, { text: "Vanuatu"});
	islands.push(vanuatu_loc, { text: "Vanuatu"});
	var langkawi_loc = new Microsoft.Maps.Location(6.368, 99.794);
	var langkawi_pin = new Microsoft.Maps.Pushpin(langkawi_loc, { text: "Langkawi"});
	islands.push(langkawi_pin, { text: "Langkawi"});
	var fiji_loc = new Microsoft.Maps.Location(-17.65, 178.147);
	var fiji_pin = new Microsoft.Maps.Pushpin(fiji_loc, { text: "Fiji"});
	islands.push(fiji_pin, { text: "Fiji"});
	var nz_loc = new Microsoft.Maps.Location(-43.5, 172.5);
	var nz_pin = new Microsoft.Maps.Pushpin(nz_loc, { text: "NZ"});
	islands.push(nz_pin, { text: "NZ"});
	var tw_loc = new Microsoft.Maps.Location(25, 121);
	var tw_pin = new Microsoft.Maps.Pushpin(tw_loc, { text: "TW"});
	islands.push(tw_pin, { text: "TW"});
	var sr_loc = new Microsoft.Maps.Location(6.94, 79.84);
	var sr_pin = new Microsoft.Maps.Pushpin(sr_loc, { text: "SR"});
	islands.push(sr_pin, { text: "SR"});
    var jp_loc = new Microsoft.Maps.Location(35, 139);
	var jp_pin = new Microsoft.Maps.Pushpin(jp_loc, { text: "JP"});
	islands.push(jp_pin, { text: "JP"});
	// Attach a handler to the pin so that it is removed when it is clicked
	//Microsoft.Maps.Events.addHandler(pin, 'click', removePin);

	// Add the pushpin
	//map.setMapType("arial");
	map.entities.push(islands);
}
