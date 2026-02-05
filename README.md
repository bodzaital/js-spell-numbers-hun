# js-spell-numbers-hun
Spell numbers in Hungarian. English description below.

## Használat

Legegyszerűbben Google Sheets Apps Scriptként lehet használni, hogy egy cellában meghatározott számot kiírjon szövegesen.

1. Google Sheetsben az Extensions > Apps Script opcióval nyisd meg a szerkesztőt.
2. Az Untitled.gs fájl tartalmát cseréld ki egészében:

Erről:
```js
function myFunction() {

}
```

[Arra, ami ebben a fájlban van](https://raw.githubusercontent.com/bodzaital/js-spell-numbers-hun/refs/heads/main/akh11_289a.js)

3. Mentsd el az Untitled.gs fájlt
4. Visszatérve a Google Sheetsben, hívd meg a függvényt az egyik cellában, és hivatkozz valamelyik másik cellára:

```
=akh11_289a(A1)
```

Természetesen `A1` helyett bármelyik másik cellát is használhatod.

Entert nyomva egy rövid ideig betölt (`Loading...`) aztán megjelenik a kiszámított eredmény.

## Usage

It is easiest to use Google Sheets Apps Sript to print the number as text.

1. In Google Sheets, select Extensions > Apps Script
2. Replace the contents of Untitled.gs:

From this:
```js
function myFunction() {

}
```

[To the contents of this file](https://raw.githubusercontent.com/bodzaital/js-spell-numbers-hun/refs/heads/main/akh11_289a.js)

3. Save Untitled.gs
4. Returning back to Google Sheets, call the function in a cell, referencing another cell:

```
=akh11_289a(A1)
```

In place of `A1` any other cell may be used.

Press Enter, and after a short loading, the calculated text is displayed.
