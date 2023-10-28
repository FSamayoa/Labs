//                      a: ["c"]
function SolveGraphBFS(graph, start, end, visited = {}) {
    // Your code here:
    // caso de corte
    if (visited[start]) return false;
  ​
    visited[start] = true;
  ​
    for (let i = 0; i < graph[start].length; i++) {
      // caso de corte
      if (end === graph[start][i]) return true;
      // Funcion que se llama a si misma con argumentos diferentes que permitar avanzar
      else if (SolveGraphBFS(graph, graph[start][i], end, visited)) return true;
    }
    return false;
  }
  ​
  function SolveGraphDFS(graph, start, end, visited = {}, queue = []) {
    // Your code here:
    console.log(visited);
    if (!visited[start]) {
      for (let i = 0; i < graph[start].length; i++) {
        queue.push(graph[start][i]);
        console.log(queue);
      }
    }
    visited[start] = true;
    if (queue.length !== 0) {
      return (
        queue[0] === end ||
        SolveGraphDFS(graph, queue.shift(), end, visited, queue)
      );
    }
  ​
    return false;
  }
  ​
  const graph = {
    a: ["c"], //-> vistado
    b: ["c"],
    c: ["s", "r"],
    d: ["a"],
    s: ["a", "c"],
    r: ["d"],
    z: ["z"],
  };
  console.log(SolveGraphDFS(graph, "a", "r")); //(true)
  console.log(SolveGraphDFS(graph, "a", "d")); //(true)
  console.log(SolveGraphDFS(graph, "s", "b")); //(false)
  ​
  // module.exports = SolveGraph;