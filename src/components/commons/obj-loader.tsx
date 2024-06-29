'use client';

import React, { useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { Mesh } from 'three';

export const ObjModel: React.FC<{ url: string }> = ({ url }) => {
  const obj = useLoader(OBJLoader, url);
  const meshRef = useRef<Mesh>(null);

  return <primitive object={obj} ref={meshRef} />;
};

export const RoomObj: React.FC = () => {
  // -- Render
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <ObjModel url="/objects/room.obj" />
    </Canvas>
  );
};
