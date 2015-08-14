Ext.define("RegionalStore.store.languages", {
	extend: "Ext.data.Store",
	
	config: {
		model: "RegionalStore.model.languages",
		proxy: {
			type: "ajax",
			url: "resources/json/languages.json",
			reader: {
				type: "json"
			}
		},
        //sorters: ['name'],
		autoLoad: true
	}
});