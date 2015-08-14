Ext.application({
	name:"RegionalStore",
	
	models: ["languages","types","vegetables","product", "animals", "fishes", "fruits", "grains", "nuts", "pulses", "spices", "trees", "search", "others", "birds", "colors"],
    stores: ["languages","types","vegetables","product", "animals", "fishes", "fruits", "grains", "nuts", "pulses", "spices", "trees", "search", "others", "birds", "colors"],
	views: ["dashboard", "product", "contact"],
	controllers: ["regionalstore"],
	
	launch:function()
	{
		var dashboardView = {
			xtype: "dashboardview"
		};
		var productView = {
			xtype: "productview"
		};
		var contactView = {
			xtype: "contactview"
		};
		
		Ext.Viewport.add([dashboardView, productView, contactView]);
	}
});