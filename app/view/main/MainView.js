Ext.define('HelloWorld.app.view.main.MainView', {
    extend: 'Ext.tab.Panel',
    controller: 'main',

    requires: [
        'Ext.Button',
        'Ext.field.Text'  // <<== added
    ],

    viewModel: {   // <<== added
        data: {
            userName: ''
        }
    },

    items: [{
        title: 'Home',
        html: '<h1 class="main-banner">Hello World!<h1>',
        items: [{
            xtype: 'textfield',  // <<== added
            label: 'User name',
            bind: '{userName}'
        }, {
            xtype: 'button',
            handler: 'onGo',
            bind: {             // <<== added
                disabled: '{!userName}',
                text: '{userName ? "Save: " + userName : "Save"}'
            }
        }]
    }, {
        title: 'Notifications'
    }, {
        title: 'Settings'
    }]
});
