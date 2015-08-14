Ext.define("RegionalStore.store.birds", {
    extend: "Ext.data.Store",

    config: {
        model: "RegionalStore.model.birds",
        proxy: {
            type: "ajax",
            url: "resources/json/Birds.json",
            reader: {
                type: "json"
            }
        },
        sorters: ['name'],
        autoLoad: true
    }
});