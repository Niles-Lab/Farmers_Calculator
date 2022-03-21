# Climate Adaptation Resources for Northern New England Farmers

- [Abstract](#abstract)
- [Components](#Components)

- [Sources](#sources)


# Abstract

This is an open-sourced React-JS application aimed to support small, medium and beginning farms in Vermont and other parts of New England. Currently two tools exist within this website outlining three farming practices. Silvopasture, Tarping, and Irrigation are covered through practice pages, and with Visualzation + Economic Tools.

The Economic Tool will help to understand long-term investments as applicable to each farm on a case-by-case basis, while Visualizations may give an idea as to what these practices really look like.

# Components

## Calculator

### FormController

Main component for the Economic Tool. This holds default state data for all practices, values for all tools in use, and text descriptions of how to use tools.

| Prop                       | Type     | Default                        |Description                                                                                                                        |
| -------------------------- | -------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `variant`<span style="color:red">*</span>                   | `string`   | `tarping`                        | What practice variant to load. accepted values are `silvopasture`, `irrigation`, or `tarping`. More variants may be defined in component. In                                                                                                  |

### AdvancedOptions

"More __ Options" dropdown for each practice, should be nested inside of CalcForm. These are practice-specific values.

| Prop                       | Type     | Default                        | Description                                                                                                                        |
| -------------------------- | -------- | ------------------------------ |---------------------------------------------------------------------------------------------------------------------------------- |
| `opts`<span style="color:red">\*</span>                    | `dictionary`   | `N/A`                         |  A pre-defined set of values from FormController. Keys are arbitrary, but values must be arrays containing [value<span style="color:red">\*</span>, unit<span style="color:red">\*</span> , description<span style="color:red">\*</span> , tooltip description, tooltip URL]                                                                                                       |
| `method`<span style="color:red">\*</span>                    | `string`   | `N/A`                         |  The variant prop from Formcontroller passed down. This is expected to be `silvopasture`, `irrigation`, or `tarping`. Only use is to display `"More `[method]` options"`                                                                 |
| `rate`<span style="color:red">\*</span>                    | `float`   | `0.05`                         |  The Net-Present Value Discount rate. This is a more nuanced value, and thus included in advanced options. It is typically 0.05, and should generally not be changed unless you are familiar with economics.                                                                |

### CalcShow

Parent(s): `FormController`

Children: ``

| Prop                       | Type     | Default                        |Description                                                                                                                        |
| -------------------------- | -------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `variant`<span style="color:red">*</span>                   | `string`   | `tarping`                        | What practice variant to load. accepted values are `silvopasture`, `irrigation`, or `tarping`. More variants may be defined in component. In                                                                                                  |


### CalcForm

### Calculator

### EconomicTool

### DDSelect (Deprecated)





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
