# yyan0155_9103_tut6_groupC_Major project_individual task

## Part 1 : How to start it？

> Here's the **original** image.

>![Figure 1](assets/Figure1.png)

- *press the “space bar”.*
- When you press the space bar, the image will switch to a mosaic style and begin rotating.

> Here's the **mosaic** mode.

>![Figure 2](assets/Figure2.png)

- *press the “S key”.*
- When you press the S key, you can summon 1-2 small spaceships randomly. You can continue to summon and stack them.

>![Figure 3](assets/Figure3.png)

## Part 2 : Details of my individual approach to animating the group code.

- I chose **User Input** to drive my personal code, allowing users to interact with the image using keyboard buttons.
1. I attempted to transform the original image display by changing from conventional geometric shapes to a mosaic style, giving it more vibrancy and a modern feel. The mosaic, composed of small blocks, also brings a unique texture, potentially creating a novel visual experience. 
2. By adding rotation, I introduced dynamism to the image. 
3. The inclusion of small spaceship components adds interactivity and fun, making the scene more engaging and narrative-driven.

## Part 3 : What's my inspiration?

> Here's my **inspiration source**.
>![Figure 4](assets/Figure4.png)
- I love playing pixel games because pixel art provides a unique visual experience, with a delicate, cute, and interesting feel. It makes me feel like the pixel world is a miniature, virtual universe. Therefore, I chose a space-themed pixel artwork as my source of inspiration.
- In my individual section, I aim to depict a pixelated miniature universe. The stars revolve around the center of the galaxy, while users can summon small spaceships to embark on adventures in space.

## Part 4 : Brief technical note.
- Tools and technique from outside the course
```js
// Function of special pattern2
function drawSpecialCircle(x, y, outerRadius, innerRadius) {
  fill(75, 156, 211);
  arc(x, y, 2 * outerRadius, 2 * outerRadius, 0, PI);

  fill(255, 215, 0);
  arc(x, y, 2 * outerRadius, 2 * outerRadius, PI, TWO_PI);

  fill(181, 101, 167);
  ellipse(x, y, 2 * innerRadius, 2 * innerRadius);
}
```

- To better adjust the parameters and complete the special circle, I used **arc**.

> Here's the reference of **arc**: https://p5js.org/reference/#/p5/arc

```js
  if (isMosaicMode) {
    if (frameCounter === 0) {
      //This is the code of array 
      let lastColor = largeCircleColors.pop();
      largeCircleColors.unshift(lastColor); 
    }
```

- In order to facilitate the implementation of the colour change of the centre circle in mosaic mode, I used **unshift**
> Here's the reference of **unshift**: https://www.w3schools.com/jsref/jsref_unshift.asp

