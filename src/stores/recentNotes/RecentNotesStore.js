import {observable, action, runInAction} from 'mobx'
import {PENDING, DONE, ERROR} from '../../utils/fetchState'

const recentNotes = [
    {time: '2018-12-14 00:00', title: 'Test For The Title1...', content: ' Lizards are a widespread group of...'},
    {time: '2018-12-14 00:00', title: 'Test For The Title2...', content: ' Freedom or Death...'},
    {time: '2018-12-14 00:00', title: 'Test For The Title3...', content: ' Freedom or Death...'},
    {time: '2018-12-14 00:00', title: 'Test For The Title4...', content: ' Freedom or Death...'},
    {time: '2018-12-14 00:00', title: 'Test For The Title5...', content: ' Freedom or Death...'},
    {time: '2018-12-14 00:00', title: 'Test For The Title6...', content: ' Freedom or Death...'},
    {time: '2018-12-14 00:00', title: 'Test For The Title7...', content: ' Freedom or Death...'}
]

export default class RecentNotesStore {
    @observable recentNotes = []
    @observable notesFetchState = PENDING

    constructor(rootStore) {
        this.rootStore = rootStore
    }

    fetch = async () => (new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(recentNotes)
        }, 500)
    }))

    @action
    fetchRecentNotes = async () => {
        this.recentNotes = []
        this.notesFetchState = PENDING
        try {
            const notes = await this.fetch()
            runInAction(() => {
                this.notesFetchState = DONE
                this.recentNotes = notes
            })
        } catch (err) {
            runInAction(() => {
                this.notesFetchState = ERROR
            })
        }
    }
}