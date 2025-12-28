    // Destructuring with Name Alias
const joshim : {
    name : string,
    age: number
} = {
    name : 'josim uddin',
    age  : 30
}

const {name} = joshim;
const {name : herName} = joshim;   // clone diye name decler kore dilam; etar arekta name ase ta holo name alias
