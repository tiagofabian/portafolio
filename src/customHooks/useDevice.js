import { useState, useEffect } from 'react';

const useDevice = () => {
  const [device, setDevice] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    // Función para actualizar el estado del dispositivo
    const updateDeviceType = () => {
      const width = window.innerWidth;

      setDevice({
        isMobile: width <= 719,
        isTablet: width >= 720 && width <= 1024,
        isDesktop: width >= 1025,
      });
    };

    updateDeviceType();

    window.addEventListener('resize', updateDeviceType);

    return () => window.removeEventListener('resize', updateDeviceType);
  }, []);

  return device;
};

export default useDevice;