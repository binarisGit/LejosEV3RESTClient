# EV3 JavaScript REST-Client #

REST-Client auf Basis von TypeScript und AngularJS für den REST-Service [LejosEV3RestService](https://bitbucket.org/Cappin79/lejosev3restservice). Enthält eine Remote zum Ansteuern des EV3 sowie beispielhafte E2E/Integrations/Unit-Tests.


# Installation #


```
#!javascript

npm install -g karma jasmine
```



```
#!javascript

bower install angular angular-mocks bootstrap
```




Falls [tsd](http://definitelytyped.org/tsd/) noch nicht global installiert, vorher "*npm install -g tsd*" eingeben. Im Anschluss noch folgende d.ts Dateien installieren, damit TypeScript die Typen von jasmine und angular kennt. 

```
#!javascript


tsd install jasmine
```



```
#!javascript

tsd install angular_mocks
```



![baseball_tdd_schulung_paketstruktur.png](https://bitbucket.org/repo/4686Ep/images/2731117870-baseball_tdd_schulung_paketstruktur.png)