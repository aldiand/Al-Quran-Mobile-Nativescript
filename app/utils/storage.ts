import {
    getBoolean,
    setBoolean,
    getNumber,
    setNumber,
    getString,
    setString,
    hasKey,
    remove,
    clear
} from "tns-core-modules/application-settings"

export function saveState(key, state) :void {
    setString(key, JSON.stringify(state))
}

export function getState(key) : Array<any> {
    return JSON.parse(getString(key, 'null'))
}