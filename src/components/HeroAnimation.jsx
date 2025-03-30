import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const HeroAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Colors
    const colors = [0x3B82F6, 0x10B981, 0x6366F1];

    // Create phone outline
    const phoneGroup = new THREE.Group();
    scene.add(phoneGroup);

    // Phone body
    const phoneWidth = 3;
    const phoneHeight = 6;
    const phoneDepth = 0.3;
    const phoneRadius = 0.5;

    const phoneShape = new THREE.Shape();
    phoneShape.moveTo(-phoneWidth/2 + phoneRadius, -phoneHeight/2);
    phoneShape.lineTo(phoneWidth/2 - phoneRadius, -phoneHeight/2);
    phoneShape.quadraticCurveTo(phoneWidth/2, -phoneHeight/2, phoneWidth/2, -phoneHeight/2 + phoneRadius);
    phoneShape.lineTo(phoneWidth/2, phoneHeight/2 - phoneRadius);
    phoneShape.quadraticCurveTo(phoneWidth/2, phoneHeight/2, phoneWidth/2 - phoneRadius, phoneHeight/2);
    phoneShape.lineTo(-phoneWidth/2 + phoneRadius, phoneHeight/2);
    phoneShape.quadraticCurveTo(-phoneWidth/2, phoneHeight/2, -phoneWidth/2, phoneHeight/2 - phoneRadius);
    phoneShape.lineTo(-phoneWidth/2, -phoneHeight/2 + phoneRadius);
    phoneShape.quadraticCurveTo(-phoneWidth/2, -phoneHeight/2, -phoneWidth/2 + phoneRadius, -phoneHeight/2);

    const phoneGeometry = new THREE.ExtrudeGeometry(phoneShape, {
      depth: phoneDepth,
      bevelEnabled: false
    });

    const phoneMaterial = new THREE.MeshBasicMaterial({
      color: 0x333333,
      transparent: true,
      opacity: 0.2,
      wireframe: true
    });

    const phone = new THREE.Mesh(phoneGeometry, phoneMaterial);
    phone.rotation.z = Math.PI * 0.05;
    phoneGroup.add(phone);

    // Screen
    const screenWidth = phoneWidth * 0.85;
    const screenHeight = phoneHeight * 0.85;
    const screenShape = new THREE.Shape();
    const screenRadius = phoneRadius * 0.8;

    screenShape.moveTo(-screenWidth/2 + screenRadius, -screenHeight/2);
    screenShape.lineTo(screenWidth/2 - screenRadius, -screenHeight/2);
    screenShape.quadraticCurveTo(screenWidth/2, -screenHeight/2, screenWidth/2, -screenHeight/2 + screenRadius);
    screenShape.lineTo(screenWidth/2, screenHeight/2 - screenRadius);
    screenShape.quadraticCurveTo(screenWidth/2, screenHeight/2, screenWidth/2 - screenRadius, screenHeight/2);
    screenShape.lineTo(-screenWidth/2 + screenRadius, screenHeight/2);
    screenShape.quadraticCurveTo(-screenWidth/2, screenHeight/2, -screenWidth/2, screenHeight/2 - screenRadius);
    screenShape.lineTo(-screenWidth/2, -screenHeight/2 + screenRadius);
    screenShape.quadraticCurveTo(-screenWidth/2, -screenHeight/2, -screenWidth/2 + screenRadius, -screenHeight/2);

    const screenGeometry = new THREE.ShapeGeometry(screenShape);
    const screenMaterial = new THREE.MeshBasicMaterial({
      color: 0x3B82F6,
      transparent: true,
      opacity: 0.1
    });

    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.z = phoneDepth + 0.01;
    phoneGroup.add(screen);

    // Create particles
    const particles = [];
    const particleCount = 50;
    const particleGeometry = new THREE.SphereGeometry(0.05, 8, 8);

    for (let i = 0; i < particleCount; i++) {
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(colors[i % colors.length]),
        transparent: true,
        opacity: 0.7
      });

      const particle = new THREE.Mesh(particleGeometry, material);
      
      // Position particles in a sphere around the phone
      const radius = 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      particle.position.x = radius * Math.sin(phi) * Math.cos(theta);
      particle.position.y = radius * Math.sin(phi) * Math.sin(theta);
      particle.position.z = radius * Math.cos(phi);
      
      scene.add(particle);
      
      particles.push({
        mesh: particle,
        speed: 0.01 + Math.random() * 0.02,
        rotationAxis: new THREE.Vector3(
          Math.random() - 0.5,
          Math.random() - 0.5,
          Math.random() - 0.5
        ).normalize(),
        angle: 0
      });
    }

    // Create data lines flowing toward the phone
    const dataLines = [];
    const lineCount = 20;

    for (let i = 0; i < lineCount; i++) {
      // Create a random starting point far from the phone
      const startRadius = 12 + Math.random() * 5;
      const startTheta = Math.random() * Math.PI * 2;
      const startPhi = Math.acos(2 * Math.random() - 1);
      
      const startPoint = new THREE.Vector3(
        startRadius * Math.sin(startPhi) * Math.cos(startTheta),
        startRadius * Math.sin(startPhi) * Math.sin(startTheta),
        startRadius * Math.cos(startPhi)
      );
      
      // End point is on the phone
      const endPoint = new THREE.Vector3(
        (Math.random() - 0.5) * phoneWidth,
        (Math.random() - 0.5) * phoneHeight,
        phoneDepth / 2
      );
      phoneGroup.localToWorld(endPoint);
      
      const points = [startPoint, endPoint];
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      
      const lineMaterial = new THREE.LineBasicMaterial({
        color: colors[i % colors.length],
        transparent: true,
        opacity: 0.3
      });
      
      const line = new THREE.Line(lineGeometry, lineMaterial);
      scene.add(line);
      
      dataLines.push({
        line,
        startPoint,
        endPoint,
        progress: Math.random(),
        speed: 0.005 + Math.random() * 0.01
      });
    }

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate phone slightly
      phoneGroup.rotation.y = Math.sin(Date.now() * 0.0005) * 0.2;
      phoneGroup.rotation.x = Math.sin(Date.now() * 0.0003) * 0.1;
      
      // Animate particles in circular paths
      particles.forEach(particle => {
        particle.angle += particle.speed;
        
        const rotationMatrix = new THREE.Matrix4().makeRotationAxis(
          particle.rotationAxis,
          particle.angle
        );
        
        const position = new THREE.Vector3(
          particle.mesh.position.x,
          particle.mesh.position.y,
          particle.mesh.position.z
        );
        
        position.applyMatrix4(rotationMatrix);
        
        particle.mesh.position.copy(position);
      });
      
      // Animate data lines
      dataLines.forEach(dataLine => {
        dataLine.progress += dataLine.speed;
        if (dataLine.progress > 1) {
          dataLine.progress = 0;
          
          // Reset to a new random starting point
          const startRadius = 12 + Math.random() * 5;
          const startTheta = Math.random() * Math.PI * 2;
          const startPhi = Math.acos(2 * Math.random() - 1);
          
          dataLine.startPoint.set(
            startRadius * Math.sin(startPhi) * Math.cos(startTheta),
            startRadius * Math.sin(startPhi) * Math.sin(startTheta),
            startRadius * Math.cos(startPhi)
          );
          
          // New end point on the phone
          dataLine.endPoint.set(
            (Math.random() - 0.5) * phoneWidth,
            (Math.random() - 0.5) * phoneHeight,
            phoneDepth / 2
          );
          phoneGroup.localToWorld(dataLine.endPoint);
        }
        
        // Update line points based on progress
        const currentPoint = new THREE.Vector3().lerpVectors(
          dataLine.startPoint,
          dataLine.endPoint,
          dataLine.progress
        );
        
        const points = [dataLine.startPoint, currentPoint];
        dataLine.line.geometry.setFromPoints(points);
        dataLine.line.geometry.attributes.position.needsUpdate = true;
      });
      
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Clean up resources
      phoneGeometry.dispose();
      phoneMaterial.dispose();
      screenGeometry.dispose();
      screenMaterial.dispose();
      
      particles.forEach(particle => {
        particle.mesh.geometry.dispose();
        particle.mesh.material.dispose();
      });
      
      dataLines.forEach(dataLine => {
        dataLine.line.geometry.dispose();
        dataLine.line.material.dispose();
      });
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0" />;
};

export default HeroAnimation;