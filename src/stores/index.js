import {configure} from 'mobx';
import DashboardStore from './DashboardStore'

configure({enforceActions: 'observed'})

export default class RootStore {
    constructor() {
        this.dashboardStore = new DashboardStore(this)
    }
}