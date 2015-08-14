Ext.define("RegionalStore.store.spices", {
    extend: "Ext.data.Store",

    config: {
        model: "RegionalStore.model.spices",
        proxy: {
            type: "ajax",
            url: "resources/json/Spices.json",
            reader: {
                type: "json"
            }
        },
        sorters: ['name'],
        autoLoad: true
    }
});