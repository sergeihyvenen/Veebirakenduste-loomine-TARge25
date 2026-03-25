type RequiredUser = {
    id: string
    name: string
    age: number
    address: {
        street: string
        city: string
    }
}

//antud juhul on string keu ja RequiredUser on value e nagu Tuple
type A = Record<string, RequiredUser>


//saab kasutada ka union type
type C = Record<"admin" | "user", {test: string}>

const a:C = {
    admin: {test: "asd"},
    user: {test: "asd"}
}

//võib kasutada sellist varianti
//Propertykey tähendab, et kasutab väärtust,
//mida tahad selle type sisse panna
type B = Record<PropertyKey, {test: string}>
