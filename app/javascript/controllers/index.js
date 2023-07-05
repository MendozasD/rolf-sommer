// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import BorderController from "./border_controller"
application.register("border", BorderController)

import FilterController from "./filter_controller"
application.register("filter", FilterController)

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import MagneticElementsController from "./magnetic_elements_controller"
application.register("magnetic-elements", MagneticElementsController)

import ScrollController from "./scroll_controller"
application.register("scroll", ScrollController)

import VanillaTiltController from "./vanilla_tilt_controller"
application.register("vanilla-tilt", VanillaTiltController)
