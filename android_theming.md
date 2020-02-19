# Android CheatSheet for theming

## CheatSheet

Definir un theme dans une activity:

```xml
<activity ...
    android:theme="@style/Theme.MaterialComponents" />
<activity ...
    android:theme="@style/Theme.MaterialCompoenents.Light" />
<activity ...
    android:theme="@style/Theme.MaterialCompoenents.DayLight" />
```

On peut aussi appliquer un theme sur un View ou un ViewGroup

```xml
<View ...
    android:theme="@style/Theme.App.Dark" />
<ViewGroup ...
    android:theme="@style/Theme.App.Light" />
```

Le ContextThemeWrapper peut reecrire par dessus un autre Theme. Ca peut etre assez vite le bordel donc il faut faire attention a ne pas trop l'utiliser.

```java
val themedContedxt = ContextThemeWrapper(context, R.style.baz)
val inflater = LayoutInflater.from(themedContext)
val view = inflater.inflate(...)
```

## Exemple pour un boutton

Les attributs d'un boutton viennent par default du Theme par default.
=> themes_material.xml is Widget.Material.Button


## Theme par default

-> Theme.Material (dark version)
-> Theme.Material.Light (light version)
-> Theme.Material.Light.NoActionBar (no action bar)

(a mettre dans sytles.xml dans <style name="AppTheme" parent="Theme.AppCompat.Light.DarkActionBar">)

Palette generale:
    - colorPrimary
    - colorPrimaryDark
    - colorAccent
    - colorControlNormal
    - textColorPrimary
    - textColorSecondary
    - windowBackground
    - navigationBarColor
    Pour les effets (Tinting widgets)
        - colorControlHighlight
        - colorControlActivated
        - colorControlNormal
        

Les palettes recommandees sont ici:
https://material.io/design/color/the-color-system.html#tools-for-picking-colors