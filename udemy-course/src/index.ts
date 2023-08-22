const demoBtn = document.getElementById("demoBtn")!; // ! - non-null assertion operator

interface Property {
    title: string,
    price: number,
    numBedrooms: number,
}

const luxuryApartment: Property = {
    title: "2 Bed luxuray apartment in Manchester City Centre",
    price: 2100,
    numBedrooms: 2,
}

const printProperty = (property: Property): void => {
    console.log(`${property.title} - $${property.price}/month`);
}

// function printProperty(property: Property) {
//     console.log(`${property.title} - $${property.price}/month`);
// }

// demoBtn? - if demoBtn exists then add event listener
demoBtn.addEventListener("click", () => printProperty(luxuryApartment));

// Initialize ts-config file: tsc --init
// compile to js: tsc index.ts / tsc (all files)
// watch mode: tsc --watch / tsc -w