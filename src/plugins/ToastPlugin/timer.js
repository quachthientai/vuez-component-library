
export const Timer = (function() {
   'use strict';

    var Constructor = function (config) {
        this.delay = config.delay
        this.callback = config.callback
        this.startedTime = new Date()
        this.timeID = undefined
    }
   
   //Param type check
    function _validate(_callback, _delay) {
        if(!_callback || typeof _callback !== 'function') throw (
            new Error('Please provide a valid callback function to run')
        )
        
        if(!_delay || typeof _delay !== 'number') throw (
            new Error('Please provide a valid delay number to run')
        ) 
    }

    /**
    * *Private function to start window setTimeout API
    * @param {Number} _delay the timeout number 
    * @param {Function} _callback the timeout handler
    */
    function _startFunc(_callback, _delay) {
        try{
            _validate(_callback, _delay); 
        }catch(e) {
            console.error(e)
        }
        
        return window.setTimeout(_callback, _delay)
    }

    function _pauseFunc(_delay) {
        return _delay -= new Date() - config.startedTime;
    }

    function _stopFunc(_timeID) {
        clearTimeout(_timeID);
    }

    Constructor.prototype.pause = function() {
        _pauseFunc(this.delay);
        this.stop(this.timeID)
    }

    Constructor.prototype.resume = function() {
        this.stop(this.timeID)
        this.start()
    }

    Constructor.prototype.stop = function() {
        return _stopFunc(this.timeID)
    }

    Constructor.prototype.start = function() {
        return this.timeID = _startFunc(this.callback, this.delay)
    }

   return Constructor;

})();

