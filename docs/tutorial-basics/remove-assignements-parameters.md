---
sidebar_position: 7
---
#  Remover atribuições a parâmetros de métodos

## Problema
Remover atribuições para um parâmetro dentro de um corpo de um método.

``` java
double desconto(double valorBase, double desconto){
    valorBase -= desconto;
    return valorBase;
}
```

## Solução
Usar uma variável local ao invés de um parâmetro.

``` java
double desconto(double valorBase, double desconto){
    double novoValor -= desconto;
    return novoValor;
}
```

## Importância
Em linguagens de programação em que parâmetros por referência são passados, o risco de mudarmos variáveis que estão fora do método é muito alto. Também em programas documentados o texto que indica o o valor que o parâmetro possui pode levar a uma falsa indicação do que realmente foi atribuído a variável do parâmetro.