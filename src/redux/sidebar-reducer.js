let initialState = {
    'friends': [
        {name: 'Katya', id: 1},
        {name: 'Edik', id: 2},
        {name: 'Fedor', id: 3},
        {name: 'Elisey', id: 4},
        {name: 'Micha', id: 5},
        {name: 'Kostik', id: 6},
        {name: 'Pavlik', id: 7},
        {name: 'Arkady', id: 8},
        {name: 'Tema', id: 9},
    ],
};

const sidebarReducer = (state = initialState, action) => {
    return {...state};
}

export default sidebarReducer;