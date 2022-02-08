import { ApplicationSettings } from "@nativescript/core"

export function saveState(key: string, state: any) :void {
    ApplicationSettings.setString(key, JSON.stringify(state))
}

export function getState(key: string) : Array<any> {
    return JSON.parse(ApplicationSettings.getString(key, 'null'))
}