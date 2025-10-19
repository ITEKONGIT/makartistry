// Component Loader with Actual Components
class ComponentLoader {
    constructor() {
        this.loadedComponents = new Set();
    }
    
    async loadComponents() {
        const carouselScripts = [];
        const alpineScripts = [
         
];
        
        console.log('Loading components...');
        
        // Load carousel data first
        for (const script of carouselScripts) {
            await this.loadScript(script);
        }
        
        // Then load Alpine components
        for (const script of alpineScripts) {
            await this.loadScript(script);
        }
        
        console.log('All components loaded');
    }
    
    loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => {
                console.log('✓ Loaded:', src);
                this.loadedComponents.add(src);
                resolve();
            };
            script.onerror = (error) => {
                console.error('✗ Failed to load:', src, error);
                reject(error);
            };
            document.head.appendChild(script);
        });
    }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.componentLoader = new ComponentLoader();
    window.componentLoader.loadComponents().catch(console.error);
});
