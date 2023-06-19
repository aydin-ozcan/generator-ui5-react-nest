sap.ui.define(["sap/ui/core/Control"], function (Control) {
  "use strict";

  return Control.extend("<%= appId %>.ExtApp", {
    metadata: {
      properties: {
        id: { type: "string", defaultValue: "" },
      },
    },

    init: function() {
      Control.prototype.init.apply(this, arguments);

      sap.ui.getCore().attachThemeChanged(this.onThemeChanged, this);
      sap.ui.getCore().attachLocalizationChanged(this.onLocalizationChanged, this);
    },

    onThemeChanged: function (oEvent) {
      window['<%= reactappId %>_onThemeChanged'] (sap.ui.getCore().getConfiguration().getTheme()) ;
    },

    onLocalizationChanged: function (oEvent) {  
      window['<%= reactappId %>_onLocalizationChanged'] (sap.ui.getCore().getConfiguration().getLanguage()) ; 
    },

    renderer: {
      render: function (oRm, oControl) {
        oRm.write("<div");
        oRm.writeControlData(oControl);
        oRm.writeAttribute("id", oControl.getId());
        oRm.write("></div>");
        oControl.reactId = oControl.getId();
      },
    },

    onAfterRendering: function () {
      var param = {
        CurrentLocale: sap.ui.getCore().getConfiguration().getLanguage(),
        Theme: sap.ui.getCore().getConfiguration().getTheme(),
        AnimationMode: sap.ui.getCore().getConfiguration().getAnimationMode(),
        ReactDivName: this.reactId,
      };
      this.unloadApp = window["<%= reactappId %>"] (param) ; 
    },

    destroy: function () {  
      Control.prototype.destroy.apply(this, arguments);
      this.unloadApp();
      sap.ui.getCore().detachThemeChanged(this.onThemeChanged, this);
      sap.ui.getCore().detachLocalizationChanged(this.onLocalizationChanged, this);
    },
  });
});
