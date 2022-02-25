---
sidebar_position: 1
---

# Grupo de técnicas de transferência de componentes

Movendo componentes entre classes.

## Mover um método
Mover um método para outra classe em que é usado com mais frequência.

![Mover método](./assets/move_method.png)

## Mover campo
Mover uma propriedade para outra classe em que é usado com mais frequência.

![Mover campo](./assets/propriedade.png)

## Extrair classe ou inserir
Criar uma nova classe and colocar as propriedades e métodos responsáveis pela funcionalidade relevante ou colocar as funcionalidades da classe externa em outra.

![Mover campo](./assets/extract_class.png)

## Esconder delegação ou explicitar
O cliente recebe o objeto B de uma outra classe, chamando o método de B.
Crie um novo método na outra classe que delega uma chamada para o objeto B.

O inverso pode ser feito da mesma forma se houverem muitas delegações.

### Explicíto
``` java
Produto produto = makeProduct.getProduct();
double preco = produto.calcularPreco();
```

### Delegado
``` java
double preco = makeProduct.calcularPreco();
```