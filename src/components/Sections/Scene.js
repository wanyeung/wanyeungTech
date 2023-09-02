import React from 'react'
import Matter from 'matter-js'
import './Scene.scss'

import IconList1 from 'teenyicons/solid/cplusplus.svg';
import IconList2 from 'teenyicons/solid/python.svg';
import IconList3 from '../../assets/bi_filetype-java.svg';
import IconList4 from 'teenyicons/solid/html5.svg';
import IconList5 from 'teenyicons/solid/css3.svg';
import IconList6 from 'teenyicons/solid/javascript.svg';
import IconList7 from 'teenyicons/solid/typescript.svg';
import IconList8 from 'teenyicons/solid/react.svg';
import IconList9 from 'teenyicons/solid/wordpress.svg';
import IconList10 from 'teenyicons/solid/git.svg';
import IconList11 from '../../assets/Processing_3_logo.svg';

class Scene extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const container = this.refs.scene;
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    var Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint,
      Composites = Matter.Composites

    var engine = Engine.create();

    var render = Render.create({
      element: container,
      engine: engine,
      options: {
        width: width,
        height: height,
        fillStyle: 'white',
        wireframes: false
      }
    });

    var images = [
      IconList1,
      IconList2,
      IconList3,
      IconList4,
      IconList5,
      IconList6,
      IconList7,
      IconList8,
      IconList9,
      IconList10,
      IconList11,
    ];

    const columns = Math.ceil(Math.sqrt(images.length));
    const rows = Math.ceil(images.length / columns);

    const defaultScale = 0.4; 

    const iconScales = {
      [IconList3]: 1.08, // Adjust this value for IconList3
      [IconList11]: 0.06 // Adjust this value for IconList11
    };

    var stack = Composites.stack(50, 20, columns, rows, 10, 10, function(x, y, column, row) {
      const index = column + row * columns;
      if (index < images.length) {
        const scale = iconScales[images[index]] || defaultScale;
        return Bodies.rectangle(x, y, 80, 80, {
          restitution: 0.5,
          render: {
            sprite: {
              texture: images[index],
              xScale: scale,
              yScale: scale
            }
          }
        });
      }
    });



    World.add(engine.world, [
      // walls
      Bodies.rectangle(width / 2, 5, width, 10, { 
        isStatic: true,
        render: {
          fillStyle: 'rgba(255, 255, 255, 0)'
        }
      }),
      Bodies.rectangle(width / 2, height - 5, width, 10, { 
        isStatic: true,
        render: {
          fillStyle: 'rgba(255, 255, 255, 0)'
        }
      }),
      Bodies.rectangle(width - 5, height / 2, 10, height, { 
        isStatic: true,
        render: {
          fillStyle: 'rgba(255, 255, 255, 0)'
        }
      }),
      Bodies.rectangle(5, height / 2, 10, height, { 
        isStatic: true,
        render: {
          fillStyle: 'rgba(255, 255, 255, 0)'
        }
      })
    ]);

    World.add(engine.world, stack);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });

    World.add(engine.world, mouseConstraint);

    Engine.run(engine);
    Render.run(render);
  }

  render() {
    return <div className="scene" ref="scene" />
  }
}

export default Scene;
