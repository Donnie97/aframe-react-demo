# A-Frame with Create-React-App Demo

A-Frame is a web framework for building virtual reality experiences. Since A-Frame is built on top of the DOM, web libraries such as React, Vue.js, Angular, Ember.js, d3.js are able to sit cleanly on top of A-Frame.



## Step 1: 

Run `create-react-app` in the root of your project folder. 

```
create-react-app app
```

After your app has been created cd into it and run `npm start`.

``` 
cd app && npm start
```

## Step 2: 

Install dependencies:

**Required for using A-Frame with React:** 
  - aframe 
  - aframe-react 

**Optional:**
  - aframe-particle-system-component 

To do this you can run the following in your terminal: 
  
  ```
  npm i aframe  aframe-particle-system-component aframe-react 
  ```

## Step 3 

Now import all of those dependancies into your app.js. We will need to import Entity and Scene from aframe-react.

```
import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
```


## Step 4 

Inside the return remove what create-react-app gave you and add just a Scene tag. 


```
class App extends Component {

  render() {
    return (
      <Scene>

      </Scene>
    )
  }
}
```


## Step 5 

We will now add our first Entity tag.

In A-Frame, HTML attributes map to components which are composable modules that are plugged into Entity tags to attach appearance, behavior, and functionality. 

A-Frame provides a handful of elements such as `a-box` or `a-sky` called primitives that wrap the entity-component pattern to make it appealing for beginners. Developers can create their own primitives as well. 

For our first entity we will be using `a-sky`. Within the Entity tag add primitive and set it equal to a-sky.

The sky primitive adds a background color or 360° image to a scene. A sky is a large sphere with a color or texture mapped to the inside.

```
<Entity primitive="a-sky" />
```

We now need to add a background image to the sky. We will be using the following image for this demo:

![alt text](https://ucarecdn.com/19a73c27-dc44-4e15-9d49-e93fd70d8014/)

```
<Entity primitive="a-sky" src="https://ucarecdn.com/19a73c27-dc44-4e15-9d49-e93fd70d8014/" />
```

Use an equirectangular image as a background for the best result. 

If you want to do a plan color instead of an image you can use `color="#444" ` instead of a `src=""`

```
<Entity primitive="a-sky" color="#444" />

```


## Adding Shapes 

First lets add a box. The box primitive creates shapes such as boxes, cubes, or walls.

Add an Entity tag with primitive equal to `a-box`. Give it a color of blue. Then give it a position of "12 0 -5". 

The position component places entities at certain spots in 3D space. Position takes a coordinate value as three space-delimited numbers.

All entities inherently have the position component.

A-Frame uses a right-handed coordinate system where the negative Z axis extends into the screen. 

- Negative X axis extends left. Positive X Axis extends right.

- Negative Y axis extends down. Positive Y Axis extends up.

- Negative Z axis extends in. Positive Z Axis extends out.

So position 12 0 -5 will be 12 to the right because it is positive and on the x-axis. 0 up or down because it is one the y-axis and -5 in on the z-axis.


```
<Entity primitive='a-box' color="blue" position="12 0 -5"/>
```

Now lets add a sphere. The sphere primitive creates a spherical or polyhedron shapes.

Add an Entity tag with primative equal to `a-sphere`. Give it a color of green. Then give it a position of "1 0 -10".

```
<Entity primitive='a-sphere' color="green" position="1 0 -10"/>
```

Now lets add a cylinder. The cylinder primitive is used to create tubes and curved surfaces.

Add an Entity tag with primative equal to `a-cylinder`. Give it a color of purple and a position of "12 1.5 -5" and a rotation of "90 90 180".

The rotation component defines the orientation of an entity. It takes the pitch (x), yaw (y), and roll (z) as three space-delimited numbers indicating degrees of rotation.

All entities inherently have the rotation component.

 - Pitch, rotation about the X-axis.
 - Yaw, rotation about the Y-axis.
 - Roll, rotation about the Z-axis

```
<Entity primitive='a-cylinder' color="purple" position="12 1.5 -5" rotation="90 90 180"/>
```

## Adding Snow

In order to add snow we will be using the `aframe-particle-system-component` dependency as this is not a built in A-Frame feature.

Make another Entity tag and give it particle-system which will be equal to double curly brackets. Inside of that there needs to be a property of preset with the value of 'snow'. This is all you need to make snow fall in your scene but you can also add a property of particleCount and give it a value of 8000 or any number you'd like to specify how much snow. 

```
<Entity particle-system={{preset: 'snow', particleCount: 8000}}/>
```

aframe-particle-system-component also allows you to have dust or rain in addition to snow you would just adjust the preset accordingly. You can change the color as well just by adding a color property inside the particle-system object with a value of whatever color you want in a string.

You can play around with size, colors, etc.

```
<Entity particle-system={{preset: 'snow', color: '#0000FF,#00FF00,#FF0000', particleCount: 8000, size: 4 }} />
```

Building a snowman and adding an image to a shape:
```
import React, { Component } from 'react';
import './App.css';

import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene, a} from 'aframe-react';

class App extends Component {
  render() {
    return (
      <div>
        <Scene>

          <Entity primitive='a-sky' src="https://ucarecdn.com/19a73c27-dc44-4e15-9d49-e93fd70d8014/"/>

          <Entity primitive='a-box' color="blue" position="12 0 -5" />

          <Entity primitive='a-sphere' color='white' position="2 0 -10" />
          <Entity primitive='a-sphere' color='white' position="2 1.8 -10" radius=".8"/>
          <Entity primitive='a-sphere' color='white' position="2 3 -10" radius=".5"/>

          <Entity primitive='a-cylinder' src="http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg" position="12 1.5 -5" rotation="90 90 180"/>
          {/* Must have cors chrome extension turned on for outside images to work */}

          <Entity particle-system={{preset: 'snow', particleCount: 8000}}/>

          <Entity particle-system={{preset: 'snow', color: '#0000FF,#00FF00,#FF0000', particleCount: 8000, size: 4 }} />
 
        </Scene>
      </div>
    );
  }
}

export default App;

```

## Resources: 

- https://aframe.io/
- https://cdn.aframe.io/
- https://github.com/aframevr/awesome-aframe
- https://aframe.io/docs/0.7.0/primitives/a-sky.html
- https://aframe.io/docs/0.7.0/primitives/a-camera.html
- https://aframe.io/docs/0.7.0/primitives/a-cursor.html
- https://www.npmjs.com/package/aframe-particle-system-component
- https://github.com/ngokevin/aframe-react
- https://aframe.io/examples/showcase/snowglobe/
- https://www.npmjs.com/package/aframe-animation-component
- https://github.com/aframevr/aframe/blob/master/docs/components/position.md
- https://github.com/aframevr/aframe/blob/master/docs/components/rotation.md
- https://www.npmjs.com/package/aframe-react