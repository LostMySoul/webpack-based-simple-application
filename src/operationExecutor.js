'use strict';

class OperationExecutor {
    constructor() {
        this.state = {
            0: this.firstTaskExecute.bind(this),
            1: this.secondTaskExecute.bind(this),
            2: this.thirdTaskExecute.bind(this),
            3: this.fourthTaskExecute.bind(this),
            4: this.fifthTaskExecute.bind(this),
            5: this.sixthTaskExecute.bind(this),
            6: this.seventhTaskExecute.bind(this),
            7: this.eighthTaskExecute.bind(this),
            8: this.ninthTaskExecute.bind(this),
            9: this.tenthTaskExecute.bind(this),
        };
    }

    /**
     * Execute some transformation of incoming arg
     * @param actionType – type of transformation
     * @param arg – incoming arg
     * @returns object with result
     */
    execute(actionType, arg) {
        return this.state[actionType](arg);
    }

    /**
     * First task of homework
     * @param arg – object with value that you should clone
     * arg = { obj1: { ... } }
     * @returns object that contains source object and his modified clone
     */
    firstTaskExecute(arg) {
        let obj = arg.obj1;
        let clone = Object.assign({}, obj);
        clone.name = "Clone";
        return {obj, clone};
    }

    /**
     * Second task of homework
     * @param arg – object with values that you should combine
     * arg = { obj1: { ... }, obj2: { ... } }
     * @returns object that contains source objects and their combined and modified clone
     */
    secondTaskExecute(arg) {
        let combined = {...arg.obj1, ...arg.obj2};
        combined.modified = "yes";
        return {arg, combined};
    }

    /**
     * Third task of homework
     * @param arg – object with value that you should modify
     * arg = { obj1: { ... } }
     * @returns object that contains modified source object
     */
    thirdTaskExecute(arg) {
        let gendered = Object.assign({}, arg);
        gendered.obj1.relatives.forEach(relatives => {
            relatives.gender = ''
        });
        return gendered;
    }

    /**
     * Fourth task of homework
     * @param arg – object with value that contains relatives
     * arg = { obj1: { ... relatives: [ ... ] ... } }
     * @returns object that contains array of string with female relatives
     */
    fourthTaskExecute(arg) {
        let females = arg.obj1.relatives.reduce((greetings, relative) =>
            greetings.concat(relative.gender === "female" ? [`Greetings, ${relative.firstName} ${relative.lastName}!`] : []), []);
        return females;
    }

    /**
     * Fifth task of homework
     * @param arg – object which contains new color of the button and the class of it
     * arg = { color: '...', className: '...' }
     * @returns string which contains the class of the button and current color
     */
    fifthTaskExecute(arg) {
        let elem = document.getElementsByClassName(arg.className);
        let elemArr = [];
        for (let i = 0; i < elem.length; i++) {
            elem[i].style.backgroundColor = "red";
            elemArr.push("elem class:" + elem[0].className.toString() + " && BG_color:" + elem[0].style.backgroundColor.toString())
        }
        return elemArr.toString();
    }

    /**
     * Sixth task of homework
     * @param arg – object with values that you should handle
     * arg = { obj1: { ... } }
     * @returns object that contains array of items that match the hostname on which the application is running
     */
    sixthTaskExecute(arg) {
        /**
         * Place your code here
         */
        return null;
    }

    /**
     * Seventh task of homework
     * @param arg – object which contains simple key-value pairs
     * arg = { obj1: { key: value } }
     * @returns obj that contains swap pairs ('value: key')
     */
    seventhTaskExecute(arg) {
        let key, swapped = {};
        for (key in arg) {
            if (arg.hasOwnProperty(key)) {
                swapped[arg[key]] = key;
            }
        }
        return swapped;
    }

    /**
     * Eighth task of homework
     * @param arg – object which contains two array
     * arg = { obj1: { ... } }
     * @returns obj that built using array's values
     */
    eighthTaskExecute(arg) {
        let merged = arg.arr1.concat(arg.arr2);
        //todo: key-value array, if no value, set null
        return null;
    }

    /**
     * Ninth task of homework
     * @param arg – object which contains array of users
     * arg = { obj1: { users: [...] } }
     * @returns obj that contains pairs id: obj with this id
     */
    ninthTaskExecute(arg) {
        /**
         * Place your code here
         */
        return null;
    }

    /**
     * Tenth task of homework
     * @param arg – object which contains class of item and empty array
     * arg = { obj1: { ... } }
     * @returns obj that contains the array with info about children of the node
     */
    tenthTaskExecute(arg) {
        /**
         * Place your code here
         */
        return null;
    }
}

export default OperationExecutor;
