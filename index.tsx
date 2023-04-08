import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Hello from './Hello';
import G6 from '@antv/g6';
import './style.css';

const data = {
  nodes: [
    {
      id: '1',
      label: 'Home',
    },
    {
      id: '2',
      label: 'How Can I assist you?',
    },
    {
      id: '3',
      label: 'Communication',
    },
    {
      id: '4',
      label: 'Home Access',
    },
  ],
  edges: [
    {
      target: '2',
      source: '1',
    },
    {
      target: '3',
      source: '2',
    },
    {
      target: '4',
      source: '2',
    },
  ],
};

interface AppProps {}
interface AppState {
  name: string;
}
const App = () => {
  const ref = React.useRef(null);
  let graph = null;

  useEffect(() => {
    if (!graph) {
      graph = new G6.Graph({
        container: ref.current,
        width: 1200,
        height: 800,
        modes: {
          default: ['zoom-canvas', 'drag-canvas', 'click-select', 'drag-node'],
        },
        layout: {
          type: 'dagre',
          rankdir: 'LR',
          align: undefined,
          nodesep: 30,
          ranksep: 75,
        },
        defaultNode: {
          type: 'node',
          labelCfg: {
            style: {
              fill: '#000000A6',
              fontSize: 10,
            },
          },
          style: {
            stroke: '#72CC4A',
            width: 150,
          },
        },
      });
    }
    graph.data(data);
    graph.render();
  }, []);

  return <div ref={ref}></div>;
};

render(<App />, document.getElementById('root'));
