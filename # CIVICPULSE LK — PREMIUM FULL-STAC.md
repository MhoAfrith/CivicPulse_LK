# CIVICPULSE LK — PREMIUM FULL-STACK WEBAPP MASTER BUILD PROMPT

## 1. MASTER ROLE

1. You are the Lead Product Architect, Senior Full-Stack Engineer, Principal UI/UX Designer, Design-System Engineer, Security Engineer, QA Engineer, DevOps Engineer, and Technical Project Manager for CivicPulse LK.
2. Your mission is to design and build a premium, production-quality, responsive civic technology web application called CivicPulse LK.
3. Treat this as a serious real-world civic platform, not a student demo or a basic CRUD dashboard.
4. The product must feel trustworthy, modern, polished, fast, accessible, visually rich, and institutionally credible.
5. Build the system so the architecture can evolve into a large-scale production platform.
6. Do not create disconnected mock screens that cannot later connect to real backend functionality.
7. Every major UI feature must have a logical data model, API/action path, loading state, empty state, error state, and success state.
8. Prioritize maintainability, accessibility, security, performance, scalability, and consistent UX.
9. Make sensible engineering decisions autonomously when a detail is not explicitly specified.
10. Never break an existing working feature merely to implement a new feature.
11. Preserve clean architecture and avoid unnecessary technical debt.
12. Work incrementally and validate each major implementation stage before moving to the next.
13. Before writing significant code, inspect the existing repository structure and reuse suitable components rather than duplicating functionality.
14. Maintain a professional folder structure throughout the project.
15. Keep the application ready for future mobile application integration.

## 2. PRODUCT VISION

16. CivicPulse LK is a community-verified public infrastructure reporting platform for Sri Lanka.
17. The platform connects citizens, community verifiers, volunteers, NGOs, government agencies, Divisional Secretariat officers, and administrators.
18. The core purpose is to transform unstructured infrastructure complaints into trusted, verifiable, actionable cases.
19. Citizens should be able to report infrastructure problems quickly using photos, GPS, category, and description.
20. Nearby community members should be able to confirm or dispute reports.
21. AI should assist with classification, duplicate detection, priority scoring, and summarisation.
22. AI must support official workflows and must never replace institutional or human verification.
23. The DS Office must function as the central coordination layer for verified cases.
24. Government agencies should receive assigned cases and report progress.
25. NGOs and volunteers should be able to contribute resources, field support, and coordination.
26. Citizens should be able to see what happens after submitting a complaint.
27. The public transparency dashboard must expose meaningful progress without exposing sensitive personal information.
28. The system should improve trust by making case history, verification, assignment, evidence, and resolution visible.
29. The application must be designed for the Sri Lankan context.
30. Use LKR where financial values are required.
31. Use Sri Lankan geographic terminology and administrative concepts where appropriate.
32. Use Sinhala, Tamil, and English as first-class supported languages.
33. Build for both urban and less-connected environments.
34. Design mobile-first experiences for citizens and field workers.
35. Design desktop-optimised administrative experiences while maintaining tablet responsiveness.

## 3. CORE TECHNOLOGY STACK

36. Use Next.js with App Router.
37. Use React with TypeScript.
38. Use Tailwind CSS for styling.
39. Use shadcn/ui as the component foundation.
40. Use Lucide icons consistently.
41. Use Prisma ORM.
42. Use PostgreSQL as the primary relational database.
43. Design the database with PostGIS-friendly geospatial architecture.
44. Use Neon PostgreSQL where deployment configuration supports it.
45. Use Clerk or the configured authentication provider for authentication.
46. Implement role-based access control.
47. Use Zod for validation.
48. Use React Hook Form for complex forms.
49. Use Recharts for analytics visualisation.
50. Use Mapbox for maps and geospatial UI.
51. Use MinIO or S3-compatible object storage for report photos and evidence.
52. Integrate Gemini or the configured AI provider through a clean service abstraction.
53. Design background jobs so Inngest or another job system can be introduced cleanly.
54. Keep Redis and Elasticsearch-compatible architecture extensible for future analytics and caching.
55. Use GitHub-compatible workflows and CI/CD patterns.
56. Keep deployment compatibility with Vercel where practical.
57. Use Docker-friendly development patterns where appropriate.
58. Do not hard-code API keys, secrets, access tokens, or credentials.
59. Use environment variables and typed environment configuration.
60. Create clean service boundaries so third-party services can be replaced later.

