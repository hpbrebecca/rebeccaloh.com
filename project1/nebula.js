// Nebula and Star Animation System
(function() {
    const container = document.body;
    
    // Color palettes for clouds (red, pink, blue, violet, orange)
    // More blue and violet tones added
    const cloudColors = [
        // Deep reds (H II regions)
        { r: 180, g: 40, b: 60 },
        { r: 200, g: 50, b: 75 },
        { r: 220, g: 70, b: 100 },
        { r: 240, g: 80, b: 110 },
        { r: 190, g: 45, b: 65 },
        { r: 160, g: 30, b: 50 },
        
        // Pinks
        { r: 200, g: 60, b: 90 },
        { r: 220, g: 80, b: 110 },
        { r: 180, g: 55, b: 85 },
        { r: 210, g: 65, b: 95 },
        
        // Blues - expanded
        { r: 80, g: 100, b: 180 },
        { r: 100, g: 120, b: 200 },
        { r: 70, g: 90, b: 160 },
        { r: 90, g: 110, b: 190 },
        { r: 60, g: 80, b: 150 },
        { r: 50, g: 100, b: 220 },
        { r: 40, g: 80, b: 200 },
        { r: 60, g: 120, b: 240 },
        { r: 80, g: 140, b: 250 },
        { r: 100, g: 150, b: 255 },
        { r: 70, g: 110, b: 210 },
        { r: 90, g: 130, b: 230 },
        
        // Violets - expanded
        { r: 120, g: 60, b: 180 },
        { r: 140, g: 70, b: 200 },
        { r: 100, g: 50, b: 160 },
        { r: 130, g: 65, b: 190 },
        { r: 110, g: 55, b: 170 },
        { r: 150, g: 75, b: 210 },
        { r: 160, g: 80, b: 220 },
        { r: 90, g: 45, b: 150 },
        { r: 170, g: 85, b: 230 },
        { r: 180, g: 90, b: 240 },
        
        // Purple/Magenta
        { r: 150, g: 50, b: 120 },
        { r: 170, g: 60, b: 140 },
        { r: 130, g: 40, b: 100 },
        { r: 190, g: 70, b: 160 },
        { r: 160, g: 55, b: 130 },
        
        // Oranges
        { r: 200, g: 100, b: 60 },
        { r: 220, g: 120, b: 80 },
        { r: 180, g: 90, b: 50 }
    ];
    
    // Calculate parameters for 2-5 clouds visible at any moment
    // Technical: Each cloud visible for part of longer cycle
    // Reduced cloud count to prevent flickering (fewer simultaneous opacity changes)
    function createClouds() {
        const cloudCount = 16; // 16 clouds as requested
        
        // Calculate grid for even distribution across entire screen
        const cols = 4; // 4 columns
        const rows = 4; // 4 rows = 16 clouds total (4x4 grid)
        const cellWidth = 100 / cols; // 25% per column
        const cellHeight = 100 / rows; // 25% per row
        
        for (let i = 0; i < cloudCount; i++) {
            const cloud = document.createElement('div');
            cloud.className = 'nebula-cloud';
            
            // Random size between 320px and 800px (400px -20% to +100%)
            const size = Math.random() * 480 + 320;
            cloud.style.width = size + 'px';
            cloud.style.height = size + 'px';
            
            // Even distribution: calculate grid position
            const col = i % cols;
            const row = Math.floor(i / cols);
            
            // Position in center of grid cell (ensuring full screen coverage)
            // Grid cells: col 0-4 (0%, 20%, 40%, 60%, 80%), row 0-3 (0%, 25%, 50%, 75%)
            const cellCenterX = (col * cellWidth) + (cellWidth / 2); // 10%, 30%, 50%, 70%, 90%
            const cellCenterY = (row * cellHeight) + (cellHeight / 2); // 12.5%, 37.5%, 62.5%, 87.5%
            
            // Random offset within cell (±50% of cell size)
            const offsetX = (Math.random() - 0.5) * cellWidth;
            const offsetY = (Math.random() - 0.5) * cellHeight;
            
            const x = cellCenterX + offsetX;
            const y = cellCenterY + offsetY;
            
            // Ensure position is within screen bounds (0-100%)
            const clampedX = Math.max(0, Math.min(100, x));
            const clampedY = Math.max(0, Math.min(100, y));
            
            // Position directly using left/top (absolute positioning)
            cloud.style.left = clampedX + '%';
            cloud.style.top = clampedY + '%';
            cloud.style.transform = 'translate(-50%, -50%)'; // Center the cloud on its position
            
            // Random color from palette
            const color = cloudColors[Math.floor(Math.random() * cloudColors.length)];
            // Base opacity for the cloud
            const baseOpacity = Math.random() * 0.3 + 0.2; // 0.2 to 0.5
            const opacity = baseOpacity * 0.8; // 20% more transparent (0.16 to 0.4)
            
            // Center opacity: make body denser/brighter (increase center opacity by 30%)
            const centerOpacity = opacity * 1.3; // Denser/brighter center
            
            // Create ultra-smooth gradient with many stops to eliminate visible rings
            // Use ellipse for more organic, non-circular shape
            // Very small steps (every 2-3%) for seamless transition from center to edge
            const r = color.r;
            const g = color.g;
            const b = color.b;
            
            // Build gradient with 120 stops using Gaussian curve for natural smoothness
            // Gaussian distribution: creates natural, organic fade without relying solely on blur
            let gradientStops = [];
            const stepSize = 100 / 120; // ~0.833% per step for exactly 120 stops
            
            // Gaussian parameters
            const sigma = 0.35; // Standard deviation - controls spread (smaller = tighter, larger = wider)
            const center = 0; // Center of distribution
            
            for (let i = 0; i <= 100; i += stepSize) { // 120 stops total
                const progress = i / 100;
                
                // Calculate distance from center (normalized 0-1)
                const distance = progress;
                
                // Gaussian distribution: e^(-(distance² / (2 * sigma²)))
                // Creates natural, bell-curve-like fade
                const gaussianFactor = Math.exp(-(distance * distance) / (2 * sigma * sigma));
                
                // Combine with exponential decay for outer edges (smoother than linear)
                let alpha;
                if (progress <= 0.4) {
                    // Inner 40%: Use Gaussian with center opacity (dense/brighter center)
                    alpha = centerOpacity * gaussianFactor;
                } else {
                    // Outer 60%: Combine Gaussian with exponential decay for faster fade
                    const outerProgress = (progress - 0.4) / 0.6; // 0 to 1 in outer range
                    const exponentialDecay = Math.exp(-outerProgress * 3); // Exponential falloff
                    alpha = centerOpacity * gaussianFactor * exponentialDecay * 0.6;
                }
                
                // Ensure alpha doesn't go below 0
                alpha = Math.max(0, Math.min(1, alpha));
                
                if (i === 0) {
                    gradientStops.push(`rgba(${r}, ${g}, ${b}, ${centerOpacity}) 0%`);
                } else if (i >= 100) {
                    gradientStops.push(`transparent 100%`);
                } else {
                    gradientStops.push(`rgba(${r}, ${g}, ${b}, ${alpha}) ${i}%`);
                }
            }
            
            cloud.style.background = `radial-gradient(ellipse, ${gradientStops.join(', ')})`;
            
            // Random 3D depth
            const depth = Math.random() * 1000 - 500; // -500px to 500px
            cloud.style.setProperty('--cloud-depth', depth + 'px');
            
            // Calculate delay to ensure 2-5 clouds visible at any moment
            // Technical: With 16 clouds, random cycles and delays
            // Random delays between 1-25s for each cloud
            const initialDelay = 1 + (Math.random() * 24); // Random delay between 1-25 seconds
            
            // Animation: Random cycle duration between 40-80s for each cloud (longer = less flickering, slower)
            // Each cloud has its own random cycle duration
            // Longer cycles = fewer clouds changing opacity per second, slower movement
            const animationDuration = 40 + (Math.random() * 40); // Random cycle between 40-80 seconds (was 20-40s)
            
            // Proportional durations based on cycle length (maintaining 20% fade-in, 30% visible, 20% fade-out, 30% invisible)
            const fadeInDuration = animationDuration * 0.2; // 20% of cycle for fade in
            const visibleDuration = animationDuration * 0.3; // 30% of cycle fully visible
            const fadeOutDuration = animationDuration * 0.2; // 20% of cycle for fade out
            // Remaining 30% is invisible time
            
            // Movement animation faster (half the duration)
            const moveDuration = animationDuration * 0.5; // Faster movement
            cloud.style.animation = `cloudAppear ${animationDuration}s ease-in-out infinite, cloudMove ${moveDuration}s ease-in-out infinite`;
            cloud.style.animationDelay = initialDelay + 's';
            
            // Store initial position for movement (use clamped values)
            // Store as pixel offset from center for transform calculations
            cloud.style.setProperty('--cloud-start-x', clampedX + '%');
            cloud.style.setProperty('--cloud-start-y', clampedY + '%');
            
            // Random movement distance
            const moveX = (Math.random() - 0.5) * 40; // -20% to +20%
            const moveY = (Math.random() - 0.5) * 40;
            cloud.style.setProperty('--cloud-move-x', moveX + '%');
            cloud.style.setProperty('--cloud-move-y', moveY + '%');
            
            // Random size variation for shape change
            const sizeVariation = Math.random() * 0.4 + 0.8; // 0.8 to 1.2
            cloud.style.setProperty('--cloud-size-scale', sizeVariation);
            
            // Set z-index for clouds: all clouds in second-to-last layer when they appear
            // Every cloud gets z-index -99 (second-to-last layer) regardless of creation order
            // This ensures whenever a cloud appears, it's in the second-to-last layer
            cloud.style.zIndex = '-99';
            
            // Insert at the beginning (back layer) - newer clouds go further back
            container.insertBefore(cloud, container.firstChild);
        }
    }
    
        // Initialize
        createClouds();
})();

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes cloudAppear {
        /* Very smooth fade in - over first 20% (8s of 40s) with many frames */
        0% {
            opacity: 0;
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(0.99);
        }
        1% {
            opacity: 0.05;
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(0.991);
        }
        2% {
            opacity: 0.1;
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(0.992);
        }
        3% {
            opacity: 0.15;
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(0.993);
        }
        4% {
            opacity: 0.22;
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(0.994);
        }
        5% {
            opacity: 0.3;
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(0.995);
        }
        6% {
            opacity: 0.4;
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(0.996);
        }
        7% {
            opacity: 0.5;
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(0.997);
        }
        8% {
            opacity: 0.6;
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(0.998);
        }
        9% {
            opacity: 0.7;
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(0.9985);
        }
        10% {
            opacity: 0.8;
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(0.999);
        }
        12% {
            opacity: 0.9;
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(0.9995);
        }
        15% {
            opacity: 0.95;
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(0.9998);
        }
        20% {
            opacity: 1;
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(1);
        }
        /* Stay fully visible - until 50% (12s visible of 40s) */
        50% {
            opacity: 1;
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(1);
        }
        /* Very smooth fade out - over last 20% (8s of 40s) with many frames */
        52% {
            opacity: 0.95;
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(0.9998);
        }
        55% {
            opacity: 0.9;
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(0.9995);
        }
        58% {
            opacity: 0.8;
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(0.999);
        }
        60% {
            opacity: 0.7;
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(0.9985);
        }
        62% {
            opacity: 0.6;
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(0.998);
        }
        64% {
            opacity: 0.5;
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(0.997);
        }
        66% {
            opacity: 0.4;
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(0.996);
        }
        68% {
            opacity: 0.3;
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(0.995);
        }
        70% {
            opacity: 0.22;
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(0.994);
        }
        72% {
            opacity: 0.15;
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(0.993);
        }
        74% {
            opacity: 0.1;
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(0.992);
        }
        76% {
            opacity: 0.05;
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(0.991);
        }
        78% {
            opacity: 0.02;
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(0.9905);
        }
        80% {
            opacity: 0;
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(0.99);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(0.99);
        }
    }
    
    @keyframes cloudMove {
        /* Smooth, rounded movement with many keyframes for organic flow */
        0% {
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(calc(1 * var(--cloud-size-scale, 1))) rotateZ(0deg) translate(0%, 0%);
        }
        12.5% {
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(calc(1.05 * var(--cloud-size-scale, 1))) rotateZ(2deg) translate(calc(var(--cloud-move-x, 0%) * 0.25), calc(var(--cloud-move-y, 0%) * 0.25));
        }
        25% {
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(calc(1.1 * var(--cloud-size-scale, 1))) rotateZ(5deg) translate(calc(var(--cloud-move-x, 0%) * 0.5), calc(var(--cloud-move-y, 0%) * 0.5));
        }
        37.5% {
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(calc(1.05 * var(--cloud-size-scale, 1))) rotateZ(3deg) translate(calc(var(--cloud-move-x, 0%) * 0.75), calc(var(--cloud-move-y, 0%) * 0.75));
        }
        50% {
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(calc(0.9 * var(--cloud-size-scale, 1))) rotateZ(-3deg) translate(calc(var(--cloud-move-x, 0%) * 1.0), calc(var(--cloud-move-y, 0%) * 1.0));
        }
        62.5% {
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(calc(0.95 * var(--cloud-size-scale, 1))) rotateZ(-1deg) translate(calc(var(--cloud-move-x, 0%) * 1.25), calc(var(--cloud-move-y, 0%) * 1.25));
        }
        75% {
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(calc(1.05 * var(--cloud-size-scale, 1))) rotateZ(2deg) translate(calc(var(--cloud-move-x, 0%) * 1.5), calc(var(--cloud-move-y, 0%) * 1.5));
        }
        87.5% {
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(calc(1.02 * var(--cloud-size-scale, 1))) rotateZ(1deg) translate(calc(var(--cloud-move-x, 0%) * 0.75), calc(var(--cloud-move-y, 0%) * 0.75));
        }
        100% {
            transform: translate(-50%, -50%) translateZ(var(--cloud-depth, 0px)) scale(calc(1 * var(--cloud-size-scale, 1))) rotateZ(0deg) translate(0%, 0%);
        }
    }
    
`;
document.head.appendChild(style);

