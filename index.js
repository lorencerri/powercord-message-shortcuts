/* Essential Packages */
const { Plugin } = require('powercord/entities');
const { inject, uninject } = require('powercord/injector');
const { getModule } = require('powercord/webpack');

/* Plugin Specific Packages */
const { ContextMenu } = require('powercord/components');

/* Settings */
const Settings = require('./Components/Settings.jsx');

module.exports = class MyPlugin extends Plugin {
    /* Entry Point */
    async startPlugin() {
        /* CSS/SCSS - Used for styling */
        this.loadStylesheet('style.scss');

        /* Register Settings */
        powercord.api.settings.registerSettings(this.entityID, {
            category: this.entityID,
            label: this.manifest.name,
            render: Settings
        });

        // TODO: Inject custom autocomplete modal into textarea
    }

    pluginWillUnload() {
        powercord.api.settings.unregisterSettings(this.entityID);
    }
};
