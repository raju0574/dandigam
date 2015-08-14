Ext.define("RegionalStore.store.animals", {
    extend: "Ext.data.Store",

    config: {
        model: "RegionalStore.model.animals",
        proxy: {
            type: "ajax",
            url: "resources/json/Animals.json",
            reader: {
                type: "json"
            }
        },
        sorters: ['name'],
        autoLoad: true
    }
});