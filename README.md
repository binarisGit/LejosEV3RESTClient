![binarisInformatikHeadBanner.PNG](https://bitbucket.org/repo/4686Ep/images/4038916651-binarisInformatikHeadBanner.PNG)

# EV3 JavaScript REST-Client #

REST-Client auf Basis von *TypeScript* und *AngularJS* für den REST-Service [LejosEV3RestService](https://bitbucket.org/Cappin79/lejosev3restservice). Enthält eine Remote zum Ansteuern des EV3 sowie beispielhafte *E2E/Integrations/Unit-Tests*.


# Installation #

[Node](https://nodejs.org/en/) installieren und **PATH-Variable** in den Umgebungsvariablen anpassen



npm install -g grunt-cli && npm install


Zum Schluss noch die **BASE_URL** auf die URL des EV3-Roboters in *app.conf.js* setzen.




# Verzeichnisstruktur #

Die source-Dateien gliedern sich in Angularjs-Services, -Controller und -Direktiven. Zugehörige Interfaces liegen in den Ordnern *api* und *third_api*. Alle Tests liegen in *spec* (hier nicht abgebildet):


![baseball_tdd_schulung_paketstruktur.png](https://bitbucket.org/repo/4686Ep/images/2731117870-baseball_tdd_schulung_paketstruktur.png)



# UML-Klassendiagramm #

Das Design des folgenden Klassendiagramms ist durch [TDD](https://en.wikipedia.org/wiki/Test-driven_development) entstanden. Die Sensoren des EV3-Roboters werden mittels **DifferentialPilotAdapter**, **ColorAdapter** und **SoundAdapter** per REST angesprochen.
Die Baseball-Klassen befinden sich im Ordner *examples* und greifen auf die Adapter-Klassen zu.

![baseball_tdd_schulung_konzeptr.png](https://bitbucket.org/repo/4686Ep/images/4105179146-baseball_tdd_schulung_konzeptr.png)