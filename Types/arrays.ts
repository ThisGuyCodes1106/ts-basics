const activeUsers: object[] = []

activeUsers.push({name: "Stefan"})

function calculateTax( price: number | string, tax: number ) {
    if (typeof price === "string") {
        price.replace("$", "")
        price = Number(price)
        return price * tax
    } else {
        price * tax
    }
}

type Pet = { readonly name: string; weight: number; topSpeed?: number; }
type Animal = { species: string, endangered: boolean }

//pets can be an array of Pet or Animal type objects
const pets: (Pet | Animal)[] = []