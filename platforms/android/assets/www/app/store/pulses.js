Ext.define("RegionalStore.store.pulses", {
    extend: "Ext.data.Store",

    config: {
        model: "RegionalStore.model.pulses",
        proxy: {
            type: "ajax",
            url: "resources/json/Pulses.json",
            reader: {
                type: "json"
            }
        },
        sorters: ['name'],
        autoLoad: true
    }
});