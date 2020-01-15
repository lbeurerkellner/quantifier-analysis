interface State {
    [key: string]: Object;
}

type StateListener = (key: string, value: Object) => void

var state : State = {};
var listeners : Array<StateListener> = []
var loaded = false

function store(key : string, object : Object) {
    state[key] = object;
    for (let l of listeners) {
        l(key, object);
    }

    localStorage.setItem('state', JSON.stringify(state));
}

function restoreState() {
    const rawStored = localStorage.getItem("state")
    if (rawStored) {
        state = JSON.parse(rawStored);
    }
    loaded = true;
}

function get(key : string) : Object {
    if (!loaded) {
        restoreState();
    }

    return state[key];
}

function register(listener : StateListener) {
    listeners.push(listener);
}

function unregister(listener : StateListener) {
    let idx = listeners.findIndex((value, index, obj) => value === listener)
    if (idx !== -1) {
        listeners = listeners.slice(idx, 1);
    }
}

export default {
    store: store,
    get: get,
    register: register,
    unregister: unregister
};