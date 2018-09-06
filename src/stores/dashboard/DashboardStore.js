import {observable, action} from 'mobx'

export default class DashboardStore {
    @observable selectedItemKey = 0
    @observable open = true

    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @action setSelectedItemKey = (key) => {
        this.selectedItemKey = key
    }

    @action setOpen = (open) => {
        this.open = open
    }
}