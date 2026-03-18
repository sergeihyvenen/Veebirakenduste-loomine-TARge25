//soovin näidata ainult name ja age, aga siis võetakse kogu objekti sisu
//kuna kasutatakse User type
function renderUserDetails(user) {
    console.log(user.name, user.age);
}
var user = {
    id: "asd",
    name: "Kyle",
    age: 123,
    address: {
        street: "sdf",
        city: "London"
    }
};
renderUserDetails(user);
