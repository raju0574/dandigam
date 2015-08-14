Ext.define("RegionalStore.store.trees", {
    extend: "Ext.data.Store",

    config: {
        model: "RegionalStore.model.trees",
        proxy: {
            type: "ajax",
            url: "resources/json/Trees.json",
            reader: {
                type: "json"
            }
        },
        sorters: ['name'],
        autoLoad: true
    }
});