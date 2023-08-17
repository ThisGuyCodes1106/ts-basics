// return types annotation
function square(num: number):number {
    return num * num
}

// default value
function greet(person: string = "Stefan"):string {
    return `Hi there, ${person}`
}

//multiple return types
function rando(num: number): string | number {
    if (Math.random() < 0.5) {
        return num.toString()
    }
    return num
}