## 4. DESIGN DIRECTION

61. The visual quality must resemble a premium modern civic-tech SaaS product.
62. Do not use generic bootstrap-style layouts.
63. Do not create a flat page full of basic cards.
64. Use strong hierarchy, whitespace, typography, depth, motion, and contextual interactions.
65. Use civic green #0F5132 as the primary brand colour.
66. Use semantic status colours consistently.
67. Pending should communicate amber.
68. Under Verification should communicate blue.
69. Assigned/In Progress should communicate orange.
70. Resolved should communicate green.
71. Disputed/Rejected should communicate red.
72. Never communicate status through colour alone.
73. Pair statuses with icons and text.
74. Use Geist Sans or an equivalent modern sans-serif for UI text.
75. Use Geist Mono or an equivalent monospace font for IDs, coordinates, and technical values.
76. Use rounded cards with restrained shadows.
77. Avoid excessive glassmorphism.
78. Use subtle gradients only where they improve hierarchy.
79. Use map-inspired visual patterns where appropriate.
80. Build a distinctive CivicPulse brand identity.
81. Create reusable design tokens for spacing, typography, radius, shadow, borders, and status states.
82. Support both dark and light themes.
83. Make dark mode feel intentional and premium.
84. Ensure light mode is equally polished.
85. Use smooth but restrained animations.
86. Use hover, focus, pressed, selected, loading, and disabled states throughout.
87. Prefer skeleton loading over sudden layout jumps.
88. Use tasteful page transitions where useful.
89. Keep animation performant.
90. Respect prefers-reduced-motion.

## 5. RESPONSIVE DESIGN REQUIREMENTS

91. Design mobile-first.
92. Support small phones.
93. Support large phones.
94. Support tablets.
95. Support laptops.
96. Support large desktop monitors.
97. Avoid horizontal scrolling except for intentionally scrollable data tables.
98. Build mobile navigation patterns separately where appropriate.
99. Administrative tables must become useful mobile cards instead of tiny unreadable tables.
100. Maps must resize intelligently on different screens.
101. Large desktop dashboards may use multi-column layouts.
102. Mobile dashboards should prioritise the most important actions.
103. The Report an Issue action must remain extremely easy to reach on mobile.
104. Use large touch targets for outdoor field use.
105. Ensure controls are usable with one hand where practical.
106. Design for poor lighting and outdoor use.
107. Keep forms readable and simple on mobile.
108. Compress images client-side before upload where appropriate.
109. Preserve accessibility when responsive components transform.
110. Test critical screens at multiple viewport sizes.

## 6. APPLICATION INFORMATION ARCHITECTURE

111. Create a clear public experience.
112. Create authenticated role-specific application areas.
113. Separate public routes from protected routes.
114. Create shared application shell components.
115. Create role-specific navigation configurations.
116. Create shared notification infrastructure.
117. Create shared profile/settings infrastructure.
118. Create shared case detail components.
119. Create shared map components.
120. Create shared status badge components.
121. Create shared timeline components.
122. Create shared evidence gallery components.
123. Create shared analytics components.
124. Create shared modal, drawer, sheet, confirmation, and toast patterns.
125. Avoid repeating the same business logic in multiple role dashboards.

## 7. PUBLIC LANDING PAGE

126. Create a premium CivicPulse LK landing page.
127. The hero must immediately communicate civic reporting and community verification.
128. Include a compelling tagline.
129. Include a strong supporting statement.
130. Include a primary CTA for Report an Issue.
131. Include a secondary CTA for Explore Transparency Dashboard.
132. Include Sign In and Sign Up actions.
133. Include language switching.
134. Show a subtle live civic-data visual or interactive map preview.
135. Include a live statistics section.
136. Show examples such as issues reported, verified, assigned, and resolved.
137. Include a visually clear “How CivicPulse Works” four-stage section.
138. Explain Report.
139. Explain Verify.
140. Explain Coordinate.
141. Explain Resolve.
142. Include an ecosystem section showing Citizens, Communities, DS Office, Agencies, NGOs, and Volunteers.
143. Include a trust and transparency section.
144. Include a public case preview.
145. Include impact metrics.
146. Include testimonials or stakeholder quotes using clearly marked placeholder content if actual data is unavailable.
147. Include partner/institution placeholder areas only where appropriate.
148. Include a strong final CTA.
149. Include a professional footer.
150. Make the landing page feel credible enough for a government or NGO stakeholder demo.

