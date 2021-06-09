# Stimulus-materialize-css

A stimulus wrapper for materialize-css javascript.

## Install

Call `registerAll` function wherever you initialize stimulus in your project.

```ecmascript 6
import {Application} from "stimulus"
import {registerAll} from "@virtualmaster/stimulus-materialize-css";

const application = Application.start()
registerAll(application)
```

## Usage

All materialize controllers are prefixed with `materialize` prefix. If you for example want to use materialize dropdown,
you can do it like this.

```HTML
<a class="dropdown-trigger btn" data-target='dropdown1' data-controller="materialize--dropdown"
   data-materialize--dropdown-constraint-width-value="false" data-materialize--dropdown-cover-trigger-value="false"
   data-materialize--dropdown-hover-value="true" data-materialize--dropdown-close-on-click-value="false" href="#">
    Lets try dropdown!
</a>
<ul class="dropdown-content" id="dropdown1">
    <li>
        <a href="#"> One!</a>
    </li>
    <li>
        <a href="#"> Two!</a>
    </li>
    <li>
        <a href="#"> Three!</a>
    </li>
</ul>
```
Unfortunately, materialize javascript is really stupid when it comes to initialization, so there is no way, how to pass the dropdown content using stimulus. This is true for all of the components.

## Controller list

| Name | Init target |
| ------| ------ |
| materialize--carousel | element |
| materialize--collapsible | element |
| materialize--dropdown | element (dropdown trigger) |
| materialize--tap-target | tapTarget target |
| materialize--material-box | image target |
| materialize--slider | element |
| materialize--modal | element (modal) |
| materialize--parallax | element |
| materialize--pushpin | element |
| materialize--scrollspy | element (seaction) |
| materialize--sidenav | element (sidenav) |
| materialize--tabs | element |
| materialize--toast | element |
| materialize--tooltip | element |
| materialize--autocomplete | element |
| materialize--datepicker | element |
| materialize--timepicker | element |
| materialize--date-time-picker | element |
| materialize--form | element |

Materialize form controller provides access to text areas and form selects. It also allows proper init when then form is changing dynamically.
Materialize date time picker can be used for datetime fields, but it can sometimes behave strangely.

