Ext.define("RegionalStore.store.fishes", {
    extend: "Ext.data.Store",

    config: {
        model: "RegionalStore.model.fishes",
        proxy: {
            type: "ajax",
            url: "resources/json/Fishes.json",
            reader: {
                type: "json"
            }
        },
        sorters: ['name'],
        autoLoad: true
    }
});