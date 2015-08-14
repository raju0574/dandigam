Ext.define("RegionalStore.store.colors", {
    extend: "Ext.data.Store",

    config: {
        model: "RegionalStore.model.colors",
        proxy: {
            type: "ajax",
            url: "resources/json/Colors.json",
            reader: {
                type: "json"
            }
        },
        sorters: ['name'],
        autoLoad: true
    }
});