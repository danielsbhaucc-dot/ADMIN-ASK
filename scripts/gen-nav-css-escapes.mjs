function esc(cp) {
  return '\\' + cp.toString(16)
}

const groups = [
  ['תוכן', 0x1f4da],
  ['משתמשים', 0x1f465],
  ['מודרציה', 0x1f6e1],
  ['הודעות', 0x1f4ec],
  ['היסטוריה', 0x1f553],
  ['חברתי', 0x1f91d],
  ['ניהול מערכת', 0x2699],
  ['אחר', 0x2b50],
]

const nav = [
  ['users', 0x1f464],
  ['profiles', 0x1f4bc],
  ['questions', 0x2753],
  ['answers', 0x1f4ac],
  ['admin-reports', 0x1f6a8],
  ['content-penalties', 0x26a0],
  ['moderation-appeals', 0x2696],
  ['moderation-action-logs', 0x1f4dc],
  ['soft-deleted-content', 0x1f5d1],
  ['deleted-content-recovery-requests', 0x267b],
  ['violation-rules', 0x1f4cb],
  ['content-edit-history', 0x270f],
  ['role-assignment-history', 0x1f9d1],
  ['trust-score-audit', 0x1f4ca],
  ['user-trust-score', 0x2b50],
  ['conversations', 0x1f4ad],
  ['conversation-participants', 0x1f465],
  ['messages', 0x2709],
  ['staff-notes', 0x1f4dd],
  ['user-follows', 0x1f91d],
  ['profile-views', 0x1f441],
  ['scouts-guide-document', 0x1f3d5],
  ['moderation-filter-presets', 0x1f50d],
  ['conversation-typing', 0x2328],
]

let out = ''
for (const [label, cp] of groups) {
  out += `[id='nav-group-${label}'] .nav-group__label::before { content: '${esc(cp)}'; }\n`
}
out += '\n'
for (const [slug, cp] of nav) {
  out += `#nav-${slug} .nav__link-label::before { content: '${esc(cp)}'; }\n`
}
process.stdout.write(out)
