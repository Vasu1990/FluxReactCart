var Dispatcher = require('./dispatcher');
var assign = require('object-assign');

var AppDispatcher =  assign(Dispatcher.prototype,{
    handleViewAction : function(action){
        console.log('action',action);
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action

        })
    }
})
module.exports = AppDispatcher;