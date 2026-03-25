//async võtab tegevused järlekorda ja ei viska neud tagasi ning töötleb neid järjekorra alusel
//kui ta viskaks tegevused tagasi, siis paljud käsud ei realiseeruks
async funcion getUser(id: string) {
    return Promise.resolve({ name: "sdf"})
}

type Y = Awaited<ReturnType<typeof getUser>>