## 8. PUBLIC TRANSPARENCY DASHBOARD

151. Build a real public transparency dashboard.
152. It must work for users without authentication.
153. Provide a map-first experience.
154. Display public case locations using privacy-safe geospatial data.
155. Use status-aware map markers.
156. Provide category filtering.
157. Provide status filtering.
158. Provide DS division filtering.
159. Provide area filtering.
160. Provide date filtering where practical.
161. Provide a search experience.
162. Include KPI cards.
163. Include a status funnel.
164. Include category analytics.
165. Include geographic distribution analytics.
166. Include recently resolved cases.
167. Include recent public activity where appropriate.
168. Allow users to open case details.
169. Make case links shareable.
170. Avoid exposing private citizen data.
171. Use anonymised reporter information.
172. Display a clear lifecycle timeline.
173. Display verification history.
174. Display field verification evidence.
175. Display assigned agency information where appropriate.
176. Display resolution information.
177. Allow public feedback after resolution when enabled.

## 9. AUTHENTICATION AND ONBOARDING

178. Create premium Sign In and Sign Up pages.
179. Use the configured authentication provider.
180. Support email authentication.
181. Support phone/social options when supported by the configured provider.
182. Provide clear error states.
183. Provide loading states.
184. Provide accessible form labels.
185. Provide password recovery where applicable.
186. Create a post-registration onboarding flow.
187. Ask the user's preferred language.
188. Ask for DS division or area where necessary.
189. Allow optional phone verification.
190. Default new users to Citizen when appropriate.
191. Allow users to request elevated roles through a controlled workflow.
192. Never allow client-side users to self-assign privileged roles.

## 10. ROLE MODEL

193. Implement the seven application roles.
194. Role 1: Citizen.
195. Role 2: Community Verifier.
196. Role 3: Volunteer.
197. Role 4: NGO.
198. Role 5: Government Agency.
199. Role 6: DS Officer.
200. Role 7: Admin.
201. Create a central role and permission model.
202. Keep permissions explicit.
203. Do not rely solely on hidden UI navigation for security.
204. Enforce authorisation on server-side operations.
205. Create role-aware redirects after authentication.
206. Create role-aware dashboards.
207. Create role-aware navigation.
208. Create role-aware notifications.
209. Create role-aware actions.
210. Log security-sensitive role changes.

## 11. CITIZEN EXPERIENCE

211. Build a citizen-first dashboard.
212. Show My Area or nearby civic activity.
213. Make Report an Issue the primary action.
214. Add a mobile-friendly floating action button where appropriate.
215. Show My Reports.
216. Show nearby community reports.
217. Show notifications.
218. Show profile/settings.
219. Build the Report an Issue screen as the highest-quality mobile form in the application.
220. Allow camera capture.
221. Allow multiple photo uploads.
222. Allow gallery uploads.
223. Automatically capture GPS coordinates when permitted.
224. Allow manual location adjustment using a map.
225. Include category selection.
226. Include Roads.
227. Include Drainage.
228. Include Streetlights.
229. Include Water.
230. Include Other.
231. Include an easy description input.
232. Provide optional AI-assisted writing or summarisation guidance without removing user control.
233. Show image previews.
234. Validate file sizes and supported types.
235. Show upload progress.
236. Allow draft saving.
237. Provide a clear review-before-submit step.
238. Submit the case securely.
239. Show a high-quality success confirmation.
240. Generate a Case ID.
241. Explain that nearby verifiers will review the report.
242. Provide View Case.
243. Provide Report Another Issue.
244. Provide Share Case.
245. Build My Reports with filtering.
246. Use meaningful status badges.
247. Build a detailed case timeline.
248. Allow comments where supported.
249. Allow withdrawal only while business rules permit.
250. Allow post-resolution feedback.

## 12. COMMUNITY VERIFIER EXPERIENCE

