---
sidebar_position: 7
---
# Substitua um método por um método de objeto

## Problema
Um método extenso em que as variáveis estão tão conectadas que se torna impossível extrair um método para diminuí-lo.

``` java
class Preco {
    public double calcula(){
        double juros;
        double parcela;
        double codigoDeBarras;
        //Muitas linhas de código...
    }
}
```

## Solução
Transformar o método em uma classe diferente para que as variáveis se tornem propriedades da classe. Assim, temos a possibilidade de quebrar o método em métodos menores.

``` java
class Preco {
    public double calcula(){
        return new Calculadora(this).calcula();
    }
}

class Calculadora {
    private double juros;
    private double parcela;
    private double codigoDeBarras;

    public double Calculadora(Preco preco){
        //atribui
    }

    public double calcula(){
        //método extenso
    }
}
```

## Importância
Com esta técnica é possível delegarmos o problema para o nível de classe, servindo como o primeiro passo para separarmos o método em outros menores que não estariam de acordo com a classe original no qual estavam colocados.