/**
 * Represent a radio model.
 * @type {Object} RadioModel
 */
type RadioModel = {
   /**
    * The radio label.
    * @type {string}
    * @memberof RadioModel
    */
   label: string;
   /**
    * The radio value.
    * @type {any}
    * @memberof RadioModel
    */
   value: any;
   /**
    * The radio modelValue.
    * @type {any}
    * @memberof RadioModel
    */
   modelValue?: any
   /**
    * The radio name.
    * @type {string}
    * @memberof RadioModel
    */
   name?: string;
   /**
    * The radio attribute to specify if it is disabled.
    * @type {boolean}
    * @memberof RadioModel
    */
   disabled?: boolean;
   /**
    * The radio attribute to specify if it is checked.
    * @type {boolean}
    * @memberof RadioModel
    */
   checked?: boolean;
   /**
    * The radio color
    * @type {string}
    * @memberof RadioModel
    */
   color?: string;
}

export {
   RadioModel
}