251. Build a verification-focused dashboard.
252. Make Verification Queue the default landing area.
253. Prioritise nearby reports.
254. Display distance.
255. Display recency.
256. Display category.
257. Display report photo.
258. Display current confirmation count.
259. Display verification threshold.
260. Provide Confirm.
261. Provide Dispute.
262. Provide Skip.
263. Provide Open Detail.
264. Build a detailed verification page.
265. Display full-size evidence.
266. Display map location.
267. Display description.
268. Display relevant anonymised reporter trust information.
269. Surface AI duplicate suggestions clearly as advisory.
270. Provide dispute reasons.
271. Provide duplicate reporting action.
272. Build Verification History.
273. Show past decisions.
274. Show later outcomes where possible.
275. Show trust score trend.
276. Make trust score understandable.
277. Avoid gamification that encourages malicious verification behaviour.
278. Ensure verification actions are auditable.

## 13. VOLUNTEER EXPERIENCE

279. Build a My Tasks dashboard.
280. Build an Available Tasks page.
281. Provide map/list toggle.
282. Show task proximity.
283. Show task type.
284. Show due window.
285. Allow task claiming where business rules permit.
286. Create a field-verification task detail screen.
287. Support mobile-first evidence capture.
288. Capture GPS evidence.
289. Capture multiple photos.
290. Collect structured inspection information.
291. Include observed condition.
292. Include recommended action.
293. Include notes.
294. Include timestamp.
295. Include a signature field where required.
296. Provide offline-friendly draft behaviour.
297. Verify proximity before evidence submission when applicable.
298. Attach evidence to the correct case timeline.

## 14. NGO EXPERIENCE

299. Create an NGO Opportunity Board.
300. Display verified cases needing support.
301. Allow filtering by category.
302. Allow filtering by region.
303. Allow filtering by priority.
304. Allow filtering by urgency.
305. Show support requirements.
306. Provide a premium case detail view.
307. Provide Pledge Support.
308. Support Funding.
309. Support Materials.
310. Support Volunteers.
311. Provide a commitment form.
312. Show NGO commitments.
313. Track Pledged.
314. Track In Progress.
315. Track Completed.
316. Provide volunteer coordination.
317. Provide impact reports.
318. Show cases supported.
319. Show resolution impact.
320. Show category breakdown.
321. Show contribution trends.
322. Allow PDF/CSV export where implemented.

## 15. GOVERNMENT AGENCY EXPERIENCE

323. Create an agency dashboard.
324. Show Assigned Cases prominently.
325. Show In Progress cases.
326. Show Completed cases.
327. Show blockers and resource reports.
328. Prioritise the agency's actionable worklist.
329. Support sorting by AI priority score.
330. Support sorting by urgency.
331. Support sorting by deadline or age.
332. Build a Case Work Console.
333. Show full evidence history.
334. Show verification context.
335. Show current status.
336. Show Assigned.
337. Show Scheduled.
338. Show In Progress.
339. Show Completed.
340. Support repair notes.
341. Support before photos.
342. Support after photos.
343. Support blocker reporting.
344. Notify the DS Office of blockers.
345. Maintain a history of completed cases.

## 16. DS OFFICER EXPERIENCE

346. Create the most operationally powerful dashboard in the system.
347. Make Triage Queue the primary workspace.
348. Show verified unassigned cases.
349. Show AI priority score.
350. Show duplicate-cluster indicators.
351. Show verification count.
352. Show age/SLA information.
353. Provide assignment actions.
354. Provide reject action.
355. Provide merge-duplicate action.
356. Provide joint field-verification request.
357. Build an assignment dialog.
358. Provide searchable agency selection.
359. Provide NGO selection when support is required.
360. Provide volunteer selection.
361. Provide urgency selection.
362. Provide instruction notes.
363. Build All Cases.
364. Support filter by status.
365. Support filter by category.
366. Support filter by area.
367. Support filter by assignee.
368. Support filter by age.
369. Provide map view.
370. Provide reassign.
371. Provide escalate.
372. Provide close.
373. Build Field Verification Requests.
374. Build Division Analytics.
375. Show cases by status.
376. Show cases by category.
377. Show cases by area.
378. Show average resolution time.
379. Show SLA breaches.
380. Show weekly trends.
381. Build Team/Organisation Directory.
382. Show active caseload.
383. Show focus area.
384. Show contact details according to permissions.

## 17. ADMIN EXPERIENCE

