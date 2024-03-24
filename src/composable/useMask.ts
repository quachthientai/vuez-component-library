import { ref, Ref, watch } from 'vue';
import { extractRefHTMLElement } from '@/utils/extractRefHTMLElement';

/**
 * TODO: Should let user define length of the mask
 * TODO: Should let user define the mask pattern
 * TODO: Should work with copy-paste
 * TODO: If the paste value has unallow characters, should ignore them, and mask the rest
*/

/**
 * * The tokens that can be used to create a mask.
 * * # - Represents a digit.
 * * A - Represents an uppercase letter.
 * * a - Represents a lowercase letter.
 * * X - Represents any symbol.
 * * S - Represents a special character. 
 */
interface Token {
   pattern: RegExp;
   transform?: (v: string) => string;
}

const TOKENS: Record<string, Token> = {
   '#': { pattern: /\d/ },
   'S': { pattern: /[a-zA-Z]/ },
   'X': { pattern: /[a-zA-Z0-9]/ },
   'A': { pattern: /[a-zA-Z]/, transform: (v: string) => v.toLocaleUpperCase() },
   'a': { pattern: /[a-zA-Z]/, transform: (v: string) => v.toLocaleLowerCase() }
}

export function makeMaskProp() {
   return {
      mask: {
         type: String,
         default: undefined,
         validator: (mask: string) => {
            const separatorPattern = /[ -\/:-@\[-`{-~]/;
            return mask.split('').every((char) => {
               return TOKENS[char] !== undefined || separatorPattern.test(char);
            })
         }
      }
   }
}

export default function (props, inputRef: Ref<HTMLElement | null>) {
   const maskPattern = props.mask.split('');

   function maskValue(value, pos) {
      let maskedValue = '';
      let valueIndex = 0;
      
      maskPattern.forEach((char) => {
         const token = TOKENS[char];
         if (token) {
            const valueChar = value[valueIndex];
            if (valueChar !== undefined && token.pattern.test(valueChar)) {
               maskedValue += token.transform ? token.transform(valueChar) : valueChar;
               valueIndex++;
            }
         } else {
            maskedValue += char;
         }
      });

      
      return maskedValue;
      // el.value = maskedValue;
   }

   function unmaskValue() {

   }

   return {
      maskValue,
      unmaskValue,
   }
}




