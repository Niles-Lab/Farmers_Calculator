# Climate Adaptation Resources for Northern New England Farmers

- [Abstract](#abstract)
- [Components](#components)
  - [Calculator](#calculator) 
  - [Visualizations](#visualizations) 
  - [Other](#other) 
- [Sources](#sources)


# Abstract

This is an open-sourced React-JS application aimed to support small, medium and beginning farms in Vermont and other parts of New England. Currently two tools exist within this website outlining three farming practices. Silvopasture, Tarping, and Irrigation are covered through practice pages, and with Visualzation + Economic Tools.

The Economic Tool will help to understand long-term investments as applicable to each farm on a case-by-case basis, while Visualizations may give an idea as to what these practices really look like.

# Components

## Calculator

### FormController

Main component for the Economic Tool. This holds default state data for all practices, values for all tools in use, and text descriptions of how to use tools. It also holds offcanvas state, button / calculator layout, and table vs. graph view.

| Prop                       | Type     | Default                        |Description                                                                                                                        |
| -------------------------- | -------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `variant`<span style="color:red">*</span>                   | `string`   | `tarping`                        | What practice variant to load. accepted values are `silvopasture`, `irrigation`, or `tarping`. More variants may be defined in component. In                                                                                                  |

### AdvancedOptions

Parent(s): `CalcForm`

Children: `None`

"More __ Options" dropdown for each practice, should be nested inside of CalcForm. These are practice-specific values.

| Prop                       | Type     | Default                        | Description                                                                                                                        |
| -------------------------- | -------- | ------------------------------ |---------------------------------------------------------------------------------------------------------------------------------- |
| `opts`<span style="color:red">\*</span>                    | `dictionary`   | `N/A`                         |  A pre-defined set of values from FormController. Keys are arbitrary, but values must be arrays containing [value<span style="color:red">\*</span>, unit<span style="color:red">\*</span> , description<span style="color:red">\*</span> , tooltip description, tooltip URL]                                                                                                       |
| `method`<span style="color:red">\*</span>                    | `string`   | `N/A`                         |  The variant prop from Formcontroller passed down. This is expected to be `silvopasture`, `irrigation`, or `tarping`. Only use is to display `"More `[method]` options"`                                                                 |
| `rate`<span style="color:red">\*</span>                    | `float`   | `0.05`                         |  The Net-Present Value Discount rate. This is a more nuanced value, and thus included in advanced options. It is typically 0.05, and should generally not be changed unless you are familiar with economics.                                                                |

### CalcShow

Parent(s): `FormController`

Children: `CalcForm`

| Prop                       | Type     | Default                        |Description                                                                                                                        |
| -------------------------- | -------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `show`<span style="color:red">*</span>                   | `boolean`   | `true`                        | Managed state for offcanvas being open/closed. Managed by FormController.                                                                                             |
| `handleClose`<span style="color:red">*</span>                   | `function`   | `N/A`                        | Method to open/close Offcanvas element, managed by FormController.                                                                                                  |
| `CalcForm Props`<span style="color:red">*</span>                   | `props`   | `N/A`                        | Because this is a parent class to `CalcForm` but child to FormController, all props in `CalcForm` must be passed through here. Please see `CalcForm` props.                                                                                            |

### CalcForm

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




### Calculator

Parent(s): `FormController`

Children: `EconomicTool`

This is purely a data-computation class. Given upstream options and inputs, this will calculate values for the economic tool.

### EconomicTool

This is the d3 visualization of the Economic Tool. It holds the actual graph and table, and re-renders on each data update.


## Visualizations

Visualizations for practices are read out of each practice's folder. In src/images/silvopasture, you will find several folders pertaining to practices. These image groups are automatically loaded into visualization collections by folder. They are loaded alphabetically, so you may insert or reorder images by simply changing their file names.

### ImageController

### ImageSlider

## Other

### Acknowledgements

### Banner

### ExternalLink

### Resource




# Sources

This work was supported by the United States Department of Agriculture (USDA) National Institute of Food and Agriculture (NIFA) Agriculture and Food Research Initiative (Niles, 2018-68006-28098). Title: “Assessing climate perceptions and developing adaptation resources for small, medium and beginning farmers”.

This application was also made possible largely by:

*[Reactjs](https://reactjs.org/)

*[D3.js](https://d3js.org/)

*[React-Bootstrap](https://react-bootstrap.github.io/)
