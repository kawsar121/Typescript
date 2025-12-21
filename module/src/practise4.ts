// Spread Oparetors

// Arry Spread
const peopele : string [] = ['naim', 'abdul', 'jolil', 'rahat']
const Mens : string [] = ['Najmul', 'Shorif', 'nahid', 'Abid']
const allPeople = peopele.push(...Mens)

// Object Spread
const messi ={
    goal : 52,
    fullName : 'Adres Messi',
    sonName : 'sold'
}
const ronDa ={
    goal : 54,
    fullName : 'Custiar Ronaldo',
    sonName : 'lop'
}
const MessiVsRonda = {
    ...messi,
    ...ronDa
}

