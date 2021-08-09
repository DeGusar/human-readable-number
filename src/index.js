module.exports = function toReadable (number) {
    let arr = Array.from(String(number));
    let unitOne = 'one';
    let unitTwo = 'two';
    let unitThree = 'three';
    let unitFour = 'four';
    let unitFive = 'five';
    let unitSix = 'six';
    let unitSeven = 'seven';
    let unitEight = 'eight';
    let unitNine = 'nine';
    let hundred = ' hundred';
    let hundreds = '';
    let dozens = '';
    let units = '';
    let zero = 'zero';
    if (number > 0) {
        switch (arr[0]) {
            case '0':
                hundreds = '';
                break;
            case '1':
                hundreds = 'one hundred ';
                break;
            case '2':
                hundreds = 'two hundred ';
                break;
            case '3':
                hundreds = 'three hundred ';
                break;
            case '4':
                hundreds = 'four hundred ';
                break;
            case '5':
                hundreds = 'five hundred ';
                break;
            case '6':
                hundreds = 'six hundred ';
                break;
            case '7':
                hundreds = 'seven hundred ';
                break;
            case '8':
                hundreds = 'eight hundred ';
                break;
            case '9':
                hundreds = 'nine hundred ';
                break;

            
        
        }
        switch (arr[arr.length - 2]) {
            case '0':
                dozens = '';
                break;
            case '1':
                dozens = '';
                break;
            case '2':
                dozens = 'twenty ';
                break;
            case '3':
                dozens = 'thirty ';
                break;
            case '4':
                dozens = 'forty ';
                break;
            case '5':
                dozens = 'fifty ';
                break;
            case '6':
                dozens = 'sixty ';
                break;
            case '7':
                dozens = 'seventy ';
                break;
            case '8':
                dozens = 'eighty ';
                break;
            case '9':
                dozens = 'ninety ';
                break;

        }
        switch (arr[arr.length - 1]) {
            case '0':
                units = '';
                break;
            case '1':
                units = 'one';
                break;
            case '2':
                units = 'two';
                break;
            case '3':
                units = 'three';
                break;
            case '4':
                units = 'four';
                break;
            case '5':
                units = 'five';
                break;
            case '6':
                units = 'six';
                break;
            case '7':
                units = 'seven';
                break;
            case '8':
                units = 'eight';
                break;
            case '9':
                units = 'nine';
                break;
        
        }
        if (arr[arr.length - 2] === '1') {
            switch (arr[arr.length - 1]) {
                case '0':
                    dozens = 'ten';
                    units = '';
                    break;
                case '1':
                    dozens = 'eleven';
                    units = '';
                    break;
                case '2':
                    dozens = 'twelve';
                    units = '';
                    break;
                case '3':
                    dozens = 'thirteen';
                    units = '';
                    break;
                case '4':
                    dozens = 'fourteen';
                    units = '';
                    break;
                case '5':
                    dozens = 'fifteen';
                    units = '';
                    break;
                case '6':
                    dozens = 'sixteen';
                    units = '';
                    break;
                case '7':
                    dozens = 'seventeen';
                    units = '';
                    break;
                case '8':
                    dozens = 'eighteen';
                    units = '';
                    break;
                case '9':
                    dozens = 'nineteen';
                    units = '';
                    break;
            
            }
        }
        if (number < 100) {
            hundreds = '';
            return `${dozens}${units}`.trim();
        }
    
        return `${hundreds}${dozens}${units}`.trim();
    } else return zero;

    }
