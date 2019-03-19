let jumpStop = []
let chattenRecords = []
let polarRecords = []


const createBlueGrass = (name, age) => {
    return{
        "Artist Name": name,
        "Age": age
    }
}

const createCountry = (name, age) => {
    return{
        "Artist Name": name,
        "Age": age
    }
}

const createPop = (name, age) => {
    return{
        "Artist Name": name,
        "Age": age
    }
}

const createRap = (name, age) => {
    return{
        "Artist Name": name,
        "Age": age
    }
}

const createFunk = (name, age) => {
    return{
        "Artist Name": name,
        "Age": age
    }
}

jumpStop.push(createRap("Dusta Grimes", 21))
jumpStop.push(createRap("Loyoncé Branis", 27))
jumpStop.push(createFunk("Dre Funkz", 25))

chattenRecords.push(createCountry("Avilee Dallas", 19))
chattenRecords.push(createCountry("Bruce Atikins", 23))
chattenRecords.push(createBlueGrass("Bartholomew Danielson", 23))

polarRecords.push(createPop("Jensen Brown", 20))
polarRecords.push(createPop("Austin Kinkaid", 23))

console.log(jumpStop)
console.log(chattenRecords)
console.log(polarRecords)



// Chatten records
// Avilee Dallas is a Country artist and is 19 years old
// Bartholomew Danielson is a Bluegrass artist and is 23 years old
// Bruce Atikins is a Country artist and is 23 years old

// Polar Records
// Jensen Brown is a Pop artist and is 20 years old
// Austin Kinkaid is a Pop artist and is 22 years old

// JumpStop Records
// Dre Funkz is a Funk artist and is 25 years old
// Dusta Grimes is a Rap artist and is 21 years old
// Loyoncé Branis is a Rap artist and is 27 years old

