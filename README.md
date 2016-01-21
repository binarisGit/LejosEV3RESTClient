![binarisInformatikHeadBanner.PNG](https://bitbucket.org/repo/4686Ep/images/4038916651-binarisInformatikHeadBanner.PNG)

# EV3 JavaScript REST-Client #

REST-Client auf Basis von *TypeScript* und *AngularJS* für den REST-Service [LejosEV3RestService](https://bitbucket.org/Cappin79/lejosev3restservice). Enthält eine Remote zum Ansteuern des EV3 sowie beispielhafte *E2E/Integrations/Unit-Tests*.


# Installation #

Zum Ausführen der Tests muss der Test-Runner [Karma](https://karma-runner.github.io/0.13/index.html) installiert werden:

```
#!javascript

npm install -g karma
```


Externe .js Dateien (wie bsp. angular.js) werden mittels [bower](http://bower.io/) installiert:

```
#!javascript

bower install
```


Der TypeScript-Compiler benötigt die Datentypen von *AngularJS* und *Jasmine*, ansonsten wird er eine Fehlermeldung ausgeben. Die Installation der dafür notwendigen *d.ts* Dateien erfolgt mittels [tsd](http://definitelytyped.org/tsd/).
Falls tsd noch nicht global installiert, vorher "*npm install -g tsd*" eingeben. Im Anschluss alle d.ts-Dateien installieren, die in 
```
#!text

tsd.json
```
 definiert sind: 

```
#!javascript


tsd install
```



# Verzeichnisstruktur #

![baseball_tdd_schulung_paketstruktur.png](https://bitbucket.org/repo/4686Ep/images/2731117870-baseball_tdd_schulung_paketstruktur.png)



# UML-Klassendiagramm #

Das Design des folgenden Klassendiagramms ist durch [TDD](https://en.wikipedia.org/wiki/Test-driven_development) entstanden. Die Sensoren des EV3-Roboters werden mittels DifferentialPilotAdapter, ColorAdapter und SoundAdapter per REST angesprochen. 

![baseball_tdd_schulung_konzeptr.png](https://bitbucket.org/repo/4686Ep/images/4105179146-baseball_tdd_schulung_konzeptr.png)