# Climate Adaptation Resources for Northern New England Farmers

- [Abstract](#abstract)
- [Installation](#installation)
- [Components](#components)
  - [Calculator](#calculator) 
  - [Visualizations](#visualizations) 
  - [Other](#other) 
- [Sources](#sources)


# Abstract

This is an open-sourced React-JS application aimed to support small, medium and beginning farms in Vermont and other parts of New England. Currently two tools exist within this website outlining three farming practices. Silvopasture, Tarping, and Irrigation are covered through practice pages, and with Visualzation + Economic Tools.

The Economic Tool will help to understand long-term investments as applicable to each farm on a case-by-case basis, while Visualizations may give an idea as to what these practices really look like.

# Installation

To run this application, simply clone into an empty folder and run the following commands:

`npm install && npm start`

To build and deploy new versions of the site via Netlify CLI(if you have the proper permissions) then run:

`npm run build && netlify deploy`

If the updates look good in the provided temporary link, run:

`netlify deploy --prod`



# Components

Below documentation covers some custom react components.

# Calculator

## FormController

Main component for the Economic Tool. This holds default state data for all practices, values for all tools in use, and text descriptions of how to use tools. It also holds offcanvas state, button / calculator layout, and table vs. graph view.

| Prop                       | Type     | Default                        |Description                                                                                                                        |
| -------------------------- | -------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `variant`<span style="color:red">*</span>                   | `string`   | `tarping`                        | What practice variant to load. accepted values are `silvopasture`, `irrigation`, or `tarping`. More variants may be defined in component.                                                                                                |

## AdvancedOptions

Parent(s): `CalcForm`

Children: `None`

"More __ Options" dropdown for each practice, should be nested inside of CalcForm. These are practice-specific values.

| Prop                       | Type     | Default                        | Description                                                                                                                        |
| -------------------------- | -------- | ------------------------------ |---------------------------------------------------------------------------------------------------------------------------------- |
| `opts`<span style="color:red">\*</span>                    | `dictionary`   | `N/A`                         |  A pre-defined set of values from FormController. Keys are arbitrary, but values must be arrays containing [value<span style="color:red">\*</span>, unit<span style="color:red">\*</span> , description<span style="color:red">\*</span> , tooltip description, tooltip URL]                                                                                                       |
| `method`<span style="color:red">\*</span>                    | `string`   | `N/A`                         |  The variant prop from Formcontroller passed down. This is expected to be `silvopasture`, `irrigation`, or `tarping`.                                                             |
| `rate`<span style="color:red">\*</span>                    | `float`   | `0.05`                         |  The Net-Present Value Discount rate. This is a more nuanced value, and thus included in advanced options. It is typically 0.05, and should generally not be changed unless you are familiar with economics.                                                                |

## CalcShow

Parent(s): `FormController`

Children: `CalcForm`

| Prop                       | Type     | Default                        |Description                                                                                                                        |
| -------------------------- | -------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `show`<span style="color:red">*</span>                   | `boolean`   | `true`                        | Managed state for offcanvas being open/closed. Managed by FormController.                                                                                             |
| `handleClose`<span style="color:red">*</span>                   | `function`   | `N/A`                        | Method to open/close Offcanvas element, managed by FormController.                                                                                                  |
| `CalcForm Props`<span style="color:red">*</span>                   | `props`   | `N/A`                        | Because this is a parent class to `CalcForm` but child to FormController, all props in `CalcForm` must be passed through here. Please see `CalcForm` props.                                                                                            |

## CalcForm

Parent(s): `CalcShow`

Children: `AdvancedOptions`

| Prop                       | Type     | Default                        |Description                                                                                                                        |
| -------------------------- | -------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `length, setLength`<span style="color:red">*</span>                   | `float`   | ``                        | Project length in years                                                                                         |
| `unit, setUnit`<span style="color:red">*</span>                   | `float`   | `Acres`                        | Unit for `land` prop. Current values include [`Acres`, `Hectares`]. More may be added in FormController.                                                                                         |
| `land, setLand`<span style="color:red">*</span>                   | `float`   | `Dependant on Variant`                        | Land owned by farmer.                                                                                        |
| `method`<span style="color:red">*</span>                   | `string`   | `string`                        | The variant prop from Formcontroller passed down. This is expected to be `silvopasture`, `irrigation`, or `tarping`. Only use in this component is to display `"More `[method]` options"`                                                                                          |
| `irrTech`<span style="color:red">*</span>                   | `string`   | `Spray Irrigation`                        | Specialty option for Irrigation. Can be set to `Spray Irrigation` or `Drip Irrigation`. Methods will share much of the same states because they are so similar.                                                                                        |
| `handleClose`<span style="color:red">*</span>                   | `function`   | `N/A`                        | Method to open/close Offcanvas element, managed by FormController. This is used in the "X" next to calculator title.                                                                                                 |
| `AdvancedOptions Props`<span style="color:red">*</span>                   | `props`   | `N/A`                        | Because this is a parent class to `AdvancedOptions` but child to FormController, all props in `AdvancedOptions` must be passed through here. Please see `AdvancedOptions` props.                                                                                            |




## Calculator

Parent(s): `FormController`

Children: `EconomicTool`

This is purely a data-computation class. Given upstream options and inputs, this will calculate values for the economic tool. It is expected to output `data`, an array of objects in the form of {`year`, `revenue`, `cost`, `value`}

| Prop                       | Type     | Default                        |Description                                                                                                                        |
| -------------------------- | -------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `length`<span style="color:red">*</span>                   | `float`   | `See FormController`                        | Project length in years                                                                                         |
| `rate`<span style="color:red">*</span>                   | `float`   | `0.05`                        | Net Present Value Discount Rate. This is used in the npv() method.                                                                                       |
| `unit`<span style="color:red">*</span>                   | `string`   | `Acres`                        | Unit for `land` prop. Current values include [`Acres`, `Hectares`]. More may be added in FormController.                                                                                         |
| `land`<span style="color:red">*</span>                   | `float`   | `Dependant on Variant`                        | Land owned by farmer.                                                                                        |
| `method`<span style="color:red">*</span>                   | `string`   | `See FormController`                        | The variant prop from Formcontroller passed down. This is expected to be `silvopasture`, `irrigation`, or `tarping`.                                                                                         |
| `irrTech`<span style="color:red">*</span>                   | `string`   | `Spray Irrigation`                        | Specialty option for Irrigation. Can be set to `Spray Irrigation` or `Drip Irrigation`. Methods will share much of the same states because they are so similar.                                                                                        |
| `opts`<span style="color:red">\*</span>                    | `dictionary`   | `N/A`                         |  A pre-defined set of values from FormController. Keys are arbitrary, but values must be arrays containing [value<span style="color:red">\*</span>, unit<span style="color:red">\*</span> , description<span style="color:red">\*</span> , tooltip description, tooltip URL]                                                                                                       |
| `EconomicTool Props`<span style="color:red">*</span>                   | `props`   | `N/A`                        | Because this is a parent class to `EconomicTool` but child to FormController, all props in `EconomicTool` must be passed through here. Please see `EconomicTool` props.                                                                                            |

## EconomicTool

Parent(s): `Calculator`

Children: `None`

This is the d3 visualization of the Economic Tool. It holds the actual graph and table, and re-renders on each data update.


| Prop                       | Type     | Default                        |Description                                                                                                                        |
| -------------------------- | -------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `xDom`<span style="color:red">*</span>                   | `array`   | `[1,length+1]`                        | X Domain for graph, this should be updated whenever the project length is updated.                                                                                        |
| `yDom`<span style="color:red">*</span>                   | `array`   | `[min(data)*1.25,max(data)*1.25]`                        | Y Domain for graph, this should be updated whenever the calculator data is updated.Min is always expected to be negative, so multiplying by 1.25 will produce a better lower Y than 0.75.                                                                                        |
| `land`<span style="color:red">*</span>                   | `float`   | `Dependant on Variant`                        | Land owned by farmer.                                                                                        |
| `method`<span style="color:red">*</span>                   | `string`   | `See FormController`                        | The variant prop from Formcontroller passed down. This is expected to be `silvopasture`, `irrigation`, or `tarping`. Used for practice-specific data, such as the asymptote for maturing trees in Silvopasture variant.                                                                                        |
| `opts`<span style="color:red">\*</span>                    | `dictionary`   | `See FormController`                         |  A pre-defined set of values from FormController. Keys are arbitrary, but values must be arrays containing [value<span style="color:red">\*</span>, unit<span style="color:red">\*</span> , description<span style="color:red">\*</span> , tooltip description, tooltip URL]. Used for practice-specific data, such as the asymptote for maturing trees in Silvopasture variant.                                                                                                          |
| `tableView`<span style="color:red">\*</span>                    | `boolean`   | `false`                         |  Controlled boolean state for Economic Tool's form. If set to `true`, the tool will show as a table. Otherwise it will show as a graph.                                                                                                        |
| `data`<span style="color:red">\*</span>                    | `array`   | `[]`                         |  Economic data passed into graph and table. This is generated by Calculator, and expected to be an array of Objects containing {`Year`, `Revenue`, `Cost`, `Value`}. On change, all lines are deleted and new ones are drawn on top.                                                                                                      |
| `npv`<span style="color:red">\*</span>                    | `nested array`   | `see Calculator`                         |  Net Present Value in a nested array. This is expected to contain 3 arrays for revenue, cost, and their average. Each array should take the form [`Label`, `value`]                                                                                                    |


# Visualizations

Visualizations for practices are read out of each practice's folder. In src/images/silvopasture, you will find several folders pertaining to practices. These image groups are automatically loaded into visualization collections by folder. They are loaded alphabetically, so you may insert or reorder images by simply changing their file names.

## ImageController

Parent(s): `ImageController`

Children: `None`

Displaying element for interactive Visualizations. This features a slider, and multiple sets of images to scroll through. By modifying image opacity, this gives the effect of progression through a practice. Practices should be compartamentalized into separate objects containing three nested arrays. At index *i* of each array, data for each image set can be found.

`titles`[*i*]: The title for this progression of images

`images`[*i*]: An object representing a folder full of images. Attainable by passing a directory into the *ImportAll* method.

`lbls`[*i*]: A set of labels for this group. This should be an array of strings of equal length to the images contained in this set.


| Prop                       | Type     | Default                        |Description                                                                                                                        |
| -------------------------- | -------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `variant`<span style="color:red">*</span>                   | `string`   | `tarping`                        | What practice variant to load. accepted values are `silvopasture`, `irrigation`, or `tarping`. More variants may be defined in component.                                                                                                  |

## ImageSlider

Parent(s): `Practice Pages`, `Visualization Pages`

Children: `ImageSlider`

This is mainly a data-holder such as FormController. It contains pointers to all image folders, titles and labels for each image group. It will import resources mainly from the src/images folder. When importing images, a folder is scanned and imported alphabetically. This will reflect in any ordered grouping of images.

| Prop                       | Type     | Default                        |Description                                                                                                                        |
| -------------------------- | -------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `group`<span style="color:red">*</span>                   | `array`   | `N/A`                        | An object representing a folder full of images. Attainable by passing a directory into ImageController's *ImportAll* method.                                                                                             |
| `title`<span style="color:red">*</span>                   | `string`   | `N/A`                        | The title of this particular image group                                                                               |
| `lbls`<span style="color:red">*</span>                   | `array`   | `N/A`                        | An array containing strings that label images in this group. This array should be the same size as the amount of images in `group`.                                                                                           |



# Other

## Acknowledgements

Parent(s): `Practice Pages`

Children: `None`

This is the bottom "Acknowledgements" section found on each practice page. It contains a list of all authors, researchers and external reviewers.

| Prop                       | Type     | Default                        |Description                                                                                                                        |
| -------------------------- | -------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `authors`                  | `string`   | `N/A`                        | A comma separated string with a list of author names.                                                                                            |
| `team`                   | `array`   | `N/A`                        | A nested array with each value contaning a role and name. Ex. ["Sorcerer Supreme", "Dr. Strange"]                                                                               |
| `external`                   | `string`   | `N/A`                        | A comma separated string with a list of external editors.                                                                                         |


## Banner

Parent(s): `App`

Children: `None`

A banner element at the top of all pages. May be useful for sitewide alerts.

| Prop                       | Type     | Default                        |Description                                                                                                                        |
| -------------------------- | -------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `show`<span style="color:red">*</span>                   | `boolean`   | `true`                        | Managed state for element being present. Managed by App.                                                                                             |
| `handleClose`<span style="color:red">*</span>                   | `function`   | `N/A`                        | Method to close element once "x" is clicked, managed by App.                                                                                                  |

## ExternalLink

Parent(s): `Practice Pages`

Children: `None`

An external link to another resource. This may be site-hosted, downloadable or clickable.

| Prop                       | Type     | Default                        |Description                                                                                                                        |
| -------------------------- | -------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `label`<span style="color:red">*</span>                   | `string`   | `Empty`                        | Description of this resource.                                                                                             |
| `link`                   | `string`   | `None`                        | A URL to redirect users to when clicked.                                                                                                |
| `second_link`                   | `string`   | `None`                        | Second URL to redirect users to. This element is limited to two URLs for style reasons.                                                                                                  |
| `download`                   | `nested array`   | `None`                        | A nested array containing filetypes and links to hosted resources. Array items should be in the form of ["pdf", "path/to/item"].                                                                                                 |

## Resource


Parent(s): `Research Page`

Children: `None`

A site-hosted resource for users to view or download. An example of this being a research paper or brief.

| Prop                       | Type     | Default                        |Description                                                                                                                        |
| -------------------------- | -------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `description`<span style="color:red">*</span>                   | `string`   | `Empty`                        | Description of this resource.                                                                                             |
| `link`<span style="color:red">*</span>                    | `string`   | `None`                        | A link to this resource.                                                                                                  |
| `format`                   | `string`   | `None`                        | The type of document this is. I.e. "Research Paper", "Slideshow", etc.                                                                                                |
| `date`                   | `string`   | `None`                        | What date was this created / published?                                                                                                |
| `download`                   | `boolean`   | `false`                        | Should this resource be downloadable? If so, a box will be rendered next to the "view" button allowing this.                                                                                             |

# Sources

This work was supported by the United States Department of Agriculture (USDA) National Institute of Food and Agriculture (NIFA) Agriculture and Food Research Initiative (Niles, 2018-68006-28098). Title: “Assessing climate perceptions and developing adaptation resources for small, medium and beginning farmers”.

This application was also made possible largely by:

*[Reactjs](https://reactjs.org/)

*[D3.js](https://d3js.org/)

*[React-Bootstrap](https://react-bootstrap.github.io/)