385. Build a professional admin console.
386. Build User Management.
387. Build Role & Permission Requests.
388. Build Moderation Queue.
389. Build System Analytics.
390. Build Platform Settings.
391. Build Audit Log.
392. User Management must support search.
393. User Management must support filtering.
394. Show user name.
395. Show email.
396. Show role.
397. Show trust score where permitted.
398. Show account status.
399. Support bulk actions carefully.
400. Allow controlled role changes.
401. Allow account suspension.
402. Allow account reactivation.
403. Allow activity review.
404. Build elevated-role approval.
405. Allow Approve.
406. Allow Reject.
407. Allow Request More Information.
408. Build moderation tooling.
409. Display flagged content reason.
410. Display relevant evidence.
411. Allow moderation outcomes.
412. Build system analytics.
413. Build configurable platform settings.
414. Allow configuration of verification threshold.
415. Allow configuration of trust-score rules.
416. Allow supported languages.
417. Allow categories.
418. Support DS division boundary configuration through appropriate geospatial architecture.
419. Build immutable-style audit history for important administrative actions.

## 18. CASE LIFECYCLE

420. Model the complete lifecycle as a first-class product concept.
421. Citizen submits report.
422. AI performs advisory triage.
423. Community verifies or disputes.
424. Report crosses verification threshold.
425. Case enters DS Office queue.
426. DS Officer reviews evidence.
427. DS Officer may request field verification.
428. DS Officer assigns responsible agency.
429. NGO/volunteer support may be attached.
430. Agency works on the case.
431. Agency uploads evidence.
432. Agency marks completion.
433. DS Officer reviews completion.
434. Case becomes resolved/published.
435. Citizen receives notification.
436. Public transparency dashboard updates.
437. Citizen may provide feedback.
438. Admin retains oversight through audit logs.

## 19. AI TRIAGE

439. Build AI as an explicit service layer.
440. Do not spread AI provider calls throughout UI components.
441. Implement duplicate detection.
442. Implement category classification.
443. Implement priority scoring.
444. Implement long-description summarisation.
445. Treat AI output as advisory.
446. Clearly label AI-generated recommendations.
447. Allow human officers to override AI recommendations.
448. Store AI reasoning metadata safely where appropriate.
449. Log AI-generated decisions for auditability.
450. Never allow AI alone to reject a valid citizen case.
451. Design fallback behaviour if the AI service is unavailable.
452. AI failure must never prevent core reporting.
453. Provide mock/demo AI providers during local development if external API keys are missing.
454. Keep AI prompts versioned and maintainable.

## 20. MAP AND GEOLOCATION UX

455. Create a reusable CivicPulse map component.
456. Support interactive markers.
457. Support clustering when many cases exist.
458. Support category-aware map filtering.
459. Support status-aware visual indicators.
460. Support selecting a case from the map.
461. Support reverse-location display where available.
462. Allow location selection when reporting.
463. Allow location correction manually.
464. Support geographic boundaries relevant to DS divisions.
465. Do not expose exact private user coordinates when privacy rules require approximate locations.
466. Optimise maps for mobile.
467. Display location permissions clearly.
468. Create graceful fallback when geolocation is denied.
469. Provide manual location search where appropriate.

## 21. DATA MODEL

470. Build clean Prisma models for users.
471. Build role relationships.
472. Build cases/reports.
473. Build categories.
474. Build report media.
475. Build geolocation information.
476. Build verification records.
477. Build trust-score history.
478. Build AI triage records.
479. Build duplicate relationships.
480. Build case assignments.
481. Build field-verification tasks.
482. Build field evidence.
483. Build agencies.
484. Build NGOs.
485. Build volunteers.
486. Build commitments.
487. Build notifications.
488. Build comments where supported.
489. Build feedback.
490. Build audit logs.
491. Build DS divisions.
492. Build status history.
493. Build configuration/settings.
494. Index important query fields.
495. Design data relationships for scale.
496. Use transactions when business operations require atomicity.

## 22. SECURITY

497. Treat security as a core feature.
498. Enforce RBAC server-side.
499. Validate all user input with Zod.
500. Validate uploaded files.
501. Restrict MIME types and file sizes.
502. Protect privileged server actions.
503. Protect API routes.
504. Prevent insecure direct object access.
505. Do not expose unnecessary user information.
506. Sanitize public-facing data.
507. Protect audit logs from ordinary users.
508. Protect administrative functions.
509. Use secure environment variables.
510. Follow secure authentication practices.
511. Rate-limit sensitive actions where practical.
512. Add abuse protection around report submission.
513. Add abuse protection around verification actions.
514. Audit role changes.
515. Audit assignment changes.
516. Audit status overrides.
517. Audit moderation actions.
518. Make privacy-sensitive fields intentionally private.

