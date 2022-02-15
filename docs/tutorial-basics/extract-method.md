---
sidebar_position: 1
---

# Método de extração

## Problema
A refatoração por extração é necessária quando temos um fragmento de código que precisa ser agrupado.

``` java
void printCompra(){
    printCustomer();

    System.out.println("Preço "+getPreco());
    System.out.println("Quantidade "+getQuantidade());
}
```

## Solução
Mova esse código para um novo método separado e substitua o antigo código com uma chamada para o método.

``` java
void printCompra(){
    printCustomer();
    printProdutoDaVenda(getPreco(),getQuantidade());
}

void printProdutoDaVenda(double preco, int quantidade) {
    System.out.println("Preço "+preco);
    System.out.println("Quantidade "+quantidade);
}
```

## Importância
Quanto mais métodos existirem dentro do código mais difícil será de entendermos o propósito e a funcionalidade do método. Com a refatoração o código fica mais legível se o novo método criado descreve a sua função. A duplicação diminue e partes independentes do código ficam isoladas facilitando a manutenção.