const data = [
    { id: 4, name: "bobby", age: 38 },
    { id: 2, name: "bobby", age: 38 },
    { id: 6, name: "bobby", age: 38 },
    { id: 3, name: "bobby", age: 38 },
    { id: 1, name: "bobby", age: 38 },
    { id: 5, name: "bobby", age: 38 },
]

function put(id, newPerson) {
    const ind = data.indexOf((el) => el.id === id)
    data[ind] = newPerson
}

put(2, {
    id: 2,
    name: "ginger",
    age: 13,
})

function patch_increase_age(id) {
    const ind = data.indexOf((el) => el.id === id)
    data[ind].age++
}
