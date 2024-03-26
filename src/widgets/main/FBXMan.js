import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { COLORS } from "../../shared/variables";

const FBXMan = ({ fbxFile }) => {
  const containerRef = useRef(null);
  const fbxModelRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let scene, camera, renderer, controls;

    const init = () => {
      // Создаем сцену
      scene = new THREE.Scene();

      // Создаем камеру
      camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
      camera.position.set(-0.5, 0, 1);

      // Создаем рендерер
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      renderer.setClearColor(COLORS.color_5)
      containerRef.current.appendChild(renderer.domElement);

      // Добавляем общее освещение
      const ambientLight = new THREE.AmbientLight(0xffffff, 10);
      scene.add(ambientLight);

      // Загружаем FBX файл
      const loader = new FBXLoader();
      loader.load(fbxFile, (object) => {
        object.scale.set(0.1, 0.1, 0.1);
        object.position.set(0, -1, 0);
        scene.add(object);
        fbxModelRef.current = object; // сохраняем ссылку на модель
        setLoading(false); // устанавливаем loading в false после загрузки модели
      });

    };

    const animate = () => {
      requestAnimationFrame(animate);

      // Добавляем вращение модели по оси Y
      if (fbxModelRef.current) {
        fbxModelRef.current.rotation.y += 0.001; // Измените скорость вращения по вашему усмотрению
      }

      renderer.render(scene, camera);
    };

    init();
    animate();

    return () => {
      containerRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [fbxFile]);

  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
      {loading && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'red' }}>
          Loading...
        </div>
      )}
      <div ref={containerRef} style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
    </div>
  );
};

export default FBXMan;

