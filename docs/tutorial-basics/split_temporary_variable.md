---
sidebar_position: 6
---
# Quebrar variável temporaria

## Problema
Uma variável local que guarda múltiplos valores intermediários dentro de um método.

``` java
int temp = lado * lado;
System.out.println(temp);
temp = lado+lado+lado+lado;
System.out.println(temp);
```

## Solução
Usar diferentes variáveis para valores diferentes, cada variável deve ser responsável por apenas uma função.

``` java
int ladoDoQuadrado = lado * lado;
System.out.println(ladoDoQuadrado);
int perimentroDoQuadrado = lado+lado+lado+lado;
System.out.println(perimentroDoQuadrado);
}
```

## Importância
A manuntenção do código fica muito mais difícil se uma mesma variável está sendo utilizada para vários propósitos desconexos. Vários problemas serão encontrados assim que uma modifição ser necessária, sendo necessário checar o uso da variável múltiplas vezes.
