sap.ui.define([
  "./BaseController",
  "sap/ui/model/json/JSONModel",

], function (BaseController, JSONModel) {
  "use strict";

  return BaseController.extend("<%= appId %>.controller.Main", {
    onInit: function() {
      var oModel = new JSONModel({ count: 0 });
      this.getView().setModel(oModel);
    },

    onIncrement: function() {
      var oModel = this.getView().getModel();
      var iCount = oModel.getProperty("/count");
      oModel.setProperty("/count", iCount + 1);
    }

  });

});
