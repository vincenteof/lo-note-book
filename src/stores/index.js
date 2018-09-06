import {configure} from 'mobx';
import DashboardStore from './dashboard/DashboardStore'
import RecentNotesStore from './recentNotes/RecentNotesStore'

configure({enforceActions: 'observed'})

export default class RootStore {
    constructor() {
        this.dashboardStore = new DashboardStore(this)
        this.recentNotesStore = new RecentNotesStore(this)
    }
}