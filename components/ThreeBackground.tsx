"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 9;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(2.15, 8);
    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#0b0b0d"),
      roughness: 0.42,
      metalness: 0.74,
      wireframe: true,
      emissive: new THREE.Color("#120f0a"),
      emissiveIntensity: 0.2
    });
    const form = new THREE.Mesh(geometry, material);
    form.position.set(2.5, -0.35, 0);
    scene.add(form);

    const glass = new THREE.Mesh(
      new THREE.TorusKnotGeometry(1.2, 0.035, 220, 12),
      new THREE.MeshBasicMaterial({ color: "#d8b874", transparent: true, opacity: 0.34 })
    );
    glass.position.set(-3.1, 1.3, -1);
    scene.add(glass);

    const key = new THREE.PointLight("#d8b874", 55, 18);
    key.position.set(-4, 2, 5);
    scene.add(key);
    const fill = new THREE.PointLight("#6f7777", 18, 18);
    fill.position.set(4, -3, 4);
    scene.add(fill);

    const pointer = new THREE.Vector2(0, 0);
    const onPointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX / window.innerWidth - 0.5;
      pointer.y = event.clientY / window.innerHeight - 0.5;
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("resize", onResize);

    let raf = 0;
    const animate = () => {
      form.rotation.x += 0.0018;
      form.rotation.y += 0.0027;
      glass.rotation.x -= 0.002;
      glass.rotation.z += 0.003;
      camera.position.x += (pointer.x * 0.7 - camera.position.x) * 0.035;
      camera.position.y += (-pointer.y * 0.5 - camera.position.y) * 0.035;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} aria-hidden className="pointer-events-none fixed inset-0 z-0 opacity-80" />;
}
