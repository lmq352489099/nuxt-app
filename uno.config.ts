// uno.config.ts
import {
  defineConfig, presetAttributify, presetIcons,
  presetTypography, presetUno, presetWebFonts,
  transformerDirectives, transformerVariantGroup,
  presetWind
} from 'unocss'
export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWind(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
})