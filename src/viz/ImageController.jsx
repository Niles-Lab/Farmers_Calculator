/**
 * 
 * ImageController - A controller class that holds data for all visualization sliders
 * 
 * NOTES:
 * - Images are set up to be pulled from their folders alphabetically. It does not matter what these images are named, so long as their alphabetical name allows them to be sorted into the correct sequence.
 * - Images on the site will keep their native aspect ratio. Consider updating visualizations in the future to have the same size, or same aspect ratio to make them flush.
 * 
 **/

 import React, { useState, useEffect } from 'react';

 import ImageSlider from "./ImageSlider.jsx"
 
 
 function importAll(r) {
   let images = {};
   r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
   return Object.entries(images);
 }
 
 
 
 
 
 
 // 
 // 
 //  IRRIGATION DATA
 // 
 // 
 // Irrigation Cover Image(s)
 //const sp = importAll(require.context('../images/irrigation/', false, /\.(png|jpe?g|svg)$/));
 
 // Ponds images
 const pd = importAll(require.context('../images/irrigation/pd/', false, /\.(png|jpe?g|svg)$/));
 
 // Irrigation images
 const ig = importAll(require.context('../images/irrigation/ig/', false, /\.(png|jpe?g|svg)$/));
 
 
 const irrigation = {
   titles: ["Aerial view of a drip irrigation system on a small-medium New England vegetable farm", "Perspective view of a drip and sprinkler irrigation system on a small-medium New England vegetable farm"],
   images: [ig, pd],
   lbls: [
     ["Farm before pond or irrigation lines.", 
     "Addition of farm pond for irrigation water supply.", 
     "Diagram of pump and irrigation system installed."],
     
     ["Existing farm with vegetable crops.", 
     "New irrigation pond, pump and pipes established as water source.", 
     "Aerial sprayers added to create combined drip and sprinkler irrigation system.",
     "Crops grown with pond-irrigation system."]
   ]
 }
 
 // 
 // 
 //  TARPING DATA
 // 
 // 
 // Tarping image slides
 const tp = importAll(require.context('../images/tarping/', false, /\.(png|jpe?g|svg)$/));
 
 // Tarping cover image is just the first from our one set
 //const sp = [tp[0]];
 
 
 
 
 const tarping = {
   titles: ["Tarping in cover crop and conservation tillage systems"],
   images: [tp],
   lbls: [
     ["Spring growth of winter rye cover crop planted previous September.",
     "In June, roll down with lawn roller or tractor with roller-crimper to prepare for tarping. Some also mow the rye.",
     "Use black plastic tarps to prepare planting beds and kill weed species. Weigh tarps with sand bags.",
     "Two weeks later: remove black plastic and mulch with straw. Then plant vegetable starts. Example: Brassica species such as broccoli or kale.",
     "Crop growing within straw mulch."]
     ]
 }
 
 // 
 // 
 //  SILVOPASTURE DATA
 // 
 // 
 // Pasture Enrichment Images
 const pe = importAll(require.context('./../images/silvopasture/pe', false, /\.(png|jpe?g|svg)$/));
 
 // Forest Conversion Images
 const av1 = importAll(require.context('./../images/silvopasture/av1', false, /\.(png|jpe?g|svg)$/));
 
 // Pasture Enrichment Images 2
 const pe2 = importAll(require.context('./../images/silvopasture/pe2', false, /\.(png|jpe?g|svg)$/));
 
 // Forest Conversion Images
 const av2 = importAll(require.context('./../images/silvopasture/av2', false, /\.(png|jpe?g|svg)$/));
 
 // Forest Conversion Images
 //const fc = importAll(require.context('./../images/silvopasture/fc', false, /\.(png|jpe?g|svg)$/));
 
 
 //labels = ["Pasture Enrichment 1", "Aerial View", "Pasture Enrichment 2", "Aerial View"];
 
 
 
 const silvopasture = {
   titles: ["Perspective view of black walnut and black locust trees in cattle pasture", 
   "Aerial view of black walnut trees in pasture",
   "Perspective view of apple orchard in sheep pasture",
   "Aerial view of apple orchard in pasture"],
   images: [pe, av1, pe2, av2],
   lbls: [
     // Image Set 1
     ["Cattle graze in a pasture on a New England farm. Livestock density is average for a small to medium size farm.", 
     "Trees intended for future timber harvest are planted at 17-21 basal density in the pasture. Example trees: Black Walnut.", 
     "Mature trees in the pasture 15-20 years after planting. Cattle graze among the trees, some of which are selectively harvested."],
     // Image Set 2
     ["Aerial view of open pasture.",
     "Mature timber trees of two ages: 30-40 year old and 10-15 year old trees.",
     "Selective harvest of timber species in both fields."],
     // Image Set 3
     ["Sheep and cattle graze in adjacent pastures on a New England farm.",
     "Apple saplings are planted 15-20 feet apart in the sheep pasture.",
     "Mature apple trees in the pasture 5-15 years after planting."],
     // Image Set 4
     ["Aerial view of open pasture.", 
     "Young orchard crop, bearing some fruit after 2-3 years.",
     "Mature orchard crop, consistently bearing fruit after 8-10 years."]
     
     ]
 
 }
 
 
 
 
 
 const ImageController = (props, ref) => {
 
 
//  const [group, setGroup] = useState(silvopasture);
const [group, setGroup] = useState(() => {
  if(props.variant === "silvopasture") return silvopasture;
  else if(props.variant === "irrigation") return irrigation;
  else return tarping;
}

); 

 const [key, setKey] = useState(props.variant);
 
 
 function handleChange(d) {
 
 setGroup(null);
 setKey(d);
  
 if(d === "tarping") {
   setGroup(tarping);
 }
 else if(d === "irrigation") {
   setGroup(irrigation);
 }
 else {
   setGroup(silvopasture);
 }
 
 }
 
 useEffect(() => {

  handleChange(props.variant);

 }, [props.variant])
 
 
 return (
 
 
 <>
 
 
 

 
 
     { group &&
 
 
       <>
       {/*<ImageSlider groups={groups} labels={labels} lbls={lbls} id="a1" />*/}
       {group.images.map((e,idz) => (
           
 
           
           <ImageSlider key={e+idz} groups={e} lbls={group.lbls[idz]} title={group.titles[idz]} />
 
 
 
           ))}
       </>
     }
 
 
 

 
 
 
 
 </>
 
 );
 }
 export default ImageController;