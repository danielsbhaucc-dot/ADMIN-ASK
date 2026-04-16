import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { execFileSync } from 'node:child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const cssPath = path.resolve(__dirname, '../src/app/(payload)/admin-premium.css')
const genPath = path.resolve(__dirname, 'gen-nav-css-escapes.mjs')

const iconCss = execFileSync('node', [genPath], { encoding: 'utf8' }).trim()

let css = fs.readFileSync(cssPath, 'utf8')

const re =
  /(\.nav-group__label::before \{\s*font-size: 1\.05em;\s*line-height: 1;\s*filter: drop-shadow\(0 1px 1px rgba\(0, 0, 0, 0\.08\)\);\s*\}\s*)([\s\S]*?)(\n  \.app-header \{)/

if (!re.test(css)) {
  throw new Error('Could not find nav icon block to replace')
}

css = css.replace(re, `$1\n${iconCss}\n$3`)
fs.writeFileSync(cssPath, css, 'utf8')
console.log('Patched nav icons in', cssPath)