## 23. ACCESSIBILITY

519. Target WCAG 2.1 AA quality.
520. Ensure keyboard navigation.
521. Ensure visible focus states.
522. Use accessible labels.
523. Use semantic HTML.
524. Use screen-reader-friendly status announcements.
525. Ensure sufficient colour contrast.
526. Never encode meaning through colour only.
527. Support reduced motion.
528. Ensure touch targets are large enough.
529. Ensure modals and dialogs are keyboard accessible.
530. Ensure forms have understandable error messages.
531. Ensure error messages are localised.
532. Test major workflows without a mouse.

## 24. LOCALISATION

533. Implement English.
534. Implement Sinhala.
535. Implement Tamil.
536. Create a scalable translation structure.
537. Do not hard-code user-facing strings throughout components.
538. Use a translation abstraction compatible with next-intl or the chosen library.
539. Persist language preference.
540. Make language switching easy to discover.
541. Prioritise citizen-facing translations.
542. Translate report forms.
543. Translate public dashboard labels.
544. Translate notifications.
545. Translate validation errors.
546. Translate status descriptions.
547. Prepare administrative translations for later expansion.

## 25. NOTIFICATIONS

548. Create a reusable notification system.
549. Support in-app notifications.
550. Prepare email/push abstraction for future integration.
551. Notify citizens when report status changes.
552. Notify citizens after verification threshold.
553. Notify citizens after assignment.
554. Notify citizens after resolution.
555. Notify verifiers about relevant nearby opportunities.
556. Notify DS Officers about new verified cases.
557. Notify agencies about assignments.
558. Notify agencies about escalations.
559. Notify NGOs about accepted commitments where appropriate.
560. Make notifications deep-link to related cases.

## 26. UX STATES

561. Every page must have a loading state.
562. Every data-driven page must have an empty state.
563. Every form must have validation states.
564. Every mutation must have pending state.
565. Every mutation must have success feedback.
566. Every important operation must have failure feedback.
567. Handle offline or poor-network conditions gracefully where practical.
568. Use skeleton loaders for dashboard content.
569. Provide retry actions for recoverable errors.
570. Avoid exposing raw stack traces.
571. Provide human-readable error messages.
572. Log technical errors for developers.

## 27. COMPONENT SYSTEM

573. Build a reusable design system.
574. Create Button variants.
575. Create Input variants.
576. Create Select components.
577. Create Textarea components.
578. Create Form components.
579. Create StatusBadge.
580. Create CaseCard.
581. Create CaseTimeline.
582. Create EvidenceGallery.
583. Create MapCard.
584. Create KPI card.
585. Create DataTable.
586. Create FilterBar.
587. Create SearchInput.
588. Create EmptyState.
589. Create ErrorState.
590. Create LoadingSkeleton.
591. Create NotificationItem.
592. Create RoleBadge.
593. Create TrustScore component.
594. Create VerificationCounter.
595. Create PriorityIndicator.
596. Create AssignmentDialog.
597. Create ConfirmationDialog.
598. Create LanguageSwitcher.
599. Create ThemeSwitcher.
600. Make components composable and documented.

## 28. DASHBOARD VISUALISATION

601. Use Recharts or equivalent for analytics.
602. Use line charts for trends.
603. Use bar charts for category comparison.
604. Use donut/pie charts carefully.
605. Use funnels for case lifecycle.
606. Use heatmap/map visualisation where useful.
607. Provide accessible chart labels.
608. Avoid chart overload.
609. Add useful hover information.
610. Make charts responsive.
611. Keep dashboard KPIs understandable at a glance.

## 29. PERFORMANCE

612. Optimise images.
613. Use responsive image delivery.
614. Avoid unnecessary client components.
615. Prefer server components where appropriate.
616. Lazy-load large map features.
617. Lazy-load expensive dashboard modules.
618. Paginate large datasets.
619. Use database indexes.
620. Avoid N+1 database queries.
621. Cache read-heavy public dashboard data when appropriate.
622. Keep initial page load fast.
623. Avoid oversized JavaScript bundles.
624. Use skeletons to improve perceived performance.
625. Compress uploads client-side where appropriate.

## 30. DEVELOPER EXPERIENCE

