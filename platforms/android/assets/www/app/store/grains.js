Ext.define("RegionalStore.store.grains", {
    extend: "Ext.data.Store",

    config: {
        model: "RegionalStore.model.grains",
        proxy: {
            type: "ajax",
            url: "resources/json/Grains.json",
            reader: {
                type: "json"
            }
        },
        sorters: ['name'],
        autoLoad: true
    }
});