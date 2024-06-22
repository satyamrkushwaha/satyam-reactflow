// submit.js
import { useStore } from './store';

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  console.log(nodes, edges )

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:8000/pipelines/parse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nodes, edges }),
    });

    if (response.ok) {
      const data = await response.json();
      alert(`Number of Nodes: ${data.num_nodes}, Number of Edges: ${data.num_edges}, Is DAG: ${data.is_dag}`);
    } else {
      alert('Failed to parse the pipeline');
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button type="button" className='submit-btn' onClick={handleSubmit}>Submit</button>
    </div>
  );
};