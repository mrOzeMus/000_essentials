# Android Testing

---
## **1.Comprendre les fondamentaux du testing.**

Lorsque le développement d'une app évolue, on va avoir besoin de faire des fetch de données, accéder a du storage local, utiliser les capteurs du device, ou rendre des interfaces utilisateur complexes. La versatilité de l'app demmande une stratégie de testing compréhensive.

Les bonnes pratiques impliquent avant de faire une nouvelle fonctionnalité d'implémenter le test associé.

![test](./img/android/and13.png)

Pour l'organisation:
- Le répertoire `androidTest` doit contenir des tests qui sont effectués sur des devices réels ou virtuels.
- Le répertoire `test` doit contenir les tests qui sont executés sur la machine local, comme des Unit tests.

Faire des tests sur des devices réels offrent la meilleure fidélité, mais prennent le plus de temps. A l'inverse, les émulateurs sont les plus rapides pour produire des résultats, mais les résultats ne seront pas aussi fiables.

![test2](./img/android/and14.png)

Sur la pyramide ci-dessus, la proportion généralement utilisée, est de 70% d'Unit tests, 20% d'Integration Test, et enfin 10% UI tests.

--
## **2.Être capable d'écrire des JUnits test locaux.**

Ces tests visent a tester des fonctionnalités internes d'une app.
Ils sont stockés dans le répertoire `test`.
Exemple de test:

```java
@RunWith(JUnit4.class) // indique que le runner effectue le test dans une single class. Pour des tests plus compliqués, il faudra utiliser Espresso
@SmallTest // indique que le test n'a pas de dépendances et doit se faire en millisecondes.
public class CalculatorTest{

    private Calculator mCalculator;

    @Before
    public void setUp() { // set up the environnement before testing.
        mCalculator = new Calculator();
    }

    @Test
    public void addTwoNumbers(){ // test réel.
        double resultAdd = mCalculator.add(1d, 1d);
        assertThat(resultAdd, is(equalTo(2d))); // vérifie le résultat attendu. On ne peut faire des tests que sur des méthodes publiques.
    }

    @Test
    public void divTwoNumbersZero(){
        double resultDiv = mCalculator.div(32d, 0);
        assertThat(resultDiv, is(equalTo(Double.POSITIVE_INFINITY)));
    }
}
```



--
## **3.Comprendre les principes de test UI du framework Espresso.**

--
## **4.Savoir comment écrite des test automatisés pour Android.**