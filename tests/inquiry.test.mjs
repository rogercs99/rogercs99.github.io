import assert from 'node:assert/strict';
import test from 'node:test';
import { buildInquiryMailto } from '../src/lib/inquiry.ts';

const description = 'Necesito corregir un fallo reproducible en una API de Python y documentar la solución.';

test('builds an opt-in unsent mailto URL from existing public address', () => {
  const result = buildInquiryMailto('public@example.com', 'fix', description, 'flexible');
  assert.ok(result);
  const url = new URL(result);
  assert.equal(url.protocol, 'mailto:');
  assert.equal(url.pathname, 'public@example.com');
  assert.match(url.searchParams.get('subject') || '', /Java \/ Python \/ Docker/);
  assert.match(url.searchParams.get('body') || '', /fallo reproducible/);
  assert.match(url.searchParams.get('body') || '', /no confirma presupuesto/);
});

test('only allows project types and timeframes', () => {
  assert.equal(buildInquiryMailto('public@example.com', 'toString', description, 'flexible'), null);
  assert.equal(buildInquiryMailto('public@example.com', 'api', description, 'constructor'), null);
  assert.ok(buildInquiryMailto('public@example.com', 'vps', description, 'urgent'));
});

test('rejects invalid recipients and too-short/too-long descriptions', () => {
  assert.equal(buildInquiryMailto('javascript:alert(1)', 'fix', description, 'flexible'), null);
  assert.equal(buildInquiryMailto('public@example.com', 'fix', 'short', 'flexible'), null);
  assert.equal(buildInquiryMailto('public@example.com', 'fix', 'a'.repeat(501), 'flexible'), null);
});

test('encodes user data and never lets text inject query fields', () => {
  const txt = description + '\nsubject=malicious&cc=attacker@example.com';
  const url = new URL(buildInquiryMailto('public@example.com', 'api', txt, 'soon'));
  assert.equal(url.searchParams.has('cc'), false);
  assert.equal(url.searchParams.getAll('subject').length, 1);
  assert.ok(url.searchParams.get('body')?.includes('cc=attacker@example.com'));
});

test('does not embed network requests or automatic email', () => {
  const url = buildInquiryMailto('public@example.com', 'fix', description, 'flexible');
  assert.ok(url?.startsWith('mailto:'));
  assert.ok(!url?.includes('https://'));
});
