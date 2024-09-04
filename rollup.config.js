import autoExternal from 'rollup-plugin-auto-external'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.module.js',
      format: 'module'
    }
  ],
  plugins: [
    autoExternal()
  ]
}
