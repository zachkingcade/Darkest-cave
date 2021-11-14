interface IScreenScale {
    screen: {
        width: number,
        height: number,
        center: {
            x: number,
            y: number
        }
    },
    scaled: {
        width: number,
        height: number,
        center: {
            x: number,
            y: number
        }
    },
    ratio: number,
    wide: boolean
}

export function ScreenScale(square_size: number): IScreenScale {
    // Screen variables
    const screen_width = window.innerWidth;
    const screen_height = window.innerHeight;
    const screen_center = { x: (screen_width / 2), y: (screen_height / 2) };
    // Scaling information
    const ratio = screen_width / screen_height;
    const wide = screen_width > screen_height;
    // Scaled variables
    const scaled_width = wide ? square_size * ratio : square_size;
    const scaled_height = wide ? square_size : square_size / ratio;
    const scaled_center = { x: (scaled_width / 2), y: (scaled_height / 2) };
    // Return the full object
    return {
        screen: {
            width: screen_width,
            height: screen_height,
            center: screen_center
        },
        scaled: {
            width: scaled_width,
            height: scaled_height,
            center: scaled_center
        },
        ratio: ratio,
        wide: wide
    }
}