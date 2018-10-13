tail.select
===========
[![plainJS](https://s.pytes.net/p000001)](https://s.pytes.net/h000001)
[![npm](https://s.pytes.net/p000001)](https://s.pytes.net/h000001)
[![npm](https://s.pytes.net/p000001)](https://s.pytes.net/h000001)
[![Author](https://s.pytes.net/p000001)](https://s.pytes.net/h000001)
[![License](https://s.pytes.net/p000001)](https://s.pytes.net/h000001)

The **tail.select** script is back, completely rewritten in pure vanilla JavaScript and ready to
beautify your (multiple) select fields again and now even a lot better as the deprecated jQuery
Version back in 2014!

[Wanna see **tail.select** in action?](https://github.pytes.net/tail.select)

Features
--------
-   Compatible with all modern browsers, and also for **IE >= 9**.
-   Supports Single and Multiple Select fields, also deselect- and limitable!
-   Offers a Search field within the dropdown list to find the desired options quickly!
-   Offers a Description text to describe each single option!
-   Allows to manipulate (add, edit and delete) each single option during the runtime.
-   Bindings for the jQuery and MooTools library and usable as **AMD**.
-   No dependencies, just include and use it!
-   Event Listeners to bind your own function on each action.
-   ... and many settings to configure the environment and its behavior!

Install & Embed
---------------
It's recommended to use the [Published Releases](https://github.com/pytesNET/tail.select/releases)
instead of downloading the master branch, because the master branch may contains 'unreleased' changes,
which may not work as expected! You can **download** the latest published **tail.select** Release as
[.tar](https://github.com/pytesNET/tail.select/tarball/master) or as [.zip](https://github.com/pytesNET/tail.select/zipball/master)
archive, or by using NPM or YARN:

```markup
npm install tail.select --save
```

```markup
yarn add tail.select --save
```

### Using a CDN
You can also use the awesome CDN services from jsDelivr or UNPKG.

```markup
https://cdn.jsdelivr.net/npm/tail.select@latest/
```

```markup
https://unpkg.com/tail.select/
```

Documentation
-------------
The Documentation has been moved to [GitHubs Wiki Pages](https://github.com/pytesNET/tail.select/wiki),
but I will keep a table of contents list here and some basic instructions.

-   [Instructions](https://github.com/pytesNET/tail.select/wiki/instruction)
-   [Default Usage](https://github.com/pytesNET/tail.select/wiki/default-usage)
-   [Public Options](https://github.com/pytesNET/tail.select/wiki/public-options)
-   [Public Methods](https://github.com/pytesNET/tail.select/wiki/public-methods)
-   [Events & Callbacks](https://github.com/pytesNET/tail.select/wiki/events-callbacks)


### Basic Instructions
You can pass up to 2 arguments to the **tail.select** constructor, the first parameter is required
and need to be an `Element`, a `NodeList`, a `HTMLCollection`, an Array with `Element` objects or
just a single selector as `string`, which calls the `querySelectorAll()` method on its own. The
second parameter is optional and, if set, MUST be an object with your *tail.select* options.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <link type="text/css" rel="stylesheet" href="css/tail.select.css" />
    </head>
    <body>
        <script type="text/javascript" src="js/tail.select.min.js"></script>

        <select>
            <!-- Your <optgroup> and <option> Elements -->
        </select>

        <script type="text/javascript">
            document.addEventListener("DOMContentLoaded", function(){
                tail.select("select", { /* Your Options */ });
            });
        </script>
    </body>
</html>
```

### Default options
Please check out [GitHubs Wiki Pages](https://github.com/pytesNET/tail.select/wiki) to read more
about each single option!

```javascript
tail.select("select", {
    width:              null,
    height:             null,
    classNames:         null,
    placeholder:        null,
    deselect:           false,
    animate:            false,
    openAbove:          null,
    stayOpen:           false,
    startOpen:          false,
    multiple:           false,
    multiLimit:         -1,
    multiShowCount:     true,
    multiContainer:     false,
    descriptions:       false,
    items:              {},
    sortItems:          false,
    sortGroups:         false,
    search:             false,
    searchFocus:        true,
    searchMarked:       true,
    csvOutput:          false,
    csvSeparator:       ",",
    hideSelect:         true,
    hideSelected:       false,
    hideDisabled:       false,
    bindSourceSelect:   false
});
```




















----

### Options
All options (with the default settings):

```javascript
tail.select("select", {
    width:              null,
    height:             null,
    classNames:         null,
    placeholder:        null,
    deselect:           false,
    animate:            false,
    openAbove:          null,
    stayOpen:           false,
    startOpen:          false,
    multiple:           false,
    multiLimit:         -1,
    multiShowCount:     true,
    multiContainer:     false,
    descriptions:       false,
    items:              {},
    sortItems:          false,
    sortGroups:         false,
    search:             false,
    searchFocus:        true,
    searchMarked:       true,
    csvOutput:          false,
    csvSeparator:       ",",
    hideSelect:         true,
    hideSelected:       false,
    hideDisabled:       false,
    bindSourceSelect:   false
});

// Use in jQuery
$("select").tailselect(options)

// Use in MooTools
$("select-id").tailselect(options)
$$("select").tailselect(options)
```

#### width
`string|int`<br />
This options configures the width of the tail.select field as well as for the dropdown field, you
can use 'auto' to detect the current width or null (like the default) to set no width styling at all.

#### height
`string|int`<br />
This options configures the maxHeight of the tail.select dropdown popup field, you can also use
'null' (like the default) to set not maxHeight at all.

#### classNames
`string|array|bool`<br />
This options adds additional classNames to the main tail.select element. You can define your class
names as string or as array, set this option to 'true' to copy the class names of the source select
field.

#### placeholder
`string`<br />
This option sets the placeholder to the respective tail.select element, which is invisible on
single not-deselectale fields. This option gets overwritten by the 'placeholder' (or as fallback on
the 'data-placeholder') attribute on the respective source select field. If not placeholder is set
at all 'tail.select.strings.placeholder' will be used!

#### deselect
`bool`<br />
This option allows to deselect single select fields, which theoretically isn't possible in HTML. If
enabled, tail.select will use `<option>.hasAttribute("selected")` instead of the `<option>.selected`
variable. Please note: This option affects single select fields only!

#### animate
`bool`<br />
This options animates the open / close sequence of the tail.select dropdown field. Therefore it uses
the className 'idle' during the animation.

#### openAbove
`bool`<br />
This option determines where the tail.select dropdown field is located. Use `true` to open the
dropdown field always above the select field, use 'false' for the opposite or just keep it to
`null`, which will use the bottom location unless there is no room left for it.

#### stayOpen
`bool`<br />
This option will prevent the call of the `.close()` method at the typical events, but you can still
call the `.close()` method on your own to close the dropdown field.

#### startOpen
`bool`<br />
This option will call the `.open()` method directly after the tail.select initialization has been
completed.

#### multiple
`bool`<br />
This option sets the 'single / multiple' option of the respective tail.select instance and gets
overwritten by the source select element during the initialization.

#### multiLimit
`int`<br />
This option allows to limit the selection to the respective number. Use `-1` to disable any limit,
use `0` to allow no selection at all. Please note: This option affects multiple select
fields only!

#### multiShowCount
`bool`<br />
This option shows a small counter to the left of the tail.select label. Please note: This option is
only available on multiple select fields!

#### multiContainer
`string`<br />
This option allow on string-based element selector only. If passed it will move special handle
objects to the respective element. Please note: This option is only available on multiple select
fields!

#### descriptions
`string`<br />
This option will enable the 'description' option on the respective tail.select instance. To add a
description to an option just use the 'data-description' attribute on the respective HTML option
element.

#### items
`object`<br />
This option can contain additional options, which should be shown within the tail.select instance
(The respective items gets also created in the source select element). Check our the
'tail.select.options' documentation for more informations!

#### sortItems
`string|function`<br />
This option configures the sort order of the shown options within the tail.select dropdown element.
You can use `ASC`, `DESC` or your own callback sort [compareFunction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)!

#### sortGroups
`string|function`<br />
This option configures the sort order of the shown option groups within the tail.select dropdown
element. You can use `ASC`, `DESC` or your own callback sort [compareFunction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)!

#### search
`bool`<br />
This option will enable the search input field within the tail.select dropdown field.

#### searchFocus
`bool`<br />
This option will set the focus automatically to the search input field, when the dropdown field gets
opened.

#### searchMarked
`bool`<br />
This option will 'mark' the search term on the respective option text within the given results.

#### csvOutput
`bool`<br />
This option will add a hidden input field, which takes over the name attribute of the source select
field and contains the selected values - separated with the option separator defined in `csvSeparator`.

#### csvSeparator
`string`<br />
This option defines the separator, which is used for the option `csvOutput`.

#### hideSelect
`bool`<br />
This option will hide, set the `display: none` styling, to the source select element.

#### hideSelected
`bool`<br />
This option will hide all selected options within the tail.select dropdown list.

#### hideDisabled
`bool`<br />
This option will hide all disabled options within the tail.select dropdown list.

#### bindSourceSelect
`bool`<br />
This option will set an event listener to the source select element. Thus, all changes to the source
element will be taken over in the tail.select instance!
