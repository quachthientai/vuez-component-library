
// export const Timer = (function() {
//    'use strict';

//    var Constructor = function (config) {
//       this.delay = config.delay
//       this.callback = config.callback
//       this.startedTime = new Date()
//       this.timeID = undefined
//    }
//    // let config = {
//    //    delay: undefined,
//    //    startedTime: new Date(),
//    //    timeID: undefined,
//    //    callback: undefined,
//    //    uuid: uuid.v4()
//    // },
   

//    //Param type check
//    function _validate(_callback, _delay) {
//       if(!_callback || typeof _callback !== 'function') throw (
//          new Error('Please provide a valid callback function to run')
//       )
      
//       if(!_delay || typeof _delay !== 'number') throw (
//          new Error('Please provide a valid delay number to run')
//       ) 
//    }

//    /**
//     * *Private function to start window setTimeout API
//     * @param {Number} _delay the timeout number 
//     * @param {Function} _callback the timeout handler
//     */
//    function _startFunc(_callback, _delay) {
//       try{
//          _validate(_callback, _delay); 
//       }catch(e) {
//          console.error(e)
//       }
      
//       return window.setTimeout(_callback, _delay)
//    }

//    function _pauseFunc(_delay) {
//        return _delay -= new Date() - config.startedTime;
//    }

//    function _stopFunc(_timeID) {
//       clearTimeout(_timeID);
//    }

//    // function _resumeFunc() {
//    //    _stopFunc();
//    //    console.log('started at: ',config.startedTime)
//    //    console.log(config.uuid)
//    //    console.log(config.delay)
//    //    _startFunc(config.callback, config.delay)
//    // }
//    Constructor.prototype.pause = function() {
//       _pauseFunc(this.delay);
//       this.stop(this.timeID)
//    }

//    Constructor.prototype.resume = function() {
//       this.stop(this.timeID)
//       this.start()
//    }

//    Constructor.prototype.stop = function() {
//       return _stopFunc(this.timeID)
//    }

//    Constructor.prototype.start = function() {
//       return this.timeID = _startFunc(this.callback, this.delay)
//    }

//    return Constructor;
   
//    // return _methods = {
//    //    /**
//    //     * *Method sets a timer which executes a function in the delay duration
//    //     * @param {Number} delay The timeout number 
//    //     * @param {Function} callback The timeout handler
//    //     */
//    //    start: () => {
//    //       // _validate(callback, delay)
//    //       return _startFunc(config.callback, config.delay)
//    //    },
      
//    //    init: (params) => {
//    //       return _initFunc(params)
//    //    },

//    //    pause: () => {
//    //       _pauseFunc();
//    //    },

//    //    stop: () => {
//    //       _stopFunc();
//    //    },

//    //    resume: () => {
//    //       _resumeFunc();
//    //    }
//    // }

// })();

export const Timer = function (fn, countdown) {
    var ident, complete = false;
    var total_time_run;

    function _time_diff(date1, date2) {
        return date2 ? date2 - date1 : new Date().getTime() - date1;
    }

    function cancel() {
        clearTimeout(ident);
    }

    function pause() {
        clearTimeout(ident);
        
        total_time_run = _time_diff(start_time);
        complete = total_time_run >= countdown;
        console.log(total_time_run)
    }

    function resume() {
        ident = complete ? -1 : setTimeout(fn, countdown - total_time_run);
    }

    var start_time = new Date().getTime();
    ident = setTimeout(fn, countdown);

    return { cancel: cancel, pause: pause, resume: resume };
}