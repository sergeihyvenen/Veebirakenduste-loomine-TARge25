
type RoleExclude = "admin" | "user" | "moderator"
type ExcludeRole = "testing" | "admin" | "user" | "security"

//võta mõlemast typest kokku ja välista teatud väärtused
type O = Exclude<RoleExclude, "user" | "moderator">
//otsite internetis, mis on terninary operator
//condition 