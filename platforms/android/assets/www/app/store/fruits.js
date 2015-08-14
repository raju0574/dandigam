Ext.define("RegionalStore.store.fruits", {
    extend: "Ext.data.Store",

    config: {
        model: "RegionalStore.model.fruits",
        proxy: {
            type: "ajax",
            url: "resources/json/Fruits.json",
            reader: {
                type: "json"
            }
        },
        sorters: ['name'],
        autoLoad: true
    }
});