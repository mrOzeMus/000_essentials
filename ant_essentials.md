# ANT

## Bases

Permet d'effectuer automatiquement des opérations type cmd line, dans le cadre de génération d'un projet (ex JAVA).

Pour lancer ant, il suffit (après installation et mise en place var env ANT_HOME JDK_HOME JRE_HOME JAVA_HOME), de creer un fichier **build.xml**.

Exemple:

/ant-test/
        - build.xml


build.xml:

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<project default="test">
    <target name="test">

        // ici commencent les commandes
        <echo message="Hello World !" />
        <mkdir dir="newDirectory" />  // création d'un répertoire

    </target>
</project>
```

Pour lancer ant on peut faire `ant -buildfile somename.xml` ou bien si le fichier s'appelle build.xml, simplement **ant**.


## Création plus complexe

Le répertoire peut être spécifié et le "name" est un nom récupérable dans les modules.

```xml
<project basedir="." name="AntProject" default="test">
```



On peut aussi créer différentes targets qui vont se faire successivement.

```xml
<project basedir="." name="AntProject" default="another">
    <target name="test">
        <echo message="Hello" />
    </target>

    <target name="another" depends="test">
        <echo message="World !" />
    </target>
</project>
```

La 2eme target depends de "test" donc test va se compiler d'abord.


On peut aussi faire des "property".

```xml
<project ...>

    <property name="pi" value="3.14" />
    <property name="myUrl" value="www.company.com" />

    <target name="DisplayProperties">
        <echo message="User defined properties : ${somekey}, ${myUrl}" />
    </target>
    ...
</project>
```

Il existe des properties préexistantes comme:
${os.name}
${java.vm.vendor}
${basedir}
${ant.home},
...


Pour définir un ensemble de fichiers:

```xml
    <fileset id="xmlfiles" dir="." includes="*.xml" />
    <echo> toString of fileset : ${toString:xmlfiles} </echo> // on utilise ici la methode toString
```

Il est possible de créer un fichier **build.properties** pour séparer les properties plus clairement.
dans le fichier build.xml on fera:

```xml
<property file = "build.properties" />
```

Les properties seront alors directement accessibles.


## Javadoc

Ant peut servir pour la génération de Javadoc.
```xml
...
    <target name="default">
        <delete dir="${doc.dir}" />
        <javadoc sourcepath="${source.dir}" destdir="${doc.dir}" >
            <fileset dir="." />

            <doctitle>
                <![CDATA[<h1>Test</h1>]]>
            </doctitle>
            <bottom>
            </bottom>
        </javadoc>
    </target>
...
```

En cas d'erreur si on veut logger le déroulement des scripts ant, on peut ajouter un "record":

```xml
<project ...>
    <record name="build.log" loglevel="verbose" append="false" />
    <target ...>
    </target>
</project>

```

Cela va créer un fichier de logs utile si problème.