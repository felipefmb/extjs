Ext.define('HelloWorld.app.controller.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    requires: [
        'Ext.MessageBox'
    ],

    onGo: function() {
        Ext.Msg.alert('Go', 'From main Controller');
    }
})