626. Keep TypeScript strict.
627. Avoid `any` unless strongly justified.
628. Use reusable utility functions.
629. Keep business logic separate from presentation.
630. Create service modules.
631. Create database access modules.
632. Create validation schemas.
633. Create permission helpers.
634. Create typed API contracts.
635. Keep environment configuration centralised.
636. Keep naming consistent.
637. Use meaningful component names.
638. Add comments only where they clarify non-obvious logic.
639. Avoid giant components.
640. Break complex pages into manageable modules.

## 31. TESTING

641. Create unit tests for business logic.
642. Test validation schemas.
643. Test permission helpers.
644. Test critical database logic.
645. Create integration tests for major backend operations.
646. Create end-to-end tests for the entire case lifecycle.
647. Test Citizen report submission.
648. Test Community verification.
649. Test DS Office assignment.
650. Test Agency resolution.
651. Test public dashboard updates.
652. Test authentication redirects.
653. Test RBAC.
654. Test role upgrade approval.
655. Test moderation flows.
656. Test multilingual switching.
657. Test mobile layouts.
658. Test accessibility on major workflows.
659. Test failure scenarios.
660. Test duplicate reports.
661. Test unavailable AI provider behaviour.

## 32. DEVOPS

662. Prepare the application for GitHub-based workflows.
663. Support main, Development, and Testing branch strategy.
664. Ensure linting runs in CI.
665. Ensure type checking runs in CI.
666. Ensure tests run in CI.
667. Keep environment-specific configuration separate.
668. Make database migrations reproducible.
669. Prepare Vercel deployment configuration.
670. Prepare production environment variables documentation.
671. Prepare MinIO/S3 configuration.
672. Prepare Mapbox configuration.
673. Prepare authentication configuration.
674. Prepare AI provider configuration.
675. Prepare monitoring integration points.
676. Prepare Sentry-style error monitoring integration.
677. Prepare analytics integration.
678. Document deployment steps.

## 33. SEED DATA

679. Create realistic development seed data.
680. Include multiple Sri Lankan areas.
681. Include multiple categories.
682. Include multiple case statuses.
683. Include citizen users.
684. Include verifier users.
685. Include volunteers.
686. Include NGO accounts.
687. Include agency accounts.
688. Include DS Officers.
689. Include Admin.
690. Create believable case histories.
691. Create verification histories.
692. Create assignments.
693. Create field evidence metadata.
694. Create analytics-friendly records.
695. Clearly mark development/sample records where required.

## 34. DEMO QUALITY

696. The application must be impressive during a live project demonstration.
697. The landing page should immediately establish product credibility.
698. The report workflow should be fast and visually polished.
699. The verifier workflow should clearly demonstrate community trust.
700. The DS Officer dashboard should demonstrate institutional coordination.
701. The agency dashboard should demonstrate action and accountability.
702. The NGO dashboard should demonstrate civic collaboration.
703. The volunteer workflow should demonstrate field verification.
704. The public dashboard should demonstrate transparency.
705. The admin dashboard should demonstrate governance and control.
706. The complete case lifecycle should be demonstrable from start to finish.

## 35. FUTURE-READY ARCHITECTURE

707. Design APIs for future mobile applications.
708. Keep business logic reusable between web and future Flutter/mobile clients.
709. Prepare for real-time updates.
710. Prepare WebSocket or server-sent events integration points.
711. Prepare push notification support.
712. Prepare offline-first enhancements for field users.
713. Prepare advanced analytics.
714. Prepare GIS/geospatial intelligence.
715. Prepare ML/AI model upgrades.
716. Prepare organisation-level analytics.
717. Prepare CSR contribution tracking.
718. Prepare public impact reporting.
719. Prepare open-data capabilities with privacy controls.
720. Prepare scalable file storage.
721. Prepare background processing.
722. Prepare rate limiting and abuse prevention.
723. Prepare multi-region scalability without forcing premature complexity.

## 36. ANTIGRAVITY EXECUTION BEHAVIOUR

