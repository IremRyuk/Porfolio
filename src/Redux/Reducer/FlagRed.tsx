// Get Language Information From LocalStorage
const names = localStorage.getItem('language') || 'pl'
// Reducer
export const FlagRed = (state=names,action:any) => {
    switch (action.type) {
        case 'changeFlag': return state = action.changeFlag
        default: return state
    }
}