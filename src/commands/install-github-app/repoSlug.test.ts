import assert from 'node:assert/strict'
import test from 'node:test'

import { extractGitHubRepoSlug } from './repoSlug.ts'

test('keeps owner/repo input as-is', () => {
  assert.equal(extractGitHubRepoSlug('SuryanshuNabheet/openclaude'), 'SuryanshuNabheet/openclaude')
})

test('extracts slug from https GitHub URLs', () => {
  assert.equal(
    extractGitHubRepoSlug('https://github.com/SuryanshuNabheet/openclaude'),
    'SuryanshuNabheet/openclaude',
  )
  assert.equal(
    extractGitHubRepoSlug('https://www.github.com/SuryanshuNabheet/openclaude.git'),
    'SuryanshuNabheet/openclaude',
  )
})

test('extracts slug from ssh GitHub URLs', () => {
  assert.equal(
    extractGitHubRepoSlug('git@github.com:SuryanshuNabheet/openclaude.git'),
    'SuryanshuNabheet/openclaude',
  )
  assert.equal(
    extractGitHubRepoSlug('ssh://git@github.com/SuryanshuNabheet/openclaude'),
    'SuryanshuNabheet/openclaude',
  )
})

test('rejects malformed or non-GitHub URLs', () => {
  assert.equal(extractGitHubRepoSlug('https://gitlab.com/SuryanshuNabheet/openclaude'), null)
  assert.equal(extractGitHubRepoSlug('https://github.com/SuryanshuNabheet'), null)
  assert.equal(extractGitHubRepoSlug('not actually github.com/SuryanshuNabheet/openclaude'), null)
  assert.equal(
    extractGitHubRepoSlug('https://evil.example/?next=github.com/SuryanshuNabheet/openclaude'),
    null,
  )
  assert.equal(
    extractGitHubRepoSlug('https://github.com.evil.example/SuryanshuNabheet/openclaude'),
    null,
  )
  assert.equal(
    extractGitHubRepoSlug('https://example.com/github.com/SuryanshuNabheet/openclaude'),
    null,
  )
})
