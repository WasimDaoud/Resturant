/****** categories *********************************/
import food from "../IMAGES/BEEF3.png";
import drinks from "../IMAGES/drinks.png";
import sweet from "../IMAGES/sweet.png";
import vegan from "../IMAGES/Vegan-Food.png";

/******************** FOOD-KINDS IMAGES ************************/
import chicken from "../IMAGES/Chicken.png";
import beef from "../IMAGES/BEEF3.png";
import seafood from "../IMAGES/seafood-main.png";
import fastfood from "../IMAGES/burger.png";
/***************************************************/

/******************** DRINKS-KINDS IMAGES ************************/
import hotDrinks from "../IMAGES/hot.png";
import coldDrinks from "../IMAGES/fresh.png";
import alcoholicDrinks from "../IMAGES/cold.png";
import milkDrinks from "../IMAGES/Milkshake-PNG.png";
/*****************************************************************/

export const categries = [
  {
    id: 1,
    title: "Food",
    image: food,
    path: "food",
  },
  {
    id: 2,
    title: "Drinks",
    image: drinks,
    path: "drinks",
  },
  {
    id: 3,
    title: "Sweet",
    image: sweet,
    path: "sweet",
  },
  {
    id: 4,
    title: "Vegan",
    image: vegan,
    path: "vegan",
  },
];
/***************************************************/

/******************** FOOD KINDS ************************/
export const foodkinds = [
  {
    id: 0,
    title: "Chicken",
    image: chicken,
    path: "meals",
  },
  {
    id: 1,
    title: "Beef",
    image: beef,
    path: "meals",
  },
  {
    id: 2,
    title: "Sea Food",
    image: seafood,
    path: "meals",
  },
  {
    id: 3,
    title: "Fast Food",
    image: fastfood,
    path: "meals",
  },
];
/***************************************************/

/***************************************************/
export const drinkkinds = [
  {
    id: 0,
    title: "Hot Drinks",
    image: hotDrinks,
    path: "showDrinks",
  },
  {
    id: 1,
    title: "Cold Drinks",
    image: coldDrinks,
    path: "showDrinks",
  },
  {
    id: 2,
    title: "Alcoholic Drinks",
    image: alcoholicDrinks,
    path: "showDrinks",
  },
  {
    id: 3,
    title: "MilkCheck",
    image: milkDrinks,
    path: "showDrinks",
  },
];
/***************************************************/

const chickenImage = "https://www.themealdb.com/images/ingredients/Chicken.png";
const beefImage =
  "http://localhost:3000/static/media/BEEF3.15a5144a9eb79af14cde.png";
const seafoodImage =
  "http://localhost:3000/static/media/seafood-main.fc5394c547cb9d651eeb.png";
const fastfoodImage =
  "http://localhost:3000/static/media/fast-food-main.305d004412a2f1e34bb3.png";

