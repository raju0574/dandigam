Ext.define("RegionalStore.store.types", {
	extend: "Ext.data.Store",
	
	config: {
		model: "RegionalStore.model.types",
		proxy: {
			type: "ajax",
			url: "resources/json/types.json",
			reader: {
				type: "json"
			}
		},
        //sorters: ['name'],
		autoLoad: true
	}
});