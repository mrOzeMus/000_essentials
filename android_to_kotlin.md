# Kotlin crash course

On peut ecrire dans la console avec `println("Hello world")

variable:

```kt
val name = "kotlin"
var language = "java"
```

Lorsqu'on utilise val, la variable est immutable. `var` est muttable.
On est pas obligé de donner un type aux variables.
Si on veut définir un type:

```kt
val name : String = "kotlin"
```

Par défaut une variable ne peut pas être null, sauf si on met un ? aprés la déclaration:

```kt
var language : String? = "kotlin"
language = null // autorisé

println("Hello, $name")         // print Hello kotlin
println("Hello, ${ 1 + 2}")     // print Hello, 3

```

## Arrays:

```kt
val arr = arrayOf(1,2,3)
println(arr[0])

// On peut faire une int array
val ia : IntArray = intArrayOf(2, 4, 6, 8)

// Collections
val list = listOf<String>("Kotlin", "Java", "Python", "C++")
val map = mapOf(1 to "Kotlin", 2 to "Java", 3 to "Python", 4 to "C++")

for (a in ia) {
    print(a)
}

for( (key, value) in map){
    println("$key => $value")
}

// loop
for(i in 1 until 9){
    print(i)
}

// decrementing loop
for (i in 9 downTo 1){
    print(i)
}
```


## Switch

équivalent:
Le `break` est implicite.

```kt
val day = realLine(
when(day) {
    "Monday" -> println("Chicken")
    "Friday" -> println("Salmon")
    "Sunday" -> println("Steak")
    else -> println("Bacon")
}

// si on veut stocker la variable
val food = when(day){
    "Monday" -> "Chicken"
    "Friday" -> "Salmon"
    else -> "Bacon"
}

// on peut mettre plusieurs conditions sur la meme ligne:
"Monday", "Wednesday" -> "Chicken"

// également on peut faire:
val food = when {
    day == "Monday" -> "Chicken"
    day == "Friday " -> "Salmon"
    else -> "Bacon"
}
println(food)

```

## Functions

```kt
//déclaration
fun String.getEmotion() : String {
    return when {
        last() == '!' -> "Exciting"
        last() == '?' -> "Curious"
        last() == '.' -> "Calm"
        else -> "Unidentified"
    }
}

val s = "How are you ?"
println(s.getEmotion())
```

## Classes

Il n'y a pas besoin de getter et setter en kotlin
Il n'y a pas non plus de `new`
exemple de classes:

```kt
// old way
class Person {
    val firstName: String = "John"
    val lastName: String = "Smith"
    val age: Int = 19
}


//plus actuel
class Person (var firstName: String = "John", var lastName: String = "Smith", var age: Int = 19){

// on peut faire des getter et setter personnalisés si besoin
get() = "$firstName $lastName"

//constructor custom
constructor(year: Int) : this(){
    age += year
}




}

// pour utiliser la classe ensuite
val p1 = Person()
val p2 = Person("Peter", "Jackson", 29)



```