Ext.define("RegionalStore.store.nuts", {
    extend: "Ext.data.Store",

    config: {
        model: "RegionalStore.model.nuts",
        proxy: {
            type: "ajax",
            url: "resources/json/Nuts.json",
            reader: {
                type: "json"
            }
        },
        sorters: ['name'],
        autoLoad: true
    }
});