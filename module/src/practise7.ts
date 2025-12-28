    // Union Type
    // Union type decler korte hole just | ei sign ta use korle hobe. union sign use korbo tokhon jokhon akadik value theke akta valu select hobe
type User = {
    name : string;
    add  : string;
    bload: 'O+' | 'B+' | 'A+' 
}
const user1:User = {
    name : 'kawsar',
    add  : 'Joypur',
    bload:'B+'
}