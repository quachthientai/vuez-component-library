export const Timer = (function() {
   'use strict';

   let _methods = {},
      _startedTime = 1000,
      _currentTime = null

   
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

   function _pauseFunc() {

   }

   function _resumeFunc() {

   }

   return _methods = {
      /**
       * *Method sets a timer which executes a function in the delay duration
       * @param {Number} delay The timeout number 
       * @param {Function} callback The timeout handler
       */
      start: (callback, delay) => {
         _validate(callback, delay)
         return _startFunc(callback,delay)
      }
   }

})();

