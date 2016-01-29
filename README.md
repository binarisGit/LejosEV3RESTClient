![binarisInformatikHeadBanner.PNG](https://bitbucket.org/repo/4686Ep/images/4038916651-binarisInformatikHeadBanner.PNG)

# EV3 JavaScript REST-Client #

REST-Client auf Basis von *TypeScript* und *AngularJS* für den REST-Service [LejosEV3RestService](https://bitbucket.org/Cappin79/lejosev3restservice). Enthält eine Remote zum Ansteuern des EV3 sowie beispielhafte *E2E/Integrations/Unit-Tests*.


# Installation #

### Node installieren ###
[Node](https://nodejs.org/en/) downloaden und installieren. Anschließend *node.exe* in der **PATH-Variable** in den Umgebungsvariablen einfügen, damit node von jedem Verzeichnis aus aufgerufen werden kann.

### Projekt initialisieren ###
Nachdem das Repository geklont wurde, ins *root*-Verzeichnis des Projekts wechseln und folgenden Befehl im Terminal eingeben:

```
#!text
npm install -g grunt-cli && npm install
```

Per [npm](https://www.npmjs.com/) werden mittels *package.json* Abhängigkeiten zu externen Modulen installiert. [grunt](http://gruntjs.com/) hingegen ist ein Build-Tool und wird im Projekt u.A. dazu verwendet die TypeScript-Dateien in JavaScript-Dateien umzuwandeln. 

### URL des REST-Services anpassen ###
Damit der Client die HTTP-Requests an den Service schicken kann, muss die URL in der Config-Datei des Clients angepasst werden. Siehe: **BASE_URL** in *src/app.conf.ts*.

### Build & Watch ###

Typescript-Dateien einmalig in JavaScript-Dateien kompilieren und per browserify bündeln (build => siehe target Ordner). Anschließend einen watcher starten, damit grunt bei Codeänderungen stets einen neuen build erstellt:


```
#!text

grunt default
```






# Verzeichnisstruktur #

Die source-Dateien gliedern sich in Angularjs-Services, -Controller und -Direktiven. Zugehörige Interfaces liegen in den Ordnern *api* und *third_api*. Alle Tests liegen in *spec* (hier nicht abgebildet):


![baseball_tdd_schulung_paketstruktur.png](https://bitbucket.org/repo/4686Ep/images/2731117870-baseball_tdd_schulung_paketstruktur.png)



# UML-Klassendiagramm #

Das Design des folgenden Klassendiagramms ist durch [TDD](https://en.wikipedia.org/wiki/Test-driven_development) entstanden. Die Sensoren des EV3-Roboters werden mittels **DifferentialPilotAdapter**, **ColorAdapter** und **SoundAdapter** per REST angesprochen.
Die Baseball-Klassen befinden sich im Ordner *examples* und greifen auf die Adapter-Klassen zu.

![baseball_tdd_schulung_konzeptr.png](https://bitbucket.org/repo/4686Ep/images/4105179146-baseball_tdd_schulung_konzeptr.png)