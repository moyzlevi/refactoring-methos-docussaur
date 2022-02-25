---
sidebar_position: 8
---
# Algoritmo substituto

## Problema
A necessidade de substituirmos um algoritmo por um novo.

``` java
String foundPerson(String[] people){
  for (int i = 0; i < people.length; i++) {
    if (people[i].equals("Don")){
      return "Don";
    }
    if (people[i].equals("John")){
      return "John";
    }
    if (people[i].equals("Kent")){
      return "Kent";
    }
  }
  return "";
}
```

## Solução
Substitua o corpo do método com um novo algoritmo.

``` java
String foundPerson(String[] people){
  List candidates =
    Arrays.asList(new String[] {"Don", "John", "Kent"});
  for (int i=0; i < people.length; i++) {
    if (candidates.contains(people[i])) {
      return people[i];
    }
  }
  return "";
}
```

## Importância
Pode ser necessários modificarmos um método para aumentarmos a sua efeciência legibilidade. Se um algoritmo está com muitos problemas também pode ser vantajoso refatorá-lo.