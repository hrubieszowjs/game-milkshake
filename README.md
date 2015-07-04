# game-milkshake

Projekt zakłada stworzenie platformowej gry webowej.

## Opis

Gra będzie polegała na zbieraniu składników potrzebnych do zrobienia milkshake-a.
Gracz będzie poruszał się postacią-szklanką po chmurkach. Po zebraniu kolejnych składników szklanka będzie zapełniała się.

Do wykonania shake potrzeba 3 składników owocowych, mleko jest pominięte `:)`
Przeszkodami będą: poruszający się świat gry (z góry do dołu) oraz możliwość spadnięcia z chmurki.

## Technologie

0. [Phaser.js](https://phaser.io/) - framework aplikacji
0. [Babel.js](https://babeljs.io/) - transpiler `ECMAScript 6` na `ECMAScript 5`
0. [Webpack](http://webpack.github.io/) - budowanie paczki aplikacji

## Instalacja

0. Wpisać polecenie
 
    ```
    npm install
    ```
    
0. Uruchomić `Webpack`-a poleceniem
 
    ```
    webpack
    ```

## Opis protokołu komunikacyjnego

Klient podczas inicjalizacji otiwera kanał komunikacji z serwerem za pomocą WebSocket'ów.
Przy każdym ruchu bohatera klient wysyła na serwer swoją aktualną pozycję.

Serwer po otrzymaniu  pozycji od jakiegokolwiek klienta wysyła zaktualizowaną listę wszystkich pozycji do wszystkich klientów. 

Klient po otrzymaniu listy od serwera sprawdza czy pozycje poszczególnych graczy się zmieniły,
jeśli pozycja się zmieniła to następuje aktualizacja pozycji. 

Po skończeniu parsowania danych klient updatuje widok.
