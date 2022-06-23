sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ns.mta04.mta04.controller.View1", {
            onInit: function () {
                let path = this.getOwnerComponent().getManifestObject()._oBaseUri._parts.path;
                var sUrl = path + "PRD/Products";
                //var oView = this.getView();
                var oTextModel = this.getOwnerComponent().getModel("textModel");
                //this.getView().setModel(oTextModel,"textModel");

                var oTable = this.getView().byId("idTabel01");

                jQuery.ajax({
                    url: sUrl,
                    method: "GET",
                    success: function (oResponse) {
                        debugger;
                        oTextModel.setData(oResponse.d.results);
                        oTable.setModel(oTextModel);
                        oTable.bindRows("textModel>/");
                        
                    },
                    error: function () { 
                        debugger;
                    }
                });
            }
        });
    });
