// The modules this hook requires
var Hook = require('hook.io').Hook,
    util = require('util'),
    calendarModule = require('calendar');

// Things we need to access in different functions   

// Set up the hook, and export it at the same time
var CalendarHook = exports.CalendarHook = function(options) {
  var self = this;
  Hook.call(self, options); // Basic initializations
  self.config.use('file', { file: './config.json'});

  // Register callback for hook::ready event
  self.on('hook::ready', function() {
    // When hook is ready, register callbacks for boxcar events
    self.on('*::addEvent', function(data) {
      self.addEvent(data);
    });
    self.on('*::delEvent', function(data) {
      self.delEvent(data);
    });
    self.on('*::checkEvent', function(data) {
      self.checkEvent(data);
    });
    self.on('*::editEvent', function(data) {
      self.editEvent(data);
    });
  });
  
};

// Set up inheritance from Hook
util.inherits(CalendarHook, Hook);

// Callbacks defined below

CalendarHook.prototype.addEvent = function(options){
};
CalendarHook.prototype.delEvent = function(options){
  
};
CalendarHook.prototype.checkEvent = function(options){
};
CalendarHook.prototype.editEvent = function(options){
};
