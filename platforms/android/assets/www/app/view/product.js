Ext.define("RegionalStore.view.product", {
	extend: "Ext.Container",
	requires: "Ext.dataview.List",
	alias: "widget.productview",
	config: {
		layout: {
			type: "vbox"
		},
		items: [{
			xtype: "toolbar",
			title: "Regional Store",
			docked: "top",
			items: [{
				cls: ["buttonCls", "backCls"],
				itemId: "productBack"
			}]
		}, {
			xtype: "container",
			scrollable: !0,
			html: '<div class="productimagediv"><img id="productimage"></div>',
			flex: 1
		}, {
			xtype: "dataview",
			flex: 2,
			layout: {
				pack: "center"
			},
			cls: "productsLanguagesView",
			scrollable: !0,
			store: "languages",
			itemId: "productDetailsListView",
			name: "productDetailsListView",
			width: "100%",
			itemTpl: '<div class="languageHeadnWord"><div class="languageHeading">{name}</div><div class="languageWord">{word}</div></div>'
		}],
		listeners: [{
			delegate: "#productBack",
			event: "tap",
			fn: "onproductBack"
		}]
	},
	onproductBack: function() {
		this.fireEvent("productBackCommand", this);
	}
});