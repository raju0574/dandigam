Ext.define("RegionalStore.store.others", {
    extend: "Ext.data.Store",

    config: {
        model: "RegionalStore.model.others",
        proxy: {
            type: "ajax",
            url: "resources/json/Others.json",
            reader: {
                type: "json"
            }
        },
        sorters: ['name'],
        autoLoad: true
    }
});