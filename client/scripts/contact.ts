/*
Name: Brody Dentinger
Date: February 17 , 2024
Description: This is the contact class.
File: contact.js
*/

"use strict";

namespace core {

    export class Contact {

        private _fullName:string;
        private _contactNumber:string;
        private _emailAddress:string;

        constructor(fullName:string = "", contactNumber:string = "", emailAddress:string = "") {
            this._fullName = fullName;
            this._contactNumber = contactNumber;
            this._emailAddress = emailAddress;
        }


        public get fullName():string {
            return this._fullName;
        }

        public set fullName(value:string) {
            this._fullName = value;
        }

        public get contactNumber():string {
            return this._contactNumber;
        }

        public set contactNumber(value:string) {
            this._contactNumber = value;
        }

        public get emailAddress():string {
            return this._emailAddress;
        }

        public set emailAddress(value:string) {
            this._emailAddress = value;
        }

        public toString():string {
            return `FullName: ${this._fullName}\n
                ContactNumber: ${this._contactNumber}\n
                emailAddress: ${this._emailAddress}\n`;
        }

        /**
         * Serialize for writing to localStorage.
         * @returns {null|string}
         */
        public serialize():string|null {
            if (this._fullName !== "" && this._contactNumber !== "" && this._emailAddress !== "") {
                return `${this.fullName}, ${this.contactNumber}, ${this.emailAddress}`;
            }
            console.error("One or more properties of the Contact are empty or invalid");
            return null;
        }

        /**
         * Deserialize is used to read data from the localStorage.
         * @param data
         */
        public deserialize(data:string):void {
            let propertyArray = data.split(",");
            this._fullName = propertyArray[0];
            this._contactNumber = propertyArray[1];
            this._emailAddress = propertyArray[2];
        }
    }
}