---
sidebar_position: 4
---
# Método Inline Temp

## Problema
Quando uma variável serve apenas temporariamente como resultado de uma expressão e nada mais.

``` java
boolean descontoCupom() {
    double precoBasico = pedido.precoBasico();
    return precoBasico > 150;
}
```

## Solução
Substitua a referência da variável com a própria expressão.

``` java
boolean descontoCupom() {
    return pedido.precoBasico() > 150;
}
```

## Importância
É útil tal implementação porque assim é possível remover partes desncessárias do código. Entretanto é necessária a leitura atenta do código, porque certas variáveis podem estar servindo como cache de uma operação custosa.