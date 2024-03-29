// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';

import { AppModule } from "./app/app.module";
import 'zone.js';

// A traditional NativeScript application starts by initializing global objects,
// setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization:
// modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together,
// so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
runNativeScriptAngularApp({
    appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
  });
  