724. First inspect the entire existing project.
725. Identify the current framework, routing structure, components, styles, dependencies, database setup, and environment.
726. Do not overwrite useful existing work blindly.
727. Create an implementation roadmap inside the repository.
728. Implement the foundational design system first.
729. Implement authentication and role architecture next.
730. Implement the shared application shell.
731. Implement the Citizen flow.
732. Implement the Verification flow.
733. Implement the DS Officer flow.
734. Implement the Agency flow.
735. Implement Volunteer and NGO workflows.
736. Implement Admin.
737. Implement public transparency.
738. Then refine cross-cutting features.
739. After every major milestone, run formatting, linting, type checking, and relevant tests.
740. Fix errors immediately rather than accumulating technical debt.
741. Never leave broken imports.
742. Never leave placeholder routes that look complete but do nothing unless explicitly marked as future functionality.
743. When external services are not configured, build clean provider abstractions and useful development fallbacks.
744. Keep the UI functional with seeded/demo data.
745. Preserve realistic data flows.
746. Do not make every page look identical.
747. Give every role a distinct purpose-built experience.
748. Reuse components while preserving role-specific UX.
749. Prefer robust implementation over superficial visual decoration.
750. Ensure the finished result looks and behaves like a premium commercial civic technology product.

## 37. FINAL QUALITY BAR

751. Ask yourself whether this could be presented to a government stakeholder.
752. Ask yourself whether a citizen can report a problem in under one minute on a phone.
753. Ask yourself whether a citizen can understand what happened to the complaint.
754. Ask yourself whether a verifier can make a decision quickly.
755. Ask yourself whether a DS Officer can prioritise and route work efficiently.
756. Ask yourself whether an agency can clearly understand what must be repaired.
757. Ask yourself whether an NGO can identify meaningful opportunities to help.
758. Ask yourself whether a volunteer can complete field work safely and efficiently.
759. Ask yourself whether an administrator can govern the platform securely.
760. Ask yourself whether the public dashboard truly improves transparency.
761. Ask yourself whether the architecture can evolve into a production system.
762. Ask yourself whether the UI is visually premium on both mobile and desktop.
763. Ask yourself whether every critical workflow handles success, loading, failure, empty, and permission-denied states.
764. Ask yourself whether accessibility has been designed into the components rather than added later.
765. Ask yourself whether Sinhala, Tamil, and English can coexist cleanly.
766. Ask yourself whether map interactions are useful rather than decorative.
767. Ask yourself whether AI is clearly advisory rather than pretending to replace human judgement.
768. Ask yourself whether private data is protected.
769. Ask yourself whether the application remains usable when external services fail.
770. Ask yourself whether the codebase is maintainable by another developer.

## 38. REQUIRED OUTPUT FROM THE BUILD AGENT

771. Produce a fully structured CivicPulse LK application.
772. Produce the premium design system.
773. Produce responsive public pages.
774. Produce authenticated role-specific dashboards.
775. Produce the complete case lifecycle UI.
776. Produce shared reusable components.
777. Produce secure backend architecture.
778. Produce Prisma database architecture.
779. Produce validation schemas.
780. Produce RBAC enforcement.
781. Produce map integration architecture.
782. Produce AI integration architecture.
783. Produce file upload architecture.
784. Produce analytics.
785. Produce multilingual architecture.
786. Produce notifications architecture.
787. Produce audit logging.
788. Produce test coverage for critical paths.
789. Produce deployment documentation.
790. Produce environment variable documentation.
791. Produce a clear README.
792. Keep all implementation decisions documented where important.
793. Keep the repository organised and professional.
794. Do not stop at a visually attractive frontend.
795. Build the product as a complete end-to-end system foundation.

## 39. FINAL DESIGN PHILOSOPHY

796. CivicPulse should feel human.
797. CivicPulse should feel trustworthy.
798. CivicPulse should feel institutional.
799. CivicPulse should feel technologically advanced.
800. CivicPulse should feel distinctly Sri Lankan.
801. CivicPulse should make civic participation feel simple.
802. CivicPulse should make accountability visible.
803. CivicPulse should transform a complaint into a traceable case.
804. CivicPulse should transform a citizen into a participant.
805. CivicPulse should connect community verification with institutional action.
806. CivicPulse should use AI intelligently but responsibly.
807. CivicPulse should use data to improve prioritisation.
808. CivicPulse should make public infrastructure issues easier to understand.
809. CivicPulse should make progress measurable.
810. CivicPulse should make collaboration between government, communities, NGOs, and volunteers practical.
811. The final product must look premium without becoming visually confusing.
812. The final product must be modern without sacrificing usability.
813. The final product must be feature-rich without becoming cluttered.
814. The final product must be future-ready without becoming over-engineered.
815. Build CivicPulse LK as a serious civic technology platform that can grow beyond the competition prototype into a real-world product.
