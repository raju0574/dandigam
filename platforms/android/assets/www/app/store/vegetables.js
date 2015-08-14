Ext.define("RegionalStore.store.vegetables", {
	extend: "Ext.data.Store",
	
	config: {
		model: "RegionalStore.model.vegetables",
		proxy: {
			type: "ajax",
			url: "resources/json/Vegetables.json",
            useDefaultXhrHeader : false,
			reader: {
				type: "json"
			}
		},
        sorters: ['name'],
		autoLoad: true
	}
});