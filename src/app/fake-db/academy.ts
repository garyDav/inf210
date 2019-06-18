export class AcademyFakeDb
{
    public static courses = [
        {
            'id'      : '15459251a6d6b397565',
            'title'   : 'Basics of Angular',
            'slug'    : 'basics-of-angular',
            'category': 'web',
            'length'  : 30,
            'updated' : 'Jun 28, 2017'
        },
        {
            'id'      : '154588a0864d2881124',
            'title'   : 'Basics of TypeScript',
            'slug'    : 'basics-of-typeScript',
            'category': 'web',
            'length'  : 60,
            'updated' : 'Nov 01, 2017'
        },
        {
            'id'      : '15453ba60d3baa5daaf',
            'title'   : 'Android N: Quick Settings',
            'slug'    : 'android-n-quick-settings',
            'category': 'android',
            'length'  : 120,
            'updated' : 'Jun 28, 2017'
        },
        {
            'id'      : '15453a06c08fb021776',
            'title'   : 'Keep Sensitive Data Safe and Private',
            'slug'    : 'keep-sensitive-data-safe-and-private',
            'category': 'android',
            'length'  : 45,
            'updated' : 'Jun 28, 2017'
        },
        {
            'id'      : '15427f4c1b7f3953234',
            'title'   : 'Building a gRPC Service with Java',
            'slug'    : 'building-a-grpc-service-with-java',
            'category': 'cloud',
            'length'  : 30,
            'updated' : 'Jun 28, 2017'
        },
        {
            'id'      : '1542d75d929a603125',
            'title'   : 'Build a PWA Using Workbox',
            'slug'    : 'build-a-pwa-using-workbox',
            'category': 'web',
            'length'  : 120,
            'updated' : 'Jun 28, 2017'
        },
        {
            'id'      : '1543ee3a5b43e0f9f45',
            'title'   : 'Build an App for the Google Assistant with Firebase and Dialogflow',
            'slug'    : 'build-an-app-for-the-google-assistant-with-firebase-and-dialogflow',
            'category': 'firebase',
            'length'  : 30,
            'updated' : 'Jun 28, 2017'
        },
        {
            'id'      : '1543cc4515df3146112',
            'title'   : 'Cloud Functions for Firebase',
            'slug'    : 'cloud-functions-for-firebase',
            'category': 'firebase',
            'length'  : 45,
            'updated' : 'Jun 28, 2017'
        },
        {
            'id'      : '154398a4770d7aaf9a2',
            'title'   : 'Manage Your Pivotal Cloud Foundry App\'s Using Apigee Edge',
            'slug'    : 'manage-your-pivotal-cloud-foundry-apps-using-apigee-Edge',
            'category': 'cloud',
            'length'  : 90,
            'updated' : 'Jun 28, 2017'
        },
        {
            'id'      : '15438351f87dcd68567',
            'title'   : 'Building Beautiful UIs with Flutter',
            'your'    : 'building-beautiful-uis-with-flutter',
            'category': 'web',
            'length'  : 90,
            'updated' : 'Jun 28, 2017'
        },
        {
            'id'      : '1544e43dcdae6ebf876',
            'title'   : 'Cloud Firestore',
            'slug'    : 'cloud-firestore',
            'category': 'firebase',
            'length'  : 90,
            'updated' : 'Jun 28, 2017'
        },
        {
            'id'      : '1541ca7af66da284177',
            'title'   : 'Customize Network Topology with Subnetworks',
            'slug'    : 'customize-network-topology-with-subnetworks',
            'category': 'web',
            'length'  : 45,
            'updated' : 'Jun 28, 2017'
        },
        {
            'id'      : '154297167e781781745',
            'title'   : 'Looking at Campaign Finance with BigQuery',
            'slug'    : 'looking-at-campaign-finance-with-bigquery',
            'category': 'cloud',
            'length'  : 60,
            'updated' : 'Jun 28, 2017'
        },
        {
            'id'      : '154537435d5b32bf11a',
            'title'   : 'Firebase Android',
            'slug'    : 'firebase-android',
            'category': 'android',
            'length'  : 45,
            'updated' : 'Jun 28, 2017'
        },
        {
            'id'      : '154204e45a59b168453',
            'title'   : 'Simulating a Thread Network Using OpenThread',
            'slug'    : 'simulating-a-thread-network-using-openthread',
            'category': 'web',
            'length'  : 45,
            'updated' : 'Jun 28, 2017'
        },
        {
            'id'      : '1541dd1e05dfc439216',
            'title'   : 'Your First Progressive Web App',
            'slug'    : 'your-first-progressive-web-app',
            'category': 'web',
            'length'  : 30,
            'updated' : 'Jun 28, 2017'
        },
        {
            'id'      : '1532dfc67e704e48515',
            'title'   : 'Launch Cloud Datalab',
            'slug'    : 'launch-cloud-datalab',
            'category': 'cloud',
            'length'  : 60,
            'updated' : 'Jun 28, 2017'
        },
        {
            'id'      : '1542e43dfaae6ebf226',
            'title'   : 'Personalize Your iOS App with Firebase User Management',
            'slug'    : 'personalize-your-ios-app-with-firebase-user-management',
            'category': 'firebase',
            'length'  : 90,
            'updated' : 'Jun 28, 2017'
        }
    ];

    public static categories = [
        {
            'id'   : 0,
            'value': 'web',
            'label': 'Web'
        },
        {
            'id'   : 1,
            'value': 'firebase',
            'label': 'Firebase'
        },
        {
            'id'   : 2,
            'value': 'cloud',
            'label': 'Cloud'
        },
        {
            'id'   : 3,
            'value': 'android',
            'label': 'Android'
        }
    ];

    private static demoSteps = [
        {
            'title'  : 'Introduction',
            'content': '<h1>Step 1 - Introduction</h1>' +
            '<br>' +
            'This is an example step of the course. You can put anything in here from example codes to videos.' +
            '<br><br>' +
            'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
            'To install or upgrade the CLI run the following <b>npm</b> command:' +
            '<br><br>' +
            '<code>npm -g install @angular/cli</code>' +
            '<br><br>' +
            'To verify that the CLI has been installed correctly, open a console and run:' +
            '<br><br>' +
            '<code>ng version</code>' +
            '<br><br>' +
            '<h2>Install dependencies</h2>' +
            '<br>' +
            'To moderate the images we\'ll need a few Node.js packages:' +
            '<br><br>' +
            '<ul>' +
            '<li>' +
            'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
            '</li>' +
            '</ul>' +
            '<br>' +
            'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
            '<br><br>' +
            '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
            '<br><br>' +
            'This will install the three packages locally and add them as declared dependencies in your package.js file.'
        },
        {
            'title'  : 'Get the sample code',
            'content': '<h1>Step 2 - Get the sample code</h1>' +
            '<br>' +
            'This is an example step of the course. You can put anything in here from example codes to videos.' +
            '<br><br>' +
            'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
            'To install or upgrade the CLI run the following <b>npm</b> command:' +
            '<br><br>' +
            '<code>npm -g install @angular/cli</code>' +
            '<br><br>' +
            'To verify that the CLI has been installed correctly, open a console and run:' +
            '<br><br>' +
            '<code>ng version</code>' +
            '<br><br>' +
            '<h2>Install dependencies</h2>' +
            '<br>' +
            'To moderate the images we\'ll need a few Node.js packages:' +
            '<br><br>' +
            '<ul>' +
            '<li>' +
            'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
            '</li>' +
            '</ul>' +
            '<br>' +
            'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
            '<br><br>' +
            '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
            '<br><br>' +
            'This will install the three packages locally and add them as declared dependencies in your package.js file.'
        },
        {
            'title'  : 'Create a Firebase project and Set up your app',
            'content': '<h1>Step 3 - Create a Firebase project and Set up your app</h1>' +
            '<br>' +
            'This is an example step of the course. You can put anything in here from example codes to videos.' +
            '<br><br>' +
            'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
            'To install or upgrade the CLI run the following <b>npm</b> command:' +
            '<br><br>' +
            '<code>npm -g install @angular/cli</code>' +
            '<br><br>' +
            'To verify that the CLI has been installed correctly, open a console and run:' +
            '<br><br>' +
            '<code>ng version</code>' +
            '<br><br>' +
            '<h2>Install dependencies</h2>' +
            '<br>' +
            'To moderate the images we\'ll need a few Node.js packages:' +
            '<br><br>' +
            '<ul>' +
            '<li>' +
            'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
            '</li>' +
            '</ul>' +
            '<br>' +
            'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
            '<br><br>' +
            '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
            '<br><br>' +
            'This will install the three packages locally and add them as declared dependencies in your package.js file.'
        },
        {
            'title'  : 'Install the Firebase Command Line Interface',
            'content': '<h1>Step 4 - Install the Firebase Command Line Interface</h1>' +
            '<br>' +
            'This is an example step of the course. You can put anything in here from example codes to videos.' +
            '<br><br>' +
            'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
            'To install or upgrade the CLI run the following <b>npm</b> command:' +
            '<br><br>' +
            '<code>npm -g install @angular/cli</code>' +
            '<br><br>' +
            'To verify that the CLI has been installed correctly, open a console and run:' +
            '<br><br>' +
            '<code>ng version</code>' +
            '<br><br>' +
            '<h2>Install dependencies</h2>' +
            '<br>' +
            'To moderate the images we\'ll need a few Node.js packages:' +
            '<br><br>' +
            '<ul>' +
            '<li>' +
            'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
            '</li>' +
            '</ul>' +
            '<br>' +
            'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
            '<br><br>' +
            '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
            '<br><br>' +
            'This will install the three packages locally and add them as declared dependencies in your package.js file.'
        },
        {
            'title'  : 'Deploy and run the web app',
            'content': '<h1>Step 5 - Deploy and run the web app</h1>' +
            '<br>' +
            'This is an example step of the course. You can put anything in here from example codes to videos.' +
            '<br><br>' +
            'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
            'To install or upgrade the CLI run the following <b>npm</b> command:' +
            '<br><br>' +
            '<code>npm -g install @angular/cli</code>' +
            '<br><br>' +
            'To verify that the CLI has been installed correctly, open a console and run:' +
            '<br><br>' +
            '<code>ng version</code>' +
            '<br><br>' +
            '<h2>Install dependencies</h2>' +
            '<br>' +
            'To moderate the images we\'ll need a few Node.js packages:' +
            '<br><br>' +
            '<ul>' +
            '<li>' +
            'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
            '</li>' +
            '</ul>' +
            '<br>' +
            'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
            '<br><br>' +
            '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
            '<br><br>' +
            'This will install the three packages locally and add them as declared dependencies in your package.js file.'
        },
        {
            'title'  : 'The Functions Directory',
            'content': '<h1>Step 6 - The Functions Directory</h1>' +
            '<br>' +
            'This is an example step of the course. You can put anything in here from example codes to videos.' +
            '<br><br>' +
            'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
            'To install or upgrade the CLI run the following <b>npm</b> command:' +
            '<br><br>' +
            '<code>npm -g install @angular/cli</code>' +
            '<br><br>' +
            'To verify that the CLI has been installed correctly, open a console and run:' +
            '<br><br>' +
            '<code>ng version</code>' +
            '<br><br>' +
            '<h2>Install dependencies</h2>' +
            '<br>' +
            'To moderate the images we\'ll need a few Node.js packages:' +
            '<br><br>' +
            '<ul>' +
            '<li>' +
            'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
            '</li>' +
            '</ul>' +
            '<br>' +
            'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
            '<br><br>' +
            '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
            '<br><br>' +
            'This will install the three packages locally and add them as declared dependencies in your package.js file.'
        },
        {
            'title'  : 'Import the Cloud Functions and Firebase Admin modules',
            'content': '<h1>Step 7 - Import the Cloud Functions and Firebase Admin modules</h1>' +
            '<br>' +
            'This is an example step of the course. You can put anything in here from example codes to videos.' +
            '<br><br>' +
            'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
            'To install or upgrade the CLI run the following <b>npm</b> command:' +
            '<br><br>' +
            '<code>npm -g install @angular/cli</code>' +
            '<br><br>' +
            'To verify that the CLI has been installed correctly, open a console and run:' +
            '<br><br>' +
            '<code>ng version</code>' +
            '<br><br>' +
            '<h2>Install dependencies</h2>' +
            '<br>' +
            'To moderate the images we\'ll need a few Node.js packages:' +
            '<br><br>' +
            '<ul>' +
            '<li>' +
            'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
            '</li>' +
            '</ul>' +
            '<br>' +
            'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
            '<br><br>' +
            '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
            '<br><br>' +
            'This will install the three packages locally and add them as declared dependencies in your package.js file.'
        },
        {
            'title'  : 'Welcome New Users',
            'content': '<h1>Step 8 - Welcome New Users</h1>' +
            '<br>' +
            'This is an example step of the course. You can put anything in here from example codes to videos.' +
            '<br><br>' +
            'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
            'To install or upgrade the CLI run the following <b>npm</b> command:' +
            '<br><br>' +
            '<code>npm -g install @angular/cli</code>' +
            '<br><br>' +
            'To verify that the CLI has been installed correctly, open a console and run:' +
            '<br><br>' +
            '<code>ng version</code>' +
            '<br><br>' +
            '<h2>Install dependencies</h2>' +
            '<br>' +
            'To moderate the images we\'ll need a few Node.js packages:' +
            '<br><br>' +
            '<ul>' +
            '<li>' +
            'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
            '</li>' +
            '</ul>' +
            '<br>' +
            'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
            '<br><br>' +
            '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
            '<br><br>' +
            'This will install the three packages locally and add them as declared dependencies in your package.js file.'
        },
        {
            'title'  : 'Images moderation',
            'content': '<h1>Step 9 - Images moderation</h1>' +
            '<br>' +
            'This is an example step of the course. You can put anything in here from example codes to videos.' +
            '<br><br>' +
            'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
            'To install or upgrade the CLI run the following <b>npm</b> command:' +
            '<br><br>' +
            '<code>npm -g install @angular/cli</code>' +
            '<br><br>' +
            'To verify that the CLI has been installed correctly, open a console and run:' +
            '<br><br>' +
            '<code>ng version</code>' +
            '<br><br>' +
            '<h2>Install dependencies</h2>' +
            '<br>' +
            'To moderate the images we\'ll need a few Node.js packages:' +
            '<br><br>' +
            '<ul>' +
            '<li>' +
            'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
            '</li>' +
            '</ul>' +
            '<br>' +
            'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
            '<br><br>' +
            '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
            '<br><br>' +
            'This will install the three packages locally and add them as declared dependencies in your package.js file.'
        },
        {
            'title'  : 'New Message Notifications',
            'content': '<h1>Step 10 - New Message Notifications</h1>' +
            '<br>' +
            'This is an example step of the course. You can put anything in here from example codes to videos.' +
            '<br><br>' +
            'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
            'To install or upgrade the CLI run the following <b>npm</b> command:' +
            '<br><br>' +
            '<code>npm -g install @angular/cli</code>' +
            '<br><br>' +
            'To verify that the CLI has been installed correctly, open a console and run:' +
            '<br><br>' +
            '<code>ng version</code>' +
            '<br><br>' +
            '<h2>Install dependencies</h2>' +
            '<br>' +
            'To moderate the images we\'ll need a few Node.js packages:' +
            '<br><br>' +
            '<ul>' +
            '<li>' +
            'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
            '</li>' +
            '<br>' +
            '<li>' +
            'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
            '</li>' +
            '</ul>' +
            '<br>' +
            'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
            '<br><br>' +
            '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
            '<br><br>' +
            'This will install the three packages locally and add them as declared dependencies in your package.js file.'
        },
        {
            'title'  : 'Congratulations!',
            'content': '<h1>Step 11 - Congratulations!</h1>' +
            '<br>' +
            'You\'ve built a full-fidelity, offline-capable progressive web app by leveraging the power of reusable Web Components and Firebase. Why bother with a native app when you know how to do all that?!'
        }
    ];

    private static demoStep1 = [
        {
            'title'  : 'Evolución de javacript',
            'content': '<h1>1 - Evolución de javacript</h1>' +
            '<br>' +
            'Javascript pasó de crear aplicaciones web muy limitadas, ha las potentes aplicaciones actuales, ésto dejó muy claro las especificaciones de <code class="code-text">ES5</code> de Javascript con graves problemas de escalabilidad y capacidad de mantenimiento, el problema sé agravó a medida que aumentaron el número de librerías y módulos que seguían una perfecta integración en las nuevas aplicaciones, éstas limitaciones obligaron a soluciones complicadas y poco eficaces que perjudicaban el desarrollo de esta tecnología.' +
            '<br><br>' +
            'Como respuesta a éstas preocupaciones se desarrolló <code class="code-text">ECMAScript 6</code> también conocido como <code class="code-text">ES6</code> ó <code class="code-text">ES2015</code>, mejorando las funcionalidades para <b>Carga de Módulos</b>, pero también la propia <b>Arquitectura</b> del lenguaje y su sintaxis, la introducción de programación basado en clases fue una oportunidad para adoptar un enfoque más de <b>Programación Orientada a Objetos (POO)</b>, cuando se construyen aplicaciones a gran escala.' +
            '<br><br>' +
            'El objetivo es convertir <b>Javascript</b> en un lenguaje capaz de desarrollar aplicaciones empresariales, como lo hacen <b>java</b> ó <b>C++</b>, mejorando las herramientas y sistemas de análisis del código. Insistir en que <b>TypeScript</b> es un super conjunto de <b>ECMAScript 6</b>, así que si conoces ECMAScript 6 ya tienes mucho más avanzado para usar TypeScript ó TypeScript te puede servir para introducirte aprender ECMAScript 6, todas las características adicionales que incluye TypeScript que no está en ECMAScript 6, son totalmente opcionales.' +
            '<br><br>' +
            'Antes de empezar a ver en detalle el lenguaje, reunimos un grupo de sitios impresindibles para el trabajo diario con TypeScript:' +
            '<br><br>' +
            '<ul>' +
            '<li>' +
            'El primero es el <a href="https://www.typescriptlang.org/" target="_blank">sitio oficial</a> muy completo, pero en el que destaca sobre todo la <code class="code-text">Documentation</code> con información muy completa que se está actualizando constantemente. También destacar el <code class="code-text">Playground</code>, se trata de un auténtico sandbox que yá incluye trozos de código TypeScript, que hacen referencia a sus características más comunes, y se vé como inmediatamente lleva su conversión a Javascript plano, puedes utilizarlo para familiarizarte con su arquitectura y sintaxis, también nos vá a servir para ir provando los ejemplos que vayamos viendo en el curso' +
            '</li>' +
            '<br>' +
            '<li>' +
            'El código para TypeScript es completamente <b>Open Source</b> lo tienes completo en <a href="https://github.com/Microsoft/TypeScript" target="_blank">GitHub</a> y los desarrolladores han hecho un grán esfuerzo para documentar las diferentes facetas del código que se encuentran en una Wiki disponible en el sitio del repositorio en GitHub, un magnífico recurso para encontrar respuestas a dudas, o para profundizar en algunas de las características del lenguaje y su sintaxis.' +
            '</li>' +
            '</ul>' +
            '<br>' +
            'Trabajar con TypeScript ó con cualquier otro lenguaje de programación, significa básicamente trabajar con datos, y tales datos puede representar diferentes tipos de contenidos, ésto es lo que se conoce en programación como tipos <b>(Types)</b> un nombre usado para representar el hecho de que los datos pueden ser texto string, un valor entero ó un array de estos tipos de valores, ésto no es nada nuevo en Javascript donde siempre se trabaja de modo implísito con tipos (Types) péro de una forma flexible, ésto significa que cualquier variable dada puede asumir o devolver en el caso de funciones, cualquier tipo de valor, péro esto aveces lleva a errores y excepciones en nuestro código por colición de tipos entre lo que nuestro código devuelve y lo que esperábamos que debía devolver, por eso en ECMAscript 6 y en TypeScript por lo tanto se utiliza en denominado, tipado estático que nos garantiza saber que tipo de dato nos vamos encontrar en cada instancia de código muy valioso para ayudar a depurar nuestras aplicaciones en tiempo de compilación.' +
            '<br><br>' +
            'Probablemente uno de los más ampliamente usados tipos primitivos en nuestro código será el tipo <b>string</b> en el que poblamos una variable con un trozo de texto.'
        },
        {
            'title'  : 'Empezando con TypeScript',
            'content': '<h1>2 - Empezando con TypeScript</h1>' +
            '<br>' +
            '<b>TypeScript</b> es un lenguaje de programación moderno que permite crear aplicaciones web robustas en JavaScript. TypeScript no requiere de ningún tipo de plugin, puesto que lo que hace es generar código JavaScript que se ejecuta en cualquier navegador, plataforma o sistema operativo.' +
            '<br><br>' +
            '<b>TypeScript</b> es un "transpilador", es decir, un compilador que se encarga de traducir las instrucciones de un lenguaje a otro, aqui lo llamaremos también pre-compilador ya que este realmente intenta realizar las funciones de un compilandor más las funciones de un traductor de instrucciones.' +
            '<br><br>' +
            '<em>TypeScript es un lenguaje pre-compilado, es decir, un lenguaje el cual será compilado finalmente a javascript</em>, la versión del javascript en la cual será compilado junto con otras configuraciones estará en el archivo <b>tsconfig</b>, TypeScript nos proporciona una serie de ventajas sobre javascript, o ES2016,.., ya que tiene una serie de caracteristicas que ES* no suele tener, como por ejemplo:' +
            '<br><br>' +
            '<ul>' +
            '<li>' +
            'Interfaces' +
            '</li>' +
            '<br>' +
            '<li>' +
            'Clases (Clases de verdad)' +
            '</li>' +
            '<br>' +
            '<li>' +
            'Es furtemente tipado' +
            '</li>' +
            '</ul>' +
            '<br>' +
            'Aparte de estas características TS tiene más características, pero quizás la más importante sea que gracias a el tiempo de debuggin es reducido ya que, para poder debuggear código javascript en la actualidad, este tiene que ser ejecutado en la aplicación y se le debe sumar el tiempo que se tarde en la detección del fallo, mientras que con TypeScript el código simplemente no será compilado y nos dará un error en la compilación diciéndonos donde se encuentra el error.' +
            '<br><br>' +
            'En lo referente a las interfaces, estas ni siquiera serán escritas en el código final, simplemente será el mismo transpilador de TypeScript el que se encargará de que el <b>"Contrato"</b> sea cumplido, las interfaces en TypeScript pueden ser heredadas esto lo veremos más adelante.' +
            '<br><br>' +
            'TypeScript es fuertemente tipado ya que requiere de que se le especifiquen los tipos de datos que se quieren utilizar (en caso de que no se especifiquen serán de tipo <b>ANY</b>, pero eso lo veremos más adelante).'
        },
        {
            'title'  : 'Instalación del entorno de desarrollo',
            'content': '<h1>3 - Instalación del entorno de desarrollo</h1>' +
            '<br>' +
            'La instalación de <b>TypeScript</b> es relativamente simple, únicamente necesitamos la instalación de un servidor <b>NodeJS</b> y con el gestor de paquetes <b>npm</b> para descargarnos el transpilador <b>TypeScript</b>' +
            '<br><br>' +
            'Para descargar <b>NodeJS</b> hay que ir a <a href="https://nodejs.org/es/" target="_blank">nodejs.org</a>' +
            '<br><br>' +
            '<code>node -v</code>' +
            '<br><br>' +
            'Si nos dice la versión de NodeJS que tenemos proseguiremos con el siguiente paso la descarga de TypeScript para ello abriremos una terminal y escribiremos esto (Windows\/Linux\/Mac)' +
            '<br><br>' +
            '<code>npm install -g typescript</code>' +
            '<br><br>' +
            'Para comprobar la correcta instalación de TypeScript y la versión que se a instalado escribimos' +
            '<br><br>' +
            '<code>tsc -v</code>' +
            '<br><br>' +
            'instalación de los tsd de nodejs' +
            '<br><br>' +
            '<code>npm install tsd -g</code>' +
            '<br><br>' +
            '<b>tsc = TypeScript Console</b>' +
            '<br><br>' +
            'El siguiente paso será crear una carpeta donde trabajar para ello dependiendo de nuestro' +
            'sistema operativo podremos utilizar un ejecutable u otro para crear una carpeta o' +
            'simplemente hacerlo desde la interfaz gráfica, una vez creada navegaremos a través de la' +
            'terminal a la carpeta recién creada y escribiremos el siguiente comando' +
            '<br><br>' +
            '<code>tsc --init</code>' +
            '<br><br>' +
            'Con este comando generaremos el archivo de configuración básico que utilizará TypeScript' +
            'para compilar la información.' +
            '<br><br>' +
            '<code>' +
            '  {' +
            '    "compilerOptions": {' +
            '    "module": "commonjs",' +
            '    "target": "es5",' +
            '    "noImplicitAny": false,' +
            '    "sourceMap": false' +
            '    },' +
            '    "exclude": [' +
            '    "node_modules"' +
            '    ]' +
            '  }' +
            '</code>' +
            '<br><br>' +
            'La presencia de este archivo significa que este directorio es la raíz del proyecto.' +
            '<br><br>' +
            'Para que se compile un fichero TypeScripte tienes que utilizar el siguiente comando' +
            '<br><br>' +
            '<code>tsc -w</code>' +
            '<br><br>' +
            'Si al realizar esta instalación ocurre algún error, una alternativa para practicar sería <a href="https://www.typescriptlang.org/play/index.html">la página de pruebas de TypeScript</a>'
        },
        {
            'title'  : 'Tutorial',
            'content': '<h1>4 - Tutorial</h1>' +
            '<br>' +
            'En este tutorial verá la parte introductoria de TypeScript.'+
            `<h3>Main working!</h3>
            <pre><code [highlight]="code" (highlighted)="onHighlight($event)"></code></pre>
            <h4>Highlight response</h4>
            <pre>{{ response | json }}</pre>`
        }
    ];

    public static course = [
        {
            'id'         : '15459251a6d6b397565',
            'title'      : 'Introducción',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'web',
            'length'     : 30,
            'totalSteps' : 11,
            'updated'    : 'May 21, 2019',
            'steps'      : AcademyFakeDb.demoStep1
        },
        {
            'id'         : '154588a0864d2881124',
            'title'      : 'Basics of TypeScript',
            'slug'       : 'basics-of-typeScript',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'web',
            'length'     : 60,
            'totalSteps' : 11,
            'updated'    : 'Nov 01, 2017',
            'steps'      : AcademyFakeDb.demoSteps
        },
        {
            'id'         : '15453ba60d3baa5daaf',
            'title'      : 'Android N: Quick Settings',
            'slug'       : 'android-n-quick-settings',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'android',
            'length'     : 120,
            'totalSteps' : 11,
            'updated'    : 'Jun 28, 2017',
            'steps'      : AcademyFakeDb.demoSteps
        },
        {
            'id'         : '15453a06c08fb021776',
            'title'      : 'Keep Sensitive Data Safe and Private',
            'slug'       : 'keep-sensitive-data-safe-and-private',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'android',
            'length'     : 45,
            'totalSteps' : 11,
            'updated'    : 'Jun 28, 2017',
            'steps'      : AcademyFakeDb.demoSteps
        },
        {
            'id'         : '15427f4c1b7f3953234',
            'title'      : 'Building a gRPC Service with Java',
            'slug'       : 'building-a-grpc-service-with-java',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'cloud',
            'length'     : 30,
            'totalSteps' : 11,
            'updated'    : 'Jun 28, 2017',
            'steps'      : AcademyFakeDb.demoSteps
        },
        {
            'id'         : '1542d75d929a603125',
            'title'      : 'Build a PWA Using Workbox',
            'slug'       : 'build-a-pwa-using-workbox',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'web',
            'length'     : 120,
            'totalSteps' : 11,
            'updated'    : 'Jun 28, 2017',
            'steps'      : AcademyFakeDb.demoSteps
        },
        {
            'id'         : '1543ee3a5b43e0f9f45',
            'title'      : 'Build an App for the Google Assistant with Firebase and Dialogflow',
            'slug'       : 'build-an-app-for-the-google-assistant-with-firebase-and-dialogflow',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'firebase',
            'length'     : 30,
            'totalSteps' : 11,
            'updated'    : 'Jun 28, 2017',
            'steps'      : AcademyFakeDb.demoSteps
        },
        {
            'id'         : '1543cc4515df3146112',
            'title'      : 'Cloud Functions for Firebase',
            'slug'       : 'cloud-functions-for-firebase',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'firebase',
            'length'     : 45,
            'totalSteps' : 11,
            'updated'    : 'Jun 28, 2017',
            'steps'      : AcademyFakeDb.demoSteps
        },
        {
            'id'         : '154398a4770d7aaf9a2',
            'title'      : 'Manage Your Pivotal Cloud Foundry App\'s Using Apigee Edge',
            'slug'       : 'manage-your-pivotal-cloud-foundry-apps-using-apigee-Edge',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'cloud',
            'length'     : 90,
            'totalSteps' : 11,
            'updated'    : 'Jun 28, 2017',
            'steps'      : AcademyFakeDb.demoSteps
        },
        {
            'id'         : '15438351f87dcd68567',
            'title'      : 'Building Beautiful UIs with Flutter',
            'your'       : 'building-beautiful-uis-with-flutter',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'web',
            'length'     : 90,
            'totalSteps' : 11,
            'updated'    : 'Jun 28, 2017',
            'steps'      : AcademyFakeDb.demoSteps
        },
        {
            'id'         : '1544e43dcdae6ebf876',
            'title'      : 'Cloud Firestore',
            'slug'       : 'cloud-firestore',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'firebase',
            'length'     : 90,
            'totalSteps' : 11,
            'updated'    : 'Jun 28, 2017',
            'steps'      : AcademyFakeDb.demoSteps
        },
        {
            'id'         : '1541ca7af66da284177',
            'title'      : 'Customize Network Topology with Subnetworks',
            'slug'       : 'customize-network-topology-with-subnetworks',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'web',
            'length'     : 45,
            'totalSteps' : 11,
            'updated'    : 'Jun 28, 2017',
            'steps'      : AcademyFakeDb.demoSteps
        },
        {
            'id'         : '154297167e781781745',
            'title'      : 'Looking at Campaign Finance with BigQuery',
            'slug'       : 'looking-at-campaign-finance-with-bigquery',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'cloud',
            'length'     : 60,
            'totalSteps' : 11,
            'updated'    : 'Jun 28, 2017',
            'steps'      : AcademyFakeDb.demoSteps
        },
        {
            'id'         : '154537435d5b32bf11a',
            'title'      : 'Firebase Android',
            'slug'       : 'firebase-android',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'android',
            'length'     : 45,
            'totalSteps' : 11,
            'updated'    : 'Jun 28, 2017',
            'steps'      : AcademyFakeDb.demoSteps
        },
        {
            'id'         : '154204e45a59b168453',
            'title'      : 'Simulating a Thread Network Using OpenThread',
            'slug'       : 'simulating-a-thread-network-using-openthread',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'web',
            'length'     : 45,
            'totalSteps' : 11,
            'updated'    : 'Jun 28, 2017',
            'steps'      : AcademyFakeDb.demoSteps
        },
        {
            'id'         : '1541dd1e05dfc439216',
            'title'      : 'Your First Progressive Web App',
            'slug'       : 'your-first-progressive-web-app',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'web',
            'length'     : 30,
            'totalSteps' : 11,
            'updated'    : 'Jun 28, 2017',
            'steps'      : AcademyFakeDb.demoSteps
        },
        {
            'id'         : '1532dfc67e704e48515',
            'title'      : 'Launch Cloud Datalab',
            'slug'       : 'launch-cloud-datalab',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'cloud',
            'length'     : 60,
            'totalSteps' : 11,
            'updated'    : 'Jun 28, 2017',
            'steps'      : AcademyFakeDb.demoSteps
        },
        {
            'id'         : '1542e43dfaae6ebf226',
            'title'      : 'Personalize Your iOS App with Firebase User Management',
            'slug'       : 'personalize-your-ios-app-with-firebase-user-management',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category'   : 'firebase',
            'length'     : 90,
            'totalSteps' : 11,
            'updated'    : 'Jun 28, 2017',
            'steps'      : AcademyFakeDb.demoSteps
        }
    ];

}
