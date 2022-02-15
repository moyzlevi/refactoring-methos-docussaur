---
sidebar_position: 2
---

# Método inline

## Problema
Quando o método em questão possui um corpo que é mais legível e óbvio que o próprio método.

``` java
class Customer {
    int qualificaCustomer(){
        return possuiMaisDeVinteCompras()? 2 : 1;
    }

    boolean possuiMaisDeVinteCompras(){
        return numeroDeCompras > 20;
    }
}
```

## Solução
Delete o método e utilize o próprio corpo do método no código.

``` java
class Customer {
    int qualificaCustomer(){
        return numeroDeCompras > 20 ? 2 : 1;
    }
}
```

## Importância
A hierarquia de métodos pode auxiliar no entendimento do código. Entretanto, quando um código acaba sendo extremamente curto sua existência pode atrapalhar o entendimento do código pela falta de clareza. É necessária a atenção quanto a métodos que podem estar confundindo o entedimento do código.