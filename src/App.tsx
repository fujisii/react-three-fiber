import "./styles.css";
import Box from "./Box";
import { Canvas } from "@react-three/fiber";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-3, 0, 0]} />
        <Box position={[0, -3, -3]} />
        <Box position={[3, 0, 0]} />
      </Canvas>
    </div>
  );
}
