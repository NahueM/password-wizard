
/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";


process.env = {
    ...process.env,
    __NEXT_IMAGE_OPTS: {
        deviceSizes: [320, 420, 768, 1024, 1200],
        imageSizes: [],
        domains: ['www.openbank.es'],
        path: '/_next/image',
        loader: 'default',
    },
};