/*********************    Food   ****************************************************************/
export const foods = [
  {
    id: 0,
    mainimage: chicken,
    category: "food",
    kind: "chicken",
    title: "Stew Chickin",
    description: `
Squeeze lime over chicken and rub well.
Drain off excess lime juice.
Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
Cover and marinate at least one hour.
Heat oil in a dutch pot or large saucepan.
Shake off the seasonings as you remove each piece of chicken from the marinade.
Reserve the marinade for sauce.
Lightly brown the chicken a few pieces at a time in very hot oil.
Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
Drain off excess oil and return the chicken to the pan.
Pour the marinade over the chicken and add the carrots.
Stir and cook over medium heat for 10 minutes.
Mix flour and coconut milk and add to stew, stirring constantly.
Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 50,
    image: "https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg",
  },
  {
    id: 1,
    category: "food",
    kind: "chicken",
    title: "Chicken & Mushroom",
    description: `
Heat oven to 200C/180C fan/gas 6.
Put the butter in a medium-size saucepan and place over a medium heat.
Add the onion and leave to cook for 5 mins, stirring occasionally.
Add the mushrooms to the saucepan with the onions.
Once the onion and mushrooms are almost cooked, stir in the flour  this will make a thick paste called a roux.
If you are using a stock cube, crumble the cube into the roux now and stir well.
Put the roux over a low heat and stir continuously for 2 mins  this will cook the flour and stop the sauce from having a floury taste.
Take the roux off the heat.
Slowly add the fresh stock, if using, or pour in 500ml water if youve used a stock cube, stirring all the time.
Once all the liquid has been added, season with pepper, a pinch of nutmeg and mustard powder.
Put the saucepan back onto a medium heat and slowly bring it to the boil, stirring all the time.
Once the sauce has thickened, place on a very low heat.
Add the cooked chicken and vegetables to the sauce and stir well.
Grease a medium-size ovenproof pie dish with a little butter and pour in the chicken and mushroom filling.
Carefully lay the potatoes on top of the hot-pot filling, overlapping them slightly, almost like a pie top.
Brush the potatoes with a little melted butter and cook in the oven for about 35 mins.
The hot-pot is ready once the potatoes are cooked and golden brown.`,
    price: 65,
    image: "https://www.themealdb.com/images/media/meals/uuuspp1511297945.jpg",
  },
  {
    id: 2,
    category: "food",
    kind: "chicken",
    title: "Chicken Basquaise",
    description: `
Preheat the oven to 180°C/Gas mark 4.
Have the chicken joints ready to cook.
Heat the butter and 3 tbsp olive oil in a flameproof casserole or large frying pan.
Brown the chicken pieces in batches on both sides, seasoning them with salt and pepper as you go.
Don't crowd the pan - fry the chicken in small batches, removing the pieces to kitchen paper as they are done.
Add a little more olive oil to the casserole and fry the onions over a medium heat for 10 minutes, stirring frequently, until softened but not browned.
Add the rest of the oil, then the peppers and cook for another 5 minutes.
Add the chorizo, sun-dried tomatoes and garlic and cook for 2-3 minutes.
Add the rice, stirring to ensure it is well coated in the oil.
Stir in the tomato paste, paprika, bay leaves and chopped thyme.
Pour in the stock and wine.
When the liquid starts to bubble, turn the heat down to a gentle simmer.
Press the rice down into the liquid if it isn't already submerged and place the chicken on top.
Add the lemon wedges and olives around the chicken.
Cover and cook in the oven for 50 minutes.
The rice should be cooked but still have some bite, and the chicken should have juices that run clear when pierced in the thickest part with a knife.
If not, cook for another 5 minutes and check again.`,
    price: 56,
    image: "https://www.themealdb.com/images/media/meals/wruvqv1511880994.jpg",
  },
  {
    id: 3,
    category: "food",
    kind: "chicken",
    title: "Chicken Handi",
    description: `

Take a large pot or wok, big enough to cook all the chicken, and heat the oil in it.
Once the oil is hot, add sliced onion and fry them until deep golden brown.
Then take them out on a plate and set aside.
To the same pot, add the chopped garlic and sauté for a minute.
Then add the chopped tomatoes and cook until tomatoes turn soft.
This would take about 5 minutes.
Then return the fried onion to the pot and stir.
Add ginger paste and sauté well.
Now add the cumin seeds, half of the coriander seeds and chopped green chillies.
Give them a quick stir.
Next goes in the spices – turmeric powder and red chilli powder.
Sauté the spices well for couple of minutes.
Add the chicken pieces to the wok, season it with salt to taste and cook the chicken covered on medium-low heat until the chicken is almost cooked through.
This would take about 15 minutes.
Slowly sautéing the chicken will enhance the flavor, so do not expedite this step by putting it on high heat.
When the oil separates from the spices, add the beaten yogurt keeping the heat on lowest so that the yogurt doesn’t split.
Sprinkle the remaining coriander seeds and add half of the dried fenugreek leaves.
Mix well.
Finally add the cream and give a final mix to combine everything well.
Sprinkle the remaining kasuri methi and garam masala and serve the chicken handi hot with naan or rotis.
Enjoy!`,
    price: 55,
    image: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
  },
  {
    id: 5,
    category: "food",
    kind: "chicken",
    title: "Chicken-alfredo",
    description: `

Heat 1 tablespoon of butter and 2 tablespoons of olive oil in a large skillet over medium-high heat.
Season both sides of each chicken breast with seasoned salt and a pinch of pepper.
Add the chicken to the skillet and cook for 5-7 minutes on each side, or until cooked through.
While the chicken is cooking, bring a large pot of water to a boil.
Season the boiling water with a few generous pinches of kosher salt.
Add the pasta and give it a stir.
Cook, stirring occasionally, until al dente, about 12 minutes.
Reserve 1/2 cup of pasta water before draining the pasta.
Remove the chicken from the pan and transfer it to a cutting board; allow it to rest.
Turn the heat down to medium and dd the remaining 1 tablespoon of butter and olive oil to the same pan you used to cook the chicken.
Add the veggies (minus the garlic) and red pepper flakes to the pan and stir to coat with the oil and butter (refrain from seasoning with salt until the veggies are finished browning).
Cook, stirring often, until the veggies are tender, about 5 minutes.
Add the garlic and a generous pinch of salt and pepper to the pan and cook for 1 minute.
Deglaze the pan with the white wine.
Continue to cook until the wine has reduced by half, about 3 minutes.
Stir in the milk, heavy cream, and reserved pasta water.
Bring the mixture to a gentle boil and allow to simmer and reduce for 2-3 minutes.
Turn off the heat and add the Parmesan cheese and cooked pasta.
Season with salt and pepper to taste.
Garnish with Parmesan cheese and chopped parsley, if desired.
`,
    price: 65,
    image: "https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg",
  },
  {
    id: 6,
    category: "food",
    kind: "chicken",
    title: "Kentucky Chicken",
    description: `

Preheat fryer to 350°F.
Thoroughly mix together all the spice mix ingredients.
Combine spice mix with flour, brown sugar and salt.
Dip chicken pieces in egg white to lightly coat them, then transfer to flour mixture.
Turn a few times and make sure the flour mix is really stuck to the chicken.
Repeat with all the chicken pieces.
Let chicken pieces rest for 5 minutes so crust has a chance to dry a bit.
Fry chicken in batches.
Breasts and wings should take 12-14 minutes, and legs and thighs will need a few more minutes.
Chicken pieces are done when a meat thermometer inserted into the thickest part reads 165°F.
Let chicken drain on a few paper towels when it comes out of the fryer.
Serve hot.`,
    price: 67,
    image: "https://www.themealdb.com/images/media/meals/xqusqy1487348868.jpg",
  },
  {
    id: 7,
    category: "food",
    kind: "chicken",
    title: "Pad See Ew",
    description: `Mix Sauce in small bowl.
Mince garlic into wok with oil.
Place over high heat, when hot, add chicken and Chinese broccoli stems, cook until chicken is light golden.
Push to the side of the wok, crack egg in and scramble.
Don't worry if it sticks to the bottom of the wok - it will char and which adds authentic flavour.
Add noodles, Chinese broccoli leaves and sauce.
Gently mix together until the noodles are stained dark and leaves are wilted.
Serve immediately!
`,
    price: 63,
    image: "https://www.themealdb.com/images/media/meals/uuuspp1468263334.jpg",
  },
  {
    id: 8,
    category: "food",
    kind: "chicken",
    title: "Kung Chicken",
    description: `

Combine the sake or rice wine, soy sauce, sesame oil and cornflour dissolved in water.
Divide mixture in half.
In a glass dish or bowl, combine half of the sake mixture with the chicken pieces and toss to coat.
Cover dish and place in refrigerator for about 30 minutes.
In a medium frying pan, combine remaining sake mixture, chillies, vinegar and sugar.
Mix together and add spring onion, garlic, water chestnuts and peanuts.
Heat sauce slowly over medium heat until aromatic.
Meanwhile, remove chicken from marinade and sauté in a large frying pan until juices run clear.
When sauce is aromatic, add sautéed chicken and let simmer together until sauce thickens.`,
    price: 54,
    image: "https://www.themealdb.com/images/media/meals/1525872624.jpg",
  },
  {
    id: 9,
    category: "food",
    kind: "chicken",
    title: "Piri-Piri Chicken",
    description: `STEP 1 Whizz together all of the marinade ingredients in a small food processor.
Rub the marinade onto the chicken and leave for 1 hour at room temperature.
STEP 2 Heat the oven to 190C/fan 170C/gas 5.
Put the chicken in a roasting tray and cook for 1 hour 20 minutes.
Rest under loose foil for 20 minutes.
While the chicken is resting, mix together the slaw ingredients and season.
Serve the chicken with slaw, fries and condiments`,
    price: 70,
    image: "https://www.themealdb.com/images/media/meals/hglsbl1614346998.jpg",
  },
  {
    id: 10,
    category: "food",
    kind: "chicken",
    title: "Thai Curry",
    description: `Put the potatoes in a pan of boiling water and cook for 5 minutes.
Throw in the beans and cook for a further 3 minutes, by which time both should be just tender but not too soft.
Drain and put to one side.
In a wok or large frying pan, heat the oil until very hot, then drop in the garlic and cook until golden, this should take only a few seconds.
Dont let it go very dark or it will spoil the taste.
Spoon in the curry paste and stir it around for a few seconds to begin to cook the spices and release all the flavours.
Next, pour in the coconut milk and let it come to a bubble.
Stir in the fish sauce and sugar, then the pieces of chicken.
Turn the heat down to a simmer and cook, covered, for about 8 minutes until the chicken is cooked.
Tip in the potatoes and beans and let them warm through in the hot coconut milk, then add a lovely citrussy flavour by stirring in the shredded lime leaves (or lime zest).
The basil leaves go in next, but only leave them briefly on the heat or they will quickly lose their brightness.
Scatter with the lime garnish and serve immediately with boiled rice.`,
    price: 45,
    image: "https://www.themealdb.com/images/media/meals/sstssx1487349585.jpg",
  },
  {
    id: 11,
    mainimage: beefImage,
    category: "food",
    kind: "beef",
    title: "Beef and Mustard",
    description: `Preheat the oven to 150C/300F/Gas 2.
Toss the beef and flour together in a bowl with some salt and black pepper.
Heat a large casserole until hot, add half of the rapeseed oil and enough of the beef to just cover the bottom of the casserole.
Fry until browned on each side, then remove and set aside.
Repeat with the remaining oil and beef.
Return the beef to the pan, add the wine and cook until the volume of liquid has reduced by half, then add the stock, onion, carrots, thyme and mustard, and season well with salt and pepper.
Cover with a lid and place in the oven for two hours.
Remove from the oven, check the seasoning and set aside to cool.
Remove the thyme.
When the beef is cool and you're ready to assemble the pie, preheat the oven to 200C/400F/Gas 6.
Transfer the beef to a pie dish, brush the rim with the beaten egg yolks and lay the pastry over the top.
Brush the top of the pastry with more beaten egg.
Trim the pastry so there is just enough excess to crimp the edges, then place in the oven and bake for 30 minutes, or until the pastry is golden-brown and cooked through.
For the green beans, bring a saucepan of salted water to the boil, add the beans and cook for 4-5 minutes, or until just tender.
Drain and toss with the butter, then season with black pepper.
To serve, place a large spoonful of pie onto each plate with some green beans alongside.`,
    price: 85,
    image: "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",
  },
  {
    id: 12,
    category: "food",
    kind: "beef",
    title: "Beef Roast",
    description: `Cook the Broccoli and Carrots in a pan of boiling water until tender.
Roast the Beef and Potatoes in the oven for 45mins, the potatoes may need to be checked regularly to not overcook.
To make the Yorkshire puddings: Heat oven to 230C/fan 210C/gas 8.
Drizzle a little sunflower oil evenly into 2 x 4-hole Yorkshire pudding tins or a 12-hole non-stick muffin tin and place in the oven to heat through To make the batter, tip 140g plain flour into a bowl and beat in four eggs until smooth.
Gradually add 200ml milk and carry on beating until the mix is completely lump-free.
Season with salt and pepper.
Pour the batter into a jug, then remove the hot tins from the oven.
Carefully and evenly pour the batter into the holes.
Place the tins back in the oven and leave undisturbed for 20-25 mins until the puddings have puffed up and browned.
Serve immediately.
Plate up and add the Gravy as desired.`,
    price: 84,
    image: "https://www.themealdb.com/images/media/meals/ssrrrs1503664277.jpg",
  },
  {
    id: 13,
    category: "food",
    kind: "beef",
    title: "Beef Oyster Pie",
    description: `Season the beef cubes with salt and black pepper.
Heat a tablespoon of oil in the frying pan and fry the meat over a high heat.
Do this in three batches so that you dont overcrowd the pan, transferring the meat to a large flameproof casserole dish once it is browned all over.
Add extra oil if the pan seems dry.
In the same pan, add another tablespoon of oil and cook the shallots for 4-5 minutes, then add the garlic and fry for 30 seconds.
Add the bacon and fry until slightly browned.
Transfer the onion and bacon mixture to the casserole dish and add the herbs.
Preheat the oven to 180C/350F/Gas 4.
Pour the stout into the frying pan and bring to the boil, stirring to lift any stuck-on browned bits from the bottom of the pan.
Pour the stout over the beef in the casserole dish and add the stock.
Cover the casserole and place it in the oven for 1½-2 hours, or until the beef is tender and the sauce is reduced.
Skim off any surface fat, taste and add salt and pepper if necessary, then stir in the cornflour paste.
Put the casserole dish on the hob  dont forget that it will be hot  and simmer for 1-2 minutes, stirring, until thickened.
Leave to cool.
Put the dish on a baking tray and bake for 25-30 minutes, or until the pastry is golden-brown and the filling is bubbling.
`,
    price: 85,
    image: "https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg",
  },
  {
    id: 14,
    category: "food",
    kind: "beef",
    title: "Beef Stew",
    description: `Preheat the oven to 180C/350F/Gas 4.
For the beef stew, heat the oil and butter in an ovenproof casserole and fry the beef until browned on all sides.
Sprinkle over the flour and cook for a further 2-3 minutes.
Add the garlic and all the vegetables and fry for 1-2 minutes.
Stir in the wine, stock and herbs, then add the Worcestershire sauce and balsamic vinegar, to taste.
Season with salt and freshly ground black pepper.
Cover with a lid, transfer to the oven and cook for about two hours, or until the meat is tender.
For the dumplings, sift the flour, baking powder and salt into a bowl.
Add the suet and enough water to form a thick dough.
With floured hands, roll spoonfuls of the dough into small balls.
After two hours, remove the lid from the stew and place the balls on top of the stew.
Cover, return to the oven and cook for a further 20 minutes, or until the dumplings have swollen and are tender.
(If you prefer your dumplings with a golden top, leave the lid off when returning to the oven.
) To serve, place a spoonful of mashed potato onto each of four serving plates and top with the stew and dumplings.
Sprinkle with chopped parsley.`,
    price: 77,
    image: "https://www.themealdb.com/images/media/meals/uyqrrv1511553350.jpg",
  },
  {
    id: 15,
    category: "food",
    kind: "beef",
    title: "Beef Lo Mein",
    description: `STEP 1 - MARINATING THE BEEF In a bowl, add the beef, salt, 1 pinch white pepper, 1 Teaspoon sesame seed oil, 1/2 egg, corn starch,1 Tablespoon of oil and mix together.
STEP 2 - BOILING THE THE NOODLES In a 6 qt pot add your noodles to boiling water until the noodles are submerged and boil on high heat for 10 seconds.
After your noodles is done boiling strain and cool with cold water.
STEP 3 - STIR FRY Add 2 Tablespoons of oil, beef and cook on high heat untill beef is medium cooked.
Set the cooked beef aside In a wok add 2 Tablespoon of oil, onions, minced garlic, minced ginger, bean sprouts, mushrooms, peapods and 1.
5 cups of water or until the vegetables are submerged in water.
Add the noodles to wok To make the sauce, add oyster sauce, 1 pinch white pepper, 1 teaspoon sesame seed oil, sugar, and 1 Teaspoon of soy sauce.
Next add the beef to wok and stir-fry`,
    price: 80,
    image: "https://www.themealdb.com/images/media/meals/1529444830.jpg",
  },
  {
    id: 17,
    category: "food",
    kind: "beef",
    title: "Bitterballen",
    description: `Melt the butter in a skillet or pan.
When melted, add the flour little by little and stir into a thick paste.
Slowly stir in the stock, making sure the roux absorbs the liquid.
Simmer for a couple of minutes on a low heat while you stir in the onion, parsley and the shredded meat.
The mixture should thicken and turn into a heavy, thick sauce.
Pour the mixture into a shallow container, cover and refrigerate for several hours, or until the sauce has solidified.
Take a heaping tablespoon of the cold, thick sauce and quickly roll it into a small ball.
Roll lightly through the flour, then the egg and finally the breadcrumbs.
Make sure that the egg covers the whole surface of the bitterbal.
When done, refrigerate the snacks while the oil in your fryer heats up to 190C (375F).
Fry four bitterballen at a time, until golden.
Serve on a plate with a nice grainy or spicy mustard.
`,
    price: 87,
    image: "https://www.themealdb.com/images/media/meals/lhqev81565090111.jpg",
  },
  {
    id: 18,
    category: "food",
    kind: "beef",
    title: "Braised Chilli",
    description: `Preheat the oven to 120C/225F/gas mark 1.
Take the meat out of the fridge to de-chill.
Pulse the onions and garlic in a food processor until finely chopped.
Heat 2 tbsp olive oil in a large casserole and sear the meat on all sides until golden.
Set to one side and add another small slug of oil to brown the chorizo.
Remove and add the onion and garlic, spices, herbs and chillies then cook until soft in the chorizo oil.
Season with salt and pepper and add the vinegar, tomatoes, ketchup and sugar.
Put all the meat back into the pot with 400ml water (or red wine if you prefer), bring up to a simmer and cook, covered, in the low oven.
After 2 hours, check the meat and add the beans.
Cook for a further hour and just before serving, pull the meat apart with a pair of forks.
`,
    price: 70,
    image: "https://www.themealdb.com/images/media/meals/xr0n4r1576788363.jpg",
  },
  {
    id: 19,
    mainimage: seafoodImage,
    category: "food",
    kind: "seafood",
    title: "Baked salmon",
    description: `Heat oven to 180C/fan 160C/gas 4.
Trim the fronds from the fennel and set aside.
Cut the fennel bulbs in half, then cut each half into 3 wedges.
Cook in boiling salted water for 10 mins, then drain well.
Chop the fennel fronds roughly, then mix with the parsley and lemon zest.
Spread the drained fennel over a shallow ovenproof dish, then add the tomatoes.
Drizzle with olive oil, then bake for 10 mins.
Nestle the salmon among the veg, sprinkle with lemon juice, then bake 15 mins more until the fish is just cooked.
Scatter over the parsley and serve.
`,
    price: 100,
    image: "https://www.themealdb.com/images/media/meals/1548772327.jpg",
  },
  {
    id: 21,
    category: "food",
    kind: "seafood",
    title: "Teriyaki Salmon",
    description: `Mix all the ingredients in the Honey Teriyaki Glaze together.
Whisk to blend well.
Combine the salmon and the Glaze together.
Heat up a skillet on medium-low heat.
Add the oil, Pan-fry the salmon on both sides until its completely cooked inside and the glaze thickens.
Garnish `,
    price: 105,
    image: "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg",
  },
  {
    id: 22,
    category: "food",
    kind: "seafood",
    title: "Salmon Avocado",
    description: `Season the salmon, then rub with oil.
Mix the dressing ingredients together.
Halve, stone, peel and slice the avocados.
Halve and quarter the cucumber lengthways, then cut into slices.
Divide salad, avocado and cucumber between four plates, then drizzle with half the dressing.
Heat a non-stick pan.
Add the salmon and fry for 3-4 mins on each side until crisp but still moist inside.
Put a salmon fillet on top of each salad and drizzle over the remaining dressing.
Serve warm.
`,
    price: 91,
    image: "https://www.themealdb.com/images/media/meals/1549542994.jpg",
  },
  {
    id: 23,
    category: "food",
    kind: "seafood",
    title: "Salmon Risotto",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 99,
    image: "https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg",
  },
  {
    id: 24,
    category: "food",
    kind: "beef",
    title: "Massaman Curry",
    description: `Heat oven to 200C/180C fan/gas 6, then roast the peanuts on a baking tray for 5 mins until golden brown.
When cool enough to handle, roughly chop.
Reduce oven to 180C/160C fan/gas 4.
Heat 2 tbsp coconut cream in a large casserole dish with a lid.
Add the curry paste and fry for 1 min, then stir in the beef and fry until well coated and sealed.
Stir in the rest of the coconut with half a can of water, the potatoes, onion, lime leaves, cinnamon, tamarind, sugar, fish sauce and most of the peanuts.
Bring to a simmer, then cover and cook for 2 hrs in the oven until the beef is tender.
Sprinkle with sliced chilli and the remaining peanuts, then serve straight from the dish with jasmine rice`,
    price: 68,
    image: "https://www.themealdb.com/images/media/meals/tvttqv1504640475.jpg",
  },
  {
    id: 25,
    category: "food",
    kind: "beef",
    title: "Moussaka",
    description: `Heat the grill to high.
Brown the beef in a deep ovenproof frying pan over a high heat for 5 mins.
Meanwhile, prick the aubergine with a fork, then microwave on High for 3-5 mins until soft.
Mix the yogurt, egg and parmesan together, then add a little seasoning.
Stir the tomatoes, purée and potatoes in with the beef with some seasoning and heat through.
Smooth the surface of the beef mixture with the back of a spoon, then slice the cooked aubergine and arrange on top.
Pour the yogurt mixture over the aubergines, smooth out evenly, then grill until the topping has set and turned golden.`,
    price: 88,
    image: "https://www.themealdb.com/images/media/meals/ctg8jd1585563097.jpg",
  },
  {
    id: 27,
    category: "food",
    kind: "beef",
    title: "Steak and kindney",
    description: `Preheat the oven to 220C/425F/Gas 7 Heat the vegetable oil in a large frying pan, and brown the beef all over.
(You may need to do this in batches.
) Set aside, then brown the kidneys on both sides in the same pan.
Add the onions and cook for 3-4 minutes.
Return the beef to the pan, sprinkle flour over and coat the meat and onions Add the stock to the pan, stir well and bring to the boil.
Turn the heat down and simmer for 1½ hours without a lid.
If the liquid evaporates too much, add more stock.
Remove from the heat.
Add salt, pepper and Worcestershire sauce and allow to cool completely.
Place the cooked meat mixture into a pie dish.
Roll out the pastry to 5mm/¼in thick and 5cm/2in larger than the dish you are using.
Using a rolling pin, lift the pastry and place it over the top of the pie dish.
Trim and crimp the edges with your fingers and thumb.
Brush the surface with the beaten egg mixture and bake for 30-40 minutes until golden-brown and puffed.
Serve with creamy mash and steamed vegetables to soak up the gravy.

`,
    price: 93,
    image: "https://www.themealdb.com/images/media/meals/qysyss1511558054.jpg",
  },
  {
    id: 28,
    category: "food",
    kind: "beef",
    title: "Szechuan Beef",
    description: `STEP 1 - MARINATING THE BEEF In a bowl, add the beef, salt, sesame seed oil, white pepper, egg white, 2 Tablespoon of corn starch and 1 Tablespoon of oil.
STEP 2 - STIR FRY First Cook the beef by adding 2 Tablespoon of oil until the beef is golden brown.
Set the beef aside In a wok add 1 Tablespoon of oil, minced ginger, minced garlic and stir-fry for few seconds.
Next add all of the vegetables and then add sherry cooking wine and 1 cup of water.
To make the sauce add oyster sauce, hot pepper sauce, and sugar.
add the cooked beef and 1 spoon of soy sauce To thicken the sauce, whisk together 1 Tablespoon of cornstarch and 2 Tablespoon of water in a bowl and slowly add to your stir-fry until it's the right thickness.`,
    price: 76,
    image: "https://www.themealdb.com/images/media/meals/1529443236.jpg",
  },
  {
    id: 35,
    category: "food",
    kind: "chicken",
    title: "Burek",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 80,
    image: "https://www.themealdb.com/images/media/meals/d8f6qx1604182128.jpg",
  },
  {
    id: 36,
    category: "food",
    kind: "chicken",
    title: "Chivito Uruguayo",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 71,
    image: "https://www.themealdb.com/images/media/meals/1529442316.jpg",
  },
  {
    id: 37,
    category: "food",
    kind: "chicken",
    title: "Croatian Bean Stew",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 72,
    image: "https://www.themealdb.com/images/media/meals/atd5sh1583188467.jpg",
  },
  {
    id: 39,
    category: "food",
    kind: "chicken",
    title: "Fettuccine Alfredo",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 78,
    image: "https://www.themealdb.com/images/media/meals/h3ijwo1581013377.jpg",
  },
  {
    id: 40,
    mainimage: fastfood,
    category: "food",
    kind: "fastfood",
    title: "Soshi",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 74,
    image: "https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg",
  },
  {
    id: 41,
    category: "food",
    kind: "beef",
    title: "Mushroom Soup",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 80,
    image: "https://www.themealdb.com/images/media/meals/st1ifa1583267248.jpg",
  },
  {
    id: 42,
    category: "food",
    kind: "chicken",
    title: "Sushi",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 85,
    image: "https://www.themealdb.com/images/media/meals/k29viq1585565980.jpg",
  },
  {
    id: 43,
    category: "food",
    kind: "beef",
    title: "Walnut Roll Gužvara",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 84,
    image: "https://www.themealdb.com/images/media/meals/qqwypw1504642429.jpg",
  },
  {
    id: 44,
    category: "food",
    kind: "fastfood",
    title: "Cheese&mashrome",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 54,
    image:
      "https://mycyprusinsider.com/wp-content/uploads/2016/06/pizza-cover-photo-730x445.jpg",
  },
  {
    id: 45,
    category: "food",
    kind: "fastfood",
    title: "Cheese Pizza",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 40,
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/01/91/d0/28/utterly-delicious-pizza.jpg",
  },
  {
    id: 46,
    category: "food",
    kind: "fastfood",
    title: "Pipperoni Pizza",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 50,
    image:
      "https://www.waiter.com/blog/wp-content/uploads/2015/08/Pepperoni-Pizza-2-1024x683.jpg",
  },
  {
    id: 48,
    category: "food",
    kind: "fastfood",
    title: "Four Season",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 41,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaQ9MydvJ-37yz_5ayM0RDOc8mktmN8XRgto_2F54jgoMcxpdCicS9toZ_4YEAVfdOuJ4&usqp=CAU",
  },
  {
    id: 49,
    category: "food",
    kind: "fastfood",
    title: "Macarona Bechamel",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 39,
    image:
      "https://www.chocolatesandchai.com/wp-content/uploads/2022/02/Egyptian-Macarona-Bechamel-Featured.jpg",
  },
  {
    id: 50,
    category: "food",
    kind: "fastfood",
    title: "Burger",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 33,
    image:
      "https://lacuisineensemble.fr/wp-content/uploads/2022/02/recette-burger-maison.jpg",
  },
  {
    id: 51,
    category: "food",
    kind: "fastfood",
    title: "American Burger",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 40,
    image:
      "https://www.provisioneronline.com/ext/resources/Issues/IP/2020/February/0220IP_productfocus.jpg?height=418&t=1582215080&width=800",
  },
  {
    id: 52,
    category: "food",
    kind: "fastfood",
    title: "Burger",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 39,
    image:
      "https://www.localguidesconnect.com/t5/image/serverpage/image-id/598117iF7081563757AFAF2/image-size/medium?v=v2&px=400",
  },
  {
    id: 54,
    category: "food",
    kind: "fastfood",
    title: "Fries",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 23,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Tsbkd4BGRz5GXvPQYQDrkFIDcBg35P-r6OJfIVPC5xQ7uGAWg9fWIzutpEL__1RM_Yg&usqp=CAU",
  },
  {
    id: 55,
    category: "food",
    kind: "fastfood",
    title: "French Fries",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 25,
    image:
      "https://recipes.net/wp-content/uploads/2020/04/loaded-french-fries.jpg",
  },
  {
    id: 56,
    category: "food",
    kind: "seafood",
    title: "Dish",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 40,
    image: "https://thumbs.dreamstime.com/b/seafood-dish-19744961.jpg",
  },
  {
    id: 57,
    category: "food",
    kind: "seafood",
    title: "Lobester",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 50,
    image: "https://assets3.thrillist.com/v1/image/3097381/1200x600/scale;",
  },
  {
    id: 58,
    category: "food",
    kind: "seafood",
    title: "Salmon",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 23,
    image:
      "https://images.immediate.co.uk/production/volatile/sites/2/2020/08/OLI-0920-Healthy-MisoSalmon_05631_preview-ca3e82c.jpg?quality=90&crop=2px,746px,1195px,514px&resize=556,505",
  },
  {
    id: 59,
    category: "food",
    kind: "seafood",
    title: "Grilled Salmon",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 33,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL5rFyt9ZPdG84lA3LuwDeLBNeql75IVJSuztpkSzk4Y_LsdyH675FxS3YC65Tz9JmJeA&usqp=CAU",
  },
  {
    id: 60,
    category: "food",
    kind: "vegan",
    title: "Vegan Meal",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 43,
    image:
      "https://cdn.loveandlemons.com/wp-content/uploads/2020/12/plant-based-recipes-500x500.jpg",
  },
  {
    id: 61,
    category: "food",
    kind: "vegan",
    title: "Vegan Meal",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 39,
    image: "https://ohsheglows.com/gs_images/2014/01/veganbowlsquare-45461.jpg",
  },
  {
    id: 62,
    category: "food",
    kind: "vegan",
    title: "Vegan Meal",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 43,
    image:
      "https://img.buzzfeed.com/buzzfeed-static/static/2018-01/29/14/asset/buzzfeed-prod-fastlane-02/sub-buzz-30373-1517254574-2.jpg",
  },
  {
    id: 63,
    category: "food",
    kind: "fastfood",
    title: "French Burger",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 55,
    image:
      "https://happilyunprocessed.com/wp-content/uploads/2022/11/Juiciest-Burger-Youll-Ever-eat-2.jpg",
  },
  {
    id: 64,
    category: "food",
    kind: "fastfood",
    title: "Monistor Borger",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 45,
    image:
      "http://flavorsoflife.com.ph/wp-content/uploads/2014/09/Monster-Double-Burger.jpg",
  },
  {
    id: 65,
    category: "food",
    kind: "fastfood",
    title: "Extra Cheese ",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 35,
    image:
      "https://www.thecountrycook.net/wp-content/uploads/2021/08/1st-image-Homemade-Steakburger.jpg",
  },
  {
    id: 66,
    category: "food",
    kind: "fastfood",
    title: "Pizza",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 35,
    image:
      "https://c4.wallpaperflare.com/wallpaper/124/785/150/pizza-delicious-piece-cheese-wallpaper-preview.jpg",
  },
  {
    id: 67,
    category: "food",
    kind: "fastfood",
    title: "Pizza",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 75,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCvZ_nqNyKHIS-AYjt5r6CphlUDc25rdWQSHge8-JmRclqAKD-79E-Dft6y0OYtEHZFSA&usqp=CAU",
  },
  {
    id: 68,
    category: "food",
    kind: "fastfood",
    title: "French Fries",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 25,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY5TBMQ3LoShERGuVWc_LlMbJSV3QWOeummw&usqp=CAU",
  },
  {
    id: 69,
    category: "food",
    kind: "fastfood",
    title: "Beef Porito",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 55,
    image:
      "https://thekitchencommunity.org/wp-content/uploads/2021/02/Beef-Burrito-Recipe.jpg",
  },
  {
    id: 70,
    category: "food",
    kind: "fastfood",
    title: "French Porito",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 45,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs3A21g4C6Inbq0XBC-I5mIYCts3GOlTHLDpiKJSHQkuPu7BeK7Vc2yKuD04tA1Hv3HXM&usqp=CAU",
  },
  {
    id: 71,
    category: "food",
    kind: "fastfood",
    title: "Hotdog",
    description: `Drain off excess lime juice.
    Combine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces.
    Cover and marinate at least one hour.
    Heat oil in a dutch pot or large saucepan.
    Shake off the seasonings as you remove each piece of chicken from the marinade.
    Reserve the marinade for sauce.
    Lightly brown the chicken a few pieces at a time in very hot oil.
    Place browned chicken pieces on a plate to rest while you brown the remaining pieces.
    Drain off excess oil and return the chicken to the pan.
    Pour the marinade over the chicken and add the carrots.
    Stir and cook over medium heat for 10 minutes.
    Mix flour and coconut milk and add to stew, stirring constantly.
    Turn heat down to minimum and cook another 20 minutes or until tender.`,
    price: 35,
    image:
      "https://recipes.net/wp-content/uploads/portal_files/recipes_net_posts/2021-09/Bacon-Wrapped-Hot-Dogs-Recipe.jpg",
  },
  {
    id: 72,
    category: "food",
    kind: "beef",
    title: "Steak",
    description: `Saute the onions in the 3-4 tablespoons olive oil Add the beef cubes or the chicken cutlets, sear for 3-4 min on each side Add 1 liter of water or just enough to cover the meat Cook over medium heat until the meat is done (I usually do this in the pressure cooker and press them for 5 min) Add the frozen mulukhyia and stir until it thaws completely and then comes to a boil In another pan add the 1/4 to 1/2 cup of olive oil and the cloves of garlic and cook over medium low heat until you can smell the garlic (don’t brown it, it will become bitter) Add the oil and garlic to the mulukhyia and lower the heat and simmer for 5-10 minutes Add salt to taste Serve with a generous amount of lemon juice.
You can serve it with some short grain rice or some pita bread`,
    price: 100,
    image:
      "https://simply-delicious-food.com/wp-content/uploads/2019/06/grilled-steak-with-blistered-tomatoes-1.jpg",
  },
  {
    id: 73,
    category: "food",
    kind: "beef",
    title: "Steak",
    description: `Saute the onions in the 3-4 tablespoons olive oil Add the beef cubes or the chicken cutlets, sear for 3-4 min on each side Add 1 liter of water or just enough to cover the meat Cook over medium heat until the meat is done (I usually do this in the pressure cooker and press them for 5 min) Add the frozen mulukhyia and stir until it thaws completely and then comes to a boil In another pan add the 1/4 to 1/2 cup of olive oil and the cloves of garlic and cook over medium low heat until you can smell the garlic (don’t brown it, it will become bitter) Add the oil and garlic to the mulukhyia and lower the heat and simmer for 5-10 minutes Add salt to taste Serve with a generous amount of lemon juice.
You can serve it with some short grain rice or some pita bread`,
    price: 95,
    image:
      "https://www.spendwithpennies.com/wp-content/uploads/2022/08/1200-Perfect-Ribeye-Steak-SpendWithPennies.jpg",
  },
  {
    id: 74,
    category: "food",
    kind: "beef",
    title: "Steak",
    description: `Saute the onions in the 3-4 tablespoons olive oil Add the beef cubes or the chicken cutlets, sear for 3-4 min on each side Add 1 liter of water or just enough to cover the meat Cook over medium heat until the meat is done (I usually do this in the pressure cooker and press them for 5 min) Add the frozen mulukhyia and stir until it thaws completely and then comes to a boil In another pan add the 1/4 to 1/2 cup of olive oil and the cloves of garlic and cook over medium low heat until you can smell the garlic (don’t brown it, it will become bitter) Add the oil and garlic to the mulukhyia and lower the heat and simmer for 5-10 minutes Add salt to taste Serve with a generous amount of lemon juice.
You can serve it with some short grain rice or some pita bread`,
    price: 85,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXc-wTtugzRpHEzgEeQErOWQZc3HqVCPNXxoICaJ0Cg6hW-DnQttMl_023jWISHcyhSd0&usqp=CAU",
  },
  {
    id: 75,
    category: "food",
    kind: "beef",
    title: "Steak",
    description: `Saute the onions in the 3-4 tablespoons olive oil Add the beef cubes or the chicken cutlets, sear for 3-4 min on each side Add 1 liter of water or just enough to cover the meat Cook over medium heat until the meat is done (I usually do this in the pressure cooker and press them for 5 min) Add the frozen mulukhyia and stir until it thaws completely and then comes to a boil In another pan add the 1/4 to 1/2 cup of olive oil and the cloves of garlic and cook over medium low heat until you can smell the garlic (don’t brown it, it will become bitter) Add the oil and garlic to the mulukhyia and lower the heat and simmer for 5-10 minutes Add salt to taste Serve with a generous amount of lemon juice.
You can serve it with some short grain rice or some pita bread`,
    price: 85,
    image:
      "https://www.giangiskitchen.com/wp-content/uploads/2017/05/Rib-Eye-Steaks-with-Tomatoes-Relish-copy.jpg",
  },
  {
    id: 76,
    category: "food",
    kind: "beef",
    title: "Steak",
    description: `Saute the onions in the 3-4 tablespoons olive oil Add the beef cubes or the chicken cutlets, sear for 3-4 min on each side Add 1 liter of water or just enough to cover the meat Cook over medium heat until the meat is done (I usually do this in the pressure cooker and press them for 5 min) Add the frozen mulukhyia and stir until it thaws completely and then comes to a boil In another pan add the 1/4 to 1/2 cup of olive oil and the cloves of garlic and cook over medium low heat until you can smell the garlic (don’t brown it, it will become bitter) Add the oil and garlic to the mulukhyia and lower the heat and simmer for 5-10 minutes Add salt to taste Serve with a generous amount of lemon juice.
You can serve it with some short grain rice or some pita bread`,
    price: 95,
    image:
      "https://www.mychicagosteak.com/steak-university/wp-content/uploads/2023/02/tender-ribeye-steak.jpg",
  },
  {
    id: 77,
    category: "food",
    kind: "beef",
    title: "Steak",
    description: `Saute the onions in the 3-4 tablespoons olive oil Add the beef cubes or the chicken cutlets, sear for 3-4 min on each side Add 1 liter of water or just enough to cover the meat Cook over medium heat until the meat is done (I usually do this in the pressure cooker and press them for 5 min) Add the frozen mulukhyia and stir until it thaws completely and then comes to a boil In another pan add the 1/4 to 1/2 cup of olive oil and the cloves of garlic and cook over medium low heat until you can smell the garlic (don’t brown it, it will become bitter) Add the oil and garlic to the mulukhyia and lower the heat and simmer for 5-10 minutes Add salt to taste Serve with a generous amount of lemon juice.
You can serve it with some short grain rice or some pita bread`,
    price: 88,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf-2jmM2n4XAuPb5zgGuhBMbeRUpHKRV04Ew&usqp=CAU",
  },
  {
    id: 78,
    category: "food",
    kind: "beef",
    title: "Steak",
    description: `Saute the onions in the 3-4 tablespoons olive oil Add the beef cubes or the chicken cutlets, sear for 3-4 min on each side Add 1 liter of water or just enough to cover the meat Cook over medium heat until the meat is done (I usually do this in the pressure cooker and press them for 5 min) Add the frozen mulukhyia and stir until it thaws completely and then comes to a boil In another pan add the 1/4 to 1/2 cup of olive oil and the cloves of garlic and cook over medium low heat until you can smell the garlic (don’t brown it, it will become bitter) Add the oil and garlic to the mulukhyia and lower the heat and simmer for 5-10 minutes Add salt to taste Serve with a generous amount of lemon juice.
You can serve it with some short grain rice or some pita bread`,
    price: 79,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAw-iAZn6BJH9gIj_wFlRQpd6D8JcQasPhSL2dygPMcqvgob9hhXexmx_88WE-eARYEAE&usqp=CAU",
  },
  {
    id: 79,
    category: "food",
    kind: "seafood",
    title: "Fish",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 99,
    image:
      "https://thumbs.dreamstime.com/z/homemade-spicy-traditional-fried-fish-served-green-salads-rustic-wooden-table-delicious-fried-fish-fresh-salads-140768219.jpg",
  },
  {
    id: 80,
    category: "food",
    kind: "seafood",
    title: "Fish",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 79,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qbjl5mTrEeqJI_f_1SkhyC0GndCWcK6Ub-EKu8mWlnrmL4yfWheh88z1H10Or4_P22c&usqp=CAU",
  },
  {
    id: 81,
    category: "food",
    kind: "seafood",
    title: "Fish",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 90,
    image:
      "https://www.lacademie.com/wp-content/uploads/2022/04/delicious-mexican-fish.jpg",
  },
  {
    id: 82,
    category: "food",
    kind: "seafood",
    title: "Fish",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 94,
    image:
      "https://i.pinimg.com/originals/ea/3f/a4/ea3fa41cb5111a8297eb420ed4fb9aed.jpg",
  },
  {
    id: 83,
    category: "food",
    kind: "seafood",
    title: "Lobester",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 79,
    image:
      "https://www.thespruceeats.com/thmb/FxUihtnK8lgLtI2iNu6Lgl-A5mA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-baked-stuffed-lobster-recipe-1808994-hero-01-f8ec7396623d4d4eaf49d73a4bd9795c.jpg",
  },
  {
    id: 84,
    category: "food",
    kind: "seafood",
    title: "Lobester",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 99,
    image:
      "https://insanelygoodrecipes.com/wp-content/uploads/2020/03/Lobster-1024x536.png",
  },
  {
    id: 85,
    category: "food",
    kind: "seafood",
    title: "Lobester",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 90,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL5EbzODEiqbWFB5ltHaGwWOLvPoqgNq3qALIn6kuxTZP0uDg8i5bkvi6qjN3Lmh_SDIk&usqp=CAU",
  },
  {
    id: 86,
    category: "food",
    kind: "seafood",
    title: "Lobester",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 89,
    image:
      "https://alaskan-seafood.azureedge.net/img/lobster-tails-for-sale-large.png",
  },
  {
    id: 87,
    category: "food",
    kind: "chicken",
    title: "chicken",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 79,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCqt6eSWxv0_dY3TQET32-pOorjLv4Id4alA&usqp=CAU",
  },
  {
    id: 88,
    mainimage: hotDrinks /******************************************/,
    category: "drink",
    kind: "hot",
    title: "DELICIOUS HOT COCOA",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 12,
    image:
      "https://i2.wp.com/www.johfrej.com/wp-content/uploads/2016/12/mint-hot-chocolate.jpg?fit=630%2C500&ssl=1",
  },
  {
    id: 89,
    category: "drink",
    kind: "hot",
    title: "Hot Chocolate",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 79,
    image:
      "https://cookingtv-channel.com/wp-content/uploads/22658431_10156047424892437_96411579024670720_n-1.jpg",
  },
  {
    id: 90,
    category: "drink",
    kind: "hot",
    title: "hot tea",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 8,
    image: "https://www.operagardenhotel.hu/uploads/hot%20tea.jpg",
  },
  {
    id: 91,
    category: "drink",
    kind: "hot",
    title: "Green Tea",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 7,
    image:
      "https://c.ndtvimg.com/2019-03/6h6v6png_green-tea_625x300_08_March_19.jpg",
  },
  {
    id: 92,
    category: "drink",
    kind: "hot",
    title: "Green Tea",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 5,
    image:
      "https://c.ndtvimg.com/2022-04/q1eefqk_green-tea_625x300_28_April_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
  },
  {
    id: 93,
    category: "drink",
    kind: "hot",
    title: "cappuccino",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 15,
    image:
      "https://previews.123rf.com/images/3000ad/3000ad1610/3000ad161000013/65037224-delicious-cappuccino-cup-with-cream-froth-and-chocolate-design.jpg",
  },
  {
    id: 94,
    category: "drink",
    kind: "hot",
    title: "cappuccino",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 17,
    image:
      "https://static8.depositphotos.com/1001651/911/i/950/depositphotos_9116364-stock-photo-cappuccino-coffee-cup.jpg",
  },
  {
    id: 95,
    category: "drink",
    kind: "hot",
    title: "Milo",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 79,
    image:
      "https://i0.wp.com/thenotsocreativecook.com/wp-content/uploads/2019/04/Milo-Dinosaur-5.jpg?resize=700%2C935",
  },
  {
    id: 96,
    mainimage: coldDrinks,
    category: "drink",
    kind: "cold",
    title: "Fruity summer cooler",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 12,
    image:
      "https://img.delicious.com.au/6tS9cdjX/del/2020/02/watermelon-and-gin-slushies-126036-2.jpg",
  },
  {
    id: 97,
    category: "drink",
    kind: "cold",
    title: "Ice Tea",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 14,
    image:
      "https://img.delicious.com.au/Vdvug6BH/del/2015/10/ice-tea-mocktail-19140-2.jpg",
  },
  {
    id: 98,
    category: "drink",
    kind: "cold",
    title: "Orange and basil Pimms",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 19,
    image:
      "https://img.delicious.com.au/6Ukj2y-s/del/2016/04/orange-and-basil-pimms-29490-1.jpg",
  },
  {
    id: 99,
    category: "drink",
    kind: "cold",
    title: "Rhubarb spritz",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 15,
    image:
      "https://img.delicious.com.au/U0BrPrLr/del/2015/10/rhubarb-spritz-14370-1.jpg",
  },
  {
    id: 100,
    category: "drink",
    kind: "cold",
    title: "Grilled pineapple mojitos",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 11,
    image:
      "https://img.delicious.com.au/pZ8ex4Zo/del/2016/10/grilled-pineapple-mojitos-37947-2.jpg",
  },
  {
    id: 101,
    category: "drink",
    kind: "cold",
    title: "Passionfruit cocktail",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 13,
    image:
      "https://img.delicious.com.au/1ZLuviB9/del/2015/10/passionfruit-cocktail-19087-2.jpg",
  },
  {
    id: 102,
    category: "drink",
    kind: "cold",
    title: "Gin cocktail",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 19,
    image:
      "https://img.delicious.com.au/CTpGh2Ec/del/2015/10/gin-cocktail-19092-2.jpg",
  },
  {
    id: 103,
    category: "drink",
    kind: "cold",
    title: "Prosecco and mint cocktail",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 14,
    image:
      "https://img.delicious.com.au/2eALmUFk/del/2015/10/raspberry-prosecco-and-mint-cocktail-14192-2.jpg",
  },
  {
    id: 104,
    mainimage: milkDrinks /*****************************************************/,
    category: "drink",
    kind: "milk",
    title: "Chocolate Milkshake",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 14,
    image: "https://c1.staticflickr.com/1/478/31714408004_f68cec37ca_c.jpg",
  },
  {
    id: 104,
    category: "drink",
    kind: "milk",
    title: " Milkshake",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 18,
    image:
      "https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80",
  },
  {
    id: 105,
    category: "drink",
    kind: "milk",
    title: "Orio Milkshake",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 12,
    image:
      "https://images.unsplash.com/photo-1586917049334-0f99406d8a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 107,
    category: "drink",
    kind: "milk",
    title: "Milkshake",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 17,
    image:
      "https://images.unsplash.com/photo-1611928237590-087afc90c6fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 106,
    category: "drink",
    kind: "milk",
    title: "Milkshake",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 19,
    image:
      "https://images.unsplash.com/photo-1619158403521-ed9795026d47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 108,
    category: "drink",
    kind: "milk",
    title: "Milkshake",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 24,
    image:
      "https://images.unsplash.com/photo-1594488506255-a8bbfdeedbaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 109,
    category: "drink",
    kind: "milk",
    title: "Milkshake",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 18,
    image:
      "https://images.unsplash.com/photo-1629993470807-33bfa488153b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 110,
    category: "drink",
    kind: "milk",
    title: "Milkshake",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 14,
    image:
      "https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 111,
    mainimage: alcoholicDrinks,
    category: "drink",
    kind: "alcoholic",
    title: "Den klassiske",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 14,
    image:
      "https://drinksguide.dk/wp-content/uploads/2023/01/Opskrift-paa-Old-Fashioned.jpg",
  },
  {
    id: 112,
    category: "drink",
    kind: "alcoholic",
    title: "WISCONSINITE",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 14,
    image:
      "https://cdn.tasteatlas.com//images/ingredients/1d7b228e840b4c6dbae16f752ab38033.jpg?mw=1300",
  },
  {
    id: 113,
    category: "drink",
    kind: "alcoholic",
    title: "",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 14,
    image:
      "https://img.huffingtonpost.com/asset/61b2785e200000b8f98d48e9.jpeg?cache=8OQUmahjC5&ops=scalefit_720_noupscale&format=webp",
  },
  {
    id: 114,
    category: "drink",
    kind: "alcoholic",
    title: "Vodka",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 14,
    image:
      "https://www.thespruceeats.com/thmb/jLhgY30OyjXouqMPXauyHD8h0bk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Berried-Treasure-56a16f9d3df78cf7726a9ffe.jpg",
  },
  {
    id: 115,
    category: "drink",
    kind: "alcoholic",
    title: "Vodka",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 14,
    image:
      "https://www.thespruceeats.com/thmb/2HGNERqZY8rT3dTOyM_da-w1mGc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/woodford-reserve-belmont-jewel-recipe-761402-hero-5be1f8c8c9e77c00512012c6.jpg",
  },
  {
    id: 116,
    category: "drink",
    kind: "alcoholic",
    title: "Whiskey",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 14,
    image:
      "https://www.thespruceeats.com/thmb/41QTS4mfDoXEvqFOfOYdj5_UeMw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/baltimore-bang-56a174073df78cf7726ac5aa.jpg",
  },
  {
    id: 117,
    category: "drink",
    kind: "alcoholic",
    title: "Whiskey",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 14,
    image:
      "https://www.thespruceeats.com/thmb/_3yZTR3nix59_v5XHYsKCXRLW2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TullyTeaCocktail-GettyImages-168280337-58a4aff55f9b58819cf54ad1.jpg",
  },
  {
    id: 118,
    category: "drink",
    kind: "alcoholic",
    title: "Whiskey",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 14,
    image:
      "https://www.thespruceeats.com/thmb/Jl01cJ0btY5Ket9eFK835xZQhxs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/New-OldFashioned-Cocktail--001-bb6ff780be054af5b6dd53f8075d5238.jpg",
  },
  {
    id: 119,
    mainimage: vegan,
    category: "food",
    kind: "vegan",
    title: "Vegan Food",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 23,
    image:
      "https://vegnews.com/media/W1siZiIsIjI4MTk4L1ZlZ05ld3MuQmxhY2tCZWFuU3R1ZmZlZFN3ZWV0UG90YXRvZXMuanBnIl0sWyJwIiwiY3JvcF9yZXNpemVkIiwiMTM1Nng4MDErMSsxIiwiMTYwMHg5NDZeIix7ImZvcm1hdCI6ImF2aWYifV1d/VegNews.BlackBeanStuffedSweetPotatoes.jpg?sha=c50b951afe54188e",
  },
  {
    id: 120,
    category: "food",
    kind: "vegan",
    title: "Mushroom Dashi",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 25,
    image:
      "https://assets.bonappetit.com/photos/5f9056f6f78a476aec3387c5/1:1/w_1600%2Cc_limit/HLY-Chaey-16x9-Donabe.jpg",
  },
  {
    id: 121,
    category: "food",
    kind: "vegan",
    title: "",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 27,
    image: "",
  },
  {
    id: 122,
    category: "food",
    kind: "vegan",
    title: "Baked Cauliflower",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 35,
    image:
      "https://assets.bonappetit.com/photos/61ba365ec2ff59aea57c40dc/1:1/w_1600%2Cc_limit/20211118-0222-Healthyish0187.jpg",
  },
  {
    id: 123,
    category: "food",
    kind: "vegan",
    title: "Chickpea Soup",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 34,
    image:
      "https://assets.bonappetit.com/photos/5b9c06a9d5571c4a1012014e/1:1/w_1600%2Cc_limit/curried-chickpea-lentil-dal-bowl.jpg",
  },
  {
    id: 124,
    category: "food",
    kind: "vegan",
    title: "Kisir",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 23,
    image:
      "https://assets.bonappetit.com/photos/60775dde82241753c1976bc2/1:1/w_1600%2Cc_limit/0521-Yasmin-Khan-Spicy-Bulgur-in-Lettuce-Cups.jpg",
  },
  {
    id: 125,
    category: "food",
    kind: "vegan",
    title: "Creamed Corn and Grains",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 44,
    image:
      "https://assets.bonappetit.com/photos/5d40ba4f3732bd0008a5a51c/1:1/w_1600%2Cc_limit/HLY-FMC-Corn-Horizontal.jpg",
  },
  {
    id: 126,
    category: "food",
    kind: "vegan",
    title: "Carrot and Habanero",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 54,
    image:
      "https://assets.bonappetit.com/photos/5ffc74c36f3f1d1e2acf1e31/1:1/w_1600%2Cc_limit/HLY-Maricela-Vega-Carrot%2520and%2520Habanero%2520Tamales.jpg",
  },
  {
    id: 127,
    mainimage: sweet,
    category: "sweet",
    kind: "sweet",
    title: "cake",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 84,
    image:
      "https://www.fabmood.com/inspiration/wp-content/uploads/2020/05/cake-designs-5.jpg",
  },
  {
    id: 128,
    category: "sweet",
    kind: "sweet",
    title: "cake",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 44,
    image:
      "https://www.fabmood.com/inspiration/wp-content/uploads/2021/02/cake-ideas-2.jpg",
  },
  {
    id: 129,
    category: "sweet",
    kind: "sweet",
    title: "cake",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 50,
    image:
      "https://i.pinimg.com/originals/29/35/3f/29353f60f28bc609c2ede2fc9a3feb18.jpg",
  },
  {
    id: 130,
    category: "sweet",
    kind: "sweet",
    title: "cake",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 58,
    image:
      "https://giftzbag.com/wp-content/uploads/2019/12/75454085_586378765511505_3689335575270647517_n-600x658.jpg",
  },
  {
    id: 131,
    category: "sweet",
    kind: "sweet",
    title: "Love Cake",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 94,
    image:
      "https://giftzbag.com/wp-content/uploads/2017/05/IMG-20170407-WA0017-2-600x371.jpg",
  },
  {
    id: 132,
    category: "sweet",
    kind: "sweet",
    title: "cheesecake",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 64,
    image:
      "https://klaraslife.com/wp-content/uploads/2019/05/cheesecakeIMG_1335-1.jpg",
  },
  {
    id: 133,
    category: "sweet",
    kind: "sweet",
    title: "cheesecake",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 58,
    image:
      "https://assets.tmecosys.com/image/upload/t_web600x528/img/recipe/ras/Assets/B7B6C43E-06E7-4EB2-9CAA-A0DAF56223F3/Derivates/fc0d9a36-ba91-43c6-8348-40e348baa155.jpg",
  },
  {
    id: 134,
    category: "sweet",
    kind: "sweet",
    title: "Outstanding Cheesecake",
    description: `Instructions
Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.
Add the rice and stir to coat all the grains in the butter Add the wine and cook gently stirring until it is absorbed Gradually add the hot stock, stirring until each addition is absorbed.
Keep stirring until the rice is tender Season with the lemon juice and zest, and pepper to taste.
(there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through Serve scattered with the Parmesan and seasonal vegetables.
Grill the salmon and gently place onto the risotto with the prawns and asparagus`,
    price: 74,
    image:
      "https://www.foodandwine.com/thmb/GNH0wCAA-IKjNOwWKlhCm4VCLjc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/no-bake-peaches-and-cream-cheesecake-FT-RECIPE0620-869c5bda9c124cdab331d55c3c0459f9.jpg",
  },
];

/* *************  drink  ********************* */
