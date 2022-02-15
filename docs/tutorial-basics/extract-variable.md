---
sidebar_position: 3
---
# Extração de Variável

## Problema
Quando há uma enorme quantidade de expressões que são difíceis de se entender o código pode se tornar confuso.

``` java
void initGame(){    
    if((console.toUpperCase().indexOf("Xbox") > -1) &&
        versao.toUpperCase().indexOf("360") > -1 &&
        isUpdated()){
            // More Code Here...
    }
}
```

## Solução
Coloque o resultado das expressões ou suas partes in variáveis separadas que são auto-explicativas.

``` java
void initGame(){    
    final boolean isXbox = console.toUpperCase().indexOf("Xbox") > -1
    final boolean is360 = versao.toUpperCase().indexOf("360") > -1
    if(isXbox && is360 && isUpdated()){
            // More Code Here...
    }
}
```

## Importância
A principal razão é aumentar a legibilidade do código pela quebra de condições, expressões aritméticas e linhas extensas. A clareza aumenta ainda mais se nomes descritivos são utilizados nas variáveis.